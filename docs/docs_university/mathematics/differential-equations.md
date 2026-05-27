---
title: Differential Equations
description:
  'University-level notes on Differential Equations: 1. Introduction and Classification; 1.1 Basic
  Definitions; 1.2 Classification of ODEs.'
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
Derivatives. A **partial differential equation (PDE)** involves a function of several variables and
Its partial derivatives.

### 1.2 Classification of ODEs

An ODE is:

- **Ordinary** vs. **partial**: depends on whether partial derivatives appear.
- **Order**: the highest derivative that appears.
- **Linear** vs. **nonlinear**: linear if the unknown function and its derivatives appear linearly.
- **Homogeneous** vs. **nonhomogeneous**: for linear ODEs, homogeneous if the forcing term is zero.

### 1.3 Initial and Boundary Value Problems

An **initial value problem (IVP)** specifies the value of the function (and possibly its
Derivatives) at a single point. A **boundary value problem (BVP)** specifies conditions at two or
More points.

### 1.4 Examples from Physics and Biology

Differential equations arise throughout the natural sciences. A few canonical examples:

1. **Newton's law of cooling.** The temperature $T(t)$ of a body in a medium at temperature $T_m$
   satisfies $\frac◆LB◆dT◆RB◆◆LB◆dt◆RB◆ = -k(T - T_m)$A first-order linear ODE.

2. **Harmonic oscillator.** A mass on a spring with damping obeys
   $m\frac◆LB◆d^2 x◆RB◆◆LB◆dt^2◆RB◆ + c\frac◆LB◆dx◆RB◆◆LB◆dt◆RB◆ + kx = F(t)$A second-order linear ODE.

3. **Logistic population growth.** $\frac◆LB◆dP◆RB◆◆LB◆dt◆RB◆ = rP\left(1 - \frac◆LB◆P◆RB◆◆LB◆K◆RB◆\right)$A first-order
   nonlinear (Bernoulli) ODE.

4. **Lotka-Volterra predator-prey model.**
   $\frac◆LB◆dx◆RB◆◆LB◆dt◆RB◆ = x(\alpha - \beta y)$, $\frac◆LB◆dy◆RB◆◆LB◆dt◆RB◆ = y(-\gamma + \delta x)$A coupled nonlinear
   system.

5. **RC circuit.** The charge $q(t)$ on a capacitor satisfies $R\frac◆LB◆dq◆RB◆◆LB◆dt◆RB◆ + \frac◆LB◆q◆RB◆◆LB◆C◆RB◆ = V(t)$
   a first-order linear ODE.

6. **Heat equation.** The temperature $u(x, t)$ in a rod satisfies $u_t = \alpha^2 u_◆LB◆xx◆RB◆$A
   second-order linear PDE.

7. **Wave equation.** The displacement $u(x, t)$ of a string satisfies $u_◆LB◆tt◆RB◆ = c^2 u_◆LB◆xx◆RB◆$A
   second-order linear PDE.

8. **Laplace's equation.** The steady-state temperature satisfies $u_◆LB◆xx◆RB◆ + u_◆LB◆yy◆RB◆ = 0$A
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

(d) $\frac◆LB◆\partial^2 u◆RB◆◆LB◆\partial x^2◆RB◆ + \frac◆LB◆\partial^2 u◆RB◆◆LB◆\partial y^2◆RB◆ = 0$

<details>
<summary>Solution</summary>

(a) Second-order, linear, nonhomogeneous (forcing term $\sin x \neq 0$).

