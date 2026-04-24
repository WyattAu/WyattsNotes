---
title: Database Systems
date: 2026-04-24T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: databases
---

## 1. Introduction to Database Systems

### 1.1 What is a Database

A **database** is an organised collection of structured data, managed by a **database management
system (DBMS)**. A DBMS provides:

- Data definition (schema creation and modification).
- Data manipulation (query, insert, update, delete).
- Concurrency control (multiple users accessing data simultaneously).
- Recovery (restoring data after failures).
- Security and access control.

### 1.2 Database Architecture

**Three-schema architecture:**

1. **External schema (view level):** How different users/applications see the data.
2. **Conceptual schema (logical level):** The logical structure of the entire database (tables,
   relationships, constraints).
3. **Internal schema (physical level):** How data is stored on disk (indexes, file organisation).

**Data independence:**

- **Logical data independence:** The conceptual schema can change without affecting external views.
- **Physical data independence:** The internal schema can change without affecting the conceptual
  schema.

### 1.3 Data Models

- **Relational model:** Data organised into tables (relations) with rows (tuples) and columns
  (attributes). Based on relational algebra and calculus.
- **Entity-Relationship (ER) model:** Conceptual design tool using entities, relationships, and
  attributes.
- **NoSQL models:** Document, key-value, graph, column-family (covered in Section 8).

## 2. Relational Model

### 2.1 Relations, Tuples, Attributes

A **relation** $R$ over attributes $A_1, \ldots, A_n$ is a set of tuples $(a_1, \ldots, a_n)$ where
each $a_i$ is drawn from the domain of $A_i$. A relation is a subset of $D_1 \times D_2 \times
\cdots \times D_n$.

**Properties of relations:**

- Each relation has a unique name.
- Each attribute has a unique name within a relation.
- Tuples are unordered (a relation is a set).
- All tuples are distinct (no duplicates in a mathematical relation, though SQL tables allow them).
- Attributes are unordered.

### 2.2 Keys

Let $R$ be a relation schema.

- **Superkey:** A set of attributes $K \subseteq R$ such that no two distinct tuples agree on all
  attributes in $K$.
- **Candidate key:** A minimal superkey (no proper subset is also a superkey).
- **Primary key:** One of the candidate keys, chosen by the designer.
- **Foreign key:** An attribute (or set) $FK$ in relation $R_1$ that references the primary key $PK$
  of relation $R_2$. Enforces referential integrity: every value of $FK$ must appear as a value of
  $PK$ in $R_2$, or be `NULL`.

**Example.** `Student(ID, Name, Email)`. `ID` is a candidate key (unique). If `Email` is also unique,
it is another candidate key. One is chosen as the primary key.

**Theorem 2.1.** Every relation has at least one candidate key (possibly the entire set of attributes).

### 2.3 Relational Algebra

Relational algebra provides a formal query language based on operations on relations.

**Selection** $\sigma_{\theta}(R)$: Return tuples from $R$ satisfying condition $\theta$.

$$\sigma_{\mathrm{dept} = \mathrm{'CS'}}(\mathrm{Student})$$

**Projection** $\pi_{A_1, \ldots, A_k}(R)$: Return a relation containing only attributes
$A_1, \ldots, A_k$.

$$\pi_{\mathrm{name}, \mathrm{gpa}}(\mathrm{Student})$$

**Union** $R \cup S$: All tuples in $R$ or $S$ (both must be union-compatible: same arity and
attribute domains).

**Difference** $R - S$: Tuples in $R$ but not in $S$.

**Cartesian product** $R \times S$: All pairs $(r, s)$ where $r \in R$ and $s \in S$.

**Rename** $\rho_{x}(R)$: Rename relation $R$ to $x$.

**Natural join** $R \bowtie S$: Combine tuples from $R$ and $S$ that agree on all common attributes.

$$R \bowtie S = \pi_{R \cup S}(\sigma_{R.\mathrm{common} = S.\mathrm{common}}(R \times S))$$

