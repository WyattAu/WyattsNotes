---
title: Differentiation -- Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for differentiation covering implicit differentiation second derivatives, L'Hopital repeated application, related rates with chain rule, and product rule pitfalls.
slug: diag-differentiation
hide_table_of_contents: true
---

# Differentiation — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for differentiation.

### UT-1: Implicit Differentiation — Second Derivative Trap

**Question:**

A curve is defined implicitly by $x^2 + xy + y^2 = 7$.

**(a)** Find $\dfrac{dy}{dx}$ in terms of $x$ and $y$.

**(b)** Find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$.

**(c)** A student computes $\dfrac{d^2y}{dx^2}$ by implicitly differentiating the original equation twice and gets a different answer from part (b). Explain why the student's answer could be correct but in a different form, and show they are equivalent.

[Difficulty: hard. Tests second derivative via implicit differentiation and the subtlety of substituting $\frac{dy}{dx}$ back.]

**Solution:**

**(a)** Differentiate implicitly with respect to $x$:

$$2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0$$

$$(x + 2y)\frac{dy}{dx} = -(2x + y)$$

$$\frac{dy}{dx} = -\frac{2x + y}{x + 2y}$$

**(b)** Differentiate $\dfrac{dy}{dx}$ with respect to $x$ using the quotient rule:

$$\frac{d^2y}{dx^2} = -\frac{(x + 2y)\left(2 + \frac{dy}{dx}\right) - (2x + y)\left(1 + 2\frac{dy}{dx}\right)}{(x + 2y)^2}$$

Expand the numerator:

$$= -\frac{(x + 2y)(2 + \frac{dy}{dx}) - (2x + y)(1 + 2\frac{dy}{dx})}{(x + 2y)^2}$$

Substitute $\frac{dy}{dx} = -\frac{2x + y}{x + 2y}$:

$$= -\frac{(x + 2y)\left(2 - \frac{2x + y}{x + 2y}\right) - (2x + y)\left(1 - \frac{2(2x + y)}{x + 2y}\right)}{(x + 2y)^2}$$

$$= -\frac{(x + 2y) \cdot \frac{2(x + 2y) - (2x + y)}{x + 2y} - (2x + y) \cdot \frac{(x + 2y) - 2(2x + y)}{x + 2y}}{(x + 2y)^2}$$

Numerator of the inner fractions:

$$2(x + 2y) - (2x + y) = 2x + 4y - 2x - y = 3y$$

$$(x + 2y) - 2(2x + y) = x + 2y - 4x - 2y = -3x$$

So:

$$\frac{d^2y}{dx^2} = -\frac{3y - (2x + y)\left(\frac{-3x}{x + 2y}\right)}{(x + 2y)^2} = -\frac{3y + \frac{3x(2x + y)}{x + 2y}}{(x + 2y)^2}$$

$$= -\frac{3y(x + 2y) + 3x(2x + y)}{(x + 2y)^3} = -\frac{3xy + 6y^2 + 6x^2 + 3xy}{(x + 2y)^3}$$

$$= -\frac{6x^2 + 6xy + 6y^2}{(x + 2y)^3} = -\frac{6(x^2 + xy + y^2)}{(x + 2y)^3} = -\frac{42}{(x + 2y)^3}$$

**(c)** The student's approach of differentiating the original equation twice is valid. Starting from:

$$2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0$$

Differentiate again:

$$2 + \frac{dy}{dx} + \frac{dy}{dx} + x\frac{d^2y}{dx^2} + 2\left(\frac{dy}{dx}\right)^2 + 2y\frac{d^2y}{dx^2} = 0$$

$$2 + 2\frac{dy}{dx} + 2\left(\frac{dy}{dx}\right)^2 + (x + 2y)\frac{d^2y}{dx^2} = 0$$

Solving for $\frac{d^2y}{dx^2}$:

$$\frac{d^2y}{dx^2} = -\frac{2 + 2\frac{dy}{dx} + 2\left(\frac{dy}{dx}\right)^2}{x + 2y}$$

This is equivalent to the result in (b) after substituting $\frac{dy}{dx} = -\frac{2x + y}{x + 2y}$ and simplifying. Both forms are correct; they just express the answer differently.

---

### UT-2: L'Hopital's Rule — When It Does Not Apply

**Question:**

**(a)** Evaluate $\displaystyle\lim_{x \to 0}\frac{e^x - 1 - x - \frac{x^2}{2}}{x^3}$.

**(b)** A student claims L'Hopital's rule applies to $\displaystyle\lim_{x \to \infty}\frac{x + \sin x}{x}$. Apply L'Hopital's rule and explain why the result is misleading.

[Difficulty: hard. Tests repeated L'Hopital application and recognition of when L'Hopital gives an indeterminate loop.]

**Solution:**

**(a)** Direct substitution gives $\frac{0}{0}$.

First application:

$$\lim_{x \to 0}\frac{e^x - 1 - x}{3x^2}$$

Still $\frac{0}{0}$:

$$\lim_{x \to 0}\frac{e^x - 1}{6x}$$

