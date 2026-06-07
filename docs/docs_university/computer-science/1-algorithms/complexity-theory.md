---
title: Complexity Theory
slug: algorithms-complexity-theory
description: 'University Computer Science Complexity Theory notes covering key definitions, core concepts, worked examples, and practice questions for focused preparation.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

## 1. Asymptotic Notation

### 1.1 Big-O (Upper Bound)

$f(n) = O(g(n))$ if there exist constants $c > 0$ and $n_0 > 0$ such that:

$$f(n) \leq c \cdot g(n) \quad \text{for all } n \geq n_0$$

### 1.2 Big-Omega (Lower Bound)

$f(n) = \Omega(g(n))$ if there exist constants $c > 0$ and $n_0 > 0$ such that:

$$f(n) \geq c \cdot g(n) \quad \text{for all } n \geq n_0$$

### 1.3 Big-Theta (Tight Bound)

$f(n) = \Theta(g(n))$ if both $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$:

$$c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n) \quad \text{for all } n \geq n_0$$

### 1.4 Little-o and Little-omega

$f(n) = o(g(n))$ if for **every** constant $c > 0$, there exists $n_0$ such that $f(n) < c \cdot g(n)$ for all $n \geq n_0$.

Equivalently: $\lim_{n \to \infty} \frac{f(n)}{g(n)} = 0$.

$f(n) = \omega(g(n))$: $\lim_{n \to \infty} \frac{f(n)}{g(n)} = \infty$.

### 1.5 Common Complexity Classes

| Class          | Name              | Example                      |
| -------------- | ----------------- | ---------------------------- |
| $O(1)$         | Constant          | Hash table access            |
| $O(\log n)$    | Logarithmic       | Binary search                |
| $O(\sqrt{n})$  | Square root       | Trial division factorization |
| $O(n)$         | Linear            | Array scan                   |
| $O(n \log n)$  | Linearithmic      | Merge sort, heap sort        |
| $O(n^2)$       | Quadratic         | Bubble sort, insertion sort  |
| $O(n^3)$       | Cubic             | Matrix multiplication        |
| $O(2^n)$       | Exponential       | Subset enumeration           |
| $O(n!)$        | Factorial         | Permutation generation       |
| $O(n^n)$       | Exponential tower | Some brute force             |

### 1.6 Properties

**Transitivity:** If $f = O(g)$ and $g = O(h)$, then $f = O(h)$.

**Reflexivity:** $f = O(f)$.

**Sum rule:** $O(f) + O(g) = O(\max(f, g))$.

**Product rule:** $O(f) \cdot O(g) = O(f \cdot g)$.

## 2. Complexity Classes

### 2.1 Decision Problems

A **decision problem** has a yes/no answer. Optimization problems can be cast as decision problems (e.g., "is there a TSP tour of length $\leq k$?").

### 2.2 P (Polynomial Time)

$$\text{P} = \{L : L \text{ is decidable by a deterministic TM in } O(n^k) \text{ time for some } k\}$$

**Examples:** Sorting, shortest paths, MST, 2-SAT, primality testing.

### 2.3 NP (Nondeterministic Polynomial Time)

$$\text{NP} = \{L : L \text{ is decidable by a nondeterministic TM in polynomial time}\}$$

Equivalently, NP is the class of problems for which a **yes-instance** can be **verified** in polynomial time given a certificate (witness).

**Examples:** SAT, traveling salesman (decision version), graph coloring, clique, vertex cover.

**Key insight:** $\text{P} \subseteq \text{NP}$. Whether $\text{P} = \text{NP}$ is the most important open question in CS.

### 2.4 NP-Hard

A problem $L$ is **NP-hard** if every problem in NP can be reduced to $L$ in polynomial time:

$$\forall L' \in \text{NP}, \ L' \leq_p L$$

NP-hard problems are **at least as hard as every problem in NP**. They may or may not be in NP themselves.

### 2.5 NP-Complete

A problem is **NP-complete** if it is both in NP and NP-hard:

$$\text{NP-complete} = \text{NP} \cap \text{NP-hard}$$

