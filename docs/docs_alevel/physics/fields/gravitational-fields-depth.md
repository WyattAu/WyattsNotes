---
title: Gravitational Fields
description:
  A-Level Physics notes on Gravitational Fields: 1. Newton's Law of Universal
  Gravitation; Geometric Origin of the Inverse Square Law.
date: 2026-04-23T00:00:00.000Z
tags: [Physics, ALevel]
categories: [Physics]
slug: gravitational-fields-depth
---

## Gravitational Fields

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

## 1. Newton's Law of Universal Gravitation

**Newton's Law.** Every point mass attracts every other point mass with a force directed along the line
joining them, whose magnitude is:

$$\boxed{F = \frac{Gm_1 m_2}{r^2}}$$

where $G = 6.67 \times 10^{-11}$ N m$^2$ kg$^{-2}$ is the gravitational constant.

### Geometric Origin of the Inverse Square Law

Consider a point mass emitting gravitational flux uniformly in all directions. The flux through a
sphere of radius $r$ is constant (by Gauss's law for gravity):

$$\oint \mathbf{g} \cdot d\mathbf{A} = -4\pi G M_{\mathrm{enc}}$$

Since the surface area is $4\pi r^2$, the flux density (field strength) must be $g = GM/r^2$. The
force on a test mass $m$ is then $F = mg = GMm/r^2$. This inverse square law is a direct geometric
consequence of flux conservation in three-dimensional space.

### Properties of the Gravitational Force

- Always **attractive** (no negative mass exists).
- Infinite range — the force extends to arbitrarily large distances, weakening as $1/r^2$.
- Acts on all objects with mass — it is the universal force binding large-scale structures.
- Extremely weak compared to electromagnetism: $F_e/F_g \sim 10^{36}$ for elementary particles.

The weakness of gravity means it is only dominant at macroscopic scales where the near-perfect
cancellation of positive and negative electric charges renders electromagnetic forces negligible.

## 2. Gravitational Field Strength

**Definition.** The gravitational field strength $\mathbf{g}$ at a point is the force per unit mass on a
small test mass placed at that point:

$$\boxed{\mathbf{g} = \frac{\mathbf{F}}{m}}$$

SI units: N kg$^{-1}$, equivalent to m s$^{-2}$.

For a point mass $M$ at distance $r$:

$$\boxed{g = \frac{GM}{r^2}}$$

directed radially inward towards $M$.

**Proof.** From Newton's law: $F = GMm/r^2$. Dividing by $m$: $g = F/m = GM/r^2$. $\square$

### Proof of the Shell Theorem

**Theorem.** A uniform spherical shell of mass $M$ and radius $R$ produces: (a) the same field as a
point mass $M$ at its centre for all external points ($r \gt R$), and (b) zero field at all internal
points ($r \lt R$).

**Proof (external, $r \gt R$).** Consider a test mass $m$ at distance $r$ from the centre. Divide the
shell into thin annular rings perpendicular to the line from the centre to $m$. A ring at polar angle
$\theta$ has radius $R\sin\theta$, width $R\,d\theta$, and mass:

$$dM = \frac{M}{4\pi R^2} \cdot 2\pi R^2 \sin\theta\,d\theta = \frac{M}{2}\sin\theta\,d\theta$$

Every element of the ring is at distance $s = \sqrt{r^2 + R^2 - 2rR\cos\theta}$ from $m$. By the
axial symmetry of the ring, the transverse components of force cancel, leaving only the component
along the axis. The angle $\alpha$ between the force direction and the axis satisfies:

$$\cos\alpha = \frac{r - R\cos\theta}{s}$$

The axial force contribution from the ring is:

$$dF = \frac{Gm\,dM}{s^2}\cos\alpha = \frac{GmM}{2}\cdot\frac{(r - R\cos\theta)\sin\theta\,d\theta}{(r^2 + R^2 - 2rR\cos\theta)^{3/2}}$$

Substitute $u = \cos\theta$, $du = -\sin\theta\,d\theta$. When $\theta = 0$, $u = 1$; when
$\theta = \pi$, $u = -1$:

$$F = \frac{GmM}{2}\int_{1}^{-1}\frac{(r - Ru)(-du)}{(r^2 + R^2 - 2rRu)^{3/2}}$$

The integral evaluates to $\frac{2r}{r^2 - R^2} \cdot \frac{1}{r^2} \cdot (r^2 - R^2) \cdot \frac{1}{r}$
after careful algebra, giving:

$$F = \frac{GMm}{r^2}$$

This is identical to the field of a point mass $M$ at the centre. $\square$

**Proof (internal, $r \lt R$).** The same integral with $r \lt R$ evaluates to zero. Physically, for
every mass element pulling the test mass in one direction, there is a compensating element on the
opposite side. The nearer element pulls more strongly (shorter distance) but is subtended by a smaller
solid angle, and these two effects cancel exactly. $\square$

:::warning Common Pitfall The shell theorem applies only to spherically symmetric mass distributions.
Earth is approximately but not perfectly spherical (equatorial bulge), so $g$ varies slightly with
latitude even at sea level.
:::

### Field Strength at Altitude

At height $h$ above a planet of radius $R$ and surface field $g_0$:

$$\boxed{g = g_0\left(\frac{R}{R + h}\right)^2}$$

For $h \ll R$, the binomial approximation gives $g \approx g_0(1 - 2h/R)$.

## 3. Gravitational Potential

**Definition.** The gravitational potential $V$ at a point is the work done per unit mass in bringing a
small test mass from infinity to that point:

$$\boxed{V = -\frac{GM}{r}}$$

SI units: J kg$^{-1}$.

### Derivation

$$V = \frac{W}{m} = \frac{1}{m}\int_{\infty}^{r} \frac{GMm}{r'^2}\,dr' = GM\int_{\infty}^{r}\frac{dr'}{r'^2} = GM\left[-\frac{1}{r'}\right]_{\infty}^{r} = -\frac{GM}{r}$$

$\square$

**Why negative?** We define $V = 0$ at infinity. As the test mass moves inward, gravity does positive
work, so the potential decreases. The potential at any finite $r$ is therefore negative, becoming more
negative as $r$ decreases. An external agent must supply energy $GMm/r$ to move the mass from $r$ back
to infinity.

### Field--Potential Relationship

$$\boxed{g = -\frac{dV}{dr}}$$

**Proof.** $V = -GM/r = -GM r^{-1}$. Then:

$$\frac{dV}{dr} = GM\,r^{-2} = \frac{GM}{r^2}$$

The field (directed inward, i.e. in the negative radial direction) is:

$$g_r = -\frac{GM}{r^2} = -\frac{dV}{dr}$$

$\square$

The minus sign confirms that the field points in the direction of decreasing potential.

### Gravitational Potential Energy

For two masses $M$ and $m$ separated by $r$:

$$\boxed{E_p = -\frac{GMm}{r}}$$

**Connection to $E_p = mgh$.** For height $h \ll R_E$, the Taylor expansion gives:

$$\Delta E_p = -\frac{GMm}{R_E + h} + \frac{GMm}{R_E} = \frac{GMmh}{R_E(R_E + h)} \approx \frac{GMmh}{R_E^2} = mgh$$

since $g = GM/R_E^2$. The linear formula $mgh$ is the first-order approximation of the full
gravitational potential energy.

## 4. Escape Velocity

**Definition.** The escape velocity $v_e$ is the minimum launch speed for an object to reach infinity
with zero residual speed from the surface of a body of mass $M$ and radius $R$.

### Derivation from Energy Conservation

At launch: $E_k = \frac{1}{2}mv_e^2$, $E_p = -GMm/R$. At infinity: $E_k = 0$, $E_p = 0$. By energy
conservation:

$$\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0$$

$$\boxed{v_e = \sqrt{\frac{2GM}{R}}}$$

$\square$

### Relationship to Orbital Speed

The circular orbital speed at radius $r$ is $v_{\mathrm{orb}} = \sqrt{GM/r}$. Therefore:

$$v_e = \sqrt{2}\,v_{\mathrm{orb}}$$

Escape requires exactly twice the kinetic energy of a circular orbit: $\frac{1}{2}mv_e^2 = 2 \times
\frac{1}{2}mv_{\mathrm{orb}}^2$. A spacecraft in circular orbit needs a speed increase of
$(\sqrt{2} - 1) \times 100\% \approx 41.4\%$ to escape.

<details>
<summary>Worked Example: Escape from Mars</summary>
Calculate the escape velocity from Mars ($M = 6.42 \times 10^{23}$ kg, $R = 3.39 \times 10^6$ m).

**Answer.** $v_e = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 6.42 \times 10^{23}}{3.39 \times 10^6}} = \sqrt{\frac{8.56 \times 10^{13}}{3.39 \times 10^6}} = \sqrt{2.53 \times 10^7} = 5020$ m s$^{-1}$ $= 5.02$ km s$^{-1}$.

</details>

:::warning Common Pitfall Escape velocity is independent of the mass and direction of launch of the
projectile. A 1 kg ball and a $10^6$ kg rocket both need the same speed. However, the required kinetic
energy $E_k = \frac{1}{2}mv_e^2$ scales with mass.
:::

## 5. Orbital Mechanics

### Circular Orbit Equations

For a satellite of mass $m$ in a circular orbit of radius $r$ around mass $M$:

| Quantity | Expression |
|---|---|
| Orbital speed | $v = \sqrt{GM/r}$ |
| Orbital period | $T = 2\pi\sqrt{r^3/(GM)}$ |
| Centripetal acceleration | $a = GM/r^2 = g$ |
| Kinetic energy | $E_k = GMm/(2r)$ |
| Potential energy | $E_p = -GMm/r$ |
| Total energy | $E_{\mathrm{total}} = -GMm/(2r)$ |

**Proof of energy relations.** From $\frac{GMm}{r^2} = \frac{mv^2}{r}$: $v^2 = GM/r$.

$E_k = \frac{1}{2}mv^2 = \frac{GMm}{2r}$. $E_p = -GMm/r$. Total: $E_k + E_p = -\frac{GMm}{2r}$.

Note: $E_k = \frac{1}{2}|E_p|$ and $E_{\mathrm{total}} = E_k$. This is the virial theorem for bound
gravitational systems: $2E_k + E_p = 0$. $\square$

**Key insight.** The total energy is negative — the satellite is gravitationally bound. To move to a
higher orbit, energy must be added (the orbit becomes less negative). The kinetic energy *decreases*
with increasing $r$, but the total energy *increases* (potential energy increase dominates).

### The Vis-Viva Equation

For any Keplerian orbit (circular or elliptical) with semi-major axis $a$:

$$\boxed{v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right)}$$

Setting $a = r$ recovers the circular orbit result. For a parabolic escape trajectory ($a \to \infty$):
$v^2 = 2GM/r$, giving the escape speed.

### Orbital Speed is Mass-Independent

$$v = \sqrt{\frac{GM}{r}}$$

The satellite's mass $m$ cancels. This is the same reason that all objects fall at the same rate in a
gravitational field (equivalence principle).

<details>
<summary>Worked Example: Satellite Orbit Change</summary>
A 500 kg satellite is in a circular orbit of radius $7.0 \times 10^6$ m. Calculate the energy
required to move it to a circular orbit of radius $1.4 \times 10^7$ m.

**Answer.** $GM = 3.98 \times 10^{14}$ N m$^2$ kg$^{-1}$.

$E_1 = -\frac{GMm}{2r_1} = -\frac{3.98 \times 10^{14} \times 500}{2 \times 7.0 \times 10^6} = -1.42 \times 10^{10}$ J.

$E_2 = -\frac{3.98 \times 10^{14} \times 500}{2 \times 1.4 \times 10^7} = -7.11 \times 10^9$ J.

$\Delta E = E_2 - E_1 = -7.11 \times 10^9 - (-1.42 \times 10^{10}) = 7.1 \times 10^9$ J $= 7.1$ GJ.

</details>

## 6. Kepler's Laws

### First Law: Law of Ellipses

Every planet moves in an elliptical orbit with the Sun at one focus.

**Proof sketch.** Starting from $\mathbf{F} = -\frac{GMm}{r^2}\hat{\mathbf{r}}$ (central force), the orbit
equation in polar coordinates is:

$$r = \frac{a(1 - e^2)}{1 + e\cos\theta}$$

where $a$ is the semi-major axis and $e$ is the eccentricity. For $E \lt 0$ (bound orbit), $e \lt 1$
and the orbit is an ellipse with the central mass at one focus. $\square$

### Second Law: Law of Equal Areas

A line joining a planet to the Sun sweeps out equal areas in equal times.

**Proof.** The gravitational force is central ($\mathbf{F} \parallel \mathbf{r}$), so torque
$\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} = 0$. Angular momentum $L = mrv_\perp$ is constant.

