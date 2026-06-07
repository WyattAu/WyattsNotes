---
title: Sorting Algorithms
tags:
  - Computing
  - University
---

### 3.1 Merge Sort

**Algorithm.** Divide the array in half, recursively sort each half, then merge.

```
MergeSort(A, l, r):
    if l < r:
        m = (l + r) / 2
        MergeSort(A, l, m)
        MergeSort(A, m+1, r)
        Merge(A, l, m, r)
```

**Theorem 3.1.** Merge sort runs in $O(n \log n)$ time in all cases (best, average, worst).

_Proof._ The recurrence is $T(n) = 2T(n/2) + O(n)$. By the Master theorem (case 2): $a = 2$,
$b = 2$, $f(n) = O(n) = O(n^{\log_b a})$So $T(n) = O(n \log n)$. $\blacksquare$

**Theorem 3.2.** Merge sort is stable and requires $O(n)$ auxiliary space.

_Proof of stability._ In `Merge`When elements from the left and right halves are equal, we always
take from the left half first. This preserves the relative order of equal elements. $\blacksquare$

**Theorem 3.3 (Correctness of Merge).** The `Merge` procedure produces a sorted array from two
sorted subarrays.

_Proof._ Let $A[l..m]$ and $A[m+1..r]$ be sorted subarrays. The merge procedure maintains two
indices $i$ and $j$ pointing to the next unmerged element in each subarray. At each step, the
minimum of $A[i]$ and $A[j]$ is appended to the output. By induction on the number of elements
placed: if $k$ elements have been placed and they are the $k$ smallest among the remaining elements,
then the $(k+1)$-th element placed is the minimum of the remaining elements. Since each subarray is
sorted, the smallest remaining element is $\min(A[i], A[j])$. $\blacksquare$

**Theorem 3.4 (Optimality of Merge Sort).** Merge sort achieves the optimal $O(n \log n)$
comparison-based sorting bound.

_Proof._ By Theorem 3.7, no comparison sort can do better than $\Omega(n \log n)$. Merge sort
achieves $O(n \log n)$ in all cases, so it is asymptotically optimal among comparison sorts.
$\blacksquare$

<details>
<summary>Worked Example: Merge Sort Trace</summary>

Sort the array $[38, 27, 43, 3, 9, 82, 10]$:

Split: $[38, 27, 43, 3]$ and $[9, 82, 10]$

Split: $[38, 27]$ and $[43, 3]$ Split: $[38]$ and $[27]$ → Merge: $[27, 38]$ Split: $[43]$ and $[3]$
→ Merge: $[3, 43]$ Merge: $[3, 27, 38, 43]$

Split: $[9, 82]$ and $[10]$ Split: $[9]$ and $[82]$ → Merge: $[9, 82]$ Merge: $[9, 10, 82]$

Final merge: $[3, 9, 10, 27, 38, 43, 82]$

Total comparisons: 13.

</details>

### 3.2 Quicksort

**Algorithm.** Choose a pivot, partition the array into elements $\leq$ pivot and $>$ pivot,
recursively Sort each partition.

```
QuickSort(A, lo, hi):
    if lo < hi:
        p = Partition(A, lo, hi)
        QuickSort(A, lo, p - 1)
        QuickSort(A, p + 1, hi)
```

**Partition (Lomuto):** Select the last element as pivot. Iterate through the array, maintaining
that elements $A[\mathrm{lo}..i]$ are $\leq$ pivot and $A[i+1..j-1]$ are $>$ pivot.

**Theorem 3.5.** Quicksort runs in $O(n \log n)$ expected time and $O(n^2)$ worst-case time.

_Proof (expected case)._ If the pivot is chosen uniformly at random, the expected number of
Comparisons is $O(n \log n)$ by an indicator random variable argument.

Let $X_{ij}$ be the indicator random variable that $z_i$ and $z_j$ are compared, where
$z_1, \ldots, z_n$ are the sorted elements. Since elements are compared only if one is an ancestor
of the other in the recursion tree, and the pivot is chosen uniformly at random:

$$\mathrm{E}[X_{ij}] = \Pr(z_i \mathrm{~and~} z_j \mathrm{~are~compared}) = \frac{2}{j - i + 1}$$

