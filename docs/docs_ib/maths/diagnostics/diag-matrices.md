---
title: Matrices -- Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for matrices covering non-commutativity, eigenvalues with complex roots, diagonalisation for matrix powers, and inverse conditions.
slug: diag-matrices
hide_table_of_contents: true
---

# Matrices — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for matrices.

### UT-1: Non-Commutativity and the Commutator Equation

**Question:**

Let $A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

**(a)** Show that $AB \neq BA$.

**(b)** Find all $2 \times 2$ matrices $X$ such that $AX = XA$, where $A$ is as defined above.

**(c)** A student claims that since $A$ and $B$ do not commute, no matrix can commute with $A$. Explain the error.

[Difficulty: hard. Tests understanding of matrix non-commutativity and solving the commutator equation.]

**Solution:**

**(a)**

$$AB = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ -1 & 0 \end{pmatrix}$$

$$BA = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix}$$

Since $AB = \begin{pmatrix} 2 & 1 \\ -1 & 0 \end{pmatrix} \neq \begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix} = BA$, the matrices do not commute.

**(b)** Let $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. Then:

$$AX = \begin{pmatrix} a + 2c & b + 2d \\ -c & -d \end{pmatrix}$$

$$XA = \begin{pmatrix} a & 2a + b \\ c & 2c + d \end{pmatrix}$$

Setting $AX = XA$:

- $(1,1)$: $a + 2c = a \implies c = 0$
- $(2,1)$: $-c = c \implies c = 0$ (consistent)
- $(1,2)$: $b + 2d = 2a + b \implies 2d = 2a \implies d = a$
- $(2,2)$: $-d = 2c + d \implies -d = d \implies d = 0$, and therefore $a = 0$.

So $X = \begin{pmatrix} 0 & b \\ 0 & 0 \end{pmatrix}$ for any $b \in \mathbb{R}$.

**(c)** The student's error is a logical fallacy: the fact that $B$ does not commute with $A$ does not imply that *no* matrix commutes with $A$. The identity matrix $I$, the zero matrix $O$, and all scalar multiples of $I$ trivially commute with every matrix. Part (b) shows that there is in fact a one-parameter family of matrices commuting with $A$.

---

### UT-2: 3x3 Eigenvalues with Complex Roots

**Question:**

Let $M = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.

**(a)** Find the eigenvalues and eigenvectors of $M$.

**(b)** A student claims that since $M$ is triangular, the eigenvalues are simply the diagonal entries, so there should be three linearly independent eigenvectors. Is this correct?

[Difficulty: hard. Tests eigenvalue computation for a matrix with a repeated eigenvalue and the concept of defective matrices.]

**Solution:**

**(a)** The characteristic equation is $\det(M - \lambda I) = 0$:

$$\det\begin{pmatrix} 2 - \lambda & 1 & 0 \\ 0 & 2 - \lambda & 0 \\ 0 & 0 & 3 - \lambda \end{pmatrix} = (2 - \lambda)^2(3 - \lambda) = 0$$

Eigenvalues: $\lambda_1 = 2$ (repeated, algebraic multiplicity 2), $\lambda_2 = 3$.

For $\lambda_1 = 2$: $(M - 2I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$

This gives $y = 0$ and $z = 0$, with $x$ free. So the eigenvectors are $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ times any scalar. There is only **one** linearly independent eigenvector for $\lambda = 2$.

For $\lambda_2 = 3$: $(M - 3I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} -1 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$

This gives $y = 0$, $-x = 0$ so $x = 0$, with $z$ free. Eigenvector: $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.

**(b)** The student is incorrect. While it is true that the eigenvalues of a triangular matrix are the diagonal entries, the number of linearly independent eigenvectors is not necessarily equal to the number of eigenvalues (counting multiplicity). Here $\lambda = 2$ has algebraic multiplicity $2$ but geometric multiplicity $1$. The matrix is **defective** — it cannot be diagonalised.

---

## Integration Tests

> Tests synthesis of matrices with other topics.

### IT-1: Diagonalisation for Computing Matrix Powers

**Question:**

Let $A = \begin{pmatrix} 5 & -6 \\ 2 & -2 \end{pmatrix}$.

**(a)** Find the eigenvalues and eigenvectors of $A$.

**(b)** Write $A = PDP^{-1}$ where $D$ is a diagonal matrix.

**(c)** Hence find $A^5$.

**(d)** A student claims that since $A$ has two distinct eigenvalues, $A^n$ can always be computed as $PD^nP^{-1}$ for any positive integer $n$. Is this correct? What conditions must be verified?

[Difficulty: hard. Combines eigenvalue computation, diagonalisation, and matrix exponentiation.]

**Solution:**

**(a)** Characteristic equation: $\det(A - \lambda I) = (5 - \lambda)(-2 - \lambda) + 12 = 0$

$$\lambda^2 - 3\lambda - 10 + 12 = \lambda^2 - 3\lambda + 2 = 0$$

$$(\lambda - 1)(\lambda - 2) = 0 \implies \lambda_1 = 1, \; \lambda_2 = 2$$

For $\lambda_1 = 1$: $(A - I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} 4 & -6 \\ 2 & -3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies 4x - 6y = 0 \implies 2x = 3y$$

Eigenvector: $\mathbf{v}_1 = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$.

For $\lambda_2 = 2$: $(A - 2I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} 3 & -6 \\ 2 & -4 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x - 2y = 0$$

Eigenvector: $\mathbf{v}_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

**(b)**

$$P = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$$

$$\det P = 3 - 4 = -1$$

$$P^{-1} = -\begin{pmatrix} 1 & -2 \\ -2 & 3 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 2 & -3 \end{pmatrix}$$

Verify: $PDP^{-1} = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 2 & -3 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 2 & 2 \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 2 & -3 \end{pmatrix}$

$$= \begin{pmatrix} -3 + 8 & 6 - 12 \\ -2 + 4 & 4 - 6 \end{pmatrix} = \begin{pmatrix} 5 & -6 \\ 2 & -2 \end{pmatrix} = A$$

**(c)**

$$D^5 = \begin{pmatrix} 1^5 & 0 \\ 0 & 2^5 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 32 \end{pmatrix}$$

$$A^5 = PD^5P^{-1} = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 32 \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 2 & -3 \end{pmatrix}$$

$$= \begin{pmatrix} 3 & 64 \\ 2 & 32 \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 2 & -3 \end{pmatrix} = \begin{pmatrix} -3 + 128 & 6 - 192 \\ -2 + 64 & 4 - 96 \end{pmatrix}$$

$$= \begin{pmatrix} 125 & -186 \\ 62 & -92 \end{pmatrix}$$

**(d)** The student's claim is correct with the caveat that the matrix must be diagonalisable. Two distinct eigenvalues are a **sufficient** condition for diagonalisability, since each eigenvalue contributes at least one eigenvector and eigenvectors corresponding to distinct eigenvalues are linearly independent. So with two distinct eigenvalues for a $2 \times 2$ matrix, we are guaranteed two linearly independent eigenvectors, meaning $P$ is invertible.

However, the student should verify that $P$ is indeed invertible (i.e., $\det P \neq 0$) before using this method. If the eigenvectors were accidentally computed incorrectly (e.g., picking a dependent pair), $P^{-1}$ would not exist.
