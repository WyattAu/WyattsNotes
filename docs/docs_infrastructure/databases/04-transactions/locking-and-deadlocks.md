---
id: locking-and-deadlocks
title: Locking and Deadlocks
description:
  Database locking — row-level locks, table locks, advisory locks, deadlocks, and lock monitoring.
slug: locking-and-deadlocks
---

## Lock Types Overview

PostgreSQL uses a multi-level locking system that operates at different granularities. Understanding
each lock type is essential for diagnosing performance issues and preventing deadlocks.

### Lock Granularity

| Level    | Scope               | Overhead | Concurrency | Example                                    |
| -------- | ------------------- | -------- | ----------- | ------------------------------------------ |
| Row      | Single tuple        | High     | Highest     | `SELECT ... FOR UPDATE`                    |
| Page     | 8KB page            | Medium   | Medium      | Internal page locks during heap operations |
| Table    | Entire relation     | Low      | Lowest      | `LOCK TABLE`, DDL operations               |
| Advisory | Application-defined | None     | N/A         | `pg_advisory_lock()`                       |

PostgreSQL does not use page-level locks for user-visible operations. Page-level locks are only used
internally during heap operations and are held for very short durations. Users interact with
row-level and table-level locks.

## Lock Modes (Table-Level)

PostgreSQL defines eight table-level lock modes. Each SQL command acquires specific locks
automatically.

| Lock Mode              | Acquired By                                                          | Conflicts With                                                                                 |
| ---------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ACCESS SHARE           | `SELECT`                                                             | ACCESS EXCLUSIVE                                                                               |
| ROW SHARE              | `SELECT FOR UPDATE/SHARE`                                            | EXCLUSIVE, ACCESS EXCLUSIVE                                                                    |
| ROW EXCLUSIVE          | `INSERT`, `UPDATE`, `DELETE`                                         | SHARE, SHARE ROW EXCLUSIVE, EXCLUSIVE, ACCESS EXCLUSIVE                                        |
| SHARE UPDATE EXCLUSIVE | `VACUUM` (without FULL), `CREATE INDEX CONCURRENTLY`                 | ROW EXCLUSIVE, SHARE UPDATE EXCLUSIVE, SHARE, SHARE ROW EXCLUSIVE, EXCLUSIVE, ACCESS EXCLUSIVE |
| SHARE                  | `CREATE INDEX` (non-concurrent)                                      | ROW EXCLUSIVE, SHARE UPDATE EXCLUSIVE, SHARE ROW EXCLUSIVE, EXCLUSIVE, ACCESS EXCLUSIVE        |
| SHARE ROW EXCLUSIVE    | `CREATE TRIGGER`, some `ALTER TABLE`                                 | ROW EXCLUSIVE, SHARE UPDATE EXCLUSIVE, SHARE, SHARE ROW EXCLUSIVE, EXCLUSIVE, ACCESS EXCLUSIVE |
| EXCLUSIVE              | `REFRESH MATERIALIZED VIEW` (non-concurrent)                         | ROW SHARE, ROW EXCLUSIVE, SHARE, SHARE ROW EXCLUSIVE, EXCLUSIVE, ACCESS EXCLUSIVE              |
| ACCESS EXCLUSIVE       | `DROP TABLE`, `TRUNCATE`, `ALTER TABLE`, `VACUUM FULL`, `LOCK TABLE` | All lock modes                                                                                 |

### Lock Compatibility Matrix

| Request \ Held         | AS  | RS  | RX  | SRE | S   | SRE2 | X   | AE  |
| ---------------------- | --- | --- | --- | --- | --- | ---- | --- | --- |
| ACCESS SHARE           | Y   | Y   | Y   | Y   | Y   | Y    | Y   | N   |
| ROW SHARE              | Y   | Y   | Y   | Y   | Y   | Y    | N   | N   |
| ROW EXCLUSIVE          | Y   | Y   | Y   | Y   | N   | N    | N   | N   |
| SHARE UPDATE EXCLUSIVE | Y   | Y   | Y   | Y   | N   | N    | N   | N   |
| SHARE                  | Y   | Y   | N   | N   | Y   | N    | N   | N   |
| SHARE ROW EXCL         | Y   | Y   | N   | N   | N   | N    | N   | N   |
| EXCLUSIVE              | Y   | N   | N   | N   | N   | N    | N   | N   |
| ACCESS EXCL            | N   | N   | N   | N   | N   | N    | N   | N   |

## Row-Level Locks

