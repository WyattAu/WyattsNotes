---
title: Deadlocks
tags:
  - Computing
  - University
---

### 4.1 Definition and Necessary Conditions

A **deadlock** is a situation where a set of processes are all blocked, each waiting for a resource
Held by another process in the set.

**Coffman conditions** (all four must hold simultaneously):

1. **Mutual exclusion:** At least one resource is non-sharable.
2. **Hold and wait:** A process holds at least one resource and is waiting for others.
3. **No preemption:** Resources cannot be forcibly taken.
4. **Circular wait:** A circular chain of processes exists, each waiting for a resource held by the
   next.

### 4.2 Deadlock Prevention

Eliminate one of the four Coffman conditions:

| Condition        | Prevention strategy                                               |
| ---------------- | ----------------------------------------------------------------- |
| Mutual exclusion | Generally not feasible for non-sharable resources                 |
| Hold and wait    | Require all resources upfront before execution                    |
| No preemption    | Release held resources if a new request cannot be granted         |
| Circular wait    | Impose a total ordering on resources; request in increasing order |

### 4.3 Deadlock Avoidance: Banker's Algorithm

The **Banker's algorithm** avoids deadlock by checking whether granting a request leads to a safe
State.

**Definitions:**

- **Available:** Vector $A = (A_1, \ldots, A_m)$ of available instances of each resource type.
- **Maximum:** Matrix $\mathrm{Max}$ where $\mathrm{Max}[i][j]$ is the maximum demand of process $i$
  for resource $j$.
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

| Process | Allocation | Max     | Need    |
| ------- | ---------- | ------- | ------- |
| $P_0$   | (0,1,0)    | (7,5,3) | (7,4,3) |
| $P_1$   | (2,0,0)    | (3,2,2) | (1,2,2) |
| $P_2$   | (3,0,2)    | (9,0,2) | (6,0,0) |
| $P_3$   | (2,1,1)    | (2,2,2) | (0,1,1) |
| $P_4$   | (0,0,2)    | (4,3,3) | (4,3,1) |

Safety check: $P_1$ has $\mathrm{Need} = (1,2,2) \leq (3,3,2) = A$. Execute $P_1$Release
$(2,0,0)$New $A = (5,3,2)$. Then $P_3$: $\mathrm{Need} = (0,1,1) \leq (5,3,2)$. Continuing, All
processes can complete: system is **safe**.

<details>
<summary>Worked Example 4.1 — Banker's Algorithm Step-by-Step</summary>

Given the state above, suppose $P_1$ requests $(1,0,2)$.

_Step 1:_ Verify $\mathrm{Request_1} = (1,0,2) \leq \mathrm{Need_1} = (1,2,2)$. OK.

_Step 2:_ Verify $\mathrm{Request_1} = (1,0,2) \leq A = (3,3,2)$. OK.

_Step 3:_ Pretend to allocate:

| Process | Allocation | Max     | Need    |
| ------- | ---------- | ------- | ------- |
| $P_0$   | (0,1,0)    | (7,5,3) | (7,4,3) |
| $P_1$   | (3,0,2)    | (3,2,2) | (0,2,0) |
| $P_2$   | (3,0,2)    | (9,0,2) | (6,0,0) |
| $P_3$   | (2,1,1)    | (2,2,2) | (0,1,1) |
| $P_4$   | (0,0,2)    | (4,3,3) | (4,3,1) |

$A = (3,3,2) - (1,0,2) = (2,3,0)$.

_Step 4:_ Run safety algorithm.