**If any NP-complete problem is in P, then P = NP.**

```
Relationship:
        NP-Hard
       /       \
      /    NP-Complete
     /       /
  All problems    P ⊆ NP
```

### 2.6 co-NP

$\text{co-NP} = \{L : \overline{L} \in \text{NP}\}$

The class of problems whose complement can be verified in polynomial time.

**Open question:** Is NP = co-NP? (Believed no, but not proven.)

### 2.7 Other Classes

| Class  | Definition                                                           |
| ------ | -------------------------------------------------------------------- |
| PSPACE | Solvable in polynomial space                                        |
| EXP    | Solvable in exponential time $O(2^{n^k})$                            |
| BPP    | Solvable by randomized algorithm with error $\leq 1/3$ (polynomial) |

$$\text{P} \subseteq \text{NP} \subseteq \text{PSPACE} \subseteq \text{EXP}$$

## 3. Polynomial-Time Reductions

### 3.1 Definition

A **polynomial-time reduction** $L_1 \leq_p L_2$ transforms instances of $L_1$ into instances of $L_2$ in polynomial time, preserving yes/no answers.

If $L_1 \leq_p L_2$ and $L_2 \in \text{P}$, then $L_1 \in \text{P}$.

If $L_1 \leq_p L_2$ and $L_1$ is NP-hard, then $L_2$ is NP-hard.

### 3.2 Karp Reductions

A **Karp reduction** (many-one reduction) maps instance $x$ of $L_1$ to instance $f(x)$ of $L_2$:

$$x \in L_1 \iff f(x) \in L_2$$

where $f$ is computable in polynomial time.

### 3.3 Proving NP-Completeness

To prove $L$ is NP-complete:

1. **Show $L \in \text{NP}$:** Given a certificate, verify in polynomial time.
2. **Show $L$ is NP-hard:** Reduce a known NP-complete problem to $L$.

**Standard NP-complete problems for reduction:**

- **SAT** (Cook's theorem)
- **3-SAT**
- **Independent Set**
- **Vertex Cover**
- **Clique**
- **Subset Sum**
- **Hamiltonian Cycle**
- **TSP (decision version)**

## 4. Classic NP-Complete Problems

### 4.1 SAT (Boolean Satisfiability)

**Instance:** A Boolean formula $\phi$ in conjunctive normal form (CNF): $\phi = C_1 \wedge C_2 \wedge \cdots \wedge C_m$, where each clause $C_j$ is a disjunction of literals.

**Question:** Is there a truth assignment that satisfies $\phi$?

### 4.2 3-SAT

SAT where each clause has **exactly 3 literals**.

### 4.3 Vertex Cover

**Instance:** Graph $G = (V, E)$, integer $k$.

**Question:** Is there a set $S \subseteq V$ with $|S| \leq k$ such that every edge has at least one endpoint in $S$?

### 4.4 Clique

**Instance:** Graph $G = (V, E)$, integer $k$.

**Question:** Is there a clique of size $k$ (a set of $k$ pairwise adjacent vertices)?

**Reduction from Vertex Cover:** $G$ has a vertex cover of size $k$ iff $\overline{G}$ has a clique of size $|V| - k$.

### 4.5 Independent Set

**Instance:** Graph $G = (V, E)$, integer $k$.

**Question:** Is there an independent set of size $k$ (a set of $k$ vertices, no two adjacent)?

**Reduction from Vertex Cover:** $G$ has a vertex cover of size $k$ iff $G$ has an independent set of size $|V| - k$.

### 4.6 Subset Sum

**Instance:** Set $S = \{s_1, s_2, \ldots, s_n\}$ of integers, target $T$.

**Question:** Is there a subset $S' \subseteq S$ such that $\sum_{s \in S'} s = T$?

### 4.7 Hamiltonian Cycle

**Instance:** Graph $G = (V, E)$.

**Question:** Does $G$ contain a cycle that visits each vertex exactly once?

### 4.8 Traveling Salesman (Decision Version)

**Instance:** Complete graph $G$ with edge weights, integer $k$.

**Question:** Is there a Hamiltonian cycle of total weight $\leq k$?

