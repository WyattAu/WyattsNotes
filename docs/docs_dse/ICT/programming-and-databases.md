---
id: dse-ict-programming-and-databases
title: ICT - Programming and Databases
description:
  DSE ICT notes covering programming concepts, algorithms, data structures, database design, and
  SQL.
slug: ict-programming-and-databases
---

## Programming Fundamentals

### Variables and Data Types

A variable is a named storage location in memory that holds a value which can change during program
execution.

| Data Type    | Description                 | Example            |
| ------------ | --------------------------- | ------------------ |
| Integer      | Whole numbers               | `42`, `-7`, `0`    |
| Float / Real | Numbers with decimal points | `3.14`, `-0.5`     |
| String       | Text enclosed in quotes     | `"Hello"`, `'DSE'` |
| Boolean      | Logical values              | `True`, `False`    |
| Character    | A single character          | `'A'`, `'9'`       |
| Array / List | Collection of values        | `[1, 2, 3, 4]`     |

### Constants

A constant is a named value that cannot be changed during program execution.

```python
PI = 3.14159
MAX_STUDENTS = 40
```

:::info In DSE ICT, constants are typically written in UPPER_CASE to distinguish them from
variables. Using constants improves code readability and reduces errors. :::

### Input and Output

```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print("Hello, " + name + "! You are " + str(age) + " years old.")
```

### Assignment and Operators

**Assignment operator:** `=` assigns a value to a variable.

```python
x = 10
x = x + 5  # x is now 15
x += 5     # shorthand, x is now 20
```

**Arithmetic operators:**

| Operator | Meaning            | Example       |
| -------- | ------------------ | ------------- |
| `+`      | Addition           | `5 + 3 = 8`   |
| `-`      | Subtraction        | `5 - 3 = 2`   |
| `*`      | Multiplication     | `5 * 3 = 15`  |
| `/`      | Division           | `7 / 2 = 3.5` |
| `//`     | Integer division   | `7 // 2 = 3`  |
| `%`      | Modulo (remainder) | `7 % 2 = 1`   |
| `**`     | Exponentiation     | `2 ** 3 = 8`  |

**Comparison operators:**

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |

**Logical operators:**

| Operator | Meaning                             | Example            |
| -------- | ----------------------------------- | ------------------ |
| `and`    | Both conditions must be True        | `x > 0 and x < 10` |
| `or`     | At least one condition must be True | `x == 0 or x == 1` |
| `not`    | Reverses the condition              | `not(x > 5)`       |

---

## Control Structures

### Selection (Conditional Statements)

Selection allows the program to choose different paths based on conditions.

**IF statement:**

```python
score = 75

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print("Grade:", grade)
```

**Nested IF:**

```python
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Access granted")
    else:
        print("Please show ID")
else:
    print("Access denied: underage")
```

### Iteration (Loops)

Iteration allows the program to repeat a block of code multiple times.

**FOR loop** (count-controlled):

```python
for i in range(1, 11):
    print(i)

# Count down
for i in range(10, 0, -1):
    print(i)
```

**WHILE loop** (condition-controlled):

```python
total = 0
count = 1

while count <= 100:
    total += count
    count += 1

print("Sum of 1 to 100:", total)
```

**Post-test loop (REPEAT-UNTIL equivalent):**

```python
while True:
    password = input("Enter password: ")
    if password == "secret":
        break
    print("Try again")
```

:::warning Be careful with WHILE loops to avoid infinite loops. Always ensure the loop condition
will eventually become False. A common mistake is forgetting to update the loop variable inside the
loop body. :::

### Worked Example 1

Write a program to find the largest of three numbers.

```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))

largest = a

if b > largest:
    largest = b
if c > largest:
    largest = c

print("The largest number is:", largest)
```

### Worked Example 2

Write a program to check if a number is prime.

```python
num = int(input("Enter a positive integer: "))

if num > 1:
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(num, "is a prime number.")
    else:
        print(num, "is not a prime number.")
else:
    print(num, "is not a prime number.")
```

---

## Functions and Procedures

### Functions

A function is a named block of code that performs a specific task and **returns a value**.

