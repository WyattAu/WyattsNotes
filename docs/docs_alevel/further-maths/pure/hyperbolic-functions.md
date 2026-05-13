---
title: Hyperbolic Functions (Extended)
description: "A-Level Further Maths notes on Hyperbolic Functions (Extended): Hyperbolic Functions (Extended Treatment); 1. Definitions for thorough revision and examinati."
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: hyperbolic-functions-extended
---
## Hyperbolic Functions (Extended Treatment)

This document provides a rigorous treatment of hyperbolic functions, their identities, inverses, and
Calculus.

:::info Hyperbolic functions are analogues of trigonometric functions defined using exponentials
Rather than circles. They arise in many areas including differential equations, special
Relativity, and catenary curves. :::

<hr />

## 1. Definitions

### 1.1 The three fundamental hyperbolic functions

$$\sinh x = \frac{e^x - e^{-x}}{2}$$

$$\cosh x = \frac{e^x + e^{-x}}{2}$$

$$\tanh x = \frac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆ = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$

### 1.2 Reciprocal functions

$$\mathrm{cosech}\,x = \frac◆LB◆1◆RB◆◆LB◆\sinh x◆RB◆ = \frac{2}{e^x - e^{-x}}, \quad x \neq 0$$

$$\mathrm{sech}\,x = \frac◆LB◆1◆RB◆◆LB◆\cosh x◆RB◆ = \frac{2}{e^x + e^{-x}}$$

$$\coth x = \frac◆LB◆1◆RB◆◆LB◆\tanh x◆RB◆ = \frac{e^x + e^{-x}}{e^x - e^{-x}}, \quad x \neq 0$$

### 1.3 Basic properties

- $\sinh 0 = 0$$\cosh 0 = 1$$\tanh 0 = 0$.
- $\sinh x$ is **odd**: $\sinh(-x) = -\sinh x$.
- $\cosh x$ is **even**: $\cosh(-x) = \cosh x$.
- $\tanh x$ is **odd**.
- As $x \to +\infty$: $\sinh x \to +\infty$$\cosh x \to +\infty$$\tanh x \to 1$.
- As $x \to -\infty$: $\sinh x \to -\infty$$\cosh x \to +\infty$$\tanh x \to -1$.

### 1.4 Connection with Euler's formula

$$\cosh x = \cos(ix), \qquad \sinh x = -i\sin(ix)$$

**Proof.** $\cos(ix) = \dfrac{e^{i(ix)} + e^{-i(ix)}}{2} = \dfrac{e^{-x} + e^{x}}{2} = \cosh x$.

$-i\sin(ix) = -i \cdot \dfrac{e^{i(ix)} - e^{-i(ix)}}{2i} = \dfrac{e^{-x} - e^{x}}{-2} = \dfrac{e^x - e^{-x}}{2} = \sinh x$.
$\blacksquare$

### 1.5 Graphs

- **$\sinh x$**: passes through the origin, increasing, resembles $y = x/2$ near the origin and
 $y = e^x/2$ for large positive $x$.
- **$\cosh x$**: minimum at $(0, 1)$Symmetric about the $y$-axis, resembles $y = 1 + x^2/2$ near
 the origin and $y = e^x/2$ for large positive $x$.
- **$\tanh x$**: S-shaped curve with horizontal asymptotes at $y = \pm 1$Passing through the
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

$$1 - \tanh^2 x = \frac◆LB◆1◆RB◆◆LB◆\cosh^2 x◆RB◆ = \mathrm{sech}^2\,x \quad \blacksquare$$

### 2.3 Osborne's rule

Every trigonometric identity has a corresponding hyperbolic identity, obtained by:

- Replacing $\cos$ with $\cosh$.
- Replacing $\sin$ with $\sinh$.
- **Negating every product (or power of 2 or more) of $\sinh$**.

**Example:** $\cos^2 x + \sin^2 x = 1$ becomes $\cosh^2 x - \sinh^2 x = 1$ (the $\sinh^2$ term is
Negated).

**Example:** $\sin 2x = 2\sin x\cos x$ becomes $\sinh 2x = 2\sinh x\cosh x$ (the product
$\sinh x \cosh x$ is negated since it contains $\sinh$But $\sinh 2x$ on the left is not a product,
So the overall sign changes on both sides cancel).

### 2.4 Double angle formulas

$$\sinh 2x = 2\sinh x\cosh x$$

$$\cosh 2x = \cosh^2 x + \sinh^2 x = 2\cosh^2 x - 1 = 1 + 2\sinh^2 x$$

**Proof of $\cosh 2x = 2\cosh^2 x - 1$:**

$$\cosh 2x = \frac{e^{2x} + e^{-2x}}{2} = \frac{(e^x + e^{-x})^2 - 2}{2} = \frac◆LB◆4\cosh^2 x - 2◆RB◆◆LB◆2◆RB◆ = 2\cosh^2 x - 1 \quad \blacksquare$$

### 2.5 Addition formulas

$$\sinh(A \pm B) = \sinh A\cosh B \pm \cosh A\sinh B$$

$$\cosh(A \pm B) = \cosh A\cosh B \pm \sinh A\sinh B$$

**Proof of the addition formula for $\sinh$:**

$$\sinh(A + B) = \frac{e^{A+B} - e^{-(A+B)}}{2} = \frac{e^A e^B - e^{-A}e^{-B}}{2}$$

$$= \frac{(e^A - e^{-A})(e^B + e^{-B}) + (e^A + e^{-A})(e^B - e^{-B})}{4}$$

$$= \sinh A\cosh B + \cosh A\sinh B \quad \blacksquare$$

### 2.6 Worked example

**Problem.** Given $\sinh x = 3$Find $\cosh x$ and $\tanh x$ without finding $x$.

From $\cosh^2 x - \sinh^2 x = 1$:

$$\cosh^2 x = 1 + 9 = 10 \implies \cosh x = \sqrt{10}$$

(We take the positive root since $\cosh x \geq 1$ for all $x$.)

$$\tanh x = \frac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆\sqrt{10}◆RB◆ = \frac◆LB◆3\sqrt{10}◆RB◆◆LB◆10◆RB◆$$

<hr />

## 3. Inverse Hyperbolic Functions

### 3.1 Definitions in logarithmic form

$$\operatorname{arsinh}\,x = \ln\!\left(x + \sqrt{x^2 + 1}\right), \quad x \in \mathbb{R}$$

$$\operatorname{arcosh}\,x = \ln\!\left(x + \sqrt{x^2 - 1}\right), \quad x \geq 1$$

$$\operatorname{artanh}\,x = \frac{1}{2}\ln\!\left(\frac{1 + x}{1 - x}\right), \quad -1 \lt x \lt 1$$

### 3.2 Derivation of $\operatorname{arsinh}\,x = \ln(x + \sqrt{x^2 + 1})$

Let $y = \operatorname{arsinh}\,x$So $x = \sinh y = \dfrac{e^y - e^{-y}}{2}$.

$$2x = e^y - e^{-y} \implies e^{2y} - 2xe^y - 1 = 0$$

This is a quadratic in $e^y$:

$$e^y = \frac◆LB◆2x \pm \sqrt{4x^2 + 4}◆RB◆◆LB◆2◆RB◆ = x \pm \sqrt{x^2 + 1}$$

Since $e^y \gt 0$ and $\sqrt{x^2 + 1} \gt |x|$We take the positive root:

