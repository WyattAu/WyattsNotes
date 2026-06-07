---
title: Problem Set
slug: discrete-mathematics-problem-set
tags:
  - Computing
  - University
---

**Problem 1.** Prove that $(p \implies q) \lor (q \implies p)$ is a tautology using a truth table.

<details>
<summary>Solution</summary>

| $p$ | $q$ | $p \implies q$ | $q \implies p$ | disjunction |
| --- | --- | -------------- | -------------- | ----------- |
| T   | T   | T              | T              | T           |
| T   | F   | F              | T              | T           |
| F   | T   | T              | F              | T           |
| F   | F   | T              | T              | T           |

All rows give $T$So it is a tautology.

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

**Problem 3.** Negate: "For every real number $x$There exists a real number $y$ such that $y \gt x$."

<details>
<summary>Solution</summary>

Original: $\forall x\, \exists y\, (y \gt x)$.

Negation: $\exists x\, \forall y\, (y \leq x)$I.e., "there exists a real number $x$ such that every Real number $y$ satisfies $y \leq x$."

If you get this wrong, revise: Section 1.2.

</details>

**Problem 4.** Prove that $A \subseteq B$ if and only if $A \cap B^c = \emptyset$.

<details>
<summary>Solution</summary>

($\Rightarrow$) Assume $A \subseteq B$. Let $x \in A \cap B^c$. Then $x \in A$ and $x \notin B$. But
$A \subseteq B$ implies $x \in B$Contradiction. So $A \cap B^c = \emptyset$.

($\Leftarrow$) Assume $A \cap B^c = \emptyset$. Let $x \in A$. If $x \notin B$Then $x \in B^c$So
$x \in A \cap B^c = \emptyset$Contradiction. Hence $x \in B$Proving $A \subseteq B$. $\blacksquare$

If you get this wrong, revise: Section 2.1.

</details>

