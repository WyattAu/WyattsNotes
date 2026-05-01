---
title: Differential Equations
description:
  Differential Equations — First-Order Separable Equations; Separability Test;
  Worked Example: Separation with Partial Fractions.
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
derivatives. The **order** of a DE is the highest derivative that appears. A first-order DE involves
only $\frac{dy}{dx}$; a second-order DE involves $\frac{d^2y}{dx^2}$.

A **solution** to a DE is a function that satisfies the equation. A **general solution** contains
arbitrary constants (typically equal to the order of the DE), while a **particular solution**
satisfies additional initial conditions. Together, the DE and its initial conditions form an
**initial value problem** (IVP).

**Why differential equations matter.** Nearly every physical system whose state evolves continuously
in time is modelled by a DE: orbital mechanics, circuit analysis, fluid dynamics, population
biology, heat transfer, and pharmacokinetics all reduce to DEs at their core. The reason is simple:
if a quantity $y$ changes at a rate that depends on the current state, then by definition
$\frac{dy}{dt} = f(t, y)$, and that is a differential equation.

## First-Order Separable Equations

A first-order DE is **separable** if it can be written in the form:

$$
\frac{dy}{dx} = g(x) \cdot h(y)
$$

The strategy is mechanical: move all terms involving $y$ (including $dy$) to one side and all terms
involving $x$ (including $dx$) to the other, then integrate both sides.

$$
\int \frac{1}{h(y)}\, dy = \int g(x)\, dx
$$

This works because $dy$ and $dx$ are related through the chain rule: $\frac{dy}{dx} = g(x)h(y)$
rewrites as $\frac{1}{h(y)}\frac{dy}{dx} = g(x)$, and integrating both sides with respect to $x$
gives $\int \frac{1}{h(y)}\frac{dy}{dx}\,dx = \int g(x)\,dx$, which is exactly the separated form
above.

### Separability Test

Not every first-order DE is separable. The key diagnostic: can you algebraically factor the RHS into
a product of a function of $x$ alone and a function of $y$ alone? For example,
$\frac{dy}{dx} = x + y$ is **not** separable, because $x + y$ cannot be factored into $g(x)h(y)$.

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

### Worked Example: Separation with Partial Fractions

Solve $\displaystyle\frac{dy}{dx} = \frac{y^2 + 1}{x^2 + 1}$ with $y(1) = 1$.

Separate:

$$
\frac{dy}{y^2 + 1} = \frac{dx}{x^2 + 1}
$$

Integrate both sides:

$$
\arctan y = \arctan x + C
$$

Apply $y(1) = 1$: $\arctan 1 = \arctan 1 + C \implies C = 0$.

Therefore $\arctan y = \arctan x$, so $y = x$.

### Worked Example: Trigonometric Separation

Solve $\displaystyle\frac{dy}{dx} = \frac{\cos x}{\sin^2 y}$ with $y(0) = \frac{\pi}{4}$.

Separate: $\sin^2 y\, dy = \cos x\, dx$.

Use the identity $\sin^2 y = \frac{1 - \cos 2y}{2}$:

$$
\int \frac{1 - \cos 2y}{2}\, dy = \int \cos x\, dx
$$

$$
\frac{y}{2} - \frac{\sin 2y}{4} = \sin x + C
$$

Apply $y(0) = \frac{\pi}{4}$: $\frac{\pi}{8} - \frac{1}{4} = 0 + C$, so
$C = \frac{\pi}{8} - \frac{1}{4}$.

The particular solution is:

$$
\frac{y}{2} - \frac{\sin 2y}{4} = \sin x + \frac{\pi}{8} - \frac{1}{4}
$$

This cannot be solved explicitly for $y$ in closed form, but it is a valid implicit solution.

## Exponential Growth and Decay

Many natural phenomena are modelled by the DE:

$$
\frac{dy}{dt} = ky
$$

where $k$ is a constant.

- If $k \gt 0$: exponential growth
- If $k \lt 0$: exponential decay

### Why This DE Is Ubiquitous