$$e^y = x + \sqrt{x^2 + 1} \implies y = \ln\!\left(x + \sqrt{x^2 + 1}\right) \quad \blacksquare$$

### 3.3 Derivation of $\operatorname{arcosh}\,x = \ln(x + \sqrt{x^2 - 1})$

Let $y = \operatorname{arcosh}\,x$So $x = \cosh y = \dfrac{e^y + e^{-y}}{2}$.

$$2x = e^y + e^{-y} \implies e^{2y} - 2xe^y + 1 = 0$$

$$e^y = \frac◆LB◆2x \pm \sqrt{4x^2 - 4}◆RB◆◆LB◆2◆RB◆ = x \pm \sqrt{x^2 - 1}$$

Since $e^y \geq 1$ and $x \geq 1$We need $e^y \geq 1$. Both roots are positive when $x \geq 1$.
The convention is to take $e^y = x + \sqrt{x^2 - 1}$ (which gives $y \geq 0$):

$$y = \ln\!\left(x + \sqrt{x^2 - 1}\right) \quad \blacksquare$$

### 3.4 Derivation of $\operatorname{artanh}\,x$

Let $y = \operatorname{artanh}\,x$So $x = \tanh y$.

$$x = \frac{e^y - e^{-y}}{e^y + e^{-y}} = \frac{e^{2y} - 1}{e^{2y} + 1}$$

$$x(e^{2y} + 1) = e^{2y} - 1 \implies e^{2y}(1 - x) = 1 + x$$

$$e^{2y} = \frac{1 + x}{1 - x} \implies 2y = \ln\!\left(\frac{1 + x}{1 - x}\right)$$

$$y = \frac{1}{2}\ln\!\left(\frac{1 + x}{1 - x}\right) \quad \blacksquare$$

### 3.5 Worked example

**Problem.** Evaluate $\operatorname{arsinh}\,2$ and $\operatorname{artanh}\,\dfrac{1}{3}$ in exact
Logarithmic form.

$$\operatorname{arsinh}\,2 = \ln(2 + \sqrt{5})$$

$$\operatorname{artanh}\,\frac{1}{3} = \frac{1}{2}\ln\!\left(\frac{4/3}{2/3}\right) = \frac{1}{2}\ln 2$$

### 3.6 Domains and ranges

| Function | Domain | Range |
| -------------------------- | ---------------- | ------------ |
| $\operatorname{arsinh}\,x$ | $\mathbb{R}$ | $\mathbb{R}$ |
| $\operatorname{arcosh}\,x$ | $x \geq 1$ | $y \geq 0$ |
| $\operatorname{artanh}\,x$ | $-1 \lt x \lt 1$ | $\mathbb{R}$ |

<hr />

## 4. Calculus of Hyperbolic Functions

### 4.1 Differentiation

$$\frac{d}{dx}(\sinh x) = \cosh x$$

$$\frac{d}{dx}(\cosh x) = \sinh x$$

$$\frac{d}{dx}(\tanh x) = \mathrm{sech}^2\,x$$

**Proof of $\dfrac{d}{dx}\sinh x = \cosh x$:**

$$\frac{d}{dx}\!\left(\frac{e^x - e^{-x}}{2}\right) = \frac{e^x + e^{-x}}{2} = \cosh x \quad \blacksquare$$

### 4.2 Differentiation of inverse hyperbolic functions

$$\frac{d}{dx}(\operatorname{arsinh}\,x) = \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 + 1}◆RB◆$$

$$\frac{d}{dx}(\operatorname{arcosh}\,x) = \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆, \quad x \gt 1$$

$$\frac{d}{dx}(\operatorname{artanh}\,x) = \frac{1}{1 - x^2}, \quad |x| \lt 1$$

**Proof for $\operatorname{arsinh}\,x$.** Let $y = \operatorname{arsinh}\,x$So $x = \sinh y$.

$$\frac{dy}{dx} = \frac◆LB◆1◆RB◆◆LB◆\dfrac{dx}{dy}◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\cosh y◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt{1 + \sinh^2 y}◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt{1 + x^2}◆RB◆ \quad \blacksquare$$

**Proof for $\operatorname{artanh}\,x$.** Let $y = \operatorname{artanh}\,x$So $x = \tanh y$.

$$\frac{dy}{dx} = \frac◆LB◆1◆RB◆◆LB◆\mathrm{sech}^2\,y◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 - \tanh^2 y◆RB◆ = \frac{1}{1 - x^2} \quad \blacksquare$$

### 4.3 Integration

The differentiation results give standard integrals:

$$\int \cosh x\,dx = \sinh x + C$$

$$\int \sinh x\,dx = \cosh x + C$$

$$\int \mathrm{sech}^2\,x\,dx = \tanh x + C$$

### 4.4 Integrals leading to inverse hyperbolic functions

$$\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 + a^2}◆RB◆\,dx = \operatorname{arsinh}\!\left(\frac{x}{a}\right) + C$$

$$\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 - a^2}◆RB◆\,dx = \operatorname{arcosh}\!\left(\frac{x}{a}\right) + C, \quad x \gt a$$

$$\int \frac{1}{a^2 - x^2}\,dx = \frac{1}{a}\operatorname{artanh}\!\left(\frac{x}{a}\right) + C, \quad |x| \lt a$$

**Proof of the first formula.** Let $u = x/a$:

$$\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 + a^2}◆RB◆ = \int \frac◆LB◆a\,du◆RB◆◆LB◆a\sqrt{u^2 + 1}◆RB◆ = \operatorname{arsinh}\,u + C = \operatorname{arsinh}\!\left(\frac{x}{a}\right) + C \quad \blacksquare$$

### 4.5 Worked example: differentiation

**Problem.** Differentiate $f(x) = \sinh(3x^2)$.

$$f'(x) = 6x\cosh(3x^2)$$

### 4.6 Worked example: integration

**Problem.** Evaluate $\displaystyle\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{4x^2 + 9}◆RB◆\,dx$.

$$\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{4x^2 + 9}◆RB◆ = \frac{1}{2}\int \frac◆LB◆d(2x)◆RB◆◆LB◆\sqrt{(2x)^2 + 9}◆RB◆ = \frac{1}{2}\operatorname{arsinh}\!\left(\frac{2x}{3}\right) + C$$

### 4.7 Worked example: definite integral

**Problem.** Evaluate $\displaystyle\int_0^1 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 + 1}◆RB◆$.

$$= \left[\operatorname{arsinh}\,x\right]_0^1 = \operatorname{arsinh}\,1 - \operatorname{arsinh}\,0 = \ln(1 + \sqrt{2}) - 0 = \ln(1 + \sqrt{2})$$

### 4.8 Worked example: integration by substitution with hyperbolic functions

**Problem.** Evaluate $\displaystyle\int \sqrt{x^2 + 4}\,dx$.

Use the substitution $x = 2\sinh u$$dx = 2\cosh u\,du$:

$$\int \sqrt◆LB◆4\sinh^2 u + 4◆RB◆\cdot 2\cosh u\,du = \int 2\cosh u \cdot 2\cosh u\,du = 4\int \cosh^2 u\,du$$

Using $\cosh^2 u = \dfrac◆LB◆1 + \cosh 2u◆RB◆◆LB◆2◆RB◆$:

$$= 4\int \frac◆LB◆1 + \cosh 2u◆RB◆◆LB◆2◆RB◆\,du = 2u + \sinh 2u + C$$

