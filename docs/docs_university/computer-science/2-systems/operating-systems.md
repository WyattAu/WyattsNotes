---
title: Operating Systems
description:
  'University Computer Science Operating Systems notes covering key definitions, core concepts,
  worked examples, and practice questions for focused preparation.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

## 1. Processes and Threads

### 1.1 Process

A **process** is an instance of a program in execution. Each process has its own:

- **Address space** (code, data, stack, heap)
- **Registers** (PC, SP, etc.)
- **Open files and I/O resources**
- **PID** (process identifier)

**Process states:**

```
New → Ready → Running → Waiting → Ready → ... → Terminated
                ↑                          ↑
                └── (scheduler dispatch)  ──┘
```

### 1.2 Process Control Block (PCB)

The OS maintains a PCB for each process containing:

| Field           | Description                     |
| --------------- | ------------------------------- |
| PID             | Process identifier              |
| State           | Current state (ready, running…) |
| PC              | Program counter                 |
| Registers       | CPU register values             |
| Memory limits   | Base/limit or page table        |
| I/O status      | Open files, devices             |
| Scheduling info | Priority, queues                |

### 1.3 Context Switch

Saving the state of the current process and loading the state of the next:

```
CONTEXT_SWITCH(old_process, new_process):
    save old_process.PC, registers, SP to PCB
    update old_process.state = READY (or WAITING)
    load new_process.PC, registers, SP from PCB
    update new_process.state = RUNNING
    transfer control to new_process
```

**Cost:** In most cases $O(\mu s)$ to $O(ms)$, includes TLB flush overhead.

### 1.4 Threads

A **thread** is a lightweight unit of execution within a process. Threads share the process's
address space but have their own:

- Stack
- Registers (PC, SP)
- Thread-local storage

| Aspect         | Process          | Thread                   |
| -------------- | ---------------- | ------------------------ |
| Creation cost  | High             | Low                      |
| Context switch | High (TLB flush) | Low (same address space) |
| Memory         | Separate         | Shared                   |
| Communication  | IPC required     | Shared memory            |
| Failure        | Independent      | One crash kills all      |

**Types:**

- **Kernel threads:** Managed by the OS (full concurrency, slower switching).
- **User threads:** Managed by a library (fast, but blocking one blocks all unless M:N model).
- **M:N model:** $M$ user threads mapped to $N$ kernel threads.

## 2. CPU Scheduling

### 2.1 Scheduling Criteria

| Criterion       | Goal                            |
| --------------- | ------------------------------- |
| CPU utilization | Keep CPU busy                   |
| Throughput      | Maximize processes completed    |
| Turnaround time | Minimize (completion - arrival) |
| Waiting time    | Minimize time in ready queue    |
| Response time   | Minimize time to first response |
| Fairness        | Equal share for equal priority  |

### 2.2 First-Come, First-Served (FCFS)

```
FCFS:
    ready_queue = FIFO queue
    while ready_queue not empty:
        process = DEQUEUE(ready_queue)
        run process to completion
```

**Non-preemptive.** Simple but suffers from the **convoy effect**: short processes wait behind long
ones.

### 2.3 Shortest Job First (SJF)

```
SJF:
    while processes to run:
        p = process in ready_queue with shortest next CPU burst
        run p to completion
```

**Optimal** (minimizes average waiting time), but requires knowing burst times in advance.

**Shortest Remaining Time First (SRTF):** Preemptive version—when a new process arrives with shorter
remaining time, preempt current process.

### 2.4 Round Robin (RR)

```
ROUND_ROBIN(ready_queue, time_quantum):
    while ready_queue not empty:
        p = DEQUEUE(ready_queue)
        run p for min(time_quantum, remaining_time(p))
        if p is not finished:
            ENQUEUE(ready_queue, p)
```

**Preemptive.** Fair allocation. Choosing time quantum:

| Quantum       | Effect                       |
| ------------- | ---------------------------- |
| Too small     | Excessive context switching  |
| Too large     | Degenerates to FCFS          |
| Rule of thumb | ~10-100x context switch time |

### 2.5 Priority Scheduling

```
PRIORITY_SCHEDULE(ready_queue):
    while ready_queue not empty:
        p = process with highest priority in ready_queue
        run p (preemptive or non-preemptive)
```

**Problem: Starvation** — low-priority processes may never execute.

**Solution: Aging** — gradually increase priority of waiting processes.

### 2.6 Multilevel Feedback Queue (MLFQ)

