---
title: Vectors in Three Dimensions
description: IB Mathematics — vector operations, dot and cross products, equations of lines and planes, angles, and shortest distances.
slug: vectors-in-three-dimensions
---

## Vector Algebra

### Representation in $\mathbb{R}^3$

A vector $\mathbf{a}$ in three-dimensional space with components $a_1, a_2, a_3$ is written:

$$\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$$

where $\mathbf{i}, \mathbf{j}, \mathbf{k}$ are the standard basis vectors along the $x$, $y$, and $z$
axes respectively.

### Vector Operations

For $\mathbf{a} = (a_1, a_2, a_3)$ and $\mathbf{b} = (b_1, b_2, b_3)$, and $\lambda \in \mathbb{R}$:

$$\mathbf{a} + \mathbf{b} = (a_1 + b_1,\, a_2 + b_2,\, a_3 + b_3)$$

$$\lambda \mathbf{a} = (\lambda a_1,\, \lambda a_2,\, \lambda a_3)$$

### Magnitude

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

A **unit vector** in the direction of $\mathbf{a}$ is $\hat{\mathbf{a}} = \dfrac{\mathbf{a}}{|\mathbf{a}|}$.

### Distance Between Points

The distance between $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$ is:

$$AB = |\overrightarrow{AB}| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

---

## The Scalar (Dot) Product

### Definition

The **scalar product** (or **dot product**) of $\mathbf{a}$ and $\mathbf{b}$ is:

$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

Equivalently, in geometric form:

$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$$

where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$ ($0 \le \theta \le \pi$).

### Properties

- **Commutative:** $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$
- **Distributive:** $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$
- **Bilinear:** $\mathbf{a} \cdot (\lambda\mathbf{b}) = \lambda(\mathbf{a} \cdot \mathbf{b})$
- $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$
- $\mathbf{i} \cdot \mathbf{i} = \mathbf{j} \cdot \mathbf{j} = \mathbf{k} \cdot \mathbf{k} = 1$
- $\mathbf{i} \cdot \mathbf{j} = \mathbf{j} \cdot \mathbf{k} = \mathbf{k} \cdot \mathbf{i} = 0$

### Angle Between Vectors

$$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$$

**Example.** Find the angle between $\mathbf{a} = (1, 2, -1)$ and $\mathbf{b} = (3, 1, 4)$.

$$\mathbf{a} \cdot \mathbf{b} = 3 + 2 - 4 = 1$$

$$|\mathbf{a}| = \sqrt{1 + 4 + 1} = \sqrt{6}, \qquad |\mathbf{b}| = \sqrt{9 + 1 + 16} = \sqrt{26}$$

$$\cos\theta = \frac{1}{\sqrt{156}} \implies \theta \approx 85.4\,{}^{\circ}$$

### Perpendicularity

Two non-zero vectors are **perpendicular** (orthogonal) if and only if:

$$\mathbf{a} \cdot \mathbf{b} = 0$$

**Example.** Find a vector perpendicular to both $(1, 2, 3)$ and $(4, 5, 6)$.

We need $\mathbf{n} = (x, y, z)$ such that $x + 2y + 3z = 0$ and $4x + 5y + 6z = 0$. Let $z = t$:

$$x + 2y = -3t, \qquad 4x + 5y = -6t$$

From the first: $x = -3t - 2y$. Substituting: $-12t - 8y + 5y = -6t \implies y = -2t$.

$x = -3t + 4t = t$. So $\mathbf{n} = t(1, -2, 1)$. Taking $t = 1$: $\mathbf{n} = (1, -2, 1)$.

---

## The Vector (Cross) Product

### Definition

The **vector product** (or **cross product**) of $\mathbf{a}$ and $\mathbf{b}$ is:

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}$$

### Geometric Interpretation

$$|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$$

The direction of $\mathbf{a} \times \mathbf{b}$ is **perpendicular to both** $\mathbf{a}$ and
$\mathbf{b}$, given by the right-hand rule.

### Properties

- **Anti-commutative:** $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$
- **Distributive over addition:** $\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}$
- $\mathbf{a} \times \mathbf{a} = \mathbf{0}$
- $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ if and only if $\mathbf{a}$ and $\mathbf{b}$ are parallel (or one is zero)
- $\mathbf{i} \times \mathbf{j} = \mathbf{k}$, $\mathbf{j} \times \mathbf{k} = \mathbf{i}$, $\mathbf{k} \times \mathbf{i} = \mathbf{j}$

