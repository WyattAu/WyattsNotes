---
title: "Programming and Databases -- Diagnostic Tests"
description: "DSE ICT diagnostic tests for programming and databases: algorithm design, pseudocode, SQL queries, normalisation, software development lifecycle."
slug: diag-programming-databases
hide_table_of_contents: true
---

# Programming and Databases — Diagnostic Tests

## Unit Tests

### UT-1: Algorithm Design and Pseudocode
**Question:** (a) Write pseudocode for a binary search algorithm that searches a sorted array for a target value and returns its index or -1 if not found. (b) If the array has 1024 elements, what is the maximum number of comparisons needed? (c) Write pseudocode for a linear search and compare the time complexity. (d) Explain why binary search cannot be applied to an unsorted array.

**Solution:**

(a) ```
FUNCTION BinarySearch(array, target)
    low ← 0
    high ← LENGTH(array) - 1
    WHILE low ≤ high
        mid ← (low + high) DIV 2
        IF array[mid] = target THEN
            RETURN mid
        ELSE IF array[mid] < target THEN
            low ← mid + 1
        ELSE
            high ← mid - 1
        END IF
    END WHILE
    RETURN -1
END FUNCTION
```

(b) Binary search has time complexity $O(\log n)$. Maximum comparisons $= \lceil \log_2 1024 \rceil = 10$.

(c) Linear search:
```
FUNCTION LinearSearch(array, target)
    FOR i ← 0 TO LENGTH(array) - 1
        IF array[i] = target THEN
            RETURN i
        END IF
    END FOR
    RETURN -1
END FUNCTION
```
Time complexity: $O(n)$. For 1024 elements, worst case is 1024 comparisons. Binary search is exponentially faster for sorted data.

(d) Binary search relies on the property that if `array[mid] < target`, the target must be in the right half (since the array is sorted). In an unsorted array, the target could be anywhere regardless of the mid-value comparison, so the divide-and-conquer strategy does not work.

### UT-2: SQL Queries
**Question:** Given the following tables:

**Students** (student_id PK, name, class, year_group)
**Exams** (exam_id PK, subject, date, max_marks)
**Results** (result_id PK, student_id FK, exam_id FK, marks)

(a) Write SQL to find all students who scored above 80 in "Mathematics". (b) Write SQL to find the average marks per subject. (c) Write SQL to find the student with the highest total marks across all exams. (d) Write SQL to add a new column `grade` to the Results table.

**Solution:**

(a) ```sql
SELECT s.name, r.marks
FROM Students s
INNER JOIN Results r ON s.student_id = r.student_id
INNER JOIN Exams e ON r.exam_id = e.exam_id
WHERE e.subject = 'Mathematics' AND r.marks > 80;
```

(b) ```sql
SELECT e.subject, AVG(r.marks) AS average_marks
FROM Exams e
INNER JOIN Results r ON e.exam_id = r.exam_id
GROUP BY e.subject;
```

(c) ```sql
SELECT s.name, SUM(r.marks) AS total_marks
FROM Students s
INNER JOIN Results r ON s.student_id = r.student_id
GROUP BY s.student_id, s.name
ORDER BY total_marks DESC
LIMIT 1;
```

(d) ```sql
ALTER TABLE Results ADD COLUMN grade VARCHAR(2);
```

### UT-3: Database Normalisation
**Question:** A school stores the following unnormalised data:

| StudentID | Name | Class | Subject | Teacher | Room |
|---|---|---|---|---|---|
| 001 | Chan Tai Man | 5A | Maths | Mr Wong | R101 |
| 001 | Chan Tai Man | 5A | English | Ms Lee | R203 |
| 002 | Li Siu Ming | 5A | Maths | Mr Wong | R101 |
| 002 | Li Siu Ming | 5A | English | Ms Lee | R203 |

(a) Identify the repeating groups and explain why this is in 1NF violation. (b) Convert to 2NF, explaining what functional dependencies are removed. (c) Convert to 3NF, explaining what transitive dependencies are removed.

**Solution:**

