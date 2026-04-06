---
title: Vectors
date: 2025-05-13T22:14:20.747Z
tags:
  - maths
categories:
  - maths
slug: vectors
---

## Vector Line

### Parametric Form

A vector line ($r$) in parametric form takes a scalar parameter ($\gamma$) to produce each point on
the line. The line ($\bm{r}(\gamma)$) is a sum of a point on a line ($\bm{a}$ or $\bm{r_0}$) and a
direction vector ($\bm{b}$) scaled by the parameter $\gamma$:

$$
\begin{aligned}
    \bm{r}(\gamma) = \bm{r_0} + \gamma\bm{b}
\end{aligned}
$$

### Cartesian Form

Vectors in cartesian form define a vector by the definition of each coordinate of the unit vector:

$$
\begin{aligned}
    \frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}
\end{aligned}
$$

### Conversion Between Parametric Form and Cartesian Form

$$
\begin{aligned}
    \bm{r}(\gamma) = \bm{r_0} + \gamma\bm{b}\\
    \begin{pmatrix}
        x \\ y \\ z
    \end{pmatrix}
    =
    \begin{pmatrix}
        x_0 \\ y_0 \\ z_0
    \end{pmatrix}
    +
    \gamma
    \begin{pmatrix}
       l \\ m \\ n
    \end{pmatrix}\\
    x = x_0 + \gamma l, \quad y = y_0 + \gamma m, \quad z = z_0 + \gamma n\\
    \gamma = \frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}
\end{aligned}
$$

## Vector Plane

### Parametric Form

A vector plane ($\bm{r}$) given in parametric form is defined with the sum of a point ($\bm{a}$ or
$\bm{r_0}$) on the plane and two direction vector ($\bm{b}$ and $\bm{c}$) scaled by scalar parameter
($\gamma$ and $\mu$):

$$
\begin{aligned}
    \bm{r}(\gamma, \mu) = \bm{r_0} + \gamma \bm{b} + \mu \bm{c}
\end{aligned}
$$

### Point-normal Form

A vector plane ($\bm{r}$) defined in point-normal form is defined by the dot product between the
normal ($\hat{n}$) and the direction vectors ($\bm{r}-\bm{r_0}$ or $\gamma \bm{b} + \mu \bm{c}$):

$$
\begin{aligned}
    \left(\bm{r}-\bm{r_0}\right) \cdot \hat{n} = |\bm{r}-\bm{r_0}||\hat{n}|\sin \frac{\pi}{2} = 0\\
    \bm{r} \cdot \hat{n} = \bm{r_0} \cdot \hat{n}
\end{aligned}
$$

### Cartesian Form

A vector plane ($\bm{r}$) defined in cartesian form is extended from the point-normal form by
expressing normal vector as its individual axis ($x,y,z$):

$$
\begin{aligned}
    \hat{n} =
    \begin{pmatrix}
        a \\ b \\ c
    \end{pmatrix}, \quad
    \bm{r} =
    \begin{pmatrix}
        x \\ y \\ z
    \end{pmatrix}, \quad
    \bm{r_0} =
    \begin{pmatrix}
        x_0 \\ y_0 \\ z_0
    \end{pmatrix}\\
    a(x-x_0) + b(y-y_0) + c(z-z_0) = 0\\
    ax + by + cz = ax_0 + by_0 + cz_0
\end{aligned}
$$

Since $ax_0 + by_0 + cz_0$ produce a constant, the formula booklet uses a single constant $d$ to
represent it:

$$
\begin{aligned}
    ax + by + cz = d
\end{aligned}
$$

## Vector Fundamentals

### Vector Representation

A vector $\bm{v}$ in 3D space is represented as a column vector:

$$
\bm{v} =
\begin{pmatrix}
    v_x \\ v_y \\ v_z
\end{pmatrix}
$$

where $v_x$, $v_y$, $v_z$ are the components along the $x$, $y$, and $z$ axes respectively.

### Magnitude (Modulus)

The magnitude of a vector is its length:

$$
|\bm{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}
$$

### Unit Vector

A unit vector has magnitude $1$. The unit vector in the direction of $\bm{v}$ is:

$$
\hat{v} = \frac{\bm{v}}{|\bm{v}|}
$$

### Position Vector

A position vector describes the position of a point relative to the origin $O$:

$$
\overrightarrow{OP} =
\begin{pmatrix}
    x \\ y \\ z
\end{pmatrix}
$$

### Vector Addition and Subtraction

$$
\bm{a} + \bm{b} =
\begin{pmatrix}
    a_x + b_x \\ a_y + b_y \\ a_z + b_z
\end{pmatrix}, \quad
\bm{a} - \bm{b} =
\begin{pmatrix}
    a_x - b_x \\ a_y - b_y \\ a_z - b_z
\end{pmatrix}
$$

### Scalar Multiplication

$$
k\bm{v} =
\begin{pmatrix}
    kv_x \\ kv_y \\ kv_z
\end{pmatrix}
$$

## Dot Product (Scalar Product)

### Definition

The dot product of two vectors produces a scalar:

$$
\bm{a} \cdot \bm{b} = |\bm{a}||\bm{b}|\cos\theta
$$

where $\theta$ is the angle between the vectors ($0 \le \theta \le \pi$).

### Component Form

$$
\bm{a} \cdot \bm{b} = a_x b_x + a_y b_y + a_z b_z
$$

### Finding the Angle Between Vectors

$$
\cos\theta = \frac{\bm{a} \cdot \bm{b}}{|\bm{a}||\bm{b}|}
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
\bm{a} \cdot \bm{b} = (2)(3) + (1)(0) + (-1)(4) = 6 + 0 - 4 = 2
$$

$$
|\bm{a}| = \sqrt{4 + 1 + 1} = \sqrt{6}, \quad |\bm{b}| = \sqrt{9 + 0 + 16} = 5
$$

$$
\cos\theta = \frac{2}{5\sqrt{6}} = \frac{2}{5\sqrt{6}}, \quad \theta = \arccos\left(\frac{2}{5\sqrt{6}}\right) \approx 80.7°
$$

## Cross Product (Vector Product)

### Definition

The cross product of two vectors produces a vector perpendicular to both:

$$
|\bm{a} \times \bm{b}| = |\bm{a}||\bm{b}|\sin\theta
$$

The direction is given by the right-hand rule.

### Component Form

$$
\bm{a} \times \bm{b} =
\begin{pmatrix}
    a_y b_z - a_z b_y \\ a_z b_x - a_x b_z \\ a_x b_y - a_y b_x
\end{pmatrix}
$$

This can be written as a determinant:

$$
\bm{a} \times \bm{b} =
\begin{vmatrix}
    \hat{i} & \hat{j} & \hat{k}\\
    a_x & a_y & a_z\\
    b_x & b_y & b_z
\end{vmatrix}
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
\bm{a} \times \bm{b} =
\begin{pmatrix}
    (2)(6) - (3)(5) \\ (3)(4) - (1)(6) \\ (1)(5) - (2)(4)
\end{pmatrix}
=
\begin{pmatrix}
    12 - 15 \\ 12 - 6 \\ 5 - 8
\end{pmatrix}
=
\begin{pmatrix}
    -3 \\ 6 \\ -3
\end{pmatrix}
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
   (\bm{a} + t\bm{b}) \cdot \hat{n} = d
   $$
2. Solve for $t$:
   $$
   t = \frac{d - \bm{a} \cdot \hat{n}}{\bm{b} \cdot \hat{n}}
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
\bm{a} \cdot \hat{n} = (1)(2) + (0)(-1) + (2)(1) = 4
$$

$$
\bm{b} \cdot \hat{n} = (2)(2) + (1)(-1) + (-1)(1) = 2
$$

$$
t = \frac{5 - 4}{2} = \frac{1}{2}
$$

$$
\bm{r} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + \frac{1}{2}\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ 0.5 \\ 1.5 \end{pmatrix}
$$

