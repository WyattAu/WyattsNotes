---
title: Differential Geometry
description:
  'University Mathematics Differential Geometry notes covering smooth manifolds, tangent spaces,
  vector fields, differential forms, Riemannian metrics, curvature, geodesics, and the Gauss-Bonnet
  theorem.'
date: 2026-06-04T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
---

## 1. Smooth Manifolds

### 1.1 Topological Manifolds

An $n$-dimensional **topological manifold** $M$ is a topological space that is:

1. **Hausdorff**: distinct points have disjoint neighborhoods.
2. **Second countable**: the topology has a countable basis.
3. **Locally Euclidean**: every point $p \in M$ has a neighborhood $U$ homeomorphic to an open
   subset of $\mathbb{R}^n$.

A homeomorphism $\varphi : U \to V \subseteq \mathbb{R}^n$ is called a **coordinate chart** (or just
**chart**), and $(U, \varphi)$ is a **coordinate neighborhood**.

### 1.2 Smooth Manifolds and Atlases

A **smooth atlas** on a topological $n$-manifold $M$ is a collection of charts
$\{(U_\alpha, \varphi_\alpha)\}$ such that:

1. The $U_\alpha$ cover $M$.
2. For every pair of overlapping charts, the **transition map**
   $\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)$
   is a smooth diffeomorphism.

Two atlases are **compatible** if their union is also a smooth atlas. A **smooth structure** on $M$
is a maximal smooth atlas.

**Example 1.** $\mathbb{R}^n$ with the identity chart is a smooth manifold.

**Example 2.** $S^n = \{x \in \mathbb{R}^{n+1} : \|x\| = 1\}$ is a smooth manifold. Use
stereographic projection or the $2(n+1)$ hemisphere charts.

**Example 3.** The general linear group
$GL_n(\mathbb{R}) = \{A \in M_n(\mathbb{R}) : \det(A) \neq 0\}$ is an open subset of
$\mathbb{R}^{n^2}$, hence a smooth manifold of dimension $n^2$.

**Example 4.** The real projective space $\mathbb{RP}^n$ is a smooth manifold of dimension $n$.

### 1.3 Smooth Maps and Diffeomorphisms

A map $f : M \to N$ between smooth manifolds is **smooth** if for every $p \in M$, there exist
charts $(U, \varphi)$ near $p$ and $(V, \psi)$ near $f(p)$ with $f(U) \subseteq V$, such that
$\psi \circ f \circ \varphi^{-1}$ is smooth as a map between open subsets of Euclidean spaces.

A **diffeomorphism** is a smooth bijection with smooth inverse. If $M$ and $N$ are diffeomorphic, we
write $M \cong N$.

**Proposition 1.1.** Diffeomorphism is an equivalence relation on the class of smooth manifolds.

## 2. Tangent Spaces and Tangent Bundles

### 2.1 Tangent Vectors

There are several equivalent definitions of the tangent space $T_p M$ at $p \in M$:

**Definition (Directional Derivatives).** A tangent vector at $p$ is a derivation at $p$: a linear
map $v : C^\infty(M) \to \mathbb{R}$ satisfying the Leibniz rule:

$$v(fg) = f(p) \cdot v(g) + v(f) \cdot g(p)$$

**Definition (Equivalence Classes of Curves).** A tangent vector is an equivalence class of smooth
curves $\gamma : (-\varepsilon, \varepsilon) \to M$ with $\gamma(0) = p$, where
$\gamma_1 \sim \gamma_2$ if $(\varphi \circ \gamma_1)'(0) = (\varphi \circ \gamma_2)'(0)$ in some
(hence every) chart.

**Proposition 2.1.** $T_p M$ is a vector space of dimension $n = \dim M$.

### 2.2 The Tangent Bundle

The **tangent bundle** of $M$ is

$$TM = \bigsqcup_{p \in M} T_p M = \{(p, v) : p \in M,\ v \in T_p M\}$$

It is a smooth manifold of dimension $2n$ with projection $\pi : TM \to M$ given by $\pi(p, v) = p$.

A **vector field** on $M$ is a smooth section of $TM$: a smooth map $X : M \to TM$ with
$\pi \circ X = \mathrm{id}_M$, written $X(p) = X_p \in T_p M$.

### 2.3 The Differential

Let $f : M \to N$ be a smooth map. The **differential** (or pushforward) of $f$ at $p$ is the linear
map:

$$df_p : T_p M \to T_{f(p)} N, \quad df_p(v)(g) = v(g \circ f)$$

for $v \in T_p M$ and $g \in C^\infty(N)$. In local coordinates, $df_p$ is represented by the
Jacobian matrix $[D(f \circ \varphi^{-1})](\varphi(p))$.

**Proposition 2.2 (Chain Rule).** $d(g \circ f)_p = dg_{f(p)} \circ df_p$.

## 3. Vector Fields and Flows

### 3.1 Integral Curves

Let $X$ be a smooth vector field on $M$. An **integral curve** of $X$ through $p$ is a smooth curve
$\gamma : I \to M$ such that $\gamma(0) = p$ and $\gamma'(t) = X_{\gamma(t)}$ for all $t \in I$.

**Theorem 3.1 (Existence and Uniqueness).** For every $p \in M$, there exists a unique maximal
integral curve $\gamma_p : I_p \to M$ of $X$ through $p$, defined on a maximal open interval
$I_p \subseteq \mathbb{R}$ containing $0$.

### 3.2 The Lie Bracket

For vector fields $X, Y$ on $M$, the **Lie bracket** $[X, Y]$ is the vector field defined by:

$$[X, Y](f) = X(Y(f)) - Y(X(f))$$

for $f \in C^\infty(M)$.

