---
title: Programming Constructs
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: programming-constructs
---

## 1. Variables and Data Types

### Variables

A **variable** is a named storage location in memory that holds a value which can change during
program execution.

### Primitive Data Types

| Type      | Typical Size | Range                     | Python equivalent |
| --------- | ------------ | ------------------------- | ----------------- |
| Integer   | 4 bytes      | $[-2^{31}, 2^{31}-1]$     | `int` (unbounded) |
| Float     | 8 bytes      | IEEE 754 double precision | `float`           |
| Character | 1 byte       | ASCII/Unicode             | `str` (length 1)  |
| Boolean   | 1 byte       | True / False              | `bool`            |

### Constants

A **constant** is a named value that cannot be changed after initialisation.

```python
MAX_SIZE = 100
PI = 3.14159265
```

### Type Casting

Converting a value from one type to another:

```python
x = int(3.7)       # x = 3 (truncation)
y = float(5)       # y = 5.0
z = str(42)        # z = "42"
```

:::warning Pitfall In Python, `int(3.9)` truncates toward zero (gives 3), not rounds. Use
`round(3.9)` for rounding. :::

<hr />

## 2. Selection (Conditional Statements)

### If-Else

```python
if condition:
    statement_block
elif another_condition:
    alternative_block
else:
    default_block
```

### Nested Selection

Selection statements can be nested, but excessive nesting reduces readability. Use guard clauses or
early returns where possible.

```python
def classify_grade(score):
    if score < 0 or score > 100:
        return "Invalid"
    if score >= 70:
        return "A"
    if score >= 60:
        return "B"
    if score >= 50:
        return "C"
    return "Fail"
```

### Case/Switch Statements

Some languages (not Python without `match`/`case` in 3.10+) provide switch statements for multi-way
branching.

<hr />

## 3. Iteration

### Definite Iteration (For Loop)

Executes a fixed number of times.

```python
for i in range(n):
    print(i)
```

**Invariant for `for i in range(n)`:** At the start of iteration $i$, the loop body has executed
exactly $i$ times.

### Indefinite Iteration (While Loop)

Executes until a condition becomes false.

```python
while condition:
    statement_block
```

### Loop Invariants

A **loop invariant** is a property that holds before and after each iteration.

**Example: Sum of first $n$ natural numbers.**

```python
def sum_n(n):
    total = 0
    i = 1
    while i <= n:
        total += i
        i += 1
    return total
```

**Invariant:** At the start of each iteration, `total = 1 + 2 + ... + (i - 1)`.

**Proof:**

- _Init:_ Before the first iteration, $i = 1$, `total = 0`. Sum of empty set = 0. ✓
- _Maintenance:_ `total` increases by $i$, then $i$ increases by 1. After: `total = 1 + ... + i`,
  and next $i' = i + 1$, so invariant holds.
- _Termination:_ $i = n + 1$. `total = 1 + 2 + ... + n = n(n+1)/2`. ✓

### Do-While / Repeat-Until

Executes the body at least once, then checks the condition. Python does not have a native do-while;
emulate with:

```python
while True:
    statement_block
    if not condition:
        break
```

:::info Board-specific **AQA** uses specific pseudocode format with `IF ... THEN ... ELSE ... ENDIF`
and `WHILE ... ENDWHILE`. **CIE (9618)** uses its own pseudocode format; requires procedure and
function definitions with parameters. **OCR (A)** uses OCR-specific pseudocode format; requires
local and global variable scope understanding. **Edexcel** uses pseudocode similar to Python-style;
requires subroutines with parameters. :::

<hr />

## 4. Recursion

### Definition

A **recursive function** is one that calls itself. Every recursive function must have:

1. **Base case(s):** Direct answer(s) for the simplest input(s)
2. **Recursive case:** Reduce the problem and call itself on the smaller input

