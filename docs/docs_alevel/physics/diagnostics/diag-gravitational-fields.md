---
title: Gravitational Fields -- Diagnostic Tests
description: Diagnostic tests for gravitational field strength, potential, orbits, Kepler's laws, and satellite motion at maximum A-Level Physics difficulty.
slug: diag-gravitational-fields
hide_table_of_contents: true
---

# Gravitational Fields — Diagnostic Tests

## Unit Tests

### UT-1: Gravitational Field Strength Above and Below the Surface

**Question:**

The Earth may be modelled as a uniform sphere of mass $M_E = 5.97 \times 10^{24}\,\text{kg}$ and radius $R_E = 6.37 \times 10^6\,\text{m}$.

(a) Calculate the gravitational field strength at a height $h = 3R_E$ above the surface.

(b) Calculate the gravitational field strength at a depth $d = R_E/2$ below the surface (assuming uniform density).

(c) At what height above the surface is the gravitational field strength equal to the field strength at a depth $R_E/2$?

Take $G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$.

**Solution:**

(a) Distance from centre: $r = R_E + 3R_E = 4R_E$

$$g = \frac{GM_E}{r^2} = \frac{GM_E}{16R_E^2} = \frac{g_0}{16}$$

where $g_0 = GM_E/R_E^2 = 9.81\,\text{m}\,\text{s}^{-2}$.

$$g = \frac{9.81}{16} = 0.613\,\text{m}\,\text{s}^{-2}$$

(b) At depth $d = R_E/2$, the distance from the centre is $r = R_E/2$.

By the shell theorem, only the mass within radius $r$ contributes:

$$M_{\text{enclosed}} = M_E \left(\frac{r}{R_E}\right)^3 = M_E \left(\frac{1}{2}\right)^3 = \frac{M_E}{8}$$

$$g = \frac{G M_E/8}{(R_E/2)^2} = \frac{GM_E}{8} \times \frac{4}{R_E^2} = \frac{g_0}{2} = \frac{9.81}{2} = 4.91\,\text{m}\,\text{s}^{-2}$$

(c) We need $g$ at height $h$ to equal $g_0/2$:

$$\frac{GM_E}{(R_E + h)^2} = \frac{g_0}{2} = \frac{GM_E}{2R_E^2}$$

$$(R_E + h)^2 = 2R_E^2$$
$$R_E + h = \sqrt{2}R_E$$
$$h = (\sqrt{2} - 1)R_E = 0.414 \times 6.37 \times 10^6 = 2.64 \times 10^6\,\text{m}$$

---
### UT-2: Kepler's Third Law Application

**Question:**

Mars has two small moons, Phobos and Deimos. Phobos orbits Mars at a radius of $9.38 \times 10^6\,\text{m}$ with a period of $7.66$ hours. Deimos orbits at a radius of $2.35 \times 10^7\,\text{m}$.

(a) Use Kepler's third law to calculate the orbital period of Deimos.

(b) Calculate the mass of Mars.

(c) Calculate the orbital speed of Phobos and explain why Phobos is gradually spiralling inward towards Mars.

**Solution:**

(a) Kepler's third law: $T^2 \propto r^3$

$$\frac{T_D^2}{T_P^2} = \frac{r_D^3}{r_P^3}$$
$$T_D = T_P \left(\frac{r_D}{r_P}\right)^{3/2} = 7.66 \times \left(\frac{2.35 \times 10^7}{9.38 \times 10^6}\right)^{3/2}$$
$$= 7.66 \times (2.505)^{3/2} = 7.66 \times 3.965 = 30.4\,\text{hours}$$

The accepted value is approximately $30.3\,\text{hours}$, confirming the calculation.

(b) From Phobos:

$$T = \frac{2\pi r}{v} \text{ and } v = \sqrt{\frac{GM}{r}}$$
$$T = 2\pi\sqrt{\frac{r^3}{GM}}$$
$$M = \frac{4\pi^2 r^3}{GT^2}$$

$$T_P = 7.66 \times 3600 = 27576\,\text{s}$$

$$M = \frac{4\pi^2 (9.38 \times 10^6)^3}{6.67 \times 10^{-11} \times (27576)^2}$$
$$= \frac{4\pi^2 \times 8.258 \times 10^{20}}{6.67 \times 10^{-11} \times 7.604 \times 10^8}$$
$$= \frac{3.263 \times 10^{22}}{5.072 \times 10^{-2}} = 6.43 \times 10^{23}\,\text{kg}$$

The accepted value is $6.42 \times 10^{23}\,\text{kg}$.

