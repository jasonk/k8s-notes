---
title: MetalLB
---

An [Ingress Controller][ingress] manages external access to a cluster
service.  We've already seen how to use NodePort to expose services to
the rest of the network, but there are better options.  Instead of having
each node just forward requests through to the appropriate pod, what
if we had an actual load balancer handling that?

[MetalLB](https://metallb.universe.tf/) is a load balancing controller
for bare-metal installations where you don't have a cloud-native load
balancer to work with (such as AWS's ELB).

[ingress]: https://kubernetes.io/docs/concepts/services-networking/ingress/

# Preparing kube-proxy #

Before we can install MetalLB we need to make sure our `kube-proxy`
install has the required configuration, with strict ARP enabled and
running in IPVS mode.

I'm going to show you a couple of different ways you can handle making
this configuration change, to give you some ideas about ways you can
configure your cluster when you need to, you don't need to do all of
them though.

First lets just check whether we already have the right settings or
not, by retrieving the kube-proxy ConfigMap and searching for the
settings we need.

```sh
kubectl get configmap kube-proxy -n kube-system -o yaml \
  | grep -E '(mode|strictARP)'
```

That will return something like this:

```
strictARP: false
mode: ""
```

Looks like we don't have the right settings here.  One way we could
fix that is by using `kubectl edit configmap kube-proxy -n
kube-system` to open the ConfigMap in a text editor.  When you save
the file and exit the editor the changes will get applied to the
cluster.

Another common way of handling it is to retrieve the configmap, pipe
it through something like `sed` to make the changes, then pipe it back
into `kubectl apply`.  One useful feature of kubectl is that you can
use `diff` instead of `apply` to just see what changes would be made
without actually making them, then if the changes look good you can
switch back to apply to actually deploy them.

```sh
kubectl get configmap kube-proxy -n kube-system -o yaml \
  | sed -e "s/strictARP: false/strictARP: true/" -e 's/mode: ""/mode: ipvs/' \
  | kubectl diff -f- -n kube-system
```

If all looks good then change `kubectl diff` to `kubectl apply` and
apply the configuration.

Since we've changed the kube-proxy configuration, we need to kill off
all the existing kube-proxy pods so that new ones will be built with
the new configuration.

```sh
kubectl get pods -n kube-system | awk '{print $1}' | grep kube-proxy \
  | xargs -n1 kubectl delete pod -n kube-system
```

# Installing MetalLB #

Installing the MetalLB manifests will setup both it's controller (a
cluster-wide controller that handles IP address assignments) and
also a daemonset named "speaker" that is the component that speaks the
protocols of your choice to make services accessible.  This also
creates the necessary service accounts and RBAC permissions.

```sh
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml
```

You also need to create a secret that will be used to encrypt
communication between the speakers that they use for fast dead node
detection.

```sh
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"
```

We're going to configure MetalLB to use Layer 2 mode, because it's the
simplest, and it's all we need for Nginx Ingress.  All that we really
need to configure it is to provide a range of IP addresses that it can
use for creating load balancers.  These addresses don't even need to
be bound to the network interfaces of your worker nodes, MetalLB will
respond to ARP requests on the local network directly, so you can just
pick a block of IPs from your local network that aren't currently in
use by anything else (although you also need to ensure that your
router or DHCP server won't try to assign these to any other systems).

To set this up we're going to apply a `ConfigMap` into the namespace.
I'm going to use `192.168.1.240-192.168.1.249` as the LB IP's:

```sh
kubectl apply -f- <<'END'
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.1.240-192.168.1.249
END
```

# Configuring LoadBalancer Services #

Now that we have MetalLB configured, let's add a LoadBalancer for our
Grafana application.  To do that we'll just edit the service configuration
and change the type from `NodePort` to `LoadBalancer`:

```sh
kubectl edit service/grafana -n monitoring
```

Once that is done you can describe it:

```sh
kubectl describe services grafana -n monitoring
```

Which will produce some output that includes something like this:
```
LoadBalancer Ingress:     192.168.1.240
Port:                     http  3000/TCP
```

Which means you should be able to open a browser to
http://192.168.1.240:3000/ and see the Grafana login screen.
