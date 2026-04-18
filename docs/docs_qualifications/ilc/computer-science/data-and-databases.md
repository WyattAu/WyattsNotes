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

**Worked Example (OL).** What is stored in binary for the word "Cat"?

C = 67 = 01000011, a = 97 = 01100001, t = 116 = 01110100.

"Cat" = 01000011 01100001 01110100 (3 bytes).

**Example (HL).** The difference between uppercase and lowercase ASCII codes is 32. To convert 'A'
to 'a', add 32 to the ASCII code: 65 + 32 = 97.

### Images (OL/HL)

**Bitmap images:** composed of pixels. Each pixel has a colour value.

- **Colour depth:** number of bits per pixel.
  - 1 bit: black and white (2 colours).
  - 8 bits: 256 colours.
  - 24 bits: true colour ($16,777,216$ colours).

**Image file size (bits):** width $\times$ height $\times$ colour depth.

**Example (OL):** A $800 \times 600$ image with 24-bit colour depth.

$$
\mathrm{Size} = 800 \times 600 \times 24 = 11520000\mathrm{ bits} = 1440000\mathrm{ bytes} \approx 1.37\mathrm{ MB}
$$

**Worked Example (OL).** An image is 1024 $\times$ 768 with 16-bit colour depth.

Size = $1024 \times 768 \times 16 = 12582912$ bits = $1572864$ bytes $\approx 1.5$ MB.

**Vector images:** composed of mathematical descriptions of shapes. Scale without losing quality.
Smaller file sizes for simple images.

**Bitmap vs Vector comparison:**

| Feature        | Bitmap                      | Vector                      |
| -------------- | --------------------------- | --------------------------- |
| Representation | Grid of pixels              | Mathematical descriptions   |
| Scaling        | Loses quality when enlarged | No quality loss at any size |
| File size      | Depends on resolution       | Depends on complexity       |
| Best for       | Photographs                 | Logos, icons, diagrams      |

### Sound (HL)

Sound is sampled (analog to digital conversion).

- **Sample rate:** number of samples per second (e.g., 44,100 Hz for CD quality).
- **Sample resolution (bit depth):** number of bits per sample (e.g., 16-bit).
- **Channels:** mono (1) or stereo (2).

**File size (bits):** sample rate $\times$ sample resolution $\times$ duration $\times$ channels.

**Example (HL):** 3 minutes of stereo audio at 44,100 Hz, 16-bit.

$$
\mathrm{Size} = 44100 \times 16 \times 180 \times 2 = 254016000\mathrm{ bits} \approx 30.3\mathrm{ MB}
$$

**Worked Example (HL).** A 5-minute mono recording at 22050 Hz with 8-bit depth.

Size = $22050 \times 8 \times 300 = 52920000$ bits = $6615000$ bytes $\approx 6.31$ MB.

**Nyquist theorem (HL).** The sample rate must be at least twice the highest frequency to avoid
aliasing. Human hearing goes up to about 20,000 Hz, so 44,100 Hz is sufficient for CD quality.

### Compression (OL/HL)

**Lossless compression:** no data is lost; original can be reconstructed exactly (e.g., PNG, FLAC,
ZIP).

**Lossy compression:** some data is discarded; original cannot be reconstructed (e.g., JPEG, MP3,
MPEG).

Run-Length Encoding (RLE) is a simple lossless method: replace repeated values with the value and
count.

**Example (OL):** AAABBCCCC becomes 3A2B4C.

**Worked Example (OL).** Compress WWWWWWBBBBWWWWW using RLE.

W6 B4 W5 = 6 runs. Original: 15 bytes. Compressed: 12 bytes (assuming 1 byte per count, 1 byte per
value).

**When RLE is ineffective.** For data with no repeats, e.g., ABCDEFGH, RLE produces A1B1C1D1E1F1G1H1
= 16 bytes, which is larger than the original 8 bytes.

## Data Types (OL/HL)

| Type       | Description            | Example      |
| ---------- | ---------------------- | ------------ |
| Integer    | Whole numbers          | 42, -7       |
| Real/Float | Decimal numbers        | 3.14, -0.001 |
| Character  | Single character       | 'A', 'z'     |
| String     | Sequence of characters | "Hello"      |
| Boolean    | True or false          | true, false  |
| Date       | Calendar date          | 2026-04-14   |

**Worked Example (OL).** Which data type would you use for each of the following?

- A person's age: Integer
- A product price: Real/Float
- A phone number: String (contains leading zeros)
- Whether a student has passed: Boolean
- A student's date of birth: Date

## Database Concepts (OL/HL)

### Flat File vs Relational Database

**Flat file:** data stored in a single table. Problems: data redundancy, inconsistency, difficulty
of updating.

