---
title: Trigonometry
tags:
- maths
slug: trigonometry
description: Comprehensive guide to trigonometry for the International Baccalaureate.
---


## Radian Measure

### Definition

The radian is the standard unit of angular measure. An angle $\theta$ in radians is defined as the
ratio of the arc length $s$ subtended by the angle to the radius $r$:

$$
\theta = \frac{s}{r}
$$

One radian is the angle subtended at the centre of a circle by an arc equal in length to the radius.
Since the circumference of a circle is $2\pi r$, a full revolution is $2\pi$ radians.

### Conversion Between Degrees and Radians

$$
\pi \mathrm{ rad} = 180°
$$

To convert from degrees to radians:

$$
\theta_{\mathrm{rad}} = \theta_{\mathrm{deg}} \times \frac{\pi}{180}
$$

To convert from radians to degrees:

$$
\theta_{\mathrm{deg}} = \theta_{\mathrm{rad}} \times \frac{180}{\pi}
$$

### Arc Length

For a circle of radius $r$ with a central angle $\theta$ (in radians):

$$
s = r\theta
$$

### Sector Area

The area of a sector with central angle $\theta$ (in radians) and radius $r$:

$$
A = \frac{1}{2}r^2\theta
$$

### Worked Example: Arc Length and Sector Area

**Problem:** A sector has radius $5$ cm and central angle $\frac{3\pi}{4}$ radians. Find the arc
length and the area of the sector.

**Solution:**

Arc length:

$$
s = r\theta = 5 \times \frac{3\pi}{4} = \frac{15\pi}{4} \approx 11.78 \mathrm{ cm}
$$

Sector area:

$$
A = \frac{1}{2}r^2\theta = \frac{1}{2}(25)\left(\frac{3\pi}{4}\right) = \frac{75\pi}{8} \approx 29.45 \mathrm{ cm}^2
$$

## Trigonometric Functions

### Right-Angle Definitions

$$
\sin \theta = \frac{\mathrm{opposite}}{\mathrm{hypotenuse}}, \quad
\cos \theta = \frac{\mathrm{adjacent}}{\mathrm{hypotenuse}}, \quad
\tan \theta = \frac{\mathrm{opposite}}{\mathrm{adjacent}} = \frac{\sin \theta}{\cos \theta}
$$

### Reciprocal Trigonometric Functions

$$
\csc\theta = \frac{1}{\sin\theta}, \quad \sec\theta = \frac{1}{\cos\theta}, \quad \cot\theta = \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}
$$

These are defined wherever the denominator is non-zero.

### Graphs of Reciprocal Functions

| Function     | Domain                        | Range                   | Asymptotes                 | $x$-intercepts             |
| ------------ | ----------------------------- | ----------------------- | -------------------------- | -------------------------- |
| $y = \csc x$ | $x \neq n\pi$                 | $y \le -1$ or $y \ge 1$ | $x = n\pi$                 | none                       |
| $y = \sec x$ | $x \neq \frac{\pi}{2} + n\pi$ | $y \le -1$ or $y \ge 1$ | $x = \frac{\pi}{2} + n\pi$ | none                       |
| $y = \cot x$ | $x \neq n\pi$                 | all real $y$            | $x = n\pi$                 | $x = \frac{\pi}{2} + n\pi$ |

## The Unit Circle

The unit circle is a circle of radius $1$ centred at the origin. Any point on the unit circle has
coordinates $(\cos\theta, \sin\theta)$, where $\theta$ is the angle measured anticlockwise from the
positive $x$-axis.

This definition extends trigonometric functions to all real numbers, not just acute angles. The
Pythagorean identity follows directly from the fact that every point on the unit circle satisfies
$x^2 + y^2 = 1$.

### Key Values

| $\theta$     | $0$ | $\frac{\pi}{6}$      | $\frac{\pi}{4}$      | $\frac{\pi}{3}$      | $\frac{\pi}{2}$ | $\pi$ | $\frac{3\pi}{2}$ | $2\pi$ |
| ------------ | --- | -------------------- | -------------------- | -------------------- | --------------- | ----- | ---------------- | ------ |
| $\sin\theta$ | $0$ | $\frac{1}{2}$        | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$             | $0$   | $-1$             | $0$    |
| $\cos\theta$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$        | $0$             | $-1$  | $0$              | $1$    |
| $\tan\theta$ | $0$ | $\frac{1}{\sqrt{3}}$ | $1$                  | $\sqrt{3}$           | undefined       | $0$   | undefined        | $0$    |

