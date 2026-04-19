---
title: Proof
description:
  IB Mathematics — direct proof, contradiction, induction, counterexamples, and proof by exhaustion.
slug: proof
---

## What Is a Proof?

A **mathematical proof** is a logical argument that establishes the truth of a statement beyond all
doubt. Unlike evidence in the empirical sciences, a mathematical proof is deductive: it proceeds
from axioms, definitions, and previously established results using rules of inference to reach an
irrefutable conclusion.

A statement that has been proved is called a **theorem**. A **lemma** is a subsidiary result proved
in service of a larger theorem. A **corollary** is a direct consequence of a theorem.

---

## Direct Proof

### Method

To prove $P \implies Q$ directly:

1. Assume $P$ is true.
2. Use definitions, axioms, and known results to derive $Q$.

This is the most straightforward proof technique and should be the first strategy attempted.

### Examples

**Theorem.** The sum of two even integers is even.

_Proof._ Let $a$ and $b$ be even integers. By definition, $a = 2m$ and $b = 2n$ for some
$m, n \in \mathbb{Z}$. Then:

$$a + b = 2m + 2n = 2(m + n)$$

Since $m + n \in \mathbb{Z}$, $a + b$ is even by definition.

**Theorem.** If $n$ is an odd integer, then $n^2$ is odd.

_Proof._ Let $n = 2k + 1$ for some $k \in \mathbb{Z}$. Then:

$$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$

Since $2k^2 + 2k \in \mathbb{Z}$, $n^2$ is odd.

**Theorem.** The product of two rational numbers is rational.

_Proof._ Let $a = \dfrac{p}{q}$ and $b = \dfrac{r}{s}$ where $p, q, r, s \in \mathbb{Z}$ and
$q, s \ne 0$. Then:

$$ab = \frac{p}{q} \cdot \frac{r}{s} = \frac{pr}{qs}$$

Since $pr, qs \in \mathbb{Z}$ and $qs \ne 0$, $ab$ is rational.

---

## Proof by Contradiction

### Method

To prove a statement $S$:

1. Assume $\neg S$ (the negation of $S$).
2. Derive a logical contradiction (something that violates an axiom, definition, or known fact).
3. Conclude that $\neg S$ is false, hence $S$ is true.

This rests on the law of excluded middle: for any proposition $S$, exactly one of $S$ and $\neg S$
is true.

### Examples

**Theorem.** $\sqrt{2}$ is irrational.

_Proof._ Suppose, for contradiction, that $\sqrt{2}$ is rational. Then $\sqrt{2} = \dfrac{a}{b}$
where $a, b \in \mathbb{Z}^+$, $\gcd(a, b) = 1$ (the fraction is in lowest terms).

Squaring: $2 = \dfrac{a^2}{b^2}$, so $a^2 = 2b^2$. This means $a^2$ is even, so $a$ is even (since
the square of an odd number is odd). Write $a = 2k$.

Substituting: $(2k)^2 = 2b^2 \implies 4k^2 = 2b^2 \implies b^2 = 2k^2$. So $b^2$ is even, and hence
$b$ is even.

Both $a$ and $b$ are even, contradicting $\gcd(a, b) = 1$.

**Theorem.** There are infinitely many primes.

_Proof._ Suppose, for contradiction, that there are only finitely many primes
$p_1, p_2, \ldots, p_n$. Consider:

$$N = p_1 p_2 \cdots p_n + 1$$

$N \gt 1$, so $N$ has a prime factor. But $N$ is not divisible by any $p_i$ (since $N$ leaves
remainder $1$ upon division by each $p_i$). This contradicts the assumption that the list
$p_1, \ldots, p_n$ contains all primes.

**Theorem.** $\log_2{3}$ is irrational.

_Proof._ Suppose $\log_2{3} = \dfrac{a}{b}$ with $a, b \in \mathbb{Z}^+$. Then $2^{a/b} = 3$, so
$2^a = 3^b$. The left side is even; the right side is odd. Contradiction.

---

## Proof by Contrapositive

### Method

To prove $P \implies Q$, prove the logically equivalent contrapositive $\neg Q \implies \neg P$:

1. Assume $\neg Q$.
2. Derive $\neg P$.

The statements $P \implies Q$ and $\neg Q \implies \neg P$ have identical truth tables.

### Example

**Theorem.** If $n^2$ is even, then $n$ is even.

_Proof._ We prove the contrapositive: if $n$ is odd, then $n^2$ is odd.

Let $n = 2k + 1$ for $k \in \mathbb{Z}$. Then $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is
odd. Therefore, if $n^2$ is even, $n$ must be even.

---

## Proof by Induction

### Method

To prove that a statement $P(n)$ holds for all integers $n \ge n_0$:

1. **Base case.** Verify $P(n_0)$ is true.
2. **Inductive hypothesis.** Assume $P(k)$ is true for some arbitrary $k \ge n_0$.
3. **Inductive step.** Using the hypothesis, prove that $P(k + 1)$ is true.
4. **Conclusion.** By the principle of mathematical induction, $P(n)$ is true for all $n \ge n_0$.

### Examples

**Theorem.** For all $n \in \mathbb{Z}^+$, $\displaystyle\sum_{i=1}^{n} i = \dfrac{n(n+1)}{2}$.

_Proof._ By induction on $n$.

**Base case** ($n = 1$): $\displaystyle\sum_{i=1}^{1} i = 1 = \dfrac{1 \cdot 2}{2}$. True.

**Inductive hypothesis:** Assume $\displaystyle\sum_{i=1}^{k} i = \dfrac{k(k+1)}{2}$ for some
$k \ge 1$.

**Inductive step:**

$$\sum_{i=1}^{k+1} i = \sum_{i=1}^{k} i + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{(k+1)(k+2)}{2}$$

This is precisely the formula with $n = k + 1$.

**Conclusion:** By induction, the formula holds for all $n \in \mathbb{Z}^+$.

**Theorem.** For all $n \in \mathbb{Z}^+$, $n^3 - n$ is divisible by $6$.

_Proof._ By induction on $n$.

**Base case** ($n = 1$): $1 - 1 = 0$, divisible by $6$.

**Inductive hypothesis:** $k^3 - k = 6m$ for some $m \in \mathbb{Z}$.

**Inductive step:**

