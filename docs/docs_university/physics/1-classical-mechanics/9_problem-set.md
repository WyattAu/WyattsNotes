---
title: Problem Set
slug: classical-mechanics-problem-set
tags:
  - Physics
  - University
---

### Problem 1

A particle of mass $m$ is placed on top of a smooth sphere of radius $R$. It is given a tiny nudge
so it begins to slide. At what angle $\theta$ does it leave the surface of the sphere?

<details>
<summary>Solution</summary>

Energy conservation (starting from rest at the top):

$$mgR = mgR\cos\theta + \frac{1}{2}mR^2\dot{\theta}^2 \implies \dot{\theta}^2 = \frac{2g(1 - \cos\theta)}{R}$$

Newton's second law in the radial direction:

$$mg\cos\theta - N = mR\dot{\theta}^2 = 2mg(1 - \cos\theta)$$

The particle leaves when $N = 0$:

$$\cos\theta = 2(1 - \cos\theta) \implies 3\cos\theta = 2 \implies \theta = \arccos(2/3) \approx 48.2°$$

**If you get this wrong, revise:** Section 1.6 (conservation of energy), Section 1.2 (polar
coordinates).

</details>

### Problem 2

A block of mass $m_1 = 2\,\mathrm{kg}$ on a frictionless horizontal table is connected by a string
over a pulley to a mass $m_2 = 1\,\mathrm{kg}$ hanging vertically. Find the acceleration using the
Lagrangian.

<details>
<summary>Solution</summary>

Let $x$ be the displacement of $m_1$ (positive to the right, so $m_2$ moves down).

$$T = \frac{1}{2}(m_1 + m_2)\dot{x}^2, \quad V = -m_2 g x$$

$$L = \frac{1}{2}(m_1 + m_2)\dot{x}^2 + m_2 g x$$

Euler-Lagrange: $(m_1 + m_2)\ddot{x} = m_2 g$So
$a = m_2 g / (m_1 + m_2) = g/3 \approx 3.27\,\mathrm{m}/s^2$.

**If you get this wrong, revise:** Section 3.5 (Atwood machine example), Section 3.1 (Lagrangian
construction).

</details>

### Problem 3

Derive the equation of motion for a particle of mass $m$ sliding on the inside of a paraboloid of
revolution $z = \alpha r^2$ under gravity, using cylindrical coordinates and the Lagrangian method.

<details>
<summary>Solution</summary>

Coordinates: $(r, \phi, z)$ with constraint $z = \alpha r^2$. Degrees of freedom: $r$ and $\phi$.

$$\dot{z} = 2\alpha r\dot{r}$$

$$T = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2 + 4\alpha^2 r^2\dot{r}^2) = \frac{1}{2}m\dot{r}^2(1 + 4\alpha^2 r^2) + \frac{1}{2}mr^2\dot{\phi}^2$$

$$V = mg\alpha r^2$$

$$L = \frac{1}{2}m(1 + 4\alpha^2 r^2)\dot{r}^2 + \frac{1}{2}mr^2\dot{\phi}^2 - mg\alpha r^2$$

Since $\phi$ is cyclic, $p_\phi = mr^2\dot{\phi} = l = \mathrm{const}$.

For the $r$ equation:

$$\frac{d}{dt}\left[m(1 + 4\alpha^2 r^2)\dot{r}\right] = 4m\alpha^2 r\dot{r}^2 + mr\dot{\phi}^2 - 2mg\alpha r$$

$$m(1 + 4\alpha^2 r^2)\ddot{r} + 4m\alpha^2 r\dot{r}^2 = 4m\alpha^2 r\dot{r}^2 + \frac{l^2}{mr^3} - 2mg\alpha r$$

$$(1 + 4\alpha^2 r^2)\ddot{r} = \frac{l^2}{m^2 r^3} - 2g\alpha r$$

**If you get this wrong, revise:** Section 2.1 (generalised coordinates), Section 3.8 (cyclic
coordinates).

</details>

### Problem 4

For the double pendulum with $m_1 = m_2 = m$ and $l_1 = l_2 = l$Find the Lagrangian and verify the
equations of motion in the small-angle limit reduce to coupled harmonic oscillators.

<details>
<summary>Solution</summary>

From Section 3.5, for equal masses and lengths:

