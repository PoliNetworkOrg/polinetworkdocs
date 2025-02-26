"use strict";(self.webpackChunkpolinetworkdocs=self.webpackChunkpolinetworkdocs||[]).push([[506],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>p});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),d=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=d(n.components);return r.createElement(c.Provider,{value:e},n.children)},l="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),l=d(t),b=o,p=l["".concat(c,".").concat(b)]||l[b]||g[b]||a;return t?r.createElement(p,i(i({ref:e},u),{},{components:t})):r.createElement(p,i({ref:e},u))}));function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[l]="string"==typeof n?n:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2185:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,s={unversionedId:"Infra/k8s-basics/day-to-day/monitoring",id:"Infra/k8s-basics/day-to-day/monitoring",title:"monitoring",description:"Monitoring",source:"@site/docs/Infra/k8s-basics/day-to-day/monitoring.md",sourceDirName:"Infra/k8s-basics/day-to-day",slug:"/Infra/k8s-basics/day-to-day/monitoring",permalink:"/docs/Infra/k8s-basics/day-to-day/monitoring",draft:!1,editUrl:"https://github.com/polinetworkorg/polinetworkdocs/tree/main/docs/Infra/k8s-basics/day-to-day/monitoring.md",tags:[],version:"current",frontMatter:{},sidebar:"infra",previous:{title:"intro",permalink:"/docs/Infra/k8s-basics/intro"},next:{title:"ssh",permalink:"/docs/Infra/k8s-basics/day-to-day/ssh"}},c={},d=[{value:"Monitoring",id:"monitoring",level:2}],u={toc:d};function l(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"The first thing you'll need to run is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods -A\n")),(0,o.kt)("p",null,"This will give you a breakdown of all the pods running in the infrastructure, this is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAMESPACE              NAME                                                     READY   STATUS                   RESTARTS        AGE\nargocd                 argo-argocd-application-controller-0                     1/1     Running                  0               46h\nargocd                 argo-argocd-applicationset-controller-7fdfdc786f-hzbwv   1/1     Running                  0               16d\nargocd                 argo-argocd-dex-server-654c59ffdf-mj77j                  1/1     Running                  0               16d\nargocd                 argo-argocd-notifications-controller-7987fc45b5-jgxwr    1/1     Running                  0               16d\nargocd                 argo-argocd-redis-7f845dff5-97dch                        1/1     Running                  0               16d\nargocd                 argo-argocd-repo-server-9c7bf9cb-zfdcj                   1/1     Running                  12 (25h ago)    16d\nargocd                 argo-argocd-server-86b5d7ddcf-686kp                      1/1     Running                  0               46h\nbot-dev                bot-dev-5d95dfc74c-6kjk9                                 1/1     Running                  1 (114m ago)    8h\nbot-dev                bot-dev-6b6f9f776d-8jnts                                 0/1     ContainerStatusUnknown   1               28h\nbot-dev                bot-dev-6b6f9f776d-xtf9z                                 0/1     ContainerStatusUnknown   1               25h\nbot-dev                bot-dev-85db98944b-slj7p                                 0/1     ContainerStatusUnknown   2 (33h ago)     46h\nbot-mat                bot-mat-b5c7d6c55-xs9zh                                  1/1     Running                  0               7h37m\nbot-prod               bot-prod-7967fff9bf-sbj47                                1/1     Running                  0               8h\ncalico-system          calico-kube-controllers-5598966f4d-xlt4b                 1/1     Running                  0               16d\ncalico-system          calico-node-x4n8x                                        1/1     Running                  3 (46h ago)     16d\ncalico-system          calico-node-x8wbh                                        1/1     Running                  1 (4h14m ago)   10h\ncalico-system          calico-typha-d78cf44dc-rv2bz                             1/1     Running                  0               16d\nkube-system            cloud-node-manager-5qkc2                                 1/1     Running                  0               10h\nkube-system            cloud-node-manager-v78ms                                 1/1     Running                  0               16d\nkube-system            coredns-autoscaler-5589fb5654-5gx7t                      1/1     Running                  0               16d\nkube-system            coredns-b4854dd98-gk44p                                  1/1     Running                  0               16d\nkube-system            coredns-b4854dd98-nmkrp                                  1/1     Running                  0               16d\nkube-system            csi-azuredisk-node-l8bfw                                 3/3     Running                  0               10h\nkube-system            csi-azuredisk-node-rvmlx                                 3/3     Running                  0               16d\nkube-system            csi-azurefile-node-fkpgg                                 3/3     Running                  0               10h\nkube-system            csi-azurefile-node-q8khz                                 3/3     Running                  0               16d\nkube-system            konnectivity-agent-bc779f4c7-2gr86                       1/1     Running                  0               16d\nkube-system            konnectivity-agent-bc779f4c7-mdbmq                       1/1     Running                  0               16d\nkube-system            kube-proxy-nlvhd                                         1/1     Running                  0               16d\nkube-system            kube-proxy-vbwtj                                         1/1     Running                  0               10h\nkube-system            metrics-server-f77b4cd8-k9v6f                            1/1     Running                  0               16d\nkube-system            metrics-server-f77b4cd8-zkfhl                            1/1     Running                  0               16d\nkubernetes-dashboard   dashboard-metrics-scraper-6f669b9c9b-mjzfj               1/1     Running                  0               33h\nkubernetes-dashboard   kubernetes-dashboard-758765f476-hvzdz                    1/1     Running                  0               33h\nmariadb                mariadb-67f5f7896c-bcw2r                                 0/1     ContainerStatusUnknown   1               2d\nmariadb                mariadb-67f5f7896c-ng5df                                 1/1     Running                  0               24h\ntigera-operator        tigera-operator-7c546fc6d5-hjdbc                         1/1     Running                  9 (25h ago)     16d\n")),(0,o.kt)("p",null,"You see that the dev bot is struggling a bit with multiple reboots and dead pods, which is to be expected as its allocated resources are the lowest in the cluster, given the marginal importance.\nYou can also see that the production bots (prod and mat) are both apparently healthy and the database is fine with only 1 reboot 24h ago."),(0,o.kt)("p",null,"You can take a deeper look into the monitoring with ArgoCD.\nStart by getting the argocd password using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d\n')),(0,o.kt)("p",null,"then configure the port-forward to your localhost:8081"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward -n argocd :argo-argocd-server_POD_NAME: 8081:8080\n")),(0,o.kt)("p",null,"now connect to argoCD via ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8081"),".\nFind an overview of argocd ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/"},"here")))}l.isMDXComponent=!0}}]);