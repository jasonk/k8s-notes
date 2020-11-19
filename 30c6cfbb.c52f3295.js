(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?r.a.createElement(m,s(s({ref:n},l),{},{components:t})):r.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(3),r=(t(0),t(104));const o={title:"Exploring Pods"},i={unversionedId:"setup/exploring-pods",id:"setup/exploring-pods",isDocsHomePage:!1,title:"Exploring Pods",description:"Let's take a break from installing pods for a minute and look at some",source:"@site/docs/setup/exploring-pods.md",slug:"/setup/exploring-pods",permalink:"/k8s-notes/setup/exploring-pods",editUrl:"https://github.com/jasonk/k8s-notes/edit/master/docs/setup/exploring-pods.md",version:"current",sidebar:"docs",previous:{title:"Nginx Ingress",permalink:"/k8s-notes/setup/nginx-ingress"},next:{title:"Control Plane",permalink:"/k8s-notes/concepts/control-plane"}},s=[],c={rightToc:s};function l({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Let's take a break from installing pods for a minute and look at some\nof things you can do with those pods now that you have them."),Object(r.b)("p",null,"If you want to take a look around inside a pod container, that's\na very easy thing to do, just pick an appropriate container and run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl exec -it grafana-7c9bc466d8-dw5rz -n monitoring -- /bin/sh\n")),Object(r.b)("p",null,"You can use this same idea to run whatever commands you want inside\nthe container.  Say you just want to see what commands are running in\na container:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl exec -it grafana-7c9bc466d8-dw5rz -n monitoring -- ps xauwww\n")),Object(r.b)("h1",{id:"resetting-the-grafana-admin-password"},"Resetting the Grafana Admin Password"),Object(r.b)("p",null,"Let's use this power for something useful.  You may have noticed that\nI've had you visit the login screen of your Grafana install several\ntimes now, but always just to ensure you could get there, we never\nactually logged in.  Had we tried your next question would have been\n\"what's the password?\" and I dont' have any idea what the answer is."),Object(r.b)("p",null,'So, let\'s fix that by changing the password to something else using\nthis new "running commands in containers" ability.'),Object(r.b)("p",null,"First, let's find the name of our grafana container:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl get pods -o=name -n monitoring | grep grafana | xargs basename\n")),Object(r.b)("p",null,"Now let's use that information to reset the admin password for our\nGrafana instance to be the pod name."),Object(r.b)("p",null,'NAMESPACE=monitoring\nPOD_NAME=$(kubectl get pods  -o=name -n "${NAMESPACE}" | grep grafana | cut -f2 -d\\/'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'POD="$(kubectl get pods -o=name -n monitoring | grep grafana | xargs basename)"\nkubectl exec -it -n monitoring "${POD}" -- /usr/share/grafana/bin/grafana-cli admin reset-admin-password "${POD}"\n')),Object(r.b)("p",null,"Now take a little bit of time to explore all the data being collected\nabout your cluster by Prometheus and Grafana.  The default\n",Object(r.b)("inlineCode",{parentName:"p"},"kube-prometheus")," install defines a bunch of default dashboards with\na wide variety of metrics."))}l.isMDXComponent=!0}}]);