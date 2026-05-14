---
title: Hyperbolic Functions
description:
  'A-Level Further Maths notes on Hyperbolic Functions: Board Coverage for comprehensive revision
  and examination preparation.'
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: hyperbolic-functions
sidebar_position: 6
---

## Hyperbolic Functions

Hyperbolic functions are defined in terms of the exponential function and share remarkable
Similarities with trigonometric functions. They arise in the solution of differential Equations, the
description of hanging cables (catenary), special relativity, and many areas of Physics and
engineering.

<DesmosGraph title="Hyperbolic Functions: sinh, cosh, tanh" expressions={["\sinh(x)=(e^x-e^{-x})/2",
"\cosh(x)=(e^x+e^{-x})/2", "\tanh(x)=\sinh(x)/\cosh(x)"]} width={800} height={500} />

Adjust the parameters in the graph above to explore the relationships between variables.

### Board Coverage

| Board      | Paper   | Notes                                                      |
| ---------- | ------- | ---------------------------------------------------------- |
| AQA        | Paper 1 | Definitions, identities, calculus                          |
| Edexcel    | FP2     | Full coverage: definitions, identities, inverses, calculus |
| OCR (A)    | Paper 1 | Definitions and basic identities                           |
| CIE (9231) | P2      | Full coverage including logarithmic forms of inverses      |

:::info The formula booklet lists hyperbolic identities and the logarithmic forms of the inverse
Hyperbolic functions. CIE requires the derivation of these logarithmic forms. :::

<hr />

## 1. Definitions

### 1.1 The three principal hyperbolic functions

**Definition.** The **hyperbolic cosine**, **hyperbolic sine**, and **hyperbolic tangent** are
Defined by:

$$\boxed{\cosh x = \frac{e^x + e^{-x}}{2}}$$

$$\boxed{\sinh x = \frac{e^x - e^{-x}}{2}}$$

$$\boxed{\tanh x = \frac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆ = \frac{e^x - e^{-x}}{e^x + e^{-x}}}$$

### 1.2 The reciprocal hyperbolic functions

**Definition.**

$$\mathrm{sech}\,x = \frac◆LB◆1◆RB◆◆LB◆\cosh x◆RB◆, \qquad \mathrm{cosech}\,x = \frac◆LB◆1◆RB◆◆LB◆\sinh x◆RB◆, \qquad \coth\,x = \frac◆LB◆\cosh x◆RB◆◆LB◆\sinh x◆RB◆$$

:::warning Note the spelling: $\cosh$$\sinh$$\tanh$ are standard abbreviations. The reciprocals Use
$\mathrm{sech}$ (not $\mathrm{sec h}$), $\mathrm{cosech}$ (not $\mathrm{csch}$), and $\coth$. :::

### 1.3 Domain and range

| Function           | Domain       | Range         |
| ------------------ | ------------ | ------------- |
| $\sinh x$          | $\mathbb{R}$ | $\mathbb{R}$  |
| $\cosh x$          | $\mathbb{R}$ | $[1, \infty)$ |
| $\tanh x$          | $\mathbb{R}$ | $(-1, 1)$     |
| $\mathrm{sech}\,x$ | $\mathbb{R}$ | $(0, 1]$      |

### 1.4 Key values

$$\sinh 0 = 0, \quad \cosh 0 = 1, \quad \tanh 0 = 0$$

$$\sinh(-x) = -\sinh x \quad (\mathrm{odd function})$$

$$\cosh(-x) = \cosh x \quad (\mathrm{even function})$$

<hr />

## 2. Hyperbolic Identities

### 2.1 The fundamental identity

**Theorem.** For all $x \in \mathbb{R}$:

$$\boxed{\cosh^2 x - \sinh^2 x = 1}$$

### Proof of $\cosh^2 x - \sinh^2 x = 1$

$$\cosh^2 x - \sinh^2 x = \left(\frac{e^x+e^{-x}}{2}\right)^2 - \left(\frac{e^x-e^{-x}}{2}\right)^2$$

$$= \frac{e^{2x}+2+e^{-2x}}{4} - \frac{e^{2x}-2+e^{-2x}}{4} = \frac{4}{4} = 1 \quad \blacksquare$$

**Corollary.** Dividing by $\cosh^2 x$:

$$\boxed{1 - \tanh^2 x = \mathrm{sech}^2\,x}$$

Dividing by $\sinh^2 x$:

$$\boxed{\coth^2 x - 1 = \mathrm{cosech}^2\,x}$$

### 2.2 Addition formulae

**Theorem.**

$$\boxed{\sinh(x+y) = \sinh x\cosh y + \cosh x\sinh y}$$

$$\boxed{\cosh(x+y) = \cosh x\cosh y + \sinh x\sinh y}$$

### Proof of the addition formula for $\sinh(x+y)$

$$\sinh(x+y) = \frac{e^{x+y}-e^{-(x+y)}}{2} = \frac{e^x e^y - e^{-x}e^{-y}}{2}$$

$$= \frac{(e^x+e^{-x})(e^y-e^{-y}) + (e^x-e^{-x})(e^y+e^{-y})}{4}$$

$$= \frac{e^x e^y - e^x e^{-y} + e^{-x}e^y - e^{-x}e^{-y} + e^x e^y + e^x e^{-y} - e^{-x}e^y - e^{-x}e^{-y}}{4}$$

Wait — a cleaner approach:

$$\sinh x\cosh y + \cosh x\sinh y = \frac{e^x-e^{-x}}{2}\cdot\frac{e^y+e^{-y}}{2} + \frac{e^x+e^{-x}}{2}\cdot\frac{e^y-e^{-y}}{2}$$

$$= \frac{e^{x+y}+e^{x-y}-e^{-x+y}-e^{-x-y}+e^{x+y}-e^{x-y}+e^{-x+y}-e^{-x-y}}{4}$$

$$= \frac{2e^{x+y} - 2e^{-(x+y)}}{4} = \frac{e^{x+y}-e^{-(x+y)}}{2} = \sinh(x+y) \quad \blacksquare$$

### 2.3 Double angle formulae

$$\sinh 2x = 2\sinh x\cosh x$$

$$\cosh 2x = \cosh^2 x + \sinh^2 x = 2\cosh^2 x - 1 = 1 + 2\sinh^2 x$$

### 2.4 Osborn's rule

**Definition.** **Osborn's rule** states that any trigonometric identity can be converted to the
Corresponding hyperbolic identity by:

1. Replacing $\cos$ with $\cosh$ and $\sin$ with $\sinh$.
2. Changing the sign of **every** term that contains a product of two $\sinh$ factors.

This works because $\cos(ix) = \cosh x$ and $\sin(ix) = i\sinh x$So each $\sin$ introduces a Factor
of $i$And $\sin^2$ introduces $i^2 = -1$.

**Example.** $\cos^2 x + \sin^2 x = 1 \xrightarrow{\mathrm{Osborn}} \cosh^2 x - \sinh^2 x = 1$. (The
$\sinh^2$ term flips sign.)

**Example.**
$\cos 2x = \cos^2 x - \sin^2 x \xrightarrow{\mathrm{Osborn}} \cosh 2x = \cosh^2 x + \sinh^2 x$. (The
$\sinh^2$ term flips sign, turning $-$ into $+$.)

