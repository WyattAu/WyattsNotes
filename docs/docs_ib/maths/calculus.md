---
title: Calculus
description: IB Mathematics — limits, differentiation, integration, and their applications.
slug: calculus
---

## Limits

### Formal Definition

Let $f$ be defined on an open interval containing $a$, except possibly at $a$ itself. We write
$\displaystyle\lim_{x \to a} f(x) = L$ if for every $\varepsilon \gt 0$, there exists a
$\delta \gt 0$ such that:

$$0 \lt |x - a| \lt \delta \implies |f(x) - L| \lt \varepsilon$$

### Limit Laws

If $\displaystyle\lim_{x \to a} f(x) = L$ and $\displaystyle\lim_{x \to a} g(x) = M$, then:

$$\lim_{x \to a}\bigl[f(x) + g(x)\bigr] = L + M$$

$$\lim_{x \to a}\bigl[f(x) \cdot g(x)\bigr] = L \cdot M$$

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}, \quad M \ne 0$$

$$\lim_{x \to a} \bigl[f(x)\bigr]^n = L^n, \quad n \in \mathbb{Z}^{+}$$

### One-Sided Limits

A two-sided limit exists if and only if both one-sided limits exist and are equal:

$$\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$

### Indeterminate Forms

Expressions of the form $\dfrac{0}{0}$, $\dfrac{\infty}{\infty}$, $0 \cdot \infty$,
$\infty - \infty$, $1^\infty$, $0^0$, and $\infty^0$ are **indeterminate** — the limit may or may
not exist, and algebraic manipulation or l'H\^opital's rule is required.

### Common Limits

| Limit                                                             | Value |
| :---------------------------------------------------------------- | :---- |
| $\displaystyle\lim_{x \to 0} \frac{\sin x}{x}$                    | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x}$                | $0$   |
| $\displaystyle\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$ | $e$   |
| $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$                   | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{\ln(1 + x)}{x}$                | $1$   |

---

## Continuity

### Definition

A function $f$ is **continuous at** $a$ if and only if all three conditions hold:

1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

### Intermediate Value Theorem

If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then there exists
at least one $c \in (a, b)$ such that $f(c) = k$.

This theorem underpins the **bisection method** for root-finding and guarantees that a continuous
function on a closed interval attains every intermediate value.

### Types of Discontinuity

| Type        | Description                                                    | Example                                             |
| :---------- | :------------------------------------------------------------- | :-------------------------------------------------- |
| Removable   | Limit exists but $f(a)$ is undefined or differs from the limit | $f(x) = \dfrac{x^2 - 1}{x - 1}$ at $x = 1$          |
| Jump        | One-sided limits exist but are unequal                         | $f(x) = \lfloor x \rfloor$ at integer points        |
| Infinite    | Function tends to $\pm\infty$ near $a$                         | $f(x) = \dfrac{1}{x}$ at $x = 0$                    |
| Oscillatory | Function oscillates without settling                           | $f(x) = \sin\!\left(\dfrac{1}{x}\right)$ at $x = 0$ |

---

## Differentiation

### Definition from First Principles

The **derivative** of $f$ at $a$ is:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

provided this limit exists. When it does, $f$ is said to be **differentiable** at $a$.

Differentiability implies continuity, but continuity does not imply differentiability. The function
$f(x) = |x|$ is continuous everywhere but not differentiable at $x = 0$.

### Differentiation Rules

**Power rule.** For $n \in \mathbb{R}$:

$$\frac{d}{dx}\bigl[x^n\bigr] = nx^{n-1}$$

**Constant multiple and sum rules:**

$$\frac{d}{dx}\bigl[cf(x)\bigr] = c\,f'(x), \qquad \frac{d}{dx}\bigl[f(x) \pm g(x)\bigr] = f'(x) \pm g'(x)$$

**Product rule:**

$$\frac{d}{dx}\bigl[uv\bigr] = u'v + uv'$$

**Quotient rule:**

$$\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2}, \quad v \ne 0$$

**Chain rule.** If $y = f(g(x))$, then:

$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

### Derivatives of Standard Functions

| $f(x)$      | $f'(x)$                      |
| :---------- | :--------------------------- |
| $e^x$       | $e^x$                        |
| $a^x$       | $a^x \ln a$                  |
| $\ln x$     | $\dfrac{1}{x}$               |
| $\sin x$    | $\cos x$                     |
| $\cos x$    | $-\sin x$                    |
| $\tan x$    | $\sec^2 x$                   |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$  |
| $\arccos x$ | $\dfrac{-1}{\sqrt{1 - x^2}}$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$         |

