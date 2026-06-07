---
title: Problem Set
slug: operating-systems-problem-set
tags:
  - Computing
  - University
---

<details>
<summary>Problem 1 — Process States</summary>

List all possible state transitions for a process and identify which transition requires the
Scheduler, which requires an I/O event, and which is initiated by the process itself.

**Solution.** (Revision: §2.1)

| Transition           | Trigger              |
| -------------------- | -------------------- |
| New → Ready          | OS admission         |
| Ready → Running      | Scheduler (dispatch) |
| Running → Ready      | Preemption (timer)   |
| Running → Blocked    | I/O or wait request  |
| Blocked → Ready      | I/O completion       |
| Running → Terminated | `exit()` system call |

The scheduler triggers Ready → Running and Running → Ready (preemption). I/O events trigger Running
→ Blocked and Blocked → Ready. The process itself initiates Running → Terminated.

</details>

<details>
<summary>Problem 2 — Kernel Architecture Trade-offs</summary>

A microkernel-based OS adds 2 $\mu$S of message-passing overhead per system call compared to a
Monolithic kernel. If a web server makes $10^6$ system calls per second, what is the total overhead
As a fraction of CPU time on a 3 GHz processor?

**Solution.** (Revision: §1.2)

Total message-passing time per second: $10^6 \times 2 \;\mu\mathrm{s} = 2$ seconds of CPU time per
Second. This exceeds available CPU time, making the microkernel approach infeasible at this call
Rate without optimisations such as batched IPC or shared-memory channels.

</details>

<details>
<summary>Problem 3 — FCFS Scheduling</summary>

Processes arrive in the order $P_1$ (burst 10, arrival 0), $P_2$ (burst 5, arrival 1), $P_3$ (burst
2, arrival 2). Compute waiting time and turnaround time for each process under FCFS.

**Solution.** (Revision: §2.4)

Gantt: $\lvert P_1(10) \rvert P_2(5) \rvert P_3(2) \rvert$ at times 0, 10, 15, 17.

| Process | Waiting  | Turnaround |
| ------- | -------- | ---------- |
| $P_1$   | 0        | 10         |
| $P_2$   | 9        | 14         |
| $P_3$   | 13       | 15         |
| **Avg** | **7.33** | **13**     |

$P_3$ waits the longest despite having the shortest burst — the convoy effect.

</details>

<details>
<summary>Problem 4 — SJF Scheduling</summary>

Using the same processes as Problem 3, compute the schedule under non-preemptive SJF.

**Solution.** (Revision: §2.4)

At $t = 0$Only $P_1$ is available. $P_1$ runs 0--10. At $t = 10$, $P_2$ (burst 5) and $P_3$
(burst 2) are both ready. SJF selects $P_3$Then $P_2$.

Gantt: $\lvert P_1(10) \rvert P_3(2) \rvert P_2(5) \rvert$ at times 0, 10, 12, 17.

| Process | Waiting | Turnaround |
| ------- | ------- | ---------- |
| $P_1$   | 0       | 10         |
| $P_2$   | 10      | 15         |
| $P_3$   | 8       | 10         |
| **Avg** | **6**   | **11.67**  |

Average waiting time improves from 7.33 to 6 compared to FCFS.

</details>

<details>
<summary>Problem 5 — Round Robin Scheduling</summary>

Using the processes from Problem 3 with quantum $q = 2$Draw the Gantt chart and compute the Average
turnaround time.

**Solution.** (Revision: §2.4)

Gantt:
$\lvert P_1(2) \rvert P_2(2) \rvert P_3(2) \rvert P_1(2) \rvert P_2(2) \rvert P_1(2)
\rvert P_2(1) \rvert P_1(2) \rvert P_1(2) \rvert$

Times: 0, 2, 4, 6, 8, 10, 12, 13, 15, 17.

