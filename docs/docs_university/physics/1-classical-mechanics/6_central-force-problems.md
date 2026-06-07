---
title: Central Force Problems
tags:
  - Physics
  - University
---

### 6.1 Reduction to One Dimension

For a particle of mass $m$ in a central potential $V(r)$Using polar coordinates $(r, \phi)$ in the
Plane of motion:

$$L = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2) - V(r)$$

The angular momentum $l = mr^2\dot{\phi}$ is conserved. Substituting $\dot{\phi} = l/(mr^2)$:

$$L = \frac{1}{2}m\dot{r}^2 + \frac{l^2}{2mr^2} - V(r)$$

The effective potential is $V_{\mathrm{eff}(r) = V(r) + \frac{l^2}{2mr^2}}$Where the second term is
The **centrifugal barrier**.

### 6.2 Effective Potential Analysis

**Definition.** The **effective one-dimensional energy** is:

$$E = \frac{1}{2}m\dot{r}^2 + V_{\mathrm{eff}(r)}$$

Since $E$ and $l$ are conserved, the radial motion is completely determined by
$V_{\mathrm{eff}(r)}$.

**Circular orbits** occur at radii $r_0$ where $V_{\mathrm{eff}'(r_0) = 0}$:

$$V'(r_0) - \frac{l^2}{mr_0^3} = 0$$

The orbit is **stable** if $V_{\mathrm{eff}''(r_0) \gt 0}$ and **unstable** if
$V_{\mathrm{eff}''(r_0) \lt 0}$.

For the Kepler problem $V(r) = -k/r$:

$$V_{\mathrm{eff}(r) = -\frac{k}{r} + \frac{l^2}{2mr^2}}$$

$$V_{\mathrm{eff}'(r) = \frac{k}{r^2} - \frac{l^2}{mr^3} = 0 \implies r_0 = \frac{l^2}{mk}}$$

$$V_{\mathrm{eff}''(r_0) = -\frac{2k}{r_0^3} + \frac{3l^2}{mr_0^4} = \frac{m^3k^2}{l^4} \gt 0}$$

So the circular orbit is always stable for the Kepler problem.

<!-- prettier-ignore -->
<DesmosGraph title="Effective Potential for Kepler Problem" expressions={["-k/x+l^2/(2*x^2)", "y=E"]} width={800} height={500} />

The effective potential $V_{\mathrm{eff}}(r) = -k/r + l^2/(2r^2)$ (blue) combines the attractive
$-1/r$ well with the centrifugal barrier $\propto 1/r^2$. Adjust sliders `k` (force constant), `l`
(angular momentum), and `E` (total energy) to explore bound and unbound orbits.

### 6.3 The Orbit Equation

Starting from conservation of energy and angular momentum, we derive the orbit equation. Let
$u = 1/r$ and use $d/dt = (l/mr^2)\, d/d\phi = (lu^2/m)\, d/d\phi$:

$$\dot{r} = \frac{dr}{dt} = \frac{l}{mr^2}\frac{dr}{d\phi} = -\frac{l}{m}\frac{du}{d\phi}$$

Substituting into the energy equation:

$$E = \frac{l^2}{2m}\left(\frac{du}{d\phi}\right)^2 + \frac{l^2 u^2}{2m} + V\left(\frac{1}{u}\right)$$

Differentiating with respect to $\phi$:

$$\frac{l^2}{m}\frac{du}{d\phi}\frac{d^2u}{d\phi^2} + \frac{l^2 u}{m}\frac{du}{d\phi} - \frac{1}{u^2}V'\left(\frac{1}{u}\right)\frac{du}{d\phi} = 0$$

Dividing by $l^2 u'/(m)$ (assuming $u' \neq 0$):

$$\frac{d^2u}{d\phi^2} + u = -\frac{m}{l^2 u^2}V'\left(\frac{1}{u}\right)$$

This is the **Binet equation**.

### 6.4 The Kepler Problem

For $V(r) = -k/r$ (gravitational or Coulomb potential):

$$V'\left(\frac{1}{u}\right) = \frac{dV}{dr} = \frac{k}{r^2} = ku^2$$

The Binet equation becomes:

$$\frac{d^2u}{d\phi^2} + u = \frac{mk}{l^2}$$

This is an inhomogeneous ODE with solution:

$$u(\phi) = \frac{mk}{l^2}(1 + e\cos(\phi - \phi_0))$$

Where $e$ is the **eccentricity** and $\phi_0$ is a constant. Setting $\phi_0 = 0$:

$$r(\phi) = \frac{l^2/(mk)}{1 + e\cos\phi} = \frac{p}{1 + e\cos\phi}$$

Where $p = l^2/(mk)$ is the **semi-latus rectum**.

The eccentricity is determined by the energy:

$$e = \sqrt{1 + \frac{2El^2}{mk^2}}$$

**Classification of orbits:**

| Energy    | Eccentricity | Orbit Type                  |
| --------- | ------------ | --------------------------- |
| $E \lt 0$ | $e \lt 1$    | Ellipse (bound)             |
| $E = 0$   | $e = 1$      | Parabola (marginally bound) |
| $E \gt 0$ | $e \gt 1$    | Hyperbola (unbound)         |

**Bertrand's Theorem:** The only central potentials that give closed orbits for all bound states are
$V(r) \propto 1/r$ (Kepler/Coulomb) and $V(r) \propto r^2$ (harmonic oscillator).

**Key results for Kepler orbits:**

- Orbits are conic sections (ellipses, parabolas, or hyperbolas).
- The semi-major axis $a$ satisfies $E = -k/(2a)$ for bound orbits.
- The period is $T = 2\pi\sqrt{ma^3/k}$ (Kepler's third law).

### 6.5 Worked Example: Satellite Orbit

**Problem.** A satellite of mass $m$ orbits Earth ($M = 5.97 \times 10^{24}\,\mathrm{kg}$) in an
elliptical orbit with perigee (closest approach) $r_p = 7000\,\mathrm{km}$ and apogee (farthest
point) $r_a = 42000\,\mathrm{km}$. Find the eccentricity, semi-major axis, and orbital period.

<details>
<summary>Solution</summary>

The semi-major axis is $a = (r_p + r_a)/2 = (7000 + 42000)/2 = 24500\,\mathrm{km}$.

From the orbit equation, at perigee ($\phi = 0$): $r_p = p/(1 + e)$And at apogee ($\phi = \pi$):
$r_a = p/(1 - e)$.

Therefore:

$$e = \frac{r_a - r_p}{r_a + r_p} = \frac{42000 - 7000}{42000 + 7000} = \frac{35000}{49000} \approx 0.714$$

The energy is $E = -k/(2a)$ where
$k = GMm = 6.674 \times 10^{-11} \times 5.97 \times 10^{24} \times m = 3.986 \times 10^{14} m\,\mathrm{m}^3/\mathrm{s}^2$.

The period (independent of mass $m$):

$$T = 2\pi\sqrt{\frac{ma^3}{k}} = 2\pi\sqrt{\frac{a^3}{GM}} = 2\pi\sqrt{\frac{(2.45 \times 10^7)^3}{3.986 \times 10^{14}}}$$

$$= 2\pi\sqrt{\frac{1.471 \times 10^{22}}{3.986 \times 10^{14}}} = 2\pi\sqrt{3.691 \times 10^7} \approx 2\pi \times 6075 \approx 38170\,\mathrm{s} \approx 10.6\,\mathrm{hours}$$

$\blacksquare$

</details>

### 6.6 Worked Example: Rutherford Scattering

**Problem.** A particle of mass $m$ and energy $E \gt 0$ is scattered by a repulsive Coulomb
potential $V(r) = k/r$ ($k \gt 0$). Find the scattering angle $\Theta$ as a function of the impact
parameter $b$.

<details>
<summary>Solution</summary>

The angular momentum is $l = mv_\infty b$ where $v_\infty = \sqrt{2E/m}$. The eccentricity is:

$$e = \sqrt{1 + \frac{2El^2}{mk^2}} = \sqrt{1 + \left(\frac{2Eb}{k/m}\right)^2}$$

The orbit is a hyperbola. The asymptotic angles satisfy $r \to \infty$I.e.,
$1 + e\cos\phi = 0$Giving $\phi_{\pm} = \pi \pm \arccos(1/e)$. The scattering angle is:

$$\Theta = \pi - 2\arccos(1/e) = 2\arcsin(1/e)$$

Using $\sin(\Theta/2) = 1/e$:

$$\cot\frac{\Theta}{2} = \frac{2Eb}{k/m} = \frac{mv_\infty^2 b}{k/m}$$

This is the **Rutherford scattering formula** relating the scattering angle to the impact parameter.
$\blacksquare$

</details>

