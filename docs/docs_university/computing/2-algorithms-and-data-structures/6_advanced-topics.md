---
title: Advanced Topics
tags:
  - Computing
  - University
---

### 6.1 NP-Completeness

#### 6.1.1 P, NP, and NP-Completeness

**P:** The class of decision problems solvable in polynomial time by a deterministic Turing machine.

**NP:** The class of decision problems solvable in polynomial time by a **non-deterministic** Turing
Machine. Equivalently, problems whose "yes" instances have polynomial-time verifiable certificates.

**NP-hard:** A problem $A$ is NP-hard if every problem in NP can be reduced to $A$ in polynomial
Time.

**NP-complete:** A problem is NP-complete if it is in NP and NP-hard.

**Theorem 6.1.** If any NP-complete problem is in P, then P = NP.

#### 6.1.2 Polynomial-Time Reductions

A **polynomial-time reduction** from problem $A$ to problem $B$ is a polynomial-time algorithm that
Transforms instances of $A$ into instances of $B$Preserving the answer.

**Lemma 6.1.** If $A \leq_p B$ and $B \in P$Then $A \in P$.

**Lemma 6.2.** If $A \leq_p B$ and $A$ is NP-hard, then $B$ is NP-hard.

#### 6.1.3 The Cook-Levin Theorem

**Theorem 6.2 (Cook-Levin, 1971).** SAT is NP-complete.

_Proof sketch._ We show that every problem in NP reduces to SAT. Let $L \in \mathrm{NP}$. There
exists a polynomial-time non-deterministic Turing machine $M$ that decides $L$Running in time $p(n)$
on inputs of length $n$. For an input $x$We construct a Boolean formula $\phi_x$ that is satisfiable
if and only if $M$ accepts $x$.

The formula encodes:

1. **Tableau variables:** $T[i, j, \sigma] = 1$ iff cell $(i, j)$ of the computation tableau
   contains symbol $\sigma$. The tableau has $p(n) + 1$ rows and $p(n)$ columns.
2. **Initial configuration:** Row 0 encodes the initial state of $M$ on input $x$.
3. **Transition constraints:** Each $2 \times 3$ window of the tableau corresponds to a valid
   transition of $M$.
4. **Accepting configuration:** Some cell in the last row contains the accept state.

Each of these constraints can be expressed as a polynomial-size CNF formula. The total formula
$\phi_x$ has size polynomial in $n$ and is satisfiable iff $M$ accepts $x$. $\blacksquare$

#### 6.1.4 Classic NP-Complete Problems

**SAT.** Given a Boolean formula in CNF, is there a satisfying assignment?

**3-SAT.** SAT restricted to clauses with exactly 3 literals.

**Vertex Cover.** Given a graph $G = (V, E)$ and integer $k$Is there a vertex cover of size
$\leq k$?

**Travelling Salesman Problem (decision version).** Given a weighted graph and bound $B$Is there a
Tour of total weight $\leq B$?

**Subset Sum.** Given a set of integers and a target $T$Is there a subset summing to $T$?

**Clique.** Given a graph $G$ and integer $k$Does $G$ contain a clique of size $k$?

#### 6.1.5 Proof Strategy for NP-Completeness

To prove a problem $B$ is NP-complete:

1. Show $B \in \mathrm{NP}$ (polynomial-time verifiable certificate).
2. Show a known NP-complete problem $A$ reduces to $B$: $A \leq_p B$.

**Example.** 3-SAT $\leq_p$ Vertex Cover: construct a graph from the 3-SAT formula where each
Variable and each clause become vertices, and edges enforce the constraint that a satisfying
Assignment corresponds to a vertex cover.

<details>
<summary>Worked Example: 3-SAT $\leq_p$ Vertex Cover Reduction</summary>

Reduce 3-SAT formula
$\phi = (x_1 \vee \bar{x}_2 \vee x_3) \wedge (\bar{x}_1 \vee x_2 \vee x_3) \wedge (x_1 \vee x_2 \vee \bar{x}_3)$
to a vertex cover instance.

