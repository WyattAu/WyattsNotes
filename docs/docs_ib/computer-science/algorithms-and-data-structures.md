---
title: Algorithms and Data Structures
date: 2026-04-09T00:00:00.000Z
tags:
  - IB
  - CS
categories:
  - IB
  - CS
slug: algorithms-and-data-structures
---

## Algorithmic Thinking

### The Four Pillars of Computational Thinking

Computational thinking is the process of formulating problems and their solutions so that the
solutions are representable as information-processing steps that can be executed by an
information-processing agent. The IB syllabus identifies four foundational pillars: decomposition,
pattern recognition, abstraction, and algorithm design.

**Decomposition** is the practice of breaking a complex problem into smaller, more manageable
sub-problems. Each sub-problem can be solved independently and the solutions composed back together.
For instance, building a search engine requires decomposing the system into a web crawler, an
indexer, a ranking algorithm, and a query parser. Decomposition enables parallel development,
simplifies testing, and makes large problems tractable.

**Pattern recognition** involves identifying similarities or recurring themes within or across
problems. Once a pattern is identified, the same solution strategy can be reused. In sorting, the
recurring sub-problem of placing one element in its correct position relative to already-sorted
elements appears in insertion sort; the same pattern of comparing adjacent elements appears in
bubble sort. Recognizing that two problems share a structural pattern allows the transfer of proven
techniques.

**Abstraction** is the process of filtering out irrelevant details and focusing on the essential
characteristics of a problem. A map abstracts away individual buildings and trees to show roads and
boundaries; similarly, an algorithm abstracts away hardware specifics to describe logic. In
computational thinking, abstraction means defining what data is needed and how it transforms,
without specifying every low-level operation. This enables the creation of general-purpose
solutions.

**Algorithm design** is the construction of a step-by-step procedure that solves a given problem. A
well-designed algorithm must be unambiguous, finite (terminating), and correct. Design techniques
include brute force, greedy strategies, divide and conquer, dynamic programming, and backtracking.
The IB syllabus primarily examines the first three.

### Pseudocode Conventions (IB Style)

The IB uses a specific pseudocode standard that must be understood for examinations. The key
conventions are as follows.

**Variable assignment** uses the left arrow:

```
count ← 0
total ← total + 1
```

**Input and output** use the keywords `INPUT` and `OUTPUT`:

```
INPUT name
OUTPUT "Hello, ", name
```

**Selection** uses `IF ... THEN ... ELSE ... END IF`:

```
IF mark >= 50
  THEN OUTPUT "Pass"
  ELSE OUTPUT "Fail"
END IF
```

**Looping** includes counted loops (`FOR ... END FOR`) and conditional loops (`WHILE ... END WHILE`,
`REPEAT ... UNTIL`):

```
FOR i ← 1 TO 10
  OUTPUT i
END FOR

WHILE x > 0
  x ← x - 1
END WHILE

REPEAT
  x ← x - 1
UNTIL x = 0
```

**Case selection** uses `CASE OF ... OTHERWISE ... ENDCASE`:

```
CASE OF grade
  'A' : OUTPUT "Excellent"
  'B' : OUTPUT "Good"
  OTHERWISE OUTPUT "Try harder"
ENDCASE
```

**Modular programming** uses `FUNCTION` and `PROCEDURE`. Functions return a value; procedures do
not:

```
FUNCTION calculateArea(length, width) RETURNS REAL
  RETURN length * width
END FUNCTION

PROCEDURE greet(name)
  OUTPUT "Hello, ", name
END PROCEDURE
```

**Array access** uses zero-indexed square brackets. Multi-dimensional arrays use comma-separated
indices:

```
arr[0] ← 5
matrix[i, j] ← i + j
```

**String operations** use functions like `LENGTH()`, `SUBSTRING()`, and concatenation with `+`:

```
len ← LENGTH(name)
first ← SUBSTRING(name, 0, 1)
full ← first + " " + last
```

### Flowcharts

Flowcharts provide a visual representation of an algorithm. The IB standard defines six flowchart
symbols, each with a specific shape and meaning:

The **terminator** (rounded rectangle or oval) marks the start or end of the algorithm. Every
flowchart begins with a "Start" terminator and ends with an "End" terminator.

The **process** (rectangle) represents a single computation step or assignment, such as
`count ← count + 1`.

The **input/output parallelogram** represents data entering or leaving the algorithm, such as
`INPUT x` or `OUTPUT result`.

The **decision** (diamond) represents a conditional branch. It contains a Boolean expression and has
two outgoing arrows: one labeled "Yes" (or "True") and one labeled "No" (or "False").

The **flow line** (arrow) shows the direction of control flow. Flow lines connect symbols and
indicate the sequence of execution.

The **predefined process** (double-sided rectangle) represents a call to a subroutine or module.

Flowcharts are especially useful for illustrating the control flow of algorithms with complex
branching, such as sorting algorithms. However, they become unwieldy for large algorithms and lack
the precision of pseudocode for expressing data structures and detailed computations.

### Trace Tables

A trace table is a systematic method for verifying the correctness of an algorithm by simulating its
execution with specific input values. Each column represents a variable, and each row represents a
step of execution.

Consider the following algorithm to find the sum of integers from 1 to `n`:

```
FUNCTION sumToN(n) RETURNS INTEGER
  total ← 0
  i ← 1
  WHILE i <= n
    total ← total + i
    i ← i + 1
  END WHILE
  RETURN total
END FUNCTION
```

With input `n = 4`, the trace table is:

| Step | i   | n   | total | i `<=` n |
| ---- | --- | --- | ----- | -------- |
| 1    | 1   | 4   | 0     | True     |
| 2    | 1   | 4   | 1     | True     |
| 3    | 2   | 4   | 1     | True     |
| 4    | 2   | 4   | 3     | True     |
| 5    | 3   | 4   | 3     | True     |
| 6    | 3   | 4   | 6     | True     |
| 7    | 4   | 4   | 6     | True     |
| 8    | 4   | 4   | 10    | False    |

The final value of `total` is 10, which equals $1 + 2 + 3 + 4 = 10$. The algorithm is correct for
this input. A trace table does not prove correctness for all inputs, but it builds confidence and
helps identify off-by-one errors and infinite loops.

## Searching Algorithms

### Linear Search

Linear search is the simplest search algorithm. It examines each element of a collection
sequentially until the target is found or the end of the collection is reached.

**IB Pseudocode:**

