---
title: Hyperbolic Functions (Extended)
description:
  A-Level Further Maths notes on Hyperbolic Functions (Extended): Hyperbolic
  Functions (Extended Treatment); 1. Definitions for thorough revision and
  examinati.
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: hyperbolic-functions-extended
---

## Hyperbolic Functions (Extended Treatment)

This document provides a rigorous treatment of hyperbolic functions, their identities, inverses,
and calculus.

:::info
Hyperbolic functions are analogues of trigonometric functions defined using exponentials rather than
circles. They arise naturally in many areas including differential equations, special relativity,
and catenary curves.
:::

<hr />

## 1. Definitions

### 1.1 The three fundamental hyperbolic functions

$$\sinh x = \frac{e^x - e^{-x}}{2}$$

$$\cosh x = \frac{e^x + e^{-x}}{2}$$

$$\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$

### 1.2 Reciprocal functions

$$\mathrm{cosech}\,x = \frac{1}{\sinh x} = \frac{2}{e^x - e^{-x}}, \quad x \neq 0$$

$$\mathrm{sech}\,x = \frac{1}{\cosh x} = \frac{2}{e^x + e^{-x}}$$

$$\coth x = \frac{1}{\tanh x} = \frac{e^x + e^{-x}}{e^x - e^{-x}}, \quad x \neq 0$$

### 1.3 Basic properties

- $\sinh 0 = 0$, $\cosh 0 = 1$, $\tanh 0 = 0$.
- $\sinh x$ is **odd**: $\sinh(-x) = -\sinh x$.
- $\cosh x$ is **even**: $\cosh(-x) = \cosh x$.
- $\tanh x$ is **odd**.
- As $x \to +\infty$: $\sinh x \to +\infty$, $\cosh x \to +\infty$, $\tanh x \to 1$.
- As $x \to -\infty$: $\sinh x \to -\infty$, $\cosh x \to +\infty$, $\tanh x \to -1$.

### 1.4 Connection with Euler's formula

$$\cosh x = \cos(ix), \qquad \sinh x = -i\sin(ix)$$

**Proof.** $\cos(ix) = \dfrac{e^{i(ix)} + e^{-i(ix)}}{2} = \dfrac{e^{-x} + e^{x}}{2} = \cosh x$.

$-i\sin(ix) = -i \cdot \dfrac{e^{i(ix)} - e^{-i(ix)}}{2i} = \dfrac{e^{-x} - e^{x}}{-2} = \dfrac{e^x - e^{-x}}{2} = \sinh x$. $\blacksquare$

### 1.5 Graphs

- **$\sinh x$**: passes through the origin, increasing, resembles $y = x/2$ near the origin and
  $y = e^x/2$ for large positive $x$.
- **$\cosh x$**: minimum at $(0, 1)$, symmetric about the $y$-axis, resembles $y = 1 + x^2/2$ near
  the origin and $y = e^x/2$ for large positive $x$.
- **$\tanh x$**: S-shaped curve with horizontal asymptotes at $y = \pm 1$, passing through the
  origin with gradient 1.

<hr />

## 2. Hyperbolic Identities

### 2.1 Fundamental identity

$$\boxed{\cosh^2 x - \sinh^2 x = 1}$$

**Proof.**

$$\cosh^2 x - \sinh^2 x = \frac{(e^x + e^{-x})^2}{4} - \frac{(e^x - e^{-x})^2}{4}$$

$$= \frac{e^{2x} + 2 + e^{-2x} - (e^{2x} - 2 + e^{-2x})}{4} = \frac{4}{4} = 1 \quad \blacksquare$$

### 2.2 Identity for $\tanh$

$$\boxed{1 - \tanh^2 x = \mathrm{sech}^2\,x}$$

**Proof.** Divide the fundamental identity by $\cosh^2 x$:

$$1 - \tanh^2 x = \frac{1}{\cosh^2 x} = \mathrm{sech}^2\,x \quad \blacksquare$$

### 2.3 Osborne's rule

Every trigonometric identity has a corresponding hyperbolic identity, obtained by:
- Replacing $\cos$ with $\cosh$.
- Replacing $\sin$ with $\sinh$.
- **Negating every product (or power of 2 or more) of $\sinh$**.

**Example:** $\cos^2 x + \sin^2 x = 1$ becomes $\cosh^2 x - \sinh^2 x = 1$ (the $\sinh^2$ term is
negated).

**Example:** $\sin 2x = 2\sin x\cos x$ becomes $\sinh 2x = 2\sinh x\cosh x$ (the product
$\sinh x \cosh x$ is negated since it contains $\sinh$, but $\sinh 2x$ on the left is not a
product, so the overall sign changes on both sides cancel).

