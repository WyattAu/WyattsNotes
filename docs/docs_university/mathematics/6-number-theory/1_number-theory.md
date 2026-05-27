---
title: Number Theory
description:
  'University-level notes on Number Theory: 1. Divisibility; 1.1 The Division Algorithm; 1.2
  Divisibility; 1.3 Worked Examples of the Division Algorithm.'
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

**Theorem 1.1 (Division Algorithm).** For any integers $a$ and $b$ with $b > 0$There exist unique
Integers $q$ and $r$ such that $a = bq + r$ with $0 \leq r \lt b$.

_Proof._ Consider the set $S = \\{a - bk : k \in \mathbb◆LB◆Z◆RB◆,\ a - bk \geq 0\\}$. This set is
non-empty (by the Archimedean property, choosing $k$ sufficiently negative). By the well-ordering
principle, $S$ has a least element $r = a - bq$. If $r \geq b$Then $r - b = a - (q+1)b \in S$ with
$r - b \lt r$Contradicting minimality. So $0 \leq r \lt b$. For uniqueness, if
$a = bq_1 + r_1 = bq_2 + r_2$Then $b(q_1 - q_2) = r_2 - r_1$. Since $|r_2 - r_1| \lt b$We must Have
$q_1 = q_2$ and $r_1 = r_2$. $\blacksquare$

### 1.2 Divisibility

We write $d \mid a$ (read "$d$ divides $a$") if there exists $k \in \mathbb◆LB◆Z◆RB◆$ with $a = dk$.

**Proposition 1.2.** For all $a, b, c \in \mathbb◆LB◆Z◆RB◆$:

1. If $a \mid b$ and $b \mid c$Then $a \mid c$.
2. If $a \mid b$ and $a \mid c$Then $a \mid (mb + nc)$ for all $m, n \in \mathbb◆LB◆Z◆RB◆$.
3. If $a \mid b$ and $b \neq 0$Then $|a| \leq |b|$.
4. $a \mid 0$ for all $a$But $0 \mid a$ only when $a = 0$.

_Proof._ (1) $a \mid b$ means $b = ak$ and $b \mid c$ means $c = b\ell = ak\ell$So $a \mid c$. (2)
$a \mid b$ means $b = ak$ and $a \mid c$ means $c = a\ell$So $mb + nc = a(mk + n\ell)$. (3)
$a \mid b$ means $b = ak$So $|b| = |a| \cdot |k| \geq |a|$. (4) $0 = a \cdot 0$So $a \mid 0$. If
$0 \mid a$Then $a = 0 \cdot k = 0$. $\blacksquare$

### 1.3 Worked Examples of the Division Algorithm

**Problem.** Apply the division algorithm to write $-237 = 14q + r$ with $0 \leq r \lt 14$.

<details>
<summary>Solution</summary>

We compute $237 \div 14 = 16.93\ldots$So $14 \cdot 16 = 224$ and $14 \cdot 17 = 238 > 237$. Thus for
positive $237$: $q = 16$, $r = 13$Giving $237 = 14 \cdot 16 + 13$.

For $a = -237$: we need $q$ such that $r = -237 - 14q$ satisfies $0 \leq r \lt 14$.
$-237 = 14(-17) + 1$: check $14 \cdot (-17) = -238$And $-238 + 1 = -237$. Here $q = -17$ and $r = 1$
with $0 \leq 1 \lt 14$. $\blacksquare$

</details>

**Problem.** Find all integers $n$ such that $n \equiv 3 \pmod◆LB◆7◆RB◆$ and $n \equiv 2 \pmod◆LB◆5◆RB◆$.

<details>
<summary>Solution</summary>

From $n \equiv 3 \pmod◆LB◆7◆RB◆$We have $n = 7k + 3$ for some $k \in \mathbb◆LB◆Z◆RB◆$. Substituting into
$n \equiv 2 \pmod◆LB◆5◆RB◆$: $7k + 3 \equiv 2 \pmod◆LB◆5◆RB◆$So $7k \equiv -1 \equiv 4 \pmod◆LB◆5◆RB◆$Giving
$2k \equiv 4 \pmod◆LB◆5◆RB◆$Hence $k \equiv 2 \pmod◆LB◆5◆RB◆$.

So $k = 5m + 2$And $n = 7(5m + 2) + 3 = 35m + 17$. The solutions are $n \equiv 17 \pmod◆LB◆35◆RB◆$.
$\blacksquare$

</details>

### 1.4 Uniqueness of the Greatest Common Divisor

**Theorem 1.3.** Let $a, b \in \mathbb◆LB◆Z◆RB◆$Not both zero. The greatest common divisor of $a$ and $b$
Exists and is unique.

_Proof._ The set $D = \\{d \in \mathbb◆LB◆N◆RB◆ : d \mid a \mathrm◆LB◆\ and\  d \mid b\\}"$ is non-empty
since $|a| \in D$ (if $a \neq 0$) or $|b| \in D$ (if $b \neq 0$). By the well-ordering principle,
$D$ has A least element $g$. We claim $g = \gcd(a, b)$. By definition $g \mid a$ and $g \mid b$. If
$c \mid a$ And $c \mid b$Then $c \leq |c| \leq g$ (since $g$ is the least positive common divisor).
For Uniqueness: if $g_1$ and $g_2$ are both greatest common divisors, then $g_1 \mid g_2$ and
$g_2 \mid g_1$ So $g_1 = g_2$ (since both are positive). $\blacksquare$

### 1.5 Least Common Multiple

**Definition.** The **least common multiple** of positive integers $a$ and $b$Written
$\mathrm◆LB◆lcm(a, b)$Is the smallest positive integer $m$ such that $a \mid m$ and $b \mid m$.

**Theorem 1.4 (GCD--LCM Identity).** For all positive integers $a$ and $b$

$$\gcd(a, b) \cdot \mathrm◆LB◆lcm(a, b) = ab$$

_Proof._ Write $a = \prod_◆LB◆i=1◆RB◆^k p_i^◆LB◆\alpha_i◆RB◆$ and $b = \prod_◆LB◆i=1◆RB◆^k p_i^◆LB◆\beta_i◆RB◆$ where
$\alpha_i, \beta_i \geq 0$. Then $\gcd(a, b) = \prod_◆LB◆i=1◆RB◆^k p_i^◆LB◆\min(\alpha_i, \beta_i)◆RB◆$ and
$\mathrm◆LB◆lcm(a, b) = \prod_◆LB◆i=1◆RB◆^k p_i^◆LB◆\max(\alpha_i, \beta_i)◆RB◆$. Since
$\min(\alpha_i, \beta_i) + \max(\alpha_i, \beta_i) = \alpha_i + \beta_i$ for each $i$We have

$$\gcd(a,b) \cdot \mathrm◆LB◆lcm(a,b) = \prod_◆LB◆i=1◆RB◆^k p_i^◆LB◆\alpha_i + \beta_i◆RB◆ = ab \qquad \blacksquare$$

**Proposition 1.5.** For all positive integers $a, b$:

1. $\mathrm◆LB◆lcm(a, b) = ab / \gcd(a, b)$.
2. $\gcd(a, \mathrm◆LB◆lcm(b, c)) = \mathrm◆LB◆lcm(\gcd(a, b), \gcd(a, c))$.

### 1.6 Worked Example: LCM Computation

**Problem.** Compute $\mathrm◆LB◆lcm(252, 105)$ and verify the gcd--lcm identity.

<details>
<summary>Solution</summary>

First, $\gcd(252, 105)$. Using the Euclidean algorithm:
$252 = 2 \cdot 105 + 42$, $105 = 2 \cdot 42 + 21$, $42 = 2 \cdot 21 + 0$. So $\gcd(252, 105) = 21$.

By the identity: $\mathrm◆LB◆lcm(252, 105) = 252 \cdot 105 / 21 = 252 \cdot 5 = 1260$.

Verification: $1260 / 252 = 5$ and $1260 / 105 = 12$Both integers. $\blacksquare$

</details>

## 2. The Greatest Common Divisor

### 2.1 Definition and Existence

**Definition.** The **greatest common divisor** of $a$ and $b$ (not both zero) is the largest
Positive integer $d$ such that $d \mid a$ and $d \mid b$. We write $d = \gcd(a, b)$.

