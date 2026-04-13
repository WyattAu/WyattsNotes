---
title: Algorithms
date: 2026-04-14
tags:
  - Computer Science
  - GCSE
categories:
  - Computer Science
slug: algorithms
---

## Algorithms

:::info
Board Coverage AQA Paper 1 | Edexcel Paper 1 | OCR J277 Paper 1 | WJEC Unit 2
:::

## 1. What Is an Algorithm?

An **algorithm** is a finite set of precise, step-by-step instructions for solving a problem. A good
algorithm is:

- **Unambiguous:** Each step is clear and has exactly one meaning
- **Finite:** It terminates after a finite number of steps
- **Effective:** Each step can be carried out in practice
- **General:** It solves a class of problems, not just one specific instance

### 1.1 Representing Algorithms

Algorithms can be represented in several ways:

**Flowcharts:** Visual diagrams using standard symbols (terminator, process, decision, I/O,
connectors).

**Pseudocode:** Structured English-like code that describes the logic without being tied to a
specific programming language.

**Structured English:** Plain English with a logical structure.

### 1.2 Standard Flowchart Symbols

| Symbol     | Shape                  | Purpose                                |
| ---------- | ---------------------- | -------------------------------------- |
| Terminator | Oval/rounded rectangle | Start/Stop                             |
| Process    | Rectangle              | A single action or assignment          |
| Decision   | Diamond                | A yes/no question or condition         |
| I/O        | Parallelogram          | Input or output                        |
| Connector  | Circle                 | Links to another part of the flowchart |

## 2. Searching Algorithms

### 2.1 Linear Search

The **linear search** checks each element in a list one by one until the target is found or the end
of the list is reached.

**Pseudocode:**

```
FUNCTION linear_search(array, target):
    FOR i = 0 TO length(array) - 1:
        IF array[i] == target THEN
            RETURN i
    RETURN -1
```

**Advantages:**

- Works on unsorted data
- Simple to implement

**Disadvantages:**

- Slow for large lists (average case: $n/2$ comparisons)
- Worst case: $n$ comparisons (target is at the end or not present)

**Time complexity:** $O(n)$

### 2.2 Binary Search

The **binary search** works on sorted data. It repeatedly divides the search interval in half.

**Pseudocode:**

```
FUNCTION binary_search(array, target):
    low = 0
    high = length(array) - 1
    WHILE low <= high:
        mid = (low + high) DIV 2
        IF array[mid] == target THEN
            RETURN mid
        ELSE IF array[mid] < target THEN
            low = mid + 1
        ELSE
            high = mid - 1
    RETURN -1
```

**Advantages:**

- Very fast for large sorted lists
- Each comparison eliminates half the remaining elements

**Disadvantages:**

- Data must be sorted first
- More complex to implement

**Time complexity:** $O(\log n)$

**Worked Example.** Search for 7 in the sorted array [1, 3, 5, 7, 9, 11, 13].

Step 1: low=0, high=6, mid=3, array[3]=7. Found. Return 3.

**Worked Example.** Search for 8 in [1, 3, 5, 7, 9, 11, 13].

Step 1: low=0, high=6, mid=3, array[3]=7. $7 \lt 8$, so low=4. Step 2: low=4, high=6, mid=5,
array[5]=11. $11 \gt 8$, so high=4. Step 3: low=4, high=4, mid=4, array[4]=9. $9 \gt 8$, so high=3.
Step 4: low=4, high=3. $4 \gt 3$, loop ends. Return -1 (not found).

### 2.3 Comparing Search Algorithms

| Feature              | Linear Search | Binary Search |
| -------------------- | ------------- | ------------- |
| Data must be sorted? | No            | Yes           |
| Best case            | $O(1)$        | $O(1)$        |
| Average case         | $O(n)$        | $O(\log n)$   |
| Worst case           | $O(n)$        | $O(\log n)$   |

## 3. Sorting Algorithms

### 3.1 Bubble Sort

The **bubble sort** repeatedly steps through the list, compares adjacent elements, and swaps them if
they are in the wrong order.

**Pseudocode:**

```
FUNCTION bubble_sort(array):
    n = length(array)
    FOR i = 0 TO n - 2:
        FOR j = 0 TO n - i - 2:
            IF array[j] > array[j + 1] THEN
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
    RETURN array
```

**Worked Example.** Sort [5, 1, 4, 2, 8].

Pass 1: [1, 4, 2, 5, 8] (4 comparisons, 3 swaps) Pass 2: [1, 2, 4, 5, 8] (3 comparisons, 1 swap)
Pass 3: [1, 2, 4, 5, 8] (2 comparisons, 0 swaps -- sorted, but algorithm continues) Pass 4: [1, 2,
4, 5, 8] (1 comparison, 0 swaps)

**Optimised version:** Stop if a pass makes no swaps (the list is already sorted).

**Time complexity:** Best case $O(n)$ (already sorted with optimisation), average and worst case
$O(n^2)$.

### 3.2 Insertion Sort