Area swept in time $dt$: $dA = \frac{1}{2}r \cdot v_\perp\,dt = \frac{L}{2m}\,dt$.

$$\frac{dA}{dt} = \frac{L}{2m} = \mathrm{const}$$

$\square$

The planet moves fastest at perihelion (closest approach) and slowest at aphelion (farthest point),
consistent with conservation of angular momentum: small $r$ requires large $v_\perp$.

### Third Law: Law of Periods

$$\boxed{T^2 = \frac{4\pi^2}{GM}\,a^3}$$

**Proof for circular orbits.** Equating gravitational and centripetal force:

$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}}$$

Since $T = 2\pi r/v$:

$$T = \frac{2\pi r}{\sqrt{GM/r}} = 2\pi\sqrt{\frac{r^3}{GM}}$$

$$T^2 = \frac{4\pi^2 r^3}{GM}$$

For elliptical orbits, replace $r$ with the semi-major axis $a$. $\square$

The proportionality constant $4\pi^2/(GM)$ depends only on the central body, not on the orbiting
object. This is how Kepler determined the relative distances of the planets from the Sun using only
their observed periods.

## 7. Geostationary Orbits

**Definition.** A geostationary orbit is a circular, prograde, equatorial orbit with period equal to
one sidereal day ($T = 86164$ s), causing the satellite to remain fixed above a point on the equator.