Row-level locks are more granular than table-level locks. They block modifications to specific rows
but allow concurrent access to other rows in the same table.

### Implicit Row Locks

Every `UPDATE`, `DELETE`, or `SELECT FOR UPDATE/SHARE` acquires a row-level lock. These are
implemented as transaction-level locks -- they are held until the transaction commits or rolls back.

```sql
-- UPDATE implicitly locks the row
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- DELETE implicitly locks the row
DELETE FROM orders WHERE order_id = 42;
```

### FOR UPDATE / FOR SHARE

```sql
-- Lock rows for update (prevents concurrent modifications)
SELECT * FROM accounts WHERE account_id IN (1, 2, 3) FOR UPDATE;

-- Lock rows for update, non-blocking (skip already-locked rows)
SELECT * FROM tasks
WHERE status = 'pending'
ORDER BY created_at
LIMIT 1
FOR UPDATE SKIP LOCKED;

-- Lock rows in shared mode (prevents writes, allows other shared locks)
SELECT * FROM config WHERE key = 'global_settings' FOR SHARE;

-- Lock specific tables in a multi-table query
SELECT * FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.order_id = 42
FOR UPDATE OF o;  -- only locks rows in the orders table

-- NOWAIT: fail immediately if a row is locked
SELECT * FROM accounts WHERE account_id = 1 FOR UPDATE NOWAIT;
-- ERROR: could not obtain lock on row
```

### FOR NO KEY UPDATE / FOR KEY SHARE (PostgreSQL 9.4+)

These are weaker variants that do not conflict with each other:

```sql
-- FOR NO KEY UPDATE: does not conflict with FOR KEY SHARE
-- Use case: update non-key columns while allowing concurrent FOR KEY SHARE reads
SELECT * FROM products WHERE product_id = 42 FOR NO KEY UPDATE;

-- FOR KEY SHARE: does not conflict with FOR NO KEY UPDATE
-- Use case: read a row and check its key for a foreign key constraint
SELECT * FROM products WHERE product_id = 42 FOR KEY SHARE;
```

| Lock Mode           | Blocks `FOR UPDATE` | Blocks `FOR NO KEY UPDATE` | Blocks `FOR SHARE` | Blocks `FOR KEY SHARE` |
| ------------------- | ------------------- | -------------------------- | ------------------ | ---------------------- |
| `FOR UPDATE`        | Yes                 | Yes                        | Yes                | Yes                    |
| `FOR NO KEY UPDATE` | Yes                 | Yes                        | Yes                | No                     |
| `FOR SHARE`         | Yes                 | Yes                        | Yes                | Yes                    |
| `FOR KEY SHARE`     | Yes                 | No                         | Yes                | Yes                    |

## Explicit Table Locking

```sql
-- Lock a table explicitly (holds the lock until end of transaction)
LOCK TABLE accounts IN ACCESS EXCLUSIVE MODE;
LOCK TABLE accounts IN SHARE MODE;
LOCK TABLE accounts IN ROW EXCLUSIVE MODE;

-- NOWAIT: fail immediately if lock cannot be acquired
LOCK TABLE accounts IN ACCESS EXCLUSIVE MODE NOWAIT;
```

## Deadlocks

A deadlock occurs when two or more transactions hold locks that the other needs, creating a circular
wait. PostgreSQL detects deadlocks automatically and aborts one of the transactions.

### Deadlock Example

```text
T1: BEGIN;
T1: UPDATE accounts SET balance = balance - 500 WHERE id = 1;  -- locks row 1

T2: BEGIN;
T2: UPDATE accounts SET balance = balance - 300 WHERE id = 2;  -- locks row 2

T1: UPDATE accounts SET balance = balance + 300 WHERE id = 2;  -- blocks, waiting for T2
T2: UPDATE accounts SET balance = balance + 500 WHERE id = 1;  -- blocks, waiting for T1

-- DEADLOCK DETECTED
-- PostgreSQL aborts T2 (the "victim") with error 40P01
-- T1 proceeds normally
```

### Deadlock Detection

PostgreSQL runs deadlock detection periodically (not continuously). When the deadlock detector runs:

1. It builds a wait-for graph from `pg_locks`
2. It checks for cycles in the graph
3. If a cycle is found, it aborts the transaction with the least work done (youngest xid)

```sql
-- Monitor for deadlock errors
SELECT datname, deadlocks FROM pg_stat_database;
```

### Deadlock Prevention Strategies

1. **Consistent access order**: Always access tables and rows in the same order across all
   transactions.

