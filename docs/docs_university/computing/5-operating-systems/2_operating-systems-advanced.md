---
title: Operating Systems (Advanced)
description:
  'University-level notes on Advanced Operating Systems: 1. Advanced Process Management; 1.1 Process
  Creation and Fork; 1.2 Thread Libraries and Models.'
date: 2026-05-06T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: operating-systems-advanced
---

## 1. Advanced Process Management

### 1.1 Process Creation and Fork

The `fork()` system call creates a new process by duplicating the calling process. The new process
(child) is an exact copy of the parent, except for its PID, PPID, and resource
.../4-statistics-and-probability/2_statistics.

**Copy-on-Write (COW).** Modern Unix systems use COW semantics for `fork()`: the parent's pages are
shared (read-only) between parent and child. A page is copied only when either process writes to it.

**Theorem 1.1.** With COW, `fork()` takes $O(1)$ time in the common case (no immediate writes), but
the worst-case cost of subsequent page faults is $O(n)$ where $n$ is the number of pages.

_Proof._ `fork()` only creates a new page table and copies page table entries (marking pages as
read-only). This takes $O(n)$ for the page table setup but $O(1)$ for actual page copies. Each
subsequent write triggers a page fault, copying one page. In the worst case, every page is written,
giving $O(n)$ total page fault cost. $\blacksquare$

**`vfork()`.** An alternative to `fork()` that does not copy page tables. The child runs in the
parent's address space and must call `exec()` or `_exit()` before returning. Faster than `fork()`
but dangerous if misused.

| Property        | `fork()` + COW    | `fork()` (traditional) | `vfork()`                       |
| --------------- | ----------------- | ---------------------- | ------------------------------- |
| Page table copy | Yes (shared, COW) | Yes (full copy)        | No                              |
| Address space   | Separate          | Separate               | Shared with parent              |
| Safety          | Safe              | Safe                   | Unsafe if child modifies memory |
| Speed           | Fast              | Slow ($O(n)$ pages)    | Very fast                       |

<details>
<summary>Worked Example: fork() Process Tree</summary>

Consider the following code:

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    fork();
    fork();
    fork();
    printf("Hello\n");
    return 0;
}
```

How many "Hello" lines are printed?

Each `fork()` doubles the number of processes. After 3 forks: $2^3 = 8$ processes. Each prints
"Hello", so **8 lines** are printed.

Process tree (P = parent, C = child):

```
P0
├── C1 (1st fork)
│   ├── C3 (2nd fork, from C1)
│   │   ├── C7 (3rd fork, from C3)
│   │   └── P_C3 (3rd fork parent, from C3)
│   └── P_C1 (2nd fork parent, from C1)
│       ├── C5 (3rd fork, from P_C1)
│       └── P_P_C1 (3rd fork parent, from P_C1)
└── P0_c (1st fork parent, from P0)
    ├── C2 (2nd fork, from P0_c)
    │   ├── C6 (3rd fork, from C2)
    │   └── P_C2 (3rd fork parent, from C2)
    └── P_P0_c (2nd fork parent, from P0_c)
        ├── C4 (3rd fork, from P_P0_c)
        └── P_P_P0_c (3rd fork parent, from P_P0_c)
