---
title: Graph Algorithms
slug: algorithms-and-data-structures-graph-algorithms
tags:
  - Computing
  - University
---

### 4.1 Breadth-First Search (BFS)

BFS explores the graph level by level from a source vertex.

```
BFS(G, s):
    for each v in V:
        d[v] = INF
        pi[v] = NIL
    d[s] = 0
    Q = {s}
    while Q is not empty:
        u = Q.dequeue()
        for each v in G.adj[u]:
            if d[v] == INF:
                d[v] = d[u] + 1
                pi[v] = u
                Q.enqueue(v)
```

**Theorem 4.1.** BFS runs in $O(V + E)$ time and discovers shortest paths (in terms of number of
Edges) from the source to all reachable vertices.

_Proof._ **Time:** Each vertex is enqueued at most once and dequeued at most once: $O(V)$. Each edge
is examined at most twice (once from each endpoint): $O(E)$. Total: $O(V + E)$.

**Correctness:** We prove by induction on the length of shortest paths. Let $v$ be a vertex
discovered via edge $(u, v)$. At the time $v$ is discovered, $d[u]$ equals the shortest-path
distance from $s$ to $u$ (induction hypothesis). Since BFS processes vertices in non-decreasing
order of distance, $d[v] = d[u] + 1$ is the shortest distance to $v$. Any path to $v$ must go
through some vertex at distance at most $d[u]$ (the predecessor on the path), and all such vertices
have already been processed. $\blacksquare$

<details>
<summary>Worked Example: BFS on a Weighted Path Problem</summary>

Find the shortest path (fewest edges) from $A$ to all other vertices in the graph with edges:
$(A,B), (A,C), (B,D), (C,D), (C,E), (D,F), (E,F)$.

Starting from $A$:

- Level 0: $A$ (distance 0)
- Level 1: $B, C$ (distance 1)
- Level 2: $D, E$ (distance 2)
- Level 3: $F$ (distance 3)

Shortest path from $A$ to $F$: $A \to C \to E \to F$ (or $A \to B \to D \to F$ or
$A \to C \to D \to F$), all of length 3.

</details>

### 4.2 Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking.

```
DFS(G):
    for each v in V:
        colour[v] = WHITE
        pi[v] = NIL
    time = 0
    for each v in V:
        if colour[v] == WHITE:
            DFS-Visit(G, v)

DFS-Visit(G, u):
    colour[u] = GREY
    time += 1
    d[u] = time
    for each v in G.adj[u]:
        if colour[v] == WHITE:
            pi[v] = u
            DFS-Visit(G, v)
    colour[u] = BLACK
    time += 1
    f[u] = time
```

**Theorem 4.2.** DFS runs in $O(V + E)$ time and can be used to detect cycles, find connected
Components, compute topological orderings, and identify strongly connected components.

_Proof (time)._ Each vertex is coloured exactly once (from WHITE to GREY) and finished exactly once
(from GREY to BLACK): $O(V)$. Each edge is examined at most twice (once in each direction for
undirected, once for directed): $O(E)$. Total: $O(V + E)$. $\blacksquare$

**Theorem 4.3 (Parenthesis Theorem).** In any DFS, for any two vertices $u$ and $v$Exactly one of
the following holds: (1) $d[u] \lt d[v] \lt f[v] \lt f[u]$ (interval nesting), (2)
$d[v] \lt d[u] \lt f[u] \lt f[v]$ (interval nesting), or (3) the intervals $[d[u], f[u]]$ and
$[d[v], f[v]]$ are disjoint.

_Proof._ The DFS call stack forms a nesting of intervals. When we start visiting $v$ from $u$We must
finish $v$ before finishing $u$Giving nesting. If $u$ and $v$ are in different DFS trees, their
intervals are disjoint. $\blacksquare$

**Theorem 4.4 (White-Path Theorem).** $v$ is a descendant of $u$ in the DFS forest if and only if,
at the time $d[u]$ is discovered, there is a path from $u$ to $v$ consisting entirely of white
vertices.

_Proof._ ($\Rightarrow$) By induction on the depth of $v$ in the DFS tree. If $v$ is a child of
$u$Then $v$ was white when discovered from $u$. If $v$ is a deeper descendant, the path goes through
intermediate white vertices.

