---
title: Graph Algorithms
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: graph-algorithms
---

## 1. Dijkstra's Algorithm (Revisited)

See [Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/05-graphs) for the full
treatment. Here we provide additional detail on the priority queue implementation and A\* extension.

### Priority Queue Optimisation

With a **Fibonacci heap**, Dijkstra's algorithm achieves $O(V \log V + E)$ amortised time (vs
$O((V + E)\log V)$ with a binary heap). The key improvement is $O(1)$ amortised decrease-key.

### Bidirectional Dijkstra

Run Dijkstra from both the source and target simultaneously. The search terminates when the two
frontiers meet. This can reduce the search space significantly in practice.

---

## 2. A\* Search Algorithm

### Motivation

Dijkstra's algorithm explores in all directions equally. For pathfinding with a known target, we can
use a **heuristic** to guide the search toward the goal.

### Algorithm

A\* uses a priority queue ordered by $f(v) = g(v) + h(v)$, where:

- $g(v)$ = actual cost from source to $v$ (same as Dijkstra)
- $h(v)$ = **estimated** cost from $v$ to the goal (heuristic)

```python
import heapq

def a_star(graph, source, goal, h):
    open_set = [(h(source), 0, source)]
    g_score = {source: 0}
    came_from = {}

    while open_set:
        f, g, u = heapq.heappop(open_set)
        if u == goal:
            return reconstruct_path(came_from, u)
        for v, w in graph.adj[u]:
            tentative_g = g + w
            if v not in g_score or tentative_g < g_score[v]:
                g_score[v] = tentative_g
                came_from[v] = u
                heapq.heappush(open_set, (tentative_g + h(v), tentative_g, v))
    return None
```

### Heuristic Properties

| Property     | Definition                                               | Effect                          |
| ------------ | -------------------------------------------------------- | ------------------------------- |
| Admissible   | $h(v) \leq \text{true cost}(v, \text{goal})$ for all $v$ | Guarantees optimal path         |
| Consistent   | $h(v) \leq w(v, u) + h(u)$ for all edges $(v, u)$        | No re-expansion of nodes        |
| Inadmissible | Overestimates true cost                                  | Faster but may not find optimal |

**Theorem.** A\* with an admissible heuristic finds an optimal path.

