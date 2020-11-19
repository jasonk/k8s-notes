---
title: Operators
---

Operators are Kubernetes-specific pods that provide a custom
controller that can configure and manage other deployments
automatically.

Examples of things an operator can do:

* Install and provide sane initial configuration and sizing for your
  deployment, according to the specs of your Kubernetes cluster.
* Perform live reloading of deployments and pods to accommodate for
  any user-requested parameter modification (hot config reloading).
* Automatically scale up or down according to performance metrics.
* Perform backups, integrity checks or any other maintenance task.
* Basically, anything that can be expressed as code by a human admin
  can be automated inside a Kubernetes Operator.

Kubernetes Operators make extensive use of Custom Resource Definitions
(or CRDs) to create context-specific entities and objects that will be
accessed like any other Kubernetes API resource. For example, the
[Prometheus Operator][po] provides CRDs for `Prometheus`,
`AlertManager`, `ThanosRuler`, `ServiceMonitor`, `Probe`,
`PrometheusRule`, and `AlertManagerConfig`.

[po]: https://github.com/prometheus-operator/prometheus-operator
