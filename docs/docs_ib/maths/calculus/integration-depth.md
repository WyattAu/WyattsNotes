---
tags:
- maths
slug: integration-depth
description: Comprehensive guide to untitled for the International Baccalaureate.
title: Calculus
---



## Integration

Integration is the inverse operation of differentiation. Given the derivative of a function,
integration recovers the original function (up to an additive constant). It is a central operation
in calculus with wide-ranging applications in geometry, physics, and probability.

Two principal forms exist:

- **Indefinite integration** (antidifferentiation): finds the general antiderivative of a function,
  producing a family of functions differing by a constant.
- **Definite integration**: computes a numerical value representing the signed area under a curve
  between two limits.

These are linked by the Fundamental Theorem of Calculus, which unifies differentiation and
integration into a single coherent framework.

### Notation

$$
\int f(x)\,dx = F(x) + C
$$

where $F'(x) = f(x)$ and $C$ is the constant of integration. The symbol $\int$ is an elongated $S$
(for "sum"), $f(x)$ is the integrand, and $dx$ indicates the variable of integration.

---

## 1. Antiderivatives

### Definition

A function $F$ is an antiderivative of $f$ on an interval $I$ if $F'(x) = f(x)$ for all $x \in I$.
If $F$ is an antiderivative of $f$, then so is $F + C$ for any constant $C \in \mathbb{R}$.

### Basic Rules

#### Power Rule

For $n \neq -1$:

$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C
$$

#### Constant Multiple Rule

For $k \in \mathbb{R}$:

$$
\int k f(x)\,dx = k \int f(x)\,dx
$$

#### Sum and Difference Rule

$$
\int [f(x) \pm g(x)]\,dx = \int f(x)\,dx \pm \int g(x)\,dx
$$

#### Reciprocal Rule (Logarithmic)

$$
\int \frac{1}{x}\,dx = \ln|x| + C
$$

### Common Antiderivatives

| $f(x)$                     | $\int f(x)\,dx$                              |
| -------------------------- | -------------------------------------------- | ------ | ---- |
| $k$                        | $kx + C$                                     | | |
| $x^n$                      | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ | | |
| $\dfrac{1}{x}$             | $\ln                                         | x      | + C$ |
| $e^x$                      | $e^x + C$                                    | | |
| $a^x$                      | $\dfrac{a^x}{\ln a} + C$                     | | |
| $\sin x$                   | $-\cos x + C$                                | | |
| $\cos x$                   | $\sin x + C$                                 | | |
| $\sec^2 x$                 | $\tan x + C$                                 | | |
| $\csc^2 x$                 | $-\cot x + C$                                | | |
| $\sec x \tan x$            | $\sec x + C$                                 | | |
| $\csc x \cot x$            | $-\csc x + C$                                | | |
| $\tan x$                   | $\ln                                         | \sec x | + C$ |
| $\cot x$                   | $\ln                                         | \sin x | + C$ |
| $\frac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + C$                              | | |
| $\frac{1}{1 + x^2}$        | $\arctan x + C$                              | | |

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Find $\int (3x^4 - 5x^2 + 7)\,dx$**

$$
\begin{aligned}
\int (3x^4 - 5x^2 + 7)\,dx &= 3 \cdot \frac{x^5}{5} - 5 \cdot \frac{x^3}{3} + 7x + C \\[6pt]
&= \frac{3x^5}{5} - \frac{5x^3}{3} + 7x + C
\end{aligned}
$$

**Find $\int \left(\frac{2}{x} + 3e^x - \frac{1}{\cos^2 x}\right)\,dx$**

$$
\begin{aligned}
\int \left(\frac{2}{x} + 3e^x - \sec^2 x\right)\,dx &= 2\ln|x| + 3e^x - \tan x + C
\end{aligned}
$$

</details>
:::

---

## 2. Definite Integration

### Definite Integral as a Limit of a Riemann Sum

For a function $f$ continuous on $[a, b]$, the definite integral is defined as:

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x
$$

where $\Delta x = \dfrac{b - a}{n}$ and $x_i^*$ is a sample point in the $i$-th subinterval.

