---
title: Graph Algorithms
description:
  'University Computer Science Graph Algorithms notes covering key definitions, core concepts,
  worked examples, and practice questions for focused revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
slug: graph-algorithms
---

## 1. Graph Traversals

### 1.1 Breadth-First Search (BFS)

Explores vertices in order of increasing distance from the source.

```
BFS(G, s):
    for each v in G.V:
        v.color = WHITE
        v.dist = INF
        v.parent = NIL
    s.color = GRAY
    s.dist = 0
    s.parent = NIL
    Q = empty queue
    ENQUEUE(Q, s)
    while Q is not empty:
        u = DEQUEUE(Q)
        for each v in G.Adj[u]:
            if v.color == WHITE:
                v.color = GRAY
                v.dist = u.dist + 1
                v.parent = u
                ENQUEUE(Q, v)
        u.color = BLACK
```

**Time:** $O(V + E)$ with adjacency list.

**Properties:**

- Produces a **BFS tree** with shortest-path distances.
- $v.dist$ = shortest-path distance from $s$ to $v$ (unweighted graphs).

### 1.2 Depth-First Search (DFS)

Explores as far as possible along each branch before backtracking.

```
DFS(G):
    for each u in G.V:
        u.color = WHITE
        u.parent = NIL
    time = 0
    for each u in G.V:
        if u.color == WHITE:
            DFS_VISIT(G, u)

DFS_VISIT(G, u):
    time += 1
    u.d = time        // discovery time
    u.color = GRAY
    for each v in G.Adj[u]:
        if v.color == WHITE:
            v.parent = u
            DFS_VISIT(G, v)
    time += 1
    u.f = time        // finish time
    u.color = BLACK
```

**Time:** $O(V + E)$.

**Properties:**

- Parenthesis theorem: intervals $[u.d, u.f]$ are either nested or disjoint.
- Classification of edges:
  - **Tree edges:** Part of DFS forest.
  - **Back edges:** $v$ is an ancestor of $u$ (indicates a cycle).
  - **Forward edges:** $v$ is a descendant of $u$ (not a tree edge).
  - **Cross edges:** Neither ancestor nor descendant (only in directed graphs).

### 1.3 BFS vs DFS

| Property       | BFS                    | DFS                           |
| -------------- | ---------------------- | ----------------------------- |
| Data structure | Queue                  | Stack (recursion)             |
| Explores       | Level by level         | Branch by branch              |
| Shortest path  | Yes (unweighted)       | No                            |
| Space          | $O(V)$                 | $O(V)$                        |
| Time           | $O(V + E)$             | $O(V + E)$                    |
| Applications   | Shortest paths, levels | Topological sort, SCC, cycles |

## 2. Topological Sort

A **topological ordering** of a DAG is a linear ordering of vertices such that for every directed
edge $(u, v)$, $u$ appears before $v$.

### 2.1 DFS-Based Topological Sort

```
TOPOLOGICAL_SORT(G):
    DFS(G)
    return vertices in decreasing order of finish time (u.f)
```

**Time:** $O(V + E)$. Works only on DAGs (acyclic directed graphs).

### 2.2 Kahn's Algorithm (Indegree-Based)

```
TOPOPOLOGICAL_SORT_KAHN(G):
    compute indegree[v] for all v
    Q = all vertices with indegree 0
    order = []
    while Q is not empty:
        u = DEQUEUE(Q)
        order.append(u)
        for each v in G.Adj[u]:
            indegree[v] -= 1
            if indegree[v] == 0:
                ENQUEUE(Q, v)
    if len(order) != |V|:
        error "graph has a cycle"
    return order
```

**Time:** $O(V + E)$. Detects cycles by definition (if output length $\neq |V|$).

## 3. Strongly Connected Components

A **strongly connected component** (SCC) of a directed graph is a maximal set of vertices such that
every vertex is reachable from every other.

### 3.1 Kosaraju's Algorithm

```
KOSARAJU(G):
    DFS(G) to compute finish times
    G_T = transpose of G (reverse all edges)
    DFS(G_T), processing vertices in decreasing order of finish time from step 1
    each tree in the DFS forest of step 3 is an SCC
```

**Time:** $O(V + E)$ (two DFS passes + transpose construction).

### 3.2 Tarjan's Algorithm

```
TARJAN_SCC(G):
    index = 0
    stack = []
    for each v in G.V:
        if v.index == UNDEFINED:
            STRONGCONNECT(v)

STRONGCONNECT(v):
    v.index = v.lowlink = index
    index += 1
    stack.push(v)
    v.onStack = true
    for each w in G.Adj[v]:
        if w.index == UNDEFINED:
            STRONGCONNECT(w)
            v.lowlink = min(v.lowlink, w.lowlink)
        elif w.onStack:
            v.lowlink = min(v.lowlink, w.index)
    if v.lowlink == v.index:
        // v is root of an SCC
        repeat:
            w = stack.pop()
            w.onStack = false
            add w to current SCC
        until w == v
```

