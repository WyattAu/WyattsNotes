---
id: postgresql-advanced
title: PostgreSQL Advanced
description:
  PostgreSQL Advanced — Extensions Ecosystem; Installing Extensions; PostGIS;
  pg_trgm with worked examples and exam-style questions.
slug: postgresql-advanced
---

## Extensions Ecosystem

Extensions add functionality to PostgreSQL through a well-defined API. They run in the same process
as the server and have access to the same data, making them powerful but also a trust boundary.

### Installing Extensions

```sql
-- Available extensions
SELECT * FROM pg_available_extensions;

-- Install an extension
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS hstore;
CREATE EXTENSION IF NOT EXISTS uuid-ossp;
CREATE EXTENSION IF NOT EXISTS citext;
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Check installed extensions
SELECT * FROM pg_extension;
```

### PostGIS

PostGIS adds geographic data types and spatial functions:

```sql
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    geom GEOMETRY(POINT, 4326) NOT NULL  -- WGS84 (GPS coordinates)
);

CREATE INDEX idx_locations_geom ON locations USING GIST (geom);

-- Insert a point (longitude, latitude)
INSERT INTO locations (name, geom)
VALUES ('San Francisco', ST_SetSRID(ST_MakePoint(-122.4194, 37.7749), 4326));

-- Find locations within 10km of a point
SELECT name, ST_Distance(geom, ST_SetSRID(ST_MakePoint(-122.4, 37.77), 4326)) AS distance_meters
FROM locations
WHERE ST_DWithin(geom, ST_SetSRID(ST_MakePoint(-122.4, 37.77), 4326), 10000)
ORDER BY distance_meters;
```

### pg_trgm

Trigram-based similarity and fuzzy matching:

```sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- GIN trigram index for fast ILIKE
CREATE INDEX idx_users_name_trgm ON users USING GIN (name gin_trgm_ops);

-- Fast case-insensitive partial match
SELECT * FROM users WHERE name ILIKE '%john%';

-- Similarity search (0 to 1, where 1 is exact match)
SELECT name, similarity(name, 'John Smith') AS sim
FROM users
WHERE name % 'John Smith'
ORDER BY sim DESC;

-- Adjust similarity threshold
SET pg_trgm.similarity_threshold = 0.3;
```

### pgcrypto

Cryptographic functions:

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Generate UUIDs
SELECT gen_random_uuid();
-- Returns: 550e8400-e29b-41d4-a716-446655440000

-- Hash functions
SELECT digest('password', 'sha256');
SELECT crypt('password', gen_salt('bf'));

-- Verify password
SELECT (crypt('password', stored_hash) = stored_hash) AS is_valid
FROM users WHERE email = 'user@example.com';

-- PGP encryption
SELECT pgp_sym_encrypt('secret data', 'encryption_key');
SELECT pgp_sym_decrypt(encrypted_column, 'encryption_key');
```

### hstore

Key-value pairs within a single column:

```sql
CREATE EXTENSION IF NOT EXISTS hstore;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    attributes HSTORE
);

INSERT INTO products (name, attributes)
VALUES ('Widget', 'color => "red", weight => "2.5", material => "steel"');

-- Query hstore fields
SELECT name FROM products WHERE attributes -> 'color' = 'red';
SELECT name, attributes -> 'weight' AS weight FROM products;

-- GIN index for hstore containment
CREATE INDEX idx_products_attrs ON products USING GIN (attributes);

-- Containment queries
SELECT * FROM products WHERE attributes @> 'color => "red"';
SELECT * FROM products WHERE attributes ? 'weight';  -- has key 'weight'
```

### uuid-ossp

```sql
CREATE EXTENSION IF NOT EXISTS uuid-ossp;

-- UUID v1 (MAC address + timestamp)
SELECT uuid_generate_v1();

-- UUID v4 (random)
SELECT uuid_generate_v4();

-- UUID v5 (SHA-1 hash of namespace + name, deterministic)
SELECT uuid_generate_v5(uuid_ns_dns(), 'example.com');
```

### citext

Case-insensitive text:

```sql
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE accounts (
    username CITEXT PRIMARY KEY,
    email CITEXT NOT NULL
);

-- Both insertions fail (case-insensitive uniqueness)
INSERT INTO accounts VALUES ('Alice', 'alice@example.com');
INSERT INTO accounts VALUES ('alice', 'alice@other.com');
-- ERROR: duplicate key value violates unique constraint
```

### pg_stat_statements

```sql
-- Must be loaded at server start
-- shared_preload_libraries = 'pg_stat_statements'

CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Top queries by total time
SELECT query, calls, total_exec_time / 1000 AS total_ms,
       mean_exec_time / 1000 AS avg_ms
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;
```

## Logical Replication

### Physical vs Logical Replication

| Aspect           | Physical Replication                   | Logical Replication                        |
| ---------------- | -------------------------------------- | ------------------------------------------ |
| What replicates  | Entire WAL (all databases, all tables) | Selected tables (per-publication)          |
| Granularity      | Database level (entire cluster)        | Table level (per publication/subscription) |
| Cross-version    | Same major version only                | Can replicate between major versions       |
| Write on replica | No (read-only)                         | Yes (subscription tables are writable)     |
| Use case         | High availability, disaster recovery   | Data sharing, partial replication, CDC     |

### Setting Up Logical Replication

**Publisher (source):**

```sql
-- Set wal_level = logical in postgresql.conf and restart
-- wal_level = logical

CREATE PUBLICATION pub_orders FOR TABLE orders;
CREATE PUBLICATION pub_all_tables FOR ALL TABLES;

-- Publication with filter
CREATE PUBLICATION pub_active_orders FOR TABLE orders
    WHERE (status = 'active' AND created_at >= '2024-01-01');
```

**Subscriber (target):**

```sql
CREATE SUBSCRIPTION sub_orders
    CONNECTION 'host=publisher.example.com dbname=mydb user=replicator'
    PUBLICATION pub_orders
    WITH (create_slot = true, slot_name = 'sub_orders_slot');

-- Verify subscription status
SELECT * FROM pg_stat_subscription;
```

### Conflict Resolution

On the subscriber, conflicts can occur when the subscription table has local modifications that
conflict with incoming replication changes:

```sql
-- Configure conflict resolution
ALTER SUBSCRIPTION sub_orders SET (slot_name = 'sub_orders_slot');

-- Handle conflicts (check pg_stat_subscription_stats)
SELECT subname, slot_name, sync_error_count, apply_error_count
FROM pg_stat_subscription_stats;

-- Common conflicts:
-- 1. insert_duplicate_key: row already exists on subscriber
-- 2. update_conflict: row version mismatch
-- Solutions: skip errors, or use trigger-based conflict resolution
ALTER SUBSCRIPTION sub_orders SKIP (ALTER TABLE orders REPLICA IDENTITY FULL);
```

### Replication Identity

Logical replication needs to know which column(s) uniquely identify a row:

```sql
-- Default: primary key
ALTER TABLE orders REPLICA IDENTITY DEFAULT;

-- Use a unique index
ALTER TABLE orders REPLICA IDENTITY USING INDEX idx_orders_order_id;

-- Full row comparison (no unique index available, slower)
ALTER TABLE orders REPLICA IDENTITY FULL;

-- No row identity (deletes are not replicated)
ALTER TABLE orders REPLICA IDENTITY NOTHING;
```

## Foreign Data Wrappers (FDW)

### postgres_fdw

Query remote PostgreSQL servers as if they were local tables:

```sql
CREATE EXTENSION IF NOT EXISTS postgres_fdw;

-- Create the foreign server
CREATE SERVER remote_db
    FOREIGN DATA WRAPPER postgres_fdw
    OPTIONS (host 'remote.example.com', port '5432', dbname 'analytics');

-- Create user mapping (local user → remote user)
CREATE USER MAPPING FOR local_app
    SERVER remote_db
    OPTIONS (user 'analytics_user', password 'secret');

-- Import remote tables
IMPORT FOREIGN SCHEMA public LIMIT TO (events, users)
    FROM SERVER remote_db INTO public;

-- Or create individual foreign tables
CREATE FOREIGN TABLE remote_events (
    event_id BIGINT,
    event_type TEXT,
    payload JSONB,
    created_at TIMESTAMPTZ
) SERVER remote_db OPTIONS (schema_name 'public', table_name 'events');
```

```sql
-- Query the remote table (PostgreSQL pushes down WHERE and LIMIT)
SELECT event_type, COUNT(*) FROM remote_events
WHERE created_at >= '2024-01-01'
GROUP BY event_type;