```
MLFQ:
    maintain multiple queues Q0, Q1, ..., Qn
    Q0: highest priority, RR with quantum q0
    Q1: lower priority, RR with quantum q1 = 2*q0
    ...
    Qn: FCFS (lowest priority)

    new process enters Q0
    if process uses full quantum: demote to next lower queue
    if process yields before quantum: stays in current queue
    CPU always runs process from highest non-empty queue
```

**Advantage:** Automatically favors I/O-bound (interactive) processes over CPU-bound ones.

### 2.7 Comparison

| Algorithm | Preemptive | Starvation | Fairness | Avg Waiting |
| --------- | ---------- | ---------- | -------- | ----------- |
| FCFS      | No         | No         | High     | Poor        |
| SJF       | Optional   | Yes        | Low      | Optimal     |
| RR        | Yes        | No         | High     | Moderate    |
| Priority  | Optional   | Yes        | Low      | Varies      |
| MLFQ      | Yes        | With aging | High     | Good        |

## 3. Synchronization

### 3.1 Race Conditions

A **race condition** occurs when multiple threads access shared data concurrently and the outcome
depends on the execution order.

**Example (increment):**

```
// Thread 1         // Thread 2
load r1, x         load r2, x
add r1, 1          add r2, 1
store r1, x        store r2, x
// x increased by 1, not 2!
```

### 3.2 Critical Section

**Requirements for a correct solution:**

1. **Mutual exclusion:** At most one thread in the critical section at a time.
2. **Progress:** If no thread is in the critical section and some want to enter, only those not in
   the remainder section decide.
3. **Bounded waiting:** No thread waits forever to enter.

### 3.3 Mutex (Locks)

```
// Using a mutex:
mutex.lock()       // acquire
// critical section
mutex.unlock()     // release
```

**Implementations:**

- **Spinlock:** Busy-wait in a loop checking a flag.
- **Sleeping mutex:** Thread blocks and is placed on a wait queue.

```
SPINLOCK_ACQUIRE(lock):
    while atomic_test_and_set(lock):
        // spin (busy wait)
    // lock acquired

SPINLOCK_RELEASE(lock):
    atomic_clear(lock)
```

### 3.4 Semaphores

A **semaphore** is an integer variable $S$ with atomic operations:

```
WAIT(S):          // P(S), down
    while S <= 0:  // busy wait
        // wait
    S -= 1

SIGNAL(S):        // V(S), up
    S += 1
    // wake up one waiting process
```

**Types:**

- **Binary semaphore:** $S \in \{0, 1\}$ — acts like a mutex.
- **Counting semaphore:** $S \geq 0$ — controls access to a resource with multiple instances.

### 3.5 Classic Synchronization Problems

**Producer-Consumer (Bounded Buffer):**

```
mutex = 1
empty = N   // counting semaphore: empty slots
full = 0    // counting semaphore: filled slots

PRODUCER:
    produce item
    WAIT(empty)
    WAIT(mutex)
    add item to buffer
    SIGNAL(mutex)
    SIGNAL(full)

CONSUMER:
    WAIT(full)
    WAIT(mutex)
    remove item from buffer
    SIGNAL(mutex)
    SIGNAL(empty)
    consume item
```

**Readers-Writers:**

```
rw_mutex = 1    // protects shared data
read_count = 0
rc_mutex = 1    // protects read_count

READER:
    WAIT(rc_mutex)
    read_count += 1
    if read_count == 1: WAIT(rw_mutex)
    SIGNAL(rc_mutex)
    // read data
    WAIT(rc_mutex)
    read_count -= 1
    if read_count == 0: SIGNAL(rw_mutex)
    SIGNAL(rc_mutex)

WRITER:
    WAIT(rw_mutex)
    // write data
    SIGNAL(rw_mutex)
```

**Dining Philosophers:**

```
forks[5] = {1, 1, 1, 1, 1}  // binary semaphores

PHILOSOPHER(i):
    while true:
        think()
        WAIT(forks[i])           // pick up left
        WAIT(forks[(i+1) % 5])  // pick up right
        eat()
        SIGNAL(forks[i])
        SIGNAL(forks[(i+1) % 5])
```

**Deadlock risk:** All pick up left fork simultaneously. Fix: pick up lower-numbered fork first, or
allow at most 4 philosophers to eat.

### 3.6 Monitors

A **monitor** is a high-level synchronization construct encapsulating shared data and operations.