### Fundamental Theorem of Calculus -- Part 1

If $f$ is continuous on $[a, b]$ and $F$ is defined by:

$$
F(x) = \int_a^x f(t)\,dt
$$

then $F$ is differentiable on $(a, b)$ and:

$$
F'(x) = f(x)
$$

This establishes that differentiation and integration are inverse operations.

### Fundamental Theorem of Calculus -- Part 2 (Evaluation Theorem)

If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

This is typically written using bracket notation:

$$
\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)
$$

### Area Under a Curve

If $f(x) \geq 0$ on $[a, b]$, then $\int_a^b f(x)\,dx$ gives the area between the curve $y = f(x)$,
the $x$-axis, and the vertical lines $x = a$ and $x = b$.

If $f(x)$ changes sign on $[a, b]$, the integral gives the **net** (signed) area. The total area is
computed by splitting at the zeros of $f$ and taking absolute values:

$$
\mathrm{Total area} = \int_a^b |f(x)|\,dx
$$

<DesmosGraph title="Integration as Area Under a Curve" expressions={["\int_{a}^{b} f(x) \, dx"]} width={800} height={500} />

Adjust the sliders to change the function and limits, and observe how the shaded area approximates
the definite integral.

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Evaluate $\int_1^3 (x^2 + 1)\,dx$**

$$
\begin{aligned}
\int_1^3 (x^2 + 1)\,dx &= \left[\frac{x^3}{3} + x\right]_1^3 \\[6pt]
&= \left(\frac{27}{3} + 3\right) - \left(\frac{1}{3} + 1\right) \\[6pt]
&= 12 - \frac{4}{3} = \frac{32}{3}
\end{aligned}
$$

**Find the area enclosed by $y = x^2 - 4$ and the $x$-axis.**

The curve crosses the $x$-axis at $x = -2$ and $x = 2$.

$$
\begin{aligned}
\mathrm{Area} &= \int_{-2}^2 |x^2 - 4|\,dx = \int_{-2}^2 (4 - x^2)\,dx \\[6pt]
&= \left[4x - \frac{x^3}{3}\right]_{-2}^2 \\[6pt]
&= \left(8 - \frac{8}{3}\right) - \left(-8 + \frac{8}{3}\right) = \frac{32}{3}
\end{aligned}
$$

</details>
:::

---

## 3. Integration Techniques

### 3.1 Substitution ($u$-Substitution)

Substitution is the reverse of the chain rule. Given an integral containing a composite function,
choose a substitution $u = g(x)$ such that $du = g'(x)\,dx$ transforms the integral into a simpler
form.

**General procedure:**

1. Identify an inner function and set $u = g(x)$.
2. Compute $du = g'(x)\,dx$ and solve for $dx$.
3. Rewrite the entire integral in terms of $u$.
4. Evaluate the integral with respect to $u$.
5. Substitute back $x$ (for indefinite integrals) or change the limits (for definite integrals).

**Changing limits for definite integrals:**

$$
\int_a^b f(g(x))\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du
$$

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Find $\int 2x\sqrt{x^2 + 1}\,dx$**

Let $u = x^2 + 1$, then $du = 2x\,dx$.

$$
\int 2x\sqrt{x^2 + 1}\,dx = \int \sqrt{u}\,du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C
$$

**Evaluate $\int_0^2 \frac{x}{x^2 + 1}\,dx$**

Let $u = x^2 + 1$, $du = 2x\,dx$. When $x = 0$, $u = 1$; when $x = 2$, $u = 5$.

$$
\int_0^2 \frac{x}{x^2 + 1}\,dx = \frac{1}{2}\int_1^5 \frac{1}{u}\,du = \frac{1}{2}\Big[\ln|u|\Big]_1^5 = \frac{1}{2}\ln 5
$$

</details>
:::

### 3.2 Integration by Parts

Integration by parts is the reverse of the product rule. The formula is:

$$
\int u\,dv = uv - \int v\,du
$$