```sql
-- Always update lower-ID accounts first
CREATE OR REPLACE FUNCTION transfer(from_id INTEGER, to_id INTEGER, amount NUMERIC)
RETURNS VOID AS $$
BEGIN
    UPDATE accounts SET balance = balance - amount
    WHERE account_id = LEAST(from_id, to_id);

    UPDATE accounts SET balance = balance + amount
    WHERE account_id = GREATEST(from_id, to_id);
END;
$$ LANGUAGE plpgsql;
```

2. **Short transactions**: Minimize the time locks are held.

```sql
-- BAD: long transaction holding locks
BEGIN;
SELECT * FROM orders WHERE customer_id = 42 FOR UPDATE;  -- lock held
-- ... application does complex calculations for 5 seconds ...
UPDATE orders SET status = 'processing' WHERE customer_id = 42;
COMMIT;

-- GOOD: compute first, then lock briefly
-- ... application computes what to do ...
BEGIN;
SELECT * FROM orders WHERE customer_id = 42 FOR UPDATE;  -- lock held briefly
UPDATE orders SET status = 'processing' WHERE customer_id = 42;
COMMIT;
```

3. **SKIP LOCKED**: Non-blocking queue pattern for concurrent workers.

```sql
-- Worker picks up next available task without blocking
SELECT * FROM tasks
WHERE status = 'pending'
ORDER BY priority DESC, created_at ASC
LIMIT 1
FOR UPDATE SKIP LOCKED;
```

4. **Retry logic**: Always handle deadlocks with retry at the application level.

```python
import time
import random

MAX_RETRIES = 5
BASE_DELAY = 0.1  # 100ms

for attempt in range(MAX_RETRIES):
    try:
        execute_transfer(from_id, to_id, amount)
        break
    except OperationalError as e:
        if 'deadlock detected' in str(e).lower():
            delay = BASE_DELAY * (2 ** attempt) + random.uniform(0, BASE_DELAY)
            time.sleep(delay)
        else:
            raise
else:
    raise MaxRetriesExceeded(f"Failed after {MAX_RETRIES} attempts")
```

## Advisory Locks

Advisory locks are application-level locks that are not tied to any table or row. They are managed
entirely by the application and enforced by PostgreSQL.

### Session-Level Advisory Locks

```sql
-- Lock by integer (blocks until available)
SELECT pg_advisory_lock(12345);

-- Try-lock (returns immediately, TRUE if acquired)
SELECT pg_advisory_try_lock(12345);

-- Unlock
SELECT pg_advisory_unlock(12345);

-- Lock by two integers (useful for (tenant_id, resource_id))
SELECT pg_advisory_lock(42, 100);

-- Session-level locks are held until explicitly released or session ends
-- They survive COMMIT and ROLLBACK
```

### Transaction-Level Advisory Locks

```sql
-- Transaction-level advisory locks (auto-released on COMMIT or ROLLBACK)
SELECT pg_advisory_xact_lock(12345);
SELECT pg_advisory_xact_lock_shared(12345);
```

### Use Cases

| Use Case                         | Advisory Lock Pattern                    | Notes                              |
| -------------------------------- | ---------------------------------------- | ---------------------------------- |
| Prevent concurrent job execution | `pg_advisory_lock(job_type_id)`          | Blocks until previous job finishes |
| Distributed rate limiting        | `pg_advisory_lock(user_id)` with timeout | 1 lock per user                    |
| Prevent duplicate inserts        | `pg_advisory_xact_lock(hash(data))`      | Auto-released on commit/rollback   |
| Coordinate deployments           | `pg_advisory_lock(migration_id)`         | Only one migration runs at a time  |

:::info

Advisory locks do not conflict with regular row or table locks. They exist in a separate namespace.
Advisory locks on the same bigint value from different sessions conflict, regardless of which
application or connection acquired them.

:::

## Lock Monitoring

### pg_locks

```sql
-- All currently held locks
SELECT
    l.pid,
    l.locktype,
    l.mode,
    l.granted,
    a.datname,
    a.relname,
    a.query,
    a.wait_event_type,
    a.wait_event,
    EXTRACT(EPOCH FROM (now() - a.query_start)) AS duration_seconds
FROM pg_locks l
JOIN pg_stat_activity a ON l.pid = a.pid
WHERE l.granted = FALSE  -- only blocked locks
ORDER BY a.query_start;
```

### pg_stat_activity

