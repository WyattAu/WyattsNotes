---
title: Algorithms and Data Structures
date: 2026-04-23T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: algorithms-and-data-structures
---

## 1. Algorithm Analysis

### 1.1 Asymptotic Notation

**Definition.** $f(n) = O(g(n))$ if there exist constants $c > 0$ and $n_0$ such that
$f(n) \leq c \cdot g(n)$ for all $n \geq n_0$.

**Definition.** $f(n) = \Omega(g(n))$ if there exist constants $c > 0$ and $n_0$ such that
$f(n) \geq c \cdot g(n)$ for all $n \geq n_0$.

**Definition.** $f(n) = \Theta(g(n))$ if $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$.

**Definition.** $f(n) = o(g(n))$ if $\lim_{n \to \infty} f(n)/g(n) = 0$.

**Theorem 1.1.** $f(n) = O(g(n))$ if and only if $g(n) = \Omega(f(n))$.

**Theorem 1.2 (Limit Rule).** If $\lim_{n \to \infty} f(n)/g(n) = c$ where $0 < c < \infty$, then
$f(n) = \Theta(g(n))$. If $c = 0$, then $f(n) = O(g(n))$. If $c = \infty$, then $g(n) = O(f(n))$.

### 1.2 Common Complexity Classes

| Class       | Name               | Example                          |
| ----------- | ------------------ | -------------------------------- |
| $O(1)$      | Constant           | Array access by index            |
| $O(\log n)$ | Logarithmic        | Binary search                    |
| $O(n)$      | Linear             | Linear search                    |
| $O(n \log n)$ | Log-linear       | Merge sort, heap sort            |
| $O(n^2)$    | Quadratic          | Bubble sort, insertion sort      |
| $O(n^3)$    | Cubic              | Naive matrix multiplication      |
| $O(2^n)$    | Exponential        | Naive Fibonacci, subset problems |
| $O(n!)$     | Factorial          | Generating all permutations      |

### 1.3 Amortised Analysis

Amortised analysis gives the average cost per operation over a sequence of operations, even when
individual operations may be expensive.

**Methods:**

1. **Aggregate analysis:** Compute total cost of $n$ operations, divide by $n$.
2. **Accounting method:** Assign an amortised cost to each operation; the sum of amortised costs
   must be an upper bound on the total actual cost.
3. **Potential method:** Define a potential function $\Phi$; the amortised cost of the $i$-th
   operation is $\hat{c}_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$.

**Example (Dynamic Array).** A dynamic array doubles in size when full. Insertion is $O(1)$
amortised: most insertions cost $O(1)$; occasional resizing costs $O(n)$, but is paid for by the
surplus from previous $O(1)$ insertions.

## 2. Fundamental Data Structures

### 2.1 Arrays and Linked Lists

**Array.** Contiguous memory, $O(1)$ access by index, $O(n)$ insertion/deletion (shift required).

**Linked List.** Each node stores data and a pointer to the next node. $O(1)$ insertion/deletion at
head (given pointer), $O(n)$ access by position.

**Doubly Linked List.** Each node has pointers to both next and previous nodes. $O(1)$ insertion
and deletion at any position (given pointers to the node and its neighbours).

### 2.2 Stacks and Queues

**Stack.** Last-in, first-out (LIFO). Operations: push, pop, peek, all $O(1)$.

**Queue.** First-in, first-out (FIFO). Operations: enqueue, dequeue, peek, all $O(1)$.

**Implementation.** Both can be implemented with arrays (with circular buffer) or linked lists.

### 2.3 Hash Tables

A **hash table** maps keys to values using a hash function $h : K \to \{0, 1, \ldots, m - 1\}$.

**Collision resolution:**
- **Chaining:** Each bucket is a linked list. Average case: $O(1 + \alpha)$ where $\alpha = n/m$
  is the load factor.
- **Open addressing (linear probing):** Insert into the next available slot. Average case: $O(1/(1-\alpha))$.