### Example: Factorial

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
```

### Correctness Proof by Induction

**Theorem.** `factorial(n)` returns $n!$ for all $n \geq 0$.

**Proof.** By induction on $n$.

_Base case._ $n = 0$: returns 1 = $0!$. ✓

_Inductive step._ Assume `factorial(k) = k!` for all $k \leq n$. Then:

$$\mathrm{factorial}(n+1) = (n+1) \times \mathrm{factorial}(n) = (n+1) \times n! = (n+1)!$$

✓ $\square$

### Termination Proof

**Theorem.** `factorial(n)` terminates for all $n \geq 0$.

**Proof.** Define a **variant function** $V(n) = n$. Each recursive call decreases $V$ by 1:
$V(n-1) = n - 1 \lt{} n = V(n)$. $V$ is a non-negative integer that strictly decreases. By the
well-ordering principle, $V$ must eventually reach a base case ($V = 0$ or $V = 1$). Therefore, the
recursion terminates. $\square$

### Example: Fibonacci

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

**Complexity:** $T(n) = T(n-1) + T(n-2) + O(1)$. This gives $T(n) = \Theta(\phi^n)$ where
$\phi = \frac{1+\sqrt{5}}{2} \approx 1.618$ (the golden ratio).

**Proof sketch.** The recurrence has characteristic equation $r^2 = r + 1$, giving roots $\phi$ and
$\psi = \frac{1-\sqrt{5}}{2}$. The solution is $T(n) = A\phi^n + B\psi^n$. Since $|\psi| \lt{} 1$,
$T(n) = \Theta(\phi^n)$. $\square$

:::warning Pitfall Naive recursive Fibonacci has exponential time complexity. Use memoisation or
iteration for $O(n)$ time:

```python
def fib_iter(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

:::

### Example: Tower of Hanoi

```python
def hanoi(n, source, target, auxiliary):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return
    hanoi(n - 1, source, auxiliary, target)
    print(f"Move disk {n} from {source} to {target}")
    hanoi(n - 1, auxiliary, target, source)
```

**Complexity:** $T(n) = 2T(n-1) + O(1) \implies T(n) = \Theta(2^n)$.

**Proof.**
$T(n) = 2T(n-1) + 1 = 2(2T(n-2)+1)+1 = 4T(n-2)+3 = \cdots = 2^n T(0) + (2^n - 1) = \Theta(2^n)$.
Minimum moves = $2^n - 1$. $\square$

<hr />

## 5. Procedures and Functions

### Procedures vs Functions

| Feature      | Procedure                       | Function        |
| ------------ | ------------------------------- | --------------- |
| Return value | None                            | Returns a value |
| Purpose      | Perform an action (side effect) | Compute a value |
| Called as    | Statement                       | Expression      |

```python
def print_report(data):    # Procedure
    for item in data:
        print(item)

def calculate_average(data):  # Function
    return sum(data) / len(data)
```

### Parameters

- **By value:** A copy of the argument is passed. Changes inside the function do not affect the
  original. (Default in Python for immutable types.)
- **By reference:** A reference to the original is passed. Changes affect the original. (Python
  passes object references; mutable objects like lists can be modified.)

```python
def modify_list(lst):
    lst.append(4)    # Modifies the original list (by reference)
    lst = [0]        # Only rebinds the local variable (no effect outside)

my_list = [1, 2, 3]
modify_list(my_list)
print(my_list)  # [1, 2, 3, 4]
```

<hr />

## Problem Set

**Problem 1.** Write a recursive function to compute the sum of digits of a positive integer. Prove
its correctness by induction.

<details>
<summary>Answer</summary>

```python
def sum_digits(n):
    if n < 10:
        return n
    return n % 10 + sum_digits(n // 10)
```

**Correctness.** By induction on the number of digits $d$.

Base case ($d = 1$): $n \lt{} 10$, returns $n$. Sum of digits = $n$. ✓

Inductive step: Assume correct for all numbers with $\leq d$ digits. For a $(d+1)$-digit number $n$:
$n \bmod 10$ gives the last digit, and $n // 10$ gives the remaining $d$ digits. By the inductive
hypothesis, `sum_digits(n // 10)` correctly sums those $d$ digits. Adding the last digit gives the
total sum. ✓

**Termination:** Variant function $V(n) = n$. Each call: $V(n // 10) = \lfloor n/10 \rfloor \lt{} n$
for $n \geq 10$. ✓

</details>

**Problem 2.** Convert the following while loop to a for loop:

```python
i = 5
while i <= 50:
    print(i)
    i += 5
```

<details>
<summary>Answer</summary>

```python
for i in range(5, 51, 5):
    print(i)
```

</details>

**Problem 3.** Prove that the following function computes $2^n$:

```python
def power_of_two(n):
    if n == 0:
        return 1
    return 2 * power_of_two(n - 1)
```

<details>
<summary>Answer</summary>

By induction on $n$.

Base: $n = 0$: returns 1 = $2^0$. ✓

Inductive step: Assume `power_of_two(k) = 2^k` for $k \leq n$. Then
`power_of_two(n+1) = 2 * power_of_two(n) = 2 * 2^n = 2^{n+1}`. ✓

$\square$

</details>

**Problem 4.** Explain the difference between iteration and recursion. When would you prefer one
over the other?

<details>
<summary>Answer</summary>

| Aspect      | Iteration               | Recursion                          |
| ----------- | ----------------------- | ---------------------------------- |
| Mechanism   | Loop constructs         | Function calls itself              |
| Memory      | $O(1)$ extra            | $O(n)$ stack frames                |
| Overhead    | Minimal                 | Function call overhead per step    |
| Readability | Better for simple loops | Better for tree/divide-and-conquer |
| Risk        | Infinite loop           | Stack overflow                     |

Prefer iteration when: the problem has a natural loop structure, memory is constrained, or
performance is critical.

Prefer recursion when: the problem has a natural recursive structure (trees, divide-and-conquer),
the depth is bounded (e.g., $\log n$), or readability is paramount.

</details>

**Problem 5.** Write a function that uses recursion to check if a string is a palindrome. Prove
termination.

<details>
<summary>Answer</summary>

```python
def is_palindrome(s):
    if len(s) <= 1:
        return True
    if s[0] != s[-1]:
        return False
    return is_palindrome(s[1:-1])
```

**Termination.** Variant function: $V(s) = \mathrm{len}(s)$. Each recursive call:
$V(s[1:-1]) = \mathrm{len}(s) - 2 \lt{} V(s)$ for $\mathrm{len}(s) \geq 2$. Since $V$ is a
non-negative integer that strictly decreases, the function must reach a base case. ✓

</details>

**Problem 6.** What is the output of the following code? Explain step by step.

```python
x = 10
def modify(x):
    x = 20
modify(x)
print(x)
```

<details>
<summary>Answer</summary>

Output: `10`

Explanation: Python passes the integer `10` by object reference. Inside `modify`, `x = 20` rebinds
the local parameter `x` to a new integer object `20`. This does not affect the global `x`, which
remains `10`. Integers are immutable in Python, so there is no way to modify the original value
through the parameter.

</details>

**Problem 7.** Write a function `gcd(a, b)` using Euclid's algorithm. Prove it terminates and
returns the GCD.

<details>
<summary>Answer</summary>

```python
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)
```

**Termination.** Variant: $V(a, b) = b$. Each call: $V(a, b) = b \gt{} a \bmod b = V(b, a \bmod b)$
(for $b \gt{} 0$). Since $V$ is a non-negative integer that strictly decreases, the function reaches
$b = 0$. ✓

**Correctness.** We prove $\gcd(a, b) = \gcd(b, a \bmod b)$.

Let $d = \gcd(a, b)$. Then $d | a$ and $d | b$, so $d | (a - q \cdot b) = a \bmod b$. Hence
$d | \gcd(b, a \bmod b)$.

Conversely, let $e = \gcd(b, a \bmod b)$. Then $e | b$ and $e | (a \bmod b)$, so
$e | (q \cdot b + a \bmod b) = a$. Hence $e | \gcd(a, b)$.

Since $d | e$ and $e | d$, $d = e$. ✓

Base case: $\gcd(a, 0) = a$. ✓

</details>

**Problem 8.** A student writes the following recursive function. Identify the bug and fix it:

```python
def countdown(n):
    print(n)
    countdown(n - 1)
```

<details>
<summary>Answer</summary>

**Bugs:**

1. No base case — infinite recursion leading to stack overflow
2. No guard against $n \lt{} 0$

**Fixed version:**

```python
def countdown(n):
    if n < 0:
        return
    print(n)
    countdown(n - 1)
```

Or equivalently:

```python
def countdown(n):
    while n >= 0:
        print(n)
        n -= 1
```

</details>

For revision on data structures that use recursion, see
[Trees](/docs/alevel/computer-science/data-structures/trees).

<hr />

## 6. Worked Examples: Nested Loops and Input Validation

### Worked Example: Nested Loop Trace

Trace the execution of the following code and determine the output:

```python
for i in range(1, 4):
    for j in range(1, i + 1):
        print("*", end="")
    print()
```

**Trace:**

| Iteration | `i` | `j` range                   | Output             |
| --------- | --- | --------------------------- | ------------------ |
| Outer 1   | 1   | `range(1, 2)` — j = 1       | `*` then newline   |
| Outer 2   | 2   | `range(1, 3)` — j = 1, 2    | `**` then newline  |
| Outer 3   | 3   | `range(1, 4)` — j = 1, 2, 3 | `***` then newline |

**Output:**

```
*
**
***
```

### Worked Example: Input Validation Loop

Write a function that repeatedly asks the user for an integer between 1 and 100 (inclusive) until
valid input is provided.

```python
def get_valid_score():
    while True:
        try:
            score = int(input("Enter a score (1-100): "))
            if 1 <= score <= 100:
                return score
            print("Score must be between 1 and 100.")
        except ValueError:
            print("Invalid input. Please enter an integer.")
```

This loop combines two validation checks: type validation (integer) and range validation (1-100).
The loop only exits when both checks pass.

### Worked Example: Nested Loop — Multiplication Table

```python
def multiplication_table(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            print(f"{i * j:4}", end="")
        print()

multiplication_table(5)
```

Output:

```
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
```

<hr />

## 7. Recursion Trace Walkthrough

### Trace: Factorial of 4

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
```

Call: `factorial(4)`

```
factorial(4)
├── 4 * factorial(3)
│   ├── 3 * factorial(2)
│   │   ├── 2 * factorial(1)
│   │   │   └── returns 1
│   │   └── returns 2 * 1 = 2
│   └── returns 3 * 2 = 6
└── returns 4 * 6 = 24
```

Stack at deepest point (4 frames):

| Frame | `n` | Waiting for                      |
| ----- | --- | -------------------------------- |
| 1     | 4   | `factorial(3)`                   |
| 2     | 3   | `factorial(2)`                   |
| 3     | 2   | `factorial(1)`                   |
| 4     | 1   | (base case, returns immediately) |

### Trace: Fibonacci of 5

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

Call: `fib(5)`

```
fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1) → 1
│   │   │   └── fib(0) → 0
│   │   │   returns 1
│   │   └── fib(1) → 1
│   │   returns 2
│   └── fib(2)
│       ├── fib(1) → 1
│       └── fib(0) → 0
│       returns 1
│   returns 3
└── fib(3)
    ├── fib(2) → 1
    └── fib(1) → 1
    returns 2
returns 5
```

Note: `fib(3)` is computed twice, `fib(2)` is computed three times. This redundancy is why naive
recursive Fibonacci is $O(\phi^n)$ — it recomputes the same subproblems repeatedly.

<hr />

## 8. Common Pitfalls

### Off-by-One Errors

Off-by-one errors occur when a loop iterates one time too many or one time too few.

| Error               | Code                                       | Fix                                                   |
| ------------------- | ------------------------------------------ | ----------------------------------------------------- |
| Fencepost           | `for i in range(1, n)` — iterates 1 to n-1 | Use `range(1, n + 1)` if you need 1 to n              |
| Off-by-one in while | `while i &lt; n` vs `while i &lt;= n`      | Decide whether the boundary is inclusive or exclusive |
| Array indexing      | `array[len(array)]` — IndexError           | Valid indices are 0 to `len(array) - 1`               |

### Infinite Loops

An infinite loop occurs when the loop condition never becomes false.

```python
# Bug: x never changes
x = 0
while x < 10:
    print(x)

# Bug: wrong increment direction
x = 10
while x > 0:
    x = x + 1  # x increases, never reaches 0

# Bug: floating point comparison
x = 0.0
while x != 1.0:
    x += 0.1  # May never exactly equal 1.0 due to rounding
```

**Fix for floating point:** Use a tolerance or integer counter:

```python
for i in range(10):
    x = i * 0.1
```

### Scope Issues

Understanding variable scope is critical for correct programs.

```python
# Pitfall: modifying a global variable
count = 0

def increment():
    count = count + 1  # UnboundLocalError!
    # This creates a local 'count' shadowing the global

def increment_fixed():
    global count
    count = count + 1  # Correct: references the global variable
```

```python
# Pitfall: mutable default arguments
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2] — NOT [2]!
```

The default list `[]` is created once when the function is defined, not each time it is called. Fix:

```python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```

<hr />

## 9. Additional Problem Set

**Problem 1.** Trace the following code and state the output:

```python
result = 0
for i in range(3):
    for j in range(3):
        if i == j:
            result += 1
        elif i > j:
            result += 2
        else:
            result += 3