```

</details>

### 1.2 Thread Libraries and Models

**Three thread models:**

1. **1:1 (kernel-level):** Each user thread maps to one kernel thread. Examples: Linux pthreads,
   Windows threads.

- Advantage: True parallelism on multi-core; blocking system calls block only the calling thread.
- Disadvantage: Thread creation is expensive (kernel involvement); limited by kernel resources.

2. **N:1 (user-level):** All user threads map to one kernel thread. Examples: GNU Pth (historical).

- Advantage: Fast creation and switching (no kernel involvement); unlimited threads (within memory).
- Disadvantage: Cannot exploit multi-core; blocking system call blocks all threads.

3. **M:N (hybrid):** $M$ user threads map to $N$ kernel threads ($M \geq N$). Examples: Solaris
   threads (historical), Go goroutines (with M:N scheduling).

- Advantage: Combines benefits of both; scheduler can adapt.
- Disadvantage: Complex implementation; scheduling decisions are harder.

| Property       | 1:1        | N:1        | M:N              |
| -------------- | ---------- | ---------- | ---------------- |
| Parallelism    | Full       | None       | Partial          |
| Creation cost  | High       | Low        | Low              |
| Context switch | Kernel     | User-space | User-space       |
| Blocking I/O   | Per-thread | Blocks all | Blocks one LWP   |
| Implementation | Kernel     | Library    | Library + kernel |

**POSIX threads (pthreads).** The standard API for C/C++ on Unix systems.

**Key functions:**

| Function                    | Purpose                          |
| --------------------------- | -------------------------------- |
| `pthread_create`            | Create a new thread              |
| `pthread_join`              | Wait for thread termination      |
| `pthread_exit`              | Terminate the calling thread     |
| `pthread_mutex_lock/unlock` | Lock/unlock a mutex              |
| `pthread_cond_wait/signal`  | Wait/signal a condition variable |
| `pthread_cancel`            | Request cancellation of a thread |

### 1.3 Real-Time Scheduling

Real-time systems require tasks to complete within strict timing constraints.

**Hard real-time:** Missing a deadline is a system failure (e.g., pacemakers, avionics). **Soft
real-time:** Missing a deadline degrades performance but is not catastrophic (e.g., video streaming,
games).

**Scheduling algorithms for real-time systems:**

**Rate-Monotonic Scheduling (RMS).** Fixed-priority preemptive scheduling where priority is
inversely proportional to the period.

**Theorem 1.2 (Liu and Layland, 1973).** A set of $n$ periodic tasks with utilisation
$U = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ C_i / T_i \leq n(2^◆LB◆1/n◆RB◆ - 1)$ is schedulable under RMS, where $C_i$ is the
computation time and $T_i$ is the period of task $i$.

_Proof (sufficiency)._ The critical instant for a task occurs when it is released simultaneously
with all higher-priority tasks. The worst-case response time of task $i$ is
$R_i = C_i + \sum_◆LB◆j \in hp(i)◆RB◆ \lceil R_i / T_j \rceil \cdot C_j$. For $n$ tasks with equal
utilisation $U_i = C_i/T_i$The bound $n(2^◆LB◆1/n◆RB◆ - 1)$ is derived by considering the maximum
interference from higher-priority tasks at the critical instant. As $n \to \infty$This bound
approaches $\ln 2 \approx 0.693$. $\blacksquare$

**Utilisation bounds for RMS:**

| $n$      | Bound $n(2^◆LB◆1/n◆RB◆ - 1)$ |
| -------- | ---------------------- |
| 1        | 1.000                  |
| 2        | 0.828                  |
| 3        | 0.779                  |
| 4        | 0.756                  |
| 5        | 0.743                  |
| $\infty$ | $\ln 2 \approx 0.693$  |

**Earliest Deadline First (EDF).** Dynamic-priority preemptive scheduling where the task with the
nearest deadline has the highest priority.

**Theorem 1.3.** EDF can schedule any task set with total utilisation $U \leq 1$. This is optimal
among all preemptive uniprocessor scheduling algorithms.

_Proof._ If $U \leq 1$The total demand (computation time) in any interval $[0, t]$ does not exceed
$t$. Since EDF always prioritises the task that must complete soonest, no deadline is missed if the
total demand is feasible. $\blacksquare$

<details>
<summary>Worked Example: Rate-Monotonic Scheduling</summary>

Three periodic tasks:

- Task 1: $C_1 = 2$$T_1 = 5$$U_1 = 0.4$
- Task 2: $C_2 = 2$$T_2 = 10$$U_2 = 0.2$
- Task 3: $C_3 = 3$$T_3 = 20$$U_3 = 0.15$

Total utilisation: $U = 0.4 + 0.2 + 0.15 = 0.75$.

RMS bound for $n = 3$: $3(2^◆LB◆1/3◆RB◆ - 1) \approx 3(1.260 - 1) = 3 \times 0.260 = 0.779$.

Since $0.75 \leq 0.779$The task set is schedulable by RMS (sufficient condition).

Priority assignment (RMS): Task 1 has highest priority (shortest period $T_1 = 5$), then Task 2
($T_2 = 10$), then Task 3 ($T_3 = 20$).

Timeline (first 20 time units):

```
Time:  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
Task1: [==]        [==]        [==]        [==]        [==]
Task2:       [====]               [====]
Task3:            [===]                        [===]
```

Let me verify more carefully. At $t = 0$: all tasks arrive. Task 1 (highest priority) runs for 2
units (0--2). Task 2 runs for 2 units (2--4). Task 3 runs for 3 units (4--7).

At $t = 5$: Task 1 released again. Preempt Task 3 (at $t = 7$... Wait, Task 3 finishes at $t = 7$).
Task 1 runs at $t = 5$But Task 3 is still running (4--7). Preempt Task 3 at $t = 5$. Task 1 runs
5--7. Task 3 resumes at $t = 7$... But Task 1 already used 5--7. Task 3 had completed 1 unit (4--5),
needs 2 more.

Let me redo:

- $t = 0$: T1 arrives, runs 0--2.
- $t = 2$: T2 runs 2--4.
- $t = 4$: T3 runs 4--5.
- $t = 5$: T1 arrives (period 5), preempts T3. T1 runs 5--7.
- $t = 7$: T3 resumes. T3 needs 2 more units (1 done at 4--5). T3 runs 7--9.
- $t = 9$: T2? No, T2 next arrives at $t = 10$. T3 finishes at $t = 9$. Idle 9--10.
- $t = 10$: T1 arrives, runs 10--12. T2 arrives at $t = 10$But T1 has higher priority.
- $t = 12$: T2 runs 12--14.
- $t = 14$: T3? T3 next arrives at $t = 20$. Idle 14--15.
- $t = 15$: T1 arrives, runs 15--17.
- $t = 17$: Idle 17--20.
- $t = 20$: T1, T2, T3 all arrive again.

Deadlines: T1 at 5, 10, 15, 20 -- all met. T2 at 10, 20 -- all met. T3 at 20 -- met.

All deadlines satisfied.

</details>

:::caution Common Pitfall The RMS utilisation bound is a **sufficient** condition, not necessary. A
task set with $U > n(2^◆LB◆1/n◆RB◆ - 1)$ may still be schedulable under RMS. The response time analysis
(RTA) provides a necessary and sufficient test but is more complex to compute. :::

## 2. Advanced Memory Management

### 2.1 Multi-Level Page Tables

A multi-level page table reduces the memory required to store the page table for sparse address
spaces.

**Two-level page table.** The virtual address is split into three parts:

| Field      | Bits (32-bit) | Purpose                   |
| ---------- | ------------- | ------------------------- |
| Outer (p1) | 10 bits       | Index into page directory |
| Inner (p2) | 10 bits       | Index into page table     |
| Offset     | 12 bits       | Offset within page        |

**Theorem 2.1.** A two-level page table for a 32-bit address space with 4 KB pages requires at most
4 MB of page table memory (1 page directory + 1024 page tables), compared to 4 MB for a flat page
table. For a sparse address space using only $k$ pages, the two-level table uses $4(1 + k)$ KB.

_Proof._ The page directory is one page (4 KB, holding 1024 entries of 4 bytes each). Each page
table is also one page. With $k$ page tables actually used (one per 4 MB region that has any mapped
pages), the total memory is $4(1 + k)$ KB. A flat page table always uses $2^◆LB◆20◆RB◆ \times 4$ bytes = 4
MB. $\blacksquare$

**Four-level page tables (x86-64).** 64-bit virtual addresses use 4 levels of page tables (PML4,
PDP, PD, PT) with 9 bits per level and 12 bits of offset, supporting 48-bit virtual addresses
($2^◆LB◆48◆RB◆ = 256$ TB).

### 2.2 Inverted Page Tables

An **inverted page table** stores one entry per physical frame (rather than per virtual page). Each
entry maps a frame to the (process ID, virtual page) pair that occupies it.

**Advantages:** Memory proportional to physical memory size, not virtual address space size.
Critical for 64-bit systems.

**Disadvantages:** Searching for a virtual page requires hashing the (PID, VPN) pair. TLBs mitigate
this cost.

### 2.3 Demand Paging Analysis

Under demand paging with a **local replacement policy** (each process gets a fixed number of
frames), the **working set model** defines the set of pages a process needs within a time window
$\Delta$:

$$W(t, \Delta) = \{\text◆LB◆pages referenced by the process in  [t - \Delta, t]\}$$

**Theorem 2.2 (Working Set Theorem).** A process with working set size $|W|$ needs at least $|W|$
frames to avoid thrashing. If allocated fewer frames, the page fault rate increases dramatically.

### 2.4 Thrashing and Load Control

**Thrashing** occurs when the system spends more time paging than executing useful work.

**Detection.** A process is thrashing if its page fault rate exceeds a threshold (e.g., measured by
the ratio of productive CPU time to page fault handling time).

**Prevention strategies:**

1. **Working set model:** Admit a process only if there are enough free frames for its working set.
2. **Page fault frequency (PFF):** Dynamically adjust frames based on page fault rate. If too high,
   allocate more frames. If too low, take some away.
3. **L=S criterion:** The locality model ensures $L$ (locality size) is sufficient for $S$ (degree
   of multiprogramming).

<details>
<summary>Worked Example: Multi-Level Page Table Lookup</summary>

A 32-bit system with 4 KB pages and a two-level page table. Virtual address: 0x2A4B0C1C.

Break down the address:

- Binary: 0010 1010 0100 1011 0000 1100 0001 1100
- p1 (bits 31--22): 0010 1010 10 = 0x0AA = 170
- p2 (bits 21--12): 10 0100 1011 = 0x12B = 299
- offset (bits 11--0): 0000 1100 0001 1100 = 0x0C1C = 3100

Steps:

1. Read CR3 to find the page directory base address.
2. Read page directory entry at index 170. If present bit is 0, page fault. Otherwise, get the page
   table base address.
3. Read page table entry at index 299. If present bit is 0, page fault. Otherwise, get the physical
   frame number.
4. Compute physical address: frame number || offset.

If page directory entry 170 gives frame 0x3F and page table entry 299 gives frame 0x1A5: Physical
address = `0x1A5 << 12` | `0x0C1C` = `0x1A50C1C`.

TLB hit: If the TLB caches the mapping for this virtual page, steps 1--3 are skipped, reducing the
translation to one memory access.

</details>

## 3. Advanced Synchronisation

### 3.1 Futexes

A **futex** (fast userspace mutex) is a Linux synchronisation primitive that avoids kernel
transitions in the non-contended case.

**Mechanism:**

1. Try to atomically decrement the futex value (userspace, using `cmpxchg`).
2. If the value was 1 (unlocked), the lock is acquired. No kernel call.
3. If the value was 0 (contended), call `futex(FUTEX_WAIT)` to sleep in the kernel.
4. When releasing, set the value to 1 and call `futex(FUTEX_WAKE)` to wake one waiter.

**Performance.** In the uncontended case, futexes are 10--100x faster than traditional mutexes (no
kernel transition). In the contended case, they have similar overhead to kernel mutexes.

### 3.2 Read-Copy-Update (RCU)

**RCU** is a synchronisation mechanism optimised for read-mostly data structures. Readers access
data without any locking; writers create copies and update pointers atomically.

**RCU protocol:**

1. **Reader:** dereference the pointer. No memory barriers or locks needed (on most architectures).
2. **Writer:** Allocate a new copy of the data structure, modify the copy, atomically update the
   pointer to point to the new copy.
3. **Reclamation:** After a grace period (all pre-existing readers have finished), free the old
   copy.

**Grace period.** Determined by waiting for all CPUs to pass through a quiescent state (no RCU
readers active).

**Advantages:** Zero overhead for readers; suitable for high-read workloads (e.g., routing tables,
file system metadata).

**Disadvantages:** Writers are expensive (copy the entire structure); not suitable for write-heavy
workloads.

**Theorem 3.1.** RCU guarantees that no reader accesses freed memory, provided that: (1) readers do
not sleep while holding an RCU reference, and (2) the old data is freed only after a grace period.

### 3.3 Sequence Locks (Seqlocks)

A **sequence lock** allows readers to proceed without locking but requires them to verify that the
data was not modified during the read.

**Protocol:**

- **Writer:** Increment sequence number, write data, increment sequence number again.
- **Reader:** Read sequence number, read data, read sequence number again. If the two sequence
  numbers differ (or are odd), retry.

**Use case:** Very small, frequently read data where writes are rare (e.g., `gettimeofday`Statistics
counters).

### 3.4 Memory Ordering

Modern processors reorder memory operations for performance. The programmer must use memory barriers
to enforce ordering when necessary.

**Types of reordering:**

| Type        | Description                      | Example                                      |
| ----------- | -------------------------------- | -------------------------------------------- |
| Store-store | Stores reordered                 | Store A, Store B may become Store B, Store A |
| Load-load   | Loads reordered                  | Load A, Load B may become Load B, Load A     |
| Store-load  | Store followed by load reordered | Store A, Load B may become Load B, Store A   |
| Load-store  | Load followed by store reordered | Load A, Store B may become Store B, Load A   |

**Memory barrier instructions:**

| Barrier       | x86-64            | ARM         | Effect                                                     |
| ------------- | ----------------- | ----------- | ---------------------------------------------------------- |
| Full barrier  | `mfence`          | `dmb ish`   | All preceding memory ops complete before any subsequent op |
| Write barrier | (implicit)        | `dmb ishst` | All stores complete before subsequent stores               |
| Read barrier  | (implicit on x86) | `dmb ishld` | All loads complete before subsequent loads                 |
| Acquire       | `lock` prefix     | `ldar`      | Subsequent loads/stores cannot move before this            |
| Release       | (varies)          | `stlr`      | Preceding loads/stores cannot move after this              |

:::caution Common Pitfall X86-64 has a **stronger memory model** (TSO -- Total Store Order) than ARM
and RISC-V. Code that works correctly on x86-64 may fail on ARM due to reordering. Always use proper
synchronisation primitives (mutexes, atomic operations with explicit ordering) rather than relying
on the hardware memory model. :::

<details>
<summary>Worked Example: Double-Checked Locking with Memory Ordering</summary>

The classic double-checked locking pattern for lazy initialisation:

```c
// INCORRECT (without proper memory ordering)
if (ptr == NULL) {           // First check (no lock)
    lock(m);
    if (ptr == NULL) {       // Second check (with lock)
        ptr = malloc(sizeof(*ptr));
        init(ptr);
    }
    unlock(m);
}
return ptr;
```

This is broken on ARM/POWER because: (1) the compiler may reorder the write to `ptr` before
`init(ptr)`And (2) the processor may reorder the store to `ptr` before stores inside `init(ptr)`. A
reader on another CPU could see `ptr != NULL` but find the object not fully initialised.

**Correct version using C11 atomics:**

```c
atomic_ptr ptr = ATOMIC_VAR_INIT(NULL);