**Relational database:** data stored in multiple related tables. Advantages: reduced redundancy,
data integrity, easier maintenance.

| Feature           | Flat File           | Relational Database         |
| ----------------- | ------------------- | --------------------------- |
| Tables            | Single              | Multiple, related           |
| Redundancy        | High                | Minimised by normalisation  |
| Data integrity    | Not enforced        | Enforced by constraints     |
| Concurrent access | Not supported       | Supported with locking      |
| Querying          | Manual (sequential) | SQL (declarative, powerful) |

### Key Terms

| Term        | Definition                                                    |
| ----------- | ------------------------------------------------------------- |
| Entity      | A thing/object about which data is stored (e.g., Student)     |
| Attribute   | A property of an entity (e.g., Name, Date of Birth)           |
| Primary key | Uniquely identifies each record in a table                    |
| Foreign key | A primary key from another table, establishing a relationship |
| Record      | A single row in a table                                       |
| Field       | A single column in a table                                    |

**Worked Example (OL).** In a Student table, which field would be the best primary key?

StudentID is the best choice because it is unique and never changes. Name is not unique (two
students can share a name). Date of Birth is not unique.

### Entity-Relationship Diagrams (HL)

An ER diagram shows entities, attributes, and relationships.

- **One-to-one (1:1):** each record in one table relates to exactly one record in another.
- **One-to-many (1:M):** one record in a table relates to many in another (e.g., one teacher has
  many students).
- **Many-to-many (M:N):** many records in one table relate to many in another (e.g., students and
  courses). Resolved using a junction table.

**Worked Example (HL).** A school has Teachers and Subjects. Each teacher teaches one subject, but a
subject can be taught by many teachers. What is the relationship?

Teacher (1) to (M) Subject. The foreign key is SubjectCode in the Teacher table.

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

**Worked Example.** Insert three students into the Students table.

```sql
INSERT INTO Students (StudentID, FirstName, LastName, DateOfBirth, Grade)
VALUES
    (1, 'Alice', 'Murphy', '2007-06-20', 'HL'),
    (2, 'Bob', 'Kelly', '2008-01-15', 'OL'),
    (3, 'Clara', 'O\'Brien', '2007-09-03', 'HL');
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

**Comparison operators:** `=`, `&lt;&gt;`, `&lt;`, `&gt;`, `&lt;=`, `&gt;=`.

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

**Worked Example.** Find all HL students whose average mark is above 75.

```sql
SELECT Students.FirstName, Students.LastName, AVG(Results.Mark) AS AverageMark
FROM Students
INNER JOIN Results ON Students.StudentID = Results.StudentID
WHERE Students.Grade = 'HL'
GROUP BY Students.StudentID, Students.FirstName, Students.LastName
HAVING AVG(Results.Mark) > 75;
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

**Why normalisation matters:**

- **Update anomaly:** Without normalisation, if Ms Lee changes her name, every row must be updated.
- **Insertion anomaly:** A new subject with no students cannot be added.
- **Deletion anomaly:** If John leaves, the information about Maths and its teacher is lost.

## Data Integrity (HL)

### Types of Integrity

- **Entity integrity:** no null values in primary key.
- **Referential integrity:** every foreign key value must match a primary key value in the related
  table (or be null).
- **Domain integrity:** values in a column must be of the correct data type and within the valid
  range.

**Worked Example (HL).** Explain referential integrity with an example.

If a Student record with StudentID = 5 exists in the Enrolments table, you cannot delete StudentID =
5 from the Students table without first deleting the enrolments. Otherwise, the Enrolments table
would reference a non-existent student.

## Advanced SQL Techniques (HL)

### Window Functions

```sql
SELECT FirstName, LastName, Subject, Mark,
       RANK() OVER (PARTITION BY Subject ORDER BY Mark DESC) AS SubjectRank
FROM Results;
```

### Common Table Expressions

```sql
WITH SubjectAverages AS (
    SELECT Subject, AVG(Mark) AS AvgMark
    FROM Results
    GROUP BY Subject
)
SELECT Subject, AvgMark
FROM SubjectAverages
ORDER BY AvgMark DESC;
```

### Stored Procedures

```sql
CREATE PROCEDURE AddStudent(
    IN pName VARCHAR(50),
    IN pGrade CHAR(2)
)
BEGIN
    INSERT INTO Students (FirstName, LastName, Grade)
    VALUES (pName, '', pGrade);
END;
```

### SQL Injection Prevention

**Vulnerable:**

```python
query = f"SELECT * FROM Users WHERE name = '{user_input}'"
```

**Secure (parameterised):**

```python
cursor.execute("SELECT * FROM Users WHERE name = ?", (user_input,))
```

### Database Design Patterns

