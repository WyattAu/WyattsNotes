---
title: Differential Equations — Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for differential equations covering separable equations with lost solutions, integrating factor sign errors, second order with repeated roots, and Euler method accuracy.
slug: diag-differential-equations
hide_table_of_contents: true
---

# Differential Equations — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for differential equations.

### UT-1: Separable Equations — Lost Equilibrium Solutions

**Question:**

**(a)** Solve $\dfrac{dy}{dx} = y^2 - 1$ with the general solution.

**(b)** A student separates variables and writes $\dfrac{dy}{y^2 - 1} = dx$, integrates, and arrives at the general solution $\dfrac{1}{2}\ln\!\left\lvert\dfrac{y - 1}{y + 1}\right\rvert = x + C$. They claim this covers all solutions. Is this correct?

**(c)** Find the particular solution with $y(0) = 1$.

[Difficulty: hard. Tests the common error of losing equilibrium solutions when dividing by $g(y)$.]

**Solution:**

**(a)** First check equilibrium solutions: $y^2 - 1 = 0 \implies y = 1$ or $y = -1$.

For $y \neq \pm 1$, separate variables using partial fractions:

$$\frac{1}{y^2 - 1} = \frac{1}{(y - 1)(y + 1)} = \frac{1}{2(y - 1)} - \frac{1}{2(y + 1)}$$

$$\int \frac{1}{y^2 - 1}\,dy = \int dx$$

$$\frac{1}{2}\ln\!\left\lvert\frac{y - 1}{y + 1}\right\rvert = x + C$$

$$\left\lvert\frac{y - 1}{y + 1}\right\rvert = e^{2(x + C)} = Ae^{2x}$$

where $A = e^{2C} \gt 0$. Including the equilibrium solutions, the general solution is:

$$y = 1, \quad y = -1, \quad \text{or} \quad \frac{y - 1}{y + 1} = \pm Ae^{2x}$$

**(b)** The student's solution is incomplete because they lost the equilibrium solutions $y = 1$ and $y = -1$. By dividing by $y^2 - 1$, the student implicitly assumed $y^2 - 1 \neq 0$. The equilibrium solutions must be stated separately and are not captured by the formula $\frac{1}{2}\ln\!\left\lvert\frac{y - 1}{y + 1}\right\rvert = x + C$.

**(c)** The particular solution with $y(0) = 1$ is simply the equilibrium solution $y = 1$ for all $x$. This can be verified: $\frac{dy}{dx} = 0$ and $y^2 - 1 = 1 - 1 = 0$. Confirmed.

Note that if the student tries to use their formula: $\frac{1}{2}\ln\!\left\lvert\frac{0}{2}\right\rvert = 0 + C \implies \frac{1}{2}\ln 0$, which is undefined. This shows the equilibrium solution $y = 1$ cannot be obtained from the separated formula.

---

### UT-2: Integrating Factor — Sign Error

**Question:**

Solve $\dfrac{dy}{dx} = 2y + e^{3x}$ with $y(0) = 1$.

**(a)** Find the general solution using an integrating factor.

**(b)** A student rewrites the equation as $\dfrac{dy}{dx} - 2y = e^{3x}$, computes the integrating factor as $\mu = e^{-2x}$, and gets the wrong answer. Identify the error in their working:

Their working: $\dfrac{d}{dx}(ye^{-2x}) = e^{3x} \cdot e^{-2x} = e^x$.

So $ye^{-2x} = e^x + C \implies y = e^{3x} + Ce^{2x}$.

With $y(0) = 1$: $1 = 1 + C \implies C = 0$, so $y = e^{3x}$.

Verify: $\dfrac{dy}{dx} = 3e^{3x}$ and $2y + e^{3x} = 2e^{3x} + e^{3x} = 3e^{3x}$. Confirmed.

**(c)** Was the student actually wrong? If not, explain why.

[Difficulty: hard. Tests the integrating factor method and careful verification of solutions.]

**Solution:**

**(a)** Rewrite in standard form: $\dfrac{dy}{dx} - 2y = e^{3x}$.

Integrating factor: $\mu = e^{\int -2\,dx} = e^{-2x}$.