**Theta join** $R \bowtie_{\theta} S$: $\sigma_{\theta}(R \times S)$.

**Equi-join** $R \bowtie_{R.A = S.B} S$: A theta join where $\theta$ is an equality on specific
attributes. Keeps both join columns.

**Left outer join** $R \bowtie_{\mathrm{left}} S$: All tuples from $R$, matched with $S$ where possible;
`NULL`-padded otherwise.

**Right outer join** $R \bowtie_{\mathrm{right}} S$: All tuples from $S$, matched with $R$.

**Full outer join** $R \bowtie_{\mathrm{full}} S$: All tuples from both $R$ and $S$.

**Division** $R \div S$: Tuples $t$ in $\pi_{R-S}(R)$ such that for every tuple $s \in S$, $(t, s)
\in R$.

**Example.** Find students who have taken **all** courses:

$$\pi_{\mathrm{sid}, \mathrm{cid}}(\mathrm{Takes}) \div \pi_{\mathrm{cid}}(\mathrm{Course})$$

### 2.4 Relational Calculus

**Tuple relational calculus.** Queries of the form $\{t \mid P(t)\}$ where $t$ is a tuple variable
and $P$ is a formula.

$$\{t \mid \exists s \in \mathrm{Takes}(t[\mathrm{name}] = s[\mathrm{name}] \land s[\mathrm{grade}] = \mathrm{'A'})\}$$

**Domain relational calculus.** Variables range over attribute domains.

$$\{ \langle n \rangle \mid \exists s, g \;(\mathrm{Takes}(s, \mathrm{'CS101'}, g) \land \mathrm{Student}(s, n, \ldots) \land g = \mathrm{'A'})\}$$

**Theorem 2.2 (Codd).** Relational algebra and relational calculus (both tuple and domain) are
equally expressive: every query expressible in one is expressible in the other.

## 3. SQL

### 3.1 Data Definition Language (DDL)

```sql
CREATE TABLE Student (
    ID      INT PRIMARY KEY,
    Name    VARCHAR(100) NOT NULL,
    Email   VARCHAR(255) UNIQUE,
    GPA     DECIMAL(3,2) CHECK (GPA >= 0.0 AND GPA <= 4.0),
    Dept    VARCHAR(50) DEFAULT 'Undeclared'
);

CREATE TABLE Enrolment (
    StudentID  INT REFERENCES Student(ID) ON DELETE CASCADE,
    CourseID   VARCHAR(10) REFERENCES Course(CourseID),
    Grade      CHAR(2),
    Semester   VARCHAR(6),
    PRIMARY KEY (StudentID, CourseID, Semester)
);

CREATE INDEX idx_student_dept ON Student(Dept);
CREATE INDEX idx_enrolment_student ON Enrolment(StudentID);
```

**Constraints:**

| Constraint       | Enforcement                                          |
| ---------------- | ---------------------------------------------------- |
| `PRIMARY KEY`    | Unique, not null                                     |
| `FOREIGN KEY`    | Referential integrity                                |
| `UNIQUE`         | No duplicate values                                  |
| `NOT NULL`       | No null values                                       |
| `CHECK`          | Arbitrary boolean condition                          |
| `DEFAULT`        | Default value if none specified                      |

### 3.2 Data Manipulation Language (DML)

```sql
INSERT INTO Student (ID, Name, Email, GPA)
VALUES (1, 'Alice', 'alice@univ.edu', 3.9);

UPDATE Student SET GPA = 3.95 WHERE ID = 1;

DELETE FROM Student WHERE GPA < 1.0;
```

### 3.3 Queries

```sql
SELECT S.Name, S.GPA, C.Title
FROM Student S
JOIN Enrolment E ON S.ID = E.StudentID
JOIN Course C ON E.CourseID = C.CourseID
WHERE E.Grade IN ('A', 'A-')
  AND C.Dept = 'CS'
  AND S.GPA > 3.5
ORDER BY S.GPA DESC;
```

