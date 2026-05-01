---
title: LVM and Disk Partitioning
description:
  LVM and Disk Partitioning — Disk Fundamentals; Block Devices; Partition
  Tables; MBR (Master Boot Record) with worked examples and exam-style
  questions.
date: 2026-04-07T00:00:00.000Z
tags:
  - Linux
categories:
  - Linux
slug: lvm-and-disk-partitioning
---

## Disk Fundamentals

### Block Devices

Linux exposes storage devices as block device files under `/dev/`. Block devices support random
access by fixed-size blocks (typically 512 bytes or 4096 bytes), unlike character devices which are
accessed as a stream of bytes.

**Definition.** A block device is a storage device that supports reading and writing data in
fixed-size blocks, addressed by a linear block number. The kernel caches block device I/O in the
page cache.

Naming conventions:

| Device Type   | Path Pattern   | Example        | Notes                               |
| ------------- | -------------- | -------------- | ----------------------------------- |
| SCSI/SATA     | `/dev/sdX`     | `/dev/sda`     | Letters assigned in detection order |
| NVMe          | `/dev/nvmeXnY` | `/dev/nvme0n1` | X = controller, Y = namespace       |
| Virtio (VM)   | `/dev/vdX`     | `/dev/vda`     | Paravirtualized disks               |
| MMC/eMMC      | `/dev/mmcblkX` | `/dev/mmcblk0` | Embedded devices                    |
| Loop          | `/dev/loopX`   | `/dev/loop0`   | Loopback-mounted files              |
| Device Mapper | `/dev/dm-X`    | `/dev/dm-0`    | LVM, crypt, multipath               |
| MD RAID       | `/dev/mdX`     | `/dev/md0`     | Software RAID arrays                |

Partitions are numbered after the device name:

```text
/dev/sda      # entire disk
/dev/sda1     # first partition
/dev/sda15    # 15th partition (GPT allows many)
/dev/nvme0n1p1 # first partition on first namespace of NVMe controller 0
/dev/nvme0n1p2 # second partition
```

### Partition Tables

**Definition.** A partition table is a data structure stored at the beginning of a disk that
describes the layout of partitions — their starting sectors, sizes, types, and status flags.

#### MBR (Master Boot Record)

MBR uses a 512-byte boot sector at LBA 0 containing a 446-byte bootstrap code area, a 64-byte
partition table (four 16-byte entries), and a 2-byte signature (`0x55AA`).

| Property          | MBR                                         |
| ----------------- | ------------------------------------------- |
| Max disk size     | 2 TiB (32-bit sector count)                 |
| Max partitions    | 4 primary, or 3 + 1 extended (with logical) |
| Sector addressing | 32-bit LBA                                  |
| Boot method       | Legacy BIOS only                            |
| Partition ID      | 1-byte type code                            |

MBR is obsolete. Use it only when you need legacy BIOS boot on hardware that lacks UEFI.

#### GPT (GUID Partition Table)

GPT is part of the UEFI specification. It stores partition entries in a linked list structure with a
protective MBR at LBA 0 for backward compatibility.

| Property          | GPT                                   |
| ----------------- | ------------------------------------- |
| Max disk size     | 8 ZiB (2^64 bytes)                    |
| Max partitions    | 128 by default (configurable)         |
| Sector addressing | 64-bit LBA                            |
| Boot method       | UEFI (with protective MBR for compat) |
| Partition ID      | 128-bit GUID type + 128-bit GUID name |
| Redundancy        | Backup partition table at end of disk |

```text
GPT disk layout:
  LBA 0:           Protective MBR (512 bytes)
  LBA 1:           GPT header (92 bytes)
  LBA 2-33:        Partition entries (128 entries x 128 bytes each)
  LBA 34+:         First usable sector (partition data starts here)
  Last LBA - 33:   Backup partition entries
  Last LBA - 1:    Backup GPT header
```

:::info

Always use GPT unless you have a specific reason not to. The 2 TiB MBR limit is trivially hit with
modern disks, and GPT's backup table provides redundancy against corruption at the start of the
disk.

:::

### Sector Size

| Sector Size | Common On              | Notes                                                |
| ----------- | ---------------------- | ---------------------------------------------------- |
| 512 bytes   | Older HDDs, SATA SSD   | Traditional physical sector size                     |
| 4096 bytes  | Modern HDDs, many SSDs | 4K native (4Kn) or 512e (emulated) for compatibility |

512e drives present 512-byte logical sectors to the OS but use 4096-byte physical sectors
internally. Misaligned writes on 512e drives cause read-modify-write cycles, degrading performance.
Modern partitioning tools handle alignment automatically.

```bash
# Check logical and physical sector size
cat /sys/block/sda/queue/logical_block_size
cat /sys/block/sda/queue/physical_block_size

# lsblk shows sector sizes
lsblk -o NAME,LOG-SEC,PHY-SEC /dev/sda
```

### Partition Types

#### MBR Partition Types

| Type     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| Primary  | One of the four entries in the MBR table                            |
| Extended | A primary partition that acts as a container for logical partitions |
| Logical  | Created inside an extended partition using an EBR chain             |

#### GPT Partition Types (GUIDs)

| GUID                                   | Type                 |
| -------------------------------------- | -------------------- |
| `C12A7328-F81F-11D2-BA4B-00A0C93EC93B` | EFI System Partition |
| `0657FD6D-A4AB-43C4-84E5-0933C84B4F4F` | Linux filesystem     |
| `44479540-F297-41B2-9AF7-D131D5F0458A` | Linux root (x86-64)  |
| `933AC7E1-2EB4-4F13-B844-0E14E2AEF915` | Linux swap           |
| `E3C9E316-0B5C-4DB8-817D-F92DF00215AE` | Microsoft reserved   |
| `EBD0A0A2-B9E5-4433-87C0-68B6B72699C7` | Windows data         |

```bash
# View partition type GUIDs
sgdisk -i 1 /dev/sda

# List all known partition types
sgdisk -L
```

### UUID vs Device Names

Device names are assigned in kernel detection order and are **not stable** across reboots. A SATA
disk that was `/dev/sda` today may become `/dev/sdb` after a hardware change. Never use device names
in `/etc/fstab` for persistent mounts.

**Definition.** A UUID (Universally Unique Identifier) is a 128-bit number assigned to a filesystem
at creation time. It is globally unique and does not change when the disk is moved between systems.

```bash
# View UUIDs for all block devices
blkid

# View UUID for a specific device
blkid /dev/sda1

# Use UUID in fstab (preferred)
UUID=abc12345-6789-def0-1234-567890abcdef  /mnt/data  ext4  defaults  0  2

# Use PARTUUID for partition-level identification (works even without filesystem)
PARTUUID=12345678-1234-1234-1234-123456789abc  /mnt/data  ext4  defaults  0  2
```

:::info

Prefer `PARTUUID` over `UUID` for partition identification. PARTUUID is stored in the partition
table itself (not the filesystem), so it survives filesystem recreation and works on raw partitions.
Modern distributions use PARTUUID in their default fstab entries.

:::

## Partitioning Tools

### fdisk

`fdisk` is an interactive MBR/GPT partitioning tool. It is the most commonly used tool for quick
partitioning tasks.

```bash
# Start interactive partitioning
fdisk /dev/sdb

# Common fdisk commands inside the interactive prompt:
#   n   - new partition
#   d   - delete partition
#   p   - print partition table
#   t   - change partition type
#   l   - list known partition types
#   w   - write changes to disk
#   q   - quit without saving
#   x   - extra functionality (experts only)

# Create a partition non-interactively (scriptable)
echo -e "n\np\n1\n\n+100G\nw" | fdisk /dev/sdb

# List partitions (read-only, no interactive prompt)
fdisk -l /dev/sdb
```

### parted

`parted` supports both MBR and GPT and is scriptable, making it suitable for automation.

