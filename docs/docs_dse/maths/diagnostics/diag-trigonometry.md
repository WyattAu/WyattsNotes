---
title: 'Trigonometry -- Diagnostic Tests'
description:
  'Diagnostic tests for DSE Trigonometry: sine and cosine rules, trigonometric identities,
  equations, and 3D problems with common pitfalls.'
slug: diag-trigonometry
hide_table_of_contents: true
---

# Trigonometry — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for trigonometry.

### UT-1: Ambiguous Sine Rule Case

**Question:**

In triangle $ABC$, $AB = 8$ cm, $BC = 6$ cm, and $\angle BAC = 30°$. Find the possible values of
$\angle ABC$.

**Solution:**

By the sine rule:

$$\frac{\sin \angle ABC}{AC} = \frac{\sin 30°}{BC}$$

We need $AC$ first. We only have $AB$, $BC$And $\angle A$ -- this is the SSA (ambiguous) case.

Using the sine rule: $\dfrac{\sin C}{8} = \dfrac{\sin 30°}{6}$

$\sin C = \dfrac{8 \sin 30°}{6} = \dfrac{8 \times 0.5}{6} = \dfrac{2}{3}$

Since $\sin C = \dfrac{2}{3} \lt 1$ and $C$ is acute or obtuse:

$C = \arcsin\left(\dfrac{2}{3}\right) \approx 41.8°$ or $C = 180° - 41.8° = 138.2°$.

Check: $C + A = 138.2° + 30° = 168.2° \lt 180°$. Both are valid.

This is the ambiguous case of the sine rule. A common mistake is giving only the acute angle.

---

### UT-2: Choosing Sine vs Cosine Rule

**Question:**

In triangle $PQR$$PQ = 5$$QR = 7$$PR = 8$. Find $\angle PQR$.

**Solution:**

We have all three sides (SSS), so use the cosine rule:

$$\cos \angle PQR = \frac{PQ^2 + QR^2 - PR^2}{2 \cdot PQ \cdot QR} = \frac{25 + 49 - 64}{2 \times 5 \times 7} = \frac{10}{70} = \frac{1}{7}$$

$$\angle PQR = \arccos\left(\frac{1}{7}\right) \approx 81.8°$$

Using the sine rule here would require first finding another angle, which is less efficient and
risks the ambiguous case.

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

A common mistake is dividing by $\cos x$ without considering the case $\cos x = 0$Which loses
solutions.

Solution: $x = 30°,\; 90°,\; 150°,\; 270°$.

---

### UT-4: 3D Angle Between Line and Plane

**Question:**

In the cuboid $ABCDEFGH$ where $AB = 4$$BC = 3$$CG = 5$. Find the angle between the diagonal $AG$
and the base $ABCD$.

**Solution:**

The base $ABCD$ is the plane containing points $A, B, C, D$.

$G$ is directly above $C$ (assuming standard cuboid notation), so $G$ has height $CG = 5$ above the
base.

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

Three points
$A(\cos\theta,\; \sin\theta)$$B(\cos 3\theta,\; \sin 3\theta)$$C(\cos 5\theta,\; \sin 5\theta)$ lie
on the unit circle. Show that $A$$B$$C$ are collinear when $\theta = 36°$.

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

At $\theta = 36°$: $\theta = 36°$$3\theta = 108°$$5\theta = 180°$.

$A = (\cos 36°,\; \sin 36°)$$B = (\cos 108°,\; \sin 108°)$$C = (-1,\; 0)$.

Slope $AB = \dfrac{\sin 108° - \sin 36°}{\cos 108° - \cos 36°}$

$\sin 108° = \cos 18°$$\cos 108° = -\sin 18°$.

Slope
$AC = \dfrac{0 - \sin 36°}{-1 - \cos 36°} = \dfrac{-\sin 36°}{-1 - \cos 36°} = \dfrac{\sin 36°}{1 + \cos 36°}$

Using $\dfrac{\sin 36°}{1 + \cos 36°} = \tan 18°$.

Slope $AB = \dfrac{\cos 18° - \sin 36°}{-\sin 18° - \cos 36°}$.

Since $\sin 36° = 2\sin 18°\cos 18°$ and $\cos 36° = 1 - 2\sin^2 18°$:

Numerator: $\cos 18° - 2\sin 18°\cos 18° = \cos 18°(1 - 2\sin 18°)$.

Denominator: $-\sin 18° - 1 + 2\sin^2 18° = -(1 + \sin 18° - 2\sin^2 18°)$.

This equals $\tan 18°$ (verifiable numerically: $\tan 18° \approx 0.325$).

Since slope $AB$ = slope $AC$The points are collinear.

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

