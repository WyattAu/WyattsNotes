---
title: Hyperbolic Functions
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
similarities with trigonometric functions. They arise naturally in the solution of differential
equations, the description of hanging cables (catenary), special relativity, and many areas of
physics and engineering.

### Board Coverage

| Board      | Paper   | Notes                                                      |
| ---------- | ------- | ---------------------------------------------------------- |
| AQA        | Paper 1 | Definitions, identities, calculus                          |
| Edexcel    | FP2     | Full coverage: definitions, identities, inverses, calculus |
| OCR (A)    | Paper 1 | Definitions and basic identities                           |
| CIE (9231) | P2      | Full coverage including logarithmic forms of inverses      |

:::info
The formula booklet lists hyperbolic identities and the logarithmic forms of the inverse
hyperbolic functions. CIE requires the derivation of these logarithmic forms.
:::

---

## 1. Definitions

### 1.1 The three principal hyperbolic functions

**Definition.** The **hyperbolic cosine**, **hyperbolic sine**, and **hyperbolic tangent** are
defined by:

$$\boxed{\cosh x = \frac{e^x + e^{-x}}{2}}$$

$$\boxed{\sinh x = \frac{e^x - e^{-x}}{2}}$$

$$\boxed{\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}}$$

### 1.2 The reciprocal hyperbolic functions

**Definition.**

$$\text{sech}\,x = \frac{1}{\cosh x}, \qquad \text{cosech}\,x = \frac{1}{\sinh x}, \qquad \coth\,x = \frac{\cosh x}{\sinh x}$$

:::warning
Note the spelling: $\cosh$, $\sinh$, $\tanh$ are standard abbreviations. The reciprocals
use $\text{sech}$ (not $\text{sec h}$), $\text{cosech}$ (not $\text{csch}$), and $\coth$.
:::

### 1.3 Domain and range

| Function         | Domain       | Range         |
| ---------------- | ------------ | ------------- |
| $\sinh x$        | $\mathbb{R}$ | $\mathbb{R}$  |
| $\cosh x$        | $\mathbb{R}$ | $[1, \infty)$ |
| $\tanh x$        | $\mathbb{R}$ | $(-1, 1)$     |
| $\text{sech}\,x$ | $\mathbb{R}$ | $(0, 1]$      |

### 1.4 Key values

$$\sinh 0 = 0, \quad \cosh 0 = 1, \quad \tanh 0 = 0$$

$$\sinh(-x) = -\sinh x \quad (\text{odd function})$$

$$\cosh(-x) = \cosh x \quad (\text{even function})$$

---

## 2. Hyperbolic Identities

### 2.1 The fundamental identity

**Theorem.** For all $x \in \mathbb{R}$:

$$\boxed{\cosh^2 x - \sinh^2 x = 1}$$

### Proof of $\cosh^2 x - \sinh^2 x = 1$

$$\cosh^2 x - \sinh^2 x = \left(\frac{e^x+e^{-x}}{2}\right)^2 - \left(\frac{e^x-e^{-x}}{2}\right)^2$$

$$= \frac{e^{2x}+2+e^{-2x}}{4} - \frac{e^{2x}-2+e^{-2x}}{4} = \frac{4}{4} = 1 \quad \blacksquare$$

**Corollary.** Dividing by $\cosh^2 x$:

$$\boxed{1 - \tanh^2 x = \text{sech}^2\,x}$$

Dividing by $\sinh^2 x$:

$$\boxed{\coth^2 x - 1 = \text{cosech}^2\,x}$$

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
corresponding hyperbolic identity by:

1. Replacing $\cos$ with $\cosh$ and $\sin$ with $\sinh$.
2. Changing the sign of **every** term that contains a product of two $\sinh$ factors.

This works because $\cos(ix) = \cosh x$ and $\sin(ix) = i\sinh x$, so each $\sin$ introduces a
factor of $i$, and $\sin^2$ introduces $i^2 = -1$.

**Example.** $\cos^2 x + \sin^2 x = 1 \xrightarrow{\text{Osborn}} \cosh^2 x - \sinh^2 x = 1$. (The
$\sinh^2$ term flips sign.)

**Example.**
$\cos 2x = \cos^2 x - \sin^2 x \xrightarrow{\text{Osborn}} \cosh 2x = \cosh^2 x + \sinh^2 x$. (The
$\sinh^2$ term flips sign, turning $-$ into $+$.)

