---
title: Dynamic Programming
tags:
  - Computing
  - University
---

### 5.1 Principles

Dynamic programming (DP) solves problems by:

1. **Overlapping subproblems:** The same subproblems are solved repeatedly.
2. **Optimal substructure:** The optimal solution contains optimal solutions to subproblems.

**Approaches:**

- **Top-down (memoisation):** Recursive with caching.
- **Bottom-up (tabulation):** Fill a table iteratively from small subproblems to large.

### 5.2 Memoisation vs. Tabulation

| Aspect      | Memoisation (Top-Down)          | Tabulation (Bottom-Up) |
| ----------- | ------------------------------- | ---------------------- |
| Approach    | Recursive with cache            | Iterative table fill   |
| Order       | Natural recursion order         | Dependency order       |
| Space       | $O(n)$ stack + $O(n)$ table     | $O(n)$ table only      |
| Overhead    | Function call overhead          | Minimal                |
| Subproblems | Computes only needed            | Computes all           |
| Best for    | When not all subproblems needed | When all needed        |

**When to use which:**

- Use **memoisation** when the subproblem space is sparse (not all subproblems are needed).
- Use **tabulation** when most subproblems are needed (avoids recursion overhead and stack
  overflow).
- Both achieve the same asymptotic time complexity.

### 5.3 Optimal Substructure Proof Technique

To prove that a problem has optimal substructure:

1. Show that an optimal solution to the problem includes an optimal solution to a subproblem.
2. Proved by contradiction: if the optimal solution contained a suboptimal sub-solution, replacing
   it with an optimal one would improve the overall solution.

**Example (Shortest Path).** If $p$ is a shortest path from $u$ to $v$ and $w$ is an intermediate
vertex on $p$Then the subpath of $p$ from $u$ to $w$ is a shortest path from $u$ to $w$.

_Proof._ If not, there exists a shorter path $p'$ from $u$ to $w$. Then $p'$ concatenated with the
subpath of $p$ from $w$ to $v$ would be shorter than $p$Contradicting that $p$ is a shortest path.
$\blacksquare$

:::caution Common Pitfall Not all problems have optimal substructure. For example, the _longest
simple path_ problem does not: the longest simple path from $u$ to $v$ may not contain the longest
simple path from $u$ to an intermediate vertex $w$Because the subpath might share vertices with the
rest of the path, creating a non-simple path.

### 5.4 Common Patterns

**1D DP.** $dp[i]$ depends on $dp[j]$ for $j < i$. Example: Fibonacci, longest increasing
subsequence.

**2D DP.** $dp[i][j]$ depends on $dp[i'][j']$ for $(i', j')$ in some set. Example: edit distance,
Matrix chain multiplication, longest common subsequence.

**Interval DP.** $dp[i][j]$ depends on $dp[i'][j']$ where $i \leq i' \leq j' \leq j$. Example:
Optimal BST, matrix chain multiplication.

### 5.5 Worked Example: 0/1 Knapsack

**Problem.** Given $n$ items with weights $w_1, \ldots, w_n$ and values $v_1, \ldots, v_n$And a
knapsack of capacity $W$Maximise the total value without exceeding the capacity.

**Recurrence:**

$$dp[i][c] = \begin{cases} 0 & \mathrm{if}  i = 0 \mathrm{ or}  c = 0 \\ dp[i-1][c] & \mathrm{if}  w_i > c \\ \max(dp[i-1][c], dp[i-1][c - w_i] + v_i) & \mathrm{if}  w_i \leq c \end{cases}$$

**Time:** $O(nW)$. **Space:** $O(nW)$ (can be reduced to $O(W)$ with 1D array).

_Proof of correctness._ For each item $i$Either we don't include it (value $dp[i-1][c]$) or we
include it (value $v_i + dp[i-1][c - w_i]$). The optimal choice is the maximum. The base cases are
correct. $\blacksquare$

<details>
<summary>Worked Example: 0/1 Knapsack</summary>

Items: $\\{(w=1, v=1), (w=3, v=4), (w=4, v=5), (w=5, v=7)\\}$Capacity $W = 7$.

Building the DP table (items as rows, capacities 0-7 as columns):

```
       c: 0  1  2  3  4  5  6  7
i=0:      0  0  0  0  0  0  0  0
i=1:      0  1  1  1  1  1  1  1
i=2:      0  1  1  4  5  5  5  5
i=3:      0  1  1  4  5  6  6  9
i=4:      0  1  1  4  5  7  8  9
```