```sql
-- Sessions waiting for locks
SELECT
    pid,
    usename,
    datname,
    state,
    wait_event_type,
    wait_event,
    query,
    EXTRACT(EPOCH FROM (now() - query_start)) AS wait_seconds
FROM pg_stat_activity
WHERE wait_event_type = 'Lock'
ORDER BY query_start;

-- Long-running transactions (potential lock holders)
SELECT
    pid,
    usename,
    state,
    EXTRACT(EPOCH FROM (now() - xact_start)) AS xact_duration,
    EXTRACT(EPOCH FROM (now() - query_start)) AS query_duration,
    query
FROM pg_stat_activity
WHERE state != 'idle'
  AND now() - xact_start > INTERVAL '5 minutes'
ORDER BY xact_start;
```

### Lock Tree View

```sql
-- Show which sessions are blocking which
SELECT
    blocked.pid AS blocked_pid,
    blocked.query AS blocked_query,
    blocking.pid AS blocking_pid,
    blocking.query AS blocking_query
FROM pg_stat_activity blocked
JOIN pg_locks blocked_locks ON blocked.pid = blocked_locks.pid
JOIN pg_locks blocking_locks
    ON blocked_locks.locktype = blocking_locks.locktype
    AND blocked_locks.database IS NOT DISTINCT FROM blocking_locks.database
    AND blocked_locks.relation IS NOT DISTINCT FROM blocking_locks.relation
    AND blocked_locks.page IS NOT DISTINCT FROM blocking_locks.page
    AND blocked_locks.tuple IS NOT DISTINCT FROM blocking_locks.tuple
    AND blocked_locks.virtualxid IS NOT DISTINCT FROM blocking_locks.virtualxid
    AND blocked_locks.transactionid IS NOT DISTINCT FROM blocking_locks.transactionid
    AND blocked_locks.classid IS NOT DISTINCT FROM blocking_locks.classid
    AND blocked_locks.objid IS NOT DISTINCT FROM blocking_locks.objid
    AND blocked_locks.objsubid IS NOT DISTINCT FROM blocking_locks.objsubid
    AND blocked_locks.pid != blocking_locks.pid
JOIN pg_stat_activity blocking ON blocking_locks.pid = blocking.pid
WHERE NOT blocked_locks.granted;
```

## MVCC Implementation Details

### Row Visibility Rules

Each row (tuple) in PostgreSQL has two hidden system columns:

| Column | Meaning                                                          |
| ------ | ---------------------------------------------------------------- |
| `xmin` | Transaction ID that inserted this row version                    |
| `xmax` | Transaction ID that deleted/updated this row (0 = still visible) |
| `ctid` | Physical location (block number, offset within block)            |

Visibility for a transaction with snapshot `(xmin_snap, xmax_snap)`:

```text
A row is VISIBLE to the current transaction if:
  1. xmin is committed AND xmin &lt; xmax_snap  (inserted before snapshot)
  2. xmax = 0 (not deleted) OR xmax is aborted (deleter rolled back)
     OR xmax >= xmax_snap (deleted after snapshot, or by in-progress tx)

A row is INVISIBLE if:
  1. xmin is aborted (inserter rolled back)
  2. xmin is in-progress and xmin != current tx
  3. xmax is committed AND xmax &lt; xmax_snap (deleted before snapshot)
```

### Why VACUUM Is Necessary

When a row is updated or deleted, PostgreSQL does not physically remove the old row version.
Instead, it marks the old version as dead by setting `xmax` to the deleting transaction's ID. These
dead tuples consume disk space and slow down scans until VACUUM reclaims them.

```sql
-- Check for table bloat
SELECT relname,
       pg_size_pretty(pg_total_relation_size(relid)) AS total_size,
       pg_size_pretty(pg_relation_size(relid)) AS table_size,
       pg_size_pretty(pg_total_relation_size(relid) - pg_relation_size(relid)) AS index_size,
       n_dead_tup, n_live_tup,
       ROUND(n_dead_tup::NUMERIC / NULLIF(n_live_tup + n_dead_tup, 0) * 100, 2) AS dead_pct
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;
```

### Transaction ID Wraparound

PostgreSQL uses 32-bit transaction IDs (approximately 4 billion). When the counter wraps around, old
data appears to be in the future and becomes invisible. Autovacuum prevents this by freezing old
tuples:

```sql
-- Check how close databases are to wraparound
SELECT datname, age(datfrozenxid) AS xid_age,
       pg_size_pretty(pg_database_size(datname)) AS db_size
FROM pg_database
ORDER BY age(datfrozenxid) DESC;

-- Emergency: force freeze if xid_age is approaching 2 billion
VACUUM FREEZE VERBOSE;
```

