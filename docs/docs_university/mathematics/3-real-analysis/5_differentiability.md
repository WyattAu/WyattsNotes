---
title: Differentiability
tags:
  - Mathematics
  - University
---

### 5.1 The Derivative

**Definition.** $f : (a,b) \to \mathbb{R}$ is **differentiable at** $c \in (a,b)$ if the limit

$$f'(c) = \lim_{h \to 0} \frac{f(c+h) - f(c)}{h}$$

Exists (as a finite real number).

**Proposition 5.1.** If $f$ is differentiable at $c$Then $f$ is continuous at $c$.

_Proof._
$\lim_{x \to c} (f(x) - f(c)) = \lim_{x \to c} \frac{f(x) - f(c)}{x - c} \cdot (x - c) = f'(c) \cdot 0 = 0$.
$\blacksquare$

The converse is false: $f(x) = |x|$ is continuous at $0$ but not differentiable at $0$.

### 5.2 Differentiation Rules

**Theorem 5.1.** If $f$ and $g$ are differentiable at $c$Then:

1. $(f + g)'(c) = f'(c) + g'(c)$
2. $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$
3. $(f/g)'(c) = \frac{f'(c)g(c) - f(c)g'(c)}{g(c)^2}$ (if $g(c) \neq 0$)
4. $(f \circ g)'(c) = f'(g(c)) \cdot g'(c)$ (Chain Rule)

### 5.3 Mean Value Theorem

**Theorem 5.2 (Rolle's Theorem).** If $f : [a,b] \to \mathbb{R}$ is continuous on
$[a,b]$Differentiable On $(a,b)$And $f(a) = f(b)$Then there exists $c \in (a,b)$ such that
$f'(c) = 0$.

_Proof._ By the Extreme Value Theorem, $f$ attains its maximum $M$ and minimum $m$ on $[a,b]$. If
$M = m$Then $f$ is constant and $f'(c) = 0$ for all $c \in (a,b)$. Otherwise, at least one Of $M$ or
$m$ is attained at some $c \in (a,b)$ (since $f(a) = f(b)$). By Fermat's theorem, $f'(c) = 0$.
$\blacksquare$

**Theorem 5.3 (Mean Value Theorem).** If $f : [a,b] \to \mathbb{R}$ is continuous on $[a,b]$ and
Differentiable on $(a,b)$Then there exists $c \in (a,b)$ such that

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

_Proof._ Define $g(x) = f(x) - \frac{f(b)-f(a)}{b-a}(x - a)$. Then $g(a) = g(b)$ and $g$ satisfies
the Hypotheses of Rolle's theorem. So $g'(c) = 0$ for some $c \in (a,b)$Which gives the result.
$\blacksquare$

**Corollary 5.4.** If $f'(x) = 0$ for all $x \in (a,b)$Then $f$ is constant on $[a,b]$.

**Corollary 5.5.** If $f'(x) > 0$ for all $x \in (a,b)$Then $f$ is strictly increasing on $[a,b]$.

**Theorem 5.3a (Cauchy's Mean Value Theorem).** If $f, g : [a,b] \to \mathbb{R}$ are continuous on
$[a,b]$ and differentiable on $(a,b)$Then there exists $c \in (a,b)$ such that

$$(f(b) - f(a))g'(c) = (g(b) - g(a))f'(c)$$

_Proof._ Define $h(x) = (f(b) - f(a))g(x) - (g(b) - g(a))f(x)$. Then $h(a) = h(b)$So by Rolle's
Theorem, $h'(c) = 0$ for some $c \in (a,b)$Which gives the result. $\blacksquare$

_Remark._ When $g(x) = x$Cauchy's MVT reduces to the standard MVT. Cauchy’s MVT is the key
Ingredient in the .../1-number-and-algebra/3_proof-and-logic of L'Hôpital’s rule.

**Corollary 5.6.** If $f$ is differentiable on $(a,b)$ and $|f'(x)| \leq M$ for all $x \in (a,b)$
Then $f$ is Lipschitz continuous with constant $M$: $|f(x) - f(y)| \leq M|x - y|$ for all
$x, y \in (a,b)$.

_Proof._ Apply the MVT to $f$ on the interval between $x$ and $y$. $\blacksquare$

### 5.4 Taylor's Theorem

**Theorem 5.6 (Taylor's Theorem with Lagrange Remainder).** If $f$ is $(n+1)$-times differentiable
on An open interval containing $a$Then for each $x$ in that interval:

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k + R_n(x)$$

Where the remainder is

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}$$

For some $\xi$ between $a$ and $x$.

_Proof._ Fix $x \neq a$ and define

$$g(t) = f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(t)}{k!}(x - t)^k$$

Then $g(a) = R_n(x)$ and $g(x) = 0$. By the generalized Rolle's theorem (or direct computation Using
the Cauchy mean value theorem), there exists $\xi$ between $a$ and $x$ with $g'( \xi ) = 0$.
Computing:

$$g'(t) = -\frac{f^{(n+1)}(t)}{n!}(x - t)^n$$

Setting $g'(\xi) = 0$ yields the result after comparing $g(a) = R_n(x)$ with the integral form. A
Cleaner approach uses the standard MVT applied to $g$ on $[a, x]$. $\blacksquare$

### 5.5 L'Hôpital’s Rule

**Theorem 5.7 (L'Hôpital’s Rule, $\frac{0}{0}$ case).** Suppose $f$ and $g$ are differentiable on An
open interval containing $c$ (except possibly at $c$ itself), $g'(x) \neq 0$ near $c$And
$\lim_{x \to c} f(x) = \lim_{x \to c} g(x) = 0$. If $\lim_{x \to c} f'(x)/g'(x) = L$ exists (as a
finite Number or $\pm\infty$), then $\lim_{x \to c} f(x)/g(x) = L$.

_Proof._ Extend $f$ and $g$ continuously to $c$ by setting $f(c) = g(c) = 0$. For $x \neq c$By
Cauchy's Mean Value Theorem, there exists $\xi$ strictly between $c$ and $x$ such that

$$\frac{f(x) - f(c)}{g(x) - g(c)} = \frac{f'(\xi)}{g'(\xi)}$$

I.e., $\frac{f(x)}{g(x)} = \frac{f'(\xi)}{g'(\xi)}$. As $x \to c$We have $\xi \to c$ (since $\xi$ is
trapped between $c$ and $x$). Therefore
$\lim_{x \to c} f(x)/g(x) = \lim_{\xi \to c} f'(\xi)/g'(\xi) = L$. $\blacksquare$

**Theorem 5.7b (L'Hôpital’s Rule, $\frac{\infty}{\infty}$ case).** Suppose $f$ and $g$ are
Differentiable on $(a, b)$ (except possibly at $c$), $g'(x) \neq 0$ near $c$And
$\lim_{x \to c} |f(x)| = \lim_{x \to c} |g(x)| = \infty$. If $\lim_{x \to c} f'(x)/g'(x) = L$
exists, Then $\lim_{x \to c} f(x)/g(x) = L$.

_Proof (sketch)._ Fix $\varepsilon > 0$. For $x, y$ near $c$ with $x \neq y$By Cauchy's MVT:

$$\frac{f(x) - f(y)}{g(x) - g(y)} = \frac{f'(\xi)}{g'(\xi)}$$

For some $\xi$ between $x$ and $y$. Since $f'(\xi)/g'(\xi) \approx L$ for $\xi$ near $c$We have:

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(y)}{g(x) - g(y)} \cdot \frac{1 - f(y)/f(x)}{1 - g(y)/g(x)}$$

Since $f(x), g(x) \to \infty$By fixing $y$ and letting $x \to c$The fractions $f(y)/f(x)$ and
$g(y)/g(x)$ tend to $0$So the second factor tends to $1$. The first factor tends to $L$ by Cauchy's
MVT. Hence $f(x)/g(x) \to L$. $\blacksquare$

<details>
<summary>Worked Example: Compute $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$</summary>

_Solution._ Both numerator and denominator approach $0$ as $x \to 0$. Applying L'Hôpital’s rule:

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x}$$

