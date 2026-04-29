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

### Worked Example: Choosing Between a Flat File and a Database

A small bakery tracks daily sales in a spreadsheet. They have one sheet with columns:
`date, product, quantity, price, total`. They now want to: (1) track customer loyalty points, (2)
generate monthly revenue reports by product category, (3) allow two cashiers to enter data
simultaneously. Should they switch to a relational database?

<details>
<summary>Solution</summary>

**Yes, a relational database is now appropriate.** Here is why each requirement justifies the switch:

1. **Customer loyalty points:** This requires a Customer table linked to sales via a foreign key. A
   flat file would duplicate customer data in every row (redundancy). A relational database stores
   each customer once and references them by customerID.

2. **Monthly revenue reports by category:** This requires joining sales with product categories and
   using aggregate functions (SUM, GROUP BY). SQL handles this efficiently; a flat file would need
   manual filtering and formula work for each report.

3. **Concurrent access:** Two cashiers entering data simultaneously in a spreadsheet causes file
   locking and potential data loss. Relational databases have built-in concurrency control (locking
   and isolation) that handles simultaneous writes safely.

</details>

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

### Worked Example: Creating an ERD for a Hospital

Design an ERD for a hospital system with the following requirements:
- Each Patient has a unique patientID, name, dateOfBirth, and address
- Each Doctor has a unique doctorID, name, and speciality
- A Doctor can treat many Patients; a Patient can be treated by many Doctors
- Each Appointment has a date, time, and diagnosis
- A Patient can have many Appointments; each Appointment belongs to one Patient
- Each Appointment is with one Doctor; a Doctor can have many Appointments

<details>
<summary>Solution</summary>

**Entities:** Patient, Doctor, Appointment

**Attributes:**
- Patient: patientID (PK), name, dateOfBirth, address
- Doctor: doctorID (PK), name, speciality
- Appointment: appointmentID (PK), date, time, diagnosis, patientID (FK), doctorID (FK)

**Relationships:**

| Relationship        | Type | Foreign Key Location               |
| ------------------- | ---- | ---------------------------------- |
| Doctor-Appointment  | 1:M  | Appointment has doctorID           |
| Patient-Appointment | 1:M  | Appointment has patientID          |
| Doctor-Patient      | M:N  | Via Appointment (junction table)   |

The Appointment table serves as both the junction table for the M:N Doctor-Patient relationship and
as an entity in its own right with attributes (date, time, diagnosis). This is a common pattern where
the junction table carries additional data.

</details>

### Worked Example: Identifying Relationships in a Library System

A library has Books and Members. A member can borrow many books over time; a book can be borrowed by
many members over time (but only by one member at a time). Each borrow record has a borrow date and a
return date. Design the ERD.

<details>
<summary>Solution</summary>

**Entities:** Book, Member, Loan

**Relationships:**

| Relationship | Type | Notes                                              |
| ------------ | ---- | -------------------------------------------------- |
| Member-Loan  | 1:M  | A member can have many loans; each loan has one member |
| Book-Loan    | 1:M  | A book can be loaned many times; each loan has one book |
| Member-Book  | M:N  | Via the Loan junction table                        |

The Loan table is the junction table for the M:N Member-Book relationship, and it also stores
attributes (borrowDate, returnDate) that belong to the relationship itself, not to either entity.

</details>

**Common Pitfalls -- ERDs**

- **Placing the foreign key in the wrong table:** The FK always goes in the "many" side of a 1:M
  relationship. If Teacher teaches many Classes, the FK (teacherID) goes in Class, not in Teacher.
- **Forgetting the junction table for M:N:** Many-to-many relationships cannot be directly stored in a
  relational database. You must create a junction table with foreign keys pointing to both entities.
- **Overlooking relationship attributes:** If a relationship has its own attributes (e.g., grade in
  Student-Course, borrowDate in Member-Book), these belong in the junction table, not in either entity.

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

### Worked Example: Identifying Keys

For the following Book table, identify all superkeys, candidate keys, the primary key, and any
alternate keys.

| bookID | ISBN          | title          | author       |
| ------ | ------------- | -------------- | ------------ |
| 1      | 978-013468599 | Clean Code     | Robert Martin|
| 2      | 978-020161622 | PragmaticProg  | Andrew Hunt  |
| 3      | 978-013235088 | Clean Coder    | Robert Martin|

Assume: bookID is unique, ISBN is unique, no two books share the same title and author combination.

