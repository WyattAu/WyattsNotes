---
title: Applications
tags:
  - Mathematics
  - University
---

### 7.1 Differential Equations

**Example (Spectral Theory and ODEs).** Consider the Sturm-Liouville problem
$-u'' + q(x)u = \lambda u$ on $[a, b]$ with boundary conditions $u(a) = u(b) = 0$. The inverse
operator $T = (-d^2/dx^2 + q)^{-1}$ is a compact self-adjoint operator on $L^2[a, b]$. By the
spectral theorem, the eigenfunctions form an orthonormal basis, and the eigenvalues
$\lambda_n \to \infty$.

### 7.2 Quantum Mechanics

In quantum mechanics, the state space of a system is a Hilbert space $H$ (typically
$L^2(\mathbb{R}^3)$). Observables are self-adjoint operators on $H$. The spectral theorem guarantees
that every observable has a spectral decomposition:

$$A = \int_{\sigma(A)} \lambda\, dP(\lambda)$$

where $P$ is the projection-valued measure associated with $A$.

**Example.** The position operator $(X\psi)(x) = x\psi(x)$ and momentum operator
$(P\psi)(x) = -i\hbar\psi'(x)$ are self-adjoint on suitable domains of $L^2(\mathbb{R})$. The
canonical commutation relation $[X, P] = i\hbar I$ is fundamental to quantum mechanics.

### 7.3 Weak Solutions of Partial Differential Equations

Classical solutions of PDEs require pointwise differentiability, which is too restrictive for many
problems. Functional analysis provides the framework for **weak (distributional) solutions**.

Consider the Poisson equation $-\Delta u = f$ on a bounded domain $\Omega \subset \mathbb{R}^n$ with
$u|_{\partial\Omega} = 0$. Multiply both sides by a smooth test function $\varphi$ with
$\varphi|_{\partial\Omega} = 0$ and integrate by parts:

$$\int_\Omega \nabla u \cdot \nabla \varphi\, dx = \int_\Omega f \varphi\, dx$$

This is the **weak formulation**: find $u$ in a suitable function space such that the above holds
for all test functions $\varphi$.

The natural space for this problem is the **Sobolev space** $H^1_0(\Omega)$, defined as the
completion of $C_c^\infty(\Omega)$ under the norm
$\|u\|_{H^1} = \left(\int_\Omega |u|^2 + |\nabla u|^2\, dx\right)^{1/2}$. The Riesz representation
theorem applied to the inner product
$\langle u, v\rangle_{H^1_0} = \int_\Omega \nabla u \cdot \nabla v\, dx$ yields existence and
uniqueness of the weak solution. This is known as the **Lax-Milgram theorem**:

**Theorem 7.1 (Lax-Milgram).** Let $H$ be a Hilbert space and $B : H \times H \to \mathbb{R}$ a
bounded bilinear form that is **coercive**, i.e., there exists $c > 0$ such that
$B(u, u) \geq c\|u\|^2$ for all $u \in H$. Then for every bounded linear functional $\ell \in H^*$,
there exists a unique $u \in H$ such that $B(u, v) = \ell(v)$ for all $v \in H$.

Sobolev spaces $W^{k,p}(\Omega)$ (for $k \geq 0$, $1 \leq p \leq \infty$) generalise this idea:
$W^{k,p}$ consists of functions whose weak derivatives up to order $k$ belong to $L^p$. They are
Banach spaces, and $W^{k,2} = H^k$ are Hilbert spaces.

