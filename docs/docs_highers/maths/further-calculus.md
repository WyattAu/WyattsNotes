---
title: Further Calculus
date: 2026-04-14
tags:
  - Mathematics
  - Advanced Highers
categories:
  - Mathematics
slug: further-calculus
---

:::info

This chapter covers **Advanced Higher** Mathematics content.

:::

## Further Differentiation

### Implicit Differentiation

When a function is defined implicitly (e.g., $x^2 + y^2 = 25$), differentiate both sides with
respect to $x$, treating $y$ as a function of $x$.

$$
\frac{d}{dx}[y^n] = ny^{n-1}\frac{dy}{dx}
$$

This is the chain rule applied to $y(x)^n$: $\frac{d}{dx}[y^n] = ny^{n-1} \cdot y'(x)$.

**Example:** Find $\dfrac{dy}{dx}$ for $x^2 + y^2 = 25$.

$$
2x + 2y\frac{dy}{dx} = 0
$$

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

This makes geometric sense: on the upper semicircle ($y > 0$), increasing $x$ decreases $y$, giving
a negative slope. On the lower semicircle ($y < 0$), the slope is positive.

**Example:** Find $\dfrac{dy}{dx}$ for $x^3 + y^3 = 6xy$.

Differentiate implicitly:

$$
3x^2 + 3y^2\frac{dy}{dx} = 6y + 6x\frac{dy}{dx}
$$

$$
3y^2\frac{dy}{dx} - 6x\frac{dy}{dx} = 6y - 3x^2
$$

$$
\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2
$$

$$
\frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}
$$

**Example:** Find the tangent to $x^2 + y^2 + 2x - 4y = 11$ at the point $(1, 2)$.

Verify: $1 + 4 + 2 - 8 = -1 \neq 11$. The point is not on the curve. Let us find the gradient
function first:

$$
2x + 2y\frac{dy}{dx} + 2 - 4\frac{dy}{dx} = 0
$$

$$
(2y - 4)\frac{dy}{dx} = -2x - 2
$$

$$
\frac{dy}{dx} = \frac{-2x - 2}{2y - 4} = \frac{-x - 1}{y - 2}
$$

**Second derivatives implicitly.** Differentiate $\frac{dy}{dx}$ again with respect to $x$, using
the chain rule wherever $y$ appears.

### Parametric Differentiation

If $x = f(t)$ and $y = g(t)$, then:

$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}
$$

This follows from the chain rule: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$.

**Second Derivative:**

$$
\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}
$$

**Example:** A curve has parametric equations $x = 2\cos t$, $y = \sin 2t$. Find $\dfrac{dy}{dx}$ at
$t = \dfrac{\pi}{4}$.

$$
\frac{dx}{dt} = -2\sin t, \quad \frac{dy}{dt} = 2\cos 2t
$$

$$
\frac{dy}{dx} = \frac{2\cos 2t}{-2\sin t} = -\frac{\cos 2t}{\sin t}
$$

At $t = \dfrac{\pi}{4}$:

$$
\frac{dy}{dx} = -\frac{\cos(\pi/2)}{\sin(\pi/4)} = -\frac{0}{1/\sqrt{2}} = 0
$$

**Example:** Find $\frac{d^2y}{dx^2}$ for $x = t^2$, $y = t^3$.

$$
\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}
$$

$$
\frac{d^2y}{dx^2} = \frac{d/dt(3t/2)}{dx/dt} = \frac{3/2}{2t} = \frac{3}{4t}
$$

### Differentiation of Inverse Trigonometric Functions

$$
\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1 - x^2}}, \quad |x| < 1
$$

$$
\frac{d}{dx}[\arccos x] = \frac{-1}{\sqrt{1 - x^2}}, \quad |x| < 1
$$

$$
\frac{d}{dx}[\arctan x] = \frac{1}{1 + x^2}
$$

**Proof that $\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}$.** Let $y = \arctan x$, so $x = \tan y$.
Differentiating implicitly: $1 = \sec^2 y \cdot \frac{dy}{dx}$, giving
$\frac{dy}{dx} = \frac{1}{\sec^2 y} = \frac{1}{1 + \tan^2 y} = \frac{1}{1 + x^2}$.

**Example:** Differentiate $f(x) = \arcsin(3x)$.

$$
f'(x) = \frac{1}{\sqrt{1 - (3x)^2}} \cdot 3 = \frac{3}{\sqrt{1 - 9x^2}}
$$

