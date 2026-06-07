---
title: Inner Product Spaces and Hilbert Spaces
tags:
  - Mathematics
  - University
---

### 2.1 Inner Product Spaces

An **inner product space** is a vector space $H$ with an inner product
$\langle \cdot, \cdot \rangle : H \times H \to \mathbb{C}$ satisfying:

1. $\langle x, x\rangle \geq 0$ with equality iff $x = 0$.
2. $\langle x, y\rangle = \overline{\langle y, x\rangle}$.
3. $\langle \alpha x + \beta y, z\rangle = \alpha\langle x, z\rangle + \beta\langle y, z\rangle$.

Every inner product induces a norm: $\|x\| = \sqrt{\langle x, x\rangle}$.

**Example 1.** $\mathbb{C}^n$ with $\langle x, y\rangle = \sum_{i=1}^n x_i \overline{y_i}$.

**Example 2.** $L^2(\mu)$ with $\langle f, g\rangle = \int f \overline{g}\, d\mu$.

### 2.2 Orthogonality

Vectors $x, y \in H$ are **orthogonal** (written $x \perp y$) if $\langle x, y\rangle = 0$.

**Theorem 2.1 (Pythagorean Theorem).** If $x \perp y$, then $\|x + y\|^2 = \|x\|^2 + \|y\|^2$.

**Theorem 2.2 (Parallelogram Law).** In any inner product space:

$$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2$$

**Theorem 2.3 (Polarization Identity).** In a complex inner product space:

$$\langle x, y\rangle = \frac{1}{4}\left(\|x + y\|^2 - \|x - y\|^2 + i\|x + iy\|^2 - i\|x - iy\|^2\right)$$

**Theorem 2.4 (Cauchy-Schwarz Inequality).** $|\langle x, y\rangle| \leq \|x\| \cdot \|y\|$ with
equality iff $x$ and $y$ are linearly dependent.

### 2.3 Hilbert Spaces

A **Hilbert space** is a complete inner product space.

**Theorem 2.5 (Orthogonal Projection).** Let $M$ be a closed subspace of a Hilbert space $H$. For
every $x \in H$, there exists a unique $y \in M$ (the **orthogonal projection** of $x$ onto $M$)
such that $x - y \perp M$. We write $y = P_M(x)$.

**Theorem 2.6 (Orthogonal Decomposition).** If $M$ is a closed subspace of $H$, then
$H = M \oplus M^\perp$, where $M^\perp = \{x \in H : x \perp M\}$.

### 2.4 Orthonormal Bases

A set $\{e_i\}_{i \in I} \subseteq H$ is an **orthonormal system** if
$\langle e_i, e_j\rangle = \delta_{ij}$.

**Theorem 2.7 (Bessel's Inequality).** If $\{e_i\}_{i=1}^n$ is an orthonormal set, then
$\sum_{i=1}^n |\langle x, e_i\rangle|^2 \leq \|x\|^2$.

**Theorem 2.8.** A Hilbert space is separable if and only if it admits a countable orthonormal
basis.

**Theorem 2.9 (Parseval's Identity).** If $\{e_n\}$ is an orthonormal basis for $H$, then for every
$x \in H$:

$$\|x\|^2 = \sum_{n=1}^{\infty} |\langle x, e_n\rangle|^2 \quad \text{and} \quad x = \sum_{n=1}^{\infty} \langle x, e_n\rangle e_n$$

### 2.5 Riesz Representation Theorem

**Theorem 2.10 (Riesz Representation).** Let $H$ be a Hilbert space. For every bounded linear
functional $\varphi \in H^*$, there exists a unique $y \in H$ such that
$\varphi(x) = \langle x, y\rangle$ for all $x \in H$. Moreover, $\|\varphi\|_{H^*} = \|y\|_H$.

_Proof._ If $\varphi = 0$, take $y = 0$. Otherwise, $\ker(\varphi)$ is a closed subspace, so
$H = \ker(\varphi) \oplus \ker(\varphi)^\perp$. Take $z \in \ker(\varphi)^\perp$ with $\|z\| = 1$.
Then $y = \overline{\varphi(z)} \cdot z$ satisfies $\varphi(x) = \langle x, y\rangle$ for all $x$.
Uniqueness follows from the polarization identity. $\blacksquare$

**Corollary 2.11.** Every Hilbert space is isometrically isomorphic to its dual: $H \cong H^*$
(anti-linearly).

