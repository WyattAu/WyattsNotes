---
title: Stability and Phase Plane Analysis
tags:
  - Mathematics
  - University
---

### 9.1 Autonomous Systems

For $\mathbf{x}' = \mathbf{f}(\mathbf{x})$A **critical point** $\mathbf{x}^*$ satisfies
$\mathbf{f}(\mathbf{x}^*) = \mathbf{0}$.

### 9.2 Linearization and Stability

Let $A = J\mathbf{f}(\mathbf{x}^*)$ be the Jacobian at the critical point. The eigenvalues of $A$
Determine the local stability:

| Eigenvalues of $A$                    | Type            | Stability             |
| ------------------------------------- | --------------- | --------------------- |
| Both real, negative                   | Stable node     | Asymptotically stable |
| Both real, positive                   | Unstable node   | Unstable              |
| Real, opposite signs                  | Saddle point    | Unstable              |
| Complex, $\mathrm{Re}(\lambda) \lt 0$ | Stable spiral   | Asymptotically stable |
| Complex, $\mathrm{Re}(\lambda) > 0$   | Unstable spiral | Unstable              |
| Purely imaginary                      | Center          | (Marginally) stable   |

### 9.3 Lyapunov Stability

**Definition.** A critical point $\mathbf{x}^*$ is **stable** if for every $\varepsilon > 0$There
Exists $\delta > 0$ such that $\|\mathbf{x}(0) - \mathbf{x}^*\| \lt \delta$ implies
$\|\mathbf{x}(t) - \mathbf{x}^*\| \lt \varepsilon$ for all $t > 0$.

It is **asymptotically stable** if it is stable and $\mathbf{x}(t) \to \mathbf{x}^*$ as
$t \to \infty$.

**Theorem 9.1 (Lyapunov).** If there exists a continuously differentiable function $V$ (a **Lyapunov
Function**) such that $V(\mathbf{x}^*) = 0$, $V(\mathbf{x}) > 0$ for $\mathbf{x} \neq \mathbf{x}^*$
And $\dot{V} \leq 0$ in a neighbourhood of $\mathbf{x}^*$Then $\mathbf{x}^*$ is stable. If
$\dot{V} \lt 0$ for $\mathbf{x} \neq \mathbf{x}^*$Then $\mathbf{x}^*$ is asymptotically stable.

### 9.4 Worked Example: Linearization

**Problem.** Find and classify the critical points of $x' = x - y$, $y' = x^2 + y^2 - 1$.

<details>
<summary>Solution</summary>

_Solution._ Set $x' = 0$ and $y' = 0$:

$x - y = 0 \implies y = x$

$x^2 + x^2 - 1 = 0 \implies 2x^2 = 1 \implies x = \pm 1/\sqrt{2}$

Critical points: $(1/\sqrt{2}, 1/\sqrt{2})$ and $(-1/\sqrt{2}, -1/\sqrt{2})$.

The Jacobian is $J = \begin{pmatrix} 1 & -1 \\ 2x & 2y \end{pmatrix}$.

At $(1/\sqrt{2}, 1/\sqrt{2})$: $J = \begin{pmatrix} 1 & -1 \\ \sqrt{2} & \sqrt{2} \end{pmatrix}$.

$\mathrm{tr}(J) = 1 + \sqrt{2} > 0$, $\det(J) = \sqrt{2} + \sqrt{2} = 2\sqrt{2} > 0$.

$\tau^2 - 4\Delta = (1 + \sqrt{2})^2 - 8\sqrt{2} = 3 + 2\sqrt{2} - 8\sqrt{2} = 3 - 6\sqrt{2} \lt 0$.

Complex eigenvalues with positive real part: **unstable spiral**.

At $(-1/\sqrt{2}, -1/\sqrt{2})$:
$J = \begin{pmatrix} 1 & -1 \\ -\sqrt{2} & -\sqrt{2} \end{pmatrix}$.

