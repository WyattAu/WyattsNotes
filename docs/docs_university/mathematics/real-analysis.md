---
title: Real Analysis
date: 2026-04-23T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: real-analysis
---

## 1. The Real Number System

### 1.1 Field Axioms

The real numbers $\mathbb{R}$ form a **complete ordered field**. The field axioms guarantee closure
under addition, subtraction, multiplication, and division (by non-zero elements), together with the
usual commutative, associative, and distributive laws.

### 1.2 Order and the Completeness Axiom

The order relation $\leq$ on $\mathbb{R}$ satisfies:

1. **Reflexivity**: $a \leq a$
2. **Antisymmetry**: $a \leq b$ and $b \leq a$ implies $a = b$
3. **Transitivity**: $a \leq b$ and $b \leq c$ implies $a \leq c$
4. **Totality**: for all $a, b$, either $a \leq b$ or $b \leq a$
5. **Compatibility with addition**: $a \leq b$ implies $a + c \leq b + c$
6. **Compatibility with multiplication**: $a \leq b$ and $0 \leq c$ implies $ac \leq bc$

The **completeness axiom** (also called the **least upper bound property**) is what distinguishes
$\mathbb{R}$ from $\mathbb{Q}$:

**Axiom (Completeness).** Every non-empty subset of $\mathbb{R}$ that is bounded above has a **least
upper bound** (supremum) in $\mathbb{R}$.

### 1.3 Supremum and Infimum

Let $S \subseteq \mathbb{R}$ be a non-empty set that is bounded above.

**Definition.** The **supremum** (or least upper bound) of $S$, denoted $\sup(S)$, is the real number
$u$ satisfying:

1. $u$ is an upper bound: $s \leq u$ for all $s \in S$.
2. $u$ is the least upper bound: if $v$ is any upper bound of $S$, then $u \leq v$.

Similarly, the **infimum** (or greatest lower bound), $\inf(S)$, is the greatest number $l$ such that
$l \leq s$ for all $s \in S$.

**Proposition 1.1.** $\sup(S)$ exists if and only if $S$ is non-empty and bounded above.

**Proposition 1.2 (Approximation Property).** If $u = \sup(S)$, then for every $\varepsilon > 0$, there
exists $s \in S$ such that $u - \varepsilon < s \leq u$.

*Proof.* If no such $s$ existed, then $u - \varepsilon$ would be an upper bound of $S$ strictly less
than $u$, contradicting the definition of $\sup(S)$. $\blacksquare$

**Example.** Let $S = \{x \in \mathbb{R} : x^2 < 2\}$. Then $\sup(S) = \sqrt{2}$. Note that $\sqrt{2}
\notin \mathbb{Q}$, so $\mathbb{Q}$ does not satisfy the completeness axiom.

### 1.4 Archimedean Property

**Theorem 1.1 (Archimedean Property).** For every $x \in \mathbb{R}$, there exists $n \in \mathbb{N}$
such that $n > x$.

**Corollary 1.2.** For every $\varepsilon > 0$, there exists $n \in \mathbb{N}$ such that $1/n < \varepsilon$.

**Corollary 1.3 (Density of $\mathbb{Q}$).** Between any two distinct real numbers $a < b$, there
exists a rational number $q \in \mathbb{Q}$ with $a < q < b$.

## 2. Sequences

### 2.1 Convergence

A sequence $(a_n)_{n=1}^{\infty}$ in $\mathbb{R}$ **converges** to a limit $L \in \mathbb{R}$ if for
every $\varepsilon > 0$, there exists $N \in \mathbb{N}$ such that

$$|a_n - L| < \varepsilon \quad \mathrm{for all } n \geq N$$

We write $a_n \to L$ or $\lim_{n \to \infty} a_n = L$. A sequence that does not converge is said to
**diverge**.

**Proposition 2.1 (Uniqueness of Limits).** If $(a_n)$ converges, its limit is unique.

*Proof.* Suppose $a_n \to L$ and $a_n \to M$ with $L \neq M$. Let $\varepsilon = |L - M|/2 > 0$. There
exists $N_1$ such that $|a_n - L| < \varepsilon$ for $n \geq N_1$, and $N_2$ such that
$|a_n - M| < \varepsilon$ for $n \geq N_2$. For $n \geq \max(N_1, N_2)$:

$$|L - M| \leq |a_n - L| + |a_n - M| < 2\varepsilon = |L - M|$$

