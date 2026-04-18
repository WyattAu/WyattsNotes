---
title: Gravitational Fields
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: gravitational-fields
---

## Gravitational Fields

:::info
Board Coverage
AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

## 1. Newton's Law of Gravitation

**Newton's Law of Universal Gravitation.** Every particle in the universe attracts every other particle with a force that is:

1. Directly proportional to the product of their masses
2. Inversely proportional to the square of the distance between them

$$\boxed{F = \frac{Gm_1 m_2}{r^2}}$$

where $G = 6.67 \times 10^{-11}$ N m$^2$ kg$^{-2}$ is the **gravitational constant**.

**Intuition.** The inverse square law arises from the geometry of three-dimensional space. The gravitational "flux" spreads over a sphere of area $4\pi r^2$, so the field strength decreases as $1/r^2$. This is the same geometric reason that the intensity of light decreases as $1/r^2$.

## 2. Gravitational Field Strength

**Definition.** The **gravitational field strength** $g$ at a point is the force per unit mass experienced by a small test mass placed at that point:

$$\boxed{g = \frac{F}{m}}$$

**Units.** N kg$^{-1}$, which is equivalent to m s$^{-2}$.

For a point mass (or spherical body):

$$\boxed{g = \frac{GM}{r^2}}$$

**Proof.** From $F = \frac{GMm}{r^2}$, dividing by $m$: $g = F/m = GM/r^2$. $\square$

**Properties:**

- $g$ is a vector quantity, directed towards the mass creating the field.
- Near Earth's surface, $g \approx 9.81$ N kg$^{-1}$ (constant, since $r \approx R_E$).
- Inside a uniform spherical shell, $g = 0$ (shell theorem).

## 3. Gravitational Potential

**Definition.** The **gravitational potential** $V$ at a point is the work done per unit mass in bringing a small test mass from infinity to that point:

$$\boxed{V = -\frac{GM}{r}}$$

**Units.** J kg$^{-1}$.

### Derivation from Work Done

The work done to move a mass $m$ from infinity to distance $r$ from mass $M$:

$$W = \int_{\infty}^{r} F\,dr' = \int_{\infty}^{r} \frac{GMm}{r'^2}\,dr' = GMm\left[-\frac{1}{r'}\right]_{\infty}^{r} = -\frac{GMm}{r}$$

The potential (work per unit mass) is:

$$V = \frac{W}{m} = -\frac{GM}{r} \quad \square$$

**Intuition: Why is gravitational potential negative?** We define $V = 0$ at infinity. To bring a mass from infinity towards $M$, gravity does positive work (the mass accelerates), meaning the system _loses_ potential energy. Alternatively, an external agent would need to do _negative_ work (i.e., the system does work) to move the mass in. Hence $V < 0$ everywhere. The potential becomes more negative as you approach the mass.

### Proof that $g = -\frac{dV}{dr}$

$$-\frac{dV}{dr} = -\frac{d}{dr}\left(-\frac{GM}{r}\right) = -\left(\frac{GM}{r^2}\right) \cdot (-1) = \frac{GM}{r^2} = g \quad \square$$

The negative sign ensures that the field points in the direction of **decreasing** potential (towards the mass).

## 4. Gravitational Potential Energy

For two masses $M$ and $m$ separated by distance $r$:

$$\boxed{E_p = -\frac{GMm}{r}}$$

This is the energy required to separate the masses to infinity (or equivalently, the energy released when bringing them together from infinity).

**Connection to $E_p = mgh$ near the surface.** For height $h \ll R_E$:

$$\Delta E_p = -\frac{GMm}{R_E + h} - \left(-\frac{GMm}{R_E}\right) = GMm\left(\frac{1}{R_E} - \frac{1}{R_E + h}\right) = \frac{GMmh}{R_E(R_E + h)} \approx \frac{GMmh}{R_E^2} = mgh$$

since $g = GM/R_E^2$. This shows that $E_p = mgh$ is the small-height approximation of the full gravitational potential energy.

## 5. Kepler's Laws

### First Law: Law of Orbits

Every planet moves in an elliptical orbit with the Sun at one focus.

### Second Law: Law of Areas

