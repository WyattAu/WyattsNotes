---
title: Integration
description: IB Mathematics — indefinite and definite integration, techniques of integration, and applications to areas and volumes.
slug: integration
---

## Indefinite Integration

### Antiderivatives

If $F'(x) = f(x)$, then $F$ is an **antiderivative** of $f$. The general antiderivative is:

$$\int f(x)\,dx = F(x) + C$$

where $C$ is the **constant of integration**. This expression represents the entire family of
functions whose derivative is $f$.

### Basic Integrals

| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
| :--- | :--- |
| $x^n$ | $\dfrac{x^{n+1}}{n+1} + C, \quad n \ne -1$ |
| $\dfrac{1}{x}$ | $\ln|x| + C$ |
| $e^{kx}$ | $\dfrac{1}{k}e^{kx} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x + C$ |
| $\dfrac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + C$ |

### Linearity

$$\int \bigl[af(x) + bg(x)\bigr]\,dx = a\int f(x)\,dx + b\int g(x)\,dx$$

for constants $a, b \in \mathbb{R}$.

---

## Definite Integration

### The Definite Integral

The **definite integral** of $f$ from $a$ to $b$ is:

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

where $F$ is any antiderivative of $f$. This is the **Fundamental Theorem of Calculus (FTC)**.

### Properties of Definite Integrals

$$\int_a^a f(x)\,dx = 0$$

$$\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$

$$\int_a^b \bigl[f(x) \pm g(x)\bigr]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$$

$$\int_a^b cf(x)\,dx = c\int_a^b f(x)\,dx$$

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx \qquad \mathrm{(additivity)}$$

### The Fundamental Theorem of Calculus

**Part 1.** If $f$ is continuous on $[a, b]$, define $g(x) = \displaystyle\int_a^x f(t)\,dt$. Then
$g$ is differentiable on $(a, b)$ and $g'(x) = f(x)$.

**Part 2.** If $f$ is continuous on $[a, b]$ and $F' = f$, then $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$.

*Proof of Part 1.* By the Mean Value Theorem for integrals, for small $h$:

$$g(x + h) - g(x) = \int_x^{x+h} f(t)\,dt = f(c) \cdot h$$

for some $c \in [x, x+h]$. Dividing by $h$ and taking $h \to 0$:

$$g'(x) = \lim_{h \to 0} f(c) = f(x)$$

by continuity of $f$.

---

## Area Under and Between Curves

### Area Under a Curve

If $f(x) \ge 0$ on $[a, b]$, the area between the curve and the $x$-axis is:

$$A = \int_a^b f(x)\,dx$$

If $f$ changes sign, the integral gives the **signed** area. The actual (unsigned) area is:

$$A = \int_a^b |f(x)|\,dx$$

This requires finding where $f$ crosses the $x$-axis and splitting the integral.

**Example.** Find the area enclosed by $y = x^2 - 4$ and the $x$-axis.

The curve crosses the $x$-axis at $x = -2$ and $x = 2$.

$$A = \int_{-2}^{2} |x^2 - 4|\,dx = \int_{-2}^{2} (4 - x^2)\,dx = \left[4x - \frac{x^3}{3}\right]_{-2}^{2} = \left(8 - \frac{8}{3}\right) - \left(-8 + \frac{8}{3}\right) = \frac{32}{3}$$

### Area Between Two Curves

If $f(x) \ge g(x)$ on $[a, b]$:

$$A = \int_a^b \bigl[f(x) - g(x)\bigr]\,dx$$

**Example.** Find the area between $y = x^2$ and $y = 2x$.

Intersection points: $x^2 = 2x \implies x(x - 2) = 0 \implies x = 0, 2$.

On $[0, 2]$, $2x \ge x^2$, so:

$$A = \int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$$

---

## Integration by Substitution

### The Method

The substitution rule (reverse chain rule) states:

$$\int f\!\bigl(g(x)\bigr) \cdot g'(x)\,dx = \int f(u)\,du \qquad \mathrm{where}\ u = g(x)$$

### Procedure

1. Identify an appropriate substitution $u = g(x)$.
2. Compute $du = g'(x)\,dx$.
3. Rewrite the entire integral in terms of $u$.
4. Integrate with respect to $u$.
5. Substitute back to express the result in terms of $x$.

**Example.** Evaluate $\displaystyle\int 2x\sqrt{x^2 + 1}\,dx$.

Let $u = x^2 + 1$, so $du = 2x\,dx$.

$$\int 2x\sqrt{x^2 + 1}\,dx = \int \sqrt{u}\,du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C$$

**Example.** Evaluate $\displaystyle\int \frac{x}{x^2 + 1}\,dx$.

Let $u = x^2 + 1$, so $du = 2x\,dx$, giving $x\,dx = \dfrac{1}{2}du$.

$$\int \frac{x}{x^2 + 1}\,dx = \frac{1}{2}\int \frac{1}{u}\,du = \frac{1}{2}\ln|u| + C = \frac{1}{2}\ln(x^2 + 1) + C$$

**Example.** Evaluate $\displaystyle\int \sin x \cos x\,dx$.

