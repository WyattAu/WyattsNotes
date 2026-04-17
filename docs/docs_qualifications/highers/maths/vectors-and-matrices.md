---
title: Vectors and Matrices
date: 2026-04-14
tags:
  - Mathematics
  - Highers
categories:
  - Mathematics
slug: vectors-and-matrices
---

# Vectors and Matrices

## Higher Vectors

### Vector Fundamentals

A vector has both **magnitude** and **direction**. A scalar has only magnitude.

A vector in 2D can be written as $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ or as the
column vector $(a_1, a_2)$. In 3D: $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$.

**Magnitude (Modulus):**

$$
|\mathbf{a}| = \sqrt{a_1^2 + a_2^2}
$$

In 3D: $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$.

**Unit Vector:**

$$
\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}
$$

A unit vector has magnitude 1. The standard unit vectors are
$\mathbf{i} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$,
$\mathbf{j} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$,
$\mathbf{k} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.

Any vector in 3D can be written as $\mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$.

**Example:** Find the unit vector in the direction of $\mathbf{a} = (3, -4)$.

$$|\mathbf{a}| = \sqrt{9 + 16} = 5$$

$$
\hat{\mathbf{a}} = \left(\frac{3}{5}, -\frac{4}{5}\right)
$$

### Vector Arithmetic

**Addition:**

$$
\begin{pmatrix} a_1 \\ a_2 \end{pmatrix} + \begin{pmatrix} b_1 \\ b_2 \end{pmatrix} = \begin{pmatrix} a_1 + b_1 \\ a_2 + b_2 \end{pmatrix}
$$

Vector addition is commutative ($\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}$) and associative
($( \mathbf{a} + \mathbf{b}) + \mathbf{c} = \mathbf{a} + (\mathbf{b} + \mathbf{c})$).

**Scalar Multiplication:**

$$
k\begin{pmatrix} a_1 \\ a_2 \end{pmatrix} = \begin{pmatrix} ka_1 \\ ka_2 \end{pmatrix}
$$

Scalar multiplication distributes over vector addition:
$k(\mathbf{a} + \mathbf{b}) = k\mathbf{a} + k\mathbf{b}$.

**Scalar Product (Dot Product):**

$$
\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\mathbf{a}||\mathbf{b}|\cos\theta
$$

where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.

**Proof of the dot product formula.** By the cosine rule in the triangle formed by $\mathbf{a}$,
$\mathbf{b}$, and $\mathbf{a} - \mathbf{b}$:

$$
|\mathbf{a} - \mathbf{b}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2 - 2|\mathbf{a}||\mathbf{b}|\cos\theta
$$

Expanding the left side:
$(\mathbf{a} - \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) = |\mathbf{a}|^2 - 2\mathbf{a} \cdot \mathbf{b} + |\mathbf{b}|^2$.

Comparing: $-2\mathbf{a} \cdot \mathbf{b} = -2|\mathbf{a}||\mathbf{b}|\cos\theta$, hence
$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$.

**Example:** Find the angle between $\mathbf{a} = (2, 1, -1)$ and $\mathbf{b} = (1, -3, 2)$.

$$
\mathbf{a} \cdot \mathbf{b} = 2(1) + 1(-3) + (-1)(2) = 2 - 3 - 2 = -3
$$

$$
|\mathbf{a}| = \sqrt{4 + 1 + 1} = \sqrt{6}
$$

$$
|\mathbf{b}| = \sqrt{1 + 9 + 4} = \sqrt{14}
$$

$$
\cos\theta = \frac{-3}{\sqrt{6}\sqrt{14}} = \frac{-3}{\sqrt{84}} = \frac{-3}{2\sqrt{21}}
$$

$$
\theta = \arccos\left(\frac{-3}{2\sqrt{21}}\right) \approx 109.1°
$$

### Position Vectors and Displacement

The **position vector** of point $A$ relative to an origin $O$ is
$\overrightarrow{OA} = \mathbf{a}$.

The **displacement** from $A$ to $B$ is $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.

**Triangle law of vector addition:**
$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.

