---
id: graph-algorithms
title: Graph Algorithms
description:
  Graph algorithms — shortest paths, minimum spanning trees, network flow, and advanced graph
  techniques.
slug: graph-algorithms
---

## Shortest Paths

### Dijkstra's Algorithm

Dijkstra's algorithm finds the shortest path from a single source to all other vertices in a graph
with non-negative edge weights. It uses a greedy strategy: always process the unvisited vertex with
the smallest known distance.

```python
import heapq
from collections import defaultdict, deque

def dijkstra(graph, source):
    """
    Dijkstra's shortest paths from source to all vertices.
    Requires: all edge weights >= 0
    Time: O((V + E) log V) with binary heap
          O(V^2) with naive array (better for dense graphs)
    Space: O(V)
    """
    dist = {v: float('inf') for v in graph}
    dist[source] = 0
    prev = {v: None for v in graph}
    visited = set()
    pq = [(0, source)]  # (distance, vertex)

    while pq:
        d, u = heapq.heappop(pq)
        if u in visited:
            continue
        visited.add(u)
        for v, w in graph[u]:
            if v in visited:
                continue
            new_dist = d + w
            if new_dist < dist[v]:
                dist[v] = new_dist
                prev[v] = u
                heapq.heappush(pq, (new_dist, v))

    return dist, prev

def reconstruct_path(prev, target):
    """Reconstruct shortest path from predecessors array."""
    path = []
    current = target
    while current is not None:
        path.append(current)
        current = prev[current]
    return path[::-1]
```

**Why Dijkstra fails with negative edges:** Dijkstra's greedy choice assumes that once a vertex is
processed, its distance is final. With negative edges, a shorter path may be discovered later
through a vertex that has already been processed.

| Graph Type                   | Dijkstra                         | Bellman-Ford              | Floyd-Warshall |
| ---------------------------- | -------------------------------- | ------------------------- | -------------- |
| Non-negative, single source  | $O((V+E) \log V)$                | $O(VE)$                   | $O(V^3)$       |
| Negative, no negative cycles | Fails                            | $O(VE)$                   | $O(V^3)$       |
| Negative cycle detection     | Cannot                           | Yes                       | Yes            |
| All-pairs                    | Run $V$ times: $O(V(V+E)\log V)$ | Run $V$ times: $O(V^2 E)$ | $O(V^3)$       |

### Bellman-Ford Algorithm

Bellman-Ford handles negative edge weights and detects negative cycles. It relaxes all edges $V - 1$
times; if a further relaxation is possible, a negative cycle exists.

```python
def bellman_ford(vertices, edges, source):
    """
    Bellman-Ford shortest paths from source.
    Handles negative edges, detects negative cycles.
    Time: O(V * E)
    Space: O(V)
    """
    dist = {v: float('inf') for v in vertices}
    dist[source] = 0
    prev = {v: None for v in vertices}

    # Relax all edges V-1 times
    for _ in range(len(vertices) - 1):
        updated = False
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                prev[v] = u
                updated = True
        if not updated:
            break  # early termination

    # Check for negative cycles
    for u, v, w in edges:
        if dist[u] + w < dist[v]:
            raise ValueError("Negative cycle detected")

    return dist, prev
```

**Negative cycle detection:** If after $V-1$ relaxations, any edge can still be relaxed, there
exists a reachable negative cycle from the source. This is used in routing protocols (RIP) and
arbitrage detection in currency exchange.

```python
def detect_arbitrage(currencies, rates):
    """
    Detect arbitrage opportunity in currency exchange.
    Uses Bellman-Ford on the log of exchange rates.
    Time: O(V * E) where V = currencies, E = V^2
    """
    vertices = list(currencies)
    edges = []
    for i, c1 in enumerate(vertices):
        for j, c2 in enumerate(vertices):
            if i != j:
                # Edge weight = -log(rate): shorter path = better exchange rate
                edges.append((i, j, -rates[c1][c2]))

    try:
        bellman_ford(range(len(vertices)), edges, 0)
        return False  # no arbitrage
    except ValueError:
        return True  # negative cycle = arbitrage opportunity
```