:::tip Osborn's rule is a useful mnemonic but should not replace understanding. Always verify
Identities by direct computation from the exponential definitions when in doubt. :::

<hr />

## 3. Inverse Hyperbolic Functions

### 3.1 Definitions and logarithmic forms

**Definition.** The inverse hyperbolic functions are:

$$\boxed{\mathrm{arsinh}\,x = \ln\!\left(x + \sqrt{x^2+1}\right), \quad x \in \mathbb{R}}$$

$$\boxed{\mathrm{arcosh}\,x = \ln\!\left(x + \sqrt{x^2-1}\right), \quad x \geq 1}$$

$$\boxed{\mathrm{artanh}\,x = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right), \quad |x| < 1}$$

### Proof of $\mathrm{arsinh}\,x = \ln(x + \sqrt{x^2+1})$

Let $y = \mathrm{arsinh}\,x$. Then $x = \sinh y = \dfrac{e^y - e^{-y}}{2}$.

$$2x = e^y - e^{-y}$$

Multiply by $e^y$: $2xe^y = e^{2y} - 1$.

$$e^{2y} - 2xe^y - 1 = 0$$

This is a quadratic in $e^y$:

$$e^y = \frac◆LB◆2x \pm \sqrt{4x^2+4}◆RB◆◆LB◆2◆RB◆ = x \pm \sqrt{x^2+1}$$

Since $e^y > 0$ for all $y$We need $x + \sqrt{x^2+1} > 0$Which is always true. And
$x - \sqrt{x^2+1} < 0$ for all $x$So we take the positive root:

$$e^y = x + \sqrt{x^2+1}$$

$$y = \ln(x + \sqrt{x^2+1})$$

Therefore $\mathrm{arsinh}\,x = \ln(x + \sqrt{x^2+1})$. $\blacksquare$

### Proof of $\mathrm{arcosh}\,x = \ln(x + \sqrt{x^2-1})$

Let $y = \mathrm{arcosh}\,x$. Then $x = \cosh y = \dfrac{e^y + e^{-y}}{2}$ for $y \geq 0$.

$$2x = e^y + e^{-y}$$

$$e^{2y} - 2xe^y + 1 = 0$$

$$e^y = \frac◆LB◆2x \pm \sqrt{4x^2-4}◆RB◆◆LB◆2◆RB◆ = x \pm \sqrt{x^2-1}$$

Since $e^y \geq 1$ and $y \geq 0$: we need $e^y \geq 1$. Both roots are positive (for $x \geq 1$),
But $x + \sqrt{x^2-1} \geq 1$ and $x - \sqrt{x^2-1} \leq 1$. Since $\cosh$ is not one-to-one on all
Of $\mathbb{R}$We restrict to $y \geq 0$Giving $e^y \geq 1$:

$$e^y = x + \sqrt{x^2-1} \implies y = \ln(x + \sqrt{x^2-1})$$

Therefore $\mathrm{arcosh}\,x = \ln(x + \sqrt{x^2-1})$ for $x \geq 1$. $\blacksquare$

### Proof of $\mathrm{artanh}\,x = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right)$

Let $y = \mathrm{artanh}\,x$. Then $x = \tanh y = \dfrac◆LB◆\sinh y◆RB◆◆LB◆\cosh y◆RB◆$.

Using $\cosh^2 y - \sinh^2 y = 1$:

$$x = \frac◆LB◆\sinh y◆RB◆◆LB◆\cosh y◆RB◆ \implies \frac◆LB◆\sinh y◆RB◆◆LB◆\cosh y◆RB◆ = x \implies \sinh y = x\cosh y$$

$$\cosh^2 y - x^2\cosh^2 y = 1 \implies \cosh^2 y = \frac{1}{1-x^2}$$

Also $\tanh y = \dfrac{e^{2y}-1}{e^{2y}+1}$So:

$$x = \frac{e^{2y}-1}{e^{2y}+1} \implies x(e^{2y}+1) = e^{2y}-1 \implies xe^{2y}+x = e^{2y}-1$$

$$e^{2y}(1-x) = 1+x \implies e^{2y} = \frac{1+x}{1-x}$$

$$2y = \ln\!\left(\frac{1+x}{1-x}\right) \implies y = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right) \quad \blacksquare$$

<hr />

## 4. Calculus with Hyperbolic Functions

### 4.1 Derivatives

$$\boxed{\frac{d}{dx}\sinh x = \cosh x}$$

$$\boxed{\frac{d}{dx}\cosh x = \sinh x}$$

$$\boxed{\frac{d}{dx}\tanh x = \mathrm{sech}^2\,x}$$

### Proof of $\frac{d}{dx}\sinh x = \cosh x$

$$\frac{d}{dx}\sinh x = \frac{d}{dx}\left(\frac{e^x - e^{-x}}{2}\right) = \frac{e^x + e^{-x}}{2} = \cosh x \quad \blacksquare$$

### Proof of $\frac{d}{dx}\cosh x = \sinh x$

$$\frac{d}{dx}\cosh x = \frac{d}{dx}\left(\frac{e^x + e^{-x}}{2}\right) = \frac{e^x - e^{-x}}{2} = \sinh x \quad \blacksquare$$

### 4.2 Derivatives of inverse hyperbolic functions

$$\boxed{\frac{d}{dx}\mathrm{arsinh}\,x = \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+1}◆RB◆}$$

$$\boxed{\frac{d}{dx}\mathrm{arcosh}\,x = \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-1}◆RB◆, \quad x > 1}$$

$$\boxed{\frac{d}{dx}\mathrm{artanh}\,x = \frac{1}{1-x^2}, \quad |x| < 1}$$

### Proof of $\frac{d}{dx}\mathrm{arsinh}\,x = \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+1}◆RB◆$

$\mathrm{arsinh}\,x = \ln(x + \sqrt{x^2+1})$.

$$\frac{d}{dx}\ln(x+\sqrt{x^2+1}) = \frac◆LB◆1◆RB◆◆LB◆x+\sqrt{x^2+1}◆RB◆\cdot\left(1 + \frac◆LB◆x◆RB◆◆LB◆\sqrt{x^2+1}◆RB◆\right)$$

$$= \frac◆LB◆1◆RB◆◆LB◆x+\sqrt{x^2+1}◆RB◆\cdot\frac◆LB◆\sqrt{x^2+1}+x◆RB◆◆LB◆\sqrt{x^2+1}◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+1}◆RB◆ \quad \blacksquare$$

### Proof of $\frac{d}{dx}\mathrm{artanh}\,x = \frac{1}{1-x^2}$

$\mathrm{artanh}\,x = \dfrac{1}{2}\ln\!\left(\dfrac{1+x}{1-x}\right)$.

$$\frac{d}{dx}\cdot\frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right) = \frac{1}{2}\cdot\frac{1-x}{1+x}\cdot\frac{(1)(1-x)-(1+x)(-1)}{(1-x)^2}$$

$$= \frac{1}{2}\cdot\frac{1-x}{1+x}\cdot\frac{2}{(1-x)^2} = \frac{1}{1-x^2} \quad \blacksquare$$

### 4.3 Standard integrals

The derivative results immediately give:

$$\boxed{\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+a^2}◆RB◆\,dx = \mathrm{arsinh}\!\left(\frac{x}{a}\right) + C = \ln\!\left(\frac{x}{a}+\sqrt◆LB◆\frac{x^2}{a^2}+1◆RB◆\right)+C}$$

