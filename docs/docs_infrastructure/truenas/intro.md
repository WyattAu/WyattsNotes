---
id: intro
title: Introduction to TrueNAS
description: TrueNAS setup, configuration, and storage management best practices.
slug: intro
sidebar_position: 1
---

## Abstract

Reference for deploying and managing TrueNAS (CORE and SCALE), covering ZFS pool design, dataset
permissions, SMB/NFS sharing, snapshots, replication, encryption, and backup strategies.

## What is TrueNAS

TrueNAS is open-source network-attached storage (NAS) software built on top of OpenZFS. It is
developed and maintained by iXsystems and comes in two editions:

- **TrueNAS CORE** -- Based on FreeBSD. Mature, battle-tested, and widely deployed in production.
  Uses the FreeBSD kernel and ZFS implementation.
- **TrueNAS SCALE** -- Based on Debian Linux. Supports Docker containers and Kubernetes applications
  natively. Uses the OpenZFS on Linux (ZoL) implementation. This is the actively developed flagship
  edition.

Both editions share the same web interface, REST API, and core storage management features. The
primary differences are the underlying OS (FreeBSD vs. Linux) and the application ecosystem.

## Why TrueNAS

TrueNAS combines enterprise-grade storage features with a manageable web interface. The value
proposition rests on three pillars:

1. **OpenZFS at the core.** Every dataset is checksummed, every pool is self-healing, and every
   snapshot is free. ZFS provides data integrity guarantees that traditional filesystems and RAID
   controllers cannot match. There is no write hole, no silent corruption, and no rebuild
   degradation -- the filesystem is the volume manager.

2. **Built-in data protection.** Snapshots, replication (ZFS send/receive), cloud sync, and
   scrubbing are first-class features, not add-on products. TrueNAS makes the 3-2-1 backup rule
   achievable without third-party software.

3. **Unified protocol support.** SMB, NFS, iSCSI, and S3-compatible object storage are all
   configurable from the same interface. A single TrueNAS system can serve Windows file shares,
   Linux NFS mounts, VMware iSCSI datastores, and S3 API clients simultaneously.

## Scope of This Reference

This reference covers the operational knowledge needed to design, deploy, and maintain a TrueNAS
system in a homelab or small-to-medium business environment. It is organized into the following
sections:

| Section                 | Content                                                        |
| ----------------------- | -------------------------------------------------------------- |
| ZFS Deep Dive           | Pool architecture, vdev types, datasets, snapshots, ARC, scrub |
| Sharing and Permissions | SMB, NFS, iSCSI, ACLs, Kerberos, shadow copies                 |
| Backup and Replication  | ZFS send/receive, cloud sync, ransomware protection, RPO/RTO   |
| Apps and Services       | Container management, common application deployment            |
| Monitoring and Alerting | Grafana, Prometheus, SMART monitoring, alert configuration     |
| Performance Tuning      | ARC sizing, recordsize, compression, SMB/NFS tuning, hardware  |
| ZFS Encryption          | Native encryption, key management, raw send, security          |

The focus is on TrueNAS SCALE (Linux-based), but most ZFS concepts, CLI commands, and best practices
apply equally to TrueNAS CORE. Where there are platform-specific differences, they are noted.

## Before You Begin

A few assumptions about the reader and the environment:

- You are familiar with Linux command-line administration (bash, systemd, networking).
- You understand basic storage concepts (RAID, filesystems, block devices).
- You have physical or virtual hardware available with at least two disks (mirroring is the minimum
  for redundancy).
- Your TrueNAS system is accessible via the web UI and SSH.

For hardware recommendations, refer to the TrueNAS hardware guide. The critical requirements are ECC
RAM, an HBA in IT mode (not a RAID controller), and enough RAM for the ARC (32 GB minimum for a
dedicated NAS, 64 GB recommended).