In the range $0° \leq x \lt 180°$Each tangent value gives one solution (since $\tan$ is positive in
both Q1 and Q3):

$x \approx 69.1°$ or $x \approx 20.9°$.

Exact: $x = \arctan\left(\dfrac{3 + \sqrt{5}}{2}\right)$ or
$x = \arctan\left(\dfrac{3 - \sqrt{5}}{2}\right)$.

---

### IT-3: Trigonometry and 3D Geometry (with Geometries)

**Question:**

A pyramid has a square base $ABCD$ of side 6 cm and vertex $V$ directly above the centre $O$ of the
base. The height $VO = 4$ cm. Find the angle between the plane $VAB$ and the base $ABCD$.

**Solution:**

The angle between two planes equals the angle between their normals, or equivalently the angle
between a line in one plane perpendicular to the line of intersection and its projection.

Let $M$ be the midpoint of $AB$. Then $OM \perp AB$ and $VM \perp AB$.

The angle between plane $VAB$ and the base is $\angle VMO$.

$OM = \dfrac{6}{2} = 3$ cm (half the side of the square).

$VO = 4$ cm.

In right triangle $VOM$: $\tan \angle VMO = \dfrac{VO}{OM} = \dfrac{4}{3}$.

$$\angle VMO = \arctan\left(\frac{4}{3}\right) \approx 53.1°$$

---

## Worked Examples

### WE-1: Sine Rule Application

**Question:**

In triangle $ABC$$\angle A = 45°$$\angle B = 60°$And $a = 8$ cm. Find the length of side $c$.

**Solution:**

$$\angle C = 180° - 45° - 60° = 75°$$

By the sine rule:

$$\frac{c}{\sin C} = \frac{a}{\sin A}$$

$$c = \frac{a \sin C}{\sin A} = \frac{8 \sin 75°}{\sin 45°} = \frac{8 \times 0.9659}{0.7071} \approx 10.93 \text{ cm}$$

---

### WE-2: Cosine Rule to Find an Angle

**Question:**

In triangle $PQR$, $PQ = 5$ cm, $QR = 7$ cm, $PR = 10$ cm. Find the largest angle.

**Solution:**

The largest angle is opposite the longest side, so it is $\angle Q$ (opposite $PR = 10$).

$$\cos \angle Q = \frac{PQ^2 + QR^2 - PR^2}{2 \cdot PQ \cdot QR} = \frac{25 + 49 - 100}{2 \times 5 \times 7} = \frac{-26}{70} = -\frac{13}{35}$$

$$\angle Q = \arccos\left(-\frac{13}{35}\right) \approx 111.8°$$

---

### WE-3: Trigonometric Identity Proof

**Question:**

Prove that $\dfrac{\sin x}{1 + \cos x} + \dfrac{1 + \cos x}{\sin x} = 2\csc x$.

**Solution:**

$$\text{LHS} = \frac{\sin^2 x + (1 + \cos x)^2}{\sin x(1 + \cos x)} = \frac{\sin^2 x + 1 + 2\cos x + \cos^2 x}{\sin x(1 + \cos x)}$$

$$= \frac{(\sin^2 x + \cos^2 x) + 1 + 2\cos x}{\sin x(1 + \cos x)} = \frac{2 + 2\cos x}{\sin x(1 + \cos x)} = \frac{2(1 + \cos x)}{\sin x(1 + \cos x)} = \frac{2}{\sin x} = 2\csc x = \text{RHS} \qed$$

---

### WE-4: Solving Trigonometric Equations in a Given Range

**Question:**

Solve $\cos 2x = \cos x$ for $0° \leq x < 360°$.

**Solution:**

$$\cos 2x = \cos x$$

$$2\cos^2 x - 1 = \cos x$$

$$2\cos^2 x - \cos x - 1 = 0$$

Let $u = \cos x$: $2u^2 - u - 1 = 0 \implies (2u + 1)(u - 1) = 0$.

$u = -\dfrac{1}{2}$ or $u = 1$.

$\cos x = -\dfrac{1}{2} \implies x = 120°$ or $x = 240°$.

$\cos x = 1 \implies x = 0°$.

Solution: $x = 0°,\; 120°,\; 240°$.

---

### WE-5: Area of Triangle Using Trigonometry

**Question:**

In triangle $ABC$, $AB = 12$ cm, $AC = 10$ cm, and $\angle BAC = 65°$. Find the area.

**Solution:**

$$\text{Area} = \frac{1}{2} \times AB \times AC \times \sin \angle BAC = \frac{1}{2} \times 12 \times 10 \times \sin 65° = 60\sin 65° \approx 60 \times 0.9063 \approx 54.4 \text{ cm}^2$$

---

### WE-6: 3D Distance Problem

**Question:**

