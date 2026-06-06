---
title: Distributed Systems
description:
  'University Computer Science Distributed Systems notes covering key definitions, core concepts,
  worked examples, and practice questions for efficient revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

## 1. CAP Theorem

### 1.1 Definition

A distributed system can guarantee at most **two** of the following three properties simultaneously:

| Property                | Definition                                  |
| ----------------------- | ------------------------------------------- |
| **Consistency**         | Every read receives the most recent write   |
| **Availability**        | Every request receives a non-error response |
| **Partition tolerance** | System operates despite network partitions  |

**Since network partitions are inevitable in practice, the real choice is between C and A during a
partition.**

### 1.2 CP vs AP Systems

| Type | Consistency   | Availability          | Partition | Examples                  |
| ---- | ------------- | --------------------- | --------- | ------------------------- |
| CP   | Yes           | No (during partition) | Yes       | HBase, MongoDB, ZooKeeper |
| AP   | No (eventual) | Yes                   | Yes       | Cassandra, DynamoDB, Riak |

### 1.3 PACELC Theorem

An extension of CAP: If there is a **P**artition, choose **A**vailability or **C**onsistency;
**E**lse, choose **L**atency or **C**onsistency.

$$\text{PC/EC} \text{ (consistency first)} \quad \text{vs.} \quad \text{PA/EA} \text{ (availability/latency first)}$$

## 2. Consistency Models

### 2.1 Linearizability (Strong Consistency)

Every operation appears to execute atomically at a single point in time. The result is equivalent to
executing operations on a single copy in real-time order.

$$\text{If } o_1 \text{ completes before } o_2 \text{ starts, then } o_1 \text{ appears before } o_2$$

**Cost:** Requires coordination on every write → higher latency.

### 2.2 Sequential Consistency

All operations appear in some total order consistent with program order of each process. Less strict
than linearizability (operations can appear to execute at non-real times).

$$\text{Program order preserved per process; total order exists across processes}$$

### 2.3 Causal Consistency

Operations that are **causally related** must be seen by all processes in the same order. Concurrent
(non-causal) operations may be seen in different orders.

```
Process A: write(x=1) → write(y=2)  // write(x) causally precedes write(y)
Process B: read(x) must see x=1 before (or same time as) y=2
```

### 2.4 Eventual Consistency

If no new updates are made, eventually all reads return the last written value. No guarantee on how
long "eventually" takes.

**Variants:**

- **Read-your-writes:** A process always sees its own writes.
- **Session consistency:** Guarantees read-your-writes within a session.
- **Monotonic reads:** If a process reads x, subsequent reads of x never return older values.
- **Monotonic writes:** Writes from a single process are applied in order.

### 2.5 Comparison

| Model        | Guarantees                 | Latency | Use Case                    |
| ------------ | -------------------------- | ------- | --------------------------- |
| Linearizable | Real-time order            | High    | Banking, leader election    |
| Sequential   | Program order, total order | Medium  | Shared memory simulation    |
| Causal       | Causal order               | Low     | Collaborative editing       |
| Eventual     | Converges if no updates    | Lowest  | Caching, social media feeds |

## 3. Consensus

### 3.1 Problem Definition

Consensus requires agreement on a value among $n$ processes, satisfying:

1. **Agreement:** All correct processes decide the same value.
2. **Validity:** The decided value was proposed by some process.
3. **Termination:** All correct processes eventually decide.

**FLP impossibility (1985):** In an asynchronous system with even one failure, deterministic
consensus is impossible.

### 3.2 Paxos

**Roles:**

- **Proposer:** Proposes values.
- **Acceptor:** Votes on proposals.
- **Learner:** Learns the decided value.

**Phase 1 (Prepare/Promise):**