**Example:** Given $\overrightarrow{OA} = (3, 1, -2)$ and $\overrightarrow{OB} = (-1, 4, 3)$, find
$\overrightarrow{AB}$ and the distance $AB$.

$$
\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = (-1 - 3, 4 - 1, 3 - (-2)) = (-4, 3, 5)
$$

$$
AB = |\overrightarrow{AB}| = \sqrt{16 + 9 + 25} = \sqrt{50} = 5\sqrt{2}
$$

### Properties of the Scalar Product

- $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$
- $\mathbf{a} \cdot \mathbf{b} = 0$ if and only if $\mathbf{a}$ is perpendicular to $\mathbf{b}$
  (for non-zero vectors)
- $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$ (commutative)
- $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$
  (distributive)
- $\mathbf{a} \cdot (k\mathbf{b}) = k(\mathbf{a} \cdot \mathbf{b})$

**Example:** Determine the value of $k$ for which the vectors $\mathbf{a} = (k, 2, -1)$ and
$\mathbf{b} = (3, k, 4)$ are perpendicular.

$$\mathbf{a} \cdot \mathbf{b} = 0$$

$$3k + 2k - 4 = 0$$

$$5k = 4$$

$$
k = \frac{4}{5}
$$

### Section Formula (Higher)

The position vector of a point that divides the line segment from $A$ to $B$ in the ratio $m : n$
is:

$$
\mathbf{r} = \frac{n\mathbf{a} + m\mathbf{b}}{m + n}
$$

The midpoint of $AB$ (when $m = n = 1$):

$$
\mathbf{r} = \frac{\mathbf{a} + \mathbf{b}}{2}
$$

**Example:** Find the position vector of the point dividing the line from $A(1, 2, 3)$ to
$B(7, -2, 5)$ in the ratio $2:1$.

$$
\mathbf{r} = \frac{1 \cdot (7, -2, 5) + 2 \cdot (1, 2, 3)}{3} = \frac{(7, -2, 5) + (2, 4, 6)}{3} = \frac{(9, 2, 11)}{3} = (3, \frac{2}{3}, \frac{11}{3})
$$

### Collinearity

Three points $A$, $B$, $C$ are collinear if and only if $\overrightarrow{AB}$ is parallel to
$\overrightarrow{AC}$, i.e., $\overrightarrow{AB} = k\overrightarrow{AC}$ for some scalar $k$.

**Example:** Determine whether $A(1, 2, -1)$, $B(3, 5, 1)$, and $C(5, 8, 3)$ are collinear.

$\overrightarrow{AB} = (2, 3, 2)$,
$\overrightarrow{AC} = (4, 6, 4) = 2(2, 3, 2) = 2\overrightarrow{AB}$.

Since $\overrightarrow{AC} = 2\overrightarrow{AB}$, the points are collinear. $B$ is the midpoint of
$AC$.

---

## Higher Matrices

### Matrix Notation and Operations

A matrix is a rectangular array of numbers. An $m \times n$ matrix has $m$ rows and $n$ columns.

$$
A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}
$$

**Addition:** $C = A + B$ where $c_{ij} = a_{ij} + b_{ij}$ (matrices must have the same dimensions).

**Scalar Multiplication:** $kA$ has entries $ka_{ij}$.

**Matrix Multiplication:** If $A$ is $m \times n$ and $B$ is $n \times p$, then $C = AB$ is
$m \times p$ where:

$$
c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
$$

**Why the dimensions must match.** The entry $c_{ij}$ is the dot product of row $i$ of $A$ with
column $j$ of $B$. For this dot product to be defined, row $i$ of $A$ and column $j$ of $B$ must
have the same length, which means the number of columns of $A$ equals the number of rows of $B$.

**Matrix multiplication is associative** ($(AB)C = A(BC)$) and **distributive** over addition
($A(B+C) = AB + AC$), but **not commutative** in general ($AB \neq BA$).

**Example:** Calculate $AB$ where $A = \begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix}$ and
$B = \begin{pmatrix} 1 & 4 \\ 0 & -2 \end{pmatrix}$.

