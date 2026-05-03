---
title: "Trigonometry -- Diagnostic Tests"
description: Hard diagnostic tests for trigonometry covering ambiguous sine rule cases, identity pitfalls, periodicity traps, harmonic form, and inverse function domain restrictions.
slug: diag-trigonometry
hide_table_of_contents: true
---

# Trigonometry — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for trigonometry.

### UT-1: Ambiguous Case of the Sine Rule

**Question:**

In triangle $ABC$, $a = 8$, $b = 10$, and $A = 35°$.

**(a)** Find the two possible values of angle $B$, giving your answers to 1 decimal place.

**(b)** For each value of $B$, find the corresponding value of angle $C$ and the length of side $c$.

**(c)** Explain why a student who applies the cosine rule to find $B$ directly (without first finding $c$) would fail to discover the ambiguous case.

[Difficulty: hard. Tests the ambiguous case of the sine rule where two valid triangles exist, and why alternative methods miss the second solution.]

**Solution:**

**(a)** By the sine rule:

$$\frac{\sin B}{b} = \frac{\sin A}{a}$$

$$\sin B = \frac{b \sin A}{a} = \frac{10 \sin 35°}{8} = \frac{10 \times 0.5736}{8} = 0.7170$$

Since $\sin B = 0.7170$ and $B$ is an angle in a triangle ($0° \lt B \lt 180°$), there are two solutions:

$$B_1 = \arcsin(0.7170) = 45.8°$$

$$B_2 = 180° - 45.8° = 134.2°$$

Both are valid: $B_1 + A = 80.8° \lt 180°$ and $B_2 + A = 169.2° \lt 180°$.

**(b)** For $B_1 = 45.8°$:

$$C_1 = 180° - 35° - 45.8° = 99.2°$$

$$c_1 = \frac{a \sin C_1}{\sin A} = \frac{8 \sin 99.2°}{\sin 35°} = \frac{8 \times 0.9863}{0.5736} = 13.76$$

For $B_2 = 134.2°$:

$$C_2 = 180° - 35° - 134.2° = 10.8°$$

$$c_2 = \frac{8 \sin 10.8°}{\sin 35°} = \frac{8 \times 0.1874}{0.5736} = 2.61$$

**(c)** The cosine rule for finding $B$ is $\cos B = \frac{a^2 + c^2 - b^2}{2ac}$. This requires knowing $c$, which is not given. The cosine rule is not directly applicable with the SSA (two sides and a non-included angle) configuration.

More fundamentally, $\cos$ is injective on $(0°, 180°)$ (it is strictly decreasing), so the cosine rule can only ever yield one value for $B$. The ambiguity is an inherent property of the sine rule, because $\sin$ is symmetric about $90°$ on $(0°, 180°)$: $\sin\theta = \sin(180° - \theta)$.

---

### UT-2: Cancelling $\sin\theta$ When $\sin\theta = 0$

**Question:**

**(a)** Solve the equation $\sin\theta = 2\sin\theta\cos\theta$ for $\theta \in [0°, 360°)$.

**(b)** A student's working is shown below. Identify the error, state which solutions are lost, and explain why.

> $\sin\theta = 2\sin\theta\cos\theta$
>
> Dividing both sides by $\sin\theta$:
>
> $1 = 2\cos\theta$
>
> $\cos\theta = \frac{1}{2}$
>
> $\theta = 60°$ or $\theta = 300°$

**(c)** Find all solutions of $\tan 2x = \tan x$ for $x \in [0, \pi)$, taking care not to lose solutions.

[Difficulty: hard. Tests the common error of dividing by a trigonometric expression that may equal zero, which systematically discards valid solutions.]

**Solution:**

**(a)** $\sin\theta = 2\sin\theta\cos\theta$

$$\sin\theta - 2\sin\theta\cos\theta = 0$$

$$\sin\theta(1 - 2\cos\theta) = 0$$

**Case 1:** $\sin\theta = 0 \implies \theta = 0°, 180°, 360°$

**Case 2:** $1 - 2\cos\theta = 0 \implies \cos\theta = \frac{1}{2} \implies \theta = 60°, 300°$

All solutions: $\theta = 0°, 60°, 180°, 300°, 360°$.