<details>
<summary>Solution</summary>

**Superkeys** (all attribute sets that uniquely identify each row):
- `{bookID}`
- `{ISBN}`
- `{bookID, ISBN}`
- `{bookID, title}`
- `{bookID, author}`
- `{ISBN, title}`
- `{bookID, ISBN, title}`
- `{bookID, ISBN, author}`
- `{bookID, ISBN, title, author}`
- `{title, author}`
- `{bookID, title, author}`
- `{ISBN, title, author}`
- ...and more (any set containing a candidate key is a superkey)

**Candidate keys** (minimal superkeys -- no proper subset is also a superkey):
- `{bookID}` -- minimal, uniquely identifies each row
- `{ISBN}` -- minimal, uniquely identifies each row
- `{title, author}` -- minimal (title alone is not unique; author alone is not unique)

**Primary key:** `{bookID}` -- chosen by the designer (surrogate key, simplest)

**Alternate keys:** `{ISBN}` and `{title, author}` -- candidate keys not chosen as primary key

Note: `{bookID, title}` is a superkey but NOT a candidate key because its proper subset `{bookID}`
is also a superkey.

</details>

**Common Pitfalls -- Keys**

- **Confusing superkeys with candidate keys:** Every candidate key is a superkey, but not every
  superkey is a candidate key. A candidate key must be minimal -- no proper subset can also be a
  superkey.
- **Using natural keys as primary keys:** An email address might seem like a good primary key, but if
  a user changes their email, every foreign key reference must be updated. Surrogate keys (auto-
  incremented integers) avoid this problem.
- **Forgetting that composite keys require all attributes:** A composite primary key `{studentID,
  courseID}` means that BOTH attributes together are needed to uniquely identify a row. Neither
  alone is sufficient.

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

### Worked Example: Normalize a Video Rental Table

Normalize the following unnormalized table to 3NF:

| rentalID | customerName | customerEmail      | movieTitle | genre  | dailyRate | rentalDate | returnDate |
| -------- | ------------ | ------------------ | ---------- | ------ | --------- | ---------- | ---------- |
| R001     | Alice        | alice@email.com    | Inception  | Sci-Fi | 3.50      | 2025-03-01 | 2025-03-05 |
| R002     | Alice        | alice@email.com    | Titanic    | Drama  | 2.50      | 2025-03-10 | 2025-03-12 |
| R003     | Bob          | bob@email.com      | Inception  | Sci-Fi | 3.50      | 2025-03-02 | NULL       |

<details>
<summary>Solution</summary>

**Step 1: Identify 1NF violations.** All values are atomic. The primary key candidate is `rentalID`.
The table is already in 1NF.

**Step 2: Identify 2NF violations (partial dependencies).** Since the primary key is `rentalID` (a
single attribute, not composite), there cannot be partial dependencies. The table is already in 2NF.

**Step 3: Identify 3NF violations (transitive dependencies).**

- `rentalID` $\rightarrow$ `customerName` $\rightarrow$ `customerEmail`: customerEmail depends on customerName (transitive)
- `rentalID` $\rightarrow$ `movieTitle` $\rightarrow$ `genre`, `dailyRate`: genre and dailyRate depend on movieTitle (transitive)

**Decompose into 4 tables:**

**Customer** (PK: customerID):

| customerID | customerName | customerEmail    |
| ---------- | ------------ | ---------------- |
| C001       | Alice        | alice@email.com  |
| C002       | Bob          | bob@email.com    |

**Movie** (PK: movieID):

| movieID | movieTitle | genre  | dailyRate |
| ------- | ---------- | ------ | --------- |
| M001    | Inception  | Sci-Fi | 3.50      |
| M002    | Titanic    | Drama  | 2.50      |

**Rental** (PK: rentalID, FK: customerID, movieID):

| rentalID | customerID | movieID | rentalDate | returnDate |
| -------- | ---------- | ------- | ---------- | ---------- |
| R001     | C001       | M001    | 2025-03-01 | 2025-03-05 |
| R002     | C001       | M002    | 2025-03-10 | 2025-03-12 |
| R003     | C002       | M001    | 2025-03-02 | NULL       |

**Benefits of normalization:**
- Update anomaly fixed: changing Alice's email now requires updating only one row in Customer.
- Insertion anomaly fixed: we can add a new movie without it being rented yet.
- Deletion anomaly fixed: deleting a rental does not lose customer or movie information.

