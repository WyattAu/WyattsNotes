---
id: migrations
title: Schema Migrations
description:
  Database migrations — migration tools, versioning strategies, rollback patterns, and zero-downtime
  deployments.
slug: migrations
---

## Why Migrations Matter

Schema changes in a production database are one of the highest-risk operations you perform. A bad
migration can corrupt data, cause extended downtime, or create inconsistencies that are difficult to
detect and repair. Migrations solve this by:

1. **Version control**: Every schema change is a tracked, reviewed artifact
2. **Reproducibility**: The same migration runs identically on dev, staging, and production
3. **Ordering**: Migrations run in a deterministic sequence with dependency tracking
4. **Rollback**: Each migration has a defined reverse operation
5. **Audit trail**: You know exactly what changed, when, and who applied it

## Migration Tools

### Flyway

```bash
# Naming convention: V{version}__{description}.sql
# V1__create_users_table.sql
# V2__add_email_index.sql
# V3.1__add_phone_column.sql

flyway -url=jdbc:postgresql://localhost/mydb \
       -user=postgres -password=secret \
       migrate

flyway -url=jdbc:postgresql://localhost/mydb \
       info
```

```sql
-- V1__create_users_table.sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### Liquibase

Liquibase uses changelog files in XML, YAML, or JSON format:

```yaml
# changelog.yaml
databaseChangeLog:
  - changeSet:
      id: 1
      author: devops
      changes:
        - createTable:
            tableName: users
            columns:
              - column:
                  name: id
                  type: BIGINT
                  autoIncrement: true
                  constraints:
                    primaryKey: true
              - column:
                  name: email
                  type: VARCHAR(255)
                  constraints:
                    nullable: false
                    unique: true
  - changeSet:
      id: 2
      author: devops
      changes:
        - createIndex:
            tableName: users
            indexName: idx_users_email
            columns:
              - column:
                  name: email
```

### golang-migrate

```bash
# CLI usage
migrate -path ./migrations -database "postgres://user:pass@localhost/mydb?sslmode=disable" up
migrate -path ./migrations -database "postgres://user:pass@localhost/mydb?sslmode=disable" down 1
migrate -path ./migrations -database "postgres://user:pass@localhost/mydb?sslmode=disable" version

# Create migration files
migrate create -ext sql -dir ./migrations -seq create_users_table
```

```sql
-- 000001_create_users_table.up.sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 000001_create_users_table.down.sql
DROP TABLE IF EXISTS users;
```

### Alembic (Python/SQLAlchemy)

```bash
# Initialize
alembic init migrations

# Create a migration
alembic revision --autogenerate -m "create users table"

# Apply migrations
alembic upgrade head

# Rollback one migration
alembic downgrade -1

# Rollback to specific version
alembic downgrade base
```

```python
# migrations/versions/001_create_users_table.py
def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.BigInteger(), autoincrement=True, nullable=False),
        sa.Column('email', sa.String(255), nullable=False),
        sa.Column('name', sa.String(100), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('NOW()')),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email')
    )
    op.create_index('idx_users_email', 'users', ['email'])

def downgrade():
    op.drop_index('idx_users_email')
    op.drop_table('users')
```

### Django Migrations

```bash
# Create migration
python manage.py makemigrations

# Apply migration
python manage.py migrate

# Rollback
python manage.py migrate app_name migration_name

# Show migration status
python manage.py showmigrations
```

### Prisma Migrate

```bash
# Create migration from schema changes
npx prisma migrate dev --name add_user_email

# Apply migrations in production
npx prisma migrate deploy

# Rollback
npx prisma migrate resolve --rolled-back migration_name

# Status
npx prisma migrate status
```

### Tool Comparison

| Feature           | Flyway            | Liquibase            | golang-migrate | Alembic | Django     | Prisma                        |
| ----------------- | ----------------- | -------------------- | -------------- | ------- | ---------- | ----------------------------- |
| Languages         | SQL, Java, Kotlin | XML, YAML, JSON, SQL | SQL            | Python  | Python     | SQL, TS                       |
| Schema diffing    | Pro               | Pro                  | No             | Auto    | Auto       | Auto                          |
| Rollback support  | Yes               | Yes                  | Yes            | Yes     | Yes        | Limited                       |
| Transactional DDL | Yes               | Yes                  | Yes            | Yes     | Yes        | Yes                           |
| Branching/merge   | Paid              | Manual               | Manual         | Manual  | Manual     | Manual                        |
| Database support  | Many              | Many                 | Many           | Many    | Django DBs | Postgres, MySQL, SQLite, etc. |

## Migration File Naming

### Timestamped vs Sequential

```text
# Sequential (Flyway, golang-migrate with -seq):
V1__create_users.sql
V2__add_email_column.sql
V3__create_orders.sql