$$
AB = \begin{pmatrix} 2(1) + 1(0) & 2(4) + 1(-2) \\ -1(1) + 3(0) & -1(4) + 3(-2) \end{pmatrix} = \begin{pmatrix} 2 & 6 \\ -1 & -10 \end{pmatrix}
$$

**Verify non-commutativity:**

$$
BA = \begin{pmatrix} 1(2) + 4(-1) & 1(1) + 4(3) \\ 0(2) + (-2)(-1) & 0(1) + (-2)(3) \end{pmatrix} = \begin{pmatrix} -2 & 13 \\ 2 & -6 \end{pmatrix} \neq AB
$$

### Determinant and Inverse of a $2 \times 2$ Matrix

**Determinant:**

$$
\det A = |A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc
$$

The determinant measures the area scaling factor of the linear transformation represented by $A$. If
$\det A = 0$, the transformation collapses the plane onto a line (or a point), and the matrix is not
invertible.

**Inverse:**

$$
A^{-1} = \frac{1}{\det A}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

The inverse exists if and only if $\det A \neq 0$.

**Verification:**
$AA^{-1} = \frac{1}{ad-bc}\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \frac{1}{ad-bc}\begin{pmatrix} ad-bc & 0 \\ 0 & ad-bc \end{pmatrix} = I$.

**Example:** Find the inverse of $A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$.

$$\det A = 3(2) - 5(1) = 6 - 5 = 1$$

$$
A^{-1} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}
$$

### Solving Systems of Linear Equations

A system $A\mathbf{x} = \mathbf{b}$ has solution $\mathbf{x} = A^{-1}\mathbf{b}$ (provided $A$ is
invertible). If $\det A = 0$, the system has either no solutions or infinitely many solutions.

**Example:** Solve the system:

$$3x + 5y = 11$$ $$x + 2y = 5$$

$$
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}^{-1}\begin{pmatrix} 11 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} 11 \\ 5 \end{pmatrix} = \begin{pmatrix} 22 - 25 \\ -11 + 15 \end{pmatrix} = \begin{pmatrix} -3 \\ 4 \end{pmatrix}
$$

Solution: $x = -3$, $y = 4$.

### Transformations Using Matrices

**2D Transformations:**

| Transformation                    | Matrix                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| Reflection in $x$-axis            | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$                                     |
| Reflection in $y$-axis            | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$                                     |
| Rotation by $\theta$ about origin | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Enlargement by scale factor $k$   | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$                                      |

The determinant of a transformation matrix gives the area scale factor. A negative determinant
indicates the transformation involves a reflection.

**Example:** Rotate the point $(3, 2)$ by $90°$ anticlockwise about the origin.

$$
\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 3 \\ 2 \end{pmatrix} = \begin{pmatrix} -2 \\ 3 \end{pmatrix}
$$

The image is $(-2, 3)$.

**Example:** Reflect the point $(4, -1)$ in the $y$-axis.

$$
\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 4 \\ -1 \end{pmatrix} = \begin{pmatrix} -4 \\ -1 \end{pmatrix}
$$

The image is $(-4, -1)$.

**Example:** Use the matrix $\begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$ to describe the
transformation.

This is an enlargement by scale factor 3 centred at the origin. The determinant is $9 > 0$,
confirming it is a pure enlargement (no reflection). Every point $(x, y)$ maps to $(3x, 3y)$.

The relationship with the identity matrix $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ is that
this matrix represents an enlargement by scale factor 1 (i.e., the identity/no transformation).

---

## Advanced Higher Vectors

### Vector Product (Cross Product)

The vector product of $\mathbf{a} = (a_1, a_2, a_3)$ and $\mathbf{b} = (b_1, b_2, b_3)$ is:

$$
\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}
$$

**Properties:**

- $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$ (anti-commutative)
- $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$
- $\mathbf{a} \times \mathbf{b}$ is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$
- $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ if $\mathbf{a}$ and $\mathbf{b}$ are parallel

**Geometric interpretation:** $|\mathbf{a} \times \mathbf{b}|$ is the area of the parallelogram with
sides $\mathbf{a}$ and $\mathbf{b}$. The area of the triangle is
$\frac{1}{2}|\mathbf{a} \times \mathbf{b}|$.