```
monitor BoundedBuffer:
    buffer[0..N-1]
    count = 0, in = 0, out = 0
    condition notFull, notEmpty

    procedure INSERT(item):
        while count == N:
            wait(notFull)
        buffer[in] = item
        in = (in + 1) % N
        count += 1
        signal(notEmpty)

    procedure REMOVE():
        while count == 0:
            wait(notEmpty)
        item = buffer[out]
        out = (out + 1) % N
        count -= 1
        signal(notFull)
        return item
```

### 3.7 Condition Variables

Associated with a mutex. Operations:

```
WAIT(cond, mutex):    // atomically releases mutex, blocks, re-acquires on wake
SIGNAL(cond):         // wakes one waiting thread
BROADCAST(cond):     // wakes all waiting threads
```

## 4. Deadlock

### 4.1 Conditions for Deadlock

Deadlock requires all four conditions simultaneously (**Coffman conditions**):

1. **Mutual exclusion:** At least one resource is non-sharable.
2. **Hold and wait:** A process holds resources while waiting for others.
3. **No preemption:** Resources cannot be forcibly taken.
4. **Circular wait:** A cycle of processes, each waiting for a resource held by the next.

### 4.2 Resource-Allocation Graph

A directed graph where:

- **Vertices:** Processes (circles) and resources (squares).
- **Edges:** Request edge $P_i \to R_j$ (process $i$ requests resource $j$); Assignment edge
  $R_j \to P_i$ (resource $j$ is held by process $i$).

**Deadlock exists** iff the graph contains a cycle and each resource has only one instance.

### 4.3 Deadlock Prevention

Eliminate one of the four conditions:

| Condition        | Prevention Strategy                      |
| ---------------- | ---------------------------------------- |
| Mutual exclusion | Not possible for non-sharable resources  |
| Hold and wait    | Require all resources before execution   |
| No preemption    | Preempt resources from waiting processes |
| Circular wait    | Impose total ordering on resource types  |

### 4.4 Deadlock Avoidance: Banker's Algorithm

**Safe state:** A state where there exists a sequence $\langle P_1, P_2, \ldots, P_n \rangle$ such
that each $P_i$ can obtain all needed resources and terminate.

```
BANKERS(Available, Max, Allocation, Need):
    // Need[i] = Max[i] - Allocation[i]
    Work = Available
    Finish = [false, ..., false]

    repeat:
        found = false
        for i = 0 to n-1:
            if not Finish[i] and Need[i] <= Work:
                Work = Work + Allocation[i]
                Finish[i] = true
                found = true
    until not found

    if all Finish[i] == true:
        return "safe state"
    else:
        return "unsafe state (possible deadlock)"
```

**Time:** $O(m \times n^2)$ where $m$ = resource types, $n$ = processes.

### 4.5 Deadlock Detection

Similar to Banker's, but checks if any process is stuck (not whether granting a request leads to a
safe state).

```
DEADLOCK_DETECT(Available, Allocation, Request):
    Work = Available
    for each i:
        if Allocation[i] != 0:
            Work = Work + Allocation[i]  // release all allocated resources

    repeat:
        found = false
        for i = 0 to n-1:
            if Request[i] <= Work:
                Work = Work + Allocation[i]
                mark i as done
                found = true
    until not found

    // unmarked processes are deadlocked
```

### 4.6 Recovery from Deadlock

- **Process termination:** Kill deadlocked processes (one at a time, check after each).
- **Resource preemption:** Take resources from deadlocked processes and give to others.

## 5. Memory Management

### 5.1 Address Binding

| Binding time | Scheme             | Flexibility |
| ------------ | ------------------ | ----------- |
| Compile time | Absolute addresses | None        |
| Load time    | Relocatable        | Low         |
| Run time     | Dynamic (MMU)      | High        |

**Logical address:** Generated by the CPU (program view). **Physical address:** Actual memory
location (hardware view).

**MMU (Memory Management Unit):** Translates logical to physical addresses at runtime.

### 5.2 Contiguous Allocation

- **Fixed partitioning:** Memory divided into fixed-size blocks. Internal fragmentation.
- **Variable partitioning:** Blocks allocated as needed. External fragmentation.

**Allocation strategies:**

| Strategy  | Description                         |
| --------- | ----------------------------------- |
| First-fit | Allocate first block large enough   |
| Best-fit  | Allocate smallest block that fits   |
| Worst-fit | Allocate largest block              |
| Next-fit  | Continue from last allocation point |