(b) First-order, nonlinear (the term $(y')^2$ is nonlinear in $y'$).

(c) Second-order, linear, homogeneous. This is Bessel's equation of order 1.

(d) Second-order PDE, linear, homogeneous. This is Laplace's equation; $A = 1$, $C = 1$, $B = 0$ So
$B^2 - 4AC = -4 \lt 0$ (elliptic). $\blacksquare$

</details>

## 2. First-Order ODEs

### 2.1 Separable Equations

A first-order ODE $\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = f(x, y)$ is **separable** if $f(x, y) = g(x)h(y)$.

$$\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = g(x)h(y) \implies \frac◆LB◆dy◆RB◆◆LB◆h(y)◆RB◆ = g(x)\, dx$$

Integrating both sides: $\int \frac◆LB◆dy◆RB◆◆LB◆h(y)◆RB◆ = \int g(x)\, dx + C$.

**Example.** Solve $\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = xy$.

Separating: $\frac◆LB◆dy◆RB◆◆LB◆y◆RB◆ = x\, dx$. Integrating: $\ln|y| = \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ + C$. Thus
$y = Ce^◆LB◆x^2/2◆RB◆$ where $C \neq 0$Plus the trivial solution $y = 0$.

### 2.2 Linear First-Order Equations

A **linear first-order ODE** has the form

$$\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ + P(x)y = Q(x)$$

**Theorem 2.1 (Integrating Factor).** The solution is

$$y(x) = e^◆LB◆-\int P(x)\, dx◆RB◆\left(\int Q(x) e^◆LB◆\int P(x)\, dx◆RB◆\, dx + C\right)$$

_Proof._ Multiply both sides by $\mu(x) = e^◆LB◆\int P(x)\, dx◆RB◆$:

$$\frac◆LB◆d◆RB◆◆LB◆dx◆RB◆(\mu y) = \mu \frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ + \mu P y = \mu \frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ + \mu' y = \mu\left(\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ + Py\right) = \mu Q$$

Integrating: $\mu y = \int \mu Q\, dx + C$. Solving for $y$ gives the result. $\blacksquare$

### 2.3 Worked Example: Linear Equation

**Problem.** Solve $y' + \frac◆LB◆2◆RB◆◆LB◆x◆RB◆y = x^2$ for $x > 0$.

_Solution._ $P(x) = 2/x$, $Q(x) = x^2$.

$\mu(x) = e^◆LB◆\int 2/x\, dx◆RB◆ = e^◆LB◆2\ln x◆RB◆ = x^2$.

$y = x^◆LB◆-2◆RB◆\left(\int x^2 \cdot x^2\, dx + C\right) = x^◆LB◆-2◆RB◆\left(\frac◆LB◆x^5◆RB◆◆LB◆5◆RB◆ + C\right) = \frac◆LB◆x^3◆RB◆◆LB◆5◆RB◆ + \frac◆LB◆C◆RB◆◆LB◆x^2◆RB◆$.
$\blacksquare$

### 2.4 Exact Equations

The ODE $M(x, y)\, dx + N(x, y)\, dy = 0$ is **exact** if
$\frac◆LB◆\partial M◆RB◆◆LB◆\partial y◆RB◆ = \frac◆LB◆\partial N◆RB◆◆LB◆\partial x◆RB◆$.

When exact, there exists $\Psi(x, y)$ such that $\frac◆LB◆\partial \Psi◆RB◆◆LB◆\partial x◆RB◆ = M$ and
$\frac◆LB◆\partial \Psi◆RB◆◆LB◆\partial y◆RB◆ = N$And the solution is $\Psi(x, y) = C$.

**Theorem 2.2.** If $M$ and $N$ have continuous partial derivatives on a connected domain $D$Then
$M\, dx + N\, dy = 0$ is exact if and only if $M_y = N_x$.

_Proof._ If exact, $M = \Psi_x$ and $N = \Psi_y$So $M_y = \Psi_◆LB◆xy◆RB◆ = \Psi_◆LB◆yx◆RB◆ = N_x$ by Clairaut.
Conversely, if $M_y = N_x$Define
$\Psi(x, y) = \int_◆LB◆x_0◆RB◆^x M(t, y)\, dt + \int_◆LB◆y_0◆RB◆^y N(x_0, s)\, ds$. Then $\Psi_x = M(x, y)$ and
$\Psi_y = \int_◆LB◆x_0◆RB◆^x M_y(t, y)\, dt + N(x_0, y) = \int_◆LB◆x_0◆RB◆^x N_x(t, y)\, dt + N(x_0, y) = N(x, y) - N(x_0, y) + N(x_0, y) = N(x, y)$.
$\blacksquare$

### 2.5 Worked Example: Exact Equation

**Problem.** Solve $(2xy + 3)\, dx + (x^2 - 1)\, dy = 0$.

_Solution._ $M = 2xy + 3$, $N = x^2 - 1$. Check: $M_y = 2x = N_x$. Exact.

$\Psi_x = 2xy + 3 \implies \Psi = x^2 y + 3x + h(y)$.

$\Psi_y = x^2 + h'(y) = x^2 - 1 \implies h'(y) = -1 \implies h(y) = -y$.

Solution: $x^2 y + 3x - y = C$. $\blacksquare$

### 2.6 Integrating Factors for Non-Exact Equations

If $M_y \neq N_x$One can sometimes find an **integrating factor** $\mu(x, y)$ such that
$(\mu M)_y = (\mu N)_x$.

**Case 1:** If $\frac◆LB◆M_y - N_x◆RB◆◆LB◆N◆RB◆$ depends only on $x$Then
$\mu(x) = e^◆LB◆\int \frac◆LB◆M_y - N_x◆RB◆◆LB◆N◆RB◆\, dx◆RB◆$.

**Case 2:** If $\frac◆LB◆N_x - M_y◆RB◆◆LB◆M◆RB◆$ depends only on $y$Then
$\mu(y) = e^◆LB◆\int \frac◆LB◆N_x - M_y◆RB◆◆LB◆M◆RB◆\, dy◆RB◆$.

### 2.7 Bernoulli Equations

A **Bernoulli equation** has the form

$$\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ + P(x)y = Q(x)y^n$$

Where $n \neq 0, 1$. The substitution $v = y^◆LB◆1-n◆RB◆$ transforms it into a linear equation:

$$\frac◆LB◆dv◆RB◆◆LB◆dx◆RB◆ + (1 - n)P(x)v = (1 - n)Q(x)$$

**Example.** Solve $y' + y = y^2 e^x$.

Here $n = 2$So set $v = y^◆LB◆-1◆RB◆$. Then $v' = -y^◆LB◆-2◆RB◆y'$And the equation becomes $v' - v = -e^x$.
Integrating factor: $e^◆LB◆-x◆RB◆$. So $(v e^◆LB◆-x◆RB◆)' = -1$Giving $ve^◆LB◆-x◆RB◆ = -x + C$, $v = -xe^x + Ce^x$ And
$y = 1/(C - x)e^x$.

### 2.8 Existence and Uniqueness

**Theorem 2.3 (Picard-Lindelöf).** If $f$ and $\partial f/\partial y$ are continuous on a rectangle
Containing $(x_0, y_0)$Then the IVP $y' = f(x, y)$, $y(x_0) = y_0$ has a unique solution in some
Neighbourhood of $x_0$.

### 2.9 Substitution Methods

Several substitutions reduce specific equations to separable or linear form:

1. **Homogeneous equations**: $y' = f(y/x)$. Set $v = y/x$.
2. **Equations of the form $y' = f(ax + by + c)$**: set $v = ax + by + c$.

### 2.10 Homogeneous Equations

An ODE of the form $\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = F\left(\frac◆LB◆y◆RB◆◆LB◆x◆RB◆\right)$ is called **homogeneous** (not to be
Confused with the linearity sense). The substitution $v = y/x$I.e., $y = vx$Gives $y' = v + xv'$ So
the equation becomes:

$$v + x\frac◆LB◆dv◆RB◆◆LB◆dx◆RB◆ = F(v) \implies x\frac◆LB◆dv◆RB◆◆LB◆dx◆RB◆ = F(v) - v$$

This is separable: $\frac◆LB◆dv◆RB◆◆LB◆F(v) - v◆RB◆ = \frac◆LB◆dx◆RB◆◆LB◆x◆RB◆$.

### 2.11 Worked Example: Homogeneous Equation

**Problem.** Solve $y' = \frac◆LB◆x^2 + y^2◆RB◆◆LB◆xy◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ Rewrite as $y' = \frac◆LB◆1 + (y/x)^2◆RB◆◆LB◆y/x◆RB◆$. This is homogeneous with
$F(v) = \frac◆LB◆1 + v^2◆RB◆◆LB◆v◆RB◆$.

Set $y = vx$: $v + xv' = \frac◆LB◆1 + v^2◆RB◆◆LB◆v◆RB◆ = v + \frac◆LB◆1◆RB◆◆LB◆v◆RB◆$.

So $xv' = \frac◆LB◆1◆RB◆◆LB◆v◆RB◆$Giving $v\, dv = \frac◆LB◆dx◆RB◆◆LB◆x◆RB◆$.

Integrating: $\frac◆LB◆v^2◆RB◆◆LB◆2◆RB◆ = \ln|x| + C$. Since $v = y/x$:

$\frac◆LB◆y^2◆RB◆◆LB◆2x^2◆RB◆ = \ln|x| + C \implies y^2 = 2x^2(\ln|x| + C)$. $\blacksquare$

</details>

### 2.12 Riccati Equations

A **Riccati equation** has the form

$$\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = q_0(x) + q_1(x)y + q_2(x)y^2$$

If a particular solution $y_1(x)$ is known, the substitution $y = y_1 + \frac◆LB◆1◆RB◆◆LB◆v◆RB◆$ reduces the
Riccati equation to a linear first-order equation in $v$:

$$\frac◆LB◆dv◆RB◆◆LB◆dx◆RB◆ = -(q_1 + 2q_2 y_1)v - q_2$$

**Example.** Solve $y' = 1 + x^2 - 2xy + y^2$ given that $y_1 = x$ is a particular solution.

Substituting $y = x + 1/v$: $y' = 1 - v'/v^2$. The equation becomes

$1 - v'/v^2 = 1 + x^2 - 2x(x + 1/v) + (x + 1/v)^2$

$1 - v'/v^2 = 1 + x^2 - 2x^2 - 2x/v + x^2 + 2x/v + 1/v^2$

$1 - v'/v^2 = 1 + 1/v^2$

$-v'/v^2 = 1/v^2 \implies v' = -1$

So $v = -x + C$And $y = x + \frac◆LB◆1◆RB◆◆LB◆C - x◆RB◆$.

### 2.13 Worked Example: Newton's Law of Cooling

**Problem.** A body at $90\degree\mathrm◆LB◆C$ is placed in a room at $20\degree\mathrm◆LB◆C$. After 10
Minutes, its temperature is $60\degree\mathrm◆LB◆C$. When will it reach $30\degree\mathrm◆LB◆C$?

<details>
<summary>Solution</summary>

_Solution._ Newton's law of cooling: $\frac◆LB◆dT◆RB◆◆LB◆dt◆RB◆ = -k(T - 20)$, $T(0) = 90$.

This is separable: $\frac◆LB◆dT◆RB◆◆LB◆T - 20◆RB◆ = -k\, dt$.

$\ln(T - 20) = -kt + C \implies T = 20 + Ce^◆LB◆-kt◆RB◆$.

$T(0) = 90 \implies C = 70$So $T = 20 + 70e^◆LB◆-kt◆RB◆$.

$T(10) = 60 \implies 60 = 20 + 70e^◆LB◆-10k◆RB◆ \implies e^◆LB◆-10k◆RB◆ = 4/7$.

$k = -\frac◆LB◆1◆RB◆◆LB◆10◆RB◆\ln(4/7) = \frac◆LB◆\ln(7/4)◆RB◆◆LB◆10◆RB◆$.

For $T = 30$:
$30 = 20 + 70e^◆LB◆-kt◆RB◆ \implies e^◆LB◆-kt◆RB◆ = 1/7 \implies t = \frac◆LB◆\ln 7◆RB◆◆LB◆k◆RB◆ = \frac◆LB◆10 \ln 7◆RB◆◆LB◆\ln(7/4)◆RB◆$.

Numerically: $t \approx \frac◆LB◆10 \cdot 1.946◆RB◆◆LB◆0.5596◆RB◆ \approx 34.8$ minutes. $\blacksquare$

</details>

### 2.14 Worked Example: Mixing Problem

**Problem.** A tank contains 100 L of brine with 20 kg of salt. Fresh water enters at 3 L/min and
The mixture leaves at 3 L/min. Find the amount of salt after 30 minutes.

<details>
<summary>Solution</summary>

_Solution._ Let $Q(t)$ be the amount of salt (kg) at time $t$ (min).

Rate of change:
$\frac◆LB◆dQ◆RB◆◆LB◆dt◆RB◆ = \mathrm◆LB◆rate\; in - \mathrm◆LB◆rate\; out = 0 - 3 \cdot \frac◆LB◆Q◆RB◆◆LB◆100◆RB◆$.

$\frac◆LB◆dQ◆RB◆◆LB◆dt◆RB◆ = -\frac◆LB◆3Q◆RB◆◆LB◆100◆RB◆$, $Q(0) = 20$.

This is separable: $\frac◆LB◆dQ◆RB◆◆LB◆Q◆RB◆ = -\frac◆LB◆3◆RB◆◆LB◆100◆RB◆\, dt$.

$\ln Q = -\frac◆LB◆3t◆RB◆◆LB◆100◆RB◆ + C \implies Q = Ce^◆LB◆-3t/100◆RB◆$.

$Q(0) = 20 \implies Q = 20e^◆LB◆-3t/100◆RB◆$.

At $t = 30$: $Q(30) = 20e^◆LB◆-0.9◆RB◆ \approx 20 \cdot 0.4066 \approx 8.13$ kg. $\blacksquare$

</details>

### 2.15 Worked Example: Integrating Factor

**Problem.** Solve $(3xy + 2y^2)\, dx + (x^2 + 2xy)\, dy = 0$.

<details>
<summary>Solution</summary>

_Solution._ $M = 3xy + 2y^2$, $N = x^2 + 2xy$.

$M_y = 3x + 4y$, $N_x = 2x + 2y$. Since $M_y \neq N_x$Not exact.

Check Case 1:
$\frac◆LB◆M_y - N_x◆RB◆◆LB◆N◆RB◆ = \frac◆LB◆x + 2y◆RB◆◆LB◆x^2 + 2xy◆RB◆ = \frac◆LB◆x + 2y◆RB◆◆LB◆x(x + 2y)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆x◆RB◆$.

This depends only on $x$So $\mu(x) = e^◆LB◆\int 1/x\, dx◆RB◆ = x$.

Multiply: $(3x^2y + 2xy^2)\, dx + (x^3 + 2x^2y)\, dy = 0$.

$\tilde◆LB◆M◆RB◆ = 3x^2y + 2xy^2$, $\tilde◆LB◆N◆RB◆ = x^3 + 2x^2y$.

$\tilde◆LB◆M◆RB◆_y = 3x^2 + 4xy = \tilde◆LB◆N◆RB◆_x$. Now exact.

$\Psi_x = 3x^2y + 2xy^2 \implies \Psi = x^3y + x^2y^2 + h(y)$.

$\Psi_y = x^3 + 2x^2y + h'(y) = x^3 + 2x^2y \implies h'(y) = 0 \implies h(y) = 0$.

Solution: $x^3y + x^2y^2 = C$. $\blacksquare$

</details>

### 2.16 Orthogonal Trajectories

Given a one-parameter family of curves $F(x, y, C) = 0$The **orthogonal trajectories** are curves
That intersect every member of the family at right angles. To find them:

1. Find the differential equation $\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = f(x, y)$ of the given family.
2. Replace $\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆$ with $-\frac◆LB◆dx◆RB◆◆LB◆dy◆RB◆$ (equivalently, negate the slope).
3. Solve the new ODE.

**Example.** Find the orthogonal trajectories of $y = Cx^2$.

$\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = 2Cx = \frac◆LB◆2y◆RB◆◆LB◆x◆RB◆$.

Orthogonal trajectories satisfy $\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = -\frac◆LB◆x◆RB◆◆LB◆2y◆RB◆$.

Separating: $2y\, dy = -x\, dx$. Integrating: $y^2 = -\frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ + C$Or
$\frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ + y^2 = C$. These are ellipses.

### 2.17 Common Pitfalls for First-Order ODEs

:::caution Common Pitfall When separating variables, dividing by $h(y)$ can lose solutions where
$h(y) = 0$. Always check whether $h(y) = 0$ yields valid solutions before dividing. :::

:::caution Common Pitfall Not every first-order ODE falls into a standard category. Equations like
$y' = e^◆LB◆x^2◆RB◆ + \sin(y^2)$ cannot be solved by elementary methods and require numerical Techniques.
:::

## 3. Second-Order Linear ODEs

### 3.1 General Theory

A **second-order linear ODE** has the form

$$y'' + p(x)y' + q(x)y = g(x)$$

**Theorem 3.1.** If $y_1$ and $y_2$ are solutions of the homogeneous equation $y'' + py' + qy = 0$
Then $c_1 y_1 + c_2 y_2$ is also a solution (superposition principle).

**Theorem 3.2 (Wronskian Criterion).** Two solutions $y_1, y_2$ of the homogeneous equation form a
**fundamental set** (i.e., span all solutions) if and only if their Wronskian is non-zero:

$$W(y_1, y_2)(x) = \begin◆LB◆vmatrix◆RB◆ y_1 & y_2 \\ y_1' & y_2' \end◆LB◆vmatrix◆RB◆ \neq 0$$

**Abel's identity** states that $W(x) = W(x_0) e^◆LB◆-\int_◆LB◆x_0◆RB◆^x p(t)\, dt◆RB◆$.

**Theorem 3.3.** The general solution of $y'' + py' + qy = g$ is $y = y_h + y_p$Where $y_h$ is the
General solution of the homogeneous equation and $y_p$ is any particular solution.

### 3.2 Homogeneous Equations with Constant Coefficients

For $y'' + ay' + by = 0$ with $a, b$ constants, try $y = e^◆LB◆rx◆RB◆$:

$$r^2 + ar + b = 0$$

**Case 1: Two distinct real roots $r_1 \neq r_2$.** $y_h = c_1 e^◆LB◆r_1 x◆RB◆ + c_2 e^◆LB◆r_2 x◆RB◆$.

**Case 2: Repeated root $r$.** $y_h = c_1 e^◆LB◆rx◆RB◆ + c_2 x e^◆LB◆rx◆RB◆$.

**Case 3: Complex conjugate roots $r = \alpha \pm i\beta$.**
$y_h = e^◆LB◆\alpha x◆RB◆(c_1 \cos(\beta x) + c_2 \sin(\beta x))$.

### 3.3 Worked Example: Homogeneous Equation

**Problem.** Solve $y'' - 5y' + 6y = 0$ with $y(0) = 1$, $y'(0) = 0$.

_Solution._ Characteristic equation: $r^2 - 5r + 6 = (r-2)(r-3) = 0$. Roots: $r = 2, 3$.

$y_h = c_1 e^◆LB◆2x◆RB◆ + c_2 e^◆LB◆3x◆RB◆$.

$y(0) = c_1 + c_2 = 1$. $y'(0) = 2c_1 + 3c_2 = 0$. Solving: $c_1 = 3$, $c_2 = -2$.

$y = 3e^◆LB◆2x◆RB◆ - 2e^◆LB◆3x◆RB◆$. $\blacksquare$

### 3.4 Worked Example: Complex Roots

**Problem.** Solve $y'' + 2y' + 5y = 0$ with $y(0) = 1$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^2 + 2r + 5 = 0$.

$r = \frac◆LB◆-2 \pm \sqrt◆LB◆4 - 20◆RB◆◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆-2 \pm \sqrt◆LB◆-16◆RB◆◆RB◆◆LB◆2◆RB◆ = -1 \pm 2i$.

So $\alpha = -1$, $\beta = 2$.

$y = e^◆LB◆-x◆RB◆(c_1 \cos(2x) + c_2 \sin(2x))$.

$y(0) = c_1 = 1$.

$y' = -e^◆LB◆-x◆RB◆(\cos(2x) + c_2 \sin(2x)) + e^◆LB◆-x◆RB◆(-2\sin(2x) + 2c_2 \cos(2x))$.

$y'(0) = -1 + 2c_2 = 0 \implies c_2 = 1/2$.

$y = e^◆LB◆-x◆RB◆\left(\cos(2x) + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sin(2x)\right)$. $\blacksquare$

</details>

### 3.5 Worked Example: Repeated Roots

**Problem.** Solve $y'' - 4y' + 4y = 0$ with $y(0) = 1$, $y'(0) = 3$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^2 - 4r + 4 = (r - 2)^2 = 0$. Repeated root $r = 2$.

$y = c_1 e^◆LB◆2x◆RB◆ + c_2 xe^◆LB◆2x◆RB◆$.

$y(0) = c_1 = 1$.

$y' = 2c_1 e^◆LB◆2x◆RB◆ + c_2 e^◆LB◆2x◆RB◆ + 2c_2 xe^◆LB◆2x◆RB◆$.

$y'(0) = 2c_1 + c_2 = 3 \implies 2 + c_2 = 3 \implies c_2 = 1$.

$y = e^◆LB◆2x◆RB◆ + xe^◆LB◆2x◆RB◆ = e^◆LB◆2x◆RB◆(1 + x)$. $\blacksquare$

</details>

### 3.6 Nonhomogeneous Equations: Undetermined Coefficients

For equations $y'' + ay' + by = g(x)$ where $g(x)$ is a polynomial, exponential, sine, cosine, or
Products of these, guess the form of $y_p$ and solve for coefficients.

| $g(x)$                               | Guess for $y_p$                  |
| ------------------------------------ | -------------------------------- |
| $P_n(x)$                             | $A_n x^n + \cdots + A_0$         |
| $e^◆LB◆ax◆RB◆$                             | $Ae^◆LB◆ax◆RB◆$                        |
| $\sin(bx)$ or $\cos(bx)$             | $A\sin(bx) + B\cos(bx)$          |
| $e^◆LB◆ax◆RB◆ P_n(x)$                      | $e^◆LB◆ax◆RB◆(A_n x^n + \cdots + A_0)$ |
| $e^◆LB◆ax◆RB◆\sin(bx)$ or $e^◆LB◆ax◆RB◆\cos(bx)$ | $e^◆LB◆ax◆RB◆(A\sin(bx) + B\cos(bx))$  |

**Rule.** If any term of the guess is a solution of the homogeneous equation, multiply by $x$ (or
$x^2$ if already multiplied by $x$).

### 3.7 Worked Example: Undetermined Coefficients

**Problem.** Solve $y'' - y = 2e^x$.

_Solution._ Homogeneous: $r^2 - 1 = 0$Roots $\pm 1$. $y_h = c_1 e^x + c_2 e^◆LB◆-x◆RB◆$.

Since $e^x$ is a homogeneous solution, guess $y_p = Axe^x$. $y_p' = Ae^x + Axe^x$
$y_p'' = 2Ae^x + Axe^x$. $y_p'' - y_p = (2Ae^x + Axe^x) - Axe^x = 2Ae^x = 2e^x$So $A = 1$.

$y = c_1 e^x + c_2 e^◆LB◆-x◆RB◆ + xe^x$. $\blacksquare$

### 3.8 Worked Example: Undetermined Coefficients with Polynomial

**Problem.** Solve $y'' + 3y' + 2y = x^2 + 1$.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 + 3r + 2 = (r+1)(r+2) = 0$Roots $-1, -2$.

$y_h = c_1 e^◆LB◆-x◆RB◆ + c_2 e^◆LB◆-2x◆RB◆$.

Guess $y_p = Ax^2 + Bx + C$. Then $y_p' = 2Ax + B$, $y_p'' = 2A$.

Substituting: $2A + 3(2Ax + B) + 2(Ax^2 + Bx + C) = x^2 + 1$.

$2A + 6Ax + 3B + 2Ax^2 + 2Bx + 2C = x^2 + 1$.

Matching coefficients:

- $x^2$: $2A = 1 \implies A = 1/2$
- $x$: $6A + 2B = 0 \implies 3 + 2B = 0 \implies B = -3/2$
- Constant: $2A + 3B + 2C = 1 \implies 1 - 9/2 + 2C = 1 \implies 2C = 9/2 \implies C = 9/4$

$y_p = \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆3x◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆9◆RB◆◆LB◆4◆RB◆$.

$y = c_1 e^◆LB◆-x◆RB◆ + c_2 e^◆LB◆-2x◆RB◆ + \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆3x◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆9◆RB◆◆LB◆4◆RB◆$. $\blacksquare$

</details>

### 3.8b Worked Example: Undetermined Coefficients with Product

**Problem.** Solve $y'' + 2y' + y = 3e^◆LB◆-x◆RB◆\sin x$.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 + 2r + 1 = (r+1)^2 = 0$. Repeated root $r = -1$.

$y_h = c_1 e^◆LB◆-x◆RB◆ + c_2 xe^◆LB◆-x◆RB◆$.

The forcing is $e^◆LB◆-x◆RB◆\sin x$So guess $y_p = e^◆LB◆-x◆RB◆(A\sin x + B\cos x)$.

$y_p' = -e^◆LB◆-x◆RB◆(A\sin x + B\cos x) + e^◆LB◆-x◆RB◆(A\cos x - B\sin x) = e^◆LB◆-x◆RB◆((A - B)\cos x - (A + B)\sin x)$.

$y_p'' = -e^◆LB◆-x◆RB◆((A - B)\cos x - (A + B)\sin x) + e^◆LB◆-x◆RB◆(-(A - B)\sin x - (A + B)\cos x)$

$= e^◆LB◆-x◆RB◆(-2A\cos x + 2B\sin x)$.

$y_p'' + 2y_p' + y_p = e^◆LB◆-x◆RB◆(-2A\cos x + 2B\sin x) + 2e^◆LB◆-x◆RB◆((A - B)\cos x - (A + B)\sin x) + e^◆LB◆-x◆RB◆(A\sin x + B\cos x)$

$= e^◆LB◆-x◆RB◆[(-2A + 2A - 2B + B)\cos x + (2B - 2A - 2B + A)\sin x]$

$= e^◆LB◆-x◆RB◆[(-B)\cos x + (-A)\sin x]$.

Setting equal to $3e^◆LB◆-x◆RB◆\sin x$: $-B = 0$ and $-A = 3$So $A = -3$, $B = 0$.

$y = c_1 e^◆LB◆-x◆RB◆ + c_2 xe^◆LB◆-x◆RB◆ - 3e^◆LB◆-x◆RB◆\sin x$. $\blacksquare$

</details>
### 3.9 Resonance

Consider the forced harmonic oscillator

$$y'' + \omega_0^2 y = F_0 \cos(\omega t)$$

**Case 1: $\omega \neq \omega_0$ (Non-resonant).** The particular solution is
$y_p = \frac◆LB◆F_0◆RB◆◆LB◆\omega_0^2 - \omega^2◆RB◆\cos(\omega t)$With bounded amplitude.

**Case 2: $\omega = \omega_0$ (Resonant).** Since $\cos(\omega_0 t)$ is a homogeneous solution,
Guess $y_p = At\sin(\omega_0 t)$. Substituting:

$y_p'' + \omega_0^2 y_p = 2A\omega_0 \cos(\omega_0 t) - A\omega_0^2 t\sin(\omega_0 t) + A\omega_0^2 t\sin(\omega_0 t) = 2A\omega_0 \cos(\omega_0 t)$

Setting equal to $F_0 \cos(\omega_0 t)$: $A = \frac◆LB◆F_0◆RB◆◆LB◆2\omega_0◆RB◆$.

$$y_p = \frac◆LB◆F_0◆RB◆◆LB◆2\omega_0◆RB◆ t \sin(\omega_0 t)$$

The amplitude grows linearly with $t$ --- this is **resonance**. Physically, the system absorbs
energy From the periodic forcing at its natural frequency, causing unbounded oscillations.

**Worked Example.** Solve $y'' + 9y = 6\cos(3t)$$y(0) = 0$$y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ $\omega_0 = 3$$\omega = 3$So this is the resonant case.

Homogeneous: $r^2 + 9 = 0$$r = \pm 3i$. $y_h = c_1 \cos(3t) + c_2 \sin(3t)$.

$y_p = \frac◆LB◆6◆RB◆◆LB◆2 \cdot 3◆RB◆ t\sin(3t) = t\sin(3t)$.

$y = c_1 \cos(3t) + c_2 \sin(3t) + t\sin(3t)$.

$y(0) = c_1 = 0$.

$y' = 3c_2 \cos(3t) + \sin(3t) + 3t\cos(3t)$.

$y'(0) = 3c_2 = 0 \implies c_2 = 0$.

$y = t\sin(3t)$. $\blacksquare$

</details>

### 3.10 Variation of Parameters

**Theorem 3.4 (Variation of Parameters).** For $y'' + p(x)y' + q(x)y = g(x)$Let $y_1, y_2$ be a
Fundamental set of solutions of the homogeneous equation. Then a particular solution is

$$y_p = -y_1 \int \frac◆LB◆y_2 g◆RB◆◆LB◆W◆RB◆\, dx + y_2 \int \frac◆LB◆y_1 g◆RB◆◆LB◆W◆RB◆\, dx$$

Where $W = W(y_1, y_2) = y_1 y_2' - y_2 y_1'$.

_Proof._ Seek $y_p = u_1(x)y_1(x) + u_2(x)y_2(x)$. Impose the constraint $u_1'y_1 + u_2'y_2 = 0$.
Then $y_p' = u_1 y_1' + u_2 y_2'$ and $y_p'' = u_1' y_1' + u_1 y_1'' + u_2' y_2' + u_2 y_2''$.
Substituting into the ODE:
$(u_1'y_1' + u_2'y_2') + u_1(y_1'' + py_1' + qy_1) + u_2(y_2'' + py_2' + qy_2) = g$. Since
$y_1, y_2$ satisfy the homogeneous equation, this reduces to $u_1'y_1' + u_2'y_2' = g$. Together
With $u_1'y_1 + u_2'y_2 = 0$Solving gives the formulas above. $\blacksquare$

### 3.11 Worked Example: Variation of Parameters

**Problem.** Solve $y'' + y = \tan x$ using variation of parameters.

_Solution._ $y_1 = \cos x$, $y_2 = \sin x$. $W = \cos x \cdot \cos x - \sin x \cdot (-\sin x) = 1$.

$u_1' = -\frac◆LB◆y_2 g◆RB◆◆LB◆W◆RB◆ = -\sin x \tan x = -\frac◆LB◆\sin^2 x◆RB◆◆LB◆\cos x◆RB◆ = -(1 - \cos^2 x)/\cos x = -\sec x + \cos x$.

$u_1 = -\ln|\sec x + \tan x| + \sin x$.

$u_2' = \frac◆LB◆y_1 g◆RB◆◆LB◆W◆RB◆ = \cos x \tan x = \sin x$.

$u_2 = -\cos x$.

$y_p = (-\ln|\sec x + \tan x| + \sin x)\cos x + (-\cos x)\sin x = -\cos x \ln|\sec x + \tan x|$.

$y = c_1 \cos x + c_2 \sin x - \cos x \ln|\sec x + \tan x|$. $\blacksquare$

### 3.12 Reduction of Order

**Theorem 3.5.** Given one solution $y_1(x)$ of $y'' + p(x)y' + q(x)y = 0$A second linearly
Independent solution is obtained by setting $y_2 = y_1 \int \frac◆LB◆e^◆LB◆-\int p(x)\, dx◆RB◆◆RB◆◆LB◆y_1^2◆RB◆\, dx$.

_Proof._ Seek $y_2 = v(x) y_1(x)$. Then $y_2' = v'y_1 + vy_1'$ and
$y_2'' = v''y_1 + 2v'y_1' + vy_1''$. Substituting into the ODE:

$v''y_1 + 2v'y_1' + vy_1'' + p(v'y_1 + vy_1') + qvy_1 = 0$

$v''y_1 + v'(2y_1' + py_1) + v(y_1'' + py_1' + qy_1) = 0$

Since $y_1$ satisfies the ODE, the coefficient of $v$ vanishes:

$v''y_1 + v'(2y_1' + py_1) = 0$