| Process | Completion | Turnaround |
| ------- | ---------- | ---------- |
| $P_1$   | 17         | 17         |
| $P_2$   | 13         | 12         |
| $P_3$   | 6          | 4          |
| **Avg** |            | **11**     |

Round Robin gives the fastest turnaround for $P_3$ (4 vs 10 under SJF) at the cost of slower Average
turnaround.

</details>

<details>
<summary>Problem 6 — SRTF Scheduling</summary>

Processes: $P_1$ (burst 8, arrival 0), $P_2$ (burst 4, arrival 1), $P_3$ (burst 2, arrival 2).
Compute the schedule under SRTF (preemptive SJF).

**Solution.** (Revision: §2.4)

$t=0$: $P_1$ starts (remaining 8). $t=1$: $P_2$ arrives (remaining 4). SRTF: 4 $\lt$ 8, preempt
$P_1$. $P_2$ starts. $t=2$: $P_3$ arrives (remaining 2). SRTF: 2 $\lt$ 4, preempt $P_2$. $P_3$
starts. $t=4$: $P_3$ completes. $P_2$ (remaining 4) vs $P_1$ (remaining 8). $P_2$ resumes. $t=8$:
$P_2$ completes. $P_1$ resumes (remaining 6). $t=14$: $P_1$ completes.

Gantt: $\lvert P_1(1) \rvert P_2(1) \rvert P_3(2) \rvert P_2(4) \rvert P_1(6) \rvert$

| Process | Completion | Turnaround | Waiting |
| ------- | ---------- | ---------- | ------- |
| $P_1$   | 14         | 14         | 6       |
| $P_2$   | 8          | 7          | 3       |
| $P_3$   | 4          | 2          | 0       |
| **Avg** |            | **7.67**   | **3**   |

</details>

<details>
<summary>Problem 7 — Critical Section</summary>

Show that the following solution to the critical section problem is incorrect (Peterson's algorithm
With the order of `flag[i] = true` and `turn = j` swapped):

```c
// Process i:
turn = j;
flag[i] = true;
while (flag[j] && turn == j);
// critical section
flag[i] = false;
```

**Solution.** (Revision: §3.1)

Both processes can set `turn` to the other's value, then set their own flag. If both execute
`turn = j` and `turn = i` respectively, then `turn` ends up as the last writer's value. Both then
Set their flags to true. The while loop checks `flag[j] && turn == j`. If the interleaving is:

1. $P_0$: `turn = 1`
2. $P_1$: `turn = 0`
3. $P_0$: `flag[0] = true`
4. $P_1$: `flag[1] = true`

$P_0$ checks: `flag[1]` is true and `turn == 1`? No (`turn = 0`). $P_0$ enters. $P_1$ checks:
`flag[0]` is true and `turn == 0`? Yes. $P_1$ waits.

Now consider:

1. $P_0$: `turn = 1`
2. $P_1$: `turn = 0`
3. $P_1$: `flag[1] = true`
4. $P_1$: checks `flag[0]` (false) → enters critical section.
5. $P_0$: `flag[0] = true`
6. $P_0$: checks `flag[1]` (true) and `turn == 1` (no, turn = 0) → enters critical section.

Both processes are in their critical section simultaneously. Mutual exclusion is violated.

</details>

<details>
<summary>Problem 8 — Producer-Consumer with Semaphores</summary>

In the bounded buffer solution of §3.6, explain why the `empty` and `full` semaphores must be
Different from the `mutex`. What goes wrong if we use only `mutex` (initialised to 1) and `count`
(shared variable)?

**Solution.** (Revision: §3.6)

If we use only `mutex` and check `count` manually:

```c
pthread_mutex_lock(&mutex);
while (count == BUFFER_SIZE) {
    pthread_mutex_unlock(&mutex);  // release while waiting
    // ... but how to re-acquire when space is available?
}
```