### 2.4 Double angle formulas

$$\sinh 2x = 2\sinh x\cosh x$$

$$\cosh 2x = \cosh^2 x + \sinh^2 x = 2\cosh^2 x - 1 = 1 + 2\sinh^2 x$$

**Proof of $\cosh 2x = 2\cosh^2 x - 1$:**

$$\cosh 2x = \frac{e^{2x} + e^{-2x}}{2} = \frac{(e^x + e^{-x})^2 - 2}{2} = \frac{4\cosh^2 x - 2}{2} = 2\cosh^2 x - 1 \quad \blacksquare$$

### 2.5 Addition formulas

$$\sinh(A \pm B) = \sinh A\cosh B \pm \cosh A\sinh B$$

$$\cosh(A \pm B) = \cosh A\cosh B \pm \sinh A\sinh B$$

**Proof of the addition formula for $\sinh$:**

$$\sinh(A + B) = \frac{e^{A+B} - e^{-(A+B)}}{2} = \frac{e^A e^B - e^{-A}e^{-B}}{2}$$

$$= \frac{(e^A - e^{-A})(e^B + e^{-B}) + (e^A + e^{-A})(e^B - e^{-B})}{4}$$

$$= \sinh A\cosh B + \cosh A\sinh B \quad \blacksquare$$

### 2.6 Worked example

**Problem.** Given $\sinh x = 3$, find $\cosh x$ and $\tanh x$ without finding $x$.

From $\cosh^2 x - \sinh^2 x = 1$:

$$\cosh^2 x = 1 + 9 = 10 \implies \cosh x = \sqrt{10}$$

(We take the positive root since $\cosh x \geq 1$ for all $x$.)

$$\tanh x = \frac{\sinh x}{\cosh x} = \frac{3}{\sqrt{10}} = \frac{3\sqrt{10}}{10}$$

<hr />

## 3. Inverse Hyperbolic Functions

### 3.1 Definitions in logarithmic form

$$\operatorname{arsinh}\,x = \ln\!\left(x + \sqrt{x^2 + 1}\right), \quad x \in \mathbb{R}$$

$$\operatorname{arcosh}\,x = \ln\!\left(x + \sqrt{x^2 - 1}\right), \quad x \geq 1$$

$$\operatorname{artanh}\,x = \frac{1}{2}\ln\!\left(\frac{1 + x}{1 - x}\right), \quad -1 \lt x \lt 1$$

### 3.2 Derivation of $\operatorname{arsinh}\,x = \ln(x + \sqrt{x^2 + 1})$

Let $y = \operatorname{arsinh}\,x$, so $x = \sinh y = \dfrac{e^y - e^{-y}}{2}$.

$$2x = e^y - e^{-y} \implies e^{2y} - 2xe^y - 1 = 0$$

This is a quadratic in $e^y$:

$$e^y = \frac{2x \pm \sqrt{4x^2 + 4}}{2} = x \pm \sqrt{x^2 + 1}$$

Since $e^y \gt 0$ and $\sqrt{x^2 + 1} \gt |x|$, we take the positive root:

$$e^y = x + \sqrt{x^2 + 1} \implies y = \ln\!\left(x + \sqrt{x^2 + 1}\right) \quad \blacksquare$$

### 3.3 Derivation of $\operatorname{arcosh}\,x = \ln(x + \sqrt{x^2 - 1})$

Let $y = \operatorname{arcosh}\,x$, so $x = \cosh y = \dfrac{e^y + e^{-y}}{2}$.

$$2x = e^y + e^{-y} \implies e^{2y} - 2xe^y + 1 = 0$$

$$e^y = \frac{2x \pm \sqrt{4x^2 - 4}}{2} = x \pm \sqrt{x^2 - 1}$$

Since $e^y \geq 1$ and $x \geq 1$, we need $e^y \geq 1$. Both roots are positive when $x \geq 1$.
The convention is to take $e^y = x + \sqrt{x^2 - 1}$ (which gives $y \geq 0$):

$$y = \ln\!\left(x + \sqrt{x^2 - 1}\right) \quad \blacksquare$$

### 3.4 Derivation of $\operatorname{artanh}\,x$

Let $y = \operatorname{artanh}\,x$, so $x = \tanh y$.

$$x = \frac{e^y - e^{-y}}{e^y + e^{-y}} = \frac{e^{2y} - 1}{e^{2y} + 1}$$

