---
title: Graphs
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: graphs
---

## 1. Graph Fundamentals

### Definition

A **graph** $G = (V, E)$ consists of a set of **vertices** (nodes) $V$ and a set of **edges**
$E \subseteq V \times V$.

- **Undirected graph:** Edges have no direction; $(u, v) = (v, u)$
- **Directed graph (digraph):** Edges are ordered pairs; $(u, v) \neq (v, u)$
- **Weighted graph:** Each edge has an associated weight $w: E \to \mathbb{R}$

### Terminology

| Term       | Definition                                                   |
| ---------- | ------------------------------------------------------------ |
| Adjacent   | Two vertices connected by an edge                            |
| Degree     | Number of edges incident to a vertex (undirected)            |
| In-degree  | Number of incoming edges (directed)                          |
| Out-degree | Number of outgoing edges (directed)                          |
| Path       | Sequence of vertices where consecutive vertices are adjacent |
| Cycle      | Path that starts and ends at the same vertex                 |
| Connected  | There is a path between every pair of vertices               |
| DAG        | Directed Acyclic Graph — a directed graph with no cycles     |

**Theorem (Handshaking Lemma).** The sum of all vertex degrees equals $2|E|$.

**Proof.** Each edge contributes 1 to the degree of each of its two endpoints. Summing degrees
counts each edge exactly twice. $\square$

---

## 2. Graph Representations

### Adjacency Matrix

An $n \times n$ matrix $A$ where $A[i][j] = 1$ if edge $(i, j)$ exists (0 otherwise). For weighted
graphs, $A[i][j] = w(i,j)$.

| Property          | Value    |
| ----------------- | -------- |
| Space             | $O(n^2)$ |
| Add edge          | $O(1)$   |
| Remove edge       | $O(1)$   |
| Check adjacency   | $O(1)$   |
| List neighbours   | $O(n)$   |
| Iterate all edges | $O(n^2)$ |

**Best for:** Dense graphs ($|E| \approx n^2$).

### Adjacency List

An array of $n$ lists, where `adj[i]` contains all vertices adjacent to vertex $i$.

```python
class Graph:
    def __init__(self, n, directed=False):
        self.n = n
        self.adj = [[] for _ in range(n)]
        self.directed = directed

    def add_edge(self, u, v, weight=1):
        self.adj[u].append((v, weight))
        if not self.directed:
            self.adj[v].append((u, weight))
```

| Property          | Value                    |
| ----------------- | ------------------------ |
| Space             | $O(n + \lvert E \rvert)$ |
| Add edge          | $O(1)$                   |
| Remove edge       | $O(\text{degree})$       |
| Check adjacency   | $O(\text{degree})$       |
| List neighbours   | $O(\text{degree})$       |
| Iterate all edges | $O(n + \lvert E \rvert)$ |

**Best for:** Sparse graphs ($|E| \ll n^2$).

### Comparison

| Property      | Adjacency Matrix | Adjacency List  |
| ------------- | ---------------- | --------------- |
| Space         | $O(V^2)$         | $O(V + E)$      |
| Edge lookup   | $O(1)$           | $O(\text{deg})$ |
| Add edge      | $O(1)$           | $O(1)$          |
| Sparse graphs | Wasteful         | Efficient       |
| Dense graphs  | Efficient        | Slightly slower |

:::info
Board-specific

- **AQA** requires adjacency matrix and adjacency list representations; Dijkstra's algorithm for
  shortest path
- **CIE (9618)** requires graph representations and traversal; may include minimum spanning tree
  algorithms (Kruskal's, Prim's)
- **OCR (A)** requires adjacency matrix/list; Dijkstra's, Kruskal's, and Prim's algorithms
- **Edexcel** covers basic graph representations and traversals
:::

---

## 3. Graph Traversals

### 3.1 Breadth-First Search (BFS)

BFS explores vertices level by level, using a queue.

```python
from collections import deque

def bfs(graph, start):
    visited = [False] * graph.n
    distance = [-1] * graph.n
    queue = deque([start])
    visited[start] = True
    distance[start] = 0

    while queue:
        u = queue.popleft()
        for v, w in graph.adj[u]:
            if not visited[v]:
                visited[v] = True
                distance[v] = distance[u] + 1
                queue.append(v)

    return distance
```

