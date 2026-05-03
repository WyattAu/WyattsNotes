---
title: Coordinates and Geometry -- Diagnostic Tests
description: Hard diagnostic tests for coordinate geometry covering circle-line intersection, three-point circles, vector equations, and transformation matrices.
slug: diag-coordinates-and-geometry
hide_table_of_contents: true
---

# Coordinates and Geometry — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for coordinate geometry.

### UT-1: Circle from Three Non-Collinear Points

**Question:**

Find the equation of the circle passing through the three points $A(1, 2)$, $B(5, 4)$, and $C(3, 8)$.

Express your answer in the form $(x-a)^2 + (y-b)^2 = r^2$ and in the expanded form $x^2 + y^2 + px + qy + r = 0$.

[Difficulty: hard. Tests the perpendicular bisector method and algebraic verification.]

**Solution:**

**Step 1: Find the perpendicular bisector of $AB$.**

Midpoint of $AB$: $M_1 = \left(\frac{1+5}{2}, \frac{2+4}{2}\right) = (3, 3)$.

Gradient of $AB$: $m_{AB} = \frac{4-2}{5-1} = \frac{1}{2}$.

Gradient of perpendicular bisector: $m_1 = -2$.

Equation: $y - 3 = -2(x - 3)$, i.e. $y = -2x + 9$.

**Step 2: Find the perpendicular bisector of $BC$.**

Midpoint of $BC$: $M_2 = \left(\frac{5+3}{2}, \frac{4+8}{2}\right) = (4, 6)$.

Gradient of $BC$: $m_{BC} = \frac{8-4}{3-5} = \frac{4}{-2} = -2$.

Gradient of perpendicular bisector: $m_2 = \frac{1}{2}$.

Equation: $y - 6 = \frac{1}{2}(x - 4)$, i.e. $y = \frac{1}{2}x + 4$.

**Step 3: Find the centre (intersection of perpendicular bisectors).**

$$-2x + 9 = \frac{1}{2}x + 4$$
$$5 = \frac{5}{2}x$$
$$x = 2$$

$$y = -2(2) + 9 = 5$$

The centre is $O = (2, 5)$.

**Step 4: Find the radius.**

$$r = |OA| = \sqrt{(2-1)^2 + (5-2)^2} = \sqrt{1 + 9} = \sqrt{10}$$

**Verification with point $C$:** $|OC| = \sqrt{(2-3)^2 + (5-8)^2} = \sqrt{1+9} = \sqrt{10}$. Confirmed.

**Step 5: Write the equations.**

Standard form: $(x - 2)^2 + (y - 5)^2 = 10$.

Expanded form: $x^2 - 4x + 4 + y^2 - 10y + 25 = 10$, giving:

$$x^2 + y^2 - 4x - 10y + 19 = 0$$

---

### UT-2: Circle-Line Tangency via Discriminant

**Question:**

Find the value of $k$ such that the line $y = kx + 5$ is tangent to the circle $x^2 + y^2 - 4x - 6y + 9 = 0$.

Hence find the coordinates of the point of tangency for each valid value of $k$.

[Difficulty: hard. Tests the discriminant method for tangency and the geometric interpretation.]

**Solution:**

**Step 1: Substitute the line into the circle equation.**

$$x^2 + (kx+5)^2 - 4x - 6(kx+5) + 9 = 0$$
$$x^2 + k^2x^2 + 10kx + 25 - 4x - 6kx - 30 + 9 = 0$$
$$(1+k^2)x^2 + (10k - 4 - 6k)x + 4 = 0$$
$$(1+k^2)x^2 + (4k - 4)x + 4 = 0$$

**Step 2: Set the discriminant to zero for tangency.**

$$\Delta = (4k-4)^2 - 4(1+k^2)(4) = 0$$
$$16k^2 - 32k + 16 - 16 - 16k^2 = 0$$
$$-32k = 0$$
$$k = 0$$

**Step 3: Find the point of tangency.**

With $k = 0$, the line is $y = 5$. Substituting into the circle:

$$x^2 + 25 - 4x - 30 + 9 = 0$$
$$x^2 - 4x + 4 = 0$$
$$(x-2)^2 = 0$$
$$x = 2$$

