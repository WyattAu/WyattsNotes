---
title: Curvature
tags:
  - Mathematics
  - University
---

### 7.1 The Riemann Curvature Tensor

The **Riemann curvature tensor** $R$ is defined by:

$$R(X, Y)Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X, Y]} Z$$

In local coordinates:
$R^i_{\,jkl}\, \frac{\partial}{\partial x^i} = R\left(\frac{\partial}{\partial x^k}, \frac{\partial}{\partial x^l}\right)\frac{\partial}{\partial x^j}$.

**Symmetries of the Riemann tensor:**

1. $R_{ijkl} = -R_{jikl}$ (anti-symmetric in first two indices).
2. $R_{ijkl} = -R_{ijlk}$ (anti-symmetric in last two indices).
3. $R_{ijkl} = R_{klij}$ (pair symmetry).
4. $R_{ijkl} + R_{iklj} + R_{iljk} = 0$ (first Bianchi identity).

### 7.2 Sectional Curvature

For linearly independent $u, v \in T_p M$, the **sectional curvature** of the 2-plane
$\mathrm{span}\{u, v\}$ is:

$$K(u, v) = \frac{\langle R(u, v)v, u\rangle}{\|u\|^2 \|v\|^2 - \langle u, v\rangle^2}$$

**Example.** $\mathbb{R}^n$ has $K \equiv 0$ (flat). $S^n$ has $K \equiv 1$ (constant positive
curvature). $H^n$ (hyperbolic space) has $K \equiv -1$ (constant negative curvature).

### 7.3 Ricci Curvature and Scalar Curvature

The **Ricci tensor** is the trace of the Riemann tensor:

$$\mathrm{Ric}(X, Y) = \mathrm{tr}(Z \mapsto R(Z, X)Y) = \sum_i \langle R(e_i, X)Y, e_i\rangle$$

In coordinates: $\mathrm{Ric}_{jk} = R^i_{\,jik}$.

The **scalar curvature** is the trace of the Ricci tensor:

$$S = \mathrm{tr}_g(\mathrm{Ric}) = g^{jk}\, \mathrm{Ric}_{jk}$$

### 7.4 Curvature in Physics

In general relativity, spacetime is a 4-dimensional Lorentzian manifold $(M, g)$. The Einstein field
equations relate the curvature of spacetime to the stress-energy tensor:

$$R_{\mu\nu} - \frac{1}{2} R g_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$

where $R_{\mu\nu}$ is the Ricci tensor, $R$ is the scalar curvature, $\Lambda$ is the cosmological
constant, and $T_{\mu\nu}$ is the stress-energy tensor.

