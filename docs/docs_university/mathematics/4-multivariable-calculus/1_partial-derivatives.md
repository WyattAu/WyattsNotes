---
title: Partial Derivatives
tags:
  - Mathematics
  - University
---

### 1.1 Definition

Let $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$. The **partial derivative** of $f$ with respect to
$x_i$ at $\mathbf{a} = (a_1, \ldots, a_n)$ is

$$\frac{\partial f}{\partial x_i}(\mathbf{a}) = \lim_{h \to 0} \frac{f(a_1, \ldots, a_i + h, \ldots, a_n) - f(a_1, \ldots, a_n)}{h}$$

Provided the limit exists. This is the rate of change of $f$ in the direction of the $x_i$-axis,
Holding all other variables fixed.

**Notation.** Common notations for the partial derivative with respect to $x_i$ include $f_{x_i}$,
$\partial_i f$And $\frac{\partial f}{\partial x_i}$. We use these interchangeably.

### 1.2 Clairaut's Theorem

**Theorem 1.1 (Clairaut's Theorem / Schwarz’s Theorem).** If $f_{xy}$ and $f_{yx}$ are continuous on
an Open set containing $(a, b)$Then

$$\frac{\partial^2 f}{\partial x \partial y}(a,b) = \frac{\partial^2 f}{\partial y \partial x}(a,b)$$

_Proof._ Define the second-order difference function

$$\Delta(h, k) = f(a+h,\, b+k) - f(a+h,\, b) - f(a,\, b+k) + f(a, b)$$

For $h, k \neq 0$. Define $\phi(s) = f(s, b+k) - f(s, b)$. Then $\Delta(h,k) = \phi(a+h) - \phi(a)$.
By the Mean Value Theorem, there exists $\theta_1 \in (0, 1)$ such that

$$\Delta(h, k) = h \cdot \phi'(a + \theta_1 h) = h \left[f_x(a + \theta_1 h,\, b+k) - f_x(a + \theta_1 h,\, b)\right]$$

Apply the Mean Value Theorem again to the function $g(t) = f_x(a + \theta_1 h,\, t)$ on $[b, b+k]$.
There exists $\theta_2 \in (0, 1)$ such that

$$\Delta(h, k) = hk \cdot f_{xy}(a + \theta_1 h,\, b + \theta_2 k)$$

Similarly, by reversing the order of application, there exist $\theta_3, \theta_4 \in (0,1)$ such
That

$$\Delta(h, k) = hk \cdot f_{yx}(a + \theta_3 h,\, b + \theta_4 k)$$

For $h, k \neq 0$ we have

$$f_{xy}(a + \theta_1 h,\, b + \theta_2 k) = f_{yx}(a + \theta_3 h,\, b + \theta_4 k)$$

Taking the limit as $(h, k) \to (0, 0)$ and using continuity of $f_{xy}$ and $f_{yx}$We obtain
$f_{xy}(a, b) = f_{yx}(a, b)$. $\blacksquare$

_Intuition._ Clairaut's theorem tells us that, under a mild regularity condition (continuity of the
Mixed second partials), the order in which we differentiate does not matter. Without this Condition,
the mixed partials may differ.

### 1.3 Differentiability

**Definition.** $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$ is **differentiable** at $\mathbf{a}$
if There exists a linear map $L : \mathbb{R}^n \to \mathbb{R}$ such that

$$\lim_{\mathbf{h} \to \mathbf{0}} \frac{f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) - L(\mathbf{h})}{\lVert \mathbf{h} \rVert} = 0$$

When $f$ is differentiable at $\mathbf{a}$The linear map $L$ is given by the gradient.

_Remark._ Existence of all partial derivatives at a point does **not** imply differentiability at
That point. The canonical counterexample is

$$f(x,y) = \begin{cases} \dfrac{xy}{x^2 + y^2} & \mathrm{if\ }(x,y) \neq (0,0), \\ 0 & \mathrm{if\ }(x,y) = (0,0). \end{cases}$$

Both $f_x(0,0)$ and $f_y(0,0)$ exist (and equal $0$), yet $f$ is not even continuous at the origin,
Hence not differentiable.

### 1.4 The Gradient

The **gradient** of $f$ at $\mathbf{a}$ is

$$\nabla f(\mathbf{a}) = \left(\frac{\partial f}{\partial x_1}(\mathbf{a}), \ldots, \frac{\partial f}{\partial x_n}(\mathbf{a})\right)$$

The linear approximation of $f$ near $\mathbf{a}$ is

$$f(\mathbf{a} + \mathbf{h}) \approx f(\mathbf{a}) + \nabla f(\mathbf{a}) \cdot \mathbf{h}$$

**Theorem 1.2.** If all partial derivatives of $f$ exist and are continuous in a neighbourhood of
$\mathbf{a}$Then $f$ is differentiable at $\mathbf{a}$.

