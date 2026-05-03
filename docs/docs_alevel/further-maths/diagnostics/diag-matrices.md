---
title: Matrices -- Diagnostic Tests
description: "A-Level Further Maths diagnostic tests for matrices: operations, inverses, transformations, eigenvalues, 3x3 determinants."
slug: diag-further-matrices
hide_table_of_contents: true
---

# Matrices — Diagnostic Tests

## Unit Tests

### UT-1: Matrix Operations and Inverses
**Question:** Given $\mathbf{A} = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$ and $\mathbf{B} = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$, (a) calculate $\mathbf{AB}$ and $\mathbf{BA}$. Is matrix multiplication commutative? (b) Calculate $\det(\mathbf{A})$ and $\mathbf{A}^{-1}$. (c) Solve $\mathbf{A}\mathbf{x} = \begin{pmatrix} 7 \\ 12 \end{pmatrix}$. (d) Calculate $(\mathbf{AB})^{-1}$ and verify it equals $\mathbf{B}^{-1}\mathbf{A}^{-1}$.

**Solution:**

(a) $\mathbf{AB} = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ 2 & 6 \end{pmatrix}$.
$\mathbf{BA} = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 1 & -3 \\ 4 & 8 \end{pmatrix}$.
$\mathbf{AB} \ne \mathbf{BA}$, so matrix multiplication is **not** commutative.

(b) $\det(\mathbf{A}) = 3(4) - 1(2) = 12 - 2 = 10$.
$\mathbf{A}^{-1} = \frac{1}{10}\begin{pmatrix} 4 & -1 \\ -2 & 3 \end{pmatrix} = \begin{pmatrix} 0.4 & -0.1 \\ -0.2 & 0.3 \end{pmatrix}$.

(c) $\mathbf{x} = \mathbf{A}^{-1}\begin{pmatrix} 7 \\ 12 \end{pmatrix} = \begin{pmatrix} 0.4 & -0.1 \\ -0.2 & 0.3 \end{pmatrix}\begin{pmatrix} 7 \\ 12 \end{pmatrix} = \begin{pmatrix} 2.8 - 1.2 \\ -1.4 + 3.6 \end{pmatrix} = \begin{pmatrix} 1.6 \\ 2.2 \end{pmatrix}$.

(d) $\det(\mathbf{B}) = 1(2) - (-1)(0) = 2$. $\mathbf{B}^{-1} = \frac{1}{2}\begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$.
$\mathbf{B}^{-1}\mathbf{A}^{-1} = \frac{1}{20}\begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 4 & -1 \\ -2 & 3 \end{pmatrix} = \frac{1}{20}\begin{pmatrix} 6 & 1 \\ -2 & 3 \end{pmatrix}$.

$(\mathbf{AB})^{-1}$: $\det(\mathbf{AB}) = 3(6) - (-1)(2) = 20$.
$(\mathbf{AB})^{-1} = \frac{1}{20}\begin{pmatrix} 6 & 1 \\ -2 & 3 \end{pmatrix}$. Confirmed equal.

### UT-2: 3x3 Determinants and Inverses
**Question:** $\mathbf{M} = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 2 & 0 & 1 \end{pmatrix}$. (a) Calculate $\det(\mathbf{M})$. (b) Find $\mathbf{M}^{-1}$. (c) Solve $\mathbf{M}\mathbf{x} = \begin{pmatrix} 5 \\ 7 \\ 4 \end{pmatrix}$. (d) Explain what $\det(\mathbf{M}) = 0$ would mean.

**Solution:**

(a) $\det(\mathbf{M}) = 1\begin{vmatrix} 1 & 3 \\ 0 & 1 \end{vmatrix} - 2\begin{vmatrix} 0 & 3 \\ 2 & 1 \end{vmatrix} + 0 = 1(1 - 0) - 2(0 - 6) = 1 + 12 = 13$.

(b) Cofactors: $C_{11} = 1$, $C_{12} = 6$, $C_{13} = -2$, $C_{21} = -2$, $C_{22} = 1$, $C_{23} = 4$, $C_{31} = 6$, $C_{32} = -3$, $C_{33} = 1$.

$\mathbf{M}^{-1} = \frac{1}{13}\begin{pmatrix} 1 & -2 & 6 \\ 6 & 1 & -3 \\ -2 & 4 & 1 \end{pmatrix}$.

