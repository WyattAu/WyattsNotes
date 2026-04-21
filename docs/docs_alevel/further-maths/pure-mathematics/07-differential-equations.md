---
title: Differential Equations
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: differential-equations
sidebar_position: 7
---

## Differential Equations

Differential equations are equations involving derivatives of an unknown function. They arise
naturally whenever a rate of change is related to the current state of a system — from population
growth to electrical circuits. This chapter covers first-order equations (separable and integrating
factor methods), second-order linear equations with constant coefficients, and modelling
applications.


<DesmosGraph
  title="Slope Field Explorer"
  expressions={["\frac{dy}{dx}=x-y"]}
  width={800}
  height={500}
/>

Adjust the parameters in the graph above to explore the relationships between variables.


### Board Coverage

| Board   | Paper   | Notes                                                            |
| ------- | ------- | ---------------------------------------------------------------- |
| AQA     | Paper 1 | First-order (separable, integrating factor), growth/decay models |
| Edexcel | FP2     | First-order + second-order linear with constant coefficients     |
| OCR (A) | Paper 1 | First-order + second-order linear with constant coefficients     |
| CIE     | P2      | First-order (separable, integrating factor); second-order in P2  |

:::info
All boards examine first-order ODEs. CIE and Edexcel require second-order linear ODEs. AQA
focuses on first-order equations with growth and decay modelling. The formula booklet gives the
integrating factor formula on Edexcel; AQA and OCR students must know it.
:::

<hr />

## 1. First-Order ODEs: Separable Equations

### 1.1 Definition

**Definition.** A first-order ordinary differential equation (ODE) is **separable** if it can be
written in the form

$$\frac{dy}{dx} = f(x)\,g(y)$$

where the right-hand side is a product of a function of $x$ alone and a function of $y$ alone.

### 1.2 Method

Separate the variables and integrate both sides:

$$\int \frac{1}{g(y)}\,dy = \int f(x)\,dx$$

$$\boxed{\int \frac{1}{g(y)}\,dy = \int f(x)\,dx + C}$$

### 1.3 Worked example

Solve $\dfrac{dy}{dx} = \dfrac{x}{y}$ with $y(0) = 2$.

Separate: $y\,dy = x\,dx$.

Integrate: $\dfrac{y^2}{2} = \dfrac{x^2}{2} + C$.

Using $y(0) = 2$: $\dfrac{4}{2} = 0 + C \implies C = 2$.

$$y^2 = x^2 + 4, \quad y = \sqrt{x^2 + 4}$$

(We take the positive root since $y(0) = 2 > 0$.)

### 1.4 Domain restrictions

:::warning
When dividing by $g(y)$ during separation, we implicitly assume $g(y) \neq 0$. If
$g(y_0) = 0$, then $y = y_0$ is a constant (equilibrium) solution that may not appear in the general
solution. Always check for these.
:::

**Example.** $\dfrac{dy}{dx} = y(1-y)$.

Separating: $\displaystyle\int\frac{1}{y(1-y)}\,dy = \int dx$.

Partial fractions: $\dfrac{1}{y(1-y)} = \dfrac{1}{y} + \dfrac{1}{1-y}$.

$\ln|y| - \ln|1-y| = x + C$.

$\ln\left|\dfrac{y}{1-y}\right| = x + C$.

$\dfrac{y}{1-y} = Ae^x$ where $A = \pm e^C$.

$$\boxed{y = \frac{Ae^x}{1 + Ae^x}}$$

But note $y = 0$ and $y = 1$ are also solutions (equilibrium solutions), corresponding to $A = 0$
and the limiting case $A \to \infty$.

<hr />

## 2. First-Order ODEs: Integrating Factor Method

### 2.1 Standard form

**Definition.** A first-order linear ODE has the form

$$\frac{dy}{dx} + P(x)\,y = Q(x)$$

where $P(x)$ and $Q(x)$ are continuous functions of $x$.

### 2.2 The integrating factor

The **integrating factor** is

$$\boxed{\mu(x) = e^{\int P(x)\,dx}}$$

### 2.3 Derivation of the method

### Proof of the integrating factor technique

