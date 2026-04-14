---
title: Differential Equations
date: 2026-04-14
tags:
  - Mathematics
  - AP
categories:
  - Mathematics
slug: differential-equations
---

## Introduction to Differential Equations (CED Unit 7)

A **differential equation** (DE) is an equation that relates a function to one or more of its
derivatives. The **order** of a DE is the highest derivative that appears.

A **solution** to a DE is a function that satisfies the equation. A **general solution** contains
arbitrary constants (typically equal to the order of the DE), while a **particular solution**
satisfies additional initial conditions.

## First-Order Separable Equations

A first-order DE is **separable** if it can be written in the form:

$$
\frac{dy}{dx} = g(x) \cdot h(y)
$$

To solve, separate the variables and integrate:

$$
\int \frac{1}{h(y)}\, dy = \int g(x)\, dx
$$

:::info[Example]

Solve $\displaystyle\frac{dy}{dx} = \frac{x}{y}$ with $y(0) = 2$.

Separate: $y\, dy = x\, dx$.

Integrate: $\displaystyle\int y\, dy = \int x\, dx \implies \frac{y^2}{2} = \frac{x^2}{2} + C$.

Apply the initial condition: $\displaystyle\frac{4}{2} = 0 + C \implies C = 2$.

$$
\frac{y^2}{2} = \frac{x^2}{2} + 2 \implies y^2 = x^2 + 4 \implies y = \sqrt{x^2 + 4}
$$

(We take the positive root since $y(0) = 2 \gt 0$.)

:::

:::info[Example]

Solve $\displaystyle\frac{dy}{dx} = 2xy$ with $y(0) = 3$.

Separate: $\displaystyle\frac{dy}{y} = 2x\, dx$.

Integrate: $\displaystyle\ln|y| = x^2 + C$.

Apply the initial condition: $\ln 3 = 0 + C \implies C = \ln 3$.

$$
\ln|y| = x^2 + \ln 3 \implies |y| = e^{x^2 + \ln 3} = 3e^{x^2} \implies y = 3e^{x^2}
$$

:::

## Exponential Growth and Decay

Many natural phenomena are modeled by the DE:

$$
\frac{dy}{dt} = ky
$$

where $k$ is a constant.

- If $k \gt 0$: exponential growth
- If $k \lt 0$: exponential decay

### Solution

$$
\frac{dy}{y} = k\, dt \implies \ln|y| = kt + C \implies y = y_0 e^{kt}
$$

where $y_0 = y(0)$.

### Half-Life

For exponential decay with half-life $T_{1/2}$:

$$
y(t) = y_0 \cdot 2^{-t/T_{1/2}}
$$

Alternatively, since $\frac{1}{2}y_0 = y_0 e^{kT_{1/2}}$, we get $k = -\frac{\ln 2}{T_{1/2}}$.

:::info[Example]

Carbon-14 has a half-life of approximately 5730 years. A bone fragment contains 25% of its original
carbon-14. How old is the fragment?

$$
0.25 = e^{kt} \implies \ln 0.25 = kt
$$

$$
k = -\frac{\ln 2}{5730} \approx -0.000121
$$

$$
t = \frac{\ln 0.25}{k} = \frac{-1.386}{-0.000121} \approx 11460 \text{ years}
$$

(Equivalently, $25\% = \frac{1}{4} = 2^{-2}$, so $t = 2 \times 5730 = 11460$ years.)

:::

## Logistic Growth (CED Unit 7.8)

The logistic differential equation models growth with a carrying capacity $L$:

$$
\frac{dy}{dt} = ky\!\left(1 - \frac{y}{L}\right)
$$

- When $y$ is small relative to $L$, growth is approximately exponential.
- As $y \to L$, the growth rate $\to 0$.
- The carrying capacity $L$ is a horizontal asymptote.

### Solution

The general solution is:

$$
y(t) = \frac{L}{1 + Ae^{-kt}}
$$

where $A = \frac{L - y_0}{y_0}$ depends on the initial condition.

### Properties of the Logistic Curve

- **Inflection point** at $y = \frac{L}{2}$: the curve changes from concave up to concave down.
- The maximum growth rate occurs at the inflection point.
- $\displaystyle\left.\frac{dy}{dt}\right|_{y = L/2} = \frac{kL}{4}$

:::info[Example]

A population of bacteria grows logistically with carrying capacity 1000. Initially, there are 100
bacteria, and after 1 hour there are 200. Find the population after 3 hours.

$$
y(t) = \frac{1000}{1 + Ae^{-kt}}
$$

At $t = 0$: $100 = \frac{1000}{1 + A} \implies 1 + A = 10 \implies A = 9$.