if (atomic_load_explicit(&ptr, memory_order_acquire) == NULL) {
    lock(m);
    if (atomic_load_explicit(&ptr, memory_order_relaxed) == NULL) {
        obj_t *p = malloc(sizeof(*p));
        init(p);
        atomic_store_explicit(&ptr, p, memory_order_release);
    }
    unlock(m);
}
return atomic_load_explicit(&ptr, memory_order_acquire);
```

The `memory_order_release` on the store ensures all prior writes (including `init`) are visible
before the store to `ptr`. The `memory_order_acquire` on the load ensures all subsequent reads see
the effects of the release store.

</details>

## 4. Advanced File Systems

### 4.1 Journaling in Detail

Journaling file systems (ext4, NTFS, XFS) maintain a log (journal) of changes before committing them
to the main file system structures.

**Journaling modes:**

| Mode      | What is journaled                                 | Performance | Safety                                      |
| --------- | ------------------------------------------------- | ----------- | ------------------------------------------- |
| Writeback | Metadata only                                     | Best        | Metadata consistent, data may be lost       |
| Ordered   | Metadata + data written before metadata committed | Good        | Data written before metadata, no stale data |
| Data      | Metadata + data                                   | Worst       | Full consistency guarantee                  |

**Journal structure.** A circular buffer on disk divided into blocks. Each transaction records:

1. **Transaction ID** (monotonically increasing).
2. **Block descriptors:** (block number, old data, new data) or (block number, new data) for new
   blocks.
3. **Commit block:** Marks the transaction as complete.

**Recovery algorithm:**

1. Find the last committed transaction in the journal.
2. Replay all committed but not-yet-applied transactions.
3. Discard any uncommitted transactions (partial writes due to crash).

**Theorem 4.1.** Journaling guarantees file system consistency after a crash, provided that the
journal write reaches disk before the main file system writes.

### 4.2 Log-Structured File Systems

A **log-structured file system (LFS)** writes all modifications (data and metadata) sequentially to
a log, avoiding random writes.

**Key ideas:**

1. The entire disk is a log. New data is always appended to the end.
2. Inodes and data blocks are written to the log.
3. An inode map (in memory and periodically checkpointed to disk) maps inode numbers to their
   locations in the log.
4. Garbage collection reclaims space from obsolete log segments.

**Segment cleaning.** When the log fills up, segments are cleaned by reading live blocks from
partially-full segments and writing them to new segments. The cleaned segments are then available
for new writes.

**Cost-benefit model for segment selection:** Clean the segment with the highest ratio of dead
blocks to live blocks (most benefit for least cost):

$$\text◆LB◆benefit(s) = \frac◆LB◆\text◆LB◆dead(s)◆RB◆◆LB◆1 - u(s)◆RB◆$$

Where $u(s)$ is the utilisation of segment $s$.

**Theorem 4.2 (Rosenblum and Ousterhout).** With optimal segment cleaning, LFS write throughput
approaches the raw disk bandwidth for high utilisation, and requires 1.5--2x the write bandwidth for
90% utilisation.

### 4.3 Copy-on-Write File Systems

**ZFS** and **Btrfs** use copy-on-write for all modifications:

1. When a block is modified, write the new block to a free location.
2. Update the parent pointer to point to the new block (recursively up to the root).
3. The old block is freed after the transaction commits.

**Advantages:**

- Snapshots are free (just keep the old root pointer).
- Always consistent on disk (either old or new root, never a mix).
- Built-in RAID and checksumming.

**Disadvantages:**

- Write amplification (small writes trigger many block copies).
- Fragmentation (related blocks may be scattered).

## 5. I/O Systems in Depth

### 5.1 I/O Scheduling Algorithms

The OS must decide the order in which to service I/O requests to minimise total seek time and
rotational latency.

**SCAN (Elevator) variants:**

| Algorithm | Direction                       | Fairness                      |
| --------- | ------------------------------- | ----------------------------- |
| SCAN      | Reverses at disk ends           | Unfair to middle tracks       |
| C-SCAN    | One-way, jumps to start         | Fair, but wastes time on jump |
| LOOK      | Reverses at last request        | Better than SCAN              |
| C-LOOK    | One-way, jumps to first request | Best overall                  |

**Theorem 5.1.** For a disk with $n$ pending requests, SSTF (Shortest Seek Time First) minimises
total head movement but may cause starvation. SCAN/C-SCAN guarantee bounded waiting time.

<details>
<summary>Worked Example: Disk Scheduling Comparison</summary>

Disk with 200 cylinders (0--199). Request queue: 98, 183, 37, 122, 14, 124, 65, 67. Head at 53,
moving toward 0.

**FCFS:** 53 -> 98 -> 183 -> 37 -> 122 -> 14 -> 124 -> 65 -> 67. Total =
$|98-53| + |183-98| + |37-183| + |122-37| + |14-122| + |124-14| + |65-124| + |67-65|$ =
$45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640$ cylinders.

**SSTF:** Always go to the nearest request. 53 -> 65 (12) -> 67 (2) -> 37 (30) -> 14 (23) -> 98 (84)
-> 122 (24) -> 124 (2) -> 183 (59). Total = $12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236$ cylinders.

**SCAN:** Moving toward 0. 53 -> 37 (16) -> 14 (23) -> 0 (14) -> 65 (65) -> 67 (2) -> 98 (31) -> 122
(24) -> 124 (2) -> 183 (59). Total = $16 + 23 + 14 + 65 + 2 + 31 + 24 + 2 + 59 = 236$ cylinders.

**C-SCAN:** Moving toward 0, then jump to 199. 53 -> 37 (16) -> 14 (23) -> 0 (14) -> 199 (199) ->
183 (16) -> 124 (59) -> 122 (2) -> 98 (24) -> 67 (31) -> 65 (2). Total =
$16 + 23 + 14 + 199 + 16 + 59 + 2 + 24 + 31 + 2 = 386$ cylinders.

**C-LOOK:** Moving toward 0, then jump to highest request. 53 -> 37 (16) -> 14 (23) -> 0 (14) -> 183
(183) -> 124 (59) -> 122 (2) -> 98 (24) -> 67 (31) -> 65 (2). Total =
$16 + 23 + 14 + 183 + 59 + 2 + 24 + 31 + 2 = 354$ cylinders.

SSTF and SCAN are best here (236 cylinders), but SSTF may starve requests far from the head.

</details>

### 5.2 Direct Memory Access (DMA)

**DMA** allows I/O devices to transfer data directly to/from memory without CPU involvement for each
byte/word.

**DMA transfer process:**

1. CPU programs the DMA controller with: source address, destination address, transfer count, and
   operation (read/write).
2. CPU continues executing other tasks.
3. DMA controller transfers data between the device and memory, stealing bus cycles as needed.
4. When the transfer is complete, DMA sends an interrupt to the CPU.

**Bus mastering.** Modern devices (PCIe) act as bus masters, performing DMA independently. The DMA
engine is on the device, not a separate controller.

**Scatter-gather DMA.** A single DMA operation can transfer data to/from multiple non-contiguous
memory locations, specified by a list of (address, length) pairs.

**Theorem 5.2.** DMA reduces CPU overhead for I/O from $O(n)$ (programmed I/O, one interrupt per
byte) to $O(1)$ (one interrupt per transfer).

## 6. Virtualisation in Depth

### 6.1 Hardware-Assisted Virtualisation

**Intel VT-x** and **AMD-V** provide hardware support for efficient virtualisation:

- **VMX root mode:** The hypervisor runs in a more privileged mode than the guest OS.
- **VMCS (Virtual Machine Control Structure):** Stores the guest state and controls transitions
  between guest and hypervisor.
- **VM entry/exit:** Transitions between guest and hypervisor mode. A VM exit is triggered by
  privileged instructions, I/O, or page faults.

**EPT (Extended Page Tables) / NPT (Nested Page Tables).** Two-dimensional page tables mapping
(guest virtual -> guest physical -> host physical) addresses. Without EPT, every guest TLB miss
requires two page table walks (shadow page tables). With EPT, the hardware handles the nested
translation in a single walk.

**Theorem 6.1.** EPT reduces the overhead of guest page table walks from $O(2d)$ (shadow page
tables, $d$ levels per walk, two walks) to $O(d)$ (single nested walk).

### 6.2 Paravirtualisation

In **paravirtualisation**, the guest OS is modified to cooperate with the hypervisor:

- Replace privileged instructions with **hypercalls** (analogous to system calls but directed to the
  hypervisor).
- Replace the guest's page table management with hypervisor-managed shadow page tables.
- Examples: Xen (PV guests), VMware Tools (partial paravirtualisation).

**Advantage:** Lower overhead than full virtualisation (no need to trap and emulate every privileged
instruction).

**Disadvantage:** Requires modifying the guest OS kernel. Not possible for proprietary OSes (without
vendor support).

### 6.3 Containers vs Virtual Machines

| Property          | Virtual Machines            | Containers               |
| ----------------- | --------------------------- | ------------------------ |
| Isolation         | Hardware-level              | OS-level (shared kernel) |
| Startup time      | Minutes                     | Seconds/milliseconds     |
| Resource overhead | GBs (full OS)               | MBs (shared kernel)      |
| Density           | 10s per host                | 100s--1000s per host     |
| Security          | Strong (hardware isolation) | Weaker (kernel shared)   |
| Portability       | Good (self-contained)       | Good (images)            |
| Performance       | Near-native (with VT-x)     | Near-native              |

## 7. Security in Depth

### 7.1 Capability-Based Security

A **capability** is an unforgeable token that identifies an object and the operations permitted on
it.

**Principle:** Access to resources is controlled by possession of capabilities, not by identity (as
in ACL-based systems).

**Advantages:** Principle of least privilege is enforced ; capabilities can be delegated.

**Disadvantages:** Revocation is difficult (once a capability is given, the receiver can copy it).

### 7.2 Sandbox Technologies

**Seccomp (Secure Computing Mode).** Linux mechanism to restrict the system calls a process can
make.

- **Seccomp-BPF:** Uses BPF programs to filter system calls by number and arguments.
- **Seccomp-notify:** Allows a userspace process to handle filtered system calls (for mediated
  access).

**Namespaces.** Linux namespaces provide isolation for:

- **PID:** Separate process ID space.
- **Network:** Separate network interfaces, routing tables, firewall rules.
- **Mount:** Separate file system mount points.
- **UTS:** Separate hostname.
- **IPC:** Separate System V IPC and POSIX message queues.
- **User:** Separate UID/GID mappings.
- **Cgroup:** Separate resource control groups.

### 7.3 Mandatory Access Control (MAC)

**SELinux (Security-Enhanced Linux).** Implements MAC using security policies:

- **Subjects:** Processes.
- **Objects:** Files, sockets, etc.
- **Security context:** (user, role, type, level).
- **Policy rules:** Define which subjects can access which objects and how.

**MAC vs DAC:**

| Aspect          | DAC (Discretionary)        | MAC (Mandatory)                 |
| --------------- | -------------------------- | ------------------------------- |
| Who sets policy | Resource owner             | System administrator            |
| Enforcement     | Voluntary (user-dependent) | Enforced by kernel              |
| Bypass          | Root can bypass            | Even root must comply           |
| Granularity     | Per-file permissions       | Fine-grained (type enforcement) |

## 10. Inter-Process Communication in Depth

### 10.1 Pipes and FIFOs

**Anonymous pipes.** Unidirectional, byte-stream communication between related processes
(parent-child). Created by `pipe()` system call, returns two file descriptors: `pipefd[0]` for
reading, `pipefd[1]` for writing.

**Named pipes (FIFOs).** Special files in the filesystem that allow communication between unrelated
processes. Created by `mkfifo()`. Have a name in the filesystem but no content on disk.

**Properties:**

| Property      | Anonymous Pipe                                | FIFO                         |
| ------------- | --------------------------------------------- | ---------------------------- |
| Direction     | Unidirectional                                | Unidirectional               |
| Processes     | Related (parent-child)                        | Any (with filesystem access) |
| Persistence   | Process lifetime                              | Filesystem lifetime          |
| Blocking      | Reader blocks on empty; writer blocks on full | Same                         |
| Kernel buffer | 64 KB                                         | 64 KB                        |

**Theorem 10.1.** A pipe has a fixed kernel buffer ( one page or 64 KB). If the buffer is full,
`write()` blocks. If the buffer is empty, `read()` blocks. If all write ends are closed, `read()`
returns 0 (EOF).

### 10.2 Message Queues

**System V message queues** and **POSIX message queues** allow processes to exchange messages with
type-based prioritisation.

**POSIX message queue API:**

| Function     | Purpose                                    |
| ------------ | ------------------------------------------ |
| `mq_open`    | Open/create a message queue                |
| `mq_send`    | Send a message                             |
| `mq_receive` | Receive a message (highest priority first) |
| `mq_notify`  | Register for asynchronous notification     |
| `mq_close`   | Close a message queue                      |
| `mq_unlink`  | Remove a message queue                     |

**Advantages over pipes:**

- Message boundaries are preserved.
- Messages can have priorities.
- Multiple readers and writers.

**Disadvantages:**

- More complex API.
- Limited maximum message size and queue depth.

### 10.3 Shared Memory

**Shared memory** is the fastest IPC mechanism: multiple processes map the same physical memory into
their address spaces.

**POSIX shared memory:**

```c
shm_open("/myshm", O_CREAT | O_RDWR, 0666);
ftruncate(shm_fd, size);
ptr = mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);
```

**System V shared memory:**

```c
shmget(key, size, IPC_CREAT | 0666);
shmat(shmid, NULL, 0);
```

**Synchronisation.** Shared memory provides NO synchronisation. Processes must use mutexes,
semaphores, or other mechanisms to coordinate access.

**Theorem 10.2.** Shared memory communication has $O(1)$ overhead per access (just a memory
read/write), compared to $O(1)$ but with higher constant factor for pipes and message queues (which
involve kernel transitions and data copying).

### 10.4 Signals

**Signals** are asynchronous notifications sent to a process or thread.

**Standard signals:**

| Signal  | Number | Default action   | Meaning                      |
| ------- | ------ | ---------------- | ---------------------------- |
| SIGINT  | 2      | Terminate        | Interrupt (Ctrl+C)           |
| SIGKILL | 9      | Terminate        | Cannot be caught or ignored  |
| SIGSEGV | 11     | Terminate + core | Segmentation fault           |
| SIGTERM | 15     | Terminate        | Termination request          |
| SIGCHLD | 17     | Ignore           | Child process status changed |
| SIGSTOP | 19     | Stop             | Cannot be caught or ignored  |
| SIGCONT | 18     | Continue         | Resume stopped process       |

**Signal handling issues:**

1. **Reentrancy:** Only async-signal-safe functions can be called from signal handlers (e.g.,
   `write``_exit``sigaction`). Functions like `malloc``printf`And `strerror` are NOT
   async-signal-safe.
2. **Race conditions:** A signal may arrive between checking a condition and acting on it.
3. **Signal masking:** `sigprocmask()` blocks specific signals during critical sections.

<details>
<summary>Worked Example: IPC Selection</summary>

An application has a producer process and a consumer process that need to exchange structured
messages (up to 1 KB each). Which IPC mechanism is most appropriate?

**Options:**

1. **Pipes:** Preserves byte stream but not message boundaries. Requires framing protocol.
   Unidirectional -- need two pipes for bidirectional.

2. **Message queues:** Preserves message boundaries, supports priorities. Good fit for structured
   messages. Kernel copies data twice (sender -> kernel -> receiver).

3. **Shared memory:** Fastest (no kernel copies). Requires explicit synchronisation. Must implement
   message queue logic manually.

**Recommendation:** If performance is critical and the message format is simple, use **shared
memory** with a mutex and condition variables for synchronisation. If simplicity is more important,
use **POSIX message queues**.

**Throughput comparison (approximate, for 1 KB messages):**

- Pipe: ~500 MB/s
- Message queue: ~200 MB/s
- Shared memory: ~10 GB/s (limited by memory bandwidth)
</details>

## 11. Advanced Scheduling

### 11.1 Completely Fair Scheduler (CFS)

The **Completely Fair Scheduler (CFS)** is the default process scheduler in Linux.

**Key ideas:**

1. Each task maintains a **virtual runtime** (`vruntime`), which is the actual runtime scaled by the
   task's priority (niceness).
2. CFS always picks the task with the smallest `vruntime`.
3. The `vruntime` increment per tick is:
   $\text◆LB◆vruntime += \text◆LB◆actual\_time \times \text◆LB◆weight_0 / \text◆LB◆weight$Where $\text◆LB◆weight$
   depends on the nice value.

**Target latency.** CFS aims to give each task a fair share of CPU time within a "sched period"
(target latency, 6 ms). If there are $n$ tasks, each gets $6/n$ ms per period.

**Red-black tree.** CFS stores all runnable tasks in a red-black tree keyed by `vruntime`. The
leftmost node (minimum `vruntime`) is selected next. Insertion and extraction take $O(\log n)$.

**Theorem 11.1.** CFS provides proportional fairness: the ratio of CPU time received by any two
tasks approaches the ratio of their weights as time goes to infinity.

### 11.2 Multi-Processor Scheduling

**Load balancing.** On SMP (Symmetric Multi-Processing) systems, the scheduler must distribute load
across CPUs.

**Linux load balancing:**

1. **Periodic load balancing:** Every 200 ms, the scheduler checks if any CPU is significantly more
   loaded than others and migrates tasks.
2. **Active balancing:** When a CPU becomes idle, it steals tasks from other CPUs.

**NUMA awareness.** On NUMA systems, the scheduler prefers to run a task on the same NUMA node as
its memory to avoid remote memory access latency.

### 11.3 CPU Isolation and Cgroups

**cgroups (Control Groups)** allow resource allocation and isolation:

| Controller | Resource                   |
| ---------- | -------------------------- |
| cpu        | CPU time shares            |
| cpuacct    | CPU accounting             |
| memory     | Memory usage limit         |
| blkio      | Block I/O bandwidth        |
| devices    | Device access control      |
| freezer    | Freezing/thawing processes |

**CPU shares.** If cgroup A has 1024 shares and cgroup B has 512 shares, A gets 2/3 of CPU time and
B gets 1/3 (when both are active).

<details>
<summary>Worked Example: CFS Virtual Runtime</summary>

Two tasks with default priority (nice = 0, weight = 1024):

Target latency = 6 ms. Each task gets 3 ms per period.

_Period 1:_

- Task A runs 3 ms. `vruntime_A = 3 × 1024/1024 = 3`.
- Task B runs 3 ms. `vruntime_B = 3 × 1024/1024 = 3`.

_Period 2:_

- Both have `vruntime = 3`. CFS picks the leftmost (arbitrary tiebreak). Say Task A.
- Task A runs 3 ms. `vruntime_A = 6`.
- Task B runs 3 ms. `vruntime_B = 6`.

Now change Task A's nice value to -5 (higher priority, weight = 3121):

_Period 3:_

- Task B has lower `vruntime` (6 vs 6, tie). Say CFS picks B (or A, tie).
- Task A runs 3 ms. `vruntime_A = 6 + 3 × 1024/3121 = 6 + 0.984 = 6.984`.
- Task B runs 3 ms. `vruntime_B = 6 + 3 × 1024/1024 = 9`.

After several periods, Task A's `vruntime` grows more slowly (because its weight is higher), so CFS
picks it more often. The ratio of runtimes approaches `weight_A / weight_B = 3121/1024 ≈ 3.05`.

</details>

## 13. Memory Mapping and Shared Memory

### 13.1 mmap System Call

`mmap()` maps a file or device into memory. The mapped region can be accessed like any memory
location.

```c
void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);
```

**Parameters:**

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| addr      | Preferred address (NULL for kernel to choose)      |
| length    | Number of bytes to map                             |
| prot      | Protection: PROT_READ, PROT_WRITE, PROT_EXEC       |
| flags     | MAP_PRIVATE (copy-on-write) or MAP_SHARED (shared) |
| fd        | File descriptor (or -1 for anonymous mapping)      |
| offset    | Offset in file                                     |

**Theorem 13.1.** Memory-mapped I/O can be faster than `read()`/`write()` for large files because it
avoids copying data from kernel space to user space (zero-copy).

**Demand paging with mmap.** Pages are not read from disk until they are accessed (page fault
triggers the read). This is especially beneficial when only a portion of a large file is needed.

### 13.2 Copy-on-Write Semantics

**MAP_PRIVATE.** Each process gets a private copy of the mapped region. Writes trigger COW: the page
is duplicated, and the process's page table is updated to point to the new copy.

**MAP_SHARED.** Writes are visible to all processes that share the mapping and are written back to
the underlying file.

<details>
<summary>Worked Example: mmap for File Processing</summary>

Read and modify every 4th byte of a 1 GB file, without loading the entire file into memory.

```c
int fd = open("large_file.dat", O_RDWR);
void *map = mmap(NULL, 1UL << 30, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);