**Example:** Find $\mathbf{a} \times \mathbf{b}$ where $\mathbf{a} = (1, 2, 3)$ and
$\mathbf{b} = (4, -1, 2)$.

$$
\mathbf{a} \times \mathbf{b} = \begin{pmatrix} (2)(2) - (3)(-1) \\ (3)(4) - (1)(2) \\ (1)(-1) - (2)(4) \end{pmatrix} = \begin{pmatrix} 4 + 3 \\ 12 - 2 \\ -1 - 8 \end{pmatrix} = \begin{pmatrix} 7 \\ 10 \\ -9 \end{pmatrix}
$$

**Verification:**
$\mathbf{a} \cdot (\mathbf{a} \times \mathbf{b}) = 1(7) + 2(10) + 3(-9) = 7 + 20 - 27 = 0$.
Confirmed perpendicular.

### Triple Scalar Product

$$
[\mathbf{a}, \mathbf{b}, \mathbf{c}] = \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})
$$

This equals the volume of the parallelepiped formed by vectors $\mathbf{a}$, $\mathbf{b}$, and
$\mathbf{c}$.

The three vectors are coplanar if and only if $[\mathbf{a}, \mathbf{b}, \mathbf{c}] = 0$.

**Properties:**

- $[\mathbf{a}, \mathbf{b}, \mathbf{c}] = [\mathbf{b}, \mathbf{c}, \mathbf{a}] = [\mathbf{c}, \mathbf{a}, \mathbf{b}]$
  (cyclic permutation)
- $[\mathbf{a}, \mathbf{b}, \mathbf{c}] = -[\mathbf{b}, \mathbf{a}, \mathbf{c}]$ (swapping two
  vectors negates)

**Example:** Show that the vectors $(1, 2, -1)$, $(3, 1, 2)$, and $(0, 5, -5)$ are coplanar.

$$
\mathbf{b} \times \mathbf{c} = \begin{pmatrix} 1 \cdot (-5) - 2 \cdot 5 \\ 2 \cdot 0 - (-1) \cdot (-5) \\ 3 \cdot 5 - 1 \cdot 0 \end{pmatrix} = \begin{pmatrix} -5 - 10 \\ 0 - 5 \\ 15 - 0 \end{pmatrix} = \begin{pmatrix} -15 \\ -5 \\ 15 \end{pmatrix}
$$

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 1(-15) + 2(-5) + (-1)(15) = -15 - 10 - 15 = -40
$$

Wait, that is not zero. Let me recompute. $\mathbf{b} = (3, 1, 2)$, $\mathbf{c} = (0, 5, -5)$.

$$
\mathbf{b} \times \mathbf{c} = \begin{pmatrix} 1(-5) - 2(5) \\ 2(0) - 3(-5) \\ 3(5) - 1(0) \end{pmatrix} = \begin{pmatrix} -15 \\ 15 \\ 15 \end{pmatrix}
$$

Wait, let me be careful. The cross product formula gives:

$\mathbf{b} \times \mathbf{c} = (b_2 c_3 - b_3 c_2, b_3 c_1 - b_1 c_3, b_1 c_2 - b_2 c_1)$
$= (1 \cdot (-5) - 2 \cdot 5, 2 \cdot 0 - 3 \cdot (-5), 3 \cdot 5 - 1 \cdot 0)$ $= (-15, 15, 15)$.

$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 1(-15) + 2(15) + (-1)(15) = -15 + 30 - 15 = 0$.

Confirmed coplanar. $\blacksquare$

### Lines and Planes in 3D

**Equation of a plane:** $\mathbf{r} \cdot \mathbf{n} = d$, where $\mathbf{n}$ is the normal vector
and $d$ is a constant.

In Cartesian form: $ax + by + cz = d$.

The normal vector $\mathbf{n} = (a, b, c)$ is perpendicular to every vector in the plane.

**Angle between two planes:** The angle between their normal vectors.

$$
\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}
$$

