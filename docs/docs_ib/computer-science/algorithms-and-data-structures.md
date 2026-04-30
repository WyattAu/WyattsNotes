---
title: Algorithms and Data Structures
tags:
- IB
- CS
slug: algorithms-and-data-structures
description: Comprehensive guide to algorithms and data structures for the International
  Baccalaureate.
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

| Step | i   | n   | total | i `$\le$` n |
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

**Worked Example: Trace table for finding the maximum value**

Consider the algorithm to find the maximum value in an array:

```
FUNCTION findMax(arr) RETURNS INTEGER
  max ← arr[0]
  FOR i ← 1 TO LENGTH(arr) - 1
    IF arr[i] > max
      THEN max ← arr[i]
    END IF
  END FOR
  RETURN max
END FUNCTION
```

With input `arr = [3, 7, 2, 9, 4]`, construct the trace table.

<details>
<summary>Solution</summary>

| Step | i   | arr[i] | max | arr[i] `>` max |
| ---- | --- | ------ | --- | -------------- |
| 1    | --  | --     | 3   | --             |
| 2    | 1   | 7      | 3   | True           |
| 3    | 1   | 7      | 7   | --             |
| 4    | 2   | 2      | 7   | False          |
| 5    | 3   | 9      | 7   | True           |
| 6    | 3   | 9      | 9   | --             |
| 7    | 4   | 4      | 9   | False          |

The function returns 9. Total comparisons: 4 (one per loop iteration).

</details>

**Worked Example: Decomposition in practice**

A school library needs a system that: (a) allows students to search for books by title, author, or ISBN, (b) tracks which books are currently borrowed, and (c) generates overdue notices. Apply computational thinking.

<details>
<summary>Solution</summary>

**Decomposition:** Break into three sub-systems:
1. A search module (handling title, author, and ISBN lookups).
2. A loan tracking module (recording borrow/return events, due dates).
3. A notification module (checking due dates daily and generating notices).

**Pattern recognition:** All three search types (title, author, ISBN) share the pattern of matching a query against a field in a data record. A single generic search function can be reused with different comparison criteria. The notification module follows a recurring pattern of "compare current date to due date."

**Abstraction:** Model a book as a data record with fields (title, author, ISBN, status, due date). Model a student as a record with fields (name, ID, borrowed books). Ignore irrelevant details like the physical shelf location or the book's cover colour.

**Algorithm design:** For the search module, use binary search on a sorted catalogue (by whichever field is queried). For loan tracking, update the book's status field. For notifications, iterate through all borrowed books and check if the due date has passed.

</details>

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

**Worked Example: Counting occurrences with linear search**

Modify linear search to count how many times a target value appears in an array. Trace with `arr = [3, 7, 3, 1, 3, 9]`, `target = 3`.

<details>
<summary>Solution</summary>

```
FUNCTION countOccurrences(arr, target) RETURNS INTEGER
  count ← 0
  FOR i ← 0 TO LENGTH(arr) - 1
    IF arr[i] = target
      THEN count ← count + 1
    END IF
  END FOR
  RETURN count
END FUNCTION
```

| Step | i   | arr[i] | arr[i] = target | count |
| ---- | --- | ------ | --------------- | ----- |
| 1    | 0   | 3      | True            | 1     |
| 2    | 1   | 7      | False           | 1     |
| 3    | 2   | 3      | True            | 2     |
| 4    | 3   | 1      | False           | 2     |
| 5    | 4   | 3      | True            | 3     |
| 6    | 5   | 9      | False           | 3     |

The function returns 3. The target 3 appears at indices 0, 2, and 4.

</details>

**Common Pitfalls -- Linear Search**

- **Forgetting to return -1:** If the loop completes without finding the target, the function must return a sentinel value (typically -1) to indicate "not found." Returning nothing or returning 0 is incorrect because 0 is a valid index.
- **Off-by-one errors in loop bounds:** The loop must go from 0 to `LENGTH(arr) - 1`, inclusive. Using `LENGTH(arr)` as the upper bound would cause an out-of-bounds error in languages with fixed arrays.
- **Confusing "not found" with index 0:** When the target is at index 0, the function returns 0. Client code must check for -1 specifically, not use `if result:` (which would treat 0 as false in some languages).

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

**Worked Example: Binary search -- longer trace**

Perform binary search on `arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]` for `target = 23`. Show all iterations.

<details>
<summary>Solution</summary>

| Step | low | high | mid | arr[mid] | Comparison | Action  |
| ---- | --- | ---- | --- | -------- | ---------- | ------- |
| 1    | 0   | 9    | 4   | 16       | 16 `&lt;` 23 | low = 5 |
| 2    | 5   | 9    | 7   | 56       | 56 `&gt;` 23 | high = 6 |
| 3    | 5   | 6    | 5   | 23       | 23 = 23   | Return 5 |

Found at index 5 in 3 iterations. The array has 10 elements, and $\lvert \log_2 10 \rvert = 4$, so 3 iterations is within the expected $O(\log n)$ bound.

</details>

**Worked Example: Binary search -- target not in array**

Perform binary search on `arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]` for `target = 15`. Show all iterations and explain why the algorithm correctly determines the element is absent.

<details>
<summary>Solution</summary>

| Step | low | high | mid | arr[mid] | Comparison      | Action  |
| ---- | --- | ---- | --- | -------- | --------------- | ------- |
| 1    | 0   | 9    | 4   | 16       | 16 `&gt;` 15    | high = 3 |
| 2    | 0   | 3    | 1   | 5        | 5 `&lt;` 15     | low = 2  |
| 3    | 2   | 3    | 2   | 8        | 8 `&lt;` 15     | low = 3  |
| 4    | 3   | 3    | 3   | 12       | 12 `&lt;` 15    | low = 4  |
| 5    | 4   | 3    | --  | --       | low `&gt;` high | Return -1 |

After 4 iterations, `low = 4` exceeds `high = 3`. The search interval is empty. At this point, the algorithm has eliminated all possible positions for 15. Specifically, element 12 (index 3) is the largest element smaller than 15, and element 16 (index 4) is the smallest element larger than 15. There is no gap between them for 15 to occupy.

</details>

**Common Pitfalls -- Binary Search**

- **Applying binary search to unsorted data:** Binary search relies on the ordering property to eliminate half the search space. On unsorted data, the comparison `arr[mid] < target` provides no useful information, and the algorithm will incorrectly discard the half that may contain the target.
- **Incorrect midpoint calculation:** Using `mid = (low + high) / 2` can cause integer overflow when `low + high` exceeds the maximum integer value. The safe formula is `mid = low + (high - low) DIV 2`. In the IB pseudocode, `DIV` is integer division, so `(low + high) DIV 2` is acceptable for exam-sized inputs, but the overflow issue is worth noting.
- **Infinite loop from incorrect boundary updates:** If `low` is set to `mid` (instead of `mid + 1`) or `high` is set to `mid` (instead of `mid - 1`), the algorithm may loop infinitely when the search space has two elements and the target is not present.

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

