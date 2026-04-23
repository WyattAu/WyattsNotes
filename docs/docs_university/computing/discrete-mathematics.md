---
title: Discrete Mathematics
date: 2026-04-23T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: discrete-mathematics
---

## 1. Propositional and Predicate Logic

### 1.1 Propositional Logic

A **proposition** is a statement that is either true or false. Propositional logic deals with
propositions and their combinations using logical connectives.

**Basic connectives:**

| Symbol | Name           | Meaning                           |
| ------ | -------------- | --------------------------------- |
| $\neg$ | Negation       | NOT                               |
| $\land$ | Conjunction   | AND                               |
| $\lor$  | Disjunction   | OR                                |
| $\implies$ | Implication | IF...THEN                         |
| $\iff$  | Biconditional  | IF AND ONLY IF                    |

**Truth tables.** The implication $p \implies q$ is false only when $p$ is true and $q$ is false.

**Logical equivalence.** Two propositions are **logically equivalent** ($\equiv$) if they have the
same truth value for all assignments.

**Important equivalences:**

- $\neg(p \land q) \equiv \neg p \lor \neg q$ (De Morgan)
- $\neg(p \lor q) \equiv \neg p \land \neg q$ (De Morgan)
- $p \implies q \equiv \neg p \lor q$
- $p \iff q \equiv (p \implies q) \land (q \implies p)$
- $\neg(p \implies q) \equiv p \land \neg q$

### 1.2 Predicate Logic

**Predicates** extend propositional logic with variables and quantifiers.

- **Universal quantifier:** $\forall x\, P(x)$ -- "$P(x)$ holds for all $x$."
- **Existential quantifier:** $\exists x\, P(x)$ -- "there exists $x$ such that $P(x)$ holds."

**Negation of quantifiers:**

$$\neg \forall x\, P(x) \equiv \exists x\, \neg P(x)$$

$$\neg \exists x\, P(x) \equiv \forall x\, \neg P(x)$$

**Nested quantifiers** must be read carefully. The order matters:

$$\forall x\, \exists y\, P(x, y) \not\equiv \exists y\, \forall x\, P(x, y)$$

The first says "for every $x$ there is a (possibly different) $y$." The second says "there exists a
single $y$ that works for all $x$."

### 1.3 Validity and Satisfiability

A formula is **valid** (a tautology) if it is true under all interpretations. A formula is
**satisfiable** if it is true under at least one interpretation.

**Theorem 1.1.** A formula is valid if and only if its negation is unsatisfiable.

## 2. Sets, Relations, and Functions

### 2.1 Sets

**Basic operations:**

- Union: $A \cup B = \{x : x \in A \mathrm{ or } x \in B\}$
- Intersection: $A \cap B = \{x : x \in A \mathrm{ and } x \in B\}$
- Difference: $A \setminus B = \{x : x \in A \mathrm{ and } x \notin B\}$
- Complement: $A^c = U \setminus A$ (where $U$ is the universal set)

**De Morgan's Laws:**

$$(A \cup B)^c = A^c \cap B^c, \quad (A \cap B)^c = A^c \cup B^c$$

**Power set:** $\mathcal{P}(A) = \{B : B \subseteq A\}$. If $|A| = n$, then $|\mathcal{P}(A)| = 2^n$.

### 2.2 Relations

A **binary relation** $R$ from set $A$ to set $B$ is a subset of $A \times B$.

A relation $R$ on $A$ is:

- **Reflexive:** $\forall a \in A$, $(a,a) \in R$.
- **Symmetric:** $(a,b) \in R \implies (b,a) \in R$.
- **Antisymmetric:** $(a,b) \in R$ and $(b,a) \in R \implies a = b$.
- **Transitive:** $(a,b) \in R$ and $(b,c) \in R \implies (a,c) \in R$.

**Equivalence relation:** reflexive, symmetric, transitive. Partitions the set into equivalence classes.

**Partial order:** reflexive, antisymmetric, transitive. Written $(A, \preceq)$.

### 2.3 Functions

A function $f : A \to B$ is a relation where each $a \in A$ appears exactly once as a first element.

- **Injective (one-to-one):** $f(a_1) = f(a_2) \implies a_1 = a_2$.
- **Surjective (onto):** for every $b \in B$, there exists $a \in A$ with $f(a) = b$.
- **Bijective:** both injective and surjective.

**Theorem 2.1.** If $A$ and $B$ are finite sets, $f : A \to B$ is:

- Injective if and only if $|A| \leq |B|$.
- Surjective if and only if $|A| \geq |B|$.
- Bijective if and only if $|A| = |B|$.

**Theorem 2.2 (Pigeonhole Principle).** If $|A| > |B|$, then no function $f : A \to B$ is injective.
Equivalently, placing $n$ items into $m$ boxes with $n > m$ forces at least one box to contain at least
$\lceil n/m \rceil$ items.

## 3. Proof Techniques

### 3.1 Direct Proof

To prove $P \implies Q$: assume $P$, derive $Q$ by a chain of logical deductions.

