---
title: Differential Equations
description:
  University-level notes on Differential Equations: 1. Introduction and
  Classification; 1.1 Basic Definitions; 1.2 Classification of ODEs.
date: 2026-04-24T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: differential-equations
---

## 1. Introduction and Classification

### 1.1 Basic Definitions

A **differential equation (DE)** is an equation involving an unknown function and its derivatives.
An **ordinary differential equation (ODE)** involves a function of one variable and its ordinary
derivatives. A **partial differential equation (PDE)** involves a function of several variables and
its partial derivatives.

### 1.2 Classification of ODEs

An ODE is:

- **Ordinary** vs. **partial**: depends on whether partial derivatives appear.
- **Order**: the highest derivative that appears.
- **Linear** vs. **nonlinear**: linear if the unknown function and its derivatives appear linearly.
- **Homogeneous** vs. **nonhomogeneous**: for linear ODEs, homogeneous if the forcing term is zero.

### 1.3 Initial and Boundary Value Problems

An **initial value problem (IVP)** specifies the value of the function (and possibly its
derivatives) at a single point. A **boundary value problem (BVP)** specifies conditions at two or
more points.

### 1.4 Examples from Physics and Biology

Differential equations arise throughout the natural sciences. A few canonical examples:

1. **Newton's law of cooling.** The temperature $T(t)$ of a body in a medium at temperature $T_m$
   satisfies $\frac{dT}{dt} = -k(T - T_m)$, a first-order linear ODE.

2. **Harmonic oscillator.** A mass on a spring with damping obeys
   $m\frac{d^2 x}{dt^2} + c\frac{dx}{dt} + kx = F(t)$, a second-order linear ODE.

3. **Logistic population growth.** $\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)$, a first-order
   nonlinear (Bernoulli) ODE.

4. **Lotka-Volterra predator-prey model.**
   $\frac{dx}{dt} = x(\alpha - \beta y)$, $\frac{dy}{dt} = y(-\gamma + \delta x)$, a coupled
   nonlinear system.

5. **RC circuit.** The charge $q(t)$ on a capacitor satisfies $R\frac{dq}{dt} + \frac{q}{C} = V(t)$,
   a first-order linear ODE.

6. **Heat equation.** The temperature $u(x, t)$ in a rod satisfies $u_t = \alpha^2 u_{xx}$, a
   second-order linear PDE.

7. **Wave equation.** The displacement $u(x, t)$ of a string satisfies $u_{tt} = c^2 u_{xx}$, a
   second-order linear PDE.

8. **Laplace's equation.** The steady-state temperature satisfies $u_{xx} + u_{yy} = 0$, a
   second-order linear PDE.

### 1.5 Classification Tree

```
Differential Equations
├── ODE (one independent variable)
│   ├── By order
│   │   ├── First-order: y' = f(x, y)
│   │   ├── Second-order: y'' = f(x, y, y')
│   │   └── n-th order: y^(n) = f(x, y, ..., y^(n-1))
│   ├── By linearity
│   │   ├── Linear: a_n(x)y^(n) + ... + a_0(x)y = g(x)
│   │   │   ├── Homogeneous (g = 0)
│   │   │   └── Nonhomogeneous (g ≠ 0)
│   │   └── Nonlinear (y or derivatives appear nonlinearly)
│   └── By coefficients
│       ├── Constant coefficient
│       └── Variable coefficient
└── PDE (multiple independent variables)
    ├── Elliptic: B² - 4AC < 0  (e.g., Laplace)
    ├── Parabolic: B² - 4AC = 0 (e.g., Heat)
    └── Hyperbolic: B² - 4AC > 0 (e.g., Wave)
```

### 1.6 Worked Example: Classifying ODEs

**Problem.** Classify each equation by order, linearity, and homogeneity (if linear).

(a) $y'' + 3y' + 2y = \sin x$

(b) $(y')^2 + y = 0$

(c) $x^2 y'' + xy' + (x^2 - 1)y = 0$

(d) $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

<details>
<summary>Solution</summary>

(a) Second-order, linear, nonhomogeneous (forcing term $\sin x \neq 0$).

(b) First-order, nonlinear (the term $(y')^2$ is nonlinear in $y'$).

(c) Second-order, linear, homogeneous. This is Bessel's equation of order 1.

(d) Second-order PDE, linear, homogeneous. This is Laplace's equation; $A = 1$, $C = 1$, $B = 0$,
so $B^2 - 4AC = -4 \lt{} 0$ (elliptic). $\blacksquare$

</details>

## 2. First-Order ODEs

### 2.1 Separable Equations

A first-order ODE $\frac{dy}{dx} = f(x, y)$ is **separable** if $f(x, y) = g(x)h(y)$.

$$\frac{dy}{dx} = g(x)h(y) \implies \frac{dy}{h(y)} = g(x)\, dx$$

Integrating both sides: $\int \frac{dy}{h(y)} = \int g(x)\, dx + C$.

**Example.** Solve $\frac{dy}{dx} = xy$.

Separating: $\frac{dy}{y} = x\, dx$. Integrating: $\ln|y| = \frac{x^2}{2} + C$. Thus
$y = Ce^{x^2/2}$ where $C \neq 0$, plus the trivial solution $y = 0$.

### 2.2 Linear First-Order Equations

A **linear first-order ODE** has the form

$$\frac{dy}{dx} + P(x)y = Q(x)$$

**Theorem 2.1 (Integrating Factor).** The solution is

$$y(x) = e^{-\int P(x)\, dx}\left(\int Q(x) e^{\int P(x)\, dx}\, dx + C\right)$$

*Proof.* Multiply both sides by $\mu(x) = e^{\int P(x)\, dx}$:

$$\frac{d}{dx}(\mu y) = \mu \frac{dy}{dx} + \mu P y = \mu \frac{dy}{dx} + \mu' y = \mu\left(\frac{dy}{dx} + Py\right) = \mu Q$$

Integrating: $\mu y = \int \mu Q\, dx + C$. Solving for $y$ gives the result. $\blacksquare$

### 2.3 Worked Example: Linear Equation

**Problem.** Solve $y' + \frac{2}{x}y = x^2$ for $x > 0$.

*Solution.* $P(x) = 2/x$, $Q(x) = x^2$.

$\mu(x) = e^{\int 2/x\, dx} = e^{2\ln x} = x^2$.

$y = x^{-2}\left(\int x^2 \cdot x^2\, dx + C\right) = x^{-2}\left(\frac{x^5}{5} + C\right) = \frac{x^3}{5} + \frac{C}{x^2}$.
$\blacksquare$

### 2.4 Exact Equations

The ODE $M(x, y)\, dx + N(x, y)\, dy = 0$ is **exact** if
$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.

When exact, there exists $\Psi(x, y)$ such that $\frac{\partial \Psi}{\partial x} = M$ and
$\frac{\partial \Psi}{\partial y} = N$, and the solution is $\Psi(x, y) = C$.

**Theorem 2.2.** If $M$ and $N$ have continuous partial derivatives on a simply connected domain
$D$, then $M\, dx + N\, dy = 0$ is exact if and only if $M_y = N_x$.

*Proof.* If exact, $M = \Psi_x$ and $N = \Psi_y$, so $M_y = \Psi_{xy} = \Psi_{yx} = N_x$ by
Clairaut. Conversely, if $M_y = N_x$, define
$\Psi(x, y) = \int_{x_0}^x M(t, y)\, dt + \int_{y_0}^y N(x_0, s)\, ds$. Then $\Psi_x = M(x, y)$ and
$\Psi_y = \int_{x_0}^x M_y(t, y)\, dt + N(x_0, y) = \int_{x_0}^x N_x(t, y)\, dt + N(x_0, y) = N(x, y) - N(x_0, y) + N(x_0, y) = N(x, y)$.
$\blacksquare$

### 2.5 Worked Example: Exact Equation

**Problem.** Solve $(2xy + 3)\, dx + (x^2 - 1)\, dy = 0$.

*Solution.* $M = 2xy + 3$, $N = x^2 - 1$. Check: $M_y = 2x = N_x$. Exact.

$\Psi_x = 2xy + 3 \implies \Psi = x^2 y + 3x + h(y)$.

$\Psi_y = x^2 + h'(y) = x^2 - 1 \implies h'(y) = -1 \implies h(y) = -y$.

Solution: $x^2 y + 3x - y = C$. $\blacksquare$

### 2.6 Integrating Factors for Non-Exact Equations

If $M_y \neq N_x$, one can sometimes find an **integrating factor** $\mu(x, y)$ such that
$(\mu M)_y = (\mu N)_x$.

**Case 1:** If $\frac{M_y - N_x}{N}$ depends only on $x$, then
$\mu(x) = e^{\int \frac{M_y - N_x}{N}\, dx}$.

**Case 2:** If $\frac{N_x - M_y}{M}$ depends only on $y$, then
$\mu(y) = e^{\int \frac{N_x - M_y}{M}\, dy}$.

### 2.7 Bernoulli Equations

A **Bernoulli equation** has the form

$$\frac{dy}{dx} + P(x)y = Q(x)y^n$$

where $n \neq 0, 1$. The substitution $v = y^{1-n}$ transforms it into a linear equation:

$$\frac{dv}{dx} + (1 - n)P(x)v = (1 - n)Q(x)$$

**Example.** Solve $y' + y = y^2 e^x$.

Here $n = 2$, so set $v = y^{-1}$. Then $v' = -y^{-2}y'$, and the equation becomes $v' - v = -e^x$.
Integrating factor: $e^{-x}$. So $(v e^{-x})' = -1$, giving $ve^{-x} = -x + C$, $v = -xe^x + Ce^x$,
and $y = 1/(C - x)e^x$.

### 2.8 Existence and Uniqueness

**Theorem 2.3 (Picard-Lindelöf).** If $f$ and $\partial f/\partial y$ are continuous on a rectangle
containing $(x_0, y_0)$, then the IVP $y' = f(x, y)$, $y(x_0) = y_0$ has a unique solution in some
neighbourhood of $x_0$.

### 2.9 Substitution Methods

Several substitutions reduce specific equations to separable or linear form:

1. **Homogeneous equations**: $y' = f(y/x)$. Set $v = y/x$.
2. **Equations of the form $y' = f(ax + by + c)$**: set $v = ax + by + c$.

### 2.10 Homogeneous Equations

An ODE of the form $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$ is called **homogeneous** (not to be
confused with the linearity sense). The substitution $v = y/x$, i.e., $y = vx$, gives $y' = v + xv'$,
so the equation becomes:

$$v + x\frac{dv}{dx} = F(v) \implies x\frac{dv}{dx} = F(v) - v$$

This is separable: $\frac{dv}{F(v) - v} = \frac{dx}{x}$.

### 2.11 Worked Example: Homogeneous Equation

**Problem.** Solve $y' = \frac{x^2 + y^2}{xy}$.

<details>
<summary>Solution</summary>

*Solution.* Rewrite as $y' = \frac{1 + (y/x)^2}{y/x}$. This is homogeneous with $F(v) = \frac{1 + v^2}{v}$.

Set $y = vx$: $v + xv' = \frac{1 + v^2}{v} = v + \frac{1}{v}$.

So $xv' = \frac{1}{v}$, giving $v\, dv = \frac{dx}{x}$.

Integrating: $\frac{v^2}{2} = \ln|x| + C$. Since $v = y/x$:

$\frac{y^2}{2x^2} = \ln|x| + C \implies y^2 = 2x^2(\ln|x| + C)$. $\blacksquare$

</details>

### 2.12 Riccati Equations

A **Riccati equation** has the form

$$\frac{dy}{dx} = q_0(x) + q_1(x)y + q_2(x)y^2$$

If a particular solution $y_1(x)$ is known, the substitution $y = y_1 + \frac{1}{v}$ reduces the
Riccati equation to a linear first-order equation in $v$:

$$\frac{dv}{dx} = -(q_1 + 2q_2 y_1)v - q_2$$

**Example.** Solve $y' = 1 + x^2 - 2xy + y^2$ given that $y_1 = x$ is a particular solution.

Substituting $y = x + 1/v$: $y' = 1 - v'/v^2$. The equation becomes

$1 - v'/v^2 = 1 + x^2 - 2x(x + 1/v) + (x + 1/v)^2$

$1 - v'/v^2 = 1 + x^2 - 2x^2 - 2x/v + x^2 + 2x/v + 1/v^2$

$1 - v'/v^2 = 1 + 1/v^2$

$-v'/v^2 = 1/v^2 \implies v' = -1$

So $v = -x + C$, and $y = x + \frac{1}{C - x}$.

### 2.13 Worked Example: Newton's Law of Cooling

**Problem.** A body at $90\degree\mathrm{C}$ is placed in a room at $20\degree\mathrm{C}$. After 10
minutes, its temperature is $60\degree\mathrm{C}$. When will it reach $30\degree\mathrm{C}$?

<details>
<summary>Solution</summary>

*Solution.* Newton's law of cooling: $\frac{dT}{dt} = -k(T - 20)$, $T(0) = 90$.

This is separable: $\frac{dT}{T - 20} = -k\, dt$.

$\ln(T - 20) = -kt + C \implies T = 20 + Ce^{-kt}$.

$T(0) = 90 \implies C = 70$, so $T = 20 + 70e^{-kt}$.

$T(10) = 60 \implies 60 = 20 + 70e^{-10k} \implies e^{-10k} = 4/7$.

$k = -\frac{1}{10}\ln(4/7) = \frac{\ln(7/4)}{10}$.

For $T = 30$: $30 = 20 + 70e^{-kt} \implies e^{-kt} = 1/7 \implies t = \frac{\ln 7}{k} = \frac{10 \ln 7}{\ln(7/4)}$.

Numerically: $t \approx \frac{10 \cdot 1.946}{0.5596} \approx 34.8$ minutes. $\blacksquare$

</details>

### 2.14 Worked Example: Mixing Problem

**Problem.** A tank contains 100 L of brine with 20 kg of salt. Fresh water enters at 3 L/min and
the mixture leaves at 3 L/min. Find the amount of salt after 30 minutes.

<details>
<summary>Solution</summary>

*Solution.* Let $Q(t)$ be the amount of salt (kg) at time $t$ (min).

Rate of change: $\frac{dQ}{dt} = \mathrm{rate\; in} - \mathrm{rate\; out} = 0 - 3 \cdot \frac{Q}{100}$.

$\frac{dQ}{dt} = -\frac{3Q}{100}$, $Q(0) = 20$.

This is separable: $\frac{dQ}{Q} = -\frac{3}{100}\, dt$.

$\ln Q = -\frac{3t}{100} + C \implies Q = Ce^{-3t/100}$.

$Q(0) = 20 \implies Q = 20e^{-3t/100}$.

At $t = 30$: $Q(30) = 20e^{-0.9} \approx 20 \cdot 0.4066 \approx 8.13$ kg. $\blacksquare$

</details>

### 2.15 Worked Example: Integrating Factor

**Problem.** Solve $(3xy + 2y^2)\, dx + (x^2 + 2xy)\, dy = 0$.

<details>
<summary>Solution</summary>

*Solution.* $M = 3xy + 2y^2$, $N = x^2 + 2xy$.

$M_y = 3x + 4y$, $N_x = 2x + 2y$. Since $M_y \neq N_x$, not exact.

Check Case 1: $\frac{M_y - N_x}{N} = \frac{x + 2y}{x^2 + 2xy} = \frac{x + 2y}{x(x + 2y)} = \frac{1}{x}$.

This depends only on $x$, so $\mu(x) = e^{\int 1/x\, dx} = x$.

Multiply: $(3x^2y + 2xy^2)\, dx + (x^3 + 2x^2y)\, dy = 0$.

$\tilde{M} = 3x^2y + 2xy^2$, $\tilde{N} = x^3 + 2x^2y$.

$\tilde{M}_y = 3x^2 + 4xy = \tilde{N}_x$. Now exact.

$\Psi_x = 3x^2y + 2xy^2 \implies \Psi = x^3y + x^2y^2 + h(y)$.

$\Psi_y = x^3 + 2x^2y + h'(y) = x^3 + 2x^2y \implies h'(y) = 0 \implies h(y) = 0$.

Solution: $x^3y + x^2y^2 = C$. $\blacksquare$

</details>

### 2.16 Orthogonal Trajectories

Given a one-parameter family of curves $F(x, y, C) = 0$, the **orthogonal trajectories** are curves
that intersect every member of the family at right angles. To find them:

1. Find the differential equation $\frac{dy}{dx} = f(x, y)$ of the given family.
2. Replace $\frac{dy}{dx}$ with $-\frac{dx}{dy}$ (equivalently, negate the slope).
3. Solve the new ODE.

**Example.** Find the orthogonal trajectories of $y = Cx^2$.

$\frac{dy}{dx} = 2Cx = \frac{2y}{x}$.

Orthogonal trajectories satisfy $\frac{dy}{dx} = -\frac{x}{2y}$.

Separating: $2y\, dy = -x\, dx$. Integrating: $y^2 = -\frac{x^2}{2} + C$, or $\frac{x^2}{2} + y^2 = C$.
These are ellipses.

### 2.17 Common Pitfalls for First-Order ODEs

:::caution Common Pitfall When separating variables, dividing by $h(y)$ can lose solutions where
$h(y) = 0$. Always check whether $h(y) = 0$ yields valid solutions before dividing. :::

:::caution Common Pitfall Not every first-order ODE falls into a standard category. Equations like
$y' = e^{x^2} + \sin(y^2)$ cannot be solved by elementary methods and require numerical
techniques. :::

## 3. Second-Order Linear ODEs

### 3.1 General Theory

A **second-order linear ODE** has the form

$$y'' + p(x)y' + q(x)y = g(x)$$

**Theorem 3.1.** If $y_1$ and $y_2$ are solutions of the homogeneous equation $y'' + py' + qy = 0$,
then $c_1 y_1 + c_2 y_2$ is also a solution (superposition principle).

**Theorem 3.2 (Wronskian Criterion).** Two solutions $y_1, y_2$ of the homogeneous equation form a
**fundamental set** (i.e., span all solutions) if and only if their Wronskian is non-zero:

$$W(y_1, y_2)(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} \neq 0$$

**Abel's identity** states that $W(x) = W(x_0) e^{-\int_{x_0}^x p(t)\, dt}$.

**Theorem 3.3.** The general solution of $y'' + py' + qy = g$ is $y = y_h + y_p$, where $y_h$ is the
general solution of the homogeneous equation and $y_p$ is any particular solution.

### 3.2 Homogeneous Equations with Constant Coefficients

For $y'' + ay' + by = 0$ with $a, b$ constants, try $y = e^{rx}$:

$$r^2 + ar + b = 0$$

**Case 1: Two distinct real roots $r_1 \neq r_2$.** $y_h = c_1 e^{r_1 x} + c_2 e^{r_2 x}$.

**Case 2: Repeated root $r$.** $y_h = c_1 e^{rx} + c_2 x e^{rx}$.

**Case 3: Complex conjugate roots $r = \alpha \pm i\beta$.**
$y_h = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))$.

