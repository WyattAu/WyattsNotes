---
title: Databases
slug: systems-databases
description:
  'University Computer Science Databases notes covering key definitions, core concepts, worked
  examples, and practice questions for efficient revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

## 1. Relational Model

### 1.1 Fundamentals

A **relation** is a set of tuples over a relation schema $R(A_1, A_2, \ldots, A_n)$ where each $A_i$
is an attribute from domain $D_i$.

**Key terms:**

- **Tuple:** A single row in a relation.
- **Attribute:** A named column in a relation.
- **Domain:** The set of allowed values for an attribute.
- **Degree (arity):** Number of attributes.
- **Cardinality:** Number of tuples.

### 1.2 Keys

| Key Type          | Definition                                           |
| ----------------- | ---------------------------------------------------- |
| **Superkey**      | A set of attributes that uniquely identifies a tuple |
| **Candidate key** | A minimal superkey (no proper subset is a superkey)  |
| **Primary key**   | A chosen candidate key                               |
| **Foreign key**   | References the primary key of another relation       |
| **Composite key** | A key consisting of multiple attributes              |

### 1.3 Relational Algebra

**Selection** ($\sigma$): Filter rows.

$$\sigma_{\text{condition}}(R) = \{t \in R : t \text{ satisfies condition}\}$$

**Projection** ($\pi$): Select columns.

$$\pi_{A_1, A_2, \ldots}(R) = \{t[A_1, A_2, \ldots] : t \in R\}$$

**Join** ($\bowtie$): Combine relations.

$$R \bowtie_{\text{condition}} S = \sigma_{\text{condition}}(R \times S)$$

**Natural join** ($\bowtie$): Join on all shared attributes, eliminating duplicates.

**Outer joins:** Left ($\leftarrow \bowtie$), right ($\bowtie \rightarrow$), full
($\leftarrow \bowtie \rightarrow$): include unmatched tuples with NULLs.

**Other operations:**

- **Union** ($R \cup S$): Tuples in $R$ or $S$ (same schema).
- **Difference** ($R - S$): Tuples in $R$ but not $S$.
- **Intersection** ($R \cap S$): Tuples in both.
- **Cartesian product** ($R \times S$): All combinations.
- **Rename** ($\rho_x(R)$): Rename relation to $x$.

## 2. SQL

### 2.1 DDL (Data Definition Language)

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gpa DECIMAL(3,2) CHECK (gpa >= 0.0 AND gpa <= 4.0),
    major VARCHAR(50),
    enrollment_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    credits INT CHECK (credits > 0 AND credits <= 6),
    department VARCHAR(50)
);

CREATE TABLE Enrollments (
    student_id INT REFERENCES Students(student_id),
    course_id INT REFERENCES Courses(course_id),
    semester VARCHAR(20),
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id, semester)
);

DROP TABLE Enrollments;
ALTER TABLE Students ADD COLUMN email VARCHAR(255) UNIQUE;
```

### 2.2 DML (Data Manipulation Language)

```sql
INSERT INTO Students VALUES (1, 'Alice', 3.9, 'CS', '2024-09-01');

UPDATE Students SET gpa = 3.95 WHERE student_id = 1;

DELETE FROM Students WHERE student_id = 1;
```

### 2.3 Queries

**Basic SELECT:**

```sql
SELECT name, gpa FROM Students WHERE major = 'CS' ORDER BY gpa DESC;
```

**Joins:**

```sql
SELECT s.name, c.title, e.grade
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id
WHERE e.semester = 'Fall 2025';
```

**Aggregate functions:**

```sql
SELECT major, AVG(gpa) AS avg_gpa, COUNT(*) AS count
FROM Students
GROUP BY major
HAVING COUNT(*) >= 5;
```

**Subqueries:**

```sql
-- Correlated subquery
SELECT name FROM Students s
WHERE EXISTS (
    SELECT 1 FROM Enrollments e
    WHERE e.student_id = s.student_id AND e.grade = 'A+'
);

-- Scalar subquery
SELECT name, (
    SELECT COUNT(*) FROM Enrollments
    WHERE Enrollments.student_id = Students.student_id
) AS course_count
FROM Students;
```

**Window functions:**

```sql
SELECT name, major, gpa,
    RANK() OVER (PARTITION BY major ORDER BY gpa DESC) AS rank_in_major,
    SUM(gpa) OVER (PARTITION BY major) AS total_gpa