print(result)
```

<details>
<summary>Answer</summary>

Trace each `(i, j)` pair:

| `i` | `j` | Condition | `result` change | `result` |
| --- | --- | --------- | --------------- | -------- |
| 0   | 0   | i == j    | +1              | 1        |
| 0   | 1   | else      | +3              | 4        |
| 0   | 2   | else      | +3              | 7        |
| 1   | 0   | i &gt; j  | +2              | 9        |
| 1   | 1   | i == j    | +1              | 10       |
| 1   | 2   | else      | +3              | 13       |
| 2   | 0   | i &gt; j  | +2              | 15       |
| 2   | 1   | i &gt; j  | +2              | 17       |
| 2   | 2   | i == j    | +1              | 18       |

Output: `18`

</details>

**Problem 2.** Write a recursive function `binary_search(arr, target, low, high)` that returns the
index of `target` in a sorted array, or `-1` if not found. Prove that it terminates.

<details>
<summary>Answer</summary>

```python
def binary_search(arr, target, low, high):
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, target, low, mid - 1)
    else:
        return binary_search(arr, target, mid + 1, high)
```

**Termination proof.** Variant function: $V = high - low + 1$ (the size of the search range).

Each recursive call either:

- Returns (base case `low &gt; high`), or
- Calls with `mid - 1` as the new high: $V' = (mid - 1) - low + 1 = mid - low$. Since
  `mid &gt;= low`, $V' \leq V - 1$.
- Calls with `mid + 1` as the new low:
  $V' = high - (mid + 1) + 1 = high - mid`. Since
  `mid \lt{}= high`, $V' \leq V - 1$.

