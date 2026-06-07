---
title: Distributed Databases
tags:
  - Computing
  - University
---

### 9.1 Architecture and Motivation

A **distributed database** stores data across multiple nodes connected by a network. Motivations
Include:

- **Performance:** Data locality reduces latency; parallel query processing increases throughput.
- **Availability:** Replication allows the system to survive node failures.
- **Scalability:** Horizontal scaling by adding more nodes.

**Shared-nothing architecture.** Each node has its own CPU, memory, and disk. Nodes communicate Only
via the network. This is the dominant architecture for distributed databases.

**Data fragmentation:**

- **Horizontal fragmentation:** Each fragment is a subset of rows (tuples) defined by a selection
  predicate. Example: partition `Student` by department.
- **Vertical fragmentation:** Each fragment is a subset of columns. Example: store frequently
  accessed columns on fast nodes.
- **Hybrid fragmentation:** A combination of horizontal and vertical.

### 9.2 Distributed Transactions

A distributed transaction involves operations on multiple nodes. The challenge is ensuring atomicity
Across nodes.

**Two-Phase Commit (2PC).**

- **Phase 1 (Voting):** The coordinator sends a `PREPARE` message to all participants. Each
  participant writes its changes to a local log, votes `YES` (ready to commit) or `NO` (abort).
- **Phase 2 (Decision):** If all participants voted `YES`The coordinator sends `COMMIT`; otherwise
  it sends `ABORT`. Participants apply the decision and acknowledge.

**Theorem 9.1.** 2PC guarantees atomicity of distributed transactions if no participant crashes
Permanently and the log is on stable storage.

_Proof._ If the coordinator crashes after phase 1, participants that voted `YES` are blocked -- they
Cannot decide without knowing the coordinator's decision. Upon recovery, the coordinator reads its
Log to determine the decision and notifies participants. Since each participant wrote its vote to
Stable storage before responding, no vote is lost. $\blacksquare$

**Blocking problem.** If the coordinator crashes after phase 1, participants that voted `YES` must
Wait indefinitely (they are **blocked**). This is a fundamental limitation of 2PC.

**Three-Phase Commit (3PC).** Adds a `PRE-COMMIT` phase to eliminate blocking under the fail-stop
Model:

1. **CanCommit:** Coordinator asks if participants can commit. Participants reply `YES` or `NO`.
2. **PreCommit:** If all `YES`Coordinator sends `PRE-COMMIT`. Participants acknowledge.
3. **DoCommit:** Coordinator sends `COMMIT`. Participants commit and acknowledge.

If the coordinator crashes after `PRE-COMMIT`Any participant can contact others to determine the
Outcome (since at least one participant must have received `PRE-COMMIT` and can coordinate).

**Limitation of 3PC:** Assumes reliable communication (no lost messages), which is unrealistic in
Practice. 3PC is rarely used in production systems.

<details>
<summary>Worked Example 9.2: Two-Phase Commit Walkthrough</summary>

**Scenario:** A bank transfer deducts 100 from Account A (on Node 1) and adds 100 to Account B (on
Node 2). The coordinator manages the distributed transaction.

**Normal execution:**

1. Coordinator sends `PREPARE` to Node 1 and Node 2.
2. Node 1: locks Account A, writes -100 to log, votes `YES`.
3. Node 2: locks Account B, writes +100 to log, votes `YES`.
4. All votes are `YES`. Coordinator sends `COMMIT` to both nodes.
5. Node 1 applies the write (Account A -= 100), unlocks, sends ACK.
6. Node 2 applies the write (Account B += 100), unlocks, sends ACK.
7. Coordinator writes `COMMIT` to its log. Transaction complete.

**Node 1 votes NO (insufficient funds):**

1. Coordinator sends `PREPARE` to Node 1 and Node 2.
2. Node 1: locks Account A, discovers balance is 50, votes `NO`.
3. Coordinator receives `NO`Sends `ABORT` to both nodes.
4. Node 1 unlocks Account A (no changes applied).
5. Node 2 unlocks Account B (no changes applied).
6. Coordinator writes `ABORT` to its log. Transaction aborted.

**Coordinator crashes after Phase 1:**

1. Both nodes voted `YES` and are waiting for the decision.
2. Nodes are **blocked**: they hold locks and cannot proceed.
3. When the coordinator recovers, it reads its log, sees that all votes were `YES` but no decision
   was recorded, and sends `COMMIT` to all participants.

</details>

### 9.3 Replication

**Synchronous replication.** A write is not acknowledged until all replicas have applied it.

- Guarantees strong consistency (all replicas identical).
- High latency (wait for the slowest replica).
- Reduced availability during partitions (cannot acknowledge writes if a replica is unreachable).

**Asynchronous replication.** A write is acknowledged after the primary applies it; replicas are
Updated in the background.

- Low latency (acknowledged immediately).
- Eventual consistency (replicas may lag behind).
- Higher availability during partitions.

**Replication architectures:**

| Architecture  | Writes       | Reads       | Consistency                                             |
| ------------- | ------------ | ----------- | ------------------------------------------------------- |
| Single-leader | Primary only | Any replica | Strong (reads from primary) or eventual (from replicas) |
| Multi-leader  | Any node     | Any node    | Eventual (conflict resolution required)                 |
| Leaderless    | Any node     | Any node    | Tunable (quorum reads/writes)                           |

**Quorum-based consistency.** For a system with $N$ replicas, define write quorum $W$ and read
quorum $R$ such that $W + R \gt N$. This guarantees that any read sees at least one replica with the
Latest write.

### 9.4 Consistency Models

Consistency models define the guarantees a distributed system provides about the order and
visibility Of updates.

**Strong consistency models:**

- **Linearisability:** Every operation appears to execute atomically at a single point in real time.
  The strongest consistency model. Equivalent to "serialisable + real-time ordering."
- **Sequential consistency:** All operations appear in some total order that is consistent with the
  program order of each individual process. Weaker than linearisability (no real-time requirement).

**Weak consistency models:**

- **Causal consistency:** Operations that are causally related are seen by all processes in the same
  order. Concurrent (non-causally-related) operations may be seen in different orders.
- **Read-your-writes consistency:** A process always sees its own writes.
- **Eventual consistency:** If no new updates are made, all replicas will eventually converge to the
  same state. The weakest model; provides no ordering guarantees.

<details>
<summary>Worked Example 9.1: Quorum Read/Write</summary>

**Scenario:** $N = 5$ replicas. Choose $W = 3$, $R = 3$. Note $W + R = 6 \gt 5 = N$.

**Write:** Client writes value $v$. Primary sends write to all 5 replicas. At least 3 acknowledge
($W = 3$). Write is considered successful.

**Read:** Client reads from 3 replicas ($R = 3$). Since $W + R \gt N$Any read quorum overlaps With
the write quorum, so the reader is guaranteed to see at least one replica with the latest Value. The
reader returns the most recent version among the 3 responses.

**During a partition:** If 2 replicas are unreachable, writes require $W = 3$ available replicas
(OK, 3 are available). Reads require $R = 3$ (OK). If 3 replicas are unreachable, writes fail (only
2 Available, need 3). This is the consistency-availability trade-off from CAP.

</details>

