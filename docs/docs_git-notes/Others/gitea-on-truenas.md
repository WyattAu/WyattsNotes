---
title: Hosting With Gitea On TrueNAS
date: 2025-06-13T18:10:33.853Z
tags:
  - git
categories:
  - CS
slug: hosting-gitea-truenas
---

## Procedure

1. Since there is built in support for Gitea with TrueCharts, install Gitea using `Discover Apps`. Assign a dedicated dataset (eg, `mnt/pool/gitea`) for persistent storage.
2. Set the service type to `ClusterIP` using Ingress for external access, and exposing HTTPS ports

## Setup Networking

WireGuard is recommended.

1. Enable WireGuard: `Network>WireGuard Peers`
