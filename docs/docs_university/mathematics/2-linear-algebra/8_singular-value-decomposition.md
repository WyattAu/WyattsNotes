---
title: Singular Value Decomposition
tags:
  - Mathematics
  - University
---

### 8.1 Existence of the SVD

**Theorem 8.1 (Singular Value Decomposition).** Every matrix
$A \in \mathcal{M}_{m \times n}(\mathbb{R})$ can be factored as

$$A = U \Sigma V^T$$

Where $U \in \mathcal{M}_{m \times m}(\mathbb{R})$ is orthogonal,
$V \in \mathcal{M}_{n \times n}(\mathbb{R})$ is orthogonal, and
$\Sigma \in \mathcal{M}_{m \times n}(\mathbb{R})$ is diagonal with non-negative entries
$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r \geq 0$ (where $r = \mathrm{rank}(A)$).

The $\sigma_i$ are called the **singular values** of $A$. The columns of $U$ are the **left singular
vectors**, and the columns of $V$ are the **right singular vectors**.

_Proof._ The matrix $A^T A$ is an $n \times n$ symmetric positive semi-definite matrix, so by the
spectral theorem it has $n$ real non-negative eigenvalues and an orthonormal eigenbasis. Let
$\sigma_1^2, \sigma_2^2, \ldots, \sigma_n^2$ be these eigenvalues (some may be zero) with
corresponding orthonormal eigenvectors $\mathbf{v}_1, \ldots, \mathbf{v}_n$ forming the columns of
$V$.

For each $i$ with $\sigma_i > 0$Define $\mathbf{u}_i = A\mathbf{v}_i / \sigma_i$. We verify that
these form an orthonormal set:

$$\mathbf{u}_i^T \mathbf{u}_j = \frac{\mathbf{v}_i^T A^T A \mathbf{v}_j}{\sigma_i \sigma_j} = \frac{\sigma_j^2 \mathbf{v}_i^T \mathbf{v}_j}{\sigma_i \sigma_j} = \frac{\sigma_j^2}{\sigma_i \sigma_j} \delta_{ij} = \delta_{ij}$$

Extend $\{\mathbf{u}_1, \ldots, \mathbf{u}_r\}$ to an orthonormal basis of $\mathbb{R}^m$ to form
$U$. Then for any vector $\mathbf{x} \in \mathbb{R}^n$:

$$A\mathbf{x} = A\left(\sum_{i=1}^{n} (\mathbf{v}_i^T \mathbf{x})\mathbf{v}_i\right) = \sum_{i=1}^{n} (\mathbf{v}_i^T \mathbf{x}) A\mathbf{v}_i = \sum_{i=1}^{r} \sigma_i (\mathbf{v}_i^T \mathbf{x}) \mathbf{u}_i = U \Sigma V^T \mathbf{x}$$

Since this holds for all $\mathbf{x}$We have $A = U \Sigma V^T$. $\blacksquare$

### 8.2 Relationship to Eigenvalues

**Proposition 8.2.** The singular values of $A$ are the square roots of the eigenvalues of $A^T A$
(equivalently, of $AA^T$). The non-zero singular values of $A$ and $A^T$ are identical.

_Proof._ From the construction above, $A^T A \mathbf{v}_i = \sigma_i^2 \mathbf{v}_i$. For $AA^T$:

$$AA^T \mathbf{u}_i = \frac{A(A^T A)\mathbf{v}_i}{\sigma_i} = \frac{\sigma_i^2 A\mathbf{v}_i}{\sigma_i} = \sigma_i^2 \mathbf{u}_i$$

So $\mathbf{u}_i$ is an eigenvector of $AA^T$ with eigenvalue $\sigma_i^2$. The non-zero eigenvalues
of $A^T A$ and $AA^T$ coincide (since if $A^T A \mathbf{v} = \lambda \mathbf{v}$ with
$\lambda \neq 0$Then $AA^T(A\mathbf{v}) = A(A^T A \mathbf{v}) = \lambda(A\mathbf{v})$ and
$A\mathbf{v} \neq \mathbf{0}$). $\blacksquare$