Intersection point: $(2, 0.5, 1.5)$.

### Angle Between Line and Plane

The angle $\alpha$ between a line with direction $\bm{b}$ and a plane with normal $\hat{n}$:

$$
\sin\alpha = \frac{|\bm{b} \cdot \hat{n}|}{|\bm{b}||\hat{n}|}
$$

### Angle Between Two Planes

The angle $\theta$ between two planes with normals $\hat{n}_1$ and $\hat{n}_2$:

$$
\cos\theta = \frac{|\hat{n}_1 \cdot \hat{n}_2|}{|\hat{n}_1||\hat{n}_2|}
$$

### Distance from Point to Plane

The perpendicular distance from point $P$ with position vector $\bm{p}$ to plane
$\bm{r} \cdot \hat{n} = d$:

$$
D = \frac{|\bm{p} \cdot \hat{n} - d|}{|\hat{n}|}
$$

If $\hat{n}$ is already a unit vector:

$$
D = |\bm{p} \cdot \hat{n} - d|
$$

### Distance Between Two Skew Lines

The shortest distance between two skew lines $\bm{r}_1 = \bm{a}_1 + t\bm{b}_1$ and
$\bm{r}_2 = \bm{a}_2 + s\bm{b}_2$:

$$
D = \frac{|(\bm{a}_2 - \bm{a}_1) \cdot (\bm{b}_1 \times \bm{b}_2)|}{|\bm{b}_1 \times \bm{b}_2|}
$$

### Worked Example 4: Distance from Point to Plane

**Problem:** Find the distance from $P(1, 2, 3)$ to the plane $2x - y + 2z = 4$.

**Solution:**

Normal vector $\hat{n} = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$,
$|\hat{n}| = \sqrt{4 + 1 + 4} = 3$.

$$
\bm{p} \cdot \hat{n} = (1)(2) + (2)(-1) + (3)(2) = 2 - 2 + 6 = 6
$$

$$
D = \frac{|6 - 4|}{3} = \frac{2}{3}
$$

## Applications to Geometry

### Proving Three Points Are Collinear

Points $A$, $B$, $C$ are collinear if and only if $\overrightarrow{AB} = k\overrightarrow{AC}$ for
some scalar $k$.

### Finding the Foot of a Perpendicular

To find the foot of the perpendicular from point $P$ to line $\bm{r} = \bm{a} + t\bm{b}$:

The foot $F$ satisfies:

$$
\overrightarrow{PF} \cdot \bm{b} = 0
$$

Substitute $\bm{F} = \bm{a} + t\bm{b}$ and solve for $t$:

$$
(\bm{a} + t\bm{b} - \bm{p}) \cdot \bm{b} = 0 \implies t = \frac{(\bm{p} - \bm{a}) \cdot \bm{b}}{|\bm{b}|^2}
$$

## Summary Table

| Operation               | Formula                                   | Result                              |
| ----------------------- | ----------------------------------------- | ----------------------------------- | --- | ------- | ----------- | ------ | ----------- | ------ |
| Dot product             | $\bm{a} \cdot \bm{b} =                    | \bm{a}                              |     | \bm{b}  | \cos\theta$ | Scalar |
| Cross product           | $                                         | \bm{a} \times \bm{b}                | =   | \bm{a}  |             | \bm{b} | \sin\theta$ | Vector |
| Angle between vectors   | $\cos\theta = \frac{\bm{a} \cdot \bm{b}}{ | \bm{a}                              |     | \bm{b}  | }$          | Angle  |
| Distance point to plane | $D = \frac{                               | \bm{p} \cdot \hat{n} - d            | }{  | \hat{n} | }$          | Scalar |
| Scalar triple product   | $V =                                      | \bm{a} \cdot (\bm{b} \times \bm{c}) | $   | Volume  |

:::tip Exam Tip For vector problems, always draw a diagram first. When finding intersections, check
your answer by substituting the point back into both equations. Common errors include sign mistakes
in the cross product and forgetting to take the absolute value in distance formulas. :::

:::