</details>

**Common Pitfalls -- Normalization**

- **2NF is irrelevant with a single-column primary key:** Partial dependencies can only exist when
  the primary key is composite. If the PK is a single attribute, every non-key attribute depends on
  the entire PK by definition.
- **Confusing partial and transitive dependencies:** A partial dependency is when a non-key attribute
  depends on only a *part* of a composite primary key. A transitive dependency is when a non-key
  attribute depends on another non-key attribute.
- **Losing data during decomposition:** When splitting tables, every attribute must appear in exactly
  one resulting table. Forgetting to include an attribute means data is lost.

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

```sql
UPDATE Student SET email = 'newemail@school.edu'
WHERE lastName = 'Jones' AND firstName = 'Bob';
```
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

**Comparison operators in WHERE:** `=`, `<>`, `<`, `>`, `$\le$`, `$\ge$`, `BETWEEN`, `LIKE`, `IN`,
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

### Worked Example: Writing SQL Queries

Given these tables:

**Student** (studentID, firstName, lastName, gradeLevel, gpa):

| studentID | firstName | lastName | gradeLevel | gpa |
| --------- | --------- | -------- | ---------- | --- |
| 1         | Alice     | Smith    | 11         | 3.8 |
| 2         | Bob       | Jones    | 10         | 3.2 |
| 3         | Carol     | Williams | 11         | 3.9 |
| 4         | Dave      | Brown    | 10         | 2.8 |
| 5         | Eve       | Davis    | 12         | 3.5 |

Write SQL queries for each task:

1. Find all students in grade 11 with GPA greater than 3.5, ordered by GPA descending.
2. Count the number of students in each grade level.
3. Find the student(s) with the highest GPA.

<details>
<summary>Solution</summary>

**Query 1: Grade 11 students with GPA &gt; 3.5, ordered by GPA descending**

```sql
SELECT firstName, lastName, gpa
FROM Student
WHERE gradeLevel = 11 AND gpa > 3.5
ORDER BY gpa DESC;
```

Result: Carol Williams (3.9), Alice Smith (3.8)

**Query 2: Count of students per grade level**

```sql
SELECT gradeLevel, COUNT(*) AS numStudents
FROM Student
GROUP BY gradeLevel
ORDER BY gradeLevel;
```

Result:

| gradeLevel | numStudents |
| ---------- | ----------- |
| 10         | 2           |
| 11         | 2           |
| 12         | 1           |

**Query 3: Student(s) with the highest GPA**

```sql
SELECT firstName, lastName, gpa
FROM Student
WHERE gpa = (SELECT MAX(gpa) FROM Student);
```

Result: Carol Williams (3.9)

Alternative using subquery comparison:

```sql
SELECT firstName, lastName, gpa
FROM Student
WHERE gpa >= ALL (SELECT gpa FROM Student);
```

</details>

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

### Worked Example: Tracing a JOIN Query

Given these tables:

**Student** (studentID, firstName):

| studentID | firstName |
| --------- | --------- |
| 1         | Alice     |
| 2         | Bob       |
| 3         | Carol     |

**Enrollment** (studentID, courseID, grade):

| studentID | courseID | grade |
| --------- | -------- | ----- |
| 1         | 101      | A     |
| 1         | 102      | B     |
| 2         | 101      | C     |

What is the output of the following query?

```sql
SELECT Student.firstName, Enrollment.courseID, Enrollment.grade
FROM Student
LEFT JOIN Enrollment ON Student.studentID = Enrollment.studentID
ORDER BY Student.firstName, Enrollment.courseID;
```

<details>
<summary>Solution</summary>

A LEFT JOIN returns all rows from Student, matched with Enrollment where possible. Carol (studentID 3)
has no enrollments, so her columns from Enrollment are NULL.

**Step-by-step matching:**

| Student.firstName | Enrollment.courseID | Enrollment.grade | Match?       |
| ----------------- | ------------------- | ---------------- | ------------ |
| Alice             | 101                 | A                | studentID = 1|
| Alice             | 102                 | B                | studentID = 1|
| Bob               | 101                 | C                | studentID = 2|
| Carol             | NULL                | NULL             | No match     |

**Result:**

| firstName | courseID | grade |
| --------- | -------- | ----- |
| Alice     | 101      | A     |
| Alice     | 102      | B     |
| Bob       | 101      | C     |
| Carol     | NULL     | NULL  |