```
PROPOSER:
    choose proposal number n
    send PREPARE(n) to majority of acceptors

ACCEPTOR:
    if n > any previously seen:
        promise not to accept any proposal < n
        send PROMISE(n, accepted_value, accepted_num)
        // (or PROMISE(n, null, null) if no prior acceptance)
    else: ignore

PROPOSER (collects majority promises):
    if any promise included accepted_value:
        propose (n, accepted_value)
    else:
        propose (n, proposer's value)
```

**Phase 2 (Accept/Accepted):**

```
PROPOSER:
    send ACCEPT(n, value) to majority of acceptors

ACCEPTOR:
    if n >= highest promised:
        accept (n, value)
        send ACCEPTED(n, value)
    else: ignore

LEARNER:
    upon receiving ACCEPTED from majority: value is decided
```

**Properties:** Guaranteed safety (only one value decided) even with multiple proposers. Liveness
requires a stable leader.

### 3.3 Raft

Raft decomposes consensus into subproblems: **leader election**, **log replication**, **safety**.

**States:** Follower, Candidate, Leader.

**Terms:** Divided into terms with increasing term numbers. Each term has at most one leader.

**Leader Election:**

```
FOLLOWER:
    reset election timeout timer on heartbeat from leader
    if timeout expires:
        become Candidate, increment currentTerm
        vote for self
        send RequestVote to all servers
        if receive votes from majority: become Leader
        else: remain Candidate, retry after timeout

CANDIDATE:
    if receive AppendEntries with term >= currentTerm:
        revert to Follower
    if election timeout expires: start new election
```

**Log Replication:**

```
LEADER:
    on client request:
        append entry to own log
        send AppendEntries(log_entry, prev_index, prev_term) to all followers
    when majority of followers acknowledge:
        commit entry (apply to state machine)
        notify client

FOLLOWER:
    on AppendEntries from leader:
        if log doesn't contain prev_entry at prev_index: reject
        if term doesn't match: reject
        append entry to log
        send ACK
```

**Safety:** A leader must have the most up-to-date log entry for each index.

**Election timeout:** Randomized (in most cases 150-300ms) to prevent split votes.

### 3.4 Comparison

| Property          | Paxos                 | Raft                      |
| ----------------- | --------------------- | ------------------------- |
| Understandability | Hard                  | Designed for clarity      |
| Leader            | Not required          | Required                  |
| Membership change | Complex               | Joint consensus           |
| Implementation    | Used in Google Chubby | Used in etcd, CockroachDB |

## 4. Replication

### 4.1 Single-Leader Replication

All writes go through the leader. Followers replicate asynchronously.

```
Leader → Follower1 (replication log)
Leader → Follower2 (replication log)
Client → Leader (write), any replica (read)
```

**Pros:** Simple, no write conflicts. **Cons:** Leader is a bottleneck and single point of failure.

### 4.2 Multi-Leader Replication

Multiple nodes accept writes. Conflicts resolved by conflict resolution.

**Conflict resolution strategies:**

- **Last-write-wins (LWW):** Timestamp-based (may lose data).
- **Version vectors:** Track causal history, merge divergent versions.
- **Application-specific:** Custom merge logic.

**Use cases:** Multi-region deployments, offline-first clients.

### 4.3 Leaderless Replication

No designated leader. Any node accepts writes. Clients write to multiple nodes and read from
multiple, using quorum.

**Quorum reads and writes:**

$$W + R > N$$

where $W$ = write quorum, $R$ = read quorum, $N$ = total replicas.

| $W$                 | $R$                 | Trade-off                   |
| ------------------- | ------------------- | --------------------------- |
| $N$                 | 1                   | Fastest reads, most writes  |
| $\lceil N/2 \rceil$ | $\lceil N/2 \rceil$ | Balanced read/write latency |
| 1                   | $N$                 | Fastest writes, most reads  |

### 4.4 Synchronous vs Asynchronous Replication