$$= 2u + 2\sinh u\cosh u + C$$

Since $x = 2\sinh u$: $\sinh u = \dfrac{x}{2}$
$\cosh u = \sqrt◆LB◆1 + \dfrac{x^2}{4}◆RB◆ = \dfrac◆LB◆\sqrt{x^2 + 4}◆RB◆◆LB◆2◆RB◆$
$u = \operatorname{arsinh}\!\left(\dfrac{x}{2}\right)$.

$$= 2\operatorname{arsinh}\!\left(\frac{x}{2}\right) + \frac◆LB◆x\sqrt{x^2 + 4}◆RB◆◆LB◆2◆RB◆ + C$$

:::warning Common Pitfall The substitution $x = a\sinh u$ is a powerful technique for integrals
Involving $\sqrt{x^2 + a^2}$. Similarly, $x = a\cosh u$ handles $\sqrt{x^2 - a^2}$ and
$x = a\tanh u$ handles expressions with $a^2 - x^2$. The choice of substitution mirrors the
Trigonometric substitutions but is often simpler algebraically. :::

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

Evaluate $\displaystyle\int_0^2 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 + 16}◆RB◆$.

<details>
<summary>Solution</summary>

$= \left[\operatorname{arsinh}\!\left(\dfrac{x}{4}\right)\right]_0^2 = \operatorname{arsinh}\!\left(\dfrac{1}{2}\right) = \ln\!\left(\dfrac{1}{2} + \sqrt◆LB◆\dfrac{5}{4}◆RB◆\right) = \ln\!\left(\dfrac◆LB◆1 + \sqrt{5}◆RB◆◆LB◆2◆RB◆\right)$.

</details>

### Problem 4

Differentiate $f(x) = x\,\operatorname{arcosh}\,x$ for $x \gt 1$.

<details>
<summary>Solution</summary>

Using the product rule:

$f'(x) = \operatorname{arcosh}\,x + x \cdot \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆ = \operatorname{arcosh}\,x + \dfrac◆LB◆x◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆$.

</details>

---

## 6. Further Proofs and Key Results

### 6.1 Proof: $\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 - a^2}◆RB◆\,dx = \operatorname{arcosh}\!\left(\frac{x}{a}\right) + C$

**Proof.** Let $u = x/a$So $dx = a\,du$:

$$\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 - a^2}◆RB◆ = \int \frac◆LB◆a\,du◆RB◆◆LB◆a\sqrt{u^2 - 1}◆RB◆ = \int \frac◆LB◆du◆RB◆◆LB◆\sqrt{u^2 - 1}◆RB◆$$

Now let $u = \cosh t$So $du = \sinh t\,dt$:

$$= \int \frac◆LB◆\sinh t\,dt◆RB◆◆LB◆\sqrt{\cosh^2 t - 1}◆RB◆ = \int \frac◆LB◆\sinh t\,dt◆RB◆◆LB◆\sinh t◆RB◆ = \int 1\,dt = t + C = \operatorname{arcosh}\,u + C$$

$$= \operatorname{arcosh}\!\left(\frac{x}{a}\right) + C \quad \blacksquare$$

### 6.2 Proof: $\int \frac{1}{a^2 - x^2}\,dx = \frac{1}{a}\operatorname{artanh}\!\left(\frac{x}{a}\right) + C$

**Proof.** Let $u = x/a$So $dx = a\,du$:

$$\int \frac{dx}{a^2 - x^2} = \frac{1}{a}\int \frac{du}{1 - u^2} = \frac{1}{a}\operatorname{artanh}\,u + C = \frac{1}{a}\operatorname{artanh}\!\left(\frac{x}{a}\right) + C \quad \blacksquare$$

### 6.3 Proof: the catenary equation

**Theorem.** A uniform chain hanging under gravity takes the shape
$y = a\cosh\!\left(\dfrac{x}{a}\right) + c$.

**Proof (sketch).** Consider a small element of the chain between horizontal positions $x$ and
$x + \delta x$. Let the tension at position $x$ be $T$Making angle $\theta$ with the horizontal.

Horizontal equilibrium: $T\cos\theta = T_0$ (constant).

Vertical equilibrium: $\dfrac{d}{dx}(T\sin\theta) = w$ where $w$ is the weight per unit length.

Since $T = T_0\sec\theta$ and $T\sin\theta = T_0\tan\theta$:

$$\frac{d}{dx}(T_0\tan\theta) = w \implies T_0\sec^2\theta\,\frac◆LB◆d\theta◆RB◆◆LB◆dx◆RB◆ = w$$

