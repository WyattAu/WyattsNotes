---
title: Taylor and Laurent Series
tags:
  - Mathematics
  - University
---

### 7.1 Taylor Series

**Theorem 7.1.** If $f$ is analytic on $|z - z_0| \lt R$Then

$$f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!}(z - z_0)^n$$

And the series converges uniformly on compact subsets of $|z - z_0| \lt R$.

_Proof._ For $|z - z_0| \lt r \lt R$Apply Cauchy's integral formula on $|\zeta - z_0| = r$:

$f(z) = \frac{1}{2\pi i}\int_{|\zeta - z_0| = r} \frac{f(\zeta)}{\zeta - z}\, d\zeta$

Write
$\frac{1}{\zeta - z} = \frac{1}{(\zeta - z_0) - (z - z_0)} = \frac{1}{\zeta - z_0} \cdot \frac{1}{1 - (z - z_0)/(\zeta - z_0)}$
$= \sum_{n=0}^{\infty} \frac{(z - z_0)^n}{(\zeta - z_0)^{n+1}}$ (geometric series, convergent since
$|z - z_0|/|\zeta - z_0| \lt 1$).

Substituting and integrating term by term gives the Taylor series. $\blacksquare$

_Remark._ The radius of convergence $R$ is the distance from $z_0$ to the nearest singularity of
$f$.

### 7.2 Common Taylor Series

$$e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \cdots$$

$$\sin z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!}$$

$$\cos z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!}$$

$$\frac{1}{1 - z} = \sum_{n=0}^{\infty} z^n, \quad |z| \lt 1$$

$$\ln(1 + z) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} z^n}{n}, \quad |z| \lt 1$$

### 7.3 Worked Examples: Taylor Series

<details>
<summary>Solution</summary>

**Problem.** Find the Taylor series of $f(z) = \frac{1}{z}$ centered at $z_0 = 1$.

$\frac{1}{z} = \frac{1}{1 + (z - 1)} = \sum_{n=0}^{\infty} (-1)^n (z - 1)^n$ for $|z - 1| \lt 1$.

Radius of convergence: distance from $z_0 = 1$ to the singularity at $z = 0$Which is $1$.

**Problem.** Find the Taylor series of $f(z) = \frac{1}{(1 - z)^2}$ centered at $z_0 = 0$.

$\frac{1}{(1-z)^2} = \frac{d}{dz}\left[\frac{1}{1 - z}\right] = \frac{d}{dz}\sum_{n=0}^{\infty} z^n
= \sum_{n=1}^{\infty} nz^{n-1} = \sum_{n=0}^{\infty} (n+1)z^n$
for $|z| \lt 1$.

**Problem.** Find the Taylor series of $f(z) = e^z \sin z$ up to the $z^4$ term.

$e^z = 1 + z + z^2/2 + z^3/6 + z^4/24 + \cdots$ $\sin z = z - z^3/6 + z^5/120 - \cdots$

$e^z \sin z = (1 + z + z^2/2 + z^3/6 + z^4/24 + \cdots)(z - z^3/6 + \cdots)$

$= z + z^2 + z^3/2 + z^4/6 + \cdots - z^3/6 - z^4/6 + \cdots$ $= z + z^2 + z^3/3 - z^4/30 + \cdots$

</details>

### 7.4 Laurent Series

**Theorem 7.2 (Laurent Series).** If $f$ is analytic on the annulus $r \lt |z - z_0| \lt R$ Then

$$f(z) = \sum_{n=-\infty}^{\infty} a_n(z - z_0)^n = \cdots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{z - z_0} + a_0 + a_1(z - z_0) + \cdots$$

Where

$$a_n = \frac{1}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+1}}\, dz$$

For any simple closed contour $\gamma$ in the annulus encircling $z_0$.

The **principal part** is $\sum_{n=-\infty}^{-1} a_n(z - z_0)^n$ (negative powers). The **analytic
Part** is $\sum_{n=0}^{\infty} a_n(z - z_0)^n$ (non-negative powers).

### 7.5 Classification of Laurent Series

The Laurent series expansion depends on the annulus of convergence. A function may have different
Laurent expansions in different annuli.

**Proposition 7.3.** The Laurent series expansion of $f$ in an annulus is unique.

### 7.6 Worked Examples: Laurent Series

<details>
<summary>Solution</summary>

**Problem.** Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ in $0 \lt |z| \lt 1$.

_Solution._ Using partial fractions: $\frac{1}{z(z-1)} = \frac{1}{z-1} - \frac{1}{z}$.

In $|z| \lt 1$: $\frac{1}{z - 1} = -\frac{1}{1 - z} = -\sum_{n=0}^{\infty} z^n$.

So $f(z) = -\sum_{n=0}^{\infty} z^n - \frac{1}{z} = \cdots - z^2 - z - 1 - \frac{1}{z}$.

The principal part is $-1/z$So $z = 0$ is a simple pole. $\blacksquare$

**Problem.** Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ in $1 \lt |z| \lt \infty$.

In $|z| \gt 1$:
$\frac{1}{z - 1} = \frac{1}{z} \cdot \frac{1}{1 - 1/z} = \sum_{n=2}^{\infty} z^{-n}$.

$f(z) = \sum_{n=2}^{\infty} z^{-n} - \frac{1}{z} = \frac{1}{z^2} + \frac{1}{z^3} + \cdots$

**Problem.** Find the Laurent series of $f(z) = \frac{e^z}{z^2}$ in $0 \lt |z| \lt \infty$.

$e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!}$So
$f(z) = \sum_{n=0}^{\infty} \frac{z^{n-2}}{n!}
= \frac{1}{z^2} + \frac{1}{z} + \frac{1}{2} + \frac{z}{6} + \cdots$

Residue at $z = 0$: $a_{-1} = 1$.

**Problem.** Find the Laurent series of $f(z) = \frac{1}{z^2(z - 3)}$ in $0 \lt |z| \lt 3$.

$\frac{1}{z - 3} = -\frac{1}{3}\sum_{n=0}^{\infty} \frac{z^n}{3^n}$.

$f(z) = -\sum_{n=0}^{\infty} \frac{z^{n-2}}{3^{n+1}}
= -\frac{1}{3z^2} - \frac{1}{9z} - \frac{1}{27} - \frac{z}{81} - \cdots$

Residue at $z = 0$: $a_{-1} = -\frac{1}{9}$.

</details>

### 7.7 Residue at Infinity

**Definition.** The **residue at infinity** of $f$ is defined as

$$\mathrm{Res}(f, \infty) = -\frac{1}{2\pi i}\int_{|z|=R} f(z)\, dz$$

For sufficiently large $R$ (enclosing all finite singularities).

**Proposition 7.4.** For a function $f$ with finitely many singularities in $\mathbb{C}$:

$$\sum_{\mathrm{all\ finite\ } z_k} \mathrm{Res}(f, z_k) + \mathrm{Res}(f, \infty) = 0$$

_Proof._ By the residue theorem applied to $|z| = R$ enclosing all finite singularities:

$\int_{|z|=R} f\, dz = 2\pi i \sum_{\mathrm{finite} \mathrm{Res}(f, z_k)}$.

But $\mathrm{Res}(f, \infty) = -\frac{1}{2\pi i}\int_{|z|=R} f\, dz$So the sum is zero.
$\blacksquare$

