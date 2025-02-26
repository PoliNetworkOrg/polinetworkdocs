---
sidebar_position: 1
---

# Intro

Let's discover **PoliNetwork's Infrastructure in less than 5 minutes**.

## Getting Started

### Where
Our infrastructure is deployed on Azure West Europe (Amsterdam).
The description is found [here](https://github.com/polinetworkorg/terraform), described in Terraform (IaC).

### What
The core is a AKS Cluster (Kubernetes), in combination with various other services (KeyVault, Disks, Azure Active Directory, ...)

### Why
Why not a simple VM?
AKS gives us the flexibility of a 10s pod deployment, reliability (with ArgoCD ensuring all pods are up and running all the time) and allows us to be more precise and clean in our infrastructure, with better monitoring and allocated resources for each application depending on the importance.  