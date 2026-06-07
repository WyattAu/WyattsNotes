---
title: Second-Order Linear ODEs
tags:
  - Mathematics
  - University
---

### 3.1 General Theory

A **second-order linear ODE** has the form

$$y'' + p(x)y' + q(x)y = g(x)$$

**Theorem 3.1.** If $y_1$ and $y_2$ are solutions of the homogeneous equation $y'' + py' + qy = 0$
Then $c_1 y_1 + c_2 y_2$ is also a solution (superposition principle).

**Theorem 3.2 (Wronskian Criterion).** Two solutions $y_1, y_2$ of the homogeneous equation form a
**fundamental set** (i.e., span all solutions) if and only if their Wronskian is non-zero:

$$W(y_1, y_2)(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} \neq 0$$

**Abel's identity** states that $W(x) = W(x_0) e^{-\int_{x_0}^x p(t)\, dt}$.

**Theorem 3.3.** The general solution of $y'' + py' + qy = g$ is $y = y_h + y_p$Where $y_h$ is the
General solution of the homogeneous equation and $y_p$ is any particular solution.

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

### 3.4 Worked Example: Complex Roots

**Problem.** Solve $y'' + 2y' + 5y = 0$ with $y(0) = 1$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ Characteristic equation: $r^2 + 2r + 5 = 0$.

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

_Solution._ Characteristic equation: $r^2 - 4r + 4 = (r - 2)^2 = 0$. Repeated root $r = 2$.

$y = c_1 e^{2x} + c_2 xe^{2x}$.

$y(0) = c_1 = 1$.

$y' = 2c_1 e^{2x} + c_2 e^{2x} + 2c_2 xe^{2x}$.

$y'(0) = 2c_1 + c_2 = 3 \implies 2 + c_2 = 3 \implies c_2 = 1$.

$y = e^{2x} + xe^{2x} = e^{2x}(1 + x)$. $\blacksquare$

</details>

### 3.6 Nonhomogeneous Equations: Undetermined Coefficients

For equations $y'' + ay' + by = g(x)$ where $g(x)$ is a polynomial, exponential, sine, cosine, or
Products of these, guess the form of $y_p$ and solve for coefficients.

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

_Solution._ Homogeneous: $r^2 - 1 = 0$Roots $\pm 1$. $y_h = c_1 e^x + c_2 e^{-x}$.

Since $e^x$ is a homogeneous solution, guess $y_p = Axe^x$. $y_p' = Ae^x + Axe^x$
$y_p'' = 2Ae^x + Axe^x$. $y_p'' - y_p = (2Ae^x + Axe^x) - Axe^x = 2Ae^x = 2e^x$So $A = 1$.

$y = c_1 e^x + c_2 e^{-x} + xe^x$. $\blacksquare$

### 3.8 Worked Example: Undetermined Coefficients with Polynomial

**Problem.** Solve $y'' + 3y' + 2y = x^2 + 1$.

<details>
<summary>Solution</summary>

_Solution._ Homogeneous: $r^2 + 3r + 2 = (r+1)(r+2) = 0$Roots $-1, -2$.

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

The forcing is $e^{-x}\sin x$So guess $y_p = e^{-x}(A\sin x + B\cos x)$.

$y_p' = -e^{-x}(A\sin x + B\cos x) + e^{-x}(A\cos x - B\sin x) = e^{-x}((A - B)\cos x - (A + B)\sin x)$.

$y_p'' = -e^{-x}((A - B)\cos x - (A + B)\sin x) + e^{-x}(-(A - B)\sin x - (A + B)\cos x)$

$= e^{-x}(-2A\cos x + 2B\sin x)$.

$y_p'' + 2y_p' + y_p = e^{-x}(-2A\cos x + 2B\sin x) + 2e^{-x}((A - B)\cos x - (A + B)\sin x) + e^{-x}(A\sin x + B\cos x)$

$= e^{-x}[(-2A + 2A - 2B + B)\cos x + (2B - 2A - 2B + A)\sin x]$

$= e^{-x}[(-B)\cos x + (-A)\sin x]$.

Setting equal to $3e^{-x}\sin x$: $-B = 0$ and $-A = 3$So $A = -3$, $B = 0$.

$y = c_1 e^{-x} + c_2 xe^{-x} - 3e^{-x}\sin x$. $\blacksquare$

</details>
### 3.9 Resonance

Consider the forced harmonic oscillator

$$y'' + \omega_0^2 y = F_0 \cos(\omega t)$$

**Case 1: $\omega \neq \omega_0$ (Non-resonant).** The particular solution is
$y_p = \frac{F_0}{\omega_0^2 - \omega^2}\cos(\omega t)$With bounded amplitude.