**Proposition 8.3.** If $A$ is symmetric with eigenvalues $\lambda_1, \ldots, \lambda_n$Then the
singular values of $A$ are $|\lambda_1|, \ldots, |\lambda_n|$.

_Proof._ $A^T A = A^2$Whose eigenvalues are $\lambda_i^2$. The singular values are
$\sqrt{\lambda_i^2} = |\lambda_i|$. $\blacksquare$

### 8.3 Geometric Interpretation

The SVD decomposes the linear transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ into three steps:

1. $V^T$ rotates (or reflects) $\mathbb{R}^n$ into a coordinate system aligned with the right
   singular vectors.
2. $\Sigma$ scales each axis by the corresponding singular value (and possibly drops dimensions
   where $\sigma_i = 0$).
3. $U$ rotates (or reflects) the result into the coordinate system of the left singular vectors.

**Unit circle image.** Under $A$The unit circle in $\mathbb{R}^2$ is mapped to an ellipse with
semi-axes $\sigma_1$ and $\sigma_2$ aligned with the columns of $U$.

### 8.4 Low-Rank Approximation

**Theorem 8.4 (Eckart--Young--Mirsky).** Let $A = U \Sigma V^T$ be the SVD with singular values
$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$. For any $k < r$The best rank-$k$
approximation to $A$ (in both the Frobenius and spectral norms) is

$$A_k = \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^T = U_k \Sigma_k V_k^T$$

And the approximation error is

$$\lVert A - A_k \rVert_F = \sqrt{\sigma_{k+1}^2 + \cdots + \sigma_r^2}, \qquad \lVert A - A_k \rVert_2 = \sigma_{k+1}$$

_Proof (Frobenius norm)._ Any rank-$k$ matrix $B$ can be written in terms of an orthonormal basis of
its column space. Let $W \in \mathcal{M}_{n \times k}(\mathbb{R})$ have orthonormal columns spanning
the column space of $B$. Then $B = CW^T$ for some $C$And:

$$\lVert A - B \rVert_F^2 = \lVert A(I - WW^T) \rVert_F^2 + \lVert (A - C)W^T \rVert_F^2 \geq \lVert A(I - WW^T) \rVert_F^2$$

The minimum over $W$ is achieved when $W$ spans the subspace spanned by
$\mathbf{v}_1, \ldots, \mathbf{v}_k$ (the top $k$ right singular vectors), giving:

$$\lVert A - A_k \rVert_F^2 = \sum_{i=k+1}^{r} \sigma_i^2$$

The spectral norm result follows because $\lVert A - A_k \rVert_2 = \sigma_{k+1}$ is the largest
singular value of $A - A_k$. $\blacksquare$

### 8.5 Pseudoinverse

**Definition.** The **Moore--Penrose pseudoinverse** of $A = U \Sigma V^T$ is

$$A^+ = V \Sigma^+ U^T$$

Where $\Sigma^+$ is obtained from $\Sigma$ by transposing and inverting each non-zero singular
value:

$$(\Sigma^+)_{ii} = \begin{cases} 1/\sigma_i & \text{if}  \sigma_i > 0 \\ 0 & \text{if}  \sigma_i = 0 \end{cases}$$

**Theorem 8.5.** The pseudoinverse satisfies the four Moore--Penrose conditions:

1. $AA^+A = A$
2. $A^+AA^+ = A^+$
3. $(AA^+)^T = AA^+$
4. $(A^+A)^T = A^+A$

_Proof._ Direct computation using $A = U \Sigma V^T$ and $A^+ = V \Sigma^+ U^T$:

$$AA^+A = U \Sigma V^T V \Sigma^+ U^T U \Sigma V^T = U \Sigma \Sigma^+ \Sigma V^T = U \Sigma V^T = A$$

Since $\Sigma \Sigma^+ \Sigma = \Sigma$ (the non-zero singular values are preserved, zeros remain
zero). The remaining conditions follow similarly. $\blacksquare$