In both recursive cases, $V$ strictly decreases. Since $V$ is a non-negative integer, the function
must eventually reach the base case. ✓

</details>

**Problem 3.** The following function is intended to compute the sum of all even numbers from 1 to
`n`. Find and fix the bug.

```python
def sum_even(n):
    total = 0
    for i in range(1, n):
        if i % 2 == 0:
            total += i
    return total
```

<details>
<summary>Answer</summary>

**Bug:** `range(1, n)` excludes `n`. If `n` is even, it should be included in the sum.

**Fix:** Change to `range(1, n + 1)`:

```python
def sum_even(n):
    total = 0
    for i in range(1, n + 1):
        if i % 2 == 0:
            total += i
    return total
```

**Alternative fix** using a more efficient approach (only iterate over even numbers):

```python
def sum_even(n):
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    return total
```

This halves the number of iterations.

**Verification:** For `n = 6`: sum = 2 + 4 + 6 = 12. Original code gives 2 + 4 = 6 (wrong). Fixed
code gives 2 + 4 + 6 = 12 (correct).

</details>

**Problem 4.** Write a function `validate_password(password)` that returns `True` if the password
meets all of the following rules, and `False` otherwise:

- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one digit
- Contains at least one special character from `!@#$%^&amp;*`

<details>
<summary>Answer</summary>

