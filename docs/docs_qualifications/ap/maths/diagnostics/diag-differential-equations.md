---
title: Differential Equations -- Diagnostic Tests
description: Diagnostic tests targeting the hardest AP Calculus differential equation questions including separable equations, Euler's method, slope fields, logistic growth, and qualitative analysis.
slug: diag-differential-equations
hide_table_of_contents: true
---

# Differential Equations — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for differential equations.

### UT-1: Separable Equation with Hidden Singular Solutions

**Question:**

Solve the initial value problem $\dfrac{dy}{dx} = y^{2/3}$ with $y(0) = 0$.

A student separates variables and writes $\displaystyle\int y^{-2/3}\,dy = \int dx$, obtaining $3y^{1/3} = x + C$. Using $y(0) = 0$: $C = 0$, so $y = \left(\dfrac{x}{3}\right)^3$.

(a) Verify that $y(x) = 0$ (the constant zero function) is also a solution to the IVP.
(b) Explain why the existence and uniqueness theorem for first-order ODEs does not apply here.
(c) Find a third solution to the IVP (showing the solution is not unique).

**Solution:**

(a) If $y(x) = 0$ for all $x$, then $\dfrac{dy}{dx} = 0$ and $y^{2/3} = 0$, so the ODE is satisfied. Also $y(0) = 0$. So $y = 0$ is a solution.

(b) The existence and uniqueness theorem (Picard-Lindelof) requires $\dfrac{dy}{dx} = f(x, y)$ where $f$ and $\dfrac{\partial f}{\partial y}$ are continuous near $(0, 0)$. Here $f(x, y) = y^{2/3}$, and $\dfrac{\partial f}{\partial y} = \dfrac{2}{3}y^{-1/3}$, which is **undefined** at $y = 0$. Therefore the theorem does not guarantee uniqueness.

(c) A third solution can be constructed by patching:

$$y(x) = \begin{cases} 0 & \text{if } x \leq a \\ \left(\dfrac{x - a}{3}\right)^3 & \text{if } x > a \end{cases}$$

for any $a \geq 0$. At $x = a$: $y(a) = 0$ from both sides, and $y'(a) = 0$ from both sides (since $\frac{d}{dx}\left[\left(\frac{x-a}{3}\right)^3\right] = \frac{(x-a)^2}{3} = 0$ at $x = a$). So this is a valid $C^1$ solution. For $a = 0$, this gives:

$$y(x) = \begin{cases} 0 & \text{if } x \leq 0 \\ \dfrac{x^3}{27} & \text{if } x > 0 \end{cases}$$

This is a third distinct solution to the IVP.

The misconception: students assume separation of variables always produces the unique solution. When $f(y)$ has a zero, the constant solution $y = 0$ (or the constant at the zero of $f$) may also be a solution, and non-uniqueness can arise.

---

### UT-2: Euler's Method Step Size Error Analysis

**Question:**

Use Euler's method with step size $\Delta x = 0.5$ to approximate $y(2)$ for the initial value problem $\dfrac{dy}{dx} = x + y$, $y(0) = 1$. Then use $\Delta x = 0.25$ and compare. The exact solution is $y = 2e^x - x - 1$.

(a) Compute both approximations.
(b) Compute the exact error for each.
(c) Halving the step size roughly quarters the error for Euler's method. Does your result confirm this? If not, explain why.

**Solution:**

(a) With $\Delta x = 0.5$, starting at $(0, 1)$:

| Step | $x$ | $y$ | $y' = x + y$ | $y_{\text{new}} = y + 0.5 \cdot y'$ |
|------|-----|-----|---------------|--------------------------------------|
| 0    | 0   | 1   | 1             | 1.5                                  |
| 1    | 0.5 | 1.5 | 2.0           | 2.5                                  |
| 2    | 1.0 | 2.5 | 3.5           | 4.25                                 |
| 3    | 1.5 | 4.25| 5.75          | 7.125                                |

Approximation: $y(2) \approx 7.125$.

With $\Delta x = 0.25$, starting at $(0, 1)$:

