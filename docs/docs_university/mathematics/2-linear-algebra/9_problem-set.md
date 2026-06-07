---
title: Problem Set
tags:
  - Mathematics
  - University
---

**Problem 1.** Let $V = \mathbb{R}^3$ and $W = \{(x, y, z) \in \mathbb{R}^3 : x - y + z = 0\}$. Show
that $W$ is a subspace of $V$ and find its dimension.

<details>
<summary>Solution</summary>

$W$ is non-empty since $\mathbf{0} = (0, 0, 0) \in W$. If
$(x_1, y_1, z_1), (x_2, y_2, z_2) \in W$Then $(x_1 - y_1 + z_1) + (x_2 - y_2 + z_2) = 0 + 0 = 0$So
their sum is in $W$. Similarly, $\alpha(x - y + z) = 0$ for any scalar $\alpha$. Hence $W$ is a
subspace.

$W$ is defined by one linear equation, so $\dim(W) = 3 - 1 = 2$. A basis is
$\{(1, 1, 0), (-1, 0, 1)\}$.

_If you get this wrong, revise: Section 1.3 (Subspace Criterion)._

</details>

**Problem 2.** Is the set $S = \{(x, y) \in \mathbb{R}^2 : xy = 0\}$ a subspace of $\mathbb{R}^2$?

<details>
<summary>Solution</summary>

No. $(1, 0) \in S$ and $(0, 1) \in S$But $(1, 0) + (0, 1) = (1, 1) \notin S$ since
$1 \cdot 1 \neq 0$. $S$ is not closed under addition.

_If you get this wrong, revise: Section 1.3 (Subspace Criterion)._

</details>

**Problem 3.** Determine whether the set $\{1 - x, 1 + x, x^2\}$ is linearly independent in
$\mathcal{P}_2(\mathbb{R})$.

<details>
<summary>Solution</summary>

Suppose $a(1 - x) + b(1 + x) + cx^2 = 0$ as a polynomial. Then $(a + b) + (-a + b)x + cx^2 = 0$So
$a + b = 0$, $-a + b = 0$, $c = 0$. From the first two equations: $2a = 0$So $a = 0$Then $b = 0$.
Since $a = b = c = 0$The set is linearly independent.

_If you get this wrong, revise: Section 2.1 (Linear Independence)._

</details>

**Problem 4.** Find a basis for the column space of

$$A = \begin{pmatrix} 1 & 2 & 1 & 4 \\ 2 & 4 & 0 & 6 \\ 3 & 6 & 1 & 10 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Row-reduce $A$:

$$\begin{pmatrix} 1 & 2 & 1 & 4 \\ 2 & 4 & 0 & 6 \\ 3 & 6 & 1 & 10 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - 3R_1} \begin{pmatrix} 1 & 2 & 1 & 4 \\ 0 & 0 & -2 & -2 \\ 0 & 0 & -2 & -2 \end{pmatrix} \xrightarrow{R_3 - R_2} \begin{pmatrix} 1 & 2 & 1 & 4 \\ 0 & 0 & -2 & -2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

Pivots are in columns 1 and 3. A basis for $\mathrm{col}(A)$ is $\{(1, 2, 3), (1, 0, 1)\}$ (the
pivot columns of the original $A$). $\dim(\mathrm{col}(A)) = 2$.

_If you get this wrong, revise: Section 2.7 (Worked Examples)._

</details>

**Problem 5.** Let $U = \mathrm{span}\{(1, 0, 1), (0, 1, 1)\}$ and $W = \mathrm{span}\{(1, 1, 0)\}$
in $\mathbb{R}^3$. Verify the dimension formula $\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W)$.

<details>
<summary>Solution</summary>

$\dim(U) = 2$ (the two spanning vectors are linearly independent), $\dim(W) = 1$. Since
$\dim(U) + \dim(W) = 3 = \dim(\mathbb{R}^3)$We have $U + W = \mathbb{R}^3$So $\dim(U + W) = 3$. By
the dimension formula: $\dim(U \cap W) = 2 + 1 - 3 = 0$So $U \cap W = \{\mathbf{0}\}$.