```
FUNCTION linearSearch(arr, target) RETURNS INTEGER
  FOR i ← 0 TO LENGTH(arr) - 1
    IF arr[i] = target
      THEN RETURN i
    END IF
  END FOR
  RETURN -1
END FUNCTION
```

**Trace with `arr = [7, 3, 9, 1, 5]`, `target = 9`:**

| Step | i   | arr[i] | arr[i] = target | Action   |
| ---- | --- | ------ | --------------- | -------- |
| 1    | 0   | 7      | False           | Continue |
| 2    | 1   | 3      | False           | Continue |
| 3    | 2   | 9      | True            | Return 2 |

The target is found at index 2. If the target were 6, the algorithm would examine all five elements
and return -1.

**Time complexity:** In the worst case, the target is the last element or is not present, requiring
$n$ comparisons. In the best case, the target is the first element, requiring 1 comparison. On
average, $\frac{n}{2}$ comparisons are needed. Therefore, the worst-case time complexity is $O(n)$.

**Space complexity:** $O(1)$, as no additional data structures are required beyond a few variables.

**Key properties:** Linear search works on any collection, sorted or unsorted. It requires no
preprocessing. However, its performance degrades linearly with input size, making it impractical for
large datasets.

### Binary Search

Binary search exploits the property of sorted data to achieve logarithmic search time. It repeatedly
divides the search interval in half by comparing the target to the middle element.

**IB Pseudocode:**

```
FUNCTION binarySearch(arr, target) RETURNS INTEGER
  low ← 0
  high ← LENGTH(arr) - 1
  WHILE low <= high
    mid ← (low + high) DIV 2
    IF arr[mid] = target
      THEN RETURN mid
    ELSE IF arr[mid] < target
      THEN low ← mid + 1
    ELSE
      high ← mid - 1
    END IF
  END WHILE
  RETURN -1
END FUNCTION
```

**Precondition:** The array must be sorted in ascending order. If the array is not sorted, binary
search will produce incorrect results. This is a critical distinction from linear search.

**Trace with `arr = [1, 3, 5, 7, 9, 11, 13]`, `target = 7`:**

| Step | low | high | mid | arr[mid] | Comparison | Action   |
| ---- | --- | ---- | --- | -------- | ---------- | -------- |
| 1    | 0   | 6    | 3   | 7        | 7 = 7      | Return 3 |

The target is found immediately in the first iteration. Now consider `target = 11`:

| Step | low | high | mid | arr[mid] | Comparison  | Action   |
| ---- | --- | ---- | --- | -------- | ----------- | -------- |
| 1    | 0   | 6    | 3   | 7        | 7 `&lt;` 11 | low = 4  |
| 2    | 4   | 6    | 5   | 11       | 11 = 11     | Return 5 |

And `target = 4` (not present):

| Step | low | high | mid | arr[mid] | Comparison      | Action    |
| ---- | --- | ---- | --- | -------- | --------------- | --------- |
| 1    | 0   | 6    | 3   | 7        | 7 `&gt;` 4      | high = 2  |
| 2    | 0   | 2    | 1   | 3        | 3 `&lt;` 4      | low = 2   |
| 3    | 2   | 2    | 2   | 5        | 5 `&gt;` 4      | high = 1  |
| 4    | 2   | 1    | --  | --       | low `&gt;` high | Return -1 |

When `low` exceeds `high`, the search space is empty and the target is confirmed absent.

**Time complexity:** Each iteration halves the search space. After $k$ iterations, the remaining
search space has size $\frac{n}{2^k}$. The search terminates when $\frac{n}{2^k} \lt 1$, i.e.,
$2^k \gt n$, i.e., $k \gt \log_2 n$. Therefore, the worst-case and average-case time complexity is
$O(\log n)$.

**Space complexity:** $O(1)$ for the iterative version. A recursive version would use $O(\log n)$
stack space.

**Best case:** $O(1)$, when the middle element is the target on the first comparison.

### Comparison of Search Algorithms

| Property               | Linear Search | Binary Search       |
| ---------------------- | ------------- | ------------------- |
| Worst-case time        | $O(n)$        | $O(\log n)$         |
| Best-case time         | $O(1)$        | $O(1)$              |
| Average-case time      | $O(n)$        | $O(\log n)$         |
| Space complexity       | $O(1)$        | $O(1)$              |
| Precondition           | None          | Data must be sorted |
| Works on unsorted?     | Yes           | No                  |
| Works on linked lists? | Yes           | No (without tricks) |

The choice between linear and binary search depends on the data characteristics. If data is unsorted
and only searched occasionally, linear search is appropriate. If data is sorted or can be
preprocessed by sorting, binary search is vastly superior for repeated queries. For a dataset of one
million elements, binary search requires at most 20 comparisons versus up to one million for linear
search.

### Hash-Based Search (Brief Overview)

A hash table provides average-case $O(1)$ search time by using a hash function to compute an index
directly from the key. The hash function maps the key to an integer in the range $[0, m - 1]$, where
$m$ is the table size. A simple hash function for integer keys is:

$h(k) = k \mod m$

For string keys, a common approach is to sum the ASCII values of characters and take the modulus:

$h(s) = \left(\sum_{i=0}^{n-1} s_i \right) \mod m$

The main challenge is **collision resolution**: two different keys may hash to the same index. Two
primary strategies exist: chaining (each table slot holds a linked list of colliding elements) and
open addressing (on collision, probe for the next available slot). Hash tables are covered in more
detail in the Data Structures section of this document.

## Sorting Algorithms

### Bubble Sort

Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they
are in the wrong order. The pass is repeated until no swaps are needed, indicating that the list is
sorted. The algorithm is named because smaller elements "bubble" to the top of the list.

**IB Pseudocode:**

```
PROCEDURE bubbleSort(arr)
  n ← LENGTH(arr)
  swapped ← TRUE
  WHILE swapped = TRUE
    swapped ← FALSE
    FOR i ← 0 TO n - 2
      IF arr[i] > arr[i + 1]
        THEN
          temp ← arr[i]
          arr[i] ← arr[i + 1]
          arr[i + 1] ← temp
          swapped ← TRUE
      END IF
    END FOR
    n ← n - 1
  END WHILE
END PROCEDURE
```

The `swapped` flag is an optimization: if a full pass completes without any swaps, the array is
sorted and the algorithm terminates early. The variable `n` is decremented each pass because the
largest unsorted element is guaranteed to be in its final position after each pass.

**Trace with `arr = [5, 1, 4, 2, 8]`:**

Pass 1:

| Comparison | arr[i] | arr[i+1] | Swap? | Array State     |
| ---------- | ------ | -------- | ----- | --------------- |
| i = 0      | 5      | 1        | Yes   | [1, 5, 4, 2, 8] |
| i = 1      | 5      | 4        | Yes   | [1, 4, 5, 2, 8] |
| i = 2      | 5      | 2        | Yes   | [1, 4, 2, 5, 8] |
| i = 3      | 5      | 8        | No    | [1, 4, 2, 5, 8] |

After Pass 1: [1, 4, 2, 5, 8]. Swaps occurred, so continue.

Pass 2:

| Comparison | arr[i] | arr[i+1] | Swap? | Array State     |
| ---------- | ------ | -------- | ----- | --------------- |
| i = 0      | 1      | 4        | No    | [1, 4, 2, 5, 8] |
| i = 1      | 4      | 2        | Yes   | [1, 2, 4, 5, 8] |
| i = 2      | 4      | 5        | No    | [1, 2, 4, 5, 8] |

After Pass 2: [1, 2, 4, 5, 8]. Swaps occurred, so continue.

Pass 3:

| Comparison | arr[i] | arr[i+1] | Swap? | Array State     |
| ---------- | ------ | -------- | ----- | --------------- |
| i = 0      | 1      | 2        | No    | [1, 2, 4, 5, 8] |
| i = 1      | 2      | 4        | No    | [1, 2, 4, 5, 8] |

After Pass 3: [1, 2, 4, 5, 8]. No swaps occurred; algorithm terminates.

**Time complexity:** In the worst case (reverse-sorted input), the algorithm performs
$\frac{n(n-1)}{2}$ comparisons and swaps, giving $O(n^2)$. In the best case (already sorted), with
the early-termination optimization, only $n - 1$ comparisons are made, giving $O(n)$. The average
case is $O(n^2)$.

**Space complexity:** $O(1)$, as sorting is performed in-place.

**Stability:** Bubble sort is stable because it only swaps adjacent elements when the left element
is strictly greater. Equal elements maintain their relative order.

### Selection Sort

Selection sort divides the array into a sorted portion (initially empty) and an unsorted portion. In
each pass, it finds the minimum element in the unsorted portion and swaps it with the first element
of the unsorted portion, thereby extending the sorted portion by one.

**IB Pseudocode:**

```
PROCEDURE selectionSort(arr)
  n ← LENGTH(arr)
  FOR i ← 0 TO n - 2
    minIndex ← i
    FOR j ← i + 1 TO n - 1
      IF arr[j] < arr[minIndex]
        THEN minIndex ← j
      END IF
    END FOR
    IF minIndex ≠ i
      THEN
        temp ← arr[i]
        arr[i] ← arr[minIndex]
        arr[minIndex] ← temp
    END IF
  END FOR
END PROCEDURE
```

**Trace with `arr = [64, 25, 12, 22, 11]`:**

| Pass | Unsorted Portion     | minIndex | Swap With | Array State          |
| ---- | -------------------- | -------- | --------- | -------------------- |
| 0    | [64, 25, 12, 22, 11] | 4        | index 0   | [11, 25, 12, 22, 64] |
| 1    | [25, 12, 22, 64]     | 2        | index 1   | [11, 12, 25, 22, 64] |
| 2    | [25, 22, 64]         | 3        | index 2   | [11, 12, 22, 25, 64] |
| 3    | [25, 64]             | 3        | No swap   | [11, 12, 22, 25, 64] |

**Time complexity:** Selection sort always performs $\frac{n(n-1)}{2}$ comparisons regardless of
input order, giving $O(n^2)$ in all cases. The number of swaps is at most $n - 1$, which is
advantageous when swap operations are expensive.

**Space complexity:** $O(1)$, in-place sorting.

**Stability:** The basic selection sort is not stable. Consider the array `[4_a, 4_b, 2]`. The
minimum is 2 at index 2, which swaps with `4_a` at index 0, producing `[2, 4_b, 4_a]` and reversing
the relative order of the equal elements.

### Insertion Sort

Insertion sort builds the sorted array one element at a time. It takes each element from the
unsorted portion and inserts it into its correct position in the sorted portion by shifting larger
elements to the right.

**IB Pseudocode:**

```
PROCEDURE insertionSort(arr)
  n ← LENGTH(arr)
  FOR i ← 1 TO n - 1
    key ← arr[i]
    j ← i - 1
    WHILE j >= 0 AND arr[j] > key
      arr[j + 1] ← arr[j]
      j ← j - 1
    END WHILE
    arr[j + 1] ← key
  END FOR
END PROCEDURE
```

**Trace with `arr = [12, 11, 13, 5, 6]`:**

| Pass | key | Sorted Before Insertion | Shifts | Array State        |
| ---- | --- | ----------------------- | ------ | ------------------ |
| 1    | 11  | [12]                    | 1      | [11, 12, 13, 5, 6] |
| 2    | 13  | [11, 12]                | 0      | [11, 12, 13, 5, 6] |
| 3    | 5   | [11, 12, 13]            | 3      | [5, 11, 12, 13, 6] |
| 4    | 6   | [5, 11, 12, 13]         | 3      | [5, 6, 11, 12, 13] |

**Time complexity:** In the worst case (reverse-sorted), each insertion shifts all previously sorted
elements, requiring $\frac{n(n-1)}{2}$ comparisons and shifts, giving $O(n^2)$. In the best case
(already sorted), each element requires only one comparison, giving $O(n)$. Average case is
$O(n^2)$.

**Space complexity:** $O(1)$, in-place sorting.

**Stability:** Insertion sort is stable. Elements are only shifted to the right when they are
strictly greater than the key, so equal elements maintain their relative order.

**Practical advantage:** Insertion sort is highly efficient for small datasets or nearly sorted
data. Many hybrid algorithms (such as Timsort, used in Python and Java) switch to insertion sort for
small subarrays within a merge sort or quick sort framework.

### Merge Sort (HL)

Merge sort is a divide-and-conquer algorithm. It recursively divides the array into two halves,
sorts each half, and then merges the two sorted halves back together. The merge operation is the key
step: it compares the front elements of each half and places the smaller one into the result array.

**IB Pseudocode:**

