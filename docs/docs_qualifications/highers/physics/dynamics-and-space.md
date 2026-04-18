---
title: Dynamics and Space
date: 2026-04-14
tags:
  - Physics
  - Highers
categories:
  - Physics
slug: dynamics-and-space
---

# Dynamics and Space

## Higher Dynamics

### Motion in a Straight Line

Displacement, velocity, and acceleration are related through the kinematic equations (covered in
[Mechanics](mechanics.md)).

### Graphical Analysis

**Displacement-Time Graph:**

- Gradient = velocity
- Curved line = changing velocity (acceleration)

**Velocity-Time Graph:**

- Gradient = acceleration
- Area under the graph = displacement

**Example:** A car accelerates from rest at $2 \mathrm{ m/s}^2$ for $5 \mathrm{ s}$, then travels at
constant speed for $10 \mathrm{ s}$, then decelerates at $3 \mathrm{ m/s}^2$ to rest. Find the total
distance.

Phase 1: $s_1 = \frac{1}{2}(0 + 10)(5) = 25 \mathrm{ m}$

Phase 2: $s_2 = 10 \times 10 = 100 \mathrm{ m}$

Phase 3: $t_3 = \dfrac{0 - 10}{-3} = \dfrac{10}{3} \mathrm{ s}$,
$s_3 = \frac{1}{2}(10 + 0)\left(\frac{10}{3}\right) = \frac{50}{3} \approx 16.67 \mathrm{ m}$

Total: $25 + 100 + 16.67 = 141.67 \mathrm{ m}$

### Extracting Information from Graphs

The gradient of a tangent to a curved displacement-time graph gives the instantaneous velocity at
that point. The area under a velocity-time graph (even a curved one) gives the total displacement.
For non-constant acceleration, count squares or use integration.

## Circular Motion

For an object moving in a circle of radius $r$ at speed $v$:

**Angular velocity:** $\omega = \dfrac{v}{r} = \dfrac{2\pi}{T} = 2\pi f$

**Centripetal acceleration:** $a = \dfrac{v^2}{r} = \omega^2 r$

**Centripetal force:** $F = \dfrac{mv^2}{r} = m\omega^2 r$

This force always acts towards the centre of the circle.

### Why the Centripetal Force Points Inward

Newton's first law says an object continues in a straight line unless acted upon by a force. In
circular motion, the object is continuously deflected from its straight-line path toward the centre.
The force causing this deflection is the centripetal force. It is not a separate interaction; it is
the _name_ for whatever force or combination of forces provides the net inward force (gravity for
orbits, friction for a car on a roundabout, tension for a ball on a string).

### Why Objects Released from Circular Motion Move Tangentially

When the centripetal force is removed (the string breaks, friction is insufficient), the object
continues in a straight line tangent to the circle at the point of release. This is Newton's first
law: with no net force, the object continues with constant velocity. The velocity at the moment of
release is tangential to the circle, so the object follows a tangent.

**Example:** A car of mass $1200 \mathrm{ kg}$ travels around a roundabout of radius $25 \mathrm{ m}$ at
$12 \mathrm{ m/s}$. Find the centripetal force.

$$F = \frac{mv^2}{r} = \frac{1200 \times 144}{25} = \frac{172800}{25} = 6912 \mathrm{ N}$$

This force is provided by friction between the tyres and the road.

### Vertical Circular Motion

At the top of a vertical circle, both weight and tension (or normal force) point toward the centre:

$$F_c = mg + T = \frac{mv^2}{r}$$

At the bottom, tension points toward the centre but weight points away:

$$F_c = T - mg = \frac{mv^2}{r}$$

The minimum speed at the top to maintain contact (when $T = 0$):

$$v_{\min} = \sqrt{gr}$$

### Orbital Motion and Satellites

**Example:** A satellite orbits Earth at an altitude of $400 \mathrm{ km}$ in a circular orbit. Given
Earth's mass $M = 5.97 \times 10^{24} \mathrm{ kg}$ and radius $R = 6.37 \times 10^6 \mathrm{ m}$, find
the orbital speed and period.

$$r = R + h = 6.37 \times 10^6 + 4 \times 10^5 = 6.77 \times 10^6 \mathrm{ m}$$

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.77 \times 10^6}}$$

$$v = \sqrt{\frac{3.983 \times 10^{14}}{6.77 \times 10^6}} = \sqrt{5.883 \times 10^7} \approx 7670 \mathrm{ m/s}$$

$$T = \frac{2\pi r}{v} = \frac{2\pi \times 6.77 \times 10^6}{7670} \approx 5544 \mathrm{ s} \approx 92.4 \mathrm{ min}$$

## Gravitational Fields

**Newton's Law of Gravitation:**

