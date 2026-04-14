---
title: Computational Thinking
date: 2026-04-14
tags:
  - Computer Science
  - ILC
categories:
  - Computer Science
slug: computational-thinking
---

# Computational Thinking

Computational thinking is a problem-solving approach that involves breaking down complex problems,
identifying patterns, abstracting details, and designing algorithms. This topic covers
decomposition, pattern recognition, abstraction, algorithm design, finite state machines, and
regular expressions.

## Four Pillars of Computational Thinking

### Decomposition (OL/HL)

Breaking a complex problem into smaller, more manageable sub-problems.

**Example (OL):** "Build a calculator application."

Decompose into:

1. User interface (display, buttons).
2. Input handling (button presses).
3. Arithmetic operations (add, subtract, multiply, divide).
4. Output display.

Each sub-problem can be solved independently and then combined.

### Pattern Recognition (OL/HL)

Identifying similarities or trends in data or problems.

**Example (OL):** When processing exam results, notice that the same steps apply to each subject:
read marks, calculate average, assign grade. The pattern can be generalised into a single function
that accepts different data.

### Abstraction (OL/HL)

Focusing on the essential features of a problem while ignoring irrelevant details.

**Example (OL):** When modelling a traffic system, focus on the number of cars, speed, and traffic
lights, while ignoring the colour of the cars or the brand.

**Example (HL):** In object-oriented programming, a `Vehicle` class abstracts common properties
(wheels, speed, colour) while `Car`, `Bicycle`, and `Truck` inherit and specialise these properties.

### Algorithm Design (OL/HL)

Developing a step-by-step solution to the problem.

## Abstraction in Practice

### Data Abstraction (HL)

Hiding the implementation details of a data structure and exposing only the operations.

```python
class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if not self.is_empty():
            return self._items.pop()
        raise IndexError("Stack is empty")

    def peek(self):
        if not self.is_empty():
            return self._items[-1]
        raise IndexError("Stack is empty")

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)
```

The user of the `Stack` class does not need to know that a list is used internally.

### Procedural Abstraction (HL)

Hiding the details of a procedure behind a well-defined interface.

```python
def calculate_gpa(grades):
    grade_points = {"H1": 100, "H2": 88, "H3": 77, "H4": 66, "H5": 56, "H6": 46}
    total = sum(grade_points.get(g, 0) for g in grades)
    return total / len(grades)

gpa = calculate_gpa(["H1", "H2", "H3", "H1"])
print(f"GPA: {gpa:.1f}")
```

## Finite State Machines (HL)

A finite state machine (FSM) is a model of computation that consists of:

1. A finite set of states.
2. A set of input symbols.
3. A transition function (determines the next state).
4. An initial state.
5. A set of accepting (final) states.

### Example: Vending Machine (HL)

A vending machine accepts 50c and 1 euro coins and dispenses a drink costing 1.50 euro.

**States:** $S_0$ (0c), $S_1$ (50c), $S_2$ (1 euro), $S_3$ (1.50 euro -- dispense).

**Inputs:** 50c, 1 euro.

| Current state | Input  | Next state | Output                     |
| ------------- | ------ | ---------- | -------------------------- |
| $S_0$         | 50c    | $S_1$      | --                         |
| $S_0$         | 1 euro | $S_2$      | --                         |
| $S_1$         | 50c    | $S_2$      | --                         |
| $S_1$         | 1 euro | $S_3$      | Dispense drink             |
| $S_2$         | 50c    | $S_3$      | Dispense drink             |
| $S_2$         | 1 euro | $S_3$      | Dispense drink, return 50c |

### State Transition Diagram

```
    50c       50c       50c
S0 -----> S1 -----> S2 -----> S3 (dispense)
|                              ^
| 1 euro                       | 1 euro
+--------- S2 ----------------+
          1 euro
```

### Implementing an FSM in Python (HL)

```python
class VendingMachine:
    def __init__(self):
        self.state = "S0"

    def insert_coin(self, coin):
        transitions = {
            ("S0", "50c"): ("S1", ""),
            ("S0", "1e"): ("S2", ""),
            ("S1", "50c"): ("S2", ""),
            ("S1", "1e"): ("S3", "Dispense drink"),
            ("S2", "50c"): ("S3", "Dispense drink"),
            ("S2", "1e"): ("S3", "Dispense drink, return 50c"),
        }

        key = (self.state, coin)
        if key in transitions:
            self.state, output = transitions[key]
            if output:
                print(output)
            if self.state == "S3":
                self.state = "S0"
        else:
            print("Invalid input")

machine = VendingMachine()
machine.insert_coin("50c")
machine.insert_coin("50c")
machine.insert_coin("50c")
```

## Regular Expressions (HL)

A regular expression (regex) is a pattern used to match strings.

### Common Syntax

| Symbol   | Meaning                                        |
| -------- | ---------------------------------------------- |
| `.`      | Any single character                           |
| `*`      | Zero or more of the preceding element          |
| `+`      | One or more of the preceding element           |
| `?`      | Zero or one of the preceding element           |
| `^`      | Start of string                                |
| `$`      | End of string                                  |
| `[abc]`  | Any one character in the set                   |
| `[^abc]` | Any character NOT in the set                   |
| `\d`     | Any digit (0-9)                                |
| `\w`     | Any word character (alphanumeric + underscore) |
| `{n}`    | Exactly n occurrences                          |
| `{n,m}`  | Between n and m occurrences                    |

### Examples in Python