Maximum value: $dp[4][7] = 9$ (items 2 and 4: $w = 3 + 5 = 7$, $v = 4 + 7 = 11$ — let me
recalculate).

Correct: items 2 and 3 ($w=3+4=7$, $v=4+5=9$), or items 1, 2, 4 ($w=1+3+5=9 > 7$Not valid). Items 1,
3 ($w=1+4=5$, $v=1+5=6$), items 2, 4 ($w=3+5=8 > 7$). Optimal: items 2 and 3 ($w=3+4=7$, $v=4+5=9$).

</details>

### 5.6 Worked Example: Edit Distance (Levenshtein Distance)

**Problem.** Given strings $s$ of length $m$ and $t$ of length $n$Find the minimum number of
insertions, deletions, and substitutions to transform $s$ into $t$.

**Recurrence:**

$$dp[i][j] = \begin{cases} j & \mathrm{if}  i = 0 \\ i & \mathrm{if}  j = 0 \\ dp[i-1][j-1] & \mathrm{if}  s[i] = t[j] \\ 1 + \min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) & \mathrm{if}  s[i] \neq t[j] \end{cases}$$

Where the three cases in the minimum are: delete from $s$Insert into $s$Substitute in $s$.

**Time:** $O(mn)$. **Space:** $O(mn)$ (can be reduced to $O(\min(m,n))$).

<details>
<summary>Worked Example: Edit Distance</summary>

Compute the edit distance between "kitten" and "sitting".

Building the DP table:

```
       ""  s  i  t  t  i  n  g
""       0  1  2  3  4  5  6  7
k        1  1  2  3  4  5  6  7
i        2  2  1  2  3  4  5  6
t        3  3  2  1  2  3  4  5
t        4  4  3  2  1  2  3  4
e        5  5  4  3  2  2  3  4
n        6  6  5  4  3  3  2  3
```

Edit distance: $dp[6][7] = 3$.

Transform: kitten → sitten (substitute k→s) → sittin (substitute e→i) → sitting (insert g).

</details>

### 5.7 Worked Example: Matrix Chain Multiplication

**Problem.** Given matrices $A_1, A_2, \ldots, A_n$ where $A_i$ has dimensions
$p_{i-1} \times p_i$Find the parenthesisation that minimises the total number of scalar
multiplications.

**Recurrence:**

$$dp[i][j] = \begin{cases} 0 & \mathrm{if}  i = j \\ \min_{i \leq k < j} (dp[i][k] + dp[k+1][j] + p_{i-1} p_k p_j) & \mathrm{if}  i < j \end{cases}$$

**Time:** $O(n^3)$. **Space:** $O(n^2)$.

_Proof of correctness._ The optimal parenthesisation of $A_i \cdots A_j$ splits at some position
$k$: $(A_i \cdots A_k)(A_{k+1} \cdots A_j)$. The cost is the cost of the left subproduct plus the
cost of the right subproduct plus the cost of multiplying the resulting matrices
($p_{i-1} \cdot p_k \cdot p_j$ scalar multiplications). The optimal $k$ minimises this total.
$\blacksquare$

<details>
<summary>Worked Example: Matrix Chain Multiplication</summary>

Matrices: $A_1$ ($10 \times 30$), $A_2$ ($30 \times 5$), $A_3$ ($5 \times 60$). Dimensions:
$p = [10, 30, 5, 60]$.

$dp[1][1] = dp[2][2] = dp[3][3] = 0$.

$dp[1][2] = p_0 p_1 p_2 = 10 \times 30 \times 5 = 1500$. Split at $k=1$: $(A_1 A_2)$.

$dp[2][3] = p_1 p_2 p_3 = 30 \times 5 \times 60 = 9000$. Split at $k=2$: $(A_2 A_3)$.

$dp[1][3]$: Try $k=1$: $dp[1][1] + dp[2][3] + 10 \times 30 \times 60 = 0 + 9000 + 18000 = 27000$.
Try $k=2$: $dp[1][2] + dp[3][3] + 10 \times 5 \times 60 = 1500 + 0 + 3000 = 4500$.

Minimum: $dp[1][3] = 4500$Split at $k=2$: $(A_1(A_2 A_3))$.

</details>

### 5.8 Worked Example: Longest Common Subsequence