$$F = \frac{Gm_1 m_2}{r^2}$$

where $G = 6.67 \times 10^{-11} \mathrm{ N m}^2 \mathrm{kg}^{-2}$.

### Why Gravity Is an Inverse-Square Law

Consider a point mass emitting gravitational field lines uniformly in all directions. The number of
field lines crossing a sphere of radius $r$ is constant (the same lines cross every sphere centered
on the mass). The flux density (field lines per unit area) is proportional to $1/r^2$, since the
surface area of the sphere is $4\pi r^2$. Therefore, the gravitational field strength is
proportional to $1/r^2$.

**Gravitational Field Strength:**

$$g = \frac{F}{m} = \frac{GM}{r^2}$$

At Earth's surface: $g \approx 9.8 \mathrm{ N/kg}$.

**Gravitational Potential Energy:**

$$E_p = -\frac{GMm}{r}$$

This is zero at infinity and negative for finite distances. The negative sign means energy must be
supplied to move masses apart.

### Why Gravitational PE Is Negative

The convention $U = 0$ at $r = \infty$ is natural because the gravitational force decreases to zero
at infinity. As two masses are brought together from infinity, gravity does positive work and the
potential energy decreases below zero. A bound orbit (like a planet around a star) has negative
total energy.

**Escape Velocity:**

$$v_{\mathrm{esc}} = \sqrt{\frac{2GM}{r}}$$

**Example:** Calculate the escape velocity from Earth's surface.

$$v_{\mathrm{esc}} = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.37 \times 10^6}} = \sqrt{\frac{7.966 \times 10^{14}}{6.37 \times 10^6}} = \sqrt{1.251 \times 10^8} \approx 11180 \mathrm{ m/s} \approx 11.2 \mathrm{ km/s}$$

---

## Higher Astrophysics

### Stellar Evolution

Stars are born from clouds of gas and dust (nebulae) that collapse under gravity.

**Main Sequence:** A star is in equilibrium when the outward radiation pressure balances
gravitational collapse. Hydrogen fuses to form helium in the core.

$$4^1_1\mathrm{H} \to ^4_2\mathrm{He} + 2^0_{+1}\mathrm{e} + 2\nu_e + \mathrm{energy}$$

**Evolution depends on mass:**

- **Low-mass stars** (like the Sun): Main sequence $\to$ Red giant $\to$ Planetary nebula $\to$
  White dwarf
- **High-mass stars** ($> 8$ solar masses): Main sequence $\to$ Red supergiant $\to$ Supernova $\to$
  Neutron star or Black hole

### Why Massive Stars Have Shorter Lives

A more massive star has a higher core temperature and pressure, so it burns its fuel much faster.
Although it has more fuel, the rate of consumption increases more than proportionally with mass. A
star of 10 solar masses may live only 20 million years, compared to 10 billion years for the Sun.
The luminosity of a main-sequence star scales roughly as $L \propto M^{3.5}$, while the available
fuel scales as $M$, so the lifetime scales as $M^{-2.5}$.

### The Hertzsprung-Russell Diagram

The HR diagram plots luminosity (or absolute magnitude) against temperature (or spectral class).

- **Main sequence:** Diagonal band from top-left (hot, bright) to bottom-right (cool, dim)
- **Red giants:** Top-right (cool but bright, large radius)
- **White dwarfs:** Bottom-left (hot but dim, small radius)

### Wien's Law and Stefan-Boltzmann Law

**Wien's Displacement Law:**

$$\lambda_{\mathrm{max}} T = 2.898 \times 10^{-3} \mathrm{ m K}$$

**Example:** A star has surface temperature $5800 \mathrm{ K}$. Find the peak wavelength of its
radiation.

$$\lambda_{\mathrm{max}} = \frac{2.898 \times 10^{-3}}{5800} = 5.0 \times 10^{-7} \mathrm{ m} = 500 \mathrm{ nm}$$

This is in the visible spectrum (green-yellow).

**Stefan-Boltzmann Law:**

$$L = 4\pi r^2 \sigma T^4$$

where $\sigma = 5.67 \times 10^{-8} \mathrm{ W m}^{-2} \mathrm{K}^{-4}$.

### Universal Gravitation and Orbits

**Kepler's Third Law:**

$$T^2 \propto r^3$$

$$T^2 = \frac{4\pi^2}{GM}r^3$$

**Example:** A planet orbits a star of mass $2 \times 10^{30} \mathrm{ kg}$ at a distance of
$1.5 \times 10^{11} \mathrm{ m}$. Find the orbital period.

$$T = 2\pi\sqrt{\frac{r^3}{GM}} = 2\pi\sqrt{\frac{(1.5 \times 10^{11})^3}{6.67 \times 10^{-11} \times 2 \times 10^{30}}}$$

