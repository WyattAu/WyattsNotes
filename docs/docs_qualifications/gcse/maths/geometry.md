---
title: Geometry
date: 2026-04-14
tags:
  - Maths
  - GCSE
categories:
  - Maths
slug: geometry
---

## Geometry

:::info
Board Coverage AQA Paper 1 & 2 | Edexcel Paper 1 & 2 | OCR Paper 2 & 3 | WJEC Unit 2
:::

## 1. Angle Properties

### 1.1 Basic Angle Facts

| Property                   | Statement            |
| -------------------------- | -------------------- |
| Angles on a straight line  | Sum to $180^{\circ}$ |
| Angles at a point          | Sum to $360^{\circ}$ |
| Vertically opposite angles | Are equal            |
| Angles in a triangle       | Sum to $180^{\circ}$ |
| Angles in a quadrilateral  | Sum to $360^{\circ}$ |

**Theorem (Angle sum of a triangle).** The interior angles of any triangle sum to $180^{\circ}$.

**Proof.** Let triangle $\triangle ABC$ have vertices $A$, $B$, $C$. Draw a line through $C$
parallel to $AB$. Label the intersection points of this line with the exterior of the triangle as
$D$ and $E$ (so $D$ is on the side of $B$ and $E$ is on the side of $A$).

By alternate angles: $\angle B = \angle BCD$ and $\angle A = \angle ACE$.

Since $D$, $C$, $E$ lie on a straight line: $\angle BCD + \angle ACB + \angle ACE = 180^{\circ}$.

Therefore $\angle A + \angle B + \angle C = 180^{\circ}$. $\blacksquare$

**Theorem (Angle sum of a quadrilateral).** The interior angles of any quadrilateral sum to
$360^{\circ}$.

**Proof.** Draw a diagonal, dividing the quadrilateral into two triangles. Each triangle has angles
summing to $180^{\circ}$, so the total is $360^{\circ}$. $\blacksquare$

**Corollary.** The interior angles of any $n$-sided polygon sum to $180(n - 2)^{\circ}$.

**Proof by induction.** A triangle ($n = 3$) has sum $180^{\circ}$. Adding a vertex to an
$(n-1)$-gon creates a triangle, adding $180^{\circ}$. So an $n$-gon has sum
$180 + 180(n - 3) = 180(n - 2)^{\circ}$. $\blacksquare$

### 1.2 Angles in Parallel Lines

| Type                                   | Description          |
| -------------------------------------- | -------------------- |
| Corresponding angles (F-angles)        | Equal                |
| Alternate angles (Z-angles)            | Equal                |
| Co-interior (allied) angles (U-angles) | Sum to $180^{\circ}$ |

**Worked Example.** In the diagram, line $AB$ is parallel to line $CD$. A transversal intersects
$AB$ at $E$ and $CD$ at $F$. If $\angle AEF = 65^{\circ}$, find all the other angles at $E$ and $F$.

$\angle AEF = \angle EFD = 65^{\circ}$ (alternate angles).

$\angle BEF = 180^{\circ} - 65^{\circ} = 115^{\circ}$ (angles on a straight line).

$\angle EFC = 115^{\circ}$ (corresponding to $\angle BEF$).

$\angle CFD = 65^{\circ}$ (vertically opposite $\angle EFD$).

$\angle EFB = \angle EFD = 65^{\circ}$ (vertically opposite).

**Worked Example (Higher Tier).** Two parallel lines are cut by a transversal. One interior angle is
$3x + 10^{\circ}$ and the co-interior angle is $2x + 20^{\circ}$. Find the value of $x$.

Since co-interior angles sum to $180^{\circ}$:

$$(3x + 10) + (2x + 20) = 180$$

$$5x + 30 = 180$$

$$5x = 150$$

$$x = 30$$

### 1.3 Angles in Polygons

The **sum of interior angles** of an $n$-sided polygon:

$$S = 180(n - 2)^{\circ}$$

The **interior angle** of a regular $n$-sided polygon:

$$\text{Each interior angle} = \frac{180(n - 2)}{n}^{\circ}$$

The **exterior angle** of a regular polygon:

$$\text{Each exterior angle} = \frac{360}{n}^{\circ}$$

**Worked Example.** Find the interior angle of a regular pentagon.

$$\text{Interior angle} = \frac{180(5 - 2)}{5} = \frac{540}{5} = 108^{\circ}$$

**Worked Example (Higher Tier).** A regular polygon has an interior angle of $150^{\circ}$. How many
sides does it have?