### Floyd-Warshall Algorithm

Floyd-Warshall computes shortest paths between **all pairs** of vertices. It works with negative
edges (but not negative cycles).

$$dp[k][i][j] = \min(dp[k-1][i][j], dp[k-1][i][k] + dp[k-1][k][j])$$

In practice, we use only a 2D table because $dp[k]$ only depends on $dp[k-1]$.

```python
def floyd_warshall(n, edges):
    """
    All-pairs shortest paths.
    Time: O(V^3), Space: O(V^2)
    """
    INF = float('inf')
    dist = [[INF] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
    for u, v, w in edges:
        dist[u][v] = min(dist[u][v], w)

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    # Negative cycle check: any dist[i][i] < 0 means negative cycle through i
    for i in range(n):
        if dist[i][i] < 0:
            raise ValueError(f"Negative cycle through vertex {i}")

    return dist
```

:::info

Floyd-Warshall is the algorithm of choice when:

- You need all-pairs shortest paths and $V$ is small ($V \lt 500$)
- The graph is dense ($E \approx V^2$), where $O(V^3)$ is competitive with $V$ runs of Dijkstra
- You need to handle negative edges

For sparse graphs with large $V$, run Dijkstra from each vertex: $O(V(V+E)\log V)$ which is
$O(V^2 \log V)$ for sparse graphs, much better than $O(V^3)$.

:::

### A\* Search

A\* extends Dijkstra with a heuristic function $h(v)$ that estimates the cost from vertex $v$ to the
target. It uses the priority $f(v) = g(v) + h(v)$ where $g(v)$ is the known distance from source to
$v$.

```python
def a_star(graph, source, target, heuristic):
    """
    A* search from source to target.
    Time: O(E log V) with admissible heuristic
    Space: O(V)
    Guarantees shortest path if heuristic is admissible (never overestimates).
    """
    import heapq
    g_score = {v: float('inf') for v in graph}
    g_score[source] = 0
    f_score = {v: float('inf') for v in graph}
    f_score[source] = heuristic(source, target)
    prev = {v: None for v in graph}
    open_set = [(f_score[source], source)]
    closed = set()

    while open_set:
        _, u = heapq.heappop(open_set)
        if u in closed:
            continue
        if u == target:
            return reconstruct_path(prev, target)
        closed.add(u)
        for v, w in graph[u]:
            if v in closed:
                continue
            tentative_g = g_score[u] + w
            if tentative_g < g_score[v]:
                prev[v] = u
                g_score[v] = tentative_g
                f_score[v] = tentative_g + heuristic(v, target)
                heapq.heappush(open_set, (f_score[v], v))

    return None  # no path
```

**Admissibility:** The heuristic $h(v)$ must satisfy
$h(v) \le \mathrm{actual distance from } v
\mathrm{ to target}$. Common heuristics:

| Problem              | Heuristic                            | Admissible?    |
| -------------------- | ------------------------------------ | -------------- |
| Grid (4-directional) | Manhattan distance                   | Yes            |
| Grid (8-directional) | Chebyshev distance                   | Yes            |
| Euclidean space      | Euclidean distance                   | Yes            |
| Road networks        | Euclidean or precomputed lower bound | If well-chosen |

A* with an admissible heuristic is optimal. If the heuristic is not admissible, A* may find a
suboptimal path but will typically be faster. If $h(v) = 0$ for all $v$, A\* degrades to Dijkstra.

## Minimum Spanning Trees

A minimum spanning tree (MST) of a weighted, connected, undirected graph is a spanning tree with
minimum total edge weight. A spanning tree connects all vertices with exactly $V - 1$ edges and no
cycles.

### Cut Property

For any cut of the graph (a partition of vertices into two non-empty sets), the minimum-weight edge
crossing the cut belongs to some MST. This is the theoretical basis for both Kruskal's and Prim's
algorithms.

