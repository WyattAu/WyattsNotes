---
title: Relational Databases
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: relational-databases
---

## 1. The Relational Model

### Definition

A **relational database** organises data into **relations** (tables), each consisting of **tuples** (rows) with attributes (columns). The model was introduced by E.F. Codd in 1970.

### Terminology

| Relational term | SQL equivalent | Description                               |
| --------------- | -------------- | ----------------------------------------- |
| Relation        | Table          | A set of tuples                           |
| Tuple           | Row/Record     | A single data record                      |
| Attribute       | Column/Field   | A named column of a relation              |
| Domain          | Data type      | Set of allowable values                   |
| Primary key     | PRIMARY KEY    | Unique identifier for each tuple          |
| Foreign key     | FOREIGN KEY    | References a primary key in another table |

### Keys

- **Primary key:** A set of attributes that uniquely identifies each tuple. Must be unique and non-null.
- **Candidate key:** Any minimal set of attributes that could serve as a primary key.
- **Composite key:** A primary key consisting of multiple attributes.
- **Foreign key:** An attribute that references the primary key of another relation, establishing a relationship.

---

## 2. SQL

### SELECT

```sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1 ASC
LIMIT 10;
```

### JOIN

#### INNER JOIN

Returns rows that have matching values in both tables.

```sql
SELECT Students.name, Grades.subject, Grades.score
FROM Students
INNER JOIN Grades ON Students.student_id = Grades.student_id;
```

#### LEFT JOIN

Returns all rows from the left table, plus matched rows from the right (NULL if no match).

```sql
SELECT Students.name, Grades.subject
FROM Students
LEFT JOIN Grades ON Students.student_id = Grades.student_id;
```

#### RIGHT JOIN

Returns all rows from the right table, plus matched rows from the left.

#### FULL OUTER JOIN

Returns all rows from both tables, with NULLs where there is no match.

### GROUP BY and Aggregate Functions

```sql
SELECT department, COUNT(*) as num_employees, AVG(salary) as avg_salary
FROM Employees
GROUP BY department
HAVING AVG(salary) > 50000
ORDER BY avg_salary DESC;
```

| Function  | Description     |
| --------- | --------------- |
| COUNT(\*) | Count of rows   |
| SUM(col)  | Sum of values   |
| AVG(col)  | Arithmetic mean |
| MIN(col)  | Minimum value   |
| MAX(col)  | Maximum value   |

### Subqueries

A query nested inside another query.

```sql
SELECT name
FROM Students
WHERE student_id IN (
    SELECT student_id
    FROM Grades
    WHERE score > 90
);
```

**Correlated subquery:** References the outer query.

```sql
SELECT name, salary
FROM Employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
    WHERE department = e.department
);
```

### INSERT, UPDATE, DELETE

```sql
INSERT INTO Students (student_id, name, age) VALUES (101, 'Alice', 18);

UPDATE Students SET age = 19 WHERE student_id = 101;

DELETE FROM Students WHERE student_id = 101;
```

---

## 3. Normalisation

### Motivation

Normalisation eliminates **data redundancy** and **anomalies**:

- **Insertion anomaly:** Cannot insert a fact without also inserting unrelated facts
- **Update anomaly:** Must update multiple rows to change one fact
- **Deletion anomaly:** Deleting a fact inadvertently removes another fact

### First Normal Form (1NF)

**Definition:** A relation is in 1NF if and only if all attribute values are **atomic** (indivisible).

**Violation example:**

| student_id | name  | courses        |
| ---------- | ----- | -------------- |
| 1          | Alice | CS101, MATH201 |

**Problem:** `courses` contains multiple values in a single cell.

**1NF solution:** Split into separate rows (each cell contains one value).

| student_id | name  | course  |
| ---------- | ----- | ------- |
| 1          | Alice | CS101   |
| 1          | Alice | MATH201 |

### Second Normal Form (2NF)

**Definition:** A relation is in 2NF if it is in 1NF and **no non-prime attribute is partially dependent on any candidate key**.

A partial dependency exists when a non-key attribute depends on only part of a composite key.

**Violation example:**

| student_id | course_id | student_name | course_title |
| ---------- | --------- | ------------ | ------------ |
| 1          | CS101     | Alice        | Programming  |

Composite key: (student_id, course_id).

Partial dependencies: `student_name` depends only on `student_id`; `course_title` depends only on `course_id`.

**2NF solution:** Split into three tables:

**Students:** (student_id, student_name)
**Courses:** (course_id, course_title)
**Enrolments:** (student_id, course_id, grade)

### Third Normal Form (3NF)

**Definition:** A relation is in 3NF if it is in 2NF and **no non-prime attribute is transitively dependent on any candidate key**.

A transitive dependency: $A \to B \to C$ (where $A$ is a key, $B$ and $C$ are non-key attributes).

**Violation example:**

| student_id | name  | department | dept_location |
| ---------- | ----- | ---------- | ------------- |
| 1          | Alice | CS         | Building A    |

Key: student_id.

Transitive dependency: student_id → department → dept_location. (dept_location depends on department, not directly on student_id.)

**3NF solution:** Split:

**Students:** (student_id, name, department)
**Departments:** (department, dept_location)

### Boyce-Codd Normal Form (BCNF)

**Definition:** A relation is in BCNF if, for every non-trivial functional dependency $A \to B$, $A$ is a **superkey**.

Every relation in BCNF is also in 3NF, but not every 3NF relation is in BCNF.

**Example where 3NF ≠ BCNF:**

Consider (student, course, teacher) with dependencies:

- (student, course) → teacher (each student has one teacher per course)
- teacher → course (each teacher teaches one course)

Keys: (student, course) and (student, teacher).

In 3NF: teacher → course is a transitive dependency through (student, teacher) → course. Wait — teacher is not a non-prime attribute in 3NF's definition (it's part of a candidate key). So this relation is in 3NF.

But: teacher → course, and teacher is NOT a superkey. So this violates BCNF.

**BCNF decomposition:** Split into:

- (student, teacher) — student takes course from teacher
- (teacher, course) — teacher teaches course

This is in BCNF but loses the dependency (student, course) → teacher (a join is needed to recover it).

### Normalisation Summary

| Form | Requirement                                     | Eliminates              |
| ---- | ----------------------------------------------- | ----------------------- |
| 1NF  | Atomic values                                   | Repeating groups        |
| 2NF  | 1NF + no partial dependencies on composite keys | Partial dependencies    |
| 3NF  | 2NF + no transitive dependencies                | Transitive dependencies |
| BCNF | 3NF + every determinant is a candidate key      | Remaining anomalies     |

---

## 4. ACID Properties

Transactions in a database must satisfy the **ACID** properties:

| Property    | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| Atomicity   | A transaction is all-or-nothing — either all operations complete or none do |
| Consistency | The database transitions from one valid state to another                    |
| Isolation   | Concurrent transactions do not interfere with each other                    |
| Durability  | Once a transaction commits, its effects are permanent (survive crashes)     |

### Example: Bank Transfer

```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

- **Atomicity:** Both updates succeed, or neither does (if one fails, ROLLBACK)
- **Consistency:** Total money is conserved
- **Isolation:** Other transactions see either the old or new balances, not an intermediate state
- **Durability:** After COMMIT, the new balances persist even if the server crashes

---

## 5. Entity-Relationship Diagrams

### Notation

- **Entity:** Rectangle (e.g., Student, Course)
- **Attribute:** Oval (e.g., name, age)
- **Relationship:** Diamond (e.g., "enrols in")
- **Cardinality:** 1:1, 1:Many, Many:Many

### Example

```
[Student] --(enrols in)-- [Course]

Relationship: Enrols in
Cardinality: Many-to-Many (a student takes many courses, a course has many students)