for (size_t i = 0; i < (1UL << 30); i += 4096) {  // every page
    ((char *)map)[i] = ~((char *)map)[i];  // flip bits
}

munmap(map, 1UL << 30);
close(fd);
```

Only the pages that are actually touched are read from disk (demand paging). For a 1 GB file, this
takes 1 GB of virtual address space but only $n/4096$ pages of physical memory (where $n$ is the
number of pages touched).

With `read()`/`write()`We would need a buffer, read each page into the buffer, modify it, and write
it back. This involves an extra copy (kernel buffer to user buffer).

</details>

### 13.3 Memory-Mapped IPC

Processes can communicate via shared memory mappings:

```c
// Process 1 (creator)
int fd = shm_open("/my_shm", O_CREAT | O_RDWR, 0666);
ftruncate(fd, 4096);
int *shared = mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
shared[0] = 42;

// Process 2 (user)
int fd = shm_open("/my_shm", O_RDWR, 0666);
int *shared = mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
printf("%d\n", shared[0]);  // prints 42
```

## 14. Advanced File System Internals

### 14.1 ext4 File System

**ext4** is the default file system on most Linux distributions.

**Key features:**

| Feature               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Journaling            | Writeback, ordered, or data mode                     |
| Extents               | Replace indirect blocks with extents (start, length) |
| Delayed allocation    | Blocks allocated at writeback, not at write()        |
| Uninitialized extents | Reserve space without allocating blocks              |
| Large file support    | Up to 16 TB individual files                         |
| Subdirectories        | Unlimited nesting depth                              |

**Extent-based allocation.** Instead of block pointers, ext4 stores extents: (logical block,
physical block, length). This reduces metadata overhead for large contiguous files.

**On-disk structure:**

| Component               | Location          | Description                                            |
| ----------------------- | ----------------- | ------------------------------------------------------ |
| Superblock              | Block 0 (or 1024) | File system parameters (size, block size, etc.)        |
| Block group descriptors | After superblock  | Pointers to block bitmaps, inode bitmaps, inode tables |
| Block bitmap            | Per block group   | Which blocks are free/used                             |
| Inode bitmap            | Per block group   | Which inodes are free/used                             |
| Inode table             | Per block group   | Array of inodes                                        |
| Data blocks             | Remaining         | File data                                              |

### 14.2 Journaling Modes Compared

| Mode      | Metadata  | Data                    | Crash recovery                             |
| --------- | --------- | ----------------------- | ------------------------------------------ |
| Writeback | Journaled | Not journaled           | Metadata consistent; data may be stale     |
| Ordered   | Journaled | Written before metadata | No stale data (data written before commit) |
| Journal   | Journaled | Journaled               | Full consistency                           |

**Performance impact.** Ordered mode is the default. Journal mode is safest but slowest (every data
write goes to the journal first). Writeback mode is fastest but least safe.

### 14.3 File System Check (fsck)

`fsck` verifies and repairs file system consistency:

1. **Superblock check:** Verify parameters are valid.
2. **Block bitmap check:** Find referenced-but-free and free-but-referenced blocks.
3. **Inode check:** Verify link counts, format, and referenced blocks.
4. **Directory check:** Verify `.` and `..` entries, detect orphaned directories.
5. **Link count check:** Verify hard link counts match references.

**Theorem 14.1.** `fsck` runs in $O(n + m)$ time where $n$ is the number of inodes and $m$ is the
number of blocks.

## 16. Deadlock Analysis in Depth

### 16.1 Resource-Allocation Graph

A **resource-allocation graph** is a directed bipartite graph with vertices for processes (circles)
and resources (squares). An edge $P \to R$ means process $P$ has requested resource $R$. An edge
$R \to P$ means resource $R$ is held by process $P$.

**Theorem 16.1.** A deadlock exists in a resource-allocation graph if and only if the graph contains
a cycle. If each resource type has exactly one instance, this is both necessary and sufficient. If
resources have multiple instances, a cycle is necessary but not sufficient.

_Proof (single instance)._ ($\Rightarrow$) If there is a deadlock, processes in the deadlock set are
waiting for resources held by other processes in the set. Following the wait-for chain must
eventually revisit a process (since the set is finite), forming a cycle. ($\Leftarrow$) If there is
a cycle, each process in the cycle holds a resource needed by the next process. None can proceed, so
all are deadlocked. $\blacksquare$

<details>
<summary>Worked Example: Resource-Allocation Graph Analysis</summary>

Processes: P1, P2, P3. Resources: R1, R2, R3 (each with 1 instance).

Edges: P1 -> R1, R1 -> P2, P2 -> R2, R2 -> P3, P3 -> R3, R3 -> P1.

Graph: P1 -> R1 -> P2 -> R2 -> P3 -> R3 -> P1.

This contains a cycle: P1 - R1 - P2 - R2 - P3 - R3 - P1. Therefore, deadlock exists.

Now add: P3 -> R1 (P3 also requests R1). No change to the deadlock (P3 is already deadlocked).

Now add: P4 -> R3 (P4 requests R3, but R3 is held by P1). P4 is blocked but not in a cycle, so P4 is
NOT deadlocked -- it will proceed once P1 releases R3.

If R3 had 2 instances and the second instance is free: P4 could get the second instance of R3
immediately.

</details>

### 16.2 Deadlock Prevention vs Avoidance

| Strategy   | Approach                                                  | Trade-off                                    |
| ---------- | --------------------------------------------------------- | -------------------------------------------- |
| Prevention | Eliminate one of the 4 necessary conditions               | May reduce concurrency                       |
| Avoidance  | Dynamically check if granting a request leads to deadlock | Requires advance knowledge of resource needs |

**Prevention techniques:**

1. **Eliminate mutual exclusion:** Use spooling or non-sharable resource emulation. Not always
   possible.
2. **Eliminate hold-and-wait:** Require all resources to be acquired at once. Low utilisation.
3. **Eliminate no preemption:** Preempt resources from blocked processes. Complex to implement.
4. **Eliminate circular wait:** Impose a total ordering on resources; acquire in increasing order.

**Wait-Die scheme (prevention based on timestamps):**

| Situation                                       | Action                            |
| ----------------------------------------------- | --------------------------------- |
| Older process requests resource held by younger | Wait (older waits for younger)    |
| Younger process requests resource held by older | Die (younger aborts and restarts) |

**Wound-Wait scheme:**

| Situation                                       | Action                         |
| ----------------------------------------------- | ------------------------------ |
| Older process requests resource held by younger | Wound (preempt younger)        |
| Younger process requests resource held by older | Wait (younger waits for older) |

**Theorem 16.2.** Both wait-die and wound-wait prevent deadlocks and are starvation-free.

_Proof (wait-die)._ A cycle in the wait-for graph would require
$T_1 \to T_2 \to \cdots \to T_k \to T_1$ where each arrow means "waiting for." In wait-die, a
process only waits for older processes. So $T_1$ is older than $T_2$$T_2$ is older than $T_3$...,
$T_k$ is older than $T_1$. This is a contradiction ($T_1 > T_2 > \cdots > T_k > T_1$). Therefore no
cycle exists. Starvation-freedom: a process only dies (aborts) if it is younger than the holder.
After restarting, it retains its original timestamp, so it becomes "older" relative to new
processes. Eventually, it will be the oldest and never die again. $\blacksquare$

### 16.3 Banker's Algorithm Detailed Example

The Banker's algorithm avoids deadlock by only granting a request if the resulting state is "safe"
(there exists a sequence that allows all processes to complete).

**Safe state.** A state is safe if there exists a sequence
$\langle P_◆LB◆i_1◆RB◆, P_◆LB◆i_2◆RB◆, \ldots, P_◆LB◆i_n◆RB◆ \rangle$ such that each process can run to completion
with the available resources.

<details>
<summary>Worked Example: Banker's Algorithm</summary>

5 processes, 3 resource types (A, B, C). Total resources: (10, 5, 7).

| Process | Allocation | Maximum   | Need      |
| ------- | ---------- | --------- | --------- |
| P0      | (0, 1, 0)  | (7, 5, 3) | (7, 4, 3) |
| P1      | (2, 0, 0)  | (3, 2, 2) | (1, 2, 2) |
| P2      | (3, 0, 2)  | (9, 0, 2) | (6, 0, 0) |
| P3      | (2, 1, 1)  | (2, 2, 2) | (0, 1, 1) |
| P4      | (0, 0, 2)  | (4, 3, 3) | (4, 3, 1) |

Available = Total - sum(Allocation) = (10, 5, 7) - (7, 2, 5) = (3, 3, 2).

**Safety check:**

1. Available = (3, 3, 2). Can any process run? P1 needs (1, 2, 2) $\leq$ (3, 3, 2). Yes. Run P1.
   After P1 completes: Available += P1's allocation = (3, 3, 2) + (2, 0, 0) = (5, 3, 2).
2. Available = (5, 3, 2). P3 needs (0, 1, 1) $\leq$ (5, 3, 2). Yes. Run P3. Available += (2, 1, 1) =
   (7, 4, 3).
3. Available = (7, 4, 3). P4 needs (4, 3, 1) $\leq$ (7, 4, 3). Yes. Run P4. Available += (0, 0, 2) =
   (7, 4, 5).
4. Available = (7, 4, 5). P0 needs (7, 4, 3) $\leq$ (7, 4, 5). Yes. Run P0. Available += (0, 1, 0) =
   (7, 5, 5).
5. Available = (7, 5, 5). P2 needs (6, 0, 0) $\leq$ (7, 5, 5). Yes. Run P2. Available += (3, 0, 2) =
   (10, 5, 7).

Safe sequence: P1, P3, P4, P0, P2. The state is safe.

**Request from P1 for (1, 0, 2):**

Check: Need[P1] = (1, 2, 2). Request (1, 0, 2) $\leq$ Need[P1]? Yes. Request $\leq$ Available (3, 3,
2)? Yes.

Tentative state: Available = (3, 3, 2) - (1, 0, 2) = (2, 3, 0). P1: Allocation = (3, 0, 2), Need =
(0, 2, 0).

Safety check:

1. Available = (2, 3, 0). P1 needs (0, 2, 0) $\leq$ (2, 3, 0). Yes. Run P1. Available += (3, 0, 2) =
   (5, 3, 2).
2. Available = (5, 3, 2). P3 needs (0, 1, 1) $\leq$ (5, 3, 2). Yes. Run P3. Available += (2, 1, 1) =
   (7, 4, 3).
3. P4: (4, 3, 1) $\leq$ (7, 4, 3). Yes. Available = (7, 4, 5).
4. P0: (7, 4, 3) $\leq$ (7, 4, 5). Yes. Available = (7, 5, 5).
5. P2: (6, 0, 0) $\leq$ (7, 5, 5). Yes.

Safe sequence: P1, P3, P4, P0, P2. Request granted.

</details>

:::caution Common Pitfall The Banker's algorithm requires knowing the maximum resource needs of each
process in advance. In practice, processes often do not know (or cannot express) their maximum
needs. This limits the practical applicability of the Banker's algorithm. Additionally, the
algorithm has $O(m \times n^2)$ time complexity per resource request (where $m$ is the number of
resource types and $n$ is the number of processes), which may be prohibitive for large systems. :::

## 17. Problem Set

### 8.1 Process Management (Problems 1--3)

**Problem 1.** A process calls `fork()` twice in sequence (not nested). Draw the process tree and
determine how many processes exist. What if the parent calls `wait()` after each `fork()`?

**Problem 2.** Three periodic real-time tasks with computation times and periods:
$T_1 = (3, 6)$$T_2 = (2, 8)$$T_3 = (2, 12)$. Determine if they are schedulable under (a) RMS, and
(b) EDF. Draw the schedule for the first 24 time units under each algorithm.

**Problem 3.** Compare the 1:1, N:1, and M:N thread models for an application with 1000 short-lived
threads, each performing one blocking I/O operation. Which model is most appropriate and why?

### 8.2 Memory Management (Problems 4--7)

**Problem 4.** A 64-bit system uses 4 KB pages and a four-level page table with 9 bits per level.
How many bits of virtual address are supported? What is the maximum page table size for a process
that maps the entire address space?

**Problem 5.** A process has a working set of 8 pages and accesses the following page references: 1,
2, 3, 4, 1, 2, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8. How many page faults occur with LRU using (a) 8
frames, (b) 7 frames, (c) 4 frames?

**Problem 6.** Translate the virtual address 0x00003ABC4DEF in a 48-bit paging system with 4 KB
pages and four-level page tables. Page directory entries: PML4[0] = frame 0x100, PDP[3] = frame
0x200, PD[0xA] = frame 0x300, PT[0xB] = frame 0x4DE]. Give the physical address.

**Problem 7.** Explain why an inverted page table makes shared memory between processes more
difficult to implement. Describe a solution.

### 8.3 Synchronisation (Problems 8--11)

**Problem 8.** Implement a bounded buffer (size $N$) using futexes instead of POSIX mutexes and
condition variables. Show the acquire and release code.

**Problem 9.** Explain how RCU can be used to implement a lock-free linked list traversal while
another thread is modifying the list. What happens if a reader is preempted while traversing?

**Problem 10.** The following code is intended to implement a spinlock on a weakly-ordered
architecture. Identify the bug and fix it:

```c
void lock(int *l) {
    while (*l == 1);  // spin
    *l = 1;
}
void unlock(int *l) {
    *l = 0;
}
```

**Problem 11.** Three processes each need to access two resources (A and B) in different orders.
Process 1 needs A then B, Process 2 needs B then C, Process 3 needs C then A. Is deadlock possible?
If so, how would you prevent it using (a) resource ordering, and (b) the Banker's algorithm?

### 8.4 File Systems and I/O (Problems 12--15)

**Problem 12.** A file system uses 1 KB blocks and 4-byte block pointers. An inode has 10 direct
blocks, one single-indirect, one double-indirect, and one triple-indirect block. What is the maximum
file size?

**Problem 13.** Compare journaling writeback mode with ordered mode for the following scenario: a
process writes 100 KB of data to a file and then updates the file's size in the metadata. The system
crashes after the metadata is written but before all data blocks reach the disk. What is the state
of the file after recovery under each mode?

**Problem 14.** A disk has 1000 cylinders, rotational speed of 7200 RPM, and 200 sectors per track
(512 bytes each). The disk head is at cylinder 200. What is the average seek time (assuming linear
seek), average rotational latency, and the total time to read a contiguous 1 MB file starting at
cylinder 500?

**Problem 15.** Explain how ZFS ensures data integrity through copy-on-write, checksumming, and
RAID-Z. What happens when a single disk fails in a RAID-Z1 configuration?

<details>
<summary>Solution to Problem 12</summary>

Block size = 1 KB = $2^◆LB◆10◆RB◆$ bytes. Pointer size = 4 bytes.

Pointers per block: $1024 / 4 = 256$.

Direct blocks: $10 \times 1024 = 10,240$ bytes.

Single indirect: $256 \times 1024 = 262,144$ bytes ($256$ KB).

Double indirect: $256 \times 256 \times 1024 = 67,108,864$ bytes ($64$ MB).

Triple indirect: $256 \times 256 \times 256 \times 1024 = 17,179,869,184$ bytes ($16$ GB).

Maximum file size: $10,240 + 262,144 + 67,108,864 + 17,179,869,184 = 17,247,250,432$ bytes
$\approx 16.06$ GB.

If you get this wrong, revise: Section 4.

</details>

<details>
<summary>Solution to Problem 10</summary>

The bug is that the read (`while (*l == 1)`) and write (`*l = 1`) are not atomic and the
compiler/hardware may reorder them. Additionally, the read-modify-write is not atomic -- two threads
could both read 0 and then both write 1.

**Fix using GCC atomics:**

```c
void lock(int *l) {
    while (__atomic_exchange_n(l, 1, __ATOMIC_ACQUIRE)) {
        // spin (l was already 1)
    }
}
void unlock(int *l) {
    __atomic_store_n(l, 0, __ATOMIC_RELEASE);
}
```

`__atomic_exchange_n` atomically reads the old value and writes 1. The `__ATOMIC_ACQUIRE` on lock
ensures subsequent memory operations are not reordered before the lock acquisition. The
`__ATOMIC_RELEASE` on unlock ensures all prior memory operations complete before releasing the lock.

If you get this wrong, revise: Section 3.4.

</details>

## Common Pitfalls

- **Confusing processes and threads.** Processes have separate address spaces; threads share the
  same address space within a process. **Fix:** Context switching between processes is expensive
  (address space swap); between threads is cheaper.
- **Wrong deadlock condition.** Deadlock requires four conditions: mutual exclusion, hold and wait,
  no preemption, circular wait. **Fix:** Prevent deadlock by eliminating one condition; use Banker's
  algorithm for avoidance.
- **Confusing virtual memory and swapping.** Virtual memory maps logical addresses to physical;
  swapping moves entire processes between RAM and disk. **Fix:** Virtual memory allows partial
  loading (pages); swapping moves complete processes.

## Worked Examples

### Example 1: Process scheduling

**Problem.** Processes P1 (burst 6), P2 (burst 2), P3 (burst 8) arrive in order at time 0. Calculate
average waiting time using SJF.

**Solution.** SJF order: P2 (2), P1 (6), P3 (8). Waiting times: P2 = 0, P1 = 2, P3 = 8. Average =
(0 + 2 + 8)/3 = 3.33.

$\blacksquare$

### Example 2: Deadlock detection

**Problem.** Three processes P1, P2, P3 each hold one resource and request a second. Is there a
deadlock?

**Solution.** P1 holds R1, requests R2. P2 holds R2, requests R3. P3 holds R3, requests R1. This
forms a cycle (circular wait), so there is a deadlock.

$\blacksquare$

## Summary

- Process management: scheduling algorithms (FCFS, SJF, Round Robin), deadlock (conditions,
  prevention, avoidance, detection).
- Memory management: paging, segmentation, virtual memory, page replacement (LRU, FIFO, optimal).
- File systems: directory structure, allocation methods (contiguous, linked, indexed).
- Synchronisation: semaphores, monitors, critical sections; Peterson's algorithm for two processes.