### Kruskal's Algorithm

Sort all edges by weight, then add them to the MST one at a time (skipping edges that would create a
cycle). Cycle detection uses Union-Find.

```python
def kruskal(n, edges):
    """
    Kruskal's MST algorithm.
    Time: O(E log E) for sorting, O(E * alpha(V)) for union-find
    Space: O(V + E)
    edges: list of (weight, u, v)
    """
    edges.sort()
    parent = list(range(n))
    rank = [0] * n

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]  # path halving
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
    total_weight = 0
    for w, u, v in edges:
        if union(u, v):
            mst.append((u, v, w))
            total_weight += w
            if len(mst) == n - 1:
                break

    return mst, total_weight
```

### Prim's Algorithm

Start from any vertex, repeatedly add the minimum-weight edge connecting a vertex in the MST to a
vertex outside the MST. Uses a priority queue.

```python
def prim(n, graph):
    """
    Prim's MST algorithm using adjacency list.
    Time: O((V + E) log V) with binary heap
    Space: O(V + E)
    graph: adjacency list {vertex: [(neighbour, weight), ...]}
    """
    import heapq
    visited = [False] * n
    min_heap = [(0, 0, -1)]  # (weight, vertex, parent)
    mst = []
    total_weight = 0

    while min_heap:
        w, u, parent = heapq.heappop(min_heap)
        if visited[u]:
            continue
        visited[u] = True
        total_weight += w
        if parent != -1:
            mst.append((parent, u, w))
        for v, weight in graph.get(u, []):
            if not visited[v]:
                heapq.heappush(min_heap, (weight, v, u))

    return mst, total_weight
```

| Algorithm             | Time              | Best When         | Data Structure |
| --------------------- | ----------------- | ----------------- | -------------- |
| Kruskal               | $O(E \log E)$     | Sparse graphs     | Union-Find     |
| Prim                  | $O((V+E) \log V)$ | Dense graphs      | Priority queue |
| Prim (Fibonacci heap) | $O(E + V \log V)$ | Very dense graphs | Fibonacci heap |

:::info

For dense graphs ($E \approx V^2$), Prim's algorithm with a Fibonacci heap is asymptotically optimal
at $O(E + V \log V)$. For sparse graphs ($E \approx V$), Kruskal's is simpler and equally fast.

:::

## Strong Connectivity

### Kosaraju's Algorithm

Find all strongly connected components (SCCs) in a directed graph using two DFS passes.

1. Run DFS on the original graph, pushing vertices onto a stack in order of finishing time
2. Compute the transpose (reverse all edges)
3. Run DFS on the transpose in the order determined by the stack

```python
def kosaraju(graph):
    """
    Find strongly connected components using Kosaraju's algorithm.
    Time: O(V + E), Space: O(V + E)
    Returns list of SCCs (each SCC is a list of vertices).
    """
    visited = set()
    order = []

    def dfs(v):
        visited.add(v)
        for neighbour, _ in graph.neighbours(v):
            if neighbour not in visited:
                dfs(neighbour)
        order.append(v)

    for v in graph.adj:
        if v not in visited:
            dfs(v)

    # Build transpose
    transpose = {v: [] for v in graph.adj}
    for v in graph.adj:
        for neighbour, _ in graph.neighbours(v):
            transpose[neighbour].append(v)

    visited = set()
    sccs = []

    for v in reversed(order):
        if v not in visited:
            scc = []
            stack = [v]
            visited.add(v)
            while stack:
                node = stack.pop()
                scc.append(node)
                for neighbour in transpose[node]:
                    if neighbour not in visited:
                        visited.add(neighbour)
                        stack.append(neighbour)
            sccs.append(scc)

    return sccs
```

### Tarjan's Algorithm

Tarjan's algorithm finds SCCs in a single DFS pass using a stack and low-link values.