Let $w = v'$. Then $w'y_1 + w(2y_1' + py_1) = 0$A separable first-order ODE:

$\frac◆LB◆w'◆RB◆◆LB◆w◆RB◆ = -\frac◆LB◆2y_1' + py_1◆RB◆◆LB◆y_1◆RB◆ = -2\frac◆LB◆y_1'◆RB◆◆LB◆y_1◆RB◆ - p$

$\ln w = -2\ln y_1 - \int p\, dx \implies w = \frac◆LB◆e^◆LB◆-\int p\, dx◆RB◆◆RB◆◆LB◆y_1^2◆RB◆$

Since $w = v'$We obtain the result. $\blacksquare$

**Worked Example.** Given that $y_1 = e^x$ solves $y'' - 2y' + y = 0$Find a second solution.

<details>
<summary>Solution</summary>

_Solution._ Here $p(x) = -2$So $e^◆LB◆-\int p\, dx◆RB◆ = e^◆LB◆2x◆RB◆$.

$y_2 = e^x \int \frac◆LB◆e^◆LB◆2x◆RB◆◆RB◆◆LB◆e^◆LB◆2x◆RB◆◆RB◆\, dx = e^x \int 1\, dx = xe^x$.

This gives $y_h = c_1 e^x + c_2 xe^x$Consistent with the repeated-root case ($r = 1$ with
Multiplicity 2). $\blacksquare$

</details>

### 3.13 Euler-Cauchy Equations

An **Euler-Cauchy (equidimensional) equation** has the form

$$x^2 y'' + axy' + by = 0, \quad x > 0$$

The substitution $y = x^r$ gives the characteristic equation

$$r(r - 1) + ar + b = r^2 + (a - 1)r + b = 0$$

**Case 1: Two distinct real roots $r_1 \neq r_2$.** $y_h = c_1 x^◆LB◆r_1◆RB◆ + c_2 x^◆LB◆r_2◆RB◆$.

**Case 2: Repeated root $r$.** $y_h = c_1 x^r + c_2 x^r \ln x$.

**Case 3: Complex roots $r = \alpha \pm i\beta$.**
$y_h = x^◆LB◆\alpha◆RB◆(c_1 \cos(\beta \ln x) + c_2 \sin(\beta \ln x))$.

### 3.14 Worked Example: Euler-Cauchy Equation

**Problem.** Solve $x^2 y'' - 3xy' + 4y = 0$.

<details>
<summary>Solution</summary>

_Solution._ Try $y = x^r$: $r(r-1) - 3r + 4 = r^2 - 4r + 4 = (r-2)^2 = 0$.

Repeated root $r = 2$.

$y = c_1 x^2 + c_2 x^2 \ln x$. $\blacksquare$

</details>

**Worked Example.** Solve $x^2 y'' + xy' + y = 0$.

<details>
<summary>Solution</summary>

_Solution._ $r(r-1) + r + 1 = r^2 + 1 = 0$. Roots $r = \pm i$.

Here $\alpha = 0$, $\beta = 1$.

$y = c_1 \cos(\ln x) + c_2 \sin(\ln x)$. $\blacksquare$

</details>

### 3.15 Higher-Order Linear ODEs

For $y^◆LB◆(n)◆RB◆ + a_◆LB◆n-1◆RB◆y^◆LB◆(n-1)◆RB◆ + \cdots + a_1 y' + a_0 y = 0$:

- Characteristic equation $r^n + a_◆LB◆n-1◆RB◆r^◆LB◆n-1◆RB◆ + \cdots + a_0 = 0$.
- For root $r$ of multiplicity $m$: include $e^◆LB◆rx◆RB◆, xe^◆LB◆rx◆RB◆, \ldots, x^◆LB◆m-1◆RB◆e^◆LB◆rx◆RB◆$.
- For complex roots $\alpha \pm i\beta$ of multiplicity $m$: include
  $e^◆LB◆\alpha x◆RB◆ x^k \cos(\beta x)$ and $e^◆LB◆\alpha x◆RB◆ x^k \sin(\beta x)$ for $k = 0, \ldots, m - 1$.

### 3.16 Spring-Mass-Damper Systems

A mass $m$ on a spring with spring constant $k$ and damping coefficient $c$Subject to external force
$F(t)$Satisfies

$$mx'' + cx' + kx = F(t)$$

Dividing by $m$ and setting $\omega_0 = \sqrt◆LB◆k/m◆RB◆$, $\gamma = c/(2m)$:

$$x'' + 2\gamma x' + \omega_0^2 x = \frac◆LB◆F(t)◆RB◆◆LB◆m◆RB◆$$

The homogeneous solution depends on the discriminant $\gamma^2 - \omega_0^2$:

| Condition                 | Type        | Homogeneous Solution                                                                                  |
| ------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| $\gamma^2 \lt \omega_0^2$ | Underdamped | $e^◆LB◆-\gamma t◆RB◆(c_1 \cos(\omega_d t) + c_2 \sin(\omega_d t))$, $\omega_d = \sqrt◆LB◆\omega_0^2 - \gamma^2◆RB◆$ |
| $\gamma^2 = \omega_0^2$   | Critical    | $e^◆LB◆-\gamma t◆RB◆(c_1 + c_2 t)$                                                                          |
| $\gamma^2 > \omega_0^2$   | Overdamped  | $c_1 e^◆LB◆r_1 t◆RB◆ + c_2 e^◆LB◆r_2 t◆RB◆$, $r_◆LB◆1,2◆RB◆ = -\gamma \pm \sqrt◆LB◆\gamma^2 - \omega_0^2◆RB◆$                   |

### 3.17 Common Pitfalls for Second-Order ODEs

:::caution Common Pitfall When using undetermined coefficients, always check whether your guess
Overlaps with the homogeneous solution. For $y'' - 4y = e^◆LB◆2x◆RB◆$Guessing $y_p = Ae^◆LB◆2x◆RB◆$ fails
Because $e^◆LB◆2x◆RB◆$ satisfies the homogeneous equation. You must use $y_p = Axe^◆LB◆2x◆RB◆$ instead. :::

:::caution Common Pitfall For Euler-Cauchy equations, the substitution $y = x^r$ only works for
$x > 0$. For $x < 0$Substitute $x = -e^t$ or use $y = (-x)^r$. :::

:::caution Common Pitfall Variation of parameters always works but can lead to difficult integrals.
If the forcing term $g(x)$ is a polynomial, exponential, sine, or cosine (or products of these),
Prefer undetermined coefficients --- it is much faster. :::

### 3.18 Abel's Identity (Proof)

**Theorem 3.6 (Abel's Identity).** If $y_1, y_2$ are solutions of $y'' + p(x)y' + q(x)y = 0$ Then
their Wronskian satisfies

$$W(x) = W(x_0) e^◆LB◆-\int_◆LB◆x_0◆RB◆^x p(t)\, dt◆RB◆$$

_Proof._ Since $y_1, y_2$ satisfy the ODE:

$y_1'' = -py_1' - qy_1$ and $y_2'' = -py_2' - qy_2$.

$W' = y_1 y_2'' + y_1' y_2' - y_1'' y_2 - y_1' y_2'$

$= y_1(-py_2' - qy_2) - (-py_1' - qy_1)y_2$

$= -p(y_1 y_2' - y_1' y_2) = -pW$.

So $W' + pW = 0$Giving $W = Ce^◆LB◆-\int p\, dx◆RB◆$And evaluating at $x_0$ gives the result.
$\blacksquare$

_Corollary._ $W(x)$ is either identically zero or never zero.

### 3.19 Worked Example: Variation of Parameters (Second Example)

**Problem.** Solve $y'' - 4y = xe^x$ using variation of parameters.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 - 4 = 0$$r = \pm 2$. $y_1 = e^◆LB◆2x◆RB◆$$y_2 = e^◆LB◆-2x◆RB◆$.

$W = e^◆LB◆2x◆RB◆(-2e^◆LB◆-2x◆RB◆) - e^◆LB◆-2x◆RB◆(2e^◆LB◆2x◆RB◆) = -4$.

$u_1' = -\frac◆LB◆y_2 g◆RB◆◆LB◆W◆RB◆ = -\frac◆LB◆e^◆LB◆-2x◆RB◆ \cdot xe^x◆RB◆◆LB◆-4◆RB◆ = \frac◆LB◆xe^◆LB◆-x◆RB◆◆RB◆◆LB◆4◆RB◆$.

$u_1 = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\int xe^◆LB◆-x◆RB◆\, dx = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆(-xe^◆LB◆-x◆RB◆ - e^◆LB◆-x◆RB◆) + C_1 = -\frac◆LB◆(x+1)e^◆LB◆-x◆RB◆◆RB◆◆LB◆4◆RB◆$.

$u_2' = \frac◆LB◆y_1 g◆RB◆◆LB◆W◆RB◆ = \frac◆LB◆e^◆LB◆2x◆RB◆ \cdot xe^x◆RB◆◆LB◆-4◆RB◆ = -\frac◆LB◆xe^◆LB◆3x◆RB◆◆RB◆◆LB◆4◆RB◆$.

$u_2 = -\frac◆LB◆1◆RB◆◆LB◆4◆RB◆\int xe^◆LB◆3x◆RB◆\, dx = -\frac◆LB◆1◆RB◆◆LB◆4◆RB◆\left(\frac◆LB◆xe^◆LB◆3x◆RB◆◆RB◆◆LB◆3◆RB◆ - \frac◆LB◆e^◆LB◆3x◆RB◆◆RB◆◆LB◆9◆RB◆\right) + C_2 = -\frac◆LB◆(3x - 1)e^◆LB◆3x◆RB◆◆RB◆◆LB◆36◆RB◆$.

$y_p = u_1 y_1 + u_2 y_2 = -\frac◆LB◆(x+1)e^◆LB◆-x◆RB◆◆RB◆◆LB◆4◆RB◆ \cdot e^◆LB◆2x◆RB◆ + \left(-\frac◆LB◆(3x-1)e^◆LB◆3x◆RB◆◆RB◆◆LB◆36◆RB◆\right) \cdot e^◆LB◆-2x◆RB◆$

$= -\frac◆LB◆(x+1)e^x◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆(3x-1)e^x◆RB◆◆LB◆36◆RB◆ = e^x\left(-\frac◆LB◆9(x+1)◆RB◆◆LB◆36◆RB◆ - \frac◆LB◆3x - 1◆RB◆◆LB◆36◆RB◆\right) = e^x\left(\frac◆LB◆-9x - 9 - 3x + 1◆RB◆◆LB◆36◆RB◆\right) = -\frac◆LB◆(x + 2)e^x◆RB◆◆LB◆9◆RB◆$.

$y = c_1 e^◆LB◆2x◆RB◆ + c_2 e^◆LB◆-2x◆RB◆ - \frac◆LB◆(x+2)e^x◆RB◆◆LB◆9◆RB◆$. $\blacksquare$

</details>
## 4. Systems of ODEs

### 4.1 First-Order Linear Systems

A system of first-order linear ODEs can be written in matrix form:

$$\mathbf◆LB◆x◆RB◆' = A\mathbf◆LB◆x◆RB◆ + \mathbf◆LB◆f◆RB◆(t)$$

Where $A$ is an $n \times n$ matrix and $\mathbf◆LB◆x◆RB◆, \mathbf◆LB◆f◆RB◆ \in \mathbb◆LB◆R◆RB◆^n$.

### 4.2 Homogeneous Systems with Constant Coefficients

For $\mathbf◆LB◆x◆RB◆' = A\mathbf◆LB◆x◆RB◆$Try $\mathbf◆LB◆x◆RB◆ = \mathbf◆LB◆v◆RB◆e^◆LB◆\lambda t◆RB◆$:

$$\lambda \mathbf◆LB◆v◆RB◆ = A\mathbf◆LB◆v◆RB◆$$

So $\lambda$ is an eigenvalue of $A$ and $\mathbf◆LB◆v◆RB◆$ is the corresponding eigenvector.

**Case 1: $A$ has $n$ distinct real eigenvalues.** The general solution is

$$\mathbf◆LB◆x◆RB◆ = c_1 \mathbf◆LB◆v◆RB◆_1 e^◆LB◆\lambda_1 t◆RB◆ + \cdots + c_n \mathbf◆LB◆v◆RB◆_n e^◆LB◆\lambda_n t◆RB◆$$

**Case 2: $A$ has a repeated eigenvalue $\lambda$ with algebraic multiplicity $m$ and geometric
Multiplicity $k \lt m$.** Include terms involving $t^j e^◆LB◆\lambda t◆RB◆$ where generalized Eigenvectors
fill out the solution space.

**Case 3: Complex eigenvalues $\lambda = \alpha \pm i\beta$ with eigenvector
$\mathbf◆LB◆v◆RB◆ = \mathbf◆LB◆a◆RB◆ \pm i\mathbf◆LB◆b◆RB◆$.** The real solutions are
$e^◆LB◆\alpha t◆RB◆(\mathbf◆LB◆a◆RB◆\cos(\beta t) - \mathbf◆LB◆b◆RB◆\sin(\beta t))$ and
$e^◆LB◆\alpha t◆RB◆(\mathbf◆LB◆a◆RB◆\sin(\beta t) + \mathbf◆LB◆b◆RB◆\cos(\beta t))$.

### 4.3 The Matrix Exponential

**Definition.** $e^◆LB◆At◆RB◆ = \sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆A^k t^k◆RB◆◆LB◆k!◆RB◆$.

**Theorem 4.1.** The solution to $\mathbf◆LB◆x◆RB◆' = A\mathbf◆LB◆x◆RB◆$ with $\mathbf◆LB◆x◆RB◆(0) = \mathbf◆LB◆x◆RB◆_0$ is
$\mathbf◆LB◆x◆RB◆(t) = e^◆LB◆At◆RB◆\mathbf◆LB◆x◆RB◆_0$.

**Proposition 4.2.** If $A$ is diagonalizable as $A = PDP^◆LB◆-1◆RB◆$Then $e^◆LB◆At◆RB◆ = Pe^◆LB◆Dt◆RB◆P^◆LB◆-1◆RB◆$ Where
$e^◆LB◆Dt◆RB◆ = \mathrm◆LB◆diag(e^◆LB◆\lambda_1 t◆RB◆, \ldots, e^◆LB◆\lambda_n t◆RB◆)$.

### 4.4 Worked Example: Distinct Real Eigenvalues

**Problem.** Solve $\mathbf◆LB◆x◆RB◆' = \begin◆LB◆pmatrix◆RB◆ 0 & 1 \\ -2 & -3 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆x◆RB◆$.

_Solution._ Characteristic equation:
$\det(A - \lambda I) = \lambda^2 + 3\lambda + 2 = (\lambda + 1)(\lambda + 2) = 0$. Eigenvalues:
$\lambda_1 = -1$, $\lambda_2 = -2$.

For $\lambda_1 = -1$:
$(A + I)\mathbf◆LB◆v◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 1 & 1 \\ -2 & -2 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆v◆RB◆ = \mathbf◆LB◆0◆RB◆$.
$\mathbf◆LB◆v◆RB◆_1 = \begin◆LB◆pmatrix◆RB◆ 1 \\ -1 \end◆LB◆pmatrix◆RB◆$.

For $\lambda_2 = -2$:
$(A + 2I)\mathbf◆LB◆v◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 2 & 1 \\ -2 & -1 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆v◆RB◆ = \mathbf◆LB◆0◆RB◆$.
$\mathbf◆LB◆v◆RB◆_2 = \begin◆LB◆pmatrix◆RB◆ 1 \\ -2 \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆x◆RB◆(t) = c_1 \begin◆LB◆pmatrix◆RB◆ 1 \\ -1 \end◆LB◆pmatrix◆RB◆ e^◆LB◆-t◆RB◆ + c_2 \begin◆LB◆pmatrix◆RB◆ 1 \\ -2 \end◆LB◆pmatrix◆RB◆ e^◆LB◆-2t◆RB◆$.
$\blacksquare$

### 4.5 Worked Example: Complex Eigenvalues

**Problem.** Solve $\mathbf◆LB◆x◆RB◆' = \begin◆LB◆pmatrix◆RB◆ 0 & -2 \\ 1 & 0 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆x◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ $\det(A - \lambda I) = \lambda^2 + 2 = 0$. Eigenvalues: $\lambda = \pm i\sqrt◆LB◆2◆RB◆$.

For $\lambda = i\sqrt◆LB◆2◆RB◆$:
$\begin◆LB◆pmatrix◆RB◆ -i\sqrt◆LB◆2◆RB◆ & -2 \\ 1 & -i\sqrt◆LB◆2◆RB◆ \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆v◆RB◆ = \mathbf◆LB◆0◆RB◆$.

From the first row: $-i\sqrt◆LB◆2◆RB◆\, v_1 - 2v_2 = 0$So $v_2 = -\frac◆LB◆i\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆2◆RB◆v_1$.

With $v_1 = 2$:
$\mathbf◆LB◆v◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 2 \\ 0 \end◆LB◆pmatrix◆RB◆ + i\begin◆LB◆pmatrix◆RB◆ 0 \\ -\sqrt◆LB◆2◆RB◆ \end◆LB◆pmatrix◆RB◆$.

So
$\mathbf◆LB◆a◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 2 \\ 0 \end◆LB◆pmatrix◆RB◆$, $\mathbf◆LB◆b◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 0 \\ -\sqrt◆LB◆2◆RB◆ \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆x◆RB◆(t) = c_1\left[\mathbf◆LB◆a◆RB◆\cos(\sqrt◆LB◆2◆RB◆\, t) - \mathbf◆LB◆b◆RB◆\sin(\sqrt◆LB◆2◆RB◆\, t)\right] + c_2\left[\mathbf◆LB◆a◆RB◆\sin(\sqrt◆LB◆2◆RB◆\, t) + \mathbf◆LB◆b◆RB◆\cos(\sqrt◆LB◆2◆RB◆\, t)\right]$

$= c_1 \begin◆LB◆pmatrix◆RB◆ 2\cos(\sqrt◆LB◆2◆RB◆\, t) \\ \sqrt◆LB◆2◆RB◆\sin(\sqrt◆LB◆2◆RB◆\, t) \end◆LB◆pmatrix◆RB◆ + c_2 \begin◆LB◆pmatrix◆RB◆ 2\sin(\sqrt◆LB◆2◆RB◆\, t) \\ -\sqrt◆LB◆2◆RB◆\cos(\sqrt◆LB◆2◆RB◆\, t) \end◆LB◆pmatrix◆RB◆$.
$\blacksquare$

</details>

### 4.6 Worked Example: Repeated Eigenvalues

**Problem.** Solve $\mathbf◆LB◆x◆RB◆' = \begin◆LB◆pmatrix◆RB◆ 2 & 1 \\ -1 & 4 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆x◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._
$\det(A - \lambda I) = (2 - \lambda)(4 - \lambda) + 1 = \lambda^2 - 6\lambda + 9 = (\lambda - 3)^2 = 0$.

Repeated eigenvalue $\lambda = 3$ with algebraic multiplicity 2.

$(A - 3I) = \begin◆LB◆pmatrix◆RB◆ -1 & 1 \\ -1 & 1 \end◆LB◆pmatrix◆RB◆$.

Eigenvector: $\begin◆LB◆pmatrix◆RB◆ 1 \\ 1 \end◆LB◆pmatrix◆RB◆$. Only one eigenvector (geometric multiplicity
1), so we need a generalized eigenvector.

Find $\mathbf◆LB◆w◆RB◆$ such that
$(A - 3I)\mathbf◆LB◆w◆RB◆ = \mathbf◆LB◆v◆RB◆_1 = \begin◆LB◆pmatrix◆RB◆ 1 \\ 1 \end◆LB◆pmatrix◆RB◆$:

$\begin◆LB◆pmatrix◆RB◆ -1 & 1 \\ -1 & 1 \end◆LB◆pmatrix◆RB◆\begin◆LB◆pmatrix◆RB◆ w_1 \\ w_2 \end◆LB◆pmatrix◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 1 \\ 1 \end◆LB◆pmatrix◆RB◆$

$-w_1 + w_2 = 1$. Choose $w_1 = 0$Then $w_2 = 1$. So
$\mathbf◆LB◆w◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 0 \\ 1 \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆x◆RB◆(t) = c_1 \begin◆LB◆pmatrix◆RB◆ 1 \\ 1 \end◆LB◆pmatrix◆RB◆ e^◆LB◆3t◆RB◆ + c_2 \left[\begin◆LB◆pmatrix◆RB◆ 1 \\ 1 \end◆LB◆pmatrix◆RB◆ t e^◆LB◆3t◆RB◆ + \begin◆LB◆pmatrix◆RB◆ 0 \\ 1 \end◆LB◆pmatrix◆RB◆ e^◆LB◆3t◆RB◆\right]$

$= e^◆LB◆3t◆RB◆\left[c_1 \begin◆LB◆pmatrix◆RB◆ 1 \\ 1 \end◆LB◆pmatrix◆RB◆ + c_2 \begin◆LB◆pmatrix◆RB◆ t \\ t + 1 \end◆LB◆pmatrix◆RB◆\right]$.
$\blacksquare$

</details>

### 4.7 Fundamental Matrix

**Definition.** A **fundamental matrix** $\Phi(t)$ for the system $\mathbf◆LB◆x◆RB◆' = A\mathbf◆LB◆x◆RB◆$ is an
$n \times n$ matrix whose columns form a fundamental set of solutions.

**Proposition 4.3.** $\Phi(t)$ satisfies $\Phi' = A\Phi$And the general solution is
$\mathbf◆LB◆x◆RB◆(t) = \Phi(t)\mathbf◆LB◆c◆RB◆$ for $\mathbf◆LB◆c◆RB◆ \in \mathbb◆LB◆R◆RB◆^n$.

**Proposition 4.4.** The matrix exponential $e^◆LB◆At◆RB◆$ is a fundamental matrix with
$e^◆LB◆A \cdot 0◆RB◆ = I$. Any fundamental matrix can be written as $\Phi(t) = e^◆LB◆At◆RB◆\Phi(0)$.

### 4.8 Matrix Exponential Properties

**Theorem 4.5.** The matrix exponential satisfies:

1. $e^◆LB◆A \cdot 0◆RB◆ = I$
2. $\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆e^◆LB◆At◆RB◆ = Ae^◆LB◆At◆RB◆ = e^◆LB◆At◆RB◆A$
3. $e^◆LB◆At◆RB◆e^◆LB◆As◆RB◆ = e^◆LB◆A(t+s)◆RB◆$
4. $(e^◆LB◆At◆RB◆)^◆LB◆-1◆RB◆ = e^◆LB◆-At◆RB◆$
5. If $AB = BA$Then $e^◆LB◆A+B◆RB◆ = e^A e^B$

_Proof of (1)._ $e^◆LB◆A \cdot 0◆RB◆ = \sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆A^k 0^k◆RB◆◆LB◆k!◆RB◆ = I$. $\blacksquare$

_Proof of (2)._
$\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆e^◆LB◆At◆RB◆ = \sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆A^k t^◆LB◆k-1◆RB◆◆RB◆◆LB◆(k-1)!◆RB◆ = A\sum_◆LB◆j=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆A^j t^j◆RB◆◆LB◆j!◆RB◆ = Ae^◆LB◆At◆RB◆$.
Since $A$ commutes with itself, $Ae^◆LB◆At◆RB◆ = e^◆LB◆At◆RB◆A$. $\blacksquare$

_Proof of (4)._ From (3) with $s = -t$: $e^◆LB◆At◆RB◆e^◆LB◆-At◆RB◆ = e^◆LB◆A(t-t)◆RB◆ = e^0 = I$. $\blacksquare$

### 4.9 Phase Portrait Analysis for 2D Systems

For the linear system $\mathbf◆LB◆x◆RB◆' = A\mathbf◆LB◆x◆RB◆$ with $A$ a $2 \times 2$ matrix, the qualitative
Behaviour near the origin is determined by the eigenvalues:

| Eigenvalues                                 | Phase Portrait  | Stability             |
| ------------------------------------------- | --------------- | --------------------- |
| $\lambda_1, \lambda_2 \lt 0$Real, distinct  | Stable node     | Asymptotically stable |
| $\lambda_1, \lambda_2 > 0$Real, distinct    | Unstable node   | Unstable              |
| $\lambda_1 \lt 0 \lt \lambda_2$             | Saddle point    | Unstable              |
| $\lambda = \alpha \pm i\beta$, $\alpha \lt 0$ | Stable spiral   | Asymptotically stable |
| $\lambda = \alpha \pm i\beta$, $\alpha > 0$   | Unstable spiral | Unstable              |
| $\lambda = \pm i\beta$                      | Center          | (Marginally) stable   |

_Remark._ The **trace-determinant plane** provides a convenient classification. Let
$\tau = \mathrm◆LB◆tr(A)$ and $\Delta = \det(A)$. The eigenvalues satisfy
$\lambda^2 - \tau\lambda + \Delta = 0$So:

$$\lambda = \frac◆LB◆\tau \pm \sqrt◆LB◆\tau^2 - 4\Delta◆RB◆◆RB◆◆LB◆2◆RB◆$$

- $\tau^2 - 4\Delta > 0$: real eigenvalues (node or saddle)
- $\tau^2 - 4\Delta \lt 0$: complex eigenvalues (spiral or center)
- $\tau^2 - 4\Delta = 0$: repeated eigenvalues (proper or improper node)

Stability is determined by the sign of $\tau$: stable if $\tau \lt 0$Unstable if $\tau > 0$.

### 4.10 Nonhomogeneous Systems

For $\mathbf◆LB◆x◆RB◆' = A\mathbf◆LB◆x◆RB◆ + \mathbf◆LB◆f◆RB◆(t)$If $\Phi(t)$ is a fundamental matrix for the
Homogeneous system, the general solution is

$$\mathbf◆LB◆x◆RB◆(t) = \Phi(t)\mathbf◆LB◆c◆RB◆ + \Phi(t)\int \Phi^◆LB◆-1◆RB◆(s)\mathbf◆LB◆f◆RB◆(s)\, ds$$

**Worked Example.** Solve
$\mathbf◆LB◆x◆RB◆' = \begin◆LB◆pmatrix◆RB◆ 1 & 0 \\ 0 & 2 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆x◆RB◆ + \begin◆LB◆pmatrix◆RB◆ e^t \\ 0 \end◆LB◆pmatrix◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ Eigenvalues: $1$ and $2$.
$\Phi(t) = \begin◆LB◆pmatrix◆RB◆ e^t & 0 \\ 0 & e^◆LB◆2t◆RB◆ \end◆LB◆pmatrix◆RB◆$.

$\Phi^◆LB◆-1◆RB◆(s) = \begin◆LB◆pmatrix◆RB◆ e^◆LB◆-s◆RB◆ & 0 \\ 0 & e^◆LB◆-2s◆RB◆ \end◆LB◆pmatrix◆RB◆$.

$\Phi^◆LB◆-1◆RB◆(s)\mathbf◆LB◆f◆RB◆(s) = \begin◆LB◆pmatrix◆RB◆ e^◆LB◆-s◆RB◆ & 0 \\ 0 & e^◆LB◆-2s◆RB◆ \end◆LB◆pmatrix◆RB◆\begin◆LB◆pmatrix◆RB◆ e^s \\ 0 \end◆LB◆pmatrix◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 1 \\ 0 \end◆LB◆pmatrix◆RB◆$.

$\int \Phi^◆LB◆-1◆RB◆(s)\mathbf◆LB◆f◆RB◆(s)\, ds = \begin◆LB◆pmatrix◆RB◆ t \\ 0 \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆x◆RB◆_p = \Phi(t)\begin◆LB◆pmatrix◆RB◆ t \\ 0 \end◆LB◆pmatrix◆RB◆ = \begin◆LB◆pmatrix◆RB◆ te^t \\ 0 \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆x◆RB◆(t) = c_1 \begin◆LB◆pmatrix◆RB◆ e^t \\ 0 \end◆LB◆pmatrix◆RB◆ + c_2 \begin◆LB◆pmatrix◆RB◆ 0 \\ e^◆LB◆2t◆RB◆ \end◆LB◆pmatrix◆RB◆ + \begin◆LB◆pmatrix◆RB◆ te^t \\ 0 \end◆LB◆pmatrix◆RB◆$.
$\blacksquare$

</details>
## 5. Laplace Transforms

### 5.1 Definition

The **Laplace transform** of $f(t)$ (defined for $t \geq 0$) is

$$\mathcal◆LB◆L◆RB◆\{f(t)\} = F(s) = \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆ f(t)\, dt$$

The transform exists when $f$ is piecewise continuous on $[0, \infty)$ and of **exponential order**:
$|f(t)| \leq Me^◆LB◆at◆RB◆$ for some $M, a > 0$.

### 5.2 Basic Properties

**Theorem 5.1 (Linearity).** $\mathcal◆LB◆L◆RB◆\{af + bg\} = a\mathcal◆LB◆L◆RB◆\{f\} + b\mathcal◆LB◆L◆RB◆\{g\}$.

**Theorem 5.2 (First Shifting).** $\mathcal◆LB◆L◆RB◆\{e^◆LB◆at◆RB◆f(t)\} = F(s - a)$.

**Theorem 5.3 (Second Shifting).** $\mathcal◆LB◆L◆RB◆\{u_c(t)f(t - c)\} = e^◆LB◆-cs◆RB◆F(s)$Where $u_c(t)$ is
The unit step function.

**Theorem 5.4 (Derivative).** $\mathcal◆LB◆L◆RB◆\{f'(t)\} = sF(s) - f(0)$.

**Theorem 5.5 (n-th Derivative).**
$\mathcal◆LB◆L◆RB◆\{f^◆LB◆(n)◆RB◆(t)\} = s^n F(s) - s^◆LB◆n-1◆RB◆f(0) - \cdots - f^◆LB◆(n-1)◆RB◆(0)$.

**Theorem 5.6 (Integration).**
$\mathcal◆LB◆L◆RB◆\left\{\int_0^t f(\tau)\, d\tau\right\} = \frac◆LB◆F(s)◆RB◆◆LB◆s◆RB◆$.

**Theorem 5.7 (Convolution).** $\mathcal◆LB◆L◆RB◆\{f * g\} = F(s)G(s)$Where
$(f * g)(t) = \int_0^t f(\tau)g(t - \tau)\, d\tau$.

### 5.3 Proofs of Key Properties

_Proof of Linearity._
$\mathcal◆LB◆L◆RB◆\{af + bg\} = \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆[af(t) + bg(t)]\, dt = a\int_0^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆f(t)\, dt + b\int_0^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆g(t)\, dt = aF(s) + bG(s)$.
$\blacksquare$

_Proof of First Shifting Theorem._
$\mathcal◆LB◆L◆RB◆\{e^◆LB◆at◆RB◆f(t)\} = \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆ e^◆LB◆at◆RB◆ f(t)\, dt = \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-(s-a)t◆RB◆ f(t)\, dt = F(s - a)$.
$\blacksquare$

_Proof of Derivative Property._ Integrating by parts with $u = e^◆LB◆-st◆RB◆$, $dv = f'(t)\, dt$:

$\mathcal◆LB◆L◆RB◆\{f'(t)\} = \left[e^◆LB◆-st◆RB◆f(t)\right]_0^◆LB◆\infty◆RB◆ + s\int_0^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆f(t)\, dt = -f(0) + sF(s) = sF(s) - f(0)$.

The boundary term vanishes at $\infty$ because $f$ is of exponential order. $\blacksquare$

_Proof of Integration Property._ Let $g(t) = \int_0^t f(\tau)\, d\tau$. Then $g'(t) = f(t)$ and
$g(0) = 0$.
$\mathcal◆LB◆L◆RB◆\{f(t)\} = \mathcal◆LB◆L◆RB◆\{g'(t)\} = s\mathcal◆LB◆L◆RB◆\{g(t)\} - g(0) = s\mathcal◆LB◆L◆RB◆\{g(t)\}$.
Therefore $\mathcal◆LB◆L◆RB◆\{g(t)\} = F(s)/s$. $\blacksquare$

### 5.4 Common Laplace Transforms

| $f(t)$           | $F(s) = \mathcal◆LB◆L◆RB◆\{f(t)\}$ |
| ---------------- | ---------------------------- |
| $1$              | $1/s$                        |
| $t^n$            | $n!/s^◆LB◆n+1◆RB◆$                 |
| $e^◆LB◆at◆RB◆$         | $1/(s - a)$                  |
| $t^n e^◆LB◆at◆RB◆$     | $n!/(s - a)^◆LB◆n+1◆RB◆$           |
| $\sin(bt)$       | $b/(s^2 + b^2)$              |
| $\cos(bt)$       | $s/(s^2 + b^2)$              |
| $e^◆LB◆at◆RB◆\sin(bt)$ | $b/((s-a)^2 + b^2)$          |
| $e^◆LB◆at◆RB◆\cos(bt)$ | $(s-a)/((s-a)^2 + b^2)$      |
| $u_c(t)$         | $e^◆LB◆-cs◆RB◆/s$                  |
| $\delta(t - c)$  | $e^◆LB◆-cs◆RB◆$                    |

### 5.5 Solving IVPs with Laplace Transforms

**Procedure:**

1. Take the Laplace transform of both sides of the ODE.
2. Solve the resulting algebraic equation for $Y(s) = \mathcal◆LB◆L◆RB◆\{y(t)\}$.
3. Find the inverse Laplace transform to obtain $y(t)$.

### 5.6 Worked Example: Solving an IVP

**Problem.** Solve $y'' + 4y = \sin(2t)$$y(0) = 0$$y'(0) = 0$.

_Solution._ Taking Laplace transforms:

$s^2 Y + 4Y = \frac◆LB◆2◆RB◆◆LB◆s^2 + 4◆RB◆$

$(s^2 + 4)Y = \frac◆LB◆2◆RB◆◆LB◆s^2 + 4◆RB◆$

$Y = \frac◆LB◆2◆RB◆◆LB◆(s^2 + 4)^2◆RB◆$

To invert, use the convolution theorem:
$\mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\left\{\frac◆LB◆1◆RB◆◆LB◆s^2 + 4◆RB◆\right\} = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sin(2t)$.

$y(t) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sin(2t) * \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sin(2t) = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\int_0^t \sin(2\tau)\sin(2(t - \tau))\, d\tau$

Using $\sin A \sin B = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(\cos(A - B) - \cos(A + B))$:

$y(t) = \frac◆LB◆1◆RB◆◆LB◆8◆RB◆\int_0^t [\cos(4\tau - 2t) - \cos(2t)]\, d\tau = \frac◆LB◆1◆RB◆◆LB◆8◆RB◆\left[\frac◆LB◆\sin(4\tau - 2t)◆RB◆◆LB◆4◆RB◆\right]_0^t - \frac◆LB◆t◆RB◆◆LB◆8◆RB◆\cos(2t)$

$= \frac◆LB◆1◆RB◆◆LB◆32◆RB◆[\sin(2t) - \sin(-2t)] - \frac◆LB◆t◆RB◆◆LB◆8◆RB◆\cos(2t) = \frac◆LB◆\sin(2t)◆RB◆◆LB◆16◆RB◆ - \frac◆LB◆t\cos(2t)◆RB◆◆LB◆8◆RB◆$

$y(t) = \frac◆LB◆\sin(2t) - 2t\cos(2t)◆RB◆◆LB◆16◆RB◆$. $\blacksquare$

### 5.6b Worked Example: Partial Fractions for Inverse Laplace

**Problem.** Find $\mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\left\{\frac◆LB◆1◆RB◆◆LB◆s(s^2 + 4)◆RB◆
Ight\}$.

<details>
<summary>Solution</summary>

_Solution._ Partial fractions: $\frac◆LB◆1◆RB◆◆LB◆s(s^2 + 4)◆RB◆ = \frac◆LB◆A◆RB◆◆LB◆s◆RB◆ + \frac◆LB◆Bs + C◆RB◆◆LB◆s^2 + 4◆RB◆$.

$1 = A(s^2 + 4) + (Bs + C)s = (A + B)s^2 + Cs + 4A$.

$s^2$: $A + B = 0$$s$: $C = 0$Constant: $4A = 1 \implies A = 1/4$$B = -1/4$.

$\frac◆LB◆1◆RB◆◆LB◆s(s^2 + 4)◆RB◆ = \frac◆LB◆1/4◆RB◆◆LB◆s◆RB◆ - \frac◆LB◆s/4◆RB◆◆LB◆s^2 + 4◆RB◆$.

$f(t) = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\cos 2t$. $\blacksquare$

</details>
### 5.7 Convolution Theorem

**Theorem 5.8 (Convolution).** If $F(s) = \mathcal◆LB◆L◆RB◆\{f(t)\}$ and $G(s) = \mathcal◆LB◆L◆RB◆\{g(t)\}$ Then

$$\mathcal◆LB◆L◆RB◆\{f * g\} = F(s)G(s)$$

Where $(f * g)(t) = \int_0^t f(\tau)g(t - \tau)\, d\tau$.

_Proof._
$F(s)G(s) = \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-s\tau◆RB◆ f(\tau)\, d\tau \cdot \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-su◆RB◆ g(u)\, du$

$= \int_0^◆LB◆\infty◆RB◆ \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-s(\tau+u)◆RB◆ f(\tau) g(u)\, du\, d\tau$

Substitute $t = \tau + u$$u = t - \tau$. For fixed $\tau$$u$ ranges from $0$ to $\infty$So $t$
ranges From $\tau$ to $\infty$.

$= \int_0^◆LB◆\infty◆RB◆ f(\tau)\left[\int_◆LB◆\tau◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆ g(t - \tau)\, dt\right] d\tau$

Swap the order of integration (Fubini):

$= \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-st◆RB◆\left[\int_0^t f(\tau) g(t - \tau)\, d\tau\right] dt = \mathcal◆LB◆L◆RB◆\{(f * g)(t)\}$.
$\blacksquare$

### 5.8 Worked Example: Inverse Laplace Transform

**Problem.** Find $\mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\left\{\frac◆LB◆3s + 1◆RB◆◆LB◆s^2 + 4s + 13◆RB◆\right\}$.

<details>
<summary>Solution</summary>

_Solution._ Complete the square: $s^2 + 4s + 13 = (s + 2)^2 + 9$.

$\frac◆LB◆3s + 1◆RB◆◆LB◆s^2 + 4s + 13◆RB◆ = \frac◆LB◆3(s + 2) - 5◆RB◆◆LB◆(s + 2)^2 + 9◆RB◆ = 3 \cdot \frac◆LB◆s + 2◆RB◆◆LB◆(s + 2)^2 + 9◆RB◆ - \frac◆LB◆5◆RB◆◆LB◆3◆RB◆ \cdot \frac◆LB◆3◆RB◆◆LB◆(s + 2)^2 + 9◆RB◆$

Using the shifting theorem:

$\mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\left\{\frac◆LB◆s + 2◆RB◆◆LB◆(s + 2)^2 + 9◆RB◆\right\} = e^◆LB◆-2t◆RB◆\cos(3t)$

$\mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\left\{\frac◆LB◆3◆RB◆◆LB◆(s + 2)^2 + 9◆RB◆\right\} = e^◆LB◆-2t◆RB◆\sin(3t)$

$f(t) = 3e^◆LB◆-2t◆RB◆\cos(3t) - \frac◆LB◆5◆RB◆◆LB◆3◆RB◆e^◆LB◆-2t◆RB◆\sin(3t) = e^◆LB◆-2t◆RB◆\left(3\cos(3t) - \frac◆LB◆5◆RB◆◆LB◆3◆RB◆\sin(3t)\right)$.
$\blacksquare$

</details>

### 5.9 Worked Example: IVP with Discontinuous Forcing

**Problem.** Solve $y'' + 3y' + 2y = u_2(t)$$y(0) = 0$$y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Take Laplace transforms:

$s^2 Y + 3sY + 2Y = \frac◆LB◆e^◆LB◆-2s◆RB◆◆RB◆◆LB◆s◆RB◆$

$(s^2 + 3s + 2)Y = \frac◆LB◆e^◆LB◆-2s◆RB◆◆RB◆◆LB◆s◆RB◆$

$Y = \frac◆LB◆e^◆LB◆-2s◆RB◆◆RB◆◆LB◆s(s+1)(s+2)◆RB◆$

First find the partial fraction decomposition of $\frac◆LB◆1◆RB◆◆LB◆s(s+1)(s+2)◆RB◆$:

$\frac◆LB◆1◆RB◆◆LB◆s(s+1)(s+2)◆RB◆ = \frac◆LB◆A◆RB◆◆LB◆s◆RB◆ + \frac◆LB◆B◆RB◆◆LB◆s+1◆RB◆ + \frac◆LB◆C◆RB◆◆LB◆s+2◆RB◆$

$1 = A(s+1)(s+2) + Bs(s+2) + Cs(s+1)$

$s = 0$: $1 = 2A \implies A = 1/2$ $s = -1$: $1 = -B \implies B = -1$ $s = -2$:
$1 = 2C \implies C = 1/2$

So
$\mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\left\{\frac◆LB◆1◆RB◆◆LB◆s(s+1)(s+2)◆RB◆\right\} = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - e^◆LB◆-t◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆-2t◆RB◆$.

By the second shifting theorem:

$y(t) = u_2(t)\left[\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - e^◆LB◆-(t-2)◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆-2(t-2)◆RB◆\right]$ for $t \geq 0$.
$\blacksquare$

</details>

### 5.10 The Heaviside Function

The **Heaviside (unit step) function** is defined as

$$u_c(t) = \begin◆LB◆cases◆RB◆ 0 & t \lt c \\ 1 & t \geq c \end◆LB◆cases◆RB◆$$

It models a sudden switch being turned on at time $t = c$. The second shifting theorem states:

$$\mathcal◆LB◆L◆RB◆\{u_c(t)f(t - c)\} = e^◆LB◆-cs◆RB◆F(s)$$

Conversely, if $Y(s) = e^◆LB◆-cs◆RB◆G(s)$Then $y(t) = u_c(t) \cdot g(t - c)$ where
$g = \mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\{G\}$.

### 5.11 The Dirac Delta Function

The **Dirac delta function** $\delta(t - c)$ satisfies
$\int_0^◆LB◆\infty◆RB◆ \delta(t - c)f(t)\, dt = f(c)$ for continuous $f$. It models an instantaneous
Impulse.

$\mathcal◆LB◆L◆RB◆\{\delta(t - c)\} = e^◆LB◆-cs◆RB◆$.

**Properties:**

- $\delta(t - c) = 0$ for $t \neq c$
- $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \delta(t - c)\, dt = 1$
- $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \delta(t - c)f(t)\, dt = f(c)$ (sifting property)

### 5.12 Worked Example: Impulse Response

**Problem.** An undamped spring-mass system ($m = 1$, $k = 4$) is struck by an impulse at $t = 0$:
$y'' + 4y = \delta(t)$$y(0) = 0$$y'(0) = 0$. Find $y(t)$.

<details>
<summary>Solution</summary>

_Solution._ Taking Laplace transforms:

$s^2 Y + 4Y = 1$

$Y = \frac◆LB◆1◆RB◆◆LB◆s^2 + 4◆RB◆$

$y(t) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sin(2t)$.

This is the **impulse response** (Green's function) for the operator $D^2 + 4$. $\blacksquare$

</details>

### 5.13 Worked Example: IVP with Laplace

**Problem.** Solve $y'' - 6y' + 9y = 6e^◆LB◆3t◆RB◆$$y(0) = 0$$y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Taking Laplace transforms:

$s^2 Y - 6sY + 9Y = \frac◆LB◆6◆RB◆◆LB◆s - 3◆RB◆$

$(s - 3)^2 Y = \frac◆LB◆6◆RB◆◆LB◆s - 3◆RB◆$

$Y = \frac◆LB◆6◆RB◆◆LB◆(s - 3)^3◆RB◆$

Using the table: $\mathcal◆LB◆L◆RB◆\{t^n e^◆LB◆at◆RB◆\} = \frac◆LB◆n!◆RB◆◆LB◆(s-a)^◆LB◆n+1◆RB◆◆RB◆$.

$y(t) = 6 \cdot \frac◆LB◆t^2 e^◆LB◆3t◆RB◆◆RB◆◆LB◆2!◆RB◆ = 3t^2 e^◆LB◆3t◆RB◆$. $\blacksquare$

</details>

### 5.14 Common Pitfalls for Laplace Transforms

:::caution Common Pitfall The Laplace transform of $y'(t)$ is $sY(s) - y(0)$Not $sY(s)$. The Initial
conditions are built into the transform. Forgetting them leads to incorrect solutions. :::

:::caution Common Pitfall When using the second shifting theorem, the time-shifted function must Be
written as $u_c(t)f(t - c)$Not $u_c(t)f(t)$. The function $f$ must be shifted by the same Amount as
the step. :::

### 5.15 Proof Sketch: Picard Iteration

The Picard-Lindelöf theorem can be proved constructively via **Picard iteration**. For the IVP
$y' = f(x, y)$$y(x_0) = y_0$Define the sequence

$$\phi_0(x) = y_0, \quad \phi_◆LB◆n+1◆RB◆(x) = y_0 + \int_◆LB◆x_0◆RB◆^x f(t, \phi_n(t))\, dt$$

If $f$ and $\partial f/\partial y$ are continuous, one shows by induction that $(\phi_n)$ is
uniformly Cauchy on some interval $[x_0 - h, x_0 + h]$Hence converges uniformly to a function
$\phi$. Passing to the limit in the integral equation shows $\phi$ satisfies the ODE. Uniqueness
follows From the **Gronwall inequality** applied to the difference of two solutions.

## 6. Series Solutions

### 6.1 Power Series Method

For an ODE $y'' + p(x)y' + q(x)y = 0$ where $p$ and $q$ are analytic near $x_0$Substitute the Power
series $y = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n (x - x_0)^n$ and solve for the coefficients.

### 6.2 Ordinary and Regular Singular Points

$x_0$ is an **ordinary point** if $p$ and $q$ are analytic at $x_0$. It is a **regular singular
Point** if $(x - x_0)p(x)$ and $(x - x_0)^2 q(x)$ are analytic at $x_0$.

### 6.3 Frobenius Method

At a regular singular point $x_0 = 0$Substitute $y = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n x^◆LB◆n + r◆RB◆$. The
**indicial equation** determines the possible values of $r$.

**Theorem 6.1.** If the roots $r_1 \geq r_2$ of the indicial equation differ by a non-integer, there
Are two linearly independent solutions of the form $x^◆LB◆r_1◆RB◆\sum a_n x^n$ and $x^◆LB◆r_2◆RB◆\sum b_n x^n$.

### 6.4 Bessel's Equation

Bessel's equation of order $\nu$:

$$x^2 y'' + xy' + (x^2 - \nu^2)y = 0$$

For $\nu \notin \mathbb◆LB◆Z◆RB◆$The solutions are $J_\nu(x)$ and $J_◆LB◆-\nu◆RB◆(x)$ (Bessel functions of the
First kind). For $\nu = n \in \mathbb◆LB◆N◆RB◆$The second solution is the Weber function $Y_n(x)$.

### 6.4b Worked Example: Higher-Order ODE

**Problem.** Solve $y''' - 6y'' + 11y' - 6y = 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^3 - 6r^2 + 11r - 6 = 0$.

Trying $r = 1$: $1 - 6 + 11 - 6 = 0$. Factor: $(r - 1)(r^2 - 5r + 6) = (r - 1)(r - 2)(r - 3) = 0$.

Roots: $r = 1, 2, 3$ (three distinct real roots).

$y = c_1 e^x + c_2 e^◆LB◆2x◆RB◆ + c_3 e^◆LB◆3x◆RB◆$. $\blacksquare$

</details>
### 6.5 Worked Example: Power Series Method

**Problem.** Solve $y'' - xy = 0$ (Airy's equation) using power series about $x_0 = 0$.

<details>
<summary>Solution</summary>

_Solution._ Since $p(x) = 0$ and $q(x) = -x$ are both analytic everywhere, $x_0 = 0$ is an ordinary
Point. Substitute $y = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n x^n$:

$y' = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ na_n x^◆LB◆n-1◆RB◆$$y'' = \sum_◆LB◆n=2◆RB◆^◆LB◆\infty◆RB◆ n(n-1)a_n x^◆LB◆n-2◆RB◆$.

$y'' - xy = \sum_◆LB◆n=2◆RB◆^◆LB◆\infty◆RB◆ n(n-1)a_n x^◆LB◆n-2◆RB◆ - \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n x^◆LB◆n+1◆RB◆ = 0$.

Shift indices: first sum $\sum_◆LB◆m=0◆RB◆^◆LB◆\infty◆RB◆ (m+2)(m+1)a_◆LB◆m+2◆RB◆ x^m$Second sum
$\sum_◆LB◆m=1◆RB◆^◆LB◆\infty◆RB◆ a_◆LB◆m-1◆RB◆ x^m$.

For $m = 0$: $2 \cdot 1 \cdot a_2 = 0 \implies a_2 = 0$.

For $m \geq 1$: $(m+2)(m+1)a_◆LB◆m+2◆RB◆ - a_◆LB◆m-1◆RB◆ = 0 \implies a_◆LB◆m+2◆RB◆ = \frac◆LB◆a_◆LB◆m-1◆RB◆◆RB◆◆LB◆(m+2)(m+1)◆RB◆$.

This gives: $a_3 = \frac◆LB◆a_0◆RB◆◆LB◆6◆RB◆$$a_4 = \frac◆LB◆a_1◆RB◆◆LB◆12◆RB◆$$a_5 = \frac◆LB◆a_2◆RB◆◆LB◆20◆RB◆ = 0$
$a_6 = \frac◆LB◆a_3◆RB◆◆LB◆30◆RB◆ = \frac◆LB◆a_0◆RB◆◆LB◆180◆RB◆$Etc.

Since $a_2 = 0$All $a_◆LB◆3k+2◆RB◆ = 0$.

$y(x) = a_0\left(1 + \frac◆LB◆x^3◆RB◆◆LB◆6◆RB◆ + \frac◆LB◆x^6◆RB◆◆LB◆180◆RB◆ + \cdots\right) + a_1\left(x + \frac◆LB◆x^4◆RB◆◆LB◆12◆RB◆ + \frac◆LB◆x^7◆RB◆◆LB◆504◆RB◆ + \cdots\right)$.

These are the **Airy functions** $\mathrm◆LB◆Ai(x)$ and $\mathrm◆LB◆Bi(x)$ (up to normalization).
$\blacksquare$

</details>

### 6.6 Worked Example: Frobenius Method

**Problem.** Solve $2xy'' + y' + xy = 0$ near $x = 0$ using the Frobenius method.

<details>
<summary>Solution</summary>

_Solution._ Rewrite in standard form: $y'' + \frac◆LB◆1◆RB◆◆LB◆2x◆RB◆y' + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆y = 0$.

$x = 0$ is a regular singular point since $xp(x) = 1/2$ and $x^2 q(x) = x^2/2$ are analytic at $0$.

Substitute $y = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n x^◆LB◆n+r◆RB◆$$a_0 \neq 0$:

$y' = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ (n+r)a_n x^◆LB◆n+r-1◆RB◆$

$y'' = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ (n+r)(n+r-1)a_n x^◆LB◆n+r-2◆RB◆$

Substituting into $2xy'' + y' + xy = 0$:

$\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ 2(n+r)(n+r-1)a_n x^◆LB◆n+r-1◆RB◆ + \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ (n+r)a_n x^◆LB◆n+r-1◆RB◆ + \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n x^◆LB◆n+r+1◆RB◆ = 0$

For $n = 0$: $[2r(r-1) + r]a_0 = 0$. Since $a_0 \neq 0$: $r(2r - 2 + 1) = 0 \implies r(2r - 1) = 0$.

Indicial equation: $r = 0$ or $r = 1/2$.

For general $n \geq 1$: $[2(n+r)(n+r-1) + (n+r)]a_n + a_◆LB◆n-2◆RB◆ = 0$

$(n+r)(2n + 2r - 1)a_n = -a_◆LB◆n-2◆RB◆$

$a_n = -\frac◆LB◆a_◆LB◆n-2◆RB◆◆RB◆◆LB◆(n+r)(2n + 2r - 1)◆RB◆$

For $r = 0$: $a_n = -\frac◆LB◆a_◆LB◆n-2◆RB◆◆RB◆◆LB◆n(2n-1)◆RB◆$. Odd coefficients vanish ($a_1 = 0$). Even:
$a_2 = -\frac◆LB◆a_0◆RB◆◆LB◆6◆RB◆$ $a_4 = \frac◆LB◆a_0◆RB◆◆LB◆120◆RB◆$Etc.

For $r = 1/2$: $a_n = -\frac◆LB◆a_◆LB◆n-2◆RB◆◆RB◆◆LB◆(n+1/2)(2n)◆RB◆ = -\frac◆LB◆a_◆LB◆n-2◆RB◆◆RB◆◆LB◆n(2n+1)◆RB◆$.

$y = C_1 \sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ a_◆LB◆2k◆RB◆^◆LB◆(0)◆RB◆ x^◆LB◆2k◆RB◆ + C_2 x^◆LB◆1/2◆RB◆ \sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ a_◆LB◆2k◆RB◆^◆LB◆(1/2)◆RB◆ x^◆LB◆2k◆RB◆$.
$\blacksquare$

</details>

### 6.7 Worked Example: Bessel Functions

**Problem.** Find the first three nonzero terms of $J_0(x)$The Bessel function of the first kind Of
order zero, which satisfies $x^2 y'' + xy' + x^2 y = 0$.

<details>
<summary>Solution</summary>

_Solution._ Here $\nu = 0$. The indicial equation gives $r^2 = 0$ (repeated root $r = 0$).

Substituting $y = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n x^◆LB◆2n◆RB◆$ (we can show only even powers appear):

$y' = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ 2n a_n x^◆LB◆2n-1◆RB◆$$y'' = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ 2n(2n-1) a_n x^◆LB◆2n-2◆RB◆$.

$x^2 y'' + xy' + x^2 y = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ 2n(2n-1)a_n x^◆LB◆2n◆RB◆ + \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ 2n a_n x^◆LB◆2n◆RB◆ + \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n x^◆LB◆2n+2◆RB◆ = 0$.

For $n = 0$: $a_0$ is free.

For the recurrence: $4n^2 a_n + a_◆LB◆n-1◆RB◆ = 0 \implies a_n = -\frac◆LB◆a_◆LB◆n-1◆RB◆◆RB◆◆LB◆4n^2◆RB◆$ for $n \geq 1$.

$a_1 = -\frac◆LB◆a_0◆RB◆◆LB◆4◆RB◆$$a_2 = \frac◆LB◆a_0◆RB◆◆LB◆64◆RB◆$$a_3 = -\frac◆LB◆a_0◆RB◆◆LB◆2304◆RB◆$.

Setting $a_0 = 1$: $J_0(x) = 1 - \frac◆LB◆x^2◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆x^4◆RB◆◆LB◆64◆RB◆ - \frac◆LB◆x^6◆RB◆◆LB◆2304◆RB◆ + \cdots$.
$\blacksquare$

</details>
## 7. Fourier Series

### 7.1 Definition

A **Fourier series** of a $2\pi$-periodic function $f$ is

$$f(x) \sim \frac◆LB◆a_0◆RB◆◆LB◆2◆RB◆ + \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \left(a_n \cos(nx) + b_n \sin(nx)\right)$$

Where

$$a_n = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ f(x)\cos(nx)\, dx, \quad b_n = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ f(x)\sin(nx)\, dx$$

### 7.2 Derivation of Fourier Coefficients

The Fourier coefficients are derived using the orthogonality relations on $[-\pi, \pi]$:

$$\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ \cos(mx)\cos(nx)\, dx = \begin◆LB◆cases◆RB◆ \pi & m = n \neq 0 \\ 2\pi & m = n = 0 \\ 0 & m \neq n \end◆LB◆cases◆RB◆$$

$$\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ \sin(mx)\sin(nx)\, dx = \begin◆LB◆cases◆RB◆ \pi & m = n \neq 0 \\ 0 & m \neq n \end◆LB◆cases◆RB◆$$

$$\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ \cos(mx)\sin(nx)\, dx = 0 \quad \mathrm◆LB◆for\; all\; m, n$$

To find $a_n$Multiply both sides of the Fourier expansion by $\cos(nx)$ and integrate over
$[-\pi, \pi]$. By orthogonality, all terms vanish except the $\cos(nx)$ term, yielding
$a_n \pi = \int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ f(x)\cos(nx)\, dx$. Similarly for $b_n$.

### 7.3 Convergence

**Theorem 7.1 (Dirichlet's Theorem).** If $f$ is $2\pi$-periodic and piecewise smooth, its Fourier
Series converges to:

- $f(x)$ at points where $f$ is continuous.
- $\frac◆LB◆f(x^+) + f(x^-)◆RB◆◆LB◆2◆RB◆$ at jump discontinuities.

### 7.4 Parseval's Identity

$$\frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ |f(x)|^2\, dx = \frac◆LB◆a_0^2◆RB◆◆LB◆2◆RB◆ + \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆(a_n^2 + b_n^2)$$

_Intuition._ Parseval's identity is the infinite-dimensional analogue of the Pythagorean theorem:
The "energy" of $f$ (its $L^2$ norm squared) equals the sum of the energies of its Fourier
Components.

### 7.5 Sine and Cosine Series

For functions defined on $[0, L]$:

- **Cosine series** (even extension): $a_n = \frac◆LB◆2◆RB◆◆LB◆L◆RB◆\int_0^L f(x)\cos\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\, dx$
  $b_n = 0$.
- **Sine series** (odd extension): $a_n = 0$
  $b_n = \frac◆LB◆2◆RB◆◆LB◆L◆RB◆\int_0^L f(x)\sin\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\, dx$.

### 7.6 Worked Example: Fourier Sine Series

**Problem.** Find the Fourier series of $f(x) = x$ on $(-\pi, \pi)$Extended $2\pi$-periodically.

_Solution._ $f$ is odd, so $a_n = 0$ for all $n$.

$b_n = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ x\sin(nx)\, dx = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\int_0^◆LB◆\pi◆RB◆ x\sin(nx)\, dx$.

Integration by parts: $u = x$, $dv = \sin(nx)\, dx$:

$b_n = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\left[-\frac◆LB◆x\cos(nx)◆RB◆◆LB◆n◆RB◆\Big|_0^◆LB◆\pi◆RB◆ + \int_0^◆LB◆\pi◆RB◆ \frac◆LB◆\cos(nx)◆RB◆◆LB◆n◆RB◆\, dx\right] = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\left[-\frac◆LB◆\pi\cos(n\pi)◆RB◆◆LB◆n◆RB◆ + 0\right] = \frac◆LB◆-2\cos(n\pi)◆RB◆◆LB◆n◆RB◆ = \frac◆LB◆2(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n◆RB◆$.

$x \sim 2\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n◆RB◆\sin(nx)$. $\blacksquare$

### 7.7 Worked Example: Fourier Cosine Series

**Problem.** Find the Fourier cosine series of $f(x) = x^2$ on $[0, \pi]$.

<details>
<summary>Solution</summary>

_Solution._ Extend $f$ as an even function on $[-\pi, \pi]$. Then $b_n = 0$ for all $n$.

$a_0 = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\int_0^◆LB◆\pi◆RB◆ x^2\, dx = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆ \cdot \frac◆LB◆\pi^3◆RB◆◆LB◆3◆RB◆ = \frac◆LB◆2\pi^2◆RB◆◆LB◆3◆RB◆$.

For $n \geq 1$: $a_n = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\int_0^◆LB◆\pi◆RB◆ x^2\cos(nx)\, dx$.

Integrating by parts twice:

$u = x^2$$dv = \cos(nx)\, dx$: $du = 2x\, dx$$v = \sin(nx)/n$.

$a_n = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\left[\frac◆LB◆x^2\sin(nx)◆RB◆◆LB◆n◆RB◆\Big|_0^◆LB◆\pi◆RB◆ - \int_0^◆LB◆\pi◆RB◆ \frac◆LB◆2x\sin(nx)◆RB◆◆LB◆n◆RB◆\, dx\right] = -\frac◆LB◆4◆RB◆◆LB◆n\pi◆RB◆\int_0^◆LB◆\pi◆RB◆ x\sin(nx)\, dx$

$= -\frac◆LB◆4◆RB◆◆LB◆n\pi◆RB◆\left[-\frac◆LB◆x\cos(nx)◆RB◆◆LB◆n◆RB◆\Big|_0^◆LB◆\pi◆RB◆ + \int_0^◆LB◆\pi◆RB◆ \frac◆LB◆\cos(nx)◆RB◆◆LB◆n◆RB◆\, dx\right]$

$= -\frac◆LB◆4◆RB◆◆LB◆n\pi◆RB◆\left[-\frac◆LB◆\pi\cos(n\pi)◆RB◆◆LB◆n◆RB◆ + 0\right] = \frac◆LB◆4\cos(n\pi)◆RB◆◆LB◆n^2◆RB◆ = \frac◆LB◆4(-1)^n◆RB◆◆LB◆n^2◆RB◆$.

$x^2 \sim \frac◆LB◆\pi^2◆RB◆◆LB◆3◆RB◆ + 4\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^n◆RB◆◆LB◆n^2◆RB◆\cos(nx)$.

Setting $x = 0$: $0 = \frac◆LB◆\pi^2◆RB◆◆LB◆3◆RB◆ + 4\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^n◆RB◆◆LB◆n^2◆RB◆$Giving the famous
identity $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n^2◆RB◆ = \frac◆LB◆\pi^2◆RB◆◆LB◆12◆RB◆$. $\blacksquare$

</details>

### 7.8 Complex Fourier Series

Using Euler's formula, the Fourier series can be written in complex form:

$$f(x) \sim \sum_◆LB◆n=-\infty◆RB◆^◆LB◆\infty◆RB◆ c_n e^◆LB◆inx◆RB◆$$

Where $c_n = \frac◆LB◆1◆RB◆◆LB◆2\pi◆RB◆\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ f(x)e^◆LB◆-inx◆RB◆\, dx$.

The relationship with the real coefficients is $c_0 = a_0/2$, $c_n = (a_n - ib_n)/2$ for $n > 0$ And
$c_◆LB◆-n◆RB◆ = \overline◆LB◆c_n◆RB◆$ when $f$ is real-valued.

### 7.9 Worked Example: Parseval's Identity

**Problem.** Using the Fourier series of $f(x) = x$ on $(-\pi, \pi)$Verify Parseval's identity And
deduce $\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆ = \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ From Section 7.6: $a_0 = 0$$a_n = 0$$b_n = \frac◆LB◆2(-1)^◆LB◆n+1◆RB◆◆RB◆◆LB◆n◆RB◆$.

Parseval:
$\frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ x^2\, dx = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ b_n^2 = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆4◆RB◆◆LB◆n^2◆RB◆$.

$\frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆ \cdot \frac◆LB◆2\pi^3◆RB◆◆LB◆3◆RB◆ = 4\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆$.

$\frac◆LB◆2\pi^2◆RB◆◆LB◆3◆RB◆ = 4\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆$.

$\sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆ = \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆$. $\blacksquare$

</details>
## 8. Introduction to Partial Differential Equations

### 8.1 Classification of Second-Order PDEs

The general second-order linear PDE in two variables is

$$A u_◆LB◆xx◆RB◆ + B u_◆LB◆xy◆RB◆ + C u_◆LB◆yy◆RB◆ + D u_x + E u_y + F u = G$$

- **Elliptic** ($B^2 - 4AC \lt 0$): e.g., Laplace's equation $u_◆LB◆xx◆RB◆ + u_◆LB◆yy◆RB◆ = 0$.
- **Parabolic** ($B^2 - 4AC = 0$): e.g., the heat equation $u_t = \alpha^2 u_◆LB◆xx◆RB◆$.
- **Hyperbolic** ($B^2 - 4AC > 0$): e.g., the wave equation $u_◆LB◆tt◆RB◆ = c^2 u_◆LB◆xx◆RB◆$.

### 8.2 The Heat Equation

$$u_t = \alpha^2 u_◆LB◆xx◆RB◆, \quad 0 \lt x \lt L, \quad t > 0$$

With boundary conditions $u(0, t) = u(L, t) = 0$ and initial condition $u(x, 0) = f(x)$.

### 8.3 Derivation of the Heat Equation

Consider a thin rod of length $L$ with uniform cross-section and density $\rho$. Let $u(x, t)$ be
the Temperature at position $x$ and time $t$. By **Fourier's law of heat conduction**, the heat flux
Through a cross-section is proportional to the negative temperature gradient:

$$q = -\kappa u_x$$

Where $\kappa$ is the thermal conductivity. Conservation of energy on $[x, x + \Delta x]$:

$$\rho c \frac◆LB◆\partial u◆RB◆◆LB◆\partial t◆RB◆ \Delta x = q(x) - q(x + \Delta x) = -\kappa u_x(x) + \kappa u_x(x + \Delta x)$$

Dividing by $\Delta x$ and taking $\Delta x \to 0$:

$$\rho c \, u_t = \kappa u_◆LB◆xx◆RB◆ \implies u_t = \frac◆LB◆\kappa◆RB◆◆LB◆\rho c◆RB◆ u_◆LB◆xx◆RB◆ = \alpha^2 u_◆LB◆xx◆RB◆$$

Where $\alpha^2 = \kappa/(\rho c)$ is the **thermal diffusivity**.

### 8.4 Solving the Heat Equation by Separation of Variables

Assume $u(x, t) = X(x)T(t)$. Substituting:

$$X T' = \alpha^2 X'' T \implies \frac◆LB◆T'◆RB◆◆LB◆\alpha^2 T◆RB◆ = \frac◆LB◆X''◆RB◆◆LB◆X◆RB◆ = -\lambda$$

This gives two ODEs:

$$X'' + \lambda X = 0, \quad X(0) = X(L) = 0$$ $$T' + \alpha^2 \lambda T = 0$$

The boundary value problem for $X$ has solutions only for $\lambda_n = (n\pi/L)^2$
$n = 1, 2, 3, \ldots$With $X_n(x) = \sin(n\pi x/L)$.

The corresponding $T_n(t) = e^◆LB◆-\alpha^2 (n\pi/L)^2 t◆RB◆$.

By superposition:

$$u(x, t) = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ b_n \sin\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆ e^◆LB◆-\alpha^2 (n\pi/L)^2 t◆RB◆$$

Where $b_n = \frac◆LB◆2◆RB◆◆LB◆L◆RB◆\int_0^L f(x)\sin\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\, dx$ (the sine series coefficients of
$f$).

### 8.5 Worked Example: Heat Equation

**Problem.** Solve $u_t = u_◆LB◆xx◆RB◆$ for $0 \lt x \lt \pi$, $t > 0$With $u(0, t) = u(\pi, t) = 0$ And
$u(x, 0) = \sin(2x) + 3\sin(5x)$.

_Solution._ Here $\alpha = 1$ and $L = \pi$. The initial condition is already a sine series.

$\lambda_n = n^2$$X_n = \sin(nx)$$T_n = e^◆LB◆-n^2 t◆RB◆$.

$u(x, t) = e^◆LB◆-4t◆RB◆\sin(2x) + 3e^◆LB◆-25t◆RB◆\sin(5x)$. $\blacksquare$

### 8.6 The Wave Equation

$$u_◆LB◆tt◆RB◆ = c^2 u_◆LB◆xx◆RB◆, \quad 0 \lt x \lt L, \quad t > 0$$

With boundary conditions $u(0, t) = u(L, t) = 0$And initial conditions $u(x, 0) = f(x)$
$u_t(x, 0) = g(x)$.

### 8.7 Derivation of the Wave Equation

Consider a string of length $L$ under tension $T$. Let $u(x, t)$ be the vertical displacement. For A
small segment $[x, x + \Delta x]$Newton's second law in the vertical direction gives:

$$\rho \Delta x \, u_◆LB◆tt◆RB◆ = T\sin\theta(x + \Delta x) - T\sin\theta(x)$$

For small displacements, $\sin\theta \approx \tan\theta = u_x$So:

$$\rho \, u_◆LB◆tt◆RB◆ = T \frac◆LB◆u_x(x + \Delta x) - u_x(x)◆RB◆◆LB◆\Delta x◆RB◆ \xrightarrow◆LB◆\Delta x \to 0◆RB◆ T u_◆LB◆xx◆RB◆$$

$$u_◆LB◆tt◆RB◆ = \frac◆LB◆T◆RB◆◆LB◆\rho◆RB◆ u_◆LB◆xx◆RB◆ = c^2 u_◆LB◆xx◆RB◆, \quad c = \sqrt◆LB◆T/\rho◆RB◆$$

### 8.8 Solving the Wave Equation

Separation of variables $u(x, t) = X(x)T(t)$ gives:

$$X'' + \lambda X = 0, \quad T'' + c^2 \lambda T = 0$$

With $\lambda_n = (n\pi/L)^2$:

$$X_n(x) = \sin\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆, \quad T_n(t) = a_n \cos\frac◆LB◆cn\pi t◆RB◆◆LB◆L◆RB◆ + b_n \sin\frac◆LB◆cn\pi t◆RB◆◆LB◆L◆RB◆$$

$$u(x, t) = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \sin\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\left(a_n \cos\frac◆LB◆cn\pi t◆RB◆◆LB◆L◆RB◆ + b_n \sin\frac◆LB◆cn\pi t◆RB◆◆LB◆L◆RB◆\right)$$

Where $a_n = \frac◆LB◆2◆RB◆◆LB◆L◆RB◆\int_0^L f(x)\sin\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\, dx$ and
$b_n = \frac◆LB◆2◆RB◆◆LB◆cn\pi◆RB◆\int_0^L g(x)\sin\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\, dx$.

### 8.9 D'Alembert's Solution

For the wave equation on $-\infty \lt x \lt \infty$:

$$u(x, t) = \frac◆LB◆f(x + ct) + f(x - ct)◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2c◆RB◆\int_◆LB◆x - ct◆RB◆^◆LB◆x + ct◆RB◆ g(s)\, ds$$

This represents the solution as a superposition of right-moving and left-moving waves.

### 8.10 Laplace's Equation

$$u_◆LB◆xx◆RB◆ + u_◆LB◆yy◆RB◆ = 0$$

On a domain $\Omega \subseteq \mathbb◆LB◆R◆RB◆^2$With boundary conditions on $\partial\Omega$.

**Theorem 8.1 (Maximum Principle).** A harmonic function $u$ (satisfying Laplace's equation) on a
Bounded domain attains its maximum and minimum on the boundary.

**Theorem 8.2 (Uniqueness).** The Dirichlet problem for Laplace's equation has at most one solution.

_Proof._ If $u_1$ and $u_2$ are two solutions with the same boundary data, then $v = u_1 - u_2$ is
Harmonic with $v = 0$ on $\partial\Omega$. By the maximum principle, $v \equiv 0$. $\blacksquare$

### 8.11 Worked Example: Wave Equation

**Problem.** A string of length $\pi$ with fixed ends is plucked: $u(x, 0) = x(\pi - x)$
$u_t(x, 0) = 0$. Find $u(x, t)$.

_Solution._ With $c = 1$ and $L = \pi$: $a_n = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\int_0^◆LB◆\pi◆RB◆ x(\pi - x)\sin(nx)\, dx$
$b_n = 0$ (since $g = 0$).

Integrating by parts twice:

$\int_0^◆LB◆\pi◆RB◆ x(\pi - x)\sin(nx)\, dx = \left[-\frac◆LB◆x(\pi - x)\cos(nx)◆RB◆◆LB◆n◆RB◆\right]_0^◆LB◆\pi◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\int_0^◆LB◆\pi◆RB◆(\pi - 2x)\cos(nx)\, dx$

$= 0 + \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\left[\frac◆LB◆(\pi - 2x)\sin(nx)◆RB◆◆LB◆n◆RB◆\right]_0^◆LB◆\pi◆RB◆ + \frac◆LB◆2◆RB◆◆LB◆n^2◆RB◆\int_0^◆LB◆\pi◆RB◆\sin(nx)\, dx$

$= 0 + \frac◆LB◆2◆RB◆◆LB◆n^2◆RB◆\left[-\frac◆LB◆\cos(nx)◆RB◆◆LB◆n◆RB◆\right]_0^◆LB◆\pi◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆n^3◆RB◆(1 - (-1)^n)$

For even $n$: $a_n = 0$. For odd $n = 2k + 1$:
$a_n = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆ \cdot \frac◆LB◆4◆RB◆◆LB◆n^3◆RB◆ = \frac◆LB◆8◆RB◆◆LB◆\pi n^3◆RB◆$.

$u(x, t) = \frac◆LB◆8◆RB◆◆LB◆\pi◆RB◆\sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\sin((2k+1)x)◆RB◆◆LB◆(2k+1)^3◆RB◆\cos((2k+1)t)$.
$\blacksquare$

### 8.12 Worked Example: Laplace's Equation on a Rectangle

**Problem.** Solve $u_◆LB◆xx◆RB◆ + u_◆LB◆yy◆RB◆ = 0$ on $0 \lt x \lt \pi$, $0 \lt y \lt 1$ with
$u(0, y) = u(\pi, y) = u(x, 1) = 0$ and $u(x, 0) = f(x) = x(\pi - x)$.

<details>
<summary>Solution</summary>

_Solution._ Separate variables: $u(x, y) = X(x)Y(y)$.

$X''/X = -Y''/Y = -\lambda$.

$X'' + \lambda X = 0$$X(0) = X(\pi) = 0$: $\lambda_n = n^2$$X_n = \sin(nx)$.

$Y'' - n^2 Y = 0$$Y(1) = 0$: $Y_n = \sinh(n(1 - y))$.

$u(x, y) = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ b_n \sin(nx)\sinh(n(1-y))$.

$b_n = \frac◆LB◆2◆RB◆◆LB◆\pi \sinh n◆RB◆\int_0^◆LB◆\pi◆RB◆ x(\pi - x)\sin(nx)\, dx = \frac◆LB◆2◆RB◆◆LB◆\pi \sinh n◆RB◆ \cdot \frac◆LB◆2(1 - (-1)^n)◆RB◆◆LB◆n^3◆RB◆$.

For odd $n = 2k + 1$: $b_n = \frac◆LB◆8◆RB◆◆LB◆\pi n^3 \sinh n◆RB◆$.

$u(x, y) = \frac◆LB◆8◆RB◆◆LB◆\pi◆RB◆\sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\sin((2k+1)x)\sinh((2k+1)(1-y))◆RB◆◆LB◆(2k+1)^3 \sinh(2k+1)◆RB◆$.
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
$p = 1$$q = 0$$w = 1$.

### 8.14 Neumann Boundary Conditions

When the boundary specifies the derivative (heat flux) rather than the value, we have **Neumann
Conditions**. For the heat equation:

$$u_x(0, t) = 0, \quad u_x(L, t) = 0$$

(insulated ends). The separation of variables gives $X'(0) = X'(L) = 0$Yielding eigenvalues
$\lambda_0 = 0$ with $X_0 = 1$And $\lambda_n = (n\pi/L)^2$ for $n \geq 1$ with
$X_n = \cos(n\pi x/L)$.

The solution is

$$u(x, t) = \frac◆LB◆a_0◆RB◆◆LB◆2◆RB◆ + \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ a_n \cos\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆ e^◆LB◆-\alpha^2 (n\pi/L)^2 t◆RB◆$$

Where $a_n = \frac◆LB◆2◆RB◆◆LB◆L◆RB◆\int_0^L f(x)\cos\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\, dx$.

_Remark._ As $t \to \infty$All exponential terms decay, and $u(x, t) \to a_0/2$The average Value of
the initial temperature. Physically, an insulated rod reaches a uniform steady-state Temperature.

### 8.15 Worked Example: Heat Equation with Non-Trivial Initial Data

**Problem.** Solve $u_t = u_◆LB◆xx◆RB◆$ for $0 \lt x \lt \pi$$t > 0$With $u(0, t) = u(\pi, t) = 0$ And
$u(x, 0) = x(\pi - x)$.

<details>
<summary>Solution</summary>

_Solution._ The sine series of $f(x) = x(\pi - x)$ on $[0, \pi]$ has coefficients

$b_n = \frac◆LB◆2◆RB◆◆LB◆\pi◆RB◆\int_0^◆LB◆\pi◆RB◆ x(\pi - x)\sin(nx)\, dx = \frac◆LB◆4(1 - (-1)^n)◆RB◆◆LB◆\pi n^3◆RB◆$.

(Computed in Section 8.11.)

For even $n$: $b_n = 0$. For odd $n = 2k + 1$: $b_n = \frac◆LB◆8◆RB◆◆LB◆\pi n^3◆RB◆$.

$u(x, t) = \frac◆LB◆8◆RB◆◆LB◆\pi◆RB◆\sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\sin((2k+1)x)◆RB◆◆LB◆(2k+1)^3◆RB◆ e^◆LB◆-(2k+1)^2 t◆RB◆$.
$\blacksquare$

</details>

### 8.16 Worked Example: D'Alembert's Solution

**Problem.** Solve $u_◆LB◆tt◆RB◆ = 4u_◆LB◆xx◆RB◆$ for $-\infty \lt x \lt \infty$ with $u(x, 0) = e^◆LB◆-x^2◆RB◆$ and
$u_t(x, 0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Here $c = 2$. By D'Alembert's formula with $g = 0$:

$u(x, t) = \frac◆LB◆f(x + 2t) + f(x - 2t)◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆e^◆LB◆-(x+2t)^2◆RB◆ + e^◆LB◆-(x-2t)^2◆RB◆◆RB◆◆LB◆2◆RB◆$.

This represents two Gaussian pulses traveling in opposite directions at speed 2. $\blacksquare$

</details>
## 9. Stability and Phase Plane Analysis

### 9.1 Autonomous Systems

For $\mathbf◆LB◆x◆RB◆' = \mathbf◆LB◆f◆RB◆(\mathbf◆LB◆x◆RB◆)$A **critical point** $\mathbf◆LB◆x◆RB◆^*$ satisfies
$\mathbf◆LB◆f◆RB◆(\mathbf◆LB◆x◆RB◆^*) = \mathbf◆LB◆0◆RB◆$.

### 9.2 Linearization and Stability

Let $A = J\mathbf◆LB◆f◆RB◆(\mathbf◆LB◆x◆RB◆^*)$ be the Jacobian at the critical point. The eigenvalues of $A$
Determine the local stability:

| Eigenvalues of $A$                   | Type            | Stability             |
| ------------------------------------ | --------------- | --------------------- |
| Both real, negative                  | Stable node     | Asymptotically stable |
| Both real, positive                  | Unstable node   | Unstable              |
| Real, opposite signs                 | Saddle point    | Unstable              |
| Complex, $\mathrm◆LB◆Re(\lambda) \lt 0$ | Stable spiral   | Asymptotically stable |
| Complex, $\mathrm◆LB◆Re(\lambda) > 0$   | Unstable spiral | Unstable              |
| Purely imaginary                     | Center          | (Marginally) stable   |

### 9.3 Lyapunov Stability

**Definition.** A critical point $\mathbf◆LB◆x◆RB◆^*$ is **stable** if for every $\varepsilon > 0$There
Exists $\delta > 0$ such that $\|\mathbf◆LB◆x◆RB◆(0) - \mathbf◆LB◆x◆RB◆^*\| \lt \delta$ implies
$\|\mathbf◆LB◆x◆RB◆(t) - \mathbf◆LB◆x◆RB◆^*\| \lt \varepsilon$ for all $t > 0$.

It is **asymptotically stable** if it is stable and $\mathbf◆LB◆x◆RB◆(t) \to \mathbf◆LB◆x◆RB◆^*$ as
$t \to \infty$.

**Theorem 9.1 (Lyapunov).** If there exists a continuously differentiable function $V$ (a **Lyapunov
Function**) such that $V(\mathbf◆LB◆x◆RB◆^*) = 0$$V(\mathbf◆LB◆x◆RB◆) > 0$ for $\mathbf◆LB◆x◆RB◆ \neq \mathbf◆LB◆x◆RB◆^*$
And $\dot◆LB◆V◆RB◆ \leq 0$ in a neighbourhood of $\mathbf◆LB◆x◆RB◆^*$Then $\mathbf◆LB◆x◆RB◆^*$ is stable. If
$\dot◆LB◆V◆RB◆ \lt 0$ for $\mathbf◆LB◆x◆RB◆ \neq \mathbf◆LB◆x◆RB◆^*$Then $\mathbf◆LB◆x◆RB◆^*$ is asymptotically stable.

### 9.4 Worked Example: Linearization

**Problem.** Find and classify the critical points of $x' = x - y$$y' = x^2 + y^2 - 1$.

<details>
<summary>Solution</summary>

_Solution._ Set $x' = 0$ and $y' = 0$:

$x - y = 0 \implies y = x$

$x^2 + x^2 - 1 = 0 \implies 2x^2 = 1 \implies x = \pm 1/\sqrt◆LB◆2◆RB◆$

Critical points: $(1/\sqrt◆LB◆2◆RB◆, 1/\sqrt◆LB◆2◆RB◆)$ and $(-1/\sqrt◆LB◆2◆RB◆, -1/\sqrt◆LB◆2◆RB◆)$.

The Jacobian is $J = \begin◆LB◆pmatrix◆RB◆ 1 & -1 \\ 2x & 2y \end◆LB◆pmatrix◆RB◆$.

At $(1/\sqrt◆LB◆2◆RB◆, 1/\sqrt◆LB◆2◆RB◆)$: $J = \begin◆LB◆pmatrix◆RB◆ 1 & -1 \\ \sqrt◆LB◆2◆RB◆ & \sqrt◆LB◆2◆RB◆ \end◆LB◆pmatrix◆RB◆$.

$\mathrm◆LB◆tr(J) = 1 + \sqrt◆LB◆2◆RB◆ > 0$$\det(J) = \sqrt◆LB◆2◆RB◆ + \sqrt◆LB◆2◆RB◆ = 2\sqrt◆LB◆2◆RB◆ > 0$.

$\tau^2 - 4\Delta = (1 + \sqrt◆LB◆2◆RB◆)^2 - 8\sqrt◆LB◆2◆RB◆ = 3 + 2\sqrt◆LB◆2◆RB◆ - 8\sqrt◆LB◆2◆RB◆ = 3 - 6\sqrt◆LB◆2◆RB◆ \lt 0$.

Complex eigenvalues with positive real part: **unstable spiral**.

At $(-1/\sqrt◆LB◆2◆RB◆, -1/\sqrt◆LB◆2◆RB◆)$:
$J = \begin◆LB◆pmatrix◆RB◆ 1 & -1 \\ -\sqrt◆LB◆2◆RB◆ & -\sqrt◆LB◆2◆RB◆ \end◆LB◆pmatrix◆RB◆$.

$\mathrm◆LB◆tr(J) = 1 - \sqrt◆LB◆2◆RB◆ \lt 0$$\det(J) = -\sqrt◆LB◆2◆RB◆ + \sqrt◆LB◆2◆RB◆ = 0$.

Wait, $\det(J) = (1)(-\sqrt◆LB◆2◆RB◆) - (-1)(-\sqrt◆LB◆2◆RB◆) = -\sqrt◆LB◆2◆RB◆ - \sqrt◆LB◆2◆RB◆ = -2\sqrt◆LB◆2◆RB◆ \lt 0$.

Negative determinant: **saddle point** (unstable). $\blacksquare$

</details>

### 9.5 Phase Portraits for 2D Nonlinear Systems

For the nonlinear system $\mathbf◆LB◆x◆RB◆' = \mathbf◆LB◆f◆RB◆(\mathbf◆LB◆x◆RB◆)$The **Hartman-Grobman theorem**
States that near a hyperbolic critical point (one where the Jacobian has no eigenvalues on the
Imaginary axis), the nonlinear phase portrait is topologically equivalent to the linearized one.

**Procedure for sketching phase portraits:**

1. Find all critical points by solving $\mathbf◆LB◆f◆RB◆(\mathbf◆LB◆x◆RB◆) = \mathbf◆LB◆0◆RB◆$.
2. Compute the Jacobian $J$ at each critical point.
3. Classify each critical point using the eigenvalue analysis from Section 4.9.
4. Sketch the local behaviour near each critical point.
5. Connect the local pictures using nullclines ($x' = 0$ and $y' = 0$ curves).

### 9.6 Limit Cycles and Poincaré-Bendixson

A **limit cycle** is an isolated closed periodic orbit. Limit cycles are inherently nonlinear
Phenomena --- linear systems cannot have isolated closed orbits.

**Theorem 9.2 (Poincaré-Bendixson).** If a trajectory of a $C^1$ planar system is confined to a
Closed bounded region $R$ that contains no critical points, then the trajectory approaches a closed
Periodic orbit as $t \to \infty$.

_Remark._ The Poincaré-Bendixson theorem is specific to two dimensions. In three or more Dimensions,
much more complex behaviour (chaos) is possible.

**Example: Van der Pol oscillator.** The equation

$$x'' + \mu(x^2 - 1)x' + x = 0$$

With $\mu > 0$ has a unique stable limit cycle. This system models electrical circuits with
Nonlinear resistance and arises in biology (cardiac rhythms, neuron firing).

### 9.7 Worked Example: Lotka-Volterra Analysis

**Problem.** Analyze the stability of the Lotka-Volterra system $x' = x(2 - y)$, $y' = y(x - 1)$.

<details>
<summary>Solution</summary>

_Solution._ Critical points: $(0, 0)$ and $(1, 2)$.

Jacobian: $J = \begin◆LB◆pmatrix◆RB◆ 2 - y & -x \\ y & x - 1 \end◆LB◆pmatrix◆RB◆$.

At $(0, 0)$: $J = \begin◆LB◆pmatrix◆RB◆ 2 & 0 \\ 0 & -1 \end◆LB◆pmatrix◆RB◆$. Eigenvalues $2$ and $-1$: **saddle
point** (unstable).

At $(1, 2)$: $J = \begin◆LB◆pmatrix◆RB◆ 0 & -1 \\ 2 & 0 \end◆LB◆pmatrix◆RB◆$.
$\det(J) = 2 > 0$, $\mathrm◆LB◆tr(J) = 0$. Eigenvalues $\pm i\sqrt◆LB◆2◆RB◆$: **center**.

_Remark._ For the linearized system, the center is (marginally) stable. However, for the Nonlinear
Lotka-Volterra system, the trajectories are actually closed orbits surrounding $(1, 2)$. This can be
verified using the first integral $H = x - \ln x + 2\ln y - y$Which is constant Along trajectories.
$\blacksquare$

</details>

### 9.8 Competing Species

The competing species model is:

$$x' = x(r_1 - a_◆LB◆11◆RB◆x - a_◆LB◆12◆RB◆y), \quad y' = y(r_2 - a_◆LB◆21◆RB◆x - a_◆LB◆22◆RB◆y)$$

Where $r_i > 0$ are growth rates and $a_◆LB◆ij◆RB◆ > 0$ are competition coefficients. The four critical
Points are $(0, 0)$$(r_1/a_◆LB◆11◆RB◆, 0)$$(0, r_2/a_◆LB◆22◆RB◆)$And the coexistence point $(x^*, y^*)$ where
both $x'$ and $y'$ vanish.

The stability of the coexistence point determines whether both species survive. If
$a_◆LB◆11◆RB◆a_◆LB◆22◆RB◆ > a_◆LB◆12◆RB◆a_◆LB◆21◆RB◆$Coexistence is stable; otherwise, one species drives the other To
extinction (competitive exclusion).

## 10. Common Pitfalls

:::caution Common Pitfall When using undetermined coefficients, always check whether your guess
Overlaps with the homogeneous solution. For $y'' - 4y = e^◆LB◆2x◆RB◆$Guessing $y_p = Ae^◆LB◆2x◆RB◆$ fails
Because $e^◆LB◆2x◆RB◆$ satisfies the homogeneous equation. You must use $y_p = Axe^◆LB◆2x◆RB◆$ instead. :::

:::caution Common Pitfall The Laplace transform of $y'(t)$ is $sY(s) - y(0)$Not $sY(s)$. The Initial
conditions are built into the transform. Forgetting them leads to incorrect solutions. :::

:::caution Common Pitfall Separation of variables can miss solutions. When dividing by $h(y)$ to
Separate, check whether $h(y) = 0$ gives any valid solutions. For example, solving $y' = y^2$ by
Separating gives $y = -1/(x + C)$But misses the solution $y = 0$. :::

:::caution Common Pitfall The Fourier series of a function converges to the function only at points
Of continuity. At jump discontinuities, it converges to the midpoint of the jump. The Gibbs
Phenomenon causes overshoots near jumps that do not vanish as more terms are added. :::

:::caution Common Pitfall When solving PDEs by separation of variables, the boundary conditions
Determine the eigenvalues. Using the wrong boundary conditions (e.g., Neumann instead of Dirichlet)
Leads to a completely different set of eigenfunctions and eigenvalues. :::

:::caution Common Pitfall Not every first-order ODE can be solved analytically. Equations like
$y' = x^2 + y^2$ have no closed-form solution in terms of elementary functions. Numerical methods
(Euler, Runge-Kutta) may be necessary. :::

:::caution Common Pitfall The linearization of a nonlinear system near a critical point is only
Valid for hyperbolic critical points (no eigenvalues on the imaginary axis). If eigenvalues lie on
The imaginary axis, the nonlinear system can behave very differently from its linearization. :::

:::caution Common Pitfall When computing the inverse Laplace transform, always check that the
Partial fraction decomposition is correct before inverting term-by-term. A common error is
Forgetting to include all powers of irreducible quadratic factors. :::

:::caution Common Pitfall For the Euler-Cauchy equation $x^2 y'' + axy' + by = 0$Remember that $x^r$
with complex $r = \alpha \pm i\beta$ gives solutions involving $\cos(\beta \ln x)$ and
$\sin(\beta \ln x)$Not $\cos(\beta x)$ and $\sin(\beta x)$. :::

:::caution Common Pitfall The Wronskian $W(y_1, y_2)$ being zero at a single point does not
Necessarily mean the solutions are linearly dependent. For linear ODEs with continuous coefficients,
$W \equiv 0$ everywhere or $W \neq 0$ everywhere. Check Abel's identity. :::

### 9.9 Worked Example: Lyapunov Function

**Problem.** Show that $(0, 0)$ is asymptotically stable for the system
$x' = -x - y^3$$y' = x^3 - y$.

<details>
<summary>Solution</summary>

_Solution._ Critical point: $-x - y^3 = 0$ and $x^3 - y = 0$ gives $x = 0, y = 0$.

Choose the Lyapunov function $V(x, y) = \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆$. $V(0,0) = 0$ and $V > 0$ for
$(x, y) \neq (0, 0)$.

$\dot◆LB◆V◆RB◆ = \frac◆LB◆\partial V◆RB◆◆LB◆\partial x◆RB◆x' + \frac◆LB◆\partial V◆RB◆◆LB◆\partial y◆RB◆y' = x(-x - y^3) + y(x^3 - y)$

$= -x^2 - xy^3 + x^3 y - y^2 = -x^2 - y^2 + xy(x^2 - y^2)$

This is not negative definite. Let us try $V(x, y) = \frac◆LB◆x^4◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆y^4◆RB◆◆LB◆4◆RB◆$:

$\dot◆LB◆V◆RB◆ = x^3(-x - y^3) + y^3(x^3 - y) = -x^4 - x^3 y^3 + x^3 y^3 - y^4 = -(x^4 + y^4)$.

Since $\dot◆LB◆V◆RB◆ = -(x^4 + y^4) \lt 0$ for $(x, y) \neq (0, 0)$The origin is asymptotically Stable by
Lyapunov's theorem. $\blacksquare$

</details>

### 9.10 Worked Example: Van der Pol Oscillator

**Problem.** Show that the Van der Pol equation $x'' + \mu(x^2 - 1)x' + x = 0$ with $\mu > 0$ Has a
unique limit cycle.

<details>
<summary>Solution</summary>

\_Solution.\* Write as a system: $x' = y$$y' = -x - \mu(x^2 - 1)y$.

The only critical point is $(0, 0)$. The Jacobian at the origin is
$J = \begin◆LB◆pmatrix◆RB◆ 0 & 1 \\ -1 & \mu \end◆LB◆pmatrix◆RB◆$.

$\mathrm◆LB◆tr(J) = \mu > 0$$\det(J) = 1 > 0$$\tau^2 - 4\Delta = \mu^2 - 4$.

For $0 \lt \mu \lt 2$: complex eigenvalues with positive real part (**unstable spiral**). For
$\mu \geq 2$: two positive real eigenvalues (**unstable node**).

The origin is always unstable. To show existence of a limit cycle, we use a **Liénard's theorem** Or
construct a trapping region. Define

$L(x) = x^3/3 - x$ and write the system as $x' = y$$y' = -x - \mu L'(x) y$.

The function $L(x)$ has zeros at $x = \pm 1$. For $\mu > 0$The damping is negative for
$\lvert x \rvert \lt 1$ (energy input) and positive for $\lvert x \rvert > 1$ (energy Dissipation).
This creates a unique stable limit cycle that passes through $x = \pm 1$.

A detailed proof requires constructing an annular region and applying the Poincaré-Bendixson Theorem
(the inner boundary encloses the unstable origin; the outer boundary is chosen so that Trajectories
point inward). $\blacksquare$

</details>
## 11. Problem Set

### Problem 1 (Classification)

Classify the ODE $y'' + xy' + e^x y = \cos x$ by order, linearity, and homogeneity.

<details>
<summary>Solution</summary>

_Solution._ Second-order (highest derivative is $y''$), linear ($y$$y'$$y''$ appear linearly With
coefficient functions of $x$ only), nonhomogeneous ($\cos x \neq 0$). $\blacksquare$

_If you get this wrong, revise:_ Section 1.2 (Classification of ODEs).

</details>

### Problem 2 (Separable Equation)

Solve $\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = \frac◆LB◆x◆RB◆◆LB◆y◆RB◆$$y(0) = 2$.

<details>
<summary>Solution</summary>

_Solution._ Separating: $y\, dy = x\, dx$. Integrating: $\frac◆LB◆y^2◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆x^2◆RB◆◆LB◆2◆RB◆ + C$.

$y(0) = 2 \implies C = 2$So $y^2 = x^2 + 4$Giving $y = \sqrt◆LB◆x^2 + 4◆RB◆$ (positive branch Since
$y(0) = 2 > 0$). $\blacksquare$

_If you get this wrong, revise:_ Section 2.1 (Separable Equations).

</details>

### Problem 3 (Linear First-Order)

Solve $y' + \frac◆LB◆y◆RB◆◆LB◆x◆RB◆ = x^2$ for $x > 0$$y(1) = 1$.

<details>
<summary>Solution</summary>

_Solution._ $P(x) = 1/x$$Q(x) = x^2$.

$\mu(x) = e^◆LB◆\int 1/x\, dx◆RB◆ = e^◆LB◆\ln x◆RB◆ = x$.

$y = x^◆LB◆-1◆RB◆\left(\int x \cdot x^2\, dx + C\right) = x^◆LB◆-1◆RB◆\left(\frac◆LB◆x^4◆RB◆◆LB◆4◆RB◆ + C\right) = \frac◆LB◆x^3◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆C◆RB◆◆LB◆x◆RB◆$.

$y(1) = 1/4 + C = 1 \implies C = 3/4$.

$y = \frac◆LB◆x^3◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆3◆RB◆◆LB◆4x◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.2 (Linear First-Order Equations).

</details>

### Problem 4 (Exact Equation)

Solve $(2x + y)\, dx + (x + 2y)\, dy = 0$.

<details>
<summary>Solution</summary>

_Solution._ $M = 2x + y$$N = x + 2y$. $M_y = 1 = N_x$. Exact.

$\Psi_x = 2x + y \implies \Psi = x^2 + xy + h(y)$.

$\Psi_y = x + h'(y) = x + 2y \implies h'(y) = 2y \implies h(y) = y^2$.

Solution: $x^2 + xy + y^2 = C$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.4 (Exact Equations).

</details>

### Problem 5 (Bernoulli Equation)

Solve $y' - y = xy^2$.

<details>
<summary>Solution</summary>

_Solution._ This is Bernoulli with $n = 2$$P(x) = -1$$Q(x) = x$.

Substitution $v = y^◆LB◆-1◆RB◆$: $v' = -y^◆LB◆-2◆RB◆y'$So $-v' - v = x$I.e., $v' + v = -x$.

Integrating factor: $e^x$. $(ve^x)' = -xe^x$.

$ve^x = -xe^x + e^x + C = e^x(1 - x) + C$.

$v = 1 - x + Ce^◆LB◆-x◆RB◆$So $y = \frac◆LB◆1◆RB◆◆LB◆1 - x + Ce^◆LB◆-x◆RB◆◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.7 (Bernoulli Equations).

</details>

### Problem 6 (Homogeneous Substitution)

Solve $y' = \frac◆LB◆x + y◆RB◆◆LB◆x - y◆RB◆$ using the substitution $y = vx$.

<details>
<summary>Solution</summary>

_Solution._ $y = vx \implies y' = v + xv'$.

$\frac◆LB◆x + vx◆RB◆◆LB◆x - vx◆RB◆ = \frac◆LB◆1 + v◆RB◆◆LB◆1 - v◆RB◆$.

$v + xv' = \frac◆LB◆1 + v◆RB◆◆LB◆1 - v◆RB◆$

$xv' = \frac◆LB◆1 + v◆RB◆◆LB◆1 - v◆RB◆ - v = \frac◆LB◆1 + v - v + v^2◆RB◆◆LB◆1 - v◆RB◆ = \frac◆LB◆1 + v^2◆RB◆◆LB◆1 - v◆RB◆$

$\frac◆LB◆1 - v◆RB◆◆LB◆1 + v^2◆RB◆\, dv = \frac◆LB◆dx◆RB◆◆LB◆x◆RB◆$

$\int \frac◆LB◆1◆RB◆◆LB◆1 + v^2◆RB◆\, dv - \int \frac◆LB◆v◆RB◆◆LB◆1 + v^2◆RB◆\, dv = \ln|x| + C$

$\arctan v - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\ln(1 + v^2) = \ln|x| + C$

$\arctan(y/x) - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\ln(1 + y^2/x^2) = \ln|x| + C$

$\arctan(y/x) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\ln(x^2 + y^2) + C$. $\blacksquare$

_If you get this wrong, revise:_ Section 2.10 (Homogeneous Equations).

</details>

### Problem 7 (Complex Roots)

Solve $y'' + 4y' + 13y = 0$$y(0) = 2$$y'(0) = -3$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^2 + 4r + 13 = 0$.

$r = \frac◆LB◆-4 \pm \sqrt◆LB◆16 - 52◆RB◆◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆-4 \pm \sqrt◆LB◆-36◆RB◆◆RB◆◆LB◆2◆RB◆ = -2 \pm 3i$.

$y = e^◆LB◆-2x◆RB◆(c_1 \cos 3x + c_2 \sin 3x)$.

$y(0) = c_1 = 2$.

$y' = -2e^◆LB◆-2x◆RB◆(2\cos 3x + c_2 \sin 3x) + e^◆LB◆-2x◆RB◆(-6\sin 3x + 3c_2 \cos 3x)$.

$y'(0) = -4 + 3c_2 = -3 \implies c_2 = 1/3$.

$y = e^◆LB◆-2x◆RB◆\left(2\cos 3x + \frac◆LB◆1◆RB◆◆LB◆3◆RB◆\sin 3x\right)$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2 (Homogeneous Equations with Constant Coefficients).

</details>

### Problem 8 (Repeated Roots)

Solve $y'' + 4y' + 4y = 0$$y(0) = 1$$y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ $r^2 + 4r + 4 = (r + 2)^2 = 0$. Repeated root $r = -2$.

$y = c_1 e^◆LB◆-2x◆RB◆ + c_2 xe^◆LB◆-2x◆RB◆$.

$y(0) = c_1 = 1$.

$y' = -2e^◆LB◆-2x◆RB◆ + c_2 e^◆LB◆-2x◆RB◆ - 2c_2 xe^◆LB◆-2x◆RB◆$.

$y'(0) = -2 + c_2 = 0 \implies c_2 = 2$.

$y = e^◆LB◆-2x◆RB◆ + 2xe^◆LB◆-2x◆RB◆ = e^◆LB◆-2x◆RB◆(1 + 2x)$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.2, Case 2.

</details>

### Problem 9 (Undetermined Coefficients)

Solve $y'' - 2y' - 3y = 3e^◆LB◆2x◆RB◆$$y(0) = 1$$y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 - 2r - 3 = (r - 3)(r + 1) = 0$. Roots: $3, -1$.

$y_h = c_1 e^◆LB◆3x◆RB◆ + c_2 e^◆LB◆-x◆RB◆$.

Guess $y_p = Ae^◆LB◆2x◆RB◆$. $y_p' = 2Ae^◆LB◆2x◆RB◆$$y_p'' = 4Ae^◆LB◆2x◆RB◆$.

$4Ae^◆LB◆2x◆RB◆ - 4Ae^◆LB◆2x◆RB◆ - 3Ae^◆LB◆2x◆RB◆ = 3e^◆LB◆2x◆RB◆ \implies -3A = 3 \implies A = -1$.

$y = c_1 e^◆LB◆3x◆RB◆ + c_2 e^◆LB◆-x◆RB◆ - e^◆LB◆2x◆RB◆$.

$y(0) = c_1 + c_2 - 1 = 1 \implies c_1 + c_2 = 2$.

$y'(0) = 3c_1 - c_2 - 2 = 0 \implies 3c_1 - c_2 = 2$.

Solving: $4c_1 = 4 \implies c_1 = 1$$c_2 = 1$.

$y = e^◆LB◆3x◆RB◆ + e^◆LB◆-x◆RB◆ - e^◆LB◆2x◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.6 (Undetermined Coefficients).

</details>

### Problem 10 (Resonance)

Solve $y'' + 4y = 8\cos(2t)$$y(0) = 0$$y'(0) = 0$.

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

Given that $y_1 = x$ solves $x^2 y'' - xy' + y = 0$ for $x > 0$Find the general solution.

<details>
<summary>Solution</summary>

_Solution._ Rewrite as $y'' - \frac◆LB◆1◆RB◆◆LB◆x◆RB◆y' + \frac◆LB◆1◆RB◆◆LB◆x^2◆RB◆y = 0$. Here $p(x) = -1/x$.

$e^◆LB◆-\int p\, dx◆RB◆ = e^◆LB◆\int 1/x\, dx◆RB◆ = x$.

$y_2 = y_1 \int \frac◆LB◆x◆RB◆◆LB◆y_1^2◆RB◆\, dx = x \int \frac◆LB◆x◆RB◆◆LB◆x^2◆RB◆\, dx = x \int \frac◆LB◆1◆RB◆◆LB◆x◆RB◆\, dx = x \ln x$.

$y = c_1 x + c_2 x \ln x$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.12 (Reduction of Order).

</details>

### Problem 12 (Euler-Cauchy)

Solve $x^2 y'' + 3xy' + y = 0$ for $x > 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic: $r(r-1) + 3r + 1 = r^2 + 2r + 1 = (r+1)^2 = 0$.

Repeated root $r = -1$.

$y = c_1 x^◆LB◆-1◆RB◆ + c_2 x^◆LB◆-1◆RB◆\ln x$. $\blacksquare$

_If you get this wrong, revise:_ Section 3.13 (Euler-Cauchy Equations).

</details>

### Problem 13 (2x2 System)

Solve $\mathbf◆LB◆x◆RB◆' = \begin◆LB◆pmatrix◆RB◆ 1 & 4 \\ 1 & -2 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆x◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._
$\det(A - \lambda I) = (1 - \lambda)(-2 - \lambda) - 4 = \lambda^2 + \lambda - 6 = (\lambda + 3)(\lambda - 2) = 0$.

$\lambda_1 = 2$:
$(A - 2I)\mathbf◆LB◆v◆RB◆ = \begin◆LB◆pmatrix◆RB◆ -1 & 4 \\ 1 & -4 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆v◆RB◆ = \mathbf◆LB◆0◆RB◆$.
$\mathbf◆LB◆v◆RB◆_1 = \begin◆LB◆pmatrix◆RB◆ 4 \\ 1 \end◆LB◆pmatrix◆RB◆$.

$\lambda_2 = -3$:
$(A + 3I)\mathbf◆LB◆v◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 4 & 4 \\ 1 & 1 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆v◆RB◆ = \mathbf◆LB◆0◆RB◆$.
$\mathbf◆LB◆v◆RB◆_2 = \begin◆LB◆pmatrix◆RB◆ 1 \\ -1 \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆x◆RB◆(t) = c_1 \begin◆LB◆pmatrix◆RB◆ 4 \\ 1 \end◆LB◆pmatrix◆RB◆ e^◆LB◆2t◆RB◆ + c_2 \begin◆LB◆pmatrix◆RB◆ 1 \\ -1 \end◆LB◆pmatrix◆RB◆ e^◆LB◆-3t◆RB◆$.
$\blacksquare$

_If you get this wrong, revise:_ Section 4.2 (Homogeneous Systems with Constant Coefficients).

</details>

### Problem 14 (System with Complex Eigenvalues)

Solve $\mathbf◆LB◆x◆RB◆' = \begin◆LB◆pmatrix◆RB◆ 0 & -1 \\ 1 & 0 \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆x◆RB◆$.

<details>
<summary>Solution</summary>

_Solution._ $\det(A - \lambda I) = \lambda^2 + 1 = 0$. $\lambda = \pm i$.

For $\lambda = i$: $\begin◆LB◆pmatrix◆RB◆ -i & -1 \\ 1 & -i \end◆LB◆pmatrix◆RB◆\mathbf◆LB◆v◆RB◆ = \mathbf◆LB◆0◆RB◆$.
$-iv_1 - v_2 = 0 \implies v_2 = -iv_1$. With $v_1 = 1$:
$\mathbf◆LB◆v◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 1 \\ -i \end◆LB◆pmatrix◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 1 \\ 0 \end◆LB◆pmatrix◆RB◆ + i\begin◆LB◆pmatrix◆RB◆ 0 \\ -1 \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆a◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 1 \\ 0 \end◆LB◆pmatrix◆RB◆$$\mathbf◆LB◆b◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 0 \\ -1 \end◆LB◆pmatrix◆RB◆$.

$\mathbf◆LB◆x◆RB◆(t) = c_1 \begin◆LB◆pmatrix◆RB◆ \cos t \\ -\sin t \end◆LB◆pmatrix◆RB◆ + c_2 \begin◆LB◆pmatrix◆RB◆ \sin t \\ \cos t \end◆LB◆pmatrix◆RB◆$.

Equivalently: $x_1(t) = c_1 \cos t + c_2 \sin t$$x_2(t) = -c_1 \sin t + c_2 \cos t$. $\blacksquare$

_If you get this wrong, revise:_ Section 4.2, Case 3.

</details>

### Problem 15 (Laplace Transform)

Compute $\mathcal◆LB◆L◆RB◆\{t^2 e^◆LB◆-3t◆RB◆\}$.

<details>
<summary>Solution</summary>

_Solution._ Using $\mathcal◆LB◆L◆RB◆\{t^n e^◆LB◆at◆RB◆\} = \frac◆LB◆n!◆RB◆◆LB◆(s-a)^◆LB◆n+1◆RB◆◆RB◆$ with $n = 2$$a = -3$:

$\mathcal◆LB◆L◆RB◆\{t^2 e^◆LB◆-3t◆RB◆\} = \frac◆LB◆2!◆RB◆◆LB◆(s + 3)^3◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆(s+3)^3◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.2 (Basic Properties) and Section 5.4 (Common Transforms).

</details>

### Problem 16 (IVP with Laplace)

Solve $y'' - y = e^t$$y(0) = 0$$y'(0) = 0$ using Laplace transforms.

<details>
<summary>Solution</summary>

_Solution._ $\mathcal◆LB◆L◆RB◆\{y'◆RB◆ - \mathcal◆LB◆L◆RB◆\{y\} = \mathcal◆LB◆L◆RB◆\{e^t\}$:

$s^2 Y - Y = \frac◆LB◆1◆RB◆◆LB◆s - 1◆RB◆$

$(s^2 - 1)Y = \frac◆LB◆1◆RB◆◆LB◆s-1◆RB◆$

$(s-1)(s+1)Y = \frac◆LB◆1◆RB◆◆LB◆s-1◆RB◆$

$Y = \frac◆LB◆1◆RB◆◆LB◆(s-1)^2(s+1)◆RB◆$

Partial fractions: $\frac◆LB◆1◆RB◆◆LB◆(s-1)^2(s+1)◆RB◆ = \frac◆LB◆A◆RB◆◆LB◆s-1◆RB◆ + \frac◆LB◆B◆RB◆◆LB◆(s-1)^2◆RB◆ + \frac◆LB◆C◆RB◆◆LB◆s+1◆RB◆$.

$1 = A(s-1)(s+1) + B(s+1) + C(s-1)^2$

$s = 1$: $1 = 2B \implies B = 1/2$. $s = -1$: $1 = 4C \implies C = 1/4$. $s = 0$:
$1 = -A + B + C = -A + 3/4 \implies A = -1/4$.

$Y = -\frac◆LB◆1/4◆RB◆◆LB◆s-1◆RB◆ + \frac◆LB◆1/2◆RB◆◆LB◆(s-1)^2◆RB◆ + \frac◆LB◆1/4◆RB◆◆LB◆s+1◆RB◆$

$y(t) = -\frac◆LB◆1◆RB◆◆LB◆4◆RB◆e^t + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆te^t + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆e^◆LB◆-t◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.5 (Solving IVPs with Laplace Transforms).

</details>

### Problem 17 (Inverse Laplace)

Find $\mathcal◆LB◆L◆RB◆^◆LB◆-1◆RB◆\left\{\frac◆LB◆2s + 3◆RB◆◆LB◆s^2 + 2s + 5◆RB◆\right\}$.

<details>
<summary>Solution</summary>

_Solution._ Complete the square: $s^2 + 2s + 5 = (s + 1)^2 + 4$.

$\frac◆LB◆2s + 3◆RB◆◆LB◆(s+1)^2 + 4◆RB◆ = \frac◆LB◆2(s+1) + 1◆RB◆◆LB◆(s+1)^2 + 4◆RB◆ = 2 \cdot \frac◆LB◆s+1◆RB◆◆LB◆(s+1)^2 + 4◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆2◆RB◆◆LB◆(s+1)^2 + 4◆RB◆$

$f(t) = 2e^◆LB◆-t◆RB◆\cos 2t + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆-t◆RB◆\sin 2t = e^◆LB◆-t◆RB◆\left(2\cos 2t + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sin 2t\right)$.
$\blacksquare$

_If you get this wrong, revise:_ Section 5.8 (Worked Example: Inverse Laplace Transform).

</details>

### Problem 18 (Fourier Series)

Find the Fourier series of
$f(x) = \begin◆LB◆cases◆RB◆ 1 & 0 \lt x \lt \pi \\ -1 & -\pi \lt x \lt 0 \end◆LB◆cases◆RB◆$ Extended
$2\pi$-periodically (the square wave).

<details>
<summary>Solution</summary>

_Solution._ $f$ is odd, so $a_n = 0$ for all $n$.

$b_n = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\int_◆LB◆-\pi◆RB◆^◆LB◆\pi◆RB◆ f(x)\sin(nx)\, dx = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\left[\int_◆LB◆-\pi◆RB◆^◆LB◆0◆RB◆(-1)\sin(nx)\, dx + \int_0^◆LB◆\pi◆RB◆(1)\sin(nx)\, dx\right]$

$= \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\left[\frac◆LB◆\cos(nx)◆RB◆◆LB◆n◆RB◆\Big|_◆LB◆-\pi◆RB◆^0 - \frac◆LB◆\cos(nx)◆RB◆◆LB◆n◆RB◆\Big|_0^◆LB◆\pi◆RB◆\right]$

$= \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\left[\frac◆LB◆1 - \cos(n\pi)◆RB◆◆LB◆n◆RB◆ - \frac◆LB◆\cos(n\pi) - 1◆RB◆◆LB◆n◆RB◆\right] = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\left[\frac◆LB◆2 - 2\cos(n\pi)◆RB◆◆LB◆n◆RB◆\right] = \frac◆LB◆2(1 - (-1)^n)◆RB◆◆LB◆n\pi◆RB◆$

For even $n$: $b_n = 0$. For odd $n = 2k + 1$: $b_n = \frac◆LB◆4◆RB◆◆LB◆n\pi◆RB◆$.

$f(x) \sim \frac◆LB◆4◆RB◆◆LB◆\pi◆RB◆\sum_◆LB◆k=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\sin((2k+1)x)◆RB◆◆LB◆2k+1◆RB◆$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.1 and 7.6 (Fourier Series).

</details>

### Problem 19 (Heat Equation)

Solve $u_t = 4u_◆LB◆xx◆RB◆$ for $0 \lt x \lt \pi$$t > 0$With $u(0, t) = u(\pi, t) = 0$ and
$u(x, 0) = \sin x$.

<details>
<summary>Solution</summary>

_Solution._ Here $\alpha = 2$ and $L = \pi$.

$\lambda_n = (n\pi/\pi)^2 = n^2$$X_n = \sin(nx)$$T_n = e^◆LB◆-4n^2 t◆RB◆$.

The initial condition $\sin x$ is already the first sine mode.

$u(x, t) = e^◆LB◆-4t◆RB◆\sin x$. $\blacksquare$

_If you get this wrong, revise:_ Section 8.4 (Solving the Heat Equation by Separation of Variables).

</details>

### Problem 20 (Stability Classification)

Find and classify the critical points of $x' = y - x^2$$y' = x - y^2$.

<details>
<summary>Solution</summary>

_Solution._ Set $y - x^2 = 0$ and $x - y^2 = 0$. From the first equation $y = x^2$Substituting Into
the second: $x - x^4 = 0$So $x(1 - x^3) = 0$.

$x = 0 \implies y = 0$. Critical point: $(0, 0)$. $x = 1 \implies y = 1$. Critical point: $(1, 1)$.

Jacobian: $J = \begin◆LB◆pmatrix◆RB◆ -2x & 1 \\ 1 & -2y \end◆LB◆pmatrix◆RB◆$.

At $(0, 0)$: $J = \begin◆LB◆pmatrix◆RB◆ 0 & 1 \\ 1 & 0 \end◆LB◆pmatrix◆RB◆$.
$\mathrm◆LB◆tr(J) = 0$$\det(J) = -1 \lt 0$. **Saddle point** (unstable).

At $(1, 1)$: $J = \begin◆LB◆pmatrix◆RB◆ -2 & 1 \\ 1 & -2 \end◆LB◆pmatrix◆RB◆$.
$\mathrm◆LB◆tr(J) = -4 \lt 0$$\det(J) = 3 > 0$. $\tau^2 - 4\Delta = 16 - 12 = 4 > 0$. Two distinct
negative real eigenvalues. **Stable node** (asymptotically stable). $\blacksquare$

_If you get this wrong, revise:_ Section 9.2 (Linearization and Stability) and Section 4.9 (Phase
Portrait Analysis).

</details>

## Worked Examples

**Example 1: Definite integration**

Evaluate $\displaystyle\int_0^2 (3x^2 + 2x)\,dx$.

**Solution:**

$$\int (3x^2 + 2x)\,dx = x^3 + x^2 + c$$

$$\left[x^3 + x^2\right]_0^2 = (8 + 4) - (0) = 12$$

**Example 2: Integration by parts**

Find $\displaystyle\int x e^◆LB◆2x◆RB◆\,dx$.

**Solution:**

Let $u = x \implies \frac◆LB◆du◆RB◆◆LB◆dx◆RB◆ = 1$ and $\frac◆LB◆dv◆RB◆◆LB◆dx◆RB◆ = e^◆LB◆2x◆RB◆ \implies v = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆2x◆RB◆$.

$$\int x e^◆LB◆2x◆RB◆\,dx = x \cdot \frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆2x◆RB◆ - \int \frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆2x◆RB◆\,dx = \frac◆LB◆x e^◆LB◆2x◆RB◆◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆e^◆LB◆2x◆RB◆◆RB◆◆LB◆4◆RB◆ + c = \frac◆LB◆e^◆LB◆2x◆RB◆(2x - 1)◆RB◆◆LB◆4◆RB◆ + c$$

## Summary

- First-order ODEs: separable ($\frac◆LB◆dy◆RB◆◆LB◆dx◆RB◆ = g(x)h(y)$), linear (integrating factor
  $\mu = e^◆LB◆\int P\,dx◆RB◆$), exact ($M\,dx + N\,dy = 0$ with $M_y = N_x$).
- Second-order linear ODEs with constant coefficients: characteristic equation $ar^2 + br + c = 0$;
  distinct real, repeated real, or complex roots.
- Laplace transforms: convert ODEs to algebraic equations; $\mathcal◆LB◆L◆RB◆\{f'(t)\} = sF(s) - f(0)$;
  particularly useful for piecewise forcing functions.
- Systems of ODEs: $\dot◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ = A\mathbf◆LB◆x◆RB◆$ solved via eigenvalues and eigenvectors; phase
  plane analysis for 2D systems.
- PDEs: separation of variables for heat equation ($u_t = ku_◆LB◆xx◆RB◆$), wave equation
  ($u_◆LB◆tt◆RB◆ = c^2 u_◆LB◆xx◆RB◆$), and Laplace equation ($\nabla^2 u = 0$).

## Cross-References

| Topic                              | Site        | Link                                                                          |
| ---------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| Real Analysis                      | WyattsNotes | [View](/docs/university/mathematics/real-analysis)                            |
| Linear Algebra                     | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)                           |
| Multivariable Calculus             | WyattsNotes | [View](/docs/university/mathematics/multivariable-calculus)                   |
| Complex Analysis                   | WyattsNotes | [View](/docs/university/mathematics/complex-analysis)                         |
| Differential Equations — MIT 18.03 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/) |
