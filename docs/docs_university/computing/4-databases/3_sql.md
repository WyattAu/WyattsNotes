---
title: SQL
tags:
  - Computing
  - University
---

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

| Constraint    | Enforcement                     |
| ------------- | ------------------------------- |
| `PRIMARY KEY` | Unique, not null                |
| `FOREIGN KEY` | Referential integrity           |
| `UNIQUE`      | No duplicate values             |
| `NOT NULL`    | No null values                  |
| `CHECK`       | Arbitrary boolean condition     |
| `DEFAULT`     | Default value if none specified |

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

**Aggregate functions:** `COUNT``SUM``AVG``MIN``MAX`.

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
Rows (unlike `GROUP BY`).

```sql
SELECT Name, Dept, GPA,
    RANK() OVER (PARTITION BY Dept ORDER BY GPA DESC) AS DeptRank,
    DENSE_RANK() OVER (ORDER BY GPA DESC) AS OverallRank,
    AVG(GPA) OVER (PARTITION BY Dept) AS DeptAvgGPA,
    LAG(GPA, 1) OVER (PARTITION BY Dept ORDER BY GPA DESC) AS PrevGPA
FROM Student;
```

**`RANK()` vs. `DENSE_RANK()`:** `RANK()` leaves gaps after ties; `DENSE_RANK()` does not.

**Other window functions:** `ROW_NUMBER()``LEAD()``FIRST_VALUE()``LAST_VALUE()`
`NTILE(n)``SUM() OVER(...)``COUNT() OVER(...)`.

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
The partition into 4 approximately equal groups (quartiles).

</details>

### 3.7 Views

```sql
CREATE VIEW CSStudents AS
SELECT ID, Name, GPA FROM Student WHERE Dept = 'CS';

CREATE VIEW DeptStats AS
SELECT Dept, COUNT(*) AS N, AVG(GPA) AS AvgGPA
FROM Student GROUP BY Dept;
```

Views are virtual tables. **Updatable views** (single-table, no aggregation) allow `INSERT`
`UPDATE``DELETE` through the view. **Materialised views** store the result physically and must be
Refreshed.

### 3.8 Recursive Common Table Expressions

Recursive CTEs allow queries on hierarchical or graph-structured data. A recursive CTE consists of A
**base case** (non-recursive term) and a **recursive step** (referencing the CTE itself), joined By
`UNION ALL`.

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
Appears in the previous iteration. The recursion terminates when no new employees are found.

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
Each sub-component.

</details>

### 3.9 SQL Injection Prevention

**SQL injection** occurs when user input is concatenated directly into a SQL string, allowing an
Attacker to manipulate the query structure.

**Vulnerable code (Python):**

```python
cursor.execute(f"SELECT * FROM Student WHERE name = '{user_input}'")
```

If `user_input` is `' OR '1'='1`The query becomes `SELECT * FROM Student WHERE name = '' OR '1'='1'`
Returning all rows.

**Types of SQL injection:**

| Type                  | Description                                             |
| --------------------- | ------------------------------------------------------- |
| In-band (error-based) | Attacker extracts data from error messages              |
| In-band (UNION-based) | Attacker appends `UNION SELECT` to extract other tables |
| Blind (boolean)       | Attacker infers data by asking true/false questions     |
| Blind (time-based)    | Attacker infers data by measuring response delays       |
| Out-of-band           | Attacker triggers the DBMS to send data externally      |

**Prevention:**

1. **Parameterised queries (prepared statements):** The DBMS treats parameters as data, never as SQL
   code.

```python
cursor.execute("SELECT * FROM Student WHERE name = %s", (user_input,))
```

2. **Input validation:** Reject or sanitise input that does not match expected patterns (e.g., email
   format, numeric ID).
3. **Least privilege:** Application accounts should have only the permissions they need.
4. **ORM frameworks:** Use an ORM (e.g., SQLAlchemy, Django ORM) that generates parameterised
   queries by default.

:::caution Common Pitfall Even if you escape single quotes in user input, this is not a reliable
defence against SQL injection. Use parameterised queries instead. Escape-based defences are fragile
and have been bypassed by Encoding tricks (e.g., multibyte character exploits).
:::

### 3.10 Query Optimisation Basics

The SQL query optimiser automatically selects an execution plan, but understanding the basics helps
Developers write efficient queries.

**Using `EXPLAIN`:**

```sql
EXPLAIN ANALYZE
SELECT S.Name FROM Student S
JOIN Enrolment E ON S.ID = E.StudentID
WHERE E.CourseID = 'CS101';
```

`EXPLAIN` shows the estimated plan; `EXPLAIN ANALYZE` also runs the query and shows actual timings.
Key information: sequential scan vs. Index scan, join algorithm used, estimated vs. Actual row
counts, And execution time.

**Common optimisation guidelines:**

- **Create appropriate indexes** on columns used in `WHERE``JOIN``ORDER BY`And `GROUP BY` clauses.
- **Avoid `SELECT *`**; retrieve only the columns needed.
- **Avoid N+1 queries:** Fetching related data row-by-row instead of with a single join or batch
  query.
- **Use `LIMIT`** during development and testing to avoid processing large result sets.
- **Prefer `EXISTS` over `IN`** for subqueries when checking for existence (often more efficient).
- **Keep .../4-statistics-and-probability/2_statistics updated:** `ANALYZE` (PostgreSQL) or
  `ANALYZE TABLE` (MySQL) updates the .../4-statistics-and-probability/2_statistics the optimiser
  uses for cost estimation.

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
Use nested-loop index joins to find matching enrolments and students, avoiding full table scans.

</details>

