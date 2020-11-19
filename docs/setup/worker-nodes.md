---
title: Adding Worker Nodes
---

To add addtional worker nodes to your cluster, start the same way you
did for the control node, by installing Debian 10 or whatever Linux
distribution you are using as your base OS.

Then run the same install steps to get kubeadm, kubelet and kubectl installed.

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

apt update
apt upgrade -y
apt install -y containerd.io kubeadm kubelet kubectl
```

Now, back on the master you need to get the join command and then run
the command that it gives you on the new node.

```
kubeadm token create --print-join-command
```
