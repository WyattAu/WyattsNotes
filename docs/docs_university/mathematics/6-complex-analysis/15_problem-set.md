---
title: Problem Set
slug: complex-analysis-problem-set
tags:
  - Mathematics
  - University
---

### Problem 1

Express $z = -\sqrt{3} + i$ in polar form and find all values of $z^{1/3}$.

<details>
<summary>Solution</summary>

$|z| = \sqrt{3 + 1} = 2$. Since $\mathrm{Re}(z) \lt 0$ and $\mathrm{Im}(z) \gt 0$:
$\arg(z) = \pi - \pi/6 = 5\pi/6$.

$z = 2\,e^{5\pi i/6}$.

$z^{1/3} = 2^{1/3}\, e^{(5\pi/6 + 2\pi k)/3}$ for $k = 0, 1, 2$.

$z_0 = 2^{1/3}\, e^{5\pi i/18}$, $z_1 = 2^{1/3}\, e^{17\pi i/18}$, $z_2 = 2^{1/3}\, e^{29\pi i/18}$.

_If you get this wrong, revise:_ Section 1.5 (Roots of Complex Numbers).

</details>

### Problem 2

Let $f(z) = z^2 + \bar{z}^2$. Find where $f$ is differentiable and where it is analytic.

<details>
<summary>Solution</summary>

$f(z) = (x + iy)^2 + (x - iy)^2 = 2(x^2 - y^2)$. So $u = 2(x^2 - y^2)$, $v = 0$.

$u_x = 4x$, $u_y = -4y$, $v_x = 0$, $v_y = 0$.

CR: $4x = 0 \Rightarrow x = 0$, $-4y = 0 \Rightarrow y = 0$.

$f$ is differentiable only at $z = 0$ and analytic nowhere.

$f'(0) = 0$ (verified by direct computation).

_If you get this wrong, revise:_ Sections 2.4 and 3.1 (Analyticity and Cauchy-Riemann).

</details>

### Problem 3

Verify that $f(z) = \frac{1}{z^2 + 1}$ satisfies the Cauchy-Riemann equations on its domain and Find
$f'(z)$.

<details>
<summary>Solution</summary>

$f(z) = 1/(z^2 + 1)$ is a rational function with denominator non-zero away from $\pm i$So $f$ Is
analytic on $\mathbb{C} \setminus \{i, -i\}$.

By the quotient rule: $f'(z) = \frac{-2z}{(z^2 + 1)^2}$.

Verify via CR at $z = 1$: $u = \frac{x^2 - y^2 + 1}{(x^2 - y^2 + 1)^2 + 4x^2y^2}$
$v = \frac{-2xy}{(x^2 - y^2 + 1)^2 + 4x^2y^2}$.

$u_x(1, 0) = -1/2 = f'(1)$. $\checkmark$

_If you get this wrong, revise:_ Sections 3.1 and 3.3 (CR Equations).

</details>

### Problem 4

Show that $u(x, y) = x^3 - 3xy^2 + 3x^2 - 3y^2$ is harmonic and find its harmonic conjugate.

<details>
<summary>Solution</summary>

$u_{xx} = 6x + 6$, $u_{yy} = -6x - 6$. $\Delta u = 0$. $\checkmark$

By CR: $v_y = u_x = 3x^2 - 3y^2 + 6x$. $v = 3x^2 y - y^3 + 6xy + g(x)$.

$v_x = -u_y = 6xy + 6y$. $6xy + 6y = 6xy + 6y + g'(x) \Rightarrow g'(x) = 0 \Rightarrow g(x) = C$.

Harmonic conjugate: $v(x, y) = 3x^2 y - y^3 + 6xy + C$.

$f(z) = u + iv = z^3 + 3z^2$.

_If you get this wrong, revise:_ Section 3.4 (Harmonic Functions).

</details>

### Problem 5

Evaluate $\int_\gamma (z^2 + 2z)\, dz$ where $\gamma$ is the upper half of the unit circle from
$z = 1$ to $z = -1$.

<details>
<summary>Solution</summary>

Since $z^2 + 2z$ is entire, the integral is path-independent. Let $F(z) = z^3/3 + z^2$.

$\int_\gamma (z^2 + 2z)\, dz = F(-1) - F(1) = \frac{2}{3} - \frac{4}{3} = -\frac{2}{3}$.

