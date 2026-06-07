---
title: Introduction to Operating Systems
tags:
  - Computing
  - University
---

### 1.1 Role of the Operating System

An operating system (OS) is system software that manages hardware resources and provides services To
application programs. It serves as an intermediary between users and the underlying hardware.

**Core responsibilities:**

- **Process management:** Create, schedule, and terminate processes.
- **Memory management:** Allocate and protect memory; implement virtual memory.
- **File system management:** Organise, store, retrieve, and protect data.
- **I/O management:** Control and mediate access to I/O devices.
- **Protection and security:** Enforce access controls and resource isolation.

### 1.2 Kernel Architectures

**Monolithic Kernel.** All OS services (file system, device drivers, network stack, scheduler) run
In a single address space in kernel mode. Examples: Linux, FreeBSD.

- _Advantage:_ Low overhead from function-call latency.
- _Disadvantage:_ A bug in any component can crash the entire system.

**Microkernel.** Only essential services (IPC, scheduling, basic memory management) run in kernel
Mode. Other services run in user mode as separate processes. Examples: MINIX 3, seL4, QNX.

- _Advantage:_ Fault isolation; easier to verify formally.
- _Disadvantage:_ Higher overhead from message passing between user-mode servers.

**Hybrid Kernel.** A pragmatic compromise combining monolithic and microkernel ideas. Some
Non-essential services run in kernel mode for performance, but the architecture is more modular Than
a pure monolith. Examples: Windows NT, macOS XNU.

### 1.3 System Calls

System calls provide the interface between user-mode applications and kernel-mode OS services. They
Are invoked via software interrupts (e.g., `syscall` on x86-64, `svc` on ARM).

**Categories:**

| Category        | Examples                     |
| --------------- | ---------------------------- |
| Process control | `fork``exec``wait``exit`     |
| File management | `open``read``write``close`   |
| Device I/O      | `ioctl``read``write`         |
| Communication   | `pipe``shmget``mmap``socket` |
| Information     | `getpid``stat``sysconf`      |
| Protection      | `chmod``chown``setuid`       |

**System call overhead.** A transition from user mode to kernel mode involves saving user Registers,
switching to the kernel stack, validating arguments, executing kernel code, and Returning. Typical
overhead: $100\mathrm{--1000}$ ns on modern hardware.

