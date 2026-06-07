---
title: Proof Techniques
tags:
  - Computing
  - University
---

### 3.1 Direct Proof

To prove $P \implies Q$: assume $P$Derive $Q$ by a chain of logical deductions.

**Example.** Prove: if $n$ is odd, then $n^2$ is odd.

_Proof._ Let $n = 2k + 1$. Then $n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$Which is odd.
$\blacksquare$

**Worked Example.** Prove: the sum of any two rational numbers is rational.

<details>
<summary>Solution</summary>

Let $a = p/q$ and $b = r/s$ where $p, q, r, s \in \mathbb{{'}Z{}'}$ and $q, s \neq 0$. Then

$$a + b = \frac{p}{q} + \frac{r}{s} = \frac{ps + rq}{qs}$$

Since $ps + rq \in \mathbb{{'}Z{}'}$ and $qs \in \mathbb{{'}Z{}'} \setminus \\{0\\}$The sum $a + b$
is rational. $\blacksquare$

</details>

### 3.2 Proof by Contrapositive

To prove $P \implies Q$: prove $\neg Q \implies \neg P$ instead.

**Example.** Prove: if $n^2$ is even, then $n$ is even.

_Proof._ Contrapositive: if $n$ is odd, then $n^2$ is odd. This was proved above. $\blacksquare$

**Worked Example.** Prove: if $3n + 2$ is odd, then $n$ is odd.

<details>
<summary>Solution</summary>

Contrapositive: if $n$ is even, then $3n + 2$ is even.

Let $n = 2k$. Then $3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1)$Which is even. $\blacksquare$

</details>

### 3.3 Proof by Contradiction

To prove $P$: assume $\neg P$ and derive a contradiction.

**Example (Euclid).** There are infinitely many primes.

_Proof._ Suppose there are finitely many primes $p_1, p_2, \ldots, p_n$. Consider
$N = p_1 p_2 \cdots p_n + 1$. $N$ is not divisible by any $p_i$ (it leaves remainder 1). So $N$ is
either prime itself or has a prime Factor not in the list. Either way, the list was incomplete.
Contradiction. $\blacksquare$

**Worked Example.** Prove: $\sqrt{2}$ is irrational.

<details>
<summary>Solution</summary>

Suppose $\sqrt{2} = p/q$ in lowest terms, with $p, q \in \mathbb{{'}Z{}'}^+$ and $\gcd(p, q) = 1$.
Then $2q^2 = p^2$So $p^2$ is even, hence $p$ is even. Write $p = 2r$. Then $2q^2 = 4r^2$So
$q^2 = 2r^2$Hence $q$ is even. But then both $p$ and $q$ are even, Contradicting $\gcd(p, q) = 1$.
$\blacksquare$

</details>

### 3.4 Mathematical Induction

**Principle of Mathematical Induction.** To prove $P(n)$ for all $n \geq n_0$:

1. **Base case:** Prove $P(n_0)$.
2. **Inductive step:** Prove $P(k) \implies P(k+1)$ for all $k \geq n_0$.

**Strong Induction.** The inductive step assumes $P(n_0), P(n_0+1), \ldots, P(k)$ to prove $P(k+1)$.

**Example.** Prove: $\sum_{i=1}^{n} i = n(n+1)/2$ for all $n \geq 1$.

_Proof._ Base case: $n = 1$: $1 = 1 \cdot 2 / 2$. True.

Inductive step: Assume $\sum_{i=1}^{k} i = k(k+1)/2$. Then

$$\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$

$\blacksquare$

**Worked Example.** Prove by strong induction: every integer $n \geq 2$ can be factored into primes.

<details>
<summary>Solution</summary>

_Base case:_ $n = 2$ is prime, so it is a (trivial) product of primes.

_Inductive step:_ Assume every integer in $\\{2, 3, \ldots, k\\}$ factors into primes, where
$k \geq 2$. Consider $n = k + 1$.

If $k + 1$ is prime, it is already a product of primes (itself).

If $k + 1$ is composite, then $k + 1 = ab$ where $2 \leq a \leq b \leq k$. By the strong induction
Hypothesis, both $a$ and $b$ factor into primes. Hence $k + 1 = ab$ also factors into primes.

$\blacksquare$

</details>

**Worked Example.** Prove: $\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$ for all $n \geq 0$.

<details>
<summary>Solution</summary>

_Base case:_ $n = 0$: $2^0 = 1 = 2^{0+1} - 1$. ✓

_Inductive step:_ Assume $\sum_{i=0}^{k} 2^i = 2^{k+1} - 1$. Then

$$\sum_{i=0}^{k+1} 2^i = 2^{k+1} - 1 + 2^{k+1} = 2 \cdot 2^{k+1} - 1 = 2^{k+2} - 1$$

$\blacksquare$

</details>

### 3.5 Structural Induction

For recursively defined structures (lists, trees, formulas), prove a property by induction on the
Structure:

1. Base cases (empty list, leaf node, atomic formula).
2. Inductive cases (cons, node with children, compound formula).

### 3.6 The Well-Ordering Principle

**Well-Ordering Principle (WOP).** Every nonempty set of nonnegative integers has a least element.

**Theorem 3.1.** The Well-Ordering Principle is equivalent to the Principle of Mathematical
Induction.

_Proof (WOP implies induction)._ Let $P(n)$ be a property with $P(0)$ true and
$P(k) \implies P(k+1)$. Suppose for contradiction that $P(n)$ fails for some $n \geq 0$. Let
$S = \\{n \geq 0 : P(n)\; \mathrm{is\; false{}\\}$. By assumption $S \neq \emptyset$So by WOP, $S$
has a least Element $m$. Since $P(0)$ is true, $m \geq 1$. Then $P(m - 1)$ is true (by minimality of
$m$), And $P(m - 1) \implies P(m)$ by the inductive hypothesis, so $P(m)$ is true, contradicting
$m \in S$. Therefore $S = \emptyset$ and $P(n)$ holds for all $n \geq 0$.

_Proof (induction implies WOP)._ Let $S \subseteq \mathbb{{'}N{}'}$ be nonempty. We prove by
induction that If $S \cap \\{0, 1, \ldots, n\\} \neq \emptyset$Then $S$ has a least element. For
$n = 0$, $S$ Contains $0$Which is the least element. Assume the claim for $n = k$. If
$0 \in S \cap \\{0, \ldots, k+1\\}$ Then $0$ is the least element. Otherwise
$S \cap \\{0, \ldots, k+1\\} = S \cap \\{1, \ldots, k+1\\}$And by The induction hypothesis applied
to the shifted set, a least element exists. $\blacksquare$

**Worked Example.** Use the WOP to prove that every $n \geq 1$ can be written as a sum of distinct
Powers of 2.

<details>
<summary>Solution</summary>

Let $S$ be the set of positive integers that _cannot_ be written as a sum of distinct powers of 2.
Suppose $S \neq \emptyset$. By WOP, $S$ has a least element $m$.

Let $2^k$ be the largest power of 2 not exceeding $m$ (so $2^k \leq m \lt 2^{k+1}$). Then
$m - 2^k \geq 0$ and $m - 2^k \lt 2^k$. If $m - 2^k = 0$Then $m = 2^k$ is a single power of 2,
Contradicting $m \in S$. If $m - 2^k \gt 0$Then $m - 2^k \lt m$So $m - 2^k \notin S$ (by minimality
Of $m$). Hence $m - 2^k$ is a sum of distinct powers of 2, all of which are $\lt 2^k$. Adding $2^k$
Gives $m$ as a sum of distinct powers of 2, contradicting $m \in S$. Therefore $S = \emptyset$.
$\blacksquare$

</details>

