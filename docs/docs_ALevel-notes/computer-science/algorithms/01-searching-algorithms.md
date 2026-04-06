---
title: Searching Algorithms
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: searching-algorithms
---

## 1. Linear Search

### Algorithm

**Problem:** Given an array $A[0..n-1]$ and a target value $x$, determine whether $x$ exists in $A$
and return its index (or $-1$ if not found).

```python
def linear_search(A, x):
    for i in range(len(A)):
        if A[i] == x:
            return i
    return -1
```

### Correctness

**Theorem.** `linear_search(A, x)` returns the index of the first occurrence of $x$ in $A$, or $-1$
if $x$ is not present.

**Proof.** The algorithm examines elements $A[0], A[1], \ldots$ in order. If $A[i] = x$, it
immediately returns $i$, which is the first occurrence since all earlier elements were checked and
found not equal to $x$. If the loop completes without finding $x$, then $x \notin A$, and $-1$ is
returned. $\square$

### Complexity Analysis

**Theorem.** Linear search has worst-case time complexity $O(n)$ and best-case time complexity
$O(1)$.

**Proof of worst case.** In the worst case, $x$ is at index $n-1$ or absent. The algorithm performs
$n$ comparisons. Since each comparison takes $O(1)$ time, the total is $O(n)$. $\square$

**Proof of lower bound.** Linear search requires $\Omega(n)$ comparisons in the worst case.

**Proof.** Consider an adversary argument. An adversary can answer "not equal" to the first $n-1$
comparisons. Only after checking all $n$ elements can the algorithm conclude that $x$ is absent. Any
algorithm that does not check all $n$ positions can be fooled: the unchecked position could contain
$x$. Therefore, at least $n$ comparisons are necessary in the worst case. $\square$

| Case    | Comparisons | Time   |
| ------- | ----------- | ------ |
| Best    | 1           | $O(1)$ |
| Average | $n/2$       | $O(n)$ |
| Worst   | $n$         | $O(n)$ |

---

## 2. Binary Search

### Algorithm

**Problem:** Given a **sorted** array $A[0..n-1]$ and a target value $x$, find the index of $x$ (or
determine that $x$ is not present).

```python
def binary_search(A, x):
    low = 0
    high = len(A) - 1
    while low <= high:
        mid = (low + high) // 2
        if A[mid] == x:
            return mid
        elif A[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

### Correctness Proof

**Theorem.** `binary_search(A, x)` returns the index of $x$ in the sorted array $A$, or $-1$ if $x$
is not present.

**Proof.** We prove by invariant.

**Invariant:** At the start of each loop iteration, if $x$ exists in $A$, then
$x \in A[\text{low}..\text{high}]$.

**Base case.** Initially, `low = 0` and `high = n-1`, so
$A[\text{low}..\text{high}] = A[0..n-1] = A$. If $x \in A$, the invariant holds.

**Maintenance.** Three cases:

1. $A[\text{mid}] = x$: Return mid. Correct. ✓
2. $A[\text{mid}] \lt{} x$: Since $A$ is sorted, $A[0..\text{mid}] \leq A[\text{mid}] \lt{} x$, so
   $x \notin A[0..\text{mid}]$. Setting `low = mid + 1` restricts the search to
   $A[\text{mid}+1..\text{high}]$. If $x$ was in the old range, it is in the new range.
3. $A[\text{mid}] \gt{} x$: Since $A$ is sorted, $A[\text{mid}..n-1] \geq A[\text{mid}] \gt{} x$, so
   $x \notin A[\text{mid}..n-1]$. Setting `high = mid - 1` restricts the search to
   $A[\text{low}..\text{mid}-1]$. If $x$ was in the old range, it is in the new range.

**Termination.** The loop terminates when `low > high`, meaning $A[\text{low}..\text{high}]$ is
empty. By the invariant, $x \notin A$. Return $-1$. ✓

$\square$

### Complexity Analysis

**Theorem.** Binary search performs $O(\log n)$ comparisons.

**Proof.** At each iteration, the search range is halved. Starting with a range of size $n$, after
$k$ iterations the range size is at most $\lceil n/2^k \rceil$. The algorithm terminates when the
range is empty, which happens when $n/2^k \lt{} 1$, i.e., $k \gt{} \log_2 n$. Therefore, the maximum
number of iterations is $\lfloor \log_2 n \rfloor + 1 = O(\log n)$. $\square$

**Formal derivation.** Let $T(n)$ be the number of comparisons for an array of size $n$.

$$T(n) = T(n/2) + O(1), \quad T(1) = O(1)$$

By the Master Theorem (case 2): $T(n) = O(\log n)$.

**Theorem (Binary search lower bound).** Any comparison-based search algorithm on a sorted array
requires $\Omega(\log n)$ comparisons in the worst case.

**Proof.** A decision tree for searching a sorted array of $n$ elements has at least $n + 1$ leaves
($n$ possible positions for $x$, plus "not found"). A binary tree of height $h$ has at most
$2^{h+1} - 1$ leaves, so:

$$n + 1 \leq 2^{h+1} - 1 \implies h \geq \lceil \log_2(n + 2) \rceil - 1 = \Omega(\log n)$$

$\square$

:::warning
Pitfall Binary search **only works on sorted arrays**. Applying it to an unsorted array
gives incorrect results. Also, beware of integer overflow when computing `mid = (low + high) // 2` —
use `mid = low + (high - low) // 2` for safety.
:::