-- Join local and remote tables
SELECT u.name, COUNT(r.event_id) AS event_count
FROM users u
JOIN remote_events r ON u.user_id = r.user_id
WHERE r.created_at >= '2024-01-01'
GROUP BY u.name;
```

:::warning

FDW queries may fetch entire remote tables locally for joins, sorts, and aggregations that cannot be
pushed down. Use `EXPLAIN (VERBOSE)` to verify what is pushed down and what is executed locally. For
large datasets, consider materializing the data instead.

:::

### file_fdw

```sql
CREATE EXTENSION IF NOT EXISTS file_fdw;

CREATE SERVER csv_server FOREIGN DATA WRAPPER file_fdw;

CREATE FOREIGN TABLE csv_import (
    id INTEGER,
    name TEXT,
    value NUMERIC
) SERVER csv_server
OPTIONS (filename '/data/import.csv', format 'csv', header 'true');

SELECT * FROM csv_import WHERE value > 100;
```

### ogr_fdw

Read geospatial data from shapefiles, GeoJSON, PostGIS, and other OGR-supported formats:

```sql
CREATE EXTENSION IF NOT EXISTS ogr_fdw;

CREATE SERVER shapefile_server
    FOREIGN DATA WRAPPER ogr_fdw
    OPTIONS (datasource '/data/shapefiles/', format 'ESRI Shapefile');

CREATE FOREIGN TABLE neighborhoods (
    fid INTEGER,
    name TEXT,
    geom GEOMETRY
) SERVER shapefile_server
OPTIONS (layer 'neighborhoods');
```

## Table Partitioning

### Declarative Partitioning

```sql
CREATE TABLE orders (
    order_id BIGSERIAL,
    customer_id INTEGER NOT NULL,
    total NUMERIC(10,2),
    status TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (order_id, created_at)  -- partition key must be in PK
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2024_q1 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');

CREATE TABLE orders_2024_q2 PARTITION OF orders
    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');

CREATE TABLE orders_2024_q3 PARTITION OF orders
    FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');

CREATE TABLE orders_2024_q4 PARTITION OF orders
    FOR VALUES FROM ('2024-10-01') TO ('2025-01-01');

CREATE TABLE orders_default PARTITION OF orders DEFAULT;
```

### ATTACH and DETACH

```sql
-- Prepare a new partition (can be done without blocking)
CREATE TABLE orders_2025_q1 (LIKE orders INCLUDING ALL);

-- Attach (acquires a brief SHARE UPDATE EXCLUSIVE lock)
ALTER TABLE orders ATTACH PARTITION orders_2025_q1
    FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');

-- Detach (can be done concurrently in PostgreSQL 14+)
ALTER TABLE orders DETACH PARTITION orders_2024_q1 CONCURRENTLY;
```

### Partition Pruning

The optimizer automatically eliminates partitions that cannot contain matching rows:

```sql
-- Only scans orders_2024_q1 and orders_2024_q2
EXPLAIN (ANALYZE)
SELECT * FROM orders
WHERE created_at >= '2024-01-01' AND created_at &lt; '2024-07-01';

-- Partition pruning requires literal or stable expressions
-- Parameters from prepared statements may prevent pruning
```

:::warning

Unique constraints on partitioned tables must include the partition key. A `UNIQUE(order_id)`
constraint across all partitions is not supported. Instead, use `UNIQUE(order_id, created_at)` or
enforce uniqueness at the application level.

:::

## Generated Columns

```sql
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    tax_rate NUMERIC(5,4) NOT NULL DEFAULT 0.20,
    price_with_tax NUMERIC(10,2) GENERATED ALWAYS AS (price * (1 + tax_rate)) STORED,
    search_vector TSVECTOR GENERATED ALWAYS AS (
        to_tsvector('english', coalesce(name, ''))
    ) STORED
);

-- Index the generated column
CREATE INDEX idx_products_search ON products USING GIN (search_vector);
```

## Row-Level Security (RLS)

### Enabling RLS

```sql
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Policy: users can only see their own documents
CREATE POLICY user_isolation ON documents
    FOR ALL
    TO app_user
    USING (owner_id = current_user_id())
    WITH CHECK (owner_id = current_user_id());

-- Policy: managers can see all documents in their department
CREATE POLICY dept_access ON documents
    FOR SELECT
    TO manager_role
    USING (department_id = current_department_id());