**Angle between a line and a plane:** If the line has direction $\mathbf{d}$ and the plane has
normal $\mathbf{n}$, the angle $\phi$ between the line and the plane satisfies:

$$
\sin\phi = \frac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}
$$

**Distance from a point to a plane:**

$$
d = \frac{|\mathbf{n} \cdot \mathbf{r}_0 - d_0|}{|\mathbf{n}|}
$$

where $\mathbf{r}_0$ is the position vector of the point and $d_0$ is the constant in the plane
equation.

**Example:** Find the equation of the plane through $(1, 2, -1)$, $(3, 0, 2)$, and $(0, 1, 4)$.

$$
\overrightarrow{AB} = (2, -2, 3), \quad \overrightarrow{AC} = (-1, -1, 5)
$$

$$
\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} (-2)(5) - (3)(-1) \\ (3)(-1) - (2)(5) \\ (2)(-1) - (-2)(-1) \end{pmatrix} = \begin{pmatrix} -10 + 3 \\ -3 - 10 \\ -2 - 2 \end{pmatrix} = \begin{pmatrix} -7 \\ -13 \\ -4 \end{pmatrix}
$$

Using point $(1, 2, -1)$: $-7x - 13y - 4z = -7(1) - 13(2) - 4(-1) = -7 - 26 + 4 = -29$.

$$
7x + 13y + 4z = 29
$$

### Line of Intersection of Two Planes

Two non-parallel planes intersect in a line. To find the line of intersection:

1. The direction vector is $\mathbf{d} = \mathbf{n}_1 \times \mathbf{n}_2$
2. Find a point on both planes by setting one variable (e.g., $z = 0$) and solving the resulting
   $2 \times 2$ system

**Example:** Find the line of intersection of $x + y + z = 6$ and $2x - y + z = 3$.

Direction: $\mathbf{d} = (1, 1, 1) \times (2, -1, 1) = (1+1, 2-1, -1-2) = (2, 1, -3)$.

Set $z = 0$: $x + y = 6$ and $2x - y = 3$. Adding: $3x = 9$, so $x = 3$, $y = 3$.

Line: $\mathbf{r} = (3, 3, 0) + t(2, 1, -3)$.

**Example:** Find the shortest distance from the point $(2, 1, 3)$ to the plane $2x - y + 2z = 5$.

$\mathbf{n} = (2, -1, 2)$, $|\mathbf{n}| = \sqrt{4 + 1 + 4} = 3$.

$$
d = \frac{|2(2) - 1(1) + 2(3) - 5|}{3} = \frac{|4 - 1 + 6 - 5|}{3} = \frac{4}{3}
$$

**Example:** Find the angle between the planes $2x - y + 2z = 5$ and $x + 3y - z = 2$.

$\mathbf{n}_1 = (2, -1, 2)$, $\mathbf{n}_2 = (1, 3, -1)$.

$|\mathbf{n}_1| = 3$, $|\mathbf{n}_2| = \sqrt{11}$.

$\mathbf{n}_1 \cdot \mathbf{n}_2 = 2 - 3 - 2 = -3$.

$$
\cos\theta = \frac{|-3|}{3\sqrt{11}} = \frac{1}{\sqrt{11}} \approx 0.3015
$$

$$
\theta \approx 72.5°
$$

---

## Advanced Higher Matrices

### $3 \times 3$ Determinants

$$
\det A = \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

This is the cofactor expansion along the first row. You can expand along any row or column; choose
the one with the most zeros for efficiency.

**Properties of determinants:**

- $\det(AB) = \det(A)\det(B)$
- $\det(A^{-1}) = \frac{1}{\det(A)}$
- $\det(A^T) = \det(A)$
- Swapping two rows negates the determinant
- A row of zeros gives determinant zero
- If two rows are equal, the determinant is zero

### $3 \times 3$ Inverse

$$
A^{-1} = \frac{1}{\det A}\mathrm{adj}(A)
$$

where $\mathrm{adj}(A)$ is the adjugate (transpose of the cofactor matrix).

The cofactor $C_{ij}$ is $(-1)^{i+j}$ times the determinant of the $2 \times 2$ matrix obtained by
deleting row $i$ and column $j$.