```bash
# Start interactive mode
parted /dev/sdb

# Common parted commands:
#   mklabel gpt          - create new GPT table
#   mklabel msdos        - create new MBR table
#   mkpart primary ext4 1MiB 100GiB  - create partition
#   print                - show partition table
#   rm 1                 - remove partition 1
#   resizepart 1 200GiB  - resize partition 1 to 200 GiB
#   set 1 boot on        - set boot flag
#   unit s               - switch to sector units
#   unit GiB             - switch to GiB units

# Scriptable (non-interactive) usage:
parted /dev/sdb --script mklabel gpt
parted /dev/sdb --script mkpart primary ext4 1MiB 100GiB
parted /dev/sdb --script set 1 boot on

# Align to 1 MiB boundaries (default for GPT in modern parted)
parted /dev/sdb --script align-check optimal 1
```

:::warning

`parted` does not reload the partition table automatically after scripting. Use `partprobe` or
`blockdev --rereadpt` after running parted scripts, or reboot.

:::

### sgdisk

`sgdisk` is a GPT-specific tool from the `gdisk` package. It is purely command-line driven and
excellent for scripting GPT operations.

```bash
# Create a new GPT table (destroys existing)
sgdisk -o /dev/sdb

# Create a partition
sgdisk -n 1:2048:+100G /dev/sdb    # partition 1, starting at sector 2048, 100 GiB

# Create a partition by percentage
sgdisk -n 1:0:+50% /dev/sdb        # first half of disk

# Set partition type
sgdisk -t 1:8300 /dev/sdb           # Linux filesystem (8300)
sgdisk -t 1:ef00 /dev/sdb           # EFI System Partition (ef00)
sgdisk -t 1:8200 /dev/sdb           # Linux swap (8200)

# Set partition name
sgdisk -c 1:"data" /dev/sdb

# Delete a partition
sgdisk -d 1 /dev/sdb

# Print partition table in detail
sgdisk -p /dev/sdb
sgdisk -i 1 /dev/sdb               # detailed info for partition 1

# Fix damaged GPT
sgdisk --verify /dev/sdb            # check and fix
sgdisk --backup=/root/sdb.gpt /dev/sdb   # backup table
sgdisk --load-backup=/root/sdb.gpt /dev/sdb  # restore from backup

# Wipe filesystem signatures from a disk (for clean repartitioning)
wipefs -a /dev/sdb
```

### Inspection Tools

```bash
# List block devices with tree view
lsblk
lsblk -f                  # show filesystem, label, UUID, mount point
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT,UUID  # custom columns

# Show block device attributes
blkid
blkid /dev/sda1           # info for specific partition

# Show partition table summary
parted /dev/sda print

# Reload partition table after changes (avoids reboot)
partprobe /dev/sda
blockdev --rereadpt /dev/sda

# Show disk topology (for alignment verification)
fdisk -l /dev/sda

# Show detailed block device info
lsblk --discard /dev/sda        # discard/TRIM support
lsblk --pairs /dev/sda          # key=value output
```

## Filesystem Creation

### mkfs

The `mkfs` frontend calls filesystem-specific tools. Always use the specific tool directly for more
control over options.

```bash
# ext4 — default on most Linux distributions
mkfs.ext4 /dev/sdb1
mkfs.ext4 -L data_volume /dev/sdb1           # set filesystem label
mkfs.ext4 -b 4096 /dev/sdb1                  # 4 KiB block size
mkfs.ext4 -I 256 /dev/sdb1                   # 256-byte inodes (more inodes)
mkfs.ext4 -m 1 /dev/sdb1                     # reserve 1% for root (default 5%)
mkfs.ext4 -O ^has_journal /dev/sdb1           # disable journal (for SSDs with PLP)
mkfs.ext4 -E nodiscard /dev/sdb1              # do not discard during mkfs
mkfs.ext4 -T largefile4 /dev/sdb1             # fewer inodes, optimized for large files

# XFS — default on RHEL/CentOS/Fedora
mkfs.xfs /dev/sdb1
mkfs.xfs -f /dev/sdb1                        # force (overwrite existing fs)
mkfs.xfs -L data_volume /dev/sdb1             # set label
mkfs.xfs -b size=4096 /dev/sdb1               # block size
mkfs.xfs -d agcount=16 /dev/sdb1              # allocation group count
mkfs.xfs -d su=128k,sw=1 /dev/sdb1            # stripe unit/width for RAID
mkfs.xfs -l size=512m,internal /dev/sdb1      # internal log, 512 MiB
mkfs.xfs -l logdev=/dev/sdc1 /dev/sdb1        # external log device
mkfs.xfs -m crc=1,finobt=1 /dev/sdb1          # metadata checksums, free inode btree

# Btrfs
mkfs.btrfs /dev/sdb1
mkfs.btrfs -L data_volume /dev/sdb1
mkfs.btrfs -d raid1 -m raid1 /dev/sdb1 /dev/sdc1   # RAID 1
mkfs.btrfs -f -d single /dev/sdb1                   # force single device

# FAT32 (for EFI or cross-platform)
mkfs.fat -F 32 /dev/sdb1
mkfs.fat -F 32 -n EFI /dev/sdb1              # label "EFI"

# exFAT (large removable media)
mkfs.exfat /dev/sdb1
```

### Mount Options and /etc/fstab

#### /etc/fstab Fields

```text
# <device>                                    <mount point>  <type>  <options>         <dump>  <pass>
UUID=abc12345-6789-def0-1234-567890abcdef    /mnt/data      ext4    defaults          0       2
PARTUUID=12345678-1234-1234-1234-1234567890ab /boot/efi      vfat    defaults          0       0
/mnt/iso.iso                                  /mnt/cdrom     iso9660 loop,ro          0       0
```

| Field       | Description                                                                           |
| ----------- | ------------------------------------------------------------------------------------- |
| Device      | UUID=, PARTUUID=, LABEL=, device path, or special filesystem (proc, tmpfs)            |
| Mount point | Absolute path to the mount directory                                                  |
| Type        | Filesystem type: ext4, xfs, btrfs, vfat, tmpfs, nfs, cifs, auto, etc.                 |
| Options     | Comma-separated mount options                                                         |
| Dump        | Whether `dump` includes this filesystem in backups (0 = no, 1 = yes; mostly obsolete) |
| Pass        | Order for `fsck` at boot: 0 = skip, 1 = root filesystem, 2 = all other filesystems    |

#### Common Mount Options

| Option                | Effect                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------- |
| `defaults`            | rw, suid, dev, exec, auto, nouser, async                                               |
| `noatime`             | Do not update access time (recommended for all workloads)                              |
| `nodiratime`          | Do not update directory access times                                                   |
| `relatime`            | Update atime only if mtime/ctime changed since last access (default in modern kernels) |
| `nosuid`              | Ignore SUID/SGID bits                                                                  |
| `nodev`               | Do not interpret device files                                                          |
| `noexec`              | Do not allow binary execution                                                          |
| `nofail`              | Do not fail boot if device is missing (essential for removable/external disks)         |
| `x-systemd.automount` | systemd automount on first access (reduces boot time)                                  |
| `discard`             | Enable TRIM/DISCARD (for SSDs; prefer periodic fstrim instead)                         |
| `errors=remount-ro`   | Remount read-only on error (recommended for root)                                      |
| `ro`                  | Read-only mount                                                                        |
| `sync`                | Synchronous writes (slow, used for USB drives)                                         |
| `user`                | Allow non-root users to mount                                                          |
| `x-gvfs-show`         | Show in desktop file managers                                                          |

```bash
# Mount by UUID
mount UUID=abc12345-6789-def0-1234-567890abcdef /mnt/data

# Mount with specific options
mount -o noatime,nodev,nosuid /dev/sdb1 /mnt/data

# Remount with changed options (does not unmount)
mount -o remount,noatime /mnt/data

# Bind mount (make a directory visible elsewhere)
mount --bind /var/lib/docker /mnt/docker

# Test fstab without rebooting
mount -a              # mount all entries in fstab
mount -av             # verbose, shows what it mounts
```

### fstab and systemd

systemd generates mount units from `/etc/fstab`. You can inspect generated units:

```bash
# List all mount units
systemctl list-units --type=mount

# Show the generated mount unit for a specific mount
systemctl cat mnt-data.mount

# systemd-specific fstab options
# x-systemd.requires=network-online.target   wait for network
# x-systemd.after=network-online.target      mount after network
# x-systemd.mount-timeout=10                 timeout in seconds
# x-systemd.idle-timeout=600                 automount idle timeout
```