### Derivation of Orbital Radius

$$r^3 = \frac{GMT^2}{4\pi^2} = \frac{3.98 \times 10^{14} \times (86164)^2}{4\pi^2} = 7.54 \times 10^{22}$$

$$\boxed{r = 4.22 \times 10^7\ \mathrm{m} = 42{,}200\ \mathrm{km}}$$

Altitude above Earth's surface: $h = 42200 - 6370 = 35{,}830$ km.

### Orbital Speed

$$v = \sqrt{\frac{GM}{r}} = \frac{2\pi r}{T} = 3070\ \mathrm{m\,s}^{-1}$$

### Three Necessary and Sufficient Conditions

1. **Correct radius:** $r \approx 42{,}200$ km (from Kepler's third law with $T = 86164$ s).
2. **Equatorial plane:** Any inclination causes the satellite to trace a figure-eight (anisotropic
   pattern) as seen from the ground.
3. **Prograde rotation:** The satellite must orbit west to east, matching Earth's rotation.

:::warning Common Pitfall A geosynchronous orbit has period 24 hours but may be inclined or elliptical.
Geostationary is a stricter condition: geosynchronous AND equatorial AND circular. GPS satellites are
neither — they use medium Earth orbits at 20,200 km altitude with 12-hour periods.
:::

### Applications

- **Communications:** Constant line of sight to a ground station, ideal for broadcast and relay.
- **Weather monitoring:** Continuous hemispheric observation (e.g., Meteosat, GOES).
- **Early warning:** Persistent surveillance of fixed geographical regions.

## 8. Comparison with Electric Fields

| Property | Gravitational | Electric |
|---|---|---|
| Source property | Mass $M$ | Charge $Q$ |
| Force law | $F = Gm_1m_2/r^2$ | $F = q_1q_2/(4\pi\varepsilon_0 r^2)$ |
| Field strength | $g = GM/r^2$ | $E = Q/(4\pi\varepsilon_0 r^2)$ |
| Potential | $V = -GM/r$ (always $\lt 0$) | $V = Q/(4\pi\varepsilon_0 r)$ (sign of $Q$) |
| Attractive/repulsive | Always attractive | Both possible |
| Screening | Impossible | Possible (Faraday cage) |
| Relative strength | $\sim 10^{-36}$ | $\sim 1$ |

Both fields obey inverse square force laws, possess $1/r$ potentials, and satisfy a Gauss's law. The
structural parallel is exact, differing only in the source property (mass vs. charge) and the
existence of negative charge enabling screening and repulsion.

## Problem Set

<details>
<summary>Problem 1</summary>
Calculate the gravitational field strength at the surface of Jupiter ($M = 1.90 \times 10^{27}$ kg,
$R = 6.99 \times 10^7$ m).

**Answer.** $g = \frac{GM}{R^2} = \frac{6.67 \times 10^{-11} \times 1.90 \times 10^{27}}{(6.99 \times 10^7)^2} = \frac{1.267 \times 10^{17}}{4.886 \times 10^{15}} = 25.9$ N kg$^{-1}$.

</details>

<details>
<summary>Problem 2</summary>
Two stars of mass $3.0 \times 10^{30}$ kg each orbit their common centre of mass with separation
$2.0 \times 10^{11}$ m. Find the orbital period.

**Answer.** Each star orbits at radius $r = 1.0 \times 10^{11}$ m.

$T^2 = \frac{4\pi^2 r^3}{G(2M)} = \frac{4\pi^2 \times 10^{33}}{6.67 \times 10^{-11} \times 6.0 \times 10^{30}} = \frac{3.95 \times 10^{34}}{4.00 \times 10^{20}} = 9.88 \times 10^{13}$

$T = 9.94 \times 10^6$ s $= 115$ days.

</details>

<details>
<summary>Problem 3</summary>
Show that for a satellite in circular orbit, the ratio of kinetic energy to the magnitude of
potential energy is exactly $1:2$.

**Answer.** $E_k = GMm/(2r)$, $|E_p| = GMm/r$. Therefore $E_k / |E_p| = 1/2$. This follows from the
virial theorem: $2E_k + E_p = 0$. $\square$

</details>

<details>
<summary>Problem 4</summary>
Prove that the gravitational field inside a uniform solid sphere of radius $R$ at distance $r$ from
the centre is $g = GMr/R^3$.

**Answer.** By the shell theorem, only the mass within radius $r$ contributes. For uniform density
$\rho = 3M/(4\pi R^3)$, the enclosed mass is $M_{\mathrm{enc}} = \rho \cdot 4\pi r^3/3 = Mr^3/R^3$.

$g = \frac{GM_{\mathrm{enc}}}{r^2} = \frac{GMr^3/R^3}{r^2} = \frac{GMr}{R^3}$.

$\square$

</details>

<details>
<summary>Problem 5</summary>
A comet approaches the Sun from very far away with speed $v_0 = 5.0$ km s$^{-1}$ and perihelion
distance $r_p = 1.0 \times 10^{10}$ m. Find its speed at perihelion.
($M_{\odot} = 1.99 \times 10^{30}$ kg.)

**Answer.** Energy conservation: $\frac{1}{2}mv_p^2 - \frac{GMm}{r_p} = \frac{1}{2}mv_0^2$.

$v_p = \sqrt{v_0^2 + 2GM/r_p} = \sqrt{2.5 \times 10^7 + 2.65 \times 10^{10}} = \sqrt{2.653 \times 10^{10}} = 1.63 \times 10^5$ m s$^{-1}$ $= 163$ km s$^{-1}$.

</details>

<details>
<summary>Problem 6</summary>
Calculate the gravitational potential energy of the Earth--Moon system. ($M_E = 5.97 \times 10^{24}$
kg, $M_M = 7.35 \times 10^{22}$ kg, $r = 3.84 \times 10^8$ m.)

**Answer.** $E_p = -\frac{GM_E M_M}{r} = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 7.35 \times 10^{22}}{3.84 \times 10^8} = -7.63 \times 10^{28}$ J.