<details>
<summary>Example: Trace binary search for x = 7 in [1, 3, 5, 7, 9, 11, 13]</summary>

| Iteration | low | high | mid | A[mid] | Action          |
| --------- | --- | ---- | --- | ------ | --------------- |
| 1         | 0   | 6    | 3   | 7      | Found! Return 3 |

Result: index 3. ✓
</details>

<details>
<summary>Example: Trace binary search for x = 6 in [1, 3, 5, 7, 9, 11, 13]</summary>

| Iteration | low | high | mid | A[mid] | Action                |
| --------- | --- | ---- | --- | ------ | --------------------- |
| 1         | 0   | 6    | 3   | 7      | 7 > 6, high = 2       |
| 2         | 0   | 2    | 1   | 3      | 3 < 6, low = 2        |
| 3         | 2   | 2    | 2   | 5      | 5 < 6, low = 3        |
| 4         | 3   | 2    | —   | —      | low > high, return -1 |

Result: -1 (not found). ✓
</details>

### Recursive Binary Search

```python
def binary_search_recursive(A, x, low, high):
    if low > high:
        return -1
    mid = low + (high - low) // 2
    if A[mid] == x:
        return mid
    elif A[mid] < x:
        return binary_search_recursive(A, x, mid + 1, high)
    else:
        return binary_search_recursive(A, x, low, mid - 1)
```

:::info
Board-specific **AQA** requires linear search and binary search; binary search must be on
sorted data and may require trace tables. **CIE (9618)** requires linear search and binary search
with pseudocode. **OCR (A)** requires linear and binary search; may also cover hash-based searching.
**Edexcel** covers linear and binary search algorithms.
:::

---

## 3. Comparison of Search Algorithms

| Property              | Linear Search | Binary Search         |
| --------------------- | ------------- | --------------------- |
| Precondition          | None          | Array must be sorted  |
| Best case             | $O(1)$        | $O(1)$                |
| Average case          | $O(n)$        | $O(\log n)$           |
| Worst case            | $O(n)$        | $O(\log n)$           |
| Data structure        | Array, list   | Array (random access) |
| Works on linked list? | Yes           | No (no random access) |

---

## 4. Variants

### Binary Search for Insertion Point

Find the position where $x$ should be inserted to maintain sorted order:

```python
def binary_search_insert_position(A, x):
    low, high = 0, len(A)
    while low < high:
        mid = (low + high) // 2
        if A[mid] < x:
            low = mid + 1
        else:
            high = mid
    return low
```

### Binary Search on a Answer Space

Binary search can be used to find a threshold in a continuous or discrete answer space (e.g.,
"minimum maximum", "maximum minimum" problems).

:::tip
Exam tip For exam questions, always state the precondition (sorted array) for binary search
and trace through the algorithm step by step. Show the low, high, mid values at each iteration.
:::

---

## Problem Set

