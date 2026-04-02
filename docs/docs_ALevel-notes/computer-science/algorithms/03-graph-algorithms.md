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

See [Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/graphs) for the full
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

See [Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/graphs) for the basic
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

:::info Board-specific **AQA** requires Dijkstra's shortest path algorithm with trace tables. **CIE
(9618)** requires Dijkstra's; may also require minimum spanning tree (Prim's or Kruskal's). **OCR
(A)** requires Dijkstra's, Prim's, and Kruskal's algorithms with step-by-step tracing. **Edexcel**
covers basic graph traversal (BFS, DFS) and shortest path. :::

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
[Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/graphs).

</details>

---

## Problems

**Problem 1.** Apply Dijkstra's algorithm to find the shortest path from vertex A to all other
vertices in the following weighted graph. Edges: A–B(4), A–C(2), B–C(1), B–D(5), C–D(8), C–E(10),
D–E(2). Show a step-by-step trace table.

<details>
<summary>Hint</summary>

Use a table with columns: Visited, A, B, C, D, E. At each step, visit the unvisited vertex with the
smallest known distance, then update distances to its unvisited neighbours.

</details>

<details>
<summary>Answer</summary>

| Step | Visited | A     | B     | C     | D     | E      |
| ---- | ------- | ----- | ----- | ----- | ----- | ------ |
| Init | —       | 0     | ∞     | ∞     | ∞     | ∞      |
| 1    | A       | **0** | 4     | 2     | ∞     | ∞      |
| 2    | C       | **0** | 3     | **2** | 10    | 12     |
| 3    | B       | **0** | **3** | **2** | 8     | 12     |
| 4    | D       | **0** | **3** | **2** | **8** | 10     |
| 5    | E       | **0** | **3** | **2** | **8** | **10** |

**Working:**

- Step 1: Visit A (dist 0). Update B = 0+4 = 4, C = 0+2 = 2.
- Step 2: Visit C (dist 2). Update B = min(4, 2+1) = 3, D = 2+8 = 10, E = 2+10 = 12.
- Step 3: Visit B (dist 3). Update D = min(10, 3+5) = 8.
- Step 4: Visit D (dist 8). Update E = min(12, 8+2) = 10.
- Step 5: Visit E (dist 10). No updates.

**Shortest paths from A:** A→0, B→3 (A→C→B), C→2 (A→C), D→8 (A→C→B→D), E→10 (A→C→B→D→E).

</details>

**Problem 2.** Using Dijkstra's algorithm, find the shortest path from S to T in the following
graph. Vertices: S, A, B, C, D, T. Edges: S–A(2), S–B(6), A–B(3), A–C(5), B–D(1), C–D(2), C–T(6),
D–T(4). Show the priority queue state at each step.

<details>
<summary>Hint</summary>

At each step, extract the vertex with the minimum tentative distance from the priority queue. Show
the queue contents after each extraction and relaxation.

</details>

<details>
<summary>Answer</summary>

| Step | Visit | Dist[S] | Dist[A] | Dist[B] | Dist[C] | Dist[D] | Dist[T] | Queue after extraction |
| ---- | ----- | ------- | ------- | ------- | ------- | ------- | ------- | ---------------------- |
| Init | —     | 0       | ∞       | ∞       | ∞       | ∞       | ∞       | `{(0,S)}`              |
| 1    | S     | **0**   | 2       | 6       | ∞       | ∞       | ∞       | `{(2,A),(6,B)}`        |
| 2    | A     | **0**   | **2**   | 5       | 7       | ∞       | ∞       | `{(5,B),(7,C)}`        |
| 3    | B     | **0**   | **2**   | **5**   | 7       | 6       | ∞       | `{(6,D),(7,C)}`        |
| 4    | D     | **0**   | **2**   | **5**   | 7       | **6**   | 10      | `{(7,C),(10,T)}`       |
| 5    | C     | **0**   | **2**   | **5**   | **7**   | **6**   | 10      | `{(10,T)}`             |
| 6    | T     | **0**   | **2**   | **5**   | **7**   | **6**   | **10**  | `{}`                   |

**Working:**