### 3.3 Worked Example: Homogeneous Equation

**Problem.** Solve $y'' - 5y' + 6y = 0$ with $y(0) = 1$, $y'(0) = 0$.

*Solution.* Characteristic equation: $r^2 - 5r + 6 = (r-2)(r-3) = 0$. Roots: $r = 2, 3$.

$y_h = c_1 e^{2x} + c_2 e^{3x}$.

$y(0) = c_1 + c_2 = 1$. $y'(0) = 2c_1 + 3c_2 = 0$. Solving: $c_1 = 3$, $c_2 = -2$.

$y = 3e^{2x} - 2e^{3x}$. $\blacksquare$

### 3.4 Worked Example: Complex Roots

**Problem.** Solve $y'' + 2y' + 5y = 0$ with $y(0) = 1$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

*Solution.* Characteristic equation: $r^2 + 2r + 5 = 0$.

$r = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = -1 \pm 2i$.

So $\alpha = -1$, $\beta = 2$.

$y = e^{-x}(c_1 \cos(2x) + c_2 \sin(2x))$.

$y(0) = c_1 = 1$.

$y' = -e^{-x}(\cos(2x) + c_2 \sin(2x)) + e^{-x}(-2\sin(2x) + 2c_2 \cos(2x))$.

$y'(0) = -1 + 2c_2 = 0 \implies c_2 = 1/2$.

$y = e^{-x}\left(\cos(2x) + \frac{1}{2}\sin(2x)\right)$. $\blacksquare$

</details>

### 3.5 Worked Example: Repeated Roots

**Problem.** Solve $y'' - 4y' + 4y = 0$ with $y(0) = 1$, $y'(0) = 3$.

<details>
<summary>Solution</summary>

*Solution.* Characteristic equation: $r^2 - 4r + 4 = (r - 2)^2 = 0$. Repeated root $r = 2$.

$y = c_1 e^{2x} + c_2 xe^{2x}$.

$y(0) = c_1 = 1$.

$y' = 2c_1 e^{2x} + c_2 e^{2x} + 2c_2 xe^{2x}$.

$y'(0) = 2c_1 + c_2 = 3 \implies 2 + c_2 = 3 \implies c_2 = 1$.

$y = e^{2x} + xe^{2x} = e^{2x}(1 + x)$. $\blacksquare$

</details>

### 3.6 Nonhomogeneous Equations: Undetermined Coefficients

For equations $y'' + ay' + by = g(x)$ where $g(x)$ is a polynomial, exponential, sine, cosine, or
products of these, guess the form of $y_p$ and solve for coefficients.

| $g(x)$                               | Guess for $y_p$                  |
| ------------------------------------ | -------------------------------- |
| $P_n(x)$                             | $A_n x^n + \cdots + A_0$         |
| $e^{ax}$                             | $Ae^{ax}$                        |
| $\sin(bx)$ or $\cos(bx)$             | $A\sin(bx) + B\cos(bx)$          |
| $e^{ax} P_n(x)$                      | $e^{ax}(A_n x^n + \cdots + A_0)$ |
| $e^{ax}\sin(bx)$ or $e^{ax}\cos(bx)$ | $e^{ax}(A\sin(bx) + B\cos(bx))$  |

**Rule.** If any term of the guess is a solution of the homogeneous equation, multiply by $x$ (or
$x^2$ if already multiplied by $x$).

### 3.7 Worked Example: Undetermined Coefficients

**Problem.** Solve $y'' - y = 2e^x$.

*Solution.* Homogeneous: $r^2 - 1 = 0$, roots $\pm 1$. $y_h = c_1 e^x + c_2 e^{-x}$.

Since $e^x$ is a homogeneous solution, guess $y_p = Axe^x$. $y_p' = Ae^x + Axe^x$,
$y_p'' = 2Ae^x + Axe^x$. $y_p'' - y_p = (2Ae^x + Axe^x) - Axe^x = 2Ae^x = 2e^x$, so $A = 1$.

$y = c_1 e^x + c_2 e^{-x} + xe^x$. $\blacksquare$

### 3.8 Worked Example: Undetermined Coefficients with Polynomial

**Problem.** Solve $y'' + 3y' + 2y = x^2 + 1$.

<details>
<summary>Solution</summary>

*Solution.* Homogeneous: $r^2 + 3r + 2 = (r+1)(r+2) = 0$, roots $-1, -2$.

$y_h = c_1 e^{-x} + c_2 e^{-2x}$.

Guess $y_p = Ax^2 + Bx + C$. Then $y_p' = 2Ax + B$, $y_p'' = 2A$.

Substituting: $2A + 3(2Ax + B) + 2(Ax^2 + Bx + C) = x^2 + 1$.

$2A + 6Ax + 3B + 2Ax^2 + 2Bx + 2C = x^2 + 1$.

Matching coefficients:
- $x^2$: $2A = 1 \implies A = 1/2$
- $x$: $6A + 2B = 0 \implies 3 + 2B = 0 \implies B = -3/2$
- Constant: $2A + 3B + 2C = 1 \implies 1 - 9/2 + 2C = 1 \implies 2C = 9/2 \implies C = 9/4$

$y_p = \frac{x^2}{2} - \frac{3x}{2} + \frac{9}{4}$.

$y = c_1 e^{-x} + c_2 e^{-2x} + \frac{x^2}{2} - \frac{3x}{2} + \frac{9}{4}$. $\blacksquare$

</details>


### 3.8b Worked Example: Undetermined Coefficients with Product

**Problem.** Solve $y'' + 2y' + y = 3e^{-x}\sin x$.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 + 2r + 1 = (r+1)^2 = 0$. Repeated root $r = -1$.

$y_h = c_1 e^{-x} + c_2 xe^{-x}$.

The forcing is $e^{-x}\sin x$, so guess $y_p = e^{-x}(A\sin x + B\cos x)$.

$y_p' = -e^{-x}(A\sin x + B\cos x) + e^{-x}(A\cos x - B\sin x) = e^{-x}((A - B)\cos x - (A + B)\sin x)$.

$y_p'' = -e^{-x}((A - B)\cos x - (A + B)\sin x) + e^{-x}(-(A - B)\sin x - (A + B)\cos x)$

$= e^{-x}(-2A\cos x + 2B\sin x)$.

$y_p'' + 2y_p' + y_p = e^{-x}(-2A\cos x + 2B\sin x) + 2e^{-x}((A - B)\cos x - (A + B)\sin x) + e^{-x}(A\sin x + B\cos x)$

$= e^{-x}[(-2A + 2A - 2B + B)\cos x + (2B - 2A - 2B + A)\sin x]$

$= e^{-x}[(-B)\cos x + (-A)\sin x]$.

Setting equal to $3e^{-x}\sin x$: $-B = 0$ and $-A = 3$, so $A = -3$, $B = 0$.

$y = c_1 e^{-x} + c_2 xe^{-x} - 3e^{-x}\sin x$. $\blacksquare$

</details>
### 3.9 Resonance

Consider the forced harmonic oscillator

$$y'' + \omega_0^2 y = F_0 \cos(\omega t)$$

**Case 1: $\omega \neq \omega_0$ (Non-resonant).** The particular solution is
$y_p = \frac{F_0}{\omega_0^2 - \omega^2}\cos(\omega t)$, with bounded amplitude.

**Case 2: $\omega = \omega_0$ (Resonant).** Since $\cos(\omega_0 t)$ is a homogeneous solution,
guess $y_p = At\sin(\omega_0 t)$. Substituting:

$y_p'' + \omega_0^2 y_p = 2A\omega_0 \cos(\omega_0 t) - A\omega_0^2 t\sin(\omega_0 t) + A\omega_0^2 t\sin(\omega_0 t) = 2A\omega_0 \cos(\omega_0 t)$

Setting equal to $F_0 \cos(\omega_0 t)$: $A = \frac{F_0}{2\omega_0}$.

$$y_p = \frac{F_0}{2\omega_0} t \sin(\omega_0 t)$$

The amplitude grows linearly with $t$ --- this is **resonance**. Physically, the system absorbs energy
from the periodic forcing at its natural frequency, causing unbounded oscillations.

**Worked Example.** Solve $y'' + 9y = 6\cos(3t)$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

*Solution.* $\omega_0 = 3$, $\omega = 3$, so this is the resonant case.

Homogeneous: $r^2 + 9 = 0$, $r = \pm 3i$. $y_h = c_1 \cos(3t) + c_2 \sin(3t)$.

$y_p = \frac{6}{2 \cdot 3} t\sin(3t) = t\sin(3t)$.

$y = c_1 \cos(3t) + c_2 \sin(3t) + t\sin(3t)$.

$y(0) = c_1 = 0$.

$y' = 3c_2 \cos(3t) + \sin(3t) + 3t\cos(3t)$.

$y'(0) = 3c_2 = 0 \implies c_2 = 0$.

$y = t\sin(3t)$. $\blacksquare$

</details>

### 3.10 Variation of Parameters

**Theorem 3.4 (Variation of Parameters).** For $y'' + p(x)y' + q(x)y = g(x)$, let $y_1, y_2$ be a
fundamental set of solutions of the homogeneous equation. Then a particular solution is

$$y_p = -y_1 \int \frac{y_2 g}{W}\, dx + y_2 \int \frac{y_1 g}{W}\, dx$$

where $W = W(y_1, y_2) = y_1 y_2' - y_2 y_1'$.

*Proof.* Seek $y_p = u_1(x)y_1(x) + u_2(x)y_2(x)$. Impose the constraint $u_1'y_1 + u_2'y_2 = 0$.
Then $y_p' = u_1 y_1' + u_2 y_2'$ and $y_p'' = u_1' y_1' + u_1 y_1'' + u_2' y_2' + u_2 y_2''$.
Substituting into the ODE:
$(u_1'y_1' + u_2'y_2') + u_1(y_1'' + py_1' + qy_1) + u_2(y_2'' + py_2' + qy_2) = g$. Since
$y_1, y_2$ satisfy the homogeneous equation, this reduces to $u_1'y_1' + u_2'y_2' = g$. Together
with $u_1'y_1 + u_2'y_2 = 0$, solving gives the formulas above. $\blacksquare$

### 3.11 Worked Example: Variation of Parameters

**Problem.** Solve $y'' + y = \tan x$ using variation of parameters.

*Solution.* $y_1 = \cos x$, $y_2 = \sin x$. $W = \cos x \cdot \cos x - \sin x \cdot (-\sin x) = 1$.

$u_1' = -\frac{y_2 g}{W} = -\sin x \tan x = -\frac{\sin^2 x}{\cos x} = -(1 - \cos^2 x)/\cos x = -\sec x + \cos x$.

$u_1 = -\ln|\sec x + \tan x| + \sin x$.

$u_2' = \frac{y_1 g}{W} = \cos x \tan x = \sin x$.

$u_2 = -\cos x$.

