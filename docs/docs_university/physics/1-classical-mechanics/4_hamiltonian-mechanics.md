---
title: Hamiltonian Mechanics
tags:
  - Physics
  - University
---

### 4.1 Generalised Momentum

The **generalised momentum** conjugate to $q_j$ is

$$p_j = \frac{\partial L}{\partial \dot{q}_j}$$

### 4.2 The Hamiltonian

The **Hamiltonian** is defined by the **Legendre transform**:

$$H(q_1, \ldots, q_n, p_1, \ldots, p_n, t) = \sum_{j=1}^n p_j \dot{q}_j - L$$

When the transformation is regular (i.e., the Hessian
$\partial^2 L / \partial \dot{q}_j \partial \dot{q}_k$ Is non-singular), this is well-defined.

If $L$ does not depend explicitly on time and $V$ is velocity-independent, then $H = T + V$ (total
Energy).

### 4.3 Worked Example: Legendre Transform for the Harmonic Oscillator

**Problem.** A one-dimensional harmonic oscillator has
$L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$. Find the Hamiltonian.

<details>
<summary>Solution</summary>

The conjugate momentum:

$$p = \frac{\partial L}{\partial \dot{x}} = m\dot{x} \implies \dot{x} = \frac{p}{m}$$

The Hamiltonian:

$$H = p\dot{x} - L = p\frac{p}{m} - \frac{1}{2}m\frac{p^2}{m^2} + \frac{1}{2}kx^2 = \frac{p^2}{2m} + \frac{1}{2}kx^2$$

This is $T + V$ as expected for a natural system. Hamilton's equations give:

$$\dot{x} = \frac{\partial H}{\partial p} = \frac{p}{m}, \quad \dot{p} = -\frac{\partial H}{\partial x} = -kx$$

Combining: $\ddot{x} = \dot{p}/m = -kx/m$I.e., $\ddot{x} + (k/m)x = 0$. $\blacksquare$

</details>

### 4.4 Worked Example: Legendre Transform for the Simple Pendulum

**Problem.** Find the Hamiltonian for a simple pendulum of mass $m$ and length $l$.

<details>
<summary>Solution</summary>

From Section 3.4, $L = \frac{1}{2}ml^2\dot{\theta}^2 + mgl\cos\theta$.

Conjugate momentum:

$$p_\theta = \frac{\partial L}{\partial \dot{\theta}} = ml^2\dot{\theta} \implies \dot{\theta} = \frac{p_\theta}{ml^2}$$

Hamiltonian:

$$H = p_\theta\dot{\theta} - L = \frac{p_\theta^2}{ml^2} - \frac{p_\theta^2}{2ml^2} - mgl\cos\theta = \frac{p_\theta^2}{2ml^2} - mgl\cos\theta$$

Hamilton's equations:

$$\dot{\theta} = \frac{\partial H}{\partial p_\theta} = \frac{p_\theta}{ml^2}, \quad \dot{p}_\theta = -\frac{\partial H}{\partial \theta} = -mgl\sin\theta$$

$\blacksquare$

</details>

### 4.5 Hamilton's Equations