:::tip
Osborn's rule is a useful mnemonic but should not replace understanding. Always verify
identities by direct computation from the exponential definitions when in doubt.
:::

---

## 3. Inverse Hyperbolic Functions

### 3.1 Definitions and logarithmic forms

**Definition.** The inverse hyperbolic functions are:

$$\boxed{\text{arsinh}\,x = \ln\!\left(x + \sqrt{x^2+1}\right), \quad x \in \mathbb{R}}$$

$$\boxed{\text{arcosh}\,x = \ln\!\left(x + \sqrt{x^2-1}\right), \quad x \geq 1}$$

$$\boxed{\text{artanh}\,x = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right), \quad |x| < 1}$$

### Proof of $\text{arsinh}\,x = \ln(x + \sqrt{x^2+1})$

Let $y = \text{arsinh}\,x$. Then $x = \sinh y = \dfrac{e^y - e^{-y}}{2}$.

$$2x = e^y - e^{-y}$$

Multiply by $e^y$: $2xe^y = e^{2y} - 1$.

$$e^{2y} - 2xe^y - 1 = 0$$

This is a quadratic in $e^y$:

$$e^y = \frac{2x \pm \sqrt{4x^2+4}}{2} = x \pm \sqrt{x^2+1}$$

Since $e^y > 0$ for all $y$, we need $x + \sqrt{x^2+1} > 0$, which is always true. And
$x - \sqrt{x^2+1} < 0$ for all $x$, so we take the positive root:

$$e^y = x + \sqrt{x^2+1}$$

$$y = \ln(x + \sqrt{x^2+1})$$

Therefore $\text{arsinh}\,x = \ln(x + \sqrt{x^2+1})$. $\blacksquare$

### Proof of $\text{arcosh}\,x = \ln(x + \sqrt{x^2-1})$

Let $y = \text{arcosh}\,x$. Then $x = \cosh y = \dfrac{e^y + e^{-y}}{2}$ for $y \geq 0$.

$$2x = e^y + e^{-y}$$

$$e^{2y} - 2xe^y + 1 = 0$$

$$e^y = \frac{2x \pm \sqrt{4x^2-4}}{2} = x \pm \sqrt{x^2-1}$$

Since $e^y \geq 1$ and $y \geq 0$: we need $e^y \geq 1$. Both roots are positive (for $x \geq 1$),
but $x + \sqrt{x^2-1} \geq 1$ and $x - \sqrt{x^2-1} \leq 1$. Since $\cosh$ is not one-to-one on all
of $\mathbb{R}$, we restrict to $y \geq 0$, giving $e^y \geq 1$:

$$e^y = x + \sqrt{x^2-1} \implies y = \ln(x + \sqrt{x^2-1})$$

Therefore $\text{arcosh}\,x = \ln(x + \sqrt{x^2-1})$ for $x \geq 1$. $\blacksquare$

### Proof of $\text{artanh}\,x = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right)$

Let $y = \text{artanh}\,x$. Then $x = \tanh y = \dfrac{\sinh y}{\cosh y}$.

Using $\cosh^2 y - \sinh^2 y = 1$:

$$x = \frac{\sinh y}{\cosh y} \implies \frac{\sinh y}{\cosh y} = x \implies \sinh y = x\cosh y$$

$$\cosh^2 y - x^2\cosh^2 y = 1 \implies \cosh^2 y = \frac{1}{1-x^2}$$

Also $\tanh y = \dfrac{e^{2y}-1}{e^{2y}+1}$, so:

$$x = \frac{e^{2y}-1}{e^{2y}+1} \implies x(e^{2y}+1) = e^{2y}-1 \implies xe^{2y}+x = e^{2y}-1$$

$$e^{2y}(1-x) = 1+x \implies e^{2y} = \frac{1+x}{1-x}$$

$$2y = \ln\!\left(\frac{1+x}{1-x}\right) \implies y = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right) \quad \blacksquare$$

---

## 4. Calculus with Hyperbolic Functions

### 4.1 Derivatives

$$\boxed{\frac{d}{dx}\sinh x = \cosh x}$$

$$\boxed{\frac{d}{dx}\cosh x = \sinh x}$$

$$\boxed{\frac{d}{dx}\tanh x = \text{sech}^2\,x}$$