The equation $\frac{dy}{dt} = ky$ says: "the rate of change is proportional to the current
quantity." This is the simplest possible feedback loop. If you have a population of bacteria, each
bacterium divides independently, so the total growth rate is proportional to how many bacteria
exist. If you have a radioactive sample, each atom decays independently, so the total decay rate is
proportional to how many atoms remain. This single assumption generates the exponential.

### Solution

$$
\frac{dy}{y} = k\, dt \implies \ln|y| = kt + C \implies y = y_0 e^{kt}
$$

where $y_0 = y(0)$.

**Proof that the solution is unique.** The function $f(t, y) = ky$ is continuous everywhere and
$\frac{\partial f}{\partial y} = k$ is also continuous everywhere. By the existence and uniqueness
theorem, the IVP has exactly one solution on any interval containing $t_0 = 0$.

### Half-Life

For exponential decay with half-life $T_{1/2}$:

$$
y(t) = y_0 \cdot 2^{-t/T_{1/2}}
$$

Alternatively, since $\frac{1}{2}y_0 = y_0 e^{kT_{1/2}}$, we get $k = -\frac{\ln 2}{T_{1/2}}$.

The half-life is a constant: no matter when you start measuring, the time for the quantity to halve
is always $T_{1/2}$. This is a direct consequence of the exponential's scale-invariance.

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
t = \frac{\ln 0.25}{k} = \frac{-1.386}{-0.000121} \approx 11460 \mathrm{ years}
$$

(Equivalently, $25\% = \frac{1}{4} = 2^{-2}$, so $t = 2 \times 5730 = 11460$ years.)

:::

### Doubling Time

For exponential growth with doubling time $T_d$:

$$
y_0 e^{kT_d} = 2y_0 \implies k = \frac{\ln 2}{T_d}
$$

## Logistic Growth (CED Unit 7.8)

The logistic differential equation models growth with a carrying capacity $L$:

$$
\frac{dy}{dt} = ky\!\left(1 - \frac{y}{L}\right)
$$

- When $y$ is small relative to $L$, growth is approximately exponential (the factor
  $1 - \frac{y}{L} \approx 1$).
- As $y \to L$, the growth rate $\to 0$.
- The carrying capacity $L$ is a horizontal asymptote.
- If $y \gt L$, the growth rate is negative, pulling $y$ back toward $L$.

### Solution

The general solution is:

$$
y(t) = \frac{L}{1 + Ae^{-kt}}
$$

where $A = \frac{L - y_0}{y_0}$ depends on the initial condition.

### Derivation

Starting with $\frac{dy}{dt} = ky\!\left(1 - \frac{y}{L}\right)$, separate:

$$
\int \frac{L}{y(L - y)}\, dy = \int k\, dt
$$

Use partial fractions: $\frac{L}{y(L-y)} = \frac{1}{y} + \frac{1}{L - y}$.

$$
\int \frac{1}{y}\, dy + \int \frac{1}{L - y}\, dy = kt + C
$$

$$
\ln|y| - \ln|L - y| = kt + C
$$

$$
\ln\left|\frac{y}{L - y}\right| = kt + C
$$

$$
\frac{y}{L - y} = Ce^{kt}
$$

Solving for $y$: $y = Ce^{kt}(L - y) \implies y(1 + Ce^{kt}) = Ce^{kt}L$, so:

$$
y = \frac{Ce^{kt}L}{1 + Ce^{kt}} = \frac{L}{1 + \frac{1}{C}e^{-kt}} = \frac{L}{1 + Ae^{-kt}}
$$

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
slope $f(x, y)$. Think of it as a vector field for the flow of solutions: each tiny line segment
shows the direction a solution curve must pass through that point.

### Constructing Slope Fields

For any given grid point $(x_i, y_j)$, compute $f(x_i, y_j)$ and draw a short segment with that
slope. The density of the grid determines how accurately the field represents the DE.

### Interpreting Slope Fields

- The general shape of solution curves can be visualized by following the direction of the line
  segments.
- Equilibrium solutions (horizontal lines) occur where $f(x, y) = 0$ for all $x$.
- The slope field is unique to the DE, but multiple solution curves pass through different points.
- Solution curves cannot cross (by the uniqueness theorem).

:::info[Example]

For $\displaystyle\frac{dy}{dx} = x + y$:

- At $(0, 0)$: slope = $0$
- At $(1, 0)$: slope = $1$
- At $(0, 1)$: slope = $1$
- At $(-1, -1)$: slope = $-2$

The slopes increase as you move to the upper-right and decrease as you move to the lower-left.

:::

:::info[Example]

For $\displaystyle\frac{dy}{dx} = \frac{x}{y}$:

When $y \gt 0$: slopes have the same sign as $x$. When $y \lt 0$: slopes have the opposite sign of
$x$. When $y = 0$: slopes are undefined (vertical line segments).

The solution curves are hyperbolas $y^2 - x^2 = C$, consistent with our earlier analytic solution.

:::

## Euler's Method (CED Unit 7.6)

Euler's method approximates the solution to $\frac{dy}{dx} = f(x, y)$ with $y(x_0) = y_0$ using a
simple iterative scheme:

$$
y_{n+1} = y_n + f(x_n, y_n) \cdot \Delta x
$$

$$
x_{n+1} = x_n + \Delta x
$$

where $\Delta x = h$ is the step size.

### Why Euler's Method Works

The definition of the derivative gives us
$\frac{dy}{dx}\big|_{x_n} \approx
\frac{y_{n+1} - y_n}{\Delta x}$, so
$y_{n+1} \approx y_n + f(x_n, y_n) \cdot \Delta x$. This is a first-order Taylor expansion: we are
approximating the curve locally by its tangent line at each step.

### Error Analysis

- Euler's method is **first-order accurate**: the global error is proportional to $\Delta x$.
- **Local truncation error** per step is $O(\Delta x^2)$, but errors accumulate over
  $n = \frac{b-a}{\Delta x}$ steps, giving a global error of $O(\Delta x)$.
- Smaller step sizes produce more accurate approximations but require more computation.
- The method can diverge if the step size is too large, especially for rapidly changing solutions.

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

### Worked Example: More Steps

Use Euler's method with $\Delta x = 0.25$ to approximate $y(1)$ for $\frac{dy}{dx} = x^2 + y$,
$y(0) = 1$.

| Step | $x_n$ | $y_n$ | $f(x_n, y_n)$ | $y_{n+1}$ |
| ---- | ----- | ----- | ------------- | --------- |
| 0    | 0.00  | 1.000 | 1.000         | 1.250     |
| 1    | 0.25  | 1.250 | 1.313         | 1.578     |
| 2    | 0.50  | 1.578 | 1.828         | 2.035     |
| 3    | 0.75  | 2.035 | 2.613         | 2.688     |
| 4    | 1.00  | 2.688 | --            | --        |

So $y(1) \approx 2.688$.

## Applications

### Newton's Law of Cooling

$$
\frac{dT}{dt} = -k(T - T_s)
$$

where $T$ is the temperature of the object, $T_s$ is the surrounding temperature, and $k \gt 0$.

**Intuition:** the rate of cooling is proportional to the temperature difference between the object
and its surroundings. A large temperature difference drives rapid cooling; as the object approaches
room temperature, cooling slows down.

**Solution:**

$$
T(t) = T_s + (T_0 - T_s)e^{-kt}
$$

This is an exponential decay toward $T_s$. The object asymptotically approaches the surrounding
temperature but never quite reaches it.

:::info[Example]

A cup of coffee at $90^\circ\mathrm{C}$ is placed in a room at $20^\circ\mathrm{C}$. After 10 minutes,
the coffee is $60^\circ\mathrm{C}$. When will the coffee reach $35^\circ\mathrm{C}$?

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
t = \frac{\ln(14/3)}{k} = \frac{10\ln(14/3)}{\ln(7/4)} \approx \frac{10 \times 1.540}{0.5596} \approx 27.5 \mathrm{ minutes}
$$

:::

### Mixing Problems

A tank contains $V$ liters of water with $Q_0$ kg of dissolved substance. Solution with
concentration $c_i$ kg/L flows in at rate $r_i$ L/min, and the mixture flows out at rate $r_o$
L/min.

The rate of change of the amount $Q$ of dissolved substance is:

$$
\frac{dQ}{dt} = \underbrace{r_i c_i}_{\mathrm{rate in}} - \underbrace{\frac{r_o}{V} Q}_{\mathrm{rate out}}
$$

The term $\frac{Q}{V}$ is the current concentration in the tank, so $\frac{r_o}{V}Q$ is the rate at
which substance leaves.

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
Q(20) = 50(1 - e^{-1}) \approx 50(1 - 0.368) \approx 31.6 \mathrm{ kg}
$$

:::

### Worked Example: Mixing with Variable Volume

A tank initially contains 200 L of pure water. Brine with 0.3 kg/L salt flows in at 4 L/min, and the
mixture flows out at 3 L/min. Find the salt content after 60 minutes.

Since $r_i \neq r_o$, the volume changes: $V(t) = 200 + (4 - 3)t = 200 + t$.

$$
\frac{dQ}{dt} = 4(0.3) - \frac{3}{200 + t}Q = 1.2 - \frac{3Q}{200 + t}
$$

This is a first-order linear DE:

$$
\frac{dQ}{dt} + \frac{3}{200 + t}Q = 1.2
$$

The integrating factor is:

$$
\mu(t) = e^{\int \frac{3}{200+t}\, dt} = e^{3\ln(200+t)} = (200 + t)^3
$$

$$
\frac{d}{dt}[(200 + t)^3 Q] = 1.2(200 + t)^3
$$

Integrate:

$$
(200 + t)^3 Q = 1.2 \cdot \frac{(200 + t)^4}{4} + C = 0.3(200 + t)^4 + C
$$

With $Q(0) = 0$: $200^3 \cdot 0 = 0.3 \cdot 200^4 + C \implies C = -0.3 \cdot 200^4$.

$$
Q(t) = 0.3(200 + t) - \frac{0.3 \cdot 200^4}{(200 + t)^3}
$$

At $t = 60$:
$Q(60) = 0.3(260) - \frac{0.3 \cdot 200^4}{260^3} = 78 - \frac{0.3 \cdot 1.6 \times 10^9}{1.7576 \times 10^7} \approx 78 - 27.3 = 50.7 \mathrm{ kg}$.

## Qualitative Analysis of Differential Equations

### Existence and Uniqueness

If $f(x, y)$ and $\frac{\partial f}{\partial y}$ are continuous on a rectangle containing
$(x_0, y_0)$, then the IVP $\frac{dy}{dx} = f(x, y)$, $y(x_0) = y_0$ has a unique solution in some
interval around $x_0$.

**Consequences:**

- Solution curves cannot cross (if they did, the IVP at the crossing point would have two
  solutions).
- The conditions are sufficient but not necessary: some IVPs without continuous partial derivatives
  still have unique solutions.

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

### Phase Line Analysis

For an autonomous DE $\frac{dy}{dt} = f(y)$, the **phase line** is a one-dimensional diagram of the
$y$-axis with arrows indicating the direction of flow.

- Draw the $y$-axis and mark the equilibrium points (zeros of $f$).
- In each interval between equilibria, test a point to determine the sign of $f(y)$.
- Draw rightward arrows where $f(y) \gt 0$ (increasing) and leftward arrows where $f(y) \lt 0$
  (decreasing).

:::info[Example]

Analyse $\displaystyle\frac{dy}{dt} = y(y - 2)(y - 5)$.

Equilibria: $y = 0$, $y = 2$, $y = 5$.

| Interval        | Test point | $f(y)$            | Direction  |
| --------------- | ---------- | ----------------- | ---------- |
| $y \lt 0$       | $-1$       | $(-)(-)(-) \lt 0$ | Decreasing |
| $0 \lt y \lt 2$ | $1$        | $(+)(-)(-) \gt 0$ | Increasing |
| $2 \lt y \lt 5$ | $3$        | $(+)(+)(-) \lt 0$ | Decreasing |
| $y \gt 5$       | $6$        | $(+)(+)(+) \gt 0$ | Increasing |

- $y = 0$: arrows point away -- **unstable**
- $y = 2$: arrows point inward -- **stable**
- $y = 5$: arrows point away -- **unstable**

:::

## Bifurcation Analysis (CED Unit 7.9)