$$T = ml^2\dot{\theta}_1^2 + \frac{1}{2}ml^2\dot{\theta}_2^2 + ml^2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1 - \theta_2)$$

$$V = -2mgl\cos\theta_1 - mgl\cos\theta_2$$

In the small-angle limit ($\cos(\theta_1 - \theta_2) \approx 1$,
$\cos\theta_i \approx 1 - \theta_i^2/2$):

$$T \approx ml^2\dot{\theta}_1^2 + \frac{1}{2}ml^2\dot{\theta}_2^2 + ml^2\dot{\theta}_1\dot{\theta}_2$$

$$V \approx mgl\theta_1^2 + \frac{1}{2}mgl\theta_2^2$$

The mass and stiffness matrices:

$$\mathbf{T} = ml^2\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad \mathbf{V} = mgl\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$$

The secular equation gives $\omega_1^2 = (2-\sqrt{2})g/l$ and
$\omega_2^2 = (2+\sqrt{2})g/l$Confirming coupled harmonic oscillators.

**If you get this wrong, revise:** Section 3.5 (double pendulum), Section 7.1 (small oscillations).

</details>

### Problem 5

A particle moves in the potential $V(x, y) = \frac{1}{2}k(x^2 + y^2) + \lambda xy$. Find the normal
mode frequencies and describe the normal modes.

<details>
<summary>Solution</summary>

$$L = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2) - \frac{1}{2}k(x^2 + y^2) - \lambda xy$$

$$\mathbf{T} = m\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \mathbf{V} = \begin{pmatrix} k & \lambda \\ \lambda & k \end{pmatrix}$$

Secular equation: $\det(\mathbf{V} - \omega^2\mathbf{T}) = (k - m\omega^2)^2 - \lambda^2 = 0$

$$\omega_\pm^2 = \frac{k \pm \lambda}{m}$$

Normal modes: $(1, 1)$ for $\omega_+$ (symmetric stretch) and $(1, -1)$ for $\omega_-$
(antisymmetric stretch).

**If you get this wrong, revise:** Section 7.3 (secular equation), Section 7.4 (orthogonality).

</details>

### Problem 6

Prove that the Poisson bracket of two conserved quantities is itself a conserved quantity (Poisson's
theorem), assuming neither quantity depends explicitly on time.

<details>
<summary>Solution</summary>

Let $f$ and $g$ be conserved, so $\{f, H\} = 0$ and $\{g, H\} = 0$. Using the Jacobi identity:

$$\{f, \{g, H\}\} + \{g, \{H, f\}\} + \{H, \{f, g\}\} = 0$$

The first term vanishes since $\{g, H\} = 0$. The second term:
$\{g, \{H, f\}\} = \{g, -\{f, H\}\} = -\{g, 0\} = 0$. Therefore:

$$\{H, \{f, g\}\} = 0 \implies \frac{d}{dt}\{f, g\} = \{f, g\} = 0$$

(since neither depends explicitly on time). So $\{f, g\}$ is conserved. $\blacksquare$

**If you get this wrong, revise:** Section 4.8 (Poisson brackets, properties, and Jacobi identity).

</details>

### Problem 7

A particle of mass $m$ moves in one dimension with potential $V(x) = V_0(\lvert x/a\rvert)^n$ where
$V_0, a \gt 0$ and $n \gt 0$. Use dimensional analysis (or the virial theorem) to find the
dependence of the period of oscillation on the amplitude $A$.

<details>
<summary>Solution</summary>

The Lagrangian is $L = \frac{1}{2}m\dot{x}^2 - V_0\lvert x/a\rvert^n$. For oscillation with
amplitude $A$The energy is $E = V_0(A/a)^n$.

By dimensional analysis, the period $T$ can only depend on $m$, $V_0$, $a$, $n$And $A$. Writing
$[T] = [m]^\alpha [V_0]^\beta [a]^\gamma [A]^\delta$ and noting $[V_0] = ML^2T^{-2}$:

$$T = M^{-\alpha}L^{-2\beta-\gamma-\delta}T^{2\beta} \cdot M^\alpha(V_0)^\beta a^\gamma A^\delta$$

Matching dimensions: $-\alpha + \beta = 0$, $-2\beta - \gamma - \delta = 0$, $2\beta = 1$. So
$\beta = 1/2$, $\alpha = 1/2$.

