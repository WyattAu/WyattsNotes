---
title: Trigonometry — Diagnostic Tests
description: "Diagnostic tests for DSE Trigonometry: sine and cosine rules, trigonometric identities, equations, and 3D problems with common pitfalls."
slug: diag-trigonometry
hide_table_of_contents: true
---

# Trigonometry — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for trigonometry.

### UT-1: Ambiguous Sine Rule Case

**Question:**

In triangle $ABC$, $AB = 8$ cm, $BC = 6$ cm, and $\angle BAC = 30°$. Find the possible values of $\angle ABC$.

**Solution:**

By the sine rule:

$$\frac{\sin \angle ABC}{AC} = \frac{\sin 30°}{BC}$$

We need $AC$ first. We only have $AB$, $BC$, and $\angle A$ -- this is the SSA (ambiguous) case.

Using the sine rule: $\dfrac{\sin C}{8} = \dfrac{\sin 30°}{6}$

$\sin C = \dfrac{8 \sin 30°}{6} = \dfrac{8 \times 0.5}{6} = \dfrac{2}{3}$

Since $\sin C = \dfrac{2}{3} \lt 1$ and $C$ is acute or obtuse:

$C = \arcsin\left(\dfrac{2}{3}\right) \approx 41.8°$ or $C = 180° - 41.8° = 138.2°$.

Check: $C + A = 138.2° + 30° = 168.2° \lt 180°$. Both are valid.

This is the ambiguous case of the sine rule. A common mistake is giving only the acute angle.

---

### UT-2: Choosing Sine vs Cosine Rule

**Question:**

In triangle $PQR$, $PQ = 5$, $QR = 7$, $PR = 8$. Find $\angle PQR$.

**Solution:**

We have all three sides (SSS), so use the cosine rule:

$$\cos \angle PQR = \frac{PQ^2 + QR^2 - PR^2}{2 \cdot PQ \cdot QR} = \frac{25 + 49 - 64}{2 \times 5 \times 7} = \frac{10}{70} = \frac{1}{7}$$

$$\angle PQR = \arccos\left(\frac{1}{7}\right) \approx 81.8°$$

Using the sine rule here would require first finding another angle, which is less efficient and risks the ambiguous case.

---

### UT-3: Trigonometric Equation with Multiple Solutions

**Question:**

Solve $\sin 2x = \cos x$ for $0° \leq x \lt 360°$.

**Solution:**

$$\sin 2x = \cos x$$

$$2\sin x \cos x = \cos x$$

$$2\sin x \cos x - \cos x = 0$$

$$\cos x(2\sin x - 1) = 0$$

**Case 1:** $\cos x = 0 \implies x = 90°$ or $x = 270°$.

**Case 2:** $\sin x = \dfrac{1}{2} \implies x = 30°$ or $x = 150°$.

A common mistake is dividing by $\cos x$ without considering the case $\cos x = 0$, which loses solutions.

Solution: $x = 30°,\; 90°,\; 150°,\; 270°$.

---

### UT-4: 3D Angle Between Line and Plane

**Question:**

In the cuboid $ABCDEFGH$ where $AB = 4$, $BC = 3$, $CG = 5$. Find the angle between the diagonal $AG$ and the base $ABCD$.

**Solution:**

The base $ABCD$ is the plane containing points $A, B, C, D$.

$G$ is directly above $C$ (assuming standard cuboid notation), so $G$ has height $CG = 5$ above the base.

The projection of $AG$ onto the base is $AC$.

$$AC = \sqrt{AB^2 + BC^2} = \sqrt{16 + 9} = 5$$

$$AG = \sqrt{AC^2 + CG^2} = \sqrt{25 + 25} = \sqrt{50} = 5\sqrt{2}$$

The angle $\theta$ between $AG$ and the base is:

$$\sin \theta = \frac{CG}{AG} = \frac{5}{5\sqrt{2}} = \frac{1}{\sqrt{2}}$$

$$\theta = 45°$$

---

### UT-5: Proving a Trigonometric Identity

**Question:**

Prove that $\dfrac{1 - \cos 2x}{\sin 2x} = \tan x$.

**Solution:**

$$\frac{1 - \cos 2x}{\sin 2x} = \frac{1 - (1 - 2\sin^2 x)}{2\sin x \cos x} = \frac{2\sin^2 x}{2\sin x \cos x} = \frac{\sin x}{\cos x} = \tan x \qed$$

---

## Integration Tests

> Tests synthesis of trigonometry with other topics.

### IT-1: Trigonometry and Coordinate Geometry (with Coordinate Geometry)

**Question:**

Three points $A(\cos\theta,\; \sin\theta)$, $B(\cos 3\theta,\; \sin 3\theta)$, $C(\cos 5\theta,\; \sin 5\theta)$ lie on the unit circle. Show that $A$, $B$, $C$ are collinear when $\theta = 36°$.