```python
def tarjan_scc(graph):
    """
    Find SCCs using Tarjan's algorithm.
    Time: O(V + E), Space: O(V)
    """
    index_counter = [0]
    stack = []
    on_stack = set()
    index = {}
    lowlink = {}
    sccs = []

    def strongconnect(v):
        index[v] = index_counter[0]
        lowlink[v] = index_counter[0]
        index_counter[0] += 1
        stack.append(v)
        on_stack.add(v)

        for neighbour, _ in graph.neighbours(v):
            if neighbour not in index:
                strongconnect(neighbour)
                lowlink[v] = min(lowlink[v], lowlink[neighbour])
            elif neighbour in on_stack:
                lowlink[v] = min(lowlink[v], index[neighbour])

        if lowlink[v] == index[v]:
            scc = []
            while True:
                w = stack.pop()
                on_stack.remove(w)
                scc.append(w)
                if w == v:
                    break
            sccs.append(scc)

    for v in graph.adj:
        if v not in index:
            strongconnect(v)

    return sccs
```

## Network Flow

### Ford-Fulkerson Method

The Ford-Fulkerson method finds the maximum flow in a flow network by repeatedly finding augmenting
paths from source to sink and pushing flow along them.

```python
def ford_fulkerson(n, capacity, source, sink):
    """
    Ford-Fulkerson max flow (Edmonds-Karp implementation with BFS).
    Time: O(V * E^2) with BFS (Edmonds-Karp)
    Space: O(V + E)
    capacity: adjacency matrix capacity[u][v] = max flow on edge u->v
    """
    max_flow = 0
    parent = [-1] * n

    def bfs():
        visited = [False] * n
        queue = deque([source])
        visited[source] = True
        while queue:
            u = queue.popleft()
            for v in range(n):
                if not visited[v] and capacity[u][v] > 0:
                    parent[v] = u
                    visited[v] = True
                    queue.append(v)
                    if v == sink:
                        return True
        return False

    while bfs():
        # Find minimum residual capacity along the path
        path_flow = float('inf')
        v = sink
        while v != source:
            u = parent[v]
            path_flow = min(path_flow, capacity[u][v])
            v = u

        # Update residual capacities
        v = sink
        while v != source:
            u = parent[v]
            capacity[u][v] -= path_flow
            capacity[v][u] += path_flow  # add reverse edge
            v = u

        max_flow += path_flow

    return max_flow
```

### Edmonds-Karp Algorithm

Edmonds-Karp is Ford-Fulkerson where the augmenting path is found using BFS (shortest path in terms
of number of edges). This guarantees $O(VE^2)$ time complexity and always terminates (even with
non-integer capacities).

### Max-Flow Min-Cut Theorem

The maximum flow from source to sink equals the minimum capacity of any cut separating source from
sink. A cut is a partition of vertices into two sets $S$ (containing source) and $T$ (containing
sink), and the cut capacity is the sum of capacities of edges from $S$ to $T$.

```python
def min_cut(n, capacity, source, sink):
    """
    Find min cut after computing max flow.
    Returns (cut_capacity, s_side, t_side).
    """
    # Run Edmonds-Karp to get residual graph
    max_flow = ford_fulkerson(n, capacity, source, sink)

    # BFS on residual graph to find reachable vertices from source
    visited = [False] * n
    queue = deque([source])
    visited[source] = True
    while queue:
        u = queue.popleft()
        for v in range(n):
            if not visited[v] and capacity[u][v] > 0:
                visited[v] = True
                queue.append(v)

    s_side = [i for i in range(n) if visited[i]]
    t_side = [i for i in range(n) if not visited[i]]
    return max_flow, s_side, t_side
```

### Applications of Max-Flow

| Application          | How to Model                                                |
| -------------------- | ----------------------------------------------------------- |
| Bipartite matching   | Source to left set, right set to sink, all edges capacity 1 |
| Image segmentation   | Pixels as vertices, source=foreground, sink=background      |
| Project selection    | Source=projects, sink=resources, capacities=profits/costs   |
| Baseball elimination | Teams as vertices, remaining games as edges                 |
| Network reliability  | Edge connectivity via min-cut                               |