**Theorem 2.1 (Uniform Hashing).** Under the assumption of simple uniform hashing, the expected
length of a chain in a hash table with chaining is $\alpha = n/m$.

### 2.4 Trees

**Binary Search Tree (BST).** For each node: left subtree values $<$ node value, right subtree values
$>$ node value.

- Search, insert, delete: $O(h)$ where $h$ is the height.
- For a balanced BST, $h = O(\log n)$.

**AVL Tree.** A self-balancing BST where the heights of left and right subtrees differ by at most 1.
All operations: $O(\log n)$ worst case.

**Red-Black Tree.** A self-balancing BST with colour properties. All operations: $O(\log n)$.

**B-Tree.** A generalised balanced search tree used in databases and file systems. All leaves at the
same depth. Each node has between $\lceil m/2 \rceil$ and $m$ children.

### 2.5 Heaps

A **binary heap** is a complete binary tree satisfying the heap property:

- **Max-heap:** parent $\geq$ children.
- **Min-heap:** parent $\leq$ children.

Implemented as an array: parent of node $i$ is at $\lfloor(i-1)/2\rfloor$; children at $2i+1$ and $2i+2$.

**Operations:** insert $O(\log n)$, extract-max/min $O(\log n)$, peek $O(1)$.

### 2.6 Graphs

A graph $G = (V, E)$ can be represented by:

- **Adjacency matrix:** $A_{ij} = 1$ if $(i,j) \in E$. Space: $O(V^2)$. Edge lookup: $O(1)$.
- **Adjacency list:** For each vertex, store a list of neighbours. Space: $O(V + E)$. Iterating
  over neighbours: $O(\mathrm{deg}(v))$.

## 3. Sorting Algorithms

### 3.1 Merge Sort

**Algorithm.** Divide the array in half, recursively sort each half, then merge.

**Theorem 3.1.** Merge sort runs in $O(n \log n)$ time in all cases (best, average, worst).

*Proof.* The recurrence is $T(n) = 2T(n/2) + O(n)$. By the Master theorem (case 2):
$a = 2$, $b = 2$, $f(n) = O(n) = O(n^{\log_b a})$, so $T(n) = O(n \log n)$. $\blacksquare$

**Theorem 3.2.** Merge sort is stable and requires $O(n)$ auxiliary space.

### 3.2 Quicksort

**Algorithm.** Choose a pivot, partition the array into elements $\leq$ pivot and $>$ pivot, recursively
sort each partition.

**Theorem 3.3.** Quicksort runs in $O(n \log n)$ expected time and $O(n^2)$ worst-case time.

*Proof (expected case).* If the pivot is chosen uniformly at random, the expected number of
comparisons is $O(n \log n)$ by an indicator random variable argument.

Worst case occurs when the pivot is always the smallest or largest element (e.g., already sorted
array with first-element pivot): $T(n) = T(n-1) + O(n) = O(n^2)$. $\blacksquare$

**Theorem 3.4.** Quicksort is not stable in general but uses $O(\log n)$ expected stack space.

### 3.3 Heapsort

**Algorithm.** Build a max-heap in $O(n)$ time, then repeatedly extract the maximum.

**Theorem 3.5.** Heapsort runs in $O(n \log n)$ time in all cases, uses $O(1)$ auxiliary space, and
is not stable.

### 3.4 Lower Bound on Comparison Sorting

**Theorem 3.6.** Any comparison-based sorting algorithm requires $\Omega(n \log n)$ comparisons in the
worst case.

*Proof.* A comparison-based sort can be modelled as a decision tree. The tree must have at least $n!$
leaves (one for each permutation). A binary tree with $n!$ leaves has height at least $\log_2(n!) \geq \log_2((n/2)^{n/2}) = (n/2)\log_2(n/2) = \Omega(n \log n)$. $\blacksquare$

