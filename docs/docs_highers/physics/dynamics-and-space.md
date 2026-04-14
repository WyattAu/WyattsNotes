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

**Example:** A car accelerates from rest at $2 \text{ m/s}^2$ for $5 \text{ s}$, then travels at
constant speed for $10 \text{ s}$, then decelerates at $3 \text{ m/s}^2$ to rest. Find the total
distance.

Phase 1: $s_1 = \frac{1}{2}(0 + 10)(5) = 25 \text{ m}$

Phase 2: $s_2 = 10 \times 10 = 100 \text{ m}$

Phase 3: $t_3 = \dfrac{0 - 10}{-3} = \dfrac{10}{3} \text{ s}$,
$s_3 = \frac{1}{2}(10 + 0)\left(\frac{10}{3}\right) = \frac{50}{3} \approx 16.67 \text{ m}$

Total: $25 + 100 + 16.67 = 141.67 \text{ m}$

### Circular Motion

For an object moving in a circle of radius $r$ at speed $v$:

**Angular velocity:** $\omega = \dfrac{v}{r} = \dfrac{2\pi}{T} = 2\pi f$

**Centripetal acceleration:** $a = \dfrac{v^2}{r} = \omega^2 r$

**Centripetal force:** $F = \dfrac{mv^2}{r} = m\omega^2 r$

This force always acts towards the centre of the circle.

**Example:** A car of mass $1200 \text{ kg}$ travels around a roundabout of radius $25 \text{ m}$ at
$12 \text{ m/s}$. Find the centripetal force.

$$F = \frac{mv^2}{r} = \frac{1200 \times 144}{25} = \frac{172800}{25} = 6912 \text{ N}$$

This force is provided by friction between the tyres and the road.

**Example:** A satellite orbits Earth at an altitude of $400 \text{ km}$ in a circular orbit. Given
Earth's mass $M = 5.97 \times 10^{24} \text{ kg}$ and radius $R = 6.37 \times 10^6 \text{ m}$, find
the orbital speed and period.

$$r = R + h = 6.37 \times 10^6 + 4 \times 10^5 = 6.77 \times 10^6 \text{ m}$$

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.77 \times 10^6}}$$

$$v = \sqrt{\frac{3.983 \times 10^{14}}{6.77 \times 10^6}} = \sqrt{5.883 \times 10^7} \approx 7670 \text{ m/s}$$

$$T = \frac{2\pi r}{v} = \frac{2\pi \times 6.77 \times 10^6}{7670} \approx 5544 \text{ s} \approx 92.4 \text{ min}$$

### Gravitational Fields

**Newton's Law of Gravitation:**

$$F = \frac{Gm_1 m_2}{r^2}$$

where $G = 6.67 \times 10^{-11} \text{ N m}^2 \text{kg}^{-2}$.

**Gravitational Field Strength:**

$$g = \frac{F}{m} = \frac{GM}{r^2}$$

At Earth's surface: $g \approx 9.8 \text{ N/kg}$.

**Gravitational Potential Energy:**

$$E_p = -\frac{GMm}{r}$$

This is zero at infinity and negative for finite distances.

**Escape Velocity:**

$$v_{\text{esc}} = \sqrt{\frac{2GM}{r}}$$

**Example:** Calculate the escape velocity from Earth's surface.

$$v_{\text{esc}} = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.37 \times 10^6}} = \sqrt{\frac{7.966 \times 10^{14}}{6.37 \times 10^6}} = \sqrt{1.251 \times 10^8} \approx 11180 \text{ m/s} \approx 11.2 \text{ km/s}$$

---

## Higher Astrophysics

### Stellar Evolution

Stars are born from clouds of gas and dust (nebulae) that collapse under gravity.

**Main Sequence:** A star is in equilibrium when the outward radiation pressure balances
gravitational collapse. Hydrogen fuses to form helium in the core.

$$4^1_1\text{H} \to ^4_2\text{He} + 2^0_{+1}\text{e} + 2\nu_e + \text{energy}$$

**Evolution depends on mass:**

- **Low-mass stars** (like the Sun): Main sequence $\to$ Red giant $\to$ Planetary nebula $\to$
  White dwarf
- **High-mass stars** ($> 8$ solar masses): Main sequence $\to$ Red supergiant $\to$ Supernova $\to$
  Neutron star or Black hole

