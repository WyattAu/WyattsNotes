---
title: Proof
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: proof
---

## Board Coverage

| Board      | Paper      | Notes                                                         |
| ---------- | ---------- | ------------------------------------------------------------- |
| AQA        | Paper 1    | Proof by deduction, contradiction, exhaustion, counterexample |
| Edexcel    | P1, P2     | Similar; induction in P2                                      |
| OCR (A)    | Paper 1, 2 | Proof is integrated throughout                                |
| CIE (9709) | P1, P2, P3 | Various methods across papers                                 |

:::info
Proof questions appear on every paper. You must be able to identify the appropriate proof
method and execute it clearly, with every step justified.
:::

---

## 1. Proof by Deduction

### 1.1 Method

Proof by deduction starts from known axioms, definitions, or previously proved results, and uses
logical steps to arrive at the desired conclusion.

### 1.2 Example: the sum of an arithmetic series

**Theorem.** $S_n = \dfrac{n}{2}(a + l) = \dfrac{n}{2}[2a + (n-1)d]$.

**Proof.** Write out the sum forwards and backwards:

$$
\begin{aligned}
S_n &= a + (a+d) + (a+2d) + \cdots + (a+(n-1)d) \\
S_n &= (a+(n-1)d) + (a+(n-2)d) + \cdots + a
\end{aligned}
$$

Adding the two rows term by term, each pair sums to $2a + (n-1)d$, and there are $n$ such pairs:

$$2S_n = n[2a + (n-1)d] \implies S_n = \frac{n}{2}[2a + (n-1)d] \quad \blacksquare$$

### 1.3 Example: the difference of squares

**Theorem.** $a^2 - b^2 = (a-b)(a+b)$ for all $a, b \in \mathbb{R}$.

**Proof.** Expanding the right-hand side:

$$(a-b)(a+b) = a^2 + ab - ab - b^2 = a^2 - b^2 \quad \blacksquare$$

---

## 2. Proof by Contradiction

### 2.1 Method

To prove a statement $P$ by contradiction:

1. Assume $\neg P$ (the negation of $P$).
2. Derive a logical contradiction.
3. Conclude that $P$ must be true.

### 2.2 Infinitely many primes

**Theorem (Euclid).** There are infinitely many prime numbers.

**Proof.** Suppose, for contradiction, that there are only finitely many primes:
$p_1, p_2, \ldots, p_n$.

Consider $N = p_1 p_2 \cdots p_n + 1$.

- $N$ is not divisible by any $p_i$: if $p_i \mid N$, then $p_i \mid (N - p_1 \cdots p_n) = 1$,
  which is impossible since $p_i \geq 2$.

So $N$ is either prime itself or divisible by a prime not in our list. Either way, there exists a
prime not among $p_1, \ldots, p_n$. This contradicts our assumption that the list was complete.
$\blacksquare$

### 2.3 $\sqrt{2}$ is irrational

**Theorem.** $\sqrt{2}$ is irrational.

**Proof.** Suppose $\sqrt{2} = \dfrac{a}{b}$ where $a, b \in \mathbb{Z}$, $b \neq 0$, and
$\gcd(a,b) = 1$ (the fraction is in lowest terms).

$$2 = \frac{a^2}{b^2} \implies a^2 = 2b^2$$

So $a^2$ is even, which means $a$ is even (since the square of an odd number is odd). Write
$a = 2k$.

$$(2k)^2 = 2b^2 \implies 4k^2 = 2b^2 \implies b^2 = 2k^2$$

So $b^2$ is even, meaning $b$ is even. But then $\gcd(a,b) \geq 2$, contradicting $\gcd(a,b) = 1$.
$\blacksquare$

### 2.4 $\log_2 3$ is irrational

**Theorem.** $\log_2 3$ is irrational.

**Proof.** Suppose $\log_2 3 = \dfrac{a}{b}$ where $a, b \in \mathbb{Z}^+$ and $\gcd(a,b) = 1$.

$$2^{a/b} = 3 \implies 2^a = 3^b$$

Since $2^a$ is even and $3^b$ is odd, this is a contradiction. $\blacksquare$

---

## 3. Proof by Exhaustion

### 3.1 Method