### Logarithmic Differentiation

For functions of the form $y = [f(x)]^{g(x)}$, take natural logarithms first:

$$
\ln y = g(x) \ln f(x)
$$

Then differentiate implicitly.

**Example:** Differentiate $y = x^x$.

$$
\ln y = x \ln x
$$

$$
\frac{1}{y}\frac{dy}{dx} = \ln x + x \cdot \frac{1}{x} = \ln x + 1
$$

$$
\frac{dy}{dx} = y(\ln x + 1) = x^x(\ln x + 1)
$$

**Example:** Differentiate $y = x^{\sin x}$.

$$
\ln y = \sin x \cdot \ln x
$$

$$
\frac{1}{y}\frac{dy}{dx} = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x}
$$

$$
\frac{dy}{dx} = x^{\sin x}\!\left(\cos x \ln x + \frac{\sin x}{x}\right)
$$

### Related Rates

Related rates problems involve finding the rate of change of one quantity given the rate of change
of a related quantity.

**Example:** A ladder 5 m long leans against a wall. The bottom slides away at 0.5 m/s. How fast is
the top sliding down when the bottom is 3 m from the wall?

Let $x$ be the distance from the wall and $y$ be the height. Then $x^2 + y^2 = 25$.

Differentiate: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$.

When $x = 3$: $y = \sqrt{25 - 9} = 4$.

$$
2(3)(0.5) + 2(4)\frac{dy}{dt} = 0 \implies 3 + 8\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{3}{8} \text{ m/s}
$$

---

## Further Integration

### Integration by Parts

$$
\int u \, dv = uv - \int v \, du
$$

**Proof.** By the product rule: $\frac{d}{dx}[uv] = u'v + uv'$, so $uv' = \frac{d}{dx}[uv] - u'v$.
Integrating both sides: $\int uv'\,dx = uv - \int u'v\,dx$.

**LIATE rule** for choosing $u$ (in order of priority): Logarithmic, Inverse trig, Algebraic,
Trigonometric, Exponential. Choose $u$ as the function that appears earliest in this list.

**Example:** Evaluate $\int x e^{2x} \, dx$.

Let $u = x$, $dv = e^{2x} dx$. Then $du = dx$, $v = \dfrac{e^{2x}}{2}$.

$$
\int x e^{2x} \, dx = x \cdot \frac{e^{2x}}{2} - \int \frac{e^{2x}}{2} \, dx = \frac{x e^{2x}}{2} - \frac{e^{2x}}{4} + C = \frac{e^{2x}(2x - 1)}{4} + C
$$

**Example:** Evaluate $\int x^2 \cos x \, dx$.

Let $u = x^2$, $dv = \cos x \, dx$. Then $du = 2x \, dx$, $v = \sin x$.

$$
= x^2 \sin x - \int 2x \sin x \, dx
$$

Apply integration by parts again for $\int x \sin x \, dx$:

Let $u = x$, $dv = \sin x \, dx$. Then $du = dx$, $v = -\cos x$.

$$
\int x \sin x \, dx = -x\cos x + \int \cos x \, dx = -x\cos x + \sin x
$$

So:

$$
\int x^2 \cos x \, dx = x^2 \sin x - 2(-x\cos x + \sin x) + C = x^2 \sin x + 2x\cos x - 2\sin x + C
$$

### Cyclic Integration by Parts

Some integrals require integration by parts twice, then solving algebraically.

**Example:** Evaluate $\int e^x \cos x \, dx$.

Let $u = e^x$, $dv = \cos x\,dx$. Then $du = e^x\,dx$, $v = \sin x$.

$$
I = e^x \sin x - \int e^x \sin x\,dx
$$

Apply parts again for $\int e^x \sin x\,dx$: $u = e^x$, $dv = \sin x\,dx$.

$$
\int e^x \sin x\,dx = -e^x \cos x + \int e^x \cos x\,dx = -e^x \cos x + I
$$

Substituting back:

$$
I = e^x \sin x - (-e^x \cos x + I) = e^x \sin x + e^x \cos x - I
$$

$$
2I = e^x(\sin x + \cos x)
$$

$$
I = \frac{e^x(\sin x + \cos x)}{2} + C
$$

### Integration by Substitution

$$
\int f(g(x))g'(x) \, dx = \int f(u) \, du \quad \text{where } u = g(x)
$$