The **insertion sort** builds the sorted array one element at a time by inserting each element into
its correct position.

**Pseudocode:**

```
FUNCTION insertion_sort(array):
    FOR i = 1 TO length(array) - 1:
        key = array[i]
        j = i - 1
        WHILE j >= 0 AND array[j] > key:
            array[j + 1] = array[j]
            j = j - 1
        array[j + 1] = key
    RETURN array
```

**Worked Example.** Sort [5, 1, 4, 2, 8].

i=1: key=1, shift 5 right. [1, 5, 4, 2, 8] i=2: key=4, shift 5 right. [1, 4, 5, 2, 8] i=3: key=2,
shift 5, 4 right. [1, 2, 4, 5, 8] i=4: key=8, no shifting needed. [1, 2, 4, 5, 8]

**Time complexity:** Best case $O(n)$ (already sorted), average and worst case $O(n^2)$.

### 3.3 Comparing Sorts

| Feature      | Bubble Sort | Insertion Sort |
| ------------ | ----------- | -------------- |
| Best case    | $O(n)$      | $O(n)$         |
| Average case | $O(n^2)$    | $O(n^2)$       |
| Worst case   | $O(n^2)$    | $O(n^2)$       |
| Stable?      | Yes         | Yes            |
| In-place?    | Yes         | Yes            |

**Stable sort:** Equal elements maintain their relative order. Both bubble and insertion sort are
stable.

## 4. Computational Thinking

### 4.1 Decomposition

**Decomposition** is breaking a complex problem into smaller, more manageable sub-problems.

**Example:** Creating a computer game can be decomposed into: game mechanics, graphics, sound, user
interface, scoring system.

### 4.2 Abstraction

**Abstraction** is removing unnecessary details and focusing on the essential features of a problem.

**Example:** A map is an abstraction of the real world -- it shows roads and landmarks but omits
individual trees and buildings.

### 4.3 Pattern Recognition

**Pattern recognition** is identifying similarities or patterns in problems to reuse solutions.

**Example:** Recognising that a login system and a registration system both need to validate user
input, so a common validation function can be written.

## 5. Flowchart Problems

### 5.1 Finding the Maximum Value

```
SET max = array[0]
FOR each element in array:
    IF element > max THEN
        max = element
OUTPUT max
```

### 5.2 Counting Occurrences

```
SET count = 0
FOR each element in array:
    IF element == target THEN
        count = count + 1
OUTPUT count
```

### 5.3 Input Validation

```
REPEAT
    INPUT number
    IF number < 1 OR number > 10 THEN
        OUTPUT "Error: enter a number between 1 and 10"
UNTIL number >= 1 AND number <= 10
```

## 6. Trace Tables

A **trace table** is used to record the values of variables as an algorithm executes, to check for
correctness.

**Worked Example.** Trace the following algorithm with input: 3, 1, 4, 1, 5.

```
count = 0
total = 0
FOR i = 1 TO 5:
    INPUT num
    IF num > 2 THEN
        total = total + num
        count = count + 1
OUTPUT total / count
```

| i   | num | num > 2 | total | count | Output |
| --- | --- | ------- | ----- | ----- | ------ |
| 1   | 3   | Yes     | 3     | 1     |        |
| 2   | 1   | No      | 3     | 1     |        |
| 3   | 4   | Yes     | 7     | 2     |        |
| 4   | 1   | No      | 7     | 2     |        |
| 5   | 5   | Yes     | 12    | 3     | 4      |

Output: 12 / 3 = 4.

## Common Pitfalls

- **Using binary search on unsorted data.** The data MUST be sorted for binary search to work.
- **Off-by-one errors in loops.** Check whether the loop should go from 0 to $n-1$ or from 1 to $n$.
- **Forgetting to update the search bounds correctly** in binary search. If the target is greater
  than the mid value, set low = mid + 1 (not mid).
- **Confusing the worst and best case time complexities.** Linear search is $O(1)$ in the best case
  (target is first) and $O(n)$ in the worst case.
- **Not including a termination condition** in algorithms. Every loop must have a condition that
  eventually becomes false.
- **Confusing decomposition with abstraction.** Decomposition = breaking down; abstraction =
  simplifying by removing detail.

## Practice Questions

1. Write pseudocode for a linear search that returns the position of a value in an array, or -1 if
   not found.

2. Use a trace table to show how bubble sort sorts the array [4, 2, 7, 1, 3].

3. Explain the difference between linear search and binary search, including when each would be
   appropriate.

4. Use a trace table to show how binary search finds the value 6 in the sorted array [2, 4, 6, 8,
   10, 12, 14].

5. Describe the three parts of computational thinking and give an example of each.

6. Write pseudocode for an algorithm that reads 10 numbers and outputs the largest and smallest.

7. Explain why binary search cannot be used on an unsorted list.

8. Compare bubble sort and insertion sort, explaining the advantages and disadvantages of each.

9. Write pseudocode for an algorithm that counts how many even numbers are in an array.

10. Explain what is meant by "abstraction" and give an example from everyday life.