# Timestamped (Liquibase, golang-migrate without -seq):
20240115143000__create_users.sql
20240115144500__add_email_column.sql
20240116100000__create_orders.sql
```

| Approach    | Pros                          | Cons                                     |
| ----------- | ----------------------------- | ---------------------------------------- |
| Sequential  | Simple, easy to read          | Conflicts in team development (V3 vs V3) |
| Timestamped | No conflicts in parallel work | Verbose, ordering may not match intent   |

## Up/Down Migrations (Reversibility)

Every migration should have a reverse operation:

```sql
-- Up: 002_add_phone_column.up.sql
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Down: 002_add_phone_column.down.sql
ALTER TABLE users DROP COLUMN phone;
```

### Irreversible Migrations

Some operations cannot be reversed without data loss:

```sql
-- Up: drop a column (data loss on rollback)
ALTER TABLE users DROP COLUMN ssn;

-- Down: cannot restore dropped data
-- Option 1: explicitly fail
-- ERROR: cannot rollback migration 005_drop_ssn (data already lost)

-- Option 2: create an empty down migration and document the limitation
-- (no-op down migration)
```

### Data Migration Reversibility

```sql
-- Up: merge duplicate users
INSERT INTO users_merged (email, name)
SELECT email, MAX(name)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Down: cannot reliably reverse a merge
-- Document the irreversibility and require a backup before running
```

## Zero-Downtime Migrations

### The Expand-Contract Pattern

Zero-downtime migrations follow a three-phase approach:

```mermaid
flowchart LR
    A["Phase 1: Expand<br/>Add new column/table"] --> B["Phase 2: Migrate<br/>Deploy code using both"] --> C["Phase 3: Contract<br/>Remove old column/table"]
```

**Phase 1 (Expand):** Add the new column/table without breaking the existing application. Deploy
this migration first, while the old code is still running.

**Phase 2 (Migrate):** Deploy the new application code that reads/writes both the old and new
columns. Backfill data if necessary.

**Phase 3 (Contract):** Once all instances of the old code are decommissioned, remove the old
column/table.

### Adding a Column with Default (PostgreSQL 11+)

```sql
-- PostgreSQL 11+: metadata-only operation (instant, no table rewrite)
ALTER TABLE users ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT TRUE;

-- PostgreSQL &lt; 11: rewrites the entire table (locks for the duration)
-- Workaround: add nullable column, backfill, then add constraint
ALTER TABLE users ADD COLUMN is_active BOOLEAN;
-- Deploy code that handles NULL
UPDATE users SET is_active = TRUE WHERE is_active IS NULL;
-- In batches to avoid long locks
ALTER TABLE users ALTER COLUMN is_active SET NOT NULL DEFAULT TRUE;
```

### Renaming a Column

Renaming a column breaks the old code immediately. Use the expand-contract pattern:

```text
Phase 1: Add new column
  ALTER TABLE users ADD COLUMN display_name TEXT;

Phase 2: Deploy code that reads from display_name, writes to both name and display_name
  Backfill: UPDATE users SET display_name = name;

Phase 3: Deploy code that only uses display_name
  ALTER TABLE users DROP COLUMN name;
```

### Adding an Index

```sql
-- Non-concurrent: blocks writes
CREATE INDEX idx_users_email ON users(email);

-- Concurrent: no blocking (takes longer, requires unique index name)
CREATE INDEX CONCURRENTLY idx_users_email ON users(email);

