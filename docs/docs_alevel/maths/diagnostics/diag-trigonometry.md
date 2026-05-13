---
title: "Trigonometry -- Diagnostic Tests"
description: "Hard diagnostic tests for trigonometry covering ambiguous sine rule cases, identity pitfalls, periodicity traps, harmonic form, and inverse function domain"
slug: diag-trigonometry
hide_table_of_contents: true
---

# Trigonometry — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for trigonometry.

### UT-1: Ambiguous Case of the Sine Rule

**Question:**

In triangle $ABC$$a = 8$$b = 10$And $A = 35°$.

**(a)** Find the two possible values of angle $B$Giving your answers to 1 decimal place.

**(b)** For each value of $B$Find the corresponding value of angle $C$ and the length of side $c$.

**(c)** Explain why a student who applies the cosine rule to find $B$ directly (without first finding $c$) would fail to discover the ambiguous case.

[Difficulty: hard. Tests the ambiguous case of the sine rule where two valid triangles exist, and why alternative methods miss the second solution.]

**Solution:**

**(a)** By the sine rule:

$$\frac◆LB◆\sin B◆RB◆◆LB◆b◆RB◆ = \frac◆LB◆\sin A◆RB◆◆LB◆a◆RB◆$$

$$\sin B = \frac◆LB◆b \sin A◆RB◆◆LB◆a◆RB◆ = \frac◆LB◆10 \sin 35°◆RB◆◆LB◆8◆RB◆ = \frac◆LB◆10 \times 0.5736◆RB◆◆LB◆8◆RB◆ = 0.7170$$

Since $\sin B = 0.7170$ and $B$ is an angle in a triangle ($0° \lt B \lt 180°$), there are two solutions:

$$B_1 = \arcsin(0.7170) = 45.8°$$

$$B_2 = 180° - 45.8° = 134.2°$$

Both are valid: $B_1 + A = 80.8° \lt 180°$ and $B_2 + A = 169.2° \lt 180°$.

**(b)** For $B_1 = 45.8°$:

$$C_1 = 180° - 35° - 45.8° = 99.2°$$

$$c_1 = \frac◆LB◆a \sin C_1◆RB◆◆LB◆\sin A◆RB◆ = \frac◆LB◆8 \sin 99.2°◆RB◆◆LB◆\sin 35°◆RB◆ = \frac◆LB◆8 \times 0.9863◆RB◆◆LB◆0.5736◆RB◆ = 13.76$$

For $B_2 = 134.2°$:

$$C_2 = 180° - 35° - 134.2° = 10.8°$$

$$c_2 = \frac◆LB◆8 \sin 10.8°◆RB◆◆LB◆\sin 35°◆RB◆ = \frac◆LB◆8 \times 0.1874◆RB◆◆LB◆0.5736◆RB◆ = 2.61$$

**(c)** The cosine rule for finding $B$ is $\cos B = \frac{a^2 + c^2 - b^2}{2ac}$. This requires knowing $c$Which is not given. The cosine rule is not directly applicable with the SSA (two sides and a non-included angle) configuration.

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

**(c)** Find all solutions of $\tan 2x = \tan x$ for $x \in [0, \pi)$Taking care not to lose solutions.

[Difficulty: hard. Tests the common error of dividing by a trigonometric expression that may equal zero, which systematically discards valid solutions.]

**Solution:**

**(a)** $\sin\theta = 2\sin\theta\cos\theta$

$$\sin\theta - 2\sin\theta\cos\theta = 0$$

$$\sin\theta(1 - 2\cos\theta) = 0$$

**Case 1:** $\sin\theta = 0 \implies \theta = 0°, 180°, 360°$

**Case 2:** $1 - 2\cos\theta = 0 \implies \cos\theta = \frac{1}{2} \implies \theta = 60°, 300°$

All solutions: $\theta = 0°, 60°, 180°, 300°, 360°$.

**(b)** The error is dividing both sides by $\sin\theta$. This is only valid when $\sin\theta \neq 0$. By dividing, the student implicitly assumes $\sin\theta \neq 0$Which discards the solutions $\theta = 0°, 180°, 360°$. The correct approach is to factorise, not to divide.

**(c)** $\tan 2x = \tan x$ for $x \in [0, \pi)$.