Carol appears in the result even though she has no enrollments -- this is the key difference from an
INNER JOIN, which would exclude her.

</details>

### Worked Example: Aggregate Query with HAVING

Given the Enrollment table:

| studentID | courseID | grade |
| --------- | -------- | ----- |
| 1         | 101      | A     |
| 1         | 102      | B     |
| 2         | 101      | C     |
| 3         | 103      | A     |
| 3         | 104      | B     |
| 3         | 105      | A     |

Write a query to find students enrolled in more than 1 course, showing the studentID and the count
of courses.

<details>
<summary>Solution</summary>

```sql
SELECT studentID, COUNT(*) AS numCourses
FROM Enrollment
GROUP BY studentID
HAVING COUNT(*) > 1;
```

**Result:**

| studentID | numCourses |
| --------- | ---------- |
| 1         | 2          |
| 3         | 3          |

Student 2 is excluded because they are enrolled in only 1 course. HAVING filters after grouping;
WHERE cannot be used here because `COUNT(*)` is an aggregate function.

</details>

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

### Worked Example: Subquery vs JOIN

Find the names of all students who have received a grade of 'A' in at least one course. Write this
using (a) a subquery with IN, and (b) a JOIN.

Given:

**Student**: studentID 1 (Alice), 2 (Bob), 3 (Carol)

**Enrollment**: (1, 101, A), (2, 101, B), (3, 102, A)

<details>
<summary>Solution</summary>

**(a) Subquery with IN:**

```sql
SELECT firstName, lastName
FROM Student
WHERE studentID IN (
    SELECT studentID FROM Enrollment WHERE grade = 'A'
);
```

The subquery returns `{1, 3}`. The outer query finds Alice and Carol.

**(b) INNER JOIN with DISTINCT:**

```sql
SELECT DISTINCT Student.firstName, Student.lastName
FROM Student
INNER JOIN Enrollment ON Student.studentID = Enrollment.studentID
WHERE Enrollment.grade = 'A';
```

DISTINCT is needed because a student could have multiple A grades, which would produce duplicate
rows without it.

Both approaches return: Alice, Carol. The JOIN approach is typically more efficient for large
datasets because it avoids executing the subquery separately.

</details>

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

### Worked Example: Transaction with ROLLBACK

A bank transfer deducts $100 from account A and adds $100 to account B. Trace what happens if the
second UPDATE fails.

```sql
BEGIN TRANSACTION;

UPDATE Account SET balance = balance - 100 WHERE accountID = 'A';
-- balance of A goes from 500 to 400

UPDATE Account SET balance = balance + 100 WHERE accountID = 'B';
-- ERROR: account B does not exist!

-- What happens now?
```

<details>
<summary>Solution</summary>

Because the second UPDATE fails, the transaction must be rolled back:

```sql
ROLLBACK;
```

After ROLLBACK:

| accountID | balance | State            |
| --------- | ------- | ---------------- |
| A         | 500     | Restored to 500  |
| B         | --      | (never existed)  |

The ACID property **Atomicity** guarantees that the database returns to its original state. Without
ROLLBACK, account A would have lost $100 with no corresponding gain anywhere -- the money would
disappear.

If both statements had succeeded:

```sql
COMMIT;
```

The changes would be permanent (**Durability**).

</details>

**Common Pitfalls -- Transactions**

- **Forgetting BEGIN TRANSACTION:** Without explicitly starting a transaction, each SQL statement
  auto-commits individually. A multi-step operation like a bank transfer would not be atomic.
- **Not handling errors:** If an error occurs mid-transaction and ROLLBACK is not called, the
  transaction remains open. Some databases keep locks held, blocking other users indefinitely.
- **Long-running transactions:** Transactions that stay open for a long time hold locks and reduce
  concurrency. Keep transactions as short as possible.

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

### Worked Example: Cascading Deletes

Given the following tables with the Enrollment table defined as above:

**Student**: studentID 1 (Alice), 2 (Bob)
**Course**: courseID 101 (Math), 102 (Physics)
**Enrollment**: (1, 101), (1, 102), (2, 101)

What happens when you execute `DELETE FROM Student WHERE studentID = 1`? What happens if you then
try `DELETE FROM Course WHERE courseID = 101`?

<details>
<summary>Solution</summary>

