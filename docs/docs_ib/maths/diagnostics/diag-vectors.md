---
title: Vectors — Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for vectors covering skew lines, scalar triple product, reflection in planes, and point-to-plane distance.
slug: diag-vectors
hide_table_of_contents: true
---

# Vectors — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for vectors.

### UT-1: Skew Lines — Classification and Shortest Distance

**Question:**

Two lines are given by:

$$L_1: \mathbf{r} = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} + \lambda \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$$

$$L_2: \mathbf{r} = \begin{pmatrix} 3 \\ 1 \\ 4 \end{pmatrix} + \mu \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$$

**(a)** Determine whether $L_1$ and $L_2$ are parallel, intersecting, or skew.

**(b)** If skew, find the shortest distance between them.

**(c)** A student claims: "Since the direction vectors are not scalar multiples, the lines must intersect." Explain why this reasoning is wrong.

[Difficulty: hard. Tests classification of lines in 3D and computation of shortest distance between skew lines.]

**Solution:**

**(a)** The direction vectors are $\mathbf{d}_1 = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$ and $\mathbf{d}_2 = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$.

These are not scalar multiples, so the lines are not parallel.

To check for intersection, set the position vectors equal:

$$1 + 2\lambda = 3 + \mu \implies 2\lambda - \mu = 2 \quad \text{(i)}$$

$$2 + \lambda = 1 - \mu \implies \lambda + \mu = -1 \quad \text{(ii)}$$

$$0 - \lambda = 4 + 2\mu \implies -\lambda - 2\mu = 4 \quad \text{(iii)}$$

From (i) and (ii): adding gives $3\lambda = 1$, so $\lambda = \frac{1}{3}$, then $\mu = -\frac{4}{3}$.

Check (iii): $-\frac{1}{3} - 2\!\left(-\frac{4}{3}\right) = -\frac{1}{3} + \frac{8}{3} = \frac{7}{3} \neq 4$.

The system is inconsistent, so the lines do **not** intersect. They are **skew**.

**(b)** The shortest distance between skew lines is:

$$d = \frac{\left|(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)\right|}{\lvert \mathbf{d}_1 \times \mathbf{d}_2 \rvert}$$

$$\mathbf{a}_2 - \mathbf{a}_1 = \begin{pmatrix} 3 \\ 1 \\ 4 \end{pmatrix} - \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}$$

$$\mathbf{d}_1 \times \mathbf{d}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 1 & -1 \\ 1 & -1 & 2 \end{vmatrix} = \begin{pmatrix} 1 \\ -5 \\ -3 \end{pmatrix}$$

$$\lvert \mathbf{d}_1 \times \mathbf{d}_2 \rvert = \sqrt{1 + 25 + 9} = \sqrt{35}$$

$$(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2) = 2(1) + (-1)(-5) + 4(-3) = 2 + 5 - 12 = -5$$

$$d = \frac{5}{\sqrt{35}} = \frac{5\sqrt{35}}{35} = \frac{\sqrt{35}}{7}$$

**(c)** The student's error is that in three dimensions, two lines that are not parallel can still fail to intersect. In 2D, non-parallel lines always intersect, but in 3D they can be skew — they pass at different "heights" and never meet. The student has incorrectly generalised the 2D result.

---

### UT-2: Point-to-Plane Distance from Three Points

**Question:**

Three points are given: $A(1, 0, 2)$, $B(3, 1, -1)$, and $C(2, 2, 3)$.

**(a)** Find the Cartesian equation of the plane $\Pi$ passing through $A$, $B$, and $C$.

**(b)** Find the perpendicular distance from the origin to $\Pi$.

**(c)** A student computes $\overrightarrow{AB} \times \overrightarrow{AC}$ and gets $\begin{pmatrix} 3 \\ 3 \\ 3 \end{pmatrix}$, concluding the plane equation is $x + y + z = 3$. Identify the error.

[Difficulty: hard. Tests plane from three points, normal vector computation, and point-to-plane distance.]

**Solution:**

**(a)**

$$\overrightarrow{AB} = \begin{pmatrix} 2 \\ 1 \\ -3 \end{pmatrix}, \quad \overrightarrow{AC} = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$$

$$\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 1 & -3 \\ 1 & 2 & 1 \end{vmatrix}$$

$$= \mathbf{i}(1 + 6) - \mathbf{j}(2 + 3) + \mathbf{k}(4 - 1) = \begin{pmatrix} 7 \\ -5 \\ 3 \end{pmatrix}$$

Using point $A(1, 0, 2)$:

$$7(x - 1) - 5(y - 0) + 3(z - 2) = 0$$

$$7x - 7 - 5y + 3z - 6 = 0$$

$$7x - 5y + 3z = 13$$

**(b)** The distance from the origin $(0, 0, 0)$ to the plane $7x - 5y + 3z = 13$ is:

$$d = \frac{|7(0) - 5(0) + 3(0) - 13|}{\sqrt{49 + 25 + 9}} = \frac{13}{\sqrt{83}}$$

**(c)** The student's cross product computation is wrong. The correct cross product is $\begin{pmatrix} 7 \\ -5 \\ 3 \end{pmatrix}$, not $\begin{pmatrix} 3 \\ 3 \\ 3 \end{pmatrix}$. Specifically:

- The $x$-component: $1 \times 1 - (-3) \times 2 = 1 + 6 = 7$, not $3$.
- The $y$-component: $-(2 \times 1 - (-3) \times 1) = -(2 + 3) = -5$, not $3$.
- The $z$-component: $2 \times 2 - 1 \times 1 = 4 - 1 = 3$, which coincidentally matches.

---

## Integration Tests