Without `empty` and `full` semaphores, the producer must busy-wait or use condition variables.
Semaphores provide **blocking** semantics: the producer blocks on `empty` when the buffer is full
And is automatically woken when a consumer signals `empty`. Using only `mutex` either causes
Busy-waiting (wasting CPU cycles) or requires the programmer to correctly implement the Wait/signal
protocol — which is exactly what semaphores encapsulate.

</details>

<details>
<summary>Problem 9 — Deadlock: Necessary Conditions</summary>

A system has three processes and three resources. Each process holds one resource and requests a
Second. Is deadlock possible? If so, identify the deadlocked set.

**Solution.** (Revision: §4.1)

Yes. If $P_0$ holds $R_0$ and requests $R_1$; $P_1$ holds $R_1$ and requests $R_2$; $P_2$ holds
$R_2$ and requests $R_0$We have circular wait: $P_0 \to R_1 \to P_1 \to R_2 \to P_2 \to R_0
\to P_0$.
All four Coffman conditions hold (mutual exclusion, hold-and-wait, no preemption, Circular wait), so
deadlock exists. The deadlocked set is $\{P_0, P_1, P_2\}$.

If instead $P_0$ holds $R_0$ and requests $R_2$; $P_1$ holds $R_1$ and requests $R_0$; $P_2$ holds
$R_2$ and requests $R_1$The same circular wait exists.

</details>

<details>
<summary>Problem 10 — Banker's Algorithm Safety</summary>

Three processes, three resource types. Available = $(3, 2, 1)$.

| Process | Allocation | Max       | Need      |
| ------- | ---------- | --------- | --------- |
| $P_0$   | (1, 0, 0)  | (3, 2, 1) | (2, 2, 1) |
| $P_1$   | (1, 0, 1)  | (2, 1, 2) | (1, 1, 1) |
| $P_2$   | (1, 1, 0)  | (2, 1, 1) | (1, 0, 1) |

Determine if the system is in a safe state.

**Solution.** (Revision: §4.3)

Work = $(3, 2, 1)$. All Finish = false.

1. $P_1$: Need $(1,1,1) \leq (3,2,1)$. Execute. Work = $(3,2,1) + (1,0,1) = (4,2,2)$. Finish[1] =
   true.
2. $P_2$: Need $(1,0,1) \leq (4,2,2)$. Execute. Work = $(4,2,2) + (1,1,0) = (5,3,2)$. Finish[2] =
   true.
3. $P_0$: Need $(2,2,1) \leq (5,3,2)$. Execute. Work = $(5,3,2) + (1,0,0) = (6,3,2)$. Finish[0] =
   true.

All Finish = true. Safe sequence: $\langle P_1, P_2, P_0 \rangle$.

</details>

<details>
<summary>Problem 11 — Banker's Algorithm Request</summary>

Using the state from Problem 10, determine whether the request from $P_0$ for $(1, 0, 0)$ can be
Granted.

**Solution.** (Revision: §4.3)

1. $\mathrm{Request_0} = (1,0,0) \leq \mathrm{Need_0} = (2,2,1)$. OK.
2. $\mathrm{Request_0} = (1,0,0) \leq A = (3,2,1)$. OK.
3. Pretend to allocate: $A = (2,2,1)$, $\mathrm{Alloc_0} = (2,0,0)$, $\mathrm{Need_0} = (1,2,1)$.
4. Safety: Work = $(2,2,1)$.

- $P_0$: $(1,2,1) \leq (2,2,1)$. Execute. Work = $(4,2,1)$.
- $P_1$: $(1,1,1) \leq (4,2,1)$. Execute. Work = $(5,2,2)$.
- $P_2$: $(1,0,1) \leq (5,2,2)$. Execute. Work = $(6,3,2)$.

All finish. Request **granted**.

</details>

<details>
<summary>Problem 12 — Page Table Address Translation</summary>

A system uses 32-bit virtual addresses with 4 KiB pages. The page table entry is 4 bytes.

