---
title: Setting Up Home Server
date: 2025-07-11T17:57:30.362Z
tags:
  - OS
categories:
  - OS
slug: setting-home-server
---

## Hardware Selection

### CPU

For a homelab NAS running TrueNAS SCALE, CPU choice depends on the workload:

- **Light NAS duties** (SMB/NFS, snapshots, periodic scrubbing): Intel Celeron J4125 or N5105, AMD
  Ryzen 3 3200GE. These draw 10-25W TDP and are more than sufficient.
- **Transcoding / media server**: Intel chips with Quick Sync Video (QSV) are strongly preferred. An
  i3-12100 or i5-12400 gives you hardware transcoding for Plex/Jellyfin at negligible power cost.
- **Virtualization heavy**: i5-12400 or Ryzen 5 5600G. More cores for VMs and containers.

Avoid high-TDP desktop CPUs unless you are comfortable with power consumption and thermals. ECC
support is a nice-to-have but not required for ZFS; uncorrectable errors from non-ECC RAM are rare
in homelab workloads.

### RAM

ZFS is a greedy consumer of RAM. The old rule of thumb "1 GB per TB of raw storage" is a starting
point, but in practice:

- **Minimum**: 16 GB for a 4-drive homelab NAS
- **Recommended**: 32 GB if you plan to run VMs, Docker workloads, or Plex transcoding
- **Sweet spot**: 64 GB DDR4 ECC UDIMMs (two 32 GB sticks) on a Supermicro or ASRock Rack board

Do not run ZFS with less than 8 GB. The ARC (Adaptive Replacement Cache) will starve and performance
will tank. ECC RAM is recommended but not mandatory — ZFS has its own checksumming at the block
level.

### Storage Drives

Use NAS-grade or enterprise drives. Consumer desktop drives (WD Blue, Seagate Barracuda) have
aggressive head-parking and shorter warranties.

| Tier            | Example Drives                       | Use Case                             |
| --------------- | ------------------------------------ | ------------------------------------ |
| NAS             | WD Red Plus, Seagate IronWolf        | Primary storage pools                |
| Enterprise      | WD Gold, HGST Ultrastar, Toshiba MG  | Heavy write workloads, critical data |
| SSD (SATA/NVMe) | Samsung 870 EVO, WD Red SA500        | SLOG (ZIL), L2ARC, metadata vdev     |
| Boot            | Any 32 GB+ SATA SSD or USB 3.0 flash | OS install only                      |

Key considerations:

- **CMR vs SMR**: Only use CMR (Conventional Magnetic Recording) drives. SMR (Shingled Magnetic
  Recording) drives cause catastrophic ZFS performance degradation during resilvering. WD Red
  **Plus** is CMR; regular WD Red may be SMR.
- **Drive count**: Plan for at least a mirror (2 drives) or RAIDZ1 (3 drives). RAIDZ2 (4+ drives,
  double parity) is strongly recommended for any pool holding data you care about.
- **Shuck externals**: WD EasyStore and Elements drives are often cheaper than their internal
  equivalents. Shucking is common practice in the homelab community.

### Motherboard and Chassis

- **IPMI**: Strongly recommended. Supermicro X11SCA-F or similar boards with IPMI let you manage the
  server headless — remote console, power control, sensor monitoring. Without IPMI you need a
  display and keyboard attached.
- **SATA ports**: Ensure enough ports for current drives plus expansion. A 6-port HBA card (LSI
  9211-8i flashed to IT mode) is cheap and gives you 8 SAS/SATA ports.
- **Chassis**: Fractal Design Define 7 or similar with hot-swap bays. Hot-swap is a quality-of-life
  feature you will appreciate.

### UPS

A UPS is non-negotiable for a ZFS NAS. Power loss during a write can corrupt the pool. Recommended:

- CyberPower CP1500PFCLCD or APC Back-UPS Pro 1500
- Must support USB HID signaling (not just serial)
- Use NUT (Network UPS Tools) — TrueNAS has built-in NUT support

## Software and Images