(c) $v_P = \sqrt{GM/r_P} = \sqrt{6.67 \times 10^{-11} \times 6.43 \times 10^{23}/9.38 \times 10^6}$

$$= \sqrt{4.569 \times 10^6} = 2138\,\text{m}\,\text{s}^{-1}$$

Phobos orbits Mars faster than Mars rotates. The tidal interaction causes a transfer of angular momentum from Phobos to Mars's rotation, causing Phobos to lose orbital energy and spiral inward. Phobos completes an orbit in 7.66 hours while Mars rotates once in 24.6 hours, so Phobos is inside the synchronous orbit radius.

---
### UT-3: Gravitational Potential and Escape Velocity

**Question:**

(a) Calculate the gravitational potential at the surface of the Moon and at a point $3.0 \times 10^8\,\text{m}$ from the centre of the Moon, on the line joining the centres of the Earth and the Moon. State which potential is more negative and explain the significance.

(b) Calculate the escape velocity from the surface of the Moon.

(c) A spacecraft is at the point where the gravitational field strengths of the Earth and Moon are equal in magnitude but opposite in direction (the Lagrange point L1). Calculate the distance of this point from the centre of the Earth.

Take: $G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$, $M_E = 5.97 \times 10^{24}\,\text{kg}$, $M_M = 7.35 \times 10^{22}\,\text{kg}$, $R_M = 1.74 \times 10^6\,\text{m}$, Earth-Moon distance $= 3.84 \times 10^8\,\text{m}$.

**Solution:**

(a) Gravitational potential at the Moon's surface:

$$V_{\text{surface}} = -\frac{GM_M}{R_M} = -\frac{6.67 \times 10^{-11} \times 7.35 \times 10^{22}}{1.74 \times 10^6} = -\frac{4.902 \times 10^{12}}{1.74 \times 10^6} = -2.817 \times 10^6\,\text{J}\,\text{kg}^{-1}$$

At $r = 3.0 \times 10^8\,\text{m}$ from Moon's centre:

$$V_M = -\frac{GM_M}{r} = -\frac{4.902 \times 10^{12}}{3.0 \times 10^8} = -1.634 \times 10^4\,\text{J}\,\text{kg}^{-1}$$

Distance from Earth: $3.84 \times 10^8 - 3.0 \times 10^8 = 0.84 \times 10^8\,\text{m}$

$$V_E = -\frac{GM_E}{0.84 \times 10^8} = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{8.4 \times 10^7} = -\frac{3.982 \times 10^{14}}{8.4 \times 10^7} = -4.740 \times 10^6\,\text{J}\,\text{kg}^{-1}$$

Total potential: $V_{\text{total}} = V_M + V_E = -1.634 \times 10^4 - 4.740 \times 10^6 = -4.756 \times 10^6\,\text{J}\,\text{kg}^{-1}$

The total potential at the point near the Moon is more negative than the surface potential of the Moon alone. This means more energy is required to escape from this point to infinity than from the Moon's surface alone, because the Earth's gravitational well also contributes.

(b) $v_{\text{esc}} = \sqrt{\frac{2GM_M}{R_M}} = \sqrt{\frac{2 \times 4.902 \times 10^{12}}{1.74 \times 10^6}} = \sqrt{5.635 \times 10^6} = 2374\,\text{m}\,\text{s}^{-1}$

(c) At L1, the fields are equal in magnitude:

$$\frac{GM_E}{r^2} = \frac{GM_M}{(d - r)^2}$$

where $r$ is the distance from Earth and $d = 3.84 \times 10^8\,\text{m}$.

$$\frac{r^2}{(d-r)^2} = \frac{M_E}{M_M} = \frac{5.97 \times 10^{24}}{7.35 \times 10^{22}} = 81.22$$

$$\frac{r}{d-r} = \sqrt{81.22} = 9.012$$

$$r = 9.012(d - r) = 9.012d - 9.012r$$
$$10.012r = 9.012 \times 3.84 \times 10^8$$
$$r = \frac{34.61 \times 10^8}{10.012} = 3.457 \times 10^8\,\text{m}$$

The L1 point is approximately $3.46 \times 10^8\,\text{m}$ from the centre of the Earth, or about $3.84 \times 10^8 - 3.46 \times 10^8 = 3.8 \times 10^7\,\text{m}$ from the centre of the Moon.

## Integration Tests

### IT-1: Geostationary Orbit and Energy (with Electric Fields)

**Question:**

(a) Calculate the radius of a geostationary orbit around the Earth.

(b) Calculate the total energy of a $1000\,\text{kg}$ satellite in geostationary orbit.