**Theorem (BFS finds shortest paths).** In an unweighted graph, BFS from source $s$ computes the
shortest-path distance $d(s, v)$ for every vertex $v$.

**Proof.** We prove by induction on the distance $d$ that all vertices at distance $d$ from $s$ are
discovered (enqueued) at distance $d$, and no vertex is discovered at a distance greater than its
true shortest distance.

_Base case ($d = 0$)._ $s$ is at distance 0 and is discovered at distance 0.

_Inductive step._ Assume all vertices at distance $d$ are discovered at distance $d$. When a vertex
$u$ at distance $d$ is dequeued, all unvisited neighbours $v$ are at distance at most $d + 1$ (by
edge relaxation). If $v$ were at distance $\lt{} d + 1$, it would have been discovered earlier (by
the inductive hypothesis or a previous BFS level). So $v$ is at distance exactly $d + 1$ and is
discovered at that distance. No vertex can be discovered at distance $\gt{} d + 1$ through $u$,
since each edge adds exactly 1 to the path length. $\square$

**Complexity:** $O(V + E)$ — each vertex is visited once, each edge is examined at most twice (once
from each endpoint in undirected graphs).

### 3.2 Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking, using a stack (or recursion).

```python
def dfs(graph, start):
    visited = [False] * graph.n

    def dfs_visit(u):
        visited[u] = True
        for v, w in graph.adj[u]:
            if not visited[v]:
                dfs_visit(v)

    dfs_visit(start)
```

**Complexity:** $O(V + E)$ — same analysis as BFS.

### BFS vs DFS

| Property       | BFS                        | DFS                                                     |
| -------------- | -------------------------- | ------------------------------------------------------- |
| Data structure | Queue                      | Stack (recursion)                                       |
| Exploration    | Level by level             | Branch by branch                                        |
| Shortest path  | Yes (unweighted)           | No                                                      |
| Memory         | $O(V)$ (queue)             | $O(V)$ (recursion stack)                                |
| Use cases      | Shortest path, level order | Cycle detection, topological sort, connected components |

---

## 4. Dijkstra's Algorithm

### Problem

Find the shortest path from a source vertex $s$ to all other vertices in a **weighted graph with
non-negative weights**.

### Algorithm

```python
import heapq

def dijkstra(graph, source):
    dist = [float('inf')] * graph.n
    dist[source] = 0
    pq = [(0, source)]
    visited = [False] * graph.n

    while pq:
        d, u = heapq.heappop(pq)
        if visited[u]:
            continue
        visited[u] = True
        for v, w in graph.adj[u]:
            if not visited[v] and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))

    return dist
```

### Correctness Proof

**Theorem.** Dijkstra's algorithm computes the shortest-path distance from $s$ to every vertex $v$
in a graph with non-negative edge weights.

**Proof.** We prove by induction that when a vertex $u$ is extracted from the priority queue (marked
visited), $\text{dist}[u]$ equals the true shortest distance $d(s, u)$.

Let $S$ be the set of visited vertices. We maintain the **invariant**: for every $u \in S$,
$\text{dist}[u] = d(s, u)$.

_Base case._ $s$ is extracted first with $\text{dist}[s] = 0 = d(s, s)$. ✓

_Inductive step._ Let $u$ be the next vertex extracted. Assume for contradiction that
$\text{dist}[u] \gt{} d(s, u)$. Then there exists a shortest path $P$ from $s$ to $u$. Let $x$ be
the first vertex on $P$ not in $S$, and let $y$ be the predecessor of $x$ on $P$ ($y \in S$). Then:

$$\text{dist}[x] \leq \text{dist}[y] + w(y, x) = d(s, y) + w(y, x) = d(s, x) \leq d(s, u) < \text{dist}[u]$$

Since $\text{dist}[x] \lt{} \text{dist}[u]$, $x$ would have been extracted from the priority queue
before $u$ — contradiction. Therefore $\text{dist}[u] = d(s, u)$. $\square$

