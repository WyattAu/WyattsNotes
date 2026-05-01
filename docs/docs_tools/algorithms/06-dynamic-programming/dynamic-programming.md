---
id: dynamic-programming
title: Dynamic Programming
description:
  Dynamic Programming — DP Fundamentals; Top-Down (Memoisation) vs Bottom-Up
  (Tabulation); 1D DP; Climbing Stairs with worked examples and exam-style
  questions.
slug: dynamic-programming
---

## DP Fundamentals

Dynamic programming (DP) solves problems by breaking them into overlapping subproblems, solving each
subproblem once, and storing the results. Two properties must hold for DP to apply:

1. **Optimal substructure** — the optimal solution to the problem contains optimal solutions to its
   subproblems
2. **Overlapping subproblems** — the same subproblems are solved multiple times in a naive recursive
   solution

When both hold, DP reduces an exponential-time recursive solution to polynomial time.

### Top-Down (Memoisation) vs Bottom-Up (Tabulation)

| Aspect        | Top-Down (Memoisation)           | Bottom-Up (Tabulation)                      |
| ------------- | -------------------------------- | ------------------------------------------- |
| Approach      | Recursive with caching           | Iterative, fill table from base cases       |
| Order         | Natural recursion order          | Must determine correct fill order           |
| Stack space   | $O(n)$ recursion depth           | $O(1)$ (no recursion)                       |
| Cache control | Only computes needed subproblems | Computes all subproblems                    |
| Debugging     | Easier to reason about           | Harder to see the recurrence                |
| Performance   | Slight overhead from recursion   | Slightly faster (no function call overhead) |

## 1D DP

### Climbing Stairs

How many distinct ways to climb $n$ stairs, taking 1 or 2 steps at a time?

$$dp[i] = dp[i-1] + dp[i-2]$$

```python
def climb_stairs(n):
    """
    Number of ways to climb n stairs with 1 or 2 steps.
    Time: O(n), Space: O(1) with rolling variables
    """
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    return prev1

def climb_stairs_memo(n, memo=None):
    """
    Top-down with memoisation. O(n) time, O(n) space (recursion + memo).
    """
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 2:
        return n
    memo[n] = climb_stairs_memo(n - 1, memo) + climb_stairs_memo(n - 2, memo)
    return memo[n]
```

### House Robber

Given an array of non-negative integers representing money at each house, maximise the amount you
can rob without robbing two adjacent houses.

$$dp[i] = \max(dp[i-1], dp[i-2] + nums[i])$$

```python
def house_robber(nums):
    """
    Maximum money from non-adjacent houses.
    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    if len(nums) <= 2:
        return max(nums)

    prev2 = nums[0]       # dp[i-2]
    prev1 = max(nums[0], nums[1])  # dp[i-1]

    for i in range(2, len(nums)):
        current = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, current

    return prev1
```

### Coin Change

Given coins of different denominations and a target amount, find the minimum number of coins needed
to make that amount. Return -1 if it is not possible.

$$dp[i] = \min(dp[i], dp[i - coin] + 1) \quad \mathrm{for each coin}$$

```python
def coin_change(coins, amount):
    """
    Minimum coins to make amount.
    Time: O(amount * len(coins)), Space: O(amount)
    """
    # dp[i] = minimum coins to make amount i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

def coin_change_combinations(coins, amount):
    """
    Number of combinations to make amount (order doesn't matter).
    Time: O(amount * len(coins)), Space: O(amount)
    """
    dp = [0] * (amount + 1)
    dp[0] = 1

    # Process coins one at a time to avoid counting permutations
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]

    return dp[amount]
```

:::warning

The order of loops matters for counting combinations vs permutations. If you iterate amount first
and coins second, you count permutations (different orderings of the same coins are counted
separately). If you iterate coins first and amount second, you count combinations (each combination
is counted once). This is a common source of incorrect DP solutions.

:::

## 2D DP

### Longest Common Subsequence (LCS)

Find the length of the longest subsequence common to two strings.

$$
dp[i][j] = \begin{cases}
dp[i-1][j-1] + 1 & \mathrm{if } s_1[i-1] = s_2[j-1] \\
\max(dp[i-1][j], dp[i][j-1]) & \mathrm{otherwise}
\end{cases}
$$