Let $u = \sin x$, so $du = \cos x\,dx$.

$$\int \sin x \cos x\,dx = \int u\,du = \frac{u^2}{2} + C = \frac{\sin^2 x}{2} + C$$

### Definite Integrals with Substitution

When the limits change with the substitution, either:

- Convert the limits: if $u = g(x)$, then $x = a \to u = g(a)$ and $x = b \to u = g(b)$.
- Or substitute back to $x$ before evaluating.

**Example.** Evaluate $\displaystyle\int_0^1 xe^{x^2}\,dx$.

Let $u = x^2$, so $du = 2x\,dx$. When $x = 0$, $u = 0$; when $x = 1$, $u = 1$.

$$\int_0^1 xe^{x^2}\,dx = \frac{1}{2}\int_0^1 e^u\,du = \frac{1}{2}\bigl[e^u\bigr]_0^1 = \frac{1}{2}(e - 1)$$

:::warning Common Pitfall

When using substitution with definite integrals, you must change the limits of integration to match
the new variable. Forgetting to change the limits is a very common source of error.

:::

---

## Integration by Parts

### The Formula

$$\int u\,dv = uv - \int v\,du$$

This follows from the product rule: $\dfrac{d}{dx}(uv) = u\dfrac{dv}{dx} + v\dfrac{du}{dx}$.

### Choosing $u$ and $dv$

Use the **LIATE** priority (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) to
select $u$. The function earlier in the list should be $u$.

**Example.** Evaluate $\displaystyle\int x\cos x\,dx$.

Let $u = x$ ($dv = \cos x\,dx$). Then $du = dx$ and $v = \sin x$.

$$\int x\cos x\,dx = x\sin x - \int \sin x\,dx = x\sin x + \cos x + C$$

**Example.** Evaluate $\displaystyle\int x^2 e^x\,dx$.

Let $u = x^2$ ($dv = e^x\,dx$). Then $du = 2x\,dx$ and $v = e^x$.

$$\int x^2 e^x\,dx = x^2 e^x - \int 2xe^x\,dx$$

Apply integration by parts again to $\int xe^x\,dx$:

$$\int xe^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C$$

Therefore:

$$\int x^2 e^x\,dx = x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$$

### Reduction Formulas

Repeated integration by parts leads to **reduction formulas**.

**Example.** For $\displaystyle I_n = \int \sin^n x\,dx$:

$$I_n = -\frac{1}{n}\sin^{n-1} x \cos x + \frac{n-1}{n}I_{n-2}$$

---

## Integration Using Partial Fractions

### Linear Factors

If the denominator factorises into distinct linear factors:

$$\frac{px + q}{(ax + b)(cx + d)} = \frac{A}{ax + b} + \frac{B}{cx + d}$$

**Example.** Evaluate $\displaystyle\int \frac{1}{x^2 - 1}\,dx$.

$$\frac{1}{x^2 - 1} = \frac{1}{(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1}$$

$$1 = A(x + 1) + B(x - 1)$$

Setting $x = 1$: $A = \dfrac{1}{2}$. Setting $x = -1$: $B = -\dfrac{1}{2}$.

$$\int \frac{1}{x^2 - 1}\,dx = \frac{1}{2}\int \frac{1}{x-1}\,dx - \frac{1}{2}\int \frac{1}{x+1}\,dx = \frac{1}{2}\ln|x - 1| - \frac{1}{2}\ln|x + 1| + C$$

### Repeated Linear Factors

$$\frac{px + q}{(ax + b)^2} = \frac{A}{ax + b} + \frac{B}{(ax + b)^2}$$

### Irreducible Quadratic Factors

$$\frac{px + q}{(x^2 + bx + c)(x + d)} = \frac{Ax + B}{x^2 + bx + c} + \frac{C}{x + d}$$

---

## Volume of Revolution

### Rotation About the $x$-Axis

If $y = f(x) \ge 0$ on $[a, b]$, the solid obtained by rotating the region under the curve about the
$x$-axis has volume:

$$V = \pi \int_a^b \bigl[f(x)\bigr]^2\,dx = \pi \int_a^b y^2\,dx$$

**Example.** Find the volume generated by rotating $y = \sqrt{x}$ about the $x$-axis from $x = 0$
to $x = 4$.

$$V = \pi \int_0^4 x\,dx = \pi \left[\frac{x^2}{2}\right]_0^4 = 8\pi$$

### Rotation About the $y$-Axis

$$V = \pi \int_c^d \bigl[f^{-1}(y)\bigr]^2\,dy = \pi \int_c^d x^2\,dy$$

Alternatively, using the **shell method**:

$$V = 2\pi \int_a^b x \cdot f(x)\,dx$$

**Example.** Find the volume generated by rotating $y = x^2$ about the $y$-axis from $y = 0$ to $y = 4$.

Using the disk method (solving for $x$): $x = \sqrt{y}$.

$$V = \pi \int_0^4 (\sqrt{y})^2\,dy = \pi \int_0^4 y\,dy = \pi\left[\frac{y^2}{2}\right]_0^4 = 8\pi$$

Using the shell method:

$$V = 2\pi \int_0^2 x \cdot x^2\,dx = 2\pi \int_0^2 x^3\,dx = 2\pi\left[\frac{x^4}{4}\right]_0^2 = 8\pi$$

### Volume Between Two Curves

Rotating the region between $y = f(x)$ and $y = g(x)$ about the $x$-axis (where $f \ge g \ge 0$):

$$V = \pi \int_a^b \bigl[f(x)^2 - g(x)^2\bigr]\,dx$$

---

## Improper Integrals

### Integrals with Infinite Limits

$$\int_a^{\infty} f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx$$

The integral **converges** if this limit exists (is finite); otherwise it **diverges**.

**Example.** Evaluate $\displaystyle\int_1^{\infty} \frac{1}{x^2}\,dx$.

$$\int_1^{\infty} \frac{1}{x^2}\,dx = \lim_{b \to \infty} \left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty}\left(-\frac{1}{b} + 1\right) = 1$$

