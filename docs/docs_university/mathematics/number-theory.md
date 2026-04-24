---
title: Number Theory
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

_Proof._ Consider the set $S = \{a - bk : k \in \mathbb{Z},\ a - bk \geq 0\}$. This set is non-empty
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

## 2. The Greatest Common Divisor

### 2.1 Definition and Existence

**Definition.** The **greatest common divisor** of $a$ and $b$ (not both zero) is the largest
positive integer $d$ such that $d \mid a$ and $d \mid b$. We write $d = \gcd(a, b)$.

**Theorem 2.1 (Bézout's Identity).** For any $a, b \in \mathbb{Z}$ not both zero, there exist
$x, y \in \mathbb{Z}$ such that

$$\gcd(a, b) = ax + by$$

_Proof._ Let $S = \{ax + by : x, y \in \mathbb{Z},\ ax + by > 0\}$. By the well-ordering principle,
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

### 2.3 Coprime Integers

Integers $a$ and $b$ are **coprime** (or **relatively prime**) if $\gcd(a, b) = 1$.

**Proposition 2.3 (Euclid's Lemma).** If $p$ is prime and $p \mid ab$, then $p \mid a$ or
$p \mid b$.

_Proof._ If $p \nmid a$, then $\gcd(p, a) = 1$. By Bézout's identity, $1 = px + ay$ for some
$x, y \in \mathbb{Z}$. Multiplying by $b$: $b = pbx + aby$. Since $p \mid aby$, we get $p \mid b$.
$\blacksquare$

**Corollary 2.4.** If $p$ is prime and $p \mid a_1 a_2 \cdots a_n$, then $p \mid a_i$ for some $i$.

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

## 6. Euler's Theorem and Fermat's Little Theorem

### 6.1 Euler's Totient Function

**Definition.** Euler's **totient function** $\phi(n)$ counts the integers in $\{1, 2, \ldots, n\}$
that are coprime to $n$.

**Proposition 6.1.** If $p$ is prime, then $\phi(p) = p - 1$.

**Proposition 6.2.** If $\gcd(m, n) = 1$, then $\phi(mn) = \phi(m)\phi(n)$.

**Proposition 6.3.** If $n = p_1^{a_1} \cdots p_k^{a_k}$, then
$\phi(n) = n \prod_{p \mid n}(1 - 1/p)$.

_Proof._ By multiplicativity, $\phi(n) = \prod_{i=1}^k \phi(p_i^{a_i})$. Now
$\phi(p^a) = p^a - p^{a-1} = p^a(1 - 1/p)$, since exactly $p^{a-1}$ of the $p^a$ integers in
$\{1, \ldots, p^a\}$ are multiples of $p$. $\blacksquare$

### 6.2 Euler's Theorem

**Theorem 6.4 (Euler's Theorem).** If $\gcd(a, n) = 1$, then

$$a^{\phi(n)} \equiv 1 \pmod{n}$$

_Proof._ Let $U_n = \{r_1, r_2, \ldots, r_{\phi(n)}\}$ be the reduced residue system modulo $n$.
Since $\gcd(a, n) = 1$, the map $r_i \mapsto ar_i \pmod{n}$ permutes $U_n$. Thus
$\prod_{i=1}^{\phi(n)} (ar_i) \equiv \prod_{i=1}^{\phi(n)} r_i \pmod{n}$, so
$a^{\phi(n)} \prod r_i \equiv \prod r_i \pmod{n}$. Since $\gcd(\prod r_i, n) = 1$, we cancel to get
$a^{\phi(n)} \equiv 1 \pmod{n}$. $\blacksquare$

**Corollary 6.5 (Fermat's Little Theorem).** If $p$ is prime and $\gcd(a, p) = 1$, then
$a^{p-1} \equiv 1 \pmod{p}$. Equivalently, $a^p \equiv a \pmod{p}$ for all $a$.

### 6.3 Worked Example

**Problem.** Compute $7^{222} \bmod 15$.

_Solution._ $\phi(15) = \phi(3)\phi(5) = 2 \cdot 4 = 8$. Since $\gcd(7, 15) = 1$,
$7^8 \equiv 1 \pmod{15}$. We have $222 = 27 \cdot 8 + 6$, so
$7^{222} = (7^8)^{27} \cdot 7^6 \equiv 1^{27} \cdot 7^6 \pmod{15}$. Now
$7^2 = 49 \equiv 4 \pmod{15}$, $7^4 \equiv 16 \equiv 1 \pmod{15}$, so
$7^6 = 7^4 \cdot 7^2 \equiv 1 \cdot 4 = 4 \pmod{15}$. $\blacksquare$

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

## 8. Quadratic Residues

### 8.1 Definition

**Definition.** Let $p$ be an odd prime. An integer $a$ not divisible by $p$ is a **quadratic
residue** modulo $p$ if the congruence $x^2 \equiv a \pmod{p}$ has a solution. Otherwise $a$ is a
**quadratic non-residue**.

**Proposition 8.1.** There are exactly $(p - 1)/2$ quadratic residues and $(p - 1)/2$ quadratic
non-residues modulo $p$.

_Proof._ The map $x \mapsto x^2 \pmod{p}$ from $\{1, 2, \ldots, p-1\}$ to the set of quadratic
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

### 8.5 The Jacobi Symbol

**Definition.** The **Jacobi symbol** generalizes the Legendre symbol to odd composite moduli. For
$n = p_1^{a_1} \cdots p_k^{a_k}$ (odd, positive):

$$\left(\frac{a}{n}\right) = \prod_{i=1}^k \left(\frac{a}{p_i}\right)^{a_i}$$

**Warning.** $\left(\frac{a}{n}\right) = 1$ does not imply $a$ is a QR modulo $n$ when $n$ is
composite.

The Jacobi symbol satisfies the same reciprocity law and supplements as the Legendre symbol, making
it efficient for computation.

### 8.6 Worked Example

**Problem.** Determine whether $73$ is a quadratic residue modulo $97$.

_Solution._ By quadratic reciprocity, since both $73$ and $97$ are congruent to $1 \pmod{4}$:

$$\left(\frac{73}{97}\right) = \left(\frac{97}{73}\right) = \left(\frac{24}{73}\right) = \left(\frac{4}{73}\right)\left(\frac{6}{73}\right) = 1 \cdot \left(\frac{6}{73}\right)$$

$$\left(\frac{6}{73}\right) = \left(\frac{2}{73}\right)\left(\frac{3}{73}\right)$$

$\left(\frac{2}{73}\right) = 1$ since $73 \equiv 1 \pmod{8}$.

$\left(\frac{3}{73}\right) = (-1)^{\frac{3-1}{2} \cdot \frac{73-1}{2}} \left(\frac{73}{3}\right) = (-1)^{72} \left(\frac{1}{3}\right) = 1 \cdot 1 = 1$.

So $\left(\frac{73}{97}\right) = 1$, and $73$ is a QR modulo $97$. $\blacksquare$

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

## 10. Diophantine Equations

### 10.1 Linear Diophantine Equations

**Theorem 10.1.** The equation $ax + by = c$ has integer solutions if and only if
$\gcd(a, b) \mid c$.

_Proof._ This follows directly from Bézout's identity. $\blacksquare$

### 10.2 Pythagorean Triples

**Theorem 10.2.** All primitive Pythagorean triples $(a, b, c)$ (with $\gcd(a, b, c) = 1$ and
$a^2 + b^2 = c^2$) are given by

$$a = m^2 - n^2, \quad b = 2mn, \quad c = m^2 + n^2$$

where $m > n > 0$, $\gcd(m, n) = 1$, and $m \not\equiv n \pmod{2}$.

_Proof._ Without loss, $a$ is odd and $b$ is even. From $a^2 = c^2 - b^2 = (c-b)(c+b)$. Setting
$m = (c + a)/2$ and $n = (c - a)/2$ yields the parameterization. $\blacksquare$

### 10.3 Pell's Equation

**Theorem 10.3.** The equation $x^2 - Dy^2 = 1$ (where $D$ is not a perfect square) always has
non-trivial integer solutions. If $(x_1, y_1)$ is the smallest positive solution, then all solutions
are given by $(x_n + y_n\sqrt{D}) = (x_1 + y_1\sqrt{D})^n$.

_Proof._ The existence of a non-trivial solution follows from Dirichlet's unit theorem applied to
$\mathbb{Z}[\sqrt{D}]$. The general solution follows from the fact that the group of units of norm
$1$ in $\mathbb{Z}[\sqrt{D}]$ is cyclic and generated by the fundamental unit. $\blacksquare$

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

**Definition.** The **Gaussian integers** are $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$,
where $i = \sqrt{-1}$. They form a commutative ring with unity under the usual addition and
multiplication of complex numbers.

### 11.2 Norm and Units

The **norm** of $\alpha = a + bi \in \mathbb{Z}[i]$ is
$N(\alpha) = a^2 + b^2 = \alpha \bar{\alpha}$.

**Proposition 11.1.** $N(\alpha\beta) = N(\alpha)N(\beta)$.

**Proposition 11.2.** The units of $\mathbb{Z}[i]$ are $\{1, -1, i, -i\}$ (exactly those with norm
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

## 12. Arithmetic Functions

### 12.1 Multiplicative Functions

**Definition.** An arithmetic function $f$ is **multiplicative** if $f(mn) = f(m)f(n)$ whenever
$\gcd(m, n) = 1$. It is **completely multiplicative** if $f(mn) = f(m)f(n)$ for all $m, n$.

**Proposition 12.1.** If $f$ is multiplicative and $n = p_1^{a_1} \cdots p_k^{a_k}$, then
$f(n) = f(p_1^{a_1}) \cdots f(p_k^{a_k})$.

**Example.** $\phi(n)$ is multiplicative (but not completely multiplicative).
$\phi(6) = 2 \neq \phi(2)\phi(2) = 1$.

### 12.2 The Sum-of-Divisors Function

**Definition.** $\sigma(n) = \sum_{d \mid n} d$ (the sum of all positive divisors of $n$).
$\tau(n) = \sum_{d \mid n} 1$ (the number of positive divisors of $n$).

**Proposition 12.2.** If $n = p_1^{a_1} \cdots p_k^{a_k}$, then

$$\sigma(n) = \prod_{i=1}^k \frac{p_i^{a_i + 1} - 1}{p_i - 1}, \quad \tau(n) = \prod_{i=1}^k (a_i + 1)$$

**Definition.** $n$ is **perfect** if $\sigma(n) = 2n$.

**Theorem 12.3 (Euclid-Euler).** An even number $n$ is perfect if and only if $n = 2^{p-1}(2^p - 1)$
where $2^p - 1$ is a Mersenne prime.

_Proof._ If $n = 2^{p-1}(2^p - 1)$ with $2^p - 1$ prime, then
$\sigma(n) = \sigma(2^{p-1})\sigma(2^p - 1) = (2^p - 1) \cdot 2^p = 2n$. Conversely, if $n$ is even
and perfect, write $n = 2^{p-1}m$ with $m$ odd. Then $\sigma(n) = (2^p - 1)\sigma(m) = 2^p m$, so
$\sigma(m) = 2^p m / (2^p - 1)$. Since $\sigma(m) = 2^p m / (2^p - 1)$ must be an integer,
$(2^p - 1) \mid m$. Write $m = (2^p - 1)q$. Then $\sigma(m) = 2^p q$, but also
$\sigma(m) \geq m + 1 = (2^p - 1)q + 1$. If $q > 1$, then $\sigma(m) \geq m + 1 + q > 2^p q$,
contradiction. So $q = 1$ and $m = 2^p - 1$ is prime. $\blacksquare$

### 12.3 Proof of Möbius Inversion

_Proof of Theorem 12.4._ If $f(n) = \sum_{d \mid n} g(d)$, then

$$\sum_{d \mid n} \mu(d) f(n/d) = \sum_{d \mid n} \mu(d) \sum_{e \mid (n/d)} g(e) = \sum_{e \mid n} g(e) \sum_{d \mid (n/e)} \mu(d)$$

The inner sum $\sum_{d \mid m} \mu(d) = 1$ if $m = 1$ and $0$ if $m > 1$ (a standard identity). So
only $e = n$ contributes, giving $g(n)$. $\blacksquare$

### 12.4 Worked Example

**Problem.** Express $\sum_{d \mid n} \phi(d)$ in closed form.

_Solution._ Let $f(n) = \sum_{d \mid n} \phi(d)$. We claim $f(n) = n$.

Since $\phi$ is multiplicative, $f$ is multiplicative. For $n = p^a$:

$f(p^a) = \sum_{j=0}^a \phi(p^j) = \phi(1) + \phi(p) + \cdots + \phi(p^a) = 1 + (p - 1) + (p^2 - p) + \cdots + (p^a - p^{a-1}) = p^a$.

So $f(n) = n$. This can also be proved directly: the integers $1, 2, \ldots, n$ are partitioned by
their gcd with $n$, and the number with $\gcd(k, n) = d$ is $\phi(n/d)$. $\blacksquare$

## 13. Additional Topics

### 12.1 Wilson's Theorem

**Theorem 12.1 (Wilson's Theorem).** $p$ is prime if and only if $(p - 1)! \equiv -1 \pmod{p}$.

_Proof._ If $p$ is prime: in $\mathbb{Z}/p\mathbb{Z}$, each element pairs with its inverse. The only
self-inverse elements are $1$ and $p - 1$. So $(p-1)! \equiv 1 \cdot (p-1) \equiv -1 \pmod{p}$.
Conversely, if $n$ is composite and $n > 4$, then $(n-1)! \equiv 0 \pmod{n}$ since $n$ has a proper
factor appearing in $(n-1)!$. $\blacksquare$

### 12.2 The Ring $\mathbb{Z}/n\mathbb{Z}$

**Theorem 12.2.** The ring $\mathbb{Z}/n\mathbb{Z}$ is a field if and only if $n$ is prime.

**Proposition 12.3.** $(\mathbb{Z}/n\mathbb{Z})^*$ has order $\phi(n)$ and is a group under
multiplication.

### 12.3 Mobius Inversion

**Definition.** The **Möbius function** $\mu(n)$ is defined by:

- $\mu(1) = 1$.
- $\mu(n) = 0$ if $n$ is divisible by a square of a prime.
- $\mu(n) = (-1)^k$ if $n$ is a product of $k$ distinct primes.

**Theorem 12.4 (Möbius Inversion).** If $f(n) = \sum_{d \mid n} g(d)$ for all $n \geq 1$, then

$$g(n) = \sum_{d \mid n} \mu(d) f(n/d)$$

## 14. Additional Results

### 14.1 Fermat's Last Theorem

**Theorem 14.1 (Wiles, 1995).** For $n \geq 3$, the equation $x^n + y^n = z^n$ has no non-zero
integer solutions.

The proof is far beyond our scope, using deep results from algebraic geometry (elliptic curves,
modular forms, Galois representations).

### 14.2 The Ring $\mathbb{Z}[\sqrt{-5}]$

**Example.** In $\mathbb{Z}[\sqrt{-5}]$, unique factorization fails:

$$6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$$

The elements $2, 3, 1 + \sqrt{-5}, 1 - \sqrt{-5}$ are all irreducible but not prime (in the
ring-theoretic sense). This failure of unique factorization motivates the development of ideal
theory.

### 14.3 Dirichlet's Theorem on Primes in Arithmetic Progressions

**Theorem 14.2 (Dirichlet).** If $\gcd(a, m) = 1$, then there are infinitely many primes of the form
$a + km$ ($k \geq 0$).

_Proof (sketch)._ Dirichlet introduced $L$-functions $L(s, \chi) = \sum_{n=1}^{\infty} \chi(n)/n^s$
where $\chi$ is a Dirichlet character mod $m$. The key steps are:

1. $L(s, \chi_0)$ has a simple pole at $s = 1$ (where $\chi_0$ is the principal character).
2. $L(1, \chi) \neq 0$ for non-principal characters $\chi$.
3. $\log L(s, \chi_0) = \sum_p \log(1 - \chi_0(p)/p^s)^{-1} = \sum_p \sum_{k \geq 1} \chi_0(p^k)/(kp^{ks})$.
4. Combining over all characters: $\sum_\chi \log L(s, \chi)$ diverges as $s \to 1^+$, and the
   contribution from $\chi_0$ captures primes $p \equiv a \pmod{m}$.

$\blacksquare$

### 14.4 Quadratic Forms

**Definition.** A **binary quadratic form** is $Q(x, y) = ax^2 + bxy + cy^2$ with
$a, b, c \in \mathbb{Z}$. Its **discriminant** is $D = b^2 - 4ac$.

Two forms are **equivalent** if one can be obtained from the other by a change of variables
$(x, y) \mapsto (px + qy, rx + sy)$ with $ps - qr = 1$.

**Theorem 14.3 (Gauss).** The number of equivalence classes of binary quadratic forms of
discriminant $D \lt{} 0$ is finite. The class number $h(D)$ is 1 precisely for
$D \in \{-3, -4, -7, -8, -11, -19, -43, -67, -163\}$.

### 14.5 Worked Example

**Problem.** Determine all representations of $n = 7$ as a sum of two squares.

_Solution._ We need $a^2 + b^2 = 7$ with $a, b \in \mathbb{Z}$. Checking: $a^2 \leq 7$, so
$a \in \{0, 1, 2\}$. For $a = 0$: $b^2 = 7$ (no). For $a = 1$: $b^2 = 6$ (no). For $a = 2$:
$b^2 = 3$ (no). By symmetry, $a = -1, -2$ give the same. So $7$ cannot be written as a sum of two
squares.

This is consistent with the theorem: $7 \equiv 3 \pmod{4}$, so it is not a sum of two squares.
$\blacksquare$

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
