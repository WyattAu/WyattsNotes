---
title: Algorithms and Programming
date: 2026-04-14
tags:
  - Computer Science
  - AP
categories:
  - Computer Science
slug: algorithms-and-programming
---

## Sorting Algorithms (CED Unit 3)

### Selection Sort

Repeatedly find the minimum element from the unsorted portion and place it at the beginning.

**Java implementation:**

```java
public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
```

**AP CSP Pseudocode:**

```
PROCEDURE selectionSort(list)
{
    FOR i ← 1 TO LENGTH(list)
    {
        minIdx ← i
        FOR j ← i + 1 TO LENGTH(list)
        {
            IF (list[j] < list[minIdx])
            {
                minIdx ← j
            }
        }
        temp ← list[i]
        list[i] ← list[minIdx]
        list[minIdx] ← temp
    }
}
```

### Insertion Sort

Builds the sorted array one element at a time by inserting each element into its correct position.

**Java implementation:**

```java
public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

### Merge Sort (AP CS A)

A divide-and-conquer algorithm that recursively splits the array, sorts each half, and merges them.

**Java implementation:**

```java
public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

private static void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= right) {
        temp[k++] = arr[j++];
    }
    for (int p = 0; p < temp.length; p++) {
        arr[left + p] = temp[p];
    }
}
```

## Searching Algorithms (CED Unit 3)

### Linear Search

Checks each element sequentially until the target is found or the list ends.

```java
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
```

- Works on unsorted and sorted lists.
- Worst case: $O(n)$ comparisons.

### Binary Search

Works on sorted arrays by repeatedly dividing the search interval in half.

```java
public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
```

- **Requires the array to be sorted.**
- Worst case: $O(\log n)$ comparisons.

### Proof of Binary Search Correctness (Invariant)

**Loop invariant:** If `target` exists in `arr`, then `arr[low] <= target <= arr[high]` at the start
of each iteration.

**Initialization:** Before the first iteration, `low = 0` and `high = n - 1`, so the invariant holds
because the entire array is the search space.

**Maintenance:** If `arr[mid] < target`, we set `low = mid + 1`. Since `arr[mid] < target` and the
array is sorted, `target` must be in `arr[mid+1..high]`. Similarly for the other case.

**Termination:** The loop terminates when `low > high`, meaning the search space is empty. Since the
invariant guarantees the target would be in `[low, high]` if it existed, the target is not in the
array.

$\blacksquare$

## Big-O Notation (CED Unit 3)

Big-O notation describes the upper bound of an algorithm's time or space complexity as a function of
input size $n$.

### Common Time Complexities

| Complexity    | Name         | Example                        |
| ------------- | ------------ | ------------------------------ |
| $O(1)$        | Constant     | Array access by index          |
| $O(\log n)$   | Logarithmic  | Binary search                  |
| $O(n)$        | Linear       | Linear search                  |
| $O(n \log n)$ | Linearithmic | Merge sort, efficient sorting  |
| $O(n^2)$      | Quadratic    | Selection sort, insertion sort |
| $O(n^3)$      | Cubic        | Naive matrix multiplication    |
| $O(2^n)$      | Exponential  | Recursive Fibonacci, power set |

### Comparing Sorting Algorithms

| Algorithm      | Best          | Average       | Worst         | Space       | Stable |
| -------------- | ------------- | ------------- | ------------- | ----------- | ------ |
| Selection Sort | $O(n^2)$      | $O(n^2)$      | $O(n^2)$      | $O(1)$      | No     |
| Insertion Sort | $O(n)$        | $O(n^2)$      | $O(n^2)$      | $O(1)$      | Yes    |
| Merge Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$      | Yes    |
| Quick Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | $O(\log n)$ | No     |

### Formal Definition

$f(n) = O(g(n))$ if there exist positive constants $c$ and $n_0$ such that $f(n) \le c \cdot g(n)$
for all $n \ge n_0$.

### Analyzing Code

**Rule 1:** Sequential statements: add complexities. $O(a) + O(b) = O(\max(a, b))$.

**Rule 2:** Nested loops: multiply complexities. $O(a) \times O(b) = O(a \cdot b)$.

**Rule 3:** Drop constants and lower-order terms. $O(3n^2 + 5n + 100) = O(n^2)$.

:::info[Example]

Analyze the time complexity of this code:

```java
for (int i = 0; i < n; i++) {        // O(n)
    for (int j = 0; j < n; j++) {    // O(n)
        System.out.println(i + j);    // O(1)
    }
}
```

Total: $O(n) \times O(n) \times O(1) = O(n^2)$.

:::

## Recursion (AP CS A)

A method that calls itself. Every recursive solution must have:

1. **Base case(s):** The simplest case(s) that can be solved directly.
2. **Recursive case(s):** The method calls itself with a simpler (smaller) input.

### Example: Factorial

```java
public static int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
```

**Trace for `factorial(4)`:**

```
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
```

### Example: Fibonacci (Inefficient)

```java
public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

Time complexity: $O(2^n)$ because each call spawns two subcalls. This is extremely slow for large
$n$.

### Example: Binary Search (Recursive)

```java
public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) {
        return -1;
    }
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}
```

### Merge Sort Complexity Analysis

At each level of the recursion tree, $n$ elements are processed (merging). The tree has $\log_2 n$
levels. Therefore:

$$
T(n) = 2T(n/2) + O(n) \implies T(n) = O(n \log n)
$$

## Common Pitfalls

1. **Forgetting the base case in recursion.** This causes infinite recursion and a stack overflow.
2. **Confusing binary search with linear search.** Binary search requires a sorted array and has
   $O(\log n)$ complexity; linear search works on any array with $O(n)$ complexity.
3. **Using selection sort or insertion sort for large datasets.** These $O(n^2)$ algorithms are too
   slow; use merge sort ($O(n \log n)$) instead.
4. **Off-by-one errors in binary search.** The condition is `low <= high` (inclusive), and the
   updates are `mid + 1` and `mid - 1` (not `mid`).
5. **Confusing Big-O with exact running time.** Big-O describes growth rate, not actual time.
6. **Forgetting that Big-O is an upper bound.** An $O(n)$ algorithm is also $O(n^2)$ and $O(n^3)$,
   but $O(n)$ is the tightest (best) bound.
7. **Not recognizing that AP CSP pseudocode uses 1-based indexing** while Java uses 0-based
   indexing.

## Practice Questions

1. Trace the execution of selection sort on the array `[5, 3, 8, 1, 2]`. Show the array after each
   pass.

2. Write a recursive Java method `sumDigits(int n)` that returns the sum of the digits of `n`.

3. Explain why the recursive Fibonacci algorithm has $O(2^n)$ time complexity.

4. Write a Java method that performs binary search on a sorted array of strings.

5. Analyze the time complexity of the following code:

```java
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        System.out.println(i * j);
    }
}
```

6. Compare the number of comparisons made by linear search and binary search for an array of
   1,048,576 elements when searching for an element that is not in the array.

7. Write pseudocode for insertion sort and trace it on the list `[4, 2, 7, 1, 3]`.

8. Explain why merge sort is preferred over selection sort for sorting large datasets. Include Big-O
   analysis in your explanation.