-- Bypass RLS (superuser and table owner bypass by default)
ALTER TABLE documents FORCE ROW LEVEL SECURITY;
```

### Bypassing RLS

```sql
-- Bypass for specific roles
ALTER ROLE admin BYPASSRLS;

-- Bypass for a specific query
SET ROLE admin;
SELECT * FROM documents;  -- sees all documents
RESET ROLE;
```

### RLS Performance

RLS policies are applied as security barrier quals, meaning the planner cannot push predicates
through them. This can lead to suboptimal plans. Use `LEAKPROOF` functions in RLS policies and
ensure the policy is selective.

## Auditing with pgAudit

```sql
-- Install (requires shared_preload_libraries = 'pgaudit')
CREATE EXTENSION IF NOT EXISTS pgaudit;

-- Audit all operations on sensitive tables
ALTER TABLE financial_records SET (pgaudit.log = 'all');

-- Audit specific classes of operations
-- pgaudit.log = 'read,write,ddl'
-- pgaudit.log_catalog = on    -- audit catalog (system table) access
-- pgaudit.log_client = off    -- log client-side disconnections

-- Per-role audit
ALTER ROLE auditor SET pgaudit.log = 'ALL';
ALTER ROLE auditor SET pgaudit.log_catalog = ON;
```

Audit logs are written to the PostgreSQL log (same destination as `log_destination`). Configure log
collection (e.g., Filebeat, Fluentd) to forward audit logs to a centralized log management system.

## Backup and Recovery

### pg_dump and pg_restore

```bash
# Full database dump (custom format, parallel)
pg_dump -Fc -j 4 -f mydb.dump mydb

# Schema-only dump
pg_dump -s -f schema.sql mydb

# Data-only dump
pg_dump -a -f data.sql mydb

# Specific tables
pg_dump -t orders -t order_items -f orders.dump mydb

# Restore from custom format (parallel)
pg_restore -j 4 -d mydb_new mydb.dump

# Restore with clean (drop existing objects)
pg_restore --clean --if-exists -d mydb mydb.dump
```

### pg_basebackup

```bash
# Full physical backup (requires replication privileges)
pg_basebackup -h localhost -D /var/backups/postgresql -Ft -z -P

# Incremental backup (using pgBackRest or WAL-G)
# pgBackRest is recommended for production backup management
```

### Point-in-Time Recovery (PITR)

```conf
# postgresql.conf
wal_level = replica
archive_mode = on
archive_command = 'cp %p /var/lib/postgresql/wal_archive/%f'
restore_command = 'cp /var/lib/postgresql/wal_archive/%f %p'
```

```bash
# Recovery: create recovery configuration
# recovery_target_time = '2024-06-15 14:30:00'
# recovery_target_action = 'promote'

# Or use pgBackRest for managed PITR
pgbackrest --stanza=mydb --type=time --target="2024-06-15 14:30:00" restore
```

### WAL Archiving

```conf
# Continuous WAL archiving
archive_mode = on
archive_command = 'aws s3 cp %p s3://mydb-wal-archive/%f'

# Or use WAL-G for compressed, deduplicated archiving
# wal-g wal-push %p
```

## Upgrade Strategies

### pg_upgrade (Logical)

pg_upgrade creates a new cluster with the target version, links or copies data files, and updates
system catalogs. It is the fastest upgrade method but requires downtime.

```bash
# Stop the old cluster
pg_ctlcluster 15 main stop

# Run pg_upgrade (check mode first)
pg_upgrade --check \
  --old-datadir /var/lib/postgresql/15/main \
  --new-datadir /var/lib/postgresql/16/main \
  --old-bindir /usr/lib/postgresql/15/bin \
  --new-bindir /usr/lib/postgresql/16/bin

# Run the upgrade
pg_upgrade \
  --old-datadir /var/lib/postgresql/15/main \
  --new-datadir /var/lib/postgresql/16/main \
  --old-bindir /usr/lib/postgresql/15/bin \
  --new-bindir /usr/lib/postgresql/16/bin \
  --link  # hard-link mode (faster, but old cluster cannot be started again)