FROM Students;
```

## 3. Normalization

### 3.1 Functional Dependencies

A **functional dependency** $X \to Y$ holds in relation $R$ if for any two tuples $t_1, t_2$ in $R$:
if $t_1[X] = t_2[X]$, then $t_1[Y] = t_2[Y]$.

**Armstrong's Axioms:**

1. **Reflexivity:** If $Y \subseteq X$, then $X \to Y$.
2. **Augmentation:** If $X \to Y$, then $XZ \to YZ$.
3. **Transitivity:** If $X \to Y$ and $Y \to Z$, then $X \to Z$.

**Derived rules:**

- **Union:** $X \to Y$ and $X \to Z$ implies $X \to YZ$.
- **Decomposition:** $X \to YZ$ implies $X \to Y$ and $X \to Z$.
- **Pseudotransitivity:** $X \to Y$ and $WY \to Z$ implies $WX \to Z$.

### 3.2 Closure and Minimal Cover

**Attribute closure** $X^+$: The set of all attributes functionally determined by $X$.

```
CLOSURE(X, F):
    result = X
    repeat:
        changed = false
        for each FD Y -> Z in F:
            if Y ⊆ result and Z ⊈ result:
                result = result ∪ Z
                changed = true
    until not changed
    return result
```

**Minimal cover:** A minimal set of FDs equivalent to $F$ where:

1. No FD can be derived from others (irredundant).
2. Every FD has a single attribute on the right.
3. No attribute on the left can be removed.

### 3.3 Normal Forms

**1NF (First Normal Form):** All attributes have atomic (indivisible) values. No repeating groups.

**2NF:** 1NF and no partial dependencies. Every non-prime attribute is fully dependent on the entire
candidate key.

$$X \to Y \text{ is a partial dependency if } Y \text{ is non-prime and } X \text{ is a proper subset of a candidate key}$$

**3NF:** 2NF and no transitive dependencies. For every non-trivial FD $X \to Y$:

$$X \text{ is a superkey} \quad \text{or} \quad Y \text{ is a prime attribute}$$

**BCNF (Boyce-Codd Normal Form):** For every non-trivial FD $X \to Y$:

$$X \text{ is a superkey}$$

**Decomposition into BCNF:**

```
DECOMPOSE(R, F):
    find FD X -> Y that violates BCNF
    R1 = X ∪ Y
    R2 = attributes of R minus (Y - X)
    recursively decompose R1 and R2
```

### 3.4 Normal Form Comparison

| Normal Form | Eliminates                 | May have                     |
| ----------- | -------------------------- | ---------------------------- |
| 1NF         | Multivalued attributes     | Partial, transitive deps     |
| 2NF         | Partial dependencies       | Transitive dependencies      |
| 3NF         | Transitive dependencies    | BCNF violations              |
| BCNF        | All FDs not from superkeys | Lossy decomposition possible |

## 4. Indexing

### 4.1 B+ Trees

A **B+ tree** of order $d$ is a balanced search tree optimized for disk access:

- **Internal nodes:** Store up to $2d$ keys and $2d+1$ pointers.
- **Leaf nodes:** Store keys and values (or pointers to records). All at the same depth.
- **Leaf links:** Leaves connected in a linked list for range queries.

**Structure:**

```
       [10 | 20 | 30]
      /    |    |    \
 [1,5,8] [12,15] [22,25] [32,35,40]
     →→→→→→→→→→→→→→→→→→→→→→→ (linked)
```

**Operations:**

| Operation   | Time              | Disk Accesses     |
| ----------- | ----------------- | ----------------- |
| Search      | $O(\log_d n)$     | $O(\log_d n)$     |
| Insert      | $O(\log_d n)$     | $O(\log_d n)$     |
| Delete      | $O(\log_d n)$     | $O(\log_d n)$     |
| Range query | $O(\log_d n + k)$ | $O(\log_d n + k)$ |

**Choice of $d$:** $d$ is chosen so that one node fits in one disk block.

### 4.2 Hash Indexes

**Static hashing:** Use a hash function to map keys to bucket locations.

```
HASH_INDEX(key):
    bucket = hash(key) % num_buckets
    return lookup(bucket, key)