1. $P_1$: $\mathrm{Need} = (0,2,0) \leq (2,3,0)$. Execute, $A = (2,3,0) + (3,0,2) = (5,3,2)$.
2. $P_3$: $\mathrm{Need} = (0,1,1) \leq (5,3,2)$. Execute, $A = (5,3,2) + (2,1,1) = (7,4,3)$.
3. $P_4$: $\mathrm{Need} = (4,3,1) \leq (7,4,3)$. Execute, $A = (7,4,3) + (0,0,2) = (7,4,5)$.
4. $P_0$: $\mathrm{Need} = (7,4,3) \leq (7,4,5)$. Execute, $A = (7,4,5) + (0,1,0) = (7,5,5)$.
5. $P_2$: $\mathrm{Need} = (6,0,0) \leq (7,5,5)$. Execute, $A = (7,5,5) + (3,0,2) = (10,5,7)$.

All processes finish. The request is **granted**. Safe sequence:
$\langle P_1, P_3, P_4, P_0, P_2 \rangle$.

</details>

<details>
<summary>Worked Example 4.2 — Unsafe State Detection</summary>

Suppose instead $P_0$ requests $(0,2,0)$ in the original state.

_Step 1:_ $\mathrm{Request_0} = (0,2,0) \leq \mathrm{Need_0} = (7,4,3)$. OK.

_Step 2:_ $\mathrm{Request_0} = (0,2,0) \leq A = (3,3,2)$. OK.

_Step 3:_ Pretend to allocate. New $A = (3,1,2)$, $\mathrm{Need_0} = (7,2,3)$.

_Step 4:_ Safety check. No process can execute: $P_1$ needs $(1,2,2)$ but only $(3,1,2)$ available
(second component insufficient). $P_3$ needs $(0,1,1) \leq (3,1,2)$ — OK, execute $P_3$:
$A = (5,2,3)$. Then $P_1$: $(1,2,2) \leq (5,2,3)$ — OK, execute: $A = (7,2,3)$. But now $P_0$ needs
$(7,2,3)$ — exact match, execute: $A = (7,3,3)$. $P_4$: $(4,3,1) \leq (7,3,3)$ — OK, execute:
$A = (7,3,5)$. $P_2$: $(6,0,0) \leq (7,3,5)$ — OK.

Safe sequence: $\langle P_3, P_1, P_0, P_4, P_2 \rangle$. The request is **granted**.

</details>

**Theorem 4.1.** The Banker's algorithm is correct: if it declares a state safe, there exists a
Sequence of process completions that avoids deadlock.

_Proof._ The safety algorithm constructs an explicit sequence. Each process in the sequence can run
To completion with the currently available resources plus those released by previously completed
Processes. If no such sequence exists, there is a set of processes whose combined needs exceed
Available resources. $\blacksquare$

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

<details>
<summary>Worked Example 4.3 — Deadlock Detection</summary>

Three processes and one resource type with 10 instances:

| Process | Allocation | Maximum |
| ------- | ---------- | ------- |
| $P_0$   | 5          | 9       |
| $P_1$   | 2          | 4       |
| $P_2$   | 2          | 7       |

Available = $10 - (5 + 2 + 2) = 1$.

$\mathrm{Request_0} = 4$, $\mathrm{Request_1} = 2$, $\mathrm{Request_2} = 5$.

_Detection:_

1. Work = 1. No process has $\mathrm{Request} \leq 1$.
2. No process can proceed. All three are deadlocked.

The system is in an **unsafe state** with a deadlock involving $\{P_0, P_1, P_2\}$.

_Recovery:_ Preempt 3 units from $P_0$ (reducing its allocation to 2). Now Available = 4. $P_1$ can
proceed ($\mathrm{Request_1} = 2 \leq 4$). After $P_1$ finishes, Available = $4 + 2 = 6$. $P_0$:
$\mathrm{Request_0} = 4 \leq 6$Proceeds. After: Available = $6 + 5 = 11$. $P_2$ proceeds. Deadlock
resolved.

</details>

### 4.5 Deadlock Handling in Practice

Most modern OSes (Linux, Windows) use the **ostrich algorithm**: ignore deadlocks and rely on
process Termination or reboot. Rationale: deadlocks are rare, detection is expensive, and prevention
is Overly restrictive.