| Type         | Latency | Durability | Consistency |
| ------------ | ------- | ---------- | ----------- |
| Synchronous  | High    | Strong     | Strong      |
| Asynchronous | Low     | Risky      | Eventual    |
| Semi-sync    | Medium  | Moderate   | Moderate    |

## 5. Partitioning (Sharding)

### 5.1 Horizontal Partitioning

Divide rows across nodes based on a partition key.

**Hash partitioning:**

```
PARTITION(key, N):
    node = hash(key) % N
    route to node
```

**Range partitioning:** Assign contiguous ranges of keys to nodes.

**Directory-based:** A lookup service maps keys to partitions.

### 5.2 Consistent Hashing

Nodes and keys are placed on a hash ring (0 to $2^{128}$). Each key is assigned to the nearest node
clockwise.

```
CONSISTENT_HASH(key, nodes):
    hash_key = hash(key)
    for each node in sorted by hash(node):
        if hash(node) >= hash_key:
            return node
    return first node  // wrap around
```

**Virtual nodes:** Each physical node has multiple virtual nodes on the ring, improving balance.

**Advantages:**

- Adding/removing a node only moves $O(1/N)$ of keys.
- Balanced data distribution.
- Decentralized (no directory server needed).

### 5.3 Partitioning Challenges

- **Skewed distribution:** Some partitions receive more data/traffic.
- **Cross-partition queries:** Joins across partitions are expensive.
- **Rebalancing:** Moving data when nodes join/leave.

## 6. Fault Tolerance

### 6.1 Failure Models

| Failure Type      | Behavior                                  |
| ----------------- | ----------------------------------------- |
| Crash failure     | Process stops and does not recover        |
| Fail-stop         | Crash + detectable (other nodes can tell) |
| Byzantine failure | Arbitrary behavior (including malicious)  |
| Omission failure  | Fails to send/receive messages            |
| Timing failure    | Responds outside specified timing bounds  |

### 6.2 Crash Fault Tolerance

A system tolerates $f$ crash failures with $n \geq 2f + 1$ replicas (quorum = $f + 1$).

### 6.3 Byzantine Fault Tolerance

A system tolerates $f$ Byzantine failures with $n \geq 3f + 1$ replicas.

**Byzantine Generals Problem:** How can loyal generals agree on a battle plan when some generals are
traitors sending conflicting messages?

**PBFT (Practical Byzantine Fault Tolerance):**

```
PBFT phases for each request:
    1. PRE-PREPARE: Leader assigns sequence number, sends to all replicas
    2. PREPARE: Each replica sends PREPARE to all others
    3. COMMIT: After 2f+1 PREPARE/PRE-PREPARE, send COMMIT to all
    4. REPLY: After 2f+1 COMMIT, execute and reply
```

**Time:** $O(n^2)$ messages per consensus round.

### 6.4 Failure Detection

**Heartbeat-based:** Periodic messages. If no heartbeat within timeout, suspect failure.

**Phi accrual failure detector:** Probabilistic approach based on arrival history of heartbeats.
Outputs a suspicion level $\phi$.

**Gossip-based:** Nodes exchange membership information. Converges with $O(\log n)$ rounds.

## 7. Distributed Transactions

### 7.1 Two-Phase Commit (2PC)

**Phase 1 (Prepare/Voting):**

```
COORDINATOR:
    send PREPARE to all participants

PARTICIPANT:
    write undo/redo logs to stable storage
    if can commit: send VOTE_COMMIT
    else: send VOTE_ABORT
```

**Phase 2 (Commit/Abort):**

```
COORDINATOR:
    if all VOTE_COMMIT:
        send COMMIT to all
    else:
        send ABORT to all

PARTICIPANT:
    on COMMIT: commit transaction, release locks
    on ABORT: rollback, release locks
```

**Problems:**

- **Blocking:** If coordinator crashes, participants are blocked (holding locks) until recovery.
- **Single point of failure:** Coordinator failure stalls all participants.

