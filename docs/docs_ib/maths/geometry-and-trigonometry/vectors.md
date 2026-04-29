---
title: Vectors
tags:
- maths
slug: vectors
description: Comprehensive guide to vectors for the International Baccalaureate.
---


## Vector Line

### Parametric Form

A vector line ($r$) in parametric form takes a scalar parameter ($\gamma$) to produce each point on
the line. The line ($\bm{r}(\gamma)$) is a sum of a point on a line ($\bm{a}$ or $\bm{r_0}$) and a
direction vector ($\bm{b}$) scaled by the parameter $\gamma$:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;r&rbrace;(\gamma) = \bm&lbrace;r_0&rbrace; + \gamma\bm&lbrace;b&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Cartesian Form

Vectors in cartesian form define a vector by the definition of each coordinate of the unit vector:

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;x-x_0&rbrace;&lbrace;l&rbrace; = \frac&lbrace;y-y_0&rbrace;&lbrace;m&rbrace; = \frac&lbrace;z-z_0&rbrace;&lbrace;n&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Conversion Between Parametric Form and Cartesian Form

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;r&rbrace;(\gamma) = \bm&lbrace;r_0&rbrace; + \gamma\bm&lbrace;b&rbrace;\\
    \begin&lbrace;pmatrix&rbrace;
        x \\ y \\ z
    \end&lbrace;pmatrix&rbrace;
    =
    \begin&lbrace;pmatrix&rbrace;
        x_0 \\ y_0 \\ z_0
    \end&lbrace;pmatrix&rbrace;
    +
    \gamma
    \begin&lbrace;pmatrix&rbrace;
       l \\ m \\ n
    \end&lbrace;pmatrix&rbrace;\\
    x = x_0 + \gamma l, \quad y = y_0 + \gamma m, \quad z = z_0 + \gamma n\\
    \gamma = \frac&lbrace;x-x_0&rbrace;&lbrace;l&rbrace; = \frac&lbrace;y-y_0&rbrace;&lbrace;m&rbrace; = \frac&lbrace;z-z_0&rbrace;&lbrace;n&rbrace;
\end&lbrace;aligned&rbrace;
$$

## Vector Plane

### Parametric Form

A vector plane ($\bm{r}$) given in parametric form is defined with the sum of a point ($\bm{a}$ or
$\bm{r_0}$) on the plane and two direction vector ($\bm{b}$ and $\bm{c}$) scaled by scalar parameter
($\gamma$ and $\mu$):

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;r&rbrace;(\gamma, \mu) = \bm&lbrace;r_0&rbrace; + \gamma \bm&lbrace;b&rbrace; + \mu \bm&lbrace;c&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Point-normal Form

A vector plane ($\bm{r}$) defined in point-normal form is defined by the dot product between the
normal ($\hat{n}$) and the direction vectors ($\bm{r}-\bm{r_0}$ or $\gamma \bm{b} + \mu \bm{c}$):

$$
\begin&lbrace;aligned&rbrace;
    \left(\bm&lbrace;r&rbrace;-\bm&lbrace;r_0&rbrace;\right) \cdot \hat&lbrace;n&rbrace; = |\bm&lbrace;r&rbrace;-\bm&lbrace;r_0&rbrace;||\hat&lbrace;n&rbrace;|\sin \frac&lbrace;\pi&rbrace;&lbrace;2&rbrace; = 0\\
    \bm&lbrace;r&rbrace; \cdot \hat&lbrace;n&rbrace; = \bm&lbrace;r_0&rbrace; \cdot \hat&lbrace;n&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Cartesian Form

A vector plane ($\bm{r}$) defined in cartesian form is extended from the point-normal form by
expressing normal vector as its individual axis ($x,y,z$):

$$
\begin&lbrace;aligned&rbrace;
    \hat&lbrace;n&rbrace; =
    \begin&lbrace;pmatrix&rbrace;
        a \\ b \\ c
    \end&lbrace;pmatrix&rbrace;, \quad
    \bm&lbrace;r&rbrace; =
    \begin&lbrace;pmatrix&rbrace;
        x \\ y \\ z
    \end&lbrace;pmatrix&rbrace;, \quad
    \bm&lbrace;r_0&rbrace; =
    \begin&lbrace;pmatrix&rbrace;
        x_0 \\ y_0 \\ z_0
    \end&lbrace;pmatrix&rbrace;\\
    a(x-x_0) + b(y-y_0) + c(z-z_0) = 0\\
    ax + by + cz = ax_0 + by_0 + cz_0
