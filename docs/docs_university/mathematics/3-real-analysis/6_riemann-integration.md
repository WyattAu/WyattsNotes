---
title: Riemann Integration
tags:
  - Mathematics
  - University
---

### 6.1 Definition

Let $f : [a,b] \to \mathbb{R}$ be bounded. A **partition** of $[a,b]$ is a finite set
$P = \{x_0, x_1, \ldots, x_n\}$ with $a = x_0 \lt x_1 \lt \cdots \lt x_n = b$.

The **upper sum** and **lower sum** of $f$ with respect to $P$ are:

$$U(f, P) = \sum_{i=1}^{n} M_i \Delta x_i, \quad L(f, P) = \sum_{i=1}^{n} m_i \Delta x_i$$

Where $M_i = \sup\{f(x) : x \in [x_{i-1}, x_i]\}$, $m_i = \inf\{f(x) : x \in [x_{i-1}, x_i]\}$And
$\Delta x_i = x_i - x_{i-1}$.

The **mesh** of $P$ is $\|P\| = \max_{1 \leq i \leq n} \Delta x_i$.

**Definition.** $f$ is **Riemann integrable** on $[a,b]$ if the upper and lower integrals are equal:

$$\overline{\int_a^b} f(x)\, dx = \underline{\int_a^b} f(x)\, dx$$

Where $\overline{\int_a^b} f = \inf\{U(f,P) : P \mathrm{\ is\ a\ partition}\}$ and
$\underline{\int_a^b} f = \sup\{L(f,P) : P \mathrm{\ is\ a\ partition}\}$.

The common value is denoted $\int_a^b f(x)\, dx$.

### 6.2 Integrability Criteria

**Theorem 6.1 (Riemann Integrability Criterion).** A bounded function $f : [a,b] \to \mathbb{R}$ is
Riemann integrable if and only if for every $\varepsilon > 0$There exists a partition $P$ such that

$$U(f,P) - L(f,P) \lt \varepsilon$$

**Theorem 6.2.** Every continuous function on $[a,b]$ is Riemann integrable.

_Proof._ Let $f$ be continuous on $[a,b]$. By the Heine-Cantor theorem, $f$ is uniformly continuous.
Given $\varepsilon > 0$Choose $\delta > 0$ such that $|x - y| \lt \delta$ implies
$|f(x) - f(y)| \lt \varepsilon/(b-a)$.

Let $P$ be any partition with $\|P\| \lt \delta$. On each subinterval $[x_{i-1}, x_i]$By the Extreme
Value Theorem, $f$ attains its maximum $M_i$ and minimum $m_i$. By uniform continuity:
$M_i - m_i \lt \varepsilon/(b-a)$. Therefore:

$$U(f,P) - L(f,P) = \sum_{i=1}^{n}(M_i - m_i)\Delta x_i \lt \frac{\varepsilon}{b-a} \sum_{i=1}^{n} \Delta x_i = \varepsilon$$

By the Riemann integrability criterion, $f$ is integrable. $\blacksquare$

**Theorem 6.3.** Every monotone function on $[a,b]$ is Riemann integrable.

_Proof._ Assume $f$ is increasing (the decreasing case is analogous). Given $\varepsilon > 0$Let
$P_n$ be the uniform partition with $n$ subintervals of length $(b-a)/n$. On $[x_{i-1}, x_i]$:
$M_i = f(x_i)$ and $m_i = f(x_{i-1})$. Then:

$$U(f, P_n) - L(f, P_n) = \sum_{i=1}^{n} [f(x_i) - f(x_{i-1})] \cdot \frac{b-a}{n} = [f(b) - f(a)] \cdot \frac{b-a}{n}$$

Choose $n$ large enough that $[f(b) - f(a)](b-a)/n \lt \varepsilon$. $\blacksquare$

**Theorem 6.4.** A bounded function with finitely many discontinuities on $[a,b]$ is Riemann
integrable.

_Proof (sketch)._ Let $f$ have discontinuities at $d_1, \ldots, d_m \in [a,b]$. Given
$\varepsilon > 0$ Enclose each $d_j$ in a small interval $I_j$ of total length
$\varepsilon/(2M)$Where $M = \sup_{[a,b]} |f|$. On the remaining set (a finite union of closed
intervals), $f$ is continuous, Hence uniformly continuous. Choose a partition fine enough that the
oscillation of $f$ on each Subinterval outside the $I_j$ is less than $\varepsilon/(2(b-a))$. Then:

$$U(f, P) - L(f, P) \leq \frac{\varepsilon}{2(b-a)} \cdot (b - a) + 2M \cdot \frac{\varepsilon}{2M} = \varepsilon$$

$\blacksquare$

**Proposition 6.4a.** The set of Riemann integrable functions on $[a,b]$ forms a vector space, and
If $f$ and $g$ are integrable, then so are $|f|$, $f^2$And $\max(f, g)$.

**Theorem 6.4b (Lebesgue's Criterion for Riemann Integrability).** A bounded function
$f : [a,b] \to \mathbb{R}$ Is Riemann integrable if and only if the set of its discontinuities has
(Lebesgue) measure zero.

_Remark._ A set has measure zero if it can be covered by countably many intervals of arbitrarily
Small total length. In particular, every countable set has measure zero. This means:

- Every continuous function is integrable (empty set of discontinuities).
- Every function with countably many discontinuities is integrable (Theorem 6.4 is a special case).
- The Dirichlet function $f(x) = 1$ for $x \in \mathbb{Q}$ and $f(x) = 0$ for $x \notin \mathbb{Q}$
  is discontinuous everywhere (set of discontinuities = $[a,b]$Measure $> 0$), hence not integrable.
- Thomae's function $f(x) = 1/q$ if $x = p/q$ in lowest terms, and $f(x) = 0$ if $x$ is irrational,
  is continuous at every irrational and discontinuous at every rational. Since $\mathbb{Q}$ is
  countable (measure zero), Thomae's function is Riemann integrable, with $\int_0^1 f = 0$.

### 6.3 Properties of the Integral

**Theorem 6.5 (Linearity).** If $f$ and $g$ are integrable on $[a,b]$ and
$\alpha, \beta \in \mathbb{R}$:

$$\int_a^b (\alpha f + \beta g) = \alpha \int_a^b f + \beta \int_a^b g$$

**Theorem 6.6 (Monotonicity).** If $f(x) \leq g(x)$ for all $x \in [a,b]$Then
$\int_a^b f \leq \int_a^b g$.

**Theorem 6.7 (Triangle Inequality).** $\left|\int_a^b f\right| \leq \int_a^b |f|$.

### 6.4 The Fundamental Theorem of Calculus

**Theorem 6.8 (FTC Part 1).** If $f$ is continuous on $[a,b]$Then the function

$$F(x) = \int_a^x f(t)\, dt$$

Is differentiable on $(a,b)$ and $F'(x) = f(x)$.

_Proof._ Let $h > 0$ (the case $h \lt 0$ is similar). By the Mean Value Theorem for Integrals (which
follows from the EVT), there exists $\xi \in [x, x+h]$ such that

$$\frac{F(x+h) - F(x)}{h} = \frac{1}{h}\int_x^{x+h} f(t)\, dt = f(\xi)$$

As $h \to 0^+$We have $\xi \to x^+$ (since $\xi \in [x, x+h]$). By continuity of $f$
$f(\xi) \to f(x)$. Hence $F'_+(x) = f(x)$. A similar argument gives $F'_-(x) = f(x)$. $\blacksquare$

**Theorem 6.9 (FTC Part 2).** If $F$ is differentiable on $[a,b]$ with $F' = f$ (and $f$ is
integrable), Then

$$\int_a^b f(x)\, dx = F(b) - F(a)$$

_Proof._ Let $P = \{x_0, \ldots, x_n\}$ be any partition of $[a,b]$. By the Mean Value Theorem, For
each $i$ there exists $\xi_i \in [x_{i-1}, x_i]$ with $F(x_i) - F(x_{i-1}) = f(\xi_i)\Delta x_i$.
Summing:

$$F(b) - F(a) = \sum_{i=1}^{n} [F(x_i) - F(x_{i-1})] = \sum_{i=1}^{n} f(\xi_i) \Delta x_i$$

The right-hand side is a Riemann sum for $\int_a^b f$. As $\|P\| \to 0$This converges to the
Integral. Hence $F(b) - F(a) = \int_a^b f(x)\, dx$. $\blacksquare$

### 6.5 Worked Examples

**Problem.** Compute $\int_0^1 x^2\, dx$ from the definition.

_Solution._ Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[x_{i-1}, x_i] = [(i-1)/n, i/n]$,
$f(x) = x^2$ Has $M_i = (i/n)^2$ and $m_i = ((i-1)/n)^2$.

$$U(f, P_n) = \sum_{i=1}^{n} \frac{i^2}{n^2} \cdot \frac{1}{n} = \frac{1}{n^3} \sum_{i=1}^{n} i^2 = \frac{1}{n^3} \cdot \frac{n(n+1)(2n+1)}{6}$$

