<div align="center">
  <br>
  <h2>silky</h2>
</div>
<hr/>
<p align="center">
  <a href="https://github.com/polyseam/silky/actions/workflows/main-latest.yaml">
    <img src="https://github.com/polyseam/silky/actions/workflows/main-latest.yaml/badge.svg" alt="main" style="max-width: 100%;">
  </a>
  <img src="https://img.shields.io/github/languages/code-size/polyseam/silky" alt="GitHub code size in bytes">
  <img src="https://img.shields.io/github/commit-activity/w/polyseam/silky" alt="GitHub commit activity">
  <a href="https://github.com/polyseam/silky/issues">
    <img src="https://img.shields.io/github/issues/polyseam/silky" alt="GitHub issues">
  </a>
</p>

### why?

This is a helper to create and manage x509 Keypairs.

This is used in [polyseam/cndi](https://github.com/polyseam/cndi) to generate a
key-pair used by [Kubeseal](https://github.com/bitnami-labs/sealed-secrets) for
encrypting
[Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
in a [GitOps](https://www.redhat.com/en/topics/devops/what-is-gitops)-friendly
way.
