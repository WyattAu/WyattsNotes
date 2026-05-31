---
title: Algorithm Design
description:
  'University-level notes on Algorithm Design: divide and conquer, greedy algorithms,
  dynamic programming, backtracking, and branch and bound.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
slug: algorithm-design
---

## 1. Divide and Conquer

### 1.1 Strategy

1. **Divide** the problem into smaller subproblems.
2. **Conquer** each subproblem recursively.
3. **Combine** solutions to form the final answer.

### 1.2 Merge Sort

```
MERGE_SORT(A, l, r):
    if l < r:
        m = floor((l + r) / 2)
        MERGE_SORT(A, l, m)
        MERGE_SORT(A, m+1, r)
        MERGE(A, l, m, r)

MERGE(A, l, m, r):
    n1 = m - l + 1; n2 = r - m
    L = A[l..m]; R = A[m+1..r]
    i = j = 0; k = l
    while i < n1 and j < n2:
        if L[i] <= R[j]: A[k++] = L[i++]
        else: A[k++] = R[j++]
    while i < n1: A[k++] = L[i++]
    while j < n2: A[k++] = R[j++]
```

**Recurrence:** $T(n) = 2T(n/2) + O(n)$. By Master theorem, $T(n) = O(n \log n)$.

**Stable sort** (preserves relative order of equal elements). Requires $O(n)$ extra space.

### 1.3 Quicksort

```
QUICKSORT(A, l, r):
    if l < r:
        p = PARTITION(A, l, r)
        QUICKSORT(A, l, p-1)
        QUICKSORT(A, p+1, r)

PARTITION(A, l, r):
    pivot = A[r]
    i = l - 1
    for j = l to r-1:
        if A[j] <= pivot:
            i += 1
            swap A[i], A[j]
    swap A[i+1], A[r]
    return i + 1
```

**Best/Average case:** $O(n \log n)$. **Worst case:** $O(n^2)$ (already sorted, bad pivot).

**Randomized pivot:** Pick pivot randomly to get expected $O(n \log n)$.

**Not stable.** In-place (no extra memory beyond recursion stack).

### 1.4 Strassen's Matrix Multiplication

Multiply two $n \times n$ matrices faster than the naive $O(n^3)$.

**Idea:** Divide each matrix into four $n/2 \times n/2$ blocks. Compute 7 products (instead of 8) and combine.

$$
\begin{aligned}
M_1 &= (A_{11} + A_{22})(B_{11} + B_{22}) \\
M_2 &= (A_{21} + A_{22})B_{11} \\
M_3 &= A_{11}(B_{12} - B_{22}) \\
M_4 &= A_{22}(B_{21} - B_{11}) \\
M_5 &= (A_{11} + A_{12})B_{22} \\
M_6 &= (A_{21} - A_{11})(B_{11} + B_{12}) \\
M_7 &= (A_{12} - A_{22})(B_{21} + B_{22})
\end{aligned}
$$

$$
\begin{aligned}
C_{11} &= M_1 + M_4 - M_5 + M_7 \\
C_{12} &= M_3 + M_5 \\
C_{21} &= M_2 + M_4 \\
C_{22} &= M_1 - M_2 + M_3 + M_6
\end{aligned}
$$

**Recurrence:** $T(n) = 7T(n/2) + O(n^2)$. Solution: $T(n) = O(n^{\log_2 7}) \approx O(n^{2.807})$.

### 1.5 Master Theorem

For recurrences of the form $T(n) = aT(n/b) + f(n)$ where $a \geq 1$, $b > 1$:

Compare $f(n)$ with $n^{\log_b a}$:

| Case | Condition                                          | Solution                        |
| ---- | -------------------------------------------------- | ------------------------------- |
| 1    | $f(n) = O(n^{\log_b a - \epsilon})$ for $\epsilon > 0$ | $T(n) = \Theta(n^{\log_b a})$ |
| 2    | $f(n) = \Theta(n^{\log_b a} \log^k n)$, $k \geq 0$ | $T(n) = \Theta(n^{\log_b a} \log^{k+1} n)$ |
| 3    | $f(n) = \Omega(n^{\log_b a + \epsilon})$ and regularity | $T(n) = \Theta(f(n))$         |

**Regularity condition (Case 3):** $a f(n/b) \leq c f(n)$ for some $c < 1$.

**Examples:**

| Recurrence                          | $a$ | $b$ | $n^{\log_b a}$ | $f(n)$    | Case | Result             |
| ----------------------------------- | --- | --- | -------------- | --------- | ---- | ------------------ |
| $T(n) = 2T(n/2) + n$               | 2   | 2   | $n$            | $n$       | 2    | $\Theta(n \log n)$ |
| $T(n) = 4T(n/2) + n$               | 4   | 2   | $n^2$          | $n$       | 1    | $\Theta(n^2)$     |
| $T(n) = 4T(n/2) + n^2 \log n$      | 4   | 2   | $n^2$          | $n^2 \log n$ | 2 (k=1) | $\Theta(n^2 \log^2 n)$ |
| $T(n) = 2T(n/2) + n^2$             | 2   | 2   | $n$            | $n^2$     | 3    | $\Theta(n^2)$     |