This is still $\frac{0}{0}$So apply L'Hôpital again:

$$= \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

$\blacksquare$

</details>

### 5.6 Darboux's Theorem

**Theorem 5.8 (Darboux's Theorem).** If $f$ is differentiable on $[a, b]$Then $f'$ has the
Intermediate value property: for any $y$ between $f'(a)$ and $f'(b)$There exists $c \in (a, b)$ With
$f'(c) = y$.

_Remark._ This means derivatives satisfy the intermediate value property even though they need not
Be continuous. For example, $f(x) = x^2 \sin(1/x)$ (with $f(0) = 0$) is differentiable everywhere,
But $f'$ is not continuous at $0$.

_Proof._ Assume without loss of generality that $f'(a) \lt y \lt f'(b)$. Define $g(x) = f(x) - yx$.
Then $g$ is differentiable on $[a, b]$ with

$$g'(a) = f'(a) - y \lt 0 \quad \mathrm{and} \quad g'(b) = f'(b) - y > 0$$

Since $g'(a) \lt 0$There exists $x_1 > a$ with $g(x_1) \lt g(a)$ (otherwise $g(x) \geq g(a)$ For $x$
near $a$Contradicting $g'(a) \lt 0$). Similarly, since $g'(b) > 0$There exists $x_2 \lt b$ with
$g(x_2) \lt g(b)$.

Therefore $g$ attains its minimum at some $c \in (a, b)$. By Fermat's theorem on interior extrema,
$g'(c) = 0$So $f'(c) = y$. $\blacksquare$

<details>
<summary>Worked Example: Apply Darboux's theorem to $f(x) = x^2 \sin(1/x)$ ($f(0) = 0$)</summary>

_Solution._ For $x \neq 0$: $f'(x) = 2x \sin(1/x) - \cos(1/x)$. At $x = 0$:
$f'(0) = \lim_{h \to 0} \frac{h^2 \sin(1/h)}{h} = \lim_{h \to 0} h \sin(1/h) = 0$.

So $f'(0) = 0$. For any $\delta > 0$The term $-\cos(1/x)$ oscillates between $-1$ and $1$ on
$(0, \delta)$So $f'$ takes all values in $[-1, 1]$ infinitely often on $(0, \delta)$.

But Darboux's theorem says $f'$ has the intermediate value property. Indeed, $f'$ is not continuous
At $0$ (it oscillates wildly), yet it still satisfies the IVP. This shows that derivatives can be
Highly discontinuous while retaining the intermediate value property. $\blacksquare$

</details>

### 5.7 Worked Examples

**Worked Example.** Compute the third-order Taylor polynomial of $f(x) = e^x$ about $a = 0$.

$f(0) = 1$, $f'(0) = 1$, $f''(0) = 1$, $f'''(0) = 1$. So

$$T_3(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$$

The remainder is $R_3(x) = \frac{e^\xi}{24} x^4$ for some $\xi$ between $0$ and $x$.

<details>
<summary>Worked Example: Approximate $\sin(0.1)$ with error less than $10^{-10}$</summary>

_Solution._ For $f(x) = \sin x$ about $a = 0$: $f^{(k)}(0) \in \{0, 1, -1\}$ and the Taylor
Polynomial of degree $n$ has the form $T_n(x) = x - x^3/3! + x^5/5! - \cdots$ (odd terms only).

The Lagrange remainder is
$|R_n(x)| = \frac{|f^{(n+1)}(\xi)|}{(n+1)!} |x|^{n+1} \leq \frac{|x|^{n+1}}{(n+1)!}$ (since
$|f^{(k)}| \leq 1$ for all $k$).

We need $\frac{(0.1)^{n+1}}{(n+1)!} \lt 10^{-10}$. Testing: for $n = 5$
$\frac{(0.1)^6}{6!} = \frac{10^{-6}}{720} \approx 1.39 \times 10^{-9} \gt 10^{-10}$. For $n = 7$:
$\frac{(0.1)^8}{8!} = \frac{10^{-8}}{40320} \approx 2.48 \times 10^{-13} \lt 10^{-10}$.

So $T_7(0.1) = 0.1 - \frac{(0.1)^3}{6} + \frac{(0.1)^5}{120} - \frac{(0.1)^7}{5040}$
$= 0.1 - 0.00016667 + 0.00000083 - 0.00000000 \approx 0.09983342$.

The error is at most $2.48 \times 10^{-13} \lt 10^{-10}$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Find the Maclaurin series for $\ln(1 + x)$ and its radius of convergence</summary>

_Solution._ For $f(x) = \ln(1+x)$: $f(0) = 0$, $f'(x) = 1/(1+x)$, $f''(x) = -1/(1+x)^2$
$f^{(k)}(x) = (-1)^{k-1}(k-1)!/(1+x)^k$ for $k \geq 1$. So $f^{(k)}(0) = (-1)^{k-1}(k-1)!$.

$$\ln(1+x) = \sum_{k=1}^{\infty} \frac{(-1)^{k-1}(k-1)!}{k!} x^k = \sum_{k=1}^{\infty} \frac{(-1)^{k-1}}{k} x^k$$

By the ratio test:
$\lim_{k \to \infty} |a_{k+1}/a_k| = \lim_{k \to \infty} \frac{k}{k+1} |x| = |x|$. The series
converges for $|x| \lt 1$ and diverges for $|x| > 1$. At $x = 1$ we get the alternating Harmonic
series (converges to $\ln 2$). At $x = -1$ we get the negative harmonic series (diverges).

The radius of convergence is $R = 1$ and the interval of convergence is $(-1, 1]$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Compute the Taylor expansion of $\cos x$ about $a = \pi/3$ with remainder bound</summary>

_Solution._ Compute derivatives: $f(x) = \cos x$, $f'(x) = -\sin x$, $f''(x) = -\cos x$,
$f'''(x) = \sin x$ $f^{(4)}(x) = \cos x$. Evaluated at $a = \pi/3$:

$f(\pi/3) = 1/2$, $f'(\pi/3) = -\sqrt{3}/2$, $f''(\pi/3) = -1/2$, $f'''(\pi/3) = \sqrt{3}/2$.

The third-degree Taylor polynomial is:

$$T_3(x) = \frac{1}{2} - \frac{\sqrt{3}}{2}\left(x - \frac{\pi}{3}\right) - \frac{1}{4}\left(x - \frac{\pi}{3}\right)^2 + \frac{\sqrt{3}}{12}\left(x - \frac{\pi}{3}\right)^3$$

The remainder satisfies $|R_3(x)| \leq \frac{|x - \pi/3|^4}{24}$ (since
$|f^{(4)}(\xi)| = |\cos \xi| \leq 1$).

For example, at $x = 1$:
$|R_3(1)| \leq \frac{|1 - \pi/3|^4}{24} \approx \frac{0.0472^4}{24} \approx 2.1 \times 10^{-7}$.
$\blacksquare$

</details>

:::caution Common Pitfall L'Hôpital’s rule only applies to indeterminate forms $\frac{0}{0}$ and
$\frac{\infty}{\infty}$. Applying it to forms like $\frac{1}{0}$ or $\frac{\infty}{1}$ will give
incorrect results. Always Verify the indeterminate form before applying the rule. Also, L'Hôpital's
rule requires that the Limit of the quotient of derivatives exists; if it does not exist
(oscillates), the original limit May still exist.