**Case 2: $\omega = \omega_0$ (Resonant).** Since $\cos(\omega_0 t)$ is a homogeneous solution,
Guess $y_p = At\sin(\omega_0 t)$. Substituting:

$y_p'' + \omega_0^2 y_p = 2A\omega_0 \cos(\omega_0 t) - A\omega_0^2 t\sin(\omega_0 t) + A\omega_0^2 t\sin(\omega_0 t) = 2A\omega_0 \cos(\omega_0 t)$

Setting equal to $F_0 \cos(\omega_0 t)$: $A = \frac{F_0}{2\omega_0}$.

$$y_p = \frac{F_0}{2\omega_0} t \sin(\omega_0 t)$$

The amplitude grows linearly with $t$ --- this is **resonance**. Physically, the system absorbs
energy From the periodic forcing at its natural frequency, causing unbounded oscillations.

**Worked Example.** Solve $y'' + 9y = 6\cos(3t)$, $y(0) = 0$, $y'(0) = 0$.

<details>
<summary>Solution</summary>

_Solution._ $\omega_0 = 3$, $\omega = 3$So this is the resonant case.

Homogeneous: $r^2 + 9 = 0$, $r = \pm 3i$. $y_h = c_1 \cos(3t) + c_2 \sin(3t)$.

$y_p = \frac{6}{2 \cdot 3} t\sin(3t) = t\sin(3t)$.

$y = c_1 \cos(3t) + c_2 \sin(3t) + t\sin(3t)$.

$y(0) = c_1 = 0$.

$y' = 3c_2 \cos(3t) + \sin(3t) + 3t\cos(3t)$.

$y'(0) = 3c_2 = 0 \implies c_2 = 0$.

$y = t\sin(3t)$. $\blacksquare$

</details>

### 3.10 Variation of Parameters

**Theorem 3.4 (Variation of Parameters).** For $y'' + p(x)y' + q(x)y = g(x)$Let $y_1, y_2$ be a
Fundamental set of solutions of the homogeneous equation. Then a particular solution is

$$y_p = -y_1 \int \frac{y_2 g}{W}\, dx + y_2 \int \frac{y_1 g}{W}\, dx$$

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

$u_1' = -\frac{y_2 g}{W} = -\sin x \tan x = -\frac{\sin^2 x}{\cos x} = -(1 - \cos^2 x)/\cos x = -\sec x + \cos x$.

$u_1 = -\ln|\sec x + \tan x| + \sin x$.

$u_2' = \frac{y_1 g}{W} = \cos x \tan x = \sin x$.

$u_2 = -\cos x$.

$y_p = (-\ln|\sec x + \tan x| + \sin x)\cos x + (-\cos x)\sin x = -\cos x \ln|\sec x + \tan x|$.

$y = c_1 \cos x + c_2 \sin x - \cos x \ln|\sec x + \tan x|$. $\blacksquare$

### 3.12 Reduction of Order

**Theorem 3.5.** Given one solution $y_1(x)$ of $y'' + p(x)y' + q(x)y = 0$A second linearly
Independent solution is obtained by setting $y_2 = y_1 \int \frac{e^{-\int p(x)\, dx}}{y_1^2}\, dx$.

_Proof._ Seek $y_2 = v(x) y_1(x)$. Then $y_2' = v'y_1 + vy_1'$ and
$y_2'' = v''y_1 + 2v'y_1' + vy_1''$. Substituting into the ODE:

$v''y_1 + 2v'y_1' + vy_1'' + p(v'y_1 + vy_1') + qvy_1 = 0$

$v''y_1 + v'(2y_1' + py_1) + v(y_1'' + py_1' + qy_1) = 0$

Since $y_1$ satisfies the ODE, the coefficient of $v$ vanishes:

$v''y_1 + v'(2y_1' + py_1) = 0$

