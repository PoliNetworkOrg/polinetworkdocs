# Adding a Secret

Secrets are stored inside a Azure Key Vault. To add a new secret, this page will
explain how to reference the secret in k8s deployments.

## Basics

A secret can be added to your deployment by using a `SecretProviderClass` object.
This object will automatically reference the secret stored in the Azure Key Vault.

```yaml
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: sc-demo-keyvault-csi
spec:
  provider: azure
  parameters:
    usePodIdentity: "false"
    useVMManagedIdentity: "true"                                  # Set to true for using managed identity
    userAssignedIdentityID: "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" # Set the clientID of the managed identity to use
    tenantId: "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"               # The tenant ID of the key vault
    keyvaultName: "kv-polinetwork"                                # Set to the name of your key vault
    objects: |
      array:
        - |
          objectName: ExampleSecret            # keyvault secret name
          objectType: secret
```

A detailed guide can be found in the [official documentation](https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-identity-access?tabs=azure-portal&pivots=access-with-a-user-assigned-managed-identity).

This maps the secret `ExampleSecret` from the key vault `kv-polinetwork` to a volume you can mount in your pod.
A few things to note

- `usePodIdentity` should be set to `false` and `useVMManagedIdentity` should be set to `true` since we are using a VM managed identity.
- `userAssignedIdentityID` should be set to the client ID of the managed identity we linked to the key vault.
- `tenantId` should be set to the tenant ID of our Azure tenant.

:::tip
If you are unsure about what the clinet ID and tenant ID are, you probably aren't one of the heads of IT in PoliNetwork.
Changes to such parts of the manifest should only be done by someone with the right permissions.

Anyway here's how to get them:

- Tenant ID:

```sh
az account show --query tenantId --output tsv
```

- Client ID:

```sh
az aks show --resource-group <resource-group> --name <cluster-name> --query addonProfiles.azureKeyvaultSecretsProvider.identity.clientId -o tsv
```

:::

## Different ways to mount your secret

### Volume

In the above example, the secret can be mounted as a volume and then read from disk in your pod like in the example below:

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: sc-demo-keyvault-csi
spec:
  containers:
    - name: busybox
      image: registry.k8s.io/e2e-test-images/busybox:1.29-4
      command:
        - "/bin/sleep"
        - "10000"
      volumeMounts:
        - name: secrets-store01-inline # Name of the volume
          mountPath: "/mnt/secrets-store" # Path where the secrets are mounted inside the pod
          readOnly: true # A secret should be mounted as read-only
      resources:
        requests:
          cpu: 100m
          memory: 128Mi
        limits:
          cpu: 250m
          memory: 256Mi
  volumes:
    - name: secrets-store01-inline # Name of the volume
      csi:
        driver: secrets-store.csi.k8s.io
        readOnly: true
        volumeAttributes:
          secretProviderClass: "sc-demo-keyvault-csi" # The name of the SecretProviderClass
```

Assuming this is the pod manifest you applied to the cluster, you can retrieve the secret by reading the file `/mnt/secrets-store/ExampleSecret`.

```sh
kubectl exec -it sc-demo-keyvault-csi -- cat /mnt/secrets-store/ExampleSecret
```

:::tip
More than one secret can be mounted at the same time by adding more entries in the array, all of them can be found in the same directory, you can see them by running:

```sh
kubectl exec -it sc-demo-keyvault-csi -- ls /mnt/secrets-store
```

:::

### Environment Variables

You can also mount the secret as an environment variable in your pod by first
syncing the secret with the k8s secrets like in the example below:

```yaml
...
spec:
  provider: azure
  ...
  secretObjects:   
    # ognuno di questi e' una COLLEZIONE di secrets
    # si possono definire piu' collezioni separate, ma per identificare i secret Azure dagli altri k8s secrets,
    # utilizziamo una collezione che contiene più secrets (come se fosse un Object appunto)
    # importante: va creato solo la prima volta, poi basta aggiungere una key sotto
    - secretName: azure-kv
      type: Opaque
      data:
        # qui va aggiunto il secret che vogliamo esporre anche come k8s secret
        # importante distinguere objectName (reference al KV) dalla key (nome personalizzato)
        - objectName: ExampleSecret   # nome del secret dentro il KV di azure
          key: example-secret         # key personalizzata del k8s secret
```

Like before, you can then reference the secret in your pod manifest:

```yaml
...
spec:
  containers:
      env:
      # aggiungiamo l'env variable
      - name: EXAMPLE_SECRET # nome dell'env variable (indipendente dal nome del secret)
        valueFrom:
          secretKeyRef:
            name: azure-kv          # nome della collezione di k8s secret
            key: example-secret     # key del secret specifico da utilizzare dentro la collezione
...
```