### Proof of $\frac{d}{dx}\sinh x = \cosh x$

$$\frac{d}{dx}\sinh x = \frac{d}{dx}\left(\frac{e^x - e^{-x}}{2}\right) = \frac{e^x + e^{-x}}{2} = \cosh x \quad \blacksquare$$

### Proof of $\frac{d}{dx}\cosh x = \sinh x$

$$\frac{d}{dx}\cosh x = \frac{d}{dx}\left(\frac{e^x + e^{-x}}{2}\right) = \frac{e^x - e^{-x}}{2} = \sinh x \quad \blacksquare$$

### 4.2 Derivatives of inverse hyperbolic functions

$$\boxed{\frac{d}{dx}\text{arsinh}\,x = \frac{1}{\sqrt{x^2+1}}}$$

$$\boxed{\frac{d}{dx}\text{arcosh}\,x = \frac{1}{\sqrt{x^2-1}}, \quad x > 1}$$

$$\boxed{\frac{d}{dx}\text{artanh}\,x = \frac{1}{1-x^2}, \quad |x| < 1}$$

### Proof of $\frac{d}{dx}\text{arsinh}\,x = \frac{1}{\sqrt{x^2+1}}$

$\text{arsinh}\,x = \ln(x + \sqrt{x^2+1})$.

$$\frac{d}{dx}\ln(x+\sqrt{x^2+1}) = \frac{1}{x+\sqrt{x^2+1}}\cdot\left(1 + \frac{x}{\sqrt{x^2+1}}\right)$$

$$= \frac{1}{x+\sqrt{x^2+1}}\cdot\frac{\sqrt{x^2+1}+x}{\sqrt{x^2+1}} = \frac{1}{\sqrt{x^2+1}} \quad \blacksquare$$

### Proof of $\frac{d}{dx}\text{artanh}\,x = \frac{1}{1-x^2}$

$\text{artanh}\,x = \dfrac{1}{2}\ln\!\left(\dfrac{1+x}{1-x}\right)$.

$$\frac{d}{dx}\cdot\frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right) = \frac{1}{2}\cdot\frac{1-x}{1+x}\cdot\frac{(1)(1-x)-(1+x)(-1)}{(1-x)^2}$$

$$= \frac{1}{2}\cdot\frac{1-x}{1+x}\cdot\frac{2}{(1-x)^2} = \frac{1}{1-x^2} \quad \blacksquare$$

### 4.3 Standard integrals

The derivative results immediately give:

$$\boxed{\int \frac{1}{\sqrt{x^2+a^2}}\,dx = \text{arsinh}\!\left(\frac{x}{a}\right) + C = \ln\!\left(\frac{x}{a}+\sqrt{\frac{x^2}{a^2}+1}\right)+C}$$

$$\boxed{\int \frac{1}{\sqrt{x^2-a^2}}\,dx = \text{arcosh}\!\left(\frac{x}{a}\right) + C = \ln\!\left(\frac{x}{a}+\sqrt{\frac{x^2}{a^2}-1}\right)+C, \quad x > a}$$

$$\boxed{\int \frac{1}{a^2-x^2}\,dx = \frac{1}{a}\text{artanh}\!\left(\frac{x}{a}\right) + C, \quad |x| < a}$$

**Example.**
$\displaystyle\int \frac{1}{\sqrt{x^2+9}}\,dx = \text{arsinh}\!\left(\frac{x}{3}\right) + C = \ln\!\left(\frac{x}{3}+\sqrt{\frac{x^2}{9}+1}\right)+C = \ln\!\left(\frac{x+\sqrt{x^2+9}}{3}\right)+C$.

**Example.**
$\displaystyle\int \frac{1}{\sqrt{x^2-4}}\,dx = \text{arcosh}\!\left(\frac{x}{2}\right) + C$ for
$x > 2$.

**Example.**
$\displaystyle\int \frac{1}{4-x^2}\,dx = \frac{1}{2}\text{artanh}\!\left(\frac{x}{2}\right) + C$ for
$|x| < 2$.

### 4.4 Integrals of hyperbolic functions

$$\int \cosh x\,dx = \sinh x + C$$

$$\int \sinh x\,dx = \cosh x + C$$

$$\int \text{sech}^2\,x\,dx = \tanh x + C$$

$$\int \tanh x\,dx = \ln(\cosh x) + C$$

