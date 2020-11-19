---
title: Control Node
---

To get our control node running, we first need to setup some things in
the base system.

The containerd runtime we're going to use requires the `overlay` and
`br_netfilter` modules be loaded into the kernel.  We're going to
create a `modules-load` entry to ensure they always get loaded on
boot, but then we can also just load them manually for now.

```sh
cat <<END > /etc/modules-load.d/containerd.conf
overlay
br_netfilter
END
modprobe overlay
modprobe br_netfilter
```

We also need to make sure that IP forwarding and some iptables
bridging options are enabled in sysctl.

```sh
# Setup required sysctl params, these persist across reboots.
cat <<END > /etc/sysctl.d/99-kubernetes-cri.conf
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
END
sysctl --system
```

Now we're going to start actually configuring things.  First we'll
create a default configuration for `containerd`, which is easy because
it can create one for us.

```sh
mkdir -p /etc/containerd
containerd config default > /etc/containerd/config.toml
```

Next we'll create our base kubelet configuration and enable kubelet to
start on boot.  You might want to substitute your own DNS server
settings in place of the ones in the file, but the ones here should
work if you don't know what servers to use.

```sh
mkdir -p /var/lib/kubelet
cat <<END > /var/lib/kubelet/config.yaml
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
clusterDns: [ 1.1.1.1, 8.8.8.8, 8.8.4.4 ]
END
systemctl enable kubelet
```

Next we need to configure systemd to pass the right options when it
starts containerd.

```
KUBELET_ARGS=(
  --container-runtime=remote
  --runtime-request-timeout=15m
  --container-runtime-endpoint=unix:///run/containerd/containerd.sock
)
mkdir -p  /etc/systemd/system/kubelet.service.d/
cat << END > /etc/systemd/system/kubelet.service.d/0-containerd.conf
[Service]
Environment="KUBELET_EXTRA_ARGS=${KUBELET_ARGS[*]}"
END
```

Now we're ready to actually start up the cluster.  Start by using
`kubeadm` to pull down the images that it's going to use, which will
save some time later, then you can initialize the cluster.  Make sure
to replace the values of the `control-plane-endpoint` and
`pod-network-cidr` options if you decided to use different values that
what we're using.

```sh
kubeadm config images pull
kubeadm init --config=/var/lib/kubelet/config.yaml --upload-certs \
  --control-plane-endpoint=cluster.local
  --pod-network-cidr=10.244.0.0/16 \
  --cri-socket /run/containerd/containerd.sock
```

Your cluster should now be online.  If you are only going to have
a single node for now, or you just want to be able to run pods on your
control node, then you can remove the `master` taint from it.  This
"taint" is what normally keeps pods from being scheduled onto the
master node.

```
kubectl taint nodes --all node-role.kubernetes.io/master-
```

Note that when you run `kubeadm init` it will give you a command line
you can use to join other nodes to the cluster.  That process is
a little easier if you record that command somewhere safe, but I'll
show you how to reproduce it if you need to also.