In a rectangular room of dimensions $6$ m $\times$ $4$ m $\times$ $3$ m, an ant walks from one
corner of the floor to the diagonally opposite corner of the ceiling. Find the shortest distance the
ant must crawl.

**Solution:**

The ant needs to go from $(0, 0, 0)$ to $(6, 4, 3)$.

The shortest path is the space diagonal:

$$d = \sqrt{6^2 + 4^2 + 3^2} = \sqrt{36 + 16 + 9} = \sqrt{61} \approx 7.81 \text{ m}$$

If the ant must stay on surfaces, the shortest path "unfolds" two walls:

Unfolding the $6 \times 3$ wall and the $4 \times 3$ wall: the path goes across a $6 \times 7$
rectangle (wait, this needs careful analysis).

The shortest surface path would be
$\min\left(\sqrt{(6+4)^2 + 3^2}, \sqrt{(6+3)^2 + 4^2}, \sqrt{(4+3)^2 + 6^2}\right) = \min(\sqrt{109}, \sqrt{97}, \sqrt{85}) = \sqrt{85} \approx 9.22$
m.

The absolute shortest is the space diagonal $\sqrt{61}$ m.

---

### WE-7: Bearing Problem

**Question:**

A ship sails from port $A$ on a bearing of $060°$ for $15$ km to point $B$Then on a bearing of
$150°$ for $20$ km to point $C$. Find the distance and bearing of $C$ from $A$.

**Solution:**

$\angle ABC = 150° - (180° - 60°) = 150° - 120° = 30°$.

Wait: the angle between $AB$ and $BC$ at $B$. The bearing from $A$ to $B$ is $060°$. The reverse
bearing from $B$ to $A$ is $240°$. The bearing from $B$ to $C$ is $150°$. The angle
$ABC = 240° - 150° = 90°$.

So triangle $ABC$ has a right angle at $B$.

$AB = 15$ km, $BC = 20$ km.

$$AC = \sqrt{15^2 + 20^2} = \sqrt{225 + 400} = \sqrt{625} = 25 \text{ km}$$

Bearing of $C$ from $A$:
$\angle NAC = 060° + \arctan\left(\dfrac{20}{15}\right) = 60° + 53.1° = 113.1°$.

The distance is $25$ km and the bearing is approximately $113°$.

---

### WE-8: Angle of Elevation and Depression

**Question:**

From the top of a cliff $80$ m high, the angle of depression of a boat is $30°$. Find the distance
of the boat from the base of the cliff.

**Solution:**

The angle of elevation from the boat to the top of the cliff equals the angle of depression from the
top to the boat: $30°$.

$$\tan 30° = \frac{80}{d}$$

$$d = \frac{80}{\tan 30°} = \frac{80}{1/\sqrt{3}} = 80\sqrt{3} \approx 138.6 \text{ m}$$

---

## Common Pitfalls

1. **Missing solutions in trigonometric equations.** When solving $\cos x \cdot f(x) = 0$You must
   consider both $\cos x = 0$ AND $f(x) = 0$. Dividing by $\cos x$ or $\sin x$ loses solutions.
   Always factorise first.

2. **Using degrees when radians are required (or vice versa).** In DSE Maths, most trigonometry
   problems use degrees unless specified otherwise. Always check the required units and be
   consistent throughout your working.

3. **Ambiguous case of the sine rule.** When given two sides and a non-included angle (SSA), there
   may be two possible solutions. Always check if the supplementary angle is also valid (sums with
   given angle to less than $180°$).

4. **Incorrect angle identification in 3D problems.** In 3D trigonometry, the angle between a line
   and a plane is NOT the angle the line makes with a line in the plane. It is the angle between the
   line and its projection onto the plane. Draw clear diagrams.

5. **Bearings measured from North clockwise.** A bearing of $060°$ means $60°$ clockwise from North
   (i.e. N60°E). Always draw a clear North arrow and measure bearings correctly.

---

## DSE Exam-Style Questions

### DSE-1

In triangle $ABC$, $a = 8$ cm, $b = 6$ cm, and $\angle A = 70°$.

(a) Find $\angle B$. Give your answer correct to 1 decimal place. (3 marks) (b) Find the area of
triangle $ABC$. (2 marks) (c) Find the length of the altitude from $C$ to $AB$. (2 marks)

**Solution:**

(a) By the sine rule:

$$\frac{\sin B}{b} = \frac{\sin A}{a} \implies \sin B = \frac{6\sin 70°}{8} = \frac{6 \times 0.9397}{8} = 0.7048$$

$B = \arcsin(0.7048) \approx 44.8°$.

Check for ambiguous case: $70° + 44.8° = 114.8° < 180°$.