\end&lbrace;aligned&rbrace;
$$

Since $ax_0 + by_0 + cz_0$ produce a constant, the formula booklet uses a single constant $d$ to
represent it:

$$
\begin&lbrace;aligned&rbrace;
    ax + by + cz = d
\end&lbrace;aligned&rbrace;
$$

## Vector Fundamentals

### Vector Representation

A vector $\bm{v}$ in 3D space is represented as a column vector:

$$
\bm&lbrace;v&rbrace; =
\begin&lbrace;pmatrix&rbrace;
    v_x \\ v_y \\ v_z
\end&lbrace;pmatrix&rbrace;
$$

where $v_x$, $v_y$, $v_z$ are the components along the $x$, $y$, and $z$ axes respectively.

### Magnitude (Modulus)

The magnitude of a vector is its length:

$$
|\bm&lbrace;v&rbrace;| = \sqrt&lbrace;v_x^2 + v_y^2 + v_z^2&rbrace;
$$

### Unit Vector

A unit vector has magnitude $1$. The unit vector in the direction of $\bm{v}$ is:

$$
\hat&lbrace;v&rbrace; = \frac&lbrace;\bm&lbrace;v&rbrace;&rbrace;&lbrace;|\bm&lbrace;v&rbrace;|&rbrace;
$$

### Position Vector

A position vector describes the position of a point relative to the origin $O$:

$$
\overrightarrow&lbrace;OP&rbrace; =
\begin&lbrace;pmatrix&rbrace;
    x \\ y \\ z
\end&lbrace;pmatrix&rbrace;
$$

### Vector Addition and Subtraction

$$
\bm&lbrace;a&rbrace; + \bm&lbrace;b&rbrace; =
\begin&lbrace;pmatrix&rbrace;
    a_x + b_x \\ a_y + b_y \\ a_z + b_z
\end&lbrace;pmatrix&rbrace;, \quad
\bm&lbrace;a&rbrace; - \bm&lbrace;b&rbrace; =
\begin&lbrace;pmatrix&rbrace;
    a_x - b_x \\ a_y - b_y \\ a_z - b_z
\end&lbrace;pmatrix&rbrace;
$$

### Scalar Multiplication

$$
k\bm&lbrace;v&rbrace; =
\begin&lbrace;pmatrix&rbrace;
    kv_x \\ kv_y \\ kv_z
\end&lbrace;pmatrix&rbrace;
$$

## Dot Product (Scalar Product)

### Definition

The dot product of two vectors produces a scalar:

$$
\bm&lbrace;a&rbrace; \cdot \bm&lbrace;b&rbrace; = |\bm&lbrace;a&rbrace;||\bm&lbrace;b&rbrace;|\cos\theta
$$

where $\theta$ is the angle between the vectors ($0 \le \theta \le \pi$).

### Component Form

$$
\bm&lbrace;a&rbrace; \cdot \bm&lbrace;b&rbrace; = a_x b_x + a_y b_y + a_z b_z
$$

### Finding the Angle Between Vectors

$$
\cos\theta = \frac&lbrace;\bm&lbrace;a&rbrace; \cdot \bm&lbrace;b&rbrace;&rbrace;&lbrace;|\bm&lbrace;a&rbrace;||\bm&lbrace;b&rbrace;|&rbrace;
$$

### Properties of the Dot Product

- $\bm{a} \cdot \bm{a} = |\bm{a}|^2$
- $\bm{a} \cdot \bm{b} = 0$ if and only if $\bm{a} \perp \bm{b}$ (vectors are perpendicular)
- $\bm{a} \cdot \bm{b} = \bm{b} \cdot \bm{a}$ (commutative)
- $\bm{a} \cdot (\bm{b} + \bm{c}) = \bm{a} \cdot \bm{b} + \bm{a} \cdot \bm{c}$ (distributive)

### Worked Example 1: Dot Product

**Problem:** Find the angle between $\bm{a} = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$ and
$\bm{b} = \begin{pmatrix} 3 \\ 0 \\ 4 \end{pmatrix}$.

**Solution:**