**Example:** Find the inverse of
$A = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \\ 2 & 1 & 0 \end{pmatrix}$.

$\det A = 1(0 - 1) - 0(0 - 2) + 2(-1 - 6) = -1 + 0 - 14 = -15$.

Cofactor matrix:

$$
C = \begin{pmatrix} -1 & 2 & -7 \\ 2 & -4 & -1 \\ -6 & -3 & 3 \end{pmatrix}
$$

$\mathrm{adj}(A) = C^T = \begin{pmatrix} -1 & 2 & -6 \\ 2 & -4 & -3 \\ -7 & -1 & 3 \end{pmatrix}$.

$$
A^{-1} = \frac{1}{-15}\begin{pmatrix} -1 & 2 & -6 \\ 2 & -4 & -3 \\ -7 & -1 & 3 \end{pmatrix} = \begin{pmatrix} \frac{1}{15} & -\frac{2}{15} & \frac{2}{5} \\ -\frac{2}{15} & \frac{4}{15} & \frac{1}{5} \\ \frac{7}{15} & \frac{1}{15} & -\frac{1}{5} \end{pmatrix}
$$

### Eigenvalues and Eigenvectors (Advanced Higher)

A scalar $\lambda$ is an **eigenvalue** of $A$ if there exists a non-zero vector $\mathbf{v}$ such
that:

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

The vector $\mathbf{v}$ is called an **eigenvector** corresponding to $\lambda$.

**Geometric interpretation:** When $A$ acts on $\mathbf{v}$, it only stretches or compresses
$\mathbf{v}$ (by factor $\lambda$) without changing its direction.

**Finding Eigenvalues:** Solve the characteristic equation $\det(A - \lambda I) = 0$.

**Example:** Find the eigenvalues and eigenvectors of
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

$$
\det\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = 0
$$

$$
(4 - \lambda)(3 - \lambda) - 2 = 0
$$

$$
12 - 7\lambda + \lambda^2 - 2 = 0
$$

$$
\lambda^2 - 7\lambda + 10 = 0
$$

$$
(\lambda - 5)(\lambda - 2) = 0
$$

$\lambda = 5$ or $\lambda = 2$.

For $\lambda = 5$: $(A - 5I)\mathbf{v} = \mathbf{0}$:

$$
\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$-v_1 + v_2 = 0$, so $v_1 = v_2$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda = 2$: $(A - 2I)\mathbf{v} = \mathbf{0}$:

$$
\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$2v_1 + v_2 = 0$, so $v_2 = -2v_1$. Eigenvector: $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

**Example:** Find the eigenvalues and eigenvectors of
$\begin{pmatrix} 5 & 2 \\ 1 & 4 \end{pmatrix}$.

$$
\det\begin{pmatrix} 5 - \lambda & 2 \\ 1 & 4 - \lambda \end{pmatrix} = (5 - \lambda)(4 - \lambda) - 2 = \lambda^2 - 9\lambda + 18 = 0
$$

$$
(\lambda - 6)(\lambda - 3) = 0
$$

$\lambda = 6$ or $\lambda = 3$.

For $\lambda = 6$: $\begin{pmatrix} -1 & 2 \\ 1 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0}$, giving
$v_1 = 2v_2$. Eigenvector: $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

For $\lambda = 3$: $\begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0}$, giving
$v_1 = -v_2$. Eigenvector: $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

### Diagonalisation (Advanced Higher)

If an $n \times n$ matrix $A$ has $n$ linearly independent eigenvectors, it can be diagonalised:
$A = PDP^{-1}$, where $D$ is a diagonal matrix containing the eigenvalues and $P$ has the
eigenvectors as columns.

**Applications:**

- Computing $A^k = PD^kP^{-1}$ is efficient because $D^k$ is trivial (just raise diagonal entries to
  power $k$).
- Solving systems of differential equations.

---

## Common Pitfalls

1. **Confusing scalar and vector products:** The scalar product gives a scalar (number); the vector
   product gives a vector perpendicular to both inputs.

2. **Matrix multiplication is not commutative:** In general, $AB \neq BA$. Always multiply in the
   specified order.