### 7.2 Three-Phase Commit (3PC)

Adds a **pre-commit** phase to eliminate blocking:

1. **CanCommit:** Coordinator asks if participants can commit.
2. **PreCommit:** Coordinator tells participants to prepare to commit.
3. **DoCommit:** Coordinator commands commit.

**Non-blocking** (if no failures occur during pre-commit), but requires timeout assumptions
(synchronous rounds).

### 7.3 Saga Pattern

Break a transaction into a sequence of **local transactions** with **compensating actions**.

```
SAGA(order):
    T1: reserve_inventory(order)
    T2: charge_payment(order)
    T3: ship_order(order)

    // Compensating actions (on failure):
    C3: cancel_shipment(order)
    C2: refund_payment(order)
    C1: release_inventory(order)
```

**Execution:**

- Execute $T_1, T_2, T_3$ sequentially.
- If $T_i$ fails, execute compensating actions $C_{i-1}, C_{i-2}, \ldots, C_1$.

**Pros:** No distributed locks, no blocking. **Cons:** Eventual consistency (reads may see
intermediate state).

### 7.4 Comparison

| Method | Atomicity | Blocking | Consistency | Complexity |
| ------ | --------- | -------- | ----------- | ---------- |
| 2PC    | Strong    | Yes      | Strong      | Medium     |
| 3PC    | Strong    | No\*     | Strong      | High       |
| Saga   | Eventual  | No       | Eventual    | Low        |

\*Non-blocking only under synchrony assumptions.

## 8. Time and Ordering

### 8.1 Physical Clocks

**Clock skew:** Difference between clocks on different machines.

**Clock drift:** Rate at which clocks diverge (typical: 1 part in $10^5$ to $10^6$).

**NTP (Network Time Protocol):** Synchronizes clocks within ~1ms on LANs, ~10-100ms on WANs.

**GPS clocks:** Provide high accuracy (~100ns) with external receivers.

### 8.2 Lamport Clocks

**Logical clocks** that capture **happens-before** ($\to$) relationships.

**Rules:**

1. Each process increments its clock before each event.
2. When sending a message, include clock value.
3. On receiving a message, set clock to $\max(\text{local}, \text{received}) + 1$.

```
LAMPORT_SEND(process, msg):
    process.clock += 1
    msg.timestamp = process.clock
    send(msg)

LAMPORT_RECEIVE(process, msg):
    process.clock = max(process.clock, msg.timestamp) + 1
    deliver(msg)
```

**Property:** If $a \to b$ (happens-before), then $C(a) < C(b)$.

**Limitation:** $C(a) < C(b)$ does NOT imply $a \to b$ (clocks can be concurrent).

### 8.3 Vector Clocks

Extend Lamport clocks with a vector $V = [V_1, V_2, \ldots, V_n]$ where $V_i$ = process $i$'s
logical clock.

**Rules:**