$$
\bm&lbrace;a&rbrace; \cdot \bm&lbrace;b&rbrace; = (2)(3) + (1)(0) + (-1)(4) = 6 + 0 - 4 = 2
$$

$$
|\bm&lbrace;a&rbrace;| = \sqrt&lbrace;4 + 1 + 1&rbrace; = \sqrt&lbrace;6&rbrace;, \quad |\bm&lbrace;b&rbrace;| = \sqrt&lbrace;9 + 0 + 16&rbrace; = 5
$$

$$
\cos\theta = \frac&lbrace;2&rbrace;&lbrace;5\sqrt&lbrace;6&rbrace;&rbrace; = \frac&lbrace;2&rbrace;&lbrace;5\sqrt&lbrace;6&rbrace;&rbrace;, \quad \theta = \arccos\left(\frac&lbrace;2&rbrace;&lbrace;5\sqrt&lbrace;6&rbrace;&rbrace;\right) \approx 80.7°
$$

## Cross Product (Vector Product)

### Definition

The cross product of two vectors produces a vector perpendicular to both:

$$
|\bm&lbrace;a&rbrace; \times \bm&lbrace;b&rbrace;| = |\bm&lbrace;a&rbrace;||\bm&lbrace;b&rbrace;|\sin\theta
$$

The direction is given by the right-hand rule.

### Component Form

$$
\bm&lbrace;a&rbrace; \times \bm&lbrace;b&rbrace; =
\begin&lbrace;pmatrix&rbrace;
    a_y b_z - a_z b_y \\ a_z b_x - a_x b_z \\ a_x b_y - a_y b_x
\end&lbrace;pmatrix&rbrace;
$$

This can be written as a determinant:

$$
\bm&lbrace;a&rbrace; \times \bm&lbrace;b&rbrace; =
\begin&lbrace;vmatrix&rbrace;
    \hat&lbrace;i&rbrace; & \hat&lbrace;j&rbrace; & \hat&lbrace;k&rbrace;\\
    a_x & a_y & a_z\\
    b_x & b_y & b_z
\end&lbrace;vmatrix&rbrace;
$$

### Properties of the Cross Product

- $\bm{a} \times \bm{b} = -(\bm{b} \times \bm{a})$ (anti-commutative)
- $\bm{a} \times \bm{a} = \bm{0}$
- $\bm{a} \times \bm{b} = \bm{0}$ if and only if $\bm{a}$ is parallel to $\bm{b}$
- $|\bm{a} \times \bm{b}|$ gives the area of the parallelogram formed by $\bm{a}$ and $\bm{b}$

### Geometric Interpretations

- **Area of a parallelogram:** $A = |\bm{a} \times \bm{b}|$
- **Area of a triangle:** $A = \frac{1}{2}|\bm{a} \times \bm{b}|$
- **Volume of a parallelepiped:** $V = |\bm{a} \cdot (\bm{b} \times \bm{c})|$ (scalar triple
  product)

### Worked Example 2: Cross Product