**Aggregate functions:** `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.

```sql
SELECT Dept, COUNT(*) AS NumStudents, AVG(GPA) AS AvgGPA
FROM Student
GROUP BY Dept
HAVING COUNT(*) > 10
ORDER BY AvgGPA DESC;
```

**`WHERE` vs. `HAVING`:** `WHERE` filters rows before grouping; `HAVING` filters groups after.

### 3.4 Joins

```sql
-- Inner join: only matching rows
SELECT * FROM Student S JOIN Enrolment E ON S.ID = E.StudentID;

-- Left join: all students, with enrolment data where available
SELECT * FROM Student S LEFT JOIN Enrolment E ON S.ID = E.StudentID;

-- Self-join: find students with the same name
SELECT S1.Name, S1.ID, S2.ID
FROM Student S1 JOIN Student S2 ON S1.Name = S2.Name AND S1.ID < S2.ID;

-- Cross join: Cartesian product
SELECT * FROM Student CROSS JOIN Course;
```

### 3.5 Subqueries

```sql
-- Scalar subquery
SELECT Name FROM Student
WHERE GPA > (SELECT AVG(GPA) FROM Student);

-- Correlated subquery
SELECT S.Name, S.Dept
FROM Student S
WHERE GPA = (
    SELECT MAX(GPA) FROM Student S2 WHERE S2.Dept = S.Dept
);

-- EXISTS / NOT EXISTS
SELECT Name FROM Student S
WHERE EXISTS (
    SELECT 1 FROM Enrolment E
    WHERE E.StudentID = S.ID AND E.Grade = 'A+'
);

-- IN subquery
SELECT Name FROM Student
WHERE ID IN (SELECT StudentID FROM Enrolment WHERE CourseID = 'CS101');

-- WITH (Common Table Expression)
WITH DeptAvg AS (
    SELECT Dept, AVG(GPA) AS AvgGPA FROM Student GROUP BY Dept
)
SELECT S.Name, S.GPA, D.AvgGPA
FROM Student S JOIN DeptAvg D ON S.Dept = D.Dept
WHERE S.GPA > D.AvgGPA;
```

### 3.6 Window Functions

Window functions compute values across a set of rows related to the current row, without collapsing
rows (unlike `GROUP BY`).

```sql
SELECT Name, Dept, GPA,
    RANK() OVER (PARTITION BY Dept ORDER BY GPA DESC) AS DeptRank,
    DENSE_RANK() OVER (ORDER BY GPA DESC) AS OverallRank,
    AVG(GPA) OVER (PARTITION BY Dept) AS DeptAvgGPA,
    LAG(GPA, 1) OVER (PARTITION BY Dept ORDER BY GPA DESC) AS PrevGPA
FROM Student;
```

**`RANK()` vs. `DENSE_RANK()`:** `RANK()` leaves gaps after ties; `DENSE_RANK()` does not.

**Other window functions:** `ROW_NUMBER()`, `LEAD()`, `FIRST_VALUE()`, `LAST_VALUE()`,
`NTILE(n)`, `SUM() OVER(...)`, `COUNT() OVER(...)`.

### 3.7 Views

```sql
CREATE VIEW CSStudents AS
SELECT ID, Name, GPA FROM Student WHERE Dept = 'CS';