```

### Logical Replication Migration

For near-zero-downtime upgrades between major versions:

1. Set up logical replication from old version to new version
2. Wait for replication to catch up
3. Cutover: redirect application traffic to the new cluster
4. Tear down replication

## Connection Management

### pg_hba.conf

```conf
# TYPE  DATABASE  USER      ADDRESS         METHOD
local   all       all                       peer
host    all       all       127.0.0.1/32    scram-sha-256
host    all       all       ::1/128         scram-sha-256
host    app_db    app_user  10.0.0.0/8      scram-sha-256
host    all       replicator 10.0.0.0/8    scram-sha-256
hostssl all       all       0.0.0.0/0       scram-sha-256
```

### SSL Configuration

```conf
# postgresql.conf
ssl = on
ssl_cert_file = '/etc/postgresql/server.crt'
ssl_key_file = '/etc/postgresql/server.key'
ssl_ca_file = '/etc/postgresql/ca.crt'
ssl_prefer_server_ciphers = on
ssl_min_protocol_version = 'TLSv1.2'
```

## Configuration Tuning

### Memory-Related Parameters

```sql
-- shared_buffers: 25% of total RAM (up to ~8GB on Linux)
-- work_mem: per-operation memory for sorts, hashes, etc.
-- maintenance_work_mem: for VACUUM, CREATE INDEX, etc.
-- effective_cache_size: hint for planner (not actual allocation)
-- huge_pages: try/auto/on (reduces TLB misses for large shared_buffers)

SHOW shared_buffers;    -- e.g., 4GB
SHOW work_mem;          -- e.g., 64MB
SHOW maintenance_work_mem;  -- e.g., 1GB
SHOW effective_cache_size;  -- e.g., 12GB
```

| Parameter              | Recommended Setting                        | Notes                               |
| ---------------------- | ------------------------------------------ | ----------------------------------- |
| `shared_buffers`       | 25% of RAM                                 | Up to ~8GB on Linux with huge pages |
| `effective_cache_size` | 75% of RAM                                 | Planner hint, not allocated         |
| `work_mem`             | 4-64MB (per-operation)                     | Higher = fewer disk spills          |
| `maintenance_work_mem` | 1-4GB                                      | For VACUUM, index creation          |
| `wal_buffers`          | 64MB (default -1 = 1/32 of shared_buffers) | WAL buffer size                     |
| `huge_pages`           | `try`                                      | Reduces TLB misses                  |

### WAL Configuration

```sql
-- wal_level: minimal, replica, or logical
-- Minimal: no WAL for bulk operations (cannot replicate or PITR)
-- Replica: full WAL for physical replication
-- Logical: full WAL + logical decoding info

SHOW wal_level;           -- replica (for replication)
SHOW max_wal_size;        -- 2GB (WAL recycling threshold)
SHOW wal_compression;     -- off (lz4/zstd available in newer versions)
SHOW checkpoint_timeout;  -- 5min
SHOW max_wal_senders;     -- 10 (number of replication connections)
```

## Monitoring

### pg_stat_activity

```sql
-- Active queries with duration
SELECT pid, usename, datname, state, wait_event_type, wait_event,
       EXTRACT(EPOCH FROM (now() - query_start)) AS duration_sec,
       query
FROM pg_stat_activity
WHERE state != 'idle'
  AND datname = 'mydb'
ORDER BY query_start;

-- Connection counts by state
SELECT state, COUNT(*) FROM pg_stat_activity GROUP BY state;

-- Blocked queries
SELECT blocked.pid AS blocked_pid,
       blocked.query AS blocked_query,
       blocking.pid AS blocking_pid,
       blocking.query AS blocking_query
FROM pg_stat_activity blocked
JOIN pg_locks bl ON blocked.pid = bl.pid
JOIN pg_locks kl ON bl.locktype = kl.locktype
    AND bl.database IS NOT DISTINCT FROM kl.database
    AND bl.relation IS NOT DISTINCT FROM kl.relation
    AND bl.page IS NOT DISTINCT FROM kl.page
    AND bl.tuple IS NOT DISTINCT FROM kl.tuple
    AND bl.pid != kl.pid
JOIN pg_stat_activity blocking ON kl.pid = blocking.pid
WHERE NOT bl.granted;
```

### pg_stat_database

```sql
SELECT datname, numbackends, xact_commit, xact_rollback,
       blks_read, blks_hit,
       ROUND(blks_hit::NUMERIC / NULLIF(blks_hit + blks_read, 0) * 100, 2) AS cache_hit_pct,
       deadlocks