_If you get this wrong, revise:_ Sections 4.5 and 4.7 (Contour Integrals).

</details>

### Problem 6

Use the ML inequality to bound $\left|\int_\gamma \frac{e^z}{z - 2}\, dz\right|$ where $\gamma$ Is
the circle $|z| = 1$.

<details>
<summary>Solution</summary>

On $\gamma$: $|z| = 1$So $|e^z| \leq e$ and $|z - 2| \geq 1$.

$\left|\frac{e^z}{z - 2}\right| \leq e$. $L = 2\pi$.

$\left|\int_\gamma \frac{e^z}{z - 2}\, dz\right| \leq 2\pi e$.

_If you get this wrong, revise:_ Section 4.6 (ML Inequality).

</details>

### Problem 7

Evaluate $\oint_\gamma \frac{z + 1}{z^2 - z}\, dz$ where $\gamma$ is $|z| = 2$.

<details>
<summary>Solution</summary>

$\frac{z + 1}{z^2 - z} = \frac{z + 1}{z(z - 1)}$. Simple poles at $z = 0$ and $z = 1$Both inside
$|z| = 2$.

At $z = 0$: $\mathrm{Res} = \lim_{z \to 0} \frac{z + 1}{z - 1} = -1$. At $z = 1$:
$\mathrm{Res} = \lim_{z \to 1} \frac{z + 1}{z} = 2$.

$\oint_\gamma \frac{z + 1}{z^2 - z}\, dz = 2\pi i(-1 + 2) = 2\pi i$.

_If you get this wrong, revise:_ Sections 8.4 and 8.5 (Residues).

</details>

### Problem 8

Classify all singularities of $f(z) = \frac{e^{1/z}}{z^2 + 1}$ and find all residues.

<details>
<summary>Solution</summary>

$z = 0$: $e^{1/z}$ has an essential singularity at $0$So $z = 0$ is an essential singularity of $f$.
$z = i$: simple pole. $z = -i$: simple pole.

At $z = i$: $\mathrm{Res} = \frac{e^{1/i}}{2i} = \frac{e^{-i}}{2i}$. At $z = -i$:
$\mathrm{Res} = \frac{e^{1/(-i)}}{-2i} = \frac{e^{i}}{-2i}$.

At $z = 0$: find the coefficient of $1/z$ in $\frac{e^{1/z}}{z^2 + 1}$.
$\frac{1}{z^2 + 1} = 1 - z^2 + z^4 - \cdots$ near $z = 0$. $e^{1/z} = 1 + 1/z + 1/(2z^2) + \cdots$.
The $1/z$ coefficient in the product: from $1 \cdot 1/z = 1/z$Giving residue $1$.

_If you get this wrong, revise:_ Sections 8.1 and 8.4 (Singularities and Residues).

</details>

### Problem 9

Evaluate $\int_0^{2\pi} \frac{\cos\theta}{5 + 4\cos\theta}\, d\theta$.

<details>
<summary>Solution</summary>

Substitute $z = e^{i\theta}$:

$I = \int_{|z|=1} \frac{(z + z^{-1})/2}{5 + 4(z + z^{-1})/2} \cdot \frac{dz}{iz}
= \frac{1}{2i}\int_{|z|=1} \frac{z^2 + 1}{z(2z^2 + 5z + 2)}\, dz
= \frac{1}{2i}\int_{|z|=1} \frac{z^2 + 1}{z(2z + 1)(z + 2)}\, dz$.

Poles inside $|z| = 1$: $z = 0$ (simple) and $z = -1/2$ (simple).

At $z = 0$: $\mathrm{Res} = \frac{1}{(2 \cdot 0 + 1)(0 + 2)} = \frac{1}{2}$. At $z = -1/2$:
$\mathrm{Res} = \frac{1/4 + 1}{(-1/2)(-1 + 2)} = \frac{5/4}{-1/2} = -\frac{5}{2}$.

$I = \frac{1}{2i} \cdot 2\pi i\left(\frac{1}{2} - \frac{5}{2}\right) = \pi(-2) = -\frac{\pi}{3}$.

_If you get this wrong, revise:_ Section 9.4 (Trigonometric Integrals).

</details>

### Problem 10

Evaluate $\int_{-\infty}^{\infty} \frac{dx}{(x^2 + 1)(x^2 + 4)}$.