### 4.9 Graph Coloring

**Instance:** Graph $G$, integer $k$.

**Question:** Can $G$ be colored with $k$ colors such that no adjacent vertices share a color?

- $k = 2$: Solvable in polynomial time (bipartiteness test).
- $k \geq 3$: NP-complete.

### 4.10 Reduction Chain

```
SAT
 └── 3-SAT
      └── Independent Set
      │    ├── Vertex Cover
      │    └── Clique
      └── Hamiltonian Cycle
           └── TSP
```

## 5. Cook's Theorem

**Theorem (Cook, 1971 / Levin, 1973):** SAT is NP-complete.

**Proof sketch:**

1. **SAT $\in$ NP:** Given a truth assignment, verify each clause is satisfied in $O(|\phi|)$ time.

2. **SAT is NP-hard:** Every NP problem $L$ can be decided by a nondeterministic TM $M$ in polynomial time. Given any instance $x$ of $L$, construct a Boolean formula $\phi_{M,x}$ that is satisfiable iff $M$ accepts $x$.

**Construction of $\phi_{M,x}$:**
- Encode the computation of $M$ on $x$ as a tableau (2D grid of cell states).
- Each cell's state depends on its neighbors (TM transition function).
- Assert: initial configuration is correct, transitions are valid, accepting state is reached.
- All constraints are expressible as CNF clauses.
- Size is polynomial in $|x|$.

**Consequence:** Any NP-complete problem can be proven NP-hard by reducing from SAT (or from any other known NP-complete problem).

## 6. Approximation Algorithms

### 6.1 Motivation

For NP-hard optimization problems, we seek **polynomial-time algorithms** that produce **near-optimal** solutions.

### 6.2 Approximation Ratio

An algorithm $\mathcal{A}$ is an **$\alpha$-approximation** for a minimization problem if:

$$\mathcal{A}(I) \leq \alpha \cdot \text{OPT}(I) \quad \text{for all instances } I$$

For maximization: $\mathcal{A}(I) \geq \frac{1}{\alpha} \cdot \text{OPT}(I)$.

### 6.3 Vertex Cover: 2-Approximation

```
APPROX_VERTEX_COVER(G):
    C = {}
    E' = G.E (copy)
    while E' is not empty:
        pick arbitrary (u, v) in E'
        C = C ∪ {u, v}
        remove all edges incident to u or v from E'
    return C
```

**Ratio:** $|C| \leq 2 \cdot |\text{OPT}|$ (since each selected edge has at least one endpoint in any vertex cover).

**Time:** $O(V + E)$.

### 6.4 TSP: Christofides' Algorithm

For metric TSP (triangle inequality):

1. Compute MST.
2. Find minimum-weight perfect matching on odd-degree vertices.
3. Combine MST + matching into Eulerian circuit.
4. Shortcut repeated vertices.

**Approximation ratio:** $\frac{3}{2}$.

### 6.5 Set Cover: Greedy $\ln(n)$-Approximation

```
APPROX_SET_COVER(U, S):
    C = {}
    while C != U:
        pick S_i in S that maximizes |S_i \ (C ∩ S_i)|
        C = C ∪ S_i
    return selected sets
```

**Approximation ratio:** $H_n = O(\ln n)$, where $H_n = \sum_{i=1}^{n} \frac{1}{i}$ is the $n$-th harmonic number.

### 6.6 PTAS and FPTAS

**PTAS** (Polynomial-Time Approximation Scheme): For any $\epsilon > 0$, a $(1+\epsilon)$-approximation running in polynomial time (possibly exponential in $1/\epsilon$).

**FPTAS** (Fully PTAS): $(1+\epsilon)$-approximation running in polynomial time in both $n$ and $1/\epsilon$.

**Example:** Knapsack has an FPTAS.

## 7. Hardness of Approximation

### 7.1 Inapproximability Results

Some problems cannot be approximated within any constant factor unless P = NP.

