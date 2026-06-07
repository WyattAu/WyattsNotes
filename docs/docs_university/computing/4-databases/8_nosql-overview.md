---
title: NoSQL Overview
tags:
  - Computing
  - University
---

### 8.1 Motivation

NoSQL databases address limitations of relational databases for certain workloads:

- Horizontal scalability across commodity hardware.
- Flexible schemas (semi-structured data).
- High write throughput for simple access patterns.
- Handling unstructured or polymorphic data.

### 8.2 Document Stores

Store data as JSON/BSON documents. Each document can have a different structure.

**Example (MongoDB):**

```json
{
  "_id": 1,
  "name": "Alice",
  "courses": ["CS101", "MATH201"],
  "address": { "city": "Cambridge", "zip": "02139" }
}
```

**Strengths:** Flexible schema, nested data, good for content management. **Weaknesses:** No joins
(requires embedding or application-level joins), eventual consistency in Distributed mode, limited
transaction support.

### 8.3 Key-Value Stores

Simplest model: each item is a key-value pair. Values are opaque blobs.

**Example (Redis):**

```
SET user:1001 '{"name":"Alice","email":"alice@univ.edu"}'
GET user:1001
EXPIRE user:1001 3600
```

**Strengths:** Extremely fast (in-memory), simple API, caching, session management. **Weaknesses:**
No queries beyond key lookup, limited data modelling.

### 8.4 Graph Databases

Store nodes and edges with properties. Optimised for traversing relationships.

**Example (Neo4j Cypher):**

```
CREATE (a:Student {name: "Alice"})-[:ENROLLED_IN {grade: "A"}]->(c:Course {title: "Databases"})
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {title: "Databases"})
RETURN s.name, c.title
```

**Strengths:** Efficient for complex relationship queries, social networks, recommendation engines,
Knowledge graphs. **Weaknesses:** Not suitable for simple CRUD, horizontal scaling is harder.

### 8.5 Column-Family Stores

Store data in column families (groups of related columns). Each row can have different columns.

**Example (Apache Cassandra):**

```
CREATE TABLE grades (
    student_id text,
    course_id text,
    grade text,
    semester text,
    PRIMARY KEY ((student_id), course_id)
);
```

**Strengths:** High write throughput, efficient column-level reads, horizontal scalability,
Time-series data. **Weaknesses:** No joins, limited query flexibility, eventual consistency.

### 8.6 CAP Theorem

**Theorem 8.1 (Brewer's CAP Theorem).** A distributed data store can provide at most two of the
Following three guarantees simultaneously:

- **Consistency (C):** Every read receives the most recent write.
- **Availability (A):** Every request receives a non-error response.
- **Partition tolerance (P):** The system continues to operate despite network partitions.

Since network partitions are inevitable in distributed systems, the real trade-off is between
**consistency** and **availability** during a partition.

| System                   | Choice | Notes                                |
| ------------------------ | ------ | ------------------------------------ |
| Redis Cluster            | CP     | Partition: some nodes unreachable    |
| Cassandra                | AP     | Tunable consistency per operation    |
| MongoDB                  | CP     | Primary unavailable during partition |
| RDBMS (with replication) | CA     | Not partition-tolerant (single node) |

**PACELC.** Extension of CAP: in the absence of partitions, the trade-off is between **latency** And
**consistency**.

:::caution Common Pitfall "NoSQL" does not mean "no SQL." It means "Not Only SQL." Many NoSQL
databases now support SQL-like Query languages (e.g., Cassandra CQL). The choice between relational
and NoSQL depends on the Workload, not on a blanket preference. Relational databases remain the best
choice for strongly Structured data with complex queries and transactional requirements.



:::