**Proposition 3.2 (Properties of the Lie Bracket).**

1. Bilinearity: $[aX + bY, Z] = a[X, Z] + b[Y, Z]$.
2. Anti-symmetry: $[X, Y] = -[Y, X]$.
3. **Jacobi identity**: $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$.

The space of all vector fields $\mathfrak{X}(M)$ with the Lie bracket forms a **Lie algebra**.

### 3.3 The Lie Derivative

The **Lie derivative** of a vector field $Y$ along $X$ is $\mathcal{L}_X Y = [X, Y]$. For a function
$f$, $\mathcal{L}_X f = X(f)$.

The Lie derivative measures the rate of change of a geometric object along the flow of $X$.

**Theorem 3.3 (Flow of the Lie Bracket).** If $\Phi_t$ and $\Psi_s$ are the flows of $X$ and $Y$
respectively, then $\frac{d}{dt}\big|_{t=0} (\Psi_{-t})_*(\Phi_t)_* Y = [X, Y]$.

## 4. Differential Forms

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

## 5. Riemannian Geometry

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

## 6. Geodesics

### 6.1 Definition

A **geodesic** is a curve $\gamma(t)$ whose acceleration is zero:
$\nabla_{\dot{\gamma}} \dot{\gamma} = 0$.

In local coordinates, the geodesic equation is:

$$\ddot{\gamma}^k + \Gamma^k_{ij}\, \dot{\gamma}^i \dot{\gamma}^j = 0$$

This is a second-order ODE, so geodesics exist and are unique given an initial point and velocity.

**Proposition 6.1.** Geodesics are locally distance-minimizing: for sufficiently small $t$, the
geodesic $\gamma$ from $p$ to $\gamma(t)$ has length equal to the Riemannian distance
$d(p, \gamma(t))$.

### 6.2 The Exponential Map

For $p \in M$, the **exponential map** $\exp_p : T_p M \to M$ is defined by
$\exp_p(v) = \gamma_v(1)$, where $\gamma_v$ is the geodesic with $\gamma_v(0) = p$ and
$\dot{\gamma}_v(0) = v$.

**Proposition 6.2.** The exponential map is a local diffeomorphism near the origin: there exists
$\varepsilon > 0$ such that $\exp_p$ is a diffeomorphism from
$\{v \in T_p M : \|v\| < \varepsilon\}$ onto an open neighborhood of $p$.

### 6.3 Completeness

A Riemannian manifold $(M, g)$ is **geodesically complete** if every maximal geodesic is defined for
all time (i.e., on $\mathbb{R}$).

**Theorem 6.3 (Hopf-Rinow).** For a connected Riemannian manifold, the following are equivalent:

1. $M$ is geodesically complete.
2. $(M, d)$ is a complete metric space (where $d$ is the Riemannian distance).
3. Every closed and bounded subset of $M$ is compact.
4. There exists $p \in M$ such that $\exp_p$ is defined on all of $T_p M$.

**Corollary.** Every compact Riemannian manifold is geodesically complete.

## 7. Curvature

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

## 8. The Gauss-Bonnet Theorem

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

## 9. Applications

### 9.1 General Relativity

In general relativity, the metric $g$ on a 4-dimensional manifold encodes gravity. Geodesics of the
metric describe the trajectories of freely falling particles. The curvature of spacetime is
determined by the distribution of matter and energy via the Einstein field equations.

**Example (Schwarzschild Metric).** The metric outside a spherically symmetric mass $M$ is:

$$ds^2 = -\left(1 - \frac{2GM}{c^2 r}\right)c^2 dt^2 + \left(1 - \frac{2GM}{c^2 r}\right)^{-1} dr^2 + r^2 d\Omega^2$$

This metric describes non-rotating black holes and predicts phenomena such as gravitational
redshift, perihelion precession, and gravitational lensing.

### 9.2 Gauge Theory

In Yang-Mills gauge theory, the connection (gauge field) on a principal $G$-bundle over spacetime
plays a role analogous to the Levi-Civita connection in Riemannian geometry. The curvature of this
connection is the field strength $F = dA + A \wedge A$.

The **Chern-Weil theory** relates the curvature of a connection to topological invariants
(characteristic classes) of the bundle. For example, the first Chern class
$c_1(E) \in H^2(M, \mathbb{R})$ is represented by the closed 2-form $\frac{i}{2\pi}\mathrm{tr}(F)$.

## 10. Summary

| Concept                  | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| Smooth manifold          | Hausdorff, second countable, locally Euclidean space             |
| Tangent space $T_p M$    | Space of directional derivatives at $p$                          |
| Vector field             | Smooth section of $TM$                                           |
| Lie bracket $[X, Y]$     | Measures non-commutativity of flows                              |
| Differential form        | Alternating covariant tensor field                               |
| Exterior derivative $d$  | $d^2 = 0$, generalizes gradient/curl/div                         |
| Stokes' theorem          | $\int_{\partial M} \omega = \int_M d\omega$                      |
| Riemannian metric        | Smooth family of inner products on tangent spaces                |
| Levi-Civita connection   | Unique torsion-free, metric-compatible connection                |
| Geodesic                 | Curve with zero acceleration $\nabla_{\dot\gamma}\dot\gamma = 0$ |
| Riemann curvature tensor | Measures non-commutativity of parallel transport                 |
| Gauss-Bonnet theorem     | Total curvature = $2\pi \chi(M)$ for compact surfaces            |

:::caution Common Pitfall The Levi-Civita connection depends on the choice of metric, not just on
the smooth structure. Two different Riemannian metrics on the same smooth manifold generally give
different connections, different geodesics, and different curvatures. The topology constrains the
total curvature (Gauss-Bonnet) but not the local curvature at individual points. :::
