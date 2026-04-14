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

**Example (HL):** "Build a student management system."

Level 1: Student records, course enrolment, grading, reporting.

Level 2 (under Student records): Add student, edit student, delete student, search student.

Level 3 (under Add student): Validate name, validate ID, check for duplicates, save to database.

### Pattern Recognition (OL/HL)

Identifying similarities or trends in data or problems.

**Example (OL):** When processing exam results, notice that the same steps apply to each subject:
read marks, calculate average, assign grade. The pattern can be generalised into a single function
that accepts different data.

**Example (HL):** In a shopping system, the pattern for processing orders is the same regardless of
product type: validate order, check stock, process payment, generate receipt. A single
`processOrder` function handles all product types.

### Abstraction (OL/HL)

Focusing on the essential features of a problem while ignoring irrelevant details.

**Example (OL):** When modelling a traffic system, focus on the number of cars, speed, and traffic
lights, while ignoring the colour of the cars or the brand.

**Example (HL):** In object-oriented programming, a `Vehicle` class abstracts common properties
(wheels, speed, colour) while `Car`, `Bicycle`, and `Truck` inherit and specialise these properties.

### Algorithm Design (OL/HL)

Developing a step-by-step solution to the problem.

**Worked Example (OL).** Design an algorithm to find the highest score in a class.

1. Initialise `highest` to 0.
2. For each student in the class: a. Read the student's score. b. If score &gt; highest, set highest
   = score.
3. Output highest.

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

**Worked Example (HL).** Design a turnstile FSM. The turnstile is initially locked. Inserting a coin
unlocks it. Pushing it when unlocked lets one person through and locks it again.

States: Locked, Unlocked. Inputs: coin, push.

| State    | Input | Next State | Output         |
| -------- | ----- | ---------- | -------------- |
| Locked   | coin  | Unlocked   | --             |
| Locked   | push  | Locked     | --             |
| Unlocked | coin  | Unlocked   | --             |
| Unlocked | push  | Locked     | Person through |

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

pattern = r"[\w.]+@[\w.]+\.\w+"
emails = ["user@example.com", "invalid-email", "john.doe@university.ie"]
for email in emails:
    if re.match(pattern, email):
        print(f"Valid: {email}")
    else:
        print(f"Invalid: {email}")

text = "Call 01-2345678 or 021-8765432 for help."
phones = re.findall(r"\d{2,3}-\d{7}", text)
print(f"Phone numbers found: {phones}")

date_pattern = r"^\d{2}/\d{2}/\d{4}$"
dates = ["14/04/2026", "2026-04-14", "1/1/2026"]
for d in dates:
    if re.match(date_pattern, d):
        print(f"Valid date: {d}")
    else:
        print(f"Invalid date: {d}")
```

**Worked Example (HL).** Write a regex for Irish phone numbers in format (0XX) XXXXXXX.

Pattern: `^\(\d{2}\) \d{6}$`

```python
pattern = r"^\(\d{2}\) \d{6}$"
print(re.match(pattern, "(01) 2345678"))  # Match
print(re.match(pattern, "01-2345678"))   # No match
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

**Worked Example (HL).** Trace the following code for `n = 6`:

```python
def mystery2(n):
    total = 0
    for i in range(1, n):
        if n % i == 0:
            total += i
    return total
```

| i   | n % i | n % i == 0 | total |
| --- | ----- | ---------- | ----- |
| 1   | 0     | True       | 1     |
| 2   | 0     | True       | 3     |
| 3   | 0     | True       | 6     |
| 4   | 2     | False      | 6     |
| 5   | 1     | False      | 6     |

The function computes the sum of proper divisors of $n$. For $n = 6$: $1 + 2 + 3 = 6$. A number
equal to the sum of its proper divisors is called a **perfect number**.

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

**Proof that greedy fails for {1, 3, 4} with amount 6.** Greedy: pick 4 (amount=2), pick 1
(amount=1), pick 1 (amount=0). Total: 3 coins. Optimal: pick 3 (amount=3), pick 3 (amount=0). Total:
2 coins. $3 \lt 3$ is false, so greedy is not optimal. $\blacksquare$

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

**Proof sketch.** The recursion tree has $\log_2 n$ levels. At each level, a total of $n$ elements
are merged. Total work: $n \times \log_2 n = O(n \log n)$. $\blacksquare$

## Divide and Conquer in Detail (HL)

### Merge Sort Implementation and Trace

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