$$= 2\pi\sqrt{\frac{3.375 \times 10^{33}}{1.334 \times 10^{20}}} = 2\pi\sqrt{2.530 \times 10^{13}}$$

$$= 2\pi \times 5.030 \times 10^6 \approx 3.16 \times 10^7 \mathrm{ s} \approx 365.7 \mathrm{ days}$$

### Cosmology

**Hubble's Law:**

$$v = H_0 d$$

where $H_0 \approx 70 \mathrm{ km s}^{-1} \mathrm{Mpc}^{-1}$ is the Hubble constant, $v$ is the
recession velocity, and $d$ is the distance.

**Redshift:** As the universe expands, light from distant galaxies is shifted to longer wavelengths.

$$z = \frac{\Delta\lambda}{\lambda} = \frac{v}{c} \quad (\mathrm{for } v \ll c)$$

**Age of the Universe:**

$$t \approx \frac{1}{H_0} \approx 14 \mathrm{ billion years}$$

**Big Bang Theory:**

- The universe began from a singularity approximately 13.8 billion years ago
- Evidence: cosmic microwave background radiation, Hubble's law, abundance of light elements
- The universe has been expanding and cooling ever since

---

## Common Pitfalls

1. **Centripetal force is not a separate force:** It is the resultant force directed towards the
   centre (e.g., tension, friction, gravity).

2. **Gravitational force vs. gravitational field strength:** $F = \dfrac{GMm}{r^2}$ (force on mass
   $m$) vs. $g = \dfrac{GM}{r^2}$ (field strength, force per unit mass).

3. **Sign of gravitational PE:** Gravitational PE is negative ($E_p = -\dfrac{GMm}{r}$) because work
   must be done to move objects apart.

4. **Hubble's law units:** Ensure consistent units when using $v = H_0 d$.

5. **Stellar evolution paths:** Low-mass and high-mass stars follow different evolutionary paths
   after the main sequence.

---

## Practice Questions

1. A $1500 \mathrm{ kg}$ car travels around a bend of radius $50 \mathrm{ m}$ at $15 \mathrm{ m/s}$. Find
   the centripetal force and the minimum coefficient of friction needed.

2. Find the gravitational field strength at a height of $300 \mathrm{ km}$ above Earth's surface.

3. A star has peak wavelength $350 \mathrm{ nm}$. Find its surface temperature and state what colour
   it appears.

4. Calculate the escape velocity from Mars (mass $6.39 \times 10^{23} \mathrm{ kg}$, radius
   $3.39 \times 10^6 \mathrm{ m}$).

5. A galaxy is observed to have a redshift $z = 0.02$. Find its recession velocity and approximate
   distance.

6. Explain why a white dwarf is hot but has low luminosity.

7. A satellite orbits at a height of $500 \mathrm{ km}$ above Earth. Find its orbital speed and
   period.

8. Compare and contrast the evolution of a star of 1 solar mass with a star of 15 solar masses.

9. A ball of mass $0.5 \mathrm{ kg}$ is attached to a string of length $1.0 \mathrm{ m}$ and swung in a
   vertical circle. Find the minimum speed at the top of the circle, and the tension in the string
   at the bottom if the speed is $6 \mathrm{ m/s}$ there.

10. A geostationary satellite orbits at a height of $35,786 \mathrm{ km}$ above Earth's equator.
    Calculate its orbital speed and period, and explain why it remains above the same point on
    Earth's surface.

## 11. Worked Example: Non-Uniform Circular Motion

A ball of mass $0.5 \mathrm{ kg}$ on a string of length $1.0 \mathrm{ m}$ is swung in a vertical circle.
Its speed at the bottom is $8 \mathrm{ m/s}$. Find the tension in the string at the bottom and the
minimum speed at the top.

**At the bottom:** The tension and weight act in opposite directions radially.

$$T - mg = \frac{mv^2}{r}$$

$$T = mg + \frac{mv^2}{r} = 0.5 \times 9.8 + \frac{0.5 \times 64}{1.0} = 4.9 + 32 = 36.9 \mathrm{ N}$$

**At the top:** Energy conservation from bottom to top (height difference $= 2r = 2 \mathrm{ m}$):

$$\frac{1}{2}mv_b^2 = \frac{1}{2}mv_t^2 + mg(2r)$$

$$v_t^2 = v_b^2 - 4gr = 64 - 4 \times 9.8 \times 1.0 = 64 - 39.2 = 24.8$$

$$v_t = 4.98 \mathrm{ m/s}$$

**Minimum speed at the top:** Set $T = 0$ at the top:

$$\frac{mv_{\min}^2}{r} = mg \implies v_{\min} = \sqrt{gr} = \sqrt{9.8} = 3.13 \mathrm{ m/s}$$