A line joining a planet to the Sun sweeps out equal areas in equal times. This means the planet moves faster when closer to the Sun (near perihelion) and slower when farther (near aphelion).

**Proof from conservation of angular momentum.** $L = mrv_\perp = \mathrm{const}$. When $r$ is small, $v_\perp$ must be large, and vice versa.

### Third Law: Law of Periods

The square of the orbital period is proportional to the cube of the semi-major axis:

$$\boxed{T^2 \propto a^3}$$

### Derivation of Kepler's Third Law (for circular orbits)

For a circular orbit of radius $r$, the centripetal force is provided by gravity:

$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v^2 = \frac{GM}{r}$$

The period is $T = \frac{2\pi r}{v}$, so $v = \frac{2\pi r}{T}$:

$$\frac{4\pi^2 r^2}{T^2} = \frac{GM}{r}$$

$$\boxed{T^2 = \frac{4\pi^2}{GM}r^3}$$

Since $\frac{4\pi^2}{GM}$ is constant for a given central body, $T^2 \propto r^3$. $\square$

## 6. Escape Velocity

**Definition.** The **escape velocity** $v_e$ is the minimum speed needed for an object to escape a gravitational field (i.e., reach infinity with zero speed).

**Derivation from energy conservation.** At launch, the object has kinetic energy $\frac{1}{2}mv_e^2$ and potential energy $-\frac{GMm}{r}$. At infinity, both KE and PE are zero. By conservation of energy:

$$\frac{1}{2}mv_e^2 - \frac{GMm}{r} = 0$$

$$\boxed{v_e = \sqrt{\frac{2GM}{r}}}$$

For Earth: $v_e = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.37 \times 10^6}} = \sqrt{1.25 \times 10^8} \approx 11.2$ km s$^{-1}$.

**Intuition.** The escape velocity is $\sqrt{2}$ times the circular orbital velocity at the same radius. This factor of $\sqrt{2}$ comes from the ratio of kinetic energies: escape requires $2 \times$ the orbital KE (since $v_e^2 = 2GM/r = 2v_{\mathrm{orbit}}^2$).

## 7. Orbital Energy

For a satellite of mass $m$ in a circular orbit of radius $r$ around mass $M$:

**Kinetic energy:**

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\frac{GM}{r} = \frac{GMm}{2r}$$

**Potential energy:**

$$E_p = -\frac{GMm}{r}$$

**Total energy:**

$$\boxed{E_{\mathrm{total}} = E_k + E_p = -\frac{GMm}{2r}}$$

**Intuition.** The total energy is negative — the satellite is bound. To move to a higher orbit, energy must be added. The total energy is exactly half the potential energy (and the negative of the kinetic energy).

## 8. Comparison of Gravitational and Electric Fields

| Property            | Gravitational     | Electric                             |
| ------------------- | ----------------- | ------------------------------------ |
| Force law           | $F = Gm_1m_2/r^2$ | $F = Q_1Q_2/(4\pi\varepsilon_0 r^2)$ |
| Field strength      | $g = GM/r^2$      | $E = Q/(4\pi\varepsilon_0 r^2)$      |
| Potential           | $V = -GM/r$       | $V = Q/(4\pi\varepsilon_0 r)$        |
| Always attractive?  | Yes               | No (depends on charge signs)         |
| Shielding possible? | No                | Yes                                  |

## Problem Set

<details>
<summary>Problem 1</summary>
Calculate the gravitational field strength at the surface of Mars, given its mass is $6.42 \times 10^{23}$ kg and its radius is $3.39 \times 10^6$ m.

**Answer.** $g = \frac{GM}{r^2} = \frac{6.67 \times 10^{-11} \times 6.42 \times 10^{23}}{(3.39 \times 10^6)^2} = \frac{4.28 \times 10^{13}}{1.149 \times 10^{13}} = 3.73$ N kg$^{-1}$.

