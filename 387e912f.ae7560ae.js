(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),a=(n(0),n(104));const r={title:"Jsonnet and Prometheus"},i={unversionedId:"setup/jsonnet-and-prometheus",id:"setup/jsonnet-and-prometheus",isDocsHomePage:!1,title:"Jsonnet and Prometheus",description:"Jsonnet is a data templating language for app",source:"@site/docs/setup/jsonnet-and-prometheus.md",slug:"/setup/jsonnet-and-prometheus",permalink:"/k8s-notes/setup/jsonnet-and-prometheus",editUrl:"https://github.com/jasonk/k8s-notes/edit/master/docs/setup/jsonnet-and-prometheus.md",version:"current",sidebar:"docs",previous:{title:"Operators and OpenEBS",permalink:"/k8s-notes/setup/operators-and-openebs"},next:{title:"MetalLB",permalink:"/k8s-notes/setup/metallb"}},s=[],p={rightToc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://jsonnet.org"}),"Jsonnet")," is a data templating language for app\nand tool developers.  We're going to demonstrate it by using it to\ninstall\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/prometheus-operator/kube-prometheus"}),"kube-prometheus"),",\nan all-in-one monitoring package that includes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The Prometheus Operator"),Object(a.b)("li",{parentName:"ul"},"Highly Available Prometheus"),Object(a.b)("li",{parentName:"ul"},"Highly Available Alertmanager"),Object(a.b)("li",{parentName:"ul"},"Prometheus node-exporter"),Object(a.b)("li",{parentName:"ul"},"Prometheus Adapter for Kubernetes Metrics APIS"),Object(a.b)("li",{parentName:"ul"},"kube-state-metrics"),Object(a.b)("li",{parentName:"ul"},"Grafana")),Object(a.b)("p",null,"Configurations using jsonnet are a little bit different, because you\ncan't just download and apply a couple of manifests, you have to build\na project directory where you can add configuration files and then use\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"jsonnet-bundler")," to build and deploy those packages."),Object(a.b)("p",null,"First, you should install the jsonnet tools on your workstation:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"brew install go-jsonnet jsonnet-bundler\n")),Object(a.b)("p",null,"To do the cluster install, you need to create a jsonnet-bundler\nproject.  Start by making a directory to hold it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"mkdir my-kube-prometheus\ncd my-kube-prometheus\n")),Object(a.b)("p",null,"Then use the jsonnet-bundler tool ",Object(a.b)("inlineCode",{parentName:"p"},"jb")," to initialize a new project and\nadd the promethus operator to it."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"jb init\njb install github.com/prometheus-operator/kube-prometheus/jsonnet/kube-prometheus@release-0.6\n")),Object(a.b)("p",null,"After doing this you should have a ",Object(a.b)("inlineCode",{parentName:"p"},"vendor")," directory and files named\n",Object(a.b)("inlineCode",{parentName:"p"},"jsonnetfile.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"jsonnetfile.lock.json"),"."),Object(a.b)("p",null,"Now you need to create the initial jsonnet entrypoint file, and\na script to build all the necessary manifests."),Object(a.b)("p",null,"Create a file named ",Object(a.b)("inlineCode",{parentName:"p"},"build.jsonnet")," that contains:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsonnet"}),"local kp =\n  (import 'kube-prometheus/kube-prometheus.libsonnet') +\n  {\n    _config+:: {\n      namespace: 'monitoring',\n    },\n  };\n\n{ ['setup/0namespace-' + name + '.json']: kp.kubePrometheus[name] for name in std.objectFields(kp.kubePrometheus) } +\n{\n  ['setup/prometheus-operator-' + name + '.json']: kp.prometheusOperator[name]\n  for name in std.filter((function(name) name != 'serviceMonitor'), std.objectFields(kp.prometheusOperator))\n} +\n// serviceMonitor is separated so that it can be created after the CRDs are ready\n{ 'prometheus-operator-serviceMonitor.json': kp.prometheusOperator.serviceMonitor } +\n{ ['node-exporter-' + name + '.json']: kp.nodeExporter[name] for name in std.objectFields(kp.nodeExporter) } +\n{ ['kube-state-metrics-' + name + '.json']: kp.kubeStateMetrics[name] for name in std.objectFields(kp.kubeStateMetrics) } +\n{ ['alertmanager-' + name + '.json']: kp.alertmanager[name] for name in std.objectFields(kp.alertmanager) } +\n{ ['prometheus-' + name + '.json']: kp.prometheus[name] for name in std.objectFields(kp.prometheus) } +\n{ ['prometheus-adapter-' + name + '.json']: kp.prometheusAdapter[name] for name in std.objectFields(kp.prometheusAdapter) } +\n{ ['grafana-' + name + '.json']: kp.grafana[name] for name in std.objectFields(kp.grafana) }\n")),Object(a.b)("p",null,"Then create a shell script named ",Object(a.b)("inlineCode",{parentName:"p"},"build.sh")," containing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),'#!/usr/bin/env bash\nset -xeuo pipefail\ncd "$(dirname "$0")"\n\nrm -rf manifests\nmkdir -p manifests/setup\n\njsonnet -J vendor -m manifests "${1:-build.jsonnet}"\n')),Object(a.b)("p",null,"Now just make the build script executable, and you can rebuild all of\nthe manifests by running it."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"chmod +x ./build.sh\n./build.sh\n")),Object(a.b)("p",null,"This will create a whole bunch of files in the ",Object(a.b)("inlineCode",{parentName:"p"},"manifests")," directory.\nTo install them, you need to install the ones in the ",Object(a.b)("inlineCode",{parentName:"p"},"setup"),"\nsubdirectory first."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl apply -f manifests/setup\nkubectl apply -f manifests/\n")),Object(a.b)("h1",{id:"customizing-jsonnet"},"Customizing Jsonnet"),Object(a.b)("p",null,"The reason people like jsonnet is that it makes it pretty easy to\ncustomize what gets installed.  You can see a little bit of this in\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"build.jsonnet")," file we created above, where there is an ",Object(a.b)("inlineCode",{parentName:"p"},"_config"),"\nkey we are adding in order to set the configured namespace to\n",Object(a.b)("inlineCode",{parentName:"p"},"monitoring"),".  We're going to expand on that now to make some\nmodifications to our kube-prometheus install, while also showing you\nhow the configurations built with jsonnet can be updated or modified\nover time."),Object(a.b)("p",null,"To make it easier to access the UIs of the applications we can expose\ntheir ports on the host with ",Object(a.b)("inlineCode",{parentName:"p"},"NodePort")," configurations.  The\nkube-prometheus repo has a jsonnet library that can set this up for\nyou, all we have to do is include it.  Find the line in\n",Object(a.b)("inlineCode",{parentName:"p"},"build.jsonnet")," that is importing the ",Object(a.b)("inlineCode",{parentName:"p"},"kube-prometheus.libsonnet")," file,\nthen add another import line just below it to import\n",Object(a.b)("inlineCode",{parentName:"p"},"kube-prometheus-node-ports.libsonnet")," in exactly the same way, like\nthis:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsonnet"}),"local kp =\n  (import 'kube-prometheus/kube-prometheus.libsonnet') +\n  (import 'kube-prometheus/kube-prometheus-node-ports.libsonnet') +\n  {\n    _config+:: {\n")),Object(a.b)("p",null,"Now all you have to do is to rebuild and re-apply the manifests to get\nthose configurations updated."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"./build.sh\nkubectl apply -f manifests/setup\nkubectl apply -f manifests/\n")),Object(a.b)("h1",{id:"accessing-nodeport"},"Accessing NodePort"),Object(a.b)("p",null,"To access the applications now, you first need to determine which\napplications were exposed and what ports they were exposed on.  The\nway that ",Object(a.b)("inlineCode",{parentName:"p"},"NodePort")," works is that the control plane allocates a port\nfrom a range (by default ",Object(a.b)("inlineCode",{parentName:"p"},"30000-32767"),") and every node in the cluster\nproxies that port to the appropriate application, so you can connect\nto any node to reach the application, but you have to know which port\nwas exposed."),Object(a.b)("p",null,"To find out which applications are exposed this way, you can run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"kubectl get svc --all-namespaces | grep NodePort\n")),Object(a.b)("p",null,"This will give you output that looks something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"monitoring alertmanager-main NodePort 10.111.74.13 <none> 9093:30903/TCP 27m\nmonitoring grafana NodePort 10.111.244.24 <none> 3000:30902/TCP 27m\nmonitoring prometheus-k8s NodePort 10.97.113.65 <none> 9090:30900/TCP 27m\n")),Object(a.b)("p",null,"This shows you the applications that have been configured with\na NodePort and the port they are listening on.  The second column is\nthe application name, and the second-to-last column is the port\nassignment. The port number before the colon is the port that the\napplication is actually listening on inside the pod.  The port number\nafter the colon is the allocated NodePort, so to connect to grafana,\nyou would use a URL like ",Object(a.b)("inlineCode",{parentName:"p"},"http://cluster.local:30902")," in this example\n(you would need to replace the domain name with the right name or IP\naddress for your cluster, and the port number with whatever port\nnumber was shown in the output from your own command)."))}l.isMDXComponent=!0}}]);