**Problem:** Find $\bm{a} \times \bm{b}$ where $\bm{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$
and $\bm{b} = \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$.

**Solution:**

$$
\bm&lbrace;a&rbrace; \times \bm&lbrace;b&rbrace; =
\begin&lbrace;pmatrix&rbrace;
    (2)(6) - (3)(5) \\ (3)(4) - (1)(6) \\ (1)(5) - (2)(4)
\end&lbrace;pmatrix&rbrace;
=
\begin&lbrace;pmatrix&rbrace;
    12 - 15 \\ 12 - 6 \\ 5 - 8
\end&lbrace;pmatrix&rbrace;
=
\begin&lbrace;pmatrix&rbrace;
    -3 \\ 6 \\ -3
\end&lbrace;pmatrix&rbrace;
$$

## Intersections

### Line-Line Intersection

To find the intersection of two lines $\bm{r}_1 = \bm{a}_1 + t\bm{b}_1$ and
$\bm{r}_2 = \bm{a}_2 + s\bm{b}_2$:

1. Set the parametric equations equal and solve for $t$ and $s$
2. If a solution exists, substitute back to find the intersection point
3. If the direction vectors are parallel ($\bm{b}_1 \times \bm{b}_2 = \bm{0}$), the lines are either
   parallel or coincident

### Line-Plane Intersection

To find where line $\bm{r} = \bm{a} + t\bm{b}$ intersects plane $\bm{r} \cdot \hat{n} = d$:

1. Substitute $\bm{r} = \bm{a} + t\bm{b}$ into the plane equation:
   $$
   (\bm&lbrace;a&rbrace; + t\bm&lbrace;b&rbrace;) \cdot \hat&lbrace;n&rbrace; = d
   $$
2. Solve for $t$:
   $$
   t = \frac&lbrace;d - \bm&lbrace;a&rbrace; \cdot \hat&lbrace;n&rbrace;&rbrace;&lbrace;\bm&lbrace;b&rbrace; \cdot \hat&lbrace;n&rbrace;&rbrace;
   $$
3. If $\bm{b} \cdot \hat{n} = 0$, the line is parallel to the plane (no intersection or lies in the
   plane)

### Worked Example 3: Line-Plane Intersection

**Problem:** Find the intersection of line
$\bm{r} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + t\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$
with plane $2x - y + z = 5$.

**Solution:**

Normal vector $\hat{n} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$, $d = 5$.

Point on line: $\bm{a} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$, direction:
$\bm{b} = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$.

$$
\bm&lbrace;a&rbrace; \cdot \hat&lbrace;n&rbrace; = (1)(2) + (0)(-1) + (2)(1) = 4
$$

$$
\bm&lbrace;b&rbrace; \cdot \hat&lbrace;n&rbrace; = (2)(2) + (1)(-1) + (-1)(1) = 2
$$

$$
t = \frac&lbrace;5 - 4&rbrace;&lbrace;2&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;
$$

$$
\bm&lbrace;r&rbrace; = \begin&lbrace;pmatrix&rbrace; 1 \\ 0 \\ 2 \end&lbrace;pmatrix&rbrace; + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\begin&lbrace;pmatrix&rbrace; 2 \\ 1 \\ -1 \end&lbrace;pmatrix&rbrace; = \begin&lbrace;pmatrix&rbrace; 2 \\ 0.5 \\ 1.5 \end&lbrace;pmatrix&rbrace;
$$

Intersection point: $(2, 0.5, 1.5)$.

### Angle Between Line and Plane

The angle $\alpha$ between a line with direction $\bm{b}$ and a plane with normal $\hat{n}$:

$$
\sin\alpha = \frac&lbrace;|\bm&lbrace;b&rbrace; \cdot \hat&lbrace;n&rbrace;|&rbrace;&lbrace;|\bm&lbrace;b&rbrace;||\hat&lbrace;n&rbrace;|&rbrace;
$$

### Angle Between Two Planes

The angle $\theta$ between two planes with normals $\hat{n}_1$ and $\hat{n}_2$:

$$
\cos\theta = \frac&lbrace;|\hat&lbrace;n&rbrace;_1 \cdot \hat&lbrace;n&rbrace;_2|&rbrace;&lbrace;|\hat&lbrace;n&rbrace;_1||\hat&lbrace;n&rbrace;_2|&rbrace;
$$

### Distance from Point to Plane

The perpendicular distance from point $P$ with position vector $\bm{p}$ to plane
$\bm{r} \cdot \hat{n} = d$:

$$
D = \frac&lbrace;|\bm&lbrace;p&rbrace; \cdot \hat&lbrace;n&rbrace; - d|&rbrace;&lbrace;|\hat&lbrace;n&rbrace;|&rbrace;
$$

If $\hat{n}$ is already a unit vector:

$$
D = |\bm&lbrace;p&rbrace; \cdot \hat&lbrace;n&rbrace; - d|
$$

### Distance Between Two Skew Lines

The shortest distance between two skew lines $\bm{r}_1 = \bm{a}_1 + t\bm{b}_1$ and
$\bm{r}_2 = \bm{a}_2 + s\bm{b}_2$:

$$
D = \frac&lbrace;|(\bm&lbrace;a&rbrace;_2 - \bm&lbrace;a&rbrace;_1) \cdot (\bm&lbrace;b&rbrace;_1 \times \bm&lbrace;b&rbrace;_2)|&rbrace;&lbrace;|\bm&lbrace;b&rbrace;_1 \times \bm&lbrace;b&rbrace;_2|&rbrace;
$$

### Worked Example 4: Distance from Point to Plane

**Problem:** Find the distance from $P(1, 2, 3)$ to the plane $2x - y + 2z = 4$.

**Solution:**

Normal vector $\hat{n} = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$,
$|\hat{n}| = \sqrt{4 + 1 + 4} = 3$.

$$
\bm&lbrace;p&rbrace; \cdot \hat&lbrace;n&rbrace; = (1)(2) + (2)(-1) + (3)(2) = 2 - 2 + 6 = 6
$$

$$
D = \frac&lbrace;|6 - 4|&rbrace;&lbrace;3&rbrace; = \frac&lbrace;2&rbrace;&lbrace;3&rbrace;
$$

## Applications to Geometry

### Proving Three Points Are Collinear

Points $A$, $B$, $C$ are collinear if and only if $\overrightarrow{AB} = k\overrightarrow{AC}$ for
some scalar $k$.

### Finding the Foot of a Perpendicular

To find the foot of the perpendicular from point $P$ to line $\bm{r} = \bm{a} + t\bm{b}$:

The foot $F$ satisfies:

$$
\overrightarrow&lbrace;PF&rbrace; \cdot \bm&lbrace;b&rbrace; = 0
$$

Substitute $\bm{F} = \bm{a} + t\bm{b}$ and solve for $t$:

$$
(\bm&lbrace;a&rbrace; + t\bm&lbrace;b&rbrace; - \bm&lbrace;p&rbrace;) \cdot \bm&lbrace;b&rbrace; = 0 \implies t = \frac&lbrace;(\bm&lbrace;p&rbrace; - \bm&lbrace;a&rbrace;) \cdot \bm&lbrace;b&rbrace;&rbrace;&lbrace;|\bm&lbrace;b&rbrace;|^2&rbrace;
$$

:::tip Exam Tip For vector problems, always draw a diagram first. When finding intersections, check
your answer by substituting the point back into both equations. Common errors include sign mistakes
in the cross product and forgetting to take the absolute value in distance formulas.
:::

---

## Worked Example 5: Finding the Equation of a Plane

**Problem:** Find the Cartesian equation of the plane passing through the points $A(1, 2, -1)$,
$B(3, 0, 1)$, and $C(0, 1, 3)$.

**Solution:**

Find two direction vectors in the plane:

$$
\overrightarrow&lbrace;AB&rbrace; = \begin&lbrace;pmatrix&rbrace; 2 \\ -2 \\ 2 \end&lbrace;pmatrix&rbrace;, \quad \overrightarrow&lbrace;AC&rbrace; = \begin&lbrace;pmatrix&rbrace; -1 \\ -1 \\ 4 \end&lbrace;pmatrix&rbrace;
$$

Find the normal vector using the cross product:

$$
\hat&lbrace;n&rbrace; = \overrightarrow&lbrace;AB&rbrace; \times \overrightarrow&lbrace;AC&rbrace; = \begin&lbrace;pmatrix&rbrace; (-2)(4) - (2)(-1) \\ (2)(-1) - (2)(4) \\ (2)(-1) - (-2)(-1) \end&lbrace;pmatrix&rbrace; = \begin&lbrace;pmatrix&rbrace; -8 + 2 \\ -2 - 8 \\ -2 - 2 \end&lbrace;pmatrix&rbrace; = \begin&lbrace;pmatrix&rbrace; -6 \\ -10 \\ -4 \end&lbrace;pmatrix&rbrace;
$$

Simplify by dividing by $-2$: $\hat{n} = \begin{pmatrix} 3 \\ 5 \\ 2 \end{pmatrix}$.

Using point $A(1, 2, -1)$ and $\hat{n} \cdot \bm{r} = d$:

$$
d = (3)(1) + (5)(2) + (2)(-1) = 3 + 10 - 2 = 11
$$

The plane equation is: $3x + 5y + 2z = 11$.

**Verification:** Check point $B$: $3(3) + 5(0) + 2(1) = 9 + 0 + 2 = 11$. Check point $C$:
$3(0) + 5(1) + 2(3) = 0 + 5 + 6 = 11$.

---

## Worked Example 6: Angle Between Two Planes

**Problem:** Find the acute angle between the planes $\Pi_1: 2x - y + 3z = 7$ and
$\Pi_2: x + 4y - z = 3$.

**Solution:**

Extract the normal vectors:

$$
\hat&lbrace;n&rbrace;_1 = \begin&lbrace;pmatrix&rbrace; 2 \\ -1 \\ 3 \end&lbrace;pmatrix&rbrace;, \quad \hat&lbrace;n&rbrace;_2 = \begin&lbrace;pmatrix&rbrace; 1 \\ 4 \\ -1 \end&lbrace;pmatrix&rbrace;
$$

$$
\hat&lbrace;n&rbrace;_1 \cdot \hat&lbrace;n&rbrace;_2 = (2)(1) + (-1)(4) + (3)(-1) = 2 - 4 - 3 = -5
$$

$$
|\hat&lbrace;n&rbrace;_1| = \sqrt&lbrace;4 + 1 + 9&rbrace; = \sqrt&lbrace;14&rbrace;, \quad |\hat&lbrace;n&rbrace;_2| = \sqrt&lbrace;1 + 16 + 1&rbrace; = \sqrt&lbrace;18&rbrace; = 3\sqrt&lbrace;2&rbrace;
$$

$$
\cos\theta = \frac&lbrace;|\hat&lbrace;n&rbrace;_1 \cdot \hat&lbrace;n&rbrace;_2|&rbrace;&lbrace;|\hat&lbrace;n&rbrace;_1||\hat&lbrace;n&rbrace;_2|&rbrace; = \frac&lbrace;5&rbrace;&lbrace;\sqrt&lbrace;14&rbrace; \cdot 3\sqrt&lbrace;2&rbrace;&rbrace; = \frac&lbrace;5&rbrace;&lbrace;3\sqrt&lbrace;28&rbrace;&rbrace; = \frac&lbrace;5&rbrace;&lbrace;3 \times 5.292&rbrace; = 0.315
$$

$$
\theta = \arccos(0.315) \approx 71.6°
$$

---

## Worked Example 7: Shortest Distance from Point to Plane

**Problem:** Find the shortest distance from the point $P(3, -1, 2)$ to the plane $x - 2y + 2z = 5$.

**Solution:**

Normal vector $\hat{n} = \begin{pmatrix} 1 \\ -2 \\ 2 \end{pmatrix}$,
$|\hat{n}| = \sqrt{1 + 4 + 4} = 3$.

$$
\bm&lbrace;p&rbrace; \cdot \hat&lbrace;n&rbrace; = (3)(1) + (-1)(-2) + (2)(2) = 3 + 2 + 4 = 9
$$

$$
D = \frac&lbrace;|\bm&lbrace;p&rbrace; \cdot \hat&lbrace;n&rbrace; - d|&rbrace;&lbrace;|\hat&lbrace;n&rbrace;|&rbrace; = \frac&lbrace;|9 - 5|&rbrace;&lbrace;3&rbrace; = \frac&lbrace;4&rbrace;&lbrace;3&rbrace;
$$

---

## Worked Example 8: Line of Intersection of Two Planes

**Problem:** Find the vector equation of the line of intersection of the planes
$\Pi_1: x + y - z = 4$ and $\Pi_2: 2x - y + z = 1$.

**Solution:**

The direction vector of the line is perpendicular to both normals:

$$
\bm&lbrace;d&rbrace; = \hat&lbrace;n&rbrace;_1 \times \hat&lbrace;n&rbrace;_2 = \begin&lbrace;pmatrix&rbrace; 1 \\ 1 \\ -1 \end&lbrace;pmatrix&rbrace; \times \begin&lbrace;pmatrix&rbrace; 2 \\ -1 \\ 1 \end&lbrace;pmatrix&rbrace; = \begin&lbrace;pmatrix&rbrace; (1)(1) - (-1)(-1) \\ (-1)(2) - (1)(1) \\ (1)(-1) - (1)(2) \end&lbrace;pmatrix&rbrace; = \begin&lbrace;pmatrix&rbrace; 0 \\ -3 \\ -3 \end&lbrace;pmatrix&rbrace;
$$

Simplify: $\bm{d} = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.

Find a point on the line by setting $z = 0$ and solving:

$x + y = 4$ and $2x - y = 1$. Adding: $3x = 5 \implies x = \frac{5}{3}$. Then
$y = 4 - \frac{5}{3} = \frac{7}{3}$.

A point on the line is $\left(\frac{5}{3}, \frac{7}{3}, 0\right)$.

The line of intersection is:

$$
\bm&lbrace;r&rbrace; = \begin&lbrace;pmatrix&rbrace; 5/3 \\ 7/3 \\ 0 \end&lbrace;pmatrix&rbrace; + t\begin&lbrace;pmatrix&rbrace; 0 \\ 1 \\ 1 \end&lbrace;pmatrix&rbrace;
$$

---

## Common Pitfalls

1. **Confusing parametric and Cartesian forms.** In Cartesian form, each component is equated to a
   parameter expression. Forgetting to set the ratios equal is a common error.

2. **Sign errors in the cross product.** The cross product is anti-commutative:
   $\bm{a} \times \bm{b} = -(\bm{b} \times \bm{a})$. Always double-check the order of vectors.

3. **Forgetting the absolute value in distance formulas.** The distance from a point to a plane is
   always non-negative: use $|\bm{p} \cdot \hat{n} - d|$.

4. **Assuming a line intersects a plane.** Always check that $\bm{b} \cdot \hat{n} \neq 0$ before
   solving. If $\bm{b} \cdot \hat{n} = 0$ and $\bm{a} \cdot \hat{n} = d$, the line lies in the
   plane. If $\bm{b} \cdot \hat{n} = 0$ and $\bm{a} \cdot \hat{n} \neq d$, the line is parallel to
   the plane.

5. **Angle between line and plane vs angle between line and normal.** The angle $\alpha$ between a
   line and a plane satisfies $\sin\alpha = \frac{|\bm{b} \cdot \hat{n}|}{|\bm{b}||\hat{n}|}$. The
   angle between the line and the **normal** satisfies
   $\cos\phi = \frac{|\bm{b} \cdot \hat{n}|}{|\bm{b}||\hat{n}|}$. Note that
   $\alpha + \phi = 90^\circ$.

6. **Assuming skew lines intersect.** Two lines in 3D are generally skew (neither parallel nor
   intersecting). Always verify that a common solution exists for the parameters.

---

## Problem Set

<details>
<summary>Question 1</summary>

Find the angle between the vectors $\bm{a} = \begin{pmatrix} 1 \\ 3 \\ -2 \end{pmatrix}$ and
$\bm{b} = \begin{pmatrix} 4 \\ -1 \\ 1 \end{pmatrix}$.

</details>

<details>
<summary>Answer 1</summary>

$\bm{a} \cdot \bm{b} = (1)(4) + (3)(-1) + (-2)(1) = 4 - 3 - 2 = -1$.
$|\bm{a}| = \sqrt{1 + 9 + 4} = \sqrt{14}$, $|\bm{b}| = \sqrt{16 + 1 + 1} = \sqrt{18} = 3\sqrt{2}$.
$\cos\theta = \frac{-1}{3\sqrt{28}} = \frac{-1}{3 \times 5.292} = -0.0630$.
$\theta = \arccos(-0.0630) \approx 93.6^\circ$.

</details>

<details>
<summary>Question 2</summary>

Find the Cartesian equation of the plane containing the points $P(2, 1, 0)$, $Q(1, -1, 3)$, and
$R(4, 0, -1)$.

</details>

<details>
<summary>Answer 2</summary>

$\overrightarrow{PQ} = \begin{pmatrix} -1 \\ -2 \\ 3 \end{pmatrix}$,
$\overrightarrow{PR} = \begin{pmatrix} 2 \\ -1 \\ -1 \end{pmatrix}$.
$\hat{n} = \overrightarrow{PQ} \times \overrightarrow{PR} = \begin{pmatrix} (-2)(-1) - (3)(-1) \\ (3)(2) - (-1)(-1) \\ (-1)(-1) - (-2)(2) \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \\ 5 \end{pmatrix}$.
Simplified normal: $\hat{n} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
$d = (1)(2) + (1)(1) + (1)(0) = 3$. Plane equation: $x + y + z = 3$.

</details>

<details>
<summary>Question 3</summary>

Find the point of intersection of the line
$\bm{r} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix} + t\begin{pmatrix} 3 \\ 2 \\ -1 \end{pmatrix}$
with the plane $2x - y + 2z = 8$.

