---
title: Fourier Series
tags:
  - Mathematics
  - University
---

### 7.1 Definition

A **Fourier series** of a $2\pi$-periodic function $f$ is

$$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left(a_n \cos(nx) + b_n \sin(nx)\right)$$

Where

$$a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos(nx)\, dx, \quad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\, dx$$

### 7.2 Derivation of Fourier Coefficients

The Fourier coefficients are derived using the orthogonality relations on $[-\pi, \pi]$:

$$\int_{-\pi}^{\pi} \cos(mx)\cos(nx)\, dx = \begin{cases} \pi & m = n \neq 0 \\ 2\pi & m = n = 0 \\ 0 & m \neq n \end{cases}$$

$$\int_{-\pi}^{\pi} \sin(mx)\sin(nx)\, dx = \begin{cases} \pi & m = n \neq 0 \\ 0 & m \neq n \end{cases}$$

$$\int_{-\pi}^{\pi} \cos(mx)\sin(nx)\, dx = 0 \quad \mathrm{for}\; all\; m, n$$

To find $a_n$Multiply both sides of the Fourier expansion by $\cos(nx)$ and integrate over
$[-\pi, \pi]$. By orthogonality, all terms vanish except the $\cos(nx)$ term, yielding
$a_n \pi = \int_{-\pi}^{\pi} f(x)\cos(nx)\, dx$. Similarly for $b_n$.

### 7.3 Convergence

**Theorem 7.1 (Dirichlet's Theorem).** If $f$ is $2\pi$-periodic and piecewise smooth, its Fourier
Series converges to:

- $f(x)$ at points where $f$ is continuous.
- $\frac{f(x^+) + f(x^-)}{2}$ at jump discontinuities.

### 7.4 Parseval's Identity

$$\frac{1}{\pi}\int_{-\pi}^{\pi} |f(x)|^2\, dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)$$

_Intuition._ Parseval's identity is the infinite-dimensional analogue of the Pythagorean theorem:
The "energy" of $f$ (its $L^2$ norm squared) equals the sum of the energies of its Fourier
Components.

### 7.5 Sine and Cosine Series

For functions defined on $[0, L]$:

- **Cosine series** (even extension): $a_n = \frac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}\, dx$
  $b_n = 0$.
- **Sine series** (odd extension): $a_n = 0$
  $b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$.

### 7.6 Worked Example: Fourier Sine Series

**Problem.** Find the Fourier series of $f(x) = x$ on $(-\pi, \pi)$Extended $2\pi$-periodically.

_Solution._ $f$ is odd, so $a_n = 0$ for all $n$.

$b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} x\sin(nx)\, dx = \frac{2}{\pi}\int_0^{\pi} x\sin(nx)\, dx$.

Integration by parts: $u = x$, $dv = \sin(nx)\, dx$:

$b_n = \frac{2}{\pi}\left[-\frac{x\cos(nx)}{n}\Big|_0^{\pi} + \int_0^{\pi} \frac{\cos(nx)}{n}\, dx\right] = \frac{2}{\pi}\left[-\frac{\pi\cos(n\pi)}{n} + 0\right] = \frac{-2\cos(n\pi)}{n} = \frac{2(-1)^{n+1}}{n}$.

$x \sim 2\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}\sin(nx)$. $\blacksquare$

### 7.7 Worked Example: Fourier Cosine Series

**Problem.** Find the Fourier cosine series of $f(x) = x^2$ on $[0, \pi]$.

<details>
<summary>Solution</summary>

_Solution._ Extend $f$ as an even function on $[-\pi, \pi]$. Then $b_n = 0$ for all $n$.

$a_0 = \frac{2}{\pi}\int_0^{\pi} x^2\, dx = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3}$.

For $n \geq 1$: $a_n = \frac{2}{\pi}\int_0^{\pi} x^2\cos(nx)\, dx$.

Integrating by parts twice:

$u = x^2$, $dv = \cos(nx)\, dx$: $du = 2x\, dx$, $v = \sin(nx)/n$.

$a_n = \frac{2}{\pi}\left[\frac{x^2\sin(nx)}{n}\Big|_0^{\pi} - \int_0^{\pi} \frac{2x\sin(nx)}{n}\, dx\right] = -\frac{4}{n\pi}\int_0^{\pi} x\sin(nx)\, dx$

$= -\frac{4}{n\pi}\left[-\frac{x\cos(nx)}{n}\Big|_0^{\pi} + \int_0^{\pi} \frac{\cos(nx)}{n}\, dx\right]$

$= -\frac{4}{n\pi}\left[-\frac{\pi\cos(n\pi)}{n} + 0\right] = \frac{4\cos(n\pi)}{n^2} = \frac{4(-1)^n}{n^2}$.

$x^2 \sim \frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}\cos(nx)$.

Setting $x = 0$: $0 = \frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$Giving the famous
identity $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12}$. $\blacksquare$

</details>

### 7.8 Complex Fourier Series

Using Euler's formula, the Fourier series can be written in complex form:

$$f(x) \sim \sum_{n=-\infty}^{\infty} c_n e^{inx}$$

Where $c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)e^{-inx}\, dx$.

The relationship with the real coefficients is $c_0 = a_0/2$, $c_n = (a_n - ib_n)/2$ for $n > 0$ And
$c_{-n} = \overline{c_n}$ when $f$ is real-valued.

### 7.9 Worked Example: Parseval's Identity

**Problem.** Using the Fourier series of $f(x) = x$ on $(-\pi, \pi)$Verify Parseval's identity And
deduce $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$.

<details>
<summary>Solution</summary>

_Solution._ From Section 7.6: $a_0 = 0$, $a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$.

Parseval:
$\frac{1}{\pi}\int_{-\pi}^{\pi} x^2\, dx = \sum_{n=1}^{\infty} b_n^2 = \sum_{n=1}^{\infty} \frac{4}{n^2}$.

$\frac{1}{\pi} \cdot \frac{2\pi^3}{3} = 4\sum_{n=1}^{\infty} \frac{1}{n^2}$.

$\frac{2\pi^2}{3} = 4\sum_{n=1}^{\infty} \frac{1}{n^2}$.

$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$. $\blacksquare$

</details>