```python
def longest_common_subsequence(s1, s2):
    """
    Length of LCS of two strings.
    Time: O(n * m), Space: O(n * m) or O(min(n, m)) with rolling array
    """
    n, m = len(s1), len(s2)
    dp = [[0] * (m + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[n][m]

def lcs_with_rolling_array(s1, s2):
    """
    LCS with O(min(n,m)) space using rolling array.
    Time: O(n * m), Space: O(min(n, m))
    """
    if len(s1) < len(s2):
        s1, s2 = s2, s1  # ensure s1 is the longer string

    prev = [0] * (len(s2) + 1)

    for i in range(1, len(s1) + 1):
        current = [0] * (len(s2) + 1)
        for j in range(1, len(s2) + 1):
            if s1[i - 1] == s2[j - 1]:
                current[j] = prev[j - 1] + 1
            else:
                current[j] = max(prev[j], current[j - 1])
        prev = current

    return prev[len(s2)]
```

### Edit Distance (Levenshtein Distance)

Minimum number of operations (insert, delete, replace) to transform one string into another.

$$
dp[i][j] = \begin{cases}
j & \mathrm{if } i = 0 \\
i & \mathrm{if } j = 0 \\
dp[i-1][j-1] & \mathrm{if } s_1[i-1] = s_2[j-1] \\
1 + \min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) & \mathrm{otherwise}
\end{cases}
$$

```python
def edit_distance(s1, s2):
    """
    Levenshtein distance between two strings.
    Time: O(n * m), Space: O(n * m) or O(min(n, m)) with rolling array
    """
    n, m = len(s1), len(s2)
    dp = [[0] * (m + 1) for _ in range(n + 1)]

    for i in range(n + 1):
        dp[i][0] = i
    for j in range(m + 1):
        dp[0][j] = j

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # delete
                    dp[i][j - 1],      # insert
                    dp[i - 1][j - 1]   # replace
                )

    return dp[n][m]
```

| Operation                    | Cost               | Intuition                |
| ---------------------------- | ------------------ | ------------------------ |
| Delete `s1[i]`               | $dp[i-1][j] + 1$   | Remove character from s1 |
| Insert `s2[j]`               | $dp[i][j-1] + 1$   | Add character to s1      |
| Replace `s1[i]` with `s2[j]` | $dp[i-1][j-1] + 1$ | Change one character     |
| Match `s1[i] == s2[j]`       | $dp[i-1][j-1]$     | No operation needed      |

### Knapsack Problem

Given items with weights and values, and a knapsack with capacity $W$, maximise the total value
without exceeding the capacity.

$$dp[i][w] = \max(dp[i-1][w], dp[i-1][w - weight_i] + value_i) \quad \mathrm{if } weight_i \le w$$

```python
def knapsack_01(weights, values, capacity):
    """
    0/1 Knapsack — each item can be taken at most once.
    Time: O(n * W), Space: O(n * W) or O(W) with rolling array
    """
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            # Don't take item i
            dp[i][w] = dp[i - 1][w]
            # Take item i (if it fits)
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])

    return dp[n][capacity]

def knapsack_01_space_optimised(weights, values, capacity):
    """
    0/1 Knapsack with O(W) space.
    Iterate w in REVERSE to avoid using the same item twice.
    Time: O(n * W), Space: O(W)
    """
    dp = [0] * (capacity + 1)
    for i in range(len(weights)):
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[capacity]

def unbounded_knapsack(weights, values, capacity):
    """
    Unbounded knapsack — each item can be taken unlimited times.
    Iterate w FORWARD to allow reusing items.
    Time: O(n * W), Space: O(W)
    """
    dp = [0] * (capacity + 1)
    for w in range(1, capacity + 1):
        for i in range(len(weights)):
            if weights[i] <= w:
                dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[capacity]
```

:::info

The direction of iteration matters for space-optimised knapsack:

- **0/1 knapsack:** iterate $w$ from $W$ down to $weight_i$ (reverse) — prevents using the same item
  twice in one iteration
- **Unbounded knapsack:** iterate $w$ from $weight_i$ up to $W$ (forward) — allows reusing the item
  within the same iteration

Getting this direction wrong is one of the most common DP bugs.

:::

## String DP

### Longest Palindromic Substring

