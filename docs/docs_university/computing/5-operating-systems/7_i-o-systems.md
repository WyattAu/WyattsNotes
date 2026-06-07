---
title: I/O Systems
tags:
  - Computing
  - University
---

### 7.1 I/O Hardware

| Category         | Examples                   | Data rate      |
| ---------------- | -------------------------- | -------------- |
| Human-readable   | Keyboard, screen, printer  | Low            |
| Machine-readable | Disk, tape, sensors        | Medium to high |
| Communication    | Network interfaces, modems | Variable       |

### 7.2 Device Drivers

A **device driver** is kernel-mode software that translates OS I/O requests into device-specific
Operations. It provides a uniform interface to the OS while hiding hardware details.

**Driver architecture (layered):**

```
User application
       │
   System call interface (read, write, ioctl)
       │
   File system / block layer
       │
   Device driver (kernel module)
       │
   Device controller (hardware)
```

**Types:**

- **Block device drivers:** Manage fixed-size block access (disks, SSDs). Use a buffer cache to
  reduce physical I/O. The OS can reorder and merge block requests for performance.
- **Character device drivers:** Manage byte-stream access (terminals, serial ports). No buffering or
  reordering by the OS.

**Driver loading.** Most modern OSes support loadable kernel modules (LKMs): drivers loaded at
Runtime without rebooting. On Linux: `insmod``modprobe`. This allows third-party hardware support
Without kernel recompilation.

### 7.3 I/O Scheduling

I/O schedulers reorder and merge requests to improve performance:

- **FCFS:** Simple but may cause starvation.
- **SSTF:** Service the request closest to the current head position. Minimises seek but can starve
  distant requests.
- **SCAN (elevator):** Head moves in one direction servicing requests, then reverses.
- **C-SCAN:** Like SCAN but only services in one direction; returns without servicing.
- **LOOK / C-LOOK:** Optimised SCAN/C-SCAN that reverses when no requests remain ahead.

**Theorem 7.1.** C-SCAN provides more uniform wait times than SCAN.

_Proof._ SCAN services requests in both directions, so requests at the extremes of the disk wait
Longer. C-SCAN treats the disk as a circular queue, ensuring every request is serviced within one
Full sweep. $\blacksquare$

<details>
<summary>Worked Example 7.1 — Disk Scheduling Comparison</summary>

Disk with 200 cylinders (0--199). Request queue (sorted): 98, 183, 37, 122, 14, 124, 65, 67. Current
head position: 53, moving toward higher cylinders.

_FCFS:_ 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67. Total seek =
$\lvert 53-98 \rvert + \lvert 98-183 \rvert + \lvert 183-37 \rvert + \lvert 37-122 \rvert + \lvert 122-14 \rvert + \lvert 14-124 \rvert + \lvert 124-65 \rvert + \lvert 65-67 \rvert = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640$
cylinders.

_SSTF:_ 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183. Total seek =
$12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236$ cylinders.

_SCAN (elevator, moving right):_ 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 37 → 14. Total seek =
$12 + 2 + 31 + 24 + 2 + 59 + 16 + 162 + 23 = 331$ cylinders.

_C-SCAN (moving right):_ 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37. Total seek =
$12 + 2 + 31 + 24 + 2 + 59 + 16 + 199 + 14 + 23 = 382$ cylinders.

_LOOK (stops at last request):_ 53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14. Total seek =
$12 + 2 + 31 + 24 + 2 + 59 + 146 + 23 = 299$ cylinders.

| Algorithm | Total Seek | Max Wait | Fairness |
| --------- | ---------- | -------- | -------- |
| FCFS      | 640        | 335      | Fair     |
| SSTF      | 236        | 130      | Starves  |
| SCAN      | 331        | 313      | Good     |
| C-SCAN    | 382        | 329      | Best     |
| LOOK      | 299        | 299      | Good     |

SSTF minimises total seek but starves requests at the extremes. C-SCAN provides the most uniform
Wait time at the cost of higher total seek.

</details>

### 7.4 Direct Memory Access (DMA)

**DMA** allows I/O devices to transfer data directly to/from memory without per-word CPU
Intervention.

**Without DMA:** CPU reads each word from the device controller to memory. For a 4 KiB read, the CPU
Is interrupted 4096 times.

**With DMA:** CPU programs the DMA controller with source, destination, and count. DMA handles the
Transfer, interrupting the CPU only when complete.

- DMA transfers are **cycle-stealing**: the DMA controller uses the system bus, pausing the CPU.
- Modern systems use **bus mastering**: the I/O device controller performs the transfer
  autonomously.