1. Increment own entry: $V[i] += 1$.
2. On send: include full vector.
3. On receive: $V[j] = \max(V[j], V'[j])$ for all $j$.

```
VECTOR_SEND(process, msg):
    process.V[process.id] += 1
    msg.V = copy(process.V)
    send(msg)

VECTOR_RECEIVE(process, msg):
    for j = 1 to n:
        process.V[j] = max(process.V[j], msg.V[j])
    process.V[process.id] += 1
    deliver(msg)
```

**Comparison of vector clocks:**

$$V \leq W \iff V[j] \leq W[j] \text{ for all } j$$

- If $V \leq W$: event $V$ happened before $W$.
- If $V \not\leq W$ and $W \not\leq V$: events are **concurrent**.

**Space:** $O(n)$ per event where $n$ = number of processes.

### 8.4 Ordering Comparison

| Method        | Causality detection | Concurrent detection | Space per event |
| ------------- | ------------------- | -------------------- | --------------- |
| Physical time | No                  | No                   | Constant        |
| Lamport       | Yes (one direction) | No                   | Constant        |
| Vector clock  | Yes                 | Yes                  | $O(n)$          |

## 9. Common Pitfalls

1. **Assuming CAP means you must permanently sacrifice C or A.** The trade-off is only during
   partitions. Without partitions, a CP system can be both consistent and available. The choice
   matters for how the system behaves under failure.

2. **Running Paxos/Raft without quorum.** Consensus algorithms require majority quorum to guarantee
   safety. With $n$ nodes, you need at least $\lfloor n/2 \rfloor + 1$ available for progress.

3. **Using synchronous replication without considering latency.** Synchronous replication doubles or
   triples write latency (waiting for remote acknowledgments). Consider the trade-off carefully for
   your latency requirements.

4. **Ignoring network partitions in real systems.** Network partitions happen (not just node
   crashes). Design for them: use circuit breakers, timeouts, and graceful degradation.

5. **Choosing wrong partition key.** A poor partition key creates hotspots (uneven load). Use a key
   with uniform distribution and align with query patterns.

6. **Forgetting compensating actions in sagas.** Every step in a saga must have a corresponding
   compensating action that can be safely retried. Idempotency is essential for reliability.

7. **Relying on physical clocks for ordering.** Physical clocks drift and have limited precision.
   Use logical clocks (Lamport, vector) for ordering in distributed algorithms.

## Worked Examples

### Example 1: Vector Clock Causality

**Problem:** Three events: A at process P1 (VC: 1,0,0), B at P1 (VC: 2,0,0), C at P2 (VC: 0,1,0)
which received message from A. Is A -> C? **Solution:** Event A has VC (1,0,0). Process P2 receives
A's message before event C, so C’s VC includes A's clock: C = max(A, local event) = max((1,0,0),
(0,1,0)) = (1,1,0). Since VC(C) >= VC(A) component-wise, A happened before C (A -> C). Event B has
VC (2,0,0), which does not causally precede C (0 < 1 at P2's counter). B and C are concurrent.

### Example 2: Consensus with Paxos

**Problem:** A cluster of 5 acceptors receives Prepare messages from a proposer with ballot
number 10. Acceptors 1, 3, 5 respond with ballot 10 and no previously accepted value. Acceptors 2, 4
respond with ballot 7 and accepted value V_old. What value is chosen? **Solution:** The proposer
must use the highest-numbered accepted value among the quorum responses. Acceptors 2 and 4 accepted
V_old with ballot 7. Since the proposer has a majority quorum ({1,2,3} or {2,3,4} etc.), and at
least two acceptors returned V_old, the proposer issues Accept messages with ballot 10 and value
V_old. Once a majority accepts, V_old is chosen.

## Summary

- **CAP theorem:** Distributed systems trade consistency for availability during partitions (PACELC
  extends this).
- **Consistency models** range from linearizable (strongest) to eventual (weakest), trading latency
  for guarantees.
- **Consensus** (Paxos, Raft) ensures agreement despite failures; FLP proves impossibility under
  asynchrony.
- **Replication** (single-leader, multi-leader, leaderless) trades simplicity, conflict resolution,
  and availability.
- **Partitioning** uses hash or range partitioning; consistent hashing minimizes data movement on
  topology changes.
- **Fault tolerance** handles crash failures ($n \geq 2f+1$) and Byzantine failures ($n \geq 3f+1$).
- **Distributed transactions:** 2PC (atomic but blocking), saga (eventual, non-blocking).
- **Time and ordering:** Lamport clocks capture happens-before; vector clocks distinguish concurrent
  events.

## Cross-References

| Topic             | Link                                                        |
| ----------------- | ----------------------------------------------------------- |
| Databases         | [View](/docs/university/computer-science/databases)         |
| Networking        | [View](/docs/university/computer-science/networking)        |
| Operating Systems | [View](/docs/university/computer-science/operating-systems) |
