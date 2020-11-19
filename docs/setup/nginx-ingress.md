---
title: Nginx Ingress
---

Using [Nginx](https://www.nginx.com/) as a reverse proxy is
a popular solution to protecting web-based applications, and the [Nginx Ingress
Controller][nginx]  can be used
to handle that.

[nginx]: https://kubernetes.github.io/ingress-nginx/

Installing the nginx ingress controller is as easy as these things get:

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/baremetal/deploy.yaml
```

However, if you now inspect what you got from that install, you'll see
that we have random NodePorts being mapped to port 80 and 443.  By
default the manifest creates a NodePort service, because it can't
depend on there being any kind of cloud-based load balancer.