## Filesystem Maintenance

### fsck

`fsck` is the frontend for filesystem checkers. The actual tool invoked depends on the filesystem
type (`e2fsck` for ext2/3/4, `xfs_repair` for XFS, `btrfs check` for Btrfs).

```bash
# Check filesystem type automatically
fsck /dev/sdb1

# Force check even if filesystem appears clean
fsck -f /dev/sdb1

# Interactive repair (prompt for each fix)
fsck -r /dev/sdb1

# Automatic repair (non-interactive, fixes what is safe)
fsck -a /dev/sdb1

# Show what would be fixed without making changes
fsck -n /dev/sdb1

# Check all filesystems in fstab at boot (parallel)
fsck -A -C

# Skip filesystem check on next boot
tune2fs -c 0 /dev/sda1       # ext4: set max mount count to 0 (disable)
tune2fs -i 0 /dev/sda1       # ext4: set interval to 0 (disable)
```

:::warning

Never run `fsck` on a mounted filesystem. Unmount first, or run from a live system. Running fsck on
a live mounted filesystem will cause corruption. The only exception is `/` (root), which can be
checked at boot time by setting the `pass` field in `/etc/fstab` to 1.

:::

### ext4-specific Maintenance

```bash
# View filesystem parameters
tune2fs -l /dev/sda1
dumpe2fs -h /dev/sda1           # same info, more verbose

# Change reserved blocks percentage
tune2fs -m 1 /dev/sda1           # default is 5%, reduce for large data disks

# Add a journal to ext2 (convert to ext3)
tune2fs -j /dev/sda1

# Enable/disable filesystem features
tune2fs -O dir_index /dev/sda1   # hashed b-tree directory indexing
tune2fs -O flex_bg /dev/sda1     # flexible block groups (reduces fragmentation)

# Change the volume label
tune2fs -L newlabel /dev/sda1

# Change mount count-based check interval
tune2fs -c 30 /dev/sda1          # check every 30 mounts
tune2fs -i 1m /dev/sda1          # check every month

# View filesystem statistics
dumpe2fs /dev/sda1 | head -50

# Run full filesystem check (unmounted)
e2fsck -f -y /dev/sda1           # -f = force, -y = auto-yes to all repairs
e2fsck -f -v /dev/sda1           # -v = verbose
```

### XFS-specific Maintenance

```bash
# View XFS filesystem info
xfs_info /dev/sdb1
xfs_info /mnt/data                # works on a mounted filesystem

# Grow XFS filesystem (online, cannot shrink)
xfs_growfs /mnt/data
xfs_growfs -D 104857600 /mnt/data  # grow to specific size in blocks

# Repair XFS (must be unmounted or read-only)
xfs_repair /dev/sdb1
xfs_repair -n /dev/sdb1            # dry run (no changes)
xfs_repair -v /dev/sdb1            # verbose

# Check XFS health while mounted
xfs_db -r -c "check" /dev/sdb1    # read-only check

# Freeze/unfreeze for consistent backups
xfs_freeze -f /mnt/data           # freeze
xfs_freeze -u /mnt/data           # unfreeze

# Defragment a single file
xfs_fsr /mnt/data/large_file.bin

# Defragment entire filesystem
xfs_fsr -v /mnt/data
```

### Journaling Modes

| Mode        | What is Journaled                                              | Performance | Data Safety |
| ----------- | -------------------------------------------------------------- | ----------- | ----------- |
| `ordered`   | Metadata only; data written to disk before metadata committed  | Good        | High        |
| `writeback` | Metadata only; no ordering guarantee between data and metadata | Best        | Medium      |
| `journal`   | Both data and metadata journaled                               | Slowest     | Highest     |

```bash
# Set journal mode at mount time
mount -o data=journal /dev/sda1 /mnt/data
mount -o data=writeback /dev/sda1 /mnt/data

# Set default journal mode persistently
tune2fs -o journal_data /dev/sda1      # journal mode
tune2fs -o journal_data_ordered /dev/sda1  # ordered (default)
tune2fs -o journal_data_writeback /dev/sda1 # writeback
```

:::info

`ordered` mode is the default and the correct choice for virtually all workloads. `journal` mode is
used for databases requiring absolute data integrity guarantees. `writeback` mode is marginally
faster but can leave stale data in files after a crash (zero-length files can appear to have old
content).

:::

## LVM Architecture

**Definition.** The Logical Volume Manager (LVM) is a storage management framework that abstracts
physical storage into logical volumes. It provides a layer of indirection between physical disks and
filesystems, enabling flexible resizing, snapshots, and pooling of storage across multiple devices.

### The Three-Layer Model

```
Physical Disks / Partitions
        |
        v
  Physical Volumes (PV)     <-- pvcreate
        |
        v
  Volume Groups (VG)        <-- vgcreate
        |
        v
  Logical Volumes (LV)      <-- lvcreate
        |
        v
  Filesystem (ext4, XFS, ...)  <-- mkfs
```

**Physical Volume (PV):** A partition or whole disk that has been initialized for LVM use. Each PV
contains a header with LVM metadata and is divided into fixed-size Physical Extents (PEs). The
default PE size is 4 MiB.

**Volume Group (VG):** A pool of storage created from one or more PVs. The VG aggregates all PEs
from its member PVs into a single addressable space. Think of a VG as a virtual disk that can span
multiple physical disks.

**Logical Volume (LV):** A virtual block device carved from a VG. An LV is made up of Logical
Extents (LEs) that map to PEs on the underlying PVs. Filesystems are created on LVs, not on raw
partitions.

**Physical Extent (PE):** The smallest unit of allocation in LVM. Default size is 4 MiB. A PE on a
PV maps 1:1 to a Logical Extent (LE) on an LV. When you extend an LV, you allocate additional PEs
from the VG.

### LVM Metadata

LVM metadata is stored at the start of each PV (in the first few MiB). It describes:

- The VG configuration (name, UUID, extent size, attribute flags)
- The PV layout (which PEs are allocated, which are free)
- The LV definitions (name, UUID, which PEs belong to each LE)
- Snapshot relationships

Metadata is stored in circular text format at two locations on each PV for redundancy. If one copy
is corrupted, LVM can recover from the backup copy.

```bash
# View raw LVM metadata from a PV
pvdisplay --maps /dev/sdb1          # show PE mappings
vgcfgrestore --list vg_name         # list available metadata backups

# Metadata backups are stored here by default:
ls /etc/lvm/archive/                # historical backups (vg_name_*.vg)
ls /etc/lvm/backup/                 # latest backup (vg_name.vg)
```

### How LVM Layers on Partitions

A typical production layout:

```text
/dev/sdb (1 TiB disk)
  /dev/sdb1  (100 GiB partition, type 8e00 "Linux LVM") --> pvcreate --> PV
  /dev/sdc (1 TiB disk)
  /dev/sdc1  (100 GiB partition, type 8e00 "Linux LVM") --> pvcreate --> PV

  VG "vg_data" = PV(sdb1) + PV(sdc1) = 200 GiB total

  LV "lv_mysql" = 80 GiB from vg_data
  LV "lv_logs"  = 40 GiB from vg_data
  LV "lv_backup" = 60 GiB from vg_data (with 20 GiB free in VG)
```

:::info

You can use whole disks as PVs (`pvcreate /dev/sdb`) instead of partitions, but using partitions
provides a layer of protection — if LVM metadata is corrupted, partition boundaries remain visible
to non-LVM tools for recovery.

:::

## LVM Operations

### Physical Volume Management

```bash
# Initialize a partition or disk as a PV
pvcreate /dev/sdb1
pvcreate /dev/sdc                   # whole disk (wipes partition table)

# Wipe existing signatures before pvcreate
wipefs -a /dev/sdb1
pvcreate -ff /dev/sdb1              # -ff = force (double confirmation required)

# Display PV information
pvdisplay /dev/sdb1
pvs                                  # concise summary
pvs -o+pv_name,vg_name,pe_count,free_pe  # custom columns

# Remove a PV (must be freed from VG first)
pvremove /dev/sdb1
pvremove -ff -y /dev/sdb1           # force, no prompts

# Resize a PV after growing the underlying partition
pvresize /dev/sdb1                  # auto-detect new size
pvresize --setphysicalvolumesize 200G /dev/sdb1  # set specific size
```