Let $y' = \tan\theta$So
$\dfrac{dy'}{dx} = \sec^2\theta\,\dfrac◆LB◆d\theta◆RB◆◆LB◆dx◆RB◆ = \dfrac{w}{T_0}$.

Integrating: $y' = \dfrac{w}{T_0}\,x + C_1$. Taking $C_1 = 0$ by symmetry:

$$y' = \frac{x}{a} \quad \text{where } a = \frac{T_0}{w}$$

Integrating again: $y = a\cosh\!\left(\dfrac{x}{a}\right) + C$. $\blacksquare$

---

## 7. Common Pitfalls

:::warning Common Pitfall

1. **Sign in the fundamental identity:** Unlike $\cos^2 x + \sin^2 x = 1$The hyperbolic identity
 is $\cosh^2 x - \sinh^2 x = 1$. The minus sign is crucial and is the source of many errors.
2. **Domain of $\operatorname{arcosh}$:** The domain is $x \geq 1$ (not $x > 0$). Attempting to
 evaluate $\operatorname{arcosh}(0.5)$ is undefined.
3. **$\cosh x \geq 1$ always:** When solving $\cosh^2 x = k$ and taking the square root, always take
 the positive root $\cosh x = +\sqrt{k}$ since $\cosh x \geq 1 > 0$ for all real $x$.
4. **Integration: artanh vs ln:** When $|x| > a$ in $\displaystyle\int \frac{dx}{a^2 - x^2}$The
 result involves $\operatorname{arcoth}$ (or an alternative logarithmic form), not
 $\operatorname{artanh}$. Check the domain of the integrand carefully. :::

---

## 8. Additional Exam-Style Questions

### Question 5

**(a)** Solve the equation $\cosh x = 2.5$Giving your answer in exact logarithmic form.

**(b)** Hence solve $\cosh 2x = 2.5$.

<details>
<summary>Solution</summary>

**(a)** $\cosh x = \dfrac{e^x + e^{-x}}{2} = 2.5$

$e^x + e^{-x} = 5 \implies e^{2x} - 5e^x + 1 = 0$

$e^x = \dfrac◆LB◆5 \pm \sqrt{25 - 4}◆RB◆◆LB◆2◆RB◆ = \dfrac◆LB◆5 \pm \sqrt{21}◆RB◆◆LB◆2◆RB◆$

$x = \ln\!\left(\dfrac◆LB◆5 \pm \sqrt{21}◆RB◆◆LB◆2◆RB◆\right)$

Since $\cosh$ is even, both $\pm$ give valid solutions (one positive, one negative).

**(b)** $\cosh 2x = 2.5 \implies 2x = \ln\!\left(\dfrac◆LB◆5 \pm \sqrt{21}◆RB◆◆LB◆2◆RB◆\right)$

$x = \dfrac{1}{2}\ln\!\left(\dfrac◆LB◆5 \pm \sqrt{21}◆RB◆◆LB◆2◆RB◆\right)$

Alternatively, using $\cosh 2x = 2\cosh^2 x - 1 = 2.5 \implies \cosh^2 x = 1.75$Which gives the
Same result.

</details>

### Question 6

**(a)** Prove that $\dfrac{d}{dx}(\operatorname{arcosh}\,x) = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆$
For $x > 1$.

**(b)** Evaluate $\displaystyle\int_2^3 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆$ in exact form.

<details>
<summary>Solution</summary>

**(a)** Let $y = \operatorname{arcosh}\,x$So $x = \cosh y$.

$\dfrac{dx}{dy} = \sinh y$So $\dfrac{dy}{dx} = \dfrac◆LB◆1◆RB◆◆LB◆\sinh y◆RB◆$.

Since $\cosh^2 y - \sinh^2 y = 1$: $\sinh y = \sqrt◆LB◆\cosh^2 y - 1◆RB◆ = \sqrt{x^2 - 1}$.

$\dfrac{dy}{dx} = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆ \quad \blacksquare$

**(b)**
$\displaystyle\int_2^3 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆ = \bigl[\operatorname{arcosh}\,x\bigr]_2^3$

$= \ln(3 + \sqrt{8}) - \ln(2 + \sqrt{3}) = \ln(3 + 2\sqrt{2}) - \ln(2 + \sqrt{3})$

$= \ln\!\left(\dfrac◆LB◆3 + 2\sqrt{2}◆RB◆◆LB◆2 + \sqrt{3}◆RB◆\right)$.

</details>

### Question 7

A curve $C$ has equation $y = \sinh^{-1}(2x - 1)$.

**(a)** Find $\dfrac{dy}{dx}$.

**(b)** Find the equation of the tangent to $C$ at the point where $x = 1$.

<details>
<summary>Solution</summary>

**(a)** $y = \operatorname{arsinh}(2x - 1)$.

$\dfrac{dy}{dx} = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{(2x - 1)^2 + 1}◆RB◆ = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{4x^2 - 4x + 2}◆RB◆$.

**(b)** At $x = 1$: $y = \operatorname{arsinh}(1) = \ln(1 + \sqrt{2})$.

$\dfrac{dy}{dx}\bigg|_{x=1} = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{4 - 4 + 2}◆RB◆ = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{2}◆RB◆ = \sqrt{2}$.

Equation of tangent: $y - \ln(1 + \sqrt{2}) = \sqrt{2}(x - 1)$I.e.

$y = \sqrt{2}\,x - \sqrt{2} + \ln(1 + \sqrt{2})$.

</details>

<hr />

## 9. Advanced Worked Examples

### Example 9.1: Solving hyperbolic equations

**Problem.** Solve $3\sinh x + 4\cosh x = 5$Giving your answer in exact logarithmic form.

**Solution.** Using the exponential definitions:

$$3\cdot\frac{e^x - e^{-x}}{2} + 4\cdot\frac{e^x + e^{-x}}{2} = 5$$

$$3e^x - 3e^{-x} + 4e^x + 4e^{-x} = 10$$

$$7e^x + e^{-x} = 10$$

Multiplying by $e^x$: $7e^{2x} + 1 = 10e^x$

$$7e^{2x} - 10e^x + 1 = 0$$

This is a quadratic in $e^x$:

$$e^x = \frac◆LB◆10 \pm \sqrt{100 - 28}◆RB◆◆LB◆14◆RB◆ = \frac◆LB◆10 \pm \sqrt{72}◆RB◆◆LB◆14◆RB◆ = \frac◆LB◆10 \pm 6\sqrt{2}◆RB◆◆LB◆14◆RB◆ = \frac◆LB◆5 \pm 3\sqrt{2}◆RB◆◆LB◆7◆RB◆$$

$$x = \ln\!\left(\frac◆LB◆5 + 3\sqrt{2}◆RB◆◆LB◆7◆RB◆\right) \quad \text{or} \quad x = \ln\!\left(\frac◆LB◆5 - 3\sqrt{2}◆RB◆◆LB◆7◆RB◆\right)$$

Since $\dfrac◆LB◆5 - 3\sqrt{2}◆RB◆◆LB◆7◆RB◆ \approx 0.109 > 0$Both solutions are valid.

### Example 9.2: Integration using hyperbolic substitution

**Problem.** Evaluate $\displaystyle\int \sqrt{x^2 - 9}\,dx$ for $x \geq 3$.

**Solution.** Use the substitution $x = 3\cosh u$$dx = 3\sinh u\,du$:

$$\int \sqrt◆LB◆9\cosh^2 u - 9◆RB◆\cdot 3\sinh u\,du = \int 3\sinh u \cdot 3\sinh u\,du = 9\int \sinh^2 u\,du$$

Using $\sinh^2 u = \dfrac◆LB◆\cosh 2u - 1◆RB◆◆LB◆2◆RB◆$:

$$= 9\int \frac◆LB◆\cosh 2u - 1◆RB◆◆LB◆2◆RB◆\,du = \frac{9}{2}\left(\frac◆LB◆\sinh 2u◆RB◆◆LB◆2◆RB◆ - u\right) + C = \frac{9}{4}\sinh 2u - \frac{9}{2}u + C$$

Since $x = 3\cosh u$: $\cosh u = \dfrac{x}{3}$
$\sinh u = \sqrt◆LB◆\dfrac{x^2}{9} - 1◆RB◆ = \dfrac◆LB◆\sqrt{x^2 - 9}◆RB◆◆LB◆3◆RB◆$.

$\sinh 2u = 2\sinh u\cosh u = \dfrac◆LB◆2x\sqrt{x^2 - 9}◆RB◆◆LB◆9◆RB◆$.

$u = \operatorname{arcosh}\!\left(\dfrac{x}{3}\right) = \ln\!\left(\dfrac{x}{3} + \sqrt◆LB◆\dfrac{x^2}{9} - 1◆RB◆\right)$.

$$= \frac◆LB◆x\sqrt{x^2 - 9}◆RB◆◆LB◆2◆RB◆ - \frac{9}{2}\operatorname{arcosh}\!\left(\frac{x}{3}\right) + C$$

### Example 9.3: Proving an identity using Osborne's rule

**Problem.** Prove that $\cosh 3x = 4\cosh^3 x - 3\cosh x$.

**Solution.** From the trigonometric identity $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$Applying
Osborne's rule: since $\cos^3\theta$ contains no products of $\sin$It remains unchanged.
Therefore:

$$\cosh 3x = 4\cosh^3 x - 3\cosh x$$

**Direct proof.** Starting from $\cosh 3x = \cosh(2x + x)$:

$$= \cosh 2x\cosh x + \sinh 2x\sinh x = (2\cosh^2 x - 1)\cosh x + 2\sinh^2 x\cosh x$$

$$= 2\cosh^3 x - \cosh x + 2(\cosh^2 x - 1)\cosh x = 2\cosh^3 x - \cosh x + 2\cosh^3 x - 2\cosh x$$

$$= 4\cosh^3 x - 3\cosh x \quad \blacksquare$$

### Example 9.4: Differentiation involving multiple hyperbolic functions

**Problem.** Find $\dfrac{dy}{dx}$ where $y = \dfrac◆LB◆\sinh x◆RB◆◆LB◆1 + \cosh x◆RB◆$ and simplify
Your answer.

**Solution.** Using the quotient rule:

$$\frac{dy}{dx} = \frac◆LB◆\cosh x(1 + \cosh x) - \sinh x \cdot \sinh x◆RB◆◆LB◆(1 + \cosh x)^2◆RB◆ = \frac◆LB◆\cosh x + \cosh^2 x - \sinh^2 x◆RB◆◆LB◆(1 + \cosh x)^2◆RB◆$$

Using $\cosh^2 x - \sinh^2 x = 1$:

$$= \frac◆LB◆\cosh x + 1◆RB◆◆LB◆(1 + \cosh x)^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 + \cosh x◆RB◆ = \mathrm{sech}^2\!\left(\frac{x}{2}\right)$$

The final simplification uses the identity $1 + \cosh x = 2\cosh^2(x/2)$.

### Example 9.5: Definite integral with inverse hyperbolic functions

**Problem.** Evaluate $\displaystyle\int_0^1 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{1 + 4x^2}◆RB◆$.

**Solution.** Write $\sqrt{1 + 4x^2} = \sqrt{4(x^2 + 1/4)} = 2\sqrt{x^2 + (1/2)^2}$.

$$\int_0^1 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{1 + 4x^2}◆RB◆ = \frac{1}{2}\int_0^1 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 + 1/4}◆RB◆ = \frac{1}{2}\left[\operatorname{arsinh}\!\left(\frac{x}{1/2}\right)\right]_0^1$$