numbers = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(numbers))
```

**Trace on [5, 2, 8, 1, 9, 3]:**

Split: [5, 2, 8] and [1, 9, 3].
Split [5, 2, 8]: [5] and [2, 8]. Split [2, 8]: [2] and [8]. Merge: [2, 8]. Merge [5] and [2, 8]: [2, 5, 8].
Split [1, 9, 3]: [1] and [9, 3]. Split [9, 3]: [9] and [3]. Merge: [3, 9]. Merge [1] and [3, 9]: [1, 3, 9].
Merge [2, 5, 8] and [1, 3, 9]: [1, 2, 3, 5, 8, 9].

## Greedy Algorithms in Detail (HL)

### Activity Selection Problem

Given a set of activities with start and finish times, select the maximum number of
non-overlapping activities.

```python
def activity_selection(activities):
    activities.sort(key=lambda x: x[1])  # sort by finish time
    selected = [activities[0]]
    last_finish = activities[0][1]
    for start, finish in activities[1:]:
        if start >= last_finish:
            selected.append((start, finish))
            last_finish = finish
    return selected

activities = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 9), (5, 9), (6, 10), (8, 11), (8, 12), (2, 14), (12, 16)]
print(activity_selection(activities))
# [(1, 4), (5, 7), (8, 11), (12, 16)]
```

**Proof that the greedy choice is optimal.** By always choosing the activity with the earliest
finish time, we maximise the remaining time for other activities. Any optimal solution that does
not include this activity can be modified to include it without reducing the total count. $lacksquare$

## Backtracking in Detail (HL)

### Sudoku Solver

```python
def solve_sudoku(board):
    empty = find_empty(board)
    if not empty:
        return True
    row, col = empty
    for num in range(1, 10):
        if is_valid(board, num, row, col):
            board[row][col] = num
            if solve_sudoku(board):
                return True
            board[row][col] = 0
    return False

def find_empty(board):
    for r in range(9):
        for c in range(9):
            if board[r][c] == 0:
                return (r, c)
    return None

