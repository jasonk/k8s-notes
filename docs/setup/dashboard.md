---
title: Dashboard
---

Let's install our first application, the Kubernetes Dashboard.  This
is a nice web-based UI that lets you acecss and manage your cluster
from a web browser.

Deploying the dashboard is very easy:

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
```

However, just deploying it isn't very interesting, you also need to be
able to access it.  Run `kubectl get pods --all-namepsaces` to see the
status of all the pods in your cluster.  If you are a fast reader then
parts of the dashboard pods may still be deploying.  Check back in
a minute or two, once `kubectl get pods` says that all of your pods
are in `Running` status then you are ready to continue.

The first problem with accessing it is that the dashboard is running
on a pod inside the cluster.  Kubernetes networking by default allows
all the pods to talk to each other, but you aren't a pod and your
desktop isn't inside the cluster (even if the cluster is running in
a VM on your desktop).  To fix that, `kubectl` has a trick up it's
sleeve.  On your desktop machine open up a new shell, stick it out of
the way in a corner somewhere, and in that shell run `kubectl proxy`.
You should get a message that says `Starting to serve on
127.0.0.1:8001`.  This means that `kubectl` is now running a proxy
server that can give the browser on your desktop access to things
running inside the cluster.

To try it out, visit this URL in your browser:
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

You should get a page that says 'Kubernetes Dashboard' that asks you
to pick either `Token` or `Kubeconfig` authentication.  Unfortunately
neither of these will work to let us in just yet, so we're going to
use this opportunity to learn how to create a user.

# Adding a User #

We're going to make an admin service account that matches our user
account name on the cluster server.

To do that, we're going to create a [YAML](https://yaml.org/) file
with the configuration we need and then use `kubectl` to apply it.
This is a very common activity when managing Kubernetes, so this is
a good chance to learn it.

Create a file with either a `.yaml` or `.yml` extension.  I called
mine `service-account-jason.yaml`.  The contents of this file are
going to become very familiar as we continue.  For Kubernetes these
files nearly always have the same sections: `apiVersion` (indicating
the version of the API that the rest of the config file is assuming),
`kind` (the kind of resource that is being provisioned in the cluster,
and `metadata` (information about the resource being provisioned).
There are other sections that may show up depending on thekind of
resource being provisioned, but these three are in basically every
file.  If you ever have questions about what options are available for
a certain kind of resource, `kubectl` can answer that question for
you!  Try it out now by running `kubectl explain serviceaccount` to
see what fields are available when defining a service account.

Now start out your config file with:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: jason
  namespace: kubernetes-dashboard
```

This says we want to create a service account with the name `jason`
and give it access to the `kubernetes-dashboard` namespace.  As is
often the case with Kubernetes resources, this one item alone isn't
enough to get you the access you need, you also need
a `ClusterRoleBinding` to connect this service account to a role that
defines what it is allowed to do.  You could put the configuration for
this binding into another file, but YAML allows you to put multiple
documents into one file, which makes it easier to keep related things
together.  All you have to do is include a line with nothing but three
dashes as a document separator, and then you can start another
document.  So now, add these lines to your service account yaml file:

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: jason
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: jason
  namespace: kubernetes-dashboard
EOF
```

Now you just need to apply that file to your cluster:

```sh
kubectl apply -f ./service-account-jason.yaml
```

If all went well you now have a service account that has cluster-admin
permissions to the `kubernetes-dashboard` namespace.  All you need to
do now is to get a token for it.  To do that, first list the secrets
in that namespace:

```sh
kubectl -n kubernetes-dashboard get secret
```

You'll get back a list that includes several things that were
automatically created when you setup the cluster, but you should also
see a fairly new one that starts with `jason-token-`, that's the one
you want.  Now that you know what it's called, you can ask `kubectl`
to tell you about it.

```sh
kubectl -n kubernetes-dashboard describe secret jason-token-w9rbz
```

This will give you a bunch of information about the secret, and near
the end will be a huge block of text labeled `token`.  You want to
copy just the big blob of characters (without including the `token:`
at the beginning, then go back to the browser you opened earlier
to the Kubernetes Dashboard.  Make sure the `Token` option is
selected, and paste that big blob into the field that says `Enter
token`.

Now all that is left is to click "Sign In". and you should be looking
at the dashboard for your cluster.  To see everything in the cluster,
find the `Namespace` menu on the left side of the screen, and change
it from where it currently is (probably "default") to "All
namespaces".  Now you can click through the other options in the left
side of the screen to see all the parts of your cluster that you just
built.

# Cleaning Up #

If you decide later that you want to get rid of this service account,
you can either tell `kubectl` to delete the resources using the same
file you used to create them:

```sh
kubectl delete -f ./service-account-jason.yaml
```

Or you can just manually delete the two resources that were created:

```sh
kubectl -n kubernetes-dashboard delete serviceaccount jason
kubectl -n kubernetes-dashboard delete clusterrolebinding jason
```