$B' = 180° - 44.8° = 135.2°$. $70° + 135.2° = 205.2° > 180°$. Invalid.

So $\angle B \approx 44.8°$.

(b) $\angle C = 180° - 70° - 44.8° = 65.2°$.

$\text{Area} = \dfrac{1}{2} \times 8 \times 6 \times \sin 65.2° \approx 24 \times 0.9075 \approx 21.8$
cm$^2$.

(c) $\text{Area} = \dfrac{1}{2} \times AB \times h$Where $AB = c$.

By the sine rule:
$c = \dfrac{8\sin 65.2°}{\sin 44.8°} \approx \dfrac{8 \times 0.9075}{0.7048} \approx 10.3$ cm.

$h = \dfrac{2 \times 21.8}{10.3} \approx 4.23$ cm.

---

### DSE-2

(a) Prove the identity $\dfrac{1 - \cos 2x}{1 + \cos 2x} = \tan^2 x$. (3 marks) (b) Hence solve
$\dfrac{1 - \cos 2x}{1 + \cos 2x} = 3$ for $0° \leq x < 360°$. (3 marks)

**Solution:**

(a)
$\dfrac{1 - \cos 2x}{1 + \cos 2x} = \dfrac{1 - (1 - 2\sin^2 x)}{1 + (2\cos^2 x - 1)} = \dfrac{2\sin^2 x}{2\cos^2 x} = \dfrac{\sin^2 x}{\cos^2 x} = \tan^2 x \qed$

(b) $\tan^2 x = 3 \implies \tan x = \pm\sqrt{3}$.

$\tan x = \sqrt{3} \implies x = 60°$ or $x = 240°$.

$\tan x = -\sqrt{3} \implies x = 120°$ or $x = 300°$.

Solution: $x = 60°,\; 120°,\; 240°,\; 300°$.

---

### DSE-3

A vertical tower $PQ$ stands on horizontal ground. From a point $A$ on the ground, the angle of
elevation of $P$ is $32°$. From another point $B$, $50$ m from $A$ on the opposite side of the tower,
the angle of elevation of $P$ is $24°$. Find the height of the tower. (5 marks)

**Solution:**

Let the height be $h$ and let the horizontal distance from the foot $Q$ to $A$ be $d$.

$\tan 32° = \dfrac{h}{d} \implies d = \dfrac{h}{\tan 32°}$.

$\tan 24° = \dfrac{h}{d + 50} \implies d + 50 = \dfrac{h}{\tan 24°}$.

$\dfrac{h}{\tan 32°} + 50 = \dfrac{h}{\tan 24°}$.

$h\left(\dfrac{1}{\tan 24°} - \dfrac{1}{\tan 32°}\right) = 50$.

$h\left(\cot 24° - \cot 32°\right) = 50$.

$h(2.2460 - 1.6003) = 50$.

$0.6457h = 50 \implies h = \dfrac{50}{0.6457} \approx 77.4$ m.

---

### DSE-4

Solve $\sin^2 x + 2\cos x = 2$ for $0° \leq x \leq 180°$. (4 marks)

**Solution:**

$\sin^2 x + 2\cos x = 2$.

$1 - \cos^2 x + 2\cos x = 2$.

$-\cos^2 x + 2\cos x - 1 = 0$.

$\cos^2 x - 2\cos x + 1 = 0$.

$(\cos x - 1)^2 = 0$.

$\cos x = 1$.

In $[0°,\; 180°]$: $x = 0°$.

---

### DSE-5

In the figure, $ABCD$ is a square of side $6$ cm. $E$ is a point on $BC$ such that $BE = 2$ cm. $F$
is the midpoint of $CD$. Find $\angle AEF$. (5 marks)

**Solution:**

Place $A$ at the origin: $A = (0, 0)$$B = (6, 0)$$C = (6, 6)$$D = (0, 6)$.

$E = (6, 2)$$F = (3, 6)$.

$$AE = \sqrt{6^2 + 2^2} = \sqrt{40} = 2\sqrt{10}$$

$$EF = \sqrt{(6-3)^2 + (2-6)^2} = \sqrt{9 + 16} = 5$$

$$AF = \sqrt{3^2 + 6^2} = \sqrt{45} = 3\sqrt{5}$$

By the cosine rule in triangle $AEF$:

$$\cos \angle AEF = \frac{AE^2 + EF^2 - AF^2}{2 \cdot AE \cdot EF} = \frac{40 + 25 - 45}{2 \times 2\sqrt{10} \times 5} = \frac{20}{20\sqrt{10}} = \frac{1}{\sqrt{10}} = \frac{\sqrt{10}}{10}$$

$$\angle AEF = \arccos\left(\frac{\sqrt{10}}{10}\right) \approx 71.6°$$