### All, Sine, Tan, Cos (ASTC)

The signs of trig functions in each quadrant:

- **A**ll positive in the first quadrant ($0 \lt \theta \lt \frac{\pi}{2}$)
- **S**ine positive in the second quadrant ($\frac{\pi}{2} \lt \theta \lt \pi$)
- **T**angent positive in the third quadrant ($\pi \lt \theta \lt \frac{3\pi}{2}$)
- **C**osine positive in the fourth quadrant ($\frac{3\pi}{2} \lt \theta \lt 2\pi$)

## Graphs of Trigonometric Functions

### $y = \sin x$

- Domain: all real $x$
- Range: $-1 \le y \le 1$
- Period: $2\pi$
- $x$-intercepts at $x = 0, \pi, 2\pi, \ldots$

### $y = \cos x$

- Domain: all real $x$
- Range: $-1 \le y \le 1$
- Period: $2\pi$
- $y$-intercept at $(0, 1)$

### $y = \tan x$

- Domain: all real $x$ except $x = \frac{\pi}{2} + n\pi$
- Range: all real $y$
- Period: $\pi$
- Vertical asymptotes at $x = \frac{\pi}{2} + n\pi$

### Transformations

For $y = a\sin(bx + c) + d$:

- $|a|$ = amplitude
- $\frac{2\pi}{|b|}$ = period
- $c$ = horizontal phase shift (shift left by $\frac{c}{b}$)
- $d$ = vertical shift

:::tip Exam Tip When sketching trig graphs, always label axis intercepts, maximum/minimum points,
and show at least one full period clearly.
:::

<DesmosGraph title="Trigonometric Functions: y = A sin(Bx + C) + D" expressions={["A\sin(Bx+C)+D", "A\cos(Bx+C)+D", "A\tan(Bx+C)+D"]} width={800} height={500} />

Use the sliders to see how changing $a$, $b$, $c$, and $d$ in $y = a\sin(bx + c) + d$ affects the
graph.

## Trigonometric Identities

### Pythagorean Identities

$$
\begin{aligned}
\sin^2\theta + \cos^2\theta &= 1\\
1 + \tan^2\theta &= \sec^2\theta\\
1 + \cot^2\theta &= \csc^2\theta
\end{aligned}
$$

### Proof of $\sin^2\theta + \cos^2\theta = 1$

By the unit circle definition, a point on the unit circle at angle $\theta$ has coordinates
$(\cos\theta, \sin\theta)$. Since every point on the unit circle satisfies $x^2 + y^2 = 1$, we
substitute:

$$
\cos^2\theta + \sin^2\theta = 1
$$

This completes the proof.

### Proof of $1 + \tan^2\theta = \sec^2\theta$

Starting from $\sin^2\theta + \cos^2\theta = 1$, divide both sides by $\cos^2\theta$:

$$
\frac{\sin^2\theta}{\cos^2\theta} + \frac{\cos^2\theta}{\cos^2\theta} = \frac{1}{\cos^2\theta}
$$

$$
\tan^2\theta + 1 = \sec^2\theta
$$

### Proof of $1 + \cot^2\theta = \csc^2\theta$

Starting from $\sin^2\theta + \cos^2\theta = 1$, divide both sides by $\sin^2\theta$:

$$
\frac{\sin^2\theta}{\sin^2\theta} + \frac{\cos^2\theta}{\sin^2\theta} = \frac{1}{\sin^2\theta}
$$

$$
1 + \cot^2\theta = \csc^2\theta
$$

### Compound Angle Identities

$$
\begin{aligned}
\sin(A \pm B) &= \sin A \cos B \pm \cos A \sin B\\
\cos(A \pm B) &= \cos A \cos B \mp \sin A \sin B\\
\tan(A \pm B) &= \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}
\end{aligned}
$$

### Proof of Compound Angle Formulas (Rotation Matrix)

Consider rotating the point $(1, 0)$ by angle $A + B$ anticlockwise. The resulting coordinates are
$(\cos(A + B), \sin(A + B))$.

Equivalently, we can first rotate by $B$, then by $A$. The rotation matrix for angle $\alpha$ is:

$$
R(\alpha) = \begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix}
$$

The composite rotation $R(A)R(B)$ applied to $(1, 0)$:

$$
\begin{pmatrix} \cos A & -\sin A \\ \sin A & \cos A \end{pmatrix}
\begin{pmatrix} \cos B & -\sin B \\ \sin B & \cos B \end{pmatrix}
\begin{pmatrix} 1 \\ 0 \end{pmatrix}
$$

First multiply the matrices:

$$
R(A)R(B) = \begin{pmatrix} \cos A \cos B - \sin A \sin B & -\cos A \sin B - \sin A \cos B \\ \sin A \cos B + \cos A \sin B & -\sin A \sin B + \cos A \cos B \end{pmatrix}
$$

Applying to $(1, 0)$ gives the top-left and bottom-left entries:

$$
\cos(A + B) = \cos A \cos B - \sin A \sin B, \quad \sin(A + B) = \sin A \cos B + \cos A \sin B
$$

The formulas for $A - B$ follow by substituting $-B$ and using $\sin(-B) = -\sin B$,
$\cos(-B) = \cos B$.

### Double Angle Identities

Setting $A = B = \theta$ in the compound angle formulas:

$$
\begin{aligned}
\sin 2\theta &= 2\sin\theta \cos\theta\\[4pt]
\cos 2\theta &= \cos^2\theta - \sin^2\theta\\
\tan 2\theta &= \frac{2\tan\theta}{1 - \tan^2\theta}
\end{aligned}
$$

### Three Forms of $\cos 2\theta$

Starting from $\cos 2\theta = \cos^2\theta - \sin^2\theta$:

- **Form 1:** $\cos 2\theta = \cos^2\theta - \sin^2\theta$
- **Form 2:** Replace $\sin^2\theta = 1 - \cos^2\theta$: $\cos 2\theta = 2\cos^2\theta - 1$
- **Form 3:** Replace $\cos^2\theta = 1 - \sin^2\theta$: $\cos 2\theta = 1 - 2\sin^2\theta$

### Triple Angle Identities

$$
\sin 3\theta = 3\sin\theta - 4\sin^3\theta
$$

**Derivation:** Using $\sin(2\theta + \theta)$:

$$
\sin 3\theta = \sin 2\theta \cos\theta + \cos 2\theta \sin\theta = 2\sin\theta\cos^2\theta + (1 - 2\sin^2\theta)\sin\theta = 2\sin\theta(1 - \sin^2\theta) + \sin\theta - 2\sin^3\theta = 3\sin\theta - 4\sin^3\theta
$$

## Inverse Trigonometric Functions

| Function    | Meaning                          | Domain           | Range                                            |
| ----------- | -------------------------------- | ---------------- | ------------------------------------------------ |
| $\arcsin x$ | "the angle whose sine is $x$"    | $-1 \le x \le 1$ | $-\frac{\pi}{2} \le \arcsin x \le \frac{\pi}{2}$ |
| $\arccos x$ | "the angle whose cosine is $x$"  | $-1 \le x \le 1$ | $0 \le \arccos x \le \pi$                        |
| $\arctan x$ | "the angle whose tangent is $x$" | all real $x$     | $-\frac{\pi}{2} \lt \arctan x \lt \frac{\pi}{2}$ |

### Properties

$$
\arcsin(-x) = -\arcsin(x), \quad \arctan(-x) = -\arctan(x), \quad \arccos(-x) = \pi - \arccos(x)
$$

### Composition Identities

For $x$ in the appropriate domain:

$$
\begin{aligned}
\sin(\arcsin x) &= x, \quad \mathrm{for } -1 \le x \le 1\\
\cos(\arccos x) &= x, \quad \mathrm{for } -1 \le x \le 1\\
\tan(\arctan x) &= x, \quad \mathrm{for all real } x
\end{aligned}
$$

The reverse compositions are only true on restricted domains:

$$
\begin{aligned}
\arcsin(\sin x) &= x, \quad \mathrm{for } -\frac{\pi}{2} \le x \le \frac{\pi}{2}\\
\arccos(\cos x) &= x, \quad \mathrm{for } 0 \le x \le \pi\\
\arctan(\tan x) &= x, \quad \mathrm{for } -\frac{\pi}{2} \lt x \lt \frac{\pi}{2}
\end{aligned}
$$

### Worked Example: Inverse Trig Evaluation

**Problem:** Evaluate $\sin\left(\arccos\frac{1}{3}\right)$ without a calculator.

**Solution:**

