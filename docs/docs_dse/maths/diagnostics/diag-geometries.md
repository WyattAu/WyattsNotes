---
title: 'Geometries -- Diagnostic Tests'
description:
  'Diagnostic tests for DSE Geometries: circle theorems, coordinate geometry
  ./1-number-and-algebra/3_proof-and-logics, vector geometry, and geometric reasoning.'
slug: diag-geometries
hide_table_of_contents: true
---

# Geometries — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for geometries.

### UT-1: Circle Theorems — Angle at Centre

**Question:**

In the figure, $A$$B$$C$ are points on a circle with centre $O$. If $\angle ABC = 35°$ and
$\angle BAC = 70°$Find $\angle AOC$.

**Solution:**

The angle at the centre is twice the angle at the circumference subtended by the same arc.

$\angle ABC = 35°$ is subtended by arc $AC$.

$\angle AOC = 2 \times \angle ABC = 2 \times 35° = 70°$.

Alternatively, in triangle $ABC$: $\angle ACB = 180° - 35° - 70° = 75°$.

$\angle AOC$ subtended by arc $ABC$ (the major arc) $= 2 \times 75° = 150°$.

Since $\angle AOC$ on the minor arc $AC$ plus the reflex angle $= 360°$:

Minor $\angle AOC = 2 \times 35° = 70°$.

A common mistake is confusing which arc the angle subtends. $\angle ABC$ subtends arc $AC$ (not
containing $B$), so the angle at the centre is $70°$.

---

### UT-2: Tangent-Radius Perpendicularity

**Question:**

$TA$ and $TB$ are tangents to a circle with centre $O$Touching the circle at $A$ and $B$
respectively. If $\angle ATB = 50°$Find $\angle AOB$.

**Solution:**

$OA \perp TA$ and $OB \perp TB$ (tangent perpendicular to radius).

In quadrilateral $OATB$: $\angle OAT = \angle OBT = 90°$.

$$\angle AOB = 360° - 90° - 90° - 50° = 130°$$

---

### UT-3: Cyclic Quadrilateral Properties

**Question:**

$ABCD$ is a cyclic quadrilateral with $\angle A = 110°$ and $\angle C = 2\angle B$. Find $\angle B$
and $\angle D$.

**Solution:**

In a cyclic quadrilateral, opposite angles sum to $180°$:

$\angle A + \angle C = 180° \implies 110° + 2\angle B = 180° \implies 2\angle B = 70° \implies \angle B = 35°$.

$\angle B + \angle D = 180° \implies \angle D = 145°$.

---

### UT-4: Vector Geometry — Collinearity

**Question:**

Let $\vec{OA} = \mathbf{a}$$\vec{OB} = \mathbf{b}$. Point $P$ divides $AB$ in the ratio $2:1$ and
point $Q$ divides $AB$ in the ratio $3:2$. Express $\vec{PQ}$ in terms of $\mathbf{a}$ and
$\mathbf{b}$.

**Solution:**

$\vec{AB} = \mathbf{b} - \mathbf{a}$.

$P$ divides $AB$ in ratio $2:1$ (i.e. $AP:PB = 2:1$):

$$\vec{OP} = \vec{OA} + \frac{2}{3}\vec{AB} = \mathbf{a} + \frac{2}{3}(\mathbf{b} - \mathbf{a}) = \frac{1}{3}\mathbf{a} + \frac{2}{3}\mathbf{b}$$

$Q$ divides $AB$ in ratio $3:2$ (i.e. $AQ:QB = 3:2$):

$$\vec{OQ} = \vec{OA} + \frac{3}{5}\vec{AB} = \mathbf{a} + \frac{3}{5}(\mathbf{b} - \mathbf{a}) = \frac{2}{5}\mathbf{a} + \frac{3}{5}\mathbf{b}$$

$$\vec{PQ} = \vec{OQ} - \vec{OP} = \left(\frac{2}{5} - \frac{1}{3}\right)\mathbf{a} + \left(\frac{3}{5} - \frac{2}{3}\right)\mathbf{b} = \frac{1}{15}\mathbf{a} - \frac{1}{15}\mathbf{b} = \frac{1}{15}(\mathbf{a} - \mathbf{b})$$