CREATE VIEW DeptStats AS
SELECT Dept, COUNT(*) AS N, AVG(GPA) AS AvgGPA
FROM Student GROUP BY Dept;
```

Views are virtual tables. **Updatable views** (single-table, no aggregation) allow `INSERT`,
`UPDATE`, `DELETE` through the view. **Materialised views** store the result physically and must be
refreshed.

## 4. Normalisation

### 4.1 Functional Dependencies

A **functional dependency** $X \to Y$ holds on relation $R$ if for any two tuples $t_1, t_2$ in $R$,
$t_1[X] = t_2[X]$ implies $t_1[Y] = t_2[Y]$.

**Armstrong's axioms:**

1. **Reflexivity:** If $Y \subseteq X$, then $X \to Y$.
2. **Augmentation:** If $X \to Y$, then $XZ \to YZ$.
3. **Transitivity:** If $X \to Y$ and $Y \to Z$, then $X \to Z$.

**Derived rules:**

4. **Union:** If $X \to Y$ and $X \to Z$, then $X \to YZ$.
5. **Decomposition:** If $X \to YZ$, then $X \to Y$ and $X \to Z$.
6. **Pseudotransitivity:** If $X \to Y$ and $YW \to Z$, then $XW \to Z$.

**Attribute closure.** $X^+$ is the set of all attributes functionally determined by $X$. Computed
by starting with $X$ and repeatedly applying Armstrong's axioms until no new attributes can be added.

**Theorem 4.1.** $X \to Y$ holds if and only if $Y \subseteq X^+$.

### 4.2 Normal Forms

**First Normal Form (1NF).** All attribute values are atomic (indivisible). No repeating groups or
nested relations.

**Second Normal Form (2NF).** In 1NF, and no non-prime attribute is partially dependent on any
candidate key. Equivalently: every non-prime attribute is fully functionally dependent on every
candidate key.

A **partial dependency** is $A \to B$ where $A$ is a proper subset of a candidate key and $B$ is
non-prime.

**Third Normal Form (3NF).** In 2NF, and for every non-trivial FD $X \to A$ in $R$, either $X$ is a
superkey or $A$ is a prime attribute.

A **prime attribute** is an attribute that belongs to some candidate key.

**Boyce-Codd Normal Form (BCNF).** For every non-trivial FD $X \to A$ in $R$, $X$ is a superkey.

**Theorem 4.2.** Every relation in BCNF is in 3NF, but the converse does not hold.

*Proof.* BCNF requires $X$ to be a superkey for every non-trivial FD $X \to A$. 3NF allows $X$ to be
a superkey **or** $A$ to be prime. Since the BCNF condition is stricter, every BCNF relation is in
3NF. For the converse, consider $R(A, B, C)$ with FDs $AB \to C$ and $C \to B$. Candidate keys:
$\{AB\}$, $\{AC\}$. $C \to B$ does not violate 3NF ($B$ is prime) but violates BCNF ($C$ is not a
superkey). $\blacksquare$

### 4.3 Decomposition

A decomposition of $R$ into $R_1, R_2, \ldots, R_k$ must satisfy:

1. **Lossless-join:** $R = R_1 \bowtie R_2 \bowtie \cdots \bowtie R_k$. No information is lost.
2. **Dependency preservation:** Every FD in the original schema is implied by the FDs in the
   decomposed schemas.

**Theorem 4.3 (Lossless-join test).** A decomposition of $R$ into $R_1, R_2$ is lossless if and
only if $R_1 \cap R_2 \to R_1$ or $R_1 \cap R_2 \to R_2$.

### 4.4 Normalisation Examples

**Example 1.** `Enrolment(StudentID, CourseID, StudentName, Dept, Grade)` with FDs:
$\mathrm{StudentID} \to \mathrm{StudentName}$, $\mathrm{StudentID} \to \mathrm{Dept}$,
$\{\mathrm{StudentID}, \mathrm{CourseID}\} \to \mathrm{Grade}$.

- Candidate key: $\{\mathrm{StudentID}, \mathrm{CourseID}\}$.
- 1NF: satisfied (atomic values).
- 2NF violation: $\mathrm{StudentID} \to \mathrm{StudentName}$ is a partial dependency (StudentID
  is a proper subset of the key).
- Decompose: `Student(StudentID, StudentName, Dept)` and
  `Enrolment(StudentID, CourseID, Grade)`. Both are in 3NF and BCNF.

**Example 2 (3NF but not BCNF).** `CourseOffering(Course, Instructor, Room, Time)` with FDs:
$\{\mathrm{Course}, \mathrm{Time}\} \to \{\mathrm{Instructor}, \mathrm{Room}\}$,
$\mathrm{Instructor} \to \mathrm{Room}$.

- Candidate key: $\{\mathrm{Course}, \mathrm{Time}\}$.
- 3NF: $\mathrm{Instructor} \to \mathrm{Room}$ -- Instructor is not a superkey, but Room is not
  prime. Wait -- Room is **not** prime (not in any candidate key). So this actually violates 3NF too.

Let us correct: `CourseOffering(Course, Instructor, Textbook)` with FDs:
$\mathrm{Course} \to \mathrm{Instructor}$,
$\mathrm{Instructor} \to \mathrm{Textbook}$.

- Candidate key: $\{\mathrm{Course}\}$ (since Course determines everything transitively).
- 3NF: $\mathrm{Instructor} \to \mathrm{Textbook}$. Instructor is not a superkey. Textbook is not
  prime. Violates 3NF.

Better example. `Class(Course, Instructor, Student)` with FDs:
$\{\mathrm{Course}, \mathrm{Student}\} \to \mathrm{Instructor}$,
$\mathrm{Instructor} \to \mathrm{Course}$.

- Candidate keys: $\{\mathrm{Course}, \mathrm{Student}\}$, $\{\mathrm{Instructor}, \mathrm{Student}\}$.
- 3NF check for $\mathrm{Instructor} \to \mathrm{Course}$: Instructor is not a superkey. But
  Course **is** prime (in candidate key $\{\mathrm{Course}, \mathrm{Student}\}$). So 3NF is
  satisfied.
- BCNF check: $\mathrm{Instructor} \to \mathrm{Course}$ violates BCNF (Instructor is not a superkey).

Decompose: `Teaches(Instructor, Course)` and `Attends(Instructor, Student)`. This is lossless
($\mathrm{Instructor}$ is common and $\mathrm{Instructor} \to \mathrm{Course}$ holds in
`Teaches`). But the dependency $\{\mathrm{Course}, \mathrm{Student}\} \to \mathrm{Instructor}$ is
not preserved.

**Theorem 4.4.** Not every relation can be decomposed into BCNF while preserving dependencies. 3NF
is the strongest normal form guaranteeing dependency-preserving, lossless-join decomposition.

:::caution Common Pitfall
Do not confuse partial dependency (2NF violation) with transitive dependency (3NF violation). A
partial dependency involves a **proper subset** of a candidate key determining a non-prime attribute.
A transitive dependency involves a non-key attribute determining another non-prime attribute.
:::

## 5. Indexing

### 5.1 B-Trees and B+ Trees

**B-Tree of order $m$.** A balanced search tree where each internal node has between $\lceil m/2
\rceil$ and $m$ children. All leaves are at the same depth.

Properties:

- Root: at least 2 children (unless it is a leaf).
- Internal node with $k$ children has $k - 1$ keys.
- All leaves at the same depth $h$.
- Height: $h = O(\log_m n)$.

**Operations:**

- **Search:** $O(\log_m n)$. At each node, binary search the keys and follow the appropriate child
  pointer.
- **Insert:** Find the correct leaf. If the leaf has room, insert. If full, **split** the leaf and
  propagate the median key up. May cascade splits to the root.
- **Delete:** Find the key. If in an internal node, replace with predecessor/successor and delete
  from the leaf. If a node underflows (fewer than $\lceil m/2 \rceil - 1$ keys), **redistribute**
  from a sibling or **merge** with a sibling.

**B+ Tree.** Variant where:

- All data records are stored only in leaf nodes (internal nodes store only keys for routing).
- Leaf nodes are linked in a linked list for efficient range queries.

This makes B+ trees the standard for database indexing. The linked leaf list allows range scans in
$O(\log_m n + k)$ where $k$ is the number of records in the range.

**B+ Tree insert pseudocode:**

```python
def bplus_insert(root, key, value):
    leaf = find_leaf(root, key)
    insert_into_leaf(leaf, key, value)
    if len(leaf.keys) > MAX_KEYS:
        new_leaf, median = split_leaf(leaf)
        insert_into_parent(leaf.parent, median, new_leaf)