When the number of cases is finite and small enough, prove each case individually.

### 3.2 Example: primes less than 10

**Claim.** All primes less than 10 are odd.

**Proof.** The primes less than 10 are: 2, 3, 5, 7.

- 2 is even (the only even prime).
- 3, 5, 7 are odd.

So not all primes less than 10 are odd. The claim is **false**. The counterexample is 2.

### 3.3 Example: sum of two squares

**Claim.** For all integers $n$ with $1 \leq n \leq 5$, $n^2 + (n+1)^2$ is odd.

**Proof.** Check each case:

| $n$ | $n^2 + (n+1)^2$ | Odd? |
| --- | --------------- | ---- |
| 1   | 1 + 4 = 5       | Yes  |
| 2   | 4 + 9 = 13      | Yes  |
| 3   | 9 + 16 = 25     | Yes  |
| 4   | 16 + 25 = 41    | Yes  |
| 5   | 25 + 36 = 61    | Yes  |

All five cases confirmed. $\blacksquare$

:::warning
Proof by exhaustion is only valid when the number of cases is genuinely finite and
manageable. You cannot use exhaustion for "all integers" or "all real numbers."
:::

---

## 4. Disproof by Counterexample

### 4.1 Method

To disprove a universal statement, it suffices to find **one** example where the statement fails.

### 4.2 Examples

**Claim.** "For all real $x$, $x^2 \gt{} x$." Counterexample: $x = 0.5$, since $0.25 \not> 0.5$.

**Claim.** "All quadratics have two distinct real roots." Counterexample: $x^2 + 1 = 0$ has no real
roots (discriminant $= -4 \lt{} 0$).

**Claim.** "If $n$ is prime, then $2^n - 1$ is prime." Counterexample: $n = 11$ is prime, but
$2^{11}-1 = 2047 = 23 \times 89$.

---

## 5. Proof by Mathematical Induction

### 5.1 Method

To prove a statement $P(n)$ for all integers $n \geq n_0$:

1. **Base case:** Prove $P(n_0)$ is true.
2. **Inductive hypothesis:** Assume $P(k)$ is true for some $k \geq n_0$.
3. **Inductive step:** Using the hypothesis, prove $P(k+1)$ is true.
4. **Conclusion:** By the principle of mathematical induction, $P(n)$ is true for all $n \geq n_0$.

:::info
The principle of mathematical induction is equivalent to the well-ordering principle: every
non-empty set of positive integers has a least element. If $P(n_0)$ is true but some $P(m)$ with
$m \gt{} n_0$ is false, then the set $\{m : P(m) \text{ is false}\}$ has a least element,
contradicting the inductive step.
:::

### 5.2 Sum of the first $n$ integers

**Theorem.** $\displaystyle\sum_{r=1}^{n} r = \frac{n(n+1)}{2}$ for all $n \in \mathbb{N}$.

**Proof.**

_Base case ($n=1$):_ $\displaystyle\sum_{r=1}^{1} r = 1 = \frac{1 \times 2}{2}$. ✓

_Inductive hypothesis:_ Assume $\displaystyle\sum_{r=1}^{k} r = \frac{k(k+1)}{2}$ for some
$k \geq 1$.

_Inductive step:_

$$
\begin{aligned}
\sum_{r=1}^{k+1} r &= \sum_{r=1}^{k} r + (k+1) \\
&= \frac{k(k+1)}{2} + (k+1) \quad \text{(by hypothesis)} \\
&= \frac{k(k+1) + 2(k+1)}{2} \\
&= \frac{(k+1)(k+2)}{2}
\end{aligned}
$$

This is the required formula with $n = k+1$. ✓

_Conclusion:_ By induction, the formula holds for all $n \in \mathbb{N}$. $\blacksquare$

### 5.3 Sum of squares

**Theorem.** $\displaystyle\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$.

**Proof.**

_Base case ($n=1$):_ $1 = \dfrac{1 \times 2 \times 3}{6} = 1$. ✓

_Inductive hypothesis:_ Assume $\displaystyle\sum_{r=1}^{k} r^2 = \frac{k(k+1)(2k+1)}{6}$.

_Inductive step:_