We can verify directly: if $a(1,0,1) + b(0,1,1) = c(1,1,0)$Then $a = c$, $b = c$, $a + b = 0$ Giving
$c = 0$So only the zero vector is in the intersection.

_If you get this wrong, revise: Section 2.5 (Dimension Formula)._

</details>

**Problem 6.** Compute $\det(A)$ using cofactor expansion where

$$A = \begin{pmatrix} 2 & 0 & 1 & 3 \\ 0 & 1 & 2 & 0 \\ 1 & 0 & 0 & 2 \\ 0 & 3 & 0 & 1 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Expand along the second column (which has the most zeros):

$\det(A) = -1 \cdot \det\begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & 2 \\ 0 & 0 & 1 \end{pmatrix} + (-1)^{4+2} \cdot 3 \cdot \det\begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 2 \\ 1 & 0 & 0 \end{pmatrix}$

For the first $3 \times 3$: expand along row 3: $1 \cdot (2 \cdot 0 - 1 \cdot 1) = -1$.

For the second $3 \times 3$: expand along row 3: $1 \cdot (0 \cdot 2 - 1 \cdot 1) = -1$.

$\det(A) = -(-1) + 3(-1) = 1 - 3 = -2$.

_If you get this wrong, revise: Section 3.4 (Determinants)._

</details>

**Problem 7.** Show that if $A$ is skew-symmetric ($A^T = -A$) and $n$ is odd, then $\det(A) = 0$.

<details>
<summary>Solution</summary>

$\det(A) = \det(A^T) = \det(-A) = (-1)^n \det(A) = -\det(A)$ (since $n$ is odd). Therefore
$\det(A) = -\det(A)$So $2\det(A) = 0$Giving $\det(A) = 0$.

_If you get this wrong, revise: Section 3.5 (Properties of Determinants)._

</details>

**Problem 8.** Use the adjugate formula to find the inverse of

$$A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$\det(A) = 2(3 - 0) - 0 + 1(1 - 0) = 6 + 1 = 7$.

Cofactors: $C_{11} = +3$, $C_{12} = -3$, $C_{13} = +1$ $C_{21} = +1$, $C_{22} = +6$, $C_{23} = -2$
$C_{31} = -1$, $C_{32} = +1$, $C_{33} = +2$

$\mathrm{adj}(A) = \begin{pmatrix} 3 & 1 & -1 \\ -3 & 6 & 1 \\ 1 & -2 & 2 \end{pmatrix}$

$A^{-1} = \frac{1}{7}\begin{pmatrix} 3 & 1 & -1 \\ -3 & 6 & 1 \\ 1 & -2 & 2 \end{pmatrix}$

_If you get this wrong, revise: Section 3.6 (Adjugate and Inverse Formula)._

</details>

**Problem 9.** Solve the system by Gaussian elimination:

$$\begin{aligned} x + 2y - z &= 3 \\ 2x + 5y + z &= 8 \\ -x + y + 4z &= 2 \end{aligned}$$

<details>
<summary>Solution</summary>

$$\begin{pmatrix} 1 & 2 & -1 & 3 \\ 2 & 5 & 1 & 8 \\ -1 & 1 & 4 & 2 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 + R_1} \begin{pmatrix} 1 & 2 & -1 & 3 \\ 0 & 1 & 3 & 2 \\ 0 & 3 & 3 & 5 \end{pmatrix}$$

$$\xrightarrow{R_3 - 3R_2} \begin{pmatrix} 1 & 2 & -1 & 3 \\ 0 & 1 & 3 & 2 \\ 0 & 0 & -6 & -1 \end{pmatrix}$$

