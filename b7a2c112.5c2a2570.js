(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,g=p["".concat(s,".").concat(m)]||p[m]||b[m]||c;return a?r.a.createElement(g,i(i({ref:t},l),{},{components:a})):r.a.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,s=new Array(c);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),r=(a(0),a(104));const c={title:"cert-manager"},s={unversionedId:"apps/cert-manager",id:"apps/cert-manager",isDocsHomePage:!1,title:"cert-manager",description:"cert-manager is a native Kubernetes certificate management",source:"@site/docs/apps/cert-manager.md",slug:"/apps/cert-manager",permalink:"/k8s-notes/apps/cert-manager",editUrl:"https://github.com/jasonk/k8s-notes/edit/master/docs/apps/cert-manager.md",version:"current",sidebar:"docs",previous:{title:"ArgoCD",permalink:"/k8s-notes/apps/argocd"}},i=[],o={rightToc:i};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"cert-manager is a native Kubernetes certificate management\ncontroller. It can help with issuing certificates from a variety of\nsources, such as Let\u2019s Encrypt, HashiCorp Vault, Venafi, a simple\nsigning key pair, or self signed."),Object(r.b)("p",{parentName:"blockquote"},"It will ensure certificates are valid and up to date, and attempt to\nrenew certificates at a configured time before expiry.")),Object(r.b)("p",null,"Home Page: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cert-manager.io/docs/"}),"https://cert-manager.io/docs/")),Object(r.b)("h1",{id:"cluster-installation"},"Cluster Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.0.4/cert-manager.yaml\n")),Object(r.b)("h1",{id:"testing-the-install"},"Testing the install"),Object(r.b)("p",null,"Create a test issuer to issue a self-signed certificate:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cat <<EOF > test-resources.yaml\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: cert-manager-test\n---\napiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: test-selfsigned\n  namespace: cert-manager-test\nspec:\n  selfSigned: {}\n---\napiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: selfsigned-cert\n  namespace: cert-manager-test\nspec:\n  dnsNames:\n    - example.com\n  secretName: selfsigned-cert-tls\n  issuerRef:\n    name: test-selfsigned\nEOF\n")),Object(r.b)("p",null,'Then apply that configuration.  If you get an error about "failed\ncalling webhook" then the cert-manager is probably still coming up,\nwait a minute or two and try again.'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f test-resources.yaml\n")),Object(r.b)("p",null,"Check that it was successfully issued (you may need to wait a few\nseconds for it to finish)."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl describe certificate -n cert-manager-test\n")),Object(r.b)("p",null,"Clean up:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl delete -f test-resources.yaml\n")),Object(r.b)("h1",{id:"workstation-installation"},"Workstation Installation"),Object(r.b)("p",null,"There is a ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," plugin for ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," that can help make some\nof the more common actions easier."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -Lo kubectl-cert-manager.tar.gz https://github.com/jetstack/cert-manager/releases/download/v1.0.4/kubectl-cert_manager-linux-amd64.tar.gz\ntar xzf kubectl-cert-manager.tar.gz\nsudo mv kubectl-cert_manager /usr/local/bin\n")),Object(r.b)("p",null,"To see how to use it visit\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cert-manager.io/docs/usage/kubectl-plugin/"}),"https://cert-manager.io/docs/usage/kubectl-plugin/")),Object(r.b)("h1",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"To actually issue certificates you need to configure an issuer."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/configuration/selfsigned/"}),"SelfSigned"))),Object(r.b)("p",null,"The SelfSigned issuer is the simplest to setup, but it also means that\nclients have no way to trust the issued certificates.  You might want\nto use this one for testing, but otherwise it's only really useful for\nthe bootstrapping phase of some other PKI setup."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/configuration/ca/"}),"CA"))),Object(r.b)("p",null,"The CA issuer creates a Certificate Authority in the cluster, with\na private key stored as a Kubernetes Secret that can then be used to\nsign other certificates.  This is one step above the SelfSigned\nissuer, as you still have to add the CA certificate to your browser or\nclient applications so they know to trust the issued certificates, but\nonce they are configured any certificates issued by this issuer will\nbe trusted."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/configuration/acme/"}),"ACME"))),Object(r.b)("p",null,"The ACME issuer requests certificates using the ACME protocol.  The\nmost popular of these is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://letsencrypt.org/"}),"Let's Encrypt"),",\nwhich provides free certificates signed by a globally trusted\ncertificate authority."),Object(r.b)("p",null,"Other issuer types can be found at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cert-manager.io/docs/configuration/"}),"https://cert-manager.io/docs/configuration/")),Object(r.b)("h1",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.cert-manager.io/en/latest/tutorials/acme/http-validation.html"}),"https://docs.cert-manager.io/en/latest/tutorials/acme/http-validation.html")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cert-manager.io/docs/faq/"}),"FAQ"))))}l.isMDXComponent=!0}}]);