$$\frac{180(n - 2)}{n} = 150$$ $$180n - 360 = 150n$$ $$30n = 360$$ $$n = 12$$

It is a regular dodecagon (12 sides).

**Worked Example (Higher Tier).** Find the sum of the interior angles of a polygon with 15 sides.

$$S = 180(15 - 2) = 180 \times 13 = 2340^{\circ}$$

**Worked Example (Higher Tier).** Find the exterior angle of a regular decagon, and hence find the
interior angle.

$$\text{Exterior angle} = \frac{360}{10} = 36^{\circ}$$

$$\text{Interior angle} = 180 - 36 = 144^{\circ}$$

### 1.4 Bearings

A **bearing** is an angle measured clockwise from north, always given as a three-figure number (e.g.
$045^{\circ}$, not $45^{\circ}$).

**Worked Example.** A ship sails from port $A$ on a bearing of $070^{\circ}$ for 80 km to point $B$.
It then sails on a bearing of $150^{\circ}$ for 60 km to point $C$. Find the bearing of $C$ from
$A$.

The angle $\angle NAB = 70^{\circ}$ and $\angle NBC = 150^{\circ}$.

The angle between $AB$ and north at $B$ is $180^{\circ} - 70^{\circ} = 110^{\circ}$ (back bearing).

The angle $\angle ABC = 110^{\circ} + 150^{\circ} = 260^{\circ}$... This is the external angle. The
internal angle is $360^{\circ} - 260^{\circ} = 100^{\circ}$.

Using the cosine rule on $\triangle ABC$:

$$AC^2 = 80^2 + 60^2 - 2 \times 80 \times 60 \times \cos(100^{\circ})$$
$$AC^2 = 6400 + 3600 - 9600 \times (-0.1736\ldots)$$ $$AC^2 = 10000 + 1667.1\ldots = 11667.1\ldots$$
$$AC \approx 108.0 \text{ km}$$

Using the sine rule to find $\angle BAC$:

$$\frac{\sin \angle BAC}{60} = \frac{\sin 100^{\circ}}{108.0}$$
$$\sin \angle BAC = \frac{60 \times 0.9848}{108.0} = 0.5471\ldots$$ $$\angle BAC = 33.2^{\circ}$$

Bearing of $C$ from $A = 70^{\circ} + 33.2^{\circ} = 103.2^{\circ} \approx 103^{\circ}$.

## 2. Triangles and Trigonometry

### 2.1 Pythagoras' Theorem

**Theorem.** In a right-angled triangle with hypotenuse $c$ and legs $a$ and $b$:

$$a^2 + b^2 = c^2$$

**Proof (area-based).** Consider a square of side $(a + b)$. Place four identical right-angled
triangles inside, each with legs $a$ and $b$, arranged so that their hypotenuses form a smaller
square of side $c$ in the centre.

The area of the large square equals the area of the four triangles plus the area of the inner
square:

$$(a + b)^2 = 4 \times \frac{1}{2}ab + c^2$$ $$a^2 + 2ab + b^2 = 2ab + c^2$$
$$a^2 + b^2 = c^2 \quad \blacksquare$$

**Converse of Pythagoras' Theorem.** If $a^2 + b^2 = c^2$ for a triangle with sides $a, b, c$ where
$c$ is the longest side, then the triangle is right-angled.

**Worked Example.** Is a triangle with sides 5 cm, 12 cm, and 13 cm right-angled?

$5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Yes, it is right-angled.

**Worked Example.** A ladder of length 10 m leans against a wall with its foot 6 m from the base of
the wall. How high up the wall does it reach?

$$h^2 + 6^2 = 10^2$$ $$h^2 = 100 - 36 = 64$$ $$h = 8 \text{ m}$$

**Worked Example (Higher Tier).** Is a triangle with sides 7 cm, 11 cm, and 13 cm acute,
right-angled, or obtuse?

$7^2 + 11^2 = 49 + 121 = 170$. Since $170 \gt 13^2 = 169$, the triangle is acute (the angle opposite
the longest side is less than $90^{\circ}$).

**Test for triangle type:**

| Condition           | Type         |
| ------------------- | ------------ |
| $a^2 + b^2 = c^2$   | Right-angled |
| $a^2 + b^2 \gt c^2$ | Acute        |
| $a^2 + b^2 \lt c^2$ | Obtuse       |

### 2.2 SOH CAH TOA

For a right-angled triangle with angle $\theta$:

