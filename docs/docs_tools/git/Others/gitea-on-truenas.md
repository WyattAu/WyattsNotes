---
title: Hosting With Gitea On TrueNAS
description:
  'Git version control: Hosting With Gitea On TrueNAS — Procedure; Setup Networking, covering core
  concepts and practical techniques.'
date: 2025-06-13T18:10:33.853Z
tags:
  - git
categories:
  - CS
slug: hosting-gitea-truenas
---

## Procedure

1. Since there is built in support for Gitea with TrueCharts, install Gitea using `Discover Apps`.
   Assign a dedicated dataset (eg, `mnt/pool/gitea`) for persistent storage.
2. Set the service type to `ClusterIP` using Ingress for external access, and exposing HTTPS ports

## Setup Networking

WireGuard is recommended.

1. Enable WireGuard: `Network>WireGuard Peers`

## Common Pitfalls

1. Confusing `git reset` and `git revert` — reset moves the branch pointer; revert creates a new
   commit that undoes changes.

2. Forgetting to pull before pushing when working collaboratively, leading to merge conflicts.

3. Confusing authentication (who you are) with authorisation (what you can do) in security contexts.

4. Misunderstanding the difference between a stack (LIFO) and a queue (FIFO) in data structure
   applications.

5. Confusing an algorithm with a program — an algorithm is a step-by-step procedure, not its
   implementation in code.

6. Writing pseudocode that is too language-specific rather than using standard algorithmic
   constructs.