First, establish the domain. Both $\tan x$ and $\tan 2x$ must be defined:
- $\tan x$ undefined at $x = \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$
- $\tan 2x$ undefined at $2x = \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$ and $2x = \frac◆LB◆3\pi◆RB◆◆LB◆2◆RB◆$I.e. $x = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$ and $x = \frac◆LB◆3\pi◆RB◆◆LB◆4◆RB◆$

So the domain excludes $x = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆, \frac◆LB◆3\pi◆RB◆◆LB◆4◆RB◆$.

Using the double angle formula $\tan 2x = \frac◆LB◆2\tan x◆RB◆◆LB◆1 - \tan^2 x◆RB◆$:

$$\frac◆LB◆2\tan x◆RB◆◆LB◆1 - \tan^2 x◆RB◆ = \tan x$$

**Do NOT divide by $\tan x$.** Bring everything to one side:

$$\frac◆LB◆2\tan x - \tan x(1 - \tan^2 x)◆RB◆◆LB◆1 - \tan^2 x◆RB◆ = 0$$

$$\frac◆LB◆\tan x + \tan^3 x◆RB◆◆LB◆1 - \tan^2 x◆RB◆ = 0$$

$$\frac◆LB◆\tan x(1 + \tan^2 x)◆RB◆◆LB◆1 - \tan^2 x◆RB◆ = 0$$

Since $1 + \tan^2 x = \sec^2 x \geq 1$ for all $x$ where $\tan x$ is defined, the numerator is zero when $\tan x = 0$:

$$\tan x = 0 \implies x = 0$$

(The solution $x = \pi$ is excluded by the interval $[0, \pi)$.)

Verify: $\tan 0 = 0$ and $\tan 0 = 0$. Confirmed.

Solution: $x = 0$ only.

---

### UT-3: Solving $\cos(3x) = \frac{1}{2}$ with Full Periodicity

**Question:**

**(a)** Solve $\cos(3x) = \frac{1}{2}$ for $x \in [0, 2\pi)$. A common error produces only 2 or 4 solutions. Find all solutions.

**(b)** A student argues: "$\cos(3x) = \frac{1}{2}$ means $3x = \frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$ or $3x = \frac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆$Giving $x = \frac◆LB◆\pi◆RB◆◆LB◆9◆RB◆$ or $x = \frac◆LB◆5\pi◆RB◆◆LB◆9◆RB◆$." Explain the error in this reasoning and state how many solutions the student is missing.

**(c)** The curve $y = \cos(3x)$ intersects the line $y = \frac{1}{2}$ at $N$ distinct points in the interval $[0, 2\pi)$. Find $N$ and the sum of all $x$-coordinates of the intersection points.

[Difficulty: hard. Tests understanding that multiplying the argument of a trigonometric function by a constant changes the period, requiring systematic enumeration of all solutions within the given interval.]

**Solution:**

**(a)** $\cos(3x) = \frac{1}{2}$.

Let $\theta = 3x$. Since $x \in [0, 2\pi)$We have $\theta \in [0, 6\pi)$.

$\cos\theta = \frac{1}{2}$ gives $\theta = \frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆ + 2n\pi$ or $\theta = \frac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆ + 2n\pi$ for $n \in \mathbb{Z}$.

Systematically listing all $\theta \in [0, 6\pi)$:

| $n$ | $\theta = \frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆ + 2n\pi$ | $\theta = \frac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆ + 2n\pi$ |
|-----|------|------|
| 0 | $\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$ | $\frac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆$ |
| 1 | $\frac◆LB◆7\pi◆RB◆◆LB◆3◆RB◆$ | $\frac◆LB◆11\pi◆RB◆◆LB◆3◆RB◆$ |
| 2 | $\frac◆LB◆13\pi◆RB◆◆LB◆3◆RB◆$ | $\frac◆LB◆17\pi◆RB◆◆LB◆3◆RB◆$ |

All six values are in $[0, 6\pi)$ since $\frac◆LB◆17\pi◆RB◆◆LB◆3◆RB◆ = 5\frac{2}{3}\pi \lt 6\pi$.

Dividing by 3:

$$x = \frac◆LB◆\pi◆RB◆◆LB◆9◆RB◆,\quad \frac◆LB◆5\pi◆RB◆◆LB◆9◆RB◆,\quad \frac◆LB◆7\pi◆RB◆◆LB◆9◆RB◆,\quad \frac◆LB◆11\pi◆RB◆◆LB◆9◆RB◆,\quad \frac◆LB◆13\pi◆RB◆◆LB◆9◆RB◆,\quad \frac◆LB◆17\pi◆RB◆◆LB◆9◆RB◆$$