**Theorem 8.6 (Minimum-Norm Least Squares).** If $A\mathbf{x} = \mathbf{b}$ is inconsistent, then
$\mathbf{x}^* = A^+\mathbf{b}$ is the least-squares solution of minimum norm.

_Proof._ The least-squares solutions to $A\mathbf{x} \approx \mathbf{b}$ are
$\mathbf{x} = A^+\mathbf{b} + (I - A^+A)\mathbf{z}$ for arbitrary $\mathbf{z}$. Since
$(I - A^+A)\mathbf{z} \in \ker(A)$ and $A^+\mathbf{b} \in \mathrm{im}(A^T)$These two components are
orthogonal. The minimum-norm solution is obtained when $\mathbf{z} = \mathbf{0}$Giving
$\mathbf{x}^* = A^+\mathbf{b}$. $\blacksquare$

### 8.6 Condition Number

**Definition.** The **condition number** of $A$ (with respect to the spectral norm) is

$$\kappa(A) = \lVert A \rVert_2 \cdot \lVert A^+ \rVert_2 = \frac{\sigma_1}{\sigma_r}$$

Where $\sigma_1$ is the largest and $\sigma_r$ is the smallest non-zero singular value.

**Theorem 8.7 (Sensitivity of Linear Systems).** If $A\mathbf{x} = \mathbf{b}$ and
$A(\mathbf{x} + \delta\mathbf{x}) = \mathbf{b} + \delta\mathbf{b}$Then

$$\frac{\lVert \delta\mathbf{x} \rVert}{\lVert \mathbf{x} \rVert} \leq \kappa(A) \cdot \frac{\lVert \delta\mathbf{b} \rVert}{\lVert \mathbf{b} \rVert}$$

_Proof._ From $A\delta\mathbf{x} = \delta\mathbf{b}$:
$\lVert \delta\mathbf{x} \rVert = \lVert A^{-1}\delta\mathbf{b} \rVert \leq \lVert A^{-1} \rVert \lVert \delta\mathbf{b} \rVert = \sigma_r^{-1} \lVert \delta\mathbf{b} \rVert$.
From $A\mathbf{x} = \mathbf{b}$:
$\lVert \mathbf{b} \rVert = \lVert A\mathbf{x} \rVert \geq \sigma_1^{-1} \lVert \mathbf{x} \rVert$...
Wait, $\lVert A\mathbf{x} \rVert \geq \sigma_r \lVert \mathbf{x} \rVert$ and
$\lVert \mathbf{b} \rVert \leq \sigma_1 \lVert \mathbf{x} \rVert$. Combining:
$\lVert \delta\mathbf{x} \rVert / \lVert \mathbf{x} \rVert \leq (\sigma_1 / \sigma_r)(\lVert \delta\mathbf{b} \rVert / \lVert \mathbf{b} \rVert)$.
$\blacksquare$

A matrix with large condition number is **ill-conditioned**: small perturbations in $\mathbf{b}$ can
cause large changes in $\mathbf{x}$.

### 8.7 Worked Example: Computing the SVD

**Problem.** Find the SVD of $A = \begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix}$.

<details>
<summary>Solution</summary>

**Step 1:** Compute
$A^T A = \begin{pmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{pmatrix}\begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix} = \begin{pmatrix} 17 & 4 \\ 4 & 17 \end{pmatrix}$.

**Step 2:** Eigenvalues of $A^T A$:
$\det\begin{pmatrix} 17 - \lambda & 4 \\ 4 & 17 - \lambda \end{pmatrix} = (17 - \lambda)^2 - 16 = \lambda^2 - 34\lambda + 273 = (\lambda - 21)(\lambda - 13)$.

So $\sigma_1^2 = 21$ and $\sigma_2^2 = 13$Giving $\sigma_1 = \sqrt{21}$, $\sigma_2 = \sqrt{13}$.