**Example:** Evaluate $\int \dfrac{x}{x^2 + 1} \, dx$.

Let $u = x^2 + 1$, so $du = 2x \, dx$, giving $\dfrac{1}{2} du = x \, dx$.

$$
\int \frac{x}{x^2 + 1} \, dx = \frac{1}{2}\int \frac{du}{u} = \frac{1}{2}\ln|u| + C = \frac{1}{2}\ln(x^2 + 1) + C
$$

### Definite Integration by Substitution

When using substitution in a definite integral, you must change the limits.

**Example:** Evaluate $\displaystyle\int_0^1 \frac{2x}{x^2 + 1}\,dx$.

Let $u = x^2 + 1$. When $x = 0$, $u = 1$. When $x = 1$, $u = 2$.

$$
\int_0^1 \frac{2x}{x^2 + 1}\,dx = \int_1^2 \frac{du}{u} = [\ln u]_1^2 = \ln 2 - \ln 1 = \ln 2
$$

### Partial Fractions in Integration

Rational functions can be decomposed using partial fractions to make them easier to integrate.

**Example:** Evaluate $\displaystyle\int \frac{2x + 1}{(x + 1)(x - 2)} \, dx$.

$$
\frac{2x + 1}{(x + 1)(x - 2)} = \frac{A}{x + 1} + \frac{B}{x - 2}
$$

$$
2x + 1 = A(x - 2) + B(x + 1)
$$

$x = -1$: $-2 + 1 = A(-3)$, so $A = \dfrac{1}{3}$.

$x = 2$: $4 + 1 = B(3)$, so $B = \dfrac{5}{3}$.

$$
\int \frac{2x + 1}{(x + 1)(x - 2)} \, dx = \frac{1}{3}\int \frac{dx}{x + 1} + \frac{5}{3}\int \frac{dx}{x - 2} = \frac{1}{3}\ln|x + 1| + \frac{5}{3}\ln|x - 2| + C
$$

### Integration of Trigonometric Functions

$$
\int \tan x \, dx = -\ln|\cos x| + C = \ln|\sec x| + C
$$

$$
\int \cot x \, dx = \ln|\sin x| + C
$$

$$
\int \sec x \, dx = \ln|\sec x + \tan x| + C
$$

**Example:** Evaluate $\int \tan^2 x \, dx$.

$$
\int \tan^2 x \, dx = \int (\sec^2 x - 1) \, dx = \tan x - x + C
$$

**Example:** Evaluate $\displaystyle\int \frac{dx}{\sin^2 x + 4\cos^2 x}$.

Divide numerator and denominator by $\cos^2 x$:

$$
= \int \frac{\sec^2 x}{\tan^2 x + 4} \, dx
$$

Let $u = \tan x$, $du = \sec^2 x \, dx$:

$$
= \int \frac{du}{u^2 + 4} = \frac{1}{2}\arctan\left(\frac{u}{2}\right) + C = \frac{1}{2}\arctan\left(\frac{\tan x}{2}\right) + C
$$

### Volumes of Revolution

The volume generated by rotating $y = f(x)$ about the $x$-axis from $x = a$ to $x = b$:

$$
V = \pi \int_a^b [f(x)]^2 \, dx
$$

The volume generated by rotating about the $y$-axis:

$$
V = \pi \int_c^d [f^{-1}(y)]^2 \, dy
$$

**Example:** Find the volume generated by rotating $y = \sqrt{x}$ about the $x$-axis from $x = 0$ to
$x = 4$.

$$
V = \pi \int_0^4 x \, dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi
$$

---

## Differential Equations

### First Order Separable Equations

**Separable Equations:** Equations of the form $\dfrac{dy}{dx} = f(x)g(y)$ can be solved by
separating variables:

$$
\int \frac{dy}{g(y)} = \int f(x) \, dx
$$

**Example:** Solve $\dfrac{dy}{dx} = \dfrac{x}{y}$ with $y(0) = 2$.

$$
y \, dy = x \, dx
$$

$$
\int y \, dy = \int x \, dx
$$

$$
\frac{y^2}{2} = \frac{x^2}{2} + C
$$

$$
y^2 = x^2 + 2C
$$

Using $y(0) = 2$: $4 = 0 + 2C$, so $C = 2$.

$$
y^2 = x^2 + 4
$$

Since $y(0) = 2 > 0$: $y = \sqrt{x^2 + 4}$.

