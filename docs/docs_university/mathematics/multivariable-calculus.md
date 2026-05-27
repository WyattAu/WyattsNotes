---
title: Multivariable Calculus
description:
  "University-level notes on Multivariable Calculus: 1. Partial Derivatives; 1.1 Definition; 1.2
  Clairaut's Theorem; 1.3 Differentiability."
date: 2026-04-23T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: multivariable-calculus
---

## 1. Partial Derivatives

### 1.1 Definition

Let $f : D \subseteq \mathbb◆LB◆R◆RB◆^n \to \mathbb◆LB◆R◆RB◆$. The **partial derivative** of $f$ with respect to
$x_i$ at $\mathbf◆LB◆a◆RB◆ = (a_1, \ldots, a_n)$ is

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial x_i◆RB◆(\mathbf◆LB◆a◆RB◆) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆f(a_1, \ldots, a_i + h, \ldots, a_n) - f(a_1, \ldots, a_n)◆RB◆◆LB◆h◆RB◆$$

Provided the limit exists. This is the rate of change of $f$ in the direction of the $x_i$-axis,
Holding all other variables fixed.

**Notation.** Common notations for the partial derivative with respect to $x_i$ include
$f_◆LB◆x_i◆RB◆$, $\partial_i f$And $\frac◆LB◆\partial f◆RB◆◆LB◆\partial x_i◆RB◆$. We use these interchangeably.

### 1.2 Clairaut's Theorem

**Theorem 1.1 (Clairaut's Theorem / Schwarz's Theorem).** If $f_◆LB◆xy◆RB◆$ and $f_◆LB◆yx◆RB◆$ are continuous on
an Open set containing $(a, b)$Then

$$\frac◆LB◆\partial^2 f◆RB◆◆LB◆\partial x \partial y◆RB◆(a,b) = \frac◆LB◆\partial^2 f◆RB◆◆LB◆\partial y \partial x◆RB◆(a,b)$$

_Proof._ Define the second-order difference function

$$\Delta(h, k) = f(a+h,\, b+k) - f(a+h,\, b) - f(a,\, b+k) + f(a, b)$$

For $h, k \neq 0$. Define $\phi(s) = f(s, b+k) - f(s, b)$. Then $\Delta(h,k) = \phi(a+h) - \phi(a)$.
By the Mean Value Theorem, there exists $\theta_1 \in (0, 1)$ such that

$$\Delta(h, k) = h \cdot \phi'(a + \theta_1 h) = h \left[f_x(a + \theta_1 h,\, b+k) - f_x(a + \theta_1 h,\, b)\right]$$

Apply the Mean Value Theorem again to the function $g(t) = f_x(a + \theta_1 h,\, t)$ on $[b, b+k]$.
There exists $\theta_2 \in (0, 1)$ such that

$$\Delta(h, k) = hk \cdot f_◆LB◆xy◆RB◆(a + \theta_1 h,\, b + \theta_2 k)$$

Similarly, by reversing the order of application, there exist $\theta_3, \theta_4 \in (0,1)$ such
That

$$\Delta(h, k) = hk \cdot f_◆LB◆yx◆RB◆(a + \theta_3 h,\, b + \theta_4 k)$$

For $h, k \neq 0$ we have

$$f_◆LB◆xy◆RB◆(a + \theta_1 h,\, b + \theta_2 k) = f_◆LB◆yx◆RB◆(a + \theta_3 h,\, b + \theta_4 k)$$

Taking the limit as $(h, k) \to (0, 0)$ and using continuity of $f_◆LB◆xy◆RB◆$ and $f_◆LB◆yx◆RB◆$We obtain
$f_◆LB◆xy◆RB◆(a, b) = f_◆LB◆yx◆RB◆(a, b)$. $\blacksquare$

_Intuition._ Clairaut's theorem tells us that, under a mild regularity condition (continuity of the
Mixed second partials), the order in which we differentiate does not matter. Without this Condition,
the mixed partials may differ.

### 1.3 Differentiability

**Definition.** $f : D \subseteq \mathbb◆LB◆R◆RB◆^n \to \mathbb◆LB◆R◆RB◆$ is **differentiable** at $\mathbf◆LB◆a◆RB◆$
if There exists a linear map $L : \mathbb◆LB◆R◆RB◆^n \to \mathbb◆LB◆R◆RB◆$ such that

$$\lim_◆LB◆\mathbf◆LB◆h◆RB◆ \to \mathbf◆LB◆0◆RB◆◆RB◆ \frac◆LB◆f(\mathbf◆LB◆a◆RB◆ + \mathbf◆LB◆h◆RB◆) - f(\mathbf◆LB◆a◆RB◆) - L(\mathbf◆LB◆h◆RB◆)◆RB◆◆LB◆\lVert \mathbf◆LB◆h◆RB◆ \rVert◆RB◆ = 0$$

When $f$ is differentiable at $\mathbf◆LB◆a◆RB◆$The linear map $L$ is given by the gradient.

_Remark._ Existence of all partial derivatives at a point does **not** imply differentiability at
That point. The canonical counterexample is

$$f(x,y) = \begin◆LB◆cases◆RB◆ \dfrac◆LB◆xy◆RB◆◆LB◆x^2 + y^2◆RB◆ & \mathrm◆LB◆if\ (x,y) \neq (0,0), \\ 0 & \mathrm◆LB◆if\ (x,y) = (0,0). \end◆LB◆cases◆RB◆$$

Both $f_x(0,0)$ and $f_y(0,0)$ exist (and equal $0$), yet $f$ is not even continuous at the origin,
Hence not differentiable.

### 1.4 The Gradient

The **gradient** of $f$ at $\mathbf◆LB◆a◆RB◆$ is

$$\nabla f(\mathbf◆LB◆a◆RB◆) = \left(\frac◆LB◆\partial f◆RB◆◆LB◆\partial x_1◆RB◆(\mathbf◆LB◆a◆RB◆), \ldots, \frac◆LB◆\partial f◆RB◆◆LB◆\partial x_n◆RB◆(\mathbf◆LB◆a◆RB◆)\right)$$

The linear approximation of $f$ near $\mathbf◆LB◆a◆RB◆$ is

$$f(\mathbf◆LB◆a◆RB◆ + \mathbf◆LB◆h◆RB◆) \approx f(\mathbf◆LB◆a◆RB◆) + \nabla f(\mathbf◆LB◆a◆RB◆) \cdot \mathbf◆LB◆h◆RB◆$$

**Theorem 1.2.** If all partial derivatives of $f$ exist and are continuous in a neighbourhood of
$\mathbf◆LB◆a◆RB◆$Then $f$ is differentiable at $\mathbf◆LB◆a◆RB◆$.

_Remark._ Functions whose partial derivatives exist and are continuous on an open set $U$ are called
$C^1(U)$. Theorem 1.2 says $C^1 \implies$ differentiable. The converse is false: there exist
Differentiable functions whose partial derivatives are not continuous.

**Proposition.** If $f$ is differentiable at $\mathbf◆LB◆a◆RB◆$Then $f$ is continuous at $\mathbf◆LB◆a◆RB◆$.

_Proof._ From the definition of differentiability:

$$f(\mathbf◆LB◆a◆RB◆ + \mathbf◆LB◆h◆RB◆) - f(\mathbf◆LB◆a◆RB◆) = L(\mathbf◆LB◆h◆RB◆) + \varepsilon(\mathbf◆LB◆h◆RB◆)\lVert \mathbf◆LB◆h◆RB◆ \rVert$$

Where $L$ is linear and $\varepsilon(\mathbf◆LB◆h◆RB◆) \to 0$ as $\mathbf◆LB◆h◆RB◆ \to \mathbf◆LB◆0◆RB◆$. As
$\mathbf◆LB◆h◆RB◆ \to \mathbf◆LB◆0◆RB◆$ Both terms on the right vanish, so
$f(\mathbf◆LB◆a◆RB◆ + \mathbf◆LB◆h◆RB◆) \to f(\mathbf◆LB◆a◆RB◆)$. $\blacksquare$

### 1.5 Directional Derivatives

The **directional derivative** of $f$ at $\mathbf◆LB◆a◆RB◆$ in the direction of a unit vector $\mathbf◆LB◆u◆RB◆$
is

$$D_◆LB◆\mathbf◆LB◆u◆RB◆◆RB◆ f(\mathbf◆LB◆a◆RB◆) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆f(\mathbf◆LB◆a◆RB◆ + h\mathbf◆LB◆u◆RB◆) - f(\mathbf◆LB◆a◆RB◆)◆RB◆◆LB◆h◆RB◆$$

**Theorem 1.3.** If $f$ is differentiable at $\mathbf◆LB◆a◆RB◆$Then

$$D_◆LB◆\mathbf◆LB◆u◆RB◆◆RB◆ f(\mathbf◆LB◆a◆RB◆) = \nabla f(\mathbf◆LB◆a◆RB◆) \cdot \mathbf◆LB◆u◆RB◆$$

_Proof._ Since $f$ is differentiable at $\mathbf◆LB◆a◆RB◆$

$$\frac◆LB◆f(\mathbf◆LB◆a◆RB◆ + h\mathbf◆LB◆u◆RB◆) - f(\mathbf◆LB◆a◆RB◆)◆RB◆◆LB◆h◆RB◆ = \frac◆LB◆\nabla f(\mathbf◆LB◆a◆RB◆) \cdot (h\mathbf◆LB◆u◆RB◆) + \varepsilon(h\mathbf◆LB◆u◆RB◆) \lVert h\mathbf◆LB◆u◆RB◆ \rVert◆RB◆◆LB◆h◆RB◆$$

$$= \nabla f(\mathbf◆LB◆a◆RB◆) \cdot \mathbf◆LB◆u◆RB◆ + \varepsilon(h\mathbf◆LB◆u◆RB◆) \lVert \mathbf◆LB◆u◆RB◆ \rVert$$

Where $\varepsilon(\mathbf◆LB◆h◆RB◆) \to 0$ as $\mathbf◆LB◆h◆RB◆ \to \mathbf◆LB◆0◆RB◆$. Taking $h \to 0$ gives the
result. $\blacksquare$

**Corollary 1.4.** The gradient points in the direction of steepest ascent, and
$\lVert \nabla f \rVert$ Is the rate of steepest ascent.

_Proof._ By the Cauchy--Schwarz inequality,
$\lvert \nabla f \cdot \mathbf◆LB◆u◆RB◆ \rvert \leq \lVert \nabla f \rVert \cdot \lVert \mathbf◆LB◆u◆RB◆ \rVert = \lVert \nabla f \rVert$
With equality when $\mathbf◆LB◆u◆RB◆$ is parallel to $\nabla f$. $\blacksquare$

### 1.6 Chain Rule

**Theorem 1.5 (Multivariable Chain Rule).** If $\mathbf◆LB◆g◆RB◆ : \mathbb◆LB◆R◆RB◆^m \to \mathbb◆LB◆R◆RB◆^n$ is
Differentiable at $\mathbf◆LB◆a◆RB◆$ and $f : \mathbb◆LB◆R◆RB◆^n \to \mathbb◆LB◆R◆RB◆$ is differentiable at
$\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)$Then

$$\nabla (f \circ \mathbf◆LB◆g◆RB◆)(\mathbf◆LB◆a◆RB◆) = J\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)^T \nabla f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆))$$

Where $J\mathbf◆LB◆g◆RB◆$ is the Jacobian matrix of $\mathbf◆LB◆g◆RB◆$.

_Proof._ Write $h(t) = f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆ + t\mathbf◆LB◆v◆RB◆))$ for a fixed direction $\mathbf◆LB◆v◆RB◆$.
Then

$$\frac◆LB◆h(t) - h(0)◆RB◆◆LB◆t◆RB◆ = \frac◆LB◆f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆ + t\mathbf◆LB◆v◆RB◆)) - f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆))◆RB◆◆LB◆t◆RB◆$$

Let $\mathbf◆LB◆k◆RB◆ = \mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆ + t\mathbf◆LB◆v◆RB◆) - \mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)$. By
differentiability of $\mathbf◆LB◆g◆RB◆$ $\mathbf◆LB◆k◆RB◆ = J\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)(t\mathbf◆LB◆v◆RB◆) + o(t)$And
$\mathbf◆LB◆k◆RB◆ \to \mathbf◆LB◆0◆RB◆$ as $t \to 0$. By Differentiability of $f$:

$$f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆) + \mathbf◆LB◆k◆RB◆) - f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)) = \nabla f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)) \cdot \mathbf◆LB◆k◆RB◆ + o(\lVert \mathbf◆LB◆k◆RB◆ \rVert)$$

$$= \nabla f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)) \cdot [J\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)(t\mathbf◆LB◆v◆RB◆) + o(t)] + o(t)$$

Dividing by $t$ and taking $t \to 0$:

$$h'(0) = \nabla f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)) \cdot J\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)\mathbf◆LB◆v◆RB◆ = [J\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)^T \nabla f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆))] \cdot \mathbf◆LB◆v◆RB◆$$

Since $\mathbf◆LB◆v◆RB◆$ was arbitrary,
$\nabla h(0) = J\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆)^T \nabla f(\mathbf◆LB◆g◆RB◆(\mathbf◆LB◆a◆RB◆))$. $\blacksquare$

### 1.7 Chain Rule Worked Example

**Problem.** Let $f(x, y) = x^2 y$ and let $x = \cos t$, $y = \sin t$. Find
$\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆ f(\cos t, \sin t)$ Using the chain rule, and verify by direct substitution.

<details>
<summary>Solution</summary>

**Via the chain rule:**

$$\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆ f(x(t), y(t)) = f_x \cdot x'(t) + f_y \cdot y'(t)$$

$$= 2xy \cdot (-\sin t) + x^2 \cdot \cos t = -2\cos t \sin^2 t + \cos^3 t$$

**Via direct substitution:** $f(\cos t, \sin t) = \cos^2 t \sin t$.

$$\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆[\cos^2 t \sin t] = -2\cos t \sin^2 t + \cos^3 t$$

Both methods agree. $\blacksquare$

</details>

### 1.8 Worked Example

**Problem.** Let $f(x, y) = x^2 y + \sin(xy)$. Compute $\nabla f$ and find the directional
derivative At $(1, \pi)$ in the direction $\mathbf◆LB◆u◆RB◆ = (1/\sqrt◆LB◆2◆RB◆, 1/\sqrt◆LB◆2◆RB◆)$.

_Solution._

$\frac◆LB◆\partial f◆RB◆◆LB◆\partial x◆RB◆ = 2xy + y\cos(xy)$

$\frac◆LB◆\partial f◆RB◆◆LB◆\partial y◆RB◆ = x^2 + x\cos(xy)$

$\nabla f(1, \pi) = (2\pi + \pi\cos(\pi), 1 + \cos(\pi)) = (2\pi - \pi, 1 - 1) = (\pi, 0)$

$D_◆LB◆\mathbf◆LB◆u◆RB◆◆RB◆ f(1, \pi) = \nabla f(1, \pi) \cdot \mathbf◆LB◆u◆RB◆ = \pi \cdot \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆ + 0 = \frac◆LB◆\pi◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆$
$\blacksquare$

### 1.9 Additional Worked Examples

**Problem.** Let $f(x, y, z) = x^2 y\, e^z + \sin(xz)$. Compute $\nabla f$ and evaluate it at
$(1, 0, \pi)$.

<details>
<summary>Solution</summary>

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial x◆RB◆ = 2xy\, e^z + z\cos(xz)$$

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial y◆RB◆ = x^2 e^z$$

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial z◆RB◆ = x^2 y\, e^z + x\cos(xz)$$

At $(1, 0, \pi)$:

$$f_x(1,0,\pi) = 0 + \pi\cos(\pi) = -\pi, \quad f_y(1,0,\pi) = e^◆LB◆\pi◆RB◆, \quad f_z(1,0,\pi) = 0 + \cos(\pi) = -1$$

$$\nabla f(1, 0, \pi) = (-\pi,\, e^◆LB◆\pi◆RB◆,\, -1)$$

$\blacksquare$

</details>

**Problem.** Find the directional derivative of $f(x,y) = x^2 y^3$ at $(1, -1)$ in the direction of
$\mathbf◆LB◆v◆RB◆ = (3, -4)$.

<details>
<summary>Solution</summary>

First normalise $\mathbf◆LB◆v◆RB◆$: $\lVert \mathbf◆LB◆v◆RB◆ \rVert = \sqrt◆LB◆9 + 16◆RB◆ = 5$So
$\mathbf◆LB◆u◆RB◆ = (3/5,\, -4/5)$.

$$\nabla f = (2xy^3,\, 3x^2 y^2)$$

$$\nabla f(1, -1) = (2 \cdot 1 \cdot (-1),\, 3 \cdot 1 \cdot 1) = (-2, 3)$$

$$D_◆LB◆\mathbf◆LB◆u◆RB◆◆RB◆ f(1, -1) = (-2)(3/5) + (3)(-4/5) = \frac◆LB◆-6 - 12◆RB◆◆LB◆5◆RB◆ = -\frac◆LB◆18◆RB◆◆LB◆5◆RB◆$$

$\blacksquare$

</details>

### 1.10 Implicit Differentiation

Suppose $F(x, y, z) = 0$ defines $z$ implicitly as a function of $x$ and $y$ near a point
$(a, b, c)$ with $F_z(a, b, c) \neq 0$. By the Implicit Function Theorem, there exists a $C^1$
function $\varphi$ defined on a neighbourhood of $(a, b)$ such that $\varphi(a, b) = c$ and
$F(x, y, \varphi(x, y)) = 0$.

Differentiating $F(x, y, \varphi(x, y)) = 0$ with respect to $x$:

$$F_x + F_z \cdot \frac◆LB◆\partial z◆RB◆◆LB◆\partial x◆RB◆ = 0 \implies \frac◆LB◆\partial z◆RB◆◆LB◆\partial x◆RB◆ = -\frac◆LB◆F_x◆RB◆◆LB◆F_z◆RB◆$$

Similarly, $\frac◆LB◆\partial z◆RB◆◆LB◆\partial y◆RB◆ = -\frac◆LB◆F_y◆RB◆◆LB◆F_z◆RB◆$.

**Proposition 1.6 (Implicit Function Theorem, special case).** If $F : \mathbb◆LB◆R◆RB◆^3 \to \mathbb◆LB◆R◆RB◆$
is $C^1$ and $F(a,b,c) = 0$ with $F_z(a,b,c) \neq 0$Then there exist neighbourhoods $U$ of $(a,b)$
and $V$ of $c$ and a unique $C^1$ function $\varphi : U \to V$ with $\varphi(a,b) = c$ and
$F(x, y, \varphi(x,y)) = 0$ for all $(x,y) \in U$.