## Hot Standby and Replication Conflicts

### Replication Lag and Locks

On a streaming replica (hot standby), queries may conflict with replayed WAL records:

| Conflict Type       | What Happens                                        |
| ------------------- | --------------------------------------------------- |
| AccessExclusiveLock | Replica query blocked by DDL replay                 |
| TableLock           | Replica query blocked by table lock replay          |
| SnapshotConflict    | Replica query needs rows being vacuumed on primary  |
| BufferPin           | Replica holds a buffer pin on a page being replayed |

```sql
-- On the replica: view replication conflicts
SELECT * FROM pg_stat_database_conflicts;

-- Configuration: how long replica queries wait before being canceled
-- max_standby_streaming_delay = 30s (default)
-- max_standby_archive_delay = 30s (default)
```

## Long-Running Transactions

### Idle in Transaction

A session that has `BEGIN` but is not actively executing queries holds a snapshot that prevents
VACUUM from reclaiming dead tuples.

```sql
-- Find idle-in-transaction sessions
SELECT pid, usename, datname,
       EXTRACT(EPOCH FROM (now() - xact_start)) AS idle_seconds,
       query
FROM pg_stat_activity
WHERE state = 'idle in transaction'
ORDER BY xact_start;

-- Kill idle-in-transaction sessions (be careful)
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE state = 'idle in transaction'
  AND now() - xact_start > INTERVAL '10 minutes';
```

### statement_timeout and lock_timeout

```sql
-- Abort queries that run too long
SET statement_timeout = '30s';
SET lock_timeout = '10s';

-- Per-role defaults
ALTER ROLE app_user SET statement_timeout = '30s';
ALTER ROLE app_user SET lock_timeout = '10s';

-- Per-database defaults
ALTER DATABASE mydb SET statement_timeout = '30s';

-- Per-session override (for known long-running maintenance)
SET LOCAL statement_timeout = '0';  -- disable for this transaction
```

| Timeout                               | What It Aborts                                      | Default      |
| ------------------------------------- | --------------------------------------------------- | ------------ |
| `statement_timeout`                   | Any statement exceeding duration                    | 0 (disabled) |
| `lock_timeout`                        | Any statement waiting for a lock exceeding duration | 0 (disabled) |
| `idle_in_transaction_session_timeout` | Sessions idle in transaction                        | 0 (disabled) |

## Lock Escalation

Unlike SQL Server and Oracle, PostgreSQL does **not** perform automatic lock escalation from
row-level to table-level locks. Row locks and table locks are independent mechanisms. However,
acquiring too many row locks does consume significant shared memory for the lock table. If you need
to update millions of rows, consider:

```sql
-- Process in batches to avoid holding too many row locks
DO $$
DECLARE
    batch_size INTEGER := 10000;
    rows_updated INTEGER;
BEGIN
    LOOP
        UPDATE large_table
        SET status = 'archived'
        WHERE status = 'active'
        LIMIT batch_size;

        GET DIAGNOSTICS rows_updated = ROW_COUNT;
        EXIT WHEN rows_updated = 0;

        COMMIT;
    END LOOP;
END $$;
```

## Optimistic Locking Patterns

### Version Column

```sql
CREATE TABLE inventory (
    product_id INTEGER PRIMARY KEY,
    quantity INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 1,
    CHECK (quantity >= 0)
);

-- Application reads: product_id=42, quantity=100, version=5
-- Application computes: new_quantity = 97

UPDATE inventory
SET quantity = 97, version = version + 1
WHERE product_id = 42 AND version = 5;
-- If rows_affected = 1: success
-- If rows_affected = 0: conflict (someone else modified the row), retry
```

### Updated_at Timestamp

```sql
CREATE TABLE documents (
    doc_id INTEGER PRIMARY KEY,
    title TEXT,
    body TEXT,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Application reads: doc_id=1, updated_at='2024-01-15T10:30:00Z'
-- Application modifies title and submits

UPDATE documents
SET title = 'New Title', updated_at = NOW()
WHERE doc_id = 1 AND updated_at = '2024-01-15T10:30:00Z';
```

### Compare and Swap (CAS)

```sql
-- Atomically update only if current value matches expected
UPDATE accounts
SET balance = balance - 100
WHERE account_id = 1 AND balance >= 100;

-- Check result count: 1 = success, 0 = insufficient funds
```

## Common Pitfalls

### Not Setting lock_timeout