### Volume Group Management

```bash
# Create a VG from one or more PVs
vgcreate vg_data /dev/sdb1
vgcreate vg_data /dev/sdb1 /dev/sdc1 /dev/sdd1

# Set PE size at creation (4 MiB default, can be 1 MiB to 64 GiB)
vgcreate -s 8M vg_data /dev/sdb1    # 8 MiB PE size

# Add a PV to an existing VG (extend the VG)
vgextend vg_data /dev/sdc1

# Remove a PV from a VG (must move data off it first)
pvmove /dev/sdc1                    # migrate all data to other PVs
vgreduce vg_data /dev/sdc1          # then remove the PV

# Display VG information
vgdisplay vg_data
vgs                                  # concise summary
vgs -o+vg_name,vg_size,vg_free,pv_count  # custom columns

# Activate/deactivate a VG
vgchange -a y vg_data               # activate (default)
vgchange -a n vg_data               # deactivate (LVs become unavailable)

# Rename a VG (must be inactive)
vgrename old_name new_name

# Split a VG (move some PVs to a new VG)
vgsplit vg_data vg_backup /dev/sdd1

# Merge two VGs
vgmerge vg_data vg_backup           # merge vg_backup into vg_data
```

### Logical Volume Management

```bash
# Create an LV
lvcreate -L 50G -n lv_mysql vg_data           # 50 GiB LV
lvcreate -l 100%FREE -n lv_logs vg_data       # use all free space
lvcreate -l 50%FREE -n lv_temp vg_data        # half of free space
lvcreate -L 100G -n lv_web -i 2 -I 64 vg_data # striped across 2 PVs, 64 KiB stripe

# Display LV information
lvdisplay /dev/vg_data/lv_mysql
lvs                                           # concise summary
lvs -o+lv_name,vg_name,lv_size,lv_attr       # custom columns

# Change LV name
lvrename vg_data lv_mysql lv_production

# Remove an LV
lvremove /dev/vg_data/lv_temp
lvremove -f /dev/vg_data/lv_temp             # force (no confirmation)

# Activate/deactivate an LV
lvchange -a y /dev/vg_data/lv_mysql
lvchange -a n /dev/vg_data/lv_mysql

# Set LV to active on boot
lvchange --activationmode partial /dev/vg_data/lv_mysql  # activate even if PVs missing

# Change LV attributes
lvchange -ay -K /dev/vg_data/lv_mysql  # ignore monitoring (for broken VG)
```

### LVM Command Summary

| Task             | PV Command         | VG Command         | LV Command         |
| ---------------- | ------------------ | ------------------ | ------------------ |
| Create           | `pvcreate`         | `vgcreate`         | `lvcreate`         |
| Display          | `pvs`, `pvdisplay` | `vgs`, `vgdisplay` | `lvs`, `lvdisplay` |
| Extend/Grow      | `pvresize`         | `vgextend`         | `lvextend`         |
| Reduce/Shrink    | `pvresize`         | `vgreduce`         | `lvreduce`         |
| Remove           | `pvremove`         | `vgremove`         | `lvremove`         |
| Rename           | N/A                | `vgrename`         | `lvrename`         |
| Move data        | N/A                | `pvmove`           | N/A                |
| Backup metadata  | N/A                | `vgcfgbackup`      | N/A                |
| Restore metadata | N/A                | `vgcfgrestore`     | N/A                |

## Resizing

### Extending Filesystems (Online)

Extending is safe to do online (while mounted). The general process is: extend the underlying
storage, then extend the LV, then extend the filesystem. Order matters — the filesystem cannot be
larger than the LV.

```bash
# Scenario: extend lv_mysql from 50 GiB to 100 GiB

# Step 1: Extend the LV
lvextend -L +50G /dev/vg_data/lv_mysql        # add 50 GiB
lvextend -L 100G /dev/vg_data/lv_mysql        # set to 100 GiB
lvextend -l +100%FREE /dev/vg_data/lv_mysql   # use all free space in VG

# Step 2: Resize the filesystem
# For ext4:
resize2fs /dev/vg_data/lv_mysql                # auto-detect and fill LV
resize2fs /dev/vg_data/lv_mysql 100G           # specific size

# For XFS:
xfs_growfs /mnt/mysql                          # specify mount point, not device

# Shortcut: lvextend with --resizefs does both steps
lvextend --resizefs -L +50G /dev/vg_data/lv_mysql    # ext4 only
lvextend -r -L +50G /dev/vg_data/lv_mysql             # -r = --resizefs
```

:::warning

For XFS, `xfs_growfs` takes the **mount point** as the argument, not the device path. This is a
common source of errors. The `lvextend -r` shortcut does not work with XFS.

:::

### Shrinking Filesystems (Offline)

Shrinking is **not supported online** for most filesystems. The filesystem must be unmounted first.
The process is: shrink the filesystem, then shrink the LV. Order is reversed from extending — the
filesystem must be smaller than the target LV size.

```bash
# Scenario: shrink lv_logs from 100 GiB to 50 GiB

# Step 1: Unmount
umount /mnt/logs

# Step 2: Run filesystem check (mandatory before shrink)
e2fsck -f /dev/vg_data/lv_logs

# Step 3: Shrink the filesystem
resize2fs /dev/vg_data/lv_logs 50G             # target size

# Step 4: Shrink the LV
lvreduce -L 50G /dev/vg_data/lv_logs
lvreduce --resizefs -L 50G /dev/vg_data/lv_logs  # does both steps (checks first)

# Step 5: Mount
mount /dev/vg_data/lv_logs /mnt/logs
```

:::warning

Shrinking is destructive if done incorrectly. The filesystem must be checked with `e2fsck -f` before
shrinking. XFS and Btrfs **cannot** be shrunk at all. Always have a backup before shrinking any
filesystem.

:::

### Adding a PV to a VG (Adding Storage to an Existing Pool)

```bash
# New disk /dev/sdc has been added to the system

# Step 1: Partition the new disk
parted /dev/sdc --script mklabel gpt
parted /dev/sdc --script mkpart primary 1MiB 100%

# Step 2: Create a PV
pvcreate /dev/sdc1

# Step 3: Add to VG
vgextend vg_data /dev/sdc1

# Step 4: Extend LV and filesystem
lvextend -r -l +100%FREE /dev/vg_data/lv_mysql
```

## LVM Snapshots

### Creating Snapshots

**Definition.** An LVM snapshot is a point-in-time copy of a logical volume. It uses a copy-on-write
(CoW) mechanism: when the original LV is modified, the original data blocks are copied to the
snapshot before the modification is written.

```bash
# Create a snapshot (must specify size for CoW storage)
lvcreate -L 20G -s -n lv_mysql_snap /dev/vg_data/lv_mysql
# -s = snapshot, -L 20G = CoW space

# Create a snapshot using all free space
lvcreate -l 100%FREE -s -n lv_mysql_snap /dev/vg_data/lv_mysql

# Create a snapshot with a specific size and tag
lvcreate -L 50G -s -n backup_2026-04-07 --addtag daily /dev/vg_data/lv_mysql

# List snapshots
lvs -a -o+origin,snap_percent

# Mount a snapshot (read-only by default)
mkdir -p /mnt/snap
mount -o ro /dev/vg_data/lv_mysql_snap /mnt/snap
```

### Snapshot Space and CoW

The snapshot LV stores **only the differences** between the snapshot and the current state of the
origin. When data is written to the origin LV, the pre-write blocks are copied to the snapshot's CoW
area. When data is written to the snapshot itself, new blocks are allocated in the snapshot's CoW
area.

The CoW space is consumed by:

- Writes to the origin LV (copies old blocks to snapshot)
- Writes to the snapshot LV (allocates new blocks)

```bash
# Check snapshot usage
lvs -o name,lv_attr,snap_percent,origin

# If snap_percent reaches 100%, the snapshot is invalidated
# The snapshot is dropped automatically, and the CoW LV becomes a regular LV
```