**Many-to-Many Resolution:**

A many-to-many relationship always requires a junction (link) table.

**Example:** Students and Courses (M:N) requires an Enrolments table.

### Referential Integrity Constraints

```sql
-- ON DELETE CASCADE: delete related records
CREATE TABLE Enrolment (
    StudentID INT,
    CourseCode VARCHAR(10),
    PRIMARY KEY (StudentID, CourseCode),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID) ON DELETE CASCADE,
    FOREIGN KEY (CourseCode) REFERENCES Courses(CourseCode) ON DELETE CASCADE
);
```

## Data Representation Additional Topics

### Representing Text in Detail

**Unicode and UTF-8 encoding:**

| Character | Unicode | UTF-8 Bytes       |
| --------- | ------- | ----------------- |
| A         | U+0041  | 01000001 (1 byte) |
| Euro      | U+20AC  | 11100010 10000010 10101100 (3 bytes) |
| Emoji     | U+1F600 | 4 bytes           |

**Why UTF-8 is preferred:** Backward-compatible with ASCII, variable-length (efficient for English
text), and supports all Unicode characters.

### Image Compression Techniques

**JPEG compression:** Uses discrete cosine transform (DCT) to discard high-frequency information
that the human eye is less sensitive to. The quality can be adjusted (higher quality = larger file).

**PNG compression:** Uses lossless deflate compression. Best for images with sharp edges and text
(like screenshots).

### Audio Compression

**MP3 compression:** Uses psychoacoustic modelling to discard sounds that the human ear cannot
perceive (e.g., quiet sounds masked by louder ones at similar frequencies). Typical bitrate: 128
kbps (acceptable quality) to 320 kbps (high quality).

**FLAC compression:** Lossless compression of audio data. File sizes are larger than MP3 but the
original can be perfectly reconstructed.

## Additional Practice Questions

9. A bitmap image has resolution 1600 x 900 and file size 3 MB. Calculate the colour depth.

10. Write SQL that uses a subquery to find students who are NOT enrolled in any course.

11. Write SQL using a CTE to find the subject with the highest average mark.

12. Explain the difference between DELETE, DROP, and TRUNCATE in SQL.

13. A school database needs tables for Teacher, Subject, and Classroom. Design the schema with
    appropriate primary and foreign keys.

14. Write SQL to find all students whose marks are above the class average in every subject.

15. Explain why UTF-8 is the most widely used character encoding on the web.

16. Write SQL to create a view that shows each teacher and the number of subjects they teach.

17. Explain three types of SQL injection attacks and how to prevent each.

18. A music streaming service stores songs as MP3 files at 128 kbps. A 4-minute song at CD quality
    (44,100 Hz, 16-bit, stereo) would be approximately 30 MB. Estimate the MP3 file size and
    explain the compression ratio.

## Additional SQL Practice

### Complex Queries

**Self-join:** A table joined with itself to find relationships within the same data.

```sql
SELECT s1.FirstName, s1.LastName
FROM Students s1
JOIN Students s2 ON s1.DateOfBirth = s2.DateOfBirth
WHERE s1.StudentID < s2.StudentID;
```

This finds pairs of students who share the same birthday.

**EXISTS and NOT EXISTS:**

```sql
SELECT FirstName, LastName
FROM Students s
WHERE EXISTS (
    SELECT 1 FROM Results r
    WHERE r.StudentID = s.StudentID AND r.Mark >= 90
);
```

**CASE expressions:**

```sql
SELECT FirstName, Grade,
    CASE
        WHEN Grade = 'HL' THEN 'Higher Level'
        WHEN Grade = 'OL' THEN 'Ordinary Level'
        ELSE 'Unknown'
    END AS LevelDescription
FROM Students;
```

### Aggregate Functions in Detail

| Function  | Description                          | Ignores NULL? |
| --------- | ------------------------------------ | ------------- |
| COUNT(*)  | Count all rows                       | No            |
| COUNT(col)| Count non-NULL values in column     | Yes           |
| SUM       | Sum of values                        | Yes           |
| AVG       | Average of values                    | Yes           |
| MIN       | Smallest value                       | Yes           |
| MAX       | Largest value                        | Yes           |

**Worked Example.** Find the student with the highest mark in each subject.

```sql
SELECT r.Subject, s.FirstName, s.LastName, r.Mark
FROM Results r
JOIN Students s ON r.StudentID = s.StudentID
WHERE r.Mark = (
    SELECT MAX(r2.Mark)
    FROM Results r2
    WHERE r2.Subject = r.Subject
);
```

## Data Representation Additional Topics

### Run-Length Encoding Practice

**Worked Example.** Compress: AAAAABBBCCCCCCDD

