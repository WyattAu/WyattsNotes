---
title: Operating Systems
date: 2026-04-24T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: operating-systems
---

## 1. Introduction to Operating Systems

### 1.1 Role of the Operating System

An operating system (OS) is system software that manages hardware resources and provides services
to application programs. It serves as an intermediary between users and the underlying hardware.

**Core responsibilities:**

- **Process management:** Create, schedule, and terminate processes.
- **Memory management:** Allocate and protect memory; implement virtual memory.
- **File system management:** Organise, store, retrieve, and protect data.
- **I/O management:** Control and mediate access to I/O devices.
- **Protection and security:** Enforce access controls and resource isolation.

### 1.2 Kernel Architectures

**Monolithic Kernel.** All OS services (file system, device drivers, network stack, scheduler) run
in a single address space in kernel mode. Examples: Linux, FreeBSD.

- *Advantage:* Low overhead from function-call latency.
- *Disadvantage:* A bug in any component can crash the entire system.

**Microkernel.** Only essential services (IPC, scheduling, basic memory management) run in kernel
mode. Other services run in user mode as separate processes. Examples: MINIX 3, seL4, QNX.

- *Advantage:* Fault isolation; easier to verify formally.
- *Disadvantage:* Higher overhead from message passing between user-mode servers.

**Hybrid Kernel.** A pragmatic compromise combining monolithic and microkernel ideas. Some
non-essential services run in kernel mode for performance, but the architecture is more modular
than a pure monolith. Examples: Windows NT, macOS XNU.

### 1.3 System Calls

System calls provide the interface between user-mode applications and kernel-mode OS services. They
are invoked via software interrupts (e.g., `syscall` on x86-64, `svc` on ARM).

**Categories:**

| Category        | Examples                                 |
| --------------- | ---------------------------------------- |
| Process control | `fork`, `exec`, `wait`, `exit`           |
| File management | `open`, `read`, `write`, `close`         |
| Device I/O      | `ioctl`, `read`, `write`                 |
| Communication   | `pipe`, `shmget`, `mmap`, `socket`       |
| Information     | `getpid`, `stat`, `sysconf`              |
| Protection      | `chmod`, `chown`, `setuid`               |

**System call overhead.** A transition from user mode to kernel mode involves saving user
registers, switching to the kernel stack, validating arguments, executing kernel code, and
returning. Typical overhead: $100\mathrm{--}1000$ ns on modern hardware.

## 2. Process Management

### 2.1 Process Concept

A **process** is an instance of a program in execution. The OS maintains a **process control block
(PCB)** for each process:

| Field             | Description                                |
| ----------------- | ------------------------------------------ |
| PID               | Unique process identifier                   |
| Process state     | Running, ready, blocked, etc.              |
| Program counter   | Address of next instruction                |
| Registers         | CPU register contents                      |
| Memory limits     | Base/limit registers or page table pointer |
| Open files        | List of open file descriptors              |
| I/O status        | I/O devices allocated and their status     |
| Scheduling info   | Priority, scheduling queue, CPU usage      |

**Process states.** Processes transition through states:

$$\mathrm{New} \to \mathrm{Ready} \to \mathrm{Running} \to \mathrm{Terminated}$$

$$\mathrm{Running} \to \mathrm{Blocked} \to \mathrm{Ready}$$

The scheduler dispatches processes from **ready** to **running**. A running process may be
**preempted** back to ready, or may **block** on I/O or a synchronisation event.

### 2.2 Threads

A **thread** is the fundamental unit of CPU execution. Multiple threads within a process share the
same address space, open files, and other resources, but each has its own program counter,
registers, and stack.

**User-level threads.** Managed entirely by a user-space library (e.g., POSIX `pthread`). The OS is
unaware of them.

- *Advantage:* Fast creation and switching (no kernel involvement).
- *Disadvantage:* One blocking system call blocks all threads in the process.

**Kernel-level threads.** Managed by the OS kernel (e.g., Linux `clone()`, Windows threads).

- *Advantage:* True parallelism on multiprocessor systems; blocking one thread does not block others.
- *Disadvantage:* Slower creation and context switch (kernel trap required).

**Thread models:**

| Model       | User:Kernel | Characteristics                              |
| ----------- | ----------- | -------------------------------------------- |
| Many-to-one | $m:1$       | All user threads map to one kernel thread    |
| One-to-one  | $1:1$       | Each user thread maps to a kernel thread     |
| Many-to-many| $m:n$       | User threads multiplexed onto kernel threads |

Linux uses a $1:1$ model by default.

### 2.3 CPU Scheduling

The CPU scheduler decides which process runs next from the set of ready processes.

**Scheduling criteria:**

- **CPU utilisation:** Keep the CPU busy ($\mathrm{utilisation} = 1 - p$ where $p$ is the I/O wait
  probability).
