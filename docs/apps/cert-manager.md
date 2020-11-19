---
title: cert-manager
---

> cert-manager is a native Kubernetes certificate management
> controller. It can help with issuing certificates from a variety of
> sources, such as Let’s Encrypt, HashiCorp Vault, Venafi, a simple
> signing key pair, or self signed.
>
> It will ensure certificates are valid and up to date, and attempt to
> renew certificates at a configured time before expiry.

Home Page: https://cert-manager.io/docs/

# Cluster Installation #

```sh
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.0.4/cert-manager.yaml
```

# Testing the install #

Create a test issuer to issue a self-signed certificate:

```sh
cat <<EOF > test-resources.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: cert-manager-test
---
apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: test-selfsigned
  namespace: cert-manager-test
spec:
  selfSigned: {}
---
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: selfsigned-cert
  namespace: cert-manager-test
spec:
  dnsNames:
    - example.com
  secretName: selfsigned-cert-tls
  issuerRef:
    name: test-selfsigned
EOF
```

Then apply that configuration.  If you get an error about "failed
calling webhook" then the cert-manager is probably still coming up,
wait a minute or two and try again.

```sh
kubectl apply -f test-resources.yaml
```

Check that it was successfully issued (you may need to wait a few
seconds for it to finish).

```sh
kubectl describe certificate -n cert-manager-test
```

Clean up:

```sh
kubectl delete -f test-resources.yaml
```


# Workstation Installation #

There is a `cert-manager` plugin for `kubectl` that can help make some
of the more common actions easier.

```sh
curl -Lo kubectl-cert-manager.tar.gz https://github.com/jetstack/cert-manager/releases/download/v1.0.4/kubectl-cert_manager-linux-amd64.tar.gz
tar xzf kubectl-cert-manager.tar.gz
sudo mv kubectl-cert_manager /usr/local/bin
```

To see how to use it visit
https://cert-manager.io/docs/usage/kubectl-plugin/

# Configuration #

To actually issue certificates you need to configure an issuer.

* [SelfSigned](https://cert-manager.io/docs/configuration/selfsigned/)

The SelfSigned issuer is the simplest to setup, but it also means that
clients have no way to trust the issued certificates.  You might want
to use this one for testing, but otherwise it's only really useful for
the bootstrapping phase of some other PKI setup.

* [CA](https://cert-manager.io/docs/configuration/ca/)

The CA issuer creates a Certificate Authority in the cluster, with
a private key stored as a Kubernetes Secret that can then be used to
sign other certificates.  This is one step above the SelfSigned
issuer, as you still have to add the CA certificate to your browser or
client applications so they know to trust the issued certificates, but
once they are configured any certificates issued by this issuer will
be trusted.

* [ACME](https://cert-manager.io/docs/configuration/acme/)

The ACME issuer requests certificates using the ACME protocol.  The
most popular of these is [Let's Encrypt](https://letsencrypt.org/),
which provides free certificates signed by a globally trusted
certificate authority.

Other issuer types can be found at https://cert-manager.io/docs/configuration/

# Next Steps #

https://docs.cert-manager.io/en/latest/tutorials/acme/http-validation.html

* [FAQ](https://cert-manager.io/docs/faq/)

