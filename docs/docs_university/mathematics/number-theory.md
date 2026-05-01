---
title: Number Theory
description:
  "University-level notes on Number Theory: 1. Divisibility; 1.1 The Division Algorithm; 1.2 Divisibility; 1.3 Worked Examples of the Division Algorithm."
date: 2026-04-24T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: number-theory
---

## 1. Divisibility

### 1.1 The Division Algorithm

**Theorem 1.1 (Division Algorithm).** For any integers $a$ and $b$ with $b > 0$, there exist unique
integers $q$ and $r$ such that $a = bq + r$ with $0 \leq r \lt{} b$.

_Proof._ Consider the set $S = \\{a - bk : k \in \mathbb{Z},\ a - bk \geq 0\\}$. This set is non-empty
(by the Archimedean property, choosing $k$ sufficiently negative). By the well-ordering principle,
$S$ has a least element $r = a - bq$. If $r \geq b$, then $r - b = a - (q+1)b \in S$ with
$r - b \lt{} r$, contradicting minimality. So $0 \leq r \lt{} b$. For uniqueness, if
$a = bq_1 + r_1 = bq_2 + r_2$, then $b(q_1 - q_2) = r_2 - r_1$. Since $|r_2 - r_1| \lt{} b$, we must
have $q_1 = q_2$ and $r_1 = r_2$. $\blacksquare$

### 1.2 Divisibility

We write $d \mid a$ (read "$d$ divides $a$") if there exists $k \in \mathbb{Z}$ with $a = dk$.

**Proposition 1.2.** For all $a, b, c \in \mathbb{Z}$:

1. If $a \mid b$ and $b \mid c$, then $a \mid c$.
2. If $a \mid b$ and $a \mid c$, then $a \mid (mb + nc)$ for all $m, n \in \mathbb{Z}$.
3. If $a \mid b$ and $b \neq 0$, then $|a| \leq |b|$.
4. $a \mid 0$ for all $a$, but $0 \mid a$ only when $a = 0$.

_Proof._ (1) $a \mid b$ means $b = ak$ and $b \mid c$ means $c = b\ell = ak\ell$, so $a \mid c$.
(2) $a \mid b$ means $b = ak$ and $a \mid c$ means $c = a\ell$, so $mb + nc = a(mk + n\ell)$.
(3) $a \mid b$ means $b = ak$, so $|b| = |a| \cdot |k| \geq |a|$.
(4) $0 = a \cdot 0$, so $a \mid 0$. If $0 \mid a$, then $a = 0 \cdot k = 0$. $\blacksquare$

### 1.3 Worked Examples of the Division Algorithm

**Problem.** Apply the division algorithm to write $-237 = 14q + r$ with $0 \leq r \lt{} 14$.

<details>
<summary>Solution</summary>

We compute $237 \div 14 = 16.93\ldots$, so $14 \cdot 16 = 224$ and $14 \cdot 17 = 238 > 237$.
Thus for positive $237$: $q = 16$, $r = 13$, giving $237 = 14 \cdot 16 + 13$.

For $a = -237$: we need $q$ such that $r = -237 - 14q$ satisfies $0 \leq r \lt{} 14$.
$-237 = 14(-17) + 1$: check $14 \cdot (-17) = -238$, and $-238 + 1 = -237$. Here $q = -17$ and
$r = 1$ with $0 \leq 1 \lt{} 14$. $\blacksquare$

</details>

**Problem.** Find all integers $n$ such that $n \equiv 3 \pmod{7}$ and $n \equiv 2 \pmod{5}$.

<details>
<summary>Solution</summary>

From $n \equiv 3 \pmod{7}$, we have $n = 7k + 3$ for some $k \in \mathbb{Z}$.
Substituting into $n \equiv 2 \pmod{5}$: $7k + 3 \equiv 2 \pmod{5}$, so
$7k \equiv -1 \equiv 4 \pmod{5}$, giving $2k \equiv 4 \pmod{5}$, hence $k \equiv 2 \pmod{5}$.

So $k = 5m + 2$, and $n = 7(5m + 2) + 3 = 35m + 17$. The solutions are
$n \equiv 17 \pmod{35}$. $\blacksquare$

</details>

### 1.4 Uniqueness of the Greatest Common Divisor

**Theorem 1.3.** Let $a, b \in \mathbb{Z}$, not both zero. The greatest common divisor of $a$ and $b$
exists and is unique.

_Proof._ The set $D = \\{d \in \mathbb{N} : d \mid a \mathrm{\ and\ } d \mid b\\}"$ is non-empty since
$|a| \in D$ (if $a \neq 0$) or $|b| \in D$ (if $b \neq 0$). By the well-ordering principle, $D$ has
a least element $g$. We claim $g = \gcd(a, b)$. By definition $g \mid a$ and $g \mid b$. If $c \mid a$
and $c \mid b$, then $c \leq |c| \leq g$ (since $g$ is the least positive common divisor). For
uniqueness: if $g_1$ and $g_2$ are both greatest common divisors, then $g_1 \mid g_2$ and $g_2 \mid g_1$,
so $g_1 = g_2$ (since both are positive). $\blacksquare$

### 1.5 Least Common Multiple

**Definition.** The **least common multiple** of positive integers $a$ and $b$, written
$\mathrm{lcm}(a, b)$, is the smallest positive integer $m$ such that $a \mid m$ and $b \mid m$.

**Theorem 1.4 (GCD--LCM Identity).** For all positive integers $a$ and $b$,

$$\gcd(a, b) \cdot \mathrm{lcm}(a, b) = ab$$

_Proof._ Write $a = \prod_{i=1}^k p_i^{\alpha_i}$ and $b = \prod_{i=1}^k p_i^{\beta_i}$ where
$\alpha_i, \beta_i \geq 0$. Then $\gcd(a, b) = \prod_{i=1}^k p_i^{\min(\alpha_i, \beta_i)}$ and
$\mathrm{lcm}(a, b) = \prod_{i=1}^k p_i^{\max(\alpha_i, \beta_i)}$. Since
$\min(\alpha_i, \beta_i) + \max(\alpha_i, \beta_i) = \alpha_i + \beta_i$ for each $i$, we have

$$\gcd(a,b) \cdot \mathrm{lcm}(a,b) = \prod_{i=1}^k p_i^{\alpha_i + \beta_i} = ab \qquad \blacksquare$$

**Proposition 1.5.** For all positive integers $a, b$:

1. $\mathrm{lcm}(a, b) = ab / \gcd(a, b)$.
2. $\gcd(a, \mathrm{lcm}(b, c)) = \mathrm{lcm}(\gcd(a, b), \gcd(a, c))$.

### 1.6 Worked Example: LCM Computation

**Problem.** Compute $\mathrm{lcm}(252, 105)$ and verify the gcd--lcm identity.

<details>
<summary>Solution</summary>

First, $\gcd(252, 105)$. Using the Euclidean algorithm:
$252 = 2 \cdot 105 + 42$, $105 = 2 \cdot 42 + 21$, $42 = 2 \cdot 21 + 0$. So $\gcd(252, 105) = 21$.

By the identity: $\mathrm{lcm}(252, 105) = 252 \cdot 105 / 21 = 252 \cdot 5 = 1260$.

Verification: $1260 / 252 = 5$ and $1260 / 105 = 12$, both integers. $\blacksquare$

</details>

## 2. The Greatest Common Divisor

### 2.1 Definition and Existence

**Definition.** The **greatest common divisor** of $a$ and $b$ (not both zero) is the largest
positive integer $d$ such that $d \mid a$ and $d \mid b$. We write $d = \gcd(a, b)$.