Since $v_t = 4.98 \mathrm{ m/s} \gt 3.13 \mathrm{ m/s} = v_{\min}$, the string remains taut at the top.

## 12. Gravitational Fields: Extended Analysis

### Worked Example: Gravitational Field Strength at Altitude

Calculate $g$ at an altitude of $300 \mathrm{ km}$ above Earth's surface.

$$r = R_E + h = 6.37 \times 10^6 + 3 \times 10^5 = 6.67 \times 10^6 \mathrm{ m}$$

$$g = \frac{GM}{r^2} = \frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{(6.67 \times 10^6)^2} = \frac{3.983 \times 10^{14}}{4.449 \times 10^{13}} = 8.95 \mathrm{ N/kg}$$

This is about 91% of the surface value of $9.8 \mathrm{ N/kg}$. The International Space Station, at
about 400 km altitude, experiences $g \approx 8.7 \mathrm{ N/kg}$ -- astronauts are not truly
weightless because there is no gravity at that altitude; they are weightless because they are in
free fall.

### Gravitational Potential Energy: Worked Example

A $1000 \mathrm{ kg}$ satellite is moved from an orbit of radius $7000 \mathrm{ km}$ to an orbit of
radius $42000 \mathrm{ km}$ (geostationary). Calculate the energy required.

$$\Delta E = E_{p,f} - E_{p,i} = -\frac{GMm}{r_f} - \left(-\frac{GMm}{r_i}\right) = GMm\left(\frac{1}{r_i} - \frac{1}{r_f}\right)$$

$$= 6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 1000 \times \left(\frac{1}{7 \times 10^6} - \frac{1}{4.2 \times 10^7}\right)$$

$$= 3.983 \times 10^{17} \times (1.429 \times 10^{-7} - 2.381 \times 10^{-8})$$

$$= 3.983 \times 10^{17} \times 1.191 \times 10^{-7} = 4.74 \times 10^{10} \mathrm{ J} = 47.4 \mathrm{ GJ}$$

This enormous energy requirement explains why launching satellites is so expensive and why ion
thrusters (which provide continuous low thrust) are preferred for orbit adjustments.

## 13. Stellar Evolution: Extended Analysis

### Worked Example: Wien's Law and Stefan-Boltzmann Law