The total number of comparisons is $X = \sum_{i < j} X_{ij}$So:

$$\mathrm{E}[X] = \sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \frac{2}{j - i + 1} \leq \sum_{k=1}^{n} n \cdot \frac{2}{k+1} = O(n \log n)$$

Worst case occurs when the pivot is always the smallest or largest element (e.g., already sorted
Array with first-element pivot): $T(n) = T(n-1) + O(n) = O(n^2)$. $\blacksquare$

**Theorem 3.6.** Quicksort is not stable but uses $O(\log n)$ expected stack space.

<details>
<summary>Worked Example: Quicksort with Median-of-Three Pivot</summary>

Sort $[3, 7, 8, 5, 2, 1, 9, 5, 4]$ using median-of-three (first, middle, last element).

Pivot selection: elements at positions 0, 4, 8 are $3, 2, 4$. Median is $3$.

Partition around $3$: $[2, 1, 3, 8, 5, 7, 9, 5, 4]$

Recurse on $[2, 1]$ (pivot $2$): $[1, 2]$ Recurse on $[8, 5, 7, 9, 5, 4]$ (median of $8, 7, 4$ is
$7$): $[4, 5, 5, 7, 9, 8]$

Recurse on $[4, 5, 5]$ (pivot $5$): $[4, 5, 5]$ Recurse on $[9, 8]$ (pivot $9$): $[8, 9]$

Result: $[1, 2, 3, 4, 5, 5, 7, 8, 9]$

</details>

### 3.3 Heapsort

**Algorithm.** Build a max-heap in $O(n)$ time, then repeatedly extract the maximum.

**Theorem 3.7.** Heapsort runs in $O(n \log n)$ time in all cases, uses $O(1)$ auxiliary space, and
Is not stable.

_Proof._ Building the heap takes $O(n)$ by Theorem 2.11. Each of the $n$ extract-max operations
takes $O(\log n)$For a total of $O(n \log n)$. Space is $O(1)$ since the heap is stored in-place.
$\blacksquare$

### 3.4 Lower Bound on Comparison Sorting

**Theorem 3.8.** Any comparison-based sorting algorithm requires $\Omega(n \log n)$ comparisons in
the Worst case.

_Proof._ A comparison-based sort can be modelled as a decision tree. The tree must have at least
$n!$ Leaves (one for each permutation). A binary tree with $n!$ leaves has height at least
$\log_2(n!) \geq \log_2((n/2)^{n/2}) = (n/2)\log_2(n/2) = \Omega(n \log n)$.

More precisely, using Stirling's approximation:
$\log_2(n!) = n \log_2 n - n \log_2 e + O(\log n) = \Omega(n \log n)$. $\blacksquare$

### 3.5 Counting Sort

Counting sort sorts integers in $O(n + k)$ time where $k$ is the range of values.

**Algorithm:**

1. Count occurrences: $C[i] =$ number of elements equal to $i$.
2. Compute prefix sums: $C[i] =$ number of elements $\leq i$.
3. Place each element in its correct position (iterating backwards for stability).

**Theorem 3.9.** Counting sort runs in $O(n + k)$ time and $O(n + k)$ space, and is stable.

_Proof._ Step 1 takes $O(n)$ time. Step 2 takes $O(k)$ time. Step 3 takes $O(n)$ time. The output
array uses $O(n)$ space and the count array uses $O(k)$ space. Stability follows from iterating
backwards in step 3: the last occurrence of each value is placed first, preserving the order of
equal elements. $\blacksquare$

### 3.6 Radix Sort

Radix sort processes digits from least significant to most significant (LSD radix sort) using a
stable sort (e.g., counting sort) as a subroutine.

**Theorem 3.10.** LSD radix sort sorts $n$ integers with $d$ digits in base $b$ in $O(d(n + b))$
time.

_Proof._ We perform $d$ passes of counting sort, each taking $O(n + b)$ time. After the $i$-th pass,
the array is sorted by the $i$ least significant digits. By induction on $i$After $d$ passes the
array is fully sorted. $\blacksquare$

