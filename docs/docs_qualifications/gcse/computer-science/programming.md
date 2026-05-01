---
title: Programming
description:
  "Programming — 1.1 Variables and Constants; Variables; Constants (convention: UPPER_CASE); 1.2 Input and Output with worked examples and exam-style questions."
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

**Why use constants?** If a value like the VAT rate (20%) appears in many places in your code, using
a constant `VAT_RATE = 0.20` means you only need to change it in one place if the rate changes. This
reduces errors and makes the code easier to maintain.

**Data types:**

| Type       | Description                 | Example          |
| ---------- | --------------------------- | ---------------- |
| Integer    | Whole numbers               | 42, -7, 0        |
| Real/Float | Numbers with decimal places | 3.14, -0.5       |
| String     | Text enclosed in quotes     | "Hello", 'World' |
| Character  | A single character          | 'A', '7'         |
| Boolean    | True or False               | True, False      |

**Type casting** converts a value from one type to another:

```python
age_str = "15"
age_int = int(age_str)       # String to integer
price = 9.99
price_int = int(price)       # Float to integer (truncates to 9)
number = 42
number_str = str(number)     # Integer to string
```

### 1.2 Input and Output

```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print("Hello, " + name + ". You are " + str(age) + " years old.")
```

**Formatted output (f-strings):**

```python
name = "Alice"
age = 15
print(f"Hello, {name}. You are {age} years old.")
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

**Nested IF pitfall.** In the example above, the inner `if score >= 70` only executes when
`score >= 50`. If `score = 80`, the output is "Grade A". If `score = 60`, the output is "Grade C".
If `score = 40`, the output is "Fail". Think carefully about the nesting order to avoid unreachable
branches.

**CASE / SELECT statements (pseudocode):**

```
CASE grade OF
    "A": PRINT "Excellent"
    "B": PRINT "Good"
    "C": PRINT "Satisfactory"
    OTHERWISE: PRINT "Below expectations"
ENDCASE
```

In Python, this can be simulated with `if/elif/else` or a dictionary:

```python
grade = "B"
messages = {
    "A": "Excellent",
    "B": "Good",
    "C": "Satisfactory"
}
print(messages.get(grade, "Below expectations"))
```

### 1.4 Iteration

**Count-controlled (FOR loop):**

```python
for i in range(1, 11):
    print(i)
```

`range(start, stop)` generates integers from `start` up to but **not including** `stop`. So
`range(1, 11)` gives 1, 2, 3, ..., 10.

`range(n)` is shorthand for `range(0, n)`, giving 0, 1, ..., n-1.

`range(start, stop, step)` allows a custom step:

```python
for i in range(0, 20, 5):
    print(i)  # 0, 5, 10, 15
```

**Condition-controlled (WHILE loop):**

```python
total = 0
while total < 100:
    number = int(input("Enter a number: "))
    total = total + number
print("Total:", total)
```

**DO...UNTIL loop (pseudocode):**

A post-test loop that always executes at least once:

```
DO
    INPUT number
UNTIL number >= 1 AND number <= 10
```

Python has no built-in `DO...UNTIL`. The equivalent pattern is:

```python
while True:
    number = int(input("Enter a number between 1 and 10: "))
    if 1 <= number <= 10:
        break
```

**Nested loops:**

```python
for i in range(1, 4):
    for j in range(1, 4):
        print(i, "x", j, "=", i * j)
```

The inner loop runs completely for each iteration of the outer loop. For nested loops with $n$ and
$m$ iterations, the total number of iterations is $n \times m$.

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

# Iterating over an array
for score in scores:
    print(score)

# Iterating with index
for i in range(len(scores)):
    print(f"Index {i}: {scores[i]}")
```

**Common array operations:**

```python
scores.append(76)       # Add to end
scores.insert(2, 90)    # Insert at index 2
scores.remove(78)       # Remove first occurrence of 78
popped = scores.pop()   # Remove and return last element
popped = scores.pop(0)  # Remove and return first element
index = scores.index(92)  # Find index of first occurrence
count = scores.count(85)  # Count occurrences
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

**Access pattern:** `grid[row][col]` -- the first index selects the row, the second selects the
column. Think of a spreadsheet: you pick the row first, then the column.

**Practical example:** Representing a tic-tac-toe board:

```python
board = [
    ["X", "O", "X"],
    [" ", "X", "O"],
    ["O", " ", " "]
]

def print_board(board):
    for row in board:
        print("|".join(row))
    print("-" * 5)

print_board(board)
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

Records are useful because they group related data. Instead of having separate variables
`student_name`, `student_age`, `student_form`, a record keeps them together logically.

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

**Why use subprograms?**

- **Reusability:** Write once, call many times
- **Abstraction:** The caller does not need to know how the function works internally
- **Modularity:** Break a large program into smaller, manageable pieces
- **Testing:** Each function can be tested independently

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

```python
def modify_list(items):
    items.append(4)  # Modifies the original list

def modify_number(n):
    n = n + 1  # Does NOT modify the original

my_list = [1, 2, 3]
modify_list(my_list)
print(my_list)  # [1, 2, 3, 4]

my_number = 10
modify_number(my_number)
print(my_number)  # 10
```

### 3.3 Local and Global Variables

```python
total = 0  # Global variable

def add_to_total(value):
    global total
    total = total + value  # Modifying the global variable

add_to_total(10)
print(total)  # 10
```