**Worked Example: Bubble sort -- counting comparisons and swaps**

Trace bubble sort on `arr = [4, 2, 5, 1, 3]` and count the total number of comparisons and swaps performed.

<details>
<summary>Solution</summary>

Pass 1 (n = 5, comparing indices 0--3):

| i   | arr[i] | arr[i+1] | Swap? | Array State     |
| --- | ------ | -------- | ----- | --------------- |
| 0   | 4      | 2        | Yes   | [2, 4, 5, 1, 3] |
| 1   | 4      | 5        | No    | [2, 4, 5, 1, 3] |
| 2   | 5      | 1        | Yes   | [2, 4, 1, 5, 3] |
| 3   | 5      | 3        | Yes   | [2, 4, 1, 3, 5] |

Comparisons: 4, Swaps: 3

Pass 2 (n = 4, comparing indices 0--2):

| i   | arr[i] | arr[i+1] | Swap? | Array State     |
| --- | ------ | -------- | ----- | --------------- |
| 0   | 2      | 4        | No    | [2, 4, 1, 3, 5] |
| 1   | 4      | 1        | Yes   | [2, 1, 4, 3, 5] |
| 2   | 4      | 3        | Yes   | [2, 1, 3, 4, 5] |

Comparisons: 3, Swaps: 2

Pass 3 (n = 3, comparing indices 0--1):

| i   | arr[i] | arr[i+1] | Swap? | Array State     |
| --- | ------ | -------- | ----- | --------------- |
| 0   | 2      | 1        | Yes   | [1, 2, 3, 4, 5] |
| 1   | 2      | 3        | No    | [1, 2, 3, 4, 5] |

Comparisons: 2, Swaps: 1

Pass 4 (n = 2, comparing indices 0--0):

| i   | arr[i] | arr[i+1] | Swap? | Array State     |
| --- | ------ | -------- | ----- | --------------- |
| 0   | 1      | 2        | No    | [1, 2, 3, 4, 5] |

Comparisons: 1, Swaps: 0

No swaps in pass 4, so the algorithm terminates.

**Totals:** Comparisons: $4 + 3 + 2 + 1 = 10 = \frac{5 \times 4}{2}$. Swaps: $3 + 2 + 1 + 0 = 6$.

</details>

**Common Pitfalls -- Bubble Sort**

- **Forgetting the early-termination optimization:** Without the `swapped` flag, bubble sort always performs $\frac{n(n-1)}{2}$ comparisons even on an already-sorted array. The IB pseudocode includes this optimization, and exam questions often ask about its effect on the best-case complexity (changing it from $O(n^2)$ to $O(n)$).
- **Confusing the loop bound:** The inner loop compares `arr[i]` with `arr[i + 1]`, so `i` must stop at `n - 2` (not `n - 1`), otherwise `arr[i + 1]` would be out of bounds on the last iteration.
- **Miscounting passes:** Each pass places one more element in its final position at the end of the array. After pass $k$, the last $k$ elements are sorted. The inner loop range should shrink accordingly.

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

**Worked Example: Selection sort -- demonstrating instability**

Sort `arr = [4, 4, 2, 1]` using selection sort, tracking the position of the two equal 4s. Label the first 4 as $4_a$ (index 0) and the second as $4_b$ (index 1).

<details>
<summary>Solution</summary>

| Pass | minIndex | Swap | Array State            | Note                      |
| ---- | -------- | ---- | ---------------------- | ------------------------- |
| 0    | 3        | Yes  | `[1, 4_b, 2, 4_a]`     | $4_a$ moved to index 3    |
| 1    | 2        | Yes  | `[1, 2, 4_b, 4_a]`     |                           |
| 2    | 2        | No   | `[1, 2, 4_b, 4_a]`     | minIndex = i, no swap     |

Final result: `[1, 2, 4_b, 4_a]`. Originally, $4_a$ came before $4_b$. After sorting, $4_b$ comes before $4_a$. The relative order of equal elements has been reversed, confirming that selection sort is not stable.

</details>

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

**Worked Example: Insertion sort on a nearly sorted array**

Trace insertion sort on `arr = [1, 2, 4, 5, 3]` and count the total number of comparisons and shifts.

<details>
<summary>Solution</summary>

| Pass | key | Sorted Before       | j values checked | Shifts | Array State        |
| ---- | --- | ------------------- | ---------------- | ------ | ------------------ |
| 1    | 2   | [1]                 | j = 0            | 0      | [1, 2, 4, 5, 3]   |
| 2    | 4   | [1, 2]              | j = 1            | 0      | [1, 2, 4, 5, 3]   |
| 3    | 5   | [1, 2, 4]           | j = 2            | 0      | [1, 2, 4, 5, 3]   |
| 4    | 3   | [1, 2, 4, 5]        | j = 3, 2         | 2      | [1, 2, 3, 4, 5]   |

Detailed trace for pass 4 (key = 3):
- j = 3: `arr[3] = 5 > 3`, so shift: `arr[4] = 5`, j becomes 2. Array: `[1, 2, 4, 5, 5]`
- j = 2: `arr[2] = 4 > 3`, so shift: `arr[3] = 4`, j becomes 1. Array: `[1, 2, 4, 4, 5]`
- j = 1: `arr[1] = 2 < 3`, loop exits. Place key: `arr[2] = 3`. Array: `[1, 2, 3, 4, 5]`

**Totals:** Comparisons: $1 + 1 + 1 + 3 = 6$. Shifts: $0 + 0 + 0 + 2 = 2$.

This demonstrates why insertion sort is efficient for nearly sorted data: the first three elements required zero shifts, and only the last element needed to move.

</details>

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

**Worked Example: Merge sort -- detailed merge step**

Given two sorted sub-arrays `left = [2, 7, 11]` and `right = [4, 8, 15]`, trace the `merge` procedure step by step to produce the merged result.

<details>
<summary>Solution</summary>

| Step | i | j | k | left[i] | right[j] | Comparison | arr[k] | Merged so far    |
| ---- | - | - | - | ------- | -------- | ---------- | ------ | ---------------- |
| 1    | 0 | 0 | 0 | 2       | 4        | 2 `&lt;` 4  | 2      | [2, ?, ?, ?, ?, ?] |
| 2    | 1 | 0 | 1 | 7       | 4        | 7 `&gt;` 4  | 4      | [2, 4, ?, ?, ?, ?] |
| 3    | 1 | 1 | 2 | 7       | 8        | 7 `&lt;` 8  | 7      | [2, 4, 7, ?, ?, ?] |
| 4    | 2 | 1 | 3 | 11      | 8        | 11 `&gt;` 8 | 8      | [2, 4, 7, 8, ?, ?] |
| 5    | 2 | 2 | 4 | 11      | 15       | 11 `&lt;` 15 | 11     | [2, 4, 7, 8, 11, ?] |
| 6    | 3 | 2 | 5 | --      | 15       | i exhausted | 15     | [2, 4, 7, 8, 11, 15] |