- [Rufus](https://rufus.ie/en/) or [Balena Etcher](https://balena.io/etcher/) for writing the ISO
- [TrueNAS SCALE ISO](https://www.truenas.com/download-truenas-community-edition/) — use the latest
  stable release, not beta/nightly

## Installation Procedure

1. Plug in the USB drive (all content on it will be erased)
2. Start Rufus and select the TrueNAS SCALE ISO
3. Change the file system to FAT32 or exFAT
4. Click Start and select DD mode when prompted
5. Unplug the USB and plug it into the server
6. Boot the server and select the USB as the boot drive
7. Select Install on your SSD when prompted
8. Create your admin account (username: `truenas_admin`)
9. Open the internal IP address of the server in a browser on another device
10. Log in with the admin credentials

## Initial Configuration

### Network Setup

Set a static IP on the TrueNAS web UI:

1. Navigate to **Network > Interfaces** and click on your primary interface (e.g., `eth0`)
2. Set IPv4 to **Manual** and assign:
   - IP: `192.168.1.10` (or whatever fits your LAN scheme)
   - Netmask: `255.255.255.0`
   - Gateway: `192.168.1.1`
   - DNS: `1.1.1.1, 9.9.9.9`
3. Click **Save**
4. If you have multiple NICs, consider bonding (LACP) for redundancy and throughput

Check connectivity from a terminal:

```bash
ping 192.168.1.10
ssh truenas_admin@192.168.1.10
```

### Storage Pool Creation

1. Navigate to **Storage > Pools** and click **Create Pool**
2. Give the pool a name (e.g., `tank`)
3. Select a topology:
   - **Mirror** (2 drives): Best IOPS, 50% usable capacity. Good for SSD pools.
   - **RAIDZ1** (3+ drives, single parity): Good balance. One drive can fail.
   - **RAIDZ2** (4+ drives, double parity): Recommended for important data. Two drives can fail
     simultaneously.
   - **Stripe** (single drive or multiple with no redundancy): Only for temporary/cache data.
4. Add your drives and select the data VDEV type
5. Click **Create Pool**

Important ZFS pool design rules:

- **Never mix drive sizes** within a VDEV (all drives in a VDEV should be the same size)
- **You can add VDEVs** to a pool (striping across them), but you **cannot remove** a VDEV from a
  pool
- A pool's IOPS is determined by the slowest VDEV
- Plan your pool layout carefully — resizing later is limited

### Dataset Creation

Datasets are ZFS filesystems within a pool. They are lightweight and you should create them
liberally.

Navigate to **Storage > Pools**, click the three-dot menu on your pool, and **Add Dataset**.

Recommended dataset structure:

```
tank/
├── apps/          # TrueNAS Apps (Kubernetes/Docker workloads)
├── media/
│   ├── tv/
│   ├── movies/
│   └── music/
├── share/         # SMB/NFS shares
├── backup/        # Backups from other machines
└── iso/           # ISOs and install media
```

Key dataset options:

| Setting     | Recommended Value | Notes                                                                        |
| ----------- | ----------------- | ---------------------------------------------------------------------------- |
| Compression | zstd              | Excellent compression ratio, fast. Set on the pool or per-dataset.           |
| Atime       | off               | Reduces unnecessary writes                                                   |
| Sync        | standard          | Default. Set to `always` for NFS sync writes, `disabled` for disposable data |
| Quota       | Set as needed     | Prevents a runaway process from filling the pool                             |
| Recordsize  | 128K              | Default. Use 1M for large media files, 16K or 8K for databases               |

```bash
# Verify compression savings from the CLI
zfs get compressratio tank/media
zfs get compressratio tank/apps

# List all datasets
zfs list -o name,used,avail,refer,mountpoint
```

## User and Group Management

1. Navigate to **Credentials > Local Users** and click **Add**
2. Create a user for each person who needs access, or create role-based users:
   - `media_user` — read-only access to media shares
   - `admin_user` — read-write access to everything
3. Navigate to **Credentials > Local Groups** and create groups as needed
4. Assign users to groups

From the CLI:

```bash
# List users
midclt call user.query

# Create a group
midclt call group.create '{"name": "media", "gid": 5500}'

# Create a user and assign to group
midclt call user.create '{
  "username": "wyatt",
  "full_name": "Wyatt",
  "group_create": true,
  "groups": [[5500]],
  "home": "/mnt/tank/share/wyatt",
  "shell": "/bin/bash"
}'
```

## SMB Sharing

1. Navigate to **Sharing > SMB Shares** and click **Add**
2. Select the dataset to share (e.g., `tank/share`)
3. Configure:
   - **Name**: The share name visible to Windows clients
   - **Purpose**: Default (multi-protocol) is fine for most cases
   - **SMB/CIFS Options**:
     - Enable **SMB Multichannel** if you have multiple NICs
     - Set **AIO** (Asynchronous I/O) to enabled for better performance
4. Under **ACL**, set permissions. For a simple homelab:
   - `truenas_admin`: Full Control
   - `media_user`: Read

From a Windows client:

```
\\192.168.1.10\share
```

From Linux:

```bash
# Mount SMB share
sudo mount -t cifs //192.168.1.10/share /mnt/nas -o username=wyatt,uid=1000,gid=1000
```

### SMB Performance Tuning

Enable SMB3 on the TrueNAS CLI for better performance:

```bash
midclt call smb.update '{"smb3": true, "aio": true, "protocol": "SMB3"}'
```

## NFS Sharing

1. Navigate to **Sharing > NFS Shares** and click **Add**
2. Select the dataset
3. Set the authorized hosts/network: `192.168.1.0/24`
4. Maproot user if needed (for root squashing behavior)

From a Linux client:

```bash
# Mount NFS share
sudo mount -t nfs 192.168.1.10:/mnt/tank/media /mnt/nfs-media

# Add to /etc/fstab for persistent mount
192.168.1.10:/mnt/tank/media /mnt/nfs-media nfs defaults,_netdev 0 0
```

NFSv4 is used by default. NFS is preferred over SMB for Linux-to-Linux file transfers due to lower
overhead and better POSIX compatibility.

## Snapshot Policies

ZFS snapshots are instantaneous, space-efficient point-in-time copies. They are the backbone of any
sane backup strategy.

### Creating Snapshot Tasks

1. Navigate to **Data Protection > Periodic Snapshot Tasks**
2. Click **Add**
3. Configure:
   - **Dataset**: Select the dataset (e.g., `tank/media`)
   - **Naming Schema**: `auto-%Y-%m-%d_%H-%M` (or use `custom-%Y%m%d-%H%M%S`)
   - **Schedule**: `0 */6 * * *` (every 6 hours) for important data, daily for media
   - **Lifetime**: `2w` (2 weeks) or `30d` for longer retention
   - **Recursive**: Check this to snapshot child datasets too

### Recommended Snapshot Schedule

| Dataset       | Frequency     | Retention |
| ------------- | ------------- | --------- |
| `tank/apps`   | Hourly        | 3 days    |
| `tank/share`  | Every 6 hours | 2 weeks   |
| `tank/media`  | Daily         | 30 days   |
| `tank/backup` | Daily         | 90 days   |

### Manual Snapshots and Rollback

```bash
# Take a manual snapshot
zfs snapshot tank/share@before-upgrade

# List snapshots
zfs list -t snapshot -o name,creation,used

# Rollback to a snapshot (destroys newer snapshots!)
zfs rollback tank/share@before-upgrade

# Clone a snapshot (read-write copy, no data copied until modified)
zfs clone tank/share@before-upgrade tank/share-restored

# Destroy old snapshots to free space
zfs destroy tank/share@auto-2025-01-01_00-00
```

## Backup Strategy

Snapshots on the same pool are **not** backups. If the pool dies, the snapshots die with it.

### Replication (Same or Remote Network)

1. Navigate to **Data Protection > Replication Tasks**
2. Click **Add**
3. Select source and destination datasets (can be on the same server or a remote TrueNAS)
4. Configure schedule and retention
5. Use SSH key authentication for remote replication

### Offsite Backup

For true offsite backup:

- **Rclone + B2/Backblaze**: Install rclone as a TrueNAS App or run from a cronjob. Back up critical
  datasets to Backblaze B2 cloud storage.
- **rsync to another machine**: Simple but effective for a second local machine.

```bash
# Example: rclone cron job to Backblaze B2
rclone sync /mnt/tank/backup b2:my-bucket/truenas-backup \
  --bwlimit 10M \
  --log-file /var/log/rclone-backup.log \
  --exclude "*.tmp"
```

### Cloud Sync (Built-in)

TrueNAS SCALE has a **Cloud Sync** feature under **Data Protection** that supports S3, Backblaze B2,
Google Drive, and more. Set up a scheduled sync task from the web UI.

## Monitoring

### Built-in TrueNAS Alerts

Navigate to **System > Alerts**. Configure alert rules for:

- Pool capacity &gt; 80%
- Drive temperature &gt; 45°C
- SMART test failures
- Scrub errors
- UPS battery low

### Email Notifications

1. Navigate to **System > Advanced > Email**
2. Configure SMTP settings (Gmail App Passwords work well)
3. Under **System > Alert Settings**, enable email notifications

### Grafana + Prometheus (Optional)

For deeper monitoring, deploy the TrueNAS Apps for Prometheus and Grafana:

```bash
# TrueNAS exposes metrics at
curl http://192.168.1.10:9090/metrics
```

Import community dashboards for ZFS pool health, drive temperatures, and network throughput.

## UPS Integration with NUT

1. Connect the UPS to the TrueNAS server via USB
2. Navigate to **System > UPS**
3. Configure:
   - **Driver**: `usbhid-ups`
   - **Port**: Auto-detect or `/dev/ugenX.Y` (check with `upsc`)
   - **Mode**: `Master` if this is the only NUT server, `Netserver` for network clients
   - **Shutdown**: Set to `UPS reaches low battery`
4. Add connected devices that should also shut down

Test the UPS connection:

```bash
# Verify UPS is detected
upsc ups@localhost

# Expected output includes battery charge, load, and status
```

## Scrub Tasks

Regular scrubs read every block on the pool and verify checksums, detecting silent data corruption
(bit rot).

1. Navigate to **Data Protection > Scrub Tasks**
2. Click **Add**
3. Select the pool and set schedule to **monthly**
4. Enable email notification on scrub completion

```bash
# Manually start a scrub
zpool scrub tank

# Check scrub status
zpool status tank
```

Never skip scrubs. A monthly scrub schedule is the minimum for data integrity assurance.

## Common Pitfalls and Lessons Learned

<details>
<summary>Drive ordering after reboot</summary>

ZFS identifies drives by GUID, not by /dev/sdX names. This means drive reordering does not affect
pool import. However, if you are using a USB enclosure, drives may enumerate differently. Always use
the TrueNAS web UI for pool management — never manually import with `zpool import` unless you know
exactly what you are doing.
</details>

<details>
<summary>Running out of space on the boot drive</summary>

The TrueNAS SCALE boot drive needs at least 32 GB. If you installed on a small USB flash drive, the
system will fill it with logs and crashloop. Use a real SSD for the boot drive, not a cheap USB
stick.
</details>

<details>
<summary>SMR drives in a pool</summary>

If resilvering takes days and pool performance drops to single-digit MB/s, you likely have SMR
drives. Check with:

```bash
# Check drive model
smartctl -i /dev/sda | grep "Rotation Rate"
# If it says "5400 rpm" but the model is known SMR, replace it
```

Reference: [WD SMR drive list](https://www.reddit.com/r/DataHoarder/wiki/smr) and similar
community-maintained lists.
</details>

<details>
<summary>Permission problems with SMB</summary>

ZFS ACLs and POSIX permissions can conflict. If Windows clients cannot write to a share:

1. Check the dataset ACL under **Storage > Pools > Dataset > Edit Permissions**
2. Ensure the SMB user is the owner or has an explicit ACL entry
3. Avoid mixing NFS and SMB on the same dataset — use separate datasets if possible
</details>

<details>
<summary>Docker/App storage filling up</summary>

TrueNAS SCALE Apps (Kubernetes-based) store container images in a separate location. Monitor:

```bash
# Check app storage usage
df -h /mnt/.ix-apps
```

Clean up unused images and prune logs periodically.
</details>

## Useful CLI Commands Reference

```bash
# Pool health
zpool status -v

# Dataset properties
zfs get all tank/media | grep -E "compress|atime|recordsize|sync"

# Real-time I/O stats
zpool iostat -v 1

# Find what is using space
du -sh /mnt/tank/*/
zfs list -o name,used,avail,refer -s used

# Destroy all snapshots matching a pattern
zfs list -t snapshot -o name | grep "auto-2024-" | xargs -I{} zfs destroy {}

# SMART test on all drives
for drive in /dev/sd?; do
  smartctl -t long "$drive"
done

# Check SMART results after test completes (several hours)
for drive in /dev/sd?; do
  echo "=== $drive ==="
  smartctl -l selftest "$drive" | tail -5
done
```