A star has a radius of $5 \times 10^9 \mathrm{ m}$ (about 7 times the Sun's radius) and surface
temperature $4000 \mathrm{ K}$.

**Peak wavelength:**

$$\lambda_{\max} = \frac{2.898 \times 10^{-3}}{4000} = 7.25 \times 10^{-7} \mathrm{ m} = 725 \mathrm{ nm}$$

This is in the red/infrared part of the spectrum. The star would appear reddish.

**Luminosity:**

$$L = 4\pi r^2 \sigma T^4 = 4\pi(5 \times 10^9)^2 \times 5.67 \times 10^{-8} \times (4000)^4$$

$$= 4\pi \times 2.5 \times 10^{19} \times 5.67 \times 10^{-8} \times 2.56 \times 10^{14}$$

$$= 4\pi \times 2.5 \times 10^{19} \times 1.452 \times 10^{7} = 4\pi \times 3.63 \times 10^{26} = 4.56 \times 10^{27} \mathrm{ W}$$

This is about 12 times the Sun's luminosity ($3.85 \times 10^{26} \mathrm{ W}$), consistent with a red
giant star.

### The Main Sequence: Mass-Luminosity Relation

For main-sequence stars:

$$L \propto M^{3.5}$$

A star twice as massive as the Sun is $2^{3.5} \approx 11.3$ times as luminous. Since the available
fuel is proportional to $M$ but the consumption rate is proportional to $L \propto M^{3.5}$, the
lifetime is:

$$\mathrm{lifetime} \propto \frac{M}{L} \propto \frac{M}{M^{3.5}} = M^{-2.5}$$

A star of 10 solar masses lives $10^{-2.5} \approx 0.00316$ times as long as the Sun, or about 32
million years (compared to 10 billion years for the Sun). This is why massive stars are rare: they
burn through their fuel very quickly.

## 14. Cosmology: Extended Analysis

### Worked Example: Hubble's Law and Redshift

A galaxy has a redshift $z = 0.05$. Find its recession velocity and distance.

For $z \lt 0.1$:
$v \approx cz = 3 \times 10^8 \times 0.05 = 1.5 \times 10^7 \mathrm{ m/s} = 15000 \mathrm{ km/s}$

$$d = \frac{v}{H_0} = \frac{15000 \mathrm{ km/s}}{70 \mathrm{ km/s/Mpc}} = 214 \mathrm{ Mpc}$$

This galaxy is about 214 megaparsecs away, or roughly 700 million light-years.

### The Cosmic Microwave Background

The cosmic microwave background (CMB) radiation was discovered by Penzias and Wilson in 1965. It is
thermal radiation with a black-body temperature of $2.725 \mathrm{ K}$, peaking in the microwave
region. The CMB is the afterglow of the Big Bang: after the universe became transparent about
380,000 years after the Big Bang, the thermal radiation from the hot, dense early universe has been
redshifted by the expansion of space to microwave wavelengths.

## 15. Summary Table: Key Formulas

| Topic                    | Formula                                  | Variables               | Notes                |
| ------------------------ | ---------------------------------------- | ----------------------- | -------------------- |
| Centripetal acceleration | $a_c = v^2/r = \omega^2 r$               | $v$, $r$, $\omega$      | Always toward centre |
| Centripetal force        | $F_c = mv^2/r$                           | $m$, $v$, $r$           | Net inward force     |
| Universal gravitation    | $F = GMm/r^2$                            | $G$, $M$, $m$, $r$      | Inverse-square law   |
| Gravitational field      | $g = GM/r^2$                             | $G$, $M$, $r$           | Force per unit mass  |
| Gravitational PE         | $E_p = -GMm/r$                           | $G$, $M$, $m$, $r$      | Zero at infinity     |
| Orbital speed            | $v = \sqrt{GM/r}$                        | $G$, $M$, $r$           | Circular orbit       |
| Kepler's third law       | $T^2 = 4\pi^2 r^3 / (GM)$                | $T$, $r$, $G$, $M$      | $T^2 \propto r^3$    |
| Escape velocity          | $v_e = \sqrt{2GM/r}$                     | $G$, $M$, $r$           | Independent of mass  |
| Wien's law               | $\lambda_{\max}T = 2.898 \times 10^{-3}$ | $\lambda_{\max}$, $T$   | Peak wavelength      |
| Stefan-Boltzmann         | $L = 4\pi r^2\sigma T^4$                 | $L$, $r$, $\sigma$, $T$ | Total power output   |
| Hubble's law             | $v = H_0 d$                              | $v$, $H_0$, $d$         | Recession velocity   |

## 16. Practice Questions (Additional)

11. A $2000 \mathrm{ kg}$ satellite in circular orbit at $500 \mathrm{ km}$ altitude needs to move to a
    higher orbit at $1000 \mathrm{ km}$ altitude. Calculate the energy required using the
    gravitational potential energy formula.

12. A star has apparent brightness $B$ and is at distance $d$. If the same star were moved to
    distance $3d$, by what factor would its apparent brightness change?

13. Calculate the escape velocity from the surface of the Sun. (Mass of Sun
    $= 1.989 \times 10^{30} \mathrm{ kg}$, radius of Sun $= 6.96 \times 10^8 \mathrm{ m}$.)

14. A ball of mass $0.3 \mathrm{ kg}$ on a string of length $0.9 \mathrm{ m}$ is swung in a vertical
    circle with speed $7 \mathrm{ m/s}$ at the bottom. Calculate the tension at the bottom and the
    speed at the top. Does the string go slack?

15. Explain why a white dwarf is hot but has low luminosity, while a red giant is cool but has high
    luminosity. Reference the Stefan-Boltzmann law in your answer.

16. A galaxy at a distance of $100 \mathrm{ Mpc}$ has a recession velocity of $7000 \mathrm{ km/s}$.
    Calculate the value of the Hubble constant from this single data point.

17. Calculate the gravitational field strength at the surface of Mars and compare it to Earth's
    surface gravity. (Mars mass $= 6.39 \times 10^{23} \mathrm{ kg}$, Mars radius
    $= 3.39 \times 10^6 \mathrm{ m}$.)

18. Two stars in a binary system orbit their common centre of mass. Star A has mass
    $2 \times 10^{30} \mathrm{ kg}$ and Star B has mass $1 \times 10^{30} \mathrm{ kg}$. They are
    separated by $1.5 \times 10^{11} \mathrm{ m}$. Calculate the orbital period of the system.

19. Explain the evidence for the Big Bang theory, including the cosmic microwave background
    radiation and Hubble's law.

20. A geostationary satellite must have an orbital period of 24 hours. Calculate the required
    orbital radius and verify that it is approximately $42200 \mathrm{ km}$ from Earth's centre.

## Extended Worked Examples

### Example 21: Orbital Transfer (Hohmann Transfer)

A spacecraft of mass $1000 \mathrm{ kg}$ is in a circular low Earth orbit of radius
$r_1 = 6.67 \times 10^6 \mathrm{ m}$. It needs to transfer to a circular orbit of radius
$r_2 = 6.67 \times 10^7 \mathrm{ m}$. Calculate the total delta-v required.

**Step 1: Speed in initial circular orbit**

$$v_1 = \sqrt{\frac{GM}{r_1}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.67 \times 10^6}} = \sqrt{5.97 \times 10^7} \approx 7730 \mathrm{ m/s}$$