From row 3: $-6z = -1$So $z = 1/6$. From row 2: $y + 3(1/6) = 2$So $y = 3/2$. From row 1:
$x + 2(3/2) - 1/6 = 3$So $x = 3 - 3 + 1/6 = 1/6$.

Solution: $x = 1/6$, $y = 3/2$, $z = 1/6$.

_If you get this wrong, revise: Section 4.1 (Gaussian Elimination)._

</details>

**Problem 10.** Determine whether the following system is consistent using the Rouché--Capelli
theorem:

$$\begin{aligned} x + y + z &= 1 \\ 2x + 2y + 2z &= 3 \\ x - y + z &= 0 \end{aligned}$$

<details>
<summary>Solution</summary>

$$[A \mid \mathbf{b}] = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 2 & 2 & 2 & 3 \\ 1 & -1 & 1 & 0 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ 0 & -2 & 0 & -1 \end{pmatrix}$$

$\mathrm{rank}(A) = 2$ but $\mathrm{rank}([A \mid \mathbf{b}]) = 3$ (the row $[0\ 0\ 0\ 1]$ is
Non-zero). Since $\mathrm{rank}(A) \neq \mathrm{rank}([A \mid \mathbf{b}])$The system is
inconsistent.

_If you get this wrong, revise: Section 4.2 (Rouché--Capelli Theorem)._

</details>

**Problem 11.** Find the LU decomposition of

$$A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 5 & 0 \\ -1 & 0 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$m_{21} = 2/1 = 2$, $m_{31} = -1/1 = -1$:

$$\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 2 \\ 0 & 2 & 2 \end{pmatrix}$$

$m_{32} = 2/1 = 2$:

$$U = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & -2 \end{pmatrix}, \quad L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ -1 & 2 & 1 \end{pmatrix}$$

Verify:
$LU = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ -1 & 2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & -2 \end{pmatrix} = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 5 & 0 \\ -1 & 0 & 3 \end{pmatrix} = A$.
$\blacksquare$

_If you get this wrong, revise: Section 4.3 (LU Decomposition)._

</details>

**Problem 12.** Find the least squares solution to the system $A\mathbf{x} = \mathbf{b}$ where

$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$A^T A = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}$,
$A^T \mathbf{b} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.

$\det(A^T A) = 15 - 9 = 6$,
$(A^T A)^{-1} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}$

$\hat{\mathbf{x}} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}\begin{pmatrix} 2 \\ 3 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 10 - 9 \\ -6 + 9 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 1/6 \\ 1/2 \end{pmatrix}$

The least squares solution is $a = 1/6$, $b = 1/2$.

_If you get this wrong, revise: Section 4.5 (Least Squares Solutions)._

</details>

**Problem 13.** Find the eigenvalues and a basis for each eigenspace of

$$A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

Is $A$ diagonalisable?

<details>
<summary>Solution</summary>

$\det(A - \lambda I) = (2 - \lambda)^3$So $\lambda = 2$ with algebraic multiplicity 3.

$A - 2I = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$Which has rank 2. The
null space is spanned by $(1, 0, 0)^T$. So the geometric multiplicity is 1.

Since the geometric multiplicity (1) does not equal the algebraic multiplicity (3), $A$ is **not**
Diagonalisable. Its Jordan form is $J = A$ itself (a single $3 \times 3$ Jordan block).

_If you get this wrong, revise: Section 5.3 (Diagonalisation) and Section 5.5 (Jordan Normal Form)._

</details>

**Problem 14.** Diagonalise the matrix

$$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & -1 \\ 0 & -1 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$\det(A - \lambda I) = (2 - \lambda)[(3-\lambda)^2 - 1] = (2-\lambda)(\lambda^2 - 6\lambda + 8) = (2-\lambda)(\lambda-2)(\lambda-4)$.

Eigenvalues: $\lambda_1 = 2$ (algebraic multiplicity 2), $\lambda_2 = 4$ (algebraic multiplicity 1).

