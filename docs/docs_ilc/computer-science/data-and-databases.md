---
title: Data and Databases
date: 2026-04-14
tags:
  - Computer Science
  - ILC
categories:
  - Computer Science
slug: data-and-databases
---

# Data and Databases

This topic covers data representation, data types, database concepts, SQL, normalisation, and data
integrity.

## Data Representation

### Text Encoding (OL/HL)

**ASCII:** 7-bit code, 128 characters (uppercase, lowercase, digits, symbols).

**Unicode:** supports all world languages. UTF-8 is variable-length (1--4 bytes), backward
compatible with ASCII.

**Example (OL):** The letter 'A' in ASCII is $65_{10} = 01000001_2$.

### Images (OL/HL)

**Bitmap images:** composed of pixels. Each pixel has a colour value.

- **Colour depth:** number of bits per pixel.
  - 1 bit: black and white (2 colours).
  - 8 bits: 256 colours.
  - 24 bits: true colour ($16,777,216$ colours).

**Image file size (bits):** width $\times$ height $\times$ colour depth.

**Example (OL):** A $800 \times 600$ image with 24-bit colour depth.

$$
\text{Size} = 800 \times 600 \times 24 = 11,520,000\text{ bits} = 1,440,000\text{ bytes} \approx 1.37\text{ MB}
$$

**Vector images:** composed of mathematical descriptions of shapes. Scale without losing quality.
Smaller file sizes for simple images.

### Sound (HL)

Sound is sampled (analog to digital conversion).

- **Sample rate:** number of samples per second (e.g., 44,100 Hz for CD quality).
- **Sample resolution (bit depth):** number of bits per sample (e.g., 16-bit).
- **Channels:** mono (1) or stereo (2).

**File size (bits):** sample rate $\times$ sample resolution $\times$ duration $\times$ channels.

**Example (HL):** 3 minutes of stereo audio at 44,100 Hz, 16-bit.

$$
\text{Size} = 44100 \times 16 \times 180 \times 2 = 254,016,000\text{ bits} \approx 30.3\text{ MB}
$$

### Compression (OL/HL)

**Lossless compression:** no data is lost; original can be reconstructed exactly (e.g., PNG, FLAC,
ZIP).

**Lossy compression:** some data is discarded; original cannot be reconstructed (e.g., JPEG, MP3,
MPEG).

Run-Length Encoding (RLE) is a simple lossless method: replace repeated values with the value and
count.

**Example (OL):** AAABBCCCC becomes 3A2B4C.

## Data Types (OL/HL)

| Type       | Description            | Example      |
| ---------- | ---------------------- | ------------ |
| Integer    | Whole numbers          | 42, -7       |
| Real/Float | Decimal numbers        | 3.14, -0.001 |
| Character  | Single character       | 'A', 'z'     |
| String     | Sequence of characters | "Hello"      |
| Boolean    | True or false          | true, false  |
| Date       | Calendar date          | 2026-04-14   |

## Database Concepts (OL/HL)

### Flat File vs Relational Database

**Flat file:** data stored in a single table. Problems: data redundancy, inconsistency, difficulty
of updating.

**Relational database:** data stored in multiple related tables. Advantages: reduced redundancy,
data integrity, easier maintenance.

### Key Terms

| Term        | Definition                                                    |
| ----------- | ------------------------------------------------------------- |
| Entity      | A thing/object about which data is stored (e.g., Student)     |
| Attribute   | A property of an entity (e.g., Name, Date of Birth)           |
| Primary key | Uniquely identifies each record in a table                    |
| Foreign key | A primary key from another table, establishing a relationship |
| Record      | A single row in a table                                       |
| Field       | A single column in a table                                    |

### Entity-Relationship Diagrams (HL)

An ER diagram shows entities, attributes, and relationships.

- **One-to-one (1:1):** each record in one table relates to exactly one record in another.
- **One-to-many (1:M):** one record in a table relates to many in another (e.g., one teacher has
  many students).
- **Many-to-many (M:N):** many records in one table relate to many in another (e.g., students and
  courses). Resolved using a junction table.

## SQL (Structured Query Language) (HL)

### Data Definition Language (DDL)