A query waiting for a lock can block indefinitely. If the lock holder has a long-running transaction
or a crashed session (though PostgreSQL usually detects crashed backends via TCP keepalive), waiting
queries pile up. Always set `lock_timeout`:

```sql
SET lock_timeout = '10s';
-- After 10s of waiting for a lock: ERROR: canceling statement due to lock timeout
```

### Forgetting That FOR UPDATE Blocks Concurrent Reads in REPEATABLE READ

In `REPEATABLE READ`, `SELECT ... FOR UPDATE` blocks if another transaction has modified the row
(even if committed). In `READ COMMITTED`, `SELECT ... FOR UPDATE` re-evaluates the row after
acquiring the lock. Know your isolation level.

### Advisory Lock Leaks

Session-level advisory locks persist until the session ends or the lock is explicitly released. If
your application crashes or the connection pool drops the connection, the lock is automatically
released when the TCP connection closes. However, with PgBouncer in session mode, a recycled
connection may still hold a lock from a previous session. Use transaction-level advisory locks
(`pg_advisory_xact_lock`) for automatic cleanup.

### Not Handling Deadlock Errors

Deadlocks are a normal occurrence in concurrent systems. If your application does not catch error
code `40P01` and retry, users will see unexplained failures. Implement retry logic with exponential
backoff in every transaction that acquires locks.

### Long Transactions Holding Row Locks

A transaction that opens with `BEGIN`, then makes an HTTP call or waits for user input while holding
row locks, blocks all other transactions that need those rows. Minimize transaction duration: do all
read-only work before `BEGIN`, then lock and modify within the transaction.

### Using LOCK TABLE When Row Locks Suffice

`LOCK TABLE ... IN ACCESS EXCLUSIVE MODE` blocks all reads and writes on the entire table. Use the
most specific lock that satisfies your requirement: `SELECT ... FOR UPDATE` for row locks,
`SELECT ... FOR UPDATE OF table_name` for specific tables in a multi-table query.

## Lock Duration and Transaction Boundaries

### Lock Release on Commit or Rollback

All locks acquired during a transaction (row locks, table locks, advisory locks) are released when
the transaction ends. There is no way to release a lock before the transaction commits or rolls
back, except for `SAVEPOINT` + `ROLLBACK TO SAVEPOINT` which releases locks acquired after the
savepoint.

```sql
BEGIN;

-- Acquire row lock
SELECT * FROM accounts WHERE account_id = 1 FOR UPDATE;

SAVEPOINT sp1;

-- Acquire another row lock
SELECT * FROM accounts WHERE account_id = 2 FOR UPDATE;

-- This releases the lock on account_id = 2 but keeps the lock on account_id = 1
ROLLBACK TO SAVEPOINT sp1;

-- Both locks are released on COMMIT or ROLLBACK
COMMIT;
```

:::warning

`ROLLBACK TO SAVEPOINT` releases locks acquired after the savepoint, but it does NOT release
advisory locks. Advisory locks are always held until the transaction ends or explicitly released,
regardless of savepoints.

:::

### Implicit Locks from DDL

DDL statements acquire table-level locks that may conflict with concurrent operations:

| DDL Operation                 | Lock Acquired                   | Blocks                        |
| ----------------------------- | ------------------------------- | ----------------------------- |
| `CREATE INDEX`                | SHARE                           | INSERT, UPDATE, DELETE        |
| `CREATE INDEX CONCURRENTLY`   | None (effectively)              | Nothing (but takes longer)    |
| `ALTER TABLE ... ADD COLUMN`  | ACCESS EXCLUSIVE                | All operations                |
| `ALTER TABLE ... DROP COLUMN` | ACCESS EXCLUSIVE                | All operations                |
| `TRUNCATE TABLE`              | ACCESS EXCLUSIVE                | All operations                |
| `DROP TABLE`                  | ACCESS EXCLUSIVE                | All operations                |
| `VACUUM` (without FULL)       | SHARE UPDATE EXCLUSIVE          | INSERT, UPDATE, DELETE, SHARE |
| `VACUUM FULL`                 | ACCESS EXCLUSIVE                | All operations                |
| `ANALYZE`                     | SHARE UPDATE EXCLUSIVE          | SELECT is allowed             |
| `GRANT` / `REVOKE`            | ACCESS EXCLUSIVE (on the table) | All operations                |

### Lock Waits and Blocking Queries