- **Throughput:** Number of processes completed per time unit.
- **Turnaround time:** $T_{\mathrm{turnaround}} = T_{\mathrm{completion}} - T_{\mathrm{arrival}}$.
- **Waiting time:** Time spent in the ready queue.
- **Response time:** Time from submission to first response.

### 2.4 Scheduling Algorithms

**First-Come, First-Served (FCFS).** Non-preemptive. Processes scheduled in arrival order. Suffers
from the **convoy effect**: short processes waiting behind a long process.

**Shortest Job First (SJF).** Non-preemptive. Schedule the process with the shortest next CPU burst.
Provably optimal for average waiting time. Requires burst length estimation via exponential
averaging: $\tau_{n+1} = \alpha t_n + (1 - \alpha) \tau_n$.

**Shortest Remaining Time First (SRTF).** Preemptive SJF. If a new process arrives with a shorter
remaining burst, preempt the current process.

**Round Robin (RR).** Each process gets a time quantum $q$. If not finished within $q$, preempted and
placed at the back of the ready queue. If $q$ is large, RR degenerates to FCFS. Typical $q$:
$10\mathrm{--}100$ ms.

**Priority Scheduling.** Highest-priority ready process runs. Can be preemptive or non-preemptive.
Risk of **starvation**; solved by **aging** (gradually increase priority of waiting processes).

**Multilevel Feedback Queue (MLFQ).** Partition the ready queue into multiple priority levels.
Processes that use too much CPU are demoted; processes that wait are promoted. The most general and
widely used approach. Linux CFS uses a variant with red-black trees keyed on virtual runtime.

**Theorem 2.1.** SJF gives the minimum average waiting time for a given set of processes.

*Proof.* Consider any schedule that is not SJF. There exist consecutive processes $A$ and $B$ where
$A$ has a longer burst than $B$ but is scheduled first. Swapping $A$ and $B$ reduces the waiting
time of $B$ by the burst time of $A$ and increases the waiting time of $A$ by the burst time of
$B$. Since $B$'s burst is shorter, the net change reduces the average. $\blacksquare$

### 2.5 Scheduling Algorithm Pseudocode

**Round Robin Scheduling:**

```c
#define MAX_PROCESSES 128

typedef struct {
    int pid;
    int burst_remaining;
    int arrival_time;
    int priority;
} Process;

void round_robin(Process processes[], int n, int quantum) {
    Queue ready_queue;
    int current_time = 0;
    int completed = 0;

    while (completed < n) {
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time
                && processes[i].burst_remaining > 0
                && !is_in_queue(&ready_queue, processes[i].pid)) {
                enqueue(&ready_queue, &processes[i]);
            }
        }
        if (is_empty(&ready_queue)) {
            current_time++;
            continue;
        }
        Process *p = dequeue(&ready_queue);
        int exec_time = min(p->burst_remaining, quantum);
        p->burst_remaining -= exec_time;
        current_time += exec_time;
        if (p->burst_remaining > 0) {
            enqueue(&ready_queue, p);
        } else {
            completed++;
            record_turnaround(p->pid, current_time - p->arrival_time);
        }
    }
}
```

**Priority Scheduling (preemptive):**

```c
void priority_schedule(Process processes[], int n) {
    int current_time = 0;
    int completed = 0;
    int shortest_priority = INT_MAX;
    int idx = -1;

    while (completed < n) {
        shortest_priority = INT_MAX;
        idx = -1;
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time
                && processes[i].burst_remaining > 0
                && processes[i].priority < shortest_priority) {
                shortest_priority = processes[i].priority;
                idx = i;
            }
        }
        if (idx == -1) {
            current_time++;
            continue;
        }
        processes[idx].burst_remaining--;
        current_time++;
        if (processes[idx].burst_remaining == 0) {
            completed++;
            record_turnaround(processes[idx].pid,
                              current_time - processes[idx].arrival_time);
        }
    }
}
```

**Multilevel Feedback Queue:**

```c
#define NUM_LEVELS 3
#define QUANTUMS {8, 16, 32}

void mlfq_schedule(Process processes[], int n, int quantums[]) {
    Queue queues[NUM_LEVELS];
    int current_time = 0;
    int completed = 0;

    while (completed < n) {
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time
                && processes[i].burst_remaining > 0
                && !is_any_queue(&queues, processes[i].pid)) {
                enqueue(&queues[0], &processes[i]);
            }
        }
        int level;
        for (level = 0; level < NUM_LEVELS; level++) {
            if (!is_empty(&queues[level])) break;
        }
        if (level == NUM_LEVELS) {
            current_time++;
            continue;
        }
        Process *p = dequeue(&queues[level]);
        int exec_time = min(p->burst_remaining, quantums[level]);
        p->burst_remaining -= exec_time;
        current_time += exec_time;
        if (p->burst_remaining > 0 && level + 1 < NUM_LEVELS) {
            enqueue(&queues[level + 1], p);
        } else if (p->burst_remaining > 0) {
            enqueue(&queues[level], p);
        } else {
            completed++;
            record_turnaround(p->pid, current_time - p->arrival_time);
        }
    }
}
```