$$\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan \theta = \frac{\text{opposite}}{\text{adjacent}}$$

**Proof that $\tan \theta = \frac{\sin \theta}{\cos \theta}$.**

$$\tan \theta = \frac{\mathrm{opp}}{\mathrm{adj}} = \frac{\mathrm{opp}/\mathrm{hyp}}{\mathrm{adj}/\mathrm{hyp}} = \frac{\sin \theta}{\cos \theta} \quad \blacksquare$$

**Proof that $\sin^2\theta + \cos^2\theta = 1$.**

By Pythagoras: $\mathrm{opp}^2 + \mathrm{adj}^2 = \mathrm{hyp}^2$.

Dividing by $\mathrm{hyp}^2$:

$$\frac{\mathrm{opp}^2}{\mathrm{hyp}^2} + \frac{\mathrm{adj}^2}{\mathrm{hyp}^2} = 1$$

$$\sin^2\theta + \cos^2\theta = 1 \quad \blacksquare$$

**Worked Example.** Find the length of the hypotenuse in a right-angled triangle where the opposite
side is 5 cm and the angle is $35^{\circ}$.

$$\sin 35^{\circ} = \frac{5}{h}$$
$$h = \frac{5}{\sin 35^{\circ}} = \frac{5}{0.5736\ldots} = 8.72 \text{ cm (to 3 s.f.)}$$

**Worked Example.** Find the angle $\theta$ in a right-angled triangle where the adjacent side is 8
cm and the hypotenuse is 15 cm.

$$\cos \theta = \frac{8}{15}$$
$$\theta = \cos^{-1}\!\left(\frac{8}{15}\right) \approx 57.8^{\circ}$$

### 2.3 Sine Rule

For any triangle $\triangle ABC$:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Used when you know: an angle and its opposite side, plus one other angle or side.

**Proof sketch.** Drop an altitude from $C$ to $AB$. In the two right-angled triangles formed,
express the height as both $b \sin A$ and $a \sin B$. Setting equal: $b \sin A = a \sin B$, giving
$\frac{a}{\sin A} = \frac{b}{\sin B}$. $\blacksquare$

**Worked Example (Higher Tier).** In $\triangle ABC$, $a = 10$ cm, $A = 45^{\circ}$,
$B = 70^{\circ}$. Find $b$.

$$\frac{b}{\sin 70^{\circ}} = \frac{10}{\sin 45^{\circ}}$$
$$b = \frac{10 \sin 70^{\circ}}{\sin 45^{\circ}} = \frac{10 \times 0.9397}{0.7071} \approx 13.29 \text{ cm}$$

### 2.4 Cosine Rule

For any triangle $\triangle ABC$:

$$a^2 = b^2 + c^2 - 2bc \cos A$$

Rearranged to find an angle:

$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

Used when you know: two sides and the included angle (to find the third side), or all three sides
(to find an angle).

**Worked Example.** In $\triangle ABC$, $a = 8$ cm, $b = 5$ cm, $c = 7$ cm. Find angle $A$.

$$\cos A = \frac{25 + 49 - 64}{2 \times 5 \times 7} = \frac{10}{70} = \frac{1}{7}$$
$$A = \cos^{-1}\!\left(\frac{1}{7}\right) = 81.8^{\circ} \text{ (to 1 d.p.)}$$

**Worked Example (Higher Tier).** In $\triangle ABC$, $a = 12$ cm, $b = 8$ cm, $C = 60^{\circ}$.
Find $c$.

$$c^2 = 144 + 64 - 2 \times 12 \times 8 \times \cos 60^{\circ}$$ $$c^2 = 208 - 96 = 112$$
$$c = \sqrt{112} = 4\sqrt{7} \approx 10.58 \text{ cm}$$

### 2.5 Area of a Triangle

$$\text{Area} = \frac{1}{2}ab \sin C$$

where $a$ and $b$ are two sides and $C$ is the included angle.

**Worked Example.** Find the area of $\triangle ABC$ where $a = 10$ cm, $b = 8$ cm, and
$C = 45^{\circ}$.

$$\text{Area} = \frac{1}{2} \times 10 \times 8 \times \sin 45^{\circ} = 40 \times \frac{\sqrt{2}}{2} = 20\sqrt{2} \approx 28.3 \text{ cm}^2$$

### 2.6 The Ambiguous Case of the Sine Rule (Higher Tier)

When using the sine rule to find an angle, there may be two possible solutions: $\theta$ and
$180^{\circ} - \theta$.