:::tip
When you encounter an integral of the form $\dfrac{1}{\sqrt{x^2+a^2}}$ or
$\dfrac{1}{\sqrt{x^2-a^2}}$, the inverse hyperbolic functions provide the most elegant answer. CIE
and Edexcel FP2 frequently test these.
:::

---

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
trigonometric identity (and using $i^2 = -1$) produces the corresponding hyperbolic identity.

### 5.3 The Gudermannian function

The **Gudermannian function** $\text{gd}(x)$ relates circular and hyperbolic functions without
complex numbers:

$$\sinh x = \tan(\text{gd}\,x), \quad \cosh x = \sec(\text{gd}\,x), \quad \tanh x = \sin(\text{gd}\,x)$$

$$\text{gd}\,x = \int_0^x \text{sech}\,t\,dt = 2\arctan(e^x) - \frac{\pi}{2}$$

---

## 6. Summary of Key Results

| Function  | Definition                 | Inverse                             |
| --------- | -------------------------- | ----------------------------------- | --- | --- |
| $\sinh x$ | $\dfrac{e^x-e^{-x}}{2}$    | $\ln(x+\sqrt{x^2+1})$               |
| $\cosh x$ | $\dfrac{e^x+e^{-x}}{2}$    | $\ln(x+\sqrt{x^2-1}),\ x\geq 1$     |
| $\tanh x$ | $\dfrac{\sinh x}{\cosh x}$ | $\dfrac{1}{2}\ln\dfrac{1+x}{1-x},\  | x   | <1$ |

| Derivative                                                | Integral                                                            |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| $\dfrac{d}{dx}\sinh x = \cosh x$                          | $\int\cosh x\,dx = \sinh x+C$                                       |
| $\dfrac{d}{dx}\cosh x = \sinh x$                          | $\int\sinh x\,dx = \cosh x+C$                                       |
| $\dfrac{d}{dx}\tanh x = \text{sech}^2\,x$                 | $\int\text{sech}^2\,x\,dx = \tanh x+C$                              |
| $\dfrac{d}{dx}\text{arsinh}\,x = \dfrac{1}{\sqrt{x^2+1}}$ | $\int\dfrac{dx}{\sqrt{x^2+a^2}} = \text{arsinh}\dfrac{x}{a}+C$      |
| $\dfrac{d}{dx}\text{artanh}\,x = \dfrac{1}{1-x^2}$        | $\int\dfrac{dx}{a^2-x^2} = \dfrac{1}{a}\text{artanh}\dfrac{x}{a}+C$ |

---

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

$e^x = \dfrac{6\pm\sqrt{36-4}}{2} = 3\pm 2\sqrt{2}$.

$x = \ln(3+2\sqrt{2})$ (taking the positive root for $x > 0$).
</details>

<details>
<summary>Problem 2</summary>
Prove that $\tanh 2x = \dfrac{2\tanh x}{1+\tanh^2 x}$.
</details>

<details>
<summary>Hint 2</summary>
Start from $\sinh 2x = 2\sinh x\cosh x$ and $\cosh 2x = \cosh^2 x + \sinh^2 x$. Then divide and simplify using $\tanh x = \sinh x/\cosh x$.
</details>

<details>
<summary>Answer 2</summary>
$\tanh 2x = \dfrac{\sinh 2x}{\cosh 2x} = \dfrac{2\sinh x\cosh x}{\cosh^2 x+\sinh^2 x}$.

Dividing numerator and denominator by $\cosh^2 x$:

$= \dfrac{2\tanh x}{1+\tanh^2 x}. \quad \blacksquare$
</details>

<details>
<summary>Problem 3</summary>
Find $\displaystyle\int \frac{1}{\sqrt{4x^2+9}}\,dx$.
</details>

<details>
<summary>Hint 3</summary>
This matches $\displaystyle\int\frac{1}{\sqrt{x^2+a^2}}\,dx$ after a substitution. Let $u = 2x$.
</details>

<details>
<summary>Answer 3</summary>
Let $u = 2x$, $du = 2\,dx$.

$\displaystyle\int\frac{1}{\sqrt{4x^2+9}}\,dx = \frac{1}{2}\int\frac{1}{\sqrt{u^2+9}}\,du = \frac{1}{2}\text{arsinh}\!\left(\frac{u}{3}\right)+C = \frac{1}{2}\text{arsinh}\!\left(\frac{2x}{3}\right)+C$.

