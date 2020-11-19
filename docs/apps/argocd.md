---
title: ArgoCD
---

> Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.

Home Page: https://argoproj.github.io/argo-cd/

# Cluster Installation #

To install the app on the cluster:

```sh
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

# Workstation Installation #

There is also a CLI client you can install on your workstation, if you want.

```sh
brew install argocd
choco install argocd
```

For other platforms you can download it from
https://github.com/argoproj/argo-cd/releases/latest

# Access #

This will create an initial user named `admin`. By default the admin user's password is set to the name of the argocd pod, which you can find with:

```sh
kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name
```

Use the pod name (without the `pod/` prefix) as the password to login.

Now you can forward a local port to it:

```sh
kubectl port-forward svc/argocd-server -n argocd 8081:443 &
```

And you should be able to access it at http://localhost:8081

# Next Steps #

* [ArgoCD Quick Start](https://argoproj.github.io/argo-cd/#quick-start)
* [FAQ](https://github.com/argoproj/argo-cd/blob/master/docs/faq.md)