$y_p = (-\ln|\sec x + \tan x| + \sin x)\cos x + (-\cos x)\sin x = -\cos x \ln|\sec x + \tan x|$.

$y = c_1 \cos x + c_2 \sin x - \cos x \ln|\sec x + \tan x|$. $\blacksquare$

### 3.12 Reduction of Order

**Theorem 3.5.** Given one solution $y_1(x)$ of $y'' + p(x)y' + q(x)y = 0$, a second linearly
independent solution is obtained by setting $y_2 = y_1 \int \frac{e^{-\int p(x)\, dx}}{y_1^2}\, dx$.

*Proof.* Seek $y_2 = v(x) y_1(x)$. Then $y_2' = v'y_1 + vy_1'$ and
$y_2'' = v''y_1 + 2v'y_1' + vy_1''$. Substituting into the ODE:

$v''y_1 + 2v'y_1' + vy_1'' + p(v'y_1 + vy_1') + qvy_1 = 0$

$v''y_1 + v'(2y_1' + py_1) + v(y_1'' + py_1' + qy_1) = 0$

Since $y_1$ satisfies the ODE, the coefficient of $v$ vanishes:

$v''y_1 + v'(2y_1' + py_1) = 0$

Let $w = v'$. Then $w'y_1 + w(2y_1' + py_1) = 0$, a separable first-order ODE:

$\frac{w'}{w} = -\frac{2y_1' + py_1}{y_1} = -2\frac{y_1'}{y_1} - p$

$\ln w = -2\ln y_1 - \int p\, dx \implies w = \frac{e^{-\int p\, dx}}{y_1^2}$

Since $w = v'$, we obtain the result. $\blacksquare$

**Worked Example.** Given that $y_1 = e^x$ solves $y'' - 2y' + y = 0$, find a second solution.

<details>
<summary>Solution</summary>

*Solution.* Here $p(x) = -2$, so $e^{-\int p\, dx} = e^{2x}$.

$y_2 = e^x \int \frac{e^{2x}}{e^{2x}}\, dx = e^x \int 1\, dx = xe^x$.

This gives $y_h = c_1 e^x + c_2 xe^x$, consistent with the repeated-root case ($r = 1$ with
multiplicity 2). $\blacksquare$

</details>

### 3.13 Euler-Cauchy Equations

An **Euler-Cauchy (equidimensional) equation** has the form

$$x^2 y'' + axy' + by = 0, \quad x > 0$$

The substitution $y = x^r$ gives the characteristic equation

$$r(r - 1) + ar + b = r^2 + (a - 1)r + b = 0$$

**Case 1: Two distinct real roots $r_1 \neq r_2$.**
$y_h = c_1 x^{r_1} + c_2 x^{r_2}$.

**Case 2: Repeated root $r$.**
$y_h = c_1 x^r + c_2 x^r \ln x$.

**Case 3: Complex roots $r = \alpha \pm i\beta$.**
$y_h = x^{\alpha}(c_1 \cos(\beta \ln x) + c_2 \sin(\beta \ln x))$.

### 3.14 Worked Example: Euler-Cauchy Equation

**Problem.** Solve $x^2 y'' - 3xy' + 4y = 0$.

<details>
<summary>Solution</summary>

*Solution.* Try $y = x^r$: $r(r-1) - 3r + 4 = r^2 - 4r + 4 = (r-2)^2 = 0$.

Repeated root $r = 2$.

$y = c_1 x^2 + c_2 x^2 \ln x$. $\blacksquare$

</details>

**Worked Example.** Solve $x^2 y'' + xy' + y = 0$.

<details>
<summary>Solution</summary>

*Solution.* $r(r-1) + r + 1 = r^2 + 1 = 0$. Roots $r = \pm i$.

Here $\alpha = 0$, $\beta = 1$.

$y = c_1 \cos(\ln x) + c_2 \sin(\ln x)$. $\blacksquare$

</details>

### 3.15 Higher-Order Linear ODEs

For $y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0$:

- Characteristic equation $r^n + a_{n-1}r^{n-1} + \cdots + a_0 = 0$.
- For root $r$ of multiplicity $m$: include $e^{rx}, xe^{rx}, \ldots, x^{m-1}e^{rx}$.
- For complex roots $\alpha \pm i\beta$ of multiplicity $m$: include
  $e^{\alpha x} x^k \cos(\beta x)$ and $e^{\alpha x} x^k \sin(\beta x)$ for $k = 0, \ldots, m - 1$.

### 3.16 Spring-Mass-Damper Systems

A mass $m$ on a spring with spring constant $k$ and damping coefficient $c$, subject to external force
$F(t)$, satisfies

$$mx'' + cx' + kx = F(t)$$

Dividing by $m$ and setting $\omega_0 = \sqrt{k/m}$, $\gamma = c/(2m)$:

$$x'' + 2\gamma x' + \omega_0^2 x = \frac{F(t)}{m}$$

The homogeneous solution depends on the discriminant $\gamma^2 - \omega_0^2$:

| Condition              | Type         | Homogeneous Solution                                    |
| ---------------------- | ------------ | ------------------------------------------------------- |
| $\gamma^2 \lt{} \omega_0^2$ | Underdamped  | $e^{-\gamma t}(c_1 \cos(\omega_d t) + c_2 \sin(\omega_d t))$, $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$ |
| $\gamma^2 = \omega_0^2$ | Critical     | $e^{-\gamma t}(c_1 + c_2 t)$                           |
| $\gamma^2 > \omega_0^2$  | Overdamped   | $c_1 e^{r_1 t} + c_2 e^{r_2 t}$, $r_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$ |

### 3.17 Common Pitfalls for Second-Order ODEs

:::caution Common Pitfall When using undetermined coefficients, always check whether your guess
overlaps with the homogeneous solution. For $y'' - 4y = e^{2x}$, guessing $y_p = Ae^{2x}$ fails
because $e^{2x}$ satisfies the homogeneous equation. You must use $y_p = Axe^{2x}$ instead. :::

:::caution Common Pitfall For Euler-Cauchy equations, the substitution $y = x^r$ only works for $x > 0$.
For $x < 0$, substitute $x = -e^t$ or use $y = (-x)^r$. :::

:::caution Common Pitfall Variation of parameters always works but can lead to difficult integrals.
If the forcing term $g(x)$ is a polynomial, exponential, sine, or cosine (or products of these),
prefer undetermined coefficients --- it is much faster. :::


### 3.18 Abel's Identity (Proof)

**Theorem 3.6 (Abel's Identity).** If $y_1, y_2$ are solutions of $y'' + p(x)y' + q(x)y = 0$,
then their Wronskian satisfies

$$W(x) = W(x_0) e^{-\int_{x_0}^x p(t)\, dt}$$

*Proof.* Since $y_1, y_2$ satisfy the ODE:

$y_1'' = -py_1' - qy_1$ and $y_2'' = -py_2' - qy_2$.

$W' = y_1 y_2'' + y_1' y_2' - y_1'' y_2 - y_1' y_2'$

$= y_1(-py_2' - qy_2) - (-py_1' - qy_1)y_2$

$= -p(y_1 y_2' - y_1' y_2) = -pW$.

So $W' + pW = 0$, giving $W = Ce^{-\int p\, dx}$, and evaluating at $x_0$ gives the result. $\blacksquare$

_Corollary._ $W(x)$ is either identically zero or never zero.

### 3.19 Worked Example: Variation of Parameters (Second Example)

**Problem.** Solve $y'' - 4y = xe^x$ using variation of parameters.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 - 4 = 0$, $r = \pm 2$. $y_1 = e^{2x}$, $y_2 = e^{-2x}$.

$W = e^{2x}(-2e^{-2x}) - e^{-2x}(2e^{2x}) = -4$.

$u_1' = -\frac{y_2 g}{W} = -\frac{e^{-2x} \cdot xe^x}{-4} = \frac{xe^{-x}}{4}$.

$u_1 = \frac{1}{4}\int xe^{-x}\, dx = \frac{1}{4}(-xe^{-x} - e^{-x}) + C_1 = -\frac{(x+1)e^{-x}}{4}$.

$u_2' = \frac{y_1 g}{W} = \frac{e^{2x} \cdot xe^x}{-4} = -\frac{xe^{3x}}{4}$.

$u_2 = -\frac{1}{4}\int xe^{3x}\, dx = -\frac{1}{4}\left(\frac{xe^{3x}}{3} - \frac{e^{3x}}{9}\right) + C_2 = -\frac{(3x - 1)e^{3x}}{36}$.

$y_p = u_1 y_1 + u_2 y_2 = -\frac{(x+1)e^{-x}}{4} \cdot e^{2x} + \left(-\frac{(3x-1)e^{3x}}{36}\right) \cdot e^{-2x}$

$= -\frac{(x+1)e^x}{4} - \frac{(3x-1)e^x}{36} = e^x\left(-\frac{9(x+1)}{36} - \frac{3x - 1}{36}\right) = e^x\left(\frac{-9x - 9 - 3x + 1}{36}\right) = -\frac{(x + 2)e^x}{9}$.

$y = c_1 e^{2x} + c_2 e^{-2x} - \frac{(x+2)e^x}{9}$. $\blacksquare$

</details>
## 4. Systems of ODEs

### 4.1 First-Order Linear Systems

A system of first-order linear ODEs can be written in matrix form:

$$\mathbf{x}' = A\mathbf{x} + \mathbf{f}(t)$$

where $A$ is an $n \times n$ matrix and $\mathbf{x}, \mathbf{f} \in \mathbb{R}^n$.

### 4.2 Homogeneous Systems with Constant Coefficients

For $\mathbf{x}' = A\mathbf{x}$, try $\mathbf{x} = \mathbf{v}e^{\lambda t}$:

$$\lambda \mathbf{v} = A\mathbf{v}$$

So $\lambda$ is an eigenvalue of $A$ and $\mathbf{v}$ is the corresponding eigenvector.

**Case 1: $A$ has $n$ distinct real eigenvalues.** The general solution is

$$\mathbf{x} = c_1 \mathbf{v}_1 e^{\lambda_1 t} + \cdots + c_n \mathbf{v}_n e^{\lambda_n t}$$

**Case 2: $A$ has a repeated eigenvalue $\lambda$ with algebraic multiplicity $m$ and geometric
multiplicity $k \lt{} m$.** Include terms involving $t^j e^{\lambda t}$ where generalized
eigenvectors fill out the solution space.

**Case 3: Complex eigenvalues $\lambda = \alpha \pm i\beta$ with eigenvector
$\mathbf{v} = \mathbf{a} \pm i\mathbf{b}$.** The real solutions are
$e^{\alpha t}(\mathbf{a}\cos(\beta t) - \mathbf{b}\sin(\beta t))$ and
$e^{\alpha t}(\mathbf{a}\sin(\beta t) + \mathbf{b}\cos(\beta t))$.

### 4.3 The Matrix Exponential

**Definition.** $e^{At} = \sum_{k=0}^{\infty} \frac{A^k t^k}{k!}$.

**Theorem 4.1.** The solution to $\mathbf{x}' = A\mathbf{x}$ with $\mathbf{x}(0) = \mathbf{x}_0$ is
$\mathbf{x}(t) = e^{At}\mathbf{x}_0$.

**Proposition 4.2.** If $A$ is diagonalizable as $A = PDP^{-1}$, then $e^{At} = Pe^{Dt}P^{-1}$,
where $e^{Dt} = \mathrm{diag}(e^{\lambda_1 t}, \ldots, e^{\lambda_n t})$.

### 4.4 Worked Example: Distinct Real Eigenvalues

**Problem.** Solve $\mathbf{x}' = \begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix}\mathbf{x}$.

*Solution.* Characteristic equation:
$\det(A - \lambda I) = \lambda^2 + 3\lambda + 2 = (\lambda + 1)(\lambda + 2) = 0$. Eigenvalues:
$\lambda_1 = -1$, $\lambda_2 = -2$.

For $\lambda_1 = -1$:
$(A + I)\mathbf{v} = \begin{pmatrix} 1 & 1 \\ -2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$\mathbf{v}_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

For $\lambda_2 = -2$:
$(A + 2I)\mathbf{v} = \begin{pmatrix} 2 & 1 \\ -2 & -1 \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{-t} + c_2 \begin{pmatrix} 1 \\ -2 \end{pmatrix} e^{-2t}$.
$\blacksquare$

### 4.5 Worked Example: Complex Eigenvalues

**Problem.** Solve $\mathbf{x}' = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

*Solution.* $\det(A - \lambda I) = \lambda^2 + 2 = 0$. Eigenvalues: $\lambda = \pm i\sqrt{2}$.

For $\lambda = i\sqrt{2}$:
$\begin{pmatrix} -i\sqrt{2} & -2 \\ 1 & -i\sqrt{2} \end{pmatrix}\mathbf{v} = \mathbf{0}$.

From the first row: $-i\sqrt{2}\, v_1 - 2v_2 = 0$, so $v_2 = -\frac{i\sqrt{2}}{2}v_1$.

With $v_1 = 2$: $\mathbf{v} = \begin{pmatrix} 2 \\ 0 \end{pmatrix} + i\begin{pmatrix} 0 \\ -\sqrt{2} \end{pmatrix}$.

So $\mathbf{a} = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 0 \\ -\sqrt{2} \end{pmatrix}$.

$\mathbf{x}(t) = c_1\left[\mathbf{a}\cos(\sqrt{2}\, t) - \mathbf{b}\sin(\sqrt{2}\, t)\right] + c_2\left[\mathbf{a}\sin(\sqrt{2}\, t) + \mathbf{b}\cos(\sqrt{2}\, t)\right]$

$= c_1 \begin{pmatrix} 2\cos(\sqrt{2}\, t) \\ \sqrt{2}\sin(\sqrt{2}\, t) \end{pmatrix} + c_2 \begin{pmatrix} 2\sin(\sqrt{2}\, t) \\ -\sqrt{2}\cos(\sqrt{2}\, t) \end{pmatrix}$. $\blacksquare$

</details>

### 4.6 Worked Example: Repeated Eigenvalues

**Problem.** Solve $\mathbf{x}' = \begin{pmatrix} 2 & 1 \\ -1 & 4 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

*Solution.* $\det(A - \lambda I) = (2 - \lambda)(4 - \lambda) + 1 = \lambda^2 - 6\lambda + 9 = (\lambda - 3)^2 = 0$.

Repeated eigenvalue $\lambda = 3$ with algebraic multiplicity 2.

$(A - 3I) = \begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix}$.

Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Only one eigenvector (geometric multiplicity 1), so we need a generalized eigenvector.

Find $\mathbf{w}$ such that $(A - 3I)\mathbf{w} = \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$:

$\begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix}\begin{pmatrix} w_1 \\ w_2 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

$-w_1 + w_2 = 1$. Choose $w_1 = 0$, then $w_2 = 1$. So $\mathbf{w} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} e^{3t} + c_2 \left[\begin{pmatrix} 1 \\ 1 \end{pmatrix} t e^{3t} + \begin{pmatrix} 0 \\ 1 \end{pmatrix} e^{3t}\right]$