For $\lambda_1 = 2$:
$A - 2I = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & -1 \\ 0 & -1 & 1 \end{pmatrix} \to \begin{pmatrix} 0 & 1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.
Eigenspace basis: $\{(1, 0, 0), (0, 1, 1)\}$. Geometric multiplicity = 2.

For $\lambda_2 = 4$:
$A - 4I = \begin{pmatrix} -2 & 0 & 0 \\ 0 & -1 & -1 \\ 0 & -1 & -1 \end{pmatrix} \to \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$.
Eigenspace basis: $\{(0, -1, 1)\}$. Geometric multiplicity = 1.

Since $2 + 1 = 3 = n$, $A$ is diagonalisable:

$$P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & -1 \\ 0 & 1 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{pmatrix}$$

_If you get this wrong, revise: Section 5.3 (Diagonalisation)._

</details>

**Problem 15.** Use the Cayley--Hamilton theorem to express $A^3$ as a linear combination of $A^2$,
$A$ And $I$Where $A = \begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix}$.

<details>
<summary>Solution</summary>

$\det(A - \lambda I) = (1 - \lambda)(3 - \lambda) + 2 = \lambda^2 - 4\lambda + 5$.

By Cayley--Hamilton: $A^2 - 4A + 5I = 0$So $A^2 = 4A - 5I$.

$A^3 = A \cdot A^2 = A(4A - 5I) = 4A^2 - 5A = 4(4A - 5I) - 5A = 16A - 20I - 5A = 11A - 20I$.

$A^3 = 11\begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix} - 20\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} -9 & 22 \\ -11 & 13 \end{pmatrix}$.

_If you get this wrong, revise: Section 5.4 (Cayley--Hamilton Theorem)._

</details>

**Problem 16.** Let $T : \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(x, y, z) = (x + y, y + z)$.
Find the matrix of $T$ with respect to the standard bases, and verify the rank-nullity theorem.

<details>
<summary>Solution</summary>

$T(1, 0, 0) = (1, 0)$, $T(0, 1, 0) = (1, 1)$, $T(0, 0, 1) = (0, 1)$.

$[T]_{\mathcal{E}} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$.

$\ker(T) = \{(x, y, z) : x + y = 0, y + z = 0\} = \{(t, -t, t) : t \in \mathbb{R}\}$So
$\dim(\ker(T)) = 1$.

$\mathrm{im}(T) = \mathrm{span}\{(1, 0), (1, 1)\} = \mathbb{R}^2$So $\dim(\mathrm{im}(T)) = 2$.

Verify: $\dim(\ker(T)) + \dim(\mathrm{im}(T)) = 1 + 2 = 3 = \dim(\mathbb{R}^3)$. $\blacksquare$

_If you get this wrong, revise: Section 6.4 (Rank-Nullity for Linear Maps)._

</details>

**Problem 17.** Let $V = \mathbb{R}^3$ with the standard inner product. Find the orthogonal
projection Of $\mathbf{v} = (1, 2, 3)$ onto the plane $W$ defined by $x + y + z = 0$.

<details>
<summary>Solution</summary>

A basis for $W$: $\{(1, -1, 0), (1, 0, -1)\}$. Apply Gram--Schmidt:

$e_1 = \frac{1}{\sqrt{2}}(1, -1, 0)$.

$\mathbf{u}_2 = (1, 0, -1) - \langle (1, 0, -1), e_1 \rangle e_1 = (1, 0, -1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, -1, 0) = (\frac{1}{2}, \frac{1}{2}, -1)$.

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1/4 + 1} = \sqrt{3/2}$So
$e_2 = \frac{1}{\sqrt{6}}(1, 1, -2)$.

$\mathrm{proj_W}(\mathbf{v}) = \langle (1,2,3), e_1 \rangle e_1 + \langle (1,2,3), e_2 \rangle e_2$

$\langle (1,2,3), e_1 \rangle = \frac{1}{\sqrt{2}}(1 - 2) = \frac{-1}{\sqrt{2}}$

