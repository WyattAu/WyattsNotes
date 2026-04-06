---
title: Operating Systems
date: 2026-04-03T00:00:00.000Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: operating-systems
---

## 1. What is an Operating System?

:::info Board-specific AQA Paper 1 | Edexcel P1 | OCR (A) Paper 1 | CIE Paper 1 :::

### Definition

**Definition.** An **operating system** (OS) is a system software that manages hardware resources,
provides services for application software, and acts as an intermediary between the user and the
computer hardware.

The OS abstracts away the complexity of hardware so that applications can run without needing to
know the details of specific devices. It provides:

- A **user interface** (CLI or GUI) for human interaction
- **Resource management** for CPU time, memory, storage, and I/O devices
- **File management** for organising, storing, and retrieving data
- **Security** through user authentication, access control, and permissions
- **Process management** to schedule and coordinate running programs

### Kernel Mode vs User Mode

Modern processors support at least two privilege levels:

- **Kernel mode:** The CPU can execute all instructions and access all hardware. The OS kernel runs
  in this mode.
- **User mode:** The CPU is restricted. Applications cannot directly access hardware or memory
  belonging to other processes. Attempting a privileged operation triggers a trap to the kernel.

This separation prevents buggy or malicious application code from corrupting the system.

### System Calls

A **system call** is the mechanism by which a user-mode program requests a service from the kernel.
Examples include:

| Category        | System Calls (examples)                  |
| --------------- | ---------------------------------------- |
| Process control | `fork()`, `exec()`, `wait()`, `exit()`   |
| File management | `open()`, `read()`, `write()`, `close()` |
| Device I/O      | `ioctl()`, `read()`, `write()`           |
| Communication   | `pipe()`, `shmget()`, `mmap()`           |
| Information     | `getpid()`, `stat()`, `time()`           |

When an application makes a system call, execution transitions from user mode to kernel mode via a
software interrupt (trap). The kernel performs the requested operation and returns control to the
application.

### Types of Operating Systems

| Type            | Description                                                        | Example                 |
| --------------- | ------------------------------------------------------------------ | ----------------------- |
| **Batch**       | Jobs collected and processed sequentially without user interaction | Early mainframe systems |
| **Real-time**   | Guarantees response within a strict time deadline                  | Flight control, ABS     |
| **Distributed** | Multiple machines appear as a single system to the user            | Cluster computing       |
| **Embedded**    | Designed for a specific device with limited resources              | Microwave, smartwatch   |
| **Network**     | Provides services to other computers over a network                | File servers, NAS       |
| **Desktop**     | General-purpose, multi-user with GUI                               | Windows, macOS, Linux   |
| **Mobile**      | Optimised for touch, power efficiency, and connectivity            | Android, iOS            |

:::info Board-specific **AQA** emphasises batch, real-time, and distributed systems. **Edexcel** and
**OCR (A)** focus on batch, real-time, and desktop/mobile. **CIE** covers real-time and distributed
systems in particular depth. :::

---

## 2. Process Management

### Definition

**Definition.** A **process** is an instance of a program in execution. A **program** is a passive
entity — a file on disk containing instructions — whereas a process is the active entity with its
own memory space, registers, and state.

Each process has:

- A **process control block** (PCB) storing its state, registers, memory map, and scheduling info
- A unique **process ID** (PID)
- Its own **virtual address space**
- At least one **thread** of execution

### The Five-State Process Model

Processes move through five states during their lifetime:

```
    [New] ──admit──> [Ready] ──dispatch──> [Running]
                        ^                      |   ^
                        |                      |   |
                   [Ready] <──timeout──       |   |
                   [Queue]                    |   |
                        |                 [Ready]  |
                        |                  [Queue] |
                        |                      |   |
                        |                   exit   |
                        v                      v   |
                    [Ready] <───────────────────   |
                    [Queue]                     |   |
                        |                  event  |
                        |                 occurs  |
                        v                      v   |
                    [Waiting] ──────────────> [Running]
                        |                      |
                        |                   exit  |
                        v                      v
                    [Terminated] <──────────────
```

