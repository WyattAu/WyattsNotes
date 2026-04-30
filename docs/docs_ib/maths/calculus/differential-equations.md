---
title: "Differential Equations"
description: "IB Mathematics — first order separable equations, integrating factors, second order homogeneous equations, applications, and numerical methods."
slug: differential-equations
---

## First Order Differential Equations

### Terminology

A **differential equation** (DE) is an equation involving derivatives of an unknown function. A
**first order** DE involves only the first derivative. A DE is **ordinary** (ODE) if all derivatives
are with respect to a single variable.

The **order** of a DE is the highest derivative that appears. The **general solution** of an
$n$-th order DE contains $n$ arbitrary constants. A **particular solution** is obtained by imposing
initial or boundary conditions.

---

## Separable First Order Equations

### Form and Method

A first order ODE is **separable** if it can be written in the form:

$$\frac{dy}{dx} = f(x) \cdot g(y)$$

Equivalently:

$$\frac{dy}{g(y)} = f(x)\,dx$$

Integrate both sides:

$$\int \frac{1}{g(y)}\,dy = \int f(x)\,dx$$

### Worked Examples

**Example.** Solve $\dfrac{dy}{dx} = \dfrac{x}{y}$ with $y(0) = 2$.

Separate: $y\,dy = x\,dx$.

$$\int y\,dy = \int x\,dx \implies \frac{y^2}{2} = \frac{x^2}{2} + C$$

Apply $y(0) = 2$: $\dfrac{4}{2} = 0 + C \implies C = 2$.

$$y^2 = x^2 + 4 \implies y = \sqrt{x^2 + 4}$$

(We take the positive root since $y(0) = 2 \gt 0$.)

**Example.** Solve $\dfrac{dy}{dx} = xy$.

$$\frac{dy}{y} = x\,dx \implies \ln|y| = \frac{x^2}{2} + C \implies y = Ae^{x^2/2}$$

where $A = \pm e^C$.

**Example.** Solve $\dfrac{dy}{dx} = \dfrac{y + 1}{x}$, $x \gt 0$.

$$\frac{dy}{y + 1} = \frac{dx}{x} \implies \ln|y + 1| = \ln x + C \implies |y + 1| = e^C \cdot x$$

$$y + 1 = Ax \implies y = Ax - 1$$

---

## First Order Linear Equations and Integrating Factors

### Standard Form

A first order linear ODE has the form:

$$\frac{dy}{dx} + P(x)\,y = Q(x)$$

### The Integrating Factor

Multiply through by the **integrating factor**:

$$\mu(x) = \exp\!\left(\int P(x)\,dx\right)$$

This transforms the equation into:

$$\frac{d}{dx}\bigl[\mu(x) \cdot y\bigr] = \mu(x) \cdot Q(x)$$

Integrate both sides:

$$y = \frac{1}{\mu(x)} \int \mu(x) \cdot Q(x)\,dx$$

**Derivation.** By the product rule:

$$\frac{d}{dx}(\mu y) = \mu\frac{dy}{dx} + y\frac{d\mu}{dx}$$

We need $\dfrac{d\mu}{dx} = \mu P(x)$, which gives $\dfrac{1}{\mu}\dfrac{d\mu}{dx} = P(x)$, hence
$\mu = \exp\!\left(\displaystyle\int P(x)\,dx\right)$.

### Worked Examples

**Example.** Solve $\dfrac{dy}{dx} + \dfrac{y}{x} = x^2$, $x \gt 0$.

Here $P(x) = \dfrac{1}{x}$, so:

$$\mu(x) = \exp\!\left(\int \frac{1}{x}\,dx\right) = e^{\ln x} = x$$

Multiply through: $x\dfrac{dy}{dx} + y = x^3$, i.e. $\dfrac{d}{dx}(xy) = x^3$.

$$xy = \int x^3\,dx = \frac{x^4}{4} + C \implies y = \frac{x^3}{4} + \frac{C}{x}$$

**Example.** Solve $\dfrac{dy}{dx} + 2y = e^{-x}$.

$\mu(x) = e^{2x}$.

$$\frac{d}{dx}\bigl(e^{2x} y\bigr) = e^{2x} \cdot e^{-x} = e^x$$

$$e^{2x} y = e^x + C \implies y = e^{-x} + Ce^{-2x}$$

**Example.** Solve $\dfrac{dy}{dx} - 3y = 6$, given $y(0) = 1$.

$\mu(x) = e^{-3x}$.