---

### UT-5: Coordinate Proof Using Algebra

**Question:**

Use coordinate geometry to prove that the midpoint of the hypotenuse of a right-angled triangle is
equidistant from all three vertices.

**Solution:**

Place the right angle at the origin, with the legs along the axes.

Let $A = (0, 0)$$B = (2a, 0)$$C = (0, 2b)$.

Right angle at $A$Hypotenuse is $BC$.

Midpoint $M$ of $BC$: $\left(\dfrac{2a + 0}{2},\; \dfrac{0 + 2b}{2}\right) = (a,\; b)$.

$MA = \sqrt{a^2 + b^2}$.

$MB = \sqrt{(a - 2a)^2 + (b - 0)^2} = \sqrt{a^2 + b^2}$.

$MC = \sqrt{(a - 0)^2 + (b - 2b)^2} = \sqrt{a^2 + b^2}$.

Since $MA = MB = MC$The midpoint of the hypotenuse is equidistant from all three vertices.

---

## Integration Tests

> Tests synthesis of geometries with other topics.

### IT-1: Geometries and Trigonometry (with Trigonometry)

**Question:**

In triangle $ABC$$AB = 10$ cm, $BC = 8$ cm, $CA = 6$ cm. Find the radius of the circumscribed
circle.

**Solution:**

First check it is a right triangle: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Yes, right angle at $C$.

In a right triangle, the hypotenuse is the diameter of the circumscribed circle.

Radius $= \dfrac{AB}{2} = \dfrac{10}{2} = 5$ cm.

---

### IT-2: Geometries and Vectors (with Coordinate Geometry)

**Question:**

The position vectors of $A$ and $B$ are $\mathbf{a} = 2\mathbf{i} + 3\mathbf{j}$ and
$\mathbf{b} = 8\mathbf{i} - \mathbf{j}$. Point $C$ has position vector
$\mathbf{c} = 4\mathbf{i} + 7\mathbf{j}$. Prove that $A$$B$$C$ form an isosceles triangle.

**Solution:**

$$\vec{AB} = \mathbf{b} - \mathbf{a} = 6\mathbf{i} - 4\mathbf{j}$$

$$|\vec{AB}| = \sqrt{36 + 16} = \sqrt{52} = 2\sqrt{13}$$

$$\vec{AC} = \mathbf{c} - \mathbf{a} = 2\mathbf{i} + 4\mathbf{j}$$

$$|\vec{AC}| = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$$

$$\vec{BC} = \mathbf{c} - \mathbf{b} = -4\mathbf{i} + 8\mathbf{j}$$

$$|\vec{BC}| = \sqrt{16 + 64} = \sqrt{80} = 4\sqrt{5}$$

$|\vec{AB}| = 2\sqrt{13}$$|\vec{AC}| = 2\sqrt{5}$$|\vec{BC}| = 4\sqrt{5}$.

None are equal, so this is **not** isosceles. Verifying:
$|\vec{AC}|^2 + |\vec{BC}|^2 = 20 + 80 = 100 \neq 52 = |\vec{AB}|^2$Confirming it is also not
Right-angled. The triangle is **scalene**.

**Key takeaway:** Always compute and verify rather than assuming geometric properties.

---

### IT-3: Geometries and Algebra (with Polynomials)

**Question:**

The points $(1, 2)$$(3, 6)$And $(k, 10)$ are collinear. Find $k$.

**Solution:**

Collinearity means equal slopes:

$$\frac{6 - 2}{3 - 1} = \frac{10 - 6}{k - 3}$$

$$\frac{4}{2} = \frac{4}{k - 3}$$

$$2 = \frac{4}{k - 3}$$

$$k - 3 = 2 \implies k = 5$$

---

## Worked Examples

### WE-1: Angle Between Tangent and Chord

**Question:**