**Time:** $O(V + E)$. Single pass DFS.

**Key insight:** `lowlink` tracks the earliest reachable vertex in the stack. When
`v.lowlink == v.index`, `v` is the root of an SCC.

## 4. Shortest Path Algorithms

### 4.1 Dijkstra's Algorithm

Single-source shortest paths with **non-negative** edge weights.

```
DIJKSTRA(G, w, s):
    for each v in G.V:
        v.dist = INF
        v.parent = NIL
    s.dist = 0
    S = {}
    Q = MIN_PRIORITY_QUEUE(G.V)
    while Q is not empty:
        u = EXTRACT_MIN(Q)
        S = S ∪ {u}
        for each v in G.Adj[u]:
            RELAX(u, v, w)

RELAX(u, v, w):
    if v.dist > u.dist + w(u, v):
        v.dist = u.dist + w(u, v)
        v.parent = u
        DECREASE_KEY(Q, v, v.dist)
```

**Time:** $O((V + E) \log V)$ with binary heap. $O(V \log V + E)$ with Fibonacci heap.

**Correctness:** Relies on the fact that once a vertex is extracted (added to $S$), its distance is
final. This holds only for non-negative weights.

### 4.2 Bellman-Ford Algorithm

Single-source shortest paths, handles **negative weights** and detects **negative cycles**.

```
BELLMAN_FORD(G, w, s):
    for each v in G.V:
        v.dist = INF
        v.parent = NIL
    s.dist = 0
    for i = 1 to |V| - 1:
        for each edge (u, v) in G.E:
            RELAX(u, v, w)
    for each edge (u, v) in G.E:
        if v.dist > u.dist + w(u, v):
            return "negative cycle detected"
    return true
```

**Time:** $O(VE)$.

**Properties:**

- After $i$ iterations, $v.dist$ is at most the shortest path using $\leq i$ edges.
- If no negative cycles exist, after $|V|-1$ iterations distances are correct.

### 4.3 Floyd-Warshall Algorithm

All-pairs shortest paths. Works with negative weights (no negative cycles).

```
FLOYD_WARSHALL(W):
    n = |V|
    D = W  // copy weight matrix
    P = n x n matrix initialized to NIL
    for k = 1 to n:
        for i = 1 to n:
            for j = 1 to n:
                if D[i][j] > D[i][k] + D[k][j]:
                    D[i][j] = D[i][k] + D[k][j]
                    P[i][j] = k
    return D, P
```

**Time:** $O(V^3)$. **Space:** $O(V^2)$.

**Path reconstruction:** `PATH(i, j, P)` recursively uses predecessor matrix.

### 4.4 Comparison

| Algorithm      | Source    | Weights      | Negative | Time              | Space    |
| -------------- | --------- | ------------ | -------- | ----------------- | -------- |
| BFS            | Single    | Unit         | N/A      | $O(V + E)$        | $O(V)$   |
| Dijkstra       | Single    | Non-negative | No       | $O((V+E) \log V)$ | $O(V)$   |
| Bellman-Ford   | Single    | Any          | Yes      | $O(VE)$           | $O(V)$   |
| Floyd-Warshall | All pairs | Any          | Yes      | $O(V^3)$          | $O(V^2)$ |

### 4.5 Johnson's Algorithm

All-pairs shortest paths, efficient for sparse graphs.

1. Add a dummy vertex $s$ connected to all others with weight 0.
2. Run Bellman-Ford from $s$ to get $h(v)$ for all $v$.
3. Reweight: $w'(u,v) = w(u,v) + h(u) - h(v)$ (all non-negative).
4. Run Dijkstra from every vertex using $w'$.
5. Adjust distances back: $d(u,v) = d'(u,v) - h(u) + h(v)$.

**Time:** $O(VE + V^2 \log V)$.

## 5. Minimum Spanning Trees

### 5.1 Definition

Given a connected, undirected graph $G = (V, E)$ with weight function $w$, an MST is a subset
$T \subseteq E$ that:

1. Connects all vertices (spanning).
2. Is a tree ($|T| = |V| - 1$ edges, acyclic).
3. Minimizes total weight $\sum_{e \in T} w(e)$.

**Cut property:** Let $(S, V \setminus S)$ be any cut of $G$. The minimum-weight crossing edge is in
some MST.

**Cycle property:** For any cycle $C$ in $G$, the maximum-weight edge in $C$ is not in any MST.

### 5.2 Kruskal's Algorithm

```
KRUSKAL(G):
    A = {}
    for each v in G.V: MAKE_SET(v)
    sort G.E by increasing weight
    for each (u, v) in sorted G.E:
        if FIND_SET(u) != FIND_SET(v):
            A = A ∪ {(u, v)}
            UNION(u, v)
    return A
```

