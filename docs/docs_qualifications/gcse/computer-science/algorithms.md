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

### 1.3 Why Algorithms Matter

Understanding algorithms is foundational because every program you write is ultimately an algorithm.
The choice of algorithm determines how fast your program runs and how much memory it uses. For GCSE,
you need to be able to read, trace, and write algorithms in pseudocode and flowcharts.

Two different algorithms can solve the same problem but have vastly different performance. For
instance, searching through a million sorted records takes at most 20 comparisons with binary search
but could take all 1,000,000 comparisons with linear search. This difference grows faster than
intuition suggests because the number of operations scales with the **size of the input**, which is
exactly what Big-O notation captures.

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

**Intuition.** Think of looking for a word in a dictionary by reading every page from the start. If
the word is on page 500 of a 1000-page dictionary, you check 500 pages. If the word is not in the
dictionary at all, you check all 1000. This is exactly what linear search does with an array.

**Python implementation:**

```python
def linear_search(array, target):
    for i in range(len(array)):
        if array[i] == target:
            return i
    return -1

numbers = [4, 7, 2, 9, 1, 5, 8]
result = linear_search(numbers, 9)
print(f"Found at index: {result}")
```

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

**Intuition.** Think of looking up a word in a physical dictionary. You open the book somewhere near
the middle. If the word you want comes alphabetically after the page you opened to, you ignore the
entire first half and repeat the process in the second half. Each step halves the remaining pages.
For a 1000-page dictionary, this takes at most $\lceil \log_2 1000 \rceil = 10$ steps.

**Worked Example.** Search for 7 in the sorted array [1, 3, 5, 7, 9, 11, 13].

Step 1: low=0, high=6, mid=3, array[3]=7. Found. Return 3.

**Worked Example.** Search for 8 in [1, 3, 5, 7, 9, 11, 13].

Step 1: low=0, high=6, mid=3, array[3]=7. $7 \lt 8$, so low=4. Step 2: low=4, high=6, mid=5,
array[5]=11. $11 \gt 8$, so high=4. Step 3: low=4, high=4, mid=4, array[4]=9. $9 \gt 8$, so high=3.
Step 4: low=4, high=3. $4 \gt 3$, loop ends. Return -1 (not found).

**Worked Example.** Search for 3 in [1, 3, 5, 7, 9, 11, 13].

Step 1: low=0, high=6, mid=3, array[3]=7. $7 \gt 3$, so high=2. Step 2: low=0, high=2, mid=1,
array[1]=3. Found. Return 1.

**Python implementation:**

```python
def binary_search(array, target):
    low = 0
    high = len(array) - 1
    while low <= high:
        mid = (low + high) // 2
        if array[mid] == target:
            return mid
        elif array[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

sorted_numbers = [1, 3, 5, 7, 9, 11, 13]
result = binary_search(sorted_numbers, 7)
print(f"Found at index: {result}")
```

### 2.3 Comparing Search Algorithms

| Feature              | Linear Search | Binary Search |
| -------------------- | ------------- | ------------- |
| Data must be sorted? | No            | Yes           |
| Best case            | $O(1)$        | $O(1)$        |
| Average case         | $O(n)$        | $O(\log n)$   |
| Worst case           | $O(n)$        | $O(\log n)$   |

**How big is the difference?** For an array of 1,048,576 ($= 2^{20}$) elements:

- Linear search worst case: 1,048,576 comparisons
- Binary search worst case: $\log_2(1048576) = 20$ comparisons

Binary search is over 50,000 times faster in the worst case for this input size. This gap widens
even further as $n$ grows.

### 2.4 Why Must Binary Search Data Be Sorted?

Binary search relies on the **monotonic ordering** of the array to eliminate half of the remaining
search space at each step. When you compare `array[mid]` with the target, you can only conclude that
the target must be in the left half or the right half because the array is sorted. If the array were
unsorted, a value greater than `array[mid]` could appear anywhere, and you would have no basis for
discarding either half.

**Proof sketch.** Let the sorted array be $a_0 \le a_1 \le \cdots \le a_{n-1}$. Suppose the target
$t$ exists at index $k$. At each step, the algorithm maintains the invariant that
$a_{\mathrm{low}}
\le t \le a_{\text{high}}$. If $a_{\mathrm{mid}} \lt t$, then by monotonicity every
element at index $\le \mathrm{mid}$ is also $\lt t$, so $k \gt \mathrm{mid}$ and we safely set
$\mathrm{low} = \mathrm{mid}

- 1$. The argument is symmetric for the other case. The loop terminates when $\mathrm{low} \gt
\text{high}$,
  meaning the search space is empty and $t$ does not exist in the array.

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

