---
title: Introduction to Partial Differential Equations
tags:
  - Mathematics
  - University
---

### 8.1 Classification of Second-Order PDEs

The general second-order linear PDE in two variables is

$$A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$$

- **Elliptic** ($B^2 - 4AC \lt 0$): e.g., Laplace's equation $u_{xx} + u_{yy} = 0$.
- **Parabolic** ($B^2 - 4AC = 0$): e.g., the heat equation $u_t = \alpha^2 u_{xx}$.
- **Hyperbolic** ($B^2 - 4AC > 0$): e.g., the wave equation $u_{tt} = c^2 u_{xx}$.

### 8.2 The Heat Equation

$$u_t = \alpha^2 u_{xx}, \quad 0 \lt x \lt L, \quad t > 0$$

With boundary conditions $u(0, t) = u(L, t) = 0$ and initial condition $u(x, 0) = f(x)$.

### 8.3 Derivation of the Heat Equation

Consider a thin rod of length $L$ with uniform cross-section and density $\rho$. Let $u(x, t)$ be
the Temperature at position $x$ and time $t$. By **Fourier's law of heat conduction**, the heat flux
Through a cross-section is proportional to the negative temperature gradient:

$$q = -\kappa u_x$$

Where $\kappa$ is the thermal conductivity. Conservation of energy on $[x, x + \Delta x]$:

$$\rho c \frac{\partial u}{\partial t} \Delta x = q(x) - q(x + \Delta x) = -\kappa u_x(x) + \kappa u_x(x + \Delta x)$$

Dividing by $\Delta x$ and taking $\Delta x \to 0$:

$$\rho c \, u_t = \kappa u_{xx} \implies u_t = \frac{\kappa}{\rho c} u_{xx} = \alpha^2 u_{xx}$$

Where $\alpha^2 = \kappa/(\rho c)$ is the **thermal diffusivity**.

### 8.4 Solving the Heat Equation by Separation of Variables

Assume $u(x, t) = X(x)T(t)$. Substituting:

$$X T' = \alpha^2 X'' T \implies \frac{T'}{\alpha^2 T} = \frac{X''}{X} = -\lambda$$

This gives two ODEs:

$$X'' + \lambda X = 0, \quad X(0) = X(L) = 0$$ $$T' + \alpha^2 \lambda T = 0$$

The boundary value problem for $X$ has solutions only for $\lambda_n = (n\pi/L)^2$
$n = 1, 2, 3, \ldots$With $X_n(x) = \sin(n\pi x/L)$.

The corresponding $T_n(t) = e^{-\alpha^2 (n\pi/L)^2 t}$.

By superposition:

$$u(x, t) = \sum_{n=1}^{\infty} b_n \sin\frac{n\pi x}{L} e^{-\alpha^2 (n\pi/L)^2 t}$$

Where $b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$ (the sine series coefficients of
$f$).

### 8.5 Worked Example: Heat Equation

**Problem.** Solve $u_t = u_{xx}$ for $0 \lt x \lt \pi$, $t > 0$With $u(0, t) = u(\pi, t) = 0$ And
$u(x, 0) = \sin(2x) + 3\sin(5x)$.

_Solution._ Here $\alpha = 1$ and $L = \pi$. The initial condition is already a sine series.

$\lambda_n = n^2$, $X_n = \sin(nx)$, $T_n = e^{-n^2 t}$.

$u(x, t) = e^{-4t}\sin(2x) + 3e^{-25t}\sin(5x)$. $\blacksquare$

### 8.6 The Wave Equation

$$u_{tt} = c^2 u_{xx}, \quad 0 \lt x \lt L, \quad t > 0$$

With boundary conditions $u(0, t) = u(L, t) = 0$And initial conditions $u(x, 0) = f(x)$
$u_t(x, 0) = g(x)$.

### 8.7 Derivation of the Wave Equation

Consider a string of length $L$ under tension $T$. Let $u(x, t)$ be the vertical displacement. For A
small segment $[x, x + \Delta x]$Newton's second law in the vertical direction gives:

$$\rho \Delta x \, u_{tt} = T\sin\theta(x + \Delta x) - T\sin\theta(x)$$

For small displacements, $\sin\theta \approx \tan\theta = u_x$So:

$$\rho \, u_{tt} = T \frac{u_x(x + \Delta x) - u_x(x)}{\Delta x} \xrightarrow{\Delta x \to 0} T u_{xx}$$

$$u_{tt} = \frac{T}{\rho} u_{xx} = c^2 u_{xx}, \quad c = \sqrt{T/\rho}$$

### 8.8 Solving the Wave Equation

Separation of variables $u(x, t) = X(x)T(t)$ gives:

$$X'' + \lambda X = 0, \quad T'' + c^2 \lambda T = 0$$

With $\lambda_n = (n\pi/L)^2$:

$$X_n(x) = \sin\frac{n\pi x}{L}, \quad T_n(t) = a_n \cos\frac{cn\pi t}{L} + b_n \sin\frac{cn\pi t}{L}$$

$$u(x, t) = \sum_{n=1}^{\infty} \sin\frac{n\pi x}{L}\left(a_n \cos\frac{cn\pi t}{L} + b_n \sin\frac{cn\pi t}{L}\right)$$

Where $a_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$ and
$b_n = \frac{2}{cn\pi}\int_0^L g(x)\sin\frac{n\pi x}{L}\, dx$.

### 8.9 D'Alembert’s Solution

For the wave equation on $-\infty \lt x \lt \infty$:

$$u(x, t) = \frac{f(x + ct) + f(x - ct)}{2} + \frac{1}{2c}\int_{x - ct}^{x + ct} g(s)\, ds$$

This represents the solution as a superposition of right-moving and left-moving waves.

### 8.10 Laplace's Equation

$$u_{xx} + u_{yy} = 0$$

On a domain $\Omega \subseteq \mathbb{R}^2$With boundary conditions on $\partial\Omega$.

**Theorem 8.1 (Maximum Principle).** A harmonic function $u$ (satisfying Laplace's equation) on a
Bounded domain attains its maximum and minimum on the boundary.

**Theorem 8.2 (Uniqueness).** The Dirichlet problem for Laplace's equation has at most one solution.

_Proof._ If $u_1$ and $u_2$ are two solutions with the same boundary data, then $v = u_1 - u_2$ is
Harmonic with $v = 0$ on $\partial\Omega$. By the maximum principle, $v \equiv 0$. $\blacksquare$

### 8.11 Worked Example: Wave Equation

**Problem.** A string of length $\pi$ with fixed ends is plucked: $u(x, 0) = x(\pi - x)$
$u_t(x, 0) = 0$. Find $u(x, t)$.

_Solution._ With $c = 1$ and $L = \pi$: $a_n = \frac{2}{\pi}\int_0^{\pi} x(\pi - x)\sin(nx)\, dx$
$b_n = 0$ (since $g = 0$).

Integrating by parts twice:

$\int_0^{\pi} x(\pi - x)\sin(nx)\, dx = \left[-\frac{x(\pi - x)\cos(nx)}{n}\right]_0^{\pi} + \frac{1}{n}\int_0^{\pi}(\pi - 2x)\cos(nx)\, dx$

$= 0 + \frac{1}{n}\left[\frac{(\pi - 2x)\sin(nx)}{n}\right]_0^{\pi} + \frac{2}{n^2}\int_0^{\pi}\sin(nx)\, dx$

$= 0 + \frac{2}{n^2}\left[-\frac{\cos(nx)}{n}\right]_0^{\pi} = \frac{2}{n^3}(1 - (-1)^n)$

For even $n$: $a_n = 0$. For odd $n = 2k + 1$:
$a_n = \frac{2}{\pi} \cdot \frac{4}{n^3} = \frac{8}{\pi n^3}$.

$u(x, t) = \frac{8}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{(2k+1)^3}\cos((2k+1)t)$.
$\blacksquare$

### 8.12 Worked Example: Laplace's Equation on a Rectangle

**Problem.** Solve $u_{xx} + u_{yy} = 0$ on $0 \lt x \lt \pi$, $0 \lt y \lt 1$ with
$u(0, y) = u(\pi, y) = u(x, 1) = 0$ and $u(x, 0) = f(x) = x(\pi - x)$.

<details>
<summary>Solution</summary>

_Solution._ Separate variables: $u(x, y) = X(x)Y(y)$.

$X''/X = -Y''/Y = -\lambda$.

$X'' + \lambda X = 0$, $X(0) = X(\pi) = 0$: $\lambda_n = n^2$, $X_n = \sin(nx)$.

$Y'' - n^2 Y = 0$, $Y(1) = 0$: $Y_n = \sinh(n(1 - y))$.

$u(x, y) = \sum_{n=1}^{\infty} b_n \sin(nx)\sinh(n(1-y))$.

$b_n = \frac{2}{\pi \sinh n}\int_0^{\pi} x(\pi - x)\sin(nx)\, dx = \frac{2}{\pi \sinh n} \cdot \frac{2(1 - (-1)^n)}{n^3}$.

For odd $n = 2k + 1$: $b_n = \frac{8}{\pi n^3 \sinh n}$.

$u(x, y) = \frac{8}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)\sinh((2k+1)(1-y))}{(2k+1)^3 \sinh(2k+1)}$.
$\blacksquare$