3. **Dimension mismatch:** You can only multiply an $m \times n$ matrix by an $n \times p$ matrix.
   The "inner dimensions" must match.

4. **Forgetting the determinant in the inverse:** The inverse is $\dfrac{1}{\det A} \mathrm{adj}(A)$,
   not just $\mathrm{adj}(A)$. Forgetting the $1/\det A$ factor gives a wrong answer unless
   $\det A = 1$.

5. **Normal vector direction:** The normal to a plane can point in either direction; check
   consistency when computing angles. The angle between planes should be between $0$ and $\pi/2$.

6. **Eigenvector scaling:** Eigenvectors are not unique -- any non-zero scalar multiple is also an
   eigenvector. Always state the direction, not a specific magnitude.

7. **Sign errors in the cross product:** The cross product is anti-commutative:
   $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$. Getting the order wrong negates
   the result.

8. **Cofactor sign errors:** The cofactor $C_{ij}$ includes a factor of $(-1)^{i+j}$. For position
   $(2, 3)$, this is $(-1)^5 = -1$. Getting the sign wrong invalidates the entire inverse.

9. **Confusing rotation direction:** A positive angle in the rotation matrix represents
   anticlockwise rotation. For clockwise rotation by $\theta$, use $-\theta$ or swap the signs of
   the off-diagonal entries.

---

## Practice Questions

1. Given $\mathbf{a} = (2, -1, 3)$ and $\mathbf{b} = (4, 2, -1)$, find
   $\mathbf{a} \cdot \mathbf{b}$, $|\mathbf{a}|$, $|\mathbf{b}|$, and the angle between them.

2. Find the equation of the plane containing the points $(1, 0, 2)$, $(3, 1, -1)$, and $(0, 2, 4)$.

3. Calculate $\mathbf{a} \times \mathbf{b}$ for $\mathbf{a} = (1, 3, -2)$ and
   $\mathbf{b} = (4, -1, 5)$. Verify that $\mathbf{a} \times \mathbf{b}$ is perpendicular to both
   $\mathbf{a}$ and $\mathbf{b}$.

4. Find the eigenvalues and eigenvectors of $\begin{pmatrix} 5 & 2 \\ 1 & 4 \end{pmatrix}$.

5. Compute the determinant and inverse of
   $\begin{pmatrix} 2 & 0 & 1 \\ -1 & 3 & 2 \\ 1 & 1 & -1 \end{pmatrix}$.

6. Show that the vectors $(1, 2, -1)$, $(3, 1, 2)$, and $(0, 5, -5)$ are coplanar.

7. Find the shortest distance from the point $(2, 1, 3)$ to the plane $2x - y + 2z = 5$.

8. Solve the system of equations using matrices:

$$2x + y - z = 8$$ $$x - y + 3z = 1$$ $$3x + 2y + z = 11$$

9. Find the line of intersection of the planes $x + 2y - z = 4$ and $3x - y + 2z = 1$.

10. Find the angle between the planes $2x - y + 2z = 5$ and $x + 3y - z = 2$.

11. Use the matrix $\begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$ to describe the transformation.
    What is the relationship between this matrix and $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$?

12. Find the area of the triangle with vertices $A(1, 0, 2)$, $B(3, -1, 4)$, and $C(0, 2, -1)$.

13. Given $\overrightarrow{OA} = (1, -1, 3)$ and $\overrightarrow{OB} = (4, 2, -1)$, find the
    position vector of the point $P$ on $AB$ such that $AP : PB = 3 : 1$.

14. Find the angle between the lines $\mathbf{r} = (0, 0, 0) + s(1, 2, -1)$ and
    $\mathbf{r} = (1, 1, 0) + t(2, -1, 3)$.

15. A $2 \times 2$ matrix $A$ has eigenvalues $\lambda_1 = 2$ and $\lambda_2 = 5$ with corresponding
    eigenvectors $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.
    Find $A$ and use it to compute $A^3$.

16. Reflect the point $(2, 5)$ in the line $y = x$ using a matrix method. Verify your answer
    geometrically.
