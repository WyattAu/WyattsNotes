---
title: Complexity Theory
tags:
  - Computing
  - University
---

### 6.1 Time Complexity

The **running time** of a deterministic TM $M$ on input $w$ is the number of steps $M$ takes before
Halting. If $M$ never halts, the running time is $\infty$.

$M$ **runs in time $t(n)$** if for every input $w$ of length $n$, $M$ halts within $t(n)$ steps.

**Theorem 6.1.** Let $t(n)$ be a function with $t(n) \geq n$. Every TM that runs in time $t(n)$ has
An equivalent single-tape TM that runs in time $O(t^2(n))$.

_Proof._ A $k$-tape TM running in time $t(n)$ uses at most $t(n)$ tape cells on each tape.
Simulating One step of the $k$-tape machine requires scanning the single-tape simulation from left
to right To read all $k$ heads, then left to right again to update them. This costs $O(t(n))$ per
simulated Step. Over $t(n)$ steps, the total is $O(t(n)^2)$. $\blacksquare$

**Theorem 6.1a (Time Hierarchy Theorem).** If $t_1, t_2$ are time-constructible functions with
$t_1(n) \log t_1(n) = o(t_2(n))$Then $\mathrm{TIME(t_1(n)) \subsetneq \mathrm{TIME(t_2(n))$.

_Proof (idea)._ Use diagonalisation. Construct a TM $D$ that on input $x$ of length $n$:

1. Compute $t_2(n)$ (possible since $t_2$ is time-constructible).
2. Simulate all TMs $M_1, M_2, \ldots$ in parallel for $t_1(n)$ steps on input $x$.
3. If any $M_i$ accepts $x$ within $t_1(n)$ steps, $D$ does the opposite (reject).
4. Otherwise, accept.

$D$ runs in time $O(t_2(n))$ and differs from every TM that runs in time $O(t_1(n))$ on at least One
input. $\blacksquare$

**Corollary.** $\mathrm{P \subsetneq \mathrm{EXPTIME$.

**Definition.**
$\mathrm{TIME(t(n)) = \{L : L \mathrm{ is decided by a deterministic TM in  O(t(n))\}$.

**Definition.**
$\mathrm{NTIME(t(n)) = \{L : L \mathrm{ is decided by a nondeterministic TM in  O(t(n))\}$.

### 6.2 The Class P

$$\mathrm{P} = \bigcup_{k \geq 1} \mathrm{TIME}(n^k)$$

$\mathrm{P$ is the class of languages decidable in polynomial time by a deterministic TM. This
Captures the notion of "efficiently solvable."

**Examples of problems in P:**

- Path connectivity (BFS/DFS): $O(V + E)$.
- Shortest paths (Dijkstra): $O((V + E) \log V)$.
- Sorting: $O(n \log n)$.
- 2-SAT: $O(n + m)$.
- Primality testing: $O(\log^6 n)$ (AKS algorithm).

### 6.3 The Class NP

$$\mathrm{NP} = \bigcup_{k \geq 1} \mathrm{NTIME}(n^k)$$

**Equivalent definition.** A language $L$ is in NP if there exists a polynomial-time verifier $V$
And a polynomial $p$ such that:

$$L = \{w : \exists c \mathrm{ with}  |c| \leq p(|w|) \mathrm{ and}  V(w, c) = \mathrm{accept}\}$$

The string $c$ is called a **certificate** (or witness).

**Examples of problems in NP:**

- SAT: certificate is a satisfying assignment.
- Clique: certificate is the set of vertices forming the clique.
- Travelling Salesman (decision): certificate is the tour.
- Subset Sum: certificate is the subset.
- Graph 3-Colouring: certificate is the colouring.
- Integer factorisation (decision version): certificate is a factor.

**Theorem 6.2.** $\mathrm{P \subseteq \mathrm{NP$.

_Proof._ Every deterministic polynomial-time algorithm is a special case of a nondeterministic one
(with exactly one choice at each step). Alternatively, the certificate can be empty. $\blacksquare$

**Theorem 6.2a.** If $A \leq_p B$ and $B \in \mathrm{NP$Then $A \in \mathrm{NP$.

_Proof._ Let $V_B$ be the polynomial-time verifier for $B$ and $f$ be the polynomial-time reduction.
Then $V_A(w, c) = V_B(f(w), c)$ is a polynomial-time verifier for $A$. $\blacksquare$

**Open question:** $\mathrm{P = \mathrm{NP$? This is the most important open problem in computer
Science. Most researchers believe $\mathrm{P \neq \mathrm{NP$.

**Consequences of P = NP.** If $\mathrm{P = \mathrm{NP$Then every problem in NP (including SAT,
Travelling Salesman, graph colouring, protein folding, etc.) would have polynomial-time algorithms.
This would revolutionise optimisation, cryptography (RSA and most public-key systems would be
broken), And artificial intelligence. However, after decades of research, no polynomial-time
algorithm has Been found for any NP-complete problem, providing strong empirical evidence for
$\mathrm{P \neq \mathrm{NP$.

### 6.4 NP-Completeness

A language $B$ is **NP-complete** if:

1. $B \in \mathrm{NP$And
2. $A \leq_p B$ for every $A \in \mathrm{NP$ (polynomial-time mapping reduction).

A language is **NP-hard** if condition (2) holds (it need not be in NP).

**Theorem 6.3 (Cook-Levin, 1971).** $\mathrm{SAT$ is NP-complete.

_Proof (detailed sketch)._

1. $\mathrm{SAT \in \mathrm{NP$: a satisfying assignment is a polynomial-size certificate that can
   be verified in polynomial time.

2. For any $L \in \mathrm{NP$There is a polynomial-time NTM $N$ that decides $L$ in time $n^k$ for
   some $k$. Given input $w$ of length $n$Construct a Boolean formula $\phi_{N,w}$ that is
   satisfiable iff $N$ accepts $w$.

The formula encodes the **tableau** of $N$ on $w$: a table of size $n^k \times n^k$ where each cell
$T[i, j]$ records the symbol at tape cell $j$ after step $i$ of the computation.

**Variables:** For each position $(i, j)$ in the tableau and each symbol $s$ in the combined
state-tape alphabet $\Gamma' = Q \times \Gamma$A variable $x_{i,j,s}$ indicating that cell $(i, j)$
contains $s$.

**Constraints:**

- **Well-formedness:** Each cell contains exactly one symbol. For each $(i, j)$: exactly one of
  $\{x_{i,j,s} : s \in \Gamma}$ is true.
- **Start configuration:** Row 0 encodes $q_0$ at position 0, $w_1$ at position 1, etc.
- **Transition correctness:** For every $2 \times 3$ window of the tableau, the bottom row must be a
  valid successor of the top row according to $N$'s transition function.
- **Acceptance:** Some cell in the last row contains $q_{\mathrm{accept}$.

Each constraint can be expressed as a polynomial-size CNF formula (using standard encodings of
"exactly one" and "window" constraints). The total formula has size $O(n^{2k})$Which is polynomial
in $|w|$. $\blacksquare$

<details>
<summary>Worked Example: Cook-Levin tableau construction (simplified)</summary>

Consider an NTM $N$ that decides a language $L$ in time $n^2$. On input $w = 01$ (length $n = 2$),
The tableau is a $4 \times 4$ grid (since $n^2 = 4$).

The formula $\phi_{N,w}$ has variables for each cell. For instance, $x_{0,0,q_0}$ indicates That
position $(0,0)$ contains the start state. The constraints enforce:

- Row 0: $q_0$ at position 0, `0` at position 1, `1` at position 2, $\sqcup$ at position 3.
- Transition windows: each $2 \times 3$ block must be consistent with $\delta$.
- Row 3: at least one cell contains $q_{\mathrm{accept}$.

If $N$ accepts $w$Then the accepting computation path provides a satisfying assignment (the tableau
records that path). If $\phi_{N,w}$ is satisfiable, the satisfying assignment Encodes a valid
accepting computation.

</details>

**Corollary 6.4.** If any NP-complete problem is in P, then P = NP.

**Theorem 6.5.** If $A \leq_p B$ and $B \in \mathrm{P$Then $A \in \mathrm{P$.

_Proof._ To decide $A$ on input $w$: compute $f(w)$ in polynomial time (the reduction), then decide
$B$ on $f(w)$ in polynomial time. Total: polynomial time. $\blacksquare$

### 6.5 Classic NP-Complete Problems

**3-SAT.** Given a CNF formula with exactly 3 literals per clause, is it satisfiable?

**Reduction:** SAT $\leq_p$ 3-SAT. Replace each clause with more or fewer than 3 literals by
Equivalent clauses with exactly 3 literals using auxiliary variables.

**Theorem 6.5a.** SAT $\leq_p$ 3-SAT.

_Proof._ Given a CNF formula $\phi$Convert each clause to exactly 3 literals:

- Clause $(l_1)$ (1 literal): replace with
  $(l_1 \lor a \lor b) \land (l_1 \lor a \lor \bar{b}) \land (l_1 \lor \bar{a} \lor b) \land (l_1 \lor \bar{a} \lor \bar{b})$
  where $a, b$ are new variables. This is satisfiable iff $l_1$ is true.
- Clause $(l_1 \lor l_2)$ (2 literals): replace with
  $(l_1 \lor l_2 \lor a) \land (l_1 \lor l_2 \lor \bar{a})$ where $a$ is new. Satisfiable iff
  $l_1 \lor l_2$ is true.
- Clause $(l_1 \lor l_2 \lor l_3)$: leave as is.
- Clause $(l_1 \lor \cdots \lor l_k)$ for $k \gt 3$: replace with
  $(l_1 \lor l_2 \lor z_1) \land (\bar{z}_1 \lor l_3 \lor z_2) \land \cdots \land (\bar{z}_{k-4} \lor l_{k-1} \lor l_k)$
  where $z_i$ are new variables. Satisfiable iff the original clause is satisfiable.

Each transformation is polynomial-size and preserves satisfiability. $\blacksquare$

**Vertex Cover.** Given a graph $G = (V, E)$ and integer $k$Is there a vertex cover of size
$\leq k$?

**Theorem 6.5b.** 3-SAT $\leq_p$ Vertex Cover.

_Proof (sketch)._ Given a 3-CNF formula $\phi$ with $k$ clauses and $n$ variables, construct a graph
$G$:

1. For each variable $x_i$Create a **variable gadget**: two vertices $x_i$ and $\bar{x}_i$ connected
   by an edge. Selecting $x_i$ into the cover corresponds to setting $x_i$ to true (removing
   $\bar{x}_i$ from consideration).
2. For each clause $C_j = (l_a \lor l_b \lor l_c)$Create a **clause gadget**: a triangle of three
   vertices connected to the corresponding literal vertices in the variable gadgets.
3. Set the target: $k' = n + 2k$.

The cover must include at least one endpoint of each variable-gadget edge ($n$ vertices) and at
Least two vertices from each clause triangle ($2k$ vertices). Selecting a literal vertex in the
Cover removes it from clause consideration; the remaining two triangle vertices must be in the
Cover. The formula is satisfiable iff we can choose literal vertices such that each clause triangle
Has at most one vertex already excluded. $\blacksquare$

**Clique.** Given $G = (V, E)$ and integer $k$Does $G$ contain a clique of size $k$?

**Reduction:** Vertex Cover $\leq_p$ Clique. $G = (V, E)$ has a vertex cover of size $k$ iff
$\overline{G} = (V, \overline{E})$ has a clique of size $|V| - k$.

_Proof._ If $C \subseteq V$ is a vertex cover of size $k$ in $G$Then every edge of $G$ has at Least
one endpoint in $C$. So $V \setminus C$ is an independent set in $G$Meaning every pair in
$V \setminus C$ is an edge in $\overline{G}$. Hence $\overline{G}$ has a clique of size $|V| - k$.
The converse is analogous. $\blacksquare$

**Hamiltonian Path.** Given a graph $G = (V, E)$Does $G$ have a path visiting every vertex exactly
Once?

**Theorem 6.5c.** Vertex Cover $\leq_p$ Hamiltonian Path (via Hamiltonian Cycle).

_Proof (sketch)._ Given $(G, k)$ for Vertex Cover, construct a graph $G'$ such that $G$ has a Vertex
cover of size $k$ iff $G'$ has a Hamiltonian cycle. The construction uses selection gadgets That
choose $k$ vertices (the cover), verification gadgets that check every edge is covered, and
Connecting gadgets that string the selections together into a single cycle. The construction is
Polynomial. $\blacksquare$

**Subset Sum.** Given integers $S = \{s_1, \ldots, s_n\}$ and target $T$Is there a subset summing To
$T$?

**Theorem 6.5d.** 3-SAT $\leq_p$ Subset Sum.

_Proof (sketch)._ Given a 3-CNF formula with variables $x_1, \ldots, x_n$ and clauses
$C_1, \ldots, C_k$Construct a set of numbers $S$ and target $T$ in decimal.

For each variable $x_i$Create two numbers $v_i$ and $\bar{v}_i$. In the "variable digits" (first $n$
columns), $v_i$ has a `1` in column $i$ and `0` elsewhere; $\bar{v}_i$ also has a `1` in column $i$
and `0` elsewhere. This forces choosing exactly one of $v_i, \bar{v}_i$.

For each clause $C_j$Add a "clause digit" (column $n + j$): in $v_i$ (resp. $\bar{v}_i$), This digit
is `1` iff $x_i$ (resp. $\bar{x}_i$) appears in $C_j$. The target $T$ has `1` in Every digit.
Choosing $v_i$ or $\bar{v}_i$ contributes to satisfying the clauses that contain That literal.
$\blacksquare$

**Partition.** Given integers $S = \{s_1, \ldots, s_n\}$Can $S$ be partitioned into two subsets of
Equal sum?

**Reduction chain:**

$$\mathrm{SAT} \to \mathrm{3}\mathrm{-SAT} \to \mathrm{VertexCover} \to \mathrm{Clique}$$

$$\mathrm{SAT} \to \mathrm{3}\mathrm{-SAT} \to \mathrm{HamiltonianPath}$$

$$\mathrm{SAT} \to \mathrm{3}\mathrm{-SAT} \to \mathrm{SubsetSum} \to \mathrm{Partition}$$

$$\mathrm{SAT} \to \mathrm{3}\mathrm{-SAT} \to \mathrm{SubsetSum} \to \mathrm{Partition}$$

<details>
<summary>Worked Example: Reducing 3-SAT to Independent Set</summary>

Given a 3-CNF formula $\phi$ with $k$ clauses, construct a graph $G$:

1. For each clause $C_j$Create a group of 3 vertices (one per literal).
2. Within each group, add all three edges (forming a triangle) — at most one vertex per group can be
   in an independent set.
3. For each pair of contradictory literals ($x_i$ and $\bar{x}_i$) in different groups, add an edge
   — they cannot both be selected.

Set the target to $k$ (one vertex per clause). An independent set of size $k$ exists iff $\phi$ Is
satisfiable: selecting one literal per clause without contradiction gives a consistent Satisfying
assignment. $\blacksquare$

</details>

### 6.6 Space Complexity

**Definition.** $\mathrm{SPACE(s(n))$ is the class of languages decidable by a deterministic TM
Using $O(s(n))$ tape cells. $\mathrm{NSPACE(s(n))$ is the nondeterministic analogue.

**Key classes:**

- $\mathrm{L = \mathrm{SPACE(\log n)$ — logarithmic space.
- $\mathrm{NL = \mathrm{NSPACE(\log n)$ — nondeterministic logarithmic space.
- $\mathrm{PSPACE = \bigcup_{k \geq 1} \mathrm{SPACE(n^k)$.

**Theorem 6.6 (Savitch, 1970).** $\mathrm{NSPACE(s(n)) \subseteq \mathrm{SPACE(s(n)^2)$ For
$s(n) \geq \log n$.

_Proof (sketch)._ To decide whether an NTM using space $s(n)$ accepts, we check reachability in the
Configuration graph. The graph has at most $N = |\Gamma|^{s(n)} \cdot s(n) \cdot |Q|$ nodes, where
$|\Gamma|$ is the tape alphabet size and $|Q|$ the number of states. A deterministic TM can decide
Reachability using the recursive algorithm $\mathrm{REACH(u, v, d)$ (can $u$ reach $v$ in at most
$d$ steps?), which uses $O(\log N) = O(s(n))$ space and recurses to depth $O(\log N)$. Total space:
$O(s(n) \cdot \log N) = O(s(n)^2)$. $\blacksquare$

**Corollary 6.7.** $\mathrm{PSPACE = \mathrm{NPSPACE$.

_Proof._
$\mathrm{NPSPACE \subseteq \bigcup_k \mathrm{NSPACE(n^k) \subseteq \bigcup_k \mathrm{SPACE(n^{2k}) = \mathrm{PSPACE$
by Savitch's theorem. $\blacksquare$

**NL-completeness.** A language $B$ is **NL-complete** if $B \in \mathrm{NL$ and every
$A \in \mathrm{NL$ is log-space reducible to $B$.

**Theorem 6.8 (Immerman--Szelepcsényi, 1987).** $\mathrm{NL = \mathrm{coNL$.

This is surprising because it is not known whether $\mathrm{NP = \mathrm{coNP$. The
.../1-number-and-algebra/3_proof-and-logic uses An inductive counting argument: given an NTM for
$L$Construct an NTM for $\overline{L}$ that Counts the number of reachable configurations.

**PSPACE-completeness.** A language is PSPACE-complete if it is in PSPACE and every PSPACE problem
Reduces to it. Key PSPACE-complete problems:

- **TQBF (True Quantified Boolean Formula):** Given a fully quantified Boolean formula
  $\phi = Q_1 x_1 Q_2 x_2 \cdots Q_n x_n \, \psi(x_1, \ldots, x_n)$ where
  $Q_i \in \{\forall, \exists\}$ and $\psi$ is a CNF formula, is $\phi$ true?

**Theorem 6.9.** TQBF is PSPACE-complete.

_Proof (membership)._ Evaluate the quantifiers recursively. For $\exists x_i \phi$Try both values Of
$x_i$ and recurse. For $\forall x_i \phi$Similarly. At depth $n$Evaluate $\psi$. Each level Uses
$O(n)$ space to store the current assignment, giving $O(n^2)$ total.

_Proof (hardness)._ Reduce from any $L \in \mathrm{PSPACE$ using the configuration graph. A
Computation of a PSPACE TM on input $w$ of length $n$ uses at most $p(n)$ cells for some Polynomial
$p$. The number of distinct configurations is at most $N = |\Gamma|^{p(n)} \cdot p(n) \cdot |Q|$
Which is exponential. The statement "$M$ accepts $w$" can be expressed as: "there exists a Configuration $c_1$ reachable from the start configuration in $\leq N$ steps such that for all Configurations $c_2$ reachable from $c_1$ in one step, there exists a configuration $c_3$..." This
alternating reachability formula can be encoded as a quantified Boolean formula of Polynomial size.
$\blacksquare$

<details>
<summary>Worked Example: Evaluating a QBF formula</summary>

Evaluate $\phi = \forall x \exists y \, [(x \lor y) \land (\bar{x} \lor y)]$.

- For $x = 0$: need $\exists y$ such that $(0 \lor y) \land (1 \lor y) = y \land \mathrm{true = y$.
  So we need $y = 1$ (which exists).
- For $x = 1$: need $\exists y$ such that $(1 \lor y) \land (0 \lor y) = \mathrm{true \land y = y$.
  So we need $y = 1$ (which exists).

Since both values of $x$ lead to a satisfying assignment for $y$, $\phi$ is true.

</details>

### 6.7 The Polynomial Hierarchy

The **polynomial hierarchy (PH)** generalises the notions of NP and coNP through alternating
Quantifiers.

**Definition.** Define the classes $\Sigma_k^P$ and $\Pi_k^P$ inductively:

- $\Sigma_0^P = \Pi_0^P = \mathrm{P}$.
- $\Sigma_{k+1}^P = \mathrm{NP}^{\Sigma_k^P}$ (NP with a $\Sigma_k^P$ oracle).
- ${\Pi_{k+1}^P} = \mathrm{coNP}^{\Sigma_k^P}$ (coNP with a $\Sigma_k^P$ oracle).
- $\mathrm{PH} = \bigcup_{k \geq 0} \Sigma_k^P$.

**Equivalent characterisation.** A language $L$ is in $\Sigma_k^P$ iff there exist polynomial-time
Computable relations $R$ and polynomials $p$ such that:

$$L = \{x : \exists y_1 \forall y_2 \exists y_3 \cdots Q_k y_k \, R(x, y_1, \ldots, y_k)\}$$

Where each $|y_i| \leq p(|x|)$ and the quantifiers alternate, starting with $\exists$.

**Examples:**

- $\Sigma_1^P = \mathrm{NP}$: "there exists a certificate."
- $\Pi_1^P = \mathrm{coNP}$: "for all certificates."
- $\Sigma_2^P$ contains problems like "does there exist a strategy for player 1 such that for all strategies of player 2, player 1 wins?" (for polynomial-size games).
- $\Pi_2^P$ contains the complement of such problems.

**Relationships:**

$$\mathrm{P \subseteq \mathrm{NP \subseteq \Sigma_2^P \subseteq \Sigma_3^P \subseteq \cdots \subseteq \mathrm{PH \subseteq \mathrm{PSPACE$$

**Theorem 6.10.** If $\Sigma_k^P = \Sigma_{k+1}^P$ for some $k$Then $\mathrm{PH} = \Sigma_k^P$ (the
polynomial hierarchy collapses to level $k$).

_Proof._ If $\Sigma_k^P = \Sigma_{k+1}^P = \mathrm{NP}^{\Sigma_k^P}$Then the $\Sigma_k^P$ oracle
Provides no additional power. By induction, $\Sigma_{k+i}^P = \Sigma_k^P$ for all $i \geq 0$ So
$\mathrm{PH} = \Sigma_k^P$. $\blacksquare$

It is widely believed that $\mathrm{PH}$ does not collapse.

### 6.8 Beyond NP

**coNP.** The class of languages whose complements are in NP. A problem is in coNP if every "no"
Instance has a polynomial-time verifiable certificate.

- Example: "Is this formula a tautology?" (the certificate for "no" would be a failing assignment).
- $\mathrm{P} \subseteq \mathrm{NP} \cap \mathrm{coNP}$.
- It is unknown whether $\mathrm{NP} = \mathrm{coNP}$. If $\mathrm{P} = \mathrm{NP}$Then
  $\mathrm{NP} = \mathrm{coNP}$.

**Theorem 6.11.** If $\mathrm{NP} \neq \mathrm{coNP}$Then $\mathrm{P} \neq \mathrm{NP}$.

_Proof._ If $\mathrm{P} = \mathrm{NP}$Then $\mathrm{P} = \mathrm{coNP}$ (since $\mathrm{P}$ Is
closed under complement), so $\mathrm{NP} = \mathrm{coNP}$. The contrapositive gives the Result.
$\blacksquare$

**PSPACE.** The class of languages decidable in polynomial space:

$$\mathrm{PSPACE = \bigcup_{k \geq 1} \mathrm{SPACE(n^k)$$

- $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE}$.
- $\mathrm{P} \neq \mathrm{PSPACE}$ (space hierarchy theorem).
- PSPACE-complete problems: TQBF, generalised geography, determining the winner of a position in
  certain games.

**EXPTIME.** The class of languages decidable in exponential time:

$$\mathrm{EXPTIME = \bigcup_{k \geq 1} \mathrm{TIME(2^{n^k})$$

- $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE} \subseteq \mathrm{EXPTIME}$.
- $\mathrm{P} \neq \mathrm{EXPTIME}$ (time hierarchy theorem).
- EXPTIME-complete problems: Generalised chess, Go (on sufficiently large boards), determining the
  winner of a two-player game with exponential game tree.

**Hierarchy summary:**

$$\mathrm{Regular \subsetneq \mathrm{CFL \subsetneq \mathrm{Decidable \subsetneq \mathrm{TM\mathrm{-recognisable}$$

$$\mathrm{L \subseteq \mathrm{NL \subseteq \mathrm{P \subseteq \mathrm{NP \subseteq \mathrm{PSPACE \subseteq \mathrm{EXPTIME$$

$$\mathrm{P \subseteq \mathrm{NP \subseteq \mathrm{PH \subseteq \mathrm{PSPACE$$

| Inclusion                                                        | Known to be proper? | Theorem used        |
| ---------------------------------------------------------------- | ------------------- | ------------------- |
| $\mathrm{Regular} \subseteq \mathrm{CFL}$                        | Yes                 | Pumping lemma       |
| $\mathrm{CFL} \subseteq \mathrm{Decidable}$                      | Yes                 | CYK algorithm       |
| $\mathrm{Decidable} \subseteq \mathrm{TM}\mathrm{-recognisable}$ | Yes                 | Diagonalisation     |
| $\mathrm{P} \subseteq \mathrm{EXPTIME}$                          | Yes                 | Time hierarchy      |
| $\mathrm{P} \subseteq \mathrm{PSPACE}$                           | Yes                 | Space hierarchy     |
| $\mathrm{NP} \subseteq \mathrm{PSPACE}$                          | Yes                 | Savitch's corollary |
| $\mathrm{L} \subseteq \mathrm{NL}$                               | Unknown             |                     |
| $\mathrm{P} \subseteq \mathrm{NP}$                               | Unknown             | Open problem        |
| $\mathrm{NP} \subseteq \mathrm{coNP}$                            | Unknown             | Open problem        |

Both inclusions $\mathrm{P} \subseteq \mathrm{NP}$ and $\mathrm{NP} \subseteq \mathrm{PSPACE}$ are
Known to be proper ($\mathrm{P} \neq \mathrm{PSPACE}$), but the status of $\mathrm{P}$ vs.
$\mathrm{NP}$ remains open.

:::caution Common Pitfall NP-completeness refers to **decision** problems. The optimisation versions
(e.g., "find the shortest Tour") are NP-hard, not necessarily NP-complete. Also, "NP" stands for
"Nondeterministic Polynomial Time," not "Not Polynomial time." Every problem in NP is verifiable in
polynomial time; whether all Such problems are solvable in polynomial time is the P vs. NP question.
A common error is confusing "NP-hard" with "NP-complete": NP-hard means at least as hard as all NP
problems, but the problem Itself might not be in NP (e.g., the halting problem is NP-hard but
undecidable).