</details>

<details>
<summary>Answer 3</summary>

Substitute into the plane equation: $2(1 + 3t) - (-1 + 2t) + 2(2 - t) = 8$.
$2 + 6t + 1 - 2t + 4 - 2t = 8$. $7 + 2t = 8 \implies t = 0.5$. Point:
$\begin{pmatrix} 1 + 1.5 \\ -1 + 1 \\ 2 - 0.5 \end{pmatrix} = \begin{pmatrix} 2.5 \\ 0 \\ 1.5 \end{pmatrix}$.
Intersection: $(2.5, 0, 1.5)$.

</details>

<details>
<summary>Question 4</summary>

Find the acute angle between the planes $x + 2y - 2z = 1$ and $3x - y + z = 4$.

</details>

<details>
<summary>Answer 4</summary>

$\hat{n}_1 = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}$,
$\hat{n}_2 = \begin{pmatrix} 3 \\ -1 \\ 1 \end{pmatrix}$.
$\hat{n}_1 \cdot \hat{n}_2 = 3 - 2 - 2 = -1$. $|\hat{n}_1| = \sqrt{1 + 4 + 4} = 3$,
$|\hat{n}_2| = \sqrt{9 + 1 + 1} = \sqrt{11}$.
$\cos\theta = \frac{|-1|}{3\sqrt{11}} = \frac{1}{9.95} = 0.1005$.
$\theta = \arccos(0.1005) \approx 84.2^\circ$.