Multiply through: $e^{-2x}\dfrac{dy}{dx} - 2e^{-2x}y = e^{3x} \cdot e^{-2x} = e^x$.

The left side is $\dfrac{d}{dx}(ye^{-2x})$:

$$\frac{d}{dx}(ye^{-2x}) = e^x$$

$$ye^{-2x} = e^x + C$$

$$y = e^{3x} + Ce^{2x}$$

With $y(0) = 1$: $1 = 1 + C \implies C = 0$.

Particular solution: $y = e^{3x}$.

**(b)** The student's working is actually **correct**. Despite the framing of the question, the student:
1. Correctly identified the standard form.
2. Correctly computed the integrating factor $\mu = e^{-2x}$.
3. Correctly applied the method.
4. Correctly found the particular solution.
5. Correctly verified it.

**(c)** The student was not wrong. This question is designed to test whether the student can recognise that a seemingly suspicious answer is actually correct when verified. The key lesson is to always verify solutions by substitution, rather than relying on intuition about whether an answer "looks right."

---

### UT-3: Second Order — Repeated Root Error

**Question:**

Solve $y'' + 4y' + 4y = 0$ with $y(0) = 1$ and $y'(0) = 0$.

**(a)** Find the general solution.

**(b)** A student writes the general solution as $y = Ae^{-2x} + Be^{-2x} = (A + B)e^{-2x} = Ce^{-2x}$ and then uses the initial conditions to find $C = 1$. Explain why this is wrong.

[Difficulty: hard. Tests the repeated root case of the characteristic equation.]

**Solution:**

**(a)** Characteristic equation: $\lambda^2 + 4\lambda + 4 = 0 \implies (\lambda + 2)^2 = 0$.

Repeated root: $\lambda = -2$ (algebraic multiplicity 2).

The general solution for a repeated root is:

$$y = (A + Bx)e^{-2x}$$

Note the factor of $x$ in the second term. This is essential.

**(b)** The student's error is treating the repeated root $\lambda = -2$ as two independent solutions $e^{-2x}$ and $e^{-2x}$. These are the same function, so they are linearly dependent. The general solution requires two linearly independent solutions.

For a repeated root $\lambda$, the two independent solutions are $e^{\lambda x}$ and $xe^{\lambda x}$. The factor of $x$ is derived from the method of reduction of order or from the Taylor expansion perspective: when the characteristic equation has a repeated root, the second solution involves the derivative of $e^{\lambda x}$ with respect to $\lambda$.

Using the correct general solution with $y(0) = 1$ and $y'(0) = 0$:

$$y = (A + Bx)e^{-2x}, \quad y' = Be^{-2x} + (A + Bx)(-2)e^{-2x} = e^{-2x}(B - 2A - 2Bx)$$

$$y(0) = A = 1$$

$$y'(0) = B - 2A = B - 2 = 0 \implies B = 2$$

$$y = (1 + 2x)e^{-2x}$$

The student's answer $y = e^{-2x}$ does not satisfy $y'(0) = 0$ since $y' = -2e^{-2x}$ and $y'(0) = -2 \neq 0$.

---

## Integration Tests

> Tests synthesis of differential equations with other topics.

### IT-1: Newton's Law of Cooling with Exact Values (with Logarithms)

**Question:**

A body at temperature $95\degree\mathrm{C}$ is placed in a room at constant temperature $20\degree\mathrm{C}$. After $10$ minutes, the body's temperature is $60\degree\mathrm{C}$.

**(a)** Find the temperature of the body as a function of time.

**(b)** Determine how long it takes for the body to cool to $30\degree\mathrm{C}$. Give your answer in exact form.

**(c)** Show that the body temperature approaches $20\degree\mathrm{C}$ as $t \to \infty$.

[Difficulty: hard. Combines separable DEs, exponential modelling, and logarithm manipulation.]

**Solution:**

**(a)** Newton's law of cooling: $\dfrac{dT}{dt} = -k(T - 20)$, where $k \gt 0$.

Separate variables: $\dfrac{dT}{T - 20} = -k\,dt$.

