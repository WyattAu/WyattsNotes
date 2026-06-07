---
title: Differential Forms
tags:
  - Mathematics
  - University
---

### 4.1 Alternating Tensors

The space of $k$-covectors at $p$ is $\Lambda^k(T_p^* M)$, the space of alternating $k$-linear maps
$T_p M \times \cdots \times T_p M \to \mathbb{R}$.

**Definition.** A **differential $k$-form** on $M$ is a smooth section of $\Lambda^k T^* M$, i.e., a
smooth map $\omega : M \to \Lambda^k T^* M$ assigning to each $p$ an alternating $k$-linear
functional $\omega_p$ on $T_p M$.

**Examples.**

- A $0$-form is a smooth function $f \in C^\infty(M)$.
- A $1$-form is a section of $T^* M$ (a covector field). In local coordinates,
  $\omega = \sum \omega_i\, dx^i$.
- A $2$-form on $M$ has the local expression $\omega = \sum_{i < j} \omega_{ij}\, dx^i \wedge dx^j$.

### 4.2 Exterior Derivative

The **exterior derivative** is the operator $d : \Omega^k(M) \to \Omega^{k+1}(M)$ defined by:

- For $f \in \Omega^0(M)$: $df = \sum_{i=1}^n \frac{\partial f}{\partial x^i}\, dx^i$ (the total
  differential).
- For general $k$-forms: defined by requiring $d(df) = 0$ and the product rule
  $d(\alpha \wedge \beta) = d\alpha \wedge \beta + (-1)^{\deg(\alpha)} \alpha \wedge d\beta$.

**Proposition 4.1.** $d \circ d = 0$ ($d^2 = 0$).

**Theorem 4.2 (Poincare Lemma).** If $M$ is a star-shaped open subset of $\mathbb{R}^n$ (or more
generally, a contractible manifold), then every closed $k$-form is exact: if $d\omega = 0$, then
$\omega = d\eta$ for some $(k - 1)$-form $\eta$.

### 4.3 Wedge Product

The **wedge product** $\wedge : \Omega^k(M) \times \Omega^\ell(M) \to \Omega^{k+\ell}(M)$ is the
bilinear, associative, anti-commutative operation:

$$\alpha \wedge \beta = (-1)^{k\ell}\, \beta \wedge \alpha$$

### 4.4 Stokes' Theorem

**Theorem 4.3 (Stokes' Theorem).** Let $M$ be an oriented $n$-dimensional manifold with boundary
$\partial M$ (with the induced orientation). If $\omega$ is a compactly supported $(n-1)$-form on
$M$, then:

$$\int_{\partial M} \omega = \int_M d\omega$$

**Special Cases:**

- **Fundamental Theorem of Calculus** ($n = 1$): $\int_a^b f'(x)\, dx = f(b) - f(a)$.
- **Green's Theorem** ($n = 2$):
  $\oint_{\partial D} P\, dx + Q\, dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\, dy$.
- **Classical Stokes' Theorem** ($n = 3$):
  $\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$.
- **Divergence Theorem** ($n = 3$):
  $\oint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\nabla \cdot \mathbf{F})\, dV$.