$$x(e^{2y} + 1) = e^{2y} - 1 \implies e^{2y}(1 - x) = 1 + x$$

$$e^{2y} = \frac{1 + x}{1 - x} \implies 2y = \ln\!\left(\frac{1 + x}{1 - x}\right)$$

$$y = \frac{1}{2}\ln\!\left(\frac{1 + x}{1 - x}\right) \quad \blacksquare$$

### 3.5 Worked example

**Problem.** Evaluate $\operatorname{arsinh}\,2$ and $\operatorname{artanh}\,\dfrac{1}{3}$ in exact
logarithmic form.

$$\operatorname{arsinh}\,2 = \ln(2 + \sqrt{5})$$

$$\operatorname{artanh}\,\frac{1}{3} = \frac{1}{2}\ln\!\left(\frac{4/3}{2/3}\right) = \frac{1}{2}\ln 2$$

### 3.6 Domains and ranges

| Function       | Domain        | Range         |
| -------------- | ------------- | ------------- |
| $\operatorname{arsinh}\,x$ | $\mathbb{R}$  | $\mathbb{R}$  |
| $\operatorname{arcosh}\,x$ | $x \geq 1$   | $y \geq 0$   |
| $\operatorname{artanh}\,x$ | $-1 \lt x \lt 1$ | $\mathbb{R}$  |

<hr />

## 4. Calculus of Hyperbolic Functions

### 4.1 Differentiation

$$\frac{d}{dx}(\sinh x) = \cosh x$$

$$\frac{d}{dx}(\cosh x) = \sinh x$$

$$\frac{d}{dx}(\tanh x) = \mathrm{sech}^2\,x$$

**Proof of $\dfrac{d}{dx}\sinh x = \cosh x$:**

$$\frac{d}{dx}\!\left(\frac{e^x - e^{-x}}{2}\right) = \frac{e^x + e^{-x}}{2} = \cosh x \quad \blacksquare$$

### 4.2 Differentiation of inverse hyperbolic functions

$$\frac{d}{dx}(\operatorname{arsinh}\,x) = \frac{1}{\sqrt{x^2 + 1}}$$

$$\frac{d}{dx}(\operatorname{arcosh}\,x) = \frac{1}{\sqrt{x^2 - 1}}, \quad x \gt 1$$

$$\frac{d}{dx}(\operatorname{artanh}\,x) = \frac{1}{1 - x^2}, \quad |x| \lt 1$$

**Proof for $\operatorname{arsinh}\,x$.** Let $y = \operatorname{arsinh}\,x$, so $x = \sinh y$.

$$\frac{dy}{dx} = \frac{1}{\dfrac{dx}{dy}} = \frac{1}{\cosh y} = \frac{1}{\sqrt{1 + \sinh^2 y}} = \frac{1}{\sqrt{1 + x^2}} \quad \blacksquare$$

**Proof for $\operatorname{artanh}\,x$.** Let $y = \operatorname{artanh}\,x$, so $x = \tanh y$.

$$\frac{dy}{dx} = \frac{1}{\mathrm{sech}^2\,y} = \frac{1}{1 - \tanh^2 y} = \frac{1}{1 - x^2} \quad \blacksquare$$

### 4.3 Integration

The differentiation results give standard integrals:

$$\int \cosh x\,dx = \sinh x + C$$

$$\int \sinh x\,dx = \cosh x + C$$

$$\int \mathrm{sech}^2\,x\,dx = \tanh x + C$$

### 4.4 Integrals leading to inverse hyperbolic functions

$$\int \frac{1}{\sqrt{x^2 + a^2}}\,dx = \operatorname{arsinh}\!\left(\frac{x}{a}\right) + C$$

$$\int \frac{1}{\sqrt{x^2 - a^2}}\,dx = \operatorname{arcosh}\!\left(\frac{x}{a}\right) + C, \quad x \gt a$$

$$\int \frac{1}{a^2 - x^2}\,dx = \frac{1}{a}\operatorname{artanh}\!\left(\frac{x}{a}\right) + C, \quad |x| \lt a$$

**Proof of the first formula.** Let $u = x/a$:

$$\int \frac{dx}{\sqrt{x^2 + a^2}} = \int \frac{a\,du}{a\sqrt{u^2 + 1}} = \operatorname{arsinh}\,u + C = \operatorname{arsinh}\!\left(\frac{x}{a}\right) + C \quad \blacksquare$$

### 4.5 Worked example: differentiation

**Problem.** Differentiate $f(x) = \sinh(3x^2)$.

$$f'(x) = 6x\cosh(3x^2)$$

### 4.6 Worked example: integration