$$= \frac{1}{2}\bigl[\operatorname{arsinh}\,2 - \operatorname{arsinh}\,0\bigr] = \frac{1}{2}\ln(2 + \sqrt{5})$$

### Example 9.6: Parametric differentiation with hyperbolic functions

**Problem.** A curve is given parametrically by $x = 2\cosh t$$y = 3\sinh t$. Find the value of
$\dfrac{dy}{dx}$ at $t = \ln 2$.

**Solution.** $\dfrac{dx}{dt} = 2\sinh t$$\dfrac{dy}{dt} = 3\cosh t$.

$$\frac{dy}{dx} = \frac◆LB◆3\cosh t◆RB◆◆LB◆2\sinh t◆RB◆ = \frac{3}{2}\coth t$$

At $t = \ln 2$: $\cosh(\ln 2) = \dfrac{2 + 1/2}{2} = \dfrac{5}{4}$
$\sinh(\ln 2) = \dfrac{2 - 1/2}{2} = \dfrac{3}{4}$.

$$\frac{dy}{dx}\bigg|_{t = \ln 2} = \frac◆LB◆3 \cdot 5/4◆RB◆◆LB◆2 \cdot 3/4◆RB◆ = \frac{15/4}{3/2} = \frac{5}{2}$$

### Example 9.7: Verifying a reduction formula

**Problem.** Let $I_n = \displaystyle\int_0^{\pi/2} \cosh^n(\sin x)\,dx$ is not well-formed.
Instead, verify that
$\displaystyle\int \tanh^3 x\,dx = \ln(\cosh x) - \dfrac{1}{2}\mathrm{sech}^2\,x\tanh x + C$ is
Incorrect, and find the correct integral.

**Solution.** Let us compute $\displaystyle\int \tanh^3 x\,dx$ correctly.

Write
$\tanh^3 x = \tanh x \cdot \tanh^2 x = \tanh x(1 - \mathrm{sech}^2\,x) = \tanh x - \tanh x\,\mathrm{sech}^2\,x$.

$$\int \tanh^3 x\,dx = \int \tanh x\,dx - \int \tanh x\,\mathrm{sech}^2\,x\,dx$$

The first integral: $\displaystyle\int\tanh x\,dx = \ln(\cosh x) + C$.

For the second integral, let $u = \tanh x$$du = \mathrm{sech}^2\,x\,dx$:

$$\int u\,du = \frac{u^2}{2} + C = \frac◆LB◆\tanh^2 x◆RB◆◆LB◆2◆RB◆ + C$$

Therefore:

$$\boxed{\int \tanh^3 x\,dx = \ln(\cosh x) - \frac◆LB◆\tanh^2 x◆RB◆◆LB◆2◆RB◆ + C}$$

### Example 9.8: Arc length of a hyperbolic cosine curve

**Problem.** Find the arc length of $y = a\cosh(x/a)$ from $x = 0$ to $x = b$.

**Solution.** $\dfrac{dy}{dx} = \sinh(x/a)$.

$$s = \int_0^b \sqrt◆LB◆1 + \sinh^2(x/a)◆RB◆\,dx = \int_0^b \cosh(x/a)\,dx = \bigl[a\sinh(x/a)\bigr]_0^b = a\sinh(b/a)$$

---

## 10. Connections to Other Topics

### 10.1 Hyperbolic functions and differential equations

The differential equation $\dfrac{d^2y}{dx^2} - y = 0$ has general solution
$y = A\cosh x + B\sinh x$Which can also be written $y = Ce^x + De^{-x}$. See
[Differential Equations](/docs/alevel/further-maths/pure-mathematics/differential-equations).

### 10.2 Hyperbolic functions and complex numbers

The identities $\cosh x = \cos(ix)$ and $\sinh x = -i\sin(ix)$ connect the two topics. See
[Complex Numbers](/docs/alevel/further-maths/pure/further-complex-numbers-extended).

### 10.3 Hyperbolic functions and integration techniques

Hyperbolic substitutions ($x = a\sinh u$$x = a\cosh u$) are powerful alternatives to trigonometric
Substitutions. See
[Further Calculus](/docs/alevel/further-maths/pure-mathematics/further-calculus).

### 10.4 The catenary and mechanics

The shape $y = a\cosh(x/a)$ describes a hanging chain. The arc length is $s = a\sinh(x/a)$. See
[Further Mechanics](/docs/alevel/further-maths/further-mechanics/projectile-motion).

---

## 11. Additional Exam-Style Questions

### Question 8

**(a)** Given $\sinh x = \dfrac{12}{5}$Find the exact value of $\cosh x$ and $\tanh x$.

**(b)** Hence evaluate $\operatorname{arcosh}\!\left(\dfrac{13}{5}\right)$ in exact logarithmic
Form.

<details>
<summary>Solution</summary>

**(a)** $\cosh^2 x = 1 + \sinh^2 x = 1 + \dfrac{144}{25} = \dfrac{169}{25}$So
$\cosh x = \dfrac{13}{5}$ (positive root).

$\tanh x = \dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆ = \dfrac{12/5}{13/5} = \dfrac{12}{13}$.

**(b)** Since $\cosh x = \dfrac{13}{5}$:

$$\operatorname{arcosh}\!\left(\frac{13}{5}\right) = x = \ln\!\left(\frac{13}{5} + \sqrt◆LB◆\frac{169}{25} - 1◆RB◆\right) = \ln\!\left(\frac{13}{5} + \frac{12}{5}\right) = \ln 5$$

</details>

### Question 9

Find the exact value of $\displaystyle\int_0^{\ln 2} \cosh 2x\,dx$.

<details>
<summary>Solution</summary>

$$\int_0^{\ln 2}\cosh 2x\,dx = \left[\frac◆LB◆\sinh 2x◆RB◆◆LB◆2◆RB◆\right]_0^{\ln 2} = \frac◆LB◆\sinh(2\ln 2)◆RB◆◆LB◆2◆RB◆$$

