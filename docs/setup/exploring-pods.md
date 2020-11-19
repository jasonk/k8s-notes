---
title: Exploring Pods
---
Let's take a break from installing pods for a minute and look at some
of things you can do with those pods now that you have them.

If you want to take a look around inside a pod container, that's
a very easy thing to do, just pick an appropriate container and run:

```sh
kubectl exec -it grafana-7c9bc466d8-dw5rz -n monitoring -- /bin/sh
```

You can use this same idea to run whatever commands you want inside
the container.  Say you just want to see what commands are running in
a container:

```sh
kubectl exec -it grafana-7c9bc466d8-dw5rz -n monitoring -- ps xauwww
```

# Resetting the Grafana Admin Password #

Let's use this power for something useful.  You may have noticed that
I've had you visit the login screen of your Grafana install several
times now, but always just to ensure you could get there, we never
actually logged in.  Had we tried your next question would have been
"what's the password?" and I dont' have any idea what the answer is.

So, let's fix that by changing the password to something else using
this new "running commands in containers" ability.

First, let's find the name of our grafana container:

```sh
kubectl get pods -o=name -n monitoring | grep grafana | xargs basename
```

Now let's use that information to reset the admin password for our
Grafana instance to be the pod name.

NAMESPACE=monitoring
POD_NAME=$(kubectl get pods  -o=name -n "${NAMESPACE}" | grep grafana | cut -f2 -d\/
```sh
POD="$(kubectl get pods -o=name -n monitoring | grep grafana | xargs basename)"
kubectl exec -it -n monitoring "${POD}" -- /usr/share/grafana/bin/grafana-cli admin reset-admin-password "${POD}"
```

Now take a little bit of time to explore all the data being collected
about your cluster by Prometheus and Grafana.  The default
`kube-prometheus` install defines a bunch of default dashboards with
a wide variety of metrics.