```python
def longest_palindromic_substring(s):
    """
    Longest palindromic substring using expanding around center.
    Time: O(n^2), Space: O(1)
    """
    if not s:
        return ""

    start = 0
    max_len = 1

    for i in range(len(s)):
        # Odd length palindrome
        left, right = i, i
        while left >= 0 and right < len(s) and s[left] == s[right]:
            if right - left + 1 > max_len:
                start = left
                max_len = right - left + 1
            left -= 1
            right += 1

        # Even length palindrome
        left, right = i, i + 1
        while left >= 0 and right < len(s) and s[left] == s[right]:
            if right - left + 1 > max_len:
                start = left
                max_len = right - left + 1
            left -= 1
            right += 1

    return s[start:start + max_len]

def longest_palindromic_substring_dp(s):
    """
    Longest palindromic substring using DP.
    Time: O(n^2), Space: O(n^2)
    """
    n = len(s)
    dp = [[False] * n for _ in range(n)]
    start = 0
    max_len = 1

    # Single characters are palindromes
    for i in range(n):
        dp[i][i] = True

    # Check for palindromes of length 2
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            start = i
            max_len = 2

    # Check for palindromes of length 3+
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                start = i
                max_len = length

    return s[start:start + max_len]
```

### Longest Palindromic Subsequence

```python
def longest_palindromic_subsequence(s):
    """
    Length of longest palindromic subsequence.
    Time: O(n^2), Space: O(n^2) or O(n) with rolling array
    """
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            if s[i] == s[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    return dp[0][n - 1]
```

### Word Break

Given a string and a dictionary of words, determine if the string can be segmented into
space-separated dictionary words.

```python
def word_break(s, word_dict):
    """
    Check if s can be segmented into dictionary words.
    Time: O(n^2) with hash set lookup, Space: O(n)
    """
    word_set = set(word_dict)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True  # empty string is always valid

    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]
```

## Interval DP

Interval DP problems involve optimising over intervals (subarrays, substrings). The state is
typically $dp[i][j]$ representing the optimal value for the subproblem from index $i$ to $j$.

The fill order is critical: shorter intervals must be computed before longer ones (because longer
intervals depend on shorter ones).

### Matrix Chain Multiplication

Given a chain of matrices with dimensions $d_0 \times d_1$, $d_1 \times d_2$, ...,
$d_{n-1} \times
d_n$, find the minimum number of scalar multiplications to compute the product.

$$dp[i][j] = \min_{i \le k \lt j} (dp[i][k] + dp[k+1][j] + d_i \cdot d_{k+1} \cdot d_{j+1})$$

```python
def matrix_chain_order(dims):
    """
    Minimum scalar multiplications for matrix chain.
    Time: O(n^3), Space: O(n^2)
    """
    n = len(dims) - 1  # number of matrices
    dp = [[0] * n for _ in range(n)]

    # length is the chain length (number of matrices in the subchain)
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1]
                dp[i][j] = min(dp[i][j], cost)

    return dp[0][n - 1]
```

### Burst Balloons

Given `nums` where `nums[i]` is the value of the $i$-th balloon, burst all balloons to maximise
coins. When you burst balloon $i$, you get `nums[left] * nums[i] * nums[right]` coins, where `left`
and `right` are the nearest unburst balloons.

```python
def burst_balloons(nums):
    """
    Maximum coins from bursting balloons.
    Time: O(n^3), Space: O(n^2)
    """
    n = len(nums)
    # Add virtual balloons with value 1 at boundaries
    arr = [1] + nums + [1]
    m = len(arr)
    dp = [[0] * m for _ in range(m)]

    for length in range(1, n + 1):
        for left in range(1, m - length):
            right = left + length - 1
            for k in range(left, right + 1):
                coins = arr[left - 1] * arr[k] * arr[right + 1]
                coins += dp[left][k - 1] + dp[k + 1][right]
                dp[left][right] = max(dp[left][right], coins)

    return dp[1][n]
```

## Bitmask DP

Bitmask DP uses a bitmask to represent a subset of elements as a state. This is applicable when the
number of elements is small (typically $n \le 20$), giving $2^n$ states.

### Travelling Salesman Problem (TSP)

Find the minimum cost to visit all cities exactly once and return to the start.

$$dp[mask][i] = \min_{j \in mask, j \ne i} (dp[mask \setminus \\{i\\}][j] + dist[j][i])$$

