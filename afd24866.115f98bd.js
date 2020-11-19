(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(89)),c={title:"ArgoCD"},l={unversionedId:"apps/argocd",id:"apps/argocd",isDocsHomePage:!1,title:"ArgoCD",description:"Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.",source:"@site/docs/apps/argocd.md",slug:"/apps/argocd",permalink:"/k8s-notes/apps/argocd",editUrl:"https://github.com/jasonk/k8s-notes/edit/main/docs/apps/argocd.md",version:"current",sidebar:"docs",previous:{title:"Taints and Tolerations",permalink:"/k8s-notes/concepts/tainting"},next:{title:"cert-manager",permalink:"/k8s-notes/apps/cert-manager"}},i=[],s={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.")),Object(o.b)("p",null,"Home Page: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://argoproj.github.io/argo-cd/"}),"https://argoproj.github.io/argo-cd/")),Object(o.b)("h1",{id:"cluster-installation"},"Cluster Installation"),Object(o.b)("p",null,"To install the app on the cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),Object(o.b)("h1",{id:"workstation-installation"},"Workstation Installation"),Object(o.b)("p",null,"There is also a CLI client you can install on your workstation, if you want."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"brew install argocd\nchoco install argocd\n")),Object(o.b)("p",null,"For other platforms you can download it from\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/argoproj/argo-cd/releases/latest"}),"https://github.com/argoproj/argo-cd/releases/latest")),Object(o.b)("h1",{id:"access"},"Access"),Object(o.b)("p",null,"This will create an initial user named ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),". By default the admin user's password is set to the name of the argocd pod, which you can find with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name\n")),Object(o.b)("p",null,"Use the pod name (without the ",Object(o.b)("inlineCode",{parentName:"p"},"pod/")," prefix) as the password to login."),Object(o.b)("p",null,"Now you can forward a local port to it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl port-forward svc/argocd-server -n argocd 8081:443 &\n")),Object(o.b)("p",null,"And you should be able to access it at http://localhost:8081"),Object(o.b)("h1",{id:"next-steps"},"Next Steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/#quick-start"}),"ArgoCD Quick Start")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd/blob/master/docs/faq.md"}),"FAQ"))))}p.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(g,l(l({ref:t},s),{},{components:r})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);