### Area of a Parallelogram and Triangle

The area of the parallelogram spanned by $\mathbf{a}$ and $\mathbf{b}$ is:

$$A = |\mathbf{a} \times \mathbf{b}|$$

The area of the triangle with sides represented by $\mathbf{a}$ and $\mathbf{b}$ is:

$$A = \frac{1}{2}|\mathbf{a} \times \mathbf{b}|$$

**Example.** Find the area of the triangle with vertices $A(1, 0, 0)$, $B(0, 2, 0)$, $C(0, 0, 3)$.

$$\overrightarrow{AB} = (-1, 2, 0), \qquad \overrightarrow{AC} = (-1, 0, 3)$$

$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} 6 - 0 \\ 0 - (-3) \\ 0 - (-2) \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$$

$$A = \frac{1}{2}\sqrt{36 + 9 + 4} = \frac{1}{2}\sqrt{49} = \frac{7}{2}$$

---

## Equations of Lines in 3D

### Vector Form

A line through point $A$ with position vector $\mathbf{a}$, in the direction of vector $\mathbf{d}$:

$$\mathbf{r} = \mathbf{a} + t\mathbf{d}, \qquad t \in \mathbb{R}$$

### Parametric Form

If $\mathbf{a} = (x_0, y_0, z_0)$ and $\mathbf{d} = (d_1, d_2, d_3)$:

$$x = x_0 + td_1, \qquad y = y_0 + td_2, \qquad z = z_0 + td_3$$

### Cartesian (Symmetric) Form

If $d_1, d_2, d_3 \ne 0$:

$$\frac{x - x_0}{d_1} = \frac{y - y_0}{d_2} = \frac{z - z_0}{d_3}$$

**Example.** Find the vector equation of the line through $(1, 2, 3)$ and $(4, 6, 5)$.

Direction: $\mathbf{d} = (3, 4, 2)$.

$$\mathbf{r} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + t\begin{pmatrix} 3 \\ 4 \\ 2 \end{pmatrix}$$

---

## Equations of Planes

### Vector Form

A plane through point $A$ with position vector $\mathbf{a}$ and normal vector $\mathbf{n}$:

$$\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n} = d$$

where $d$ is a constant.

### Cartesian Form

If $\mathbf{n} = (a, b, c)$ and the plane passes through $(x_0, y_0, z_0)$:

$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$

or equivalently: $ax + by + cz = d$ where $d = ax_0 + by_0 + cz_0$.

### Parametric Form

A plane through point $A$ containing two non-parallel direction vectors $\mathbf{d}_1$ and $\mathbf{d}_2$:

$$\mathbf{r} = \mathbf{a} + s\mathbf{d}_1 + t\mathbf{d}_2, \qquad s, t \in \mathbb{R}$$

**Example.** Find the equation of the plane through $(1, 0, 2)$, $(3, 1, 0)$, and $(0, -1, 1)$.

$$\overrightarrow{AB} = (2, 1, -2), \qquad \overrightarrow{AC} = (-1, -1, -1)$$

Normal: $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$:

$$\mathbf{n} = \begin{pmatrix} (-1)(-1) - (-2)(-1) \\ (-2)(-1) - (2)(-1) \\ (2)(-1) - (1)(-1) \end{pmatrix} = \begin{pmatrix} -1 \\ 4 \\ -1 \end{pmatrix}$$

Plane: $-1(x - 1) + 4(y - 0) - 1(z - 2) = 0$, i.e. $-x + 4y - z + 3 = 0$.

---

## Angles Between Lines and Planes

### Angle Between Two Lines

If two lines have direction vectors $\mathbf{d}_1$ and $\mathbf{d}_2$:

$$\cos\theta = \frac{|\mathbf{d}_1 \cdot \mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$$

### Angle Between Two Planes

If two planes have normal vectors $\mathbf{n}_1$ and $\mathbf{n}_2$:

$$\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$$

### Angle Between a Line and a Plane

If a line has direction $\mathbf{d}$ and a plane has normal $\mathbf{n}$, the angle $\phi$ between the
line and the plane satisfies:

$$\sin\phi = \frac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$$

(The angle between the line and the normal is $\theta = 90\,{}^{\circ} - \phi$.)

---

## Shortest Distances

### Distance from a Point to a Line

The shortest distance from point $P$ with position vector $\mathbf{p}$ to the line
$\mathbf{r} = \mathbf{a} + t\mathbf{d}$ is:

$$d = \frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{d}|}{|\mathbf{d}|}$$

### Distance from a Point to a Plane

The shortest distance from point $P(x_1, y_1, z_1)$ to the plane $ax + by + cz + d = 0$ is:

$$D = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

**Example.** Find the distance from $(1, 2, 3)$ to the plane $2x - y + 2z = 5$.

$$D = \frac{|2(1) - 1(2) + 2(3) - 5|}{\sqrt{4 + 1 + 4}} = \frac{|2 - 2 + 6 - 5|}{3} = \frac{1}{3}$$

### Distance Between Two Skew Lines

Two lines in 3D that are neither parallel nor intersecting are **skew**. The shortest distance
between the line $\mathbf{r}_1 = \mathbf{a}_1 + t\mathbf{d}_1$ and the line
$\mathbf{r}_2 = \mathbf{a}_2 + s\mathbf{d}_2$ is:

$$d = \frac{|(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|}{|\mathbf{d}_1 \times \mathbf{d}_2|}$$

### Distance Between Parallel Planes

For parallel planes $ax + by + cz = d_1$ and $ax + by + cz = d_2$:

$$D = \frac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}$$

---

## Vector Triple Product

### Scalar Triple Product

The **scalar triple product** is:

$$[\mathbf{a}, \mathbf{b}, \mathbf{c}] = \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$$

Its absolute value equals the volume of the parallelepiped spanned by $\mathbf{a}$, $\mathbf{b}$, and
$\mathbf{c}$.

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

### Coplanarity Test

Three vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ are **coplanar** if and only if:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 0$$

### Properties

- $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a}) = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$
- Cyclic permutation preserves the value; swapping any two vectors negates it.

---

## Vector Projections

### Projection of $\mathbf{a}$ onto $\mathbf{b}$

The **scalar projection** (component) of $\mathbf{a}$ along $\mathbf{b}$:

$$\mathrm{comp}_{\mathbf{b}}\,\mathbf{a} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{b}|} = |\mathbf{a}|\cos\theta$$

The **vector projection** of $\mathbf{a}$ onto $\mathbf{b}$:

$$\mathrm{proj}_{\mathbf{b}}\,\mathbf{a} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{b}|^2}\,\mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{b} \cdot \mathbf{b}}\,\mathbf{b}$$

The component of $\mathbf{a}$ perpendicular to $\mathbf{b}$ is:

$$\mathbf{a}_{\perp} = \mathbf{a} - \mathrm{proj}_{\mathbf{b}}\,\mathbf{a}$$

**Example.** Find the projection of $\mathbf{a} = (3, 1, -2)$ onto $\mathbf{b} = (1, 0, 2)$.

$$\mathbf{a} \cdot \mathbf{b} = 3 + 0 - 4 = -1, \qquad |\mathbf{b}|^2 = 1 + 4 = 5$$

$$\mathrm{proj}_{\mathbf{b}}\,\mathbf{a} = \frac{-1}{5}(1, 0, 2) = \left(-\frac{1}{5},\, 0,\, -\frac{2}{5}\right)$$

---

## Intersection of Lines and Planes

### Line-Line Intersection

Two lines $\mathbf{r}_1 = \mathbf{a}_1 + t\mathbf{d}_1$ and $\mathbf{r}_2 = \mathbf{a}_2 + s\mathbf{d}_2$
intersect if and only if the system

$$\mathbf{a}_1 + t\mathbf{d}_1 = \mathbf{a}_2 + s\mathbf{d}_2$$

has a solution for $(t, s)$. If the direction vectors are not parallel but the system has no
solution, the lines are skew.

### Line-Plane Intersection

Substitute the parametric form of the line into the equation of the plane $ax + by + cz = d$ and
solve for the parameter.

**Example.** Find where the line $\mathbf{r} = (1, 2, 0) + t(1, -1, 3)$ meets the plane
$x + 2y - z = 5$.