**Step 2: Speed at perigee of transfer ellipse**

The transfer ellipse has semi-major axis
$a = \frac{r_1 + r_2}{2} = \frac{6.67 \times 10^6 + 6.67 \times 10^7}{2} = 3.669 \times 10^7 \mathrm{ m}$.

Using the vis-viva equation at perigee ($r = r_1$):

$$v_p = \sqrt{GM \left( \frac{2}{r_1} - \frac{1}{a} \right)} = \sqrt{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times \left( \frac{2}{6.67 \times 10^6} - \frac{1}{3.669 \times 10^7} \right)}$$

$$v_p = \sqrt{3.98 \times 10^{14} \times (2.998 \times 10^{-7} - 2.726 \times 10^{-8})} = \sqrt{3.98 \times 10^{14} \times 2.726 \times 10^{-7}} \approx 10420 \mathrm{ m/s}$$

**Step 3: Speed at apogee of transfer ellipse**

$$v_a = \sqrt{GM \left( \frac{2}{r_2} - \frac{1}{a} \right)} = \sqrt{3.98 \times 10^{14} \times \left( \frac{2}{6.67 \times 10^7} - \frac{1}{3.669 \times 10^7} \right)}$$

$$v_a = \sqrt{3.98 \times 10^{14} \times (2.998 \times 10^{-8} - 2.726 \times 10^{-8})} = \sqrt{3.98 \times 10^{14} \times 2.726 \times 10^{-9}} \approx 1042 \mathrm{ m/s}$$

**Step 4: Speed in final circular orbit**

$$v_2 = \sqrt{\frac{GM}{r_2}} = \sqrt{\frac{3.98 \times 10^{14}}{6.67 \times 10^7}} = \sqrt{5.97 \times 10^6} \approx 2443 \mathrm{ m/s}$$

**Step 5: Total delta-v**

$$\Delta v_1 = v_p - v_1 = 10420 - 7730 = 2690 \mathrm{ m/s}$$

$$\Delta v_2 = v_2 - v_a = 2443 - 1042 = 1401 \mathrm{ m/s}$$

$$\Delta v_{\mathrm{total}} = 2690 + 1401 = 4091 \mathrm{ m/s} \approx 4.1 \mathrm{ km/s}$$

:::info
Hohmann transfers are the most fuel-efficient two-impulse transfer between coplanar circular
orbits. In practice, mission designers often use three-impulse bi-elliptic transfers when the ratio
$r_2/r_1$ is very large (greater than about 11.94).
:::

### Example 22: Stellar Parallax and Distance

A star is observed to have an annual parallax of $0.077 \mathrm{ arcseconds}$. Calculate the distance
to the star in parsecs and light-years.

**Step 1: Use the parallax formula**

$$d = \frac{1}{p} \mathrm{ parsecs}$$

where $p$ is the parallax angle in arcseconds.

$$d = \frac{1}{0.077} = 12.99 \mathrm{ pc} \approx 13.0 \mathrm{ pc}$$

**Step 2: Convert to light-years**

$$1 \mathrm{ pc} = 3.26 \mathrm{ ly}$$

$$d = 12.99 \times 3.26 = 42.3 \mathrm{ ly}$$

**Step 3: Convert to metres**

$$1 \mathrm{ pc} = 3.086 \times 10^{16} \mathrm{ m}$$

$$d = 12.99 \times 3.086 \times 10^{16} = 4.01 \times 10^{17} \mathrm{ m}$$

:::warning
The Gaia space telescope can measure parallaxes down to about $10 \mathrm{ }\mu\mathrm{as}$
(microarcseconds), corresponding to distances of about $100 \mathrm{ kpc}$. Ground-based observations
are limited to parallaxes above about $0.01 \mathrm{ arcseconds}$.
:::

### Example 23: Gravitational Potential Energy in Orbit Changes

A satellite of mass $500 \mathrm{ kg}$ moves from a circular orbit of radius
$r_1 = 7.0 \times 10^6 \mathrm{ m}$ to a circular orbit of radius $r_2 = 7.5 \times 10^6 \mathrm{ m}$.
Calculate the energy that must be supplied by the rocket engines.

**Step 1: Total energy in each orbit**

$$E = -\frac{GMm}{2r}$$

$$E_1 = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 500}{2 \times 7.0 \times 10^6} = -\frac{1.99 \times 10^{17}}{1.4 \times 10^7} = -1.421 \times 10^{10} \mathrm{ J}$$

