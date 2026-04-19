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
    FOR i <- 1 TO LENGTH(list)
    {
        minIdx <- i
        FOR j <- i + 1 TO LENGTH(list)
        {
            IF (list[j] < list[minIdx])
            {
                minIdx <- j
            }
        }
        temp <- list[i]
        list[i] <- list[minIdx]
        list[minIdx] <- temp
    }
}
```

**Intuition.** Imagine picking cards from a shuffled deck one at a time. You scan all remaining
cards, find the smallest, and place it next in your sorted hand. After $n$ passes, your hand is
fully sorted.

**Why selection sort is $O(n^2)$.** The outer loop runs $n-1$ times. For each outer iteration, the
inner loop scans the remaining unsorted portion. The total number of comparisons is
$(n-1) + (n-2) + \cdots + 1 = n(n-1)/2 = O(n^2)$.

**Stability.** Selection sort is **not stable** because swapping `arr[i]` with `arr[minIdx]` can
move an equal element past another equal element.

**Worked Example.** Trace selection sort on `[5, 3, 8, 1, 2]`.

Pass 1: min = 1 (index 3). Swap arr[0] and arr[3]: `[1, 3, 8, 5, 2]`. Pass 2: min = 2 (index 4).
Swap arr[1] and arr[4]: `[1, 2, 8, 5, 3]`. Pass 3: min = 3 (index 4). Swap arr[2] and arr[4]:
`[1, 2, 3, 5, 8]`. Pass 4: min = 5 (index 3). Swap arr[3] with itself: `[1, 2, 3, 5, 8]`.

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

**Intuition.** Imagine sorting a hand of playing cards. You hold the first card in your left hand
(sorted). You pick up the next card with your right hand and insert it into the correct position in
your left hand by shifting larger cards to the right.

**Why insertion sort is $O(n^2)$ in the worst case.** If the array is in reverse order, each new
element must be shifted all the way to the front. The $i$-th element requires up to $i$ shifts, so
the total is $1 + 2 + \cdots + (n-1) = O(n^2)$.

**Best case $O(n)$.** If the array is already sorted, each element requires zero shifts.

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

**Complexity analysis.** The recursion tree has $\log_2 n$ levels. At each level, a total of $n$
elements are merged.

$$T(n) = 2T(n/2) + O(n) \implies T(n) = O(n \log n)$$

This holds for best, average, and worst case.

### Comparing Sorting Algorithms

| Algorithm      | Best          | Average       | Worst         | Space       | Stable |
| -------------- | ------------- | ------------- | ------------- | ----------- | ------ |
| Selection Sort | $O(n^2)$      | $O(n^2)$      | $O(n^2)$      | $O(1)$      | No     |
| Insertion Sort | $O(n)$        | $O(n^2)$      | $O(n^2)$      | $O(1)$      | Yes    |
| Merge Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$      | Yes    |
| Quick Sort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | $O(\log n)$ | No     |

**When to use each.** Insertion sort is best for small or nearly sorted arrays. Merge sort is
reliable for large datasets. Quick sort is often faster in practice but has an $O(n^2)$ worst case.

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

Works on unsorted and sorted lists. Worst case: $O(n)$ comparisons.

### Binary Search

Works on sorted arrays by repeatedly dividing the search interval in half.

```java
public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
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

Requires the array to be sorted. Worst case: $O(\log n)$ comparisons.

### Proof of Binary Search Correctness (Invariant)

**Loop invariant:** If `target` exists in `arr`, then `arr[low] <= target <= arr[high]` at the start
of each iteration.

**Initialization:** Before the first iteration, `low = 0` and `high = n - 1`, so the invariant
holds.

**Maintenance:** If `arr[mid] < target`, we set `low = mid + 1`. Since the array is sorted and
`arr[mid] < target`, `target` must be in `arr[mid+1..high]`. Similarly for the other case.

**Termination:** The loop terminates when `low > high`, meaning the search space is empty. Since the
invariant guarantees the target would be in `[low, high]` if it existed, the target is not in the
array.