### Implicit Differentiation

When a relation between $x$ and $y$ cannot be easily solved for $y$, differentiate both sides with
respect to $x$, treating $y$ as a function of $x$. Every occurrence of $y$ produces a factor of
$\dfrac{dy}{dx}$ via the chain rule.

**Example.** Find $\dfrac{dy}{dx}$ for $x^2 + y^2 = 25$.

Differentiating implicitly: $2x + 2y\dfrac{dy}{dx} = 0$, so $\dfrac{dy}{dx} = -\dfrac{x}{y}$.

### Higher-Order Derivatives

The second derivative $f''(x) = \dfrac{d^2y}{dx^2}$ is the derivative of $f'(x)$. Higher-order
derivatives $f^{(n)}(x)$ are defined recursively. The second derivative governs **concavity**:
$f''(x) \gt 0$ implies concave up; $f''(x) \lt 0$ implies concave down.

---

## Applications of Differentiation

### Stationary Points

A **stationary point** occurs where $f'(x) = 0$. The second derivative test classifies them:

- $f'(a) = 0$ and $f''(a) \gt 0$: **local minimum**
- $f'(a) = 0$ and $f''(a) \lt 0$: **local maximum**
- $f'(a) = 0$ and $f''(a) = 0$: test is inconclusive; use the first derivative test

### Optimisation

To solve optimisation problems:

1. Identify the quantity to be maximised or minimised as a function of a single variable.
2. Determine the domain of the function from the problem constraints.
3. Find stationary points by setting the derivative to zero.
4. Verify the nature of each stationary point (second derivative test or sign analysis).
5. Check endpoints and boundary values.

### Related Rates

When two or more quantities vary with time and are related by an equation, their rates of change are
related by implicit differentiation with respect to time $t$.

**Example.** A spherical balloon is inflated at $\dfrac{dV}{dt} = 100\;\mathrm{cm^3/s}$. Find
$\dfrac{dr}{dt}$ when $r = 5\;\mathrm{cm}$.

Since $V = \dfrac{4}{3}\pi r^3$, differentiating: $\dfrac{dV}{dt} = 4\pi r^2 \dfrac{dr}{dt}$.
Substituting: $100 = 4\pi(25)\dfrac{dr}{dt}$, so $\dfrac{dr}{dt} = \dfrac{1}{\pi}\;\mathrm{cm/s}$.

### Curve Sketching

Systematic curve sketching involves:

1. **Domain and intercepts**: where $f(x)$ is defined; $x$- and $y$-intercepts.
2. **Symmetry**: even ($f(-x) = f(x)$), odd ($f(-x) = -f(x)$), periodic.
3. **Asymptotes**: vertical (where denominator vanishes), horizontal (end behaviour), oblique.
4. **First derivative**: intervals of increase/decrease; stationary points.
5. **Second derivative**: concavity and points of inflection.

### Tangents and Normals

The **tangent** to $y = f(x)$ at $x = a$ has equation:

$$y - f(a) = f'(a)(x - a)$$