(c) A second satellite of mass $500\,\text{kg}$ is in a circular orbit at half the geostationary radius. Calculate the ratio of their orbital speeds and the ratio of their total energies per unit mass.

Take $G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$, $M_E = 5.97 \times 10^{24}\,\text{kg}$, $R_E = 6.37 \times 10^6\,\text{m}$.

**Solution:**

(a) For geostationary orbit, the period equals the Earth's sidereal day: $T = 86164\,\text{s}$.

$$T = 2\pi\sqrt{\frac{r^3}{GM_E}}$$
$$r^3 = \frac{GMT^2}{4\pi^2} = \frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times (86164)^2}{4\pi^2}$$
$$= \frac{3.982 \times 10^{14} \times 7.424 \times 10^9}{39.478} = \frac{2.956 \times 10^{24}}{39.478} = 7.488 \times 10^{22}$$
$$r = \sqrt[3]{7.488 \times 10^{22}} = 4.216 \times 10^7\,\text{m}$$

(b) Total energy $E = -\frac{GMm}{2r}$:

$$E = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 1000}{2 \times 4.216 \times 10^7} = -\frac{3.982 \times 10^{17}}{8.432 \times 10^7} = -4.723 \times 10^9\,\text{J}$$

(c) For circular orbits: $v = \sqrt{GM/r}$, so $v \propto r^{-1/2}$.

Ratio of speeds: $\frac{v_{\text{inner}}}{v_{\text{geo}}} = \sqrt{\frac{r_{\text{geo}}}{r_{\text{inner}}}} = \sqrt{\frac{r}{r/2}} = \sqrt{2}$

Total energy per unit mass: $E/m = -\frac{GM}{2r}$, so $E/m \propto r^{-1}$.

Ratio: $\frac{E_{\text{inner}}/m_{\text{inner}}}{E_{\text{geo}}/m_{\text{geo}}} = \frac{r_{\text{geo}}}{r_{\text{inner}}} = \frac{r}{r/2} = 2$

The inner satellite has $\sqrt{2}$ times the speed and 2 times the energy per unit mass (more negative).

---
### IT-2: Binary Star System (with Circular Motion)

**Question:**

Two stars of mass $M_1 = 3.0 \times 10^{30}\,\text{kg}$ and $M_2 = 1.0 \times 10^{30}\,\text{kg}$ orbit their common centre of mass in circular orbits. Their separation is $d = 2.0 \times 10^{11}\,\text{m}$.

(a) Calculate the position of the centre of mass relative to $M_1$.

(b) Calculate the orbital period of the system.

(c) Calculate the speeds of each star.

Take $G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$.

**Solution:**

(a) Centre of mass from $M_1$:

$$r_1 = \frac{M_2 d}{M_1 + M_2} = \frac{1.0 \times 10^{30} \times 2.0 \times 10^{11}}{4.0 \times 10^{30}} = 5.0 \times 10^{10}\,\text{m}$$

So $M_1$ orbits at radius $r_1 = 5.0 \times 10^{10}\,\text{m}$ and $M_2$ at $r_2 = 1.5 \times 10^{11}\,\text{m}$.

(b) The gravitational force provides the centripetal force for each star:

$$\frac{GM_1 M_2}{d^2} = M_1 \omega^2 r_1 = M_2 \omega^2 r_2$$

Using $M_1 \omega^2 r_1$:

$$\frac{G M_2}{d^2} = \omega^2 r_1$$
$$\omega^2 = \frac{GM_2}{d^2 r_1} = \frac{6.67 \times 10^{-11} \times 1.0 \times 10^{30}}{(2.0 \times 10^{11})^2 \times 5.0 \times 10^{10}}$$
$$= \frac{6.67 \times 10^{19}}{2.0 \times 10^{33}} = 3.335 \times 10^{-14}$$
$$\omega = 1.826 \times 10^{-7}\,\text{rad}\,\text{s}^{-1}$$
$$T = \frac{2\pi}{\omega} = \frac{2\pi}{1.826 \times 10^{-7}} = 3.441 \times 10^7\,\text{s} = 398\,\text{days}$$

Alternatively, using the general formula: $T^2 = \frac{4\pi^2 d^3}{G(M_1 + M_2)}$

$$T^2 = \frac{4\pi^2 (2.0 \times 10^{11})^3}{6.67 \times 10^{-11} \times 4.0 \times 10^{30}} = \frac{4\pi^2 \times 8.0 \times 10^{33}}{2.668 \times 10^{20}} = \frac{3.158 \times 10^{35}}{2.668 \times 10^{20}} = 1.184 \times 10^{15}$$
$$T = 1.088 \times 10^7\,\text{s}$$

