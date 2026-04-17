---
title: Trigonometry
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: trigonometry
---

## Board Coverage

| Board      | Paper      | Notes                                                                    |
| ---------- | ---------- | ------------------------------------------------------------------------ |
| AQA        | Paper 1, 2 | Basic trig in P1; compound/double angle, trig equations in P2            |
| Edexcel    | P1, P2     | Similar split                                                            |
| OCR (A)    | Paper 1, 2 | Includes small angle approximations                                      |
| CIE (9709) | P1, P2, P3 | Trig functions in P1; identities and equations in P2; further trig in P3 |

:::info
All boards provide trigonometric identities in the formula booklet, but not their proofs.
You need to know _which_ identities exist and how to apply them.
:::

---

## 1. The Unit Circle Definitions

**Definition.** Consider the unit circle (radius 1, centre at the origin). For an angle $\theta$
measured anticlockwise from the positive $x$-axis, the point on the circle is
$(\cos\theta, \sin\theta)$.

**Definition.**

$$\cos\theta = \text{the } x\text{-coordinate of the point on the unit circle at angle } \theta$$

$$\sin\theta = \text{the } y\text{-coordinate of the point on the unit circle at angle } \theta$$

$$\tan\theta = \frac{\sin\theta}{\cos\theta} \quad (\cos\theta \neq 0)$$

_Intuition._ These definitions extend the right-triangle definitions (SOH CAH TOA) to all angles,
not just those between 0° and 90°. The unit circle makes clear why $\sin$ and $\cos$ are periodic
with period $2\pi$.

### 1.1 Radian Measure

**Definition.** One _radian_ is the angle subtended at the centre of a circle by an arc equal in
length to the radius.

$$\theta\text{ (radians)} = \frac{\text{arc length}}{r}$$

The full circle: $2\pi$ radians $= 360^\circ$, so $\pi$ radians $= 180^\circ$.

**Theorem (Arc length and sector area).** For a sector of radius $r$ and angle $\theta$ (in
radians):

$$\text{Arc length } s = r\theta$$

$$\text{Sector area } A = \frac{1}{2}r^2\theta$$

_Proof._ By definition, $\theta = s/r$, so $s = r\theta$. The sector is a fraction
$\frac{\theta}{2\pi}$ of the full circle (area $\pi r^2$), so
$A = \frac{\theta}{2\pi} \cdot \pi r^2 = \frac{1}{2}r^2\theta$. $\blacksquare$

---

## 2. Fundamental Identities

### 2.1 Pythagorean Identity

**Theorem.** For all $\theta \in \mathbb{R}$:

$$\sin^2\theta + \cos^2\theta = 1$$

_Proof._ The point $(\cos\theta, \sin\theta)$ lies on the unit circle $x^2 + y^2 = 1$.

$$\cos^2\theta + \sin^2\theta = 1 \quad \blacksquare$$

**Corollary.** Dividing by $\cos^2\theta$ (where $\cos\theta \neq 0$):

$$1 + \tan^2\theta = \sec^2\theta$$

Dividing by $\sin^2\theta$ (where $\sin\theta \neq 0$):

$$\cot^2\theta + 1 = \cosec^2\theta$$

---

## 3. Compound Angle Formulas

### 3.1 Sine of a Sum

**Theorem.** For all $A, B \in \mathbb{R}$:

$$\sin(A + B) = \sin A \cos B + \cos A \sin B$$

_Proof (using rotation matrices)._ Consider the rotation of the plane by angle $A$ followed by
rotation by angle $B$. The combined rotation is by angle $A + B$.

The rotation matrix by angle $\theta$ is:

$$R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

Matrix multiplication gives: $R(A)R(B) = R(A + B)$.

$$\begin{pmatrix} \cos A & -\sin A \\ \sin A & \cos A \end{pmatrix}\begin{pmatrix} \cos B & -\sin B \\ \sin B & \cos B \end{pmatrix} = \begin{pmatrix} \cos(A+B) & -\sin(A+B) \\ \sin(A+B) & \cos(A+B) \end{pmatrix}$$

The $(2, 1)$ entry of the product is:

$$\sin A \cos B + \cos A \sin B = \sin(A + B) \quad \blacksquare$$

### 3.2 Cosine of a Sum

**Theorem.**

$$\cos(A + B) = \cos A \cos B - \sin A \sin B$$

_Proof._ From the $(1, 1)$ entry of the matrix product above:

$$\cos A \cos B - \sin A \sin B = \cos(A + B) \quad \blacksquare$$

### 3.3 Tangent of a Sum

**Theorem.**

$$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}$$

_Proof._

