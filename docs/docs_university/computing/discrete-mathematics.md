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

### 1.4 Truth Table Construction Methods

For a propositional formula with $n$ distinct variables, the truth table has $2^n$ rows (one per
assignment). Two systematic methods ensure no assignment is missed.

**Method 1: Binary counting.** Treat the first variable as the most significant bit. Enumerate all
binary $n$-tuples from $(0, \ldots, 0)$ to $(1, \ldots, 1)$. The first variable changes most slowly
(only every $2^{n-1}$ rows), while the last variable alternates every row.

**Method 2: Recursive splitting.** For $n$ variables, the table splits into two blocks of $2^{n-1}$
rows: the top block has the first variable as $T$, the bottom as $F$. Recurse on the remaining
$n - 1$ variables within each block.

**Worked Example.** Construct the truth table for $(p \implies q) \land (q \implies r)$.

<details>
<summary>Solution</summary>

With 3 variables we have $2^3 = 8$ rows.

| $p$ | $q$ | $r$ | $p \implies q$ | $q \implies r$ | $\phi$ |
|-----|-----|-----|-----------------|-----------------|---------|
| T   | T   | T   | T               | T               | T       |
| T   | T   | F   | T               | F               | F       |
| T   | F   | T   | F               | T               | F       |
| T   | F   | F   | F               | T               | F       |
| F   | T   | T   | T               | T               | T       |
| F   | T   | F   | T               | F               | F       |
| F   | F   | T   | T               | T               | T       |
| F   | F   | F   | T               | T               | T       |

The formula is satisfiable (e.g., $p = F, q = F, r = T$) but not a tautology (e.g., $p = T, q = T, r = F$).

</details>

**Worked Example.** Verify that hypothetical syllogism
$(p \implies q) \land (q \implies r) \implies (p \implies r)$ is a tautology.

<details>
<summary>Solution</summary>

Extending the table above:

| $p$ | $q$ | $r$ | $\phi$ | $p \implies r$ | $\phi \implies (p \implies r)$ |
|-----|-----|-----|---------|-----------------|-------------------------------|
| T   | T   | T   | T       | T               | T                             |
| T   | T   | F   | F       | F               | T                             |
| T   | F   | T   | F       | T               | T                             |
| T   | F   | F   | F       | F               | T                             |
| F   | T   | T   | T       | T               | T                             |
| F   | T   | F   | F       | T               | T                             |
| F   | F   | T   | T       | T               | T                             |
| F   | F   | F   | T       | T               | T                             |

The final column is all $T$, confirming the tautology.

</details>

### 1.5 Natural Deduction

**Natural deduction** is a proof system that mirrors ordinary mathematical reasoning. Each connective
has **introduction rules** (how to *derive* a formula with that connective) and **elimination rules**
(how to *use* a formula with that connective).

**Rules of inference:**

| Rule          | Premises                               | Conclusion        |
| ------------- | -------------------------------------- | ----------------- |
| $\land$-I     | $A$, $B$                               | $A \land B$       |
| $\land$-E$_1$ | $A \land B$                            | $A$               |
| $\land$-E$_2$ | $A \land B$                            | $B$               |
| $\lor$-I$_1$  | $A$                                    | $A \lor B$        |
| $\lor$-I$_2$  | $B$                                    | $A \lor B$        |
| $\lor$-E      | $A \lor B$, $A \vdash C$, $B \vdash C$ | $C$               |
| $\to$-I       | $[A] \vdash B$                         | $A \to B$         |
| $\to$-E       | $A$, $A \to B$                         | $B$               |
| $\neg$-I      | $[A] \vdash \bot$                      | $\neg A$          |
| $\neg$-E      | $A$, $\neg A$                          | $\bot$            |
| DNE           | $\neg\neg A$                           | $A$               |
| RAA           | $[\neg A] \vdash \bot$                 | $A$               |

Square brackets $[A]$ denote an assumption that is **discharged** after the rule is applied.

**Worked Example.** Prove: $p \to q \vdash \neg q \to \neg p$ (contraposition).

<details>
<summary>Solution</summary>

1. $p \to q$ — premise
2. $[\neg q]$ — assumption (for $\to$-I)
3. $[p]$ — assumption (for $\neg$-I)
4. $q$ — $\to$-E on 1, 3
5. $\bot$ — $\neg$-E on 4, 2
6. $\neg p$ — $\neg$-I on 3--5, discharging $[p]$
7. $\neg q \to \neg p$ — $\to$-I on 2--6, discharging $[\neg q]$

$\blacksquare$

</details>

**Worked Example.** Prove: $p \lor q, \neg p \vdash q$ (disjunctive syllogism).

<details>
<summary>Solution</summary>

1. $p \lor q$ — premise
2. $\neg p$ — premise
3. $[p]$ — assumption (left case for $\lor$-E)
4. $\bot$ — $\neg$-E on 3, 2
5. $q$ — ex falso on 4
6. $[q]$ — assumption (right case for $\lor$-E)
7. $q$ — reiterate 6
8. $q$ — $\lor$-E on 1, 3--5, 6--7

$\blacksquare$

</details>

**Worked Example.** Prove: $p \land (q \lor r) \vdash (p \land q) \lor (p \land r)$ (distribution).

<details>
<summary>Solution</summary>

1. $p \land (q \lor r)$ — premise
2. $p$ — $\land$-E$_1$ on 1
3. $q \lor r$ — $\land$-E$_2$ on 1
4. $[q]$ — assumption (left case for $\lor$-E on 3)
5. $p \land q$ — $\land$-I on 2, 4
6. $(p \land q) \lor (p \land r)$ — $\lor$-I$_1$ on 5
7. $[r]$ — assumption (right case for $\lor$-E on 3)
8. $p \land r$ — $\land$-I on 2, 7
9. $(p \land q) \lor (p \land r)$ — $\lor$-I$_2$ on 8
10. $(p \land q) \lor (p \land r)$ — $\lor$-E on 3, 4--6, 7--9

$\blacksquare$

</details>

:::caution Common Pitfall
In natural deduction, always track which assumptions are discharged. A common mistake is to use a
discharged assumption in a later step. Each discharged assumption is only valid within the scope
indicated by the rule that discharges it.
:::

### 1.6 CNF and DNF

A **literal** is a propositional variable or its negation. A **clause** is a disjunction of literals.
A **term** (or **cube**) is a conjunction of literals.

- **Disjunctive Normal Form (DNF):** a disjunction of terms, e.g. $(p \land \neg q) \lor (\neg p \land r)$.
- **Conjunctive Normal Form (CNF):** a conjunction of clauses, e.g. $(p \lor \neg q) \land (\neg p \lor r)$.

**Theorem 1.2.** Every propositional formula is equivalent to a formula in CNF and to a formula in DNF.

**Conversion to CNF:**

1. Eliminate $\iff$ and $\implies$: $A \implies B \equiv \neg A \lor B$, and
   $A \iff B \equiv (\neg A \lor B) \land (A \lor \neg B)$.
2. Push $\neg$ inward using De Morgan's laws and double negation ($\neg\neg A \equiv A$) until every
   $\neg$ applies to a single variable.
3. Distribute $\lor$ over $\land$: $A \lor (B \land C) \equiv (A \lor B) \land (A \lor C)$.

**Conversion to DNF:** Same steps 1--2; in step 3 distribute $\land$ over $\lor$ instead.

**Worked Example.** Convert $(p \land q) \lor (\neg p \land r)$ to CNF.

<details>
<summary>Solution</summary>

Step 1: No $\implies$ or $\iff$ to eliminate.

Step 2: No $\neg$ to push inward.

Step 3: Distribute $\lor$ over $\land$:

$(p \land q) \lor (\neg p \land r) \equiv (p \lor \neg p) \land (p \lor r) \land (q \lor \neg p) \land (q \lor r)$.

Since $p \lor \neg p$ is a tautology we may simplify to
$(p \lor r) \land (\neg p \lor q) \land (q \lor r)$.

</details>

**Worked Example.** Convert $\neg(p \implies q) \lor r$ to CNF.

<details>
<summary>Solution</summary>

Step 1: Eliminate $\implies$: $\neg(\neg p \lor q) \lor r$.

Step 2: Push $\neg$ inward: $(p \land \neg q) \lor r$.

Step 3: Distribute $\lor$ over $\land$: $(p \lor r) \land (\neg q \lor r)$.

This is in CNF.

</details>

:::caution Common Pitfall
Distributing $\lor$ over $\land$ can cause exponential blowup. A DNF formula with $n$ terms can
produce up to $2^n$ clauses when converted to CNF. This exponential growth underlies the hardness
of many satisfiability problems.
:::

### 1.7 Resolution

The **resolution rule** is a single inference rule that is refutation-complete for propositional
logic.

**Resolution rule.** From clauses $(A \lor x)$ and $(B \lor \neg x)$, derive the **resolvent**
$(A \lor B)$, where $A$ and $B$ are (possibly empty) sets of literals and $x$ is a propositional
variable.

**Resolution refutation.** To show that clauses $\{C_1, \ldots, C_k\}$ entail clause $C$:

1. Add $\neg C$ to the clause set.
2. Repeatedly apply the resolution rule to derive new clauses.
3. If the empty clause $\bot$ is derived, the entailment holds.

**Theorem 1.3 (Refutation completeness).** If a set of clauses is unsatisfiable, the empty clause
can be derived by resolution.