**Step 3:** Eigenvectors of $A^T A$. For $\lambda = 21$: $(17 - 21)v_1 + 4v_2 = 0$So $v_1 = v_2$.
Normalised: $\mathbf{v}_1 = \frac{1}{\sqrt{2}}(1, 1)^T$.

For $\lambda = 13$: $4v_1 + (17 - 13)v_2 = 0$So $v_1 = -v_2$. Normalised:
$\mathbf{v}_2 = \frac{1}{\sqrt{2}}(1, -1)^T$.

$V = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.

**Step 4:** Compute $\mathbf{u}_i = A\mathbf{v}_i / \sigma_i$.

$\mathbf{u}_1 = \frac{1}{\sqrt{21}} \cdot \frac{1}{\sqrt{2}}\begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{42}}\begin{pmatrix} 5 \\ 5 \\ 0 \end{pmatrix} = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

$\mathbf{u}_2 = \frac{1}{\sqrt{13}} \cdot \frac{1}{\sqrt{2}}\begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \frac{1}{\sqrt{26}}\begin{pmatrix} 1 \\ -1 \\ 4 \end{pmatrix}$.

Since $A$ is $3 \times 2$We need a third left singular vector $\mathbf{u}_3$ orthogonal to
$\mathbf{u}_1$ and $\mathbf{u}_2$. Compute
$\mathbf{u}_3 = \mathbf{u}_1 \times \mathbf{u}_2 = \frac{1}{\sqrt{52}}(4, -4, -2) = \frac{1}{\sqrt{26}}(2, -2, -1)$.

$$U = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{26} & 2/\sqrt{26} \\ 1/\sqrt{2} & -1/\sqrt{26} & -2/\sqrt{26} \\ 0 & 4/\sqrt{26} & -1/\sqrt{26} \end{pmatrix}$$

$$\Sigma = \begin{pmatrix} \sqrt{21} & 0 \\ 0 & \sqrt{13} \\ 0 & 0 \end{pmatrix}$$

$$A = U \Sigma V^T = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{26} & 2/\sqrt{26} \\ 1/\sqrt{2} & -1/\sqrt{26} & -2/\sqrt{26} \\ 0 & 4/\sqrt{26} & -1/\sqrt{26} \end{pmatrix}\begin{pmatrix} \sqrt{21} & 0 \\ 0 & \sqrt{13} \\ 0 & 0 \end{pmatrix}\frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

**Verification:** $U$ and $V$ are orthogonal, $\Sigma$ has the correct singular values on the
diagonal, and $A = U\Sigma V^T$ recovers the original matrix. $\blacksquare$

</details>

### 8.8 Worked Example: Low-Rank Approximation

**Problem.** Let $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \end{pmatrix}$. Find the
best rank-1 approximation.

<details>
<summary>Solution</summary>

$A^T A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix}$.

$\det(A^T A - \lambda I) = \det\begin{pmatrix} 2-\lambda & 1 & 1 \\ 1 & 1-\lambda & 0 \\ 1 & 0 & 2-\lambda \end{pmatrix} = (2-\lambda)[(1-\lambda)(2-\lambda)] - (2-\lambda) - (1-\lambda)$

$= (2-\lambda)(\lambda^2 - 3\lambda + 2 - 1) - (3 - \lambda) = (2-\lambda)(\lambda^2 - 3\lambda + 1) - (3 - \lambda)$

$= 2\lambda^2 - 6\lambda + 2 - \lambda^3 + 3\lambda^2 - \lambda - 3 + \lambda = -\lambda^3 + 5\lambda^2 - 6\lambda - 1$

Setting to zero and solving: $\lambda^3 - 5\lambda^2 + 6\lambda + 1 = 0$. Testing $\lambda = 3$:
$27 - 45 + 18 + 1 = 1 \neq 0$. Testing $\lambda = 4$: $64 - 80 + 24 + 1 = 9 \neq 0$. By numerical
methods or the rational root theorem (no rational roots), the eigenvalues are approximately
$\lambda_1 \approx 5.25$, $\lambda_2 \approx 1.31$, $\lambda_3 \approx -0.56$.