Resolved into:
[Student] --1---[Enrolment]---Many-- [Course]
```

---

## Problem Set

**Problem 1.** Given the following unnormalised table, normalise it to 3NF.

| OrderID | CustomerName | CustomerCity | Product | Quantity | ProductPrice |
| ------- | ------------ | ------------ | ------- | -------- | ------------ |
| 1       | Alice        | London       | Book    | 2        | 15           |
| 1       | Alice        | London       | Pen     | 5        | 2            |
| 2       | Bob          | Paris        | Book    | 1        | 15           |

<details><summary>Answer</summary><p>

**Step 1 — 1NF:** All values are already atomic. But the table has repeating groups (OrderID 1 has two product rows). This is actually already in 1NF since each cell has a single value.

**Step 2 — 2NF:** Composite key: (OrderID, Product). Partial dependencies:

- CustomerName, CustomerCity depend only on OrderID
- ProductPrice depends only on Product

**Decompose:**

- Orders (OrderID, CustomerName, CustomerCity)
- Products (Product, ProductPrice)
- OrderItems (OrderID, Product, Quantity)

**Step 3 — 3NF:** In Orders: OrderID → CustomerName, CustomerCity. Transitive dependency: OrderID → CustomerName → CustomerCity? Not necessarily — customer details depend on OrderID, not on CustomerName. But if we consider CustomerName as a determinant of CustomerCity, then we have: OrderID → CustomerName → CustomerCity.

**Further decompose:**

- Orders (OrderID, CustomerName)
- Customers (CustomerName, CustomerCity)
- Products (Product, ProductPrice)
- OrderItems (OrderID, Product, Quantity)

All four relations are in 3NF. ✓

</p></details>

**Problem 2.** Write an SQL query to find the student with the highest average score across all subjects.

<details><summary>Answer</summary><p>

```sql
SELECT student_id, AVG(score) as avg_score
FROM Grades
GROUP BY student_id
ORDER BY avg_score DESC
LIMIT 1;
```

Alternative (with name join):

```sql
SELECT s.name, AVG(g.score) as avg_score
FROM Students s
JOIN Grades g ON s.student_id = g.student_id
GROUP BY s.student_id, s.name
ORDER BY avg_score DESC
LIMIT 1;
```

</p></details>

**Problem 3.** Explain the difference between WHERE and HAVING in SQL.

<details><summary>Answer</summary><p>

| Clause | Applied to      | Timing          | Filters                  |
| ------ | --------------- | --------------- | ------------------------ |
| WHERE  | Individual rows | Before grouping | Rows before aggregation  |
| HAVING | Groups          | After grouping  | Groups after aggregation |

`WHERE` filters rows before `GROUP BY` is applied. `HAVING` filters the groups created by `GROUP BY`.

Example:

```sql
SELECT department, COUNT(*) as count
FROM Employees
WHERE salary > 30000      -- Filter individual rows
GROUP BY department
HAVING COUNT(*) > 5        -- Filter groups
```

</p></details>

**Problem 4.** Prove that every BCNF relation is in 3NF.

<details><summary>Answer</summary><p>

**Proof.** Recall:

- 3NF: For every non-trivial dependency $A \to B$, either $A$ is a superkey, or $B$ is a prime attribute (part of some candidate key).
- BCNF: For every non-trivial dependency $A \to B$, $A$ is a superkey.

BCNF is strictly stronger than 3NF: BCNF requires $A$ to be a superkey for ALL non-trivial dependencies, while 3NF allows exceptions where $B$ is a prime attribute.

If a relation is in BCNF, then for every $A \to B$, $A$ is a superkey. This trivially satisfies the 3NF condition (since $A$ being a superkey is one of the two 3NF conditions). Therefore, BCNF ⊆ 3NF. $\square$

**Counterexample showing 3NF ⊄ BCNF:** See the (student, course, teacher) example in Section 3.

</p></details>

**Problem 5.** Write an SQL query using a correlated subquery to find all employees who earn more than the average salary of their department.

<details><summary>Answer</summary><p>

```sql
SELECT name, department, salary
FROM Employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
    WHERE department = e.department
);
```

For each employee, the subquery computes the average salary of that employee's department. If the employee's salary exceeds this average, the row is included.

</p></details>

**Problem 6.** Explain how a deadlock can occur in a database with multiple concurrent transactions. How do databases typically resolve deadlocks?

<details><summary>Answer</summary><p>

**Deadlock scenario:** Two transactions each hold a lock on a resource that the other needs.

- Transaction T1: locks row A, then requests lock on B
- Transaction T2: locks row B, then requests lock on A
- Both are waiting for each other → deadlock

**Necessary conditions (Coffman conditions):**

1. Mutual exclusion: resources cannot be shared
2. Hold and wait: a transaction holds resources while waiting for more
3. No preemption: resources cannot be forcibly taken
4. Circular wait: a cycle of waiting transactions

**Resolution strategies:**

1. **Timeout:** Abort transactions that have been waiting too long
2. **Wait-die:** Older transactions wait; younger transactions are aborted (die)
3. **Wound-wait:** Older transactions preempt younger ones; younger ones wait
4. **Detection:** Build a wait-for graph and abort transactions in the cycle

Most databases use timeout-based detection or prevention (ordering locks to prevent circular wait).

</p></details>

**Problem 7.** Given the following schema, write a query to find all students who have taken ALL courses offered by the CS department.

```sql
Students(student_id, name)
Courses(course_id, title, department)
Grades(student_id, course_id, score)
```

<details><summary>Answer</summary><p>

This is a **relational division** problem.

```sql
SELECT s.name
FROM Students s
WHERE NOT EXISTS (
    SELECT c.course_id
    FROM Courses c
    WHERE c.department = 'CS'
    AND NOT EXISTS (
        SELECT g.course_id
        FROM Grades g
        WHERE g.student_id = s.student_id
        AND g.course_id = c.course_id
    )
);
```

Logic: Find students for whom there does NOT EXIST a CS course that they have NOT taken. (Double negation = they have taken all CS courses.)

</p></details>

**Problem 8.** Explain why the following relation is not in BCNF and decompose it.

R(A, B, C) with functional dependencies: AB → C, C → B

<details><summary>Answer</summary><p>

**Keys:** AB is a candidate key (AB → ABC). AC is also a candidate key (AC → C → B, so AC → ABC).

**BCNF violation:** C → B, but C is not a superkey (C alone does not determine A).

**Decomposition:**

- R1(C, B) with FD: C → B. Key: C. BCNF: ✓ (C is a superkey).
- R2(A, C) with FD: AC → C (trivial). Key: AC. BCNF: ✓.

Check: Join of R1 and R2 on C gives back the original relation. All dependencies are preserved? AB → C: in R2, A with C gives us (A, C), and joining with R1 on C gives (A, C, B) = (A, B, C). ✓

Wait, AB → C is not directly represented. But AC → B can be derived: AC gives C, and C → B in R1. And AB → C: AB gives B (from R1: B depends on... actually AB → C means given A and B, we can find C. In R2(A, C), given A, we can't find C without knowing B. So AB → C is lost.

This is a known issue: BCNF decomposition may lose dependencies. In this case, we need to choose: 3NF (preserves dependencies) or BCNF (eliminates all anomalies). Since AB → C and C → B cannot coexist in a single BCNF relation, BCNF is not achievable without loss.

For revision on data structures, see [Hash Tables](/docs/docs_ALevel-notes/computer-science/data-structures/06-hash-tables).