Let $\theta = \arccos\frac{1}{3}$, so $\cos\theta = \frac{1}{3}$ with $\theta \in [0, \pi]$. Since
$\cos\theta \gt 0$, we have $\theta$ in the first quadrant, so $\sin\theta \ge 0$:

$$
\sin\theta = \sqrt{1 - \frac{1}{9}} = \frac{2\sqrt{2}}{3}
$$

:::tip Exam Tip Be careful with the range of inverse trig functions. Your calculator only gives the
principal value -- you may need to find other solutions using the periodic properties or the ASTC
rule.
:::

## Sine and Cosine Rules

### Sine Rule

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
$$

Used when you know:

- Two angles and one side (AAS), or
- Two sides and a non-included angle (SSA -- see ambiguous case below)

### Cosine Rule

$$
c^2 = a^2 + b^2 - 2ab\cos C
$$

Or equivalently:

$$
\cos C = \frac{a^2 + b^2 - c^2}{2ab}
$$

Used when you know:

- Two sides and the included angle (SAS), or
- All three sides (SSS)

### Area of a Triangle

$$
\mathrm{Area} = \frac{1}{2}ab\sin C
$$

### Worked Example: Sine Rule

**Problem:** In triangle $ABC$, $a = 8$ cm, $A = 45^\circ$, $B = 30^\circ$. Find $b$.

**Solution:**

$$
b = \frac{8\sin 30°}{\sin 45°} = \frac{4}{\frac{\sqrt{2}}{2}} = 4\sqrt{2} \approx 5.66 \mathrm{ cm}
$$

### Worked Example: Cosine Rule

**Problem:** Find the angle $C$ in a triangle with sides $a = 5$, $b = 7$, $c = 8$.

**Solution:**

$$
\cos C = \frac{5^2 + 7^2 - 8^2}{2 \times 5 \times 7} = \frac{25 + 49 - 64}{70} = \frac{10}{70} = \frac{1}{7}
$$

$$
C = \arccos\left(\frac{1}{7}\right) \approx 81.8°
$$

## Ambiguous Case of the Sine Rule

When using the sine rule with SSA (two sides and a non-included angle), there may be **two possible
triangles**, **one triangle**, or **no triangle**.

### Condition for Ambiguity

Given sides $a$ and $b$ and angle $A$ (where $a$ is opposite $A$):

- **No triangle** if $a \lt b\sin A$
- **One right-angled triangle** if $a = b\sin A$
- **Two triangles** if $b\sin A \lt a \lt b$ and $A \lt 90^\circ$
- **One triangle** if $a \ge b$ or $A \ge 90^\circ$

### Why Two Triangles?

When $\sin B = k$ where $0 \lt k \lt 1$, there are two possible values for $B$:

$$
B_1 = \arcsin(k) \quad \mathrm{and} \quad B_2 = 180° - \arcsin(k)
$$

Both may be valid since $B_1 + B_2 = 180^\circ$ (so if $A + B_1 \lt 180^\circ$, check whether
$A + B_2 \lt 180^\circ$ as well).

### Worked Example: Ambiguous Case

**Problem:** In triangle $ABC$, $a = 7$, $b = 10$, $A = 40^\circ$. Find all possible triangles.

**Solution:**

Using the sine rule:

$$
\frac{\sin B}{10} = \frac{\sin 40°}{7} \implies \sin B = \frac{10\sin 40°}{7} \approx 0.919
$$

Since $0 \lt 0.919 \lt 1$, there are two possible values for $B$:

$$
B_1 = \arcsin(0.919) \approx 66.8°, \quad B_2 = 180° - 66.8° = 113.2°
$$

Check both: $A + B_1 = 106.8° \lt 180^\circ$ and $A + B_2 = 153.2° \lt 180^\circ$. Both are valid.

**Triangle 1:** $B = 66.8^\circ$, $C = 73.2^\circ$,
$c_1 = \frac{7\sin 73.2°}{\sin 40°} \approx 10.4$

**Triangle 2:** $B = 113.2^\circ$, $C = 26.8^\circ$,
$c_2 = \frac{7\sin 26.8°}{\sin 40°} \approx 4.89$

## Non-Right-Angled Triangle Problems

### Strategy

1. Draw and label a clear diagram.
2. Identify which rule(s) to apply based on the given information.
3. Use the sine rule for AAS or SSA, the cosine rule for SAS or SSS.
4. For area problems, use $\frac{1}{2}ab\sin C$ or split into right-angled triangles.
5. For bearing problems, remember that bearings are measured clockwise from north.