**Intuition.** Imagine you are scanning through a line of students ordered by height. You compare
each adjacent pair. If the taller student is on the left, you swap them. After one full pass, the
tallest student has "bubbled" to the end of the line. You repeat, and each pass places the next
tallest in its correct position.

**Worked Example.** Sort [5, 1, 4, 2, 8].

Pass 1: Compare 5,1 -- swap -- [1, 5, 4, 2, 8] Compare 5,4 -- swap -- [1, 4, 5, 2, 8] Compare 5,2 --
swap -- [1, 4, 2, 5, 8] Compare 5,8 -- no swap -- [1, 4, 2, 5, 8] (4 comparisons, 3 swaps)

Pass 2: Compare 1,4 -- no swap -- [1, 4, 2, 5, 8] Compare 4,2 -- swap -- [1, 2, 4, 5, 8] Compare 4,5
-- no swap -- [1, 2, 4, 5, 8] (3 comparisons, 1 swap)

Pass 3: Compare 1,2 -- no swap -- [1, 2, 4, 5, 8] Compare 2,4 -- no swap -- [1, 2, 4, 5, 8] (2
comparisons, 0 swaps -- sorted, but algorithm continues)

Pass 4: Compare 1,2 -- no swap -- [1, 2, 4, 5, 8] (1 comparison, 0 swaps)

**Optimised version:** Stop if a pass makes no swaps (the list is already sorted).

```
FUNCTION bubble_sort_optimised(array):
    n = length(array)
    FOR i = 0 TO n - 2:
        swapped = false
        FOR j = 0 TO n - i - 2:
            IF array[j] > array[j + 1] THEN
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swapped = true
        IF NOT swapped THEN
            RETURN array
    RETURN array
```

**Time complexity:** Best case $O(n)$ (already sorted with optimisation), average and worst case
$O(n^2)$.

**Python implementation:**

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

numbers = [5, 1, 4, 2, 8]
print(bubble_sort(numbers))
```

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

**Intuition.** Imagine sorting a hand of playing cards. You hold the first card in your left hand
(sorted). You pick up the next card with your right hand and insert it into the correct position in
your left hand by shifting larger cards to the right. You repeat for every card.

**Worked Example.** Sort [5, 1, 4, 2, 8].

i=1: key=1, shift 5 right. [1, 5, 4, 2, 8] i=2: key=4, shift 5 right. [1, 4, 5, 2, 8] i=3: key=2,
shift 5, 4 right. [1, 2, 4, 5, 8] i=4: key=8, no shifting needed. [1, 2, 4, 5, 8]

**Time complexity:** Best case $O(n)$ (already sorted), average and worst case $O(n^2)$.

**Why insertion sort can be faster than bubble sort in practice.** Insertion sort only swaps
elements that are out of order, whereas bubble sort always scans the entire unsorted portion. For
nearly sorted data, insertion sort approaches $O(n)$ because few shifts are needed.

**Python implementation:**

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

numbers = [5, 1, 4, 2, 8]
print(insertion_sort(numbers))
```

### 3.3 Merge Sort (Higher Tier)

The **merge sort** is a divide-and-conquer algorithm. It recursively splits the array into halves,
sorts each half, then merges the sorted halves back together.

**Pseudocode:**

```
FUNCTION merge_sort(array):
    IF length(array) <= 1 THEN
        RETURN array
    mid = length(array) DIV 2
    left = merge_sort(array[0..mid-1])
    right = merge_sort(array[mid..end])
    RETURN merge(left, right)

FUNCTION merge(left, right):
    result = empty array
    WHILE left is not empty AND right is not empty:
        IF left[0] <= right[0] THEN
            append left[0] to result
            remove first element of left
        ELSE
            append right[0] to result
            remove first element of right
    append remaining elements of left to result
    append remaining elements of right to result
    RETURN result
```

**Intuition.** Think of sorting a stack of exam papers by marking scheme. You split the stack in
half and give each half to a colleague. They each split their stack again, and so on, until each
person has one paper (trivially sorted). Then you merge: the two single-paper stacks are merged into
a sorted pair, pairs into sorted fours, and so on.

**Time complexity:** $O(n \log n)$ in all cases (best, average, worst).

**Why $O(n \log n)$?** The array is divided $\log_2 n$ times (the depth of the recursion tree). At
each level, a total of $n$ elements are merged across all sub-arrays. So the total work is
$n \times
\log_2 n$.

**Worked Example.** Sort [38, 27, 43, 3].

Split: [38, 27] and [43, 3] Split: [38], [27] and [43], [3] Merge: [27, 38] and [3, 43] Merge: [3,
27, 38, 43]

### 3.4 Comparing Sorts

