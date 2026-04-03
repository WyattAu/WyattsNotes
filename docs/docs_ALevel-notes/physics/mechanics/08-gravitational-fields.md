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

:::info Board Coverage
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

**Proof from conservation of angular momentum.** $L = mrv_\perp = \text{const}$. When $r$ is small, $v_\perp$ must be large, and vice versa.

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

**Intuition.** The escape velocity is $\sqrt{2}$ times the circular orbital velocity at the same radius. This factor of $\sqrt{2}$ comes from the ratio of kinetic energies: escape requires $2 \times$ the orbital KE (since $v_e^2 = 2GM/r = 2v_{\text{orbit}}^2$).

## 7. Orbital Energy

For a satellite of mass $m$ in a circular orbit of radius $r$ around mass $M$:

**Kinetic energy:**

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\frac{GM}{r} = \frac{GMm}{2r}$$

**Potential energy:**

$$E_p = -\frac{GMm}{r}$$

**Total energy:**

$$\boxed{E_{\text{total}} = E_k + E_p = -\frac{GMm}{2r}}$$

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
<p>

Calculate the gravitational field strength at the surface of Mars, given its mass is $6.42 \times 10^{23}$ kg and its radius is $3.39 \times 10^6$ m.

**Answer.** $g = \frac{GM}{r^2} = \frac{6.67 \times 10^{-11} \times 6.42 \times 10^{23}}{(3.39 \times 10^6)^2} = \frac{4.28 \times 10^{13}}{1.149 \times 10^{13}} = 3.73$ N kg$^{-1}$.

<b>If you get this wrong, revise:</b> [Gravitational Field Strength](#2-gravitational-field-strength)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A satellite orbits Earth at an altitude of $400$ km. Calculate: (a) its orbital speed, (b) its period, (c) its centripetal acceleration.

**Answer.** $r = 6370 + 400 = 6770$ km $= 6.77 \times 10^6$ m. $GM = 3.976 \times 10^{14}$.

(a) $v = \sqrt{GM/r} = \sqrt{3.976 \times 10^{14}/6.77 \times 10^6} = \sqrt{5.87 \times 10^7} = 7660$ m s$^{-1}$.

(b) $T = 2\pi r/v = 2\pi \times 6.77 \times 10^6/7660 = 5550$ s $= 92.5$ min.

(c) $a = v^2/r = GM/r^2 = 3.976 \times 10^{14}/(6.77 \times 10^6)^2 = 8.67$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Kepler's Laws](#5-keplers-laws)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Calculate the escape velocity from the Moon, given $M_{\text{Moon}} = 7.35 \times 10^{22}$ kg and $R_{\text{Moon}} = 1.74 \times 10^6$ m.

**Answer.** $v_e = \sqrt{2GM/R} = \sqrt{2 \times 6.67 \times 10^{-11} \times 7.35 \times 10^{22}/1.74 \times 10^6} = \sqrt{5.64 \times 10^6} = 2370$ m s$^{-1} = 2.37$ km s$^{-1}$.

<b>If you get this wrong, revise:</b> [Escape Velocity](#6-escape-velocity)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

Two stars of mass $2.0 \times 10^{30}$ kg each are separated by $1.0 \times 10^{11}$ m. They orbit their common centre of mass. Find the orbital period.

**Answer.** Each star is at distance $r = 5.0 \times 10^{10}$ m from the centre. The gravitational force provides the centripetal force:

$\frac{Gm^2}{(2r)^2} = \frac{mv^2}{r}$. $\frac{Gm}{4r} = v^2$. $v = \sqrt{Gm/(4r)}$.

$T = 2\pi r/v = 2\pi r\sqrt{4r/(Gm)} = 4\pi\sqrt{r^3/(Gm)} = 4\pi\sqrt{(5 \times 10^{10})^3/(6.67 \times 10^{-11} \times 2 \times 10^{30})} = 4\pi\sqrt{1.25 \times 10^{33}/1.334 \times 10^{20}} = 4\pi\sqrt{9.37 \times 10^{12}} = 4\pi \times 3.06 \times 10^6 = 3.85 \times 10^7$ s $\approx 1.2$ years.

<b>If you get this wrong, revise:</b> [Derivation of Kepler's Third Law](#derivation-of-keplers-third-law-for-circular-orbits)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A satellite of mass $500$ kg is in a circular orbit of radius $7.0 \times 10^6$ m around Earth. Calculate: (a) its total energy, (b) the energy needed to move it to an orbit of radius $1.4 \times 10^7$ m.

**Answer.** (a) $E = -GMm/(2r) = -3.976 \times 10^{14} \times 500/(2 \times 7.0 \times 10^6) = -1.42 \times 10^{10}$ J $= -14.2$ GJ.

(b) New energy: $E' = -3.976 \times 10^{14} \times 500/(2 \times 1.4 \times 10^7) = -7.10 \times 10^9$ J $= -7.10$ GJ.

$\Delta E = E' - E = -7.10 - (-14.2) = 7.10$ GJ.

<b>If you get this wrong, revise:</b> [Orbital Energy](#7-orbital-energy)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Calculate the gravitational potential at a point $3.0 \times 10^7$ m from the centre of Earth ($M_E = 5.97 \times 10^{24}$ kg).

**Answer.** $V = -GM/r = -6.67 \times 10^{-11} \times 5.97 \times 10^{24}/3.0 \times 10^7 = -1.33 \times 10^7$ J kg$^{-1}$.

<b>If you get this wrong, revise:</b> [Gravitational Potential](#3-gravitational-potential)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Prove that the escape velocity from a planet of radius $R$ and surface gravitational field strength $g$ is $v_e = \sqrt{2gR}$.

**Answer.** $g = GM/R^2$, so $GM = gR^2$. $v_e = \sqrt{2GM/R} = \sqrt{2gR^2/R} = \sqrt{2gR}$. $\square$

<b>If you get this wrong, revise:</b> [Escape Velocity](#6-escape-velocity)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A geostationary satellite orbits above the equator with a period of 24 hours. Calculate its orbital radius.

**Answer.** $T = 86400$ s. $T^2 = \frac{4\pi^2}{GM}r^3$. $r^3 = \frac{GMT^2}{4\pi^2} = \frac{3.976 \times 10^{14} \times 7.46 \times 10^9}{39.48} = 7.52 \times 10^{22}$. $r = 4.22 \times 10^7$ m $= 42{,}200$ km.

<b>If you get this wrong, revise:</b> [Derivation of Kepler's Third Law](#derivation-of-keplers-third-law-for-circular-orbits)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

Show that the orbital speed of a satellite is independent of the satellite's mass.

**Answer.** $v = \sqrt{GM/r}$. The satellite's mass $m$ does not appear — it cancels in the derivation: $\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v^2 = GM/r$. The orbital speed depends only on the mass of the central body and the orbital radius. $\square$

<b>If you get this wrong, revise:</b> [Derivation of Kepler's Third Law](#derivation-of-keplers-third-law-for-circular-orbits)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

Explain why a satellite in a higher orbit moves more slowly than one in a lower orbit, even though the higher satellite has greater total energy.

**Answer.** From $v = \sqrt{GM/r}$: as $r$ increases, $v$ decreases — the satellite moves slower. However, the total energy $E = -GMm/(2r)$ is less negative (greater) at larger $r$. This is because the potential energy increases more than the kinetic energy decreases. The satellite has more total energy but is moving slower — the extra energy is in the form of gravitational potential energy.

<b>If you get this wrong, revise:</b> [Orbital Energy](#7-orbital-energy)

</p>
</details>