For each variable $x_i$Create two vertices $x_i$ and $\bar{x}_i$ connected by an edge (the "literal edge").

For each clause $C_j$Create a triangle of 3 vertices $c_{j1}, c_{j2}, c_{j3}$.

For each clause vertex $c_{jk}$Connect it to the literal vertex corresponding to the $k$-th literal
of clause $j$.

**Claim:** $\phi$ is satisfiable iff the graph has a vertex cover of size $k + 2m$ where $k$ is the
number of variables and $m$ is the number of clauses.

($\Rightarrow$) If $\phi$ is satisfiable, include in the cover: for each variable, the literal
vertex matching the truth assignment (e.g., $x_1$ if $x_1 = \mathrm{true}$, $\bar{x}_1$ if
$x_1 = \mathrm{false}$). This covers all literal edges ($k$ vertices). For each clause triangle, at
least one literal in the clause is true, so the corresponding literal vertex covers one of the three
edges from the triangle. Include the other two vertices of the triangle ($2m$ vertices total).

($\Leftarrow$) A vertex cover of size $k + 2m$ must include exactly one endpoint of each literal
edge (otherwise the triangle requires 3 vertices). Set each variable according to which literal
vertex is in the cover. Each clause triangle has exactly one uncovered vertex, whose edge to a
literal vertex is covered by that literal vertex, meaning the clause is satisfied.

The reduction takes polynomial time (number of vertices and edges is polynomial in the formula
size).

</details>

:::caution Common Pitfall NP-hardness does not mean the problem is unsolvable. It means there is no
known polynomial-time Algorithm. Many NP-complete problems have efficient approximation algorithms
or can be solved Exactly for practical input sizes using branch-and-bound or SAT solvers.

### 6.2 Approximation Algorithms

When exact solutions are intractable, we seek approximation algorithms with provable guarantees.

**Definition.** A $\rho$-approximation algorithm for a minimisation problem produces a solution of
cost at most $\rho$ times the optimal cost. For a maximisation problem, the solution has value at
least $(1/\rho)$ times the optimal value.

**Theorem 6.3.** Greedy vertex cover (repeatedly pick an edge, add both endpoints) is a
2-approximation.

_Proof._ The algorithm selects a set $C$ of vertices. Each edge in the matching used by the
algorithm contributes 2 vertices to $C$. Let $M^*$ be a maximum matching. Then
$|C| = 2|M^*| \leq 2 \cdot |\mathrm{OPT}|$Since OPT must contain at least one endpoint of every edge
in $M^*$ (and $M^*$ is maximum, so $|M^*| \geq$ the size of any matching). Therefore the
approximation ratio is at most 2. $\blacksquare$

**Theorem 6.4 (Metric TSP).** The Christofides algorithm is a $3/2$-approximation for TSP with the
triangle inequality.

_Proof._ The algorithm computes an MST ($\leq \mathrm{OPT}$), finds a minimum-weight perfect
matching $M$ on the odd-degree vertices of the MST ($\lvert M \rvert \leq \mathrm{OPT}/2$), and
combines them into an Eulerian tour which is shortcut to a Hamiltonian cycle. The total weight is at
most $\mathrm{MST} + \lvert M \rvert \leq \mathrm{OPT} + \mathrm{OPT}/2 = \frac{3}{2}\mathrm{OPT}$.
$\blacksquare$

**Theorem 6.5 (Inapproximability).** Unless P = NP, TSP (general, without triangle inequality) has
no polynomial-time approximation algorithm with any constant ratio.

_Proof sketch._ If a $c$-approximation existed for TSP, we could use it to solve the Hamiltonian
cycle problem (which is NP-complete): given a graph $G$Construct a TSP instance with edge weight 1
for existing edges and weight $cn + 1$ for non-edges. If the approximation returns a tour of weight
$n$Then $G$ has a Hamiltonian cycle. Otherwise, the tour weight is at least
$n - 1 + cn + 1 \gt cn$So the approximation ratio would exceed $c$Contradiction. $\blacksquare$