**Choosing $u$ and $dv$:** Use the LIATE priority rule (Logarithmic, Inverse trigonometric,
Algebraic, Trigonometric, Exponential) to select $u$ as the function that appears first in the list.

Integration by parts may need to be applied repeatedly. For integrals of the form
$\int e^{ax}\sin(bx)\,dx$ or $\int e^{ax}\cos(bx)\,dx$, apply integration by parts twice and solve
the resulting equation algebraically.

**Tabular (DI) method:** For integrals of the form $\int f(x) g(x)\,dx$ where one factor
differentiates to zero after finitely many steps, the tabular method provides an efficient
alternative to repeated application of the formula.

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Find $\int x e^x\,dx$**

Let $u = x$, $dv = e^x\,dx$. Then $du = dx$ and $v = e^x$.

$$
\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C = (x - 1)e^x + C
$$

**Find $\int x^2 \sin x\,dx$**

Apply integration by parts twice.

First: $u = x^2$, $dv = \sin x\,dx$, so $du = 2x\,dx$, $v = -\cos x$.

$$
\int x^2 \sin x\,dx = -x^2 \cos x + 2\int x \cos x\,dx
$$

Second: $u = x$, $dv = \cos x\,dx$, so $du = dx$, $v = \sin x$.

$$
\begin{aligned}
\int x^2 \sin x\,dx &= -x^2 \cos x + 2\left(x\sin x - \int \sin x\,dx\right) \\[6pt]
&= -x^2 \cos x + 2x\sin x + 2\cos x + C
\end{aligned}
$$

</details>
:::

### 3.3 Partial Fractions

When the integrand is a rational function $\dfrac{P(x)}{Q(x)}$ where $\deg P < \deg Q$ and $Q$
factors into linear or irreducible quadratic factors, partial fraction decomposition converts the
integrand into a sum of simpler fractions.

**Decomposition rules:**

| Factor in $Q(x)$              | Term in decomposition                                                          |
| ----------------------------- | ------------------------------------------------------------------------------ |
| $(ax + b)$                    | $\dfrac{A}{ax + b}$                                                            |
| $(ax + b)^k$                  | $\dfrac{A_1}{ax + b} + \dfrac{A_2}{(ax+b)^2} + \cdots + \dfrac{A_k}{(ax+b)^k}$ |
| $ax^2 + bx + c$ (irreducible) | $\dfrac{Ax + B}{ax^2 + bx + c}$                                                |

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Find $\int \frac{5x + 1}{(x+1)(x-2)}\,dx$**

Decompose: $\dfrac{5x + 1}{(x+1)(x-2)} = \dfrac{A}{x+1} + \dfrac{B}{x-2}$

$$
5x + 1 = A(x - 2) + B(x + 1)
$$

Setting $x = -1$: $-5 + 1 = A(-3) \implies A = \frac{4}{3}$

Setting $x = 2$: $10 + 1 = B(3) \implies B = \frac{11}{3}$

$$
\int \frac{5x + 1}{(x+1)(x-2)}\,dx = \frac{4}{3}\ln|x+1| + \frac{11}{3}\ln|x-2| + C
$$

</details>
:::

### 3.4 Trigonometric Integrals

Several standard techniques apply to integrals involving trigonometric functions.

**Pythagorean identities for conversion:**

$$
\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}
$$

These are used to reduce the power of trigonometric functions in integrands.

**Products to sums:**

$$
\sin A \cos B = \frac{1}{2}[\sin(A+B) + \sin(A-B)]
$$

$$
\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]
$$

$$
\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]
$$

**Using substitution with trigonometric derivatives:** Recall that $\dfrac{d}{dx}(\sin x) = \cos x$
and $\dfrac{d}{dx}(\cos x) = -\sin x$. Many trigonometric integrals yield to $u$-substitution when
the derivative of one trigonometric factor is present.

**Integrals of the form $\int \tan^n x\,dx$:** Rewrite in terms of $\sec^2 x$ and use
$\dfrac{d}{dx}(\tan x) = \sec^2 x$.

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Find $\int \sin^2 x\,dx$**