**Problem 5.** Show that the relation $R$ on $\mathbb{{'}Z{}'}$ defined by $a\,R\,b$ iff $a - b$ is
even Is an equivalence relation. How many equivalence classes are there?

<details>
<summary>Solution</summary>

_Reflexive:_ $a - a = 0$Which is even. ✓ _Symmetric:_ If $a - b$ is even, then $b - a = -(a - b)$ is
even. ✓ _Transitive:_ If $a - b$ and $b - c$ are even, then $a - c = (a - b) + (b - c)$ is even. ✓

The equivalence classes are $[0] = \\{\mathrm{even\; integers{}\\}$ and
$[1] = \\{\mathrm{odd\; integers{}\\}$. There are exactly 2 equivalence classes.

If you get this wrong, revise: Section 2.2.

</details>

**Problem 6.** Let $f : \mathbb{{'}R{}'} \to \mathbb{{'}R{}'}$ be $f(x) = 2x + 1$ and
$g : \mathbb{{'}R{}'} \to \mathbb{{'}R{}'}$ Be $g(x) = x^2$. Find $g \circ f$ and $f \circ g$. Is
$g \circ f$ injective?

<details>
<summary>Solution</summary>

$(g \circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$.

$(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$.

Note $g \circ f \neq f \circ g$So composition is not commutative.

$g \circ f$ is not injective: $(g \circ f)(0) = 1$ and $(g \circ f)(-1) = 4(-1)^2 + 4(-1) + 1 = 1$
But $0 \neq -1$.

If you get this wrong, revise: Section 2.3.

</details>

**Problem 7.** Prove that the set of all infinite binary sequences is uncountable.

<details>
<summary>Solution</summary>

Suppose the set $S$ of all infinite binary sequences is countable, so
$S = \\{s_1, s_2, s_3, \ldots\\}$ Where $s_i = (s_{i1}, s_{i2}, s_{i3}, \ldots)$ with each
$s_{ij} \in \\{0, 1\\}$.

Define $t = (t_1, t_2, t_3, \ldots)$ by $t_i = 1 - s_{ii}$ (flip the $i$-th bit of the $i$-th
Sequence). Then $t \in S$ but $t \neq s_i$ for every $i$ (they differ in position $i$). This
Contradicts $S = \\{s_1, s_2, \ldots\\}$. Therefore $S$ is uncountable. $\blacksquare$

If you get this wrong, revise: Section 2.4.

</details>

**Problem 8.** Prove: the product of any two odd integers is odd.

<details>
<summary>Solution</summary>

Let $a = 2m + 1$ and $b = 2n + 1$ be odd. Then
$ab = (2m+1)(2n+1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$ Which is odd. $\blacksquare$

If you get this wrong, revise: Section 3.1.

</details>

**Problem 9.** Prove: if $3n + 2$ is odd, then $n$ is odd.

<details>
<summary>Solution</summary>

By contrapositive: assume $n$ is even, so $n = 2k$. Then $3n + 2 = 6k + 2 = 2(3k + 1)$Which is Even.
$\blacksquare$

If you get this wrong, revise: Section 3.2.

</details>

**Problem 10.** Prove: $\sqrt{3}$ is irrational.

<details>
<summary>Solution</summary>

Suppose $\sqrt{3} = p/q$ in lowest terms. Then $3q^2 = p^2$So $3 \mid p^2$Hence $3 \mid p$. Write
$p = 3r$. Then $3q^2 = 9r^2$So $q^2 = 3r^2$Giving $3 \mid q^2$ and $3 \mid q$. But then
$\gcd(p, q) \geq 3$Contradicting lowest terms. $\blacksquare$

If you get this wrong, revise: Section 3.3.

</details>

**Problem 11.** Prove by induction: $\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$ for all $n \geq 0$.

<details>
<summary>Solution</summary>

_Base case:_ $n = 0$: $2^0 = 1 = 2^1 - 1$. ✓

_Inductive step:_ Assume $\sum_{i=0}^{k} 2^i = 2^{k+1} - 1$. Then

$$\sum_{i=0}^{k+1} 2^i = (2^{k+1} - 1) + 2^{k+1} = 2 \cdot 2^{k+1} - 1 = 2^{k+2} - 1$$

$\blacksquare$

If you get this wrong, revise: Section 3.4.

</details>

**Problem 12.** Prove by strong induction that every integer $n \geq 2$ is a product of primes.

<details>
<summary>Solution</summary>

_Base case:_ $n = 2$ is prime, hence a product of primes.

_Inductive step:_ Assume every integer in $\\{2, \ldots, k\\}$ is a product of primes ($k \geq 2$).
If $k + 1$ is prime, done. If $k + 1$ is composite, then $k + 1 = ab$ where $2 \leq a, b \leq k$. By
the induction hypothesis, both $a$ and $b$ are products of primes, so $k + 1 = ab$ is too.
$\blacksquare$

If you get this wrong, revise: Section 3.4 (strong induction).

</details>

**Problem 13.** A committee of 5 is to be chosen from 12 people. How many ways if two specific
People must either both serve or neither serves?

<details>
<summary>Solution</summary>

_Case 1:_ Both serve. Choose the remaining 3 from the other 10: $\binom{10}{3} = 120$. _Case 2:_
Neither serves. Choose all 5 from the other 10: $\binom{10}{5} = 252$.

Total: $120 + 252 = 372$.

If you get this wrong, revise: Section 4.2.

</details>

**Problem 14.** How many integers from 1 to 500 are divisible by 3 or 7 but not by 5?

<details>
<summary>Solution</summary>

$|A_3| = 166$, $|A_7| = 71$, $|A_3 \cap A_7| = 23$. Divisible by 3 or 7: $166 + 71 - 23 = 214$.

$|A_3 \cap A_5| = 33$, $|A_7 \cap A_5| = 14$, $|A_3 \cap A_7 \cap A_5| = 4$. Divisible by 3 or 7
**and** 5: $33 + 14 - 4 = 43$.

Divisible by 3 or 7 but not 5: $214 - 43 = 171$.

If you get this wrong, revise: Section 4.3.

</details>

**Problem 15.** How many solutions does $x_1 + x_2 + x_3 = 15$ have with $x_i \geq 1$?

<details>
<summary>Solution</summary>

Substitute $y_i = x_i - 1 \geq 0$: $y_1 + y_2 + y_3 = 12$ with $y_i \geq 0$. By stars and bars:
$\binom{12 + 3 - 1}{3 - 1} = \binom{14}{2} = 91$.

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

_By recurrence:_
$C_3 = C_0 C_2 + C_1 C_1 + C_2 C_0 = 1 \cdot 2 + 1 \cdot 1 + 2 \cdot 1 = 2 + 1 + 2 = 5$.

_By closed form:_ $C_3 = \frac{1}{4}\binom{6}{3} = \frac{1}{4} \cdot 20 = 5$. ✓

If you get this wrong, revise: Section 4.6.

</details>

**Problem 18.** Find the chromatic number of $C_5$ (the 5-cycle) and justify.

<details>
<summary>Solution</summary>

$C_5$ is an odd cycle. It cannot be 2-coloured (an odd cycle requires 3 colours: colour the first
Vertex 1, alternate 2 and 1 around, and the last vertex (5th) is adjacent to both the 4th (colour 2)
And the 1st (colour 1), so it needs colour 3).

A 3-colouring exists: label vertices $v_1, \ldots, v_5$; colour $v_1 = 1$, $v_2 = 2$, $v_3 = 1$
$v_4 = 2$, $v_5 = 3$.

Therefore $\chi(C_5) = 3$.

If you get this wrong, revise: Section 5.5.

</details>

**Problem 19.** In the bipartite graph with partitions $X = \\{1, 2, 3\\}$ and
$Y = \\{a, b, c, d\\}$ And edges $1$--$a,b$; $2$--$b,c$; $3$--$c,d$Verify Hall's condition and find
a matching covering $X$.

<details>
<summary>Solution</summary>

Neighbourhoods: $N(\\{1\\}) = \\{a, b\\}$, $N(\\{2\\}) = \\{b, c\\}$, $N(\\{3\\}) = \\{c, d\\}$.
$N(\\{1, 2\\}) = \\{a, b, c\\}$, $N(\\{1, 3\\}) = \\{a, b, c, d\\}$,
$N(\\{2, 3\\}) = \\{b, c, d\\}$. $N(\\{1, 2, 3\\}) = \\{a, b, c, d\\}$.

All satisfy $|N(S)| \geq |S|$. A matching: $1$--$a$, $2$--$b$, $3$--$c$.

If you get this wrong, revise: Section 5.7.

</details>

**Problem 20.** Solve $a_n = 3a_{n-1} - 2a_{n-2}$ with $a_0 = 0$, $a_1 = 1$.

<details>
<summary>Solution</summary>

Characteristic equation: $r^2 - 3r + 2 = 0$Giving $(r - 1)(r - 2) = 0$So $r_1 = 1$, $r_2 = 2$.

$a_n = A \cdot 1^n + B \cdot 2^n = A + B \cdot 2^n$.

$a_0 = A + B = 0 \implies A = -B$. $a_1 = A + 2B = 1 \implies -B + 2B = B = 1$.

So $A = -1$, $B = 1$Giving $a_n = 2^n - 1$. $\blacksquare$

If you get this wrong, revise: Section 6.2 and Section 6.3.

</details>

## Common Pitfalls

- **Confusing $\Rightarrow$ and $\Leftrightarrow$.** $P \Rightarrow Q$ means "if $P$ then $Q$"
  (sufficient condition). $P \Leftrightarrow Q$ means "if and only if" (necessary and sufficient).
  **Fix:** $P \Rightarrow Q$ is equivalent to $\neg Q \Rightarrow \neg P$ (contrapositive), not
  $Q \Rightarrow P$ (converse).
- **Wrong induction base case.** The base case must be the smallest value for which the statement is
  claimed to hold. **Fix:** If the claim starts at $n = 1$, prove $n = 1$; if at $n = 0$, prove
  $n = 0$.
- **Confusing combinations and permutations with repetition.** Standard formulas assume distinct,
  non-repeated items. **Fix:** With repetition: $n^r$ (ordered) or $\binom{n+r-1}{r}$ (unordered).

## Worked Examples

### Example 1: Proof by induction

**Problem.** Prove that $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ for all $n \geq 1$.

**Solution.** Base ($n = 1$): $1 = 1(2)(3)/6 = 1$. ✓ Inductive step: assume true for $n$. Then
$\sum_{k=1}^{n+1} k^2 = \frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \frac{(n+1)[n(2n+1) + 6(n+1)]}{6} = \frac{(n+1)(2n^2 + 7n + 6)}{6} = \frac{(n+1)(n+2)(2n+3)}{6}$.
✓

$\blacksquare$

### Example 2: Graph theory

**Problem.** A connected planar graph has 6 vertices and 8 edges. How many faces does it have?

**Solution.** By Euler's formula: $V - E + F = 2$. $6 - 8 + F = 2 \implies F = 4$.

$\blacksquare$

## Summary

- Logic: propositions, truth tables, quantifiers; implication, contrapositive, converse.
- Proof techniques: direct, contrapositive, contradiction, induction.
- Combinatorics: permutations, combinations, inclusion-exclusion, pigeonhole principle.
- Graph theory: Euler's formula ($V - E + F = 2$), trees, planarity, chromatic number.

## Cross-References

| Topic                           | Site        | Link                                                                                   |
| ------------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| Discrete Mathematics (Overview) | WyattsNotes | [View](/docs/university/computing/discrete-mathematics)                                |
| Theory of Computation           | WyattsNotes | [View](/docs/university/computing/theory-of-computation)                               |
| Abstract Algebra                | WyattsNotes | [View](/docs/university/mathematics/abstract-algebra)                                  |
| Number Theory                   | WyattsNotes | [View](/docs/university/mathematics/number-theory)                                     |
| Discrete Mathematics — MIT OCW  | MIT         | [View](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/) |

