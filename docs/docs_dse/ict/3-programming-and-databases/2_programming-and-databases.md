---
id: dse-ict-programming-and-databases
title: ICT - Programming and Databases
description:
  'DSE ICT - Programming and Databases notes covering key definitions, core concepts, worked
  examples, and practice questions for detailed preparation.'
slug: ict-programming-and-databases
---

## Programming Fundamentals

### Variables and Data Types

A variable is a named storage location in memory that holds a value which can change during program
Execution.

| Data Type    | Description                 | Example          |
| ------------ | --------------------------- | ---------------- |
| Integer      | Whole numbers               | `42``-7``0`      |
| Float / Real | Numbers with decimal points | `3.14``-0.5`     |
| String       | Text enclosed in quotes     | `"Hello"``'DSE'` |
| Boolean      | Logical values              | `True``False`    |
| Character    | A single character          | `'A'``'9'`       |
| Array / List | Collection of values        | `[1, 2, 3, 4]`   |

### Constants

A constant is a named value that cannot be changed during program execution.

```python
PI = 3.14159
MAX_STUDENTS = 40
```

:::info In DSE ICT, constants are written in UPPER_CASE to distinguish them from Variables. Using
constants improves code readability and reduces errors. :::

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
| `$\ge$`  | Greater than or equal to |
| `$\le$`  | Less than or equal to    |

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
Will eventually become False. A common mistake is forgetting to update the loop variable inside the
Loop body. :::

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
Accessed by an index.

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
expresses the logic.

```python
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
Debugging.

**Example:** Trace the following algorithm with `n = 5`:

```python
sum = 0
count = 1
WHILE count <= n
    sum = sum + count
    count = count + 1
ENDWHILE
OUTPUT sum
```

| Iteration | `count` | `sum`       | `count $\le$` n |
| --------- | ------- | ----------- | --------------- |
| 1         | 1       | 0 + 1 = 1   | True            |
| 2         | 2       | 1 + 2 = 3   | True            |
| 3         | 3       | 3 + 3 = 6   | True            |
| 4         | 4       | 6 + 4 = 10  | True            |
| 5         | 5       | 10 + 5 = 15 | True            |
| 6         | 6       | 15          | False           |

Output: `sum = 15`

### Worked Example 4

Write pseudocode to find the average of an array of numbers.

```python
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
Nothing but the key. :::

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
| `$\ge$`      | Greater than or equal to    |
| `$\le$`      | Less than or equal to       |
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
| Iteration     | Repeated execution      | `for``while` loops          |
| Functions     | Reusable code blocks    | `def calculate(x):`         |
| Arrays        | Indexed collections     | `scores[0]`                 |
| Searching     | Finding elements        | Linear search               |
| Sorting       | Ordering elements       | Bubble sort                 |
| Databases     | Organised data storage  | Tables, keys, relationships |
| SQL           | Querying databases      | `SELECT``WHERE``JOIN`       |
| Normalisation | Reducing redundancy     | 1NF, 2NF, 3NF               |

---

## Exam Tips