**Worked Example.** In $\triangle ABC$, $a = 8$ cm, $b = 10$ cm, $A = 40^{\circ}$. Find angle $B$.

$$\frac{\sin B}{10} = \frac{\sin 40^{\circ}}{8}$$
$$\sin B = \frac{10 \sin 40^{\circ}}{8} = \frac{10 \times 0.6428}{8} = 0.8035$$

$B = \sin^{-1}(0.8035) \approx 53.5^{\circ}$ or $B = 180^{\circ} - 53.5^{\circ} = 126.5^{\circ}$.

Both are valid since $53.5 + 40 = 93.5 \lt 180$ and $126.5 + 40 = 166.5 \lt 180$.

**When to check for the ambiguous case:** Only when finding an _angle_ using the sine rule. If
finding a _side_, there is at most one solution.

## 3. Circle Theorems

### 3.1 Key Theorems

| Theorem               | Statement                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------- |
| Centre and chord      | The perpendicular from the centre to a chord bisects the chord                            |
| Tangent and radius    | A tangent is perpendicular to the radius at the point of contact                          |
| Two tangents          | Two tangents from an external point are equal in length                                   |
| Angle at centre       | The angle at the centre is twice the angle at the circumference subtended by the same arc |
| Angle in a semicircle | The angle in a semicircle is a right angle                                                |
| Cyclic quadrilateral  | Opposite angles sum to $180^{\circ}$                                                      |
| Same segment          | Angles in the same segment are equal                                                      |

### 3.2 Proof: Angle at Centre is Twice Angle at Circumference

**Proof.** Let $O$ be the centre of a circle. Let arc $AB$ subtend angle $\angle AOB = 2\theta$ at
the centre and angle $\angle ACB = \theta$ at a point $C$ on the circumference.

Draw the radius $OC$. Since $OA = OC$ (radii), $\triangle OAC$ is isosceles, so
$\angle OAC = \angle OCA$.

Similarly, $OB = OC$, so $\triangle OBC$ is isosceles, and $\angle OBC = \angle OCB$.

The exterior angle at $O$ for $\triangle OAC$: $2\angle OCA = \angle AOC$.

The exterior angle at $O$ for $\triangle OBC$: $2\angle OCB = \angle BOC$.

Adding: $\angle AOC + \angle BOC = 2\angle OCA + 2\angle OCB$

$$\angle AOB = 2(\angle OCA + \angle OCB) = 2\angle ACB \quad \blacksquare$$

### 3.3 Proof: Angle in a Semicircle is a Right Angle

**Proof.** Let $AB$ be a diameter of a circle with centre $O$. Let $C$ be any point on the
circumference.

Since $AB$ is a diameter, $\angle AOB = 180^{\circ}$.

By the angle at centre theorem: $\angle AOB = 2\angle ACB$.

Therefore $\angle ACB = 90^{\circ}$. $\blacksquare$

### 3.4 Proof: Opposite Angles of a Cyclic Quadrilateral Sum to $180^{\circ}$

**Proof.** Let $ABCD$ be a cyclic quadrilateral with circumcentre $O$. The arc $ABC$ subtends angle
$\angle ADC$ at the circumference and angle $\angle AOC$ at the centre. Similarly, arc $ADC$
subtends $\angle ABC$ and $\angle AOD$.

The arcs $ABC$ and $ADC$ together make the full circle, so $\angle AOC + \angle AOD = 360^{\circ}$.

By the angle at centre theorem: $\angle ADC = \frac{1}{2}\angle AOC$ and
$\angle ABC = \frac{1}{2}\angle AOD$.

Adding: $\angle ABC + \angle ADC = \frac{1}{2} \times 360^{\circ} = 180^{\circ}$. $\blacksquare$

### 3.5 Worked Examples with Circle Theorems

**Worked Example.** $A$, $B$, $C$, and $D$ lie on a circle. $\angle ABC = 75^{\circ}$ and
$\angle CAD = 40^{\circ}$. Find $\angle ABD$.

$\angle ABC$ and $\angle ADC$ are opposite angles of cyclic quadrilateral $ABCD$:
$\angle ADC = 180^{\circ} - 75^{\circ} = 105^{\circ}$.

$\angle CAD$ and $\angle CBD$ are in the same segment (subtended by arc $CD$), so
$\angle CAD =
\angle CBD = 40^{\circ}$.

Therefore $\angle ABD = \angle ABC - \angle CBD = 75^{\circ} - 40^{\circ} = 35^{\circ}$.

