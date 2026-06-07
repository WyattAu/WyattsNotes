---
title: Virtualization
tags:
  - Computing
  - University
---

### 8.1 Hypervisor Types

**Type 1 (bare-metal).** Runs directly on hardware. Examples: VMware ESXi, Xen, Hyper-V.

- Direct hardware access; high performance.
- Must include device drivers for all hardware.

**Type 2 (hosted).** Runs on a host OS. Examples: VirtualBox, VMware Workstation, QEMU.

- Easier to develop and install.
- Additional overhead from the host OS.

### 8.2 Virtual Machine Monitors

A **VMM** (hypervisor) presents the illusion of multiple independent physical machines to guest
OSes.

**Challenges:**

- **Instruction emulation:** Sensitive instructions must be trapped and emulated. On x86, `IN`
  `OUT``HLT``CLI``STI`And `MOV` to/from control registers are sensitive.
- **Memory virtualization:** The VMM maintains **shadow page tables** mapping guest virtual to host
  physical addresses. Hardware support: Extended Page Tables (EPT, Intel) and Nested Page Tables
  (NPT, AMD).
- **I/O virtualization:** Device access mediated by the VMM. Paravirtualized drivers (e.g., VirtIO)
  improve performance.

### 8.3 Paravirtualization

The guest OS is modified to make **hypercalls** instead of executing sensitive instructions
directly.

- _Advantage:_ Lower overhead (no trap-and-emulate for every sensitive instruction).
- _Disadvantage:_ Requires modifying the guest kernel.

### 8.4 Containers

**Containers** share the host kernel but provide process isolation via:

- **Namespaces:** Isolate process trees, network, file systems, IPC, UTS (hostname).
- **cgroups:** Limit resource usage (CPU, memory, I/O).

| Property    | VMs                    | Containers            |
| ----------- | ---------------------- | --------------------- |
| Kernel      | Separate per VM        | Shared with host      |
| Startup     | Minutes                | Seconds               |
| Footprint   | GBs                    | MBs                   |
| Isolation   | Hardware-level         | Process-level         |
| Performance | Near-native (with EPT) | Near-native (minimal) |

**Docker** uses OverlayFS for layered images. **Kubernetes** orchestrates containers across
clusters.

:::caution Common Pitfall Containers do **not** provide hardware-level isolation. A kernel
vulnerability can potentially Compromise all containers on a host. For strong multi-tenant
isolation, VMs are preferred.
:::


