---
title: Applications of Contour Integration
tags:
  - Mathematics
  - University
---

### 9.1 Evaluation of Real Integrals

Contour integration is a powerful tool for evaluating definite integrals.

### 9.2 Integrals of Rational Functions over the Real Line

**Theorem 9.1.** If $f(x) = P(x)/Q(x)$ where $\deg(Q) \geq \deg(P) + 2$ and $Q$ has no real roots,
Then

$$\int_{-\infty}^{\infty} f(x)\, dx = 2\pi i \sum_{\mathrm{Im}(z_k) > 0} \mathrm{Res}(f, z_k)$$

Where the sum is over poles in the upper half-plane.

_Proof._ Integrate $f(z)$ over the semicircular contour $\gamma_R$ consisting of $[-R, R]$ on the
Real axis and the semicircle $|z| = R$ in the upper half-plane. As $R \to \infty$The integral over
The semicircle vanishes (since $|f(z)| \leq M/R^2$ and the length is $\pi R$). $\blacksquare$

### 9.3 Worked Example

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{dx}{x^2 + 1}$.

_Solution._ $f(z) = \frac{1}{z^2 + 1}$ has simple poles at $z = \pm i$.

Only $z = i$ is in the upper half-plane.

$\mathrm{Res}\left(\frac{1}{z^2 + 1}, i\right) = \frac{1}{2z}\Big|_{z = i} = \frac{1}{2i}$.

$\int_{-\infty}^{\infty} \frac{dx}{x^2 + 1} = 2\pi i \cdot \frac{1}{2i} = \pi$. $\blacksquare$

### 9.4 Integrals Involving Trigonometric Functions

For integrals of the form $\int_0^{2\pi} R(\cos\theta, \sin\theta)\, d\theta$Substitute
$z = e^{i\theta}$So $dz = iz\, d\theta$, $\cos\theta = \frac{z + z^{-1}}{2}$
$\sin\theta = \frac{z - z^{-1}}{2i}$.

The integral becomes $\int_{|z|=1} f(z)\, dz$ where $f(z)$ is a rational function.

### 9.5 Worked Example

**Problem.** Evaluate $\int_0^{2\pi} \frac{d\theta}{2 + \cos\theta}$.

_Solution._ Substitute $z = e^{i\theta}$: $d\theta = \frac{dz}{iz}$
$\cos\theta = \frac{z + 1/z}{2}$.

$\int_{|z|=1} \frac{dz}{iz\left(2 + \frac{z + 1/z}{2}\right)} = \int_{|z|=1} \frac{2\, dz}{i(z^2 + 4z + 1)}$

Poles: $z^2 + 4z + 1 = 0 \Rightarrow z = -2 \pm \sqrt{3}$.

$|z_1| = |-2 + \sqrt{3}| = 2 - \sqrt{3} \lt 1$ (inside).
$|z_2| = |-2 - \sqrt{3}| = 2 + \sqrt{3} \gt 1$ (outside).

$\mathrm{Res}\left(\frac{1}{z^2 + 4z + 1}, z_1\right) = \frac{1}{2\sqrt{3}}$.

$\int_0^{2\pi} \frac{d\theta}{2 + \cos\theta} = \frac{2}{i} \cdot 2\pi i \cdot \frac{1}{2\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$.
$\blacksquare$

### 9.6 Jordan's Lemma

**Theorem 9.2 (Jordan's Lemma).** If $f(z) \to 0$ uniformly as $|z| \to \infty$ in the upper
Half-plane and $a \gt 0$Then

$$\lim_{R \to \infty} \int_{C_R} e^{iaz}f(z)\, dz = 0$$

Where $C_R$ is the upper semicircle $|z| = R$, $\mathrm{Im}(z) \geq 0$.

This allows evaluation of integrals of the form $\int_{-\infty}^{\infty} f(x)\cos(ax)\, dx$ and
$\int_{-\infty}^{\infty} f(x)\sin(ax)\, dx$.

### 9.7 Fourier-Type Integrals

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1}\, dx$.

Consider
$\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1}\, dx = 2\pi i \cdot \mathrm{Res}\!\left(\frac{e^{iz}}{z^2+1}, i\right)$.