The integral converges.

**Example.** Does $\displaystyle\int_1^{\infty} \frac{1}{x}\,dx$ converge?

$$\int_1^{\infty} \frac{1}{x}\,dx = \lim_{b \to \infty} \bigl[\ln x\bigr]_1^b = \lim_{b \to \infty} \ln b = \infty$$

The integral **diverges**.

### The $p$-Test

$$\int_1^{\infty} \frac{1}{x^p}\,dx \quad \mathrm{converges\ if}\ p \gt 1,\ \mathrm{diverges\ if}\ p \le 1$$

### Integrals with Unbounded Integrands

If $f$ has an asymptote at $x = c \in (a, b)$:

$$\int_a^b f(x)\,dx = \lim_{t \to c^-} \int_a^t f(x)\,dx + \lim_{t \to c^+} \int_t^b f(x)\,dx$$

Both limits must exist independently for the integral to converge.

---

## Applications

### Displacement from Velocity

If $v(t)$ is velocity, then displacement over $[t_1, t_2]$ is:

$$s = \int_{t_1}^{t_2} v(t)\,dt$$

and total distance travelled is:

$$d = \int_{t_1}^{t_2} |v(t)|\,dt$$

### Work Done by a Variable Force

$$W = \int_a^b F(x)\,dx$$

where $F(x)$ is the force as a function of position.

### Average Value of a Function

The **mean value** of $f$ on $[a, b]$ is:

$$\bar{f} = \frac{1}{b - a}\int_a^b f(x)\,dx$$

**Mean Value Theorem for Integrals.** If $f$ is continuous on $[a, b]$, there exists $c \in [a, b]$
such that $f(c) = \bar{f}$.

---

## Further Techniques

### Trigonometric Substitution

For integrands involving $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$, or $\sqrt{x^2 - a^2}$:

| Expression | Substitution | Identity |
| :--- | :--- | :--- |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2\theta = \cos^2\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2\theta - 1 = \tan^2\theta$ |

**Example.** Evaluate $\displaystyle\int \frac{1}{\sqrt{4 - x^2}}\,dx$.

Let $x = 2\sin\theta$, so $dx = 2\cos\theta\,d\theta$.

$$\int \frac{2\cos\theta}{2\cos\theta}\,d\theta = \int 1\,d\theta = \theta + C = \arcsin\!\left(\frac{x}{2}\right) + C$$

### Integrating Rational Functions of $\sin$ and $\cos$

The **Weierstrass substitution** $t = \tan\dfrac{x}{2}$ converts any rational function of $\sin x$
and $\cos x$ into a rational function of $t$:

$$\sin x = \frac{2t}{1 + t^2}, \qquad \cos x = \frac{1 - t^2}{1 + t^2}, \qquad dx = \frac{2\,dt}{1 + t^2}$$

**Example.** Evaluate $\displaystyle\int \frac{1}{1 + \sin x}\,dx$.

With $t = \tan(x/2)$:

$$\int \frac{1}{1 + \dfrac{2t}{1+t^2}} \cdot \frac{2\,dt}{1+t^2} = \int \frac{2\,dt}{(1+t)^2} = -\frac{2}{1+t} + C = -\frac{2}{1 + \tan(x/2)} + C$$

---

## Arc Length

The length of a curve $y = f(x)$ from $x = a$ to $x = b$ is:

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

For a parametric curve $(x(t), y(t))$ from $t = t_1$ to $t = t_2$:

$$L = \int_{t_1}^{t_2} \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

**Example.** Find the length of $y = \dfrac{x^2}{2}$ from $x = 0$ to $x = 1$.

$$\frac{dy}{dx} = x$$

$$L = \int_0^1 \sqrt{1 + x^2}\,dx$$

Let $x = \tan\theta$: $dx = \sec^2\theta\,d\theta$, $\sqrt{1 + x^2} = \sec\theta$.

$$L = \int_0^{\pi/4} \sec^3\theta\,d\theta = \left[\frac{1}{2}\sec\theta\tan\theta + \frac{1}{2}\ln|\sec\theta + \tan\theta|\right]_0^{\pi/4}$$

$$= \frac{1}{2}\sqrt{2} + \frac{1}{2}\ln(1 + \sqrt{2})$$