### 2.6 Inter-Process Communication

Processes may need to communicate and synchronise. IPC mechanisms:

**Shared memory.** A region of memory mapped into multiple address spaces. Fast, but requires
explicit synchronisation.

```c
int shmid = shmget(SHM_KEY, SHM_SIZE, IPC_CREAT | 0666);
char *shm_ptr = (char *)shmat(shmid, NULL, 0);
shm_ptr[offset] = data;
shmdt(shm_ptr);
```

**Message passing.** Processes exchange messages through the OS. Operations: `send(dest, msg)` and
`receive(src, msg)`. Can be **direct** (named processes) or **indirect** (via mailboxes/ports).

| Property       | Shared Memory    | Message Passing           |
| -------------- | ---------------- | ------------------------- |
| Speed          | Fast             | Slower (kernel mediation) |
| Synchronisation| Required         | Built-in                  |
| Kernel use     | Setup only       | Every message             |
| Scalability    | Single machine   | Can be distributed        |

**Pipes.** Unidirectional data channel. `pipe()` creates a pipe; `fork()` inherits file descriptors.
Named pipes (`mkfifo`) allow unrelated processes to communicate.

**Signals.** Asynchronous notifications (integer payload only). Common: `SIGTERM`, `SIGKILL`,
`SIGSEGV`, `SIGCHLD`.

## 3. Synchronisation

### 3.1 The Critical Section Problem

Consider $n$ processes sharing a resource. The **critical section** is the code segment accessing the
resource. A correct solution must satisfy:

1. **Mutual exclusion:** At most one process executes in its critical section at any time.
2. **Progress:** If no process is in its critical section and some wish to enter, only those not in
   their remainder section participate, and the decision cannot be postponed indefinitely.
3. **Bounded waiting:** A bound exists on the number of times other processes enter their critical
   sections after a process has requested entry.

### 3.2 Hardware Support

**Test-and-Set.** Atomic read-and-set instruction:

```c
boolean test_and_set(boolean *target) {
    boolean rv = *target;
    *target = true;
    return rv;
}
```

**Compare-and-Swap (CAS).** Atomically compare and conditionally write:

```c
boolean compare_and_swap(int *value, int expected, int new_value) {
    int temp = *value;
    if (*value == expected) {
        *value = new_value;
    }
    return temp == expected;
}
```

These instructions are the foundation for lock-free and wait-free data structures.

### 3.3 Mutexes

A **mutex** provides exclusive access to a shared resource.

```c
pthread_mutex_t lock;
pthread_mutex_init(&lock, NULL);

pthread_mutex_lock(&lock);
// critical section
pthread_mutex_unlock(&lock);
pthread_mutex_destroy(&lock);
```

**Spinlocks.** A mutex that busy-waits. Useful when the expected wait time is shorter than the
context-switch overhead.

```c
void spinlock_acquire(volatile int *lock) {
    while (__atomic_test_and_set(lock, __ATOMIC_ACQUIRE)) {
        // busy wait
    }
}

void spinlock_release(volatile int *lock) {
    __atomic_clear(lock, __ATOMIC_RELEASE);
}
```

### 3.4 Semaphores

A **semaphore** is an integer variable $S$ accessed only through two atomic operations:

- **Wait (P):** $P(S)$: while $S \leq 0$ do no-op; $S \leftarrow S - 1$.
- **Signal (V):** $V(S)$: $S \leftarrow S + 1$.

**Counting semaphore:** $S$ takes any non-negative integer. Controls access to a resource with
multiple instances.

**Binary semaphore:** $S \in \{0, 1\}$. Functionally similar to a mutex, but can be signalled by any
process (not just the owner).

```c
sem_t mutex;
sem_init(&mutex, 0, 1);

sem_wait(&mutex);
// critical section
sem_post(&mutex);
```

**Theorem 3.1.** Semaphores can implement mutual exclusion correctly if initialised to 1 and used
with `wait` on entry and `signal` on exit.

*Proof.* If the semaphore is 1, the first `wait` decrements it to 0 and enters. Any concurrent
`wait` finds $S = 0$ and blocks. When the first process signals, $S$ becomes 1, waking exactly one
blocked process. $\blacksquare$

### 3.5 Monitors and Condition Variables

A **monitor** is a high-level synchronisation construct encapsulating shared data and operations,
allowing only one process to execute within it at any time.

A **condition variable** allows a process to wait for a condition inside a monitor:

```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
int buffer_count = 0;

// Producer
pthread_mutex_lock(&mutex);
while (buffer_count == BUFFER_SIZE) {
    pthread_cond_wait(&cond, &mutex);
}
buffer_count++;
pthread_cond_signal(&cond);
pthread_mutex_unlock(&mutex);

// Consumer
pthread_mutex_lock(&mutex);
while (buffer_count == 0) {
    pthread_cond_wait(&cond, &mutex);
}
buffer_count--;
pthread_cond_signal(&cond);
pthread_mutex_unlock(&mutex);
```

`pthread_cond_wait` atomically releases the mutex and blocks. On wakeup, it re-acquires the mutex.

### 3.6 Classic Synchronisation Problems

**Producer-Consumer (Bounded Buffer).** A producer writes items to a shared buffer of size $N$; a
consumer reads them.

```c
sem_t empty, full, mutex;
sem_init(&empty, 0, N);
sem_init(&full, 0, 0);
sem_init(&mutex, 0, 1);

void producer() {
    while (true) {
        item = produce_item();
        sem_wait(&empty);
        sem_wait(&mutex);
        insert_item(item);
        sem_post(&mutex);
        sem_post(&full);
    }
}

void consumer() {
    while (true) {
        sem_wait(&full);
        sem_wait(&mutex);
        item = remove_item();
        sem_post(&mutex);
        sem_post(&empty);
        consume_item(item);
    }
}
```

**Readers-Writers.** Multiple readers access concurrently; writers require exclusive access.

```c
sem_t rw_mutex, mutex;
int read_count = 0;
sem_init(&rw_mutex, 0, 1);
sem_init(&mutex, 0, 1);

void writer() {
    sem_wait(&rw_mutex);
    // write to shared data
    sem_post(&rw_mutex);
}

void reader() {
    sem_wait(&mutex);
    read_count++;
    if (read_count == 1) sem_wait(&rw_mutex);
    sem_post(&mutex);
    // read shared data
    sem_wait(&mutex);
    read_count--;
    if (read_count == 0) sem_post(&rw_mutex);
    sem_post(&mutex);
}
```

**Dining Philosophers.** Five philosophers, five forks between them. Each needs two forks to eat.
Naive solution (one semaphore per fork) deadlocks when all pick up their left fork.

Solutions:

1. **Resource hierarchy:** Pick up lower-numbered fork first.
2. **Arbitrator:** A single semaphore limits concurrent eaters to four.
3. **Chandy-Misra:** Forks are "owned" by a philosopher; others request via messages.

```c
sem_t forks[5];
sem_t room;
for (int i = 0; i < 5; i++) sem_init(&forks[i], 0, 1);
sem_init(&room, 0, 4);

void philosopher(int i) {
    while (true) {
        think();
        sem_wait(&room);
        sem_wait(&forks[i]);
        sem_wait(&forks[(i + 1) % 5]);
        eat();
        sem_post(&forks[(i + 1) % 5]);
        sem_post(&forks[i]);
        sem_post(&room);
    }
}
```

:::caution Common Pitfall
Always use a `while` loop (not `if`) when checking conditions with condition variables. Spurious
wakeups can cause `pthread_cond_wait()` to return without the condition being signalled. The loop
re-checks the condition after every wakeup.
:::

## 4. Deadlocks

### 4.1 Definition and Necessary Conditions

A **deadlock** is a situation where a set of processes are all blocked, each waiting for a resource
held by another process in the set.

**Coffman conditions** (all four must hold simultaneously):

1. **Mutual exclusion:** At least one resource is non-sharable.
2. **Hold and wait:** A process holds at least one resource and is waiting for others.
3. **No preemption:** Resources cannot be forcibly taken.
4. **Circular wait:** A circular chain of processes exists, each waiting for a resource held by the
   next.

### 4.2 Deadlock Prevention

Eliminate one of the four Coffman conditions:

| Condition       | Prevention strategy                                |
| --------------- | -------------------------------------------------- |
| Mutual exclusion| Generally not feasible for non-sharable resources  |
| Hold and wait   | Require all resources upfront before execution      |
| No preemption   | Release held resources if a new request cannot be granted |
| Circular wait   | Impose a total ordering on resources; request in increasing order |

### 4.3 Deadlock Avoidance: Banker's Algorithm

The **Banker's algorithm** avoids deadlock by checking whether granting a request leads to a safe
state.

**Definitions:**

- **Available:** Vector $A = (A_1, \ldots, A_m)$ of available instances of each resource type.
- **Maximum:** Matrix $\mathrm{Max}$ where $\mathrm{Max}[i][j]$ is the maximum demand of process
  $i$ for resource $j$.
- **Allocation:** Matrix $\mathrm{Alloc}$ where $\mathrm{Alloc}[i][j]$ is the current allocation.
- **Need:** $\mathrm{Need}[i][j] = \mathrm{Max}[i][j] - \mathrm{Alloc}[i][j]$.

**Safety algorithm:**