**Problem 1.** Trace linear search for the value 8 in the array `[3, 1, 4, 1, 5, 9, 2, 6]`. How many
comparisons are made?

<details>
<summary>Answer</summary>

The value 8 is not in the array. All 8 elements are checked:

| Step | Index | A[index] | Comparison | Count |
| ---- | ----- | -------- | ---------- | ----- |
| 1    | 0     | 3        | 3 ≠ 8      | 1     |
| 2    | 1     | 1        | 1 ≠ 8      | 2     |
| 3    | 2     | 4        | 4 ≠ 8      | 3     |
| 4    | 3     | 1        | 1 ≠ 8      | 4     |
| 5    | 4     | 5        | 5 ≠ 8      | 5     |
| 6    | 5     | 9        | 9 ≠ 8      | 6     |
| 7    | 6     | 2        | 2 ≠ 8      | 7     |
| 8    | 7     | 6        | 6 ≠ 8      | 8     |

Total comparisons: 8. Return -1.
</details>

**Problem 2.** Trace binary search for the value 25 in the sorted array
`[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`. Show all iterations.

<details>
<summary>Answer</summary>

| Iteration | low | high | mid | A[mid] | Action            |
| --------- | --- | ---- | --- | ------ | ----------------- |
| 1         | 0   | 9    | 4   | 16     | 16 < 25, low = 5  |
| 2         | 5   | 9    | 7   | 56     | 56 > 25, high = 6 |
| 3         | 5   | 6    | 5   | 23     | 23 < 25, low = 6  |
| 4         | 6   | 6    | 6   | 38     | 38 > 25, high = 5 |
| 5         | 6   | 5    | —   | —      | low > high → -1   |

4 comparisons. Result: -1.
</details>

**Problem 3.** An array of 1024 elements is searched using binary search. What is the maximum number
of comparisons required?

<details>
<summary>Answer</summary>

$\lfloor \log_2 1024 \rfloor + 1 = 10 + 1 = 11$ comparisons.

More precisely, binary search on $n = 1024$ elements requires at most
$\lceil \log_2(1024 + 1) \rceil = \lceil 10.001 \rceil = 11$ comparisons.
</details>

**Problem 4.** Prove that binary search cannot be directly applied to a singly linked list, and
explain what alternative approach could achieve $O(\log n)$ search on a linked list.

<details>
<summary>Answer</summary>

Binary search requires $O(1)$ access to the middle element (A[mid]). In a singly linked list,
accessing the $k$-th element requires traversing $k$ nodes from the head, which is $O(k)$. Finding
the middle of a list of $n$ elements takes $O(n/2) = O(n)$ time, eliminating the benefit of halving.

Alternative: **Jump list / Skip list** — a data structure with multiple levels of linked lists that
allows $O(\log n)$ search by "skipping" ahead at higher levels, analogous to binary search.
</details>

**Problem 5.** Explain why the worst case for linear search is $\Omega(n)$ using an adversary
argument.

<details>
<summary>Answer</summary>

An adversary constructs the worst case dynamically. The adversary maintains that the target $x$ is
not at any position already examined by the algorithm. After $n - 1$ comparisons, all positions
except one have been checked. The adversary places $x$ at the remaining unchecked position (or
declares it absent). Therefore, any correct algorithm must check all $n$ positions in the worst
case, requiring $\Omega(n)$ comparisons. $\square$
</details>

**Problem 6.** Write a function to count the number of occurrences of a value in a sorted array
using binary search. Your function should run in $O(\log n)$ time.

<details>
<summary>Answer</summary>

Find the leftmost and rightmost occurrence using binary search, then compute the difference.

```python
def count_occurrences(A, x):
    left = binary_search_insert_position(A, x)
    right = binary_search_insert_position(A, x + 1) - 1
    if left <= right and left < len(A) and A[left] == x:
        return right - left + 1
    return 0
```

Two binary searches: $O(\log n) + O(\log n) = O(\log n)$.
</details>

**Problem 7.** Given an array that is sorted but rotated (e.g., `[4, 5, 6, 7, 0, 1, 2]`), write a
modified binary search that runs in $O(\log n)$ time.

<details>
<summary>Answer</summary>