<details>
<summary>Solution</summary>

$f(z) = \frac{1}{(z^2 + 1)(z^2 + 4)}$. Poles in upper half-plane: $z = i$ (simple) and $z = 2i$
(simple).

At $z = i$: $\mathrm{Res} = \frac{1}{(2i)(i^2 + 4)} = \frac{1}{2i \cdot 3} = \frac{1}{6i}$. At
$z = 2i$: $\mathrm{Res} = \frac{1}{(4i - 1)(4i)} = \frac{1}{4i(-3)} = -\frac{1}{12i}$.

$\int_{-\infty}^{\infty} f(x)\, dx = 2\pi i\left(\frac{1}{6i} - \frac{1}{12i}\right) = 2\pi i \cdot \frac{1}{12i} = \frac{\pi}{6}$.

_If you get this wrong, revise:_ Section 9.2 (Rational Function Integrals).

</details>

### Problem 11

Find the Taylor series of $f(z) = \frac{z}{z^2 + 4}$ centered at $z_0 = 0$ and state the radius Of
convergence.

<details>
<summary>Solution</summary>

$\frac{z}{z^2 + 4} = \frac{z}{4} \cdot \frac{1}{1 + z^2/4} = \frac{z}{4}\sum_{n=0}^{\infty} (-1)^n \frac{z^{2n}}{4^n}
= \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{4^{n+1}}$

For $|z| \lt 2$. Radius of convergence: distance from $0$ to nearest singularity ($\pm 2i$), which
is $2$.

_If you get this wrong, revise:_ Section 7.1 (Taylor Series).

</details>

### Problem 12

Find the Laurent series of $f(z) = \frac{1}{(z - 1)(z - 2)}$ in the annulus $1 \lt |z| \lt 2$.

<details>
<summary>Solution</summary>

$\frac{1}{(z-1)(z-2)} = \frac{1}{z - 2} - \frac{1}{z - 1}$.

For $|z| \gt 1$:
$\frac{1}{z - 1} = \frac{1}{z} \cdot \frac{1}{1 - 1/z} = \sum_{n=0}^{\infty} z^{-n-1}$.

For $|z| \lt 2$:
$\frac{1}{z - 2} = -\frac{1}{2} \cdot \frac{1}{1 - z/2} = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}$.

$f(z) = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}} - \sum_{n=0}^{\infty} z^{-n-1}$.

_If you get this wrong, revise:_ Section 7.4 (Laurent Series).

</details>

### Problem 13

Using Rouché's theorem, determine the number of roots of $z^5 - 5z + 1 = 0$ in $|z| \lt 1$.

<details>
<summary>Solution</summary>

On $|z| = 1$: $|-5z| = 5 \gt |z^5 + 1| \leq 2$.

By Rouché with $f(z) = -5z$ and $g(z) = z^5 + 1$: $z^5 - 5z + 1$ has the same number of zeros In
$|z| \lt 1$ as $-5z$Which has exactly one zero (at $z = 0$).

So exactly one root in $|z| \lt 1$.

