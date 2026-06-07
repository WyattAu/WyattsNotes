---
title: File Systems
tags:
  - Computing
  - University
---

### 6.1 File Concepts

A **file** is a named collection of related data on secondary storage.

**File attributes:** Name, identifier (inode number), type, location, size, protection, timestamps.

**File operations:** `create``delete``open``close``read``write``seek``truncate`.

**Access methods:**

- **Sequential access:** Read bytes in order (tapes, log-structured files).
- **Direct (random) access:** Read/write at arbitrary offsets (disks).
- **Indexed access:** Access via an index structure (B-trees, hash tables).

### 6.2 File Allocation Methods

**Contiguous allocation.** Each file occupies a contiguous set of blocks on disk. The directory
entry Stores the starting block and length.

- _Advantage:_ Excellent for sequential and direct access; minimal seek time.
- _Disadvantage:_ External fragmentation; difficulty finding space for large files; cannot grow
  dynamically.

**Linked allocation.** Each block contains a pointer to the next block. The directory entry stores
The starting block and the end block (or a count).

- _Advantage:_ No external fragmentation; file can grow dynamically.
- _Disadvantage:_ No direct access (must follow pointers); pointer overhead per block; reliability
  (a broken pointer loses the rest of the file).

**Indexed allocation.** The directory entry points to an **index block** that contains an array of
Pointers to data blocks. Supports direct access without external fragmentation.

- _Advantage:_ Direct access; no external fragmentation.
- _Disadvantage:_ Index block may be too small for large files (solved by linked index blocks or
  multi-level indexing, as in the inode scheme of §6.3).

| Method     | Sequential | Direct | External Frag. | Internal Frag. |
| ---------- | ---------- | ------ | -------------- | -------------- |
| Contiguous | Excellent  | Yes    | Yes            | Possible       |
| Linked     | Good       | No     | No             | None           |
| Indexed    | Good       | Yes    | No             | Index block    |

<details>
<summary>Worked Example 6.1 — Allocation Comparison</summary>

A file of 10 blocks is stored on a disk. The disk has blocks at positions: 0 (free), 1 (used), 2-5
(free), 6 (used), 7-9 (free), 10-15 (free), 16 (used), 17-31 (free).

_Contiguous:_ Needs 10 consecutive free blocks. Largest free run is 16-31 (16 blocks). File stored
At blocks 17--26. Access to block $k$: position $17 + k$.

_Linked:_ Blocks can be scattered. E.g., 2, 3, 4, 5, 7, 8, 9, 10, 11, 12. To read block 7, must
Traverse 7 pointers.

_Indexed:_ Index block at position 0. Index block contains pointers to data blocks 2, 3, 4, 5, 7, 8,
9, 10, 11, 12. To read block 7, access index block position 7 (one seek + one read).

</details>

### 6.3 Directory Structures

| Structure     | Description                                  |
| ------------- | -------------------------------------------- |
| Single-level  | All files in one directory                   |
| Two-level     | Separate directory per user                  |
| Tree          | Hierarchical tree with subdirectories        |
| Acyclic graph | Tree with shared subdirectories (hard links) |
| General graph | Allows cycles; requires garbage collection   |

**Path resolution.** A path name is resolved by traversing the directory tree from the root (`/`) Or
the current working directory. Each component is looked up in the current directory to find the Next
inode. Symbolic links (symlinks) store a path string that is substituted during resolution; Circular
symlinks are detected by tracking the link count.

**Hard links vs symbolic links.** A hard link creates an additional directory entry pointing to the
Same inode (increments the link count). A symbolic link is a special file containing a path string.
Hard links cannot cross file systems; symbolic links can. Deleting the original file does not affect
A symbolic link but removes one reference from a hard link (the inode is freed only when the link
Count reaches zero).

### 6.4 Inode-Based File Systems

An **inode** (index node) stores metadata about a file (but not the file name, which is in the
Directory entry):

| Field          | Description                                        |
| -------------- | -------------------------------------------------- |
| Mode           | File type and permissions                          |
| Owner          | User and group IDs                                 |
| Size           | File size in bytes                                 |
| Timestamps     | Last access, modification, inode change            |
| Link count     | Number of hard links to this inode                 |
| Block pointers | Direct, indirect, double-indirect, triple-indirect |
| Blocks         | Number of blocks allocated                         |

**Block pointer scheme (ext4 with 4 KiB blocks, 4-byte pointers):**

- **Direct blocks:** 12 pointers to data blocks (48 KiB).
- **Single indirect:** 1 pointer to a block of 1024 pointers (4 MiB).
- **Double indirect:** 1 pointer to a block of 1024 blocks of 1024 pointers (4 GiB).
- **Triple indirect:** 1 more level of indirection (4 TiB).

Maximum file size:
$48\;\mathrm{KiB} + 4\;\mathrm{MiB} + 4\;\mathrm{GiB} + 4\;\mathrm{TiB} \approx 4\;\mathrm{TiB}$.

### 6.5 Journaling File Systems

**The problem.** A crash during a file system update can leave inconsistent metadata (orphaned
Inodes, lost blocks, incorrect free block count).

**Journaling.** Before modifying the file system, write a description of the modifications to a
Dedicated **journal**. After a crash, replay the journal to restore consistency.