$$
\int \sin^2 x\,dx = \int \frac{1 - \cos 2x}{2}\,dx = \frac{x}{2} - \frac{\sin 2x}{4} + C
$$

**Find $\int \sin^3 x\,dx$**

$$
\begin{aligned}
\int \sin^3 x\,dx &= \int \sin x (1 - \cos^2 x)\,dx \\[6pt]
&= \int \sin x\,dx - \int \sin x \cos^2 x\,dx \\[6pt]
&= -\cos x + \frac{\cos^3 x}{3} + C
\end{aligned}
$$

(using $u = \cos x$, $du = -\sin x\,dx$ for the second integral)

</details>
:::

---

## 4. Applications of Integration

### 4.1 Area Between Two Curves

Given two continuous functions $f$ and $g$ with $f(x) \geq g(x)$ on $[a, b]$, the area between the
curves is:

$$
A = \int_a^b [f(x) - g(x)]\,dx
$$

If the curves intersect, find the points of intersection and split the integral accordingly so that
the integrand $|f(x) - g(x)|$ is always non-negative.

**Horizontal strips:** When integrating with respect to $y$, the formula becomes:

$$
A = \int_c^d [f(y) - g(y)]\,dy
$$

where the curves are expressed as $x = f(y)$ and $x = g(y)$.

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Find the area between $y = x^2$ and $y = 2x$.**

Intersection: $x^2 = 2x \implies x = 0$ or $x = 2$. On $[0, 2]$, $2x \geq x^2$.

$$
A = \int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}
$$

</details>
:::

### 4.2 Volumes of Revolution

When a region bounded by $y = f(x)$, the $x$-axis, and the lines $x = a$, $x = b$ is revolved about
the $x$-axis, the volume of the solid of revolution is:

$$
V = \pi \int_a^b [f(x)]^2\,dx
$$

**Revolution about the $y$-axis:**

$$
V = \pi \int_c^d [g(y)]^2\,dy
$$

where $x = g(y)$.

**Revolution about a horizontal line $y = k$:**

$$
V = \pi \int_a^b [f(x) - k]^2\,dx
$$

**Washer method (volume between two surfaces):**

$$
V = \pi \int_a^b \left([f(x)]^2 - [g(x)]^2\right)\,dx
$$

where $f(x) \geq g(x) \geq 0$ on $[a, b]$.

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Find the volume generated by revolving $y = \sqrt{x}$ about the $x$-axis from $x = 0$ to
$x = 4$.**

$$
\begin{aligned}
V &= \pi \int_0^4 (\sqrt{x})^2\,dx = \pi \int_0^4 x\,dx \\[6pt]
&= \pi \left[\frac{x^2}{2}\right]_0^4 = 8\pi
\end{aligned}
$$

</details>
:::

### 4.3 Kinematics

Integration connects the kinematic quantities:

$$
v(t) = \int a(t)\,dt + v_0
$$

$$
s(t) = \int v(t)\,dt + s_0
$$

where $a(t)$ is acceleration, $v(t)$ is velocity, $s(t)$ is displacement, and $v_0$, $s_0$ are
initial conditions.

**Key relationships:**

- The **displacement** over a time interval $[t_1, t_2]$ is
  $\displaystyle\int_{t_1}^{t_2} v(t)\,dt$.
- The **total distance travelled** is $\displaystyle\int_{t_1}^{t_2} |v(t)|\,dt$.
- The velocity is the derivative of displacement: $v = \dfrac{ds}{dt}$.
- The acceleration is the derivative of velocity: $a = \dfrac{dv}{dt}$.

:::info[Examples]

<details>
    <summary>Expand</summary>
    **A particle moves with velocity $v(t) = 6t^2 - 4t$ m/s for $t \geq 0$. Find the displacement and
total distance in the first 3 seconds.**

Displacement:

$$
\int_0^3 (6t^2 - 4t)\,dt = \left[2t^3 - 2t^2\right]_0^3 = 54 - 18 = 36 \mathrm{ m}
$$

Total distance: find when $v(t) = 0$: $6t^2 - 4t = 0 \implies t = 0$ or $t = \frac{2}{3}$.