:::caution Common Pitfall
The $O(n \log n)$ lower bound applies only to **comparison-based** sorting. Non-comparison sorts
like radix sort can achieve $O(n)$ time for integers in a bounded range.
:::

## 4. Graph Algorithms

### 4.1 Breadth-First Search (BFS)

BFS explores the graph level by level from a source vertex.

**Theorem 4.1.** BFS runs in $O(V + E)$ time and discovers shortest paths (in terms of number of
edges) from the source to all reachable vertices.

*Proof.* BFS uses a queue. When a vertex is dequeued, all its undiscovered neighbours are enqueued.
Since vertices are processed in FIFO order, the first time a vertex is discovered is via the
shortest path. $\blacksquare$

### 4.2 Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking.

**Theorem 4.2.** DFS runs in $O(V + E)$ time and can be used to detect cycles, find connected
components, compute topological orderings, and identify strongly connected components.

### 4.3 Dijkstra's Algorithm

**Problem.** Find shortest paths from a single source in a weighted graph with non-negative edge
weights.

**Algorithm.** Maintain a priority queue of vertices keyed by their current shortest-path estimate.
Repeatedly extract the vertex with minimum distance and relax its edges.

**Theorem 4.3.** Dijkstra's algorithm with a binary heap runs in $O((V + E)\log V)$ time. With a
Fibonacci heap: $O(V \log V + E)$.

*Proof.* Each vertex is extracted from the priority queue at most once: $O(V \log V)$. Each edge is
relaxed at most once: $O(E \log V)$. Total: $O((V + E)\log V)$. $\blacksquare$

### 4.4 Bellman-Ford Algorithm

**Problem.** Find shortest paths from a single source, allowing negative edge weights (but no negative
cycles).

**Theorem 4.4.** Bellman-Ford runs in $O(VE)$ time. It correctly detects negative-weight cycles.

*Proof.* After $i$ iterations, all shortest paths using at most $i$ edges are found. After $V - 1$
iterations, all shortest paths (which have at most $V - 1$ edges) are correct. A $V$-th iteration
that updates any distance indicates a negative cycle. $\blacksquare$

### 4.5 Floyd-Warshall Algorithm

**Problem.** Find all-pairs shortest paths.

**Algorithm.** For $k = 1, \ldots, V$: for each pair $(i, j)$, check if going through vertex $k$
improves the path.

$$d_{ij}^{(k)} = \min(d_{ij}^{(k-1)}, d_{ik}^{(k-1)} + d_{kj}^{(k-1)})$$

**Theorem 4.5.** Floyd-Warshall runs in $O(V^3)$ time and $O(V^2)$ space.

### 4.6 Minimum Spanning Tree

**Kruskal's Algorithm.** Sort edges by weight, add edges to the MST as long as they don't create a
cycle (using Union-Find). $O(E \log E)$.

**Prim's Algorithm.** Start from any vertex, repeatedly add the minimum-weight edge connecting the
tree to a non-tree vertex (using a priority queue). $O((V + E)\log V)$.

**Theorem 4.6 (Cut Property).** For any cut of the graph, the minimum-weight edge crossing the cut
belongs to some MST.

**Theorem 4.7 (Cycle Property).** For any cycle, the maximum-weight edge on the cycle does not belong
to any MST.

## 5. Dynamic Programming

### 5.1 Principles

Dynamic programming (DP) solves problems by:

1. **Overlapping subproblems:** The same subproblems are solved repeatedly.
2. **Optimal substructure:** The optimal solution contains optimal solutions to subproblems.

**Approaches:**
- **Top-down (memoisation):** Recursive with caching.
- **Bottom-up (tabulation):** Fill a table iteratively from small subproblems to large.

### 5.2 Common Patterns

**1D DP.** $dp[i]$ depends on $dp[j]$ for $j < i$. Example: Fibonacci, longest increasing subsequence.