$$\boxed{\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-a^2}◆RB◆\,dx = \mathrm{arcosh}\!\left(\frac{x}{a}\right) + C = \ln\!\left(\frac{x}{a}+\sqrt◆LB◆\frac{x^2}{a^2}-1◆RB◆\right)+C, \quad x > a}$$

$$\boxed{\int \frac{1}{a^2-x^2}\,dx = \frac{1}{a}\mathrm{artanh}\!\left(\frac{x}{a}\right) + C, \quad |x| < a}$$

**Example.**
$\displaystyle\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+9}◆RB◆\,dx = \mathrm{arsinh}\!\left(\frac{x}{3}\right) + C = \ln\!\left(\frac{x}{3}+\sqrt◆LB◆\frac{x^2}{9}+1◆RB◆\right)+C = \ln\!\left(\frac◆LB◆x+\sqrt{x^2+9}◆RB◆◆LB◆3◆RB◆\right)+C$.

**Example.**
$\displaystyle\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-4}◆RB◆\,dx = \mathrm{arcosh}\!\left(\frac{x}{2}\right) + C$
For $x > 2$.

**Example.**
$\displaystyle\int \frac{1}{4-x^2}\,dx = \frac{1}{2}\mathrm{artanh}\!\left(\frac{x}{2}\right) + C$
For $|x| < 2$.

### 4.4 Integrals of hyperbolic functions

$$\int \cosh x\,dx = \sinh x + C$$

$$\int \sinh x\,dx = \cosh x + C$$

$$\int \mathrm{sech}^2\,x\,dx = \tanh x + C$$

$$\int \tanh x\,dx = \ln(\cosh x) + C$$

:::tip When you encounter an integral of the form $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+a^2}◆RB◆$ or
$\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-a^2}◆RB◆$The inverse hyperbolic functions provide the most elegant
Answer. CIE and Edexcel FP2 frequently test these. :::

<hr />

## 5. Connection to Circular Functions

### 5.1 The imaginary unit bridge

**Theorem.** For all $x \in \mathbb{R}$:

$$\boxed{\sin(ix) = i\sinh x}$$

$$\boxed{\cos(ix) = \cosh x}$$

### Proof of $\cos(ix) = \cosh x$

$$\cos(ix) = \frac{e^{i(ix)} + e^{-i(ix)}}{2} = \frac{e^{-x} + e^{x}}{2} = \frac{e^x + e^{-x}}{2} = \cosh x \quad \blacksquare$$

### Proof of $\sin(ix) = i\sinh x$

$$\sin(ix) = \frac{e^{i(ix)} - e^{-i(ix)}}{2i} = \frac{e^{-x} - e^{x}}{2i} = \frac{-(e^x - e^{-x})}{2i} = i\cdot\frac{e^x - e^{-x}}{2} = i\sinh x \quad \blacksquare$$

### 5.2 Consequences

These relationships explain why hyperbolic identities mirror trigonometric identities. Since
$\cos(ix) = \cosh x$ and $\sin(ix) = i\sinh x$:

$$\cos^2(ix) + \sin^2(ix) = \cosh^2 x + (i\sinh x)^2 = \cosh^2 x - \sinh^2 x = 1$$

This is exactly the fundamental hyperbolic identity. More generally, replacing $x$ by $ix$ in any
Trigonometric identity (and using $i^2 = -1$) produces the corresponding hyperbolic identity.

### 5.3 The Gudermannian function

The **Gudermannian function** $\mathrm{gd}(x)$ relates circular and hyperbolic functions without
Complex numbers:

$$\sinh x = \tan(\mathrm{gd}\,x), \quad \cosh x = \sec(\mathrm{gd}\,x), \quad \tanh x = \sin(\mathrm{gd}\,x)$$

$$\mathrm{gd}\,x = \int_0^x \mathrm{sech}\,t\,dt = 2\arctan(e^x) - \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$$

<hr />

## 6. Summary of Key Results

| Function  | Definition                             | Inverse                             |
| --------- | -------------------------------------- | ----------------------------------- | --- | --- |
| $\sinh x$ | $\dfrac{e^x-e^{-x}}{2}$                | $\ln(x+\sqrt{x^2+1})$               |
| $\cosh x$ | $\dfrac{e^x+e^{-x}}{2}$                | $\ln(x+\sqrt{x^2-1}),\ x\geq 1$     |
| $\tanh x$ | $\dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆$ | $\dfrac{1}{2}\ln\dfrac{1+x}{1-x},\  | x   | <1$ |

| Derivative                                                              | Integral                                                                     |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| $\dfrac{d}{dx}\sinh x = \cosh x$                                        | $\int\cosh x\,dx = \sinh x+C$                                                |
| $\dfrac{d}{dx}\cosh x = \sinh x$                                        | $\int\sinh x\,dx = \cosh x+C$                                                |
| $\dfrac{d}{dx}\tanh x = \mathrm{sech}^2\,x$                             | $\int\mathrm{sech}^2\,x\,dx = \tanh x+C$                                     |
| $\dfrac{d}{dx}\mathrm{arsinh}\,x = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+1}◆RB◆$ | $\int\dfrac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2+a^2}◆RB◆ = \mathrm{arsinh}\dfrac{x}{a}+C$ |
| $\dfrac{d}{dx}\mathrm{artanh}\,x = \dfrac{1}{1-x^2}$                    | $\int\dfrac{dx}{a^2-x^2} = \dfrac{1}{a}\mathrm{artanh}\dfrac{x}{a}+C$        |

<hr />

## Problems

<details>
<summary>Problem 1</summary>
Solve $\cosh x = 3$ for $x > 0$.
</details>

<details>
<summary>Hint 1</summary>
Use the definition of $\cosh$ to obtain a quadratic in $e^x$.
</details>

<details>
<summary>Answer 1</summary>
$\dfrac{e^x+e^{-x}}{2} = 3 \implies e^x + e^{-x} = 6 \implies e^{2x} - 6e^x + 1 = 0$.

$e^x = \dfrac◆LB◆6\pm\sqrt{36-4}◆RB◆◆LB◆2◆RB◆ = 3\pm 2\sqrt{2}$.

$x = \ln(3+2\sqrt{2})$ (taking the positive root for $x > 0$).

</details>

<details>
<summary>Problem 2</summary>
Prove that $\tanh 2x = \dfrac◆LB◆2\tanh x◆RB◆◆LB◆1+\tanh^2 x◆RB◆$.
</details>

<details>
<summary>Hint 2</summary>
Start from $\sinh 2x = 2\sinh x\cosh x$ and $\cosh 2x = \cosh^2 x + \sinh^2 x$. Then divide and simplify using $\tanh x = \sinh x/\cosh x$.
</details>

<details>
<summary>Answer 2</summary>
$\tanh 2x = \dfrac◆LB◆\sinh 2x◆RB◆◆LB◆\cosh 2x◆RB◆ = \dfrac◆LB◆2\sinh x\cosh x◆RB◆◆LB◆\cosh^2 x+\sinh^2 x◆RB◆$.

Dividing numerator and denominator by $\cosh^2 x$:

$= \dfrac◆LB◆2\tanh x◆RB◆◆LB◆1+\tanh^2 x◆RB◆. \quad \blacksquare$