**(b)** The student correctly identifies the principal solutions for $3x$ but fails to account for the fact that the period of $\cos(3x)$ is $\frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆$Not $2\pi$. When $x$ ranges over $[0, 2\pi)$The argument $3x$ ranges over $[0, 6\pi)$Which spans three full periods of cosine. The student finds solutions from only the first period, missing the four solutions from the second and third periods. The student is missing 4 out of 6 solutions.

**(c)** $N = 6$ (from part (a)).

The sum of all $x$-coordinates:

$$S = \frac◆LB◆\pi◆RB◆◆LB◆9◆RB◆ + \frac◆LB◆5\pi◆RB◆◆LB◆9◆RB◆ + \frac◆LB◆7\pi◆RB◆◆LB◆9◆RB◆ + \frac◆LB◆11\pi◆RB◆◆LB◆9◆RB◆ + \frac◆LB◆13\pi◆RB◆◆LB◆9◆RB◆ + \frac◆LB◆17\pi◆RB◆◆LB◆9◆RB◆ = \frac◆LB◆60\pi◆RB◆◆LB◆9◆RB◆ = \frac◆LB◆20\pi◆RB◆◆LB◆3◆RB◆$$

---

## Integration Tests

> Tests synthesis of trigonometry with other topics. Requires combining concepts from multiple units.

### IT-1: Related Rates with Trigonometric Functions (with Differentiation)

**Question:**

A ladder of length 5 metres is leaning against a vertical wall. The foot of the ladder is pulled away from the wall horizontally at a constant rate of $0.5$ m/s.

**(a)** Find the rate at which the top of the ladder is sliding down the wall when the foot of the ladder is 3 metres from the wall.

**(b)** Find the angle $\theta$ between the ladder and the ground at the instant when the top of the ladder is sliding down at the same speed as the foot is being pulled away.

**(c)** Show that $\theta$ is always decreasing, and find the rate of change of $\theta$ in rad/s when $\theta = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.

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

Since $x^2 + y^2 = 25$ and $x = y$: $2x^2 = 25$So $x = \frac◆LB◆5◆RB◆◆LB◆\sqrt{2}◆RB◆$.

$\cos\theta = \frac{x}{5} = \frac◆LB◆1◆RB◆◆LB◆\sqrt{2}◆RB◆$Giving $\theta = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.

**(c)** $\cos\theta = \frac{x}{5}$.

Differentiating with respect to $t$:

$$-\sin\theta \cdot \frac◆LB◆d\theta◆RB◆◆LB◆dt◆RB◆ = \frac{1}{5}\frac{dx}{dt}$$

$$\frac◆LB◆d\theta◆RB◆◆LB◆dt◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆5\sin\theta◆RB◆ \cdot \frac{dx}{dt} = -\frac◆LB◆0.5◆RB◆◆LB◆5\sin\theta◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆10\sin\theta◆RB◆$$

Since $\sin\theta \gt 0$ for $0 \lt \theta \lt \pi$We have $\frac◆LB◆d\theta◆RB◆◆LB◆dt◆RB◆ \lt 0$Confirming $\theta$ is always decreasing.

When $\theta = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$: $\sin\frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt{2}◆RB◆$.

$$\frac◆LB◆d\theta◆RB◆◆LB◆dt◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆10 \cdot \frac{1}{\sqrt{2}}◆RB◆ = -\frac◆LB◆\sqrt{2}◆RB◆◆LB◆10◆RB◆ \text{ rad/s}$$

---

### IT-2: Area Enclosed by a Parametric Trigonometric Curve (with Coordinate Geometry)

**Question:**

A curve is defined parametrically by:

$$x = a(\cos t + \cos 2t), \quad y = a(\sin t + \sin 2t)$$

For $0 \leq t \leq 2\pi$Where $a \gt 0$.

**(a)** Show that the curve is closed.

**(b)** Find the total area enclosed by the curve, giving your answer in terms of $a$.

**(c)** Find the coordinates of all points on the curve where the tangent is horizontal, giving exact answers in terms of $a$.

[Difficulty: hard. Combines parametric differentiation, trigonometric identities, and definite integration for area under a parametric curve.]

**Solution:**

**(a)** At $t = 0$: $x = a(1 + 1) = 2a$$y = a(0 + 0) = 0$.

At $t = 2\pi$: $x = a(\cos 2\pi + \cos 4\pi) = a(1+1) = 2a$$y = a(\sin 2\pi + \sin 4\pi) = 0$.