**Theorem 2.1 (Bézout's Identity).** For any $a, b \in \mathbb{Z}$ not both zero, there exist
$x, y \in \mathbb{Z}$ such that

$$\gcd(a, b) = ax + by$$

_Proof._ Let $S = \\{ax + by : x, y \in \mathbb{Z},\ ax + by > 0\\}$. By the well-ordering principle,
$S$ has a least element $d = ax_0 + by_0$. We show $d = \gcd(a, b)$. First, $d \mid a$: write
$a = dq + r$ with $0 \leq r \lt{} d$. Then
$r = a - dq = a - (ax_0 + by_0)q = a(1 - x_0 q) + b(-y_0 q)$. If $r > 0$, then $r \in S$ with
$r \lt{} d$, contradicting minimality. So $r = 0$, giving $d \mid a$. Similarly $d \mid b$. For any
common divisor $c$ of $a$ and $b$: $c \mid (ax_0 + by_0) = d$, so $c \leq d$. $\blacksquare$

### 2.2 The Euclidean Algorithm

To compute $\gcd(a, b)$ with $a \geq b > 0$:

$$a = bq_1 + r_1, \quad 0 \lt{} r_1 \lt{} b$$ $$b = r_1 q_2 + r_2, \quad 0 \lt{} r_2 \lt{} r_1$$
$$\vdots$$ $$r_{n-1} = r_n q_{n+1} + 0$$

Then $\gcd(a, b) = r_n$. The algorithm terminates because $b > r_1 > r_2 > \cdots \geq 0$.

**Proposition 2.2.** $\gcd(a, b) = \gcd(b, r)$ where $r = a \bmod b$.

_Proof._ Write $a = bq + r$. If $d \mid a$ and $d \mid b$, then $d \mid (a - bq) = r$.
Conversely, if $d \mid b$ and $d \mid r$, then $d \mid (bq + r) = a$. So the set of common
divisors of $(a, b)$ equals the set of common divisors of $(b, r)$, hence their greatest
common divisors are equal. $\blacksquare$

### 2.3 The Extended Euclidean Algorithm

The extended Euclidean algorithm computes $\gcd(a, b)$ **and** finds integers $x, y$ such that
$ax + by = \gcd(a, b)$ simultaneously by back-substituting through the Euclidean algorithm steps.

**Problem.** Find $\gcd(252, 105)$ and express it as a linear combination of $252$ and $105$.

<details>
<summary>Solution</summary>

We perform the Euclidean algorithm and back-substitute:

$252 = 2 \cdot 105 + 42 \quad \Rightarrow \quad 42 = 252 - 2 \cdot 105$

$105 = 2 \cdot 42 + 21 \quad \Rightarrow \quad 21 = 105 - 2 \cdot 42$

$42 = 2 \cdot 21 + 0$

So $\gcd(252, 105) = 21$. Back-substituting:

$21 = 105 - 2(252 - 2 \cdot 105) = 105 - 2 \cdot 252 + 4 \cdot 105 = 5 \cdot 105 - 2 \cdot 252$

Verification: $5 \cdot 105 - 2 \cdot 252 = 525 - 504 = 21$. $\blacksquare$

</details>

**Problem.** Find integers $x, y$ such that $1073x + 313y = \gcd(1073, 313)$.

<details>
<summary>Solution</summary>

Euclidean algorithm:

$1073 = 3 \cdot 313 + 134$

$313 = 2 \cdot 134 + 45$

$134 = 2 \cdot 45 + 44$

$45 = 1 \cdot 44 + 1$

$44 = 44 \cdot 1 + 0$

So $\gcd(1073, 313) = 1$. Back-substituting from $1 = 45 - 44$:

$44 = 134 - 2 \cdot 45$, so $1 = 45 - (134 - 2 \cdot 45) = 3 \cdot 45 - 134$

$45 = 313 - 2 \cdot 134$, so $1 = 3(313 - 2 \cdot 134) - 134 = 3 \cdot 313 - 7 \cdot 134$

$134 = 1073 - 3 \cdot 313$, so $1 = 3 \cdot 313 - 7(1073 - 3 \cdot 313) = 24 \cdot 313 - 7 \cdot 1073$

Therefore $x = -7$ and $y = 24$: $(-7)(1073) + 24(313) = -7511 + 7512 = 1$. $\blacksquare$

</details>

### 2.4 Coprime Integers

Integers $a$ and $b$ are **coprime** (or **relatively prime**) if $\gcd(a, b) = 1$.

**Proposition 2.3 (Euclid's Lemma).** If $p$ is prime and $p \mid ab$, then $p \mid a$ or
$p \mid b$.

_Proof._ If $p \nmid a$, then $\gcd(p, a) = 1$. By Bézout's identity, $1 = px + ay$ for some
$x, y \in \mathbb{Z}$. Multiplying by $b$: $b = pbx + aby$. Since $p \mid aby$, we get $p \mid b$.
$\blacksquare$

**Corollary 2.4.** If $p$ is prime and $p \mid a_1 a_2 \cdots a_n$, then $p \mid a_i$ for some $i$.

**Proposition 2.5.** If $\gcd(a, b) = 1$ and $a \mid bc$, then $a \mid c$.

_Proof._ Since $\gcd(a, b) = 1$, by Bézout's identity there exist $x, y$ with $ax + by = 1$.
Multiplying by $c$: $acx + bcy = c$. Since $a \mid bc$, we have $a \mid bcy$, and clearly $a \mid acx$,
so $a \mid c$. $\blacksquare$

**Proposition 2.6.** If $\gcd(a, b) = 1$ and $\gcd(a, c) = 1$, then $\gcd(a, bc) = 1$.

_Proof._ By Bézout, $ax_1 + by_1 = 1$ and $ax_2 + cz_2 = 1$. Multiplying:
$(ax_1 + by_1)(ax_2 + cz_2) = a(ax_1 x_2 + x_1 c z_2 + by_1 x_2) + (by_1)(cz_2) = 1$. This expresses
$1$ as a linear combination of $a$ and $bc$, so $\gcd(a, bc) = 1$. $\blacksquare$

## 3. Prime Numbers

### 3.1 The Fundamental Theorem of Arithmetic

**Theorem 3.1 (Fundamental Theorem of Arithmetic).** Every integer $n > 1$ can be written uniquely
(including order) as a product of primes:

$$n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$$

where $p_1 \lt{} p_2 \lt{} \cdots \lt{} p_k$ are primes and $a_i \geq 1$.

_Proof (existence)._ Suppose for contradiction that some integer $n > 1$ cannot be factored into
primes. Let $n$ be the smallest such integer. If $n$ is prime, we are done. Otherwise $n = ab$ with
$1 \lt{} a, b \lt{} n$. By minimality of $n$, both $a$ and $b$ factor into primes, so $n = ab$ also
factors into primes, a contradiction. $\blacksquare$

_Proof (uniqueness)._ Suppose $n = p_1 \cdots p_r = q_1 \cdots q_s$ where all $p_i, q_j$ are prime.
Since $p_1 \mid q_1 \cdots q_s$, by Euclid's lemma (applied inductively), $p_1 \mid q_j$ for some
$j$. Since $q_j$ is prime, $p_1 = q_j$. Cancel to get
$p_2 \cdots p_r = q_1 \cdots \hat{q}_j \cdots q_s$. Continue by induction. $\blacksquare$

### 3.2 The Infinitude of Primes

**Theorem 3.2 (Euclid).** There are infinitely many primes.

_Proof._ Suppose $p_1, p_2, \ldots, p_n$ is a complete list of all primes. Consider
$N = p_1 p_2 \cdots p_n + 1$. Then $N > 1$, so by the fundamental theorem, $N$ has a prime divisor
$p$. But $p \mid N$ and $p \mid p_1 \cdots p_n$ implies $p \mid (N - p_1 \cdots p_n) = 1$, which is
impossible. Contradiction. $\blacksquare$

### 3.3 The Prime Number Theorem

**Theorem 3.3 (Prime Number Theorem).** Let $\pi(x)$ denote the number of primes $\leq x$. Then

$$\lim_{x \to \infty} \frac{\pi(x)}{x / \ln x} = 1$$

This tells us that primes thin out as numbers grow larger, with the density near $x$ being
approximately $1/\ln x$.

**Proposition 3.3a (Chebyshev estimates).** There exist positive constants $c_1, c_2$ such that

$$c_1 \frac{x}{\ln x} \leq \pi(x) \leq c_2 \frac{x}{\ln x}$$

for all sufficiently large $x$.

_Intuition._ Chebyshev proved $\pi(x) = O(x/\ln x)$ and $\pi(x) = \Omega(x/\ln x)$ using properties
of the binomial coefficient $\binom{2n}{n}$. The prime number theorem strengthens this to
$\pi(x) \sim x/\ln x$.

**Proposition 3.3b.** For $n \geq 2$, the $n$-th prime $p_n$ satisfies $n \ln n \lt{} p_n \lt{} 2n \ln n$.

This follows from the prime number theorem and the estimate $\pi(x) \sim x/\ln x$.

### 3.4 Worked Examples of Prime Factorization

**Problem.** Find the prime factorization of $N = 2016$ and determine $\sigma(2016)$ and $\tau(2016)$.

<details>
<summary>Solution</summary>

$2016 = 2 \cdot 1008 = 2^2 \cdot 504 = 2^3 \cdot 252 = 2^4 \cdot 126 = 2^5 \cdot 63 = 2^5 \cdot 7 \cdot 9 = 2^5 \cdot 3^2 \cdot 7$.

So $2016 = 2^5 \cdot 3^2 \cdot 7^1$.

$\tau(2016) = (5+1)(2+1)(1+1) = 6 \cdot 3 \cdot 2 = 36$.

$\sigma(2016) = \frac{2^6 - 1}{2-1} \cdot \frac{3^3 - 1}{3-1} \cdot \frac{7^2 - 1}{7-1} = 63 \cdot 13 \cdot 8 = 6552$. $\blacksquare$

</details>

**Problem.** Prove that $\sqrt{2}$ is irrational using the fundamental theorem of arithmetic.

<details>
<summary>Solution</summary>

Suppose $\sqrt{2} = a/b$ where $a, b \in \mathbb{N}$ with $\gcd(a, b) = 1$. Then $2b^2 = a^2$,
so $2 \mid a^2$, hence $2 \mid a$. Write $a = 2c$. Then $2b^2 = 4c^2$, so $b^2 = 2c^2$, giving
$2 \mid b^2$ and hence $2 \mid b$. But then $2 \mid \gcd(a, b) = 1$, contradiction. $\blacksquare$

</details>

### 3.5 The Sieve of Eratosthenes

The **Sieve of Eratosthenes** is an ancient algorithm for finding all primes up to a given bound $N$.

**Algorithm.** Start with the list $\\{2, 3, 4, \ldots, N\\}$. For each prime $p \leq \sqrt{N}$, mark
all multiples of $p$ (starting from $p^2$) as composite. The remaining unmarked numbers are prime.

**Proposition 3.4.** The sieve of Eratosthenes correctly identifies all primes up to $N$ in
$O(N \log \log N)$ arithmetic operations.

_Proof._ Every composite $n \leq N$ has a prime factor $p \leq \sqrt{n} \leq \sqrt{N}$. When the sieve
reaches this prime $p$, it marks $n$ as composite (since $n = p \cdot m$ with $m \geq p$, so
$n \geq p^2$ and $n$ is a multiple of $p$ at least $p^2$). Conversely, no prime is ever marked since
the only multiples of $p$ marked are $kp$ for $k \geq 2$. $\blacksquare$

**Problem.** Use the sieve of Eratosthenes to find all primes up to $50$.

<details>
<summary>Solution</summary>

Start with $\\{2, 3, 4, \ldots, 50\\}$.

Mark multiples of $2$ (from $4$): remove $4, 6, 8, 10, \ldots, 50$.
Mark multiples of $3$ (from $9$): remove $9, 12, 15, 18, \ldots, 48$.
Mark multiples of $5$ (from $25$): remove $25, 30, 35, 40, 45$.
Mark multiples of $7$ (from $49$): remove $49$.

We stop at $\lfloor\sqrt{50}\rfloor = 7$.

The primes up to $50$ are: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$. $\blacksquare$

</details>

### 3.6 Bertrand's Postulate

**Theorem 3.5 (Bertrand's Postulate, Chebyshev 1852).** For every integer $n > 1$, there exists at
least one prime $p$ with $n \lt{} p \lt{} 2n$.

_Proof (sketch)._ Let $\theta(x) = \sum_{p \leq x} \ln p$ (Chebyshev's function). The proof proceeds
in three main steps:

1. Show $\theta(n) \lt{} 2n \ln 2$ for all $n \geq 1$ by induction using properties of binomial
   coefficients. Specifically, $\binom{2n}{n}$ is divisible by every prime $p$ with $n \lt{} p \leq 2n$,
   and $\binom{2n}{n} \leq 4^n$, so $\prod_{n \lt{} p \leq 2n} p \leq 4^n$.

2. Strengthen the bound to show that if no prime $p$ satisfies $n \lt{} p \leq 2n$, then
   $\theta(2n) = \theta(n)$, leading to a contradiction with the bound for sufficiently large $n$.

3. The remaining small values of $n$ are checked directly.

$\blacksquare$

_Remark._ This was famously conjectured by Bertrand in 1845 and proved by Chebyshev in 1852.
Erdős published an elegant proof in 1932.

**Problem.** Verify Bertrand's postulate for $n = 20$: find a prime $p$ with $20 \lt{} p \lt{} 40$.

<details>
<summary>Solution</summary>

The primes in the range $(20, 40)$ are: $23, 29, 31, 37$. There are four such primes,
confirming the postulate. $\blacksquare$

</details>

_Remark._ Bertrand's postulate has been significantly strengthened. The prime number theorem
implies that for large $n$, there are approximately $n/\ln n$ primes between $n$ and $2n$.

## 4. Congruences

### 4.1 Basic Properties

We write $a \equiv b \pmod{m}$ (read "$a$ is congruent to $b$ modulo $m$") if $m \mid (a - b)$.

**Proposition 4.1.** Congruence modulo $m$ is an equivalence relation on $\mathbb{Z}$.

**Proposition 4.2.** If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then:

1. $a + c \equiv b + d \pmod{m}$.
2. $ac \equiv bd \pmod{m}$.
3. $a^n \equiv b^n \pmod{m}$ for all $n \geq 1$.

**Proposition 4.3.** If $ac \equiv bc \pmod{m}$ and $\gcd(c, m) = d$, then $a \equiv b \pmod{m/d}$.

In particular, if $\gcd(c, m) = 1$, we can cancel: $a \equiv b \pmod{m}$.

### 4.2 Solving Linear Congruences

**Theorem 4.4.** The congruence $ax \equiv b \pmod{m}$ has a solution if and only if
$\gcd(a, m) \mid b$. When solutions exist, there are exactly $\gcd(a, m)$ incongruent solutions
modulo $m$.

_Proof._ $ax \equiv b \pmod{m}$ is equivalent to $ax - my = b$ for some $y \in \mathbb{Z}$. By
Bézout's identity, solutions exist iff $\gcd(a, m) \mid b$. If $d = \gcd(a, m)$ and $x_0$ is one
solution, then $x_0 + k(m/d)$ for $k = 0, 1, \ldots, d-1$ gives $d$ incongruent solutions modulo
$m$. $\blacksquare$

### 4.3 Worked Example

**Problem.** Solve $14x \equiv 6 \pmod{33}$.

_Solution._ $\gcd(14, 33) = 1$, so a unique solution exists. Using the extended Euclidean algorithm:
$33 = 2 \cdot 14 + 5$, $14 = 2 \cdot 5 + 4$, $5 = 1 \cdot 4 + 1$. Back-substituting:
$1 = 5 - 4 = 5 - (14 - 2 \cdot 5) = 3 \cdot 5 - 14 = 3(33 - 2 \cdot 14) - 14 = 3 \cdot 33 - 7 \cdot 14$.
So $14(-7) \equiv 1 \pmod{33}$, giving $x \equiv -42 \equiv 24 \pmod{33}$. $\blacksquare$

### 4.4 Additional Properties of Congruences

**Proposition 4.5.** For any $a, b, m \in \mathbb{Z}$ with $m > 0$:

1. $a \equiv b \pmod{m}$ if and only if $a$ and $b$ leave the same remainder when divided by $m$.
2. If $a \equiv b \pmod{m}$ and $d \mid m$, then $a \equiv b \pmod{d}$.
3. If $a \equiv b \pmod{m_i}$ for $i = 1, \ldots, k$, then $a \equiv b \pmod{\mathrm{lcm}(m_1, \ldots, m_k)}$.

_Proof of (1)._ Write $a = mq_1 + r_1$ and $b = mq_2 + r_2$ with $0 \leq r_1, r_2 \lt{} m$.
Then $a - b = m(q_1 - q_2) + (r_1 - r_2)$. So $m \mid (a - b)$ iff $m \mid (r_1 - r_2)$, which
happens iff $r_1 = r_2$ (since $|r_1 - r_2| \lt{} m$). $\blacksquare$

_Proof of (2)._ $m \mid (a - b)$ and $d \mid m$, so $d \mid (a - b)$. $\blacksquare$

_Proof of (3)._ We have $m_i \mid (a - b)$ for each $i$, so $\mathrm{lcm}(m_1, \ldots, m_k) \mid (a-b)$
by definition of the lcm. Hence $a \equiv b \pmod{\mathrm{lcm}(m_1, \ldots, m_k)}$. $\blacksquare$

**Proposition 4.6.** If $a \equiv b \pmod{m}$ and $f(x) = c_k x^k + \cdots + c_1 x + c_0$ is a
polynomial with integer coefficients, then $f(a) \equiv f(b) \pmod{m}$.

_Proof._ By Proposition 4.2, $a^j \equiv b^j \pmod{m}$ for all $j \geq 0$, and $c_j a^j \equiv c_j b^j \pmod{m}$.
Summing over $j$ gives the result. $\blacksquare$

**Corollary 4.6a.** If $a \equiv b \pmod{m}$, then $a^k \equiv b^k \pmod{m}$ for all $k \geq 0$. In
particular, the last $d$ digits of $a$ and $b$ (in base $10$) determine the last $d$ digits of $a^k$
and $b^k$.

### 4.5 More Worked Examples

**Problem.** Solve $12x \equiv 9 \pmod{15}$.

<details>
<summary>Solution</summary>

$\gcd(12, 15) = 3$, and $3 \mid 9$, so solutions exist. There are exactly $3$ incongruent
solutions modulo $15$.

Divide through by $3$: $4x \equiv 3 \pmod{5}$. Now $\gcd(4, 5) = 1$, so $4x \equiv 3 \pmod{5}$
gives $x \equiv 4^{-1} \cdot 3 \pmod{5}$. Since $4 \cdot 4 = 16 \equiv 1 \pmod{5}$, we get
$x \equiv 4 \cdot 3 = 12 \equiv 2 \pmod{5}$.

The solutions modulo $15$ are $x \equiv 2, 7, 12 \pmod{15}$. $\blacksquare$

</details>

**Problem.** Find the last two digits of $7^{1947}$.

<details>
<summary>Solution</summary>

We need $7^{1947} \bmod 100$. Since $\phi(100) = \phi(4)\phi(25) = 2 \cdot 20 = 40$ and
$\gcd(7, 100) = 1$, Euler's theorem gives $7^{40} \equiv 1 \pmod{100}$.

$1947 = 48 \cdot 40 + 27$, so $7^{1947} = (7^{40})^{48} \cdot 7^{27} \equiv 7^{27} \pmod{100}$.

$7^2 = 49$, $7^4 = 2401 \equiv 1 \pmod{100}$. So $7^{27} = (7^4)^6 \cdot 7^3 \equiv 1^6 \cdot 343 \equiv 43 \pmod{100}$.

The last two digits of $7^{1947}$ are $43$. $\blacksquare$

</details>

### 4.6 Wilson's Theorem

**Theorem 4.7 (Wilson's Theorem).** An integer $p \geq 2$ is prime if and only if

$$(p - 1)! \equiv -1 \pmod{p}$$

_Proof._ ($\Rightarrow$) Suppose $p$ is prime. In $(\mathbb{Z}/p\mathbb{Z})^*$, every element $a$ has a
unique multiplicative inverse $a^{-1}$. The elements $1$ and $p - 1$ are **self-inverse** since
$1 \cdot 1 \equiv 1$ and $(p-1)^2 = p^2 - 2p + 1 \equiv 1 \pmod{p}$. For $2 \leq a \leq p-2$, we have
$a \neq a^{-1}$ (if $a^2 \equiv 1$, then $p \mid (a-1)(a+1)$, so $p \mid (a-1)$ or $p \mid (a+1)$,
giving $a \equiv 1$ or $a \equiv p-1$). Thus the elements $\\{2, 3, \ldots, p-2\\}$ pair up into
$(p-3)/2$ pairs of mutually inverse elements. The product of all elements in each pair is $1$ modulo
$p$, so

$$(p-1)! = 1 \cdot (p-1) \prod_{a=2}^{p-2} a \equiv 1 \cdot (p-1) \cdot 1^{(p-3)/2} \equiv -1 \pmod{p}$$

($\Leftarrow$) If $n \geq 2$ is composite, then $n = ab$ with $1 \lt{} a \leq b \lt{} n$. If $a \neq b$,
both $a$ and $b$ appear in $(n-1)!$, so $n \mid (n-1)!$ and $(n-1)! \equiv 0 \pmod{n}$. If $a = b$
(i.e., $n = a^2$), then $n > 4$ implies $a > 2$, and both $a$ and $2a \lt{} a^2 = n$ appear in
$(n-1)!$, so again $(n-1)! \equiv 0 \pmod{n}$. The case $n = 4$ gives
$3! = 6 \equiv 2 \pmod{4} \neq -1$. $\blacksquare$

**Problem.** Use Wilson's theorem to find $8! \bmod 11$.

<details>
<summary>Solution</summary>

By Wilson's theorem, $(11 - 1)! = 10! \equiv -1 \pmod{11}$.
$10! = 10 \cdot 9 \cdot 8!$, so $10 \cdot 9 \cdot 8! \equiv -1 \pmod{11}$.
$90 \equiv 2 \pmod{11}$, so $2 \cdot 8! \equiv -1 \pmod{11}$.
Multiplying by $6$ (the inverse of $2$ mod $11$): $8! \equiv -6 \equiv 5 \pmod{11}$. $\blacksquare$

</details>

## 5. The Chinese Remainder Theorem

### 5.1 Statement and Proof

**Theorem 5.1 (Chinese Remainder Theorem).** Let $m_1, m_2, \ldots, m_k$ be pairwise coprime
positive integers. Then for any integers $a_1, a_2, \ldots, a_k$, the system of congruences

$$x \equiv a_i \pmod{m_i}, \quad i = 1, 2, \ldots, k$$

has a unique solution modulo $M = m_1 m_2 \cdots m_k$.

_Proof._ Let $M_i = M/m_i$. Since $\gcd(m_i, M_i) = 1$, there exist $b_i$ with
$b_i M_i \equiv 1 \pmod{m_i}$ (by Bézout). Set $x = \sum_{i=1}^k a_i b_i M_i$. Then
$x \equiv a_i b_i M_i \equiv a_i \cdot 1 \equiv a_i \pmod{m_i}$ since $M_j \equiv 0 \pmod{m_i}$ for
$j \neq i$. For uniqueness: if $x$ and $x'$ are both solutions, then $x - x'$ is divisible by each
$m_i$, hence by $M$, so $x \equiv x' \pmod{M}$. $\blacksquare$

### 5.2 Worked Example

**Problem.** Solve $x \equiv 2 \pmod{3}$, $x \equiv 3 \pmod{5}$, $x \equiv 2 \pmod{7}$.

_Solution._ $M = 3 \cdot 5 \cdot 7 = 105$. $M_1 = 35$, $M_2 = 21$, $M_3 = 15$.

$35 \cdot 2 = 70 \equiv 1 \pmod{3}$, so $b_1 = 2$. $21 \cdot 1 = 21 \equiv 1 \pmod{5}$, so
$b_2 = 1$. $15 \cdot 1 = 15 \equiv 1 \pmod{7}$, so $b_3 = 1$.

$x = 2 \cdot 2 \cdot 35 + 3 \cdot 1 \cdot 21 + 2 \cdot 1 \cdot 15 = 140 + 63 + 30 = 233 \equiv 23 \pmod{105}$.

Verification: $23 = 7 \cdot 3 + 2 \equiv 2 \pmod{3}$. $23 = 4 \cdot 5 + 3 \equiv 3 \pmod{5}$.
$23 = 3 \cdot 7 + 2 \equiv 2 \pmod{7}$. $\blacksquare$

### 5.3 More Worked Examples

**Problem.** Solve the system: $x \equiv 3 \pmod{7}$, $x \equiv 5 \pmod{11}$, $x \equiv 2 \pmod{13}$.

<details>
<summary>Solution</summary>

$M = 7 \cdot 11 \cdot 13 = 1001$.

$M_1 = 143$. We need $143 b_1 \equiv 1 \pmod{7}$. Since $143 = 20 \cdot 7 + 3$, we need $3b_1 \equiv 1 \pmod{7}$,
so $b_1 \equiv 5 \pmod{7}$.

$M_2 = 91$. We need $91 b_2 \equiv 1 \pmod{11}$. Since $91 = 8 \cdot 11 + 3$, we need $3b_2 \equiv 1 \pmod{11}$,
so $b_2 \equiv 4 \pmod{11}$.

$M_3 = 77$. We need $77 b_3 \equiv 1 \pmod{13}$. Since $77 = 5 \cdot 13 + 12$, we need $12b_3 \equiv 1 \pmod{13}$.
$12 \equiv -1 \pmod{13}$, so $-b_3 \equiv 1$, giving $b_3 \equiv 12 \pmod{13}$.

$x = 3 \cdot 5 \cdot 143 + 5 \cdot 4 \cdot 91 + 2 \cdot 12 \cdot 77 = 2145 + 1820 + 1848 = 5813$.

$5813 \bmod 1001$: $5813 = 5 \cdot 1001 + 808$. So $x \equiv 808 \pmod{1001}$. $\blacksquare$

</details>

### 5.4 The General Chinese Remainder Theorem

The CRT can be extended to systems where the moduli are not necessarily pairwise coprime.

**Theorem 5.2 (General CRT).** The system $x \equiv a_i \pmod{m_i}$ for $i = 1, \ldots, k$ has a
solution if and only if $a_i \equiv a_j \pmod{\gcd(m_i, m_j)}$ for all $i, j$. When a solution
exists, it is unique modulo $\mathrm{lcm}(m_1, \ldots, m_k)$.

_Proof._ ($\Rightarrow$) If $x \equiv a_i \pmod{m_i}$ and $x \equiv a_j \pmod{m_j}$, then
$m_i \mid (x - a_i)$ and $m_j \mid (x - a_j)$. Any common divisor of $m_i$ and $m_j$ divides
$(x - a_i) - (x - a_j) = a_j - a_i$. So $\gcd(m_i, m_j) \mid (a_i - a_j)$.

($\Leftarrow$) Proceed pairwise. Consider $x \equiv a_1 \pmod{m_1}$ and $x \equiv a_2 \pmod{m_2}$.
Write $m_1 = d \cdot m_1'$ and $m_2 = d \cdot m_2'$ where $d = \gcd(m_1, m_2)$. By hypothesis
$a_1 \equiv a_2 \pmod{d}$. The combined congruence is equivalent to
$x \equiv a_2 + dk \pmod{m_2}$ for some $k$ with $d \mid k$. By induction on $k$, the full system
is solvable. Uniqueness modulo the lcm follows from Proposition 4.5(3). $\blacksquare$

**Problem.** Solve $x \equiv 3 \pmod{6}$, $x \equiv 5 \pmod{10}$.

<details>
<summary>Solution</summary>

$\gcd(6, 10) = 2$. Check: $3 \equiv 5 \pmod{2}$? $3 \bmod 2 = 1$, $5 \bmod 2 = 1$. Yes, so a
solution exists.

$x \equiv 3 \pmod{6}$ means $x = 6k + 3$. Substituting: $6k + 3 \equiv 5 \pmod{10}$, so
$6k \equiv 2 \pmod{10}$. Dividing by $\gcd(6, 10) = 2$: $3k \equiv 1 \pmod{5}$, giving
$k \equiv 2 \pmod{5}$.

So $k = 5m + 2$, and $x = 6(5m + 2) + 3 = 30m + 15$. The solution is $x \equiv 15 \pmod{30}$.
Note $\mathrm{lcm}(6, 10) = 30$. $\blacksquare$

</details>

**Problem.** Determine whether the system $x \equiv 5 \pmod{12}$, $x \equiv 3 \pmod{15}$,
$x \equiv 8 \pmod{20}$ has a solution.

<details>
<summary>Solution</summary>

Check pairwise compatibility:
$\gcd(12, 15) = 3$. $5 \equiv 3 \pmod{3}$? $5 \bmod 3 = 2$, $3 \bmod 3 = 0$. No! $2 \neq 0$.

Therefore the system has no solution. $\blacksquare$

</details>

### 5.5 Applications of the CRT

**Application (RSA decryption).** In RSA, one computes $m^d \bmod n$ where $n = pq$. Since
$\phi(n) = (p-1)(q-1)$, one can compute $m^d \bmod p$ and $m^d \bmod q$ separately (much faster
for large moduli) and then combine using the CRT.

**Application (Constructing integers with prescribed residues).** The CRT guarantees that for any
choice of residues $a_i$ modulo pairwise coprime $m_i$, we can find an integer with all those
residues simultaneously. This is used in error-correcting codes and in the construction of
pseudorandom number generators.

**Application (Simultaneous systems).** The CRT is used to reduce computation modulo a large
number $n = m_1 m_2 \cdots m_k$ to computations modulo each smaller $m_i$. This "garner's
algorithm" approach is widely used in computer algebra systems.

**Problem.** A number $N$ leaves remainder $3$ when divided by $8$, $1$ when divided by $9$, and
$7$ when divided by $25$. Find the smallest such $N$.

<details>
<summary>Solution</summary>

$M = 8 \cdot 9 \cdot 25 = 1800$.

$M_1 = 225$. $225b_1 \equiv 1 \pmod{8}$. $225 \equiv 1 \pmod{8}$, so $b_1 = 1$.
$M_2 = 200$. $200b_2 \equiv 1 \pmod{9}$. $200 = 22 \cdot 9 + 2$, so $2b_2 \equiv 1 \pmod{9}$, $b_2 = 5$.
$M_3 = 72$. $72b_3 \equiv 1 \pmod{25}$. $72 = 2 \cdot 25 + 22$, so $22b_3 \equiv 1 \pmod{25}$.
$22 \equiv -3 \pmod{25}$. We need $-3b_3 \equiv 1$, so $3b_3 \equiv 24$, $b_3 = 8$.

$N = 3 \cdot 1 \cdot 225 + 1 \cdot 5 \cdot 200 + 7 \cdot 8 \cdot 72 = 675 + 1000 + 4032 = 5707$.

$5707 \bmod 1800 = 5707 - 3 \cdot 1800 = 5707 - 5400 = 307$.

The smallest positive solution is $N = 307$. $\blacksquare$

</details>

## 6. Euler's Theorem and Fermat's Little Theorem

### 6.1 Euler's Totient Function

**Definition.** Euler's **totient function** $\phi(n)$ counts the integers in $\\{1, 2, \ldots, n\\}$
that are coprime to $n$.

**Proposition 6.1.** If $p$ is prime, then $\phi(p) = p - 1$.

### 6.2 Multiplicativity of the Totient Function

**Theorem 6.2.** If $\gcd(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$.

_Proof._ We count the integers in $\\{1, 2, \ldots, mn\\}$ coprime to $mn$. Since $\gcd(m, n) = 1$,
we have $\gcd(k, mn) = 1$ if and only if $\gcd(k, m) = 1$ and $\gcd(k, n) = 1$.

Consider the $m \times n$ grid where entry $(i, j)$ represents the number $k \equiv i \pmod{m}$,
$k \equiv j \pmod{n}$. By the CRT, each pair $(i, j)$ with $1 \leq i \leq m$, $1 \leq j \leq n$
corresponds to a unique $k$ modulo $mn$. The number $k$ is coprime to $mn$ iff $i$ is coprime to $m$
and $j$ is coprime to $n$. There are $\phi(m)$ choices for $i$ and $\phi(n)$ choices for $j$,
giving $\phi(m) \cdot \phi(n)$ values of $k$ coprime to $mn$. $\blacksquare$

**Proposition 6.3.** If $n = p_1^{a_1} \cdots p_k^{a_k}$, then
$\phi(n) = n \prod_{p \mid n}(1 - 1/p)$.

_Proof._ By multiplicativity, $\phi(n) = \prod_{i=1}^k \phi(p_i^{a_i})$. Now
$\phi(p^a) = p^a - p^{a-1} = p^a(1 - 1/p)$, since exactly $p^{a-1}$ of the $p^a$ integers in
$\\{1, \ldots, p^a\\}$ are multiples of $p$. $\blacksquare$

### 6.3 Euler's Theorem

**Theorem 6.4 (Euler's Theorem).** If $\gcd(a, n) = 1$, then

$$a^{\phi(n)} \equiv 1 \pmod{n}$$

_Proof._ Let $U_n = \\{r_1, r_2, \ldots, r_{\phi(n)}\\}$ be the reduced residue system modulo $n$.
Since $\gcd(a, n) = 1$, the map $r_i \mapsto ar_i \pmod{n}$ permutes $U_n$. Thus
$\prod_{i=1}^{\phi(n)} (ar_i) \equiv \prod_{i=1}^{\phi(n)} r_i \pmod{n}$, so
$a^{\phi(n)} \prod r_i \equiv \prod r_i \pmod{n}$. Since $\gcd(\prod r_i, n) = 1$, we cancel to get
$a^{\phi(n)} \equiv 1 \pmod{n}$. $\blacksquare$

**Corollary 6.5 (Fermat's Little Theorem).** If $p$ is prime and $\gcd(a, p) = 1$, then
$a^{p-1} \equiv 1 \pmod{p}$. Equivalently, $a^p \equiv a \pmod{p}$ for all $a$.

### 6.4 Worked Examples

**Problem.** Compute $7^{222} \bmod 15$.

_Solution._ $\phi(15) = \phi(3)\phi(5) = 2 \cdot 4 = 8$. Since $\gcd(7, 15) = 1$,
$7^8 \equiv 1 \pmod{15}$. We have $222 = 27 \cdot 8 + 6$, so
$7^{222} = (7^8)^{27} \cdot 7^6 \equiv 1^{27} \cdot 7^6 \pmod{15}$. Now
$7^2 = 49 \equiv 4 \pmod{15}$, $7^4 \equiv 16 \equiv 1 \pmod{15}$, so
$7^6 = 7^4 \cdot 7^2 \equiv 1 \cdot 4 = 4 \pmod{15}$. $\blacksquare$

**Problem.** Show that $n^{13} - n$ is divisible by $2730$ for all $n \in \mathbb{Z}$.

<details>
<summary>Solution</summary>

$2730 = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 13$. We show $n^{13} \equiv n \pmod{p}$ for each prime
$p \in \\{2, 3, 5, 7, 13\\}$.

For $p = 13$: by Fermat, $n^{13} \equiv n \pmod{13}$.

For $p \in \\{2, 3, 5, 7\\}$: by Fermat, $n^p \equiv n \pmod{p}$. Since $p \lt{} 13$, by repeated
application $n^{13} = n^{qp+r} = (n^p)^q \cdot n^r \equiv n^q \cdot n^r = n^{q+r}$. Iterating gives
$n^{13} \equiv n \pmod{p}$.

By the CRT (since $2, 3, 5, 7, 13$ are pairwise coprime), $n^{13} \equiv n \pmod{2730}$, so
$2730 \mid (n^{13} - n)$. $\blacksquare$

</details>

### 6.5a Fermat Pseudoprimes

**Definition.** A composite integer $n$ is a **Fermat pseudoprime to base $a$** if
$a^{n-1} \equiv 1 \pmod{n}$. A composite integer that is a Fermat pseudoprime to all bases
$a$ with $\gcd(a, n) = 1$ is a **Carmichael number**.

The existence of Carmichael numbers shows that Fermat's little theorem is a necessary but not
sufficient test for primality. The smallest Carmichael number is $561 = 3 \cdot 11 \cdot 17$.

**Problem.** Verify that $561$ is a Fermat pseudoprime to base $2$.

<details>
<summary>Solution</summary>

$2^{560} \bmod 561$. Since $561 = 3 \cdot 11 \cdot 17$, compute modulo each factor:
$2^2 \equiv 1 \pmod{3}$, so $2^{560} = (2^2)^{280} \equiv 1 \pmod{3}$.
$2^{10} \equiv 1 \pmod{11}$ (Fermat), and $560 = 56 \cdot 10$, so $2^{560} \equiv 1 \pmod{11}$.
$2^{16} \equiv 1 \pmod{17}$ (Fermat), and $560 = 35 \cdot 16$, so $2^{560} \equiv 1 \pmod{17}$.

By the CRT, $2^{560} \equiv 1 \pmod{561}$. Since $561$ is composite, it is a Fermat pseudoprime
to base $2$. $\blacksquare$

</details>

### 6.5 Application to RSA

The RSA cryptosystem is a direct application of Euler's theorem.

**Setup.** Choose two large distinct primes $p$ and $q$. Set $n = pq$ and
$\phi(n) = (p-1)(q-1)$. Choose $e$ with $1 \lt{} e \lt{} \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
Compute $d$ such that $ed \equiv 1 \pmod{\phi(n)}$ using the extended Euclidean algorithm.

**Public key:** $(n, e)$. **Private key:** $(n, d)$.

**Encryption:** To send message $m$ ($0 \leq m \lt{} n$), compute $c = m^e \bmod n$.

**Decryption:** Compute $m = c^d \bmod n$.

**Theorem 6.6.** RSA decryption is correct: $c^d \equiv m \pmod{n}$.

_Proof._ Since $ed \equiv 1 \pmod{\phi(n)}$, write $ed = 1 + k\phi(n)$ for some $k \in \mathbb{Z}$.
If $\gcd(m, n) = 1$, then $c^d \equiv m^{ed} = m^{1 + k\phi(n)} \equiv m \cdot (m^{\phi(n)})^k \equiv m \cdot 1^k \equiv m \pmod{n}$ by Euler's theorem.

If $\gcd(m, n) > 1$, then since $n = pq$, we have $p \mid m$ or $q \mid m$. Suppose $p \mid m$
and $q \nmid m$. By Fermat, $m^{q-1} \equiv 1 \pmod{q}$. So
$m^{ed} = m^{1 + k(p-1)(q-1)} \equiv m \pmod{q}$. Also $m^{ed} \equiv 0 \equiv m \pmod{p}$.
By the CRT, $m^{ed} \equiv m \pmod{n}$. $\blacksquare$

**Problem.** Given $p = 61$, $q = 53$, $e = 17$, encrypt and decrypt the message $m = 65$.

<details>
<summary>Solution</summary>

$n = 61 \cdot 53 = 3233$, $\phi(n) = 60 \cdot 52 = 3120$.

Find $d$: solve $17d \equiv 1 \pmod{3120}$. Using the extended Euclidean algorithm:
$3120 = 183 \cdot 17 + 9$, $17 = 1 \cdot 9 + 8$, $9 = 1 \cdot 8 + 1$.
Back-substituting: $1 = 9 - 8 = 9 - (17 - 9) = 2 \cdot 9 - 17 = 2(3120 - 183 \cdot 17) - 17 = 2 \cdot 3120 - 367 \cdot 17$.
So $d \equiv -367 \equiv 2753 \pmod{3120}$.

Encrypt: $c = 65^{17} \bmod 3233$. Compute: $65^2 = 4225 \equiv 992 \pmod{3233}$.
$65^4 \equiv 992^2 = 984064 \equiv 1232 \pmod{3233}$.
$65^8 \equiv 1232^2 = 1517824 \equiv 1547 \pmod{3233}$.
$65^{16} \equiv 1547^2 = 2393209 \equiv 789 \pmod{3233}$.
$65^{17} = 65^{16} \cdot 65 \equiv 789 \cdot 65 = 51285 \equiv 2790 \pmod{3233}$.

So $c = 2790$. Decrypt: $m = 2790^{2753} \bmod 3233$. (By the correctness proof, this returns $65$.) $\blacksquare$

</details>

## 7. Primitive Roots

### 7.1 The Multiplicative Order

**Definition.** The **multiplicative order** of $a$ modulo $n$ (where $\gcd(a, n) = 1$) is the
smallest positive integer $k$ such that $a^k \equiv 1 \pmod{n}$. We write $\mathrm{ord}_n(a) = k$.

**Proposition 7.1.** $\mathrm{ord}_n(a)$ divides $\phi(n)$.

**Proposition 7.2.** $a^k \equiv 1 \pmod{n}$ if and only if $\mathrm{ord}_n(a) \mid k$.

**Proposition 7.3.** If $\mathrm{ord}_n(a) = k$, then $\mathrm{ord}_n(a^m) = k / \gcd(k, m)$.

### 7.2 Primitive Roots

**Definition.** $g$ is a **primitive root modulo $n$** if $\mathrm{ord}_n(g) = \phi(n)$, i.e., $g$
generates the multiplicative group $(\mathbb{Z}/n\mathbb{Z})^*$.

**Theorem 7.4.** A primitive root modulo $n$ exists if and only if $n = 2$, $n = 4$, $n = p^k$, or
$n = 2p^k$ where $p$ is an odd prime and $k \geq 1$.

_Intuition._ The multiplicative group $(\mathbb{Z}/n\mathbb{Z})^*$ is cyclic precisely for these
values of $n$. When the group is not cyclic (e.g., $n = 8$ where
$(\mathbb{Z}/8\mathbb{Z})^* \cong C_2 \times C_2$), no single element can generate the entire group.

**Proposition 7.4a.** $(\mathbb{Z}/n\mathbb{Z})^* \cong \prod_{i=1}^k (\mathbb{Z}/p_i^{a_i}\mathbb{Z})^*$
where $n = \prod p_i^{a_i}$ is the prime factorization. Each factor
$(\mathbb{Z}/p^a\mathbb{Z})^*$ is cyclic for odd primes $p$.

This decomposition explains why primitive roots exist only for the stated values: a product of
cyclic groups is cyclic if and only if the orders are pairwise coprime.

**Theorem 7.5.** If $n$ has a primitive root, then there are exactly $\phi(\phi(n))$ primitive roots
modulo $n$.

### 7.3 Existence of Primitive Roots for Primes

**Theorem 7.6.** Every prime $p$ has a primitive root.

_Proof._ Let $\psi(d)$ denote the number of elements of $(\mathbb{Z}/p\mathbb{Z})^*$ of order
exactly $d$. The key facts are:

1. $\psi(d) \leq \phi(d)$ for all $d \mid (p-1)$.
2. $\sum_{d \mid (p-1)} \psi(d) = p - 1 = \sum_{d \mid (p-1)} \phi(d)$.

If $\psi(d) \lt{} \phi(d)$ for some $d$, then the sum $\sum \psi(d)$ would be strictly less than
$\sum \phi(d) = p - 1$, a contradiction. So $\psi(d) = \phi(d)$ for all $d \mid (p-1)$. In
particular, $\psi(p - 1) = \phi(p - 1) > 0$, so primitive roots exist. $\blacksquare$

### 7.4 Finding Primitive Roots

To test whether $g$ is a primitive root modulo $p$ (where $p$ is prime), it suffices to verify
$g^{(p-1)/q} \not\equiv 1 \pmod{p}$ for every prime divisor $q$ of $p - 1$.

**Proposition 7.7.** Let $p$ be prime and $g \in (\mathbb{Z}/p\mathbb{Z})^*$. Then $g$ is a primitive
root modulo $p$ if and only if for every prime $q \mid (p - 1)$, $g^{(p-1)/q} \not\equiv 1 \pmod{p}$.

_Proof._ If $g$ is a primitive root, $\mathrm{ord}_p(g) = p - 1$. If $g^{(p-1)/q} \equiv 1 \pmod{p}$
for some prime $q \mid (p-1)$, then $\mathrm{ord}_p(g) \mid (p-1)/q \lt{} p-1$, contradiction.

Conversely, if $g$ is not a primitive root, let $d = \mathrm{ord}_p(g) \lt{} p - 1$. Then $d \mid (p-1)$,
so $(p-1)/d > 1$ has some prime factor $q$, meaning $q \mid (p-1)$ and $d \mid (p-1)/q$. Then
$g^{(p-1)/q} \equiv 1 \pmod{p}$, contradicting the hypothesis. $\blacksquare$

**Problem.** Find all primitive roots modulo $13$.

<details>
<summary>Solution</summary>

$\phi(13) = 12$. We need elements of order $12$ in $(\mathbb{Z}/13\mathbb{Z})^*$.
The prime divisors of $12$ are $2$ and $3$. We test $g^6$ and $g^4$.

$g = 2$: $2^4 = 16 \equiv 3 \not\equiv 1$, $2^6 = 64 \equiv 12 \equiv -1 \not\equiv 1 \pmod{13}$. So $2$ is a primitive root.

$g = 3$: $3^4 = 81 \equiv 3 \pmod{13}$. Not a primitive root (order divides $4$).

$g = 5$: $5^4 = 625 \equiv 1 \pmod{13}$. Not a primitive root.

$g = 6$: $6^4 \equiv 9$, $6^6 \equiv 12 \equiv -1 \pmod{13}$. Primitive root.

$g = 7$: $7^4 \equiv 9$, $7^6 \equiv 12 \equiv -1 \pmod{13}$. Primitive root.

$g = 11$: $11^4 \equiv 3$, $11^6 \equiv 12 \equiv -1 \pmod{13}$. Primitive root.

By Theorem 7.5, there are $\phi(12) = 4$ primitive roots modulo $13$: $2, 6, 7, 11$. $\blacksquare$

</details>

### 7.5 Index Calculus

When a primitive root $g$ modulo $p$ is known, every element $a$ of $(\mathbb{Z}/p\mathbb{Z})^*$
can be written uniquely as $a \equiv g^k \pmod{p}$ with $0 \leq k \lt{} p - 1$. The exponent $k$
is called the **index** (or **discrete logarithm**) of $a$ to base $g$, written $\mathrm{ind}_g(a) = k$.

**Proposition 7.8 (Properties of indices).** Let $g$ be a primitive root modulo $p$. For all
$a, b \in (\mathbb{Z}/p\mathbb{Z})^*$:

1. $\mathrm{ind}_g(ab) \equiv \mathrm{ind}_g(a) + \mathrm{ind}_g(b) \pmod{p-1}$.
2. $\mathrm{ind}_g(a^k) \equiv k \cdot \mathrm{ind}_g(a) \pmod{p-1}$.
3. $\mathrm{ind}_g(1) = 0$ and $\mathrm{ind}_g(g) = 1$.

### 7.6 The Discrete Logarithm Problem

**Definition.** Given a prime $p$, a primitive root $g$ modulo $p$, and $a \in (\mathbb{Z}/p\mathbb{Z})^*$,
the **discrete logarithm problem** (DLP) asks: find $k$ such that $g^k \equiv a \pmod{p}$.

Unlike ordinary logarithms, no polynomial-time algorithm is known for the DLP. The best known
algorithms (baby-step giant-step, index calculus, number field sieve) run in subexponential time.

**Application (Diffie--Hellman key exchange).** Alice and Bob agree on a large prime $p$ and
primitive root $g$ (public). Alice chooses secret $a$, sends $g^a \bmod p$. Bob chooses secret $b$,
sends $g^b \bmod p$. The shared secret is $g^{ab} \bmod p$, computable by Alice as $(g^b)^a$ and
by Bob as $(g^a)^b$. An eavesdropper seeing $g^a$ and $g^b$ cannot efficiently compute $g^{ab}$
without solving the DLP.

### 7.7 Worked Example: Index Calculus

**Problem.** Let $g = 2$ be a primitive root modulo $19$. Find $\mathrm{ind}_2(14) \pmod{19}$.

<details>
<summary>Solution</summary>

First, verify $2$ is a primitive root modulo $19$: $\phi(19) = 18$, prime factors of $18$ are $2$ and $3$.
$2^{18/2} = 2^9 = 512$. $512 / 19 = 26.9\ldots$, $26 \cdot 19 = 494$, $512 - 494 = 18 \equiv -1 \pmod{19}$.
$2^{18/3} = 2^6 = 64$. $64 / 19 = 3.4\ldots$, $64 - 57 = 7 \not\equiv 1 \pmod{19}$. Confirmed.

Compute powers of $2$ modulo $19$:
$2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16 \equiv -3$, $2^5 = 32 \equiv 13 \equiv -6$,
$2^6 = 64 \equiv 7$, $2^7 = 14$, $2^8 = 28 \equiv 9$, $2^9 = 18 \equiv -1$,
$2^{10} \equiv -2 \equiv 17$, $2^{11} \equiv -4 \equiv 15$, $2^{12} \equiv -8 \equiv 11$,
$2^{13} \equiv -16 \equiv 3$, $2^{14} = 6$, $2^{15} = 12$, $2^{16} = 24 \equiv 5$,
$2^{17} = 10$, $2^{18} = 20 \equiv 1$.

From $2^7 = 14 \pmod{19}$, we get $\mathrm{ind}_2(14) = 7$. $\blacksquare$

</details>

**Problem.** Using the index table above, solve $6^x \equiv 11 \pmod{19}$.

<details>
<summary>Solution</summary>

Taking indices base $2$: $\mathrm{ind}_2(6^x) = \mathrm{ind}_2(11)$.
$x \cdot \mathrm{ind}_2(6) \equiv \mathrm{ind}_2(11) \pmod{18}$.

From the table: $\mathrm{ind}_2(6) = 14$ and $\mathrm{ind}_2(11) = 12$.
So $14x \equiv 12 \pmod{18}$.

$\gcd(14, 18) = 2$ and $2 \mid 12$, so solutions exist. Divide by $2$: $7x \equiv 6 \pmod{9}$.
$7^{-1} \equiv 4 \pmod{9}$ (since $7 \cdot 4 = 28 \equiv 1$). So $x \equiv 4 \cdot 6 = 24 \equiv 6 \pmod{9}$.

The solutions modulo $18$ are $x \equiv 6, 15 \pmod{18}$.

Check: $6^6 = 46656$. $46656 / 19 = 2455.6\ldots$, $2455 \cdot 19 = 46645$, $46656 - 46645 = 11$. $\blacksquare$

</details>

## 8. Quadratic Residues

### 8.1 Definition

**Definition.** Let $p$ be an odd prime. An integer $a$ not divisible by $p$ is a **quadratic
residue** modulo $p$ if the congruence $x^2 \equiv a \pmod{p}$ has a solution. Otherwise $a$ is a
**quadratic non-residue**.

**Proposition 8.1.** There are exactly $(p - 1)/2$ quadratic residues and $(p - 1)/2$ quadratic
non-residues modulo $p$.

_Proof._ The map $x \mapsto x^2 \pmod{p}$ from $\\{1, 2, \ldots, p-1\\}$ to the set of quadratic
residues is exactly two-to-one since $x^2 \equiv (-x)^2 \pmod{p}$ but $x \not\equiv -x \pmod{p}$ for
$x \not\equiv 0 \pmod{p}$ (since $p$ is odd). $\blacksquare$

### 8.2 Euler's Criterion

**Theorem 8.2 (Euler's Criterion).** Let $p$ be an odd prime and $\gcd(a, p) = 1$. Then

$$a^{(p-1)/2} \equiv \begin{cases} 1 \pmod{p} & \mathrm{if\ } a \mathrm{\ is\ a\ QR\ mod\ } p \\ -1 \pmod{p} & \mathrm{if\ } a \mathrm{\ is\ a\ QNR\ mod\ } p \end{cases}$$

_Proof._ By Fermat's little theorem, $a^{p-1} \equiv 1 \pmod{p}$, so
$(a^{(p-1)/2} - 1)(a^{(p-1)/2} + 1) \equiv 0 \pmod{p}$. Thus $a^{(p-1)/2} \equiv \pm 1 \pmod{p}$.

If $a$ is a QR, say $a \equiv x^2 \pmod{p}$, then $a^{(p-1)/2} \equiv x^{p-1} \equiv 1 \pmod{p}$.

For the converse: $a^{(p-1)/2} \equiv 1 \pmod{p}$ implies $a$ is a QR (by a polynomial argument: the
equation $x^{(p-1)/2} - 1 \equiv 0 \pmod{p}$ has at most $(p-1)/2$ solutions, and all QRs are
solutions). Since there are exactly $(p-1)/2$ QRs and $(p-1)/2$ elements with
$a^{(p-1)/2} \equiv 1 \pmod{p}$, these sets coincide. $\blacksquare$

### 8.3 The Legendre Symbol

**Definition.** The **Legendre symbol** is defined by

$$\left(\frac{a}{p}\right) = \begin{cases} 0 & \mathrm{if\ } p \mid a \\ 1 & \mathrm{if\ } a \mathrm{\ is\ a\ QR\ mod\ } p \\ -1 & \mathrm{if\ } a \mathrm{\ is\ a\ QNR\ mod\ } p \end{cases}$$

**Proposition 8.3.** The Legendre symbol is completely multiplicative:
$\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right)\left(\frac{b}{p}\right)$.

### 8.4 Quadratic Reciprocity

**Theorem 8.4 (Law of Quadratic Reciprocity).** For distinct odd primes $p$ and $q$:

$$\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}$$

**Theorem 8.5 (First Supplement).** $\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2}$. So $-1$ is a QR
mod $p$ if and only if $p \equiv 1 \pmod{4}$.

**Theorem 8.6 (Second Supplement).** $\left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8}$. So $2$ is a QR
mod $p$ if and only if $p \equiv \pm 1 \pmod{8}$.

### 8.5 Proofs of the Supplements

**Proof of the First Supplement.** By Euler's criterion:
$\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2}$. This equals $1$ when $p \equiv 1 \pmod{4}$
(since $(p-1)/2$ is even) and $-1$ when $p \equiv 3 \pmod{4}$ (since $(p-1)/2$ is odd). $\blacksquare$

**Proof of the Second Supplement.** By Euler's criterion,
$\left(\frac{2}{p}\right) = 2^{(p-1)/2} \pmod{p}$.
Consider the product $P = \prod_{k=1}^{(p-1)/2} 2k = 2^{(p-1)/2} \cdot ((p-1)/2)!$.
Reduce each $2k$ modulo $p$ into the set $\\{-(p-1)/2, \ldots, -1, 1, \ldots, (p-1)/2\\}$.
The key observation (Gauss's lemma) is that the number of $2k$ landing in the negative range is
$(p^2 - 1)/8$, which depends on $p \bmod 8$. $\blacksquare$

### 8.6 The Jacobi Symbol

**Definition.** The **Jacobi symbol** generalizes the Legendre symbol to odd composite moduli. For
$n = p_1^{a_1} \cdots p_k^{a_k}$ (odd, positive):

$$\left(\frac{a}{n}\right) = \prod_{i=1}^k \left(\frac{a}{p_i}\right)^{a_i}$$

**Warning.** $\left(\frac{a}{n}\right) = 1$ does not imply $a$ is a QR modulo $n$ when $n$ is
composite.

The Jacobi symbol satisfies the same reciprocity law and supplements as the Legendre symbol, making
it efficient for computation.

**Proposition 8.7 (Properties of the Jacobi symbol).** For odd positive $m, n$:

1. $\left(\frac{a}{mn}\right) = \left(\frac{a}{m}\right)\left(\frac{a}{n}\right)$.
2. $\left(\frac{ab}{n}\right) = \left(\frac{a}{n}\right)\left(\frac{b}{n}\right)$.
3. $\left(\frac{m}{n}\right)\left(\frac{n}{m}\right) = (-1)^{\frac{m-1}{2} \cdot \frac{n-1}{2}}$.
4. $\left(\frac{-1}{n}\right) = (-1)^{(n-1)/2}$.
5. $\left(\frac{2}{n}\right) = (-1)^{(n^2-1)/8}$.
6. If $a \equiv b \pmod{n}$, then $\left(\frac{a}{n}\right) = \left(\frac{b}{n}\right)$.

### 8.7 Worked Examples

**Problem.** Determine whether $73$ is a quadratic residue modulo $97$.

_Solution._ By quadratic reciprocity, since both $73$ and $97$ are congruent to $1 \pmod{4}$:

$$\left(\frac{73}{97}\right) = \left(\frac{97}{73}\right) = \left(\frac{24}{73}\right) = \left(\frac{4}{73}\right)\left(\frac{6}{73}\right) = 1 \cdot \left(\frac{6}{73}\right)$$

$$\left(\frac{6}{73}\right) = \left(\frac{2}{73}\right)\left(\frac{3}{73}\right)$$

$\left(\frac{2}{73}\right) = 1$ since $73 \equiv 1 \pmod{8}$.

$\left(\frac{3}{73}\right) = (-1)^{\frac{3-1}{2} \cdot \frac{73-1}{2}} \left(\frac{73}{3}\right) = (-1)^{72} \left(\frac{1}{3}\right) = 1 \cdot 1 = 1$.

So $\left(\frac{73}{97}\right) = 1$, and $73$ is a QR modulo $97$. $\blacksquare$

**Problem.** Compute the Jacobi symbol $\left(\frac{219}{383}\right)$.

<details>
<summary>Solution</summary>

Both $219 = 3 \cdot 73$ and $383$ are odd. Since $383 \equiv 3 \pmod{4}$ and $219 \equiv 3 \pmod{4}$,
by reciprocity: $\left(\frac{219}{383}\right) = -\left(\frac{383}{219}\right)$.

$383 \bmod 219 = 164$. So $\left(\frac{383}{219}\right) = \left(\frac{164}{219}\right) = \left(\frac{4}{219}\right)\left(\frac{41}{219}\right) = \left(\frac{41}{219}\right)$.

$41 \equiv 1 \pmod{4}$, $219 \equiv 3 \pmod{4}$, so $\left(\frac{41}{219}\right) = -\left(\frac{219}{41}\right)$.

$219 \bmod 41 = 14$. So $\left(\frac{219}{41}\right) = \left(\frac{14}{41}\right) = \left(\frac{2}{41}\right)\left(\frac{7}{41}\right)$.

$\left(\frac{2}{41}\right) = 1$ since $41 \equiv 1 \pmod{8}$.

$7 \equiv 3 \pmod{4}$, $41 \equiv 1 \pmod{4}$, so $\left(\frac{7}{41}\right) = \left(\frac{41}{7}\right) = \left(\frac{6}{7}\right) = \left(\frac{2}{7}\right)\left(\frac{3}{7}\right)$.

$\left(\frac{2}{7}\right) = 1$ since $7 \equiv -1 \pmod{8}$.

$\left(\frac{3}{7}\right) = (-1)^{1 \cdot 3} \left(\frac{7}{3}\right) = -\left(\frac{1}{3}\right) = -1$.

Working back: $\left(\frac{7}{41}\right) = 1 \cdot (-1) = -1$. $\left(\frac{219}{41}\right) = 1 \cdot (-1) = -1$.
$\left(\frac{41}{219}\right) = -(-1) = 1$. $\left(\frac{383}{219}\right) = 1$.
$\left(\frac{219}{383}\right) = -(1) = -1$.

So $219$ is a QNR modulo $383$. $\blacksquare$

</details>

### 8.8 Applications of Quadratic Reciprocity

**Application (Solovay--Strassen primality test).** For an odd candidate $n$, choose random $a$ and
check whether $a^{(n-1)/2} \equiv \left(\frac{a}{n}\right) \pmod{n}$ (where the Jacobi symbol is used).
If $n$ is composite, at least half of all $a$ violate this. This gives a probabilistic primality test.

**Application (determining solvability).** Quadratic reciprocity allows efficient computation of
Legendre symbols without directly checking all residues, reducing an $O(p)$ problem to
$O(\log p)$ arithmetic operations.

### 8.9 Computing Square Roots Modulo p

When $a$ is a quadratic residue modulo an odd prime $p$, finding $x$ with $x^2 \equiv a \pmod{p}$
is the **square root problem modulo $p$**.

**Proposition 8.8.** When $p \equiv 3 \pmod{4}$, a square root of $a$ modulo $p$ (when $a$ is a QR) is
given by $x \equiv \pm a^{(p+1)/4} \pmod{p}$.

_Proof._ $(a^{(p+1)/4})^2 = a^{(p+1)/2} = a \cdot a^{(p-1)/2} \equiv a \cdot 1 = a \pmod{p}$ by
Euler's criterion. $\blacksquare$

**Problem.** Find a square root of $5$ modulo $29$.

<details>
<summary>Solution</summary>

First verify $5$ is a QR modulo $29$: $\left(\frac{5}{29}\right) = \left(\frac{29}{5}\right) = \left(\frac{4}{5}\right) = 1$. Yes.

Since $29 \equiv 1 \pmod{4}$, we cannot use the simple formula. We use a direct search among
the QRs modulo $29$. The squares modulo $29$ of $1, 2, \ldots, 14$ are:
$1, 4, 9, 16, 25, 36 \equiv 7, 49 \equiv 20, 64 \equiv 6, 81 \equiv 23, 100 \equiv 13$,
$121 \equiv 5, 144 \equiv 28, 169 \equiv 24, 196 \equiv 22$.

So $11^2 = 121 \equiv 5 \pmod{29}$. A square root of $5$ modulo $29$ is $x \equiv 11$ (and also $x \equiv 18$). $\blacksquare$

</details>

**Problem.** Find a square root of $7$ modulo $19$.

<details>
<summary>Solution</summary>

$19 \equiv 3 \pmod{4}$, so we can use the formula. First verify $7$ is a QR:
$\left(\frac{7}{19}\right) = (-1)^{\frac{7-1}{2} \cdot \frac{19-1}{2}} \left(\frac{19}{7}\right) = (-1)^{54} \left(\frac{5}{7}\right) = \left(\frac{5}{7}\right)$.
$\left(\frac{5}{7}\right) = (-1)^{2 \cdot 3} \left(\frac{7}{5}\right) = \left(\frac{2}{5}\right) = (-1)^{(25-1)/8} = (-1)^3 = -1$.

Wait, let me recompute. $\left(\frac{7}{19}\right)$: $7 \equiv 3 \pmod{4}$, $19 \equiv 3 \pmod{4}$, so
$\left(\frac{7}{19}\right) = -\left(\frac{19}{7}\right) = -\left(\frac{5}{7}\right)$. Now $5 \equiv 1 \pmod{4}$, $7 \equiv 3 \pmod{4}$,
so $\left(\frac{5}{7}\right) = -\left(\frac{7}{5}\right) = -\left(\frac{2}{5}\right) = -(-1) = 1$.
So $\left(\frac{7}{19}\right) = -1$. This means $7$ is a QNR modulo $19$, so no square root exists. $\blacksquare$

</details>

## 9. Continued Fractions

### 9.1 Simple Continued Fractions

A **simple continued fraction** is an expression of the form

$$a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + \cdots}}}$$

where $a_0 \in \mathbb{Z}$ and $a_1, a_2, \ldots \in \mathbb{N}$. We write
$[a_0; a_1, a_2, \ldots]$.

### 9.2 Computation

For an irrational number $\alpha$, the continued fraction expansion is computed recursively:

$a_0 = \lfloor \alpha \rfloor$, $\alpha_1 = 1/(\alpha - a_0)$, $a_1 = \lfloor \alpha_1 \rfloor$, and
so on.

**Example.**
$\sqrt{2} = 1 + (\sqrt{2} - 1) = 1 + \frac{1}{\sqrt{2} + 1} = 1 + \frac{1}{2 + (\sqrt{2} - 1)}$. So
$\sqrt{2} = [1; 2, 2, 2, \ldots] = [1; \overline{2}]$.

### 9.3 Convergents

The $n$-th **convergent** $p_n/q_n = [a_0; a_1, \ldots, a_n]$ is computed by:

$$p_{-1} = 1, \quad p_0 = a_0, \quad p_n = a_n p_{n-1} + p_{n-2}$$
$$q_{-1} = 0, \quad q_0 = 1, \quad q_n = a_n q_{n-1} + q_{n-2}$$

**Theorem 9.1.** $|p_n/q_n - \alpha| \lt{} 1/q_n^2$ for all $n$.

**Theorem 9.2 (Best Approximation).** If $|q\alpha - p| \lt{} |q_n \alpha - p_n|$ for
$q \lt{} q_{n+1}$, then $p/q = p_n/q_n$.

### 9.4 Periodic Continued Fractions

**Theorem 9.3 (Lagrange).** The continued fraction of $\alpha$ is periodic if and only if $\alpha$
is a quadratic irrational.

**Example.** The golden ratio
$\varphi = \frac{1 + \sqrt{5}}{2} = [1; 1, 1, 1, \ldots] = [1; \overline{1}]$.

### 9.5 More Computation Examples

**Problem.** Find the continued fraction expansion of $\sqrt{7}$.

<details>
<summary>Solution</summary>

$\sqrt{7} = 2 + (\sqrt{7} - 2)$, so $a_0 = 2$.

$\alpha_1 = \frac{1}{\sqrt{7} - 2} = \frac{\sqrt{7} + 2}{3}$. So $a_1 = 1$.

$\alpha_2 = \frac{3}{\sqrt{7} - 1} = \frac{\sqrt{7} + 1}{2}$. So $a_2 = 1$.

$\alpha_3 = \frac{2}{\sqrt{7} - 1} = \frac{\sqrt{7} + 1}{3}$. So $a_3 = 1$.

$\alpha_4 = \frac{3}{\sqrt{7} - 2} = \sqrt{7} + 2$. So $a_4 = 4$.

$\alpha_5 = \frac{1}{\sqrt{7} - 2} = \alpha_1$. The process repeats.

Therefore $\sqrt{7} = [2; \overline{1, 1, 1, 4}]$. $\blacksquare$

</details>

**Problem.** Compute the convergents of $[1; 1, 1, 1, 1]$ (the first five terms of $\varphi$).

<details>
<summary>Solution</summary>

$p_{-1} = 1$, $p_0 = 1$.
$q_{-1} = 0$, $q_0 = 1$.

$a_1 = 1$: $p_1 = 1 \cdot 1 + 1 = 2$, $q_1 = 1 \cdot 1 + 0 = 1$. Convergent: $2/1 = 2$.
$a_2 = 1$: $p_2 = 1 \cdot 2 + 1 = 3$, $q_2 = 1 \cdot 1 + 1 = 2$. Convergent: $3/2 = 1.5$.
$a_3 = 1$: $p_3 = 1 \cdot 3 + 2 = 5$, $q_3 = 1 \cdot 2 + 1 = 3$. Convergent: $5/3 \approx 1.667$.
$a_4 = 1$: $p_4 = 1 \cdot 5 + 3 = 8$, $q_4 = 1 \cdot 3 + 2 = 5$. Convergent: $8/5 = 1.6$.

These are ratios of consecutive Fibonacci numbers, converging to $\varphi \approx 1.618$. $\blacksquare$

</details>

**Problem.** Find the continued fraction expansion of the rational number $157/68$.

<details>
<summary>Solution</summary>

$157/68 = 2 + 21/68$, so $a_0 = 2$.
$68/21 = 3 + 5/21$, so $a_1 = 3$.
$21/5 = 4 + 1/5$, so $a_2 = 4$.
$5/1 = 5$, so $a_3 = 5$.

Therefore $157/68 = [2; 3, 4, 5]$.

Verification: $[2; 3, 4, 5] = 2 + \frac{1}{3 + \frac{1}{4 + 1/5}} = 2 + \frac{1}{3 + 5/21} = 2 + \frac{1}{68/21} = 2 + 21/68 = 157/68$. $\blacksquare$

</details>

### 9.6 Periodic Continued Fractions and Pell's Equation

The continued fraction expansion of $\sqrt{D}$ is closely connected to Pell's equation $x^2 - Dy^2 = 1$.

**Theorem 9.4.** If the continued fraction of $\sqrt{D}$ has period length $\ell$, then:

- If $\ell$ is even, the fundamental solution of $x^2 - Dy^2 = 1$ is $(p_{\ell-1}, q_{\ell-1})$.
- If $\ell$ is odd, the fundamental solution is $(p_{2\ell-1}, q_{2\ell-1})$.

### 9.7 Approximation Properties

**Theorem 9.5.** If $p/q$ is a convergent to $\alpha$, then

$$\left|\alpha - \frac{p}{q}\right| \lt{} \frac{1}{q^2}$$

Furthermore, if $|\alpha - p/q| \lt{} 1/(2q^2)$, then $p/q$ must be a convergent to $\alpha$.

**Proposition 9.6.** The convergents $p_n/q_n$ satisfy $q_n \geq F_{n+1}$ (the $(n+1)$-th Fibonacci
number), so the denominators grow at least exponentially.

### 9.8 Irrationality via Continued Fractions

**Theorem 9.7.** If $\alpha$ has an infinite continued fraction expansion, then $\alpha$ is irrational.

_Proof._ If $\alpha$ were rational, the Euclidean algorithm would terminate in finitely many
steps, producing a finite continued fraction. Contradiction. $\blacksquare$

**Proposition 9.8.** $e$ is irrational.

_Proof._ The continued fraction of $e$ is $[2; 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, 1, \ldots]$,
which has a regular but infinite pattern. By Theorem 9.7, $e$ is irrational. $\blacksquare$

## 10. Diophantine Equations

### 10.1 Linear Diophantine Equations

**Theorem 10.1.** The equation $ax + by = c$ has integer solutions if and only if
$\gcd(a, b) \mid c$.

_Proof._ This follows directly from Bézout's identity. $\blacksquare$

**Proposition 10.1a.** If $d = \gcd(a, b)$ and $(x_0, y_0)$ is a particular solution of $ax + by = c$,
then all integer solutions are given by

$$x = x_0 + \frac{b}{d} \cdot t, \quad y = y_0 - \frac{a}{d} \cdot t, \quad t \in \mathbb{Z}$$

**Problem.** Find all integer solutions to $15x + 21y = 12$.

<details>
<summary>Solution</summary>

$d = \gcd(15, 21) = 3$ and $3 \mid 12$, so solutions exist. Divide through by $3$: $5x + 7y = 4$.

Using the extended Euclidean algorithm: $7 = 1 \cdot 5 + 2$, $5 = 2 \cdot 2 + 1$. So
$1 = 5 - 2 \cdot 2 = 5 - 2(7 - 5) = 3 \cdot 5 - 2 \cdot 7$.

Thus $5(3) + 7(-2) = 1$, and $5(12) + 7(-8) = 4$. A particular solution: $(x_0, y_0) = (12, -8)$.

All solutions: $x = 12 + 7t$, $y = -8 - 5t$, for $t \in \mathbb{Z}$. $\blacksquare$

</details>

### 10.2 Pythagorean Triples

**Theorem 10.2.** All primitive Pythagorean triples $(a, b, c)$ (with $\gcd(a, b, c) = 1$ and
$a^2 + b^2 = c^2$) are given by

$$a = m^2 - n^2, \quad b = 2mn, \quad c = m^2 + n^2$$

where $m > n > 0$, $\gcd(m, n) = 1$, and $m \not\equiv n \pmod{2}$.

_Proof._ Without loss, $a$ is odd and $b$ is even. From $a^2 = c^2 - b^2 = (c-b)(c+b)$. Setting
$m = (c + a)/2$ and $n = (c - a)/2$ yields the parameterization. $\blacksquare$

**Proposition 10.2a.** The number of primitive Pythagorean triples with hypotenuse $\leq N$ is
asymptotically $\frac{N}{2\pi}$.

**Problem.** Find all primitive Pythagorean triples with $c \leq 50$.

<details>
<summary>Solution</summary>

We need $m > n > 0$, $\gcd(m, n) = 1$, $m \not\equiv n \pmod{2}$, and $c = m^2 + n^2 \leq 50$.

Try $m$ values: $m^2 \leq 49$, so $m \leq 7$.

$m = 2$: $n = 1$: $(3, 4, 5)$.
$m = 3$: $n = 2$: $(5, 12, 13)$.
$m = 4$: $n = 1$: $(15, 8, 17)$. $n = 3$: $\gcd(4,3) = 1$, $(7, 24, 25)$.
$m = 5$: $n = 2$: $(21, 20, 29)$. $n = 4$: $(9, 40, 41)$.
$m = 6$: $n = 1$: $\gcd(6,1) = 1$, $(35, 12, 37)$. $n = 5$: $(11, 60, 61)$ but $c > 50$.
$m = 7$: $n = 2$: $(45, 28, 53)$ but $c > 50$. $n = 4$: $(33, 56, 65)$ but $c > 50$.
$n = 6$: $\gcd(7,6) = 1$, $(13, 84, 85)$ but $c > 50$.

Primitive triples with $c \leq 50$: $(3,4,5)$, $(5,12,13)$, $(15,8,17)$, $(7,24,25)$, $(21,20,29)$, $(9,40,41)$, $(35,12,37)$. $\blacksquare$

</details>

### 10.3 Pell's Equation

**Theorem 10.3.** The equation $x^2 - Dy^2 = 1$ (where $D$ is not a perfect square) always has
non-trivial integer solutions. If $(x_1, y_1)$ is the smallest positive solution, then all solutions
are given by $(x_n + y_n\sqrt{D}) = (x_1 + y_1\sqrt{D})^n$.

_Proof._ The existence of a non-trivial solution follows from Dirichlet's unit theorem applied to
$\mathbb{Z}[\sqrt{D}]$. The general solution follows from the fact that the group of units of norm
$1$ in $\mathbb{Z}[\sqrt{D}]$ is cyclic and generated by the fundamental unit. $\blacksquare$

**Problem.** Find all solutions to $x^2 - 2y^2 = 1$.

<details>
<summary>Solution</summary>

The continued fraction of $\sqrt{2} = [1; \overline{2}]$ has period $\ell = 1$ (odd).
The first convergent after $p_0/q_0 = 1/1$ is $p_1/q_1 = 3/2$. Check: $3^2 - 2 \cdot 2^2 = 9 - 8 = 1$.

The fundamental solution is $(x_1, y_1) = (3, 2)$. All solutions are given by
$(3 + 2\sqrt{2})^n = x_n + y_n\sqrt{2}$.

$n = 1$: $(3, 2)$. $n = 2$: $(17, 12)$. $n = 3$: $(99, 70)$. $n = 4$: $(577, 408)$. $\blacksquare$

</details>

**Problem.** Find the fundamental solution to $x^2 - 3y^2 = 1$.

<details>
<summary>Solution</summary>

$\sqrt{3} = [1; \overline{1, 2}]$, period $\ell = 2$ (even).

Convergents: $p_0/q_0 = 1/1$, $p_1/q_1 = 2/1$.
$a_2 = 2$: $p_2 = 2 \cdot 2 + 1 = 5$, $q_2 = 2 \cdot 1 + 1 = 3$.

Since $\ell = 2$ is even, the fundamental solution is $(p_{\ell-1}, q_{\ell-1}) = (p_1, q_1) = (2, 1)$.

Check: $2^2 - 3 \cdot 1^2 = 4 - 3 = 1$. Confirmed.

All solutions: $(2 + \sqrt{3})^n = x_n + y_n\sqrt{3}$.
$n = 1$: $(2, 1)$. $n = 2$: $(7, 4)$. $n = 3$: $(26, 15)$. $n = 4$: $(97, 56)$. $\blacksquare$

</details>

### 10.4 The Method of Descent

**Theorem 10.4.** The equation $x^4 + y^4 = z^2$ has no non-trivial integer solutions.

_Proof (sketch)._ Assume a minimal solution $(x, y, z)$ with $z > 0$ minimal. Then $(x^2, y^2, z)$
is a Pythagorean triple. Using the parameterization of Pythagorean triples and infinite descent, one
constructs a smaller solution, contradicting minimality. $\blacksquare$

**Corollary 10.5.** The equation $x^4 + y^4 = z^4$ has no non-trivial integer solutions (this is
Fermat's last theorem for $n = 4$).

### 10.5 The Generalized Riemann Hypothesis

**Conjecture (Generalized Riemann Hypothesis).** All non-trivial zeros of the Dirichlet $L$-function
$L(s, \chi)$ for any Dirichlet character $\chi$ lie on the line $\mathrm{Re}(s) = 1/2$.

This is one of the most important open problems in mathematics. It has profound implications for the
distribution of primes in arithmetic progressions and the error terms in various number-theoretic
estimates.

## 11. Algebraic Number Theory: Gaussian Integers

### 11.1 The Gaussian Integers

**Definition.** The **Gaussian integers** are $\mathbb{Z}[i] = \\{a + bi : a, b \in \mathbb{Z}\\}$,
where $i = \sqrt{-1}$. They form a commutative ring with unity under the usual addition and
multiplication of complex numbers.

### 11.2 Norm and Units

The **norm** of $\alpha = a + bi \in \mathbb{Z}[i]$ is
$N(\alpha) = a^2 + b^2 = \alpha \bar{\alpha}$.

**Proposition 11.1.** $N(\alpha\beta) = N(\alpha)N(\beta)$.

**Proposition 11.2.** The units of $\mathbb{Z}[i]$ are $\\{1, -1, i, -i\\}$ (exactly those with norm
$1$).

### 11.3 Primes in Gaussian Integers

**Theorem 11.3.** An element $\pi \in \mathbb{Z}[i]$ is prime if and only if one of the following
holds:

1. $\pi = u(1 + i)$ for some unit $u$ (up to associates, $\pi = 1 + i$, with norm $2$).
2. $\pi = u(a + bi)$ where $a^2 + b^2 = p$ for a prime $p \equiv 1 \pmod{4}$.
3. $\pi = up$ where $p \equiv 3 \pmod{4}$ is a prime in $\mathbb{Z}$.

_Proof._ If $N(\pi) = p$ where $p \equiv 1 \pmod{4}$ is prime, then $\pi$ is Gaussian prime. If
$p \equiv 3 \pmod{4}$, then $p$ is Gaussian prime (since $p = (a + bi)(c + di)$ would give
$p^2 = N(p) = (a^2 + b^2)(c^2 + d^2)$, forcing one factor to have norm $1$, a unit). The prime
$2 = (1 + i)(1 - i) = (1+i)^2 \cdot (-i)$, so $1 + i$ is Gaussian prime with norm $2$.
$\blacksquare$

**Corollary 11.4 (Fermat's Theorem on Sums of Two Squares).** A prime $p$ can be written as a sum of
two squares if and only if $p = 2$ or $p \equiv 1 \pmod{4}$.

_Proof._ For $p \equiv 1 \pmod{4}$: by quadratic reciprocity, $-1$ is a QR mod $p$, so
$a^2 \equiv -1 \pmod{p}$ for some $a$. Then $p \mid (a^2 + 1) = (a + i)(a - i)$ in $\mathbb{Z}[i]$.
If $p$ were prime in $\mathbb{Z}[i]$, it would divide $a + i$ or $a - i$, but neither quotient is in
$\mathbb{Z}[i]$. So $p = \alpha\beta$ with neither a unit, giving $p^2 = N(p) = N(\alpha)N(\beta)$,
so $N(\alpha) = N(\beta) = p$, i.e., $p = a^2 + b^2$. $\blacksquare$

### 11.4 The Gaussian Integers Form a UFD

**Theorem 11.5.** $\mathbb{Z}[i]$ is a Euclidean domain (with norm as the Euclidean function), hence
a PID, hence a UFD.

_Proof._ For $\alpha, \beta \in \mathbb{Z}[i]$ with $\beta \neq 0$, write $\alpha/\beta = s + ti$
with $s, t \in \mathbb{Q}$. Choose $m, n \in \mathbb{Z}$ with $|s - m| \leq 1/2$ and
$|t - n| \leq 1/2$. Set $q = m + ni$ and $r = \alpha - \beta q$. Then $r \in \mathbb{Z}[i]$ and
$N(r) = N(\beta) \cdot N(\alpha/\beta - q) = N(\beta)((s-m)^2 + (t-n)^2) \leq N(\beta) \cdot 1/2 \lt{} N(\beta)$.
So $\mathbb{Z}[i]$ is Euclidean. $\blacksquare$

### 11.5 Worked Example

**Problem.** Factor $5$ in $\mathbb{Z}[i]$.

_Solution._ $N(5) = 25$. We need $a^2 + b^2 = 5$, which gives $(a, b) = (1, 2)$ or $(2, 1)$. So
$5 = (1 + 2i)(1 - 2i) = (2 + i)(2 - i)$. Note that $1 + 2i$ and $2 - i$ differ by a unit:
$1 + 2i = -i(2 - i)$. So up to associates, $5 = (2 + i)(2 - i)$. $\blacksquare$

**Problem.** Factor $13$ in $\mathbb{Z}[i]$ and verify that $13 = a^2 + b^2$.

<details>
<summary>Solution</summary>

Since $13 \equiv 1 \pmod{4}$, it factors in $\mathbb{Z}[i]$. We need $a^2 + b^2 = 13$ with
$a, b \in \mathbb{Z}$. Trying: $a^2 \leq 13$, so $a \in \\{0, 1, 2, 3\\}$.
$a = 2$: $b^2 = 9$, $b = 3$. So $13 = 2^2 + 3^2 = (2 + 3i)(2 - 3i)$.

Verification: $(2 + 3i)(2 - 3i) = 4 + 9 = 13$. Both $2 + 3i$ and $2 - 3i$ are Gaussian primes
since $N(2 + 3i) = 13$ is prime. $\blacksquare$

</details>

### 11.6 Associates and Irreducibility

**Definition.** Two Gaussian integers $\alpha, \beta$ are **associates** if $\alpha = u\beta$ for some
unit $u \in \\{1, -1, i, -i\\}$. Associates have the same norm.

**Proposition 11.6.** A Gaussian integer $\alpha$ is irreducible if and only if $N(\alpha)$ is either
a prime in $\mathbb{Z}$ or the square of a prime in $\mathbb{Z}$.

_Proof._ If $N(\alpha) = p$ (prime in $\mathbb{Z}$) and $\alpha = \beta\gamma$, then
$N(\alpha) = N(\beta)N(\gamma) = p$, so one of $N(\beta), N(\gamma)$ equals $1$, making that
factor a unit. Conversely, if $\alpha$ is irreducible, then $N(\alpha)$ has no nontrivial
factorizations compatible with factorizations of $\alpha$. $\blacksquare$

**Problem.** Determine whether the following Gaussian integers are irreducible:
$3 + 4i$, $6 + 7i$, $2 + 5i$.

<details>
<summary>Solution</summary>

$3 + 4i$: $N(3 + 4i) = 9 + 16 = 25 = 5^2$. This is a square of a prime, so $3 + 4i$ may or may
not be irreducible. In fact, $(2+i)^2 = 4 + 4i + i^2 = 3 + 4i$, so $3 + 4i$ is **reducible**.

$6 + 7i$: $N(6 + 7i) = 36 + 49 = 85 = 5 \cdot 17$. Neither $5$ nor $17$ is a square of a prime,
and $N(6 + 7i)$ is not prime. We check if $6 + 7i$ has a proper factor. If $6 + 7i = (a + bi)(c + di)$
with $N(a + bi) = 5$, then $a^2 + b^2 = 5$, giving $(a, b) = (1, 2)$ or $(2, 1)$. Check:
$(1 + 2i)(2 + 3i) = 2 + 3i + 4i + 6i^2 = -4 + 7i \neq 6 + 7i$. $(1+2i)(3+2i) = 3 + 2i + 6i + 4i^2 = -1 + 8i$.
$(2+i)(3+4i) = 6 + 8i + 3i + 4i^2 = 2 + 11i$. $(2+i)(4+3i) = 8 + 6i + 4i + 3i^2 = 5 + 10i$.
$(1+2i)(4+3i) = 4 + 3i + 8i + 6i^2 = -2 + 11i$. None match, so $6 + 7i$ is **irreducible**.

$2 + 5i$: $N(2 + 5i) = 4 + 25 = 29$, which is prime. So $2 + 5i$ is **irreducible**. $\blacksquare$

</details>

### 11.7 Division in Gaussian Integers

**Proposition 11.7.** If $\alpha, \beta \in \mathbb{Z}[i]$ with $\beta \neq 0$, then there exist
$\kappa, \rho \in \mathbb{Z}[i]$ such that $\alpha = \beta\kappa + \rho$ with $N(\rho) \lt{} N(\beta)$.

This is the Euclidean algorithm for $\mathbb{Z}[i]$ (proved in Theorem 11.5).

**Problem.** Divide $11 + 3i$ by $4 - i$ in $\mathbb{Z}[i]$, finding quotient and remainder.

<details>
<summary>Solution</summary>

$\frac{11 + 3i}{4 - i} = \frac{(11 + 3i)(4 + i)}{(4 - i)(4 + i)} = \frac{44 + 11i + 12i + 3i^2}{17} = \frac{41 + 23i}{17} = \frac{41}{17} + \frac{23}{17}i$.

Round: $\kappa = 2 + 1i = 2 + i$.

$\rho = (11 + 3i) - (4 - i)(2 + i) = (11 + 3i) - (8 + 4i - 2i - i^2) = (11 + 3i) - (9 + 2i) = 2 + i$.

Check: $N(\rho) = N(2 + i) = 5 \lt{} N(4 - i) = 17$. $\blacksquare$

</details>

## 12. Arithmetic Functions

### 12.1 Multiplicative Functions

**Definition.** An arithmetic function $f \colon \mathbb{N} \to \mathbb{C}$ is **multiplicative** if
$f(mn) = f(m)f(n)$ whenever $\gcd(m, n) = 1$. It is **completely multiplicative** if
$f(mn) = f(m)f(n)$ for all $m, n$.

**Proposition 12.1.** If $f$ is multiplicative and $n = p_1^{a_1} \cdots p_k^{a_k}$, then
$f(n) = f(p_1^{a_1}) \cdots f(p_k^{a_k})$.

**Example.** $\phi(n)$ is multiplicative (but not completely multiplicative).
$\phi(6) = 2 \neq \phi(2)\phi(2) = 1$.

### 12.2 The Sum-of-Divisors Function

**Definition.** $\sigma(n) = \sum_{d \mid n} d$ (the sum of all positive divisors of $n$).
$\tau(n) = \sum_{d \mid n} 1$ (the number of positive divisors of $n$).

**Proposition 12.2.** If $n = p_1^{a_1} \cdots p_k^{a_k}$, then

$$\sigma(n) = \prod_{i=1}^k \frac{p_i^{a_i + 1} - 1}{p_i - 1}, \quad \tau(n) = \prod_{i=1}^k (a_i + 1)$$

_Proof._ Both $\sigma$ and $\tau$ are multiplicative (since the divisor structure of $mn$ with
$\gcd(m,n) = 1$ factors as the product of the divisor structures of $m$ and $n$). So it suffices
to verify the formula for prime powers. For $n = p^a$: the divisors are $1, p, p^2, \ldots, p^a$, giving

$$\sigma(p^a) = 1 + p + p^2 + \cdots + p^a = \frac{p^{a+1} - 1}{p - 1}, \quad \tau(p^a) = a + 1$$

The general formula follows from multiplicativity. $\blacksquare$

**Definition.** $n$ is **perfect** if $\sigma(n) = 2n$.

**Theorem 12.3 (Euclid--Euler).** An even number $n$ is perfect if and only if $n = 2^{p-1}(2^p - 1)$
where $2^p - 1$ is a Mersenne prime.

_Proof._ If $n = 2^{p-1}(2^p - 1)$ with $2^p - 1$ prime, then
$\sigma(n) = \sigma(2^{p-1})\sigma(2^p - 1) = (2^p - 1) \cdot 2^p = 2n$. Conversely, if $n$ is even
and perfect, write $n = 2^{p-1}m$ with $m$ odd. Then $\sigma(n) = (2^p - 1)\sigma(m) = 2^p m$, so
$\sigma(m) = 2^p m / (2^p - 1)$. Since $\sigma(m)$ must be an integer,
$(2^p - 1) \mid m$. Write $m = (2^p - 1)q$. Then $\sigma(m) = 2^p q$, but also
$\sigma(m) \geq m + 1 = (2^p - 1)q + 1$. If $q > 1$, then $\sigma(m) \geq m + 1 + q > 2^p q$,
contradiction. So $q = 1$ and $m = 2^p - 1$ is prime. $\blacksquare$

### 12.3 The Möbius Function

**Definition.** The **Möbius function** $\mu \colon \mathbb{N} \to \\{-1, 0, 1\\}$ is defined by:

- $\mu(1) = 1$.
- $\mu(n) = 0$ if $n$ is divisible by a square of a prime ($n$ is not **squarefree**).
- $\mu(n) = (-1)^k$ if $n$ is a product of $k$ **distinct** primes.

**Proposition 12.4 (Properties of $\mu$).**

1. $\mu$ is multiplicative: if $\gcd(m, n) = 1$, then $\mu(mn) = \mu(m)\mu(n)$.
2. $\sum_{d \mid n} \mu(d) = 1$ if $n = 1$ and $0$ if $n > 1$.

_Proof of (2)._ If $n = 1$: $\sum_{d \mid 1} \mu(d) = \mu(1) = 1$. If $n > 1$, write
$n = p_1^{a_1} \cdots p_k^{a_k}$. By multiplicativity,
$\sum_{d \mid n} \mu(d) = \prod_{i=1}^k \sum_{j=0}^{a_i} \mu(p_i^j)$.
For each factor: $\sum_{j=0}^{a_i} \mu(p_i^j) = \mu(1) + \mu(p_i) + \mu(p_i^2) + \cdots = 1 + (-1) + 0 + \cdots = 0$
since $a_i \geq 1$. $\blacksquare$

### 12.4 Dirichlet Convolution

**Definition.** The **Dirichlet convolution** of two arithmetic functions $f$ and $g$ is

$$(f * g)(n) = \sum_{d \mid n} f(d) \cdot g\!\left(\frac{n}{d}\right)$$

**Proposition 12.5 (Properties of Dirichlet convolution).**

1. **Commutativity:** $f * g = g * f$.
2. **Associativity:** $(f * g) * h = f * (g * h)$.
3. **Identity element:** The function $\varepsilon(n) = \begin{cases} 1 & n = 1 \\ 0 & n > 1 \end{cases}$ satisfies $f * \varepsilon = f$.
4. **Möbius inversion:** $\mu$ is the convolution inverse of $\mathbf{1}$ (where $\mathbf{1}(n) = 1$ for all $n$), i.e., $\mathbf{1} * \mu = \varepsilon$.

_Proof of (1)._ $(f * g)(n) = \sum_{d \mid n} f(d)g(n/d)$. Setting $e = n/d$, this equals
$\sum_{e \mid n} f(n/e)g(e) = (g * f)(n)$. $\blacksquare$

### 12.5 Möbius Inversion

**Theorem 12.6 (Möbius Inversion).** If $f(n) = \sum_{d \mid n} g(d)$ for all $n \geq 1$, then

$$g(n) = \sum_{d \mid n} \mu(d) f(n/d)$$

_Proof._ In terms of Dirichlet convolution: $f = g * \mathbf{1}$, so
$f * \mu = (g * \mathbf{1}) * \mu = g * (\mathbf{1} * \mu) = g * \varepsilon = g$. The explicit form
follows by writing out the convolution:
$\sum_{d \mid n} \mu(d) f(n/d) = \sum_{d \mid n} \mu(d) \sum_{e \mid (n/d)} g(e) = \sum_{e \mid n} g(e) \sum_{d \mid (n/e)} \mu(d)$.
The inner sum is $1$ if $e = n$ and $0$ otherwise, so only $g(n)$ remains. $\blacksquare$

### 12.6 Euler's Totient Summation Formula

**Proposition 12.7.** $\sum_{k=1}^{n} \phi(k) = \frac{3}{\pi^2} n^2 + O(n \log n)$.

_Intuition._ The probability that two random integers are coprime is $1/\zeta(2) = 6/\pi^2$. The
number of pairs $(a, b)$ with $1 \leq a \leq b \leq n$ and $\gcd(a, b) = 1$ is
$\sum_{b=1}^n \phi(b)$, which should be approximately $\frac{1}{2} \cdot \frac{6}{\pi^2} n^2 = \frac{3}{\pi^2}n^2$.

### 12.7 Worked Examples

**Problem.** Express $\sum_{d \mid n} \phi(d)$ in closed form.

_Solution._ Let $f(n) = \sum_{d \mid n} \phi(d)$. We claim $f(n) = n$.

Since $\phi$ is multiplicative, $f$ is multiplicative. For $n = p^a$:

$f(p^a) = \sum_{j=0}^a \phi(p^j) = \phi(1) + \phi(p) + \cdots + \phi(p^a) = 1 + (p - 1) + (p^2 - p) + \cdots + (p^a - p^{a-1}) = p^a$.

So $f(n) = n$. This can also be proved directly: the integers $1, 2, \ldots, n$ are partitioned by
their gcd with $n$, and the number with $\gcd(k, n) = d$ is $\phi(n/d)$. $\blacksquare$

**Problem.** Use Möbius inversion to find a formula for $\phi(n)$ in terms of the divisors of $n$.

<details>
<summary>Solution</summary>

We know $\sum_{d \mid n} \phi(d) = n$. By Möbius inversion:

$$\phi(n) = \sum_{d \mid n} \mu(d) \cdot \frac{n}{d} = n \sum_{d \mid n} \frac{\mu(d)}{d} = n \prod_{p \mid n}\left(1 - \frac{1}{p}\right)$$

The last equality uses the multiplicative property of $\mu$: the sum $\sum_{d \mid n} \mu(d)/d$ factors
over prime powers as $\prod_{p \mid n} (1 - 1/p)$. $\blacksquare$

</details>

**Problem.** Compute $\sum_{d \mid 60} \mu(d) \cdot \sigma(60/d)$.

<details>
<summary>Solution</summary>

$60 = 2^2 \cdot 3 \cdot 5$. The divisors of $60$ are
$\\{1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60\\}$.

$\mu$ is nonzero only for squarefree divisors:
$\mu(1) = 1$, $\mu(2) = -1$, $\mu(3) = -1$, $\mu(5) = -1$, $\mu(6) = 1$, $\mu(10) = 1$, $\mu(15) = 1$, $\mu(30) = -1$.

$\sigma(60) = 168$, $\sigma(30) = 72$, $\sigma(20) = 42$, $\sigma(15) = 24$,
$\sigma(12) = 28$, $\sigma(10) = 18$, $\sigma(6) = 12$, $\sigma(1) = 1$.

$\sum_{d \mid 60} \mu(d)\sigma(60/d) = 1 \cdot 168 + (-1) \cdot 72 + (-1) \cdot 42 + (-1) \cdot 24 + 1 \cdot 28 + 1 \cdot 18 + 1 \cdot 12 + (-1) \cdot 1 = 168 - 72 - 42 - 24 + 28 + 18 + 12 - 1 = 87$.

This computes the Dirichlet convolution $(\mu * \sigma)(60)$. $\blacksquare$

</details>

### 12.8 Perfect Numbers and Amicable Numbers

**Definition.** Two positive integers $m$ and $n$ are **amicable** (or **friendly**) if
$\sigma(m) = \sigma(n) = m + n$. The pair $(m, n)$ is called an **amicable pair**.

**Example.** $(220, 284)$ is the smallest amicable pair:
$\sigma(220) = \sigma(2^2)\sigma(5)\sigma(11) = 7 \cdot 6 \cdot 12 = 504 = 220 + 284$.
$\sigma(284) = \sigma(4)\sigma(71) = 7 \cdot 72 = 504 = 220 + 284$.

**Proposition 12.9.** If $m$ and $n$ form an amicable pair, then $\frac{\sigma(m)}{m} = \frac{\sigma(n)}{n}$.

**Problem.** Show that $(1184, 1210)$ is an amicable pair.

<details>
<summary>Solution</summary>

$1184 = 2^5 \cdot 37$. $\sigma(1184) = \sigma(32)\sigma(37) = 63 \cdot 38 = 2394$.
$1210 = 2 \cdot 5 \cdot 11^2$. $\sigma(1210) = \sigma(2)\sigma(5)\sigma(121) = 3 \cdot 6 \cdot 133 = 2394$.

$1184 + 1210 = 2394 = \sigma(1184) = \sigma(1210)$. Confirmed: $(1184, 1210)$ is amicable. $\blacksquare$

</details>

### 12.9 Ramanujan's Tau Function

**Definition.** **Ramanujan's tau function** $\tau(n)$ (not to be confused with the divisor-counting
function) is defined by the identity

$$\sum_{n=1}^{\infty} \tau(n) q^n = q \prod_{n=1}^{\infty}(1 - q^n)^{24}$$

**Proposition 12.10 (Ramanujan's congruences).** For all $n \geq 1$:

1. $\tau(5n) \equiv \tau(n) \pmod{5}$
2. $\tau(7n) \equiv \tau(n) \pmod{7}$
3. $\tau(11n) \equiv \tau(n) \pmod{11}$

These congruences were conjectured by Ramanujan in 1916 and proved by Mordell in 1917. They
were later explained by Deligne's proof of the Weil conjectures.

## 13. Additional Topics

### 13.1 Wilson's Theorem

**Theorem 13.1 (Wilson's Theorem).** $p$ is prime if and only if $(p - 1)! \equiv -1 \pmod{p}$.

_Proof._ If $p$ is prime: in $\mathbb{Z}/p\mathbb{Z}$, each element pairs with its inverse. The only
self-inverse elements are $1$ and $p - 1$. So $(p-1)! \equiv 1 \cdot (p-1) \equiv -1 \pmod{p}$.
Conversely, if $n$ is composite and $n > 4$, then $(n-1)! \equiv 0 \pmod{n}$ since $n$ has a proper
factor appearing in $(n-1)!$. $\blacksquare$

### 13.2 The Ring $\mathbb{Z}/n\mathbb{Z}$

**Theorem 13.2.** The ring $\mathbb{Z}/n\mathbb{Z}$ is a field if and only if $n$ is prime.

**Proposition 13.3.** $(\mathbb{Z}/n\mathbb{Z})^*$ has order $\phi(n)$ and is a group under
multiplication.

### 13.3 Dirichlet's Theorem on Primes in Arithmetic Progressions

**Theorem 13.4 (Dirichlet).** If $\gcd(a, m) = 1$, then there are infinitely many primes of the form
$a + km$ ($k \geq 0$).

_Proof (sketch)._ Dirichlet introduced $L$-functions $L(s, \chi) = \sum_{n=1}^{\infty} \chi(n)/n^s$
where $\chi$ is a Dirichlet character mod $m$. The key steps are:

1. $L(s, \chi_0)$ has a simple pole at $s = 1$ (where $\chi_0$ is the principal character).
2. $L(1, \chi) \neq 0$ for non-principal characters $\chi$.
3. $\log L(s, \chi_0) = \sum_p \log(1 - \chi_0(p)/p^s)^{-1} = \sum_p \sum_{k \geq 1} \chi_0(p^k)/(kp^{ks})$.
4. Combining over all characters: $\sum_\chi \log L(s, \chi)$ diverges as $s \to 1^+$, and the
   contribution from $\chi_0$ captures primes $p \equiv a \pmod{m}$.

$\blacksquare$

### 13.4 The Frobenius Coin Problem

**Theorem 13.5 (Frobenius).** If $\gcd(a, b) = 1$ and $a, b$ are positive, then the largest integer
that cannot be expressed as $ax + by$ with $x, y \geq 0$ is $ab - a - b$.

_Proof._ First, we show every integer $n \geq ab$ can be written as $ax + by$ with $x, y \geq 0$.
Since $\gcd(a, b) = 1$, the set $\\{0, a, 2a, \ldots, (b-1)a\\}$ is a complete residue system modulo $b$.
So for any $n \geq 0$, there exists $x$ with $0 \leq x \leq b - 1$ and $ax \equiv n \pmod{b}$, meaning
$n - ax = by$ for some integer $y$. When $n \geq (b-1)a$, we have $by = n - ax \geq 0$, so $y \geq 0$.
Thus all $n \geq (b-1)a = ab - a$ are representable.

To show $ab - a - b$ is not representable: if $ab - a - b = ax + by$ with $x, y \geq 0$, then
$ab = a(x+1) + b(y+1)$, so $b \mid a(x+1)$, hence $b \mid (x+1)$ (since $\gcd(a,b) = 1$). So
$x + 1 \geq b$, giving $ax \geq a(b-1) = ab - a$. Then $by = ab - a - b - ax \leq ab - a - b - (ab - a) = -b \lt{} 0$,
contradicting $y \geq 0$. $\blacksquare$

**Problem.** What is the largest amount of postage that cannot be made using 6-cent and 11-cent stamps?

<details>
<summary>Solution</summary>

$\gcd(6, 11) = 1$. By the Frobenius theorem, the largest non-representable amount is
$6 \cdot 11 - 6 - 11 = 66 - 17 = 49$ cents.

Verification: $49 = 6x + 11y$ requires $y$ odd (since $49 - 11y$ must be even). $y = 1$: $38/6$ (no).
$y = 3$: $16/6$ (no). $y = 5$: $-6/6$ (negative). So $49$ is indeed not representable.

$50 = 6 \cdot 4 + 11 \cdot 2$, $51 = 6 \cdot 5 + 11 \cdot 1$, $52 = 6 \cdot 7 + 11 \cdot 0$. All
values $50$ and above are representable. $\blacksquare$

</details>

### 13.5 The Carmichael Function

**Definition.** The **Carmichael function** $\lambda(n)$ is the smallest positive integer such that
$a^{\lambda(n)} \equiv 1 \pmod{n}$ for all $a$ with $\gcd(a, n) = 1$.

For $n = p_1^{a_1} \cdots p_k^{a_k}$:

$$\lambda(n) = \mathrm{lcm}\!\left(\lambda(p_1^{a_1}), \ldots, \lambda(p_k^{a_k})\right)$$

where $\lambda(2) = 1$, $\lambda(4) = 2$, $\lambda(2^k) = 2^{k-2}$ for $k \geq 3$, and
$\lambda(p^k) = (p-1)p^{k-1}$ for odd primes $p$.

**Proposition 13.6.** $\lambda(n) \mid \phi(n)$ for all $n \geq 1$, and $\lambda(n) = \phi(n)$ precisely
when $n = 1, 2, 4$, $n = p^k$, or $n = 2p^k$ (where $p$ is an odd prime).

_Intuition._ The Carmichael function gives the **exponent** of the group $(\mathbb{Z}/n\mathbb{Z})^*$,
which equals the lcm of the orders of all elements. Euler's totient $\phi(n)$ gives the order of
the group. The exponent always divides the order, with equality exactly when the group is cyclic
(i.e., when a primitive root exists).

**Theorem 13.7 (Korselt's Criterion).** $n$ is a **Carmichael number** (composite $n$ with
$a^{n-1} \equiv 1 \pmod{n}$ for all $\gcd(a, n) = 1$) if and only if:

1. $n$ is squarefree, and
2. for every prime $p \mid n$, $(p - 1) \mid (n - 1)$.

_Proof._ If $n$ is squarefree with $n = p_1 \cdots p_k$, then $\lambda(n) = \mathrm{lcm}(p_1 - 1, \ldots, p_k - 1)$.
We need $\lambda(n) \mid (n - 1)$, which is equivalent to each $(p_i - 1) \mid (n - 1)$.
$\blacksquare$

**Example.** $561 = 3 \cdot 11 \cdot 17$. Check: $3 - 1 = 2 \mid 560$, $11 - 1 = 10 \mid 560$,
$17 - 1 = 16 \mid 560$. So $561$ is a Carmichael number (the smallest).

### 13.6 Sophie Germain Primes

**Definition.** A prime $p$ is a **Sophie Germain prime** if $2p + 1$ is also prime. The prime
$q = 2p + 1$ is called a **safe prime**.

Sophie Germain primes arise naturally in the study of Fermat's last theorem: if $p$ is a Sophie
Germain prime, then there are no non-zero integer solutions to $x^p + y^p = z^p$ with
$p \nmid xyz$ (this was proved by Sophie Germain).

**Proposition 13.8.** If $q = 2p + 1$ is a safe prime and $a$ is a quadratic residue modulo $q$,
then $a^p \equiv 1 \pmod{q}$.

_Proof._ By Euler's criterion, $a^{(q-1)/2} = a^p \equiv 1 \pmod{q}$. $\blacksquare$

The first few Sophie Germain primes are: $2, 3, 5, 11, 23, 29, 41, 53, 83, 89, 113, \ldots$
It is conjectured (but not proved) that there are infinitely many Sophie Germain primes.

### 13.7 Mersenne and Fermat Primes

**Definition.** A **Mersenne prime** is a prime of the form $M_p = 2^p - 1$ where $p$ is prime.
A **Fermat prime** is a prime of the form $F_n = 2^{2^n} + 1$.

**Proposition 13.9.** If $2^p - 1$ is prime, then $p$ is prime.

_Proof._ If $p = ab$ with $a, b > 1$, then $2^p - 1 = (2^a)^b - 1 = (2^a - 1)(2^{a(b-1)} + \cdots + 2^a + 1)$,
which is composite. $\blacksquare$

**Proposition 13.10.** If $2^{2^n} + 1$ is prime, then $n$ is a power of $2$.

_Proof._ If $n = ab$ with $b$ odd, then $2^{2^n} + 1 = (2^{2^a})^{2^{n-a}} + 1$, and we can factor
$x^{2^k} + 1 = (x^{2^{k-1}} + 1)^2 - 2x^{2^{k-1}}$, which allows induction. $\blacksquare$

The known Fermat primes are $F_0 = 3$, $F_1 = 5$, $F_2 = 17$, $F_3 = 257$, $F_4 = 65537$.
No others are known, and it is conjectured that these are the only ones.

## 14. Additional Results

### 14.1 Fermat's Last Theorem

**Theorem 14.1 (Wiles, 1995).** For $n \geq 3$, the equation $x^n + y^n = z^n$ has no non-zero
integer solutions.

The proof is far beyond our scope, using deep results from algebraic geometry (elliptic curves,
modular forms, Galois representations).

### 14.1a The Twin Prime Conjecture

**Conjecture (Twin Prime Conjecture).** There are infinitely many primes $p$ such that $p + 2$
is also prime.

The largest known twin prime pair (as of 2026) contains numbers with over 400,000 digits. In 2013,
Yitang Zhang proved that there exists some constant $N \lt{} 7 \times 10^7$ such that infinitely many
prime pairs $(p, p + N)$ exist. This bound has since been improved to $N \leq 246$ by the
Polymath project.

**Theorem 14.1a (Brun, 1919).** The sum of the reciprocals of the twin primes converges:

$$\sum_{\substack{p \mathrm{\ prime} \\ p+2 \mathrm{\ prime}}} \left(\frac{1}{p} + \frac{1}{p+2}\right) \lt{} \infty$$

This is known as **Brun's theorem**. It establishes that the twin primes form a "thin" set,
in contrast to the full set of primes (whose reciprocal sum diverges by Euler).

### 14.2 The Ring $\mathbb{Z}[\sqrt{-5}]$

**Example.** In $\mathbb{Z}[\sqrt{-5}]$, unique factorization fails:

$$6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$$

The elements $2, 3, 1 + \sqrt{-5}, 1 - \sqrt{-5}$ are all irreducible but not prime (in the
ring-theoretic sense). This failure of unique factorization motivates the development of ideal
theory.

### 14.3 Quadratic Forms

**Definition.** A **binary quadratic form** is $Q(x, y) = ax^2 + bxy + cy^2$ with
$a, b, c \in \mathbb{Z}$. Its **discriminant** is $D = b^2 - 4ac$.

Two forms are **equivalent** if one can be obtained from the other by a change of variables
$(x, y) \mapsto (px + qy, rx + sy)$ with $ps - qr = 1$.

**Theorem 14.2 (Gauss).** The number of equivalence classes of binary quadratic forms of
discriminant $D \lt{} 0$ is finite. The class number $h(D)$ is 1 precisely for
$D \in \{-3, -4, -7, -8, -11, -19, -43, -67, -163\}$.

_Remark._ The fact that $-163$ is the largest such $D$ was conjectured by Gauss and proved by
Heegner in 1952 (with later simplified proofs by Stark and Baker). This is the celebrated
**class number 1 problem**.

**Proposition 14.2a.** A binary quadratic form $Q(x, y) = ax^2 + bxy + cy^2$ of discriminant
$D \lt{} 0$ represents $n$ if and only if $D$ is a quadratic residue modulo $4n$.

### 14.4 The Class Number and Unique Factorization

The **class group** of a quadratic field $\mathbb{Q}(\sqrt{D})$ measures the failure of unique
factorization in its ring of integers. The **class number** $h(D)$ is the order of this group.

**Theorem 14.3.** Unique factorization holds in the ring of integers of $\mathbb{Q}(\sqrt{D})$
if and only if $h(D) = 1$.

This connects the algebraic question of unique factorization to the analytic properties of the
Dedekind zeta function, via the class number formula:

$$h(D) = \frac{\sqrt{|D|}}{2\pi} \cdot L(1, \chi_D)$$

where $L(s, \chi_D)$ is the Dirichlet $L$-function associated to the quadratic character $\chi_D$.

**Proposition 14.3a.** The class number $h(-D)$ grows roughly as $\sqrt{D}$ for large $D$:
$h(-D) \sim \frac{\sqrt{D}}{\pi} \cdot L(1, \chi_{-D})$ as $D \to \infty$.

### 14.5 Mersenne Numbers

**Theorem 14.4 (Lucas--Lehmer test).** Let $M_p = 2^p - 1$ with $p$ an odd prime. Define the sequence
$L_0 = 4$, $L_{n+1} = L_n^2 - 2$. Then $M_p$ is prime if and only if $L_{p-2} \equiv 0 \pmod{M_p}$.

This test makes it possible to efficiently determine the primality of Mersenne numbers, which is
why the largest known primes are Mersenne primes.

**Proposition 14.4a.** Every even perfect number is a Mersenne prime times a power of $2$.

This is the Euclid--Euler theorem (Theorem 12.3) restated in terms of Mersenne primes.

**Problem.** Use the Lucas--Lehmer test to verify that $M_5 = 31$ is prime.

<details>
<summary>Solution</summary>

$M_5 = 2^5 - 1 = 31$. We need $L_{5-2} = L_3 \equiv 0 \pmod{31}$.

$L_0 = 4$
$L_1 = 4^2 - 2 = 14$
$L_2 = 14^2 - 2 = 194$. $194 = 6 \cdot 31 + 8$, so $L_2 \equiv 8 \pmod{31}$.
$L_3 = 8^2 - 2 = 62 \equiv 0 \pmod{31}$.

Since $L_3 \equiv 0 \pmod{31}$, $M_5 = 31$ is prime. $\blacksquare$

</details>

### 14.6 The abc Conjecture

**Conjecture (Masser--Oesterlé, 1985).** For every $\varepsilon > 0$, there exists $K_\varepsilon > 0$
such that for all coprime positive integers $a, b, c$ with $a + b = c$:

$$c \lt{} K_\varepsilon \cdot \mathrm{rad}(abc)^{1 + \varepsilon}$$

where $\mathrm{rad}(n) = \prod_{p \mid n} p$ is the **radical** of $n$ (the product of distinct prime
factors).

The abc conjecture is one of the most important open problems in number theory. It implies:

- Fermat's last theorem for sufficiently large exponents.
- Mordell's conjecture (Faltings' theorem).
- Roth's theorem on Diophantine approximation.
- The existence of infinitely many non-Wieferich primes.

### 14.7 The Collatz Conjecture

**Conjecture (Collatz, 1937).** Define $T \colon \mathbb{N} \to \mathbb{N}$ by

$$T(n) = \begin{cases} n/2 & n \mathrm{\ even} \\ 3n + 1 & n \mathrm{\ odd} \end{cases}$$

For every positive integer $n$, the sequence $n, T(n), T(T(n)), \ldots$ eventually reaches $1$.

Despite its simple statement, the Collatz conjecture remains open. It has been verified by computer
for all starting values up to at least $2^{68}$, but no general proof exists.

### 14.8 Worked Example

**Problem.** Determine all representations of $n = 7$ as a sum of two squares.

_Solution._ We need $a^2 + b^2 = 7$ with $a, b \in \mathbb{Z}$. Checking: $a^2 \leq 7$, so
$a \in \\{0, 1, 2\\}$. For $a = 0$: $b^2 = 7$ (no). For $a = 1$: $b^2 = 6$ (no). For $a = 2$:
$b^2 = 3$ (no). By symmetry, $a = -1, -2$ give the same. So $7$ cannot be written as a sum of two
squares.

This is consistent with the theorem: $7 \equiv 3 \pmod{4}$, so it is not a sum of two squares.
$\blacksquare$

### 14.9 Worked Example: Quadratic Forms

**Problem.** Determine the number of representations of $n = 65$ as a sum of two squares.

<details>
<summary>Solution</summary>

$65 = 5 \cdot 13$. Both $5 \equiv 1 \pmod{4}$ and $13 \equiv 1 \pmod{4}$, so both are sums of two
squares: $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$.

By the identity $(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2 = (ac + bd)^2 + (ad - bc)^2$:

Using $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$:
$(1 \cdot 2 - 2 \cdot 3)^2 + (1 \cdot 3 + 2 \cdot 2)^2 = (-4)^2 + 7^2 = 16 + 49 = 65$.
$(1 \cdot 2 + 2 \cdot 3)^2 + (1 \cdot 3 - 2 \cdot 2)^2 = 8^2 + (-1)^2 = 64 + 1 = 65$.

Also $65 = 8^2 + 1^2 = 7^2 + 4^2$. Including signs and order, the representations are
$(\pm 1, \pm 8)$, $(\pm 4, \pm 7)$, $(\pm 7, \pm 4)$, $(\pm 8, \pm 1)$, giving $16$ ordered pairs. $\blacksquare$

</details>

## 15. Common Pitfalls

:::caution Common Pitfall The Chinese Remainder Theorem requires the moduli to be pairwise coprime.
If $m_1$ and $m_2$ share a common factor $d$, the system $x \equiv a_1 \pmod{m_1}$,
$x \equiv a_2 \pmod{m_2}$ is solvable only if $a_1 \equiv a_2 \pmod{d}$. :::

:::caution Common Pitfall $\left(\frac{a}{n}\right) = 1$ for the Jacobi symbol does NOT mean $a$ is
a QR modulo $n$. For example,
$\left(\frac{2}{15}\right) = \left(\frac{2}{3}\right)\left(\frac{2}{5}\right) = (-1)(-1) = 1$, but
$x^2 \equiv 2 \pmod{15}$ has no solution (checking mod $3$: $x^2 \equiv 2 \pmod{3}$ is impossible).
:::

:::caution Common Pitfall When using Fermat's little theorem, remember that
$a^{p-1} \equiv 1 \pmod{p}$ only when $\gcd(a, p) = 1$. The correct form for all $a$ is
$a^p \equiv a \pmod{p}$. :::

:::caution Common Pitfall Not every prime in $\mathbb{Z}$ remains prime in $\mathbb{Z}[i]$. Only
primes $p \equiv 3 \pmod{4}$ remain prime in $\mathbb{Z}[i]$. Primes $p \equiv 1 \pmod{4}$ factor as
$p = (a + bi)(a - bi)$, and $2 = (1 + i)^2 \cdot (-i)$. :::

:::caution Common Pitfall The Euclidean algorithm computes $\gcd(a, b)$ for positive integers. When
working with negative integers or polynomials, remember that $\gcd$ is defined up to a unit (sign
for integers, leading coefficient for polynomials). :::

:::caution Common Pitfall When solving $ax \equiv b \pmod{m}$, you must first check that
$\gcd(a, m) \mid b$. If not, there is no solution. If $\gcd(a, m) = d > 1$, divide through by $d$
and remember that the modulus becomes $m/d$. :::

:::caution Common Pitfall Primitive roots do not exist for all moduli. A primitive root modulo $n$
exists only for $n = 2$, $n = 4$, $n = p^k$, or $n = 2p^k$ where $p$ is an odd prime. For example,
there is no primitive root modulo $8$ or modulo $15$. :::

:::caution Common Pitfall In the division algorithm $a = bq + r$, the remainder satisfies
$0 \leq r \lt{} b$ when $b > 0$. When $a$ is negative, the quotient $q$ is also negative (or zero).
For example, $-17 = 5 \cdot (-4) + 3$, not $-17 = 5 \cdot (-3) + (-2)$. :::

:::caution Common Pitfall The Möbius function $\mu(n) = 0$ when $n$ has a repeated prime factor.
Only squarefree integers have nonzero Möbius function values. When using Möbius inversion, many
terms in the sum may be zero. :::

:::caution Common Pitfall Euler's theorem requires $\gcd(a, n) = 1$. To compute $a^k \bmod n$
when $\gcd(a, n) \neq 1$, factor out common prime factors first, or use the CRT to work modulo
prime power factors of $n$ separately. :::

## 16. Problem Set

### Problem 1 (Division Algorithm)

Apply the division algorithm to write $-1000 = 37q + r$ with $0 \leq r \lt{} 37$. Find $q$ and $r$.

<details>
<summary>Solution</summary>

$1000 = 37 \cdot 27 + 1$, so $-1000 = 37 \cdot (-27) - 1 = 37 \cdot (-28) + 36$.
So $q = -28$ and $r = 36$. $\blacksquare$

_If you get this wrong, revise:_ Section 1.1.

</details>

### Problem 2 (GCD and LCM)

Compute $\gcd(1071, 462)$ and $\mathrm{lcm}(1071, 462)$. Verify the identity
$\gcd(a, b) \cdot \mathrm{lcm}(a, b) = ab$.

<details>
<summary>Solution</summary>

$1071 = 2 \cdot 462 + 147$, $462 = 3 \cdot 147 + 21$, $147 = 7 \cdot 21 + 0$.
So $\gcd(1071, 462) = 21$.

$\mathrm{lcm}(1071, 462) = 1071 \cdot 462 / 21 = 1071 \cdot 22 = 23562$.

Check: $21 \cdot 23562 = 494802 = 1071 \cdot 462$. $\blacksquare$

_If you get this wrong, revise:_ Sections 1.5, 2.2.

</details>

### Problem 3 (Extended Euclidean Algorithm)

Find integers $x, y$ such that $356x + 204y = \gcd(356, 204)$.

<details>
<summary>Solution</summary>

$356 = 1 \cdot 204 + 152$, $204 = 1 \cdot 152 + 52$, $152 = 2 \cdot 52 + 48$, $52 = 1 \cdot 48 + 4$, $48 = 12 \cdot 4 + 0$.
$\gcd(356, 204) = 4$.

Back-substituting: $4 = 52 - 48 = 52 - (152 - 2 \cdot 52) = 3 \cdot 52 - 152$.
$= 3(204 - 152) - 152 = 3 \cdot 204 - 4 \cdot 152$.
$= 3 \cdot 204 - 4(356 - 204) = 7 \cdot 204 - 4 \cdot 356$.

So $x = -4$, $y = 7$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.3.

</details>

### Problem 4 (Bézout's Identity)

Prove that $\gcd(a, b) = 1$ if and only if there exist $x, y \in \mathbb{Z}$ with $ax + by = 1$.

<details>
<summary>Solution</summary>

($\Rightarrow$) This is Bézout's identity (Theorem 2.1).

($\Leftarrow$) If $ax + by = 1$ and $d \mid a$ and $d \mid b$, then $d \mid (ax + by) = 1$, so
$d = 1$. Thus $\gcd(a, b) = 1$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.1.

</details>

### Problem 5 (Prime Factorization)

Find the prime factorization of $N = 2024$. Using this, compute $\tau(2024)$, $\sigma(2024)$,
and $\phi(2024)$.

<details>
<summary>Solution</summary>

$2024 = 2 \cdot 1012 = 2^2 \cdot 506 = 2^3 \cdot 253 = 2^3 \cdot 11 \cdot 23$.

$\tau(2024) = (3+1)(1+1)(1+1) = 4 \cdot 2 \cdot 2 = 16$.

$\sigma(2024) = \frac{2^4 - 1}{1} \cdot \frac{11^2 - 1}{10} \cdot \frac{23^2 - 1}{22} = 15 \cdot 12 \cdot 24 = 4320$.

$\phi(2024) = 2024 \cdot \left(1 - \frac{1}{2}\right)\left(1 - \frac{1}{11}\right)\left(1 - \frac{1}{23}\right) = 2024 \cdot \frac{1}{2} \cdot \frac{10}{11} \cdot \frac{22}{23} = 880$. $\blacksquare$

_If you get this wrong, revise:_ Sections 3.1, 12.2, and 6.2.

</details>

### Problem 5a (Arithmetic Functions)

Let $f$ be a multiplicative function with $f(p^a) = a + 1$ for all primes $p$ and $a \geq 1$.
Show that $f(n) = \tau(n)$ for all $n \geq 1$.

<details>
<summary>Solution</summary>

Since $f$ is multiplicative and $\tau$ is multiplicative, and they agree on prime powers:
$f(p^a) = a + 1 = \tau(p^a)$, we have $f(n) = \tau(n)$ for all $n \geq 1$ by
Proposition 12.1. $\blacksquare$

_If you get this wrong, revise:_ Sections 12.1 and 12.2.

</details>

### Problem 6 (Infinitude of Primes)

Prove that there are infinitely many primes of the form $4k + 3$.

<details>
<summary>Solution</summary>

Suppose finitely many: $p_1, p_2, \ldots, p_n$ are all primes $\equiv 3 \pmod{4}$.
Consider $N = 4p_1 p_2 \cdots p_n - 1$. Then $N \equiv 3 \pmod{4}$.

$N > 1$ and $N$ is odd, so its prime factors are all odd. Not all prime factors of $N$ can be
$\equiv 1 \pmod{4}$, since the product of numbers $\equiv 1 \pmod{4}$ is $\equiv 1 \pmod{4}$,
but $N \equiv 3 \pmod{4}$. So $N$ has a prime factor $p \equiv 3 \pmod{4}$.

$p \nmid (4p_1 \cdots p_n)$ since $p \mid N$ and $p_i \mid (N+1)$, so $p \neq p_i$ for any $i$.
Contradiction. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2.

</details>

### Problem 7 (Solving Congruences)

Solve the congruence $35x \equiv 15 \pmod{77}$.

<details>
<summary>Solution</summary>

$\gcd(35, 77) = 7$ and $7 \mid 15$. Divide through by $7$: $5x \equiv 2 \pmod{11}$.
$5^{-1} \equiv 9 \pmod{11}$ (since $5 \cdot 9 = 45 \equiv 1$). So $x \equiv 9 \cdot 2 = 18 \equiv 7 \pmod{11}$.

The $7$ solutions modulo $77$ are $x \equiv 7, 18, 29, 40, 51, 62, 73 \pmod{77}$. $\blacksquare$

_If you get this wrong, revise:_ Sections 4.2 and 4.5.

</details>

### Problem 8 (Wilson's Theorem)

Use Wilson's theorem to find $13! \bmod 17$.

<details>
<summary>Solution</summary>

By Wilson, $(17-1)! = 16! \equiv -1 \pmod{17}$.
$16! = 16 \cdot 15 \cdot 14 \cdot 13! \equiv (-1)(-2)(-3) \cdot 13! \equiv -6 \cdot 13! \pmod{17}$.

So $-6 \cdot 13! \equiv -1 \pmod{17}$, giving $6 \cdot 13! \equiv 1 \pmod{17}$.
$6^{-1} \equiv 3 \pmod{17}$, so $13! \equiv 3 \pmod{17}$. $\blacksquare$

_If you get this wrong, revise:_ Section 4.6.

</details>

### Problem 9 (Chinese Remainder Theorem)

Find the smallest positive integer $n$ such that $n \equiv 1 \pmod{2}$, $n \equiv 2 \pmod{3}$,
$n \equiv 3 \pmod{5}$, and $n \equiv 4 \pmod{7}$.

<details>
<summary>Solution</summary>

$M = 2 \cdot 3 \cdot 5 \cdot 7 = 210$.

$M_1 = 105$, $105b_1 \equiv 1 \pmod{2}$, $b_1 = 1$.
$M_2 = 70$, $70b_2 \equiv 1 \pmod{3}$, $b_2 = 1$.
$M_3 = 42$, $42b_3 \equiv 1 \pmod{5}$, $b_3 = 3$.
$M_4 = 30$, $30b_4 \equiv 1 \pmod{7}$, $b_4 = 4$.

$x = 1 \cdot 1 \cdot 105 + 2 \cdot 1 \cdot 70 + 3 \cdot 3 \cdot 42 + 4 \cdot 4 \cdot 30$
$= 105 + 140 + 378 + 480 = 1103$.

$1103 \bmod 210 = 1103 - 5 \cdot 210 = 53$.

The smallest positive solution is $n = 53$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.

</details>

### Problem 10 (CRT with Non-Coprime Moduli)

Determine whether the system $x \equiv 7 \pmod{12}$, $x \equiv 1 \pmod{18}$ has a solution.

<details>
<summary>Solution</summary>

$\gcd(12, 18) = 6$. Check: $7 \equiv 1 \pmod{6}$? $7 \bmod 6 = 1$, $1 \bmod 6 = 1$. Yes, so a
solution exists.

$x = 12k + 7$. Then $12k + 7 \equiv 1 \pmod{18}$, so $12k \equiv -6 \equiv 12 \pmod{18}$.
Dividing by $\gcd(12, 18) = 6$: $2k \equiv 2 \pmod{3}$, so $k \equiv 1 \pmod{3}$.

$k = 3m + 1$, $x = 12(3m + 1) + 7 = 36m + 19$. Solutions: $x \equiv 19 \pmod{36}$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.4.

</details>

### Problem 11 (Euler's Theorem)

Compute $3^{100} \bmod 91$.

<details>
<summary>Solution</summary>

$\phi(91) = \phi(7)\phi(13) = 6 \cdot 12 = 72$. $\gcd(3, 91) = 1$.
$100 = 72 + 28$, so $3^{100} \equiv 3^{28} \pmod{91}$.

$3^5 = 243 \equiv 61 \pmod{91}$. $3^{10} \equiv 61^2 = 3721 \equiv 81 \pmod{91}$.
$3^{20} \equiv 81^2 = 6561 \equiv 9 \pmod{91}$.
$3^{28} = 3^{20} \cdot 3^5 \cdot 3^3 \equiv 9 \cdot 61 \cdot 27 = 14823 \equiv 81 \pmod{91}$.

So $3^{100} \equiv 81 \pmod{91}$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.3.

</details>

### Problem 12 (Fermat's Little Theorem)

Show that $2^{30} - 1$ is divisible by $31$.

<details>
<summary>Solution</summary>

$31$ is prime and $\gcd(2, 31) = 1$. By Fermat's little theorem, $2^{30} \equiv 1 \pmod{31}$.
So $2^{30} - 1 \equiv 0 \pmod{31}$, meaning $31 \mid (2^{30} - 1)$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.3, Corollary 6.5.

</details>

### Problem 13 (RSA)

In an RSA system, $p = 11$, $q = 3$, $e = 7$. The ciphertext $c = 26$ is received. Find the
plaintext $m$.

<details>
<summary>Solution</summary>

$n = 11 \cdot 3 = 33$, $\phi(n) = 10 \cdot 2 = 20$.
Find $d$: $7d \equiv 1 \pmod{20}$. $7 \cdot 3 = 21 \equiv 1$, so $d = 3$.

Decrypt: $m = 26^3 \bmod 33$. $26^2 = 676 \equiv 16 \pmod{33}$.
$26^3 \equiv 16 \cdot 26 = 416 \equiv 20 \pmod{33}$.

The plaintext is $m = 20$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.5.

</details>

### Problem 14 (Multiplicative Order)

Find the multiplicative order of $2$ modulo $11$.

<details>
<summary>Solution</summary>

$\phi(11) = 10$, so $\mathrm{ord}_{11}(2) \mid 10$. The divisors of $10$ are $1, 2, 5, 10$.

$2^1 = 2 \not\equiv 1 \pmod{11}$.
$2^2 = 4 \not\equiv 1 \pmod{11}$.
$2^5 = 32 \equiv 10 \equiv -1 \not\equiv 1 \pmod{11}$.
$2^{10} \equiv 1 \pmod{11}$ by Fermat.

So $\mathrm{ord}_{11}(2) = 10$, meaning $2$ is a primitive root modulo $11$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.1.

</details>

### Problem 15 (Primitive Roots)

Determine whether $3$ is a primitive root modulo $19$.

<details>
<summary>Solution</summary>

$\phi(19) = 18$. Prime divisors of $18$: $2$ and $3$.
Check $3^9$ and $3^6$.

$3^2 = 9$, $3^4 = 81 \equiv 5 \pmod{19}$, $3^6 = 3^4 \cdot 3^2 \equiv 5 \cdot 9 = 45 \equiv 7 \pmod{19}$.
$3^9 = 3^6 \cdot 3^3 \equiv 7 \cdot 27 = 189 \equiv 18 \equiv -1 \pmod{19}$.

$3^6 \equiv 7 \not\equiv 1$ and $3^9 \equiv -1 \not\equiv 1 \pmod{19}$. Therefore $3$ is a primitive root modulo $19$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.4.

</details>

### Problem 16 (Quadratic Residues)

Determine whether $5$ is a quadratic residue modulo $23$.

<details>
<summary>Solution</summary>

By Euler's criterion: $5^{(23-1)/2} = 5^{11} \pmod{23}$.

$5^2 = 25 \equiv 2 \pmod{23}$, $5^4 \equiv 4 \pmod{23}$, $5^8 \equiv 16 \pmod{23}$.
$5^{11} = 5^8 \cdot 5^2 \cdot 5^1 \equiv 16 \cdot 2 \cdot 5 = 160 \equiv 22 \equiv -1 \pmod{23}$.

Since $5^{11} \equiv -1 \pmod{23}$, $5$ is a QNR modulo $23$. $\blacksquare$

_If you get this wrong, revise:_ Sections 8.1 and 8.2.

</details>

### Problem 17 (Legendre Symbol)

Compute $\left(\frac{7}{53}\right)$ using the law of quadratic reciprocity.

<details>
<summary>Solution</summary>

$7 \equiv 3 \pmod{4}$ and $53 \equiv 1 \pmod{4}$, so
$\left(\frac{7}{53}\right) = \left(\frac{53}{7}\right) = \left(\frac{4}{7}\right) = \left(\frac{2}{7}\right)^2 = 1$.

So $7$ is a QR modulo $53$. $\blacksquare$

_If you get this wrong, revise:_ Section 8.4.

</details>

### Problem 18 (Second Supplement)

For how many primes $p$ in the range $3 \leq p \leq 100$ is $2$ a quadratic residue?

<details>
<summary>Solution</summary>

By the second supplement, $\left(\frac{2}{p}\right) = 1$ if and only if $p \equiv \pm 1 \pmod{8}$,
i.e., $p \equiv 1$ or $7 \pmod{8}$.

Primes $p \leq 100$ with $p \equiv 1 \pmod{8}$: $17, 41, 73, 89, 97$ (5 primes).
Primes $p \leq 100$ with $p \equiv 7 \pmod{8}$: $7, 23, 31, 47, 71, 79$ (6 primes).

Total: $5 + 6 = 11$ primes. $\blacksquare$

_If you get this wrong, revise:_ Section 8.6 (Second Supplement).

</details>

### Problem 19 (Continued Fractions)

Find the continued fraction expansion of $e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, \ldots]$.
Compute the convergent $p_4/q_4$ and verify $|p_4/q_4 - e| \lt{} 1/q_4^2$.

<details>
<summary>Solution</summary>

$e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, \ldots]$. We need $p_4/q_4 = [2; 1, 2, 1, 1]$.

$p_{-1} = 1$, $p_0 = 2$.
$q_{-1} = 0$, $q_0 = 1$.

$a_1 = 1$: $p_1 = 1 \cdot 2 + 1 = 3$, $q_1 = 1 \cdot 1 + 0 = 1$.
$a_2 = 2$: $p_2 = 2 \cdot 3 + 2 = 8$, $q_2 = 2 \cdot 1 + 1 = 3$.
$a_3 = 1$: $p_3 = 1 \cdot 8 + 3 = 11$, $q_3 = 1 \cdot 3 + 1 = 4$.
$a_4 = 1$: $p_4 = 1 \cdot 11 + 8 = 19$, $q_4 = 1 \cdot 4 + 3 = 7$.

$p_4/q_4 = 19/7 \approx 2.714\ldots$

$e \approx 2.718\ldots$, so $|e - 19/7| \approx 0.004$. Check: $1/q_4^2 = 1/49 \approx 0.020$.
Indeed $0.004 \lt{} 0.020$. $\blacksquare$

_If you get this wrong, revise:_ Sections 9.3 and 9.7.

</details>

### Problem 20 (Möbius Inversion)

Let $f(n) = \sum_{d \mid n} \sigma(d)$. Find a closed-form expression for $f(n)$.

<details>
<summary>Solution</summary>

We have $f = \sigma * \mathbf{1}$. We know $\sigma = \mathrm{id} * \mathbf{1}$ where $\mathrm{id}(n) = n$.
So $f = (\mathrm{id} * \mathbf{1}) * \mathbf{1} = \mathrm{id} * (\mathbf{1} * \mathbf{1})$.

Now $(\mathbf{1} * \mathbf{1})(n) = \sum_{d \mid n} 1 \cdot 1 = \tau(n)$.

So $f(n) = \sum_{d \mid n} d \cdot \tau(n/d)$. This is the Dirichlet convolution $\mathrm{id} * \tau$.

For example, $f(6) = \sigma(1) + \sigma(2) + \sigma(3) + \sigma(6) = 1 + 3 + 4 + 12 = 20$.
Check: $\sum_{d \mid 6} d \cdot \tau(6/d) = 1 \cdot \tau(6) + 2 \cdot \tau(3) + 3 \cdot \tau(2) + 6 \cdot \tau(1) = 1 \cdot 4 + 2 \cdot 2 + 3 \cdot 2 + 6 \cdot 1 = 4 + 4 + 6 + 6 = 20$. $\blacksquare$

_If you get this wrong, revise:_ Sections 12.4 and 12.5.

</details>
