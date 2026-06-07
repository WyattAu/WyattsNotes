---
title: Process Management
tags:
  - Computing
  - University
---

### 2.1 Process Concept

A **process** is an instance of a program in execution. The OS maintains a **process control block
(PCB)** for each process:

| Field           | Description                                |
| --------------- | ------------------------------------------ |
| PID             | Unique process identifier                  |
| Process state   | Running, ready, blocked, etc.              |
| Program counter | Address of next instruction                |
| Registers       | CPU register contents                      |
| Memory limits   | Base/limit registers or page table pointer |
| Open files      | List of open file descriptors              |
| I/O status      | I/O devices allocated and their status     |
| Scheduling info | Priority, scheduling queue, CPU usage      |

**Process states.** Processes transition through states:

$$\mathrm{New} \to \mathrm{Ready} \to \mathrm{Running} \to \mathrm{Terminated}$$

$$\mathrm{Running} \to \mathrm{Blocked} \to \mathrm{Ready}$$

The scheduler dispatches processes from **ready** to **running**. A running process may be
**preempted** back to ready, or may **block** on I/O or a synchronisation event.

### 2.2 Threads

A **thread** is the fundamental unit of CPU execution. Multiple threads within a process share the
Same address space, open files, and other resources, but each has its own program counter,
Registers, and stack.

**User-level threads.** Managed entirely by a user-space library (e.g., POSIX `pthread`). The OS is
Unaware of them.

- _Advantage:_ Fast creation and switching (no kernel involvement).
- _Disadvantage:_ One blocking system call blocks all threads in the process.

**Kernel-level threads.** Managed by the OS kernel (e.g., Linux `clone()`Windows threads).

- _Advantage:_ True parallelism on multiprocessor systems; blocking one thread does not block
  others.
- _Disadvantage:_ Slower creation and context switch (kernel trap required).

**Thread models:**

| Model        | User:Kernel | Characteristics                              |
| ------------ | ----------- | -------------------------------------------- |
| Many-to-one  | $m:1$       | All user threads map to one kernel thread    |
| One-to-one   | $1:1$       | Each user thread maps to a kernel thread     |
| Many-to-many | $m:n$       | User threads multiplexed onto kernel threads |

Linux uses a $1:1$ model by default.

### 2.3 CPU Scheduling

The CPU scheduler decides which process runs next from the set of ready processes.

**Scheduling criteria:**

- **CPU utilisation:** Keep the CPU busy ($\mathrm{utilisation} = 1 - p$ where $p$ is the I/O wait
  probability).
- **Throughput:** Number of processes completed per time unit.
- **Turnaround time:** $T_{\mathrm{turnaround} = T_{\mathrm{completion} - T_{\mathrm{arrival}}}}$.
- **Waiting time:** Time spent in the ready queue.
- **Response time:** Time from submission to first response.

### 2.4 Scheduling Algorithms

**First-Come, First-Served (FCFS).** Non-preemptive. Processes scheduled in arrival order. Suffers
From the **convoy effect**: short processes waiting behind a long process.

**Shortest Job First (SJF).** Non-preemptive. Schedule the process with the shortest next CPU burst.
Provably optimal for average waiting time. Requires burst length estimation via exponential
Averaging: $\tau_{n+1} = \alpha t_n + (1 - \alpha) \tau_n$.

**Shortest Remaining Time First (SRTF).** Preemptive SJF. If a new process arrives with a shorter
Remaining burst, preempt the current process.

**Round Robin (RR).** Each process gets a time quantum $q$. If not finished within $q$Preempted and
Placed at the back of the ready queue. If $q$ is large, RR degenerates to FCFS. Typical $q$:
$10\mathrm{--100}$ ms.

**Priority Scheduling.** Highest-priority ready process runs. Can be preemptive or non-preemptive.
Risk of **starvation**; solved by **aging** (gradually increase priority of waiting processes).

