---
title: Argument Principle and Rouché's Theorem
tags:
  - Mathematics
  - University
---

### 12.1 The Argument Principle

**Theorem 12.1 (Argument Principle).** If $f$ is meromorphic inside and on a simple closed contour
$\gamma$ with no zeros or poles on $\gamma$Then

$$\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\, dz = N - P$$

Where $N$ is the number of zeros and $P$ is the number of poles of $f$ inside $\gamma$ (counting
Multiplicities).

### 12.2 Rouché's Theorem

**Theorem 12.2 (Rouché's Theorem).** If $f$ and $g$ are analytic inside and on a simple closed
Contour $\gamma$And $|f(z)| \gt |g(z)|$ on $\gamma$Then $f$ and $f + g$ have the same number of
Zeros inside $\gamma$.

_Proof._ On $\gamma$: $|g(z)/f(z)| \lt 1$. The function $h(z) = 1 + g(z)/f(z)$ satisfies
$|h(z) - 1| \lt 1$ on $\gamma$So $h(\gamma)$ does not wind around $0$. By the argument principle
Applied to $h$: $0 = N_h - P_h$Meaning $h$ has the same number of zeros and poles inside $\gamma$.
But $h = (f + g)/f$So zeros of $h$ are zeros of $f + g$ and poles of $h$ are zeros of $f$. Therefore
$f$ and $f + g$ have the same number of zeros. $\blacksquare$

### 12.3 Worked Example

**Problem.** Show that $z^4 + 6z + 3$ has exactly one root in $|z| \lt 1$.

_Solution._ On $|z| = 1$: $|6z| = 6 \gt |z^4 + 3| \leq |z|^4 + 3 = 4$. By Rouché's theorem with
$f(z) = 6z$ and $g(z) = z^4 + 3$: $f + g = z^4 + 6z + 3$ has the same number of zeros in $|z| \lt 1$
as $f(z) = 6z$Which has exactly one zero (at $z = 0$). $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Show that all roots of $z^4 + z + 1 = 0$ satisfy $|z| \lt 2$.

On $|z| = 2$: $|z^4| = 16 \gt |z + 1| \leq 3$. By Rouché with $f(z) = z^4$ and $g(z) = z + 1$:
$z^4 + z + 1$ has $4$ zeros in $|z| \lt 2$ (same as $z^4$).

**Problem.** Show that $z^5 + 3z^2 + 1$ has exactly two roots in $|z| \lt 1$.

On $|z| = 1$: $|3z^2 + 1| \geq |3z^2| - |1| = 2 \gt |z^5| = 1$. By Rouché with $f(z) = 3z^2 + 1$ and
$g(z) = z^5$: $z^5 + 3z^2 + 1$ has the same number of zeros as $3z^2 + 1$ in $|z| \lt 1$.
$3z^2 + 1 = 0 \Rightarrow z = \pm i/\sqrt{3}$Both in $|z| \lt 1$. So $2$ zeros.

</details>