FROM pg_stat_database
WHERE datname NOT IN ('postgres', 'template0', 'template1')
ORDER BY datname;
```

### auto_explain

```conf
# shared_preload_libraries = 'auto_explain'
# auto_explain.log_min_duration = '1s'  -- log plans for queries > 1s
# auto_explain.log_analyze = on          -- include actual execution stats
# auto_explain.log_buffers = on          -- include buffer usage
# auto_explain.log_format = 'text'
```

## Common Pitfalls

### Not Setting wal_level Before Creating Replicas

Changing `wal_level` requires a PostgreSQL restart. If you set up a database in production and later
need replication, you must restart to enable `wal_level = replica`. Plan for replication from the
start.

### Extension Version Mismatches

Extensions must be compatible with the PostgreSQL major version. After a major version upgrade,
extensions must be upgraded too (often automatically by `pg_upgrade`, but not always). Check with
`SELECT * FROM pg_available_extension_versions`.

### FDW Query Performance

FDW queries that cannot push down predicates, joins, or aggregations fetch entire tables across the
network. Always verify with `EXPLAIN (VERBOSE)` what is executed remotely vs locally. For frequently
accessed remote data, consider materializing it.

### RLS Policies Blocking the Table Owner

By default, the table owner bypasses RLS. If you set `FORCE ROW LEVEL SECURITY`, the owner is also
subject to RLS policies. This can break administrative queries if the owner's RLS context is not set
correctly.

### Backup Testing

A backup that has not been tested is not a backup. Regularly restore backups to a test environment
and run data integrity checks. Verify that PITR works to the expected recovery point.

## Background Workers and pg_cron

### pg_cron Extension

pg_cron schedules PostgreSQL commands as periodic jobs, similar to cron but running inside the
database:

```sql
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule a vacuum every day at 3 AM
SELECT cron.schedule(
    'nightly-vacuum',
    '0 3 * * *',
    'VACUUM ANALYZE orders'
);

-- Schedule a data cleanup every Sunday at midnight
SELECT cron.schedule(
    'weekly-cleanup',
    '0 0 * * 0',
    $$DELETE FROM audit_log WHERE created_at < NOW() - INTERVAL '90 days'$$
);

-- List all scheduled jobs
SELECT * FROM cron.job;

-- Job run history
SELECT * FROM cron.job_run_details ORDER BY start_time DESC LIMIT 20;

-- Unschedule a job
SELECT cron.unschedule('nightly-vacuum');
```

:::info

pg_cron requires `shared_preload_libraries = 'pg_cron'` and a PostgreSQL restart. Jobs run in the
context of the database where pg_cron is installed. Cross-database scheduling is not supported.

:::

### pg_background

pg_background runs commands in the background, returning control to the client immediately:

```sql
CREATE EXTENSION IF NOT EXISTS pg_background;

-- Run a long-running vacuum in the background
SELECT pg_background.launch('VACUUM ANALYZE orders');

-- Check background worker status
SELECT * FROM pg_background.result;
```

## pgBouncer Configuration Deep-Dive

### Advanced Configuration

```ini
; pgbouncer.ini

[databases]
; Override per-database settings
mydb = host=127.0.0.1 port=5432 dbname=mydb pool_size=10
analytics = host=analytics-db port=5432 dbname=analytics pool_mode=session

[pgbouncer]
; Pool modes
pool_mode = transaction

; Connection limits
max_client_conn = 1000
default_pool_size = 20
min_pool_size = 5        ; keep minimum connections warm
reserve_pool_size = 5     ; extra connections for spikes
reserve_pool_timeout = 3   ; seconds to wait for reserve pool

; Timeouts
server_idle_timeout = 600  ; close idle server connections after 10 min
server_lifetime = 3600     ; recycle server connections after 1 hour
client_idle_timeout = 0    ; do not disconnect idle clients
client_login_timeout = 60  ; login must complete within 60s

; Server connection settings
server_connect_timeout = 15
server_check_delay = 30    ; health check interval
server_check_query = SELECT 1
server_reset_query = DISCARD ALL

; Logging
log_connections = 1
log_disconnections = 1
log_pooler_errors = 1
verbose = 1

; Admin interface
admin_users = admin
stats_period = 60
```

### Monitoring PgBouncer

```sql
-- Connect to PgBouncer admin console
psql -h 127.0.0.1 -p 6432 -U admin pgbouncer

-- Show pool statistics
SHOW POOLS;

-- Show databases
SHOW DATABASES;

-- Show clients
SHOW CLIENTS;