The point of tangency is $(2, 5)$.

**Geometric check:** The circle $(x-2)^2 + (y-3)^2 = 4$ has centre $(2, 3)$ and radius $2$. The line $y = 5$ is at distance $|5-3| = 2$ from the centre, equal to the radius. Confirmed.

---

### UT-3: Composite Transformation Matrices

**Question:**

The matrix $R$ represents a rotation anticlockwise by $90°$ about the origin, and the matrix $S$ represents a reflection in the line $y = x$.

$$R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \quad S = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

**(a)** Find the matrix $RS$ and describe the single transformation it represents.

**(b)** Find the matrix $SR$ and describe the single transformation it represents.

**(c)** The point $P(3, 1)$ is first reflected in the line $y = x$ and then rotated $90°$ anticlockwise about the origin. Find the coordinates of the image of $P$.

**(d)** The triangle with vertices $(0, 0)$, $(4, 0)$, $(0, 3)$ is transformed by $RS$. Find the area of the image and explain why it is preserved.

[Difficulty: hard. Tests understanding that matrix multiplication is not commutative for transformations, and the relationship between determinant and area.]

**Solution:**

**(a)**

$$RS = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0\cdot0+(-1)\cdot1 & 0\cdot1+(-1)\cdot0 \\ 1\cdot0+0\cdot1 & 1\cdot1+0\cdot0 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$$

This is a reflection in the $y$-axis.

**(b)**

$$SR = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0\cdot0+1\cdot1 & 0\cdot(-1)+1\cdot0 \\ 1\cdot0+0\cdot1 & 1\cdot(-1)+0\cdot0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

This is a reflection in the $x$-axis.

**Note:** $RS \neq SR$, confirming that transformations do not generally commute.

**(c)** Applying $S$ first, then $R$: the image is $R \cdot S \cdot \begin{pmatrix} 3 \\ 1 \end{pmatrix}$.

$$S\begin{pmatrix}3\\1\end{pmatrix} = \begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}3\\1\end{pmatrix} = \begin{pmatrix}1\\3\end{pmatrix}$$

$$R\begin{pmatrix}1\\3\end{pmatrix} = \begin{pmatrix}0&-1\\1&0\end{pmatrix}\begin{pmatrix}1\\3\end{pmatrix} = \begin{pmatrix}-3\\1\end{pmatrix}$$

The image of $P$ is $(-3, 1)$.

Alternatively, using $RS = \begin{pmatrix}-1&0\\0&1\end{pmatrix}$:

$$RS\begin{pmatrix}3\\1\end{pmatrix} = \begin{pmatrix}-3\\1\end{pmatrix}$$

Confirmed.

**(d)** The original triangle has area $\frac{1}{2} \times 4 \times 3 = 6$ square units.

The determinant of $RS$ is $\det\begin{pmatrix}-1&0\\0&1\end{pmatrix} = -1$.

The absolute value of the determinant gives the area scale factor: $|\det(RS)| = 1$. Therefore the area of the image is $6$ square units.

Both $R$ (rotation) and $S$ (reflection) are isometries (distance-preserving transformations). Their composite is also an isometry, so area is preserved.

---

## Integration Tests

> Tests synthesis of coordinate geometry with other topics. Requires combining concepts from multiple units.

### IT-1: Closest Point on a Curve Using Calculus (with Differentiation)

**Question:**

Find the point on the curve $y = x^2 - 4x + 7$ that is closest to the point $(1, 8)$.

[Difficulty: hard. Combines distance formula with differentiation to find the minimum distance.]

**Solution:**

**Step 1: Set up the distance squared function.** (Using distance squared avoids the square root and gives the same minimiser.)

A general point on the curve is $(x, x^2-4x+7)$.

$$D^2 = (x - 1)^2 + (x^2 - 4x + 7 - 8)^2 = (x-1)^2 + (x^2-4x-1)^2$$

**Step 2: Differentiate with respect to $x$.**

$$\frac{d(D^2)}{dx} = 2(x-1) + 2(x^2-4x-1)(2x-4)$$

Set this equal to zero:

$$(x-1) + (x^2-4x-1)(2x-4) = 0$$