**Problem.** If $x^2 y + y^2 z + z^2 x = 3$Find $\frac◆LB◆\partial z◆RB◆◆LB◆\partial x◆RB◆$ and
$\frac◆LB◆\partial z◆RB◆◆LB◆\partial y◆RB◆$ at the point $(1, 1, 1)$.

<details>
<summary>Solution</summary>

Let $F(x,y,z) = x^2 y + y^2 z + z^2 x - 3$. Then $F_x = 2xy + z^2$
$F_y = x^2 + 2yz$, $F_z = y^2 + 2zx$.

At $(1,1,1)$: $F_x = 3$$F_y = 3$$F_z = 3$.

$$\frac◆LB◆\partial z◆RB◆◆LB◆\partial x◆RB◆ = -\frac◆LB◆F_x◆RB◆◆LB◆F_z◆RB◆ = -\frac◆LB◆3◆RB◆◆LB◆3◆RB◆ = -1, \quad \frac◆LB◆\partial z◆RB◆◆LB◆\partial y◆RB◆ = -\frac◆LB◆F_y◆RB◆◆LB◆F_z◆RB◆ = -\frac◆LB◆3◆RB◆◆LB◆3◆RB◆ = -1$$

$\blacksquare$

</details>

### 1.11 Taylor's Theorem for Multivariable Functions

