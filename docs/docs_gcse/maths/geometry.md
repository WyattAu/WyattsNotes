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

### 1.2 Angles in Parallel Lines

| Type                                   | Description          |
| -------------------------------------- | -------------------- |
| Corresponding angles (F-angles)        | Equal                |
| Alternate angles (Z-angles)            | Equal                |
| Co-interior (allied) angles (U-angles) | Sum to $180^{\circ}$ |

### 1.3 Angles in Polygons

The **sum of interior angles** of an $n$-sided polygon:

$$S = 180(n - 2)^{\circ}$$

The **interior angle** of a regular $n$-sided polygon:

$$\text{Each interior angle} = \frac{180(n - 2)}{n}^{\circ}$$

The **exterior angle** of a regular polygon:

$$\text{Each exterior angle} = \frac{360}{n}^{\circ}$$

**Worked Example.** Find the interior angle of a regular pentagon.

$$\text{Interior angle} = \frac{180(5 - 2)}{5} = \frac{540}{5} = 108^{\circ}$$

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

**Worked Example.** A ladder of length 10 m leans against a wall with its foot 6 m from the base of
the wall. How high up the wall does it reach?

$$h^2 + 6^2 = 10^2$$ $$h^2 = 100 - 36 = 64$$ $$h = 8 \text{ m}$$

### 2.2 SOH CAH TOA

For a right-angled triangle with angle $\theta$:

$$\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan \theta = \frac{\text{opposite}}{\text{adjacent}}$$

**Worked Example.** Find the length of the hypotenuse in a right-angled triangle where the opposite
side is 5 cm and the angle is $35^{\circ}$.

$$\sin 35^{\circ} = \frac{5}{h}$$
$$h = \frac{5}{\sin 35^{\circ}} = \frac{5}{0.5736\ldots} = 8.72 \text{ cm (to 3 s.f.)}$$

### 2.3 Sine Rule

For any triangle $\triangle ABC$:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Used when you know: an angle and its opposite side, plus one other angle or side.

### 2.4 Cosine Rule

For any triangle $\triangle ABC$:

$$a^2 = b^2 + c^2 - 2bc \cos A$$

Rearranged to find an angle:

$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

Used when you know: two sides and the included angle (to find the third side), or all three sides
(to find an angle).

**Worked Example.** In $\triangle ABC$, $a = 8$ cm, $b = 5$ cm, $c = 7$ cm. Find angle $A$.

$$\cos A = \frac{25 + 49 - 64}{2 \times 5 \times 7} = \frac{10}{70} = \frac{1}{7}$$
$$A = \cos^{-1}\left(\frac{1}{7}\right) = 81.8^{\circ} \text{ (to 1 d.p.)}$$

### 2.5 Area of a Triangle

$$\text{Area} = \frac{1}{2}ab \sin C$$

where $a$ and $b$ are two sides and $C$ is the included angle.

**Worked Example.** Find the area of $\triangle ABC$ where $a = 10$ cm, $b = 8$ cm, and
$C = 45^{\circ}$.

$$\text{Area} = \frac{1}{2} \times 10 \times 8 \times \sin 45^{\circ} = 40 \times \frac{\sqrt{2}}{2} = 20\sqrt{2} \approx 28.3 \text{ cm}^2$$

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

$$\text{SA} = 2\pi \times 25 + 2\pi \times 5 \times 12 = 50\pi + 120\pi = 170\pi \approx 534 \text{ cm}^2$$

## 5. Transformations

### 5.1 Types of Transformation

| Transformation | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| Translation    | Movement by a vector $\begin{pmatrix} x \\ y \end{pmatrix}$ |
| Reflection     | Mirror image across a line of reflection                    |
| Rotation       | Turned about a centre by an angle and direction             |
| Enlargement    | Scaled from a centre by a scale factor                      |

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

## 6. Similarity and Congruence

### 6.1 Congruent Triangles

Triangles are **congruent** if they are identical in shape and size. The conditions are:

| Condition                           | Abbreviation |
| ----------------------------------- | ------------ |
| Three sides equal                   | SSS          |
| Two sides and included angle        | SAS          |
| Two angles and a corresponding side | AAS          |
| Right angle, hypotenuse, one side   | RHS          |

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