**Worked Example.** Show that $\{p \lor q,\; \neg p \lor r,\; \neg q \lor \neg r\}$ entails $\neg r$.

<details>
<summary>Solution</summary>

Add the negation of the conclusion: clause (4) $r$.

Clauses: (1) $p \lor q$; (2) $\neg p \lor r$; (3) $\neg q \lor \neg r$; (4) $r$.

Resolve (2) and (4) on $r$: (5) $\neg p$.
Resolve (1) and (5) on $p$: (6) $q$.
Resolve (3) and (6) on $q$: (7) $\neg r$.
Resolve (7) and (4) on $r$: (8) $\bot$.

Since $\bot$ is derived, the entailment holds. $\blacksquare$

</details>

### 1.8 The SAT Problem

The **Boolean satisfiability problem (SAT)** asks: given a propositional formula $\phi$, is there a
truth assignment that makes $\phi$ true?

**Definition.** An instance of SAT is a propositional formula. The answer is YES if $\phi$ is
satisfiable, NO otherwise.

**k-SAT.** A restricted version where the formula is in CNF and every clause has exactly $k$
literals.

- **1-SAT:** solvable in linear time (each clause is a single literal).
- **2-SAT:** solvable in $O(n + m)$ time using the implication graph and strongly connected components,
  where $n$ is the number of variables and $m$ the number of clauses.
- **3-SAT:** NP-complete (Cook--Levin theorem, 1971). This was the first problem proven NP-complete.

**Theorem 1.4 (Cook--Levin).** SAT is NP-complete. Consequently, 3-SAT is also NP-complete.

SAT solvers (DPLL, CDCL) are widely deployed in hardware verification, software model checking, and
AI planning. Modern solvers routinely handle instances with millions of variables.

:::caution Common Pitfall
Do not confuse satisfiability with validity. A formula is *satisfiable* if it is true under *some*
assignment; it is *valid* (a tautology) if true under *all* assignments. Checking validity is
co-NP-complete, not NP-complete.
:::

## 2. Sets, Relations, and Functions

### 2.1 Sets

**Basic operations:**

- Union: $A \cup B = \\{x : x \in A \mathrm{ or } x \in B\\}$
- Intersection: $A \cap B = \\{x : x \in A \mathrm{ and } x \in B\\}$
- Difference: $A \setminus B = \\{x : x \in A \mathrm{ and } x \notin B\\}$
- Complement: $A^c = U \setminus A$ (where $U$ is the universal set)

**De Morgan's Laws:**

$$(A \cup B)^c = A^c \cap B^c, \quad (A \cap B)^c = A^c \cup B^c$$

**Power set:** $\mathcal{P}(A) = \\{B : B \subseteq A\\}$. If $|A| = n$, then $|\mathcal{P}(A)| = 2^n$.

### 2.2 Relations

A **binary relation** $R$ from set $A$ to set $B$ is a subset of $A \times B$.

A relation $R$ on $A$ is:

- **Reflexive:** $\forall a \in A$, $(a,a) \in R$.
- **Symmetric:** $(a,b) \in R \implies (b,a) \in R$.
- **Antisymmetric:** $(a,b) \in R$ and $(b,a) \in R \implies a = b$.
- **Transitive:** $(a,b) \in R$ and $(b,c) \in R \implies $(a,c) \in R$.

**Equivalence relation:** reflexive, symmetric, transitive. Partitions the set into equivalence classes.

**Partial order:** reflexive, antisymmetric, transitive. Written $(A, \preceq)$.

A **Hasse diagram** is a graphical representation of a finite poset $(A, \preceq)$: an element $a$
is drawn below $b$ whenever $a \prec b$ (i.e., $a \preceq b$ and $a \neq b$), and an edge is drawn
from $a$ to $b$ whenever $b$ **covers** $a$ (there is no $c$ with $a \prec c \prec b$).

**Worked Example.** Show that $R$ on $\mathbb{Z}$ defined by $a\,R\,b$ iff $a \equiv b \pmod{5}$ is
an equivalence relation. Describe the equivalence classes.

<details>
<summary>Solution</summary>

*Reflexive:* $a - a = 0 = 5 \cdot 0$, so $a \equiv a \pmod{5}$ for all $a$.

*Symmetric:* If $a \equiv b \pmod{5}$, then $5 \mid (a - b)$, so $5 \mid (b - a)$, giving
$b \equiv a \pmod{5}$.

*Transitive:* If $5 \mid (a - b)$ and $5 \mid (b - c)$, then
$5 \mid (a - b) + (b - c) = a - c$, so $a \equiv c \pmod{5}$.

The equivalence classes are $[0] = \\{5k : k \in \mathbb{Z}\\}$,
$[1] = \\{5k+1 : k \in \mathbb{Z}\\}$,
$[2] = \\{5k+2 : k \in \mathbb{Z}\\}$,
$[3] = \\{5k+3 : k \in \mathbb{Z}\\}$,
$[4] = \\{5k+4 : k \in \mathbb{Z}\\}$.
There are exactly 5 equivalence classes, forming the quotient $\mathbb{Z}/5\mathbb{Z}$.

</details>

**Worked Example.** Let $\preceq$ be divisibility on $A = \\{1, 2, 3, 4, 6, 12\\}$:
$a \preceq b$ iff $a \mid b$. Verify this is a partial order and identify the cover relations.

<details>
<summary>Solution</summary>

*Reflexive:* $a \mid a$ for all $a \in A$. ✓

*Antisymmetric:* If $a \mid b$ and $b \mid a$, then $b = ka$ and $a = lb$ for positive $k, l$,
so $a = lka$, giving $lk = 1$ and $l = k = 1$, hence $a = b$. ✓

*Transitive:* If $a \mid b$ and $b \mid c$, then $c = lb = l(ka) = (lk)a$, so $a \mid c$. ✓

Cover relations ($b$ covers $a$ when $a \mid b$ and no element lies strictly between):
- 12 covers 6, 4
- 6 covers 2, 3
- 4 covers 2
- 3 covers 1
- 2 covers 1

Reading from bottom to top the Hasse diagram is:
$1$ at the bottom with edges to $2$ and $3$; $2$ connects up to $4$ and $6$; $3$ connects up to $6$;
$4$ and $6$ connect up to $12$ at the top.

</details>

### 2.3 Functions

A function $f : A \to B$ is a relation where each $a \in A$ appears exactly once as a first element.

- **Injective (one-to-one):** $f(a_1) = f(a_2) \implies a_1 = a_2$.
- **Surjective (onto):** for every $b \in B$, there exists $a \in A$ with $f(a) = b$.
- **Bijective:** both injective and surjective.

**Theorem 2.1.** If $A$ and $B$ are finite sets, $f : A \to B$ is:

- Injective if and only if $|A| \leq |B|$.
- Surjective if and only if $|A| \geq |B|$.
- Bijective if and only if $|A| = |B|$.

**Theorem 2.2 (Pigeonhole Principle).** If $|A| \gt{} |B|$, then no function $f : A \to B$ is injective.
Equivalently, placing $n$ items into $m$ boxes with $n \gt{} m$ forces at least one box to contain at least
$\lceil n/m \rceil$ items.

**Function composition.** Given $f : A \to B$ and $g : B \to C$, the composition
$g \circ f : A \to C$ is defined by $(g \circ f)(a) = g(f(a))$ for all $a \in A$.

**Theorem 2.3.** If $f : A \to B$ and $g : B \to C$ are both injective, then $g \circ f$ is injective.

*Proof.* Suppose $(g \circ f)(a_1) = (g \circ f)(a_2)$. Then $g(f(a_1)) = g(f(a_2))$. Since $g$ is
injective, $f(a_1) = f(a_2)$. Since $f$ is injective, $a_1 = a_2$. Hence $g \circ f$ is injective.
$\blacksquare$

**Theorem 2.4.** If $f : A \to B$ and $g : B \to C$ are both surjective, then $g \circ f$ is surjective.

*Proof.* Let $c \in C$. Since $g$ is surjective, $\exists\, b \in B$ with $g(b) = c$. Since $f$ is
surjective, $\exists\, a \in A$ with $f(a) = b$. Then $(g \circ f)(a) = g(f(a)) = g(b) = c$. Hence
$g \circ f$ is surjective. $\blacksquare$

**Corollary 2.5.** The composition of two bijections is a bijection.

A function $f : A \to B$ is **invertible** if there exists $f^{-1} : B \to A$ such that
$f^{-1} \circ f = \mathrm{id}_A$ and $f \circ f^{-1} = \mathrm{id}_B$. A function is invertible
if and only if it is bijective.

### 2.4 Countability

**Definition.** A set $S$ is **countable** if it is finite or countably infinite. A set is
**countably infinite** if there exists a bijection $\mathbb{N} \to S$. A set that is not countable
is **uncountable**.

**Theorem 2.6.** $\mathbb{Z}$ is countably infinite.

*Proof.* The function $f : \mathbb{N} \to \mathbb{Z}$ defined by

$$f(n) = \begin{cases} n/2 & \mathrm{if}\; n\; \mathrm{is\; even} \\ -(n+1)/2 & \mathrm{if}\; n\; \mathrm{is\; odd} \end{cases}$$

is a bijection, enumerating $0, -1, 1, -2, 2, -3, 3, \ldots$ $\blacksquare$

**Theorem 2.7.** $\mathbb{Q}$ is countably infinite.