## 2. Greedy Algorithms

### 2.1 Strategy

Make the **locally optimal choice** at each step. Does not always produce a globally optimal solution; must prove correctness.

**Greedy choice property:** A globally optimal solution can be constructed by making locally optimal choices.

**Optimal substructure:** An optimal solution contains optimal solutions to subproblems.

### 2.2 Activity Selection

Given $n$ activities with start times $s_i$ and finish times $f_i$, select the maximum number of non-overlapping activities.

```
ACTIVITY_SELECT(s, f):
    sort activities by increasing finish time
    A = {1}  // select first activity
    k = 1
    for i = 2 to n:
        if s[i] >= f[k]:
            A = A ∪ {i}
            k = i
    return A
```

**Time:** $O(n \log n)$ for sorting, $O(n)$ for selection. **Optimal.**

### 2.3 Huffman Coding

Build an optimal prefix-free code for minimizing expected code length.

```
HUFFMAN(C):
    n = |C|
    Q = MIN_PRIORITY_QUEUE(C)  // keyed by frequency
    for i = 1 to n-1:
        x = EXTRACT_MIN(Q)
        y = EXTRACT_MIN(Q)
        z = new node with children x, y
        z.freq = x.freq + y.freq
        INSERT(Q, z)
    return EXTRACT_MIN(Q)
```

**Cost:** $O(n \log n)$ if using a binary heap.

**Optimality proof:** Greedy choice: merge the two lowest-frequency trees.

### 2.4 Kruskal's Algorithm (MST)

```
KRUSKAL(G):
    A = {}
    for each v in G.V: MAKE_SET(v)
    sort G.E by weight w
    for each (u, v) in G.E in sorted order:
        if FIND_SET(u) != FIND_SET(v):
            A = A ∪ {(u, v)}
            UNION(u, v)
    return A
```

**Time:** $O(E \log E)$ with Union-Find. **Optimal.**

### 2.5 Prim's Algorithm (MST)

```
PRIM(G, r):
    for each u in G.V:
        u.key = INF; u.parent = NIL
    r.key = 0
    Q = MIN_PRIORITY_QUEUE(G.V)  // keyed by u.key
    while Q is not empty:
        u = EXTRACT_MIN(Q)
        for each v in G.Adj[u]:
            if v in Q and w(u,v) < v.key:
                v.parent = u
                DECREASE_KEY(Q, v, w(u,v))
```

**Time:** $O(E + V \log V)$ with binary heap, $O(E + V \log V)$ with Fibonacci heap.

### 2.6 Dijkstra's Algorithm (Shortest Paths)

```
DIJKSTRA(G, w, s):
    for each v in G.V: v.dist = INF; v.parent = NIL
    s.dist = 0
    S = {}  // processed vertices
    Q = MIN_PRIORITY_QUEUE(G.V)  // keyed by v.dist
    while Q is not empty:
        u = EXTRACT_MIN(Q)
        S = S ∪ {u}
        for each v in G.Adj[u]:
            if v.dist > u.dist + w(u, v):
                v.dist = u.dist + w(u, v)
                v.parent = u
                DECREASE_KEY(Q, v, v.dist)
```

**Time:** $O(V \log V + E \log V) = O((V + E) \log V)$ with binary heap. $O(V \log V + E)$ with Fibonacci heap.

**Requires:** Non-negative edge weights.

## 3. Dynamic Programming

### 3.1 Strategy

Solve problems by combining solutions to **overlapping subproblems**. Store subproblem solutions to avoid recomputation.

**Two approaches:**

- **Top-down (memoization):** Recursion with caching.
- **Bottom-up (tabulation):** Fill a table from smallest subproblems upward.

### 3.2 Memoization vs. Tabulation

**Memoization:**

```
FIB(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = FIB(n-1, memo) + FIB(n-2, memo)
    return memo[n]
```

**Tabulation:**

```
FIB(n):
    dp[0] = 0; dp[1] = 1
    for i = 2 to n:
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
```

**When to use which:**
- Memoization: When not all subproblems are needed.
- Tabulation: When all subproblems are needed (often more space-efficient with table optimization).

### 3.3 Longest Common Subsequence (LCS)

Given sequences $X[1..m]$ and $Y[1..n]$, find the longest common subsequence.

**Recurrence:**