| Feature      | Bubble Sort | Insertion Sort | Merge Sort (Higher)           |
| ------------ | ----------- | -------------- | ----------------------------- |
| Best case    | $O(n)$      | $O(n)$         | $O(n \log n)$                 |
| Average case | $O(n^2)$    | $O(n^2)$       | $O(n \log n)$                 |
| Worst case   | $O(n^2)$    | $O(n^2)$       | $O(n \log n)$                 |
| Stable?      | Yes         | Yes            | Yes                           |
| In-place?    | Yes         | Yes            | No (needs $O(n)$ extra space) |

**Stable sort:** Equal elements maintain their relative order. Both bubble and insertion sort are
stable because they only swap when `array[j] > array[j+1]` (strictly greater), never when equal.
Merge sort is also stable if the merge step uses `<=` for the left element.

**In-place sort:** A sort that uses only $O(1)$ additional memory. Bubble and insertion sort are
in-place; merge sort typically requires a temporary array during merging.

## 4. Computational Thinking

### 4.1 Decomposition

**Decomposition** is breaking a complex problem into smaller, more manageable sub-problems.

**Example:** Creating a computer game can be decomposed into: game mechanics, graphics, sound, user
interface, scoring system.

Each sub-problem can then be tackled independently. Decomposition makes large problems tractable and
allows different team members to work on different parts simultaneously.

### 4.2 Abstraction

**Abstraction** is removing unnecessary details and focusing on the essential features of a problem.

**Example:** A map is an abstraction of the real world -- it shows roads and landmarks but omits
individual trees and buildings. The map creator decided which details are relevant (roads, names)
and which are irrelevant (tree species, building colours).

**Example:** When modelling a car in a racing game, you might represent it by position, velocity,
and direction while ignoring the brand, colour, and interior design. These irrelevant details would
make the model unnecessarily complex without improving the simulation.

### 4.3 Pattern Recognition

**Pattern recognition** is identifying similarities or patterns in problems to reuse solutions.

**Example:** Recognising that a login system and a registration system both need to validate user
input, so a common validation function can be written.

**Example:** Many sorting algorithms share the pattern of comparing two elements and deciding their
order. Bubble sort, insertion sort, and merge sort all use comparison as their fundamental operation
-- this is why they are called **comparison-based sorts**.

### 4.4 Algorithm Design

**Algorithm design** is the process of developing a step-by-step solution. Good algorithm design
starts with decomposition and pattern recognition, then expresses the solution as precise, ordered
steps.

## 5. Flowchart Problems

### 5.1 Finding the Maximum Value

```
SET max = array[0]
FOR each element in array:
    IF element > max THEN
        max = element
OUTPUT max
```

**Trace table for input [3, 7, 2, 9, 5]:**

| element | max |
| ------- | --- |
| 3       | 3   |
| 7       | 7   |
| 2       | 7   |
| 9       | 9   |
| 5       | 9   |

Output: 9

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

### 5.4 Summing Positive Numbers

```
SET total = 0
FOR each element in array:
    IF element > 0 THEN
        total = total + element
OUTPUT total
```

### 5.5 Finding the Average (Higher Tier)

```
SET total = 0
SET count = 0
FOR each element in array:
    total = total + element
    count = count + 1
IF count > 0 THEN
    OUTPUT total / count
ELSE
    OUTPUT "No data"
```

**Why check count > 0?** Division by zero is undefined. If the array is empty, attempting to divide
by zero will cause a runtime error. This check is a form of **defensive programming**.

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

**Worked Example (Higher Tier).** Trace the following algorithm for input [4, 2, 7, 1, 3]:

```
FOR i = 0 TO 3:
    FOR j = 0 TO 3 - i:
        IF array[j] > array[j + 1] THEN
            SWAP array[j] AND array[j + 1]
```

| i   | j   | array[j] | array[j+1] | Swap? | Array after     |
| --- | --- | -------- | ---------- | ----- | --------------- |
| 0   | 0   | 4        | 2          | Yes   | [2, 4, 7, 1, 3] |
| 0   | 1   | 4        | 7          | No    | [2, 4, 7, 1, 3] |
| 0   | 2   | 7        | 1          | Yes   | [2, 4, 1, 7, 3] |
| 0   | 3   | 7        | 3          | Yes   | [2, 4, 1, 3, 7] |
| 1   | 0   | 2        | 4          | No    | [2, 4, 1, 3, 7] |
| 1   | 1   | 4        | 1          | Yes   | [2, 1, 4, 3, 7] |
| 1   | 2   | 4        | 3          | Yes   | [2, 1, 3, 4, 7] |
| 2   | 0   | 2        | 1          | Yes   | [1, 2, 3, 4, 7] |
| 2   | 1   | 2        | 3          | No    | [1, 2, 3, 4, 7] |
| 3   | 0   | 1        | 2          | No    | [1, 2, 3, 4, 7] |

