---
title: Trigonometry
date: 2025-05-14T11:42:14.853Z
tags:
  - maths
categories:
  - maths
slug: trigonometry
---

## Trigonometric Functions

### Sine

$$
\begin{aligned}
    \sin \theta = \frac{\text{opposite}}{\text{hypotenuse}}
\end{aligned}
$$

## Trigonometry Identities

### Pythagorean Identities

$$
\begin{aligned}
    \sin^2{\theta}+\cos^2{\theta} = 1\\
    1+\tan^2{\theta} = \sec^2{\theta}\\
    1+\cot^2{\theta} = \cosec^2 \theta\\
\end{aligned}
$$

### Compound Angle Identities

$$
\begin{aligned}
    \sin(A \pm B) = \sin A \cos B \pm \cos A \sin B\\
    \cos(A \pm B) = \cos A \cos B \mp \sin A \sin B \\
    \tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}
\end{aligned}
$$

### Double Angle Identities

$$
\begin{aligned}
    \sin{2\theta} = \sin\theta \cos\theta + \sin\theta \cos\theta = 2\sin{\theta} \cos{\theta}\\
    \cos{2\theta} = \cos^2\theta - \sin^2\theta = 2\cos^2{\theta}-1 = 1-2\sin^2\theta\\
    \tan{2\theta} = \frac{2\tan \theta}{1-\tan^2 \theta}
\end{aligned}
$$

### Triple Angle Identities

$$
    \sin 3\theta = \sin(2\theta +\theta) = \sin 2\theta \cos \theta + \cos 2\theta \sin \theta\\
    \sin 3\theta = (2\sin \theta \cos \theta ) (\cos \theta) + (1-2\sin\theta)(\sin \theta)\\
    \sin 3\theta = 2\sin \theta \cos^2 \theta + \sin\theta - 2\sin^2 \theta
$$

## The Unit Circle

The unit circle is a circle of radius $1$ centred at the origin. Any point on the unit circle has
coordinates $(\cos\theta, \sin\theta)$, where $\theta$ is the angle measured anticlockwise from the
positive $x$-axis.

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

## Trigonometric Functions

### Cosine

$$
\cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}}
$$

### Tangent

$$
\tan \theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{\sin \theta}{\cos \theta}
$$

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

:::tip
Exam Tip When sketching trig graphs, always label axis intercepts, maximum/minimum points,
and show at least one full period clearly.
:::

## Sine and Cosine Rules

### Sine Rule

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
$$

Used when you know:

- Two angles and one side (AAS), or
- Two sides and a non-included angle (SSA — ambiguous case)

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
\text{Area} = \frac{1}{2}ab\sin C
$$

### Worked Example 1: Sine Rule

**Problem:** In triangle $ABC$, $a = 8\text{ cm}$, $A = 45°$, $B = 30°$. Find $b$.

**Solution:**

$$
\frac{b}{\sin 30°} = \frac{8}{\sin 45°} \implies b = \frac{8\sin 30°}{\sin 45°} = \frac{8 \times 0.5}{\frac{\sqrt{2}}{2}} = \frac{4\sqrt{2}}{1} \approx 5.66\text{ cm}
$$

### Worked Example 2: Cosine Rule

**Problem:** Find the angle $C$ in a triangle with sides $a = 5$, $b = 7$, $c = 8$.

**Solution:**

$$
\cos C = \frac{5^2 + 7^2 - 8^2}{2 \times 5 \times 7} = \frac{25 + 49 - 64}{70} = \frac{10}{70} = \frac{1}{7}
$$

$$
C = \arccos\left(\frac{1}{7}\right) \approx 81.8°
$$

## Solving Trigonometric Equations

### General Solutions

$$
\begin{aligned}
\sin\theta &= k \implies \theta = \arcsin(k) + 2n\pi \text{ or } \theta = \pi - \arcsin(k) + 2n\pi\\
\cos\theta &= k \implies \theta = \arccos(k) + 2n\pi \text{ or } \theta = -\arccos(k) + 2n\pi\\
\tan\theta &= k \implies \theta = \arctan(k) + n\pi
\end{aligned}
$$

where $n \in \mathbb{Z}$.

### Worked Example 3: Solving a Trig Equation

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

### Worked Example 4: Using Identities to Solve

**Problem:** Solve $2\cos^2 x - \cos x - 1 = 0$ for $x \in [0, 2\pi]$.

**Solution:**

Let $u = \cos x$:

$$
2u^2 - u - 1 = 0 \implies (2u + 1)(u - 1) = 0
$$

$$
u = -\frac{1}{2} \text{ or } u = 1
$$

- $\cos x = -\frac{1}{2} \implies x = \frac{2\pi}{3}, \frac{4\pi}{3}$
- $\cos x = 1 \implies x = 0$

So $x = 0, \frac{2\pi}{3}, \frac{4\pi}{3}$.

## 3D Trigonometry

3D trigonometry involves applying trigonometric ratios in three-dimensional problems. The key is to
identify right-angled triangles within the 3D shape.

### Strategy

1. Draw a clear diagram of the 3D shape.
2. Identify the relevant 2D triangles (often by drawing auxiliary lines).
3. Label known sides and angles.
4. Apply Pythagoras' theorem, sine rule, cosine rule, or basic trig ratios.

### Worked Example 5: 3D Problem

**Problem:** A pyramid has a square base of side $6\text{ cm}$ and vertical height $4\text{ cm}$.
Find the angle between a sloping edge and the base.

**Solution:**

First find the distance from the centre of the base to a vertex:

$$
\text{Half-diagonal} = \frac{6\sqrt{2}}{2} = 3\sqrt{2}\text{ cm}
$$

The sloping edge, vertical height, and half-diagonal form a right-angled triangle:

$$
\theta = \arctan\left(\frac{4}{3\sqrt{2}}\right) = \arctan\left(\frac{2\sqrt{2}}{3}\right) \approx 43.3°
$$

## Inverse Trigonometric Functions

| Function    | Meaning                          | Range                                            |
| ----------- | -------------------------------- | ------------------------------------------------ |
| $\arcsin x$ | "the angle whose sine is $x$"    | $-\frac{\pi}{2} \le \arcsin x \le \frac{\pi}{2}$ |
| $\arccos x$ | "the angle whose cosine is $x$"  | $0 \le \arccos x \le \pi$                        |
| $\arctan x$ | "the angle whose tangent is $x$" | $-\frac{\pi}{2} \lt \arctan x \lt \frac{\pi}{2}$ |

:::tip
Exam Tip Be careful with the range of inverse trig functions. Your calculator only gives the
principal value — you may need to find other solutions using the periodic properties or the ASTC
rule.
:::

:::

:::