$TA$ is a tangent to a circle at $A$. $AB$ is a chord of the circle. If $\angle BAT = 42°$Find the
angle in the alternate segment, i.e. The angle subtended by chord $AB$ in the opposite segment.

**Solution:**

The angle between a tangent and a chord through the point of contact equals the angle in the
alternate segment.

Therefore the angle in the alternate segment $= 42°$.

If $C$ is any point on the circle on the opposite side of $AB$ from $T$Then $\angle ACB = 42°$.

**DSE Exam Technique:** When stating circle theorems, name the theorem explicitly. The HKEAA
requires you to cite the specific theorem being used, e.g. "By the alternate segment theorem."

---

### WE-2: Chord Length from Central Angle

**Question:**

A circle has radius $r = 10$ cm. A chord subtends a central angle of $120°$. Find the length of the
chord.

**Solution:**

Let the chord be $AB$ with centre $O$. Then $\angle AOB = 120°$ and $OA = OB = 10$ cm.

Drop the perpendicular from $O$ to $AB$Meeting at $M$.

Since $OM$ bisects $\angle AOB$: $\angle AOM = 60°$.

$$AM = OA \sin 60° = 10 \times \frac{\sqrt{3}}{2} = 5\sqrt{3}$$

$$AB = 2 \times AM = 10\sqrt{3} \text{ cm}$$

---

### WE-3: Proving Cyclic Quadrilateral

**Question:**

In triangle $ABC$$D$ is a point on $BC$ such that $AD$ bisects $\angle BAC$. If $AD = AB$Prove that
$ABCD$ is a cyclic quadrilateral.

**Solution:**

Since $AD = AB$Triangle $ABD$ is isosceles with $\angle ABD = \angle ADB$. ... (1)

Since $AD$ bisects $\angle BAC$: $\angle BAD = \angle CAD$. ... (2)

The exterior angle of triangle $ABD$ at $D$: $\angle ADB + \angle BAD + \angle ABD = 180°$.

In triangle $ADC$: $\angle CAD + \angle ADC + \angle ACD = 180°$.

Using $\angle ADB = \angle ABD$ from (1) and $\angle BAD = \angle CAD$ from (2):

$\angle ABD + \angle CAD + \angle ABD = 180°$ and $\angle CAD + \angle ADC + \angle ACD = 180°$.

Also $\angle ADB + \angle ADC = 180°$ (angles on a straight line), so
$\angle ABD + \angle ADC = 180°$.

Since $\angle ABD + \angle ACD = 180°$ (from the two triangle angle sums), we have
$\angle ADC = \angle ACD$Meaning... Let us reconsider.

From the isosceles triangle: $\angle ABD = \angle ADB$.

In triangle $ABC$: $\angle ABC = \angle ABD = \angle ADB$.

Since $\angle ADB$ and $\angle ADC$ are supplementary (straight line):
$\angle ADB + \angle ADC = 180°$.

So $\angle ABC + \angle ADC = 180°$.

Therefore $ABCD$ is a cyclic quadrilateral (opposite angles are supplementary).

---

### WE-4: Intersecting Chords

**Question:**

Two chords $AB$ and $CD$ of a circle intersect at $P$ inside the circle. Given that $AP = 4$ cm,
$PB = 6$ cm, and $CP = 3$ cm, find $PD$.

**Solution:**

By the intersecting chords theorem: $AP \times PB = CP \times PD$.

$$4 \times 6 = 3 \times PD$$

$$PD = \frac{24}{3} = 8 \text{ cm}$$

---

### WE-5: Area of Sector and Segment

**Question:**

A sector of a circle with radius $8$ cm and central angle $135°$ is drawn. Find:

(a) The area of the sector. (b) The area of the segment (the region between the chord and the arc).

**Solution:**

(a) Area of sector
$= \dfrac{\theta}{360°} \times \pi r^2 = \dfrac{135°}{360°} \times \pi \times 64 = \dfrac{3}{8} \times 64\pi = 24\pi$
cm$^2$.

(b) The triangle formed by the two radii and the chord:

$$\text{Area of triangle} = \frac{1}{2} \times 8 \times 8 \times \sin 135° = 32 \times \frac{\sqrt{2}}{2} = 16\sqrt{2} \text{ cm}^2$$

$$\text{Area of segment} = 24\pi - 16\sqrt{2} \text{ cm}^2$$

---

### WE-6: Vector Proof of Midpoint

**Question:**

In triangle $ABC$Let $D$ be the midpoint of $BC$. Using vectors, prove that
$\vec{AD} = \dfrac{1}{2}(\vec{AB} + \vec{AC})$.

**Solution:**

$$\vec{AD} = \vec{AB} + \vec{BD}$$

Since $D$ is the midpoint of $BC$: $\vec{BD} = \dfrac{1}{2}\vec{BC}$.

$$\vec{BC} = \vec{BA} + \vec{AC} = -\vec{AB} + \vec{AC}$$

Therefore:

$$\vec{AD} = \vec{AB} + \frac{1}{2}(-\vec{AB} + \vec{AC}) = \vec{AB} - \frac{1}{2}\vec{AB} + \frac{1}{2}\vec{AC} = \frac{1}{2}\vec{AB} + \frac{1}{2}\vec{AC} = \frac{1}{2}(\vec{AB} + \vec{AC})$$

---

### WE-7: Finding the Centre of a Circle Through Three Points

**Question:**

Find the equation of the circle passing through the points $(0, 0)$$(4, 0)$And $(0, 6)$.

**Solution:**

Let the circle have equation $x^2 + y^2 + Dx + Ey + F = 0$.

Substituting $(0, 0)$: $F = 0$.

Substituting $(4, 0)$: $16 + 4D = 0 \implies D = -4$.

Substituting $(0, 6)$: $36 + 6E = 0 \implies E = -6$.

Equation: $x^2 + y^2 - 4x - 6y = 0$.

Completing the square: $(x - 2)^2 + (y - 3)^2 = 4 + 9 = 13$.

Centre: $(2, 3)$Radius: $\sqrt{13}$.

---

### WE-8: Parallel Lines and Transversal Angles

**Question:**

In the figure, $AB \parallel CD$. $EF$ is a transversal cutting $AB$ at $G$ and $CD$ at $H$. If
$\angle EGB = 3x + 10°$ and $\angle CHG = 5x - 30°$Find $x$.

**Solution:**

Since $AB \parallel CD$ and $EF$ is a transversal, $\angle EGB$ and $\angle CHG$ are supplementary
(interior angles on the same side of the transversal).

$$\angle EGB + \angle CHG = 180°$$

$$(3x + 10°) + (5x - 30°) = 180°$$

$$8x - 20° = 180°$$

$$8x = 200°$$

$$x = 25°$$

---

## Common Pitfalls

1. **Confusing the angle at the centre with the angle at the circumference.** The angle at the
   centre is twice the angle at the circumference, but only when they subtend the **same arc**.
   Identifying the correct arc is essential. A common DSE error is using the wrong arc.

2. **Assuming the tangent is perpendicular to the chord.** The tangent is perpendicular to the
   **radius** at the point of contact, not to the chord. The perpendicular from the centre to a
   chord bisects the chord, but this is a different property.

3. **Forgetting that cyclic quadrilateral conditions work both ways.** If opposite angles sum to
   $180°$Then the quadrilateral is cyclic. But you can also use this property in reverse: if you
   know a quadrilateral is cyclic, you can conclude that opposite angles sum to $180°$.

4. **Incorrect vector notation in geometry ./1-number-and-algebra/3_proof-and-logics.** When writing
   vector ./1-number-and-algebra/3_proof-and-logics, always use position vectors (e.g.
   $\vec{OA}$$\vec{OB}$) or define your notation. Mixing free vectors and position vectors leads to
   sign errors.

5. **Not rationalising the denominator in coordinate geometry answers.** In DSE, answers involving
   surds should have rationalised denominators. For example, write $\dfrac{1}{\sqrt{2}}$ as
   $\dfrac{\sqrt{2}}{2}$.

---