</details>

<details>
<summary>Problem 7</summary>
Show that the work required to move a satellite from a circular orbit of radius $r$ to a circular
orbit of radius $2r$ is $GMm/(4r)$.

**Answer.** $E_1 = -GMm/(2r)$, $E_2 = -GMm/(4r)$. Work $= E_2 - E_1 = -GMm/(4r) + GMm/(2r) = GMm/(4r)$.
$\square$

</details>

<details>
<summary>Problem 8</summary>
Derive $v_e = \sqrt{2gR}$ for a planet of radius $R$ and surface field strength $g$.

**Answer.** $g = GM/R^2$, so $GM = gR^2$. $v_e = \sqrt{2GM/R} = \sqrt{2gR^2/R} = \sqrt{2gR}$. $\square$

</details>

<details>
<summary>Problem 9</summary>
A geostationary satellite has mass 1200 kg. Calculate (a) its total orbital energy, (b) the energy
needed to escape Earth's gravity from its orbit.

**Answer.** $r = 4.22 \times 10^7$ m. $GM = 3.98 \times 10^{14}$.

(a) $E = -GMm/(2r) = -3.98 \times 10^{14} \times 1200 / (2 \times 4.22 \times 10^7) = -5.66 \times 10^9$ J.

(b) To escape: $E_{\mathrm{final}} = 0$. Energy needed $= 0 - E = 5.66 \times 10^9$ J $= 5.66$ GJ.

</details>

<details>
<summary>Problem 10</summary>
Use the vis-viva equation to find the speed of a satellite at perigee ($r_p = 7.0 \times 10^6$ m) of an
elliptical orbit with apogee $r_a = 4.2 \times 10^7$ m.

**Answer.** Semi-major axis: $a = (r_p + r_a)/2 = (7.0 + 42.0) \times 10^6 / 2 = 2.45 \times 10^7$ m.

$v_p = \sqrt{GM(2/r_p - 1/a)} = \sqrt{3.98 \times 10^{14}(2.857 \times 10^{-7} - 4.082 \times 10^{-8})} = \sqrt{3.98 \times 10^{14} \times 2.449 \times 10^{-7}} = \sqrt{9.75 \times 10^7} = 9870$ m s$^{-1}$.

</details>