**Time:** $O(E \log E)$ with sorting. $O(E \alpha(V))$ with Union-Find after sorting.

**Correctness:** By the cut property, each added edge is the lightest crossing some cut.

### 5.3 Prim's Algorithm

```
PRIM(G, r):
    for each u in G.V:
        u.key = INF
        u.parent = NIL
    r.key = 0
    Q = MIN_PRIORITY_QUEUE(G.V)
    while Q is not empty:
        u = EXTRACT_MIN(Q)
        for each v in G.Adj[u]:
            if v in Q and w(u,v) < v.key:
                v.parent = u
                v.key = w(u, v)
                DECREASE_KEY(Q, v, w(u, v))
```

**Time:** $O(E \log V)$ with binary heap. $O(E + V \log V)$ with Fibonacci heap.

**Correctness:** Grows a single tree, always adding the lightest edge connecting the tree to a
vertex outside.

### 5.4 Comparison

| Property       | Kruskal       | Prim           |
| -------------- | ------------- | -------------- |
| Strategy       | Edge-based    | Vertex-based   |
| Best for       | Sparse graphs | Dense graphs   |
| Data structure | Union-Find    | Priority queue |
| Time           | $O(E \log E)$ | $O(E \log V)$  |

## 6. Network Flow

### 6.1 Flow Network

A **flow network** $G = (V, E)$ is a directed graph with:

- Capacity $c(u,v) \geq 0$ for each edge.
- A **source** $s$ and **sink** $t$.
- No edges into $s$ or out of $t$ (wlog).

A **flow** is a function $f: V \times V \to \mathbb{R}$ satisfying:

1. **Capacity constraint:** $0 \leq f(u,v) \leq c(u,v)$
2. **Flow conservation:** $\sum_v f(v,u) = \sum_v f(u,v)$ for all $u \neq s, t$

**Value of flow:** $|f| = \sum_v f(s, v)$

### 6.2 Ford-Fulkerson Method

```
FORD_FULKERSON(G, s, t):
    initialize flow f to 0
    while there exists an augmenting path p in residual graph G_f:
        c_f(p) = min{c_f(u,v) : (u,v) in p}  // residual capacity of path
        for each edge (u, v) in p:
            if (u,v) in E:
                f(u,v) += c_f(p)
            else:
                f(v,u) -= c_f(p)
    return f
```

**Residual capacity:** $c_f(u,v) = c(u,v) - f(u,v)$.

**Residual graph:** $G_f$ contains all edges with positive residual capacity.

**Time:** Depends on augmenting path selection. With BFS (Edmonds-Karp): $O(VE^2)$.

### 6.3 Edmonds-Karp Algorithm

Ford-Fulkerson where augmenting paths are found by **BFS** (shortest augmenting path in terms of
edges).

**Time:** $O(VE^2)$.

### 6.4 Max-Flow Min-Cut Theorem

**Theorem:** In any flow network, the maximum flow value equals the minimum cut capacity:

$$|f^*| = c(S^*, T^*)$$

where $S^*$ is the set of vertices reachable from $s$ in the residual graph when no augmenting path
exists, and $T^* = V \setminus S^*$.

### 6.5 Applications of Max-Flow

**Bipartite matching:** Create a source connected to left partition (capacity 1), right partition
connected to sink (capacity 1), original edges (capacity 1). Max flow = max matching.

**Multiple sources/sinks:** Add super-source and super-sink with infinite-capacity edges.

**Minimum cut:** The cut $(S^*, T^*)$ found by max-flow algorithm.

## 7. Bipartite Matching

### 7.1 Definition

Given a bipartite graph $G = (L, R, E)$, find a maximum matching: a set of edges with no shared
vertices.

### 7.2 Hopcroft-Karp Algorithm

```
HOPCROFT_KARP(G):
    M = {}  // matching
    while BFS finds augmenting paths:
        P_L = set of shortest augmenting paths from BFS
        for each path in P_L (disjoint sets):
            augment M along path
    return M
```

**Time:** $O(E\sqrt{V})$.

### 7.3 Hungarian Algorithm (Weighted Bipartite Matching)

For maximum-weight matching in a complete bipartite graph with weight matrix $W$.

```
HUNGARIAN(W):
    n = size of weight matrix
    u[0..n], v[0..n] = 0, 0
    p[1..n] = 0, way[1..n] = 0
    for i = 1 to n:
        p[0] = i
        j0 = 0
        minv[0..n] = INF, used[0..n] = false
        while p[j0] != 0:
            used[j0] = true
            i0 = p[j0], delta = INF, j1 = 0
            for j = 1 to n:
                if not used[j]:
                    cur = W[i0][j] - u[i0] - v[j]
                    if cur < minv[j]:
                        minv[j] = cur, way[j] = j0
                    if minv[j] < delta:
                        delta = minv[j], j1 = j
            for j = 0 to n:
                if used[j]: u[p[j]] += delta, v[j] -= delta
                else: minv[j] -= delta
            j0 = j1
        while j0 != 0:
            p[j0] = p[way[j0]]
            j0 = way[j0]
    return matching encoded in p
```

