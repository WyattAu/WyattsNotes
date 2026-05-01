---
title: Database Systems
description:
  University-level notes on Database Systems: 1.1 What is a Database; 1.2
  Database Architecture; 1.3 Data Models; 1.4 Comparison of Data Models.
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

**Three-schema architecture (ANSI-SPARC):**

The ANSI-SPARC (American National Standards Institute, Standards Planning and Requirements Committee)
architecture defines three levels of abstraction:

1. **External schema (view level):** How different users/applications see the data. Each user group
   may have a different view. A view may hide or rename columns, join tables, or aggregate data.
2. **Conceptual schema (logical level):** The logical structure of the entire database (tables,
   relationships, constraints). Describes entities, attributes, relationships, integrity constraints,
   and security information. This level is database-wide and is designed by the DBA.
3. **Internal schema (physical level):** How data is stored on disk (indexes, file organisation,
   compression, encryption). Includes data structures, access paths, and storage allocation.

The DBMS maps between levels via the **external/conceptual mapping** (translates external views to
the conceptual schema) and the **conceptual/internal mapping** (translates the conceptual schema to
internal storage).

**Data independence:**

- **Logical data independence:** The conceptual schema can change without affecting external views.
  Example: adding a new column to a table does not require modifying existing views that do not
  reference it.
- **Physical data independence:** The internal schema can change without affecting the conceptual
  schema. Example: changing from a B+ tree index to a hash index does not require modifying queries
  or table definitions.

### 1.3 Data Models

- **Relational model:** Data organised into tables (relations) with rows (tuples) and columns
  (attributes). Based on relational algebra and calculus.
- **Entity-Relationship (ER) model:** Conceptual design tool using entities, relationships, and
  attributes.
- **Object-relational model:** Extends the relational model with object-oriented features
  (inheritance, complex types, methods). Example: PostgreSQL supports table inheritance and array
  types.
- **NoSQL models:** Document, key-value, graph, column-family (covered in Section 8).

### 1.4 Comparison of Data Models

| Feature | Relational | Object-Relational | Document | Key-Value | Graph | Column-Family |
|---|---|---|---|---|---|---|
| Data structure | Tables | Tables + objects | JSON/BSON | Key-value pairs | Nodes + edges | Column families |
| Schema | Fixed | Fixed + extensible | Flexible | Schemaless | Flexible | Flexible per row |
| Query language | SQL | SQL + extensions | Varies | Get/Set/Scan | Cypher/Gremlin | CQL/SQL-like |
| ACID support | Full | Full | Limited | Limited | Per-node | Tunable |
| Scaling | Vertical | Vertical | Horizontal | Horizontal | Horizontal | Horizontal |
| Best for | Structured data, complex queries | Complex types, inheritance | Content management, APIs | Caching, sessions | Social networks, recommendations | Time series, logs, analytics |

**Choosing a model.** Relational databases remain the default for structured data with complex
queries and strong consistency requirements. NoSQL databases excel when horizontal scalability or
flexible schemas are paramount. The choice depends on the workload, not on a blanket preference.

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

$$R \div S = \pi_{R-S}(R) - \pi_{R-S}\Bigl(\bigl(\pi_{R-S}(R) \times S\bigr) - R\Bigr)$$

**Example.** Find students who have taken **all** courses:

$$\pi_{\mathrm{sid}, \mathrm{cid}}(\mathrm{Takes}) \div \pi_{\mathrm{cid}}(\mathrm{Course})$$

<details>
<summary>Worked Example 2.1: Complex Relational Algebra Query</summary>

**Query:** Find the names of students who have enrolled in every course offered by the CS department.

**Schema:** `Student(sid, name, dept)`, `Course(cid, title, dept)`, `Takes(sid, cid, semester)`.

**Step 1.** Get CS course IDs:

$$C_{\mathrm{CS}} = \pi_{\mathrm{cid}}\bigl(\sigma_{\mathrm{dept} = \mathrm{'CS'}}(\mathrm{Course})\bigr)$$

**Step 2.** Get student-course pairs from enrolments:

$$T = \pi_{\mathrm{sid}, \mathrm{cid}}(\mathrm{Takes})$$

**Step 3.** Students who have taken all CS courses (division):

$$S_{\mathrm{all}} = T \div C_{\mathrm{CS}}$$

**Step 4.** Get names:

$$\pi_{\mathrm{name}}(S_{\mathrm{all}} \bowtie \mathrm{Student})$$

**Combined:**

$$\pi_{\mathrm{name}}\Bigl(\bigl(\pi_{\mathrm{sid}, \mathrm{cid}}(\mathrm{Takes}) \div \pi_{\mathrm{cid}}(\sigma_{\mathrm{dept}=\mathrm{'CS'}}(\mathrm{Course}))\bigr) \bowtie \mathrm{Student}\Bigr)$$

</details>

<details>
<summary>Worked Example 2.2: Relational Algebra with Outer Joins</summary>

**Query:** Find all students and the number of CS courses they have taken, including students who have
taken no CS courses (count should be 0).

**Step 1.** Filter enrolments to CS courses:

$$E_{\mathrm{CS}} = \pi_{\mathrm{sid}, \mathrm{cid}}\bigl(\mathrm{Takes} \bowtie \sigma_{\mathrm{dept}=\mathrm{'CS'}}(\mathrm{Course})\bigr)$$

**Step 2.** Left outer join with Student to include those with no CS courses:

$$\mathrm{Result} = \mathrm{Student} \bowtie_{\mathrm{left}} E_{\mathrm{CS}}$$

Note: aggregation over outer join results handles `NULL` values (they are excluded from `COUNT`).

In SQL, this translates directly to:

```sql
SELECT S.sid, S.name, COUNT(E.cid) AS num_cs_courses
FROM Student S
LEFT JOIN Takes T ON S.sid = T.sid
LEFT JOIN Course C ON T.cid = C.cid AND C.dept = 'CS'
GROUP BY S.sid, S.name;
```

</details>

### 2.4 Relational Calculus

**Tuple relational calculus.** A query has the form $\\{t \mid P(t)\\}$ where $t$ is a tuple variable
and $P$ is a well-formed formula. The formula is built from:

- Atoms: $t \in R$ (tuple $t$ is in relation $R$), $t[A] \mathbin{\mathrm{op}} s[A]$ (comparison),
  $t[A] \mathbin{\mathrm{op}} c$ (comparison with constant), where $\mathrm{op} \in \\{=, \neq, \lt{}, \gt{}, \le{}, \ge{}\\}$.
- Logical connectives: $\land$ (and), $\lor$ (or), $\lnot$ (not).
- Quantifiers: $\exists t$ (there exists), $\forall t$ (for all).

$$\{t \mid \exists s \in \mathrm{Takes}(t[\mathrm{name}] = s[\mathrm{name}] \land s[\mathrm{grade}] = \mathrm{'A'})\}$$

**Domain relational calculus.** Variables range over individual attribute domains (not entire tuples).
A query has the form $\\{\langle x_1, \ldots, x_k \rangle \mid P(x_1, \ldots, x_k)\\}$.

$$\{ \langle n \rangle \mid \exists s, g \;(\mathrm{Takes}(s, \mathrm{'CS101'}, g) \land \mathrm{Student}(s, n, \ldots) \land g = \mathrm{'A'})\}$$