```python
def search_rotated(A, x):
    low, high = 0, len(A) - 1
    while low <= high:
        mid = (low + high) // 2
        if A[mid] == x:
            return mid
        if A[low] <= A[mid]:
            if A[low] <= x < A[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if A[mid] < x <= A[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1
```

The key insight: one half of the array (left or right of mid) is always sorted. Determine which half
is sorted and whether the target lies within it.
</details>

**Problem 8.** A binary search implementation has the following bug: `mid = (low + high) / 2` (using
floating-point division instead of integer division). What goes wrong?

<details>
<summary>Answer</summary>

In Python, `/` produces a float, and using a float as an array index raises a `TypeError`. In
languages like C/Java, `int mid = (low + high) / 2` truncates toward zero, which works correctly for
positive values but is technically implementation-dependent.

The more serious bug is **integer overflow**: if `low + high > INT_MAX`, the sum overflows. The
correct form is `mid = low + (high - low) / 2`, which cannot overflow since `high - low` is always
non-negative and less than `INT_MAX`.

For revision on sorting, see
[Sorting Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/sorting-algorithms).
</details>

---

## Problems

**Problem 1.** Trace linear search for the value 14 in the array `[7, 3, 14, 2, 9, 6, 1, 8]`. How
many comparisons are made until the item is found?

<details>
<summary>Hint</summary>

Step through each element from index 0, comparing each with the target 14. Count each comparison
until a match is found.
</details>

<details>
<summary>Answer</summary>

| Step | Index | A[index] | Comparison | Count |
| ---- | ----- | -------- | ---------- | ----- |
| 1    | 0     | 7        | 7 ≠ 14     | 1     |
| 2    | 1     | 3        | 3 ≠ 14     | 2     |
| 3    | 2     | 14       | 14 = 14 ✓  | 3     |

3 comparisons are made. The value 14 is found at index 2. The algorithm returns 2.
</details>

**Problem 2.** Trace linear search for the value 5 in the array
`[10, 20, 30, 40, 50, 60, 70, 80, 90]`. How many comparisons are made?

<details>
<summary>Hint</summary>

The value 5 is not in the array, so the algorithm must check every single element before returning
-1.
</details>

<details>
<summary>Answer</summary>

| Step | Index | A[index] | Comparison | Count |
| ---- | ----- | -------- | ---------- | ----- |
| 1    | 0     | 10       | 10 ≠ 5     | 1     |
| 2    | 1     | 20       | 20 ≠ 5     | 2     |
| 3    | 2     | 30       | 30 ≠ 5     | 3     |
| 4    | 3     | 40       | 40 ≠ 5     | 4     |
| 5    | 4     | 50       | 50 ≠ 5     | 5     |
| 6    | 5     | 60       | 60 ≠ 5     | 6     |
| 7    | 6     | 70       | 70 ≠ 5     | 7     |
| 8    | 7     | 80       | 80 ≠ 5     | 8     |
| 9    | 8     | 90       | 90 ≠ 5     | 9     |

9 comparisons are made. The value 5 is not found, so the algorithm returns -1. This is the worst
case for an array of 9 elements — every element must be checked.
</details>

**Problem 3.** Trace binary search for the value 42 in the sorted array
`[3, 11, 19, 27, 35, 42, 50, 58, 66, 74]`. Show all iterations with low, high, mid, and the action
taken.

<details>
<summary>Hint</summary>

Start with low = 0, high = 9. Calculate mid = (0 + 9) // 2 = 4. Compare A[4] with 42 and adjust the
range accordingly.
</details>

<details>
<summary>Answer</summary>

| Iteration | low | high | mid | A[mid] | Action            |
| --------- | --- | ---- | --- | ------ | ----------------- |
| 1         | 0   | 9    | 4   | 35     | 35 < 42, low = 5  |
| 2         | 5   | 9    | 7   | 58     | 58 > 42, high = 6 |
| 3         | 5   | 6    | 5   | 42     | Found! Return 5   |

3 comparisons are made. The value 42 is found at index 5.
</details>

**Problem 4.** Trace binary search for the value 15 in the sorted array
`[2, 6, 10, 14, 18, 22, 26, 30]`. Show all iterations.

