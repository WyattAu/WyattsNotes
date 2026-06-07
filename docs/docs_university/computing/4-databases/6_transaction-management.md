---
title: Transaction Management
tags:
  - Computing
  - University
---

### 6.1 ACID Properties

A **transaction** is a logical unit of work that must satisfy:

| Property    | Meaning                                                      |
| ----------- | ------------------------------------------------------------ |
| Atomicity   | All or nothing: either all operations commit or none         |
| Consistency | Transforms the database from one consistent state to another |
| Isolation   | Concurrent transactions do not interfere with each other     |
| Durability  | Once committed, the effects survive failures                 |

### 6.2 Isolation Levels

SQL defines four isolation levels with increasing strictness:

| Level            | Dirty Read | Non-repeatable Read | Phantom Read |
| ---------------- | ---------- | ------------------- | ------------ |
| Read Uncommitted | Possible   | Possible            | Possible     |
| Read Committed   | Prevented  | Possible            | Possible     |
| Repeatable Read  | Prevented  | Prevented           | Possible     |
| Serializable     | Prevented  | Prevented           | Prevented    |

- **Dirty read:** Reading uncommitted data from another transaction.
- **Non-repeatable read:** Same query returns different results within the same transaction due to
  updates by another transaction.
- **Phantom read:** Same range query returns new rows due to inserts by another transaction.

**Default levels:** PostgreSQL: Read Committed. MySQL InnoDB: Repeatable Read. SQL Server: Read
Committed. Oracle: Read Committed.

### 6.3 Serialisability

A schedule is **serialisable** if its effect is equivalent to some serial schedule (where
Transactions execute one after another).

**Conflict serialisability.** Two operations **conflict** if they belong to different transactions,
Access the same data item, and at least one is a write. A schedule is conflict-serialisable if its
**precedence graph** (also called serialisation graph) is acyclic.

- **Precedence graph:** Nodes are transactions. Draw a directed edge $T_i \to T_j$ if an operation
  of $T_i$ conflicts with and precedes an operation of $T_j$.

**Theorem 6.1.** A schedule is conflict-serialisable if and only if its precedence graph is acyclic.

_Proof sketch._ If the precedence graph has a cycle, no serial ordering can respect all the
Precedence constraints, so the schedule is not conflict-serialisable. Conversely, a topological sort
Of an acyclic graph gives a serial order equivalent to the schedule. $\blacksquare$

**View serialisability.** A schedule $S$ is view-serialisable if it is **view-equivalent** to a
Serial schedule $S'$. View equivalence requires:

1. **Initial read:** If $T_i$ reads the initial value of $Q$ in $S$It does so in $S'$.
2. **Updated read:** If $T_i$ reads the value of $Q$ written by $T_j$ in $S$It does so in $S'$.
3. **Final write:** If $T_i$ performs the final write of $Q$ in $S$It does so in $S'$.

Every conflict-serialisable schedule is view-serialisable, but the converse does not hold. Testing
For view serialisability is NP-complete.

<details>
<summary>Worked Example 6.1: Testing Conflict Serialisability</summary>

**Schedule:** $S: r_1(A), w_1(A), r_2(A), w_2(A), r_1(B), w_1(B), r_2(B), w_2(B)$.

**Build precedence graph:**

- $w_1(A)$ before $r_2(A)$: edge $T_1 \to T_2$.
- $r_2(A)$ before $w_1(A)$: No -- $r_2(A)$ is **after** $w_1(A)$.
- $w_2(A)$ before... Nothing comes after $w_2(A)$ on $A$.
- $w_1(B)$ before $r_2(B)$: edge $T_1 \to T_2$.
- $w_2(B)$ before... Nothing comes after $w_2(B)$ on $B$.

Precedence graph: $T_1 \to T_2$ (acyclic).

**Equivalent serial schedule:** $T_1, T_2$ (topological order).

Now consider: $S': r_1(A), w_1(A), r_2(B), w_2(B), r_1(B), w_1(B), r_2(A), w_2(A)$.

- $w_1(A)$ before $r_2(A)$: $T_1 \to T_2$.
- $w_2(B)$ before $r_1(B)$: $T_2 \to T_1$.

Precedence graph has cycle: $T_1 \to T_2 \to T_1$. **Not conflict-serialisable.**

</details>

### 6.4 Concurrency Control

**Two-Phase Locking (2PL).**

**Protocol:**

1. **Growing phase:** Acquire locks; do not release any.
2. **Shrinking phase:** Release locks; do not acquire any.

**Theorem 6.2.** 2PL guarantees conflict serialisability.

_Proof._ By the protocol, transaction $T_i$ acquires all its locks before releasing any. If $T_j$
Requests a lock held by $T_i$, $T_j$ waits. This creates a total ordering on conflicting Operations,
which corresponds to a serial schedule. $\blacksquare$

**Variants:**

- **Strict 2PL:** All locks held until commit/abort. Prevents cascading aborts.
- **Rigorous 2PL:** All locks held until commit/abort (same as strict 2PL for exclusive locks).

**Problem with 2PL: Deadlocks.** Detection (wait-for graph) or prevention (timestamp ordering).

**Timestamp Ordering (TO).** Each transaction receives a timestamp $TS(T)$. For conflicting
Operations:

- $T_i$ reads $Q$: if $Q$ was last written by $T_j$ with $TS(T_j) \gt TS(T_i)$Abort $T_i$.
- $T_i$ writes $Q$: if $Q$ was last read by $T_j$ with $TS(T_j) \gt TS(T_i)$Abort $T_i$.