($\Leftarrow$) Suppose there is a white path from $u$ to $v$ at time $d[u]$. Let $w$ be the first
vertex on this path discovered after $u$. All vertices before $w$ on the path are still white (they
can only be discovered after $w$), so $w$ will be discovered from the path. By induction, $v$ is a
descendant of $w$Hence of $u$. $\blacksquare$

### 4.3 Topological Sort

A **topological ordering** of a DAG is a linear ordering of vertices such that for every directed
edge $(u, v)$, $u$ appears before $v$.

**Algorithm:** Run DFS on the DAG. Output vertices in reverse order of finishing times.

**Theorem 4.5.** The reverse post-order of a DFS on a DAG produces a valid topological ordering.

_Proof._ Suppose there is an edge $(u, v)$ but $u$ appears after $v$ in the ordering (i.e.,
$f[u] \lt f[v]$). Since $(u, v)$ is an edge, when $u$ is being explored (coloured GREY), if $v$ is
WHITE, then $v$ is discovered as a descendant of $u$So $f[v] \lt f[u]$Contradiction. If $v$ is GREY,
we have a back edge, implying a cycle, contradicting that the graph is acyclic. If $v$ is BLACK,
then $f[v] \lt d[u] \lt f[u]$Contradicting $f[u] \lt f[v]$. $\blacksquare$

### 4.4 Strongly Connected Components

Two vertices $u$ and $v$ are **strongly connected** if there is a path from $u$ to $v$ and from $v$
to $u$. A **strongly connected component (SCC)** is a maximal set of strongly connected vertices.

**Kosaraju's Algorithm:**

1. Run DFS on $G$Recording finishing times.
2. Compute $G^T$ (transpose of $G$: reverse all edges).
3. Run DFS on $G^T$ in decreasing order of finishing times. Each DFS tree is an SCC.

**Theorem 4.6.** Kosaraju's algorithm correctly identifies all SCCs in $O(V + E)$ time.

_Proof._ Let $C$ be the SCC containing the vertex $s$ with the highest finishing time in the first
DFS. We claim that in $G^T$No vertex in $C$ can reach a vertex outside $C$ (otherwise $s$ would have
a path to and from that vertex, placing it in $C$). In the second DFS, starting from $s$ in $G^T$We
discover exactly the vertices in $C$. Removing $C$ and repeating the argument gives the remaining
SCCs. $\blacksquare$

**Tarjan's Algorithm** finds SCCs in a single DFS pass using a stack and low-link values, also in
$O(V + E)$ time.

### 4.5 Dijkstra's Algorithm

**Problem.** Find shortest paths from a single source in a weighted graph with non-negative edge
Weights.

**Algorithm.** Maintain a priority queue of vertices keyed by their current shortest-path estimate.
Repeatedly extract the vertex with minimum distance and relax its edges.

```
Dijkstra(G, w, s):
    for each v in V:
        d[v] = INF
        pi[v] = NIL
    d[s] = 0
    S = {}  // processed vertices
    Q = V   // priority queue keyed by d[]
    while Q is not empty:
        u = ExtractMin(Q)
        S = S ∪ {u}
        for each v in G.adj[u]:
            if d[v] > d[u] + w(u, v):
                d[v] = d[u] + w(u, v)
                pi[v] = u
                DecreaseKey(Q, v, d[v])
```

**Theorem 4.7.** Dijkstra's algorithm correctly computes shortest paths from the source.

_Proof._ We prove by induction on $|S|$ that when a vertex $u$ is added to $S$,
$d[u] = \delta(s, u)$ (the true shortest-path distance).

Base case: $s$ is the first vertex added, and $d[s] = 0 = \delta(s, s)$.

Inductive step: Suppose all vertices in $S$ have correct distances. Let $u$ be the next vertex
extracted from $Q$. Suppose for contradiction that $d[u] > \delta(s, u)$. Consider a shortest path
$P$ from $s$ to $u$And let $(x, y)$ be the first edge on $P$ where $x \in S$ and $y \notin S$. Then
$\delta(s, y) = \delta(s, x) + w(x, y) = d[x] + w(x, y)$ (by induction). When $x$ was added to
$S$The edge $(x, y)$ was relaxed, so $d[y] \leq d[x] + w(x, y) = \delta(s, y)$. Since edge weights
are non-negative, $\delta(s, y) \leq \delta(s, u)$. But
$d[y] \leq \delta(s, y) \leq \delta(s, u) \lt d[u]$And $y$ is in $Q$Contradicting that $u$ has the
minimum $d$-value in $Q$. $\blacksquare$