:::warning

If the CoW area fills up completely, the snapshot is **dropped** and you lose the ability to roll
back. Monitor `snap_percent` closely. Overestimate the CoW size — unused CoW space is wasted but
safe; CoW space that is too small is catastrophic. A good rule of thumb is 10-20% of the origin LV
size for low-write volumes, or up to 50% for high-write volumes.

:::

### Using Snapshots for Backups

```bash
# Step 1: Create the snapshot
lvcreate -L 20G -s -n mysql_backup /dev/vg_data/lv_mysql

# Step 2: Mount the snapshot
mkdir -p /mnt/mysql_backup
mount -o ro /dev/vg_data/mysql_backup /mnt/mysql_backup

# Step 3: Run the backup (snapshot provides a consistent view)
tar czf /backup/mysql_$(date +%F).tar.gz -C /mnt/mysql_backup .

# Step 4: Unmount and remove the snapshot
umount /mnt/mysql_backup
lvremove -f /dev/vg_data/mysql_backup
```

### Merging Snapshots (Rollback)

```bash
# Merge a snapshot back into the origin (restores the origin to snapshot state)
lvconvert --merge /dev/vg_data/lv_mysql_snap

# The merge happens on next activation:
# - If origin is mounted: merge on next reboot or umount+remount
# - If origin is inactive: merge immediately

# Check merge status
lvs -a -o+origin,merge_failed
```

:::warning

Merging a snapshot is irreversible. The origin LV is restored to the state at the time the snapshot
was created. All changes since the snapshot are lost. The snapshot itself is deleted after a
successful merge.

:::

### Snapshot Limitations

- Snapshots of the **same origin** share CoW resources — one filling up affects all
- Snapshot performance degrades as CoW area fills (more indirection for lookups)
- Snapshots cannot be resized (CoW space is fixed at creation)
- Snapshots cannot be snapshotted (no recursive snapshots)
- CoW snapshots are slow for write-heavy workloads (every write to origin copies old data)
- Large numbers of snapshots on the same origin cause significant I/O overhead

## LVM RAID

LVM can create RAID volumes directly using `lvconvert`, eliminating the need for a separate mdadm
layer. This is implemented via the device-mapper RAID target (dm-raid).

### Creating LVM RAID Volumes

```bash
# RAID 1 (mirror)
lvcreate --type raid1 -m 1 -L 50G -n lv_raid1 vg_data
# -m 1 = 1 mirror copy (2 total copies)
# Requires 2 PVs minimum

lvcreate --type raid1 -m 1 -L 50G -n lv_raid1 vg_data /dev/sdb1 /dev/sdc1
# Explicitly specify which PVs to use

# RAID 5
lvcreate --type raid5 -i 3 -L 100G -n lv_raid5 vg_data
# -i 3 = 3 data disks (total 4 disks with 1 parity)
# Requires minimum 3 PVs

# RAID 6
lvcreate --type raid6 -i 3 -L 200G -n lv_raid6 vg_data
# -i 3 = 3 data disks (total 5 disks with 2 parity)
# Requires minimum 4 PVs

# RAID 10
lvcreate --type raid10 -i 2 -m 1 -L 100G -n lv_raid10 vg_data
# -i 2 = 2 stripes, -m 1 = 1 mirror per stripe
# Requires minimum 4 PVs
```

### LVM RAID vs mdadm

| Aspect      | LVM RAID                      | mdadm                                        |
| ----------- | ----------------------------- | -------------------------------------------- |
| Management  | Integrated with LVM commands  | Separate toolchain                           |
| Resizing    | Native LVM resize support     | Requires LVM on top or separate fs resize    |
| Snapshots   | Native LVM snapshot support   | No native snapshots                          |
| Scrubbing   | `lvchange --syncaction`       | `echo check > /sys/block/mdX/md/sync_action` |
| Recovery    | Automatic via dm-raid         | Automatic via md                             |
| Flexibility | Can mix RAID and non-RAID LVs | Array is a fixed block device                |
| Maturity    | Less widely used              | Very mature, battle-tested                   |
| Metadata    | LVM metadata                  | md superblock (1.0, 1.1, 1.2, 0.9)           |

### LVM RAID Maintenance

```bash
# Check RAID status
lvs -a -o name,attr,devices

# View detailed RAID information
lvdisplay -v /dev/vg_data/lv_raid1

# Scrub (verify data consistency)
lvchange --syncaction check /dev/vg_data/lv_raid1
lvchange --syncaction repair /dev/vg_data/lv_raid1

# View sync/check progress
cat /proc/mdstat
lvs -o name,copy_percent

# Replace a failed disk
# Step 1: Remove the failed PV from VG
vgextend vg_data /dev/sde1              # add replacement disk
pvmove /dev/sdb1 /dev/sde1              # move data off failed disk
vgreduce --removemissing vg_data         # remove missing PVs
# or for RAID:
lvconvert --repair vg_data/lv_raid1

# Convert linear LV to RAID 1
lvconvert --type raid1 -m 1 /dev/vg_data/lv_mysql
```

## LVM Thin Provisioning

### Thin Pools and Thin Volumes

**Definition.** Thin provisioning allows you to create logical volumes that are larger than the
available physical storage. Space is allocated on demand rather than up front. A thin pool is a
special LV that acts as a storage pool, from which thin volumes are carved.

```bash
# Step 1: Create a thin pool LV (the backing store)
lvcreate -L 200G -T vg_data/thinpool
# -T = thin pool

# Step 2: Create thin volumes from the pool
lvcreate -T vg_data/thinpool -V 50G -n thin_mysql
lvcreate -T vg_data/thinpool -V 100G -n thin_web
lvcreate -T vg_data/thinpool -V 500G -n thin_backup
# Total virtual size = 650G, but physical pool is only 200G

# Create thin pool and first thin volume in one command
lvcreate -L 200G -T vg_data/thinpool -V 50G -n thin_mysql

# View thin pool status
lvs -a -o+seg_monitor,thin_count,data_percent,metadata_percent

# List thin volumes
lvs -o name,vg_name,lv_size,pool_lv
```

### Thin Pool Metadata

Every thin pool has a metadata LV that tracks which blocks are allocated to which thin volumes. This
metadata LV is created automatically (default size is calculated based on pool size) but can be
specified manually.

```bash
# Create thin pool with explicit metadata LV
lvcreate -L 5G -n thinpool_meta vg_data
lvcreate -L 200G -T vg_data/thinpool -T vg_data/thinpool_meta
# Or in one step:
lvcreate -L 200G --poolmetadatasize 5G -T vg_data/thinpool

# Check metadata usage
lvs -a -o name,attr,metadata_percent,seg_monitor

# Extend metadata area if running low
lvextend -L +2G /dev/vg_data/thinpool_tmeta
# or:
lvextend --poolmetadatasize +2G vg_data/thinpool
```

### Overprovisioning Risks

Thin provisioning is inherently dangerous because the sum of thin volume sizes can exceed the
physical pool size. When the pool fills up, writes to thin volumes **fail silently** (the filesystem
on the thin volume sees I/O errors).

```bash
# Monitor thin pool usage
lvs -o name,data_percent,metadata_percent

# Set up automatic pool extension with dmeventd
# Install the lvm2 monitoring service:
systemctl enable --now lvm2-monitor

# dmeventd can auto-extend the thin pool when it reaches a threshold
# Configure in /etc/lvm/lvm.conf:
# thin_pool_autoextend_threshold = 80
# thin_pool_autoextend_percent = 20
# This means: when pool is 80% full, extend by 20% of current size

# Manual pool extension
lvextend -L +50G /dev/vg_data/thinpool
```

:::warning

If a thin pool runs out of space, the consequences are severe: filesystems on thin volumes may
corrupt, and recovery is difficult. Always monitor thin pool usage with alerting. Set
`thin_pool_autoextend_threshold` in `/etc/lvm/lvm.conf` to 70-80% as a safety net, but do not rely
on it as your only protection.

:::

## mdadm Software RAID

### RAID Levels