</details>

<details>
<summary>Question 5</summary>

Find the shortest distance from the point $A(2, -3, 1)$ to the plane $2x + y - 2z = 6$.

</details>

<details>
<summary>Answer 5</summary>

$\hat{n} = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$, $|\hat{n}| = \sqrt{4 + 1 + 4} = 3$.
$\bm{p} \cdot \hat{n} = (2)(2) + (-3)(1) + (1)(-2) = 4 - 3 - 2 = -1$.
$D = \frac{|-1 - 6|}{3} = \frac{7}{3}$.

</details>

<details>
<summary>Question 6</summary>

Find the shortest distance between the skew lines:
$L_1: \bm{r} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + s\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$
and
$L_2: \bm{r} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + t\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.

</details>

<details>
<summary>Answer 6</summary>

$\bm{a}_2 - \bm{a}_1 = \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$.
$\bm{b}_1 \times \bm{b}_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \times \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} (0)(0) - (1)(1) \\ (1)(0) - (1)(0) \\ (1)(1) - (0)(0) \end{pmatrix} = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$.
$|\bm{b}_1 \times \bm{b}_2| = \sqrt{1 + 0 + 1} = \sqrt{2}$.
$(\bm{a}_2 - \bm{a}_1) \cdot (\bm{b}_1 \times \bm{b}_2) = (0)(-1) + (-1)(0) + (1)(1) = 1$.
$D = \frac{|1|}{\sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.

</details>

<details>
<summary>Question 7</summary>

Find the foot of the perpendicular from the point $P(4, 1, 3)$ to the line
$\bm{r} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix} + t\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$.

