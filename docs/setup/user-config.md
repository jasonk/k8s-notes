---
title: User Configuration
---

Now that our control node is running, we need to be able to access it.
Let's get the `root` user on the control node setup first.

When we initialized the cluster, `kubeadm` created a config file that
has all of the information we need to use `kubectl` to connect to and
manage the cluster.  It stored this file in
`/etc/kubernetes/admin.conf`.  In order to use `kubectl` as the root
user without having to pass a flag pointing at that config file every
time, we'll just make a symlink to make that file also appear in our
`~/.kube` directory.

```sh
mkdir -p ~/.kube
ln -sf /etc/kubernetes/admin.conf ~/.kube/config
```

Now you should be able to use `kubectl` to access the cluster.  Try
some of these commands out:

```sh
kubectl cluster-info
kubectl get pods --all-namespaces
```

Having access to this as `root` is great, but generally you don't want
to spend too much time logged in as `root`, so let's set up a regular
user also.

You may have created a user account for yourself while installing
Debian, if so you can use that account and skip this next part.  If
you didn't do that then you can create a new user now.  In the
examples that follow you probably want to replace "jason" with your
own name (unless you happen to also be a Jason, then you are in
luck!).

```sh
useradd --user-group --create-home --comment "Jason" jason
echo 'jason ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/jason
mkdir -p ~jason/.kube
cp /etc/kubernetes/admin.conf ~jason/.kube/config
chown -R jason:jason ~jason/.kube
passwdd jason
```

Now, BEFORE YOU LOGOUT OF YOUR ROOT SHELL!  Open up a new terminal,
login to the control node as your new user, and use `sudo -i` to get
a new root terminal.  If all goes well, you can now logout of the root
shell in both terminals.  You want to make sure all goes well before
you logout of the first terminal though, because if you mess up the
sudo config you could lock yourself out and it would take quite a bit
more effort to get logged back in as root.

# Workstation Setup #

In some of the upcoming steps you are going to want to be able to
access these cluster tools from your desktop, especially for the
services we're going to setup that have web interfaces.  The
instructions that follow should happen on your desktop or laptop
machine, not on the cluster itself.

To start out we're going to install `kubectl` on your workstation.  If
you are on a Mac and have [Homebrew](https://brew.sh/) installed, or
on Windows and have [Chocolatey](https://chocolatey.org/) then you can
use those to easily install it.  If your workstation is Debian or
Ubuntu you can use the same instructions we used earlier to install it
on the cluster control node.   For other options see the docs at
[Install Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

```sh
# Mac
brew install kubernetes-cli helm

# Windows:
choco install kubernetes-cli kubernetes-helm
```

Now we're going to make a `.kube` directory just like we did for the
root user, and copy that same config file into that directory.

```
mkdir -p ~/.kube
scp jason@cluster.local:.kube/config ~/.kube
```

Once that is done you should be able to run `kubectl` from a terminal
on your desktop machine just like you did remotely.  Try running
`kubectl cluster-info` again just to make sure everything works.