```
1. Work = Available; Finish[i] = false for all i
2. Find i such that Finish[i] == false AND Need[i] <= Work
3. If no such i exists, go to step 5
4. Work = Work + Alloc[i]; Finish[i] = true; go to step 2
5. If Finish[i] == true for all i, system is SAFE
```

**Resource request algorithm.** When process $i$ requests resources:

```
1. If Request[i] > Need[i], error (exceeded maximum claim)
2. If Request[i] > Available, process must wait
3. Pretend to allocate:
   Available = Available - Request[i]
   Alloc[i]  = Alloc[i] + Request[i]
   Need[i]   = Need[i] - Request[i]
4. Run safety algorithm.
   If safe, grant the request.
   If unsafe, roll back and make the process wait.
```

**Example.** Five processes, three resource types, $A = (3, 3, 2)$:

| Process | Allocation | Max       | Need      |
| ------- | ---------- | --------- | --------- |
| $P_0$   | (0,1,0)    | (7,5,3)   | (7,4,3)   |
| $P_1$   | (2,0,0)    | (3,2,2)   | (1,2,2)   |
| $P_2$   | (3,0,2)    | (9,0,2)   | (6,0,0)   |
| $P_3$   | (2,1,1)    | (2,2,2)   | (0,1,1)   |
| $P_4$   | (0,0,2)    | (4,3,3)   | (4,3,1)   |

Safety check: $P_1$ has $\mathrm{Need} = (1,2,2) \leq (3,3,2) = A$. Execute $P_1$, release
$(2,0,0)$, new $A = (5,3,2)$. Then $P_3$: $\mathrm{Need} = (0,1,1) \leq (5,3,2)$. Continuing,
all processes can complete: system is **safe**.

**Theorem 4.1.** The Banker's algorithm is correct: if it declares a state safe, there exists a
sequence of process completions that avoids deadlock.

*Proof.* The safety algorithm constructs an explicit sequence. Each process in the sequence can run
to completion with the currently available resources plus those released by previously completed
processes. If no such sequence exists, there is a set of processes whose combined needs exceed
available resources. $\blacksquare$

### 4.4 Deadlock Detection

Allow deadlocks to occur, then detect and recover.

**Detection algorithm:**

```
1. Work = Available
   Finish[i] = false if Alloc[i] != 0; true otherwise
2. Find i such that Finish[i] == false AND Request[i] <= Work
3. If found: Work = Work + Alloc[i]; Finish[i] = true; go to step 2
4. If not found: processes with Finish[i] == false are deadlocked
```

**Recovery strategies:**

1. **Process termination:** Kill deadlocked processes one at a time until the cycle is broken.
2. **Resource preemption:** Forcibly reclaim resources; must handle rollback of the affected
   process.
3. **Checkpoint and rollback:** Periodically save process state; restore on deadlock.

### 4.5 Deadlock Handling in Practice

Most modern OSes (Linux, Windows) use the **ostrich algorithm**: ignore deadlocks and rely on process
termination or reboot. Rationale: deadlocks are rare, detection is expensive, and prevention is
overly restrictive.

## 5. Memory Management

### 5.1 Contiguous Memory Allocation

**Fixed partitioning.** Memory divided into fixed-size partitions at boot. Internal fragmentation.

**Variable partitioning.** Partitions created dynamically. External fragmentation.

**Allocation strategies:**

| Strategy   | Description                                    |
| ---------- | ---------------------------------------------- |
| First-fit  | Allocate the first hole large enough           |
| Best-fit   | Allocate the smallest hole large enough        |
| Worst-fit  | Allocate the largest hole                      |
| Next-fit   | Continue searching from the last allocation    |

**Theorem 5.1.** First-fit and best-fit have roughly equivalent utilisation; first-fit is faster.

### 5.2 Paging

Divide physical memory into fixed-size **frames** and logical memory into same-size **pages**. A
**page table** maps page numbers to frame numbers.

$$\mathrm{physical address} = \mathrm{PT}[p] \times F + f$$

where $\mathrm{PT}[p]$ is the frame number for page $p$ and $F$ is the frame size.

**Page table entry fields:**

| Field          | Purpose                                   |
| -------------- | ----------------------------------------- |
| Frame number   | Physical frame containing this page       |
| Valid bit      | Page is in memory (1) or not (0)          |
| Dirty bit      | Page has been modified                    |
| Reference bit  | Page accessed recently                    |
| Protection     | Read/write/execute permissions            |

**Multi-level page tables.** A single page table for a 64-bit address space is infeasible. A
two-level scheme uses a **page directory** indexed by the outer page number, pointing to inner
page tables:

$$\mathrm{Address: } \underbrace{p_1}_{\mathrm{outer}} \mid \underbrace{p_2}_{\mathrm{inner}} \mid \underbrace{d}_{\mathrm{offset}}$$

x86-64 with 48-bit virtual addresses uses four-level page tables.

**Inverted page table.** One entry per physical frame (not per virtual page). Reduces memory
overhead but makes searching for a specific virtual page expensive; solved by hashing.