- In pseudocode questions, use consistent indentation and show the structure (IF/ENDIF,
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

```python
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
Average score of their class.

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
Each.

Validation checks that data is reasonable before it is stored (e.g., ensuring an age field is
Between 0 and 120). Verification ensures that data matches the original source (e.g., entering a
Password twice to confirm it was typed correctly).

</details>

---

## Common Pitfalls

1. **Confusing SQL WHERE and HAVING clauses:** WHERE filters individual ROWS before grouping. HAVING
   filters GROUPS after a GROUP BY clause. Use WHERE for conditions on individual records (e.g.,
   price > 100) and HAVING for conditions on aggregate values (e.g., COUNT(\*) > 5). Applying
   aggregate functions in a WHERE clause will cause an error.

2. **Off-by-one errors in loop conditions:** When using a loop to process n items, students
   frequently set the loop condition incorrectly (e.g., using &lt;= n instead of &lt; n, or starting
   the counter at 1 instead of 0). Always trace through the loop manually for a small example to
   verify the boundary conditions are correct.

3. **Not normalising databases sufficiently:** A database table should not contain redundant data.
   If a customer's address appears in multiple order records, the design is not normalised. Each
   piece of data should appear in only one place. Violating normalisation leads to update anomalies,
   insertion anomalies, and deletion anomalies.

4. **Confusing PRIMARY KEY with FOREIGN KEY:** A primary key uniquely identifies each record in its
   table and cannot be NULL. A foreign key is a field in one table that references the primary key
   of another table, establishing a relationship. A field can be both a primary key in its own table
   and a foreign key referencing another table.

5. **Assignment vs comparison in IF statements:** Using `=` (assignment) instead of `==`
   (comparison) in an IF condition will assign the value rather than compare it. This is one of the
   most common logical errors in programming.

6. **Forgetting to initialise variables:** Using a variable before assigning it a value leads to
   undefined behaviour. Always initialise variables before use, especially counters and accumulators
   in loops.

7. **Infinite WHILE loops:** If the loop condition never becomes false, the program will run
   indefinitely. Always ensure the loop variable is updated inside the loop body.

8. **Array index out of bounds:** Accessing an index that does not exist (e.g., index 5 in an array
   of size 5, where valid indices are 0--4) causes a runtime error. Remember that arrays are
   0-indexed in most languages.

9. **DELETE without WHERE:** Executing `DELETE FROM Student` without a WHERE clause removes ALL
   records from the table. This is irreversible. Always double-check the WHERE clause.

10. **Confusing function and procedure:** A function returns a value; a procedure does not. In DSE
    ICT, this distinction is tested. If the algorithm needs to produce a result, use a function with
    a RETURN statement.

---

## Practice Problems

<details>
<summary>Question 1: Trace Table</summary>

Trace the following algorithm with inputs `A = 5``B = 3`.

```python
BEGIN
    INPUT A, B
    SET result = A
    WHILE B > 0
        SET result = result + A
        SET B = B - 1
    ENDWHILE
    OUTPUT result
END
```

(a) Complete the trace table.

(b) State what this algorithm calculates.

Answer:

(a)

| Iteration | B   | result | B > 0 |
| --------- | --- | ------ | ----- |
| Initial   | 3   | 5      | True  |
| 1         | 2   | 10     | True  |
| 2         | 1   | 15     | True  |
| 3         | 0   | 20     | False |

Output: `result = 20`

(b) This algorithm calculates `A * (B + 1)`. With A=5, B=3, it computes 5 \* 4 = 20. Alternatively,
it can be described as multiplying A by (initial B + 1).

</details>

<details>
<summary>Question 2: Sorting Algorithm</summary>

(a) Write pseudocode for a bubble sort algorithm that sorts an array of N numbers in ascending
order.

(b) Trace the first two passes of the bubble sort on the array: `[5, 3, 8, 1, 4]`.

Answer:

(a)

```python
BEGIN
    INPUT N
    FOR i = 0 TO N - 1
        INPUT numbers[i]
    NEXT i
    FOR i = 0 TO N - 2
        FOR j = 0 TO N - 2 - i
            IF numbers[j] > numbers[j + 1] THEN
                SET temp = numbers[j]
                SET numbers[j] = numbers[j + 1]
                SET numbers[j + 1] = temp
            ENDIF
        NEXT j
    NEXT i
    FOR i = 0 TO N - 1
        OUTPUT numbers[i]
    NEXT i
END
```

(b) Initial array: `[5, 3, 8, 1, 4]`

**Pass 1 (i=0):**

| j   | Compare | Action  | Array after swap |
| --- | ------- | ------- | ---------------- |
| 0   | 5 > 3   | Swap    | [3, 5, 8, 1, 4]  |
| 1   | 5 > 8   | No swap | [3, 5, 8, 1, 4]  |
| 2   | 8 > 1   | Swap    | [3, 5, 1, 8, 4]  |
| 3   | 8 > 4   | Swap    | [3, 5, 1, 4, 8]  |

After Pass 1: `[3, 5, 1, 4, 8]` (8 is in final position)

**Pass 2 (i=1):**

| j   | Compare | Action  | Array after swap |
| --- | ------- | ------- | ---------------- |
| 0   | 3 > 5   | No swap | [3, 5, 1, 4, 8]  |
| 1   | 5 > 1   | Swap    | [3, 1, 5, 4, 8]  |
| 2   | 5 > 4   | Swap    | [3, 1, 4, 5, 8]  |

After Pass 2: `[3, 1, 4, 5, 8]` (5 and 8 are in final positions)

</details>

<details>
<summary>Question 3: Database Normalisation</summary>

A company records orders in a single table:

| OrderID | CustomerName | CustomerAddress | ProductCode | ProductName | Quantity | UnitPrice |
| ------- | ------------ | --------------- | ----------- | ----------- | -------- | --------- |
| 001     | Chan         | 10 Main St      | P01         | Keyboard    | 2        | 200       |
| 002     | Lee          | 5 Oak Rd        | P02         | Mouse       | 1        | 150       |
| 003     | Chan         | 10 Main St      | P02         | Mouse       | 3        | 150       |

(a) Identify the redundancies in this table.

(b) Convert this table to Third Normal Form (3NF). Show all tables with primary keys and foreign
keys.

(c) Explain why the normalised design is better than the original.

Answer:

(a) Redundancies:

- CustomerName and CustomerAddress are repeated for Chan (appears in OrderID 001 and 003).
- ProductName and UnitPrice are repeated for P02/Mouse (appears in OrderID 002 and 003).
- If Chan's address changes, multiple records must be updated (update anomaly).

(b) **3NF Tables:**

**Customer** (CustomerID PK, CustomerName, CustomerAddress)

| CustomerID | CustomerName | CustomerAddress |
| ---------- | ------------ | --------------- |
| C01        | Chan         | 10 Main St      |
| C02        | Lee          | 5 Oak Rd        |

**Product** (ProductCode PK, ProductName, UnitPrice)

| ProductCode | ProductName | UnitPrice |
| ----------- | ----------- | --------- |
| P01         | Keyboard    | 200       |
| P02         | Mouse       | 150       |

**Order** (OrderID PK, CustomerID FK, OrderDate)

| OrderID | CustomerID FK |
| ------- | ------------- |
| 001     | C01           |
| 002     | C02           |
| 003     | C01           |

**OrderLine** (OrderID FK, ProductCode FK, Quantity) -- composite PK

| OrderID FK | ProductCode FK | Quantity |
| ---------- | -------------- | -------- |
| 001        | P01            | 2        |
| 002        | P02            | 1        |
| 003        | P02            | 3        |

(c) The normalised design eliminates data redundancy (customer and product details stored once),
improves data integrity (no update, insertion, or deletion anomalies), and makes queries more
flexible (e.g., finding all orders by a customer is done via the CustomerID foreign key).

</details>

<details>
<summary>Question 4: SQL Queries</summary>

Given the following tables from the normalised design above:

- Customer (CustomerID, CustomerName, CustomerAddress)
- Product (ProductCode, ProductName, UnitPrice)
- Order (OrderID, CustomerID, OrderDate)
- OrderLine (OrderID, ProductCode, Quantity)

Write SQL queries for:

(a) List all customer names who live on "Main St".

(b) Find the total quantity of each product ordered.

(c) Find the customer name and product name for all orders.

(d) Find the total revenue (Quantity \* UnitPrice) for each order.

Answer:

(a)

```sql
SELECT CustomerName
FROM Customer
WHERE CustomerAddress LIKE '%Main St%';
```

(b)

```sql
SELECT ProductCode, SUM(Quantity) AS TotalQuantity
FROM OrderLine
GROUP BY ProductCode;
```

(c)

```sql
SELECT Customer.CustomerName, Product.ProductName
FROM Customer
JOIN Order ON Customer.CustomerID = Order.CustomerID
JOIN OrderLine ON Order.OrderID = OrderLine.OrderID
JOIN Product ON OrderLine.ProductCode = Product.ProductCode;
```

(d)

```sql
SELECT Order.OrderID, SUM(OrderLine.Quantity * Product.UnitPrice) AS TotalRevenue
FROM Order
JOIN OrderLine ON Order.OrderID = OrderLine.OrderID
JOIN Product ON OrderLine.ProductCode = Product.ProductCode
GROUP BY Order.OrderID;
```

</details>

<details>
<summary>Question 5: Programming with Functions</summary>

(a) Write a function in pseudocode that takes an array of numbers and returns the average.

(b) Write a procedure that takes a student's score and prints the corresponding grade (A: &gt;= 80,
B: &gt;= 60, C: &gt;= 40, F: &lt; 40).

(c) Explain the difference between a function and a procedure.

Answer:

(a)

```python
FUNCTION calculateAverage(numbers, size)
    SET total = 0
    FOR i = 0 TO size - 1
        total = total + numbers[i]
    NEXT i
    RETURN total / size
END FUNCTION
```

(b)

```python
PROCEDURE printGrade(score)
    IF score >= 80 THEN
        OUTPUT "Grade: A"
    ELSE IF score >= 60 THEN
        OUTPUT "Grade: B"
    ELSE IF score >= 40 THEN
        OUTPUT "Grade: C"
    ELSE
        OUTPUT "Grade: F"
    ENDIF
END PROCEDURE
```

(c) A **function** performs a task and returns a value to the calling code (using a RETURN
statement). It can be used within expressions (e.g., `x = calculateAverage(arr, 5)`). A
**procedure** performs a task but does not return a value. It is called as a standalone statement
(e.g., `printGrade(75)`). The key distinction in DSE ICT is whether the subprogram produces a return
value.

</details>

<details>
<summary>Question 6: File Handling and Data Processing</summary>

A text file `scores.txt` contains student scores, one per line. Write a program that:

(a) Reads all scores from the file.

(b) Calculates and outputs the average score.

(c) Counts and outputs how many students scored above the average.

Answer:

```python
BEGIN
    SET scores = empty array
    SET count = 0
    SET total = 0

    OPEN FILE "scores.txt" FOR READ
        WHILE NOT end of file
            READ score FROM FILE
            APPEND score TO scores
            total = total + score
            count = count + 1
        ENDWHILE
    CLOSE FILE

    IF count > 0 THEN
        SET average = total / count
        OUTPUT "Average: " + average

        SET aboveAverage = 0
        FOR i = 0 TO count - 1
            IF scores[i] > average THEN
                aboveAverage = aboveAverage + 1
            ENDIF
        NEXT i
        OUTPUT "Students above average: " + aboveAverage
    ELSE
        OUTPUT "No data found."
    ENDIF
END
```

This program reads scores into an array while accumulating the total. It then computes the average,
iterates through the array again to count scores above average, and outputs both results.

</details>

:::

:::

:::

:::

:::

:::danger Common Pitfalls

- **Confusing SQL WHERE and HAVING clauses:** WHERE filters individual ROWS before grouping. HAVING
  filters GROUPS after a GROUP BY clause. Use WHERE for conditions on individual records (e.g.,
  price &gt; 100) and HAVING for conditions on aggregate values (e.g., COUNT(\*) &gt; 5). Applying
  aggregate functions in a WHERE clause will cause an error.

- **Off-by-one errors in loop conditions:** When using a loop to process n items, students
  frequently set the loop condition incorrectly (e.g., using &lt;= n instead of &lt; n, or starting
  the counter at 1 instead of 0). Always trace through the loop manually for a small example to
  verify the boundary conditions are correct.

- **Not normalising databases sufficiently:** A database table should not contain redundant data. If
  a customer's address appears in multiple order records, the design is not normalised. Each piece
  of data should appear in only one place. Violating normalisation leads to update anomalies,
  insertion anomalies, and deletion anomalies.

- **Confusing PRIMARY KEY with FOREIGN KEY:** A primary key uniquely identifies each record in its
  table and cannot be NULL. A foreign key is a field in one table that references the primary key of
  another table, establishing a relationship. A field can be both a primary key in its own table and
  a foreign key referencing another table.

:::

## Worked Examples