As $n \to \infty$:
$\lim_{n \to \infty} U(f, P_n) = \lim_{n \to \infty} \frac{(n+1)(2n+1)}{6n^2} = \frac{2}{6} = \frac{1}{3}$.

Similarly, $L(f, P_n) \to 1/3$. So $\int_0^1 x^2\, dx = 1/3$. $\blacksquare$

<details>
<summary>Worked Example: Compute $\int_0^1 \sqrt{x}\, dx$ from the definition</summary>

_Solution._ Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[(i-1)/n, i/n]$, $f(x) = \sqrt{x}$ has
$M_i = \sqrt{i/n}$ and $m_i = \sqrt{(i-1)/n}$.

$$U(f, P_n) = \sum_{i=1}^{n} \sqrt{\frac{i}{n}} \cdot \frac{1}{n} = \frac{1}{n^{3/2}} \sum_{i=1}^{n} \sqrt{i}$$

Using $\sum_{i=1}^{n} \sqrt{i} = \frac{2}{3} n^{3/2} + O(n^{1/2})$ (obtained from comparing with
$\int_0^n \sqrt{x}\, dx$):

$$\lim_{n \to \infty} U(f, P_n) = \lim_{n \to \infty} \frac{1}{n^{3/2}} \cdot \frac{2}{3}n^{3/2} = \frac{2}{3}$$

Similarly $L(f, P_n) \to 2/3$Confirming $\int_0^1 \sqrt{x}\, dx = 2/3$. $\blacksquare$

</details>

### 6.6 Improper Integrals

**Definition.** An **improper integral** is a Riemann integral where either the interval of
integration Is unbounded or the integrand is unbounded.

**Type I (Infinite Intervals).** If $f$ is Riemann integrable on $[a, b]$ for every $b > a$Define:

$$\int_a^{\infty} f(x)\, dx = \lim_{b \to \infty} \int_a^b f(x)\, dx$$

The integral **converges** if this limit exists as a finite number; otherwise it **diverges**.

**Type II (Unbounded Integrands).** If $f$ is unbounded near $a$ but integrable on $[c, b]$ for
every $c \in (a, b]$:

$$\int_a^b f(x)\, dx = \lim_{c \to a^+} \int_c^b f(x)\, dx$$

**Theorem 6.10 (Comparison Test for Improper Integrals).** If $0 \leq f(x) \leq g(x)$ for
$x \geq a$:

- If $\int_a^{\infty} g$ converges, then $\int_a^{\infty} f$ converges.
- If $\int_a^{\infty} f$ diverges, then $\int_a^{\infty} g$ diverges.

**Theorem 6.11 (Absolute Convergence).** If $\int_a^{\infty} |f(x)|\, dx$ converges, then
$\int_a^{\infty} f(x)\, dx$ converges.

**Theorem 6.12 ($p$-Test for Improper Integrals).**

- **Type I:** $\int_1^{\infty} \frac{1}{x^p}\, dx$ converges if and only if $p > 1$.
- **Type II:** $\int_0^1 \frac{1}{x^p}\, dx$ converges if and only if $p < 1$.

_Proof._ For Type I with $p \neq 1$:

$$\int_1^{\infty} x^{-p}\, dx = \lim_{b \to \infty} \left[\frac{x^{1-p}}{1-p}\right]_1^b = \lim_{b \to \infty} \frac{b^{1-p} - 1}{1-p}$$

This converges when $1 - p < 0$I.e., $p > 1$. For $p = 1$:
$\int_1^{\infty} 1/x\, dx = \lim_{b \to \infty} \ln b = \infty$.

For Type II: $\int_0^1 x^{-p}\, dx = \lim_{c \to 0^+} \frac{1 - c^{1-p}}{1-p}$. This converges when
$1 - p > 0$I.e., $p < 1$. $\blacksquare$

_Remark._ The $p$-test for Type I integrals mirrors the $p$-series test: $\sum 1/n^p$ converges Iff
$p > 1$. This is not a coincidence --- the integral test establishes the connection.

<details>
<summary>Worked Example: Evaluate $\int_0^{\infty} e^{-x}\, dx$</summary>

_Solution._ This is a Type I improper integral:

$$\int_0^{\infty} e^{-x}\, dx = \lim_{b \to \infty} \int_0^b e^{-x}\, dx = \lim_{b \to \infty} \left[-e^{-x}\right]_0^b = \lim_{b \to \infty} (-e^{-b} + 1) = 1$$