```

### 5.2 Hash Indexes

**Static hashing.** A hash function $h : K \to \{0, \ldots, B - 1\}$ maps keys to $B$ buckets.
Average lookup: $O(1)$ under uniform hashing. No support for range queries.

**Extendible hashing.** Dynamically grows the number of buckets. Uses a **global depth** $d$ and
per-bucket **local depth** $d'$.

- Hash key to $d$ bits.
- If the bucket is full and its local depth equals the global depth, double the directory (global
  depth increases by 1) and split the bucket.
- If the bucket's local depth is less than the global depth, split the bucket without doubling the
  directory.

**Linear hashing.** Gradually grows one bucket at a time using a pointer to the next bucket to split.
Simpler than extendible hashing but may have slightly higher overflow probability.

**Comparison:**

| Property      | B+ Tree          | Hash Index       |
| ------------- | ---------------- | ---------------- |
| Point query   | $O(\log_m n)$    | $O(1)$ average   |
| Range query   | $O(\log_m n + k)$| Not supported    |
| Insert/Delete | $O(\log_m n)$    | $O(1)$ average   |
| Space         | Nodes may be half-empty | May have overflow chains |
| Order         | Maintains key order | No ordering     |

### 5.3 Bitmap Indexes

A **bitmap index** creates one bitmap per distinct value of an attribute. For a table with $n$ rows
and attribute $A$ with values $\{v_1, \ldots, v_k\}$, store $k$ bitmaps of $n$ bits each, where
bitmap $i$ has a 1 in position $j$ if row $j$ has $A = v_i$.

**Use case:** Low-cardinality columns (gender, status, country). Bitmap indexes support fast bitwise
AND/OR for multi-criteria queries.

## 6. Transaction Management

### 6.1 ACID Properties

A **transaction** is a logical unit of work that must satisfy:

| Property | Meaning                                                |
| -------- | ------------------------------------------------------ |
| Atomicity| All or nothing: either all operations commit or none    |
| Consistency| Transforms the database from one consistent state to another |
| Isolation| Concurrent transactions do not interfere with each other|
| Durability| Once committed, the effects survive failures           |

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

### 6.3 Concurrency Control

**Two-Phase Locking (2PL).**

**Protocol:**

1. **Growing phase:** Acquire locks; do not release any.
2. **Shrinking phase:** Release locks; do not acquire any.

**Theorem 6.1.** 2PL guarantees conflict serialisability.

*Proof.* By the protocol, transaction $T_i$ acquires all its locks before releasing any. If $T_j$
requests a lock held by $T_i$, $T_j$ waits. This creates a total ordering on conflicting
operations, which corresponds to a serial schedule. $\blacksquare$

**Variants:**

- **Strict 2PL:** All locks held until commit/abort. Prevents cascading aborts.
- **Rigorous 2PL:** All locks held until commit/abort (same as strict 2PL for exclusive locks).

**Problem with 2PL: Deadlocks.** Detection (wait-for graph) or prevention (timestamp ordering).

**Timestamp Ordering (TO).** Each transaction receives a timestamp $TS(T)$. For conflicting
operations:

- $T_i$ reads $Q$: if $Q$ was last written by $T_j$ with $TS(T_j) \gt{} TS(T_i)$, abort $T_i$.
- $T_i$ writes $Q$: if $Q$ was last read by $T_j$ with $TS(T_j) \gt{} TS(T_i)$, abort $T_i$.

No deadlocks (no waiting), but may abort transactions unnecessarily.

**Multiversion Concurrency Control (MVCC).** Maintain multiple versions of each data item.

- **Read operations** read a consistent snapshot (a version visible at the start of the transaction).
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
non-overlapping parts based on what they read. Serializable Snapshot Isolation (SSI) in PostgreSQL 9.1+
detects and prevents this.

### 6.4 Log-Based Recovery

**Write-Ahead Logging (WAL).** Before writing a modified page to disk, write the log record describing
the modification to stable storage.

**WAL protocol:**

1. Before a data page is flushed to disk, all log records pertaining to that page must be on stable
   storage.
2. Before a transaction commits, all its log records must be on stable storage.

**Log records:** `[LSN, TxnID, PageID, BeforeImage, AfterImage, Commit/Abort]`.

**ARIES (Algorithm for Recovery and Isolation Exploiting Semantics).** The standard recovery
algorithm:

1. **Analysis phase:** Scan the log from the last checkpoint. Identify dirty pages and active
   transactions.
2. **Redo phase:** Scan forward, redoing all updates from committed transactions (and some from
   active transactions) to restore the database to the crash-time state.
3. **Undo phase:** Scan backward, undoing all updates from uncommitted (active) transactions.

**Checkpoints.** Periodically flush dirty pages to disk and write a checkpoint record. Reduces the
amount of log to scan during recovery.

```c
// Simplified checkpoint pseudocode
void checkpoint() {
    flush_all_dirty_pages();
    write_log_record(CHECKPOINT, dirty_page_list, active_txns);
    flush_log();
}
```

### 6.5 Buffer Management

The **buffer pool** caches frequently accessed disk pages in memory. Replacement policies include LRU,
Clock, and variants. PostgreSQL uses a Clock sweep algorithm; MySQL InnoDB uses an LRU variant with a
midpoint insertion strategy to avoid scan pollution.

## 7. Query Optimisation

### 7.1 Query Processing Pipeline

$$\mathrm{SQL} \xrightarrow{\mathrm{parse}} \mathrm{AST} \xrightarrow{\mathrm{rewrite}} \mathrm{Logical plan} \xrightarrow{\mathrm{optimise}} \mathrm{Physical plan} \xrightarrow{\mathrm{execute}} \mathrm{Result}$$

### 7.2 Cost-Based Optimisation

The optimiser estimates the cost of alternative execution plans and chooses the cheapest.

**Cost model.** Cost = I/O cost (disk page accesses) + CPU cost. For disk-bound queries, I/O
dominates.

**Catalog statistics:** Table cardinality ($n$), attribute value cardinality, number of distinct
values, histogram of value distribution, index information.

**Selectivity estimation.** For a predicate $\sigma_{A = v}(R)$, the selectivity is approximately
$1 / V(A, R)$ where $V(A, R)$ is the number of distinct values of $A$ in $R$.

| Predicate type       | Selectivity estimate                     |
| -------------------- | ---------------------------------------- |
| $A = v$              | $1 / V(A, R)$                           |
| $A \gt{} v$          | $(\max(A) - v) / (\max(A) - \min(A))$   |
| $A_1 = v_1 \land A_2 = v_2$ | $1 / V(A_1) \times 1 / V(A_2)$ |
| $A_1 = v_1 \lor A_2 = v_2$ | $1/V(A_1) + 1/V(A_2) - 1/(V(A_1) \times V(A_2))$ |

### 7.3 Join Algorithms

**Nested-loop join.** For each tuple in $R$, scan all of $S$.

$$\mathrm{Cost} = n_R \cdot n_S \mathrm{ page accesses (worst case)}$$

If one relation fits in memory, buffer it and scan the other: cost = $n_R + n_S$.

**Block nested-loop join.** Use $B$ buffer pages. Load blocks of $R$ into $B - 2$ buffers, scan $S$
with the remaining buffer.

$$\mathrm{Cost} = n_R + \lceil n_R / (B - 2) \rceil \cdot n_S$$

**Sort-merge join.** Sort both relations on the join attribute, then merge.

$$\mathrm{Cost} = 2 \cdot n_R \cdot \log_{B-1}(n_R) + 2 \cdot n_S \cdot \log_{B-1}(n_S) + n_R + n_S$$

Efficient for large relations, especially when both are already sorted.

**Hash join.** Build a hash table on the smaller relation (build phase), then probe with the larger
(probe phase).

$$\mathrm{Cost} = 3 \cdot (n_R + n_S) \mathrm{ (if build relation fits in memory)}$$

Best for equi-joins when one relation fits in memory.

**Index nested-loop join.** For each tuple in $R$, use an index on $S$ to find matching tuples.

$$\mathrm{Cost} = n_R \cdot (\mathrm{index lookup cost})$$

Efficient if $S$ has an index on the join attribute and $n_R$ is small.

### 7.4 Query Plan Selection

The optimiser explores the space of equivalent logical plans and physical implementations. For $k$
joins, the number of join orderings is $O(k!)$ (left-deep trees) or $O(3^k)$ (bushy trees).
Practical optimisers use dynamic programming with pruning.

**Heuristic transformations:**

- Push selections down (reduce intermediate result sizes).
- Push projections down (reduce column widths).
- Convert cross products to joins when possible.
- Reorder joins based on estimated cardinalities.

## 8. NoSQL Overview

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
{"_id": 1, "name": "Alice", "courses": ["CS101", "MATH201"],
 "address": {"city": "Cambridge", "zip": "02139"}}
```