- Step 1: Visit S. Relax: A = 0+2 = 2, B = 0+6 = 6.
- Step 2: Visit A. Relax: B = min(6, 2+3) = 5, C = 2+5 = 7.
- Step 3: Visit B. Relax: D = 5+1 = 6.
- Step 4: Visit D. Relax: T = min(∞, 6+4) = 10.
- Step 5: Visit C. Relax: D = min(6, 7+2) = 6 (no change), T = min(10, 7+6) = 10 (no change).
- Step 6: Visit T. Done.

**Shortest path S→T: S→A→B→D→T, cost 10.**

</details>

**Problem 3.** Apply Kruskal's algorithm to find the minimum spanning tree of a graph with vertices
`{A, B, C, D, E}` and edges: (A,B,4), (A,C,2), (B,C,1), (B,D,5), (C,D,8), (C,E,10), (D,E,2),
(A,D,7). List the edges selected in order and state the total weight.

<details>
<summary>Hint</summary>

First, sort all edges by weight in ascending order. Then add edges one at a time, skipping any that
would create a cycle (use the Union-Find concept to track connected components).

</details>

<details>
<summary>Answer</summary>

**Edges sorted by weight:**

| Order | Edge | Weight |
| ----- | ---- | ------ |
| 1     | B–C  | 1      |
| 2     | A–C  | 2      |
| 3     | D–E  | 2      |
| 4     | A–B  | 4      |
| 5     | B–D  | 5      |
| 6     | A–D  | 7      |
| 7     | C–D  | 8      |
| 8     | C–E  | 10     |

**Kruskal's trace:**

| Step | Edge | Weight | Action                       | MST edges              | Components          | Total |
| ---- | ---- | ------ | ---------------------------- | ---------------------- | ------------------- | ----- |
| 1    | B–C  | 1      | Add                          | `{B–C}`                | `{A},{B,C},{D},{E}` | 1     |
| 2    | A–C  | 2      | Add                          | `{B–C, A–C}`           | `{A,B,C},{D},{E}`   | 3     |
| 3    | D–E  | 2      | Add                          | `{B–C, A–C, D–E}`      | `{A,B,C},{D,E}`     | 5     |
| 4    | A–B  | 4      | Skip (A,B in same component) | `{B–C, A–C, D–E}`      | `{A,B,C},{D,E}`     | 5     |
| 5    | B–D  | 5      | Add                          | `{B–C, A–C, D–E, B–D}` | `{A,B,C,D,E}`       | 10    |

All 5 vertices are now connected (4 edges in MST). Algorithm terminates.

**MST edges:** B–C(1), A–C(2), D–E(2), B–D(5). **Total weight: 10.**

</details>

**Problem 4.** Apply Kruskal's algorithm to find the MST of a graph with vertices `{P, Q, R, S, T}`
and edges: (P,Q,3), (P,R,7), (Q,R,4), (Q,S,6), (R,S,8), (R,T,5), (S,T,2). List edges in selection
order, show when cycles are rejected, and give the total MST weight.

<details>
<summary>Hint</summary>

Sort edges by weight first: (S,T,2), (P,Q,3), (Q,R,4), (R,T,5), (Q,S,6), (P,R,7), (R,S,8). Track
connected components as you go.

</details>

<details>
<summary>Answer</summary>

**Edges sorted by weight:** (S,T,2), (P,Q,3), (Q,R,4), (R,T,5), (Q,S,6), (P,R,7), (R,S,8).

| Step | Edge | Weight | Action | MST edges              | Components          | Total |
| ---- | ---- | ------ | ------ | ---------------------- | ------------------- | ----- |
| 1    | S–T  | 2      | Add    | `{S–T}`                | `{S,T},{P},{Q},{R}` | 2     |
| 2    | P–Q  | 3      | Add    | `{S–T, P–Q}`           | `{S,T},{P,Q},{R}`   | 5     |
| 3    | Q–R  | 4      | Add    | `{S–T, P–Q, Q–R}`      | `{S,T},{P,Q,R}`     | 9     |
| 4    | R–T  | 5      | Add    | `{S–T, P–Q, Q–R, R–T}` | `{P,Q,R,S,T}`       | 14    |

All 5 vertices connected (4 edges). Algorithm terminates.

**MST edges:** S–T(2), P–Q(3), Q–R(4), R–T(5). **Total weight: 14.**

