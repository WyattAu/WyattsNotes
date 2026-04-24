---
title: Differential Equations
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
$\frac{\partial \Psi}{\partial y} = N$, and the solution is $\Psi(x, y) = C$.

**Theorem 2.2.** If $M$ and $N$ have continuous partial derivatives on a simply connected domain
$D$, then $M\, dx + N\, dy = 0$ is exact if and only if $M_y = N_x$.

_Proof._ If exact, $M = \Psi_x$ and $N = \Psi_y$, so $M_y = \Psi_{xy} = \Psi_{yx} = N_x$ by
Clairaut. Conversely, if $M_y = N_x$, define
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

_Solution._ Characteristic equation: $r^2 - 5r + 6 = (r-2)(r-3) = 0$. Roots: $r = 2, 3$.

$y_h = c_1 e^{2x} + c_2 e^{3x}$.

$y(0) = c_1 + c_2 = 1$. $y'(0) = 2c_1 + 3c_2 = 0$. Solving: $c_1 = 3$, $c_2 = -2$.

$y = 3e^{2x} - 2e^{3x}$. $\blacksquare$

### 3.4 Nonhomogeneous Equations: Undetermined Coefficients

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

### 3.5 Worked Example: Undetermined Coefficients

**Problem.** Solve $y'' - y = 2e^x$.

_Solution._ Homogeneous: $r^2 - 1 = 0$, roots $\pm 1$. $y_h = c_1 e^x + c_2 e^{-x}$.

Since $e^x$ is a homogeneous solution, guess $y_p = Axe^x$. $y_p' = Ae^x + Axe^x$,
$y_p'' = 2Ae^x + Axe^x$. $y_p'' - y_p = (2Ae^x + Axe^x) - Axe^x = 2Ae^x = 2e^x$, so $A = 1$.

$y = c_1 e^x + c_2 e^{-x} + xe^x$. $\blacksquare$

### 3.6 Variation of Parameters

**Theorem 3.4 (Variation of Parameters).** For $y'' + p(x)y' + q(x)y = g(x)$, let $y_1, y_2$ be a
fundamental set of solutions of the homogeneous equation. Then a particular solution is

$$y_p = -y_1 \int \frac{y_2 g}{W}\, dx + y_2 \int \frac{y_1 g}{W}\, dx$$

where $W = W(y_1, y_2) = y_1 y_2' - y_2 y_1'$.

_Proof._ Seek $y_p = u_1(x)y_1(x) + u_2(x)y_2(x)$. Impose the constraint $u_1'y_1 + u_2'y_2 = 0$.
Then $y_p' = u_1 y_1' + u_2 y_2'$ and $y_p'' = u_1' y_1' + u_1 y_1'' + u_2' y_2' + u_2 y_2''$.
Substituting into the ODE:
$(u_1'y_1' + u_2'y_2') + u_1(y_1'' + py_1' + qy_1) + u_2(y_2'' + py_2' + qy_2) = g$. Since
$y_1, y_2$ satisfy the homogeneous equation, this reduces to $u_1'y_1' + u_2'y_2' = g$. Together
with $u_1'y_1 + u_2'y_2 = 0$, solving gives the formulas above. $\blacksquare$

### 3.7 Worked Example: Variation of Parameters

**Problem.** Solve $y'' + y = \tan x$ using variation of parameters.

_Solution._ $y_1 = \cos x$, $y_2 = \sin x$. $W = \cos x \cdot \cos x - \sin x \cdot (-\sin x) = 1$.

$u_1' = -\frac{y_2 g}{W} = -\sin x \tan x = -\frac{\sin^2 x}{\cos x} = -(1 - \cos^2 x)/\cos x = -\sec x + \cos x$.

$u_1 = -\ln|\sec x + \tan x| + \sin x$.

$u_2' = \frac{y_1 g}{W} = \cos x \tan x = \sin x$.

$u_2 = -\cos x$.

$y_p = (-\ln|\sec x + \tan x| + \sin x)\cos x + (-\cos x)\sin x = -\cos x \ln|\sec x + \tan x|$.

$y = c_1 \cos x + c_2 \sin x - \cos x \ln|\sec x + \tan x|$. $\blacksquare$