*Proof.* Every positive rational can be written as $p/q$ with $p, q \in \mathbb{N}^+$. Arrange the
pairs $(p, q)$ in an infinite grid and traverse them diagonally:

$1/1,\; 1/2,\; 2/1,\; 3/1,\; 1/3,\; 1/4,\; 2/3,\; 3/2,\; 4/1, \ldots$

Skipping duplicates (where $p/q = p'/q'$ in reduced form) yields an enumeration of $\mathbb{Q}^+$.
Extending with negatives and zero gives an enumeration of $\mathbb{Q}$. $\blacksquare$

**Theorem 2.8 (Cantor, 1891).** $\mathbb{R}$ is uncountable.

*Proof (Diagonal argument).* Suppose for contradiction that $\mathbb{R}$ is countable. Then the
interval $[0, 1)$ can be listed as $r_1, r_2, r_3, \ldots$ where each $r_i$ has a unique decimal
expansion $r_i = 0.d_{i1}d_{i2}d_{i3}\ldots$ with each $d_{ij} \in \\{0, 1, \ldots, 9\\}$
(choosing the expansion that does not end in all 9s to avoid dual representations).

Define $s = 0.s_1 s_2 s_3 \ldots$ by

$$s_i = \begin{cases} 5 & \mathrm{if}\; d_{ii} \neq 5 \\ 6 & \mathrm{if}\; d_{ii} = 5 \end{cases}$$

Then $s \in [0, 1)$ and $s$ differs from $r_i$ in the $i$-th decimal place for every $i$,
so $s \notin \\{r_1, r_2, \ldots\\}$, contradicting the assumption that the list was complete.
Therefore $\mathbb{R}$ is uncountable. $\blacksquare$

## 3. Proof Techniques

### 3.1 Direct Proof

To prove $P \implies Q$: assume $P$, derive $Q$ by a chain of logical deductions.

**Example.** Prove: if $n$ is odd, then $n^2$ is odd.

*Proof.* Let $n = 2k + 1$. Then $n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd.
$\blacksquare$

**Worked Example.** Prove: the sum of any two rational numbers is rational.

<details>
<summary>Solution</summary>

Let $a = p/q$ and $b = r/s$ where $p, q, r, s \in \mathbb{Z}$ and $q, s \neq 0$. Then

$$a + b = \frac{p}{q} + \frac{r}{s} = \frac{ps + rq}{qs}$$

Since $ps + rq \in \mathbb{Z}$ and $qs \in \mathbb{Z} \setminus \\{0\\}$, the sum $a + b$ is rational. $\blacksquare$

</details>

### 3.2 Proof by Contrapositive

To prove $P \implies Q$: prove $\neg Q \implies \neg P$ instead.

**Example.** Prove: if $n^2$ is even, then $n$ is even.

*Proof.* Contrapositive: if $n$ is odd, then $n^2$ is odd. This was proved above. $\blacksquare$

**Worked Example.** Prove: if $3n + 2$ is odd, then $n$ is odd.

<details>
<summary>Solution</summary>

Contrapositive: if $n$ is even, then $3n + 2$ is even.

Let $n = 2k$. Then $3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1)$, which is even. $\blacksquare$

</details>

### 3.3 Proof by Contradiction

To prove $P$: assume $\neg P$ and derive a contradiction.

**Example (Euclid).** There are infinitely many primes.

*Proof.* Suppose there are finitely many primes $p_1, p_2, \ldots, p_n$. Consider $N = p_1 p_2 \cdots p_n + 1$.
$N$ is not divisible by any $p_i$ (it leaves remainder 1). So $N$ is either prime itself or has a prime
factor not in the list. Either way, the list was incomplete. Contradiction. $\blacksquare$

**Worked Example.** Prove: $\sqrt{2}$ is irrational.

<details>
<summary>Solution</summary>

Suppose $\sqrt{2} = p/q$ in lowest terms, with $p, q \in \mathbb{Z}^+$ and $\gcd(p, q) = 1$.
Then $2q^2 = p^2$, so $p^2$ is even, hence $p$ is even. Write $p = 2r$. Then
$2q^2 = 4r^2$, so $q^2 = 2r^2$, hence $q$ is even. But then both $p$ and $q$ are even,
contradicting $\gcd(p, q) = 1$. $\blacksquare$

</details>

### 3.4 Mathematical Induction

**Principle of Mathematical Induction.** To prove $P(n)$ for all $n \geq n_0$:

1. **Base case:** Prove $P(n_0)$.
2. **Inductive step:** Prove $P(k) \implies P(k+1)$ for all $k \geq n_0$.

**Strong Induction.** The inductive step assumes $P(n_0), P(n_0+1), \ldots, P(k)$ to prove $P(k+1)$.

**Example.** Prove: $\sum_{i=1}^{n} i = n(n+1)/2$ for all $n \geq 1$.

*Proof.* Base case: $n = 1$: $1 = 1 \cdot 2 / 2$. True.

Inductive step: Assume $\sum_{i=1}^{k} i = k(k+1)/2$. Then

$$\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$

$\blacksquare$

**Worked Example.** Prove by strong induction: every integer $n \geq 2$ can be factored into primes.

<details>
<summary>Solution</summary>

*Base case:* $n = 2$ is prime, so it is a (trivial) product of primes.

*Inductive step:* Assume every integer in $\\{2, 3, \ldots, k\\}$ factors into primes, where $k \geq 2$.
Consider $n = k + 1$.

If $k + 1$ is prime, it is already a product of primes (itself).

If $k + 1$ is composite, then $k + 1 = ab$ where $2 \leq a \leq b \leq k$. By the strong induction
hypothesis, both $a$ and $b$ factor into primes. Hence $k + 1 = ab$ also factors into primes.

$\blacksquare$

</details>

**Worked Example.** Prove: $\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$ for all $n \geq 0$.

<details>
<summary>Solution</summary>

*Base case:* $n = 0$: $2^0 = 1 = 2^{0+1} - 1$. ✓

*Inductive step:* Assume $\sum_{i=0}^{k} 2^i = 2^{k+1} - 1$. Then

$$\sum_{i=0}^{k+1} 2^i = 2^{k+1} - 1 + 2^{k+1} = 2 \cdot 2^{k+1} - 1 = 2^{k+2} - 1$$

$\blacksquare$

</details>

### 3.5 Structural Induction

For recursively defined structures (lists, trees, formulas), prove a property by induction on the
structure:

1. Base cases (empty list, leaf node, atomic formula).
2. Inductive cases (cons, node with children, compound formula).

### 3.6 The Well-Ordering Principle

**Well-Ordering Principle (WOP).** Every nonempty set of nonnegative integers has a least element.

**Theorem 3.1.** The Well-Ordering Principle is equivalent to the Principle of Mathematical Induction.

*Proof (WOP implies induction).* Let $P(n)$ be a property with $P(0)$ true and $P(k) \implies P(k+1)$.
Suppose for contradiction that $P(n)$ fails for some $n \geq 0$. Let
$S = \\{n \geq 0 : P(n)\; \mathrm{is\; false}\\}$. By assumption $S \neq \emptyset$, so by WOP, $S$ has a least
element $m$. Since $P(0)$ is true, $m \geq 1$. Then $P(m - 1)$ is true (by minimality of $m$),
and $P(m - 1) \implies P(m)$ by the inductive hypothesis, so $P(m)$ is true, contradicting $m \in S$.
Therefore $S = \emptyset$ and $P(n)$ holds for all $n \geq 0$.

*Proof (induction implies WOP).* Let $S \subseteq \mathbb{N}$ be nonempty. We prove by induction that
if $S \cap \\{0, 1, \ldots, n\\} \neq \emptyset$, then $S$ has a least element. For $n = 0$, $S$
contains $0$, which is the least element. Assume the claim for $n = k$. If $0 \in S \cap \\{0, \ldots, k+1\\}$,
then $0$ is the least element. Otherwise $S \cap \\{0, \ldots, k+1\\} = S \cap \\{1, \ldots, k+1\\}$, and by
the induction hypothesis applied to the shifted set, a least element exists. $\blacksquare$

**Worked Example.** Use the WOP to prove that every $n \geq 1$ can be written as a sum of distinct
powers of 2.

<details>
<summary>Solution</summary>

Let $S$ be the set of positive integers that *cannot* be written as a sum of distinct powers of 2.
Suppose $S \neq \emptyset$. By WOP, $S$ has a least element $m$.

Let $2^k$ be the largest power of 2 not exceeding $m$ (so $2^k \leq m \lt 2^{k+1}$).
Then $m - 2^k \geq 0$ and $m - 2^k \lt 2^k$. If $m - 2^k = 0$, then $m = 2^k$ is a single power of 2,
contradicting $m \in S$. If $m - 2^k \gt 0$, then $m - 2^k \lt m$, so $m - 2^k \notin S$ (by minimality
of $m$). Hence $m - 2^k$ is a sum of distinct powers of 2, all of which are $\lt 2^k$. Adding $2^k$
gives $m$ as a sum of distinct powers of 2, contradicting $m \in S$. Therefore $S = \emptyset$.
$\blacksquare$

</details>

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

*Proof.* Every $r$-subset of $\\{1, \ldots, n\\}$ either contains $n$ (giving $\binom{n-1}{r-1}$ ways
to choose the remaining $r-1$) or does not contain $n$ (giving $\binom{n-1}{r}$ ways to choose all $r$
from $\\{1, \ldots, n-1\\}$). $\blacksquare$