$\sinh(2\ln 2) = \dfrac◆LB◆e^{2\ln 2} - e^{-2\ln 2}◆RB◆◆LB◆2◆RB◆ = \dfrac{4 - 1/4}{2} = \dfrac{15}{8}$.

$$\int_0^{\ln 2}\cosh 2x\,dx = \frac{15}{16}$$

</details>

### Question 10

**Prove by induction** that $\dfrac{d^n}{dx^n}(\sinh x) = \sinh x$ when $n$ is even and
$\dfrac{d^n}{dx^n}(\sinh x) = \cosh x$ when $n$ is odd.

<details>
<summary>Solution</summary>

**Base case ($n = 0$):** $\dfrac{d^0}{dx^0}(\sinh x) = \sinh x$. Correct for $n = 0$ (even).

**Base case ($n = 1$):** $\dfrac{d}{dx}(\sinh x) = \cosh x$. Correct for $n = 1$ (odd).

**Inductive step.** Assume the result holds for $n = k$.

If $k$ is even: $\dfrac{d^k}{dx^k}(\sinh x) = \sinh x$. Then
$\dfrac{d^{k+1}}{dx^{k+1}}(\sinh x) = \dfrac{d}{dx}(\sinh x) = \cosh x$. Since $k + 1$ is odd, the
Result holds.

If $k$ is odd: $\dfrac{d^k}{dx^k}(\sinh x) = \cosh x$. Then
$\dfrac{d^{k+1}}{dx^{k+1}}(\sinh x) = \dfrac{d}{dx}(\cosh x) = \sinh x$. Since $k + 1$ is even, the
Result holds. $\blacksquare$

</details>

### Question 11

Evaluate $\displaystyle\int_{3/2}^2 \frac◆LB◆3◆RB◆◆LB◆\sqrt{4x^2 - 9}◆RB◆\,dx$ in exact form.

<details>
<summary>Solution</summary>

$$\int_{3/2}^2 \frac◆LB◆3◆RB◆◆LB◆\sqrt{4x^2 - 9}◆RB◆\,dx = \frac{3}{2}\int_{3/2}^2 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 - 9/4}◆RB◆ = \frac{3}{2}\left[\operatorname{arcosh}\!\left(\frac{2x}{3}\right)\right]_{3/2}^2$$

$$= \frac{3}{2}\left[\operatorname{arcosh}\!\left(\frac{4}{3}\right) - \operatorname{arcosh}(1)\right] = \frac{3}{2}\operatorname{arcosh}\!\left(\frac{4}{3}\right)$$

$$= \frac{3}{2}\ln\!\left(\frac{4}{3} + \sqrt◆LB◆\frac{16}{9} - 1◆RB◆\right) = \frac{3}{2}\ln\!\left(\frac◆LB◆4 + \sqrt{7}◆RB◆◆LB◆3◆RB◆\right)$$

</details>

### Question 12

Given that $y = \ln(\sinh x)$Show that $\dfrac{d^2y}{dx^2} = -\mathrm{cosech}^2\,x$.

<details>
<summary>Solution</summary>

$$\frac{dy}{dx} = \frac◆LB◆\cosh x◆RB◆◆LB◆\sinh x◆RB◆ = \coth x$$

$$\frac{d^2y}{dx^2} = \frac{d}{dx}(\coth x) = -\mathrm{cosech}^2\,x = \frac◆LB◆-1◆RB◆◆LB◆\sinh^2 x◆RB◆ \quad \blacksquare$$

</details>

### Question 13

**(a)** Express $\sinh(2\ln 3)$ in the form $\dfrac{a}{b}$ where $a, b$ are integers.

**(b)** Hence find $\ln 3 - \ln 2$ in terms of inverse hyperbolic functions.

<details>
<summary>Solution</summary>

**(a)** $\sinh(2\ln 3) = 2\sinh(\ln 3)\cosh(\ln 3)$.

$\sinh(\ln 3) = \dfrac{3 - 1/3}{2} = \dfrac{4}{3}$
$\cosh(\ln 3) = \dfrac{3 + 1/3}{2} = \dfrac{5}{3}$.

$\sinh(2\ln 3) = 2 \cdot \dfrac{4}{3} \cdot \dfrac{5}{3} = \dfrac{40}{9}$.

**(b)** $\ln 3 - \ln 2 = \ln(3/2)$. Since $\operatorname{arsinh}\,x = \ln(x + \sqrt{x^2+1})$:

$\operatorname{arsinh}\!\left(\dfrac{3}{4}\right) = \ln\!\left(\dfrac{3}{4} + \sqrt◆LB◆\dfrac{9}{16}+1◆RB◆\right) = \ln\!\left(\dfrac{3}{4} + \dfrac{5}{4}\right) = \ln 2$.

Therefore $\ln 2 = \operatorname{arsinh}(3/4)$ and
$\ln 3 = \ln 2 + \ln(3/2) = \operatorname{arsinh}(3/4) + \operatorname{artanh}(1/5)$ (using
$\operatorname{artanh}(1/5) = \frac{1}{2}\ln(6/4) = \frac{1}{2}\ln(3/2)$).

So $\ln 3 - \ln 2 = \operatorname{artanh}(1/5)$.

</details>

---

## 12. Summary of Extended Results

| Identity | Formula |
| ---------------------- | -------------------------------------------------------------------------------------- |
| Triple angle | $\sinh 3x = 3\sinh x + 4\sinh^3 x$ |
| Triple angle | $\cosh 3x = 4\cosh^3 x - 3\cosh x$ |
| Half angle | $\cosh^2\!\left(\dfrac{x}{2}\right) = \dfrac◆LB◆1 + \cosh x◆RB◆◆LB◆2◆RB◆$ |
| Half angle | $\sinh^2\!\left(\dfrac{x}{2}\right) = \dfrac◆LB◆\cosh x - 1◆RB◆◆LB◆2◆RB◆$ |
| Integral of $\tanh$ | $\displaystyle\int\tanh x\,dx = \ln(\cosh x) + C$ |
| Integral of $\coth$ | $\displaystyle\int\coth x\,dx = \ln(\sinh x) + C$ |
| Integral of $\tanh^3$ | $\displaystyle\int\tanh^3 x\,dx = \ln(\cosh x) - \dfrac◆LB◆\tanh^2 x◆RB◆◆LB◆2◆RB◆ + C$ |
| Arc length of catenary | $s = a\sinh(b/a)$ for $y = a\cosh(x/a)$ |

---

## 13. Further Common Pitfalls

:::warning Common Pitfall

1. **Substitution domain errors:** When using $x = a\cosh u$The substitution requires $x \geq a$
 (since $\cosh u \geq 1$). Attempting to use $x = a\cosh u$ for $x < a$ leads to an error. Use
 $x = a\sinh u$ for $\sqrt{x^2 + a^2}$ and $x = a\cosh u$ for $\sqrt{x^2 - a^2}$.
2. **Confusing $\operatorname{artanh}$ and $\ln$ forms:** The formula
 $\displaystyle\int\frac{dx}{a^2 - x^2} = \frac{1}{2a}\ln\!\left|\frac{a+x}{a-x}\right|$ is valid
 for all $|x| \neq a$But $\dfrac{1}{a}\operatorname{artanh}(x/a)$ is only valid for $|x| < a$.
 For $|x| > a$Use the logarithmic form or $\operatorname{arcoth}$.