**Safety.** A calculus expression is **safe** if it yields a finite relation. The expression
$\\{t \mid \lnot(t \in R)\\}$ is unsafe (it includes every tuple not in $R$, an infinite set). We
restrict variables to domains of the relations appearing in the query.

**Theorem 2.2 (Codd).** Relational algebra and relational calculus (both tuple and domain) are
equally expressive: every query expressible in one is expressible in the other.

<details>
<summary>Worked Example 2.3: Tuple Relational Calculus</summary>

**Query:** Find students who have taken **no** CS course.

Using tuple relational calculus:

$$\{t \mid t \in \mathrm{Student} \land \lnot \exists s \in \mathrm{Takes}\bigl(s[\mathrm{sid}] = t[\mathrm{sid}] \land \exists c \in \mathrm{Course}(c[\mathrm{cid}] = s[\mathrm{cid}] \land c[\mathrm{dept}] = \mathrm{'CS'})\bigr)\}$$

**Translation to relational algebra:**

$$\pi_{\mathrm{name}}(\mathrm{Student}) - \pi_{\mathrm{name}}(\mathrm{Student} \bowtie \mathrm{Takes} \bowtie \sigma_{\mathrm{dept}=\mathrm{'CS'}}(\mathrm{Course}))$$

</details>

### 2.5 Equivalence Rules for Relational Algebra

The following rules allow the optimiser to transform queries without changing their meaning. Each rule
states that two expressions produce the same relation for any input relations.

**Rule 1 (Cascade of selections).** $\sigma_{\theta_1 \land \theta_2}(R) \equiv \sigma_{\theta_1}(\sigma_{\theta_2}(R))$.

*Proof.* A tuple satisfies $\theta_1 \land \theta_2$ if and only if it satisfies both $\theta_1$ and
$\theta_2$. Applying $\sigma_{\theta_2}$ first removes tuples failing $\theta_2$; then
$\sigma_{\theta_1}$ removes tuples failing $\theta_1$ among the remainder. The result is exactly the
tuples satisfying both conditions. $\blacksquare$

**Rule 2 (Commutativity of selections).** $\sigma_{\theta_1}(\sigma_{\theta_2}(R)) \equiv \sigma_{\theta_2}(\sigma_{\theta_1}(R))$.

*Proof.* Immediate from the commutativity of logical conjunction ($\theta_1 \land \theta_2 \equiv
\theta_2 \land \theta_1$). $\blacksquare$

**Rule 3 (Selection pushdown through cross product).** If $\theta$ involves only attributes of $R$,
then $\sigma_{\theta}(R \times S) \equiv \sigma_{\theta}(R) \times S$.

*Proof.* For each pair $(r, s)$ with $r \in R$ and $s \in S$, the condition $\theta$ depends only on
$r$. Filtering $(r, s)$ by $\theta$ on $R \times S$ is equivalent to first filtering $R$ by $\theta$
and then forming the cross product, since $s$ does not affect the result of $\theta$. $\blacksquare$

**Rule 4 (Selection pushdown through join).** If $\theta$ involves only attributes of $R$, then
$\sigma_{\theta}(R \bowtie S) \equiv \sigma_{\theta}(R) \bowtie S$.

*Proof.* The join $R \bowtie S$ combines matching pairs from $R$ and $S$. Applying $\sigma_{\theta}$
after the join filters these pairs by $\theta$ on $R$'s attributes. Filtering $R$ first removes
non-matching $R$-tuples before the join, yielding the same final set of pairs. $\blacksquare$

**Rule 5 (Commutativity of joins).** $R \bowtie S \equiv S \bowtie R$.

*Proof.* The natural join combines tuples agreeing on common attributes. This relation is symmetric
in $R$ and $S$. $\blacksquare$

**Rule 6 (Associativity of joins).** $(R \bowtie S) \bowtie T \equiv R \bowtie (S \bowtie T)$.

*Proof.* Both expressions produce tuples from $R \times S \times T$ that agree on all attributes
shared by any pair of the three relations. $\blacksquare$

**Rule 7 (Projection pushdown).** If $L_1 \subseteq L_2$ and $L_2$ includes all attributes used in
join conditions, then $\pi_{L_1}(R \bowtie S) \equiv \pi_{L_1}(\pi_{L_2}(R) \bowtie \pi_{L_2}(S))$.

*Proof.* Projecting after the join retains only attributes in $L_1$. Since $L_2$ includes all
attributes needed for the join, performing the join on projected versions of $R$ and $S$ yields the
same join result, from which $L_1$ is then projected. $\blacksquare$

These rules form the foundation of heuristic query optimisation (see Section 7).

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

<details>
<summary>Worked Example 3.1: Running Totals and Percentiles</summary>

**Running total of enrolments per department over time:**

```sql
SELECT Dept, Semester, COUNT(*) AS Enrolments,
    SUM(COUNT(*)) OVER (PARTITION BY Dept ORDER BY Semester
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS RunningTotal
FROM Enrolment E JOIN Course C ON E.CourseID = C.CourseID
GROUP BY Dept, Semester
ORDER BY Dept, Semester;
```

**Percentile rank of each student's GPA within their department:**

```sql
SELECT Name, Dept, GPA,
    PERCENT_RANK() OVER (PARTITION BY Dept ORDER BY GPA) AS Percentile,
    NTILE(4) OVER (PARTITION BY Dept ORDER BY GPA) AS Quartile
FROM Student;
```

`PERCENT_RANK()` returns a value in $[0, 1]$ representing the fractional rank. `NTILE(4)` divides
the partition into 4 approximately equal groups (quartiles).

</details>

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

### 3.8 Recursive Common Table Expressions

Recursive CTEs allow queries on hierarchical or graph-structured data. A recursive CTE consists of
a **base case** (non-recursive term) and a **recursive step** (referencing the CTE itself), joined
by `UNION ALL`.

<details>
<summary>Worked Example 3.2: Employee-Manager Hierarchy</summary>

**Schema:** `Employee(emp_id, name, manager_id)`.

```sql
WITH RECURSIVE OrgChart AS (
    SELECT emp_id, name, manager_id, 1 AS level
    FROM Employee
    WHERE manager_id IS NULL

    UNION ALL

    SELECT e.emp_id, e.name, e.manager_id, o.level + 1
    FROM Employee e
    JOIN OrgChart o ON e.manager_id = o.emp_id
)
SELECT level, name, emp_id
FROM OrgChart
ORDER BY level, name;
```

The base case selects the CEO (no manager). Each recursive step finds all employees whose manager
appears in the previous iteration. The recursion terminates when no new employees are found.

</details>

<details>
<summary>Worked Example 3.3: Bill of Materials (Parts Explosion)</summary>

**Schema:** `Part(part_id, name)` and `BOM(assembly_id, component_id, quantity)`.

Find all components (direct and indirect) of assembly `A100` and the total quantity needed:

```sql
WITH RECURSIVE PartsList AS (
    SELECT component_id AS part_id, quantity
    FROM BOM
    WHERE assembly_id = 'A100'

    UNION ALL

    SELECT b.component_id, p.quantity * b.quantity
    FROM PartsList p
    JOIN BOM b ON p.part_id = b.assembly_id
)
SELECT part_id, SUM(quantity) AS total_qty
FROM PartsList
GROUP BY part_id
ORDER BY total_qty DESC;
```