**`DELETE FROM Student WHERE studentID = 1`:** Due to `ON DELETE CASCADE` on the studentID foreign
key, deleting Alice also deletes all her enrollment records. After this operation:

**Student**: studentID 2 (Bob)
**Course**: courseID 101 (Math), 102 (Physics)
**Enrollment**: (2, 101) -- Alice's two enrollment rows are deleted

**`DELETE FROM Course WHERE courseID = 101`:** This is **blocked** due to `ON DELETE RESTRICT` on
the courseID foreign key. Bob still has an enrollment in course 101, so the database refuses to
delete the course. The DELETE statement fails with a referential integrity error.

To delete the course, you must first delete (or reassign) all enrollments that reference it:

```sql
DELETE FROM Enrollment WHERE courseID = 101;
DELETE FROM Course WHERE courseID = 101;
```

</details>

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

### Worked Example: Creating a Data Dictionary Entry

For the following CREATE TABLE statement, produce a data dictionary entry for each column:

```sql
CREATE TABLE Employee (
    empID INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(200) UNIQUE,
    salary DECIMAL(10,2) CHECK (salary > 0),
    deptID INTEGER,
    FOREIGN KEY (deptID) REFERENCES Department(deptID)
);
```

<details>
<summary>Solution</summary>

| Column Name | Data Type       | Size | Constraints              | FK Reference        |
| ----------- | --------------- | ---- | ------------------------ | ------------------- |
| empID       | INTEGER         | --   | PRIMARY KEY              | --                  |
| name        | VARCHAR         | 100  | NOT NULL                 | --                  |
| email       | VARCHAR         | 200  | UNIQUE                   | --                  |
| salary      | DECIMAL         | 10,2 | CHECK (salary &gt; 0)    | --                  |
| deptID      | INTEGER         | --   | --                       | Department(deptID) |

</details>

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

## Problem Set

### Problem 1: ERD Design for a Music Library

A music library has Artists and Albums. An artist can produce many albums; each album has exactly
one artist. An album has many Tracks; each track belongs to one album. Identify all entities,
relationships with cardinalities, and where foreign keys should be placed.

<details>
<summary>Solution</summary>

**Entities:** Artist, Album, Track

**Relationships:**

| Relationship   | Cardinality | Foreign Key Location           |
| -------------- | ----------- | ------------------------------ |
| Artist-Album   | 1:M         | Album table has artistID (FK)  |
| Album-Track    | 1:M         | Track table has albumID (FK)   |

**Attributes:**
- Artist: artistID (PK), name, genre
- Album: albumID (PK), title, releaseYear, artistID (FK)
- Track: trackID (PK), title, duration, albumID (FK)

</details>

