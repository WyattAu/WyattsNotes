---
title: Systems of Linear Equations
tags:
  - Mathematics
  - University
---

### 4.1 Gaussian Elimination

A system of $m$ linear equations in $n$ unknowns can be written as $A\mathbf{x} = \mathbf{b}$Where
$A \in \mathcal{M}_{m \times n}(\mathbb{R})$, $\mathbf{x} \in \mathbb{R}^n$And
$\mathbf{b} \in \mathbb{R}^m$.

**Gaussian elimination** transforms the augmented matrix $[A \mid \mathbf{b}]$ into **row echelon
Form** (REF) using elementary row operations:

1. Swap two rows ($R_i \leftrightarrow R_j$).
2. Multiply a row by a non-zero scalar ($R_i \to \alpha R_i$).
3. Add a multiple of one row to another ($R_i \to R_i + \alpha R_j$).

A matrix is in REF if:

- All zero rows are at the bottom.
- The leading entry (pivot) of each non-zero row is strictly to the right of the pivot above.
- All entries below a pivot are zero.

**Reduced row echelon form** (RREF) additionally requires:

- Each pivot is 1.
- Each pivot is the only non-zero entry in its column.

**Theorem 4.1.** Every matrix has a unique RREF. Two matrices are row-equivalent if and only if they
Have the same RREF.

### 4.2 Existence and Uniqueness

**Theorem 4.2 (Rouché--Capelli).** The system $A\mathbf{x} = \mathbf{b}$ is consistent (has at least
one Solution) if and only if

$$\mathrm{rank}(A) = \mathrm{rank}([A \mid \mathbf{b}])$$

If consistent, the solution set has $\dim(\mathrm{null}(A))$ free parameters, where
$\dim(\mathrm{null}(A)) = n - \mathrm{rank}(A)$.

_Proof._ Let the RREF of $[A \mid \mathbf{b}]$ have $r = \mathrm{rank}(A)$ pivots in the coefficient
Columns. The system is inconsistent if and only if the last non-zero row is $[0 \cdots 0 \mid 1]$
Which occurs precisely when the augmented column contains a pivot, i.e., when
$\mathrm{rank}([A \mid \mathbf{b}]) \gt r$.

If consistent, the $r$ pivot variables are determined by the $n - r$ free variables, yielding
$n - \mathrm{rank}(A)$ degrees of freedom. $\blacksquare$

### 4.3 LU Decomposition

An **LU decomposition** of $A \in \mathcal{M}_{n \times n}(\mathbb{R})$ writes $A = LU$ where $L$ is
Lower triangular with 1s on the diagonal, and $U$ is upper triangular.

**Theorem 4.3.** If Gaussian elimination can be performed on $A$ without row exchanges, then $A$
Admits an LU decomposition.

**Algorithm.** Store the multipliers $m_{ij}$ (used to eliminate entry $a_{ij}$) in the lower
Triangular portion. The resulting upper triangular matrix is $U$And the multipliers form $L$.

**Worked Example.** Find the LU decomposition of

$$A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Step 1: Eliminate below $a_{11}$. $m_{21} = 4/2 = 2$, $m_{31} = 8/2 = 4$.

$$\begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}$$

Step 2: Eliminate below $a_{22}$. $m_{32} = 3/1 = 3$.

$$U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

$$L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}$$

Verify: $LU = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix} = A$. $\blacksquare$

</details>

To solve $A\mathbf{x} = \mathbf{b}$First solve $L\mathbf{y} = \mathbf{b}$ (forward substitution),
Then $U\mathbf{x} = \mathbf{y}$ (back substitution).

### 4.4 Gaussian Elimination with Partial Pivoting

When a pivot is zero (or very small), we swap rows to bring the largest available entry in the
Current column into the pivot position. This is **partial pivoting**, and it improves numerical
Stability.

**Problem.** Solve the system using Gaussian elimination with partial pivoting:

$$\begin{aligned} x_1 + 2x_2 + x_3 &= 5 \\ 3x_1 + x_2 - x_3 &= 2 \\ 2x_1 + 3x_2 + 4x_3 &= 11 \end{aligned}$$

<details>
<summary>Solution</summary>

Augmented matrix:

$$[A \mid \mathbf{b}] = \begin{pmatrix} 1 & 2 & 1 & 5 \\ 3 & 1 & -1 & 2 \\ 2 & 3 & 4 & 11 \end{pmatrix}$$

**Step 1.** Column 1: largest entry is 3 in row 2. Swap $R_1 \leftrightarrow R_2$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 1 & 2 & 1 & 5 \\ 2 & 3 & 4 & 11 \end{pmatrix}$$

$R_2 \to R_2 - \frac{1}{3}R_1$, $R_3 \to R_3 - \frac{2}{3}R_1$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 0 & 5/3 & 4/3 & 13/3 \\ 0 & 7/3 & 14/3 & 29/3 \end{pmatrix}$$

**Step 2.** Column 2: largest entry below pivot is $7/3$ in row 3. Swap $R_2 \leftrightarrow R_3$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 0 & 7/3 & 14/3 & 29/3 \\ 0 & 5/3 & 4/3 & 13/3 \end{pmatrix}$$

$R_3 \to R_3 - \frac{5}{7}R_2$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 0 & 7/3 & 14/3 & 29/3 \\ 0 & 0 & -2/7 & -6/7 \end{pmatrix}$$

**Back substitution.** From row 3: $-\frac{2}{7}x_3 = -\frac{6}{7}$So $x_3 = 3$.