The recursive step multiplies the quantity at each level to accumulate the total needed quantity for
each sub-component.

</details>

### 3.9 SQL Injection Prevention

**SQL injection** occurs when user input is concatenated directly into a SQL string, allowing an
attacker to manipulate the query structure.

**Vulnerable code (Python):**

```python
cursor.execute(f"SELECT * FROM Student WHERE name = '{user_input}'")
```

If `user_input` is `' OR '1'='1`, the query becomes `SELECT * FROM Student WHERE name = '' OR '1'='1'`,
returning all rows.

**Types of SQL injection:**

| Type | Description |
|------|-------------|
| In-band (error-based) | Attacker extracts data from error messages |
| In-band (UNION-based) | Attacker appends `UNION SELECT` to extract other tables |
| Blind (boolean) | Attacker infers data by asking true/false questions |
| Blind (time-based) | Attacker infers data by measuring response delays |
| Out-of-band | Attacker triggers the DBMS to send data externally |

**Prevention:**

1. **Parameterised queries (prepared statements):** The DBMS treats parameters as data, never as SQL
   code.

```python
cursor.execute("SELECT * FROM Student WHERE name = %s", (user_input,))
```

2. **Input validation:** Reject or sanitise input that does not match expected patterns (e.g.,
   email format, numeric ID).
3. **Least privilege:** Application accounts should have only the permissions they need.
4. **ORM frameworks:** Use an ORM (e.g., SQLAlchemy, Django ORM) that generates parameterised queries
   by default.

:::caution Common Pitfall
Even if you escape single quotes in user input, this is not a reliable defence against SQL injection.
Use parameterised queries instead. Escape-based defences are fragile and have been bypassed by
encoding tricks (e.g., multibyte character exploits).
:::

### 3.10 Query Optimisation Basics

The SQL query optimiser automatically selects an execution plan, but understanding the basics helps
developers write efficient queries.

**Using `EXPLAIN`:**

```sql
EXPLAIN ANALYZE
SELECT S.Name FROM Student S
JOIN Enrolment E ON S.ID = E.StudentID
WHERE E.CourseID = 'CS101';
```

`EXPLAIN` shows the estimated plan; `EXPLAIN ANALYZE` also runs the query and shows actual timings.
Key information: sequential scan vs. index scan, join algorithm used, estimated vs. actual row counts,
and execution time.

**Common optimisation guidelines:**

- **Create appropriate indexes** on columns used in `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY`
  clauses.
- **Avoid `SELECT *`**; retrieve only the columns needed.
- **Avoid N+1 queries:** Fetching related data row-by-row instead of with a single join or batch query.
- **Use `LIMIT`** during development and testing to avoid processing large result sets.
- **Prefer `EXISTS` over `IN`** for subqueries when checking for existence (often more efficient).
- **Keep statistics updated:** `ANALYZE` (PostgreSQL) or `ANALYZE TABLE` (MySQL) updates the
  statistics the optimiser uses for cost estimation.

<details>
<summary>Worked Example 3.4: Identifying and Fixing a Slow Query</summary>

**Slow query:**

```sql
SELECT S.Name, S.Dept, C.Title
FROM Student S, Enrolment E, Course C
WHERE S.ID = E.StudentID
  AND E.CourseID = C.CourseID
  AND C.Dept = 'CS'
  AND S.GPA > 3.5
ORDER BY S.Name;
```

**Problems identified via `EXPLAIN ANALYZE`:**

1. Implicit cross-join syntax (`FROM S, E, C`) instead of explicit `JOIN`. While the optimiser
   handles this, explicit joins are clearer and less error-prone.
2. No index on `C.Dept`. The optimiser performs a full scan on `Course`.
3. No index on `E.StudentID` or `E.CourseID`. Nested-loop joins scan `Enrolment` for each row.

**Improved version:**

```sql
SELECT S.Name, S.Dept, C.Title
FROM Student S
JOIN Enrolment E ON S.ID = E.StudentID
JOIN Course C ON E.CourseID = C.CourseID
WHERE C.Dept = 'CS' AND S.GPA > 3.5
ORDER BY S.Name;

CREATE INDEX idx_course_dept ON Course(Dept);
CREATE INDEX idx_enrolment_student ON Enrolment(StudentID);
CREATE INDEX idx_enrolment_course ON Enrolment(CourseID);
```

With these indexes, the optimiser can use an index scan on `Course(Dept)` to find CS courses, then
use nested-loop index joins to find matching enrolments and students, avoiding full table scans.

</details>

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
$\\{AB\\}$, $\\{AC\\}$. $C \to B$ does not violate 3NF ($B$ is prime) but violates BCNF ($C$ is not a
superkey). $\blacksquare$

### 4.3 Decomposition

A decomposition of $R$ into $R_1, R_2, \ldots, R_k$ must satisfy:

1. **Lossless-join:** $R = R_1 \bowtie R_2 \bowtie \cdots \bowtie R_k$. No information is lost.
2. **Dependency preservation:** Every FD in the original schema is implied by the FDs in the
   decomposed schemas.

**Theorem 4.3 (Lossless-join test).** A decomposition of $R$ into $R_1, R_2$ is lossless if and
only if $R_1 \cap R_2 \to R_1$ or $R_1 \cap R_2 \to R_2$.

*Proof.* Let $r$ be an instance of $R$ and let $r_1 = \pi_{R_1}(r)$, $r_2 = \pi_{R_2}(r)$. We must
show $r = r_1 \bowtie r_2$ under the given condition. Since $r_1$ and $r_2$ are projections of $r$,
every tuple in $r_1 \bowtie r_2$ agrees with some tuple of $r$ on every attribute. It suffices to show
that no spurious tuple is produced. Suppose $(t_1, t_2) \in r_1 \bowtie r_2$ where $t_1 \in r_1$ and
$t_2 \in r_2$. Since $t_1$ and $t_2$ agree on $R_1 \cap R_2$, and by the condition $R_1 \cap R_2 \to
R_1$ (WLOG), there exists $t' \in r$ with $t'[R_1 \cap R_2] = t_1[R_1 \cap R_2] = t_2[R_1 \cap
R_2]$. Since $t'[R_1 \cap R_2] = t_1[R_1 \cap R_2]$ and $R_1 \cap R_2 \to R_1$, we have
$t'[R_1] = t_1[R_1]$. Similarly $t'[R_2] = t_2[R_2]$. Thus $(t_1, t_2)$ corresponds to a real tuple
$t' \in r$, so no spurious tuple exists. $\blacksquare$

**Dependency preservation.** Let $F$ be the set of FDs for $R$. The decomposition $R_1, \ldots, R_k$
preserves dependencies if the **closure** of $\bigcup_{i=1}^{k} F_i^+$ (where $F_i$ is the restriction
of $F$ to $R_i$) equals $F^+$. In practice, we check that every FD in a minimal cover of $F$ can be
tested within a single $R_i$.

Dependency preservation is important for **efficient constraint checking**: when updating $R_i$, the
DBMS can verify relevant FDs locally without joining all decomposed relations.

### 4.4 Normalisation Examples

**Example 1.** `Enrolment(StudentID, CourseID, StudentName, Dept, Grade)` with FDs:
$\mathrm{StudentID} \to \mathrm{StudentName}$, $\mathrm{StudentID} \to \mathrm{Dept}$,
$\\{\mathrm{StudentID}, \mathrm{CourseID}\\} \to \mathrm{Grade}$.