```sql
-- Find all currently blocked queries with full context
SELECT
    blocked.pid AS blocked_pid,
    blocked.usename AS blocked_user,
    blocked.query AS blocked_query,
    EXTRACT(EPOCH FROM (now() - blocked.query_start)) AS blocked_duration,
    blocking.pid AS blocking_pid,
    blocking.usename AS blocking_user,
    blocking.query AS blocking_query,
    EXTRACT(EPOCH FROM (now() - blocking.xact_start)) AS blocking_tx_duration,
    blocking.wait_event AS blocking_wait_event
FROM pg_stat_activity blocked
JOIN pg_locks blocked_locks ON blocked.pid = blocked_locks.pid
JOIN pg_locks blocking_locks
    ON blocked_locks.locktype = blocking_locks.locktype
    AND blocked_locks.database IS NOT DISTINCT FROM blocking_locks.database
    AND blocked_locks.relation IS NOT DISTINCT FROM blocking_locks.relation
    AND blocked_locks.page IS NOT DISTINCT FROM blocking_locks.page
    AND blocked_locks.tuple IS NOT DISTINCT FROM blocking_locks.tuple
    AND blocked_locks.virtualxid IS NOT DISTINCT FROM blocking_locks.virtualxid
    AND blocked_locks.transactionid IS NOT DISTINCT FROM blocking_locks.transactionid
    AND blocked_locks.classid IS NOT DISTINCT FROM blocking_locks.classid
    AND blocked_locks.objid IS NOT DISTINCT FROM blocking_locks.objid
    AND blocked_locks.objsubid IS NOT DISTINCT FROM blocking_locks.objsubid
    AND blocked_locks.pid != blocking_locks.pid
JOIN pg_stat_activity blocking ON blocking_locks.pid = blocking.pid
WHERE NOT blocked_locks.granted
ORDER BY blocked_duration DESC;
```

## Predicate Locks and Serializable Isolation

### How SSI Tracks Predicate Locks

Under SERIALIZABLE isolation, PostgreSQL's SSI (Serializable Snapshot Isolation) tracks **predicate
locks** (also called SIRead locks) to detect dangerous structures. A predicate lock represents the
set of rows that a transaction read, and it is used to detect when a concurrent transaction modifies
data that could affect a previous read.

```sql
-- T1 reads a range of rows (predicate lock acquired on the range)
BEGIN ISOLATION LEVEL SERIALIZABLE;
SELECT * FROM doctors WHERE on_call = TRUE;
-- SSI records a predicate lock: "read rows where on_call = TRUE"

-- T2 modifies a row matching the predicate
BEGIN ISOLATION LEVEL SERIALIZABLE;
UPDATE doctors SET on_call = FALSE WHERE id = 5;
COMMIT;
-- SSI detects: T2 wrote a row that T1's predicate lock covers

-- T1 attempts to write based on its read
UPDATE doctors SET on_call = FALSE WHERE id = 1;
COMMIT;
-- ERROR: could not serialize access due to concurrent update
```

### rw-conflict Detection

SSI tracks two types of dependencies between transactions:

1. **rw-conflict (read-write conflict):** Transaction T1 reads a row, T2 writes to it (before T1
   commits)
2. **wr-conflict (write-read conflict):** Transaction T1 writes a row, T2 reads it (before T1
   commits)

If these dependencies form a cycle in the serialization graph, one of the transactions must be
aborted.

```sql
-- Monitor serialization failures
SELECT datname, s_conflicts
FROM pg_stat_database
WHERE datname = 'mydb';
```

### False Positives

SSI is conservative: it may abort transactions that would have produced a serializable result,
because the cycle detection cannot always distinguish safe from unsafe patterns. This is the price
of optimistic concurrency control. Applications using SERIALIZABLE must always implement retry
logic.

## Hot Standby Feedback and Replication Lag

### How Hot Standby Works

A hot standby replica accepts read queries while applying WAL from the primary. Read queries on the
replica see a consistent snapshot as of the point where WAL replay has reached.

```sql
-- On the replica: check replication lag
SELECT
    pg_is_in_recovery() AS is_standby,
    pg_last_wal_receive_lsn() AS received_lsn,
    pg_last_wal_replay_lsn() AS replay_lsn,
    pg_last_xact_replay_timestamp() AS last_replayed_tx;
```

### max_standby_streaming_delay

When a query on the replica needs to read data that is being modified by WAL replay, the replica
waits up to `max_standby_streaming_delay` before canceling the query:

```conf
# postgresql.conf (on the replica)
max_standby_streaming_delay = 30s
hot_standby_feedback = on
```

With `hot_standby_feedback = on`, the replica sends information about long-running queries back to
the primary, which delays vacuum of rows that are still visible on the replica. This reduces
replication conflicts but may cause table bloat on the primary.