| Step | $x$   | $y$    | $y' = x + y$ | $y_{\text{new}}$         |
|------|-------|--------|---------------|--------------------------|
| 0    | 0     | 1      | 1             | 1.25                     |
| 1    | 0.25  | 1.25   | 1.5           | 1.625                    |
| 2    | 0.5   | 1.625  | 2.125         | 2.15625                  |
| 3    | 0.75  | 2.15625| 2.90625       | 2.8828125                |
| 4    | 1.0   | 2.8828125 | 3.8828125 | 3.853515625              |
| 5    | 1.25  | 3.853515625 | 5.103515625 | 5.129394531             |
| 6    | 1.5   | 5.129394531 | 6.629394531 | 6.786743164             |
| 7    | 1.75  | 6.786743164 | 8.536743164 | 8.920428955             |

Approximation: $y(2) \approx 8.920$.

(b) Exact: $y(2) = 2e^2 - 2 - 1 = 2e^2 - 3 \approx 10.778$.

Error with $\Delta x = 0.5$: $|10.778 - 7.125| = 3.653$.
Error with $\Delta x = 0.25$: $|10.778 - 8.920| = 1.858$.

(c) Ratio: $3.653 / 1.858 \approx 1.966 \approx 2$ (not 4).

The error should scale as $O(\Delta x)$ for Euler's method (first-order), so halving $\Delta x$ should approximately halve the error, not quarter it. Quartering occurs for second-order methods (like improved Euler or Runge-Kutta). The result approximately confirms this: the error ratio is about 2.

The misconception: students often confuse the error order of different numerical methods, or they incorrectly assume that halving the step size always quarters the error.

---

### UT-3: Logistic Growth with Non-Standard Carrying Capacity

**Question:**

A population $P(t)$ satisfies the logistic differential equation:

$$\frac{dP}{dt} = 0.04P\left(1 - \frac{P}{K}\right)$$

with $P(0) = 100$ and carrying capacity $K$. Suppose the population is growing fastest when $P = 250$.

(a) Find $K$.
(b) Find the particular solution $P(t)$.
(c) At what time $t$ does the population reach $0.9K$?

**Solution:**

(a) The logistic growth rate is maximized when $P = K/2$. Given the maximum growth occurs at $P = 250$:

$$\frac{K}{2} = 250 \implies K = 500$$

(b) The general solution to the logistic equation $\dfrac{dP}{dt} = rP\left(1 - \dfrac{P}{K}\right)$ is:

$$P(t) = \frac{K}{1 + A e^{-rt}}$$

where $A = \dfrac{K - P_0}{P_0}$. With $K = 500$, $P_0 = 100$, $r = 0.04$:

$$A = \frac{500 - 100}{100} = 4$$

$$P(t) = \frac{500}{1 + 4e^{-0.04t}}$$

(c) Set $P(t) = 0.9K = 450$:

$$450 = \frac{500}{1 + 4e^{-0.04t}}$$

$$1 + 4e^{-0.04t} = \frac{500}{450} = \frac{10}{9}$$

$$4e^{-0.04t} = \frac{1}{9}$$

$$e^{-0.04t} = \frac{1}{36}$$

$$-0.04t = \ln\!\left(\frac{1}{36}\right) = -\ln 36$$

$$t = \frac{\ln 36}{0.04} = 25\ln 36 \approx 25(3.584) \approx 89.6$$

The population reaches $90\%$ of carrying capacity at approximately $t \approx 89.6$ time units.

---

## Integration Tests

> Tests synthesis of differential equations with other topics.

### IT-1: Slope Field Synthesis with Definite Integrals (with Integrals)

**Question:**

A slope field for $\dfrac{dy}{dx} = \dfrac{x}{y}$ is drawn in the region $-3 \leq x \leq 3$, $-3 \leq y \leq 3$.

(a) Sketch the solution curve passing through $(1, 2)$.
(b) A student claims that no solution curve can cross the $x$-axis. Justify this claim using the existence and uniqueness theorem.
(c) The solution through $(1, 2)$ is a hyperbola. Find its equation and compute the arc length of this curve from $x = 1$ to $x = 3$.

**Solution:**

