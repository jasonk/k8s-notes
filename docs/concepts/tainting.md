---
title: Taints and Tolerations
---

A "taint" is a marking applied to a node that causes that node to
repel pods that don't have a configuration indicating that they can
tolerate that taint.

For example, the master node by default is tainted like this:

```yaml
taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
```

The effect means that the scheduler is not allowed to schedule pods to
run on this node.  This is especially important to keep in mind in the
case of a [[DaemonSet]], because even though the daemon set is
attempting to run a pod on every node, by default it can't start one
on the master node.

If deploying something like a log collector or node monitor that you
do want to run on the master node, you need to add a "toleration" to
the spec of that manifest:

```yaml
spec:
  tolerations:
    - effect: NoSchedule
      operator: Exists
```

This indicates that the pods created by this spec can tolerate running
on a node that is tained by the existince of a NoSchedule effect.