**(b)** The error is dividing both sides by $\sin\theta$. This is only valid when $\sin\theta \neq 0$. By dividing, the student implicitly assumes $\sin\theta \neq 0$, which discards the solutions $\theta = 0°, 180°, 360°$. The correct approach is to factorise, not to divide.

**(c)** $\tan 2x = \tan x$ for $x \in [0, \pi)$.

First, establish the domain. Both $\tan x$ and $\tan 2x$ must be defined:
- $\tan x$ undefined at $x = \frac{\pi}{2}$
- $\tan 2x$ undefined at $2x = \frac{\pi}{2}$ and $2x = \frac{3\pi}{2}$, i.e. $x = \frac{\pi}{4}$ and $x = \frac{3\pi}{4}$

So the domain excludes $x = \frac{\pi}{4}, \frac{\pi}{2}, \frac{3\pi}{4}$.

Using the double angle formula $\tan 2x = \frac{2\tan x}{1 - \tan^2 x}$:

$$\frac{2\tan x}{1 - \tan^2 x} = \tan x$$

**Do NOT divide by $\tan x$.** Bring everything to one side:

$$\frac{2\tan x - \tan x(1 - \tan^2 x)}{1 - \tan^2 x} = 0$$

$$\frac{\tan x + \tan^3 x}{1 - \tan^2 x} = 0$$

$$\frac{\tan x(1 + \tan^2 x)}{1 - \tan^2 x} = 0$$

Since $1 + \tan^2 x = \sec^2 x \geq 1$ for all $x$ where $\tan x$ is defined, the numerator is zero when $\tan x = 0$:

$$\tan x = 0 \implies x = 0$$

(The solution $x = \pi$ is excluded by the interval $[0, \pi)$.)

Verify: $\tan 0 = 0$ and $\tan 0 = 0$. Confirmed.

Solution: $x = 0$ only.

---

### UT-3: Solving $\cos(3x) = \frac{1}{2}$ with Full Periodicity

**Question:**

**(a)** Solve $\cos(3x) = \frac{1}{2}$ for $x \in [0, 2\pi)$. A common error produces only 2 or 4 solutions. Find all solutions.

**(b)** A student argues: "$\cos(3x) = \frac{1}{2}$ means $3x = \frac{\pi}{3}$ or $3x = \frac{5\pi}{3}$, giving $x = \frac{\pi}{9}$ or $x = \frac{5\pi}{9}$." Explain the error in this reasoning and state how many solutions the student is missing.

**(c)** The curve $y = \cos(3x)$ intersects the line $y = \frac{1}{2}$ at $N$ distinct points in the interval $[0, 2\pi)$. Find $N$ and the sum of all $x$-coordinates of the intersection points.

[Difficulty: hard. Tests understanding that multiplying the argument of a trigonometric function by a constant changes the period, requiring systematic enumeration of all solutions within the given interval.]

**Solution:**

**(a)** $\cos(3x) = \frac{1}{2}$.

Let $\theta = 3x$. Since $x \in [0, 2\pi)$, we have $\theta \in [0, 6\pi)$.

$\cos\theta = \frac{1}{2}$ gives $\theta = \frac{\pi}{3} + 2n\pi$ or $\theta = \frac{5\pi}{3} + 2n\pi$ for $n \in \mathbb{Z}$.

Systematically listing all $\theta \in [0, 6\pi)$:

| $n$ | $\theta = \frac{\pi}{3} + 2n\pi$ | $\theta = \frac{5\pi}{3} + 2n\pi$ |
|-----|------|------|
| 0 | $\frac{\pi}{3}$ | $\frac{5\pi}{3}$ |
| 1 | $\frac{7\pi}{3}$ | $\frac{11\pi}{3}$ |
| 2 | $\frac{13\pi}{3}$ | $\frac{17\pi}{3}$ |

All six values are in $[0, 6\pi)$ since $\frac{17\pi}{3} = 5\frac{2}{3}\pi \lt 6\pi$.

Dividing by 3:

$$x = \frac{\pi}{9},\quad \frac{5\pi}{9},\quad \frac{7\pi}{9},\quad \frac{11\pi}{9},\quad \frac{13\pi}{9},\quad \frac{17\pi}{9}$$