*If you get this wrong, revise: [Entity-Relationship Diagrams](#entity-relationship-diagrams-erds)*

---

### Problem 2: Partial vs Transitive Dependencies

Given a table with columns `{orderID, productID, productName, customerID, customerName, quantity,
unitPrice}`, and the primary key is ```{orderID, productID}```:
- Is `productName` a partial dependency? If so, on what?
- Is `customerName` a partial dependency? If so, on what?

<details>
<summary>Solution</summary>

- `productName` depends only on `productID` (a proper subset of the PK `{orderID, productID}`). Yes,
  `productName` is a partial dependency.
- `customerName` depends only on `customerID`. But `customerID` is NOT part of the primary key, so
  this is not a partial dependency -- it is a **transitive dependency**: `orderID` $\rightarrow$
  `customerID` $\rightarrow$ `customerName`.

Partial dependencies are specifically about non-key attributes depending on a **proper subset of the
primary key**.

</details>

*If you get this wrong, revise: [Functional Dependencies](#functional-dependencies) and [Second Normal Form](#second-normal-form-2nf)*

---

### Problem 3: Full Normalization to 3NF

Normalize the following table to 3NF. Show each step.

| empID | empName | deptID | deptName  | projID | projName    | hoursWorked |
| ----- | ------- | ------ | --------- | ------ | ----------- | ----------- |
| E01   | Alice   | D01    | Marketing | P01    | Campaign    | 20          |
| E01   | Alice   | D01    | Marketing | P02    | Research    | 15          |
| E02   | Bob     | D02    | Sales     | P01    | Campaign    | 30          |

<details>
<summary>Solution</summary>

**1NF:** Already atomic values. PK: `{empID, projID}`.

**2NF:** Partial dependencies exist:
- `empName` depends only on `empID`
- `deptID` and `deptName` depend only on `empID`
- `projName` depends only on `projID`

Decompose:

**Employee** (PK: empID):

| empID | empName | deptID |
| ----- | ------- | ------ |
| E01   | Alice   | D01    |
| E02   | Bob     | D02    |

**Project** (PK: projID):

| projID | projName |
| ------ | -------- |
| P01    | Campaign |
| P02    | Research |

**Assignment** (PK: `{empID, projID}`, FK: empID, projID):

| empID | projID | hoursWorked |
| ----- | ------ | ----------- |
| E01   | P01    | 20          |
| E01   | P02    | 15          |
| E02   | P01    | 30          |

**3NF:** Check Employee: `empID` $\rightarrow$ `deptID` $\rightarrow$ `deptName` is a transitive
dependency. Decompose:

**Employee** (PK: empID, FK: deptID):

| empID | empName | deptID |
| ----- | ------- | ------ |
| E01   | Alice   | D01    |
| E02   | Bob     | D02    |

**Department** (PK: deptID):

| deptID | deptName  |
| ------ | --------- |
| D01    | Marketing |
| D02    | Sales     |

Final tables: Employee, Department, Project, Assignment -- all in 3NF.

</details>

*If you get this wrong, revise: [Normalization](#normalization)*

---

### Problem 4: CREATE TABLE with Constraints

Write a CREATE TABLE statement for the Enrollment table with appropriate constraints.

<details>
<summary>Solution</summary>

```sql
CREATE TABLE Enrollment (
    studentID INTEGER NOT NULL,
    courseID INTEGER NOT NULL,
    grade VARCHAR(2) CHECK (grade IN ('A', 'B', 'C', 'D', 'F')),
    enrollmentDate DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (studentID, courseID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID)
        ON DELETE CASCADE,
    FOREIGN KEY (courseID) REFERENCES Course(courseID)
        ON DELETE RESTRICT
);
```

Key decisions:
- Composite primary key `{studentID, courseID}` -- a student can enroll in a course only once
- CHECK constraint on grade to limit values to valid letter grades
- ON DELETE CASCADE for student -- deleting a student removes their enrollments
- ON DELETE RESTRICT for course -- cannot delete a course that has enrollments

</details>

*If you get this wrong, revise: [DDL](#data-definition-language-ddl) and [Cascading Operations](#cascading-operations)*

---

### Problem 5: Top N Students Query

Given the Student table from the worked example above, write a query that returns the names and GPAs
of the top 3 students overall.

<details>
<summary>Solution</summary>

```sql
SELECT firstName, lastName, gpa
FROM Student
ORDER BY gpa DESC
LIMIT 3;
```

Result:

| firstName | lastName | gpa |
| --------- | -------- | --- |
| Carol     | Williams | 3.9 |
| Alice     | Smith    | 3.8 |
| Eve       | Davis    | 3.5 |

</details>

*If you get this wrong, revise: [SELECT Queries](#queries-select)*

---

### Problem 6: WHERE vs HAVING

What is the difference between WHERE and HAVING? Give an example where using WHERE with an aggregate
function would cause an error.

<details>
<summary>Solution</summary>

**WHERE** filters individual rows **before** GROUP BY. It cannot reference aggregate functions.

**HAVING** filters groups **after** GROUP BY. It can reference aggregate functions.

Incorrect (causes syntax error):

```sql
SELECT gradeLevel, COUNT(*) AS numStudents
FROM Student
WHERE COUNT(*) > 1
GROUP BY gradeLevel;
```

Correct:

```sql
SELECT gradeLevel, COUNT(*) AS numStudents
FROM Student
GROUP BY gradeLevel
HAVING COUNT(*) > 1;
```

The WHERE clause is evaluated before rows are grouped, so aggregate functions like `COUNT(*)` are not
yet defined. HAVING is evaluated after grouping, when aggregates are available.

</details>

*If you get this wrong, revise: [GROUP BY and HAVING](#aggregate-functions-and-group-by)*

---

### Problem 7: Finding Unenrolled Students

Write a query to find all students who are NOT enrolled in any course.

<details>
<summary>Solution</summary>

```sql
SELECT firstName, lastName
FROM Student
WHERE studentID NOT IN (
    SELECT studentID FROM Enrollment
);
```

Alternative using LEFT JOIN:

```sql
SELECT Student.firstName, Student.lastName
FROM Student
LEFT JOIN Enrollment ON Student.studentID = Enrollment.studentID
WHERE Enrollment.studentID IS NULL;
```

Alternative using NOT EXISTS:

```sql
SELECT firstName, lastName
FROM Student s
WHERE NOT EXISTS (
    SELECT 1 FROM Enrollment e
    WHERE e.studentID = s.studentID
);
```

All three approaches return the same result. NOT EXISTS is typically the most efficient for large
datasets because it stops searching as soon as a match is found.

</details>

*If you get this wrong, revise: [Subqueries](#subqueries) and [Joins](#joins)*

---

### Problem 8: Dangerous UPDATE Statement

What does the following SQL statement do? Is it dangerous?

```sql
UPDATE Student SET gpa = 4.0;
```

<details>
<summary>Solution</summary>

This sets the GPA of **every** student in the table to 4.0. It is extremely dangerous because there is
no WHERE clause to restrict which rows are updated.

The safe version:

```sql
UPDATE Student SET gpa = 4.0 WHERE studentID = 3;
```

Always double-check UPDATE and DELETE statements for a WHERE clause before executing them. In
production systems, you can wrap destructive operations in a transaction and use SELECT first to
verify which rows will be affected.

</details>

*If you get this wrong, revise: [DML](#data-manipulation-language-dml) and [Common Pitfalls - SQL](#common-pitfalls)*

---

### Problem 9: NULL Comparison

Explain why `WHERE column = NULL` does not work and provide the correct syntax.

<details>
<summary>Solution</summary>

NULL represents the **absence of a value**, not a value itself. The expression `column = NULL`
evaluates to NULL (not TRUE or FALSE), so no rows are ever matched. NULL is not equal to anything,
not even itself: `NULL = NULL` is NULL.

Correct syntax:

```sql
-- Find rows where column IS NULL
SELECT * FROM Student WHERE email IS NULL;

-- Find rows where column has a value
SELECT * FROM Student WHERE email IS NOT NULL;
```

</details>

*If you get this wrong, revise: [Common Pitfalls - SQL](#common-pitfalls)*

---

### Problem 10: ACID Properties

Explain each of the four ACID properties with a bank transfer example.

<details>
<summary>Solution</summary>

**Atomicity:** Transferring $100 from A to B involves two operations (debit A, credit B). Either both
succeed or neither does. If the system crashes after debiting A, the transaction is rolled back and
A's balance is restored.

**Consistency:** After the transfer, the total balance across all accounts must remain the same. The
transfer moves money but does not create or destroy it. The database transitions from one valid
state to another.

**Isolation:** If Alice transfers $100 to Bob at the same time that Carol checks Bob's balance, Carol
should see either the balance before the transfer or after -- never a partially completed state
where A has been debited but B has not yet been credited.

**Durability:** Once the COMMIT succeeds, the transfer is permanent. Even if the power fails
immediately after, the updated balances will be recovered from the transaction log when the system
restarts.

</details>

*If you get this wrong, revise: [ACID Properties](#acid-properties)*

---

### Problem 11: Cartesian Product from Missing ON Clause

What is the result of the following join without an ON clause?

```sql
SELECT Student.firstName, Course.courseName
FROM Student
CROSS JOIN Course;
```

If Student has 5 rows and Course has 3 rows, how many rows are in the result?

<details>
<summary>Solution</summary>

A CROSS JOIN (cartesian product) combines every row from Student with every row from Course. With 5
students and 3 courses, the result has $5 \times 3 = 15$ rows.

Each student appears paired with every course, regardless of whether they are enrolled. This is rarely
useful in practice and usually indicates a missing ON clause. A missing ON clause in an INNER JOIN or
LEFT JOIN is an error that produces an unintended cartesian product.

</details>

*If you get this wrong, revise: [Joins](#joins)*

---

### Problem 12: Classifying Data Types

Classify each type of data as structured, semi-structured, or unstructured:
1. A CSV file of employee salaries
2. A collection of JPEG photographs
3. A JSON file from a weather API
4. A patient's free-text medical notes
5. An XML configuration file
6. A relational database table

<details>
<summary>Solution</summary>

1. **Structured** -- CSV has a fixed schema (columns) and consistent data types.
2. **Unstructured** -- JPEG images have no tabular or hierarchical structure.
3. **Semi-structured** -- JSON has organizational properties (key-value pairs) but not a rigid schema.
4. **Unstructured** -- Free text has no predefined structure or schema.
5. **Semi-structured** -- XML has tags providing structure but the schema can vary.
6. **Structured** -- Relational tables have fixed columns, data types, and constraints.

</details>

*If you get this wrong, revise: [Big Data](#big-data)*

---

### Problem 13: Correlated Subquery

A company has an Employee table with columns `empID`, `name`, `salary`, and `departmentID`. Write a
query that finds employees who earn more than the average salary in their own department. Explain why
this requires a correlated subquery.

<details>
<summary>Solution</summary>

```sql
SELECT e1.name, e1.salary, e1.departmentID
FROM Employee e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM Employee e2
    WHERE e2.departmentID = e1.departmentID
);
```

This requires a **correlated subquery** because the average must be computed **per department**, and the
department changes for each row in the outer query. The inner query references `e1.departmentID` from
the outer query, so it is re-evaluated for each employee.

This cannot be written as a simple subquery because a non-correlated subquery returns a single value
(the overall average), not the department-specific average.

</details>

*If you get this wrong, revise: [Subqueries](#subqueries)*

---

### Problem 14: View Creation and Use Cases

A school wants to create a view that shows only the names and grades of students in course 101. Write
the CREATE VIEW statement and explain one advantage and one limitation of this view.

<details>
<summary>Solution</summary>

```sql
CREATE VIEW Course101Students AS
SELECT Student.firstName, Student.lastName, Enrollment.grade
FROM Student
INNER JOIN Enrollment ON Student.studentID = Enrollment.studentID
WHERE Enrollment.courseID = 101;
```

**Advantage:** Security -- teachers of other courses cannot see the full Student table. They only see
the subset of data relevant to course 101 through this view.

**Limitation:** This view is **not updatable** because it involves a JOIN. You cannot use INSERT,
UPDATE, or DELETE through this view. To modify student grades, you must update the Enrollment table
directly.

</details>

*If you get this wrong, revise: [Views](#views)*

---

### Problem 15: IB Exam-Style Comprehensive Question

A school uses the following database schema:

```sql
CREATE TABLE Teacher (
    teacherID INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(50)
);

CREATE TABLE Club (
    clubID INTEGER PRIMARY KEY,
    clubName VARCHAR(100) NOT NULL,
    teacherID INTEGER,
    FOREIGN KEY (teacherID) REFERENCES Teacher(teacherID) ON DELETE SET NULL
);

CREATE TABLE Student (
    studentID INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gradeLevel INTEGER
);

CREATE TABLE Membership (
    studentID INTEGER NOT NULL,
    clubID INTEGER NOT NULL,
    joinDate DATE,
    PRIMARY KEY (studentID, clubID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID) ON DELETE CASCADE,
    FOREIGN KEY (clubID) REFERENCES Club(clubID) ON DELETE CASCADE
);
```

Answer all parts:

(a) Explain the effect of `ON DELETE SET NULL` on the Club table's teacherID foreign key.
(b) Write a query to find the names of all students who are in at least 2 clubs.
(c) Write a query to find the name of each club and the number of members it has, showing only clubs
    with more than 5 members.
(d) If teacherID 3 is deleted from the Teacher table, what happens to any clubs where teacherID = 3?

<details>
<summary>Solution</summary>

**(a)** If a teacher is deleted, the `teacherID` column in any Club that referenced that teacher is set
to NULL. The club itself is NOT deleted; it simply no longer has a supervising teacher. This allows a
club to continue existing after its teacher leaves.

**(b)**

```sql
SELECT Student.name
FROM Student
INNER JOIN Membership ON Student.studentID = Membership.studentID
GROUP BY Student.studentID, Student.name
HAVING COUNT(*) >= 2;
```

**(c)**

```sql
SELECT Club.clubName, COUNT(*) AS numMembers
FROM Club
INNER JOIN Membership ON Club.clubID = Membership.clubID
GROUP BY Club.clubID, Club.clubName
HAVING COUNT(*) > 5;
```

**(d)** The `teacherID` column in any Club row where `teacherID = 3` is set to NULL. The club record
is preserved; only the reference to the teacher is cleared. If `ON DELETE CASCADE` had been used
instead, the clubs themselves would have been deleted.

</details>

*If you get this wrong, revise: [Cascading Operations](#cascading-operations), [Joins](#joins), and [Aggregate Functions](#aggregate-functions-and-group-by)*