$\blacksquare$

## Big-O Notation (CED Unit 3)

Big-O notation describes the upper bound of an algorithm's time or space complexity.

### Common Time Complexities

| Complexity    | Name         | Example                        |
| ------------- | ------------ | ------------------------------ |
| $O(1)$        | Constant     | Array access by index          |
| $O(\log n)$   | Logarithmic  | Binary search                  |
| $O(n)$        | Linear       | Linear search                  |
| $O(n \log n)$ | Linearithmic | Merge sort                     |
| $O(n^2)$      | Quadratic    | Selection sort, insertion sort |
| $O(2^n)$      | Exponential  | Recursive Fibonacci            |

### Formal Definition

$f(n) = O(g(n))$ if there exist positive constants $c$ and $n_0$ such that $f(n) \le c \cdot g(n)$
for all $n \ge n_0$.

### Analyzing Code

**Rule 1:** Sequential statements: add complexities. $O(a) + O(b) = O(\max(a, b))$.

**Rule 2:** Nested loops: multiply complexities. $O(a) \times O(b) = O(a \cdot b)$.

**Rule 3:** Drop constants and lower-order terms. $O(3n^2 + 5n + 100) = O(n^2)$.

:::info[Example 1]

```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + j);
    }
}
```

Total: $O(n) \times O(n) = O(n^2)$.

:::

:::info[Example 2]

```java
for (int i = 0; i < n; i++) {
    System.out.println(i);
}
for (int j = 0; j < n; j++) {
    System.out.println(j);
}
```

Total: $O(n) + O(n) = O(n)$.

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

**Proof of correctness by induction.** Base case: `factorial(0) = 1 = 0!`. Inductive step: assume
`factorial(k) = k!` for all $k \lt n$. Then `factorial(n) = n * factorial(n-1) = n * (n-1)! = n!`.
$\blacksquare$

### Example: Fibonacci (Inefficient)