**Example.** Prove: if $n$ is odd, then $n^2$ is odd.

*Proof.* Let $n = 2k + 1$. Then $n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd.
$\blacksquare$

### 3.2 Proof by Contrapositive

To prove $P \implies Q$: prove $\neg Q \implies \neg P$ instead.

**Example.** Prove: if $n^2$ is even, then $n$ is even.

*Proof.* Contrapositive: if $n$ is odd, then $n^2$ is odd. This was proved above. $\blacksquare$

### 3.3 Proof by Contradiction

To prove $P$: assume $\neg P$ and derive a contradiction.

**Example (Euclid).** There are infinitely many primes.

*Proof.* Suppose there are finitely many primes $p_1, p_2, \ldots, p_n$. Consider $N = p_1 p_2 \cdots p_n + 1$.
$N$ is not divisible by any $p_i$ (it leaves remainder 1). So $N$ is either prime itself or has a prime
factor not in the list. Either way, the list was incomplete. Contradiction. $\blacksquare$

### 3.4 Mathematical Induction

**Principle of Mathematical Induction.** To prove $P(n)$ for all $n \geq n_0$:

1. **Base case:** Prove $P(n_0)$.
2. **Inductive step:** Prove $P(k) \implies P(k+1)$ for all $k \geq n_0$.

**Strong Induction.** The inductive step uses $P(n_0), P(n_0+1), \ldots, P(k)$ to prove $P(k+1)$.

**Example.** Prove: $\sum_{i=1}^{n} i = n(n+1)/2$ for all $n \geq 1$.

*Proof.* Base case: $n = 1$: $1 = 1 \cdot 2 / 2$. True.

Inductive step: Assume $\sum_{i=1}^{k} i = k(k+1)/2$. Then

$$\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$

$\blacksquare$

### 3.5 Structural Induction

For recursively defined structures (lists, trees, formulas), prove a property by induction on the
structure:

1. Base cases (empty list, leaf node, atomic formula).
2. Inductive cases (cons, node with children, compound formula).

## 4. Combinatorics

### 4.1 Counting Principles

**Rule of Sum.** If task $A$ can be done in $m$ ways and task $B$ in $n$ ways, and they cannot both be
done, then $A$ or $B$ can be done in $m + n$ ways.

**Rule of Product.** If task $A$ can be done in $m$ ways and task $B$ in $n$ ways independently, then
$A$ and $B$ together can be done in $mn$ ways.

### 4.2 Permutations and Combinations

**Permutations:** $P(n, r) = n! / (n-r)!$ -- ordered arrangements of $r$ items from $n$.

**Combinations:** $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ -- unordered selections of $r$ items from $n$.

**Theorem 4.1 (Binomial Theorem).**

$$(x + y)^n = \sum_{r=0}^{n} \binom{n}{r} x^{n-r} y^r$$