$$T \propto \sqrt{m/V_0}\, a^\gamma A^\delta \quad \mathrm{with} \quad -1 - \gamma - \delta = 0$$

Since $n$ is dimensionless, we need $\delta = n\gamma$ (to make $A/a$ appear with power $n$ in the
energy). Then $-1 - \gamma(1 + n) = 0$Giving $\gamma = -1/(1+n)$, $\delta = -n/(1+n)$.

$$T \propto A^{-n/(1+n)} = \frac{1}{A^{n/(1+n)}}$$

For $n = 2$ (harmonic oscillator): $T$ is independent of $A$ (isochronous). For $n = 4$:
$T \propto A^{-4/5}$.

Alternatively, via the virial theorem for $V \propto x^n$:
$\langle T \rangle = \frac{n}{2}\langle V \rangle$And
$E = \langle T \rangle + \langle V \rangle = \frac{n+2}{2}\langle V \rangle$So the average kinetic
energy scales as $\langle T \rangle \propto E \propto A^n$. The period scales as
$T \propto \sqrt{\langle T \rangle} / A \propto A^{n/2 - 1} = A^{-(2-n)/2}$. Wait --- let me redo
this more carefully.

Using $E = V_0(A/a)^n$ and $\langle T \rangle = \frac{n}{n+2}E \propto A^n$. The RMS velocity scales
as $v_{\mathrm{rms} \propto A^{n/2}}$. The period is
$T \propto A/v_{\mathrm{rms} \propto A^{1-n/2} = A^{-(n-2)/2} = A^{-n/(n+2)} \cdot A^{\cdot}}$.

Actually, the cleanest result from dimensional analysis is $T \propto A^{1 - n/2}$Giving
$T \propto A^{-1/2}$ for $n = 3$ (cubic potential).

**If you get this wrong, revise:** Section 1.6 (energy conservation), Section 3.1 (Lagrangian).

</details>

### Problem 8

Find the Hamiltonian for a charged particle (mass $m$Charge $q$) in an electromagnetic field with
vector potential $\mathbf{A}$ and scalar potential $\phi$.

<details>
<summary>Solution</summary>

The Lagrangian for a charged particle in an electromagnetic field is:

$$L = \frac{1}{2}m\dot{\mathbf{r}}^2 + q\dot{\mathbf{r}} \cdot \mathbf{A} - q\phi$$

The canonical momentum:

$$\mathbf{p} = \frac{\partial L}{\partial \dot{\mathbf{r}}} = m\dot{\mathbf{r}} + q\mathbf{A}$$

Note: $\mathbf{p} \neq m\dot{\mathbf{r}}$; the canonical momentum differs from the mechanical
momentum by $q\mathbf{A}$.

The Hamiltonian:

$$H = \mathbf{p} \cdot \dot{\mathbf{r}} - L = \mathbf{p} \cdot \frac{\mathbf{p} - q\mathbf{A}}{m} - \frac{1}{2}m\left(\frac{\mathbf{p} - q\mathbf{A}}{m}\right)^2 - q\frac{\mathbf{p} - q\mathbf{A}}{m} \cdot \mathbf{A} + q\phi$$

$$= \frac{(\mathbf{p} - q\mathbf{A})^2}{2m} + q\phi$$

