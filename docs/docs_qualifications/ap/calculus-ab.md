---
title: AP Calculus AB Study Guide
description:
  'AP Calculus AB study guide covering limits, differentiation, applications of derivatives, integration, differential equations, key formulas, and exam tips.'
date: 2026-05-31
tags:
  - ap
  - ap-maths
categories:
  - ap-maths
slug: calculus-ab
---

# AP Calculus AB Study Guide

Comprehensive study guide for AP Calculus AB, aligned with the College Board Course and Exam Description.
Covers all AB-only topics: limits, derivatives, integrals, and differential equations.

## 1. Limits and Continuity

### Intuitive Definition of a Limit

The limit of $f(x)$ as $x$ approaches $a$ is $L$ if $f(x)$ can be made arbitrarily close to $L$ by
taking $x$ sufficiently close to $a$ (but not equal to $a$):

$$
\lim_{x \to a} f(x) = L
$$

A two-sided limit exists if and only if both one-sided limits exist and are equal:

$$
\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L
$$

### Limit Laws

If $\lim_{x \to a} f(x)$ and $\lim_{x \to a} g(x)$ both exist, then:

| Law | Expression |
| --- | ---------- |
| Sum | $\lim (f + g) = \lim f + \lim g$ |
| Difference | $\lim (f - g) = \lim f - \lim g$ |
| Product | $\lim (fg) = (\lim f)(\lim g)$ |
| Quotient | $\lim (f / g) = \dfrac{\lim f}{\lim g}$, provided $\lim g \neq 0$ |
| Power | $\lim f^n = (\lim f)^n$ |
| Constant multiple | $\lim cf = c \lim f$ |

### Squeeze Theorem

If $g(x) \leq f(x) \leq h(x)$ for all $x$ near $a$ (except possibly at $a$), and $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$, then $\lim_{x \to a} f(x) = L$.

Commonly used to evaluate $\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1$.

### Continuity

A function $f$ is **continuous** at $x = a$ if all three conditions are met:

1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

Types of discontinuity:

- **Removable:** A hole in the graph (limit exists but function is undefined or unequal)
- **Jump:** Left and right limits exist but are not equal
- **Infinite (essential):** A vertical asymptote (function approaches $\pm\infty$)

### Intermediate Value Theorem (IVT)

If $f$ is continuous on $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists at
least one $c \in (a, b)$ such that $f(c) = N$.

### L'Hopital's Rule

If $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}$ produces an indeterminate form $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$, then:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

provided the limit on the right exists. May be applied repeatedly if necessary.

## 2. Differentiation

### The Derivative

The derivative of $f$ at $x = a$ is the instantaneous rate of change:

$$
f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
$$

Geometrically, $f'(a)$ is the slope of the tangent line to the graph of $f$ at $(a, f(a))$.

### Differentiation Rules

**Power Rule:**

$$
\frac{d}{dx} x^n = nx^{n-1}
$$

**Product Rule:**

$$
\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)
$$

**Quotient Rule:**

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

**Chain Rule:**

$$
\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)
$$

### Derivatives of Common Functions

| Function $f(x)$ | Derivative $f'(x)$ |
| --------------- | ------------------ |
| $c$ (constant) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |
| $\cot x$ | $-\csc^2 x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $a^x$ | $a^x \ln a$ |
| $\log_a x$ | $\dfrac{1}{x \ln a}$ |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$ |
| $\arccos x$ | $\dfrac{-1}{\sqrt{1 - x^2}}$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ |

### Implicit Differentiation

When $y$ is defined implicitly as a function of $x$, differentiate both sides with respect to $x$,
treating $y$ as a function of $x$ (using the chain rule where needed), then solve for $\dfrac{dy}{dx}$.

### Higher-Order Derivatives

The second derivative $f''(x) = \dfrac{d^2y}{dx^2}$ gives the rate of change of the first derivative.
The $n$-th derivative is denoted $f^{(n)}(x)$.

## 3. Applications of Derivatives

### Mean Value Theorem (MVT)

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c \in (a, b)$ such that:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

### Increasing, Decreasing, and Critical Points

- $f$ is **increasing** on an interval if $f'(x) > 0$ for all $x$ in that interval
- $f$ is **decreasing** on an interval if $f'(x) < 0$ for all $x$ in that interval
- A **critical number** is an interior point $c$ of the domain where $f'(c) = 0$ or $f'(c)$ does not exist

### Concavity and Inflection Points

- $f$ is **concave up** where $f''(x) > 0$ (graph curves upward)
- $f$ is **concave down** where $f''(x) < 0$ (graph curves downward)
- An **inflection point** occurs where $f''$ changes sign (concavity changes)

### Local and Global Extrema

**First Derivative Test:** At a critical point $c$:
- $f'$ changes from positive to negative $\Rightarrow$ local maximum
- $f'$ changes from negative to positive $\Rightarrow$ local minimum