A **bifurcation** occurs when a small change in a parameter of the DE causes a qualitative change in
the equilibrium structure.

Consider the one-parameter family:

$$
\frac{dy}{dt} = y^2 + c
$$

- When $c \gt 0$: $f(y) = y^2 + c \gt 0$ for all $y$. No equilibria. All solutions increase
  monotonically.
- When $c = 0$: $f(y) = y^2$. One semi-stable equilibrium at $y = 0$. Solutions with $y \lt 0$
  decrease toward $-\infty$; solutions with $y \gt 0$ increase toward $+\infty$.
- When $c \lt 0$: $f(y) = y^2 + c = 0$ has two equilibria at $y = \pm\sqrt{-c}$. The equilibrium at
  $y = -\sqrt{-c}$ is unstable; the one at $y = \sqrt{-c}$ is stable.

The parameter value $c = 0$ is a **bifurcation point**: as $c$ passes through zero, the system
transitions from having no equilibria to having two.

## Numerical Methods: Beyond Euler

Euler's method is the simplest numerical ODE solver, but it is rarely used in practice because
higher-order methods achieve the same accuracy with far fewer steps.

### Improved Euler's Method (Heun's Method)

1. Compute the "predictor": $y_{n+1}^* = y_n + f(x_n, y_n) \cdot \Delta x$
2. Compute the average slope: $m = \frac{f(x_n, y_n) + f(x_{n+1}, y_{n+1}^*)}{2}$
3. Compute the "corrector": $y_{n+1} = y_n + m \cdot \Delta x$

This is second-order accurate: the global error is $O(\Delta x^2)$.

### Fourth-Order Runge-Kutta (RK4)

The gold standard for general-purpose ODE solving:

$$
k_1 = f(x_n, y_n)
$$

$$
k_2 = f\!\left(x_n + \frac{h}{2},\, y_n + \frac{h}{2}k_1\right)
$$

$$
k_3 = f\!\left(x_n + \frac{h}{2},\, y_n + \frac{h}{2}k_2\right)
$$

$$
k_4 = f(x_n + h,\, y_n + hk_3)
$$

$$
y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)
$$

RK4 is fourth-order accurate: the global error is $O(\Delta x^4)$. For most AP-level problems,
Euler's method with small step size suffices, but understanding that more sophisticated methods
exist provides useful context.

:::info[RK4 Example]

Use RK4 with $h = 0.5$ to approximate $y(1)$ for $\frac{dy}{dx} = x + y$, $y(0) = 1$.

Step 1 ($x_0 = 0$, $y_0 = 1$):

$k_1 = 0 + 1 = 1$

$k_2 = (0.25) + (1 + 0.25) = 1.5$

$k_3 = (0.25) + (1 + 0.75) = 2.0$

$k_4 = (0.5) + (1 + 1.0) = 2.5$

$y_1 = 1 + \frac{0.5}{6}(1 + 3 + 4 + 5) = 1 + \frac{0.5 \times 13}{6} = 1 + 1.0833 = 2.0833$

Step 2 ($x_1 = 0.5$, $y_1 = 2.0833$):

$k_1 = 0.5 + 2.0833 = 2.5833$

$k_2 = (0.75) + (2.0833 + 0.6458) = 3.4791$

$k_3 = (0.75) + (2.0833 + 0.8698) = 3.7031$

$k_4 = (1.0) + (2.0833 + 1.8516) = 4.9349$

$y_2 = 2.0833 + \frac{0.5}{6}(2.5833 + 6.9582 + 7.4062 + 9.8698) = 2.0833 + 2.2263 = 4.3096$

So $y(1) \approx 4.3096$. The exact answer is $y = 2e^x - x - 1$, so $y(1) = 2e - 2 \approx 3.4366$.
Even RK4 with this large step size has significant error, but it is far more accurate than Euler's
method would be.

:::

## Common Pitfalls

1. **Forgetting the constant of integration.** Always include $+C$ and use the initial condition to
   find it. Every separable DE integration produces an arbitrary constant; dropping it means you
   have a family of curves, not the particular solution.

2. **Incorrectly separating variables.** All $y$ terms (including $dy$) must be on one side, and all
   $x$ terms (including $dx$) on the other. If you cannot algebraically factor $f(x, y)$ into
   $g(x)h(y)$, the equation is not separable and you need a different technique.