### Worked Example: Multi-Step Triangle Problem

**Problem:** In triangle $ABC$, $a = 12$, $b = 8$, $A = 65^\circ$. Find the area of the triangle.

**Solution:**

Find angle $B$ using the sine rule:

$$
\frac{\sin B}{8} = \frac{\sin 65°}{12} \implies \sin B = \frac{2\sin 65°}{3} \approx 0.604
$$

Since $b \lt a$, there is only one solution: $B \approx 37.2^\circ$, so $C = 77.8^\circ$.

$$
\mathrm{Area} = \frac{1}{2}(12)(8)\sin 77.8° \approx 47.0 \mathrm{ square units}
$$

### Worked Example: Bearing Problem

**Problem:** A ship sails from port $A$ on a bearing of $050^\circ$ for $15$ km to point $B$, then
on a bearing of $110^\circ$ for $20$ km to point $C$. Find the distance and bearing from $C$ back to
$A$.

**Solution:**

The angle at $B$ is the change in bearing: $110° - 050° = 60^\circ$. The interior angle at $B$ is
$180° - 60° = 120^\circ$.

Using the cosine rule:

$$
AC = \sqrt{15^2 + 20^2 - 2(15)(20)\cos 120°} = \sqrt{225 + 400 + 300} = \sqrt{925} = 5\sqrt{37} \approx 30.4 \mathrm{ km}
$$

To find the bearing, find angle $C$:

$$
\frac{\sin C}{15} = \frac{\sin 120°}{5\sqrt{37}} \implies C \approx 25.3°
$$

The bearing from $C$ to $A$ is $360° - 110° - 25.3° \approx 225^\circ$.

## Solving Trigonometric Equations

### General Solutions

$$
\begin{aligned}
\sin\theta &= k \implies \theta = \arcsin(k) + 2n\pi \mathrm{ or } \theta = \pi - \arcsin(k) + 2n\pi\\
\cos\theta &= k \implies \theta = \arccos(k) + 2n\pi \mathrm{ or } \theta = -\arccos(k) + 2n\pi\\
\tan\theta &= k \implies \theta = \arctan(k) + n\pi
\end{aligned}
$$

where $n \in \mathbb{Z}$.

### Worked Example: Basic Trig Equation

**Problem:** Solve $\sin 2x = \frac{1}{2}$ for $x \in [0, 2\pi]$.

**Solution:**

Let $u = 2x$, so $u \in [0, 4\pi]$.

$$
\sin u = \frac{1}{2} \implies u = \frac{\pi}{6}, \frac{5\pi}{6}, 2\pi + \frac{\pi}{6}, 2\pi + \frac{5\pi}{6}
$$

$$
u = \frac{\pi}{6}, \frac{5\pi}{6}, \frac{13\pi}{6}, \frac{17\pi}{6}
$$

$$
x = \frac{u}{2} = \frac{\pi}{12}, \frac{5\pi}{12}, \frac{13\pi}{12}, \frac{17\pi}{12}
$$

### Worked Example: Factoring

**Problem:** Solve $2\cos^2 x - \cos x - 1 = 0$ for $x \in [0, 2\pi]$.

**Solution:**

Let $u = \cos x$:

$$
2u^2 - u - 1 = 0 \implies (2u + 1)(u - 1) = 0
$$

$$
u = -\frac{1}{2} \mathrm{ or } u = 1
$$

- $\cos x = -\frac{1}{2} \implies x = \frac{2\pi}{3}, \frac{4\pi}{3}$
- $\cos x = 1 \implies x = 0$

So $x = 0, \frac{2\pi}{3}, \frac{4\pi}{3}$.

### Worked Example: Using Identities

**Problem:** Solve $\sin^2 x = 3\cos^2 x$ for $x \in [0, 2\pi]$.

**Solution:**

Replace $\cos^2 x$ with $1 - \sin^2 x$:

$$
\sin^2 x = 3(1 - \sin^2 x) \implies \sin^2 x = 3 - 3\sin^2 x \implies 4\sin^2 x = 3
$$

$$
\sin^2 x = \frac{3}{4} \implies \sin x = \pm\frac{\sqrt{3}}{2}
$$

Since $\sin x \gt 0$ in quadrants I and II, and $\sin x \lt 0$ in quadrants III and IV:

$$
x = \frac{\pi}{3}, \frac{2\pi}{3}, \frac{4\pi}{3}, \frac{5\pi}{3}
$$

### Worked Example: Equations Involving $\tan$

**Problem:** Solve $\tan 2x = 1$ for $x \in [0, \pi]$.

**Solution:**

Since $\tan$ has period $\pi$, $\tan 2x = 1$ gives $2x = \frac{\pi}{4} + n\pi$ for
$n \in \mathbb{Z}$.

$$
x = \frac{\pi}{8} + \frac{n\pi}{2}
$$

For $x \in [0, \pi]$:

- $n = 0$: $x = \frac{\pi}{8}$
- $n = 1$: $x = \frac{\pi}{8} + \frac{\pi}{2} = \frac{5\pi}{8}$
- $n = 2$: $x = \frac{\pi}{8} + \pi = \frac{9\pi}{8} \gt \pi$ (outside range)

So $x = \frac{\pi}{8}, \frac{5\pi}{8}$.

### Harmonic Form: $R\sin(x \pm \alpha)$ and $R\cos(x \pm \alpha)$

Expressions of the form $a\sin x + b\cos x$ can be written as a single trigonometric function:

$$
a\sin x + b\cos x = R\sin(x + \alpha)
$$

where $R = \sqrt{a^2 + b^2}$ and $\tan\alpha = \frac{b}{a}$.

This is useful for finding maximum/minimum values and for solving equations.

### Worked Example: Harmonic Form

**Problem:** Express $3\sin x + 4\cos x$ in the form $R\sin(x + \alpha)$, and hence solve
$3\sin x + 4\cos x = 5$ for $x \in [0, 2\pi]$.

**Solution:**

$$
R = \sqrt{3^2 + 4^2} = 5
$$

$$
\tan\alpha = \frac{4}{3} \implies \alpha = \arctan\frac{4}{3} \approx 0.927 \mathrm{ rad}
$$

So $3\sin x + 4\cos x = 5\sin(x + 0.927)$.

Solving $5\sin(x + 0.927) = 5$:

$$
\sin(x + 0.927) = 1 \implies x + 0.927 = \frac{\pi}{2} + 2n\pi
$$

$$
x = \frac{\pi}{2} - 0.927 + 2n\pi \approx 0.644 + 2n\pi
$$

For $x \in [0, 2\pi]$: $x \approx 0.644$ rad (the next value $0.644 + 2\pi$ exceeds $2\pi$).

## 3D Trigonometry

3D trigonometry involves applying trigonometric ratios in three-dimensional problems. The key is to
identify right-angled triangles within the 3D shape.

### Strategy

1. Draw a clear diagram of the 3D shape.
2. Identify the relevant 2D triangles (often by drawing auxiliary lines).
3. Label known sides and angles.
4. Apply Pythagoras' theorem, sine rule, cosine rule, or basic trig ratios.

### Worked Example: 3D Problem

**Problem:** A pyramid has a square base of side $6$ cm and vertical height $4$ cm. Find the angle
between a sloping edge and the base.

**Solution:**

The distance from the centre of the base to a vertex is $\frac{6\sqrt{2}}{2} = 3\sqrt{2}$ cm.

$$
\theta = \arctan\left(\frac{4}{3\sqrt{2}}\right) = \arctan\left(\frac{2\sqrt{2}}{3}\right) \approx 43.3°
$$

## Trigonometric Proof Strategies

### General Approach

In IB exams, trigonometric proofs typically ask you to show that one expression equals another. The
standard approach is:

1. **Start with one side** -- usually the more complex side (LHS).
2. **Apply known identities** to transform it step by step toward the other side.
3. **Never assume what you are trying to prove** -- work forward from a known truth.

### Useful Techniques

- **Factor:** Look for common factors, e.g., $\sin x + \sin x\cos x = \sin x(1 + \cos x)$.
- **Use $\sin^2 + \cos^2 = 1$:** Convert everything to sines or everything to cosines.
- **Convert to $\sin$ and $\cos$:** When $\tan$, $\sec$, $\csc$, or $\cot$ appear, express them in
  terms of $\sin$ and $\cos$.
- **Look for compound angle structure:** Recognise when an expression matches $\sin(A \pm B)$ or
  $\cos(A \pm B)$.
- **Common denominator:** When fractions appear, combine them over a single denominator.

### Worked Example: Proof by Multiplication

**Problem:** Prove that $\frac{\sin x}{1 + \cos x} = \frac{1 - \cos x}{\sin x}$.

