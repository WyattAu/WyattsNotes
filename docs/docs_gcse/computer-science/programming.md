---
title: Programming
date: 2026-04-14
tags:
  - Computer Science
  - GCSE
categories:
  - Computer Science
slug: programming
---

## Programming

:::info
Board Coverage AQA Paper 1 & 2 | Edexcel Paper 1 & 2 | OCR J277 Paper 1 & 2 | WJEC Unit 1 &
2
:::

## 1. Programming Concepts

### 1.1 Variables and Constants

A **variable** is a named storage location whose value can change during program execution.

A **constant** is a named value that does not change once assigned.

```python
# Variables
age = 15
name = "Alice"
height = 1.65

# Constants (convention: UPPER_CASE)
PI = 3.14159
MAX_SCORE = 100
```

**Data types:**

| Type       | Description                 | Example          |
| ---------- | --------------------------- | ---------------- |
| Integer    | Whole numbers               | 42, -7, 0        |
| Real/Float | Numbers with decimal places | 3.14, -0.5       |
| String     | Text enclosed in quotes     | "Hello", 'World' |
| Character  | A single character          | 'A', '7'         |
| Boolean    | True or False               | True, False      |

### 1.2 Input and Output

```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print("Hello, " + name + ". You are " + str(age) + " years old.")
```

### 1.3 Selection

**IF statement:**

```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You can vote.")
elif age >= 16:
    print("You can work but not vote.")
else:
    print("You are too young.")
```

**Nested IF:**

```python
score = 75

if score >= 50:
    if score >= 70:
        print("Grade A")
    else:
        print("Grade C")
else:
    print("Fail")
```

### 1.4 Iteration

**Count-controlled (FOR loop):**

```python
for i in range(1, 11):
    print(i)
```

**Condition-controlled (WHILE loop):**

```python
total = 0
while total < 100:
    number = int(input("Enter a number: "))
    total = total + number
print("Total:", total)
```

**Nested loops:**

```python
for i in range(1, 4):
    for j in range(1, 4):
        print(i, "x", j, "=", i * j)
```

## 2. Data Structures

### 2.1 One-Dimensional Arrays

An **array** is a data structure that stores a fixed number of elements of the same data type,
accessed by an index.

```python
scores = [85, 92, 78, 95, 88]

# Accessing elements (0-indexed)
print(scores[0])  # 85
print(scores[3])  # 95

# Modifying elements
scores[2] = 80

# Finding the length
print(len(scores))  # 5
```

### 2.2 Two-Dimensional Arrays

A **2D array** is an array of arrays, representing a table or grid.

```python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grid[0][2])  # 3
print(grid[2][1])  # 8

# Iterating over a 2D array
for row in range(len(grid)):
    for col in range(len(grid[row])):
        print(grid[row][col], end=" ")
    print()
```

### 2.3 Records

A **record** is a data structure that groups related data items of different types under a single
name.

```python
student = {
    "name": "Alice",
    "age": 15,
    "form": "10B",
    "scores": [85, 92, 78]
}

print(student["name"])
student["age"] = 16
```

## 3. Subprograms

### 3.1 Procedures and Functions

A **procedure** performs a task but does not return a value. A **function** performs a task and
returns a value.

```python
# Procedure
def greet(name):
    print("Hello, " + name + "!")

greet("Alice")

# Function
def calculate_area(length, width):
    area = length * width
    return area

room_area = calculate_area(5.5, 3.2)
print("Area:", room_area)
```

### 3.2 Parameters and Arguments

**Parameters** are variables listed in the function definition. **Arguments** are the actual values
passed when the function is called.

```python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)  # a=5, b=3
```

**Parameters by value vs. by reference:**

- **By value:** A copy of the argument is passed; changes inside the function do not affect the
  original
- **By reference:** A reference to the original is passed; changes inside the function affect the
  original

In Python, immutable types (int, float, string, tuple) are passed by value. Mutable types (list,
dict) are passed by reference.

### 3.3 Local and Global Variables

```python
total = 0  # Global variable

def add_to_total(value):
    global total
    total = total + value  # Modifying the global variable

add_to_total(10)
print(total)  # 10
```

**Best practice:** Use local variables wherever possible to avoid unintended side effects.

### 3.4 Recursion

**Recursion** is when a function calls itself. Every recursive function must have a **base case**
(stopping condition) to prevent infinite recursion.

```python
def factorial(n):
    if n == 0:
        return 1  # Base case
    else:
        return n * factorial(n - 1)  # Recursive case

print(factorial(5))  # 120
```

**Trace:** factorial(5) = 5 _ factorial(4) = 5 _ 4 _ factorial(3) = 5 _ 4 _ 3 _ factorial(2) = 5 _ 4
_ 3 _ 2 _ factorial(1) = 5 _ 4 _ 3 _ 2 _ 1 _ factorial(0) = 5 _ 4 _ 3 _ 2 _ 1 _ 1 = 120.