**Worked Example (Higher Tier).** $AB$ is a diameter of a circle with centre $O$. $C$ is a point on
the circle such that $\angle BAC = 32^{\circ}$. Find $\angle OCA$.

Since $AB$ is a diameter, $\angle ACB = 90^{\circ}$.

$\angle ABC = 90^{\circ} - 32^{\circ} = 58^{\circ}$.

Since $OA = OC$ (radii), $\triangle OAC$ is isosceles: $\angle OCA = \angle OAC = 32^{\circ}$.

**Worked Example (Higher Tier).** $AB$ and $AC$ are tangents to a circle at points $B$ and $C$
respectively. Prove that $AB = AC$.

Join $O$ to $A$, $B$, and $C$. Since $OB$ and $OC$ are radii, and tangents are perpendicular to
radii at the point of contact, $\angle OBA = \angle OCA = 90^{\circ}$.

$OA$ is common, and $OB = OC$ (radii). By RHS (right angle, hypotenuse, side),
$\triangle OBA \cong
\triangle OCA$.

Therefore $AB = AC$. $\blacksquare$

## 4. Area and Perimeter

### 4.1 2D Shapes

| Shape         | Area                         | Perimeter                               |
| ------------- | ---------------------------- | --------------------------------------- |
| Rectangle     | $l \times w$                 | $2(l + w)$                              |
| Triangle      | $\frac{1}{2}bh$              | Sum of sides                            |
| Parallelogram | $bh$                         | Sum of sides                            |
| Trapezium     | $\frac{1}{2}(a + b)h$        | Sum of sides                            |
| Circle        | $\pi r^2$                    | $2\pi r$ (circumference)                |
| Sector        | $\frac{\theta}{360} \pi r^2$ | Arc: $\frac{\theta}{360} \times 2\pi r$ |

**Proof of the area of a trapezium.** A trapezium with parallel sides $a$ and $b$ and height $h$ can
be divided into a rectangle and two triangles. The rectangle has area $ah$ and the two triangles
have total area $\frac{1}{2}(b-a)h + \frac{1}{2}(b-a)h = (b-a)h$. Total:
$ah + (b-a)h = bh - ah + ah
= (a+b)h/2$. $\blacksquare$

### 4.2 3D Shapes

| Shape    | Volume                                         | Surface Area                                   |
| -------- | ---------------------------------------------- | ---------------------------------------------- |
| Cuboid   | $lwh$                                          | $2(lw + lh + wh)$                              |
| Cylinder | $\pi r^2 h$                                    | $2\pi r^2 + 2\pi rh$                           |
| Sphere   | $\frac{4}{3}\pi r^3$                           | $4\pi r^2$                                     |
| Cone     | $\frac{1}{3}\pi r^2 h$                         | $\pi r l + \pi r^2$ (where $l$ = slant height) |
| Pyramid  | $\frac{1}{3} \times \text{base area} \times h$ | Base area + triangular faces                   |

**Worked Example.** A cylinder has radius 5 cm and height 12 cm. Find its volume and total surface
area.

$$V = \pi \times 5^2 \times 12 = 300\pi \approx 942 \text{ cm}^3$$

$$\mathrm{SA} = 2\pi \times 25 + 2\pi \times 5 \times 12 = 50\pi + 120\pi = 170\pi \approx 534 \text{ cm}^2$$

**Worked Example (Higher Tier).** A cone has base radius 6 cm and slant height 10 cm. Find its
volume.

The height $h$: $h^2 + 6^2 = 10^2$, so $h = 8$ cm.

$$V = \frac{1}{3}\pi \times 36 \times 8 = 96\pi \approx 301.6 \text{ cm}^3$$

**Worked Example (Higher Tier).** A solid hemisphere has radius 7 cm. Find its total surface area.

Curved surface area: $2\pi r^2 = 2\pi \times 49 = 98\pi$.

Flat face: $\pi r^2 = 49\pi$.

Total: $147\pi \approx 461.8 \text{ cm}^2$.

**Worked Example (Higher Tier).** A frustum is formed by removing a small cone of height 4 cm from
the top of a cone of height 12 cm. Both cones have the same base radius 5 cm. Find the volume of the
frustum.

The large cone has volume $\frac{1}{3}\pi \times 25 \times 12 = 100\pi$.

The small cone has height 4 cm. By similar triangles, the radius ratio is $4/12 = 1/3$, so the small
cone has radius $5/3$ cm.