## Eulerian Paths and Circuits

An **Eulerian circuit** visits every edge exactly once and returns to the start. An **Eulerian
path** visits every edge exactly once (may start and end at different vertices).

### Existence Conditions

| Property                      | Eulerian Circuit | Eulerian Path                   |
| ----------------------------- | ---------------- | ------------------------------- |
| Connected                     | Yes              | Yes                             |
| All vertices even degree      | Yes              | No                              |
| Exactly 2 vertices odd degree | No               | Yes (start/end at odd vertices) |
| Other                         | No               | No                              |

```python
def hierholzer(n, graph):
    """
    Find Eulerian circuit using Hierholzer's algorithm.
    Time: O(V + E), Space: O(V + E)
    Assumes Eulerian circuit exists.
    """
    adj = {v: list(neighbours) for v, neighbours in graph.items()}
    stack = [0]
    circuit = []

    while stack:
        v = stack[-1]
        if adj[v]:
            u = adj[v].pop()
            stack.append(u)
        else:
            circuit.append(stack.pop())

    return circuit[::-1]
```

## Graph Coloring

### Bipartite Graph Coloring

A graph is bipartite if and only if it is 2-colorable. Use BFS to assign colors.

### General Graph Coloring

The chromatic number $\chi(G)$ is the minimum number of colors needed. Finding it is NP-hard for
general graphs, but greedy coloring gives an approximation.

```python
def greedy_coloring(n, graph):
    """
    Greedy graph coloring.
    Time: O(V + E), Space: O(V)
    Uses at most max_degree + 1 colors (by Brook's theorem, at most max_degree for connected graphs
    that are not complete or odd cycles).
    """
    colors = [-1] * n
    colors[0] = 0

    for v in range(1, n):
        used = set()
        for neighbour in graph.get(v, []):
            if colors[neighbour] != -1:
                used.add(colors[neighbour])
        # Find smallest available color
        color = 0
        while color in used:
            color += 1
        colors[v] = color

    return colors
```

**Brook's Theorem:** For a connected graph that is neither a complete graph nor an odd cycle,
$\chi(G) \le \Delta(G)$ where $\Delta(G)$ is the maximum degree. This means the greedy algorithm
uses at most $\Delta + 1$ colors, and for most graphs, $\Delta$ colors.

## Travelling Salesman Problem (TSP)

Given a complete graph with weighted edges, find the Hamiltonian cycle of minimum total weight. TSP
is NP-hard; exact solutions use bitmask DP ($O(2^n \cdot n^2)$, feasible for $n \le 20$).

### Approximation Algorithms

| Algorithm         | Approximation Ratio | Time                   | Notes                     |
| ----------------- | ------------------- | ---------------------- | ------------------------- |
| Nearest neighbour | $O(\log n)$         | $O(n^2)$               | Simple, no guarantee      |
| Christofides      | 1.5                 | $O(n^3)$               | Best known for metric TSP |
| 2-opt improvement | Empirical           | $O(n^2)$ per iteration | Local search              |
| Held-Karp (DP)    | Exact               | $O(2^n \cdot n^2)$     | Exact, $n \le 20$         |

**Metric TSP:** When the triangle inequality holds ($d(u, w) \le d(u, v) + d(v, w)$), Christofides'
algorithm guarantees a solution within 1.5 times optimal.

```python
def tsp_nearest_neighbour(dist):
    """
    Nearest neighbour heuristic for TSP.
    Time: O(n^2)
    No approximation guarantee, but often reasonable in practice.
    """
    n = len(dist)
    visited = [False] * n
    path = [0]
    visited[0] = True
    total = 0

    for _ in range(n - 1):
        current = path[-1]
        nearest = -1
        nearest_dist = float('inf')
        for j in range(n):
            if not visited[j] and dist[current][j] < nearest_dist:
                nearest = j
                nearest_dist = dist[current][j]
        path.append(nearest)
        visited[nearest] = True
        total += nearest_dist

    total += dist[path[-1]][path[0]]  # return to start
    return total, path
```