```python
def calculate_area(length, width):
    area = length * width
    return area

result = calculate_area(5, 3)
print("Area:", result)
```

### Procedures

A procedure is a named block of code that performs a specific task but **does not return a value**.

```python
def greet(name):
    print("Hello, " + name + "!")

greet("Alice")
```

### Parameters and Arguments

- **Parameters:** Variables listed in the function definition (formal parameters)
- **Arguments:** Actual values passed to the function when it is called (actual parameters)

```python
def add_numbers(a, b):    # a and b are parameters
    return a + b

result = add_numbers(3, 5)  # 3 and 5 are arguments
```

### Local and Global Variables

- **Local variable:** Declared inside a function; only accessible within that function
- **Global variable:** Declared outside all functions; accessible throughout the program

```python
total = 0  # global variable

def add_to_total(value):
    global total
    total += value  # modifying the global variable

add_to_total(10)
add_to_total(20)
print("Total:", total)  # Output: Total: 30
```

:::tip Avoid using global variables where possible. They make code harder to debug and maintain.
Instead, pass values as parameters and return results. :::

### Worked Example 3

Write a function to calculate the factorial of a number.

```python
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

num = int(input("Enter a number: "))
print("Factorial of", num, "is", factorial(num))
```

Recursive version:

```python
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)
```

---

## Arrays and Data Structures

### One-Dimensional Arrays

An array is a collection of elements of the same data type, stored in contiguous memory locations,
accessed by an index.

```python
# Creating an array
scores = [85, 92, 78, 95, 88]

# Accessing elements (0-indexed)
print(scores[0])   # 85
print(scores[3])   # 95

# Modifying elements
scores[1] = 96

# Finding the length
print(len(scores))  # 5
```

### Common Array Operations

**Traversal:** Visiting each element in the array.

```python
for i in range(len(scores)):
    print(scores[i])
```

**Linear search:** Finding an element by checking each one sequentially.

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # return index
    return -1  # not found
```

**Bubble sort:** Sorting by repeatedly swapping adjacent elements.

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

numbers = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(numbers)
print("Sorted:", numbers)
```

### Two-Dimensional Arrays

A 2D array is an array of arrays, useful for representing tables, matrices, and grids.

```python
# Creating a 3x3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing elements
print(matrix[0][1])  # 2
print(matrix[2][2])  # 9

# Traversing
for row in range(3):
    for col in range(3):
        print(matrix[row][col], end=" ")
    print()
```

### Records

A record is a collection of related fields of possibly different data types.

```python
student = {
    "name": "Chan Tai Man",
    "class": "5A",
    "score": 85
}
print(student["name"])  # Chan Tai Man
```

---

## Algorithms

### Flowcharts

Flowcharts use standard symbols to represent algorithms visually:

| Symbol        | Meaning        |
| ------------- | -------------- |
| Oval          | Start / End    |
| Parallelogram | Input / Output |
| Rectangle     | Process        |
| Diamond       | Decision       |
| Arrow         | Flow direction |

### Pseudocode

Pseudocode is a structured English-like description of an algorithm. It is not executable but
clearly expresses the logic.

```
BEGIN
    INPUT score
    IF score >= 50 THEN
        OUTPUT "Pass"
    ELSE
        OUTPUT "Fail"
    ENDIF
END
```

### Trace Tables

A trace table records the values of variables as an algorithm executes, used for testing and
debugging.

**Example:** Trace the following algorithm with `n = 5`:

```
sum = 0
count = 1
WHILE count <= n
    sum = sum + count
    count = count + 1
ENDWHILE
OUTPUT sum
```

| Iteration | `count` | `sum`       | `count <= n` |
| --------- | ------- | ----------- | ------------ |
| 1         | 1       | 0 + 1 = 1   | True         |
| 2         | 2       | 1 + 2 = 3   | True         |
| 3         | 3       | 3 + 3 = 6   | True         |
| 4         | 4       | 6 + 4 = 10  | True         |
| 5         | 5       | 10 + 5 = 15 | True         |
| 6         | 6       | 15          | False        |

Output: `sum = 15`