| Problem         | Best known ratio | Inapproximability     |
| --------------- | ---------------- | --------------------- |
| Max-Clique      | $O(n / \log^2 n)$ | Cannot approximate within $n^{1-\epsilon}$ unless ZPP = NP |
| TSP (general)   | None (metric: 3/2) | No constant factor unless P = NP |
| Set Cover       | $\ln n$ (greedy) | Cannot do better than $(1-\epsilon)\ln n$ unless P = NP |

### 7.2 PCP Theorem

**PCP Theorem (1992):** Every problem in NP has a probabilistically checkable proof that can be verified by reading only a constant number of bits.

**Consequence:** Max-3SAT cannot be approximated beyond $7/8 + \epsilon$ unless P = NP.

### 7.3 APX, APX-Hard

- **APX:** Problems with constant-factor polynomial approximation algorithms.
- **APX-hard:** As hard as any problem in APX under PTAS reductions.

**Examples:** Vertex cover (APX, 2-approximable), Max-3SAT (APX, 7/8-approximable).

## 8. Common Pitfalls

1. **Confusing NP with "not polynomial."** NP means verifiable in polynomial time, not "hard." P $\subseteq$ NP, so every problem in P is also in NP.

2. **Confusing NP-hard with NP-complete.** NP-hard includes problems not in NP (e.g., the halting problem). NP-complete requires the problem to be both NP-hard and in NP.

3. **Incorrect reduction direction.** To prove $L$ is NP-hard, reduce a **known NP-hard problem** to $L$ (not the other way). The reduction goes from hard to unknown.

4. **Forgetting to prove membership in NP.** A reduction alone only shows NP-hardness. You must also show $L \in \text{NP}$ to claim NP-completeness.

5. **Confusing worst-case with average-case.** NP-completeness is a worst-case notion. An NP-complete problem might be efficiently solvable on typical inputs.

6. **Assuming approximation exists.** Not all NP-hard problems have good approximations. Some are inapproximable within any polynomial factor (unless P = NP).

7. **Using wrong reduction type.** Karp (many-one) reductions map yes-instances to yes-instances and no-instances to no-instances. Turing reductions (which use $L_2$ as a subroutine) are more general but give weaker results for NP-hardness.

## Worked Examples

### Example 1: Proving a Language is in P
**Problem:** Prove that the language PATH = {(G, u, v) : G is a directed graph with a path from u to v} is in P.
**Solution:** BFS or DFS from u in G takes O(V + E) time, which is polynomial in the input size. If v is reached, accept; otherwise reject. Since there exists a polynomial-time algorithm, PATH is in P.

### Example 2: NP-Completeness Reduction
**Problem:** Prove that 3-SAT is NP-hard by reducing from SAT.
**Solution:** Given a CNF formula phi, transform each clause into a set of exactly 3 literals. For clauses with 1 literal (l), replace with (l OR x OR NOT x) where x is a new variable. For clauses with 2 literals (l1 OR l2), replace with (l1 OR l2 OR x) AND (l1 OR l2 OR NOT x). This produces an equisatisfiable 3-CNF formula in polynomial time. Therefore, 3-SAT is NP-hard. Since 3-SAT is in NP, it is NP-complete.

## Summary

- **Asymptotic notation** ($O$, $\Omega$, $\Theta$, $o$, $\omega$) describes growth rates of functions.
- **P** = solvable in polynomial time; **NP** = verifiable in polynomial time.
- **NP-complete** = NP $\cap$ NP-hard; the "hardest" problems in NP.
- **Cook's theorem** establishes SAT as the first NP-complete problem.
- **Polynomial reductions** propagate hardness: if $L_1 \leq_p L_2$ and $L_1$ is NP-hard, then $L_2$ is NP-hard.
- **Approximation algorithms** provide near-optimal solutions in polynomial time with provable guarantees.
- **Hardness of approximation** shows limits on how well NP-hard problems can be approximated.

## Cross-References

| Topic | Link |
|-------|------|
| Algorithm Design | [View](/docs/university/computer-science/algorithm-design) |
| Data Structures | [View](/docs/university/computer-science/data-structures) |
| Graph Algorithms | [View](/docs/university/computer-science/graph-algorithms) |