| Level | Min Disks | Redundancy | Read Perf | Write Perf | Capacity  | Use Case                      |
| ----- | --------- | ---------- | --------- | ---------- | --------- | ----------------------------- |
| 0     | 2         | None       | Highest   | Highest    | n disks   | Temporary data, caches        |
| 1     | 2         | 1 disk     | Good      | Moderate   | 1 disk    | OS, databases, critical data  |
| 5     | 3         | 1 disk     | Good      | Moderate   | n-1 disks | File servers, general storage |
| 6     | 4         | 2 disks    | Good      | Moderate   | n-2 disks | Large arrays, critical data   |
| 10    | 4         | 1 disk     | Highest   | Good       | n/2 disks | Databases, high I/O workloads |

### Creating RAID Arrays

```bash
# RAID 0 (striping)
mdadm --create /dev/md0 --level=0 --raid-devices=2 /dev/sdb1 /dev/sdc1

# RAID 1 (mirroring)
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1

# RAID 5 (single parity)
mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1

# RAID 6 (dual parity)
mdadm --create /dev/md0 --level=6 --raid-devices=4 /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1

# RAID 10 (mirrored stripes)
mdadm --create /dev/md0 --level=10 --raid-devices=4 /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1

# With a write-intent bitmap (improves resync speed after unclean shutdown)
mdadm --create /dev/md0 --level=1 --raid-devices=2 \
    --bitmap=internal /dev/sdb1 /dev/sdc1

# With a specific chunk size (default 512 KiB)
mdadm --create /dev/md0 --level=5 --raid-devices=3 \
    --chunk=64 /dev/sdb1 /dev/sdc1 /dev/sdd1

# With a spare device
mdadm --create /dev/md0 --level=1 --raid-devices=2 \
    --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sde1
```

### mdadm Management

```bash
# View array status
cat /proc/mdstat
mdadm --detail /dev/md0
mdadm --examine /dev/sdb1              # show superblock on a component

# View array information (human-readable)
mdadm --query --detail /dev/md0

# Save array configuration (CRITICAL — without this, array won't assemble on boot)
mdadm --detail --scan >> /etc/mdadm/mdadm.conf
# or:
mdadm --detail --scan | tee -a /etc/mdadm/mdadm.conf

# Generate initial mdadm.conf
mdadm --examine --scan >> /etc/mdadm/mdadm.conf

# Update initramfs after config change
update-initramfs -u                    # Debian/Ubuntu
dracut --force                         # RHEL/Fedora

# Stop an array
mdadm --stop /dev/md0

# Assemble a previously created array
mdadm --assemble /dev/md0 /dev/sdb1 /dev/sdc1
mdadm --assemble --scan                # assemble all arrays defined in mdadm.conf

# Mark a disk as failed
mdadm --fail /dev/md0 /dev/sdb1

# Remove a failed disk from the array
mdadm --remove /dev/md0 /dev/sdb1

# Add a replacement disk
mdadm --add /dev/md0 /dev/sde1         # array automatically starts resync

# Grow an array (add a disk to RAID 5)
mdadm --grow /dev/md0 --raid-devices=4     # add 4th disk
mdadm --grow /dev/md0 --level=6            # convert RAID 5 to RAID 6
```

### Monitoring and Recovery

```bash
# Check resync progress
cat /proc/mdstat
watch cat /proc/mdstat

# Check array state
mdadm --detail /dev/md0 | grep "State"

# Check individual disk states
mdadm --examine /dev/sdb1 | grep "State"

# Scrub (data consistency check)
echo check > /sys/block/md0/md/sync_action
# View progress:
cat /proc/mdstat
# View results:
cat /sys/block/md0/md/mismatch_cnt    # 0 = no mismatches

# Repair after scrub finds mismatches
echo repair > /sys/block/md0/md/sync_action

# Monitor with mdadm daemon
mdadm --monitor --scan --daemonise --mail=root@localhost
# Add to mdadm.conf:
# PROGRAM /usr/share/mdadm/check-array
# MAILADDR root@localhost
```

### Superblock Versions

| Version | Location         | Notes                                                |
| ------- | ---------------- | ---------------------------------------------------- |
| 0.9     | End of device    | Legacy, 64 KiB, no bitmap support                    |
| 1.0     | End of device    | Modern default for boot arrays, compatible with GRUB |
| 1.1     | Start of device  | Near beginning, 4 KiB offset                         |
| 1.2     | 4 KiB from start | Recommended for non-boot arrays, compatible with LVM |

```bash
# Create with specific superblock version
mdadm --create /dev/md0 --level=1 --raid-devices=2 \
    --metadata=1.2 /dev/sdb1 /dev/sdc1
```

:::info

Use superblock version 1.0 for `/boot` (needed by GRUB) and 1.2 for all other arrays. Version 1.2
places metadata at the 4 KiB offset, avoiding conflicts with partition tables and making it easy to
use whole disks as array members.

:::

## Swap Management

### Swap Partitions

```bash
# Create a swap partition (type 8200 in GPT, type 82 in MBR)
# Then format it:
mkswap /dev/sdb1
mkswap -L swap_volume /dev/sdb1          # set label
mkswap -U abc12345 /dev/sdb1             # set UUID

# Enable swap
swapon /dev/sdb1
swapon /dev/sdb1 -p 10                   # priority -32767 to 32767 (higher = preferred)

# Enable all swap defined in /etc/fstab
swapon -a

# Disable swap
swapoff /dev/sdb1
swapoff -a                               # disable all swap

# View swap usage
swapon --show
cat /proc/swaps
free -h
```

### Swap Files

Swap files are often preferred over swap partitions because they are easier to resize and do not
require a dedicated partition.

```bash
# Create a 4 GiB swap file
fallocate -l 4G /swapfile
# or:
dd if=/dev/zero of=/swapfile bs=1M count=4096

# Set correct permissions (swap files must be root-only)
chmod 600 /swapfile

# Format as swap
mkswap /swapfile

# Enable
swapon /swapfile

# Persistent entry in /etc/fstab:
# /swapfile  none  swap  sw  0  0

# Verify
swapon --show
```

:::warning

On Btrfs, swap files require specific handling. The swap file must reside on a non-CoW subvolume,
and the file must not be copy-on-write. Use `chattr +C` on the containing directory before creating
the swap file, or place it on a dedicated non-CoW subvolume. On some Btrfs configurations, swap
files may not work at all — use a swap partition or swap file on a loop device instead.

:::

### Swappiness

The `vm.swappiness` kernel parameter controls how aggressively the kernel swaps anonymous memory
pages (process data) versus dropping filesystem cache pages.

```bash
# View current swappiness
cat /proc/sys/vm/swappiness
# Default is 60

# Set temporarily
sysctl vm.swappiness=10

# Set permanently
echo "vm.swappiness=10" >> /etc/sysctl.d/99-swappiness.conf
sysctl --system

# Guidelines:
#   0   : Avoid swapping as much as possible (only swap to avoid OOM)
#   1-10: Minimal swapping (recommended for servers with sufficient RAM)
#   60  : Default (aggressive, balances cache and swap)
#   100 : Very aggressive swapping
```

### zram

zram creates compressed RAM-based block devices that act as swap. Data written to zram is compressed
in memory, effectively giving you more swap space without disk I/O.

```bash
# Load zram module
modprobe zram num_devices=1

# Create a compressed block device (4 GiB, lz4 compression)
zramctl --find --size 4G --algorithm lz4
# Output: /dev/zram0

# Format and enable as swap
mkswap /dev/zram0
swapon -p 100 /dev/zram0                 # high priority (use before disk swap)

# View zram device info
zramctl
# NAME  ALGORITHM DISKSIZE DATA COMPR TOTAL STREAMS MOUNTPOINT
# zram0 lz4            4 GiB   ...  ...

# Set up zram with systemd-zram-setup (systemd 255+)
# /etc/systemd/zram-generator.conf:
# [zram0]
# zram-size = min(ram, 8192)
# compression-algorithm = zstd
# swap-priority = 100
```

:::info

zram is most useful on systems with limited RAM (embedded devices, VMs with small allocations). On
systems with ample RAM, zram adds CPU overhead for compression/decompression with little benefit.
Use disk swap (or no swap) on systems with 16+ GiB of RAM.

:::

## Disk Monitoring

### iostat