### Monitoring Replication Conflicts

```sql
-- On the replica: see all replication conflicts
SELECT * FROM pg_stat_database_conflicts;

-- Columns:
-- confl_tablespace: conflicts due to dropped tablespaces
-- confl_lock: conflicts due to row-level locks
-- confl_snapshot: conflicts due to old snapshot (vacuumed rows needed)
-- confl_bufferpin: conflicts due to buffer pin
-- confl_deadlock: conflicts due to deadlocks
```

## Lock Escalation Myths

### Why PostgreSQL Does Not Escalate Locks

SQL Server and Oracle escalate row locks to table locks when a transaction holds too many individual
row locks (typically hundreds or thousands). PostgreSQL does not do this. The rationale:

1. Row locks in PostgreSQL are very lightweight (they are stored in shared memory, not on disk)
2. Lock escalation would reduce concurrency unpredictably
3. The planner chooses the right lock granularity based on the query plan

However, holding too many row locks does consume shared memory. The `max_locks_per_transaction`
parameter controls how many lock objects each transaction can hold:

```sql
-- Current setting
SHOW max_locks_per_transaction;
-- Default: 64

-- Each transaction can hold up to (max_locks_per_transaction * max_connections) lock objects
-- If a transaction exceeds this limit: ERROR: out of shared memory

-- Increase if you have transactions that modify millions of rows
-- This requires a PostgreSQL restart
-- shared_preload_libraries is not needed; just change the parameter
```

### Batch Processing to Avoid Lock Accumulation

```sql
-- Process in batches to avoid exceeding max_locks_per_transaction
DO $$
DECLARE
    batch_size INTEGER := 10000;
    total_updated INTEGER := 0;
    batch_updated INTEGER;
BEGIN
    LOOP
        UPDATE large_table
        SET status = 'processed'
        WHERE status = 'pending'
          AND id > total_updated
        ORDER BY id
        LIMIT batch_size;

        GET DIAGNOSTICS batch_updated = ROW_COUNT;
        total_updated := total_updated + batch_updated;
        EXIT WHEN batch_updated = 0;

        COMMIT;
        RAISE NOTICE 'Updated % rows (total: %)', batch_updated, total_updated;
    END LOOP;
END $$;
```

## Real-World Locking Patterns

### Inventory Reservation with NOWAIT

```sql
BEGIN;
-- Attempt to lock inventory; fail immediately if unavailable
SELECT product_id, quantity
FROM inventory
WHERE product_id = 42
FOR UPDATE NOWAIT;

-- If we get here, we hold the lock. Check availability.
-- (Application logic: if quantity < requested, ROLLBACK)

UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 42;
COMMIT;
```

### Job Queue with SKIP LOCKED

```sql
-- Worker picks up next job without blocking
BEGIN;
SELECT job_id, payload, priority
FROM job_queue
WHERE status = 'pending'
ORDER BY priority DESC, created_at ASC
LIMIT 1
FOR UPDATE SKIP LOCKED;

-- If no rows returned, queue is empty or all jobs are being processed
-- Process the job, then:
UPDATE job_queue SET status = 'completed' WHERE job_id = <selected_id>;
COMMIT;
```

### Distributed Lock with Advisory Locks

```sql
-- Ensure only one instance of a scheduled job runs across multiple servers
SELECT pg_advisory_lock(hashtext('nightly_report_job'));

-- If this returns, we hold the lock. Run the job.
-- Other instances will block until we release.

-- After job completes:
SELECT pg_advisory_unlock(hashtext('nightly_report_job'));

-- For crash safety, use transaction-level locks:
BEGIN;
SELECT pg_advisory_xact_lock(hashtext('nightly_report_job'));
-- Job runs here...
COMMIT;  -- Lock released automatically
```

### Preventing Double-Spend with Serializable

```sql
-- Prevent overselling with SERIALIZABLE isolation
BEGIN ISOLATION LEVEL SERIALIZABLE;

SELECT SUM(quantity) AS total_available
FROM inventory
WHERE product_id = 42 AND warehouse_id = 1;

-- Application checks: total_available >= requested_quantity

INSERT INTO order_items (order_id, product_id, quantity)
VALUES (100, 42, requested_quantity);

UPDATE inventory SET quantity = quantity - requested_quantity
WHERE product_id = 42 AND warehouse_id = 1;

COMMIT;
-- If another transaction modified inventory between our SELECT and COMMIT,
-- we get a serialization error and must retry
```