**Create a table:**

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    Grade CHAR(2)
);
```

**Add a column:**

```sql
ALTER TABLE Students ADD COLUMN Email VARCHAR(100);
```

**Delete a table:**

```sql
DROP TABLE Students;
```

### Data Manipulation Language (DML)

**Insert data:**

```sql
INSERT INTO Students (StudentID, FirstName, LastName, DateOfBirth, Grade)
VALUES (1, 'John', 'Smith', '2008-03-15', 'HL');
```

**Update data:**

```sql
UPDATE Students
SET Grade = 'OL'
WHERE StudentID = 3;
```

**Delete data:**

```sql
DELETE FROM Students
WHERE StudentID = 5;
```

### Queries (DQL)

**Select all columns:**

```sql
SELECT * FROM Students;
```

**Select specific columns:**

```sql
SELECT FirstName, LastName, Grade FROM Students;
```

**Where clause:**

```sql
SELECT * FROM Students
WHERE Grade = 'HL';
```

**Comparison operators:** `=`, `<>`, `<`, `>`, `<=`, `>=`.

**Logical operators:** `AND`, `OR`, `NOT`.

**Pattern matching:**

```sql
SELECT * FROM Students
WHERE FirstName LIKE 'J%';
```

**Ordering results:**

```sql
SELECT * FROM Students
ORDER BY LastName ASC;
```

**Aggregate functions:**

```sql
SELECT COUNT(*) FROM Students;
SELECT AVG(Mark) FROM Results;
SELECT MAX(Mark), MIN(Mark) FROM Results;
```

**Group by:**

```sql
SELECT Grade, COUNT(*)
FROM Students
GROUP BY Grade;
```

**Having clause** (filters groups):

```sql
SELECT Grade, AVG(Mark)
FROM Results
GROUP BY Grade
HAVING AVG(Mark) > 70;
```

**Joins:**

```sql
SELECT Students.FirstName, Students.LastName, Results.Mark
FROM Students
INNER JOIN Results ON Students.StudentID = Results.StudentID;
```

### Views (HL)

A view is a virtual table based on a query:

```sql
CREATE VIEW HighAchievers AS
SELECT FirstName, LastName, Mark
FROM Students
INNER JOIN Results ON Students.StudentID = Results.StudentID
WHERE Mark >= 80;
```

## Normalisation (HL)

Normalisation reduces data redundancy and dependency.

### First Normal Form (1NF)

- No repeating groups or arrays.
- Each cell contains a single value.
- Each record is unique (has a primary key).

### Second Normal Form (2NF)

- Must be in 1NF.
- No partial dependencies (all non-key attributes depend on the entire primary key).

### Third Normal Form (3NF)

- Must be in 2NF.
- No transitive dependencies (non-key attributes do not depend on other non-key attributes).

**Example (HL):**

**Unnormalised table:**

| StudentID | Name | Subject1 | Teacher1 | Subject2 | Teacher2 |
| --------- | ---- | -------- | -------- | -------- | -------- |
| 1         | John | Maths    | Ms Lee   | Physics  | Mr Kelly |

**1NF:** Remove repeating groups.

| StudentID | Name | Subject | Teacher  |
| --------- | ---- | ------- | -------- |
| 1         | John | Maths   | Ms Lee   |
| 1         | John | Physics | Mr Kelly |

**2NF:** Separate into Students and Enrolments tables.

Students: StudentID, Name.

Enrolments: StudentID, Subject, Teacher.

**3NF:** Remove transitive dependency (Teacher depends on Subject, not StudentID).

Students: StudentID, Name.

Subjects: Subject, Teacher.

Enrolments: StudentID, Subject.

## Data Integrity (HL)

### Types of Integrity

- **Entity integrity:** no null values in primary key.
- **Referential integrity:** every foreign key value must match a primary key value in the related
  table (or be null).
- **Domain integrity:** values in a column must be of the correct data type and within the valid
  range.

**Example (HL):**

```sql
-- Referential integrity: prevent deleting a student with results
-- (using ON DELETE RESTRICT or appropriate constraint)
```

## Common Pitfalls

1. **Image file size** -- remember to convert from bits to bytes to MB.
2. **SQL syntax** -- keywords are case-insensitive but conventionally uppercase; strings in single
   quotes.
3. **JOIN vs WHERE** -- use explicit JOIN syntax rather than implicit joins.
4. **Normalisation** -- identify functional dependencies carefully; 3NF requires no transitive
   dependencies.
5. **Lossy vs lossless** -- know which formats use which type of compression.

## Practice Questions

### Ordinary Level

1. Calculate the file size of a $1024 \times 768$ image with 16-bit colour depth.
2. Explain the difference between lossy and lossless compression with examples.
3. Define entity, attribute, primary key, and foreign key.
4. Give an advantage of a relational database over a flat file.

### Higher Level

1. Calculate the file size of 5 minutes of stereo audio at 48,000 Hz, 24-bit resolution.
2. Normalise the following table to 3NF: Order(OrderNo, CustomerName, CustomerAddress, ProductName,
   Quantity, Price).
3. Write an SQL query to find all students whose average mark is above 75, grouped by grade level.
4. Explain the difference between entity integrity and referential integrity with examples.