### 5.3 Segmentation

Segments divide the address space into logical units (code, data, stack, heap). Each segment has a
**base** and **limit**:

$$\mathrm{physical address} = \mathrm{base} + \mathrm{offset}, \quad \mathrm{if } \mathrm{offset} \lt{} \mathrm{limit}$$

*Advantages:* Reflects program structure; supports sharing individual segments.
*Disadvantages:* External fragmentation (variable-size segments).

### 5.4 Segmented Paging

Combine segmentation and paging: the segment offset is divided into page number and page offset.

$$\mathrm{Address: } \underbrace{s}_{\mathrm{segment}} \mid \underbrace{p}_{\mathrm{page}} \mid \underbrace{d}_{\mathrm{offset}}$$

Used by x86 (segmentation + paging).

### 5.5 Virtual Memory

Virtual memory allows processes to use more memory than physically available by keeping only active
pages in RAM; the rest reside on disk (swap space).

**Demand paging.** Pages loaded on access, not at process start.

**Page fault handling:**

1. CPU generates logical address; page table entry has valid bit = 0.
2. Trap to OS page fault handler.
3. Find a free frame (possibly evicting a victim page).
4. Read the page from disk into the frame.
5. Update page table entry (valid bit = 1, frame number).
6. Restart the faulting instruction.

**Effective access time (EAT):**

$$\mathrm{EAT} = (1 - p) \times \mathrm{ma} + p \times \mathrm{pf}$$

where $p$ = page fault rate, $\mathrm{ma}$ = memory access time, $\mathrm{pf}$ = page fault service
time.

For $p = 0.001$, $\mathrm{ma} = 100$ ns, $\mathrm{pf} = 8$ ms:

$$\mathrm{EAT} = 0.999 \times 100 + 0.001 \times 8{,}000{,}000 = 8.1 \; \mu\mathrm{s}$$

This is roughly $80\times$ slower than pure memory access, illustrating why a low page fault rate
is critical.

### 5.6 Translation Lookaside Buffer (TLB)

A **TLB** is a hardware cache of recently used page table entries, avoiding an extra memory access
per translation.

$$\mathrm{EAT} = h \times (\mathrm{TLB} + \mathrm{ma}) + (1 - h) \times (\mathrm{TLB} + \mathrm{ma} + \mathrm{ma})$$

where $h$ is the TLB hit ratio.

For $h = 0.99$, $\mathrm{TLB} = 2$ ns, $\mathrm{ma} = 100$ ns:

$$\mathrm{EAT} = 0.99 \times 102 + 0.01 \times 202 = 103 \; \mathrm{ns}$$

**TLB coherence.** When the OS modifies a page table entry, it must invalidate the corresponding
TLB entry. On x86-64: `invlpg` for single-entry invalidation, or reload `CR3` to flush the entire
TLB.

### 5.7 Page Replacement Algorithms

When physical memory is full, a victim page must be selected for eviction.

**Optimal (OPT/MIN).** Replace the page not used for the longest time in the future. Provably
optimal but requires future knowledge; used only as a benchmark.