**Scope rules:** A variable created inside a function is **local** to that function and cannot be
accessed from outside. A variable created outside any function is **global** and can be read by any
function, but can only be modified with the `global` keyword.

**Best practice:** Use local variables wherever possible to avoid unintended side effects. Global
variables make code harder to debug because any function can modify them.

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

**Trace:** factorial(5) = 5 _ factorial(4) = 5 _ 4 _ factorial(3) = 5 _ 4 _ 3 _ factorial(2) = 5

- 4 _ 3 _ 2 _ factorial(1) = 5 _ 4 _ 3 _ 2 _ 1 _ factorial(0) = 5 _ 4 _ 3 _ 2 _ 1 \* 1 = 120.

**The call stack.** Each recursive call adds a new frame to the call stack. For `factorial(5)`, the
stack grows to 6 frames before the base case is reached. Then the frames are unwound as each call
returns. If there is no base case, the stack grows until memory is exhausted, causing a
**StackOverflowError**.

**When to use recursion vs iteration:** Any recursive function can be rewritten as an iterative
version (using a loop). Iteration is generally more memory-efficient because it does not add frames
to the call stack. Recursion is more natural for problems with a self-similar structure, such as
tree traversal or divide-and-conquer algorithms.

## 4. String Manipulation

### 4.1 Common String Operations

```python
name = "Hello World"

print(len(name))         # 11 (length)
print(name[0])           # H (first character)
print(name[-1])          # d (last character)
print(name[0:5])         # Hello (substring from index 0 to 4)
print(name[6:])          # World (substring from index 6 to end)
print(name.upper())      # HELLO WORLD
print(name.lower())      # hello world
print(name.strip())      # removes leading and trailing whitespace
print(name.replace("World", "Python"))  # Hello Python
print(name.split(" "))   # ['Hello', 'World']
print(name.find("World"))  # 6 (index of first occurrence)
```

### 4.2 String Concatenation and Conversion

```python
first_name = "Alice"
last_name = "Smith"
full_name = first_name + " " + last_name

age = 15
message = "You are " + str(age) + " years old."
```

**f-strings** (formatted string literals) are preferred for readability:

```python
message = f"You are {age} years old."
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

### 4.4 String Traversal

```python
word = "Python"
for i in range(len(word)):
    print(word[i])

for char in word:
    print(char)
```

### 4.5 Palindrome Check (Higher Tier)

A palindrome reads the same forwards and backwards.

```python
def is_palindrome(word):
    word = word.lower()
    return word == word[::-1]

print(is_palindrome("Racecar"))  # True
print(is_palindrome("Hello"))    # False
```

The slice `word[::-1]` reverses the string. The `[::-1]` syntax means: start at the end, move
backwards with a step of -1.

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

### 5.3 The `with` Statement

The `with` statement automatically closes the file, even if an exception occurs. This is the
recommended approach.

```python
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
```

### 5.4 CSV Files

```python
import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row[0], row[1])

with open("output.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Name", "Score"])
    writer.writerow(["Alice", 92])
    writer.writerow(["Bob", 78])
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

**Comprehensive validation example:**

```python
def validate_password(password):
    if len(password) < 8:
        return False, "Password must be at least 8 characters."
    if not any(c.isupper() for c in password):
        return False, "Password must contain an uppercase letter."
    if not any(c.isdigit() for c in password):
        return False, "Password must contain a digit."
    return True, "Password is valid."

result, message = validate_password("Password123")
print(message)
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

**How try/except works:** Python attempts the code in the `try` block. If an error occurs, it
immediately jumps to the matching `except` block. If no error occurs, the `except` block is skipped.

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

## 8. Random Number Generation

```python
import random

# Random integer between 1 and 10 (inclusive)
dice = random.randint(1, 6)
print(f"You rolled: {dice}")

# Random float between 0 and 1
r = random.random()

# Random choice from a list
colours = ["red", "green", "blue"]
choice = random.choice(colours)

# Shuffle a list
deck = [1, 2, 3, 4, 5]
random.shuffle(deck)
```

## Common Pitfalls

- **Off-by-one errors with arrays.** Most languages use 0-based indexing; the last element is at
  index $n-1$. Accessing `array[n]` causes an `IndexError`.
- **Confusing = and ==.** A single `=` is assignment; `==` is comparison. Writing `if x = 5` in
  Python is a syntax error, but in some pseudocode contexts it can cause subtle bugs.
- **Forgetting to close files.** Always close files after use, or use a `with` statement. Leaving
  files open can cause data corruption or resource leaks.
- **Infinite loops.** Ensure the condition in a WHILE loop will eventually become false. If the loop
  variable never changes inside the loop body, the loop runs forever.
- **Not handling invalid input.** Always validate and handle potential errors in user input. A user
  might type "abc" when asked for their age.
- **Confusing local and global scope.** Use the `global` keyword only when necessary. Overusing
  global variables makes code hard to debug and test.
- **Integer division in Python 2 vs Python 3.** In Python 3, `5 / 2` gives `2.5`. In Python 2, it
  gives `2`. Use `//` for integer division in Python 3: `5 // 2` gives `2`.
- **String immutability.** Strings cannot be modified in place. Operations like `upper()` and
  `replace()` return new strings; they do not modify the original.

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

11. **(Higher Tier)** Write a function that takes two arrays and returns a new array containing
    elements that appear in both arrays (intersection).

12. **(Higher Tier)** Write a program that simulates a simple quiz. It should read questions and
    answers from a file, display each question, accept the user's answer, and keep score.