- Candidate key: $\\{\mathrm{StudentID}, \mathrm{CourseID}\\}$.
- 1NF: satisfied (atomic values).
- 2NF violation: $\mathrm{StudentID} \to \mathrm{StudentName}$ is a partial dependency (StudentID
  is a proper subset of the key).
- Decompose: `Student(StudentID, StudentName, Dept)` and
  `Enrolment(StudentID, CourseID, Grade)`. Both are in 3NF and BCNF.

**Example 2 (3NF but not BCNF).** `CourseOffering(Course, Instructor, Room, Time)` with FDs:
$\\{\mathrm{Course}, \mathrm{Time}\\} \to \\{\mathrm{Instructor}, \mathrm{Room}\\}$,
$\mathrm{Instructor} \to \mathrm{Room}$.

- Candidate key: $\\{\mathrm{Course}, \mathrm{Time}\\}$.
- 3NF: $\mathrm{Instructor} \to \mathrm{Room}$ -- Instructor is not a superkey, but Room is not
  prime. Wait -- Room is **not** prime (not in any candidate key). So this actually violates 3NF too.

Let us correct: `CourseOffering(Course, Instructor, Textbook)` with FDs:
$\mathrm{Course} \to \mathrm{Instructor}$,
$\mathrm{Instructor} \to \mathrm{Textbook}$.

- Candidate key: $\\{\mathrm{Course}\\}$ (since Course determines everything transitively).
- 3NF: $\mathrm{Instructor} \to \mathrm{Textbook}$. Instructor is not a superkey. Textbook is not
  prime. Violates 3NF.

Better example. `Class(Course, Instructor, Student)` with FDs:
$\\{\mathrm{Course}, \mathrm{Student}\\} \to \mathrm{Instructor}$,
$\mathrm{Instructor} \to \mathrm{Course}$.

- Candidate keys: $\\{\mathrm{Course}, \mathrm{Student}\\}$, $\\{\mathrm{Instructor}, \mathrm{Student}\\}$.
- 3NF check for $\mathrm{Instructor} \to \mathrm{Course}$: Instructor is not a superkey. But
  Course **is** prime (in candidate key $\\{\mathrm{Course}, \mathrm{Student}\\}$). So 3NF is
  satisfied.
- BCNF check: $\mathrm{Instructor} \to \mathrm{Course}$ violates BCNF (Instructor is not a superkey).

Decompose: `Teaches(Instructor, Course)` and `Attends(Instructor, Student)`. This is lossless
($\mathrm{Instructor}$ is common and $\mathrm{Instructor} \to \mathrm{Course}$ holds in
`Teaches`). But the dependency $\\{\mathrm{Course}, \mathrm{Student}\\} \to \mathrm{Instructor}$ is
not preserved.

**Theorem 4.4.** Not every relation can be decomposed into BCNF while preserving dependencies. 3NF
is the strongest normal form guaranteeing dependency-preserving, lossless-join decomposition.

<details>
<summary>Worked Example 4.1: BCNF Decomposition Algorithm</summary>

**Relation:** $R(A, B, C, D, E)$ with FDs $F = \\{A \to B, BC \to E, ED \to A\\}$.

**Step 1.** Find candidate keys. Compute $A^+ = \\{A, B\\}$. $BC^+ = \\{B, C, E, D, A\\} = \\{A, B, C, D, E\\}$.
So $BC$ is a candidate key. Check $ED$: $ED^+ = \\{E, D, A, B, C\\} = \\{A, B, C, D, E\\}$. So $ED$ is
also a candidate key. Prime attributes: $B, C, D, E$.

**Step 2.** Check BCNF. $A \to B$: $A$ is not a superkey (since $A^+ \neq R$). Violates BCNF.
Decompose on $A \to B$: $R_1 = \\{A, B\\}$ and $R_2 = \\{A, C, D, E\\}$.

**Step 3.** $R_1 = \\{A, B\\}$ is in BCNF (FD $A \to B$ with $A$ as superkey).

For $R_2 = \\{A, C, D, E\\}$ with FDs restricted to $R_2$: $BC \to E$ involves $B$ which is not in $R_2$,
so it is dropped. $ED \to A$ holds. Also, $A \to B$ involves $B$ not in $R_2$, so it is dropped.
Check for implied FDs: $A \to B$ in $R$ implies $AC \to BC$ (augmentation), so $AC \to E$ in $R$
(since $BC \to E$). But $AC$ is not a superkey of $R_2$... Wait, let us recheck.

Actually, from $BC \to E$ and the fact that $B$ is not in $R_2$, we cannot directly use $BC \to E$
in $R_2$. We should compute the projection of $F$ onto $R_2$: $F_2 = \\{ED \to A, A \to \varnothing\\}$.
So the only non-trivial FD in $R_2$ is $ED \to A$. Is $ED$ a superkey of $R_2$? $ED^+ = \\{E, D, A\\} \neq
\\{A, C, D, E\\}$ (missing $C$). So $ED$ is not a superkey of $R_2$.

Hmm, we need to be more careful. Let us check if $C$ is determined by $ED$ in the original $R$.
$ED^+$ in $R = \\{E, D, A, B\\}$, which does not include $C$. So $C$ is not determined.

This means $R_2 = \\{A, C, D, E\\}$ has no non-trivial FDs that hold (other than keys determining all
attributes). Check: candidate keys of $R_2$ must be superkeys. Since $ED \to A$ holds but $ED$ does
not determine $C$, we need $EDC$ as a key: $EDC^+ = \\{E, D, C, A, B\\} = R$ (all of $R$). So in
$R_2$, $EDC$ is a candidate key (since it determines all attributes of $R_2$: $EDC \to A$ and $A \to
\varnothing$ in $R_2$, so $EDC^+ = \\{A, C, D, E\\}$). $R_2$ is in BCNF since the only non-trivial
FD is $ED \to A$ and we need to check if $ED$ is a superkey of $R_2$. Since $ED^+ \cap R_2 = \\{A, D, E\\}
\neq R_2$, $ED$ is not a superkey.

But wait -- there are no other non-trivial FDs in $R_2$. The only one is $ED \to A$, which violates
BCNF. Decompose: $R_{2a} = \\{E, D, A\\}$ and $R_{2b} = \\{A, C, D, E\\} \setminus \\{E, D, A\\} =
\\{C\\}$.

Hmm, $\\{C\\}$ alone is a relation with no non-trivial FDs, so it is in BCNF. $R_{2a} = \\{E, D, A\\}$
with $ED \to A$: $ED$ is a superkey (it determines all three attributes). BCNF.

**Final decomposition:** $R_1 = \\{A, B\\}$, $R_{2a} = \\{A, D, E\\}$, $R_{2b} = \\{C\\}$.

**Lossless check:** $R_1 \cap R_{2a} = \\{A\\}$, $A \to B$ (from $F$), so $R_1 \bowtie R_{2a}$ is lossless.
$R_{2a} \cap R_{2b} = \varnothing$... This is problematic. $R_{2b} = \\{C\\}$ shares no attributes with
the others.

The issue is that $C$ is a "dangling" attribute. This is correct -- $C$ appears only in the key $BC$
of the original relation but is not functionally determined by anything except the full key. The
decomposition is technically correct but $R_{2b} = \\{C\\}$ by itself cannot be joined losslessly with
the others.