**Complexity:** With a binary heap: $O((V + E) \log V)$. Each vertex is extracted once ($O(\log V)$
each), and each edge causes at most one decrease-key ($O(\log V)$ each).

:::warning
Pitfall Dijkstra's algorithm **does not work** with negative edge weights. Use the
Bellman-Ford algorithm instead for graphs that may contain negative weights.
:::

---

## 5. Minimum Spanning Tree (MST)

### Definition

A **spanning tree** of a connected graph $G$ is a subgraph that is a tree and includes all vertices.
A **minimum spanning tree** is the spanning tree with the minimum total edge weight.

### Cut Property

**Lemma (Cut Property).** For any cut of the graph, the minimum-weight edge crossing the cut belongs
to **some** MST.

**Proof.** Let $e$ be the minimum-weight edge crossing cut $(S, V \setminus S)$. Suppose $e$ is not
in MST $T$. Adding $e$ to $T$ creates a cycle. This cycle must cross the cut at least twice (once
via $e$), so there exists another edge $e'$ in the cycle crossing the cut. Since $e$ is the
minimum-weight crossing edge, $w(e) \leq w(e')$. Replacing $e'$ with $e$ in $T$ yields a spanning
tree with weight $\leq w(T)$. Since $T$ is minimum, $w(e) = w(e')$, and the new tree is also an MST
containing $e$. $\square$

### Kruskal's Algorithm

```python
def kruskal(graph):
    edges = []
    for u in range(graph.n):
        for v, w in graph.adj[u]:
            if u < v:
                edges.append((w, u, v))
    edges.sort()

    parent = list(range(graph.n))
    rank = [0] * graph.n

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry:
            return False
        if rank[rx] < rank[ry]:
            rx, ry = ry, rx
        parent[ry] = rx
        if rank[rx] == rank[ry]:
            rank[rx] += 1
        return True

    mst = []
    for w, u, v in edges:
        if union(u, v):
            mst.append((u, v, w))
            if len(mst) == graph.n - 1:
                break

    return mst
```

**Correctness.** Kruskal's algorithm is correct by the cut property. When an edge $e$ is added, the
vertices it connects are in different components — this defines a cut where $e$ is the minimum
crossing edge (since edges are processed in sorted order). By the cut property, $e$ belongs to some
MST.

**Complexity:** Sorting: $O(E \log E)$. Union-Find operations: $O(E \cdot \alpha(V))$, where
$\alpha$ is the inverse Ackermann function (effectively $O(1)$). Total: $O(E \log E) = O(E \log V)$.

### Prim's Algorithm

```python
def prim(graph, start):
    dist = [float('inf')] * graph.n
    in_mst = [False] * graph.n
    dist[start] = 0
    pq = [(0, start)]
    mst_weight = 0

    while pq:
        d, u = heapq.heappop(pq)
        if in_mst[u]:
            continue
        in_mst[u] = True
        mst_weight += d
        for v, w in graph.adj[u]:
            if not in_mst[v] and w < dist[v]:
                dist[v] = w
                heapq.heappush(pq, (w, v))

    return mst_weight
```

**Correctness.** Prim's is correct by the cut property. At each step, the cut separates MST vertices
from non-MST vertices, and the algorithm selects the minimum-weight crossing edge.

**Complexity:** $O((V + E) \log V)$ with a binary heap.

---

## 6. Topological Sort

A **topological ordering** of a DAG is a linear ordering of vertices such that for every directed
edge $(u, v)$, $u$ comes before $v$.

**Algorithm:** DFS-based. When a vertex finishes, prepend it to the result.

```python
def topological_sort(graph):
    visited = [False] * graph.n
    result = []

    def visit(u):
        visited[u] = True
        for v, _ in graph.adj[u]:
            if not visited[v]:
                visit(v)
        result.append(u)

    for u in range(graph.n):
        if not visited[u]:
            visit(u)

    return result[::-1]
```

**Complexity:** $O(V + E)$.

---

## Problem Set

**Problem 1.** Represent the following graph using both an adjacency matrix and an adjacency list.

Vertices: `{A, B, C, D}`. Edges: `{A-B, A-C, B-C, C-D, D-A}`

<details>
<summary>Answer</summary>

Adjacency matrix (index: A=0, B=1, C=2, D=3):

$$\begin{pmatrix} 0 & 1 & 1 & 1 \\ 1 & 0 & 1 & 0 \\ 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 \end{pmatrix}$$

Adjacency list:

- A: [B, C, D]
- B: [A, C]
- C: [A, B, D]
- D: [C, A]
</details>

**Problem 2.** Trace BFS starting from vertex A on the graph from Problem 1. List the order in which
vertices are visited and their distances.

<details>
<summary>Answer</summary>

| Step | Dequeue | Visit   | Neighbours                  | Queue (front→rear) | Distances     |
| ---- | ------- | ------- | --------------------------- | ------------------ | ------------- |
| 0    | —       | —       | —                           | [A]                | A:0           |
| 1    | A       | B, C, D | B, C, D                     | [B, C, D]          | B:1, C:1, D:1 |
| 2    | B       | A, C    | A (visited)                 | [C, D]             | —             |
| 3    | C       | A, B, D | A, B (visited), D (visited) | [D]                | —             |
| 4    | D       | C, A    | C, A (visited)              | []                 | —             |

Visit order: A, B, C, D. Distances: A:0, B:1, C:1, D:1.
</details>

**Problem 3.** Apply Dijkstra's algorithm to find the shortest paths from vertex A in the following
weighted graph. Edges: A→B (4), A→C (2), B→C (1), B→D (5), C→B (1), C→D (8), C→E (10), D→E (2).

<details>
<summary>Answer</summary>

| Step | Extract | dist[A] | dist[B] | dist[C] | dist[D] | dist[E] |
| ---- | ------- | ------- | ------- | ------- | ------- | ------- |
| 0    | —       | 0       | ∞       | ∞       | ∞       | ∞       |
| 1    | A (0)   | 0       | 4       | 2       | ∞       | ∞       |
| 2    | C (2)   | 0       | 3       | 2       | 10      | 12      |
| 3    | B (3)   | 0       | 3       | 2       | 8       | 12      |
| 4    | D (8)   | 0       | 3       | 2       | 8       | 10      |
| 5    | E (10)  | 0       | 3       | 2       | 8       | 10      |

Shortest paths: A→A: 0, A→B: 3 (A→C→B), A→C: 2, A→D: 8 (A→C→B→D), A→E: 10 (A→C→B→D→E).
</details>

**Problem 4.** Find the MST of the following graph using Kruskal's algorithm. Edges with weights:
A-B (4), A-C (2), B-C (1), B-D (5), C-D (8), D-E (3).

<details>
<summary>Answer</summary>

Sorted edges: B-C (1), A-C (2), D-E (3), A-B (4), B-D (5), C-D (8)

| Edge | Weight | Union?             | MST edges              |
| ---- | ------ | ------------------ | ---------------------- |
| B-C  | 1      | Yes                | `{B-C}`                |
| A-C  | 2      | Yes                | `{B-C, A-C}`           |
| D-E  | 3      | Yes                | `{B-C, A-C, D-E}`      |
| A-B  | 4      | No (cycle A-B-C-A) | —                      |
| B-D  | 5      | Yes                | `{B-C, A-C, D-E, B-D}` |

MST weight: $1 + 2 + 3 + 5 = 11$. 4 edges for 5 vertices. ✓
</details>

**Problem 5.** Prove that BFS uses $O(V)$ space in the worst case.

<details>
<summary>Answer</summary>

In the worst case, all vertices at the same distance from the source are in the queue
simultaneously. In a graph where the source is connected to all other vertices, at distance 1 there
are $V - 1$ vertices in the queue. In a star graph, the maximum queue size is $V - 1$. In a complete
graph, BFS visits one level at a time, and the maximum queue size is bounded by the number of
vertices at the maximum depth, which is at most $V - 1$. Hence the space is $O(V)$. $\square$
</details>

**Problem 6.** Given a DAG, explain why topological sort is possible but BFS-based shortest path
(for unweighted graphs) might not produce correct results if cycles exist.

<details>
<summary>Answer</summary>

Topological sort is only defined for DAGs (graphs without directed cycles). If a directed cycle
exists, there is no valid topological ordering because for any edge $(u, v)$ in the cycle, $u$ must
come before $v$, and following the cycle leads to a contradiction.

For shortest paths: in an unweighted graph with cycles, BFS still works correctly because BFS visits
each vertex at most once (it marks vertices as visited). The shortest path distance is still
well-defined even with cycles, since a cycle would only increase the path length. However, for
**weighted** graphs with negative cycles, shortest paths are undefined (you can keep going around
the cycle to decrease the distance).
</details>

**Problem 7.** A graph has 6 vertices and 9 edges. What is the sum of all vertex degrees? Is this
graph necessarily connected?

<details>
<summary>Answer</summary>

By the Handshaking Lemma: sum of degrees = $2|E| = 2 \times 9 = 18$.

The graph is not necessarily connected. For example, it could consist of a $K_4$ (complete graph on
4 vertices, 6 edges) plus a path of 3 vertices (2 edges) plus an isolated vertex, totalling
$6 + 2 = 8$ edges — but we need 9 edges. A valid disconnected example: $K_4$ (6 edges) + a triangle
(3 edges) = 9 edges, 7 vertices... that's too many. Actually, 6 vertices: $K_4$ (6 edges, 4
vertices) + an edge between the remaining 2 vertices (1 edge) + 2 more edges within the remaining 2
vertices is impossible. Let me reconsider: 6 vertices, 9 edges. Minimum edges for connected = 5
(tree). 9 > 5, so it **could** be connected but isn't **necessarily** connected. Example: a $K_4$ on
vertices 1-4 (6 edges) and a $K_3$ on vertices 4-6... no, they share vertex 4, making it connected.
Two separate components: component 1 has 4 vertices with 6 edges ($K_4$), component 2 has 2 vertices
with 1 edge, but that's only 7 edges. To get 9: $K_4$ (6 edges, 4 vertices) + $K_3$ minus 1 edge = 2
edges, 3 vertices. But that requires 7 vertices. With 6 vertices: 5 in one component, 1 isolated.
$K_5$ has 10 edges, too many. So with 6 vertices and 9 edges, the graph **must** be connected
(minimum edges to disconnect would leave one isolated vertex, requiring $\leq \binom{5}{2} = 10$
edges among the other 5, but 9 < 10, so it's possible: 9 edges among 5 vertices and 1 isolated).
Yes, it's possible to be disconnected: 5 vertices with 9 edges + 1 isolated vertex. 9 edges among 5
vertices means the graph on those 5 vertices has 9 edges, which is possible ($K_5$ has 10). So the
answer is: no, not necessarily connected.
</details>

**Problem 8.** Explain why Dijkstra's algorithm fails with negative edge weights. Give a
counterexample.

<details>
<summary>Answer</summary>

Dijkstra's algorithm relies on the **greedy choice property**: once a vertex $u$ is extracted from
the priority queue, $\text{dist}[u]$ is assumed to be final. This is valid only when all edge
weights are non-negative, because any alternative path to $u$ must pass through an unvisited vertex
whose distance is at least $\text{dist}[u]$.

With negative edges, a shorter path to an already-visited vertex may be discovered later through a
not-yet-visited vertex, invalidating the greedy choice.

**Counterexample (CLRS, Exercise 24.3-5).** Consider vertices $S, A, B, C$ with edges:

$$S \xrightarrow{1} A \xrightarrow{2} B \xrightarrow{1} C, \quad S \xrightarrow{4} C \xrightarrow{-3} B$$

**Dijkstra execution:**

| Step | Extract | dist[S] | dist[A]  | dist[B]  | dist[C]  |
| ---- | ------- | ------- | -------- | -------- | -------- |
| 0    | —       | 0       | $\infty$ | $\infty$ | $\infty$ |
| 1    | S (0)   | 0       | 1        | $\infty$ | 4        |
| 2    | A (1)   | 0       | 1        | 3        | 4        |
| 3    | B (3)   | 0       | 1        | **3**    | 4        |
| 4    | C (4)   | 0       | 1        | 3        | **4**    |

Dijkstra outputs $\text{dist}[B] = 3$. But the true shortest path is $S \to C \to B = 4 + (-3) = 1$.
The algorithm fails because when $C$ is extracted at distance 4, it finds a shorter path to $B$
($4 - 3 = 1$), but $B$ has already been extracted and marked as visited.

**Recovery:** Use the Bellman-Ford algorithm, which correctly handles negative edge weights by
relaxing all edges $|V| - 1$ times. Bellman-Ford also detects negative-weight cycles.
</details>

**Problem 9.** Perform a topological sort on the following DAG: edges A→B, A→C, B→D, C→D, D→E.

<details>
<summary>Answer</summary>

Using DFS-based topological sort:

DFS from A: visit A → visit B → visit D → visit E → E finished, D finished, B finished → visit C → C
finished, A finished.

Finish order (reverse): A, C, B, D, E → reversed: E, D, B, C, A... wait.

DFS finishes: E, D, B, C, A. Reverse: A, C, B, D, E.

Check: A before B ✓, A before C ✓, B before D ✓, C before D ✓, D before E ✓.

Valid topological order: A, B, C, D, E (or A, C, B, D, E).
</details>

**Problem 10.** Compare Kruskal's and Prim's MST algorithms in terms of time complexity for dense
and sparse graphs.

<details>
<summary>Answer</summary>

| Graph type              | Kruskal         | Prim (binary heap) |
| ----------------------- | --------------- | ------------------ |
| Sparse ($E \approx V$)  | $O(V \log V)$   | $O(V \log V)$      |
| Dense ($E \approx V^2$) | $O(V^2 \log V)$ | $O(V^2 \log V)$    |

Kruskal: $O(E \log E) = O(E \log V)$. Prim (binary heap): $O((V+E) \log V)$.

For dense graphs: Prim with an adjacency matrix (no heap) runs in $O(V^2)$, which is better than
Kruskal's $O(V^2 \log V)$.
</details>

**Problem 11.** Prove that a tree with $n$ vertices has exactly $n - 1$ edges using induction.

<details>
<summary>Answer</summary>

**Proof by induction on $n$.**

Base case: $n = 1$. A single vertex has 0 edges. $0 = 1 - 1$. ✓

Inductive step: Assume all trees with $k$ vertices have $k - 1$ edges. Consider a tree $T$ with
$k + 1$ vertices. Since $T$ has at least 2 vertices (for $k \geq 1$), it has at least one leaf $v$
(a tree with $\geq 2$ vertices always has a leaf — otherwise every vertex has degree $\geq 1$, and
with no cycles, we'd need $\geq n$ edges, contradicting $|E| = n - 1$). Remove leaf $v$ and its
single incident edge. The resulting graph $T'$ is still a tree (removing a leaf cannot create a
cycle, and $T'$ is still connected since $v$ was only connected to one vertex). $T'$ has $k$
vertices, so by the inductive hypothesis, $T'$ has $k - 1$ edges. Adding back $v$ and its edge gives
$(k - 1) + 1 = k$ edges. ✓ $\square$
</details>

**Problem 12.** Given a graph represented as an adjacency list, write a function to detect whether
it contains a cycle using DFS.

<details>
<summary>Answer</summary>

```python
def has_cycle(graph):
    visited = [False] * graph.n
    rec_stack = [False] * graph.n

    def dfs(u):
        visited[u] = True
        rec_stack[u] = True
        for v, _ in graph.adj[u]:
            if not visited[v]:
                if dfs(v):
                    return True
            elif rec_stack[v]:
                return True
        rec_stack[u] = False
        return False

    for u in range(graph.n):
        if not visited[u]:
            if dfs(u):
                return True
    return False
```

The recursion stack (`rec_stack`) tracks the current DFS path. If we encounter a vertex that is
already on the current path, we've found a back edge → cycle.

For undirected graphs, we additionally check that the back edge doesn't go to the parent vertex.
</details>

For revision on algorithms, see
[Graph Algorithms](/docs/alevel/computer-science/algorithms/graph-algorithms).

:::

:::