## 4. String Manipulation

### 4.1 Common String Operations

```python
name = "Hello World"

print(len(name))         # 11 (length)
print(name[0])           # H (first character)
print(name[-1])          # d (last character)
print(name[0:5])         # Hello (substring)
print(name.upper())      # HELLO WORLD
print(name.lower())      # hello world
print(name.strip())      # removes whitespace
print(name.replace("World", "Python"))  # Hello Python
print(name.split(" "))   # ['Hello', 'World']
```

### 4.2 String Concatenation and Conversion

```python
first_name = "Alice"
last_name = "Smith"
full_name = first_name + " " + last_name

age = 15
message = "You are " + str(age) + " years old."
```

### 4.3 String Validation

```python
# Check if input is numeric
password = input("Enter a number: ")
if password.isdigit():
    print("Valid number")
else:
    print("Not a number")

# Check length
if len(password) >= 8:
    print("Password is long enough")
```

## 5. File Handling

### 5.1 Reading from a File

```python
file = open("data.txt", "r")
content = file.read()
print(content)
file.close()

# Reading line by line
file = open("data.txt", "r")
for line in file:
    print(line.strip())
file.close()
```

### 5.2 Writing to a File

```python
# Overwrite mode
file = open("output.txt", "w")
file.write("Hello, World!\n")
file.write("Second line\n")
file.close()

# Append mode
file = open("output.txt", "a")
file.write("Third line\n")
file.close()
```

### 5.3 CSV Files

```python
# Reading CSV
import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row[0], row[1])
```

## 6. Validation and Verification

### 6.1 Validation

**Validation** checks that data is sensible and reasonable (but not necessarily correct).

| Type           | Check                               | Example                     |
| -------------- | ----------------------------------- | --------------------------- |
| Range check    | Value is within an acceptable range | Age between 0 and 120       |
| Type check     | Correct data type                   | Input is an integer         |
| Length check   | Correct number of characters        | Password is 8-20 characters |
| Presence check | Data has been entered               | Name field is not empty     |
| Format check   | Correct pattern (e.g. email format) | Contains @ symbol           |

```python
def validate_age(age):
    try:
        age = int(age)
        if 0 <= age <= 120:
            return True
        else:
            print("Age must be between 0 and 120.")
            return False
    except ValueError:
        print("Please enter a whole number.")
        return False
```

### 6.2 Verification

**Verification** checks that data has been entered correctly (matches the source).

- **Double entry:** Data is entered twice and the two entries are compared
- **Visual check:** Data is checked by a person against the original source document

## 7. Robustness and Error Handling

### 7.1 Using Try/Except

```python
try:
    numerator = int(input("Enter numerator: "))
    denominator = int(input("Enter denominator: "))
    result = numerator / denominator
    print("Result:", result)
except ValueError:
    print("Please enter valid integers.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

### 7.2 Defensive Programming

Writing code that anticipates and handles potential errors:

```python
def get_positive_integer(prompt):
    while True:
        try:
            value = int(input(prompt))
            if value > 0:
                return value
            else:
                print("Please enter a positive number.")
        except ValueError:
            print("Please enter a whole number.")

age = get_positive_integer("Enter your age: ")
```

## Common Pitfalls

- **Off-by-one errors with arrays.** Most languages use 0-based indexing; the last element is at
  index $n-1$.
- **Confusing = and ==.** A single = is assignment; == is comparison.
- **Forgetting to close files.** Always close files after use, or use a `with` statement.
- **Infinite loops.** Ensure the condition in a WHILE loop will eventually become false.
- **Not handling invalid input.** Always validate and handle potential errors in user input.
- **Confusing local and global scope.** Use the `global` keyword only when necessary.

## Practice Questions

1. Write a function that takes an array of integers and returns the average.

2. Write a program that reads 20 numbers from a file, sorts them using bubble sort, and writes the
   sorted list to another file.

3. Write a recursive function to calculate the $n$-th Fibonacci number.

4. Write a program that validates a password: at least 8 characters, contains at least one digit and
   one uppercase letter.

5. Write a function that takes a 2D array (3x3) and returns the sum of all elements in the main
   diagonal.

6. Write a program that uses a trace table to count the frequency of each character in a string.

7. Explain the difference between validation and verification, giving an example of each.

8. Write a program that reads student records from a CSV file and displays the names of students who
   scored above 80.

9. Write a function that takes a string and returns True if it is a palindrome (reads the same
   forwards and backwards).

10. Write a program that repeatedly asks the user for a number until they enter a valid positive
    integer, then displays the square root.