<details>
<summary>Hint</summary>

The value 15 lies between 14 (index 3) and 18 (index 4). The algorithm will narrow down to this gap
and then terminate with low > high.
</details>

<details>
<summary>Answer</summary>

| Iteration | low | high | mid | A[mid] | Action             |
| --------- | --- | ---- | --- | ------ | ------------------ |
| 1         | 0   | 7    | 3   | 14     | 14 < 15, low = 4   |
| 2         | 4   | 7    | 5   | 22     | 22 > 15, high = 4  |
| 3         | 4   | 4    | 4   | 18     | 18 > 15, high = 3  |
| 4         | 4   | 3    | —   | —      | low > high, return |

4 comparisons are made. The value 15 is not in the array, so the algorithm returns -1.
</details>

**Problem 5.** An unsorted array of 10,000 elements must be searched repeatedly. Compare the total
cost of using linear search directly for 1,000 queries versus sorting the array once then using
binary search for 1,000 queries.

<details>
<summary>Hint</summary>

Calculate the cost of each approach: (a) 1,000 linear searches, and (b) one sort plus 1,000 binary
searches. Use O(n log n) for sorting and O(log n) for each binary search.
</details>

<details>
<summary>Answer</summary>

**Linear search approach:** 1,000 × O(10,000) = O(10,000,000) total comparisons.

**Sort + binary search approach:**

- One-time sort: O(10,000 log₂ 10,000) ≈ O(10,000 × 13.3) ≈ O(133,000) comparisons
- 1,000 binary searches: 1,000 × O(log₂ 10,000) ≈ 1,000 × 14 = O(14,000) comparisons
- Total: O(133,000) + O(14,000) = O(147,000) comparisons

Sort + binary search is approximately **68 times more efficient** in total. The one-time cost of
sorting is quickly amortised over multiple queries. The more queries needed, the greater the
advantage of sorting first.
</details>

**Problem 6.** A database contains 500,000 records sorted by a unique key field. Explain which
search algorithm is more efficient and calculate the maximum number of comparisons for each
algorithm.

<details>
<summary>Hint</summary>

Since the data is already sorted, binary search can be applied directly. Calculate ⌊log₂(n)⌋ + 1 for
the binary search worst case.
</details>

<details>
<summary>Answer</summary>

**Linear search:** Worst case = 500,000 comparisons. Time complexity: $O(n)$.

**Binary search:** Worst case =
$\lfloor \log_2(500{,}000) \rfloor + 1 = \lfloor 18.93 \rfloor + 1 = 19$ comparisons. Time
complexity: $O(\log n)$.

Binary search is dramatically more efficient — at most 19 comparisons versus 500,000 for linear
search, an improvement factor of approximately 26,000×. Since the data is already sorted, there is
no additional preprocessing cost.
</details>

**Problem 7.** Calculate the maximum number of comparisons required for binary search on arrays of
sizes 15, 100, 500, and 1,000,000. Show your working using the formula
$\lfloor \log_2 n \rfloor + 1$.

<details>
<summary>Hint</summary>

Apply the formula $\lfloor \log_2 n \rfloor + 1$ to each array size. Remember that
$\lfloor x \rfloor$ means the greatest integer less than or equal to $x$.
</details>

<details>
<summary>Answer</summary>

Using $\lfloor \log_2 n \rfloor + 1$:

| $n$       | $\log_2 n$ | $\lfloor \log_2 n \rfloor$ | Max comparisons |
| --------- | ---------- | -------------------------- | --------------- |
| 15        | 3.91       | 3                          | 3 + 1 = **4**   |
| 100       | 6.64       | 6                          | 6 + 1 = **7**   |
| 500       | 8.97       | 8                          | 8 + 1 = **9**   |
| 1,000,000 | 19.93      | 19                         | 19 + 1 = **20** |

This demonstrates the power of logarithmic growth: searching through a million elements requires
only 20 comparisons maximum.
</details>

**Problem 8.** Write pseudocode for (a) a linear search that returns the index of the first
occurrence of a target value in an array, and (b) a binary search on a sorted array that returns the
index of the target or -1 if not found.

<details>
<summary>Hint</summary>