**Second Derivative Test:** At a critical point $c$ where $f'(c) = 0$:
- $f''(c) > 0 \Rightarrow$ local minimum
- $f''(c) < 0 \Rightarrow$ local maximum
- $f''(c) = 0 \Rightarrow$ inconclusive

A **global maximum/minimum** is the absolute largest/smallest value of $f$ on its entire domain. Check
endpoints, critical points, and any discontinuities.

### Optimisation Problems

1. Identify the quantity to be optimised and write it as a function of one variable
2. Determine the feasible domain
3. Find critical numbers by setting the derivative to zero
4. Evaluate the function at critical numbers and endpoints
5. Identify the optimum value

### Related Rates

1. Identify all quantities that change with time
2. Write an equation relating the quantities
3. Differentiate both sides with respect to time $t$ (chain rule)
4. Substitute known values and solve for the unknown rate

### Curve Sketching

Procedure:
1. Find domain, intercepts, and symmetry
2. Identify asymptotes (vertical, horizontal, slant)
3. Find the first derivative — determine increasing/decreasing intervals and local extrema
4. Find the second derivative — determine concavity and inflection points
5. Sketch the graph using all gathered information

## 4. Integration

### Antiderivatives

$F$ is an antiderivative of $f$ if $F'(x) = f(x)$. The **general antiderivative** is:

$$
\int f(x)\, dx = F(x) + C
$$

where $C$ is the constant of integration.

### Riemann Sums

The definite integral is defined as the limit of Riemann sums:

$$
\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x
$$

where $\Delta x = \dfrac{b - a}{n}$ and $x_i^*$ is a sample point in the $i$-th subinterval.

- **Left sum:** $x_i^* = x_{i-1}$
- **Right sum:** $x_i^* = x_i$
- **Midpoint sum:** $x_i^* = \dfrac{x_{i-1} + x_i}{2}$
- **Trapezoidal rule:** $\displaystyle\int_a^b f(x)\, dx \approx \frac{\Delta x}{2}\left[f(a) + 2\sum_{i=1}^{n-1}f(x_i) + f(b)\right]$

### Definite Integrals

Properties:

- $\displaystyle\int_a^b f(x)\, dx = -\int_b^a f(x)\, dx$
- $\displaystyle\int_a^a f(x)\, dx = 0$
- $\displaystyle\int_a^b [f(x) \pm g(x)]\, dx = \int_a^b f(x)\, dx \pm \int_a^b g(x)\, dx$
- $\displaystyle\int_a^b cf(x)\, dx = c\int_a^b f(x)\, dx$
- Additivity: $\displaystyle\int_a^b f(x)\, dx = \int_a^c f(x)\, dx + \int_c^b f(x)\, dx$

### Fundamental Theorem of Calculus (FTC)

**Part 1:** If $f$ is continuous on $[a, b]$, then the function $F(x) = \int_a^x f(t)\, dt$ is differentiable and:

$$
F'(x) = f(x)
$$

More generally, if $G(x) = \int_{u(x)}^{v(x)} f(t)\, dt$, then:

$$
G'(x) = f(v(x)) \cdot v'(x) - f(u(x)) \cdot u'(x)
$$

**Part 2:** If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:

$$
\int_a^b f(x)\, dx = F(b) - F(a)
$$

### U-Substitution

For integrals of the form $\int f(g(x))g'(x)\, dx$:

1. Let $u = g(x)$, then $du = g'(x)\, dx$
2. Rewrite the integral entirely in terms of $u$
3. Evaluate the integral
4. Substitute back $x = g^{-1}(u)$

For definite integrals, transform the limits: when $x = a$, $u = g(a)$; when $x = b$, $u = g(b)$.

### Area Between Curves

If $f(x) \geq g(x)$ on $[a, b]$:

$$
A = \int_a^b [f(x) - g(x)]\, dx
$$

If curves cross, split the integral at intersection points and take absolute values.

### Average Value of a Function

The average value of $f$ on $[a, b]$ is:

$$
f_{\text{avg}} = \frac{1}{b - a}\int_a^b f(x)\, dx
$$

## 5. Differential Equations

### Separable Equations

A first-order separable differential equation has the form:

$$
\frac{dy}{dx} = g(x)h(y)
$$

Solve by separating variables:

$$
\frac{dy}{h(y)} = g(x)\, dx \implies \int \frac{dy}{h(y)} = \int g(x)\, dx
$$

### Slope Fields

A slope field (direction field) is a graphical representation of a first-order differential equation
$\dfrac{dy}{dx} = f(x, y)$. At each point $(x, y)$ on a grid, a short line segment is drawn with slope
$f(x, y)$. Solutions to the differential equation are curves that are tangent to the line segments at
every point.

### Exponential Growth and Decay

For a quantity $y$ that changes at a rate proportional to itself:

$$
\frac{dy}{dt} = ky \implies y(t) = y_0 e^{kt}
$$

- $k > 0$: exponential growth
- $k < 0$: exponential decay