**Theorem 4.1 (Hamilton's Equations).** The equations of motion in Hamiltonian form are

$$\dot{q}_j = \frac{\partial H}{\partial p_j}, \quad \dot{p}_j = -\frac{\partial H}{\partial q_j}$$

These are $2n$ first-order ODEs (compared to $n$ second-order ODEs in the Lagrangian formulation).

_Proof._ From $H = \sum p_j \dot{q}_j - L$:

$$dH = \sum \dot{q}_j\, dp_j + \sum p_j\, d\dot{q}_j - \sum \frac{\partial L}{\partial q_j}\, dq_j - \sum \frac{\partial L}{\partial \dot{q}_j}\, d\dot{q}_j - \frac{\partial L}{\partial t}\, dt$$

Since $p_j = \partial L / \partial \dot{q}_j$The $d\dot{q}_j$ terms cancel:

$$dH = \sum \dot{q}_j\, dp_j - \sum \dot{p}_j\, dq_j - \frac{\partial L}{\partial t}\, dt$$

Comparing with
$dH = \sum \frac{\partial H}{\partial p_j} dp_j + \sum \frac{\partial H}{\partial q_j} dq_j + \frac{\partial H}{\partial t} dt$:

$$\dot{q}_j = \frac{\partial H}{\partial p_j}, \quad \dot{p}_j = -\frac{\partial H}{\partial q_j}, \quad \frac{\partial H}{\partial t} = -\frac{\partial L}{\partial t}$$

$\blacksquare$

### 4.6 Phase Space

Hamiltonian mechanics lives in **phase space**: the $2n$-dimensional space with coordinates
$(q_1, \ldots, q_n, p_1, \ldots, p_n)$. Each point in phase space represents a complete state of the
System (positions and momenta).

A **phase portrait** is the collection of trajectories in phase space. For a 1D harmonic oscillator,
the trajectories are ellipses in the $(x, p)$ plane.

### 4.7 Liouville's Theorem

**Theorem 4.2 (Liouville's Theorem).** The flow in phase space is **incompressible**: the phase
space volume is conserved along trajectories. Equivalently, the phase space density $\rho(q, p, t)$
satisfies:

$$\frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \sum_j \left(\frac{\partial \rho}{\partial q_j}\dot{q}_j + \frac{\partial \rho}{\partial p_j}\dot{p}_j\right) = 0$$

_Proof._ Consider a volume $\Omega$ in phase space. The rate of change of the volume is:

$$\frac{d}{dt}\int_\Omega \rho\, dq\, dp = \int_\Omega \frac{\partial \rho}{\partial t}\, dq\, dp$$

By the continuity equation in $2n$ dimensions:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$$

Where $\mathbf{v} = (\dot{q}_1, \ldots, \dot{q}_n, \dot{p}_1, \ldots, \dot{p}_n)$ is the phase space
velocity. Using Hamilton's equations:

$$\nabla \cdot \mathbf{v} = \sum_j \frac{\partial \dot{q}_j}{\partial q_j} + \sum_j \frac{\partial \dot{p}_j}{\partial p_j} = \sum_j \frac{\partial^2 H}{\partial q_j \partial p_j} - \sum_j \frac{\partial^2 H}{\partial p_j \partial q_j} = 0$$

By equality of mixed partial derivatives. Therefore:

$$\frac{\partial \rho}{\partial t} + \rho\,(\nabla \cdot \mathbf{v}) + \mathbf{v} \cdot \nabla\rho = \frac{\partial \rho}{\partial t} + \mathbf{v} \cdot \nabla\rho = \frac{d\rho}{dt} = 0$$

$\blacksquare$

_Intuition._ Liouville's theorem is the classical analogue of unitarity in quantum mechanics. It
tells us that phase space volume is conserved --- like an incompressible fluid flowing through phase
space. This underlies the ergodic hypothesis of statistical mechanics.

### 4.8 Poisson Brackets

**Definition.** The **Poisson bracket** of two functions $f(q, p, t)$ and $g(q, p, t)$ is:

$$\{f, g\} = \sum_{j=1}^n \left(\frac{\partial f}{\partial q_j}\frac{\partial g}{\partial p_j} - \frac{\partial f}{\partial p_j}\frac{\partial g}{\partial q_j}\right)$$

**Theorem 4.3 (Equations of Motion via Poisson Brackets).** For any function $f(q, p, t)$:

$$\frac{df}{dt} = \frac{\partial f}{\partial t} + \{f, H\}$$

In particular, Hamilton's equations become:

$$\dot{q}_j = \{q_j, H\}, \quad \dot{p}_j = \{p_j, H\}$$

_Proof._ Using the chain rule:

$$\frac{df}{dt} = \frac{\partial f}{\partial t} + \sum_j \left(\frac{\partial f}{\partial q_j}\dot{q}_j + \frac{\partial f}{\partial p_j}\dot{p}_j\right)$$

Substituting Hamilton's equations:

$$\frac{df}{dt} = \frac{\partial f}{\partial t} + \sum_j \left(\frac{\partial f}{\partial q_j}\frac{\partial H}{\partial p_j} - \frac{\partial f}{\partial p_j}\frac{\partial H}{\partial q_j}\right) = \frac{\partial f}{\partial t} + \{f, H\}$$

$\blacksquare$

**Properties of Poisson Brackets.**

**Theorem 4.4.** The Poisson bracket satisfies:

1. **Antisymmetry:** $\{f, g\} = -\{g, f\}$
2. **Linearity:** $\{af + bg, h\} = a\{f, h\} + b\{g, h\}$ for constants $a, b$
3. **Leibniz rule:** $\{fg, h\} = f\{g, h\} + \{f, h\}g$
4. **Jacobi identity:** $\{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\} = 0$

_Proof._ Properties (1)--(3) follow directly from the definition. For the Jacobi identity, write out
the terms explicitly:

$$\{f, \{g, h\}\} = \sum_j \frac{\partial f}{\partial q_j}\frac{\partial}{\partial p_j}\sum_k \left(\frac{\partial g}{\partial q_k}\frac{\partial h}{\partial p_k} - \frac{\partial g}{\partial p_k}\frac{\partial h}{\partial q_k}\right) - \sum_j \frac{\partial f}{\partial p_j}\frac{\partial}{\partial q_j}\sum_k \left(\frac{\partial g}{\partial q_k}\frac{\partial h}{\partial p_k} - \frac{\partial g}{\partial p_k}\frac{\partial h}{\partial q_k}\right)$$

Expanding and collecting terms, the second-order mixed partial derivatives cancel in groups of three
(by equality of mixed partials), yielding the Jacobi identity. $\blacksquare$

**Theorem 4.5.** A quantity $f$ is a constant of motion if and only if
$\partial f/\partial t + \{f, H\} = 0$. If $f$ does not depend explicitly on time, $f$ is conserved
if and only if $\{f, H\} = 0$.

_Proof._ Immediate from Theorem 4.3 with $df/dt = 0$. $\blacksquare$

**Fundamental Poisson Brackets:**

$$\{q_j, q_k\} = 0, \quad \{p_j, p_k\} = 0, \quad \{q_j, p_k\} = \delta_{jk}$$

### 4.9 The Hamilton-Jacobi Equation

**Definition.** Hamilton's principal function $S(q, t)$ is the action evaluated along the classical
path from $(q_0, t_0)$ to $(q, t)$.

**Theorem 4.6 (Hamilton-Jacobi Equation).** The function $S$ satisfies:

$$H\left(q_1, \ldots, q_n, \frac{\partial S}{\partial q_1}, \ldots, \frac{\partial S}{\partial q_n}, t\right) + \frac{\partial S}{\partial t} = 0$$

This is a first-order nonlinear PDE in $n + 1$ variables.

_Proof._ The action from $t_0$ to $t$ is $S = \int_{t_0}^{t} L\, dt'$. The total time derivative is:

$$\frac{dS}{dt} = L$$

But $S = S(q_1(t), \ldots, q_n(t), t)$So by the chain rule:

$$\frac{dS}{dt} = \sum_j \frac{\partial S}{\partial q_j}\dot{q}_j + \frac{\partial S}{\partial t} = L$$

From the definition of the conjugate momentum,
$p_j = \partial L/\partial \dot{q}_j = \partial S/\partial q_j$ (this can be shown rigorously by
varying the endpoint). Therefore:

$$L = \sum_j p_j \dot{q}_j + \frac{\partial S}{\partial t} = H + \frac{\partial S}{\partial t}$$

Since $dS/dt = L$:

$$H + \frac{\partial S}{\partial t} = L = \sum_j p_j\dot{q}_j + \frac{\partial S}{\partial t}$$

Which gives $H + \partial S/\partial t = 0$. $\blacksquare$

_Intuition._ The Hamilton-Jacobi equation is the bridge between classical and quantum mechanics.
Schrodinger's equation can be obtained from it via the substitution $S = -i\hbar \ln\psi$ (up to
constants), making $S$ the classical limit of the quantum phase.

**Separation of Variables.** If $H$ does not depend explicitly on $t$Write $S(q, t) = W(q) - Et$.
Then the time-independent Hamilton-Jacobi equation is:

$$H\left(q_1, \ldots, q_n, \frac{\partial W}{\partial q_1}, \ldots, \frac{\partial W}{\partial q_n}\right) = E$$

Where $W$ is **Hamilton's characteristic function** and $E$ is the constant energy.

### 4.10 Worked Example: Hamilton-Jacobi for the Harmonic Oscillator

**Problem.** Solve the Hamilton-Jacobi equation for a 1D harmonic oscillator with
$H = p^2/(2m) + kx^2/2$.

<details>
<summary>Solution</summary>

Since $H$ is time-independent, write $S(x, t) = W(x) - Et$. The HJ equation becomes:

$$\frac{1}{2m}\left(\frac{dW}{dx}\right)^2 + \frac{1}{2}kx^2 = E$$

$$\frac{dW}{dx} = \sqrt{2mE - mkx^2}$$

Integrating:

$$W(x) = \int \sqrt{2mE - mkx^2}\, dx$$

Let $x = \sqrt{2E/k}\sin\alpha$Then $dx = \sqrt{2E/k}\cos\alpha\, d\alpha$:

$$W = \frac{2E}{\omega}\int_0^\alpha \cos^2\alpha'\, d\alpha' = \frac{E}{\omega}\left(\alpha + \frac{1}{2}\sin 2\alpha\right)$$

Where $\omega = \sqrt{k/m}$. The solution gives $x(t) = \sqrt{2E/k}\sin(\omega t + \delta)$ as
expected.

$\blacksquare$

</details>

:::caution Common Pitfall The Lagrangian and Hamiltonian formulations are equivalent only when the
Legendre transform from $L$ To $H$ is regular. If
$\det(\partial^2 L / \partial \dot{q}_i \partial \dot{q}_j) = 0$The system Has **constraints** and
the Hamiltonian formulation requires special treatment (Dirac brackets or Constraint analysis).
:::