a contradiction. $\blacksquare$

**Proposition 2.2.** Every convergent sequence is bounded.

### 2.2 Convergence Theorems

**Theorem 2.1 (Algebra of Limits).** If $a_n \to L$ and $b_n \to M$, then:

1. $a_n + b_n \to L + M$
2. $a_n b_n \to LM$
3. $a_n / b_n \to L/M$ (provided $M \neq 0$ and $b_n \neq 0$ for all $n$)

**Theorem 2.2 (Squeeze Theorem).** If $a_n \leq b_n \leq c_n$ for all $n$ and $a_n \to L$,
$c_n \to L$, then $b_n \to L$.

**Theorem 2.3 (Monotone Convergence Theorem).** Every bounded monotone sequence in $\mathbb{R}$ converges.
Specifically:

- Every bounded increasing sequence converges to its supremum.
- Every bounded decreasing sequence converges to its infimum.

### 2.3 Cauchy Sequences

A sequence $(a_n)$ is a **Cauchy sequence** if for every $\varepsilon > 0$, there exists $N \in
\mathbb{N}$ such that

$$|a_n - a_m| < \varepsilon \quad \mathrm{for all } m, n \geq N$$

**Theorem 2.4.** Every convergent sequence is Cauchy.

**Theorem 2.5 (Cauchy Completeness of $\mathbb{R}$).** Every Cauchy sequence in $\mathbb{R}$ converges.

*Proof (sketch).* Let $(a_n)$ be Cauchy. Then $(a_n)$ is bounded. By the Bolzano-Weierstrass theorem
(below), $(a_n)$ has a convergent subsequence $(a_{n_k}) \to L$. Since $(a_n)$ is Cauchy, for any
$\varepsilon > 0$, choose $N$ so that $|a_n - a_m| < \varepsilon/2$ for $m, n \geq N$, and $K$ so that
$|a_{n_k} - L| < \varepsilon/2$ for $k \geq K$. For $n \geq N$, choose $k$ with $n_k \geq N$; then
$|a_n - L| \leq |a_n - a_{n_k}| + |a_{n_k} - L| < \varepsilon$. $\blacksquare$

**Theorem 2.6 (Bolzano-Weierstrass).** Every bounded sequence in $\mathbb{R}$ has a convergent subsequence.

### 2.4 Subsequences

A **subsequence** of $(a_n)$ is a sequence $(a_{n_k})_{k=1}^{\infty}$ where $n_1 < n_2 < n_3 < \cdots$.

**Proposition 2.3.** If $a_n \to L$, then every subsequence $(a_{n_k}) \to L$.

**Proposition 2.4.** If $(a_n)$ has two subsequences converging to different limits, then $(a_n)$ diverges.

### 2.5 Worked Example

**Problem.** Prove that $\lim_{n \to \infty} \frac{n}{n+1} = 1$.

*Solution.* Let $\varepsilon > 0$. We need $\left|\frac{n}{n+1} - 1\right| < \varepsilon$, i.e.,
$\frac{1}{n+1} < \varepsilon$, i.e., $n > \frac{1}{\varepsilon} - 1$. Choose $N = \lceil \frac{1}{\varepsilon} \rceil$.
Then for $n \geq N$: $n \geq \frac{1}{\varepsilon}$, so $n+1 > \frac{1}{\varepsilon}$, so
$\frac{1}{n+1} < \varepsilon$. $\blacksquare$

## 3. Series

### 3.1 Definitions and Convergence

A **series** $\sum_{n=1}^{\infty} a_n$ converges if the sequence of partial sums $S_N = \sum_{n=1}^{N} a_n$
converges. The limit is the sum of the series.

If $a_n \geq 0$ for all $n$, the series of partial sums is increasing, so by the monotone convergence
theorem, $\sum a_n$ converges if and only if $(S_N)$ is bounded above.

### 3.2 Convergence Tests

**Theorem 3.1 (Comparison Test).** If $0 \leq a_n \leq b_n$ for all $n$, then:

- If $\sum b_n$ converges, then $\sum a_n$ converges.
- If $\sum a_n$ diverges, then $\sum b_n$ diverges.

**Theorem 3.2 (Limit Comparison Test).** If $a_n > 0$, $b_n > 0$, and
$\lim_{n \to \infty} a_n / b_n = L$ where $0 < L < \infty$, then $\sum a_n$ converges if and only if
$\sum b_n$ converges.