Volume of small cone: $\frac{1}{3}\pi \times \frac{25}{9} \times 4 = \frac{100\pi}{27}$.

Volume of frustum: $100\pi - \frac{100\pi}{27} = \frac{2600\pi}{27} \approx 302.3 \text{ cm}^3$.

## 5. Transformations

### 5.1 Types of Transformation

| Transformation | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| Translation    | Movement by a vector $\begin{pmatrix} x \\ y \end{pmatrix}$ |
| Reflection     | Mirror image across a line of reflection                    |
| Rotation       | Turned about a centre by an angle and direction             |
| Enlargement    | Scaled from a centre by a scale factor                      |

**Worked Example.** Describe fully the transformation that maps $\triangle ABC$ with vertices at
$(1, 2)$, $(3, 5)$, $(5, 2)$ to $\triangle A'B'C'$ with vertices at $(-1, -2)$, $(-3, -5)$,
$(-5, -2)$.

$(1, 2) \to (-1, -2)$: the $x$-coordinate is negated and the $y$-coordinate is negated. This is a
reflection in the origin, which is equivalent to a rotation of $180^{\circ}$ about the origin.

### 5.2 Vectors

A vector has both magnitude and direction. We write vectors as column vectors or using bold letters.

**Addition:**
$\begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a + c \\ b + d \end{pmatrix}$

**Scalar multiplication:**
$k\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} ka \\ kb \end{pmatrix}$

**Magnitude:** $\left|\begin{pmatrix} a \\ b \end{pmatrix}\right| = \sqrt{a^2 + b^2}$

**Parallel vectors:** $\mathbf{a}$ and $\mathbf{b}$ are parallel if $\mathbf{a} = k\mathbf{b}$ for
some scalar $k$.

**Worked Example.** Points $A$, $B$, and $C$ have position vectors
$\begin{pmatrix} 2 \\ 3 \end{pmatrix}$, $\begin{pmatrix} 8 \\ 7 \end{pmatrix}$, and
$\begin{pmatrix} 14 \\ 11 \end{pmatrix}$. Show that $A$, $B$, and $C$ are collinear.

$$\overrightarrow{AB} = \begin{pmatrix} 6 \\ 4 \end{pmatrix}, \qquad \overrightarrow{BC} = \begin{pmatrix} 6 \\ 4 \end{pmatrix}$$

Since $\overrightarrow{AB} = \overrightarrow{BC}$, the vectors are parallel and share point $B$, so
$A$, $B$, $C$ are collinear. $\blacksquare$

### 5.3 Column Vectors in Geometry

The **position vector** of a point $P$ relative to an origin $O$ is $\overrightarrow{OP}$.

The vector from $A$ to $B$ is $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$.

The **midpoint** $M$ of $AB$ has position vector $\frac{1}{2}(\mathbf{a} + \mathbf{b})$.

**Worked Example (Higher Tier).** Point $P$ divides the line segment $AB$ in the ratio $2 : 3$. If
$\overrightarrow{OA} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$ and
$\overrightarrow{OB} = \begin{pmatrix} 11 \\ 9 \end{pmatrix}$, find $\overrightarrow{OP}$.

$$\overrightarrow{OP} = \overrightarrow{OA} + \frac{2}{5}\overrightarrow{AB} = \begin{pmatrix} 1 \\ 4 \end{pmatrix} + \frac{2}{5}\begin{pmatrix} 10 \\ 5 \end{pmatrix} = \begin{pmatrix} 1 \\ 4 \end{pmatrix} + \begin{pmatrix} 4 \\ 2 \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$$

## 6. Similarity and Congruence

### 6.1 Congruent Triangles

Triangles are **congruent** if they are identical in shape and size. The conditions are:

| Condition                           | Abbreviation |
| ----------------------------------- | ------------ |
| Three sides equal                   | SSS          |
| Two sides and included angle        | SAS          |
| Two angles and a corresponding side | AAS          |
| Right angle, hypotenuse, one side   | RHS          |

:::warning
ASS (two sides and a non-included angle) is NOT a valid congruence condition. It can
produce two different triangles.
:::

### 6.2 Similar Triangles

Triangles are **similar** if they have the same shape but different sizes. Corresponding angles are
equal, and corresponding sides are in the same ratio.

**Area scale factor** = (length scale factor)$^2$.

**Volume scale factor** = (length scale factor)$^3$.