The **normal** is perpendicular to the tangent, with gradient $-\dfrac{1}{f'(a)}$ (provided
$f'(a) \ne 0$).

---

## Integration

### Indefinite Integrals

The **antiderivative** of $f(x)$ is a function $F(x)$ such that $F'(x) = f(x)$. The general
antiderivative includes an arbitrary constant:

$$\int f(x)\,dx = F(x) + C$$

### Fundamental Theorem of Calculus

**First part.** If $f$ is continuous on $[a, b]$ and $F'(x) = f(x)$, then:

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

**Second part.** If $f$ is continuous on $[a, b]$, then:

$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

### Definite Integrals

Properties of definite integrals (assuming $f, g$ are integrable):

$$\int_a^b \bigl[cf(x)\bigr]\,dx = c\int_a^b f(x)\,dx$$

$$\int_a^b \bigl[f(x) \pm g(x)\bigr]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$$

$$\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$

### Area Under a Curve

If $f(x) \ge 0$ on $[a, b]$, the area between the curve and the $x$-axis is:

$$A = \int_a^b f(x)\,dx$$

If $f$ changes sign, compute the integral piecewise. The total **enclosed area** is:

$$A = \int_a^b |f(x)|\,dx$$

### Area Between Curves

The area between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$, where $f(x) \ge g(x)$:

$$A = \int_a^b \bigl[f(x) - g(x)\bigr]\,dx$$

### Standard Integrals

| $f(x)$                      | $\displaystyle\int f(x)\,dx$            |
| :-------------------------- | :-------------------------------------- | --- | ---- |
| $x^n$                       | $\dfrac{x^{n+1}}{n+1} + C, \; n \ne -1$ | | |
| $\dfrac{1}{x}$              | $\ln                                    | x   | + C$ |
| $e^x$                       | $e^x + C$                               | | |
| $\sin x$                    | $-\cos x + C$                           | | |
| $\cos x$                    | $\sin x + C$                            | | |
| $\sec^2 x$                  | $\tan x + C$                            | | |
| $\dfrac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + C$                         | | |
| $\dfrac{1}{1 + x^2}$        | $\arctan x + C$                         | | |

---

## Integration Techniques

### Substitution

**Theorem.** Let $u = g(x)$ where $g'$ is continuous and $f$ is continuous on the range of $g$.
Then:

$$\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$$

**Strategy.** Identify an "inner function" and its derivative as a factor. Substitute $u = g(x)$,
replace $dx$ with $\dfrac{du}{g'(x)}$, and integrate with respect to $u$.

**Example.** Evaluate $\displaystyle\int 2x\sqrt{x^2 + 1}\,dx$.

Let $u = x^2 + 1$, so $du = 2x\,dx$. Then:

$$\int 2x\sqrt{x^2 + 1}\,dx = \int \sqrt{u}\,du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C$$

### Integration by Parts

**Theorem.** If $u$ and $v$ are differentiable functions:

$$\int u\,dv = uv - \int v\,du$$

**LIATE priority** for choosing $u$: Logarithmic, Inverse trigonometric, Algebraic, Trigonometric,
Exponential. Choose $u$ as the function that appears highest on this list.

**Example.** Evaluate $\displaystyle\int x e^x\,dx$.

Let $u = x$, $dv = e^x\,dx$. Then $du = dx$, $v = e^x$:

$$\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C = (x - 1)e^x + C$$

### Repeated Integration by Parts

For integrals such as $\int x^n e^x\,dx$ or $\int x^n \sin x\,dx$, apply integration by parts
repeatedly. Tabular (DI) integration provides a systematic shortcut: differentiate the algebraic
factor until it reaches zero, integrate the other factor, and alternate signs.

### Volumes of Revolution

**About the $x$-axis.** Rotating $y = f(x)$ about the $x$-axis from $x = a$ to $x = b$:

$$V = \pi \int_a^b \bigl[f(x)\bigr]^2\,dx$$

**About the $y$-axis.** Rotating $x = g(y)$ about the $y$-axis from $y = c$ to $y = d$:

$$V = \pi \int_c^d \bigl[g(y)\bigr]^2\,dy$$

**Cylindrical shells** (rotating about the $y$-axis):

$$V = 2\pi \int_a^b x\,|f(x)|\,dx$$

### Improper Integrals

An improper integral involves an infinite limit of integration or an unbounded integrand. Evaluate
as a limit:

$$\int_a^\infty f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx$$

The integral **converges** if this limit exists (is finite); otherwise it **diverges**.

---

## Common Pitfalls

1. **Forgetting the chain rule.** When differentiating composite functions, always identify the
   inner function and multiply by its derivative.

2. **Sign errors in the quotient rule.** Remember: $u'v - uv'$, not $uv' - u'v$. A mnemonic: "low
   d-high minus high d-low, over the square of what's below."

3. **Dropping the $+C$.** Every indefinite integral requires an arbitrary constant.

4. **Integration by parts choice.** Choosing the wrong factor for $u$ can lead to a more complicated
   integral. Follow the LIATE rule.

5. **Incorrect limits after substitution.** When using substitution in a definite integral, either
   transform the limits to the new variable or back-substitute before evaluating.

6. **Volume formula confusion.** Ensure the correct axis of rotation is used. The variable in the
   integrand corresponds to the axis perpendicular to the one of rotation.

7. **Treating $\dfrac{dy}{dx}$ as a fraction in implicit differentiation.** While the notation
   suggests a ratio, it is a limit. Manipulations such as cross-multiplying are justified by the
   chain rule, not by treating derivatives as fractions.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Evaluate $\displaystyle\lim_{x \to 0} \frac{\sin 3x}{2x}$.

</details>

<details>
<summary>Problem 2</summary>

Find $\dfrac{dy}{dx}$ when $x^3 + y^3 - 3xy = 0$.

</details>

<details>
<summary>Problem 3</summary>

A rectangular box with a square base has a surface area of $150\;\mathrm{cm^2}$. Find the dimensions
that maximise the volume.

</details>

<details>
<summary>Problem 4</summary>

Evaluate $\displaystyle\int_0^1 \frac{x}{\sqrt{x^2 + 1}}\,dx$.

</details>

<details>
<summary>Problem 5</summary>

Evaluate $\displaystyle\int x^2 e^{-x}\,dx$ using integration by parts.

</details>

<details>
<summary>Problem 6</summary>

Find the volume generated when the region bounded by $y = \sqrt{x}$, $x = 4$, and the $x$-axis is
rotated $360^\circ$ about the $x$-axis.

</details>

<details>
<summary>Problem 7</summary>

Determine whether $\displaystyle\int_1^\infty \frac{1}{x^p}\,dx$ converges or diverges for
$p \gt 0$.

</details>

<details>
<summary>Problem 8</summary>

Prove that $f(x) = x^3 - 3x + 1$ has exactly one root in the interval $(1, 2)$.

</details>

<details>
<summary>Answers to Selected Problems</summary>

**Problem 1:**
$\displaystyle\lim_{x \to 0} \frac{\sin 3x}{2x} = \lim_{x \to 0} \frac{3}{2} \cdot \frac{\sin 3x}{3x} = \frac{3}{2} \cdot 1 = \frac{3}{2}$.

**Problem 2:** Differentiating implicitly: $3x^2 + 3y^2\dfrac{dy}{dx} - 3y - 3x\dfrac{dy}{dx} = 0$.
Factoring out $\dfrac{dy}{dx}$: $\dfrac{dy}{dx}(3y^2 - 3x) = 3y - 3x^2$, so
$\dfrac{dy}{dx} = \dfrac{y - x^2}{y^2 - x}$.

**Problem 3:** Let base side $= x$ and height $= h$. Surface area: $2x^2 + 4xh = 150$, so
$h = \dfrac{75 - x^2}{2x}$. Volume $V = x^2 h = \dfrac{75x - x^3}{2}$. Setting
$\dfrac{dV}{dx} = \dfrac{75 - 3x^2}{2} = 0$ gives $x = 5\;\mathrm{cm}$, $h = 5\;\mathrm{cm}$. Second
derivative $V'' = -3x$ is negative at $x = 5$, confirming a maximum. Maximum volume is
$125\;\mathrm{cm^3}$.

**Problem 4:** Let $u = x^2 + 1$, $du = 2x\,dx$.
$\displaystyle\int_0^1 \frac{x}{\sqrt{x^2 + 1}}\,dx = \frac{1}{2}\int_1^2 u^{-1/2}\,du = \left[\sqrt{u}\right]_1^2 = \sqrt{2} - 1$.

**Problem 5:** Using tabular integration: differentiate $x^2 \to 2x \to 2 \to 0$, integrate
$e^{-x} \to -e^{-x} \to e^{-x} \to -e^{-x}$. Result:
$-x^2 e^{-x} - 2x e^{-x} - 2e^{-x} + C = -(x^2 + 2x + 2)e^{-x} + C$.

**Problem 7:**
$\displaystyle\int_1^\infty \frac{1}{x^p}\,dx = \left[\frac{x^{1-p}}{1-p}\right]_1^\infty$. For
$p \gt 1$: $= 0 - \dfrac{1}{1-p} = \dfrac{1}{p-1}$ (converges). For $p = 1$:
$\displaystyle\int_1^\infty \frac{1}{x}\,dx = \lim_{b \to \infty} \ln b = \infty$ (diverges). For
$0 \lt p \lt 1$: $x^{1-p} \to \infty$ (diverges). Converges if and only if $p \gt 1$.

**Problem 8:** $f(1) = -1 \lt 0$ and $f(2) = 3 \gt 0$. By the Intermediate Value Theorem, a root
exists in $(1, 2)$. Since $f'(x) = 3x^2 - 3 = 3(x-1)(x+1) \gt 0$ for all $x \in (1, 2)$, $f$ is
strictly increasing on $[1, 2]$, so the root is unique.

</details>

---

## Worked Examples

**Worked Example: Evaluating a Limit Using L'Hopital's Rule**

Evaluate $\displaystyle\lim_{x \to 0} \frac{e^{3x} - 1 - 3x}{x^2}$.

<details>
<summary>Solution</summary>

As $x \to 0$, both numerator and denominator approach $0$, so we have the indeterminate form
$\dfrac{0}{0}$. Apply l'H\^opital's rule once:

$$\lim_{x \to 0} \frac{3e^{3x} - 3}{2x}$$

This still gives $\dfrac{0}{0}$, so apply l'H\^opital's rule a second time:

$$\lim_{x \to 0} \frac{9e^{3x}}{2} = \frac{9}{2}$$

</details>

**Worked Example: Curve Sketching with Full Analysis**

Sketch the curve $y = \dfrac{x^2 - 4}{x^2 - 1}$, identifying all asymptotes, stationary points, and
intervals of increase and decrease.

<details>
<summary>Solution</summary>

**Domain.** All $x \in \mathbb{R}$ except $x = \pm 1$.

**Intercepts.** $y$-intercept: $x = 0 \implies y = 4$. $x$-intercepts: $x^2 - 4 = 0 \implies x = \pm 2$.

**Asymptotes.** Vertical: $x = 1$ and $x = -1$ (denominator zero, numerator nonzero). Horizontal: since
degree of numerator equals degree of denominator, $y = \dfrac{1}{1} = 1$.

**Derivative.** By the quotient rule:

$$\frac{dy}{dx} = \frac{2x(x^2 - 1) - (x^2 - 4)(2x)}{(x^2 - 1)^2} = \frac{6x}{(x^2 - 1)^2}$$

**Stationary points.** $\dfrac{dy}{dx} = 0 \implies x = 0$. Substituting: $y = 4$. The second derivative
at $x = 0$ is negative (since $y'' = \dfrac{6(x^2-1)^2 - 6x \cdot 2(x^2-1) \cdot 2x}{(x^2-1)^4}$,
evaluated at $x = 0$ gives $y'' = \dfrac{6}{1} = 6 \gt 0$), confirming a local minimum at $(0, 4)$.

**Intervals.** $\dfrac{dy}{dx} \lt 0$ for $x \lt 0$ (decreasing), $\dfrac{dy}{dx} \gt 0$ for $x \gt 0$
(increasing), within each branch.

</details>

**Worked Example: Integration by Parts with Definite Integral**

Evaluate $\displaystyle\int_0^{\pi/2} x \cos x\,dx$.

<details>
<summary>Solution</summary>

Let $u = x$, $dv = \cos x\,dx$. Then $du = dx$, $v = \sin x$.

$$\int_0^{\pi/2} x \cos x\,dx = \bigl[x \sin x\bigr]_0^{\pi/2} - \int_0^{\pi/2} \sin x\,dx$$

$$= \frac{\pi}{2} \cdot 1 - 0 - \bigl[-\cos x\bigr]_0^{\pi/2} = \frac{\pi}{2} - (0 - 1) = \frac{\pi}{2} + 1$$

</details>

**Worked Example: Volume of Revolution with Shells**

Find the volume generated when the region bounded by $y = x^2$, $y = 0$, and $x = 2$ is rotated $360^\circ$
about the $y$-axis.

<details>
<summary>Solution</summary>

Using cylindrical shells about the $y$-axis:

$$V = 2\pi \int_0^2 x \cdot x^2\,dx = 2\pi \int_0^2 x^3\,dx = 2\pi \left[\frac{x^4}{4}\right]_0^2 = 2\pi \cdot 4 = 8\pi$$

</details>

**Worked Example: Implicit Differentiation and Second Derivative**

Given $x^3 + y^3 = 6xy$, find $\dfrac{dy}{dx}$ and $\dfrac{d^2y}{dx^2}$ at the point $(3, 3)$.

<details>
<summary>Solution</summary>

Differentiating implicitly with respect to $x$:

$$3x^2 + 3y^2 \frac{dy}{dx} = 6y + 6x \frac{dy}{dx}$$

Rearranging: $\dfrac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2$, so

$$\frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}$$

At $(3, 3)$: $\dfrac{dy}{dx} = \dfrac{6 - 9}{9 - 6} = \dfrac{-3}{3} = -1$.

For the second derivative, differentiate $\dfrac{dy}{dx}$ using the quotient rule, then substitute
$x = 3$, $y = 3$, and $\dfrac{dy}{dx} = -1$. Alternatively, start from

$$(3y^2 - 6x)\frac{dy}{dx} = 6y - 3x^2$$

Differentiating both sides:

$$6y\left(\frac{dy}{dx}\right)^2 + (3y^2 - 6x)\frac{d^2y}{dx^2} - 6 = 6\frac{dy}{dx} - 6x$$

At $(3, 3)$ with $\dfrac{dy}{dx} = -1$:

$$6(3)(1) + 3 \cdot \frac{d^2y}{dx^2} - 6 = -6 - 18$$

$$18 + 3\frac{d^2y}{dx^2} - 6 = -24$$

$$3\frac{d^2y}{dx^2} = -36 \implies \frac{d^2y}{dx^2} = -12$$

</details>

---

## Additional Common Pitfalls

- **L'H\^opital's rule overuse.** Only apply when the limit is genuinely indeterminate ($\dfrac{0}{0}$ or
  $\dfrac{\infty}{\infty}$). Applying it to determinate forms produces incorrect results.

- **Second derivative test inconclusiveness.** When $f''(a) = 0$, the test fails. Use a sign chart of
  $f'$ around $a$ (the first derivative test) to classify the stationary point.

- **Area vs. signed integral.** $\displaystyle\int_a^b f(x)\,dx$ gives the signed area. When the curve
  crosses the $x$-axis, split the integral at each root and take absolute values to find total enclosed
  area.

- **Forgetting substitution limits.** In $\displaystyle\int_a^b f(g(x))g'(x)\,dx$, if you substitute
  $u = g(x)$, change the limits to $g(a)$ and $g(b)$. Failing to do so and using the original limits
  gives the wrong answer.

- **Chain rule on trigonometric functions.** $\dfrac{d}{dx}[\sin(f(x))] = f'(x)\cos(f(x))$, not
  $\cos(f(x))$. Students frequently omit the inner derivative factor.

- **Power rule for negative exponents.** $\dfrac{d}{dx}\bigl[x^{-3}\bigr] = -3x^{-4}$, not $-3x^{-2}$.
  Subtract one from the exponent, then multiply by the original exponent.

---

## Exam-Style Problems

<details>
<summary>Problem 9</summary>

Evaluate $\displaystyle\lim_{x \to \infty} \left(\frac{3x + 1}{2x - 5}\right)^x$.

</details>

<details>
<summary>Problem 10</summary>

Find the coordinates of the point on the curve $y = \dfrac{1}{x^2 + 1}$ where the tangent is parallel to
the line $x + 8y = 1$.

</details>

<details>
<summary>Problem 11</summary>

Evaluate $\displaystyle\int_0^{\pi/4} \sec^2 x\,e^{\tan x}\,dx$.

</details>

<details>
<summary>Problem 12</summary>

A cylindrical can with radius $r$ and height $h$ has volume $V = \pi r^2 h = 500\;\mathrm{cm^3}$. Find the
values of $r$ and $h$ that minimise the surface area $A = 2\pi r^2 + 2\pi r h$.

</details>

<details>
<summary>Problem 13</summary>

Use the substitution $x = 3\sin\theta$ to evaluate $\displaystyle\int_0^{3} \frac{dx}{\sqrt{9 - x^2}}$.

</details>

<details>
<summary>Problem 14</summary>

Find the equation of the normal to the curve $y = x^2 e^{-x}$ at the point where $x = 1$.

</details>

<details>
<summary>Problem 15</summary>

Show that $\displaystyle\int_0^1 \frac{x}{x^2 + 4}\,dx = \dfrac{1}{2}\ln\!\left(\dfrac{5}{4}\right)$.

</details>

<details>
<summary>Answers to Additional Problems</summary>

**Problem 9:** Write $\left(\dfrac{3x+1}{2x-5}\right)^x = \exp\!\left(x \ln\dfrac{3x+1}{2x-5}\right)$. As
$x \to \infty$, $\dfrac{3x+1}{2x-5} \to \dfrac{3}{2}$, and
$x\ln\!\left(\dfrac{3}{2} + \dfrac{13}{2(2x-5)}\right) \approx x \cdot \dfrac{13}{3(2x)} = \dfrac{13}{6}$.
The limit is $e^{13/6}$.

**Problem 10:** The line $x + 8y = 1$ has gradient $-\dfrac{1}{8}$. Differentiating:
$\dfrac{dy}{dx} = \dfrac{-2x}{(x^2+1)^2}$. Setting $= -\dfrac{1}{8}$:
$\dfrac{16x}{(x^2+1)^2} = 1 \implies (x^2+1)^2 = 16x$. Solving: $x^4 + 2x^2 - 16x + 1 = 0$. By inspection
$x = 1$ is a root: $1 + 2 - 16 + 1 = -12 \ne 0$. Trying $x = \dfrac{1}{2}$:
$\dfrac{1}{16} + \dfrac{1}{2} - 8 + 1 \ne 0$. Since $\dfrac{dy}{dx} = -\dfrac{1}{8}$ at
$x = 2$: $\dfrac{16}{25} \ne 1$. At $x = 1$: $\dfrac{2}{4} = \dfrac{1}{2} \ne \dfrac{1}{8}$. At
$x = \sqrt[3]{2} - 1$ check numerically: $x \approx 0.26$, $\dfrac{dy}{dx} \approx -0.48$. Solving
numerically gives $x \approx 0.065$ and $x \approx 1.48$. At $x = 1.48$: $\dfrac{dy}{dx} \approx -0.124$
close to $-\dfrac{1}{8} = -0.125$.

**Problem 11:** Let $u = \tan x$, so $du = \sec^2 x\,dx$. Limits: $x = 0 \implies u = 0$; $x = \pi/4 \implies u = 1$.
$\displaystyle\int_0^1 e^u\,du = \bigl[e^u\bigr]_0^1 = e - 1$.

**Problem 12:** From $V = 500$: $h = \dfrac{500}{\pi r^2}$. Then
$A = 2\pi r^2 + \dfrac{1000}{r}$.
$\dfrac{dA}{dr} = 4\pi r - \dfrac{1000}{r^2} = 0 \implies r^3 = \dfrac{250}{\pi} \implies r = \left(\dfrac{250}{\pi}\right)^{1/3} \approx 4.30\;\mathrm{cm}$.
Then $h = \dfrac{500}{\pi r^2} = 2r \approx 8.60\;\mathrm{cm}$. Checking $A'' = 4\pi + \dfrac{2000}{r^3} \gt 0$,
confirming a minimum.

**Problem 13:** Let $x = 3\sin\theta$, $dx = 3\cos\theta\,d\theta$. When $x = 0$, $\theta = 0$; when $x = 3$,
$\theta = \pi/2$.
$\displaystyle\int_0^{\pi/2} \frac{3\cos\theta}{3\cos\theta}\,d\theta = \int_0^{\pi/2} d\theta = \frac{\pi}{2}$.

**Problem 14:** $y = x^2 e^{-x}$, $\dfrac{dy}{dx} = 2xe^{-x} - x^2 e^{-x} = e^{-x}(2x - x^2)$.
At $x = 1$: $y = e^{-1} = \dfrac{1}{e}$, $\dfrac{dy}{dx} = e^{-1}(2 - 1) = \dfrac{1}{e}$.
Normal gradient $= -e$. Normal equation: $y - \dfrac{1}{e} = -e(x - 1)$, i.e. $y = -ex + e + \dfrac{1}{e}$.

**Problem 15:** Let $u = x^2 + 4$, $du = 2x\,dx$.
$\displaystyle\int_0^1 \frac{x\,dx}{x^2 + 4} = \frac{1}{2}\int_4^5 \frac{du}{u} = \frac{1}{2}\bigl[\ln u\bigr]_4^5 = \frac{1}{2}\ln\!\left(\frac{5}{4}\right)$.

</details>

---

## If You Get These Wrong, Revise:

- **Differentiation rules and chain rule** → Review [./calculus](./calculus) (sections on Differentiation Rules and Implicit Differentiation)
- **Integration techniques** → Review [./calculus](./calculus) (sections on Substitution and Integration by Parts)
- **Trigonometric identities** → Review the geometry and trigonometry topics in this subject
- **Exponential and logarithmic functions** → Review algebra and functions material
- **Curve sketching fundamentals** → Review [./calculus](./calculus) (section on Curve Sketching)

---

## Related Content at Other Levels

- **A-Level Differentiation and Integration:** [Mathematics](https://alevel.wyattau.com/docs/maths/maths)
- **University Calculus:** [Multivariable Calculus](https://university.wyattau.com/docs/mathematics/multivariable-calculus)