</details>

**Problem 5.** Apply Prim's algorithm starting from vertex A to find the MST of a graph with
vertices `{A, B, C, D, E, F}` and edges: (A,B,6), (A,C,1), (A,D,5), (B,C,5), (B,E,3), (C,D,5),
(C,E,6), (C,F,4), (D,F,2), (E,F,6). Show the order vertices are added and the total weight.

<details>
<summary>Hint</summary>

Maintain a set of vertices in the MST and a priority queue of crossing edges. At each step, add the
minimum-weight edge that connects a vertex in the MST to a vertex outside it.

</details>

<details>
<summary>Answer</summary>

| Step | MST vertices    | Crossing edges (weight)                                | Min edge | Add vertex | MST weight |
| ---- | --------------- | ------------------------------------------------------ | -------- | ---------- | ---------- |
| 1    | `{A}`           | A–B(6), A–C(1), A–D(5)                                 | A–C(1)   | C          | 1          |
| 2    | `{A,C}`         | A–B(6), A–D(5), B–C(5), C–D(5), C–E(6), C–F(4)         | C–F(4)   | F          | 5          |
| 3    | `{A,C,F}`       | A–B(6), A–D(5), B–C(5), C–D(5), C–E(6), D–F(2), E–F(6) | D–F(2)   | D          | 7          |
| 4    | `{A,C,F,D}`     | A–B(6), B–C(5), C–E(6), E–F(6)                         | B–C(5)   | B          | 12         |
| 5    | `{A,C,F,D,B}`   | B–E(3), C–E(6), E–F(6)                                 | B–E(3)   | E          | 15         |
| 6    | `{A,C,F,D,B,E}` | —                                                      | —        | Done       | 15         |

**MST edges:** A–C(1), C–F(4), D–F(2), B–C(5), B–E(3). **Total weight: 15.**

</details>

**Problem 6.** Apply Prim's algorithm starting from vertex S to find the MST of a graph with
vertices `{S, U, V, W, X}` and edges: (S,U,2), (S,V,6), (U,V,5), (U,W,8), (V,W,3), (V,X,7), (W,X,4).
Show each step with the candidate edges and the vertex added.

<details>
<summary>Hint</summary>

Start with MST = `{S}`. The crossing edges are those from S to non-MST vertices. Always pick the
minimum-weight crossing edge.

</details>

<details>
<summary>Answer</summary>

| Step | MST vertices  | Crossing edges         | Min edge | Add  | Running total |
| ---- | ------------- | ---------------------- | -------- | ---- | ------------- |
| 1    | `{S}`         | S–U(2), S–V(6)         | S–U(2)   | U    | 2             |
| 2    | `{S,U}`       | S–V(6), U–V(5), U–W(8) | U–V(5)   | V    | 7             |
| 3    | `{S,U,V}`     | U–W(8), V–W(3), V–X(7) | V–W(3)   | W    | 10            |
| 4    | `{S,U,V,W}`   | V–X(7), W–X(4)         | W–X(4)   | X    | 14            |
| 5    | `{S,U,V,W,X}` | —                      | —        | Done | 14            |

**MST edges:** S–U(2), U–V(5), V–W(3), W–X(4). **Total weight: 14.**

</details>

**Problem 7.** For an unweighted graph with vertices `{A, B, C, D, E, F}` and edges
`{A–B, A–C, B–D, C–D, D–E, D–F, E–F}`, compare the process of finding the shortest path from A to F
using Dijkstra's algorithm versus BFS. Explain why BFS is sufficient and more efficient for
unweighted graphs.

<details>
<summary>Hint</summary>

In an unweighted graph, all edge weights are effectively 1. Think about how this affects Dijkstra's
priority queue compared to BFS's FIFO queue.

</details>

<details>
<summary>Answer</summary>

**Dijkstra's algorithm (all weights = 1):**

