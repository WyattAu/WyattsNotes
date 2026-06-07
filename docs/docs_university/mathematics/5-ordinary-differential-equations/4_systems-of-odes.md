---
title: Systems of ODEs
tags:
  - Mathematics
  - University
---

### 4.1 First-Order Linear Systems

A system of first-order linear ODEs can be written in matrix form:

$$\mathbf{x}' = A\mathbf{x} + \mathbf{f}(t)$$

Where $A$ is an $n \times n$ matrix and $\mathbf{x}, \mathbf{f} \in \mathbb{R}^n$.

### 4.2 Homogeneous Systems with Constant Coefficients

For $\mathbf{x}' = A\mathbf{x}$Try $\mathbf{x} = \mathbf{v}e^{\lambda t}$:

$$\lambda \mathbf{v} = A\mathbf{v}$$

So $\lambda$ is an eigenvalue of $A$ and $\mathbf{v}$ is the corresponding eigenvector.

**Case 1: $A$ has $n$ distinct real eigenvalues.** The general solution is

$$\mathbf{x} = c_1 \mathbf{v}_1 e^{\lambda_1 t} + \cdots + c_n \mathbf{v}_n e^{\lambda_n t}$$

**Case 2: $A$ has a repeated eigenvalue $\lambda$ with algebraic multiplicity $m$ and geometric
Multiplicity $k \lt m$.** Include terms involving $t^j e^{\lambda t}$ where generalized Eigenvectors
fill out the solution space.

**Case 3: Complex eigenvalues $\lambda = \alpha \pm i\beta$ with eigenvector
$\mathbf{v} = \mathbf{a} \pm i\mathbf{b}$.** The real solutions are
$e^{\alpha t}(\mathbf{a}\cos(\beta t) - \mathbf{b}\sin(\beta t))$ and
$e^{\alpha t}(\mathbf{a}\sin(\beta t) + \mathbf{b}\cos(\beta t))$.

### 4.3 The Matrix Exponential

**Definition.** $e^{At} = \sum_{k=0}^{\infty} \frac{A^k t^k}{k!}$.

**Theorem 4.1.** The solution to $\mathbf{x}' = A\mathbf{x}$ with $\mathbf{x}(0) = \mathbf{x}_0$ is
$\mathbf{x}(t) = e^{At}\mathbf{x}_0$.

**Proposition 4.2.** If $A$ is diagonalizable as $A = PDP^{-1}$Then $e^{At} = Pe^{Dt}P^{-1}$ Where
$e^{Dt} = \mathrm{diag}(e^{\lambda_1 t}, \ldots, e^{\lambda_n t})$.

### 4.4 Worked Example: Distinct Real Eigenvalues

**Problem.** Solve $\mathbf{x}' = \begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix}\mathbf{x}$.

_Solution._ Characteristic equation:
$\det(A - \lambda I) = \lambda^2 + 3\lambda + 2 = (\lambda + 1)(\lambda + 2) = 0$. Eigenvalues:
$\lambda_1 = -1$, $\lambda_2 = -2$.

For $\lambda_1 = -1$:
$(A + I)\mathbf{v} = \begin{pmatrix} 1 & 1 \\ -2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$\mathbf{v}_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

For $\lambda_2 = -2$:
$(A + 2I)\mathbf{v} = \begin{pmatrix} 2 & 1 \\ -2 & -1 \end{pmatrix}\mathbf{v} = \mathbf{0}$.
$\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{-t} + c_2 \begin{pmatrix} 1 \\ -2 \end{pmatrix} e^{-2t}$.
$\blacksquare$

### 4.5 Worked Example: Complex Eigenvalues

**Problem.** Solve $\mathbf{x}' = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

_Solution._ $\det(A - \lambda I) = \lambda^2 + 2 = 0$. Eigenvalues: $\lambda = \pm i\sqrt{2}$.

For $\lambda = i\sqrt{2}$:
$\begin{pmatrix} -i\sqrt{2} & -2 \\ 1 & -i\sqrt{2} \end{pmatrix}\mathbf{v} = \mathbf{0}$.

From the first row: $-i\sqrt{2}\, v_1 - 2v_2 = 0$So $v_2 = -\frac{i\sqrt{2}}{2}v_1$.

