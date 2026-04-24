---
title: Databases
tags:
- IB
- CS
slug: databases
description: Comprehensive guide to databases for the International Baccalaureate.
---


## Database Fundamentals

### Flat File vs Relational Database

A **flat file** stores data in a single table (e.g., a spreadsheet or CSV file). Each row is a
record and each column is a field. Flat files are simple and suitable for small, single-user
applications, but they suffer from data redundancy, inconsistency, and limited querying capability.

A **relational database** organizes data into multiple related tables. Each table has a fixed
structure (defined number of columns with specific data types), and relationships between tables are
maintained through primary keys and foreign keys. Relational databases enforce data integrity,
minimize redundancy, and support complex queries through SQL.

| Aspect            | Flat File                        | Relational Database                       |
| ----------------- | -------------------------------- | ----------------------------------------- |
| Structure         | Single table                     | Multiple related tables                   |
| Redundancy        | High (data repeated across rows) | Low (normalization eliminates redundancy) |
| Data integrity    | Not enforced                     | Enforced by constraints                   |
| Concurrent access | Poor (file locking issues)       | Built-in concurrency control              |
| Query capability  | Limited (full table scan)        | SQL with indexing, joins, subqueries      |
| Scalability       | Poor                             | Good (with proper design and indexing)    |
| Security          | File-level only                  | Granular (table, column, row-level)       |

### Why Use a Database?

Data independence: the structure of data can be changed without modifying applications that use it.
Data integrity: constraints prevent invalid data from being stored. Concurrent access: multiple
users can read and write simultaneously without corrupting data. Security: access can be controlled
at a granular level. Backup and recovery: databases provide transaction logging and point-in-time
recovery.

## Entity-Relationship Diagrams (ERDs)

An ERD is a visual representation of the data model. It shows entities (things of interest), their
attributes, and the relationships between them.

### Entities and Attributes

An **entity** represents a real-world object or concept (e.g., Student, Course, Order). An entity
instance is a single occurrence (e.g., a specific student named "Alice").

An **attribute** is a property of an entity (e.g., Student has studentID, name, dateOfBirth, email).

**Key attributes:**