```
PROCEDURE mergeSort(arr)
  IF LENGTH(arr) > 1
    THEN
      mid ← LENGTH(arr) DIV 2
      left ← arr[0 : mid - 1]
      right ← arr[mid : LENGTH(arr) - 1]
      mergeSort(left)
      mergeSort(right)
      merge(left, right, arr)
  END IF
END PROCEDURE

PROCEDURE merge(left, right, arr)
  i ← 0
  j ← 0
  k ← 0
  WHILE i < LENGTH(left) AND j < LENGTH(right)
    IF left[i] <= right[j]
      THEN
        arr[k] ← left[i]
        i ← i + 1
      ELSE
        arr[k] ← right[j]
        j ← j + 1
    END IF
    k ← k + 1
  END WHILE
  WHILE i < LENGTH(left)
    arr[k] ← left[i]
    i ← i + 1
    k ← k + 1
  END WHILE
  WHILE j < LENGTH(right)
    arr[k] ← right[j]
    j ← j + 1
    k ← k + 1
  END WHILE
END PROCEDURE
```

**Trace with `arr = [38, 27, 43, 3, 9, 82, 10]`:**

```
                    [38, 27, 43, 3, 9, 82, 10]
                              |
              [38, 27, 43, 3]         [9, 82, 10]
                  |                       |
          [38, 27]     [43, 3]       [9, 82]    [10]
            |            |             |         |
        [38]  [27]    [43]  [3]     [9]  [82]   [10]
            |            |             |         |
        [27, 38]     [3, 43]       [9, 82]     [10]
            |            |             |         |
        [3, 27, 38, 43]            [9, 10, 82]
                    |
            [3, 9, 10, 27, 38, 43, 82]
```

**Time complexity:** The recurrence relation is $T(n) = 2T\!\left(\frac{n}{2}\right) + O(n)$, where
the $O(n)$ term accounts for the merge step. By the Master Theorem, this yields $T(n) = O(n \log n)$
in all cases (best, average, worst). This is because the divide step always produces halves
(regardless of input), and the merge step always processes $n$ elements.

**Space complexity:** $O(n)$ auxiliary space is required for the temporary arrays used during
merging. This is a significant disadvantage compared to in-place sorts like quick sort and insertion
sort.

**Stability:** Merge sort is stable because the merge step uses `left[i] `&lt;`= right[j]`
(less-than-or-equal), ensuring that equal elements from the left half are placed before equal
elements from the right half, preserving their original relative order.

### Quick Sort (HL)

Quick sort is another divide-and-conquer algorithm. It selects a **pivot** element, partitions the
array so that all elements less than the pivot come before it and all elements greater come after
it, and then recursively sorts the sub-arrays on either side of the pivot.

**IB Pseudocode (Lomuto partition scheme):**

```
PROCEDURE quickSort(arr, low, high)
  IF low < high
    THEN
      pivotIndex ← partition(arr, low, high)
      quickSort(arr, low, pivotIndex - 1)
      quickSort(arr, pivotIndex + 1, high)
  END IF
END PROCEDURE

FUNCTION partition(arr, low, high) RETURNS INTEGER
  pivot ← arr[high]
  i ← low - 1
  FOR j ← low TO high - 1
    IF arr[j] <= pivot
      THEN
        i ← i + 1
        temp ← arr[i]
        arr[i] ← arr[j]
        arr[j] ← temp
    END IF
  END FOR
  temp ← arr[i + 1]
  arr[i + 1] ← arr[high]
  arr[high] ← temp
  RETURN i + 1
END FUNCTION
```

**Pivot selection** is critical to performance. The Lomuto scheme above uses the last element. Other
strategies include: first element, middle element, random element, and median-of-three (median of
first, middle, and last elements). Median-of-three provides good protection against already-sorted
or reverse-sorted worst-case inputs.

**Trace with `arr = [10, 80, 30, 90, 40, 50, 70]`, pivot = 70 (last element):**

Partition step: elements `<=` 70 are [10, 30, 40, 50], elements `>` 70 are [80, 90].

After partition: [10, 30, 40, 50, 70, 90, 80], pivot index = 4.

Recursively sort [10, 30, 40, 50] and [90, 80].

**Time complexity:** The average case is $O(n \log n)$ when the pivot consistently divides the array
into roughly equal halves. The worst case is $O(n^2)$, which occurs when the pivot is always the
smallest or largest element (e.g., already-sorted input with last-element pivot). The best case is
$O(n \log n)$ when partitions are perfectly balanced.

**Space complexity:** $O(\log n)$ for the recursive call stack in the average case, $O(n)$ in the
worst case. Quick sort is an in-place sort, requiring only $O(1)$ additional memory beyond the call
stack.

**Stability:** The basic quick sort is not stable. Partitioning can change the relative order of
equal elements.

### Sorting Algorithm Comparison

| Algorithm      | Best Case     | Average Case  | Worst Case    | Stable | Space       |
| -------------- | ------------- | ------------- | ------------- | ------ | ----------- |
| Bubble Sort    | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Selection Sort | $O(n^2)$      | $O(n^2)$      | $O(n^2)$      | No     | $O(1)$      |
| Insertion Sort | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Merge Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | Yes    | $O(n)$      |
| Quick Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | No     | $O(\log n)$ |

:::info
**HL Examination Tip:** When asked to choose a sorting algorithm for a given scenario,
consider the data size, whether the data is nearly sorted, memory constraints, and whether stability
is required. Merge sort guarantees $O(n \log n)$ but uses extra space. Quick sort is often faster in
practice but has a worst case of $O(n^2)$. Insertion sort is unbeatable for small or nearly sorted
arrays.
:::

## Data Structures

### Arrays

An **array** is a contiguous block of memory that stores a fixed number of elements of the same data
type, accessed by their index. Arrays are the most fundamental data structure in computer science.

**Static arrays** have a fixed size determined at the time of creation. The size cannot be changed
during program execution. In languages like C, static arrays are allocated on the stack:

```
INT arr[10]
```

**Dynamic arrays** (also called resizable arrays or vectors) can grow or shrink during execution.
They are implemented by allocating a larger block of memory when the current block is full and
copying elements over. The typical strategy is to double the capacity when full, which gives
amortized $O(1)$ insertion at the end.

**Operations and their complexities:**

| Operation          | Time Complexity  | Notes                                     |
| ------------------ | ---------------- | ----------------------------------------- |
| Access by index    | $O(1)$           | Direct memory address calculation         |
| Search (unsorted)  | $O(n)$           | Linear scan required                      |
| Search (sorted)    | $O(\log n)$      | Binary search applicable                  |
| Insert at end      | $O(1)$ amortized | Dynamic array; $O(n)$ worst case (resize) |
| Insert at position | $O(n)$           | Shifts all subsequent elements            |
| Delete at position | $O(n)$           | Shifts all subsequent elements            |

The $O(1)$ access time is the defining advantage of arrays. The memory address of element `arr[i]`
is computed as:

$\mathrm{address}(\mathrm{arr}[i]) = \mathrm{base address} + i \times \mathrm{element size}$

This calculation is constant-time, regardless of the array size or the index accessed.

**Disadvantages:** Fixed size (for static arrays), expensive insertion and deletion in the middle,
homogeneous elements (all elements must be the same type in statically typed languages).

### Linked Lists

A **linked list** is a dynamic data structure consisting of nodes, where each node contains a data
field and a reference (pointer) to the next node. Unlike arrays, linked list elements are not stored
contiguously in memory.

**Singly linked list:** Each node has one pointer to the next node. The last node points to `null`
(or `NIL` in IB pseudocode).

**Doubly linked list:** Each node has two pointers: one to the next node and one to the previous
node. This allows traversal in both directions.

**Node structure (singly linked):**

```
CLASS Node
  data  // the value stored
  next  // reference to the next node
END CLASS
```

**Insertion at the head of a singly linked list:**

```
PROCEDURE insertHead(list, value)
  newNode ← new Node
  newNode.data ← value
  newNode.next ← list.head
  list.head ← newNode
END PROCEDURE
```

**Deletion of the head node:**

```
PROCEDURE deleteHead(list)
  IF list.head ≠ NIL
    THEN
      list.head ← list.head.next
  END IF
END PROCEDURE
```

**Operations and their complexities:**

| Operation                   | Singly Linked | Doubly Linked | Array            |
| --------------------------- | ------------- | ------------- | ---------------- |
| Access by index             | $O(n)$        | $O(n)$        | $O(1)$           |
| Insert at head              | $O(1)$        | $O(1)$        | $O(n)$           |
| Insert at tail              | $O(n)$        | $O(1)$        | $O(1)$ amortized |
| Delete at head              | $O(1)$        | $O(1)$        | $O(n)$           |
| Delete at tail              | $O(n)$        | $O(1)$        | $O(n)$           |
| Insert after given node     | $O(1)$        | $O(1)$        | $O(n)$           |
| Search                      | $O(n)$        | $O(n)$        | $O(n)$           |
| Memory overhead per element | 1 pointer     | 2 pointers    | 0                |

**Advantages of linked lists:** Dynamic size, $O(1)$ insertion and deletion at the head (and tail
for doubly linked lists with a tail pointer), no need for contiguous memory, no wasted memory from
pre-allocation.

**Disadvantages:** $O(n)$ access time (no random access), extra memory for pointers, poor cache
locality (nodes are scattered in memory), cannot perform binary search efficiently.

### Stacks

A **stack** is a linear data structure that follows the Last-In, First-Out (LIFO) principle. The
most recently added element is the first one to be removed. Think of a stack of plates: you can only
add or remove the top plate.

**Core operations:**

`push(x)` -- adds element `x` to the top of the stack. Time complexity: $O(1)$.

`pop()` -- removes and returns the top element of the stack. Time complexity: $O(1)$.

`peek()` or `top()` -- returns the top element without removing it. Time complexity: $O(1)$.

`isEmpty()` -- returns `True` if the stack is empty, `False` otherwise. Time complexity: $O(1)$.

**IB Pseudocode implementation using an array:**

```
CLASS Stack
  PRIVATE items : ARRAY[0 : 99] OF STRING
  PRIVATE top : INTEGER

  PUBLIC CONSTRUCTOR Stack()
    top ← -1
  END CONSTRUCTOR

  PUBLIC PROCEDURE push(item)
    top ← top + 1
    items[top] ← item
  END PROCEDURE

  PUBLIC FUNCTION pop() RETURNS STRING
    IF isEmpty()
      THEN RETURN ""
    END IF
    result ← items[top]
    top ← top - 1
    RETURN result
  END FUNCTION

  PUBLIC FUNCTION peek() RETURNS STRING
    IF isEmpty()
      THEN RETURN ""
    END IF
    RETURN items[top]
  END FUNCTION

  PUBLIC FUNCTION isEmpty() RETURNS BOOLEAN
    RETURN top = -1
  END FUNCTION
END CLASS
```

**Applications of stacks:**

**Function call management:** The call stack stores return addresses, local variables, and
parameters for each active function call. When a function is called, a new stack frame is pushed;
when it returns, the frame is popped. Recursion relies entirely on the call stack.

**Undo/Redo operations:** Text editors and drawing applications use two stacks: one for undo
(pushing each action) and one for redo (popping from the undo stack and pushing to the redo stack
when an undo is performed).

**Expression evaluation:** Stacks are used to evaluate postfix (Reverse Polish Notation) expressions
and to convert infix expressions to postfix. For example, evaluating `3 4 + 2 *` (which equals 14):
push 3, push 4, pop 4 and 3, add to get 7, push 7, push 2, pop 2 and 7, multiply to get 14, push 14.

**Bracket matching:** Compilers and interpreters use stacks to verify that parentheses, brackets,
and braces are properly balanced. Each opening symbol is pushed; each closing symbol should match
the top of the stack.

### Queues

A **queue** is a linear data structure that follows the First-In, First-Out (FIFO) principle.
Elements are added at the rear and removed from the front. Think of a queue at a ticket counter: the
first person in line is the first person served.

**Core operations:**

`enqueue(x)` -- adds element `x` to the rear of the queue. Time complexity: $O(1)$.

`dequeue()` -- removes and returns the front element of the queue. Time complexity: $O(1)$.

`front()` or `peek()` -- returns the front element without removing it. Time complexity: $O(1)$.

`isEmpty()` -- returns `True` if the queue is empty, `False` otherwise. Time complexity: $O(1)$.

**IB Pseudocode implementation using a circular array:**

```
CLASS Queue
  PRIVATE items : ARRAY[0 : 99] OF STRING
  PRIVATE front : INTEGER
  PRIVATE rear : INTEGER
  PRIVATE count : INTEGER

  PUBLIC CONSTRUCTOR Queue()
    front ← 0
    rear ← -1
    count ← 0
  END CONSTRUCTOR

  PUBLIC PROCEDURE enqueue(item)
    rear ← (rear + 1) MOD 100
    items[rear] ← item
    count ← count + 1
  END PROCEDURE

  PUBLIC FUNCTION dequeue() RETURNS STRING
    IF isEmpty()
      THEN RETURN ""
    END IF
    result ← items[front]
    front ← (front + 1) MOD 100
    count ← count - 1
    RETURN result
  END FUNCTION

  PUBLIC FUNCTION peek() RETURNS STRING
    IF isEmpty()
      THEN RETURN ""
    END IF
    RETURN items[front]
  END FUNCTION

  PUBLIC FUNCTION isEmpty() RETURNS BOOLEAN
    RETURN count = 0
  END FUNCTION
END CLASS
```