From row 2: $\frac{7}{3}x_2 + \frac{14}{3}(3) = \frac{29}{3}$So
$\frac{7}{3}x_2 = \frac{29}{3} - 14 = -\frac{13}{3}$ Giving $x_2 = -\frac{13}{7}$.

From row 1: $3x_1 + (-\frac{13}{7}) - 3 = 2$So $3x_1 = 2 + 3 + \frac{13}{7} = \frac{48}{7}$ Giving
$x_1 = \frac{16}{7}$.

**Solution:** $x_1 = \frac{16}{7}$, $x_2 = -\frac{13}{7}$, $x_3 = 3$. $\blacksquare$

</details>

### 4.5 Least Squares Solutions

When $A\mathbf{x} = \mathbf{b}$ is overdetermined (more equations than unknowns) and inconsistent,
We seek $\mathbf{x}$ that minimises $\lVert A\mathbf{x} - \mathbf{b} \rVert^2$.

**Theorem 4.4 (Normal Equations).** The least squares solution $\hat{\mathbf{x}}$ satisfies

$$A^T A \hat{\mathbf{x}} = A^T \mathbf{b}$$

If $A$ has full column rank, then $A^T A$ is invertible and
$\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b}$.

_Proof._ The error vector $\mathbf{e} = A\mathbf{x} - \mathbf{b}$ is minimised when
$\mathbf{e} \perp \mathrm{col}(A)$ I.e., when $A^T \mathbf{e} = \mathbf{0}$. This gives
$A^T(A\mathbf{x} - \mathbf{b}) = \mathbf{0}$ Or $A^T A \mathbf{x} = A^T \mathbf{b}$. If $A$ has full
column rank, then $\ker(A) = \{\mathbf{0}\}$ So $\ker(A^T A) = \ker(A) = \{\mathbf{0}\}$Meaning
$A^T A$ is invertible. $\blacksquare$

**Problem.** Find the least squares line $y = ax + b$ fitting the data points $(1, 1)$, $(2, 1)$,
$(3, 3)$.

<details>
<summary>Solution</summary>

The system is
$\begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix}$
I.e., $A\mathbf{x} = \mathbf{b}$ with $A = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}$
$\mathbf{x} = (a, b)^T$, $\mathbf{b} = (1, 1, 3)^T$.

Compute
$A^T A = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix}$.

$A^T \mathbf{b} = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$.

Solve
$\begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$:

$\det(A^T A) = 42 - 36 = 6$.

$(A^T A)^{-1} = \frac{1}{6}\begin{pmatrix} 3 & -6 \\ -6 & 14 \end{pmatrix}$.

$\hat{\mathbf{x}} = \frac{1}{6}\begin{pmatrix} 3 & -6 \\ -6 & 14 \end{pmatrix}\begin{pmatrix} 12 \\ 5 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 36 - 30 \\ -72 + 70 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 6 \\ -2 \end{pmatrix} = \begin{pmatrix} 1 \\ -1/3 \end{pmatrix}$.

The least squares line is $y = x - 1/3$. $\blacksquare$

</details>

### 4.6 Worked Example: System with Infinitely Many Solutions

**Problem.** Solve the system:

$$\begin{aligned} x_1 + 2x_2 - x_3 + 3x_4 &= 1 \\ 2x_1 + 4x_2 - x_3 + 5x_4 &= 2 \\ x_1 + 2x_2 + x_3 + x_4 &= 0 \end{aligned}$$

<details>
<summary>Solution</summary>

$$\begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 2 & 4 & -1 & 5 & 2 \\ 1 & 2 & 1 & 1 & 0 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 2 & -2 & -1 \end{pmatrix}$$

$$\xrightarrow{R_3 - 2R_2} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & -1 \end{pmatrix}$$

The last row reads $0 = -1$So the system is **inconsistent** (no solution).

**Revised problem:** Change the last equation to $x_1 + 2x_2 + x_3 + x_4 = 2$:

$$\begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 2 & 4 & -1 & 5 & 2 \\ 1 & 2 & 1 & 1 & 2 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 2 & -2 & 1 \end{pmatrix}$$

$$\xrightarrow{R_3 - 2R_2} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{pmatrix}$$

Still inconsistent! The RREF reveals $0 = 1$ in the last row.

**Revised again:** Change the last equation to $x_1 + 2x_2 + x_3 + x_4 = 1$:

$$\begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 2 & 4 & -1 & 5 & 2 \\ 1 & 2 & 1 & 1 & 1 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 2 & -2 & 0 \end{pmatrix}$$

$$\xrightarrow{R_3 - 2R_2} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{pmatrix}$$

Now the system is consistent. Pivots in columns 1 and 3; free variables are $x_2$ and $x_4$. From
row 2: $x_3 = x_4$. From row 1: $x_1 = 1 - 2x_2 + x_3 - 3x_4 = 1 - 2x_2 - 2x_4$.

Solution set: $\{(1 - 2s - 2t, s, t, t) : s, t \in \mathbb{R}\}$.

In parametric form:
$\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix} + s\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} -2 \\ 0 \\ 1 \\ 1 \end{pmatrix}$.

The solution space is a 2-dimensional affine subspace (a plane) in $\mathbb{R}^4$. $\blacksquare$

</details>

### 4.7 Common Pitfalls

- **Partial pivoting is not optional for numerical work.** Without it, Gaussian elimination can
  produce catastrophically wrong results due to rounding errors.
- **The normal equations can be ill-conditioned.** For better numerical stability, use QR
  decomposition to solve least squares problems instead of forming $A^T A$.
- **Not every system has a solution.** Always check consistency via the Rouché--Capelli theorem
  before attempting to solve.

---