### First Order Linear Differential Equations

Equations of the form:

$$
\frac{dy}{dx} + P(x)y = Q(x)
$$

**Integrating Factor:** $\mu(x) = e^{\int P(x) \, dx}$

Multiply through by the integrating factor:

$$
\frac{d}{dx}[\mu y] = \mu Q
$$

$$
y = \frac{1}{\mu}\int \mu Q \, dx
$$

**Why this works.** We want to write the left side as the derivative of a product. If we multiply by
$\mu$:

$$
\mu\frac{dy}{dx} + \mu P y = \mu Q
$$

This is $\frac{d}{dx}[\mu y]$ provided $\mu' = \mu P$, i.e., $\mu = e^{\int P\,dx}$.

**Example:** Solve $\dfrac{dy}{dx} + 3y = 6e^{-3x}$.

Integrating factor: $\mu = e^{\int 3 \, dx} = e^{3x}$.

$$
e^{3x}\frac{dy}{dx} + 3e^{3x}y = 6
$$

$$
\frac{d}{dx}[e^{3x}y] = 6
$$

$$
e^{3x}y = 6x + C
$$

$$
y = e^{-3x}(6x + C)
$$

### Second Order Differential Equations

**Homogeneous equations with constant coefficients:**

$$
a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0
$$

Try $y = e^{mx}$: the auxiliary equation is $am^2 + bm + c = 0$.

**Case 1: Two distinct real roots** $m_1, m_2$:

$$
y = Ae^{m_1 x} + Be^{m_2 x}
$$

**Case 2: Repeated root** $m$:

$$
y = (Ax + B)e^{mx}
$$

**Case 3: Complex roots** $m = \alpha \pm \beta i$:

$$
y = e^{\alpha x}(A\cos\beta x + B\sin\beta x)
$$

**Why the complex case produces sines and cosines.** If $m = \alpha + \beta i$, then
$e^{(\alpha+\beta i)x} = e^{\alpha x}(\cos\beta x + i\sin\beta x)$. Since the original DE has real
coefficients, both $e^{(\alpha+\beta i)x}$ and $e^{(\alpha-\beta i)x}$ are solutions. Their linear
combinations give $e^{\alpha x}\cos\beta x$ and $e^{\alpha x}\sin\beta x$.

**Example:** Solve $\dfrac{d^2y}{dx^2} - 5\dfrac{dy}{dx} + 6y = 0$.

Auxiliary equation: $m^2 - 5m + 6 = 0$, so $(m - 2)(m - 3) = 0$, giving $m = 2, 3$.

$$
y = Ae^{2x} + Be^{3x}
$$

**Example:** Solve $\dfrac{d^2y}{dx^2} + 4y = 0$.

Auxiliary equation: $m^2 + 4 = 0$, so $m = \pm 2i$.

$$
y = A\cos 2x + B\sin 2x
$$

**Example:** Solve $\dfrac{d^2y}{dx^2} + 6\dfrac{dy}{dx} + 9y = 0$.

Auxiliary equation: $m^2 + 6m + 9 = 0$, so $(m + 3)^2 = 0$, giving $m = -3$ (repeated).

$$
y = (Ax + B)e^{-3x}
$$

### Non-Homogeneous Second Order Equations

$$
a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = f(x)
$$

**General Solution:** $y = y_h + y_p$ (complementary function + particular integral).

**Method for finding $y_p$:** Guess the form of $y_p$ based on $f(x)$.

| $f(x)$                 | Guess for $y_p$                  |
| ---------------------- | -------------------------------- |
| $e^{kx}$               | $Ce^{kx}$ (if $k$ is not a root) |
| $kx + b$               | $Ax + B$                         |
| $\cos kx$ or $\sin kx$ | $A\cos kx + B\sin kx$            |

**Example:** Solve $\dfrac{d^2y}{dx^2} - 3\dfrac{dy}{dx} + 2y = 4e^{3x}$.

Complementary function: $m^2 - 3m + 2 = 0$, so $m = 1, 2$.

$$
y_h = Ae^x + Be^{2x}
$$

For the particular integral, try $y_p = Ce^{3x}$:

$$
9Ce^{3x} - 9Ce^{3x} + 2Ce^{3x} = 4e^{3x}
$$

$$
2C = 4 \implies C = 2
$$

$$
y_p = 2e^{3x}
$$

