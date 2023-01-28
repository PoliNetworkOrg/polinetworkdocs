"use strict";(self.webpackChunkpolinetworkdocs=self.webpackChunkpolinetworkdocs||[]).push([[627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Setup",p={unversionedId:"Infra/setup",id:"Infra/setup",title:"Setup",description:"If it's your first time accessing the infrastructure, you'll need to setup the tools and configure them.",source:"@site/docs/Infra/setup.md",sourceDirName:"Infra",slug:"/Infra/setup",permalink:"/docs/Infra/setup",draft:!1,editUrl:"https://github.com/polinetworkorg/polinetworkdocs/docs/Infra/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"infra",previous:{title:"Intro",permalink:"/docs/Infra/intro"},next:{title:"K8s Basics",permalink:"/docs/category/k8s-basics-1"}},l={},s=[{value:"Azure CLI &amp; Kubectl",id:"azure-cli--kubectl",level:2},{value:"Port Forwarding",id:"port-forwarding",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"If it's your first time accessing the infrastructure, you'll need to setup the tools and configure them."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This tutorial assumes your account has the right permissions to access the infrastructure. If not, please contact the team.")),(0,a.kt)("h2",{id:"azure-cli--kubectl"},"Azure CLI & Kubectl"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download and install Kubectl ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download and install the Azure CLI ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"az login")," to login.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"az aks get-credentials --resource-group rg-polinetwork --name aks-polinetwork")," to configure Kubectl.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To check if everything is working, run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n <namespace>"),". You should see a list of pods."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The possible values of ",(0,a.kt)("inlineCode",{parentName:"p"},"<namespace>")," may vary depending on the project you're working on. If you're not sure, ask the team.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Starting from Kubectl v1.26, the Azure auth plugin has been removed. If you're using a new version, you'll need to install and run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/kubelogin#setup"},"kubelogin"),". Then run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n <namespace>")," again.")),(0,a.kt)("h2",{id:"port-forwarding"},"Port Forwarding"),(0,a.kt)("p",null,"To access services running on the cluster (such as the MariaDB database), you'll need to forward the correct ports. To do so, we need the correct pod name."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n <namespace>")," to get the pod name. The pod name is listed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"NAME")," column.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl port-forward <pod-name> <local-port>:<remote-port> -n <namespace>"),(0,a.kt)("br",{parentName:"p"}),"\n","For example, if you want to access the MariaDB database, you'll need to run"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl port-forward <pod-name> 3306:3306 -n <namespace>\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you're using the MariaDB database, you can use the following command to get the pod name and forward the port in one go:  "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'PODNAME=$(kubectl get pods --no-headers -n mariadb -o custom-columns=":metadata.name" | tail -1); kubectl port-forward -n mariadb $PODNAME 3306:3306\n')),(0,a.kt)("p",{parentName:"admonition"},"You can use the same template to connect to other services.")))}c.isMDXComponent=!0}}]);