### 3.8 Higher-Order Linear ODEs

For $y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0$:

- Characteristic equation $r^n + a_{n-1}r^{n-1} + \cdots + a_0 = 0$.
- For root $r$ of multiplicity $m$: include $e^{rx}, xe^{rx}, \ldots, x^{m-1}e^{rx}$.
- For complex roots $\alpha \pm i\beta$ of multiplicity $m$: include
  $e^{\alpha x} x^k \cos(\beta x)$ and $e^{\alpha x} x^k \sin(\beta x)$ for $k = 0, \ldots, m - 1$.

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

### 4.4 Worked Example

**Problem.** Solve $\mathbf{x}' = \begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix}\mathbf{x}$.

_Solution._ Characteristic equation:
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

### 5.3 Common Laplace Transforms

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

### 5.4 Solving IVPs with Laplace Transforms

**Procedure:**

1. Take the Laplace transform of both sides of the ODE.
2. Solve the resulting algebraic equation for $Y(s) = \mathcal{L}\{y(t)\}$.
3. Find the inverse Laplace transform to obtain $y(t)$.

### 5.5 Worked Example

**Problem.** Solve $y'' + 4y = \sin(2t)$, $y(0) = 0$, $y'(0) = 0$.

_Solution._ Taking Laplace transforms:

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

### 5.6 The Dirac Delta Function

The **Dirac delta function** $\delta(t - c)$ satisfies
$\int_0^{\infty} \delta(t - c)f(t)\, dt = f(c)$ for continuous $f$. It models an instantaneous
impulse.

$\mathcal{L}\{\delta(t - c)\} = e^{-cs}$.

**Example.** The response of $y'' + \omega^2 y = \delta(t)$ with $y(0) = y'(0) = 0$ is
$y(t) = \frac{1}{\omega}\sin(\omega t)$ (the **impulse response**).

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

## 7. Fourier Series

### 7.1 Definition

A **Fourier series** of a $2\pi$-periodic function $f$ is

$$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left(a_n \cos(nx) + b_n \sin(nx)\right)$$

where

$$a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos(nx)\, dx, \quad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\, dx$$

### 7.2 Convergence

**Theorem 7.1 (Dirichlet's Theorem).** If $f$ is $2\pi$-periodic and piecewise smooth, its Fourier
series converges to:

- $f(x)$ at points where $f$ is continuous.
- $\frac{f(x^+) + f(x^-)}{2}$ at jump discontinuities.

### 7.3 Parseval's Identity

$$\frac{1}{\pi}\int_{-\pi}^{\pi} |f(x)|^2\, dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)$$

### 7.4 Sine and Cosine Series

For functions defined on $[0, L]$:

- **Cosine series** (even extension): $a_n = \frac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}\, dx$,
  $b_n = 0$.
- **Sine series** (odd extension): $a_n = 0$,
  $b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$.

### 7.5 Worked Example

**Problem.** Find the Fourier series of $f(x) = x$ on $(-\pi, \pi)$, extended $2\pi$-periodically.

_Solution._ $f$ is odd, so $a_n = 0$ for all $n$.

$b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} x\sin(nx)\, dx = \frac{2}{\pi}\int_0^{\pi} x\sin(nx)\, dx$.

Integration by parts: $u = x$, $dv = \sin(nx)\, dx$:

$b_n = \frac{2}{\pi}\left[-\frac{x\cos(nx)}{n}\Big|_0^{\pi} + \int_0^{\pi} \frac{\cos(nx)}{n}\, dx\right] = \frac{2}{\pi}\left[-\frac{\pi\cos(n\pi)}{n} + 0\right] = \frac{-2\cos(n\pi)}{n} = \frac{2(-1)^{n+1}}{n}$.

$x \sim 2\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}\sin(nx)$. $\blacksquare$

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

### 8.3 Solving the Heat Equation by Separation of Variables

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

### 8.4 Worked Example: Heat Equation

**Problem.** Solve $u_t = u_{xx}$ for $0 \lt{} x \lt{} \pi$, $t > 0$, with $u(0, t) = u(\pi, t) = 0$
and $u(x, 0) = \sin(2x) + 3\sin(5x)$.