$\mathrm{tr}(J) = 1 - \sqrt{2} \lt 0$, $\det(J) = -\sqrt{2} + \sqrt{2} = 0$.

Wait, $\det(J) = (1)(-\sqrt{2}) - (-1)(-\sqrt{2}) = -\sqrt{2} - \sqrt{2} = -2\sqrt{2} \lt 0$.

Negative determinant: **saddle point** (unstable). $\blacksquare$

</details>

### 9.5 Phase Portraits for 2D Nonlinear Systems

For the nonlinear system $\mathbf{x}' = \mathbf{f}(\mathbf{x})$The **Hartman-Grobman theorem**
States that near a hyperbolic critical point (one where the Jacobian has no eigenvalues on the
Imaginary axis), the nonlinear phase portrait is topologically equivalent to the linearized one.

**Procedure for sketching phase portraits:**

1. Find all critical points by solving $\mathbf{f}(\mathbf{x}) = \mathbf{0}$.
2. Compute the Jacobian $J$ at each critical point.
3. Classify each critical point using the eigenvalue analysis from Section 4.9.
4. Sketch the local behaviour near each critical point.
5. Connect the local pictures using nullclines ($x' = 0$ and $y' = 0$ curves).

### 9.6 Limit Cycles and Poincaré-Bendixson

A **limit cycle** is an isolated closed periodic orbit. Limit cycles are inherently nonlinear
Phenomena --- linear systems cannot have isolated closed orbits.

**Theorem 9.2 (Poincaré-Bendixson).** If a trajectory of a $C^1$ planar system is confined to a
Closed bounded region $R$ that contains no critical points, then the trajectory approaches a closed
Periodic orbit as $t \to \infty$.

_Remark._ The Poincaré-Bendixson theorem is specific to two dimensions. In three or more Dimensions,
much more complex behaviour (chaos) is possible.

**Example: Van der Pol oscillator.** The equation

$$x'' + \mu(x^2 - 1)x' + x = 0$$

With $\mu > 0$ has a unique stable limit cycle. This system models electrical circuits with
Nonlinear resistance and arises in biology (cardiac rhythms, neuron firing).

### 9.7 Worked Example: Lotka-Volterra Analysis

**Problem.** Analyze the stability of the Lotka-Volterra system $x' = x(2 - y)$, $y' = y(x - 1)$.

<details>
<summary>Solution</summary>

_Solution._ Critical points: $(0, 0)$ and $(1, 2)$.

Jacobian: $J = \begin{pmatrix} 2 - y & -x \\ y & x - 1 \end{pmatrix}$.

At $(0, 0)$: $J = \begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$. Eigenvalues $2$ and $-1$: **saddle
point** (unstable).

At $(1, 2)$: $J = \begin{pmatrix} 0 & -1 \\ 2 & 0 \end{pmatrix}$. $\det(J) = 2 > 0$,
$\mathrm{tr}(J) = 0$. Eigenvalues $\pm i\sqrt{2}$: **center**.

_Remark._ For the linearized system, the center is (marginally) stable. However, for the Nonlinear
Lotka-Volterra system, the trajectories are actually closed orbits surrounding $(1, 2)$. This can be
verified using the first integral $H = x - \ln x + 2\ln y - y$Which is constant Along trajectories.
$\blacksquare$

</details>

### 9.8 Competing Species

The competing species model is:

$$x' = x(r_1 - a_{11}x - a_{12}y), \quad y' = y(r_2 - a_{21}x - a_{22}y)$$

Where $r_i > 0$ are growth rates and $a_{ij} > 0$ are competition coefficients. The four critical
Points are $(0, 0)$, $(r_1/a_{11}, 0)$, $(0, r_2/a_{22})$And the coexistence point $(x^*, y^*)$
where both $x'$ and $y'$ vanish.

The stability of the coexistence point determines whether both species survive. If
$a_{11}a_{22} > a_{12}a_{21}$Coexistence is stable; otherwise, one species drives the other To
extinction (competitive exclusion).