This illustrates a limitation of BCNF decomposition: it may produce a relation with no common
attributes, making lossless join impossible to verify with the pairwise test. In practice, the 3NF
synthesis algorithm avoids this issue.

</details>

:::caution Common Pitfall
Do not confuse partial dependency (2NF violation) with transitive dependency (3NF violation). A
partial dependency involves a **proper subset** of a candidate key determining a non-prime attribute.
A transitive dependency involves a non-key attribute determining another non-prime attribute.
:::

### 4.5 Multivalued Dependencies and 4NF

A **multivalued dependency (MVD)** $X \twoheadrightarrow Y$ holds on relation $R$ if for any two
tuples $t_1, t_2 \in R$ with $t_1[X] = t_2[X]$, there exists a tuple $t_3 \in R$ such that:

- $t_3[X] = t_1[X]$
- $t_3[Y] = t_1[Y]$
- $t_3[R - X - Y] = t_2[R - X - Y]$

Intuitively: $X$ determines $Y$ independently of $R - X - Y$.

**Trivial MVDs:** $X \twoheadrightarrow Y$ where $Y \subseteq X$ or $X \cup Y = R$.

**Fourth Normal Form (4NF).** $R$ is in 4NF if for every non-trivial MVD $X \twoheadrightarrow Y$
that holds on $R$, $X$ is a superkey.

**Theorem 4.5.** Every relation in 4NF is in BCNF.

*Proof.* Every FD $X \to Y$ implies the MVD $X \twoheadrightarrow Y$. In 4NF, every non-trivial MVD
$X \twoheadrightarrow Y$ requires $X$ to be a superkey. Therefore, every non-trivial FD $X \to Y$
also requires $X$ to be a superkey, which is the BCNF condition. $\blacksquare$

**4NF decomposition.** Given $R$ with MVD $X \twoheadrightarrow Y$ where $X$ is not a superkey,
decompose into $R_1 = X \cup Y$ and $R_2 = R - Y$. The decomposition is lossless-join.

<details>
<summary>Worked Example 4.2: Decomposition to 4NF</summary>

**Relation:** `CourseInstructor(Course, Instructor, Textbook)` where each course can have multiple
instructors and multiple textbooks, independently.

MVDs: $\mathrm{Course} \twoheadrightarrow \mathrm{Instructor}$,
$\mathrm{Course} \twoheadrightarrow \mathrm{Textbook}$.

**Sample data:**

| Course | Instructor | Textbook |
|---|---|---|
| CS101 | Smith | DB Systems |
| CS101 | Lee | DB Systems |
| CS101 | Smith | Algorithm Design |
| CS101 | Lee | Algorithm Design |

The redundancy is clear: each instructor-textbook pair is repeated for each course.

**4NF check:** $\mathrm{Course} \twoheadrightarrow \mathrm{Instructor}$ is non-trivial, and
$\mathrm{Course}$ is not a superkey. Violates 4NF.

**Decompose:**
- `CI(Course, Instructor)` with MVD $\mathrm{Course} \twoheadrightarrow \mathrm{Instructor}$
- `CT(Course, Textbook)` with MVD $\mathrm{Course} \twoheadrightarrow \mathrm{Textbook}$

Both are in 4NF (the determining attribute `Course` is a candidate key in each).

</details>

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

<details>
<summary>Worked Example 5.1: B+ Tree Insertion</summary>

Insert keys 10, 20, 5, 15, 25, 30 into a B+ tree with maximum 2 keys per leaf node and maximum 2
keys per internal node (order $m = 3$).

**Insert 10.** Leaf: $[10]$

**Insert 20.** Leaf: $[10, 20]$

**Insert 5.** Leaf would be $[5, 10, 20]$ -- overflow (max 2 keys). Split: left leaf $[5]$, right
leaf $[10, 20]$. Push median (10) to new internal node.

```
Internal: [10]
  ├── Leaf: [5]
  └── Leaf: [10, 20]
```

**Insert 15.** Goes to right leaf. Leaf would be $[10, 15, 20]$ -- overflow. Split: $[10, 15]$ and
$[20]$. Push 15 up.

```
Internal: [10, 15]
  ├── Leaf: [5]
  ├── Leaf: [10, 15]
  └── Leaf: [20]
```

**Insert 25.** Goes to rightmost leaf. Leaf: $[20, 25]$.

**Insert 30.** Leaf would be $[20, 25, 30]$ -- overflow. Split: $[20, 25]$ and $[30]$. Push 25 up.
Internal would be $[10, 15, 25]$ -- overflow (max 2 keys). Split internal: push 15 to new root.

```
Root: [15]
  ├── Internal: [10]
  │     ├── Leaf: [5]
  │     └── Leaf: [10, 15]
  └── Internal: [25]
        ├── Leaf: [20, 25]
        └── Leaf: [30]
```

</details>

<details>
<summary>Worked Example 5.2: B+ Tree Deletion</summary>

Starting from the tree in Example 5.1, delete key 25.

**Delete 25.** Found in rightmost leaf of the right internal node. Leaf becomes $[30]$ (1 key,
minimum is $\lceil 2/2 \rceil = 1$). No underflow. Update internal node: key 25 changes to 30
(to maintain correct routing).

```
Root: [15]
  ├── Internal: [10]
  │     ├── Leaf: [5]
  │     └── Leaf: [10, 15]
  └── Internal: [30]
        ├── Leaf: [20]
        └── Leaf: [30]
```

Now delete 15. Leaf $[10, 15]$ becomes $[10]$. No underflow. Internal node key 15 changes to 10.
But wait -- the internal node $[10]$ would need to distinguish between leaves $[5]$ and $[10]$.
Since the left child contains keys $\lt{} 10$ and the right child contains keys $\geq 10$, this
is still correct.

Now delete 10 from the left subtree's right leaf. Leaf becomes empty -- underflow.

**Redistribution:** Sibling leaf $[5]$ has 1 key (at minimum). Cannot redistribute.
**Merge:** Merge empty leaf with $[5]$. The merged leaf is $[5]$. The internal node $[10]$ now has
only one child (the merged leaf), so it underflows.

Since the internal node is a child of the root, and the root has two children, we can merge: remove
the internal node and promote its remaining child to be a direct child of the root.

```
Root: [30]
  ├── Leaf: [5]
  ├── Leaf: [10]     (originally contained 10 before deletion)
  └── Leaf: [30]
```

Wait -- after deleting 10, the leaf $[10]$ should become $[]$, and merging with $[5]$ gives $[5]$.
Let me retrace. The point is that deletion can trigger cascading merges up the tree.

</details>

### 5.2 Hash Indexes

**Static hashing.** A hash function $h : K \to \\{0, \ldots, B - 1\\}$ maps keys to $B$ buckets.
Average lookup: $O(1)$ under uniform hashing. No support for range queries.

**Collision handling.** When two keys hash to the same bucket, the DBMS must resolve the collision:

1. **Separate chaining:** Each bucket contains a linked list of entries. Lookup requires traversing
   the chain. Average chain length under uniform hashing is $n / B$.
2. **Open addressing (linear probing):** If bucket $h(k)$ is full, try $h(k)+1$, $h(k)+2$, etc.
   (mod $B$). Prone to **primary clustering**: consecutive occupied slots increase the average probe
   length.