**Theorem 3.3 (Ratio Test).** If $\lim_{n \to \infty} |a_{n+1}/a_n| = L$, then:

- If $L < 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$, the test is inconclusive.

**Theorem 3.4 (Root Test).** If $\limsup_{n \to \infty} \sqrt[n]{|a_n|} = L$, then:

- If $L < 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$, the test is inconclusive.

**Theorem 3.5 (Integral Test).** If $f : [1, \infty) \to [0, \infty)$ is positive, continuous, and
decreasing, then $\sum_{n=1}^{\infty} f(n)$ converges if and only if
$\int_1^{\infty} f(x)\, dx$ converges.

**Theorem 3.6 (Alternating Series Test).** If $a_n > 0$, $a_n$ decreases, and $a_n \to 0$, then
$\sum_{n=1}^{\infty} (-1)^{n+1} a_n$ converges.

### 3.3 Absolute and Conditional Convergence

A series $\sum a_n$ **converges absolutely** if $\sum |a_n|$ converges. It **converges conditionally**
if $\sum a_n$ converges but $\sum |a_n|$ diverges.

**Theorem 3.7.** If $\sum a_n$ converges absolutely, then $\sum a_n$ converges.

**Theorem 3.8 (Riemann Rearrangement Theorem).** If $\sum a_n$ converges conditionally, then for any
$L \in \mathbb{R}$ (or $\pm\infty$), there exists a rearrangement of the terms whose sum is $L$.

### 3.4 Worked Example

**Problem.** Determine whether $\sum_{n=1}^{\infty} \frac{n}{2^n}$ converges.

*Solution.* Apply the ratio test:

$$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{(n+1)/2^{n+1}}{n/2^n} = \lim_{n \to \infty} \frac{n+1}{2n} = \frac{1}{2} < 1$$

By the ratio test, the series converges absolutely. $\blacksquare$

:::caution Common Pitfall
The ratio and root tests are inconclusive when the limit equals 1. In such cases, try the comparison
test, integral test, or other methods. For example, $\sum 1/n$ diverges (harmonic series) and
$\sum 1/n^2$ converges, but both give a ratio test limit of 1.
:::

## 4. Continuity

### 4.1 Limits of Functions

Let $f : D \to \mathbb{R}$ where $D \subseteq \mathbb{R}$. We say $\lim_{x \to a} f(x) = L$ if for
every $\varepsilon > 0$, there exists $\delta > 0$ such that

$$0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon$$

### 4.2 Continuity

**Definition.** $f$ is **continuous at $a$** if $\lim_{x \to a} f(x) = f(a)$. In epsilon-delta form:
for every $\varepsilon > 0$, there exists $\delta > 0$ such that

$$|x - a| < \delta \implies |f(x) - f(a)| < \varepsilon$$

**Theorem 4.1 (Algebra of Continuous Functions).** If $f$ and $g$ are continuous at $a$, then $f+g$,
$f-g$, $fg$, and (where defined) $f/g$ are continuous at $a$.

**Theorem 4.2.** Compositions of continuous functions are continuous: if $f$ is continuous at $a$ and
$g$ is continuous at $f(a)$, then $g \circ f$ is continuous at $a$.

### 4.3 Intermediate Value Theorem

**Theorem 4.3 (IVT).** If $f : [a,b] \to \mathbb{R}$ is continuous and $f(a) < y < f(b)$ (or
$f(b) < y < f(a)$), then there exists $c \in (a,b)$ such that $f(c) = y$.

*Proof.* Let $S = \{x \in [a,b] : f(x) < y\}$. Since $a \in S$, $S$ is non-empty and bounded above by
$b$. Let $c = \sup(S)$. By continuity, $f(c) = y$. $\blacksquare$

### 4.4 Extreme Value Theorem

**Theorem 4.4 (EVT).** If $f : [a,b] \to \mathbb{R}$ is continuous, then $f$ attains its maximum and
minimum on $[a,b]$: there exist $c_1, c_2 \in [a,b]$ such that $f(c_1) \leq f(x) \leq f(c_2)$ for all
$x \in [a,b]$.

### 4.5 Uniform Continuity

**Definition.** $f$ is **uniformly continuous** on $D$ if for every $\varepsilon > 0$, there exists
$\delta > 0$ such that for all $x, y \in D$:

$$|x - y| < \delta \implies |f(x) - f(y)| < \varepsilon$$