Half-life: $t_{1/2} = \dfrac{\ln 2}{|k|}$

## 6. Key Formulas

### Differentiation

$$
\frac{d}{dx} x^n = nx^{n-1}, \quad \frac{d}{dx} e^x = e^x, \quad \frac{d}{dx} \ln x = \frac{1}{x}
$$

$$
\frac{d}{dx}[fg] = f'g + fg', \quad \frac{d}{dx}\left[\frac{f}{g}\right] = \frac{f'g - fg'}{g^2}
$$

$$
\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)
$$

### Integration

$$
\int x^n\, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)
$$

$$
\int \frac{1}{x}\, dx = \ln|x| + C
$$

$$
\int e^x\, dx = e^x + C, \quad \int a^x\, dx = \frac{a^x}{\ln a} + C
$$

$$
\int \sin x\, dx = -\cos x + C, \quad \int \cos x\, dx = \sin x + C
$$

$$
\int \sec^2 x\, dx = \tan x + C, \quad \int \csc^2 x\, dx = -\cot x + C
$$

### Theorems

$$
\text{IVT: } f(c) = N \text{ for some } c \in (a,b) \text{ if } f \text{ continuous on } [a,b]
$$

$$
\text{MVT: } f'(c) = \frac{f(b)-f(a)}{b-a} \text{ for some } c \in (a,b)
$$

$$
\text{FTC 1: } \frac{d}{dx}\int_a^x f(t)\, dt = f(x)
$$

$$
\text{FTC 2: } \int_a^b f(x)\, dx = F(b) - F(a)
$$

## 7. Exam Tips

1. **Show all working.** The AP exam awards partial credit for correct intermediate steps even when
   the final answer is wrong. Write out every step clearly.
2. **Justify your answers.** On free-response questions, explicitly state which theorem, test, or rule
   you are applying (e.g., "by the Intermediate Value Theorem" or "by the Second Derivative Test").
3. **Check your calculator's mode.** Ensure radians mode is selected before evaluating trigonometric
   expressions. This is one of the most common sources of error.
4. **Master u-substitution.** Many integration problems on the AP exam can be solved with a well-chosen
   substitution. Practise identifying the inner function and its derivative.
5. **Verify answers graphically.** On the calculator-active section, use your calculator to sketch graphs
   and check that your analytical results (extrema, inflection points, intercepts) match.
6. **Do not leave blanks.** Even if you cannot complete a problem, write down relevant formulas,
   diagrams, or reasoning — partial credit may be awarded.
7. **Time management.** Spend roughly 15 minutes per free-response question. If stuck, move on and return
   later.

## 8. Common Mistakes

1. **Forgetting the chain rule.** When differentiating composite functions (e.g., $\sin(3x^2)$),
   students often omit the derivative of the inner function. Always ask: is there an inner function?
2. **Sign errors in the quotient rule.** The correct order is numerator-derivative times denominator
   minus numerator times denominator-derivative: $\dfrac{f'g - fg'}{g^2}$. Getting this backwards
   changes the sign.
3. **Dropping the constant of integration.** When finding antiderivatives, always include $+ C$.
   On free-response questions, the constant is essential for solving initial value problems.
4. **Confusing average rate of change with instantaneous rate of change.** Average rate of change is
   $\dfrac{f(b) - f(a)}{b - a}$ (a slope of a secant line); instantaneous rate of change is $f'(a)$
   (slope of a tangent line).
5. **Misapplying L'Hopital's rule.** Only use L'Hopital's rule for indeterminate forms $\frac{0}{0}$
   or $\frac{\pm\infty}{\pm\infty}$. Always verify the indeterminate form before differentiating.
6. **Incorrect limits in u-substitution.** When using substitution on a definite integral, either
   transform the limits of integration to $u$-values or substitute back to $x$ before evaluating.
   Do not mix old and new limits.
7. **Confusing the MVT with the IVT.** The MVT guarantees a point where the instantaneous rate of
   change equals the average rate of change ($f'(c)$). The IVT guarantees a point where the function
   takes on a specific value ($f(c) = N$). Know the difference.

## 9. Summary

| Topic | Key Ideas |
| ----- | --------- |
| Limits and Continuity | Evaluating limits, limit laws, Squeeze theorem, IVT, L'Hopital's rule, continuity conditions |
| Differentiation | Power/product/quotient/chain rules, implicit differentiation, derivatives of all standard functions |
| Applications of Derivatives | MVT, increasing/decreasing, concavity, extrema, optimisation, related rates, curve sketching |
| Integration | Antiderivatives, Riemann sums, FTC parts 1 and 2, u-substitution, area between curves |
| Differential Equations | Separable equations, slope fields, exponential growth/decay |

The AP Calculus AB exam tests your ability to apply these concepts in both multiple-choice and
free-response formats. Focus on understanding why each rule works — the AP exam rewards conceptual
understanding as much as mechanical computation. Practise past papers under timed conditions and
review every mistake to build confidence and accuracy.