$$\frac{d}{dx}\bigl(e^{-3x} y\bigr) = 6e^{-3x}$$

$$e^{-3x} y = -2e^{-3x} + C \implies y = -2 + Ce^{3x}$$

Using $y(0) = 1$: $1 = -2 + C \implies C = 3$. Hence $y = 3e^{3x} - 2$.

---

## Second Order Homogeneous Equations

### Form

$$a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0$$

where $a, b, c$ are constants and $a \ne 0$.

### The Characteristic Equation

Substitute $y = e^{\lambda x}$:

$$a\lambda^2 + b\lambda + c = 0$$

This quadratic in $\lambda$ is the **auxiliary** (or **characteristic**) equation.

### Three Cases

**Case 1: Two distinct real roots** $\lambda_1 \ne \lambda_2$.

$$y = Ae^{\lambda_1 x} + Be^{\lambda_2 x}$$

**Case 2: Repeated real root** $\lambda$.

$$y = (A + Bx)e^{\lambda x}$$

**Case 3: Complex conjugate roots** $\lambda = \alpha \pm i\beta$.

$$y = e^{\alpha x}\bigl(A\cos\beta x + B\sin\beta x\bigr)$$

### Worked Examples

**Example.** Solve $y'' - 5y' + 6y = 0$.

Characteristic equation: $\lambda^2 - 5\lambda + 6 = 0 \implies (\lambda - 2)(\lambda - 3) = 0$.

Roots: $\lambda_1 = 2$, $\lambda_2 = 3$ (distinct real).

$$y = Ae^{2x} + Be^{3x}$$

**Example.** Solve $y'' + 4y' + 4y = 0$.

Characteristic equation: $\lambda^2 + 4\lambda + 4 = 0 \implies (\lambda + 2)^2 = 0$.

Repeated root: $\lambda = -2$.

$$y = (A + Bx)e^{-2x}$$

**Example.** Solve $y'' + 2y' + 5y = 0$.

Characteristic equation: $\lambda^2 + 2\lambda + 5 = 0$.

$$\lambda = \frac{-2 \pm \sqrt{4 - 20}}{2} = -1 \pm 2i$$

Here $\alpha = -1$, $\beta = 2$.

$$y = e^{-x}(A\cos 2x + B\sin 2x)$$

### With Initial Conditions

**Example.** Solve $y'' - y = 0$ with $y(0) = 0$ and $y'(0) = 1$.

Characteristic equation: $\lambda^2 - 1 = 0 \implies \lambda = \pm 1$.

$$y = Ae^x + Be^{-x}, \qquad y' = Ae^x - Be^{-x}$$

$y(0) = A + B = 0 \implies B = -A$.
$y'(0) = A - B = 1 \implies 2A = 1 \implies A = \dfrac{1}{2}$.

$$y = \frac{1}{2}e^x - \frac{1}{2}e^{-x} = \sinh x$$

---

## Applications

### Exponential Growth and Decay

The DE $\dfrac{dN}{dt} = kN$ has the general solution $N = N_0 e^{kt}$.

- **Growth:** $k \gt 0$ (e.g. population, compound interest).
- **Decay:** $k \lt 0$ (e.g. radioactive decay, cooling).

**Half-life.** For radioactive decay, $N = N_0 e^{-\lambda t}$ where $\lambda \gt 0$ is the decay
constant. The half-life $t_{1/2}$ satisfies:

$$N_0 e^{-\lambda t_{1/2}} = \frac{N_0}{2} \implies t_{1/2} = \frac{\ln 2}{\lambda}$$

**Example.** A substance has a half-life of $5$ years. How long until only $10\%$ remains?

$$\lambda = \frac{\ln 2}{5}$$

$$0.1N_0 = N_0 e^{-\lambda t} \implies -\lambda t = \ln 0.1 \implies t = \frac{\ln 10}{\ln 2} \cdot 5 \approx 16.6\,\mathrm{years}$$

### Newton's Law of Cooling

$$\frac{dT}{dt} = -k(T - T_{\mathrm{env}})$$

where $T$ is the temperature of the object, $T_{\mathrm{env}}$ is the ambient temperature, and
$k \gt 0$.

Solution: $T(t) = T_{\mathrm{env}} + (T_0 - T_{\mathrm{env}})e^{-kt}$.