$$(x-1) + 2(x-2)(x^2-4x-1) = 0$$

Expand $(x-2)(x^2-4x-1) = x^3 - 4x^2 - x - 2x^2 + 8x + 2 = x^3 - 6x^2 + 7x + 2$.

$$(x-1) + 2(x^3 - 6x^2 + 7x + 2) = 0$$
$$x - 1 + 2x^3 - 12x^2 + 14x + 4 = 0$$
$$2x^3 - 12x^2 + 15x + 3 = 0$$

**Step 3: Solve the cubic.** Testing $x = 1$: $2 - 12 + 15 + 3 = 8 \neq 0$. Testing $x = -1$: $-2 - 12 - 15 + 3 = -26$. Testing $x = 3$: $54 - 108 + 45 + 3 = -6$. Testing $x = \frac{1}{2}$: $\frac{1}{4} - 3 + \frac{15}{2} + 3 = 7.25$. Testing $x = 0$: $3$.

By the intermediate value theorem, there is a root between $x = -1$ and $x = 0$, and possibly others.

Testing $x = -\frac{1}{2}$: $-\frac{1}{4} - 3 - \frac{15}{2} + 3 = -\frac{1}{4} - \frac{15}{2} = -\frac{31}{4}$. Between $x = 0$ ($D' = 3$) and $x = 1$ ($D' = 8$), no root. Between $x = 3$ ($D' = -6$) and $x = 4$ ($D' = 128-192+60+3 = -1$), and $x = 5$ ($D' = 250-300+75+3=28$), so a root between $x = 4$ and $x = 5$.

Actually, let me check $x = \frac{3}{2}$: $\frac{27}{4} - 27 + \frac{45}{2} + 3 = 6.75 - 27 + 22.5 + 3 = 5.25$. Between $x = 1$ ($8$) and $x = 3$ ($-6$), a root near $x = 2$: $16 - 48 + 30 + 3 = 1$. At $x = 2.1$: $18.522 - 52.92 + 31.5 + 3 = 0.102$. At $x = 2.12$: $19.08... - 53.95... + 31.8 + 3 = -0.06...$.

Root near $x \approx 2.11$.

The exact solution requires the cubic formula. For the closest point, we accept the numerical approximation. At $x \approx 2.11$: $y \approx 4.45 - 8.44 + 7 = 3.01$.

The closest point is approximately $(2.11, 3.01)$.

---

### IT-2: Vector Method for a Geometry Problem (with Vectors)

**Question:**

In triangle $ABC$, the point $D$ lies on $BC$ such that $BD : DC = 2 : 1$. The point $E$ is the midpoint of $AC$. The lines $AD$ and $BE$ intersect at point $F$.

Using position vectors with origin at $A$, and taking $\overrightarrow{AB} = \mathbf{b}$ and $\overrightarrow{AC} = \mathbf{c}$:

**(a)** Find the position vector of $F$ in terms of $\mathbf{b}$ and $\mathbf{c}$.

**(b)** Find the ratio $AF : FD$.

**(c)** If $|\mathbf{b}| = 5$, $|\mathbf{c}| = 7$, and $\mathbf{b} \cdot \mathbf{c} = 15$, find $|\overrightarrow{AF}|$.

[Difficulty: hard. Tests vector methods for concurrency problems and application of the dot product.]

**Solution:**

**(a)** Express all points in terms of $\mathbf{b}$ and $\mathbf{c}$:

- $\overrightarrow{OB} = \mathbf{b}$, $\overrightarrow{OC} = \mathbf{c}$ (since origin is at $A$)
- $\overrightarrow{OD} = \overrightarrow{OB} + \frac{2}{3}\overrightarrow{BC} = \mathbf{b} + \frac{2}{3}(\mathbf{c} - \mathbf{b}) = \frac{1}{3}\mathbf{b} + \frac{2}{3}\mathbf{c}$
- $\overrightarrow{OE} = \frac{1}{2}\mathbf{c}$

Point $F$ lies on $AD$: $\overrightarrow{OF} = \overrightarrow{OA} + s\overrightarrow{AD} = s\left(\frac{1}{3}\mathbf{b} + \frac{2}{3}\mathbf{c}\right)$ for some $0 \leq s \leq 1$.

Point $F$ also lies on $BE$: $\overrightarrow{OF} = \overrightarrow{OB} + t\overrightarrow{BE} = \mathbf{b} + t\left(\frac{1}{2}\mathbf{c} - \mathbf{b}\right) = (1-t)\mathbf{b} + \frac{t}{2}\mathbf{c}$ for some $0 \leq t \leq 1$.

Equating coefficients of $\mathbf{b}$ and $\mathbf{c}$:

$$\frac{s}{3} = 1 - t \quad \text{and} \quad \frac{2s}{3} = \frac{t}{2}$$

From the second equation: $t = \frac{4s}{3}$.

Substituting into the first: $\frac{s}{3} = 1 - \frac{4s}{3}$, giving $\frac{5s}{3} = 1$, so $s = \frac{3}{5}$.

$$\overrightarrow{OF} = \frac{3}{5}\left(\frac{1}{3}\mathbf{b} + \frac{2}{3}\mathbf{c}\right) = \frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}$$

