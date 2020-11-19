(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(104));const a={},c={unversionedId:"objects/Service",id:"objects/Service",isDocsHomePage:!1,title:"Service",description:"Service",source:"@site/docs/objects/Service.md",slug:"/objects/Service",permalink:"/k8s-notes/objects/Service",editUrl:"https://github.com/jasonk/k8s-notes/edit/master/docs/objects/Service.md",version:"current"},i=[{value:"Services Without Selectors",id:"services-without-selectors",children:[]},{value:"Multi-Port Services",id:"multi-port-services",children:[]}],s={rightToc:i};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"service"},"Service"),Object(o.b)("p",null,"Each pod in a deployment will get created with a unique IP address,\nbut since the pods are ephemeral these will also be ephemeral.  In\norder to be able to access the services provided by the pod we need\na ",Object(o.b)("inlineCode",{parentName:"p"},"Service")," object to provide a stable endpoint and direct traffic to\nthe correct pods."),Object(o.b)("p",null,"In Kubernetes, a Service defines a set of Pods and a policy by which\nto access them. The set of Pods targeted by a Service is usually\ndetermined by a selector."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world-service\n  labels:\n    app: hello-world\nspec:\n  # How do we want to expose our endpoint?\n  type: ClusterIP\n  # How do we find pods to direct traffic to?\n  selector: { app: hello-world }\n  # How do clients talk to this service?\n  ports: { protocol: TCP, port: 80 }\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n")),Object(o.b)("p",null,'This specification creates a new Service object named "my-service",\nwhich targets TCP port 9376 on any Pod with the app=MyApp label.'),Object(o.b)("h2",{id:"services-without-selectors"},"Services Without Selectors"),Object(o.b)("p",null,"A service without a selector can be used to map external resources\n(applications not yet moved into Kubernetes, or external databases,\nfor example) by defining a service without a selector."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n")),Object(o.b)("p",null,"Since it has no selector, the Endpoint for this Service will not be\ncreated automatically, but you can manually define endpoints."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: my-service\nsubsets:\n  - addresses:\n      - ip: 192.0.2.42\n    ports:\n      - port: 9376\n")),Object(o.b)("h2",{id:"multi-port-services"},"Multi-Port Services"),Object(o.b)("p",null,"For some Services, you need to expose more than one port. Kubernetes\nlets you configure multiple port definitions on a Service object. When\nusing multiple ports for a Service, you must give all of your ports\nnames so that these are unambiguous."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n    - name: https\n      protocol: TCP\n      port: 443\n      targetPort: 9377\n")))}l.isMDXComponent=!0},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);