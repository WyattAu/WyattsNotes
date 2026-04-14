---
title: Algorithms and Programming
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

## Data Structures (OL/HL)

### Arrays (Lists)

```python
# One-dimensional array
students = ["Alice", "Bob", "Charlie", "Diana"]

# Accessing elements (0-indexed)
print(students[0])  # Alice

# Two-dimensional array
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
            return i  # found at index i
    return -1  # not found

numbers = [34, 7, 23, 56, 12, 89, 45]
result = linear_search(numbers, 56)
print(f"Found at index: {result}")  # 3
```

**Time complexity:** $O(n)$.

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
print(bubble_sort(numbers))  # [11, 12, 22, 25, 34, 64, 90]
```

**Time complexity:** $O(n^2)$.

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

**Time complexity:** $O(n^2)$.

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

## Recursion (HL)

A function that calls itself. Must have a base case to prevent infinite recursion.

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
# 0 1 1 2 3 5 8 13 21 34
```

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

## Common Pitfalls

1. **Off-by-one errors** -- arrays are 0-indexed; range boundaries need careful attention.
2. **Binary search** requires a sorted array.
3. **Bubble sort** can be optimised by stopping early if no swaps occur.
4. **Recursion** -- always include a base case; recursive Fibonacci is $O(2^n)$ (use iteration for
   efficiency).
5. **Big O** -- describe the worst case, not the best case.

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