The circular array implementation uses the modulo operator to wrap the indices around, avoiding the
need to shift elements when the front of the queue advances.

**Applications of queues:**

**Breadth-First Search (BFS):** BFS explores a graph level by level, visiting all neighbors of a
node before moving to the next level. A queue stores the nodes to be visited, ensuring FIFO ordering
so that closer nodes are processed before more distant ones.

**Process scheduling:** Operating systems use ready queues to manage processes waiting for CPU time.
The scheduler dequeues the next process to run and enqueues newly created or unblocked processes.

**Print spooling:** Print jobs are queued in the order they are received and processed sequentially.

**Buffering:** Queues buffer data between producers and consumers when they operate at different
speeds (e.g., keyboard input buffered for the CPU to process).

### Binary Trees

A **binary tree** is a hierarchical data structure in which each node has at most two children,
referred to as the left child and the right child. The topmost node is the root; nodes with no
children are leaves.

**Node structure:**

```
CLASS TreeNode
  data    // the value stored
  left    // reference to the left child
  right   // reference to the right child
END CLASS
```

**Tree traversals** visit every node in the tree exactly once. The three depth-first traversals are:

**In-order traversal** (Left, Root, Right): Visit the left subtree, then the root, then the right
subtree.

```
PROCEDURE inorder(node)
  IF node ≠ NIL
    THEN
      inorder(node.left)
      OUTPUT node.data
      inorder(node.right)
  END IF
END PROCEDURE
```

**Pre-order traversal** (Root, Left, Right): Visit the root, then the left subtree, then the right
subtree.

```
PROCEDURE preorder(node)
  IF node ≠ NIL
    THEN
      OUTPUT node.data
      preorder(node.left)
      preorder(node.right)
  END IF
END PROCEDURE
```

**Post-order traversal** (Left, Right, Root): Visit the left subtree, then the right subtree, then
the root.

```
PROCEDURE postorder(node)
  IF node ≠ NIL
    THEN
      postorder(node.left)
      postorder(node.right)
      OUTPUT node.data
  END IF
END PROCEDURE
```

**Example tree:**

```
        8
       / \
      3   10
     / \    \
    1   6    14
       / \   /
      4   7 13
```

In-order: 1, 3, 4, 6, 7, 8, 10, 13, 14

Pre-order: 8, 3, 1, 6, 4, 7, 10, 14, 13

Post-order: 1, 4, 7, 6, 3, 13, 14, 10, 8

**Binary Search Tree (BST):** A BST is a binary tree with the ordering property: for every node, all
values in its left subtree are less than the node's value, and all values in its right subtree are
greater. This property enables efficient search, insertion, and deletion.

**BST search:**

```
FUNCTION bstSearch(root, target) RETURNS TreeNode
  IF root = NIL
    THEN RETURN NIL
  END IF
  IF target = root.data
    THEN RETURN root
  ELSE IF target < root.data
    THEN RETURN bstSearch(root.left, target)
  ELSE
    RETURN bstSearch(root.right, target)
  END IF
END FUNCTION
```

**BST insertion:**

```
PROCEDURE bstInsert(root, value)
  IF root = NIL
    THEN
      root ← new TreeNode
      root.data ← value
      root.left ← NIL
      root.right ← NIL
    ELSE IF value < root.data
      THEN bstInsert(root.left, value)
    ELSE IF value > root.data
      THEN bstInsert(root.right, value)
  END IF
END PROCEDURE
```

**BST complexities:**

| Operation | Average Case | Worst Case | Notes                                |
| --------- | ------------ | ---------- | ------------------------------------ |
| Search    | $O(\log n)$  | $O(n)$     | Worst case: degenerate (skewed) tree |
| Insert    | $O(\log n)$  | $O(n)$     | Same as search                       |
| Delete    | $O(\log n)$  | $O(n)$     | Requires finding inorder successor   |

The worst case occurs when the tree becomes degenerate (essentially a linked list), which happens
when elements are inserted in sorted order. Self-balancing BSTs (AVL trees, Red-Black trees)
guarantee $O(\log n)$ operations by maintaining balance, but these are beyond the IB syllabus.

### Hash Tables

A **hash table** (or hash map) is a data structure that maps keys to values for highly efficient
lookup. It uses a hash function to compute an index into an array of buckets, from which the desired
value can be found.

**Hash functions** take a key and return an integer index within the range of the table. Properties
of a good hash function:

It is **deterministic**: the same key always produces the same hash value.

It distributes keys **uniformly** across the table to minimize collisions.

It is **efficient** to compute: $O(1)$ time.

**Common hash functions:**

For integer keys: $h(k) = k \mod m$, where $m$ is the table size. Choosing $m$ as a prime number
helps distribute keys more uniformly.

For string keys: accumulate character codes and take the modulus.

```
FUNCTION hashString(s, m) RETURNS INTEGER
  hash ← 0
  FOR i ← 0 TO LENGTH(s) - 1
    hash ← (hash * 31 + ASCII(s[i])) MOD m
  END FOR
  RETURN hash
END FUNCTION
```

The multiplication by a prime (31 in this example) helps spread out similar strings.

**Load factor:** $\alpha = \frac{n}{m}$, where $n$ is the number of stored elements and $m$ is the
table size. When the load factor exceeds a threshold (typically 0.7 or 0.75), the table is resized
(usually doubled) and all elements are rehashed. This keeps the average lookup time low.

**Collision resolution:**

**Chaining (separate chaining):** Each bucket in the hash table is a linked list. When a collision
occurs, the new key-value pair is appended to the list at that index. To search for a key, hash to
find the bucket, then traverse the linked list.

Advantages: simple to implement, deletion is straightforward, works well with high load factors.

Disadvantages: requires extra memory for pointers, degraded performance when many collisions cluster
in a single bucket.

**Open addressing:** All elements are stored directly in the hash table array. When a collision
occurs, the algorithm probes for the next available slot using a probing sequence.

