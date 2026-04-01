---
title: Data Representation in Programming
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: data-representation-in-programming
---

## 1. Primitive Types and Their Representation

### Integer Representation

Programming languages provide integer types of various sizes:

| Type  | Size    | Range (signed)        | Range (unsigned) |
| ----- | ------- | --------------------- | ---------------- |
| byte  | 8 bits  | $[-128, 127]$         | $[0, 255]$       |
| short | 16 bits | $[-32768, 32767]$     | $[0, 65535]$     |
| int   | 32 bits | $[-2^{31}, 2^{31}-1]$ | $[0, 2^{32}-1]$  |
| long  | 64 bits | $[-2^{63}, 2^{63}-1]$ | $[0, 2^{64}-1]$  |

Python integers have arbitrary precision — they grow to accommodate any value, limited only by available memory.

### Floating-Point Representation

IEEE 754 double precision (64 bits): 1 sign bit, 11 exponent bits, 52 mantissa bits.

**Precision issues:**

```python
>>> 0.1 + 0.2
0.30000000000000004
>>> 0.1 + 0.2 == 0.3
False
```

**Why:** $0.1$ cannot be represented exactly in binary floating point (like $1/3$ cannot be represented exactly in decimal).

:::warning Pitfall
Never use `==` to compare floating-point numbers. Use `abs(a - b) < epsilon` with a small tolerance (e.g., `1e-9`).

```python
def approx_equal(a, b, epsilon=1e-9):
    return abs(a - b) < epsilon
```

:::

---

## 2. Pointers and References

### Definition

A **pointer** is a variable that stores the **memory address** of another variable. A **reference** is an alias for an existing variable.

### Pointers in Low-Level Languages

```c
int x = 42;
int *ptr = &x;    // ptr stores the address of x
*ptr = 10;        // dereference: change x to 10
```

### Python's Model: References, Not Pointers

Python does not have explicit pointers. Variables are **references** to objects in memory.

```python
a = [1, 2, 3]
b = a       # b references the SAME list object
b[0] = 99
print(a)    # [99, 2, 3] — a is also modified!
```

**Key distinction:**

| Operation                           | Effect                                 |
| ----------------------------------- | -------------------------------------- |
| `b = a`                             | `b` references the same object as `a`  |
| `b = a.copy()`                      | `b` references a new, independent copy |
| `b = list(a)`                       | Same as `a.copy()`                     |
| `import copy; b = copy.deepcopy(a)` | Deep copy (copies nested objects)      |

### Aliasing

**Aliasing** occurs when two variables reference the same object. This can lead to unintended side effects.

```python
def append_one(lst):
    lst.append(1)     # Modifies the original list!

my_list = [0]
append_one(my_list)
print(my_list)  # [0, 1]
```

---

## 3. Strings

### Definition

A **string** is a sequence of characters. Internally, strings are represented as arrays of character codes (e.g., UTF-8 or UTF-16).

### String Operations and Complexity

| Operation        | Python method  | Time                              |
| ---------------- | -------------- | --------------------------------- |
| Access character | `s[i]`         | $O(1)$                            |
| Length           | `len(s)`       | $O(1)$                            |
| Concatenation    | `s1 + s2`      | $O(n+m)$                          |
| Substring search | `s1 in s2`     | $O(nm)$ naive, $O(n+m)$ optimized |
| Split            | `s.split(sep)` | $O(n)$                            |
| Slice            | `s[a:b]`       | $O(b-a)$                          |

:::warning Pitfall
In Python, strings are **immutable** — you cannot modify individual characters. `s[0] = 'x'` raises a `TypeError`. Use `s = 'x' + s[1:]` to create a new string.
:::

### String Immutability

Strings are immutable for several reasons:

1. **Security:** Prevents sensitive data from being modified in memory
2. **Thread safety:** Immutable objects are inherently thread-safe
3. **Hashing:** Immutable strings can be used as dictionary keys (hash is stable)
4. **Interning:** Python can reuse identical string objects, saving memory

---

## 4. File Handling

### File Modes

| Mode   | Description  | Creates? | Truncates? |
| ------ | ------------ | -------- | ---------- |
| `'r'`  | Read         | No       | No         |
| `'w'`  | Write        | Yes      | Yes        |
| `'a'`  | Append       | Yes      | No         |
| `'r+'` | Read + Write | No       | No         |

### Reading Files

```python
with open("data.txt", "r") as f:
    content = f.read()         # Entire file as string
    lines = f.readlines()      # List of lines
```

### Writing Files

```python
with open("output.txt", "w") as f:
    f.write("Hello, World!\n")
    f.writelines(["Line 1\n", "Line 2\n"])
```

### CSV Files

```python
import csv

with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age"])
    writer.writerow(["Alice", 25])
```

### The `with` Statement

The `with` statement ensures the file is properly closed, even if an exception occurs during file operations. This is an example of **context management**.