def is_valid(board, num, row, col):
    if num in board[row]:
        return False
    if num in [board[r][col] for r in range(9)]:
        return False
    box_r, box_c = 3 * (row // 3), 3 * (col // 3)
    for r in range(box_r, box_r + 3):
        for c in range(box_c, box_c + 3):
            if board[r][c] == num:
                return False
    return True
```

**Time complexity:** In the worst case, the solver explores all possibilities, giving $O(9^{81})$.
In practice, constraint propagation makes it much faster.

## Trace Tables in Detail (HL)

**Example:** Trace the bubble sort on [5, 3, 8, 1].

```
Pass 1: [3, 5, 1, 8]  (swapped 5,3; swapped 8,1)
Pass 2: [3, 1, 5, 8]  (swapped 5,1)
Pass 3: [1, 3, 5, 8]  (swapped 3,1)
Pass 4: [1, 3, 5, 8]  (no swaps -- sorted)
```

**Example:** Trace the following for n = 6:

```python
def mystery(n):
    total = 0
    for i in range(1, n):
        if n % i == 0:
            total += i
    return total
```

| i   | n % i | n % i == 0 | total |
| --- | ----- | ---------- | ----- |
| 1   | 0     | True       | 1     |
| 2   | 0     | True       | 3     |
| 3   | 0     | True       | 6     |
| 4   | 2     | False      | 6     |
| 5   | 1     | False      | 6     |

The function computes the sum of proper divisors. $1 + 2 + 3 = 6$. Since $6 = 6$, the number 6 is
a **perfect number**.

## Additional Practice Questions

5. Write a Python function that implements a queue using only a list (no `collections.deque`). What
   is the time complexity of enqueue and dequeue?

6. Design an FSM for a digital lock that accepts a 3-digit PIN. The lock unlocks only when the
   correct sequence is entered.

7. Write a regex that validates Irish car registration plates in the format XX-CC-XXXXXX (2 letters,
   2 digits, 1-6 digits).

8. Explain the difference between backtracking and divide and conquer. Give an example of each.

9. Write a Python function that implements the activity selection greedy algorithm. Trace it on the
   activities [(1,3), (2,5), (4,7), (6,9), (8,10)].

10. Explain why the greedy coin change algorithm fails for coin denominations {1, 3, 4} with amount
    6. Show the greedy result and the optimal result.

11. Design a finite state machine for a microwave oven. States: Idle, Cooking, Paused, DoorOpen.

12. Write a regex that matches UK phone numbers in the format 0XXXX XXXXXX or +44 XXXX XXXXXX.

13. Explain the concept of an invariant in the context of algorithm correctness. Give an example from
    bubble sort.

14. Write a Python function that solves the N-Queens problem for N=8. How many solutions are there?

15. Compare the time complexity of bubble sort, insertion sort, merge sort, and quick sort. When
    would you use each?

## Abstract Data Types in Practice (HL)

### Queue Implementation

```python
class Queue:
    def __init__(self):
        self._items = []

    def enqueue(self, item):
        self._items.append(item)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items.pop(0)

    def peek(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items[0]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)
```

**Note:** Using `pop(0)` on a list is $O(n)$ because all elements shift. For $O(1)$ dequeue, use
`collections.deque`.

### Queue using two stacks (HL)

```python
class QueueTwoStacks:
    def __init__(self):
        self.inbox = []
        self.outbox = []

    def enqueue(self, item):
        self.inbox.append(item)

    def dequeue(self):
        if not self.outbox:
            while self.inbox:
                self.outbox.append(self.inbox.pop())
        return self.outbox.pop()

    def is_empty(self):
        return not self.inbox and not self.outbox
```

**Amortised time complexity:** Each element is pushed to `inbox` once and popped from `inbox` to
`outbox` once. Over $n$ operations, total work is $O(n)$, so amortised cost per operation is $O(1)$.

## Algorithm Correctness Proofs (HL)

### Proof: Linear Search Correctness

**Claim:** `linear_search(arr, target)` returns the index of `target` if it exists, and -1 otherwise.

**Proof.** The loop examines every index from 0 to len(arr)-1.

- If `target` is at index $k$: the loop reaches index $k$, finds `arr[k] == target`, and returns $k$.
- If `target` is not in the array: no index satisfies `arr[i] == target`, so the loop completes
  without returning, and the function returns -1.

Both cases are correct. $lacksquare$

### Proof: Bubble Sort Correctness

**Invariant:** After $k$ passes, the $k$ largest elements are in their correct final positions at the
end of the array.

**Proof by induction.**

Base case ($k=0$): Before any passes, 0 elements are sorted. Trivially true.

Inductive step: Assume after $k$ passes, the $k$ largest elements are sorted. In pass $k+1$, adjacent
pairs are compared and swapped if out of order. The largest unsorted element "bubbles up" to position
$n - k - 1$ (one position left of the previously sorted elements). After this pass, $k+1$ elements
are sorted.

Termination: After $n-1$ passes, $n-1$ elements are sorted, so all $n$ elements are sorted.
$lacksquare$

## Greedy vs Dynamic Programming (HL)

### Coin Change: Greedy vs DP

**Greedy (not always optimal):**

```python
def coin_change_greedy(amount, coins=[50, 20, 10, 5, 2, 1]):
    count = 0
    for coin in coins:
        count += amount // coin
        amount -= (amount // coin) * coin
        if amount == 0:
            break
    return count
```

**Dynamic programming (always optimal):**

```python
def coin_change_dp(amount, coins):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1
```

**Time complexity:** $O(amount 	imes len(coins))$.

## Additional Practice Questions

9. Write a Python function that implements a priority queue. Items should be dequeued in order of
   priority (highest first).

10. Prove that the following procedure correctly finds the minimum value in an array:

```
PROCEDURE findMin(list)
    min <- list[1]
    FOR i <- 2 TO LENGTH(list)
        IF (list[i] < min) THEN
            min <- list[i]
    RETURN min
```

11. Design an FSM for a combination lock that requires the sequence 3-5-1 to open. The lock should
    reset if an incorrect digit is entered.

12. Write a regex that matches valid email addresses. Requirements: one or more characters before @,
    one or more characters after @, a dot, and a domain of 2-4 characters.

13. Explain the difference between the greedy and dynamic programming approaches to the coin change
    problem. Give a specific example where the greedy approach fails.

14. Write a Python function that checks whether two strings are anagrams. What is the time
    complexity of your solution?

15. Design an FSM for a vending machine that accepts 10p, 20p, and 50p coins and dispenses items
    costing 60p. Include change-returning functionality.

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

5. Write a Python function that implements a queue using only a list (no `collections.deque`). What
   is the time complexity of enqueue and dequeue?
6. Design an FSM for a digital lock that accepts a 3-digit PIN. The lock unlocks only when the
   correct sequence is entered.
7. Write a regex that validates Irish car registration plates in the format XX-CC-XXXXXX (2 letters,
   2 digits, 1-6 digits).
8. Explain the difference between backtracking and divide and conquer. Give an example of each.