**Theorem 6.6 (SET COVER).** The greedy algorithm for SET COVER is a $(\ln n + O(1))$-approximation,
where $n$ is the size of the universe.

_Proof sketch._ At each step, the greedy algorithm picks the set covering the most uncovered
elements. Let $c_i$ be the cost of the $i$-th set picked, and let $n_i$ be the number of newly
covered elements. Then $c_i / n_i \leq \mathrm{OPT} / (n - \sum_{j \lt i} n_j)$ (otherwise OPT could
not cover the remaining elements at lower cost). Summing gives the $\ln n + O(1)$ bound.
$\blacksquare$

<details>
<summary>Worked Example: Greedy Set Cover</summary>

Universe $U = \\{1, 2, 3, 4, 5, 6\\}$. Sets: $S_1 = \\{1, 2, 3\\}$, $S_2 = \\{2, 4\\}$,
$S_3 = \\{3, 5, 6\\}$, $S_4 = \\{4, 5\\}$, $S_5 = \\{1, 4, 6\\}$. All sets have equal cost 1.

**Greedy:**

1. Pick $S_1$ (covers 3 elements, tied with $S_3$). Covered: $\\{1, 2, 3\\}$.
2. Remaining: $\\{4, 5, 6\\}$. $S_3$ covers $\\{5, 6\\}$ (2 new), $S_4$ covers $\\{4, 5\\}$ (2 new),
   $S_5$ covers $\\{4, 6\\}$ (2 new). Pick $S_3$. Covered: $\\{1, 2, 3, 5, 6\\}$.
3. Remaining: $\\{4\\}$. Pick $S_2$ (or $S_4$ or $S_5$). Covered: $\\{1, 2, 3, 4, 5, 6\\}$.

**Greedy solution:** $\\{S_1, S_3, S_2\\}$Size 3. **Optimal:** $\\{S_1, S_5, S_4\\}$ or
$\\{S_3, S_5, S_2\\}$Size 3. Here greedy is optimal, but it is a $\ln n$-approximation.

</details>

### 6.3 Randomised Algorithms

#### 6.3.1 Las Vegas vs. Monte Carlo

**Las Vegas algorithms** always produce the correct answer but have randomised running time.

**Monte Carlo algorithms** always run in polynomial time but may produce incorrect answers with some
probability.

| Property     | Las Vegas            | Monte Carlo            |
| ------------ | -------------------- | ---------------------- |
| Correctness  | Always correct       | Bounded error prob     |
| Running time | Randomised           | Bounded                |
| Example      | Randomised Quicksort | Miller-Rabin primality |

**Theorem 6.6.** A Monte Carlo algorithm with error probability $\epsilon$ can be amplified to error
probability $\epsilon^k$ by running it $k$ times and taking the majority vote (for decision problems
with one-sided error) or the most frequent answer (for two-sided error).

_Proof._ For one-sided error: $\Pr[\mathrm{all}~ k \mathrm{~runs~fail}] = \epsilon^k$. For two-sided
error with majority vote: by the Chernoff bound, the probability that the majority is wrong
decreases exponentially in $k$. $\blacksquare$

#### 6.3.2 Randomised Select (Quickselect)

**Problem.** Find the $k$-th smallest element in an unsorted array.

**Algorithm (Randomised Select):** Like quicksort, but recurse only into the partition containing
the $k$-th element.

**Theorem 6.7.** Randomised select has expected running time $O(n)$.

_Proof._ The expected number of comparisons satisfies
$T(n) \leq n + \frac{1}{n}\sum_{i=1}^{n}(T(\max(i-1, n-i)))$. This can be shown to satisfy
$T(n) = O(n)$ by induction. $\blacksquare$

