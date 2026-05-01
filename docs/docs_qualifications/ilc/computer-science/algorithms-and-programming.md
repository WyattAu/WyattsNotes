---
title: Algorithms and Programming
description:
  Algorithms and Programming — What is an Algorithm? (OL/HL); Representing
  Algorithms; Programming Constructs (OL/HL); Sequence.
date: 2026-04-14
tags:
  - Computer Science
  - ILC
categories:
  - Computer Science
slug: algorithms-and-programming
---

# Algorithms and Programming

This topic covers algorithm design, programming constructs, searching and sorting algorithms, and
computational problem solving.

## What is an Algorithm? (OL/HL)

An algorithm is a step-by-step procedure for solving a problem. It must:

1. Be unambiguous.
2. Have a defined input and output.
3. Be finite (terminate).
4. Be effective (each step is feasible).

### Representing Algorithms

- **Pseudocode:** structured English-like description.
- **Flowcharts:** visual diagram using standard symbols (oval for start/end, rectangle for process,
  diamond for decision, parallelogram for I/O).

**Choosing a representation:**

| Representation   | Precision | Readability | Executable |
| ---------------- | --------- | ----------- | ---------- |
| Natural language | Low       | High        | No         |
| Pseudocode       | Medium    | Medium      | No         |
| Flowchart        | Medium    | High        | No         |
| Programming code | High      | Low         | Yes        |

## Programming Constructs (OL/HL)

### Sequence

Statements executed in order.

```python
name = input("Enter your name: ")
print("Hello, " + name)
```

### Selection (If/Else)

```python
age = int(input("Enter your age: "))
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")
```

### Iteration (Loops)

**Definite (count-controlled):**

```python
for i in range(1, 11):
    print(i)
```

**Indefinite (condition-controlled):**

```python
total = 0
while True:
    number = int(input("Enter a number (0 to stop): "))
    if number == 0:
        break
    total += number
print("Total:", total)
```

### Functions and Procedures (OL/HL)

A function returns a value; a procedure does not.

```python
def calculate_average(numbers):
    return sum(numbers) / len(numbers)

marks = [65, 72, 58, 90, 81]
avg = calculate_average(marks)
print(f"Average: {avg:.1f}")
```

### Parameters and Return Values (HL)

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

for num in range(2, 20):
    if is_prime(num):
        print(f"{num} is prime")
```

**Proof that is_prime is correct.** The function checks all integers $i$ from 2 to
$\lfloor\sqrt{n}\rfloor$. If $n$ is composite, it has a factor $f \le \sqrt{n}$. The loop checks
every such $f$, so it will find a divisor. If no divisor is found, $n$ has no factor $\le
\sqrt{n}$,
and therefore no factor at all (since if $n = a \times b$ with $a \gt \sqrt{n}$, then
$b \lt \sqrt{n}$, contradicting no divisor found). Hence $n$ is prime. $\blacksquare$

## Data Structures (OL/HL)

### Arrays (Lists)

```python
students = ["Alice", "Bob", "Charlie", "Diana"]

print(students[0])  # Alice

grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(grid[1][2])  # 6
```

### Records (Dictionaries in Python) (HL)

```python
student = {
    "name": "Alice",
    "age": 17,
    "grade": "HL",
    "marks": [85, 92, 78]
}
print(student["name"])
print(sum(student["marks"]) / len(student["marks"]))
```

### Stacks (HL)

A stack follows LIFO (Last In, First Out).

```python
stack = []

stack.append(10)  # push
stack.append(20)
stack.append(30)

top = stack.pop()  # pop: 30
print(f"Top element removed: {top}")
print(f"Stack: {stack}")  # [10, 20]
```

**Stack complexity:**

| Operation | Time Complexity |
| --------- | --------------- |
| push      | $O(1)$          |
| pop       | $O(1)$          |
| peek      | $O(1)$          |
| search    | $O(n)$          |

### Queues (HL)

A queue follows FIFO (First In, First Out).

```python
from collections import deque

queue = deque()
queue.append(10)  # enqueue
queue.append(20)
queue.append(30)