```python
def tsp(dist):
    """
    Travelling Salesman Problem using bitmask DP.
    Time: O(2^n * n^2), Space: O(2^n * n)
    Only practical for n <= 20.
    """
    n = len(dist)
    INF = float('inf')
    full_mask = (1 << n) - 1

    # dp[mask][i] = minimum cost to visit cities in mask, ending at city i
    dp = [[INF] * n for _ in range(1 << n)]
    dp[1][0] = 0  # start at city 0, mask = 0b...001

    for mask in range(1 << n):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if mask & (1 << v):
                    continue
                new_mask = mask | (1 << v)
                dp[new_mask][v] = min(
                    dp[new_mask][v],
                    dp[mask][u] + dist[u][v]
                )

    # Return to city 0 from any ending city
    result = INF
    for i in range(1, n):
        result = min(result, dp[full_mask][i] + dist[i][0])

    return result
```

## Common DP Patterns

### Pattern 1: Linear DP

State: $dp[i]$ — optimal value for the prefix of length $i$.

Examples: climbing stairs, house robber, coin change, word break, longest increasing subsequence.

```python
def longest_increasing_subsequence(nums):
    """
    LIS — longest strictly increasing subsequence.
    Time: O(n log n) using patience sorting
    Space: O(n)
    """
    import bisect
    tails = []  # tails[i] = smallest tail of increasing subsequence of length i+1

    for x in nums:
        pos = bisect.bisect_left(tails, x)
        if pos == len(tails):
            tails.append(x)
        else:
            tails[pos] = x

    return len(tails)
```

### Pattern 2: Grid DP

State: $dp[i][j]$ — optimal value for the subproblem ending at position $(i, j)$.

Examples: unique paths, minimum path sum, edit distance, LCS.

```python
def unique_paths(m, n):
    """
    Number of unique paths from top-left to bottom-right in an m x n grid.
    Can only move right or down.
    Time: O(m * n), Space: O(n) with rolling array
    """
    dp = [1] * n
    for i in range(1, m):
        for j in range(1, n):
            dp[j] += dp[j - 1]
    return dp[n - 1]
```

### Pattern 3: Knapsack DP

State: $dp[w]$ — optimal value using capacity $w$.

Examples: 0/1 knapsack, unbounded knapsack, subset sum, partition equal subset sum.

### Pattern 4: Tree DP

State: $dp[node]$ — optimal value for the subtree rooted at `node`. Combine children's results.

```python
def max_path_sum_binary_tree(root):
    """
    Maximum path sum in a binary tree (path can start/end at any node).
    Time: O(n), Space: O(h) recursion stack
    """
    max_sum = float('-inf')

    def dfs(node):
        nonlocal max_sum
        if node is None:
            return 0
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        max_sum = max(max_sum, left + node.val + right)
        return node.val + max(left, right)

    dfs(root)
    return max_sum
```

## Greedy vs Dynamic Programming

Greedy algorithms make locally optimal choices at each step, hoping they lead to a globally optimal
solution. DP considers all possibilities and chooses the globally optimal one.

### When Greedy Works

Greedy works when the problem has the **greedy-choice property** — a locally optimal choice leads to
a globally optimal solution. This typically holds for matroid structures.

| Problem                    | Greedy?            | DP?                | Greedy Complexity |
| -------------------------- | ------------------ | ------------------ | ----------------- |
| Activity selection         | Yes                | Yes                | $O(n \log n)$     |
| Fractional knapsack        | Yes                | Yes                | $O(n \log n)$     |
| Huffman coding             | Yes                | Yes                | $O(n \log n)$     |
| Dijkstra's shortest path   | Yes (non-negative) | Yes (Bellman-Ford) | $O((V+E) \log V)$ |
| 0/1 knapsack               | **No**             | Yes                | —                 |
| Longest common subsequence | **No**             | Yes                | —                 |
| Edit distance              | **No**             | Yes                | —                 |

### Activity Selection (Greedy Works)

```python
def activity_selection(activities):
    """
    Maximum number of non-overlapping activities.
    Greedy: sort by end time, always pick the earliest-ending activity.
    Time: O(n log n)
    """
    activities.sort(key=lambda x: x[1])  # sort by end time
    count = 0
    last_end = float('-inf')

    for start, end in activities:
        if start >= last_end:
            count += 1
            last_end = end

    return count
```

## Time and Space Optimisation

### Rolling Array

Many 2D DP problems only depend on the previous row (or previous few rows). Instead of storing the
entire $n \times m$ table, store only $O(m)$ or $O(n)$ values.