$$
y(t) = \frac{1000}{1 + 9e^{-kt}}
$$

At $t = 1$:
$200 = \frac{1000}{1 + 9e^{-k}} \implies 1 + 9e^{-k} = 5 \implies e^{-k} = \frac{4}{9} \implies k = \ln\frac{9}{4}$.

$$
y(3) = \frac{1000}{1 + 9\left(\frac{4}{9}\right)^3} = \frac{1000}{1 + 9 \cdot \frac{64}{729}} = \frac{1000}{1 + \frac{576}{729}} = \frac{1000 \cdot 729}{1305} \approx 558.6
$$

So approximately 559 bacteria.

:::

## Slope Fields

A **slope field** (or direction field) is a graphical representation of a first-order DE
$\frac{dy}{dx} = f(x, y)$. At each point $(x, y)$ on a grid, a short line segment is drawn with
slope $f(x, y)$.

### Interpreting Slope Fields

- The general shape of solution curves can be visualized by following the direction of the line
  segments.
- Equilibrium solutions (horizontal lines) occur where $f(x, y) = 0$ for all $x$.
- The slope field is unique to the DE, but multiple solution curves pass through different points.

:::info[Example]

For $\displaystyle\frac{dy}{dx} = x + y$:

- At $(0, 0)$: slope = $0$
- At $(1, 0)$: slope = $1$
- At $(0, 1)$: slope = $1$
- At $(-1, -1)$: slope = $-2$

The slopes increase as you move to the upper-right and decrease as you move to the lower-left.

:::

## Euler's Method (CED Unit 7.6)

Euler's method approximates the solution to $\frac{dy}{dx} = f(x, y)$ with $y(x_0) = y_0$ using:

$$
y_{n+1} = y_n + f(x_n, y_n) \cdot \Delta x
$$

$$
x_{n+1} = x_n + \Delta x
$$

where $\Delta x = h$ is the step size.

### Error Analysis

- Euler's method is **first-order accurate**: the error is proportional to $\Delta x$.
- Smaller step sizes produce more accurate approximations but require more computation.
- The method can diverge if the step size is too large.

:::info[Example]

Use Euler's method with $\Delta x = 0.5$ to approximate $y(2)$ for $\frac{dy}{dx} = x + y$,
$y(1) = 0$.

| Step | $x_n$ | $y_n$ | $f(x_n, y_n) = x_n + y_n$ | $y_{n+1} = y_n + f \cdot \Delta x$ |
| ---- | ----- | ----- | ------------------------- | ---------------------------------- |
| 0    | 1.0   | 0     | 1.0                       | $0 + 1.0(0.5) = 0.5$               |
| 1    | 1.5   | 0.5   | 2.0                       | $0.5 + 2.0(0.5) = 1.5$             |
| 2    | 2.0   | 1.5   | --                        |                                    |

So $y(2) \approx 1.5$.

(The exact solution is $y = e^{x-1} - x - 1$, giving $y(2) = e - 3 \approx -0.282$. The
approximation is poor due to the large step size. With $\Delta x = 0.1$, the result is much closer.)

:::

## Applications

### Newton's Law of Cooling

$$
\frac{dT}{dt} = -k(T - T_s)
$$

where $T$ is the temperature of the object, $T_s$ is the surrounding temperature, and $k \gt 0$.

**Solution:**

$$
T(t) = T_s + (T_0 - T_s)e^{-kt}
$$

:::info[Example]

A cup of coffee at $90^\circ\text{C}$ is placed in a room at $20^\circ\text{C}$. After 10 minutes,
the coffee is $60^\circ\text{C}$. When will the coffee reach $35^\circ\text{C}$?

$$
T(t) = 20 + 70e^{-kt}
$$

At $t = 10$:
$60 = 20 + 70e^{-10k} \implies 40 = 70e^{-10k} \implies e^{-10k} = \frac{4}{7} \implies k = \frac{\ln(7/4)}{10}$.

For $T = 35$:

$$
35 = 20 + 70e^{-kt} \implies 15 = 70e^{-kt} \implies e^{-kt} = \frac{3}{14}
$$

$$
t = \frac{\ln(14/3)}{k} = \frac{10\ln(14/3)}{\ln(7/4)} \approx \frac{10 \times 1.540}{0.5596} \approx 27.5 \text{ minutes}
$$

:::

### Mixing Problems

A tank contains $V$ liters of water with $Q_0$ kg of dissolved substance. Solution with
concentration $c_i$ kg/L flows in at rate $r_i$ L/min, and the mixture flows out at rate $r_o$
L/min.

The DE is:

$$
\frac{dQ}{dt} = r_i c_i - \frac{r_o}{V} Q
$$

:::info[Example]

A tank holds 100 L of pure water. Brine with 0.5 kg/L salt flows in at 5 L/min, and the mixture
flows out at 5 L/min. Find the salt content after 20 minutes.

Since $r_i = r_o = 5$, the volume stays at 100 L.

$$
\frac{dQ}{dt} = 5(0.5) - \frac{5}{100}Q = 2.5 - 0.05Q
$$

This is separable: $\displaystyle\frac{dQ}{2.5 - 0.05Q} = dt$.

$$
\int \frac{dQ}{2.5 - 0.05Q} = \int dt \implies -\frac{1}{0.05}\ln|2.5 - 0.05Q| = t + C
$$

With $Q(0) = 0$: $-20\ln 2.5 = C$.

$$
Q(t) = \frac{2.5}{0.05}\left(1 - e^{-0.05t}\right) = 50(1 - e^{-0.05t})
$$

$$
Q(20) = 50(1 - e^{-1}) \approx 50(1 - 0.368) \approx 31.6 \text{ kg}
$$

:::

## Qualitative Analysis of Differential Equations

### Existence and Uniqueness

If $f(x, y)$ and $\frac{\partial f}{\partial y}$ are continuous on a rectangle containing
$(x_0, y_0)$, then the IVP $\frac{dy}{dx} = f(x, y)$, $y(x_0) = y_0$ has a unique solution in some
interval around $x_0$.

### Equilibrium Solutions

An **equilibrium solution** (or constant solution) satisfies $\frac{dy}{dt} = 0$ for all $t$.

For autonomous equations $\frac{dy}{dt} = f(y)$:

- Find equilibrium solutions by solving $f(y) = 0$.
- Classify stability by checking the sign of $f(y)$ near each equilibrium.

| Sign of $f(y)$ near equilibrium        | Stability           |
| -------------------------------------- | ------------------- |
| $f(y) \gt 0$ below, $f(y) \lt 0$ above | Stable (attractor)  |
| $f(y) \lt 0$ below, $f(y) \gt 0$ above | Unstable (repeller) |
| Same sign on both sides                | Semi-stable         |

## Common Pitfalls

1. **Forgetting the constant of integration.** Always include $+C$ and use the initial condition to
   find it.
2. **Incorrectly separating variables.** All $y$ terms (including $dy$) must be on one side, and all
   $x$ terms (including $dx$) on the other.
3. **Not checking the domain** of the solution. Some solutions may only be valid on a restricted
   interval.
4. **Confusing the logistic growth equation** with exponential growth. The logistic equation has the
   additional factor $\left(1 - \frac{y}{L}\right)$.
5. **Sign errors in Euler's method.** Remember: $y_{n+1} = y_n + f(x_n, y_n) \cdot \Delta x$, not
   minus.
6. **Identifying the wrong carrying capacity.** In $\frac{dy}{dt} = ky(1 - y/L)$, the carrying
   capacity is $L$, not $\frac{1}{L}$ or $kL$.
7. **Forgetting that equilibrium solutions** cannot be found by separation of variables (since you
   would divide by zero).

## Practice Questions

1. Solve $\displaystyle\frac{dy}{dx} = \frac{x^2 + 1}{y}$ with $y(0) = 1$.

2. A population grows according to
   $\displaystyle\frac{dP}{dt} = 0.02P\!\left(1 - \frac{P}{50000}\right)$ with $P(0) = 1000$. Find
   the population after 50 years.

3. Use Euler's method with $\Delta x = 0.25$ and two steps to approximate $y(0.5)$ for
   $\frac{dy}{dx} = x^2 + y$, $y(0) = 1$.

4. A body at $80^\circ\text{C}$ is placed in a room at $25^\circ\text{C}$. After 30 minutes, the
   body is at $50^\circ\text{C}$. When will it reach $30^\circ\text{C}$?

5. For $\displaystyle\frac{dy}{dx} = y(y - 2)(y - 5)$, find all equilibrium solutions and classify
   their stability.

6. Sketch the slope field for $\displaystyle\frac{dy}{dx} = \frac{x}{y}$ and identify the
   equilibrium solutions (if any).

7. A tank initially contains 200 L of water with 10 kg of salt. Pure water flows in at 3 L/min and
   the mixture flows out at 3 L/min. How much salt remains after 60 minutes?

8. Show that the solution to the logistic equation $\displaystyle\frac{dy}{dt} = ky(1 - y/L)$ with
   $y(0) = y_0$ is $\displaystyle y = \frac{L}{1 + \frac{L - y_0}{y_0} e^{-kt}}$.