**Theorem 4.2 (Pascal's Identity).** $\binom{n}{r} = \binom{n-1}{r} + \binom{n-1}{r-1}$

*Proof.* Every $r$-subset of $\{1, \ldots, n\}$ either contains $n$ (giving $\binom{n-1}{r-1}$ ways
to choose the remaining $r-1$) or does not contain $n$ (giving $\binom{n-1}{r}$ ways to choose all $r$
from $\{1, \ldots, n-1\}$). $\blacksquare$

### 4.3 Inclusion-Exclusion Principle

**Theorem 4.3 (Inclusion-Exclusion).** For finite sets $A_1, \ldots, A_n$:

$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_i |A_i| - \sum_{i < j} |A_i \cap A_j| + \sum_{i < j < k} |A_i \cap A_j \cap A_k| - \cdots + (-1)^{n+1}|A_1 \cap \cdots \cap A_n|$$

**Worked Example.** How many integers from 1 to 1000 are not divisible by 2, 3, or 5?

Let $A_2$ = multiples of 2, $A_3$ = multiples of 3, $A_5$ = multiples of 5.

$|A_2| = 500$, $|A_3| = 333$, $|A_5| = 200$.

$|A_2 \cap A_3| = 166$, $|A_2 \cap A_5| = 100$, $|A_3 \cap A_5| = 66$.

$|A_2 \cap A_3 \cap A_5| = 33$.

$|A_2 \cup A_3 \cup A_5| = 500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$.

Not divisible by 2, 3, or 5: $1000 - 734 = 266$. $\blacksquare$

### 4.4 Stars and Bars

**Theorem 4.4.** The number of ways to distribute $n$ identical objects into $k$ distinct bins is
$\binom{n + k - 1}{k - 1}$.

*Proof.* The problem is equivalent to placing $k - 1$ dividers among $n$ objects, giving
$\binom{n + k - 1}{n} = \binom{n + k - 1}{k - 1}$ arrangements. $\blacksquare$

## 5. Graph Theory

### 5.1 Definitions

A **graph** $G = (V, E)$ consists of a set of vertices $V$ and a set of edges $E \subseteq V \times V$.

- **Simple graph:** no loops, no multiple edges.
- **Directed graph (digraph):** edges have direction.
- **Weighted graph:** edges have weights.

The **degree** of a vertex $v$, $\deg(v)$, is the number of edges incident to $v$.

**Theorem 5.1 (Handshaking Lemma).** $\sum_{v \in V} \deg(v) = 2|E|$.

*Proof.* Each edge contributes 1 to the degree of each of its two endpoints. $\blacksquare$

**Corollary 5.2.** The number of vertices of odd degree is even.

### 5.2 Paths, Cycles, and Connectivity

A **walk** is a sequence of vertices where consecutive vertices are adjacent. A **path** is a walk
with no repeated vertices. A **cycle** is a path that returns to its starting vertex.

A graph is **connected** if there is a path between every pair of vertices. A **connected component**
is a maximal connected subgraph.

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
with $V$ vertices, $E$ edges, and $F$ faces:

$$V - E + F = 2$$

**Corollary 5.6.** For a simple planar graph with $V \geq 3$: $E \leq 3V - 6$.

**Corollary 5.7.** $K_5$ and $K_{3,3}$ are not planar.

**Theorem 5.8 (Kuratowski's Theorem).** A graph is planar if and only if it does not contain a
subdivision of $K_5$ or $K_{3,3}$ as a subgraph.

### 5.5 Graph Colouring

A **proper $k$-colouring** assigns one of $k$ colours to each vertex such that adjacent vertices have
different colours. The **chromatic number** $\chi(G)$ is the minimum $k$ for which a proper $k$-colouring
exists.

**Theorem 5.9 (Four Colour Theorem).** Every planar graph is 4-colourable.

**Theorem 5.10 (Five Colour Theorem).** Every planar graph is 5-colourable. (Easier to prove.)

**Theorem 5.11 (Greedy Colouring Bound).** $\chi(G) \leq \Delta(G) + 1$ where $\Delta(G)$ is the
maximum degree.

### 5.6 Euler and Hamilton Paths

An **Euler path** visits every edge exactly once. An **Euler circuit** is an Euler path that starts
and ends at the same vertex.

**Theorem 5.12.** A connected graph has an Euler circuit if and only if every vertex has even degree.
It has an Euler path (but not circuit) if and only if exactly two vertices have odd degree.

A **Hamilton path** visits every vertex exactly once. A **Hamilton circuit** is a Hamilton path that
returns to the start.

**Theorem 5.13 (Dirac's Theorem).** If $G$ is a simple graph with $n \geq 3$ vertices and
$\deg(v) \geq n/2$ for every vertex, then $G$ has a Hamilton circuit.

:::caution Common Pitfall
Determining whether a graph has a Hamilton path/circuit is NP-complete in general, whereas Euler
paths/circuits can be determined in polynomial time using the degree condition. Do not confuse the two.
:::

## 6. Recurrence Relations

### 6.1 Definition

A **recurrence relation** defines a sequence $\{a_n\}$ by expressing $a_n$ in terms of previous terms.

**Example.** Fibonacci: $F_n = F_{n-1} + F_{n-2}$, with $F_0 = 0$, $F_1 = 1$.

### 6.2 Linear Homogeneous Recurrences with Constant Coefficients

$$a_n + c_1 a_{n-1} + \cdots + c_k a_{n-k} = 0$$

**Solution method.** Form the **characteristic equation**:

$$r^k + c_1 r^{k-1} + \cdots + c_k = 0$$

**Case 1 (distinct roots).** If $r_1, \ldots, r_k$ are distinct, then
$a_n = A_1 r_1^n + \cdots + A_k r_k^n$.

**Case 2 (repeated roots).** If $r$ has multiplicity $m$, the contribution is
$(A_1 + A_2 n + \cdots + A_m n^{m-1}) r^n$.

### 6.3 Worked Example

**Problem.** Solve $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 1$, $a_1 = 4$.

*Solution.* Characteristic equation: $r^2 - 5r + 6 = 0$, giving $r_1 = 2$, $r_2 = 3$.

$a_n = A \cdot 2^n + B \cdot 3^n$.

From initial conditions:
$a_0 = A + B = 1$
$a_1 = 2A + 3B = 4$

Solving: $B = 2$, $A = -1$. So $a_n = -2^n + 2 \cdot 3^n = 2 \cdot 3^n - 2^n$. $\blacksquare$

### 6.4 Generating Functions

The **generating function** of a sequence $\{a_n\}$ is

$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

**Example.** The generating function for $a_n = 1$ (all ones) is $G(x) = 1/(1-x)$.

**Example.** The generating function for $a_n = r^n$ is $G(x) = 1/(1 - rx)$.

Generating functions can solve recurrences by converting them to algebraic equations in $G(x)$,
then extracting coefficients.

:::caution Common Pitfall
Generating functions are formal power series; they may not converge for any $x \neq 0$. Convergence
is irrelevant for combinatorial applications -- the series is manipulated algebraically.
:::
