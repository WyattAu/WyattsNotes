---
title: The Gauss-Bonnet Theorem
tags:
  - Mathematics
  - University
---

### 8.1 Statement for Surfaces

**Theorem 8.1 (Gauss-Bonnet, Global).** Let $(M, g)$ be a compact, oriented Riemannian 2-manifold
without boundary. Then:

$$\int_M K\, dA = 2\pi \chi(M)$$

where $K$ is the Gaussian curvature, $dA$ is the area form, and $\chi(M)$ is the Euler
characteristic.

**Corollary 8.2.** The total curvature of a compact surface depends only on its topology, not on the
metric.

**Examples.**

- $S^2$: $\int_{S^2} K\, dA = 2\pi \cdot 2 = 4\pi$. For the standard metric ($K = 1$):
  $\int K\, dA = 1 \cdot 4\pi = 4\pi$. ✓
- $T^2$ (torus): $\int_{T^2} K\, dA = 2\pi \cdot 0 = 0$. For the flat metric ($K = 0$):
  $\int K\, dA = 0$. ✓
- $S^1 \times S^1$ (genus 2): $\chi = -2$, so total curvature $= -4\pi$.

### 8.2 Gauss-Bonnet with Boundary

**Theorem 8.3.** Let $M$ be a compact oriented Riemannian 2-manifold with boundary $\partial M$
consisting of smooth curves meeting at exterior angles $\alpha_1, \ldots, \alpha_k$. Then:

$$\int_M K\, dA + \int_{\partial M} \kappa_g\, ds + \sum_{i=1}^k \alpha_i = 2\pi \chi(M)$$

where $\kappa_g$ is the geodesic curvature of the boundary.