**Strengths:** Flexible schema, nested data, good for content management.
**Weaknesses:** No joins (requires embedding or application-level joins), eventual consistency in
distributed mode, limited transaction support.

### 8.3 Key-Value Stores

Simplest model: each item is a key-value pair. Values are opaque blobs.

**Example (Redis):**

```
SET user:1001 '{"name":"Alice","email":"alice@univ.edu"}'
GET user:1001
EXPIRE user:1001 3600
```

**Strengths:** Extremely fast (in-memory), simple API, caching, session management.
**Weaknesses:** No queries beyond key lookup, limited data modelling.

### 8.4 Graph Databases

Store nodes and edges with properties. Optimised for traversing relationships.

**Example (Neo4j Cypher):**

```
CREATE (a:Student {name: "Alice"})-[:ENROLLED_IN {grade: "A"}]->(c:Course {title: "Databases"})
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {title: "Databases"})
RETURN s.name, c.title
```

**Strengths:** Efficient for complex relationship queries, social networks, recommendation engines,
knowledge graphs.
**Weaknesses:** Not suitable for simple CRUD, horizontal scaling is harder.

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
time-series data.
**Weaknesses:** No joins, limited query flexibility, eventual consistency.

### 8.6 CAP Theorem

**Theorem 8.1 (Brewer's CAP Theorem).** A distributed data store can provide at most two of the
following three guarantees simultaneously:

- **Consistency (C):** Every read receives the most recent write.
- **Availability (A):** Every request receives a non-error response.
- **Partition tolerance (P):** The system continues to operate despite network partitions.

Since network partitions are inevitable in distributed systems, the real trade-off is between
**consistency** and **availability** during a partition.

| System       | Choice  | Notes                                      |
| ------------ | ------- | ------------------------------------------ |
| Redis Cluster| CP      | Partition: some nodes unreachable          |
| Cassandra    | AP      | Tunable consistency per operation          |
| MongoDB      | CP      | Primary unavailable during partition       |
| RDBMS (with replication) | CA | Not partition-tolerant (single node) |

**PACELC.** Extension of CAP: in the absence of partitions, the trade-off is between **latency**
and **consistency**.

:::caution Common Pitfall
"NoSQL" does not mean "no SQL." It means "Not Only SQL." Many NoSQL databases now support SQL-like
query languages (e.g., Cassandra CQL). The choice between relational and NoSQL depends on the
workload, not on a blanket preference. Relational databases remain the best choice for strongly
structured data with complex queries and transactional requirements.
:::

## 9. Further Reading

- Silberschatz, Korth, Sudarshan: *Database System Concepts* (7th ed.).
- Ramakrishnan, Gehrke: *Database Management Systems* (3rd ed.).
- Elmasri, Navathe: *Fundamentals of Database Systems* (7th ed.).