Wait, let me recheck. $T^2 = 4\pi^2 \times 8 \times 10^{33} / (6.67 \times 10^{-11} \times 4 \times 10^{30}) = 4\pi^2 \times 8 \times 10^{33} / (2.668 \times 10^{20}) = 315.8 \times 10^{13} / 2.668 \times 10^{20}$. Let me redo:

Numerator: $4\pi^2 \times (2 \times 10^{11})^3 = 4\pi^2 \times 8 \times 10^{33} = 3.158 \times 10^{35}$

Denominator: $6.67 \times 10^{-11} \times 4 \times 10^{30} = 2.668 \times 10^{20}$

$T^2 = 3.158 \times 10^{35} / 2.668 \times 10^{20} = 1.184 \times 10^{15}$

$T = \sqrt{1.184 \times 10^{15}} = 3.441 \times 10^7\,\text{s} = 398\,\text{days}$

(c) $v_1 = \omega r_1 = 1.826 \times 10^{-7} \times 5.0 \times 10^{10} = 9130\,\text{m}\,\text{s}^{-1}$

$v_2 = \omega r_2 = 1.826 \times 10^{-7} \times 1.5 \times 10^{11} = 27390\,\text{m}\,\text{s}^{-1}$

Check: $M_1 v_1 = M_2 v_2$ (centre of mass frame): $3 \times 10^{30} \times 9130 = 2.739 \times 10^{34}$ and $1 \times 10^{30} \times 27390 = 2.739 \times 10^{34}$. Consistent.

---
### IT-3: Gravitational Slingshot (with Kinematics)

**Question:**

A spacecraft approaches Jupiter (mass $1.90 \times 10^{27}\,\text{kg}$, radius $6.99 \times 10^7\,\text{m}$) with speed $8.0 \times 10^3\,\text{m}\,\text{s}^{-1}$ relative to Jupiter. The closest approach distance is $3.0 \times 10^8\,\text{m}$ from Jupiter's centre. Jupiter orbits the Sun at speed $1.31 \times 10^4\,\text{m}\,\text{s}^{-1}$.

(a) Calculate the speed of the spacecraft at closest approach to Jupiter, relative to Jupiter.

(b) Assuming an elastic gravitational interaction (the spacecraft's speed relative to Jupiter is unchanged but its direction reverses), calculate the maximum speed the spacecraft can gain relative to the Sun.

(c) Explain why the spacecraft can gain kinetic energy without violating conservation of energy.

Take $G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$.

**Solution:**

(a) Using conservation of energy relative to Jupiter:

$$\frac{1}{2}v_{\infty}^2 = \frac{1}{2}v_{\min}^2 - \frac{GM_J}{r_{\min}}$$

where $v_{\infty} = 8.0 \times 10^3\,\text{m}\,\text{s}^{-1}$ is the speed far from Jupiter.

$$\frac{1}{2}(8.0 \times 10^3)^2 = \frac{1}{2}v_{\min}^2 - \frac{6.67 \times 10^{-11} \times 1.90 \times 10^{27}}{3.0 \times 10^8}$$
$$3.2 \times 10^7 = \frac{1}{2}v_{\min}^2 - 4.223 \times 10^8$$
$$\frac{1}{2}v_{\min}^2 = 4.543 \times 10^8$$
$$v_{\min} = \sqrt{9.086 \times 10^8} = 3.014 \times 10^4\,\text{m}\,\text{s}^{-1}$$

(b) In the best-case slingshot, the spacecraft's velocity relative to Jupiter is reversed. If the spacecraft approaches Jupiter from behind (in the direction of Jupiter's orbital motion), the velocity vectors add:

Maximum speed relative to Sun $= v_{\text{Jupiter}} + v_{\infty} = 1.31 \times 10^4 + 8.0 \times 10^3 = 2.11 \times 10^4\,\text{m}\,\text{s}^{-1}$

The spacecraft gains $\Delta v = 2v_{\infty} = 1.6 \times 10^4\,\text{m}\,\text{s}^{-1}$ in the Sun's frame.

(c) The spacecraft gains kinetic energy in the Sun's frame because it transfers kinetic energy from Jupiter's orbital motion. Jupiter's orbit slows imperceptibly (by an amount proportional to the ratio of the spacecraft's mass to Jupiter's mass). The total energy of the spacecraft-Jupiter system is conserved. The slingshot works because the gravitational interaction is elastic (no energy dissipation), and the reference frame transformation (from Jupiter's to the Sun's frame) allows the spacecraft to extract energy from Jupiter's orbital motion.