**Multilevel Feedback Queue (MLFQ).** Partition the ready queue into multiple priority levels.
Processes that use too much CPU are demoted; processes that wait are promoted. The most general and
Widely used approach. Linux CFS uses a variant with red-black trees keyed on virtual runtime.

**Theorem 2.1.** SJF gives the minimum average waiting time for a given set of processes.

_Proof._ Consider any schedule that is not SJF. There exist consecutive processes $A$ and $B$ where
$A$ has a longer burst than $B$ but is scheduled first. Swapping $A$ and $B$ reduces the waiting
Time of $B$ by the burst time of $A$ and increases the waiting time of $A$ by the burst time of $B$.
Since $B$'s burst is shorter, the net change reduces the average. $\blacksquare$

**Worked Example 2.1 — FCFS vs SJF Comparison**

Consider three processes, all arriving at time $t = 0$:

| Process | Burst Time |
| ------- | ---------- |
| $P_1$   | 24         |
| $P_2$   | 3          |
| $P_3$   | 3          |

_FCFS Gantt chart:_

```
| P1 (24)      | P2 (3) | P3 (3) |
0              24       27      30
```

| Process | Waiting Time | Turnaround Time |
| ------- | ------------ | --------------- |
| $P_1$   | 0            | 24              |
| $P_2$   | 24           | 27              |
| $P_3$   | 27           | 30              |
| **Avg** | **17**       | **27**          |

_SJF Gantt chart:_

```
| P2 (3) | P3 (3) | P1 (24)           |
0        3       6                  30
```

| Process | Waiting Time | Turnaround Time |
| ------- | ------------ | --------------- |
| $P_1$   | 6            | 30              |
| $P_2$   | 0            | 3               |
| $P_3$   | 3            | 6               |
| **Avg** | **3**        | **13**          |

SJF reduces average waiting time from 17 to 3, illustrating the **convoy effect** in FCFS.

<details>
<summary>Solution — Round Robin with $q = 4$</summary>

Using the same three processes with quantum $q = 4$:

```
| P1(4) | P2(3) | P3(3) | P1(4) | P1(4) | P1(4) | P1(4) | P1(1) |
0       4       7       10     14     18     22     26     27
```

| Process | Completion | Turnaround | Waiting  |
| ------- | ---------- | ---------- | -------- |
| $P_1$   | 27         | 27         | 3        |
| $P_2$   | 7          | 7          | 4        |
| $P_3$   | 10         | 10         | 7        |
| **Avg** |            | **14.67**  | **4.67** |

Round Robin eliminates the convoy effect but gives a higher average waiting time than SJF due to
Preemption overhead. The turnaround time for $P_1$ is unchanged (the work must be done), but $P_2$
And $P_3$ receive faster first response.

</details>

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
Explicit synchronisation.

```c
int shmid = shmget(SHM_KEY, SHM_SIZE, IPC_CREAT | 0666);
char *shm_ptr = (char *)shmat(shmid, NULL, 0);
shm_ptr[offset] = data;
shmdt(shm_ptr);
```

**Message passing.** Processes exchange messages through the OS. Operations: `send(dest, msg)` and
`receive(src, msg)`. Can be **direct** (named processes) or **indirect** (via mailboxes/ports).

| Property        | Shared Memory  | Message Passing           |
| --------------- | -------------- | ------------------------- |
| Speed           | Fast           | Slower (kernel mediation) |
| Synchronisation | Required       | Built-in                  |
| Kernel use      | Setup only     | Every message             |
| Scalability     | Single machine | Can be distributed        |

**Pipes.** Unidirectional data channel. `pipe()` creates a pipe; `fork()` inherits file descriptors.
Named pipes (`mkfifo`) allow unrelated processes to communicate.

**Signals.** Asynchronous notifications (integer payload only). Common: `SIGTERM``SIGKILL`
`SIGSEGV``SIGCHLD`.