**(b)** The student correctly identifies the principal solutions for $3x$ but fails to account for the fact that the period of $\cos(3x)$ is $\frac{2\pi}{3}$, not $2\pi$. When $x$ ranges over $[0, 2\pi)$, the argument $3x$ ranges over $[0, 6\pi)$, which spans three full periods of cosine. The student finds solutions from only the first period, missing the four solutions from the second and third periods. The student is missing 4 out of 6 solutions.

**(c)** $N = 6$ (from part (a)).

The sum of all $x$-coordinates:

$$S = \frac{\pi}{9} + \frac{5\pi}{9} + \frac{7\pi}{9} + \frac{11\pi}{9} + \frac{13\pi}{9} + \frac{17\pi}{9} = \frac{60\pi}{9} = \frac{20\pi}{3}$$

---

## Integration Tests

> Tests synthesis of trigonometry with other topics. Requires combining concepts from multiple units.

### IT-1: Related Rates with Trigonometric Functions (with Differentiation)

**Question:**

A ladder of length 5 metres is leaning against a vertical wall. The foot of the ladder is pulled away from the wall horizontally at a constant rate of $0.5$ m/s.

**(a)** Find the rate at which the top of the ladder is sliding down the wall when the foot of the ladder is 3 metres from the wall.

**(b)** Find the angle $\theta$ between the ladder and the ground at the instant when the top of the ladder is sliding down at the same speed as the foot is being pulled away.

**(c)** Show that $\theta$ is always decreasing, and find the rate of change of $\theta$ in rad/s when $\theta = \frac{\pi}{4}$.

[Difficulty: hard. Combines implicit differentiation with trigonometric relationships in a kinematics context.]

**Solution:**

**(a)** Let $x$ be the distance from the foot of the ladder to the wall, and $y$ be the height of the top of the ladder above the ground.

By Pythagoras' theorem: $x^2 + y^2 = 25$.

Differentiating implicitly with respect to $t$:

$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0 \implies x\frac{dx}{dt} + y\frac{dy}{dt} = 0$$

Given $\frac{dx}{dt} = 0.5$. When $x = 3$: $y = \sqrt{25 - 9} = 4$.

$$3(0.5) + 4\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{3}{8} \text{ m/s}$$

The negative sign confirms the top is sliding down.

**(b)** We need $\left\lvert\frac{dy}{dt}\right\rvert = \left\lvert\frac{dx}{dt}\right\rvert = 0.5$.

From $x\frac{dx}{dt} + y\frac{dy}{dt} = 0$: $\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$.

$$\left\lvert-\frac{x}{y} \cdot 0.5\right\rvert = 0.5 \implies \frac{x}{y} = 1 \implies x = y$$

Since $x^2 + y^2 = 25$ and $x = y$: $2x^2 = 25$, so $x = \frac{5}{\sqrt{2}}$.

$\cos\theta = \frac{x}{5} = \frac{1}{\sqrt{2}}$, giving $\theta = \frac{\pi}{4}$.

**(c)** $\cos\theta = \frac{x}{5}$.

Differentiating with respect to $t$:

$$-\sin\theta \cdot \frac{d\theta}{dt} = \frac{1}{5}\frac{dx}{dt}$$

$$\frac{d\theta}{dt} = -\frac{1}{5\sin\theta} \cdot \frac{dx}{dt} = -\frac{0.5}{5\sin\theta} = -\frac{1}{10\sin\theta}$$

Since $\sin\theta \gt 0$ for $0 \lt \theta \lt \pi$, we have $\frac{d\theta}{dt} \lt 0$, confirming $\theta$ is always decreasing.

When $\theta = \frac{\pi}{4}$: $\sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.

$$\frac{d\theta}{dt} = -\frac{1}{10 \cdot \frac{1}{\sqrt{2}}} = -\frac{\sqrt{2}}{10} \text{ rad/s}$$

---

### IT-2: Area Enclosed by a Parametric Trigonometric Curve (with Coordinate Geometry)

**Question:**

A curve is defined parametrically by:

$$x = a(\cos t + \cos 2t), \quad y = a(\sin t + \sin 2t)$$

for $0 \leq t \leq 2\pi$, where $a \gt 0$.

**(a)** Show that the curve is closed.

**(b)** Find the total area enclosed by the curve, giving your answer in terms of $a$.

**(c)** Find the coordinates of all points on the curve where the tangent is horizontal, giving exact answers in terms of $a$.

[Difficulty: hard. Combines parametric differentiation, trigonometric identities, and definite integration for area under a parametric curve.]