**Proof:**

Multiply numerator and denominator by $1 - \cos x$:

$$
\frac{\sin x(1 - \cos x)}{(1 + \cos x)(1 - \cos x)} = \frac{\sin x(1 - \cos x)}{1 - \cos^2 x} = \frac{\sin x(1 - \cos x)}{\sin^2 x} = \frac{1 - \cos x}{\sin x} = \mathrm{RHS}
$$

### Worked Example: Proof Using Identities

**Problem:** Prove that $\frac{1 - \cos 2x}{\sin 2x} = \tan x$.

**Proof:**

Using $\cos 2x = 1 - 2\sin^2 x$ and $\sin 2x = 2\sin x\cos x$:

$$
\frac{1 - (1 - 2\sin^2 x)}{2\sin x\cos x} = \frac{2\sin^2 x}{2\sin x\cos x} = \frac{\sin x}{\cos x} = \tan x = \mathrm{RHS}
$$

### Worked Example: Proof with Compound Angles

**Problem:** Prove that $\frac{\sin(A + B)}{\cos A \cos B} = \tan A + \tan B$.

**Proof:**

Expand $\sin(A + B)$ and split the fraction:

$$
\frac{\sin A \cos B + \cos A \sin B}{\cos A \cos B} = \frac{\sin A}{\cos A} + \frac{\sin B}{\cos B} = \tan A + \tan B = \mathrm{RHS}
$$

## Common Pitfalls

### Forgetting to Check All Solutions

When solving $\sin\theta = k$ or $\cos\theta = k$, there are always (at least) two solutions per
period. A common mistake is to find $\arcsin(k)$ but forget $\pi - \arcsin(k)$.

### Mixing Up Degrees and Radians

Ensure your calculator is in the correct mode. If an angle is given as $\frac{\pi}{3}$, it is in
radians; if given as $60^\circ$, it is in degrees. Forgetting to convert is one of the most frequent
errors.

### Wrong Sign in Compound Angle Formulas

For $\cos(A - B)$:

$$
\cos(A - B) = \cos A \cos B + \sin A \sin B
$$

The $\sin A \sin B$ term is **positive** (the $\mp$ from the $\pm$ formula flips). Students often
incorrectly write a minus sign here.

### Ambiguous Case of the Sine Rule

When using the sine rule with SSA data, always check whether two triangles are possible. If
$\sin B = k$ with $0 \lt k \lt 1$ and $B$ is acute, then $180° - B$ may also be valid.

### Domain of Inverse Functions

$\arcsin x$ and $\arctan x$ return values in $[-\frac{\pi}{2}, \frac{\pi}{2}]$, while $\arccos x$
returns values in $[0, \pi]$. If the actual angle is in a different quadrant, you must adjust using
ASTC.

## Problem Set

<details>
<summary>Problem 1: Radian Measure</summary>

**Problem:** A circle has radius $r = 8$ cm. A sector of the circle has area $48$ cm$^2$. Find the
exact arc length of the sector.

**Solution:**

Using the sector area formula $A = \frac{1}{2}r^2\theta$:

$$
48 = \frac{1}{2}(64)\theta \implies 48 = 32\theta \implies \theta = \frac{3}{2} \mathrm{ rad}
$$

Arc length $s = r\theta = 8 \times \frac{3}{2} = 12$ cm.

</details>

<details>
<summary>Problem 2: Compound Angle Identity</summary>

**Problem:** Given that $\sin\alpha = \frac{3}{5}$ and $\cos\beta = \frac{12}{13}$, where $\alpha$
and $\beta$ are acute angles, find the exact value of $\sin(\alpha + \beta)$.

**Solution:**

Since $\alpha$ is acute: $\cos\alpha = \sqrt{1 - \frac{9}{25}} = \frac{4}{5}$. Since $\beta$ is
acute: $\sin\beta = \sqrt{1 - \frac{144}{169}} = \frac{5}{13}$.

$$
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta = \frac{3}{5} \cdot \frac{12}{13} + \frac{4}{5} \cdot \frac{5}{13} = \frac{36}{65} + \frac{20}{65} = \frac{56}{65}
$$

</details>

<details>
<summary>Problem 3: Trigonometric Equation (Factoring)</summary>

**Problem:** Solve $2\sin^2 x - \sin x - 1 = 0$ for $x \in [0, 2\pi]$.

