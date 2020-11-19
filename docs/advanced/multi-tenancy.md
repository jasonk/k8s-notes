---
title: Multi-Tenancy Best Practices
---

Most of these are recommendations for the [Kubernetes Working Group
for Multi-Tenancy][mtsig].

[mtsig]: https://github.com/kubernetes-sigs/multi-tenancy

### Personas ###

The multi-tenancy SIG recommends four personas scoped to limit their permissions:

* **Cluster Admin** - Read and write access to all resources in the cluster (including tenant resources).
* **Cluster View** - Read-only access to all resources in the cluster (including tenant resources).
* **Tenant Admin** - Read and write access scoped to a specific tenant.  Can create, update, delete tenant users within that tenant. No access to resources scoped to other tenants.
* **Tenant User** - Read and write access to all resources scoped to their tenant.

### Namespaces ###

Three top-level groups of namespaces are recommended:

* **System Namespaces** - Used only for system pods (like `kube-system`, for example).
* **Service Namespaces** - Used to run services or applications that need to be accessed by services in other namespaces.  Created by a cluster-admin to run services of applications that have network reachability to or from other namespaces in the cluster as needed to deliver a common service (for example, shared load balancing service).
* **Tenant Namespaces** - Tenant Namespaces should be use to run applications that do not need to be accessed from other namespaces in the cluster.  These are created by a Tenant Admin to run end-user applications and do not have network reachability to or from other Tenant namespaces by default (though they can be modified to provide that access if needed).

### RBAC Only ###

* Role Based Access Control (RBAC) should be enabled.
* Attribute Based Access Control (ABAC) should be disabled.

### Network Policy ###

A network policy that isolates tenants from each other should be applied.
[Sample Policy](https://raw.githubusercontent.com/kubernetes/website/master/content/en/examples/policy/restricted-psp.yaml)

### Limit Tenant Access ###

Cluster admins should ensure that tenants do not have access to view, edit, create, or delete cluster-scoped resources (those without namespaces, such as `Node`, `ClusterRole`, `ClusterRoleBinding`).

To see a list of non-namespaced resources:

```sh
kubectl --kubeconfig cluster-admin api-resources --namespaced=false
```

To check whether a tenant can perform operations on resources:

```sh
kubectl --kubeconfig <tenant> auth can-i “verb” “resource”
```

To see a list of resources belonging to a tenant:

```sh
kubectl --kubeconfig <tenant> api-resources --namespaced=true
```

To see whether tenants can perform operations on namespaced resources belonging to other tenants:

```sh
kubectl --kubeconfig <tenant> -n <namespace> <verb> <resource>
```

There are some resources in a tenant namespace that should not be accessible to the tenants of that namespace.  These include things like the default network policy, namespace resource quotes and role bindings.

To see a list of resources managed by cluster-admin in a tenant namespace:

```sh
kubectl --kubeconfig=cluster-admin -n <namespace> get all -l =
```

To confirm that the tenant cannot modify these resources (this requires labelling resources managed by the cluster admin):

```sh
kubectl --dry-run=true --kubeconfig=<tenant> -n <namespace> annotate k=v
```

### Restrict HostPath Volumes ###

[Sample Policy](https://gist.github.com/abhisek/b9acfdc0505905ffc4240841195326ee)

### Validation Testing ###

The multi-tenancy SIG provides an e-2-e test tool that can validate multi-tenant clusters.

```sh
git clone https://github.com/kubernetes-sigs/multi-tenancy.git
cd multi-tenancy/benchmarks
vi config.yaml # Update config file with your cluster configuration
go test ./e2e/tests
```

### Admission Controllers ###

The multi-tenancy SIG recommends that these admission controllers be enabled:

* `PodSecurityPolicy`
* `AlwaysPullImages`
* `ServiceAccount`
* `ResourceQuota`
* `LimitRanger`

[Sample PodSecurityPolicy](https://github.com/kubernetes-sigs/multi-tenancy/blob/master/docs/profiles/profile-soft-multitenancy-s1.md#kubernetes-pod-admission-and-security-policy-definition-for-profile-s1)

## Application-Specific Multi-Tenancy ##

### ArgoCD ###

* https://github.com/argoproj/argo-cd/blob/master/docs/projects.md
* https://github.com/argoproj/argo-cd/blob/master/docs/rbac.md

## Further Reading ##

* [Multi-Tenancy Benchmarks](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/benchmarks) - guidelines for multi-tenant configuration of Kubernetes clusters.
* [kubectl-mtb](https://github.com/kubernetes-sigs/multi-tenancy/blob/master/benchmarks/kubectl-mtb/README.md) - a kubectl plugin that can validate your cluster agains the Multi-Tenancy Benchmarks.
* [Hierarchical Namespace Controller](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/incubator/hnc) - a controller that allows for hierarchical namespaces, allowing for things like developers creating namespaces under their team namespace without needing cluster-level permission to create namespaces.  See [HNC QuickStart](https://github.com/kubernetes-sigs/multi-tenancy/blob/master/incubator/hnc/docs/user-guide/quickstart.md) for some ideas of what you can do with this.
* [Tenant Operator](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/tenant) - an operator that manages a set of CRDs used to manage tenant resources.
* [Resource Quotes](https://kubernetes.io/docs/concepts/policy/resource-quotas/)