$$
\begin{aligned}
\sum_{r=1}^{k+1} r^2 &= \frac{k(k+1)(2k+1)}{6} + (k+1)^2 \\
&= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6} \\
&= \frac{(k+1)[k(2k+1) + 6(k+1)]}{6} \\
&= \frac{(k+1)[2k^2+k+6k+6]}{6} \\
&= \frac{(k+1)(2k^2+7k+6)}{6} \\
&= \frac{(k+1)(k+2)(2k+3)}{6}
\end{aligned}
$$

This is the formula with $n = k+1$. ✓ $\blacksquare$

### 5.4 Divisibility

**Theorem.** $3^n - 1$ is divisible by 2 for all $n \in \mathbb{N}$.

**Proof.**

_Base case ($n=1$):_ $3^1 - 1 = 2$, which is divisible by 2. ✓

_Hypothesis:_ Assume $3^k - 1 = 2m$ for some integer $m$.

_Step:_ $3^{k+1} - 1 = 3 \cdot 3^k - 1 = 3(2m+1) - 1 = 6m + 3 - 1 = 6m + 2 = 2(3m+1)$.

This is divisible by 2. ✓ $\blacksquare$

**Theorem.** $4^n - 1$ is divisible by 3 for all $n \in \mathbb{N}$.

**Proof.**

_Base case ($n=1$):_ $4-1 = 3$, divisible by 3. ✓

_Hypothesis:_ $4^k - 1 = 3m$.

_Step:_ $4^{k+1} - 1 = 4 \cdot 4^k - 1 = 4(3m+1)-1 = 12m+4-1 = 12m+3 = 3(4m+1)$. ✓ $\blacksquare$

### 5.5 Inequalities

**Theorem.** $2^n \gt{} n$ for all $n \in \mathbb{N}$.

**Proof.**

_Base case ($n=1$):_ $2 \gt{} 1$. ✓

_Hypothesis:_ $2^k \gt{} k$.

_Step:_ $2^{k+1} = 2 \cdot 2^k \gt{} 2k \geq k + 1$ (since $k \geq 1$ implies $k \geq 1$).

So $2^{k+1} \gt{} k + 1$. ✓ $\blacksquare$

**Theorem.** $n! \gt{} 2^n$ for all $n \geq 4$.

**Proof.**

_Base case ($n=4$):_ $24 \gt{} 16$. ✓

_Hypothesis:_ $k! \gt{} 2^k$ for $k \geq 4$.

_Step:_
$(k+1)! = (k+1) \cdot k! \gt{} (k+1) \cdot 2^k \geq 5 \cdot 2^k \gt{} 2 \cdot 2^k = 2^{k+1}$.

Since $k \geq 4$, we have $k+1 \geq 5 \gt{} 2$. ✓ $\blacksquare$

---

## 6. Proof Structures and Logic

### 6.1 Necessary and sufficient conditions

- "$P$ is **necessary** for $Q$" means $Q \implies P$.
- "$P$ is **sufficient** for $Q$" means $P \implies Q$.
- "$P$ **if and only if** $Q$" (written $P \iff Q$) means both $P \implies Q$ and $Q \implies P$.

### 6.2 Converse and contrapositive

- The **converse** of $P \implies Q$ is $Q \implies P$ (not logically equivalent).
- The **contrapositive** of $P \implies Q$ is $\neg Q \implies \neg P$ (logically equivalent).

---

## Problem Set

<details>
<summary>Problem 1</summary>
Prove that the product of two odd numbers is odd.
</details>

<details>
<summary>Solution 1</summary>
Let the two odd numbers be $2m+1$ and $2n+1$ where $m, n \in \mathbb{Z}$.

$(2m+1)(2n+1) = 4mn + 2m + 2n + 1 = 2(2mn+m+n) + 1$.

This is of the form $2k+1$ (with $k = 2mn+m+n$), hence odd. $\blacksquare$