$$
\begin{aligned}
\tan(A + B) &= \frac{\sin(A + B)}{\cos(A + B)} \\
&= \frac{\sin A \cos B + \cos A \sin B}{\cos A \cos B - \sin A \sin B}
\end{aligned}
$$

Divide numerator and denominator by $\cos A \cos B$:

$$= \frac{\tan A + \tan B}{1 - \tan A \tan B} \quad \blacksquare$$

### 3.4 Difference Formulas

**Theorem.**

$$
\begin{aligned}
\sin(A - B) &= \sin A \cos B - \cos A \sin B \\
\cos(A - B) &= \cos A \cos B + \sin A \sin B \\
\tan(A - B) &= \frac{\tan A - \tan B}{1 + \tan A \tan B}
\end{aligned}
$$

_Proof._ Replace $B$ with $-B$ in the sum formulas, using $\sin(-B) = -\sin B$ and
$\cos(-B) = \cos B$. $\blacksquare$

---

## 4. Double Angle Formulas

Setting $A = B$ in the compound angle formulas:

$$
\begin{aligned}
\sin 2A &= 2\sin A \cos A \\
\cos 2A &= \cos^2 A - \sin^2 A \\
\tan 2A &= \frac{2\tan A}{1 - \tan^2 A}
\end{aligned}
$$

**Theorem.** Three equivalent forms of $\cos 2A$:

$$\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$$

_Proof._ Using $\sin^2 A = 1 - \cos^2 A$:

$\cos^2 A - \sin^2 A = \cos^2 A - (1 - \cos^2 A) = 2\cos^2 A - 1$

Using $\cos^2 A = 1 - \sin^2 A$:

$\cos^2 A - \sin^2 A = (1 - \sin^2 A) - \sin^2 A = 1 - 2\sin^2 A$ $\blacksquare$

_Intuition._ The double angle formulas express functions of $2A$ purely in terms of functions of
$A$. They are the algebraic backbone of many trigonometric manipulations and are essential for
integration.

---

## 5. Solving Trigonometric Equations

### 5.1 Basic Strategy

1. Use identities to reduce to a single trigonometric function.
2. Solve the resulting equation.
3. Find all solutions in the required interval.

### 5.2 Key Solutions

$$
\begin{aligned}
\sin\theta = a &\implies \theta = \arcsin(a) + 2n\pi \text{ or } \pi - \arcsin(a) + 2n\pi \\
\cos\theta = a &\implies \theta = \pm\arccos(a) + 2n\pi \\
\tan\theta = a &\implies \theta = \arctan(a) + n\pi
\end{aligned}
$$

<details>
<summary>Example</summary>
Solve $2\sin^2\theta + 3\cos\theta - 3 = 0$ for $0 \leq \theta < 2\pi$.

Using $\sin^2\theta = 1 - \cos^2\theta$:

$$2(1 - \cos^2\theta) + 3\cos\theta - 3 = 0$$

$$-2\cos^2\theta + 3\cos\theta - 1 = 0$$

$$2\cos^2\theta - 3\cos\theta + 1 = 0$$

$$(2\cos\theta - 1)(\cos\theta - 1) = 0$$

$\cos\theta = \frac{1}{2} \implies \theta = \frac{\pi}{3}$ or $\frac{5\pi}{3}$.

$\cos\theta = 1 \implies \theta = 0$.

Solutions: $\theta = 0, \frac{\pi}{3}, \frac{5\pi}{3}$.

</details>

---

## 6. Small Angle Approximations

**Theorem.** For small $\theta$ (in radians):

$$
\begin{aligned}
\sin\theta &\approx \theta - \frac{\theta^3}{6} \\
\cos\theta &\approx 1 - \frac{\theta^2}{2} \\
\tan\theta &\approx \theta + \frac{\theta^3}{3}
\end{aligned}
$$

These follow from the Maclaurin series expansions (see [Differentiation](./10-differentiation.md)).

For the linear approximations (when $\theta$ is very small):

$$\sin\theta \approx \theta, \quad \cos\theta \approx 1, \quad \tan\theta \approx \theta$$

_Intuition._ Near the origin, the curves $y = \sin\theta$ and $y = \tan\theta$ are almost
indistinguishable from the line $y = \theta$. The curve $y = \cos\theta$ is nearly flat at $y = 1$.

:::warning
The small angle approximations are only valid when $\theta$ is in **radians**, not
degrees. This is a very common exam error.
:::

---

## 7. Half-Angle Formulas

**Theorem.** For all $\theta$:

$$\sin\frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos\theta}{2}}$$

$$\cos\frac{\theta}{2} = \pm\sqrt{\frac{1 + \cos\theta}{2}}$$

$$\tan\frac{\theta}{2} = \frac{\sin\theta}{1 + \cos\theta} = \frac{1 - \cos\theta}{\sin\theta}$$