**Solution:**

**(a)** At $t = 0$: $x = a(1 + 1) = 2a$, $y = a(0 + 0) = 0$.

At $t = 2\pi$: $x = a(\cos 2\pi + \cos 4\pi) = a(1+1) = 2a$, $y = a(\sin 2\pi + \sin 4\pi) = 0$.

The curve starts and ends at $(2a, 0)$, so it is closed.

**(b)** The area enclosed by a parametric curve $(x(t), y(t))$ traced once anticlockwise is:

$$A = \left\lvert\int_0^{2\pi} y\frac{dx}{dt}\, dt\right\rvert$$

$$\frac{dx}{dt} = a(-\sin t - 2\sin 2t)$$

$$y\frac{dx}{dt} = a(\sin t + \sin 2t) \cdot a(-\sin t - 2\sin 2t) = -a^2(\sin t + \sin 2t)(\sin t + 2\sin 2t)$$

Expanding:

$$= -a^2[\sin^2 t + 3\sin t\sin 2t + 2\sin^2 2t]$$

Integrate each term separately over $[0, 2\pi]$:

$$\int_0^{2\pi}\sin^2 t\, dt = \int_0^{2\pi}\frac{1 - \cos 2t}{2}\, dt = \left[\frac{t}{2} - \frac{\sin 2t}{4}\right]_0^{2\pi} = \pi$$

$$\int_0^{2\pi}\sin t\sin 2t\, dt = \int_0^{2\pi}2\sin^2 t\cos t\, dt = 2\left[\frac{\sin^3 t}{3}\right]_0^{2\pi} = 0$$

$$\int_0^{2\pi}\sin^2 2t\, dt = \int_0^{2\pi}\frac{1 - \cos 4t}{2}\, dt = \left[\frac{t}{2} - \frac{\sin 4t}{8}\right]_0^{2\pi} = \pi$$

Therefore:

$$\int_0^{2\pi} y\frac{dx}{dt}\, dt = -a^2[\pi + 3(0) + 2\pi] = -3\pi a^2$$

$$A = \lvert -3\pi a^2 \rvert = 3\pi a^2$$

**(c)** The tangent is horizontal when $\frac{dy}{dt} = 0$ and $\frac{dx}{dt} \neq 0$.

$$\frac{dy}{dt} = a(\cos t + 2\cos 2t) = 0$$

$$\cos t + 2\cos 2t = 0$$

Using $\cos 2t = 2\cos^2 t - 1$:

$$\cos t + 2(2\cos^2 t - 1) = 0 \implies 4\cos^2 t + \cos t - 2 = 0$$

Let $u = \cos t$:

$$u = \frac{-1 \pm \sqrt{1 + 32}}{8} = \frac{-1 \pm \sqrt{33}}{8}$$

Both roots lie in $[-1, 1]$: $u_1 = \frac{\sqrt{33}-1}{8} \approx 0.593$ and $u_2 = -\frac{\sqrt{33}+1}{8} \approx -0.843$.

Each gives two values of $t$ in $[0, 2\pi)$, producing four horizontal tangent points.

For $u_1 = \frac{\sqrt{33}-1}{8}$: $t = \pm\arccos\left(\frac{\sqrt{33}-1}{8}\right)$. Substituting into $x$ and $y$:

$$x = a\left(\frac{\sqrt{33}-1}{8}\right) + a\left(2\left(\frac{\sqrt{33}-1}{8}\right)^2 - 1\right)$$

$$= a\left(\frac{\sqrt{33}-1}{8} + \frac{34-2\sqrt{33}}{32} - 1\right) = a \cdot \frac{4\sqrt{33}-4+34-2\sqrt{33}-32}{32} = \frac{a(\sqrt{33}-1)}{16}$$

By symmetry, the four horizontal tangent points are:

$$\left(\frac{a(\sqrt{33}-1)}{16},\quad \pm\frac{a}{16}\sqrt{30+2\sqrt{33}}\right)$$

$$\left(\frac{-a(\sqrt{33}+1)}{16},\quad \pm\frac{a}{16}\sqrt{30-2\sqrt{33}}\right)$$

---

### IT-3: Inverse Trigonometric Composition and Domain Restrictions (with Functions)

**Question:**