`iostat` (from `sysstat` package) reports CPU and I/O statistics.

```bash
# Basic I/O stats (updated every 2 seconds, 5 reports)
iostat 2 5

# Extended device stats
iostat -x 2 5

# Human-readable output
iostat -h 2 5

# Specific device
iostat -x /dev/sda 2 5

# Key columns in -x output:
#   %util    - percentage of time the device was busy
#   await    - average I/O time (ms) including queue time
#   r_await  - average read wait time (ms)
#   w_await  - average write wait time (ms)
#   svctm    - average service time (ms)
#   aqu-sz   - average queue depth
#   r/s, w/s - read/write operations per second
#   rkB/s, wkB/s - read/write throughput in KiB/s

# Persistent counter stats (since boot)
iostat -x --human
```

### iotop

`iotop` shows real-time I/O usage by process (requires root).

```bash
# Interactive I/O monitor
iotop

# Non-interactive (batch mode)
iotop -b -o -n 3
# -b = batch, -o = only show processes doing I/O, -n = 3 iterations

# Show only threads (not processes)
iotop -P

# Show accumulated I/O since iotop started
iotop -a
```

### smartctl

`smartctl` (from `smartmontools` package) reads S.M.A.R.T. (Self-Monitoring, Analysis and Reporting
Technology) data from disks.

```bash
# View overall health
smartctl -H /dev/sda

# View all S.M.A.R.T. attributes
smartctl -a /dev/sda
smartctl -x /dev/sda              # extended (includes logs)

# Run a self-test
smartctl -t short /dev/sda        # short test (1-2 minutes)
smartctl -t long /dev/sda         # long/extended test (hours)
smartctl -t conveyance /dev/sda   # vendor-specific transport test

# View test results
smartctl -l selftest /dev/sda

# Enable SMART (if disabled)
smartctl -s on /dev/sda

# View error log
smartctl -l error /dev/sda

# Automated monitoring
# /etc/smartd.conf:
# /dev/sda -a -m admin@example.com -M exec /usr/local/bin/smart-alert
smartctl -a /dev/sda | grep -E "Reallocated_Sector|Current_Pending|Offline_Uncorrectable"
```

### nvme-cli

For NVMe devices, use `nvme-cli` instead of `smartctl` for NVMe-specific health data.

```bash
# View NVMe device info
nvme id-ctrl /dev/nvme0
nvme id-ns /dev/nvme0n1

# View SMART health
nvme smart-log /dev/nvme0
nvme smart-log /dev/nvme0 | grep -E "critical|temperature|percentage_used"

# View error log
nvme error-log /dev/nvme0

# Get firmware version
nvme get-feature -f 2 /dev/nvme0    # firmware slot

# Format/secure erase (DESTRUCTIVE)
nvme format /dev/nvme0 -s 1 -l 1    # secure erase, block erase

# Flush the namespace
nvme flush /dev/nvme0n1
```

### df and du

```bash
# Filesystem usage (human-readable)
df -h
df -Th                               # with filesystem type
df -ih                               # show inodes instead of blocks

# Show specific filesystem
df -h /mnt/data

# Show only specific type
df -h -t ext4

# Directory sizes
du -sh /var/log                      # total size
du -h --max-depth=1 /var             # one level deep
du -ah /var/log | sort -rh | head    # largest files

# ncdu — interactive disk usage analyzer
ncdu /var
ncdu -x /                            # stay on same filesystem
ncdu -e /var                         # enable extended info
```

## Encryption

### LUKS1 vs LUKS2

**Definition.** LUKS (Linux Unified Key Setup) is a disk encryption standard that provides a
platform-independent on-disk format for encrypted block devices.

| Feature        | LUKS1              | LUKS2                                 |
| -------------- | ------------------ | ------------------------------------- |
| Header version | 1                  | 2                                     |
| Key slots      | 8                  | Up to 32                              |
| Anti-forensic  | No                 | Yes (memory-hard key derivation)      |
| Metadata       | Binary header only | JSON metadata area                    |
| PBKDF2         | Yes                | Yes, plus Argon2i/Argon2id (stronger) |
| Token support  | No                 | Yes (systemd, keyring, etc.)          |
| Integrity      | No                 | Optional (dm-integrity)               |
| Header backup  | `luksHeaderBackup` | `luksHeaderBackup` (larger header)    |

```bash
# Check LUKS version
cryptsetup luksDump /dev/sdb1 | grep "Version"
```

### Creating Encrypted Volumes

```bash
# Format a partition as LUKS2
cryptsetup luksFormat --type luks2 /dev/sdb1
# WARNING: This will overwrite data on /dev/sdb1 irreversibly.

# With specific parameters
cryptsetup luksFormat --type luks2 \
    --cipher aes-xts-plain64 \
    --key-size 512 \
    --hash sha512 \
    --iter-time 3000 \
    /dev/sdb1

# Open (decrypt) the volume
cryptsetup luksOpen /dev/sdb1 crypt_data
# Creates /dev/mapper/crypt_data

# Create filesystem on the decrypted device
mkfs.ext4 /dev/mapper/crypt_data

# Mount
mount /dev/mapper/crypt_data /mnt/data

# Unmount and close
umount /mnt/data
cryptsetup luksClose crypt_data
```

### Key Management

```bash
# Add a passphrase (key slot 0 is used at creation, this adds to slot 1)
cryptsetup luksAddKey /dev/sdb1

# Remove a passphrase
cryptsetup luksRemoveKey /dev/sdb1

# Change passphrase
cryptsetup luksChangeKey /dev/sdb1

# Add a keyfile
dd if=/dev/urandom of=/root/luks-key bs=4096 count=1
chmod 400 /root/luks-key
cryptsetup luksAddKey /dev/sdb1 /root/luks-key

# Open with a keyfile
cryptsetup luksOpen /dev/sdb1 crypt_data --key-file /root/luks-key

# Backup LUKS header (critical — losing header means losing data)
cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file /root/sdb1.header

# Restore LUKS header
cryptsetup luksHeaderRestore /dev/sdb1 --header-backup-file /root/sdb1.header
```

### /etc/crypttab

The `crypttab` file defines encrypted block devices to be unlocked at boot:

```text
# <name>       <device>                    <keyfile>            <options>
crypt_root     UUID=abc12345-...           /crypto_key          luks,discard
crypt_data     /dev/disk/by-id/ata-ST5000  none                 luks
crypt_swap     /dev/disk/by-uuid/def67890  /dev/urandom         swap,cipher=aes-xts-plain64,size=256
```

| Field   | Description                                                             |
| ------- | ----------------------------------------------------------------------- |
| Name    | Mapper name (appears as `/dev/mapper/<name>`)                           |
| Device  | UUID, device path, or `/dev/disk/by-id/` identifier                     |
| Keyfile | Path to key file, `none` for passphrase prompt, `/dev/urandom` for swap |
| Options | Comma-separated: `luks`, `discard`, `timeout=X`, `try-empty-password`   |

### LVM on LUKS vs LUKS on LVM

Two common architectures for combining LVM and LUKS:

```
LVM on LUKS (recommended for full-disk encryption):
  /dev/sda (partitioned)
    /dev/sda1  (boot, unencrypted)
    /dev/sda2  (LUKS encrypted partition)
      crypt_root (decrypted block device)
        vg_root (LVM volume group on the decrypted device)
          lv_root  (filesystem: /)
          lv_swap  (swap)
          lv_home  (filesystem: /home)

LUKS on LVM:
  /dev/sda (partitioned)
    /dev/sda1  (boot)
    /dev/sda2  (Linux LVM partition)
      vg_root
        lv_crypt  (LUKS encrypted LV)
          crypt_data (decrypted block device, filesystem: /data)
        lv_root   (unencrypted, filesystem: /)
```

| Aspect           | LVM on LUKS                              | LUKS on LVM                       |
| ---------------- | ---------------------------------------- | --------------------------------- |
| Security         | Better (entire VG is encrypted)          | LV-level granularity              |
| Flexibility      | Cannot have unencrypted LVs on same disk | Can mix encrypted and plain LVs   |
| Snapshots        | On encrypted data (transparent)          | Snapshots of encrypted LVs        |
| Key management   | Single key unlocks entire VG             | Per-LV keys                       |
| Boot complexity  | Higher (need initramfs with cryptsetup)  | Lower (root can be unencrypted)   |
| Typical use case | Laptops, full-disk encryption            | Servers with selective encryption |