### 4.3 Inclusion-Exclusion Principle

**Theorem 4.3 (Inclusion-Exclusion).** For finite sets $A_1, \ldots, A_n$:

$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_i |A_i| - \sum_{i \lt j} |A_i \cap A_j| + \sum_{i \lt j \lt k} |A_i \cap A_j \cap A_k| - \cdots + (-1)^{n+1}|A_1 \cap \cdots \cap A_n|$$

*Proof (for two sets).* Every element of $A_1 \cup A_2$ is in $A_1$ or $A_2$ or both. Counting
$|A_1| + |A_2|$ counts elements in $A_1 \cap A_2$ twice, so we subtract $|A_1 \cap A_2|$ once:
$|A_1 \cup A_2| = |A_1| + |A_2| - |A_1 \cap A_2|$.

For the general case, an element in exactly $t$ of the sets is counted $\binom{t}{1} - \binom{t}{2} + \binom{t}{3} - \cdots = 1 - (1-1)^t = 1$ time, which is correct. $\blacksquare$

**Worked Example.** How many integers from 1 to 1000 are not divisible by 2, 3, or 5?

Let $A_2$ = multiples of 2, $A_3$ = multiples of 3, $A_5$ = multiples of 5.

$|A_2| = 500$, $|A_3| = 333$, $|A_5| = 200$.

$|A_2 \cap A_3| = 166$, $|A_2 \cap A_5| = 100$, $|A_3 \cap A_5| = 66$.

$|A_2 \cap A_3 \cap A_5| = 33$.

$|A_2 \cup A_3 \cup A_5| = 500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$.

Not divisible by 2, 3, or 5: $1000 - 734 = 266$. $\blacksquare$

**Worked Example.** How many integers from 1 to 500 are divisible by 3 or 7 but not by 5?

<details>
<summary>Solution</summary>

Let $A_3$ = multiples of 3, $A_7$ = multiples of 7, $A_5$ = multiples of 5 in $\\{1, \ldots, 500\\}$.

$|A_3| = \lfloor 500/3 \rfloor = 166$,
$|A_7| = \lfloor 500/7 \rfloor = 71$,
$|A_5| = \lfloor 500/5 \rfloor = 100$.

$|A_3 \cap A_7| = \lfloor 500/21 \rfloor = 23$,
$|A_3 \cap A_5| = \lfloor 500/15 \rfloor = 33$,
$|A_7 \cap A_5| = \lfloor 500/35 \rfloor = 14$,
$|A_3 \cap A_7 \cap A_5| = \lfloor 500/105 \rfloor = 4$.

Divisible by 3 or 7:
$|A_3 \cup A_7| = 166 + 71 - 23 = 214$.

Divisible by 3 or 7 **and** by 5:
$|(A_3 \cup A_7) \cap A_5| = |A_3 \cap A_5| + |A_7 \cap A_5| - |A_3 \cap A_7 \cap A_5| = 33 + 14 - 4 = 43$.

Divisible by 3 or 7 but **not** by 5: $214 - 43 = 171$. $\blacksquare$

</details>

### 4.4 Stars and Bars

**Theorem 4.4.** The number of ways to distribute $n$ identical objects into $k$ distinct bins is
$\binom{n + k - 1}{k - 1}$.

*Proof.* The problem is equivalent to placing $k - 1$ dividers among $n$ objects, giving
$\binom{n + k - 1}{n} = \binom{n + k - 1}{k - 1}$ arrangements. $\blacksquare$

**Worked Example.** How many solutions does $x_1 + x_2 + x_3 = 15$ have with $x_i \geq 1$?

<details>
<summary>Solution</summary>

Substitute $y_i = x_i - 1 \geq 0$. Then $y_1 + y_2 + y_3 = 15 - 3 = 12$ with $y_i \geq 0$.
By stars and bars: $\binom{12 + 3 - 1}{3 - 1} = \binom{14}{2} = 91$. $\blacksquare$

</details>

**Worked Example.** How many solutions does $x_1 + x_2 + x_3 + x_4 = 20$ have with $x_i \geq 0$?

<details>
<summary>Solution</summary>

Directly by stars and bars: $\binom{20 + 4 - 1}{4 - 1} = \binom{23}{3} = 1771$. $\blacksquare$

</details>

### 4.5 The Pigeonhole Principle

**Theorem 4.5 (Pigeonhole Principle).** If $n$ objects are placed into $k$ boxes and $n \gt{} k$, then at
least one box contains at least $\lceil n/k \rceil$ objects.

*Proof.* If every box contained at most $\lceil n/k \rceil - 1$ objects, the total would be at most
$k(\lceil n/k \rceil - 1) \lt{} k \cdot n/k = n$, contradicting that there are $n$ objects. $\blacksquare$

**Worked Example.** In a class of 400 students, at least how many were born in the same month?

<details>
<summary>Solution</summary>

There are 12 months (boxes) and 400 students (objects). By the pigeonhole principle, some month
has at least $\lceil 400/12 \rceil = \lceil 33.33\ldots \rceil = 34$ students.

</details>

**Worked Example.** Show that among any $n + 1$ integers from $\\{1, 2, \ldots, 2n\\}$, two of them
differ by exactly $n$.

<details>
<summary>Solution</summary>

Partition $\\{1, 2, \ldots, 2n\\}$ into $n$ pigeonholes: $\\{1, n+1\\}$, $\\{2, n+2\\}$, $\ldots$,
$\\{n, 2n\\}$. Each pair sums to $n + (n+k) = 2n + k$... Let me rephrase.

Partition into $\\{1, n+1\\}$, $\\{2, n+2\\}$, $\ldots$, $\\{n, 2n\\}$. These are $n$ disjoint sets.
If we select $n + 1$ integers from $\\{1, \ldots, 2n\\}$, by the pigeonhole principle two must lie in the
same set $\\{i, n+i\\}$, and their difference is $(n + i) - i = n$. $\blacksquare$

</details>

**Worked Example.** Prove that any sequence of $n^2 + 1$ distinct real numbers contains a monotone
(increasing or decreasing) subsequence of length $n + 1$.

<details>
<summary>Solution</summary>

Let $a_1, a_2, \ldots, a_{n^2+1}$ be the sequence. For each $a_i$, let $d_i$ be the length of the
longest increasing subsequence starting at $a_i$, and $e_i$ the length of the longest decreasing
subsequence starting at $a_i$.

Suppose for contradiction that every monotone subsequence has length at most $n$. Then
$1 \leq d_i \leq n$ and $1 \leq e_i \leq n$, so there are at most $n^2$ distinct ordered pairs
$(d_i, e_i)$. Since we have $n^2 + 1$ elements, by the pigeonhole principle two indices $i \lt j$
have $(d_i, e_i) = (d_j, e_j)$.

If $a_i \lt a_j$, then $d_i \geq d_j + 1$ (append $a_i$ before the increasing subsequence starting
at $a_j$), contradicting $d_i = d_j$.

If $a_i \gt a_j$, then $e_i \geq e_j + 1$, contradicting $e_i = e_j$.

Either way we have a contradiction. $\blacksquare$

</details>

**Theorem 4.6 (Generalised Pigeonhole Principle).** If $n$ objects are placed into $k$ boxes, then at
least one box contains at least $\lceil n/k \rceil$ objects. Equivalently, if each box contains at most
$m$ objects, then the total number of objects is at most $km$.

**Worked Example.** A drawer contains red, blue, and yellow socks. How many socks must be drawn
(without looking) to guarantee at least 4 socks of the same colour?

<details>
<summary>Solution</summary>

There are 3 colours (boxes). By the generalised pigeonhole principle, drawing $n$ socks guarantees
at least $\lceil n/3 \rceil$ of one colour. We need $\lceil n/3 \rceil \geq 4$, so $n/3 \gt{} 3$, giving
$n \geq 10$.

With 9 socks it is possible to have 3 of each colour (no colour reaches 4). With 10 socks, one
colour must have at least $\lceil 10/3 \rceil = 4$.

</details>

**Worked Example.** Prove that in any group of $n$ people, there are at least two who have shaken
hands with the same number of people (within the group).

<details>
<summary>Solution</summary>

Each person can shake hands with between 0 and $n - 1$ others, giving $n$ possible values. But the
values 0 and $n - 1$ cannot both occur (if someone shook no hands, no one shook everyone's hand,
and vice versa). So there are at most $n - 1$ distinct handshake counts among $n$ people. By the
pigeonhole principle, at least two people have the same count. $\blacksquare$

</details>

### 4.6 Catalan Numbers

The $n$-th **Catalan number** is

$$C_n = \frac{1}{n+1}\binom{2n}{n} = \frac{(2n)!}{(n+1)!\,n!}$$

The first few values: $C_0 = 1$, $C_1 = 1$, $C_2 = 2$, $C_3 = 5$, $C_4 = 14$, $C_5 = 42$.

**Catalan numbers count:**

- The number of valid (properly matched) sequences of $n$ pairs of parentheses.
- The number of binary search trees with $n$ nodes.
- The number of ways to triangulate a convex $(n+2)$-gon.
- The number of lattice paths from $(0,0)$ to $(n,n)$ that never go above the diagonal.

**Recurrence.** $C_0 = 1$ and for $n \geq 1$:

$$C_n = \sum_{i=0}^{n-1} C_i \, C_{n-1-i}$$

**Worked Example.** Verify $C_3 = 5$ by listing all valid sequences of 3 pairs of parentheses.