(a) The slope field for $\dfrac{dy}{dx} = \dfrac{x}{y}$ has slopes that are positive in quadrants I and III (where $x$ and $y$ have the same sign) and negative in quadrants II and IV. Along $y = x$ the slope is $1$; along $y = -x$ the slope is $-1$. The slopes are very steep near $y = 0$ and nearly horizontal near $x = 0$. The solution through $(1, 2)$ lies in quadrant I and is concave up (since $\dfrac{d^2y}{dx^2} = \dfrac{y - x \cdot y'}{y^2} = \dfrac{y - x^2/y}{y^2} = \dfrac{y^2 - x^2}{y^3}$, which is positive for $y > |x|$).

(b) $f(x, y) = \dfrac{x}{y}$ is undefined when $y = 0$, so the existence and uniqueness theorem does not apply on the $x$-axis. A solution curve approaching $y = 0$ would have $\dfrac{dy}{dx} \to \pm\infty$, meaning the curve becomes vertical. Since the ODE is not defined on $y = 0$, no solution curve can cross it.

(c) Separate variables: $y\,dy = x\,dx$. Integrate: $\dfrac{y^2}{2} = \dfrac{x^2}{2} + C$. Using $(1, 2)$: $2 = \frac{1}{2} + C \implies C = \frac{3}{2}$.

$$y^2 = x^2 + 3 \implies y = \sqrt{x^2 + 3}$$

Arc length from $x = 1$ to $x = 3$:

$$s = \int_1^3 \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx = \int_1^3 \sqrt{1 + \frac{x^2}{x^2 + 3}}\,dx$$

$$= \int_1^3 \sqrt{\frac{2x^2 + 3}{x^2 + 3}}\,dx = \int_1^3 \sqrt{\frac{2(x^2 + 3) - 3}{x^2 + 3}}\,dx$$

$$= \int_1^3 \sqrt{2 - \frac{3}{x^2 + 3}}\,dx$$

This integral does not have an elementary antiderivative. It can be evaluated numerically or expressed in terms of elliptic integrals. The setup itself tests whether students correctly compute $\dfrac{dy}{dx}$ from the implicit solution and set up the arc length integral.

---

### IT-2: Separable DE Leading to Improper Integral (with Limits)

**Question:**

Solve $\dfrac{dy}{dx} = \dfrac{1}{xy}$ with initial condition $y(1) = 0$.

A student separates variables and writes:

$$\int y\,dy = \int \frac{dx}{x} \implies \frac{y^2}{2} = \ln|x| + C$$

Using $y(1) = 0$: $\dfrac{0}{2} = \ln 1 + C \implies C = 0$, giving $y = \pm\sqrt{2\ln|x|}$.

(a) Identify the domain issues with this solution.
(b) Does a solution exist on any interval containing $x = 1$? Justify using the existence and uniqueness theorem.
(c) If the initial condition is changed to $y(1) = 1$, find the solution and determine its maximal interval of existence.

**Solution:**

(a) The "solution" $y = \pm\sqrt{2\ln|x|}$ requires $\ln|x| \geq 0$, i.e., $|x| \geq 1$. But the initial condition is at $x = 1$, where $\ln 1 = 0$ and $y = 0$. The domain does not include any interval around $x = 1$ (it only includes $x = 1$ as a boundary point). This is not a valid solution on any open interval.

(b) $f(x, y) = \dfrac{1}{xy}$ is undefined at $(1, 0)$ (both $x = 0$ and $y = 0$ cause problems, but here specifically $y = 0$ makes $f$ undefined). The existence and uniqueness theorem does not apply. In fact, no solution exists on any interval containing $x = 1$ because the ODE is undefined when $y = 0$.

(c) With $y(1) = 1$: $f(x, y) = \dfrac{1}{xy}$ is continuous near $(1, 1)$, so a unique solution exists.

$$\frac{y^2}{2} = \ln|x| + C \implies \frac{1}{2} = 0 + C \implies C = \frac{1}{2}$$

$$y^2 = 2\ln|x| + 1 = \ln(x^2) + 1$$

$$y = \sqrt{1 + \ln(x^2)}$$

(We take the positive branch since $y(1) = 1 > 0$.)

Domain: $1 + \ln(x^2) > 0 \implies \ln(x^2) > -1 \implies x^2 > e^{-1} \implies |x| > e^{-1/2} \approx 0.607$.

Maximal interval of existence: $(-e^{-1/2}, 0) \cup (0, \infty)$ (excluding $x = 0$ where $f$ is undefined, and the initial condition at $x = 1$ places us on $(0, \infty)$). The maximal interval containing $x = 1$ is $(e^{-1/2}, \infty)$.

---

### IT-3: Qualitative Analysis with Phase Line (with Derivatives)

**Question:**

Consider the autonomous differential equation $\dfrac{dy}{dx} = y(y - 2)^2(y + 1)$.

(a) Find all equilibrium solutions and classify their stability.
(b) A student claims that since $y = 2$ is a repeated root of $y(y-2)^2(y+1) = 0$, the equilibrium at $y = 2$ is "doubly stable." Is this correct?
(c) If $y(0) = 1$, determine $\displaystyle\lim_{t \to \infty} y(t)$ and $\displaystyle\lim_{t \to -\infty} y(t)$.
(d) For what initial values $y(0) = y_0$ does $y(t) \to 2$ as $t \to \infty$?

**Solution:**

(a) Equilibrium solutions: $y = 0$, $y = 2$, $y = -1$.

Let $f(y) = y(y-2)^2(y+1)$. Test the sign of $f(y)$ in each region:

| Region      | Test point | $f(y)$ sign | Behavior         |
|-------------|------------|-------------|------------------|
| $y \lt -1$  | $y = -2$   | $(-2)(16)(-1) > 0$ | Increasing |
| $-1 \lt y \lt 0$ | $y = -0.5$ | $(-0.5)(6.25)(0.5) \lt 0$ | Decreasing |
| $0 \lt y \lt 2$ | $y = 1$ | $(1)(1)(2) > 0$ | Increasing |
| $y > 2$     | $y = 3$   | $(3)(1)(4) > 0$ | Increasing |

Stability classification:
- $y = -1$: $f$ changes from $+$ to $-$, so solutions approach $y = -1$ from above and leave from below. This is **semistable** (stable from above, unstable from below). Actually, since $f > 0$ for $y \lt -1$ and $f < 0$ for $y > -1$ (just above), solutions approach $y = -1$ from both sides... wait. For $y < -1$: $f > 0$ means $y$ increases toward $-1$. For $-1 < y < 0$: $f < 0$ means $y$ decreases toward $-1$. So $y = -1$ is **stable** (asymptotically stable).
- $y = 0$: $f$ changes from $-$ (just below 0, i.e., $-0.5$) to $+$ (just above 0, i.e., $1$). So solutions move away from $y = 0$ from both sides. **Unstable**.
- $y = 2$: $f > 0$ for $0 < y < 2$ and $f > 0$ for $y > 2$. Solutions increase through $y = 2$ from below and continue increasing above. **Semistable** (unstable from below, stable from above). Actually: for $y$ just below 2, $f > 0$, so $y$ increases toward 2 and passes through. For $y$ just above 2, $f > 0$, so $y$ increases away from 2. So $y = 2$ is **semistable** (solutions approach from below but depart from above).

(b) No. The multiplicity of the root affects the nature of the equilibrium, but "doubly stable" is not the correct interpretation. A root of even multiplicity in $f(y)$ at an equilibrium means the equilibrium is a **node** -- semistable, with solutions approaching from one side and departing from the other. The "double root" makes $f'(2) = 0$, which means the linearization test is inconclusive and we must use the sign chart instead.

(c) $y(0) = 1$ is in the region $0 < y < 2$ where $f(y) > 0$, so $y$ increases. Since $y = 2$ is semistable (solutions pass through from below), $y(t) \to 2$ as $t \to \infty$ is possible but solutions actually pass through. Let me reconsider: solutions with $y(0) = 1$ will increase toward $y = 2$ but since $f(2) = 0$, they approach $y = 2$ asymptotically (they never actually reach it in finite time). As $t \to \infty$: $y(t) \to 2$.

As $t \to -\infty$: tracing backward, $y$ decreases from 1 toward the equilibrium below, which is $y = 0$. So $y(t) \to 0$ as $t \to -\infty$.

(d) $y(t) \to 2$ as $t \to \infty$ for any $y_0 \in (0, 2)$. For $y_0 = 2$: $y(t) = 2$ (equilibrium). For $y_0 > 2$: $y(t)$ increases without bound (no equilibrium above $y = 2$). For $y_0 \leq 0$: $y(t)$ does not approach $2$.

Answer: $y_0 \in (0, 2]$.