**Theorem 5.2 (Belady's Optimality).** OPT yields the fewest page faults for any reference string.

*Proof.* If OPT replaces page $x$ (used furthest in future) and another algorithm replaces page
$y$ (used sooner), the other algorithm faults at least once more by the time $y$ is next
referenced. $\blacksquare$

**First-In, First-Out (FIFO).** Replace the oldest page. Simple but may evict heavily used pages.
Suffers from **Belady's anomaly**: increasing frames can increase faults.

**Example of Belady's anomaly.** Reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. With 3
frames: 9 faults. With 4 frames: 10 faults.

**Least Recently Used (LRU).** Replace the page not used for the longest time. Approximates OPT
well. Does **not** suffer from Belady's anomaly.

**Theorem 5.3.** LRU is a **stack algorithm**: the set of pages in $n+1$ frames is a superset of the
set in $n$ frames, for any reference string.

*Proof.* When adding a frame, LRU keeps the $n$ most recently used pages (same as before) plus the
new frame. No page in the $n$-frame set can be more recently used than a page outside it, so the
$n+1$ set must contain the $n$-frame set. $\blacksquare$

**Clock (Second Chance).** Pages in a circular list with a reference bit. On replacement:

1. If reference bit is 0, replace the page.
2. If reference bit is 1, clear it and advance.

Approximates LRU with $O(1)$ per operation.

**LFU (Least Frequently Used).** Replace the page with the smallest access count. May fail to adapt
to changing access patterns.

**Approximating LRU in practice.** Most OSes use a variant of Clock. Linux uses an LRU-like
approximation with **active** and **inactive** lists: pages on the active list are protected; pages
not accessed are demoted to the inactive list; eviction targets the inactive list.

:::caution Common Pitfall
Belady's anomaly applies to FIFO but **not** to LRU or Optimal. Adding more memory does not always
reduce page faults for non-stack algorithms.
:::

### 5.8 Thrashing

**Thrashing** occurs when a process spends more time paging than executing. This happens when the
total working set of all active processes exceeds physical memory.

**Working set model.** $W(t, \Delta)$ is the set of pages referenced in the last $\Delta$ references.
If $\sum W_i \gt{}$ available frames, thrashing occurs.

**Solutions:**

1. **Working set strategy:** Admit a process only if its working set fits.
2. **Page fault frequency (PFF):** Adjust resident set size based on observed fault rate.
3. **Local replacement:** Restrict eviction to the process's own frames.

### 5.9 Copy-on-Write (COW)

**Copy-on-Write** is an optimisation for `fork()`. Instead of copying all pages, parent and child
share physical frames (marked read-only). On a write to a shared page, a fault triggers a copy of
just that page.

- `fork()` becomes nearly $O(1)$ instead of $O(n)$ where $n$ is the number of pages.
- If the child immediately calls `exec()`, no copies are ever made.

## 6. File Systems

### 6.1 File Concepts

A **file** is a named collection of related data on secondary storage.

**File attributes:** Name, identifier (inode number), type, location, size, protection, timestamps.

**File operations:** `create`, `delete`, `open`, `close`, `read`, `write`, `seek`, `truncate`.

**Access methods:**

- **Sequential access:** Read bytes in order (tapes, log-structured files).
- **Direct (random) access:** Read/write at arbitrary offsets (disks).
- **Indexed access:** Access via an index structure (B-trees, hash tables).

### 6.2 Directory Structures

| Structure      | Description                                       |
| -------------- | ------------------------------------------------- |
| Single-level   | All files in one directory                        |
| Two-level      | Separate directory per user                       |
| Tree           | Hierarchical tree with subdirectories             |
| Acyclic graph  | Tree with shared subdirectories (hard links)      |
| General graph  | Allows cycles; requires garbage collection        |

### 6.3 Inode-Based File Systems

An **inode** (index node) stores metadata about a file (but not the file name, which is in the
directory entry):

| Field            | Description                                         |
| ---------------- | --------------------------------------------------- |
| Mode             | File type and permissions                           |
| Owner            | User and group IDs                                  |
| Size             | File size in bytes                                  |
| Timestamps       | Last access, modification, inode change             |
| Link count       | Number of hard links to this inode                  |
| Block pointers   | Direct, indirect, double-indirect, triple-indirect  |
| Blocks           | Number of blocks allocated                          |

**Block pointer scheme (ext4 with 4 KiB blocks, 4-byte pointers):**

- **Direct blocks:** 12 pointers to data blocks (48 KiB).
- **Single indirect:** 1 pointer to a block of 1024 pointers (4 MiB).
- **Double indirect:** 1 pointer to a block of 1024 blocks of 1024 pointers (4 GiB).
- **Triple indirect:** 1 more level of indirection (4 TiB).

Maximum file size: $48\;\mathrm{KiB} + 4\;\mathrm{MiB} + 4\;\mathrm{GiB} + 4\;\mathrm{TiB} \approx 4\;\mathrm{TiB}$.

### 6.4 Journaling File Systems

**The problem.** A crash during a file system update can leave inconsistent metadata (orphaned
inodes, lost blocks, incorrect free block count).

**Journaling.** Before modifying the file system, write a description of the modifications to a
dedicated **journal**. After a crash, replay the journal to restore consistency.

**Journaling modes (ext4):**

| Mode        | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `ordered`   | Metadata journaled; data written before metadata commit (default) |
| `writeback` | Metadata journaled; data not journaled (fastest, data loss risk)  |
| `journal`   | Both metadata and data journaled (safest, slowest)                |

**Write-ahead logging (WAL).** The journal entry is written to stable storage before the actual
modification. Recovery scans the journal: committed entries are applied; uncommitted entries are
discarded.

**Other journaling file systems:** NTFS (Windows), APFS (macOS), XFS, ZFS.

### 6.5 FUSE

**FUSE (Filesystem in Userspace)** allows non-privileged users to create file systems without
modifying the kernel. The FUSE kernel module routes VFS operations to a user-space daemon.

**Workflow:**

1. User program calls a file system operation (e.g., `read`).
2. VFS routes the call to the FUSE module.
3. FUSE sends the request to the user-space daemon via `/dev/fuse`.
4. The daemon processes the request and responds.
5. FUSE returns the result to the user program.

**Examples:** `sshfs` (mount remote directories over SSH), `ntfs-3g` (NTFS on Linux), `bindfs`
(remap permissions).

### 6.6 Free Space Management

| Method       | Description                                                |
| ------------ | ---------------------------------------------------------- |
| Bitmap       | One bit per block; 1 = free, 0 = used. Simple and fast.   |
| Linked list  | Free blocks linked together. Slow to traverse.             |
| Grouping     | First free block stores addresses of $n$ free blocks.      |
| Counting     | Track contiguous free blocks as (start, count) pairs.      |

### 6.7 File System Consistency

**Consistency checking (`fsck`).** Scans the file system for:

- **Orphaned inodes:** Inodes not referenced by any directory entry.
- **Incorrect link counts:** Link count does not match actual directory entries.
- **Duplicate blocks:** Two inodes claiming the same data block.
- **Missing/free blocks:** Blocks marked as used but not referenced, or vice versa.

**Journaling vs. `fsck`.** Journaling eliminates the need for full `fsck` after a crash. Only the
journal needs to be replayed, which takes seconds instead of hours for large file systems.

## 7. I/O Systems

### 7.1 I/O Hardware

| Category          | Examples                            | Data rate      |
| ----------------- | ----------------------------------- | -------------- |
| Human-readable    | Keyboard, screen, printer           | Low            |
| Machine-readable  | Disk, tape, sensors                 | Medium to high |
| Communication     | Network interfaces, modems          | Variable       |

### 7.2 I/O Scheduling

I/O schedulers reorder and merge requests to improve performance:

- **FCFS:** Simple but may cause starvation.
- **SSTF:** Service the request closest to the current head position. Minimises seek but can
  starve distant requests.
- **SCAN (elevator):** Head moves in one direction servicing requests, then reverses.
- **C-SCAN:** Like SCAN but only services in one direction; returns without servicing.
- **LOOK / C-LOOK:** Optimised SCAN/C-SCAN that reverses when no requests remain ahead.

**Theorem 7.1.** C-SCAN provides more uniform wait times than SCAN.

*Proof.* SCAN services requests in both directions, so requests at the extremes of the disk wait
longer. C-SCAN treats the disk as a circular queue, ensuring every request is serviced within one
full sweep. $\blacksquare$

### 7.3 Direct Memory Access (DMA)

**DMA** allows I/O devices to transfer data directly to/from memory without per-word CPU
intervention.

**Without DMA:** CPU reads each word from the device controller to memory. For a 4 KiB read, the CPU
is interrupted 4096 times.

**With DMA:** CPU programs the DMA controller with source, destination, and count. DMA handles the
transfer, interrupting the CPU only when complete.

- DMA transfers are **cycle-stealing**: the DMA controller uses the system bus, pausing the CPU.
- Modern systems use **bus mastering**: the I/O device controller performs the transfer autonomously.

## 8. Virtualization

### 8.1 Hypervisor Types

**Type 1 (bare-metal).** Runs directly on hardware. Examples: VMware ESXi, Xen, Hyper-V.

- Direct hardware access; high performance.
- Must include device drivers for all hardware.

**Type 2 (hosted).** Runs on a host OS. Examples: VirtualBox, VMware Workstation, QEMU.

- Easier to develop and install.
- Additional overhead from the host OS.

### 8.2 Virtual Machine Monitors

A **VMM** (hypervisor) presents the illusion of multiple independent physical machines to guest OSes.

**Challenges:**

- **Instruction emulation:** Sensitive instructions must be trapped and emulated. On x86, `IN`,
  `OUT`, `HLT`, `CLI`, `STI`, and `MOV` to/from control registers are sensitive.
- **Memory virtualization:** The VMM maintains **shadow page tables** mapping guest virtual to host
  physical addresses. Hardware support: Extended Page Tables (EPT, Intel) and Nested Page Tables
  (NPT, AMD).
- **I/O virtualization:** Device access mediated by the VMM. Paravirtualized drivers (e.g., VirtIO)
  improve performance.

### 8.3 Paravirtualization

The guest OS is modified to make **hypercalls** instead of executing sensitive instructions directly.

- *Advantage:* Lower overhead (no trap-and-emulate for every sensitive instruction).
- *Disadvantage:* Requires modifying the guest kernel.

### 8.4 Containers

**Containers** share the host kernel but provide process isolation via:

- **Namespaces:** Isolate process trees, network, file systems, IPC, UTS (hostname).
- **cgroups:** Limit resource usage (CPU, memory, I/O).

| Property    | VMs                       | Containers                   |
| ----------- | ------------------------- | ---------------------------- |
| Kernel      | Separate per VM           | Shared with host             |
| Startup     | Minutes                   | Seconds                      |
| Footprint   | GBs                       | MBs                          |
| Isolation   | Hardware-level            | Process-level                |
| Performance | Near-native (with EPT)    | Near-native (minimal)        |

**Docker** uses OverlayFS for layered images. **Kubernetes** orchestrates containers across clusters.

:::caution Common Pitfall
Containers do **not** provide hardware-level isolation. A kernel vulnerability can potentially
compromise all containers on a host. For strong multi-tenant isolation, VMs are preferred.
:::