**Theorem 4.8.** Dijkstra's algorithm with a binary heap runs in $O((V + E)\log V)$ time. With a
Fibonacci heap: $O(V \log V + E)$.

_Proof._ Each vertex is extracted from the priority queue at most once: $O(V \log V)$. Each edge is
Relaxed at most once, and each relaxation may cause a `DecreaseKey`: $O(E \log V)$. Total:
$O((V + E)\log V)$. With a Fibonacci heap, `DecreaseKey` is $O(1)$ amortised, giving
$O(V \log V + E)$. $\blacksquare$

<details>
<summary>Worked Example: Dijkstra's Algorithm</summary>

Find shortest paths from $A$ in the graph:

- $A \xrightarrow{4} B$, $A \xrightarrow{2} C$
- $B \xrightarrow{3} D$, $B \xrightarrow{1} E$
- $C \xrightarrow{1} B$, $C \xrightarrow{5} D$
- $D \xrightarrow{2} E$

Initial: $d[A]=0$, $d[B]=d[C]=d[D]=d[E]=\infty$

Extract $A$: relax $B \to 4$, $C \to 2$. $Q = \\{C(2), B(4), D(\infty), E(\infty)\\}$

Extract $C$: relax $B \to \min(4, 2+1)=3$, $D \to 2+5=7$. $Q = \\{B(3), D(7), E(\infty)\\}$

Extract $B$: relax $D \to \min(7, 3+3)=6$, $E \to 3+1=4$. $Q = \\{E(4), D(6)\\}$

Extract $E$: relax $D \to \min(6, 4+2)=6$. $Q = \\{D(6)\\}$

Extract $D$: no improvements.

Result: $d[A]=0$, $d[B]=3$, $d[C]=2$, $d[D]=6$, $d[E]=4$

</details>

### 4.6 Bellman-Ford Algorithm

**Problem.** Find shortest paths from a single source, allowing negative edge weights (but no
negative Cycles).

```
BellmanFord(G, w, s):
    for each v in V:
        d[v] = INF
        pi[v] = NIL
    d[s] = 0
    for i = 1 to |V| - 1:
        for each edge (u, v) in E:
            if d[v] > d[u] + w(u, v):
                d[v] = d[u] + w(u, v)
                pi[v] = u
    for each edge (u, v) in E:
        if d[v] > d[u] + w(u, v):
            return "negative cycle detected"
```

**Theorem 4.9.** Bellman-Ford runs in $O(VE)$ time. It correctly detects negative-weight cycles.

_Proof._ After $i$ iterations of the relaxation loop, $d[v]$ is at most the weight of the shortest
path from $s$ to $v$ using at most $i$ edges. This is proved by induction on $i$.

Base case ($i = 0$): Only $d[s] = 0$ is finite, which is the weight of the empty path.

Inductive step: A shortest path from $s$ to $v$ using at most $i$ edges either uses at most $i-1$
edges (handled by induction) or uses exactly $i$ edges, ending with edge $(u, v)$ where the shortest
path to $u$ uses at most $i-1$ edges. The relaxation of $(u, v)$ in iteration $i$ handles this case.

After $V - 1$ iterations, all shortest paths (which have at most $V - 1$ edges) are correct. A
$V$-th iteration that updates any distance indicates a path of length $V$ with strictly decreasing
weight, which contains a cycle of negative weight. $\blacksquare$

<details>
<summary>Worked Example: Bellman-Ford with Negative Edge Weights</summary>

Find shortest paths from $A$ in the graph:

- $A \xrightarrow{6} B$, $A \xrightarrow{7} C$
- $B \xrightarrow{5} C$, $B \xrightarrow{-4} D$, $B \xrightarrow{8} E$
- $C \xrightarrow{-3} D$, $C \xrightarrow{9} E$
- $D \xrightarrow{2} E$, $D \xrightarrow{7} F$
- $E \xrightarrow{-5} F$

Initial: $d = [\infty, \infty, \infty, \infty, \infty, \infty]$ for $[A, B, C, D, E, F]$.
$d[A] = 0$.

**Iteration 1:** Relax all edges.