$\langle (1,2,3), e_2 \rangle = \frac{1}{\sqrt{6}}(1 + 2 - 6) = \frac{-3}{\sqrt{6}}$

$\mathrm{proj_W}(\mathbf{v}) = \frac{-1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, -1, 0) + \frac{-3}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(1, 1, -2)$

$= -\frac{1}{2}(1, -1, 0) - \frac{1}{2}(1, 1, -2) = (-1, 0, 1)$.

The orthogonal projection is $(-1, 0, 1)$. $\blacksquare$

_If you get this wrong, revise: Section 7.5 (Orthogonal Projection)._

</details>

**Problem 18.** Prove the Cauchy--Schwarz inequality for $\mathbb{R}^n$ directly: for any nonzero
$\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$Show that
$\lvert\mathbf{x} \cdot \mathbf{y}\rvert \leq \lVert \mathbf{x} \rVert \lVert \mathbf{y} \rVert$ And
determine when equality holds.

<details>
<summary>Solution</summary>

Consider the function
$f(t) = \lVert \mathbf{x} + t\mathbf{y} \rVert^2 = \lVert \mathbf{x} \rVert^2 + 2t(\mathbf{x} \cdot \mathbf{y}) + t^2 \lVert \mathbf{y} \rVert^2$.

Since $f(t) \geq 0$ for all $t \in \mathbb{R}$This quadratic in $t$ has at most one real root, So
its discriminant satisfies $\Delta \leq 0$:

$4(\mathbf{x} \cdot \mathbf{y})^2 - 4\lVert \mathbf{x} \rVert^2 \lVert \mathbf{y} \rVert^2 \leq 0$

Therefore
$(\mathbf{x} \cdot \mathbf{y})^2 \leq \lVert \mathbf{x} \rVert^2 \lVert \mathbf{y} \rVert^2$And
taking square roots gives the result.

Equality holds iff $\Delta = 0$Which means $f(t)$ has a double root, i.e., there exists $t_0$ such
that $\mathbf{x} + t_0 \mathbf{y} = \mathbf{0}$Meaning $\mathbf{x}$ and $\mathbf{y}$ are linearly
dependent.

_If you get this wrong, revise: Section 7.2 (Cauchy--Schwarz Inequality)._

</details>

**Problem 19.** Let $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. Verify
the Cayley--Hamilton Theorem by explicitly computing $p(A)$.

<details>
<summary>Solution</summary>

$p(\lambda) = \det(A - \lambda I) = (1 - \lambda)[(2-\lambda)^2 - 1] = (1-\lambda)(\lambda^2 - 4\lambda + 3) = (1-\lambda)(\lambda-1)(\lambda-3)$.

So $p(\lambda) = -(\lambda-1)^2(\lambda-3) = -(\lambda^3 - 5\lambda^2 + 7\lambda - 3)$.

$p(A) = -(A^3 - 5A^2 + 7A - 3I)$.

$A^2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}^2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 4 \\ 0 & 4 & 5 \end{pmatrix}$

$A^3 = A \cdot A^2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 4 \\ 0 & 4 & 5 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 14 & 13 \\ 0 & 13 & 14 \end{pmatrix}$

$p(A) = -\begin{pmatrix} 1 & 0 & 0 \\ 0 & 14 & 13 \\ 0 & 13 & 14 \end{pmatrix} + 5\begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 4 \\ 0 & 4 & 5 \end{pmatrix} - 7\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix} + 3\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$

$= \begin{pmatrix} -1+5-7+3 & 0 & 0 \\ 0 & -14+25-14+3 & -13+20-7+0 \\ 0 & -13+20-7+0 & -14+25-14+3 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$

So $p(A) = 0$Confirming Cayley--Hamilton. $\blacksquare$

_If you get this wrong, revise: Section 5.4 (Cayley--Hamilton Theorem)._

