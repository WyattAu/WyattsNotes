---
title: Sequences and Series of Functions
tags:
  - Mathematics
  - University
---

### 7.1 Pointwise Convergence

Let $(f_n)$ be a sequence of functions defined on a set $E \subseteq \mathbb{R}$.

**Definition.** $(f_n)$ **converges pointwise** to $f$ on $E$ if for every $x \in E$ and every
$\varepsilon > 0$There exists $N \in \mathbb{N}$ (depending on both $x$ and $\varepsilon$) such that
$|f_n(x) - f(x)| \lt \varepsilon$ for all $n \geq N$.

**Example.** Let $f_n(x) = x^n$ on $E = [0, 1]$. For each $x \in [0, 1)$, $f_n(x) = x^n \to 0$And
$f_n(1) = 1$ for all $n$. So $f_n$ converges pointwise to

$$f(x) = \begin{cases} 0 & \mathrm{if\ } 0 \leq x \lt 1 \\ 1 & \mathrm{if\ } x = 1 \end{cases}$$

Note that each $f_n$ is continuous, but the pointwise limit $f$ is not continuous at $x = 1$.

### 7.2 Uniform Convergence

**Definition.** $(f_n)$ **converges uniformly** to $f$ on $E$ if for every $\varepsilon > 0$There
Exists $N \in \mathbb{N}$ (depending only on $\varepsilon$Not on $x$) such that for all $x \in E$:

$$|f_n(x) - f(x)| \lt \varepsilon \quad \mathrm{for\ all\ } n \geq N$$

Equivalently, $\sup_{x \in E} |f_n(x) - f(x)| \to 0$ as $n \to \infty$.

**Proposition 7.1.** Uniform convergence implies pointwise convergence. The converse is false.

**Example (continued).** $f_n(x) = x^n$ on $[0, 1]$ converges pointwise but not uniformly. We have
$\sup_{x \in [0,1]} |f_n(x) - f(x)| = \sup_{x \in [0,1)} x^n = 1$ for all $n$ (since the supremum is
Approached as $x \to 1^-$). This does not tend to $0$.

However, on $[0, r]$ for any $r \lt 1$: $\sup_{x \in [0,r]} |x^n| = r^n \to 0$So the convergence Is
uniform on $[0, r]$.

### 7.3 The Weierstrass M-Test

**Theorem 7.1 (Weierstrass M-Test).** Let $(f_n)$ be a sequence of functions on $E$. If there exists
a Sequence $(M_n)$ of non-negative real numbers such that $|f_n(x)| \leq M_n$ for all $x \in E$ and
all $n$And $\sum_{n=1}^{\infty} M_n \lt \infty$Then $\sum_{n=1}^{\infty} f_n$ converges uniformly on
$E$.

_Proof._ Let $S_n(x) = \sum_{k=1}^{n} f_k(x)$ and $T_n = \sum_{k=1}^{n} M_k$. Since $\sum M_k$
converges, $(T_n)$ is a Cauchy sequence. Given $\varepsilon > 0$There exists $N$ such that for
$m > n \geq N$:

$$T_m - T_n = \sum_{k=n+1}^{m} M_k \lt \varepsilon$$

Then for all $x \in E$ and $m > n \geq N$:

$$|S_m(x) - S_n(x)| = \left|\sum_{k=n+1}^{m} f_k(x)\right| \leq \sum_{k=n+1}^{m} |f_k(x)| \leq \sum_{k=n+1}^{m} M_k \lt \varepsilon$$

So the partial sums $(S_n)$ satisfy the uniform Cauchy criterion on $E$Hence converge uniformly.
$\blacksquare$

### 7.4 Uniform Convergence and Continuity

**Theorem 7.2.** If $(f_n)$ is a sequence of continuous functions on $E$ converging uniformly to $f$
On $E$Then $f$ is continuous on $E$.

_Proof._ Let $c \in E$ and $\varepsilon > 0$. Since $f_n \to f$ uniformly, choose $N$ such that
$|f_N(x) - f(x)| \lt \varepsilon/3$ for all $x \in E$. Since $f_N$ is continuous at $c$Choose
$\delta > 0$ such that $|x - c| \lt \delta$ implies $|f_N(x) - f_N(c)| \lt \varepsilon/3$. Then:

$$|f(x) - f(c)| \leq |f(x) - f_N(x)| + |f_N(x) - f_N(c)| + |f_N(c) - f(c)| \lt \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon$$

$\blacksquare$

### 7.5 Uniform Convergence and Integration

**Theorem 7.3.** If $(f_n)$ is a sequence of Riemann integrable functions on $[a, b]$ converging
Uniformly to $f$ on $[a, b]$Then $f$ is Riemann integrable and

$$\lim_{n \to \infty} \int_a^b f_n(x)\, dx = \int_a^b f(x)\, dx$$