Linear search uses a simple FOR loop checking each element. Binary search uses a WHILE loop with low
and high pointers, calculating mid each iteration.
</details>

<details>
<summary>Answer</summary>

**(a) Linear search:**

```
FUNCTION LinearSearch(A, x)
    FOR i ← 0 TO LEN(A) - 1
        IF A[i] = x THEN
            RETURN i
        ENDIF
    ENDFOR
    RETURN -1
ENDFUNCTION
```

**(b) Binary search:**

```
FUNCTION BinarySearch(A, x)
    low ← 0
    high ← LEN(A) - 1
    WHILE low ≤ high
        mid ← (low + high) DIV 2
        IF A[mid] = x THEN
            RETURN mid
        ELSE IF A[mid] < x THEN
            low ← mid + 1
        ELSE
            high ← mid - 1
        ENDIF
    ENDWHILE
    RETURN -1
ENDFUNCTION
```

Note: In the binary search, `DIV 2` performs integer division (floor division), which is equivalent
to `//` in Python.
</details>

**Problem 9.** Trace binary search for the value 17 in the sorted array
`[4, 8, 12, 15, 17, 20, 24, 28, 32, 36, 40]`. Show low, high, mid, and the comparison at each step.

<details>
<summary>Hint</summary>

The array has 11 elements (indices 0–10). Start with low = 0, high = 10. The first mid will be
(0 + 10) // 2 = 5.
</details>

<details>
<summary>Answer</summary>

| Iteration | low | high | mid | A[mid] | Comparison | Action          |
| --------- | --- | ---- | --- | ------ | ---------- | --------------- |
| 1         | 0   | 10   | 5   | 20     | 20 > 17    | high = 4        |
| 2         | 0   | 4    | 2   | 12     | 12 < 17    | low = 3         |
| 3         | 3   | 4    | 3   | 15     | 15 < 17    | low = 4         |
| 4         | 4   | 4    | 4   | 17     | 17 = 17 ✓  | Found! Return 4 |

4 comparisons are made. The value 17 is found at index 4.
</details>

**Problem 10.** (Exam-style) A school library system stores 20,000 book records. The librarian needs
to: (a) search for a book by its ISBN (the catalogue is sorted by ISBN), (b) check whether a
specific book ID exists in an unsorted list of 50 recently returned books, (c) find the price of a
book given its ISBN in a sorted price catalogue. For each scenario, justify which search algorithm
is most appropriate, stating your assumptions about the data structure and ordering.

<details>
<summary>Hint</summary>

Consider three factors for each scenario: (1) Is the data sorted? (2) How large is the dataset? (3)
How many searches will be performed? The cost of sorting must be weighed against the benefit of
binary search.
</details>

<details>
<summary>Answer</summary>

**(a) Binary search.** The ISBN catalogue is sorted and stored in an array with random access.
Binary search requires at most $\lfloor \log_2(20{,}000) \rfloor + 1 = 15$ comparisons, compared to
20,000 for linear search. This is efficient and appropriate since no preprocessing is needed.

**(b) Linear search.** The list of 50 recently returned books is unsorted and small. Linear search
takes at most 50 comparisons — negligible cost. Sorting first would cost $O(50 \log 50) \approx 282$
operations, which exceeds the 50 comparisons needed for a single search. For a single check, linear
search is optimal. If many repeated searches were needed, sorting first and using binary search (7
comparisons max) would become worthwhile after approximately 6 searches ($282 / 50 \approx 5.6$).

**(c) Binary search.** The price catalogue is sorted by ISBN with random access. Binary search finds
the ISBN in $O(\log 20{,}000) \approx 15$ comparisons, then retrieves the price at that index in
$O(1)$. Linear search would require $O(20{,}000)$ comparisons — unnecessary when the data is already
sorted.

**Summary:**

| Scenario              | Data size | Sorted? | Best algorithm | Max comparisons |
| --------------------- | --------- | ------- | -------------- | --------------- |
| (a) ISBN lookup       | 20,000    | Yes     | Binary search  | 15              |
| (b) Recently returned | 50        | No      | Linear search  | 50              |
| (c) Price lookup      | 20,000    | Yes     | Binary search  | 15              |
</details>

:::

:::

:::