```python
def edit_distance_optimised(s1, s2):
    """
    Edit distance with O(min(n,m)) space.
    """
    if len(s1) < len(s2):
        s1, s2 = s2, s1
    n, m = len(s1), len(s2)

    prev = list(range(m + 1))
    for i in range(1, n + 1):
        current = [i] + [0] * m
        for j in range(1, m + 1):
            if s1[i - 1] == s2[j - 1]:
                current[j] = prev[j - 1]
            else:
                current[j] = 1 + min(prev[j], current[j - 1], prev[j - 1])
        prev = current

    return prev[m]
```

### State Space Reduction

Sometimes the DP state can be compressed or reduced by identifying that not all state variables are
independent.

**Example:** In the knapsack problem, the state is $(item, weight)$. But with space optimisation, we
only need $weight$ because items are processed one at a time.

### Reconstructing the Solution

DP gives the optimal value, but often you need the actual solution (which items to take, what the
path is, etc.). Reconstruction requires either storing backpointers or re-running the DP logic.

```python
def knapsack_reconstruct(weights, values, capacity):
    """
    0/1 Knapsack with solution reconstruction.
    Returns (max_value, list_of_item_indices)
    """
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i - 1][w]
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])

    # Reconstruct
    items = []
    w = capacity
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            items.append(i - 1)
            w -= weights[i - 1]

    return dp[n][capacity], items
```

## Common Pitfalls

### 1. Not Identifying the DP State

The hardest part of DP is defining the state. A good state should be:

- **Sufficient** — the state captures all information needed to make future decisions
- **Minimal** — the state does not contain redundant information

Common mistake: trying to use too many state variables. Start with a recursive solution, identify
what parameters change in recursive calls, and those are your state variables.

### 2. Wrong Base Case

DP base cases are analogous to loop initialisation. Getting them wrong produces wrong answers for
small inputs that cascade into wrong answers for large inputs. Always test with the smallest
non-trivial input (e.g., $n = 1$, empty string, single element).

### 3. Wrong Fill Order in Bottom-Up DP

Bottom-up DP must fill the table in an order such that when computing $dp[state]$, all states that
$dp[state]$ depends on have already been computed. For interval DP, shorter intervals before longer.
For 0/1 knapsack with space optimisation, iterate $w$ in reverse. Getting the fill order wrong
produces undefined behaviour (using uninitialised values).

### 4. Integer Overflow in DP