**Journaling modes (ext4):**

| Mode        | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `ordered`   | Metadata journaled; data written before metadata commit (default) |
| `writeback` | Metadata journaled; data not journaled (fastest, data loss risk)  |
| `journal`   | Both metadata and data journaled (safest, slowest)                |

**Write-ahead logging (WAL).** The journal entry is written to stable storage before the actual
Modification. Recovery scans the journal: committed entries are applied; uncommitted entries are
Discarded.

**Other journaling file systems:** NTFS (Windows), APFS (macOS), XFS, ZFS.

### 6.5a RAID Levels

**RAID (Redundant Array of Independent Disks)** combines multiple disks for performance,
reliability, Or both.

| Level | Min Disks | Description                                  | Fault Tolerance   | Write Performance |
| ----- | --------- | -------------------------------------------- | ----------------- | ----------------- |
| 0     | 1         | Striping only, no redundancy                 | None              | Excellent         |
| 1     | 2         | Mirroring every disk                         | 1 disk            | Moderate          |
| 2     | 3         | Bit-level striping with Hamming code ECC     | 1 disk            | Poor              |
| 3     | 3         | Byte-level striping with dedicated parity    | 1 disk            | Moderate          |
| 4     | 3         | Block-level striping with dedicated parity   | 1 disk            | Moderate          |
| 5     | 3         | Block-level striping with distributed parity | 1 disk            | Good              |
| 6     | 4         | Block-level striping with dual parity        | 2 disks           | Moderate          |
| 10    | 4         | Mirrored sets of stripes (RAID 1 + RAID 0)   | 1 disk per mirror | Excellent         |
| 50    | 6         | Parity sets of stripes (RAID 5 + RAID 0)     | 1 disk per set    | Good              |

**Effective capacity.** For $n$ disks of capacity $C$:

- RAID 0: $nC$
- RAID 1: $nC / 2$
- RAID 5: $(n - 1)C$
- RAID 6: $(n - 2)C$
- RAID 10: $nC / 2$

**Mean time to failure (MTTF).** If each disk has $\mathrm{MTTF_}{\mathrm{disk}}$ and the MTTR (mean
time to repair) is $T_{\mathrm{repair}}$:

$$\mathrm{MTTF_}{\mathrm{RAID}\;5} \approx \frac{\mathrm{MTTF_}{\mathrm{disk}^2}{n(n-1) \cdot T_{\mathrm{repair}}}}$$

RAID 5 significantly improves reliability for large arrays, but the rebuild time grows with disk
Capacity, increasing the window of vulnerability.

<details>
<summary>Worked Example 6.2 — RAID Capacity and Reliability</summary>

Eight 2 TiB disks. $\mathrm{MTTF_}{\mathrm{disk} = 1.2 \times 10^6}$ hours,
$T_{\mathrm{repair} = 24}$ hours.

_RAID 0:_ Capacity = $8 \times 2 = 16$ TiB. No fault tolerance. MTTF =
$\mathrm{MTTF_}{\mathrm{disk} / 8 = 150000}$ hours.

_RAID 5:_ Capacity = $7 \times 2 = 14$ TiB.
$\mathrm{MTTF_}{\mathrm{RAID}\;5} \approx \frac{(1.2 \times 10^6)^2}{8 \times 7 \times 24} = \frac{1.44 \times 10^{12}}{1344} \approx 1.07 \times 10^9$
hours.

_RAID 6:_ Capacity = $6 \times 2 = 12$ TiB. Tolerates 2 simultaneous disk failures. MTTF is orders
of Magnitude higher than RAID 5.

</details>

### 6.6 FUSE

**FUSE (Filesystem in Userspace)** allows non-privileged users to create file systems without
Modifying the kernel. The FUSE kernel module routes VFS operations to a user-space daemon.

**Workflow:**

1. User program calls a file system operation (e.g., `read`).
2. VFS routes the call to the FUSE module.
3. FUSE sends the request to the user-space daemon via `/dev/fuse`.
4. The daemon processes the request and responds.
5. FUSE returns the result to the user program.

**Examples:** `sshfs` (mount remote directories over SSH), `ntfs-3g` (NTFS on Linux), `bindfs`
(remap permissions).

### 6.7 Free Space Management

| Method      | Description                                             |
| ----------- | ------------------------------------------------------- |
| Bitmap      | One bit per block; 1 = free, 0 = used. Simple and fast. |
| Linked list | Free blocks linked together. Slow to traverse.          |
| Grouping    | First free block stores addresses of $n$ free blocks.   |
| Counting    | Track contiguous free blocks as (start, count) pairs.   |

### 6.8 File System Consistency

**Consistency checking (`fsck`).** Scans the file system for:

- **Orphaned inodes:** Inodes not referenced by any directory entry.
- **Incorrect link counts:** Link count does not match actual directory entries.
- **Duplicate blocks:** Two inodes claiming the same data block.
- **Missing/free blocks:** Blocks marked as used but not referenced, or vice versa.

**Journaling vs. `fsck`.** Journaling eliminates the need for full `fsck` after a crash. Only the
Journal needs to be replayed, which takes seconds instead of hours for large file systems.