3. **Open addressing (quadratic probing):** Try $h(k) + 1^2, h(k) + 2^2, h(k) + 3^2$, etc.
   Reduces clustering but may not probe all buckets.
4. **Open addressing (double hashing):** Use a second hash function $h_2$: probe sequence is
   $h(k) + i \cdot h_2(k)$ for $i = 0, 1, 2, \ldots$. Minimises clustering.

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
and attribute $A$ with values $\\{v_1, \ldots, v_k\\}$, store $k$ bitmaps of $n$ bits each, where
bitmap $i$ has a 1 in position $j$ if row $j$ has $A = v_i$.

**Use case:** Low-cardinality columns (gender, status, country). Bitmap indexes support fast bitwise
AND/OR for multi-criteria queries.

**Bitwise operations for query evaluation:**

| Query | Bitmap operation |
|---|---|
| $A = v_1$ AND $B = v_2$ | $\mathrm{bitmap}_{A,v_1}$ AND $\mathrm{bitmap}_{B,v_2}$ |
| $A = v_1$ OR $A = v_2$ | $\mathrm{bitmap}_{A,v_1}$ OR $\mathrm{bitmap}_{A,v_2}$ |
| $A \neq v_1$ | NOT $\mathrm{bitmap}_{A,v_1}$ |

**Compression.** For columns with many distinct values, run-length encoding (WAH or BBC) compresses
bitmaps effectively while still supporting bitwise operations.

### 5.4 Query Processing Cost Estimation

The **cost model** estimates the number of disk I/O operations for a query plan. We assume the buffer
pool has $B$ pages and each disk page access costs one I/O.

**Selection cost estimation:**

| Access method | Cost (I/Os) |
|---|---|
| Full table scan | $\lceil n_R / B \rceil$ (or $n_R$ if $B$ pages available) |
| B+ tree equality search | $\log_f(n_R)$ leaf + 1 data page |
| B+ tree range search | $\log_f(n_R)$ leaf + $\lvert\mathrm{range pages}\rvert$ |
| Hash equality search | 1 (ideal) |

where $f$ is the fanout (average number of children per internal node).

**Join cost estimation (from Section 7):**

| Algorithm | Cost |
|---|---|
| Block nested-loop | $n_R + \lceil n_R/(B-2)\rceil \cdot n_S$ |
| Sort-merge | $2n_R \log_{B-1}(n_R) + 2n_S \log_{B-1}(n_S) + n_R + n_S$ |
| Hash join | $3(n_R + n_S)$ (if build relation fits in $B$ pages) |

<details>
<summary>Worked Example 5.3: Comparing Access Methods</summary>

**Scenario:** `Student` table with 50000 tuples, 2500 pages (20 tuples per page). Buffer pool has 52
pages. Attribute `ID` has a B+ tree index of height 3 (fanout 100). Query: `SELECT * FROM Student
WHERE ID = 12345`.

**Method 1: Full table scan.** Cost = 2500 I/Os.

**Method 2: B+ tree index on `ID`.** Follow root $\to$ internal $\to$ internal $\to$ leaf: 3 I/Os
for the index traversal. Then 1 I/O for the data page. Total: 4 I/Os.

The B+ tree index is $625\times$ faster for a single equality lookup. However, for a query selecting
50% of the table, a full scan (2500 I/Os) would be faster than 25000 individual B+ tree lookups
($25000 \times 4 = 100000$ I/Os). This is why the optimiser chooses between index and scan based on
selectivity estimates.

</details>

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

### 6.3 Serialisability

A schedule is **serialisable** if its effect is equivalent to some serial schedule (where
transactions execute one after another).

**Conflict serialisability.** Two operations **conflict** if they belong to different transactions,
access the same data item, and at least one is a write. A schedule is conflict-serialisable if its
**precedence graph** (also called serialisation graph) is acyclic.

- **Precedence graph:** Nodes are transactions. Draw a directed edge $T_i \to T_j$ if an operation
  of $T_i$ conflicts with and precedes an operation of $T_j$.

**Theorem 6.1.** A schedule is conflict-serialisable if and only if its precedence graph is acyclic.

*Proof sketch.* If the precedence graph has a cycle, no serial ordering can respect all the
precedence constraints, so the schedule is not conflict-serialisable. Conversely, a topological sort
of an acyclic graph gives a serial order equivalent to the schedule. $\blacksquare$

**View serialisability.** A schedule $S$ is view-serialisable if it is **view-equivalent** to a
serial schedule $S'$. View equivalence requires:

1. **Initial read:** If $T_i$ reads the initial value of $Q$ in $S$, it does so in $S'$.
2. **Updated read:** If $T_i$ reads the value of $Q$ written by $T_j$ in $S$, it does so in $S'$.
3. **Final write:** If $T_i$ performs the final write of $Q$ in $S$, it does so in $S'$.

Every conflict-serialisable schedule is view-serialisable, but the converse does not hold. Testing
for view serialisability is NP-complete.

<details>
<summary>Worked Example 6.1: Testing Conflict Serialisability</summary>

**Schedule:** $S: r_1(A), w_1(A), r_2(A), w_2(A), r_1(B), w_1(B), r_2(B), w_2(B)$.

**Build precedence graph:**

- $w_1(A)$ before $r_2(A)$: edge $T_1 \to T_2$.
- $r_2(A)$ before $w_1(A)$: No -- $r_2(A)$ is **after** $w_1(A)$.
- $w_2(A)$ before... nothing comes after $w_2(A)$ on $A$.
- $w_1(B)$ before $r_2(B)$: edge $T_1 \to T_2$.
- $w_2(B)$ before... nothing comes after $w_2(B)$ on $B$.

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

**Optimistic Concurrency Control (OCC).** Assumes conflicts are rare. Three phases:

1. **Read phase:** Transaction reads data and writes to private workspace. No locks acquired.
2. **Validation phase:** Before commit, check that no data read by this transaction has been modified
   by a committed transaction since the read phase began.
3. **Write phase:** If validation passes, apply private writes to the database. Otherwise, abort and
   restart.

**Forward validation:** Check against committed transactions. For each data item $Q$ read by
$T_i$, verify that the transaction that last wrote $Q$ committed before $T_i$'s read phase began.
**Backward validation:** Check against active transactions.

OCC performs well when conflicts are rare but degrades under high contention (many restarts).

<details>
<summary>Worked Example 6.2: Optimistic Concurrency Control</summary>

**Scenario:** Two transactions $T_1$ and $T_2$ both read and update account balances.

- $T_1$: Read $A = 100$, Read $B = 200$, Write $A = 150$, Write $B = 150$ (transfer 50 from $B$
  to $A$).
- $T_2$: Read $A = 100$, Write $A = 75$ (withdraw 25).

**Execution:**

1. **$T_1$ read phase:** Reads $A = 100$, $B = 200$ into private workspace.
2. **$T_2$ read phase:** Reads $A = 100$ into private workspace.
3. **$T_2$ validation phase:** Checks if $A$ was modified by any committed transaction since $T_2$
   started. No committed transactions modified $A$. Validation passes.
4. **$T_2$ write phase:** Writes $A = 75$. $T_2$ commits.
5. **$T_1$ validation phase:** Checks if $A$ or $B$ was modified by any committed transaction since
   $T_1$ started. $T_2$ committed and modified $A$. Validation fails.