(a) How many bits for the page number and offset? (b) How many entries in the page table? (c) What
is the size of the page table?

**Solution.** (Revision: §5.2)

(a) Offset = $\log_2(4096) = 12$ bits. Page number = $32 - 12 = 20$ bits. (b) $2^{20} = 1048576$
entries. (c) $1048576 \times 4$ bytes = 4 MiB.

</details>

<details>
<summary>Problem 13 — TLB and EAT Calculation</summary>

A system with a two-level page table. TLB hit ratio = 0.90, TLB access = 2 ns, memory access = 100
ns (for any level). Page fault rate = 0.001, page fault service = 6 ms. Compute the effective Access
time.

**Solution.** (Revision: §5.6)

_TLB hit, no fault_ ($0.90 \times 0.999$): $2 + 100 = 102$ ns. _TLB miss, no fault_
($0.10 \times 0.999$): $2 + 100 + 100 = 202$ ns (TLB + outer PT + inner PT + data). _Fault_
($0.001$): $2 + 100 + 100 + 6 \times 10^6 = 6000002$ ns.

$\mathrm{EAT} = 0.8991 \times 102 + 0.0999 \times 202 + 0.001 \times 6000002$
$= 91.71 + 20.18 + 6000.20 = 6112.09$ ns $\approx 6.11$ $\mu$S.

</details>

<details>
<summary>Problem 14 — Page Fault EAT</summary>

What page fault rate is needed to ensure the effective access time is no more than 200 ns? Memory
Access time = 100 ns, page fault service = 8 ms.

**Solution.** (Revision: §5.5)

Assume no TLB for simplicity: $\mathrm{EAT} = (1 - p) \times 100 + p \times 8 \times 10^6$.

$200 = 100 - 100p + 8 \times 10^6 p$ $100 = 7999900 p$ $p \approx 1.25 \times 10^{-5}$

The page fault rate must be below 0.00125%, or roughly 1 fault per 80,000 accesses. This Illustrates
why effective caching is essential.

</details>

<details>
<summary>Problem 15 — LRU Page Replacement</summary>

Reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Four frames. Compute the number of page Faults
under LRU and under FIFO. Does Belady's anomaly occur?

**Solution.** (Revision: §5.7)

_FIFO (4 frames):_

| Ref | F1  | F2  | F3  | F4  | Fault?                     |
| --- | --- | --- | --- | --- | -------------------------- |
| 1   | 1   |     |     |     | Yes                        |
| 2   | 1   | 2   |     |     | Yes                        |
| 3   | 1   | 2   | 3   |     | Yes                        |
| 4   | 1   | 2   | 3   | 4   | Yes                        |
| 1   | 1   | 2   | 3   | 4   | No                         |
| 2   | 1   | 2   | 3   | 4   | No                         |
| 5   | 5   | 2   | 3   | 4   | Yes                        |
| 1   | 5   | 1   | 3   | 4   | Yes                        |
| 2   | 5   | 1   | 2   | 4   | Yes                        |
| 3   | 5   | 1   | 2   | 3   | Yes                        |
| 4   | 5   | 1   | 2   | 3   | No (wait, 4 not in frames) |

Let me redo FIFO more carefully. FIFO replaces the oldest page in memory.

Frames after each reference (FIFO queue, front = oldest):

| Ref | Queue (oldest→newest) | Fault? |
| --- | --------------------- | ------ |
| 1   | [1]                   | Yes    |
| 2   | [1, 2]                | Yes    |
| 3   | [1, 2, 3]             | Yes    |
| 4   | [1, 2, 3, 4]          | Yes    |
| 1   | [1, 2, 3, 4]          | No     |
| 2   | [1, 2, 3, 4]          | No     |
| 5   | [2, 3, 4, 5]          | Yes    |
| 1   | [3, 4, 5, 1]          | Yes    |
| 2   | [4, 5, 1, 2]          | Yes    |
| 3   | [5, 1, 2, 3]          | Yes    |
| 4   | [1, 2, 3, 4]          | Yes    |
| 5   | [2, 3, 4, 5]          | Yes    |