No deadlocks (no waiting), but may abort transactions unnecessarily.

**Optimistic Concurrency Control (OCC).** Assumes conflicts are rare. Three phases:

1. **Read phase:** Transaction reads data and writes to private workspace. No locks acquired.
2. **Validation phase:** Before commit, check that no data read by this transaction has been
   modified by a committed transaction since the read phase began.
3. **Write phase:** If validation passes, apply private writes to the database. Otherwise, abort and
   restart.

**Forward validation:** Check against committed transactions. For each data item $Q$ read by
$T_i$Verify that the transaction that last wrote $Q$ committed before $T_i$'s read phase began.
**Backward validation:** Check against active transactions.

OCC performs well when conflicts are rare but degrades under high contention (many restarts).

<details>
<summary>Worked Example 6.2: Optimistic Concurrency Control</summary>

**Scenario:** Two transactions $T_1$ and $T_2$ both read and update account balances.

- $T_1$: Read $A = 100$Read $B = 200$Write $A = 150$Write $B = 150$ (transfer 50 from $B$ to $A$).
- $T_2$: Read $A = 100$Write $A = 75$ (withdraw 25).

**Execution:**

1. **$T_1$ read phase:** Reads $A = 100$, $B = 200$ into private workspace.
2. **$T_2$ read phase:** Reads $A = 100$ into private workspace.
3. **$T_2$ validation phase:** Checks if $A$ was modified by any committed transaction since $T_2$
   started. No committed transactions modified $A$. Validation passes.
4. **$T_2$ write phase:** Writes $A = 75$. $T_2$ commits.
5. **$T_1$ validation phase:** Checks if $A$ or $B$ was modified by any committed transaction since
   $T_1$ started. $T_2$ committed and modified $A$. Validation fails.
6. **$T_1$ is aborted and restarted.** On restart, $T_1$ reads $A = 75$, $B = 200$And correctly
   computes $A = 125$, $B = 150$.

</details>

**Multiversion Concurrency Control (MVCC).** Maintain multiple versions of each data item.

- **Read operations** read a consistent snapshot (a version visible at the start of the
  transaction).
- **Write operations** create a new version; the old version remains for concurrent readers.
- Conflicts between readers and writers are avoided (no read-write contention).

MVCC pseudocode (simplified):

```python
def read(txn, item):
    version = find_version(item, txn.start_ts)
    return version.value

def write(txn, item, value):
    if has_conflicting_write(item, txn.start_ts, txn.id):
        abort(txn)
    create_version(item, value, txn.id, txn.start_ts)
```

**MVCC implementations:**

- **PostgreSQL:** Snapshot Isolation. Each transaction sees a snapshot of committed data at
  transaction start. Uses `xmin`/`xmax` on each tuple.
- **MySQL InnoDB:** MVCC with undo logs. Each row has hidden columns for transaction ID and rollback
  pointer.
- **Oracle:** Snapshot Isolation at the statement level by default.

**MVCC anomaly: Write Skew.** Two concurrent transactions read overlapping data and update
Non-overlapping parts based on what they read. Serializable Snapshot Isolation (SSI) in PostgreSQL
9.1+ Detects and prevents this.

### 6.5 Log-Based Recovery

**Write-Ahead Logging (WAL).** Before writing a modified page to disk, write the log record
describing The modification to stable storage.

**WAL protocol:**

1. Before a data page is flushed to disk, all log records pertaining to that page must be on stable
   storage.
2. Before a transaction commits, all its log records must be on stable storage.

**Log records:** `[LSN, TxnID, PageID, BeforeImage, AfterImage, Commit/Abort]`.

**ARIES (Algorithm for Recovery and Isolation Exploiting Semantics).** The standard recovery
Algorithm used in IBM DB2, PostgreSQL, SQL Server, and others:

1. **Analysis phase:** Scan the log from the last checkpoint. Identify dirty pages and active
   transactions. Reconstruct the transaction table (which transactions were active at crash time)
   and the dirty page table (which pages may not have been written to disk).
2. **Redo phase:** Scan forward from the earliest LSN in the dirty page table. Redo all logged
   updates (from both committed and uncommitted transactions) to restore the database to the exact
   state at the time of the crash. A record is redone only if the page's on-disk LSN is less than
   the record's LSN (ensuring idempotency).
3. **Undo phase:** Scan backward from the end of the log. Undo all updates from transactions that
   were active at crash time (did not commit). Write compensation log records (CLRs) so that undo
   operations themselves are logged.

**Key ARIES properties:**

- **Idempotent:** Recovery can be restarted safely (re-processing log records has no additional
  effect).
- **Steal/no-force:** Uncommitted pages can be flushed to disk (steal), and committed pages need not
  be flushed (no-force). This improves performance at the cost of more recovery work.
- **Fine-grained logging:** Log records track individual page modifications, enabling precise
  recovery.

**Checkpoints.** Periodically flush dirty pages to disk and write a checkpoint record. Reduces the
Amount of log to scan during recovery.

```c
// Simplified checkpoint pseudocode
void checkpoint() {
    flush_all_dirty_pages();
    write_log_record(CHECKPOINT, dirty_page_list, active_txns);
    flush_log();
}
```

### 6.6 Buffer Management

The **buffer pool** caches frequently accessed disk pages in memory. Replacement policies include
LRU, Clock, and variants. PostgreSQL uses a Clock sweep algorithm; MySQL InnoDB uses an LRU variant
with a Midpoint insertion strategy to avoid scan pollution.

