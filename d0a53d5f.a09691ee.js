(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||l[b]||a;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(104));const a={title:"Adding Worker Nodes"},c={unversionedId:"setup/worker-nodes",id:"setup/worker-nodes",isDocsHomePage:!1,title:"Adding Worker Nodes",description:"To add addtional worker nodes to your cluster, start the same way you",source:"@site/docs/setup/worker-nodes.md",slug:"/setup/worker-nodes",permalink:"/k8s-notes/setup/worker-nodes",editUrl:"https://github.com/jasonk/k8s-notes/edit/master/docs/setup/worker-nodes.md",version:"current",sidebar:"docs",previous:{title:"Control Node",permalink:"/k8s-notes/setup/control-node"},next:{title:"User Configuration",permalink:"/k8s-notes/setup/user-config"}},s=[],i={rightToc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To add addtional worker nodes to your cluster, start the same way you\ndid for the control node, by installing Debian 10 or whatever Linux\ndistribution you are using as your base OS."),Object(o.b)("p",null,"Then run the same install steps to get kubeadm, kubelet and kubectl installed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'apt update\napt install -y apt-transport-https ca-certificates curl \\\n  software-properties-common gnupg-agent\n\ncurl -fsSL https://download.docker.com/linux/debian/gpg \\\n  | apt-key --keyring /etc/apt/trusted.gpg.d/docker.gpg add -\necho "deb https://download.docker.com/linux/debian buster stable" \\\n  > /etc/apt/sources.list.d/docker.list\n\ncurl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg \\\n  | apt-key --keyring /etc/apt/trusted.gpg.d/kubernetes.gpg add -\necho "deb https://apt.kubernetes.io/ kubernetes-xenial main" \\\n  > /etc/apt/sources.list.d/kubernetes.list\n\napt update\napt upgrade -y\napt install -y containerd.io kubeadm kubelet kubectl\n')),Object(o.b)("p",null,"Now, back on the master you need to get the join command and then run\nthe command that it gives you on the new node."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubeadm token create --print-join-command\n")))}u.isMDXComponent=!0}}]);