## Common Graph Problem Patterns

### Pattern 1: Shortest Path Variants

- **Single source, non-negative weights:** Dijkstra
- **Single source, negative weights:** Bellman-Ford
- **All pairs, small V:** Floyd-Warshall
- **All pairs, large V, sparse:** Run Dijkstra $V$ times
- **With heuristic:** A\*
- **Unweighted:** BFS

### Pattern 2: Topological Ordering

- **Kahn's algorithm (BFS):** Process vertices with in-degree 0
- **DFS-based:** Process in reverse post-order
- **Application:** Build systems (Make), course scheduling, deadlock detection

### Pattern 3: Connected Components

- **Undirected:** BFS/DFS from each unvisited vertex
- **Strongly connected (directed):** Kosaraju's or Tarjan's algorithm
- **Application:** Social network communities, image segmentation

### Pattern 4: Minimum Spanning Tree

- **Sparse graph:** Kruskal's with Union-Find
- **Dense graph:** Prim's with priority queue
- **Application:** Network design, clustering

### Pattern 5: Network Flow

- **Max flow:** Ford-Fulkerson / Edmonds-Karp
- **Min cut:** Complement of max flow
- **Bipartite matching:** Max flow with unit capacities
- **Application:** Matching, assignment, scheduling

## Common Pitfalls

### 1. Dijkstra on Graphs with Negative Weights

Dijkstra does not work with negative edge weights. The algorithm assumes that processing a vertex
means its shortest distance is final, but a negative edge can provide a shorter path to an already-
processed vertex. Use Bellman-Ford for graphs with negative weights.

### 2. Floyd-Warshall Infinity Overflow

In Floyd-Warshall, the relaxation step is `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`.
If `dist[i][k]` or `dist[k][j]` is `inf`, the sum becomes `inf`, which is correct. But if your `inf`
is not large enough (e.g., `float('inf') / 2 + float('inf') / 2`), you may get incorrect results.
Use a sufficiently large sentinel value or handle infinity explicitly.

### 3. Union-Find in Kruskal's Without Path Compression

Without path compression, Kruskal's Union-Find operations degrade to $O(\log n)$ each, giving
$O(E \log V + E \log V) = O(E \log V)$ total. With path compression and union by rank, it drops to
$O(E \cdot \alpha(V))$, which is effectively $O(E)$. Always use both optimisations.

### 4. A\* with Inadmissible Heuristic

If the heuristic overestimates the true distance, A\* is not guaranteed to find the shortest path.
It may still find a path quickly, but it will be suboptimal. For pathfinding in games, this is often
acceptable (speed over optimality). For navigation systems, it is not.

### 5. Not Handling Disconnected Graphs in MST

Kruskal's and Prim's algorithms assume a connected graph. If the graph is disconnected, they will
produce a minimum spanning **forest** (one tree per connected component). If you need to detect
disconnection, check that the MST has $V - 1$ edges.

### 6. BFS Queue Performance

Using `list.pop(0)` for BFS is $O(n)$ per operation, giving $O(n^2)$ total. Use `collections.deque`
with `popleft()` for $O(1)$ operations. This is one of the most common performance bugs in Python
graph code.

### 7. Modifying Graph During Traversal

Modifying the graph structure (adding/removing vertices or edges) during BFS/DFS traversal leads to
undefined behaviour — vertices may be skipped or processed multiple times. If you need to modify the
graph, collect the modifications and apply them after the traversal completes.

### 8. Ignoring Edge Cases in Flow Networks