$$
c[i,j] = \begin{cases}
0 & \text{if } i = 0 \text{ or } j = 0 \\
c[i-1,j-1] + 1 & \text{if } x_i = y_j \\
\max(c[i-1,j], c[i,j-1]) & \text{if } x_i \neq y_j
\end{cases}
$$

```
LCS(X, Y):
    m = |X|; n = |Y|
    c = 2D array [0..m][0..n]
    for i = 1 to m:
        for j = 1 to n:
            if X[i] == Y[j]:
                c[i][j] = c[i-1][j-1] + 1
            else:
                c[i][j] = max(c[i-1][j], c[i][j-1])
    return c[m][n]  // length of LCS
```

**Time:** $O(mn)$. **Space:** $O(mn)$ (optimizable to $O(\min(m, n))$).

### 3.4 0/1 Knapsack

Given $n$ items with weight $w_i$ and value $v_i$, and a knapsack of capacity $W$, maximize total value.

**Recurrence:**

$$
dp[i][w] = \begin{cases}
0 & \text{if } i = 0 \text{ or } w = 0 \\
dp[i-1][w] & \text{if } w_i > w \\
\max(dp[i-1][w], dp[i-1][w-w_i] + v_i) & \text{if } w_i \leq w
\end{cases}
$$

```
KNAPSACK(W, weights, values, n):
    dp = 2D array [0..n][0..W]
    for i = 1 to n:
        for w = 1 to W:
            dp[i][w] = dp[i-1][w]
            if weights[i] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w-weights[i]] + values[i])
    return dp[n][W]
```

**Time:** $O(nW)$. **Pseudo-polynomial.**

### 3.5 Coin Change (Minimum Coins)

Given coin denominations $c_1, c_2, \ldots, c_n$ and amount $A$, find the minimum number of coins.

**Recurrence:**

$$
dp[a] = \begin{cases}
0 & \text{if } a = 0 \\
\min_{c_i \leq a}(dp[a - c_i] + 1) & \text{if } a > 0
\end{cases}
$$

```
COIN_CHANGE(coins, A):
    dp = array [0..A], initialized to INF
    dp[0] = 0
    for a = 1 to A:
        for each c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return dp[A] if dp[A] != INF else -1
```

**Time:** $O(nA)$. **Space:** $O(A)$.

### 3.6 Matrix Chain Multiplication

Given matrices $A_1, A_2, \ldots, A_n$ with dimensions $p_0 \times p_1, p_1 \times p_2, \ldots, p_{n-1} \times p_n$, parenthesize to minimize scalar multiplications.

**Recurrence:**

$$
m[i,j] = \begin{cases}
0 & \text{if } i = j \\
\min_{i \leq k < j}(m[i,k] + m[k+1,j] + p_{i-1} p_k p_j) & \text{if } i < j
\end{cases}
$$

**Time:** $O(n^3)$. **Space:** $O(n^2)$.

### 3.7 Edit Distance (Levenshtein)

Minimum number of insertions, deletions, and substitutions to transform $X[1..m]$ into $Y[1..n]$.

$$
dp[i,j] = \begin{cases}
j & \text{if } i = 0 \\
i & \text{if } j = 0 \\
dp[i-1,j-1] & \text{if } x_i = y_j \\
1 + \min(dp[i-1,j], dp[i,j-1], dp[i-1,j-1]) & \text{if } x_i \neq y_j
\end{cases}
$$

**Time:** $O(mn)$. **Space:** $O(\min(m, n))$ with optimization.

### 3.8 DP Problem Identification Checklist

- **Overlapping subproblems?** The same subproblem is solved multiple times.
- **Optimal substructure?** The optimal solution contains optimal solutions to subproblems.
- **Can you define a recurrence?** Express the answer in terms of smaller subproblems.
- **What are the subproblem parameters?** Define the DP state variables.
- **What is the base case?** The smallest subproblem that can be answered directly.

## 4. Backtracking

### 4.1 Strategy

Build solutions incrementally. When a partial solution cannot be extended to a valid complete solution, **backtrack** (undo the last choice and try another).

### 4.2 N-Queens Problem

Place $n$ queens on an $n \times n$ board so no two queens attack each other.

```
N_QUEENS(board, row, n):
    if row == n:
        print board
        return true
    for col = 1 to n:
        if is_safe(board, row, col):
            board[row][col] = 1
            if N_QUEENS(board, row+1, n): return true
            board[row][col] = 0  // backtrack
    return false

IS_SAFE(board, row, col):
    for i = 0 to row-1:
        if board[i][col] == 1: return false
        if col - (row-i) >= 0 and board[i][col-(row-i)] == 1: return false
        if col + (row-i) < N and board[i][col+(row-i)] == 1: return false
    return true
```

**Time:** $O(n!)$ in worst case. Backtracking prunes most invalid branches.