| State          | Description                                              |
| -------------- | -------------------------------------------------------- |
| **New**        | Process is being created                                 |
| **Ready**      | Process is in memory, waiting to be assigned a CPU core  |
| **Running**    | Process instructions are being executed on a CPU core    |
| **Waiting**    | Process is blocked, waiting for an I/O event or resource |
| **Terminated** | Process has finished execution or been killed            |

### Process Scheduling Algorithms

The scheduler decides which ready process runs next on the CPU.

#### First Come, First Served (FCFS)

Processes are executed in arrival order. Simple but suffers from the **convoy effect**: short
processes wait behind a long process.

#### Shortest Job First (SJF)

Selects the process with the shortest expected CPU burst time. Minimises average waiting time but
may cause **starvation** of long processes.

#### Round Robin

Each process gets a fixed **time quantum** (time slice). If a process does not finish within its
quantum, it is preempted and moved to the back of the ready queue.

- **Advantage:** Fair; good for interactive systems
- **Disadvantage:** Context switch overhead if quantum is too small

#### Priority Scheduling

Each process has a priority; the highest-priority ready process runs next.

- **Problem:** Low-priority processes may starve. Solution: **aging** — gradually increase the
  priority of waiting processes.

### Context Switching

When the OS switches from one process to another, it must:

1. Save the current process's state (registers, PC, stack pointer) into its PCB
2. Load the next process's state from its PCB
3. Update the scheduler data structures
4. Switch to the new process's memory space (update page table base register)

Context switching is **overhead** — during the switch, no useful work is done. Typical cost: 1–10
microseconds depending on architecture.

### Interrupts

An **interrupt** is a signal that causes the CPU to stop its current execution and transfer control
to the OS. Two types:

- **Hardware interrupt:** Generated by a device (e.g., keyboard press, timer, disk completion)
- **Software interrupt (trap):** Generated by software (e.g., system call, divide-by-zero error)

Interrupts are essential for **preemptive multitasking** — the timer interrupt forces the OS to
regain control and decide whether to switch processes.

### Multitasking, Multiprocessing, Multithreading

| Term                | Meaning                                                              |
| ------------------- | -------------------------------------------------------------------- |
| **Multitasking**    | Multiple processes share a single CPU (time-sliced)                  |
| **Multiprocessing** | Multiple CPUs or cores execute processes simultaneously              |
| **Multithreading**  | A single process has multiple threads sharing the same address space |

---

## 3. Memory Management

### Physical vs Virtual Memory

- **Physical memory** is the actual RAM installed in the machine.
- **Virtual memory** gives each process the illusion of a large, contiguous, private address space.
  Physical memory is used as a cache for virtual memory; data not in RAM is stored on disk (swap
  space).

### Paging

Memory is divided into fixed-size **pages** (typically 4 KiB). Physical memory is divided into
**frames** of the same size. A **page table** maps each virtual page to a physical frame (or marks
it as not present in memory).

**Virtual address structure (32-bit, 4 KiB pages):**

| Offset (12 bits) | Page number (20 bits) |
| ---------------- | --------------------- |

**Translation:** The page number indexes into the page table to find the frame number. The physical
address is the frame number concatenated with the offset:

$$\text{Physical address} = \text{PageTable}[\text{page number}].\text{frame} \,\|\, \text{offset}$$

### Page Faults

When the CPU accesses a virtual page not currently in physical memory:

1. The MMU raises a **page fault** exception
2. The OS selects a victim frame (using a page replacement algorithm)
3. If the victim frame is dirty (modified), it is written back to disk
4. The desired page is loaded from disk into the freed frame
5. The page table is updated
6. The faulting instruction is restarted

### Page Replacement Algorithms