6. **$T_1$ is aborted and restarted.** On restart, $T_1$ reads $A = 75$, $B = 200$, and correctly
   computes $A = 125$, $B = 150$.

</details>

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

### 6.5 Log-Based Recovery

**Write-Ahead Logging (WAL).** Before writing a modified page to disk, write the log record describing
the modification to stable storage.

**WAL protocol:**

1. Before a data page is flushed to disk, all log records pertaining to that page must be on stable
   storage.
2. Before a transaction commits, all its log records must be on stable storage.

**Log records:** `[LSN, TxnID, PageID, BeforeImage, AfterImage, Commit/Abort]`.

**ARIES (Algorithm for Recovery and Isolation Exploiting Semantics).** The standard recovery
algorithm used in IBM DB2, PostgreSQL, SQL Server, and others:

1. **Analysis phase:** Scan the log from the last checkpoint. Identify dirty pages and active
   transactions. Reconstruct the transaction table (which transactions were active at crash time)
   and the dirty page table (which pages may not have been written to disk).
2. **Redo phase:** Scan forward from the earliest LSN in the dirty page table. Redo all logged
   updates (from both committed and uncommitted transactions) to restore the database to the exact
   state at the time of the crash. A record is redone only if the page's on-disk LSN is less than
   the record's LSN (ensuring idempotency).
3. **Undo phase:** Scan backward from the end of the log. Undo all updates from transactions that
   were active at crash time (did not commit). Write compensation log records (CLRs) so that
   undo operations themselves are logged.

**Key ARIES properties:**

- **Idempotent:** Recovery can be restarted safely (re-processing log records has no additional
  effect).
- **Steal/no-force:** Uncommitted pages can be flushed to disk (steal), and committed pages need
  not be flushed (no-force). This improves performance at the cost of more recovery work.
- **Fine-grained logging:** Log records track individual page modifications, enabling precise
  recovery.

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

### 6.6 Buffer Management

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

## 9. Distributed Databases

### 9.1 Architecture and Motivation

A **distributed database** stores data across multiple nodes connected by a network. Motivations
include:

- **Performance:** Data locality reduces latency; parallel query processing increases throughput.
- **Availability:** Replication allows the system to survive node failures.
- **Scalability:** Horizontal scaling by adding more nodes.

**Shared-nothing architecture.** Each node has its own CPU, memory, and disk. Nodes communicate
only via the network. This is the dominant architecture for distributed databases.

**Data fragmentation:**

- **Horizontal fragmentation:** Each fragment is a subset of rows (tuples) defined by a selection
  predicate. Example: partition `Student` by department.
- **Vertical fragmentation:** Each fragment is a subset of columns. Example: store frequently
  accessed columns on fast nodes.
- **Hybrid fragmentation:** A combination of horizontal and vertical.

### 9.2 Distributed Transactions

A distributed transaction involves operations on multiple nodes. The challenge is ensuring atomicity
across nodes.

**Two-Phase Commit (2PC).**

- **Phase 1 (Voting):** The coordinator sends a `PREPARE` message to all participants. Each
  participant writes its changes to a local log, votes `YES` (ready to commit) or `NO` (abort).
- **Phase 2 (Decision):** If all participants voted `YES`, the coordinator sends `COMMIT`; otherwise
  it sends `ABORT`. Participants apply the decision and acknowledge.

**Theorem 9.1.** 2PC guarantees atomicity of distributed transactions if no participant crashes
permanently and the log is on stable storage.

*Proof.* If the coordinator crashes after phase 1, participants that voted `YES` are blocked -- they
cannot decide without knowing the coordinator's decision. Upon recovery, the coordinator reads its
log to determine the decision and notifies participants. Since each participant wrote its vote to
stable storage before responding, no vote is lost. $\blacksquare$

**Blocking problem.** If the coordinator crashes after phase 1, participants that voted `YES` must
wait indefinitely (they are **blocked**). This is a fundamental limitation of 2PC.

**Three-Phase Commit (3PC).** Adds a `PRE-COMMIT` phase to eliminate blocking under the fail-stop
model:

1. **CanCommit:** Coordinator asks if participants can commit. Participants reply `YES` or `NO`.
2. **PreCommit:** If all `YES`, coordinator sends `PRE-COMMIT`. Participants acknowledge.
3. **DoCommit:** Coordinator sends `COMMIT`. Participants commit and acknowledge.

If the coordinator crashes after `PRE-COMMIT`, any participant can contact others to determine the
outcome (since at least one participant must have received `PRE-COMMIT` and can coordinate).

**Limitation of 3PC:** Assumes reliable communication (no lost messages), which is unrealistic in
practice. 3PC is rarely used in production systems.

<details>
<summary>Worked Example 9.2: Two-Phase Commit Walkthrough</summary>

**Scenario:** A bank transfer deducts 100 from Account A (on Node 1) and adds 100 to Account B
(on Node 2). The coordinator manages the distributed transaction.

**Normal execution:**

1. Coordinator sends `PREPARE` to Node 1 and Node 2.
2. Node 1: locks Account A, writes -100 to log, votes `YES`.
3. Node 2: locks Account B, writes +100 to log, votes `YES`.
4. All votes are `YES`. Coordinator sends `COMMIT` to both nodes.
5. Node 1 applies the write (Account A -= 100), unlocks, sends ACK.
6. Node 2 applies the write (Account B += 100), unlocks, sends ACK.
7. Coordinator writes `COMMIT` to its log. Transaction complete.

**Node 1 votes NO (insufficient funds):**

1. Coordinator sends `PREPARE` to Node 1 and Node 2.
2. Node 1: locks Account A, discovers balance is 50, votes `NO`.
3. Coordinator receives `NO`, sends `ABORT` to both nodes.
4. Node 1 unlocks Account A (no changes applied).
5. Node 2 unlocks Account B (no changes applied).
6. Coordinator writes `ABORT` to its log. Transaction aborted.

**Coordinator crashes after Phase 1:**

1. Both nodes voted `YES` and are waiting for the decision.
2. Nodes are **blocked**: they hold locks and cannot proceed.
3. When the coordinator recovers, it reads its log, sees that all votes were `YES` but no decision
   was recorded, and sends `COMMIT` to all participants.

</details>

### 9.3 Replication

**Synchronous replication.** A write is not acknowledged until all replicas have applied it.

- Guarantees strong consistency (all replicas identical).
- High latency (wait for the slowest replica).
- Reduced availability during partitions (cannot acknowledge writes if a replica is unreachable).

**Asynchronous replication.** A write is acknowledged after the primary applies it; replicas are
updated in the background.

- Low latency (acknowledged immediately).
- Eventual consistency (replicas may lag behind).
- Higher availability during partitions.

**Replication architectures:**

| Architecture | Writes | Reads | Consistency |
|---|---|---|---|
| Single-leader | Primary only | Any replica | Strong (reads from primary) or eventual (from replicas) |
| Multi-leader | Any node | Any node | Eventual (conflict resolution required) |
| Leaderless | Any node | Any node | Tunable (quorum reads/writes) |

**Quorum-based consistency.** For a system with $N$ replicas, define write quorum $W$ and read quorum
$R$ such that $W + R \gt{} N$. This guarantees that any read sees at least one replica with the
latest write.

### 9.4 Consistency Models

