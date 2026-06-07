---
title: Series Solutions
tags:
  - Mathematics
  - University
---

### 6.1 Power Series Method

For an ODE $y'' + p(x)y' + q(x)y = 0$ where $p$ and $q$ are analytic near $x_0$Substitute the Power
series $y = \sum_{n=0}^{\infty} a_n (x - x_0)^n$ and solve for the coefficients.

### 6.2 Ordinary and Regular Singular Points

$x_0$ is an **ordinary point** if $p$ and $q$ are analytic at $x_0$. It is a **regular singular
Point** if $(x - x_0)p(x)$ and $(x - x_0)^2 q(x)$ are analytic at $x_0$.

### 6.3 Frobenius Method

At a regular singular point $x_0 = 0$Substitute $y = \sum_{n=0}^{\infty} a_n x^{n + r}$. The
**indicial equation** determines the possible values of $r$.

**Theorem 6.1.** If the roots $r_1 \geq r_2$ of the indicial equation differ by a non-integer, there
Are two linearly independent solutions of the form $x^{r_1}\sum a_n x^n$ and $x^{r_2}\sum b_n x^n$.

### 6.4 Bessel's Equation

Bessel's equation of order $\nu$:

$$x^2 y'' + xy' + (x^2 - \nu^2)y = 0$$

For $\nu \notin \mathbb{Z}$The solutions are $J_\nu(x)$ and $J_{-\nu}(x)$ (Bessel functions of the
First kind). For $\nu = n \in \mathbb{N}$The second solution is the Weber function $Y_n(x)$.

### 6.4b Worked Example: Higher-Order ODE