The function $f$ is defined by $f(x) = \cos x$ on the domain $\left[0, \frac{\pi}{2}\right]$.

**(a)** State the range of $f$ and explain why $f^{-1}$ exists on this domain.

**(b)** Let $g(x) = \arccos x$ (principal inverse cosine, domain $[-1, 1]$, range $[0, \pi]$). Find $g(f(x))$ and $f(g(x))$, stating the domain of each composition.

**(c)** A student claims $f^{-1}(f(\pi)) = \pi$. Explain why this is incorrect.

**(d)** The function $h$ is defined by $h(x) = \arcsin(\cos x)$ for $x \in \mathbb{R}$. Express $h(x)$ as a piecewise function and find all $x$ for which $h(x) = x$.

[Difficulty: hard. Tests the interplay between trigonometric functions and their inverses, requiring careful attention to domain and range restrictions.]

**Solution:**

**(a)** On $\left[0, \frac{\pi}{2}\right]$, $f'(x) = -\sin x \lt 0$ for $0 \lt x \lt \frac{\pi}{2}$, so $f$ is strictly decreasing and therefore injective.

$f(0) = 1$ and $f\!\left(\frac{\pi}{2}\right) = 0$, so the range is $[0, 1]$.

Since $f$ is injective, $f^{-1}$ exists. Its domain is $[0, 1]$ and its range is $\left[0, \frac{\pi}{2}\right]$.

**(b)** $g(f(x)) = \arccos(\cos x)$: defined when $\cos x \in [-1, 1]$, which is always true. Domain: $\left[0, \frac{\pi}{2}\right]$.

For $x \in \left[0, \frac{\pi}{2}\right]$: since $x \in [0, \pi]$ (the range of $\arccos$), we have $\arccos(\cos x) = x$. So $g(f(x)) = x$.

$f(g(x)) = \cos(\arccos x)$: defined when $\arccos x \in \left[0, \frac{\pi}{2}\right]$, i.e. $x \in [0, 1]$.

For $x \in [0, 1]$: $\cos(\arccos x) = x$. So $f(g(x)) = x$.

The domains differ: $g \circ f$ has domain $\left[0, \frac{\pi}{2}\right]$ while $f \circ g$ has domain $[0, 1]$.

**(c)** $\pi$ is not in the domain of $f$ (which is $\left[0, \frac{\pi}{2}\right]$), so $f(\pi)$ is undefined. The expression $f^{-1}(f(\pi))$ is therefore meaningless.

Even if $f$ were extended to $\mathbb{R}$, then $f(\pi) = -1$, but $-1$ is not in the domain of $f^{-1}$ (which is $[0, 1]$, the range of $f$ on its original domain). So $f^{-1}(-1)$ would also be undefined.

**(d)** $h(x) = \arcsin(\cos x)$. Using $\cos x = \sin\!\left(\frac{\pi}{2} - x\right)$:

$$h(x) = \arcsin\!\left(\sin\!\left(\frac{\pi}{2} - x\right)\right)$$

Since $\arcsin(\sin\theta) = \theta$ only when $\theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$:

**When** $-\frac{\pi}{2} \leq \frac{\pi}{2} - x \leq \frac{\pi}{2}$, i.e. $0 \leq x \leq \pi$: $h(x) = \frac{\pi}{2} - x$.

**When** $\pi \leq x \leq 2\pi$: $\cos x = \cos(2\pi - x)$ and $2\pi - x \in [0, \pi]$, so $h(x) = \frac{\pi}{2} - (2\pi - x) = x - \frac{3\pi}{2}$.

By periodicity (period $2\pi$):

$$h(x) = \begin{cases} \frac{\pi}{2} - x + 2n\pi & \text{if } 2n\pi \leq x \leq (2n+1)\pi \\ x - \frac{3\pi}{2} + 2n\pi & \text{if } (2n+1)\pi \leq x \leq (2n+2)\pi \end{cases}$$

for $n \in \mathbb{Z}$.

To find $h(x) = x$: on $[0, \pi]$, $\frac{\pi}{2} - x = x \implies x = \frac{\pi}{4}$.

On $[\pi, 2\pi]$: $x - \frac{3\pi}{2} = x \implies 0 = \frac{3\pi}{2}$, impossible.

By periodicity: $x = \frac{\pi}{4} + 2n\pi$ for $n \in \mathbb{Z}$.