Ford-Fulkerson may not terminate with irrational capacities (the flow can converge without reaching
the maximum). Edmonds-Karp (BFS-based) always terminates with $O(VE^2)$ complexity. For integer
capacities, Ford-Fulkerson terminates in $O(E \cdot f^*)$ where $f^*$ is the max flow value — this
can be exponential. Always use Edmonds-Karp or Dinic's algorithm unless you have a specific reason
not to.

## Dinic's Algorithm

Dinic's algorithm improves on Edmonds-Karp by finding multiple augmenting paths per BFS phase using
a level graph and DFS with blocking flows.

```python
def dinic(n, capacity, source, sink):
    """
    Dinic's max flow algorithm.
    Time: O(V^2 * E) general, O(E * sqrt(V)) for bipartite matching
    Space: O(V + E)
    """
    level = [0] * n
    ptr = [0] * n
    adj = [[] for _ in range(n)]

    for u in range(n):
        for v in range(n):
            if capacity[u][v] > 0:
                adj[u].append(v)
                adj[v].append(u)

    def bfs():
        for i in range(n):
            level[i] = -1
        queue = [source]
        level[source] = 0
        head = 0
        while head < len(queue):
            u = queue[head]
            head += 1
            for v in adj[u]:
                if level[v] == -1 and capacity[u][v] > 0:
                    level[v] = level[u] + 1
                    queue.append(v)
        return level[sink] != -1

    def dfs(u, flow):
        if u == sink:
            return flow
        for i in range(ptr[u], len(adj[u])):
            v = adj[u][i]
            if level[v] == level[u] + 1 and capacity[u][v] > 0:
                pushed = dfs(v, min(flow, capacity[u][v]))
                if pushed > 0:
                    capacity[u][v] -= pushed
                    capacity[v][u] += pushed
                    return pushed
            ptr[u] += 1
        return 0

    max_flow = 0
    while bfs():
        ptr = [0] * n
        while True:
            pushed = dfs(source, float('inf'))
            if pushed == 0:
                break
            max_flow += pushed

    return max_flow
```

| Algorithm                    | Time Complexity   | Best For                               |
| ---------------------------- | ----------------- | -------------------------------------- |
| Edmonds-Karp                 | $O(VE^2)$         | Simple implementation, small graphs    |
| Dinic's                      | $O(V^2 E)$        | General purpose, good constant factors |
| Dinic's (bipartite)          | $O(E \sqrt{V})$   | Bipartite matching                     |
| Push-relabel                 | $O(V^3)$          | Dense graphs                           |
| Push-relabel (highest label) | $O(V^2 \sqrt{E})$ | General purpose                        |

## Bipartite Matching

### Maximum Bipartite Matching via Max-Flow

Create a source connected to all left vertices (capacity 1), all edges from left to right (capacity
1), and all right vertices connected to sink (capacity 1). The max flow equals the maximum matching.

### Hopcroft-Karp Algorithm

A dedicated algorithm for bipartite matching that is faster than general max-flow.

```python
def hopcroft_karp(n_left, n_right, edges):
    """
    Maximum bipartite matching using Hopcroft-Karp.
    Time: O(E * sqrt(V))
    Space: O(V)
    edges: list of (u, v) where u in [0, n_left), v in [0, n_right)
    """
    from collections import deque

    adj = [[] for _ in range(n_left)]
    for u, v in edges:
        adj[u].append(v)

    pair_u = [-1] * n_left
    pair_v = [-1] * n_right
    dist = [0] * n_left

    def bfs():
        queue = deque()
        for u in range(n_left):
            if pair_u[u] == -1:
                dist[u] = 0
                queue.append(u)
            else:
                dist[u] = float('inf')
        dist_null = float('inf')
        while queue:
            u = queue.popleft()
            if dist[u] < dist_null:
                for v in adj[u]:
                    if pair_v[v] == -1:
                        dist_null = dist[u] + 1
                    elif dist[pair_v[v]] == float('inf'):
                        dist[pair_v[v]] = dist[u] + 1
                        queue.append(pair_v[v])
        return dist_null != float('inf')

    def dfs(u):
        for v in adj[u]:
            if pair_v[v] == -1 or (dist[pair_v[v]] == dist[u] + 1 and dfs(pair_v[v])):
                pair_u[u] = v
                pair_v[v] = u
                return True
        dist[u] = float('inf')
        return False

    matching = 0
    while bfs():
        for u in range(n_left):
            if pair_u[u] == -1:
                if dfs(u):
                    matching += 1

    return matching, pair_u
```