Multiply the ODE $\dfrac{dy}{dx} + P(x)\,y = Q(x)$ by $\mu(x)$:

$$\mu\frac{dy}{dx} + \mu P\,y = \mu Q$$

The left-hand side is the derivative of $\mu y$ because:

$$\frac{d}{dx}(\mu y) = \mu\frac{dy}{dx} + y\frac{d\mu}{dx}$$

Since $\dfrac{d\mu}{dx} = \mu \cdot P(x)$ (because $\mu = e^{\int P\,dx}$, so
$\mu' = P \cdot e^{\int P\,dx} = P\mu$):

$$\frac{d}{dx}(\mu y) = \mu\frac{dy}{dx} + y \cdot P\mu = \mu\frac{dy}{dx} + \mu P\,y$$

This is exactly the left-hand side. Therefore:

$$\frac{d}{dx}(\mu y) = \mu Q$$

Integrating both sides:

$$\boxed{\mu y = \int \mu Q\,dx + C}$$

$$\boxed{y = \frac{1}{\mu}\left(\int \mu\, Q\,dx + C\right)}$$

$\square$

### 2.4 Worked example

Solve $\dfrac{dy}{dx} + \dfrac{2}{x}\,y = x^2$ for $x > 0$.

Here $P(x) = \dfrac{2}{x}$, $Q(x) = x^2$.

$$\mu = e^{\int 2/x\,dx} = e^{2\ln x} = x^2$$

Multiply through: $x^2\dfrac{dy}{dx} + 2xy = x^4$.

Left-hand side is $\dfrac{d}{dx}(x^2 y) = x^4$.

Integrate: $x^2 y = \dfrac{x^5}{5} + C$.

$$\boxed{y = \frac{x^3}{5} + \frac{C}{x^2}}$$

### 2.5 Worked example with boundary condition

Solve $\dfrac{dy}{dx} - 3y = e^{2x}$, given $y(0) = 1$.

$P(x) = -3$, $Q(x) = e^{2x}$.

$$\mu = e^{\int -3\,dx} = e^{-3x}$$

$$\frac{d}{dx}(e^{-3x}y) = e^{-3x} \cdot e^{2x} = e^{-x}$$

$$e^{-3x}y = \int e^{-x}\,dx = -e^{-x} + C$$

$$y = -e^{2x} + Ce^{3x}$$

Using $y(0) = 1$: $1 = -1 + C \implies C = 2$.

$$\boxed{y = 2e^{3x} - e^{2x}}$$

:::tip
The constant of integration in $\mu = e^{\int P\,dx}$ can be omitted (absorbed into $C$).
Always choose the simplest antiderivative.
:::

<hr />

## 3. Second-Order Linear ODEs with Constant Coefficients

### 3.1 General form

**Definition.** A second-order linear ODE with constant coefficients has the form

$$a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = f(x)$$

where $a$, $b$, $c$ are constants with $a \neq 0$.

The equation is **homogeneous** when $f(x) = 0$:

$$a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0$$

### 3.2 The auxiliary equation

To solve the homogeneous equation, try $y = e^{mx}$. Then $y' = me^{mx}$ and $y'' = m^2 e^{mx}$.

Substituting: $am^2 e^{mx} + bme^{mx} + ce^{mx} = 0$.

Since $e^{mx} \neq 0$ for all $x$:

$$\boxed{am^2 + bm + c = 0}$$

This is the **auxiliary equation** (or **characteristic equation**).

### 3.3 Three cases

The nature of the roots of $am^2 + bm + c = 0$ determines the form of the general solution.

**Case 1: Two distinct real roots** $m_1 \neq m_2$ (discriminant $\Delta = b^2 - 4ac > 0$):

$$\boxed{y = Ae^{m_1 x} + Be^{m_2 x}}$$

**Case 2: Repeated real root** $m$ (discriminant $\Delta = 0$):

$$\boxed{y = (A + Bx)e^{mx}}$$

**Case 3: Complex conjugate roots** $m = \alpha \pm \beta i$ (discriminant $\Delta < 0$):

$$\boxed{y = e^{\alpha x}(A\cos\beta x + B\sin\beta x)}$$

### Proof of the general solution for Case 3 (complex roots)

When $m = \alpha + \beta i$ and $\overline{m} = \alpha - \beta i$, the two linearly independent
solutions are $e^{(\alpha+\beta i)x}$ and $e^{(\alpha-\beta i)x}$.

Using Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$:

$$e^{(\alpha+\beta i)x} = e^{\alpha x}(\cos\beta x + i\sin\beta x)$$
$$e^{(\alpha-\beta i)x} = e^{\alpha x}(\cos\beta x - i\sin\beta x)$$

Any linear combination $C_1 e^{(\alpha+\beta i)x} + C_2 e^{(\alpha-\beta i)x}$ can be rewritten as:

$$e^{\alpha x}\left[(C_1+C_2)\cos\beta x + i(C_1-C_2)\sin\beta x\right]$$

Setting $A = C_1 + C_2$ and $B = i(C_1 - C_2)$ (which are real when $C_1$ and $C_2$ are complex
conjugates), we obtain:

$$y = e^{\alpha x}(A\cos\beta x + B\sin\beta x)$$

$\square$

### 3.4 Worked examples

**Example (Case 1).** Solve $y'' - 5y' + 6y = 0$.

Auxiliary: $m^2 - 5m + 6 = 0 \implies (m-2)(m-3) = 0 \implies m = 2, 3$.

$$y = Ae^{2x} + Be^{3x}$$

**Example (Case 2).** Solve $y'' - 4y' + 4y = 0$.

Auxiliary: $m^2 - 4m + 4 = 0 \implies (m-2)^2 = 0 \implies m = 2$ (repeated).

$$y = (A + Bx)e^{2x}$$

**Example (Case 3).** Solve $y'' + 2y' + 5y = 0$.

Auxiliary: $m^2 + 2m + 5 = 0 \implies m = \dfrac{-2 \pm \sqrt{4-20}}{2} = -1 \pm 2i$.

$$y = e^{-x}(A\cos 2x + B\sin 2x)$$

<hr />

## 4. Non-Homogeneous Second-Order ODEs: Particular Solutions

### 4.1 Structure of the general solution

**Theorem (Superposition).** If $y_h$ is the general solution of the homogeneous equation
$a y'' + by' + cy = 0$ (the **complementary function**, CF), and $y_p$ is any particular solution of
$a y'' + by' + cy = f(x)$ (a **particular integral**, PI), then the general solution is

$$\boxed{y = y_h + y_p}$$

### Proof of the superposition principle

Let $y_1$ satisfy $a y_1'' + by_1' + cy_1 = 0$ and $y_p$ satisfy $a y_p'' + by_p' + cy_p = f(x)$.

Define $y = y_1 + y_p$. Then:

$$ay'' + by' + cy = a(y_1'' + y_p'') + b(y_1' + y_p') + c(y_1 + y_p)$$

$$= (ay_1'' + by_1' + cy_1) + (ay_p'' + by_p' + cy_p) = 0 + f(x) = f(x)$$

So $y_1 + y_p$ satisfies the non-homogeneous equation. Since $y_1$ contains two arbitrary constants,
the general solution $y = y_h + y_p$ also contains two arbitrary constants. $\square$

### 4.2 Method of undetermined coefficients

To find $y_p$, guess the form based on $f(x)$, then determine coefficients by substitution.

| $f(x)$          | Trial $y_p$ (if not in CF)        | If in CF, multiply by $x$          |
| --------------- | --------------------------------- | ---------------------------------- |
| $k$ (constant)  | $c$                               | $cx$ then $cx^2$                   |
| $kx + \ell$     | $px + q$                          | $x(px+q)$ then $x^2(px+q)$         |
| $ke^{\alpha x}$ | $ce^{\alpha x}$                   | $cxe^{\alpha x}$                   |
| $k\cos\omega x$ | $c\cos\omega x + d\sin\omega x$   | $x(c\cos\omega x + d\sin\omega x)$ |
| $k\sin\omega x$ | $c\cos\omega x + d\sin\omega x$   | $x(c\cos\omega x + d\sin\omega x)$ |
| Polynomial      | General polynomial of same degree | Multiply by $x$ as needed          |

:::warning
If any term in your trial $y_p$ already appears in the complementary function $y_h$,
multiply the entire trial by $x$. If it still appears, multiply by $x^2$.
:::

### 4.3 Worked examples

**Example 1.** Solve $y'' - 3y' + 2y = 4e^{3x}$.

CF: $m^2 - 3m + 2 = 0 \implies (m-1)(m-2) = 0 \implies m = 1, 2$. $y_h = Ae^x + Be^{2x}$.

PI: Since $f(x) = 4e^{3x}$ and $e^{3x}$ is not in the CF, try $y_p = ce^{3x}$. $y_p' = 3ce^{3x}$,
$y_p'' = 9ce^{3x}$.

Substitute: $9ce^{3x} - 9ce^{3x} + 2ce^{3x} = 4e^{3x} \implies 2c = 4 \implies c = 2$.

$$\boxed{y = Ae^x + Be^{2x} + 2e^{3x}}$$

**Example 2.** Solve $y'' + y = \sin x$.

CF: $m^2 + 1 = 0 \implies m = \pm i$. $y_h = A\cos x + B\sin x$.

PI: $f(x) = \sin x$. The terms $\cos x$ and $\sin x$ are in the CF, so multiply by $x$:
$y_p = x(c\cos x + d\sin x)$.

$y_p' = (c\cos x + d\sin x) + x(-c\sin x + d\cos x)$
$y_p'' = 2(-c\sin x + d\cos x) + x(-c\cos x - d\sin x)$

Substitute into $y'' + y = \sin x$:

$2(-c\sin x + d\cos x) + x(-c\cos x - d\sin x) + x(c\cos x + d\sin x) = \sin x$

$2(-c\sin x + d\cos x) = \sin x$

Comparing: $-2c = 1 \implies c = -\dfrac{1}{2}$, and $2d = 0 \implies d = 0$.

$$\boxed{y = A\cos x + B\sin x - \frac{1}{2}x\cos x}$$

**Example 3.** Solve $y'' - 4y' + 4y = 3x + 2$.

CF: $m^2 - 4m + 4 = 0 \implies (m-2)^2 = 0$. $y_h = (A + Bx)e^{2x}$.

PI: Try $y_p = px + q$. $y_p' = p$, $y_p'' = 0$.

$0 - 4p + 4(px + q) = 3x + 2$. $4px + (4q - 4p) = 3x + 2$.

$4p = 3 \implies p = \dfrac{3}{4}$. $4q - 3 = 2 \implies q = \dfrac{5}{4}$.

$$\boxed{y = (A + Bx)e^{2x} + \frac{3}{4}x + \frac{5}{4}}$$

<hr />

## 5. Growth and Decay Models

### 5.1 Exponential growth and decay

The ODE $\dfrac{dy}{dt} = ky$ (where $k$ is a constant) has solution

$$\boxed{y = y_0 e^{kt}}$$

where $y_0 = y(0)$. If $k > 0$: exponential growth. If $k < 0$: exponential decay.

**Proof.** Separable:
$\dfrac{1}{y}\dfrac{dy}{dt} = k \implies \displaystyle\int \frac{1}{y}\,dy = \int k\,dt \implies \ln y = kt + C$.

$y = e^{kt+C} = Ae^{kt}$. With $y(0) = y_0$: $A = y_0$. $\square$

### 5.2 Newton's law of cooling

**Definition.** Newton's law of cooling states that the rate of temperature change of a body is
proportional to the difference between its temperature $T$ and the ambient temperature $T_a$:

$$\frac{dT}{dt} = -k(T - T_a)$$

where $k > 0$ is the cooling constant.

**Solution.** Let $\theta = T - T_a$. Then $\dfrac{d\theta}{dt} = -k\theta$, giving
$\theta = \theta_0 e^{-kt}$.

$$\boxed{T = T_a + (T_0 - T_a)e^{-kt}}$$

**Example.** A cup of tea at $90°C$ is placed in a room at $20°C$. After 10 minutes the temperature
is $60°C$. Find the temperature after 20 minutes.

$T_0 = 90$, $T_a = 20$. $T(10) = 60$:

$60 = 20 + 70e^{-10k} \implies e^{-10k} = \dfrac{40}{70} = \dfrac{4}{7} \implies k = \dfrac{1}{10}\ln\dfrac{7}{4}$.

$T(20) = 20 + 70e^{-20k} = 20 + 70\left(\dfrac{4}{7}\right)^2 = 20 + 70 \cdot \dfrac{16}{49} = 20 + \dfrac{160}{7} \approx 42.9°C$.

### 5.3 Population growth with carrying capacity

The **logistic equation** models population growth with a carrying capacity $M$:

$$\frac{dP}{dt} = kP\left(1 - \frac{P}{M}\right)$$

This is separable. The solution is

$$\boxed{P(t) = \frac{M}{1 + Ae^{-kt}}}$$

where $A = \dfrac{M - P_0}{P_0}$.

### 5.4 Mixing problems

**Example.** A tank contains 100 litres of water with 10 kg of salt. Pure water flows in at 5 L/min,
and the mixture flows out at 5 L/min. Find the amount of salt after $t$ minutes.

Let $S(t)$ be the amount of salt (kg). Rate in = 0. Rate out = concentration $\times$ flow rate
$= \dfrac{S}{100} \times 5 = \dfrac{S}{20}$.

$$\frac{dS}{dt} = -\frac{S}{20}$$

$S = 10e^{-t/20}$.

After 20 minutes: $S(20) = 10e^{-1} \approx 3.68$ kg.

<hr />

## 6. Proof of the General Solution of the Second-Order Homogeneous ODE

### Proof that the CF gives the general solution

We must show that for all three cases, the proposed general solution has two arbitrary constants and
satisfies the ODE.

**Case 1 ($m_1 \neq m_2$, real).** Let $y_1 = e^{m_1 x}$ and $y_2 = e^{m_2 x}$.

Substituting $y_1$ into $ay'' + by' + cy = 0$:
$am_1^2 e^{m_1 x} + bm_1 e^{m_1 x} + ce^{m_1 x} = (am_1^2 + bm_1 + c)e^{m_1 x} = 0$ since $m_1$ is a
root. Similarly for $y_2$.

The Wronskian is
$W = y_1 y_2' - y_1' y_2 = m_2 e^{(m_1+m_2)x} - m_1 e^{(m_1+m_2)x} = (m_2 - m_1)e^{(m_1+m_2)x} \neq 0$.

Since $W \neq 0$, $y_1$ and $y_2$ are linearly independent, so $y = Ae^{m_1 x} + Be^{m_2 x}$ is the
general solution.

**Case 2 ($m$ repeated).** $y_1 = e^{mx}$ is one solution. We need a second linearly independent
solution. Try $y_2 = xe^{mx}$.

$y_2' = e^{mx}(1 + mx)$, $y_2'' = e^{mx}(2m + m^2 x)$.

$ay_2'' + by_2' + cy_2 = e^{mx}\left[a(2m + m^2 x) + b(1 + mx) + cx\right]$

$= e^{mx}\left[(am^2 + bm + c)x + (2am + b)\right]$

The coefficient of $x$ is zero since $m$ satisfies the auxiliary equation. The constant:
$2am + b = 0$ when the root is repeated (since $m = -b/2a$). So $y_2$ is also a solution.

The Wronskian: $W = e^{mx} \cdot e^{mx}(1+mx) - me^{mx} \cdot xe^{mx} = e^{2mx} \neq 0$.

Therefore $y = (A + Bx)e^{mx}$ is the general solution.

$\square$

<hr />

## Problems

<details>
<summary>Problem 1</summary>

Solve $\dfrac{dy}{dx} = \dfrac{3x^2}{y^2}$ given $y(1) = 2$.
</details>

<details>
<summary>Solution 1</summary>

Separate: $y^2\,dy = 3x^2\,dx$.

Integrate: $\dfrac{y^3}{3} = x^3 + C$.

$y(1) = 2$: $\dfrac{8}{3} = 1 + C \implies C = \dfrac{5}{3}$.

$y^3 = 3x^3 + 5 \implies \boxed{y = \sqrt[3]{3x^3 + 5}}$.

**If you get this wrong, revise:** [Separable Equations](#1-first-order-odes-separable-equations) —
Section 1.
</details>

<details>
<summary>Problem 2</summary>

Solve $\dfrac{dy}{dx} + \dfrac{3}{x}\,y = x^2$ for $x > 0$, given $y(1) = 0$.
</details>

<details>
<summary>Solution 2</summary>

$P(x) = 3/x$, $Q(x) = x^2$.

$\mu = e^{\int 3/x\,dx} = e^{3\ln x} = x^3$.

$\dfrac{d}{dx}(x^3 y) = x^3 \cdot x^2 = x^5$.

$x^3 y = \dfrac{x^6}{6} + C$.

$y = \dfrac{x^3}{6} + \dfrac{C}{x^3}$.

$y(1) = 0$: $\dfrac{1}{6} + C = 0 \implies C = -\dfrac{1}{6}$.

$\boxed{y = \dfrac{x^3}{6} - \dfrac{1}{6x^3} = \dfrac{x^6 - 1}{6x^3}}$.

**If you get this wrong, revise:**
[Integrating Factor](#2-first-order-odes-integrating-factor-method) — Section 2.
</details>

<details>
<summary>Problem 3</summary>

Solve $y'' - 6y' + 9y = 0$ given $y(0) = 1$ and $y'(0) = 0$.
</details>

<details>
<summary>Solution 3</summary>

Auxiliary: $m^2 - 6m + 9 = 0 \implies (m-3)^2 = 0 \implies m = 3$ (repeated).

$y = (A + Bx)e^{3x}$, $y' = (B + 3A + 3Bx)e^{3x}$.

$y(0) = 1$: $A = 1$. $y'(0) = 0$: $B + 3 = 0 \implies B = -3$.

$\boxed{y = (1 - 3x)e^{3x}}$.

**If you get this wrong, revise:** [Three Cases](#33-three-cases) — Section 3.3.
</details>

<details>
<summary>Problem 4</summary>

Solve $y'' + 4y' + 13y = 0$.
</details>

<details>
<summary>Solution 4</summary>

Auxiliary: $m^2 + 4m + 13 = 0 \implies m = \dfrac{-4 \pm \sqrt{16-52}}{2} = -2 \pm 3i$.

$\alpha = -2$, $\beta = 3$.

$\boxed{y = e^{-2x}(A\cos 3x + B\sin 3x)}$.

**If you get this wrong, revise:** [Three Cases](#33-three-cases) — Section 3.3.
</details>

<details>
<summary>Problem 5</summary>

Find the general solution of $y'' - y = 2e^x$.
</details>

<details>
<summary>Solution 5</summary>

CF: $m^2 - 1 = 0 \implies m = \pm 1$. $y_h = Ae^x + Be^{-x}$.

PI: $f(x) = 2e^x$. Since $e^x$ appears in the CF, try $y_p = cxe^x$.

$y_p' = c(1+x)e^x$, $y_p'' = c(2+x)e^x$.

$y_p'' - y_p = c(2+x)e^x - cxe^x = 2ce^x = 2e^x \implies c = 1$.

$\boxed{y = Ae^x + Be^{-x} + xe^x}$.

**If you get this wrong, revise:**
[Undetermined Coefficients](#42-method-of-undetermined-coefficients) — Section 4.2.
</details>

<details>
<summary>Problem 6</summary>

Find the general solution of $y'' + 2y' + y = x^2$.
</details>

<details>
<summary>Solution 6</summary>

CF: $m^2 + 2m + 1 = 0 \implies (m+1)^2 = 0$. $y_h = (A + Bx)e^{-x}$.

PI: Try $y_p = px^2 + qx + r$. $y_p' = 2px + q$, $y_p'' = 2p$.

$(2p) + 2(2px + q) + (px^2 + qx + r) = x^2$.

$px^2 + (4p+q)x + (2p+2q+r) = x^2$.

$p = 1$, $4 + q = 0 \implies q = -4$, $2 - 8 + r = 0 \implies r = 6$.

$\boxed{y = (A + Bx)e^{-x} + x^2 - 4x + 6}$.

**If you get this wrong, revise:**
[Undetermined Coefficients](#42-method-of-undetermined-coefficients) — Section 4.2.
</details>

<details>
<summary>Problem 7</summary>

A body cools from $80°C$ to $60°C$ in 10 minutes in surroundings at $20°C$. How long does it take to
cool to $40°C$?
</details>

<details>
<summary>Solution 7</summary>

Newton's law: $T = 20 + 60e^{-kt}$ (since $T_0 = 80$, $T_a = 20$).

$T(10) = 60$: $60 = 20 + 60e^{-10k} \implies e^{-10k} = \dfrac{2}{3}$.

$T(t) = 40$: $40 = 20 + 60e^{-kt} \implies e^{-kt} = \dfrac{1}{3}$.

$\left(\dfrac{2}{3}\right)^{t/10} = \dfrac{1}{3} \implies \dfrac{t}{10}\ln\dfrac{2}{3} = \ln\dfrac{1}{3}$.

$t = \dfrac{10\ln(1/3)}{\ln(2/3)} = \dfrac{10\ln 3}{\ln(3/2)} \approx \dfrac{10 \times 1.0986}{0.4055} \approx 27.1$
minutes.

**If you get this wrong, revise:** [Newton's Law of Cooling](#52-newtons-law-of-cooling) — Section
5.2.
</details>

<details>
<summary>Problem 8</summary>

Solve $\dfrac{dy}{dx} = xy$ given $y(0) = 5$.
</details>

<details>
<summary>Solution 8</summary>

Separate: $\dfrac{1}{y}\,dy = x\,dx$.

Integrate: $\ln|y| = \dfrac{x^2}{2} + C$.

$y(0) = 5$: $\ln 5 = C$.

$y = e^{x^2/2 + \ln 5} = 5e^{x^2/2}$.

$\boxed{y = 5e^{x^2/2}}$.

**If you get this wrong, revise:** [Separable Equations](#1-first-order-odes-separable-equations) —
Section 1.
</details>

<details>
<summary>Problem 9</summary>

Solve $y'' + 9y = 6\cos 3x$.
</details>

<details>
<summary>Solution 9</summary>

CF: $m^2 + 9 = 0 \implies m = \pm 3i$. $y_h = A\cos 3x + B\sin 3x$.

PI: $f(x) = 6\cos 3x$. Since $\cos 3x$ and $\sin 3x$ are in the CF, try
$y_p = x(c\cos 3x + d\sin 3x)$.

$y_p' = (c\cos 3x + d\sin 3x) + x(-3c\sin 3x + 3d\cos 3x)$
$y_p'' = (-6c\sin 3x + 6d\cos 3x) + x(-9c\cos 3x - 9d\sin 3x)$

$y_p'' + 9y_p = -6c\sin 3x + 6d\cos 3x = 6\cos 3x$.

$d = 1$, $c = 0$.

$\boxed{y = A\cos 3x + B\sin 3x + x\sin 3x}$.

**If you get this wrong, revise:**
[Undetermined Coefficients](#42-method-of-undetermined-coefficients) — Section 4.2.
</details>

<details>
<summary>Problem 10</summary>

Solve $\dfrac{dy}{dx} - \dfrac{y}{x} = x^2$ for $x > 0$, given $y(1) = 3$.
</details>

<details>
<summary>Solution 10</summary>

$P(x) = -1/x$, $Q(x) = x^2$.

$\mu = e^{\int -1/x\,dx} = e^{-\ln x} = \dfrac{1}{x}$.

$\dfrac{d}{dx}\!\left(\dfrac{y}{x}\right) = \dfrac{1}{x} \cdot x^2 = x$.

$\dfrac{y}{x} = \dfrac{x^2}{2} + C \implies y = \dfrac{x^3}{2} + Cx$.

$y(1) = 3$: $\dfrac{1}{2} + C = 3 \implies C = \dfrac{5}{2}$.

$\boxed{y = \dfrac{x^3}{2} + \dfrac{5x}{2} = \dfrac{x(x^2 + 5)}{2}}$.

**If you get this wrong, revise:**
[Integrating Factor](#2-first-order-odes-integrating-factor-method) — Section 2.
</details>

:::

:::

:::

:::