(c) $\mathbf{x} = \mathbf{M}^{-1}\begin{pmatrix} 5 \\ 7 \\ 4 \end{pmatrix} = \frac{1}{13}\begin{pmatrix} 5 - 14 + 24 \\ 30 + 7 - 12 \\ -10 + 28 + 4 \end{pmatrix} = \frac{1}{13}\begin{pmatrix} 15 \\ 25 \\ 22 \end{pmatrix}$.

(d) If $\det(\mathbf{M}) = 0$, the matrix is **singular** (non-invertible). This means: the rows (and columns) are linearly dependent, the matrix does not have full rank, the system $\mathbf{M}\mathbf{x} = \mathbf{b}$ has either no solution or infinitely many solutions (depending on $\mathbf{b}$), and the corresponding linear transformation collapses the space into a lower dimension.

### UT-3: Eigenvalues and Eigenvectors
**Question:** $\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$. (a) Find the eigenvalues of $\mathbf{A}$. (b) Find the corresponding eigenvectors. (c) Form the matrix $\mathbf{P}$ of eigenvectors and $\mathbf{P}^{-1}\mathbf{A}\mathbf{P}$. What form does this take? (d) Use the eigenvalues to calculate $\mathbf{A}^5$.

**Solution:**

(a) $\det(\mathbf{A} - \lambda\mathbf{I}) = \begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0$.
$(\lambda - 5)(\lambda - 2) = 0$. Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = 2$.

(b) For $\lambda = 5$: $(\mathbf{A} - 5\mathbf{I})\mathbf{v} = \mathbf{0}$. $\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \mathbf{0}$. $-x + y = 0$, $y = x$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda = 2$: $(\mathbf{A} - 2\mathbf{I})\mathbf{v} = \mathbf{0}$. $\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \mathbf{0}$. $2x + y = 0$, $y = -2x$. Eigenvector: $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

(c) $\mathbf{P} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}$. $\det(\mathbf{P}) = -3$. $\mathbf{P}^{-1} = \frac{1}{-3}\begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$.

$\mathbf{D} = \mathbf{P}^{-1}\mathbf{A}\mathbf{P} = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$ (diagonal matrix of eigenvalues).

(d) $\mathbf{A}^5 = \mathbf{P}\mathbf{D}^5\mathbf{P}^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}\begin{pmatrix} 3125 & 0 \\ 0 & 32 \end{pmatrix}\frac{1}{3}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$.

$= \frac{1}{3}\begin{pmatrix} 3125 & 32 \\ 3125 & -64 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 6282 & 3093 \\ 6186 & 3189 \end{pmatrix} = \begin{pmatrix} 2094 & 1031 \\ 2062 & 1063 \end{pmatrix}$.

---

## Integration Tests

### IT-1: Matrices and Geometric Transformations (with Vectors)
**Question:** The matrix $\mathbf{T} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ represents a rotation. (a) Find the angle and direction of rotation. (b) The point $(3, 4)$ is transformed by $\mathbf{T}$. Calculate the image. (c) If $\mathbf{S} = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ (reflection in the $y$-axis), find $\mathbf{TS}$ and describe the combined transformation. (d) Calculate $\det(\mathbf{T})$ and $\det(\mathbf{S})$, and explain how determinants relate to area scale factors.

**Solution:**

(a) $\mathbf{T}$ maps $(1, 0)$ to $(0, 1)$ and $(0, 1)$ to $(-1, 0)$. This is a rotation of $90^\circ$ **anticlockwise** about the origin.

(b) $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} -4 \\ 3 \end{pmatrix}$. Image: $(-4, 3)$.

(c) $\mathbf{TS} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$.

This maps $(1,0)$ to $(0,-1)$ and $(0,1)$ to $(-1,0)$: a reflection in the line $y = -x$.

(d) $\det(\mathbf{T}) = 0 \times 0 - (-1) \times 1 = 1$. $\det(\mathbf{S}) = -1 \times 1 - 0 = -1$.

The absolute value of the determinant gives the area scale factor: $\mathbf{T}$ preserves area (scale factor 1), $\mathbf{S}$ preserves area (scale factor $|-1| = 1$). The sign indicates orientation: positive $=$ orientation preserved (rotation), negative $=$ orientation reversed (reflection).