| Step | Visit | Dist[A] | Dist[B] | Dist[C] | Dist[D] | Dist[E] | Dist[F] |
| ---- | ----- | ------- | ------- | ------- | ------- | ------- | ------- |
| 1    | A     | **0**   | 1       | 1       | ∞       | ∞       | ∞       |
| 2    | B     | **0**   | **1**   | 1       | 2       | ∞       | ∞       |
| 3    | C     | **0**   | **1**   | **1**   | 2       | ∞       | ∞       |
| 4    | D     | **0**   | **1**   | **1**   | **2**   | 3       | 3       |
| 5    | E     | **0**   | **1**   | **1**   | **2**   | **3**   | 3       |
| 6    | F     | **0**   | **1**   | **1**   | **2**   | **3**   | **3**   |

**BFS from A:**

| Level | Vertices explored | Distances set |
| ----- | ----------------- | ------------- |
| 0     | A                 | A = 0         |
| 1     | B, C              | B = 1, C = 1  |
| 2     | D                 | D = 2         |
| 3     | E, F              | E = 3, F = 3  |

**Both produce the same result:** A→0, B→1, C→1, D→2, E→3, F→3. Shortest path A→F has length 3.

**Why BFS is more efficient for unweighted graphs:**

- Dijkstra's requires a priority queue with $O(\log V)$ insert/extract-min: total $O((V+E)\log V)$.
- BFS uses a simple FIFO queue with $O(1)$ enqueue/dequeue: total $O(V+E)$.
- In unweighted graphs, BFS naturally explores vertices in order of increasing distance, so it
  produces the same shortest paths as Dijkstra without the overhead of a priority queue.
- Dijkstra's algorithm is overkill when all weights are equal — the priority queue adds unnecessary
  logarithmic overhead.

</details>

**Problem 8.** Explain why running Dijkstra's algorithm on an unweighted graph produces the same
shortest paths as BFS, but with worse time complexity. Support your answer with a complexity
comparison.

<details>
<summary>Hint</summary>

Consider how Dijkstra's priority queue behaves when all edge weights are 1. Does the priority queue
degenerate into something simpler?

</details>

<details>
<summary>Answer</summary>

**Correctness equivalence:** When all edge weights are 1, the cumulative distance to a vertex equals
the number of edges traversed to reach it. Dijkstra's always extracts the vertex with the minimum
distance first, which is exactly the vertex closest (fewest edges) from the source. This is the same
order BFS explores vertices (level by level). Therefore, both algorithms find identical shortest
paths.

**Complexity comparison:**

| Aspect           | BFS         | Dijkstra (binary heap) |
| ---------------- | ----------- | ---------------------- |
| Queue operations | $O(1)$ each | $O(\log V)$ each       |
| Total time       | $O(V + E)$  | $O((V + E) \log V)$    |
| Data structure   | FIFO queue  | Priority queue         |
| Space            | $O(V)$      | $O(V)$                 |

The priority queue operations (insert, extract-min, decrease-key) each take $O(\log V)$ time,
whereas BFS's queue operations take $O(1)$ time. For an unweighted graph with $V = 10,000$ and
$E = 50,000$:

- BFS: $\approx 60,000$ operations
- Dijkstra: $\approx 60,000 \times 14 \approx 840,000$ operations

**Conclusion:** BFS is always preferred for unweighted graphs due to its simpler $O(V + E)$
complexity. Dijkstra's is only necessary when edge weights vary.

</details>

**Problem 9.** A company needs to connect all 8 of its office buildings with fibre optic cables.
Explain whether they should use a minimum spanning tree algorithm or a shortest path algorithm. What
if they only need to connect the headquarters to every other office (but offices don't need to
connect to each other)?

<details>
<summary>Hint</summary>

Consider the difference between connecting all vertices with minimum total edge weight (MST) versus
finding optimal paths from one source to all other vertices (shortest path tree).

</details>

<details>
<summary>Answer</summary>

**Scenario 1 — Connect all offices to each other:** Use a **minimum spanning tree (MST)** algorithm
(Kruskal's or Prim's). The MST connects all vertices with the minimum total edge weight. Since the
company wants every office reachable from every other office with the least total cabling cost, the
MST is the optimal solution. Any other connected graph would have equal or greater total weight.

**Scenario 2 — Connect headquarters to every office (star topology):** Use **Dijkstra's shortest
path algorithm** from the headquarters. This finds the shortest path from the headquarters to each
individual office. The result is a **shortest path tree**, which may differ from the MST — it
minimises the path from headquarters to each office, not the total cabling cost.