```python
with open("file.txt", "r") as f:
    data = f.read()
# File is automatically closed here
```

---

## 5. Exception Handling

### Definition

An **exception** is an event that disrupts the normal flow of program execution. **Exception handling** allows a program to detect and recover from errors gracefully.

### Structure

```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except (TypeError, ValueError) as e:
    print(f"Type/Value error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No exceptions occurred")
finally:
    print("This always runs")
```

### Exception Hierarchy

```
BaseException
├── SystemExit
├── KeyboardInterrupt
├── GeneratorExit
└── Exception
    ├── ArithmeticError
    │   ├── ZeroDivisionError
    │   └── OverflowError
    ├── LookupError
    │   ├── IndexError
    │   └── KeyError
    ├── TypeError
    ├── ValueError
    ├── FileNotFoundError
    └── ...
```

### Best Practices

1. **Catch specific exceptions**, not bare `except:`
2. **Use `finally`** for cleanup (closing files, releasing resources)
3. **Don't use exceptions for normal flow control**
4. **Raise exceptions** for truly exceptional conditions

```python
def set_age(age):
    if age < 0:
        raise ValueError(f"Age cannot be negative: {age}")
    self._age = age
```

### Custom Exceptions

```python
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f"Insufficient funds: balance={balance}, requested={amount}")
```

---

## Problem Set

**Problem 1.** Explain why `0.1 + 0.2 != 0.3` in most programming languages. What is the binary representation of 0.1?

<details><summary>Answer</summary><div>

$0.1$ in binary: $0.1_{10} = 0.0001100110011\ldots_2$ (repeating). This cannot be represented exactly in a finite number of binary digits. The IEEE 754 double-precision representation stores an approximation, which introduces a small rounding error. When $0.1$ and $0.2$ (both approximations) are added, the result is $0.30000000000000004$, not exactly $0.3$.

Solution: use `abs(a - b) < 1e-9` for comparison, or use the `decimal` module for exact decimal arithmetic.

</div></details>

**Problem 2.** What is the output of the following code? Explain.

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)
print(a is b)
```

<details><summary>Answer</summary><div>

```
[1, 2, 3, 4]
True
```

`b = a` makes `b` reference the same list object as `a` (aliasing). Modifying `b` also modifies `a`. `a is b` returns `True` because they reference the same object.

To avoid this: `b = a.copy()` or `b = a[:]`.

</div></details>

**Problem 3.** Write a function that reads a file and counts the occurrences of each word. Handle the case where the file does not exist.

<details><summary>Answer</summary><div>

```python
from collections import Counter

def count_words(filename):
    try:
        with open(filename, "r") as f:
            content = f.read().lower()
            words = content.split()
            return Counter(words)
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        return {}
```

</div></details>

**Problem 4.** Explain the difference between shallow copy and deep copy. Give an example where they produce different results.

<details><summary>Answer</summary><div>

**Shallow copy:** Creates a new container but fills it with references to the same objects as the original.

**Deep copy:** Recursively copies all objects, creating entirely independent copies.

```python
import copy

original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)

original[0][0] = 99

print(shallow)  # [[99, 2], [3, 4]] — modified!
print(deep)     # [[1, 2], [3, 4]]   — unchanged
```

The shallow copy shares the inner lists with the original. The deep copy has independent inner lists.

</div></details>

**Problem 5.** Write a function that safely divides two numbers, handling division by zero and non-numeric input.

<details><summary>Answer</summary><div>

```python
def safe_divide(a, b):
    try:
        result = float(a) / float(b)
        return result
    except ZeroDivisionError:
        return "Error: Division by zero"
    except (TypeError, ValueError):
        return "Error: Non-numeric input"
```

</div></details>

**Problem 6.** Explain why strings are immutable in Python. What are the advantages and disadvantages?

<details><summary>Answer</summary><div>

**Advantages:**

1. **Thread safety:** No locks needed for string operations
2. **Hash stability:** Strings can be dictionary keys (hash doesn't change)
3. **Security:** Sensitive data (passwords) cannot be modified after creation
4. **Interning:** Python can reuse identical string objects, saving memory
5. **Simplicity:** No confusion about whether `s[0] = 'x'` modifies the original or a copy

**Disadvantages:**

1. **Memory overhead:** Every modification creates a new string object
2. **Performance:** Concatenation in a loop is $O(n^2)$ without optimisation

```python
# Inefficient: O(n^2) — creates new string each iteration
s = ""
for i in range(1000):
    s += str(i)

# Efficient: O(n) — use join
s = "".join(str(i) for i in range(1000))
```

</div></details>

For revision on number representation, see [Number Systems](/docs/docs_ALevel-notes/computer-science/fundamentals/01-number-systems) and [Floating Point](/docs/docs_ALevel-notes/computer-science/fundamentals/02-floating-point).