General solution: $y = Ae^x + Be^{2x} + 2e^{3x}$.

---

## Maclaurin Series

The Maclaurin series expands a function as a power series about $x = 0$:

$$
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n
$$

### Standard Maclaurin Series

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
$$

$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots
$$

$$
\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots
$$

$$
\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots, \quad |x| \leq 1, x \neq -1
$$

$$
(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots, \quad |x| < 1
$$

### Deriving Maclaurin Series

**Example:** Find the Maclaurin series for $f(x) = e^{-x^2}$ up to the term in $x^6$.

Substitute $-x^2$ into the series for $e^u$:

$$
e^{-x^2} = 1 + (-x^2) + \frac{(-x^2)^2}{2!} + \frac{(-x^2)^3}{3!} + \cdots
$$

$$
= 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots
$$

### Applications of Maclaurin Series

**Limits:** Maclaurin series can be used to evaluate limits that are indeterminate.

**Example:** Evaluate $\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

$$
e^x - 1 - x = \left(1 + x + \frac{x^2}{2} + \cdots\right) - 1 - x = \frac{x^2}{2} + \cdots
$$

$$
\frac{e^x - 1 - x}{x^2} = \frac{\frac{x^2}{2} + \cdots}{x^2} = \frac{1}{2} + \cdots \to \frac{1}{2}
$$

**Integration of Series:**

**Example:** Find $\displaystyle\int_0^{0.5} e^{-x^2} \, dx$ to 4 decimal places.

$$
e^{-x^2} \approx 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6}
$$

$$
\int_0^{0.5} e^{-x^2} \, dx \approx \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42}\right]_0^{0.5}
$$

$$
= 0.5 - \frac{0.125}{3} + \frac{0.03125}{10} - \frac{0.0078125}{42}
$$

$$
= 0.5 - 0.04167 + 0.003125 - 0.000186 = 0.46127
$$

---

## Common Pitfalls

1. **Forgetting the chain rule in implicit differentiation:** When differentiating $y^3$, the result
   is $3y^2 \dfrac{dy}{dx}$, not $3y^2$.

2. **Wrong choice of $u$ in integration by parts:** Follow the LIATE rule. Choosing algebraic
   functions as $dv$ instead of $u$ leads to more complicated integrals.

3. **Missing the constant of integration:** Always include $+C$ for indefinite integrals.

4. **Incorrect auxiliary equation:** For $\dfrac{d^2y}{dx^2} + 4y = 0$, the auxiliary equation is
   $m^2 + 4 = 0$, not $m^2 + 4m = 0$.

5. **Domain restrictions in Maclaurin series:** The series for $\ln(1 + x)$ is valid for
   $-1 < x \le 1$, not all $x$.

6. **Forgetting to change limits in definite substitution:** When $u = g(x)$, the new limits are
   $u(a)$ and $u(b)$, not $a$ and $b$.

7. **Not checking that the particular integral guess works:** If your guess for $y_p$ contains a
   term already in $y_h$, multiply by $x$ and try again.

---

## Practice Questions

1. Find $\dfrac{dy}{dx}$ for $x^3 + xy^2 + y^3 = 7$.

2. Evaluate $\displaystyle\int x^2 e^{-x} \, dx$ by parts.

3. Solve the differential equation $\dfrac{dy}{dx} = \dfrac{2x + 1}{3y - 2}$ with $y(0) = 1$.

4. Find the Maclaurin series for $f(x) = \cos(2x)$ up to the term in $x^6$.

5. Solve $\dfrac{d^2y}{dx^2} + 2\dfrac{dy}{dx} + y = 0$.

6. A curve has parametric equations $x = t^2$, $y = t^3 - 3t$. Find the coordinates of the
   stationary points.

7. Evaluate $\displaystyle\int_0^1 \frac{dx}{1 + x^3}$ by first finding the partial fraction
   decomposition.

8. Solve $\dfrac{dy}{dx} + \dfrac{2y}{x} = x^3$ using an integrating factor.

9. Solve $\dfrac{d^2y}{dx^2} - 4y = 2e^{3x}$.

10. Find the volume of revolution when $y = \sin x$ is rotated about the $x$-axis from $x = 0$ to
    $x = \pi$.

11. Evaluate $\displaystyle\int e^x \sin x \, dx$ using cyclic integration by parts.

12. Use Maclaurin series to evaluate $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x^2}$.