Let $w = v'$. Then $w'y_1 + w(2y_1' + py_1) = 0$A separable first-order ODE:

$\frac{w'}{w} = -\frac{2y_1' + py_1}{y_1} = -2\frac{y_1'}{y_1} - p$

$\ln w = -2\ln y_1 - \int p\, dx \implies w = \frac{e^{-\int p\, dx}}{y_1^2}$

Since $w = v'$We obtain the result. $\blacksquare$

**Worked Example.** Given that $y_1 = e^x$ solves $y'' - 2y' + y = 0$Find a second solution.

<details>
<summary>Solution</summary>

_Solution._ Here $p(x) = -2$So $e^{-\int p\, dx} = e^{2x}$.

$y_2 = e^x \int \frac{e^{2x}}{e^{2x}}\, dx = e^x \int 1\, dx = xe^x$.

This gives $y_h = c_1 e^x + c_2 xe^x$Consistent with the repeated-root case ($r = 1$ with
Multiplicity 2). $\blacksquare$

</details>

### 3.13 Euler-Cauchy Equations

An **Euler-Cauchy (equidimensional) equation** has the form

$$x^2 y'' + axy' + by = 0, \quad x > 0$$

The substitution $y = x^r$ gives the characteristic equation

$$r(r - 1) + ar + b = r^2 + (a - 1)r + b = 0$$

**Case 1: Two distinct real roots $r_1 \neq r_2$.** $y_h = c_1 x^{r_1} + c_2 x^{r_2}$.

**Case 2: Repeated root $r$.** $y_h = c_1 x^r + c_2 x^r \ln x$.

**Case 3: Complex roots $r = \alpha \pm i\beta$.**
$y_h = x^{\alpha}(c_1 \cos(\beta \ln x) + c_2 \sin(\beta \ln x))$.

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

For $y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0$:

- Characteristic equation $r^n + a_{n-1}r^{n-1} + \cdots + a_0 = 0$.
- For root $r$ of multiplicity $m$: include $e^{rx}, xe^{rx}, \ldots, x^{m-1}e^{rx}$.
- For complex roots $\alpha \pm i\beta$ of multiplicity $m$: include
  $e^{\alpha x} x^k \cos(\beta x)$ and $e^{\alpha x} x^k \sin(\beta x)$ for $k = 0, \ldots, m - 1$.

### 3.16 Spring-Mass-Damper Systems

A mass $m$ on a spring with spring constant $k$ and damping coefficient $c$Subject to external force
$F(t)$Satisfies

$$mx'' + cx' + kx = F(t)$$

Dividing by $m$ and setting $\omega_0 = \sqrt{k/m}$, $\gamma = c/(2m)$:

$$x'' + 2\gamma x' + \omega_0^2 x = \frac{F(t)}{m}$$

The homogeneous solution depends on the discriminant $\gamma^2 - \omega_0^2$:

| Condition                 | Type        | Homogeneous Solution                                                                                    |
| ------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| $\gamma^2 \lt \omega_0^2$ | Underdamped | $e^{-\gamma t}(c_1 \cos(\omega_d t) + c_2 \sin(\omega_d t))$, $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$ |
| $\gamma^2 = \omega_0^2$   | Critical    | $e^{-\gamma t}(c_1 + c_2 t)$                                                                            |
| $\gamma^2 > \omega_0^2$   | Overdamped  | $c_1 e^{r_1 t} + c_2 e^{r_2 t}$, $r_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$                   |

<!-- prettier-ignore -->
<DesmosGraph title="Damped Harmonic Oscillator" expressions={["e^{-c*x}\\cos(w*x)", "e^{-c*x}", "-e^{-c*x}"]} width={800} height={400} />

The underdamped oscillation $e^{-\gamma t}\cos(\omega_d t)$ (blue) decays inside the envelope
$\pm e^{-\gamma t}$ (green/red). Adjust sliders `c` (damping $\gamma$) and `w` (damped frequency
$\omega_d$) to explore different regimes.

### 3.17 Common Pitfalls for Second-Order ODEs

:::caution Common Pitfall When using undetermined coefficients, always check whether your guess
Overlaps with the homogeneous solution. For $y'' - 4y = e^{2x}$Guessing $y_p = Ae^{2x}$ fails
Because $e^{2x}$ satisfies the homogeneous equation. You must use $y_p = Axe^{2x}$ instead.
:::

:::caution Common Pitfall For Euler-Cauchy equations, the substitution $y = x^r$ only works for
$x > 0$. For $x < 0$Substitute $x = -e^t$ or use $y = (-x)^r$.
:::

:::caution Common Pitfall Variation of parameters always works but can lead to difficult integrals.
If the forcing term $g(x)$ is a polynomial, exponential, sine, or cosine (or products of these),
Prefer undetermined coefficients --- it is much faster.

### 3.18 Abel's Identity (Proof)

**Theorem 3.6 (Abel's Identity).** If $y_1, y_2$ are solutions of $y'' + p(x)y' + q(x)y = 0$ Then
their Wronskian satisfies

$$W(x) = W(x_0) e^{-\int_{x_0}^x p(t)\, dt}$$

_Proof._ Since $y_1, y_2$ satisfy the ODE:

$y_1'' = -py_1' - qy_1$ and $y_2'' = -py_2' - qy_2$.

$W' = y_1 y_2'' + y_1' y_2' - y_1'' y_2 - y_1' y_2'$

$= y_1(-py_2' - qy_2) - (-py_1' - qy_1)y_2$

$= -p(y_1 y_2' - y_1' y_2) = -pW$.

So $W' + pW = 0$Giving $W = Ce^{-\int p\, dx}$And evaluating at $x_0$ gives the result.
$\blacksquare$

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