$$
\begin{aligned}
\mathrm{Distance} &= \int_0^{2/3} |6t^2 - 4t|\,dt + \int_{2/3}^3 |6t^2 - 4t|\,dt \\[6pt]
&= \int_0^{2/3} (4t - 6t^2)\,dt + \int_{2/3}^3 (6t^2 - 4t)\,dt \\[6pt]
&= \left[2t^2 - 2t^3\right]_0^{2/3} + \left[2t^3 - 2t^2\right]_{2/3}^3 \\[6pt]
&= \frac{8}{27} + \left(36 - \left(-\frac{8}{27}\right)\right) = \frac{8}{27} + 36 + \frac{8}{27} = \frac{988}{27} \approx 36.6 \mathrm{ m}
\end{aligned}
$$

</details>
:::

---

## 5. Properties of Definite Integrals

These properties follow from the definition of the definite integral and are essential for
simplifying computations.

### Linearity

$$
\int_a^b [k f(x) + l g(x)]\,dx = k\int_a^b f(x)\,dx + l\int_a^b g(x)\,dx
$$

for constants $k, l \in \mathbb{R}$.

### Reversal of Limits

$$
\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx
$$

### Interval of Zero Length

$$
\int_a^a f(x)\,dx = 0
$$

### Additivity Over Intervals

$$
\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx
$$

for any $c \in [a, b]$.

### Comparison Properties

If $f(x) \geq 0$ for all $x \in [a, b]$, then $\displaystyle\int_a^b f(x)\,dx \geq 0$.

If $f(x) \geq g(x)$ for all $x \in [a, b]$, then
$\displaystyle\int_a^b f(x)\,dx \geq \int_a^b g(x)\,dx$.

### Bounds on the Integral

If $m \leq f(x) \leq M$ for all $x \in [a, b]$, then:

$$
m(b - a) \leq \int_a^b f(x)\,dx \leq M(b - a)
$$

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Given $\int_1^3 f(x)\,dx = 5$ and $\int_1^3 g(x)\,dx = -2$, find $\int_3^1 [3f(x) - 2g(x)]\,dx$.**

$$
\begin{aligned}
\int_3^1 [3f(x) - 2g(x)]\,dx &= -\int_1^3 [3f(x) - 2g(x)]\,dx \\[6pt]
&= -\left(3 \cdot 5 - 2 \cdot (-2)\right) = -(15 + 4) = -19
\end{aligned}
$$

</details>
:::

---

## 6. Improper Integrals (HL)

Improper integrals extend the concept of definite integration to cases where the interval of
integration is unbounded or the integrand has a vertical asymptote within (or at an endpoint of) the
interval of integration.

### Type 1: Infinite Limits of Integration

$$
\int_a^{\infty} f(x)\,dx = \lim_{t \to \infty} \int_a^t f(x)\,dx
$$

$$
\int_{-\infty}^b f(x)\,dx = \lim_{t \to -\infty} \int_t^b f(x)\,dx
$$

$$
\int_{-\infty}^{\infty} f(x)\,dx = \int_{-\infty}^c f(x)\,dx + \int_c^{\infty} f(x)\,dx
$$

Both limits must converge independently for the integral to converge.

### Type 2: Integrands with Vertical Asymptotes

If $f$ has a vertical asymptote at $x = a$:

$$
\int_a^b f(x)\,dx = \lim_{t \to a^+} \int_t^b f(x)\,dx
$$

If $f$ has a vertical asymptote at $x = b$:

$$
\int_a^b f(x)\,dx = \lim_{t \to b^-} \int_a^t f(x)\,dx
$$

If $f$ has a vertical asymptote at an interior point $x = c \in (a, b)$:

$$
\int_a^b f(x)\,dx = \lim_{t \to c^-} \int_a^t f(x)\,dx + \lim_{t \to c^+} \int_t^b f(x)\,dx
$$

### Convergence and Divergence

An improper integral **converges** if the corresponding limit exists and is finite. It **diverges**
otherwise.

