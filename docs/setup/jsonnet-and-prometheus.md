---
title: Jsonnet and Prometheus
---

[Jsonnet](https://jsonnet.org) is a data templating language for app
and tool developers.  We're going to demonstrate it by using it to
install
[kube-prometheus](https://github.com/prometheus-operator/kube-prometheus),
an all-in-one monitoring package that includes:

* The Prometheus Operator
* Highly Available Prometheus
* Highly Available Alertmanager
* Prometheus node-exporter
* Prometheus Adapter for Kubernetes Metrics APIS
* kube-state-metrics
* Grafana

Configurations using jsonnet are a little bit different, because you
can't just download and apply a couple of manifests, you have to build
a project directory where you can add configuration files and then use
the `jsonnet-bundler` to build and deploy those packages.

First, you should install the jsonnet tools on your workstation:

```sh
brew install go-jsonnet jsonnet-bundler
```

To do the cluster install, you need to create a jsonnet-bundler
project.  Start by making a directory to hold it:

```sh
mkdir my-kube-prometheus
cd my-kube-prometheus
```

Then use the jsonnet-bundler tool `jb` to initialize a new project and
add the promethus operator to it.

```sh
jb init
jb install github.com/prometheus-operator/kube-prometheus/jsonnet/kube-prometheus@release-0.6
```

After doing this you should have a `vendor` directory and files named
`jsonnetfile.json` and `jsonnetfile.lock.json`.

Now you need to create the initial jsonnet entrypoint file, and
a script to build all the necessary manifests.

Create a file named `build.jsonnet` that contains:

```jsonnet
local kp =
  (import 'kube-prometheus/kube-prometheus.libsonnet') +
  {
    _config+:: {
      namespace: 'monitoring',
    },
  };

{ ['setup/0namespace-' + name + '.json']: kp.kubePrometheus[name] for name in std.objectFields(kp.kubePrometheus) } +
{
  ['setup/prometheus-operator-' + name + '.json']: kp.prometheusOperator[name]
  for name in std.filter((function(name) name != 'serviceMonitor'), std.objectFields(kp.prometheusOperator))
} +
// serviceMonitor is separated so that it can be created after the CRDs are ready
{ 'prometheus-operator-serviceMonitor.json': kp.prometheusOperator.serviceMonitor } +
{ ['node-exporter-' + name + '.json']: kp.nodeExporter[name] for name in std.objectFields(kp.nodeExporter) } +
{ ['kube-state-metrics-' + name + '.json']: kp.kubeStateMetrics[name] for name in std.objectFields(kp.kubeStateMetrics) } +
{ ['alertmanager-' + name + '.json']: kp.alertmanager[name] for name in std.objectFields(kp.alertmanager) } +
{ ['prometheus-' + name + '.json']: kp.prometheus[name] for name in std.objectFields(kp.prometheus) } +
{ ['prometheus-adapter-' + name + '.json']: kp.prometheusAdapter[name] for name in std.objectFields(kp.prometheusAdapter) } +
{ ['grafana-' + name + '.json']: kp.grafana[name] for name in std.objectFields(kp.grafana) }
```

Then create a shell script named `build.sh` containing:

```sh
#!/usr/bin/env bash
set -xeuo pipefail
cd "$(dirname "$0")"

rm -rf manifests
mkdir -p manifests/setup

jsonnet -J vendor -m manifests "${1:-build.jsonnet}"
```

Now just make the build script executable, and you can rebuild all of
the manifests by running it.

```sh
chmod +x ./build.sh
./build.sh
```

This will create a whole bunch of files in the `manifests` directory.
To install them, you need to install the ones in the `setup`
subdirectory first.

```sh
kubectl apply -f manifests/setup
kubectl apply -f manifests/
```

# Customizing Jsonnet #

The reason people like jsonnet is that it makes it pretty easy to
customize what gets installed.  You can see a little bit of this in
the `build.jsonnet` file we created above, where there is an `_config`
key we are adding in order to set the configured namespace to
`monitoring`.  We're going to expand on that now to make some
modifications to our kube-prometheus install, while also showing you
how the configurations built with jsonnet can be updated or modified
over time.

To make it easier to access the UIs of the applications we can expose
their ports on the host with `NodePort` configurations.  The
kube-prometheus repo has a jsonnet library that can set this up for
you, all we have to do is include it.  Find the line in
`build.jsonnet` that is importing the `kube-prometheus.libsonnet` file,
then add another import line just below it to import
`kube-prometheus-node-ports.libsonnet` in exactly the same way, like
this:

```jsonnet
local kp =
  (import 'kube-prometheus/kube-prometheus.libsonnet') +
  (import 'kube-prometheus/kube-prometheus-node-ports.libsonnet') +
  {
    _config+:: {
```

Now all you have to do is to rebuild and re-apply the manifests to get
those configurations updated.

```sh
./build.sh
kubectl apply -f manifests/setup
kubectl apply -f manifests/
```

# Accessing NodePort #

To access the applications now, you first need to determine which
applications were exposed and what ports they were exposed on.  The
way that `NodePort` works is that the control plane allocates a port
from a range (by default `30000-32767`) and every node in the cluster
proxies that port to the appropriate application, so you can connect
to any node to reach the application, but you have to know which port
was exposed.

To find out which applications are exposed this way, you can run:

```sh
kubectl get svc --all-namespaces | grep NodePort
```

This will give you output that looks something like this:

```
monitoring alertmanager-main NodePort 10.111.74.13 <none> 9093:30903/TCP 27m
monitoring grafana NodePort 10.111.244.24 <none> 3000:30902/TCP 27m
monitoring prometheus-k8s NodePort 10.97.113.65 <none> 9090:30900/TCP 27m
```

This shows you the applications that have been configured with
a NodePort and the port they are listening on.  The second column is
the application name, and the second-to-last column is the port
assignment. The port number before the colon is the port that the
application is actually listening on inside the pod.  The port number
after the colon is the allocated NodePort, so to connect to grafana,
you would use a URL like `http://cluster.local:30902` in this example
(you would need to replace the domain name with the right name or IP
address for your cluster, and the port number with whatever port
number was shown in the output from your own command).