3. **Not checking the domain** of the solution. Some solutions may only be valid on a restricted
   interval. For example, the solution to $\frac{dy}{dx} = \frac{x}{y}$ is $y^2 = x^2 + C$, but if
   $C \lt 0$, then $y$ is undefined for $|x| \lt \sqrt{-C}$.

4. **Confusing the logistic growth equation** with exponential growth. The logistic equation has the
   additional factor $\left(1 - \frac{y}{L}\right)$ that caps growth at the carrying capacity.

5. **Sign errors in Euler's method.** Remember: $y_{n+1} = y_n + f(x_n, y_n) \cdot \Delta x$, not
   minus. The slope at the current point tells you which direction to step.

6. **Identifying the wrong carrying capacity.** In $\frac{dy}{dt} = ky(1 - y/L)$, the carrying
   capacity is $L$, not $\frac{1}{L}$ or $kL$. Check: setting $\frac{dy}{dt} = 0$ gives $y = 0$ or
   $y = L$.

7. **Forgetting that equilibrium solutions** cannot be found by separation of variables (since you
   would divide by zero). Always check $f(y) = 0$ separately before separating.

8. **Applying Euler's method with too large a step size.** The approximation can diverge
   significantly from the true solution. When in doubt, halve the step size and check convergence.

## Practice Questions

1. Solve $\displaystyle\frac{dy}{dx} = \frac{x^2 + 1}{y}$ with $y(0) = 1$.

2. A population grows according to
   $\displaystyle\frac{dP}{dt} = 0.02P\!\left(1 - \frac{P}{50000}\right)$ with $P(0) = 1000$. Find
   the population after 50 years.

3. Use Euler's method with $\Delta x = 0.25$ and two steps to approximate $y(0.5)$ for
   $\frac{dy}{dx} = x^2 + y$, $y(0) = 1$.

4. A body at $80^\circ\mathrm{C}$ is placed in a room at $25^\circ\mathrm{C}$. After 30 minutes, the
   body is at $50^\circ\mathrm{C}$. When will it reach $30^\circ\mathrm{C}$?

5. For $\displaystyle\frac{dy}{dx} = y(y - 2)(y - 5)$, find all equilibrium solutions and classify
   their stability. Draw the phase line.

6. Sketch the slope field for $\displaystyle\frac{dy}{dx} = \frac{x}{y}$ and identify the
   equilibrium solutions (if any).

7. A tank initially contains 200 L of water with 10 kg of salt. Pure water flows in at 3 L/min and
   the mixture flows out at 3 L/min. How much salt remains after 60 minutes?

8. Show that the solution to the logistic equation $\displaystyle\frac{dy}{dt} = ky(1 - y/L)$ with
   $y(0) = y_0$ is $\displaystyle y = \frac{L}{1 + \frac{L - y_0}{y_0} e^{-kt}}$.

9. Use Euler's method with $\Delta x = 0.2$ and four steps to approximate $y(0.8)$ for
   $\frac{dy}{dx} = xy$, $y(0) = 1$. Compare your result with the exact solution.

10. A tank contains 100 L of brine with 20 kg of salt. Fresh water flows in at 5 L/min and the
    mixture flows out at 5 L/min. How long does it take for the salt content to drop to 5 kg?

11. Analyse the bifurcation diagram for $\frac{dy}{dt} = y^2 - 2y + c$. Find the bifurcation point
    and describe the equilibrium structure on either side.