</details>

**Problem 20.** Let $T : \mathcal{P}_2(\mathbb{R}) \to \mathcal{P}_2(\mathbb{R})$ be defined by
$T(p) = p'$ (the derivative). Find the matrix of $T$ with respect to the basis
$\mathcal{B} = \{1, x, x^2\}$And determine $\ker(T)$ and $\mathrm{im}(T)$.

<details>
<summary>Solution</summary>

$T(1) = 0 = 0 \cdot 1 + 0 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$.

$T(x) = 1 = 1 \cdot 1 + 0 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$.

$T(x^2) = 2x = 0 \cdot 1 + 2 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 0 \\ 2 \\ 0 \end{pmatrix}$.

$$[T]_{\mathcal{B}} = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$

$\ker(T) = \{p : p' = 0\} = \mathrm{span}\{1\}$So $\dim(\ker(T)) = 1$.

$\mathrm{im}(T) = \{p' : p \in \mathcal{P}_2\} = \mathrm{span}\{1, x\}$So
$\dim(\mathrm{im}(T)) = 2$.

Verify: $\dim(\ker(T)) + \dim(\mathrm{im}(T)) = 1 + 2 = 3 = \dim(\mathcal{P}_2)$. $\blacksquare$

_If you get this wrong, revise: Section 6.2 (Matrix Representation) and Section 6.4 (Rank-Nullity)._

</details>

## Common Pitfalls

- **Confusing linear independence and span.** Linear independence means no non-trivial linear
  combination equals zero; span is the set of all linear combinations. **Fix:**
  $\{v_1, \ldots, v_n\}$ is linearly independent iff the equation $\sum c_i v_i = 0$ implies all
  $c_i = 0$.
- **Wrong determinant interpretation.** $\det(A) = 0$ means $A$ is singular (non-invertible);
  $\det(A) \neq 0$ means $A$ is invertible. **Fix:** A matrix is invertible iff its determinant is
  non-zero.
- **Confusing eigenvalues and eigenvectors.** An eigenvalue $\lambda$ satisfies
  $\det(A - \lambda I) = 0$; eigenvectors are the non-zero solutions of $(A - \lambda I)v = 0$.
  **Fix:** Find eigenvalues from the characteristic polynomial; then find eigenvectors by solving
  $(A - \lambda I)v = 0$.

## Worked Examples

### Example 1: Determinant and invertibility

**Problem.** Find the determinant of
$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$ and determine if $A$ is
invertible.

**Solution.** $\det(A) = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1 \neq 0$.

Since $\det(A) \neq 0$, $A$ is invertible. $\blacksquare$

### Example 2: Eigenvalues and eigenvectors

**Problem.** Find the eigenvalues and eigenvectors of
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

**Solution.**
$\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2) = 0$.

Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = 2$.

For $\lambda_1 = 5$:
$(A - 5I)v = 0 \implies \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}v = 0 \implies v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda_2 = 2$:
$(A - 2I)v = 0 \implies \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}v = 0 \implies v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

$\blacksquare$

## Summary

- A matrix is invertible iff $\det(A) \neq 0$; equivalent to having linearly independent
  rows/columns.
- Eigenvalues: roots of the characteristic polynomial $\det(A - \lambda I) = 0$.
- Eigenvectors: non-zero vectors in $\ker(A - \lambda I)$.
- The spectral theorem: a real symmetric matrix has an orthonormal eigenbasis and can be
  diagonalised.

## Cross-References

| Topic                      | Site        | Link                                                                  |
| -------------------------- | ----------- | --------------------------------------------------------------------- |
| Linear Algebra (Overview)  | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)                   |
| Abstract Algebra           | WyattsNotes | [View](/docs/university/mathematics/abstract-algebra)                 |
| Multivariable Calculus     | WyattsNotes | [View](/docs/university/mathematics/multivariable-calculus)           |
| Linear Algebra — MIT 18.06 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) |