_Solution._ Here $\alpha = 1$ and $L = \pi$. The initial condition is already a sine series.

$\lambda_n = n^2$, $X_n = \sin(nx)$, $T_n = e^{-n^2 t}$.

$u(x, t) = e^{-4t}\sin(2x) + 3e^{-25t}\sin(5x)$. $\blacksquare$

### 8.5 The Wave Equation

$$u_{tt} = c^2 u_{xx}, \quad 0 \lt{} x \lt{} L, \quad t > 0$$

with boundary conditions $u(0, t) = u(L, t) = 0$, and initial conditions $u(x, 0) = f(x)$,
$u_t(x, 0) = g(x)$.

### 8.6 Solving the Wave Equation

Separation of variables $u(x, t) = X(x)T(t)$ gives:

$$X'' + \lambda X = 0, \quad T'' + c^2 \lambda T = 0$$

With $\lambda_n = (n\pi/L)^2$:

$$X_n(x) = \sin\frac{n\pi x}{L}, \quad T_n(t) = a_n \cos\frac{cn\pi t}{L} + b_n \sin\frac{cn\pi t}{L}$$

$$u(x, t) = \sum_{n=1}^{\infty} \sin\frac{n\pi x}{L}\left(a_n \cos\frac{cn\pi t}{L} + b_n \sin\frac{cn\pi t}{L}\right)$$

where $a_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\, dx$ and
$b_n = \frac{2}{cn\pi}\int_0^L g(x)\sin\frac{n\pi x}{L}\, dx$.

### 8.7 D'Alembert's Solution

For the wave equation on $-\infty \lt{} x \lt{} \infty$:

$$u(x, t) = \frac{f(x + ct) + f(x - ct)}{2} + \frac{1}{2c}\int_{x - ct}^{x + ct} g(s)\, ds$$

This represents the solution as a superposition of right-moving and left-moving waves.

### 8.8 Laplace's Equation

$$u_{xx} + u_{yy} = 0$$

on a domain $\Omega \subseteq \mathbb{R}^2$, with boundary conditions on $\partial\Omega$.

**Theorem 8.1 (Maximum Principle).** A harmonic function $u$ (satisfying Laplace's equation) on a
bounded domain attains its maximum and minimum on the boundary.

**Theorem 8.2 (Uniqueness).** The Dirichlet problem for Laplace's equation has at most one solution.

_Proof._ If $u_1$ and $u_2$ are two solutions with the same boundary data, then $v = u_1 - u_2$ is
harmonic with $v = 0$ on $\partial\Omega$. By the maximum principle, $v \equiv 0$. $\blacksquare$

### 8.9 Worked Example: Wave Equation

**Problem.** A string of length $\pi$ with fixed ends is plucked: $u(x, 0) = x(\pi - x)$,
$u_t(x, 0) = 0$. Find $u(x, t)$.

_Solution._ With $c = 1$ and $L = \pi$: $a_n = \frac{2}{\pi}\int_0^{\pi} x(\pi - x)\sin(nx)\, dx$,
$b_n = 0$ (since $g = 0$).

Integrating by parts twice:

$\int_0^{\pi} x(\pi - x)\sin(nx)\, dx = \left[-\frac{x(\pi - x)\cos(nx)}{n}\right]_0^{\pi} + \frac{1}{n}\int_0^{\pi}(\pi - 2x)\cos(nx)\, dx$

$= 0 + \frac{1}{n}\left[\frac{(\pi - 2x)\sin(nx)}{n}\right]_0^{\pi} + \frac{2}{n^2}\int_0^{\pi}\sin(nx)\, dx$

$= 0 + \frac{2}{n^2}\left[-\frac{\cos(nx)}{n}\right]_0^{\pi} = \frac{2}{n^3}(1 - (-1)^n)$

For even $n$: $a_n = 0$. For odd $n = 2k + 1$:
$a_n = \frac{2}{\pi} \cdot \frac{4}{n^3} = \frac{8}{\pi n^3}$.

$u(x, t) = \frac{8}{\pi}\sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{(2k+1)^3}\cos((2k+1)t)$.
$\blacksquare$

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
