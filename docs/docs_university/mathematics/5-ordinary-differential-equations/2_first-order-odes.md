---
title: First-Order ODEs
tags:
  - Mathematics
  - University
---

### 2.1 Separable Equations

A first-order ODE $\frac{dy}{dx} = f(x, y)$ is **separable** if $f(x, y) = g(x)h(y)$.

$$\frac{dy}{dx} = g(x)h(y) \implies \frac{dy}{h(y)} = g(x)\, dx$$

Integrating both sides: $\int \frac{dy}{h(y)} = \int g(x)\, dx + C$.

**Example.** Solve $\frac{dy}{dx} = xy$.

Separating: $\frac{dy}{y} = x\, dx$. Integrating: $\ln|y| = \frac{x^2}{2} + C$. Thus
$y = Ce^{x^2/2}$ where $C \neq 0$Plus the trivial solution $y = 0$.

### 2.2 Linear First-Order Equations

A **linear first-order ODE** has the form

$$\frac{dy}{dx} + P(x)y = Q(x)$$

**Theorem 2.1 (Integrating Factor).** The solution is

$$y(x) = e^{-\int P(x)\, dx}\left(\int Q(x) e^{\int P(x)\, dx}\, dx + C\right)$$

_Proof._ Multiply both sides by $\mu(x) = e^{\int P(x)\, dx}$:

$$\frac{d}{dx}(\mu y) = \mu \frac{dy}{dx} + \mu P y = \mu \frac{dy}{dx} + \mu' y = \mu\left(\frac{dy}{dx} + Py\right) = \mu Q$$

Integrating: $\mu y = \int \mu Q\, dx + C$. Solving for $y$ gives the result. $\blacksquare$

### 2.3 Worked Example: Linear Equation

**Problem.** Solve $y' + \frac{2}{x}y = x^2$ for $x > 0$.

_Solution._ $P(x) = 2/x$, $Q(x) = x^2$.

$\mu(x) = e^{\int 2/x\, dx} = e^{2\ln x} = x^2$.

$y = x^{-2}\left(\int x^2 \cdot x^2\, dx + C\right) = x^{-2}\left(\frac{x^5}{5} + C\right) = \frac{x^3}{5} + \frac{C}{x^2}$.
$\blacksquare$

### 2.4 Exact Equations

The ODE $M(x, y)\, dx + N(x, y)\, dy = 0$ is **exact** if
$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.

When exact, there exists $\Psi(x, y)$ such that $\frac{\partial \Psi}{\partial x} = M$ and
$\frac{\partial \Psi}{\partial y} = N$And the solution is $\Psi(x, y) = C$.

**Theorem 2.2.** If $M$ and $N$ have continuous partial derivatives on a connected domain $D$Then
$M\, dx + N\, dy = 0$ is exact if and only if $M_y = N_x$.

_Proof._ If exact, $M = \Psi_x$ and $N = \Psi_y$So $M_y = \Psi_{xy} = \Psi_{yx} = N_x$ by Clairaut.
Conversely, if $M_y = N_x$Define
$\Psi(x, y) = \int_{x_0}^x M(t, y)\, dt + \int_{y_0}^y N(x_0, s)\, ds$. Then $\Psi_x = M(x, y)$ and
$\Psi_y = \int_{x_0}^x M_y(t, y)\, dt + N(x_0, y) = \int_{x_0}^x N_x(t, y)\, dt + N(x_0, y) = N(x, y) - N(x_0, y) + N(x_0, y) = N(x, y)$.
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

**Case 1:** If $\frac{M_y - N_x}{N}$ depends only on $x$Then
$\mu(x) = e^{\int \frac{M_y - N_x}{N}\, dx}$.

**Case 2:** If $\frac{N_x - M_y}{M}$ depends only on $y$Then
$\mu(y) = e^{\int \frac{N_x - M_y}{M}\, dy}$.

### 2.7 Bernoulli Equations

A **Bernoulli equation** has the form

$$\frac{dy}{dx} + P(x)y = Q(x)y^n$$

Where $n \neq 0, 1$. The substitution $v = y^{1-n}$ transforms it into a linear equation:

$$\frac{dv}{dx} + (1 - n)P(x)v = (1 - n)Q(x)$$

**Example.** Solve $y' + y = y^2 e^x$.

Here $n = 2$So set $v = y^{-1}$. Then $v' = -y^{-2}y'$And the equation becomes $v' - v = -e^x$.
Integrating factor: $e^{-x}$. So $(v e^{-x})' = -1$Giving $ve^{-x} = -x + C$, $v = -xe^x + Ce^x$ And
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

An ODE of the form $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$ is called **homogeneous** (not to be
Confused with the linearity sense). The substitution $v = y/x$I.e., $y = vx$Gives $y' = v + xv'$ So
the equation becomes:

$$v + x\frac{dv}{dx} = F(v) \implies x\frac{dv}{dx} = F(v) - v$$

This is separable: $\frac{dv}{F(v) - v} = \frac{dx}{x}$.

### 2.11 Worked Example: Homogeneous Equation

