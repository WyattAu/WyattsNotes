---
sidebar_label: Databases
sidebar_position: 7
description:
  'Rigorous A-Level computer science notes covering Databases. Includes definitions, derivations,
  worked examples, and exam-style problems.'
sidebar_custom_props:
  some_prop: true
---

# Databases

Databases provide structured, persistent storage that enables efficient querying, updating, and
management of data. A-Level focuses on the **relational model**, where data is organised into tables
with defined relationships, and on **SQL** as the language for manipulating that data.

## Topics Covered

### Relational Databases

- **Entities, attributes, and relationships** — the conceptual model
- **Tables, rows (tuples), columns (attributes)** — the relational implementation
- **Primary keys, foreign keys, and composite keys** — enforcing identity and relationships
- **Referential integrity** — ensuring consistency across related tables

### Normalisation

- **1NF, 2NF, 3NF** — step-by-step normalisation process to eliminate redundancy
- **Functional dependencies** — identifying which attributes determine others
- **Anomalies** — insertion, update, and deletion anomalies caused by poor design
- **Entity-Relationship diagrams** — modelling before implementation

### SQL

- **DDL (Data Definition Language)** — `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE` with constraints
  (`PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, `CHECK`)
- **DML (Data Manipulation Language)** — `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- **Queries** — `WHERE`, `ORDER BY`, `GROUP BY`, `HAVING`, aggregate functions (`COUNT`, `SUM`,
  `AVG`, `MIN`, `MAX`)
- **Joins** — `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`; understanding what rows each returns
- **Subqueries** — nested `SELECT` statements

### Transaction Processing

- **ACID properties** — Atomicity, Consistency, Isolation, Durability
- **Concurrency** — why simultaneous access causes problems (lost updates, dirty reads)
- **Locking and serialisation** — preventing concurrency issues

## Study Tips

1. **Practise writing SQL** — don't just read it. Write queries against sample databases and verify
   your results.
2. **Normalise step by step** — exam questions often give an unnormalised table and ask you to
   normalise to 3NF. Work through 1NF $\rightarrow$ 2NF $\rightarrow$ 3NF explicitly.
3. **Draw ER diagrams** before writing SQL — they clarify relationships and cardinality (1:1, 1:M,
   M:N).
4. **Understand join types** — `INNER JOIN` returns only matching rows; `LEFT JOIN` returns all rows
   from the left table. Sketch Venn diagrams if it helps.
5. **Learn the ACID properties** with concrete examples of what goes wrong when each is violated.

## How to Use These Notes

Start with the relational model and normalisation, then move to SQL. Each page contains definitions,
worked examples with sample data, and exam-style problems. Use the SQL examples as templates you can
adapt.