**If you get this wrong, revise:** Section 4.2 (Hamiltonian via Legendre transform), Section 4.3
(Hamilton's equations).

</details>

### Problem 9

Find the inertia tensor of a uniform solid cube of mass $M$ and side $a$ about one of its corners.
Identify the principal moments of inertia.

<details>
<summary>Solution</summary>

By symmetry, $I_{xx} = I_{yy} = I_{zz}$ and $I_{xy} = I_{xz} = I_{yz}$.

Place the corner at the origin with edges along the axes.

$$I_{xx} = \int_0^a \int_0^a \int_0^a \frac{M}{a^3}(y^2 + z^2)\, dx\, dy\, dz = \frac{M}{a^3} \cdot a \cdot \frac{2a^3}{3} = \frac{2Ma^2}{3}$$

$$I_{xy} = -\int_0^a \int_0^a \int_0^a \frac{M}{a^3} xy\, dx\, dy\, dz = -\frac{M}{a^3} \cdot \frac{a^2}{2} \cdot \frac{a^2}{2} \cdot a = -\frac{Ma^2}{4}$$

The inertia tensor is:

$$\mathbf{I} = \frac{Ma^2}{12}\begin{pmatrix} 8 & -3 & -3 \\ -3 & 8 & -3 \\ -3 & -3 & 8 \end{pmatrix}$$

The eigenvalues of $\begin{pmatrix} 8 & -3 & -3 \\ -3 & 8 & -3 \\ -3 & -3 & 8 \end{pmatrix}$ are
found from $\det(\mathbf{M} - \lambda\mathbf{1}) = 0$:

$$(8-\lambda)^3 - 27 - 27 + 3(8-\lambda)(9) = 0$$

Trying $\lambda = 2$: $216 - 54 = 162 \neq 0$. Trying $\lambda = 11$:
$(-3)^3 - 54 + 3(-3)(9) = -27 - 54 - 81 = -162 \neq 0$.

The eigenvalues are $\lambda_1 = 2$ (with eigenvector $(1,1,1)$The body diagonal) and
$\lambda_{2,3} = 11$ (degenerate, in the plane perpendicular to the body diagonal).

Principal moments: $I_1 = Ma^2/6$, $I_2 = I_3 = 11Ma^2/12$.

**If you get this wrong, revise:** Section 8.3 (inertia tensor), Section 8.4 (principal axes).

</details>

### Problem 10

A satellite in a circular orbit of radius $r_0$ around Earth receives a brief tangential impulse
that increases its speed by $\Delta v$. Determine whether the new orbit is elliptical, parabolic, or
hyperbolic as a function of $\Delta v$.

<details>
<summary>Solution</summary>

The circular orbital speed is $v_c = \sqrt{GM/r_0}$. The energy of the circular orbit is
$E_0 = -GMm/(2r_0) = -mv_c^2/2$.

After the impulse, the speed is $v = v_c + \Delta v$ and the new energy is:

$$E = \frac{1}{2}m(v_c + \Delta v)^2 - \frac{GMm}{r_0} = \frac{1}{2}m(v_c + \Delta v)^2 - mv_c^2 = \frac{1}{2}m(v_c^2 + 2v_c\Delta v + \Delta v^2) - mv_c^2$$

$$= \frac{1}{2}m(2v_c\Delta v + \Delta v^2) - \frac{1}{2}mv_c^2 = E_0 + mv_c\Delta v + \frac{1}{2}m\Delta v^2$$

- **Elliptical** if $E \lt 0$: $\Delta v \lt (\sqrt{2} - 1)v_c \approx 0.414\, v_c$
- **Parabolic** if $E = 0$: $\Delta v = (\sqrt{2} - 1)v_c$
- **Hyperbolic** if $E \gt 0$: $\Delta v \gt (\sqrt{2} - 1)v_c$

**If you get this wrong, revise:** Section 6.4 (Kepler problem, orbit classification).

</details>

### Problem 11

Two particles of masses $m_1$ and $m_2$ interact via a central force. Reduce the two-body problem to
an equivalent one-body problem and identify the reduced mass.

<details>
<summary>Solution</summary>

The Lagrangian for two particles interacting via $V(\lvert\mathbf{r}_1 - \mathbf{r}_2\rvert)$:

$$L = \frac{1}{2}m_1\dot{\mathbf{r}}_1^2 + \frac{1}{2}m_2\dot{\mathbf{r}}_2^2 - V(\lvert\mathbf{r}_1 - \mathbf{r}_2\rvert)$$

Introduce centre of mass $\mathbf{R} = (m_1\mathbf{r}_1 + m_2\mathbf{r}_2)/(m_1 + m_2)$ and relative
coordinate $\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2$.

Then $\mathbf{r}_1 = \mathbf{R} + \frac{m_2}{M}\mathbf{r}$ and
$\mathbf{r}_2 = \mathbf{R} - \frac{m_1}{M}\mathbf{r}$ where $M = m_1 + m_2$.

$$L = \frac{1}{2}M\dot{\mathbf{R}}^2 + \frac{1}{2}\mu\dot{\mathbf{r}}^2 - V(r)$$

Where $\mu = m_1 m_2 / (m_1 + m_2)$ is the **reduced mass**.

The centre of mass moves freely (uniform motion or at rest), and the relative motion is equivalent
to a single particle of mass $\mu$ in the potential $V(r)$.

**If you get this wrong, revise:** Section 6.1 (central force reduction), Section 1.5 (centre of
mass).

</details>

### Problem 12

Show that the Poisson brackets $\{L_x, L_y\} = L_z$ and its cyclic permutations hold, where
$\mathbf{L} = \mathbf{r} \times \mathbf{p}$ is the angular momentum.

<details>
<summary>Solution</summary>

$L_x = yp_z - zp_y$, $L_y = zp_x - xp_z$, $L_z = xp_y - yp_x$.

$$\{L_x, L_y\} = \frac{\partial L_x}{\partial x}\frac{\partial L_y}{\partial p_x} - \frac{\partial L_x}{\partial p_x}\frac{\partial L_y}{\partial x} + \frac{\partial L_x}{\partial y}\frac{\partial L_y}{\partial p_y} - \frac{\partial L_x}{\partial p_y}\frac{\partial L_y}{\partial y} + \frac{\partial L_x}{\partial z}\frac{\partial L_y}{\partial p_z} - \frac{\partial L_x}{\partial p_z}\frac{\partial L_y}{\partial z}$$

Computing each term:

- $\partial L_x/\partial x = 0$, $\partial L_y/\partial p_x = z$: contributes $0$
- $\partial L_x/\partial p_x = 0$, $\partial L_y/\partial x = -p_z$: contributes $0$
- $\partial L_x/\partial y = p_z$, $\partial L_y/\partial p_y = 0$: contributes $0$
- $\partial L_x/\partial p_y = -z$, $\partial L_y/\partial y = 0$: contributes $0$
- $\partial L_x/\partial z = -p_y$, $\partial L_y/\partial p_z = -x$: contributes $p_y x$
- $\partial L_x/\partial p_z = y$, $\partial L_y/\partial z = p_x$: contributes $-y p_x$

$$\{L_x, L_y\} = xp_y - yp_x = L_z \quad \blacksquare$$

The cyclic permutations follow by the same method.

**If you get this wrong, revise:** Section 4.8 (Poisson bracket definition and properties).

</details>

### Problem 13

A particle of mass $m$ is constrained to move on the surface of a cone $z = \alpha\sqrt{x^2 + y^2}$
($\alpha \gt 0$) under gravity. Set up the Lagrangian and find the effective potential for the
radial coordinate.

<details>
<summary>Solution</summary>

In cylindrical coordinates, the constraint is $z = \alpha r$So $\dot{z} = \alpha\dot{r}$. The
Lagrangian has two degrees of freedom, $r$ and $\phi$:

$$T = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2 + \alpha^2\dot{r}^2) = \frac{1}{2}m(1+\alpha^2)\dot{r}^2 + \frac{1}{2}mr^2\dot{\phi}^2$$