- $(A,B)$: $d[B] = 6$. $(A,C)$: $d[C] = 7$.
- $(B,C)$: $\min(7, 6+5)=7$. $(B,D)$: $d[D] = 6+(-4) = 2$. $(B,E)$: $d[E] = 6+8 = 14$.
- $(C,D)$: $\min(2, 7+(-3)) = 2$. $(C,E)$: $\min(14, 7+9) = 14$.
- $(D,E)$: $\min(14, 2+2) = 4$. $(D,F)$: $d[F] = 2+7 = 9$.
- $(E,F)$: $\min(9, 4+(-5)) = -1$. After iter 1: $d = [0, 6, 7, 2, 4, -1]$.

**Iteration 2:** Relax all edges.

- $(B,D)$: $\min(2, 6+(-4)) = 2$. $(B,E)$: $\min(4, 6+8) = 4$.
- $(D,E)$: $\min(4, 2+2) = 4$. $(D,F)$: $\min(-1, 2+7) = -1$.
- $(E,F)$: $\min(-1, 4+(-5)) = -1$. No changes: $d = [0, 6, 7, 2, 4, -1]$.

**Iteration 3--5:** No changes. Algorithm terminates.

**Negative cycle check:** No edge can be relaxed. No negative cycle.

Result: $d = [0, 6, 7, 2, 4, -1]$. Shortest path to $F$: $A \to B \to D \to E \to F$Cost $-1$.

</details>

<details>
<summary>Worked Example: Bellman-Ford Negative Cycle Detection</summary>

Graph: $A \xrightarrow{1} B$, $B \xrightarrow{-3} C$, $C \xrightarrow{2} A$. This has a cycle
$A \to B \to C \to A$ of weight $1 + (-3) + 2 = 0$. Not negative.

Now add $C \xrightarrow{-1} A$. Cycle weight: $1 + (-3) + (-1) = -3$. Negative cycle.

Initial: $d[A] = 0$Rest $\infty$.

**Iteration 1:** $d[B] = 1$, $d[C] = -2$, $d[A] = \min(0, -2 + (-1)) = -3$.

**Iteration 2:** $d[B] = -2$, $d[C] = -5$, $d[A] = -6$.

**Iteration 3:** $d[B] = -5$, $d[C] = -8$, $d[A] = -9$.

**Iteration 4:** $d[B] = -8$, $d[C] = -11$, $d[A] = -12$.

**Iteration 5:** $d[B] = -11$, $d[C] = -14$, $d[A] = -15$.

**Check (iteration 6):** $(A,B)$: $-15 + 1 = -14 \lt -11$Can still relax. **Negative cycle
detected!**

</details>

### 4.7 Floyd-Warshall Algorithm

**Problem.** Find all-pairs shortest paths.

**Algorithm.** For $k = 1, \ldots, V$: for each pair $(i, j)$Check if going through vertex $k$
Improves the path.

$$d_{ij}^{(k)} = \min(d_{ij}^{(k-1)}, d_{ik}^{(k-1)} + d_{kj}^{(k-1)})$$

**Derivation.** Define $d_{ij}^{(k)}$ as the shortest-path distance from $i$ to $j$ using only
intermediate vertices from $\\{1, 2, \ldots, k\\}$. Then:

- $d_{ij}^{(0)} = w(i,j)$ (the weight of edge $(i,j)$Or $\infty$ if no edge).
- For $k \geq 1$: The shortest path from $i$ to $j$ through vertices $\\{1, \ldots, k\\}$ either
  does not use vertex $k$ (giving $d_{ij}^{(k-1)}$) or uses vertex $k$ (giving
  $d_{ik}^{(k-1)} + d_{kj}^{(k-1)}$).

**Theorem 4.10.** Floyd-Warshall runs in $O(V^3)$ time and $O(V^2)$ space.

_Proof._ The triple nested loop ($k$, $i$, $j$) executes $V^3$ iterations, each doing $O(1)$ work.
The distance matrix requires $V^2$ space. Note that $d_{ij}^{(k)}$ can overwrite $d_{ij}^{(k-1)}$ in
place because $d_{ik}^{(k)} = d_{ik}^{(k-1)}$ and $d_{kj}^{(k)} = d_{kj}^{(k-1)}$ (paths from $i$ to
$k$ and $k$ to $j$ using vertices up to $k$ cannot be improved by going through $k$ again without a
negative cycle). $\blacksquare$

