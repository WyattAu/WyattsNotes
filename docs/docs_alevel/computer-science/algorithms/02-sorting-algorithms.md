---
title: Sorting Algorithms
description:
  'A-Level Computer Science Sorting Algorithms notes covering key definitions, core concepts, worked
  examples, and practice questions for focused revision.'
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: sorting-algorithms
---

## 1. Introduction

**The Sorting Problem:** Given an array $A[0..n-1]$Rearrange the elements into non-decreasing Order:
$A[0] \leq A[1] \leq \cdots \leq A[n-1]$.

**Stability:** A sort is **stable** if elements with equal keys maintain their relative order from
The input. Stability matters when sorting by multiple keys (e.g., sort by surname, then by first
Name).

**In-place:** A sort is **in-place** if it uses $O(1)$ extra memory (excluding the input array).

<hr />

## 2. Bubble Sort

### Algorithm

Repeatedly step through the array, comparing adjacent pairs and swapping if they are in the wrong
Order. After each pass, the largest unsorted element "bubbles up" to its correct position.

```python
def bubble_sort(A):
    n = len(A)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]
                swapped = True
        if not swapped:
            break
    return A
```

### Correctness Proof

**Theorem.** After the $i$-th pass ($0$-indexed), the $i+1$ largest elements are in their final
Positions at the end of the array.

**Proof.** By induction on $i$.

_Base case ($i = 0$)._ The inner loop compares each adjacent pair from index 0 to $n-2$. Whenever
$A[j] \gt A[j+1]$They are swapped. This ensures the maximum element moves rightward through Every
comparison until it reaches index $n-1$. ✓

_Inductive step._ Assume after pass $i-1$The $i$ largest elements are at indices $n-i, \ldots, n-1$.
Pass $i$ operates on indices $0$ to $n-i-1$. By the same argument, the maximum Element in this range
moves to index $n-i-1$. The $i+1$ largest elements are now at indices $n-i-1, \ldots, n-1$. ✓

After $n-1$ passes, all elements are sorted. $\square$

### Complexity

- **Worst case:** $O(n^2)$ — when the array is in reverse order
- **Best case:** $O(n)$ — when the array is already sorted (early termination with `swapped` flag)
- **Average case:** $O(n^2)$
- **Space:** $O(1)$ — in-place
- **Stable:** Yes

**Proof of worst case.** In reverse order, each pass performs $n - 1 - i$ swaps for pass $i$. Total
Comparisons:

$$\sum_{i=0}^{n-2}(n - 1 - i) = \sum_{k=1}^{n-1} k = \frac{n(n-1)}{2} = O(n^2)$$

$\square$

<hr />

## 3. Insertion Sort

### Algorithm

Build the sorted array one element at a time by inserting each element into its correct position
Among the previously sorted elements.

```python
def insertion_sort(A):
    for i in range(1, len(A)):
        key = A[i]
        j = i - 1
        while j >= 0 and A[j] > key:
            A[j + 1] = A[j]
            j -= 1
        A[j + 1] = key
    return A
```

### Correctness Proof

**Theorem.** After the $i$-th iteration of the outer loop ($1 \leq i \lt n$), the subarray $A[0..i]$
is sorted.

**Proof.** By induction on $i$.

_Base case ($i = 1$)._ $A[0..1]$ contains at most 2 elements. If $A[0] \gt A[1]$They are Swapped;
otherwise, no change. Either way, $A[0..1]$ is sorted. ✓

_Inductive step._ Assume $A[0..i-1]$ is sorted. We insert $A[i]$ (stored as `key`) by shifting
Elements greater than `key` one position right. Since $A[0..i-1]$ is sorted, all elements greater
Than `key` form a contiguous suffix. After shifting, `key` is placed at the first position where the
Element to its left is $\leq$ `key`. The resulting $A[0..i]$ is sorted. ✓

$\square$

### Complexity

- **Worst case:** $O(n^2)$ — reverse order
- **Best case:** $O(n)$ — already sorted (inner loop never executes)
- **Average case:** $O(n^2)$
- **Space:** $O(1)$ — in-place
- **Stable:** Yes

**Proof of average case.** On average, each insertion shifts approximately half of the sorted
Portion:

$$T(n) = \sum_{i=1}^{n-1} \frac{i}{2} = \frac{1}{2}\sum_{i=1}^{n-1} i = \frac{1}{2} \cdot \frac{n(n-1)}{2} = \frac{n(n-1)}{4} = O(n^2)$$

$\square$

<hr />

## 4. Merge Sort

### Algorithm

Divide the array into two halves, recursively sort each half, then merge the two sorted halves.

```python
def merge_sort(A):
    if len(A) <= 1:
        return A
    mid = len(A) // 2
    left = merge_sort(A[:mid])
    right = merge_sort(A[mid:])
    return merge(left, right)

def merge(L, R):
    result = []
    i = j = 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            result.append(L[i])
            i += 1
        else:
            result.append(R[j])
            j += 1
    result.extend(L[i:])
    result.extend(R[j:])
    return result
```

### Correctness Proof

**Theorem.** `merge_sort(A)` returns a sorted permutation of $A$.

**Proof.** By structural induction on the array size $n$.

_Base case._ $n \leq 1$: the array is sorted. ✓

_Inductive step._ Assume `merge_sort` correctly sorts arrays of size $\lt n$. For an array of size
$n$:

1. Split into $L$ (size $\lfloor n/2 \rfloor$) and $R$ (size $\lceil n/2 \rceil$). By the inductive
   hypothesis, `merge_sort(L)` and `merge_sort(R)` return sorted arrays.
2. `merge` combines them: at each step, it appends the smaller of the two front elements. This
   produces a sorted array (standard merge of two sorted sequences).
3. `merge` appends all remaining elements, so no elements are lost.

The result is a sorted permutation of the input. ✓ $\square$

### Complexity

**Theorem.** Merge sort runs in $O(n \log n)$ time.

**Proof.** The recurrence relation is:

$$T(n) = 2T(n/2) + O(n), \quad T(1) = O(1)$$

The $O(n)$ term comes from the `merge` step, which processes each element exactly once.

By the Master Theorem: $a = 2$, $b = 2$, $f(n) = O(n)$. We have
$f(n) = O(n^{\log_b a}) = O(n^1) = O(n)$Which is case 2. Therefore:

$$T(n) = O(n \log n)$$

**Space:** $O(n)$ — the merge step requires a temporary array. **Stable:** Yes (merge uses `<=`).

<hr />

## 5. Quick Sort

### Algorithm

Select a **pivot** element, partition the array so that elements
$\lt $ pivot are on the left and elements $\geq$ pivot are on the right, then recursively sort the
Two partitions.

```python
def quick_sort(A, low=0, high=None):
    if high is None:
        high = len(A) - 1
    if low < high:
        pivot_index = partition(A, low, high)
        quick_sort(A, low, pivot_index - 1)
        quick_sort(A, pivot_index + 1, high)

def partition(A, low, high):
    pivot = A[high]
    i = low - 1
    for j in range(low, high):
        if A[j] < pivot:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[i + 1], A[high] = A[high], A[i + 1]
    return i + 1
```

### Correctness Proof

**Theorem.** After `partition(A, low, high)`The pivot is at its final sorted position, all Elements
to its left are $\lt $ pivot, and all elements to its right are $\geq$ pivot.

**Proof.** The variable `i` tracks the boundary between elements
$\lt $ pivot (indices `low..i`) and elements $\geq$ pivot (indices `i+1..j-1`). The loop Invariant:

_At the start of each iteration with index `j`:_

- $A[\mathrm{low}..i]$ contains only elements $\lt $ pivot
- $A[i+1..j-1]$ contains only elements $\geq$ pivot
- $A[\mathrm{high}] = \mathrm{pivot}$ (unchanged)

_Maintenance._ If $A[j] \lt \mathrm{pivot}$Increment $i$ and swap $A[i]$ with $A[j]$Extending The
"$\lt $ pivot" region. If $A[j] \geq \mathrm{pivot}$Increment $j$ only, extending the "$\geq$ pivot"
region.

_Termination._ After the loop, swap $A[i+1]$ with $A[\mathrm{high}]$ (the pivot). Now:

- $A[\mathrm{low}..i]$ all $\lt $ pivot
- $A[i+1] = \mathrm{pivot}$ (final position)
- $A[i+2..\mathrm{high}]$ all $\geq$ pivot

$\square$

### Complexity

