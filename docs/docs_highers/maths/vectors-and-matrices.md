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
column vector $(a_1, a_2)$.

**Magnitude (Modulus):**

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2}$$

In 3D: $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$.

**Unit Vector:**

$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$$

**Example:** Find the unit vector in the direction of $\mathbf{a} = (3, -4)$.

$$|\mathbf{a}| = \sqrt{9 + 16} = 5$$

$$\hat{\mathbf{a}} = \left(\frac{3}{5}, -\frac{4}{5}\right)$$

### Vector Arithmetic

**Addition:**

$$\begin{pmatrix} a_1 \\ a_2 \end{pmatrix} + \begin{pmatrix} b_1 \\ b_2 \end{pmatrix} = \begin{pmatrix} a_1 + b_1 \\ a_2 + b_2 \end{pmatrix}$$

**Scalar Multiplication:**

$$k\begin{pmatrix} a_1 \\ a_2 \end{pmatrix} = \begin{pmatrix} ka_1 \\ ka_2 \end{pmatrix}$$

**Scalar Product (Dot Product):**

$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\mathbf{a}||\mathbf{b}|\cos\theta$$

where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.

**Example:** Find the angle between $\mathbf{a} = (2, 1, -1)$ and $\mathbf{b} = (1, -3, 2)$.

$$\mathbf{a} \cdot \mathbf{b} = 2(1) + 1(-3) + (-1)(2) = 2 - 3 - 2 = -3$$

$$|\mathbf{a}| = \sqrt{4 + 1 + 1} = \sqrt{6}$$

$$|\mathbf{b}| = \sqrt{1 + 9 + 4} = \sqrt{14}$$

$$\cos\theta = \frac{-3}{\sqrt{6}\sqrt{14}} = \frac{-3}{\sqrt{84}} = \frac{-3}{2\sqrt{21}}$$

$$\theta = \arccos\left(\frac{-3}{2\sqrt{21}}\right) \approx 109.1°$$

### Position Vectors and Displacement

The **position vector** of point $A$ relative to an origin $O$ is
$\overrightarrow{OA} = \mathbf{a}$.

The **displacement** from $A$ to $B$ is $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.

**Example:** Given $\overrightarrow{OA} = (3, 1, -2)$ and $\overrightarrow{OB} = (-1, 4, 3)$, find
$\overrightarrow{AB}$ and the distance $AB$.

$$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = (-1 - 3, 4 - 1, 3 - (-2)) = (-4, 3, 5)$$

$$AB = |\overrightarrow{AB}| = \sqrt{16 + 9 + 25} = \sqrt{50} = 5\sqrt{2}$$

### Properties of the Scalar Product

- $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$
- $\mathbf{a} \cdot \mathbf{b} = 0$ if and only if $\mathbf{a}$ is perpendicular to $\mathbf{b}$
  (for non-zero vectors)
- $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$ (commutative)
- $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$
  (distributive)

**Example:** Determine the value of $k$ for which the vectors $\mathbf{a} = (k, 2, -1)$ and
$\mathbf{b} = (3, k, 4)$ are perpendicular.

$$\mathbf{a} \cdot \mathbf{b} = 0$$

$$3k + 2k - 4 = 0$$

$$5k = 4$$

$$k = \frac{4}{5}$$

### Section Formula (Higher)

The position vector of a point that divides the line segment from $A$ to $B$ in the ratio $m : n$
is:

$$\mathbf{r} = \frac{n\mathbf{a} + m\mathbf{b}}{m + n}$$

The midpoint of $AB$ (when $m = n = 1$):

$$\mathbf{r} = \frac{\mathbf{a} + \mathbf{b}}{2}$$

---

## Higher Matrices

### Matrix Notation and Operations

A matrix is a rectangular array of numbers. An $m \times n$ matrix has $m$ rows and $n$ columns.

$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}$$

**Addition:** $C = A + B$ where $c_{ij} = a_{ij} + b_{ij}$ (matrices must have the same dimensions).

**Scalar Multiplication:** $kA$ has entries $ka_{ij}$.