Still $\frac{0}{0}$:

$$\lim_{x \to 0}\frac{e^x}{6} = \frac{1}{6}$$

**(b)** Direct substitution of $x \to \infty$ gives $\frac{\infty}{\infty}$, so L'Hopital technically applies.

$$\lim_{x \to \infty}\frac{1 + \cos x}{1} = \lim_{x \to \infty}(1 + \cos x)$$

This limit does not exist because $\cos x$ oscillates between $-1$ and $1$. The result is misleading because the **original limit does exist**:

$$\frac{x + \sin x}{x} = 1 + \frac{\sin x}{x}$$

Since $\lvert \sin x \rvert \le 1$ and $x \to \infty$, we have $\frac{\sin x}{x} \to 0$ by the squeeze theorem.

So $\displaystyle\lim_{x \to \infty}\frac{x + \sin x}{x} = 1$.

L'Hopital's rule fails here because the condition "the limit of $\frac{f'(x)}{g'(x)}$ must exist (or be $\pm\infty$)" is not satisfied. This is a case where L'Hopital gives an inconclusive result, not because the original limit is indeterminate.

---

### UT-3: Product Rule — Order of Operations

**Question:**

Let $f(x) = x^2 e^{3x} \sin x$.

**(a)** Find $f'(x)$.

**(b)** A student writes $f'(x) = 2x \cdot 3e^{3x} \cdot \cos x$ and claims they applied the product rule correctly to all three functions. Explain the error.

[Difficulty: hard. Tests correct application of the product rule to a product of three functions.]

**Solution:**

**(a)** Treat $f(x) = u \cdot v \cdot w$ where $u = x^2$, $v = e^{3x}$, $w = \sin x$.

Using the product rule for three functions:

$$(uvw)' = u'vw + uv'w + uvw'$$

$$u' = 2x, \quad v' = 3e^{3x}, \quad w' = \cos x$$

$$f'(x) = 2x \cdot e^{3x} \cdot \sin x + x^2 \cdot 3e^{3x} \cdot \sin x + x^2 \cdot e^{3x} \cdot \cos x$$

$$= e^{3x}\sin x(2x + 3x^2) + x^2 e^{3x}\cos x$$

$$= e^{3x}\left[(2x + 3x^2)\sin x + x^2\cos x\right]$$

**(b)** The student's error is that they differentiated each factor independently and multiplied the results: $f'(x) \neq u' \cdot v' \cdot w'$. The derivative of a product is **not** the product of the derivatives. The correct rule is $(uvw)' = u'vw + uv'w + uvw'$ — each term differentiates exactly one factor while keeping the others unchanged.

---

## Integration Tests

> Tests synthesis of differentiation with other topics.

### IT-1: Differentiation with Logarithms (with Algebra)

**Question:**

Let $f(x) = x^{x}$ for $x \gt 0$.

**(a)** Find $f'(x)$ using logarithmic differentiation.

**(b)** Find the $x$-coordinate of the stationary point of $f$ and determine its nature.

**(c)** Show that the stationary point is a local minimum by considering $f(x) = e^{x\ln x}$.

[Difficulty: hard. Combines logarithmic differentiation with logarithm laws and the chain rule.]

**Solution:**

**(a)** Let $y = x^x$. Take natural logarithms:

$$\ln y = x \ln x$$

Differentiate implicitly with respect to $x$:

$$\frac{1}{y}\frac{dy}{dx} = \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

$$\frac{dy}{dx} = y(\ln x + 1) = x^x(1 + \ln x)$$

**(b)** Stationary points: $f'(x) = 0 \implies x^x(1 + \ln x) = 0$.

Since $x^x \gt 0$ for all $x \gt 0$, we need $1 + \ln x = 0 \implies \ln x = -1 \implies x = e^{-1} = \frac{1}{e}$.

To determine the nature: for $0 \lt x \lt \frac{1}{e}$, $\ln x \lt -1$ so $1 + \ln x \lt 0$ (decreasing). For $x \gt \frac{1}{e}$, $1 + \ln x \gt 0$ (increasing).

So $x = \frac{1}{e}$ is a **local minimum**.

**(c)** $f(x) = e^{x\ln x}$. Then:

$$f'(x) = e^{x\ln x} \cdot (\ln x + 1) = x^x(1 + \ln x)$$

For the second derivative:

$$f''(x) = \frac{d}{dx}\!\left[x^x(1 + \ln x)\right]$$

$$= x^x(1 + \ln x)^2 + x^x \cdot \frac{1}{x} = x^x\!\left[(1 + \ln x)^2 + \frac{1}{x}\right]$$

At $x = \frac{1}{e}$:

$$f''\!\left(\frac{1}{e}\right) = \left(\frac{1}{e}\right)^{1/e}\!\left[0 + e\right] = e \cdot e^{-1/e} = e^{1 - 1/e} \gt 0$$

Since $f''\!\left(\frac{1}{e}\right) \gt 0$, the stationary point is confirmed as a local minimum by the second derivative test.