| Algorithm | Policy                         | Advantage               | Disadvantage                      |
| --------- | ------------------------------ | ----------------------- | --------------------------------- |
| **FIFO**  | Evict the page loaded earliest | Simple to implement     | May evict useful pages (Belady's) |
| **LRU**   | Evict least recently used page | Good approx. of optimal | Expensive to implement exactly    |

**Belady's anomaly:** With FIFO, increasing the number of frames can sometimes _increase_ the number
of page faults. LRU does not suffer from this anomaly.

### Segmentation

**Segmentation** divides memory into variable-sized **segments** based on logical divisions (code,
data, stack, heap). Each segment has a base address and a limit (length).

The virtual address comprises a segment number and an offset within that segment:

$$\text{Physical address} = \text{SegmentTable}[\text{segment}].\text{base} + \text{offset}$$

If offset $\ge$ limit, a segmentation fault is raised.

:::info Board-specific **AQA** and **OCR (A)** require understanding of both paging and
segmentation. **Edexcel** focuses primarily on paging. **CIE** covers paging with address
translation in detail. :::

### TLB (Translation Lookaside Buffer)

The TLB is a small, fast hardware cache that stores recent virtual-to-physical address translations.

- **TLB hit:** Translation found in TLB — completes in 1–2 cycles
- **TLB miss:** The page table must be consulted — much slower (~10–100 cycles)

The TLB is typically **fully associative** or **set-associative** because it must support fast
lookup regardless of the page number.

---

## 4. File Systems

### File System Structure

A **file system** organises data on storage into files and directories. Key components:

- **Files:** Named collections of data stored on secondary storage
- **Directories (folders):** Containers that group files and other directories
- **Metadata:** Information about each file stored separately from the file contents:
  - File name, size, type
  - Creation, modification, and access timestamps
  - Owner and permissions
  - Physical location on disk (block pointers)

### File Allocation Methods

#### Contiguous Allocation

Each file occupies a set of consecutive disk blocks.

- **Advantage:** Fast sequential access; simple
- **Disadvantage:** External fragmentation; files cannot grow easily

#### Linked Allocation

Each block contains a pointer to the next block of the file.

- **Advantage:** No external fragmentation; files can grow
- **Disadvantage:** No direct access (must follow pointers); pointer overhead

#### Indexed Allocation

An **index block** contains pointers to all data blocks of the file.

- **Advantage:** Direct access to any block; no fragmentation of data blocks
- **Disadvantage:** Index block overhead; large files may need multi-level indexing

### File Permissions

Most file systems associate three permission categories with each file:

| Category   | Read (r)          | Write (w)           | Execute (x)        |
| ---------- | ----------------- | ------------------- | ------------------ |
| **Owner**  | Can read contents | Can modify contents | Can run as program |
| **Group**  | Members can read  | Members can modify  | Members can run    |
| **Others** | Everyone can read | Everyone can modify | Everyone can run   |

Permissions are typically represented as a 9-bit string (e.g., `rwxr-xr--` = 755 in octal).

### Directory Structures

| Structure        | Description                                             |
| ---------------- | ------------------------------------------------------- |
| **Flat**         | All files in a single directory; no subdirectories      |
| **Hierarchical** | Directories can contain subdirectories (tree structure) |
| **Tree**         | Each directory has exactly one parent; acyclic          |

Modern OSes use a hierarchical tree structure with a root directory (`/` on Linux/macOS, drive
letters on Windows).

---

## 5. Device Management

### Device Drivers

A **device driver** is a small piece of OS software that knows how to communicate with a specific
hardware device. The driver translates OS requests (e.g., "write these bytes to disk") into the
specific commands the device understands.

```
Application ──> OS (system call) ──> Device Driver ──> Hardware Controller ──> Device
```

Drivers allow the OS to support many devices without needing to know the details of each one. Adding
a new device only requires installing its driver.

### Interrupt-Driven I/O vs Polling

**Polling:** The CPU repeatedly checks the device status register to see if an operation is
complete. The CPU wastes cycles waiting.

- **Advantage:** Simple to implement
- **Disadvantage:** Wastes CPU time; inefficient for slow devices

**Interrupt-driven I/O:** The CPU starts an I/O operation and continues with other work. When the
device finishes, it sends a hardware interrupt. The CPU then handles the result.

- **Advantage:** CPU is free to do useful work while waiting
- **Disadvantage:** Interrupt handling overhead for each I/O operation

### DMA (Direct Memory Access)

**DMA** allows data transfer between an I/O device and memory **without CPU involvement**. A DMA
controller handles the transfer:

1. The OS programs the DMA controller with the source address, destination address, and transfer
   length
2. The DMA controller transfers data directly between the device and memory
3. When complete, the DMA controller sends an interrupt to the CPU

DMA is essential for high-bandwidth devices (disks, network cards, graphics) where CPU-per-byte
overhead would be unacceptable.

### Spooling

**Spooling** (Simultaneous Peripheral Operations On-Line) buffers data for a device so that
processes can continue without waiting. The most common example is a **print spooler**:

1. The application sends print output to the spool queue (stored on disk)
2. The application continues immediately — it does not wait for printing
3. The spooler sends jobs to the printer one at a time, in order

Spooling decouples fast processes from slow devices.

---

## 6. Security and Management

### User Accounts and Authentication

The OS maintains user accounts with associated credentials. When a user logs in, the OS
authenticates them (verifies password, biometric, or token). Each process runs under a user account
and inherits that user's permissions.

### Access Control Lists (ACLs)

An **ACL** is a list attached to a resource (file, directory, device) specifying which users or
groups may access it and what operations are permitted.

```
File: report.pdf
ACL:
  alice  → read, write
  bob    → read
  group:staff → read, write, execute
  others → none
```

### File Encryption

The OS or file system can encrypt files so that data is unreadable without the correct decryption
key. This protects data confidentiality even if the storage medium is physically removed (e.g.,
stolen laptop). Modern examples include BitLocker (Windows) and LUKS (Linux).

### Software Updates and Patch Management

The OS must manage updates to itself and installed software. Key concerns:

- **Security patches** fix vulnerabilities that could be exploited
- **Version compatibility** ensures updates do not break existing software
- **Rollback** mechanisms allow reverting to a previous version if an update causes problems

:::info Board-specific **AQA** and **Edexcel** specifically mention software updates and patch
management. **OCR (A)** and **CIE** may cover this under broader system security topics. :::

### Malware Protection

The OS provides mechanisms to defend against malicious software:

| Mechanism           | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| **Antivirus**       | Scans files for known malware signatures and suspicious behaviour |
| **Firewall**        | Monitors and filters network traffic based on rules               |
| **User privileges** | Limits the damage malware can cause by restricting permissions    |
| **Sandboxing**      | Runs untrusted code in an isolated environment                    |
| **Code signing**    | Verifies that software has not been tampered with                 |

---

## Problem Set

**Problem 1.** Explain the difference between a program and a process. Why does the operating system
need to manage processes?

<details>
<summary>Hint</summary>

A program is passive; a process is active. Think about what extra state a running program needs.

</details>

<details>
<summary>Answer</summary>

A **program** is a static file stored on disk containing instructions and data. A **process** is a
dynamic instance of that program in execution, with its own memory space, register state, open
files, and process control block.

The OS must manage processes because multiple processes compete for limited CPU time, memory, and
I/O resources. The OS ensures fair scheduling, memory isolation between processes, and proper
resource allocation so that each process executes correctly without interfering with others.

</details>

**Problem 2.** A system uses round-robin scheduling with a time quantum of 4 ms. Three processes
arrive at time 0 with burst times: P1 = 10 ms, P2 = 4 ms, P3 = 7 ms. Draw a Gantt chart and
calculate the average waiting time.

<details>
<summary>Hint</summary>

Processes run in order P1, P2, P3, P1, P3, P1, P3, P1. Track remaining burst time each cycle.

</details>

<details>
<summary>Answer</summary>

```
| P1 | P2 | P3 | P1 | P3 | P1 | P3 | P1 |
0   4   8  12  16  20  21  24  25
```

- P1: finishes at 25 ms, waited 0+6+4+3 = 13 ms, burst = 10 ms → waiting time = 25 - 10 - 0 = 15 ms
- P2: finishes at 8 ms, burst = 4 ms → waiting time = 8 - 4 - 0 = 4 ms
- P3: finishes at 24 ms, burst = 7 ms → waiting time = 24 - 7 - 0 = 17 ms

Average waiting time: $(15 + 4 + 17) / 3 = 12$ ms.

</details>

**Problem 3.** Describe the steps the operating system takes during a context switch from process A
to process B.

<details>
<summary>Hint</summary>

The OS must save A's state, select B, and restore B's state. Consider what state needs saving.

</details>

<details>
<summary>Answer</summary>

1. A timer interrupt (or system call) triggers the OS scheduler
2. The OS saves process A's CPU state to its PCB: general-purpose registers, program counter, stack
   pointer, status flags, and memory management information (page table base register)
3. The OS updates A's PCB with its new state (e.g., ready or waiting)
4. The scheduler selects process B from the ready queue
5. The OS loads B's state from its PCB into the CPU registers
6. The OS updates the page table base register to point to B's page table
7. The CPU jumps to B's saved program counter, resuming B's execution

Steps 2 and 5 involve the most overhead, especially if the page tables must be flushed or the TLB is
invalidated.

</details>

**Problem 4.** A system uses 32-bit virtual addresses with 4 KiB pages. Physical memory is 1 GiB.
How many bits are used for the offset, virtual page number, and physical frame number?

<details>
<summary>Hint</summary>

Page size determines offset bits. Virtual page number comes from the virtual address width. Frame
number comes from the physical address width.

</details>

<details>
<summary>Answer</summary>

Page size = 4 KiB = $2^{12}$ bytes, so **offset = 12 bits**.

Virtual address = 32 bits, so **virtual page number = $32 - 12 = 20$ bits**.

Physical memory = 1 GiB = $2^{30}$ bytes, so physical address = 30 bits.

Physical frame number = $30 - 12 = 18$ bits.

Each page table entry stores the 18-bit frame number plus flag bits (present, dirty, permissions).

</details>

**Problem 5.** Explain the difference between interrupt-driven I/O and polling. When is each
approach more appropriate?

<details>
<summary>Hint</summary>

Consider the trade-off between CPU utilisation and implementation complexity.

</details>

<details>
<summary>Answer</summary>

**Polling:** The CPU repeatedly checks a device's status register in a loop until the device is
ready. This wastes CPU cycles but is simple to implement. Suitable for very fast devices or
real-time systems where the overhead of interrupt handling is unacceptable.

**Interrupt-driven I/O:** The CPU starts the I/O operation and proceeds with other tasks. When the
device is ready, it sends a hardware interrupt, and the CPU handles the result. This is more
efficient for slow devices (keyboards, disks, network cards) because the CPU is not idle while
waiting.

In general, interrupt-driven I/O is preferred for most systems because it maximises CPU utilisation.
Polling is used only in specialised cases such as low-latency embedded systems.

</details>

**Problem 6.** A file system uses contiguous allocation. A disk has 10,000 blocks. Files A, B, and C
are allocated blocks as follows: A uses blocks 0–49, B uses blocks 50–99, C uses blocks 100–149.
File A is then deleted. A new file D of size 30 blocks is created. Where is D placed? What problem
might arise over time?

<details>
<summary>Hint</summary>

With contiguous allocation, new files are placed in the first available free space. Track the free
blocks.

</details>

<details>
<summary>Answer</summary>

After deleting A, blocks 0–49 are free. B occupies 50–99, C occupies 100–149, and 150–9999 are free.

File D (30 blocks) is placed starting at block 0, using blocks 0–29. Blocks 30–49 remain free.

**Problem:** Over time, repeated allocation and deallocation of different-sized files causes
**external fragmentation** — free memory is scattered in small blocks that individually may be too
small to satisfy new file requests, even though the total free space is sufficient. The solution is
**compaction** (moving files to create contiguous free space) or using non-contiguous allocation
(linked or indexed).

</details>

**Problem 7.** Explain what a page fault is and describe the steps the OS takes to handle one.

<details>
<summary>Hint</summary>

The CPU tries to access a virtual page that is not in physical memory. The OS must get it from disk.

</details>

<details>
<summary>Answer</summary>

A **page fault** occurs when the CPU references a virtual page that is marked as "not present" in
the page table entry, meaning the page is currently on disk rather than in physical RAM.

Steps taken by the OS:

1. The MMU detects the not-present bit in the PTE and raises a page fault exception
2. The OS checks that the access is valid (the page belongs to the process and the permission is
   correct); if not, a segmentation fault is raised
3. The OS selects a victim frame in physical memory (using FIFO, LRU, or another replacement
   algorithm)
4. If the victim frame is dirty (has been modified), it is written back to disk
5. The OS reads the desired page from disk into the freed frame
6. The OS updates the page table entry for the new page (sets the frame number and present bit)
7. The OS invalidates any TLB entry for the faulting page
8. The faulting instruction is restarted, and this time the translation succeeds

</details>

**Problem 8.** Compare and contrast the three file allocation methods: contiguous, linked, and
indexed. Give a scenario where each is most appropriate.

<details>
<summary>Hint</summary>

Consider access speed, fragmentation, and the ability to grow files.

</details>

<details>
<summary>Answer</summary>

**Contiguous allocation:**

- Files stored in consecutive blocks
- Fast sequential and direct access
- Suffers from external fragmentation
- Best for: read-only media (CD-ROMs), files that do not change size

**Linked allocation:**

- Each block points to the next; no external fragmentation
- Sequential access is efficient; direct access is slow (must follow chain)
- Pointer overhead in each block
- Best for: files that grow unpredictably (log files)

**Indexed allocation:**

- Index block contains pointers to all data blocks; supports direct access
- No external fragmentation of data blocks; supports file growth (within index limits)
- Index block overhead; multi-level indexing needed for very large files
- Best for: general-purpose file systems (used by UNIX, ext4, NTFS)

</details>

**Problem 9.** Explain how DMA improves system performance compared to programmed I/O (where the CPU
copies every byte). Use a concrete example.

<details>
<summary>Hint</summary>

Consider a disk read of 4 KiB. How many CPU cycles does each approach consume?

</details>

<details>
<summary>Answer</summary>

**Programmed I/O:** The CPU reads each byte (or word) from the disk controller into a register, then
writes it to memory. For 4 KiB = 4,096 bytes, the CPU executes a read and a store instruction per
byte — thousands of instructions, during which the CPU cannot do other work.

**DMA:** The CPU programs the DMA controller with: source (disk controller buffer), destination
(memory address), and length (4,096 bytes). The DMA controller transfers all 4,096 bytes
independently. The CPU is free to execute other processes. When the transfer is complete, the DMA
controller sends a single interrupt to the CPU.

For example, reading a 4 KiB disk block: programmed I/O might take ~4,000 CPU instructions and
millions of cycles. DMA reduces this to ~2 CPU instructions (setup) plus one interrupt, saving
millions of cycles that can be used for computation.

</details>

**Problem 10.** Describe how the operating system uses an access control list (ACL) to determine
whether a user is permitted to open a file for writing. Include the steps the OS takes when a file
open request is received.

<details>
<summary>Hint</summary>

The OS checks the user's identity against the ACL entries for the requested operation.

</details>

<details>
<summary>Answer</summary>

When a user process calls `open("report.pdf", WRITE)`:

1. The OS identifies the user associated with the process (from the process's user ID)
2. The OS locates the file's inode/metadata on disk, which contains the ACL
3. The OS searches the ACL for an entry matching the user:
   - If an entry grants WRITE permission to this specific user, access is allowed
   - If no user entry matches, the OS checks for a group entry matching the user's group
   - If no group entry matches, the OS checks the "others" entry
   - If no entry grants the requested permission, access is denied and an error is returned
4. If access is granted, the OS creates an open file descriptor for the process and returns it

This mechanism allows fine-grained control: different users can have different levels of access to
the same file, and the owner can modify the ACL to add or revoke permissions at any time.

</details>

:::

:::

:::
