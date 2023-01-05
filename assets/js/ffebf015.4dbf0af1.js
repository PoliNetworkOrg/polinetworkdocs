"use strict";(self.webpackChunkpolinetworkdocs=self.webpackChunkpolinetworkdocs||[]).push([[589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:3},a=void 0,l={unversionedId:"Infra/k8s-basics/intro",id:"Infra/k8s-basics/intro",title:"intro",description:"Intro",source:"@site/docs/Infra/k8s-basics/intro.md",sourceDirName:"Infra/k8s-basics",slug:"/Infra/k8s-basics/intro",permalink:"/docs/Infra/k8s-basics/intro",draft:!1,editUrl:"https://github.com/polinetworkorg/polinetworkdocs/docs/Infra/k8s-basics/intro.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"K8s Basics",permalink:"/docs/category/k8s-basics"},next:{title:"monitoring",permalink:"/docs/Infra/k8s-basics/day-to-day/monitoring"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"Tools needed",id:"tools-needed",level:2},{value:"Configure the tools",id:"configure-the-tools",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Keep in mind that the aim of this guide is not to provide a complete overview of all the commands in the k8s ecosystem but merely to give an easy to read handbook on very basic stuff "),(0,o.kt)("h2",{id:"tools-needed"},"Tools needed"),(0,o.kt)("p",null,"If you want to monitor or make changes to the pods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Cli"),(0,o.kt)("li",{parentName:"ul"},"Kubectl")),(0,o.kt)("p",null,"If you want to make changes to the infrastructure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Terraform"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/antonbabenko/pre-commit-terraform"},"Pre-Commits"))),(0,o.kt)("h2",{id:"configure-the-tools"},"Configure the tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login in Azure CLI using az login"),(0,o.kt)("li",{parentName:"ul"},"Configure Kubectl using ",(0,o.kt)("inlineCode",{parentName:"li"},"az aks get-credentials --resource-group rg-polinetwork --name aks-polinetwork"))))}p.isMDXComponent=!0}}]);