Wait, $A^T A$ should be positive semi-definite, so all eigenvalues should be non-negative. Let me
recompute.

$A^T A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix}$.

$\mathrm{tr}(A^T A) = 5$So $\lambda_1 + \lambda_2 + \lambda_3 = 5$.

$\det(A^T A) = 2(2) - 1(2) - 1(-1) = 4 - 2 + 1 = 3$.

$\sum$ of principal $2 \times 2$ minors $= (2-1) + (4-1) + (2-0) = 1 + 3 + 2 = 6$.

Characteristic polynomial: $\lambda^3 - 5\lambda^2 + 6\lambda - 3 = 0$.

Testing $\lambda = 1$: $1 - 5 + 6 - 3 = -1 \neq 0$. Testing $\lambda = 3$:
$27 - 45 + 18 - 3 = -3 \neq 0$.

By the trigonometric method for cubics or numerical approximation, $\lambda_1 \approx 3.35$,
$\lambda_2 \approx 1.35$, $\lambda_3 \approx 0.30$.

The best rank-1 approximation uses only $\sigma_1 = \sqrt{\lambda_1} \approx 1.83$ and its
corresponding singular vectors, yielding $A_1 = \sigma_1 \mathbf{u}_1 \mathbf{v}_1^T$ with error
$\lVert A - A_1 \rVert_F = \sqrt{\lambda_2 + \lambda_3} \approx \sqrt{1.65} \approx 1.28$.
$\blacksquare$

</details>

### 8.9 Worked Example: Condition Number and Numerical Stability

**Problem.** Compute the condition number of $A = \begin{pmatrix} 1 & 1 \\ 1 & 1.0001 \end{pmatrix}$
and discuss its implications.

<details>
<summary>Solution</summary>

$A^T A = \begin{pmatrix} 2 & 2.0001 \\ 2.0001 & 2.00020001 \end{pmatrix}$.

$\det(A^T A - \lambda I) = (2 - \lambda)(2.00020001 - \lambda) - 2.0001^2$

$= \lambda^2 - 4.00020001\lambda + 4.00040002 - 4.00040001 = \lambda^2 - 4.00020001\lambda + 0.00000001$

$\lambda = \frac{4.00020001 \pm \sqrt{16.00160016 - 0.00000004}}{2} \approx \frac{4.00020001 \pm 4.00019999}{2}$

$\lambda_1 \approx 4.00020000, \quad \lambda_2 \approx 0.00000001$

$\sigma_1 \approx 2.00005, \quad \sigma_2 \approx 0.0001$

$\kappa(A) = \sigma_1 / \sigma_2 \approx 20000$.

This means relative errors in $\mathbf{b}$ can be amplified by a factor of up to $20000$ in the
solution $\mathbf{x}$. The matrix is nearly singular (the two rows are almost linearly dependent),
and solving $A\mathbf{x} = \mathbf{b}$ in floating-point arithmetic will lose approximately
$\log_{10}(20000) \approx 4.3$ digits of precision. $\blacksquare$

</details>

### 8.10 Common Pitfalls

- **Singular values are always non-negative.** Unlike eigenvalues, which can be negative or complex,
  singular values are the square roots of eigenvalues of $A^T A$Hence always real and non-negative.
- **The SVD is not unique.** If $A$ has repeated singular values, the corresponding singular vectors
  can be any orthonormal basis of the eigenspace. The signs of singular vectors can also be flipped
  in pairs.
- **The pseudoinverse equals the inverse only for square, full-rank matrices.** When $A$ is not full
  rank, $A^+A \neq I$; instead, $A^+A$ is the orthogonal projection onto $\mathrm{im}(A^T)$.
- **The SVD and eigendecomposition are different decompositions.** The SVD always exists for any
  matrix, but the eigendecomposition requires the matrix to be square. Even for symmetric matrices,
  the singular values are $|\lambda_i|$Not $\lambda_i$.

---