**$p$-test for convergence:** The integral $\displaystyle\int_1^{\infty} \frac{1}{x^p}\,dx$
converges if and only if $p > 1$, in which case:

$$
\int_1^{\infty} \frac{1}{x^p}\,dx = \frac{1}{p - 1}
$$

Similarly, $\displaystyle\int_0^1 \frac{1}{x^p}\,dx$ converges if and only if $p < 1$.

**Comparison test:** If $0 \leq f(x) \leq g(x)$ for all $x \geq a$, and $\int_a^{\infty} g(x)\,dx$
converges, then $\int_a^{\infty} f(x)\,dx$ also converges. Conversely, if $\int_a^{\infty} f(x)\,dx$
diverges, then $\int_a^{\infty} g(x)\,dx$ also diverges.

:::info[Examples]

<details>
    <summary>Expand</summary>
    **Determine whether $\displaystyle\int_1^{\infty} \frac{1}{x^2}\,dx$ converges.**

$$
\begin{aligned}
\int_1^{\infty} \frac{1}{x^2}\,dx &= \lim_{t \to \infty} \int_1^t x^{-2}\,dx = \lim_{t \to \infty} \left[-\frac{1}{x}\right]_1^t \\[6pt]
&= \lim_{t \to \infty} \left(-\frac{1}{t} + 1\right) = 1
\end{aligned}
$$

The integral converges to $1$. (Consistent with the $p$-test: $p = 2 > 1$.)

**Determine whether $\displaystyle\int_0^1 \frac{1}{\sqrt{x}}\,dx$ converges.**

$$
\begin{aligned}
\int_0^1 \frac{1}{\sqrt{x}}\,dx &= \lim_{t \to 0^+} \int_t^1 x^{-1/2}\,dx = \lim_{t \to 0^+} \Big[2\sqrt{x}\Big]_t^1 \\[6pt]
&= \lim_{t \to 0^+} (2 - 2\sqrt{t}) = 2
\end{aligned}
$$

The integral converges to $2$. (Consistent with the $p$-test: $p = \frac{1}{2} < 1$.)

</details>
:::

---

## 7. Practice Problems

:::info[Problem 1]

<details>
    <summary>Find $\int \frac{x^3 + 2x}{\sqrt{x^2 + 1}}\,dx$</summary>
    Let $u = x^2 + 1$, $du = 2x\,dx$. Note that
$x^3 + 2x = x(x^2 + 1) + x = xu + \frac{u - 1}{2} + \frac{1}{2}$.

Alternatively, split:
$\dfrac{x^3 + 2x}{\sqrt{x^2 + 1}} = \dfrac{x(x^2 + 1)}{\sqrt{x^2 + 1}} + \dfrac{x}{\sqrt{x^2 + 1}} = x\sqrt{x^2 + 1} + \dfrac{x}{\sqrt{x^2 + 1}}$.

$$
\begin{aligned}
\int x\sqrt{x^2 + 1}\,dx &= \frac{1}{3}(x^2 + 1)^{3/2} + C_1 \\[6pt]
\int \frac{x}{\sqrt{x^2 + 1}}\,dx &= \sqrt{x^2 + 1} + C_2
\end{aligned}
$$

$$
\int \frac{x^3 + 2x}{\sqrt{x^2 + 1}}\,dx = \frac{1}{3}(x^2 + 1)^{3/2} + \sqrt{x^2 + 1} + C
$$

</details>
:::

:::info[Problem 2]

<details>
    <summary>Evaluate $\int_0^{\pi/2} x\sin x\,dx$</summary>
    Integration by parts: $u = x$, $dv = \sin x\,dx$, so $du = dx$, $v = -\cos x$.

$$
\begin{aligned}
\int_0^{\pi/2} x\sin x\,dx &= \Big[-x\cos x\Big]_0^{\pi/2} + \int_0^{\pi/2} \cos x\,dx \\[6pt]
&= (0 - 0) + \Big[\sin x\Big]_0^{\pi/2} = 1
\end{aligned}
$$

</details>
:::

:::info[Problem 3]