**Applications of bipartite matching:**

| Application                  | Left Set  | Right Set   | Edge Meaning              |
| ---------------------------- | --------- | ----------- | ------------------------- |
| Job assignment               | Workers   | Jobs        | Worker can do job         |
| Course scheduling            | Students  | Time slots  | Student available at slot |
| Hall's marriage              | People    | Preferences | Acceptable pairing        |
| Image segmentation           | Pixels    | Labels      | Pixel can have label      |
| Compiler register allocation | Variables | Registers   | Variable can use register |

## Minimum Vertex Cover (Konig's Theorem)

In a bipartite graph, the size of the minimum vertex cover equals the size of the maximum matching.
This follows from the max-flow min-cut theorem.

```python
def minimum_vertex_cover(n_left, n_right, edges):
    """
    Minimum vertex cover in bipartite graph via Konig's theorem.
    Time: O(E * sqrt(V))
    """
    matching, pair_u = hopcroft_karp(n_left, n_right, edges)

    # Find unmatched left vertices
    unmatched = set()
    for u in range(n_left):
        if pair_u[u] == -1:
            unmatched.add(u)

    # BFS from unmatched left vertices
    # Left side: reach via unmatched edges (not in matching)
    # Right side: reach via matched edges (in matching)
    adj = [[] for _ in range(n_left)]
    for u, v in edges:
        adj[u].append(v)

    visited_left = set(unmatched)
    visited_right = set()
    queue = list(unmatched)

    while queue:
        u = queue.pop()
        for v in adj[u]:
            if v not in visited_right:
                visited_right.add(v)
                # Follow matched edge from v
                if pair_v[v] != -1:
                    partner = pair_v[v]
                    if partner not in visited_left:
                        visited_left.add(partner)
                        queue.append(partner)

    # Vertex cover: (left - visited_left) U (visited_right)
    left_cover = [u for u in range(n_left) if u not in visited_left]
    right_cover = list(visited_right)

    return left_cover + right_cover
```

## Strongly Connected Components: Applications

### 2-SAT Problem

A 2-SAT formula is a conjunction of clauses, each with exactly two literals. Determining
satisfiability reduces to finding SCCs in the implication graph.

```python
def two_sat(n_vars, clauses):
    """
    Solve 2-SAT using SCC decomposition.
    Time: O(V + E) where V = 2*n_vars, E = 2*len(clauses)
    Returns (satisfiable, assignment) where assignment is list of booleans.
    """
    # Build implication graph
    # Variable i: node 2*i (true), node 2*i+1 (false)
    g = defaultdict(list)
    g_rev = defaultdict(list)

    def var_node(var, is_true):
        return 2 * var + (0 if is_true else 1)

    for a, b in clauses:
        # clause (a OR b) is equivalent to (!a -> b) AND (!b -> a)
        a_var, a_true = abs(a) - 1, a > 0
        b_var, b_true = abs(b) - 1, b > 0

        g[var_node(a_var, not a_true)].append(var_node(b_var, b_true))
        g[var_node(b_var, not b_true)].append(var_node(a_var, a_true))

    # Find SCCs using Kosaraju's or Tarjan's
    # A formula is satisfiable iff no variable and its negation are in the same SCC
    # ... (SCC computation omitted for brevity, use tarjan_scc from above)
```

The key theorem: a 2-SAT formula is satisfiable if and only if no variable and its negation are in
the same strongly connected component. This gives a linear-time algorithm for a problem that is
NP-hard for 3-SAT.