$$\ln(T - 20) = -kt + C$$

$$T - 20 = e^{-kt + C} = Ae^{-kt}$$

$$T(t) = 20 + Ae^{-kt}$$

Initial condition: $T(0) = 95 \implies A = 75$.

$$T(t) = 20 + 75e^{-kt}$$

At $t = 10$: $T(10) = 60 \implies 60 = 20 + 75e^{-10k} \implies 75e^{-10k} = 40 \implies e^{-10k} = \frac{8}{15}$.

$$-10k = \ln\!\left(\frac{8}{15}\right) \implies k = \frac{1}{10}\ln\!\left(\frac{15}{8}\right)$$

$$T(t) = 20 + 75\left(\frac{8}{15}\right)^{t/10}$$

**(b)** Set $T(t) = 30$:

$$30 = 20 + 75\left(\frac{8}{15}\right)^{t/10} \implies 75\left(\frac{8}{15}\right)^{t/10} = 10$$

$$\left(\frac{8}{15}\right)^{t/10} = \frac{2}{15}$$

$$\frac{t}{10}\ln\!\left(\frac{8}{15}\right) = \ln\!\left(\frac{2}{15}\right)$$

$$t = \frac{10\ln\!\left(\frac{2}{15}\right)}{\ln\!\left(\frac{8}{15}\right)} = \frac{10\ln\!\left(\frac{2}{15}\right)}{\ln 8 - \ln 15} = \frac{10\ln\!\left(\frac{2}{15}\right)}{3\ln 2 - \ln 3 - \ln 5}$$

Numerically: $t \approx \frac{10 \times (-2.015)}{0.628} \approx 32.1$ minutes.

**(c)** As $t \to \infty$, since $\frac{8}{15} \lt 1$, we have $\left(\frac{8}{15}\right)^{t/10} \to 0$.

Therefore $T(t) \to 20 + 75 \times 0 = 20\degree\mathrm{C}$.

This confirms that the body temperature asymptotically approaches the ambient temperature, as expected from Newton's law of cooling.

---

### IT-2: Euler's Method — Comparing with Exact Solution (with Number and Algebra)

**Question:**

Use Euler's method with step size $h = 0.5$ to approximate $y(2)$ for the initial value problem:

$$\frac{dy}{dx} = \frac{x}{y}, \quad y(1) = 2$$

**(a)** Complete the Euler's method table.

**(b)** Find the exact solution and compute the exact value of $y(2)$.

**(c)** Compute the percentage error of the Euler approximation.

[Difficulty: hard. Combines numerical methods, separable DEs, and error analysis.]

**Solution:**

**(a)**

| $n$ | $x_n$ | $y_n$ | $f(x_n, y_n) = \dfrac{x_n}{y_n}$ |
|-----|-------|-------|-----------------------------------|
| 0   | 1.0   | 2.000 | 0.500                             |
| 1   | 1.5   | 2.250 | 0.667                             |
| 2   | 2.0   | 2.583 | ---                               |

$$y_1 = 2.000 + 0.5 \times 0.500 = 2.250$$

$$y_2 = 2.250 + 0.5 \times \frac{1.5}{2.250} = 2.250 + 0.5 \times 0.667 = 2.250 + 0.333 = 2.583$$

Euler approximation: $y(2) \approx 2.583$.

**(b)** Separate variables: $y\,dy = x\,dx$.

$$\int y\,dy = \int x\,dx \implies \frac{y^2}{2} = \frac{x^2}{2} + C$$

With $y(1) = 2$: $\frac{4}{2} = \frac{1}{2} + C \implies C = \frac{3}{2}$.

$$y^2 = x^2 + 3 \implies y = \sqrt{x^2 + 3}$$

(Taking the positive root since $y(1) = 2 \gt 0$.)

$$y(2) = \sqrt{4 + 3} = \sqrt{7} \approx 2.646$$

**(c)**

$$\text{Percentage error} = \frac{\lvert 2.583 - \sqrt{7} \rvert}{\sqrt{7}} \times 100\% = \frac{2.646 - 2.583}{2.646} \times 100\% \approx 2.4\%$$