### 7.1 Derivation

Starting from $\cos 2A = 1 - 2\sin^2 A$ and substituting $A = \frac{\theta}{2}$:

$$\cos\theta = 1 - 2\sin^2\frac{\theta}{2}$$

$$2\sin^2\frac{\theta}{2} = 1 - \cos\theta$$

$$\sin\frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos\theta}{2}} \quad \blacksquare$$

Similarly, from $\cos 2A = 2\cos^2 A - 1$:

$$\cos\theta = 2\cos^2\frac{\theta}{2} - 1$$

$$2\cos^2\frac{\theta}{2} = 1 + \cos\theta$$

$$\cos\frac{\theta}{2} = \pm\sqrt{\frac{1 + \cos\theta}{2}} \quad \blacksquare$$

### 7.2 Tangent Half-Angle Formulas

The tangent half-angle formulas avoid the ambiguity of the $\pm$ sign:

$$\tan\frac{\theta}{2} = \frac{\sin\theta}{1 + \cos\theta}$$

_Proof._ Using the double angle formulas:

$$\frac{\sin\theta}{1 + \cos\theta} = \frac{2\sin\frac{\theta}{2}\cos\frac{\theta}{2}}{1 + (2\cos^2\frac{\theta}{2} - 1)} = \frac{2\sin\frac{\theta}{2}\cos\frac{\theta}{2}}{2\cos^2\frac{\theta}{2}} = \frac{\sin\frac{\theta}{2}}{\cos\frac{\theta}{2}} = \tan\frac{\theta}{2} \quad \blacksquare$$

Similarly:

$$\tan\frac{\theta}{2} = \frac{1 - \cos\theta}{\sin\theta}$$