```

**Dynamic hashing approaches:**

- **Extendible hashing:** Directory of pointers to buckets; directory doubles when a bucket
  overflows.
- **Linear hashing:** Buckets split incrementally in a round-robin fashion.

| Aspect      | B+ Tree             | Hash Index  |
| ----------- | ------------------- | ----------- |
| Exact match | $O(\log n)$         | $O(1)$ avg  |
| Range query | Efficient           | Inefficient |
| Insert      | $O(\log n)$         | $O(1)$ avg  |
| Space       | Variable            | Variable    |
| Order       | Maintains key order | No ordering |

### 4.3 Bitmap Indexes

For low-cardinality columns. Store a bitmap per distinct value:

```
Color: | Red | Blue | Green |
--------------------------
R1     |  1  |  0   |  0   |
R2     |  0  |  1   |  0   |
R3     |  1  |  0   |  0   |
R4     |  0  |  0   |  1   |
```

**Query:** AND/OR bitmaps with bitwise operations. Very fast for filtering.

### 4.4 Composite Indexes

**Multi-column B+ tree:** Index on $(A, B)$ supports queries on $A$ alone or $(A, B)$, but not $B$
alone.

**Covering index:** An index that contains all columns needed by a query, avoiding table lookups.

## 5. Transactions

### 5.1 ACID Properties

| Property        | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| **Atomicity**   | All operations succeed or none do (all-or-nothing)              |
| **Consistency** | Transaction transforms database from one valid state to another |
| **Isolation**   | Concurrent transactions don't interfere                         |
| **Durability**  | Once committed, changes survive crashes                         |

### 5.2 Isolation Levels

| Level            | Dirty Read | Non-repeatable Read | Phantom Read |
| ---------------- | ---------- | ------------------- | ------------ |
| Read Uncommitted | Yes        | Yes                 | Yes          |
| Read Committed   | No         | Yes                 | Yes          |
| Repeatable Read  | No         | No                  | Yes          |
| Serializable     | No         | No                  | No           |

**Anomaly definitions:**

- **Dirty read:** Reading uncommitted data from another transaction.
- **Non-repeatable read:** Same query returns different results within a transaction.
- **Phantom read:** New rows appear in a repeated range query.

### 5.3 Two-Phase Locking (2PL)

**Growing phase:** Acquire locks, do not release any. **Shrinking phase:** Release locks, do not
acquire any.

```
TWO_PHASE_LOCKING(transaction):
    // Growing phase
    for each operation in transaction:
        acquire required locks (read/write)
        execute operation

    // Shrinking phase
    release all locks
```

**Variants:**

- **Strict 2PL:** All locks held until commit/abort. Prevents cascading aborts.
- **Rigorous 2PL:** Write locks held until commit. A common practical choice.

### 5.4 MVCC (Multi-Version Concurrency Control)

Instead of locking, maintain **multiple versions** of each row:

```
ROW(id=1, name='Alice', version_start=1, version_end=3)
ROW(id=1, name='Bob',   version_start=3, version_end=INF)  // current
```

- **Readers never block writers** (read old version).
- **Writers never block readers** (write new version).
- **Garbage collection** removes old versions no longer visible to any active transaction.

Used by PostgreSQL, MySQL (InnoDB), Oracle.

### 5.5 Concurrency Control Comparison

| Method     | Locking Overhead | Deadlocks | Performance (read-heavy) | Performance (write-heavy) |
| ---------- | ---------------- | --------- | ------------------------ | ------------------------- |
| 2PL        | High             | Yes       | Moderate                 | Good                      |
| MVCC       | Low              | No        | Excellent                | Moderate                  |
| Optimistic | Low              | No        | Good                     | Poor (high conflict)      |

## 6. Query Optimization

### 6.1 Query Processing Pipeline

```
SQL Query
  → Parsing (AST)
  → Query Rewrite (view expansion, subquery flattening)
  → Logical Plan (relational algebra tree)
  → Physical Plan (join method, access path selection)
  → Execution
```

### 6.2 Relational Algebra Equivalences

Used to transform queries for efficiency:

| Rule                | Equivalence                                                          |
| ------------------- | -------------------------------------------------------------------- |
| Selection pushdown  | $\sigma_c(R \bowtie S) = \sigma_c(R) \bowtie S$ if $c$ uses only $R$ |
| Join commutativity  | $R \bowtie S = S \bowtie R$                                          |
| Join associativity  | $(R \bowtie S) \bowtie T = R \bowtie (S \bowtie T)$                  |
| Selection cascade   | $\sigma_{c1}(\sigma_{c2}(R)) = \sigma_{c1 \wedge c2}(R)$             |
| Projection pushdown | Push projections as early as possible                                |

### 6.3 Join Algorithms

**Nested-loop join:**

```sql
for each r in R:
    for each s in S:
        if r.key == s.key:
            output (r, s)
```

Cost: $O(|R| \cdot |S|)$. $O(|R|)$ memory.

**Block nested-loop join:**

```
for each block_b in R (blocks of size M-1):
    load block_b into memory
    for each block_s in S:
        for each r in block_b:
            for each s in block_s:
                if r.key == s.key: output (r, s)