**Theorem 2.1 (Bézout's Identity).** For any $a, b \in \mathbb◆LB◆Z◆RB◆$ not both zero, there exist
$x, y \in \mathbb◆LB◆Z◆RB◆$ such that

$$\gcd(a, b) = ax + by$$

_Proof._ Let $S = \\{ax + by : x, y \in \mathbb◆LB◆Z◆RB◆,\ ax + by > 0\\}$. By the well-ordering
principle, $S$ has a least element $d = ax_0 + by_0$. We show $d = \gcd(a, b)$. First, $d \mid a$:
write $a = dq + r$ with $0 \leq r \lt d$. Then
$r = a - dq = a - (ax_0 + by_0)q = a(1 - x_0 q) + b(-y_0 q)$. If $r > 0$Then $r \in S$ with
$r \lt d$Contradicting minimality. So $r = 0$Giving $d \mid a$. Similarly $d \mid b$. For any Common
divisor $c$ of $a$ and $b$: $c \mid (ax_0 + by_0) = d$So $c \leq d$. $\blacksquare$

### 2.2 The Euclidean Algorithm

To compute $\gcd(a, b)$ with $a \geq b > 0$:

$$a = bq_1 + r_1, \quad 0 \lt r_1 \lt b$$ $$b = r_1 q_2 + r_2, \quad 0 \lt r_2 \lt r_1$$ $$\vdots$$
$$r_◆LB◆n-1◆RB◆ = r_n q_◆LB◆n+1◆RB◆ + 0$$

Then $\gcd(a, b) = r_n$. The algorithm terminates because $b > r_1 > r_2 > \cdots \geq 0$.

**Proposition 2.2.** $\gcd(a, b) = \gcd(b, r)$ where $r = a \bmod b$.

_Proof._ Write $a = bq + r$. If $d \mid a$ and $d \mid b$Then $d \mid (a - bq) = r$. Conversely, if
$d \mid b$ and $d \mid r$Then $d \mid (bq + r) = a$. So the set of common Divisors of $(a, b)$
equals the set of common divisors of $(b, r)$Hence their greatest Common divisors are equal.
$\blacksquare$

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

$44 = 134 - 2 \cdot 45$So $1 = 45 - (134 - 2 \cdot 45) = 3 \cdot 45 - 134$

$45 = 313 - 2 \cdot 134$So $1 = 3(313 - 2 \cdot 134) - 134 = 3 \cdot 313 - 7 \cdot 134$

$134 = 1073 - 3 \cdot 313$So $1 = 3 \cdot 313 - 7(1073 - 3 \cdot 313) = 24 \cdot 313 - 7 \cdot 1073$

Therefore $x = -7$ and $y = 24$: $(-7)(1073) + 24(313) = -7511 + 7512 = 1$. $\blacksquare$

</details>

### 2.4 Coprime Integers

Integers $a$ and $b$ are **coprime** (or **relatively prime**) if $\gcd(a, b) = 1$.

**Proposition 2.3 (Euclid's Lemma).** If $p$ is prime and $p \mid ab$Then $p \mid a$ or $p \mid b$.

_Proof._ If $p \nmid a$Then $\gcd(p, a) = 1$. By Bézout's identity, $1 = px + ay$ for some
$x, y \in \mathbb◆LB◆Z◆RB◆$. Multiplying by $b$: $b = pbx + aby$. Since $p \mid aby$We get $p \mid b$.
$\blacksquare$

**Corollary 2.4.** If $p$ is prime and $p \mid a_1 a_2 \cdots a_n$Then $p \mid a_i$ for some $i$.

**Proposition 2.5.** If $\gcd(a, b) = 1$ and $a \mid bc$Then $a \mid c$.

_Proof._ Since $\gcd(a, b) = 1$By Bézout's identity there exist $x, y$ with $ax + by = 1$.
Multiplying by $c$: $acx + bcy = c$. Since $a \mid bc$We have $a \mid bcy$And $a \mid acx$ So
$a \mid c$. $\blacksquare$

**Proposition 2.6.** If $\gcd(a, b) = 1$ and $\gcd(a, c) = 1$Then $\gcd(a, bc) = 1$.

_Proof._ By Bézout, $ax_1 + by_1 = 1$ and $ax_2 + cz_2 = 1$. Multiplying:
$(ax_1 + by_1)(ax_2 + cz_2) = a(ax_1 x_2 + x_1 c z_2 + by_1 x_2) + (by_1)(cz_2) = 1$. This expresses
$1$ as a linear combination of $a$ and $bc$So $\gcd(a, bc) = 1$. $\blacksquare$

## 3. Prime Numbers

### 3.1 The Fundamental Theorem of Arithmetic

**Theorem 3.1 (Fundamental Theorem of Arithmetic).** Every integer $n > 1$ can be written uniquely
(including order) as a product of primes:

$$n = p_1^◆LB◆a_1◆RB◆ p_2^◆LB◆a_2◆RB◆ \cdots p_k^◆LB◆a_k◆RB◆$$

Where $p_1 \lt p_2 \lt \cdots \lt p_k$ are primes and $a_i \geq 1$.

_Proof (existence)._ Suppose for contradiction that some integer $n > 1$ cannot be factored into
Primes. Let $n$ be the smallest such integer. If $n$ is prime, we are done. Otherwise $n = ab$ with
$1 \lt a, b \lt n$. By minimality of $n$Both $a$ and $b$ factor into primes, so $n = ab$ also
Factors into primes, a contradiction. $\blacksquare$

_Proof (uniqueness)._ Suppose $n = p_1 \cdots p_r = q_1 \cdots q_s$ where all $p_i, q_j$ are prime.
Since $p_1 \mid q_1 \cdots q_s$By Euclid's lemma (applied inductively), $p_1 \mid q_j$ for some $j$.
Since $q_j$ is prime, $p_1 = q_j$. Cancel to get $p_2 \cdots p_r = q_1 \cdots \hat◆LB◆q◆RB◆_j \cdots q_s$.
Continue by induction. $\blacksquare$

### 3.2 The Infinitude of Primes

**Theorem 3.2 (Euclid).** There are infinitely many primes.

_Proof._ Suppose $p_1, p_2, \ldots, p_n$ is a complete list of all primes. Consider
$N = p_1 p_2 \cdots p_n + 1$. Then $N > 1$So by the fundamental theorem, $N$ has a prime divisor
$p$. But $p \mid N$ and $p \mid p_1 \cdots p_n$ implies $p \mid (N - p_1 \cdots p_n) = 1$Which is
Impossible. Contradiction. $\blacksquare$

### 3.3 The Prime Number Theorem

**Theorem 3.3 (Prime Number Theorem).** Let $\pi(x)$ denote the number of primes $\leq x$. Then

$$\lim_◆LB◆x \to \infty◆RB◆ \frac◆LB◆\pi(x)◆RB◆◆LB◆x / \ln x◆RB◆ = 1$$

This tells us that primes thin out as numbers grow larger, with the density near $x$ being
Approximately $1/\ln x$.

**Proposition 3.3a (Chebyshev estimates).** There exist positive constants $c_1, c_2$ such that

$$c_1 \frac◆LB◆x◆RB◆◆LB◆\ln x◆RB◆ \leq \pi(x) \leq c_2 \frac◆LB◆x◆RB◆◆LB◆\ln x◆RB◆$$

For all sufficiently large $x$.

_Intuition._ Chebyshev proved $\pi(x) = O(x/\ln x)$ and $\pi(x) = \Omega(x/\ln x)$ using properties
Of the binomial coefficient $\binom◆LB◆2n◆RB◆◆LB◆n◆RB◆$. The prime number theorem strengthens this to
$\pi(x) \sim x/\ln x$.

**Proposition 3.3b.** For $n \geq 2$The $n$-th prime $p_n$ satisfies $n \ln n \lt p_n \lt 2n \ln n$.

This follows from the prime number theorem and the estimate $\pi(x) \sim x/\ln x$.

### 3.4 Worked Examples of Prime Factorization

**Problem.** Find the prime factorization of $N = 2016$ and determine $\sigma(2016)$ and
$\tau(2016)$.

<details>
<summary>Solution</summary>

$2016 = 2 \cdot 1008 = 2^2 \cdot 504 = 2^3 \cdot 252 = 2^4 \cdot 126 = 2^5 \cdot 63 = 2^5 \cdot 7 \cdot 9 = 2^5 \cdot 3^2 \cdot 7$.

So $2016 = 2^5 \cdot 3^2 \cdot 7^1$.

$\tau(2016) = (5+1)(2+1)(1+1) = 6 \cdot 3 \cdot 2 = 36$.

$\sigma(2016) = \frac◆LB◆2^6 - 1◆RB◆◆LB◆2-1◆RB◆ \cdot \frac◆LB◆3^3 - 1◆RB◆◆LB◆3-1◆RB◆ \cdot \frac◆LB◆7^2 - 1◆RB◆◆LB◆7-1◆RB◆ = 63 \cdot 13 \cdot 8 = 6552$.
$\blacksquare$

</details>

**Problem.** Prove that $\sqrt◆LB◆2◆RB◆$ is irrational using the fundamental theorem of arithmetic.

<details>
<summary>Solution</summary>

Suppose $\sqrt◆LB◆2◆RB◆ = a/b$ where $a, b \in \mathbb◆LB◆N◆RB◆$ with $\gcd(a, b) = 1$. Then $2b^2 = a^2$ So
$2 \mid a^2$Hence $2 \mid a$. Write $a = 2c$. Then $2b^2 = 4c^2$So $b^2 = 2c^2$Giving $2 \mid b^2$
and hence $2 \mid b$. But then $2 \mid \gcd(a, b) = 1$Contradiction. $\blacksquare$

</details>

### 3.5 The Sieve of Eratosthenes

The **Sieve of Eratosthenes** is an ancient algorithm for finding all primes up to a given bound
$N$.

**Algorithm.** Start with the list $\\{2, 3, 4, \ldots, N\\}$. For each prime $p \leq \sqrt◆LB◆N◆RB◆$Mark
All multiples of $p$ (starting from $p^2$) as composite. The remaining unmarked numbers are prime.

**Proposition 3.4.** The sieve of Eratosthenes correctly identifies all primes up to $N$ in
$O(N \log \log N)$ arithmetic operations.

_Proof._ Every composite $n \leq N$ has a prime factor $p \leq \sqrt◆LB◆n◆RB◆ \leq \sqrt◆LB◆N◆RB◆$. When the
sieve Reaches this prime $p$It marks $n$ as composite (since $n = p \cdot m$ with $m \geq p$So
$n \geq p^2$ and $n$ is a multiple of $p$ at least $p^2$). Conversely, no prime is ever marked since
The only multiples of $p$ marked are $kp$ for $k \geq 2$. $\blacksquare$

**Problem.** Use the sieve of Eratosthenes to find all primes up to $50$.

<details>
<summary>Solution</summary>

Start with $\\{2, 3, 4, \ldots, 50\\}$.

Mark multiples of $2$ (from $4$): remove $4, 6, 8, 10, \ldots, 50$. Mark multiples of $3$ (from
$9$): remove $9, 12, 15, 18, \ldots, 48$. Mark multiples of $5$ (from $25$): remove
$25, 30, 35, 40, 45$. Mark multiples of $7$ (from $49$): remove $49$.

We stop at $\lfloor\sqrt◆LB◆50◆RB◆\rfloor = 7$.

The primes up to $50$ are: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$. $\blacksquare$

</details>

### 3.6 Bertrand's Postulate

**Theorem 3.5 (Bertrand's Postulate, Chebyshev 1852).** For every integer $n > 1$There exists at
Least one prime $p$ with $n \lt p \lt 2n$.

_Proof (sketch)._ Let $\theta(x) = \sum_◆LB◆p \leq x◆RB◆ \ln p$ (Chebyshev's function). The
.../1-number-and-algebra/3_proof-and-logic proceeds In three main steps:

1. Show $\theta(n) \lt 2n \ln 2$ for all $n \geq 1$ by induction using properties of binomial
   coefficients. Specifically, $\binom◆LB◆2n◆RB◆◆LB◆n◆RB◆$ is divisible by every prime $p$ with
   $n \lt p \leq 2n$ and $\binom◆LB◆2n◆RB◆◆LB◆n◆RB◆ \leq 4^n$So $\prod_◆LB◆n \lt p \leq 2n◆RB◆ p \leq 4^n$.

2. Strengthen the bound to show that if no prime $p$ satisfies $n \lt p \leq 2n$Then
   $\theta(2n) = \theta(n)$Leading to a contradiction with the bound for sufficiently large $n$.

3. The remaining small values of $n$ are checked directly.

$\blacksquare$

_Remark._ This was famously conjectured by Bertrand in 1845 and proved by Chebyshev in 1852. Erdős
published an elegant .../1-number-and-algebra/3_proof-and-logic in 1932.

**Problem.** Verify Bertrand's postulate for $n = 20$: find a prime $p$ with $20 \lt p \lt 40$.

<details>
<summary>Solution</summary>

The primes in the range $(20, 40)$ are: $23, 29, 31, 37$. There are four such primes, Confirming the
postulate. $\blacksquare$

</details>

_Remark._ Bertrand's postulate has been significantly strengthened. The prime number theorem Implies
that for large $n$There are approximately $n/\ln n$ primes between $n$ and $2n$.

## 4. Congruences

### 4.1 Basic Properties

We write $a \equiv b \pmod◆LB◆m◆RB◆$ (read "$a$ is congruent to $b$ modulo $m$") if $m \mid (a - b)$.

**Proposition 4.1.** Congruence modulo $m$ is an equivalence relation on $\mathbb◆LB◆Z◆RB◆$.

**Proposition 4.2.** If $a \equiv b \pmod◆LB◆m◆RB◆$ and $c \equiv d \pmod◆LB◆m◆RB◆$Then:

1. $a + c \equiv b + d \pmod◆LB◆m◆RB◆$.
2. $ac \equiv bd \pmod◆LB◆m◆RB◆$.
3. $a^n \equiv b^n \pmod◆LB◆m◆RB◆$ for all $n \geq 1$.

**Proposition 4.3.** If $ac \equiv bc \pmod◆LB◆m◆RB◆$ and $\gcd(c, m) = d$Then $a \equiv b \pmod◆LB◆m/d◆RB◆$.

In particular, if $\gcd(c, m) = 1$We can cancel: $a \equiv b \pmod◆LB◆m◆RB◆$.

### 4.2 Solving Linear Congruences

**Theorem 4.4.** The congruence $ax \equiv b \pmod◆LB◆m◆RB◆$ has a solution if and only if
$\gcd(a, m) \mid b$. When solutions exist, there are exactly $\gcd(a, m)$ incongruent solutions
Modulo $m$.

_Proof._ $ax \equiv b \pmod◆LB◆m◆RB◆$ is equivalent to $ax - my = b$ for some $y \in \mathbb◆LB◆Z◆RB◆$. By
Bézout's identity, solutions exist iff $\gcd(a, m) \mid b$. If $d = \gcd(a, m)$ and $x_0$ is one
Solution, then $x_0 + k(m/d)$ for $k = 0, 1, \ldots, d-1$ gives $d$ incongruent solutions modulo
$m$. $\blacksquare$

### 4.3 Worked Example

**Problem.** Solve $14x \equiv 6 \pmod◆LB◆33◆RB◆$.

_Solution._ $\gcd(14, 33) = 1$So a unique solution exists. Using the extended Euclidean algorithm:
$33 = 2 \cdot 14 + 5$, $14 = 2 \cdot 5 + 4$, $5 = 1 \cdot 4 + 1$. Back-substituting:
$1 = 5 - 4 = 5 - (14 - 2 \cdot 5) = 3 \cdot 5 - 14 = 3(33 - 2 \cdot 14) - 14 = 3 \cdot 33 - 7 \cdot 14$.
So $14(-7) \equiv 1 \pmod◆LB◆33◆RB◆$Giving $x \equiv -42 \equiv 24 \pmod◆LB◆33◆RB◆$. $\blacksquare$

### 4.4 Additional Properties of Congruences

**Proposition 4.5.** For any $a, b, m \in \mathbb◆LB◆Z◆RB◆$ with $m > 0$:

1. $a \equiv b \pmod◆LB◆m◆RB◆$ if and only if $a$ and $b$ leave the same remainder when divided by $m$.
2. If $a \equiv b \pmod◆LB◆m◆RB◆$ and $d \mid m$Then $a \equiv b \pmod◆LB◆d◆RB◆$.
3. If $a \equiv b \pmod◆LB◆m_i◆RB◆$ for $i = 1, \ldots, k$Then
   $a \equiv b \pmod◆LB◆\mathrm◆LB◆lcm(m_1, \ldots, m_k)◆RB◆$.

_Proof of (1)._ Write $a = mq_1 + r_1$ and $b = mq_2 + r_2$ with $0 \leq r_1, r_2 \lt m$. Then
$a - b = m(q_1 - q_2) + (r_1 - r_2)$. So $m \mid (a - b)$ iff $m \mid (r_1 - r_2)$Which Happens iff
$r_1 = r_2$ (since $|r_1 - r_2| \lt m$). $\blacksquare$

_Proof of (2)._ $m \mid (a - b)$ and $d \mid m$So $d \mid (a - b)$. $\blacksquare$

_Proof of (3)._ We have $m_i \mid (a - b)$ for each $i$So $\mathrm◆LB◆lcm(m_1, \ldots, m_k) \mid (a-b)$
By definition of the lcm. Hence $a \equiv b \pmod◆LB◆\mathrm◆LB◆lcm(m_1, \ldots, m_k)◆RB◆$. $\blacksquare$

**Proposition 4.6.** If $a \equiv b \pmod◆LB◆m◆RB◆$ and $f(x) = c_k x^k + \cdots + c_1 x + c_0$ is a
Polynomial with integer coefficients, then $f(a) \equiv f(b) \pmod◆LB◆m◆RB◆$.

_Proof._ By Proposition 4.2, $a^j \equiv b^j \pmod◆LB◆m◆RB◆$ for all $j \geq 0$And
$c_j a^j \equiv c_j b^j \pmod◆LB◆m◆RB◆$. Summing over $j$ gives the result. $\blacksquare$

**Corollary 4.6a.** If $a \equiv b \pmod◆LB◆m◆RB◆$Then $a^k \equiv b^k \pmod◆LB◆m◆RB◆$ for all $k \geq 0$. In
Particular, the last $d$ digits of $a$ and $b$ (in base $10$) determine the last $d$ digits of $a^k$
And $b^k$.

### 4.5 More Worked Examples

**Problem.** Solve $12x \equiv 9 \pmod◆LB◆15◆RB◆$.

<details>
<summary>Solution</summary>

$\gcd(12, 15) = 3$And $3 \mid 9$So solutions exist. There are exactly $3$ incongruent Solutions
modulo $15$.

Divide through by $3$: $4x \equiv 3 \pmod◆LB◆5◆RB◆$. Now $\gcd(4, 5) = 1$So $4x \equiv 3 \pmod◆LB◆5◆RB◆$ Gives
$x \equiv 4^◆LB◆-1◆RB◆ \cdot 3 \pmod◆LB◆5◆RB◆$. Since $4 \cdot 4 = 16 \equiv 1 \pmod◆LB◆5◆RB◆$We get
$x \equiv 4 \cdot 3 = 12 \equiv 2 \pmod◆LB◆5◆RB◆$.

The solutions modulo $15$ are $x \equiv 2, 7, 12 \pmod◆LB◆15◆RB◆$. $\blacksquare$

</details>

**Problem.** Find the last two digits of $7^◆LB◆1947◆RB◆$.

<details>
<summary>Solution</summary>

We need $7^◆LB◆1947◆RB◆ \bmod 100$. Since $\phi(100) = \phi(4)\phi(25) = 2 \cdot 20 = 40$ and
$\gcd(7, 100) = 1$Euler's theorem gives $7^◆LB◆40◆RB◆ \equiv 1 \pmod◆LB◆100◆RB◆$.

$1947 = 48 \cdot 40 + 27$So $7^◆LB◆1947◆RB◆ = (7^◆LB◆40◆RB◆)^◆LB◆48◆RB◆ \cdot 7^◆LB◆27◆RB◆ \equiv 7^◆LB◆27◆RB◆ \pmod◆LB◆100◆RB◆$.

$7^2 = 49$, $7^4 = 2401 \equiv 1 \pmod◆LB◆100◆RB◆$. So
$7^◆LB◆27◆RB◆ = (7^4)^6 \cdot 7^3 \equiv 1^6 \cdot 343 \equiv 43 \pmod◆LB◆100◆RB◆$.

The last two digits of $7^◆LB◆1947◆RB◆$ are $43$. $\blacksquare$

</details>

### 4.6 Wilson's Theorem

**Theorem 4.7 (Wilson's Theorem).** An integer $p \geq 2$ is prime if and only if

$$(p - 1)! \equiv -1 \pmod◆LB◆p◆RB◆$$

_Proof._ ($\Rightarrow$) Suppose $p$ is prime. In $(\mathbb◆LB◆Z◆RB◆/p\mathbb◆LB◆Z◆RB◆)^*$Every element $a$ has
a Unique multiplicative inverse $a^◆LB◆-1◆RB◆$. The elements $1$ and $p - 1$ are **self-inverse** since
$1 \cdot 1 \equiv 1$ and $(p-1)^2 = p^2 - 2p + 1 \equiv 1 \pmod◆LB◆p◆RB◆$. For $2 \leq a \leq p-2$We have
$a \neq a^◆LB◆-1◆RB◆$ (if $a^2 \equiv 1$Then $p \mid (a-1)(a+1)$So $p \mid (a-1)$ or $p \mid (a+1)$ Giving
$a \equiv 1$ or $a \equiv p-1$). Thus the elements $\\{2, 3, \ldots, p-2\\}$ pair up into $(p-3)/2$
pairs of mutually inverse elements. The product of all elements in each pair is $1$ modulo $p$So

$$(p-1)! = 1 \cdot (p-1) \prod_◆LB◆a=2◆RB◆^◆LB◆p-2◆RB◆ a \equiv 1 \cdot (p-1) \cdot 1^◆LB◆(p-3)/2◆RB◆ \equiv -1 \pmod◆LB◆p◆RB◆$$

($\Leftarrow$) If $n \geq 2$ is composite, then $n = ab$ with $1 \lt a \leq b \lt n$. If $a \neq b$
Both $a$ and $b$ appear in $(n-1)!$So $n \mid (n-1)!$ and $(n-1)! \equiv 0 \pmod◆LB◆n◆RB◆$. If $a = b$
(i.e., $n = a^2$), then $n > 4$ implies $a > 2$And both $a$ and $2a \lt a^2 = n$ appear in
$(n-1)!$So again $(n-1)! \equiv 0 \pmod◆LB◆n◆RB◆$. The case $n = 4$ gives
$3! = 6 \equiv 2 \pmod◆LB◆4◆RB◆ \neq -1$. $\blacksquare$

**Problem.** Use Wilson's theorem to find $8! \bmod 11$.

<details>
<summary>Solution</summary>

By Wilson's theorem, $(11 - 1)! = 10! \equiv -1 \pmod◆LB◆11◆RB◆$. $10! = 10 \cdot 9 \cdot 8!$So
$10 \cdot 9 \cdot 8! \equiv -1 \pmod◆LB◆11◆RB◆$. $90 \equiv 2 \pmod◆LB◆11◆RB◆$So
$2 \cdot 8! \equiv -1 \pmod◆LB◆11◆RB◆$. Multiplying by $6$ (the inverse of $2$ mod $11$):
$8! \equiv -6 \equiv 5 \pmod◆LB◆11◆RB◆$. $\blacksquare$

</details>

## 5. The Chinese Remainder Theorem

### 5.1 Statement and Proof

**Theorem 5.1 (Chinese Remainder Theorem).** Let $m_1, m_2, \ldots, m_k$ be pairwise coprime
Positive integers. Then for any integers $a_1, a_2, \ldots, a_k$The system of congruences

$$x \equiv a_i \pmod◆LB◆m_i◆RB◆, \quad i = 1, 2, \ldots, k$$

Has a unique solution modulo $M = m_1 m_2 \cdots m_k$.

_Proof._ Let $M_i = M/m_i$. Since $\gcd(m_i, M_i) = 1$There exist $b_i$ with
$b_i M_i \equiv 1 \pmod◆LB◆m_i◆RB◆$ (by Bézout). Set $x = \sum_◆LB◆i=1◆RB◆^k a_i b_i M_i$. Then
$x \equiv a_i b_i M_i \equiv a_i \cdot 1 \equiv a_i \pmod◆LB◆m_i◆RB◆$ since $M_j \equiv 0 \pmod◆LB◆m_i◆RB◆$ for
$j \neq i$. For uniqueness: if $x$ and $x'$ are both solutions, then $x - x'$ is divisible by each
$m_i$Hence by $M$So $x \equiv x' \pmod◆LB◆M◆RB◆$. $\blacksquare$

### 5.2 Worked Example

**Problem.** Solve $x \equiv 2 \pmod◆LB◆3◆RB◆$, $x \equiv 3 \pmod◆LB◆5◆RB◆$, $x \equiv 2 \pmod◆LB◆7◆RB◆$.

_Solution._ $M = 3 \cdot 5 \cdot 7 = 105$. $M_1 = 35$, $M_2 = 21$, $M_3 = 15$.

$35 \cdot 2 = 70 \equiv 1 \pmod◆LB◆3◆RB◆$So $b_1 = 2$. $21 \cdot 1 = 21 \equiv 1 \pmod◆LB◆5◆RB◆$So $b_2 = 1$.
$15 \cdot 1 = 15 \equiv 1 \pmod◆LB◆7◆RB◆$So $b_3 = 1$.

$x = 2 \cdot 2 \cdot 35 + 3 \cdot 1 \cdot 21 + 2 \cdot 1 \cdot 15 = 140 + 63 + 30 = 233 \equiv 23 \pmod◆LB◆105◆RB◆$.

Verification: $23 = 7 \cdot 3 + 2 \equiv 2 \pmod◆LB◆3◆RB◆$. $23 = 4 \cdot 5 + 3 \equiv 3 \pmod◆LB◆5◆RB◆$.
$23 = 3 \cdot 7 + 2 \equiv 2 \pmod◆LB◆7◆RB◆$. $\blacksquare$

### 5.3 More Worked Examples

**Problem.** Solve the system: $x \equiv 3 \pmod◆LB◆7◆RB◆$, $x \equiv 5 \pmod◆LB◆11◆RB◆$, $x \equiv 2 \pmod◆LB◆13◆RB◆$.

<details>
<summary>Solution</summary>

$M = 7 \cdot 11 \cdot 13 = 1001$.

$M_1 = 143$. We need $143 b_1 \equiv 1 \pmod◆LB◆7◆RB◆$. Since $143 = 20 \cdot 7 + 3$We need
$3b_1 \equiv 1 \pmod◆LB◆7◆RB◆$ So $b_1 \equiv 5 \pmod◆LB◆7◆RB◆$.

$M_2 = 91$. We need $91 b_2 \equiv 1 \pmod◆LB◆11◆RB◆$. Since $91 = 8 \cdot 11 + 3$We need
$3b_2 \equiv 1 \pmod◆LB◆11◆RB◆$ So $b_2 \equiv 4 \pmod◆LB◆11◆RB◆$.

$M_3 = 77$. We need $77 b_3 \equiv 1 \pmod◆LB◆13◆RB◆$. Since $77 = 5 \cdot 13 + 12$We need
$12b_3 \equiv 1 \pmod◆LB◆13◆RB◆$. $12 \equiv -1 \pmod◆LB◆13◆RB◆$So $-b_3 \equiv 1$Giving
$b_3 \equiv 12 \pmod◆LB◆13◆RB◆$.

$x = 3 \cdot 5 \cdot 143 + 5 \cdot 4 \cdot 91 + 2 \cdot 12 \cdot 77 = 2145 + 1820 + 1848 = 5813$.

$5813 \bmod 1001$: $5813 = 5 \cdot 1001 + 808$. So $x \equiv 808 \pmod◆LB◆1001◆RB◆$. $\blacksquare$

</details>

### 5.4 The General Chinese Remainder Theorem

The CRT can be extended to systems where the moduli are not necessarily pairwise coprime.

**Theorem 5.2 (General CRT).** The system $x \equiv a_i \pmod◆LB◆m_i◆RB◆$ for $i = 1, \ldots, k$ has a
Solution if and only if $a_i \equiv a_j \pmod◆LB◆\gcd(m_i, m_j)◆RB◆$ for all $i, j$. When a solution
Exists, it is unique modulo $\mathrm◆LB◆lcm(m_1, \ldots, m_k)$.

_Proof._ ($\Rightarrow$) If $x \equiv a_i \pmod◆LB◆m_i◆RB◆$ and $x \equiv a_j \pmod◆LB◆m_j◆RB◆$Then
$m_i \mid (x - a_i)$ and $m_j \mid (x - a_j)$. Any common divisor of $m_i$ and $m_j$ divides
$(x - a_i) - (x - a_j) = a_j - a_i$. So $\gcd(m_i, m_j) \mid (a_i - a_j)$.

($\Leftarrow$) Proceed pairwise. Consider $x \equiv a_1 \pmod◆LB◆m_1◆RB◆$ and $x \equiv a_2 \pmod◆LB◆m_2◆RB◆$.
Write $m_1 = d \cdot m_1'$ and $m_2 = d \cdot m_2'$ where $d = \gcd(m_1, m_2)$. By hypothesis
$a_1 \equiv a_2 \pmod◆LB◆d◆RB◆$. The combined congruence is equivalent to $x \equiv a_2 + dk \pmod◆LB◆m_2◆RB◆$
for some $k$ with $d \mid k$. By induction on $k$The full system Is solvable. Uniqueness modulo the
lcm follows from Proposition 4.5(3). $\blacksquare$

**Problem.** Solve $x \equiv 3 \pmod◆LB◆6◆RB◆$, $x \equiv 5 \pmod◆LB◆10◆RB◆$.

<details>
<summary>Solution</summary>

$\gcd(6, 10) = 2$. Check: $3 \equiv 5 \pmod◆LB◆2◆RB◆$? $3 \bmod 2 = 1$, $5 \bmod 2 = 1$. Yes, so a Solution
exists.

$x \equiv 3 \pmod◆LB◆6◆RB◆$ means $x = 6k + 3$. Substituting: $6k + 3 \equiv 5 \pmod◆LB◆10◆RB◆$So
$6k \equiv 2 \pmod◆LB◆10◆RB◆$. Dividing by $\gcd(6, 10) = 2$: $3k \equiv 1 \pmod◆LB◆5◆RB◆$Giving
$k \equiv 2 \pmod◆LB◆5◆RB◆$.

So $k = 5m + 2$And $x = 6(5m + 2) + 3 = 30m + 15$. The solution is $x \equiv 15 \pmod◆LB◆30◆RB◆$. Note
$\mathrm◆LB◆lcm(6, 10) = 30$. $\blacksquare$

</details>

**Problem.** Determine whether the system $x \equiv 5 \pmod◆LB◆12◆RB◆$, $x \equiv 3 \pmod◆LB◆15◆RB◆$
$x \equiv 8 \pmod◆LB◆20◆RB◆$ has a solution.

<details>
<summary>Solution</summary>

Check pairwise compatibility: $\gcd(12, 15) = 3$. $5 \equiv 3 \pmod◆LB◆3◆RB◆$?
$5 \bmod 3 = 2$, $3 \bmod 3 = 0$. No! $2 \neq 0$.

Therefore the system has no solution. $\blacksquare$

</details>

### 5.5 Applications of the CRT

**Application (RSA decryption).** In RSA, one computes $m^d \bmod n$ where $n = pq$. Since
$\phi(n) = (p-1)(q-1)$One can compute $m^d \bmod p$ and $m^d \bmod q$ separately (much faster For
large moduli) and then combine using the CRT.

**Application (Constructing integers with prescribed residues).** The CRT guarantees that for any
Choice of residues $a_i$ modulo pairwise coprime $m_i$We can find an integer with all those Residues
simultaneously. This is used in error-correcting codes and in the construction of Pseudorandom
number generators.

**Application (Simultaneous systems).** The CRT is used to reduce computation modulo a large Number
$n = m_1 m_2 \cdots m_k$ to computations modulo each smaller $m_i$. This "garner's Algorithm"
approach is widely used in computer algebra systems.

**Problem.** A number $N$ leaves remainder $3$ when divided by $8$, $1$ when divided by $9$And $7$
when divided by $25$. Find the smallest such $N$.

<details>
<summary>Solution</summary>

$M = 8 \cdot 9 \cdot 25 = 1800$.

$M_1 = 225$. $225b_1 \equiv 1 \pmod◆LB◆8◆RB◆$. $225 \equiv 1 \pmod◆LB◆8◆RB◆$So $b_1 = 1$. $M_2 = 200$.
$200b_2 \equiv 1 \pmod◆LB◆9◆RB◆$. $200 = 22 \cdot 9 + 2$So $2b_2 \equiv 1 \pmod◆LB◆9◆RB◆$, $b_2 = 5$. $M_3 = 72$.
$72b_3 \equiv 1 \pmod◆LB◆25◆RB◆$. $72 = 2 \cdot 25 + 22$So $22b_3 \equiv 1 \pmod◆LB◆25◆RB◆$.
$22 \equiv -3 \pmod◆LB◆25◆RB◆$. We need $-3b_3 \equiv 1$So $3b_3 \equiv 24$, $b_3 = 8$.

$N = 3 \cdot 1 \cdot 225 + 1 \cdot 5 \cdot 200 + 7 \cdot 8 \cdot 72 = 675 + 1000 + 4032 = 5707$.

$5707 \bmod 1800 = 5707 - 3 \cdot 1800 = 5707 - 5400 = 307$.

The smallest positive solution is $N = 307$. $\blacksquare$

</details>

## 6. Euler's Theorem and Fermat's Little Theorem

### 6.1 Euler's Totient Function

**Definition.** Euler's **totient function** $\phi(n)$ counts the integers in
$\\{1, 2, \ldots, n\\}$ That are coprime to $n$.

**Proposition 6.1.** If $p$ is prime, then $\phi(p) = p - 1$.

### 6.2 Multiplicativity of the Totient Function

**Theorem 6.2.** If $\gcd(m, n) = 1$Then $\phi(mn) = \phi(m)\phi(n)$.

_Proof._ We count the integers in $\\{1, 2, \ldots, mn\\}$ coprime to $mn$. Since $\gcd(m, n) = 1$
We have $\gcd(k, mn) = 1$ if and only if $\gcd(k, m) = 1$ and $\gcd(k, n) = 1$.

Consider the $m \times n$ grid where entry $(i, j)$ represents the number $k \equiv i \pmod◆LB◆m◆RB◆$
$k \equiv j \pmod◆LB◆n◆RB◆$. By the CRT, each pair $(i, j)$ with $1 \leq i \leq m$, $1 \leq j \leq n$
Corresponds to a unique $k$ modulo $mn$. The number $k$ is coprime to $mn$ iff $i$ is coprime to $m$
And $j$ is coprime to $n$. There are $\phi(m)$ choices for $i$ and $\phi(n)$ choices for $j$ Giving
$\phi(m) \cdot \phi(n)$ values of $k$ coprime to $mn$. $\blacksquare$

**Proposition 6.3.** If $n = p_1^◆LB◆a_1◆RB◆ \cdots p_k^◆LB◆a_k◆RB◆$Then
$\phi(n) = n \prod_◆LB◆p \mid n◆RB◆(1 - 1/p)$.

_Proof._ By multiplicativity, $\phi(n) = \prod_◆LB◆i=1◆RB◆^k \phi(p_i^◆LB◆a_i◆RB◆)$. Now
$\phi(p^a) = p^a - p^◆LB◆a-1◆RB◆ = p^a(1 - 1/p)$Since exactly $p^◆LB◆a-1◆RB◆$ of the $p^a$ integers in
$\\{1, \ldots, p^a\\}$ are multiples of $p$. $\blacksquare$

### 6.3 Euler's Theorem

**Theorem 6.4 (Euler's Theorem).** If $\gcd(a, n) = 1$Then

$$a^◆LB◆\phi(n)◆RB◆ \equiv 1 \pmod◆LB◆n◆RB◆$$

_Proof._ Let $U_n = \\{r_1, r_2, \ldots, r_◆LB◆\phi(n)◆RB◆\\}$ be the reduced residue system modulo $n$.
Since $\gcd(a, n) = 1$The map $r_i \mapsto ar_i \pmod◆LB◆n◆RB◆$ permutes $U_n$. Thus
$\prod_◆LB◆i=1◆RB◆^◆LB◆\phi(n)◆RB◆ (ar_i) \equiv \prod_◆LB◆i=1◆RB◆^◆LB◆\phi(n)◆RB◆ r_i \pmod◆LB◆n◆RB◆$So
$a^◆LB◆\phi(n)◆RB◆ \prod r_i \equiv \prod r_i \pmod◆LB◆n◆RB◆$. Since $\gcd(\prod r_i, n) = 1$We cancel to get
$a^◆LB◆\phi(n)◆RB◆ \equiv 1 \pmod◆LB◆n◆RB◆$. $\blacksquare$

**Corollary 6.5 (Fermat's Little Theorem).** If $p$ is prime and $\gcd(a, p) = 1$Then
$a^◆LB◆p-1◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$. Equivalently, $a^p \equiv a \pmod◆LB◆p◆RB◆$ for all $a$.

### 6.4 Worked Examples

**Problem.** Compute $7^◆LB◆222◆RB◆ \bmod 15$.

_Solution._ $\phi(15) = \phi(3)\phi(5) = 2 \cdot 4 = 8$. Since $\gcd(7, 15) = 1$
$7^8 \equiv 1 \pmod◆LB◆15◆RB◆$. We have $222 = 27 \cdot 8 + 6$So
$7^◆LB◆222◆RB◆ = (7^8)^◆LB◆27◆RB◆ \cdot 7^6 \equiv 1^◆LB◆27◆RB◆ \cdot 7^6 \pmod◆LB◆15◆RB◆$. Now
$7^2 = 49 \equiv 4 \pmod◆LB◆15◆RB◆$, $7^4 \equiv 16 \equiv 1 \pmod◆LB◆15◆RB◆$So
$7^6 = 7^4 \cdot 7^2 \equiv 1 \cdot 4 = 4 \pmod◆LB◆15◆RB◆$. $\blacksquare$

**Problem.** Show that $n^◆LB◆13◆RB◆ - n$ is divisible by $2730$ for all $n \in \mathbb◆LB◆Z◆RB◆$.

<details>
<summary>Solution</summary>

$2730 = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 13$. We show $n^◆LB◆13◆RB◆ \equiv n \pmod◆LB◆p◆RB◆$ for each prime
$p \in \\{2, 3, 5, 7, 13\\}$.

For $p = 13$: by Fermat, $n^◆LB◆13◆RB◆ \equiv n \pmod◆LB◆13◆RB◆$.

For $p \in \\{2, 3, 5, 7\\}$: by Fermat, $n^p \equiv n \pmod◆LB◆p◆RB◆$. Since $p \lt 13$By repeated
Application $n^◆LB◆13◆RB◆ = n^◆LB◆qp+r◆RB◆ = (n^p)^q \cdot n^r \equiv n^q \cdot n^r = n^◆LB◆q+r◆RB◆$. Iterating gives
$n^◆LB◆13◆RB◆ \equiv n \pmod◆LB◆p◆RB◆$.

By the CRT (since $2, 3, 5, 7, 13$ are pairwise coprime), $n^◆LB◆13◆RB◆ \equiv n \pmod◆LB◆2730◆RB◆$So
$2730 \mid (n^◆LB◆13◆RB◆ - n)$. $\blacksquare$

</details>

### 6.5a Fermat Pseudoprimes

**Definition.** A composite integer $n$ is a **Fermat pseudoprime to base $a$** if
$a^◆LB◆n-1◆RB◆ \equiv 1 \pmod◆LB◆n◆RB◆$. A composite integer that is a Fermat pseudoprime to all bases $a$ with
$\gcd(a, n) = 1$ is a **Carmichael number**.

The existence of Carmichael numbers shows that Fermat's little theorem is a necessary but not
Sufficient test for primality. The smallest Carmichael number is $561 = 3 \cdot 11 \cdot 17$.

**Problem.** Verify that $561$ is a Fermat pseudoprime to base $2$.

<details>
<summary>Solution</summary>

$2^◆LB◆560◆RB◆ \bmod 561$. Since $561 = 3 \cdot 11 \cdot 17$Compute modulo each factor:
$2^2 \equiv 1 \pmod◆LB◆3◆RB◆$So $2^◆LB◆560◆RB◆ = (2^2)^◆LB◆280◆RB◆ \equiv 1 \pmod◆LB◆3◆RB◆$. $2^◆LB◆10◆RB◆ \equiv 1 \pmod◆LB◆11◆RB◆$
(Fermat), and $560 = 56 \cdot 10$So $2^◆LB◆560◆RB◆ \equiv 1 \pmod◆LB◆11◆RB◆$. $2^◆LB◆16◆RB◆ \equiv 1 \pmod◆LB◆17◆RB◆$
(Fermat), and $560 = 35 \cdot 16$So $2^◆LB◆560◆RB◆ \equiv 1 \pmod◆LB◆17◆RB◆$.

By the CRT, $2^◆LB◆560◆RB◆ \equiv 1 \pmod◆LB◆561◆RB◆$. Since $561$ is composite, it is a Fermat pseudoprime To
base $2$. $\blacksquare$

</details>

### 6.5 Application to RSA

The RSA cryptosystem is a direct application of Euler's theorem.

**Setup.** Choose two large distinct primes $p$ and $q$. Set $n = pq$ and $\phi(n) = (p-1)(q-1)$.
Choose $e$ with $1 \lt e \lt \phi(n)$ and $\gcd(e, \phi(n)) = 1$. Compute $d$ such that
$ed \equiv 1 \pmod◆LB◆\phi(n)◆RB◆$ using the extended Euclidean algorithm.

**Public key:** $(n, e)$. **Private key:** $(n, d)$.

**Encryption:** To send message $m$ ($0 \leq m \lt n$), compute $c = m^e \bmod n$.

**Decryption:** Compute $m = c^d \bmod n$.

**Theorem 6.6.** RSA decryption is correct: $c^d \equiv m \pmod◆LB◆n◆RB◆$.

_Proof._ Since $ed \equiv 1 \pmod◆LB◆\phi(n)◆RB◆$Write $ed = 1 + k\phi(n)$ for some $k \in \mathbb◆LB◆Z◆RB◆$. If
$\gcd(m, n) = 1$Then
$c^d \equiv m^◆LB◆ed◆RB◆ = m^◆LB◆1 + k\phi(n)◆RB◆ \equiv m \cdot (m^◆LB◆\phi(n)◆RB◆)^k \equiv m \cdot 1^k \equiv m \pmod◆LB◆n◆RB◆$
by Euler's theorem.

If $\gcd(m, n) > 1$Then since $n = pq$We have $p \mid m$ or $q \mid m$. Suppose $p \mid m$ And
$q \nmid m$. By Fermat, $m^◆LB◆q-1◆RB◆ \equiv 1 \pmod◆LB◆q◆RB◆$. So
$m^◆LB◆ed◆RB◆ = m^◆LB◆1 + k(p-1)(q-1)◆RB◆ \equiv m \pmod◆LB◆q◆RB◆$. Also $m^◆LB◆ed◆RB◆ \equiv 0 \equiv m \pmod◆LB◆p◆RB◆$. By the
CRT, $m^◆LB◆ed◆RB◆ \equiv m \pmod◆LB◆n◆RB◆$. $\blacksquare$

**Problem.** Given $p = 61$, $q = 53$, $e = 17$Encrypt and decrypt the message $m = 65$.

<details>
<summary>Solution</summary>

$n = 61 \cdot 53 = 3233$, $\phi(n) = 60 \cdot 52 = 3120$.

Find $d$: solve $17d \equiv 1 \pmod◆LB◆3120◆RB◆$. Using the extended Euclidean algorithm:
$3120 = 183 \cdot 17 + 9$, $17 = 1 \cdot 9 + 8$, $9 = 1 \cdot 8 + 1$. Back-substituting:
$1 = 9 - 8 = 9 - (17 - 9) = 2 \cdot 9 - 17 = 2(3120 - 183 \cdot 17) - 17 = 2 \cdot 3120 - 367 \cdot 17$.
So $d \equiv -367 \equiv 2753 \pmod◆LB◆3120◆RB◆$.

Encrypt: $c = 65^◆LB◆17◆RB◆ \bmod 3233$. Compute: $65^2 = 4225 \equiv 992 \pmod◆LB◆3233◆RB◆$.
$65^4 \equiv 992^2 = 984064 \equiv 1232 \pmod◆LB◆3233◆RB◆$.
$65^8 \equiv 1232^2 = 1517824 \equiv 1547 \pmod◆LB◆3233◆RB◆$.
$65^◆LB◆16◆RB◆ \equiv 1547^2 = 2393209 \equiv 789 \pmod◆LB◆3233◆RB◆$.
$65^◆LB◆17◆RB◆ = 65^◆LB◆16◆RB◆ \cdot 65 \equiv 789 \cdot 65 = 51285 \equiv 2790 \pmod◆LB◆3233◆RB◆$.

So $c = 2790$. Decrypt: $m = 2790^◆LB◆2753◆RB◆ \bmod 3233$. (By the correctness
.../1-number-and-algebra/3_proof-and-logic, this returns $65$.) $\blacksquare$

</details>

## 7. Primitive Roots

### 7.1 The Multiplicative Order

**Definition.** The **multiplicative order** of $a$ modulo $n$ (where $\gcd(a, n) = 1$) is the
Smallest positive integer $k$ such that $a^k \equiv 1 \pmod◆LB◆n◆RB◆$. We write $\mathrm◆LB◆ord_n(a) = k$.

**Proposition 7.1.** $\mathrm◆LB◆ord_n(a)$ divides $\phi(n)$.

**Proposition 7.2.** $a^k \equiv 1 \pmod◆LB◆n◆RB◆$ if and only if $\mathrm◆LB◆ord_n(a) \mid k$.

**Proposition 7.3.** If $\mathrm◆LB◆ord_n(a) = k$Then $\mathrm◆LB◆ord_n(a^m) = k / \gcd(k, m)$.

### 7.2 Primitive Roots

**Definition.** $g$ is a **primitive root modulo $n$** if $\mathrm◆LB◆ord_n(g) = \phi(n)$I.e., $g$
Generates the multiplicative group $(\mathbb◆LB◆Z◆RB◆/n\mathbb◆LB◆Z◆RB◆)^*$.

**Theorem 7.4.** A primitive root modulo $n$ exists if and only if $n = 2$, $n = 4$, $n = p^k$Or
$n = 2p^k$ where $p$ is an odd prime and $k \geq 1$.

_Intuition._ The multiplicative group $(\mathbb◆LB◆Z◆RB◆/n\mathbb◆LB◆Z◆RB◆)^*$ is cyclic precisely for these
Values of $n$. When the group is not cyclic (e.g., $n = 8$ where
$(\mathbb◆LB◆Z◆RB◆/8\mathbb◆LB◆Z◆RB◆)^* \cong C_2 \times C_2$), no single element can generate the entire group.

**Proposition 7.4a.**
$(\mathbb◆LB◆Z◆RB◆/n\mathbb◆LB◆Z◆RB◆)^* \cong \prod_◆LB◆i=1◆RB◆^k (\mathbb◆LB◆Z◆RB◆/p_i^◆LB◆a_i◆RB◆\mathbb◆LB◆Z◆RB◆)^*$ Where
$n = \prod p_i^◆LB◆a_i◆RB◆$ is the prime factorization. Each factor $(\mathbb◆LB◆Z◆RB◆/p^a\mathbb◆LB◆Z◆RB◆)^*$ is
cyclic for odd primes $p$.

This decomposition explains why primitive roots exist only for the stated values: a product of
Cyclic groups is cyclic if and only if the orders are pairwise coprime.

**Theorem 7.5.** If $n$ has a primitive root, then there are exactly $\phi(\phi(n))$ primitive roots
Modulo $n$.

### 7.3 Existence of Primitive Roots for Primes

**Theorem 7.6.** Every prime $p$ has a primitive root.

_Proof._ Let $\psi(d)$ denote the number of elements of $(\mathbb◆LB◆Z◆RB◆/p\mathbb◆LB◆Z◆RB◆)^*$ of order
Exactly $d$. The key facts are:

1. $\psi(d) \leq \phi(d)$ for all $d \mid (p-1)$.
2. $\sum_◆LB◆d \mid (p-1)◆RB◆ \psi(d) = p - 1 = \sum_◆LB◆d \mid (p-1)◆RB◆ \phi(d)$.

If $\psi(d) \lt \phi(d)$ for some $d$Then the sum $\sum \psi(d)$ would be strictly less than
$\sum \phi(d) = p - 1$A contradiction. So $\psi(d) = \phi(d)$ for all $d \mid (p-1)$. In Particular,
$\psi(p - 1) = \phi(p - 1) > 0$So primitive roots exist. $\blacksquare$

### 7.4 Finding Primitive Roots

To test whether $g$ is a primitive root modulo $p$ (where $p$ is prime), it suffices to verify
$g^◆LB◆(p-1)/q◆RB◆ \not\equiv 1 \pmod◆LB◆p◆RB◆$ for every prime divisor $q$ of $p - 1$.

**Proposition 7.7.** Let $p$ be prime and $g \in (\mathbb◆LB◆Z◆RB◆/p\mathbb◆LB◆Z◆RB◆)^*$. Then $g$ is a
primitive Root modulo $p$ if and only if for every prime
$q \mid (p - 1)$, $g^◆LB◆(p-1)/q◆RB◆ \not\equiv 1 \pmod◆LB◆p◆RB◆$.

_Proof._ If $g$ is a primitive root, $\mathrm◆LB◆ord_p(g) = p - 1$. If $g^◆LB◆(p-1)/q◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$
For some prime $q \mid (p-1)$Then $\mathrm◆LB◆ord_p(g) \mid (p-1)/q \lt p-1$Contradiction.

Conversely, if $g$ is not a primitive root, let $d = \mathrm◆LB◆ord_p(g) \lt p - 1$. Then
$d \mid (p-1)$ So $(p-1)/d > 1$ has some prime factor $q$Meaning $q \mid (p-1)$ and
$d \mid (p-1)/q$. Then $g^◆LB◆(p-1)/q◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$Contradicting the hypothesis. $\blacksquare$

**Problem.** Find all primitive roots modulo $13$.

<details>
<summary>Solution</summary>

$\phi(13) = 12$. We need elements of order $12$ in $(\mathbb◆LB◆Z◆RB◆/13\mathbb◆LB◆Z◆RB◆)^*$. The prime divisors
of $12$ are $2$ and $3$. We test $g^6$ and $g^4$.

$g = 2$: $2^4 = 16 \equiv 3 \not\equiv 1$, $2^6 = 64 \equiv 12 \equiv -1 \not\equiv 1 \pmod◆LB◆13◆RB◆$. So
$2$ is a primitive root.

$g = 3$: $3^4 = 81 \equiv 3 \pmod◆LB◆13◆RB◆$. Not a primitive root (order divides $4$).

$g = 5$: $5^4 = 625 \equiv 1 \pmod◆LB◆13◆RB◆$. Not a primitive root.

$g = 6$: $6^4 \equiv 9$, $6^6 \equiv 12 \equiv -1 \pmod◆LB◆13◆RB◆$. Primitive root.

$g = 7$: $7^4 \equiv 9$, $7^6 \equiv 12 \equiv -1 \pmod◆LB◆13◆RB◆$. Primitive root.

$g = 11$: $11^4 \equiv 3$, $11^6 \equiv 12 \equiv -1 \pmod◆LB◆13◆RB◆$. Primitive root.

By Theorem 7.5, there are $\phi(12) = 4$ primitive roots modulo $13$: $2, 6, 7, 11$. $\blacksquare$

</details>

### 7.5 Index Calculus

When a primitive root $g$ modulo $p$ is known, every element $a$ of $(\mathbb◆LB◆Z◆RB◆/p\mathbb◆LB◆Z◆RB◆)^*$ Can
be written uniquely as $a \equiv g^k \pmod◆LB◆p◆RB◆$ with $0 \leq k \lt p - 1$. The exponent $k$ Is called
the **index** (or **discrete logarithm**) of $a$ to base $g$Written $\mathrm◆LB◆ind_g(a) = k$.

**Proposition 7.8 (Properties of indices).** Let $g$ be a primitive root modulo $p$. For all
$a, b \in (\mathbb◆LB◆Z◆RB◆/p\mathbb◆LB◆Z◆RB◆)^*$:

1. $\mathrm◆LB◆ind_g(ab) \equiv \mathrm◆LB◆ind_g(a) + \mathrm◆LB◆ind_g(b) \pmod◆LB◆p-1◆RB◆$.
2. $\mathrm◆LB◆ind_g(a^k) \equiv k \cdot \mathrm◆LB◆ind_g(a) \pmod◆LB◆p-1◆RB◆$.
3. $\mathrm◆LB◆ind_g(1) = 0$ and $\mathrm◆LB◆ind_g(g) = 1$.

### 7.6 The Discrete Logarithm Problem

**Definition.** Given a prime $p$A primitive root $g$ modulo $p$And
$a \in (\mathbb◆LB◆Z◆RB◆/p\mathbb◆LB◆Z◆RB◆)^*$ The **discrete logarithm problem** (DLP) asks: find $k$ such that
$g^k \equiv a \pmod◆LB◆p◆RB◆$.

Unlike ordinary logarithms, no polynomial-time algorithm is known for the DLP. The best known
Algorithms (baby-step giant-step, index calculus, number field sieve) run in subexponential time.

**Application (Diffie--Hellman key exchange).** Alice and Bob agree on a large prime $p$ and
Primitive root $g$ (public). Alice chooses secret $a$Sends $g^a \bmod p$. Bob chooses secret $b$
Sends $g^b \bmod p$. The shared secret is $g^◆LB◆ab◆RB◆ \bmod p$Computable by Alice as $(g^b)^a$ and By
Bob as $(g^a)^b$. An eavesdropper seeing $g^a$ and $g^b$ cannot efficiently compute $g^◆LB◆ab◆RB◆$ Without
solving the DLP.

### 7.7 Worked Example: Index Calculus

**Problem.** Let $g = 2$ be a primitive root modulo $19$. Find $\mathrm◆LB◆ind_2(14) \pmod◆LB◆19◆RB◆$.

<details>
<summary>Solution</summary>

First, verify $2$ is a primitive root modulo $19$: $\phi(19) = 18$Prime factors of $18$ are $2$ and
$3$. $2^◆LB◆18/2◆RB◆ = 2^9 = 512$.
$512 / 19 = 26.9\ldots$, $26 \cdot 19 = 494$, $512 - 494 = 18 \equiv -1 \pmod◆LB◆19◆RB◆$.
$2^◆LB◆18/3◆RB◆ = 2^6 = 64$. $64 / 19 = 3.4\ldots$, $64 - 57 = 7 \not\equiv 1 \pmod◆LB◆19◆RB◆$. Confirmed.

Compute powers of $2$ modulo $19$:
$2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16 \equiv -3$, $2^5 = 32 \equiv 13 \equiv -6$
$2^6 = 64 \equiv 7$, $2^7 = 14$, $2^8 = 28 \equiv 9$, $2^9 = 18 \equiv -1$
$2^◆LB◆10◆RB◆ \equiv -2 \equiv 17$, $2^◆LB◆11◆RB◆ \equiv -4 \equiv 15$, $2^◆LB◆12◆RB◆ \equiv -8 \equiv 11$
$2^◆LB◆13◆RB◆ \equiv -16 \equiv 3$, $2^◆LB◆14◆RB◆ = 6$, $2^◆LB◆15◆RB◆ = 12$, $2^◆LB◆16◆RB◆ = 24 \equiv 5$
$2^◆LB◆17◆RB◆ = 10$, $2^◆LB◆18◆RB◆ = 20 \equiv 1$.

From $2^7 = 14 \pmod◆LB◆19◆RB◆$We get $\mathrm◆LB◆ind_2(14) = 7$. $\blacksquare$

</details>

**Problem.** Using the index table above, solve $6^x \equiv 11 \pmod◆LB◆19◆RB◆$.

<details>
<summary>Solution</summary>

Taking indices base $2$: $\mathrm◆LB◆ind_2(6^x) = \mathrm◆LB◆ind_2(11)$.
$x \cdot \mathrm◆LB◆ind_2(6) \equiv \mathrm◆LB◆ind_2(11) \pmod◆LB◆18◆RB◆$.

From the table: $\mathrm◆LB◆ind_2(6) = 14$ and $\mathrm◆LB◆ind_2(11) = 12$. So $14x \equiv 12 \pmod◆LB◆18◆RB◆$.

$\gcd(14, 18) = 2$ and $2 \mid 12$So solutions exist. Divide by $2$: $7x \equiv 6 \pmod◆LB◆9◆RB◆$.
$7^◆LB◆-1◆RB◆ \equiv 4 \pmod◆LB◆9◆RB◆$ (since $7 \cdot 4 = 28 \equiv 1$). So
$x \equiv 4 \cdot 6 = 24 \equiv 6 \pmod◆LB◆9◆RB◆$.

The solutions modulo $18$ are $x \equiv 6, 15 \pmod◆LB◆18◆RB◆$.

Check: $6^6 = 46656$. $46656 / 19 = 2455.6\ldots$, $2455 \cdot 19 = 46645$, $46656 - 46645 = 11$.
$\blacksquare$

</details>

## 8. Quadratic Residues

### 8.1 Definition

**Definition.** Let $p$ be an odd prime. An integer $a$ not divisible by $p$ is a **quadratic
Residue** modulo $p$ if the congruence $x^2 \equiv a \pmod◆LB◆p◆RB◆$ has a solution. Otherwise $a$ is a
**quadratic non-residue**.

**Proposition 8.1.** There are exactly $(p - 1)/2$ quadratic residues and $(p - 1)/2$ quadratic
Non-residues modulo $p$.

_Proof._ The map $x \mapsto x^2 \pmod◆LB◆p◆RB◆$ from $\\{1, 2, \ldots, p-1\\}$ to the set of quadratic
Residues is exactly two-to-one since $x^2 \equiv (-x)^2 \pmod◆LB◆p◆RB◆$ but $x \not\equiv -x \pmod◆LB◆p◆RB◆$ for
$x \not\equiv 0 \pmod◆LB◆p◆RB◆$ (since $p$ is odd). $\blacksquare$

### 8.2 Euler's Criterion

**Theorem 8.2 (Euler's Criterion).** Let $p$ be an odd prime and $\gcd(a, p) = 1$. Then

$$a^◆LB◆(p-1)/2◆RB◆ \equiv \begin◆LB◆cases◆RB◆ 1 \pmod◆LB◆p◆RB◆ & \mathrm◆LB◆if\  a \mathrm◆LB◆\ is\ a\ QR\ mod\  p \\ -1 \pmod◆LB◆p◆RB◆ & \mathrm◆LB◆if\  a \mathrm◆LB◆\ is\ a\ QNR\ mod\  p \end◆LB◆cases◆RB◆$$

_Proof._ By Fermat's little theorem, $a^◆LB◆p-1◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$So
$(a^◆LB◆(p-1)/2◆RB◆ - 1)(a^◆LB◆(p-1)/2◆RB◆ + 1) \equiv 0 \pmod◆LB◆p◆RB◆$. Thus $a^◆LB◆(p-1)/2◆RB◆ \equiv \pm 1 \pmod◆LB◆p◆RB◆$.

If $a$ is a QR, say $a \equiv x^2 \pmod◆LB◆p◆RB◆$Then $a^◆LB◆(p-1)/2◆RB◆ \equiv x^◆LB◆p-1◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$.

For the converse: $a^◆LB◆(p-1)/2◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$ implies $a$ is a QR (by a polynomial argument: the
Equation $x^◆LB◆(p-1)/2◆RB◆ - 1 \equiv 0 \pmod◆LB◆p◆RB◆$ has at most $(p-1)/2$ solutions, and all QRs are
Solutions). Since there are exactly $(p-1)/2$ QRs and $(p-1)/2$ elements with
$a^◆LB◆(p-1)/2◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$These sets coincide. $\blacksquare$

### 8.3 The Legendre Symbol

**Definition.** The **Legendre symbol** is defined by

$$\left(\frac◆LB◆a◆RB◆◆LB◆p◆RB◆\right) = \begin◆LB◆cases◆RB◆ 0 & \mathrm◆LB◆if\  p \mid a \\ 1 & \mathrm◆LB◆if\  a \mathrm◆LB◆\ is\ a\ QR\ mod\  p \\ -1 & \mathrm◆LB◆if\  a \mathrm◆LB◆\ is\ a\ QNR\ mod\  p \end◆LB◆cases◆RB◆$$

**Proposition 8.3.** The Legendre symbol is completely multiplicative:
$\left(\frac◆LB◆ab◆RB◆◆LB◆p◆RB◆\right) = \left(\frac◆LB◆a◆RB◆◆LB◆p◆RB◆\right)\left(\frac◆LB◆b◆RB◆◆LB◆p◆RB◆\right)$.

### 8.4 Quadratic Reciprocity

**Theorem 8.4 (Law of Quadratic Reciprocity).** For distinct odd primes $p$ and $q$:

$$\left(\frac◆LB◆p◆RB◆◆LB◆q◆RB◆\right)\left(\frac◆LB◆q◆RB◆◆LB◆p◆RB◆\right) = (-1)^◆LB◆\frac◆LB◆p-1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆q-1◆RB◆◆LB◆2◆RB◆◆RB◆$$

**Theorem 8.5 (First Supplement).** $\left(\frac◆LB◆-1◆RB◆◆LB◆p◆RB◆\right) = (-1)^◆LB◆(p-1)/2◆RB◆$. So $-1$ is a QR
Mod $p$ if and only if $p \equiv 1 \pmod◆LB◆4◆RB◆$.

**Theorem 8.6 (Second Supplement).** $\left(\frac◆LB◆2◆RB◆◆LB◆p◆RB◆\right) = (-1)^◆LB◆(p^2-1)/8◆RB◆$. So $2$ is a QR
Mod $p$ if and only if $p \equiv \pm 1 \pmod◆LB◆8◆RB◆$.

### 8.5 Proofs of the Supplements

**Proof of the First Supplement.** By Euler's criterion:
$\left(\frac◆LB◆-1◆RB◆◆LB◆p◆RB◆\right) = (-1)^◆LB◆(p-1)/2◆RB◆$. This equals $1$ when $p \equiv 1 \pmod◆LB◆4◆RB◆$ (since
$(p-1)/2$ is even) and $-1$ when $p \equiv 3 \pmod◆LB◆4◆RB◆$ (since $(p-1)/2$ is odd). $\blacksquare$

**Proof of the Second Supplement.** By Euler's criterion,
$\left(\frac◆LB◆2◆RB◆◆LB◆p◆RB◆\right) = 2^◆LB◆(p-1)/2◆RB◆ \pmod◆LB◆p◆RB◆$. Consider the product
$P = \prod_◆LB◆k=1◆RB◆^◆LB◆(p-1)/2◆RB◆ 2k = 2^◆LB◆(p-1)/2◆RB◆ \cdot ((p-1)/2)!$. Reduce each $2k$ modulo $p$ into the
set $\\{-(p-1)/2, \ldots, -1, 1, \ldots, (p-1)/2\\}$. The key observation (Gauss's lemma) is that
the number of $2k$ landing in the negative range is $(p^2 - 1)/8$Which depends on $p \bmod 8$.
$\blacksquare$

### 8.6 The Jacobi Symbol

**Definition.** The **Jacobi symbol** generalizes the Legendre symbol to odd composite moduli. For
$n = p_1^◆LB◆a_1◆RB◆ \cdots p_k^◆LB◆a_k◆RB◆$ (odd, positive):

$$\left(\frac◆LB◆a◆RB◆◆LB◆n◆RB◆\right) = \prod_◆LB◆i=1◆RB◆^k \left(\frac◆LB◆a◆RB◆◆LB◆p_i◆RB◆\right)^◆LB◆a_i◆RB◆$$

**Warning.** $\left(\frac◆LB◆a◆RB◆◆LB◆n◆RB◆\right) = 1$ does not imply $a$ is a QR modulo $n$ when $n$ is
Composite.

The Jacobi symbol satisfies the same reciprocity law and supplements as the Legendre symbol, making
It efficient for computation.

**Proposition 8.7 (Properties of the Jacobi symbol).** For odd positive $m, n$:

1. $\left(\frac◆LB◆a◆RB◆◆LB◆mn◆RB◆\right) = \left(\frac◆LB◆a◆RB◆◆LB◆m◆RB◆\right)\left(\frac◆LB◆a◆RB◆◆LB◆n◆RB◆\right)$.
2. $\left(\frac◆LB◆ab◆RB◆◆LB◆n◆RB◆\right) = \left(\frac◆LB◆a◆RB◆◆LB◆n◆RB◆\right)\left(\frac◆LB◆b◆RB◆◆LB◆n◆RB◆\right)$.
3. $\left(\frac◆LB◆m◆RB◆◆LB◆n◆RB◆\right)\left(\frac◆LB◆n◆RB◆◆LB◆m◆RB◆\right) = (-1)^◆LB◆\frac◆LB◆m-1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆n-1◆RB◆◆LB◆2◆RB◆◆RB◆$.
4. $\left(\frac◆LB◆-1◆RB◆◆LB◆n◆RB◆\right) = (-1)^◆LB◆(n-1)/2◆RB◆$.
5. $\left(\frac◆LB◆2◆RB◆◆LB◆n◆RB◆\right) = (-1)^◆LB◆(n^2-1)/8◆RB◆$.
6. If $a \equiv b \pmod◆LB◆n◆RB◆$Then $\left(\frac◆LB◆a◆RB◆◆LB◆n◆RB◆\right) = \left(\frac◆LB◆b◆RB◆◆LB◆n◆RB◆\right)$.

### 8.7 Worked Examples

**Problem.** Determine whether $73$ is a quadratic residue modulo $97$.

_Solution._ By quadratic reciprocity, since both $73$ and $97$ are congruent to $1 \pmod◆LB◆4◆RB◆$:

$$\left(\frac◆LB◆73◆RB◆◆LB◆97◆RB◆\right) = \left(\frac◆LB◆97◆RB◆◆LB◆73◆RB◆\right) = \left(\frac◆LB◆24◆RB◆◆LB◆73◆RB◆\right) = \left(\frac◆LB◆4◆RB◆◆LB◆73◆RB◆\right)\left(\frac◆LB◆6◆RB◆◆LB◆73◆RB◆\right) = 1 \cdot \left(\frac◆LB◆6◆RB◆◆LB◆73◆RB◆\right)$$

$$\left(\frac◆LB◆6◆RB◆◆LB◆73◆RB◆\right) = \left(\frac◆LB◆2◆RB◆◆LB◆73◆RB◆\right)\left(\frac◆LB◆3◆RB◆◆LB◆73◆RB◆\right)$$

$\left(\frac◆LB◆2◆RB◆◆LB◆73◆RB◆\right) = 1$ since $73 \equiv 1 \pmod◆LB◆8◆RB◆$.

$\left(\frac◆LB◆3◆RB◆◆LB◆73◆RB◆\right) = (-1)^◆LB◆\frac◆LB◆3-1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆73-1◆RB◆◆LB◆2◆RB◆◆RB◆ \left(\frac◆LB◆73◆RB◆◆LB◆3◆RB◆\right) = (-1)^◆LB◆72◆RB◆ \left(\frac◆LB◆1◆RB◆◆LB◆3◆RB◆\right) = 1 \cdot 1 = 1$.

So $\left(\frac◆LB◆73◆RB◆◆LB◆97◆RB◆\right) = 1$And $73$ is a QR modulo $97$. $\blacksquare$

**Problem.** Compute the Jacobi symbol $\left(\frac◆LB◆219◆RB◆◆LB◆383◆RB◆\right)$.

<details>
<summary>Solution</summary>

Both $219 = 3 \cdot 73$ and $383$ are odd. Since $383 \equiv 3 \pmod◆LB◆4◆RB◆$ and $219 \equiv 3 \pmod◆LB◆4◆RB◆$
By reciprocity: $\left(\frac◆LB◆219◆RB◆◆LB◆383◆RB◆\right) = -\left(\frac◆LB◆383◆RB◆◆LB◆219◆RB◆\right)$.

$383 \bmod 219 = 164$. So
$\left(\frac◆LB◆383◆RB◆◆LB◆219◆RB◆\right) = \left(\frac◆LB◆164◆RB◆◆LB◆219◆RB◆\right) = \left(\frac◆LB◆4◆RB◆◆LB◆219◆RB◆\right)\left(\frac◆LB◆41◆RB◆◆LB◆219◆RB◆\right) = \left(\frac◆LB◆41◆RB◆◆LB◆219◆RB◆\right)$.

$41 \equiv 1 \pmod◆LB◆4◆RB◆$, $219 \equiv 3 \pmod◆LB◆4◆RB◆$So
$\left(\frac◆LB◆41◆RB◆◆LB◆219◆RB◆\right) = -\left(\frac◆LB◆219◆RB◆◆LB◆41◆RB◆\right)$.

$219 \bmod 41 = 14$. So
$\left(\frac◆LB◆219◆RB◆◆LB◆41◆RB◆\right) = \left(\frac◆LB◆14◆RB◆◆LB◆41◆RB◆\right) = \left(\frac◆LB◆2◆RB◆◆LB◆41◆RB◆\right)\left(\frac◆LB◆7◆RB◆◆LB◆41◆RB◆\right)$.

$\left(\frac◆LB◆2◆RB◆◆LB◆41◆RB◆\right) = 1$ since $41 \equiv 1 \pmod◆LB◆8◆RB◆$.

$7 \equiv 3 \pmod◆LB◆4◆RB◆$, $41 \equiv 1 \pmod◆LB◆4◆RB◆$So
$\left(\frac◆LB◆7◆RB◆◆LB◆41◆RB◆\right) = \left(\frac◆LB◆41◆RB◆◆LB◆7◆RB◆\right) = \left(\frac◆LB◆6◆RB◆◆LB◆7◆RB◆\right) = \left(\frac◆LB◆2◆RB◆◆LB◆7◆RB◆\right)\left(\frac◆LB◆3◆RB◆◆LB◆7◆RB◆\right)$.

$\left(\frac◆LB◆2◆RB◆◆LB◆7◆RB◆\right) = 1$ since $7 \equiv -1 \pmod◆LB◆8◆RB◆$.

$\left(\frac◆LB◆3◆RB◆◆LB◆7◆RB◆\right) = (-1)^◆LB◆1 \cdot 3◆RB◆ \left(\frac◆LB◆7◆RB◆◆LB◆3◆RB◆\right) = -\left(\frac◆LB◆1◆RB◆◆LB◆3◆RB◆\right) = -1$.

Working back: $\left(\frac◆LB◆7◆RB◆◆LB◆41◆RB◆\right) = 1 \cdot (-1) = -1$.
$\left(\frac◆LB◆219◆RB◆◆LB◆41◆RB◆\right) = 1 \cdot (-1) = -1$. $\left(\frac◆LB◆41◆RB◆◆LB◆219◆RB◆\right) = -(-1) = 1$.
$\left(\frac◆LB◆383◆RB◆◆LB◆219◆RB◆\right) = 1$. $\left(\frac◆LB◆219◆RB◆◆LB◆383◆RB◆\right) = -(1) = -1$.

So $219$ is a QNR modulo $383$. $\blacksquare$

</details>

### 8.8 Applications of Quadratic Reciprocity

**Application (Solovay--Strassen primality test).** For an odd candidate $n$Choose random $a$ and
Check whether $a^◆LB◆(n-1)/2◆RB◆ \equiv \left(\frac◆LB◆a◆RB◆◆LB◆n◆RB◆\right) \pmod◆LB◆n◆RB◆$ (where the Jacobi symbol is
used). If $n$ is composite, at least half of all $a$ violate this. This gives a probabilistic
primality test.

**Application (determining solvability).** Quadratic reciprocity allows efficient computation of
Legendre symbols without directly checking all residues, reducing an $O(p)$ problem to $O(\log p)$
arithmetic operations.

### 8.9 Computing Square Roots Modulo p

When $a$ is a quadratic residue modulo an odd prime $p$Finding $x$ with $x^2 \equiv a \pmod◆LB◆p◆RB◆$ Is
the **square root problem modulo $p$**.

**Proposition 8.8.** When $p \equiv 3 \pmod◆LB◆4◆RB◆$A square root of $a$ modulo $p$ (when $a$ is a QR) is
Given by $x \equiv \pm a^◆LB◆(p+1)/4◆RB◆ \pmod◆LB◆p◆RB◆$.

_Proof._ $(a^◆LB◆(p+1)/4◆RB◆)^2 = a^◆LB◆(p+1)/2◆RB◆ = a \cdot a^◆LB◆(p-1)/2◆RB◆ \equiv a \cdot 1 = a \pmod◆LB◆p◆RB◆$ by
Euler's criterion. $\blacksquare$

**Problem.** Find a square root of $5$ modulo $29$.

<details>
<summary>Solution</summary>

First verify $5$ is a QR modulo $29$:
$\left(\frac◆LB◆5◆RB◆◆LB◆29◆RB◆\right) = \left(\frac◆LB◆29◆RB◆◆LB◆5◆RB◆\right) = \left(\frac◆LB◆4◆RB◆◆LB◆5◆RB◆\right) = 1$. Yes.

Since $29 \equiv 1 \pmod◆LB◆4◆RB◆$We cannot use the simple formula. We use a direct search among The QRs
modulo $29$. The squares modulo $29$ of $1, 2, \ldots, 14$ are:
$1, 4, 9, 16, 25, 36 \equiv 7, 49 \equiv 20, 64 \equiv 6, 81 \equiv 23, 100 \equiv 13$
$121 \equiv 5, 144 \equiv 28, 169 \equiv 24, 196 \equiv 22$.

So $11^2 = 121 \equiv 5 \pmod◆LB◆29◆RB◆$. A square root of $5$ modulo $29$ is $x \equiv 11$ (and also
$x \equiv 18$). $\blacksquare$

</details>

**Problem.** Find a square root of $7$ modulo $19$.

<details>
<summary>Solution</summary>

$19 \equiv 3 \pmod◆LB◆4◆RB◆$So we can use the formula. First verify $7$ is a QR:
$\left(\frac◆LB◆7◆RB◆◆LB◆19◆RB◆\right) = (-1)^◆LB◆\frac◆LB◆7-1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆19-1◆RB◆◆LB◆2◆RB◆◆RB◆ \left(\frac◆LB◆19◆RB◆◆LB◆7◆RB◆\right) = (-1)^◆LB◆54◆RB◆ \left(\frac◆LB◆5◆RB◆◆LB◆7◆RB◆\right) = \left(\frac◆LB◆5◆RB◆◆LB◆7◆RB◆\right)$.
$\left(\frac◆LB◆5◆RB◆◆LB◆7◆RB◆\right) = (-1)^◆LB◆2 \cdot 3◆RB◆ \left(\frac◆LB◆7◆RB◆◆LB◆5◆RB◆\right) = \left(\frac◆LB◆2◆RB◆◆LB◆5◆RB◆\right) = (-1)^◆LB◆(25-1)/8◆RB◆ = (-1)^3 = -1$.

Wait, let me recompute. $\left(\frac◆LB◆7◆RB◆◆LB◆19◆RB◆\right)$: $7 \equiv 3 \pmod◆LB◆4◆RB◆$, $19 \equiv 3 \pmod◆LB◆4◆RB◆$So
$\left(\frac◆LB◆7◆RB◆◆LB◆19◆RB◆\right) = -\left(\frac◆LB◆19◆RB◆◆LB◆7◆RB◆\right) = -\left(\frac◆LB◆5◆RB◆◆LB◆7◆RB◆\right)$. Now
$5 \equiv 1 \pmod◆LB◆4◆RB◆$, $7 \equiv 3 \pmod◆LB◆4◆RB◆$ So
$\left(\frac◆LB◆5◆RB◆◆LB◆7◆RB◆\right) = -\left(\frac◆LB◆7◆RB◆◆LB◆5◆RB◆\right) = -\left(\frac◆LB◆2◆RB◆◆LB◆5◆RB◆\right) = -(-1) = 1$. So
$\left(\frac◆LB◆7◆RB◆◆LB◆19◆RB◆\right) = -1$. This means $7$ is a QNR modulo $19$So no square root exists.
$\blacksquare$

</details>

## 9. Continued Fractions

### 9.1 Simple Continued Fractions

A **simple continued fraction** is an expression of the form

$$a_0 + \frac◆LB◆1◆RB◆◆LB◆a_1 + \frac◆LB◆1◆RB◆◆LB◆a_2 + \frac◆LB◆1◆RB◆◆LB◆a_3 + \cdots◆RB◆◆RB◆◆RB◆$$

Where $a_0 \in \mathbb◆LB◆Z◆RB◆$ and $a_1, a_2, \ldots \in \mathbb◆LB◆N◆RB◆$. We write
$[a_0; a_1, a_2, \ldots]$.

### 9.2 Computation

For an irrational number $\alpha$The continued fraction expansion is computed recursively:

$a_0 = \lfloor \alpha \rfloor$, $\alpha_1 = 1/(\alpha - a_0)$, $a_1 = \lfloor \alpha_1 \rfloor$And So
on.

**Example.**
$\sqrt◆LB◆2◆RB◆ = 1 + (\sqrt◆LB◆2◆RB◆ - 1) = 1 + \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆ + 1◆RB◆ = 1 + \frac◆LB◆1◆RB◆◆LB◆2 + (\sqrt◆LB◆2◆RB◆ - 1)◆RB◆$. So
$\sqrt◆LB◆2◆RB◆ = [1; 2, 2, 2, \ldots] = [1; \overline◆LB◆2◆RB◆]$.

### 9.3 Convergents

The $n$-th **convergent** $p_n/q_n = [a_0; a_1, \ldots, a_n]$ is computed by:

$$p_◆LB◆-1◆RB◆ = 1, \quad p_0 = a_0, \quad p_n = a_n p_◆LB◆n-1◆RB◆ + p_◆LB◆n-2◆RB◆$$
$$q_◆LB◆-1◆RB◆ = 0, \quad q_0 = 1, \quad q_n = a_n q_◆LB◆n-1◆RB◆ + q_◆LB◆n-2◆RB◆$$

**Theorem 9.1.** $|p_n/q_n - \alpha| \lt 1/q_n^2$ for all $n$.

**Theorem 9.2 (Best Approximation).** If $|q\alpha - p| \lt |q_n \alpha - p_n|$ for
$q \lt q_◆LB◆n+1◆RB◆$Then $p/q = p_n/q_n$.

### 9.4 Periodic Continued Fractions

**Theorem 9.3 (Lagrange).** The continued fraction of $\alpha$ is periodic if and only if $\alpha$
Is a quadratic irrational.

**Example.** The golden ratio
$\varphi = \frac◆LB◆1 + \sqrt◆LB◆5◆RB◆◆RB◆◆LB◆2◆RB◆ = [1; 1, 1, 1, \ldots] = [1; \overline◆LB◆1◆RB◆]$.

### 9.5 More Computation Examples

**Problem.** Find the continued fraction expansion of $\sqrt◆LB◆7◆RB◆$.

<details>
<summary>Solution</summary>

$\sqrt◆LB◆7◆RB◆ = 2 + (\sqrt◆LB◆7◆RB◆ - 2)$So $a_0 = 2$.

$\alpha_1 = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆7◆RB◆ - 2◆RB◆ = \frac◆LB◆\sqrt◆LB◆7◆RB◆ + 2◆RB◆◆LB◆3◆RB◆$. So $a_1 = 1$.

$\alpha_2 = \frac◆LB◆3◆RB◆◆LB◆\sqrt◆LB◆7◆RB◆ - 1◆RB◆ = \frac◆LB◆\sqrt◆LB◆7◆RB◆ + 1◆RB◆◆LB◆2◆RB◆$. So $a_2 = 1$.

$\alpha_3 = \frac◆LB◆2◆RB◆◆LB◆\sqrt◆LB◆7◆RB◆ - 1◆RB◆ = \frac◆LB◆\sqrt◆LB◆7◆RB◆ + 1◆RB◆◆LB◆3◆RB◆$. So $a_3 = 1$.

$\alpha_4 = \frac◆LB◆3◆RB◆◆LB◆\sqrt◆LB◆7◆RB◆ - 2◆RB◆ = \sqrt◆LB◆7◆RB◆ + 2$. So $a_4 = 4$.

$\alpha_5 = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆7◆RB◆ - 2◆RB◆ = \alpha_1$. The process repeats.

Therefore $\sqrt◆LB◆7◆RB◆ = [2; \overline◆LB◆1, 1, 1, 4◆RB◆]$. $\blacksquare$

</details>

**Problem.** Compute the convergents of $[1; 1, 1, 1, 1]$ (the first five terms of $\varphi$).

<details>
<summary>Solution</summary>

$p_◆LB◆-1◆RB◆ = 1$, $p_0 = 1$. $q_◆LB◆-1◆RB◆ = 0$, $q_0 = 1$.

$a_1 = 1$: $p_1 = 1 \cdot 1 + 1 = 2$, $q_1 = 1 \cdot 1 + 0 = 1$. Convergent: $2/1 = 2$. $a_2 = 1$:
$p_2 = 1 \cdot 2 + 1 = 3$, $q_2 = 1 \cdot 1 + 1 = 2$. Convergent: $3/2 = 1.5$. $a_3 = 1$:
$p_3 = 1 \cdot 3 + 2 = 5$, $q_3 = 1 \cdot 2 + 1 = 3$. Convergent: $5/3 \approx 1.667$. $a_4 = 1$:
$p_4 = 1 \cdot 5 + 3 = 8$, $q_4 = 1 \cdot 3 + 2 = 5$. Convergent: $8/5 = 1.6$.

These are ratios of consecutive Fibonacci numbers, converging to $\varphi \approx 1.618$.
$\blacksquare$

</details>

**Problem.** Find the continued fraction expansion of the rational number $157/68$.

<details>
<summary>Solution</summary>

$157/68 = 2 + 21/68$So $a_0 = 2$. $68/21 = 3 + 5/21$So $a_1 = 3$. $21/5 = 4 + 1/5$So $a_2 = 4$.
$5/1 = 5$So $a_3 = 5$.

Therefore $157/68 = [2; 3, 4, 5]$.

Verification:
$[2; 3, 4, 5] = 2 + \frac◆LB◆1◆RB◆◆LB◆3 + \frac◆LB◆1◆RB◆◆LB◆4 + 1/5◆RB◆◆RB◆ = 2 + \frac◆LB◆1◆RB◆◆LB◆3 + 5/21◆RB◆ = 2 + \frac◆LB◆1◆RB◆◆LB◆68/21◆RB◆ = 2 + 21/68 = 157/68$.
$\blacksquare$

</details>

### 9.6 Periodic Continued Fractions and Pell's Equation

The continued fraction expansion of $\sqrt◆LB◆D◆RB◆$ is closely connected to Pell's equation
$x^2 - Dy^2 = 1$.

**Theorem 9.4.** If the continued fraction of $\sqrt◆LB◆D◆RB◆$ has period length $\ell$Then:

- If $\ell$ is even, the fundamental solution of $x^2 - Dy^2 = 1$ is $(p_◆LB◆\ell-1◆RB◆, q_◆LB◆\ell-1◆RB◆)$.
- If $\ell$ is odd, the fundamental solution is $(p_◆LB◆2\ell-1◆RB◆, q_◆LB◆2\ell-1◆RB◆)$.

### 9.7 Approximation Properties

**Theorem 9.5.** If $p/q$ is a convergent to $\alpha$Then

$$\left|\alpha - \frac◆LB◆p◆RB◆◆LB◆q◆RB◆\right| \lt \frac◆LB◆1◆RB◆◆LB◆q^2◆RB◆$$

Furthermore, if $|\alpha - p/q| \lt 1/(2q^2)$Then $p/q$ must be a convergent to $\alpha$.

**Proposition 9.6.** The convergents $p_n/q_n$ satisfy $q_n \geq F_◆LB◆n+1◆RB◆$ (the $(n+1)$-th Fibonacci
Number), so the denominators grow at least exponentially.

### 9.8 Irrationality via Continued Fractions

**Theorem 9.7.** If $\alpha$ has an infinite continued fraction expansion, then $\alpha$ is
irrational.

_Proof._ If $\alpha$ were rational, the Euclidean algorithm would terminate in finitely many Steps,
producing a finite continued fraction. Contradiction. $\blacksquare$

**Proposition 9.8.** $e$ is irrational.

_Proof._ The continued fraction of $e$ is $[2; 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, 1, \ldots]$ Which
has a regular but infinite pattern. By Theorem 9.7, $e$ is irrational. $\blacksquare$

## 10. Diophantine Equations

### 10.1 Linear Diophantine Equations

**Theorem 10.1.** The equation $ax + by = c$ has integer solutions if and only if
$\gcd(a, b) \mid c$.

_Proof._ This follows directly from Bézout's identity. $\blacksquare$

**Proposition 10.1a.** If $d = \gcd(a, b)$ and $(x_0, y_0)$ is a particular solution of
$ax + by = c$ Then all integer solutions are given by

$$x = x_0 + \frac◆LB◆b◆RB◆◆LB◆d◆RB◆ \cdot t, \quad y = y_0 - \frac◆LB◆a◆RB◆◆LB◆d◆RB◆ \cdot t, \quad t \in \mathbb◆LB◆Z◆RB◆$$

**Problem.** Find all integer solutions to $15x + 21y = 12$.

<details>
<summary>Solution</summary>

$d = \gcd(15, 21) = 3$ and $3 \mid 12$So solutions exist. Divide through by $3$: $5x + 7y = 4$.

Using the extended Euclidean algorithm: $7 = 1 \cdot 5 + 2$, $5 = 2 \cdot 2 + 1$. So
$1 = 5 - 2 \cdot 2 = 5 - 2(7 - 5) = 3 \cdot 5 - 2 \cdot 7$.

Thus $5(3) + 7(-2) = 1$And $5(12) + 7(-8) = 4$. A particular solution: $(x_0, y_0) = (12, -8)$.

All solutions: $x = 12 + 7t$, $y = -8 - 5t$For $t \in \mathbb◆LB◆Z◆RB◆$. $\blacksquare$

</details>

### 10.2 Pythagorean Triples

**Theorem 10.2.** All primitive Pythagorean triples $(a, b, c)$ (with $\gcd(a, b, c) = 1$ and
$a^2 + b^2 = c^2$) are given by

$$a = m^2 - n^2, \quad b = 2mn, \quad c = m^2 + n^2$$

Where $m > n > 0$, $\gcd(m, n) = 1$And $m \not\equiv n \pmod◆LB◆2◆RB◆$.

_Proof._ Without loss, $a$ is odd and $b$ is even. From $a^2 = c^2 - b^2 = (c-b)(c+b)$. Setting
$m = (c + a)/2$ and $n = (c - a)/2$ yields the parameterization. $\blacksquare$

**Proposition 10.2a.** The number of primitive Pythagorean triples with hypotenuse $\leq N$ is
Asymptotically $\frac◆LB◆N◆RB◆◆LB◆2\pi◆RB◆$.

**Problem.** Find all primitive Pythagorean triples with $c \leq 50$.

<details>
<summary>Solution</summary>

We need $m > n > 0$, $\gcd(m, n) = 1$, $m \not\equiv n \pmod◆LB◆2◆RB◆$And $c = m^2 + n^2 \leq 50$.

Try $m$ values: $m^2 \leq 49$So $m \leq 7$.

$m = 2$: $n = 1$: $(3, 4, 5)$. $m = 3$: $n = 2$: $(5, 12, 13)$. $m = 4$: $n = 1$: $(15, 8, 17)$.
$n = 3$: $\gcd(4,3) = 1$, $(7, 24, 25)$. $m = 5$: $n = 2$: $(21, 20, 29)$. $n = 4$: $(9, 40, 41)$.
$m = 6$: $n = 1$: $\gcd(6,1) = 1$, $(35, 12, 37)$. $n = 5$: $(11, 60, 61)$ but $c > 50$. $m = 7$:
$n = 2$: $(45, 28, 53)$ but $c > 50$. $n = 4$: $(33, 56, 65)$ but $c > 50$. $n = 6$:
$\gcd(7,6) = 1$, $(13, 84, 85)$ but $c > 50$.

Primitive triples with $c \leq 50$:
$(3,4,5)$, $(5,12,13)$, $(15,8,17)$, $(7,24,25)$, $(21,20,29)$, $(9,40,41)$, $(35,12,37)$. $\blacksquare$

</details>

### 10.3 Pell's Equation

**Theorem 10.3.** The equation $x^2 - Dy^2 = 1$ (where $D$ is not a perfect square) always has
Non-trivial integer solutions. If $(x_1, y_1)$ is the smallest positive solution, then all solutions
Are given by $(x_n + y_n\sqrt◆LB◆D◆RB◆) = (x_1 + y_1\sqrt◆LB◆D◆RB◆)^n$.

_Proof._ The existence of a non-trivial solution follows from Dirichlet's unit theorem applied to
$\mathbb◆LB◆Z◆RB◆[\sqrt◆LB◆D◆RB◆]$. The general solution follows from the fact that the group of units of norm
$1$ in $\mathbb◆LB◆Z◆RB◆[\sqrt◆LB◆D◆RB◆]$ is cyclic and generated by the fundamental unit. $\blacksquare$

**Problem.** Find all solutions to $x^2 - 2y^2 = 1$.

<details>
<summary>Solution</summary>

The continued fraction of $\sqrt◆LB◆2◆RB◆ = [1; \overline◆LB◆2◆RB◆]$ has period $\ell = 1$ (odd). The first
convergent after $p_0/q_0 = 1/1$ is $p_1/q_1 = 3/2$. Check: $3^2 - 2 \cdot 2^2 = 9 - 8 = 1$.

The fundamental solution is $(x_1, y_1) = (3, 2)$. All solutions are given by
$(3 + 2\sqrt◆LB◆2◆RB◆)^n = x_n + y_n\sqrt◆LB◆2◆RB◆$.

$n = 1$: $(3, 2)$. $n = 2$: $(17, 12)$. $n = 3$: $(99, 70)$. $n = 4$: $(577, 408)$. $\blacksquare$

</details>

**Problem.** Find the fundamental solution to $x^2 - 3y^2 = 1$.

<details>
<summary>Solution</summary>

$\sqrt◆LB◆3◆RB◆ = [1; \overline◆LB◆1, 2◆RB◆]$Period $\ell = 2$ (even).

Convergents: $p_0/q_0 = 1/1$, $p_1/q_1 = 2/1$. $a_2 = 2$:
$p_2 = 2 \cdot 2 + 1 = 5$, $q_2 = 2 \cdot 1 + 1 = 3$.

Since $\ell = 2$ is even, the fundamental solution is
$(p_◆LB◆\ell-1◆RB◆, q_◆LB◆\ell-1◆RB◆) = (p_1, q_1) = (2, 1)$.

Check: $2^2 - 3 \cdot 1^2 = 4 - 3 = 1$. Confirmed.

All solutions: $(2 + \sqrt◆LB◆3◆RB◆)^n = x_n + y_n\sqrt◆LB◆3◆RB◆$. $n = 1$: $(2, 1)$. $n = 2$: $(7, 4)$.
$n = 3$: $(26, 15)$. $n = 4$: $(97, 56)$. $\blacksquare$

</details>

### 10.4 The Method of Descent

**Theorem 10.4.** The equation $x^4 + y^4 = z^2$ has no non-trivial integer solutions.

_Proof (sketch)._ Assume a minimal solution $(x, y, z)$ with $z > 0$ minimal. Then $(x^2, y^2, z)$
Is a Pythagorean triple. Using the parameterization of Pythagorean triples and infinite descent, one
Constructs a smaller solution, contradicting minimality. $\blacksquare$

**Corollary 10.5.** The equation $x^4 + y^4 = z^4$ has no non-trivial integer solutions (this is
Fermat's last theorem for $n = 4$).

### 10.5 The Generalized Riemann Hypothesis

**Conjecture (Generalized Riemann Hypothesis).** All non-trivial zeros of the Dirichlet $L$-function
$L(s, \chi)$ for any Dirichlet character $\chi$ lie on the line $\mathrm◆LB◆Re(s) = 1/2$.

This is one of the most important open problems in mathematics. It has profound implications for the
Distribution of primes in arithmetic progressions and the error terms in various number-theoretic
Estimates.

## 11. Algebraic Number Theory: Gaussian Integers

### 11.1 The Gaussian Integers

**Definition.** The **Gaussian integers** are $\mathbb◆LB◆Z◆RB◆[i] = \\{a + bi : a, b \in \mathbb◆LB◆Z◆RB◆\\}$
Where $i = \sqrt◆LB◆-1◆RB◆$. They form a commutative ring with unity under the usual addition and
Multiplication of complex numbers.

### 11.2 Norm and Units

The **norm** of $\alpha = a + bi \in \mathbb◆LB◆Z◆RB◆[i]$ is
$N(\alpha) = a^2 + b^2 = \alpha \bar◆LB◆\alpha◆RB◆$.

**Proposition 11.1.** $N(\alpha\beta) = N(\alpha)N(\beta)$.

**Proposition 11.2.** The units of $\mathbb◆LB◆Z◆RB◆[i]$ are $\\{1, -1, i, -i\\}$ (exactly those with norm
$1$).

### 11.3 Primes in Gaussian Integers

**Theorem 11.3.** An element $\pi \in \mathbb◆LB◆Z◆RB◆[i]$ is prime if and only if one of the following
Holds:

1. $\pi = u(1 + i)$ for some unit $u$ (up to associates, $\pi = 1 + i$With norm $2$).
2. $\pi = u(a + bi)$ where $a^2 + b^2 = p$ for a prime $p \equiv 1 \pmod◆LB◆4◆RB◆$.
3. $\pi = up$ where $p \equiv 3 \pmod◆LB◆4◆RB◆$ is a prime in $\mathbb◆LB◆Z◆RB◆$.

_Proof._ If $N(\pi) = p$ where $p \equiv 1 \pmod◆LB◆4◆RB◆$ is prime, then $\pi$ is Gaussian prime. If
$p \equiv 3 \pmod◆LB◆4◆RB◆$Then $p$ is Gaussian prime (since $p = (a + bi)(c + di)$ would give
$p^2 = N(p) = (a^2 + b^2)(c^2 + d^2)$Forcing one factor to have norm $1$A unit). The prime
$2 = (1 + i)(1 - i) = (1+i)^2 \cdot (-i)$So $1 + i$ is Gaussian prime with norm $2$. $\blacksquare$

**Corollary 11.4 (Fermat's Theorem on Sums of Two Squares).** A prime $p$ can be written as a sum of
Two squares if and only if $p = 2$ or $p \equiv 1 \pmod◆LB◆4◆RB◆$.

_Proof._ For $p \equiv 1 \pmod◆LB◆4◆RB◆$: by quadratic reciprocity, $-1$ is a QR mod $p$So
$a^2 \equiv -1 \pmod◆LB◆p◆RB◆$ for some $a$. Then $p \mid (a^2 + 1) = (a + i)(a - i)$ in $\mathbb◆LB◆Z◆RB◆[i]$.
If $p$ were prime in $\mathbb◆LB◆Z◆RB◆[i]$It would divide $a + i$ or $a - i$But neither quotient is in
$\mathbb◆LB◆Z◆RB◆[i]$. So $p = \alpha\beta$ with neither a unit, giving $p^2 = N(p) = N(\alpha)N(\beta)$
So $N(\alpha) = N(\beta) = p$I.e., $p = a^2 + b^2$. $\blacksquare$

### 11.4 The Gaussian Integers Form a UFD

**Theorem 11.5.** $\mathbb◆LB◆Z◆RB◆[i]$ is a Euclidean domain (with norm as the Euclidean function), hence
A PID, hence a UFD.

_Proof._ For $\alpha, \beta \in \mathbb◆LB◆Z◆RB◆[i]$ with $\beta \neq 0$Write $\alpha/\beta = s + ti$ With
$s, t \in \mathbb◆LB◆Q◆RB◆$. Choose $m, n \in \mathbb◆LB◆Z◆RB◆$ with $|s - m| \leq 1/2$ and $|t - n| \leq 1/2$.
Set $q = m + ni$ and $r = \alpha - \beta q$. Then $r \in \mathbb◆LB◆Z◆RB◆[i]$ and
$N(r) = N(\beta) \cdot N(\alpha/\beta - q) = N(\beta)((s-m)^2 + (t-n)^2) \leq N(\beta) \cdot 1/2 \lt N(\beta)$.
So $\mathbb◆LB◆Z◆RB◆[i]$ is Euclidean. $\blacksquare$

### 11.5 Worked Example

**Problem.** Factor $5$ in $\mathbb◆LB◆Z◆RB◆[i]$.

_Solution._ $N(5) = 25$. We need $a^2 + b^2 = 5$Which gives $(a, b) = (1, 2)$ or $(2, 1)$. So
$5 = (1 + 2i)(1 - 2i) = (2 + i)(2 - i)$. Note that $1 + 2i$ and $2 - i$ differ by a unit:
$1 + 2i = -i(2 - i)$. So up to associates, $5 = (2 + i)(2 - i)$. $\blacksquare$

**Problem.** Factor $13$ in $\mathbb◆LB◆Z◆RB◆[i]$ and verify that $13 = a^2 + b^2$.

<details>
<summary>Solution</summary>

Since $13 \equiv 1 \pmod◆LB◆4◆RB◆$It factors in $\mathbb◆LB◆Z◆RB◆[i]$. We need $a^2 + b^2 = 13$ with
$a, b \in \mathbb◆LB◆Z◆RB◆$. Trying: $a^2 \leq 13$So $a \in \\{0, 1, 2, 3\\}$. $a = 2$: $b^2 = 9$, $b = 3$.
So $13 = 2^2 + 3^2 = (2 + 3i)(2 - 3i)$.

Verification: $(2 + 3i)(2 - 3i) = 4 + 9 = 13$. Both $2 + 3i$ and $2 - 3i$ are Gaussian primes Since
$N(2 + 3i) = 13$ is prime. $\blacksquare$

</details>

### 11.6 Associates and Irreducibility

**Definition.** Two Gaussian integers $\alpha, \beta$ are **associates** if $\alpha = u\beta$ for
some Unit $u \in \\{1, -1, i, -i\\}$. Associates have the same norm.

**Proposition 11.6.** A Gaussian integer $\alpha$ is irreducible if and only if $N(\alpha)$ is
either A prime in $\mathbb◆LB◆Z◆RB◆$ or the square of a prime in $\mathbb◆LB◆Z◆RB◆$.

_Proof._ If $N(\alpha) = p$ (prime in $\mathbb◆LB◆Z◆RB◆$) and $\alpha = \beta\gamma$Then
$N(\alpha) = N(\beta)N(\gamma) = p$So one of $N(\beta), N(\gamma)$ equals $1$Making that Factor a
unit. Conversely, if $\alpha$ is irreducible, then $N(\alpha)$ has no nontrivial Factorizations
compatible with factorizations of $\alpha$. $\blacksquare$

**Problem.** Determine whether the following Gaussian integers are irreducible:
$3 + 4i$, $6 + 7i$, $2 + 5i$.

<details>
<summary>Solution</summary>

$3 + 4i$: $N(3 + 4i) = 9 + 16 = 25 = 5^2$. This is a square of a prime, so $3 + 4i$ may or may Not
be irreducible. In fact, $(2+i)^2 = 4 + 4i + i^2 = 3 + 4i$So $3 + 4i$ is **reducible**.

$6 + 7i$: $N(6 + 7i) = 36 + 49 = 85 = 5 \cdot 17$. Neither $5$ nor $17$ is a square of a prime, And
$N(6 + 7i)$ is not prime. We check if $6 + 7i$ has a proper factor. If $6 + 7i = (a + bi)(c + di)$
With $N(a + bi) = 5$Then $a^2 + b^2 = 5$Giving $(a, b) = (1, 2)$ or $(2, 1)$. Check:
$(1 + 2i)(2 + 3i) = 2 + 3i + 4i + 6i^2 = -4 + 7i \neq 6 + 7i$.
$(1+2i)(3+2i) = 3 + 2i + 6i + 4i^2 = -1 + 8i$. $(2+i)(3+4i) = 6 + 8i + 3i + 4i^2 = 2 + 11i$.
$(2+i)(4+3i) = 8 + 6i + 4i + 3i^2 = 5 + 10i$. $(1+2i)(4+3i) = 4 + 3i + 8i + 6i^2 = -2 + 11i$. None
match, so $6 + 7i$ is **irreducible**.

$2 + 5i$: $N(2 + 5i) = 4 + 25 = 29$Which is prime. So $2 + 5i$ is **irreducible**. $\blacksquare$

</details>

### 11.7 Division in Gaussian Integers

**Proposition 11.7.** If $\alpha, \beta \in \mathbb◆LB◆Z◆RB◆[i]$ with $\beta \neq 0$Then there exist
$\kappa, \rho \in \mathbb◆LB◆Z◆RB◆[i]$ such that $\alpha = \beta\kappa + \rho$ with
$N(\rho) \lt N(\beta)$.

This is the Euclidean algorithm for $\mathbb◆LB◆Z◆RB◆[i]$ (proved in Theorem 11.5).

**Problem.** Divide $11 + 3i$ by $4 - i$ in $\mathbb◆LB◆Z◆RB◆[i]$Finding quotient and remainder.

<details>
<summary>Solution</summary>

$\frac◆LB◆11 + 3i◆RB◆◆LB◆4 - i◆RB◆ = \frac◆LB◆(11 + 3i)(4 + i)◆RB◆◆LB◆(4 - i)(4 + i)◆RB◆ = \frac◆LB◆44 + 11i + 12i + 3i^2◆RB◆◆LB◆17◆RB◆ = \frac◆LB◆41 + 23i◆RB◆◆LB◆17◆RB◆ = \frac◆LB◆41◆RB◆◆LB◆17◆RB◆ + \frac◆LB◆23◆RB◆◆LB◆17◆RB◆i$.

Round: $\kappa = 2 + 1i = 2 + i$.

$\rho = (11 + 3i) - (4 - i)(2 + i) = (11 + 3i) - (8 + 4i - 2i - i^2) = (11 + 3i) - (9 + 2i) = 2 + i$.

Check: $N(\rho) = N(2 + i) = 5 \lt N(4 - i) = 17$. $\blacksquare$

</details>

## 12. Arithmetic Functions

### 12.1 Multiplicative Functions

**Definition.** An arithmetic function $f \colon \mathbb◆LB◆N◆RB◆ \to \mathbb◆LB◆C◆RB◆$ is **multiplicative** if
$f(mn) = f(m)f(n)$ whenever $\gcd(m, n) = 1$. It is **completely multiplicative** if
$f(mn) = f(m)f(n)$ for all $m, n$.

**Proposition 12.1.** If $f$ is multiplicative and $n = p_1^◆LB◆a_1◆RB◆ \cdots p_k^◆LB◆a_k◆RB◆$Then
$f(n) = f(p_1^◆LB◆a_1◆RB◆) \cdots f(p_k^◆LB◆a_k◆RB◆)$.

**Example.** $\phi(n)$ is multiplicative (but not completely multiplicative).
$\phi(6) = 2 \neq \phi(2)\phi(2) = 1$.

### 12.2 The Sum-of-Divisors Function

**Definition.** $\sigma(n) = \sum_◆LB◆d \mid n◆RB◆ d$ (the sum of all positive divisors of $n$).
$\tau(n) = \sum_◆LB◆d \mid n◆RB◆ 1$ (the number of positive divisors of $n$).

**Proposition 12.2.** If $n = p_1^◆LB◆a_1◆RB◆ \cdots p_k^◆LB◆a_k◆RB◆$Then

$$\sigma(n) = \prod_◆LB◆i=1◆RB◆^k \frac◆LB◆p_i^◆LB◆a_i + 1◆RB◆ - 1◆RB◆◆LB◆p_i - 1◆RB◆, \quad \tau(n) = \prod_◆LB◆i=1◆RB◆^k (a_i + 1)$$

_Proof._ Both $\sigma$ and $\tau$ are multiplicative (since the divisor structure of $mn$ with
$\gcd(m,n) = 1$ factors as the product of the divisor structures of $m$ and $n$). So it suffices To
verify the formula for prime powers. For $n = p^a$: the divisors are $1, p, p^2, \ldots, p^a$Giving

$$\sigma(p^a) = 1 + p + p^2 + \cdots + p^a = \frac◆LB◆p^◆LB◆a+1◆RB◆ - 1◆RB◆◆LB◆p - 1◆RB◆, \quad \tau(p^a) = a + 1$$

The general formula follows from multiplicativity. $\blacksquare$

**Definition.** $n$ is **perfect** if $\sigma(n) = 2n$.

**Theorem 12.3 (Euclid--Euler).** An even number $n$ is perfect if and only if
$n = 2^◆LB◆p-1◆RB◆(2^p - 1)$ Where $2^p - 1$ is a Mersenne prime.

_Proof._ If $n = 2^◆LB◆p-1◆RB◆(2^p - 1)$ with $2^p - 1$ prime, then
$\sigma(n) = \sigma(2^◆LB◆p-1◆RB◆)\sigma(2^p - 1) = (2^p - 1) \cdot 2^p = 2n$. Conversely, if $n$ is even
And perfect, write $n = 2^◆LB◆p-1◆RB◆m$ with $m$ odd. Then $\sigma(n) = (2^p - 1)\sigma(m) = 2^p m$So
$\sigma(m) = 2^p m / (2^p - 1)$. Since $\sigma(m)$ must be an integer, $(2^p - 1) \mid m$. Write
$m = (2^p - 1)q$. Then $\sigma(m) = 2^p q$But also $\sigma(m) \geq m + 1 = (2^p - 1)q + 1$. If
$q > 1$Then $\sigma(m) \geq m + 1 + q > 2^p q$ Contradiction. So $q = 1$ and $m = 2^p - 1$ is prime.
$\blacksquare$

### 12.3 The Möbius Function

**Definition.** The **Möbius function** $\mu \colon \mathbb◆LB◆N◆RB◆ \to \\{-1, 0, 1\\}$ is defined by:

- $\mu(1) = 1$.
- $\mu(n) = 0$ if $n$ is divisible by a square of a prime ($n$ is not **squarefree**).
- $\mu(n) = (-1)^k$ if $n$ is a product of $k$ **distinct** primes.

**Proposition 12.4 (Properties of $\mu$).**

1. $\mu$ is multiplicative: if $\gcd(m, n) = 1$Then $\mu(mn) = \mu(m)\mu(n)$.
2. $\sum_◆LB◆d \mid n◆RB◆ \mu(d) = 1$ if $n = 1$ and $0$ if $n > 1$.

_Proof of (2)._ If $n = 1$: $\sum_◆LB◆d \mid 1◆RB◆ \mu(d) = \mu(1) = 1$. If $n > 1$Write
$n = p_1^◆LB◆a_1◆RB◆ \cdots p_k^◆LB◆a_k◆RB◆$. By multiplicativity,
$\sum_◆LB◆d \mid n◆RB◆ \mu(d) = \prod_◆LB◆i=1◆RB◆^k \sum_◆LB◆j=0◆RB◆^◆LB◆a_i◆RB◆ \mu(p_i^j)$. For each factor:
$\sum_◆LB◆j=0◆RB◆^◆LB◆a_i◆RB◆ \mu(p_i^j) = \mu(1) + \mu(p_i) + \mu(p_i^2) + \cdots = 1 + (-1) + 0 + \cdots = 0$
Since $a_i \geq 1$. $\blacksquare$

### 12.4 Dirichlet Convolution

**Definition.** The **Dirichlet convolution** of two arithmetic functions $f$ and $g$ is

$$(f * g)(n) = \sum_◆LB◆d \mid n◆RB◆ f(d) \cdot g\!\left(\frac◆LB◆n◆RB◆◆LB◆d◆RB◆\right)$$

**Proposition 12.5 (Properties of Dirichlet convolution).**

1. **Commutativity:** $f * g = g * f$.
2. **Associativity:** $(f * g) * h = f * (g * h)$.
3. **Identity element:** The function
   $\varepsilon(n) = \begin◆LB◆cases◆RB◆ 1 & n = 1 \\ 0 & n > 1 \end◆LB◆cases◆RB◆$ satisfies
   $f * \varepsilon = f$.
4. **Möbius inversion:** $\mu$ is the convolution inverse of $\mathbf◆LB◆1◆RB◆$ (where $\mathbf◆LB◆1◆RB◆(n) = 1$
   for all $n$), i.e., $\mathbf◆LB◆1◆RB◆ * \mu = \varepsilon$.

_Proof of (1)._ $(f * g)(n) = \sum_◆LB◆d \mid n◆RB◆ f(d)g(n/d)$. Setting $e = n/d$This equals
$\sum_◆LB◆e \mid n◆RB◆ f(n/e)g(e) = (g * f)(n)$. $\blacksquare$

### 12.5 Möbius Inversion

**Theorem 12.6 (Möbius Inversion).** If $f(n) = \sum_◆LB◆d \mid n◆RB◆ g(d)$ for all $n \geq 1$Then

$$g(n) = \sum_◆LB◆d \mid n◆RB◆ \mu(d) f(n/d)$$

_Proof._ In terms of Dirichlet convolution: $f = g * \mathbf◆LB◆1◆RB◆$So
$f * \mu = (g * \mathbf◆LB◆1◆RB◆) * \mu = g * (\mathbf◆LB◆1◆RB◆ * \mu) = g * \varepsilon = g$. The explicit form
Follows by writing out the convolution:
$\sum_◆LB◆d \mid n◆RB◆ \mu(d) f(n/d) = \sum_◆LB◆d \mid n◆RB◆ \mu(d) \sum_◆LB◆e \mid (n/d)◆RB◆ g(e) = \sum_◆LB◆e \mid n◆RB◆ g(e) \sum_◆LB◆d \mid (n/e)◆RB◆ \mu(d)$.
The inner sum is $1$ if $e = n$ and $0$ otherwise, so only $g(n)$ remains. $\blacksquare$

### 12.6 Euler's Totient Summation Formula

**Proposition 12.7.** $\sum_◆LB◆k=1◆RB◆^◆LB◆n◆RB◆ \phi(k) = \frac◆LB◆3◆RB◆◆LB◆\pi^2◆RB◆ n^2 + O(n \log n)$.

_Intuition._ The probability that two random integers are coprime is $1/\zeta(2) = 6/\pi^2$. The
Number of pairs $(a, b)$ with $1 \leq a \leq b \leq n$ and $\gcd(a, b) = 1$ is
$\sum_◆LB◆b=1◆RB◆^n \phi(b)$Which should be approximately
$\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆6◆RB◆◆LB◆\pi^2◆RB◆ n^2 = \frac◆LB◆3◆RB◆◆LB◆\pi^2◆RB◆n^2$.

### 12.7 Worked Examples

**Problem.** Express $\sum_◆LB◆d \mid n◆RB◆ \phi(d)$ in closed form.

_Solution._ Let $f(n) = \sum_◆LB◆d \mid n◆RB◆ \phi(d)$. We claim $f(n) = n$.

Since $\phi$ is multiplicative, $f$ is multiplicative. For $n = p^a$:

$f(p^a) = \sum_◆LB◆j=0◆RB◆^a \phi(p^j) = \phi(1) + \phi(p) + \cdots + \phi(p^a) = 1 + (p - 1) + (p^2 - p) + \cdots + (p^a - p^◆LB◆a-1◆RB◆) = p^a$.

So $f(n) = n$. This can also be proved directly: the integers $1, 2, \ldots, n$ are partitioned by
Their gcd with $n$And the number with $\gcd(k, n) = d$ is $\phi(n/d)$. $\blacksquare$

**Problem.** Use Möbius inversion to find a formula for $\phi(n)$ in terms of the divisors of $n$.

<details>
<summary>Solution</summary>

We know $\sum_◆LB◆d \mid n◆RB◆ \phi(d) = n$. By Möbius inversion:

$$\phi(n) = \sum_◆LB◆d \mid n◆RB◆ \mu(d) \cdot \frac◆LB◆n◆RB◆◆LB◆d◆RB◆ = n \sum_◆LB◆d \mid n◆RB◆ \frac◆LB◆\mu(d)◆RB◆◆LB◆d◆RB◆ = n \prod_◆LB◆p \mid n◆RB◆\left(1 - \frac◆LB◆1◆RB◆◆LB◆p◆RB◆\right)$$

The last equality uses the multiplicative property of $\mu$: the sum $\sum_◆LB◆d \mid n◆RB◆ \mu(d)/d$
factors Over prime powers as $\prod_◆LB◆p \mid n◆RB◆ (1 - 1/p)$. $\blacksquare$

</details>

**Problem.** Compute $\sum_◆LB◆d \mid 60◆RB◆ \mu(d) \cdot \sigma(60/d)$.

<details>
<summary>Solution</summary>

$60 = 2^2 \cdot 3 \cdot 5$. The divisors of $60$ are
$\\{1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60\\}$.

$\mu$ is nonzero only for squarefree divisors:
$\mu(1) = 1$, $\mu(2) = -1$, $\mu(3) = -1$, $\mu(5) = -1$, $\mu(6) = 1$, $\mu(10) = 1$, $\mu(15) = 1$, $\mu(30) = -1$.

$\sigma(60) = 168$, $\sigma(30) = 72$, $\sigma(20) = 42$, $\sigma(15) = 24$
$\sigma(12) = 28$, $\sigma(10) = 18$, $\sigma(6) = 12$, $\sigma(1) = 1$.

$\sum_◆LB◆d \mid 60◆RB◆ \mu(d)\sigma(60/d) = 1 \cdot 168 + (-1) \cdot 72 + (-1) \cdot 42 + (-1) \cdot 24 + 1 \cdot 28 + 1 \cdot 18 + 1 \cdot 12 + (-1) \cdot 1 = 168 - 72 - 42 - 24 + 28 + 18 + 12 - 1 = 87$.

This computes the Dirichlet convolution $(\mu * \sigma)(60)$. $\blacksquare$

</details>

### 12.8 Perfect Numbers and Amicable Numbers

**Definition.** Two positive integers $m$ and $n$ are **amicable** (or **friendly**) if
$\sigma(m) = \sigma(n) = m + n$. The pair $(m, n)$ is called an **amicable pair**.

**Example.** $(220, 284)$ is the smallest amicable pair:
$\sigma(220) = \sigma(2^2)\sigma(5)\sigma(11) = 7 \cdot 6 \cdot 12 = 504 = 220 + 284$.
$\sigma(284) = \sigma(4)\sigma(71) = 7 \cdot 72 = 504 = 220 + 284$.

**Proposition 12.9.** If $m$ and $n$ form an amicable pair, then
$\frac◆LB◆\sigma(m)◆RB◆◆LB◆m◆RB◆ = \frac◆LB◆\sigma(n)◆RB◆◆LB◆n◆RB◆$.

**Problem.** Show that $(1184, 1210)$ is an amicable pair.

<details>
<summary>Solution</summary>

$1184 = 2^5 \cdot 37$. $\sigma(1184) = \sigma(32)\sigma(37) = 63 \cdot 38 = 2394$.
$1210 = 2 \cdot 5 \cdot 11^2$.
$\sigma(1210) = \sigma(2)\sigma(5)\sigma(121) = 3 \cdot 6 \cdot 133 = 2394$.

$1184 + 1210 = 2394 = \sigma(1184) = \sigma(1210)$. Confirmed: $(1184, 1210)$ is amicable.
$\blacksquare$

</details>

### 12.9 Ramanujan's Tau Function

**Definition.** **Ramanujan's tau function** $\tau(n)$ (not to be confused with the divisor-counting
Function) is defined by the identity

$$\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \tau(n) q^n = q \prod_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆(1 - q^n)^◆LB◆24◆RB◆$$

**Proposition 12.10 (Ramanujan's congruences).** For all $n \geq 1$:

1. $\tau(5n) \equiv \tau(n) \pmod◆LB◆5◆RB◆$
2. $\tau(7n) \equiv \tau(n) \pmod◆LB◆7◆RB◆$
3. $\tau(11n) \equiv \tau(n) \pmod◆LB◆11◆RB◆$

These congruences were conjectured by Ramanujan in 1916 and proved by Mordell in 1917. They Were
later explained by Deligne's .../1-number-and-algebra/3_proof-and-logic of the Weil conjectures.

## 13. Additional Topics

### 13.1 Wilson's Theorem

**Theorem 13.1 (Wilson's Theorem).** $p$ is prime if and only if $(p - 1)! \equiv -1 \pmod◆LB◆p◆RB◆$.

_Proof._ If $p$ is prime: in $\mathbb◆LB◆Z◆RB◆/p\mathbb◆LB◆Z◆RB◆$Each element pairs with its inverse. The only
Self-inverse elements are $1$ and $p - 1$. So $(p-1)! \equiv 1 \cdot (p-1) \equiv -1 \pmod◆LB◆p◆RB◆$.
Conversely, if $n$ is composite and $n > 4$Then $(n-1)! \equiv 0 \pmod◆LB◆n◆RB◆$ since $n$ has a proper
Factor appearing in $(n-1)!$. $\blacksquare$

### 13.2 The Ring $\mathbb◆LB◆Z◆RB◆/n\mathbb◆LB◆Z◆RB◆$

**Theorem 13.2.** The ring $\mathbb◆LB◆Z◆RB◆/n\mathbb◆LB◆Z◆RB◆$ is a field if and only if $n$ is prime.

**Proposition 13.3.** $(\mathbb◆LB◆Z◆RB◆/n\mathbb◆LB◆Z◆RB◆)^*$ has order $\phi(n)$ and is a group under
Multiplication.

### 13.3 Dirichlet's Theorem on Primes in Arithmetic Progressions

**Theorem 13.4 (Dirichlet).** If $\gcd(a, m) = 1$Then there are infinitely many primes of the form
$a + km$ ($k \geq 0$).

_Proof (sketch)._ Dirichlet introduced $L$-functions $L(s, \chi) = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \chi(n)/n^s$
Where $\chi$ is a Dirichlet character mod $m$. The key steps are:

1. $L(s, \chi_0)$ has a simple pole at $s = 1$ (where $\chi_0$ is the principal character).
2. $L(1, \chi) \neq 0$ for non-principal characters $\chi$.
3. $\log L(s, \chi_0) = \sum_p \log(1 - \chi_0(p)/p^s)^◆LB◆-1◆RB◆ = \sum_p \sum_◆LB◆k \geq 1◆RB◆ \chi_0(p^k)/(kp^◆LB◆ks◆RB◆)$.
4. Combining over all characters: $\sum_\chi \log L(s, \chi)$ diverges as $s \to 1^+$And the
   contribution from $\chi_0$ captures primes $p \equiv a \pmod◆LB◆m◆RB◆$.

$\blacksquare$

### 13.4 The Frobenius Coin Problem

**Theorem 13.5 (Frobenius).** If $\gcd(a, b) = 1$ and $a, b$ are positive, then the largest integer
That cannot be expressed as $ax + by$ with $x, y \geq 0$ is $ab - a - b$.

_Proof._ First, we show every integer $n \geq ab$ can be written as $ax + by$ with $x, y \geq 0$.
Since $\gcd(a, b) = 1$The set $\\{0, a, 2a, \ldots, (b-1)a\\}$ is a complete residue system modulo
$b$. So for any $n \geq 0$There exists $x$ with $0 \leq x \leq b - 1$ and
$ax \equiv n \pmod◆LB◆b◆RB◆$Meaning $n - ax = by$ for some integer $y$. When $n \geq (b-1)a$We have
$by = n - ax \geq 0$So $y \geq 0$. Thus all $n \geq (b-1)a = ab - a$ are representable.

To show $ab - a - b$ is not representable: if $ab - a - b = ax + by$ with $x, y \geq 0$Then
$ab = a(x+1) + b(y+1)$So $b \mid a(x+1)$Hence $b \mid (x+1)$ (since $\gcd(a,b) = 1$). So
$x + 1 \geq b$Giving $ax \geq a(b-1) = ab - a$. Then
$by = ab - a - b - ax \leq ab - a - b - (ab - a) = -b \lt 0$ Contradicting $y \geq 0$.
$\blacksquare$

**Problem.** What is the largest amount of postage that cannot be made using 6-cent and 11-cent
stamps?

<details>
<summary>Solution</summary>

$\gcd(6, 11) = 1$. By the Frobenius theorem, the largest non-representable amount is
$6 \cdot 11 - 6 - 11 = 66 - 17 = 49$ cents.

Verification: $49 = 6x + 11y$ requires $y$ odd (since $49 - 11y$ must be even). $y = 1$: $38/6$
(no). $y = 3$: $16/6$ (no). $y = 5$: $-6/6$ (negative). So $49$ is indeed not representable.

$50 = 6 \cdot 4 + 11 \cdot 2$, $51 = 6 \cdot 5 + 11 \cdot 1$, $52 = 6 \cdot 7 + 11 \cdot 0$. All Values
$50$ and above are representable. $\blacksquare$

</details>

### 13.5 The Carmichael Function

**Definition.** The **Carmichael function** $\lambda(n)$ is the smallest positive integer such that
$a^◆LB◆\lambda(n)◆RB◆ \equiv 1 \pmod◆LB◆n◆RB◆$ for all $a$ with $\gcd(a, n) = 1$.

For $n = p_1^◆LB◆a_1◆RB◆ \cdots p_k^◆LB◆a_k◆RB◆$:

$$\lambda(n) = \mathrm◆LB◆lcm\!\left(\lambda(p_1^◆LB◆a_1◆RB◆), \ldots, \lambda(p_k^◆LB◆a_k◆RB◆)\right)$$

Where $\lambda(2) = 1$, $\lambda(4) = 2$, $\lambda(2^k) = 2^◆LB◆k-2◆RB◆$ for $k \geq 3$And
$\lambda(p^k) = (p-1)p^◆LB◆k-1◆RB◆$ for odd primes $p$.

**Proposition 13.6.** $\lambda(n) \mid \phi(n)$ for all $n \geq 1$And $\lambda(n) = \phi(n)$
precisely When $n = 1, 2, 4$, $n = p^k$Or $n = 2p^k$ (where $p$ is an odd prime).

_Intuition._ The Carmichael function gives the **exponent** of the group
$(\mathbb◆LB◆Z◆RB◆/n\mathbb◆LB◆Z◆RB◆)^*$ Which equals the lcm of the orders of all elements. Euler's totient
$\phi(n)$ gives the order of The group. The exponent always divides the order, with equality exactly
when the group is cyclic (i.e., when a primitive root exists).

**Theorem 13.7 (Korselt's Criterion).** $n$ is a **Carmichael number** (composite $n$ with
$a^◆LB◆n-1◆RB◆ \equiv 1 \pmod◆LB◆n◆RB◆$ for all $\gcd(a, n) = 1$) if and only if:

1. $n$ is squarefree, and
2. For every prime $p \mid n$, $(p - 1) \mid (n - 1)$.

_Proof._ If $n$ is squarefree with $n = p_1 \cdots p_k$Then
$\lambda(n) = \mathrm◆LB◆lcm(p_1 - 1, \ldots, p_k - 1)$. We need $\lambda(n) \mid (n - 1)$Which is
equivalent to each $(p_i - 1) \mid (n - 1)$. $\blacksquare$

**Example.** $561 = 3 \cdot 11 \cdot 17$. Check: $3 - 1 = 2 \mid 560$, $11 - 1 = 10 \mid 560$
$17 - 1 = 16 \mid 560$. So $561$ is a Carmichael number (the smallest).

### 13.6 Sophie Germain Primes

**Definition.** A prime $p$ is a **Sophie Germain prime** if $2p + 1$ is also prime. The prime
$q = 2p + 1$ is called a **safe prime**.

Sophie Germain primes arise in the study of Fermat's last theorem: if $p$ is a Sophie Germain prime,
then there are no non-zero integer solutions to $x^p + y^p = z^p$ with $p \nmid xyz$ (this was
proved by Sophie Germain).

**Proposition 13.8.** If $q = 2p + 1$ is a safe prime and $a$ is a quadratic residue modulo $q$ Then
$a^p \equiv 1 \pmod◆LB◆q◆RB◆$.

_Proof._ By Euler's criterion, $a^◆LB◆(q-1)/2◆RB◆ = a^p \equiv 1 \pmod◆LB◆q◆RB◆$. $\blacksquare$

The first few Sophie Germain primes are: $2, 3, 5, 11, 23, 29, 41, 53, 83, 89, 113, \ldots$ It is
conjectured (but not proved) that there are infinitely many Sophie Germain primes.

### 13.7 Mersenne and Fermat Primes

**Definition.** A **Mersenne prime** is a prime of the form $M_p = 2^p - 1$ where $p$ is prime. A
**Fermat prime** is a prime of the form $F_n = 2^◆LB◆2^n◆RB◆ + 1$.

**Proposition 13.9.** If $2^p - 1$ is prime, then $p$ is prime.

_Proof._ If $p = ab$ with $a, b > 1$Then
$2^p - 1 = (2^a)^b - 1 = (2^a - 1)(2^◆LB◆a(b-1)◆RB◆ + \cdots + 2^a + 1)$ Which is composite.
$\blacksquare$

**Proposition 13.10.** If $2^◆LB◆2^n◆RB◆ + 1$ is prime, then $n$ is a power of $2$.

_Proof._ If $n = ab$ with $b$ odd, then $2^◆LB◆2^n◆RB◆ + 1 = (2^◆LB◆2^a◆RB◆)^◆LB◆2^◆LB◆n-a◆RB◆◆RB◆ + 1$And we can factor
$x^◆LB◆2^k◆RB◆ + 1 = (x^◆LB◆2^◆LB◆k-1◆RB◆◆RB◆ + 1)^2 - 2x^◆LB◆2^◆LB◆k-1◆RB◆◆RB◆$Which allows induction. $\blacksquare$

The known Fermat primes are $F_0 = 3$, $F_1 = 5$, $F_2 = 17$, $F_3 = 257$, $F_4 = 65537$. No others are
known, and it is conjectured that these are the only ones.

## 14. Additional Results

### 14.1 Fermat's Last Theorem

**Theorem 14.1 (Wiles, 1995).** For $n \geq 3$The equation $x^n + y^n = z^n$ has no non-zero Integer
solutions.

The .../1-number-and-algebra/3_proof-and-logic is far beyond our scope, using deep results from
algebraic geometry (elliptic curves, Modular forms, Galois representations).

### 14.1a The Twin Prime Conjecture

**Conjecture (Twin Prime Conjecture).** There are infinitely many primes $p$ such that $p + 2$ Is
also prime.

The largest known twin prime pair (as of 2026) contains numbers with over 400,000 digits. In 2013,
Yitang Zhang proved that there exists some constant $N \lt 7 \times 10^7$ such that infinitely many
Prime pairs $(p, p + N)$ exist. This bound has since been improved to $N \leq 246$ by the Polymath
project.

**Theorem 14.1a (Brun, 1919).** The sum of the reciprocals of the twin primes converges:

$$\sum_◆LB◆\substack◆LB◆p \mathrm◆LB◆\ prime \\ p+2 \mathrm◆LB◆\ prime◆RB◆◆RB◆ \left(\frac◆LB◆1◆RB◆◆LB◆p◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆p+2◆RB◆\right) \lt \infty$$

This is known as **Brun's theorem**. It establishes that the twin primes form a "thin" set, In
contrast to the full set of primes (whose reciprocal sum diverges by Euler).

### 14.2 The Ring $\mathbb◆LB◆Z◆RB◆[\sqrt◆LB◆-5◆RB◆]$

**Example.** In $\mathbb◆LB◆Z◆RB◆[\sqrt◆LB◆-5◆RB◆]$Unique factorization fails:

$$6 = 2 \cdot 3 = (1 + \sqrt◆LB◆-5◆RB◆)(1 - \sqrt◆LB◆-5◆RB◆)$$

The elements $2, 3, 1 + \sqrt◆LB◆-5◆RB◆, 1 - \sqrt◆LB◆-5◆RB◆$ are all irreducible but not prime (in the
Ring-theoretic sense). This failure of unique factorization motivates the development of ideal
Theory.

### 14.3 Quadratic Forms

**Definition.** A **binary quadratic form** is $Q(x, y) = ax^2 + bxy + cy^2$ with
$a, b, c \in \mathbb◆LB◆Z◆RB◆$. Its **discriminant** is $D = b^2 - 4ac$.

Two forms are **equivalent** if one can be obtained from the other by a change of variables
$(x, y) \mapsto (px + qy, rx + sy)$ with $ps - qr = 1$.

**Theorem 14.2 (Gauss).** The number of equivalence classes of binary quadratic forms of
Discriminant $D \lt 0$ is finite. The class number $h(D)$ is 1 precisely for
$D \in \{-3, -4, -7, -8, -11, -19, -43, -67, -163\}$.

_Remark._ The fact that $-163$ is the largest such $D$ was conjectured by Gauss and proved by
Heegner in 1952 (with later simplified .../1-number-and-algebra/3_proof-and-logics by Stark and
Baker). This is the celebrated **class number 1 problem**.

**Proposition 14.2a.** A binary quadratic form $Q(x, y) = ax^2 + bxy + cy^2$ of discriminant
$D \lt 0$ represents $n$ if and only if $D$ is a quadratic residue modulo $4n$.

### 14.4 The Class Number and Unique Factorization

The **class group** of a quadratic field $\mathbb◆LB◆Q◆RB◆(\sqrt◆LB◆D◆RB◆)$ measures the failure of unique
Factorization in its ring of integers. The **class number** $h(D)$ is the order of this group.

**Theorem 14.3.** Unique factorization holds in the ring of integers of $\mathbb◆LB◆Q◆RB◆(\sqrt◆LB◆D◆RB◆)$ If
and only if $h(D) = 1$.

This connects the algebraic question of unique factorization to the analytic properties of the
Dedekind zeta function, via the class number formula:

$$h(D) = \frac◆LB◆\sqrt◆LB◆|D|◆RB◆◆RB◆◆LB◆2\pi◆RB◆ \cdot L(1, \chi_D)$$

Where $L(s, \chi_D)$ is the Dirichlet $L$-function associated to the quadratic character $\chi_D$.

**Proposition 14.3a.** The class number $h(-D)$ grows roughly as $\sqrt◆LB◆D◆RB◆$ for large $D$:
$h(-D) \sim \frac◆LB◆\sqrt◆LB◆D◆RB◆◆RB◆◆LB◆\pi◆RB◆ \cdot L(1, \chi_◆LB◆-D◆RB◆)$ as $D \to \infty$.

### 14.5 Mersenne Numbers

**Theorem 14.4 (Lucas--Lehmer test).** Let $M_p = 2^p - 1$ with $p$ an odd prime. Define the
sequence $L_0 = 4$, $L_◆LB◆n+1◆RB◆ = L_n^2 - 2$. Then $M_p$ is prime if and only if
$L_◆LB◆p-2◆RB◆ \equiv 0 \pmod◆LB◆M_p◆RB◆$.

This test makes it possible to efficiently determine the primality of Mersenne numbers, which is Why
the largest known primes are Mersenne primes.

**Proposition 14.4a.** Every even perfect number is a Mersenne prime times a power of $2$.

This is the Euclid--Euler theorem (Theorem 12.3) restated in terms of Mersenne primes.

**Problem.** Use the Lucas--Lehmer test to verify that $M_5 = 31$ is prime.

<details>
<summary>Solution</summary>

$M_5 = 2^5 - 1 = 31$. We need $L_◆LB◆5-2◆RB◆ = L_3 \equiv 0 \pmod◆LB◆31◆RB◆$.

$L_0 = 4$ $L_1 = 4^2 - 2 = 14$ $L_2 = 14^2 - 2 = 194$. $194 = 6 \cdot 31 + 8$So
$L_2 \equiv 8 \pmod◆LB◆31◆RB◆$. $L_3 = 8^2 - 2 = 62 \equiv 0 \pmod◆LB◆31◆RB◆$.

Since $L_3 \equiv 0 \pmod◆LB◆31◆RB◆$, $M_5 = 31$ is prime. $\blacksquare$

</details>

### 14.6 The abc Conjecture

**Conjecture (Masser--Oesterlé, 1985).** For every $\varepsilon > 0$There exists $K_\varepsilon > 0$
Such that for all coprime positive integers $a, b, c$ with $a + b = c$:

$$c \lt K_\varepsilon \cdot \mathrm◆LB◆rad(abc)^◆LB◆1 + \varepsilon◆RB◆$$

Where $\mathrm◆LB◆rad(n) = \prod_◆LB◆p \mid n◆RB◆ p$ is the **radical** of $n$ (the product of distinct prime
Factors).

The abc conjecture is one of the most important open problems in number theory. It implies:

- Fermat's last theorem for sufficiently large exponents.
- Mordell's conjecture (Faltings' theorem).
- Roth's theorem on Diophantine approximation.
- The existence of infinitely many non-Wieferich primes.

### 14.7 The Collatz Conjecture

**Conjecture (Collatz, 1937).** Define $T \colon \mathbb◆LB◆N◆RB◆ \to \mathbb◆LB◆N◆RB◆$ by

$$T(n) = \begin◆LB◆cases◆RB◆ n/2 & n \mathrm◆LB◆\ even \\ 3n + 1 & n \mathrm◆LB◆\ odd \end◆LB◆cases◆RB◆$$

For every positive integer $n$The sequence $n, T(n), T(T(n)), \ldots$ eventually reaches $1$.

Despite its simple statement, the Collatz conjecture remains open. It has been verified by computer
For all starting values up to at least $2^◆LB◆68◆RB◆$But no general
.../1-number-and-algebra/3_proof-and-logic exists.

### 14.8 Worked Example

**Problem.** Determine all representations of $n = 7$ as a sum of two squares.

_Solution._ We need $a^2 + b^2 = 7$ with $a, b \in \mathbb◆LB◆Z◆RB◆$. Checking: $a^2 \leq 7$So
$a \in \\{0, 1, 2\\}$. For $a = 0$: $b^2 = 7$ (no). For $a = 1$: $b^2 = 6$ (no). For $a = 2$:
$b^2 = 3$ (no). By symmetry, $a = -1, -2$ give the same. So $7$ cannot be written as a sum of two
Squares.

This is consistent with the theorem: $7 \equiv 3 \pmod◆LB◆4◆RB◆$So it is not a sum of two squares.
$\blacksquare$

### 14.9 Worked Example: Quadratic Forms

**Problem.** Determine the number of representations of $n = 65$ as a sum of two squares.

<details>
<summary>Solution</summary>

$65 = 5 \cdot 13$. Both $5 \equiv 1 \pmod◆LB◆4◆RB◆$ and $13 \equiv 1 \pmod◆LB◆4◆RB◆$So both are sums of two
Squares: $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$.

By the identity $(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2 = (ac + bd)^2 + (ad - bc)^2$:

Using $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$:
$(1 \cdot 2 - 2 \cdot 3)^2 + (1 \cdot 3 + 2 \cdot 2)^2 = (-4)^2 + 7^2 = 16 + 49 = 65$.
$(1 \cdot 2 + 2 \cdot 3)^2 + (1 \cdot 3 - 2 \cdot 2)^2 = 8^2 + (-1)^2 = 64 + 1 = 65$.

Also $65 = 8^2 + 1^2 = 7^2 + 4^2$. Including signs and order, the representations are
$(\pm 1, \pm 8)$, $(\pm 4, \pm 7)$, $(\pm 7, \pm 4)$, $(\pm 8, \pm 1)$Giving $16$ ordered pairs.
$\blacksquare$

</details>

## 15. Common Pitfalls

:::caution Common Pitfall The Chinese Remainder Theorem requires the moduli to be pairwise coprime.
If $m_1$ and $m_2$ share a common factor $d$The system $x \equiv a_1 \pmod◆LB◆m_1◆RB◆$
$x \equiv a_2 \pmod◆LB◆m_2◆RB◆$ is solvable only if $a_1 \equiv a_2 \pmod◆LB◆d◆RB◆$. :::

:::caution Common Pitfall $\left(\frac◆LB◆a◆RB◆◆LB◆n◆RB◆\right) = 1$ for the Jacobi symbol does NOT mean $a$ is
A QR modulo $n$. For example,
$\left(\frac◆LB◆2◆RB◆◆LB◆15◆RB◆\right) = \left(\frac◆LB◆2◆RB◆◆LB◆3◆RB◆\right)\left(\frac◆LB◆2◆RB◆◆LB◆5◆RB◆\right) = (-1)(-1) = 1$But
$x^2 \equiv 2 \pmod◆LB◆15◆RB◆$ has no solution (checking mod $3$: $x^2 \equiv 2 \pmod◆LB◆3◆RB◆$ is impossible).
:::

:::caution Common Pitfall When using Fermat's little theorem, remember that
$a^◆LB◆p-1◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$ only when $\gcd(a, p) = 1$. The correct form for all $a$ is
$a^p \equiv a \pmod◆LB◆p◆RB◆$. :::

:::caution Common Pitfall Not every prime in $\mathbb◆LB◆Z◆RB◆$ remains prime in $\mathbb◆LB◆Z◆RB◆[i]$. Only
Primes $p \equiv 3 \pmod◆LB◆4◆RB◆$ remain prime in $\mathbb◆LB◆Z◆RB◆[i]$. Primes $p \equiv 1 \pmod◆LB◆4◆RB◆$ factor as
$p = (a + bi)(a - bi)$And $2 = (1 + i)^2 \cdot (-i)$. :::

:::caution Common Pitfall The Euclidean algorithm computes $\gcd(a, b)$ for positive integers. When
Working with negative integers or polynomials, remember that $\gcd$ is defined up to a unit (sign
For integers, leading coefficient for polynomials). :::

:::caution Common Pitfall When solving $ax \equiv b \pmod◆LB◆m◆RB◆$You must first check that
$\gcd(a, m) \mid b$. If not, there is no solution. If $\gcd(a, m) = d > 1$Divide through by $d$ And
remember that the modulus becomes $m/d$. :::

:::caution Common Pitfall Primitive roots do not exist for all moduli. A primitive root modulo $n$
Exists only for $n = 2$, $n = 4$, $n = p^k$Or $n = 2p^k$ where $p$ is an odd prime. For example, There
is no primitive root modulo $8$ or modulo $15$. :::

:::caution Common Pitfall In the division algorithm $a = bq + r$The remainder satisfies
$0 \leq r \lt b$ when $b > 0$. When $a$ is negative, the quotient $q$ is also negative (or zero).
For example, $-17 = 5 \cdot (-4) + 3$Not $-17 = 5 \cdot (-3) + (-2)$. :::

:::caution Common Pitfall The Möbius function $\mu(n) = 0$ when $n$ has a repeated prime factor.
Only squarefree integers have nonzero Möbius function values. When using Möbius inversion, many
Terms in the sum may be zero. :::

:::caution Common Pitfall Euler's theorem requires $\gcd(a, n) = 1$. To compute $a^k \bmod n$ When
$\gcd(a, n) \neq 1$Factor out common prime factors first, or use the CRT to work modulo Prime power
factors of $n$ separately. :::

## 16. Problem Set

### Problem 1 (Division Algorithm)

Apply the division algorithm to write $-1000 = 37q + r$ with $0 \leq r \lt 37$. Find $q$ and $r$.

<details>
<summary>Solution</summary>

$1000 = 37 \cdot 27 + 1$So $-1000 = 37 \cdot (-27) - 1 = 37 \cdot (-28) + 36$. So $q = -28$ and
$r = 36$. $\blacksquare$

_If you get this wrong, revise:_ Section 1.1.

</details>

### Problem 2 (GCD and LCM)

Compute $\gcd(1071, 462)$ and $\mathrm◆LB◆lcm(1071, 462)$. Verify the identity
$\gcd(a, b) \cdot \mathrm◆LB◆lcm(a, b) = ab$.

<details>
<summary>Solution</summary>

$1071 = 2 \cdot 462 + 147$, $462 = 3 \cdot 147 + 21$, $147 = 7 \cdot 21 + 0$. So $\gcd(1071, 462) = 21$.

$\mathrm◆LB◆lcm(1071, 462) = 1071 \cdot 462 / 21 = 1071 \cdot 22 = 23562$.

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

Prove that $\gcd(a, b) = 1$ if and only if there exist $x, y \in \mathbb◆LB◆Z◆RB◆$ with $ax + by = 1$.

<details>
<summary>Solution</summary>

($\Rightarrow$) This is Bézout's identity (Theorem 2.1).

($\Leftarrow$) If $ax + by = 1$ and $d \mid a$ and $d \mid b$Then $d \mid (ax + by) = 1$So $d = 1$.
Thus $\gcd(a, b) = 1$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.1.

</details>

### Problem 5 (Prime Factorization)

Find the prime factorization of $N = 2024$. Using this, compute $\tau(2024)$, $\sigma(2024)$ And
$\phi(2024)$.

<details>
<summary>Solution</summary>

$2024 = 2 \cdot 1012 = 2^2 \cdot 506 = 2^3 \cdot 253 = 2^3 \cdot 11 \cdot 23$.

$\tau(2024) = (3+1)(1+1)(1+1) = 4 \cdot 2 \cdot 2 = 16$.

$\sigma(2024) = \frac◆LB◆2^4 - 1◆RB◆◆LB◆1◆RB◆ \cdot \frac◆LB◆11^2 - 1◆RB◆◆LB◆10◆RB◆ \cdot \frac◆LB◆23^2 - 1◆RB◆◆LB◆22◆RB◆ = 15 \cdot 12 \cdot 24 = 4320$.

$\phi(2024) = 2024 \cdot \left(1 - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\left(1 - \frac◆LB◆1◆RB◆◆LB◆11◆RB◆\right)\left(1 - \frac◆LB◆1◆RB◆◆LB◆23◆RB◆\right) = 2024 \cdot \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆10◆RB◆◆LB◆11◆RB◆ \cdot \frac◆LB◆22◆RB◆◆LB◆23◆RB◆ = 880$.
$\blacksquare$

_If you get this wrong, revise:_ Sections 3.1, 12.2, and 6.2.

</details>

### Problem 5a (Arithmetic Functions)

Let $f$ be a multiplicative function with $f(p^a) = a + 1$ for all primes $p$ and $a \geq 1$. Show
that $f(n) = \tau(n)$ for all $n \geq 1$.

<details>
<summary>Solution</summary>

Since $f$ is multiplicative and $\tau$ is multiplicative, and they agree on prime powers:
$f(p^a) = a + 1 = \tau(p^a)$We have $f(n) = \tau(n)$ for all $n \geq 1$ by Proposition 12.1.
$\blacksquare$

_If you get this wrong, revise:_ Sections 12.1 and 12.2.

</details>

### Problem 6 (Infinitude of Primes)

Prove that there are infinitely many primes of the form $4k + 3$.

<details>
<summary>Solution</summary>

Suppose finitely many: $p_1, p_2, \ldots, p_n$ are all primes $\equiv 3 \pmod◆LB◆4◆RB◆$. Consider
$N = 4p_1 p_2 \cdots p_n - 1$. Then $N \equiv 3 \pmod◆LB◆4◆RB◆$.

$N > 1$ and $N$ is odd, so its prime factors are all odd. Not all prime factors of $N$ can be
$\equiv 1 \pmod◆LB◆4◆RB◆$Since the product of numbers $\equiv 1 \pmod◆LB◆4◆RB◆$ is $\equiv 1 \pmod◆LB◆4◆RB◆$ But
$N \equiv 3 \pmod◆LB◆4◆RB◆$. So $N$ has a prime factor $p \equiv 3 \pmod◆LB◆4◆RB◆$.

$p \nmid (4p_1 \cdots p_n)$ since $p \mid N$ and $p_i \mid (N+1)$So $p \neq p_i$ for any $i$.
Contradiction. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2.

</details>

### Problem 7 (Solving Congruences)

Solve the congruence $35x \equiv 15 \pmod◆LB◆77◆RB◆$.

<details>
<summary>Solution</summary>

$\gcd(35, 77) = 7$ and $7 \mid 15$. Divide through by $7$: $5x \equiv 2 \pmod◆LB◆11◆RB◆$.
$5^◆LB◆-1◆RB◆ \equiv 9 \pmod◆LB◆11◆RB◆$ (since $5 \cdot 9 = 45 \equiv 1$). So
$x \equiv 9 \cdot 2 = 18 \equiv 7 \pmod◆LB◆11◆RB◆$.

The $7$ solutions modulo $77$ are $x \equiv 7, 18, 29, 40, 51, 62, 73 \pmod◆LB◆77◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Sections 4.2 and 4.5.

</details>

### Problem 8 (Wilson's Theorem)

Use Wilson's theorem to find $13! \bmod 17$.

<details>
<summary>Solution</summary>

By Wilson, $(17-1)! = 16! \equiv -1 \pmod◆LB◆17◆RB◆$.
$16! = 16 \cdot 15 \cdot 14 \cdot 13! \equiv (-1)(-2)(-3) \cdot 13! \equiv -6 \cdot 13! \pmod◆LB◆17◆RB◆$.

So $-6 \cdot 13! \equiv -1 \pmod◆LB◆17◆RB◆$Giving $6 \cdot 13! \equiv 1 \pmod◆LB◆17◆RB◆$.
$6^◆LB◆-1◆RB◆ \equiv 3 \pmod◆LB◆17◆RB◆$So $13! \equiv 3 \pmod◆LB◆17◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 4.6.

</details>

### Problem 9 (Chinese Remainder Theorem)

Find the smallest positive integer $n$ such that $n \equiv 1 \pmod◆LB◆2◆RB◆$, $n \equiv 2 \pmod◆LB◆3◆RB◆$
$n \equiv 3 \pmod◆LB◆5◆RB◆$And $n \equiv 4 \pmod◆LB◆7◆RB◆$.

<details>
<summary>Solution</summary>

$M = 2 \cdot 3 \cdot 5 \cdot 7 = 210$.

$M_1 = 105$, $105b_1 \equiv 1 \pmod◆LB◆2◆RB◆$, $b_1 = 1$. $M_2 = 70$, $70b_2 \equiv 1 \pmod◆LB◆3◆RB◆$, $b_2 = 1$.
$M_3 = 42$, $42b_3 \equiv 1 \pmod◆LB◆5◆RB◆$, $b_3 = 3$. $M_4 = 30$, $30b_4 \equiv 1 \pmod◆LB◆7◆RB◆$, $b_4 = 4$.

$x = 1 \cdot 1 \cdot 105 + 2 \cdot 1 \cdot 70 + 3 \cdot 3 \cdot 42 + 4 \cdot 4 \cdot 30$
$= 105 + 140 + 378 + 480 = 1103$.

$1103 \bmod 210 = 1103 - 5 \cdot 210 = 53$.

The smallest positive solution is $n = 53$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.

</details>

### Problem 10 (CRT with Non-Coprime Moduli)

Determine whether the system $x \equiv 7 \pmod◆LB◆12◆RB◆$, $x \equiv 1 \pmod◆LB◆18◆RB◆$ has a solution.

<details>
<summary>Solution</summary>

$\gcd(12, 18) = 6$. Check: $7 \equiv 1 \pmod◆LB◆6◆RB◆$? $7 \bmod 6 = 1$, $1 \bmod 6 = 1$. Yes, so a Solution
exists.

$x = 12k + 7$. Then $12k + 7 \equiv 1 \pmod◆LB◆18◆RB◆$So $12k \equiv -6 \equiv 12 \pmod◆LB◆18◆RB◆$. Dividing by
$\gcd(12, 18) = 6$: $2k \equiv 2 \pmod◆LB◆3◆RB◆$So $k \equiv 1 \pmod◆LB◆3◆RB◆$.

$k = 3m + 1$, $x = 12(3m + 1) + 7 = 36m + 19$. Solutions: $x \equiv 19 \pmod◆LB◆36◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.4.

</details>

### Problem 11 (Euler's Theorem)

Compute $3^◆LB◆100◆RB◆ \bmod 91$.

<details>
<summary>Solution</summary>

$\phi(91) = \phi(7)\phi(13) = 6 \cdot 12 = 72$. $\gcd(3, 91) = 1$. $100 = 72 + 28$So
$3^◆LB◆100◆RB◆ \equiv 3^◆LB◆28◆RB◆ \pmod◆LB◆91◆RB◆$.

$3^5 = 243 \equiv 61 \pmod◆LB◆91◆RB◆$. $3^◆LB◆10◆RB◆ \equiv 61^2 = 3721 \equiv 81 \pmod◆LB◆91◆RB◆$.
$3^◆LB◆20◆RB◆ \equiv 81^2 = 6561 \equiv 9 \pmod◆LB◆91◆RB◆$.
$3^◆LB◆28◆RB◆ = 3^◆LB◆20◆RB◆ \cdot 3^5 \cdot 3^3 \equiv 9 \cdot 61 \cdot 27 = 14823 \equiv 81 \pmod◆LB◆91◆RB◆$.

So $3^◆LB◆100◆RB◆ \equiv 81 \pmod◆LB◆91◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.3.

</details>

### Problem 12 (Fermat's Little Theorem)

Show that $2^◆LB◆30◆RB◆ - 1$ is divisible by $31$.

<details>
<summary>Solution</summary>

$31$ is prime and $\gcd(2, 31) = 1$. By Fermat's little theorem, $2^◆LB◆30◆RB◆ \equiv 1 \pmod◆LB◆31◆RB◆$. So
$2^◆LB◆30◆RB◆ - 1 \equiv 0 \pmod◆LB◆31◆RB◆$Meaning $31 \mid (2^◆LB◆30◆RB◆ - 1)$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.3, Corollary 6.5.

</details>

### Problem 13 (RSA)

In an RSA system, $p = 11$, $q = 3$, $e = 7$. The ciphertext $c = 26$ is received. Find the Plaintext
$m$.

<details>
<summary>Solution</summary>

$n = 11 \cdot 3 = 33$, $\phi(n) = 10 \cdot 2 = 20$. Find $d$: $7d \equiv 1 \pmod◆LB◆20◆RB◆$.
$7 \cdot 3 = 21 \equiv 1$So $d = 3$.

Decrypt: $m = 26^3 \bmod 33$. $26^2 = 676 \equiv 16 \pmod◆LB◆33◆RB◆$.
$26^3 \equiv 16 \cdot 26 = 416 \equiv 20 \pmod◆LB◆33◆RB◆$.

The plaintext is $m = 20$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.5.

</details>

### Problem 14 (Multiplicative Order)

Find the multiplicative order of $2$ modulo $11$.

<details>
<summary>Solution</summary>

$\phi(11) = 10$So $\mathrm◆LB◆ord_◆LB◆11◆RB◆(2) \mid 10$. The divisors of $10$ are $1, 2, 5, 10$.

$2^1 = 2 \not\equiv 1 \pmod◆LB◆11◆RB◆$. $2^2 = 4 \not\equiv 1 \pmod◆LB◆11◆RB◆$.
$2^5 = 32 \equiv 10 \equiv -1 \not\equiv 1 \pmod◆LB◆11◆RB◆$. $2^◆LB◆10◆RB◆ \equiv 1 \pmod◆LB◆11◆RB◆$ by Fermat.

So $\mathrm◆LB◆ord_◆LB◆11◆RB◆(2) = 10$Meaning $2$ is a primitive root modulo $11$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.1.

</details>

### Problem 15 (Primitive Roots)

Determine whether $3$ is a primitive root modulo $19$.

<details>
<summary>Solution</summary>

$\phi(19) = 18$. Prime divisors of $18$: $2$ and $3$. Check $3^9$ and $3^6$.

$3^2 = 9$, $3^4 = 81 \equiv 5 \pmod◆LB◆19◆RB◆$, $3^6 = 3^4 \cdot 3^2 \equiv 5 \cdot 9 = 45 \equiv 7 \pmod◆LB◆19◆RB◆$.
$3^9 = 3^6 \cdot 3^3 \equiv 7 \cdot 27 = 189 \equiv 18 \equiv -1 \pmod◆LB◆19◆RB◆$.

$3^6 \equiv 7 \not\equiv 1$ and $3^9 \equiv -1 \not\equiv 1 \pmod◆LB◆19◆RB◆$. Therefore $3$ is a primitive
root modulo $19$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.4.

</details>

### Problem 16 (Quadratic Residues)

Determine whether $5$ is a quadratic residue modulo $23$.

<details>
<summary>Solution</summary>

By Euler's criterion: $5^◆LB◆(23-1)/2◆RB◆ = 5^◆LB◆11◆RB◆ \pmod◆LB◆23◆RB◆$.

$5^2 = 25 \equiv 2 \pmod◆LB◆23◆RB◆$, $5^4 \equiv 4 \pmod◆LB◆23◆RB◆$, $5^8 \equiv 16 \pmod◆LB◆23◆RB◆$.
$5^◆LB◆11◆RB◆ = 5^8 \cdot 5^2 \cdot 5^1 \equiv 16 \cdot 2 \cdot 5 = 160 \equiv 22 \equiv -1 \pmod◆LB◆23◆RB◆$.

Since $5^◆LB◆11◆RB◆ \equiv -1 \pmod◆LB◆23◆RB◆$, $5$ is a QNR modulo $23$. $\blacksquare$

_If you get this wrong, revise:_ Sections 8.1 and 8.2.

</details>

### Problem 17 (Legendre Symbol)

Compute $\left(\frac◆LB◆7◆RB◆◆LB◆53◆RB◆\right)$ using the law of quadratic reciprocity.

<details>
<summary>Solution</summary>

$7 \equiv 3 \pmod◆LB◆4◆RB◆$ and $53 \equiv 1 \pmod◆LB◆4◆RB◆$So
$\left(\frac◆LB◆7◆RB◆◆LB◆53◆RB◆\right) = \left(\frac◆LB◆53◆RB◆◆LB◆7◆RB◆\right) = \left(\frac◆LB◆4◆RB◆◆LB◆7◆RB◆\right) = \left(\frac◆LB◆2◆RB◆◆LB◆7◆RB◆\right)^2 = 1$.

So $7$ is a QR modulo $53$. $\blacksquare$

_If you get this wrong, revise:_ Section 8.4.

</details>

### Problem 18 (Second Supplement)

For how many primes $p$ in the range $3 \leq p \leq 100$ is $2$ a quadratic residue?

<details>
<summary>Solution</summary>

By the second supplement, $\left(\frac◆LB◆2◆RB◆◆LB◆p◆RB◆\right) = 1$ if and only if $p \equiv \pm 1 \pmod◆LB◆8◆RB◆$
I.e., $p \equiv 1$ or $7 \pmod◆LB◆8◆RB◆$.

Primes $p \leq 100$ with $p \equiv 1 \pmod◆LB◆8◆RB◆$: $17, 41, 73, 89, 97$ (5 primes). Primes $p \leq 100$
with $p \equiv 7 \pmod◆LB◆8◆RB◆$: $7, 23, 31, 47, 71, 79$ (6 primes).

Total: $5 + 6 = 11$ primes. $\blacksquare$

_If you get this wrong, revise:_ Section 8.6 (Second Supplement).

</details>

### Problem 19 (Continued Fractions)

Find the continued fraction expansion of $e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, \ldots]$. Compute the
convergent $p_4/q_4$ and verify $|p_4/q_4 - e| \lt 1/q_4^2$.

<details>
<summary>Solution</summary>

$e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, \ldots]$. We need $p_4/q_4 = [2; 1, 2, 1, 1]$.

$p_◆LB◆-1◆RB◆ = 1$, $p_0 = 2$. $q_◆LB◆-1◆RB◆ = 0$, $q_0 = 1$.

$a_1 = 1$: $p_1 = 1 \cdot 2 + 1 = 3$, $q_1 = 1 \cdot 1 + 0 = 1$. $a_2 = 2$:
$p_2 = 2 \cdot 3 + 2 = 8$, $q_2 = 2 \cdot 1 + 1 = 3$. $a_3 = 1$:
$p_3 = 1 \cdot 8 + 3 = 11$, $q_3 = 1 \cdot 3 + 1 = 4$. $a_4 = 1$:
$p_4 = 1 \cdot 11 + 8 = 19$, $q_4 = 1 \cdot 4 + 3 = 7$.

$p_4/q_4 = 19/7 \approx 2.714\ldots$

$e \approx 2.718\ldots$So $|e - 19/7| \approx 0.004$. Check: $1/q_4^2 = 1/49 \approx 0.020$. Indeed
$0.004 \lt 0.020$. $\blacksquare$

_If you get this wrong, revise:_ Sections 9.3 and 9.7.

</details>

### Problem 20 (Möbius Inversion)

Let $f(n) = \sum_◆LB◆d \mid n◆RB◆ \sigma(d)$. Find a closed-form expression for $f(n)$.

<details>
<summary>Solution</summary>

We have $f = \sigma * \mathbf◆LB◆1◆RB◆$. We know $\sigma = \mathrm◆LB◆id * \mathbf◆LB◆1◆RB◆$ where
$\mathrm◆LB◆id(n) = n$. So
$f = (\mathrm◆LB◆id * \mathbf◆LB◆1◆RB◆) * \mathbf◆LB◆1◆RB◆ = \mathrm◆LB◆id * (\mathbf◆LB◆1◆RB◆ * \mathbf◆LB◆1◆RB◆)$.

Now $(\mathbf◆LB◆1◆RB◆ * \mathbf◆LB◆1◆RB◆)(n) = \sum_◆LB◆d \mid n◆RB◆ 1 \cdot 1 = \tau(n)$.

So $f(n) = \sum_◆LB◆d \mid n◆RB◆ d \cdot \tau(n/d)$. This is the Dirichlet convolution
$\mathrm◆LB◆id * \tau$.

For example, $f(6) = \sigma(1) + \sigma(2) + \sigma(3) + \sigma(6) = 1 + 3 + 4 + 12 = 20$. Check:
$\sum_◆LB◆d \mid 6◆RB◆ d \cdot \tau(6/d) = 1 \cdot \tau(6) + 2 \cdot \tau(3) + 3 \cdot \tau(2) + 6 \cdot \tau(1) = 1 \cdot 4 + 2 \cdot 2 + 3 \cdot 2 + 6 \cdot 1 = 4 + 4 + 6 + 6 = 20$.
$\blacksquare$

_If you get this wrong, revise:_ Sections 12.4 and 12.5.

</details>

## Worked Examples

### Example 1: Euclidean algorithm

**Problem.** Find $\gcd(252, 198)$ and express it as a linear combination.

**Solution.** $252 = 1 \times 198 + 54$. $198 = 3 \times 54 + 36$. $54 = 1 \times 36 + 18$.
$36 = 2 \times 18$. So $\gcd = 18$.

Back-substituting:
$18 = 54 - 36 = 54 - (198 - 3 \times 54) = 4 \times 54 - 198 = 4(252 - 198) - 198 = 4 \times 252 - 5 \times 198$.

$\blacksquare$

### Example 2: Fermat's little theorem

**Problem.** Find $3^◆LB◆100◆RB◆ \bmod 7$.

**Solution.** $3^6 \equiv 1 \pmod◆LB◆7◆RB◆$ (Fermat). $100 = 16 \times 6 + 4$.
$3^◆LB◆100◆RB◆ = (3^6)^◆LB◆16◆RB◆ \cdot 3^4 \equiv 1^◆LB◆16◆RB◆ \cdot 81 \equiv 81 \equiv 4 \pmod◆LB◆7◆RB◆$.

$\blacksquare$

## Common Pitfalls

- **Confusing $\equiv$ and $=$.** Congruence $a \equiv b \pmod◆LB◆n◆RB◆$ means $n \mid (a - b)$, not that
  $a = b$. **Fix:** Congruence is an equivalence relation; work with residue classes.
- **Wrong Euclidean algorithm application.** Always divide the larger number by the smaller.
  **Fix:** $\gcd(a, b) = \gcd(b, a \bmod b)$; continue until remainder is 0.
- **Misstating Fermat's little theorem.** $a^◆LB◆p-1◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$ requires $p$ prime and
  $p \nmid a$. **Fix:** If $p \mid a$, then $a^◆LB◆p-1◆RB◆ \equiv 0 \pmod◆LB◆p◆RB◆$, not $1$.

## Summary

- Euclidean algorithm: $\gcd(a, b) = \gcd(b, a \bmod b)$; extended version gives Bézout
  coefficients.
- Fundamental theorem of arithmetic: every integer $> 1$ has a unique prime factorisation (up to
  order).
- Fermat's little theorem: $a^◆LB◆p-1◆RB◆ \equiv 1 \pmod◆LB◆p◆RB◆$ for prime $p$, $p \nmid a$.
- Chinese Remainder Theorem: simultaneous congruences with coprime moduli have a unique solution
  modulo the product.

## Cross-References

| Topic                      | Site        | Link                                                                      |
| -------------------------- | ----------- | ------------------------------------------------------------------------- |
| Number Theory (Overview)   | WyattsNotes | [View](/docs/university/mathematics/number-theory)                        |
| Abstract Algebra           | WyattsNotes | [View](/docs/university/mathematics/abstract-algebra)                     |
| Real Analysis              | WyattsNotes | [View](/docs/university/mathematics/real-analysis)                        |
| BMO Preparation            | WyattsNotes | [View](/docs/university/admissions/bmo-preparation)                       |
| Number Theory — MIT 18.781 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/) |