A5 B3 C6 D2 = 8 runs. Original: 16 bytes. Compressed: 16 bytes. No improvement (break-even).

**Worked Example.** Compress: XXXXXXXXXXYYYYYZZZZZ

X10 Y5 Z5 = 3 runs. Original: 20 bytes. Compressed: 6 bytes. Compression ratio: 20/6 = 3.33:1.

### Huffman Coding (HL)

Huffman coding is a lossless compression technique that assigns shorter codes to more frequent
characters and longer codes to less frequent characters.

**Example:** For the string "BCCABBDDAECCBBAEDDCC"

| Character | Frequency | Huffman Code |
| --------- | --------- | ------------ |
| C         | 6         | 00           |
| B         | 4         | 01           |
| D         | 4         | 10           |
| A         | 3         | 110          |
| E         | 2         | 111          |

Original: 19 characters x 8 bits = 152 bits.
Compressed: (6x2) + (4x2) + (4x2) + (3x3) + (2x3) = 12 + 8 + 8 + 9 + 6 = 43 bits.

## Additional Practice Questions

11. Write SQL to find all students who scored above 80 in at least 3 different subjects.

12. Write SQL using a CASE expression to convert numerical marks to letter grades: A (90-100),
    B (80-89), C (70-79), D (60-69), F (below 60).

13. Explain how Huffman coding achieves compression. Why is it lossless?

14. Write SQL to create a view that shows each student's name, their average mark, and a count of
    how many subjects they are enrolled in.

15. Compress the string "MMMMMMNNNOOOOOPP" using RLE. Calculate the compression ratio.

16. Write SQL using NOT EXISTS to find products that have never been ordered.

17. Explain the difference between COUNT(*) and COUNT(column). Give an example where they produce
    different results.

18. Write SQL to find the top 3 students by total marks across all subjects, using a CTE.

## Ethical Considerations in Database Design (HL)

### Data Protection Principles

- **Lawfulness:** Data must be collected and processed legally.
- **Purpose limitation:** Data collected for one purpose should not be used for another.
- **Data minimisation:** Only collect data that is necessary.
- **Accuracy:** Data must be kept accurate and up to date.
- **Storage limitation:** Data should not be kept longer than necessary.
- **Security:** Appropriate measures must protect data.

### Right to Be Forgotten

Under GDPR, individuals have the right to request deletion of their personal data.

```sql
DELETE FROM Students WHERE StudentID = 42;
DELETE FROM Results WHERE StudentID = 42;
```

### Anonymisation vs Pseudonymisation

- **Anonymisation:** Permanently removes identifying information. Data cannot be linked back to
  individuals.
- **Pseudonymisation:** Replaces identifying information with artificial identifiers. Data can be
  linked back using a key.

**Worked Example.** A hospital wants to share patient data for research. Explain why
pseudonymisation might be preferred over anonymisation.

Pseudonymisation allows the hospital to re-link data to patients if needed (e.g., for follow-up
studies). Anonymisation would make this impossible. However, pseudonymised data still carries a
small re-identification risk.

## Additional Practice Questions

19. Explain the difference between anonymisation and pseudonymisation. When might each be used?

20. Write SQL to implement the "right to be forgotten" for a specific student, ensuring all related
    records are deleted across all tables.

21. Explain why data minimisation is important in database design. Give an example of collecting
    unnecessary data.

22. A company stores customer data including names, addresses, purchase history, and payment
    details. Explain which data protection principles apply and how they should be implemented.

## Common Pitfalls

1. **Image file size** -- remember to convert from bits to bytes to MB.
2. **SQL syntax** -- keywords are case-insensitive but conventionally uppercase; strings in single
   quotes.
3. **JOIN vs WHERE** -- use explicit JOIN syntax rather than implicit joins.
4. **Normalisation** -- identify functional dependencies carefully; 3NF requires no transitive
   dependencies.
5. **Lossy vs lossless** -- know which formats use which type of compression.
6. **Forgetting WHERE in UPDATE/DELETE** -- without WHERE, all rows are affected.
7. **NULL in aggregates** -- COUNT(\*) counts all rows; COUNT(column) counts non-NULL values.
8. **Confusing HAVING and WHERE** -- WHERE filters rows before grouping; HAVING filters groups.

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

5. Write SQL to create tables for a library database with Books, Members, and Loans. Include primary
   keys and foreign keys.
6. Write SQL to find the most popular book (most loans) in the library.
7. Explain the three types of anomalies that can occur in an unnormalised database.
8. Write SQL to create a view showing all members who have overdue loans (loan date more than 14
   days ago).

9. A bitmap image has resolution 1600 $\times$ 900 and file size 3 MB. Calculate the colour depth.
10. Write SQL that uses a subquery to find students who are NOT enrolled in any course.