**(b)** $AF : FD$. Since $s = 3/5$, point $F$ divides $AD$ in the ratio $s : (1-s) = 3/5 : 2/5 = 3 : 2$.

So $AF : FD = 3 : 2$.

**(c)**

$$\overrightarrow{AF} = \frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}$$

$$|\overrightarrow{AF}|^2 = \left(\frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}\right) \cdot \left(\frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}\right)$$

$$= \frac{1}{25}|\mathbf{b}|^2 + \frac{4}{25}\mathbf{b}\cdot\mathbf{c} + \frac{4}{25}|\mathbf{c}|^2$$

$$= \frac{1}{25}(25) + \frac{4}{25}(15) + \frac{4}{25}(49)$$

$$= 1 + \frac{60}{25} + \frac{196}{25}$$

$$= 1 + \frac{256}{25} = \frac{281}{25}$$

$$|\overrightarrow{AF}| = \frac{\sqrt{281}}{5}$$

---

### IT-3: Parametric Curve via Function Composition (with Functions)

**Question:**

A curve is defined parametrically by:

$$x = t^2 - 2t, \quad y = (t^2 - 2t)^2 - 2(t^2 - 2t)$$

for $t \in \mathbb{R}$.

**(a)** Show that $y = x^2 - 2x$ and hence identify the curve as a standard form.

**(b)** Find the coordinates of the turning points of the curve and determine their nature.

**(c)** The curve is translated so that its minimum point moves to the origin. Find the equation of the translated curve in the form $y = ax^2 + bx + c$.

[Difficulty: hard. Tests recognition of function composition in parametric equations and completing the square.]

**Solution:**

**(a)** Let $f(t) = t^2 - 2t = (t-1)^2 - 1$.

Then $x = f(t)$ and $y = f(f(t)) = f(x)$.

Therefore $y = x^2 - 2x = (x-1)^2 - 1$.

This is a parabola with vertex at $(1, -1)$, opening upward.

**(b)** $y = x^2 - 2x$. Since $x = (t-1)^2 - 1 \geq -1$ for all $t$, the domain of the curve is $x \geq -1$.

$\frac{dy}{dx} = 2x - 2$. Setting this to zero: $x = 1$.

At $x = 1$: $y = 1 - 2 = -1$. This is the vertex.

$\frac{d^2y}{dx^2} = 2 > 0$, confirming a minimum at $(1, -1)$.

The turning point is $(1, -1)$, which is a minimum.

Note: there are no other turning points. The curve is a standard parabola restricted to $x \geq -1$.

At $x = -1$ (when $t = 1$): $y = 1 + 2 = 3$. This is an endpoint of the parametric curve, not a turning point of the parabola itself.

**(c)** The translation moves $(1, -1)$ to $(0, 0)$. The translation vector is $(-1, 1)$.

Let $X = x - 1$ and $Y = y + 1$. Then $y = (x-1)^2 - 1$ becomes $Y - 1 = X^2 - 1$, i.e.:

$$Y = X^2$$

In terms of the original variables (after translation, using $x$ and $y$ for the new coordinates):

$$y = x^2$$

So $a = 1$, $b = 0$, $c = 0$.