**If you get this wrong, revise:** [Proof by Deduction](#1-proof-by-deduction) — Section 1.

</details>

<details>
<summary>Problem 2</summary>
Prove by contradiction that there is no greatest even integer.
</details>

<details>
<summary>Solution 2</summary>
Suppose $N$ is the greatest even integer. Then $N = 2k$ for some $k \in \mathbb{Z}$.

But $N + 2 = 2k + 2 = 2(k+1)$ is also even, and $N+2 \gt{} N$. This contradicts $N$ being the
greatest even integer. $\blacksquare$

**If you get this wrong, revise:** [Proof by Contradiction](#2-proof-by-contradiction) — Section 2.

</details>

<details>
<summary>Problem 3</summary>
Prove by induction that $\displaystyle\sum_{r=1}^{n} r^3 = \left[\frac{n(n+1)}{2}\right]^2$ for all $n \in \mathbb{N}$.
</details>

<details>
<summary>Solution 3</summary>
*Base case ($n=1$):* $1^3 = 1 = \left[\dfrac{1 \cdot 2}{2}\right]^2 = 1$. ✓

_Hypothesis:_ $\displaystyle\sum_{r=1}^{k} r^3 = \left[\frac{k(k+1)}{2}\right]^2$.

_Step:_

$$
\begin{aligned}
\sum_{r=1}^{k+1} r^3 &= \left[\frac{k(k+1)}{2}\right]^2 + (k+1)^3 \\
&= \frac{k^2(k+1)^2}{4} + (k+1)^3 \\
&= \frac{(k+1)^2[k^2 + 4(k+1)]}{4} \\
&= \frac{(k+1)^2(k^2+4k+4)}{4} \\
&= \frac{(k+1)^2(k+2)^2}{4} \\
&= \left[\frac{(k+1)(k+2)}{2}\right]^2 \quad \blacksquare
\end{aligned}
$$

**If you get this wrong, revise:**
[Proof by Mathematical Induction](#5-proof-by-mathematical-induction) — Section 5.

</details>

<details>
<summary>Problem 4</summary>
Prove that $\sqrt{3}$ is irrational.
</details>

<details>
<summary>Solution 4</summary>
Suppose $\sqrt{3} = a/b$ in lowest terms with $a, b \in \mathbb{Z}^+$, $\gcd(a,b) = 1$.

$3 = a^2/b^2 \implies a^2 = 3b^2$, so $3 \mid a^2$, hence $3 \mid a$. Write $a = 3k$.

$9k^2 = 3b^2 \implies b^2 = 3k^2$, so $3 \mid b^2$, hence $3 \mid b$.

But $\gcd(a,b) \geq 3$, contradicting $\gcd(a,b) = 1$. $\blacksquare$

**If you get this wrong, revise:** [$\sqrt{2}$ is irrational](#23-sqrt2-is-irrational) — Section
2.3.

</details>

<details>
<summary>Problem 5</summary>
Disprove by counterexample: "For all real $x$, $\sin(2x) = 2\sin x$."
</details>

<details>
<summary>Solution 5</summary>
Let $x = \pi/4$. $\sin(\pi/2) = 1$ but $2\sin(\pi/4) = 2 \times \dfrac{\sqrt{2}}{2} = \sqrt{2} \neq 1$.

(The correct identity is $\sin(2x) = 2\sin x\cos x$.)

**If you get this wrong, revise:** [Disproof by Counterexample](#4-disproof-by-counterexample) —
Section 4.

</details>

<details>
<summary>Problem 6</summary>
Prove by induction that $5^n + 3$ is divisible by 4 for all $n \geq 1$.
</details>

<details>
<summary>Solution 6</summary>
*Base case ($n=1$):* $5 + 3 = 8$, divisible by 4. ✓

_Hypothesis:_ $5^k + 3 = 4m$.

_Step:_ $5^{k+1} + 3 = 5 \cdot 5^k + 3 = 5(4m-3) + 3 = 20m - 15 + 3 = 20m - 12 = 4(5m-3)$.

Divisible by 4. ✓ $\blacksquare$

**If you get this wrong, revise:** [Divisibility](#54-divisibility) — Section 5.4.

</details>

<details>
<summary>Problem 7</summary>
Prove by contradiction that $\log_3 5$ is irrational.
</details>

<details>
<summary>Solution 7</summary>
Suppose $\log_3 5 = a/b$ where $a, b \in \mathbb{Z}^+$, $\gcd(a,b)=1$.

$3^{a/b} = 5 \implies 3^a = 5^b$.

$3^a$ is odd and $5^b$ is odd, so no immediate parity contradiction. But: $3^a$ is divisible only by
3, while $5^b$ is divisible only by 5. A positive integer cannot have prime factorisation using only
3s and also only 5s (by the Fundamental Theorem of Arithmetic, prime factorisation is unique).
Contradiction. $\blacksquare$

**If you get this wrong, revise:** [$\log_2 3$ is irrational](#24-log_2-3-is-irrational) — Section
2.4.

</details>

<details>
<summary>Problem 8</summary>
Use proof by exhaustion to show that all integers $n$ with $1 \leq n \leq 6$ satisfy: if $n$ is prime, then $n^2 - 1$ is divisible by 24 or $n = 2$ or $n = 3$.
</details>

<details>
<summary>Solution 8</summary>
Primes in range: 2, 3, 5.

$n=2$: $n^2-1 = 3$, not divisible by 24 (special case $n=2$). $n=3$: $n^2-1 = 8$, not divisible by
24 (special case $n=3$). $n=5$: $n^2-1 = 24$, divisible by 24. ✓

So the claim holds: primes 2 and 3 are exceptions, and $5^2 - 1 = 24$ is divisible by 24.

**If you get this wrong, revise:** [Proof by Exhaustion](#3-proof-by-exhaustion) — Section 3.

</details>

<details>
<summary>Problem 9</summary>
Prove by induction that $n^3 - n$ is divisible by 6 for all $n \geq 1$.
</details>

<details>
<summary>Solution 9</summary>
*Base case ($n=1$):* $1-1=0$, divisible by 6. ✓

_Hypothesis:_ $k^3 - k = 6m$.

_Step:_ $(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1 = (k^3 - k) + 3k^2 + 3k = 6m + 3k(k+1)$.

Since $k(k+1)$ is always even (product of consecutive integers), $3k(k+1)$ is divisible by 6. So
$(k+1)^3 - (k+1) = 6m + 6n = 6(m+n)$. ✓ $\blacksquare$

**If you get this wrong, revise:** [Divisibility](#54-divisibility) — Section 5.4.

</details>

<details>
<summary>Problem 10</summary>
Prove that if $a^2 + b^2 = c^2$ for integers $a, b, c$, then at least one of $a, b$ is even.
</details>

<details>
<summary>Solution 10</summary>
Proof by contradiction. Suppose both $a$ and $b$ are odd. Write $a = 2m+1$, $b = 2n+1$.

$$a^2 + b^2 = (2m+1)^2 + (2n+1)^2 = 4m^2+4m+1 + 4n^2+4n+1 = 2(2m^2+2m+2n^2+2n+1)$$

This is even but not divisible by 4. So $c^2$ is even but not divisible by 4, meaning $c$ is even
(if $c = 2p$, $c^2 = 4p^2$, which IS divisible by 4). Contradiction. $\blacksquare$

**If you get this wrong, revise:** [Proof by Contradiction](#2-proof-by-contradiction) — Section 2.

</details>

<details>
<summary>Problem 11</summary>
Prove by induction that $\displaystyle\sum_{r=1}^{n}\frac{1}{r(r+1)} = \frac{n}{n+1}$.
</details>

<details>
<summary>Solution 11</summary>
*Base case ($n=1$):* $\dfrac{1}{1 \times 2} = \dfrac{1}{2} = \dfrac{1}{1+1}$. ✓

_Hypothesis:_ $\displaystyle\sum_{r=1}^{k}\frac{1}{r(r+1)} = \frac{k}{k+1}$.

_Step:_

$$
\begin{aligned}
\sum_{r=1}^{k+1}\frac{1}{r(r+1)} &= \frac{k}{k+1} + \frac{1}{(k+1)(k+2)} \\
&= \frac{k(k+2)+1}{(k+1)(k+2)} \\
&= \frac{k^2+2k+1}{(k+1)(k+2)} \\
&= \frac{(k+1)^2}{(k+1)(k+2)} = \frac{k+1}{k+2} \quad \blacksquare
\end{aligned}
$$

**If you get this wrong, revise:**
[Proof by Mathematical Induction](#5-proof-by-mathematical-induction) — Section 5.

</details>

:::

:::

:::