<details>
<summary>Solution</summary>

The five valid sequences are: $((()))$, $(()())$, $(())()$, $()(())$, $()()()$.

Checking: $C_3 = \frac{1}{4}\binom{6}{3} = \frac{1}{4} \cdot 20 = 5$. ✓

</details>

### 4.7 Generating Functions for Combinatorics

The **ordinary generating function (OGF)** of a sequence $\\{a_n\\}$ is

$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

**Common generating functions:**

| Sequence $a_n$     | Generating function $G(x)$          |
| ------------------ | ----------------------------------- |
| $1$                | $\dfrac{1}{1-x}$                    |
| $r^n$              | $\dfrac{1}{1 - rx}$                 |
| $\binom{n+k}{k}$   | $\dfrac{1}{(1-x)^{k+1}}$            |
| $n$                | $\dfrac{x}{(1-x)^2}$                |
| $n^2$              | $\dfrac{x(1+x)}{(1-x)^3}$           |

**Key operations.** If $A(x)$ generates $\\{a_n\\}$ and $B(x)$ generates $\\{b_n\\}$:

- $A(x) + B(x)$ generates $\\{a_n + b_n\\}$ (choice between types).
- $A(x) \cdot B(x)$ generates $\\{c_n\\}$ where $c_n = \sum_{i=0}^{n} a_i b_{n-i}$ (combining two choices).

**Worked Example.** Find the number of ways to select $n$ coins from unlimited supplies of 1p, 2p,
and 5p coins.

<details>
<summary>Solution</summary>

The generating function is

$$G(x) = \underbrace{(1 + x + x^2 + \cdots)}_{\mathrm{1p\; coins}} \cdot \underbrace{(1 + x^2 + x^4 + \cdots)}_{\mathrm{2p\; coins}} \cdot \underbrace{(1 + x^5 + x^{10} + \cdots)}_{\mathrm{5p\; coins}}$$

$$= \frac{1}{1-x} \cdot \frac{1}{1-x^2} \cdot \frac{1}{1-x^5}$$

The coefficient of $x^n$ in the expansion gives the number of ways. For example, expanding the
first few terms: $1 + x + 2x^2 + 2x^3 + 3x^4 + 4x^5 + \cdots$, so there are 4 ways to make 5p
(5×1p; 3×1p + 1×2p; 1×1p + 2×2p; 1×5p).

</details>

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

*Proof sketch.* Build the graph edge by edge. Starting from a single vertex ($V = 1$, $E = 0$, $F = 1$),
the quantity $V - E + F = 2$ is preserved when adding an edge: if the edge connects two components,
$E$ and $V$ each increase by 1; if it splits a face, $E$ and $F$ each increase by 1. $\blacksquare$

**Corollary 5.6.** For a simple planar graph with $V \geq 3$: $E \leq 3V - 6$.

*Proof.* Every face has at least 3 edges on its boundary, and every edge borders at most 2 faces,
so $3F \leq 2E$. By Euler's formula, $F = 2 - V + E$, giving $3(2 - V + E) \leq 2E$, i.e.,
$E \leq 3V - 6$. $\blacksquare$

**Corollary 5.7.** $K_5$ and $K_{3,3}$ are not planar.

*Proof.* $K_5$ has $V = 5$, $E = 10$, but $10 \gt 3(5) - 6 = 9$. For $K_{3,3}$, $V = 6$, $E = 9$.
Since $K_{3,3}$ has no triangles, every face has at least 4 edges, giving $4F \leq 2E$, so
$F \leq E/2 = 4.5$. But $V - E + F = 2$ gives $F = 2 - 6 + 9 = 5 \gt 4.5$. Contradiction. $\blacksquare$