**Problem.** Solve $y''' - 6y'' + 11y' - 6y = 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^3 - 6r^2 + 11r - 6 = 0$.

Trying $r = 1$: $1 - 6 + 11 - 6 = 0$. Factor: $(r - 1)(r^2 - 5r + 6) = (r - 1)(r - 2)(r - 3) = 0$.

Roots: $r = 1, 2, 3$ (three distinct real roots).

$y = c_1 e^x + c_2 e^{2x} + c_3 e^{3x}$. $\blacksquare$

</details>
### 6.5 Worked Example: Power Series Method

**Problem.** Solve $y'' - xy = 0$ (Airy’s equation) using power series about $x_0 = 0$.

<details>
<summary>Solution</summary>

_Solution._ Since $p(x) = 0$ and $q(x) = -x$ are both analytic everywhere, $x_0 = 0$ is an ordinary
Point. Substitute $y = \sum_{n=0}^{\infty} a_n x^n$:

$y' = \sum_{n=1}^{\infty} na_n x^{n-1}$, $y'' = \sum_{n=2}^{\infty} n(n-1)a_n x^{n-2}$.

$y'' - xy = \sum_{n=2}^{\infty} n(n-1)a_n x^{n-2} - \sum_{n=0}^{\infty} a_n x^{n+1} = 0$.

Shift indices: first sum $\sum_{m=0}^{\infty} (m+2)(m+1)a_{m+2} x^m$Second sum
$\sum_{m=1}^{\infty} a_{m-1} x^m$.

For $m = 0$: $2 \cdot 1 \cdot a_2 = 0 \implies a_2 = 0$.

For $m \geq 1$: $(m+2)(m+1)a_{m+2} - a_{m-1} = 0 \implies a_{m+2} = \frac{a_{m-1}}{(m+2)(m+1)}$.

This gives: $a_3 = \frac{a_0}{6}$, $a_4 = \frac{a_1}{12}$, $a_5 = \frac{a_2}{20} = 0$
$a_6 = \frac{a_3}{30} = \frac{a_0}{180}$Etc.

Since $a_2 = 0$All $a_{3k+2} = 0$.

$y(x) = a_0\left(1 + \frac{x^3}{6} + \frac{x^6}{180} + \cdots\right) + a_1\left(x + \frac{x^4}{12} + \frac{x^7}{504} + \cdots\right)$.

These are the **Airy functions** $\mathrm{Ai}(x)$ and $\mathrm{Bi}(x)$ (up to normalization).
$\blacksquare$

</details>

### 6.6 Worked Example: Frobenius Method

**Problem.** Solve $2xy'' + y' + xy = 0$ near $x = 0$ using the Frobenius method.

<details>
<summary>Solution</summary>

_Solution._ Rewrite in standard form: $y'' + \frac{1}{2x}y' + \frac{1}{2}y = 0$.

$x = 0$ is a regular singular point since $xp(x) = 1/2$ and $x^2 q(x) = x^2/2$ are analytic at $0$.

Substitute $y = \sum_{n=0}^{\infty} a_n x^{n+r}$, $a_0 \neq 0$:

$y' = \sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1}$

$y'' = \sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^{n+r-2}$

Substituting into $2xy'' + y' + xy = 0$:

$\sum_{n=0}^{\infty} 2(n+r)(n+r-1)a_n x^{n+r-1} + \sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1} + \sum_{n=0}^{\infty} a_n x^{n+r+1} = 0$

For $n = 0$: $[2r(r-1) + r]a_0 = 0$. Since $a_0 \neq 0$: $r(2r - 2 + 1) = 0 \implies r(2r - 1) = 0$.

Indicial equation: $r = 0$ or $r = 1/2$.

For general $n \geq 1$: $[2(n+r)(n+r-1) + (n+r)]a_n + a_{n-2} = 0$

$(n+r)(2n + 2r - 1)a_n = -a_{n-2}$

$a_n = -\frac{a_{n-2}}{(n+r)(2n + 2r - 1)}$

For $r = 0$: $a_n = -\frac{a_{n-2}}{n(2n-1)}$. Odd coefficients vanish ($a_1 = 0$). Even:
$a_2 = -\frac{a_0}{6}$ $a_4 = \frac{a_0}{120}$Etc.

For $r = 1/2$: $a_n = -\frac{a_{n-2}}{(n+1/2)(2n)} = -\frac{a_{n-2}}{n(2n+1)}$.

$y = C_1 \sum_{k=0}^{\infty} a_{2k}^{(0)} x^{2k} + C_2 x^{1/2} \sum_{k=0}^{\infty} a_{2k}^{(1/2)} x^{2k}$.
$\blacksquare$

</details>

### 6.7 Worked Example: Bessel Functions

**Problem.** Find the first three nonzero terms of $J_0(x)$The Bessel function of the first kind Of
order zero, which satisfies $x^2 y'' + xy' + x^2 y = 0$.

<details>
<summary>Solution</summary>

_Solution._ Here $\nu = 0$. The indicial equation gives $r^2 = 0$ (repeated root $r = 0$).

Substituting $y = \sum_{n=0}^{\infty} a_n x^{2n}$ (we can show only even powers appear):

$y' = \sum_{n=1}^{\infty} 2n a_n x^{2n-1}$, $y'' = \sum_{n=1}^{\infty} 2n(2n-1) a_n x^{2n-2}$.

$x^2 y'' + xy' + x^2 y = \sum_{n=1}^{\infty} 2n(2n-1)a_n x^{2n} + \sum_{n=1}^{\infty} 2n a_n x^{2n} + \sum_{n=0}^{\infty} a_n x^{2n+2} = 0$.

For $n = 0$: $a_0$ is free.

For the recurrence: $4n^2 a_n + a_{n-1} = 0 \implies a_n = -\frac{a_{n-1}}{4n^2}$ for $n \geq 1$.

$a_1 = -\frac{a_0}{4}$, $a_2 = \frac{a_0}{64}$, $a_3 = -\frac{a_0}{2304}$.

Setting $a_0 = 1$: $J_0(x) = 1 - \frac{x^2}{4} + \frac{x^4}{64} - \frac{x^6}{2304} + \cdots$.
$\blacksquare$

</details>