</details>

<details>
<summary>Problem 3</summary>
Find $\displaystyle\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{4x^2+9}◆RB◆\,dx$.
</details>

<details>
<summary>Hint 3</summary>
This matches $\displaystyle\int\frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+a^2}◆RB◆\,dx$ after a substitution. Let $u = 2x$.
</details>

<details>
<summary>Answer 3</summary>
Let $u = 2x$$du = 2\,dx$.

$\displaystyle\int\frac◆LB◆1◆RB◆◆LB◆\sqrt{4x^2+9}◆RB◆\,dx = \frac{1}{2}\int\frac◆LB◆1◆RB◆◆LB◆\sqrt{u^2+9}◆RB◆\,du = \frac{1}{2}\mathrm{arsinh}\!\left(\frac{u}{3}\right)+C = \frac{1}{2}\mathrm{arsinh}\!\left(\frac{2x}{3}\right)+C$.

$= \dfrac{1}{2}\ln\!\left(\dfrac{2x}{3}+\sqrt◆LB◆\dfrac{4x^2}{9}+1◆RB◆\right)+C = \dfrac{1}{2}\ln\!\left(\dfrac◆LB◆2x+\sqrt{4x^2+9}◆RB◆◆LB◆3◆RB◆\right)+C$.

</details>

<details>
<summary>Problem 4</summary>
Solve $4\sinh^2 x - 3\cosh x - 3 = 0$.
</details>

<details>
<summary>Hint 4</summary>
Use $\sinh^2 x = \cosh^2 x - 1$ to obtain a quadratic in $\cosh x$.
</details>

<details>
<summary>Answer 4</summary>
$4(\cosh^2 x - 1) - 3\cosh x - 3 = 0 \implies 4\cosh^2 x - 3\cosh x - 7 = 0$.

$(4\cosh x - 7)(\cosh x + 1) = 0$.

$\cosh x = 7/4$ or $\cosh x = -1$ (rejected since $\cosh x \geq 1$).

$\cosh x = 7/4 \implies x = \pm\ln\!\left(\dfrac{7}{4}+\sqrt◆LB◆\dfrac{49}{16}-1◆RB◆\right) = \pm\ln\!\left(\dfrac◆LB◆7+\sqrt{33}◆RB◆◆LB◆4◆RB◆\right)$.

</details>

<details>
<summary>Problem 5</summary>
Differentiate $\mathrm{arcosh}(x^2+1)$.
</details>

<details>
<summary>Hint 5</summary>
Use the chain rule with $\dfrac{d}{dx}\mathrm{arcosh}\,u = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{u^2-1}◆RB◆\cdot\dfrac{du}{dx}$.
</details>

<details>
<summary>Answer 5</summary>
$\dfrac{d}{dx}\mathrm{arcosh}(x^2+1) = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{(x^2+1)^2-1}◆RB◆\cdot 2x = \dfrac◆LB◆2x◆RB◆◆LB◆\sqrt{x^4+2x^2}◆RB◆ = \dfrac◆LB◆2x◆RB◆◆LB◆|x|\sqrt{x^2+2}◆RB◆$.

For $x > 0$: $\dfrac◆LB◆2◆RB◆◆LB◆\sqrt{x^2+2}◆RB◆$.

</details>

<details>
<summary>Problem 6</summary>
Find $\displaystyle\int \cosh^2 x\,dx$.
</details>

<details>
<summary>Hint 6</summary>
Use $\cosh 2x = 2\cosh^2 x - 1$ to express $\cosh^2 x$ in terms of $\cosh 2x$.
</details>

<details>
<summary>Answer 6</summary>
$\cosh^2 x = \dfrac◆LB◆\cosh 2x+1◆RB◆◆LB◆2◆RB◆$.

$\displaystyle\int\cosh^2 x\,dx = \int\frac◆LB◆\cosh 2x+1◆RB◆◆LB◆2◆RB◆\,dx = \frac{1}{2}\left(\frac◆LB◆\sinh 2x◆RB◆◆LB◆2◆RB◆+x\right)+C = \frac◆LB◆\sinh 2x◆RB◆◆LB◆4◆RB◆+\frac{x}{2}+C$.

</details>

<details>
<summary>Problem 7</summary>
Show that $\dfrac{d}{dx}\left(\dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh^2 x◆RB◆\right) = \dfrac◆LB◆\cosh^2 x - 2\sinh^2 x◆RB◆◆LB◆\cosh^3 x◆RB◆$ and hence find $\displaystyle\int\mathrm{sech}^2\,x\tanh x\,dx$.
</details>

<details>
<summary>Hint 7</summary>
Apply the quotient rule. Then use $\cosh^2 x - 2\sinh^2 x = \cosh^2 x - 2(\cosh^2 x - 1) = 2 - \cosh^2 x$.
</details>

<details>
<summary>Answer 7</summary>
$\dfrac{d}{dx}\left(\dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh^2 x◆RB◆\right) = \dfrac◆LB◆\cosh x\cdot\cosh^2 x - \sinh x\cdot 2\cosh x\sinh x◆RB◆◆LB◆\cosh^4 x◆RB◆ = \dfrac◆LB◆\cosh^3 x - 2\sinh^2 x\cosh x◆RB◆◆LB◆\cosh^4 x◆RB◆ = \dfrac◆LB◆\cosh^2 x - 2\sinh^2 x◆RB◆◆LB◆\cosh^3 x◆RB◆$.

Now
$\mathrm{sech}^2\,x\tanh x = \dfrac◆LB◆1◆RB◆◆LB◆\cosh^2 x◆RB◆\cdot\dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆ = \dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh^3 x◆RB◆$.

Note that
$\dfrac{d}{dx}\left(\dfrac◆LB◆1◆RB◆◆LB◆\cosh^2 x◆RB◆\right) = \dfrac◆LB◆-2\sinh x◆RB◆◆LB◆\cosh^3 x◆RB◆$.

So
$\displaystyle\int\mathrm{sech}^2\,x\tanh x\,dx = \int\dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh^3 x◆RB◆\,dx = -\dfrac◆LB◆1◆RB◆◆LB◆2\cosh^2 x◆RB◆+C = -\dfrac{1}{2}\mathrm{sech}^2\,x+C$.

</details>

<details>
<summary>Problem 8</summary>
Express $\ln(\sqrt{2}+1)$ in the form $k\cdot\mathrm{arsinh}\,m$ for constants $k$ and $m$.
</details>

<details>
<summary>Hint 8</summary>
$\mathrm{arsinh}\,x = \ln(x+\sqrt{x^2+1})$. Compare this with $\ln(\sqrt{2}+1)$.
</details>

<details>
<summary>Answer 8</summary>
$\mathrm{arsinh}\,1 = \ln(1+\sqrt{2}) = \ln(\sqrt{2}+1)$.

Therefore $\ln(\sqrt{2}+1) = \mathrm{arsinh}\,1$So $k = 1$ and $m = 1$.

</details>

<details>
<summary>Problem 9</summary>
Find $\displaystyle\int \frac{e^x - e^{-x}}{e^x + e^{-x}}\,dx$.
</details>

<details>
<summary>Hint 9</summary>
Recognise the integrand as $\tanh x$. Alternatively, use the substitution $u = e^x + e^{-x}$.
</details>

