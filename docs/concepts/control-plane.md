---
title: Control Plane
---

The thing that is making all of this work is the `control plane`,
which manages how workloads are executed, monitored, and maintained in
the cluster.

# Machine Classes #

In any cluster there are two classes of machines:

## Master Node ##

The `master node` contains most of the components which make up the
control plane.  In a moderately sized cluster it's not uncommon to
have a single master node, though you can have multiple masters for
high availability.

## Worker Node ##

A `worker node` is a machine that is actually doing the work of
running application workloads.  You might have different machine types
tailored to different types of workloads in a cluster.  For example,
you may have some nodes with heavy-duty GPUs and some that are
CPU-optimized.

# Control Plane Components #

## API server ##

When you communicate with the cluster, you do it through the `API
server`.  The API server validates requests to update objects and acts
as the unified interface for queries about the cluster's current
state.

## etcd ##

The state of the cluster is stored in etcd.  This is the only stateful
component of the control plane.  It stores information about the
cluster configuration, object specifications, object statuses, cluster
nodes, and the assignments of objects to nodes.

## scheduler ##

The scheduler is in charge of deciding what whould run where.  The
scheduler will ask the API server which objects haven't been assigned
to a node, and then it will use the configuration of those objects and
the state of the cluster to determine which nodes to run them on.  It
then communicates this back to the API server to be recorded in etcd.

## controller-manager ##

At a high level the controller-manager is repsonsible for managing the
state of the cluster.  It manages a collection of controllers, which
are each responsible for monitoring a specific resource type.  These
controllers monitor the state of those components and validate that
the current state conforms to the desired state that is stored in
etcd.  The controllers are reponsible for making sure the pods stay
healthy.

## kubelet ##

The `kubelet` is is a small piece of the control plane that runs on
each worker node.  It is responsible for informing the API server
about the existing of the node, and it's available resources so that
the scheduler can assign pods to it.  When pods are scheduled the API
server will inform the kubelet, which will then start up the pods.

## kube-proxy ##

The `kube-proxy` also runs on each worker node.  It is responsible for
all of the networking related concerns, like how to forward traffic to
the appropriate pod.


# Control Plane Architecture #

The whole system is architected to ensure that component failures have
minimal impact.  For example, even if the master node goes down, none
of the running applications would be immediately affected, losing the
control plane just prevents you from making any further changes to the
cluster until a new master node is brought online.  If any worker node
fails, the control plane will ensure that all of the pods it was
running are started up somewhere else.