DP values can grow exponentially (e.g., Fibonacci, counting paths in a grid). For $n = 100$,
$F_{100} \approx 3.5 \times 10^{20}$, which exceeds 64-bit range. Use arbitrary-precision integers
(Python's `int` is always arbitrary precision) or modular arithmetic when appropriate.

### 5. Confusing Subsequence with Subarray

A subsequence does not need to be contiguous (LCS, LIS). A subarray/substring must be contiguous
(maximum subarray, longest palindromic substring). These require different DP formulations:

- Subsequence: $dp[i][j]$ considers all elements between $i$ and $j$
- Subarray: $dp[i]$ is the optimal value for subarrays ending at $i$

### 6. Applying DP When Greedy Suffices

Not every optimisation problem needs DP. Activity selection, fractional knapsack, and minimum
spanning trees all have greedy solutions. Using DP where greedy works is correct but slower —
$O(n^2)$ or $O(n \cdot W)$ instead of $O(n \log n)$.

### 7. Forgetting That Memoisation Does Not Change Recursion Depth

Top-down memoisation eliminates redundant computation but does not reduce recursion depth. If the
recursive solution has $O(n)$ depth, the memoised version still has $O(n)$ recursion depth and can
still stack overflow for large $n$. Use bottom-up DP for problems with deep recursion.

### 8. Using the Wrong Subproblem Decomposition

Many DP problems have multiple valid decompositions, but some lead to efficient solutions and others
do not. For the longest increasing subsequence, the $O(n^2)$ DP ($dp[i]$ = length of LIS ending at
$i$) works but the $O(n \log n)$ solution using patience sorting requires a different approach
entirely. Always consider whether a more efficient state representation exists.

## Advanced DP Techniques

### Digit DP

Digit DP solves counting problems on ranges by processing numbers digit by digit. It is applicable
when the problem involves counting numbers in a range that satisfy a property based on their digits.

```python
def count_numbers_without_digit(n, forbidden):
    """
    Count numbers from 1 to n that do not contain a forbidden digit.
    Time: O(log10(n) * 2 * 10), Space: O(log10(n) * 2)
    """
    digits = list(map(int, str(n)))
    memo = {}

    def dp(pos, tight, started):
        if pos == len(digits):
            return 1 if started else 0
        key = (pos, tight, started)
        if key in memo:
            return memo[key]

        limit = digits[pos] if tight else 9
        count = 0
        for d in range(0, limit + 1):
            if d == forbidden:
                continue
            new_tight = tight and (d == limit)
            new_started = started or (d != 0)
            count += dp(pos + 1, new_tight, new_started)

        memo[key] = count
        return count

    return dp(0, True, False)
```

The state tracks:

- `pos`: current digit position
- `tight`: whether the prefix is equal to the prefix of `n` (restricts upper bound)
- `started`: whether we have placed a non-zero digit yet (handles leading zeros)

### DP on Trees

Tree DP involves computing a value for each subtree and combining results from children. The key
insight is post-order traversal: compute children first, then the parent.

```python
def tree_diameter(root):
    """
    Diameter of a binary tree (longest path between any two nodes).
    Time: O(n), Space: O(h) recursion stack
    """
    max_diameter = 0

    def height(node):
        nonlocal max_diameter
        if node is None:
            return 0
        left_height = height(node.left)
        right_height = height(node.right)
        max_diameter = max(max_diameter, left_height + right_height)
        return 1 + max(left_height, right_height)

    height(root)
    return max_diameter

def house_robber_tree(root):
    """
    House robber on a binary tree: cannot rob parent and child simultaneously.
    Time: O(n), Space: O(h)
    """
    def dfs(node):
        if node is None:
            return (0, 0)  # (rob, skip)
        left_rob, left_skip = dfs(node.left)
        right_rob, right_skip = dfs(node.right)
        rob = node.val + left_skip + right_skip
        skip = max(left_rob, left_skip) + max(right_rob, right_skip)
        return (rob, skip)

    return max(dfs(root))
```

### DP with Bitmask (Revisited)

For problems where the state involves a subset of elements, bitmask DP provides a compact
representation. The state space is $O(2^n)$, limiting applicability to $n \le 20$.

**Assignment problem:** Assign $n$ workers to $n$ jobs with minimum total cost.

```python
def assignment_problem(cost):
    """
    Minimum cost assignment using bitmask DP.
    Time: O(n^2 * 2^n), Space: O(n * 2^n)
    """
    n = len(cost)
    full_mask = (1 << n) - 1
    dp = [[float('inf')] * (n + 1) for _ in range(1 << n)]
    dp[0][0] = 0  # no workers assigned, cost 0

    for mask in range(1 << n):
        worker_count = bin(mask).count('1')
        for job in range(n):
            if mask & (1 << job):
                continue
            prev_mask = mask | (1 << job)
            dp[prev_mask][worker_count + 1] = min(
                dp[prev_mask][worker_count + 1],
                dp[mask][worker_count] + cost[worker_count][job]
            )

    return dp[full_mask][n]
```

### Coordinate Compression

When DP state values are sparse but large (e.g., coordinates up to $10^9$ but only $10^5$ distinct
values), compress them to a contiguous range before applying DP.

```python
def coordinate_compress(values):
    """Map sparse values to 0..n-1."""
    sorted_unique = sorted(set(values))
    return {v: i for i, v in enumerate(sorted_unique)}
```

This technique is essential for problems like "count points in rectangles" where the coordinate
range is large but the number of points is manageable.

## When to Recognise DP

DP is applicable when a problem has these characteristics:

1. **Optimal substructure:** The optimal solution can be constructed from optimal solutions to
   subproblems
2. **Overlapping subproblems:** The recursive solution solves the same subproblem multiple times
3. **Finite state space:** The number of distinct subproblems is manageable (polynomial)

**Red flags that suggest DP:**

- "Find the maximum/minimum/longest/shortest..."
- "Count the number of ways to..."
- "Is it possible to..."
- The problem involves making a sequence of choices
- The input size is moderate (up to ~200 for 2D DP, ~20 for bitmask DP)

**Red flags that suggest NOT DP:**

- The input size is very large (DP state space would be too big)
- The problem requires an exact sequence, not just a value (reconstruction may be needed)
- Greedy works (the greedy choice property holds)
- The problem is on a tree/graph with no obvious DP state (may need tree/graph-specific techniques)
