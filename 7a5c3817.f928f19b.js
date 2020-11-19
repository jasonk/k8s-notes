(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||r;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),o=(n(0),n(104));const r={title:"Dashboard"},i={unversionedId:"setup/dashboard",id:"setup/dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Let's install our first application, the Kubernetes Dashboard.  This",source:"@site/docs/setup/dashboard.md",slug:"/setup/dashboard",permalink:"/k8s-notes/setup/dashboard",editUrl:"https://github.com/jasonk/k8s-notes/edit/master/docs/setup/dashboard.md",version:"current",sidebar:"docs",previous:{title:"User Configuration",permalink:"/k8s-notes/setup/user-config"},next:{title:"Helm",permalink:"/k8s-notes/setup/helm"}},s=[],c={rightToc:s};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's install our first application, the Kubernetes Dashboard.  This\nis a nice web-based UI that lets you acecss and manage your cluster\nfrom a web browser."),Object(o.b)("p",null,"Deploying the dashboard is very easy:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml\n")),Object(o.b)("p",null,"However, just deploying it isn't very interesting, you also need to be\nable to access it.  Run ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl get pods --all-namepsaces")," to see the\nstatus of all the pods in your cluster.  If you are a fast reader then\nparts of the dashboard pods may still be deploying.  Check back in\na minute or two, once ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl get pods")," says that all of your pods\nare in ",Object(o.b)("inlineCode",{parentName:"p"},"Running")," status then you are ready to continue."),Object(o.b)("p",null,"The first problem with accessing it is that the dashboard is running\non a pod inside the cluster.  Kubernetes networking by default allows\nall the pods to talk to each other, but you aren't a pod and your\ndesktop isn't inside the cluster (even if the cluster is running in\na VM on your desktop).  To fix that, ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," has a trick up it's\nsleeve.  On your desktop machine open up a new shell, stick it out of\nthe way in a corner somewhere, and in that shell run ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl proxy"),".\nYou should get a message that says ",Object(o.b)("inlineCode",{parentName:"p"},"Starting to serve on\n127.0.0.1:8001"),".  This means that ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," is now running a proxy\nserver that can give the browser on your desktop access to things\nrunning inside the cluster."),Object(o.b)("p",null,"To try it out, visit this URL in your browser:\nhttp://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),Object(o.b)("p",null,"You should get a page that says 'Kubernetes Dashboard' that asks you\nto pick either ",Object(o.b)("inlineCode",{parentName:"p"},"Token")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Kubeconfig")," authentication.  Unfortunately\nneither of these will work to let us in just yet, so we're going to\nuse this opportunity to learn how to create a user."),Object(o.b)("h1",{id:"adding-a-user"},"Adding a User"),Object(o.b)("p",null,"We're going to make an admin service account that matches our user\naccount name on the cluster server."),Object(o.b)("p",null,"To do that, we're going to create a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://yaml.org/"}),"YAML")," file\nwith the configuration we need and then use ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," to apply it.\nThis is a very common activity when managing Kubernetes, so this is\na good chance to learn it."),Object(o.b)("p",null,"Create a file with either a ",Object(o.b)("inlineCode",{parentName:"p"},".yaml")," or ",Object(o.b)("inlineCode",{parentName:"p"},".yml")," extension.  I called\nmine ",Object(o.b)("inlineCode",{parentName:"p"},"service-account-jason.yaml"),".  The contents of this file are\ngoing to become very familiar as we continue.  For Kubernetes these\nfiles nearly always have the same sections: ",Object(o.b)("inlineCode",{parentName:"p"},"apiVersion")," (indicating\nthe version of the API that the rest of the config file is assuming),\n",Object(o.b)("inlineCode",{parentName:"p"},"kind")," (the kind of resource that is being provisioned in the cluster,\nand ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," (information about the resource being provisioned).\nThere are other sections that may show up depending on thekind of\nresource being provisioned, but these three are in basically every\nfile.  If you ever have questions about what options are available for\na certain kind of resource, ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," can answer that question for\nyou!  Try it out now by running ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl explain serviceaccount")," to\nsee what fields are available when defining a service account."),Object(o.b)("p",null,"Now start out your config file with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: jason\n  namespace: kubernetes-dashboard\n")),Object(o.b)("p",null,"This says we want to create a service account with the name ",Object(o.b)("inlineCode",{parentName:"p"},"jason"),"\nand give it access to the ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes-dashboard")," namespace.  As is\noften the case with Kubernetes resources, this one item alone isn't\nenough to get you the access you need, you also need\na ",Object(o.b)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," to connect this service account to a role that\ndefines what it is allowed to do.  You could put the configuration for\nthis binding into another file, but YAML allows you to put multiple\ndocuments into one file, which makes it easier to keep related things\ntogether.  All you have to do is include a line with nothing but three\ndashes as a document separator, and then you can start another\ndocument.  So now, add these lines to your service account yaml file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: jason\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: jason\n  namespace: kubernetes-dashboard\nEOF\n")),Object(o.b)("p",null,"Now you just need to apply that file to your cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f ./service-account-jason.yaml\n")),Object(o.b)("p",null,"If all went well you now have a service account that has cluster-admin\npermissions to the ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes-dashboard")," namespace.  All you need to\ndo now is to get a token for it.  To do that, first list the secrets\nin that namespace:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl -n kubernetes-dashboard get secret\n")),Object(o.b)("p",null,"You'll get back a list that includes several things that were\nautomatically created when you setup the cluster, but you should also\nsee a fairly new one that starts with ",Object(o.b)("inlineCode",{parentName:"p"},"jason-token-"),", that's the one\nyou want.  Now that you know what it's called, you can ask ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl"),"\nto tell you about it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl -n kubernetes-dashboard describe secret jason-token-w9rbz\n")),Object(o.b)("p",null,"This will give you a bunch of information about the secret, and near\nthe end will be a huge block of text labeled ",Object(o.b)("inlineCode",{parentName:"p"},"token"),".  You want to\ncopy just the big blob of characters (without including the ",Object(o.b)("inlineCode",{parentName:"p"},"token:"),"\nat the beginning, then go back to the browser you opened earlier\nto the Kubernetes Dashboard.  Make sure the ",Object(o.b)("inlineCode",{parentName:"p"},"Token")," option is\nselected, and paste that big blob into the field that says ",Object(o.b)("inlineCode",{parentName:"p"},"Enter\ntoken"),"."),Object(o.b)("p",null,'Now all that is left is to click "Sign In". and you should be looking\nat the dashboard for your cluster.  To see everything in the cluster,\nfind the ',Object(o.b)("inlineCode",{parentName:"p"},"Namespace"),' menu on the left side of the screen, and change\nit from where it currently is (probably "default") to "All\nnamespaces".  Now you can click through the other options in the left\nside of the screen to see all the parts of your cluster that you just\nbuilt.'),Object(o.b)("h1",{id:"cleaning-up"},"Cleaning Up"),Object(o.b)("p",null,"If you decide later that you want to get rid of this service account,\nyou can either tell ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," to delete the resources using the same\nfile you used to create them:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl delete -f ./service-account-jason.yaml\n")),Object(o.b)("p",null,"Or you can just manually delete the two resources that were created:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl -n kubernetes-dashboard delete serviceaccount jason\nkubectl -n kubernetes-dashboard delete clusterrolebinding jason\n")))}l.isMDXComponent=!0}}]);