### Worked Example 4

Write pseudocode to find the average of an array of numbers.

```
BEGIN
    INPUT size
    SET numbers = array of size
    FOR i = 0 TO size - 1
        INPUT numbers[i]
    NEXT i
    SET total = 0
    FOR i = 0 TO size - 1
        total = total + numbers[i]
    NEXT i
    SET average = total / size
    OUTPUT average
END
```

---

## File Handling

### Reading from a File

```python
file = open("data.txt", "r")
content = file.read()
file.close()

# Reading line by line
file = open("data.txt", "r")
for line in file:
    print(line.strip())
file.close()
```

### Writing to a File

```python
file = open("output.txt", "w")
file.write("Hello, World!\n")
file.write("DSE ICT 2025\n")
file.close()

# Appending to a file
file = open("output.txt", "a")
file.write("New line appended\n")
file.close()
```

### Using `with` statement (recommended)

```python
with open("data.txt", "r") as file:
    content = file.read()
```

:::info File modes:

- `"r"`: read (default)
- `"w"`: write (overwrites existing content)
- `"a"`: append (adds to existing content)
- `"r+"`: read and write :::

---

## Database Concepts

### What is a Database?

A database is an organised collection of structured data stored electronically. A Database
Management System (DBMS) is software for creating, managing, and manipulating databases.

### Flat File vs Relational Database

| Feature           | Flat File             | Relational Database              |
| ----------------- | --------------------- | -------------------------------- |
| Structure         | Single table          | Multiple linked tables           |
| Data redundancy   | High                  | Low                              |
| Data integrity    | Difficult to maintain | Enforced by constraints          |
| Data consistency  | Prone to anomalies    | Maintained through normalisation |
| Query flexibility | Limited               | Powerful (SQL)                   |
| Multi-user access | Difficult             | Supported                        |
| Example           | CSV file              | MySQL, PostgreSQL                |

### Advantages of Relational Databases

1. **Reduced data redundancy:** Each piece of data is stored only once
2. **Improved data integrity:** Validation rules and constraints prevent invalid data
3. **Data sharing:** Multiple users can access data simultaneously
4. **Data security:** Access control and user permissions
5. **Data independence:** Changes to the database structure do not affect applications

---

## Relational Database Design

### Entity-Relationship (ER) Diagrams

An ER diagram models the data and relationships in a database.

**Key components:**

- **Entity:** A thing or object (e.g., Student, Course)
- **Attribute:** A property of an entity (e.g., StudentID, Name)
- **Relationship:** An association between entities (e.g., Student enrols in Course)

**Relationship types:**

- **One-to-one (1:1):** Each record in one table relates to exactly one record in another
- **One-to-many (1:N):** One record in one table relates to many records in another
- **Many-to-many (M:N):** Many records in one table relate to many records in another (requires a
  junction table)

### Keys

| Key Type          | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| **Primary key**   | Uniquely identifies each record in a table; cannot be null |
| **Foreign key**   | A field that references the primary key of another table   |
| **Composite key** | A primary key made up of two or more fields                |
| **Candidate key** | Any field or combination that could serve as a primary key |
| **Superkey**      | Any set of fields that uniquely identifies a record        |

### Normalisation

Normalisation is the process of organising data to minimise redundancy and dependency.

**First Normal Form (1NF):**

- No repeating groups or arrays
- Each cell contains a single value
- Each record is unique (has a primary key)

**Second Normal Form (2NF):**

- In 1NF
- No partial dependencies (every non-key attribute depends on the entire primary key)
- Only applies to tables with composite primary keys

**Third Normal Form (3NF):**

- In 2NF
- No transitive dependencies (non-key attributes do not depend on other non-key attributes)

:::tip A simple check for 3NF: every non-key field must depend on the key, the whole key, and
nothing but the key. :::

### Worked Example 5

Convert the following unnormalised data to 3NF.

| StudentID | Name | CourseCode | CourseName  | Teacher  |
| --------- | ---- | ---------- | ----------- | -------- |
| 001       | Chan | CS101      | Programming | Mr. Lee  |
| 001       | Chan | CS102      | Database    | Ms. Wong |
| 002       | Lee  | CS101      | Programming | Mr. Lee  |