**Problem.** Given sequences $X = (x_1, \ldots, x_m)$ and $Y = (y_1, \ldots, y_n)$Find the LCS.

**Recurrence:**

$$dp[i][j] = \begin{cases} 0 & \mathrm{if}  i = 0 \mathrm{ or}  j = 0 \\ dp[i-1][j-1] + 1 & \mathrm{if}  x_i = y_j \\ \max(dp[i-1][j], dp[i][j-1]) & \mathrm{if}  x_i \neq y_j \end{cases}$$

**Time:** $O(mn)$. **Space:** $O(mn)$ (can be reduced to $O(\min(m,n))$ for the length only).

_Proof of correctness._ If $x_i = y_j$Any LCS of $X[1..i]$ and $Y[1..j]$ must include $x_i$ So
$\mathrm{LCS} = 1 + \mathrm{LCS}(X[1..i-1], Y[1..j-1])$. If $x_i \neq y_j$The LCS either Excludes
$x_i$ or excludes $y_j$Giving the max of the two subproblems. $\blacksquare$

### 5.9 Worked Example: Coin Change

**Problem.** Given coin denominations $d_1, \ldots, d_n$ and a target amount $M$Find the minimum
number of coins needed.

**Recurrence:**

$$dp[c] = \begin{cases} 0 & \mathrm{if}  c = 0 \\ \min_{i: d_i \leq c}(dp[c - d_i] + 1) & \mathrm{if}  c > 0 \end{cases}$$

**Time:** $O(nM)$. **Space:** $O(M)$.

_Proof of correctness._ To make change for amount $c > 0$The last coin used must be some
$d_i \leq c$. The remaining amount is $c - d_i$And the optimal solution for $c$ uses
$1 + dp[c - d_i]$ coins. Taking the minimum over all valid $d_i$ gives the optimal solution.
$\blacksquare$

<details>
<summary>Worked Example: Coin Change</summary>

Denominations: $\\{1, 5, 10, 25\\}$. Target: $M = 63$.

Bottom-up computation:

- $dp[0] = 0$
- $dp[1..4] = dp[c - 1] + 1 = c$ (use pennies)
- $dp[5] = \min(dp[4]+1, dp[0]+1) = 1$ (use a nickel)
- $dp[10] = \min(dp[9]+1, dp[5]+1, dp[0]+1) = 1$ (use a dime)
- ...
- $dp[25] = 1$ (use a quarter)
- $dp[50] = 2$ (use two quarters)
- $dp[63] = \min(dp[62]+1, dp[58]+1, dp[53]+1, dp[38]+1)$

Working backwards: $dp[63] = dp[38] + 1 = dp[13] + 2 = dp[3] + 3 = 6$.

Solution: 2 quarters + 1 dime + 3 pennies = $25 + 25 + 10 + 1 + 1 + 1 = 63$. 6 coins.

</details>

### 5.10 Worked Example: Longest Increasing Subsequence

**Problem.** Given a sequence $a_1, \ldots, a_n$Find the length of the longest strictly increasing
subsequence (not necessarily contiguous).

**Recurrence:** $dp[i] = 1 + \max\\{dp[j] : j \lt i \mathrm{~and~} a_j \lt a_i\\}$With $dp[i] = 1$
if no such $j$ exists.

**Time:** $O(n^2)$. **Space:** $O(n)$.

<details>
<summary>Worked Example: Longest Increasing Subsequence</summary>

Find the LIS of $[10, 22, 9, 33, 21, 50, 41, 60, 80]$.

$dp[0] = 1$ (just 10) $dp[1] = dp[0] + 1 = 2$ (10, 22) $dp[2] = 1$ (just 9) $dp[3] = dp[1] + 1 = 3$
(10, 22, 33) $dp[4] = dp[0] + 1 = 2$ (10, 21) $dp[5] = dp[3] + 1 = 4$ (10, 22, 33, 50)
$dp[6] = dp[4] + 1 = 3$ (10, 21, 41) $dp[7] = dp[5] + 1 = 5$ (10, 22, 33, 50, 60)
$dp[8] = dp[7] + 1 = 6$ (10, 22, 33, 50, 60, 80)

LIS length: 6.

**Patience sorting approach ($O(n \log n)$):** Maintain piles. For each card, place on the leftmost
pile whose top card is $\geq$ the current card, or start a new pile on the right if no such pile
exists. The number of piles equals the LIS length.

</details>