_Remark._ Functions whose partial derivatives exist and are continuous on an open set $U$ are called
$C^1(U)$. Theorem 1.2 says $C^1 \implies$ differentiable. The converse is false: there exist
Differentiable functions whose partial derivatives are not continuous.

**Proposition.** If $f$ is differentiable at $\mathbf{a}$Then $f$ is continuous at $\mathbf{a}$.

_Proof._ From the definition of differentiability:

$$f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) = L(\mathbf{h}) + \varepsilon(\mathbf{h})\lVert \mathbf{h} \rVert$$

Where $L$ is linear and $\varepsilon(\mathbf{h}) \to 0$ as $\mathbf{h} \to \mathbf{0}$. As
$\mathbf{h} \to \mathbf{0}$ Both terms on the right vanish, so
$f(\mathbf{a} + \mathbf{h}) \to f(\mathbf{a})$. $\blacksquare$

### 1.5 Directional Derivatives

The **directional derivative** of $f$ at $\mathbf{a}$ in the direction of a unit vector $\mathbf{u}$
is

$$D_{\mathbf{u}} f(\mathbf{a}) = \lim_{h \to 0} \frac{f(\mathbf{a} + h\mathbf{u}) - f(\mathbf{a})}{h}$$

**Theorem 1.3.** If $f$ is differentiable at $\mathbf{a}$Then

$$D_{\mathbf{u}} f(\mathbf{a}) = \nabla f(\mathbf{a}) \cdot \mathbf{u}$$

_Proof._ Since $f$ is differentiable at $\mathbf{a}$

$$\frac{f(\mathbf{a} + h\mathbf{u}) - f(\mathbf{a})}{h} = \frac{\nabla f(\mathbf{a}) \cdot (h\mathbf{u}) + \varepsilon(h\mathbf{u}) \lVert h\mathbf{u} \rVert}{h}$$

$$= \nabla f(\mathbf{a}) \cdot \mathbf{u} + \varepsilon(h\mathbf{u}) \lVert \mathbf{u} \rVert$$

Where $\varepsilon(\mathbf{h}) \to 0$ as $\mathbf{h} \to \mathbf{0}$. Taking $h \to 0$ gives the
result. $\blacksquare$

**Corollary 1.4.** The gradient points in the direction of steepest ascent, and
$\lVert \nabla f \rVert$ Is the rate of steepest ascent.

_Proof._ By the Cauchy--Schwarz inequality,
$\lvert \nabla f \cdot \mathbf{u} \rvert \leq \lVert \nabla f \rVert \cdot \lVert \mathbf{u} \rVert = \lVert \nabla f \rVert$
With equality when $\mathbf{u}$ is parallel to $\nabla f$. $\blacksquare$

### 1.6 Chain Rule

**Theorem 1.5 (Multivariable Chain Rule).** If $\mathbf{g} : \mathbb{R}^m \to \mathbb{R}^n$ is
Differentiable at $\mathbf{a}$ and $f : \mathbb{R}^n \to \mathbb{R}$ is differentiable at
$\mathbf{g}(\mathbf{a})$Then

$$\nabla (f \circ \mathbf{g})(\mathbf{a}) = J\mathbf{g}(\mathbf{a})^T \nabla f(\mathbf{g}(\mathbf{a}))$$

Where $J\mathbf{g}$ is the Jacobian matrix of $\mathbf{g}$.

_Proof._ Write $h(t) = f(\mathbf{g}(\mathbf{a} + t\mathbf{v}))$ for a fixed direction $\mathbf{v}$.
Then

$$\frac{h(t) - h(0)}{t} = \frac{f(\mathbf{g}(\mathbf{a} + t\mathbf{v})) - f(\mathbf{g}(\mathbf{a}))}{t}$$

Let $\mathbf{k} = \mathbf{g}(\mathbf{a} + t\mathbf{v}) - \mathbf{g}(\mathbf{a})$. By
differentiability of $\mathbf{g}$ $\mathbf{k} = J\mathbf{g}(\mathbf{a})(t\mathbf{v}) + o(t)$And
$\mathbf{k} \to \mathbf{0}$ as $t \to 0$. By Differentiability of $f$:

$$f(\mathbf{g}(\mathbf{a}) + \mathbf{k}) - f(\mathbf{g}(\mathbf{a})) = \nabla f(\mathbf{g}(\mathbf{a})) \cdot \mathbf{k} + o(\lVert \mathbf{k} \rVert)$$

$$= \nabla f(\mathbf{g}(\mathbf{a})) \cdot [J\mathbf{g}(\mathbf{a})(t\mathbf{v}) + o(t)] + o(t)$$

Dividing by $t$ and taking $t \to 0$:

$$h'(0) = \nabla f(\mathbf{g}(\mathbf{a})) \cdot J\mathbf{g}(\mathbf{a})\mathbf{v} = [J\mathbf{g}(\mathbf{a})^T \nabla f(\mathbf{g}(\mathbf{a}))] \cdot \mathbf{v}$$

Since $\mathbf{v}$ was arbitrary,
$\nabla h(0) = J\mathbf{g}(\mathbf{a})^T \nabla f(\mathbf{g}(\mathbf{a}))$. $\blacksquare$

### 1.7 Chain Rule Worked Example

**Problem.** Let $f(x, y) = x^2 y$ and let $x = \cos t$, $y = \sin t$. Find
$\frac{d}{dt} f(\cos t, \sin t)$ Using the chain rule, and verify by direct substitution.

<details>
<summary>Solution</summary>

**Via the chain rule:**

$$\frac{d}{dt} f(x(t), y(t)) = f_x \cdot x'(t) + f_y \cdot y'(t)$$

$$= 2xy \cdot (-\sin t) + x^2 \cdot \cos t = -2\cos t \sin^2 t + \cos^3 t$$

**Via direct substitution:** $f(\cos t, \sin t) = \cos^2 t \sin t$.

$$\frac{d}{dt}[\cos^2 t \sin t] = -2\cos t \sin^2 t + \cos^3 t$$

Both methods agree. $\blacksquare$

</details>

### 1.8 Worked Example

**Problem.** Let $f(x, y) = x^2 y + \sin(xy)$. Compute $\nabla f$ and find the directional
derivative At $(1, \pi)$ in the direction $\mathbf{u} = (1/\sqrt{2}, 1/\sqrt{2})$.

_Solution._

$\frac{\partial f}{\partial x} = 2xy + y\cos(xy)$

$\frac{\partial f}{\partial y} = x^2 + x\cos(xy)$

$\nabla f(1, \pi) = (2\pi + \pi\cos(\pi), 1 + \cos(\pi)) = (2\pi - \pi, 1 - 1) = (\pi, 0)$

$D_{\mathbf{u}} f(1, \pi) = \nabla f(1, \pi) \cdot \mathbf{u} = \pi \cdot \frac{1}{\sqrt{2}} + 0 = \frac{\pi}{\sqrt{2}}$
$\blacksquare$

### 1.9 Additional Worked Examples

**Problem.** Let $f(x, y, z) = x^2 y\, e^z + \sin(xz)$. Compute $\nabla f$ and evaluate it at
$(1, 0, \pi)$.

<details>
<summary>Solution</summary>

$$\frac{\partial f}{\partial x} = 2xy\, e^z + z\cos(xz)$$

$$\frac{\partial f}{\partial y} = x^2 e^z$$

$$\frac{\partial f}{\partial z} = x^2 y\, e^z + x\cos(xz)$$

At $(1, 0, \pi)$:

$$f_x(1,0,\pi) = 0 + \pi\cos(\pi) = -\pi, \quad f_y(1,0,\pi) = e^{\pi}, \quad f_z(1,0,\pi) = 0 + \cos(\pi) = -1$$

$$\nabla f(1, 0, \pi) = (-\pi,\, e^{\pi},\, -1)$$

$\blacksquare$

</details>

**Problem.** Find the directional derivative of $f(x,y) = x^2 y^3$ at $(1, -1)$ in the direction of
$\mathbf{v} = (3, -4)$.

<details>
<summary>Solution</summary>

First normalise $\mathbf{v}$: $\lVert \mathbf{v} \rVert = \sqrt{9 + 16} = 5$So
$\mathbf{u} = (3/5,\, -4/5)$.

$$\nabla f = (2xy^3,\, 3x^2 y^2)$$

$$\nabla f(1, -1) = (2 \cdot 1 \cdot (-1),\, 3 \cdot 1 \cdot 1) = (-2, 3)$$

$$D_{\mathbf{u}} f(1, -1) = (-2)(3/5) + (3)(-4/5) = \frac{-6 - 12}{5} = -\frac{18}{5}$$

$\blacksquare$

</details>

### 1.10 Implicit Differentiation

Suppose $F(x, y, z) = 0$ defines $z$ implicitly as a function of $x$ and $y$ near a point
$(a, b, c)$ with $F_z(a, b, c) \neq 0$. By the Implicit Function Theorem, there exists a $C^1$
function $\varphi$ defined on a neighbourhood of $(a, b)$ such that $\varphi(a, b) = c$ and
$F(x, y, \varphi(x, y)) = 0$.

Differentiating $F(x, y, \varphi(x, y)) = 0$ with respect to $x$:

$$F_x + F_z \cdot \frac{\partial z}{\partial x} = 0 \implies \frac{\partial z}{\partial x} = -\frac{F_x}{F_z}$$