**Key difference:**

| Objective                           | Algorithm | Result               |
| ----------------------------------- | --------- | -------------------- |
| Minimise total cable cost           | MST       | Minimum total weight |
| Minimise HQ-to-each-office distance | Dijkstra  | Shortest paths       |

The shortest path tree from HQ may use more total cable than the MST. Conversely, the MST may route
traffic between some offices through longer paths than necessary. The choice depends on whether the
priority is minimising infrastructure cost (MST) or minimising communication latency (shortest
paths).

</details>

**Problem 10.** (Exam-style) A road network has vertices `{A, B, C, D, E}` with weighted edges:
A–B(7), A–D(5), B–C(8), B–D(9), B–E(7), C–E(5), D–E(15).

(a) Use Dijkstra's algorithm to find the shortest path from A to E. Show all working. (b) Use Prim's
algorithm starting from A to find the minimum spanning tree. Show all working. (c) State the total
weight of the shortest path from A to E and the total weight of the MST. (d) Explain why the
shortest path from A to E is not necessarily part of the MST.

<details>
<summary>Hint</summary>

For part (a), maintain a table of distances as you visit each vertex. For part (b), track which
edges cross the MST boundary at each step. For part (d), think about the different optimisation
objectives of each algorithm.

</details>

<details>
<summary>Answer</summary>

**(a) Dijkstra's algorithm from A to E:**

| Step | Visit | Dist[A] | Dist[B] | Dist[C] | Dist[D] | Dist[E] |
| ---- | ----- | ------- | ------- | ------- | ------- | ------- |
| Init | —     | 0       | ∞       | ∞       | ∞       | ∞       |
| 1    | A     | **0**   | 7       | ∞       | 5       | ∞       |
| 2    | D     | **0**   | 7       | ∞       | **5**   | 20      |
| 3    | B     | **0**   | **7**   | 15      | **5**   | 14      |
| 4    | E     | **0**   | **7**   | 15      | **5**   | **14**  |
| 5    | C     | **0**   | **7**   | **15**  | **5**   | **14**  |

**Working:**

- Step 1: Visit A(0). B = 0+7 = 7, D = 0+5 = 5.
- Step 2: Visit D(5). E = 5+15 = 20.
- Step 3: Visit B(7). C = 7+8 = 15, E = min(20, 7+7) = 14.
- Step 4: Visit E(14). C = min(15, 14+5) = 15 (no change).
- Step 5: Visit C(15). Done.

**Shortest path A→E: A→B→E, cost 14.**

**(b) Prim's algorithm from A:**

| Step | MST vertices | Crossing edges                  | Min edge | Add | Total |
| ---- | ------------ | ------------------------------- | -------- | --- | ----- |
| 1    | `{A}`        | A–B(7), A–D(5)                  | A–D(5)   | D   | 5     |
| 2    | `{A,D}`      | A–B(7), D–E(15), B–D(9)         | A–B(7)   | B   | 12    |
| 3    | `{A,D,B}`    | D–E(15), B–C(8), B–E(7), B–D(9) | B–E(7)   | E   | 19    |
| 4    | `{A,D,B,E}`  | B–C(8), C–E(5)                  | C–E(5)   | C   | 24    |

**MST edges:** A–D(5), A–B(7), B–E(7), C–E(5). **Total weight: 24.**

**(c)** Shortest path A→E: **14**. MST total weight: **24**.

**(d)** The shortest path and MST optimise different objectives:

- The **shortest path** minimises the cost between two specific vertices (A and E). The optimal path
  A→B→E (cost 14) is the cheapest route from A to E alone.
- The **MST** minimises the **total** weight of all edges needed to connect all vertices. It must
  make trade-offs — for example, including the cheap edge C–E(5) instead of a potentially shorter
  path through D–E(15).
- The MST includes edge A–D(5), which is not part of the shortest A→E path. Conversely, the shortest
  path uses B–E(7), which the MST also includes, but the overall structure differs because the MST
  must globally optimise across all vertex pairs, not just one pair.

In general, the shortest path between two vertices is a subgraph of the shortest path tree from the
source, which may differ from the MST. These are different optimisation problems with different
solutions.

</details>