## Troubleshooting

### Recovering from LVM Metadata Loss

```bash
# List available metadata backups
vgcfgrestore --list vg_data

# Restore from the latest backup
vgcfgrestore -f /etc/lvm/archive/vg_data_00001-xxxxxx.vg vg_data

# Restore from the backup directory
vgcfgrestore --backup vg_data

# Restore from the archive directory (specific backup)
vgcfgrestore -f /etc/lvm/archive/vg_data_00005-1234567.vg vg_data

# If no backups exist, attempt manual recovery
# Scan for LVM physical volumes
pvscan --cache
vgscan
lvscan

# Activate all volume groups
vgchange -ay

# If a PV header is corrupted:
# Attempt to restore the PV header (last resort)
pvcreate --uuid <original-uuid> --restorefile /etc/lvm/archive/<file>.vg \
    --force /dev/sdb1
```

### Repairing Partition Tables

```bash
# Verify GPT consistency
sgdisk --verify /dev/sda

# Recover GPT from backup (at end of disk)
sgdisk --load-backup=/root/sda-backup.gpt /dev/sda

# If no backup exists, rebuild GPT from disk scan
sgdisk --recompute-chs /dev/sda

# For MBR: use fdisk to check and fix
fdisk -l /dev/sda

# Use gdisk to convert MBR to GPT (non-destructive if enough space)
gdisk /dev/sda
# Command: w (write, converts MBR protective to GPT)
```

### testdisk

`testdisk` is a powerful data recovery tool for recovering lost partitions and files.

```bash
# Start testdisk
testdisk

# Common workflow:
# 1. Select the disk
# 2. Choose partition type (Intel/Mac/None)
# 3. Select [Analyse] to scan for lost partitions
# 4. Review found partitions
# 5. Select [Write] to save recovered partition table
# 6. Quit

# Recover specific files from a damaged filesystem
testdisk /dev/sdb
# Navigate to [Advanced] -> [Filesystem Utils] -> [List]
# Select files to copy to another disk
```

### gpart

`gpart` guesses lost partition types by scanning for filesystem signatures.

```bash
# Scan a disk for lost partitions
gpart /dev/sda

# Write the guessed partition table
gpart -W /dev/sda_output.txt /dev/sda
```

### Boot Failures Related to Disks

```bash
# Common scenario: kernel cannot find root filesystem
# Boot into recovery shell or live system, then:

# Check if VG is visible
vgscan
vgchange -ay

# Check if root LV exists
lvs

# Mount root and check fstab
mount /dev/vg_root/lv_root /mnt
cat /mnt/etc/fstab

# If initramfs is missing cryptsetup for LUKS:
chroot /mnt
update-initramfs -u -k all     # Debian/Ubuntu
dracut --force                 # RHEL/Fedora

# If /boot is on a separate partition, verify it is mounted correctly:
ls /mnt/boot/vmlinuz-*
```

### LVM Activation Failures

```bash
# If a VG fails to activate because a PV is missing:
vgchange -ay --partial vg_data

# List missing PVs
pvs -a -o+missing

# Remove missing PVs from VG (data on missing PV is lost)
vgreduce --removemissing --force vg_data

# If an LV is stuck in inactive state:
lvchange -ay --activationmode partial /dev/vg_data/lv_mysql
lvchange -ay -K /dev/vg_data/lv_mysql    # ignore monitoring
```

## Common Pitfalls

### Shrinking in the Wrong Direction

When shrinking an LV and filesystem, the filesystem must be shrunk **first**, then the LV. Shrinking
the LV before the filesystem truncates the filesystem and causes corruption.

```text
CORRECT ORDER for shrinking:
  1. umount
  2. e2fsck -f
  3. resize2fs /dev/vg/lv 50G        (shrink filesystem first)
  4. lvreduce -L 50G /dev/vg/lv      (then shrink LV)

WRONG ORDER (will corrupt data):
  1. lvreduce -L 50G /dev/vg/lv      (LV shrinks, filesystem still thinks it's larger)
  2. resize2fs /dev/vg/lv 50G        (too late — filesystem metadata may be beyond LV boundary)
```

:::warning

Always use `lvreduce --resizefs` which performs the filesystem check and resize automatically in the
correct order. Never run `lvreduce` without `--resizefs` unless you know exactly what you are doing.

:::

### Forgetting to Resize the Filesystem After Extending the LV

After extending an LV with `lvextend`, the filesystem does not automatically grow to fill the new
space. You must explicitly resize the filesystem.

```bash
# lvextend alone does NOT resize the filesystem:
lvextend -L +50G /dev/vg_data/lv_mysql

# You still need:
resize2fs /dev/vg_data/lv_mysql        # ext4
xfs_growfs /mnt/mysql                  # XFS

# Or use --resizefs to do both in one step:
lvextend -r -L +50G /dev/vg_data/lv_mysql
```

### Using Device Names Instead of UUIDs in /etc/fstab

Device names like `/dev/sda1` are assigned in kernel detection order and can change between reboots.
If a disk is added or removed, `/dev/sda` may become `/dev/sdb`, and the wrong filesystem will be
mounted on the wrong mount point.

```text
WRONG:
  /dev/sdb1  /mnt/data  ext4  defaults  0  2

CORRECT:
  UUID=abc12345-6789-def0-1234-567890abcdef  /mnt/data  ext4  defaults  0  2

ALSO CORRECT:
  PARTUUID=12345678-1234-1234-1234-1234567890ab  /mnt/data  ext4  defaults  0  2
```

### LVM Snapshot CoW Space Exhaustion

When a snapshot's CoW area fills to 100%, the snapshot is dropped and the data is lost. This is
especially dangerous for long-running snapshots on write-heavy volumes.

```bash
# Monitor snapshot usage
lvs -o name,snap_percent,origin

# Extend a snapshot (not directly possible — create new snapshot, copy data, remove old)
# Workaround: create a larger snapshot and migrate
lvcreate -L 40G -s -n new_snap /dev/vg_data/lv_mysql
# Copy data from old snapshot if needed, then:
lvremove -f /dev/vg_data/old_snap
```

### Not Running fsck Before Shrinking

Skipping `e2fsck -f` before `resize2fs` can result in the resize operation failing or producing a
corrupted filesystem. The resize tool relies on the filesystem being clean to correctly calculate
block mappings.

### Forgetting to Reload Partition Table

After modifying partition tables with `fdisk`, `parted`, or `sgdisk`, the kernel does not always
detect the changes automatically.

```bash
# Reload partition table
partprobe /dev/sda
# or:
blockdev --rereadpt /dev/sda

# Verify the kernel sees the new partition
lsblk /dev/sda
cat /proc/partitions
```

### Mixing LVM and Non-LVM Tools

Using `fdisk` or `parted` on a PV that is part of an active VG will corrupt LVM metadata. Always
deactivate the VG first, or use LVM commands for PV operations.

```bash
# WRONG — fdisk on an active PV
fdisk /dev/sdb1    # if sdb1 is a PV in an active VG

# CORRECT — deactivate VG first
vgchange -a n vg_data
# Now safe to use fdisk/parted on the PV
```

### Omitting `nofail` in /etc/fstab for External Drives

External or removable drives will cause the system to drop to an emergency shell on boot if they are
absent and the fstab entry does not include `nofail`.

```text
WRONG:
  UUID=abc123  /mnt/backup  ext4  defaults  0  2

CORRECT:
  UUID=abc123  /mnt/backup  ext4  defaults,nofail  0  2
```

### Not Saving mdadm Configuration

If you create an mdadm RAID array but do not save the configuration to `/etc/mdadm/mdadm.conf` and
update initramfs, the array will not be assembled on boot.

```bash
# CRITICAL: after creating or modifying an array
mdadm --detail --scan >> /etc/mdadm/mdadm.conf
update-initramfs -u          # Debian/Ubuntu
dracut --force               # RHEL/Fedora
```