$= \dfrac{1}{2}\ln\!\left(\dfrac{2x}{3}+\sqrt{\dfrac{4x^2}{9}+1}\right)+C = \dfrac{1}{2}\ln\!\left(\dfrac{2x+\sqrt{4x^2+9}}{3}\right)+C$.
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

$\cosh x = 7/4 \implies x = \pm\ln\!\left(\dfrac{7}{4}+\sqrt{\dfrac{49}{16}-1}\right) = \pm\ln\!\left(\dfrac{7+\sqrt{33}}{4}\right)$.
</details>

<details>
<summary>Problem 5</summary>
Differentiate $\text{arcosh}(x^2+1)$.
</details>

<details>
<summary>Hint 5</summary>
Use the chain rule with $\dfrac{d}{dx}\text{arcosh}\,u = \dfrac{1}{\sqrt{u^2-1}}\cdot\dfrac{du}{dx}$.
</details>

<details>
<summary>Answer 5</summary>
$\dfrac{d}{dx}\text{arcosh}(x^2+1) = \dfrac{1}{\sqrt{(x^2+1)^2-1}}\cdot 2x = \dfrac{2x}{\sqrt{x^4+2x^2}} = \dfrac{2x}{|x|\sqrt{x^2+2}}$.

For $x > 0$: $\dfrac{2}{\sqrt{x^2+2}}$.
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
$\cosh^2 x = \dfrac{\cosh 2x+1}{2}$.

$\displaystyle\int\cosh^2 x\,dx = \int\frac{\cosh 2x+1}{2}\,dx = \frac{1}{2}\left(\frac{\sinh 2x}{2}+x\right)+C = \frac{\sinh 2x}{4}+\frac{x}{2}+C$.
</details>

<details>
<summary>Problem 7</summary>
Show that $\dfrac{d}{dx}\left(\dfrac{\sinh x}{\cosh^2 x}\right) = \dfrac{\cosh^2 x - 2\sinh^2 x}{\cosh^3 x}$ and hence find $\displaystyle\int\text{sech}^2\,x\tanh x\,dx$.
</details>

<details>
<summary>Hint 7</summary>
Apply the quotient rule. Then use $\cosh^2 x - 2\sinh^2 x = \cosh^2 x - 2(\cosh^2 x - 1) = 2 - \cosh^2 x$.
</details>

<details>
<summary>Answer 7</summary>
$\dfrac{d}{dx}\left(\dfrac{\sinh x}{\cosh^2 x}\right) = \dfrac{\cosh x\cdot\cosh^2 x - \sinh x\cdot 2\cosh x\sinh x}{\cosh^4 x} = \dfrac{\cosh^3 x - 2\sinh^2 x\cosh x}{\cosh^4 x} = \dfrac{\cosh^2 x - 2\sinh^2 x}{\cosh^3 x}$.

Now
$\text{sech}^2\,x\tanh x = \dfrac{1}{\cosh^2 x}\cdot\dfrac{\sinh x}{\cosh x} = \dfrac{\sinh x}{\cosh^3 x}$.

Note that $\dfrac{d}{dx}\left(\dfrac{1}{\cosh^2 x}\right) = \dfrac{-2\sinh x}{\cosh^3 x}$.

So
$\displaystyle\int\text{sech}^2\,x\tanh x\,dx = \int\dfrac{\sinh x}{\cosh^3 x}\,dx = -\dfrac{1}{2\cosh^2 x}+C = -\dfrac{1}{2}\text{sech}^2\,x+C$.
</details>

<details>
<summary>Problem 8</summary>
Express $\ln(\sqrt{2}+1)$ in the form $k\cdot\text{arsinh}\,m$ for constants $k$ and $m$.
</details>

<details>
<summary>Hint 8</summary>
$\text{arsinh}\,x = \ln(x+\sqrt{x^2+1})$. Compare this with $\ln(\sqrt{2}+1)$.
</details>

<details>
<summary>Answer 8</summary>
$\text{arsinh}\,1 = \ln(1+\sqrt{2}) = \ln(\sqrt{2}+1)$.

Therefore $\ln(\sqrt{2}+1) = \text{arsinh}\,1$, so $k = 1$ and $m = 1$.
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

:::

:::

:::

:::
