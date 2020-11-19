(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(90)),i={title:"Nginx Ingress"},s={unversionedId:"setup/nginx-ingress",id:"setup/nginx-ingress",isDocsHomePage:!1,title:"Nginx Ingress",description:"Using Nginx as a reverse proxy is",source:"@site/docs/setup/nginx-ingress.md",slug:"/setup/nginx-ingress",permalink:"/k8s-notes/setup/nginx-ingress",editUrl:"https://github.com/jasonk/k8s-notes/edit/main/docs/setup/nginx-ingress.md",version:"current",sidebar:"docs",previous:{title:"MetalLB",permalink:"/k8s-notes/setup/metallb"},next:{title:"Exploring Pods",permalink:"/k8s-notes/setup/exploring-pods"}},c=[],p={rightToc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nginx.com/"}),"Nginx")," as a reverse proxy is\na popular solution to protecting web-based applications, and the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.github.io/ingress-nginx/"}),"Nginx Ingress\nController"),"  can be used\nto handle that."),Object(a.b)("p",null,"Installing the nginx ingress controller is as easy as these things get:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/baremetal/deploy.yaml\n")),Object(a.b)("p",null,"However, if you now inspect what you got from that install, you'll see\nthat we have random NodePorts being mapped to port 80 and 443.  By\ndefault the manifest creates a NodePort service, because it can't\ndepend on there being any kind of cloud-based load balancer."))}l.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,d=u["".concat(i,".").concat(g)]||u[g]||b[g]||a;return t?o.a.createElement(d,s(s({ref:n},p),{},{components:t})):o.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);