**Corollary 3.11.** For $d$-digit integers where $d = O(1)$ (e.g., 32-bit integers), radix sort runs
in $O(n)$ time.

<details>
<summary>Worked Example: Counting Sort Trace</summary>

Sort the array $[4, 2, 2, 8, 3, 3, 1]$ using counting sort.

Range of values: $[1, 8]$So $k = 8$.

**Step 1 — Count:** $C = [0, 1, 2, 2, 1, 0, 0, 0]$ (indices 1 through 8).

**Step 2 — Prefix sums:** $C = [0, 1, 3, 5, 6, 6, 6, 6]$.

**Step 3 — Place (iterate backwards):**

- $A[6] = 1$: $C[1] = 1$Place at position 0. $C[1] = 0$.
- $A[5] = 3$: $C[3] = 5$Place at position 4. $C[3] = 4$.
- $A[4] = 3$: $C[3] = 4$Place at position 3. $C[3] = 3$.
- $A[3] = 8$: $C[8] = 6$Place at position 5. $C[8] = 5$.
- $A[2] = 2$: $C[2] = 3$Place at position 2. $C[2] = 2$.
- $A[1] = 2$: $C[2] = 2$Place at position 1. $C[2] = 1$.
- $A[0] = 4$: $C[4] = 6$Place at position 5. $C[4] = 5$.

Result: $[1, 2, 2, 3, 3, 4, 8]$.

</details>

<details>
<summary>Worked Example: Radix Sort Trace</summary>

Sort the array $[170, 45, 75, 90, 802, 24, 2, 66]$ using LSD radix sort with base 10.

**Pass 1 (ones digit):** Sort by $0, 5, 5, 0, 2, 4, 2, 6$. After stable counting sort:
$[170, 90, 802, 2, 24, 45, 75, 66]$

**Pass 2 (tens digit):** Sort by $7, 9, 0, 0, 2, 4, 7, 6$. After stable counting sort:
$[802, 2, 24, 45, 66, 170, 75, 90]$

**Pass 3 (hundreds digit):** Sort by $8, 0, 0, 0, 0, 1, 0, 0$. After stable counting sort:
$[2, 24, 45, 66, 75, 90, 170, 802]$

Total: 3 passes, each $O(n + 10) = O(n)$. Total: $O(3n) = O(n)$.

</details>

### 3.7 External Sorting

**Problem.** Sort data that is too large to fit in main memory.

**Algorithm (External Merge Sort):**

1. Read chunks that fit in memory, sort each in memory, write sorted runs to disk.
2. Repeatedly merge runs using a $k$-way merge, reading/writing from disk.

**Theorem 3.12.** External merge sort with $M$ bytes of memory and $N$ bytes of data performs
$O\left(\frac{N}{M} \log_{k}\left(\frac{N}{M}\right)\right)$ passes, where $k$ is the merge fan-in.

_Proof._ The initial pass creates $N/M$ sorted runs of size $M$. Each merge pass combines $k$ runs
into 1, reducing the number of runs by a factor of $k$. After $\log_k(N/M)$ passes, a single sorted
run remains. Each pass reads and writes all $N$ bytes, so total I/O is $O(N \log_k(N/M))$.
$\blacksquare$

:::caution Common Pitfall The $O(n \log n)$ lower bound applies only to **comparison-based**
sorting. Non-comparison sorts Like radix sort can achieve $O(n)$ time for integers in a bounded
range. However, non-comparison sorts sacrifice generality: they depend on the structure of the keys
and cannot sort arbitrary objects.

### 3.8 Comparison of Sorting Algorithms

| Algorithm     | Best          | Average       | Worst         | Space       | Stable |
| ------------- | ------------- | ------------- | ------------- | ----------- | ------ |
| Merge Sort    | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$      | Yes    |
| Quicksort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | $O(\log n)$ | No     |
| Heapsort      | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$      | No     |
| Counting Sort | $O(n + k)$    | $O(n + k)$    | $O(n + k)$    | $O(n + k)$  | Yes    |
| Radix Sort    | $O(d(n+b))$   | $O(d(n+b))$   | $O(d(n+b))$   | $O(n + b)$  | Yes    |


:::
