---
title: Graph Theory
tags:
  - Computing
  - University
---

### 5.1 Definitions

A **graph** $G = (V, E)$ consists of a set of vertices $V$ and a set of edges
$E \subseteq V \times V$.

- **Simple graph:** no loops, no multiple edges.
- **Directed graph (digraph):** edges have direction.
- **Weighted graph:** edges have weights.

The **degree** of a vertex $v$, $\deg(v)$Is the number of edges incident to $v$.

**Theorem 5.1 (Handshaking Lemma).** $\sum_{v \in V} \deg(v) = 2|E|$.

_Proof._ Each edge contributes 1 to the degree of each of its two endpoints. $\blacksquare$

**Corollary 5.2.** The number of vertices of odd degree is even.

### 5.2 Paths, Cycles, and Connectivity

A **walk** is a sequence of vertices where consecutive vertices are adjacent. A **path** is a walk
With no repeated vertices. A **cycle** is a path that returns to its starting vertex.

A graph is **connected** if there is a path between every pair of vertices. A **connected
component** Is a maximal connected subgraph.

**Theorem 5.3.** A graph with $n$ vertices and more than $(n-1)(n-2)/2$ edges is connected.

### 5.3 Trees

A **tree** is a connected acyclic graph. A **forest** is a disjoint union of trees.

**Theorem 5.4.** For a graph $G$ with $n$ vertices, the following are equivalent:

1. $G$ is a tree.
2. $G$ is connected and has $n - 1$ edges.
3. $G$ is acyclic and has $n - 1$ edges.
4. Between any two vertices, there is exactly one path.

**Cayley's Formula.** The number of labelled trees on $n$ vertices is $n^{n-2}$.

### 5.4 Planarity

A graph is **planar** if it can be drawn in the plane with no edge crossings.