FIFO faults: **10**.

With 3 frames: faults = **9** (from Belady's anomaly example in the text). With 4 frames: faults =
**10**. Belady's anomaly occurs: more frames produce more faults.

_LRU (4 frames):_ LRU replaces the least recently used page.

| Ref | Frames       | Fault? |
| --- | ------------ | ------ |
| 1   | [1]          | Yes    |
| 2   | [1, 2]       | Yes    |
| 3   | [1, 2, 3]    | Yes    |
| 4   | [1, 2, 3, 4] | Yes    |
| 1   | [1, 2, 3, 4] | No     |
| 2   | [1, 2, 3, 4] | No     |
| 5   | [5, 2, 3, 4] | Yes    |
| 1   | [5, 1, 3, 4] | Yes    |
| 2   | [5, 1, 2, 4] | Yes    |
| 3   | [5, 1, 2, 3] | Yes    |
| 4   | [4, 1, 2, 3] | Yes    |
| 5   | [4, 5, 2, 3] | Yes    |

LRU faults: **10**. LRU does not exhibit Belady's anomaly (it is a stack algorithm), but in this
Particular reference string, 3 and 4 frames happen to produce the same count under LRU.

</details>

<details>
<summary>Problem 16 — Belady's Anomaly</summary>

Prove that FIFO can exhibit Belady's anomaly by constructing a counterexample with 2 and 3 frames.

**Solution.** (Revision: §5.7)

Reference string: 1, 2, 3, 1, 2.

_2 frames:_ | Ref | F1 | F2 | Fault? | | --- | -- | -- | ------ | | 1 | 1 | | Yes | | 2 | 1 | 2 |
Yes | | 3 | 3 | 2 | Yes | | 1 | 3 | 1 | Yes | | 2 | 3 | 2 | Yes |

Faults: **5**.

_3 frames:_ | Ref | F1 | F2 | F3 | Fault? | | --- | -- | -- | -- | ------ | | 1 | 1 | | | Yes | | 2
| 1 | 2 | | Yes | | 3 | 1 | 2 | 3 | Yes | | 1 | 1 | 2 | 3 | No | | 2 | 1 | 2 | 3 | No |

Faults: **3**.

Here 3 frames produces fewer faults (3 vs 5), so this is not a counterexample. The original
Counterexample from the text (1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 3 vs 4 frames) remains Valid:
3 frames → 9 faults, 4 frames → 10 faults.

</details>

<details>
<summary>Problem 17 — Working Set and Thrashing</summary>

A system has 40 frames. Process $P_1$ has a working set of 15 pages, $P_2$ has 12 pages, and $P_3$
Has 18 pages. Can all three run simultaneously without thrashing? What if $P_4$ with a working set
Of 8 pages is added?

**Solution.** (Revision: §5.8)

Without $P_4$: total working set = $15 + 12 + 18 = 45 \gt 40$. Thrashing occurs. Only two Processes
can run concurrently (e.g., $P_1 + P_2 = 27 \leq 40$Or $P_2 + P_3 = 30 \leq 40$).

With $P_4$: total = $15 + 12 + 18 + 8 = 53 \gt 40$. Even worse. Using working set admission, we
Would run at most two processes. The best combination that fits is $P_1 + P_3 = 33$ or
$P_2 + P_3 =
30$.

</details>

<details>
<summary>Problem 18 — File Allocation</summary>

A file system uses contiguous allocation with 512-byte blocks. A file is created at block 1000 and
Grows to 5000 bytes. Blocks 1000--1009 are allocated. The file then grows by 2000 bytes, but Blocks
1010--1012 are occupied by another file. How does the file system handle this growth?

**Solution.** (Revision: §6.2)

The file currently occupies blocks 1000--1009 (10 blocks for 5000 bytes). To grow by 2000 bytes, it
Needs 4 more blocks. Blocks 1010--1012 are occupied, so contiguous extension is impossible.

Options:

1. **Move the file:** Copy blocks 1000--1009 to a new location with 14 consecutive free blocks.
   Expensive for large files.
2. **Extents:** Use multiple extents. The file has extent 1 = blocks 1000--1009 and extent 2 =
   blocks 1016--1019 (wherever 4 free blocks are found). The directory stores a list of extents.
3. **Switch to linked or indexed allocation:** Not practical once the file system is in use.

This illustrates the primary disadvantage of contiguous allocation: inability to grow files
Dynamically without costly relocation.

</details>

<details>
<summary>Problem 19 — Disk Scheduling</summary>

A disk has 500 cylinders (0--499). The request queue contains: 55, 58, 39, 18, 90, 160, 150,
38, 184. The head is at cylinder 50, moving toward 0. Compute the total head movement for SCAN and
C-SCAN.

**Solution.** (Revision: §7.3)

_SCAN (moving left first):_ 50 → 39 → 38 → 18 → 0 → 55 → 58 → 90 → 150 → 160 → 184. Total =
$(50-18) + 18 + 184 = 32 + 18 + 184 = 234$ cylinders.

Wait, let me be more precise. Head starts at 50, moving toward 0. 50 → 39: 11 39 → 38: 1 38 → 18: 20
18 → 0: 18 0 → 55: 55 55 → 58: 3 58 → 90: 32 90 → 150: 60 150 → 160: 10 160 → 184: 24 Total =
$11 + 1 + 20 + 18 + 55 + 3 + 32 + 60 + 10 + 24 = 234$ cylinders.

_C-SCAN (moving left, then jump right):_ 50 → 39 → 38 → 18 → 0 → 499 → 184 → 160 → 150 → 90 → 58
→ 55. Total = $11 + 1 + 20 + 18 + 499 + 315 + 24 + 10 + 60 + 32 + 3 = 993$ cylinders.

SCAN is far more efficient here because the requests are clustered between 18 and 184.

</details>

<details>
<summary>Problem 20 — Security: Buffer Overflow and Defences</summary>

Consider the following C function:

```c
void vulnerable(char *input) {
    char buffer[64];
    strcpy(buffer, input);
}
```

(a) Explain how a buffer overflow attack works against this function. (b) Which defences (from §9.3)
would prevent the attack? Explain how each works in this context.

**Solution.** (Revision: §9.3)

(a) If `input` exceeds 63 characters, `strcpy` writes past the end of `buffer`Overwriting the Stack
frame. On x86-64, the saved return address is located above the buffer on the stack. An Attacker can
overwrite the return address with the address of injected shellcode (also placed in The buffer),
gaining control of execution when the function returns.

(b) Defences:

- **Stack canary:** A random value is placed between `buffer` and the return address. The overflow
  would overwrite the canary. Before returning, the function checks the canary and aborts if it has
  been modified.
- **ASLR:** Randomises the stack base address, so the attacker cannot predict where `buffer` (and
  therefore the shellcode) will be in memory.
- **DEP (W\^X):** Marks the stack as non-executable. Even if the attacker overwrites the return
  address to point to the shellcode in `buffer`The CPU will fault when trying to execute it.
- **CFI:** Verifies that the return address points to a valid call site. A crafted address injected
by the overflow would fail the CFI check.
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

## Cross-References

| Topic               | Site       | Link                                                                                                       |
| ------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Operating Systems] | A-Level    | [View](https://alevel-sciences.wyattau.com/docs/alevel/computer-science/fundamentals/05-operating-systems) |
| [Operating Systems] | University | [View](https://university.wyattau.com/docs/computing/5-operating-systems/1_operating-systems)              |