The key distinction: for ordinary continuity, $\delta$ may depend on both $\varepsilon$ and the point
$a$; for uniform continuity, $\delta$ depends only on $\varepsilon$.

**Theorem 4.5 (Heine-Cantor).** If $f : [a,b] \to \mathbb{R}$ is continuous on the closed, bounded
interval $[a,b]$, then $f$ is uniformly continuous on $[a,b]$.

### 4.6 Worked Example

**Problem.** Prove that $f(x) = \sqrt{x}$ is uniformly continuous on $[0, \infty)$.

*Solution.* For $x, y \geq 0$: $|\sqrt{x} - \sqrt{y}| = \frac{|x - y|}{\sqrt{x} + \sqrt{y}} \leq |x - y|^{1/2}$.

Given $\varepsilon > 0$, choose $\delta = \varepsilon^2$. Then $|x - y| < \delta$ implies
$|\sqrt{x} - \sqrt{y}| \leq \sqrt{|x-y|} < \sqrt{\delta} = \varepsilon$. Since $\delta$ depends
only on $\varepsilon$, the continuity is uniform. $\blacksquare$

## 5. Differentiability

### 5.1 The Derivative

**Definition.** $f : (a,b) \to \mathbb{R}$ is **differentiable at** $c \in (a,b)$ if the limit

$$f'(c) = \lim_{h \to 0} \frac{f(c+h) - f(c)}{h}$$

exists (as a finite real number).

**Proposition 5.1.** If $f$ is differentiable at $c$, then $f$ is continuous at $c$.

*Proof.* $\lim_{x \to c} (f(x) - f(c)) = \lim_{x \to c} \frac{f(x) - f(c)}{x - c} \cdot (x - c) = f'(c) \cdot 0 = 0$.
$\blacksquare$

The converse is false: $f(x) = |x|$ is continuous at $0$ but not differentiable at $0$.

### 5.2 Differentiation Rules

**Theorem 5.1.** If $f$ and $g$ are differentiable at $c$, then:

1. $(f + g)'(c) = f'(c) + g'(c)$
2. $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$
3. $(f/g)'(c) = \frac{f'(c)g(c) - f(c)g'(c)}{g(c)^2}$ (if $g(c) \neq 0$)
4. $(f \circ g)'(c) = f'(g(c)) \cdot g'(c)$ (Chain Rule)

### 5.3 Mean Value Theorem