<b>If you get this wrong, revise:</b> [Gravitational Field Strength](#2-gravitational-field-strength)
</details>

<details>
<summary>Problem 2</summary>
A satellite orbits Earth at an altitude of $400$ km. Calculate: (a) its orbital speed, (b) its period, (c) its centripetal acceleration.

**Answer.** $r = 6370 + 400 = 6770$ km $= 6.77 \times 10^6$ m. $GM = 3.976 \times 10^{14}$.

(a) $v = \sqrt{GM/r} = \sqrt{3.976 \times 10^{14}/6.77 \times 10^6} = \sqrt{5.87 \times 10^7} = 7660$ m s$^{-1}$.

(b) $T = 2\pi r/v = 2\pi \times 6.77 \times 10^6/7660 = 5550$ s $= 92.5$ min.

(c) $a = v^2/r = GM/r^2 = 3.976 \times 10^{14}/(6.77 \times 10^6)^2 = 8.67$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Kepler's Laws](#5-keplers-laws)
</details>

<details>
<summary>Problem 3</summary>
Calculate the escape velocity from the Moon, given $M_{\mathrm{Moon}} = 7.35 \times 10^{22}$ kg and $R_{\mathrm{Moon}} = 1.74 \times 10^6$ m.

**Answer.** $v_e = \sqrt{2GM/R} = \sqrt{2 \times 6.67 \times 10^{-11} \times 7.35 \times 10^{22}/1.74 \times 10^6} = \sqrt{5.64 \times 10^6} = 2370$ m s$^{-1} = 2.37$ km s$^{-1}$.

<b>If you get this wrong, revise:</b> [Escape Velocity](#6-escape-velocity)
</details>

<details>
<summary>Problem 4</summary>
Two stars of mass $2.0 \times 10^{30}$ kg each are separated by $1.0 \times 10^{11}$ m. They orbit their common centre of mass. Find the orbital period.

**Answer.** Each star is at distance $r = 5.0 \times 10^{10}$ m from the centre. The gravitational force provides the centripetal force:

$\frac{Gm^2}{(2r)^2} = \frac{mv^2}{r}$. $\frac{Gm}{4r} = v^2$. $v = \sqrt{Gm/(4r)}$.

$T = 2\pi r/v = 2\pi r\sqrt{4r/(Gm)} = 4\pi\sqrt{r^3/(Gm)} = 4\pi\sqrt{(5 \times 10^{10})^3/(6.67 \times 10^{-11} \times 2 \times 10^{30})} = 4\pi\sqrt{1.25 \times 10^{33}/1.334 \times 10^{20}} = 4\pi\sqrt{9.37 \times 10^{12}} = 4\pi \times 3.06 \times 10^6 = 3.85 \times 10^7$ s $\approx 1.2$ years.

<b>If you get this wrong, revise:</b> [Derivation of Kepler's Third Law](#derivation-of-keplers-third-law-for-circular-orbits)
</details>

<details>
<summary>Problem 5</summary>
A satellite of mass $500$ kg is in a circular orbit of radius $7.0 \times 10^6$ m around Earth. Calculate: (a) its total energy, (b) the energy needed to move it to an orbit of radius $1.4 \times 10^7$ m.

**Answer.** (a) $E = -GMm/(2r) = -3.976 \times 10^{14} \times 500/(2 \times 7.0 \times 10^6) = -1.42 \times 10^{10}$ J $= -14.2$ GJ.

(b) New energy: $E' = -3.976 \times 10^{14} \times 500/(2 \times 1.4 \times 10^7) = -7.10 \times 10^9$ J $= -7.10$ GJ.

$\Delta E = E' - E = -7.10 - (-14.2) = 7.10$ GJ.

<b>If you get this wrong, revise:</b> [Orbital Energy](#7-orbital-energy)
</details>

<details>
<summary>Problem 6</summary>
Calculate the gravitational potential at a point $3.0 \times 10^7$ m from the centre of Earth ($M_E = 5.97 \times 10^{24}$ kg).

**Answer.** $V = -GM/r = -6.67 \times 10^{-11} \times 5.97 \times 10^{24}/3.0 \times 10^7 = -1.33 \times 10^7$ J kg$^{-1}$.

<b>If you get this wrong, revise:</b> [Gravitational Potential](#3-gravitational-potential)
</details>

<details>
<summary>Problem 7</summary>
Prove that the escape velocity from a planet of radius $R$ and surface gravitational field strength $g$ is $v_e = \sqrt{2gR}$.

**Answer.** $g = GM/R^2$, so $GM = gR^2$. $v_e = \sqrt{2GM/R} = \sqrt{2gR^2/R} = \sqrt{2gR}$. $\square$

<b>If you get this wrong, revise:</b> [Escape Velocity](#6-escape-velocity)
</details>

<details>
<summary>Problem 8</summary>
A geostationary satellite orbits above the equator with a period of 24 hours. Calculate its orbital radius.

**Answer.** $T = 86400$ s. $T^2 = \frac{4\pi^2}{GM}r^3$. $r^3 = \frac{GMT^2}{4\pi^2} = \frac{3.976 \times 10^{14} \times 7.46 \times 10^9}{39.48} = 7.52 \times 10^{22}$. $r = 4.22 \times 10^7$ m $= 42{,}200$ km.

<b>If you get this wrong, revise:</b> [Derivation of Kepler's Third Law](#derivation-of-keplers-third-law-for-circular-orbits)
</details>

<details>
<summary>Problem 9</summary>
Show that the orbital speed of a satellite is independent of the satellite's mass.

**Answer.** $v = \sqrt{GM/r}$. The satellite's mass $m$ does not appear — it cancels in the derivation: $\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v^2 = GM/r$. The orbital speed depends only on the mass of the central body and the orbital radius. $\square$

<b>If you get this wrong, revise:</b> [Derivation of Kepler's Third Law](#derivation-of-keplers-third-law-for-circular-orbits)
</details>

<details>
<summary>Problem 10</summary>
Explain why a satellite in a higher orbit moves more slowly than one in a lower orbit, even though the higher satellite has greater total energy.

**Answer.** From $v = \sqrt{GM/r}$: as $r$ increases, $v$ decreases — the satellite moves slower. However, the total energy $E = -GMm/(2r)$ is less negative (greater) at larger $r$. This is because the potential energy increases more than the kinetic energy decreases. The satellite has more total energy but is moving slower — the extra energy is in the form of gravitational potential energy.

<b>If you get this wrong, revise:</b> [Orbital Energy](#7-orbital-energy)
</details>

## 9. Variation of $g$ with Altitude

The gravitational field strength decreases with distance from the centre of a planet:

$$g(r) = \frac{GM}{r^2}$$

### Field Strength at Height $h$ Above the Surface

At a height $h$ above the surface of a planet of radius $R$:

$$\boxed{g_h = \frac{GM}{(R + h)^2} = g_0 \left(\frac{R}{R + h}\right)^2}$$

where $g_0 = GM/R^2$ is the field strength at the surface.

### Approximate Decrease for Small Altitudes

For $h \ll R$, using the binomial approximation $(1 + h/R)^{-2} \approx 1 - 2h/R$:

$$g_h \approx g_0\left(1 - \frac{2h}{R}\right)$$

The fractional decrease is approximately $2h/R$.

### Numerical Examples for Earth

$R_E = 6370$ km, $g_0 = 9.81$ N kg$^{-1}$.

At $h = 100$ km: $g_{100} = 9.81 \times (6370/6470)^2 = 9.81 \times 0.9693 = 9.51$ N kg$^{-1}$. This is a decrease of 0.30 N kg$^{-1}$, or approximately **3.1%**.

At $h = 300$ km (typical low Earth orbit): $g_{300} = 9.81 \times (6370/6670)^2 = 9.81 \times 0.9120 = 8.95$ N kg$^{-1}$, a decrease of about 8.8%.

At $h = 35786$ km (geostationary orbit): $g_{\mathrm{GEO}} = 9.81 \times (6370/42156)^2 = 9.81 \times 0.0228 = 0.224$ N kg$^{-1}$, only about 2.3% of the surface value.

### Field Strength Inside the Earth

For a uniform sphere of radius $R$ and mass $M$, the field strength at distance $r$ from the centre ($r \lt R$) is:

$$g(r) = \frac{GM_{\mathrm{enc}}}{r^2} = \frac{G(Mr^3/R^3)}{r^2} = \frac{GM}{R^3}\,r = g_0 \frac{r}{R}$$

where $M_{\mathrm{enc}} = M(r/R)^3$ is the mass enclosed within radius $r$ (shell theorem).

This shows $g$ increases linearly from $0$ at the centre to $g_0$ at the surface. Maximum $g$ occurs at the surface (for a uniform sphere).

:::warning
Common Pitfall
Satellites in low Earth orbit are NOT in "zero gravity." The gravitational field strength at 300 km altitude is still about 89% of its surface value. Astronauts experience weightlessness because they are in free fall, not because gravity is absent.
:::

## 10. Geostationary Orbits

**Definition.** A **geostationary orbit** is a circular orbit in the equatorial plane with a period equal to one sidereal day (approximately 24 hours). A satellite in this orbit appears stationary relative to a point on Earth's surface.

### Derivation of the Orbital Radius

The centripetal acceleration of the satellite is provided by gravity:

$$\frac{GMm}{r^2} = m\omega^2 r$$

where $\omega = 2\pi/T$ and $T = 24 \times 3600 = 86400$ s.

$$\frac{GM}{r^2} = \omega^2 r \implies r^3 = \frac{GM}{\omega^2}$$

$$\boxed{r = \sqrt[3]{\frac{GM}{\omega^2}}}$$

Substituting $GM = 3.976 \times 10^{14}$ N m$^2$ kg$^{-1}$ and $\omega = 2\pi/86400 = 7.272 \times 10^{-5}$ rad s$^{-1}$:

$$r^3 = \frac{3.976 \times 10^{14}}{(7.272 \times 10^{-5})^2} = \frac{3.976 \times 10^{14}}{5.288 \times 10^{-9}} = 7.52 \times 10^{22}$$

$$r = \sqrt[3]{7.52 \times 10^{22}} = 4.22 \times 10^7 \mathrm{ m} = 42{,}200 \mathrm{ km}$$

The altitude above Earth's surface is $h = r - R_E = 42200 - 6370 = 35{,}830$ km.

### Orbital Speed

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{3.976 \times 10^{14}}{4.22 \times 10^7}} = \sqrt{9.42 \times 10^6} = 3070 \mathrm{ m s}^{-1}$$

**Verification:** $v = \omega r = (7.272 \times 10^{-5})(4.22 \times 10^7) = 3070$ m s$^{-1}$. $\checkmark$

### Conditions for a Geostationary Orbit

Three conditions must all be satisfied:

1. **Correct radius:** $r \approx 42{,}200$ km (derived above).
2. **Equatorial plane:** The orbit must lie in Earth's equatorial plane; otherwise, the satellite would appear to drift north and south.
3. **Same direction as Earth's rotation:** The satellite must orbit from west to east.

**Applications.** Communications satellites (constant line of sight to a ground station), weather satellites (continuous monitoring of a hemisphere). GPS satellites are NOT geostationary — they use medium Earth orbits for better geometric accuracy.

:::warning
Common Pitfall
A geostationary orbit is NOT the same as a geosynchronous orbit. A geosynchronous orbit has period 24 hours but can be inclined or elliptical, so the satellite appears to trace a figure-eight in the sky. Geostationary implies geosynchronous AND equatorial AND circular.
:::

## 11. Gravitational Potential Energy — Taylor Expansion

### The General Form

The gravitational potential energy of two masses $M$ and $m$ separated by distance $r$ is:

$$\boxed{E_p = -\frac{GMm}{r}}$$

This is negative because the zero of potential energy is defined at infinity ($r \to \infty$). Work must be done against gravity to separate the masses, increasing $E_p$ towards zero.

### Recovering $mgh$ via Taylor Expansion

For a mass at height $h$ above Earth's surface ($r = R_E + h$):

$$E_p(R_E + h) = -\frac{GMm}{R_E + h} = -\frac{GMm}{R_E}\left(1 + \frac{h}{R_E}\right)^{-1}$$

For $h \ll R_E$, expand using the binomial series $(1 + x)^{-1} \approx 1 - x + x^2 - \cdots$ with $x = h/R_E$:

$$E_p(R_E + h) \approx -\frac{GMm}{R_E}\left(1 - \frac{h}{R_E} + \frac{h^2}{R_E^2} - \cdots\right)$$

The change in potential energy from the surface to height $h$:

$$\Delta E_p = E_p(R_E + h) - E_p(R_E) = -\frac{GMm}{R_E}\left(1 - \frac{h}{R_E}\right) - \left(-\frac{GMm}{R_E}\right)$$

$$\Delta E_p = \frac{GMmh}{R_E^2} = mgh$$

since $g = GM/R_E^2$.

$$\boxed{\Delta E_p = mgh \quad \mathrm{(valid for } h \ll R_E\mathrm{)}}$$

**Proof that this is the first-order approximation.** The Taylor expansion gives $\Delta E_p = mgh(1 - h/R_E + h^2/R_E^2 - \cdots)$. The leading term is $mgh$, and the correction is of relative order $h/R_E$. For $h = 1$ km, $h/R_E \approx 1.6 \times 10^{-4}$, so the error is about 0.016%. $\square$

### Negative Total Energy Means a Bound System

For a satellite in orbit, $E_{\mathrm{total}} = -GMm/(2r) \lt 0$. Negative total energy means the system is gravitationally **bound** — the satellite cannot escape without an input of energy. To escape, enough energy must be added to raise $E_{\mathrm{total}}$ to zero.

:::tip
Exam Technique
When asked why $E_p = -GMm/r$ is negative, explain: we define $V = 0$ at infinity, so bringing masses together releases energy (the system loses potential energy). The negative sign reflects this. The formula $E_p = mgh$ is only a special case for small heights near the surface.
:::

## 12. Escape Velocity — Extended Discussion

### Derivation from Energy Conservation

At the surface of a planet (radius $r$), an object of mass $m$ has:

- Kinetic energy: $\frac{1}{2}mv^2$
- Gravitational potential energy: $-\frac{GMm}{r}$

To just reach infinity with zero speed (the minimum condition for escape):

$$\frac{1}{2}mv_{\mathrm{esc}}^2 - \frac{GMm}{r} = 0$$

$$\boxed{v_{\mathrm{esc}} = \sqrt{\frac{2GM}{r}}}$$

### Numerical Values

| Body | $v_{\mathrm{esc}}$ (km s$^{-1}$) |
|---|---|
| Earth | 11.2 |
| Moon | 2.4 |
| Mars | 5.0 |
| Jupiter | 59.5 |

### Relationship to Orbital Speed

The circular orbital speed at radius $r$ is $v_{\mathrm{orbit}} = \sqrt{GM/r}$. Comparing:

$$v_{\mathrm{esc}} = \sqrt{2} \, v_{\mathrm{orbit}}$$

The escape velocity is $\sqrt{2} \approx 1.41$ times the circular orbital speed at the same radius. This factor of $\sqrt{2}$ arises because escaping requires exactly twice the kinetic energy of a circular orbit: $\frac{1}{2}mv_{\mathrm{esc}}^2 = 2 \times \frac{1}{2}mv_{\mathrm{orbit}}^2$.

### Implications

An object in a circular orbit needs a speed increase of $(\sqrt{2} - 1) \times 100\% \approx 41\%$ to escape. This is why spacecraft use gravitational slingshots or multi-stage rockets rather than a single impulse to escape Earth's gravity efficiently.

:::info
Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

<details>
<summary>Problem 11</summary>
Calculate the gravitational field strength at an altitude of 500 km above Earth's surface. What percentage decrease is this compared to the surface value? ($R_E = 6370$ km, $M_E = 5.97 \times 10^{24}$ kg).

**Answer.** $r = 6370 + 500 = 6870$ km $= 6.87 \times 10^6$ m. $g = GM/r^2 = 6.67 \times 10^{-11} \times 5.97 \times 10^{24}/(6.87 \times 10^6)^2 = 3.98 \times 10^{14}/4.72 \times 10^{13} = 8.43$ N kg$^{-1}$.

Percentage decrease: $(9.81 - 8.43)/9.81 \times 100 = 14.1\%$.

Using the approximation: $\Delta g/g_0 \approx 2h/R_E = 2 \times 500/6370 = 0.157 = 15.7\%$. The approximation overestimates slightly because $h/R_E$ is not very small.

<b>If you get this wrong, revise:</b> [Variation of $g$ with Altitude](#9-variation-of-g-with-altitude)
</details>

<details>
<summary>Problem 12</summary>
Show that the orbital radius of a geostationary satellite is approximately 42,000 km. Calculate its orbital speed and verify using $v = \omega r$.

**Answer.** $\omega = 2\pi/(24 \times 3600) = 7.272 \times 10^{-5}$ rad s$^{-1}$. $r^3 = GM/\omega^2 = 3.976 \times 10^{14}/(7.272 \times 10^{-5})^2 = 7.52 \times 10^{22}$. $r = 4.22 \times 10^7$ m $= 42{,}200$ km.

$v = \sqrt{GM/r} = \sqrt{3.976 \times 10^{14}/4.22 \times 10^7} = 3070$ m s$^{-1}$.

Verification: $v = \omega r = (7.272 \times 10^{-5})(4.22 \times 10^7) = 3070$ m s$^{-1}$. $\checkmark$

<b>If you get this wrong, revise:</b> [Geostationary Orbits](#10-geostationary-orbits)
</details>

<details>
<summary>Problem 13</summary>
Use the Taylor expansion to show that $E_p = -GMm/(R+h)$ reduces to $mgh$ for $h \ll R$, and find the percentage error when $h = 10$ km for Earth.

**Answer.** $E_p(R + h) = -\frac{GMm}{R}(1 + h/R)^{-1} \approx -\frac{GMm}{R}(1 - h/R)$. $\Delta E_p = GMmh/R^2 = mgh$. $\square$

Error term: $\delta = h/R = 10000/6.37 \times 10^6 = 1.57 \times 10^{-3} = 0.157\%$. So $mgh$ is accurate to about 0.16% at 10 km altitude.

<b>If you get this wrong, revise:</b> [Gravitational Potential Energy — Taylor Expansion](#11-gravitational-potential-energy--taylor-expansion)
</details>

<details>
<summary>Problem 14</summary>
A spacecraft is in a circular orbit of radius $r$ around Earth. What speed increase is needed for it to escape? Express your answer as a fraction of its current orbital speed.

**Answer.** Current speed: $v_{\mathrm{orbit}} = \sqrt{GM/r}$. Escape speed: $v_{\mathrm{esc}} = \sqrt{2GM/r} = \sqrt{2}\,v_{\mathrm{orbit}}$.

Required speed increase: $\Delta v = v_{\mathrm{esc}} - v_{\mathrm{orbit}} = (\sqrt{2} - 1)v_{\mathrm{orbit}} \approx 0.414\,v_{\mathrm{orbit}}$.

The spacecraft needs a speed increase of approximately **41.4%** of its orbital speed.

<b>If you get this wrong, revise:</b> [Escape Velocity — Extended Discussion](#12-escape-velocity--extended-discussion)
</details>

<details>
<summary>Problem 15</summary>
A satellite of mass 800 kg is moved from a circular orbit of radius $7.0 \times 10^6$ m to a circular orbit of radius $1.05 \times 10^7$ m. Calculate: (a) the total energy in each orbit, (b) the energy that must be added, (c) the escape velocity from the lower orbit.

**Answer.** $GM = 3.976 \times 10^{14}$ N m$^2$ kg$^{-1}$.

(a) $E_1 = -GMm/(2r_1) = -3.976 \times 10^{14} \times 800/(2 \times 7.0 \times 10^6) = -2.27 \times 10^{10}$ J.

$E_2 = -3.976 \times 10^{14} \times 800/(2 \times 1.05 \times 10^7) = -1.52 \times 10^{10}$ J.

(b) $\Delta E = E_2 - E_1 = -1.52 \times 10^{10} - (-2.27 \times 10^{10}) = 7.5 \times 10^9$ J $= 7.5$ GJ.

(c) $v_{\mathrm{esc}} = \sqrt{2GM/r_1} = \sqrt{2 \times 3.976 \times 10^{14}/7.0 \times 10^6} = \sqrt{1.136 \times 10^8} = 10660$ m s$^{-1} = 10.7$ km s$^{-1}$.

<b>If you get this wrong, revise:</b> [Escape Velocity — Extended Discussion](#12-escape-velocity--extended-discussion) and [Orbital Energy](#7-orbital-energy)
</details>