**Compaction:** Relocate processes to consolidate free space. Requires dynamic relocation.

### 5.3 Paging

Divide physical memory into **frames** of size $F$ bytes. Divide logical memory into **pages** of
the same size.

**Page table:** Maps page numbers to frame numbers.

```
logical address:  | page number (p) | offset (d) |
physical address: | frame number (f) | offset (d) |

f = page_table[p]
physical_address = f * F + d
```

**No external fragmentation.** Internal fragmentation: average $\frac{F}{2}$ bytes per process.

### 5.4 Segmentation

Divide program into logical segments (code, data, stack, heap). Each segment has a base and limit.

```
logical address: | segment number (s) | offset (d) |
check: 0 <= d < limit[s]
physical_address = base[s] + d
```

**No internal fragmentation.** External fragmentation possible.

### 5.5 Segmented Paging

Combine segmentation and paging: segment table maps to page tables, which map to frames.

```
address: | segment | page | offset |
```

### 5.6 TLB (Translation Lookaside Buffer)

A hardware cache for page table entries.

```
TLB_LOOKUP(page_number):
    for each entry in TLB:
        if entry.page == page_number and entry.valid:
            return entry.frame
    // TLB miss: consult page table
    frame = page_table[page_number]
    TLB_INSERT(page_number, frame)
    return frame
```

**Hit ratio:** Fraction of accesses resolved by TLB (in most cases 95-99%).

**Effective access time:**

$$\text{EAT} = h \cdot t_{\text{TLB}} + (1 - h) \cdot (t_{\text{mem}} + t_{\text{TLB}})$$

With TLB + two-level page table:
$\text{EAT} = h(t_{\text{TLB}} + t_{\text{mem}}) + (1-h)(t_{\text{TLB}} + 2 \cdot t_{\text{mem}})$.

### 5.7 Multi-Level Page Tables

For 32-bit addresses with 4KB pages: $2^{20}$ page table entries. With 4-byte entries: 4MB per
process.

**Two-level page table:** Outer page table (page directory) + inner page tables. Only allocate inner
tables for pages in use.

For 64-bit systems: often 4-level page tables (PGD → PUD → PMD → PTE).

## 6. Virtual Memory

### 6.1 Concept

**Virtual memory** allows execution of processes not completely in physical memory. Uses **demand
paging**: pages loaded only when accessed.

```
PAGE_FAULT_HANDLER(page_number):
    if page is not in backing store: error (segfault)
    find a free frame (or use page replacement)
    read page from backing store into frame
    update page table
    restart instruction
```

### 6.2 Page Replacement Algorithms

**Optimal (OPT):** Replace the page that will not be used for the longest time in the future.
Theoretically optimal, not implementable.

```
OPTIMAL(pages, frames):
    frame_table = []
    for each page in pages:
        if page in frame_table:
            continue
        if len(frame_table) < frames:
            frame_table.append(page)
        else:
            replace = page in frame_table with furthest future use
            frame_table[replace] = page
```

**FIFO:** Replace the oldest page. Simple but may suffer from Belady's anomaly.

```
FIFO(pages, frames):
    queue = []
    for each page in pages:
        if page in queue: continue
        if len(queue) == frames: queue.pop(0)
        queue.append(page)
```

**LRU (Least Recently Used):** Replace the page not used for the longest time.

```
LRU(pages, frames):
    // Use a stack or counter per page
    for each page in pages:
        if page in stack:
            move to top
        elif len(stack) < frames:
            push page
        else:
            pop bottom, push page
```

**Time:** $O(n)$ per access with a stack. Hardware implementations use reference bits.

### 6.3 Page Replacement Comparison

| Algorithm     | Belady's Anomaly | Stack Property | Practical? |
| ------------- | ---------------- | -------------- | ---------- |
| Optimal       | No               | Yes            | No         |
| LRU           | No               | Yes            | Yes        |
| FIFO          | Yes              | No             | Yes        |
| Clock         | No (approx LRU)  | No             | Yes        |
| Second-chance | No (approx LRU)  | No             | Yes        |

### 6.4 Thrashing

When a process spends more time paging than executing.

$$\text{Thrashing occurs when } \sum \text{working sets} > \text{available frames}$$

**Working set model:** $W(t, \Delta) =$ set of pages referenced in the last $\Delta$ memory
references.

**Solution:** Reduce degree of multiprogramming or increase physical memory.

