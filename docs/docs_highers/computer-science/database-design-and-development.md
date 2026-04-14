---
title: Database Design and Development
date: 2026-04-14
tags:
  - Computer Science
  - Highers
categories:
  - Computer Science
slug: database-design-and-development
---

# Database Design and Development

## Higher Database Design

### Flat Files vs. Relational Databases

**Flat files:**

- Single table, simple structure
- Suitable for small amounts of data
- Problems: data redundancy, data inconsistency, data dependency, difficulty of sharing, security
  issues

**Relational databases:**

- Multiple related tables
- Minimise redundancy through normalisation
- Support concurrent access, security, integrity
- Query using SQL (Structured Query Language)

### Relational Database Concepts

**Entity:** A thing of interest (e.g., Student, Course).

**Attribute:** A property of an entity (e.g., student name, course code).

**Relation (Table):** A set of tuples (rows) with the same attributes (columns).

**Tuple (Record):** A single row in a table.

**Domain:** The set of allowable values for an attribute.

**Primary Key:** A column (or set of columns) that uniquely identifies each row in a table. Must be
unique and not null.

**Foreign Key:** A column in one table that references the primary key of another table. Establishes
relationships.

**Composite key:** A primary key made up of two or more columns.

**Candidate key:** Any column or set of columns that could serve as a primary key.

### Entity-Relationship Modelling

**Step 1: Identify entities and attributes**

For a school system:

- Student (StudentID, Name, DateOfBirth, Address)
- Course (CourseCode, CourseName, Credits)
- Enrolment (StudentID, CourseCode, Grade)

**Step 2: Identify relationships**

- A Student can enrol in many Courses
- A Course can have many Students
- This is a many-to-many (M:N) relationship, which requires a junction table (Enrolment)

**Step 3: Draw the ER diagram**

```
Student (1) ----< Enrolment >---- (1) Course
```

### Normalisation

Normalisation is the process of organising data to minimise redundancy and dependency.

**Unnormalised Form (UNF):** Raw data with repeating groups.

**First Normal Form (1NF):** No repeating groups. Every cell contains a single value. Each row is
unique (has a primary key).

**Second Normal Form (2NF):** In 1NF and no partial dependencies (every non-key attribute depends on
the entire primary key, not just part of it). Only applies to tables with composite keys.

**Third Normal Form (3NF):** In 2NF and no transitive dependencies (no non-key attribute depends on
another non-key attribute).

**Example of normalisation:**

**UNF:**

| OrderID | CustomerName | CustomerCity | ProductCode | ProductName | Quantity |
| ------- | ------------ | ------------ | ----------- | ----------- | -------- |
| 001     | J. Smith     | Edinburgh    | P01         | Widget      | 5        |
| 001     | J. Smith     | Edinburgh    | P02         | Gadget      | 3        |
| 002     | A. Jones     | Glasgow      | P01         | Widget      | 2        |

**1NF (remove repeating groups):** Already in 1NF (each cell has a single value).

**2NF (remove partial dependencies):**

The composite key is (OrderID, ProductCode). CustomerName and CustomerCity depend only on OrderID
(partial dependency). ProductName depends only on ProductCode (partial dependency).

Split into:

- Order (OrderID, CustomerName, CustomerCity)
- Product (ProductCode, ProductName)
- OrderLine (OrderID, ProductCode, Quantity)

**3NF (remove transitive dependencies):**

In Order, CustomerCity depends on CustomerName (transitive dependency). Split into:

- Customer (CustomerID, CustomerName, CustomerCity)
- Order (OrderID, CustomerID)
- Product (ProductCode, ProductName)
- OrderLine (OrderID, ProductCode, Quantity)

### Referential Integrity

Referential integrity ensures that relationships between tables remain consistent.

- A foreign key value must either be null or match a value in the referenced primary key
- Cannot delete a record that is referenced by a foreign key in another table (without cascading)

### Data Types in SQL

| SQL Data Type | Description            | Example          |
| ------------- | ---------------------- | ---------------- |
| INT / INTEGER | Whole number           | 42               |
| REAL / FLOAT  | Decimal number         | 3.14             |
| DECIMAL(p, s) | Fixed-point decimal    | DECIMAL(10, 2)   |
| CHAR(n)       | Fixed-length string    | CHAR(10)         |
| VARCHAR(n)    | Variable-length string | VARCHAR(255)     |
| DATE          | Date (YYYY-MM-DD)      | '2026-04-14'     |
| BOOLEAN       | True/False             | TRUE             |
| TEXT          | Long text              | 'Description...' |

---

## SQL (Structured Query Language)

### Data Definition Language (DDL)

**Creating tables:**

```sql
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    House VARCHAR(20)
);

CREATE TABLE Course (
    CourseCode VARCHAR(10) PRIMARY KEY,
    CourseName VARCHAR(100) NOT NULL,
    Teacher VARCHAR(50),
    Credits INT
);

CREATE TABLE Enrolment (
    StudentID INT,
    CourseCode VARCHAR(10),
    Grade CHAR(2),
    PRIMARY KEY (StudentID, CourseCode),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseCode) REFERENCES Course(CourseCode)
);
```

**Modifying tables:**

```sql
ALTER TABLE Student ADD COLUMN Email VARCHAR(100);

ALTER TABLE Student DROP COLUMN House;
```

