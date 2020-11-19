---
title: Operators and OpenEBS
---

A [Kubernetes Operator][Op] is a software extension that uses [Custom
Resource Definitions][CRD] to manage an application and it's
components.

We're going to use an operatror to install [OpenEBS][OpenEBS], one of
the most popular storage management engines for Kubernetes.

> OpenEBS builds on Kubernetes to enable Stateful applications to
> easily access Dynamic Local PVs or Replicated PVs. By using the
> Container Attached Storage pattern users report lower costs, easier
> management, and more control for their teams.

In this tutorial we're going to install a "lite" version of OpenEBS
that supports only the Local PV HostPath StorageClass.  This is the
simplest StorageClass as it doesn't require dedicated disk devices,
you can just give it a directory to create files in and it will use
that to create virtual disks.

```sh
kubectl apply -f https://openebs.github.io/charts/openebs-operator-lite.yaml
kubectl apply -f https://openebs.github.io/charts/openebs-lite-sc.yaml
```

The default install of this lite version creates a StorageClass called
`openebs-hostpath` that uses the directory `/var/openebs/local` for
it's base path.  If you want to change any of this, you can find
instructions at
https://docs.openebs.io/docs/next/uglocalpv-hostpath.html#create-storageclass

Check to make sure the localpv provisioner is running:

```sh
kubectl get pods -n openebs -l openebs.io/component-name=openebs-localpv-provisioner
```

Now you can use `storageClassName: openebs-hostpath` when creating
pods with a `PersistentVolumeClaim` (more on that later).

[OpenEBS]: https://openebs.io/
[Op]: https://kubernetes.io/docs/concepts/extend-kubernetes/operator/
[CRD]: https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/
[cStor]: https://github.com/openebs/cstor-operators