<details>
<summary>Worked Example: Randomised Select</summary>

Find the 3rd smallest element in $[7, 2, 1, 6, 8, 5, 3, 4]$.

Pivot = randomly chosen. Suppose pivot = 5 (index 5).

Partition: $[7, 2, 1, 6, 8, 5, 3, 4] \to [2, 1, 3, 4, 5, 6, 8, 7]$.

Pivot 5 is at index 4 (0-indexed). We want rank 3 (0-indexed rank 2). $4 > 2$So recurse on left:
$[2, 1, 3, 4]$.

Pivot = randomly chosen. Suppose pivot = 3.

Partition: $[2, 1, 3, 4] \to [2, 1, 3, 4]$.

Pivot 3 is at index 2. We want rank 2. $2 = 2$So return 3.

The 3rd smallest element is 3.

</details>

<details>
<summary>Worked Example: Miller-Rabin Primality Test</summary>

Test whether $n = 561$ is prime (it is not; $561 = 3 \times 11 \times 17$A Carmichael number).

Write $n - 1 = 560 = 2^4 \times 35$So $s = 4$, $d = 35$.

Choose random base $a = 2$.

Compute $a^d \bmod n = 2^{35} \bmod 561$.

$2^5 = 32$, $2^{10} = 1024 \bmod 561 = 463$, $2^{20} = 463^2 \bmod 561 = 67$,
$2^{35} = 2^{20} \cdot 2^{10} \cdot 2^5 \bmod 561 = 67 \cdot 463 \cdot 32 \bmod 561$.

$67 \times 463 = 31021 \bmod 561 = 31021 - 55 \times 561 = 31021 - 30855 = 166$.
$166 \times 32 = 5312 \bmod 561 = 5312 - 9 \times 561 = 5312 - 5049 = 263$.

$a^d \bmod n = 263 \neq 1$ and $\neq n - 1 = 560$.

Now square:
$263^2 \bmod 561 = 69169 \bmod 561 = 69169 - 123 \times 561 = 69169 - 69003 = 166 \neq 560$.

Square: $166^2 \bmod 561 = 27556 \bmod 561 = 27556 - 49 \times 561 = 27556 - 27489 = 67 \neq 560$.

Square: $67^2 \bmod 561 = 4489 \bmod 561 = 4489 - 8 \times 561 = 4489 - 4488 = 1$.

We got 1 on the last squaring, but the previous result was $67 \neq 1, 560$. So $a = 2$ is a
**witness** that 561 is composite. Output: COMPOSITE.

The error probability of Miller-Rabin is at most $1/4$ per random base, so $k$ iterations give error
$\leq 4^{-k}$.

</details>

#### 6.3.3 Hashing with Universal Hash Functions

**Definition.** A family $\mathcal{H}$ of hash functions from $U$ to $\\{0, \ldots, m - 1\\}$ is
**universal** if for any distinct $x, y \in U$, $\Pr_{h \in \mathcal{H}}[h(x) = h(y)] \leq 1/m$.

**Theorem 6.8.** With a universal hash family and chaining, the expected number of collisions for
any element is at most $n/m$.

_Proof._ For a fixed element $x$Let $X_{iy}$ be the indicator that $h(x) = h(y_i)$ where
$y_1, \ldots, y_n$ are the other $n-1$ elements. Then
$\mathrm{E}[X_{iy}] = \Pr[h(x) = h(y_i)] \leq 1/m$ by universality. By linearity of expectation, the
expected number of collisions is $\sum_i \mathrm{E}[X_{iy}] \leq (n-1)/m$. $\blacksquare$

### 6.4 Amortised Analysis (Detailed)

#### 6.4.1 Aggregate Analysis

**Example: Multi-pop Stack.** A stack supports push ($O(1)$) and multi-pop($k$) (pop $k$ elements,
cost $\min(k, s)$ where $s$ is the stack size). Although a single multi-pop can cost $O(n)$A
sequence of $n$ push/multi-pop operations costs $O(n)$ total: each element is pushed once and popped
at most once.