```python
def validate_password(password):
    if len(password) < 8:
        return False
    has_upper = False
    has_digit = False
    has_special = False
    specials = set("!@#$%^&*")
    for char in password:
        if char.isupper():
            has_upper = True
        elif char.isdigit():
            has_digit = True
        elif char in specials:
            has_special = True
    return has_upper and has_digit and has_special
```

**Alternative using Python built-ins:**

```python
def validate_password(password):
    if len(password) < 8:
        return False
    has_upper = any(c.isupper() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in "!@#$%^&*" for c in password)
    return has_upper and has_digit and has_special
```

Both versions use early return for the length check and iterate through the password once, giving
$O(n)$ time complexity.

</details>

**Problem 5.** Explain the output of the following code. Why does the second call behave
unexpectedly?

```python
def append_to(element, target=[]):
    target.append(element)
    return target

print(append_to(1))
print(append_to(2))
```

<details>
<summary>Answer</summary>

**Output:**

```
[1]
[1, 2]
```

**Explanation:** In Python, default arguments are evaluated **once** when the function is defined,
not each time the function is called. The list `[]` is created at definition time and shared across
all calls that use the default.

First call: `target` is the default list `[]`. After appending 1, it becomes `[1]`.

Second call: `target` is the **same** list object `[1]`. After appending 2, it becomes `[1, 2]`.

**Fix:** Use `None` as the default and create a new list inside the function:

```python
def append_to(element, target=None):
    if target is None:
        target = []
    target.append(element)
    return target
```

Now each call that omits `target` gets a fresh empty list.

</details>