### 6.5 Allocation Algorithms

**Equal allocation:** $f_i = m / n$ frames per process ($m$ = total frames, $n$ = processes).

**Proportional allocation:** $f_i = \frac{s_i}{\sum s_j} \cdot m$ where $s_i$ = size of process $i$.

**Local vs. global replacement:**

- **Local:** Replace from this process's frames only.
- **Global:** Replace from any process's frames (more flexible, harder to predict).

## 7. Common Pitfalls

1. **Deadlock from wrong lock ordering.** Always acquire locks in a consistent global order to
   prevent circular wait. Inconsistent ordering is the most common cause of deadlocks in practice.

2. **Using semaphores as mutexes without understanding blocking semantics.** A binary semaphore used
   for mutual exclusion behaves differently from a mutex when a thread that already holds it tries
   to acquire it again (deadlock vs. recursive behavior).

3. **Ignoring Belady's anomaly with FIFO.** More frames can cause more page faults with FIFO. If
   guaranteed optimal behavior is needed, use LRU or a stack-based algorithm.

4. **Starvation in priority scheduling.** Without aging, low-priority processes may never execute.
   Always implement aging or a time-slicing mechanism.

5. **Context switch overhead.** Switching too frequently (tiny time quantum in RR) wastes CPU time.
   The quantum should be at least an order of magnitude larger than the context switch time.

6. **Race conditions from incorrect synchronization.** Protecting the critical section is not enough
   if shared variables are accessed outside the critical section. Every shared variable access must
   be protected.

7. **TLB coherence issues on context switch.** Process-specific TLB entries must be invalidated or
   tagged with an address space ID (ASID) on context switch to prevent one process from using
   another's translations.

## Worked Examples

### Example 1: CPU Scheduling -- Round Robin

**Problem:** Four processes arrive at time 0 with burst times: P1=8, P2=4, P3=2, P4=1 (time quantum
= 2). Calculate turnaround and waiting times. **Solution:** Gantt: P1(0-2), P2(2-4), P3(4-6),
P4(6-7), P1(7-9), P2(9-11), P1(11-13), P1(13-15). Turnaround: P1=15, P2=11, P3=6, P4=7. Waiting =
turnaround - burst: P1=7, P2=7, P3=4, P4=6. Average waiting = 6.0.

### Example 2: Deadlock Detection with Banker's Algorithm

**Problem:** A system has 3 resource types and 5 processes. Available = (3, 3, 2). Max matrix shows
P1=(7,5,3), P2=(3,2,2), P3=(9,0,2), P4=(2,2,2), P5=(4,3,3). Allocation: P1=(0,1,0), P2=(2,0,0),
P3=(3,0,2), P4=(2,1,1), P5=(0,0,2). Is the system in a safe state? **Solution:** Need = Max -
Allocation: P1=(7,4,3), P2=(1,2,2), P3=(6,0,0), P4=(0,1,1), P5=(4,3,1). Available = (3,3,2). P2 can
be satisfied: Available + P2 alloc = (3,3,2)+(2,0,0) = (5,3,2). Then P4: (5,3,2)+(2,1,1)=(7,4,3).
Then P1: (7,4,3)+(0,1,0)=(7,5,3). Then P3: (7,5,3)+(3,0,2)=(10,5,5). Then P5. Safe sequence: P2, P4,
P1, P3, P5.

## Summary

- **Processes** are heavyweight units with separate address spaces; **threads** are lightweight and
  share memory within a process.
- **Scheduling algorithms** (FCFS, SJF, RR, priority, MLFQ) trade off throughput, latency, and
  fairness.
- **Synchronization** uses mutexes, semaphores, monitors, and condition variables to enforce mutual
  exclusion and coordinate threads.
- **Deadlock** requires four conditions simultaneously; prevented by eliminating one, avoided with
  Banker's algorithm, or detected and recovered from.
- **Paging** eliminates external fragmentation; **segmentation** preserves logical structure.
  **TLB** caches translations for fast address resolution.
- **Virtual memory** (demand paging) allows programs larger than physical memory. Page replacement
  (OPT, LRU, FIFO, Clock) minimizes page faults.

## Cross-References

| Topic               | Link                                                          |
| ------------------- | ------------------------------------------------------------- |
| Databases           | [View](/docs/university/computer-science/databases)           |
| Distributed Systems | [View](/docs/university/computer-science/distributed-systems) |
| Networking          | [View](/docs/university/computer-science/networking)          |