- **Underlined** in ERD notation indicates a primary key.
- Attributes that are unique for each instance are candidate keys.
- Multi-valued attributes (e.g., a student's phone numbers) are indicated with double lines in some
  notations, but in relational databases these are typically moved to a separate table.

### Relationships

Relationships describe how entities are associated with each other. They have a **degree** (the
number of entities involved) and a **cardinality** (the number of instances on each side).

**One-to-One (1:1):** Each instance of entity A is associated with exactly one instance of entity B,
and vice versa. Example: Person and Passport. A person has at most one passport; a passport belongs
to exactly one person. In a relational database, the foreign key can be placed in either table.

**One-to-Many (1:M):** Each instance of entity A can be associated with many instances of entity B,
but each instance of B is associated with exactly one instance of A. Example: Teacher and Class. A
teacher can teach many classes, but each class has one teacher. The foreign key goes in the "many"
table (Class table contains teacherID).

**Many-to-Many (M:N):** Each instance of entity A can be associated with many instances of entity B,
and vice versa. Example: Student and Course. A student can enroll in many courses, and a course can
have many students. This cannot be directly represented in a relational database and requires a
junction (link/associative) table.

### Worked Example: School Database ERD

Entities: Student, Teacher, Course, Enrollment

| Relationship       | Type | Foreign Key Location            |
| ------------------ | ---- | ------------------------------- |
| Teacher-Course     | 1:M  | Course table has teacherID      |
| Student-Enrollment | 1:M  | Enrollment table has studentID  |
| Course-Enrollment  | 1:M  | Enrollment table has courseID   |
| Student-Course     | M:N  | Via Enrollment (junction table) |

## Keys

| Key Type      | Definition                                                                   | Example                                       |
| ------------- | ---------------------------------------------------------------------------- | --------------------------------------------- |
| Superkey      | A set of attributes that uniquely identifies each tuple (may include extras) | `{studentID, name}`                           |
| Candidate key | A minimal superkey (no proper subset is also a superkey)                     | `{studentID}`, `{email}`                      |
| Primary key   | The candidate key chosen by the database designer to be the main identifier  | `{studentID}`                                 |
| Foreign key   | An attribute that references the primary key of another table                | course.teacherID references Teacher.teacherID |
| Composite key | A primary key consisting of two or more attributes                           | `{studentID, courseID}` in Enrollment         |
| Alternate key | A candidate key not chosen as the primary key                                | `{email}` (if studentID is the primary key)   |

**Primary key requirements:** Uniqueness (no two rows have the same primary key value), non-null
(every row must have a primary key), immutable (the value should not change over time).

**Foreign key constraints:** A foreign key value must either be null or match a primary key value in
the referenced table. This enforces referential integrity.

## Normalization

Normalization is the systematic process of organizing data to minimize redundancy and avoid
insertion, update, and deletion anomalies. The process involves decomposing tables into smaller,
well-structured tables linked by relationships.

### Functional Dependencies

A functional dependency $X \rightarrow Y$ means that the value of attribute $Y$ is uniquely
determined by the value of attribute $X$. If two rows have the same value for $X$, they must have
the same value for $Y$.

**Example:** In a table with `{studentID, name, dateOfBirth}`, the dependency studentID
$\rightarrow$ name holds because each student has exactly one name.

**Partial dependency:** $X \rightarrow Y$ where $X$ is a proper subset of a candidate key. This
violates 2NF.

**Transitive dependency:** $X \rightarrow Y$ and $Y \rightarrow Z$ (where $Y$ is not a candidate
key), therefore $X \rightarrow Z$ transitively. This violates 3NF.

### First Normal Form (1NF)

A table is in 1NF if and only if:

1. All attributes contain atomic (indivisible) values. No repeating groups, no arrays, no
   comma-separated lists within a single cell.
2. Each row is unique (there is a primary key).

**Violation example:**

| OrderID | Customer | Items                |
| ------- | -------- | -------------------- |
| 1001    | Alice    | Laptop, Mouse, Cable |
| 1002    | Bob      | Monitor              |

The Items column contains multiple values, violating the atomicity rule.

**1NF conversion:** Create a separate row for each item:

| OrderID | Customer | Item    |
| ------- | -------- | ------- |
| 1001    | Alice    | Laptop  |
| 1001    | Alice    | Mouse   |
| 1001    | Alice    | Cable   |
| 1002    | Bob      | Monitor |

Primary key: `{OrderID, Item}`

### Second Normal Form (2NF)

A table is in 2NF if it is in 1NF and has no partial dependencies. Every non-key attribute must
depend on the entire primary key, not just part of it. This is only relevant when the primary key is
composite.

**Violation example (unnormalized table):**

| studentID | courseID | studentName | courseTitle | teacherName |
| --------- | -------- | ----------- | ----------- | ----------- |
| 1         | 101      | Alice       | Math        | Mr. Smith   |
| 1         | 102      | Alice       | Physics     | Ms. Jones   |
| 2         | 101      | Bob         | Math        | Mr. Smith   |

Primary key: `{studentID, courseID}`

Partial dependencies:

- studentName depends only on studentID (not on courseID)
- courseTitle depends only on courseID (not on studentID)
- teacherName depends only on courseID (not on studentID)

These are partial dependencies because studentName is determined by a proper subset of the primary
key (studentID alone).

**2NF conversion:** Decompose into three tables:

**Student** (PK: studentID):

| studentID | studentName |
| --------- | ----------- |
| 1         | Alice       |
| 2         | Bob         |

**Course** (PK: courseID):

| courseID | courseTitle | teacherName |
| -------- | ----------- | ----------- |
| 101      | Math        | Mr. Smith   |
| 102      | Physics     | Ms. Jones   |

**Enrollment** (PK: `{studentID, courseID}`):

| studentID | courseID |
| --------- | -------- |
| 1         | 101      |
| 1         | 102      |
| 2         | 101      |

### Third Normal Form (3NF)

A table is in 3NF if it is in 2NF and has no transitive dependencies. Every non-key attribute must
depend directly on the primary key, not through another non-key attribute.

**Violation example:**

In the Course table above:

| courseID | courseTitle | teacherName | teacherEmail     |
| -------- | ----------- | ----------- | ---------------- |
| 101      | Math        | Mr. Smith   | smith@school.edu |
| 102      | Physics     | Ms. Jones   | jones@school.edu |

Primary key: courseID

Transitive dependency: courseID $\rightarrow$ teacherName $\rightarrow$ teacherEmail. The
teacherEmail depends on teacherName, not directly on courseID. If Mr. Smith teaches a new course, we
must update his email in every row where he appears (update anomaly). If Mr. Smith has no courses,
we cannot store his email (insertion anomaly). If we delete all of Mr. Smith's courses, we lose his
email (deletion anomaly).

**3NF conversion:** Decompose Course into two tables:

**Course** (PK: courseID):

| courseID | courseTitle | teacherID |
| -------- | ----------- | --------- |
| 101      | Math        | T1        |
| 102      | Physics     | T2        |

**Teacher** (PK: teacherID):

| teacherID | teacherName | teacherEmail     |
| --------- | ----------- | ---------------- |
| T1        | Mr. Smith   | smith@school.edu |
| T2        | Ms. Jones   | jones@school.edu |

### Summary of Normal Forms

| Normal Form | Requirement                      | Anomaly Eliminated    |
| ----------- | -------------------------------- | --------------------- |
| 1NF         | Atomic values, unique rows       | Multi-valued cells    |
| 2NF         | 1NF + no partial dependencies    | Partial redundancy    |
| 3NF         | 2NF + no transitive dependencies | Transitive redundancy |

### Worked Example: Full Normalization

Starting table: HospitalRecord

| patientID | patientName | doctorID | doctorName | department | appointmentDate |
| --------- | ----------- | -------- | ---------- | ---------- | --------------- |
| P001      | John        | D001     | Dr. Lee    | Cardiology | 2025-03-01      |
| P001      | John        | D001     | Dr. Lee    | Cardiology | 2025-03-15      |
| P002      | Mary        | D002     | Dr. Chen   | Neurology  | 2025-03-02      |
| P003      | Tom         | D001     | Dr. Lee    | Cardiology | 2025-03-03      |

**Step 1: 1NF.** Values are already atomic. But there are repeating groups (same patient appears
multiple times). The primary key must be `{patientID, appointmentDate}`.

Actually, `{patientID, appointmentDate}` uniquely identifies each row. But patientName depends only
on patientID, and doctorName depends only on doctorID.

**Step 2: 2NF.** Remove partial dependencies.

**Patient** (PK: patientID):

| patientID | patientName |
| --------- | ----------- |
| P001      | John        |
| P002      | Mary        |
| P003      | Tom         |

**Appointment** (PK: `{patientID, appointmentDate}`, FK: patientID, doctorID):

| patientID | appointmentDate | doctorID |
| --------- | --------------- | -------- |
| P001      | 2025-03-01      | D001     |
| P001      | 2025-03-15      | D001     |
| P002      | 2025-03-02      | D002     |
| P003      | 2025-03-03      | D001     |

**Doctor** (PK: doctorID):

| doctorID | doctorName | department |
| -------- | ---------- | ---------- |
| D001     | Dr. Lee    | Cardiology |
| D002     | Dr. Chen   | Neurology  |

**Step 3: 3NF.** Check for transitive dependencies in Doctor. doctorID $\rightarrow$ doctorName,
doctorID $\rightarrow$ department. There is no non-key attribute depending on another non-key
attribute here, so Doctor is already in 3NF. Check Appointment: no non-key attributes besides the
foreign keys, which depend on the full primary key. Check Patient: patientName depends on patientID
(the only key). All tables are in 3NF.

## SQL Fundamentals

### Data Definition Language (DDL)

DDL defines and modifies the structure of database objects (tables, views, indexes).

**CREATE TABLE:**

```sql
CREATE TABLE Student (
    studentID INTEGER PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    dateOfBirth DATE,
    enrollmentDate DATE DEFAULT CURRENT_DATE,
    gpa FLOAT CHECK (gpa >= 0.0 AND gpa <= 4.0)
);
```

**Constraints:**

| Constraint  | Purpose                                           |
| ----------- | ------------------------------------------------- |
| PRIMARY KEY | Uniquely identifies each row; implicitly NOT NULL |
| FOREIGN KEY | References a primary key in another table         |
| NOT NULL    | Column cannot contain NULL values                 |
| UNIQUE      | All values in the column must be distinct         |
| CHECK       | Values must satisfy a Boolean condition           |
| DEFAULT     | Default value when no value is specified          |

**ALTER TABLE:**

```sql
ALTER TABLE Student ADD COLUMN phone VARCHAR(20);
ALTER TABLE Student DROP COLUMN phone;
ALTER TABLE Student MODIFY COLUMN email VARCHAR(200);
```

**DROP TABLE:**

```sql
DROP TABLE Student;
```

### Data Manipulation Language (DML)

**INSERT:**

```sql
INSERT INTO Student (studentID, firstName, lastName, email, dateOfBirth)
VALUES (1, 'Alice', 'Smith', 'alice@school.edu', '2005-06-15');

INSERT INTO Student (studentID, firstName, lastName)
VALUES (2, 'Bob', 'Jones');
```

**UPDATE:**

```sql
UPDATE Student SET gpa = 3.8 WHERE studentID = 1;

UPDATE Student SET email = 'newemail@school.edu'
WHERE lastName = 'Jones' AND firstName = 'Bob';
```

**DELETE:**

```sql
DELETE FROM Student WHERE studentID = 2;
```

:::warning DELETE FROM Student without WHERE deletes all rows but keeps the table structure. DROP
TABLE Student deletes both the data and the table structure. Be certain which one you intend.
:::

### Queries: SELECT

The SELECT statement retrieves data from one or more tables.

**Basic SELECT:**

```sql
SELECT firstName, lastName, gpa FROM Student;
SELECT * FROM Student;
```

**WHERE clause:**

```sql
SELECT firstName, lastName, gpa
FROM Student
WHERE gpa >= 3.5 AND enrollmentYear = 2023;
```

**Comparison operators in WHERE:** `=`, `<>`, `<`, `>`, `<=`, `>=`, `BETWEEN`, `LIKE`, `IN`,
`IS NULL`, `IS NOT NULL`.

**ORDER BY:**

```sql
SELECT firstName, lastName, gpa
FROM Student
ORDER BY gpa DESC, lastName ASC;
```

**DISTINCT:**

```sql
SELECT DISTINCT department FROM Teacher;
```

**LIMIT:**

```sql
SELECT firstName, lastName, gpa
FROM Student
ORDER BY gpa DESC
LIMIT 10;
```

### Aggregate Functions and GROUP BY

**Aggregate functions:** operate on a set of values and return a single value.

| Function | Description           | Example                    |
| -------- | --------------------- | -------------------------- |
| COUNT    | Number of rows        | `COUNT(*)`, `COUNT(email)` |
| SUM      | Sum of numeric values | `SUM(gpa)`                 |
| AVG      | Arithmetic mean       | `AVG(gpa)`                 |
| MIN      | Minimum value         | `MIN(gpa)`                 |
| MAX      | Maximum value         | `MAX(gpa)`                 |

**GROUP BY:** Groups rows that have the same values in specified columns. Aggregate functions are
applied to each group.

```sql
SELECT department, COUNT(*) AS numTeachers, AVG(salary) AS avgSalary
FROM Teacher
GROUP BY department;
```

**HAVING:** Filters groups after GROUP BY. HAVING operates on aggregated values; WHERE operates on
individual rows before grouping.

```sql
SELECT department, COUNT(*) AS numTeachers
FROM Teacher
GROUP BY department
HAVING COUNT(*) >= 3;
```

### Joins

Joins combine rows from two or more tables based on a related column.

**INNER JOIN:** Returns only rows where there is a match in both tables.

```sql
SELECT Student.firstName, Student.lastName, Course.courseName, Enrollment.grade
FROM Student
INNER JOIN Enrollment ON Student.studentID = Enrollment.studentID
INNER JOIN Course ON Enrollment.courseID = Course.courseID;
```

**LEFT JOIN (LEFT OUTER JOIN):** Returns all rows from the left table, and matched rows from the
right table. Unmatched rows from the right table are filled with NULL.

```sql
SELECT Student.firstName, Student.lastName, Course.courseName
FROM Student
LEFT JOIN Enrollment ON Student.studentID = Enrollment.studentID
LEFT JOIN Course ON Enrollment.courseID = Course.courseID;
```

This returns all students, including those who are not enrolled in any course (their courseName will
be NULL).

**RIGHT JOIN (RIGHT OUTER JOIN):** Returns all rows from the right table, and matched rows from the
left table.

**FULL OUTER JOIN:** Returns all rows from both tables. Unmatched rows are filled with NULL.

```sql
SELECT Student.firstName, Course.courseName
FROM Student
FULL OUTER JOIN Enrollment ON Student.studentID = Enrollment.studentID
FULL OUTER JOIN Course ON Enrollment.courseID = Course.courseID;
```

**Self-join:** A table joined with itself. Useful for hierarchical data or finding relationships
within the same entity.

```sql
SELECT e1.firstName AS employee, e2.firstName AS manager
FROM Employee e1
INNER JOIN Employee e2 ON e1.managerID = e2.employeeID;
```

### Comparison of Join Types

| Join Type       | Left Unmatched  | Right Unmatched | Use Case                     |
| --------------- | --------------- | --------------- | ---------------------------- |
| INNER JOIN      | Excluded        | Excluded        | Only matching records needed |
| LEFT JOIN       | Included (NULL) | Excluded        | All records from left table  |
| RIGHT JOIN      | Excluded        | Included (NULL) | All records from right table |
| FULL OUTER JOIN | Included (NULL) | Included (NULL) | All records from both tables |

### Subqueries

A subquery is a query nested inside another query. It can appear in SELECT, FROM, WHERE, and HAVING
clauses.

**Subquery in WHERE (comparison):**

```sql
SELECT firstName, lastName, gpa
FROM Student
WHERE gpa > (SELECT AVG(gpa) FROM Student);
```

**Subquery with IN:**

```sql
SELECT firstName, lastName
FROM Student
WHERE studentID IN (
    SELECT studentID FROM Enrollment WHERE courseID = 101
);
```

**Subquery with EXISTS:**

```sql
SELECT firstName, lastName
FROM Student s
WHERE EXISTS (
    SELECT 1 FROM Enrollment e
    WHERE e.studentID = s.studentID AND e.grade = 'F'
);
```

EXISTS returns TRUE if the subquery returns at least one row. It is efficient because it stops
searching as soon as a match is found.

**Correlated subquery:** The inner query references a column from the outer query. It is evaluated
once for each row of the outer query.

```sql
SELECT firstName, lastName, gpa
FROM Student s
WHERE gpa > (
    SELECT AVG(gpa) FROM Student
    WHERE department = s.department
);
```

This finds students whose GPA exceeds the average GPA of their own department.

### Views

A view is a virtual table based on the result of a SELECT query. It does not store data itself; it
presents data from underlying tables.

```sql
CREATE VIEW HonorRoll AS
SELECT firstName, lastName, gpa
FROM Student
WHERE gpa >= 3.5
ORDER BY gpa DESC;
```

**Updatable views:** A view is updatable if it meets certain conditions: it is based on a single
table, it does not contain DISTINCT, GROUP BY, HAVING, or aggregate functions, and it includes the
primary key of the underlying table.

**Non-updatable views:** Views that involve joins, aggregations, DISTINCT, or GROUP BY are typically
read-only. To modify the data, you must update the underlying tables directly.

**Use cases for views:** Simplifying complex queries (users query the view instead of writing a
complex join each time), security (restrict access to specific columns or rows), data independence
(the underlying table structure can change without affecting the view definition).

## Transaction Management

A transaction is a logical unit of work that consists of one or more SQL operations. Transactions
ensure that the database remains in a consistent state even when failures occur.

### ACID Properties

| Property    | Description                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| Atomicity   | A transaction is all-or-nothing. Either all operations complete successfully, or none do.       |
| Consistency | A transaction transforms the database from one valid state to another valid state.              |
| Isolation   | Concurrent transactions do not interfere with each other. Intermediate states are invisible.    |
| Durability  | Once a transaction is committed, its effects are permanent even in the event of a system crash. |

**Atomicity example:** A bank transfer deducts USD 100 from account A and adds USD 100 to account B.
If the deduction succeeds but the addition fails (e.g., due to a system crash), atomicity ensures
that the deduction is rolled back. Both operations must succeed, or neither does.

**Isolation levels** (from weakest to strongest): Read Uncommitted, Read Committed, Repeatable Read,
Serializable. Higher isolation levels provide stronger consistency guarantees but reduce
concurrency.

### Transaction Control

```sql
BEGIN TRANSACTION;

UPDATE Account SET balance = balance - 100 WHERE accountID = 'A';
UPDATE Account SET balance = balance + 100 WHERE accountID = 'B';

COMMIT;
```

If an error occurs before COMMIT:

```sql
ROLLBACK;
```

## Referential Integrity

Referential integrity ensures that relationships between tables remain consistent. Specifically,
every foreign key value must either be null or match a primary key value in the referenced table.

### Cascading Operations

When a referenced row is deleted or updated, the database can automatically propagate the change to
related rows:

| Action   | ON DELETE CASCADE                | ON DELETE SET NULL                | ON DELETE RESTRICT                      |
| -------- | -------------------------------- | --------------------------------- | --------------------------------------- |
| Effect   | Delete child rows                | Set FK to NULL                    | Block the delete                        |
| Use case | Delete order, remove order items | Employee leaves, clear department | Cannot delete a teacher who has classes |

```sql
CREATE TABLE Enrollment (
    studentID INTEGER NOT NULL,
    courseID INTEGER NOT NULL,
    grade VARCHAR(2),
    PRIMARY KEY (studentID, courseID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
        ON DELETE CASCADE,
    FOREIGN KEY (courseID) REFERENCES Course(courseID)
        ON DELETE RESTRICT
);
```

Deleting a student cascades to delete their enrollment records. Deleting a course that has
enrollments is restricted (blocked).

## Data Dictionaries

A data dictionary (also called a system catalog) is a database about the database. It stores
metadata: definitions of tables, columns, data types, constraints, indexes, relationships, and
users. Every relational database management system (RDBMS) maintains a data dictionary
automatically.

**Contents of a data dictionary:**

- Table names and descriptions
- Column names, data types, sizes, and constraints
- Primary key and foreign key definitions
- Index definitions
- View definitions
- Stored procedure and trigger definitions
- User permissions and access rights
- Integrity constraints

The data dictionary is queried using system-specific SQL commands. For example, in SQLite:
`PRAGMA table_info(Student)`; in PostgreSQL:
`SELECT * FROM information_schema.columns WHERE table_name = 'Student'`.

## Big Data

Big data refers to datasets that are too large, too complex, or generated too rapidly to be
processed by traditional database systems. The IB syllabus identifies four characteristics known as
the four Vs.

### The Four Vs

| Characteristic | Description                                                                | Example                                           |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------------- |
| Volume         | The sheer scale of data, typically terabytes to petabytes                  | Social media posts, sensor data, transaction logs |
| Velocity       | The speed at which data is generated and must be processed                 | Stock market feeds, IoT sensors, clickstream data |
| Variety        | The diversity of data types: structured, semi-structured, and unstructured | Text, images, video, JSON, XML, audio             |
| Veracity       | The quality, accuracy, and trustworthiness of data                         | Noisy sensor readings, contradictory social media |

### Structured vs Semi-Structured vs Unstructured Data

| Type            | Description                                               | Examples                        |
| --------------- | --------------------------------------------------------- | ------------------------------- |
| Structured      | Organized into rows and columns with a fixed schema       | Relational database tables, CSV |
| Semi-structured | Has some organizational properties but not a rigid schema | JSON, XML, HTML, log files      |
| Unstructured    | No predefined structure                                   | Images, video, audio, free text |

Traditional relational databases handle structured data well. Big data systems (like Hadoop, NoSQL
databases, data lakes) are designed to handle all three types at scale.

### Distributed Processing

Big data is typically processed using distributed systems where data is partitioned across multiple
machines and processed in parallel. Key frameworks include:

- **MapReduce:** A programming model that divides work into map (process individual data items) and
  reduce (combine results) phases.
- **Hadoop:** An open-source framework for distributed storage (HDFS) and processing (MapReduce).
- **NoSQL databases:** Non-relational databases (e.g., MongoDB, Cassandra, Redis) that handle
  unstructured data and scale horizontally.

## Common Pitfalls

### Database Design

**Not normalizing sufficiently:** Storing all data in a single table leads to redundancy and
anomalies. A student's name appearing in every enrollment row means that changing the student's name
requires updating every row (update anomaly).

**Over-normalizing:** Excessive normalization (beyond 3NF) can lead to too many tables, requiring
complex joins that degrade query performance. Sometimes deliberate denormalization is used for
performance-critical read-heavy applications.

**Missing foreign key constraints:** Without foreign key constraints, the database cannot enforce
referential integrity. Orphaned records (enrollment records pointing to non-existent students) can
accumulate.

**Poor primary key design:** Using natural keys (e.g., email addresses) as primary keys can cause
problems if the key value changes. Surrogate keys (auto-incremented integers) are generally
preferred for stability.

### SQL

**SELECT \*** in production:\*\* Retrieving all columns when only a few are needed wastes bandwidth
and memory. Always specify the columns you need.

**Missing WHERE clause in UPDATE/DELETE:** `UPDATE Student SET gpa = 4.0` without a WHERE clause
sets every student's GPA to 4.0. Always verify the WHERE clause before executing UPDATE or DELETE.

**Confusing WHERE and HAVING:** WHERE filters rows before grouping; HAVING filters groups after
grouping. Using WHERE with an aggregate function causes a syntax error.

**NULL comparisons:** `WHERE column = NULL` does not work. NULL is not a value; it represents the
absence of a value. Use `WHERE column IS NULL` or `WHERE column IS NOT NULL`.

**Cartesian product:** A join without an ON clause (or with incorrect join conditions) produces a
Cartesian product: every row from one table combined with every row from the other table. For tables
with 1000 rows each, this produces 1,000,000 rows.

**String comparison issues:** SQL string comparisons are typically case-sensitive in many RDBMS.
`WHERE name = 'alice'` will not match 'Alice'. Use functions like `LOWER()` for case-insensitive
comparisons, or set the column collation appropriately.