front = queue.popleft()  # dequeue: 10
print(f"Front element removed: {front}")
print(f"Queue: {list(queue)}")  # [20, 30]
```

## Searching Algorithms (OL/HL)

### Linear Search (OL/HL)

Checks each element sequentially.

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

numbers = [34, 7, 23, 56, 12, 89, 45]
result = linear_search(numbers, 56)
print(f"Found at index: {result}")  # 3
```

**Time complexity:** $O(n)$.

**Proof of correctness.** The loop examines every element from index 0 to $n-1$. If the target is at
index $k$, the loop reaches index $k$ and returns $k$. If the target is not in the array, the loop
completes without finding it and returns -1. $\blacksquare$

### Binary Search (HL)

Requires a sorted array. Repeatedly halves the search space.

```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

sorted_numbers = [7, 12, 23, 34, 45, 56, 89]
result = binary_search(sorted_numbers, 45)
print(f"Found at index: {result}")  # 4
```

**Time complexity:** $O(\log n)$.

**Worked Example (HL).** Trace binary search on [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] searching
for 23.

Initial: low=0, high=9. mid=4, arr[4]=16. 16 &lt; 23, so low=5. low=5, high=9. mid=7, arr[7]=56. 56
&gt; 23, so high=6. low=5, high=6. mid=5, arr[5]=23. Found at index 5.

## Sorting Algorithms (OL/HL)

### Bubble Sort (OL/HL)

Repeatedly compares adjacent elements and swaps them if in the wrong order.

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(numbers))
```

**Time complexity:** $O(n^2)$ worst and average. $O(n)$ best (already sorted, with early
termination).

### Insertion Sort (HL)

Builds the sorted array one element at a time.

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
print(insertion_sort(numbers))
```

**Time complexity:** $O(n^2)$ worst and average. $O(n)$ best (already sorted).

### Quick Sort (HL)

Divide and conquer. Choose a pivot, partition into elements less than and greater than the pivot,
then recursively sort.

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

numbers = [64, 34, 25, 12, 22, 11, 90]
print(quick_sort(numbers))
```

**Time complexity:** $O(n \log n)$ average, $O(n^2)$ worst case.

### Sorting Algorithm Comparison (HL)

| Algorithm      | Best          | Average       | Worst         | Stable | Space       |
| -------------- | ------------- | ------------- | ------------- | ------ | ----------- |
| Bubble Sort    | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Insertion Sort | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Quick Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | No     | $O(\log n)$ |
| Merge Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | Yes    | $O(n)$      |

## Big O Notation (HL)

Big O notation describes the worst-case time complexity of an algorithm.

| Complexity    | Name         | Example                             |
| ------------- | ------------ | ----------------------------------- |
| $O(1)$        | Constant     | Accessing an array element by index |
| $O(\log n)$   | Logarithmic  | Binary search                       |
| $O(n)$        | Linear       | Linear search                       |
| $O(n \log n)$ | Linearithmic | Merge sort, quick sort (average)    |
| $O(n^2)$      | Quadratic    | Bubble sort, insertion sort         |
| $O(2^n)$      | Exponential  | Recursive Fibonacci                 |

**Rules for analysing code:**

1. Sequential statements: $O(a) + O(b) = O(\max(a, b))$.
2. Nested loops: $O(a) \times O(b) = O(a \cdot b)$.
3. Drop constants and lower-order terms.

## Recursion (HL)

A function that calls itself. Must have a base case to prevent infinite recursion.

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120
```