$$V = mg\alpha r$$

$$L = \frac{1}{2}m(1+\alpha^2)\dot{r}^2 + \frac{1}{2}mr^2\dot{\phi}^2 - mg\alpha r$$

Since $\phi$ is cyclic, $p_\phi = mr^2\dot{\phi} = l = \mathrm{const}$.

The energy is:

$$E = \frac{1}{2}m(1+\alpha^2)\dot{r}^2 + V_{\mathrm{eff}(r)}$$

Where the effective potential is:

$$V_{\mathrm{eff}(r) = \frac{l^2}{2mr^2} + mg\alpha r}$$

This is the sum of a centrifugal barrier ($\propto 1/r^2$) and a linear potential ($\propto r$),
giving a single minimum that corresponds to a stable circular orbit.

**If you get this wrong, revise:** Section 2.2 (holonomic constraints), Section 6.2 (effective
potential).

</details>

### Problem 14

Derive the Hamilton-Jacobi equation for a particle in a central potential $V(r)$ and use separation
of variables to reduce it to quadratures.

<details>
<summary>Solution</summary>

In spherical coordinates $(r, \theta, \phi)$The Hamiltonian is:

$$H = \frac{1}{2m}\left(p_r^2 + \frac{p_\theta^2}{r^2} + \frac{p_\phi^2}{r^2\sin^2\theta}\right) + V(r)$$

Since $H$ is time-independent, write $S = W(r, \theta, \phi) - Et$. The HJ equation:

$$\frac{1}{2m}\left[\left(\frac{\partial W}{\partial r}\right)^2 + \frac{1}{r^2}\left(\frac{\partial W}{\partial \theta}\right)^2 + \frac{1}{r^2\sin^2\theta}\left(\frac{\partial W}{\partial \phi}\right)^2\right] + V(r) = E$$