12. Use the improved Euler method (Heun's method) with $h = 0.5$ and two steps to approximate $y(1)$
    for $\frac{dy}{dx} = x - y$, $y(0) = 0$. Compare with the exact solution.

## Practice Problems

<details>
<summary>Question 1: Separable differential equation</summary>

Solve the differential equation $\frac{dy}{dx} = \frac{xy}{x^2 + 1}$ with the initial condition $y(0) = 2$.

</details>

<details>
<summary>Answer</summary>

Separate variables: $\frac{dy}{y} = \frac{x}{x^2 + 1} \, dx$.

Integrate: $\ln|y| = \frac{1}{2}\ln(x^2 + 1) + C$.

$y = e^C \sqrt{x^2 + 1} = A\sqrt{x^2 + 1}$ where $A = e^C$.

Using $y(0) = 2$: $2 = A\sqrt{1} = A$, so $A = 2$.

$y = 2\sqrt{x^2 + 1}$.

</details>

<details>
<summary>Question 2: Logistic growth model</summary>

A population grows according to the logistic equation $\frac{dP}{dt} = 0.05P\!\left(1 - \frac{P}{1000}\right)$ with $P(0) = 100$. Find (a) the population at $t = 50$, and (b) the time when the population reaches half the carrying capacity.

</details>

<details>
<summary>Answer</summary>

Carrying capacity $K = 1000$, growth rate $r = 0.05$.

Logistic solution: $P(t) = \frac{K}{1 + Ae^{-rt}}$ where $A = \frac{K - P_0}{P_0} = \frac{1000 - 100}{100} = 9$.

$P(t) = \frac{1000}{1 + 9e^{-0.05t}}$.

(a) $P(50) = \frac{1000}{1 + 9e^{-2.5}} = \frac{1000}{1 + 9(0.0821)} = \frac{1000}{1 + 0.739} = \frac{1000}{1.739} = 575$.

(b) Half carrying capacity: $P = 500 = \frac{1000}{1 + 9e^{-0.05t}}$.

$1 + 9e^{-0.05t} = 2$, $9e^{-0.05t} = 1$, $e^{-0.05t} = 1/9$.

$t = \frac{\ln 9}{0.05} = \frac{2.197}{0.05} = 43.9$ time units.

</details>

<details>
<summary>Question 3: Second-order linear DE</summary>

Solve $y'' - 5y' + 6y = 0$ with $y(0) = 1$ and $y'(0) = 0$.

</details>

<details>
<summary>Answer</summary>

Characteristic equation: $r^2 - 5r + 6 = 0$, $(r-2)(r-3) = 0$. $r = 2, 3$.

General solution: $y = C_1 e^{2x} + C_2 e^{3x}$.

$y(0) = C_1 + C_2 = 1$.
$y'(0) = 2C_1 + 3C_2 = 0$.

From the second equation: $C_1 = -3C_2/2$. Substituting: $-3C_2/2 + C_2 = 1$, $-C_2/2 = 1$, $C_2 = -2$, $C_1 = 3$.

$y = 3e^{2x} - 2e^{3x}$.

</details>

<details>
<summary>Question 4: Slope field interpretation</summary>

The differential equation $\frac{dy}{dx} = x - y$ has a slope field. Identify the isocline (line where slopes are zero) and describe the long-term behaviour of solutions.

</details>

<details>
<summary>Answer</summary>

Zero slopes: $x - y = 0$, so $y = x$. This is the isocline where all slopes are zero (horizontal).

For $y \gt x$ (above the line $y = x$): $dy/dx = x - y \lt 0$, so solutions decrease.

For $y \lt x$ (below the line $y = x$): $dy/dx = x - y \gt 0$, so solutions increase.

All solutions approach the line $y = x - 1$ as $x \to \infty$ (this can be verified by solving the DE: the general solution is $y = x - 1 + Ce^{-x}$, which approaches $x - 1$).

The line $y = x - 1$ is a stable equilibrium solution.

</details>

<details>
<summary>Question 5: Euler's method</summary>

Use Euler's method with step size $h = 0.5$ to approximate $y(2)$ for $\frac{dy}{dx} = x + y$, $y(1) = 0$.

</details>

<details>
<summary>Answer</summary>

$x_0 = 1$, $y_0 = 0$, $h = 0.5$. Need 2 steps.

Step 1: $y_1 = y_0 + h \cdot f(x_0, y_0) = 0 + 0.5(1 + 0) = 0.5$ at $x_1 = 1.5$.

Step 2: $y_2 = y_1 + h \cdot f(x_1, y_1) = 0.5 + 0.5(1.5 + 0.5) = 0.5 + 1.0 = 1.5$ at $x_2 = 2.0$.

Euler's method approximation: $y(2) \approx 1.5$.

</details>