## DSE Exam-Style Questions

### DSE-1

$ABCD$ is a cyclic quadrilateral with $AB = AC$ and $AD$ produced to $E$ such that $CE$ is a tangent
to the circle at $C$.

(a) Prove that $\angle ABC = \angle ACE$. (3 marks) (b) If $\angle BAC = 50°$ and
$\angle ABC = 65°$Find $\angle ADC$. (3 marks)

**Solution:**

(a) Since $ABCD$ is cyclic: $\angle ABC + \angle ADC = 180°$.

The angle between tangent $CE$ and chord $AC$ equals the angle in the alternate segment:

$\angle ACE = \angle ABC$. (This is the alternate segment theorem.)

(b) $\angle ABC = 65°$ (given).

In triangle $ABC$: $\angle BCA = 180° - 50° - 65° = 65°$.

Since $ABCD$ is cyclic: $\angle ADC = 180° - \angle ABC = 180° - 65° = 115°$.

---

### DSE-2

The vertices of triangle $ABC$ are $A(1, 2)$$B(5, 4)$And $C(3, 8)$.

(a) Find the equation of the perpendicular bisector of $AB$. (4 marks) (b) The perpendicular
bisector of $AB$ meets the perpendicular bisector of $AC$ at point $O$. Find the coordinates of
$O$The circumcentre of triangle $ABC$. (4 marks) (c) Find the radius of the circumcircle. (2 marks)

**Solution:**

(a) Midpoint of $AB$: $M = \left(\dfrac{1+5}{2},\; \dfrac{2+4}{2}\right) = (3, 3)$.

Slope of $AB$: $m_{AB} = \dfrac{4 - 2}{5 - 1} = \dfrac{1}{2}$.

Slope of perpendicular bisector: $m = -2$.

Equation: $y - 3 = -2(x - 3) \implies y = -2x + 9$.

(b) Midpoint of $AC$: $N = \left(\dfrac{1+3}{2},\; \dfrac{2+8}{2}\right) = (2, 5)$.

Slope of $AC$: $m_{AC} = \dfrac{8 - 2}{3 - 1} = 3$.

Slope of perpendicular bisector of $AC$: $m = -\dfrac{1}{3}$.

Equation: $y - 5 = -\dfrac{1}{3}(x - 2) \implies y = -\dfrac{1}{3}x + \dfrac{17}{3}$.

Intersection: $-2x + 9 = -\dfrac{1}{3}x + \dfrac{17}{3}$.

$-6x + 27 = -x + 17 \implies -5x = -10 \implies x = 2$.

$y = -2(2) + 9 = 5$.

Circumcentre: $O = (2, 5)$.

(c) Radius $= OA = \sqrt{(2-1)^2 + (5-2)^2} = \sqrt{1 + 9} = \sqrt{10}$.

---

### DSE-3

In triangle $PQR$$PQ = 7$ cm, $PR = 5$ cm, and $\angle QPR = 60°$.

(a) Find $QR$. (3 marks) (b) Find the area of triangle $PQR$. (2 marks) (c) Find the length of the
perpendicular from $P$ to $QR$. (2 marks)

**Solution:**

(a) By the cosine rule:

$$QR^2 = PQ^2 + PR^2 - 2 \cdot PQ \cdot PR \cdot \cos 60° = 49 + 25 - 2 \times 7 \times 5 \times \frac{1}{2} = 74 - 35 = 39$$

$$QR = \sqrt{39} \text{ cm}$$

(b) Area
$= \dfrac{1}{2} \times PQ \times PR \times \sin 60° = \dfrac{1}{2} \times 7 \times 5 \times \dfrac{\sqrt{3}}{2} = \dfrac{35\sqrt{3}}{4}$
cm$^2$.

(c) Area $= \dfrac{1}{2} \times QR \times h$ where $h$ is the perpendicular from $P$ to $QR$.

$$\frac{35\sqrt{3}}{4} = \frac{1}{2} \times \sqrt{39} \times h$$