**Theorem 1.7 (Taylor's Theorem).** Let $f : U \subseteq \mathbb◆LB◆R◆RB◆^n \to \mathbb◆LB◆R◆RB◆$ be of class
$C^◆LB◆k+1◆RB◆$ On an open convex set $U$And let $\mathbf◆LB◆a◆RB◆ \in U$. Then for all $\mathbf◆LB◆x◆RB◆ \in U$:

$$f(\mathbf◆LB◆x◆RB◆) = f(\mathbf◆LB◆a◆RB◆) + \nabla f(\mathbf◆LB◆a◆RB◆) \cdot (\mathbf◆LB◆x◆RB◆ - \mathbf◆LB◆a◆RB◆) + \frac◆LB◆1◆RB◆◆LB◆2!◆RB◆(\mathbf◆LB◆x◆RB◆ - \mathbf◆LB◆a◆RB◆)^T H_f(\mathbf◆LB◆a◆RB◆)(\mathbf◆LB◆x◆RB◆ - \mathbf◆LB◆a◆RB◆) + \cdots + R_k$$

Where $H_f$ is the Hessian matrix and the remainder $R_k$ can be written in Lagrange form:

$$R_k = \frac◆LB◆1◆RB◆◆LB◆(k+1)!◆RB◆ \sum_◆LB◆\lvert \alpha \rvert = k+1◆RB◆ \frac◆LB◆(k+1)!◆RB◆◆LB◆\alpha!◆RB◆ D^◆LB◆\alpha◆RB◆ f(\mathbf◆LB◆c◆RB◆)\, (\mathbf◆LB◆x◆RB◆ - \mathbf◆LB◆a◆RB◆)^◆LB◆\alpha◆RB◆$$

For some $\mathbf◆LB◆c◆RB◆$ on the line segment joining $\mathbf◆LB◆a◆RB◆$ and $\mathbf◆LB◆x◆RB◆$.

For $n = 2$ and $k = 2$The second-order Taylor expansion is:

$$f(a+h, b+k) = f(a,b) + f_x h + f_y k + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(f_◆LB◆xx◆RB◆ h^2 + 2f_◆LB◆xy◆RB◆ hk + f_◆LB◆yy◆RB◆ k^2\right) + R_2$$

Where all partial derivatives are evaluated at $(a, b)$ and the remainder is

$$R_2 = \frac◆LB◆1◆RB◆◆LB◆6◆RB◆\left(f_◆LB◆xxx◆RB◆ h^3 + 3f_◆LB◆xxy◆RB◆ h^2 k + 3f_◆LB◆xyy◆RB◆ hk^2 + f_◆LB◆yyy◆RB◆ k^3\right)\Big|_◆LB◆\mathbf◆LB◆c◆RB◆◆RB◆$$

_Proof (sketch)._ Define $\phi(t) = f(\mathbf◆LB◆a◆RB◆ + t(\mathbf◆LB◆x◆RB◆ - \mathbf◆LB◆a◆RB◆))$ for $t \in [0, 1]$.
Apply the single-variable Taylor theorem to $\phi$ at $t = 0$:

$$\phi(1) = \phi(0) + \phi'(0) + \frac◆LB◆1◆RB◆◆LB◆2!◆RB◆\phi''(0) + \cdots + \frac◆LB◆1◆RB◆◆LB◆k!◆RB◆\phi^◆LB◆(k)◆RB◆(0) + \frac◆LB◆1◆RB◆◆LB◆(k+1)!◆RB◆\phi^◆LB◆(k+1)◆RB◆(\tau)$$

For some $\tau \in (0, 1)$. By the multivariable chain rule,
$\phi'(t) = \nabla f(\mathbf◆LB◆a◆RB◆ + t(\mathbf◆LB◆x◆RB◆-\mathbf◆LB◆a◆RB◆)) \cdot (\mathbf◆LB◆x◆RB◆-\mathbf◆LB◆a◆RB◆)$And higher
Derivatives involve higher-order partial derivatives of $f$. Substituting
$\mathbf◆LB◆c◆RB◆ = \mathbf◆LB◆a◆RB◆ + \tau(\mathbf◆LB◆x◆RB◆-\mathbf◆LB◆a◆RB◆)$ yields the result. $\blacksquare$

### 1.12 Common Pitfalls

:::caution Common Pitfalls

- **Existence $\neq$ continuity of partials.** A function can have all partial derivatives at a
  point yet fail to be continuous (hence not differentiable) there.
- **Existence $\neq$ differentiability.** Even if all partials exist at a point, the function need
  not be differentiable. Continuity of the partials in a neighbourhood (i.e., $C^1$) is sufficient
  but not necessary.
- **Clairaut's theorem requires continuity.** Without continuity of the mixed partials, the equality
  $f_◆LB◆xy◆RB◆ = f_◆LB◆yx◆RB◆$ can fail.
- **Normalise the direction vector.** The formula $D_◆LB◆\mathbf◆LB◆u◆RB◆◆RB◆ f = \nabla f \cdot \mathbf◆LB◆u◆RB◆$
  assumes $\lVert \mathbf◆LB◆u◆RB◆ \rVert = 1$. If the direction is given by a non-unit vector
  $\mathbf◆LB◆v◆RB◆$Divide by $\lVert \mathbf◆LB◆v◆RB◆ \rVert$ first. :::

## 2. Multiple Integrals

### 2.1 Double Integrals

The **double integral** of $f$ over a rectangle $R = [a,b] \times [c,d]$ is defined as the limit of
Riemann sums:

$$\iint_R f(x,y)\, dA = \lim_◆LB◆\lVert P \rVert \to 0◆RB◆ \sum_◆LB◆i,j◆RB◆ f(x_◆LB◆ij◆RB◆^*, y_◆LB◆ij◆RB◆^*) \Delta A_◆LB◆ij◆RB◆$$

**Theorem 2.1 (Fubini's Theorem).** If $f$ is continuous on $R = [a,b] \times [c,d]$Then

$$\iint_R f(x,y)\, dA = \int_a^b \left(\int_c^d f(x,y)\, dy\right) dx = \int_c^d \left(\int_a^b f(x,y)\, dx\right) dy$$

_Proof (sketch)._ For a continuous function $f$ on the compact rectangle $R$Define

$$F(x) = \int_c^d f(x,y)\, dy$$

Since $f$ is continuous, $F$ is continuous on $[a,b]$. For each partition
$P = \\{(x_0, \ldots, x_m)\\}$ of $[a,b]$Define Riemann sums for the outer integral:

$$S(P) = \sum_◆LB◆i=1◆RB◆^m F(x_i^*)\, \Delta x_i = \sum_◆LB◆i=1◆RB◆^m \int_c^d f(x_i^*, y)\, dy\, \Delta x_i$$

By Fubini's theorem for Riemann integrals (proven via uniform continuity of $f$ on the compact set
$R$), As $\lVert P \rVert \to 0$ these sums converge to both $\iint_R f\, dA$ and
$\int_a^b F(x)\, dx$. The Reversal of integration order follows by symmetry. $\blacksquare$

### 2.2 General Regions

For a general region $D$ in $\mathbb◆LB◆R◆RB◆^2$:

- **Type I region**: $D = \\{(x,y) : a \leq x \leq b,\, g_1(x) \leq y \leq g_2(x)\\}$

$$\iint_D f\, dA = \int_a^b \int_◆LB◆g_1(x)◆RB◆^◆LB◆g_2(x)◆RB◆ f(x,y)\, dy\, dx$$

- **Type II region**: $D = \\{(x,y) : c \leq y \leq d,\, h_1(y) \leq x \leq h_2(y)\\}$

$$\iint_D f\, dA = \int_c^d \int_◆LB◆h_1(y)◆RB◆^◆LB◆h_2(y)◆RB◆ f(x,y)\, dx\, dy$$

**Problem.** Evaluate $\iint_D xy\, dA$ where $D$ is the region bounded by $y = x^2$ and
$y = x + 2$.

<details>
<summary>Solution</summary>

The curves intersect when $x^2 = x + 2$I.e., $x^2 - x - 2 = 0$So $(x-2)(x+1) = 0$Giving $x = -1$ and
$x = 2$. As a Type I region, $D = \\{(x,y) : -1 \leq x \leq 2,\, x^2 \leq y \leq x+2\\}$.

$$\iint_D xy\, dA = \int_◆LB◆-1◆RB◆^◆LB◆2◆RB◆ \int_◆LB◆x^2◆RB◆^◆LB◆x+2◆RB◆ xy\, dy\, dx = \int_◆LB◆-1◆RB◆^◆LB◆2◆RB◆ x \left[\frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆\right]_◆LB◆x^2◆RB◆^◆LB◆x+2◆RB◆\, dx$$

$$= \int_◆LB◆-1◆RB◆^◆LB◆2◆RB◆ \frac◆LB◆x◆RB◆◆LB◆2◆RB◆\left[(x+2)^2 - x^4\right]\, dx = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \int_◆LB◆-1◆RB◆^◆LB◆2◆RB◆ \left[x(x+2)^2 - x^5\right]\, dx$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \int_◆LB◆-1◆RB◆^◆LB◆2◆RB◆ \left[x^3 + 4x^2 + 4x - x^5\right]\, dx$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[\frac◆LB◆x^4◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆4x^3◆RB◆◆LB◆3◆RB◆ + 2x^2 - \frac◆LB◆x^6◆RB◆◆LB◆6◆RB◆\right]_◆LB◆-1◆RB◆^◆LB◆2◆RB◆$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[\left(4 + \frac◆LB◆32◆RB◆◆LB◆3◆RB◆ + 8 - \frac◆LB◆64◆RB◆◆LB◆6◆RB◆\right) - \left(\frac◆LB◆1◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆4◆RB◆◆LB◆3◆RB◆ + 2 - \frac◆LB◆1◆RB◆◆LB◆6◆RB◆\right)\right]$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[\frac◆LB◆36◆RB◆◆LB◆3◆RB◆ - \frac◆LB◆9◆RB◆◆LB◆12◆RB◆\right] = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[12 - \frac◆LB◆3◆RB◆◆LB◆4◆RB◆\right] = \frac◆LB◆45◆RB◆◆LB◆8◆RB◆$$

$\blacksquare$

</details>

**Problem.** Evaluate $\iint_D x\, dA$ where $D$ is the region bounded by $y = x$, $y = 2x$And
$x + y = 2$.

<details>
<summary>Solution</summary>

First, find the intersections. The lines $y = x$ and $y = 2x$ intersect at $(0, 0)$. The line
$x + y = 2$ intersects $y = x$ at $(1, 1)$ and $y = 2x$ at $(2/3, 4/3)$.

As a Type I region, we must split: for $0 \leq x \leq 2/3$, $x \leq y \leq 2x$; for
$2/3 \leq x \leq 1$, $x \leq y \leq 2 - x$.

$$\iint_D x\, dA = \int_0^◆LB◆2/3◆RB◆ \int_x^◆LB◆2x◆RB◆ x\, dy\, dx + \int_◆LB◆2/3◆RB◆^1 \int_x^◆LB◆2-x◆RB◆ x\, dy\, dx$$

$$= \int_0^◆LB◆2/3◆RB◆ x(x - x)\, dx...$$

Wait, this is getting messy. Let me use Type II instead. For each $y$, $x$ ranges from $y/2$ to $y$
(for $0 \leq y \leq 4/3$) and from $y/2$ to $2 - y$ (for $4/3 \leq y \leq 1$). Actually, the
simplest approach is to split $D$ at $y = 4/3$.

For $0 \leq y \leq 1$: $y/2 \leq x \leq y$ (between $y = x$ and $y = 2x$But only up to $x + y = 2$).
Actually $y = 2x$ gives $x = y/2$And $y = x$ gives $x = y$. But $x + y = 2$ gives $x = 2 - y$. For
$y \leq 1$: both $y \leq 2 - y$ (since $y \leq 1$) and $y/2 \leq y$So the right boundary is $y$. But
we also need $x + y \leq 2$I.e., $x \leq 2 - y$. For $y \leq 1$: $y \leq 2 - y$So the constraint
$x \leq y$ is tighter.

For $0 \leq y \leq 1$: $y/2 \leq x \leq y$.

$$\iint_D x\, dA = \int_0^1 \int_◆LB◆y/2◆RB◆^y x\, dx\, dy = \int_0^1 \left[\frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆\right]_◆LB◆y/2◆RB◆^y\, dy = \int_0^1 \frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆y^2◆RB◆◆LB◆8◆RB◆\, dy = \int_0^1 \frac◆LB◆3y^2◆RB◆◆LB◆8◆RB◆\, dy = \frac◆LB◆3◆RB◆◆LB◆8◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆3◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆8◆RB◆$$

$\blacksquare$

</details>

### 2.3 Triple Integrals

Triple integrals extend to $\mathbb◆LB◆R◆RB◆^3$:

$$\iiint_E f(x,y,z)\, dV = \iint_D \left(\int_◆LB◆g_1(x,y)◆RB◆^◆LB◆g_2(x,y)◆RB◆ f(x,y,z)\, dz\right) dA$$

**Problem.** Evaluate $\iiint_E z\, dV$ where $E$ is the tetrahedron in the first octant bounded by
The coordinate planes and $x + y + z = 1$.

<details>
<summary>Solution</summary>

The region $E$ can be described as
$\\{(x,y,z) : 0 \leq x \leq 1,\, 0 \leq y \leq 1-x,\, 0 \leq z \leq 1-x-y\\}$.

$$\iiint_E z\, dV = \int_0^1 \int_0^◆LB◆1-x◆RB◆ \int_0^◆LB◆1-x-y◆RB◆ z\, dz\, dy\, dx$$

$$= \int_0^1 \int_0^◆LB◆1-x◆RB◆ \left[\frac◆LB◆z^2◆RB◆◆LB◆2◆RB◆\right]_0^◆LB◆1-x-y◆RB◆\, dy\, dx = \int_0^1 \int_0^◆LB◆1-x◆RB◆ \frac◆LB◆(1-x-y)^2◆RB◆◆LB◆2◆RB◆\, dy\, dx$$

Substituting $u = 1 - x - y$, $du = -dy$:

$$= \int_0^1 \frac◆LB◆(1-x)^3◆RB◆◆LB◆6◆RB◆\, dx = \frac◆LB◆1◆RB◆◆LB◆6◆RB◆\left[-\frac◆LB◆(1-x)^4◆RB◆◆LB◆4◆RB◆\right]_0^1 = \frac◆LB◆1◆RB◆◆LB◆6◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆24◆RB◆$$

$\blacksquare$

</details>

### 2.4 Change of Variables

**Theorem 2.2 (Change of Variables).** Let $T : D \subseteq \mathbb◆LB◆R◆RB◆^n \to \mathbb◆LB◆R◆RB◆^n$ be a
$C^1$ diffeomorphism with Jacobian determinant $J_T$. Then

$$\int_◆LB◆T(D)◆RB◆ f(\mathbf◆LB◆u◆RB◆)\, d\mathbf◆LB◆u◆RB◆ = \int_D f(T(\mathbf◆LB◆x◆RB◆))\, \lvert J_T(\mathbf◆LB◆x◆RB◆)\rvert\, d\mathbf◆LB◆x◆RB◆$$

_Derivation of the Jacobian factor (for $n = 2$)._ Let $T(x, y) = (u(x,y),\, v(x,y))$ be a $C^1$
Diffeomorphism. Partition $D$ into small rectangles $R_◆LB◆ij◆RB◆$ of area $\Delta x\, \Delta y$. The
image $T(R_◆LB◆ij◆RB◆)$ is approximately a parallelogram spanned by the vectors

$$\mathbf◆LB◆a◆RB◆ = T(x + \Delta x, y) - T(x, y) \approx \left(\frac◆LB◆\partial u◆RB◆◆LB◆\partial x◆RB◆\Delta x,\, \frac◆LB◆\partial v◆RB◆◆LB◆\partial x◆RB◆\Delta x\right)$$

$$\mathbf◆LB◆b◆RB◆ = T(x, y + \Delta y) - T(x, y) \approx \left(\frac◆LB◆\partial u◆RB◆◆LB◆\partial y◆RB◆\Delta y,\, \frac◆LB◆\partial v◆RB◆◆LB◆\partial y◆RB◆\Delta y\right)$$

The area of this parallelogram is $\lvert \mathbf◆LB◆a◆RB◆ \times \mathbf◆LB◆b◆RB◆ \rvert$Which equals

$$\left\lvert \frac◆LB◆\partial u◆RB◆◆LB◆\partial x◆RB◆\frac◆LB◆\partial v◆RB◆◆LB◆\partial y◆RB◆ - \frac◆LB◆\partial u◆RB◆◆LB◆\partial y◆RB◆\frac◆LB◆\partial v◆RB◆◆LB◆\partial x◆RB◆ \right\rvert \Delta x\, \Delta y = \lvert J_T \rvert\, \Delta x\, \Delta y$$

Summing over all subrectangles and taking the limit gives the change of variables formula.
$\blacksquare$

**Polar coordinates:** $x = r\cos\theta$$y = r\sin\theta$$\lvert J \rvert = r$.

$$\iint_D f(x,y)\, dA = \iint_◆LB◆D'◆RB◆ f(r\cos\theta, r\sin\theta)\, r\, dr\, d\theta$$

**Cylindrical coordinates:** $x = r\cos\theta$$y = r\sin\theta$$z = z$$\lvert J \rvert = r$.

$$\iiint_E f(x,y,z)\, dV = \iiint_◆LB◆E'◆RB◆ f(r\cos\theta, r\sin\theta, z)\, r\, dr\, d\theta\, dz$$

**Spherical coordinates:**
$x = \rho\sin\phi\cos\theta$$y = \rho\sin\phi\sin\theta$$z = \rho\cos\phi$
$\lvert J \rvert = \rho^2 \sin\phi$.

$$\iiint_E f(x,y,z)\, dV = \iiint_◆LB◆E'◆RB◆ f(\rho\sin\phi\cos\theta, \rho\sin\phi\sin\theta, \rho\cos\phi)\, \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta$$

### 2.5 Coordinate System Worked Examples

**Problem.** Evaluate $\iint_D e^◆LB◆-(x^2+y^2)◆RB◆\, dA$ where $D$ is the entire $\mathbb◆LB◆R◆RB◆^2$ plane.

<details>
<summary>Solution</summary>

Use polar coordinates. The region $D'$ is $0 \leq r \lt \infty$$0 \leq \theta \leq 2\pi$.

$$\iint_D e^◆LB◆-(x^2+y^2)◆RB◆\, dA = \int_0^◆LB◆2\pi◆RB◆ \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-r^2◆RB◆\, r\, dr\, d\theta$$

The inner integral:
$\int_0^◆LB◆\infty◆RB◆ r e^◆LB◆-r^2◆RB◆\, dr = \left[-\frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆-r^2◆RB◆\right]_0^◆LB◆\infty◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$.

$$= \int_0^◆LB◆2\pi◆RB◆ \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\, d\theta = \pi$$

$\blacksquare$

_Remark._ This is the classic Gaussian integral computation, yielding
$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-x^2◆RB◆\, dx = \sqrt◆LB◆\pi◆RB◆$.

</details>

**Problem.** Evaluate $\iiint_E z\, dV$ where $E$ is the solid bounded above by the sphere
$x^2 + y^2 + z^2 = 2$ and below by the paraboloid $z = x^2 + y^2$.

<details>
<summary>Solution</summary>

The surfaces intersect when $x^2 + y^2 + (x^2 + y^2)^2 = 2$. Let $r^2 = x^2 + y^2$. Then
$r^2 + r^4 = 2$I.e., $(r^2 + 2)(r^2 - 1) = 0$So $r = 1$ (positive root). Use Cylindrical
coordinates. The region $E'$ is

$$0 \leq r \leq 1, \quad 0 \leq \theta \leq 2\pi, \quad r^2 \leq z \leq \sqrt◆LB◆2 - r^2◆RB◆$$

$$\iiint_E z\, dV = \int_0^◆LB◆2\pi◆RB◆ \int_0^1 \int_◆LB◆r^2◆RB◆^◆LB◆\sqrt◆LB◆2-r^2◆RB◆◆RB◆ z\, r\, dz\, dr\, d\theta$$

$$= \int_0^◆LB◆2\pi◆RB◆ \int_0^1 \frac◆LB◆r◆RB◆◆LB◆2◆RB◆\left[(2 - r^2) - r^4\right]\, dr\, d\theta = \int_0^◆LB◆2\pi◆RB◆ \int_0^1 \frac◆LB◆r◆RB◆◆LB◆2◆RB◆(2 - r^2 - r^4)\, dr\, d\theta$$

$$= \int_0^◆LB◆2\pi◆RB◆ \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[r^2 - \frac◆LB◆r^4◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆r^6◆RB◆◆LB◆6◆RB◆\right]_0^1\, d\theta = \int_0^◆LB◆2\pi◆RB◆ \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆7◆RB◆◆LB◆12◆RB◆\, d\theta = \frac◆LB◆7\pi◆RB◆◆LB◆12◆RB◆$$

$\blacksquare$

</details>

**Problem.** Evaluate $\iiint_E (x^2 + y^2 + z^2)\, dV$ where $E$ is the solid ball
$x^2 + y^2 + z^2 \leq a^2$.

<details>
<summary>Solution</summary>

Use spherical coordinates. In spherical: $x^2 + y^2 + z^2 = \rho^2$And $E'$ is
$0 \leq \rho \leq a$$0 \leq \phi \leq \pi$$0 \leq \theta \leq 2\pi$.

$$\iiint_E (x^2 + y^2 + z^2)\, dV = \int_0^◆LB◆2\pi◆RB◆ \int_0^◆LB◆\pi◆RB◆ \int_0^a \rho^2 \cdot \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta$$

$$= \left(\int_0^a \rho^4\, d\rho\right)\left(\int_0^◆LB◆\pi◆RB◆ \sin\phi\, d\phi\right)\left(\int_0^◆LB◆2\pi◆RB◆ d\theta\right)$$

$$= \frac◆LB◆a^5◆RB◆◆LB◆5◆RB◆ \cdot 2 \cdot 2\pi = \frac◆LB◆4\pi a^5◆RB◆◆LB◆5◆RB◆$$

$\blacksquare$

</details>

### 2.6 Worked Example

**Problem.** Compute $\iint_D (x^2 + y^2)\, dA$ where $D$ is the region bounded by $x^2 + y^2 = 4$.

_Solution._ Use polar coordinates. The region $D'$ is $0 \leq r \leq 2$, $0 \leq \theta \leq 2\pi$.

$$\iint_D (x^2 + y^2)\, dA = \int_0^◆LB◆2\pi◆RB◆ \int_0^2 r^2 \cdot r\, dr\, d\theta = \int_0^◆LB◆2\pi◆RB◆ \int_0^2 r^3\, dr\, d\theta$$

$$= \int_0^◆LB◆2\pi◆RB◆ \left[\frac◆LB◆r^4◆RB◆◆LB◆4◆RB◆\right]_0^2 d\theta = \int_0^◆LB◆2\pi◆RB◆ 4\, d\theta = 8\pi$$

$\blacksquare$

**Problem.** Evaluate $\iint_D \frac◆LB◆y◆RB◆◆LB◆x◆RB◆\, dA$ where $D$ is bounded by $y = x$, $y = 2x$And $x = 1$.

<details>
<summary>Solution</summary>

The region $D = \\{(x,y) : 0 \leq x \leq 1,\, x \leq y \leq 2x\\}$.

$$\iint_D \frac◆LB◆y◆RB◆◆LB◆x◆RB◆\, dA = \int_0^1 \int_x^◆LB◆2x◆RB◆ \frac◆LB◆y◆RB◆◆LB◆x◆RB◆\, dy\, dx = \int_0^1 \frac◆LB◆1◆RB◆◆LB◆x◆RB◆\left[\frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆\right]_x^◆LB◆2x◆RB◆\, dx$$

$$= \int_0^1 \frac◆LB◆1◆RB◆◆LB◆x◆RB◆\left[\frac◆LB◆4x^2◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆\right]\, dx = \int_0^1 \frac◆LB◆1◆RB◆◆LB◆x◆RB◆ \cdot \frac◆LB◆3x^2◆RB◆◆LB◆2◆RB◆\, dx = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆\int_0^1 x\, dx = \frac◆LB◆3◆RB◆◆LB◆4◆RB◆$$

$\blacksquare$

</details>

**Problem.** Swap the order of integration and evaluate:
$\int_0^1 \int_◆LB◆x^2◆RB◆^1 x e^◆LB◆y^2◆RB◆\, dy\, dx$.

<details>
<summary>Solution</summary>

The region is $0 \leq x \leq 1$, $x^2 \leq y \leq 1$Which is the same as $0 \leq y \leq 1$
$0 \leq x \leq \sqrt◆LB◆y◆RB◆$.

$$\int_0^1 \int_◆LB◆x^2◆RB◆^1 x e^◆LB◆y^2◆RB◆\, dy\, dx = \int_0^1 \int_0^◆LB◆\sqrt◆LB◆y◆RB◆◆RB◆ x e^◆LB◆y^2◆RB◆\, dx\, dy = \int_0^1 e^◆LB◆y^2◆RB◆\left[\frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆\right]_0^◆LB◆\sqrt◆LB◆y◆RB◆◆RB◆\, dy$$

$$= \int_0^1 \frac◆LB◆y◆RB◆◆LB◆2◆RB◆ e^◆LB◆y^2◆RB◆\, dy$$

Let $u = y^2$, $du = 2y\, dy$:

$$= \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\int_0^1 e^u\, du = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆(e - 1)$$

$\blacksquare$

_Remark._ This integral cannot be evaluated in the original order because $e^◆LB◆y^2◆RB◆$ has no
elementary Antiderivative with respect to $y$. Swapping the order was essential.

</details>

### 2.7 Common Pitfalls

:::caution Common Pitfalls

- **Order of integration limits.** When setting up
  $\int_a^b \int_◆LB◆g_1(x)◆RB◆^◆LB◆g_2(x)◆RB◆ f\, dy\, dx$Verify that $g_1(x) \leq g_2(x)$ for all
  $x \in [a, b]$. If the region is described as "between two curves," determine which curve is above
  the other.
- **Forgetting the Jacobian.** In a change of variables, the Jacobian determinant $\lvert J \rvert$
  must be included. For polar coordinates, this factor is $r$; omitting it is one of the most common
  errors.
- **Spherical coordinate conventions.** Different texts use different conventions for $\phi$ and
  $\theta$. Here, $\phi \in [0, \pi]$ is the polar angle (from the positive $z$-axis) and
  $\theta \in [0, 2\pi]$ is the azimuthal angle.
- **Region description.** When swapping integration order, carefully redraw the region and re-derive
  the bounds. The new bounds may require splitting the integral into multiple pieces. :::

## 3. Vector Calculus

### 3.1 Vector Fields

A **vector field** on $\mathbb◆LB◆R◆RB◆^n$ is a function
$\mathbf◆LB◆F◆RB◆ : D \subseteq \mathbb◆LB◆R◆RB◆^n \to \mathbb◆LB◆R◆RB◆^n$.

A vector field $\mathbf◆LB◆F◆RB◆ = (P, Q, R)$ on $\mathbb◆LB◆R◆RB◆^3$ is **conservative** if there exists a
scalar Potential $\phi$ such that $\mathbf◆LB◆F◆RB◆ = \nabla \phi$.

**Theorem 3.1.** $\mathbf◆LB◆F◆RB◆$ is conservative (on a connected domain) if and only if
$\nabla \times \mathbf◆LB◆F◆RB◆ = \mathbf◆LB◆0◆RB◆$.

_Proof._ ($\Rightarrow$) If $\mathbf◆LB◆F◆RB◆ = \nabla \phi$ with $\phi \in C^2$Then by Clairaut's theorem
$f_◆LB◆xy◆RB◆ = f_◆LB◆yx◆RB◆$Etc., which directly gives $\nabla \times (\nabla \phi) = \mathbf◆LB◆0◆RB◆$.

($\Leftarrow$) If $\nabla \times \mathbf◆LB◆F◆RB◆ = \mathbf◆LB◆0◆RB◆$ on a connected domain $D$Then for any
Closed curve $C$ in $D$Stokes' theorem gives
$\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \iint_S (\nabla \times \mathbf◆LB◆F◆RB◆) \cdot d\mathbf◆LB◆S◆RB◆ = 0$.
This means line integrals are path-independent, so we can define
$\phi(\mathbf◆LB◆x◆RB◆) = \int_◆LB◆\mathbf◆LB◆x◆RB◆_0◆RB◆^◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆$ (independent of
path), And one verifies that $\nabla \phi = \mathbf◆LB◆F◆RB◆$. $\blacksquare$

### 3.2 Line Integrals

**Definition.** The **line integral** of a vector field $\mathbf◆LB◆F◆RB◆$ along a curve $C$ parameterised
by $\mathbf◆LB◆r◆RB◆(t)$ for $a \leq t \leq b$ is

$$\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \int_a^b \mathbf◆LB◆F◆RB◆(\mathbf◆LB◆r◆RB◆(t)) \cdot \mathbf◆LB◆r◆RB◆'(t)\, dt$$

**Theorem 3.2 (Fundamental Theorem for Line Integrals).** If $\mathbf◆LB◆F◆RB◆ = \nabla \phi$ and $C$ is a
Piecewise smooth curve from $A$ to $B$Then

$$\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \phi(B) - \phi(A)$$

_Proof._ Parameterise $C$ by $\mathbf◆LB◆r◆RB◆(t)$ for $t \in [a,b]$ with $\mathbf◆LB◆r◆RB◆(a) = A$
$\mathbf◆LB◆r◆RB◆(b) = B$.

$$\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \int_a^b \nabla \phi(\mathbf◆LB◆r◆RB◆(t)) \cdot \mathbf◆LB◆r◆RB◆'(t)\, dt = \int_a^b \frac◆LB◆d◆RB◆◆LB◆dt◆RB◆\left[\phi(\mathbf◆LB◆r◆RB◆(t))\right]\, dt = \phi(\mathbf◆LB◆r◆RB◆(b)) - \phi(\mathbf◆LB◆r◆RB◆(a)) = \phi(B) - \phi(A)$$

By the chain rule. $\blacksquare$

**Corollary 3.3.** The line integral of a conservative field around any closed curve is zero.

**Problem.** Evaluate $\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆$ where
$\mathbf◆LB◆F◆RB◆ = (y,\, x + e^y,\, z + 1)$ and $C$ is the Curve $\mathbf◆LB◆r◆RB◆(t) = (t,\, t^2,\, t^3)$ for
$0 \leq t \leq 1$.

<details>
<summary>Solution</summary>

First check if $\mathbf◆LB◆F◆RB◆$ is conservative. Compute the curl:

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_x = \frac◆LB◆\partial (z+1)◆RB◆◆LB◆\partial y◆RB◆ - \frac◆LB◆\partial (x + e^y)◆RB◆◆LB◆\partial z◆RB◆ = 0 - 0 = 0$$

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_y = \frac◆LB◆\partial y◆RB◆◆LB◆\partial z◆RB◆ - \frac◆LB◆\partial (z+1)◆RB◆◆LB◆\partial x◆RB◆ = 0 - 0 = 0$$

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_z = \frac◆LB◆\partial (x + e^y)◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial y◆RB◆◆LB◆\partial y◆RB◆ = 1 - 1 = 0$$

Since $\nabla \times \mathbf◆LB◆F◆RB◆ = \mathbf◆LB◆0◆RB◆$, $\mathbf◆LB◆F◆RB◆$ is conservative. Find $\phi$:

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial x◆RB◆ = y \implies \phi = xy + g(y,z)$$

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial y◆RB◆ = x + g_y = x + e^y \implies g_y = e^y \implies g = e^y + h(z)$$

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial z◆RB◆ = h'(z) = z + 1 \implies h(z) = \frac◆LB◆z^2◆RB◆◆LB◆2◆RB◆ + z + C$$

$$\phi(x,y,z) = xy + e^y + \frac◆LB◆z^2◆RB◆◆LB◆2◆RB◆ + z$$

Now apply the fundamental theorem:

$$\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \phi(1, 1, 1) - \phi(0, 0, 0) = \left(1 + e + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + 1\right) - (1 + 1) = e + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$$

$\blacksquare$

</details>

### 3.3 Green's Theorem

**Theorem 3.4 (Green's Theorem).** Let $C$ be a positively oriented, piecewise smooth, simple closed
Curve bounding a region $D$. If $P$ and $Q$ have continuous partial derivatives on an open set
Containing $D$Then

$$\oint_C P\, dx + Q\, dy = \iint_D \left(\frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆\right) dA$$

_Proof (for a Type I region)._ Assume $D$ is a Type I region:
$D = \\{(x,y) : a \leq x \leq b,\, g_1(x) \leq y \leq g_2(x)\\}$. The boundary $C$ consists of Four
pieces: bottom $C_1$Right $C_2$Top $C_3$And left $C_4$.

We first prove $\oint_C P\, dx = -\iint_D \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆\, dA$.

On $C_1$: $y = g_1(x)$, $x$ goes from $a$ to $b$So $\int_◆LB◆C_1◆RB◆ P\, dx = \int_a^b P(x, g_1(x))\, dx$.

On $C_3$: $y = g_2(x)$, $x$ goes from $b$ to $a$So
$\int_◆LB◆C_3◆RB◆ P\, dx = \int_b^a P(x, g_2(x))\, dx = -\int_a^b P(x, g_2(x))\, dx$.

On $C_2$ and $C_4$: $x$ is constant, so $dx = 0$Hence $\int_◆LB◆C_2◆RB◆ P\, dx = \int_◆LB◆C_4◆RB◆ P\, dx = 0$.

Therefore:

$$\oint_C P\, dx = \int_a^b P(x, g_1(x))\, dx - \int_a^b P(x, g_2(x))\, dx$$

Meanwhile:

$$-\iint_D \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆\, dA = -\int_a^b \int_◆LB◆g_1(x)◆RB◆^◆LB◆g_2(x)◆RB◆ \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆\, dy\, dx = -\int_a^b \left[P(x, g_2(x)) - P(x, g_1(x))\right]\, dx$$

$$= \int_a^b P(x, g_1(x))\, dx - \int_a^b P(x, g_2(x))\, dx = \oint_C P\, dx$$

An identical argument (using Type II regions) proves
$\oint_C Q\, dy = \iint_D \frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆\, dA$. Adding the two equalities gives the
result. For general regions, decompose $D$ into finitely many Type I and Type II regions and note
that the line integrals along shared boundaries cancel. $\blacksquare$

**Worked Example.** Evaluate $\oint_C (x^2 - y)\, dx + (y^2 + x)\, dy$ where $C$ is the unit circle
Traversed counterclockwise.

_Solution._ By Green's theorem with $P = x^2 - y$ and $Q = y^2 + x$:

$$\frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆ = 1, \quad \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆ = -1$$

$$\oint_C P\, dx + Q\, dy = \iint_D (1 - (-1))\, dA = 2 \iint_D dA = 2 \cdot \pi \cdot 1^2 = 2\pi$$

$\blacksquare$

### 3.4 Curl and Divergence

**Definition.** Let $\mathbf◆LB◆F◆RB◆ = (P, Q, R)$ be a $C^1$ vector field on $\mathbb◆LB◆R◆RB◆^3$.

The **curl** of $\mathbf◆LB◆F◆RB◆$ is

$$\nabla \times \mathbf◆LB◆F◆RB◆ = \left(\frac◆LB◆\partial R◆RB◆◆LB◆\partial y◆RB◆ - \frac◆LB◆\partial Q◆RB◆◆LB◆\partial z◆RB◆,\, \frac◆LB◆\partial P◆RB◆◆LB◆\partial z◆RB◆ - \frac◆LB◆\partial R◆RB◆◆LB◆\partial x◆RB◆,\, \frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆\right)$$

The **divergence** of $\mathbf◆LB◆F◆RB◆$ is

$$\nabla \cdot \mathbf◆LB◆F◆RB◆ = \frac◆LB◆\partial P◆RB◆◆LB◆\partial x◆RB◆ + \frac◆LB◆\partial Q◆RB◆◆LB◆\partial y◆RB◆ + \frac◆LB◆\partial R◆RB◆◆LB◆\partial z◆RB◆$$

_Physical interpretation._ If $\mathbf◆LB◆F◆RB◆$ represents the velocity field of a fluid:

- **Curl** $\nabla \times \mathbf◆LB◆F◆RB◆$ measures the local rotational tendency (vorticity) of the
  fluid. At a point $\mathbf◆LB◆p◆RB◆$The component $(\nabla \times \mathbf◆LB◆F◆RB◆) \cdot \mathbf◆LB◆n◆RB◆$ gives
  twice the angular velocity of a small paddle wheel placed at $\mathbf◆LB◆p◆RB◆$ with axis along
  $\mathbf◆LB◆n◆RB◆$.

- **Divergence** $\nabla \cdot \mathbf◆LB◆F◆RB◆$ measures the net rate of outward flux per unit volume at
  a point. If $\nabla \cdot \mathbf◆LB◆F◆RB◆ \gt 0$ at $\mathbf◆LB◆p◆RB◆$There is a net source at $\mathbf◆LB◆p◆RB◆$;
  if $\nabla \cdot \mathbf◆LB◆F◆RB◆ \lt 0$There is a net sink.

**Proposition 3.5.** For any $C^2$ vector field $\mathbf◆LB◆F◆RB◆$:

$$\nabla \cdot (\nabla \times \mathbf◆LB◆F◆RB◆) = 0 \quad \mathrm◆LB◆(div\ of\ curl\ is\ zero)$$

$$\nabla \times (\nabla \phi) = \mathbf◆LB◆0◆RB◆ \quad \mathrm◆LB◆(curl\ of\ gradient\ is\ zero)$$

_Proof._ Both follow from Clairaut's theorem on equality of mixed partials. For the first:

$$\nabla \cdot (\nabla \times \mathbf◆LB◆F◆RB◆) = \frac◆LB◆\partial◆RB◆◆LB◆\partial x◆RB◆\left(\frac◆LB◆\partial R◆RB◆◆LB◆\partial y◆RB◆ - \frac◆LB◆\partial Q◆RB◆◆LB◆\partial z◆RB◆\right) + \frac◆LB◆\partial◆RB◆◆LB◆\partial y◆RB◆\left(\frac◆LB◆\partial P◆RB◆◆LB◆\partial z◆RB◆ - \frac◆LB◆\partial R◆RB◆◆LB◆\partial x◆RB◆\right) + \frac◆LB◆\partial◆RB◆◆LB◆\partial z◆RB◆\left(\frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆\right)$$

Each pair cancels by Clairaut:
$\frac◆LB◆\partial^2 R◆RB◆◆LB◆\partial x\,\partial y◆RB◆ = \frac◆LB◆\partial^2 R◆RB◆◆LB◆\partial y\,\partial x◆RB◆$Etc.
$\blacksquare$

### 3.5 Stokes' Theorem

**Theorem 3.6 (Stokes' Theorem).** Let $S$ be an oriented surface with piecewise smooth boundary
curve $C$ (positively oriented). If $\mathbf◆LB◆F◆RB◆$ has continuous partial derivatives on an open set
containing $S$Then

$$\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \iint_S (\nabla \times \mathbf◆LB◆F◆RB◆) \cdot d\mathbf◆LB◆S◆RB◆$$

Where $d\mathbf◆LB◆S◆RB◆ = \mathbf◆LB◆n◆RB◆\, dS$ is the vector surface element with unit normal $\mathbf◆LB◆n◆RB◆$.

_Proof (sketch)._ Parametrise $S$ by $\mathbf◆LB◆r◆RB◆(u,v)$ over a region $D$ in the $uv$-plane. The
boundary $C$ of $S$ corresponds to the boundary $\partial D$ of $D$. The left-hand side becomes:

$$\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \oint_◆LB◆\partial D◆RB◆ \mathbf◆LB◆F◆RB◆(\mathbf◆LB◆r◆RB◆(u,v)) \cdot \left(\frac◆LB◆\partial \mathbf◆LB◆r◆RB◆◆RB◆◆LB◆\partial u◆RB◆\, du + \frac◆LB◆\partial \mathbf◆LB◆r◆RB◆◆RB◆◆LB◆\partial v◆RB◆\, dv\right)$$

Define $\tilde◆LB◆P◆RB◆(u,v) = \mathbf◆LB◆F◆RB◆(\mathbf◆LB◆r◆RB◆(u,v)) \cdot \mathbf◆LB◆r◆RB◆_u$ and
$\tilde◆LB◆Q◆RB◆(u,v) = \mathbf◆LB◆F◆RB◆(\mathbf◆LB◆r◆RB◆(u,v)) \cdot \mathbf◆LB◆r◆RB◆_v$. Applying Green's theorem in the
$uv$-plane:

$$\oint_◆LB◆\partial D◆RB◆ \tilde◆LB◆P◆RB◆\, du + \tilde◆LB◆Q◆RB◆\, dv = \iint_D \left(\frac◆LB◆\partial \tilde◆LB◆Q◆RB◆◆RB◆◆LB◆\partial u◆RB◆ - \frac◆LB◆\partial \tilde◆LB◆P◆RB◆◆RB◆◆LB◆\partial v◆RB◆\right) du\, dv$$

Expanding the partial derivatives and using the identity
$\mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v = \mathbf◆LB◆n◆RB◆\, \lVert \mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v \rVert$One
Verifies that the integrand equals
$(\nabla \times \mathbf◆LB◆F◆RB◆) \cdot \mathbf◆LB◆n◆RB◆\, \lVert \mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v \rVert$ Which
gives $\iint_S (\nabla \times \mathbf◆LB◆F◆RB◆) \cdot d\mathbf◆LB◆S◆RB◆$. $\blacksquare$

_Remark._ Green's theorem is the special case of Stokes' theorem where $S$ is a planar region in
$\mathbb◆LB◆R◆RB◆^2$.

**Problem.** Use Stokes' theorem to evaluate $\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆$ where
$\mathbf◆LB◆F◆RB◆ = (y^2,\, xz,\, x^2)$ and $C$ is the triangle with vertices $(1,0,0)$, $(0,1,0)$ $(0,0,1)$
traversed counterclockwise when viewed from above.

<details>
<summary>Solution</summary>

The triangle lies in the plane $x + y + z = 1$. Compute $\nabla \times \mathbf◆LB◆F◆RB◆$:

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_x = \frac◆LB◆\partial (x^2)◆RB◆◆LB◆\partial y◆RB◆ - \frac◆LB◆\partial (xz)◆RB◆◆LB◆\partial z◆RB◆ = 0 - x = -x$$

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_y = \frac◆LB◆\partial (y^2)◆RB◆◆LB◆\partial z◆RB◆ - \frac◆LB◆\partial (x^2)◆RB◆◆LB◆\partial x◆RB◆ = 0 - 2x = -2x$$

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_z = \frac◆LB◆\partial (xz)◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial (y^2)◆RB◆◆LB◆\partial y◆RB◆ = z - 2y$$

So $\nabla \times \mathbf◆LB◆F◆RB◆ = (-x,\, -2x,\, z - 2y)$.

Parametrise the triangle in the $xy$-plane: $0 \leq x \leq 1$, $0 \leq y \leq 1 - x$. On the plane
$z = 1 - x - y$The surface element $dS = \sqrt◆LB◆3◆RB◆\, dx\, dy$.

$$\iint_S (\nabla \times \mathbf◆LB◆F◆RB◆) \cdot d\mathbf◆LB◆S◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆ \iint_S (-x - 2x + z - 2y)\, dS$$

On the plane: $-3x - 2y + z = -3x - 2y + 1 - x - y = -4x - 3y + 1$.

$$= \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆ \int_0^1 \int_0^◆LB◆1-x◆RB◆ (-4x - 3y + 1)\, \sqrt◆LB◆3◆RB◆\, dy\, dx = \int_0^1 \int_0^◆LB◆1-x◆RB◆ (-4x - 3y + 1)\, dy\, dx$$

$$= \int_0^1 \left[(-4x + 1)y - \frac◆LB◆3y^2◆RB◆◆LB◆2◆RB◆\right]_0^◆LB◆1-x◆RB◆\, dx = \int_0^1 (-4x + 1)(1 - x) - \frac◆LB◆3(1-x)^2◆RB◆◆LB◆2◆RB◆\, dx$$

$$= \int_0^1 \left[4x^2 - 5x + 1 - \frac◆LB◆3◆RB◆◆LB◆2◆RB◆ + 3x - \frac◆LB◆3x^2◆RB◆◆LB◆2◆RB◆\right]\, dx = \int_0^1 \left[\frac◆LB◆5x^2◆RB◆◆LB◆2◆RB◆ - 2x - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right]\, dx$$

$$= \left[\frac◆LB◆5x^3◆RB◆◆LB◆6◆RB◆ - x^2 - \frac◆LB◆x◆RB◆◆LB◆2◆RB◆\right]_0^1 = \frac◆LB◆5◆RB◆◆LB◆6◆RB◆ - 1 - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ = -\frac◆LB◆2◆RB◆◆LB◆3◆RB◆$$

$\blacksquare$

</details>

### 3.6 Divergence Theorem

**Theorem 3.7 (Divergence Theorem / Gauss's Theorem).** Let $E$ be a solid region bounded by a
closed Surface $S$ with outward normal $\mathbf◆LB◆n◆RB◆$. If $\mathbf◆LB◆F◆RB◆$ has continuous partial
derivatives on an Open set containing $E$Then

$$\iint_S \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = \iiint_E \nabla \cdot \mathbf◆LB◆F◆RB◆\, dV$$

Where
$\nabla \cdot \mathbf◆LB◆F◆RB◆ = \frac◆LB◆\partial P◆RB◆◆LB◆\partial x◆RB◆ + \frac◆LB◆\partial Q◆RB◆◆LB◆\partial y◆RB◆ + \frac◆LB◆\partial R◆RB◆◆LB◆\partial z◆RB◆$
Is the divergence of $\mathbf◆LB◆F◆RB◆$.

_Proof (sketch for a Type I region)._ Assume $E$ is a Type I region:
$E = \\{(x,y,z) : (x,y) \in D,\, g_1(x,y) \leq z \leq g_2(x,y)\\}$. The boundary consists of Bottom
surface $S_1$ (normal pointing downward), top surface $S_2$ (normal pointing upward), And the
lateral surface $S_3$ (where the normal is horizontal).

We prove the result for the $R$-component, i.e.,
$\iint_S R\, \mathbf◆LB◆k◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = \iiint_E \frac◆LB◆\partial R◆RB◆◆LB◆\partial z◆RB◆\, dV$.

The right-hand side:

$$\iiint_E \frac◆LB◆\partial R◆RB◆◆LB◆\partial z◆RB◆\, dV = \iint_D \int_◆LB◆g_1(x,y)◆RB◆^◆LB◆g_2(x,y)◆RB◆ \frac◆LB◆\partial R◆RB◆◆LB◆\partial z◆RB◆\, dz\, dA = \iint_D \left[R(x,y,g_2) - R(x,y,g_1)\right]\, dA$$

On $S_2$ (top): $d\mathbf◆LB◆S◆RB◆ = (-g_◆LB◆2x◆RB◆, -g_◆LB◆2y◆RB◆, 1)\, dA$ (upward), so
$R\, \mathbf◆LB◆k◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = R(x,y,g_2)\, dA$.

On $S_1$ (bottom): $d\mathbf◆LB◆S◆RB◆ = (g_◆LB◆1x◆RB◆, g_◆LB◆1y◆RB◆, -1)\, dA$ (downward), so
$R\, \mathbf◆LB◆k◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = -R(x,y,g_1)\, dA$.

On $S_3$: $\mathbf◆LB◆k◆RB◆ \cdot \mathbf◆LB◆n◆RB◆ = 0$ (the normal is horizontal), so
$R\, \mathbf◆LB◆k◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = 0$.

Therefore
$\iint_S R\, \mathbf◆LB◆k◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = \iint_D [R(x,y,g_2) - R(x,y,g_1)]\, dA$Matching the
Volume integral. The $P$ and $Q$ components follow by an identical argument for Type II and Type III
Regions. For general regions, decompose into finitely many regions of each type. $\blacksquare$

**Worked Example.** Compute the flux of $\mathbf◆LB◆F◆RB◆ = (x^3, y^3, z^3)$ through the unit sphere $S$.

_Solution._ By the divergence theorem:

$$\nabla \cdot \mathbf◆LB◆F◆RB◆ = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2) = 3\rho^2$$

Using spherical coordinates:

$$\iiint_E 3\rho^2 \cdot \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta = 3 \int_0^◆LB◆2\pi◆RB◆ \int_0^◆LB◆\pi◆RB◆ \int_0^1 \rho^4 \sin\phi\, d\rho\, d\phi\, d\theta$$

$$= 3 \cdot 2\pi \cdot 2 \cdot \frac◆LB◆1◆RB◆◆LB◆5◆RB◆ = \frac◆LB◆12\pi◆RB◆◆LB◆5◆RB◆$$

$\blacksquare$

**Problem.** Compute the flux of $\mathbf◆LB◆F◆RB◆ = (x^2,\, y^2,\, z^2)$ outward through the surface of
the Cylinder $x^2 + y^2 \leq 1$, $0 \leq z \leq 2$.

<details>
<summary>Solution</summary>

By the divergence theorem:

$$\nabla \cdot \mathbf◆LB◆F◆RB◆ = 2x + 2y + 2z$$

Use cylindrical coordinates. The region $E'$ is $0 \leq r \leq 1$, $0 \leq \theta \leq 2\pi$
$0 \leq z \leq 2$.

$$\iiint_E (2x + 2y + 2z)\, dV = \iiint_E 2z\, dV$$

Since $\iint_E x\, dV = \iint_E y\, dV = 0$ by symmetry (odd functions over a symmetric domain).

$$= 2 \int_0^◆LB◆2\pi◆RB◆ \int_0^1 \int_0^2 z \cdot r\, dz\, dr\, d\theta = 2 \int_0^◆LB◆2\pi◆RB◆ \int_0^1 r\left[\frac◆LB◆z^2◆RB◆◆LB◆2◆RB◆\right]_0^2\, dr\, d\theta$$

$$= 2 \int_0^◆LB◆2\pi◆RB◆ \int_0^1 2r\, dr\, d\theta = 2 \int_0^◆LB◆2\pi◆RB◆ 1\, d\theta = 2 \cdot 2\pi = 4\pi$$

$\blacksquare$

</details>

### 3.7 Conservative Fields and Potential Functions

**Definition.** A vector field $\mathbf◆LB◆F◆RB◆$ on a domain $D \subseteq \mathbb◆LB◆R◆RB◆^n$ is
**conservative** if There exists a scalar function $\phi : D \to \mathbb◆LB◆R◆RB◆$ (called a **potential
function**) such that $\mathbf◆LB◆F◆RB◆ = \nabla \phi$.

**Proposition 3.8 (Equivalent conditions for conservative fields).** Let $\mathbf◆LB◆F◆RB◆ = (P, Q)$ be a
$C^1$ vector field on a connected domain $D \subseteq \mathbb◆LB◆R◆RB◆^2$. The following are equivalent:

1. $\mathbf◆LB◆F◆RB◆$ is conservative: $\mathbf◆LB◆F◆RB◆ = \nabla \phi$ for some $\phi$.
2. $\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = 0$ for every closed curve $C$ in $D$.
3. $\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆$ is path-independent in $D$.
4. $\frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆ = \frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆$ everywhere in $D$.

**Procedure for finding a potential function.** Given $\mathbf◆LB◆F◆RB◆ = (P, Q, R)$ with
$\nabla \times \mathbf◆LB◆F◆RB◆ = \mathbf◆LB◆0◆RB◆$:

1. Integrate $P$ with respect to $x$: $\phi = \int P\, dx + g(y, z)$.
2. Differentiate with respect to $y$ and set equal to $Q$ to determine $g_y$.
3. Integrate $g_y$ with respect to $y$: $g = \int g_y\, dy + h(z)$.
4. Differentiate with respect to $z$ and set equal to $R$ to determine $h'(z)$.
5. Integrate to find $h(z)$ and assemble $\phi$.

**Problem.** Determine whether $\mathbf◆LB◆F◆RB◆ = (2xy + z^2,\, x^2 + 2yz,\, 2xz + y^2)$ is conservative,
And if so, find a potential function.

<details>
<summary>Solution</summary>

Check the curl:

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_x = \frac◆LB◆\partial◆RB◆◆LB◆\partial y◆RB◆(2xz + y^2) - \frac◆LB◆\partial◆RB◆◆LB◆\partial z◆RB◆(x^2 + 2yz) = 2y - 2y = 0$$

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_y = \frac◆LB◆\partial◆RB◆◆LB◆\partial z◆RB◆(2xy + z^2) - \frac◆LB◆\partial◆RB◆◆LB◆\partial x◆RB◆(2xz + y^2) = 2z - 2z = 0$$

$$(\nabla \times \mathbf◆LB◆F◆RB◆)_z = \frac◆LB◆\partial◆RB◆◆LB◆\partial x◆RB◆(x^2 + 2yz) - \frac◆LB◆\partial◆RB◆◆LB◆\partial y◆RB◆(2xy + z^2) = 2x - 2x = 0$$

Since $\nabla \times \mathbf◆LB◆F◆RB◆ = \mathbf◆LB◆0◆RB◆$, $\mathbf◆LB◆F◆RB◆$ is conservative. Find $\phi$:

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial x◆RB◆ = 2xy + z^2 \implies \phi = x^2 y + xz^2 + g(y,z)$$

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial y◆RB◆ = x^2 + g_y(y,z) = x^2 + 2yz \implies g_y(y,z) = 2yz \implies g(y,z) = y^2 z + h(z)$$

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial z◆RB◆ = 2xz + y^2 + h'(z)$$

This must equal $2xz + y^2$So $h'(z) = 0$Giving $h(z) = C$.

Therefore $\phi(x,y,z) = x^2 y + xz^2 + y^2 z + C$. $\blacksquare$

</details>

### 3.8 Common Pitfalls

:::caution Common Pitfalls

- **Singularities.** When applying Green's, Stokes', or the Divergence theorem, verify that the
  field has continuous partial derivatives on the region (including interior). If there are
  singularities inside the region, the theorems do not apply directly; the singularity must be
  handled separately.
- ** connected domains.** The condition $\nabla \times \mathbf◆LB◆F◆RB◆ = \mathbf◆LB◆0◆RB◆$ guarantees that
  $\mathbf◆LB◆F◆RB◆$ is conservative only on a connected domain. For example,
  $\mathbf◆LB◆F◆RB◆ = \frac◆LB◆(-y, x)◆RB◆◆LB◆x^2 + y^2◆RB◆$ has zero curl on $\mathbb◆LB◆R◆RB◆^2 \setminus \\{(0,0)\\}$ but
  is not conservative there (the domain is not connected).
- **Orientation.** Green's and Stokes' theorems require positive orientation (counterclockwise for
  planar curves, right-hand rule for surfaces). The divergence theorem requires the outward normal.
  Reversing orientation changes the sign of the result. :::

### 3.9 Relationships Among the Fundamental Theorems

The three major integral theorems of vector calculus are deeply connected:

_Remark._ Green's theorem is the planar special case of Stokes' theorem. Stokes' theorem relates the
Circulation around a curve to the curl through the surface it bounds. The divergence theorem relates
The flux through a closed surface to the divergence inside the volume it encloses. Together, these
Form the higher-dimensional analogues of the Fundamental Theorem of Calculus:

$$\int_a^b f'(x)\, dx = f(b) - f(a) \quad \mathrm◆LB◆(FTC)$$

$$\int_C \nabla \phi \cdot d\mathbf◆LB◆r◆RB◆ = \phi(B) - \phi(A) \quad \mathrm◆LB◆(FTLI)$$

$$\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \iint_S (\nabla \times \mathbf◆LB◆F◆RB◆) \cdot d\mathbf◆LB◆S◆RB◆ \quad \mathrm◆LB◆(Stokes)$$

$$\iint_S \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = \iiint_E (\nabla \cdot \mathbf◆LB◆F◆RB◆)\, dV \quad \mathrm◆LB◆(Divergence)$$

In each case, the integral of a "derivative" over a region equals the integral of the original
function Over the boundary of that region. This is the **generalised Stokes' theorem**:

$$\int_◆LB◆\partial \Omega◆RB◆ \omega = \int_◆LB◆\Omega◆RB◆ d\omega$$

Where $\Omega$ is a $k$-dimensional manifold with boundary $\partial \Omega$, $\omega$ is a
$(k-1)$-form, And $d\omega$ is its exterior derivative.

## 4. Optimization

### 4.1 Local Extrema

**Theorem 4.1 (First Derivative Test).** If $f$ has a local extremum at an interior point
$\mathbf◆LB◆a◆RB◆$ And $\nabla f(\mathbf◆LB◆a◆RB◆)$ exists, then $\nabla f(\mathbf◆LB◆a◆RB◆) = \mathbf◆LB◆0◆RB◆$.

Points where $\nabla f = \mathbf◆LB◆0◆RB◆$ are called **critical points** (or stationary points).

_Remark._ Not all critical points are extrema. A critical point can be a local minimum, local
maximum, Or saddle point. The second derivative test (Section 4.2) distinguishes these cases.

### 4.2 Second Derivative Test

**Theorem 4.2 (Second Derivative Test).** Let $f$ have continuous second partial derivatives near a
Critical point $(a,b)$ with $f_x(a,b) = f_y(a,b) = 0$. Let

$$D = f_◆LB◆xx◆RB◆(a,b) f_◆LB◆yy◆RB◆(a,b) - [f_◆LB◆xy◆RB◆(a,b)]^2$$

Be the **Hessian determinant**. Then:

- If $D \gt 0$ and $f_◆LB◆xx◆RB◆(a,b) \gt 0$: local minimum.
- If $D \gt 0$ and $f_◆LB◆xx◆RB◆(a,b) \lt 0$: local maximum.
- If $D \lt 0$: saddle point.
- If $D = 0$: the test is inconclusive.

_Proof._ By Taylor's theorem to second order, for small $h, k$:

$$f(a+h, b+k) - f(a,b) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[f_◆LB◆xx◆RB◆ h^2 + 2f_◆LB◆xy◆RB◆ hk + f_◆LB◆yy◆RB◆ k^2\right] + R_2$$

Where the remainder $R_2 = o(h^2 + k^2)$ and all partials are evaluated at $(a,b)$. The sign of the
Right-hand side is determined by the quadratic form

$$Q(h,k) = f_◆LB◆xx◆RB◆ h^2 + 2f_◆LB◆xy◆RB◆ hk + f_◆LB◆yy◆RB◆ k^2 = \begin◆LB◆pmatrix◆RB◆ h & k \end◆LB◆pmatrix◆RB◆ H \begin◆LB◆pmatrix◆RB◆ h \\ k \end◆LB◆pmatrix◆RB◆$$

Where $H = \begin◆LB◆pmatrix◆RB◆ f_◆LB◆xx◆RB◆ & f_◆LB◆xy◆RB◆ \\ f_◆LB◆xy◆RB◆ & f_◆LB◆yy◆RB◆ \end◆LB◆pmatrix◆RB◆$ is the Hessian matrix.

By Sylvester's criterion for $2 \times 2$ symmetric matrices:

- If $\det(H) = D \gt 0$ and $f_◆LB◆xx◆RB◆ \gt 0$Then $H$ is positive definite, so $Q \gt 0$ for all
  $(h,k) \neq (0,0)$Giving a local minimum.
- If $\det(H) = D \gt 0$ and $f_◆LB◆xx◆RB◆ \lt 0$Then $H$ is negative definite, so $Q \lt 0$ for all
  $(h,k) \neq (0,0)$Giving a local maximum.
- If $\det(H) = D \lt 0$Then $H$ is indefinite, so $Q$ takes both positive and negative values,
  giving a saddle point.

When $D = 0$The quadratic form is degenerate and the sign is determined by higher-order terms.
$\blacksquare$

### 4.3 Lagrange Multipliers

**Theorem 4.3 (Method of Lagrange Multipliers).** To find the extrema of $f(x,y,z)$ subject to the
Constraint $g(x,y,z) = 0$Solve the system:

$$\nabla f = \lambda \nabla g, \quad g = 0$$

More generally, for $k$ constraints $g_1 = 0, \ldots, g_k = 0$:

$$\nabla f = \lambda_1 \nabla g_1 + \cdots + \lambda_k \nabla g_k$$

_Proof (single constraint, geometric justification)._ Let $M = \\{(x,y,z) : g(x,y,z) = 0\\}$ be the
constraint surface. If $f$ has a local extremum on $M$ at $\mathbf◆LB◆p◆RB◆$Then the directional
derivative $D_◆LB◆\mathbf◆LB◆v◆RB◆◆RB◆ f(\mathbf◆LB◆p◆RB◆) = 0$ for every tangent Vector $\mathbf◆LB◆v◆RB◆$ to $M$ at
$\mathbf◆LB◆p◆RB◆$. Since $\nabla f(\mathbf◆LB◆p◆RB◆) \cdot \mathbf◆LB◆v◆RB◆ = 0$ for all Such $\mathbf◆LB◆v◆RB◆$The
gradient $\nabla f(\mathbf◆LB◆p◆RB◆)$ must be orthogonal to the tangent space of $M$ At $\mathbf◆LB◆p◆RB◆$. But
the tangent space of $M$ is orthogonal to $\nabla g(\mathbf◆LB◆p◆RB◆)$ (by the implicit Function theorem).
Therefore $\nabla f(\mathbf◆LB◆p◆RB◆)$ must be parallel to $\nabla g(\mathbf◆LB◆p◆RB◆)$I.e.,
$\nabla f(\mathbf◆LB◆p◆RB◆) = \lambda\, \nabla g(\mathbf◆LB◆p◆RB◆)$ for some scalar $\lambda$. $\blacksquare$

### 4.4 Worked Example

**Problem.** Find the maximum of $f(x,y) = xy$ subject to $x^2 + y^2 = 1$.

_Solution._ Set $g(x,y) = x^2 + y^2 - 1$. The Lagrange multiplier equations:

$\nabla f = \lambda \nabla g \implies (y, x) = \lambda(2x, 2y)$

This gives $y = 2\lambda x$ and $x = 2\lambda y$. Multiplying: $xy = 4\lambda^2 xy$.

Case 1: $xy \neq 0$. Then $4\lambda^2 = 1$So $\lambda = \pm 1/2$.

- $\lambda = 1/2$: $y = x$And $x^2 + x^2 = 1$So $x = \pm 1/\sqrt◆LB◆2◆RB◆$. Points:
  $(1/\sqrt◆LB◆2◆RB◆, 1/\sqrt◆LB◆2◆RB◆)$ and $(-1/\sqrt◆LB◆2◆RB◆, -1/\sqrt◆LB◆2◆RB◆)$ with $f = 1/2$.
- $\lambda = -1/2$: $y = -x$And $x^2 + x^2 = 1$So $x = \pm 1/\sqrt◆LB◆2◆RB◆$. Points:
  $(1/\sqrt◆LB◆2◆RB◆, -1/\sqrt◆LB◆2◆RB◆)$ and $(-1/\sqrt◆LB◆2◆RB◆, 1/\sqrt◆LB◆2◆RB◆)$ with $f = -1/2$.

Case 2: $xy = 0$. Then either $x = 0$ or $y = 0$. From the constraint: $(0, \pm 1)$ or $(\pm 1, 0)$
with $f = 0$.

Maximum: $f = 1/2$ at $(\pm 1/\sqrt◆LB◆2◆RB◆, \pm 1/\sqrt◆LB◆2◆RB◆)$. Minimum: $f = -1/2$ at
$(\pm 1/\sqrt◆LB◆2◆RB◆, \mp 1/\sqrt◆LB◆2◆RB◆)$. $\blacksquare$

### 4.5 Additional Worked Examples

**Problem.** Find and classify all critical points of $f(x,y) = x^4 + y^4 - 4xy$.

<details>
<summary>Solution</summary>

Compute the gradient:

$$\nabla f = (4x^3 - 4y,\, 4y^3 - 4x)$$

Set $\nabla f = (0,0)$:

$$x^3 = y, \quad y^3 = x$$

Substituting $y = x^3$ into $y^3 = x$: $(x^3)^3 = x$I.e., $x^9 = x$Giving $x(x^8 - 1) = 0$. So
$x = 0$ or $x = \pm 1$.

- $x = 0$: $y = 0$. Critical point: $(0, 0)$.
- $x = 1$: $y = 1$. Critical point: $(1, 1)$.
- $x = -1$: $y = -1$. Critical point: $(-1, -1)$.

Second derivatives: $f_◆LB◆xx◆RB◆ = 12x^2$$f_◆LB◆yy◆RB◆ = 12y^2$$f_◆LB◆xy◆RB◆ = -4$.

At $(0,0)$: $D = 0 \cdot 0 - 16 = -16 \lt 0$. **Saddle point.**

At $(1,1)$: $D = 12 \cdot 12 - 16 = 144 - 16 = 128 \gt 0$ and $f_◆LB◆xx◆RB◆ = 12 \gt 0$. **Local minimum**
with $f(1,1) = 1 + 1 - 4 = -2$.

At $(-1,-1)$: $D = 12 \cdot 12 - 16 = 128 \gt 0$ and $f_◆LB◆xx◆RB◆ = 12 \gt 0$. **Local minimum** with
$f(-1,-1) = 1 + 1 - 4 = -2$. $\blacksquare$

</details>

**Problem.** Find and classify all critical points of $f(x,y) = x^3 + y^3 - 3xy$.

<details>
<summary>Solution</summary>

Compute the gradient:

$$\nabla f = (3x^2 - 3y,\, 3y^2 - 3x)$$

Set $\nabla f = (0,0)$:

$$3x^2 - 3y = 0 \implies y = x^2, \quad 3y^2 - 3x = 0 \implies y^2 = x$$

Substituting: $(x^2)^2 = x$So $x^4 - x = 0$Giving $x(x^3 - 1) = 0$So $x = 0$ or $x = 1$.

- $x = 0$: $y = 0$. Critical point: $(0, 0)$.
- $x = 1$: $y = 1$. Critical point: $(1, 1)$.

Second derivatives: $f_◆LB◆xx◆RB◆ = 6x$$f_◆LB◆yy◆RB◆ = 6y$$f_◆LB◆xy◆RB◆ = -3$.

At $(0,0)$: $D = f_◆LB◆xx◆RB◆ f_◆LB◆yy◆RB◆ - f_◆LB◆xy◆RB◆^2 = 0 \cdot 0 - 9 = -9 \lt 0$. **Saddle point.**

At $(1,1)$: $D = 6 \cdot 6 - 9 = 27 \gt 0$ and $f_◆LB◆xx◆RB◆ = 6 \gt 0$. **Local minimum** with
$f(1,1) = -1$. $\blacksquare$

</details>

**Problem.** Find the point on the plane $x + 2y + 3z = 6$ closest to the origin.

<details>
<summary>Solution</summary>

Minimise $f(x,y,z) = x^2 + y^2 + z^2$ subject to $g(x,y,z) = x + 2y + 3z - 6 = 0$.

$\nabla f = \lambda \nabla g$:

$$(2x, 2y, 2z) = \lambda(1, 2, 3)$$

This gives $x = \lambda/2$$y = \lambda$$z = 3\lambda/2$. Substituting into the constraint:

$$\frac◆LB◆\lambda◆RB◆◆LB◆2◆RB◆ + 2\lambda + \frac◆LB◆9\lambda◆RB◆◆LB◆2◆RB◆ = 6 \implies \frac◆LB◆\lambda + 4\lambda + 9\lambda◆RB◆◆LB◆2◆RB◆ = 6 \implies 7\lambda = 6 \implies \lambda = \frac◆LB◆6◆RB◆◆LB◆7◆RB◆$$

Therefore $x = 3/7$$y = 6/7$$z = 9/7$. The closest point is $(3/7,\, 6/7,\, 9/7)$ with Distance
$\sqrt◆LB◆9/49 + 36/49 + 81/49◆RB◆ = \sqrt◆LB◆126/49◆RB◆ = \frac◆LB◆3\sqrt◆LB◆14◆RB◆◆RB◆◆LB◆7◆RB◆$. $\blacksquare$

</details>

### 4.6 Multiple Constraints

**Problem.** Maximise $f(x,y,z) = xyz$ subject to $x + y + z = 1$ and $x^2 + y^2 + z^2 = 1/3$.

<details>
<summary>Solution</summary>

Set $g_1 = x + y + z - 1$ and $g_2 = x^2 + y^2 + z^2 - 1/3$. The Lagrange multiplier system is:

$$\nabla f = \lambda_1 \nabla g_1 + \lambda_2 \nabla g_2$$

$$(yz, xz, xy) = \lambda_1(1, 1, 1) + \lambda_2(2x, 2y, 2z)$$

This gives three equations:

$$yz = \lambda_1 + 2\lambda_2 x, \quad xz = \lambda_1 + 2\lambda_2 y, \quad xy = \lambda_1 + 2\lambda_2 z$$

Subtracting the first two: $z(y - x) = 2\lambda_2(x - y)$Giving $(y - x)(z + 2\lambda_2) = 0$.

Similarly, $(z - y)(x + 2\lambda_2) = 0$ and $(x - z)(y + 2\lambda_2) = 0$.

If $x = y = z$: From $g_1$: $3x = 1$So $x = 1/3$. From $g_2$: $3(1/9) = 1/3$. This satisfies both
constraints.

At $(1/3, 1/3, 1/3)$: $f = 1/27$.

If $x \neq y$: Then $z + 2\lambda_2 = 0$. If also $y \neq z$: $x + 2\lambda_2 = 0$So $x = z$.

With $x = z$: from $x + y + z = 1$: $2x + y = 1$. From $2x^2 + y^2 = 1/3$: Substituting
$y = 1 - 2x$: $6x^2 - 4x + 2/3 = 0$I.e., $(3x - 1)^2 = 0$So $x = 1/3$ $y = 1/3$. This reduces to the
symmetric case.

Therefore the only critical point is $(1/3, 1/3, 1/3)$Which gives $f = 1/27$.

Since the constraint set is compact (intersection of a plane and a sphere in $\mathbb◆LB◆R◆RB◆^3$), the
Extreme value theorem guarantees both a maximum and minimum exist. The maximum of $xyz$ is $1/27$ at
$(1/3, 1/3, 1/3)$. $\blacksquare$

</details>

### 4.7 Common Pitfalls

:::caution Common Pitfalls

- **Lagrange multipliers find candidates only.** The method produces candidates for constrained
  extrema but does not guarantee they are extrema. Always evaluate $f$ at all candidates and use
  additional reasoning (e.g., compactness of the constraint set via the extreme value theorem) to
  determine which gives the max/min.
- **Boundary vs. Interior.** For unconstrained problems on a closed, bounded domain, check both
  interior critical points and boundary points separately.
- **Degenerate Hessian.** When the Hessian determinant $D = 0$The second derivative test is
  inconclusive. Use higher-order Taylor expansions or direct analysis of the function near the
  critical point.
- **Non-normalised constraint gradients.** Ensure the constraint functions are written in the form
  $g = 0$; multiplying $g$ by a constant changes $\lambda$ but not the critical points. :::

## 5. Curves and Surfaces

### 5.1 Parametric Curves

A **parametric curve** in $\mathbb◆LB◆R◆RB◆^3$ is a $C^1$ function $\mathbf◆LB◆r◆RB◆ : [a, b] \to \mathbb◆LB◆R◆RB◆^3$
Written $\mathbf◆LB◆r◆RB◆(t) = (x(t),\, y(t),\, z(t))$.

**Definition.** The **arc length** of $\mathbf◆LB◆r◆RB◆$ over $[a, b]$ is

$$L = \int_a^b \lVert \mathbf◆LB◆r◆RB◆'(t) \rVert\, dt = \int_a^b \sqrt◆LB◆\left(\frac◆LB◆dx◆RB◆◆LB◆dt◆RB◆\right)^2 + \left(\frac◆LB◆dy◆RB◆◆LB◆dt◆RB◆\right)^2 + \left(\frac◆LB◆dz◆RB◆◆LB◆dt◆RB◆\right)^2◆RB◆\, dt$$

**Proposition 5.1.** The arc length function
$s(t) = \int_a^t \lVert \mathbf◆LB◆r◆RB◆'(\tau) \rVert\, d\tau$ Satisfies
$\frac◆LB◆ds◆RB◆◆LB◆dt◆RB◆ = \lVert \mathbf◆LB◆r◆RB◆'(t) \rVert$And reparametrising by arc length gives a Unit-speed
curve: $\lVert \frac◆LB◆d\mathbf◆LB◆r◆RB◆◆RB◆◆LB◆ds◆RB◆ \rVert = 1$.

_Proof._ By the Fundamental Theorem of Calculus, $\frac◆LB◆ds◆RB◆◆LB◆dt◆RB◆ = \lVert \mathbf◆LB◆r◆RB◆'(t) \rVert$. If
we reparametrise by $s$I.e., write $\mathbf◆LB◆r◆RB◆(s) = \mathbf◆LB◆r◆RB◆(t(s))$Then by the chain rule
$\frac◆LB◆d\mathbf◆LB◆r◆RB◆◆RB◆◆LB◆ds◆RB◆ = \mathbf◆LB◆r◆RB◆'(t) \cdot \frac◆LB◆dt◆RB◆◆LB◆ds◆RB◆$So
$\lVert \frac◆LB◆d\mathbf◆LB◆r◆RB◆◆RB◆◆LB◆ds◆RB◆ \rVert = \lVert \mathbf◆LB◆r◆RB◆'(t) \rVert \cdot \left\lvert \frac◆LB◆dt◆RB◆◆LB◆ds◆RB◆ \right\rvert = 1$.
$\blacksquare$

**Problem.** Find the arc length of the curve $\mathbf◆LB◆r◆RB◆(t) = (e^t \cos t,\, e^t \sin t,\, e^t)$
for $0 \leq t \leq \ln 2$.

<details>
<summary>Solution</summary>

$\mathbf◆LB◆r◆RB◆'(t) = (e^t \cos t - e^t \sin t,\, e^t \sin t + e^t \cos t,\, e^t)$

$\lVert \mathbf◆LB◆r◆RB◆'(t) \rVert^2 = e^◆LB◆2t◆RB◆(\cos t - \sin t)^2 + e^◆LB◆2t◆RB◆(\sin t + \cos t)^2 + e^◆LB◆2t◆RB◆$

$= e^◆LB◆2t◆RB◆[(\cos^2 t - 2\sin t \cos t + \sin^2 t) + (\sin^2 t + 2\sin t \cos t + \cos^2 t) + 1]$

$= e^◆LB◆2t◆RB◆[1 + 1 + 1] = 3e^◆LB◆2t◆RB◆$

$$\lVert \mathbf◆LB◆r◆RB◆'(t) \rVert = \sqrt◆LB◆3◆RB◆\, e^t$$

$$L = \int_0^◆LB◆\ln 2◆RB◆ \sqrt◆LB◆3◆RB◆\, e^t\, dt = \sqrt◆LB◆3◆RB◆\, [e^t]_0^◆LB◆\ln 2◆RB◆ = \sqrt◆LB◆3◆RB◆(2 - 1) = \sqrt◆LB◆3◆RB◆$$

$\blacksquare$

</details>

**Problem.** Find the arc length of the helix $\mathbf◆LB◆r◆RB◆(t) = (\cos t,\, \sin t,\, t)$ for
$0 \leq t \leq 4\pi$.

<details>
<summary>Solution</summary>

$\mathbf◆LB◆r◆RB◆'(t) = (-\sin t,\, \cos t,\, 1)$So
$\lVert \mathbf◆LB◆r◆RB◆'(t) \rVert = \sqrt◆LB◆\sin^2 t + \cos^2 t + 1◆RB◆ = \sqrt◆LB◆2◆RB◆$.

$$L = \int_0^◆LB◆4\pi◆RB◆ \sqrt◆LB◆2◆RB◆\, dt = 4\sqrt◆LB◆2◆RB◆\,\pi$$

$\blacksquare$

</details>

### 5.2 Curvature and Torsion

**Definition.** Let $\mathbf◆LB◆r◆RB◆(s)$ be a unit-speed curve ($\lVert \mathbf◆LB◆r◆RB◆'(s) \rVert = 1$).
Define:

- **Unit tangent vector:** $\mathbf◆LB◆T◆RB◆(s) = \mathbf◆LB◆r◆RB◆'(s)$
- **Curvature:** $\kappa(s) = \lVert \mathbf◆LB◆T◆RB◆'(s) \rVert = \lVert \mathbf◆LB◆r◆RB◆''(s) \rVert$
- **Principal normal:** $\mathbf◆LB◆N◆RB◆(s) = \frac◆LB◆\mathbf◆LB◆T◆RB◆'(s)◆RB◆◆LB◆\lVert \mathbf◆LB◆T◆RB◆'(s) \rVert◆RB◆$ (when
  $\kappa \neq 0$)
- **Binormal:** $\mathbf◆LB◆B◆RB◆(s) = \mathbf◆LB◆T◆RB◆(s) \times \mathbf◆LB◆N◆RB◆(s)$
- **Torsion:** $\tau(s) = -\mathbf◆LB◆B◆RB◆'(s) \cdot \mathbf◆LB◆N◆RB◆(s)$

The vectors $\mathbf◆LB◆T◆RB◆$$\mathbf◆LB◆N◆RB◆$$\mathbf◆LB◆B◆RB◆$ form the **Frenet--Serret frame**, an orthonormal
Basis that moves with the curve.

**Theorem 5.2 (Frenet--Serret Formulas).**

$$\mathbf◆LB◆T◆RB◆' = \kappa\, \mathbf◆LB◆N◆RB◆, \quad \mathbf◆LB◆N◆RB◆' = -\kappa\, \mathbf◆LB◆T◆RB◆ + \tau\, \mathbf◆LB◆B◆RB◆, \quad \mathbf◆LB◆B◆RB◆' = -\tau\, \mathbf◆LB◆N◆RB◆$$

_Proof._ Since $\mathbf◆LB◆T◆RB◆$ is a unit vector, $\mathbf◆LB◆T◆RB◆ \cdot \mathbf◆LB◆T◆RB◆ = 1$So
$\mathbf◆LB◆T◆RB◆' \cdot \mathbf◆LB◆T◆RB◆ = 0$. Therefore $\mathbf◆LB◆T◆RB◆'$ is orthogonal to $\mathbf◆LB◆T◆RB◆$So
$\mathbf◆LB◆T◆RB◆'$ is parallel to $\mathbf◆LB◆N◆RB◆$ (when $\kappa \neq 0$). This gives
$\mathbf◆LB◆T◆RB◆' = \kappa\,\mathbf◆LB◆N◆RB◆$.

Similarly, $\mathbf◆LB◆B◆RB◆ = \mathbf◆LB◆T◆RB◆ \times \mathbf◆LB◆N◆RB◆$ is a unit vector, so
$\mathbf◆LB◆B◆RB◆' \cdot \mathbf◆LB◆B◆RB◆ = 0$. Also $\mathbf◆LB◆B◆RB◆ \cdot \mathbf◆LB◆T◆RB◆ = 0$So
$\mathbf◆LB◆B◆RB◆' \cdot \mathbf◆LB◆T◆RB◆ + \mathbf◆LB◆B◆RB◆ \cdot \mathbf◆LB◆T◆RB◆' = 0$ Giving
$\mathbf◆LB◆B◆RB◆' \cdot \mathbf◆LB◆T◆RB◆ = -\mathbf◆LB◆B◆RB◆ \cdot \kappa\,\mathbf◆LB◆N◆RB◆ = 0$. So $\mathbf◆LB◆B◆RB◆'$ is
Parallel to $\mathbf◆LB◆N◆RB◆$Giving $\mathbf◆LB◆B◆RB◆' = -\tau\,\mathbf◆LB◆N◆RB◆$.

For $\mathbf◆LB◆N◆RB◆'$: since $\{\mathbf◆LB◆T◆RB◆, \mathbf◆LB◆N◆RB◆, \mathbf◆LB◆B◆RB◆\}$ is an orthonormal basis,
$\mathbf◆LB◆N◆RB◆' = (\mathbf◆LB◆N◆RB◆' \cdot \mathbf◆LB◆T◆RB◆)\,\mathbf◆LB◆T◆RB◆ + (\mathbf◆LB◆N◆RB◆' \cdot \mathbf◆LB◆N◆RB◆)\,\mathbf◆LB◆N◆RB◆ + (\mathbf◆LB◆N◆RB◆' \cdot \mathbf◆LB◆B◆RB◆)\,\mathbf◆LB◆B◆RB◆$.
From $\mathbf◆LB◆N◆RB◆ \cdot \mathbf◆LB◆T◆RB◆ = 0$:
$\mathbf◆LB◆N◆RB◆' \cdot \mathbf◆LB◆T◆RB◆ = -\mathbf◆LB◆N◆RB◆ \cdot \mathbf◆LB◆T◆RB◆' = -\kappa$. From
$\mathbf◆LB◆N◆RB◆ \cdot \mathbf◆LB◆N◆RB◆ = 1$: $\mathbf◆LB◆N◆RB◆' \cdot \mathbf◆LB◆N◆RB◆ = 0$. From
$\mathbf◆LB◆N◆RB◆ \cdot \mathbf◆LB◆B◆RB◆ = 0$:
$\mathbf◆LB◆N◆RB◆' \cdot \mathbf◆LB◆B◆RB◆ = -\mathbf◆LB◆N◆RB◆ \cdot \mathbf◆LB◆B◆RB◆' = \tau$. This gives
$\mathbf◆LB◆N◆RB◆' = -\kappa\,\mathbf◆LB◆T◆RB◆ + \tau\,\mathbf◆LB◆B◆RB◆$. $\blacksquare$

_Intuition._ The curvature $\kappa$ measures how sharply the curve bends (deviation from a straight
line). The torsion $\tau$ measures how sharply the curve twists out of the osculating plane
(deviation from a Plane curve). A curve lies in a plane if and only if $\tau = 0$ everywhere.

For a curve parameterised by an arbitrary parameter $t$ (not necessarily unit-speed):

$$\kappa = \frac◆LB◆\lVert \mathbf◆LB◆r◆RB◆'(t) \times \mathbf◆LB◆r◆RB◆''(t) \rVert◆RB◆◆LB◆\lVert \mathbf◆LB◆r◆RB◆'(t) \rVert^3◆RB◆$$

$$\tau = \frac◆LB◆[\mathbf◆LB◆r◆RB◆'(t) \times \mathbf◆LB◆r◆RB◆''(t)] \cdot \mathbf◆LB◆r◆RB◆^◆LB◆\prime\prime\prime◆RB◆(t)◆RB◆◆LB◆\lVert \mathbf◆LB◆r◆RB◆'(t) \times \mathbf◆LB◆r◆RB◆''(t) \rVert^2◆RB◆$$

**Problem.** Find the curvature and torsion of the helix
$\mathbf◆LB◆r◆RB◆(t) = (a\cos t,\, a\sin t,\, bt)$ where $a, b \gt 0$.

<details>
<summary>Solution</summary>

$\mathbf◆LB◆r◆RB◆'(t) = (-a\sin t,\, a\cos t,\, b)$

$\mathbf◆LB◆r◆RB◆''(t) = (-a\cos t,\, -a\sin t,\, 0)$

$\mathbf◆LB◆r◆RB◆^◆LB◆\prime\prime\prime◆RB◆(t) = (a\sin t,\, -a\cos t,\, 0)$

$\lVert \mathbf◆LB◆r◆RB◆' \rVert = \sqrt◆LB◆a^2 + b^2◆RB◆$

$$\mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'' = \begin◆LB◆vmatrix◆RB◆ \mathbf◆LB◆i◆RB◆ & \mathbf◆LB◆j◆RB◆ & \mathbf◆LB◆k◆RB◆ \\ -a\sin t & a\cos t & b \\ -a\cos t & -a\sin t & 0 \end◆LB◆vmatrix◆RB◆ = (ab\sin t,\, -ab\cos t,\, a^2)$$

$$\lVert \mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'' \rVert = \sqrt◆LB◆a^2 b^2 + a^4◆RB◆ = a\sqrt◆LB◆a^2 + b^2◆RB◆$$

$$\kappa = \frac◆LB◆a\sqrt◆LB◆a^2 + b^2◆RB◆◆RB◆◆LB◆(a^2 + b^2)^◆LB◆3/2◆RB◆◆RB◆ = \frac◆LB◆a◆RB◆◆LB◆a^2 + b^2◆RB◆$$

For the torsion:

$$(\mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'') \cdot \mathbf◆LB◆r◆RB◆^◆LB◆\prime\prime\prime◆RB◆ = ab\sin t \cdot a\sin t + (-ab\cos t)(-a\cos t) + a^2 \cdot 0 = a^2 b$$

$$\tau = \frac◆LB◆a^2 b◆RB◆◆LB◆a^2(a^2 + b^2)◆RB◆ = \frac◆LB◆b◆RB◆◆LB◆a^2 + b^2◆RB◆$$

$\blacksquare$

_Remark._ The helix has constant curvature and constant torsion, reflecting its uniform geometry.

</details>

### 5.3 Parametric Surfaces

A **parametric surface** is a $C^1$ map $\mathbf◆LB◆r◆RB◆ : D \subseteq \mathbb◆LB◆R◆RB◆^2 \to \mathbb◆LB◆R◆RB◆^3$
$\mathbf◆LB◆r◆RB◆(u, v) = (x(u,v),\, y(u,v),\, z(u,v))$.

The **tangent plane** at $\mathbf◆LB◆r◆RB◆(u_0, v_0)$ is spanned by the tangent vectors

$$\mathbf◆LB◆r◆RB◆_u = \frac◆LB◆\partial \mathbf◆LB◆r◆RB◆◆RB◆◆LB◆\partial u◆RB◆, \quad \mathbf◆LB◆r◆RB◆_v = \frac◆LB◆\partial \mathbf◆LB◆r◆RB◆◆RB◆◆LB◆\partial v◆RB◆$$

The **unit normal** to the surface is

$$\mathbf◆LB◆n◆RB◆ = \frac◆LB◆\mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v◆RB◆◆LB◆\lVert \mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v \rVert◆RB◆$$

**Examples of parametric surfaces:**

- **Sphere** (spherical coordinates):
  $\mathbf◆LB◆r◆RB◆(\theta, \phi) = (\rho\sin\phi\cos\theta,\, \rho\sin\phi\sin\theta,\, \rho\cos\phi)$
- **Cylinder:** $\mathbf◆LB◆r◆RB◆(\theta, z) = (r\cos\theta,\, r\sin\theta,\, z)$
- **Graph of $z = f(x,y)$:** $\mathbf◆LB◆r◆RB◆(x, y) = (x,\, y,\, f(x,y))$

For the graph $z = f(x,y)$The normal is
$\mathbf◆LB◆n◆RB◆ = \frac◆LB◆(-f_x,\, -f_y,\, 1)◆RB◆◆LB◆\sqrt◆LB◆1 + f_x^2 + f_y^2◆RB◆◆RB◆$.

### 5.4 Surface Area

**Definition.** The area of a parametric surface $\mathbf◆LB◆r◆RB◆ : D \to \mathbb◆LB◆R◆RB◆^3$ is

$$A(S) = \iint_D \lVert \mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v \rVert\, du\, dv$$

_Derivation._ Partition $D$ into small rectangles $D_◆LB◆ij◆RB◆$ of area $\Delta u\, \Delta v$. The image
$\mathbf◆LB◆r◆RB◆(D_◆LB◆ij◆RB◆)$ is approximately a parallelogram spanned by $\mathbf◆LB◆r◆RB◆_u\, \Delta u$ and
$\mathbf◆LB◆r◆RB◆_v\, \Delta v$With area
$\lVert \mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v \rVert\, \Delta u\, \Delta v$. Summing and taking the limit
gives the formula. $\blacksquare$

**Problem.** Find the surface area of the part of the paraboloid $z = x^2 + y^2$ that lies below The
plane $z = 4$.

<details>
<summary>Solution</summary>

Parametrise by $\mathbf◆LB◆r◆RB◆(x, y) = (x,\, y,\, x^2 + y^2)$ where $x^2 + y^2 \leq 4$.

$\mathbf◆LB◆r◆RB◆_x = (1,\, 0,\, 2x)$, $\mathbf◆LB◆r◆RB◆_y = (0,\, 1,\, 2y)$.

$$\mathbf◆LB◆r◆RB◆_x \times \mathbf◆LB◆r◆RB◆_y = \begin◆LB◆vmatrix◆RB◆ \mathbf◆LB◆i◆RB◆ & \mathbf◆LB◆j◆RB◆ & \mathbf◆LB◆k◆RB◆ \\ 1 & 0 & 2x \\ 0 & 1 & 2y \end◆LB◆vmatrix◆RB◆ = (-2x,\, -2y,\, 1)$$

$$\lVert \mathbf◆LB◆r◆RB◆_x \times \mathbf◆LB◆r◆RB◆_y \rVert = \sqrt◆LB◆4x^2 + 4y^2 + 1◆RB◆$$

$$A = \iint_◆LB◆x^2+y^2 \leq 4◆RB◆ \sqrt◆LB◆4x^2 + 4y^2 + 1◆RB◆\, dx\, dy$$

Use polar coordinates: $x = r\cos\theta$$y = r\sin\theta$$0 \leq r \leq 2$$0 \leq \theta \leq 2\pi$.

$$A = \int_0^◆LB◆2\pi◆RB◆ \int_0^2 \sqrt◆LB◆4r^2 + 1◆RB◆\, r\, dr\, d\theta$$

Let $u = 4r^2 + 1$$du = 8r\, dr$:

$$= 2\pi \cdot \frac◆LB◆1◆RB◆◆LB◆8◆RB◆ \int_1^◆LB◆17◆RB◆ \sqrt◆LB◆u◆RB◆\, du = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\left[\frac◆LB◆2u^◆LB◆3/2◆RB◆◆RB◆◆LB◆3◆RB◆\right]_1^◆LB◆17◆RB◆ = \frac◆LB◆\pi◆RB◆◆LB◆6◆RB◆(17^◆LB◆3/2◆RB◆ - 1)$$

$\blacksquare$

</details>

### 5.5 Surface Integrals

**Definition (Scalar surface integral).** The integral of a scalar function $f$ over a parametric
Surface $S$ is

$$\iint_S f\, dS = \iint_D f(\mathbf◆LB◆r◆RB◆(u,v))\, \lVert \mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v \rVert\, du\, dv$$

**Definition (Vector surface integral / flux).** The flux of a vector field $\mathbf◆LB◆F◆RB◆$ through an
Oriented surface $S$ is

$$\iint_S \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = \iint_D \mathbf◆LB◆F◆RB◆(\mathbf◆LB◆r◆RB◆(u,v)) \cdot (\mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v)\, du\, dv$$

Where the orientation is determined by the choice of normal $\mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v$ vs.
$\mathbf◆LB◆r◆RB◆_v \times \mathbf◆LB◆r◆RB◆_u$.

**Problem.** Evaluate $\iint_S \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆$ where $\mathbf◆LB◆F◆RB◆ = (x,\, y,\, z^2)$
and $S$ is the hemisphere $x^2 + y^2 + z^2 = 4$, $z \geq 0$With Upward orientation.

<details>
<summary>Solution</summary>

Use the divergence theorem on the closed hemisphere plus the disk at $z = 0$. Let $E$ be the solid
hemisphere. Then:

$$\iint_◆LB◆\mathrm◆LB◆closed\ S◆RB◆ \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = \iiint_E \nabla \cdot \mathbf◆LB◆F◆RB◆\, dV = \iiint_E (1 + 1 + 2z)\, dV$$

$$= 2V + 2\iiint_E z\, dV$$

Where $V = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆4◆RB◆◆LB◆3◆RB◆\pi(2^3) = \frac◆LB◆16\pi◆RB◆◆LB◆3◆RB◆$.

By symmetry, the centroid of a hemisphere of radius $R = 2$ is at $z = 3R/8 = 3/4$So

$$\iiint_E z\, dV = \bar◆LB◆z◆RB◆ \cdot V = \frac◆LB◆3◆RB◆◆LB◆4◆RB◆ \cdot \frac◆LB◆16\pi◆RB◆◆LB◆3◆RB◆ = 4\pi$$

$$= 2 \cdot \frac◆LB◆16\pi◆RB◆◆LB◆3◆RB◆ + 2 \cdot 4\pi = \frac◆LB◆32\pi◆RB◆◆LB◆3◆RB◆ + 8\pi = \frac◆LB◆56\pi◆RB◆◆LB◆3◆RB◆$$

The flux through the disk $z = 0$, $x^2 + y^2 \leq 4$ (with downward normal $-\mathbf◆LB◆k◆RB◆$):
$\iint_◆LB◆\mathrm◆LB◆disk◆RB◆ \mathbf◆LB◆F◆RB◆ \cdot (-\mathbf◆LB◆k◆RB◆)\, dS = \iint_◆LB◆\mathrm◆LB◆disk◆RB◆ 0\, dS = 0$.

So the flux through the hemisphere alone is $\frac◆LB◆56\pi◆RB◆◆LB◆3◆RB◆$. $\blacksquare$

</details>

**Problem.** Evaluate $\iint_S z\, dS$ where $S$ is the part of the plane $2x + 2y + z = 4$ in the
First octant.

<details>
<summary>Solution</summary>

Parametrise the surface. Solve for $z = 4 - 2x - 2y$ where $x \geq 0$$y \geq 0$$z \geq 0$ I.e.,
$2x + 2y \leq 4$ or $x + y \leq 2$.

$\mathbf◆LB◆r◆RB◆(x,y) = (x,\, y,\, 4 - 2x - 2y)$$D = \\{(x,y) : x \geq 0,\, y \geq 0,\, x + y \leq 2\\}$.

$\mathbf◆LB◆r◆RB◆_x = (1,\, 0,\, -2)$$\mathbf◆LB◆r◆RB◆_y = (0,\, 1,\, -2)$.

$$\mathbf◆LB◆r◆RB◆_x \times \mathbf◆LB◆r◆RB◆_y = (2,\, 2,\, 1)$$

$$\lVert \mathbf◆LB◆r◆RB◆_x \times \mathbf◆LB◆r◆RB◆_y \rVert = \sqrt◆LB◆4 + 4 + 1◆RB◆ = 3$$

$$\iint_S z\, dS = \iint_D (4 - 2x - 2y) \cdot 3\, dx\, dy = 3 \int_0^2 \int_0^◆LB◆2-x◆RB◆ (4 - 2x - 2y)\, dy\, dx$$

$$= 3 \int_0^2 \left[(4-2x)y - y^2\right]_0^◆LB◆2-x◆RB◆\, dx = 3 \int_0^2 (2-x)(2-x)\, dx$$

$$= 3 \int_0^2 (2-x)^2\, dx = 3\left[-\frac◆LB◆(2-x)^3◆RB◆◆LB◆3◆RB◆\right]_0^2 = 3 \cdot \frac◆LB◆8◆RB◆◆LB◆3◆RB◆ = 8$$

$\blacksquare$

</details>

### 5.6 Common Pitfalls

:::caution Common Pitfalls

- **Parameterisation domain.** Always verify that the parameterisation covers the entire surface and
  that the map is one-to-one (except possibly on the boundary).
- **Normal orientation.** The cross product $\mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v$ determines the
  orientation. Swapping the order changes the sign of the flux integral.
- **Surface area vs. Flux.** Surface area uses $\lVert \mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v \rVert$
  (scalar), while flux uses $\mathbf◆LB◆r◆RB◆_u \times \mathbf◆LB◆r◆RB◆_v$ (vector, oriented). :::

## 6. Problem Set

### Problem 1

Compute $\nabla f$ for $f(x,y,z) = \ln(x^2 + y^2) + e^◆LB◆xz◆RB◆$ and evaluate at $(1, 0, 0)$.

<details>
<summary>Solution</summary>

$f_x = \frac◆LB◆2x◆RB◆◆LB◆x^2+y^2◆RB◆ + ze^◆LB◆xz◆RB◆$$f_y = \frac◆LB◆2y◆RB◆◆LB◆x^2+y^2◆RB◆$$f_z = xe^◆LB◆xz◆RB◆$.

At $(1,0,0)$: $f_x = 2 + 0 = 2$$f_y = 0$$f_z = 1$.

$\nabla f(1,0,0) = (2, 0, 1)$.

If you get this wrong, revise: Section 1.4 The Gradient.

</details>

### Problem 2

Let $f(x,y) = x^3 - 3xy^2 + y^3$. Find all critical points and classify them using the second
Derivative test.

<details>
<summary>Solution</summary>

$f_x = 3x^2 - 3y^2 = 0$ and $f_y = -6xy + 3y^2 = 3y(-2x + y) = 0$.

From $f_x = 0$: $x^2 = y^2$So $y = \pm x$.

If $y = x$: $f_y = 3x(-2x + x) = -3x^2 = 0$So $x = 0$. Point: $(0,0)$.

If $y = -x$: $f_y = 3(-x)(2x + x) = -9x^2 = 0$So $x = 0$. Point: $(0,0)$.

The only critical point is $(0, 0)$. Now $f_◆LB◆xx◆RB◆ = 6x$$f_◆LB◆yy◆RB◆ = -6x + 6y$$f_◆LB◆xy◆RB◆ = -6y$.

At $(0,0)$: $D = 0 \cdot 0 - 0 = 0$. The second derivative test is inconclusive.

To classify, note $f(x, y) = x^3 - 3xy^2 + y^3$. Along $y = 0$: $f(x, 0) = x^3$Which changes sign At
$0$. Along $x = y$: $f(x, x) = -x^3$Which also changes sign but with opposite sign. Since the
behaviour differs by direction, $(0, 0)$ is a saddle point.

If you get this wrong, revise: Section 4.2 Second Derivative Test.

</details>

### Problem 3

Find the directional derivative of $f(x,y) = e^x \cos y$ at $(0, \pi/2)$ in the direction
$\mathbf◆LB◆v◆RB◆ = (1, 1)$.

<details>
<summary>Solution</summary>

Normalise: $\lVert \mathbf◆LB◆v◆RB◆ \rVert = \sqrt◆LB◆2◆RB◆$So $\mathbf◆LB◆u◆RB◆ = (1/\sqrt◆LB◆2◆RB◆,\, 1/\sqrt◆LB◆2◆RB◆)$.

$f_x = e^x \cos y$$f_y = -e^x \sin y$.

$\nabla f(0, \pi/2) = (e^0 \cos(\pi/2),\, -e^0 \sin(\pi/2)) = (0, -1)$.

$$D_◆LB◆\mathbf◆LB◆u◆RB◆◆RB◆ f = (0, -1) \cdot (1/\sqrt◆LB◆2◆RB◆,\, 1/\sqrt◆LB◆2◆RB◆) = -\frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆$$

If you get this wrong, revise: Section 1.5 Directional Derivatives.

</details>

### Problem 4

If $x^2 z + y^2 z^2 = 5$Find $\frac◆LB◆\partial z◆RB◆◆LB◆\partial x◆RB◆$ at $(1, 1, 1)$.

<details>
<summary>Solution</summary>

Let $F(x,y,z) = x^2 z + y^2 z^2 - 5$. Then $F_x = 2xz$$F_y = 2yz^2$$F_z = x^2 + 2y^2 z$.

At $(1,1,1)$: $F_x = 2$$F_z = 1 + 2 = 3$.

$$\frac◆LB◆\partial z◆RB◆◆LB◆\partial x◆RB◆ = -\frac◆LB◆F_x◆RB◆◆LB◆F_z◆RB◆ = -\frac◆LB◆2◆RB◆◆LB◆3◆RB◆$$

If you get this wrong, revise: Section 1.9 Implicit Differentiation.

</details>

### Problem 5

Write the second-order Taylor expansion of $f(x,y) = \sin(x + y)$ at $(0, 0)$.

<details>
<summary>Solution</summary>

$f(0,0) = 0$$f_x = \cos(x+y)$$f_y = \cos(x+y)$So $f_x(0,0) = f_y(0,0) = 1$.

$f_◆LB◆xx◆RB◆ = -\sin(x+y)$$f_◆LB◆xy◆RB◆ = -\sin(x+y)$$f_◆LB◆yy◆RB◆ = -\sin(x+y)$So
$f_◆LB◆xx◆RB◆(0,0) = f_◆LB◆xy◆RB◆(0,0) = f_◆LB◆yy◆RB◆(0,0) = 0$.

$$f(x,y) = 0 + x + y + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(0 \cdot x^2 + 2 \cdot 0 \cdot xy + 0 \cdot y^2) + R_2 = x + y + R_2$$

Where $R_2 = O(\lvert x \rvert^3 + \lvert y \rvert^3)$.

If you get this wrong, revise: Section 1.10 Taylor's Theorem.

</details>

### Problem 6

Evaluate $\iint_D (x + y)\, dA$ where $D$ is bounded by $y = x$ and $y = x^2$.

<details>
<summary>Solution</summary>

The curves intersect when $x = x^2$I.e., $x(x-1) = 0$So $x = 0$ and $x = 1$. For $x \in (0,1)$
$x^2 \lt x$So $D = \\{(x,y) : 0 \leq x \leq 1,\, x^2 \leq y \leq x\\}$.

$$\iint_D (x + y)\, dA = \int_0^1 \int_◆LB◆x^2◆RB◆^x (x + y)\, dy\, dx = \int_0^1 \left[xy + \frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆\right]_◆LB◆x^2◆RB◆^x\, dx$$

$$= \int_0^1 \left(x^2 + \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ - x^3 - \frac◆LB◆x^4◆RB◆◆LB◆2◆RB◆\right)\, dx = \int_0^1 \left(\frac◆LB◆3x^2◆RB◆◆LB◆2◆RB◆ - x^3 - \frac◆LB◆x^4◆RB◆◆LB◆2◆RB◆\right)\, dx$$

$$= \left[\frac◆LB◆x^3◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆x^4◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆x^5◆RB◆◆LB◆10◆RB◆\right]_0^1 = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆10◆RB◆ = \frac◆LB◆10 - 5 - 2◆RB◆◆LB◆20◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆20◆RB◆$$

If you get this wrong, revise: Section 2.2 General Regions.

</details>

### Problem 7

Evaluate $\iiint_E x\, dV$ where $E$ is the region bounded by the coordinate planes and
$x + y + z = 1$.

<details>
<summary>Solution</summary>

$E = \\{(x,y,z) : 0 \leq x \leq 1,\, 0 \leq y \leq 1-x,\, 0 \leq z \leq 1-x-y\\}$.

$$\iiint_E x\, dV = \int_0^1 \int_0^◆LB◆1-x◆RB◆ \int_0^◆LB◆1-x-y◆RB◆ x\, dz\, dy\, dx = \int_0^1 \int_0^◆LB◆1-x◆RB◆ x(1-x-y)\, dy\, dx$$

$$= \int_0^1 x\left[(1-x)y - \frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆\right]_0^◆LB◆1-x◆RB◆\, dx = \int_0^1 x \cdot \frac◆LB◆(1-x)^2◆RB◆◆LB◆2◆RB◆\, dx$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\int_0^1 x(1 - 2x + x^2)\, dx = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\int_0^1 (x - 2x^2 + x^3)\, dx$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[\frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆2x^3◆RB◆◆LB◆3◆RB◆ + \frac◆LB◆x^4◆RB◆◆LB◆4◆RB◆\right]_0^1 = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left[\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆2◆RB◆◆LB◆3◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\right] = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆6 - 8 + 3◆RB◆◆LB◆12◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆24◆RB◆$$

If you get this wrong, revise: Section 2.3 Triple Integrals.

</details>

### Problem 8

Evaluate $\iint_D e^◆LB◆x^2+y^2◆RB◆\, dA$ where $D = \\{(x,y) : 1 \leq x^2 + y^2 \leq 4\\}$.

<details>
<summary>Solution</summary>

Use polar coordinates: $1 \leq r \leq 2$, $0 \leq \theta \leq 2\pi$.

$$\iint_D e^◆LB◆x^2+y^2◆RB◆\, dA = \int_0^◆LB◆2\pi◆RB◆ \int_1^2 e^◆LB◆r^2◆RB◆\, r\, dr\, d\theta = 2\pi \int_1^2 r e^◆LB◆r^2◆RB◆\, dr$$

Let $u = r^2$, $du = 2r\, dr$:

$$= 2\pi \cdot \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\int_1^4 e^u\, du = \pi(e^4 - e)$$

If you get this wrong, revise: Section 2.4 Change of Variables.

</details>

### Problem 9

Evaluate $\iiint_E z\, dV$ where $E$ is the solid cone $z \leq \sqrt◆LB◆x^2 + y^2◆RB◆$, $0 \leq z \leq 1$.

<details>
<summary>Solution</summary>

Use cylindrical coordinates. The cone $z = r$ intersects $z = 1$ at $r = 1$.
$E' = \\{(r, \theta, z) : 0 \leq r \leq 1,\, 0 \leq \theta \leq 2\pi,\, r \leq z \leq 1\\}$.

$$\iiint_E z\, dV = \int_0^◆LB◆2\pi◆RB◆ \int_0^1 \int_r^1 z\, r\, dz\, dr\, d\theta = 2\pi \int_0^1 r\left[\frac◆LB◆z^2◆RB◆◆LB◆2◆RB◆\right]_r^1\, dr$$

$$= 2\pi \int_0^1 \frac◆LB◆r◆RB◆◆LB◆2◆RB◆(1 - r^2)\, dr = \pi \int_0^1 (r - r^3)\, dr = \pi\left[\frac◆LB◆r^2◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆r^4◆RB◆◆LB◆4◆RB◆\right]_0^1 = \pi \cdot \frac◆LB◆1◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$$

If you get this wrong, revise: Section 2.5 Coordinate System Worked Examples.

</details>

### Problem 10

Use Green's theorem to evaluate $\oint_C (3y - e^◆LB◆\sin x◆RB◆)\, dx + (7x + \sqrt◆LB◆y^4 + 1◆RB◆)\, dy$ Where
$C$ is the circle $x^2 + y^2 = 9$ traversed counterclockwise.

<details>
<summary>Solution</summary>

$P = 3y - e^◆LB◆\sin x◆RB◆$, $Q = 7x + \sqrt◆LB◆y^4 + 1◆RB◆$.

$$\frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆ = 7, \quad \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆ = 3$$

By Green's theorem:

$$\oint_C P\, dx + Q\, dy = \iint_D (7 - 3)\, dA = 4 \cdot \pi \cdot 9 = 36\pi$$

If you get this wrong, revise: Section 3.3 Green's Theorem.

</details>

### Problem 11

Compute the curl and divergence of $\mathbf◆LB◆F◆RB◆ = (yz,\, xz,\, xy)$.

<details>
<summary>Solution</summary>

**Curl:**

$$\nabla \times \mathbf◆LB◆F◆RB◆ = \left(\frac◆LB◆\partial (xy)◆RB◆◆LB◆\partial y◆RB◆ - \frac◆LB◆\partial (xz)◆RB◆◆LB◆\partial z◆RB◆,\, \frac◆LB◆\partial (yz)◆RB◆◆LB◆\partial z◆RB◆ - \frac◆LB◆\partial (xy)◆RB◆◆LB◆\partial x◆RB◆,\, \frac◆LB◆\partial (xz)◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial (yz)◆RB◆◆LB◆\partial y◆RB◆\right)$$

$$= (x - x,\, y - y,\, z - z) = \mathbf◆LB◆0◆RB◆$$

**Divergence:**

$$\nabla \cdot \mathbf◆LB◆F◆RB◆ = \frac◆LB◆\partial (yz)◆RB◆◆LB◆\partial x◆RB◆ + \frac◆LB◆\partial (xz)◆RB◆◆LB◆\partial y◆RB◆ + \frac◆LB◆\partial (xy)◆RB◆◆LB◆\partial z◆RB◆ = 0 + 0 + 0 = 0$$

Since the curl is zero and the domain is connected, $\mathbf◆LB◆F◆RB◆$ is conservative. Indeed,
$\mathbf◆LB◆F◆RB◆ = \nabla(xyz)$.

If you get this wrong, revise: Section 3.4 Curl and Divergence.

</details>

### Problem 12

Use Stokes' theorem to evaluate $\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆$ where
$\mathbf◆LB◆F◆RB◆ = (2y,\, -z,\, x)$ and $C$ is the circle $x^2 + y^2 = 1$, $z = 1$ Traversed
counterclockwise when viewed from above.

<details>
<summary>Solution</summary>

Take $S$ to be the disk $x^2 + y^2 \leq 1$, $z = 1$ with upward normal $\mathbf◆LB◆n◆RB◆ = (0, 0, 1)$.

$$\nabla \times \mathbf◆LB◆F◆RB◆ = \left(\frac◆LB◆\partial x◆RB◆◆LB◆\partial y◆RB◆ - \frac◆LB◆\partial (-z)◆RB◆◆LB◆\partial z◆RB◆,\, \frac◆LB◆\partial (2y)◆RB◆◆LB◆\partial z◆RB◆ - \frac◆LB◆\partial x◆RB◆◆LB◆\partial x◆RB◆,\, \frac◆LB◆\partial (-z)◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial (2y)◆RB◆◆LB◆\partial y◆RB◆\right)$$

$$= (0 - (-1),\, 0 - 1,\, 0 - 2) = (1, -1, -2)$$

$$(\nabla \times \mathbf◆LB◆F◆RB◆) \cdot \mathbf◆LB◆n◆RB◆ = (1, -1, -2) \cdot (0, 0, 1) = -2$$

$$\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \iint_S (-2)\, dS = -2 \cdot \pi \cdot 1^2 = -2\pi$$

If you get this wrong, revise: Section 3.5 Stokes' Theorem.

</details>

### Problem 13

Use the divergence theorem to compute the flux of $\mathbf◆LB◆F◆RB◆ = (x,\, y,\, z)$ through the Surface
of the cube $[0, 1]^3$.

<details>
<summary>Solution</summary>

$$\nabla \cdot \mathbf◆LB◆F◆RB◆ = \frac◆LB◆\partial x◆RB◆◆LB◆\partial x◆RB◆ + \frac◆LB◆\partial y◆RB◆◆LB◆\partial y◆RB◆ + \frac◆LB◆\partial z◆RB◆◆LB◆\partial z◆RB◆ = 3$$

$$\iint_S \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆S◆RB◆ = \iiint_E 3\, dV = 3 \cdot 1^3 = 3$$

If you get this wrong, revise: Section 3.6 Divergence Theorem.

</details>

### Problem 14

Find a potential function for $\mathbf◆LB◆F◆RB◆ = (2x + y,\, x + 2z,\, 2y)$.

<details>
<summary>Solution</summary>

First check: $\nabla \times \mathbf◆LB◆F◆RB◆ = (2 - 2,\, 0 - 0,\, 1 - 1) = \mathbf◆LB◆0◆RB◆$. Conservative.

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial x◆RB◆ = 2x + y \implies \phi = x^2 + xy + g(y,z)$$

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial y◆RB◆ = x + g_y = x + 2z \implies g_y = 2z \implies g = 2yz + h(z)$$

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial z◆RB◆ = 2y + h'(z) = 2y \implies h'(z) = 0 \implies h(z) = C$$

$$\phi(x,y,z) = x^2 + xy + 2yz + C$$

If you get this wrong, revise: Section 3.7 Conservative Fields and Potential Functions.

</details>

### Problem 20

Evaluate the surface integral $\iint_S (x^2 + y^2)\, dS$ where $S$ is the cylinder
$x^2 + y^2 = 4$, $0 \leq z \leq 3$.

<details>
<summary>Solution</summary>

Parametrise the cylinder: $\mathbf◆LB◆r◆RB◆(\theta, z) = (2\cos\theta,\, 2\sin\theta,\, z)$ for
$0 \leq \theta \leq 2\pi$, $0 \leq z \leq 3$.

$\mathbf◆LB◆r◆RB◆_\theta = (-2\sin\theta,\, 2\cos\theta,\, 0)$, $\mathbf◆LB◆r◆RB◆_z = (0,\, 0,\, 1)$.

$$\mathbf◆LB◆r◆RB◆_\theta \times \mathbf◆LB◆r◆RB◆_z = (2\cos\theta,\, 2\sin\theta,\, 0)$$

$$\lVert \mathbf◆LB◆r◆RB◆_\theta \times \mathbf◆LB◆r◆RB◆_z \rVert = \sqrt◆LB◆4\cos^2\theta + 4\sin^2\theta◆RB◆ = 2$$

On $S$: $x^2 + y^2 = 4$.

$$\iint_S (x^2 + y^2)\, dS = \int_0^◆LB◆2\pi◆RB◆ \int_0^3 4 \cdot 2\, dz\, d\theta = 8 \cdot 3 \cdot 2\pi = 48\pi$$

If you get this wrong, revise: Section 5.5 Surface Integrals.

</details>

### Problem 21

Use Green's theorem to find the area enclosed by the ellipse
$\frac◆LB◆x^2◆RB◆◆LB◆a^2◆RB◆ + \frac◆LB◆y^2◆RB◆◆LB◆b^2◆RB◆ = 1$.

<details>
<summary>Solution</summary>

By Green's theorem with $P = -y/2$ and $Q = x/2$:

$$\frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆ - \frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \left(-\frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right) = 1$$

So the area is:

$$A = \iint_D 1\, dA = \oint_C -\frac◆LB◆y◆RB◆◆LB◆2◆RB◆\, dx + \frac◆LB◆x◆RB◆◆LB◆2◆RB◆\, dy = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\oint_C x\, dy - y\, dx$$

Parametrise the ellipse: $x = a\cos t$$y = b\sin t$$0 \leq t \leq 2\pi$.

$$A = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\int_0^◆LB◆2\pi◆RB◆ \left[a\cos t \cdot b\cos t - b\sin t \cdot (-a\sin t)\right]\, dt$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\int_0^◆LB◆2\pi◆RB◆ (ab\cos^2 t + ab\sin^2 t)\, dt = \frac◆LB◆ab◆RB◆◆LB◆2◆RB◆\int_0^◆LB◆2\pi◆RB◆ 1\, dt = \pi ab$$

If you get this wrong, revise: Section 3.3 Green's Theorem.

</details>

### Problem 15

Find the minimum value of $f(x,y,z) = x^2 + y^2 + z^2$ subject to $x + y - z = 1$.

<details>
<summary>Solution</summary>

$\nabla f = (2x, 2y, 2z)$, $\nabla g = (1, 1, -1)$ where $g = x + y - z - 1$.

$2x = \lambda$$2y = \lambda$$2z = -\lambda$So $x = y = -z$.

From $x + y - z = 1$: $2x - (-x) = 3x = 1$So $x = 1/3$$y = 1/3$$z = -1/3$.

$$f(1/3, 1/3, -1/3) = \frac◆LB◆1◆RB◆◆LB◆9◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆9◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆9◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆$$

This is the minimum (the Hessian of $f$ is positive definite, and the constraint set is unbounded
But $f \geq 0$).

If you get this wrong, revise: Section 4.3 Lagrange Multipliers.

</details>

### Problem 16

Find the arc length of the curve $\mathbf◆LB◆r◆RB◆(t) = (t^2,\, 2t,\, \ln t)$ for $1 \leq t \leq e$.

<details>
<summary>Solution</summary>

$\mathbf◆LB◆r◆RB◆'(t) = (2t,\, 2,\, 1/t)$So $\lVert \mathbf◆LB◆r◆RB◆'(t) \rVert = \sqrt◆LB◆4t^2 + 4 + 1/t^2◆RB◆$.

Note: $4t^2 + 4 + t^◆LB◆-2◆RB◆ = (2t + 1/t)^2$. So $\lVert \mathbf◆LB◆r◆RB◆' \rVert = 2t + 1/t$.

$$L = \int_1^e \left(2t + \frac◆LB◆1◆RB◆◆LB◆t◆RB◆\right)\, dt = \left[t^2 + \ln t\right]_1^e = e^2 + 1 - 1 - 0 = e^2$$

If you get this wrong, revise: Section 5.1 Parametric Curves.

</details>

### Problem 17

Find the curvature of $\mathbf◆LB◆r◆RB◆(t) = (t,\, t^2,\, t^3)$ at $t = 1$.

<details>
<summary>Solution</summary>

$\mathbf◆LB◆r◆RB◆'(t) = (1,\, 2t,\, 3t^2)$, $\mathbf◆LB◆r◆RB◆''(t) = (0,\, 2,\, 6t)$.

At $t = 1$: $\mathbf◆LB◆r◆RB◆' = (1, 2, 3)$, $\mathbf◆LB◆r◆RB◆'' = (0, 2, 6)$.

$\lVert \mathbf◆LB◆r◆RB◆' \rVert = \sqrt◆LB◆1 + 4 + 9◆RB◆ = \sqrt◆LB◆14◆RB◆$.

$$\mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'' = \begin◆LB◆vmatrix◆RB◆ \mathbf◆LB◆i◆RB◆ & \mathbf◆LB◆j◆RB◆ & \mathbf◆LB◆k◆RB◆ \\ 1 & 2 & 3 \\ 0 & 2 & 6 \end◆LB◆vmatrix◆RB◆ = (12 - 6,\, -(6 - 0),\, 2 - 0) = (6, -6, 2)$$

$$\lVert \mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'' \rVert = \sqrt◆LB◆36 + 36 + 4◆RB◆ = \sqrt◆LB◆76◆RB◆ = 2\sqrt◆LB◆19◆RB◆$$

$$\kappa = \frac◆LB◆2\sqrt◆LB◆19◆RB◆◆RB◆◆LB◆(\sqrt◆LB◆14◆RB◆)^3◆RB◆ = \frac◆LB◆2\sqrt◆LB◆19◆RB◆◆RB◆◆LB◆14\sqrt◆LB◆14◆RB◆◆RB◆ = \frac◆LB◆\sqrt◆LB◆266◆RB◆◆RB◆◆LB◆98◆RB◆$$

If you get this wrong, revise: Section 5.2 Curvature and Torsion.

</details>

### Problem 18

Find the surface area of the part of the sphere $x^2 + y^2 + z^2 = 4$ that lies above the Plane
$z = 1$.

<details>
<summary>Solution</summary>

Use spherical coordinates. The sphere has $\rho = 2$. The plane $z = 1$ intersects when
$2\cos\phi = 1$So $\cos\phi = 1/2$Giving $\phi = \pi/3$.

The region: $0 \leq \rho \leq 2$$0 \leq \phi \leq \pi/3$$0 \leq \theta \leq 2\pi$.

$$A = \int_0^◆LB◆2\pi◆RB◆ \int_0^◆LB◆\pi/3◆RB◆ \rho^2 \sin\phi\, d\phi\, d\theta = 4 \cdot 2\pi \int_0^◆LB◆\pi/3◆RB◆ \sin\phi\, d\phi$$

$$= 8\pi \left[-\cos\phi\right]_0^◆LB◆\pi/3◆RB◆ = 8\pi \left(-\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + 1\right) = 8\pi \cdot \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ = 4\pi$$

If you get this wrong, revise: Section 5.4 Surface Area.

</details>

### Problem 19

Show that $\mathbf◆LB◆F◆RB◆ = (ye^◆LB◆xy◆RB◆ + 2x,\, xe^◆LB◆xy◆RB◆ + 2y)$ is conservative and evaluate
$\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆$ where $C$ is any path from $(0, 0)$ to $(1, 1)$.

<details>
<summary>Solution</summary>

Check:
$\frac◆LB◆\partial P◆RB◆◆LB◆\partial y◆RB◆ = e^◆LB◆xy◆RB◆ + xye^◆LB◆xy◆RB◆$, $\frac◆LB◆\partial Q◆RB◆◆LB◆\partial x◆RB◆ = e^◆LB◆xy◆RB◆ + xye^◆LB◆xy◆RB◆$.
These are equal, so $\mathbf◆LB◆F◆RB◆$ is conservative (on $\mathbb◆LB◆R◆RB◆^2$Which is connected).

Find $\phi$:

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial x◆RB◆ = ye^◆LB◆xy◆RB◆ + 2x \implies \phi = e^◆LB◆xy◆RB◆ + x^2 + g(y)$$

$$\frac◆LB◆\partial \phi◆RB◆◆LB◆\partial y◆RB◆ = xe^◆LB◆xy◆RB◆ + g'(y) = xe^◆LB◆xy◆RB◆ + 2y \implies g'(y) = 2y \implies g(y) = y^2 + C$$

$$\phi(x,y) = e^◆LB◆xy◆RB◆ + x^2 + y^2$$

$$\int_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \phi(1,1) - \phi(0,0) = (e + 1 + 1) - (1 + 0 + 0) = e + 1$$

If you get this wrong, revise: Section 3.2 Line Integrals and Section 3.7 Conservative Fields.

</details>

### Problem 22

Compute the torsion of the curve $\mathbf◆LB◆r◆RB◆(t) = (\cosh t,\, \sinh t,\, t)$ at $t = 0$.

<details>
<summary>Solution</summary>

$\mathbf◆LB◆r◆RB◆'(t) = (\sinh t,\, \cosh t,\, 1)$, $\mathbf◆LB◆r◆RB◆''(t) = (\cosh t,\, \sinh t,\, 0)$
$\mathbf◆LB◆r◆RB◆^◆LB◆\prime\prime\prime◆RB◆(t) = (\sinh t,\, \cosh t,\, 0)$.

At $t = 0$: $\mathbf◆LB◆r◆RB◆' = (0, 1, 1)$, $\mathbf◆LB◆r◆RB◆'' = (1, 0, 0)$
$\mathbf◆LB◆r◆RB◆^◆LB◆\prime\prime\prime◆RB◆ = (0, 1, 0)$.

$$\mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'' = \begin◆LB◆vmatrix◆RB◆ \mathbf◆LB◆i◆RB◆ & \mathbf◆LB◆j◆RB◆ & \mathbf◆LB◆k◆RB◆ \\ 0 & 1 & 1 \\ 1 & 0 & 0 \end◆LB◆vmatrix◆RB◆ = (0,\, 1,\, -1)$$

$$\lVert \mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'' \rVert = \sqrt◆LB◆2◆RB◆$$

$$(\mathbf◆LB◆r◆RB◆' \times \mathbf◆LB◆r◆RB◆'') \cdot \mathbf◆LB◆r◆RB◆^◆LB◆\prime\prime\prime◆RB◆ = 1$$

$$\tau = \frac◆LB◆1◆RB◆◆LB◆(\sqrt◆LB◆2◆RB◆)^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$$

If you get this wrong, revise: Section 5.2 Curvature and Torsion.

</details>

### Problem 23

Evaluate $\iiint_E \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆x^2 + y^2 + z^2◆RB◆◆RB◆\, dV$ where $E$ is the solid unit ball
$x^2 + y^2 + z^2 \leq 1$.

<details>
<summary>Solution</summary>

Use spherical coordinates. The integrand is $\frac◆LB◆1◆RB◆◆LB◆\rho◆RB◆$.

$$\iiint_E \frac◆LB◆1◆RB◆◆LB◆\rho◆RB◆\, dV = \int_0^◆LB◆2\pi◆RB◆ \int_0^◆LB◆\pi◆RB◆ \int_0^1 \frac◆LB◆1◆RB◆◆LB◆\rho◆RB◆ \cdot \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta$$

$$= \left(\int_0^1 \rho\, d\rho\right)\left(\int_0^◆LB◆\pi◆RB◆ \sin\phi\, d\phi\right)\left(\int_0^◆LB◆2\pi◆RB◆ d\theta\right)$$

$$= \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot 2 \cdot 2\pi = 2\pi$$

If you get this wrong, revise: Section 2.5 Coordinate System Worked Examples.

</details>

## Common Pitfalls

1. Forgetting to check that solutions satisfy the original equation (especially with squaring both
   sides or dividing by variables).

2. Misreading the question, particularly with 'hence' vs 'hence or otherwise' — the former requires
   using previous work.

3. Confusing partial derivatives with total derivatives — a partial derivative only varies one
   variable, holding others constant.

## Worked Examples

### Example 1: Double Integral Over a Region

**Problem.** Evaluate $\iint_R (x + y)\,dA$ where $R$ is the triangle with vertices $(0,0)$,
$(1,0)$, $(0,1)$.

**Solution.** The region: $0 \leq x \leq 1$, $0 \leq y \leq 1-x$.

$$\int_0^1 \int_0^◆LB◆1-x◆RB◆ (x+y)\,dy\,dx = \int_0^1 \left[xy + \frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆\right]_0^◆LB◆1-x◆RB◆ dx$$

$$= \int_0^1 \left(x(1-x) + \frac◆LB◆(1-x)^2◆RB◆◆LB◆2◆RB◆\right) dx$$

After simplification: $= \frac◆LB◆1◆RB◆◆LB◆3◆RB◆$.

$\blacksquare$

### Example 2: Stokes' Theorem

**Problem.** Verify Stokes' theorem for $\mathbf◆LB◆F◆RB◆ = (y, -x, z)$ over the hemisphere
$x^2 + y^2 + z^2 = 1$, $z \geq 0$.

**Solution.** $\nabla \times \mathbf◆LB◆F◆RB◆ = (0, 0, -2)$.

Surface integral: $\iint_S (\nabla \times \mathbf◆LB◆F◆RB◆) \cdot d\mathbf◆LB◆S◆RB◆$. For hemisphere,
$\hat◆LB◆n◆RB◆ = (x, y, z)$, so $\hat◆LB◆k◆RB◆ \cdot \hat◆LB◆n◆RB◆ = z$.

$= -2 \iint_S z\,dS = -2\pi$ (using spherical coordinates).

Line integral over boundary ($z = 0$, $x^2 + y^2 = 1$):
$\oint_C \mathbf◆LB◆F◆RB◆ \cdot d\mathbf◆LB◆r◆RB◆ = \int_0^◆LB◆2\pi◆RB◆ (-1)\,dt = -2\pi$. ✓

$\blacksquare$

## Summary

- Partial derivatives: $f_x = \frac◆LB◆\partial f◆RB◆◆LB◆\partial x◆RB◆$; gradient $\nabla f = (f_x, f_y, f_z)$
  points in direction of steepest ascent.
- Chain rule: $\frac◆LB◆df◆RB◆◆LB◆dt◆RB◆ = \nabla f \cdot \mathbf◆LB◆r◆RB◆'(t)$; for $z = f(g(s,t), h(s,t))$, use tree
  diagrams.
- Multiple integrals: iterated integrals via Fubini's theorem; change of variables with Jacobian
  $|J| = |\partial(x,y)/\partial(u,v)|$.
- Vector calculus: divergence ($\nabla \cdot \mathbf◆LB◆F◆RB◆$), curl ($\nabla \times \mathbf◆LB◆F◆RB◆$);
  integral theorems (Green's, Stokes', Divergence).
- Extrema: critical points where $\nabla f = 0$; classify using Hessian matrix (positive definite →
  local min, negative definite → local max, indefinite → saddle).

## Cross-References

| Topic                              | Site        | Link                                                                          |
| ---------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| Real Analysis                      | WyattsNotes | [View](/docs/university/mathematics/real-analysis)                            |
| Linear Algebra                     | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)                           |
| Differential Equations             | WyattsNotes | [View](/docs/university/mathematics/differential-equations)                   |
| Multivariable Calculus — MIT 18.02 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/) |