**Theorem 5.8 (Kuratowski's Theorem).** A graph is planar if and only if it does not contain a
subdivision of $K_5$ or $K_{3,3}$ as a subgraph.

A **subdivision** of an edge $uv$ replaces $uv$ with a path $u$--$w$--$v$ through a new vertex $w$.
A graph $H$ is a subdivision of $G$ if $H$ can be obtained from $G$ by subdividing edges.

**Worked Example.** Show that $K_{3,3}$ is not planar using Euler's formula.

<details>
<summary>Solution</summary>

$K_{3,3}$ has $V = 6$ vertices and $E = 9$ edges. It is bipartite (partition sizes 3 and 3), so it
contains no triangles. Every face in a planar embedding must therefore be bounded by at least 4 edges,
giving $4F \leq 2E$, i.e., $F \leq 9/2 = 4.5$.

But Euler's formula gives $F = E - V + 2 = 9 - 6 + 2 = 5$. Since $5 \gt 4.5$, no planar embedding
exists. $\blacksquare$

</details>

### 5.5 Graph Colouring

A **proper $k$-colouring** assigns one of $k$ colours to each vertex such that adjacent vertices have
different colours. The **chromatic number** $\chi(G)$ is the minimum $k$ for which a proper $k$-colouring
exists.

**Theorem 5.9 (Four Colour Theorem).** Every planar graph is 4-colourable.

**Theorem 5.10 (Five Colour Theorem).** Every planar graph is 5-colourable. (Easier to prove.)

**Theorem 5.11 (Greedy Colouring Bound).** $\chi(G) \leq \Delta(G) + 1$ where $\Delta(G)$ is the
maximum degree.

**Theorem 5.12 (Brooks' Theorem).** If $G$ is connected and is neither a complete graph nor an odd
cycle, then $\chi(G) \leq \Delta(G)$.

**Chromatic polynomial.** The **chromatic polynomial** $P(G, k)$ counts the number of proper
$k$-colourings of $G$.

**Theorem 5.13.** $P(G, k)$ is a polynomial in $k$.

**Deletion-contraction recurrence.** For any edge $e$ of $G$:

$$P(G, k) = P(G - e, k) - P(G / e, k)$$

where $G - e$ is $G$ with edge $e$ deleted, and $G / e$ is $G$ with $e$ contracted (its endpoints
merged).

**Worked Example.** Find the chromatic polynomial of $C_4$ (the 4-cycle).

<details>
<summary>Solution</summary>

Label the vertices of $C_4$ as $v_1, v_2, v_3, v_4$ with edges $v_1v_2$, $v_2v_3$, $v_3v_4$, $v_4v_1$.

Pick edge $e = v_1v_2$.

$G - e$ is a path on 4 vertices (a tree): $P(G - e, k) = k(k-1)^3$.

$G / e$ merges $v_1$ and $v_2$, yielding $C_3$ (triangle): $P(C_3, k) = k(k-1)(k-2)$.

Therefore $P(C_4, k) = k(k-1)^3 - k(k-1)(k-2) = k(k-1)[(k-1)^2 - (k-2)] = k(k-1)(k^2 - 3k + 3)$.

Checking: $P(C_4, 2) = 2(1)(4 - 6 + 3) = 2$ (two 2-colourings: alternating), and
$P(C_4, 3) = 3 \cdot 2 \cdot (9 - 9 + 3) = 18$. $\blacksquare$

</details>

**Worked Example.** Find $\chi(K_n)$ and $\chi(K_{m,n})$.

<details>
<summary>Solution</summary>

$K_n$ (complete graph on $n$ vertices): every pair of vertices is adjacent, so all $n$ vertices must
receive distinct colours. Hence $\chi(K_n) = n$.

$K_{m,n}$ (complete bipartite graph): no two vertices within the same partition are adjacent, so we
can colour all vertices in the first partition with colour 1 and all in the second with colour 2.
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
and ends at the same vertex.

**Theorem 5.14.** A connected graph has an Euler circuit if and only if every vertex has even degree.
It has an Euler path (but not circuit) if and only if exactly two vertices have odd degree.

*Proof (sufficiency).* If every vertex has even degree, start at any vertex and follow edges, never
reusing an edge. Since all degrees are even, the walk can only terminate at the starting vertex,
forming a circuit $C$. If $C$ uses all edges, we are done. Otherwise, remove $C$'s edges; each
remaining component has all vertices of even degree (each lost an even number of incident edges).
By induction, each component has an Euler circuit. Splicing these circuits into $C$ at shared
vertices yields an Euler circuit of the full graph. $\blacksquare$

**Worked Example.** Does $K_{2,3}$ have an Euler circuit? An Euler path?

<details>
<summary>Solution</summary>

$K_{2,3}$ has 5 vertices. The two vertices in the first partition each have degree 3 (connected to
all three in the second partition). The three vertices in the second partition each have degree 2.

Vertices of odd degree: two (each of degree 3). Since exactly two vertices have odd degree,
$K_{2,3}$ has an Euler path (starting at one odd-degree vertex, ending at the other) but not an
Euler circuit.

</details>

A **Hamilton path** visits every vertex exactly once. A **Hamilton circuit** is a Hamilton path that
returns to the start.

**Theorem 5.15 (Dirac's Theorem).** If $G$ is a simple graph with $n \geq 3$ vertices and
$\deg(v) \geq n/2$ for every vertex, then $G$ has a Hamilton circuit.

**Theorem 5.16 (Ore's Theorem).** If $G$ is a simple graph with $n \geq 3$ vertices and
$\deg(u) + \deg(v) \geq n$ for every pair of non-adjacent vertices $u, v$, then $G$ has a Hamilton
circuit.

Note that Dirac's theorem is a corollary of Ore's theorem.

**Worked Example.** Does $K_{2,3}$ have a Hamilton circuit?

<details>
<summary>Solution</summary>

$K_{2,3}$ has 5 vertices. A Hamilton circuit must visit all 5 vertices and return. Label the
partitions as $A = \\{a_1, a_2\\}$ and $B = \\{b_1, b_2, b_3\\}$. Any cycle in a bipartite graph alternates
between the two partitions. A Hamilton cycle would alternate between $A$ and $B$, requiring
$|A| = |B|$. But $|A| = 2 \neq 3 = |B|$, so no Hamilton circuit exists.

However, $K_{2,3}$ does have Hamilton paths (e.g., $a_1, b_1, a_2, b_2, b_3$ -- wait, this doesn't
alternate properly). Actually, in $K_{2,3}$ edges only exist between $A$ and $B$. A path must alternate
$A, B, A, B, \ldots$ or $B, A, B, A, \ldots$. A Hamilton path visits all 5 vertices, so it has the
form $a, b, a, b, a$ (length 5, starting and ending in $A$) or $b, a, b, a, b$ (length 5, starting
and ending in $B$). The first requires 3 vertices from $A$, but $|A| = 2$. The second requires 3
vertices from $B$, and $|B| = 3$. So a Hamilton path exists: e.g., $b_1, a_1, b_2, a_2, b_3$.

</details>

**Worked Example.** Let $G$ have vertices $\\{1, 2, 3, 4, 5\\}$ and edges
$12, 23, 34, 45, 51, 13, 35$. Does $G$ have an Euler circuit or Euler path?

<details>
<summary>Solution</summary>

Degrees: $\deg(1) = 3$, $\deg(2) = 2$, $\deg(3) = 4$, $\deg(4) = 2$, $\deg(5) = 3$.
Two vertices (1 and 5) have odd degree. Since exactly two vertices have odd degree, $G$ has an Euler
path (starting at 1, ending at 5) but no Euler circuit.

One Euler path: $1 \to 2 \to 3 \to 4 \to 5 \to 3 \to 1 \to 5$. All 7 edges are used exactly once. ✓

</details>

**Algorithm (Hierholzer's).** To find an Euler circuit: start at any vertex, follow unused edges
until returning to the start. If unused edges remain, find a vertex on the current circuit with
unused edges, find a subtour, and splice it in. Repeat until all edges are used.

:::caution Common Pitfall
Determining whether a graph has a Hamilton path/circuit is NP-complete in general, whereas Euler
paths/circuits can be determined in polynomial time using the degree condition. Do not confuse the two.
:::

### 5.7 Matching Theory

A **matching** $M$ in a graph $G = (V, E)$ is a set of pairwise disjoint edges (no two share an
endpoint). A vertex is **matched** if it is an endpoint of an edge in $M$; otherwise it is **unmatched**.
A **perfect matching** covers every vertex.

**Theorem 5.17 (Hall's Marriage Theorem, 1935).** Let $G = (V, E)$ be a bipartite graph with
partitions $X$ and $Y$. There exists a matching that covers every vertex in $X$ if and only if for
every subset $S \subseteq X$,

$$|N(S)| \geq |S|$$

where $N(S) = \\{y \in Y : \exists\, x \in S\; \mathrm{with}\; xy \in E\\}$ is the neighbourhood of $S$.

*Proof (necessity).* If a matching covers $X$, each $x \in S$ is matched to a distinct $y \in N(S)$,
so $|N(S)| \geq |S|$.

*Proof (sufficiency by induction on $|X|$).* Base case $|X| = 1$: Hall's condition gives $|N(\\{x\\})| \geq 1$,
so $x$ has a neighbour, and we can match $x$ to it.

Inductive step. Consider two cases.

*Case 1:* For every nonempty proper subset $S \subsetneq X$, $|N(S)| \gt |S|$. Pick any edge $xy$.
In $G' = G - \\{x, y\\}$, Hall's condition still holds (removing one element from each side preserves the
strict inequality). By the induction hypothesis, $X \setminus \\{x\\}$ can be matched in $G'$. Adding $xy$
gives the desired matching.

*Case 2:* There exists a nonempty proper $T \subsetneq X$ with $|N(T)| = |T|$. Match $T$ to $N(T)$
by the induction hypothesis. In $G'' = G - (T \cup N(T))$, for any $S \subseteq X \setminus T$,
$N_{G''}(S) = N_G(S \cup T) \setminus N(T)$, so

$$|N_{G''}(S)| = |N_G(S \cup T)| - |N(T)| \geq |S \cup T| - |T| = |S|$$

where the inequality uses Hall's condition on $S \cup T$ in $G$. By the induction hypothesis,
$X \setminus T$ can be matched in $G''$. Combining with the matching on $T$ gives the result.
$\blacksquare$

**Worked Example.** Let $X = \\{a, b, c, d\\}$ and $Y = \\{1, 2, 3, 4, 5\\}$ with edges
$a$--$1,2$; $b$--$1,2$; $c$--$2,3$; $d$--$3,4,5$. Does a matching covering $X$ exist?

<details>
<summary>Solution</summary>

Check Hall's condition for every subset $S \subseteq X$:

- $|S| = 1$: each vertex has at least 1 neighbour. ✓
- $|S| = 2$: $N(\\{a, b\\}) = \\{1, 2\\}$, $|N| = 2$. $N(\\{a, c\\}) = \\{1, 2, 3\\}$, $|N| = 3$. Similarly all
  pairs have $|N| \geq 2$. ✓
- $|S| = 3$: $N(\\{a, b, c\\}) = \\{1, 2, 3\\}$, $|N| = 3$. $N(\\{a, c, d\\}) = \\{1, 2, 3, 4, 5\\}$, $|N| = 5$.
  All triples have $|N| \geq 3$. ✓
- $|S| = 4$: $N(X) = \\{1, 2, 3, 4, 5\\}$, $|N| = 5 \geq 4$. ✓

Hall's condition is satisfied, so a matching exists. One such matching: $a$--$1$, $b$--$2$,
$c$--$3$, $d$--$4$.

</details>

### 5.8 Network Flows

A **flow network** is a directed graph $G = (V, E)$ with a **source** $s$, a **sink** $t$, and a
**capacity** function $c : E \to \mathbb{R}_{\geq 0}$. A **flow** $f : E \to \mathbb{R}_{\geq 0}$
satisfies:

1. **Capacity constraint:** $0 \leq f(e) \leq c(e)$ for all $e \in E$.
2. **Flow conservation:** for all $v \in V \setminus \\{s, t\\}$,
   $\sum_{e\; \mathrm{into}\; v} f(e) = \sum_{e\; \mathrm{out\; of}\; v} f(e)$.

The **value** of a flow is $|f| = \sum_{e\; \mathrm{out\; of}\; s} f(e) - \sum_{e\; \mathrm{into}\; s} f(e)$.

An **s-t cut** $(S, T)$ partitions $V$ into $S$ (containing $s$) and $T$ (containing $t$). The
**capacity** of the cut is $c(S, T) = \sum_{u \in S, v \in T} c(uv)$.

**Theorem 5.18 (Max-Flow Min-Cut Theorem).** In any flow network, the maximum value of a flow from
$s$ to $t$ equals the minimum capacity of an $s$-$t$ cut.

*Proof sketch.* Let $f^*$ be a maximum flow. Define the **residual graph** $G_f$ with the same
vertices and residual capacity $c_f(uv) = c(uv) - f(uv)$ for forward edges and $c_f(vu) = f(uv)$
for backward edges. Let $S$ be the set of vertices reachable from $s$ in $G_{f^*}$ via edges with
positive residual capacity. Since $f^*$ is maximum, $t \notin S$ (otherwise we could augment the
flow). The cut $(S, V \setminus S)$ has capacity exactly $|f^*|$ (all forward edges are saturated,
all backward edges have zero flow). Therefore $|f^*| = c(S, V \setminus S) \geq$ minimum cut
capacity $\geq |f^*|$, giving equality. $\blacksquare$

**Theorem 5.19 (Integrality Theorem).** If all capacities are integers, there exists a maximum flow
where every $f(e)$ is an integer.

**Corollary 5.20.** If all capacities are integers, the maximum flow value is an integer.

The **Ford--Fulkerson method** repeatedly finds augmenting paths in the residual graph and pushes
flow along them. When capacities are integers, each augmentation increases the flow by at least 1,
guaranteeing termination.

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

**Worked Example.** Solve $a_n = 4a_{n-1} - 4a_{n-2}$ with $a_0 = 1$, $a_1 = 6$.

<details>
<summary>Solution</summary>

Characteristic equation: $r^2 - 4r + 4 = 0$, so $(r - 2)^2 = 0$. Root $r = 2$ with multiplicity 2.

$a_n = (A + Bn) \cdot 2^n$.

From initial conditions:
$a_0 = A = 1$
$a_1 = (1 + B) \cdot 2 = 6 \implies B = 2$

So $a_n = (1 + 2n) \cdot 2^n$. $\blacksquare$

</details>

### 6.4 Generating Functions

The **generating function** of a sequence $\{a_n\}$ is

$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

**Example.** The generating function for $a_n = 1$ (all ones) is $G(x) = 1/(1-x)$.

**Example.** The generating function for $a_n = r^n$ is $G(x) = 1/(1 - rx)$.

Generating functions can solve recurrences by converting them to algebraic equations in $G(x)$,
then extracting coefficients.

**Worked Example.** Use generating functions to solve the Fibonacci recurrence $F_n = F_{n-1} + F_{n-2}$
with $F_0 = 0$, $F_1 = 1$.

<details>
<summary>Solution</summary>

Let $G(x) = \sum_{n=0}^{\infty} F_n x^n$.

$$G(x) = x + \sum_{n=2}^{\infty} (F_{n-1} + F_{n-2}) x^n = x + x(G(x) - F_0) + x^2 G(x) = x + xG(x) + x^2 G(x)$$

$$G(x)(1 - x - x^2) = x \implies G(x) = \frac{x}{1 - x - x^2}$$

Factor: $1 - x - x^2 = (1 - \alpha x)(1 - \beta x)$ where $\alpha = (1 + \sqrt{5})/2$ and
$\beta = (1 - \sqrt{5})/2$.

Partial fractions give $G(x) = \frac{1}{\sqrt{5}} \left(\frac{1}{1 - \alpha x} - \frac{1}{1 - \beta x}\right)$,
so $F_n = \frac{1}{\sqrt{5}}(\alpha^n - \beta^n)$ (Binet's formula). $\blacksquare$

</details>

**Worked Example.** Use generating functions to solve $a_n = 2a_{n-1} + 1$ with $a_0 = 0$.

<details>
<summary>Solution</summary>

Let $G(x) = \sum_{n=0}^{\infty} a_n x^n$.

$$G(x) = \sum_{n=1}^{\infty} (2a_{n-1} + 1) x^n = 2x G(x) + \sum_{n=1}^{\infty} x^n = 2x G(x) + \frac{x}{1-x}$$

$$(1 - 2x) G(x) = \frac{x}{1-x} \implies G(x) = \frac{x}{(1-x)(1-2x)}$$

Partial fractions: $\frac{x}{(1-x)(1-2x)} = \frac{A}{1-x} + \frac{B}{1-2x}$.

$x = A(1-2x) + B(1-x)$. Setting $x = 0$: $A + B = 0$, so $B = -A$. Setting $x = 1$:
$1 = -A$, so $A = -1$, $B = 1$.

$G(x) = \frac{1}{1-2x} - \frac{1}{1-x}$, giving $a_n = 2^n - 1$. $\blacksquare$

</details>

:::caution Common Pitfall
Generating functions are formal power series; they may not converge for any $x \neq 0$. Convergence
is irrelevant for combinatorial applications -- the series is manipulated algebraically.
:::

### 6.5 The Master Theorem

The Master Theorem provides asymptotic solutions to recurrences of the form

$$T(n) = a\,T(n/b) + f(n)$$

where $a \geq 1$, $b \gt 1$ are constants and $f(n)$ is asymptotically positive. Define
$c_{\mathrm{crit}} = \log_b a$ (the **critical exponent**).

**Theorem 6.1 (Master Theorem).** Let $T(n)$ be defined as above.

**Case 1:** If $f(n) = O(n^c)$ for some $c \lt c_{\mathrm{crit}}$, then $T(n) = \Theta(n^{c_{\mathrm{crit}}})$.

**Case 2:** If $f(n) = \Theta(n^{c_{\mathrm{crit}}} \log^k n)$ for some $k \geq 0$, then
$T(n) = \Theta(n^{c_{\mathrm{crit}}} \log^{k+1} n)$.

**Case 3:** If $f(n) = \Omega(n^c)$ for some $c \gt c_{\mathrm{crit}}$, and $a\,f(n/b) \leq \delta\, f(n)$
for some $\delta \lt 1$ and sufficiently large $n$ (the **regularity condition**), then
$T(n) = \Theta(f(n))$.

**Worked Example.** Solve $T(n) = 3T(n/2) + n^2$.

<details>
<summary>Solution</summary>

$a = 3$, $b = 2$, $f(n) = n^2$. Critical exponent: $c_{\mathrm{crit}} = \log_2 3 \approx 1.585$.

Since $f(n) = n^2 = \Omega(n^c)$ for any $c \lt 2$, and $2 \gt 1.585 = c_{\mathrm{crit}}$, we are in
Case 3 (provided the regularity condition holds). Check: $3 \cdot (n/2)^2 = 3n^2/4 = 0.75\, n^2 \leq \delta\, n^2$
for $\delta = 0.75 \lt 1$. ✓

Therefore $T(n) = \Theta(n^2)$.

</details>

**Worked Example.** Solve $T(n) = 2T(n/2) + n$.

<details>
<summary>Solution</summary>

$a = 2$, $b = 2$, $f(n) = n$. Critical exponent: $c_{\mathrm{crit}} = \log_2 2 = 1$.

$f(n) = n = \Theta(n^1 \log^0 n)$, so we are in Case 2 with $k = 0$.

Therefore $T(n) = \Theta(n \log n)$.

</details>

**Worked Example.** Solve $T(n) = 4T(n/2) + n$.

<details>
<summary>Solution</summary>

$a = 4$, $b = 2$, $f(n) = n$. Critical exponent: $c_{\mathrm{crit}} = \log_2 4 = 2$.

$f(n) = n = O(n^c)$ for any $c \gt 0$ with $c \lt 2$, so we are in Case 1.

Therefore $T(n) = \Theta(n^2)$.

</details>

**Proof sketch of the Master Theorem.** Expand the recurrence tree. At level $j$ (root is level 0),
there are $a^j$ subproblems, each of size $n/b^j$, each contributing $f(n/b^j)$ work. The tree has
$\log_b n$ levels, with $a^{\log_b n} = n^{c_{\mathrm{crit}}}$ leaves. The total work is

$$T(n) = \Theta\!\left(n^{c_{\mathrm{crit}}}\right) + \sum_{j=0}^{\log_b n - 1} a^j \, f(n/b^j)$$

- **Case 1:** $f(n) = O(n^c)$ with $c \lt c_{\mathrm{crit}}$. The sum is dominated by the leaves,
  giving $T(n) = \Theta(n^{c_{\mathrm{crit}}})$.
- **Case 2:** $f(n) = \Theta(n^{c_{\mathrm{crit}}} \log^k n)$. Each level contributes the same order,
  with $\log_b n$ levels, giving $T(n) = \Theta(n^{c_{\mathrm{crit}}} \log^{k+1} n)$.
- **Case 3:** $f(n) = \Omega(n^c)$ with $c \gt c_{\mathrm{crit}}$. The root level dominates, giving
  $T(n) = \Theta(f(n))$. The regularity condition $a\,f(n/b) \leq \delta\,f(n)$ ensures the root
  dominates all levels below.
The Master Theorem does not apply to recurrences like $T(n) = T(n-1) + n$ (not of the form
$a\,T(n/b) + f(n)$). Also, if $f(n)$ falls between cases (e.g., $f(n) = n \log n$ with
$c_{\mathrm{crit}} = 1$), the Master Theorem does not apply and the Akra--Bazzi method should be used
instead.
:::

## 7. Problem Set

**Problem 1.** Prove that $(p \implies q) \lor (q \implies p)$ is a tautology using a truth table.

<details>
<summary>Solution</summary>

| $p$ | $q$ | $p \implies q$ | $q \implies p$ | disjunction |
|-----|-----|-----------------|-----------------|-------------|
| T   | T   | T               | T               | T           |
| T   | F   | F               | T               | T           |
| F   | T   | T               | F               | T           |
| F   | F   | T               | T               | T           |

All rows give $T$, so it is a tautology.

If you get this wrong, revise: Section 1.1 and Section 1.4.
</details>

**Problem 2.** Convert $(\neg p \lor q) \land (r \lor \neg s)$ to DNF.

<details>
<summary>Solution</summary>

The formula is a conjunction of two clauses. Distribute $\land$ over $\lor$:

$(\neg p \lor q) \land (r \lor \neg s) = (\neg p \land r) \lor (\neg p \land \neg s) \lor (q \land r) \lor (q \land \neg s)$.

This is in DNF (disjunction of four terms, each a conjunction of two literals).

If you get this wrong, revise: Section 1.6.
</details>

**Problem 3.** Negate: "For every real number $x$, there exists a real number $y$ such that $y \gt x$."

<details>
<summary>Solution</summary>

Original: $\forall x\, \exists y\, (y \gt x)$.

Negation: $\exists x\, \forall y\, (y \leq x)$, i.e., "there exists a real number $x$ such that every
real number $y$ satisfies $y \leq x$."

If you get this wrong, revise: Section 1.2.
</details>

**Problem 4.** Prove that $A \subseteq B$ if and only if $A \cap B^c = \emptyset$.

<details>
<summary>Solution</summary>

($\Rightarrow$) Assume $A \subseteq B$. Let $x \in A \cap B^c$. Then $x \in A$ and $x \notin B$. But
$A \subseteq B$ implies $x \in B$, contradiction. So $A \cap B^c = \emptyset$.

($\Leftarrow$) Assume $A \cap B^c = \emptyset$. Let $x \in A$. If $x \notin B$, then $x \in B^c$, so
$x \in A \cap B^c = \emptyset$, contradiction. Hence $x \in B$, proving $A \subseteq B$. $\blacksquare$

If you get this wrong, revise: Section 2.1.
</details>

**Problem 5.** Show that the relation $R$ on $\mathbb{Z}$ defined by $a\,R\,b$ iff $a - b$ is even
is an equivalence relation. How many equivalence classes are there?

<details>
<summary>Solution</summary>

*Reflexive:* $a - a = 0$, which is even. ✓
*Symmetric:* If $a - b$ is even, then $b - a = -(a - b)$ is even. ✓
*Transitive:* If $a - b$ and $b - c$ are even, then $a - c = (a - b) + (b - c)$ is even. ✓

The equivalence classes are $[0] = \\{\mathrm{even\; integers}\\}$ and $[1] = \\{\mathrm{odd\; integers}\\}$.
There are exactly 2 equivalence classes.

If you get this wrong, revise: Section 2.2.
</details>

**Problem 6.** Let $f : \mathbb{R} \to \mathbb{R}$ be $f(x) = 2x + 1$ and $g : \mathbb{R} \to \mathbb{R}$
be $g(x) = x^2$. Find $g \circ f$ and $f \circ g$. Is $g \circ f$ injective?

<details>
<summary>Solution</summary>

$(g \circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$.

$(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$.

Note $g \circ f \neq f \circ g$, so composition is not commutative.

$g \circ f$ is not injective: $(g \circ f)(0) = 1$ and $(g \circ f)(-1) = 4(-1)^2 + 4(-1) + 1 = 1$,
but $0 \neq -1$.

If you get this wrong, revise: Section 2.3.
</details>

**Problem 7.** Prove that the set of all infinite binary sequences is uncountable.

<details>
<summary>Solution</summary>

Suppose the set $S$ of all infinite binary sequences is countable, so $S = \\{s_1, s_2, s_3, \ldots\\}$
where $s_i = (s_{i1}, s_{i2}, s_{i3}, \ldots)$ with each $s_{ij} \in \\{0, 1\\}$.

Define $t = (t_1, t_2, t_3, \ldots)$ by $t_i = 1 - s_{ii}$ (flip the $i$-th bit of the $i$-th
sequence). Then $t \in S$ but $t \neq s_i$ for every $i$ (they differ in position $i$). This
contradicts $S = \\{s_1, s_2, \ldots\\}$. Therefore $S$ is uncountable. $\blacksquare$

If you get this wrong, revise: Section 2.4.
</details>

**Problem 8.** Prove: the product of any two odd integers is odd.

<details>
<summary>Solution</summary>

Let $a = 2m + 1$ and $b = 2n + 1$ be odd. Then $ab = (2m+1)(2n+1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$,
which is odd. $\blacksquare$

If you get this wrong, revise: Section 3.1.
</details>

**Problem 9.** Prove: if $3n + 2$ is odd, then $n$ is odd.

<details>
<summary>Solution</summary>

By contrapositive: assume $n$ is even, so $n = 2k$. Then $3n + 2 = 6k + 2 = 2(3k + 1)$, which is
even. $\blacksquare$

If you get this wrong, revise: Section 3.2.
</details>

**Problem 10.** Prove: $\sqrt{3}$ is irrational.

<details>
<summary>Solution</summary>

Suppose $\sqrt{3} = p/q$ in lowest terms. Then $3q^2 = p^2$, so $3 \mid p^2$, hence $3 \mid p$.
Write $p = 3r$. Then $3q^2 = 9r^2$, so $q^2 = 3r^2$, giving $3 \mid q^2$ and $3 \mid q$. But then
$\gcd(p, q) \geq 3$, contradicting lowest terms. $\blacksquare$

If you get this wrong, revise: Section 3.3.
</details>

**Problem 11.** Prove by induction: $\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$ for all $n \geq 0$.

<details>
<summary>Solution</summary>

*Base case:* $n = 0$: $2^0 = 1 = 2^1 - 1$. ✓

*Inductive step:* Assume $\sum_{i=0}^{k} 2^i = 2^{k+1} - 1$. Then

$$\sum_{i=0}^{k+1} 2^i = (2^{k+1} - 1) + 2^{k+1} = 2 \cdot 2^{k+1} - 1 = 2^{k+2} - 1$$

$\blacksquare$

If you get this wrong, revise: Section 3.4.
</details>

**Problem 12.** Prove by strong induction that every integer $n \geq 2$ is a product of primes.

<details>
<summary>Solution</summary>

*Base case:* $n = 2$ is prime, hence a product of primes.

*Inductive step:* Assume every integer in $\\{2, \ldots, k\\}$ is a product of primes ($k \geq 2$).
If $k + 1$ is prime, done. If $k + 1$ is composite, then $k + 1 = ab$ where $2 \leq a, b \leq k$.
By the induction hypothesis, both $a$ and $b$ are products of primes, so $k + 1 = ab$ is too.
$\blacksquare$

If you get this wrong, revise: Section 3.4 (strong induction).
</details>

**Problem 13.** A committee of 5 is to be chosen from 12 people. How many ways if two specific
people must either both serve or neither serves?

<details>
<summary>Solution</summary>

*Case 1:* Both serve. Choose the remaining 3 from the other 10: $\binom{10}{3} = 120$.
*Case 2:* Neither serves. Choose all 5 from the other 10: $\binom{10}{5} = 252$.

Total: $120 + 252 = 372$.

If you get this wrong, revise: Section 4.2.
</details>

**Problem 14.** How many integers from 1 to 500 are divisible by 3 or 7 but not by 5?

<details>
<summary>Solution</summary>

$|A_3| = 166$, $|A_7| = 71$, $|A_3 \cap A_7| = 23$.
Divisible by 3 or 7: $166 + 71 - 23 = 214$.

$|A_3 \cap A_5| = 33$, $|A_7 \cap A_5| = 14$, $|A_3 \cap A_7 \cap A_5| = 4$.
Divisible by 3 or 7 **and** 5: $33 + 14 - 4 = 43$.

Divisible by 3 or 7 but not 5: $214 - 43 = 171$.

If you get this wrong, revise: Section 4.3.
</details>

**Problem 15.** How many solutions does $x_1 + x_2 + x_3 = 15$ have with $x_i \geq 1$?

<details>
<summary>Solution</summary>

Substitute $y_i = x_i - 1 \geq 0$: $y_1 + y_2 + y_3 = 12$ with $y_i \geq 0$.
By stars and bars: $\binom{12 + 3 - 1}{3 - 1} = \binom{14}{2} = 91$.

If you get this wrong, revise: Section 4.4.
</details>

**Problem 16.** Prove that among any 13 people, at least 2 were born in the same month.

<details>
<summary>Solution</summary>

There are 12 months and 13 people. By the pigeonhole principle, at least one month contains at least
$\lceil 13/12 \rceil = 2$ people.

If you get this wrong, revise: Section 4.5.
</details>

**Problem 17.** Verify that $C_3 = 5$ using the Catalan recurrence and the closed form.

<details>
<summary>Solution</summary>

*By recurrence:* $C_3 = C_0 C_2 + C_1 C_1 + C_2 C_0 = 1 \cdot 2 + 1 \cdot 1 + 2 \cdot 1 = 2 + 1 + 2 = 5$.

*By closed form:* $C_3 = \frac{1}{4}\binom{6}{3} = \frac{1}{4} \cdot 20 = 5$. ✓

If you get this wrong, revise: Section 4.6.
</details>

**Problem 18.** Find the chromatic number of $C_5$ (the 5-cycle) and justify.

<details>
<summary>Solution</summary>

$C_5$ is an odd cycle. It cannot be 2-coloured (an odd cycle requires 3 colours: colour the first
vertex 1, alternate 2 and 1 around, and the last vertex (5th) is adjacent to both the 4th (colour 2)
and the 1st (colour 1), so it needs colour 3).

A 3-colouring exists: label vertices $v_1, \ldots, v_5$; colour $v_1 = 1$, $v_2 = 2$, $v_3 = 1$,
$v_4 = 2$, $v_5 = 3$.

Therefore $\chi(C_5) = 3$.

If you get this wrong, revise: Section 5.5.
</details>

**Problem 19.** In the bipartite graph with partitions $X = \\{1, 2, 3\\}$ and $Y = \\{a, b, c, d\\}$
and edges $1$--$a,b$; $2$--$b,c$; $3$--$c,d$, verify Hall's condition and find a matching covering $X$.

<details>
<summary>Solution</summary>

Neighbourhoods: $N(\\{1\\}) = \\{a, b\\}$, $N(\\{2\\}) = \\{b, c\\}$, $N(\\{3\\}) = \\{c, d\\}$.
$N(\\{1, 2\\}) = \\{a, b, c\\}$, $N(\\{1, 3\\}) = \\{a, b, c, d\\}$, $N(\\{2, 3\\}) = \\{b, c, d\\}$.
$N(\\{1, 2, 3\\}) = \\{a, b, c, d\\}$.

All satisfy $|N(S)| \geq |S|$. A matching: $1$--$a$, $2$--$b$, $3$--$c$.

If you get this wrong, revise: Section 5.7.
</details>

**Problem 20.** Solve $a_n = 3a_{n-1} - 2a_{n-2}$ with $a_0 = 0$, $a_1 = 1$.

<details>
<summary>Solution</summary>

Characteristic equation: $r^2 - 3r + 2 = 0$, giving $(r - 1)(r - 2) = 0$, so $r_1 = 1$, $r_2 = 2$.

$a_n = A \cdot 1^n + B \cdot 2^n = A + B \cdot 2^n$.

$a_0 = A + B = 0 \implies A = -B$.
$a_1 = A + 2B = 1 \implies -B + 2B = B = 1$.

So $A = -1$, $B = 1$, giving $a_n = 2^n - 1$. $\blacksquare$

If you get this wrong, revise: Section 6.2 and Section 6.3.
</details>
