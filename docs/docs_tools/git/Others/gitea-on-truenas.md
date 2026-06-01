---
title: Hosting With Gitea On TrueNAS
description: 'Git Hosting With Gitea On TrueNAS notes covering key definitions, core concepts, worked examples, and practice questions for systematic revision.'
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

### Persistent Storage Configuration

1. Create a dedicated dataset: `Storage > Pools > pool_name > Add Dataset` (e.g., `mnt/pool/gitea`).
2. Mount this dataset into the Gitea container at `/data`. This ensures repositories, the database,
   and configuration survive container restarts and updates.
3. Set the dataset to use at least 50 GB (repositories grow quickly).

### Ingress and HTTPS Setup

1. In the Gitea app configuration, enable Ingress and set the host name (e.g., `git.example.com`).
2. Use TrueNAS built-in Certificates or Traefik with Let's Encrypt for automatic TLS certificate
   provisioning.
3. Configure DNS to point the domain to the TrueNAS host IP.
4. Verify HTTPS by navigating to `https://git.example.com` in a browser.

### First Repository Setup

1. Create an admin account on first login.
2. Configure `app.ini` for email notifications: set SMTP host, port, user, and password.
3. Create your first repository and push using SSH:
   ```bash
   git remote add origin git@git.example.com:user/repo.git
   git push -u origin main
   ```
4. Add SSH keys under `Settings > SSH / GPG Keys`.

### Backup Strategy

1. **Gitea dump**: `gitea dump` creates a zip with the database, repositories, and configuration.
2. **Scheduled tasks**: Use TrueNAS `Task Manager` to run `gitea dump` nightly and copy the archive
   to a backup dataset.
3. **Off-site replication**: Configure TrueNAS cloud sync to push backups to S3-compatible storage
   or a remote TrueNAS instance.

### WireGuard VPN Configuration

1. Install WireGuard on the client machine.
2. Add a peer entry on TrueNAS: `Network > WireGuard Peers > Add` with the client public key and
   allowed IPs.
3. On the client, configure the peer with the TrueNAS endpoint address and port.
4. Verify connectivity: `ping <gitea-internal-ip>` through the tunnel.

### Troubleshooting

- **502 Bad Gateway**: Check that the Gitea pod is running (`kubectl get pods` or TrueNAS app
  status). The most common cause is a misconfigured ingress pointing to the wrong port.
- **Cannot push via SSH**: Verify the SSH port is exposed in the Gitea app settings (default 22
  mapped to a host port, e.g., 30022). Ensure the firewall allows the mapped port.
- **Slow performance**: Increase the PostgreSQL connection pool in `app.ini`
  (`DB_MAX_OPEN_CONNS = 50`). Move the database to a dedicated SSD dataset.
- **Repository migration**: Use the Gitea admin panel `Site Administration > Repository Migration`
  to import repositories from GitHub, GitLab, or another Gitea instance.