3. **No absolute value needed for $\cosh$:** Unlike $|\cos x|$$\sqrt◆LB◆\cosh^2 x◆RB◆ = \cosh x$
 (no absolute value needed) since $\cosh x \geq 1 > 0$ for all real $x$.
4. **Differential equation solutions:** The equation $y'' - y = 0$ has solutions in both exponential
 and hyperbolic forms. When boundary conditions involve $y(0)$ and $y'(0)$The hyperbolic form
 $y = A\cosh x + B\sinh x$ is often more convenient since $\cosh 0 = 1$ and $\sinh 0 = 0$. :::

---

## 14. Advanced Worked Examples

### Example 14.1: Integration using $\sinh$ substitution

**Problem.** Evaluate $\displaystyle\int \sqrt{x^2 + 9}\,dx$.

**Solution.** Let $x = 3\sinh u$$dx = 3\cosh u\,du$.

$$\int 3\cosh u \cdot 3\cosh u\,du = 9\int \cosh^2 u\,du = 9\int \frac◆LB◆1+\cosh 2u◆RB◆◆LB◆2◆RB◆\,du = \frac{9}{2}\!\left(u + \frac◆LB◆\sinh 2u◆RB◆◆LB◆2◆RB◆\right)$$

$$= \frac{9u}{2} + \frac◆LB◆9\sinh u\cosh u◆RB◆◆LB◆2◆RB◆ = \frac{9}{2}\operatorname{arsinh}\!\left(\frac{x}{3}\right) + \frac◆LB◆x\sqrt{x^2+9}◆RB◆◆LB◆2◆RB◆ + C$$

### Example 14.2: Solving $y'' - 4y = 0$ with hyperbolic functions

**Problem.** Solve $y'' - 4y = 0$ with $y(0) = 3$ and $y'(0) = 8$.

**Solution.** Auxiliary: $m^2 - 4 = 0 \implies m = \pm 2$.

$y = A\cosh 2x + B\sinh 2x$.

$y(0) = A = 3$. $y'(0) = 2B = 8 \implies B = 4$.

$\boxed{y = 3\cosh 2x + 4\sinh 2x}$

In exponential form:
$y = 3 \cdot \dfrac{e^{2x}+e^{-2x}}{2} + 4 \cdot \dfrac{e^{2x}-e^{-2x}}{2} = \dfrac{7}{2}e^{2x} - \dfrac{1}{2}e^{-2x}$.

### Example 14.3: Arc length of a catenary

**Problem.** Find the arc length of $y = \cosh x$ from $x = 0$ to $x = 1$.

**Solution.** $y' = \sinh x$. $ds = \sqrt◆LB◆1 + \sinh^2 x◆RB◆\,dx = \cosh x\,dx$.

$$s = \int_0^1 \cosh x\,dx = [\sinh x]_0^1 = \sinh 1 = \frac{e - e^{-1}}{2} \approx \boxed{1.175}$$

### Example 14.4: Osborn's rule applied to $\tan 2x$

**Problem.** Using Osborn's rule, find $\tanh 2x$ in terms of $\tanh x$.

**Solution.** $\tan 2x = \dfrac◆LB◆2\tan x◆RB◆◆LB◆1-\tan^2 x◆RB◆$. Apply Osborn's rule (change
$\tan^2 x$ to $-\tanh^2 x$):

$$\boxed{\tanh 2x = \frac◆LB◆2\tanh x◆RB◆◆LB◆1+\tanh^2 x◆RB◆}$$

### Example 14.5: Deriving the Gudermannian function relationship

**Problem.** The Gudermannian function relates circular and hyperbolic functions:
$\sec\theta = \cosh u$ where $u = \operatorname{gd}^{-1}(\theta)$. Show that
$\dfrac◆LB◆d\theta◆RB◆◆LB◆du◆RB◆ = \operatorname{sech}\, u$.

**Solution.** $\sec\theta = \cosh u \implies \cos\theta = \operatorname{sech}\, u$.

Differentiating implicitly with respect to $u$:
$-\sin\theta \cdot \dfrac◆LB◆d\theta◆RB◆◆LB◆du◆RB◆ = -\operatorname{sech}\,u \tanh u$.

$\dfrac◆LB◆d\theta◆RB◆◆LB◆du◆RB◆ = \dfrac◆LB◆\operatorname{sech}\,u \tanh u◆RB◆◆LB◆\sin\theta◆RB◆$.

Since $\cos\theta = \operatorname{sech}\,u$:
$\sin\theta = \sqrt◆LB◆1-\operatorname{sech}^2 u◆RB◆ = \sqrt◆LB◆1-\dfrac{1}{\cosh^2 u}◆RB◆ = \dfrac◆LB◆\sqrt{\cosh^2 u - 1}◆RB◆◆LB◆\cosh u◆RB◆ = \dfrac◆LB◆\sinh u◆RB◆◆LB◆\cosh u◆RB◆ = \tanh u$.

$\dfrac◆LB◆d\theta◆RB◆◆LB◆du◆RB◆ = \dfrac◆LB◆\operatorname{sech}\,u \tanh u◆RB◆◆LB◆\tanh u◆RB◆ = \boxed{\operatorname{sech}\,u}$.
$\blacksquare$

---

## 15. Additional Exam-Style Questions

### Question 16

Evaluate $\displaystyle\int_1^2 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆$.

<details>
<summary>Solution</summary>

$= [\operatorname{arcosh}\, x]_1^2 = \ln(2+\sqrt{3}) - \ln 1 = \boxed{\ln(2+\sqrt{3})}$.

</details>

### Question 17

**Prove that** $\sinh(x+y) = \sinh x\cosh y + \cosh x\sinh y$.

<details>
<summary>Solution</summary>

$\sinh x\cosh y + \cosh x\sinh y = \dfrac{(e^x-e^{-x})(e^y+e^{-y}) + (e^x+e^{-x})(e^y-e^{-y})}{4}$

$= \dfrac{e^{x+y}+e^{x-y}-e^{-x+y}-e^{-x-y}+e^{x+y}-e^{x-y}+e^{-x+y}-e^{-x-y}}{4}$

$= \dfrac{2e^{x+y}-2e^{-(x+y)}}{4} = \dfrac{e^{x+y}-e^{-(x+y)}}{2} = \sinh(x+y)$. $\blacksquare$

</details>

### Question 18

Find $\dfrac{d}{dx}[\operatorname{arcosh}\, x]$ and state the domain.

<details>
<summary>Solution</summary>

Let $y = \operatorname{arcosh}\, x$So $x = \cosh y$ and $x \geq 1$.

$1 = \sinh y \cdot \dfrac{dy}{dx}$.

$\dfrac{dy}{dx} = \dfrac◆LB◆1◆RB◆◆LB◆\sinh y◆RB◆ = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{\cosh^2 y - 1}◆RB◆ = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-1}◆RB◆$.

$\boxed{\dfrac{d}{dx}[\operatorname{arcosh}\, x] = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-1}◆RB◆}$ for
$x > 1$.

</details>

---

## 16. Advanced Topics

### 16.1 The Gudermannian function

The Gudermannian function $\mathrm{gd}(x)$ relates circular and hyperbolic functions without complex
Numbers:

$\sin(\mathrm{gd}\,x) = \tanh x$$\cos(\mathrm{gd}\,x) = \mathrm{sech}\,x$
$\tan(\mathrm{gd}\,x) = \sinh x$.