```python
import re

# Match an email address
pattern = r"[\w.]+@[\w.]+\.\w+"
emails = ["user@example.com", "invalid-email", "john.doe@university.ie"]
for email in emails:
    if re.match(pattern, email):
        print(f"Valid: {email}")
    else:
        print(f"Invalid: {email}")

# Find all phone numbers in a text
text = "Call 01-2345678 or 021-8765432 for help."
phones = re.findall(r"\d{2,3}-\d{7}", text)
print(f"Phone numbers found: {phones}")
# Output: ['01-2345678', '021-8765432']

# Validate a date format (DD/MM/YYYY)
date_pattern = r"^\d{2}/\d{2}/\d{4}$"
dates = ["14/04/2026", "2026-04-14", "1/1/2026"]
for d in dates:
    if re.match(date_pattern, d):
        print(f"Valid date: {d}")
    else:
        print(f"Invalid date: {d}")
```

## Problem-Solving Strategies (OL/HL)

### Stepwise Refinement

Break down the problem into sub-problems, then refine each sub-problem further until each step is
simple enough to implement.

**Example (HL):** Calculate the average of a list of numbers, excluding the highest and lowest.

Level 1:

1. Read the list of numbers.
2. Remove the highest and lowest.
3. Calculate the average of the remaining numbers.
4. Output the result.

Level 2 (refine step 2): 2.1 Find the maximum value and its index. 2.2 Find the minimum value and
its index. 2.3 Remove both from the list.

Level 3 (implement):

```python
def trimmed_average(numbers):
    if len(numbers) < 3:
        return None
    numbers.remove(max(numbers))
    numbers.remove(min(numbers))
    return sum(numbers) / len(numbers)

scores = [45, 67, 82, 91, 55, 73, 88]
avg = trimmed_average(scores[:])
print(f"Trimmed average: {avg:.1f}")
```

### Trace Tables (HL)

A trace table records the values of variables as an algorithm executes.

**Example:** Trace the following code for `n = 5`.

```python
def mystery(n):
    result = 1
    for i in range(1, n + 1):
        result = result * i
    return result
```

| i   | result |
| --- | ------ |
| 1   | 1      |
| 2   | 2      |
| 3   | 6      |
| 4   | 24     |
| 5   | 120    |

The function computes $n!$ (factorial). For $n = 5$: $5! = 120$.

## Backtracking (HL)

Backtracking is a systematic trial-and-error approach. If a partial solution leads to a dead end,
the algorithm backtracks and tries a different path.

### Example: N-Queens Problem (HL)

Place $n$ queens on an $n \times n$ chessboard so that no two queens threaten each other.

```python
def solve_n_queens(n):
    def is_safe(board, row, col):
        for i in range(col):
            if board[i] == row or \
               abs(board[i] - row) == abs(i - col):
                return False
        return True

    def solve(board, col):
        if col == n:
            solutions.append(board[:])
            return
        for row in range(n):
            if is_safe(board, row, col):
                board[col] = row
                solve(board, col + 1)
                board[col] = -1

    solutions = []
    solve([-1] * n, 0)
    return solutions

result = solve_n_queens(4)
print(f"Number of solutions for 4-queens: {len(result)}")
```

## Greedy Algorithms (HL)

A greedy algorithm makes the locally optimal choice at each step, hoping to find a global optimum.

### Example: Coin Change Problem

Make change using the minimum number of coins (with denominations 50c, 20c, 10c, 5c, 2c, 1c).

```python
def make_change(amount, coins=None):
    if coins is None:
        coins = [50, 20, 10, 5, 2, 1]
    result = {}
    for coin in coins:
        if amount >= coin:
            count = amount // coin
            result[coin] = count
            amount -= count * coin
        if amount == 0:
            break
    return result

change = make_change(87)
print(f"Change: {change}")
# Output: Change: {50: 1, 20: 1, 10: 1, 5: 1, 2: 1}
```

:::warning
Greedy algorithms do not always produce the optimal solution. For example, with coin
denominations {1, 3, 4} and amount 6, the greedy approach gives 4 + 1 + 1 (3 coins), but the optimal
is 3 + 3 (2 coins).
:::

## Divide and Conquer (HL)

Divide the problem into smaller sub-problems, solve each recursively, then combine the results.

### Example: Merge Sort

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    merged = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged

numbers = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(numbers))
```

**Time complexity:** $O(n \log n)$ in all cases.

## Common Pitfalls

1. **Decomposition** -- ensure sub-problems are independent.
2. **FSM** -- every state must have a defined transition for every possible input.
3. **Regex** -- escape special characters; test thoroughly with edge cases.
4. **Greedy algorithms** -- do not guarantee optimality for all problems.
5. **Backtracking** -- can be slow for large problem spaces; use pruning to improve efficiency.
6. **Trace tables** -- initialise variables correctly and update step by step.

## Practice Questions

### Ordinary Level

1. Explain the four pillars of computational thinking with examples.
2. Decompose the task of "organising a school sports day" into sub-tasks.
3. Draw a trace table for the following code when `x = 7`:

```python
result = 0
while x > 0:
    result = result + x
    x = x - 2
```

4. What is abstraction? Give an example from everyday life.

### Higher Level

1. Design a finite state machine for a turnstile that accepts coins (opens gate) and allows one
   person through before locking again.
2. Write a regular expression that matches Irish phone numbers in the format (0XX) XXXXXXX.
3. Implement the merge sort algorithm and trace its execution on the array [5, 2, 8, 1, 9, 3].
4. Explain why the greedy approach to the coin change problem may not always produce the optimal
   solution. Give a specific example.