Final merged array: `[2, 4, 7, 8, 11, 15]`. Total comparisons: 5. The merge step always processes all $n = 6$ elements in $O(n)$ time.

</details>

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

Partition step: elements `$\le$` 70 are [10, 30, 40, 50], elements `>` 70 are [80, 90].

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

**Worked Example: Quick sort -- Lomuto partition in detail**

Apply the Lomuto partition scheme to `arr = [7, 2, 1, 6, 8, 5, 3, 4]` with pivot = 4 (the last element). Show the array after each swap and state the final pivot index.

<details>
<summary>Solution</summary>

Initial: pivot = 4, i = -1

| j | arr[j] | arr[j] `$\le$` 4? | Action                     | i  | Array State               |
| - | ------ | ------------ | -------------------------- | -- | ------------------------- |
| 0 | 7      | No           | Skip                       | -1 | [7, 2, 1, 6, 8, 5, 3, 4] |
| 1 | 2      | Yes          | i=0, swap arr[0] and arr[1]| 0  | [2, 7, 1, 6, 8, 5, 3, 4] |
| 2 | 1      | Yes          | i=1, swap arr[1] and arr[2]| 1  | [2, 1, 7, 6, 8, 5, 3, 4] |
| 3 | 6      | No           | Skip                       | 1  | [2, 1, 7, 6, 8, 5, 3, 4] |
| 4 | 8      | No           | Skip                       | 1  | [2, 1, 7, 6, 8, 5, 3, 4] |
| 5 | 5      | No           | Skip                       | 1  | [2, 1, 7, 6, 8, 5, 3, 4] |
| 6 | 3      | Yes          | i=2, swap arr[2] and arr[6]| 2  | [2, 1, 3, 6, 8, 5, 7, 4] |

Final step: swap arr[i+1] and arr[high], i.e. swap arr[3] and arr[7]:

Result: `[2, 1, 3, 4, 8, 5, 7, 6]`, pivot index = 3.

Left sub-array: `[2, 1, 3]` (all $\le$ 4). Right sub-array: `[8, 5, 7, 6]` (all $\ge$ 4).

</details>

**Worked Example: Quick sort -- worst case on sorted input**

Explain what happens when quick sort (with last-element pivot) is applied to `[1, 2, 3, 4, 5]`. Why is this the worst case, and how many comparisons are made?

<details>
<summary>Solution</summary>

Partition `[1, 2, 3, 4, 5]` with pivot = 5: no element except 5 is $\le$ 5 at index 4, so the pivot stays at position 4. Left = `[1, 2, 3, 4]`, right = `[]`.

Partition `[1, 2, 3, 4]` with pivot = 4: similarly, left = `[1, 2, 3]`, right = `[]`.

This pattern continues: each partition produces one sub-array of size $n-1$ and one empty sub-array. Total comparisons:

$(n-1) + (n-2) + \cdots + 1 = \frac{n(n-1)}{2} = \frac{5 \times 4}{2} = 10 = O(n^2)$

The recursion depth is $n = 5$ (vs $\log n$ in the average case). The pivot is always the largest element, giving maximally unbalanced partitions. To avoid this, use median-of-three pivot selection or a random pivot.

</details>

**Common Pitfalls -- Sorting Algorithms**

- **Confusing stability with correctness:** A stable sort preserves the relative order of equal elements. An unstable sort still produces a correctly sorted array. Not all problems require stability.
- **Assuming quick sort is always $O(n \log n)$:** Quick sort's worst case is $O(n^2)$. In an exam, state both average and worst case. If guaranteed $O(n \log n)$ is needed, merge sort is the answer.
- **Comparing best-case of one algorithm with worst-case of another:** Always compare like with like (average with average, worst with worst) when evaluating algorithms.
- **Forgetting the sorted precondition for binary search:** If an exam question says "sort the data then search," the total cost is $O(n \log n) + O(\log n) = O(n \log n)$, not just $O(\log n)$.

### Sorting Algorithm Comparison

| Algorithm      | Best Case     | Average Case  | Worst Case    | Stable | Space       |
| -------------- | ------------- | ------------- | ------------- | ------ | ----------- |
| Bubble Sort    | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Selection Sort | $O(n^2)$      | $O(n^2)$      | $O(n^2)$      | No     | $O(1)$      |
| Insertion Sort | $O(n)$        | $O(n^2)$      | $O(n^2)$      | Yes    | $O(1)$      |
| Merge Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | Yes    | $O(n)$      |
| Quick Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | No     | $O(\log n)$ |

:::info **HL Examination Tip:** When asked to choose a sorting algorithm for a given scenario,
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

**Worked Example: Array memory address calculation**

A 1D array `scores` stores integers (4 bytes each). The base address of the array is 1000. What is the memory address of `scores[5]`? What about `scores[0]`?

<details>
<summary>Solution</summary>

Using the formula:

$\mathrm{address}(\mathrm{scores}[i]) = \mathrm{base} + i \times \mathrm{element size}$

- `scores[5]`: $1000 + 5 \times 4 = 1000 + 20 = 1020$
- `scores[0]`: $1000 + 0 \times 4 = 1000$

The base address equals the address of index 0. Each successive element is 4 bytes further in memory.

</details>

**Worked Example: 2D array row-major address calculation**

A 2D array `matrix[0..2][0..3]` stores integers (4 bytes each). The base address is 2000. What is the address of `matrix[1][2]` assuming row-major order?

<details>
<summary>Solution</summary>

In row-major order, elements of row 0 are stored first, followed by row 1, etc. Each row has 4 columns (indices 0 to 3).

$\mathrm{address}(\mathrm{matrix}[r][c]) = \mathrm{base} + (r \times \mathrm{numCols} + c) \times \mathrm{element size}$

$\mathrm{matrix}[1][2] = 2000 + (1 \times 4 + 2) \times 4 = 2000 + 6 \times 4 = 2000 + 24 = 2024$

</details>

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

**Worked Example: Linked list insertion in the middle**

Given a singly linked list `Head -> 10 -> 20 -> 30 -> 40 -> NIL`, insert the value 25 between 20 and 30. Show the steps and the resulting list.

<details>
<summary>Solution</summary>

To insert after a given node, we need a reference to that node (node with value 20). The steps are:

1. Create a new node with value 25.
2. Set `newNode.next` to point to the node after 20 (which is the node with value 30).
3. Set the `next` pointer of the node with value 20 to point to the new node.