**2D DP.** $dp[i][j]$ depends on $dp[i'][j']$ for $(i', j')$ in some set. Example: edit distance,
matrix chain multiplication, longest common subsequence.

**Interval DP.** $dp[i][j]$ depends on $dp[i'][j']$ where $i \leq i' \leq j' \leq j$. Example:
optimal BST, matrix chain multiplication.

### 5.3 Worked Example: Longest Common Subsequence

**Problem.** Given sequences $X = (x_1, \ldots, x_m)$ and $Y = (y_1, \ldots, y_n)$, find the LCS.

**Recurrence:**

$$dp[i][j] = \begin{cases} 0 & \mathrm{if } i = 0 \mathrm{ or } j = 0 \\ dp[i-1][j-1] + 1 & \mathrm{if } x_i = y_j \\ \max(dp[i-1][j], dp[i][j-1]) & \mathrm{if } x_i \neq y_j \end{cases}$$

**Time:** $O(mn)$. **Space:** $O(mn)$ (can be reduced to $O(\min(m,n))$ for the length only).

*Proof of correctness.* If $x_i = y_j$, any LCS of $X[1..i]$ and $Y[1..j]$ must include $x_i$,
so $\mathrm{LCS} = 1 + \mathrm{LCS}(X[1..i-1], Y[1..j-1])$. If $x_i \neq y_j$, the LCS either
excludes $x_i$ or excludes $y_j$, giving the max of the two subproblems. $\blacksquare$

## 6. NP-Completeness

### 6.1 P, NP, and NP-Completeness

**P:** The class of decision problems solvable in polynomial time by a deterministic Turing machine.

**NP:** The class of decision problems solvable in polynomial time by a **non-deterministic** Turing
machine. Equivalently, problems whose "yes" instances have polynomial-time verifiable certificates.

**NP-hard:** A problem $A$ is NP-hard if every problem in NP can be reduced to $A$ in polynomial
time.

**NP-complete:** A problem is NP-complete if it is in NP and NP-hard.

**Theorem 6.1.** If any NP-complete problem is in P, then P = NP.

### 6.2 Polynomial-Time Reductions

A **polynomial-time reduction** from problem $A$ to problem $B$ is a polynomial-time algorithm that
transforms instances of $A$ into instances of $B$, preserving the answer.

**Lemma 6.1.** If $A \leq_p B$ and $B \in P$, then $A \in P$.

**Lemma 6.2.** If $A \leq_p B$ and $A$ is NP-hard, then $B$ is NP-hard.

### 6.3 Classic NP-Complete Problems

**SAT (Cook-Levin Theorem, 1971).** Given a Boolean formula in CNF, is there a satisfying assignment?

**3-SAT.** SAT restricted to clauses with exactly 3 literals.

**Vertex Cover.** Given a graph $G = (V, E)$ and integer $k$, is there a vertex cover of size $\leq k$?

**Travelling Salesman Problem (decision version).** Given a weighted graph and bound $B$, is there a
tour of total weight $\leq B$?

**Subset Sum.** Given a set of integers and a target $T$, is there a subset summing to $T$?

**Clique.** Given a graph $G$ and integer $k$, does $G$ contain a clique of size $k$?

### 6.4 Proof Strategy for NP-Completeness

To prove a problem $B$ is NP-complete:

1. Show $B \in \mathrm{NP}$ (polynomial-time verifiable certificate).
2. Show a known NP-complete problem $A$ reduces to $B$: $A \leq_p B$.

**Example.** 3-SAT $\leq_p$ Vertex Cover: construct a graph from the 3-SAT formula where each
variable and each clause become vertices, and edges enforce the constraint that a satisfying
assignment corresponds to a vertex cover.

:::caution Common Pitfall
NP-hardness does not mean the problem is unsolvable. It means there is no known polynomial-time
algorithm. Many NP-complete problems have efficient approximation algorithms or can be solved
exactly for practical input sizes using branch-and-bound or SAT solvers.
:::