**Linear probing:** $h(k, i) = (h'(k) + i) \mod m$, where $i = 0, 1, 2, \ldots$ Checks consecutive
slots.

**Quadratic probing:** $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \mod m$. Spreads probes more widely.

Advantages: better cache performance (all data in one array), no extra memory for pointers.

Disadvantages: more complex deletion, susceptible to clustering, sensitive to load factor.

**Time complexity:**

| Operation | Average Case | Worst Case |
| --------- | ------------ | ---------- |
| Search    | $O(1)$       | $O(n)$     |
| Insert    | $O(1)$       | $O(n)$     |
| Delete    | $O(1)$       | $O(n)$     |

Average-case $O(1)$ assumes a good hash function and a load factor bounded by a constant. The worst
case $O(n)$ occurs when all keys hash to the same bucket, reducing the hash table to a single linked
list.

## Computational Complexity (HL)

### Big-O Notation: Formal Definition

Big-O notation provides an upper bound on the growth rate of a function as its input grows
arbitrarily large. Formally, a function $f(n)$ is said to be $O(g(n))$ if there exist positive
constants $c$ and $n_0$ such that:

$$f(n) \leq c \cdot g(n) \quad \mathrm{for all } n \geq n_0$$

In other words, $g(n)$ is an asymptotic upper bound for $f(n)$. Big-O describes the worst-case
growth rate; it says that $f(n)$ grows no faster than $g(n)$, up to a constant factor, for
sufficiently large inputs.

**Related notations:**

**Big-Omega** ($\Omega$): $f(n) = \Omega(g(n))$ means $g(n)$ is a lower bound. Formally,
$f(n) \geq c \cdot g(n)$ for all $n \geq n_0$.

**Big-Theta** ($\Theta$): $f(n) = \Theta(g(n))$ means $g(n)$ is both an upper and lower bound, i.e.,
$f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$. Big-Theta provides a tight bound.

**Big-O notation rules:**

**Drop constants:** $O(5n^2) = O(n^2)$. Constant factors are irrelevant to asymptotic growth.

**Drop lower-order terms:** $O(n^2 + 3n + 7) = O(n^2)$. The dominant term determines the growth
rate.

**Product rule:** $O(f(n)) \times O(g(n)) = O(f(n) \cdot g(n))$. For example, a nested loop of
$O(n)$ inside $O(n)$ gives $O(n^2)$.

**Sum rule:** $O(f(n)) + O(g(n)) = O(\max(f(n), g(n)))$.

### Time Complexity Classes

The following are the most common complexity classes encountered in the IB syllabus, ordered from
fastest to slowest:

**$O(1)$ -- Constant time:** The operation takes the same time regardless of input size. Examples:
array access by index, hash table lookup (average case), stack push and pop.

**$O(\log n)$ -- Logarithmic time:** The operation time grows logarithmically with input size. Each
step reduces the problem size by a constant fraction. Examples: binary search, finding an element in
a balanced BST. For $n = 1000000$, $\log_2 n \approx 20$.

**$O(n)$ -- Linear time:** The operation time grows linearly with input size. Examples: linear
search, iterating through an array, finding the maximum element.

**$O(n \log n)$ -- Linearithmic time:** Commonly achieved by efficient divide-and-conquer
algorithms. Examples: merge sort, quick sort (average case), heap sort. This is the best achievable
complexity for comparison-based sorting, as proven by the comparison sort lower bound.

**$O(n^2)$ -- Quadratic time:** The operation time grows with the square of the input size.
Examples: bubble sort, selection sort, insertion sort (worst case), comparing all pairs of elements.
For $n = 10000$, $n^2 = 100000000$.

**$O(2^n)$ -- Exponential time:** The operation time doubles with each additional input element.
Examples: brute-force solutions to the traveling salesman problem, recursive Fibonacci without
memoization, generating all subsets of a set. These algorithms become infeasible even for moderate
input sizes.

**$O(n!)$ -- Factorial time:** Even faster growth than exponential. Examples: brute-force
permutation generation, the naive traveling salesman solution.

:::warning
A critical distinction: $O(n \log n)$ is NOT the same as $O(n)$. For large $n$,
$n \log n$ is significantly larger than $n$. For example, when $n = 1000000$,
$n \log_2 n \approx 20000000$, which is 20 times larger than $n$.
:::

### Space Complexity

Space complexity measures the amount of memory an algorithm uses as a function of the input size.
Like time complexity, it is expressed using Big-O notation.

**Auxiliary space** refers to the extra space used by the algorithm, not including the space used by
the input. For example, merge sort uses $O(n)$ auxiliary space for temporary arrays, while the input
itself also occupies $O(n)$ space, giving total space complexity of $O(n)$.

**In-place algorithms** use $O(1)$ auxiliary space. Bubble sort, selection sort, insertion sort, and
quick sort are in-place algorithms. Merge sort is not in-place.

**Examples:**

A function that creates a new array of size $n$ has space complexity $O(n)$.

A recursive function with depth $d$ has space complexity $O(d)$ for the call stack.

Binary search uses $O(1)$ space (iterative) or $O(\log n)$ space (recursive).

A hash table with $n$ elements and load factor $\alpha$ uses $O(n/\alpha) = O(n)$ space.

**Time-space tradeoff:** Often, algorithms can be made faster by using more memory, or use less
memory by being slower. Memoization trades space for time by caching results. Hash tables trade
space (for the table) for time ($O(1)$ lookup vs $O(n)$ linear search). In memory-constrained
environments (embedded systems), the choice of algorithm may be dictated by space rather than time
considerations.

### Best, Average, and Worst Case Analysis

An algorithm's performance can vary depending on the specific input. Analysis must consider all
three cases.

**Best case:** The input that minimizes the running time. For linear search, the best case occurs
when the target is the first element: $O(1)$. Best-case analysis is rarely useful in practice
because it represents an optimistic scenario that may not occur.

**Worst case:** The input that maximizes the running time. For linear search, the worst case occurs
when the target is the last element or not present: $O(n)$. Worst-case analysis provides a
guarantee: the algorithm will never take longer than this. It is the most commonly cited complexity
in the IB syllabus.

**Average case:** The expected running time over all possible inputs, assuming some probability
distribution. For linear search with uniformly distributed data, the target is equally likely to be
at any position, so the expected number of comparisons is
$\frac{1 + 2 + \cdots + n}{n} = \frac{n + 1}{2} = O(n)$.

**Quick sort case study:**

Best case: $O(n \log n)$, when the pivot always divides the array into nearly equal halves.

Average case: $O(n \log n)$, assuming random pivot selection or random input ordering.

Worst case: $O(n^2)$, when the pivot is always the minimum or maximum element, producing one
sub-array of size $n - 1$ and one of size 0.

The difference between quick sort's average and worst case is dramatic: for $n = 1000000$,
$n \log_2 n \approx 20000000$ operations versus $n^2 = 10^{12}$ operations. This is why pivot
selection strategies (random pivot, median-of-three) are critical.

### Empirical vs Theoretical Analysis

**Theoretical analysis** uses Big-O notation to characterize an algorithm's performance independent
of hardware, programming language, and implementation details. It describes how the running time
scales with input size in the limit. Theoretical analysis is essential for comparing algorithms,
understanding their fundamental limits, and predicting behavior on inputs larger than can be tested.

**Empirical analysis** involves implementing the algorithm and measuring its actual running time on
specific inputs using a physical computer. It captures real-world factors that theoretical analysis
ignores: cache effects, branch prediction, compiler optimizations, constant factors, and input data
characteristics.

**Strengths and limitations:**

Theoretical analysis is machine-independent and predicts asymptotic behavior, but it ignores
constant factors and lower-order terms that can be significant for practical input sizes. An
$O(n \log n)$ algorithm with a large constant factor may be slower than an $O(n^2)$ algorithm for
small $n$.

Empirical analysis measures actual performance but depends on the specific hardware, compiler, input
data, and implementation quality. Results may not generalize to other environments or input
distributions.

**Best practice:** Use theoretical analysis to select candidate algorithms, then use empirical
analysis (benchmarking) to choose the best implementation for the specific use case. Both approaches
complement each other.

## Abstract Data Types

### The ADT Concept

An **Abstract Data Type** defines a data type by its behavior (the operations it supports) rather
than by its implementation. An ADT specifies two things:

**An interface:** the set of operations that can be performed on the data, including their names,
parameters, return types, and preconditions/postconditions.

**An invariant or contract:** the semantic properties that the operations must maintain, but without
specifying how these properties are achieved.

The implementation is hidden from the user. This separation of interface from implementation is the
essence of **encapsulation** and **information hiding**.

**Why ADTs matter:**

The implementation can be changed without affecting code that uses the ADT, as long as the interface
remains the same. A stack might be implemented with an array, a linked list, or even a dynamic
array, but the `push`, `pop`, and `peek` operations remain the same from the caller's perspective.

ADTs reduce complexity by hiding implementation details. A programmer using a stack does not need to
know how memory is managed or how pointers are updated.

ADTs promote code reuse and modularity. The same ADT can be used in many different contexts.

ADTs facilitate testing. The interface defines a clear contract that can be tested independently of
the implementation.

### Stack ADT

The Stack ADT defines a LIFO collection with the following operations:

`push(item)` -- adds `item` to the top of the stack. Postcondition: `item` is the new top element,
and the stack size increases by 1.

`pop()` -- removes and returns the top element. Precondition: the stack is not empty. Postcondition:
the stack size decreases by 1.

`peek()` -- returns the top element without removing it. Precondition: the stack is not empty.

`isEmpty()` -- returns `True` if the stack contains no elements, `False` otherwise.

`size()` -- returns the number of elements in the stack.

**Possible implementations:** Array-based (using an index for the top), linked-list-based (using a
head pointer), dynamic array-based (with resizing). Each has different performance characteristics,
but all satisfy the Stack ADT contract.

### Queue ADT

The Queue ADT defines a FIFO collection with the following operations:

`enqueue(item)` -- adds `item` to the rear of the queue. Postcondition: `item` is the new rear
element, and the queue size increases by 1.

`dequeue()` -- removes and returns the front element. Precondition: the queue is not empty.
Postcondition: the queue size decreases by 1.

`front()` -- returns the front element without removing it. Precondition: the queue is not empty.

`isEmpty()` -- returns `True` if the queue contains no elements, `False` otherwise.

`size()` -- returns the number of elements in the queue.

**Possible implementations:** Array-based with circular indexing, linked-list-based (with head and
tail pointers), dynamic array-based. The circular array implementation avoids the wasted space of a
linear array when elements are dequeued from the front.

### List ADT

The List ADT defines an ordered collection that allows access by position:

`get(index)` -- returns the element at position `index`. Precondition:
$0 \leq \mathrm{index} \lt \mathrm{size}$.

`set(index, item)` -- replaces the element at position `index` with `item`. Precondition:
$0 \leq \mathrm{index} \lt \mathrm{size}$.

`add(index, item)` -- inserts `item` at position `index`, shifting subsequent elements.
Precondition: $0 \leq \mathrm{index} \leq \mathrm{size}$.

`remove(index)` -- removes the element at position `index`, shifting subsequent elements.
Precondition: $0 \leq \mathrm{index} \lt \mathrm{size}$.

`size()` -- returns the number of elements.

`isEmpty()` -- returns `True` if the list contains no elements.

**Comparison of implementations:**

An array-based list provides $O(1)$ access by index but $O(n)$ insertion and deletion at arbitrary
positions.

A linked-list-based list provides $O(1)$ insertion and deletion at known positions but $O(n)$ access
by index.

The choice depends on the expected usage pattern: if the application frequently accesses elements by
index, an array is preferable. If it frequently inserts and deletes, a linked list is preferable.

### Encapsulation and Information Hiding

**Encapsulation** is the bundling of data and the methods that operate on that data into a single
unit (a class or module). The internal representation of the data is hidden from the outside world,
and access is only possible through the defined interface.

**Information hiding** is the principle that the implementation details of a module should be hidden
from other modules. Only the essential interface is exposed. This principle has several benefits:

**Protection against invalid states:** If the internal array of a stack is private, external code
cannot corrupt it by directly modifying array elements. All modifications go through `push` and
`pop`, which maintain the stack invariant.

**Reduced coupling:** Modules that use a stack depend only on its interface, not its implementation.
Changing the implementation (e.g., from array to linked list) does not require changes to the client
code.

**Simplified reasoning:** A programmer using a stack only needs to understand the LIFO semantics of
`push` and `pop`, not the memory management details of the underlying array or linked list.

**Enhanced maintainability:** Bugs in the implementation can be fixed without affecting other parts
of the system. The implementation can be optimized (e.g., switching to a more efficient algorithm)
without breaking the interface.

In the IB pseudocode, encapsulation is expressed using `PRIVATE` and `PUBLIC` access modifiers.
Private attributes and methods can only be accessed within the class; public methods define the
interface available to external code.

:::note
**HL Examination Note:** When asked to implement an ADT in an IB exam, you must include the
class structure with `PRIVATE` and `PUBLIC` sections, a constructor, and all specified operations.
Ensure preconditions are checked (e.g., do not pop from an empty stack). The choice of underlying
data structure (array vs linked list) should be stated and justified.
:::