$= e^{3t}\left[c_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} t \\ t + 1 \end{pmatrix}\right]$. $\blacksquare$

</details>

### 4.7 Fundamental Matrix

**Definition.** A **fundamental matrix** $\Phi(t)$ for the system $\mathbf{x}' = A\mathbf{x}$ is an
$n \times n$ matrix whose columns form a fundamental set of solutions.

**Proposition 4.3.** $\Phi(t)$ satisfies $\Phi' = A\Phi$, and the general solution is
$\mathbf{x}(t) = \Phi(t)\mathbf{c}$ for $\mathbf{c} \in \mathbb{R}^n$.

**Proposition 4.4.** The matrix exponential $e^{At}$ is a fundamental matrix with $e^{A \cdot 0} = I$.
Any fundamental matrix can be written as $\Phi(t) = e^{At}\Phi(0)$.

### 4.8 Matrix Exponential Properties

**Theorem 4.5.** The matrix exponential satisfies:

1. $e^{A \cdot 0} = I$
2. $\frac{d}{dt}e^{At} = Ae^{At} = e^{At}A$
3. $e^{At}e^{As} = e^{A(t+s)}$
4. $(e^{At})^{-1} = e^{-At}$
5. If $AB = BA$, then $e^{A+B} = e^A e^B$

*Proof of (1).* $e^{A \cdot 0} = \sum_{k=0}^{\infty} \frac{A^k 0^k}{k!} = I$. $\blacksquare$

*Proof of (2).* $\frac{d}{dt}e^{At} = \sum_{k=1}^{\infty} \frac{A^k t^{k-1}}{(k-1)!} = A\sum_{j=0}^{\infty} \frac{A^j t^j}{j!} = Ae^{At}$.
Since $A$ commutes with itself, $Ae^{At} = e^{At}A$. $\blacksquare$

*Proof of (4).* From (3) with $s = -t$: $e^{At}e^{-At} = e^{A(t-t)} = e^0 = I$. $\blacksquare$

### 4.9 Phase Portrait Analysis for 2D Systems

For the linear system $\mathbf{x}' = A\mathbf{x}$ with $A$ a $2 \times 2$ matrix, the qualitative
behaviour near the origin is determined by the eigenvalues:

| Eigenvalues                  | Phase Portrait   | Stability             |
| ---------------------------- | ---------------- | --------------------- |
| $\lambda_1, \lambda_2 \lt{} 0$, real, distinct | Stable node | Asymptotically stable |
| $\lambda_1, \lambda_2 > 0$, real, distinct | Unstable node | Unstable |
| $\lambda_1 \lt{} 0 \lt{} \lambda_2$ | Saddle point | Unstable |
| $\lambda = \alpha \pm i\beta$, $\alpha \lt{} 0$ | Stable spiral | Asymptotically stable |
| $\lambda = \alpha \pm i\beta$, $\alpha > 0$ | Unstable spiral | Unstable |
| $\lambda = \pm i\beta$ | Center | (Marginally) stable |

_Remark._ The **trace-determinant plane** provides a convenient classification. Let
$\tau = \mathrm{tr}(A)$ and $\Delta = \det(A)$. The eigenvalues satisfy
$\lambda^2 - \tau\lambda + \Delta = 0$, so:

$$\lambda = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}$$

- $\tau^2 - 4\Delta > 0$: real eigenvalues (node or saddle)
- $\tau^2 - 4\Delta \lt{} 0$: complex eigenvalues (spiral or center)
- $\tau^2 - 4\Delta = 0$: repeated eigenvalues (proper or improper node)

Stability is determined by the sign of $\tau$: stable if $\tau \lt{} 0$, unstable if $\tau > 0$.


### 4.10 Nonhomogeneous Systems

For $\mathbf{x}' = A\mathbf{x} + \mathbf{f}(t)$, if $\Phi(t)$ is a fundamental matrix for the
homogeneous system, the general solution is

$$\mathbf{x}(t) = \Phi(t)\mathbf{c} + \Phi(t)\int \Phi^{-1}(s)\mathbf{f}(s)\, ds$$

**Worked Example.** Solve $\mathbf{x}' = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}\mathbf{x} + \begin{pmatrix} e^t \\ 0 \end{pmatrix}$.

<details>
<summary>Solution</summary>

_Solution._ Eigenvalues: $1$ and $2$. $\Phi(t) = \begin{pmatrix} e^t & 0 \\ 0 & e^{2t} \end{pmatrix}$.

$\Phi^{-1}(s) = \begin{pmatrix} e^{-s} & 0 \\ 0 & e^{-2s} \end{pmatrix}$.

$\Phi^{-1}(s)\mathbf{f}(s) = \begin{pmatrix} e^{-s} & 0 \\ 0 & e^{-2s} \end{pmatrix}\begin{pmatrix} e^s \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

$\int \Phi^{-1}(s)\mathbf{f}(s)\, ds = \begin{pmatrix} t \\ 0 \end{pmatrix}$.

$\mathbf{x}_p = \Phi(t)\begin{pmatrix} t \\ 0 \end{pmatrix} = \begin{pmatrix} te^t \\ 0 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} e^t \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ e^{2t} \end{pmatrix} + \begin{pmatrix} te^t \\ 0 \end{pmatrix}$. $\blacksquare$

</details>
## 5. Laplace Transforms

### 5.1 Definition

The **Laplace transform** of $f(t)$ (defined for $t \geq 0$) is

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty} e^{-st} f(t)\, dt$$

The transform exists when $f$ is piecewise continuous on $[0, \infty)$ and of **exponential order**:
$|f(t)| \leq Me^{at}$ for some $M, a > 0$.

### 5.2 Basic Properties

**Theorem 5.1 (Linearity).** $\mathcal{L}\{af + bg\} = a\mathcal{L}\{f\} + b\mathcal{L}\{g\}$.

**Theorem 5.2 (First Shifting).** $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$.

**Theorem 5.3 (Second Shifting).** $\mathcal{L}\{u_c(t)f(t - c)\} = e^{-cs}F(s)$, where $u_c(t)$ is
the unit step function.

**Theorem 5.4 (Derivative).** $\mathcal{L}\{f'(t)\} = sF(s) - f(0)$.

**Theorem 5.5 (n-th Derivative).**
$\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1}f(0) - \cdots - f^{(n-1)}(0)$.

**Theorem 5.6 (Integration).**
$\mathcal{L}\left\{\int_0^t f(\tau)\, d\tau\right\} = \frac{F(s)}{s}$.

**Theorem 5.7 (Convolution).** $\mathcal{L}\{f * g\} = F(s)G(s)$, where
$(f * g)(t) = \int_0^t f(\tau)g(t - \tau)\, d\tau$.

### 5.3 Proofs of Key Properties

*Proof of Linearity.* $\mathcal{L}\{af + bg\} = \int_0^{\infty} e^{-st}[af(t) + bg(t)]\, dt = a\int_0^{\infty} e^{-st}f(t)\, dt + b\int_0^{\infty} e^{-st}g(t)\, dt = aF(s) + bG(s)$. $\blacksquare$

*Proof of First Shifting Theorem.* $\mathcal{L}\{e^{at}f(t)\} = \int_0^{\infty} e^{-st} e^{at} f(t)\, dt = \int_0^{\infty} e^{-(s-a)t} f(t)\, dt = F(s - a)$. $\blacksquare$

*Proof of Derivative Property.* Integrating by parts with $u = e^{-st}$, $dv = f'(t)\, dt$:

$\mathcal{L}\{f'(t)\} = \left[e^{-st}f(t)\right]_0^{\infty} + s\int_0^{\infty} e^{-st}f(t)\, dt = -f(0) + sF(s) = sF(s) - f(0)$.

The boundary term vanishes at $\infty$ because $f$ is of exponential order. $\blacksquare$

*Proof of Integration Property.* Let $g(t) = \int_0^t f(\tau)\, d\tau$. Then $g'(t) = f(t)$ and $g(0) = 0$.
$\mathcal{L}\{f(t)\} = \mathcal{L}\{g'(t)\} = s\mathcal{L}\{g(t)\} - g(0) = s\mathcal{L}\{g(t)\}$.
Therefore $\mathcal{L}\{g(t)\} = F(s)/s$. $\blacksquare$

### 5.4 Common Laplace Transforms

| $f(t)$           | $F(s) = \mathcal{L}\{f(t)\}$ |
| ---------------- | ---------------------------- |
| $1$              | $1/s$                        |
| $t^n$            | $n!/s^{n+1}$                 |
| $e^{at}$         | $1/(s - a)$                  |
| $t^n e^{at}$     | $n!/(s - a)^{n+1}$           |
| $\sin(bt)$       | $b/(s^2 + b^2)$              |
| $\cos(bt)$       | $s/(s^2 + b^2)$              |
| $e^{at}\sin(bt)$ | $b/((s-a)^2 + b^2)$          |
| $e^{at}\cos(bt)$ | $(s-a)/((s-a)^2 + b^2)$      |
| $u_c(t)$         | $e^{-cs}/s$                  |
| $\delta(t - c)$  | $e^{-cs}$                    |

### 5.5 Solving IVPs with Laplace Transforms

**Procedure:**

1. Take the Laplace transform of both sides of the ODE.
2. Solve the resulting algebraic equation for $Y(s) = \mathcal{L}\{y(t)\}$.
3. Find the inverse Laplace transform to obtain $y(t)$.

### 5.6 Worked Example: Solving an IVP

**Problem.** Solve $y'' + 4y = \sin(2t)$, $y(0) = 0$, $y'(0) = 0$.

*Solution.* Taking Laplace transforms:

$s^2 Y + 4Y = \frac{2}{s^2 + 4}$

$(s^2 + 4)Y = \frac{2}{s^2 + 4}$

$Y = \frac{2}{(s^2 + 4)^2}$

To invert, use the convolution theorem:
$\mathcal{L}^{-1}\left\{\frac{1}{s^2 + 4}\right\} = \frac{1}{2}\sin(2t)$.

$y(t) = \frac{1}{2}\sin(2t) * \frac{1}{2}\sin(2t) = \frac{1}{4}\int_0^t \sin(2\tau)\sin(2(t - \tau))\, d\tau$

Using $\sin A \sin B = \frac{1}{2}(\cos(A - B) - \cos(A + B))$:

$y(t) = \frac{1}{8}\int_0^t [\cos(4\tau - 2t) - \cos(2t)]\, d\tau = \frac{1}{8}\left[\frac{\sin(4\tau - 2t)}{4}\right]_0^t - \frac{t}{8}\cos(2t)$

$= \frac{1}{32}[\sin(2t) - \sin(-2t)] - \frac{t}{8}\cos(2t) = \frac{\sin(2t)}{16} - \frac{t\cos(2t)}{8}$

$y(t) = \frac{\sin(2t) - 2t\cos(2t)}{16}$. $\blacksquare$


### 5.6b Worked Example: Partial Fractions for Inverse Laplace

**Problem.** Find $\mathcal{L}^{-1}\left\{\frac{1}{s(s^2 + 4)}
ight\}$.

<details>
<summary>Solution</summary>

_Solution._ Partial fractions: $\frac{1}{s(s^2 + 4)} = \frac{A}{s} + \frac{Bs + C}{s^2 + 4}$.

$1 = A(s^2 + 4) + (Bs + C)s = (A + B)s^2 + Cs + 4A$.

$s^2$: $A + B = 0$, $s$: $C = 0$, constant: $4A = 1 \implies A = 1/4$, $B = -1/4$.

$\frac{1}{s(s^2 + 4)} = \frac{1/4}{s} - \frac{s/4}{s^2 + 4}$.

$f(t) = \frac{1}{4} - \frac{1}{4}\cos 2t$. $\blacksquare$

</details>
### 5.7 Convolution Theorem

**Theorem 5.8 (Convolution).** If $F(s) = \mathcal{L}\{f(t)\}$ and $G(s) = \mathcal{L}\{g(t)\}$,
then

$$\mathcal{L}\{f * g\} = F(s)G(s)$$

where $(f * g)(t) = \int_0^t f(\tau)g(t - \tau)\, d\tau$.

*Proof.* $F(s)G(s) = \int_0^{\infty} e^{-s\tau} f(\tau)\, d\tau \cdot \int_0^{\infty} e^{-su} g(u)\, du$

$= \int_0^{\infty} \int_0^{\infty} e^{-s(\tau+u)} f(\tau) g(u)\, du\, d\tau$

Substitute $t = \tau + u$, $u = t - \tau$. For fixed $\tau$, $u$ ranges from $0$ to $\infty$, so $t$ ranges
from $\tau$ to $\infty$.

$= \int_0^{\infty} f(\tau)\left[\int_{\tau}^{\infty} e^{-st} g(t - \tau)\, dt\right] d\tau$

Swap the order of integration (Fubini):

$= \int_0^{\infty} e^{-st}\left[\int_0^t f(\tau) g(t - \tau)\, d\tau\right] dt = \mathcal{L}\{(f * g)(t)\}$. $\blacksquare$

### 5.8 Worked Example: Inverse Laplace Transform

**Problem.** Find $\mathcal{L}^{-1}\left\{\frac{3s + 1}{s^2 + 4s + 13}\right\}$.

<details>
<summary>Solution</summary>

*Solution.* Complete the square: $s^2 + 4s + 13 = (s + 2)^2 + 9$.

$\frac{3s + 1}{s^2 + 4s + 13} = \frac{3(s + 2) - 5}{(s + 2)^2 + 9} = 3 \cdot \frac{s + 2}{(s + 2)^2 + 9} - \frac{5}{3} \cdot \frac{3}{(s + 2)^2 + 9}$

Using the shifting theorem:

$\mathcal{L}^{-1}\left\{\frac{s + 2}{(s + 2)^2 + 9}\right\} = e^{-2t}\cos(3t)$

$\mathcal{L}^{-1}\left\{\frac{3}{(s + 2)^2 + 9}\right\} = e^{-2t}\sin(3t)$

$f(t) = 3e^{-2t}\cos(3t) - \frac{5}{3}e^{-2t}\sin(3t) = e^{-2t}\left(3\cos(3t) - \frac{5}{3}\sin(3t)\right)$. $\blacksquare$

</details>

### 5.9 Worked Example: IVP with Discontinuous Forcing

**Problem.** Solve $y'' + 3y' + 2y = u_2(t)$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

*Solution.* Take Laplace transforms:

$s^2 Y + 3sY + 2Y = \frac{e^{-2s}}{s}$

$(s^2 + 3s + 2)Y = \frac{e^{-2s}}{s}$

$Y = \frac{e^{-2s}}{s(s+1)(s+2)}$

First find the partial fraction decomposition of $\frac{1}{s(s+1)(s+2)}$:

$\frac{1}{s(s+1)(s+2)} = \frac{A}{s} + \frac{B}{s+1} + \frac{C}{s+2}$

$1 = A(s+1)(s+2) + Bs(s+2) + Cs(s+1)$

$s = 0$: $1 = 2A \implies A = 1/2$
$s = -1$: $1 = -B \implies B = -1$
$s = -2$: $1 = 2C \implies C = 1/2$

So $\mathcal{L}^{-1}\left\{\frac{1}{s(s+1)(s+2)}\right\} = \frac{1}{2} - e^{-t} + \frac{1}{2}e^{-2t}$.

By the second shifting theorem:

$y(t) = u_2(t)\left[\frac{1}{2} - e^{-(t-2)} + \frac{1}{2}e^{-2(t-2)}\right]$ for $t \geq 0$. $\blacksquare$

</details>

### 5.10 The Heaviside Function

The **Heaviside (unit step) function** is defined as

$$u_c(t) = \begin{cases} 0 & t \lt{} c \\ 1 & t \geq c \end{cases}$$

It models a sudden switch being turned on at time $t = c$. The second shifting theorem states:

$$\mathcal{L}\{u_c(t)f(t - c)\} = e^{-cs}F(s)$$

Conversely, if $Y(s) = e^{-cs}G(s)$, then
$y(t) = u_c(t) \cdot g(t - c)$ where $g = \mathcal{L}^{-1}\{G\}$.

### 5.11 The Dirac Delta Function

The **Dirac delta function** $\delta(t - c)$ satisfies
$\int_0^{\infty} \delta(t - c)f(t)\, dt = f(c)$ for continuous $f$. It models an instantaneous
impulse.

$\mathcal{L}\{\delta(t - c)\} = e^{-cs}$.

**Properties:**
- $\delta(t - c) = 0$ for $t \neq c$
- $\int_{-\infty}^{\infty} \delta(t - c)\, dt = 1$
- $\int_{-\infty}^{\infty} \delta(t - c)f(t)\, dt = f(c)$ (sifting property)

### 5.12 Worked Example: Impulse Response

**Problem.** An undamped spring-mass system ($m = 1$, $k = 4$) is struck by an impulse at $t = 0$:
$y'' + 4y = \delta(t)$, $y(0) = 0$, $y'(0) = 0$. Find $y(t)$.

<details>
<summary>Solution</summary>

*Solution.* Taking Laplace transforms:

$s^2 Y + 4Y = 1$

$Y = \frac{1}{s^2 + 4}$

$y(t) = \frac{1}{2}\sin(2t)$.

This is the **impulse response** (Green's function) for the operator $D^2 + 4$. $\blacksquare$

</details>

### 5.13 Worked Example: IVP with Laplace

**Problem.** Solve $y'' - 6y' + 9y = 6e^{3t}$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

*Solution.* Taking Laplace transforms:

$s^2 Y - 6sY + 9Y = \frac{6}{s - 3}$

$(s - 3)^2 Y = \frac{6}{s - 3}$

$Y = \frac{6}{(s - 3)^3}$

Using the table: $\mathcal{L}\{t^n e^{at}\} = \frac{n!}{(s-a)^{n+1}}$.

$y(t) = 6 \cdot \frac{t^2 e^{3t}}{2!} = 3t^2 e^{3t}$. $\blacksquare$

</details>

### 5.14 Common Pitfalls for Laplace Transforms

:::caution Common Pitfall The Laplace transform of $y'(t)$ is $sY(s) - y(0)$, not $sY(s)$. The
initial conditions are built into the transform. Forgetting them leads to incorrect solutions. :::

:::caution Common Pitfall When using the second shifting theorem, the time-shifted function must
be written as $u_c(t)f(t - c)$, not $u_c(t)f(t)$. The function $f$ must be shifted by the same
amount as the step. :::


### 5.15 Proof Sketch: Picard Iteration

The Picard-Lindelöf theorem can be proved constructively via **Picard iteration**. For the IVP
$y' = f(x, y)$, $y(x_0) = y_0$, define the sequence

$$\phi_0(x) = y_0, \quad \phi_{n+1}(x) = y_0 + \int_{x_0}^x f(t, \phi_n(t))\, dt$$

If $f$ and $\partial f/\partial y$ are continuous, one shows by induction that $(\phi_n)$ is uniformly
Cauchy on some interval $[x_0 - h, x_0 + h]$, hence converges uniformly to a function $\phi$.
Passing to the limit in the integral equation shows $\phi$ satisfies the ODE. Uniqueness follows
from the **Gronwall inequality** applied to the difference of two solutions.
## 6. Series Solutions

### 6.1 Power Series Method

For an ODE $y'' + p(x)y' + q(x)y = 0$ where $p$ and $q$ are analytic near $x_0$, substitute the
power series $y = \sum_{n=0}^{\infty} a_n (x - x_0)^n$ and solve for the coefficients.

### 6.2 Ordinary and Regular Singular Points

$x_0$ is an **ordinary point** if $p$ and $q$ are analytic at $x_0$. It is a **regular singular
point** if $(x - x_0)p(x)$ and $(x - x_0)^2 q(x)$ are analytic at $x_0$.

### 6.3 Frobenius Method

At a regular singular point $x_0 = 0$, substitute $y = \sum_{n=0}^{\infty} a_n x^{n + r}$. The
**indicial equation** determines the possible values of $r$.

**Theorem 6.1.** If the roots $r_1 \geq r_2$ of the indicial equation differ by a non-integer, there
are two linearly independent solutions of the form $x^{r_1}\sum a_n x^n$ and $x^{r_2}\sum b_n x^n$.

### 6.4 Bessel's Equation

Bessel's equation of order $\nu$:

$$x^2 y'' + xy' + (x^2 - \nu^2)y = 0$$

For $\nu \notin \mathbb{Z}$, the solutions are $J_\nu(x)$ and $J_{-\nu}(x)$ (Bessel functions of the
first kind). For $\nu = n \in \mathbb{N}$, the second solution is the Weber function $Y_n(x)$.


### 6.4b Worked Example: Higher-Order ODE

**Problem.** Solve $y''' - 6y'' + 11y' - 6y = 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^3 - 6r^2 + 11r - 6 = 0$.

Trying $r = 1$: $1 - 6 + 11 - 6 = 0$. Factor: $(r - 1)(r^2 - 5r + 6) = (r - 1)(r - 2)(r - 3) = 0$.

Roots: $r = 1, 2, 3$ (three distinct real roots).

$y = c_1 e^x + c_2 e^{2x} + c_3 e^{3x}$. $\blacksquare$

</details>
### 6.5 Worked Example: Power Series Method

**Problem.** Solve $y'' - xy = 0$ (Airy's equation) using power series about $x_0 = 0$.

<details>
<summary>Solution</summary>

*Solution.* Since $p(x) = 0$ and $q(x) = -x$ are both analytic everywhere, $x_0 = 0$ is an ordinary
point. Substitute $y = \sum_{n=0}^{\infty} a_n x^n$:

$y' = \sum_{n=1}^{\infty} na_n x^{n-1}$, $y'' = \sum_{n=2}^{\infty} n(n-1)a_n x^{n-2}$.

$y'' - xy = \sum_{n=2}^{\infty} n(n-1)a_n x^{n-2} - \sum_{n=0}^{\infty} a_n x^{n+1} = 0$.

Shift indices: first sum $\sum_{m=0}^{\infty} (m+2)(m+1)a_{m+2} x^m$, second sum $\sum_{m=1}^{\infty} a_{m-1} x^m$.

For $m = 0$: $2 \cdot 1 \cdot a_2 = 0 \implies a_2 = 0$.

For $m \geq 1$: $(m+2)(m+1)a_{m+2} - a_{m-1} = 0 \implies a_{m+2} = \frac{a_{m-1}}{(m+2)(m+1)}$.

This gives: $a_3 = \frac{a_0}{6}$, $a_4 = \frac{a_1}{12}$, $a_5 = \frac{a_2}{20} = 0$,
$a_6 = \frac{a_3}{30} = \frac{a_0}{180}$, etc.

Since $a_2 = 0$, all $a_{3k+2} = 0$.

$y(x) = a_0\left(1 + \frac{x^3}{6} + \frac{x^6}{180} + \cdots\right) + a_1\left(x + \frac{x^4}{12} + \frac{x^7}{504} + \cdots\right)$.

These are the **Airy functions** $\mathrm{Ai}(x)$ and $\mathrm{Bi}(x)$ (up to normalization). $\blacksquare$

</details>

### 6.6 Worked Example: Frobenius Method

**Problem.** Solve $2xy'' + y' + xy = 0$ near $x = 0$ using the Frobenius method.

<details>
<summary>Solution</summary>

*Solution.* Rewrite in standard form: $y'' + \frac{1}{2x}y' + \frac{1}{2}y = 0$.

$x = 0$ is a regular singular point since $xp(x) = 1/2$ and $x^2 q(x) = x^2/2$ are analytic at $0$.

Substitute $y = \sum_{n=0}^{\infty} a_n x^{n+r}$, $a_0 \neq 0$:

$y' = \sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1}$

$y'' = \sum_{n=0}^{\infty} (n+r)(n+r-1)a_n x^{n+r-2}$

Substituting into $2xy'' + y' + xy = 0$:

$\sum_{n=0}^{\infty} 2(n+r)(n+r-1)a_n x^{n+r-1} + \sum_{n=0}^{\infty} (n+r)a_n x^{n+r-1} + \sum_{n=0}^{\infty} a_n x^{n+r+1} = 0$

For $n = 0$: $[2r(r-1) + r]a_0 = 0$. Since $a_0 \neq 0$:
$r(2r - 2 + 1) = 0 \implies r(2r - 1) = 0$.

Indicial equation: $r = 0$ or $r = 1/2$.

For general $n \geq 1$: $[2(n+r)(n+r-1) + (n+r)]a_n + a_{n-2} = 0$

$(n+r)(2n + 2r - 1)a_n = -a_{n-2}$

$a_n = -\frac{a_{n-2}}{(n+r)(2n + 2r - 1)}$

For $r = 0$: $a_n = -\frac{a_{n-2}}{n(2n-1)}$. Odd coefficients vanish ($a_1 = 0$). Even: $a_2 = -\frac{a_0}{6}$,
$a_4 = \frac{a_0}{120}$, etc.

For $r = 1/2$: $a_n = -\frac{a_{n-2}}{(n+1/2)(2n)} = -\frac{a_{n-2}}{n(2n+1)}$.

$y = C_1 \sum_{k=0}^{\infty} a_{2k}^{(0)} x^{2k} + C_2 x^{1/2} \sum_{k=0}^{\infty} a_{2k}^{(1/2)} x^{2k}$. $\blacksquare$

</details>


### 6.7 Worked Example: Bessel Functions

**Problem.** Find the first three nonzero terms of $J_0(x)$, the Bessel function of the first kind
of order zero, which satisfies $x^2 y'' + xy' + x^2 y = 0$.

<details>
<summary>Solution</summary>

_Solution._ Here $\nu = 0$. The indicial equation gives $r^2 = 0$ (repeated root $r = 0$).

Substituting $y = \sum_{n=0}^{\infty} a_n x^{2n}$ (we can show only even powers appear):

$y' = \sum_{n=1}^{\infty} 2n a_n x^{2n-1}$, $y'' = \sum_{n=1}^{\infty} 2n(2n-1) a_n x^{2n-2}$.

$x^2 y'' + xy' + x^2 y = \sum_{n=1}^{\infty} 2n(2n-1)a_n x^{2n} + \sum_{n=1}^{\infty} 2n a_n x^{2n} + \sum_{n=0}^{\infty} a_n x^{2n+2} = 0$.

For $n = 0$: $a_0$ is free.

For the recurrence: $4n^2 a_n + a_{n-1} = 0 \implies a_n = -\frac{a_{n-1}}{4n^2}$ for $n \geq 1$.

$a_1 = -\frac{a_0}{4}$, $a_2 = \frac{a_0}{64}$, $a_3 = -\frac{a_0}{2304}$.

Setting $a_0 = 1$: $J_0(x) = 1 - \frac{x^2}{4} + \frac{x^4}{64} - \frac{x^6}{2304} + \cdots$. $\blacksquare$

</details>
## 7. Fourier Series

### 7.1 Definition

A **Fourier series** of a $2\pi$-periodic function $f$ is

$$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left(a_n \cos(nx) + b_n \sin(nx)\right)$$

where

$$a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos(nx)\, dx, \quad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\, dx$$

### 7.2 Derivation of Fourier Coefficients

The Fourier coefficients are derived using the orthogonality relations on $[-\pi, \pi]$:

$$\int_{-\pi}^{\pi} \cos(mx)\cos(nx)\, dx = \begin{cases} \pi & m = n \neq 0 \\ 2\pi & m = n = 0 \\ 0 & m \neq n \end{cases}$$

$$\int_{-\pi}^{\pi} \sin(mx)\sin(nx)\, dx = \begin{cases} \pi & m = n \neq 0 \\ 0 & m \neq n \end{cases}$$

$$\int_{-\pi}^{\pi} \cos(mx)\sin(nx)\, dx = 0 \quad \mathrm{for\; all}\; m, n$$

To find $a_n$, multiply both sides of the Fourier expansion by $\cos(nx)$ and integrate over
$[-\pi, \pi]$. By orthogonality, all terms vanish except the $\cos(nx)$ term, yielding
$a_n \pi = \int_{-\pi}^{\pi} f(x)\cos(nx)\, dx$. Similarly for $b_n$.

### 7.3 Convergence

**Theorem 7.1 (Dirichlet's Theorem).** If $f$ is $2\pi$-periodic and piecewise smooth, its Fourier
series converges to:

- $f(x)$ at points where $f$ is continuous.
- $\frac{f(x^+) + f(x^-)}{2}$ at jump discontinuities.

### 7.4 Parseval's Identity

$$\frac{1}{\pi}\int_{-\pi}^{\pi} |f(x)|^2\, dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)$$

*Intuition.* Parseval's identity is the infinite-dimensional analogue of the Pythagorean theorem:
the "energy" of $f$ (its $L^2$ norm squared) equals the sum of the energies of its Fourier
components.

### 7.5 Sine and Cosine Series

For functions defined on $[0, L]$:

- **Cosine series** (even extension): $a_n = \frac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}\, dx$,
  $b_n = 0$.
- **Sine series** (odd extension): $a_n = 0$,
  $b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$.

### 7.6 Worked Example: Fourier Sine Series

**Problem.** Find the Fourier series of $f(x) = x$ on $(-\pi, \pi)$, extended $2\pi$-periodically.

*Solution.* $f$ is odd, so $a_n = 0$ for all $n$.

$b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} x\sin(nx)\, dx = \frac{2}{\pi}\int_0^{\pi} x\sin(nx)\, dx$.

Integration by parts: $u = x$, $dv = \sin(nx)\, dx$:

$b_n = \frac{2}{\pi}\left[-\frac{x\cos(nx)}{n}\Big|_0^{\pi} + \int_0^{\pi} \frac{\cos(nx)}{n}\, dx\right] = \frac{2}{\pi}\left[-\frac{\pi\cos(n\pi)}{n} + 0\right] = \frac{-2\cos(n\pi)}{n} = \frac{2(-1)^{n+1}}{n}$.

$x \sim 2\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}\sin(nx)$. $\blacksquare$

### 7.7 Worked Example: Fourier Cosine Series

**Problem.** Find the Fourier cosine series of $f(x) = x^2$ on $[0, \pi]$.

<details>
<summary>Solution</summary>

*Solution.* Extend $f$ as an even function on $[-\pi, \pi]$. Then $b_n = 0$ for all $n$.

$a_0 = \frac{2}{\pi}\int_0^{\pi} x^2\, dx = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3}$.

For $n \geq 1$: $a_n = \frac{2}{\pi}\int_0^{\pi} x^2\cos(nx)\, dx$.

Integrating by parts twice:

$u = x^2$, $dv = \cos(nx)\, dx$: $du = 2x\, dx$, $v = \sin(nx)/n$.

$a_n = \frac{2}{\pi}\left[\frac{x^2\sin(nx)}{n}\Big|_0^{\pi} - \int_0^{\pi} \frac{2x\sin(nx)}{n}\, dx\right] = -\frac{4}{n\pi}\int_0^{\pi} x\sin(nx)\, dx$

$= -\frac{4}{n\pi}\left[-\frac{x\cos(nx)}{n}\Big|_0^{\pi} + \int_0^{\pi} \frac{\cos(nx)}{n}\, dx\right]$

$= -\frac{4}{n\pi}\left[-\frac{\pi\cos(n\pi)}{n} + 0\right] = \frac{4\cos(n\pi)}{n^2} = \frac{4(-1)^n}{n^2}$.

$x^2 \sim \frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}\cos(nx)$.

Setting $x = 0$: $0 = \frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$, giving the famous identity
$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12}$. $\blacksquare$

</details>

### 7.8 Complex Fourier Series

Using Euler's formula, the Fourier series can be written in complex form:

$$f(x) \sim \sum_{n=-\infty}^{\infty} c_n e^{inx}$$

where $c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)e^{-inx}\, dx$.

The relationship with the real coefficients is $c_0 = a_0/2$, $c_n = (a_n - ib_n)/2$ for $n > 0$,
and $c_{-n} = \overline{c_n}$ when $f$ is real-valued.


### 7.9 Worked Example: Parseval's Identity

**Problem.** Using the Fourier series of $f(x) = x$ on $(-\pi, \pi)$, verify Parseval's identity
and deduce $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$.

<details>
<summary>Solution</summary>

_Solution._ From Section 7.6: $a_0 = 0$, $a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$.

Parseval: $\frac{1}{\pi}\int_{-\pi}^{\pi} x^2\, dx = \sum_{n=1}^{\infty} b_n^2 = \sum_{n=1}^{\infty} \frac{4}{n^2}$.

$\frac{1}{\pi} \cdot \frac{2\pi^3}{3} = 4\sum_{n=1}^{\infty} \frac{1}{n^2}$.

$\frac{2\pi^2}{3} = 4\sum_{n=1}^{\infty} \frac{1}{n^2}$.

$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$. $\blacksquare$

</details>
## 8. Introduction to Partial Differential Equations

### 8.1 Classification of Second-Order PDEs

The general second-order linear PDE in two variables is

$$A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$$

- **Elliptic** ($B^2 - 4AC \lt{} 0$): e.g., Laplace's equation $u_{xx} + u_{yy} = 0$.
- **Parabolic** ($B^2 - 4AC = 0$): e.g., the heat equation $u_t = \alpha^2 u_{xx}$.
- **Hyperbolic** ($B^2 - 4AC > 0$): e.g., the wave equation $u_{tt} = c^2 u_{xx}$.

### 8.2 The Heat Equation

$$u_t = \alpha^2 u_{xx}, \quad 0 \lt{} x \lt{} L, \quad t > 0$$

with boundary conditions $u(0, t) = u(L, t) = 0$ and initial condition $u(x, 0) = f(x)$.

### 8.3 Derivation of the Heat Equation

Consider a thin rod of length $L$ with uniform cross-section and density $\rho$. Let $u(x, t)$ be the
temperature at position $x$ and time $t$. By **Fourier's law of heat conduction**, the heat flux
through a cross-section is proportional to the negative temperature gradient:

$$q = -\kappa u_x$$

where $\kappa$ is the thermal conductivity. Conservation of energy on $[x, x + \Delta x]$:

$$\rho c \frac{\partial u}{\partial t} \Delta x = q(x) - q(x + \Delta x) = -\kappa u_x(x) + \kappa u_x(x + \Delta x)$$

Dividing by $\Delta x$ and taking $\Delta x \to 0$:

$$\rho c \, u_t = \kappa u_{xx} \implies u_t = \frac{\kappa}{\rho c} u_{xx} = \alpha^2 u_{xx}$$

where $\alpha^2 = \kappa/(\rho c)$ is the **thermal diffusivity**.

### 8.4 Solving the Heat Equation by Separation of Variables

Assume $u(x, t) = X(x)T(t)$. Substituting:

$$X T' = \alpha^2 X'' T \implies \frac{T'}{\alpha^2 T} = \frac{X''}{X} = -\lambda$$

This gives two ODEs:

$$X'' + \lambda X = 0, \quad X(0) = X(L) = 0$$ $$T' + \alpha^2 \lambda T = 0$$

The boundary value problem for $X$ has solutions only for $\lambda_n = (n\pi/L)^2$,
$n = 1, 2, 3, \ldots$, with $X_n(x) = \sin(n\pi x/L)$.

The corresponding $T_n(t) = e^{-\alpha^2 (n\pi/L)^2 t}$.

By superposition:

$$u(x, t) = \sum_{n=1}^{\infty} b_n \sin\frac{n\pi x}{L} e^{-\alpha^2 (n\pi/L)^2 t}$$

where $b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$ (the sine series coefficients of
$f$).

### 8.5 Worked Example: Heat Equation

**Problem.** Solve $u_t = u_{xx}$ for $0 \lt{} x \lt{} \pi$, $t > 0$, with $u(0, t) = u(\pi, t) = 0$
and $u(x, 0) = \sin(2x) + 3\sin(5x)$.

*Solution.* Here $\alpha = 1$ and $L = \pi$. The initial condition is already a sine series.

$\lambda_n = n^2$, $X_n = \sin(nx)$, $T_n = e^{-n^2 t}$.

$u(x, t) = e^{-4t}\sin(2x) + 3e^{-25t}\sin(5x)$. $\blacksquare$

### 8.6 The Wave Equation

$$u_{tt} = c^2 u_{xx}, \quad 0 \lt{} x \lt{} L, \quad t > 0$$

with boundary conditions $u(0, t) = u(L, t) = 0$, and initial conditions $u(x, 0) = f(x)$,
$u_t(x, 0) = g(x)$.

### 8.7 Derivation of the Wave Equation

Consider a string of length $L$ under tension $T$. Let $u(x, t)$ be the vertical displacement. For
a small segment $[x, x + \Delta x]$, Newton's second law in the vertical direction gives:

$$\rho \Delta x \, u_{tt} = T\sin\theta(x + \Delta x) - T\sin\theta(x)$$

For small displacements, $\sin\theta \approx \tan\theta = u_x$, so:

$$\rho \, u_{tt} = T \frac{u_x(x + \Delta x) - u_x(x)}{\Delta x} \xrightarrow{\Delta x \to 0} T u_{xx}$$

$$u_{tt} = \frac{T}{\rho} u_{xx} = c^2 u_{xx}, \quad c = \sqrt{T/\rho}$$

### 8.8 Solving the Wave Equation

Separation of variables $u(x, t) = X(x)T(t)$ gives:

$$X'' + \lambda X = 0, \quad T'' + c^2 \lambda T = 0$$

With $\lambda_n = (n\pi/L)^2$:

$$X_n(x) = \sin\frac{n\pi x}{L}, \quad T_n(t) = a_n \cos\frac{cn\pi t}{L} + b_n \sin\frac{cn\pi t}{L}$$

$$u(x, t) = \sum_{n=1}^{\infty} \sin\frac{n\pi x}{L}\left(a_n \cos\frac{cn\pi t}{L} + b_n \sin\frac{cn\pi t}{L}\right)$$

where $a_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$ and
$b_n = \frac{2}{cn\pi}\int_0^L g(x)\sin\frac{n\pi x}{L}\, dx$.

### 8.9 D'Alembert's Solution

For the wave equation on $-\infty \lt{} x \lt{} \infty$:

$$u(x, t) = \frac{f(x + ct) + f(x - ct)}{2} + \frac{1}{2c}\int_{x - ct}^{x + ct} g(s)\, ds$$

This represents the solution as a superposition of right-moving and left-moving waves.

### 8.10 Laplace's Equation

$$u_{xx} + u_{yy} = 0$$

on a domain $\Omega \subseteq \mathbb{R}^2$, with boundary conditions on $\partial\Omega$.

**Theorem 8.1 (Maximum Principle).** A harmonic function $u$ (satisfying Laplace's equation) on a
bounded domain attains its maximum and minimum on the boundary.

**Theorem 8.2 (Uniqueness).** The Dirichlet problem for Laplace's equation has at most one solution.

*Proof.* If $u_1$ and $u_2$ are two solutions with the same boundary data, then $v = u_1 - u_2$ is
harmonic with $v = 0$ on $\partial\Omega$. By the maximum principle, $v \equiv 0$. $\blacksquare$

### 8.11 Worked Example: Wave Equation

**Problem.** A string of length $\pi$ with fixed ends is plucked: $u(x, 0) = x(\pi - x)$,
$u_t(x, 0) = 0$. Find $u(x, t)$.

*Solution.* With $c = 1$ and $L = \pi$: $a_n = \frac{2}{\pi}\int_0^{\pi} x(\pi - x)\sin(nx)\, dx$,
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

**Problem.** Solve $u_{xx} + u_{yy} = 0$ on $0 \lt{} x \lt{} \pi$, $0 \lt{} y \lt{} 1$ with
$u(0, y) = u(\pi, y) = u(x, 1) = 0$ and $u(x, 0) = f(x) = x(\pi - x)$.

<details>
<summary>Solution</summary>

*Solution.* Separate variables: $u(x, y) = X(x)Y(y)$.

$X''/X = -Y''/Y = -\lambda$.

$X'' + \lambda X = 0$, $X(0) = X(\pi) = 0$: $\lambda_n = n^2$, $X_n = \sin(nx)$.

$Y'' - n^2 Y = 0$, $Y(1) = 0$: $Y_n = \sinh(n(1 - y))$.

$u(x, y) = \sum_{n=1}^{\infty} b_n \sin(nx)\sinh(n(1-y))$.

$b_n = \frac{2}{\pi \sinh n}\int_0^{\pi} x(\pi - x)\sin(nx)\, dx = \frac{2}{\pi \sinh n} \cdot \frac{2(1 - (-1)^n)}{n^3}$.

For odd $n = 2k + 1$: $b_n = \frac{8}{\pi n^3 \sinh n}$.

$u(x, y) = \frac{8}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)\sinh((2k+1)(1-y))}{(2k+1)^3 \sinh(2k+1)}$. $\blacksquare$

</details>

### 8.13 Sturm-Liouville Theory (Brief)

A **Sturm-Liouville problem** consists of the ODE

$$(p(x)y')' + [\lambda w(x) - q(x)]y = 0$$

on $[a, b]$ with homogeneous boundary conditions, where $p, w > 0$ and $p, p', q, w$ are continuous.

**Key properties:**

1. The eigenvalues are real and form an infinite increasing sequence $\lambda_1 \lt{} \lambda_2 \lt{} \cdots \to \infty$.
2. Eigenfunctions corresponding to distinct eigenvalues are orthogonal with respect to the weight $w(x)$:
   $\int_a^b y_m(x) y_n(x) w(x)\, dx = 0$ for $m \neq n$.
3. The eigenfunctions form a complete set in the weighted $L^2$ space.

*Remark.* The boundary value problems encountered in the heat and wave equations
($X'' + \lambda X = 0$ with $X(0) = X(L) = 0$) are special cases of Sturm-Liouville problems
with $p = 1$, $q = 0$, $w = 1$.


### 8.14 Neumann Boundary Conditions

When the boundary specifies the derivative (heat flux) rather than the value, we have **Neumann
conditions**. For the heat equation:

$$u_x(0, t) = 0, \quad u_x(L, t) = 0$$

(insulated ends). The separation of variables gives $X'(0) = X'(L) = 0$, yielding eigenvalues
$\lambda_0 = 0$ with $X_0 = 1$, and $\lambda_n = (n\pi/L)^2$ for $n \geq 1$ with
$X_n = \cos(n\pi x/L)$.

The solution is

$$u(x, t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\frac{n\pi x}{L} e^{-\alpha^2 (n\pi/L)^2 t}$$

where $a_n = \frac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}\, dx$.

_Remark._ As $t \to \infty$, all exponential terms decay, and $u(x, t) \to a_0/2$, the average
value of the initial temperature. Physically, an insulated rod reaches a uniform steady-state
temperature.

### 8.15 Worked Example: Heat Equation with Non-Trivial Initial Data

**Problem.** Solve $u_t = u_{xx}$ for $0 \lt{} x \lt{} \pi$, $t > 0$, with $u(0, t) = u(\pi, t) = 0$
and $u(x, 0) = x(\pi - x)$.

<details>
<summary>Solution</summary>

_Solution._ The sine series of $f(x) = x(\pi - x)$ on $[0, \pi]$ has coefficients

$b_n = \frac{2}{\pi}\int_0^{\pi} x(\pi - x)\sin(nx)\, dx = \frac{4(1 - (-1)^n)}{\pi n^3}$.

(Computed in Section 8.11.)

For even $n$: $b_n = 0$. For odd $n = 2k + 1$: $b_n = \frac{8}{\pi n^3}$.

$u(x, t) = \frac{8}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{(2k+1)^3} e^{-(2k+1)^2 t}$. $\blacksquare$

</details>

### 8.16 Worked Example: D'Alembert's Solution

**Problem.** Solve $u_{tt} = 4u_{xx}$ for $-\infty \lt{} x \lt{} \infty$ with $u(x, 0) = e^{-x^2}$ and
$u_t(x, 0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Here $c = 2$. By D'Alembert's formula with $g = 0$:

$u(x, t) = \frac{f(x + 2t) + f(x - 2t)}{2} = \frac{e^{-(x+2t)^2} + e^{-(x-2t)^2}}{2}$.

This represents two Gaussian pulses traveling in opposite directions at speed 2. $\blacksquare$

</details>
## 9. Stability and Phase Plane Analysis

### 9.1 Autonomous Systems

For $\mathbf{x}' = \mathbf{f}(\mathbf{x})$, a **critical point** $\mathbf{x}^*$ satisfies
$\mathbf{f}(\mathbf{x}^*) = \mathbf{0}$.

### 9.2 Linearization and Stability

Let $A = J\mathbf{f}(\mathbf{x}^*)$ be the Jacobian at the critical point. The eigenvalues of $A$
determine the local stability:

| Eigenvalues of $A$                      | Type            | Stability             |
| --------------------------------------- | --------------- | --------------------- |
| Both real, negative                     | Stable node     | Asymptotically stable |
| Both real, positive                     | Unstable node   | Unstable              |
| Real, opposite signs                    | Saddle point    | Unstable              |
| Complex, $\mathrm{Re}(\lambda) \lt{} 0$ | Stable spiral   | Asymptotically stable |
| Complex, $\mathrm{Re}(\lambda) > 0$     | Unstable spiral | Unstable              |
| Purely imaginary                        | Center          | (Marginally) stable   |

### 9.3 Lyapunov Stability

**Definition.** A critical point $\mathbf{x}^*$ is **stable** if for every $\varepsilon > 0$, there
exists $\delta > 0$ such that $\|\mathbf{x}(0) - \mathbf{x}^*\| \lt{} \delta$ implies
$\|\mathbf{x}(t) - \mathbf{x}^*\| \lt{} \varepsilon$ for all $t > 0$.

It is **asymptotically stable** if it is stable and $\mathbf{x}(t) \to \mathbf{x}^*$ as
$t \to \infty$.

**Theorem 9.1 (Lyapunov).** If there exists a continuously differentiable function $V$ (a **Lyapunov
function**) such that $V(\mathbf{x}^*) = 0$, $V(\mathbf{x}) > 0$ for $\mathbf{x} \neq \mathbf{x}^*$,
and $\dot{V} \leq 0$ in a neighbourhood of $\mathbf{x}^*$, then $\mathbf{x}^*$ is stable. If
$\dot{V} \lt{} 0$ for $\mathbf{x} \neq \mathbf{x}^*$, then $\mathbf{x}^*$ is asymptotically stable.

### 9.4 Worked Example: Linearization

**Problem.** Find and classify the critical points of $x' = x - y$, $y' = x^2 + y^2 - 1$.

<details>
<summary>Solution</summary>

*Solution.* Set $x' = 0$ and $y' = 0$:

$x - y = 0 \implies y = x$

$x^2 + x^2 - 1 = 0 \implies 2x^2 = 1 \implies x = \pm 1/\sqrt{2}$

Critical points: $(1/\sqrt{2}, 1/\sqrt{2})$ and $(-1/\sqrt{2}, -1/\sqrt{2})$.

The Jacobian is $J = \begin{pmatrix} 1 & -1 \\ 2x & 2y \end{pmatrix}$.

At $(1/\sqrt{2}, 1/\sqrt{2})$: $J = \begin{pmatrix} 1 & -1 \\ \sqrt{2} & \sqrt{2} \end{pmatrix}$.

$\mathrm{tr}(J) = 1 + \sqrt{2} > 0$, $\det(J) = \sqrt{2} + \sqrt{2} = 2\sqrt{2} > 0$.

$\tau^2 - 4\Delta = (1 + \sqrt{2})^2 - 8\sqrt{2} = 3 + 2\sqrt{2} - 8\sqrt{2} = 3 - 6\sqrt{2} \lt{} 0$.

Complex eigenvalues with positive real part: **unstable spiral**.

At $(-1/\sqrt{2}, -1/\sqrt{2})$: $J = \begin{pmatrix} 1 & -1 \\ -\sqrt{2} & -\sqrt{2} \end{pmatrix}$.

$\mathrm{tr}(J) = 1 - \sqrt{2} \lt{} 0$, $\det(J) = -\sqrt{2} + \sqrt{2} = 0$.

Wait, $\det(J) = (1)(-\sqrt{2}) - (-1)(-\sqrt{2}) = -\sqrt{2} - \sqrt{2} = -2\sqrt{2} \lt{} 0$.

Negative determinant: **saddle point** (unstable). $\blacksquare$

</details>

### 9.5 Phase Portraits for 2D Nonlinear Systems

For the nonlinear system $\mathbf{x}' = \mathbf{f}(\mathbf{x})$, the **Hartman-Grobman theorem**
states that near a hyperbolic critical point (one where the Jacobian has no eigenvalues on the
imaginary axis), the nonlinear phase portrait is topologically equivalent to the linearized one.

**Procedure for sketching phase portraits:**

1. Find all critical points by solving $\mathbf{f}(\mathbf{x}) = \mathbf{0}$.
2. Compute the Jacobian $J$ at each critical point.
3. Classify each critical point using the eigenvalue analysis from Section 4.9.
4. Sketch the local behaviour near each critical point.
5. Connect the local pictures using nullclines ($x' = 0$ and $y' = 0$ curves).

### 9.6 Limit Cycles and Poincaré-Bendixson

A **limit cycle** is an isolated closed periodic orbit. Limit cycles are inherently nonlinear
phenomena --- linear systems cannot have isolated closed orbits.

**Theorem 9.2 (Poincaré-Bendixson).** If a trajectory of a $C^1$ planar system is confined to a
closed bounded region $R$ that contains no critical points, then the trajectory approaches a closed
periodic orbit as $t \to \infty$.

*Remark.* The Poincaré-Bendixson theorem is specific to two dimensions. In three or more
dimensions, much more complex behaviour (chaos) is possible.

**Example: Van der Pol oscillator.** The equation

$$x'' + \mu(x^2 - 1)x' + x = 0$$

with $\mu > 0$ has a unique stable limit cycle. This system models electrical circuits with
nonlinear resistance and arises in biology (cardiac rhythms, neuron firing).

### 9.7 Worked Example: Lotka-Volterra Analysis

**Problem.** Analyze the stability of the Lotka-Volterra system
$x' = x(2 - y)$, $y' = y(x - 1)$.

<details>
<summary>Solution</summary>

*Solution.* Critical points: $(0, 0)$ and $(1, 2)$.

Jacobian: $J = \begin{pmatrix} 2 - y & -x \\ y & x - 1 \end{pmatrix}$.

At $(0, 0)$: $J = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$.
Eigenvalues $2$ and $-1$: **saddle point** (unstable).

At $(1, 2)$: $J = \begin{pmatrix} 0 & -1 \\ 2 & 0 \end{pmatrix}$.
$\det(J) = 2 > 0$, $\mathrm{tr}(J) = 0$. Eigenvalues $\pm i\sqrt{2}$: **center**.

_Remark._ For the linearized system, the center is (marginally) stable. However, for the
nonlinear Lotka-Volterra system, the trajectories are actually closed orbits surrounding $(1, 2)$.
This can be verified using the first integral $H = x - \ln x + 2\ln y - y$, which is constant
along trajectories. $\blacksquare$

</details>

### 9.8 Competing Species

The competing species model is:

$$x' = x(r_1 - a_{11}x - a_{12}y), \quad y' = y(r_2 - a_{21}x - a_{22}y)$$

where $r_i > 0$ are growth rates and $a_{ij} > 0$ are competition coefficients. The four critical
points are $(0, 0)$, $(r_1/a_{11}, 0)$, $(0, r_2/a_{22})$, and the coexistence point
$(x^*, y^*)$ where both $x'$ and $y'$ vanish.

The stability of the coexistence point determines whether both species survive. If
$a_{11}a_{22} > a_{12}a_{21}$, coexistence is stable; otherwise, one species drives the other
to extinction (competitive exclusion).

## 10. Common Pitfalls

:::caution Common Pitfall When using undetermined coefficients, always check whether your guess
overlaps with the homogeneous solution. For $y'' - 4y = e^{2x}$, guessing $y_p = Ae^{2x}$ fails
because $e^{2x}$ satisfies the homogeneous equation. You must use $y_p = Axe^{2x}$ instead. :::

:::caution Common Pitfall The Laplace transform of $y'(t)$ is $sY(s) - y(0)$, not $sY(s)$. The
initial conditions are built into the transform. Forgetting them leads to incorrect solutions. :::

:::caution Common Pitfall Separation of variables can miss solutions. When dividing by $h(y)$ to
separate, check whether $h(y) = 0$ gives any valid solutions. For example, solving $y' = y^2$ by
separating gives $y = -1/(x + C)$, but misses the solution $y = 0$. :::

:::caution Common Pitfall The Fourier series of a function converges to the function only at points
of continuity. At jump discontinuities, it converges to the midpoint of the jump. The Gibbs
phenomenon causes overshoots near jumps that do not vanish as more terms are added. :::

:::caution Common Pitfall When solving PDEs by separation of variables, the boundary conditions
determine the eigenvalues. Using the wrong boundary conditions (e.g., Neumann instead of Dirichlet)
leads to a completely different set of eigenfunctions and eigenvalues. :::

:::caution Common Pitfall Not every first-order ODE can be solved analytically. Equations like
$y' = x^2 + y^2$ have no closed-form solution in terms of elementary functions. Numerical methods
(Euler, Runge-Kutta) may be necessary. :::

:::caution Common Pitfall The linearization of a nonlinear system near a critical point is only
valid for hyperbolic critical points (no eigenvalues on the imaginary axis). If eigenvalues lie on
the imaginary axis, the nonlinear system can behave very differently from its linearization. :::

:::caution Common Pitfall When computing the inverse Laplace transform, always check that the
partial fraction decomposition is correct before inverting term-by-term. A common error is
forgetting to include all powers of irreducible quadratic factors. :::

:::caution Common Pitfall For the Euler-Cauchy equation $x^2 y'' + axy' + by = 0$, remember that
$x^r$ with complex $r = \alpha \pm i\beta$ gives solutions involving $\cos(\beta \ln x)$ and
$\sin(\beta \ln x)$, not $\cos(\beta x)$ and $\sin(\beta x)$. :::

:::caution Common Pitfall The Wronskian $W(y_1, y_2)$ being zero at a single point does not
necessarily mean the solutions are linearly dependent. For linear ODEs with continuous coefficients,
$W \equiv 0$ everywhere or $W \neq 0$ everywhere. Check Abel's identity. :::


### 9.9 Worked Example: Lyapunov Function

**Problem.** Show that $(0, 0)$ is asymptotically stable for the system
$x' = -x - y^3$, $y' = x^3 - y$.

<details>
<summary>Solution</summary>

_Solution._ Critical point: $-x - y^3 = 0$ and $x^3 - y = 0$ gives $x = 0, y = 0$.

Choose the Lyapunov function $V(x, y) = \frac{x^2}{2} + \frac{y^2}{2}$. Clearly $V(0,0) = 0$ and
$V > 0$ for $(x, y) \neq (0, 0)$.

$\dot{V} = \frac{\partial V}{\partial x}x' + \frac{\partial V}{\partial y}y' = x(-x - y^3) + y(x^3 - y)$

$= -x^2 - xy^3 + x^3 y - y^2 = -x^2 - y^2 + xy(x^2 - y^2)$

This is not obviously negative definite. Let us try $V(x, y) = \frac{x^4}{4} + \frac{y^4}{4}$:

$\dot{V} = x^3(-x - y^3) + y^3(x^3 - y) = -x^4 - x^3 y^3 + x^3 y^3 - y^4 = -(x^4 + y^4)$.

Since $\dot{V} = -(x^4 + y^4) \lt{} 0$ for $(x, y) \neq (0, 0)$, the origin is asymptotically
stable by Lyapunov's theorem. $\blacksquare$

</details>

### 9.10 Worked Example: Van der Pol Oscillator

**Problem.** Show that the Van der Pol equation $x'' + \mu(x^2 - 1)x' + x = 0$ with $\mu > 0$
has a unique limit cycle.

<details>
<summary>Solution</summary>

_Solution.* Write as a system: $x' = y$, $y' = -x - \mu(x^2 - 1)y$.

The only critical point is $(0, 0)$. The Jacobian at the origin is
$J = \begin{pmatrix} 0 & 1 \\ -1 & \mu \end{pmatrix}$.

$\mathrm{tr}(J) = \mu > 0$, $\det(J) = 1 > 0$, $\tau^2 - 4\Delta = \mu^2 - 4$.

For $0 \lt{} \mu \lt{} 2$: complex eigenvalues with positive real part (**unstable spiral**).
For $\mu \geq 2$: two positive real eigenvalues (**unstable node**).

The origin is always unstable. To show existence of a limit cycle, we use a **Liénard's theorem**
or construct a trapping region. Define

$L(x) = x^3/3 - x$ and write the system as $x' = y$, $y' = -x - \mu L'(x) y$.

The function $L(x)$ has zeros at $x = \pm 1$. For $\mu > 0$, the damping is negative for
$\lvert x \rvert \lt{} 1$ (energy input) and positive for $\lvert x \rvert > 1$ (energy
dissipation). This creates a unique stable limit cycle that passes through $x = \pm 1$.

A detailed proof requires constructing an annular region and applying the Poincaré-Bendixson
theorem (the inner boundary encloses the unstable origin; the outer boundary is chosen so that
trajectories point inward). $\blacksquare$

</details>
## 11. Problem Set

### Problem 1 (Classification)

Classify the ODE $y'' + xy' + e^x y = \cos x$ by order, linearity, and homogeneity.

<details>
<summary>Solution</summary>

_Solution._ Second-order (highest derivative is $y''$), linear ($y$, $y'$, $y''$ appear linearly
with coefficient functions of $x$ only), nonhomogeneous ($\cos x \neq 0$). $\blacksquare$

_If you get this wrong, revise:_ Section 1.2 (Classification of ODEs).

</details>

### Problem 2 (Separable Equation)

Solve $\frac{dy}{dx} = \frac{x}{y}$, $y(0) = 2$.

<details>
<summary>Solution</summary>

_Solution._ Separating: $y\, dy = x\, dx$. Integrating: $\frac{y^2}{2} = \frac{x^2}{2} + C$.

$y(0) = 2 \implies C = 2$, so $y^2 = x^2 + 4$, giving $y = \sqrt{x^2 + 4}$ (positive branch
since $y(0) = 2 > 0$). $\blacksquare$

_If you get this wrong, revise:_ Section 2.1 (Separable Equations).

</details>

### Problem 3 (Linear First-Order)

Solve $y' + \frac{y}{x} = x^2$ for $x > 0$, $y(1) = 1$.

<details>
<summary>Solution</summary>

_Solution._ $P(x) = 1/x$, $Q(x) = x^2$.

$\mu(x) = e^{\int 1/x\, dx} = e^{\ln x} = x$.

$y = x^{-1}\left(\int x \cdot x^2\, dx + C\right) = x^{-1}\left(\frac{x^4}{4} + C\right) = \frac{x^3}{4} + \frac{C}{x}$.

$y(1) = 1/4 + C = 1 \implies C = 3/4$.

$y = \frac{x^3}{4} + \frac{3}{4x}$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.2 (Linear First-Order Equations).

</details>

### Problem 4 (Exact Equation)

Solve $(2x + y)\, dx + (x + 2y)\, dy = 0$.

<details>
<summary>Solution</summary>

_Solution._ $M = 2x + y$, $N = x + 2y$. $M_y = 1 = N_x$. Exact.

$\Psi_x = 2x + y \implies \Psi = x^2 + xy + h(y)$.

$\Psi_y = x + h'(y) = x + 2y \implies h'(y) = 2y \implies h(y) = y^2$.

Solution: $x^2 + xy + y^2 = C$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.4 (Exact Equations).

</details>

### Problem 5 (Bernoulli Equation)

Solve $y' - y = xy^2$.

<details>
<summary>Solution</summary>

_Solution._ This is Bernoulli with $n = 2$, $P(x) = -1$, $Q(x) = x$.

Substitution $v = y^{-1}$: $v' = -y^{-2}y'$, so $-v' - v = x$, i.e., $v' + v = -x$.

Integrating factor: $e^x$. $(ve^x)' = -xe^x$.

$ve^x = -xe^x + e^x + C = e^x(1 - x) + C$.

$v = 1 - x + Ce^{-x}$, so $y = \frac{1}{1 - x + Ce^{-x}}$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.7 (Bernoulli Equations).

</details>

### Problem 6 (Homogeneous Substitution)

Solve $y' = \frac{x + y}{x - y}$ using the substitution $y = vx$.

<details>
<summary>Solution</summary>

_Solution._ $y = vx \implies y' = v + xv'$.

$\frac{x + vx}{x - vx} = \frac{1 + v}{1 - v}$.

$v + xv' = \frac{1 + v}{1 - v}$

$xv' = \frac{1 + v}{1 - v} - v = \frac{1 + v - v + v^2}{1 - v} = \frac{1 + v^2}{1 - v}$

$\frac{1 - v}{1 + v^2}\, dv = \frac{dx}{x}$

$\int \frac{1}{1 + v^2}\, dv - \int \frac{v}{1 + v^2}\, dv = \ln|x| + C$

$\arctan v - \frac{1}{2}\ln(1 + v^2) = \ln|x| + C$

$\arctan(y/x) - \frac{1}{2}\ln(1 + y^2/x^2) = \ln|x| + C$

$\arctan(y/x) = \frac{1}{2}\ln(x^2 + y^2) + C$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.10 (Homogeneous Equations).

</details>

### Problem 7 (Complex Roots)

Solve $y'' + 4y' + 13y = 0$, $y(0) = 2$, $y'(0) = -3$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^2 + 4r + 13 = 0$.

$r = \frac{-4 \pm \sqrt{16 - 52}}{2} = \frac{-4 \pm \sqrt{-36}}{2} = -2 \pm 3i$.

$y = e^{-2x}(c_1 \cos 3x + c_2 \sin 3x)$.

$y(0) = c_1 = 2$.

$y' = -2e^{-2x}(2\cos 3x + c_2 \sin 3x) + e^{-2x}(-6\sin 3x + 3c_2 \cos 3x)$.

$y'(0) = -4 + 3c_2 = -3 \implies c_2 = 1/3$.

$y = e^{-2x}\left(2\cos 3x + \frac{1}{3}\sin 3x\right)$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2 (Homogeneous Equations with Constant Coefficients).

</details>

### Problem 8 (Repeated Roots)

Solve $y'' + 4y' + 4y = 0$, $y(0) = 1$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ $r^2 + 4r + 4 = (r + 2)^2 = 0$. Repeated root $r = -2$.

$y = c_1 e^{-2x} + c_2 xe^{-2x}$.

$y(0) = c_1 = 1$.

$y' = -2e^{-2x} + c_2 e^{-2x} - 2c_2 xe^{-2x}$.

$y'(0) = -2 + c_2 = 0 \implies c_2 = 2$.

$y = e^{-2x} + 2xe^{-2x} = e^{-2x}(1 + 2x)$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2, Case 2.

</details>

### Problem 9 (Undetermined Coefficients)

Solve $y'' - 2y' - 3y = 3e^{2x}$, $y(0) = 1$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 - 2r - 3 = (r - 3)(r + 1) = 0$. Roots: $3, -1$.

$y_h = c_1 e^{3x} + c_2 e^{-x}$.

Guess $y_p = Ae^{2x}$. $y_p' = 2Ae^{2x}$, $y_p'' = 4Ae^{2x}$.

$4Ae^{2x} - 4Ae^{2x} - 3Ae^{2x} = 3e^{2x} \implies -3A = 3 \implies A = -1$.

$y = c_1 e^{3x} + c_2 e^{-x} - e^{2x}$.

$y(0) = c_1 + c_2 - 1 = 1 \implies c_1 + c_2 = 2$.

$y'(0) = 3c_1 - c_2 - 2 = 0 \implies 3c_1 - c_2 = 2$.

Solving: $4c_1 = 4 \implies c_1 = 1$, $c_2 = 1$.

$y = e^{3x} + e^{-x} - e^{2x}$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.6 (Undetermined Coefficients).

</details>

### Problem 10 (Resonance)

Solve $y'' + 4y = 8\cos(2t)$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ This is resonant ($\omega_0 = 2 = \omega$).

$y_h = c_1 \cos 2t + c_2 \sin 2t$.

Guess $y_p = At\sin 2t$. $y_p' = A\sin 2t + 2At\cos 2t$.
$y_p'' = 2A\cos 2t + 2A\cos 2t - 4At\sin 2t = 4A\cos 2t - 4At\sin 2t$.

$y_p'' + 4y_p = 4A\cos 2t = 8\cos 2t \implies A = 2$.

$y = c_1 \cos 2t + c_2 \sin 2t + 2t\sin 2t$.

$y(0) = c_1 = 0$. $y'(0) = 2c_2 = 0 \implies c_2 = 0$.

$y = 2t\sin 2t$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.9 (Resonance).

</details>

### Problem 11 (Reduction of Order)

Given that $y_1 = x$ solves $x^2 y'' - xy' + y = 0$ for $x > 0$, find the general solution.

<details>
<summary>Solution</summary>

_Solution._ Rewrite as $y'' - \frac{1}{x}y' + \frac{1}{x^2}y = 0$. Here $p(x) = -1/x$.

$e^{-\int p\, dx} = e^{\int 1/x\, dx} = x$.

$y_2 = y_1 \int \frac{x}{y_1^2}\, dx = x \int \frac{x}{x^2}\, dx = x \int \frac{1}{x}\, dx = x \ln x$.

$y = c_1 x + c_2 x \ln x$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.12 (Reduction of Order).

</details>

### Problem 12 (Euler-Cauchy)

Solve $x^2 y'' + 3xy' + y = 0$ for $x > 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic: $r(r-1) + 3r + 1 = r^2 + 2r + 1 = (r+1)^2 = 0$.

Repeated root $r = -1$.

$y = c_1 x^{-1} + c_2 x^{-1}\ln x$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.13 (Euler-Cauchy Equations).

</details>

### Problem 13 (2x2 System)

Solve $\mathbf{x}' = \begin{pmatrix} 1 & 4 \\ 1 & -2 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

_Solution._ $\det(A - \lambda I) = (1 - \lambda)(-2 - \lambda) - 4 = \lambda^2 + \lambda - 6 = (\lambda + 3)(\lambda - 2) = 0$.

$\lambda_1 = 2$: $(A - 2I)\mathbf{v} = \begin{pmatrix} -1 & 4 \\ 1 & -4 \end{pmatrix}\mathbf{v} = \mathbf{0}$. $\mathbf{v}_1 = \begin{pmatrix} 4 \\ 1 \end{pmatrix}$.

$\lambda_2 = -3$: $(A + 3I)\mathbf{v} = \begin{pmatrix} 4 & 4 \\ 1 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0}$. $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} 4 \\ 1 \end{pmatrix} e^{2t} + c_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{-3t}$. $\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Homogeneous Systems with Constant Coefficients).

</details>

### Problem 14 (System with Complex Eigenvalues)

Solve $\mathbf{x}' = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

_Solution._ $\det(A - \lambda I) = \lambda^2 + 1 = 0$. $\lambda = \pm i$.

For $\lambda = i$: $\begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$-iv_1 - v_2 = 0 \implies v_2 = -iv_1$. With $v_1 = 1$: $\mathbf{v} = \begin{pmatrix} 1 \\ -i \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + i\begin{pmatrix} 0 \\ -1 \end{pmatrix}$.

$\mathbf{a} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 0 \\ -1 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} \cos t \\ -\sin t \end{pmatrix} + c_2 \begin{pmatrix} \sin t \\ \cos t \end{pmatrix}$.

Equivalently: $x_1(t) = c_1 \cos t + c_2 \sin t$, $x_2(t) = -c_1 \sin t + c_2 \cos t$. $\blacksquare$

_If you get this wrong, revise:_ Section 4.2, Case 3.

</details>

### Problem 15 (Laplace Transform)

Compute $\mathcal{L}\{t^2 e^{-3t}\}$.

<details>
<summary>Solution</summary>

_Solution._ Using $\mathcal{L}\{t^n e^{at}\} = \frac{n!}{(s-a)^{n+1}}$ with $n = 2$, $a = -3$:

$\mathcal{L}\{t^2 e^{-3t}\} = \frac{2!}{(s + 3)^3} = \frac{2}{(s+3)^3}$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.2 (Basic Properties) and Section 5.4 (Common Transforms).

</details>

### Problem 16 (IVP with Laplace)

Solve $y'' - y = e^t$, $y(0) = 0$, $y'(0) = 0$ using Laplace transforms.

<details>
<summary>Solution</summary>

_Solution._ $\mathcal{L}\{y''\} - \mathcal{L}\{y\} = \mathcal{L}\{e^t\}$:

$s^2 Y - Y = \frac{1}{s - 1}$

$(s^2 - 1)Y = \frac{1}{s-1}$

$(s-1)(s+1)Y = \frac{1}{s-1}$

$Y = \frac{1}{(s-1)^2(s+1)}$

Partial fractions: $\frac{1}{(s-1)^2(s+1)} = \frac{A}{s-1} + \frac{B}{(s-1)^2} + \frac{C}{s+1}$.

$1 = A(s-1)(s+1) + B(s+1) + C(s-1)^2$

$s = 1$: $1 = 2B \implies B = 1/2$.
$s = -1$: $1 = 4C \implies C = 1/4$.
$s = 0$: $1 = -A + B + C = -A + 3/4 \implies A = -1/4$.

$Y = -\frac{1/4}{s-1} + \frac{1/2}{(s-1)^2} + \frac{1/4}{s+1}$

$y(t) = -\frac{1}{4}e^t + \frac{1}{2}te^t + \frac{1}{4}e^{-t}$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.5 (Solving IVPs with Laplace Transforms).

</details>

### Problem 17 (Inverse Laplace)

Find $\mathcal{L}^{-1}\left\{\frac{2s + 3}{s^2 + 2s + 5}\right\}$.

<details>
<summary>Solution</summary>

_Solution._ Complete the square: $s^2 + 2s + 5 = (s + 1)^2 + 4$.

$\frac{2s + 3}{(s+1)^2 + 4} = \frac{2(s+1) + 1}{(s+1)^2 + 4} = 2 \cdot \frac{s+1}{(s+1)^2 + 4} + \frac{1}{2} \cdot \frac{2}{(s+1)^2 + 4}$

$f(t) = 2e^{-t}\cos 2t + \frac{1}{2}e^{-t}\sin 2t = e^{-t}\left(2\cos 2t + \frac{1}{2}\sin 2t\right)$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.8 (Worked Example: Inverse Laplace Transform).

</details>

### Problem 18 (Fourier Series)

Find the Fourier series of $f(x) = \begin{cases} 1 & 0 \lt{} x \lt{} \pi \\ -1 & -\pi \lt{} x \lt{} 0 \end{cases}$
extended $2\pi$-periodically (the square wave).

<details>
<summary>Solution</summary>

_Solution._ $f$ is odd, so $a_n = 0$ for all $n$.

$b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\, dx = \frac{1}{\pi}\left[\int_{-\pi}^{0}(-1)\sin(nx)\, dx + \int_0^{\pi}(1)\sin(nx)\, dx\right]$

$= \frac{1}{\pi}\left[\frac{\cos(nx)}{n}\Big|_{-\pi}^0 - \frac{\cos(nx)}{n}\Big|_0^{\pi}\right]$

$= \frac{1}{\pi}\left[\frac{1 - \cos(n\pi)}{n} - \frac{\cos(n\pi) - 1}{n}\right] = \frac{1}{\pi}\left[\frac{2 - 2\cos(n\pi)}{n}\right] = \frac{2(1 - (-1)^n)}{n\pi}$

For even $n$: $b_n = 0$. For odd $n = 2k + 1$: $b_n = \frac{4}{n\pi}$.

$f(x) \sim \frac{4}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{2k+1}$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.1 and 7.6 (Fourier Series).

</details>

### Problem 19 (Heat Equation)

Solve $u_t = 4u_{xx}$ for $0 \lt{} x \lt{} \pi$, $t > 0$, with $u(0, t) = u(\pi, t) = 0$ and
$u(x, 0) = \sin x$.

<details>
<summary>Solution</summary>

_Solution._ Here $\alpha = 2$ and $L = \pi$.

$\lambda_n = (n\pi/\pi)^2 = n^2$, $X_n = \sin(nx)$, $T_n = e^{-4n^2 t}$.

The initial condition $\sin x$ is already the first sine mode.

$u(x, t) = e^{-4t}\sin x$. $\blacksquare$

_If you get this wrong, revise:_ Section 8.4 (Solving the Heat Equation by Separation of Variables).

</details>

### Problem 20 (Stability Classification)

Find and classify the critical points of $x' = y - x^2$, $y' = x - y^2$.

<details>
<summary>Solution</summary>

_Solution._ Set $y - x^2 = 0$ and $x - y^2 = 0$. From the first equation $y = x^2$, substituting
into the second: $x - x^4 = 0$, so $x(1 - x^3) = 0$.

$x = 0 \implies y = 0$. Critical point: $(0, 0)$.
$x = 1 \implies y = 1$. Critical point: $(1, 1)$.

Jacobian: $J = \begin{pmatrix} -2x & 1 \\ 1 & -2y \end{pmatrix}$.

At $(0, 0)$: $J = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
$\mathrm{tr}(J) = 0$, $\det(J) = -1 \lt{} 0$. **Saddle point** (unstable).

At $(1, 1)$: $J = \begin{pmatrix} -2 & 1 \\ 1 & -2 \end{pmatrix}$.
$\mathrm{tr}(J) = -4 \lt{} 0$, $\det(J) = 3 > 0$.
$\tau^2 - 4\Delta = 16 - 12 = 4 > 0$. Two distinct negative real eigenvalues. **Stable node**
(asymptotically stable). $\blacksquare$

_If you get this wrong, revise:_ Section 9.2 (Linearization and Stability) and Section 4.9
(Phase Portrait Analysis).

</details>