### 4.3 Subset Sum

Given a set $S$ of $n$ integers and target $T$, determine if any subset sums to $T$.

```
SUBSET_SUM(S, T, idx=0, current=0):
    if current == T: return true
    if idx >= len(S) or current > T: return false
    // Include S[idx]
    if SUBSET_SUM(S, T, idx+1, current + S[idx]): return true
    // Exclude S[idx]
    if SUBSET_SUM(S, T, idx+1, current): return true
    return false
```

**Time:** $O(2^n)$ worst case. Pruned by `current > T`.

### 4.4 Sudoku Solver

```
SUDOKU(board):
    find empty cell (row, col)
    if no empty cell: return true  // solved
    for num = 1 to 9:
        if is_valid(board, row, col, num):
            board[row][col] = num
            if SUDOKU(board): return true
            board[row][col] = 0
    return false
```

## 5. Branch and Bound

### 5.1 Strategy

Extend backtracking with **bounds** on the best possible solution from a given partial solution. Prune branches that cannot improve on the best solution found so far.

### 5.2 Branch and Bound for 0/1 Knapsack

Use the **fractional knapsack** solution as an upper bound for each node.

```
KNAPSACK_BB(items, W, idx=0, current_value=0, current_weight=0):
    if current_weight <= W:
        best = max(best, current_value)
    if idx >= n: return
    // Bound: fractional relaxation
    bound = current_value + fractional_knapsack_value(items[idx..n-1], W - current_weight)
    if bound <= best: return  // prune
    // Branch: include or exclude items[idx]
    if current_weight + items[idx].weight <= W:
        KNAPSACK_BB(items, W, idx+1, current_value + items[idx].value,
                     current_weight + items[idx].weight)
    KNAPSACK_BB(items, W, idx+1, current_value, current_weight)
```

### 5.3 Traveling Salesman (Branch and Bound)

```
TSP_BB(cost_matrix):
    best = INF
    // Start from city 0
    path = [0]
    visited = {0}
    TSP_RECURSE(cost_matrix, path, visited, 0, 0, best)
    return best

TSP_RECURSE(cost, path, visited, curr, curr_cost, best):
    if len(path) == n:
        total = curr_cost + cost[curr][0]  // return to start
        best = min(best, total)
        return best
    for city = 1 to n-1:
        if city not in visited:
            new_cost = curr_cost + cost[curr][city]
            // Lower bound: current cost + MST of remaining cities + min edges
            if new_cost + lower_bound(path, visited) < best:
                visited.add(city)
                path.append(city)
                best = TSP_RECURSE(cost, path, visited, city, new_cost, best)
                path.pop()
                visited.remove(city)
    return best
```

## 6. Common Pitfalls

1. **Applying greedy when DP is needed.** The activity selection problem admits a greedy solution, but 0/1 knapsack does not (unlike fractional knapsack). Always verify the greedy choice property.

2. **Forgetting base cases in DP.** Every recurrence needs a base case. Missing or incorrect base cases produce wrong answers. For LCS, $c[0][j] = c[i][0] = 0$.

3. **Incorrect DP state definition.** The state must capture all information needed to transition. In knapsack, `dp[i][w]` works because we only need item index and remaining capacity. In harder problems, you may need additional dimensions.

4. **Assuming Dijkstra works with negative weights.** Dijkstra fails with negative edges because it assumes a vertex's distance is finalized when extracted from the priority queue. Use Bellman-Ford for negative weights.

5. **Inefficient memoization without tabulation.** Recursion with memoization has overhead (function call stack, hash table lookups). For problems where all subproblems are needed, tabulation is faster and uses less memory.

6. **Not pruning in backtracking/branch-and-bound.** Without pruning, backtracking degenerates to brute force ($O(2^n)$ or $O(n!)$). Effective bounding is essential for practical performance.

7. **Wrong Master theorem case application.** Ensure $f(n)$ is polynomially different from $n^{\log_b a}$. If $f(n) = n^{\log_b a} / \log n$, this does not cleanly fit any case and requires other methods.

## Summary

- **Divide and conquer** splits problems into independent subproblems: merge sort, quicksort, Strassen. The Master theorem solves recurrences of the form $T(n) = aT(n/b) + f(n)$.
- **Greedy algorithms** make locally optimal choices. Correctness requires proving the greedy choice property and optimal substructure. Examples: Huffman, Kruskal, Prim, Dijkstra.
- **Dynamic programming** solves overlapping subproblems via memoization or tabulation. Key problems: LCS, knapsack, coin change, edit distance, matrix chain multiplication.
- **Backtracking** incrementally builds solutions and prunes invalid paths. Used for N-queens, subset sum, Sudoku.
- **Branch and bound** enhances backtracking with bounds to prune provably suboptimal branches.