**Solution:**

Let $u = \sin x$: $2u^2 - u - 1 = 0 \implies (2u + 1)(u - 1) = 0 \implies u = -\frac{1}{2}$ or
$u = 1$.

- $\sin x = -\frac{1}{2} \implies x = \frac{7\pi}{6}, \frac{11\pi}{6}$ (quadrants III and IV)
- $\sin x = 1 \implies x = \frac{\pi}{2}$

So $x = \frac{\pi}{2}, \frac{7\pi}{6}, \frac{11\pi}{6}$.

</details>

<details>
<summary>Problem 4: Double Angle Application</summary>

**Problem:** Solve $\cos 2x = \cos x$ for $x \in [0, 2\pi]$.

**Solution:**

Using $\cos 2x = 2\cos^2 x - 1$: $2\cos^2 x - 1 = \cos x \implies 2\cos^2 x - \cos x - 1 = 0$.

Let $u = \cos x$: $(2u + 1)(u - 1) = 0 \implies u = -\frac{1}{2}$ or $u = 1$.

- $\cos x = -\frac{1}{2} \implies x = \frac{2\pi}{3}, \frac{4\pi}{3}$
- $\cos x = 1 \implies x = 0, 2\pi$

So $x = 0, \frac{2\pi}{3}, \frac{4\pi}{3}, 2\pi$.

</details>

<details>
<summary>Problem 5: Non-Right-Angled Triangle</summary>

**Problem:** In triangle $PQR$, $p = 13$, $q = 14$, $r = 15$. Find the largest angle of the
triangle.

**Solution:**

The largest angle is opposite the longest side, so it is angle $R$ (opposite $r = 15$).

Using the cosine rule:

$$
\cos R = \frac{13^2 + 14^2 - 15^2}{2 \times 13 \times 14} = \frac{169 + 196 - 225}{364} = \frac{140}{364} = \frac{5}{13}
$$

$$
R = \arccos\frac{5}{13} \approx 67.4°
$$

</details>

<details>
<summary>Problem 6: Trigonometric Proof</summary>

**Problem:** Prove that $\tan^2 x - \sin^2 x = \tan^2 x \sin^2 x$.

**Proof:**

Starting from the LHS:

$$
\tan^2 x - \sin^2 x = \frac{\sin^2 x}{\cos^2 x} - \sin^2 x = \sin^2 x\left(\frac{1}{\cos^2 x} - 1\right) = \sin^2 x \cdot \frac{1 - \cos^2 x}{\cos^2 x} = \sin^2 x \cdot \frac{\sin^2 x}{\cos^2 x} = \tan^2 x \sin^2 x = \mathrm{RHS}
$$

</details>

<details>
<summary>Problem 7: Harmonic Form</summary>

**Problem:** Express $\sin x + \sqrt{3}\cos x$ in the form $R\sin(x + \alpha)$ and state the maximum
value.

**Solution:**

$$
R = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2
$$

$$
\tan\alpha = \frac{\sqrt{3}}{1} = \sqrt{3} \implies \alpha = \frac{\pi}{3}
$$

So $\sin x + \sqrt{3}\cos x = 2\sin\left(x + \frac{\pi}{3}\right)$.

The maximum value is $R = 2$, occurring when $x + \frac{\pi}{3} = \frac{\pi}{2} + 2n\pi$, i.e.,
$x = \frac{\pi}{6} + 2n\pi$.

</details>

<details>
<summary>Problem 8: 3D Trigonometry</summary>

**Problem:** A cuboid has dimensions $5 \times 4 \times 3$ cm. Find the angle that the diagonal of
the cuboid makes with the base.

**Solution:**

The space diagonal has length $\sqrt{5^2 + 4^2 + 3^2} = \sqrt{50} = 5\sqrt{2}$ cm.

The projection of this diagonal onto the base has length $\sqrt{5^2 + 4^2} = \sqrt{41}$ cm.

The angle $\theta$ between the space diagonal and its projection onto the base is the angle with the
base:

$$
\sin\theta = \frac{3}{5\sqrt{2}} = \frac{3\sqrt{2}}{10}
$$

$$
\theta = \arcsin\frac{3\sqrt{2}}{10} \approx 25.1°
$$

Alternatively, using the tangent:

$$
\tan\theta = \frac{3}{\sqrt{41}} \implies \theta = \arctan\frac{3}{\sqrt{41}} \approx 25.1°
$$

</details>