```
newNode ← new Node
newNode.data ← 25
newNode.next ← current.next    // newNode.next now points to 30
current.next ← newNode          // 20's next now points to 25
```

Result: `Head -> 10 -> 20 -> 25 -> 30 -> 40 -> NIL`

The operation is $O(1)$ once the node to insert after has been found. However, finding that node by traversing from the head takes $O(n)$ time.

</details>

**Worked Example: Linked list deletion**

Given a singly linked list `Head -> 5 -> 15 -> 25 -> 35 -> NIL`, delete the node with value 15. Show the steps.

<details>
<summary>Solution</summary>

To delete a node from a singly linked list, we need a reference to the node **before** the one to delete (the predecessor). We traverse the list to find the predecessor.

1. Start at the head. `prev = Head` (value 5), `current = Head.next` (value 15).
2. `current.data = 15` is the target. Set `prev.next = current.next`.

```
prev.next ← current.next    // 5's next now points to 25
```

Result: `Head -> 5 -> 25 -> 35 -> NIL`

The deleted node (value 15) is no longer reachable from the head. In languages with garbage collection, its memory will be reclaimed automatically. In languages like C, it must be freed explicitly: `free(current)`.

**Edge case -- deleting the head:** If the target is the first node, we cannot find a predecessor. Instead, we simply set `Head = Head.next`. This is a special case that must be handled separately.

</details>

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

**Worked Example: Bracket matching with a stack**

Use a stack to determine whether `"{[()()]}"` is balanced. Show the stack after each character.

<details>
<summary>Solution</summary>