_Proof._ Since $(f_n)$ converges uniformly, $f$ is the uniform limit of integrable functions. Given
$\varepsilon > 0$Choose $N$ with $\sup |f_N(x) - f(x)| \lt \varepsilon/(2(b-a))$ for all
$x \in [a, b]$. Then $f_N - \varepsilon/(2(b-a)) \leq f(x) \leq f_N(x) + \varepsilon/(2(b-a))$ for
all $x$And by Integrability of $f_N$:

$$\int_a^b f_N - \frac{\varepsilon}{2} \leq \underline{\int_a^b} f \leq \overline{\int_a^b} f \leq \int_a^b f_N + \frac{\varepsilon}{2}$$

So $\overline{\int} f - \underline{\int} f \leq \varepsilon$Proving $f$ is integrable. For the
limit:

$$\left|\int_a^b f_n - \int_a^b f\right| \leq \int_a^b |f_n - f| \leq (b-a) \cdot \sup_{[a,b]} |f_n - f| \to 0$$

$\blacksquare$

### 7.6 Uniform Convergence and Differentiation

Uniform convergence of functions does **not** guarantee convergence of derivatives. A stronger
Hypothesis is needed.

**Theorem 7.4.** Suppose $(f_n)$ is a sequence of differentiable functions on $[a, b]$ such that:

1. $(f_n(c))$ converges for some $c \in [a, b]$
2. $(f_n')$ converges uniformly on $[a, b]$

Then $(f_n)$ converges uniformly to a differentiable function $f$ on $[a, b]$And
$f'(x) = \lim_{n \to \infty} f_n'(x)$.

_Proof._ Let $g = \lim f_n'$ (uniform limit). Define
$f(x) = \lim_{n \to \infty} \left[f_n(c) + \int_c^x f_n'(t)\, dt\right]$. By Theorem 7.3,
$\int_c^x f_n'(t)\, dt \to \int_c^x g(t)\, dt$So $f(x) = f(c) + \int_c^x g(t)\, dt$. By FTC Part 1,
$f$ is differentiable and $f'(x) = g(x)$. Uniform convergence of $f_n$ to $f$ follows From the
estimate $|f_n(x) - f(x)| \leq |f_n(c) - f(c)| + \int_a^b |f_n'(t) - g(t)|\, dt$. $\blacksquare$

### 7.7 Power Series

A **power series** centered at $a$ is a series of the form $\sum_{n=0}^{\infty} c_n (x - a)^n$.

**Theorem 7.5 (Radius of Convergence).** Every power series $\sum c_n (x - a)^n$ has a **radius of
Convergence** $R \in [0, \infty]$ such that:

- The series converges absolutely for $|x - a| \lt R$
- The series diverges for $|x - a| > R$
- The behavior at $|x - a| = R$ must be checked separately

The radius is given by $1/R = \limsup_{n \to \infty} \sqrt[n]{|c_n|}$ (Cauchy-Hadamard formula), or
When the limit exists, $R = \lim_{n \to \infty} |c_n/c_{n+1}|$.

_Proof._ Apply the root test to $\sum |c_n (x-a)^n|$: $\limsup \sqrt[n]{|c_n|} |x-a| = |x-a|/R$
(where $1/R = \limsup \sqrt[n]{|c_n|}$). The root test gives convergence when $|x-a|/R \lt 1$ And
divergence when $|x-a|/R > 1$. $\blacksquare$

**Theorem 7.6.** A power series converges uniformly on every compact subset of its open disk of
Convergence.

**Theorem 7.6a (Differentiation and Integration of Power Series).** If
$f(x) = \sum_{n=0}^{\infty} c_n (x-a)^n$ Has radius of convergence $R > 0$Then:

1. $f$ is differentiable on $(a - R, a + R)$ and $f'(x) = \sum_{n=1}^{\infty} n c_n (x - a)^{n-1}$
   (same $R$).
2. $f$ is infinitely differentiable on $(a - R, a + R)$And
   $f^{(k)}(x) = \sum_{n=k}^{\infty} \frac{n!}{(n-k)!} c_n (x - a)^{n-k}$.
3. $\int_a^x f(t)\, dt = \sum_{n=0}^{\infty} \frac{c_n}{n+1}(x - a)^{n+1}$ for $|x - a| \lt R$.
4. $c_n = f^{(n)}(a)/n!$ (uniqueness of power series coefficients).

_Proof._ The differentiated series $\sum n c_n (x-a)^{n-1}$ has the same radius of convergence as
The original (by the Cauchy-Hadamard formula, since $\sqrt[n]{n} \to 1$). By Theorem 7.4, the
Derivative of the sum equals the sum of the derivatives. Parts (2), (3), and (4) follow by Induction
and the FTC. $\blacksquare$

**Theorem 7.6b (Abel's Theorem).** If $\sum_{n=0}^{\infty} c_n$ converges to $L$Then

$$\lim_{x \to 1^-} \sum_{n=0}^{\infty} c_n x^n = L$$

That is, the power series is continuous from the left at the endpoint $x = 1$.

_Proof (sketch)._ Let $s_n = \sum_{k=0}^{n} c_k$ and $s_n \to L$. Write the partial sum
$\sum_{k=0}^{n} c_k x^k = \sum_{k=0}^{n}(s_k - s_{k-1})x^k$ (with $s_{-1} = 0$) and use summation by
Parts to express this as $s_n x^n + \sum_{k=0}^{n-1} s_k(x^k - x^{k+1})$. Letting $n \to \infty$ and
using That $s_n \to L$ and $x^n \to 0$ for $|x| \lt 1$One shows the expression tends to $L$ as
$x \to 1^-$. $\blacksquare$

_Example._ Since $\sum_{k=1}^{\infty} (-1)^{k+1}/k = \ln 2$Abel's theorem gives
$\lim_{x \to 1^-} \sum_{k=1}^{\infty} (-1)^{k+1} x^k/k = \ln 2$I.e., $\ln 2$ is the left-hand limit
Of $-\ln(1 - x)$ at $x = 1$.

### 7.8 Taylor Series Convergence

The **Taylor series** of $f$ at $a$ is $\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$.

**Definition.** A function $f$ is **analytic** at $a$ if its Taylor series at $a$ converges to
$f(x)$ In some neighborhood of $a$.

Not every $C^{\infty}$ function is analytic. The standard counterexample is:

$$f(x) = \begin{cases} e^{-1/x^2} & x \neq 0 \\ 0 & x = 0 \end{cases}$$

$f^{(n)}(0) = 0$ for all $n$So the Taylor series at $0$ is identically zero, which Converges only to
$0$Not to $f(x)$ for $x \neq 0$.

### 7.9 Worked Examples

<details>
<summary>Worked Example: Show $\sum_{n=1}^{\infty} \frac{x^n}{n^2}$ converges uniformly on $[-1, 1]$</summary>

_Solution._ For $x \in [-1, 1]$: $\left|\frac{x^n}{n^2}\right| \leq \frac{1}{n^2}$. Since
$\sum_{n=1}^{\infty} \frac{1}{n^2}$ converges (it is a $p$-series with $p = 2 > 1$), the Weierstrass
M-Test with $M_n = 1/n^2$ implies the series converges uniformly on $[-1, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the radius of convergence of $\sum_{n=0}^{\infty} \frac{x^n}{n!}$</summary>

_Solution._ Apply the ratio test to the coefficients:
$\lim_{n \to \infty} \left|\frac{c_{n+1}}{c_n}\right|
= \lim_{n \to \infty} \frac{n!}{(n+1)!} = \lim_{n \to \infty} \frac{1}{n+1} = 0$.

So $R = \infty$ and the series converges for all $x \in \mathbb{R}$. This is the power series for
$e^x$. By Theorem 7.4, the derivative of the sum equals
$\sum_{n=1}^{\infty} \frac{n x^{n-1}}{n!}
= \sum_{n=1}^{\infty} \frac{x^{n-1}}{(n-1)!} = \sum_{k=0}^{\infty} \frac{x^k}{k!} = e^x$,
confirming That $e^x$ is its own derivative. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the radius of convergence of $\sum_{n=1}^{\infty} n! \, x^n$</summary>

_Solution._ Apply the ratio test to the coefficients:

$$\lim_{n \to \infty} \left|\frac{c_{n+1}}{c_n}\right| = \lim_{n \to \infty} \frac{(n+1)!}{n!} = \lim_{n \to \infty} (n+1) = \infty$$

So $R = 0$Meaning the series converges only at $x = 0$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Show $f_n(x) = \frac{x}{1 + nx}$ converges uniformly on $[1, \infty)$</summary>

_Solution._ **Pointwise limit:** For $x \geq 1$:
$\lim_{n \to \infty} \frac{x}{1 + nx} = \lim_{n \to \infty} \frac{1}{1/x + n} = 0$.

**Uniform convergence:**
$\sup_{x \in [1, \infty)} \left|\frac{x}{1 + nx} - 0\right| = \sup_{x \geq 1} \frac{x}{1 + nx}$. To
find the maximum, differentiate with respect to $x$:
$\frac{d}{dx}\left(\frac{x}{1+nx}\right) = \frac{1}{(1+nx)^2} > 0$. So the function is increasing in
$x$ on $[1, \infty)$And:

$$\sup_{x \geq 1} \frac{x}{1 + nx} = \lim_{x \to \infty} \frac{x}{1 + nx} = \frac{1}{n}$$

Since $\sup |f_n| = 1/n \to 0$The convergence is uniform on $[1, \infty)$. $\blacksquare$

</details>

:::caution Common Pitfall Pointwise convergence does not preserve continuity, differentiability, or
integrability. Uniform Convergence preserves continuity and allows interchange of limit and
integral, but not limit and Derivative. For derivatives, uniform convergence of the _sequence of
derivatives_ (not the original Sequence) is required, as stated in Theorem 7.4. Also, the
Weierstrass M-Test applies only to series Of functions, not sequences; for sequences, one must
verify the uniform Cauchy criterion directly.