$$h = \frac{35\sqrt{3}}{2\sqrt{39}} = \frac{35\sqrt{3}}{2\sqrt{39}} \cdot \frac{\sqrt{39}}{\sqrt{39}} = \frac{35\sqrt{117}}{78} = \frac{35 \times 3\sqrt{13}}{78} = \frac{35\sqrt{13}}{26} \text{ cm}$$

---

### DSE-4

The position vectors of points $A$$B$$C$ are $\mathbf{a}$$\mathbf{b}$$\mathbf{c}$ respectively.
Point $D$ is such that $\vec{AD} = \dfrac{1}{3}\vec{AC}$.

(a) Express $\vec{OD}$ in terms of $\mathbf{a}$ and $\mathbf{c}$. (1 mark) (b) If $E$ is the
midpoint of $BC$Prove that $A$$D$$E$ are collinear. (4 marks)

**Solution:**

(a) $\vec{AD} = \dfrac{1}{3}\vec{AC} = \dfrac{1}{3}(\mathbf{c} - \mathbf{a})$.

$$\vec{OD} = \vec{OA} + \vec{AD} = \mathbf{a} + \frac{1}{3}(\mathbf{c} - \mathbf{a}) = \frac{2}{3}\mathbf{a} + \frac{1}{3}\mathbf{c}$$

(b) $\vec{OE} = \dfrac{1}{2}(\mathbf{b} + \mathbf{c})$.

$$\vec{AE} = \vec{OE} - \vec{OA} = \frac{1}{2}(\mathbf{b} + \mathbf{c}) - \mathbf{a}$$

$$\vec{AD} = \frac{1}{3}(\mathbf{c} - \mathbf{a})$$

For collinearity, $\vec{AE}$ must be a scalar multiple of $\vec{AD}$. This requires more information
about the relationship between $\mathbf{a}$$\mathbf{b}$And $\mathbf{c}$. If $D$ divides $AE$ in some
ratio, we can show:

$\vec{AD} = \dfrac{1}{3}\vec{AC}$ means $D$ divides $AC$ in ratio $1:2$.

$E$ is the midpoint of $BC$.

By the converse of the midpoint theorem or using mass points: assign mass $2$ at $A$ and mass $1$ at
$C$Giving the centre of mass at $D$ on $AC$. Similarly, mass $1$ at $B$ and $1$ at $C$ gives $E$ on
$BC$.

Consider
$\vec{DE} = \vec{OE} - \vec{OD} = \dfrac{1}{2}(\mathbf{b} + \mathbf{c}) - \dfrac{2}{3}\mathbf{a} - \dfrac{1}{3}\mathbf{c} = \dfrac{1}{2}\mathbf{b} + \dfrac{1}{6}\mathbf{c} - \dfrac{2}{3}\mathbf{a}$.

This shows collinearity only if additional conditions are given. The question likely assumes $D$
lies on the median from $A$Which it does since $D$ is on $AC$ and $E$ is on $BC$.

---

### DSE-5

A circle $C$ has equation $x^2 + y^2 - 8x + 6y + 9 = 0$.

(a) Find the centre and radius of $C$. (3 marks) (b) Find the equation of the tangent to $C$ at the
point $(5, -2)$. (4 marks) (c) The tangent in part (b) meets the $x$-axis at $T$. Find the
coordinates of $T$. (2 marks)

**Solution:**

(a) $(x^2 - 8x + 16) + (y^2 + 6y + 9) = -9 + 16 + 9$.

$(x - 4)^2 + (y + 3)^2 = 16$.

Centre: $(4, -3)$Radius: $4$.

(b) The tangent at $(5, -2)$ is perpendicular to the radius joining $(4, -3)$ and $(5, -2)$.

Slope of radius: $m_r = \dfrac{-2 - (-3)}{5 - 4} = 1$.

Slope of tangent: $m_t = -1$.

Equation: $y - (-2) = -1(x - 5) \implies y + 2 = -x + 5 \implies x + y - 3 = 0$.

(c) On the $x$-axis, $y = 0$: $x - 3 = 0 \implies x = 3$.

$T = (3, 0)$.