```

Cost: $O(\frac{|R|}{M} \cdot |S|)$ where $M$ = memory pages.

**Hash join:**

```
// Build phase
hash_table = {}
for each r in R:
    hash_table[hash(r.key)].append(r)

// Probe phase
for each s in S:
    for each r in hash_table[hash(s.key)]:
        if r.key == s.key:
            output (r, s)
```

Cost: $O(|R| + |S|)$. $O(\min(|R|, |S|))$ memory.

**Sort-merge join:**

```
sort R by key
sort S by key
merge R and S on key, outputting matches
```

Cost: $O(|R|\log|R| + |S|\log|S|)$. Good for range joins and sorted output.

### 6.4 Cost Estimation

**Selectivity:** Fraction of rows satisfying a condition.

$$\text{sel}(A = v) = \frac{1}{|V(A,R)|}$$

$$\text{sel}(A > v) \approx \frac{\text{distinct values above } v}{|V(A,R)|}$$

$$\text{sel}(A \text{ LIKE '\%x\%'}) \approx \frac{1}{3} \text{ (heuristic)}$$

**Join size estimation:**

$$|R \bowtie S| \approx \frac{|R| \cdot |S|}{\max(V(R.key), V(S.key))}$$

### 6.5 EXPLAIN and Query Plans

```sql
EXPLAIN ANALYZE
SELECT s.name, AVG(e.grade_num)
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
WHERE s.major = 'CS'
GROUP BY s.name;
```

The query planner chooses the cheapest plan based on cost estimates.

## 7. Common Pitfalls

1. **Not normalizing enough.** Storing denormalized data leads to update anomalies, insertion
   anomalies, and deletion anomalies. Aim for at least 3NF.

2. **Over-normalizing.** Excessive normalization causes many joins, degrading read performance.
   Denormalize deliberately when reads dominate and data is rarely updated.

3. **Missing indexes on foreign keys.** Joins on unindexed foreign keys cause full table scans.
   Always index columns used in JOIN, WHERE, and ORDER BY clauses.

4. **Choosing wrong isolation level.** Serializable prevents all anomalies but is the slowest. Read
   Committed is in most cases sufficient for most applications.

5. **N+1 query problem.** Executing one query to get a list, then N individual queries for related
   data. Fix with JOINs or batched fetching.

6. **Ignoring the query optimizer.** Writing overly complex SQL when a simpler equivalent would let
   the optimizer choose a better plan. Always check EXPLAIN output.

7. **Cascading deletes without consideration.** Foreign key ON DELETE CASCADE can accidentally
   delete large amounts of data. Use it carefully, and consider soft deletes for audit trails.

## Worked Examples

### Example 1: SQL Query with Joins and Aggregation

**Problem:** Given tables Students(sid, name, major_id) and Majors(mid, name, dept), write a query
to find the department with the most students. **Solution:** SELECT m.dept, COUNT(s.sid) AS
num_students FROM Majors m JOIN Students s ON m.mid = s.major_id GROUP BY m.dept ORDER BY
num_students DESC LIMIT 1;

### Example 2: Normalisation to 3NF

**Problem:** A relation R(A, B, C, D, E) has functional dependencies: AB -> C, C -> D, D -> E.
Normalise to 3NF. **Solution:** Candidate keys: {A, B}. Partial dependencies: C depends on AB (not
partial). No partial dependencies (since AB is the key). Transitive dependencies: C -> D and D -> E
violate 3NF (D and E do not depend on the key directly, only through C). Decompose into R1(A, B, C),
R2(C, D), R3(D, E). All are in 3NF. Lossless join is guaranteed because R1 intersection R2 = {C} is
a candidate key for R2.

## Summary

- The **relational model** organizes data into relations with keys and foreign keys, manipulated via
  relational algebra.
- **SQL** provides DDL (schema definition), DML (data manipulation), joins, subqueries, aggregation,
  and window functions.
- **Normalization** (1NF → BCNF) eliminates anomalies through functional dependency analysis and
  decomposition.
- **Indexing** (B+ trees, hash indexes, bitmap indexes) accelerates query performance, each suited
  to different access patterns.
- **Transactions** enforce ACID properties via isolation levels, 2PL, and MVCC.
- **Query optimization** transforms logical plans using equivalence rules, selects join algorithms,
  and estimates costs.

## Cross-References

| Topic               | Link                                                          |
| ------------------- | ------------------------------------------------------------- |
| Distributed Systems | [View](/docs/university/computer-science/distributed-systems) |
| Networking          | [View](/docs/university/computer-science/networking)          |
| Operating Systems   | [View](/docs/university/computer-science/operating-systems)   |