$\dfrac{d}{dx}\mathrm{gd}(x) = \mathrm{sech}\,x$.

### 16.2 Hyperbolic functions and the Lorentz transformation

In special relativity, the Lorentz transformation uses hyperbolic functions. If $\beta = v/c$ and
$\gamma = (1-\beta^2)^{-1/2} = \cosh\phi$ where $\tanh\phi = \beta$Then:

$t' = t\cosh\phi - x\sinh\phi/c$$x' = x\cosh\phi - ct\sinh\phi$.

### 16.3 Inverse hyperbolic functions in logarithmic form

| Function | Logarithmic Form | Domain |
| -------------------------- | -------------------------------------------------------------- | -------------- | --- | ---- |
| $\operatorname{arsinh}\,x$ | $\ln(x+\sqrt{x^2+1})$ | all real $x$ |
| $\operatorname{arcosh}\,x$ | $\ln(x+\sqrt{x^2-1})$ | $x \geq 1$ |
| $\operatorname{artanh}\,x$ | $\dfrac{1}{2}\ln\!\left(\dfrac{1+x}{1-x}\right)$ | $              | x   | < 1$ |
| $\operatorname{arcoth}\,x$ | $\dfrac{1}{2}\ln\!\left(\dfrac{x+1}{x-1}\right)$ | $              | x   | > 1$ |
| $\operatorname{arsech}\,x$ | $\ln\!\left(\dfrac◆LB◆1+\sqrt{1-x^2}◆RB◆◆LB◆x◆RB◆\right)$ | $0 < x \leq 1$ |
| $\operatorname{arcsch}\,x$ | $\ln\!\left(\dfrac{1}{x}+\sqrt◆LB◆\dfrac{1}{x^2}+1◆RB◆\right)$ | $x \neq 0$ |

### 16.4 Hyperbolic functions and catenary applications

The catenary $y = a\cosh(x/a)$ appears in:

- Suspension bridges (cables hang in a catenary)
- Arch shapes (the inverted catenary is the strongest arch)
- Power lines between poles

---

## 17. Further Exam-Style Questions

### Question 19

Solve the equation $2\cosh x - \sinh x = 3$.

<details>
<summary>Solution</summary>

$2\cdot\dfrac{e^x+e^{-x}}{2} - \dfrac{e^x-e^{-x}}{2} = 3$.

$e^x+e^{-x} - \dfrac{e^x}{2} + \dfrac{e^{-x}}{2} = 3$.

$\dfrac{e^x}{2} + \dfrac{3e^{-x}}{2} = 3 \implies e^x + 3e^{-x} = 6$.

$e^{2x} - 6e^x + 3 = 0$.

$e^x = \dfrac◆LB◆6 \pm \sqrt{36-12}◆RB◆◆LB◆2◆RB◆ = 3 \pm \sqrt{6}$.

$x = \ln(3+\sqrt{6})$ or $x = \ln(3-\sqrt{6})$.

Since $3-\sqrt{6} > 0$Both are valid.

</details>

### Question 20

**Prove that** $\operatorname{arcosh}\,x = \ln(x+\sqrt{x^2-1})$ for $x \geq 1$.

<details>
<summary>Solution</summary>

Let $y = \operatorname{arcosh}\,x$So $x = \cosh y = \dfrac{e^y+e^{-y}}{2}$.

$2x = e^y + e^{-y} \implies e^{2y} - 2xe^y + 1 = 0$.

$e^y = \dfrac◆LB◆2x \pm \sqrt{4x^2-4}◆RB◆◆LB◆2◆RB◆ = x \pm \sqrt{x^2-1}$.

Since $e^y \geq 1$ and $x \geq 1$: $e^y = x + \sqrt{x^2-1}$ (the positive root, since
$x-\sqrt{x^2-1} \leq 1$).

$y = \ln(x+\sqrt{x^2-1})$. $\blacksquare$

</details>

---

## 17. Further Advanced Topics

### 17.1 Hyperbolic substitutions in integration

Standard substitutions:

- $\sqrt{x^2+a^2}$: use $x = a\cosh t$
- $\sqrt{x^2-a^2}$: use $x = a\cosh t$ (for $x \geq a$)
- $\sqrt{a^2-x^2}$: use $x = a\cos t$ (circular, not hyperbolic)

Example: $\displaystyle\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2-4}◆RB◆$ with $x = 2\cosh t$:

$dx = 2\sinh t\,dt$$\sqrt{x^2-4} = 2\sinh t$.

$\displaystyle\int \frac◆LB◆2\sinh t◆RB◆◆LB◆2\sinh t◆RB◆\,dt = t = \operatorname{arcosh}\!\left(\frac{x}{2}\right) + C$.

### 17.2 Gudermannian function

The Gudermannian function relates circular and hyperbolic functions without complex numbers:

$$\operatorname{gd}(x) = \int_0^x \operatorname{sech} t\,dt = 2\arctan(e^x) - \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$$

Key identities:

- $\sin(\operatorname{gd}\,x) = \tanh x$
- $\cos(\operatorname{gd}\,x) = \operatorname{sech} x$
- $\tan(\operatorname{gd}\,x) = \sinh x$

### 17.3 Hyperbolic functions and catenary

The catenary curve $y = a\cosh\!\left(\dfrac{x}{a}\right)$ describes a hanging chain.

Arc length from the vertex: $s = a\sinh\!\left(\dfrac{x}{a}\right)$.

---

## 18. Further Exam-Style Questions

### Question 16

**Prove that** $\operatorname{arsinh}\,x = \ln(x+\sqrt{x^2+1})$.

<details>
<summary>Solution</summary>

Let $y = \operatorname{arsinh}\,x$So $x = \sinh y = \dfrac{e^y-e^{-y}}{2}$.

$2x = e^y - e^{-y} \implies e^{2y} - 2xe^y - 1 = 0$.

$e^y = \dfrac◆LB◆2x + \sqrt{4x^2+4}◆RB◆◆LB◆2◆RB◆ = x + \sqrt{x^2+1}$ (positive root since
$e^y > 0$).

$y = \ln(x+\sqrt{x^2+1})$. $\blacksquare$

</details>

### Question 17

Use the substitution $x = 3\sinh t$ to evaluate
$\displaystyle\int_0^{\operatorname{arsinh}(4/3)} \sqrt{x^2+9}\,dx$.

<details>
<summary>Solution</summary>

$dx = 3\cosh t\,dt$$\sqrt{x^2+9} = 3\cosh t$.

$= \displaystyle\int_0^{\operatorname{arsinh}(4/3)} 9\cosh^2 t\,dt = \frac{9}{2}\int_0^{\operatorname{arsinh}(4/3)} (1+\cosh 2t)\,dt$

$= \frac{9}{2}\!\left[t + \frac◆LB◆\sinh 2t◆RB◆◆LB◆2◆RB◆\right]_0^{\operatorname{arsinh}(4/3)}$.

At $t = \operatorname{arsinh}(4/3)$: $\sinh t = 4/3$$\cosh t = 5/3$
$\sinh 2t = 2\cdot\dfrac{4}{3}\cdot\dfrac{5}{3} = \dfrac{40}{9}$.

$= \frac{9}{2}\!\left(\operatorname{arsinh}\!\frac{4}{3} + \frac{20}{9}\right) = \boxed{\frac{9}{2}\operatorname{arsinh}\!\frac{4}{3} + 10}$.

</details>