**Theorem 6.9.** The amortised cost per operation for a multi-pop stack is $O(1)$.

_Proof._ In a sequence of $n$ operations, each element is pushed at most once and popped at most
once. The total cost is at most $2n = O(n)$So the amortised cost per operation is $O(n)/n = O(1)$.
$\blacksquare$

#### 6.4.2 Accounting Method

Each operation is charged an **amortised cost**. The difference between the amortised cost and the
actual cost is stored as **credit**. The credit must always be non-negative.

**Example: Binary Counter.** A $k$-bit binary counter supports increment (flip bits from the right
until a 0 is found).

Assign amortised cost of 2 per increment: 1 to pay for flipping a 0 to 1, 1 stored as credit. When a
1 is flipped back to 0, the credit from when it was set pays for the flip.

**Theorem 6.10.** The amortised cost per increment of a binary counter is $O(1)$.

_Proof._ Each bit flips from 0 to 1 at most once between consecutive resets to 0. The credit stored
on a 1 bit pays for the subsequent flip back to 0. The total credit is always non-negative.
$\blacksquare$

#### 6.4.3 Potential Method

The **potential function** $\Phi$ maps data structure states to non-negative real numbers. The
amortised cost of the $i$-th operation is $\hat{c}_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$.

**Theorem 6.11.** If $\Phi(D_i) \geq 0$ for all $i$Then
$\sum_{i=1}^{n} \hat{c}_i \geq \sum_{i=1}^{n} c_i$.

<details>
<summary>Worked Example: Binary Counter with Potential Method</summary>

Define $\Phi(D_i) =$ number of 1-bits in the counter after $i$ operations.

For increment $i$: let $t_i$ be the number of trailing 1s flipped. The actual cost is $t_i + 1$
(flipping $t_i$ ones and one zero). The number of 1-bits changes by $1 - t_i$.

$$\hat{c}_i = (t_i + 1) + \Phi(D_i) - \Phi(D_{i-1}) = (t_i + 1) + (1 - t_i) = 2$$

The amortised cost per increment is exactly 2, i.e., $O(1)$.

</details>

<details>
<summary>Worked Example: Splay Tree Amortised Analysis</summary>

A splay tree is a BST where every access is followed by a **splay** operation that moves the
accessed node to the root using rotations. Three types of rotations are used: zig (single rotation
when parent is root), zig-zig (two rotations in the same direction), and zig-zag (two rotations in
alternating directions).

**Access Lemma.** The amortised cost of splaying a node $x$ in a splay tree with $n$ nodes is
$O(\log n)$.

_Proof sketch._ Define the potential as $\Phi(T) = \sum_{x \in T} \log \mathrm{size}(x)$Where
$\mathrm{size}(x)$ is the number of nodes in the subtree rooted at $x$ (including $x$). Define the
**rank** $r(x) = \log \mathrm{size}(x)$.

The amortised cost of a splay step at node $x$ with parent $p$ and grandparent $g$ is
$\hat{c} = 1 + r'(x) - r(x)$Where primes denote ranks after the step.

- **Zig:** $\hat{c} = 1 + r'(x) - r(x) \leq 1 + 3(r'(x) - r(x))$.
- **Zig-zig:** $\hat{c} = 2 + r'(x) - r(x) \leq 3(r'(x) - r(x))$.
- **Zig-zag:** $\hat{c} = 2 + r'(x) - r(x) \leq 3(r'(x) - r(x))$.

Summing over all splay steps:
$\hat{c}_{\mathrm{total} \leq 1 + 3(r_{\mathrm{final}(x) - r_{\mathrm{initial}(x)) \leq 1 + 3 \log n = O(\log n)}}}$.
$\blacksquare$

**Corollary.** A sequence of $m$ splay tree operations takes $O(m \log n)$ amortised time.

</details>


:::
