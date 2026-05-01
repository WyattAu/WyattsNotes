---
id: indexing
title: Indexing and Optimization
description:
  Indexing and Optimization — Why Indexes Matter; B-Tree Structure; Node
  Anatomy; B-Tree vs B+ Tree with worked examples and exam-style questions.
slug: indexing
sidebar_position: 1
tags:
  - Databases
categories:
  - Databases
---

## Why Indexes Matter

Without an index, finding a specific row in a table of $N$ rows requires a full sequential scan,
which is $O(N)$. A B-tree index reduces this to $O(\log N)$ -- for a table of one billion rows, that
is the difference between examining one billion rows and approximately 30.

Indexes are the single most impactful performance tool available to a database user. The query
planner cannot use an index that does not exist, and adding the wrong index wastes storage and slows
down writes. Understanding how indexes work internally is the difference between a query that runs
in milliseconds and one that takes minutes.

## B-Tree Structure

The B-tree (Bayer and McCreight, 1972) is the default index structure in PostgreSQL, MySQL (InnoDB),
and most relational databases. Despite the name, modern implementations use B+ trees.

### Node Anatomy

A B-tree is a balanced, self-sorting tree with the following properties:

- Every node stores an array of **keys** and **pointers**
- Internal nodes store keys and pointers to child nodes
- Leaf nodes store keys and pointers to the actual table rows (or to the row's physical location)
- The tree is always **balanced**: all leaf nodes are at the same depth
- Every node (except the root) is at least **half full** (this is the minimum fill factor)

### B-Tree vs B+ Tree

```text
B-Tree (internal nodes store data):
           [10 | 20 | 30]
          /     |      |      \
  [3,5,7] [12,15,18] [22,25,28] [32,35,40]

B+ Tree (all data in leaves, leaves linked):
           [10 | 20 | 30]
          /     |      |      \
  [3,5,7] [12,15,18] [22,25,28] [32,35,40]
    |        |          |          |
    v        v          v          v
  [leaf] -> [leaf] -> [leaf] -> [leaf]  (linked list for range scans)
```

| Property     | B-Tree                   | B+ Tree                               |
| ------------ | ------------------------ | ------------------------------------- |
| Data storage | In all nodes             | Only in leaf nodes                    |
| Leaf linkage | None                     | Doubly-linked list                    |
| Range scans  | Requires tree traversal  | Sequential scan of linked leaves      |
| Node fill    | Variable                 | Typically 2/3 to 4/5 (higher fan-out) |
| Height       | Taller for the same data | Shorter (higher fan-out)              |

### Depth and Fan-Out

For a B+ tree with fan-out $f$ (number of children per internal node) and height $h$:

$$\mathrm{Max entries} = f^h$$

$$\mathrm{Height} = \lceil \log_f N \rceil$$

In practice:

- A PostgreSQL page is 8KB
- A typical B-tree index entry is about 20-50 bytes (depending on key size)
- Fan-out per internal node: approximately 160-400 entries
- For 1 billion rows: height = $\lceil \log_{300}(10^9) \rceil \approx 4$

This means **every index lookup traverses at most 4 pages** -- approximately 4 disk seeks or, more
likely with the buffer pool, 4 cache lookups.

### Insertion

1. Find the correct leaf node by traversing from the root
2. Insert the new key in sorted order in the leaf
3. If the leaf overflows (exceeds page capacity):
   - Split the leaf into two halves
   - Promote the median key to the parent
   - If the parent overflows, split it recursively
   - If the root splits, create a new root (tree height increases by 1)

### Deletion

1. Find the key in the leaf
2. Remove the key
3. If the leaf underflows (below minimum fill factor):
   - Attempt to redistribute entries from a sibling (borrow)
   - If siblings are also at minimum, merge with a sibling
   - If the parent underflows, recurse upward
   - If the root has one child and is an internal node, the child becomes the new root

:::info

PostgreSQL does not immediately reclaim space from page splits. Empty space on B-tree pages is
reused by future inserts, but the pages themselves are not returned to the OS until `VACUUM FULL` or
`pg_repack`. This is why B-tree indexes can become bloated after heavy UPDATE/DELETE workloads.

:::

## Hash Indexes

Hash indexes use a hash function to map keys directly to bucket locations, providing $O(1)$ average
lookup for exact equality checks.

### When to Use

- Workload is exclusively point lookups (`WHERE key = value`)
- No range queries needed (hash indexes cannot do `WHERE key > value`)
- No sorting needed (hash indexes cannot do `ORDER BY key`)
- No prefix matching needed

### Limitations

- No range scans
- No ORDER BY
- No partial matches or LIKE
- No partial indexes
- In PostgreSQL prior to 10, hash indexes were not WAL-logged (not crash-safe)
- Generally not recommended in PostgreSQL; use B-tree instead unless you have a specific reason

```sql
CREATE INDEX idx_users_email_hash ON users USING hash (email);
```

## Covering Indexes

A covering index (also called an index-only scan) contains all the columns needed by a query, so the
database never needs to access the table itself (the "heap" in PostgreSQL terminology).

```sql
-- Query:
SELECT first_name, last_name, email FROM employees WHERE department_id = 5;

-- Covering index (includes the selected columns):
CREATE INDEX idx_emp_dept_covering ON employees (department_id, first_name, last_name, email);
```

The benefits are significant:

- **No heap access**: the query is satisfied entirely from the index
- **Less I/O**: index pages are typically much smaller than table pages
- **Better cache utilisation**: more index entries fit in the buffer pool

In PostgreSQL, an index-only scan requires that the visibility map indicates all pages are
all-visible. If any referenced page has dirty visibility information, the database falls back to a
regular index scan that checks the heap. This is why `VACUUM` matters for index-only scan
performance.

## Composite Indexes

A composite (multi-column) index is an index on two or more columns. The order of columns in a
composite index matters critically.

### The Leftmost Prefix Rule

A composite index `(A, B, C)` can satisfy queries that filter on:

- `A`
- `A, B`
- `A, B, C`

But **not** queries that filter on:

- `B` alone
- `C` alone
- `B, C`

```sql
CREATE INDEX idx_emp_dept_hire ON employees (department_id, hire_date, salary);

-- Uses the index:
SELECT * FROM employees WHERE department_id = 3;
SELECT * FROM employees WHERE department_id = 3 AND hire_date > '2023-01-01';
SELECT * FROM employees WHERE department_id = 3 AND hire_date > '2023-01-01' AND salary > 100000;

-- Does NOT use the index effectively (falls back to seq scan or partial index scan):
SELECT * FROM employees WHERE hire_date > '2023-01-01';
SELECT * FROM employees WHERE salary > 100000;
```

### Column Order Strategy

The general rule for ordering columns in a composite index:

1. **Equality columns first** -- columns used with `=` go before range columns
2. **Range columns after equality** -- columns used with `>`, `<`, `BETWEEN`, `LIKE` come after
3. **Most selective columns first** among equality columns (reduces the search space faster)

```sql
-- Good: equality (department_id) before range (hire_date)
CREATE INDEX idx_emp_dept_hire ON employees (department_id, hire_date);

-- Bad: range column first makes the equality column unusable
CREATE INDEX idx_emp_hire_dept ON employees (hire_date, department_id);
-- Query: WHERE department_id = 3 AND hire_date > '2023-01-01'
-- The department_id filter cannot use this index effectively
```

## Partial Indexes

A partial index is an index built on a subset of rows defined by a WHERE clause. This reduces index
size and maintenance overhead.

```sql
-- Index only active users (99% of queries filter on this anyway)
CREATE INDEX idx_users_active_email ON users (email) WHERE is_active = TRUE;

-- Index only unshipped orders
CREATE INDEX idx_orders_unshipped ON orders (customer_id, created_at)
    WHERE status = 'pending';

-- Index only high-value transactions for fraud detection
CREATE INDEX idx_transactions_large ON transactions (account_id, created_at)
    WHERE amount >= 10000;
```

:::tip

Partial indexes are one of the most underused optimisation tools. If your queries consistently
filter on a condition (e.g., `status = 'active'`), a partial index can be 10-100x smaller than a
full index while providing the same query performance. The key insight: **do not index data your
queries never look for.**

:::

## Expression Indexes

An expression index indexes the result of an expression or function, not just a column value.

```sql
-- Case-insensitive email lookup:
CREATE INDEX idx_users_lower_email ON users (LOWER(email));

-- Indexing a computed value:
CREATE INDEX idx_orders_total ON orders (quantity * unit_price);

-- JSONB field access:
CREATE INDEX idx_events_payload ON events ((payload->>'event_type'));

-- Text search:
CREATE INDEX idx_docs_search ON documents USING gin (to_tsvector('english', content));
```

The query must use the exact same expression to use the index:

```sql
-- Uses the expression index:
SELECT * FROM users WHERE LOWER(email) = 'ada@example.com';

-- Does NOT use the expression index (different expression):
SELECT * FROM users WHERE email = 'ADA@EXAMPLE.COM';
```

## Specialized Index Types

### GIN (Generalized Inverted Index)

Designed for composite types where you need to find rows containing specific elements within a
value: arrays, full-text search, JSONB.

```sql
-- Array containment:
CREATE INDEX idx_tags ON articles USING gin (tags);
SELECT * FROM articles WHERE tags @> ARRAY['database', 'performance'];

-- JSONB containment:
CREATE INDEX idx_metadata ON documents USING gin (metadata);
SELECT * FROM documents WHERE metadata @> '{"category": "engineering"}';

-- Full-text search:
CREATE INDEX idx_fts ON documents USING gin (to_tsvector('english', body));
SELECT * FROM documents WHERE to_tsvector('english', body) @@ to_tsquery('english', 'database & performance');
```

### GiST (Generalized Search Tree)

A framework for building balanced tree structures over custom data types. Used for geometric data,
range types, and full-text search.

```sql
-- Geometric queries:
CREATE INDEX idx_locations ON places USING gist (location);
SELECT * FROM places WHERE location &lt;&lt; circle '((0,0), 5)';

-- Range types:
CREATE INDEX idx_date_ranges ON reservations USING gist (date_range);
SELECT * FROM reservations WHERE date_range && '[2024-01-01, 2024-12-31]'::daterange;
```

### BRIN (Block Range Index)

Stores summary information about ranges of physical table pages. Extremely small but only effective
when data is physically correlated with the indexed column (e.g., a timestamp column where rows are
inserted in chronological order).

```sql
-- For time-series data where newer rows have higher timestamps:
CREATE INDEX idx_sensor_readings_ts ON sensor_readings USING brin (timestamp);
```

A BRIN index for a 100GB table might be only a few hundred KB, compared to several GB for a B-tree
index. The trade-off: the index only tells the query planner which page ranges might contain
matching rows, so it must still scan those pages.

## EXPLAIN and EXPLAIN ANALYZE

`EXPLAIN` shows the query planner's execution plan. `EXPLAIN ANALYZE` actually executes the query
and shows actual timing and row counts alongside the planner's estimates.

### Reading an EXPLAIN Plan

```sql
EXPLAIN ANALYZE
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.dept_id
WHERE e.salary > 100000
ORDER BY e.salary DESC
LIMIT 20;
```

```text
Limit  (cost=0.56..1042.87 rows=20 width=40) (actual time=0.042..0.178 rows=20 loops=1)
  ->  Sort  (cost=0.56..1042.87 rows=20000 width=40) (actual time=0.041..0.174 rows=20 loops=1)
        Sort Key: e.salary DESC
        Sort Method: top-N heapsort  Memory: 27kB
        ->  Nested Loop  (cost=0.28..942.78 rows=20000 width=40) (actual time=0.021..0.124 rows=43 loops=1)
              ->  Index Scan using idx_emp_salary on employees e  (cost=0.28..472.89 rows=20000 width=32) (actual time=0.015..0.072 rows=43 loops=1)
                    Index Cond: (salary > 100000)
              ->  Index Scan using departments_pkey on departments d  (cost=0.00..0.02 rows=1 width=16) (actual time=0.001..0.001 rows=1 loops=43)
                    Index Cond: (dept_id = e.department_id)
Planning Time: 0.142 ms
Execution Time: 0.221 ms
```

Key fields to examine:

| Field         | Meaning                                                  |
| ------------- | -------------------------------------------------------- |
| `cost`        | Planner's estimate of relative cost (lower is better)    |
| `rows`        | Planner's estimate of rows processed at each node        |
| `actual time` | Actual time in milliseconds for this node (from ANALYZE) |
| `actual rows` | Actual rows processed (from ANALYZE)                     |
| `loops`       | Number of times this node was executed (from ANALYZE)    |

### Common Plan Nodes

| Node              | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `Seq Scan`        | Full table scan; reads every row                                 |
| `Index Scan`      | Uses a B-tree index to find matching rows (reads heap for each)  |
| `Index Only Scan` | All data comes from the index; no heap access needed             |
| `Bitmap Scan`     | Two-phase: bitmap of matching pages, then fetch in page order    |
| `Nested Loop`     | For each outer row, look up matching inner rows (good for small) |
| `Hash Join`       | Build hash table on inner, probe with outer (good for large)     |
| `Merge Join`      | Both inputs sorted, merge in one pass (good for pre-sorted data) |
| `Sort`            | In-memory sort (quicksort) or external sort (merge sort to disk) |
| `Aggregate`       | Hash aggregate or Group Aggregate (sorted)                       |
| `Limit`           | Stops processing after N rows                                    |

### When the Planner Gets It Wrong

The query planner relies on statistics gathered by `ANALYZE`. If statistics are stale or the table
has a highly skewed data distribution, the planner may choose a suboptimal plan.

```sql
-- Update statistics for a specific table:
ANALYZE employees;

-- Update statistics for a specific column with more detail:
ALTER TABLE employees ALTER COLUMN salary SET STATISTICS 1000;
ANALYZE employees;

-- Disable a specific plan node type for a single query:
SET enable_seqscan = off;
SET enable_nestloop = off;
SET enable_hashjoin = off;

-- Check current statistics:
SELECT attname, n_distinct, correlation, null_frac
FROM pg_stats
WHERE tablename = 'employees';
```

## Query Execution Plan Analysis

### Sequential Scan vs Index Scan

A sequential scan reads every page of the table in physical order. An index scan reads the index
first, then fetches matching rows from the table. Counterintuitively, a sequential scan can be
faster than an index scan when:

- The table is small (fits in a few pages)
- A large percentage of rows match the query (e.g., `WHERE status = 'active'` when 80% of rows are
  active)
- The index and table are both on disk, causing random I/O for each index entry

The planner's decision threshold is approximately when the query selects more than 5-15% of the
table (varies by index type, data distribution, and hardware).

### Bitmap Index Scan

A bitmap scan is a two-phase strategy:

1. **Bitmap creation phase**: scan the index and build a bitmap of matching heap page numbers
2. **Bitmap heap scan phase**: fetch matching pages in physical page order (sequential I/O)

This avoids the random I/O of a plain index scan while still benefiting from index selectivity.

```text
Index Scan (random I/O):
  Index -> Page 47 -> Index -> Page 2 -> Index -> Page 47 -> Index -> Page 893
  (each heap access is a random disk seek)

Bitmap Scan (sequential I/O):
  Index -> build bitmap {2, 47, 47, 893} -> sort -> fetch pages 2, 47, 893 in order
  (heap pages fetched in physical order, minimizing seeks)
```

### Join Strategies

**Nested Loop Join:**

- For each row in the outer table, look up matching rows in the inner table using an index
- Cost: $O(N_{\mathrm{outer}} \times \log N_{\mathrm{inner}})$ with index on inner
- Best for: small outer table, indexed inner table, or when only a few rows match

**Hash Join:**

- Build an in-memory hash table from the inner (smaller) table, then probe with the outer table
- Cost: $O(N_{\mathrm{inner}} + N_{\mathrm{outer}})$
- Best for: large tables, equi-joins, when the inner table fits in memory (work_mem)
- Fallback: if the hash table exceeds `work_mem`, spills to disk (slow)

**Merge Join:**

- Both inputs must be sorted on the join key; merge in a single pass
- Cost: $O(N_{\mathrm{outer}} \log N_{\mathrm{outer}} + N_{\mathrm{inner}} \log N_{\mathrm{inner}})$
  for sorting, $O(N_{\mathrm{outer}} + N_{\mathrm{inner}})$ for merge
- Best for: pre-sorted inputs, large result sets, range joins

### Understanding Cost Estimates

PostgreSQL uses a cost model based on:

- `seq_page_cost` (default 1.0): cost of reading a sequential page from disk
- `random_page_cost` (default 4.0): cost of reading a random page from disk
- `cpu_tuple_cost` (default 0.01): cost of processing each row
- `cpu_index_tuple_cost` (default 0.005): cost of processing each index entry
- `cpu_operator_cost` (default 0.0025): cost of evaluating each operator

For SSDs, `random_page_cost` should be lowered (1.1-1.5) because random reads are nearly as fast as
sequential reads. For HDD arrays, the default of 4.0 is reasonable.

## Statistics and the Query Planner

The query planner's decisions are only as good as the statistics it works from. PostgreSQL collects
statistics via `ANALYZE` (run automatically by autovacuum) and stores them in `pg_statistic`
(viewable through `pg_stats`).

### Key Statistics

| Column              | Meaning                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `n_distinct`        | Estimated number of distinct values (-1 means "proportional to row count")                                              |
| `most_common_vals`  | Most frequent values in the column                                                                                      |
| `most_common_freqs` | Frequency of the most common values                                                                                     |
| `histogram_bounds`  | Bucket boundaries for value distribution                                                                                |
| `correlation`       | Correlation between physical row order and column value order (1.0 = perfectly sorted, -1.0 = perfectly reverse sorted) |
| `null_frac`         | Fraction of rows where the column is NULL                                                                               |

### Extended Statistics

When columns are correlated (e.g., `city` and `zip_code`), the planner may underestimate selectivity
because it treats each column independently. PostgreSQL 10+ supports extended statistics:

```sql
CREATE STATISTICS s_emp_dept_role (ndistinct, dependencies)
    ON department_id, role_id FROM employees;
ANALYZE employees;
```

## VACUUM and Index Maintenance

PostgreSQL uses Multi-Version Concurrency Control (MVCC), which means updates and deletes do not
immediately reclaim space. Dead tuples (old row versions) accumulate until `VACUUM` processes them.

### Autovacuum

Autovacuum runs automatically based on thresholds:

```sql
-- View autovacuum settings:
SELECT relname, n_live_tup, n_dead_tup, last_autovacuum, last_autoanalyze
FROM pg_stat_user_tables;

-- Per-table tuning:
ALTER TABLE employees SET (autovacuum_vacuum_scale_factor = 0.05);
ALTER TABLE employees SET (autovacuum_analyze_scale_factor = 0.02);
ALTER TABLE employees SET (autovacuum_vacuum_cost_delay = 20);
```

### Index Bloat

After heavy UPDATE/DELETE activity, B-tree indexes accumulate empty space from page splits and
deleted entries. Check for index bloat:

```sql
SELECT pg_size_pretty(pg_relation_size(indexrelid)) AS index_size,
       idx_scan,
       pg_size_pretty(pg_relation_size(indexrelid) - pg_stat_get_dead_tuples(indexrelid)::bigint) AS useful_size
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
ORDER BY pg_relation_size(indexrelid) DESC;
```

Solutions for index bloat:

```sql
-- Rebuild a single index (locks the table briefly):
REINDEX INDEX idx_employees_email;

-- Rebuild all indexes concurrently (no table lock):
REINDEX INDEX CONCURRENTLY idx_employees_email;
REINDEX TABLE CONCURRENTLY employees;
```

### pg_repack

For severe bloat that `REINDEX` cannot address (heap bloat), use `pg_repack`:

```bash
pg_repack -d mydb -t employees
```

`pg_repack` creates a new table, copies data, rebuilds indexes, and swaps the tables with a brief
lock window.

## When NOT to Index

Indexes impose costs:

1. **Write amplification**: every INSERT, UPDATE, and DELETE must update all indexes on the table
2. **Storage**: each index consumes disk space (often 10-30% of the table size per index)
3. **Planner overhead**: more indexes means more plans to evaluate during query planning
4. **VACUUM overhead**: dead index entries must be cleaned up

Guidelines for when to skip indexing:

- **Small tables** (a few thousand rows): a sequential scan is already fast
- **Write-heavy tables** with few reads: the write cost outweighs the read benefit
- **Columns with low cardinality**: a boolean column with 99% TRUE values is not worth indexing (use
  a partial index instead)
- **Bulk load operations**: drop indexes before loading, recreate after
- **Temporary/staging tables**: data is ephemeral, no point in indexing

## Connection Pooling

Every database connection consumes memory (PostgreSQL: approximately 5-10MB per connection for the
process, plus `work_mem` for queries). A web application with 500 concurrent connections can consume
several GB just for connection overhead.

### Connection Poolers

**PgBouncer** (PostgreSQL):

```ini
; pgbouncer.ini
[databases]
mydb = host=127.0.0.1 port=5432 dbname=mydb

[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 25
reserve_pool_size = 5
reserve_pool_timeout = 3
```

Pool modes:

| Mode          | Behaviour                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------- |
| `session`     | Server connection held for the entire client session                                          |
| `transaction` | Server connection held only for the duration of a transaction (recommended)                   |
| `statement`   | Server connection returned to pool after each statement (limited, breaks prepared statements) |

:::tip

Transaction-mode pooling with PgBouncer is the standard for web applications. It allows thousands of
client connections to share a small pool of server connections (typically 25-100). The caveat:
prepared statements that are scoped to a server connection may not work as expected, because a
subsequent transaction might use a different server connection.

:::

## Common Pitfalls

### Creating an Index Without Checking the Query Plan

Adding an index and assuming it will be used is a common mistake. Always `EXPLAIN ANALYZE` before
and after creating an index to verify it is actually used and improves performance.

### Ignoring Index Bloat

A bloated index is slower to scan, wastes disk space, and causes more cache pressure. Monitor index
size growth and run `REINDEX CONCURRENTLY` on bloated indexes during maintenance windows.

### Over-Indexing

A table with 30 indexes has 30x the write amplification. Every INSERT/UPDATE must update all 30
indexes. Profile your write workload before adding indexes. A good rule of thumb: if a query runs
less than once per minute, a covering index might not be worth the write cost.

### Not Running ANALYZE After Bulk Loads

After a bulk `COPY` or large `INSERT`, run `ANALYZE` to update statistics. Without current
statistics, the query planner will make decisions based on stale data and may choose sequential
scans over index scans or vice versa.

### Using OFFSET for Deep Pagination

`OFFSET 100000 LIMIT 20` requires the database to scan and discard 100,000 rows. Use keyset
pagination instead:

```sql
-- Instead of:
SELECT * FROM orders ORDER BY id OFFSET 100000 LIMIT 20;

-- Use:
SELECT * FROM orders WHERE id > 100000 ORDER BY id LIMIT 20;
```

### Not Setting work_mem Appropriately

`work_mem` controls the memory available for sorts, hash joins, and hash aggregates. The default is
4MB, which is too low for many production workloads. If `EXPLAIN ANALYZE` shows "Sort Method:
external merge Disk" or "HashAggregate" spilling to disk, increase `work_mem` for the session or
role:

```sql
SET work_mem = '256MB';
```

Do not set this globally too high -- it is per-operation, and concurrent operations multiply the
memory usage.

## Query Optimization Patterns

### Materialized Views

A materialized view caches the result of a query and refreshes it periodically. This trades storage
for query latency on expensive aggregations and joins.

```sql
-- Create a materialized view for daily revenue:
CREATE MATERIALIZED VIEW daily_revenue AS
SELECT
    DATE(created_at) AS day,
    COUNT(*) AS order_count,
    SUM(total) AS revenue,
    AVG(total) AS avg_order_value
FROM orders
WHERE status = 'completed'
GROUP BY DATE(created_at)
WITH DATA;

-- Index the materialized view:
CREATE UNIQUE INDEX idx_daily_revenue_day ON daily_revenue(day);

-- Refresh (takes an ACCESS EXCLUSIVE lock by default):
REFRESH MATERIALIZED VIEW daily_revenue;

-- Refresh without blocking reads (PostgreSQL 9.4+):
REFRESH MATERIALIZED VIEW CONCURRENTLY daily_revenue;
```

:::info

`REFRESH MATERIALIZED VIEW CONCURRENTLY` requires a UNIQUE index on the materialized view. It
refreshes by scanning the new data and updating existing rows, which is slower than a full refresh
but does not block concurrent reads.

:::

### Subquery Flattening

The query planner often converts subqueries into joins automatically. However, some subquery
patterns prevent this optimisation:

```sql
-- This may not be flattened (correlated subquery with LIMIT):
SELECT * FROM customers
WHERE customer_id IN (
    SELECT customer_id FROM orders
    WHERE total > 1000
    LIMIT 100
);

-- Rewrite as a JOIN:
SELECT DISTINCT c.*
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id AND o.total > 1000
LIMIT 100;
```

### Batch Inserts and COPY

For bulk data loading, individual `INSERT` statements are extremely slow due to per-statement
overhead (parsing, planning, WAL flush, index maintenance). Use batch inserts or `COPY`:

```sql
-- Multi-row INSERT (batch):
INSERT INTO sensor_readings (sensor_id, timestamp, value)
VALUES
    (1, '2024-03-15T10:00:00Z', 23.5),
    (1, '2024-03-15T10:01:00Z', 23.7),
    (1, '2024-03-15T10:02:00Z', 23.6);

-- COPY (fastest for bulk loads):
COPY sensor_readings (sensor_id, timestamp, value)
FROM '/data/sensor_data.csv'
WITH (FORMAT csv, HEADER true);
```

```bash
# For large imports, tune these settings during the load:
psql -c "SET maintenance_work_mem = '2GB';"
psql -c "SET max_wal_size = '4GB';"
psql -c "ALTER TABLE sensor_readings SET (autovacuum_enabled = false);"
psql -c "COPY sensor_readings FROM '/data/sensor_data.csv' WITH (FORMAT csv);"
psql -c "ALTER TABLE sensor_readings SET (autovacuum_enabled = true);"
psql -c "ANALYZE sensor_readings;"
```

### Prepared Statements

Prepared statements parse and plan a query once, then execute it multiple times with different
parameters. This avoids repeated parsing overhead and allows the planner to cache the execution
plan.

```sql
-- Prepare:
PREPARE get_orders_by_customer AS
SELECT * FROM orders WHERE customer_id = $1 AND status = $2 ORDER BY created_at DESC LIMIT 50;

-- Execute (multiple times with different parameters):
EXECUTE get_orders_by_customer(42, 'pending');
EXECUTE get_orders_by_customer(42, 'completed');

-- Deallocate when done:
DEALLOCATE get_orders_by_customer;
```

:::warning

In PostgreSQL, the planner generates a **generic plan** after 5 executions of a prepared statement.
The generic plan does not use the specific parameter values for planning, which can lead to
suboptimal plans if the parameter values significantly affect selectivity (e.g., a status column
where 'pending' has 5 rows and 'completed' has 5 million rows). Monitor with `pg_stat_statements`
and use `plan_cache_mode = force_custom_plan` if generic plans are consistently worse.

:::

### Partition Pruning

When querying a partitioned table, the planner can eliminate entire partitions based on the WHERE
clause. This is called partition pruning.

```sql
-- Without pruning: scans all 12 monthly partitions
SELECT * FROM orders WHERE created_at >= '2024-01-01' AND created_at &lt; '2024-02-01';

-- With pruning (PostgreSQL does this automatically for declarative partitioning):
-- Only the 2024-01 partition is scanned
EXPLAIN ANALYZE
SELECT * FROM orders WHERE created_at >= '2024-01-01' AND created_at &lt; '2024-02-01';
-- Output should show: "Append" with only one "Seq Scan on orders_2024_01"
```

Partition pruning is most effective when the partition key matches the query's filter. If you
frequently query by `customer_id` but partition by `created_at`, pruning does not help.

### Index-Only Scans and Visibility Maps

An index-only scan reads only the index, never touching the heap (table data). This is the fastest
type of scan. However, PostgreSQL must verify that each index entry points to a visible (not dead)
row. If the visibility map indicates all pages are all-visible, the heap check is skipped entirely.

```sql
-- Check visibility map coverage:
SELECT relname,
       pg_relation_size(relid) AS table_size,
       pg_stat_get_dead_tuples(relid) AS dead_tuples
FROM pg_stat_user_tables
ORDER BY pg_relation_size(relid) DESC;

-- Ensure regular VACUUM keeps the visibility map up to date:
-- Autovacuum handles this automatically, but for aggressive workloads:
VACUUM (ANALYZE) orders;
```

## Performance Monitoring

### pg_stat_statements

Track query execution statistics across the entire database:

```sql
-- Enable (add to postgresql.conf or ALTER SYSTEM):
-- shared_preload_libraries = 'pg_stat_statements'
-- pg_stat_statements.track = all

-- Top 20 queries by total execution time:
SELECT query,
       calls,
       total_exec_time AS total_ms,
       mean_exec_time AS avg_ms,
       rows,
       100 * shared_blks_hit / NULLIF(shared_blks_hit + shared_blks_read, 0) AS cache_hit_pct
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;

-- Queries with the highest cache miss rate:
SELECT query, calls,
       shared_blks_read AS disk_reads,
       shared_blks_hit AS cache_hits
FROM pg_stat_statements
WHERE shared_blks_read > 0
ORDER BY shared_blks_read DESC
LIMIT 20;
```

### pg_stat_activity

Monitor active connections and what they are doing:

```sql
-- Currently running queries with duration:
SELECT pid,
       now() - query_start AS duration,
       state,
       wait_event_type,
       wait_event,
       query
FROM pg_stat_activity
WHERE state != 'idle'
  AND datname = current_database()
ORDER BY duration DESC;

-- Blocked queries (waiting for a lock):
SELECT blocked.pid AS blocked_pid,
       blocked.query AS blocked_query,
       blocking.pid AS blocking_pid,
       blocking.query AS blocking_query
FROM pg_stat_activity blocked
JOIN pg_locks blocked_locks ON blocked.pid = blocked_locks.pid
JOIN pg_locks blocking_locks ON blocked_locks.locktype = blocking_locks.locktype
    AND blocked_locks.database IS NOT DISTINCT FROM blocking_locks.database
    AND blocked_locks.relation IS NOT DISTINCT FROM blocking_locks.relation
    AND blocked_locks.page IS NOT DISTINCT FROM blocking_locks.page
    AND blocked_locks.tuple IS NOT DISTINCT FROM blocking_locks.tuple
    AND blocked_locks.pid != blocking_locks.pid
JOIN pg_stat_activity blocking ON blocking_locks.pid = blocking.pid
WHERE NOT blocked_locks.granted;
```

### Table and Index Size Monitoring

```sql
-- Table sizes (including indexes and TOAST):
SELECT relname AS table_name,
       pg_size_pretty(pg_total_relation_size(relid)) AS total_size,
       pg_size_pretty(pg_relation_size(relid)) AS table_size,
       pg_size_pretty(pg_total_relation_size(relid) - pg_relation_size(relid)) AS index_size,
       n_live_tup,
       n_dead_tup,
       ROUND(100.0 * n_dead_tup / NULLIF(n_live_tup + n_dead_tup, 0), 1) AS dead_pct
FROM pg_stat_user_tables
ORDER BY pg_total_relation_size(relid) DESC;
```