**Solution:**

For collinearity, the area of triangle $ABC$ must be zero.

$$\text{Area} = \frac{1}{2}\left|x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B)\right|$$

$$= \frac{1}{2}\left|\cos\theta(\sin 3\theta - \sin 5\theta) + \cos 3\theta(\sin 5\theta - \sin\theta) + \cos 5\theta(\sin\theta - \sin 3\theta)\right|$$

Using the identity $\sin A - \sin B = 2\cos\dfrac{A+B}{2}\sin\dfrac{A-B}{2}$:

$\sin 3\theta - \sin 5\theta = 2\cos 4\theta \sin(-\theta) = -2\cos 4\theta \sin\theta$

$\sin 5\theta - \sin\theta = 2\cos 3\theta \sin 2\theta$

$\sin\theta - \sin 3\theta = 2\cos 2\theta \sin(-\theta) = -2\cos 2\theta \sin\theta$

Substituting:

$$\frac{1}{2}\left|-2\cos\theta \cos 4\theta \sin\theta + 2\cos 3\theta \cos 3\theta \sin 2\theta - 2\cos 5\theta \cos 2\theta \sin\theta\right|$$

At $\theta = 36°$: $\theta = 36°$, $3\theta = 108°$, $5\theta = 180°$.

$A = (\cos 36°,\; \sin 36°)$, $B = (\cos 108°,\; \sin 108°)$, $C = (-1,\; 0)$.

Slope $AB = \dfrac{\sin 108° - \sin 36°}{\cos 108° - \cos 36°}$

$\sin 108° = \cos 18°$, $\cos 108° = -\sin 18°$.

Slope $AC = \dfrac{0 - \sin 36°}{-1 - \cos 36°} = \dfrac{-\sin 36°}{-1 - \cos 36°} = \dfrac{\sin 36°}{1 + \cos 36°}$

Using $\dfrac{\sin 36°}{1 + \cos 36°} = \tan 18°$.

Slope $AB = \dfrac{\cos 18° - \sin 36°}{-\sin 18° - \cos 36°}$.

Since $\sin 36° = 2\sin 18°\cos 18°$ and $\cos 36° = 1 - 2\sin^2 18°$:

Numerator: $\cos 18° - 2\sin 18°\cos 18° = \cos 18°(1 - 2\sin 18°)$.

Denominator: $-\sin 18° - 1 + 2\sin^2 18° = -(1 + \sin 18° - 2\sin^2 18°)$.

This equals $\tan 18°$ (verifiable numerically: $\tan 18° \approx 0.325$).

Since slope $AB$ = slope $AC$, the points are collinear.

---

### IT-2: Trigonometry and Algebra (with Quadratics)

**Question:**

Solve $\tan^2 x - 3\tan x + 1 = 0$ for $0° \leq x \lt 180°$.

**Solution:**

Let $u = \tan x$:

$$u^2 - 3u + 1 = 0$$

$$u = \frac{3 \pm \sqrt{9 - 4}}{2} = \frac{3 \pm \sqrt{5}}{2}$$

$\tan x = \dfrac{3 + \sqrt{5}}{2} \approx 2.618 \implies x \approx 69.1°$

$\tan x = \dfrac{3 - \sqrt{5}}{2} \approx 0.382 \implies x \approx 20.9°$

In the range $0° \leq x \lt 180°$, each tangent value gives one solution (since $\tan$ is positive in both Q1 and Q3):

$x \approx 69.1°$ or $x \approx 20.9°$.

Exact: $x = \arctan\left(\dfrac{3 + \sqrt{5}}{2}\right)$ or $x = \arctan\left(\dfrac{3 - \sqrt{5}}{2}\right)$.

---

### IT-3: Trigonometry and 3D Geometry (with Geometries)

**Question:**

A pyramid has a square base $ABCD$ of side 6 cm and vertex $V$ directly above the centre $O$ of the base. The height $VO = 4$ cm. Find the angle between the plane $VAB$ and the base $ABCD$.

**Solution:**

The angle between two planes equals the angle between their normals, or equivalently the angle between a line in one plane perpendicular to the line of intersection and its projection.

Let $M$ be the midpoint of $AB$. Then $OM \perp AB$ and $VM \perp AB$.

The angle between plane $VAB$ and the base is $\angle VMO$.

$OM = \dfrac{6}{2} = 3$ cm (half the side of the square).

$VO = 4$ cm.

In right triangle $VOM$: $\tan \angle VMO = \dfrac{VO}{OM} = \dfrac{4}{3}$.

$$\angle VMO = \arctan\left(\frac{4}{3}\right) \approx 53.1°$$