### IT-2: Systems of Linear Equations (with Complex Numbers)
**Question:** Solve the system: $x + 2y + z = 4$, $2x - y + 3z = 9$, $x + y + z = 5$. (a) Write in matrix form $\mathbf{A}\mathbf{x} = \mathbf{b}$. (b) Calculate $\det(\mathbf{A})$. (c) Find $\mathbf{A}^{-1}$ and solve for $\mathbf{x}$. (d) Explain what would happen if $\det(\mathbf{A}) = 0$.

**Solution:**

(a) $\begin{pmatrix} 1 & 2 & 1 \\ 2 & -1 & 3 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 4 \\ 9 \\ 5 \end{pmatrix}$.

(b) $\det(\mathbf{A}) = 1(-1 - 3) - 2(2 - 3) + 1(2 + 1) = -4 + 2 + 3 = 1$.

(c) Cofactors: $C_{11} = -4$, $C_{12} = 1$, $C_{13} = 3$, $C_{21} = -1$, $C_{22} = 0$, $C_{23} = 1$, $C_{31} = 7$, $C_{32} = -1$, $C_{33} = -5$.

$\mathbf{A}^{-1} = \begin{pmatrix} -4 & -1 & 7 \\ 1 & 0 & -1 \\ 3 & 1 & -5 \end{pmatrix}$.

$\mathbf{x} = \mathbf{A}^{-1}\begin{pmatrix} 4 \\ 9 \\ 5 \end{pmatrix} = \begin{pmatrix} -16 - 9 + 35 \\ 4 + 0 - 5 \\ 12 + 9 - 25 \end{pmatrix} = \begin{pmatrix} 10 \\ -1 \\ -4 \end{pmatrix}$.

$x = 10$, $y = -1$, $z = -4$. Verification: $10 - 2 - 4 = 4 \checkmark$; $20 + 1 - 12 = 9 \checkmark$; $10 - 1 - 4 = 5 \checkmark$.

(d) If $\det(\mathbf{A}) = 0$, the matrix is singular and $\mathbf{A}^{-1}$ does not exist. This means the three equations are linearly dependent. The system has either no unique solution: either no solution (inconsistent) or infinitely many solutions.

### IT-3: Matrix Applications (with Differential Equations)
**Question:** The matrix $\mathbf{A} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ defines a system of coupled differential equations $\frac{d\mathbf{x}}{dt} = \mathbf{A}\mathbf{x}$ where $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$. (a) Find the eigenvalues and eigenvectors of $\mathbf{A}$. (b) Write the general solution for $\mathbf{x}(t)$ given that $\mathbf{x}(0) = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$. (c) Calculate $\mathbf{x}(1)$. (d) Describe the long-term behaviour of the solution.

**Solution:**

(a) $\det(\mathbf{A} - \lambda\mathbf{I}) = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = 0$. $\lambda_1 = 3$, $\lambda_2 = 1$.

$\lambda = 3$: eigenvector $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. $\lambda = 1$: eigenvector $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

(b) General solution: $\mathbf{x}(t) = c_1 e^{3t}\begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 e^{t}\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

$\mathbf{x}(0) = c_1\begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$.
$c_1 + c_2 = 3$ and $c_1 - c_2 = 1$. Solving: $c_1 = 2$, $c_2 = 1$.

$\mathbf{x}(t) = 2e^{3t}\begin{pmatrix} 1 \\ 1 \end{pmatrix} + e^{t}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2e^{3t} + e^t \\ 2e^{3t} - e^t \end{pmatrix}$.

(c) $\mathbf{x}(1) = \begin{pmatrix} 2e^3 + e \\ 2e^3 - e \end{pmatrix} = \begin{pmatrix} 2(20.086) + 2.718 \\ 2(20.086) - 2.718 \end{pmatrix} = \begin{pmatrix} 42.89 \\ 37.45 \end{pmatrix}$.

(d) As $t \to \infty$, the term $e^{3t}$ dominates (both eigenvalues are positive). Both $x$ and $y$ grow exponentially, with $x \approx 2e^{3t}$ and $y \approx 2e^{3t}$. The solution diverges away from the origin -- the origin is an **unstable node**. The ratio $x/y \to 1$ as $t \to \infty$, meaning the trajectory approaches the direction of the eigenvector $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