With $v_1 = 2$:
$\mathbf{v} = \begin{pmatrix} 2 \\ 0 \end{pmatrix} + i\begin{pmatrix} 0 \\ -\sqrt{2} \end{pmatrix}$.

So $\mathbf{a} = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$,
$\mathbf{b} = \begin{pmatrix} 0 \\ -\sqrt{2} \end{pmatrix}$.

$\mathbf{x}(t) = c_1\left[\mathbf{a}\cos(\sqrt{2}\, t) - \mathbf{b}\sin(\sqrt{2}\, t)\right] + c_2\left[\mathbf{a}\sin(\sqrt{2}\, t) + \mathbf{b}\cos(\sqrt{2}\, t)\right]$

$= c_1 \begin{pmatrix} 2\cos(\sqrt{2}\, t) \\ \sqrt{2}\sin(\sqrt{2}\, t) \end{pmatrix} + c_2 \begin{pmatrix} 2\sin(\sqrt{2}\, t) \\ -\sqrt{2}\cos(\sqrt{2}\, t) \end{pmatrix}$.
$\blacksquare$

</details>

### 4.6 Worked Example: Repeated Eigenvalues

**Problem.** Solve $\mathbf{x}' = \begin{pmatrix} 2 & 1 \\ -1 & 4 \end{pmatrix}\mathbf{x}$.

<details>
<summary>Solution</summary>

_Solution._
$\det(A - \lambda I) = (2 - \lambda)(4 - \lambda) + 1 = \lambda^2 - 6\lambda + 9 = (\lambda - 3)^2 = 0$.

Repeated eigenvalue $\lambda = 3$ with algebraic multiplicity 2.

$(A - 3I) = \begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix}$.

Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Only one eigenvector (geometric multiplicity
1), so we need a generalized eigenvector.

Find $\mathbf{w}$ such that
$(A - 3I)\mathbf{w} = \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$:

$\begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix}\begin{pmatrix} w_1 \\ w_2 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

$-w_1 + w_2 = 1$. Choose $w_1 = 0$Then $w_2 = 1$. So
$\mathbf{w} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} e^{3t} + c_2 \left[\begin{pmatrix} 1 \\ 1 \end{pmatrix} t e^{3t} + \begin{pmatrix} 0 \\ 1 \end{pmatrix} e^{3t}\right]$

$= e^{3t}\left[c_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} t \\ t + 1 \end{pmatrix}\right]$.
$\blacksquare$

</details>

### 4.7 Fundamental Matrix

**Definition.** A **fundamental matrix** $\Phi(t)$ for the system $\mathbf{x}' = A\mathbf{x}$ is an
$n \times n$ matrix whose columns form a fundamental set of solutions.

**Proposition 4.3.** $\Phi(t)$ satisfies $\Phi' = A\Phi$And the general solution is
$\mathbf{x}(t) = \Phi(t)\mathbf{c}$ for $\mathbf{c} \in \mathbb{R}^n$.

**Proposition 4.4.** The matrix exponential $e^{At}$ is a fundamental matrix with
$e^{A \cdot 0} = I$. Any fundamental matrix can be written as $\Phi(t) = e^{At}\Phi(0)$.

### 4.8 Matrix Exponential Properties

**Theorem 4.5.** The matrix exponential satisfies:

1. $e^{A \cdot 0} = I$
2. $\frac{d}{dt}e^{At} = Ae^{At} = e^{At}A$
3. $e^{At}e^{As} = e^{A(t+s)}$
4. $(e^{At})^{-1} = e^{-At}$
5. If $AB = BA$Then $e^{A+B} = e^A e^B$

_Proof of (1)._ $e^{A \cdot 0} = \sum_{k=0}^{\infty} \frac{A^k 0^k}{k!} = I$. $\blacksquare$

_Proof of (2)._
$\frac{d}{dt}e^{At} = \sum_{k=1}^{\infty} \frac{A^k t^{k-1}}{(k-1)!} = A\sum_{j=0}^{\infty} \frac{A^j t^j}{j!} = Ae^{At}$.
Since $A$ commutes with itself, $Ae^{At} = e^{At}A$. $\blacksquare$