**Problem.** Evaluate $\displaystyle\int \frac{1}{\sqrt{4x^2 + 9}}\,dx$.

$$\int \frac{dx}{\sqrt{4x^2 + 9}} = \frac{1}{2}\int \frac{d(2x)}{\sqrt{(2x)^2 + 9}} = \frac{1}{2}\operatorname{arsinh}\!\left(\frac{2x}{3}\right) + C$$

### 4.7 Worked example: definite integral

**Problem.** Evaluate $\displaystyle\int_0^1 \frac{dx}{\sqrt{x^2 + 1}}$.

$$= \left[\operatorname{arsinh}\,x\right]_0^1 = \operatorname{arsinh}\,1 - \operatorname{arsinh}\,0 = \ln(1 + \sqrt{2}) - 0 = \ln(1 + \sqrt{2})$$

### 4.8 Worked example: integration by substitution with hyperbolic functions

**Problem.** Evaluate $\displaystyle\int \sqrt{x^2 + 4}\,dx$.

Use the substitution $x = 2\sinh u$, $dx = 2\cosh u\,du$:

$$\int \sqrt{4\sinh^2 u + 4}\cdot 2\cosh u\,du = \int 2\cosh u \cdot 2\cosh u\,du = 4\int \cosh^2 u\,du$$

Using $\cosh^2 u = \dfrac{1 + \cosh 2u}{2}$:

$$= 4\int \frac{1 + \cosh 2u}{2}\,du = 2u + \sinh 2u + C$$

$$= 2u + 2\sinh u\cosh u + C$$

Since $x = 2\sinh u$: $\sinh u = \dfrac{x}{2}$, $\cosh u = \sqrt{1 + \dfrac{x^2}{4}} = \dfrac{\sqrt{x^2 + 4}}{2}$,
$u = \operatorname{arsinh}\!\left(\dfrac{x}{2}\right)$.

$$= 2\operatorname{arsinh}\!\left(\frac{x}{2}\right) + \frac{x\sqrt{x^2 + 4}}{2} + C$$

:::warning Common Pitfall
The substitution $x = a\sinh u$ is a powerful technique for integrals involving $\sqrt{x^2 + a^2}$.
Similarly, $x = a\cosh u$ handles $\sqrt{x^2 - a^2}$ and $x = a\tanh u$ handles expressions with
$a^2 - x^2$. The choice of substitution mirrors the trigonometric substitutions but is often
simpler algebraically.
:::

<hr />

## 5. Practice Problems

### Problem 1

Solve the equation $4\sinh x - 3\cosh x = 0$.

<details>
<summary>Solution</summary>

$4\sinh x = 3\cosh x \implies \tanh x = \dfrac{3}{4}$.

$x = \operatorname{artanh}\!\left(\dfrac{3}{4}\right) = \dfrac{1}{2}\ln\!\left(\dfrac{1 + 3/4}{1 - 3/4}\right) = \dfrac{1}{2}\ln 7$.

</details>

### Problem 2

Prove that $\sinh 3x = 3\sinh x + 4\sinh^3 x$.

<details>
<summary>Solution</summary>

$\sinh 3x = \sinh(2x + x) = \sinh 2x\cosh x + \cosh 2x\sinh x$

$= 2\sinh x\cosh^2 x + (1 + 2\sinh^2 x)\sinh x$

$= 2\sinh x(1 + \sinh^2 x) + \sinh x + 2\sinh^3 x$

$= 2\sinh x + 2\sinh^3 x + \sinh x + 2\sinh^3 x = 3\sinh x + 4\sinh^3 x$.

</details>

### Problem 3

Evaluate $\displaystyle\int_0^2 \frac{dx}{\sqrt{x^2 + 16}}$.

<details>
<summary>Solution</summary>

$= \left[\operatorname{arsinh}\!\left(\dfrac{x}{4}\right)\right]_0^2 = \operatorname{arsinh}\!\left(\dfrac{1}{2}\right) = \ln\!\left(\dfrac{1}{2} + \sqrt{\dfrac{5}{4}}\right) = \ln\!\left(\dfrac{1 + \sqrt{5}}{2}\right)$.

</details>

### Problem 4

Differentiate $f(x) = x\,\operatorname{arcosh}\,x$ for $x \gt 1$.

<details>
<summary>Solution</summary>

Using the product rule:

$f'(x) = \operatorname{arcosh}\,x + x \cdot \dfrac{1}{\sqrt{x^2 - 1}} = \operatorname{arcosh}\,x + \dfrac{x}{\sqrt{x^2 - 1}}$.

</details>