_Proof._ $\frac{1 - \cos\theta}{\sin\theta} = \frac{1 - (1 - 2\sin^2\frac{\theta}{2})}{2\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{2\sin^2\frac{\theta}{2}}{2\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{\sin\frac{\theta}{2}}{\cos\frac{\theta}{2}} = \tan\frac{\theta}{2} \quad \blacksquare$

### 7.3 Sign Determination

The $\pm$ in the sine and cosine half-angle formulas depends on the quadrant of $\frac{\theta}{2}$,
not the quadrant of $\theta$ itself. Always determine which quadrant $\frac{\theta}{2}$ lies in
before choosing the sign.

| Quadrant of $\frac{\theta}{2}$ | $\sin\frac{\theta}{2}$ | $\cos\frac{\theta}{2}$ |
| --- | --- | --- |
| I: $0 \lt{} \frac{\theta}{2} \lt{} \frac{\pi}{2}$ | $+$ | $+$ |
| II: $\frac{\pi}{2} \lt{} \frac{\theta}{2} \lt{} \pi$ | $+$ | $-$ |
| III: $\pi \lt{} \frac{\theta}{2} \lt{} \frac{3\pi}{2}$ | $-$ | $-$ |
| IV: $\frac{3\pi}{2} \lt{} \frac{\theta}{2} \lt{} 2\pi$ | $-$ | $+$ |

<details>
<summary>Worked example</summary>
Find the exact value of $\sin\frac{\pi}{8}$.

Since $0 \lt{} \frac{\pi}{8} \lt{} \frac{\pi}{2}$ (first quadrant), $\sin\frac{\pi}{8} > 0$, so
we take the positive root.

$$\sin\frac{\pi}{8} = \sqrt{\frac{1 - \cos\frac{\pi}{4}}{2}} = \sqrt{\frac{1 - \frac{\sqrt{2}}{2}}{2}} = \sqrt{\frac{2 - \sqrt{2}}{4}} = \frac{\sqrt{2 - \sqrt{2}}}{2}$$

</details>

---

## 8. R-Addition Formula (Harmonic Form)

**Theorem.** For real numbers $a$ and $b$:

$$a\sin\theta + b\cos\theta = R\sin(\theta + \alpha)$$

where $R = \sqrt{a^2 + b^2}$ and $\tan\alpha = \dfrac{b}{a}$.

### 8.1 Cosine Form

Alternatively, the same expression can be written as:

$$a\sin\theta + b\cos\theta = R\cos(\theta - \beta)$$

where $R = \sqrt{a^2 + b^2}$ and $\tan\beta = \dfrac{a}{b}$.

Both forms are equivalent; the choice between them is a matter of convenience depending on whether
a sine or cosine expansion is more natural for the problem at hand.

### 8.2 Derivation

Expand the right-hand side of the sine form:

$$R\sin(\theta + \alpha) = R\sin\theta\cos\alpha + R\cos\theta\sin\alpha$$

Equating coefficients with $a\sin\theta + b\cos\theta$:

$$R\cos\alpha = a, \qquad R\sin\alpha = b$$

Squaring and adding: $R^2\cos^2\alpha + R^2\sin^2\alpha = a^2 + b^2$, so $R^2 = a^2 + b^2$ and
$R = \sqrt{a^2 + b^2}$.

Dividing the second equation by the first: $\tan\alpha = \dfrac{b}{a}$. $\blacksquare$

The cosine form is derived similarly by expanding $R\cos(\theta - \beta) = R\cos\theta\cos\beta + R\sin\theta\sin\beta$
and equating coefficients.

### 8.3 Applications: Maximum and Minimum

Since $-1 \leq \sin(\theta + \alpha) \leq 1$:

$$-R \leq a\sin\theta + b\cos\theta \leq R$$

- **Maximum** $= R = \sqrt{a^2 + b^2}$, occurring when $\theta + \alpha = \frac{\pi}{2} + 2n\pi$.
- **Minimum** $= -R$, occurring when $\theta + \alpha = \frac{3\pi}{2} + 2n\pi$.

<details>
<summary>Example: Finding maximum and minimum</summary>
Find the maximum and minimum values of $3\sin\theta - 4\cos\theta$ and the values of $\theta$ at
which they occur, for $0 \leq \theta \lt{} 2\pi$.

$R = \sqrt{9 + 16} = 5$.

Here $a = 3$ and $b = -4$. Writing $3\sin\theta - 4\cos\theta = 5\sin(\theta + \alpha)$ where
$\tan\alpha = \dfrac{-4}{3}$, so $\alpha = -\arctan\dfrac{4}{3}$.

Maximum $= 5$ when $\theta + \alpha = \frac{\pi}{2}$:

$$\theta = \frac{\pi}{2} - \alpha = \frac{\pi}{2} + \arctan\frac{4}{3} \approx 2.214 \text{ rad}$$

Minimum $= -5$ when $\theta + \alpha = \frac{3\pi}{2}$:

$$\theta = \frac{3\pi}{2} - \alpha = \frac{3\pi}{2} + \arctan\frac{4}{3} \approx 5.356 \text{ rad}$$

</details>

### 8.4 Solving Equations

The R-addition formula converts $a\sin\theta + b\cos\theta = k$ into $R\sin(\theta + \alpha) = k$,
a standard trigonometric equation.

<details>
<summary>Example: Solving an equation</summary>
Solve $\sin\theta + \cos\theta = 1$ for $0 \leq \theta \lt{} 2\pi$.

$R = \sqrt{1 + 1} = \sqrt{2}$, $\alpha = \arctan 1 = \frac{\pi}{4}$.

$$\sqrt{2}\sin\!\left(\theta + \frac{\pi}{4}\right) = 1$$

$$\sin\!\left(\theta + \frac{\pi}{4}\right) = \frac{1}{\sqrt{2}} = \sin\frac{\pi}{4}$$

$$\theta + \frac{\pi}{4} = \frac{\pi}{4} + 2n\pi \quad \text{or} \quad \theta + \frac{\pi}{4} = \frac{3\pi}{4} + 2n\pi$$

$$\theta = 2n\pi \quad \text{or} \quad \theta = \frac{\pi}{2} + 2n\pi$$

For $0 \leq \theta \lt{} 2\pi$: $\theta = 0$ or $\theta = \frac{\pi}{2}$.

</details>

---

## 9. Trigonometric Identities: Proof Strategies

Proving trigonometric identities is a core exam skill. The following strategies cover the most
common approaches.

### 9.1 Strategy 1: Work with One Side

Start from the more complicated side and simplify it until it matches the simpler side. This avoids
the logical error of assuming what you are trying to prove.

### 9.2 Strategy 2: Express Everything in Sine and Cosine

Replace $\tan$, $\sec$, $\csc$, $\cot$ with their definitions in terms of $\sin$ and $\cos$:
$\tan\theta = \frac{\sin\theta}{\cos\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, etc.

### 9.3 Strategy 3: Use Known Identities

Apply the Pythagorean identity, compound angle, or double angle formulas to create
simplifications.

### 9.4 Strategy 4: Multiply by the Conjugate

When you see expressions of the form $a \pm b$ in a denominator or numerator, multiply top and
bottom by the conjugate $a \mp b$ to produce a difference of squares.

<details>
<summary>Example 1: Strategy 2 (express in sin and cos)</summary>
Prove that $\cot A + \tan A = \dfrac{2}{\sin 2A}$.

$$
\begin{aligned}
\cot A + \tan A &= \frac{\cos A}{\sin A} + \frac{\sin A}{\cos A} \\
&= \frac{\cos^2 A + \sin^2 A}{\sin A \cos A} \\
&= \frac{1}{\sin A \cos A} \\
&= \frac{2}{2\sin A \cos A} = \frac{2}{\sin 2A} \quad \blacksquare
\end{aligned}
$$

</details>

<details>
<summary>Example 2: Strategy 3 (use known identities)</summary>
Prove that $\sin 3A = 3\sin A - 4\sin^3 A$.

$$
\begin{aligned}
\sin 3A &= \sin(2A + A) \\
&= \sin 2A \cos A + \cos 2A \sin A \\
&= 2\sin A \cos^2 A + (1 - 2\sin^2 A)\sin A \\
&= 2\sin A(1 - \sin^2 A) + \sin A - 2\sin^3 A \\
&= 2\sin A - 2\sin^3 A + \sin A - 2\sin^3 A \\
&= 3\sin A - 4\sin^3 A \quad \blacksquare
\end{aligned}
$$

</details>

<details>
<summary>Example 3: Strategy 4 (multiply by conjugate)</summary>
Prove that $\dfrac{1}{\sec A + \tan A} = \sec A - \tan A$.

Multiply numerator and denominator by $\sec A - \tan A$:

$$
\begin{aligned}
\frac{1}{\sec A + \tan A} \cdot \frac{\sec A - \tan A}{\sec A - \tan A}
&= \frac{\sec A - \tan A}{\sec^2 A - \tan^2 A} \\
&= \frac{\sec A - \tan A}{1 + \tan^2 A - \tan^2 A} \\
&= \frac{\sec A - \tan A}{1} \\
&= \sec A - \tan A \quad \blacksquare
\end{aligned}
$$

where we used $\sec^2 A = 1 + \tan^2 A$ so that $\sec^2 A - \tan^2 A = 1$.

</details>

<details>
<summary>Example 4: Strategy 1 (work with one side)</summary>
Prove that $\dfrac{\cos 2A}{1 + \sin 2A} = \dfrac{\cos A - \sin A}{\cos A + \sin A}$.

Working from the LHS:

$$
\begin{aligned}
\frac{\cos 2A}{1 + \sin 2A}
&= \frac{\cos^2 A - \sin^2 A}{1 + 2\sin A \cos A} \\
&= \frac{(\cos A - \sin A)(\cos A + \sin A)}{\cos^2 A + 2\sin A\cos A + \sin^2 A} \\
&= \frac{(\cos A - \sin A)(\cos A + \sin A)}{(\cos A + \sin A)^2} \\
&= \frac{\cos A - \sin A}{\cos A + \sin A} \quad \blacksquare
\end{aligned}
$$

</details>

---

## 10. Trigonometric Graphs

### 10.1 Key Features

| Function | Period | Amplitude | Domain | Range |
| -------- | ------ | --------- | ------ | ----- |
| $\sin x$ | $2\pi$ | $1$ | $\mathbb{R}$ | $[-1, 1]$ |
| $\cos x$ | $2\pi$ | $1$ | $\mathbb{R}$ | $[-1, 1]$ |
| $\tan x$ | $\pi$ | undefined | $x \neq \frac{\pi}{2} + n\pi$ | $\mathbb{R}$ |

**Key values of $\sin$ and $\cos$:**

| Angle | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ | $\frac{3\pi}{2}$ | $2\pi$ |
| ----- | --- | --------------- | --------------- | --------------- | --------------- | ----- | --------------- | ----- |
| $\sin$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ | $-1$ | $0$ |
| $\cos$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ | $0$ | $1$ |

### 10.2 Transformations

For the general form $y = A\sin(Bx + C) + D$ (and similarly for $\cos$):

- $|A|$ is the **amplitude** (vertical stretch from the midline)
- The **period** is $\dfrac{2\pi}{|B|}$
- The **phase shift** is $-\dfrac{C}{B}$ (horizontal shift)
- $D$ is the **vertical shift** (midline is $y = D$)

For $\tan$, the period is $\dfrac{\pi}{|B|}$ and amplitude is not defined.

<details>
<summary>Worked example</summary>
Describe the key features of $y = 2\sin\!\left(2x - \frac{\pi}{3}\right)$ for $0 \leq x \leq 2\pi$.

**Amplitude:** $|A| = 2$, so the range is $[-2, 2]$.

**Period:** $\dfrac{2\pi}{|B|} = \dfrac{2\pi}{2} = \pi$.

**Phase shift:** $-\dfrac{C}{B} = -\dfrac{-\pi/3}{2} = \dfrac{\pi}{6}$ (shift right by $\frac{\pi}{6}$).

**Key points.** The first cycle begins at $x = \frac{\pi}{6}$ (where the curve crosses the
midline upward). Subsequent key points within $[0, 2\pi]$:

- Maximum at $x = \frac{5\pi}{12}$ (value $2$)
- Midline crossing (down) at $x = \frac{2\pi}{3}$
- Minimum at $x = \frac{11\pi}{12}$ (value $-2$)
- Midline crossing (up) at $x = \frac{7\pi}{6}$

Since the period is $\pi$, the second cycle repeats with all $x$-values shifted by $\pi$:

- Maximum at $x = \frac{17\pi}{12}$ (value $2$)
- Minimum at $x = \frac{23\pi}{12}$ (value $-2$)

**$y$-intercept:** $y = 2\sin\!\left(-\frac{\pi}{3}\right) = -\sqrt{3} \approx -1.73$.

</details>

---

## 11. Problem Set

**Problem 1.** Prove that $\frac{\sin 2\theta}{1 + \cos 2\theta} = \tan\theta$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\frac{\sin 2\theta}{1 + \cos 2\theta} &= \frac{2\sin\theta\cos\theta}{1 + (2\cos^2\theta - 1)} \\
&= \frac{2\sin\theta\cos\theta}{2\cos^2\theta} \\
&= \frac{\sin\theta}{\cos\theta} = \tan\theta \quad \blacksquare
\end{aligned}
$$
</details>
<b>If you get this wrong, revise:</b> [Double angle formulas](#4-double-angle-formulas)

---

**Problem 2.** Solve $\sin 2x = \sin x$ for $0 \leq x < 2\pi$.

<details>
<summary>Solution</summary>
$$2\sin x\cos x = \sin x$$

$$\sin x(2\cos x - 1) = 0$$

$\sin x = 0 \implies x = 0, \pi$.

$2\cos x - 1 = 0 \implies \cos x = \frac{1}{2} \implies x = \frac{\pi}{3}, \frac{5\pi}{3}$.

Solutions: $x = 0, \frac{\pi}{3}, \pi, \frac{5\pi}{3}$.

</details>
<b>If you get this wrong, revise:</b> [Solving trig equations](#5-solving-trigonometric-equations)

---

**Problem 3.** Express $4\sin\theta - 3\cos\theta$ in the form $R\sin(\theta - \alpha)$, where
$R > 0$ and $0 < \alpha < \frac{\pi}{2}$.

<details>
<summary>Solution</summary>
$R\sin(\theta - \alpha) = R(\sin\theta\cos\alpha - \cos\theta\sin\alpha) = R\cos\alpha\sin\theta - R\sin\alpha\cos\theta$.

Comparing coefficients: $R\cos\alpha = 4$ and $R\sin\alpha = 3$.

$$R^2 = 4^2 + 3^2 = 25 \implies R = 5$$

$$\tan\alpha = \frac{3}{4} \implies \alpha = \arctan\left(\frac{3}{4}\right) \approx 0.6435 \text{ rad}$$

$$4\sin\theta - 3\cos\theta = 5\sin(\theta - 0.6435)$$

</details>
<b>If you get this wrong, revise:</b> [Compound angle formulas](#3-compound-angle-formulas)

---

**Problem 4.** Find the exact value of $\sin 75^\circ$.

<details>
<summary>Solution</summary>
$$\sin 75° = \sin(45° + 30°) = \sin 45°\cos 30° + \cos 45°\sin 30^\circ$$

$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}$$

</details>
<b>If you get this wrong, revise:</b> [Compound angle formulas](#3-compound-angle-formulas)

---

**Problem 5.** Prove that $\frac{1 - \cos 2\theta}{\sin 2\theta} = \tan\theta$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\frac{1 - \cos 2\theta}{\sin 2\theta} &= \frac{1 - (1 - 2\sin^2\theta)}{2\sin\theta\cos\theta} \\
&= \frac{2\sin^2\theta}{2\sin\theta\cos\theta} \\
&= \frac{\sin\theta}{\cos\theta} = \tan\theta \quad \blacksquare
\end{aligned}
$$
</details>
<b>If you get this wrong, revise:</b> [Double angle formulas](#4-double-angle-formulas)

---

**Problem 6.** A sector of a circle of radius 8 cm has an angle of 1.2 radians. Find the arc length
and the area of the sector.

<details>
<summary>Solution</summary>
Arc length: $s = r\theta = 8 \times 1.2 = 9.6$ cm.

Area: $A = \frac{1}{2}r^2\theta = \frac{1}{2}(64)(1.2) = 38.4$ cm².

</details>
<b>If you get this wrong, revise:</b> [Radian measure](#11-radian-measure)

---

**Problem 7.** Solve $3\cos^2 x + 2\sin x - 2 = 0$ for $-\pi \leq x \leq \pi$.

<details>
<summary>Solution</summary>
$3(1 - \sin^2 x) + 2\sin x - 2 = 0$

$3 - 3\sin^2 x + 2\sin x - 2 = 0$

$-3\sin^2 x + 2\sin x + 1 = 0$

$3\sin^2 x - 2\sin x - 1 = 0$

$(3\sin x + 1)(\sin x - 1) = 0$

$\sin x = -\frac{1}{3} \implies x = \arcsin(-\frac{1}{3}) \approx -0.3398$ or
$x = -\pi - \arcsin(-\frac{1}{3}) = -\pi + 0.3398 \approx -2.802$ (since $3.481 > \pi$, subtract
$2\pi$ to stay in $[-\pi, \pi]$).

$\sin x = 1 \implies x = \frac{\pi}{2}$.

Solutions: $x \approx -2.802, -0.340, \frac{\pi}{2}$.

</details>
<b>If you get this wrong, revise:</b> [Solving trig equations](#5-solving-trigonometric-equations)

---

**Problem 8.** Use small angle approximations to estimate $\frac{\sin 0.05}{\cos 0.05}$.

<details>
<summary>Solution</summary>
$\sin 0.05 \approx 0.05$

$\cos 0.05 \approx 1 - \frac{0.05^2}{2} = 1 - 0.00125 = 0.99875$

$$\frac{\sin 0.05}{\cos 0.05} \approx \frac{0.05}{0.99875} \approx 0.05006$$

(Alternatively, $\tan 0.05 \approx 0.05$ directly.)

</details>
<b>If you get this wrong, revise:</b> [Small angle approximations](#6-small-angle-approximations)

---

**Problem 9.** Prove that $\dfrac{1 + \sin 2A}{\cos 2A} = \tan\!\left(A + \dfrac{\pi}{4}\right)$.

<details>
<summary>Solution</summary>
Working from the LHS:

$$
\begin{aligned}
\frac{1 + \sin 2A}{\cos 2A}
&= \frac{1 + 2\sin A \cos A}{\cos^2 A - \sin^2 A} \\
&= \frac{\sin^2 A + 2\sin A \cos A + \cos^2 A}{(\cos A - \sin A)(\cos A + \sin A)} \\
&= \frac{(\sin A + \cos A)^2}{(\cos A - \sin A)(\cos A + \sin A)} \\
&= \frac{\sin A + \cos A}{\cos A - \sin A}
\end{aligned}
$$

Dividing numerator and denominator by $\cos A$:

$$= \frac{\tan A + 1}{1 - \tan A}$$

From the tangent compound angle formula:

$$\tan\!\left(A + \frac{\pi}{4}\right) = \frac{\tan A + \tan\frac{\pi}{4}}{1 - \tan A \tan\frac{\pi}{4}} = \frac{\tan A + 1}{1 - \tan A} \quad \blacksquare$$

</details>
<b>If you get this wrong, revise:</b> [Compound angle formulas](#3-compound-angle-formulas)

---

**Problem 10.** The area of a sector is $20\text{ cm}^2$ and the arc length is $10\text{ cm}$. Find
the radius and the angle.

<details>
<summary>Solution</summary>
$$s = r\theta = 10 \implies \theta = \frac{10}{r}$$

$$A = \frac{1}{2}r^2\theta = \frac{1}{2}r^2 \cdot \frac{10}{r} = 5r = 20 \implies r = 4$$

$$\theta = \frac{10}{4} = 2.5 \text{ radians}$$

</details>
<b>If you get this wrong, revise:</b> [Radian measure](#11-radian-measure)

---

**Problem 11.** Find the exact value of $\cos\dfrac{\pi}{12}$ using a half-angle formula.

<details>
<summary>Solution</summary>
$\cos\frac{\pi}{12} = \cos\frac{\pi/6}{2}$, so we apply the half-angle formula with $\theta = \frac{\pi}{6}$.

Since $0 \lt{} \frac{\pi}{12} \lt{} \frac{\pi}{2}$ (first quadrant), $\cos\frac{\pi}{12} > 0$.

$$
\begin{aligned}
\cos\frac{\pi}{12} &= \sqrt{\frac{1 + \cos\frac{\pi}{6}}{2}} \\
&= \sqrt{\frac{1 + \frac{\sqrt{3}}{2}}{2}} \\
&= \sqrt{\frac{2 + \sqrt{3}}{4}} \\
&= \frac{\sqrt{2 + \sqrt{3}}}{2}
\end{aligned}
$$

This can also be verified using the compound angle formula:
$\cos\frac{\pi}{12} = \cos\!\left(\frac{\pi}{3} - \frac{\pi}{4}\right) = \cos\frac{\pi}{3}\cos\frac{\pi}{4} + \sin\frac{\pi}{3}\sin\frac{\pi}{4} = \frac{\sqrt{6} + \sqrt{2}}{4}$,
and one can check that $\dfrac{\sqrt{2+\sqrt{3}}}{2} = \dfrac{\sqrt{6}+\sqrt{2}}{4}$.

</details>
<b>If you get this wrong, revise:</b> [Half-angle formulas](#7-half-angle-formulas)

---

**Problem 12.** Find the maximum value of $2\sin\theta + 5\cos\theta$ and the smallest positive
value of $\theta$ at which it occurs.

<details>
<summary>Solution</summary>
$R = \sqrt{4 + 25} = \sqrt{29}$.

The maximum value is $R = \sqrt{29}$.

Writing $2\sin\theta + 5\cos\theta = \sqrt{29}\sin(\theta + \alpha)$ where
$\tan\alpha = \dfrac{5}{2}$.

The maximum occurs when $\sin(\theta + \alpha) = 1$, i.e., $\theta + \alpha = \frac{\pi}{2}$.

$$\theta = \frac{\pi}{2} - \alpha = \frac{\pi}{2} - \arctan\frac{5}{2} \approx 0.3805 \text{ rad}$$

Since $\arctan\frac{5}{2} \approx 1.1903 < \frac{\pi}{2}$, this $\theta$ is positive and is the
smallest positive value.

</details>
<b>If you get this wrong, revise:</b> [R-addition formula](#8-r-addition-formula-harmonic-form)

---

**Problem 13.** Prove that $\dfrac{\sin 3A}{\sin A} - \dfrac{\cos 3A}{\cos A} = 2$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\frac{\sin 3A}{\sin A} - \frac{\cos 3A}{\cos A}
&= \frac{\sin 3A \cos A - \cos 3A \sin A}{\sin A \cos A} \\
&= \frac{\sin(3A - A)}{\sin A \cos A} \\
&= \frac{\sin 2A}{\sin A \cos A} \\
&= \frac{2\sin A \cos A}{\sin A \cos A} \\
&= 2 \quad \blacksquare
\end{aligned}
$$

</details>
<b>If you get this wrong, revise:</b> [Proof strategies](#9-trigonometric-identities-proof-strategies)

---

**Problem 14.** Solve $\sin\theta + \sqrt{3}\cos\theta = 1$ for $0 \leq \theta \lt{} 2\pi$.

<details>
<summary>Solution</summary>
$R = \sqrt{1 + 3} = 2$, $\alpha = \arctan\sqrt{3} = \frac{\pi}{3}$.

$$2\sin\!\left(\theta + \frac{\pi}{3}\right) = 1$$

$$\sin\!\left(\theta + \frac{\pi}{3}\right) = \frac{1}{2}$$

$$\theta + \frac{\pi}{3} = \frac{\pi}{6} + 2n\pi \quad \text{or} \quad \theta + \frac{\pi}{3} = \frac{5\pi}{6} + 2n\pi$$

Case 1: $\theta = \frac{\pi}{6} - \frac{\pi}{3} + 2n\pi = -\frac{\pi}{6} + 2n\pi$.

For $n = 1$: $\theta = -\frac{\pi}{6} + 2\pi = \frac{11\pi}{6}$.

Case 2: $\theta = \frac{5\pi}{6} - \frac{\pi}{3} + 2n\pi = \frac{\pi}{2} + 2n\pi$.

For $n = 0$: $\theta = \frac{\pi}{2}$.

Solutions: $\theta = \frac{\pi}{2}$ or $\theta = \frac{11\pi}{6}$.

</details>
<b>If you get this wrong, revise:</b> [R-addition formula](#8-r-addition-formula-harmonic-form)

---

**Problem 15.** Prove that $\dfrac{1 - \tan^2 A}{1 + \tan^2 A} = \cos 2A$.

<details>
<summary>Solution</summary>
Using $\sec^2 A = 1 + \tan^2 A$:

$$
\begin{aligned}
\frac{1 - \tan^2 A}{1 + \tan^2 A}
&= \frac{1 - \tan^2 A}{\sec^2 A} \\
&= (1 - \tan^2 A)\cos^2 A \\
&= \cos^2 A - \tan^2 A \cos^2 A \\
&= \cos^2 A - \frac{\sin^2 A}{\cos^2 A} \cdot \cos^2 A \\
&= \cos^2 A - \sin^2 A \\
&= \cos 2A \quad \blacksquare
\end{aligned}
$$

</details>
<b>If you get this wrong, revise:</b> [Proof strategies](#9-trigonometric-identities-proof-strategies)