$\mathrm{Res}\!\left(\frac{e^{iz}}{z^2+1}, i\right) = \frac{e^{i \cdot i}}{2i} = \frac{e^{-1}}{2i}$.

$\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1}\, dx = 2\pi i \cdot \frac{e^{-1}}{2i} = \frac{\pi}{e}$.

Taking real parts: $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1}\, dx = \frac{\pi}{e}$.

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{x \sin x}{x^2 + a^2}\, dx$ for $a \gt 0$.

Consider $\int_{-\infty}^{\infty} \frac{z\, e^{iz}}{z^2 + a^2}\, dz$. Only $z = ia$ is in the upper
half-plane.

$\mathrm{Res}\!\left(\frac{ze^{iz}}{z^2 + a^2}, ia\right) = \frac{ia \cdot e^{i \cdot ia}}{2ia} = \frac{e^{-a}}{2}$.

$\int_{-\infty}^{\infty} \frac{x\, e^{ix}}{x^2 + a^2}\, dx = 2\pi i \cdot \frac{e^{-a}}{2} = \pi i\, e^{-a}$.

Taking imaginary parts: $\int_{-\infty}^{\infty} \frac{x \sin x}{x^2 + a^2}\, dx = \pi\, e^{-a}$.

**Problem.** Evaluate $\int_0^{2\pi} \frac{\cos 2\theta}{5 + 4\cos\theta}\, d\theta$.

Substitute $z = e^{i\theta}$: $\cos\theta = (z + z^{-1})/2$, $\cos 2\theta = (z^2 + z^{-2})/2$.

$I = \frac{1}{2i}\int_{|z|=1} \frac{z^4 + 1}{z^2(2z + 1)(z + 2)}\, dz$.

Poles inside $|z| = 1$: $z = 0$ (order $2$) and $z = -1/2$ (simple).

At $z = 0$:
$\mathrm{Res} = \frac{d}{dz}\left[\frac{z^4 + 1}{(2z+1)(z+2)}\right]_{z=0}
= -\frac{5}{4}$.

At $z = -1/2$: $\mathrm{Res} = \frac{17/16}{3/4} = \frac{17}{12}$.

$I = \frac{1}{2i} \cdot 2\pi i \left(-\frac{5}{4} + \frac{17}{12}\right) = \frac{\pi}{6}$.

</details>

### 9.8 Improper Integrals and Principal Value

For integrals where the integrand has poles on the real axis, we use the **Cauchy principal value**:

$$\mathrm{PV}\!\int_{-\infty}^{\infty} f(x)\, dx = \lim_{\varepsilon \to 0^+} \left(\int_{-\infty}^{a-\varepsilon} f(x)\, dx + \int_{a+\varepsilon}^{\infty} f(x)\, dx\right)$$

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{\sin x}{x}\, dx$.

Consider $\oint_\gamma \frac{e^{iz}}{z}\, dz$ where $\gamma$ consists of $[-R, -\varepsilon]$
$[\varepsilon, R]$ on the real axis, small upper semicircle $C_\varepsilon$ around $0$And large
Upper semicircle $C_R$.

No poles inside the contour, so the integral is $0$.

On $C_R$: vanishes as $R \to \infty$ by Jordan's lemma. On $C_\varepsilon$ (indenting above):
$\int_{C_\varepsilon} \frac{e^{iz}}{z}\, dz \to -i\pi$ as $\varepsilon \to 0$ (half residue
contribution).

$0 = \mathrm{PV}\!\int_{-\infty}^{\infty} \frac{e^{ix}}{x}\, dx + (-i\pi)$.

$\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{e^{ix}}{x}\, dx = i\pi$.

Taking imaginary parts: $\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{\sin x}{x}\, dx = \pi$.

</details>