_Proof of (4)._ From (3) with $s = -t$: $e^{At}e^{-At} = e^{A(t-t)} = e^0 = I$. $\blacksquare$

### 4.9 Phase Portrait Analysis for 2D Systems

For the linear system $\mathbf{x}' = A\mathbf{x}$ with $A$ a $2 \times 2$ matrix, the qualitative
Behaviour near the origin is determined by the eigenvalues:

| Eigenvalues                                   | Phase Portrait  | Stability             |
| --------------------------------------------- | --------------- | --------------------- |
| $\lambda_1, \lambda_2 \lt 0$Real, distinct    | Stable node     | Asymptotically stable |
| $\lambda_1, \lambda_2 > 0$Real, distinct      | Unstable node   | Unstable              |
| $\lambda_1 \lt 0 \lt \lambda_2$               | Saddle point    | Unstable              |
| $\lambda = \alpha \pm i\beta$, $\alpha \lt 0$ | Stable spiral   | Asymptotically stable |
| $\lambda = \alpha \pm i\beta$, $\alpha > 0$   | Unstable spiral | Unstable              |
| $\lambda = \pm i\beta$                        | Center          | (Marginally) stable   |

_Remark._ The **trace-determinant plane** provides a convenient classification. Let
$\tau = \mathrm{tr}(A)$ and $\Delta = \det(A)$. The eigenvalues satisfy
$\lambda^2 - \tau\lambda + \Delta = 0$So:

$$\lambda = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}$$

- $\tau^2 - 4\Delta > 0$: real eigenvalues (node or saddle)
- $\tau^2 - 4\Delta \lt 0$: complex eigenvalues (spiral or center)
- $\tau^2 - 4\Delta = 0$: repeated eigenvalues (proper or improper node)

Stability is determined by the sign of $\tau$: stable if $\tau \lt 0$Unstable if $\tau > 0$.

<!-- prettier-ignore -->
<DesmosGraph title="Trace-Determinant Plane: Stability Classification" expressions={["y^2-x^2/4=0", "y=0", "x=0"]} width={800} height={600} />

The trace-determinant plane classifies 2D linear systems. The parabola $\tau^2 = 4\Delta$ separates
real from complex eigenvalues; the $\tau = 0$ line separates stable from unstable. The `x`-axis
represents the trace $\tau$ and the `y`-axis represents $\Delta$.

### 4.10 Nonhomogeneous Systems

For $\mathbf{x}' = A\mathbf{x} + \mathbf{f}(t)$If $\Phi(t)$ is a fundamental matrix for the
Homogeneous system, the general solution is

$$\mathbf{x}(t) = \Phi(t)\mathbf{c} + \Phi(t)\int \Phi^{-1}(s)\mathbf{f}(s)\, ds$$

**Worked Example.** Solve
$\mathbf{x}' = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}\mathbf{x} + \begin{pmatrix} e^t \\ 0 \end{pmatrix}$.

<details>
<summary>Solution</summary>

_Solution._ Eigenvalues: $1$ and $2$.
$\Phi(t) = \begin{pmatrix} e^t & 0 \\ 0 & e^{2t} \end{pmatrix}$.

$\Phi^{-1}(s) = \begin{pmatrix} e^{-s} & 0 \\ 0 & e^{-2s} \end{pmatrix}$.

$\Phi^{-1}(s)\mathbf{f}(s) = \begin{pmatrix} e^{-s} & 0 \\ 0 & e^{-2s} \end{pmatrix}\begin{pmatrix} e^s \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

$\int \Phi^{-1}(s)\mathbf{f}(s)\, ds = \begin{pmatrix} t \\ 0 \end{pmatrix}$.

$\mathbf{x}_p = \Phi(t)\begin{pmatrix} t \\ 0 \end{pmatrix} = \begin{pmatrix} te^t \\ 0 \end{pmatrix}$.

$\mathbf{x}(t) = c_1 \begin{pmatrix} e^t \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ e^{2t} \end{pmatrix} + \begin{pmatrix} te^t \\ 0 \end{pmatrix}$.
$\blacksquare$

</details>