</details>

<details>
<summary>Answer 7</summary>

$\bm{a} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$,
$\bm{b} = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$,
$\bm{p} = \begin{pmatrix} 4 \\ 1 \\ 3 \end{pmatrix}$.
$\bm{p} - \bm{a} = \begin{pmatrix} 3 \\ -1 \\ 4 \end{pmatrix}$.
$(\bm{p} - \bm{a}) \cdot \bm{b} = 6 + 1 + 12 = 19$. $|\bm{b}|^2 = 4 + 1 + 9 = 14$.
$t = \frac{19}{14}$. Foot:
$\bm{F} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix} + \frac{19}{14}\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 + 19/7 \\ 2 - 19/14 \\ -1 + 57/14 \end{pmatrix} = \begin{pmatrix} 26/7 \\ 9/14 \\ 43/14 \end{pmatrix}$.

</details>

<details>
<summary>Question 8</summary>

Show that the points $A(1, 2, 3)$, $B(3, 5, 7)$, and $C(5, 8, 11)$ are collinear.

</details>

<details>
<summary>Answer 8</summary>

$\overrightarrow{AB} = \begin{pmatrix} 2 \\ 3 \\ 4 \end{pmatrix}$,
$\overrightarrow{AC} = \begin{pmatrix} 4 \\ 6 \\ 8 \end{pmatrix}$.
$\overrightarrow{AC} = 2\overrightarrow{AB}$, so $\overrightarrow{AC} = k\overrightarrow{AB}$ with
$k = 2$. Since one vector is a scalar multiple of the other, the points are collinear.

</details>