</details>

### 8.13 Sturm-Liouville Theory (Brief)

A **Sturm-Liouville problem** consists of the ODE

$$(p(x)y')' + [\lambda w(x) - q(x)]y = 0$$

On $[a, b]$ with homogeneous boundary conditions, where $p, w > 0$ and $p, p', q, w$ are continuous.

**Key properties:**

1. The eigenvalues are real and form an infinite increasing sequence
   $\lambda_1 \lt \lambda_2 \lt \cdots \to \infty$.
2. Eigenfunctions corresponding to distinct eigenvalues are orthogonal with respect to the weight
   $w(x)$: $\int_a^b y_m(x) y_n(x) w(x)\, dx = 0$ for $m \neq n$.
3. The eigenfunctions form a complete set in the weighted $L^2$ space.

_Remark._ The boundary value problems encountered in the heat and wave equations
($X'' + \lambda X = 0$ with $X(0) = X(L) = 0$) are special cases of Sturm-Liouville problems With
$p = 1$, $q = 0$, $w = 1$.

### 8.14 Neumann Boundary Conditions

When the boundary specifies the derivative (heat flux) rather than the value, we have **Neumann
Conditions**. For the heat equation:

$$u_x(0, t) = 0, \quad u_x(L, t) = 0$$

(insulated ends). The separation of variables gives $X'(0) = X'(L) = 0$Yielding eigenvalues
$\lambda_0 = 0$ with $X_0 = 1$And $\lambda_n = (n\pi/L)^2$ for $n \geq 1$ with
$X_n = \cos(n\pi x/L)$.

The solution is

$$u(x, t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\frac{n\pi x}{L} e^{-\alpha^2 (n\pi/L)^2 t}$$

Where $a_n = \frac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}\, dx$.

_Remark._ As $t \to \infty$All exponential terms decay, and $u(x, t) \to a_0/2$The average Value of
the initial temperature. Physically, an insulated rod reaches a uniform steady-state Temperature.

### 8.15 Worked Example: Heat Equation with Non-Trivial Initial Data

**Problem.** Solve $u_t = u_{xx}$ for $0 \lt x \lt \pi$, $t > 0$With $u(0, t) = u(\pi, t) = 0$ And
$u(x, 0) = x(\pi - x)$.

<details>
<summary>Solution</summary>

_Solution._ The sine series of $f(x) = x(\pi - x)$ on $[0, \pi]$ has coefficients

$b_n = \frac{2}{\pi}\int_0^{\pi} x(\pi - x)\sin(nx)\, dx = \frac{4(1 - (-1)^n)}{\pi n^3}$.

(Computed in Section 8.11.)

For even $n$: $b_n = 0$. For odd $n = 2k + 1$: $b_n = \frac{8}{\pi n^3}$.

$u(x, t) = \frac{8}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{(2k+1)^3} e^{-(2k+1)^2 t}$.
$\blacksquare$

</details>

### 8.16 Worked Example: D'Alembert’s Solution

**Problem.** Solve $u_{tt} = 4u_{xx}$ for $-\infty \lt x \lt \infty$ with $u(x, 0) = e^{-x^2}$ and
$u_t(x, 0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Here $c = 2$. By D'Alembert’s formula with $g = 0$:

$u(x, t) = \frac{f(x + 2t) + f(x - 2t)}{2} = \frac{e^{-(x+2t)^2} + e^{-(x-2t)^2}}{2}$.

This represents two Gaussian pulses traveling in opposite directions at speed 2. $\blacksquare$

</details>