**1NF:** Remove repeating groups.

Student table: StudentID (PK), Name

Course table: CourseCode (PK), CourseName, Teacher

Enrolment table: StudentID, CourseCode (composite PK)

**2NF:** Already in 2NF (no partial dependencies since we have separate tables).

**3NF:** Already in 3NF (no transitive dependencies).

Final tables:

**Student** (StudentID PK, Name)

**Course** (CourseCode PK, CourseName, Teacher)

**Enrolment** (StudentID FK, CourseCode FK) -- composite PK

---

## Structured Query Language (SQL)

### Data Definition Language (DDL)

**Creating a table:**

```sql
CREATE TABLE Student (
    StudentID VARCHAR(10) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Class VARCHAR(10),
    Score INTEGER
);
```

**Modifying a table:**

```sql
ALTER TABLE Student
ADD COLUMN Email VARCHAR(100);

ALTER TABLE Student
DROP COLUMN Email;
```

**Deleting a table:**

```sql
DROP TABLE Student;
```

### Data Manipulation Language (DML)

**INSERT:**

```sql
INSERT INTO Student (StudentID, Name, Class, Score)
VALUES ('001', 'Chan Tai Man', '5A', 85);
```

**UPDATE:**

```sql
UPDATE Student
SET Score = 90
WHERE StudentID = '001';
```

**DELETE:**

```sql
DELETE FROM Student
WHERE Score < 50;
```

:::warning Be very careful with UPDATE and DELETE without a WHERE clause. They will modify or delete
ALL records in the table. Always double-check your WHERE clause before executing. :::

### Data Query Language (DQL)

**Basic SELECT:**

```sql
SELECT Name, Score
FROM Student;
```

**SELECT with WHERE:**

```sql
SELECT *
FROM Student
WHERE Class = '5A' AND Score >= 70;
```

**Comparison operators in WHERE:**

| Operator     | Meaning                     |
| ------------ | --------------------------- |
| `=`          | Equal to                    |
| `<>` or `!=` | Not equal to                |
| `>`          | Greater than                |
| `<`          | Less than                   |
| `>=`         | Greater than or equal to    |
| `<=`         | Less than or equal to       |
| `BETWEEN`    | Range                       |
| `LIKE`       | Pattern matching            |
| `IN`         | Matches any value in a list |
| `IS NULL`    | Null value                  |

**ORDER BY:**

```sql
SELECT Name, Score
FROM Student
ORDER BY Score DESC;
```

**Aggregate functions:**

| Function  | Description         |
| --------- | ------------------- |
| `COUNT()` | Number of rows      |
| `SUM()`   | Total of a column   |
| `AVG()`   | Average of a column |
| `MAX()`   | Maximum value       |
| `MIN()`   | Minimum value       |

```sql
SELECT AVG(Score) AS AverageScore, MAX(Score) AS Highest
FROM Student
WHERE Class = '5A';
```

**GROUP BY:**

```sql
SELECT Class, AVG(Score) AS ClassAverage
FROM Student
GROUP BY Class
ORDER BY ClassAverage DESC;
```

**HAVING:** Filters groups (like WHERE but for aggregate results).

```sql
SELECT Class, COUNT(*) AS StudentCount
FROM Student
GROUP BY Class
HAVING COUNT(*) >= 30;
```

**JOIN:** Combines rows from two or more tables based on a related column.

```sql
SELECT Student.Name, Course.CourseName, Enrolment.Grade
FROM Student
JOIN Enrolment ON Student.StudentID = Enrolment.StudentID
JOIN Course ON Enrolment.CourseCode = Course.CourseCode;
```

**INNER JOIN:** Returns only matching records.

**LEFT JOIN:** Returns all records from the left table and matching records from the right.

**RIGHT JOIN:** Returns all records from the right table and matching records from the left.

### Worked Example 6

Given the following tables:

**Student:** StudentID (PK), Name, Class

**Enrolment:** StudentID (FK), CourseCode (FK), Grade