### Data Manipulation Language (DML)

**INSERT:**

```sql
INSERT INTO Student (StudentID, FirstName, LastName, DateOfBirth, House)
VALUES (1, 'Alice', 'MacDonald', '2005-03-15', 'Gryffindor');

INSERT INTO Student (StudentID, FirstName, LastName, DateOfBirth)
VALUES (2, 'Bob', 'Campbell', '2004-11-22');
```

**UPDATE:**

```sql
UPDATE Student
SET House = 'Slytherin'
WHERE StudentID = 2;
```

**DELETE:**

```sql
DELETE FROM Enrolment
WHERE Grade IS NULL;
```

### Queries (SELECT)

**Basic SELECT:**

```sql
SELECT FirstName, LastName, House
FROM Student
WHERE House = 'Gryffindor';
```

**Wildcards and pattern matching:**

```sql
SELECT * FROM Student
WHERE LastName LIKE 'Mc%';
```

**ORDER BY:**

```sql
SELECT FirstName, LastName, DateOfBirth
FROM Student
ORDER BY DateOfBirth DESC;
```

**Aggregate functions:**

```sql
SELECT COUNT(*) AS TotalStudents
FROM Student;

SELECT House, COUNT(*) AS StudentCount
FROM Student
GROUP BY House
HAVING COUNT(*) > 5;
```

**JOIN:**

```sql
SELECT Student.FirstName, Student.LastName, Course.CourseName, Enrolment.Grade
FROM Student
INNER JOIN Enrolment ON Student.StudentID = Enrolment.StudentID
INNER JOIN Course ON Enrolment.CourseCode = Course.CourseCode
WHERE Enrolment.Grade IS NOT NULL
ORDER BY Student.LastName;
```

**LEFT JOIN:** Returns all records from the left table and matching records from the right table.

**Subqueries:**

```sql
SELECT FirstName, LastName
FROM Student
WHERE StudentID IN (
    SELECT StudentID FROM Enrolment
    WHERE CourseCode = 'MATH101'
);
```

### Data Validation

**NOT NULL:** Column cannot be empty.

**UNIQUE:** All values in the column must be different.

**CHECK:** Values must satisfy a condition.

```sql
CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) CHECK (Price > 0),
    StockQuantity INT CHECK (StockQuantity >= 0)
);
```

---

## Advanced Higher Database Concepts

### Transaction Management (ACID)

**Atomicity:** A transaction is all-or-nothing. If any part fails, the entire transaction is rolled
back.

**Consistency:** The database moves from one valid state to another.

**Isolation:** Concurrent transactions do not interfere with each other.

**Durability:** Once committed, changes are permanent even if the system crashes.

```sql
BEGIN TRANSACTION;

UPDATE Account SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Account SET Balance = Balance + 100 WHERE AccountID = 2;

COMMIT;
```

If any statement fails: `ROLLBACK;`

### Indexing

An index is a data structure that improves the speed of data retrieval.

```sql
CREATE INDEX idx_student_name ON Student(LastName, FirstName);
```

**Advantages:** Faster SELECT queries.

**Disadvantages:** Slower INSERT, UPDATE, DELETE; uses additional storage.

### Views

A view is a virtual table based on a SELECT query.

```sql
CREATE VIEW TopStudents AS
SELECT Student.FirstName, Student.LastName, AVG(Enrolment.Grade) AS AverageGrade
FROM Student
JOIN Enrolment ON Student.StudentID = Enrolment.StudentID
GROUP BY Student.StudentID, Student.FirstName, Student.LastName
HAVING AVG(Enrolment.Grade) >= 70;
```

---

## Common Pitfalls

1. **Forgetting primary keys:** Every table must have a primary key to uniquely identify each
   record.

2. **Data redundancy:** Not normalising leads to update anomalies, insertion anomalies, and deletion
   anomalies.

3. **NULL in aggregates:** COUNT(\*) counts all rows including NULL; COUNT(column) counts non-NULL
   values.

4. **INNER JOIN vs. LEFT JOIN:** INNER JOIN returns only matching rows; LEFT JOIN returns all rows
   from the left table.

5. **String quotes:** SQL uses single quotes for string literals, not double quotes.

---

## Practice Questions

1. Normalise the following data to 3NF:

| InvoiceNo | CustomerName | CustomerAddress | ProductCode | ProductName | Quantity | Price |
| --------- | ------------ | --------------- | ----------- | ----------- | -------- | ----- |
| 1001      | J. Brown     | 5 High St       | P01         | Pen         | 10       | 2.00  |
| 1001      | J. Brown     | 5 High St       | P02         | Pencil      | 20       | 1.50  |
| 1002      | M. Wilson    | 12 Main Rd      | P01         | Pen         | 5        | 2.00  |

2. Write SQL to create the tables for your normalised schema from question 1, including primary and
   foreign keys.

3. Write SQL queries to: (a) Find all customers who live on 'High St' (b) Calculate the total value
   of each invoice (c) Find the most expensive product

4. Explain the difference between 2NF and 3NF with an example.

5. Write SQL to create a view showing all products that are low in stock (quantity less than 10).

6. Explain the ACID properties of transactions with an example.

7. Write SQL to add a new column 'Category' to the Product table and update all existing records.

8. Explain when you would use a LEFT JOIN instead of an INNER JOIN.