**Proof of correctness by induction.** Base case: `factorial(0) = 1 = 0!`. Inductive step: assume
`factorial(k) = k!` for all $k \lt n$. Then `factorial(n) = n * factorial(n-1) = n * (n-1)! = n!`.
$\blacksquare$

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
# 0 1 1 2 3 5 8 13 21 34
```

**Why recursive Fibonacci is $O(2^n)$.** Each call spawns two subcalls. The recursion tree has $2^n$
nodes. Many values are recomputed redundantly.

**Efficient iterative Fibonacci:**

```python
def fib_iterative(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

Time complexity: $O(n)$.

## Validation and Verification (OL/HL)

### Validation

Ensuring data is reasonable and sensible before processing.

- **Range check:** value is within acceptable range.
- **Type check:** value is the correct data type.
- **Length check:** string has the correct number of characters.
- **Presence check:** a field is not empty.
- **Format check:** data matches a pattern (e.g., email format).

```python
def validate_age(age):
    if not isinstance(age, int):
        return False, "Age must be an integer."
    if age < 0 or age > 120:
        return False, "Age must be between 0 and 120."
    return True, "Valid."
```

### Verification

Ensuring data has been entered correctly (no transcription errors).

- **Double entry:** enter data twice and compare.
- **Visual check:** proofread data on screen.
- **Check digit:** a calculated digit added to a number (e.g., ISBN).

## Additional Algorithm Topics

### Merge Sort in Detail (HL)

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
```

**Trace of merge sort on [38, 27, 43, 3]:**

Split: [38, 27] and [43, 3].
Sort [38, 27]: [27, 38]. Sort [43, 3]: [3, 43].
Merge: [3, 27, 38, 43].

### Quick Sort in Detail (HL)

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

**Time complexity:** $O(n \log n)$ average, $O(n^2)$ worst case.

### Sorting Algorithm Comparison Table (HL)

| Algorithm      | Best          | Average       | Worst         | Stable | Space       |
| -------------- | ------------- | ------------- | ------------- | ------ | ----------- |
| Bubble Sort    | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Insertion Sort | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Quick Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | No     | $O(\log n)$ |
| Merge Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | Yes    | $O(n)$      |

### Recursion in Detail (HL)

**Euclid's algorithm for GCD:**

```python
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

print(gcd(48, 18))  # 6
```

**Proof of termination.** At each recursive call, `b` becomes `a % b`, which is strictly less than
`b`. Since `b` is a non-negative integer that decreases, it must eventually reach 0, triggering the
base case. $lacksquare$

**Towers of Hanoi:**

```python
def hanoi(n, source, target, auxiliary):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return
    hanoi(n - 1, source, auxiliary, target)
    print(f"Move disk {n} from {source} to {target}")
    hanoi(n - 1, auxiliary, target, source)
```

**Time complexity:** $O(2^n)$ -- each call generates two subcalls.

### Data Structures: Linked Lists (HL)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def delete(self, data):
        if not self.head:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def search(self, data):
        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
```

**Linked list complexity:**

| Operation  | Time Complexity |
| ---------- | --------------- |
| Append     | $O(n)$          |
| Delete     | $O(n)$          |
| Search     | $O(n)$          |
| Insert head| $O(1)$          |

## Additional Practice Questions

5. Write a Python function that checks whether a string is a palindrome. What is the time
   complexity?

6. Explain why merge sort has $O(n \log n)$ time complexity in all cases.

7. Write pseudocode for a procedure that removes duplicates from a sorted array in-place.

8. Prove that bubble sort correctly sorts an array by showing that after $k$ passes, the $k$ largest
   elements are in their final positions.

9. Write a Python function that implements a linked list with append, delete, and search methods.
   What is the time complexity of each?

10. Explain the difference between recursion and iteration. Give an example where recursion is more
    natural.

11. Write a Python function that finds all pairs in an array that sum to a given target.

12. Trace quick sort on the array [10, 80, 30, 90, 40, 50, 70]. Use the middle element as the pivot.

13. Explain the concept of algorithmic efficiency. Why is Big O notation useful?

14. Write a Python function that checks if a binary tree is a valid binary search tree.

15. Explain the difference between a stack and a queue. Give a real-world application of each.

## Algorithm Design Patterns

### Linear Search with Count

```python
def linear_search_count(arr, target):
    indices = []
    for i in range(len(arr)):
        if arr[i] == target:
            indices.append(i)
    return indices

numbers = [3, 7, 3, 1, 3, 9, 3]
print(linear_search_count(numbers, 3))  # [0, 2, 4, 6]
```

### Finding All Pairs with a Given Sum

```python
def pairs_with_sum(arr, target):
    seen = set()
    pairs = []
    for num in arr:
        complement = target - num
        if complement in seen:
            pairs.append((complement, num))
        seen.add(num)
    return pairs

print(pairs_with_sum([2, 4, 3, 5, 7, 8, 9], 12))
# [(4, 8), (5, 7), (3, 9)]
```

**Time complexity:** $O(n)$ -- single pass using a set.

### Binary Search on a String

```python
def binary_search_string(sorted_list, target):
    low = 0
    high = len(sorted_list) - 1
    while low <= high:
        mid = (low + high) // 2
        if sorted_list[mid] == target:
            return mid
        elif sorted_list[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

words = ["apple", "banana", "cherry", "date", "fig", "grape"]
print(binary_search_string(words, "date"))  # 3
```

### Insertion Sort Trace in Detail

**Trace on [5, 2, 4, 6, 1, 3]:**

| Step | Array State     | Key | Shifts | Comparisons |
| ---- | --------------- | --- | ------ | ----------- |
| 1    | [5, 2, 4, 6, 1, 3] | 2   | 1      | 1           |
| 2    | [2, 5, 4, 6, 1, 3] | 4   | 1      | 2           |
| 3    | [2, 4, 5, 6, 1, 3] | 6   | 0      | 1           |
| 4    | [2, 4, 5, 6, 1, 3] | 1   | 4      | 4           |
| 5    | [1, 2, 4, 5, 6, 3] | 3   | 2      | 3           |

Final: [1, 2, 3, 4, 5, 6]. Total comparisons: $1 + 2 + 1 + 4 + 3 = 11$.

### Two-Dimensional Array Algorithms

**Sum of main diagonal:**

```python
def diagonal_sum(matrix):
    total = 0
    for i in range(len(matrix)):
        total += matrix[i][i]
    return total

grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(diagonal_sum(grid))  # 1 + 5 + 9 = 15
```

**Rotating a matrix 90 degrees clockwise:**

```python
def rotate_90(matrix):
    n = len(matrix)
    result = [[0] * n for _ in range(n)]
    for r in range(n):
        for c in range(n):
            result[c][n - 1 - r] = matrix[r][c]
    return result
```

## Additional Practice Questions

11. Write a Python function that implements a binary search on a sorted list of strings.

12. Write a Python function that removes all even numbers from a list in-place.

13. Trace insertion sort on the array [8, 3, 5, 1, 7, 2, 6, 4]. Show the array after each step.

14. Write a Python function that rotates a matrix 90 degrees clockwise. What is the time complexity?

15. Explain why the following code has $O(n^2)$ time complexity:

```python
for i in range(n):
    for j in range(i, n):
        print(i, j)
```

16. Write a Python function that finds the longest word in a string. What is the time complexity?

17. Write a recursive Python function that computes the sum of digits of a positive integer.

18. Write a Python function that checks whether two strings are anagrams of each other.

## Common Pitfalls

1. **Off-by-one errors** -- arrays are 0-indexed; range boundaries need careful attention.
2. **Binary search** requires a sorted array.
3. **Bubble sort** can be optimised by stopping early if no swaps occur.
4. **Recursion** -- always include a base case; recursive Fibonacci is $O(2^n)$ (use iteration for
   efficiency).
5. **Big O** -- describe the worst case, not the best case.
6. **Confusing validation and verification.** Validation checks if data is reasonable; verification
   checks if data was entered correctly.
7. **Integer division in Python** -- use `//` for integer division, `/` for float division.

## Practice Questions

### Ordinary Level

1. Write pseudocode for an algorithm that finds the largest number in an array.
2. Explain the difference between a for loop and a while loop.
3. Describe how bubble sort works with an example.
4. Define validation and give two examples of validation checks.

### Higher Level

1. Implement binary search in Python and trace its execution on the array [2, 5, 8, 12, 16, 23, 38,
   56, 72, 91] searching for 23.
2. Write a recursive function in Python to calculate the nth triangular number.
3. Compare the time complexities of bubble sort, insertion sort, and quick sort.
4. Implement a queue using two stacks in Python.

5. Write a Python function that checks whether a string is a palindrome. What is the time
   complexity?
6. Explain why merge sort has $O(n \log n)$ time complexity in all cases.
7. Write pseudocode for a procedure that removes duplicates from a sorted array in-place.
8. Prove that bubble sort correctly sorts an array by showing that after $k$ passes, the $k$ largest
   elements are in their final positions.