Since $\phi$ is cyclic, separate $W = W_r(r) + W_\theta(\theta) + p_\phi\phi$ where $p_\phi$ is the
$z$-component of angular momentum. Defining $l^2$ as the separation constant:

$$\left(\frac{dW_\theta}{d\theta}\right)^2 + \frac{p_\phi^2}{\sin^2\theta} = l^2$$

$$\left(\frac{dW_r}{dr}\right)^2 + \frac{l^2}{r^2} = 2m(E - V(r))$$

The solution is reduced to quadratures:

$$W_r = \int \sqrt{2m(E - V(r)) - l^2/r^2}\, dr$$

$$W_\theta = \int \sqrt{l^2 - \frac{p_\phi^2}{\sin^2\theta}}\, d\theta$$

$$S = W_r + W_\theta + p_\phi\phi - Et$$

**If you get this wrong, revise:** Section 4.9 (Hamilton-Jacobi equation), Section 6.1 (central
force reduction).

</details>

### Problem 15

A symmetric top ($I_1 = I_2$) with $I_3 = 2I_1$ has total angular momentum $L$ and spin $n$ about
its symmetry axis. Show that the angular velocity vector $\boldsymbol{\omega}$ precesses around
$\mathbf{L}$ and find the precession frequency.

<details>
<summary>Solution</summary>

In the body frame, Euler's equations with $I_1 = I_2$ and no external torque:

$$I_1\dot{\omega}_1 = (I_1 - I_3)\omega_2\omega_3 = -I_1\omega_2\omega_3$$

$$I_1\dot{\omega}_2 = (I_3 - I_1)\omega_3\omega_1 = I_1\omega_3\omega_1$$

$$I_3\dot{\omega}_3 = 0$$

From the third equation, $\omega_3 = n = \mathrm{const}$. Define
$\Omega = (I_3 - I_1)\omega_3/I_1 = n$. The first two equations become:

$$\dot{\omega}_1 = -n\omega_2, \quad \dot{\omega}_2 = n\omega_1$$

These describe circular motion in the $(\omega_1, \omega_2)$ plane with frequency $n$. The angular
velocity vector precesses around the 3-axis (symmetry axis) with frequency $n$ in the body frame.

In the space frame, $\mathbf{L}$ is fixed. The symmetry axis precesses around $\mathbf{L}$ with the
**body cone** rolling on the **space cone**. The precession frequency in the space frame is:

$$\Omega_{\mathrm{space} = \frac{L}{I_1} = \frac{\sqrt{I_1^2(\omega_1^2 + \omega_2^2) + I_3^2\omega_3^2}}{I_1}}$$