**Worked Example.** Two similar solids have volumes of 27 cm$^3$ and 125 cm$^3$. The surface area of
the smaller solid is 54 cm$^2$. Find the surface area of the larger solid.

Length scale factor $= \sqrt[3]{\frac{125}{27}} = \frac{5}{3}$.

Area scale factor $= \left(\frac{5}{3}\right)^2 = \frac{25}{9}$.

Surface area $= 54 \times \frac{25}{9} = 150 \text{ cm}^2$.

**Worked Example (Higher Tier).** Two similar triangles have areas in the ratio $16 : 49$. The
perimeter of the smaller triangle is 24 cm. Find the perimeter of the larger triangle.

Length scale factor $= \sqrt{\frac{49}{16}} = \frac{7}{4}$.

Perimeter of larger $= 24 \times \frac{7}{4} = 42$ cm.

## 7. Construction and Loci

### 7.1 Standard Constructions

- **Perpendicular bisector** of a line segment: using compasses, draw arcs from each endpoint, then
  join the intersection points.
- **Angle bisector:** using compasses, draw arcs from the vertex, then from the intersection points
  with each arm.
- **Perpendicular** from a point to a line: using compasses centered at the point, find two
  equidistant points on the line, then construct the perpendicular bisector.
- **Regular polygons:** constructed by dividing a circle into equal arcs.

### 7.2 Loci

A **locus** is the set of all points satisfying a given condition.

| Locus                       | Description            |
| --------------------------- | ---------------------- |
| Fixed distance from a point | Circle                 |
| Fixed distance from a line  | Two parallel lines     |
| Equidistant from two points | Perpendicular bisector |
| Equidistant from two lines  | Angle bisector         |

### 7.3 Regions (Higher Tier)

Loci problems often require shading the region satisfying multiple conditions simultaneously.

**Worked Example.** A goat is tethered to a corner of a rectangular field measuring 20 m by 15 m by
a rope of length 8 m. Shade the region the goat can graze.

The region is a quarter circle of radius 8 m centred at the corner.

**Worked Example (Higher Tier).** Point $A$ is at $(2, 3)$ and point $B$ is at $(8, 7)$. Shade the
region of points that are within 5 units of $A$ and closer to $A$ than to $B$.

The first condition is a circle of radius 5 centred at $A$. The second condition is the half-plane
on $A$'s side of the perpendicular bisector of $AB$. The shaded region is the intersection.

## 8. 3D Geometry (Higher Tier)

### 8.1 3D Pythagoras and Trigonometry

For a cuboid with dimensions $a, b, c$, the longest diagonal is:

$$d = \sqrt{a^2 + b^2 + c^2}$$

**Worked Example.** A cuboid has dimensions 5 cm, 12 cm, and 8 cm. Find the length of the longest
diagonal.

$$d = \sqrt{25 + 144 + 64} = \sqrt{233} \approx 15.26 \text{ cm}$$

**Worked Example.** A cone has base radius 3 cm and height 4 cm. Find the angle between the slant
height and the base.

Slant height $l = \sqrt{9 + 16} = 5$ cm.

$$\cos \theta = \frac{3}{5}$$ $$\theta = \cos^{-1}(0.6) \approx 53.1^{\circ}$$

**Worked Example (Higher Tier).** A pyramid has a square base of side 6 cm and all its triangular
faces are equilateral. Find the height of the pyramid.

The slant height equals the side length: $l = 6$ cm.

The distance from the centre of the base to a vertex: $\frac{6\sqrt{2}}{2} = 3\sqrt{2}$ cm.

Height: $h = \sqrt{6^2 - (3\sqrt{2})^2} = \sqrt{36 - 18} = \sqrt{18} = 3\sqrt{2}$ cm.

## Common Pitfalls

- **Using degrees when your calculator is in radians mode** (or vice versa). Always check.
- **Misidentifying which sides are opposite/adjacent** in trigonometry. Draw and label the triangle.
- **Using Pythagoras for non-right-angled triangles.** Use the sine or cosine rule instead.
- **Confusing arc length and sector area formulas.** Arc length is a fraction of $2\pi r$; sector
  area is a fraction of $\pi r^2$.
- **Forgetting that the angle in the cosine rule must be the included angle** (between the two known
  sides).
- **Mixing up similarity and congruence.** Congruent shapes are also similar, but similar shapes are
  not necessarily congruent.
- **The ambiguous case of the sine rule.** When finding an angle, always check whether the
  supplementary angle is also valid.