So the integral converges to $1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Does $\int_1^{\infty} \frac{\sin x}{x}\, dx$ converge?</summary>

_Solution._ The integral $\int_1^{\infty} \left|\frac{\sin x}{x}\right|\, dx$ diverges (compare with
$\int_1^{\infty} \frac{|\sin x|}{x}\, dx \geq \sum_{k=1}^{\infty} \int_{k\pi}^{(k+1)\pi} \frac{|\sin x|}{x}\, dx \geq
\sum_{k=1}^{\infty} \frac{2}{(k+1)\pi}$,
which diverges by comparison with the harmonic series).

However, $\int_1^{\infty} \frac{\sin x}{x}\, dx$ converges by **Dirichlet's test for integrals**.
Let $F(b) = \int_1^b \sin x\, dx = \cos 1 - \cos b$Which is bounded by $|\cos 1 - \cos b| \leq 2$.
Since $1/x$ decreases to $0$By integration by parts:

$$\int_1^b \frac{\sin x}{x}\, dx = \frac{-\cos x}{x}\bigg|_1^b - \int_1^b \frac{\cos x}{x^2}\, dx$$

As $b \to \infty$The boundary term $\cos b / b \to 0$ and
$\int_1^{\infty} \frac{|\cos x|}{x^2}\, dx \leq
\int_1^{\infty} \frac{1}{x^2}\, dx = 1$, so the
improper integral converges (conditionally). $\blacksquare$

</details>

<details>
<summary>Worked Example: Evaluate $\int_0^1 \frac{1}{\sqrt{x}}\, dx$ (Type II improper integral)</summary>

_Solution._ The integrand $f(x) = 1/\sqrt{x}$ is unbounded as $x \to 0^+$. Compute:

$$\int_0^1 \frac{1}{\sqrt{x}}\, dx = \lim_{c \to 0^+} \int_c^1 x^{-1/2}\, dx = \lim_{c \to 0^+} \left[2\sqrt{x}\right]_c^1 = \lim_{c \to 0^+} (2 - 2\sqrt{c}) = 2$$

The improper integral converges to $2$. Note that $\int_0^1 x^{-p}\, dx$ converges for $p \lt 1$ and
Diverges for $p \geq 1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Determine convergence of $\int_1^{\infty} \frac{1}{x^p}\, dx$ for various $p$</summary>

_Solution._ By the $p$-test (Theorem 6.12): $\int_1^{\infty} x^{-p}\, dx$ converges iff $p > 1$.

Specifically:

- $p = 2$: $\int_1^{\infty} 1/x^2\, dx = \lim_{b \to \infty} [-1/x]_1^b = 0 - (-1) = 1$. Converges.
- $p = 1$: $\int_1^{\infty} 1/x\, dx = \lim_{b \to \infty} \ln b = \infty$. Diverges.
- $p = 1/2$: $\int_1^{\infty} 1/\sqrt{x}\, dx = \lim_{b \to \infty} [2\sqrt{x}]_1^b = \infty$.
  Diverges.

This mirrors the $p$-series test: $\sum 1/n^p$ converges iff $p > 1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Evaluate $\int_0^{\infty} x e^{-x}\, dx$</summary>

_Solution._ This integral requires both a Type I and Type II limit:

$$\int_0^{\infty} x e^{-x}\, dx = \lim_{a \to 0^+} \lim_{b \to \infty} \int_a^b x e^{-x}\, dx$$

Integrate by parts with $u = x$, $dv = e^{-x}\, dx$So $du = dx$, $v = -e^{-x}$:

$$\int x e^{-x}\, dx = -xe^{-x} + \int e^{-x}\, dx = -xe^{-x} - e^{-x} = -(x+1)e^{-x}$$

Evaluating: $\lim_{b \to \infty} [-(b+1)e^{-b}] - \lim_{a \to 0^+} [-(a+1)e^{-a}] = 0 - (-1) = 1$.

So $\int_0^{\infty} x e^{-x}\, dx = 1$. This equals $\Gamma(2) = 1! = 1$. $\blacksquare$

</details>

:::caution Common Pitfall The Riemann integral is defined for bounded functions on closed, bounded
intervals. For unbounded Functions or infinite intervals, one must use the improper Riemann
integral. A common error is Applying the FTC directly to improper integrals without taking the
limit. Also, conditional Convergence of improper integrals behaves differently from absolute
convergence: rearranging the "terms" (subintervals) of a conditionally convergent improper integral
can change its value.
:::