$$E_2 = -\frac{1.99 \times 10^{17}}{1.5 \times 10^7} = -1.327 \times 10^{10} \mathrm{ J}$$

**Step 2: Energy change**

$$\Delta E = E_2 - E_1 = -1.327 \times 10^{10} - (-1.421 \times 10^{10}) = 9.4 \times 10^8 \mathrm{ J}$$

The total energy becomes less negative (increases), so energy must be supplied:
$\Delta E = 9.4 \times 10^8 \mathrm{ J}$.

:::info
Counter-intuitively, when a satellite fires its engines forward to speed up, it moves to a
higher orbit where it actually travels _slower_. The kinetic energy decreases, but the gravitational
potential energy increases by more than the kinetic energy decreases.
:::

## Common Pitfalls Extended

### Pitfall 6: Confusing Gravitational Force with Gravitational Field Strength

Gravitational force $F = \frac{GMm}{r^2}$ acts on a specific mass $m$. Gravitational field strength
$g = \frac{GM}{r^2}$ is the force _per unit mass_ and does not depend on the test mass. They have
the same numerical value at the same location only when the test mass is $1 \mathrm{ kg}$.

### Pitfall 7: Using the Wrong Radius in Orbital Calculations

The radius $r$ in orbital formulas is the distance from the _centre_ of the planet, not the altitude
above the surface. Always add the planet's radius to the altitude:

$$r = R_{\mathrm{planet}} + h$$

### Pitfall 8: Assuming Kepler's Third Law Applies in All Situations

Kepler's third law $T^2 \propto r^3$ applies specifically to objects orbiting the _same_ central
body. For two different central bodies (e.g., a satellite around Earth vs around Mars), the constant
of proportionality changes:

$$T^2 = \frac{4\pi^2}{GM} r^3$$

## Additional Practice Problems

21. A probe is launched from Earth's surface with escape velocity. Calculate the speed of the probe
    when it is at a distance of $3R_E$ from Earth's centre.

22. Two galaxies are observed to be moving apart at $1200 \mathrm{ km/s}$. Using Hubble's constant
    $H_0 = 70 \mathrm{ km/s/Mpc}$, calculate the distance to these galaxies in Mpc and in light-years.

23. A $2000 \mathrm{ kg}$ spacecraft in circular orbit at $300 \mathrm{ km}$ altitude fires
    retro-rockets to deorbit. Calculate the orbital speed before and after a delta-v of
    $-100 \mathrm{ m/s}$, and explain qualitatively what happens to the orbit.

24. The Sun has an apparent brightness of $1.37 \times 10^3 \mathrm{ W/m}^2$ at Earth. Calculate the
    luminosity of the Sun and its absolute magnitude (reference: $M_{\mathrm{ref}} = 4.83$).

25. Explain how astronomers distinguish between redshift due to the Doppler effect (peculiar
    velocity) and cosmological redshift due to the expansion of space.

## Further Worked Examples

### Example 26: Binary Star System

Two stars in a binary system orbit their common centre of mass with a period of $5.0 \mathrm{ years}$.
The semi-major axes of their orbits are $1.5 \times 10^{11} \mathrm{ m}$ and
$4.5 \times 10^{11} \mathrm{ m}$. Calculate the masses of both stars.

**Step 1: Use Kepler's third law for binary systems**

$$T^2 = \frac{4\pi^2 a^3}{G(m_1 + m_2)}$$

where $a = a_1 + a_2 = 1.5 \times 10^{11} + 4.5 \times 10^{11} = 6.0 \times 10^{11} \mathrm{ m}$.

$$T = 5.0 \mathrm{ years} = 5.0 \times 3.156 \times 10^7 = 1.578 \times 10^8 \mathrm{ s}$$

**Step 2: Solve for $m_1 + m_2$**

$$m_1 + m_2 = \frac{4\pi^2 a^3}{GT^2} = \frac{4\pi^2 \times (6.0 \times 10^{11})^3}{6.67 \times 10^{-11} \times (1.578 \times 10^8)^2}$$

$$= \frac{4 \times 9.8696 \times 2.16 \times 10^{34}}{6.67 \times 10^{-11} \times 2.490 \times 10^{16}} = \frac{8.527 \times 10^{35}}{1.661 \times 10^6} = 5.13 \times 10^{29} \mathrm{ kg}$$

**Step 3: Find individual masses (centre of mass)**

$$m_1 a_1 = m_2 a_2$$

$$\frac{m_1}{m_2} = \frac{a_2}{a_1} = \frac{4.5 \times 10^{11}}{1.5 \times 10^{11}} = 3$$

So $m_1 = 3m_2$.