```java
public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

Time complexity: $O(2^n)$ because each call spawns two subcalls with redundant computation.

**Efficient alternative:** $O(n)$ iterative approach:

```java
public static int fibIterative(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```

### Example: String Reversal

```java
public static String reverse(String s) {
    if (s.length() <= 1) {
        return s;
    }
    return reverse(s.substring(1)) + s.charAt(0);
}
```

**Trace for `reverse("abcd")`:**

```
reverse("abcd") = reverse("bcd") + 'a'
reverse("bcd")  = reverse("cd") + 'b'
reverse("cd")   = reverse("d") + 'c'
reverse("d")    = "d"
reverse("cd")   = "dc"
reverse("bcd")  = "dcb"
reverse("abcd") = "dcba"
```

## Additional Topics

### Selection Sort Trace in Detail

**Trace of selection sort on [5, 3, 8, 1, 2]:**

| Pass | Array State     | Comparisons | Swaps |
| ---- | --------------- | ----------- | ----- |
| 1    | [1, 3, 8, 5, 2] | 4           | 1     |
| 2    | [1, 2, 8, 5, 3] | 3           | 1     |
| 3    | [1, 2, 3, 5, 8] | 2           | 1     |
| 4    | [1, 2, 3, 5, 8] | 1           | 0     |

Total comparisons: $4 + 3 + 2 + 1 = 10 = n(n-1)/2$ for $n = 5$.

### Insertion Sort Trace in Detail

**Trace of insertion sort on [4, 2, 7, 1, 3]:**

| Step | Array State     | Key | Shifts | Comparisons |
| ---- | --------------- | --- | ------ | ----------- |
| 1    | [4, 2, 7, 1, 3] | 2   | 1      | 1           |
| 2    | [4, 2, 7, 1, 3] | 7   | 0      | 1           |
| 3    | [4, 2, 7, 1, 3] | 1   | 3      | 3           |
| 4    | [1, 2, 4, 7, 3] | 3   | 0      | 1           |

Total comparisons: $1 + 1 + 3 + 1 = 6$.

### Merge Sort Trace in Detail

**Trace of merge sort on [38, 27, 43, 3]:**

Split: [38, 27] and [43, 3].

Sort [38, 27]: split into [38] and [27], merge to [27, 38]. Sort [43, 3]: split into [43] and [3],
merge to [3, 43].

Merge [27, 38] and [3, 43]: [3, 27, 38, 43].

### Quick Sort Worst Case

Quick sort has $O(n^2)$ worst case when the pivot is always the smallest or largest element. This
happens when the array is already sorted (or reverse sorted) and the first or last element is used
as the pivot.

**Mitigation:** Choose the middle element or a random element as the pivot.

### Comparing Iterative and Recursive Binary Search

**Iterative binary search uses $O(1)$ space.** The recursive version uses $O(\log n)$ stack space
due to recursive calls.

```java
public static int binarySearchIterative(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

### Common Algorithm Design Patterns

**Divide and conquer:** Break the problem into smaller subproblems, solve each recursively, combine
results. Examples: merge sort, binary search.

**Greedy:** Make the locally optimal choice at each step. Examples: Dijkstra's shortest path,
Huffman coding, coin change (with standard denominations).

**Dynamic programming:** Solve overlapping subproblems by storing results in a table. Examples:
Fibonacci (with memoisation), knapsack problem, longest common subsequence.

**Worked Example.** Fibonacci with memoisation reduces $O(2^n)$ to $O(n)$.

```java
public static long fibMemo(int n) {
    long[] memo = new long[n + 1];
    memo[0] = 0;
    memo[1] = 1;
    for (int i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
}
```

## Merge Sort Trace in Detail

**Trace of merge sort on [38, 27, 43, 3]:**

Split: [38, 27] and [43, 3].

Sort [38, 27]: split into [38] and [27], merge to [27, 38]. Sort [43, 3]: split into [43] and [3],
merge to [3, 43].

Merge [27, 38] and [3, 43]: [3, 27, 38, 43].

## Quick Sort

A divide-and-conquer algorithm that picks a pivot, partitions elements around it, and recursively
sorts each partition.

**Java implementation:**

```java
public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
```

**Quick Sort worst case.** $O(n^2)$ when the pivot is always the smallest or largest element. This
happens when the array is already sorted (or reverse sorted) and the first or last element is used
as the pivot.

**Mitigation:** Choose the middle element or a random element as the pivot.

**Quick Sort trace on [5, 3, 8, 1, 2]:**

Pivot = 2 (last element). Partition: [1, 2, 8, 5, 3]. Pivot index = 1.

Sort [1]: single element, done.

Sort [8, 5, 3]: Pivot = 3. Partition: [3, 5, 8]. Pivot index = 2.

Sort [5, 8]: Pivot = 8. Partition: [5, 8]. Pivot index = 1.

Final: [1, 2, 3, 5, 8].

## Comparing Iterative and Recursive Binary Search

**Iterative binary search uses $O(1)$ space.** The recursive version uses $O(\log n)$ stack space
due to recursive calls.

```java
public static int binarySearchIterative(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

## Common Algorithm Design Patterns

**Divide and conquer:** Break the problem into smaller subproblems, solve each recursively, combine
results. Examples: merge sort, binary search.

**Greedy:** Make the locally optimal choice at each step. Examples: Dijkstra's shortest path,
Huffman coding, coin change (with standard denominations).

**Dynamic programming:** Solve overlapping subproblems by storing results in a table. Examples:
Fibonacci (with memoisation), knapsack problem, longest common subsequence.

**Worked Example.** Fibonacci with memoisation reduces $O(2^n)$ to $O(n)$.

```java
public static long fibMemo(int n) {
    long[] memo = new long[n + 1];
    memo[0] = 0;
    memo[1] = 1;
    for (int i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
}
```

## String Algorithms

**Palindrome check (Java):**

```java
public static boolean isPalindrome(String s) {
    int left = 0;
    int right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}
```

**Time complexity:** $O(n)$ -- compares each pair of characters once.

**Proof of correctness.** The loop compares characters at symmetric positions: position 0 with
position n-1, position 1 with position n-2, etc. If any pair differs, the string is not a palindrome
and the method returns false. If all pairs match, the string reads the same forwards and backwards,
so it is a palindrome. $lacksquare$

**String reversal (iterative):**

```java
public static String reverse(String s) {
    StringBuilder sb = new StringBuilder();
    for (int i = s.length() - 1; i >= 0; i--) {
        sb.append(s.charAt(i));
    }
    return sb.toString();
}
```

**Time complexity:** $O(n)$ -- appends each character once.

## Array Algorithms

**Finding the mode (most frequent element):**

```java
public static int findMode(int[] arr) {
    int maxCount = 0;
    int mode = arr[0];
    for (int i = 0; i < arr.length; i++) {
        int count = 0;
        for (int j = 0; j < arr.length; j++) {
            if (arr[j] == arr[i]) count++;
        }
        if (count > maxCount) {
            maxCount = count;
            mode = arr[i];
        }
    }
    return mode;
}
```

**Time complexity:** $O(n^2)$ -- nested loops.

**Two-pointer technique:**

```java
public static boolean hasPairWithSum(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        else if (sum < target) left++;
        else right--;
    }
    return false;
}
```

**Time complexity:** $O(n)$ -- requires a sorted array.

## Practice Questions

1. Trace selection sort on `[5, 3, 8, 1, 2]`. Show the array after each pass.

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

8. Explain why merge sort is preferred over selection sort for sorting large datasets.

9. Write a recursive Java method `gcd(int a, int b)` that computes the greatest common divisor using
   Euclid's algorithm.

10. Explain the loop invariant for binary search and use it to prove correctness.

11. Write a Java method `isSorted(int[] arr)` that returns true if the array is sorted in ascending
    order. What is the time complexity?

12. Prove that insertion sort's best-case time complexity is $O(n)$ when the input is already
    sorted.

13. Write a recursive method `power(int base, int exp)` that computes `base^exp` in $O(\log n)$ time
    using the identity $b^n = (b^{n/2})^2$.

14. Explain what makes an algorithm "stable" in the context of sorting. Give an example where
    stability matters.

15. Write pseudocode for a procedure that merges two sorted lists into one sorted list. What is the
    time complexity?

16. Analyze the space complexity of merge sort. Why does it use $O(n)$ extra space?

17. Write a Java method to find the kth smallest element in an unsorted array. What is the time
    complexity of a simple approach vs. an optimal approach?

18. Explain the concept of divide and conquer using merge sort as an example. What are the three
    steps, and what is the recurrence relation?

19. Trace quick sort on the array [10, 80, 30, 90, 40, 50, 70]. Use the last element as the pivot.

20. Write a Java method that checks whether a sorted array contains two elements that sum to a
    given target. Your solution should be $O(n)$.

## Common Pitfalls

1. **Forgetting the base case in recursion.** Causes infinite recursion and stack overflow.
2. **Confusing binary search with linear search.** Binary search requires a sorted array.
3. **Using selection sort or insertion sort for large datasets.** These $O(n^2)$ algorithms are too
   slow; use merge sort ($O(n \log n)$) instead.
4. **Off-by-one errors in binary search.** The condition is `low <= high` (inclusive).
5. **Confusing Big-O with exact running time.** Big-O describes growth rate, not actual time.
6. **Forgetting that Big-O is an upper bound.** An $O(n)$ algorithm is also $O(n^2)$ and $O(n^3)$,
   but $O(n)$ is the tightest (best) bound.
7. **Not recognizing that AP CSP pseudocode uses 1-based indexing** while Java uses 0-based
   indexing.
8. **Integer overflow in `(low + high) / 2`.** Use `low + (high - low) / 2` instead.

9. Trace the execution of selection sort on the array `[5, 3, 8, 1, 2]`. Show the array after each
   pass.

10. Write a recursive Java method `sumDigits(int n)` that returns the sum of the digits of `n`.

11. Explain why the recursive Fibonacci algorithm has $O(2^n)$ time complexity.

12. Write a Java method that performs binary search on a sorted array of strings.

13. Analyze the time complexity of the following code:

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

8. Explain why merge sort is preferred over selection sort for sorting large datasets.

9. Write a recursive Java method `gcd(int a, int b)` that computes the greatest common divisor using
   Euclid's algorithm.

10. Explain the loop invariant for binary search and use it to prove correctness.

11. Write a Java method `isSorted(int[] arr)` that returns true if the array is sorted in ascending
    order. What is the time complexity?

12. Prove that insertion sort's best-case time complexity is $O(n)$ when the input is already
    sorted.

13. Write a recursive method `power(int base, int exp)` that computes `base^exp` in $O(\log n)$ time
    using the identity $b^n = (b^{n/2})^2$.

14. Explain what makes an algorithm "stable" in the context of sorting. Give an example where
    stability matters.

15. Write pseudocode for a procedure that merges two sorted lists into one sorted list. What is the
    time complexity?

16. Analyze the space complexity of merge sort. Why does it use $O(n)$ extra space?

17. Write a Java method to find the kth smallest element in an unsorted array. What is the time
    complexity of a simple approach vs. an optimal approach?

18. Explain the concept of divide and conquer using merge sort as an example. What are the three
    steps, and what is the recurrence relation?

## Practice Problems

<details>
<summary>Question 1: Time complexity of nested loops</summary>

Analyze the time complexity of the following code:

```java
for (int i = 1; i <= n; i = i * 2) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + j);
    }
}
```

</details>

<details>
<summary>Answer</summary>

The outer loop runs $\log_2(n)$ times because `i` doubles each iteration. The inner loop runs $n$ times for each outer iteration. Total: $O(n \log n)$.

</details>

<details>
<summary>Question 2: Binary search trace</summary>

Trace binary search on `[2, 5, 8, 12, 16, 23, 38]` searching for `7`. Show `low`, `high`, and `mid` at each step.

</details>

<details>
<summary>Answer</summary>

Step 1: low=0, high=6, mid=3. arr[3]=12 &gt; 7, high=2.
Step 2: low=0, high=2, mid=1. arr[1]=5 &lt; 7, low=2.
Step 3: low=2, high=2, mid=2. arr[2]=8 &gt; 7, high=1.
Step 4: low=2 &gt; high=1. Not found, return -1.

</details>

<details>
<summary>Question 3: Recursive algorithm</summary>

What does `mystery(27)` return and what is the time complexity?

```java
int mystery(int n) {
    if (n <= 1) return 1;
    return mystery(n / 3) + n;
}
```

</details>

<details>
<summary>Answer</summary>

mystery(27) = mystery(9) + 27 = (mystery(3) + 9) + 27 = ((mystery(1) + 3) + 9) + 27 = 40.

Time complexity: $O(\log n)$ since n is divided by 3 each call.

</details>

<details>
<summary>Question 4: Selection sort trace</summary>

Trace selection sort on `[64, 25, 12, 22, 11]`. Show the array after each pass and count swaps.

</details>

<details>
<summary>Answer</summary>

Pass 1: Min=11 (idx 4), swap with 0: `[11, 25, 12, 22, 64]`. 1 swap.
Pass 2: Min=12 (idx 2), swap with 1: `[11, 12, 25, 22, 64]`. 1 swap.
Pass 3: Min=22 (idx 3), swap with 2: `[11, 12, 22, 25, 64]`. 1 swap.
Pass 4: Already sorted. 0 swaps. Total: 3 swaps.

</details>

<details>
<summary>Question 5: Merge sort comparisons</summary>

What is the maximum number of comparisons merge sort makes for 8 elements?

</details>

<details>
<summary>Answer</summary>

Using $C(n) = 2C(n/2) + n - 1$: $C(1)=0$, $C(2)=1$, $C(4)=5$, $C(8)=17$. Maximum 17 comparisons.

</details>