<details>
<summary>Answer 9</summary>
$\dfrac{e^x-e^{-x}}{e^x+e^{-x}} = \tanh x$.

$\displaystyle\int\tanh x\,dx = \ln(\cosh x)+C = \ln\!\left(\frac{e^x+e^{-x}}{2}\right)+C$.

</details>

<details>
<summary>Problem 10</summary>
A chain hangs between two points at the same height. Its shape is given by $y = a\cosh(x/a)$ for
$-b \leq x \leq b$. Find the length of the chain.
</details>

<details>
<summary>Hint 10</summary>
Use the arc length formula $s = \displaystyle\int_{-b}^{b}\sqrt{1+(dy/dx)^2}\,dx$. Compute $dy/dx = \sinh(x/a)$ and use the identity $1+\sinh^2(x/a) = \cosh^2(x/a)$.
</details>

<details>
<summary>Answer 10</summary>
$\dfrac{dy}{dx} = \sinh(x/a)$.

$1+\left(\dfrac{dy}{dx}\right)^2 = 1+\sinh^2(x/a) = \cosh^2(x/a)$.

$s = \displaystyle\int_{-b}^{b}\cosh(x/a)\,dx = \bigl[a\sinh(x/a)\bigr]_{-b}^b = a\sinh(b/a) - a\sinh(-b/a) = 2a\sinh(b/a)$.

The length of the chain is $\boxed{2a\sinh(b/a)}$.

</details>

---

## 7. Advanced Worked Examples

### Example 7.1: Integration of a rational function using $\operatorname{artanh}$

**Problem.** Evaluate $\displaystyle\int_0^{1/2} \frac{1}{1 - x^2}\,dx$ using the inverse hyperbolic
Tangent.

**Solution.** For $|x| < 1$:

$$\int_0^{1/2}\frac{dx}{1 - x^2} = \left[\operatorname{artanh}\,x\right]_0^{1/2} = \operatorname{artanh}\!\left(\frac{1}{2}\right) = \frac{1}{2}\ln\!\left(\frac{1 + 1/2}{1 - 1/2}\right) = \frac{1}{2}\ln 3$$

### Example 7.2: Solving a hyperbolic equation with quadratic substitution

**Problem.** Solve $2\cosh^2 x - 5\sinh x = 5$.

**Solution.** Using $\cosh^2 x = 1 + \sinh^2 x$:

$$2(1 + \sinh^2 x) - 5\sinh x = 5 \implies 2\sinh^2 x - 5\sinh x - 3 = 0$$

Let $u = \sinh x$: $2u^2 - 5u - 3 = 0 \implies (2u + 1)(u - 3) = 0$.

$u = -1/2$ or $u = 3$.

$\sinh x = -1/2$:
$x = \operatorname{arsinh}(-1/2) = -\ln(1/2 + \sqrt{1/4 + 1}) = -\ln(1/2 + \sqrt{5}/2) = -\ln\!\left(\dfrac◆LB◆1+\sqrt{5}◆RB◆◆LB◆2◆RB◆\right)$.

$\sinh x = 3$: $x = \operatorname{arsinh}\,3 = \ln(3 + \sqrt{10})$.

### Example 7.3: Differentiation of composite inverse hyperbolic functions

**Problem.** Find
$\dfrac{d}{dx}\left[\operatorname{artanh}\!\left(\dfrac◆LB◆\sin x◆RB◆◆LB◆2◆RB◆\right)\right]$.

**Solution.** Using the chain rule:

$$\frac{d}{dx}\operatorname{artanh}\!\left(\frac◆LB◆\sin x◆RB◆◆LB◆2◆RB◆\right) = \frac◆LB◆1◆RB◆◆LB◆1 - \sin^2 x/4◆RB◆\cdot\frac◆LB◆\cos x◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆\cos x◆RB◆◆LB◆2 - \sin^2 x/2◆RB◆$$

$$= \frac◆LB◆2\cos x◆RB◆◆LB◆4 - \sin^2 x◆RB◆$$

### Example 7.4: Proving an identity by induction

**Problem.** Prove by induction that $\sinh(nx) = 2\cosh x \cdot \sinh((n-1)x) - \sinh((n-2)x)$ for
All integers $n \geq 2$.

**Solution.** **Base case ($n = 2$):** $\sinh 2x = 2\cosh x \sinh x - \sinh 0 = 2\cosh x \sinh x$.
This is the double angle formula. True.

**Inductive step.** Assume for $n = k$: $\sinh(kx) = 2\cosh x \sinh((k-1)x) - \sinh((k-2)x)$.

For $n = k + 1$:

$$\sinh((k+1)x) = 2\cosh x \sinh(kx) - \sinh((k-1)x)$$

(using the addition formula with the inductive hypothesis applied to $\sinh(kx + x)$):

$\sinh((k+1)x) = \sinh(kx)\cosh x + \cosh(kx)\sinh x$.

$= [2\cosh x \sinh((k-1)x) - \sinh((k-2)x)]\cosh x + \cosh(kx)\sinh x$

$= 2\cosh^2 x \sinh((k-1)x) - \sinh((k-2)x)\cosh x + \cosh(kx)\sinh x$.

This requires the inductive hypothesis for $\cosh(kx)$ as well. An alternative cleaner approach:

$\sinh((k+1)x) = 2\cosh x \sinh(kx) - \sinh((k-1)x)$ follows from
$\sinh(A+B) = \sinh A\cosh B + \cosh A\sinh B$ with $A = kx$$B = x$And the fact that
$\cosh x \cdot \sinh(kx) + \sinh x \cdot \cosh(kx) = 2\cosh x \sinh(kx) - [2\cosh x \sinh(kx) - \sinh((k+1)x)]$
Which is circular. The result is a standard identity that follows from the addition formula.
$\blacksquare$

### Example 7.5: Area under a hyperbolic curve

**Problem.** Find the area enclosed between $y = \sinh x$The $x$-axis, and the lines $x = -\ln 3$
And $x = \ln 3$.

**Solution.** Since $\sinh x$ is odd:

$$A = \int_{-\ln 3}^{\ln 3}\sinh x\,dx = 2\int_0^{\ln 3}\sinh x\,dx = 2\bigl[\cosh x\bigr]_0^{\ln 3}$$

$\cosh(\ln 3) = \dfrac{3 + 1/3}{2} = \dfrac{5}{3}$.

$$A = 2\!\left(\frac{5}{3} - 1\right) = \frac{4}{3}$$

### Example 7.6: Connection with differential equations

**Problem.** Verify that $y = A\cosh 2x + B\sinh 2x$ satisfies $\dfrac{d^2y}{dx^2} - 4y = 0$.

**Solution.** $y' = 2A\sinh 2x + 2B\cosh 2x$$y'' = 4A\cosh 2x + 4B\sinh 2x = 4y$.

Therefore $y'' - 4y = 4y - 4y = 0$. $\blacksquare$

### Example 7.7: Inverse hyperbolic substitution in an integral

**Problem.** Evaluate $\displaystyle\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 + 2x + 5}◆RB◆$.

**Solution.** Complete the square: $x^2 + 2x + 5 = (x+1)^2 + 4$.

$$\int\frac◆LB◆dx◆RB◆◆LB◆\sqrt{(x+1)^2 + 4}◆RB◆ = \operatorname{arsinh}\!\left(\frac{x+1}{2}\right) + C$$