<details>
    <summary>Find the area enclosed by $y = x^3$ and $y = x$.</summary>
    Intersection points: $x^3 = x \implies x(x^2 - 1) = 0 \implies x = -1, 0, 1$.

On $[-1, 0]$: $x^3 \geq x$. On $[0, 1]$: $x \geq x^3$.

$$
\begin{aligned}
A &= \int_{-1}^0 (x^3 - x)\,dx + \int_0^1 (x - x^3)\,dx \\[6pt]
&= \left[\frac{x^4}{4} - \frac{x^2}{2}\right]_{-1}^0 + \left[\frac{x^2}{2} - \frac{x^4}{4}\right]_0^1 \\[6pt]
&= \left(0 - \frac{1}{4} + \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}
\end{aligned}
$$

</details>
:::

:::info[Problem 4]

<details>
    <summary>Find the volume of revolution when the region bounded by $y = \ln x$, $x = e$, and the $x$-axis is rotated about the $x$-axis.</summary>
    The curve $y = \ln x$ meets the $x$-axis at $x = 1$.

$$
\begin{aligned}
V &= \pi \int_1^e (\ln x)^2\,dx
\end{aligned}
$$

Integration by parts with $u = (\ln x)^2$, $dv = dx$: $du = \dfrac{2\ln x}{x}\,dx$, $v = x$.

$$
\begin{aligned}
\int (\ln x)^2\,dx &= x(\ln x)^2 - 2\int \ln x\,dx
\end{aligned}
$$

Apply parts again for $\int \ln x\,dx$: $u = \ln x$, $dv = dx$, so $\int \ln x\,dx = x\ln x - x$.

$$
\begin{aligned}
\int (\ln x)^2\,dx &= x(\ln x)^2 - 2(x\ln x - x) + C \\[6pt]
&= x(\ln x)^2 - 2x\ln x + 2x + C
\end{aligned}
$$

Evaluating from $1$ to $e$:

$$
\begin{aligned}
\Big[x(\ln x)^2 - 2x\ln x + 2x\Big]_1^e &= (e - 2e + 2e) - (0 - 0 + 2) = e - 2
\end{aligned}
$$

$$
V = \pi(e - 2)
$$

</details>
:::

:::info[Problem 5 (HL)]

<details>
    <summary>Use partial fractions to find $\int \frac{3x + 7}{(x + 2)(x - 1)}\,dx$.</summary>
    $$
\frac{3x + 7}{(x+2)(x-1)} = \frac{A}{x+2} + \frac{B}{x-1}
$$

$$
3x + 7 = A(x - 1) + B(x + 2)
$$

$x = 1$: $10 = 3B \implies B = \dfrac{10}{3}$

$x = -2$: $1 = -3A \implies A = -\dfrac{1}{3}$

$$
\int \frac{3x + 7}{(x+2)(x-1)}\,dx = -\frac{1}{3}\ln|x+2| + \frac{10}{3}\ln|x-1| + C
$$

</details>
:::

:::info[Problem 6]

<details>
    <summary>A particle moves with acceleration $a(t) = 6t - 2$ m/s$^2$. Initially, $v(0) = 4$ m/s and $s(0) = 0$ m. Find $s(t)$ and the displacement after 3 seconds.</summary>
    $$
v(t) = \int (6t - 2)\,dt + 4 = 3t^2 - 2t + 4
$$

$$
s(t) = \int (3t^2 - 2t + 4)\,dt + 0 = t^3 - t^2 + 4t
$$

Displacement at $t = 3$:

$$
s(3) = 27 - 9 + 12 = 30 \mathrm{ m}
$$

</details>
:::

:::info[Problem 7 (HL)]

<details>
    <summary>Determine whether $\displaystyle\int_2^{\infty} \frac{1}{x(\ln x)^2}\,dx$ converges, and evaluate if it does.</summary>
    Let $u = \ln x$, $du = \dfrac{1}{x}\,dx$. When $x = 2$, $u = \ln 2$; when $x \to \infty$,
$u \to \infty$.