<details>
<summary>Worked Example: Floyd-Warshall on 4 Vertices</summary>

Find all-pairs shortest paths for the graph with vertices $\\{1, 2, 3, 4\\}$ and edges:
$w(1,2) = 3$, $w(1,3) = 8$, $w(1,4) = -4$ $w(2,1) = 5$, $w(2,3) = 7$, $w(2,4) = 2$ $w(3,1) = 2$,
$w(3,4) = -1$ $w(4,1) = 6$, $w(4,3) = 9$.

**Initial distance matrix $D^{(0)}$:**
$$D^{(0)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 2 \\ 2 & \infty & 0 & -1 \\ 6 & \infty & 9 & 0 \end{pmatrix}$$

**$k = 1$ (through vertex 1):** $D^{(1)}[2][3] = \min(7, 5 + 8) = 7$.
$D^{(1)}[2][4] = \min(2, 5 + (-4)) = 1$. $D^{(1)}[3][2] = \min(\infty, 2 + 3) = 5$.
$D^{(1)}[3][4] = \min(-1, 2 + (-4)) = -2$. $D^{(1)}[4][2] = \min(\infty, 6 + 3) = 9$.
$D^{(1)}[4][3] = \min(9, 6 + 8) = 9$.

$$D^{(1)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$

**$k = 2$ (through vertex 2):** $D^{(2)}[1][3] = \min(8, 3 + 7) = 8$.
$D^{(2)}[1][4] = \min(-4, 3 + 1) = -4$. $D^{(2)}[3][1] = \min(2, 5 + 5) = 2$.
$D^{(2)}[3][4] = \min(-2, 5 + 1) = -2$. $D^{(2)}[4][1] = \min(6, 9 + 5) = 6$.
$D^{(2)}[4][3] = \min(9, 9 + 7) = 9$.

$$D^{(2)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$

**$k = 3$ (through vertex 3):** $D^{(3)}[1][2] = \min(3, 8 + 5) = 3$.
$D^{(3)}[1][4] = \min(-4, 8 + (-2)) = -4$. $D^{(3)}[2][1] = \min(5, 7 + 2) = 5$.
$D^{(3)}[2][4] = \min(1, 7 + (-2)) = 1$. $D^{(3)}[4][1] = \min(6, 9 + 2) = 6$.
$D^{(3)}[4][2] = \min(9, 9 + 5) = 9$.

$$D^{(3)} = \begin{pmatrix} 0 & 3 & 8 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$

**$k = 4$ (through vertex 4):** $D^{(4)}[1][2] = \min(3, -4 + 9) = 3$.
$D^{(4)}[1][3] = \min(8, -4 + 9) = 5$. $D^{(4)}[2][1] = \min(5, 1 + 6) = 5$.
$D^{(4)}[2][3] = \min(7, 1 + 9) = 7$. $D^{(4)}[3][1] = \min(2, -2 + 6) = 2$.
$D^{(4)}[3][2] = \min(5, -2 + 9) = 5$.

$$D^{(4)} = \begin{pmatrix} 0 & 3 & 5 & -4 \\ 5 & 0 & 7 & 1 \\ 2 & 5 & 0 & -2 \\ 6 & 9 & 9 & 0 \end{pmatrix}$$

</details>

### 4.8 Minimum Spanning Tree

**Kruskal's Algorithm.** Sort edges by weight, add edges to the MST as long as they don't create a
Cycle (using Union-Find). $O(E \log E)$.

**Prim's Algorithm.** Start from any vertex, repeatedly add the minimum-weight edge connecting the
Tree to a non-tree vertex (using a priority queue). $O((V + E)\log V)$.

**Theorem 4.11 (Cut Property).** For any cut of the graph, the minimum-weight edge crossing the cut
Belongs to some MST.

_Proof._ Let $(S, V \setminus S)$ be a cut and $e = (u, v)$ be the minimum-weight crossing edge with
$u \in S$, $v \notin S$. Let $T$ be an MST. If $e \in T$We are done. Otherwise, adding $e$ to $T$
creates a cycle. This cycle must cross the cut at least once more (it goes from $u$ to $v$ via some
other path). Let $e'$ be another crossing edge on this cycle. Since $e$ is the minimum-weight
crossing edge, $w(e) \leq w(e')$. Replacing $e'$ with $e$ in $T$ gives a spanning tree of weight no
greater than $T$Hence an MST containing $e$. $\blacksquare$

**Theorem 4.12 (Cycle Property).** For any cycle, the maximum-weight edge on the cycle does not
belong To any MST.

_Proof._ Let $C$ be a cycle and $e$ be the maximum-weight edge on $C$. Let $T$ be an MST. If
$e \notin T$We are done. Otherwise, removing $e$ from $T$ disconnects it into two components. The
rest of cycle $C$ must contain an edge $e' \neq e$ crossing this cut. Since $w(e') \lt w(e)$ (if
$w(e') = w(e)$We can replace either), replacing $e$ with $e'$ gives a spanning tree of strictly
smaller weight, contradicting the optimality of $T$. $\blacksquare$

**Theorem 4.13.** Kruskal's algorithm produces a minimum spanning tree.

_Proof._ We prove by induction on the number of edges added. At each step, the algorithm adds the
minimum-weight edge that does not create a cycle. Consider the cut formed by the two connected
components that the new edge connects. By the cut property, this minimum-weight crossing edge
belongs to some MST. Since all previously added edges are in every MST (by induction), the edge set
maintained by the algorithm is always a subset of some MST. $\blacksquare$

**Theorem 4.14.** Prim's algorithm produces a minimum spanning tree.

_Proof._ By induction on the size of the tree. At each step, Prim's adds the minimum-weight edge
connecting the current tree $T$ to a vertex outside $T$. Consider the cut $(T, V \setminus T)$. By
the cut property, the minimum-weight crossing edge belongs to some MST. $\blacksquare$

<details>
<summary>Worked Example: Kruskal's Algorithm</summary>

Find the MST of the graph with edges (sorted by weight): $(D, E, 2)$, $(C, E, 3)$, $(A, B, 4)$,
$(B, C, 5)$, $(B, E, 6)$, $(A, E, 7)$, $(A, D, 8)$, $(C, D, 9)$.

Vertices: $\\{A, B, C, D, E\\}$.

Sorted edges: $(D,E,2)$, $(C,E,3)$, $(A,B,4)$, $(B,C,5)$, $(B,E,6)$, $(A,E,7)$, $(A,D,8)$,
$(C,D,9)$.

Process each edge:

1. $(D, E, 2)$: Add. Forest: $\\{D-E\\}$. Cost: 2.
2. $(C, E, 3)$: Add. Forest: $\\{C-D-E\\}$. Cost: 5.
3. $(A, B, 4)$: Add. Forest: $\\{A-B\\}$, $\\{C-D-E\\}$. Cost: 9.
4. $(B, C, 5)$: Add (connects two components). Forest: $\\{A-B-C-D-E\\}$. Cost: 14.
5. $(B, E, 6)$: Skip (creates cycle $B-C-D-E-B$).
6. $(A, E, 7)$: Skip (creates cycle).
7. $(A, D, 8)$: Skip (creates cycle).
8. $(C, D, 9)$: Skip (creates cycle).

**MST:** $(D,E,2)$, $(C,E,3)$, $(A,B,4)$, $(B,C,5)$. Total weight: 14.

</details>

<details>
<summary>Worked Example: Prim's Algorithm</summary>

Find the MST of the same graph starting from vertex $A$.

Edges from $A$: $(A,B,4)$, $(A,E,7)$, $(A,D,8)$. Minimum: $(A,B,4)$. Tree: $\\{A, B\\}$. Cost: 4.

Edges crossing cut: $(B,C,5)$, $(B,E,6)$, $(A,E,7)$, $(A,D,8)$. Minimum: $(B,C,5)$. Tree:
$\\{A, B, C\\}$. Cost: 9.

Edges crossing cut: $(C,E,3)$, $(C,D,9)$, $(B,E,6)$, $(A,E,7)$, $(A,D,8)$. Minimum: $(C,E,3)$. Tree:
$\\{A, B, C, E\\}$. Cost: 12.

Edges crossing cut: $(D,E,2)$, $(C,D,9)$, $(A,D,8)$. Minimum: $(D,E,2)$. Tree:
$\\{A, B, C, D, E\\}$. Cost: 14.

**MST:** $(A,B,4)$, $(B,C,5)$, $(C,E,3)$, $(D,E,2)$. Total weight: 14 (same as Kruskal's).

</details>