-- If concurrent index creation fails, it leaves an INVALID index
-- Clean up manually:
DROP INDEX IF EXISTS idx_users_email;
-- Then retry
```

### Dropping a Column

```sql
-- Phase 1: Stop using the column in application code
-- Phase 2: Verify no queries reference the column (check pg_stat_statements)
-- Phase 3: Drop the column
ALTER TABLE users DROP COLUMN legacy_field;
```

## Data Migrations vs Schema Migrations

### When to Separate

| Concern           | Schema Migration                   | Data Migration                 |
| ----------------- | ---------------------------------- | ------------------------------ |
| Duration          | Milliseconds to seconds            | Minutes to hours               |
| Transaction scope | DDL is transactional in PostgreSQL | May need batch processing      |
| Rollback          | Reverse DDL                        | May be impossible or very slow |
| Tool              | Flyway, Liquibase, Alembic         | Application code, batch jobs   |

### Batched Data Migrations

```sql
-- Process in batches to avoid long transactions and lock contention
DO $$
DECLARE
    batch_size INTEGER := 5000;
    processed INTEGER := 1;
BEGIN
    WHILE processed > 0 LOOP
        UPDATE orders
        SET status = 'archived'
        WHERE status = 'completed'
          AND created_at &lt; CURRENT_DATE - INTERVAL '90 days'
        LIMIT batch_size;

        GET DIAGNOSTICS processed = ROW_COUNT;
        RAISE NOTICE 'Processed % rows', processed;
        COMMIT;
    END LOOP;
END $$;
```

### Data Migrations in Application Code

For complex data transformations, use application code rather than SQL:

```python
# benefits: retries, progress tracking, rate limiting, error handling
def backfill_user_display_names(batch_size=1000):
    offset = 0
    while True:
        users = db.query("SELECT id, first_name, last_name FROM users "
                        "WHERE display_name IS NULL "
                        "ORDER BY id LIMIT %s OFFSET %s", batch_size, offset)
        if not users:
            break
        for user in users:
            display_name = f"{user.first_name} {user.last_name}"
            db.execute("UPDATE users SET display_name = %s WHERE id = %s",
                      display_name, user.id)
        offset += batch_size
```

## Testing Migrations

### Against Production-Like Data

1. **Clone production**: Use `pg_dump` to create a production-like test database
2. **Run migration**: Apply the migration
3. **Verify schema**: Compare expected vs actual schema
4. **Verify data**: Check row counts, constraints, and data integrity
5. **Measure duration**: Time the migration to estimate production impact
6. **Test rollback**: Apply the down migration and verify

```bash
# Test migration against a production clone
pg_dump production_db | psql test_migration_db
time psql test_migration_db < migrations/V42__add_index.sql

# Verify the index was created
psql test_migration_db -c "\di+ idx_orders_date"
```

### Migration Performance Testing

```sql
-- Before migration: check table size and row count
SELECT pg_size_pretty(pg_total_relation_size('orders')) AS size;
SELECT COUNT(*) FROM orders;

-- Time the migration
EXPLAIN ANALYZE CREATE INDEX CONCURRENTLY idx_orders_date ON orders(created_at);

-- After migration: verify
SELECT pg_size_pretty(pg_total_relation_size('orders')) AS size;
```

## Migration in Production

### Safety Checklist

```text
[ ] Migration tested on staging with production-like data
[ ] Rollback migration tested and verified
[ ] Migration duration measured and acceptable
[ ] Lock timeout configured (statement_timeout, lock_timeout)
[ ] Backup taken before migration
[ ] Rollback plan documented
[ ] Monitoring in place (connection counts, query times)
[ ] Team notified of migration window
[ ] Application code deployed before or simultaneously (if expand-contract)
```

### Lock Timeout Configuration

```sql
-- Set before running the migration
SET statement_timeout = '60s';
SET lock_timeout = '30s';

-- Or configure at the connection level
ALTER ROLE migration_user SET statement_timeout = '60s';
ALTER ROLE migration_user SET lock_timeout = '30s';
```

### Dry-Run

```bash
# Flyway dry-run
flyway -url=jdbc:postgresql://localhost/mydb \
       -user=postgres -password=secret \
       dryRun

# Liquibase rollback-sql (generates SQL without executing)
liquibase --changelog-file=changelog.yaml rollback-sql - rollbackCount=1

# golang-migrate does not have a native dry-run; use -verbose and inspect
```

## Multi-Tenant Migrations

### Shared Schema (Same Tables, Tenant Column)

```sql
-- Add a column to the shared schema (affects all tenants)
ALTER TABLE documents ADD COLUMN encrypted BOOLEAN NOT NULL DEFAULT FALSE;