| Step | Character | Action           | Stack (top on right) |
| ---- | --------- | ---------------- | -------------------- |
| 1    | `{`         | `Push {`           | `{`                    |
| 2    | [         | Push [           | `{, [`                 |
| 3    | (         | Push (           | `{, [, (`              |
| 4    | )         | Pop (, matches ) | `{, [`                 |
| 5    | (         | Push (           | `{, [, (`              |
| 6    | )         | Pop (, matches ) | `{, [`                 |
| 7    | ]         | Pop [, matches ] | `{`                    |
| 8    | `}`         | `Pop {, matches }` | (empty)              |

The stack is empty at the end, so the expression is balanced.

</details>

**Worked Example: Evaluating a postfix expression**

Evaluate the postfix expression `5 3 2 * + 4 -` using a stack. Show the stack after each step.

<details>
<summary>Solution</summary>

| Step | Token | Action                          | Stack (top on right) |
| ---- | ----- | ------------------------------- | -------------------- |
| 1    | 5     | Push 5                          | 5                    |
| 2    | 3     | Push 3                          | 5, 3                 |
| 3    | 2     | Push 2                          | 5, 3, 2              |
| 4    | *     | Pop 2 and 3, push 3 * 2 = 6    | 5, 6                 |
| 5    | +     | Pop 6 and 5, push 5 + 6 = 11   | 11                   |
| 6    | 4     | Push 4                          | 11, 4                |
| 7    | -     | Pop 4 and 11, push 11 - 4 = 7  | 7                    |

Result: 7. Verification: `5 + (3 * 2) - 4 = 5 + 6 - 4 = 7`. Correct.

</details>

**Common Pitfalls -- Stacks**

- **Popping from an empty stack:** Always call `isEmpty()` before `pop()`. Popping from an empty stack is an error in every implementation.
- **Confusing `peek()` with `pop()`:** `peek()` returns the top element without removing it. `pop()` removes and returns it. In exam questions tracking state, the distinction matters.
- **Using a queue where a stack is needed (or vice versa):** Remember LIFO (stack) vs FIFO (queue). Reversing a string requires a stack; processing tasks in arrival order requires a queue.

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

**Worked Example: Circular queue operations**

A circular queue (array size 5) has front = 0, rear = 2, count = 3, with items `[A, B, C, _, _]`. Perform: `dequeue()`, `enqueue(D)`, `enqueue(E)`. Show the state after each operation.

<details>
<summary>Solution</summary>

Initial: front = 0, rear = 2, count = 3, items = `[A, B, C, _, _]`

`dequeue()`: result = A, front = (0+1) MOD 5 = 1, count = 2. State: `[_, B, C, _, _]`

`enqueue(D)`: rear = (2+1) MOD 5 = 3, items[3] = D, count = 3. State: `[_, B, C, D, _]`

`enqueue(E)`: rear = (3+1) MOD 5 = 4, items[4] = E, count = 4. State: `[_, B, C, D, E]`

The circular array reuses space vacated by dequeues without shifting elements.

</details>

**Worked Example: Print spooler queue simulation**

A print spooler manages jobs: Job1 (3 pages), Job2 (1 page), Job3 (5 pages). The printer takes 1 minute per page. In what order do jobs complete, and when does each finish?

<details>
<summary>Solution</summary>

FIFO ordering means jobs print in arrival order:

| Job  | Pages | Start Time | End Time |
| ---- | ----- | ---------- | -------- |
| Job1 | 3     | 0 min      | 3 min    |
| Job2 | 1     | 3 min      | 4 min    |
| Job3 | 5     | 4 min      | 9 min    |

Total: 9 minutes. The queue ensures strict FIFO ordering. A priority queue would be needed if jobs had different priorities.

</details>

**Common Pitfalls -- Queues**

- **Forgetting MOD in circular queues:** Always use `(index + 1) MOD size` when incrementing `front` or `rear`. Forgetting MOD causes index-out-of-bounds errors.
- **Enqueuing to a full queue:** Check `count = maxSize` (or `front = rear` in implementations without a count variable) before calling `enqueue()`.
- **Confusing front and rear:** `front` is where elements are removed; `rear` is where they are added. Mixing these up reverses the queue's behaviour.

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

**Worked Example: BST insertion and search**

Insert the values 50, 30, 70, 20, 40, 60, 80 into an initially empty BST (in that order). Draw the resulting tree and show the search path for value 40.

<details>
<summary>Solution</summary>

```
        50
       /  \
     30    70
    /  \   /  \
  20   40 60  80
```

Searching for 40:
1. Compare 40 with root 50: 40 is smaller, go left to 30.
2. Compare 40 with 30: 40 is larger, go right to 40.
3. Compare 40 with 40: match found. Return the node.

3 comparisons. This tree is perfectly balanced, giving $O(\log n)$ search time.

</details>

**Worked Example: Tree traversal -- reconstructing from traversals**

Given in-order traversal `4, 2, 5, 1, 6, 3, 7` and pre-order traversal `1, 2, 4, 5, 3, 6, 7`, reconstruct the binary tree.

<details>
<summary>Solution</summary>

The first element of pre-order is always the root: **1**.

In-order tells us left vs right subtrees:
- Left subtree in-order: `4, 2, 5`
- Right subtree in-order: `6, 3, 7`

Pre-order for left: `2, 4, 5`. Root = 2. In-order `4, 2, 5` means 4 is left of 2, 5 is right of 2.

Pre-order for right: `3, 6, 7`. Root = 3. In-order `6, 3, 7` means 6 is left of 3, 7 is right of 3.

```
        1
       / \
      2   3
     / \ / \
    4  5 6  7
```

</details>

**Common Pitfalls -- Trees**

- **Confusing traversal orders:** In-order = Left-Root-Right; pre-order = Root-Left-Right; post-order = Left-Right-Root. Mnemonic: "pre" visits root first, "post" visits root last, "in" visits root in the middle.
- **Forgetting the BST property:** Every node's left subtree must contain only values less than the node, and every right subtree only values greater. Always compare with the current node to decide left or right.
- **Degenerate trees:** Inserting sorted data produces a degenerate tree (linked list) with $O(n)$ operations. Recognise this worst case in exam questions.

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

**Worked Example: Hash table with chaining -- insertion and search**

A hash table with $m = 7$ buckets uses the hash function $h(k) = k \mod 7$ and chaining for collision resolution. Insert the keys 15, 11, 22, 8, 29, 1 (in that order). Then search for 22.

<details>
<summary>Solution</summary>

**Insertions:**

| Key | $h(k) = k \mod 7$ | Bucket | Action              |
| --- | ----------------- | ------ | ------------------- |
| 15  | 15 mod 7 = 1      | 1      | Insert at head      |
| 11  | 11 mod 7 = 4      | 4      | Insert at head      |
| 22  | 22 mod 7 = 1      | 1      | Collision; chain    |
| 8   | 8 mod 7 = 1       | 1      | Collision; chain    |
| 29  | 29 mod 7 = 1      | 1      | Collision; chain    |
| 1   | 1 mod 7 = 1       | 1      | Collision; chain    |

**Table state after all insertions:**

| Bucket | Linked List (head first) |
| ------ | ------------------------ |
| 0      | (empty)                  |
| 1      | 1 -> 29 -> 8 -> 22 -> 15 |
| 2      | (empty)                  |
| 3      | (empty)                  |
| 4      | 11                       |
| 5      | (empty)                  |
| 6      | (empty)                  |

**Search for 22:**
1. Compute $h(22) = 22 \mod 7 = 1$. Go to bucket 1.
2. Traverse the chain: 1 (no), 29 (no), 8 (no), 22 (yes). Found in 4 comparisons.

This demonstrates the worst-case behavior of chaining: when many keys hash to the same bucket, search degrades to $O(n)$.

</details>

**Worked Example: Hash table with linear probing -- insertion and search**

A hash table with $m = 10$ buckets uses $h(k) = k \mod 10$ with linear probing. Insert the keys 42, 23, 34, 52, 15, 22 (in that order). Show the table after each insertion.

<details>
<summary>Solution</summary>

| Step | Key | $h(k)$ | Probe Sequence       | Final Slot | Table (0--9)                                             |
| ---- | --- | ------ | -------------------- | ---------- | -------------------------------------------------------- |
| 1    | 42  | 2      | 2                    | 2          | `[_, _, 42, _, _, _, _, _, _, _]`                        |
| 2    | 23  | 3      | 3                    | 3          | `[_, _, 42, 23, _, _, _, _, _, _]`                      |
| 3    | 34  | 4      | 4                    | 4          | `[_, _, 42, 23, 34, _, _, _, _, _]`                     |
| 4    | 52  | 2      | 2 (full), 3 (full), 4 (full), 5 | 5 | `[_, _, 42, 23, 34, 52, _, _, _, _]` |
| 5    | 15  | 5      | 5 (full), 6          | 6          | `[_, _, 42, 23, 34, 52, 15, _, _, _]`                  |
| 6    | 22  | 2      | 2, 3, 4, 5, 6, 7    | 7          | `[_, _, 42, 23, 34, 52, 15, 22, _, _]`                 |

Note how 52, 15, and 22 all hash to low-indexed buckets but get placed further away due to clustering. This illustrates the **primary clustering** problem of linear probing.

</details>

**Common Pitfalls -- Hash Tables**

- **Using a non-prime table size:** When $m$ has common factors with the keys, collisions increase. For example, with $m = 10$ and integer keys that are multiples of 5, half the buckets will never be used.
- **Confusing chaining with open addressing:** In chaining, all colliding elements go into the same bucket (linked list). In open addressing, they probe for the next empty slot. The search process is different: chaining searches the linked list at the hashed index; open addressing probes consecutive slots.
- **Forgetting to rehash on resize:** When the load factor exceeds the threshold, the table must be resized and all keys rehashed (their indices change because $m$ changes). Simply copying elements to a larger array is incorrect.

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

**Worked Example: Determining Big-O from code**

Determine the time complexity of the following algorithm:

```
FOR i ← 0 TO n - 1
  FOR j ← 0 TO n - 1
    OUTPUT i, j
  END FOR
END FOR
FOR k ← 0 TO n - 1
  OUTPUT k
END FOR
```

<details>
<summary>Solution</summary>

The first block is a nested loop: the outer loop runs $n$ times, and for each iteration, the inner loop runs $n$ times. Total operations: $n \times n = n^2$. Time complexity: $O(n^2)$.

The second block is a single loop running $n$ times. Time complexity: $O(n)$.

By the sum rule: $O(n^2) + O(n) = O(\max(n^2, n)) = O(n^2)$.

The overall time complexity is $O(n^2)$. The linear loop is dominated by the quadratic nested loop.

</details>

**Worked Example: Determining Big-O from code -- logarithmic case**

Determine the time complexity of the following algorithm:

```
i ← 1
WHILE i < n
  OUTPUT i
  i ← i * 2
END WHILE
```

<details>
<summary>Solution</summary>

The variable `i` starts at 1 and doubles each iteration: 1, 2, 4, 8, 16, ..., until `i $\ge$ n`.

After $k$ iterations, $i = 2^k$. The loop terminates when $2^k \geq n$, i.e., $k \geq \log_2 n$.

The number of iterations is $\lfloor \log_2 n \rfloor + 1 = O(\log n)$.

This pattern appears in binary search, where the search space is halved each iteration.

</details>

**Worked Example: Proving Big-O using the formal definition**

Prove that $f(n) = 3n^2 + 5n + 7$ is $O(n^2)$.

<details>
<summary>Solution</summary>

We must find positive constants $c$ and $n_0$ such that $3n^2 + 5n + 7 \leq c \cdot n^2$ for all $n \geq n_0$.

For $n \geq 1$: $5n \leq 5n^2$ and $7 \leq 7n^2$.

Therefore: $3n^2 + 5n + 7 \leq 3n^2 + 5n^2 + 7n^2 = 15n^2$.

So with $c = 15$ and $n_0 = 1$: $f(n) \leq 15n^2$ for all $n \geq 1$.

This proves $f(n) = O(n^2)$. Many valid choices of $c$ and $n_0$ exist; for example, $c = 4$ works with $n_0 = 6$ (since $3n^2 + 5n + 7 \leq 4n^2$ for $n \geq 6$).

</details>

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

:::warning A critical distinction: $O(n \log n)$ is NOT the same as $O(n)$. For large $n$,
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

**Worked Example: Big-O analysis of nested loops**

Determine the time complexity of the following algorithm:

```
FOR i ← 0 TO n - 1
  FOR j ← 0 TO n - 1
    OUTPUT i * j
  END FOR
END FOR
FOR k ← 0 TO n - 1
  OUTPUT k
END FOR
```

<details>
<summary>Solution</summary>

The first nested loop: outer runs $n$ times, inner runs $n$ times per outer iteration. Total: $n \times n = n^2$ iterations, each $O(1)$. This block is $O(n^2)$.

The second loop: runs $n$ times, each $O(1)$. This block is $O(n)$.

By the sum rule: $O(n^2) + O(n) = O(\max(n^2, n)) = O(n^2)$.

Overall time complexity: $O(n^2)$.

</details>

**Worked Example: Big-O analysis of a doubling loop**

Determine the time complexity of:

```
i ← 1
WHILE i < n
  OUTPUT i
  i ← i * 2
END WHILE
```

<details>
<summary>Solution</summary>

The variable `i` doubles each iteration: 1, 2, 4, 8, ..., $2^k$.

The loop terminates when $2^k \geq n$, i.e. $k \geq \log_2 n$.

Total iterations: $\lfloor \log_2 n \rfloor + 1$. Time complexity: $O(\log n)$.

This is the same logarithmic pattern as binary search: each iteration halves the remaining problem.

</details>

**Common Pitfalls -- Computational Complexity**

- **Confusing $O(n \log n)$ with $O(n)$:** These are different classes. For $n = 10^6$, $n \log_2 n \approx 2 \times 10^7$ while $n = 10^6$ -- a factor of 20 difference.
- **Adding complexities incorrectly:** Sequential loops use the sum rule: $O(f) + O(g) = O(\max(f, g))$. Only multiply for nested loops.
- **Ignoring the worst case:** An algorithm that is $O(n)$ average but $O(n^2)$ worst case may be unacceptable if worst-case inputs occur frequently.
- **Forgetting space complexity:** An $O(n \log n)$ time algorithm with $O(n^2)$ space may be impractical for large inputs.

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

**Worked Example: Implementing a Stack ADT with a linked list**

Implement the Stack ADT using a singly linked list instead of an array. Write IB pseudocode for `push`, `pop`, `peek`, and `isEmpty`.

<details>
<summary>Solution</summary>

```
CLASS Stack
  PRIVATE head : Node
  PRIVATE stackSize : INTEGER

  PUBLIC CONSTRUCTOR Stack()
    head ← NIL
    stackSize ← 0
  END CONSTRUCTOR

  PUBLIC PROCEDURE push(item)
    newNode ← new Node
    newNode.data ← item
    newNode.next ← head
    head ← newNode
    stackSize ← stackSize + 1
  END PROCEDURE

  PUBLIC FUNCTION pop() RETURNS STRING
    IF isEmpty()
      THEN RETURN ""
    END IF
    result ← head.data
    head ← head.next
    stackSize ← stackSize - 1
    RETURN result
  END FUNCTION

  PUBLIC FUNCTION peek() RETURNS STRING
    IF isEmpty()
      THEN RETURN ""
    END IF
    RETURN head.data
  END FUNCTION

  PUBLIC FUNCTION isEmpty() RETURNS BOOLEAN
    RETURN stackSize = 0
  END FUNCTION

  PUBLIC FUNCTION size() RETURNS INTEGER
    RETURN stackSize
  END FUNCTION
END CLASS
```

Key differences from the array implementation:
- No fixed size limit (the list grows dynamically).
- `push` inserts at the head in $O(1)$ time.
- `pop` removes the head node in $O(1)$ time.
- No need to manage a `top` index; `head` serves as the top of the stack.
- Memory is allocated per node (via `new Node`), so each element uses extra memory for the `next` pointer.

</details>

**Worked Example: Choosing the right ADT**

A text editor needs to implement undo/redo functionality. Which ADT is most appropriate, and how would it be used?

<details>
<summary>Solution</summary>

**ADT chosen:** Two stacks -- an undo stack and a redo stack.

**How it works:**
- When the user performs an action (e.g., typing, deleting), push a description of the action onto the undo stack.
- When the user presses undo: pop the top action from the undo stack, reverse it, and push it onto the redo stack.
- When the user presses redo: pop the top action from the redo stack, re-apply it, and push it onto the undo stack.
- When the user performs a new action (after undoing): clear the redo stack and push the new action onto the undo stack.

**Why stacks?** Undo/redo is inherently LIFO: the most recent action is the first to be undone. A queue (FIFO) would undo the oldest action first, which is incorrect.

</details>

:::note **HL Examination Note:** When asked to implement an ADT in an IB exam, you must include the
class structure with `PRIVATE` and `PUBLIC` sections, a constructor, and all specified operations.
Ensure preconditions are checked (e.g., do not pop from an empty stack). The choice of underlying
data structure (array vs linked list) should be stated and justified.
:::

## Problem Set

### Problem 1: Linear Search Trace

An array `arr = [18, 7, 42, 33, 15, 28, 51]` is searched using linear search for the value 33. (a) How many comparisons are made? (b) What would the result be for target 50?

<details>
<summary>Solution</summary>

(a) Comparing sequentially: 18 (no), 7 (no), 42 (no), 33 (yes). **4 comparisons.** Target found at index 3.

(b) Searching for 50 examines all 7 elements (7 comparisons) and returns -1 since 50 is not in the array.

</details>

*If you get this wrong, revise: [Linear Search](#linear-search)*

### Problem 2: Binary Search Trace

Perform a binary search for the value 18 in `[2, 5, 8, 12, 15, 18, 21, 25, 30, 35]`. Show every step.

<details>
<summary>Solution</summary>

| Step | low | high | mid | arr[mid] | Comparison  | Action   |
| ---- | --- | ---- | --- | -------- | ----------- | -------- |
| 1    | 0   | 9    | 4   | 15       | 15 `&lt;` 18 | low = 5  |
| 2    | 5   | 9    | 7   | 25       | 25 `&gt;` 18 | high = 6 |
| 3    | 5   | 6    | 5   | 18       | 18 = 18    | Return 5 |

Found at index 5 after 3 comparisons.

</details>

*If you get this wrong, revise: [Binary Search](#binary-search)*

### Problem 3: Choosing a Search Algorithm

A database of 50000 student records is sorted by ID. The school looks up students by ID approximately 1000 times per day. Should they use linear search or binary search? Justify with complexity analysis.

<details>
<summary>Solution</summary>

Binary search. The data is already sorted (precondition satisfied).

- Linear: $O(n) = O(50000)$ per search
- Binary: $O(\log n) = O(\log_2 50000) \approx 16$ per search

For 1000 searches/day: linear $\approx 50$ million comparisons; binary $\approx 16000$. Binary search is over 3000x faster for this use case.

</details>

*If you get this wrong, revise: [Comparison of Search Algorithms](#comparison-of-search-algorithms)*

### Problem 4: Bubble Sort Counting

Perform bubble sort on `[38, 12, 55, 7, 23]`. State the total comparisons and swaps.

<details>
<summary>Solution</summary>

Pass 1: 4 comparisons, 3 swaps. Array: `[12, 38, 7, 23, 55]`
Pass 2: 3 comparisons, 2 swaps. Array: `[12, 7, 23, 38, 55]`
Pass 3: 2 comparisons, 1 swap. Array: `[7, 12, 23, 38, 55]`
Pass 4: 1 comparison, 0 swaps. Terminates.

**Total: 10 comparisons, 6 swaps.** Matches $\frac{n(n-1)}{2} = \frac{5 \times 4}{2} = 10$.

</details>

*If you get this wrong, revise: [Bubble Sort](#bubble-sort)*

### Problem 5: Sorting Stability

A list of student records must be sorted by grade while preserving alphabetical order among students with the same grade. Which algorithms guarantee this: bubble sort, selection sort, insertion sort, merge sort, quick sort?

<details>
<summary>Solution</summary>

**Stable:** bubble sort, insertion sort, merge sort. These only swap/shift when strictly greater, preserving relative order of equal elements.

**Unstable:** selection sort (swapping can reverse equal elements), quick sort (partitioning can reorder equal elements).

For a large dataset, merge sort is preferred due to $O(n \log n)$ performance with stability.

</details>

*If you get this wrong, revise: [Sorting Algorithm Comparison](#sorting-algorithm-comparison)*

### Problem 6: Merge Sort Tree

Draw the recursive call tree for merge sort on `[6, 2, 8, 3, 1, 7, 4, 5]`.

<details>
<summary>Solution</summary>

```
                [6, 2, 8, 3, 1, 7, 4, 5]
               /                        \
       [6, 2, 8, 3]              [1, 7, 4, 5]
       /          \              /          \
   [6, 2]      [8, 3]      [1, 7]      [4, 5]
   /    \      /    \      /    \      /    \
 [6]  [2]   [8]  [3]    [1]  [7]    [4]  [5]
   \    /      \    /      \    /      \    /
   [2, 6]     [3, 8]      [1, 7]     [4, 5]
       \          /              \          /
   [2, 3, 6, 8]              [1, 4, 5, 7]
               \                /
           [1, 2, 3, 4, 5, 6, 7, 8]
```

$\log_2 8 = 3$ levels of merging, each processing 8 elements. Total $\approx 24$ element operations.

</details>

*If you get this wrong, revise: [Merge Sort (HL)](#merge-sort-hl)*

### Problem 7: Quick Sort Worst Case

Quick sort with last-element pivot sorts `[1, 2, 3, 4, 5, 6, 7, 8]`. (a) Why is this the worst case? (b) How many comparisons? (c) What pivot strategy avoids this?

<details>
<summary>Solution</summary>

(a) The pivot is always the largest element, producing one sub-array of size $n-1$ and one empty sub-array. Maximally unbalanced partitions.

(b) $\frac{n(n-1)}{2} = \frac{8 \times 7}{2} = 28$ comparisons.

(c) **Median-of-three:** median of first, middle, and last elements. For this array, median of 1, 4, 8 is 4, which divides the array roughly in half. Random pivot also works.

</details>

*If you get this wrong, revise: [Quick Sort (HL)](#quick-sort-hl)*

### Problem 8: Big-O Analysis of Code

Determine the time complexity of:

```
FOR i ← 1 TO n
  j ← 1
  WHILE j < n
    OUTPUT i + j
    j ← j * 2
  END WHILE
END FOR
```

<details>
<summary>Solution</summary>

Outer loop: $n$ iterations. Inner loop: `j` doubles each time (1, 2, 4, ..., $2^k$), terminates when $2^k \geq n$, so $O(\log n)$ iterations.

Total: $O(n \times \log n) = O(n \log n)$.

</details>

*If you get this wrong, revise: [Time Complexity Classes](#time-complexity-classes)*

### Problem 9: Complexity Comparison

Which has the lower time complexity in each pair? (a) $O(n^2)$ vs $O(n \log n)$ (b) $O(2^n)$ vs $O(n^3)$ (c) $O(\log n)$ vs $O(n)$

<details>
<summary>Solution</summary>

(a) $O(n \log n)$ is lower. For $n = 10^6$: $n^2 = 10^{12}$ vs $n \log_2 n \approx 2 \times 10^7$.

(b) $O(n^3)$ is lower. Exponential always dominates polynomial. For $n = 30$: $2^{30} \approx 10^9$ vs $30^3 = 27000$.

(c) $O(\log n)$ is lower. For $n = 10^6$: $\log_2 n \approx 20$ vs $n = 10^6$.

Order: $O(\log n) \lt O(n) \lt O(n \log n) \lt O(n^2) \lt O(n^3) \lt O(2^n)$.

</details>

*If you get this wrong, revise: [Big-O Notation: Formal Definition](#big-o-notation-formal-definition)*

### Problem 10: Linked List Insertion and Deletion

A singly linked list: `10 -> 20 -> 30 -> 40 -> 50 -> NIL`. (a) Insert 25 between 20 and 30. (b) Delete the node containing 30. State the time complexity of each.

<details>
<summary>Solution</summary>

(a) Insert 25: create new node (data=25), set `newNode.next = node20.next` (points to 30), set `node20.next = newNode`. Result: `10 -> 20 -> 25 -> 30 -> 40 -> 50 -> NIL`.

(b) Delete 30: find predecessor of 30 (node with data=25), set `node25.next = node30.next` (points to 40). Result: `10 -> 20 -> 25 -> 40 -> 50 -> NIL`.

Both are $O(n)$ due to traversal to find the position. The actual insertion/deletion is $O(1)$.

</details>

*If you get this wrong, revise: [Linked Lists](#linked-lists)*

### Problem 11: Stack Application -- Reversing a String

Use a stack to reverse the string "HELLO". Show the stack after each push and pop.

<details>
<summary>Solution</summary>

Push phase: H, E, L, L, O (stack: `H, E, L, L, O`, top on right)

Pop phase: pop O (output "O"), pop L ("OL"), pop L ("OLL"), pop E ("OLLE"), pop H ("OLLEH")

Output: "OLLEH" -- "HELLO" reversed. The LIFO property reverses element order.

</details>

*If you get this wrong, revise: [Stacks](#stacks)*

### Problem 12: Queue Simulation

A queue initially contains `[A, B, C]` (front = A). Perform: `dequeue()`, `enqueue(D)`, `enqueue(E)`, `dequeue()`, `enqueue(F)`. Show the queue after each operation.

<details>
<summary>Solution</summary>

| Step | Operation   | Queue State   |
| ---- | ----------- | ------------- |
| 0    | Initial     | [A, B, C]     |
| 1    | dequeue()   | [B, C]        |
| 2    | enqueue(D)  | [B, C, D]     |
| 3    | enqueue(E)  | [B, C, D, E]  |
| 4    | dequeue()   | [C, D, E]     |
| 5    | enqueue(F)  | [C, D, E, F]  |

FIFO maintained: elements removed in arrival order.

</details>

*If you get this wrong, revise: [Queues](#queues)*

### Problem 13: Tree Traversal

For the tree below, give in-order, pre-order, and post-order traversals:

```
        5
       / \
      3   7
     / \   \
    1   4   9
```

<details>
<summary>Solution</summary>

**In-order (Left, Root, Right):** 1, 3, 4, 5, 7, 9

**Pre-order (Root, Left, Right):** 5, 3, 1, 4, 7, 9

**Post-order (Left, Right, Root):** 1, 4, 3, 9, 7, 5

</details>

*If you get this wrong, revise: [Binary Trees](#binary-trees)*

### Problem 14: Hash Table Trace

A hash table of size 5 uses linear probing with $h(k) = k \mod 5$. Insert keys 12, 7, 15, 22, 3 (in order). Show the table and the probe sequence for searching key 22.

<details>
<summary>Solution</summary>

Insertions: 12->slot 2, 7->slot 2(collision)->slot 3, 15->slot 0, 22->slot 2(collision)->3(collision)->4, 3->slot 3(collision)->4(collision)->0(collision)->1.

| Slot | 0  | 1 | 2  | 3 | 4  |
| ---- | -- | - | -- | - | -- |
| Key  | 15 | 3 | 12 | 7 | 22 |

Search for 22: $h(22) = 2$. Slot 2: 12 != 22. Slot 3: 7 != 22. Slot 4: 22 = 22. Found in 3 probes.

</details>

*If you get this wrong, revise: [Hash Tables](#hash-tables)*

### Problem 15: Recursion Trace

```
FUNCTION mystery(n) RETURNS INTEGER
  IF n <= 1
    THEN RETURN 1
  ELSE
    RETURN n + mystery(n - 1)
  END IF
END FUNCTION
```

(a) What is `mystery(4)`? (b) What is the time complexity?

<details>
<summary>Solution</summary>

(a) `mystery(4) = 4 + mystery(3) = 4 + 3 + mystery(2) = 4 + 3 + 2 + mystery(1) = 4 + 3 + 2 + 1 = 10`.

This computes $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$. For $n=4$: $\frac{4 \times 5}{2} = 10$.

(b) Time: $O(n)$ (n recursive calls). Space: $O(n)$ for the call stack.

</details>

*If you get this wrong, revise: [Algorithmic Thinking](#algorithmic-thinking)*

### Problem 16: Graph BFS Traversal

Given adjacency list: A:[B,C], B:[A,D,E], C:[A,F], D:[B], E:[B,F], F:[C,E]. Perform BFS from A.

<details>
<summary>Solution</summary>

| Step | Dequeue | Visit | Enqueue        | Queue      |
| ---- | ------- | ----- | -------------- | ---------- |
| 0    | --      | A     | B, C           | [B, C]     |
| 1    | B       | B     | D, E           | [C, D, E]  |
| 2    | C       | C     | F              | [D, E, F]  |
| 3    | D       | D     | (all visited)  | [E, F]     |
| 4    | E       | E     | (F already q'd)| [F]        |
| 5    | F       | F     | (all visited)  | []         |

BFS order: **A, B, C, D, E, F** (level-by-level: distance 0, then 1, then 2).

</details>

*If you get this wrong, revise: [Queues](#queues) and [Binary Trees](#binary-trees)*

### Problem 17: Algorithm Design

Design an algorithm to find the top 3 scores from a list of $n$ student scores. Write IB pseudocode and state the time complexity.

<details>
<summary>Solution</summary>

```
PROCEDURE topThree(arr)
  first ← -1
  second ← -1
  third ← -1
  FOR i ← 0 TO LENGTH(arr) - 1
    IF arr[i] > first
      THEN
        third ← second
        second ← first
        first ← arr[i]
    ELSE IF arr[i] > second
      THEN
        third ← second
        second ← arr[i]
    ELSE IF arr[i] > third
      THEN third ← arr[i]
    END IF
  END FOR
  OUTPUT first, second, third
END PROCEDURE
```

Time complexity: $O(n)$ -- single pass. Space: $O(1)$. This uses **abstraction** (only tracking 3 values, not sorting) and is optimal since every element must be examined.

</details>

*If you get this wrong, revise: [Algorithmic Thinking](#algorithmic-thinking) and [Computational Complexity (HL)](#computational-complexity-hl)*

### Problem 18: Shortest Path

Use Dijkstra's algorithm to find shortest paths from A in this weighted graph:

```
A --3-- B --2-- D
|      |       |
5      1       4
|      |       |
C --2-- E --1-- F
```

<details>
<summary>Solution</summary>

| Step | Visit | Distances updated                    |
| ---- | ----- | ------------------------------------ |
| 1    | A     | B=3, C=5                             |
| 2    | B     | D=5, E=4                             |
| 3    | E     | C=6(no), F=5                         |
| 4    | C     | No improvements                      |
| 5    | D     | F=9(no improvement)                  |
| 6    | F     | Complete                             |

| Vertex | Distance | Path            |
| ------ | -------- | --------------- |
| A      | 0        | A               |
| B      | 3        | A -> B          |
| C      | 5        | A -> C          |
| D      | 5        | A -> B -> D     |
| E      | 4        | A -> B -> E     |
| F      | 5        | A -> B -> E -> F |

</details>

*If you get this wrong, revise: [Queues](#queues) and [Computational Complexity (HL)](#computational-complexity-hl)*

---

## Related Content at Other Levels

- **A-Level Algorithms:** [Computer Science](https://alevel.wyattau.com/docs/computer-science/computer-science)
- **University Algorithms:** [Algorithms and Data Structures](https://university.wyattau.com/docs/computing/algorithms-and-data-structures)