| Case    | Time          | Pivot choice     |
| ------- | ------------- | ---------------- |
| Best    | $O(n \log n)$ | Median           |
| Average | $O(n \log n)$ | Random           |
| Worst   | $O(n^2)$      | Min/max (sorted) |

**Space:** $O(\log n)$ average (recursion stack), $O(n)$ worst. **Stable:** No (partitioning swaps
Can change relative order).

**Proof of worst case.** If the pivot is always the smallest or largest element, one partition has
Size 0 and the other has size $n-1$:

$$T(n) = T(n-1) + O(n) = \sum_{k=1}^{n} O(k) = O(n^2)$$

**Proof of average case.** With random pivot selection, the expected partition size is roughly
$n/2$. The recurrence is $T(n) = T(n/2) + O(n)$ on average, giving $T(n) = O(n \log n)$ by the
Master Theorem.

<hr />

## 6. Comparison Table

| Algorithm      | Best          | Average       | Worst         | Space       | Stable |
| -------------- | ------------- | ------------- | ------------- | ----------- | ------ |
| Bubble Sort    | $O(n)$        | $O(n^2)$      | $O(n^2)$      | $O(1)$      | Yes    |
| Insertion Sort | $O(n)$        | $O(n^2)$      | $O(n^2)$      | $O(1)$      | Yes    |
| Merge Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$      | Yes    |
| Quick Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | $O(\log n)$ | No     |
| Heap Sort      | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$      | No     |

<hr />

## 7. The $\Omega(n \log n)$ Lower Bound for Comparison-Based Sorting

**Theorem.** Any comparison-based sorting algorithm requires $\Omega(n \log n)$ comparisons in the
Worst case.

**Proof.** A comparison-based sorting algorithm can be modelled as a **decision tree**. Each
Internal node represents a comparison (e.g., "$A[i] \leq A[j]$?"), and each leaf represents a
Permutation of the input (a possible output).

There are $n!$ possible permutations of $n$ elements, so the decision tree has at least $n!$ leaves.

A binary tree of height $h$ has at most $2^h$ leaves, so:

$$2^h \geq n! \implies h \geq \log_2(n!)$$

Using Stirling's approximation: $n! \approx \left(\frac{n}{e}\right)^n \sqrt◆LB◆2\pi n◆RB◆$

$$\log_2(n!) = n\log_2 n - n\log_2 e + O(\log n) = \Omega(n \log n)$$

Therefore, any comparison-based sorting algorithm requires at least $\Omega(n \log n)$ comparisons
In the worst case. $\square$

:::info Info Are asymptotically optimal among comparison-based sorts. Non-comparison sorts (radix
sort, counting Sort) can beat $O(n \log n)$ but have restrictions on key types.
:::

<hr />

## Problem Set

**Problem 1.** Trace bubble sort on the array `[5, 1, 4, 2, 8]`. Show the array after each pass.

<details>
<summary>Answer</summary>

Pass 1: Compare and swap adjacent pairs. `[5, 1, 4, 2, 8]` → `[1, 5, 4, 2, 8]` → `[1, 4, 5, 2, 8]` →
`[1, 4, 2, 5, 8]` → `[1, 4, 2, 5, 8]` After pass 1: `[1, 4, 2, 5, 8]`

Pass 2: `[1, 4, 2, 5, 8]` → `[1, 2, 4, 5, 8]` → `[1, 2, 4, 5, 8]` → `[1, 2, 4, 5, 8]` After pass 2:
`[1, 2, 4, 5, 8]`

Pass 3: No swaps → sorted. Early termination.

</details>

**Problem 2.** Trace insertion sort on the array `[5, 1, 4, 2, 8]`. Show the array after each
Insertion.

<details>
<summary>Answer</summary>

| i   | key | Array state                |
| --- | --- | -------------------------- |
| 1   | 1   | [1, 5, 4, 2, 8]            |
| 2   | 4   | [1, 4, 5, 2, 8]            |
| 3   | 2   | [1, 2, 4, 5, 8]            |
| 4   | 8   | [1, 2, 4, 5, 8] (no shift) |

Sorted: `[1, 2, 4, 5, 8]`

</details>

**Problem 3.** Show the merge process when merging `[1, 3, 5]` and `[2, 4, 6, 8]`.