**Theorem 5.2 (Rolle's Theorem).** If $f : [a,b] \to \mathbb{R}$ is continuous on $[a,b]$, differentiable
on $(a,b)$, and $f(a) = f(b)$, then there exists $c \in (a,b)$ such that $f'(c) = 0$.

**Theorem 5.3 (Mean Value Theorem).** If $f : [a,b] \to \mathbb{R}$ is continuous on $[a,b]$ and
differentiable on $(a,b)$, then there exists $c \in (a,b)$ such that

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

*Proof.* Define $g(x) = f(x) - \frac{f(b)-f(a)}{b-a}(x - a)$. Then $g(a) = g(b)$ and $g$ satisfies the
hypotheses of Rolle's theorem. So $g'(c) = 0$ for some $c \in (a,b)$, which gives the result. $\blacksquare$

**Corollary 5.4.** If $f'(x) = 0$ for all $x \in (a,b)$, then $f$ is constant on $[a,b]$.

**Corollary 5.5.** If $f'(x) > 0$ for all $x \in (a,b)$, then $f$ is strictly increasing on $[a,b]$.

### 5.4 Taylor's Theorem

**Theorem 5.6 (Taylor's Theorem with Lagrange Remainder).** If $f$ is $(n+1)$-times differentiable on
an open interval containing $a$, then for each $x$ in that interval:

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k + R_n(x)$$

where the remainder is

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}$$

for some $\xi$ between $a$ and $x$.

**Worked Example.** Compute the third-order Taylor polynomial of $f(x) = e^x$ about $a = 0$.

$f(0) = 1$, $f'(0) = 1$, $f''(0) = 1$, $f'''(0) = 1$. So

$$T_3(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$$

The remainder is $R_3(x) = \frac{e^\xi}{24} x^4$ for some $\xi$ between $0$ and $x$.

## 6. Riemann Integration

### 6.1 Definition

Let $f : [a,b] \to \mathbb{R}$ be bounded. A **partition** of $[a,b]$ is a finite set
$P = \{x_0, x_1, \ldots, x_n\}$ with $a = x_0 < x_1 < \cdots < x_n = b$.

The **upper sum** and **lower sum** of $f$ with respect to $P$ are:

$$U(f, P) = \sum_{i=1}^{n} M_i \Delta x_i, \quad L(f, P) = \sum_{i=1}^{n} m_i \Delta x_i$$

where $M_i = \sup\{f(x) : x \in [x_{i-1}, x_i]\}$, $m_i = \inf\{f(x) : x \in [x_{i-1}, x_i]\}$, and
$\Delta x_i = x_i - x_{i-1}$.

**Definition.** $f$ is **Riemann integrable** on $[a,b]$ if the upper and lower integrals are equal:

$$\overline{\int_a^b} f(x)\, dx = \underline{\int_a^b} f(x)\, dx$$

where $\overline{\int_a^b} f = \inf\{U(f,P) : P \mathrm{ is a partition}\}$ and
$\underline{\int_a^b} f = \sup\{L(f,P) : P \mathrm{ is a partition}\}$.

The common value is denoted $\int_a^b f(x)\, dx$.

### 6.2 Integrability Criteria

**Theorem 6.1 (Riemann Integrability Criterion).** A bounded function $f : [a,b] \to \mathbb{R}$ is
Riemann integrable if and only if for every $\varepsilon > 0$, there exists a partition $P$ such that

$$U(f,P) - L(f,P) < \varepsilon$$

**Theorem 6.2.** Every continuous function on $[a,b]$ is Riemann integrable.

**Theorem 6.3.** Every monotone function on $[a,b]$ is Riemann integrable.

**Theorem 6.4.** A bounded function with finitely many discontinuities on $[a,b]$ is Riemann integrable.

### 6.3 Properties of the Integral

**Theorem 6.5 (Linearity).** If $f$ and $g$ are integrable on $[a,b]$ and $\alpha, \beta \in \mathbb{R}$:

$$\int_a^b (\alpha f + \beta g) = \alpha \int_a^b f + \beta \int_a^b g$$

**Theorem 6.6 (Monotonicity).** If $f(x) \leq g(x)$ for all $x \in [a,b]$, then
$\int_a^b f \leq \int_a^b g$.

**Theorem 6.7 (Triangle Inequality).** $\left|\int_a^b f\right| \leq \int_a^b |f|$.

### 6.4 The Fundamental Theorem of Calculus

**Theorem 6.8 (FTC Part 1).** If $f$ is continuous on $[a,b]$, then the function

$$F(x) = \int_a^x f(t)\, dt$$

is differentiable on $(a,b)$ and $F'(x) = f(x)$.

*Proof.* For $h > 0$:

$$\frac{F(x+h) - F(x)}{h} = \frac{1}{h}\int_x^{x+h} f(t)\, dt$$

By the mean value theorem for integrals, there exists $\xi \in [x, x+h]$ such that this equals $f(\xi)$.
As $h \to 0$, $\xi \to x$, and by continuity of $f$, $f(\xi) \to f(x)$. $\blacksquare$

**Theorem 6.9 (FTC Part 2).** If $F$ is differentiable on $[a,b]$ with $F' = f$ (and $f$ is integrable),
then

$$\int_a^b f(x)\, dx = F(b) - F(a)$$

### 6.5 Worked Example

**Problem.** Compute $\int_0^1 x^2\, dx$ from the definition.

*Solution.* Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[x_{i-1}, x_i] = [(i-1)/n, i/n]$, $f(x) = x^2$
has $M_i = (i/n)^2$ and $m_i = ((i-1)/n)^2$.

$$U(f, P_n) = \sum_{i=1}^{n} \frac{i^2}{n^2} \cdot \frac{1}{n} = \frac{1}{n^3} \sum_{i=1}^{n} i^2 = \frac{1}{n^3} \cdot \frac{n(n+1)(2n+1)}{6}$$

As $n \to \infty$: $\lim_{n \to \infty} U(f, P_n) = \lim_{n \to \infty} \frac{(n+1)(2n+1)}{6n^2} = \frac{2}{6} = \frac{1}{3}$.

Similarly, $L(f, P_n) \to 1/3$. So $\int_0^1 x^2\, dx = 1/3$. $\blacksquare$

:::caution Common Pitfall
The Riemann integral is defined for bounded functions on closed, bounded intervals. It does not apply
directly to unbounded functions or infinite intervals. For those, one needs the improper Riemann
integral (or the Lebesgue integral, which is beyond our scope here).
:::