Substituting: $(1 + t) + 2(2 - t) - 3t = 5 \implies 1 + t + 4 - 2t - 3t = 5 \implies -4t = 0$.

$t = 0$, so the intersection point is $(1, 2, 0)$.

### Plane-Plane Intersection

Two planes $\mathbf{r} \cdot \mathbf{n}_1 = d_1$ and $\mathbf{r} \cdot \mathbf{n}_2 = d_2$ intersect
in a line. The direction of this line is $\mathbf{d} = \mathbf{n}_1 \times \mathbf{n}_2$ (provided the
planes are not parallel).

If $\mathbf{n}_1$ and $\mathbf{n}_2$ are parallel (i.e. $\mathbf{n}_1 = k\mathbf{n}_2$), the planes
are either coincident (same plane) or parallel and distinct (no intersection).

---

## Direction Cosines and Direction Ratios

### Direction Cosines

For a vector $\mathbf{a} = (a_1, a_2, a_3)$ with $|\mathbf{a}| \ne 0$, the **direction cosines** are:

$$l = \cos\alpha = \frac{a_1}{|\mathbf{a}|}, \qquad m = \cos\beta = \frac{a_2}{|\mathbf{a}|}, \qquad n = \cos\gamma = \frac{a_3}{|\mathbf{a}|}$$

where $\alpha, \beta, \gamma$ are the angles between $\mathbf{a}$ and the $x$, $y$, $z$ axes
respectively.

They satisfy: $l^2 + m^2 + n^2 = 1$.

### Direction Ratios

Any triple of numbers $(a_1, a_2, a_3)$ proportional to the direction cosines are **direction ratios**.
For a vector $\mathbf{a}$, its components are direction ratios.

---

## Worked Problems

### Problem: Shortest Distance Between Skew Lines

Find the shortest distance between $\mathbf{r}_1 = (0, 1, 0) + t(1, 0, -1)$ and
$\mathbf{r}_2 = (0, 0, 1) + s(0, 1, 1)$.

$\mathbf{a}_2 - \mathbf{a}_1 = (0, -1, 1)$, $\mathbf{d}_1 = (1, 0, -1)$, $\mathbf{d}_2 = (0, 1, 1)$.

$$\mathbf{d}_1 \times \mathbf{d}_2 = \begin{pmatrix} 0 - (-1) \\ -1 - 0 \\ 1 - 0 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$$

$$|\mathbf{d}_1 \times \mathbf{d}_2| = \sqrt{1 + 1 + 1} = \sqrt{3}$$

$$(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2) = 0 + 1 + 1 = 2$$

$$d = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$$

### Problem: Reflection of a Point in a Plane

Find the reflection of the point $P(1, 2, 3)$ in the plane $2x - y + z = 4$.

The normal is $\mathbf{n} = (2, -1, 1)$, $|\mathbf{n}| = \sqrt{6}$.

The foot of the perpendicular from $P$ to the plane is found by solving the line
$\mathbf{r} = (1, 2, 3) + t(2, -1, 1)$ intersecting the plane:

$$2(1 + 2t) - (2 - t) + (3 + t) = 4 \implies 2 + 4t - 2 + t + 3 + t = 4 \implies 6t = 1 \implies t = \frac{1}{6}$$

Foot $F = \left(1 + \dfrac{2}{6},\, 2 - \dfrac{1}{6},\, 3 + \dfrac{1}{6}\right) = \left(\dfrac{4}{3},\, \dfrac{11}{6},\, \dfrac{19}{6}\right)$.

The reflection $P'$ satisfies $F = \dfrac{P + P'}{2}$:

$$P' = 2F - P = \left(\dfrac{8}{3} - 1,\, \dfrac{11}{3} - 2,\, \dfrac{19}{3} - 3\right) = \left(\dfrac{5}{3},\, \dfrac{5}{3},\, \dfrac{10}{3}\right)$$

:::warning Common Pitfall

The cross product is defined only in $\mathbb{R}^3$ (and $\mathbb{R}^7$). Do not attempt to compute
cross products in $\mathbb{R}^2$ directly. Also, $\mathbf{a} \times \mathbf{b} \ne \mathbf{b} \times
\mathbf&lbrace;a&rbrace;$: the cross product is anti-commutative.

:::