<details>
<summary>Answer</summary>

| Step | L remaining | R remaining  | Output           |
| ---- | ----------- | ------------ | ---------------- |
| 1    | [1, 3, 5]   | [2, 4, 6, 8] | 1 < 2 → output 1 |
| 2    | [3, 5]      | [2, 4, 6, 8] | 3 > 2 → output 2 |
| 3    | [3, 5]      | [4, 6, 8]    | 3 < 4 → output 3 |
| 4    | [5]         | [4, 6, 8]    | 5 > 4 → output 4 |
| 5    | [5]         | [6, 8]       | 5 < 6 → output 5 |
| 6    | []          | [6, 8]       | append [6, 8]    |

Result: `[1, 2, 3, 4, 5, 6, 8]`

</details>

**Problem 4.** Trace quick sort on `[3, 6, 8, 10, 1, 2, 1]` using the last element as pivot. Show
The array and pivot after each partition.

<details>
<summary>Answer</summary>

**Call 1:** `quick_sort([3, 6, 8, 10, 1, 2, 1], 0, 6)` Pivot = 1 (index 6). Partition:
`[1, 1, 2, 10, 6, 8, 3]`. Pivot index = 1. Recurse on `[1]` (0, 0) and `[2, 10, 6, 8, 3]` (2, 6).

**Call 2:** `quick_sort([2, 10, 6, 8, 3], 2, 6)` Pivot = 3 (index 6). Partition: `[2, 3, 6, 8, 10]`.
Pivot index = 3. Recurse on `[2]` (2, 2) and `[6, 8, 10]` (4, 6).

**Call 3:** `quick_sort([6, 8, 10], 4, 6)` Pivot = 10 (index 6). Partition: `[6, 8, 10]`. Pivot
Index = 6. Recurse on `[6, 8]` (4, 5) and `[]` (7, 6).

**Call 4:** `quick_sort([6, 8], 4, 5)` Pivot = 8 (index 5). Partition: `[6, 8]`. Pivot index = 5.

Final: `[1, 1, 2, 3, 6, 8, 10]`

</details>

**Problem 5.** Prove that insertion sort is stable.

<details>
<summary>Answer</summary>

Insertion sort inserts $A[i]$ into the sorted portion $A[0..i-1]$ by shifting elements $\gt A[i]$
One position right. The condition for shifting is `A[j] > key` (strictly greater). If
$A[j] = \mathrm{key}$The element is **not** shifted, and `key` is placed **after** the equal
Element. Therefore, equal elements maintain their relative input order. $\square$

</details>

**Problem 6.** A sorting algorithm makes exactly 7 comparisons to sort an array of 5 elements. Is
This possible? Justify using the decision tree model.

<details>
<summary>Answer</summary>

A decision tree for sorting 5 elements must have at least $5! = 120$ leaves. A binary tree of height
7 has at most $2^8 - 1 = 255$ nodes and at most $2^7 = 128$ leaves. Since $128 \geq 120$It is
Theoretically possible to sort 5 elements in 7 comparisons. However, this requires a perfectly
Balanced decision tree (each comparison splits the remaining possibilities roughly in half), which
Is achievable by an optimal comparison-based sorting algorithm.

Note: $2^6 = 64 \lt 120$So 6 comparisons are insufficient. The minimum is
$\lceil \log_2 120 \rceil = 7$ comparisons.

</details>

**Problem 7.** When is insertion sort preferred over merge sort despite its worse asymptotic
Complexity?

<details>
<summary>Answer</summary>

Insertion sort is preferred when:

1. **The array is small** ( $n \lt 20$): the constant factors of insertion sort are smaller
2. **The array is nearly sorted**: insertion sort runs in $O(n + d)$ where $d$ is the number of
   inversions
3. **Memory is constrained**: insertion sort is in-place ($O(1)$ extra space) vs merge sort's $O(n)$
4. **Stability is required** and quick sort's instability is a concern

Many hybrid algorithms (e.g., Timsort) use insertion sort for small subarrays within merge sort.

</details>

**Problem 8.** Show that quick sort's worst case occurs when the array is already sorted and the
Last element is chosen as pivot.

<details>
<summary>Answer</summary>

For sorted array `[1, 2, 3, 4, 5]` with pivot = last element:

Partition 1: pivot = 5, all elements < 5, pivot index = 4. Recurse on `[1, 2, 3, 4]`. Partition 2:
Pivot = 4, all elements < 4, pivot index = 3. Recurse on `[1, 2, 3]`. Partition 3: pivot = 3, pivot
Index = 2. Recurse on `[1, 2]`. Partition 4: pivot = 2, pivot index = 1. Recurse on `[1]`.

Each partition processes the full remaining array. Total comparisons:
$(n-1) + (n-2) + \cdots + 1 = n(n-1)/2 = O(n^2)$.

</details>

**Problem 9.** Derive the recurrence relation for merge sort and solve it using the Master Theorem.

<details>
<summary>Answer</summary>

The recurrence: $T(n) = 2T(n/2) + cn$, $T(1) = d$.

Master Theorem: $a = 2$, $b = 2$, $f(n) = cn$.

$n^{\log_b a} = n^{\log_2 2} = n^1 = n$.

$f(n) = cn = O(n^1)$Which is case 2: $f(n) = \Theta(n^{\log_b a} \log^k n)$ with $k = 0$.

Therefore: $T(n) = \Theta(n \log n)$.

</details>

**Problem 10.** Count the number of inversions in `[2, 4, 1, 3, 5]`.

<details>
<summary>Answer</summary>

An inversion is a pair $(i, j)$ with $i \lt j$ and $A[i] \gt A[j]$.

(2, 1): 2 > 1 ✓ (4, 1): 4 > 1 ✓ (4, 3): 4 > 3 ✓

Total inversions: 3.

Insertion sort would perform exactly 3 swaps (shifts) to sort this array.

</details>

**Problem 11.** Explain how to modify merge sort to count the number of inversions in an array in
$O(n \log n)$ time.

<details>
<summary>Answer</summary>

During the merge step, when an element from the right half is placed before elements remaining in
The left half, each remaining left element forms an inversion with this right element.

```python
def merge_count(L, R):
    result = []
    i = j = inversions = 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            result.append(L[i])
            i += 1
        else:
            result.append(R[j])
            inversions += len(L) - i
            j += 1
    result.extend(L[i:])
    result.extend(R[j:])
    return result, inversions
```

When $R[j] \lt L[i]$All elements $L[i], L[i+1], \ldots$ in the left half are greater than
$R[j]$Contributing `len(L) - i` inversions.

Total inversions = sum of inversions from all merge steps. Total time: $O(n \log n)$.

</details>

**Problem 12.** Explain why non-comparison-based sorts like counting sort can achieve $O(n)$ time,
And state their limitations.

<details>
<summary>Answer</summary>

Counting sort does not compare elements. Instead, it counts the frequency of each distinct key value
And uses these counts to determine positions. If the key values are integers in the range $[0, k]$
Counting sort runs in $O(n + k)$ time.

**Limitations:**

1. Only works when keys are integers (or can be mapped to integers)
2. Inefficient when $k$ is very large compared to $n$ (e.g., sorting 100 elements with keys up to
   $10^9$)
3. Not comparison-based, so the $\Omega(n \log n)$ lower bound does not apply
4. Not in-place (requires $O(n + k)$ extra space)
5. Not stable in its basic form (but can be made stable)

Radix sort extends counting sort to handle larger key ranges by sorting digit by digit, achieving
$O(d(n + b))$ where $d$ is the number of digits and $b$ is the base.

</details>

For revision on data structures used in sorting, see
[Trees](/docs/alevel/computer-science/data-structures/trees) (heap sort) and
[Linked Lists](/docs/alevel/computer-science/data-structures/linked-lists) (merge sort).

:::

## Common Pitfalls

1. Confusing the best-case, average-case, and worst-case complexities of sorting algorithms.

2. Forgetting that merge sort requires $O(n)$ additional space while quicksort can be done in-place.

3. Forgetting that $O(n \log n)$ average-case for quicksort becomes $O(n^2)$ worst-case on already
   sorted input.

4. Mixing up Big O, Big $\Omega$, and Big $\Theta$ notation — Big O is an upper bound, not
   necessarily tight.

5. Writing pseudocode that is too language-specific rather than using standard algorithmic
   constructs.

6. Misunderstanding the difference between a stack (LIFO) and a queue (FIFO) in data structure
   applications.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