-- Show server connections
SHOW SERVERS;

-- Show active queries
SHOW STATS;

-- Stats per database
SHOW STATS_STATS;

-- List configured databases
SHOW LISTS;
```

## Logical Decoding and Change Data Capture

### Setting Up Logical Decoding

```sql
-- Ensure wal_level = logical (requires restart)
-- wal_level = logical

-- Create a replication slot for logical decoding
SELECT pg_create_logical_replication_slot('my_slot', 'pgoutput');

-- Read changes
SELECT * FROM pg_logical_slot_peek_changes('my_slot', NULL, NULL);

-- Consume changes (advances the slot)
SELECT * FROM pg_logical_slot_get_changes('my_slot', NULL, NULL);

-- Drop the slot
SELECT pg_drop_replication_slot('my_slot');
```

### CDC with Debezium

Debezium captures row-level changes from PostgreSQL WAL and publishes them to Kafka:

```text
Architecture:
  PostgreSQL → WAL → Debezium Connector → Kafka → Consumers

Debezium reads WAL using logical replication slots.
It publishes change events as JSON/Avro to Kafka topics.
Each table gets its own topic.
Events include: before/after images, operation type, transaction metadata.
```

:::warning

Logical replication slots retain WAL until the consumer acknowledges all changes. If the consumer
stops or falls behind, WAL accumulates on disk, potentially filling the storage. Monitor slot lag:

```sql
SELECT slot_name, plugin, slot_type,
       pg_wal_lsn_diff(pg_current_wal_lsn(), restart_lsn) AS lag_bytes
FROM pg_replication_slots
WHERE slot_type = 'logical';
```

:::

## Table Sampling

Table sampling allows querying a random subset of a table without reading all rows:

```sql
-- BERNOULLI sampling: each row has an independent probability of selection
-- SYSTEM sampling: selects whole pages randomly (faster, less uniform)

SELECT * FROM orders TABLESAMPLE BERNOULLI(1) REPEATABLE(42);
-- Returns approximately 1% of rows, with repeatable results

SELECT * FROM orders TABLESAMPLE SYSTEM(5);
-- Returns approximately 5% of rows by randomly selecting pages

-- Useful for:
-- Quick data exploration on very large tables
-- Approximate aggregate queries
-- Testing queries on a representative subset
SELECT AVG(total), COUNT(*) FROM orders TABLESAMPLE BERNOULLI(10);
```

## Parallel Backup with pg_dump

```bash
# Parallel dump with multiple jobs
pg_dump -Fc -j 4 -f mydb.dump mydb

# Restore with parallel jobs
pg_restore -j 4 -d mydb_new mydb.dump

# Directory format (parallel per-table files)
pg_dump -Fd -j 8 -f /backup/mydb_dir mydb
```

## Partitioning Performance Considerations

### Constraint Exclusion vs Partition Pruning

PostgreSQL 10 used constraint exclusion for partition pruning, which was slow. PostgreSQL 11+ uses
native partition pruning, which is much faster and happens at plan time:

```sql
-- Verify partition pruning is happening
EXPLAIN (ANALYZE)
SELECT * FROM orders WHERE created_at >= '2024-01-01';

-- Good: only relevant partitions are scanned
-- Bad: all partitions are scanned (pruning not working)
```

### Partition Maintenance

```sql
-- Detach old partitions for archival
ALTER TABLE orders DETACH PARTITION orders_2023 CONCURRENTLY;

-- Archive the detached partition
pg_dump -t orders_2023 -f orders_2023_archive.sql
DROP TABLE orders_2023;

-- Reattach if needed (data must match partition constraints)
ALTER TABLE orders ATTACH PARTITION orders_2023
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
```

### Default Partition Management

The default partition catches rows that do not match any defined partition. Periodically check it
for data that should be in a new partition:

```sql
SELECT COUNT(*) FROM orders_default;

-- If the default partition has data, create a new partition and move it:
CREATE TABLE orders_2025_q1 (LIKE orders INCLUDING ALL);
ALTER TABLE orders ATTACH PARTITION orders_2025_q1
    FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');

-- Move data from default to new partition
WITH moved AS (
    DELETE FROM orders_default
    WHERE created_at >= '2025-01-01' AND created_at < '2025-04-01'
    RETURNING *
)
INSERT INTO orders_2025_q1 SELECT * FROM moved;
```