**Time:** $O(n^3)$.

### 7.4 Hall's Marriage Theorem

A bipartite graph $G = (L, R, E)$ has a perfect matching iff for every subset $S \subseteq L$:

$$|N(S)| \geq |S|$$

where $N(S)$ is the set of neighbors of $S$ in $R$.

## 8. Common Pitfalls

1. **Using Dijkstra with negative weights.** Dijkstra's greedy extraction assumes finalized
   distances, which fails with negative edges. Use Bellman-Ford or add a potential function.

2. **Forgetting to initialize all distances in Floyd-Warshall.** The distance matrix must be
   initialized with actual edge weights for adjacent vertices and $\infty$ for non-adjacent pairs
   (except diagonal = 0).

3. **Confusing BFS and DFS edge classification.** Back edges in DFS indicate cycles in directed
   graphs, but the same concept does not directly apply to BFS.

4. **Ignoring the difference between Kruskal and Prim.** Kruskal is edge-centric (uses Union-Find),
   Prim is vertex-centric (uses a priority queue). Choose based on graph density.

5. **Applying max-flow algorithms to disconnected graphs.** Ensure the graph has a valid
   source-to-sink path before running Ford-Fulkerson. An isolated vertex produces trivial results.

6. **Mistaking augmenting path for shortest path.** In Ford-Fulkerson, any augmenting path works,
   but Edmonds-Karp specifically uses BFS for shortest augmenting paths to guarantee $O(VE^2)$.

7. **Not handling self-loops and parallel edges in MST algorithms.** Kruskal by definition handles
   them (sort includes all edges), but Prim may need adjustment depending on the adjacency
   representation.

## Worked Examples

### Example 1: Dijkstra's Shortest Path

**Problem:** Find the shortest path from node A to all other nodes in a graph with edges: A->B(4),
A->C(2), B->D(3), B->E(1), C->B(1), C->D(5), D->E(2). **Solution:** Initial: dist(A)=0, dist(B)=inf,
dist(C)=inf, dist(D)=inf, dist(E)=inf. Process A: dist(B)=4, dist(C)=2. Process C: dist(B)=min(4,
2+1)=3, dist(D)=min(inf, 2+5)=7. Process B: dist(D)=min(7, 3+3)=6, dist(E)=min(inf, 3+1)=4. Process
E: dist(D)=min(6, 4+2)=6. Process D: no improvement. Final: A=0, C=2, B=3, E=4, D=6. Path to E:
A->C->B->E (length 4).

### Example 2: Topological Sort

**Problem:** Given a DAG with edges: A->B, A->C, B->D, C->D, D->E. Find a valid topological
ordering. **Solution:** Using Kahn's algorithm: in-degrees: A=0, B=1, C=1, D=2, E=1. Queue: [A].
Process A: remove edges to B, C. Queue: [B, C]. Process B: remove edge to D (in-degree D becomes 1).
Process C: remove edge to D (in-degree D becomes 0). Queue: [D]. Process D: remove edge to E. Queue:
[E]. Process E. Topological order: A, B, C, D, E (or A, C, B, D, E -- both valid).

## Summary

- **BFS** finds shortest paths in unweighted graphs; **DFS** explores depth-first and enables
  topological sort and SCC detection.
- **Topological sort** works on DAGs using DFS finish times or Kahn's indegree algorithm.
- **SCCs** are found by Kosaraju's (two DFS passes) or Tarjan's (single DFS with lowlink).
- **Shortest paths:** Dijkstra ($O((V+E)\log V)$, non-negative), Bellman-Ford ($O(VE)$, negative),
  Floyd-Warshall ($O(V^3)$, all pairs).
- **MST:** Kruskal ($O(E \log E)$) and Prim ($O(E \log V)$), both based on cut/cycle properties.
- **Max-flow:** Ford-Fulkerson/Edmonds-Karp ($O(VE^2)$), with max-flow min-cut theorem.
- **Bipartite matching:** Hopcroft-Karp ($O(E\sqrt{V})$) for unweighted, Hungarian ($O(n^3)$) for
  weighted.

## Cross-References

| Topic             | Link                                                        |
| ----------------- | ----------------------------------------------------------- |
| Algorithm Design  | [View](/docs/university/computer-science/algorithm-design)  |
| Data Structures   | [View](/docs/university/computer-science/data-structures)   |
| Complexity Theory | [View](/docs/university/computer-science/complexity-theory) |