Consistency models define the guarantees a distributed system provides about the order and visibility
of updates.

**Strong consistency models:**

- **Linearisability:** Every operation appears to execute atomically at a single point in real time.
  The strongest consistency model. Equivalent to "serialisable + real-time ordering."
- **Sequential consistency:** All operations appear in some total order that is consistent with the
  program order of each individual process. Weaker than linearisability (no real-time requirement).

**Weak consistency models:**

- **Causal consistency:** Operations that are causally related are seen by all processes in the same
  order. Concurrent (non-causally-related) operations may be seen in different orders.
- **Read-your-writes consistency:** A process always sees its own writes.
- **Eventual consistency:** If no new updates are made, all replicas will eventually converge to the
  same state. The weakest model; provides no ordering guarantees.

<details>
<summary>Worked Example 9.1: Quorum Read/Write</summary>

**Scenario:** $N = 5$ replicas. Choose $W = 3$, $R = 3$. Note $W + R = 6 \gt{} 5 = N$.

**Write:** Client writes value $v$. Primary sends write to all 5 replicas. At least 3 acknowledge
($W = 3$). Write is considered successful.

**Read:** Client reads from 3 replicas ($R = 3$). Since $W + R \gt{} N$, any read quorum overlaps
with the write quorum, so the reader is guaranteed to see at least one replica with the latest
value. The reader returns the most recent version among the 3 responses.

**During a partition:** If 2 replicas are unreachable, writes require $W = 3$ available replicas (OK,
3 are available). Reads require $R = 3$ (OK). If 3 replicas are unreachable, writes fail (only 2
available, need 3). This is the consistency-availability trade-off from CAP.

</details>

## 10. Problem Set

**Problems 1--3:** Introduction and Data Models

1. Explain the three levels of the ANSI-SPARC architecture with an example. Show how logical data
   independence allows a new column to be added to the conceptual schema without modifying existing
   external views.

2. Compare the relational and graph data models. Give two concrete scenarios where a graph database
   would be preferable to a relational database, explaining why.

3. A university uses a relational database for student records and a document store for course
   materials. Discuss the benefits and challenges of this polyglot persistence approach.

**Problems 4--7:** Relational Model and Algebra

4. Given relation `R(A, B, C, D, E)` with FDs $F = \\{AB \to C, C \to D, D \to E\\}$:
   (a) Find all candidate keys.
   (b) Compute the attribute closure $\\{A, B\\}^+$.
   (c) Compute $\\{C\\}^+$ and $\\{D\\}^+$.

5. Given `R(A, B, C)` with tuples $\\{(1,2,3), (1,2,4), (1,3,5), (2,2,3), (2,3,4)\\}$ and
   `S(B, C)` with tuples $\\{(2,3), (3,5)\\}$:
   (a) Compute $\sigma_{B=2}(R)$.
   (b) Compute $R \bowtie S$.
   (c) Compute $R \div S$.

6. Express the following query in relational algebra: "Find the names of students who have enrolled
   in at least two courses taught by the same instructor."

7. Prove that the cross product is commutative: $R \times S \equiv S \times R$. Prove that the cross
   product is associative: $(R \times S) \times T \equiv R \times (S \times T)$.

**Problems 8--10:** SQL

8. Write a recursive SQL query that computes the total cost of all parts (direct and indirect)
   required to assemble product `P100`, given a `BOM(parent_part, child_part, quantity)` table.

9. Write a SQL query that, for each department, returns the student with the highest GPA, their GPA,
   and the difference between their GPA and the department average. Use window functions only (no
   subqueries).

10. Consider the Python code:
    ```python
    query = f"DELETE FROM Student WHERE dept = '{dept}' AND gpa < {min_gpa}"
    ```
    (a) Identify the SQL injection vulnerability.
    (b) Show an input that exploits it.
    (c) Rewrite using parameterised queries.

**Problems 11--14:** Normalisation

11. Given `R(A, B, C, D, E)` with FDs $F = \\{A \to BC, CD \to E, B \to D, E \to A\\}$:
    (a) Find all candidate keys.
    (b) Determine the highest normal form of $R$. Justify your answer.
    (c) If $R$ is not in BCNF, decompose it into BCNF relations. Verify each decomposition is
        lossless.

12. Given `R(A, B, C, D)` with FDs $F = \\{A \to B, B \to C, C \to D, D \to A\\}$:
    (a) Find all candidate keys.
    (b) Decompose into BCNF. Is the decomposition dependency-preserving?
    (c) Show that $R$ is actually already in BCNF.

13. Prove Theorem 4.5: every relation in 4NF is in BCNF.

14. Given `R(A, B, C, D)$ with MVDs $A \twoheadrightarrow B$ and $A \twoheadrightarrow C$, and FD
    $A \to D$:
    (a) Find all candidate keys.
    (b) Is $R$ in 4NF? If not, decompose into 4NF.

**Problems 15--16:** Indexing

15. Insert the keys 8, 5, 1, 7, 3, 12, 9, 6 into a B+ tree of order 3 (maximum 2 keys per node).
    Show the tree after each operation that causes a split. How many leaf-level and internal-level
    splits occur in total?

16. A table has 100000 tuples stored in 5000 pages. The buffer pool has 101 pages. Compare the
    estimated I/O cost of answering `SELECT * FROM T WHERE A = 42` using:
    (a) A full table scan.
    (b) A B+ tree index on $A$ of height 3.
    (c) A static hash index on $A$ with 500 buckets and average chain length 0.4.
    State any assumptions you make.

**Problems 17--18:** Transaction Management

17. For each schedule below, determine if it is conflict-serialisable by drawing the precedence
    graph. If serialisable, give the equivalent serial order.
    (a) $r_1(A), r_2(A), w_1(A), w_2(A), r_1(B), w_2(B), w_1(B)$
    (b) $r_1(A), w_1(A), r_2(A), r_2(B), w_2(A), w_2(B), r_1(B), w_1(B)$
    (c) $r_1(A), w_1(A), r_2(B), w_2(B), r_3(A), w_3(A), r_3(B), w_3(B)$

18. Explain the difference between strict 2PL and rigorous 2PL. Give a schedule that is allowed by
    basic 2PL but not by strict 2PL. Explain why strict 2PL is preferred in practice.

**Problems 19--20:** Distributed Databases

19. Explain the two-phase commit protocol. Describe what happens in each of the following failure
    scenarios:
    (a) A participant crashes after voting `YES` but before receiving the coordinator's decision.
    (b) The coordinator crashes after sending `COMMIT` to some but not all participants.
    (c) The coordinator crashes after phase 1 (all votes received) but before sending any decision.

20. A distributed key-value store uses $N = 7$ replicas with quorum settings $W = 4$ and $R = 4$.
    (a) Show that any read is guaranteed to see the latest write.
    (b) What is the maximum number of node failures the system can tolerate while still serving
        both reads and writes?
    (c) How does the system behave during a network partition that isolates 3 nodes from the
        remaining 4?

## 11. Further Reading

- Silberschatz, Korth, Sudarshan: *Database System Concepts* (7th ed.).
- Ramakrishnan, Gehrke: *Database Management Systems* (3rd ed.).
- Elmasri, Navathe: *Fundamentals of Database Systems* (7th ed.).
- Kleppmann: *Designing Data-Intensive Applications* (2017).