### The Hertzsprung-Russell Diagram

The HR diagram plots luminosity (or absolute magnitude) against temperature (or spectral class).

- **Main sequence:** Diagonal band from top-left (hot, bright) to bottom-right (cool, dim)
- **Red giants:** Top-right (cool but bright, large radius)
- **White dwarfs:** Bottom-left (hot but dim, small radius)

### Wien's Law and Stefan-Boltzmann Law

**Wien's Displacement Law:**

$$\lambda_{\text{max}} T = 2.898 \times 10^{-3} \text{ m K}$$

**Example:** A star has surface temperature $5800 \text{ K}$. Find the peak wavelength of its
radiation.

$$\lambda_{\text{max}} = \frac{2.898 \times 10^{-3}}{5800} = 5.0 \times 10^{-7} \text{ m} = 500 \text{ nm}$$

This is in the visible spectrum (green-yellow).

**Stefan-Boltzmann Law:**

$$L = 4\pi r^2 \sigma T^4$$

where $\sigma = 5.67 \times 10^{-8} \text{ W m}^{-2} \text{K}^{-4}$.

**Example:** The Sun has luminosity $3.83 \times 10^{26} \text{ W}$ and surface temperature
$5778 \text{ K}$. Find its radius.

$$r = \sqrt{\frac{L}{4\pi\sigma T^4}} = \sqrt{\frac{3.83 \times 10^{26}}{4\pi \times 5.67 \times 10^{-8} \times (5778)^4}}$$

$$= \sqrt{\frac{3.83 \times 10^{26}}{4\pi \times 5.67 \times 10^{-8} \times 1.115 \times 10^{15}}}$$

$$= \sqrt{\frac{3.83 \times 10^{26}}{7.953 \times 10^{8}}} = \sqrt{4.815 \times 10^{17}} \approx 6.94 \times 10^8 \text{ m}$$

### Universal Gravitation and Orbits

**Kepler's Third Law:**

$$T^2 \propto r^3$$

$$T^2 = \frac{4\pi^2}{GM}r^3$$

**Example:** A planet orbits a star of mass $2 \times 10^{30} \text{ kg}$ at a distance of
$1.5 \times 10^{11} \text{ m}$. Find the orbital period.

$$T = 2\pi\sqrt{\frac{r^3}{GM}} = 2\pi\sqrt{\frac{(1.5 \times 10^{11})^3}{6.67 \times 10^{-11} \times 2 \times 10^{30}}}$$

$$= 2\pi\sqrt{\frac{3.375 \times 10^{33}}{1.334 \times 10^{20}}} = 2\pi\sqrt{2.530 \times 10^{13}}$$

$$= 2\pi \times 5.030 \times 10^6 \approx 3.16 \times 10^7 \text{ s} \approx 365.7 \text{ days}$$

### Cosmology

**Hubble's Law:**

$$v = H_0 d$$

where $H_0 \approx 70 \text{ km s}^{-1} \text{Mpc}^{-1}$ is the Hubble constant, $v$ is the
recession velocity, and $d$ is the distance.

**Redshift:** As the universe expands, light from distant galaxies is shifted to longer wavelengths.

$$z = \frac{\Delta\lambda}{\lambda} = \frac{v}{c} \quad (\text{for } v \ll c)$$

**Age of the Universe:**

$$t \approx \frac{1}{H_0} \approx 14 \text{ billion years}$$

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

1. A $1500 \text{ kg}$ car travels around a bend of radius $50 \text{ m}$ at $15 \text{ m/s}$. Find
   the centripetal force and the minimum coefficient of friction needed.

2. Find the gravitational field strength at a height of $300 \text{ km}$ above Earth's surface.

3. A star has peak wavelength $350 \text{ nm}$. Find its surface temperature and state what colour
   it appears.

4. Calculate the escape velocity from Mars (mass $6.39 \times 10^{23} \text{ kg}$, radius
   $3.39 \times 10^6 \text{ m}$).

5. A galaxy is observed to have a redshift $z = 0.02$. Find its recession velocity and approximate
   distance.

6. Explain why a white dwarf is hot but has low luminosity.

7. A satellite orbits at a height of $500 \text{ km}$ above Earth. Find its orbital speed and
   period.

8. Compare and contrast the evolution of a star of 1 solar mass with a star of 15 solar masses.