**Theorem 5.5 (Euler's Formula for Planar Graphs).** For a connected planar graph drawn in the plane
With $V$ vertices, $E$ edges, and $F$ faces:

$$V - E + F = 2$$

_Proof sketch._ Build the graph edge by edge. Starting from a single vertex ($V = 1$, $E = 0$,
$F = 1$), The quantity $V - E + F = 2$ is preserved when adding an edge: if the edge connects two
components, $E$ and $V$ each increase by 1; if it splits a face, $E$ and $F$ each increase by 1.
$\blacksquare$

**Corollary 5.6.** For a simple planar graph with $V \geq 3$: $E \leq 3V - 6$.

_Proof._ Every face has at least 3 edges on its boundary, and every edge borders at most 2 faces, So
$3F \leq 2E$. By Euler's formula, $F = 2 - V + E$Giving $3(2 - V + E) \leq 2E$I.e., $E \leq 3V - 6$.
$\blacksquare$

**Corollary 5.7.** $K_5$ and $K_{3,3}$ are not planar.

_Proof._ $K_5$ has $V = 5$, $E = 10$But $10 \gt 3(5) - 6 = 9$. For $K_{3,3}$, $V = 6$, $E = 9$.
Since $K_{3,3}$ has no triangles, every face has at least 4 edges, giving $4F \leq 2E$So
$F \leq E/2 = 4.5$. But $V - E + F = 2$ gives $F = 2 - 6 + 9 = 5 \gt 4.5$. Contradiction.
$\blacksquare$

**Theorem 5.8 (Kuratowski's Theorem).** A graph is planar if and only if it does not contain a
Subdivision of $K_5$ or $K_{3,3}$ as a subgraph.

A **subdivision** of an edge $uv$ replaces $uv$ with a path $u$--$w$--$v$ through a new vertex $w$.
A graph $H$ is a subdivision of $G$ if $H$ can be obtained from $G$ by subdividing edges.

**Worked Example.** Show that $K_{3,3}$ is not planar using Euler's formula.

<details>
<summary>Solution</summary>

$K_{3,3}$ has $V = 6$ vertices and $E = 9$ edges. It is bipartite (partition sizes 3 and 3), so it
Contains no triangles. Every face in a planar embedding must therefore be bounded by at least 4
edges, Giving $4F \leq 2E$I.e., $F \leq 9/2 = 4.5$.

But Euler's formula gives $F = E - V + 2 = 9 - 6 + 2 = 5$. Since $5 \gt 4.5$No planar embedding
Exists. $\blacksquare$

</details>

### 5.5 Graph Colouring

A **proper $k$-colouring** assigns one of $k$ colours to each vertex such that adjacent vertices
have Different colours. The **chromatic number** $\chi(G)$ is the minimum $k$ for which a proper
$k$-colouring Exists.

**Theorem 5.9 (Four Colour Theorem).** Every planar graph is 4-colourable.

**Theorem 5.10 (Five Colour Theorem).** Every planar graph is 5-colourable. (Easier to prove.)

**Theorem 5.11 (Greedy Colouring Bound).** $\chi(G) \leq \Delta(G) + 1$ where $\Delta(G)$ is the
Maximum degree.

**Theorem 5.12 (Brooks' Theorem).** If $G$ is connected and is neither a complete graph nor an odd
Cycle, then $\chi(G) \leq \Delta(G)$.

**Chromatic polynomial.** The **chromatic polynomial** $P(G, k)$ counts the number of proper
$k$-colourings of $G$.

**Theorem 5.13.** $P(G, k)$ is a polynomial in $k$.

**Deletion-contraction recurrence.** For any edge $e$ of $G$:

$$P(G, k) = P(G - e, k) - P(G / e, k)$$

Where $G - e$ is $G$ with edge $e$ deleted, and $G / e$ is $G$ with $e$ contracted (its endpoints
Merged).

**Worked Example.** Find the chromatic polynomial of $C_4$ (the 4-cycle).

<details>
<summary>Solution</summary>

Label the vertices of $C_4$ as $v_1, v_2, v_3, v_4$ with edges $v_1v_2$, $v_2v_3$, $v_3v_4$,
$v_4v_1$.

Pick edge $e = v_1v_2$.

$G - e$ is a path on 4 vertices (a tree): $P(G - e, k) = k(k-1)^3$.

$G / e$ merges $v_1$ and $v_2$Yielding $C_3$ (triangle): $P(C_3, k) = k(k-1)(k-2)$.

Therefore $P(C_4, k) = k(k-1)^3 - k(k-1)(k-2) = k(k-1)[(k-1)^2 - (k-2)] = k(k-1)(k^2 - 3k + 3)$.

Checking: $P(C_4, 2) = 2(1)(4 - 6 + 3) = 2$ (two 2-colourings: alternating), and
$P(C_4, 3) = 3 \cdot 2 \cdot (9 - 9 + 3) = 18$. $\blacksquare$

</details>

**Worked Example.** Find $\chi(K_n)$ and $\chi(K_{m,n})$.

<details>
<summary>Solution</summary>

$K_n$ (complete graph on $n$ vertices): every pair of vertices is adjacent, so all $n$ vertices must
Receive distinct colours. Hence $\chi(K_n) = n$.

$K_{m,n}$ (complete bipartite graph): no two vertices within the same partition are adjacent, so we
Can colour all vertices in the first partition with colour 1 and all in the second with colour 2.
Hence $\chi(K_{m,n}) = 2$ (for $m, n \geq 1$).

</details>

**Worked Example.** Find the chromatic polynomial of $K_3$ (triangle).

<details>
<summary>Solution</summary>

Choose a colour for vertex 1: $k$ choices. Choose a colour for vertex 2 (different from vertex 1):
$k - 1$ choices. Choose a colour for vertex 3 (different from both): $k - 2$ choices.

$P(K_3, k) = k(k-1)(k-2)$.

Checking: $P(K_3, 2) = 2 \cdot 1 \cdot 0 = 0$ (not 2-colourable, as expected). $P(K_3, 3) = 6$.

</details>

### 5.6 Euler and Hamilton Paths

An **Euler path** visits every edge exactly once. An **Euler circuit** is an Euler path that starts
And ends at the same vertex.

**Theorem 5.14.** A connected graph has an Euler circuit if and only if every vertex has even
degree. It has an Euler path (but not circuit) if and only if exactly two vertices have odd degree.

_Proof (sufficiency)._ If every vertex has even degree, start at any vertex and follow edges, never
Reusing an edge. Since all degrees are even, the walk can only terminate at the starting vertex,
Forming a circuit $C$. If $C$ uses all edges, we are done. Otherwise, remove $C$'s edges; each
Remaining component has all vertices of even degree (each lost an even number of incident edges). By
induction, each component has an Euler circuit. Splicing these circuits into $C$ at shared Vertices
yields an Euler circuit of the full graph. $\blacksquare$

**Worked Example.** Does $K_{2,3}$ have an Euler circuit? An Euler path?

<details>
<summary>Solution</summary>

$K_{2,3}$ has 5 vertices. The two vertices in the first partition each have degree 3 (connected to
All three in the second partition). The three vertices in the second partition each have degree 2.

Vertices of odd degree: two (each of degree 3). Since exactly two vertices have odd degree,
$K_{2,3}$ has an Euler path (starting at one odd-degree vertex, ending at the other) but not an
Euler circuit.

</details>

A **Hamilton path** visits every vertex exactly once. A **Hamilton circuit** is a Hamilton path that
Returns to the start.

**Theorem 5.15 (Dirac's Theorem).** If $G$ is a simple graph with $n \geq 3$ vertices and
$\deg(v) \geq n/2$ for every vertex, then $G$ has a Hamilton circuit.

**Theorem 5.16 (Ore's Theorem).** If $G$ is a simple graph with $n \geq 3$ vertices and
$\deg(u) + \deg(v) \geq n$ for every pair of non-adjacent vertices $u, v$Then $G$ has a Hamilton
Circuit.

Note that Dirac's theorem is a corollary of Ore’s theorem.

**Worked Example.** Does $K_{2,3}$ have a Hamilton circuit?

<details>
<summary>Solution</summary>

$K_{2,3}$ has 5 vertices. A Hamilton circuit must visit all 5 vertices and return. Label the
Partitions as $A = \\{a_1, a_2\\}$ and $B = \\{b_1, b_2, b_3\\}$. Any cycle in a bipartite graph
alternates Between the two partitions. A Hamilton cycle would alternate between $A$ and $B$Requiring
$|A| = |B|$. But $|A| = 2 \neq 3 = |B|$So no Hamilton circuit exists.

However, $K_{2,3}$ does have Hamilton paths (e.g., $a_1, b_1, a_2, b_2, b_3$ -- wait, this doesn't
Alternate properly). Actually, in $K_{2,3}$ edges only exist between $A$ and $B$. A path must
alternate $A, B, A, B, \ldots$ or $B, A, B, A, \ldots$. A Hamilton path visits all 5 vertices, so it
has the Form $a, b, a, b, a$ (length 5, starting and ending in $A$) or $b, a, b, a, b$ (length 5,
starting And ending in $B$). The first requires 3 vertices from $A$But $|A| = 2$. The second
requires 3 Vertices from $B$And $|B| = 3$. So a Hamilton path exists: e.g.,
$b_1, a_1, b_2, a_2, b_3$.

</details>

**Worked Example.** Let $G$ have vertices $\\{1, 2, 3, 4, 5\\}$ and edges
$12, 23, 34, 45, 51, 13, 35$. Does $G$ have an Euler circuit or Euler path?

<details>
<summary>Solution</summary>

Degrees: $\deg(1) = 3$, $\deg(2) = 2$, $\deg(3) = 4$, $\deg(4) = 2$, $\deg(5) = 3$. Two vertices (1
and 5) have odd degree. Since exactly two vertices have odd degree, $G$ has an Euler Path (starting
at 1, ending at 5) but no Euler circuit.

One Euler path: $1 \to 2 \to 3 \to 4 \to 5 \to 3 \to 1 \to 5$. All 7 edges are used exactly once. ✓

</details>

**Algorithm (Hierholzer's).** To find an Euler circuit: start at any vertex, follow unused edges
Until returning to the start. If unused edges remain, find a vertex on the current circuit with
Unused edges, find a subtour, and splice it in. Repeat until all edges are used.

:::caution Common Pitfall Determining whether a graph has a Hamilton path/circuit is NP-complete ,
whereas Euler Paths/circuits can be determined in polynomial time using the degree condition. Do not
confuse the two.

### 5.7 Matching Theory

A **matching** $M$ in a graph $G = (V, E)$ is a set of pairwise disjoint edges (no two share an
Endpoint). A vertex is **matched** if it is an endpoint of an edge in $M$; otherwise it is
**unmatched**. A **perfect matching** covers every vertex.

**Theorem 5.17 (Hall's Marriage Theorem, 1935).** Let $G = (V, E)$ be a bipartite graph with
Partitions $X$ and $Y$. There exists a matching that covers every vertex in $X$ if and only if for
Every subset $S \subseteq X$

$$|N(S)| \geq |S|$$

Where $N(S) = \\{y \in Y : \exists\, x \in S\; \mathrm{with{}\; xy \in E\\}$ is the neighbourhood of
$S$.

_Proof (necessity)._ If a matching covers $X$Each $x \in S$ is matched to a distinct $y \in N(S)$ So
$|N(S)| \geq |S|$.

_Proof (sufficiency by induction on $|X|$)._ Base case $|X| = 1$: Hall's condition gives
$|N(\\{x\\})| \geq 1$ So $x$ has a neighbour, and we can match $x$ to it.

Inductive step. Consider two cases.

_Case 1:_ For every nonempty proper subset $S \subsetneq X$, $|N(S)| \gt |S|$. Pick any edge $xy$.
In $G' = G - \\{x, y\\}$Hall’s condition still holds (removing one element from each side preserves
the Strict inequality). By the induction hypothesis, $X \setminus \\{x\\}$ can be matched in $G'$.
Adding $xy$ Gives the desired matching.

_Case 2:_ There exists a nonempty proper $T \subsetneq X$ with $|N(T)| = |T|$. Match $T$ to $N(T)$
By the induction hypothesis. In $G'' = G - (T \cup N(T))$For any $S \subseteq X \setminus T$
$N_{G''}(S) = N_G(S \cup T) \setminus N(T)$So

$$|N_{G''}(S)| = |N_G(S \cup T)| - |N(T)| \geq |S \cup T| - |T| = |S|$$

Where the inequality uses Hall's condition on $S \cup T$ in $G$. By the induction hypothesis,
$X \setminus T$ can be matched in $G''$. Combining with the matching on $T$ gives the result.
$\blacksquare$

**Worked Example.** Let $X = \\{a, b, c, d\\}$ and $Y = \\{1, 2, 3, 4, 5\\}$ with edges $a$--$1,2$;
$b$--$1,2$; $c$--$2,3$; $d$--$3,4,5$. Does a matching covering $X$ exist?

<details>
<summary>Solution</summary>

Check Hall's condition for every subset $S \subseteq X$:

- $|S| = 1$: each vertex has at least 1 neighbour. ✓
- $|S| = 2$: $N(\\{a, b\\}) = \\{1, 2\\}$, $|N| = 2$. $N(\\{a, c\\}) = \\{1, 2, 3\\}$, $|N| = 3$.
  Similarly all pairs have $|N| \geq 2$. ✓
- $|S| = 3$: $N(\\{a, b, c\\}) = \\{1, 2, 3\\}$, $|N| = 3$.
  $N(\\{a, c, d\\}) = \\{1, 2, 3, 4, 5\\}$, $|N| = 5$. All triples have $|N| \geq 3$. ✓
- $|S| = 4$: $N(X) = \\{1, 2, 3, 4, 5\\}$, $|N| = 5 \geq 4$. ✓

Hall's condition is satisfied, so a matching exists. One such matching: $a$--$1$, $b$--$2$ $c$--$3$,
$d$--$4$.

</details>

### 5.8 Network Flows

A **flow network** is a directed graph $G = (V, E)$ with a **source** $s$A **sink** $t$And a
**capacity** function $c : E \to \mathbb{{'}R{}'}_{\geq 0}$. A **flow**
$f : E \to \mathbb{{'}R{}'}_{\geq 0}$ Satisfies:

1. **Capacity constraint:** $0 \leq f(e) \leq c(e)$ for all $e \in E$.
2. **Flow conservation:** for all $v \in V \setminus \\{s, t\\}$
   $\sum_{e\; \mathrm{into{}\; v} f(e) = \sum_{e\; \mathrm{out\; of{}\; v} f(e)$.

The **value** of a flow is
$|f| = \sum_{e\; \mathrm{out\; of{}\; s} f(e) - \sum_{e\; \mathrm{into{}\; s} f(e)$.

An **s-t cut** $(S, T)$ partitions $V$ into $S$ (containing $s$) and $T$ (containing $t$). The
**capacity** of the cut is $c(S, T) = \sum_{u \in S, v \in T} c(uv)$.

**Theorem 5.18 (Max-Flow Min-Cut Theorem).** In any flow network, the maximum value of a flow from
$s$ to $t$ equals the minimum capacity of an $s$-$t$ cut.

_Proof sketch._ Let $f^*$ be a maximum flow. Define the **residual graph** $G_f$ with the same
Vertices and residual capacity $c_f(uv) = c(uv) - f(uv)$ for forward edges and $c_f(vu) = f(uv)$ For
backward edges. Let $S$ be the set of vertices reachable from $s$ in $G_{f^*}$ via edges with
Positive residual capacity. Since $f^*$ is maximum, $t \notin S$ (otherwise we could augment the
Flow). The cut $(S, V \setminus S)$ has capacity exactly $|f^*|$ (all forward edges are saturated,
All backward edges have zero flow). Therefore $|f^*| = c(S, V \setminus S) \geq$ minimum cut
Capacity $\geq |f^*|$Giving equality. $\blacksquare$

**Theorem 5.19 (Integrality Theorem).** If all capacities are integers, there exists a maximum flow
Where every $f(e)$ is an integer.

**Corollary 5.20.** If all capacities are integers, the maximum flow value is an integer.

The **Ford--Fulkerson method** repeatedly finds augmenting paths in the residual graph and pushes
Flow along them. When capacities are integers, each augmentation increases the flow by at least 1,
Guaranteeing termination.



:::