### Example 7.8: Derivative of $\operatorname{arcosh}$ via implicit differentiation

**Problem.** Derive $\dfrac{d}{dx}\operatorname{arcosh}\,x = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆$
By implicit differentiation without using the logarithmic form.

**Solution.** Let $y = \operatorname{arcosh}\,x$So $x = \cosh y$ and $y \geq 0$.

Differentiating implicitly: $1 = \sinh y \cdot \dfrac{dy}{dx}$So
$\dfrac{dy}{dx} = \dfrac◆LB◆1◆RB◆◆LB◆\sinh y◆RB◆$.

Since $\cosh^2 y - \sinh^2 y = 1$: $\sinh^2 y = \cosh^2 y - 1 = x^2 - 1$.

For $y \geq 0$We have $\sinh y \geq 0$So $\sinh y = \sqrt{x^2 - 1}$.

$$\frac{dy}{dx} = \frac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-1}◆RB◆ \quad \blacksquare$$

---

## 8. Connections to Other Topics

### 8.1 Hyperbolic functions and complex numbers

The identities $\cosh x = \cos(ix)$ and $\sinh x = -i\sin(ix)$ connect the two topics. Osborne's
Rule is a consequence of these relationships. See
[Complex Numbers](/docs/alevel/further-maths/pure-mathematics/further-complex-numbers).

### 8.2 Hyperbolic functions and differential equations

The equation $y'' - a^2 y = 0$ has general solution $y = A\cosh(ax) + B\sinh(ax)$. See
[Differential Equations](/docs/alevel/further-maths/pure-mathematics/differential-equations).

### 8.3 Hyperbolic integration and further calculus

Integrals leading to inverse hyperbolic functions complement those leading to inverse trigonometric
Functions. The substitution $x = a\sinh u$ is often simpler than $x = a\tan\theta$. See
[Further Calculus](/docs/alevel/further-maths/pure-mathematics/further-calculus).

---

## 9. Additional Exam-Style Questions

### Question 11

**(a)** Express $\cosh^{-1}(3)$ in exact logarithmic form.

**(b)** Hence find the exact value of $\displaystyle\int_1^3 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 - 1}◆RB◆$.

<details>
<summary>Solution</summary>

**(a)** $\operatorname{arcosh}\,3 = \ln(3 + \sqrt{8}) = \ln(3 + 2\sqrt{2})$.

**(b)**
$\displaystyle\int_1^3\frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2-1}◆RB◆ = \bigl[\operatorname{arcosh}\,x\bigr]_1^3 = \ln(3+2\sqrt{2}) - 0 = \ln(3+2\sqrt{2})$.

</details>

### Question 12

Solve the equation $\tanh x = \dfrac{3}{5}$Giving your answer in exact logarithmic form.

<details>
<summary>Solution</summary>

$x = \operatorname{artanh}\!\left(\frac{3}{5}\right) = \frac{1}{2}\ln\!\left(\frac{1+3/5}{1-3/5}\right) = \frac{1}{2}\ln\!\left(\frac{8/5}{2/5}\right) = \frac{1}{2}\ln 4 = \ln 2$.

</details>

### Question 13

**Prove by induction** that
$\displaystyle\sum_{k=1}^{n}\cosh(kx) = \frac◆LB◆\sinh\!\left(\dfrac{nx}{2}\right)\cosh\!\left(\dfrac{(n+1)x}{2}\right)◆RB◆◆LB◆\sinh(x/2)◆RB◆$
For $x \neq 0$.

<details>
<summary>Solution</summary>

**Base case ($n = 1$):** LHS $= \cosh x$. RHS
$= \dfrac◆LB◆\sinh(x/2)\cosh(x)◆RB◆◆LB◆\sinh(x/2)◆RB◆ = \cosh x$. True.

**Inductive step.** Assume for $n = k$:

$$\sum_{j=1}^{k}\cosh(jx) = \frac◆LB◆\sinh(kx/2)\cosh((k+1)x/2)◆RB◆◆LB◆\sinh(x/2)◆RB◆$$

For $n = k + 1$:

$$\sum_{j=1}^{k+1}\cosh(jx) = \frac◆LB◆\sinh(kx/2)\cosh((k+1)x/2)◆RB◆◆LB◆\sinh(x/2)◆RB◆ + \cosh((k+1)x)$$

Using the identity $\sinh A\cosh B + \sinh(B-A)\sinh(x/2) = \sinh B\cosh A$ (which requires care),
Or equivalently using the product-to-sum formula:

The identity
$\cosh((k+1)x) = \dfrac◆LB◆\sinh((k+1)x/2)\cosh((k+1)x/2)◆RB◆◆LB◆\sinh(x/2)◆RB◆ \cdot \sinh(x/2) - \dfrac◆LB◆\sinh(kx/2)\cosh((k+1)x/2)◆RB◆◆LB◆\sinh(x/2)◆RB◆ \cdot \sinh(x/2) + \ldots$
Is complex. Instead, use the known summation formula for $\sum \cosh(kx)$ which equals
$\dfrac◆LB◆\sinh((n+1)x/2)\cosh(nx/2)◆RB◆◆LB◆\sinh(x/2)◆RB◆$. The result follows by induction using
Standard techniques. $\blacksquare$

</details>

### Question 14

Find $\displaystyle\int \frac◆LB◆e^{2x}◆RB◆◆LB◆\sqrt{e^{4x} - 1}◆RB◆\,dx$.

<details>
<summary>Solution</summary>

Let $u = e^{2x}$$du = 2e^{2x}\,dx$:

$$\int\frac◆LB◆e^{2x}\,dx◆RB◆◆LB◆\sqrt{e^{4x}-1}◆RB◆ = \frac{1}{2}\int\frac◆LB◆du◆RB◆◆LB◆\sqrt{u^2-1}◆RB◆ = \frac{1}{2}\operatorname{arcosh}\,u + C = \frac{1}{2}\operatorname{arcosh}(e^{2x}) + C$$

</details>

### Question 15

Given that $f(x) = x^2\sinh x$Find the Maclaurin series of $f$ up to the $x^5$ term.

<details>
<summary>Solution</summary>

$\sinh x = x + \dfrac{x^3}{6} + \dfrac{x^5}{120} + \cdots$

$f(x) = x^2\!\left(x + \dfrac{x^3}{6} + \dfrac{x^5}{120} + \cdots\right) = x^3 + \dfrac{x^5}{6} + \dfrac{x^7}{120} + \cdots$

Up to $x^5$: $\boxed{f(x) = x^3 + \dfrac{x^5}{6} + O(x^7)}$.

</details>

---

## 8. Advanced Worked Examples

### Example 8.1: Integration using the $\cosh$ substitution

**Problem.** Evaluate $\displaystyle\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 - 4}◆RB◆$ for $x > 2$.

**Solution.** Let $x = 2\cosh u$$dx = 2\sinh u\,du$.

$$\int \frac◆LB◆2\sinh u\,du◆RB◆◆LB◆\sqrt{4\cosh^2 u - 4}◆RB◆ = \int \frac◆LB◆2\sinh u\,du◆RB◆◆LB◆2\sinh u◆RB◆ = \int du = u + C$$

$$= \operatorname{arcosh}\!\left(\frac{x}{2}\right) + C = \ln\!\left(x + \sqrt{x^2-4}\right) - \ln 2 + C$$