Final array: [1, 2, 3, 4, 7]

## 7. Big-O Notation (Higher Tier)

Big-O notation describes how the running time of an algorithm scales with the size of the input.

### 7.1 Common Complexities

| Complexity    | Name         | Meaning                                                |
| ------------- | ------------ | ------------------------------------------------------ |
| $O(1)$        | Constant     | Same time regardless of input size                     |
| $O(\log n)$   | Logarithmic  | Time grows slowly; each step cuts the problem size     |
| $O(n)$        | Linear       | Time grows proportionally with input size              |
| $O(n \log n)$ | Linearithmic | Slightly worse than linear; typical of efficient sorts |
| $O(n^2)$      | Quadratic    | Time grows with the square of input size               |

### 7.2 Why Big-O Matters

Suppose algorithm A has complexity $O(n^2)$ and algorithm B has complexity $O(n \log n)$. For
$n =
100$: A needs 10,000 operations, B needs approximately 664. For $n = 1,000,000$: A needs
$10^{12}$ operations, B needs approximately 20,000,000. The gap grows enormously, which is why
choosing the right algorithm matters for large datasets.

### 7.3 Rules of Thumb

- Nested loops multiply: two nested loops each iterating $n$ times give $O(n^2)$.
- Sequential statements: the dominant (largest) term wins. $O(n) + O(n^2) = O(n^2)$.
- Drop constants: $O(3n) = O(n)$.
- Drop lower-order terms: $O(n^2 + 5n + 100) = O(n^2)$.

## 8. Standard Algorithms (Higher Tier)

### 8.1 Finding the Mode

The mode is the most frequently occurring value in a dataset.

```python
def find_mode(array):
    frequency = {}
    for item in array:
        frequency[item] = frequency.get(item, 0) + 1
    max_count = max(frequency.values())
    for key, count in frequency.items():
        if count == max_count:
            return key
    return None

data = [3, 7, 3, 1, 7, 3, 9, 7, 7]
print(f"Mode: {find_mode(data)}")
```

### 8.2 Checking if an Array Is Sorted

```python
def is_sorted(array):
    for i in range(len(array) - 1):
        if array[i] > array[i + 1]:
            return False
    return True

print(is_sorted([1, 2, 3, 4, 5]))
print(is_sorted([1, 3, 2, 4, 5]))
```

### 8.3 Reversing an Array

```python
def reverse_array(array):
    left = 0
    right = len(array) - 1
    while left < right:
        array[left], array[right] = array[right], array[left]
        left += 1
        right -= 1
    return array

numbers = [1, 2, 3, 4, 5]
print(reverse_array(numbers))
```

## Common Pitfalls

- **Using binary search on unsorted data.** The data MUST be sorted for binary search to work.
  Running binary search on unsorted data may return a wrong answer or miss the target entirely.
- **Off-by-one errors in loops.** Check whether the loop should go from 0 to $n-1$ or from 1 to $n$.
  A loop from 0 to `length(array) - 1` visits every element; from 0 to `length(array)` would cause
  an index-out-of-bounds error.
- **Forgetting to update the search bounds correctly** in binary search. If the target is greater
  than the mid value, set low = mid + 1 (not mid). If you set low = mid, and mid equals low, the
  loop may never terminate.
- **Confusing the worst and best case time complexities.** Linear search is $O(1)$ in the best case
  (target is first) and $O(n)$ in the worst case. Always state which case you are analysing.
- **Not including a termination condition** in algorithms. Every loop must have a condition that
  eventually becomes false. An infinite loop causes the program to hang.
- **Confusing decomposition with abstraction.** Decomposition = breaking down into sub-problems.
  Abstraction = simplifying by removing irrelevant detail. Both are part of computational thinking
  but they serve different purposes.
- **Assuming bubble sort detects sorted data early without the optimisation.** The basic bubble sort
  always runs all $n-1$ passes regardless of whether the array is already sorted. Only the optimised
  version with a `swapped` flag can terminate early.
- **Forgetting that merge sort needs extra memory.** Unlike bubble sort and insertion sort, merge
  sort is not in-place. It requires $O(n)$ additional space for the temporary arrays used during
  merging.

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

11. **(Higher Tier)** Explain why merge sort has time complexity $O(n \log n)$.

12. **(Higher Tier)** A sorted array contains 2,000,000 elements. How many comparisons does binary
    search need in the worst case to determine that a value is not present?

13. **(Higher Tier)** Write pseudocode for a procedure that checks whether an array is sorted in
    ascending order.

14. **(Higher Tier)** Explain the difference between a stable sort and an unstable sort. Why might
    stability matter?