_If you get this wrong, revise:_ Section 12.2 (Rouché's Theorem).

</details>

### Problem 14

Find the Möbius transformation that maps $1 \mapsto 0$, $i \mapsto 1$, $-1 \mapsto \infty$.

<details>
<summary>Solution</summary>

$T(z) = \frac{(z - 1)(i - (-1))}{(z - (-1))(i - 1)} = \frac{(z - 1)(i + 1)}{(z + 1)(i - 1)}$.

Simplify:
$\frac{i + 1}{i - 1} = \frac{(i+1)(-i-1)}{(i-1)(-i-1)} = \frac{-i^2 - 2i - 1}{-i^2 + 1} = \frac{-2i}{2} = -i$.

$T(z) = -i \cdot \frac{z - 1}{z + 1}$.

Verify: $T(1) = 0$ $\checkmark$, $T(i) = -i \cdot \frac{i-1}{i+1} = -i \cdot (-i) = -1$.

That gives $-1$Not $1$. Let me recompute.

$T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$ with $z_1 = 1$, $z_2 = i$, $z_3 = -1$.

$T(z) = \frac{(z - 1)(i + 1)}{(z + 1)(i - 1)}$.

$T(i) = \frac{(i - 1)(i + 1)}{(i + 1)(i - 1)} = 1$. $\checkmark$

$T(1) = 0$. $\checkmark$. $T(-1) = \infty$. $\checkmark$.

So $T(z) = \frac{(z - 1)(i + 1)}{(z + 1)(i - 1)}$.

_If you get this wrong, revise:_ Section 10.5 (Cross-Ratio).

</details>

### Problem 15

Evaluate $\int_\gamma \frac{z^3}{z^2 + 1}\, dz$ where $\gamma$ is $|z| = 2$.

<details>
<summary>Solution</summary>

$\frac{z^3}{z^2 + 1}$ has simple poles at $z = \pm i$Both inside $|z| = 2$.

At $z = i$: $\mathrm{Res} = \frac{i^3}{2i} = \frac{-i}{2i} = -\frac{1}{2}$. At $z = -i$:
$\mathrm{Res} = \frac{(-i)^3}{-2i} = \frac{i}{-2i} = -\frac{1}{2}$.

$\int_\gamma \frac{z^3}{z^2 + 1}\, dz = 2\pi i\left(-\frac{1}{2} - \frac{1}{2}\right) = -2\pi i$.

Alternatively: $\frac{z^3}{z^2 + 1} = z - \frac{z}{z^2 + 1}$. $\int_\gamma z\, dz = 0$ (entire), and
$\int_\gamma \frac{z}{z^2 + 1}\, dz = 2\pi i(1/2 + 1/2) = 2\pi i$. So the integral equals
$0 - 2\pi i = -2\pi i$. $\checkmark$

_If you get this wrong, revise:_ Sections 8.4 and 8.5 (Residues).

</details>

### Problem 16

Show that $\int_{-\infty}^{\infty} \frac{\cos 2x}{x^2 + 1}\, dx = \frac{\pi}{e^2}$.

<details>
<summary>Solution</summary>

Consider $\int_{-\infty}^{\infty} \frac{e^{2ix}}{x^2 + 1}\, dx$.

$f(z) = \frac{e^{2iz}}{z^2 + 1}$ has a simple pole at $z = i$ in the upper half-plane.

$\mathrm{Res}\!\left(\frac{e^{2iz}}{z^2 + 1}, i\right) = \frac{e^{2i \cdot i}}{2i} = \frac{e^{-2}}{2i}$.

$\int_{-\infty}^{\infty} \frac{e^{2ix}}{x^2 + 1}\, dx = 2\pi i \cdot \frac{e^{-2}}{2i} = \frac{\pi}{e^2}$.

Taking real parts: $\int_{-\infty}^{\infty} \frac{\cos 2x}{x^2 + 1}\, dx = \frac{\pi}{e^2}$.

_If you get this wrong, revise:_ Section 9.7 (Fourier-Type Integrals).

</details>

### Problem 17

Find the residue of $f(z) = \frac{\sin z}{z^4}$ at $z = 0$.

<details>
<summary>Solution</summary>

$\sin z = z - z^3/6 + z^5/120 - \cdots$

$f(z) = \frac{z - z^3/6 + z^5/120 - \cdots}{z^4} = \frac{1}{z^3} - \frac{1}{6z} + \frac{z}{120} - \cdots$

The coefficient of $1/z$ is $-1/6$So $\mathrm{Res}(f, 0) = -\frac{1}{6}$.

_If you get this wrong, revise:_ Section 8.4 (Computing Residues).

</details>

### Problem 18

Evaluate $\int_\gamma \frac{dz}{(z - 1)^2(z - 2)}$ where $\gamma$ is $|z - 1| = 1/2$.

<details>
<summary>Solution</summary>

Only $z = 1$ is inside $\gamma$ (a pole of order $2$). $z = 2$ is outside.

$\mathrm{Res}(f, 1) = \frac{d}{dz}\left[\frac{1}{z - 2}\right]_{z=1} = -\frac{1}{(z-2)^2}\Big|_{z=1} = -1$.

$\int_\gamma f\, dz = 2\pi i \cdot (-1) = -2\pi i$.

_If you get this wrong, revise:_ Section 6.2 (CIF for Derivatives) and 8.4 (Residues).

</details>

### Problem 19

Use the Cauchy-Riemann equations to show that $f(z) = |z|^2 + 2\bar{z}$ is differentiable at Exactly
one point and find $f'(z)$ there.

<details>
<summary>Solution</summary>

$f(z) = x^2 + y^2 + 2x - 2iy$. So $u = x^2 + y^2 + 2x$, $v = -2y$.

$u_x = 2x + 2$, $u_y = 2y$, $v_x = 0$, $v_y = -2$.

CR: $2x + 2 = -2 \Rightarrow x = -2$And $2y = 0 \Rightarrow y = 0$.

$f$ is differentiable only at $z = -2$.

$f'(-2) = u_x(-2, 0) + iv_x(-2, 0) = (2(-2) + 2) + 0 = -2$.

_If you get this wrong, revise:_ Section 3.1 (Cauchy-Riemann Equations).

</details>

### Problem 20

Evaluate $\int_\gamma \frac{e^z \sin z}{(z - \pi)^3}\, dz$ where $\gamma$ is $|z| = 4$.

<details>
<summary>Solution</summary>

Only $z = \pi$ is inside $\gamma$ (a pole of order $3$).

By CIF for derivatives: $\int_\gamma \frac{f(z)}{(z - \pi)^3}\, dz = \frac{2\pi i}{2!}\,f''(\pi)$
Where $f(z) = e^z \sin z$.

$f'(z) = e^z \sin z + e^z \cos z = e^z(\sin z + \cos z)$.
$f''(z) = e^z(\sin z + \cos z) + e^z(\cos z - \sin z) = 2e^z \cos z$.

$f''(\pi) = 2e^\pi \cos\pi = -2e^\pi$.

$\int_\gamma \frac{e^z \sin z}{(z - \pi)^3}\, dz = \pi i \cdot (-2e^\pi) = -2\pi i\, e^\pi$.

_If you get this wrong, revise:_ Section 6.2 (Cauchy's Integral Formula for Derivatives).

</details>

## Worked Examples

### Example 1: Complex integration

**Problem.** Evaluate $\oint_{|z|=2} \frac{e^z}{z - 1} \, dz$.

**Solution.** The integrand has a simple pole at $z = 1$ with residue $e^1 = e$. By Cauchy's residue
theorem: $$\oint_{|z|=2} \frac{e^z}{z - 1} \, dz = 2\pi i \cdot e = 2\pi e i.$$

$\blacksquare$

### Example 2: Taylor series

**Problem.** Find the Taylor series of $f(z) = \frac{1}{z}$ about $z_0 = 1$.

**Solution.** $f(z) = \frac{1}{1 + (z-1)} = \sum_{n=0}^{\infty} (-1)^n(z-1)^n$ for $|z - 1| < 1$.

$\blacksquare$

## Common Pitfalls

- **Confusing complex conjugate and complex inverse.** $\bar{z} = a - bi$;
  $z^{-1} = \bar{z}/|z|^2 = (a - bi)/(a^2 + b^2)$. **Fix:** The conjugate is NOT the inverse; the
  inverse involves division by $|z|^2$.
- **Wrong branch of the logarithm.** $\log z = \ln|z| + i(\arg z + 2k\pi)$ is multi-valued; the
  principal branch restricts $\arg z \in (-\pi, \pi]$. **Fix:** Always specify the branch when
  working with complex logarithms and powers.
- **Cauchy's theorem conditions.** The function must be analytic on and inside the contour. **Fix:**
  If the function has singularities inside the contour, use the residue theorem instead.

## Summary

- Cauchy-Riemann equations: $u_x = v_y$, $u_y = -v_x$; necessary condition for analyticity.
- Cauchy's integral theorem: $\oint_\gamma f(z)\, dz = 0$ for $f$ analytic on and inside $\gamma$.
- Residue theorem: $\oint_\gamma f(z)\, dz = 2\pi i \sum \text{Res}(f, z_k)$.
- Taylor and Laurent series: power series representations; Laurent series include negative powers
  for singularities.

## Cross-References

| Topic             | Site       | Link                                                                                                           |
| ----------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| [Complex Numbers] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/further-maths/pure-mathematics/01-complex-numbers) |
| [Complex Numbers] | IB         | [View](https://ib.wyattau.com/docs/ib/maths/1-number-and-algebra/2_complex-numbers)                            |
| [Complex Numbers] | University | [View](https://university.wyattau.com/docs/mathematics/7-complex-analysis/1_complex-analysis)                  |