Similarly, $\frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$.

**Proposition 1.6 (Implicit Function Theorem, special case).** If $F : \mathbb{R}^3 \to \mathbb{R}$
is $C^1$ and $F(a,b,c) = 0$ with $F_z(a,b,c) \neq 0$Then there exist neighbourhoods $U$ of $(a,b)$
and $V$ of $c$ and a unique $C^1$ function $\varphi : U \to V$ with $\varphi(a,b) = c$ and
$F(x, y, \varphi(x,y)) = 0$ for all $(x,y) \in U$.

**Problem.** If $x^2 y + y^2 z + z^2 x = 3$Find $\frac{\partial z}{\partial x}$ and
$\frac{\partial z}{\partial y}$ at the point $(1, 1, 1)$.

<details>
<summary>Solution</summary>

Let $F(x,y,z) = x^2 y + y^2 z + z^2 x - 3$. Then $F_x = 2xy + z^2$ $F_y = x^2 + 2yz$,
$F_z = y^2 + 2zx$.

At $(1,1,1)$: $F_x = 3$, $F_y = 3$, $F_z = 3$.

$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} = -\frac{3}{3} = -1, \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z} = -\frac{3}{3} = -1$$

$\blacksquare$

</details>

### 1.11 Taylor's Theorem for Multivariable Functions

**Theorem 1.7 (Taylor's Theorem).** Let $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ be of class
$C^{k+1}$ On an open convex set $U$And let $\mathbf{a} \in U$. Then for all $\mathbf{x} \in U$:

$$f(\mathbf{x}) = f(\mathbf{a}) + \nabla f(\mathbf{a}) \cdot (\mathbf{x} - \mathbf{a}) + \frac{1}{2!}(\mathbf{x} - \mathbf{a})^T H_f(\mathbf{a})(\mathbf{x} - \mathbf{a}) + \cdots + R_k$$

Where $H_f$ is the Hessian matrix and the remainder $R_k$ can be written in Lagrange form:

$$R_k = \frac{1}{(k+1)!} \sum_{\lvert \alpha \rvert = k+1} \frac{(k+1)!}{\alpha!} D^{\alpha} f(\mathbf{c})\, (\mathbf{x} - \mathbf{a})^{\alpha}$$

For some $\mathbf{c}$ on the line segment joining $\mathbf{a}$ and $\mathbf{x}$.

For $n = 2$ and $k = 2$The second-order Taylor expansion is:

$$f(a+h, b+k) = f(a,b) + f_x h + f_y k + \frac{1}{2}\left(f_{xx} h^2 + 2f_{xy} hk + f_{yy} k^2\right) + R_2$$

Where all partial derivatives are evaluated at $(a, b)$ and the remainder is

$$R_2 = \frac{1}{6}\left(f_{xxx} h^3 + 3f_{xxy} h^2 k + 3f_{xyy} hk^2 + f_{yyy} k^3\right)\Big|_{\mathbf{c}}$$

_Proof (sketch)._ Define $\phi(t) = f(\mathbf{a} + t(\mathbf{x} - \mathbf{a}))$ for $t \in [0, 1]$.
Apply the single-variable Taylor theorem to $\phi$ at $t = 0$:

$$\phi(1) = \phi(0) + \phi'(0) + \frac{1}{2!}\phi''(0) + \cdots + \frac{1}{k!}\phi^{(k)}(0) + \frac{1}{(k+1)!}\phi^{(k+1)}(\tau)$$

For some $\tau \in (0, 1)$. By the multivariable chain rule,
$\phi'(t) = \nabla f(\mathbf{a} + t(\mathbf{x}-\mathbf{a})) \cdot (\mathbf{x}-\mathbf{a})$And higher
Derivatives involve higher-order partial derivatives of $f$. Substituting
$\mathbf{c} = \mathbf{a} + \tau(\mathbf{x}-\mathbf{a})$ yields the result. $\blacksquare$

### 1.12 Common Pitfalls

:::caution Common Pitfalls

- **Existence $\neq$ continuity of partials.** A function can have all partial derivatives at a
  point yet fail to be continuous (hence not differentiable) there.
- **Existence $\neq$ differentiability.** Even if all partials exist at a point, the function need
  not be differentiable. Continuity of the partials in a neighbourhood (i.e., $C^1$) is sufficient
  but not necessary.
- **Clairaut's theorem requires continuity.** Without continuity of the mixed partials, the equality
  $f_{xy} = f_{yx}$ can fail.
- **Normalise the direction vector.** The formula $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$
  assumes $\lVert \mathbf{u} \rVert = 1$. If the direction is given by a non-unit vector
  $\mathbf{v}$Divide by $\lVert \mathbf{v} \rVert$ first.
:::