**Example.** A body at $90\,{}^{\circ}\mathrm{C}$ is placed in a room at $20\,{}^{\circ}\mathrm{C}$. After
$10$ minutes, its temperature is $60\,{}^{\circ}\mathrm{C}$. Find its temperature after $30$ minutes.

$$60 = 20 + 70e^{-10k} \implies e^{-10k} = \frac{40}{70} = \frac{4}{7}$$

$$T(30) = 20 + 70\left(\frac{4}{7}\right)^3 = 20 + 70 \cdot \frac{64}{343} = 20 + \frac{4480}{343} \approx 33.1\,{}^{\circ}\mathrm{C}$$

### Simple Harmonic Motion (SHM)

The equation of SHM is:

$$\frac{d^2x}{dt^2} = -\omega^2 x$$

Characteristic equation: $\lambda^2 + \omega^2 = 0 \implies \lambda = \pm i\omega$.

$$x(t) = A\cos\omega t + B\sin\omega t$$

This can also be written as $x(t) = R\cos(\omega t + \phi)$ where $R = \sqrt{A^2 + B^2}$ and
$\phi = \arctan\!\left(-\dfrac{B}{A}\right)$.

**Key quantities:**

| Quantity | Formula |
| :--- | :--- |
| Amplitude | $R = \sqrt{A^2 + B^2}$ |
| Period | $T = \dfrac{2\pi}{\omega}$ |
| Frequency | $f = \dfrac{1}{T} = \dfrac{\omega}{2\pi}$ |
| Angular frequency | $\omega = 2\pi f$ |
| Maximum velocity | $v_{\max} = R\omega$ |
| Maximum acceleration | $a_{\max} = R\omega^2$ |

**Example.** A particle moves with SHM. At $t = 0$, $x = 3$ and $v = 4$. The angular frequency is
$\omega = 2$. Find $x(t)$.

$$x = A\cos 2t + B\sin 2t, \qquad v = -2A\sin 2t + 2B\cos 2t$$

$x(0) = A = 3$, $v(0) = 2B = 4 \implies B = 2$.

$$x(t) = 3\cos 2t + 2\sin 2t$$

Amplitude: $R = \sqrt{9 + 4} = \sqrt{13}$.

### Damped Oscillations

With damping proportional to velocity:

$$\frac{d^2x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2\, x = 0$$

where $\gamma$ is the damping coefficient and $\omega_0$ is the natural frequency.

Characteristic equation: $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$.

$$\lambda = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$$

| Condition | Type of damping | Solution |
| :--- | :--- | :--- |
| $\gamma^2 \gt \omega_0^2$ | Overdamped | Two distinct real roots: exponentials |
| $\gamma^2 = \omega_0^2$ | Critically damped | Repeated root: $(A + Bt)e^{-\gamma t}$ |
| $\gamma^2 \lt \omega_0^2$ | Underdamped | $\lambda = -\gamma \pm i\omega_d$: decaying oscillation |

where $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$ is the **damped frequency**.

### Mechanics Applications

**Example.** A particle of mass $m$ falls under gravity with air resistance proportional to velocity.
Find the velocity as a function of time.

Taking downward as positive, with drag force $-kv$:

$$m\frac{dv}{dt} = mg - kv$$

$$\frac{dv}{dt} + \frac{k}{m}v = g$$

Integrating factor: $\mu = e^{kt/m}$.

$$\frac{d}{dt}\!\left(ve^{kt/m}\right) = ge^{kt/m}$$

$$v = \frac{mg}{k} + Ce^{-kt/m}$$

If $v(0) = 0$: $C = -\dfrac{mg}{k}$, giving $v = \dfrac{mg}{k}\!\left(1 - e^{-kt/m}\right)$.

The **terminal velocity** is $v_T = \dfrac{mg}{k}$ (as $t \to \infty$).

---

## Numerical Methods

### Euler's Method

For the initial value problem $\dfrac{dy}{dx} = f(x, y)$ with $y(x_0) = y_0$, Euler's method
generates approximate values using:

$$y_{n+1} = y_n + h \cdot f(x_n, y_n)$$

$$x_{n+1} = x_n + h$$

where $h$ is the step size.

**Algorithm:**

1. Set $x_0, y_0$ from the initial condition.
2. For each step $n = 0, 1, 2, \ldots$:
   - Compute the slope: $m_n = f(x_n, y_n)$.
   - Update: $y_{n+1} = y_n + h \cdot m_n$.
   - Advance: $x_{n+1} = x_n + h$.

**Example.** Use Euler's method with $h = 0.1$ to approximate $y(0.5)$ for
$\dfrac{dy}{dx} = x + y$, $y(0) = 1$.

| $n$ | $x_n$ | $y_n$ | $f(x_n, y_n) = x_n + y_n$ |
| :-- | :---- | :---- | :------------------------- |
| 0 | 0.0 | 1.000 | 1.000 |
| 1 | 0.1 | 1.100 | 1.200 |
| 2 | 0.2 | 1.220 | 1.420 |
| 3 | 0.3 | 1.362 | 1.662 |
| 4 | 0.4 | 1.528 | 1.928 |
| 5 | 0.5 | 1.721 | — |

Euler's approximation: $y(0.5) \approx 1.721$.

**Exact solution.** This is a linear DE: $y' - y = x$. Integrating factor $e^{-x}$:

$$\frac{d}{dx}(ye^{-x}) = xe^{-x}$$

Integrating by parts: $ye^{-x} = -(x+1)e^{-x} + C$. With $y(0) = 1$: $C = 2$.

$$y = 2e^x - x - 1$$

At $x = 0.5$: $y = 2e^{0.5} - 1.5 \approx 1.797$.

The Euler approximation of $1.721$ underestimates the true value by about $0.076$, a relative error
of roughly $4.2\%$.

### Error Analysis

Euler's method has **local truncation error** proportional to $h^2$ and **global error**
proportional to $h$. Halving the step size approximately halves the global error.

### Improved Euler Method (Heun's Method)

A more accurate variant uses the average of the slopes at the beginning and end of each step:

$$k_1 = f(x_n, y_n)$$
$$k_2 = f(x_n + h, y_n + hk_1)$$
$$y_{n+1} = y_n + \frac{h}{2}(k_1 + k_2)$$

This is a **second order** method with global error proportional to $h^2$, offering significantly
better accuracy than the basic Euler method for the same step size.

:::warning Common Pitfall

Euler's method can produce wildly inaccurate results for stiff equations or when the step size is too
large. Always check whether the approximation is reasonable by comparing with qualitative behaviour
of the DE (equilibrium, asymptotes, periodicity).

:::

---

## Additional Worked Examples

**Worked Example: Separable Equation with Partial Fractions**

Solve $\dfrac{dy}{dx} = \dfrac{y^2 - 1}{x}$ with $y(1) = 2$, $x \gt 0$.

<details>
<summary>Solution</summary>

Separate variables:

$$\frac{dy}{y^2 - 1} = \frac{dx}{x}$$

Apply partial fractions to the left side: $\dfrac{1}{y^2 - 1} = \dfrac{1}{2(y-1)} - \dfrac{1}{2(y+1)}$.

$$\int \frac{1}{2(y-1)} - \frac{1}{2(y+1)}\,dy = \int \frac{dx}{x}$$

$$\frac{1}{2}\ln|y-1| - \frac{1}{2}\ln|y+1| = \ln x + C$$

$$\ln\left|\frac{y-1}{y+1}\right| = 2\ln x + 2C = \ln(x^2) + 2C$$

$$\left|\frac{y-1}{y+1}\right| = e^{2C} x^2 = Ax^2$$

where $A = e^{2C} \gt 0$.

Apply $y(1) = 2$: $\dfrac{1}{3} = A \cdot 1 \implies A = \dfrac{1}{3}$.

Since $y(1) = 2 \gt 1$, the numerator $y - 1$ is positive initially. For $x \gt 0$ near $1$:

$$\frac{y-1}{y+1} = \frac{x^2}{3}$$

$$3(y - 1) = x^2(y + 1) \implies 3y - 3 = x^2 y + x^2 \implies y(3 - x^2) = 3 + x^2$$

$$y = \frac{3 + x^2}{3 - x^2}$$

This is valid for $0 \lt x \lt \sqrt{3}$.

</details>

**Worked Example: Integrating Factor with Trigonometric Coefficients**

Solve $\dfrac{dy}{dx} + y\tan x = \cos x$ for $-\dfrac{\pi}{2} \lt x \lt \dfrac{\pi}{2}$.

<details>
<summary>Solution</summary>

Here $P(x) = \tan x$, so:

$$\mu(x) = \exp\!\left(\int \tan x\,dx\right) = \exp(-\ln|\cos x|) = \frac{1}{\cos x} = \sec x$$

Multiply through: $\sec x \dfrac{dy}{dx} + y\sec x \tan x = \sec x \cos x = 1$.

The left side is $\dfrac{d}{dx}(y \sec x)$, so:

$$\frac{d}{dx}(y \sec x) = 1 \implies y \sec x = x + C$$

$$y = (x + C)\cos x$$

</details>

**Worked Example: Second Order with Complex Roots and Initial Conditions**

Solve $y'' - 4y' + 13y = 0$ with $y(0) = 1$ and $y'(0) = 6$.

<details>
<summary>Solution</summary>

Characteristic equation: $\lambda^2 - 4\lambda + 13 = 0$.

$$\lambda = \frac{4 \pm \sqrt{16 - 52}}{2} = \frac{4 \pm \sqrt{-36}}{2} = 2 \pm 3i$$

General solution: $y = e^{2x}(A\cos 3x + B\sin 3x)$.

Compute $y'$:

$$y' = 2e^{2x}(A\cos 3x + B\sin 3x) + e^{2x}(-3A\sin 3x + 3B\cos 3x)$$

$$y' = e^{2x}\bigl[(2A + 3B)\cos 3x + (2B - 3A)\sin 3x\bigr]$$

Apply $y(0) = 1$: $A = 1$.

Apply $y'(0) = 6$: $2(1) + 3B = 6 \implies 3B = 4 \implies B = \dfrac{4}{3}$.

$$y = e^{2x}\!\left(\cos 3x + \frac{4}{3}\sin 3x\right)$$

</details>

**Worked Example: Newton's Law of Cooling with Two Data Points**

A cup of coffee at $85\,{}^{\circ}\mathrm{C}$ is placed in a room at $22\,{}^{\circ}\mathrm{C}$. After
$5$ minutes the temperature is $70\,{}^{\circ}\mathrm{C}$, and after $10$ minutes it is
$60\,{}^{\circ}\mathrm{C}$. Find the temperature after $20$ minutes.

<details>
<summary>Solution</summary>

The model is $T(t) = 22 + (85 - 22)e^{-kt} = 22 + 63e^{-kt}$.

From the first data point: $70 = 22 + 63e^{-5k} \implies e^{-5k} = \dfrac{48}{63} = \dfrac{16}{21}$.

From the second data point: $60 = 22 + 63e^{-10k} \implies e^{-10k} = \dfrac{38}{63}$.

Check consistency: $\left(\dfrac{16}{21}\right)^2 = \dfrac{256}{441} \approx 0.5805$, and
$\dfrac{38}{63} \approx 0.6032$. These are close but not exactly equal, indicating measurement
imprecision. Using the $10$-minute data point:

$$e^{-10k} = \frac{38}{63} \implies -10k = \ln\!\left(\frac{38}{63}\right) \implies k = \frac{1}{10}\ln\!\left(\frac{63}{38}\right) \approx 0.0506$$

$$T(20) = 22 + 63\left(\frac{38}{63}\right)^2 = 22 + \frac{1444}{63} \approx 22 + 22.92 = 44.9\,{}^{\circ}\mathrm{C}$$

</details>

**Worked Example: Euler's Method with Small Step Size**

Use Euler's method with $h = 0.05$ to approximate $y(0.3)$ for $\dfrac{dy}{dx} = x - y$,
$y(0) = 2$.

<details>
<summary>Solution</summary>

| $n$ | $x_n$ | $y_n$ | $f(x_n, y_n) = x_n - y_n$ |
| :-- | :---- | :---- | :------------------------- |
| 0 | 0.00 | 2.0000 | $-2.0000$ |
| 1 | 0.05 | 1.9000 | $-1.8500$ |
| 2 | 0.10 | 1.8075 | $-1.7075$ |
| 3 | 0.15 | 1.7221 | $-1.5721$ |
| 4 | 0.20 | 1.6435 | $-1.4435$ |
| 5 | 0.25 | 1.5713 | $-1.3213$ |
| 6 | 0.30 | 1.5053 | — |

Euler approximation: $y(0.3) \approx 1.505$.

The exact solution (integrating factor): $y' + y = x$, $\mu = e^x$.

$$\frac{d}{dx}(ye^x) = xe^x \implies ye^x = (x - 1)e^x + C$$

With $y(0) = 2$: $C = 3$. So $y = x - 1 + 3e^{-x}$.

At $x = 0.3$: $y = -0.7 + 3e^{-0.3} \approx -0.7 + 3(0.7408) = -0.7 + 2.2225 = 1.522$.

Error: $|1.522 - 1.505| \approx 0.017$, roughly $1.1\%$.

</details>

---

## Common Pitfalls

1. **Forgetting the constant of integration.** When solving a separable equation, each side of the
   separated equation produces its own constant. These combine into a single constant $C$, but omitting
   it entirely loses the generality of the solution.

2. **Losing solutions during separation.** Dividing by $g(y)$ implicitly assumes $g(y) \ne 0$. The
   equilibrium solution $g(y) = 0$ must be checked separately. For example, in $\dfrac{dy}{dx} = y^2$,
   dividing by $y^2$ loses the solution $y = 0$.

3. **Incorrect sign in the integrating factor.** The standard form is
   $\dfrac{dy}{dx} + P(x)y = Q(x)$. If the equation is $\dfrac{dy}{dx} = P(x)y + Q(x)$, you must
   rewrite it as $\dfrac{dy}{dx} - P(x)y = Q(x)$ before computing $\mu = e^{\int -P(x)\,dx}$.

4. **Misidentifying the discriminant for second order equations.** For
   $a\lambda^2 + b\lambda + c = 0$, the discriminant is $\Delta = b^2 - 4ac$. If $\Delta = 0$, the
   repeated root gives $(A + Bx)e^{\lambda x}$, **not** $Ae^{\lambda x}$.

5. **Confusing the damping cases.** In the damped oscillation equation
   $\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0$, it is $\gamma^2$ that is compared with $\omega_0^2$.
   A common error is to compare $\gamma$ with $\omega_0$ directly.

6. **Euler's method sign errors.** The update formula is $y_{n+1} = y_n + h \cdot f(x_n, y_n)$.
   A negative sign in $f$ does **not** change the formula; it only affects the value of the slope
   $f(x_n, y_n)$ at each step.

7. **Applying initial conditions prematurely.** Apply the initial condition only after finding the
   general solution with the constant $C$. Applying it during the separation or integration step leads
   to incorrect particular solutions.

8. **Ignoring the domain of the solution.** Solutions to DEs may only be valid on specific intervals.
   For example, $y = \dfrac{3 + x^2}{3 - x^2}$ blows up at $x = \sqrt{3}$. Always state the domain
   on which the solution is defined.

---

## Exam-Style Problems

1. Solve $\dfrac{dy}{dx} = \dfrac{e^{x+y}}{e^x + 1}$ given $y(0) = \ln 3$.

2. Solve $\dfrac{dy}{dx} + \dfrac{2y}{x} = x^3$ for $x \gt 0$, given $y(1) = 0$.

3. Find the general solution of $y'' + 6y' + 9y = 0$ and identify the type of damping.

4. A radioactive isotope has a half-life of $8$ days. A sample initially contains $200\,\mathrm{g}$.
   How long until only $12.5\,\mathrm{g}$ remain? Give your answer to the nearest day.

5. Use Euler's method with $h = 0.25$ to estimate $y(1)$ for $\dfrac{dy}{dx} = 2x - y$,
   $y(0) = 0$. Find the exact solution and compute the percentage error.

6. A particle of mass $2\,\mathrm{kg}$ falls from rest under gravity with air resistance equal to
   $0.5v$ (where $v$ is the velocity in $\mathrm{m/s}$). Find the terminal velocity and the time
   taken to reach $90\%$ of terminal velocity. Take $g = 9.8\,\mathrm{m/s}^2$.

7. Solve $\dfrac{dy}{dx} = \dfrac{x^2 + 1}{2y}$ with $y(0) = 2$. Find the value of $y$ when $x = 2$.

8. The temperature of an object follows Newton's law of cooling. It cools from $95\,{}^{\circ}\mathrm{C}$
   to $75\,{}^{\circ}\mathrm{C}$ in $15$ minutes in a room at $20\,{}^{\circ}\mathrm{C}$. How long
   does it take to cool from $95\,{}^{\circ}\mathrm{C}$ to $30\,{}^{\circ}\mathrm{C}$?

---

## Cross-References

- **Integration techniques** used in solving DEs: see [Integration Techniques](./integration-techniques)
- **Complex numbers** and Euler's formula connect to second order ODE solutions: see [Complex Numbers](../vectors-and-matrices/complex-numbers-advanced)
- **Maclaurin series** arise when linearising DE solutions: see [Sequences and Series](./sequences-and-series)
- **Vectors and mechanics** applications of DEs: see [Vectors in Three Dimensions](../vectors-and-matrices/vectors-in-three-dimensions)