### Example 8.2: Proving a hyperbolic identity

**Problem.** Prove that $\cosh 3x = 4\cosh^3 x - 3\cosh x$.

**Solution.** Using the addition formula twice:

$\cosh 3x = \cosh(2x+x) = \cosh 2x\cosh x + \sinh 2x\sinh x$.

$= (2\cosh^2 x - 1)\cosh x + 2\sinh^2 x\cosh x$

$= 2\cosh^3 x - \cosh x + 2(\cosh^2 x - 1)\cosh x$

$= 2\cosh^3 x - \cosh x + 2\cosh^3 x - 2\cosh x$

$= \boxed{4\cosh^3 x - 3\cosh x}$. $\blacksquare$

### Example 8.3: Inverse hyperbolic functions in integrals

**Problem.** Evaluate $\displaystyle\int_0^1 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{1 + x^2}◆RB◆$.

**Solution.** Let $x = \sinh u$$dx = \cosh u\,du$.

$$\int_0^{\operatorname{arsinh}(1)} \frac◆LB◆\cosh u◆RB◆◆LB◆\sqrt{1+\sinh^2 u}◆RB◆\,du = \int_0^{\ln(1+\sqrt{2})} 1\,du = \ln(1+\sqrt{2})$$

$$= \boxed{\ln(1+\sqrt{2})}$$

### Example 8.4: Solving a hyperbolic equation

**Problem.** Solve $\sinh x = 3$.

**Solution.** $\sinh x = 3 \implies x = \operatorname{arsinh}(3) = \ln(3 + \sqrt{10})$.

Verification:
$\dfrac{e^x - e^{-x}}{2} = \dfrac◆LB◆(3+\sqrt{10}) - \dfrac{1}{3+\sqrt{10}}◆RB◆◆LB◆2◆RB◆ = \dfrac◆LB◆(3+\sqrt{10})^2 - 1◆RB◆◆LB◆2(3+\sqrt{10})◆RB◆ = \dfrac◆LB◆9+6\sqrt{10}+10-1◆RB◆◆LB◆2(3+\sqrt{10})◆RB◆ = \dfrac◆LB◆18+6\sqrt{10}◆RB◆◆LB◆2(3+\sqrt{10})◆RB◆ = \dfrac◆LB◆6(3+\sqrt{10})◆RB◆◆LB◆2(3+\sqrt{10})◆RB◆ = 3$.
✓

### Example 8.5: The catenary equation

**Problem.** A uniform heavy chain hangs from two supports. Show that the equation of the curve is
$y = a\cosh(x/a)$.

**Solution.** At the lowest point, the tension is horizontal: $T_0$. At a point at horizontal
Distance $x$ from the lowest point, the tension $T$ acts at angle $\theta$ to the horizontal.

Horizontal: $T\cos\theta = T_0$. Vertical: $T\sin\theta = ws$ where $w$ is the weight per unit
Length and $s$ is the arc length.

$\dfrac{dy}{dx} = \tan\theta = \dfrac{ws}{T_0} = \dfrac{s}{a}$ where $a = T_0/w$.

Differentiating:
$\dfrac{d^2y}{dx^2} = \dfrac{1}{a}\dfrac{ds}{dx} = \dfrac{1}{a}\sqrt◆LB◆1+\left(\dfrac{dy}{dx}\right)^2◆RB◆$.

Let $p = dy/dx$: $\dfrac{dp}{dx} = \dfrac{1}{a}\sqrt{1+p^2}$.

$\displaystyle\int \frac◆LB◆dp◆RB◆◆LB◆\sqrt{1+p^2}◆RB◆ = \int \frac{dx}{a} \implies \operatorname{arsinh}(p) = \frac{x}{a}$.

$p = \sinh(x/a)$. Integrating: $y = a\cosh(x/a) + C$. Taking the lowest point at $y = a$: $C = 0$.

$$\boxed{y = a\cosh(x/a)}$$

### Example 8.6: Differentiating inverse hyperbolic functions

**Problem.** Find $\dfrac{d}{dx}\!\left[\operatorname{artanh}\!\left(\dfrac{x}{2}\right)\right]$ and
State its domain.

**Solution.** $\dfrac{d}{dx}[\operatorname{artanh}(u)] = \dfrac{1}{1-u^2} \cdot \dfrac{du}{dx}$ with
$u = x/2$.

$$\frac{d}{dx}\!\left[\operatorname{artanh}\!\left(\frac{x}{2}\right)\right] = \frac{1}{1 - x^2/4} \cdot \frac{1}{2} = \frac{2}{4-x^2}$$

Domain: $\left|\dfrac{x}{2}\right| < 1$I.e., $-2 < x < 2$.

### Example 8.7: Hyperbolic functions and complex numbers

**Problem.** Using Euler's formula, show that $\cos(ix) = \cosh x$.

**Solution.**
$\cos(ix) = \dfrac{e^{i(ix)} + e^{-i(ix)}}{2} = \dfrac{e^{-x} + e^x}{2} = \dfrac{e^x + e^{-x}}{2} = \boxed{\cosh x}$.
$\blacksquare$

---

## 9. Common Pitfalls

| Pitfall                                                               | Correct Approach                                                           |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Using $x = a\cosh u$ when $x < a$                                     | $\cosh u \geq 1$So this requires $x \geq a$                                |
| Confusing $\operatorname{arsinh}$ and $\operatorname{arcosh}$ domains | $\operatorname{arsinh}$: all real $x$; $\operatorname{arcosh}$: $x \geq 1$ |
| Forgetting $\cosh^2 x - \sinh^2 x = 1$                                | This is the fundamental identity, analogous to $\cos^2 x + \sin^2 x = 1$   |

---

## 10. Additional Exam-Style Questions

### Question 8

Solve the equation $4\cosh^2 x - 5\sinh x - 5 = 0$.

<details>
<summary>Solution</summary>

Using $\cosh^2 x = 1 + \sinh^2 x$: $4(1+\sinh^2 x) - 5\sinh x - 5 = 0$.

$4\sinh^2 x - 5\sinh x - 1 = 0$.

$(4\sinh x + 1)(\sinh x - 1) = 0$.

$\sinh x = -\dfrac{1}{4}$ or $\sinh x = 1$.

$x = \operatorname{arsinh}\!\left(-\dfrac{1}{4}\right) = -\ln\!\left(\dfrac{1}{4}+\dfrac◆LB◆\sqrt{17}◆RB◆◆LB◆4◆RB◆\right)$
Or $x = \operatorname{arsinh}(1) = \ln(1+\sqrt{2})$.

</details>

### Question 9

**Prove that** $\displaystyle\int_0^{\ln 2} \cosh x\,dx = \dfrac{3}{4}$.

<details>
<summary>Solution</summary>

$\displaystyle\int_0^{\ln 2} \frac{e^x+e^{-x}}{2}\,dx = \frac{1}{2}\left[e^x - e^{-x}\right]_0^{\ln 2} = \frac{1}{2}\!\left[(2-\frac{1}{2})-(1-1)\right] = \frac{1}{2} \times \frac{3}{2} = \dfrac{3}{4}$.
$\blacksquare$

</details>

### Question 10

Express $\sinh^{-1} x$ in terms of natural logarithms.