**Problem.** Solve $y' = \frac{x^2 + y^2}{xy}$.

<details>
<summary>Solution</summary>

_Solution._ Rewrite as $y' = \frac{1 + (y/x)^2}{y/x}$. This is homogeneous with
$F(v) = \frac{1 + v^2}{v}$.

Set $y = vx$: $v + xv' = \frac{1 + v^2}{v} = v + \frac{1}{v}$.

So $xv' = \frac{1}{v}$Giving $v\, dv = \frac{dx}{x}$.

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

So $v = -x + C$And $y = x + \frac{1}{C - x}$.

### 2.13 Worked Example: Newton's Law of Cooling

**Problem.** A body at $90\degree\mathrm{C}$ is placed in a room at $20\degree\mathrm{C}$. After 10
Minutes, its temperature is $60\degree\mathrm{C}$. When will it reach $30\degree\mathrm{C}$?

<details>
<summary>Solution</summary>

_Solution._ Newton's law of cooling: $\frac{dT}{dt} = -k(T - 20)$, $T(0) = 90$.

This is separable: $\frac{dT}{T - 20} = -k\, dt$.

$\ln(T - 20) = -kt + C \implies T = 20 + Ce^{-kt}$.

$T(0) = 90 \implies C = 70$So $T = 20 + 70e^{-kt}$.

$T(10) = 60 \implies 60 = 20 + 70e^{-10k} \implies e^{-10k} = 4/7$.

$k = -\frac{1}{10}\ln(4/7) = \frac{\ln(7/4)}{10}$.

For $T = 30$:
$30 = 20 + 70e^{-kt} \implies e^{-kt} = 1/7 \implies t = \frac{\ln 7}{k} = \frac{10 \ln 7}{\ln(7/4)}$.

Numerically: $t \approx \frac{10 \cdot 1.946}{0.5596} \approx 34.8$ minutes. $\blacksquare$

</details>

### 2.14 Worked Example: Mixing Problem

**Problem.** A tank contains 100 L of brine with 20 kg of salt. Fresh water enters at 3 L/min and
The mixture leaves at 3 L/min. Find the amount of salt after 30 minutes.

<details>
<summary>Solution</summary>

_Solution._ Let $Q(t)$ be the amount of salt (kg) at time $t$ (min).

Rate of change:
$\frac{dQ}{dt} = \mathrm{rate}\; in - \mathrm{rate}\; out = 0 - 3 \cdot \frac{Q}{100}$.

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

_Solution._ $M = 3xy + 2y^2$, $N = x^2 + 2xy$.

$M_y = 3x + 4y$, $N_x = 2x + 2y$. Since $M_y \neq N_x$Not exact.

Check Case 1:
$\frac{M_y - N_x}{N} = \frac{x + 2y}{x^2 + 2xy} = \frac{x + 2y}{x(x + 2y)} = \frac{1}{x}$.

This depends only on $x$So $\mu(x) = e^{\int 1/x\, dx} = x$.

Multiply: $(3x^2y + 2xy^2)\, dx + (x^3 + 2x^2y)\, dy = 0$.

$\tilde{M} = 3x^2y + 2xy^2$, $\tilde{N} = x^3 + 2x^2y$.

$\tilde{M}_y = 3x^2 + 4xy = \tilde{N}_x$. Now exact.

$\Psi_x = 3x^2y + 2xy^2 \implies \Psi = x^3y + x^2y^2 + h(y)$.

$\Psi_y = x^3 + 2x^2y + h'(y) = x^3 + 2x^2y \implies h'(y) = 0 \implies h(y) = 0$.

Solution: $x^3y + x^2y^2 = C$. $\blacksquare$

</details>

### 2.16 Orthogonal Trajectories

Given a one-parameter family of curves $F(x, y, C) = 0$The **orthogonal trajectories** are curves
That intersect every member of the family at right angles. To find them:

1. Find the differential equation $\frac{dy}{dx} = f(x, y)$ of the given family.
2. Replace $\frac{dy}{dx}$ with $-\frac{dx}{dy}$ (equivalently, negate the slope).
3. Solve the new ODE.

**Example.** Find the orthogonal trajectories of $y = Cx^2$.

$\frac{dy}{dx} = 2Cx = \frac{2y}{x}$.

Orthogonal trajectories satisfy $\frac{dy}{dx} = -\frac{x}{2y}$.

Separating: $2y\, dy = -x\, dx$. Integrating: $y^2 = -\frac{x^2}{2} + C$Or
$\frac{x^2}{2} + y^2 = C$. These are ellipses.

### 2.17 Common Pitfalls for First-Order ODEs

:::caution Common Pitfall When separating variables, dividing by $h(y)$ can lose solutions where
$h(y) = 0$. Always check whether $h(y) = 0$ yields valid solutions before dividing.

:::
:::caution Common Pitfall Not every first-order ODE falls into a standard category. Equations like
$y' = e^{x^2} + \sin(y^2)$ cannot be solved by elementary methods and require numerical Techniques.

:::