**Matrix Multiplication:** If $A$ is $m \times n$ and $B$ is $n \times p$, then $C = AB$ is
$m \times p$ where:

$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$

**Example:** Calculate $AB$ where $A = \begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix}$ and
$B = \begin{pmatrix} 1 & 4 \\ 0 & -2 \end{pmatrix}$.

$$AB = \begin{pmatrix} 2(1) + 1(0) & 2(4) + 1(-2) \\ -1(1) + 3(0) & -1(4) + 3(-2) \end{pmatrix} = \begin{pmatrix} 2 & 6 \\ -1 & -10 \end{pmatrix}$$

### Determinant and Inverse of a $2 \times 2$ Matrix

**Determinant:**

$$\det A = |A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

**Inverse:**

$$A^{-1} = \frac{1}{\det A}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

The inverse exists if and only if $\det A \neq 0$.

**Example:** Find the inverse of $A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$.

$$\det A = 3(2) - 5(1) = 6 - 5 = 1$$

$$A^{-1} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$$

### Solving Systems of Linear Equations

A system $A\mathbf{x} = \mathbf{b}$ has solution $\mathbf{x} = A^{-1}\mathbf{b}$ (provided $A$ is
invertible).

**Example:** Solve the system:

$$3x + 5y = 11$$ $$x + 2y = 5$$

$$\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}^{-1}\begin{pmatrix} 11 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} 11 \\ 5 \end{pmatrix} = \begin{pmatrix} 22 - 25 \\ -11 + 15 \end{pmatrix} = \begin{pmatrix} -3 \\ 4 \end{pmatrix}$$

Solution: $x = -3$, $y = 4$.

### Transformations Using Matrices

**2D Transformations:**

| Transformation                    | Matrix                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| Reflection in $x$-axis            | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$                                     |
| Reflection in $y$-axis            | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$                                     |
| Rotation by $\theta$ about origin | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Enlargement by scale factor $k$   | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$                                      |

**Example:** Rotate the point $(3, 2)$ by $90°$ anticlockwise about the origin.

$$\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 3 \\ 2 \end{pmatrix} = \begin{pmatrix} -2 \\ 3 \end{pmatrix}$$

The image is $(-2, 3)$.

---

## Advanced Higher Vectors

### Vector Product (Cross Product)

The vector product of $\mathbf{a} = (a_1, a_2, a_3)$ and $\mathbf{b} = (b_1, b_2, b_3)$ is:

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}$$

**Properties:**

- $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$ (anti-commutative)
- $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$
- $\mathbf{a} \times \mathbf{b}$ is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$
- $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ if $\mathbf{a}$ and $\mathbf{b}$ are parallel

**Example:** Find $\mathbf{a} \times \mathbf{b}$ where $\mathbf{a} = (1, 2, 3)$ and
$\mathbf{b} = (4, -1, 2)$.

$$\mathbf{a} \times \mathbf{b} = \begin{pmatrix} (2)(2) - (3)(-1) \\ (3)(4) - (1)(2) \\ (1)(-1) - (2)(4) \end{pmatrix} = \begin{pmatrix} 4 + 3 \\ 12 - 2 \\ -1 - 8 \end{pmatrix} = \begin{pmatrix} 7 \\ 10 \\ -9 \end{pmatrix}$$

### Triple Scalar Product

$$[\mathbf{a}, \mathbf{b}, \mathbf{c}] = \mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$$

This equals the volume of the parallelepiped formed by vectors $\mathbf{a}$, $\mathbf{b}$, and
$\mathbf{c}$.

The three vectors are coplanar if and only if $[\mathbf{a}, \mathbf{b}, \mathbf{c}] = 0$.

### Lines and Planes in 3D

**Equation of a plane:** $\mathbf{r} \cdot \mathbf{n} = d$, where $\mathbf{n}$ is the normal vector
and $d$ is a constant.

In Cartesian form: $ax + by + cz = d$.

**Angle between two planes:** The angle between their normal vectors.

