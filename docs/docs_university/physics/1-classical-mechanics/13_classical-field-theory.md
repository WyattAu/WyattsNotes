---
title: Classical Field Theory
tags:
  - Physics
  - University
---

### 12.1 Lagrangian Field Theory

For a field $\phi(\mathbf{r}, t)$The Lagrangian density $\mathcal{L}$ replaces the discrete
Lagrangian $L = \sum_i T_i - V_i$:

$$S = \int \mathcal{L}(\phi, \partial_\mu\phi)\,d^4x, \quad \delta S = 0 \implies \frac{\partial\mathcal{L}}{\partial\phi} - \partial_\mu\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)} = 0$$

This is the **Euler--Lagrange equation for fields**.

### 12.2 The Klein--Gordon Field

A real scalar field of mass $m$:

$$\mathcal{L} = \frac{1}{2}(\partial_\mu\phi)(\partial^\mu\phi) - \frac{1}{2}m^2\phi^2$$

The equation of motion: $(\Box^2 + m^2)\phi = 0$ where
$\Box^2 = \partial_\mu\partial^\mu = \nabla^2 - \partial^2/\partial t^2$.

Plane wave solutions: $\phi \propto e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)}$ with
$\omega^2 = k^2 + m^2$ (dispersion relation).

### 12.3 Noether's Theorem for Fields

Every continuous symmetry of the action yields a conserved current:

$$\partial_\mu j^\mu = 0 \implies Q = \int j^0\,d^3x = \text{const}$$

| Symmetry                                    | Conserved Quantity                                                         |
| ------------------------------------------- | -------------------------------------------------------------------------- |
| Time translation                            | Energy $E = \int\mathcal{H}\,d^3x$                                         |
| Space translation                           | Momentum $\mathbf{P} = \int\boldsymbol{\pi}\,d^3x$                         |
| Rotation                                    | Angular momentum $\mathbf{L} = \int\mathbf{r}\times\boldsymbol{\pi}\,d^3x$ |
| Phase rotation ($\phi \to e^{i\alpha}\phi$) | Charge $Q$                                                                 |

For the complex Klein--Gordon field, the conserved current is:

$$j^\mu = i(\phi^*\partial^\mu\phi - \phi\partial^\mu\phi^*)$$

With conserved charge $Q = \int(i\phi^*\dot{\phi} - \phi\dot{\phi}^*)\,d^3x$.

### 12.4 Hamiltonian Density and Energy-Momentum Tensor

The **Hamiltonian density:**

$$\mathcal{H} = \frac{\partial\mathcal{L}}{\partial\dot{\phi}}\dot{\phi} - \mathcal{L} = \frac{1}{2}\dot{\phi}^2 + \frac{1}{2}(\nabla\phi)^2 + \frac{1}{2}m^2\phi^2$$

The **canonical energy-momentum tensor** (symmetric, Belinfante):

$$T^{\mu\nu} = \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\partial^\nu\phi - g^{\mu\nu}\mathcal{L}$$

$T^{00} = \mathcal{H}$ (energy density), $T^{0i}$ (momentum density), $T^{ij}$ (stress tensor).

<details>
<summary>Worked Example 12.1: Noether Current for the Klein--Gordon Field</summary>

Consider the infinitesimal phase transformation $\phi \to \phi + \delta\phi$ where
$\delta\phi = i\epsilon\phi$ (a global U(1) transformation).

The change in the Lagrangian density:

$$\delta\mathcal{L} = \frac{\partial\mathcal{L}}{\partial\phi}\delta\phi + \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\partial_\mu(\delta\phi) = i\epsilon\left[\frac{\partial\mathcal{L}}{\partial\phi}\phi - \partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\phi\right)\right]$$

Using the E-L equation
$\partial\mathcal{L}/\partial\phi = \partial_\mu(\partial\mathcal{L}/\partial(\partial_\mu\phi))$:

$$\delta\mathcal{L} = -i\epsilon\,\partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\phi\right) = \partial_\mu(-\epsilon\,j^\mu)$$

Where $j^\mu = i[\phi^*(\partial^\mu\phi) - (\partial^\mu\phi^*)\phi]$ (using the complex
Klein--Gordon Lagrangian for generality).

By Noether's theorem: $\partial_\mu j^\mu = 0$And the conserved charge:

$$Q = \int j^0\,d^3x = \int i(\phi^*\dot{\phi} - \dot{\phi}^*\phi)\,d^3x$$

For a plane wave $\phi = e^{-i\omega t + i\mathbf{k}\cdot\mathbf{r}}$: $Q \propto 2\omega > 0$
(positive frequency modes have positive charge).

</details>

## Worked Examples

### Example 1: Lagrangian of a simple pendulum

**Problem.** Derive the equation of motion for a simple pendulum of length $l$ and mass $m$.

**Solution.** $T = \frac{1}{2}ml^2\dot{\theta}^2$, $V = -mgl\cos\theta$ (taking pivot as reference).
$L = T - V = \frac{1}{2}ml^2\dot{\theta}^2 + mgl\cos\theta$.

$\frac{\partial L}{\partial \dot{\theta}} = ml^2\dot{\theta}$,
$\frac{d}{dt}\frac{\partial L}{\partial \dot{\theta}} = ml^2\ddot{\theta}$,
$\frac{\partial L}{\partial \theta} = -mgl\sin\theta$.

$ml^2\ddot{\theta} + mgl\sin\theta = 0 \implies \ddot{\theta} + \frac{g}{l}\sin\theta = 0$.

$\blacksquare$

### Example 2: Hamilton's equations

**Problem.** For a 1D harmonic oscillator ($L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$), find
Hamilton's equations.

**Solution.** $p = \frac{\partial L}{\partial \dot{x}} = m\dot{x}$, so
$H = p\dot{x} - L = \frac{p^2}{2m} + \frac{1}{2}kx^2$.

$\dot{x} = \frac{\partial H}{\partial p} = \frac{p}{m}$,
$\dot{p} = -\frac{\partial H}{\partial x} = -kx$.

$\blacksquare$

## Common Pitfalls

- **Confusing generalised coordinates and Cartesian coordinates.** Generalised coordinates
  ($q_1, \ldots, q_n$) may not have dimensions of length. **Fix:** The Lagrangian formalism works
  with any set of independent coordinates.
- **Wrong Euler-Lagrange equation.**
  $\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0$; the
  total time derivative is applied to $\partial L/\partial \dot{q}_i$, not to $L$ itself. **Fix:**
  Compute $\partial L/\partial \dot{q}_i$ first, then take $d/dt$.
- **Ignoring constraints in Lagrangian mechanics.** Holonomic constraints reduce degrees of freedom;
  non-holonomic constraints require Lagrange multipliers. **Fix:** For holonomic constraints,
  express the system in terms of independent generalised coordinates.

## Summary

- Newton's laws (vector approach) vs Lagrangian mechanics (scalar, energy-based approach).
- Euler-Lagrange equation:
  $\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0$.
- Hamiltonian: $H = \sum p_i \dot{q}_i - L$; Hamilton's equations give $2n$ first-order ODEs.
- Conservation laws follow from symmetries via Noether's theorem.

## Cross-References

| Topic                          | Site        | Link                                                                      |
| ------------------------------ | ----------- | ------------------------------------------------------------------------- |
| Classical Mechanics (Overview) | WyattsNotes | [View](/docs/university/physics/classical-mechanics)                      |
| Electromagnetism               | WyattsNotes | [View](/docs/university/physics/electromagnetism)                         |
| Quantum Mechanics              | WyattsNotes | [View](/docs/university/physics/quantum-mechanics)                        |
| Classical Mechanics — MIT 8.01 | MIT OCW     | [View](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/) |