(a) **1NF violation:** The table has repeating groups -- StudentID 001 has two rows for different subjects, creating redundancy. Name and Class are repeated for each subject. This causes update anomalies (changing Chan Tai Man's class requires updating two rows), insertion anomalies (cannot add a new subject without a student), and deletion anomalies (deleting Li Siu Ming's maths result might also delete information about Mr Wong teaching maths in R101).

**1NF conversion:** Each cell must contain a single value, and each row must be unique (add a composite primary key of StudentID + Subject).

(b) **2NF:** Remove partial dependencies -- attributes that depend on only part of the composite key.

Functional dependencies: StudentID $\to$ Name, Class. Subject $\to$ Teacher, Room.

**Students table:** (StudentID PK, Name, Class)
**Subjects table:** (Subject PK, Teacher, Room)
**Enrolment table:** (StudentID FK, Subject FK) -- composite PK

(c) **3NF:** Remove transitive dependencies -- attributes that depend on a non-key attribute.

In the Students table: StudentID $\to$ Class. If Class $\to$ ClassTeacher, ClassRoom, then ClassTeacher and ClassRoom transitively depend on StudentID through Class.

**Students table:** (StudentID PK, Name, ClassID FK)
**Classes table:** (ClassID PK, ClassTeacher, ClassRoom)
**Subjects table:** (Subject PK, Teacher, Room)
**Enrolment table:** (StudentID FK, Subject FK)

---

## Integration Tests

### IT-1: Database Design and Query Optimisation (with Computer Systems)
**Question:** A library system has 10{,}000 books and 5000 members. The loans table records every transaction. (a) Design a normalised schema (at least 3 tables) with appropriate keys and relationships. (b) Write SQL to find the most popular book genre in the past year. (c) The loans table has 100{,}000 rows. Explain why adding an index on (member_id, loan_date) would improve query performance. (d) Explain how the database uses the buffer cache in RAM and how insufficient RAM affects performance.

**Solution:**

(a) **Books:** (book_id PK, title, author, genre_id FK, ISBN, publisher)
**Genres:** (genre_id PK, genre_name)
**Members:** (member_id PK, name, email, join_date)
**Loans:** (loan_id PK, book_id FK, member_id FK, loan_date, return_date)

(b) ```sql
SELECT g.genre_name, COUNT(*) AS loan_count
FROM Loans l
INNER JOIN Books b ON l.book_id = b.book_id
INNER JOIN Genres g ON b.genre_id = g.genre_id
WHERE l.loan_date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY g.genre_id, g.genre_name
ORDER BY loan_count DESC
LIMIT 1;
```

(c) Without an index, finding all loans for a specific member in a date range requires a full table scan (100{,}000 rows). With a composite index on (member_id, loan_date), the database uses a B-tree to locate the member's records in $O(\log n)$ time and then scans only the relevant date range. For a query like "show all loans for member 42 in 2025", the index reduces the search from examining 100{,}000 rows to perhaps 10--20 rows.

(d) The database buffer cache stores frequently accessed data pages (index pages, table data) in RAM. When a query needs data, the DBMS checks the buffer cache first. A cache hit (data in RAM) takes microseconds; a cache miss (disk read) takes milliseconds -- roughly 1000x slower.

If RAM is insufficient: (1) The buffer cache is too small to hold the working set of data, causing frequent disk reads. (2) The system may thrash -- constantly loading and evicting pages. (3) Index pages are evicted, forcing full table scans. (4) Query performance degrades dramatically, especially for concurrent users.

### IT-2: Program Logic and Data Validation (with Data Representation)
**Question:** A program validates user input for a Hong Kong phone number. Valid format: 8 digits starting with 5, 6, 7, or 9. (a) Write pseudocode for the validation function. (b) A student writes the validation using string manipulation. Explain why using regular expressions is more appropriate. (c) The phone numbers are stored as integers in the database. Explain two problems with this approach. (d) Write SQL to find all records with invalid phone numbers.

**Solution:**