The curve starts and ends at $(2a, 0)$So it is closed.

**(b)** The area enclosed by a parametric curve $(x(t), y(t))$ traced once anticlockwise is:

$$A = \left\lvert\int_0^{2\pi} y\frac{dx}{dt}\, dt\right\rvert$$

$$\frac{dx}{dt} = a(-\sin t - 2\sin 2t)$$

$$y\frac{dx}{dt} = a(\sin t + \sin 2t) \cdot a(-\sin t - 2\sin 2t) = -a^2(\sin t + \sin 2t)(\sin t + 2\sin 2t)$$

Expanding:

$$= -a^2[\sin^2 t + 3\sin t\sin 2t + 2\sin^2 2t]$$

Integrate each term separately over $[0, 2\pi]$:

$$\int_0^{2\pi}\sin^2 t\, dt = \int_0^{2\pi}\frac◆LB◆1 - \cos 2t◆RB◆◆LB◆2◆RB◆\, dt = \left[\frac{t}{2} - \frac◆LB◆\sin 2t◆RB◆◆LB◆4◆RB◆\right]_0^{2\pi} = \pi$$

$$\int_0^{2\pi}\sin t\sin 2t\, dt = \int_0^{2\pi}2\sin^2 t\cos t\, dt = 2\left[\frac◆LB◆\sin^3 t◆RB◆◆LB◆3◆RB◆\right]_0^{2\pi} = 0$$

$$\int_0^{2\pi}\sin^2 2t\, dt = \int_0^{2\pi}\frac◆LB◆1 - \cos 4t◆RB◆◆LB◆2◆RB◆\, dt = \left[\frac{t}{2} - \frac◆LB◆\sin 4t◆RB◆◆LB◆8◆RB◆\right]_0^{2\pi} = \pi$$

Therefore:

$$\int_0^{2\pi} y\frac{dx}{dt}\, dt = -a^2[\pi + 3(0) + 2\pi] = -3\pi a^2$$

$$A = \lvert -3\pi a^2 \rvert = 3\pi a^2$$

**(c)** The tangent is horizontal when $\frac{dy}{dt} = 0$ and $\frac{dx}{dt} \neq 0$.

$$\frac{dy}{dt} = a(\cos t + 2\cos 2t) = 0$$

$$\cos t + 2\cos 2t = 0$$

Using $\cos 2t = 2\cos^2 t - 1$:

$$\cos t + 2(2\cos^2 t - 1) = 0 \implies 4\cos^2 t + \cos t - 2 = 0$$

Let $u = \cos t$:

$$u = \frac◆LB◆-1 \pm \sqrt{1 + 32}◆RB◆◆LB◆8◆RB◆ = \frac◆LB◆-1 \pm \sqrt{33}◆RB◆◆LB◆8◆RB◆$$

Both roots lie in $[-1, 1]$: $u_1 = \frac◆LB◆\sqrt{33}-1◆RB◆◆LB◆8◆RB◆ \approx 0.593$ and $u_2 = -\frac◆LB◆\sqrt{33}+1◆RB◆◆LB◆8◆RB◆ \approx -0.843$.

Each gives two values of $t$ in $[0, 2\pi)$Producing four horizontal tangent points.

For $u_1 = \frac◆LB◆\sqrt{33}-1◆RB◆◆LB◆8◆RB◆$: $t = \pm\arccos\left(\frac◆LB◆\sqrt{33}-1◆RB◆◆LB◆8◆RB◆\right)$. Substituting into $x$ and $y$:

$$x = a\left(\frac◆LB◆\sqrt{33}-1◆RB◆◆LB◆8◆RB◆\right) + a\left(2\left(\frac◆LB◆\sqrt{33}-1◆RB◆◆LB◆8◆RB◆\right)^2 - 1\right)$$

$$= a\left(\frac◆LB◆\sqrt{33}-1◆RB◆◆LB◆8◆RB◆ + \frac◆LB◆34-2\sqrt{33}◆RB◆◆LB◆32◆RB◆ - 1\right) = a \cdot \frac◆LB◆4\sqrt{33}-4+34-2\sqrt{33}-32◆RB◆◆LB◆32◆RB◆ = \frac◆LB◆a(\sqrt{33}-1)◆RB◆◆LB◆16◆RB◆$$

By symmetry, the four horizontal tangent points are:

$$\left(\frac◆LB◆a(\sqrt{33}-1)◆RB◆◆LB◆16◆RB◆,\quad \pm\frac{a}{16}\sqrt◆LB◆30+2\sqrt{33}◆RB◆\right)$$

$$\left(\frac◆LB◆-a(\sqrt{33}+1)◆RB◆◆LB◆16◆RB◆,\quad \pm\frac{a}{16}\sqrt◆LB◆30-2\sqrt{33}◆RB◆\right)$$

---

### IT-3: Inverse Trigonometric Composition and Domain Restrictions (with Functions)

**Question:**

The function $f$ is defined by $f(x) = \cos x$ on the domain $\left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$.

**(a)** State the range of $f$ and explain why $f^{-1}$ exists on this domain.

**(b)** Let $g(x) = \arccos x$ (principal inverse cosine, domain $[-1, 1]$Range $[0, \pi]$). Find $g(f(x))$ and $f(g(x))$Stating the domain of each composition.

**(c)** A student claims $f^{-1}(f(\pi)) = \pi$. Explain why this is incorrect.

**(d)** The function $h$ is defined by $h(x) = \arcsin(\cos x)$ for $x \in \mathbb{R}$. Express $h(x)$ as a piecewise function and find all $x$ for which $h(x) = x$.

[Difficulty: hard. Tests the interplay between trigonometric functions and their inverses, requiring careful attention to domain and range restrictions.]

**Solution:**

**(a)** On $\left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$$f'(x) = -\sin x \lt 0$ for $0 \lt x \lt \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$So $f$ is strictly decreasing and therefore injective.

$f(0) = 1$ and $f\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right) = 0$So the range is $[0, 1]$.

Since $f$ is injective, $f^{-1}$ exists. Its domain is $[0, 1]$ and its range is $\left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$.

**(b)** $g(f(x)) = \arccos(\cos x)$: defined when $\cos x \in [-1, 1]$Which is always true. Domain: $\left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$.

For $x \in \left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$: since $x \in [0, \pi]$ (the range of $\arccos$), we have $\arccos(\cos x) = x$. So $g(f(x)) = x$.

$f(g(x)) = \cos(\arccos x)$: defined when $\arccos x \in \left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$I.e. $x \in [0, 1]$.

For $x \in [0, 1]$: $\cos(\arccos x) = x$. So $f(g(x)) = x$.

The domains differ: $g \circ f$ has domain $\left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$ while $f \circ g$ has domain $[0, 1]$.

**(c)** $\pi$ is not in the domain of $f$ (which is $\left[0, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$), so $f(\pi)$ is undefined. The expression $f^{-1}(f(\pi))$ is therefore meaningless.

Even if $f$ were extended to $\mathbb{R}$Then $f(\pi) = -1$But $-1$ is not in the domain of $f^{-1}$ (which is $[0, 1]$The range of $f$ on its original domain). So $f^{-1}(-1)$ would also be undefined.

**(d)** $h(x) = \arcsin(\cos x)$. Using $\cos x = \sin\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - x\right)$:

$$h(x) = \arcsin\!\left(\sin\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - x\right)\right)$$

Since $\arcsin(\sin\theta) = \theta$ only when $\theta \in \left[-\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆, \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right]$:

**When** $-\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ \leq \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - x \leq \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$I.e. $0 \leq x \leq \pi$: $h(x) = \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - x$.

**When** $\pi \leq x \leq 2\pi$: $\cos x = \cos(2\pi - x)$ and $2\pi - x \in [0, \pi]$So $h(x) = \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - (2\pi - x) = x - \frac◆LB◆3\pi◆RB◆◆LB◆2◆RB◆$.

By periodicity (period $2\pi$):

$$h(x) = \begin{cases} \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - x + 2n\pi & \text{if } 2n\pi \leq x \leq (2n+1)\pi \\ x - \frac◆LB◆3\pi◆RB◆◆LB◆2◆RB◆ + 2n\pi & \text{if } (2n+1)\pi \leq x \leq (2n+2)\pi \end{cases}$$

For $n \in \mathbb{Z}$.

To find $h(x) = x$: on $[0, \pi]$$\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - x = x \implies x = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.

On $[\pi, 2\pi]$: $x - \frac◆LB◆3\pi◆RB◆◆LB◆2◆RB◆ = x \implies 0 = \frac◆LB◆3\pi◆RB◆◆LB◆2◆RB◆$Impossible.

By periodicity: $x = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ + 2n\pi$ for $n \in \mathbb{Z}$.