$$(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1 = (k^3 - k) + 3k(k + 1)$$

By the hypothesis, $k^3 - k = 6m$. Also, $k(k + 1)$ is always even (product of consecutive
integers), so $3k(k + 1) = 6 \cdot \dfrac{k(k+1)}{2}$ is divisible by $6$. Hence the sum is
divisible by $6$.

**Theorem.** $2^n \gt n$ for all $n \in \mathbb{Z}^+$.

_Proof._ By induction.

**Base case** ($n = 1$): $2 \gt 1$. True.

**Inductive hypothesis:** $2^k \gt k$ for some $k \ge 1$.

**Inductive step:** $2^{k+1} = 2 \cdot 2^k \gt 2k \ge k + 1$ (since $k \ge 1$).

**Conclusion:** $2^n \gt n$ for all $n \ge 1$.

---

## Counterexamples

### Method

To **disprove** a universal statement of the form "for all $x \in S$, $P(x)$", find a single element
$x \in S$ for which $P(x)$ is false. This single counterexample is sufficient to refute the claim.

### Examples

**Claim.** "All prime numbers are odd."

_Counterexample._ $2$ is prime and even.

**Claim.** "If $f$ is continuous, then $f$ is differentiable."

_Counterexample._ $f(x) = |x|$ is continuous on $\mathbb{R}$ but not differentiable at $x = 0$.

**Claim.** "For all real numbers $x$, $x^2 \gt x$."

_Counterexample._ $x = 0.5$: $0.25 \not\gt 0.5$. Also $x = 0$: $0 \not\gt 0$, and $x = 1$:
$1 \not\gt 1$.

---

## Proof by Exhaustion

### Method

When a statement involves a finite number of cases, verify each case individually. This is a valid
but often tedious technique, applicable only when the case set is small.

### Example

**Theorem.** Every prime $p$ with $2 \lt p \lt 7$ can be expressed in the form $6k \pm 1$.

_Proof._ The primes in this range are $3$ and $5$.

- $p = 3$: $3 = 6(1) - 3 = 6(0) + 3$. Since $3 = 6(1) - 3$ does not match, we check: $3 = 6(0) + 3$.
  Actually, $3 = 6(1) - 3$. Better: $3$ is the sole exception as $3 \mid 6$ and $3 \mid 3$.

Let us reconsider. For primes $p \gt 3$: every integer $n$ is of the form $6k$, $6k \pm 1$,
$6k \pm 2$, or $6k + 3$. Numbers of the form $6k$, $6k \pm 2$, $6k + 3$ are divisible by $2$, $2$,
or $3$ respectively. So any prime $p \gt 3$ must be of the form $6k \pm 1$.

For the given range, $p = 5 = 6(1) - 1$. Verified.

---

## Common Pitfalls

1. **Circular reasoning.** Assuming the statement to be proved within the proof itself. Every step
   must follow from definitions, axioms, or previously established results.

2. **Affirming the consequent.** From $P \implies Q$ and $Q$, one cannot conclude $P$. This is a
   common logical error.

3. **Incomplete induction base case.** If a statement is claimed for all $n \ge 1$, the base case
   $n = 1$ must be verified. For multi-variable induction, every base case must be checked.

4. **Improper counterexample.** A counterexample must satisfy all the hypotheses of the statement.
   Disproving "if $x \gt 0$, then $x^2 \gt x$" requires $x \gt 0$ and $x^2 \le x$ simultaneously.

5. **Confusing contradiction and contrapositive.** Proof by contradiction assumes the negation of
   the _conclusion_ (or the entire statement) and derives any contradiction. Proof by contrapositive
   specifically proves $\neg Q \implies \neg P$. They are related but distinct techniques.

6. **Overlooking cases in exhaustion proofs.** If the case set is not genuinely exhaustive, the
   proof is invalid. List all cases explicitly.

7. **Using examples as proof.** Showing that a statement holds for several values does not
   constitute a proof for all values. "True for $n = 1, 2, 3$" is not a proof.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Prove by direct proof that the sum of three consecutive integers is divisible by $3$.

</details>

<details>
<summary>Problem 2</summary>

Prove by contradiction that $\sqrt{3}$ is irrational.

</details>

<details>
<summary>Problem 3</summary>

Prove by contrapositive: if $3n + 2$ is odd, then $n$ is odd.

</details>

<details>
<summary>Problem 4</summary>

Prove by induction that $\displaystyle\sum_{i=1}^{n} i^2 = \dfrac{n(n+1)(2n+1)}{6}$ for all
$n \in \mathbb{Z}^+$.

</details>

<details>
<summary>Problem 5</summary>

Prove by induction that $7^n - 1$ is divisible by $6$ for all $n \in \mathbb{Z}^+$.

</details>

<details>
<summary>Problem 6</summary>

Give a counterexample to disprove: "If $a^2 = b^2$, then $a = b$."

</details>

<details>
<summary>Problem 7</summary>

Prove that there is no largest rational number.

</details>

<details>
<summary>Problem 8</summary>

Prove by induction that $n! \gt 2^n$ for all integers $n \ge 4$.

</details>

<details>
<summary>Problem 9</summary>

Prove: the product of any three consecutive integers is divisible by $6$.

</details>

<details>
<summary>Problem 10</summary>

Prove that if $a$ and $b$ are rational and $a + b\sqrt{2} = 0$, then $a = b = 0$.

</details>

<details>
<summary>Answers to Selected Problems</summary>

**Problem 1:** Let the three consecutive integers be $n, n+1, n+2$. Their sum is
$n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$, which is divisible by $3$ since $n+1 \in \mathbb{Z}$.

**Problem 2:** Suppose $\sqrt{3} = a/b$ in lowest terms, $a, b \in \mathbb{Z}^+$. Then $a^2 = 3b^2$,
so $a^2$ is divisible by $3$, hence $a$ is divisible by $3$. Write $a = 3k$:
$9k^2 = 3b^2 \implies b^2 = 3k^2$, so $b$ is divisible by $3$. Both $a$ and $b$ divisible by $3$
contradicts lowest terms.

**Problem 3:** Contrapositive: if $n$ is even, then $3n + 2$ is even. If $n = 2k$, then
$3n + 2 = 6k + 2 = 2(3k + 1)$, which is even.

**Problem 4:** Base case ($n = 1$): $1 = 1(2)(3)/6 = 1$. True. Inductive hypothesis:
$\sum_{i=1}^{k} i^2 = k(k+1)(2k+1)/6$. Inductive step:
$\sum_{i=1}^{k+1} i^2 = k(k+1)(2k+1)/6 + (k+1)^2 = (k+1)[k(2k+1)/6 + (k+1)]$
$= (k+1)[(2k^2 + k + 6k + 6)/6] = (k+1)(2k^2 + 7k + 6)/6 = (k+1)(k+2)(2k+3)/6$. This is the formula
with $n = k + 1$.

**Problem 5:** Base case ($n = 1$): $7 - 1 = 6$, divisible by $6$. Inductive hypothesis:
$7^k - 1 = 6m$. Inductive step:
$7^{k+1} - 1 = 7 \cdot 7^k - 1 = 7(6m + 1) - 1 = 42m + 7 - 1 = 42m + 6 = 6(7m + 1)$.

**Problem 6:** Let $a = 3, b = -3$. Then $a^2 = 9 = b^2$ but $a \ne b$.

**Problem 7:** Suppose $q$ is the largest rational number. Then $q + 1$ is rational and
$q + 1 \gt q$, contradicting maximality.

**Problem 8:** Base case ($n = 4$): $4! = 24 \gt 16 = 2^4$. True. Inductive hypothesis: $k! \gt 2^k$
for some $k \ge 4$. Inductive step:
$(k+1)! = (k+1) \cdot k! \gt (k+1) \cdot 2^k \ge 5 \cdot 2^k \gt 2 \cdot 2^k = 2^{k+1}$. The
inequality holds since $k + 1 \ge 5 \gt 2$.

**Problem 10:** If $b \ne 0$, then $\sqrt{2} = -a/b$, which is rational (since $a, b$ are rational
and $b \ne 0$). But $\sqrt{2}$ is irrational (established earlier). Contradiction. Therefore
$b = 0$, and from $a + 0 = 0$ we get $a = 0$.

</details>