-- Backfill per tenant (to avoid locking the entire table at once)
UPDATE documents SET encrypted = TRUE WHERE tenant_id = 1;
UPDATE documents SET encrypted = TRUE WHERE tenant_id = 2;
```

### Schema-per-Tenant (Separate Schemas)

```sql
-- Apply migration to all tenant schemas
DO $$
DECLARE
    schema_name TEXT;
BEGIN
    FOR schema_name IN
        SELECT schema_name FROM information_schema.schemata
        WHERE schema_name LIKE 'tenant_%'
    LOOP
        EXECUTE format('ALTER TABLE %I.documents ADD COLUMN encrypted BOOLEAN NOT NULL DEFAULT FALSE', schema_name);
    END LOOP;
END $$;
```

## Branching Strategies

### Squash

After many small migrations accumulate, squash them into a single baseline migration:

```bash
# Flyway: create a baseline
# 1. Export current schema: pg_dump --schema-only mydb > baseline.sql
# 2. Mark all existing migrations as applied
flyway baseline -version 42
# 3. New migrations start from V43
```

### Rebase

When feature branches create conflicting migration numbers:

```text
main branch:  V1, V2, V3, V4
feature branch: V1, V2, V3_feature

After merge: renumber V3_feature → V5 (or use timestamps)
```

## Migration Anti-Patterns

### Manual Schema Changes

Someone runs a `ALTER TABLE` directly on the production database. The migration tool's version
tracking becomes out of sync with the actual schema. The next migration may fail or create
inconsistencies.

### Non-Reversible DDL

```sql
-- BAD: irreversible change with no down migration
ALTER TABLE users DROP COLUMN email;

-- BETTER: use expand-contract pattern
-- Phase 1: Add new identity column
-- Phase 2: Deploy code using new column
-- Phase 3: Drop old column
```

### Data-Dependent Migrations

```sql
-- BAD: migration assumes specific data exists
INSERT INTO roles (name) VALUES ('admin') ON CONFLICT DO NOTHING;
ALTER TABLE users ADD COLUMN role_id INTEGER REFERENCES roles(id);
-- If the roles table is empty or the admin role doesn't exist, the FK fails
```

### Long-Running Migrations Without Batching

```sql
-- BAD: updates millions of rows in one transaction
UPDATE orders SET status = 'archived' WHERE created_at &lt; '2023-01-01';
-- Holds row locks for the entire duration, blocks all other access

-- GOOD: batch the update
-- See "Batched Data Migrations" section above
```

### Not Setting Timeouts

A migration that blocks on a lock can wait indefinitely. Always set `lock_timeout` and
`statement_timeout` before running production migrations.

## Common Pitfalls

### Forgetting That Concurrent Index Creation Can Fail

`CREATE INDEX CONCURRENTLY` can fail if the table is written to during creation. When it fails, it
leaves an `INVALID` index. You must manually drop the invalid index before retrying:

```sql
-- Check for invalid indexes
SELECT indexrelname::regclass AS index_name
FROM pg_index
WHERE NOT indisvalid;

-- Drop and retry
DROP INDEX IF EXISTS idx_orders_date;
CREATE INDEX CONCURRENTLY idx_orders_date ON orders(created_at);
```

### Assuming DDL Is Transactional in All Databases

DDL is transactional in PostgreSQL but NOT in MySQL (most DDL auto-commits). If you wrap DDL in a
transaction for atomicity, it works in PostgreSQL but silently auto-commits each statement in MySQL.

### Not Backing Up Before Destructive Migrations

Before any migration that drops a table, column, or data, take a backup. `pg_dump` the specific
table:

```bash
pg_dump -t orders -f orders_backup.sql mydb
```

### Migrations and Connection Poolers

PgBouncer in transaction mode resets session state between transactions. If a migration uses
session-level settings (`SET search_path`), the settings may not persist. Use `SET LOCAL` within a
transaction, or connect directly to PostgreSQL (bypassing the pooler) for migrations.

### Not Testing Rollback

The rollback migration is often untested. When you need it, it fails because of schema changes that
occurred after the original migration. Always test the rollback path.
