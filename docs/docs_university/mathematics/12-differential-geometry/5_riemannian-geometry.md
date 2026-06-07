---
title: Riemannian Geometry
tags:
  - Mathematics
  - University
---

### 5.1 Riemannian Metrics

A **Riemannian metric** on a smooth manifold $M$ is a smooth family of inner products
$g_p : T_p M \times T_p M \to \mathbb{R}$, varying smoothly with $p$. In local coordinates:

$$g = g_{ij}(x)\, dx^i \otimes dx^j$$

where $g_{ij} = g\left(\frac{\partial}{\partial x^i}, \frac{\partial}{\partial x^j}\right)$ forms a
symmetric positive-definite matrix.

**Example 1.** The Euclidean metric on $\mathbb{R}^n$: $g = \sum dx^i \otimes dx^i$, so
$g_{ij} = \delta_{ij}$.

**Example 2.** The standard metric on $S^2 \subseteq \mathbb{R}^3$: induced by the embedding. In
spherical coordinates $(\theta, \phi)$: $g = d\theta^2 + \cos^2\theta\, d\phi^2$.

### 5.2 The Levi-Civita Connection

A **connection** on $M$ is a map
$\nabla : \mathfrak{X}(M) \times \mathfrak{X}(M) \to \mathfrak{X}(M)$ satisfying linearity and the
Leibniz rule. A connection is **Riemannian** if it is compatible with the metric ($\nabla g = 0$)
and **torsion-free** ($\nabla_X Y - \nabla_Y X = [X, Y]$).

**Theorem 5.1 (Levi-Civita).** On any Riemannian manifold, there exists a unique Riemannian
(metric-compatible, torsion-free) connection, called the **Levi-Civita connection**.

### 5.3 Christoffel Symbols

In local coordinates, the Levi-Civita connection is determined by the **Christoffel symbols**
$\Gamma^k_{ij}$:

$$\nabla_{\frac{\partial}{\partial x^i}} \frac{\partial}{\partial x^j} = \Gamma^k_{ij} \frac{\partial}{\partial x^k}$$

These are given by:

$$\Gamma^k_{ij} = \frac{1}{2} g^{k\ell}\left(\frac{\partial g_{j\ell}}{\partial x^i} + \frac{\partial g_{i\ell}}{\partial x^j} - \frac{\partial g_{ij}}{\partial x^\ell}\right)$$

where $(g^{k\ell})$ is the inverse matrix of $(g_{k\ell})$.