- **Forgetting the perpendicular bisector theorem.** Points on the perpendicular bisector are
  equidistant from both endpoints.
- **Using the wrong scale factor for area or volume.** Area uses the square of the length scale
  factor; volume uses the cube.
- **Calculating the exterior angle incorrectly.** The exterior angle is $\frac{360}{n}$, not
  $\frac{180}{n}$.

## Practice Questions

1. A regular hexagon and a regular octagon share a common side. Find the size of the angle between
   them.

2. In $\triangle ABC$, $a = 12$ cm, $b = 9$ cm, and $B = 40^{\circ}$. Find angle $A$.

3. Prove that the exterior angle of a triangle equals the sum of the two interior opposite angles.

4. A sector has radius 8 cm and angle $135^{\circ}$. Find its perimeter and area.

5. Point $P$ divides the line segment $AB$ in the ratio $2 : 3$. If
   $\overrightarrow{OA} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$ and
   $\overrightarrow{OB} = \begin{pmatrix} 11 \\ 9 \end{pmatrix}$, find $\overrightarrow{OP}$.

6. Two similar cones have heights in the ratio $3 : 5$. The volume of the smaller cone is 108
   cm$^3$. Find the volume of the larger cone.

7. $A$, $B$, and $C$ are points on a circle with centre $O$. Angle $ABC = 55^{\circ}$. Find angle
   $AOC$.

8. A triangle has sides 7 cm, 8 cm, and 10 cm. Determine whether it is acute, right-angled, or
   obtuse.

9. Describe fully the single transformation that maps $\triangle ABC$ with vertices at $(1, 2)$,
   $(3, 5)$, $(5, 2)$ to $\triangle A'B'C'$ with vertices at $(-1, -2)$, $(-3, -5)$, $(-5, -2)$.

10. Find the area of a triangle with sides 13 cm, 14 cm, and 15 cm.

11. Prove that the angle between a tangent and a chord equals the angle in the alternate segment.

12. A frustum is formed by removing a cone of height 4 cm from the top of a cone of height 10 cm.
    Both cones have base radius 6 cm. Find the volume of the frustum.

13. In $\triangle ABC$, $\angle A = 30^{\circ}$, $b = 8$ cm, $c = 5$ cm. Find the two possible
    values of $a$.

14. Points $P$ and $Q$ have position vectors $\begin{pmatrix} 3 \\ -1 \end{pmatrix}$ and
    $\begin{pmatrix} 7 \\ 5 \end{pmatrix}$. Find the position vector of the midpoint of $PQ$ and the
    magnitude of $\overrightarrow{PQ}$.

15. A cylinder and a cone have the same base radius and the same volume. If the cylinder has height
    9 cm, find the height of the cone.

16. Prove that the angle at the centre of a circle is twice the angle at the circumference.

17. A regular polygon has each exterior angle of $24^{\circ}$. How many sides does it have? Find the
    sum of its interior angles.

18. Find the shortest distance from the point $(1, 2, 3)$ to the $xy$-plane.

19. Prove that the sum of the interior angles of a pentagon is $540^{\circ}$.

20. A cone has slant height 10 cm and total surface area $165\pi$ cm$^2$. Find its radius and
    volume.

21. Prove that the angle between a tangent and a chord equals the angle in the alternate segment.
22. A regular hexagon is inscribed in a circle of radius 8 cm. Find the perimeter and area of the
    hexagon.
23. Two circles have radii 5 cm and 3 cm, and their centres are 10 cm apart. Determine whether the
    circles intersect, are tangent, or are separate.

### Extended Practice (Higher Tier)

24. A cylinder and a cone have the same base radius and the same height. Prove that the volume of
    the cylinder is three times the volume of the cone.

25. Triangle $\triangle ABC$ has vertices at $(2, 3)$, $(8, 7)$, and $(6, 1)$. Find: (a) the length
    of side $AB$, (b) the area of the triangle, (c) the equation of the line through $C$
    perpendicular to $AB$.

26. A sector of a circle has radius 12 cm and angle $75^\circ$. Find its perimeter and area.

27. Prove that if two chords of a circle are equal in length, they are equidistant from the centre.

28. The points $A(1, 2)$, $B(5, 6)$, and $C(3, k)$ are collinear. Find $k$.

29. A sphere has surface area $144\pi$ cm$^2$. Find its volume.

30. In $\triangle ABC$, $AB = 8$ cm, $BC = 6$ cm, and $\angle ABC = 120^\circ$. Find the area of the
    triangle.