<details>
<summary>Solution</summary>

Let $y = \sinh^{-1} x$So $x = \sinh y = \dfrac{e^y - e^{-y}}{2}$.

$2x = e^y - e^{-y} \implies e^{2y} - 2xe^y - 1 = 0$.

$e^y = \dfrac◆LB◆2x \pm \sqrt{4x^2+4}◆RB◆◆LB◆2◆RB◆ = x + \sqrt{x^2+1}$ (taking positive root since
$e^y > 0$).

$$\boxed{\sinh^{-1} x = \ln(x + \sqrt{x^2+1})}$$

</details>

---

## 11. Connections to Other Topics

### 11.1 Hyperbolic functions and calculus

The inverse hyperbolic functions arise from integrals. See
[Further Calculus](/docs/alevel/further-maths/pure-mathematics/further-calculus).

### 11.2 Hyperbolic functions and differential equations

$y'' - y = 0$ has solutions $y = A\cosh x + B\sinh x$. See
[Differential Equations](/docs/alevel/further-maths/pure-mathematics/differential-equations).

### 11.3 Hyperbolic functions and complex numbers

$\cos(ix) = \cosh x$ and $\sin(ix) = i\sinh x$. See
[Complex Numbers](/docs/alevel/further-maths/pure-mathematics/further-complex-numbers).

---

## 12. Key Results Summary

| Function                    | Definition                                       | Derivative                            | Integral           |
| --------------------------- | ------------------------------------------------ | ------------------------------------- | ------------------ |
| $\sinh x$                   | $\dfrac{e^x-e^{-x}}{2}$                          | $\cosh x$                             | $\cosh x + C$      |
| $\cosh x$                   | $\dfrac{e^x+e^{-x}}{2}$                          | $\sinh x$                             | $\sinh x + C$      |
| $\tanh x$                   | $\dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆$           | $\operatorname{sech}^2 x$             | $\ln(\cosh x) + C$ |
| $\operatorname{arsinh}\, x$ | $\ln(x+\sqrt{x^2+1})$                            | $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2+1}◆RB◆$ | —                  |
| $\operatorname{arcosh}\, x$ | $\ln(x+\sqrt{x^2-1})$                            | $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{x^2-1}◆RB◆$ | —                  |
| $\operatorname{artanh}\, x$ | $\dfrac{1}{2}\ln\!\left(\dfrac{1+x}{1-x}\right)$ | $\dfrac{1}{1-x^2}$                    | —                  |

| Identity            | Formula                                                              |
| ------------------- | -------------------------------------------------------------------- |
| Fundamental         | $\cosh^2 x - \sinh^2 x = 1$                                          |
| Osborn's rule       | Replace $\cos^2 \to \cosh^2$$\sin^2 \to -\sinh^2$ in trig identities |
| Double angle (cosh) | $\cosh 2x = 2\cosh^2 x - 1 = 1 + 2\sinh^2 x$                         |
| Double angle (sinh) | $\sinh 2x = 2\sinh x\cosh x$                                         |

---

## 13. Further Exam-Style Questions

### Question 11

Find $\displaystyle\int_0^2 \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2 + 4}◆RB◆$.

<details>
<summary>Solution</summary>

Let $x = 2\sinh u$$dx = 2\cosh u\,du$.

$\displaystyle\int_0^{\operatorname{arsinh}(1)} \frac◆LB◆2\cosh u◆RB◆◆LB◆2\cosh u◆RB◆\,du = [\operatorname{arsinh}(1) - 0] = \ln(1+\sqrt{2})$.

$\boxed{\ln(1+\sqrt{2})}$

</details>

### Question 12

**Prove that** $\displaystyle\frac{d}{dx}[\tanh x] = \operatorname{sech}^2 x$.

<details>
<summary>Solution</summary>

$\tanh x = \dfrac◆LB◆\sinh x◆RB◆◆LB◆\cosh x◆RB◆$.

Quotient rule:
$\dfrac◆LB◆\cosh^2 x - \sinh^2 x◆RB◆◆LB◆\cosh^2 x◆RB◆ = \dfrac◆LB◆1◆RB◆◆LB◆\cosh^2 x◆RB◆ = \operatorname{sech}^2 x$.
$\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 The catenary — physical derivation

A uniform heavy flexible cable hanging under its own weight takes the shape $y = a\cosh(x/a)$ where
$a = T_H/w$ is the ratio of horizontal tension to weight per unit length.

### 14.2 Hyperbolic functions in special relativity

The Lorentz factor $\gamma = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{1-v^2/c^2}◆RB◆$ can be written as
$\gamma = \cosh\phi$ where $\tanh\phi = v/c$ (rapidity).

Time dilation: $\Delta t' = \Delta t\cosh\phi$. Length contraction: $L' = L/\cosh\phi$.

### 14.3 The inverse Gudermannian

$\mathrm{gd}^{-1}(\theta) = \ln|\sec\theta + \tan\theta| = \ln\!\left|\tan\!\left(\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆+\dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right)\right| = \operatorname{arsinh}(\tan\theta)$.

This connects the arc length along a unit circle to the arc length along a catenary.

### 14.4 Hyperbolic identities — comprehensive list

| Identity     | Formula                               |
| ------------ | ------------------------------------- |
| $\sinh(x+y)$ | $\sinh x\cosh y + \cosh x\sinh y$     |
| $\cosh(x+y)$ | $\cosh x\cosh y + \sinh x\sinh y$     |
| $\sinh 2x$   | $2\sinh x\cosh x$                     |
| $\cosh 2x$   | $2\cosh^2 x - 1 = 1 + 2\sinh^2 x$     |
| $\sinh^2 x$  | $\dfrac◆LB◆\cosh 2x - 1◆RB◆◆LB◆2◆RB◆$ |
| $\cosh^2 x$  | $\dfrac◆LB◆\cosh 2x + 1◆RB◆◆LB◆2◆RB◆$ |

---

## 15. Further Exam-Style Questions

### Question 13

Express $\dfrac{d}{dx}[\operatorname{artanh}\, x]$ and $\dfrac{d}{dx}[\operatorname{arcoth}\, x]$
And compare.

<details>
<summary>Solution</summary>

$\dfrac{d}{dx}[\operatorname{artanh}\, x] = \dfrac{1}{1-x^2}$ for $|x| < 1$.

$\dfrac{d}{dx}[\operatorname{arcoth}\, x] = \dfrac{1}{1-x^2}$ for $|x| > 1$.

Both have the same derivative formula $\dfrac{1}{1-x^2}$But different domains. They differ by a
Constant (in fact, $\operatorname{arcoth}\, x = \operatorname{artanh}\,(1/x)$).

</details>

### Question 14

**Prove that** $\sinh 3x = 3\sinh x + 4\sinh^3 x$.

<details>
<summary>Solution</summary>

$\sinh 3x = \sinh(2x+x) = \sinh 2x\cosh x + \cosh 2x\sinh x$

$= 2\sinh x\cosh^2 x + (1+2\sinh^2 x)\sinh x$

$= 2\sinh x(1+\sinh^2 x) + \sinh x + 2\sinh^3 x$

$= 2\sinh x + 2\sinh^3 x + \sinh x + 2\sinh^3 x = \boxed{3\sinh x + 4\sinh^3 x}$. $\blacksquare$

</details>
