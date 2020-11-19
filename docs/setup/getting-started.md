---
title: Getting Started
---

I'm assuming you already know how to install a Linux system, if not
I'll probably fill in some more details here later, but I started with
just a fairly bare-bones Debian 10 (buster) system as my control node.

You need a minimum of 2GB of RAM, and you should make sure that
whatever name your host has is in /etc/hosts (or otherwise
resolvable).

# Planning your cluster #

There are a few things you want to decide ahead of time about how your
cluster is going to be set up.

The first is how many nodes you plan to build.  I'm going to assume
you will start with one and then possibly add more later, I'll comment
on some things you might need to change when you start adding
additional nodes.

You also need to decide what the name of your cluster is going to be.
This is the hostname that you will use to access the cluster.
I called mine `cluster.local`, which will probably work for you too
unless you already have an opinion on hostname selection.  You need to
make sure that every host that will need to connect to the cluster is
able to resolve this name, either by adding it to the hosts file, or
by making sure it has a suitable DNS entry.

You also need to decide what network your cluster will use for it's
internal network (the "pod network").  Some of the more popular
network systems default to `10.244.0.0/16`, and therefore a lot of the
kubernetes documentation uses that range as well, and to make things
easier that's what I'll assume you are using in the rest of this
document.  The only reason you might realistically need to change this
is if your network happens to overlap with that.  If you do decide to
use a different network, make sure you use a range from a suitable
([Private Network Block](https://en.wikipedia.org/wiki/Private_network))
and don't make it too small, as you add nodes to your cluster it will
want to assign subnets from this block to each node to use when
creating pods.

# Preparing the System #

The first thing we're going to do is to prepare the system for
a kubernetes install.  First we need to make sure we have some of the
packages installed that will be needed for installing other packages
later, and we want to add the Docker and Kubernetes package
repsitories as a location to get packages from.

All of the commands that follow, until further notice, need to be run
on your control node as the `root` user.  You can either open a root
shell (`sudo -i`) or add `sudo` to the beginning of every command that
follows.

```sh
apt update
apt install -y apt-transport-https ca-certificates curl \
  software-properties-common gnupg-agent

curl -fsSL https://download.docker.com/linux/debian/gpg \
  | apt-key --keyring /etc/apt/trusted.gpg.d/docker.gpg add -
echo "deb https://download.docker.com/linux/debian buster stable" \
  > /etc/apt/sources.list.d/docker.list

curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg \
  | apt-key --keyring /etc/apt/trusted.gpg.d/kubernetes.gpg add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" \
  > /etc/apt/sources.list.d/kubernetes.list
```

Next we want to make sure the base system is up to date, and then
install the container runtime, kubelet and the some CLI admin tools.

```sh
apt update
apt upgrade -y
apt install -y containerd.io kubeadm kubelet kubectl
```