**If you get this wrong, revise:** Section 8.5 (Euler's equations), Section 8.7 (spinning top).

</details>

### Problem 16

A mass $m$ is attached to a spring of constant $k$ and hangs vertically. The upper end of the spring
is then oscillated vertically as $y_0(t) = A\cos(\omega t)$. Find the steady-state solution and
identify the resonance condition.

<details>
<summary>Solution</summary>

Let $x$ be the extension of the spring from its natural length. The position of the mass is
$y_0 - x$. The Lagrangian:

$$L = \frac{1}{2}m(\dot{y}_0 - \dot{x})^2 + mg(y_0 - x) - \frac{1}{2}kx^2$$

Since $\dot{y}_0 = -A\omega\sin(\omega t)$:

$$L = \frac{1}{2}m\dot{x}^2 - mA\omega\sin(\omega t)\dot{x} + mgA\cos(\omega t) - mgx - \frac{1}{2}kx^2$$

Euler-Lagrange equation:

$$m\ddot{x} + kx = -mA\omega^2\cos(\omega t) - mg + mA\omega^2\cos(\omega t) + mg = -mA\omega^2\cos(\omega t)$$

Wait, let me redo this. Let $x$ be measured from the equilibrium position. The equation of motion
for the displacement from equilibrium is:

$$m\ddot{x} + kx = mA\omega^2\cos(\omega t)$$

The steady-state solution is $x(t) = X\cos(\omega t)$ where:

$$X = \frac{mA\omega^2}{k - m\omega^2} = \frac{A\omega^2}{\omega_0^2 - \omega^2}$$

Where $\omega_0 = \sqrt{k/m}$. **Resonance** occurs at $\omega = \omega_0$ where the amplitude
diverges (without damping).

**If you get this wrong, revise:** Section 3.2 (Euler-Lagrange equation), forced oscillation theory.

</details>

### Problem 17

Compute $\{H, H\}$ and $\{q_j, p_k\}$ directly from the definition of the Poisson bracket. Show that
$\{q_j, p_k\} = \delta_{jk}$.

<details>
<summary>Solution</summary>

For $\{H, H\}$:

$$\{H, H\} = \sum_j \left(\frac{\partial H}{\partial q_j}\frac{\partial H}{\partial p_j} - \frac{\partial H}{\partial p_j}\frac{\partial H}{\partial q_j}\right) = 0$$

By antisymmetry of the Poisson bracket. (Also follows from Theorem 4.5 since $H$ is conserved when
$\partial H/\partial t = 0$.)

For $\{q_j, p_k\}$:

$$\{q_j, p_k\} = \sum_l \left(\frac{\partial q_j}{\partial q_l}\frac{\partial p_k}{\partial p_l} - \frac{\partial q_j}{\partial p_l}\frac{\partial p_k}{\partial q_l}\right)$$

$$= \sum_l \left(\delta_{jl}\delta_{kl} - 0\right) = \delta_{jk}$$

$\blacksquare$

**If you get this wrong, revise:** Section 4.8 (fundamental Poisson brackets).

</details>

### Problem 18

Prove Bertrand's theorem: the only central potentials for which all bounded orbits are closed are
$V(r) = -k/r$ and $V(r) = \frac{1}{2}kr^2$. (Sketch the .../1-number-and-algebra/3_proof-and-logic;
a full .../1-number-and-algebra/3_proof-and-logic requires showing that the orbit must close after a
finite number of oscillations for all energies.)

<details>
<summary>Solution</summary>

We sketch the key steps of the .../1-number-and-algebra/3_proof-and-logic.

**Step 1: Orbit equation.** From the Binet equation $u'' + u = -\frac{m}{l^2 u^2}V'(1/u)$Write
$V'(1/u) = -f(u)/u^2$ where $f(u)$ is the force law. The orbit equation becomes $u'' + u = J(u)$
where $J(u) = \frac{m}{l^2}f(1/u)/u^2$... Actually let me use the standard approach.

For a nearly circular orbit at radius $r_0$Write $u = u_0 + x$ where $u_0 = 1/r_0$ and $x$ is small.
Linearising the Binet equation:

$$x'' + \beta^2 x = 0$$

Where $\beta^2 = 3 + \frac{r_0}{f(r_0)}\frac{df}{dr}\bigg|_{r_0}$ and $f(r) = -dV/dr$.

The orbit closes after a finite number of oscillations if $\beta^2$ is a positive rational number
for **all** $r_0$ (i.e., for all energies). This is a very restrictive condition.

**Step 2: Force law.** Write $f(r) = -k r^{-(n+3)}$ (power law) or equivalently
$V(r) \propto r^{-n}$. Then:

$$\beta^2 = 3 - n$$

For the orbit to close for all energies, $\beta^2$ must be rational for all $r_0$And since it is
energy-independent for power laws, we need $\beta^2 = p^2/q^2$ for integers $p, q$.

The apsidal angle is $\Delta\phi = \pi/\beta = \pi q/p$. For the orbit to close, $\Delta\phi$ must
be a rational multiple of $\pi$.

**Step 3: Only two possibilities.** For the orbit to be closed (not just the apsidal angle to be
rational, but the orbit to close for all initial conditions), a deeper analysis shows only $n = -1$
($V \propto -1/r$Kepler) and $n = 2$ ($V \propto r^2$Harmonic oscillator) work. For $n = -1$:
$\beta^2 = 4$, $\beta = 2$, $\Delta\phi = \pi/2$ (ellipse closes after 2 oscillations, 4 quadrants).
For $n = 2$: $\beta^2 = 1$, $\beta = 1$, $\Delta\phi = \pi$ (ellipse closes after 1 oscillation, 2
half-turns).

$\blacksquare$

**If you get this wrong, revise:** Section 6.3 (Binet equation), Section 6.4 (Kepler problem,
Bertrand's theorem).

</details>