**Example:** Find the equation of the plane through $(1, 2, -1)$, $(3, 0, 2)$, and $(0, 1, 4)$.

$$\overrightarrow{AB} = (2, -2, 3), \quad \overrightarrow{AC} = (-1, -1, 5)$$

$$\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} (-2)(5) - (3)(-1) \\ (3)(-1) - (2)(5) \\ (2)(-1) - (-2)(-1) \end{pmatrix} = \begin{pmatrix} -10 + 3 \\ -3 - 10 \\ -2 - 2 \end{pmatrix} = \begin{pmatrix} -7 \\ -13 \\ -4 \end{pmatrix}$$

Using point $(1, 2, -1)$: $-7x - 13y - 4z = -7(1) - 13(2) - 4(-1) = -7 - 26 + 4 = -29$.

$$7x + 13y + 4z = 29$$

---

## Advanced Higher Matrices

### $3 \times 3$ Determinants

$$\det A = \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)$$

### $3 \times 3$ Inverse

$$A^{-1} = \frac{1}{\det A}\text{adj}(A)$$

where $\text{adj}(A)$ is the adjugate (transpose of the cofactor matrix).

**Example:** Find the inverse of
$A = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \\ 2 & 1 & 0 \end{pmatrix}$.

$\det A = 1(0 - 1) - 0(0 - 2) + 2(-1 - 6) = -1 + 0 - 14 = -15$.

Cofactor matrix:

$$C = \begin{pmatrix} -1 & 2 & -7 \\ 2 & -4 & -1 \\ -6 & -3 & 3 \end{pmatrix}$$

$\text{adj}(A) = C^T = \begin{pmatrix} -1 & 2 & -6 \\ 2 & -4 & -3 \\ -7 & -1 & 3 \end{pmatrix}$.

$$A^{-1} = \frac{1}{-15}\begin{pmatrix} -1 & 2 & -6 \\ 2 & -4 & -3 \\ -7 & -1 & 3 \end{pmatrix} = \begin{pmatrix} \frac{1}{15} & -\frac{2}{15} & \frac{2}{5} \\ -\frac{2}{15} & \frac{4}{15} & \frac{1}{5} \\ \frac{7}{15} & \frac{1}{15} & -\frac{1}{5} \end{pmatrix}$$

### Eigenvalues and Eigenvectors (Advanced Higher)

A scalar $\lambda$ is an **eigenvalue** of $A$ if there exists a non-zero vector $\mathbf{v}$ such
that:

$$A\mathbf{v} = \lambda\mathbf{v}$$

The vector $\mathbf{v}$ is called an **eigenvector** corresponding to $\lambda$.

**Finding Eigenvalues:** Solve the characteristic equation $\det(A - \lambda I) = 0$.

**Example:** Find the eigenvalues and eigenvectors of
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

$$\det\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = 0$$

$$(4 - \lambda)(3 - \lambda) - 2 = 0$$

$$12 - 7\lambda + \lambda^2 - 2 = 0$$

$$\lambda^2 - 7\lambda + 10 = 0$$

$$(\lambda - 5)(\lambda - 2) = 0$$

$\lambda = 5$ or $\lambda = 2$.

For $\lambda = 5$: $(A - 5I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$-v_1 + v_2 = 0$, so $v_1 = v_2$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda = 2$: $(A - 2I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$2v_1 + v_2 = 0$, so $v_2 = -2v_1$. Eigenvector: $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

---

## Common Pitfalls

1. **Confusing scalar and vector products:** The scalar product gives a scalar (number); the vector
   product gives a vector.

2. **Matrix multiplication is not commutative:** In general, $AB \neq BA$.

3. **Dimension mismatch:** You can only multiply an $m \times n$ matrix by an $n \times p$ matrix.

4. **Forgetting the determinant in the inverse:** The inverse is $\dfrac{1}{\det A} \text{adj}(A)$,
   not just $\text{adj}(A)$.

5. **Normal vector direction:** The normal to a plane can point in either direction; check
   consistency when computing angles.

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