**Proof.** When A* selects a goal node for expansion, its $g$-value is optimal. If not, there exists
a suboptimal path to the goal with cost $g' \gt{} g^*$. Let $v$ be the first node on this suboptimal
path not yet expanded. By admissibility:
$f(v) = g(v) + h(v) \leq g^* + h(v) \leq g^* + \text{true}(v, \text{goal}) \leq g^* + (g' - g(v)) = g'$.
Since A\* expands the node with minimum $f$, it would expand $v$ before the goal on the suboptimal
path — contradiction. $\square$

### Common Heuristics

| Problem      | Heuristic                      | Admissible? |
| ------------ | ------------------------------ | ----------- | --- | --------- | --- | --- |
| Grid (4-dir) | Manhattan distance: $          | x_1 - x_2   | +   | y_1 - y_2 | $   | Yes |
| Grid (8-dir) | Chebyshev distance: $\max(     | dx          | ,   | dy        | )$  | Yes |
| Euclidean    | Straight-line distance         | Yes         |
| General      | MST cost to goal (precomputed) | Yes         |

---

## 3. Minimum Spanning Tree Algorithms

### Kruskal's Algorithm (Detailed)

See [Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/05-graphs) for the basic
algorithm. Here we formalise the Union-Find data structure.

#### Union-Find with Path Compression and Union by Rank

```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False
        if self.rank[rx] < self.rank[ry]:
            rx, ry = ry, rx
        self.parent[ry] = rx
        if self.rank[rx] == self.rank[ry]:
            self.rank[rx] += 1
        return True
```

**Theorem (Inverse Ackermann).** With path compression and union by rank, $m$ Union-Find operations
on $n$ elements take $O(m \cdot \alpha(n))$ time, where $\alpha$ is the inverse Ackermann function
($\alpha(n) \leq 4$ for all practical $n$).

### Prim's Algorithm (Detailed)

Prim's grows the MST one vertex at a time, always adding the minimum-weight edge connecting the MST
to a non-MST vertex.

**Complexity comparison:**

| Implementation   | Time               |
| ---------------- | ------------------ |
| Adjacency matrix | $O(V^2)$           |
| Binary heap      | $O((V + E)\log V)$ |
| Fibonacci heap   | $O(E + V \log V)$  |

---

## 4. Travelling Salesman Problem (TSP)

### Problem Definition

Given a complete weighted graph, find the shortest possible route that visits every vertex exactly
once and returns to the origin.

### NP-Hardness

TSP is **NP-hard** — no polynomial-time algorithm is known (and likely none exists, assuming P ≠
NP). The brute-force approach checks all $(n-1)!$ permutations.

### Heuristic Approaches

#### Nearest Neighbour

```python
def nearest_neighbour_tsp(dist_matrix, start=0):
    n = len(dist_matrix)
    visited = [False] * n
    visited[start] = True
    path = [start]
    total = 0

    for _ in range(n - 1):
        current = path[-1]
        best_next = -1
        best_dist = float('inf')
        for j in range(n):
            if not visited[j] and dist_matrix[current][j] < best_dist:
                best_dist = dist_matrix[current][j]
                best_next = j
        visited[best_next] = True
        path.append(best_next)
        total += best_dist

    total += dist_matrix[path[-1]][path[0]]
    return total, path
```

**Complexity:** $O(n^2)$. **Guarantee:** At most $O(\log n)$ times the optimal cost (for metric
TSP).

#### 2-Opt Improvement

Repeatedly remove two edges and reconnect in the other way if it reduces the total distance.

```python
def two_opt(path, dist_matrix):
    improved = True
    while improved:
        improved = False
        for i in range(len(path) - 2):
            for j in range(i + 2, len(path)):
                if j == len(path) - 1 and i == 0:
                    continue
                d1 = dist_matrix[path[i]][path[i+1]] + dist_matrix[path[j]][path[(j+1) % len(path)]]
                d2 = dist_matrix[path[i]][path[j]] + dist_matrix[path[i+1]][path[(j+1) % len(path)]]
                if d2 < d1:
                    path[i+1:j+1] = reversed(path[i+1:j+1])
                    improved = True
    return path
```

**Complexity:** Each iteration is $O(n^2)$. Typically converges in few iterations.

---

## 5. Floyd-Warshall Algorithm

### Problem

Find shortest paths between **all pairs** of vertices.

### Algorithm

$$\text{dist}^{(k)}[i][j] = \min\left(\text{dist}^{(k-1)}[i][j],\ \text{dist}^{(k-1)}[i][k] + \text{dist}^{(k-1)}[k][j]\right)$$

```python
def floyd_warshall(graph):
    n = graph.n
    dist = [[float('inf')] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
    for u in range(n):
        for v, w in graph.adj[u]:
            dist[u][v] = w

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist
```

**Complexity:** $O(V^3)$ time, $O(V^2)$ space.

**Handles:** Negative weights (but not negative cycles — detect by checking if
$\text{dist}[i][i] \lt{} 0$).

---

## 6. Algorithm Selection Guide

| Problem                          | Algorithm         | Complexity           |
| -------------------------------- | ----------------- | -------------------- |
| Shortest path (unweighted)       | BFS               | $O(V + E)$           |
| Shortest path (weighted, ≥ 0)    | Dijkstra          | $O((V+E)\log V)$     |
| Shortest path (with heuristic)   | A\*               | Depends on heuristic |
| Shortest path (negative weights) | Bellman-Ford      | $O(VE)$              |
| All-pairs shortest path          | Floyd-Warshall    | $O(V^3)$             |
| MST                              | Kruskal / Prim    | $O(E \log V)$        |
| Topological sort                 | DFS               | $O(V + E)$           |
| TSP (approximate)                | Nearest neighbour | $O(n^2)$             |

---

## Problem Set

**Problem 1.** Apply A\* to find the shortest path from S to G in the following grid. Use Manhattan
distance as the heuristic. Obstacles marked with #.

```
S . . # .
. # . # .
. # . . .
. . . # .
. # . . G
```

<details>
<summary>Answer</summary>

Coordinates: S=(0,0), G=(4,4). Grid is 5×5.

$h(v) = |x_v - 4| + |y_v - 4|$

Open set ordered by $f = g + h$:

| Expand | Node  | g   | h   | f   | Path so far   |
| ------ | ----- | --- | --- | --- | ------------- |
| 1      | (0,0) | 0   | 8   | 8   | S             |
| 2      | (0,1) | 1   | 7   | 8   | S→(0,1)       |
| 3      | (1,0) | 1   | 7   | 8   | S→(1,0)       |
| 4      | (0,2) | 2   | 6   | 8   | S→(0,1)→(0,2) |
| ...    | ...   | ... | ... | ... | ...           |

The optimal path is: (0,0)→(0,1)→(0,2)→(1,2)→(2,2)→(2,3)→(3,3)... but (3,3) is blocked (#). So:
(2,2)→(2,3)→(2,4)→(3,4)→(4,4). Cost: 8.

</details>

**Problem 2.** Prove that the Manhattan distance heuristic is admissible for grid-based pathfinding
with 4-directional movement.

<details>
<summary>Answer</summary>

**Proof.** In a grid with 4-directional movement, the shortest path from $(x_1, y_1)$ to
$(x_2, y_2)$ requires at least $|x_1 - x_2|$ horizontal moves and $|y_1 - y_2|$ vertical moves
(since each move changes one coordinate by exactly 1). Therefore, the minimum number of moves is
$|x_1 - x_2| + |y_1 - y_2|$, which is exactly the Manhattan distance. Since the heuristic equals the
true minimum cost, it never overestimates. $\square$

</details>

**Problem 3.** When would you choose Prim's algorithm over Kruskal's algorithm for finding an MST?

<details>
<summary>Answer</summary>

Choose Prim's when:

1. The graph is **dense** ($E \approx V^2$): Prim's with adjacency matrix runs in $O(V^2)$, while
   Kruskal's requires sorting $O(V^2)$ edges → $O(V^2 \log V)$
2. The graph is stored as an **adjacency matrix** (Prim's works naturally with this representation)
3. You need the MST starting from a specific vertex

Choose Kruskal's when:

1. The graph is **sparse** ($E \ll V^2$): Kruskal's with sorting is $O(E \log V)$
2. You want to find only certain edges of the MST (stop early)
3. The edges are already sorted or can be streamed

</details>

**Problem 4.** Explain what happens to Dijkstra's algorithm if there is a negative edge in the
graph. Give a specific counterexample.

<details>
<summary>Answer</summary>

Consider vertices S, A, B with edges: S→A (weight 1), A→B (weight -3), S→B (weight 2).

Dijkstra: Extract S (dist: S=0, A=1, B=2). Extract A (dist=1). B = 1 + (-3) = -2 < 2. Update B=-2.
Extract B (dist=-2). Result: S→A→B, cost -2. This is actually correct!

The failure occurs when a shorter path goes through an already-finalized vertex. Example: S→A (1),
S→B (4), A→B (-2). Dijkstra: S(0), A(1), B(4). Extract A. B = 1+(-2) = -1 < 4, update B=-1. Extract
B. Result: S→A→B, cost -1. Correct.

The real failure: S→A (3), S→C (7), A→B (2), B→C (-2). Dijkstra: S(0). A=3, C=7. Extract A(3). B=5.
Extract C(7). B = 7+(-2) = 5 = no improvement. But A→B→C = 3+2-2 = 3 < 7! B is already finalized at
5, but C should be 3. The algorithm returns C=7, missing the better path.

Wait — C is already extracted. The issue is that when C is extracted at distance 7, a shorter path
through B (distance 5 → C = 3) exists but is never explored because B hasn't been processed yet and
C is already marked as visited.

</details>

**Problem 5.** The Floyd-Warshall algorithm computes all-pairs shortest paths in $O(V^3)$ time. For
a sparse graph with $E = O(V)$, is this more efficient than running Dijkstra from every vertex?

<details>
<summary>Answer</summary>

Running Dijkstra from every vertex:
$V \times O((V + E)\log V) = V \times O(V \log V) = O(V^2 \log V)$.

Floyd-Warshall: $O(V^3)$.

For sparse graphs: $V^2 \log V \ll V^3$ for large $V$. So running Dijkstra from every vertex is more
efficient for sparse graphs.

For dense graphs ($E = O(V^2)$): Dijkstra from every vertex = $O(V^2 \log V + V^3 \log V)$... wait:
$V \times O((V + V^2)\log V) = V \times O(V^2 \log V) = O(V^3 \log V)$. Floyd-Warshall = $O(V^3)$.
So Floyd-Warshall is better for dense graphs.

</details>

**Problem 6.** Apply the nearest neighbour heuristic to the TSP with distance matrix:

```
     A    B    C    D
A  [  0,  10,  15,  20 ]
B  [ 10,   0,  35,  25 ]
C  [ 15,  35,   0,  30 ]
D  [ 20,  25,  30,   0 ]
```

Starting from A.

<details>
<summary>Answer</summary>

Start: A. Current = A.

Nearest unvisited from A: B (10). Path: A→B, cost: 10. Nearest unvisited from B: D (25). Path:
A→B→D, cost: 35. Nearest unvisited from D: C (30). Path: A→B→D→C, cost: 65. Return to A: C→A (15).
Total: 80.

Path: A→B→D→C→A, total cost: 80.

</details>

**Problem 7.** Explain why the 2-opt heuristic improves the TSP solution. Does it always find the
optimal solution?

<details>
<summary>Answer</summary>

2-opt removes two edges from the current tour and reconnects the two resulting paths in the other
possible way. If the new total distance is shorter, the swap is accepted. This corrects "crossing"
edges, which are always suboptimal in metric TSP.

2-opt does **not** always find the optimal solution. It can get stuck in local optima —
configurations where no single 2-opt swap improves the tour, but a sequence of swaps (or a swap
involving more edges, like 3-opt) would. However, for many practical instances, 2-opt produces
near-optimal solutions.

</details>

**Problem 8.** How would you detect a negative cycle using the Floyd-Warshall algorithm?

<details>
<summary>Answer</summary>

After running Floyd-Warshall, check the diagonal of the distance matrix. If
$\text{dist}[i][i] \lt{} 0$ for any vertex $i$, there exists a negative cycle through $i$.

**Proof.** $\text{dist}[i][i]$ represents the shortest path from $i$ back to $i$. If this is
negative, there exists a cycle with total weight $\lt{} 0$ through vertex $i$. This cycle can be
traversed repeatedly to make the shortest path arbitrarily negative, meaning shortest paths are
undefined. $\square$

</details>

**Problem 9.** Compare A\* and Dijkstra in terms of completeness, optimality, and efficiency.

<details>
<summary>Answer</summary>

| Property    | Dijkstra           | A\* (admissible)                           |
| ----------- | ------------------ | ------------------------------------------ |
| Complete?   | Yes                | Yes                                        |
| Optimal?    | Yes                | Yes (with admissible heuristic)            |
| Time        | Explores all nodes | Explores fewer nodes (guided by heuristic) |
| Space       | $O(V)$             | $O(V)$ (often less in practice)            |
| Requirement | None               | Heuristic function needed                  |

A* dominates Dijkstra: whenever $h(v) = 0$ for all $v$, A* reduces to Dijkstra. With a good
heuristic, A\* explores significantly fewer nodes.

</details>

**Problem 10.** Given a weighted directed graph, explain how to find the shortest path that visits
exactly $k$ edges from vertex $s$ to vertex $t$. State the time complexity.

<details>
<summary>Answer</summary>

Use **dynamic programming**. Let $dp[i][v]$ = shortest path from $s$ to $v$ using exactly $i$ edges.

Recurrence: $dp[i][v] = \min_{(u,v) \in E}(dp[i-1][u] + w(u,v))$

Base case: $dp[0][s] = 0$, $dp[0][v] = \infty$ for $v \neq s$.

Answer: $dp[k][t]$.

Time complexity: $O(k \cdot E)$ — we compute $k+1$ tables, each requiring scanning all edges. Space:
$O(k \cdot V)$ (or $O(V)$ with rolling array optimisation).

For $k = V-1$, this is equivalent to the Bellman-Ford algorithm.

For revision on graphs, see
[Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/05-graphs).

</details>