> Tests synthesis of vectors with other topics.

### IT-1: Volume of a Tetrahedron — Scalar Triple Product

**Question:**

Four points are given: $O(0, 0, 0)$, $A(2, 1, 0)$, $B(1, 3, 2)$, and $C(0, 1, 4)$.

**(a)** Find the volume of tetrahedron $OABC$.

**(b)** Show that the four points are coplanar if and only if the scalar triple product $[\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}] = 0$.

[Difficulty: hard. Combines scalar triple product with geometric interpretation.]

**Solution:**

**(a)** The volume of a tetrahedron with vertices $O$, $A$, $B$, $C$ is:

$$V = \frac{1}{6}\lvert [\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}] \rvert$$

$$\overrightarrow{OA} = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}, \quad \overrightarrow{OB} = \begin{pmatrix} 1 \\ 3 \\ 2 \end{pmatrix}, \quad \overrightarrow{OC} = \begin{pmatrix} 0 \\ 1 \\ 4 \end{pmatrix}$$

$$[\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}] = \overrightarrow{OA} \cdot (\overrightarrow{OB} \times \overrightarrow{OC})$$

$$\overrightarrow{OB} \times \overrightarrow{OC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 3 & 2 \\ 0 & 1 & 4 \end{vmatrix} = \begin{pmatrix} 10 \\ -4 \\ 1 \end{pmatrix}$$

$$[\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}] = 2(10) + 1(-4) + 0(1) = 20 - 4 = 16$$

$$V = \frac{16}{6} = \frac{8}{3}$$

**(b)** The scalar triple product $[\mathbf{a}, \mathbf{b}, \mathbf{c}] = \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ equals the volume of the parallelepiped spanned by $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$.

If the four points are coplanar, the three vectors $\overrightarrow{OA}$, $\overrightarrow{OB}$, $\overrightarrow{OC}$ all lie in the same plane, meaning the parallelepiped they span has zero volume (it is flat). Therefore $[\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}] = 0$.

Conversely, if the scalar triple product is zero, then $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 0$, which means $\mathbf{a}$ is perpendicular to $\mathbf{b} \times \mathbf{c}$. Since $\mathbf{b} \times \mathbf{c}$ is perpendicular to the plane containing $\mathbf{b}$ and $\mathbf{c}$, it follows that $\mathbf{a}$ lies in the same plane as $\mathbf{b}$ and $\mathbf{c}$. Hence the four points are coplanar.

---

### IT-2: Reflection of a Point in a Plane

**Question:**

The plane $\Pi$ has equation $2x - y + 2z = 5$. The point $P$ has coordinates $(1, 3, -1)$.

**(a)** Find the coordinates of the reflection $P'$ of $P$ in the plane $\Pi$.

**(b)** Find the equation of the line $PP'$ and verify that the midpoint of $PP'$ lies on $\Pi$.

[Difficulty: hard. Combines line-plane intersection with vector geometry.]

**Solution:**

**(a)** The normal to $\Pi$ is $\mathbf{n} = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$.

The line through $P$ perpendicular to $\Pi$ is:

$$\mathbf{r} = \begin{pmatrix} 1 \\ 3 \\ -1 \end{pmatrix} + t\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$$

Find the foot of the perpendicular (intersection with $\Pi$):

$$2(1 + 2t) - (3 - t) + 2(-1 + 2t) = 5$$

$$2 + 4t - 3 + t - 2 + 4t = 5$$

$$9t - 3 = 5 \implies 9t = 8 \implies t = \frac{8}{9}$$

Foot of perpendicular:

$$M = \begin{pmatrix} 1 + \frac{16}{9} \\ 3 - \frac{8}{9} \\ -1 + \frac{16}{9} \end{pmatrix} = \begin{pmatrix} \frac{25}{9} \\ \frac{19}{9} \\ \frac{7}{9} \end{pmatrix}$$

The reflection $P'$ is such that $M$ is the midpoint of $PP'$:

$$M = \frac{P + P'}{2} \implies P' = 2M - P = 2\begin{pmatrix} \frac{25}{9} \\ \frac{19}{9} \\ \frac{7}{9} \end{pmatrix} - \begin{pmatrix} 1 \\ 3 \\ -1 \end{pmatrix} = \begin{pmatrix} \frac{41}{9} \\ \frac{11}{9} \\ \frac{23}{9} \end{pmatrix}$$

**(b)** The line $PP'$ passes through $P(1, 3, -1)$ and $P'\!\left(\frac{41}{9}, \frac{11}{9}, \frac{23}{9}\right)$:

Direction: $\begin{pmatrix} \frac{41}{9} - 1 \\ \frac{11}{9} - 3 \\ \frac{23}{9} + 1 \end{pmatrix} = \begin{pmatrix} \frac{32}{9} \\ -\frac{16}{9} \\ \frac{32}{9} \end{pmatrix} = \frac{16}{9}\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$

This is parallel to $\mathbf{n} = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$, confirming $PP'$ is perpendicular to $\Pi$.

Verify midpoint: $\frac{1}{2}\!\left[\begin{pmatrix} 1 \\ 3 \\ -1 \end{pmatrix} + \begin{pmatrix} \frac{41}{9} \\ \frac{11}{9} \\ \frac{23}{9} \end{pmatrix}\right] = \begin{pmatrix} \frac{25}{9} \\ \frac{19}{9} \\ \frac{7}{9} \end{pmatrix}$.

Check on $\Pi$: $2\!\left(\frac{25}{9}\right) - \frac{19}{9} + 2\!\left(\frac{7}{9}\right) = \frac{50 - 19 + 14}{9} = \frac{45}{9} = 5$. Confirmed.