$$
\begin{aligned}
\int_2^{\infty} \frac{1}{x(\ln x)^2}\,dx &= \int_{\ln 2}^{\infty} \frac{1}{u^2}\,du = \lim_{t \to \infty} \int_{\ln 2}^t u^{-2}\,du \\[6pt]
&= \lim_{t \to \infty} \left[-\frac{1}{u}\right]_{\ln 2}^t = \lim_{t \to \infty} \left(-\frac{1}{t} + \frac{1}{\ln 2}\right) = \frac{1}{\ln 2}
\end{aligned}
$$

The integral converges to $\dfrac{1}{\ln 2}$.

</details>
:::

:::info[Problem 8 (HL)]

<details>
    <summary>Evaluate $\int \frac{x^2}{x^2 - 1}\,dx$ using polynomial long division and partial fractions.</summary>
    Since $\deg(\mathrm{numerator}) = \deg(\mathrm{denominator})$, perform long division first:

$$
\frac{x^2}{x^2 - 1} = 1 + \frac{1}{x^2 - 1} = 1 + \frac{1}{(x-1)(x+1)}
$$

Partial fractions: $\dfrac{1}{(x-1)(x+1)} = \dfrac{A}{x-1} + \dfrac{B}{x+1}$

$1 = A(x+1) + B(x-1)$

$x = 1$: $A = \dfrac{1}{2}$, $x = -1$: $B = -\dfrac{1}{2}$

$$
\begin{aligned}
\int \frac{x^2}{x^2 - 1}\,dx &= \int \left(1 + \frac{1}{2(x-1)} - \frac{1}{2(x+1)}\right)\,dx \\[6pt]
&= x + \frac{1}{2}\ln|x-1| - \frac{1}{2}\ln|x+1| + C
\end{aligned}
$$

</details>
:::

:::info[Problem 9]

<details>
    <summary>Evaluate $\int_0^1 \frac{e^x}{1 + e^x}\,dx$.</summary>
    Let $u = 1 + e^x$, $du = e^x\,dx$. When $x = 0$, $u = 2$; when $x = 1$, $u = 1 + e$.

$$
\int_0^1 \frac{e^x}{1 + e^x}\,dx = \int_2^{1+e} \frac{1}{u}\,du = \Big[\ln u\Big]_2^{1+e} = \ln(1 + e) - \ln 2
$$

</details>
:::

:::info[Problem 10 (HL)]

<details>
    <summary>Find $\int e^x \cos x\,dx$ using integration by parts twice.</summary>
    Let $I = \displaystyle\int e^x \cos x\,dx$.

First application: $u = e^x$, $dv = \cos x\,dx$, so $du = e^x\,dx$, $v = \sin x$.

$$
I = e^x \sin x - \int e^x \sin x\,dx
$$

Second application on $\int e^x \sin x\,dx$: $u = e^x$, $dv = \sin x\,dx$, so $du = e^x\,dx$,
$v = -\cos x$.

$$
\int e^x \sin x\,dx = -e^x \cos x + \int e^x \cos x\,dx = -e^x \cos x + I
$$

Substituting back:

$$
I = e^x \sin x - (-e^x \cos x + I) = e^x \sin x + e^x \cos x - I
$$

$$
2I = e^x (\sin x + \cos x) \implies I = \frac{e^x (\sin x + \cos x)}{2} + C
$$

</details>
:::

---

## Cross-References

- **Differentiation** -- Integration is the inverse operation of differentiation. See the
  [Number and Algebra](../Number-and-algebra/Number-and-algebra) notes for function fundamentals
  including derivative rules that motivate integration techniques.
- **Functions** -- Domain and range considerations determine when antiderivatives are valid. See
  [Number and Algebra](../Number-and-algebra/Number-and-algebra) for function fundamentals.
- **Complex Numbers** -- The exponential form $e^{i\theta} = \cos\theta + i\sin\theta$ provides an
  elegant derivation of trigonometric integral results. See
  [Complex Numbers](../Number-and-algebra/Complex).
- **Logic** -- Proof techniques (direct proof, contradiction) are used to justify properties of
  integrals. See [Logic](../Discrete-maths/logic).