**Course:** CourseCode (PK), CourseName, Teacher

Write SQL queries for the following:

1. List all students in class `5A`:

```sql
SELECT Name FROM Student WHERE Class = '5A';
```

2. Count the number of students in each class:

```sql
SELECT Class, COUNT(*) AS NumberOfStudents
FROM Student
GROUP BY Class;
```

3. Find all students who scored `A` in `CS101`:

```sql
SELECT Student.Name
FROM Student
JOIN Enrolment ON Student.StudentID = Enrolment.StudentID
WHERE Enrolment.CourseCode = 'CS101' AND Enrolment.Grade = 'A';
```

4. Find the average grade for each course:

```sql
SELECT Course.CourseName, AVG(Enrolment.Grade) AS AvgGrade
FROM Course
JOIN Enrolment ON Course.CourseCode = Enrolment.CourseCode
GROUP BY Course.CourseName;
```

---

## Data Validation and Verification

### Validation

Validation checks that data is reasonable and follows specified rules before it is accepted.

| Validation Type | Description                             | Example                       |
| --------------- | --------------------------------------- | ----------------------------- |
| Presence check  | Ensures data is not empty               | Name cannot be blank          |
| Type check      | Ensures correct data type               | Age must be an integer        |
| Length check    | Ensures data has correct length         | Phone number must be 8 digits |
| Range check     | Ensures data falls within a range       | Score between 0 and 100       |
| Format check    | Ensures data follows a pattern          | Email format: contains `@`    |
| Lookup check    | Compares against a list of valid values | Class must be in school list  |

### Verification

Verification ensures that data entered matches the original source.

| Method       | Description                                             |
| ------------ | ------------------------------------------------------- |
| Double entry | Data is entered twice and compared                      |
| Visual check | User visually compares entered data with the source     |
| Check digit  | A digit calculated from other digits (e.g., ISBN, HKID) |

---

## Summary Table

| Topic         | Key Concept             | Example                     |
| ------------- | ----------------------- | --------------------------- |
| Variables     | Named storage locations | `score = 85`                |
| Selection     | Conditional execution   | `if-elif-else`              |
| Iteration     | Repeated execution      | `for`, `while` loops        |
| Functions     | Reusable code blocks    | `def calculate(x):`         |
| Arrays        | Indexed collections     | `scores[0]`                 |
| Searching     | Finding elements        | Linear search               |
| Sorting       | Ordering elements       | Bubble sort                 |
| Databases     | Organised data storage  | Tables, keys, relationships |
| SQL           | Querying databases      | `SELECT`, `WHERE`, `JOIN`   |
| Normalisation | Reducing redundancy     | 1NF, 2NF, 3NF               |

---

## Exam Tips

- In pseudocode questions, use consistent indentation and clearly show the structure (IF/ENDIF,
  WHILE/ENDWHILE).
- For trace tables, show every iteration and update variable values step by step.
- In SQL questions, always specify the table name in SELECT and use WHERE to filter records.
- Know the difference between WHERE (filters rows before grouping) and HAVING (filters groups after
  grouping).
- For normalisation questions, identify the primary key first, then check for partial and transitive
  dependencies.
- In validation questions, be specific about the type of validation and give a concrete example.

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** Write pseudocode to input 10 numbers and output the smallest.

```
BEGIN
    SET smallest = 999999
    FOR i = 1 TO 10
        INPUT num
        IF num < smallest THEN
            smallest = num
        ENDIF
    NEXT i
    OUTPUT smallest
END
```

**Question 2:** Write an SQL query to find the names of all students whose score is above the
average score of their class.

```sql
SELECT s1.Name
FROM Student s1
WHERE s1.Score > (
    SELECT AVG(s2.Score)
    FROM Student s2
    WHERE s2.Class = s1.Class
);
```

**Question 3:** Explain the difference between validation and verification, giving one example of
each.

Validation checks that data is reasonable before it is stored (e.g., ensuring an age field is
between 0 and 120). Verification ensures that data matches the original source (e.g., entering a
password twice to confirm it was typed correctly).

</details>

:::

:::

:::

:::

:::

:::