$$3m_2 + m_2 = 5.13 \times 10^{29} \implies m_2 = 1.28 \times 10^{29} \mathrm{ kg}$$

$$m_1 = 3.85 \times 10^{29} \mathrm{ kg}$$

### Example 27: Apparent Magnitude and Distance

A star has an apparent magnitude of $6.0$ and an absolute magnitude of $2.0$. Calculate the distance
to the star in parsecs and light-years.

**Step 1: Use the distance modulus**

$$m - M = 5\log_{10}\left(\frac{d}{10}\right)$$

$$6.0 - 2.0 = 5\log_{10}\left(\frac{d}{10}\right)$$

$$4 = 5\log_{10}\left(\frac{d}{10}\right)$$

$$\log_{10}\left(\frac{d}{10}\right) = 0.8$$

$$\frac{d}{10} = 10^{0.8} = 6.31$$

$$d = 63.1 \mathrm{ pc}$$

**Step 2: Convert to light-years**

$$d = 63.1 \times 3.26 = 205.7 \mathrm{ ly}$$

:::info
The apparent magnitude scale is logarithmic and inverted: a difference of 5 magnitudes
corresponds to a brightness ratio of exactly 100. Each magnitude step represents a factor of
$100^{1/5} \approx 2.512$ in brightness. A magnitude 1 star is $2.512^5 = 100$ times brighter than a
magnitude 6 star.
:::

### Example 28: Gravitational Field Strength Inside a Planet

Assuming Earth has uniform density, calculate the gravitational field strength at a depth of
$2000 \mathrm{ km}$ below the surface.

**Step 1: Depth below surface**

At depth $d$, the distance from the centre is $r = R_E - d = 6371 - 2000 = 4371 \mathrm{ km}$.

**Step 2: Mass enclosed within radius $r$**

For uniform density: $M_{\mathrm{enc}} = M_E \times \left(\frac{r}{R_E}\right)^3$

$$M_{\mathrm{enc}} = 5.97 \times 10^{24} \times \left(\frac{4371}{6371}\right)^3 = 5.97 \times 10^{24} \times (0.686)^3 = 5.97 \times 10^{24} \times 0.323 = 1.928 \times 10^{24} \mathrm{ kg}$$

**Step 3: Gravitational field strength**

$$g = \frac{GM_{\mathrm{enc}}}{r^2} = \frac{6.67 \times 10^{-11} \times 1.928 \times 10^{24}}{(4.371 \times 10^6)^2}$$

$$= \frac{1.286 \times 10^{14}}{1.911 \times 10^{13}} = 6.73 \mathrm{ m/s}^2$$

This is about $69\%$ of the surface gravity ($9.81 \mathrm{ m/s}^2$), even though we are $31\%$ of the
way to the centre. Inside a uniform sphere, $g$ decreases linearly with $r$.

## Board-Specific Content: SQA Advanced Higher

### Gravitational Potential

The gravitational potential at distance $r$ from a point mass $M$ is:

$$V = -\frac{GM}{r}$$

This is the energy per unit mass. It is always negative (zero at infinity) and becomes more negative
closer to the mass.

**Example:** Calculate the gravitational potential at the surface of Earth and at an altitude of
$300 \mathrm{ km}$.

Surface:
$V = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.371 \times 10^6} = -6.25 \times 10^7 \mathrm{ J/kg}$

At $300 \mathrm{ km}$:
$V = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.671 \times 10^6} = -5.97 \times 10^7 \mathrm{ J/kg}$

The potential difference: $\Delta V = (-5.97 + 6.25) \times 10^7 = 2.8 \times 10^6 \mathrm{ J/kg}$.

## Additional Practice Problems

26. Calculate the escape velocity from the surface of Mars. (Mars mass
    $= 6.39 \times 10^{23} \mathrm{ kg}$, Mars radius $= 3.39 \times 10^6 \mathrm{ m}$.) Compare it to
    the escape velocity from Earth.

27. A satellite in an elliptical orbit has a perigee altitude of $300 \mathrm{ km}$ and an apogee
    altitude of $3000 \mathrm{ km}$. Calculate the semi-major axis, the orbital period, and the speeds
    at perigee and apogee.

28. A star has a surface temperature of $12000 \mathrm{ K}$ and a radius of $2.5 R_\odot$. Calculate
    its luminosity relative to the Sun ($T_\odot = 5778 \mathrm{ K}$) and its absolute magnitude.

29. Explain the significance of the cosmic microwave background radiation. At what temperature is it
    currently measured, and what does this tell us about the age of the universe?

30. Calculate the gravitational potential energy of a $100 \mathrm{ kg}$ satellite in a circular orbit
    at an altitude of $500 \mathrm{ km}$. What is its total energy (kinetic + potential)?