(a) ```
FUNCTION ValidateHKPhone(phone)
    IF LENGTH(phone) ≠ 8 THEN
        RETURN False
    END IF
    first_digit ← SUBSTRING(phone, 0, 1)
    IF first_digit = '5' OR first_digit = '6' OR first_digit = '7' OR first_digit = '9' THEN
        FOR i ← 0 TO 7
            IF NOT IS_DIGIT(phone[i]) THEN
                RETURN False
            END IF
        END FOR
        RETURN True
    ELSE
        RETURN False
    END IF
END FUNCTION
```

(b) String manipulation requires multiple conditionals and loops. A regular expression encodes the entire validation rule in a single pattern: `^[5679]\d{7}$`. This is: (1) More concise and readable. (2) Easier to modify (change the pattern without changing program logic). (3) Well-tested and optimised by regex engines. (4) Declarative (describes what to match) rather than imperative (how to check).

(c) Two problems: (1) **Leading zeros:** If a phone number starts with 0 (in some formats), storing as an integer would lose the leading zero. HK numbers don't start with 0, but this is a general problem with numeric storage of identifiers. (2) **Overflow:** An 8-digit phone number exceeds the range of a 32-bit signed integer (max 2{,}147{,}483{,}647). Some HK numbers starting with 9 (e.g., 98765432) are within range, but this is fragile. Phone numbers are identifiers, not quantities -- they should be stored as strings.

(d) ```sql
SELECT * FROM Members
WHERE phone_number NOT REGEXP '^[5679][0-9]{7}$'
   OR phone_number IS NULL
   OR LENGTH(phone_number) ≠ 8;
```

### IT-3: Software Development Lifecycle (with Office Automation)
**Question:** A company is developing a new inventory management system. (a) Describe the main phases of the waterfall model and one advantage and one disadvantage compared to the agile methodology. (b) Explain the difference between black-box testing and white-box testing, giving an example of each for the inventory system. (c) The system has a module that calculates the total value of inventory (quantity $\times$ unit price). Describe three test cases using boundary value analysis. (d) Explain why user acceptance testing (UAT) is critical before deployment.

**Solution:**

(a) **Waterfall phases:** (1) Requirements analysis -- gather and document all requirements. (2) System design -- architectural and detailed design. (3) Implementation -- write code. (4) Testing -- verify the system meets requirements. (5) Deployment -- release to users. (6) Maintenance -- fix bugs and add features.

Advantage: Clear milestones and documentation at each stage; easy to manage for well-understood projects with stable requirements.

Disadvantage: Inflexible -- changes are costly once a phase is complete; testing occurs late, so defects are expensive to fix. Agile methodology addresses this through iterative development with continuous testing and feedback.

(b) **Black-box testing:** Tests the system's functionality without knowledge of internal code. The tester provides inputs and checks outputs against expected results.

Example: Enter a product ID "P001" with quantity 50 and unit price \$10. Verify that the system displays total value \$500. Enter negative quantity and verify the system rejects it with an error message.

**White-box testing:** Tests the internal logic, paths, and structure of the code. The tester examines the code and designs tests to cover branches, loops, and conditions.

Example: Examine the inventory calculation function and design tests to ensure: (1) the multiplication is performed correctly, (2) the function handles zero quantity, (3) the function handles null price, (4) all code branches are executed.

(c) Boundary value analysis for quantity $\times$ price (assuming quantity: 1--9999, price: 0.01--99999.99):

1. **Minimum boundary:** quantity $= 1$, price $= 0.01$. Expected: total $= 0.01$. Test the minimum valid inputs.
2. **Maximum boundary:** quantity $= 9999$, price $= 99999.99$. Expected: total $= 999{,}989{,}901.01$. Test for overflow or rounding errors.
3. **Boundary edge cases:** quantity $= 0$ (should be rejected or handled), quantity $= 10000$ (should be rejected), price $= 0$ (should be handled), price $= -1$ (should be rejected).

(d) UAT is critical because: (1) Developers and testers may not fully understand business requirements or user workflows. (2) UAT is performed by actual end users who validate that the system meets their real-world needs. (3) It catches usability issues, workflow problems, and requirement misunderstandings that technical testing misses. (4) UAT sign-off provides business confidence before deployment, reducing the risk of costly post-release fixes. (5) Involving users in testing increases adoption and reduces resistance to the new system.
