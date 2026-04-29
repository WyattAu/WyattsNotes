---
title: Gravitational Fields
slug: gravitational-fields
description: Comprehensive guide to gravitational fields for the International Baccalaureate.
---


## Point Mass

An idealized object with non-zero mass and infinitesimal volume.

_Requirements_:

- The object have an even mass distribution
- The dimensions considered is larger than the size of the object

## Kepler's Three Laws of Orbital Motion

### Origins

Also called Kepler's laws of planetary motion, where the first two laws were published by Johannes
Kepler in 1609, and the third being completed in 1619. These laws describes the planetary motions of
orbital bodies.

### First Law

The orbit of any planet about the Sun is an ellipse with one of the focus being the Sun, where the
orbit govern the separation distance ($r$) between the center of the Sun and the orbital body.
Expressing the $r$ mathematically as a function of angle ($\theta$) measured from the Sun:

$$
\begin&lbrace;aligned&rbrace;
    r(\theta) = \frac&lbrace;a(1-e^2)&rbrace;&lbrace;1+e \cos \theta&rbrace;
\end&lbrace;aligned&rbrace;
$$

where:

$e$: Orbital eccentricity, where elliptic orbit constraint e to $0 < e < 1$

$a$: Semi-major axis, defined by the distance between the center and the furthest distance from the
center

### Second Law

Equal areas are constructed by the sweeping of line segments at equal time interval. This implies
the change of area ($A$) by time ($t$) is constant, expressing this relationship mathematically:

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;dA&rbrace;&lbrace;dt&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace; r^2 d\theta \quad \because A = \frac&lbrace;1&rbrace;&lbrace;2&rbrace; r^2 \theta
\end&lbrace;aligned&rbrace;
$$

As orbital bodies can be approximated by point masses, the
[moment of inertia ($I$)](../space-time-and-motions/forces-and-momentums.md#moment-of-inertia) of
the orbital body can be approximated by:

$$
\begin&lbrace;aligned&rbrace;
    I = mr^2
\end&lbrace;aligned&rbrace;
$$

Hence the
[angular momentum ($L$)](../space-time-and-motions/forces-and-momentums.md#angular-momentum) of the
orbital body would be:

$$
\begin&lbrace;aligned&rbrace;
    L = mr^2\omega = mr^2 \frac&lbrace;d\theta&rbrace;&lbrace;dt&rbrace;\\
    \frac&lbrace;d\theta&rbrace;&lbrace;dt&rbrace; = \frac&lbrace;L&rbrace;&lbrace;mr^2&rbrace;
\end&lbrace;aligned&rbrace;
$$

Substituting $\frac{d\theta}{dt}$:

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;dA&rbrace;&lbrace;dt&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;r^2 \left(\frac&lbrace;L&rbrace;&lbrace;mr^2&rbrace; \right)\\
    \frac&lbrace;dA&rbrace;&lbrace;dt&rbrace; = \frac&lbrace;L&rbrace;&lbrace;2m&rbrace;
\end&lbrace;aligned&rbrace;
$$

Since angular momentum is conserved under centripetal force, Kepler's second law holds.

### Third Law

The orbital period of a planet, squared is directly proportional to the semi major axes ($a$). This
relationship can be presented as:

$$
\begin&lbrace;aligned&rbrace;
    T^2 \propto a^3
\end&lbrace;aligned&rbrace;
$$

## Newton's Law of Universal Gravitation

Newton's Universal Law of Gravitation states that every point mass attracts every other point mass
by a gravitational force attracting both points. This force is given by:

$$
\begin&lbrace;aligned&rbrace;
    F=G\frac&lbrace;m_1 m_2&rbrace;&lbrace;r^2&rbrace;
\end&lbrace;aligned&rbrace;
$$

where:

$G$: Gravitational constant
($6.67 \times 10^{-11} \mathrm{ m}^3 \mathrm{ kg}^{-1} \mathrm{ s}^{-2}$)

$m_1, m_2$: The mass of the two point masses

$r$: The separation distance between the point mass, where bodies approximated to point masses are
measured from the center

:::info The IB uses the Newton's Universal Law of Gravitation published in 1687, where the equation
only describes the magnitude of the force, the vector form is required to describe the force
$\bm{F}$ on $m_2$ with the direction, with $\bm{r}$ being the separation displacement
($r= r_2 - r_1$) from $m_1$ to $m_2$:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;F&rbrace; = -G\frac&lbrace;m_1 m_2&rbrace;&lbrace;|\bm&lbrace;r&rbrace;|^2&rbrace;\bm&lbrace;\hat&lbrace;r&rbrace;&rbrace;, \qquad \left(\bm&lbrace;\hat&lbrace;r&rbrace;&rbrace; = \frac&lbrace;\bm&lbrace;r&rbrace;&rbrace;&lbrace;|\bm&lbrace;r&rbrace;|&rbrace;\right)
\end&lbrace;aligned&rbrace;
$$

This describes the force in the inverse direction as the displacement vector from $m_1$
:::

:::warning IB extends Newton's Law of Universal Gravitation to include spherical masses with uniform
density by assuming to be point mass.
:::

## Gravitational Field

<PhetSimulation simulationId="gravity-and-orbits" title="Gravity and Orbits" />

Simulate gravitational interactions between a star, planet, and moon. Adjust the masses and observe
how orbital speed, period, and gravitational force change.

A gravitational field ($g$) is a vector field with dimension of
[acceleration](../space-time-and-motions/forces-and-momentums.md#acceleration), where the
acceleration of each point determine the motion of bodies in the field.

### Gravitational Potential Energy

Gravitational potential energy ($E_p$ or $U$) is the minimum work required to translate a mass from
infinite distance to a point in the gravitational field. The work done is therefore the resultant
force ($F_{ext}$) opposing the gravitational force ($F_g$) at each point from infinity to the
current position ($\bm{r}$). To determine the gravitational potential energy of a point with a
displacement ($R$) from the [point mass](#point-mass), the work done is therefore:

$$
\begin&lbrace;aligned&rbrace;
    U = E_p = \int_&lbrace;\infty&rbrace;^&lbrace;R&rbrace; F_&lbrace;ext&rbrace;(\bm&lbrace;r&rbrace;) \cdot d\bm&lbrace;r&rbrace; = -\int_&lbrace;\infty&rbrace;^&lbrace;R&rbrace; F_g(\bm&lbrace;r&rbrace;) \cdot d\bm&lbrace;r&rbrace;
\end&lbrace;aligned&rbrace;
$$

since $d\bm{r}$ act inwards, and $F(\bm{r})$ acts opposite to $\bm{\hat{r}}$, the dot product
between two vectors simplify to a scalar calculation:

$$
\begin&lbrace;aligned&rbrace;
    F_g(r) \cdot dr = \left(-\frac&lbrace;G m_1 m_2&rbrace;&lbrace;|r|^2&rbrace;\right)(-|dr|)= \frac&lbrace;Gm_1 m_2&rbrace;&lbrace;|r|^2&rbrace; |dr|\\
    U = -\int_&lbrace;\infty&rbrace;^&lbrace;R&rbrace; \frac&lbrace;Gm_1 m_2&rbrace;&lbrace;|r|^2&rbrace; |dr| = -Gm_1 m_2 \left[-\frac&lbrace;1&rbrace;&lbrace;|r|&rbrace;\right]_R^\infty\\
    U = E_p = -G\frac&lbrace;m_1 m_2&rbrace;&lbrace;|R|&rbrace;
\end&lbrace;aligned&rbrace;
$$

The IB formula booklet label this equation with $r$ as $|R|$:

$$
\begin&lbrace;aligned&rbrace;
    E_p = -G \frac&lbrace;m_1 m_2&rbrace;&lbrace;r&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Gravitation Potential

The gravitational potential ($V_g$) is the
[gravitational potential energy](#gravitational-potential-energy) per unit mass of a body with a
[displacement](../space-time-and-motions/forces-and-momentums.md#displacement) magnitude of $r$. For
a body with mass $m_2$ interacting with the magnetic field of a body with mass $m_1$, the
gravitational potential is:

$$
\begin&lbrace;aligned&rbrace;
    V_g = \frac&lbrace;E_p&rbrace;&lbrace;m_2&rbrace; = -G \frac&lbrace;m_1 m_2&rbrace;&lbrace;m_2 r&rbrace; = -G\frac&lbrace;m_1&rbrace;&lbrace;r&rbrace;
\end&lbrace;aligned&rbrace;
$$

The IB formula booklet label this equation with $M$ as $m_1$:

$$
\begin&lbrace;aligned&rbrace;
    V_g = -G \frac&lbrace;M&rbrace;&lbrace;r&rbrace;
\end&lbrace;aligned&rbrace;
$$

#### Change of Gravitational Potential

The work done ($W$) by a translation of a body with a mass ($m$) in a gravitational field by a point
mass ($M$) corresponds to the change in gravitational potential energy ($\Delta E_p$) between two
position with different gravitational potential:

$$
\begin&lbrace;aligned&rbrace;
    W = \Delta E_p = G\frac&lbrace;Mm&rbrace;&lbrace;r_2&rbrace; - G\frac&lbrace;Mm&rbrace;&lbrace;r_1&rbrace; = m \Delta V_g
\end&lbrace;aligned&rbrace;
$$

### Gravitational Field Strength

The gravitational field strength ($\bm{g}$) is the
[acceleration](../space-time-and-motions/forces-and-momentums.md#acceleration) (force per unit mass)
experience by bodies of mass ($m$) interacting with the [gravitational field](#gravitational-field),
therefore, calculated as:

$$
\begin&lbrace;aligned&rbrace;
    g = \frac&lbrace;F&rbrace;&lbrace;m&rbrace;
\end&lbrace;aligned&rbrace;
$$

Since the [gravitational potential energy](#gravitational-potential-energy) is the minimum work
required to translate a body from a infinite displacement to displacement at $r$, the work done by
gravity is inherently in the opposite direction:

$$
\begin&lbrace;aligned&rbrace;
    W_g = -E_p = -U
\end&lbrace;aligned&rbrace;
$$

Therefore, the gravitational field strength can also be determined by the negative gradient of the
gravitational potential $V_g$:

$$
\begin&lbrace;aligned&rbrace;
    g = -\nabla V_g\\
\end&lbrace;aligned&rbrace;
$$

Since the gravitational field is radial, $\nabla V_g$ can be determined in spherical axis:

$$
\begin&lbrace;aligned&rbrace;
    \nabla V_g = \frac&lbrace;dV_g&rbrace;&lbrace;dr&rbrace;\hat&lbrace;r&rbrace;\\
    \frac&lbrace;dV_g&rbrace;&lbrace;dr&rbrace; = \frac&lbrace;d&rbrace;&lbrace;dr&rbrace;\left(-\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;\right) = G\frac&lbrace;M&rbrace;&lbrace;r^2&rbrace;\\
    g = -G\frac&lbrace;M&rbrace;&lbrace;r^2&rbrace; \hat&lbrace;r&rbrace;
\end&lbrace;aligned&rbrace;
$$

The IB formula booklet only considers magnitude, hence expressing only the magnitude of g:

$$
\begin&lbrace;aligned&rbrace;
    g = G\frac&lbrace;M&rbrace;&lbrace;r^2&rbrace;
\end&lbrace;aligned&rbrace;
$$

When expressing this with the average change of
[gravitational potential $V_g = -G\frac{M}{r}$](#gravitation-potential), the magnitude of g is:

$$
\begin&lbrace;aligned&rbrace;
    g = -\frac&lbrace;\Delta V_g&rbrace;&lbrace;\Delta r&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Graphical Presentation of Gravitational Field

#### Gravitational Field Lines

Gravitational field lines represent the direction of acceleration (equivalent to the gradient of
gravitational potential) in the gravitational field, and the hence the direction of force applied on
mass interacting with the gravitational field.

#### Equipotential Surfaces

Equipotential surfaces represent the region in space with equivalent gravitational potential.
Combining the gravitational field lines and equipotential surface allow the representation of a
gravitational field with direction of gravitational field strength and magnitude of gravitational
potential at different surfaces.

### Escape Velocity

The escape velocity ($v_e$) is the minimum speed required for a body to sustain attraction by
gravitational field strength but continue to move to an infinite displacement without further
external force applied. This is valid under two assumptions:

- Ballistic trajectory: No other force than gravitational force is applied on the body
- No gravitational fields from other masses are considered

These assumptions along with the conservation of mechanical energy allow the total energy change is
zero ($E_f - E_i = 0$), where gravitational potential energy at infinite displacement is $0$ by
definition, and kinetic energy at infinite displacement is $0$ due to velocity approaching $0$ with
gravitational field strength decelerating along the whole trajectory. This means the
$E_f = E_i = E_k + E_p = 0+0 = 0$, using their definitions:

$$
\begin&lbrace;aligned&rbrace;
    E_i = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_e^2 - \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; = 0\\
    \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_e^2 = \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace;\\
    v_e^2 = \frac&lbrace;2GM&rbrace;&lbrace;r&rbrace;\\
    v_e = \sqrt&lbrace;\frac&lbrace;2GM&rbrace;&lbrace;r&rbrace;&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Orbital speed

Orbital speed is the required speed for an object to remain in stable orbit around a barycenter or a
center of a body with significantly more mass.

:::warning In IB, only the cases of orbiting a body with significantly more mass is present. The IB
also assume all orbits to be circular instead of elliptic as stated by
[Keplar's First Law](#first-law).
:::

In a stable circular orbit, equivalent force in the opposite direction is required to balance the
[centripetal force](../space-time-and-motions/forces-and-momentums.md#centripetal-force) $F_c$ of
[gravitational force](#newtons-law-of-universal-gravitation) $F_g$:

$$
\begin&lbrace;aligned&rbrace;
    F_&lbrace;total&rbrace; = F_g + (-F_c) = 0 \\
    -\frac&lbrace;GMm&rbrace;&lbrace;r^2&rbrace;\bm&lbrace;\hat&lbrace;r&rbrace;&rbrace; + -(-\frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace;\bm&lbrace;\hat&lbrace;r&rbrace;&rbrace;) = 0\\
    \left(-\frac&lbrace;GMm&rbrace;&lbrace;r^2&rbrace; + \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace;\right)\bm&lbrace;\hat&lbrace;r&rbrace;&rbrace; = 0\\
    \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace; = \frac&lbrace;GMm&rbrace;&lbrace;r^2&rbrace;\\
    v = \sqrt&lbrace;\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;&rbrace;
\end&lbrace;aligned&rbrace;
$$

:::info IB does only consider the magnitude of orbital velocity, therefore, the equation above is
the one written in the formula booklet. The angle of orbital velocity is dependent on the angular
position $\theta$ of the orbital body:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;\hat&lbrace;r&rbrace;&rbrace; = \cos \theta \hat&lbrace;i&rbrace; + \sin \theta \hat&lbrace;j&rbrace;
    \frac&lbrace;d\bm&lbrace;\hat&lbrace;r&rbrace;&rbrace;&rbrace;&lbrace;d\theta&rbrace; = - \sin \theta \hat&lbrace;i&rbrace; + \cos \theta \hat&lbrace;j&rbrace;
\end&lbrace;aligned&rbrace;
$$

As the derivative is a unit vector:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;\hat&lbrace;\theta&rbrace;&rbrace; = - \sin \theta \hat&lbrace;i&rbrace; + \cos \theta \hat&lbrace;j&rbrace;
\end&lbrace;aligned&rbrace;
$$

:::

## Viscous Drag in Atmosphere

The viscous drag ($F_{drag}$) on an orbiting body is influenced by the altitude (due to atmospheric
density decreases with height) and orbital velocity by the formula:

$$
\begin&lbrace;aligned&rbrace;
    F_&lbrace;drag&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;C_dA\rho v^2\\
    \rho(h) = \rho_0 e^&lbrace;-\frac&lbrace;h&rbrace;&lbrace;H&rbrace;&rbrace;, \quad H \approx 8 \mathrm&lbrace; km&rbrace;\\
    v = \sqrt&lbrace;\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;&rbrace;\\
    F_&lbrace;drag&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;C_d A \rho_0 e^&lbrace;-\frac&lbrace;h&rbrace;&lbrace;H&rbrace;&rbrace; \left(\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;\right)\\
    \therefore F \propto \frac&lbrace;e^&lbrace;-\frac&lbrace;h&rbrace;&lbrace;H&rbrace;&rbrace;&rbrace;&lbrace;r&rbrace;
\end&lbrace;aligned&rbrace;
$$

where:

$\rho_0$: density at sea level

$h$: height

$H$: Scale height

Since $e^{-{\frac{h}{H}}}$ approaches $0$ at a faster rate than $\frac{1}{r}$ approaching $0$,
therefore viscous drag decrease rapidly at increasing altitudes.

## Derivation of Kepler's Third Law from Newton's Law of Gravitation

Kepler's third law follows from
[Newton's Law of Universal Gravitation](#newtons-law-of-universal-gravitation) and
[circular orbital motion](#orbital-speed). Equating gravitational and
[centripetal force](../space-time-and-motions/forces-and-momentums.md#centripetal-force), then
substituting $v = 2\pi r / T$:

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;GMm&rbrace;&lbrace;r^2&rbrace; = \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace; \implies v^2 = \frac&lbrace;GM&rbrace;&lbrace;r&rbrace; \implies \left(\frac&lbrace;2\pi r&rbrace;&lbrace;T&rbrace;\right)^2 = \frac&lbrace;GM&rbrace;&lbrace;r&rbrace; \implies T^2 = \frac&lbrace;4\pi^2&rbrace;&lbrace;GM&rbrace; r^3
\end&lbrace;aligned&rbrace;
$$

:::info Since $\frac{4\pi^2}{GM}$ is constant for a given central body, this reduces to
$T^2 \propto r^3$. For elliptical orbits, replace $r$ with semi-major axis $a$.
:::

## Gravitational Field Inside a Spherical Shell

### Shell Theorem

The shell theorem states two key results:

1. **Outside a uniform spherical shell**: The field is identical to that of a point mass at the
   center.
2. **Inside a uniform spherical shell**: The net gravitational field at any interior point is zero.

Qualitatively: for any point $P$ inside, the shell can be divided into pairs of opposing mass
elements. A near-side element pulls more strongly (inverse-square law), but the corresponding
far-side element has more mass (larger solid angle). These effects cancel exactly.

:::warning The IB requires only qualitative understanding of the shell theorem. A full proof
requires integration over the spherical shell.
:::

### Field Inside a Solid Sphere

For a solid sphere of total mass $M$ and radius $R$ with uniform density, consider a point at
distance $r \lt{} R$ from the center. Only the enclosed mass contributes (the shell theorem makes
the outer shell contribute zero):

$$
\begin&lbrace;aligned&rbrace;
    M_&lbrace;\mathrm&lbrace;enc&rbrace;&rbrace; = M\left(\frac&lbrace;r&rbrace;&lbrace;R&rbrace;\right)^3
\end&lbrace;aligned&rbrace;
$$

The field strength at $r$ is then:

$$
\begin&lbrace;aligned&rbrace;
    g = \frac&lbrace;GM_&lbrace;\mathrm&lbrace;enc&rbrace;&rbrace;&rbrace;&lbrace;r^2&rbrace; = \frac&lbrace;G M (r/R)^3&rbrace;&lbrace;r^2&rbrace; = \frac&lbrace;GM&rbrace;&lbrace;R^3&rbrace; r \quad \implies \quad g \propto r
\end&lbrace;aligned&rbrace;
$$

Inside a uniform solid sphere, the gravitational field increases linearly from the center. Combining
interior and exterior:

$$
\begin&lbrace;aligned&rbrace;
    g(r) =
    \begin&lbrace;cases&rbrace;
        \dfrac&lbrace;GM&rbrace;&lbrace;R^3&rbrace;\, r & \mathrm&lbrace;for &rbrace; r \lt&lbrace;&rbrace; R \\[8pt]
        \dfrac&lbrace;GM&rbrace;&lbrace;r^2&rbrace; & \mathrm&lbrace;for &rbrace; r \geq R
    \end&lbrace;cases&rbrace;
\end&lbrace;aligned&rbrace;
$$

The field is zero at $r = 0$, increases linearly to $g_{\mathrm{surface}} = GM/R^2$ at $r = R$, then
decreases as $1/r^2$.

## Graphs of Gravitational Quantities

### $g$ vs $r$: Field Strength vs Distance

Outside a sphere, $g = GM/r^2$: large near $r = 0$, decreasing as $r^{-2}$, asymptotically
approaching zero. For a solid sphere of radius $R$:

- **Interior** ($r \lt{} R$): $g$ increases linearly from $0$ to $g_{\max} = GM/R^2$.
- **Exterior** ($r \gt{} R$): $g$ follows the inverse-square law.

The maximum of $g$ occurs at the surface $r = R$.

### $V_g$ vs $r$: Gravitational Potential vs Distance

With $V_g = -GM/r$: always negative for finite $r$; $V_g \to 0$ from below as $r \to \infty$;
vertical asymptote at $r = 0$ where $V_g \to -\infty$. Inside a solid sphere of radius $R$, the
potential follows $V_g = -\frac{GM}{2R^3}(3R^2 - r^2)$ (parabolic, less steep), continuous and
smooth at $r = R$.

### $E_p$ vs $r$: Potential Energy vs Distance

$E_p = -GMm/r$ has the same shape as $V_g$ vs $r$, scaled by $m$.

### Relationship Between the Graphs

Since $g = -dV_g/dr$, the value of $g$ equals the negative slope of the $V_g$ vs $r$ curve. Steep
regions (small $r$) give large $g$; flat regions (large $r$) give small $g$. The work to move a mass
between two radii equals the area under the $g$ vs $r$ curve.

## Satellite Motion — Extended

### Geostationary Orbits

A geostationary orbit is a circular equatorial orbit with period equal to Earth's sidereal rotation
period ($T = 86400$ s), making the satellite appear stationary from a fixed point on Earth's :::info
A geostationary orbit must satisfy three conditions:

1. Orbital period equals Earth's rotational period ($T = 86400$ s)
2. Orbit lies in the equatorial plane
3. Orbit is circular :::

The required orbital radius is found from Kepler's third law:

$$
\begin&lbrace;aligned&rbrace;
    r = \sqrt[3]&lbrace;\frac&lbrace;GM T^2&rbrace;&lbrace;4\pi^2&rbrace;&rbrace; = \sqrt[3]&lbrace;\frac&lbrace;(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)(86400)^2&rbrace;&lbrace;4\pi^2&rbrace;&rbrace; \approx 4.22 \times 10^7 \mathrm&lbrace; m&rbrace;
\end&lbrace;aligned&rbrace;
$$

The altitude above Earth's surface and orbital speed are:

$$
\begin&lbrace;aligned&rbrace;
    h &= r - R_E \approx 4.22 \times 10^7 - 6.371 \times 10^6 \approx 3.58 \times 10^7 \mathrm&lbrace; m&rbrace; \approx 35800 \mathrm&lbrace; km&rbrace;\\[4pt]
    v &= \sqrt&lbrace;\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;&rbrace; \approx 3070 \mathrm&lbrace; m/s&rbrace; \approx 3.07 \mathrm&lbrace; km/s&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Low Earth Orbit vs Geostationary Orbit

| Property       | Low Earth Orbit (LEO)      | Geostationary Orbit (GEO) |
| -------------- | -------------------------- | ------------------------- |
| Altitude       | 160 -- 2,000 km            | ~35,800 km                |
| Orbital radius | ~6,531 -- 8,371 km         | ~42,200 km                |
| Orbital period | 88 -- 127 min              | 24 hours                  |
| Orbital speed  | 7.5 -- 7.8 km/s            | ~3.07 km/s                |
| Applications   | ISS, Earth imaging, Hubble | Communications, weather   |

### Total Orbital Energy

For a satellite of mass $m$ in circular orbit of radius $r$ around mass $M$:

$$
\begin&lbrace;aligned&rbrace;
    E_k &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\left(\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;\right) = \frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace;\\[4pt]
    E_p &= -\frac&lbrace;GMm&rbrace;&lbrace;r&rbrace;\\[4pt]
    E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; &= E_k + E_p = \frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace; - \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; = -\frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace;
\end&lbrace;aligned&rbrace;
$$

The total energy is always negative (gravitationally bound), and
$E_{\mathrm{total}} = \frac{1}{2}E_p$, so $E_k = -\frac{1}{2}E_p$ for all circular orbits.

### Hohmann Transfer Orbit (Qualitative)

A Hohmann transfer is the most energy-efficient method of transferring between two circular coplanar
orbits. It uses an elliptical orbit tangent to both the initial and final circular orbits, requiring
two engine burns:

1. **First burn (perigee)**: Increase speed from $v_1 = \sqrt{GM/r_1}$ to the transfer orbit perigee
   speed, entering an ellipse with apogee at $r_2$.
2. **Second burn (apogee)**: At $r_2$, increase speed from the transfer orbit apogee speed to
   $v_2 = \sqrt{GM/r_2}$, circularizing at the target radius.

The transfer minimizes total $\Delta v$. To go to a higher orbit, both burns increase speed; to go
lower, both decrease speed. The transfer time equals half the period of the elliptical transfer
orbit.

## Worked Examples

### Example 1: Gravitational Force Between Two Masses

Calculate the gravitational force between Earth and the Moon.

$$
\begin&lbrace;aligned&rbrace;
    M_&lbrace;\mathrm&lbrace;Earth&rbrace;&rbrace; = 5.97 \times 10^&lbrace;24&rbrace; \mathrm&lbrace; kg&rbrace;, \quad M_&lbrace;\mathrm&lbrace;Moon&rbrace;&rbrace; = 7.35 \times 10^&lbrace;22&rbrace; \mathrm&lbrace; kg&rbrace;, \quad r = 3.84 \times 10^8 \mathrm&lbrace; m&rbrace;
\end&lbrace;aligned&rbrace;
$$

$$
\begin&lbrace;aligned&rbrace;
    F &= G\frac&lbrace;M_&lbrace;\mathrm&lbrace;Earth&rbrace;&rbrace; M_&lbrace;\mathrm&lbrace;Moon&rbrace;&rbrace;&rbrace;&lbrace;r^2&rbrace; = (6.67 \times 10^&lbrace;-11&rbrace;) \frac&lbrace;(5.97 \times 10^&lbrace;24&rbrace;)(7.35 \times 10^&lbrace;22&rbrace;)&rbrace;&lbrace;(3.84 \times 10^8)^2&rbrace;\\
    F &= (6.67 \times 10^&lbrace;-11&rbrace;) \frac&lbrace;4.388 \times 10^&lbrace;47&rbrace;&rbrace;&lbrace;1.475 \times 10^&lbrace;17&rbrace;&rbrace; = (6.67 \times 10^&lbrace;-11&rbrace;)(2.975 \times 10^&lbrace;30&rbrace;) \approx 1.98 \times 10^&lbrace;20&rbrace; \mathrm&lbrace; N&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Example 2: Gravitational Field Strength at Altitude

Calculate the gravitational field strength at 300 km altitude and compare with $g_0 = 9.81$ m/s$^2$.

$$
\begin&lbrace;aligned&rbrace;
    r &= R_&lbrace;\mathrm&lbrace;Earth&rbrace;&rbrace; + h = 6.371 \times 10^6 + 3.00 \times 10^5 = 6.671 \times 10^6 \mathrm&lbrace; m&rbrace;\\[4pt]
    g &= \frac&lbrace;GM&rbrace;&lbrace;r^2&rbrace; = \frac&lbrace;(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)&rbrace;&lbrace;(6.671 \times 10^6)^2&rbrace; = \frac&lbrace;3.983 \times 10^&lbrace;14&rbrace;&rbrace;&lbrace;4.450 \times 10^&lbrace;13&rbrace;&rbrace; \approx 8.95 \mathrm&lbrace; m/s&rbrace;^2\\[4pt]
    \frac&lbrace;g_0 - g&rbrace;&lbrace;g_0&rbrace; &= \frac&lbrace;9.81 - 8.95&rbrace;&lbrace;9.81&rbrace; \approx 8.8\%
\end&lbrace;aligned&rbrace;
$$

At 300 km (ISS altitude), $g$ is still about 91% of its surface value.

### Example 3: Gravitational Potential Energy Change for Orbit Transfer

A 1000 kg satellite moves from 300 km altitude to geostationary orbit at 35,800 km. Find
$\Delta E_p$.

$$
\begin&lbrace;aligned&rbrace;
    \Delta E_p &= GMm\left(\frac&lbrace;1&rbrace;&lbrace;r_1&rbrace; - \frac&lbrace;1&rbrace;&lbrace;r_2&rbrace;\right)\\[4pt]
    &= (6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)(1000)\left(\frac&lbrace;1&rbrace;&lbrace;6.671 \times 10^6&rbrace; - \frac&lbrace;1&rbrace;&lbrace;4.22 \times 10^7&rbrace;\right)\\[4pt]
    &= (3.983 \times 10^&lbrace;14&rbrace;)(1.499 \times 10^&lbrace;-7&rbrace; - 2.370 \times 10^&lbrace;-8&rbrace;)\\[4pt]
    &= (3.983 \times 10^&lbrace;14&rbrace;)(1.262 \times 10^&lbrace;-7&rbrace;) \approx 5.03 \times 10^7 \mathrm&lbrace; J&rbrace; \approx 50.3 \mathrm&lbrace; MJ&rbrace;
\end&lbrace;aligned&rbrace;
$$

The potential energy increases (becomes less negative) since work is done against gravity.

### Example 4: Escape Velocity of Earth

$$
\begin&lbrace;aligned&rbrace;
    v_e = \sqrt&lbrace;\frac&lbrace;2GM&rbrace;&lbrace;R&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;2(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)&rbrace;&lbrace;6.371 \times 10^6&rbrace;&rbrace; = \sqrt&lbrace;1.250 \times 10^8&rbrace; \approx 11.2 \mathrm&lbrace; km/s&rbrace;
\end&lbrace;aligned&rbrace;
$$

The mass $m$ of the escaping object cancels, confirming escape velocity is independent of the
object's mass.

### Example 5: Orbital Period Using Kepler's Third Law

Find the period of a satellite at 500 km altitude using $T = 2\pi\sqrt{r^3/(GM)}$.

$$
\begin&lbrace;aligned&rbrace;
    r &= 6.371 \times 10^6 + 5.00 \times 10^5 = 6.871 \times 10^6 \mathrm&lbrace; m&rbrace;\\[4pt]
    T &= 2\pi\sqrt&lbrace;\frac&lbrace;(6.871 \times 10^6)^3&rbrace;&lbrace;(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)&rbrace;&rbrace; = 2\pi\sqrt&lbrace;\frac&lbrace;3.245 \times 10^&lbrace;20&rbrace;&rbrace;&lbrace;3.983 \times 10^&lbrace;14&rbrace;&rbrace;&rbrace;\\[4pt]
    &= 2\pi\sqrt&lbrace;8.148 \times 10^5&rbrace; = 2\pi(902.7) \approx 5672 \mathrm&lbrace; s&rbrace; \approx 94.5 \mathrm&lbrace; min&rbrace;
\end&lbrace;aligned&rbrace;
$$

Consistent with the typical LEO period of approximately 90 minutes.

### Example 6: Comparing Field Strength at Surface vs Altitude

At what altitude is $g$ equal to one-quarter of the surface value?

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;GM&rbrace;&lbrace;r^2&rbrace; = \frac&lbrace;1&rbrace;&lbrace;4&rbrace; \cdot \frac&lbrace;GM&rbrace;&lbrace;R^2&rbrace; \implies r^2 = 4R^2 \implies r = 2R
\end&lbrace;aligned&rbrace;
$$

$$
\begin&lbrace;aligned&rbrace;
    h = r - R = R = 6.371 \times 10^6 \mathrm&lbrace; m&rbrace; \approx 6371 \mathrm&lbrace; km&rbrace;
\end&lbrace;aligned&rbrace;
$$

Doubling the distance from the center reduces the field by a factor of $2^2 = 4$.

## Common Pitfalls

### Using the Wrong Radius in $g = GM/r^2$

The formula gives the field at distance $r$ from the **center** of the mass. For the surface, use
$r = R_{\mathrm{planet}}$; for altitude $h$, use $r = R_{\mathrm{planet}} + h$. A common mistake is
substituting the orbital radius when asked for surface gravity, or vice versa.

### Sign Conventions in Gravitational Potential Energy

By convention $E_p = 0$ at infinite separation, so $E_p$ is **always negative** for finite $r$:

$$
\begin&lbrace;aligned&rbrace;
    E_p = -\frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; \lt&lbrace;&rbrace; 0 \quad \mathrm&lbrace;for all finite &rbrace; r
\end&lbrace;aligned&rbrace;
$$

Moving outward ($r_2 \gt{} r_1$) gives positive $\Delta E_p$ since work is done against gravity. Do
not confuse this with the $mgh$ approximation (valid only for $h \ll R_{\mathrm{Earth}}$).

### Escape Velocity is Independent of the Escaping Object's Mass

From the [escape velocity](#escape-velocity) derivation, $m$ cancels:

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_e^2 = \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; \implies v_e = \sqrt&lbrace;\frac&lbrace;2GM&rbrace;&lbrace;r&rbrace;&rbrace;
\end&lbrace;aligned&rbrace;
$$

A 1 kg object and a 10,000 kg spacecraft need the same escape velocity. The kinetic energy
$E_k = \frac{1}{2}mv_e^2$, however, does depend on mass.

### Confusing Proportionality with the Full Equation

$T^2 \propto r^3$ only holds for orbits around the **same** central body. The constant
$\frac{4\pi^2}{GM}$ depends on the central body's mass. When comparing orbits around different
planets, use the full equation:

$$
\begin&lbrace;aligned&rbrace;
    T^2 = \frac&lbrace;4\pi^2&rbrace;&lbrace;GM&rbrace; r^3
\end&lbrace;aligned&rbrace;
$$

## Problem Set

### Problem 1

Two spheres of mass $m_1 = 8.00 \times 10^{6}$ kg and $m_2 = 3.50 \times 10^{4}$ kg are separated by
50.0 m. Calculate the gravitational force between them.

<details>
<summary>Solution</summary>

$$
\begin&lbrace;aligned&rbrace;
    F &= G\frac&lbrace;m_1 m_2&rbrace;&lbrace;r^2&rbrace; = (6.67 \times 10^&lbrace;-11&rbrace;)\frac&lbrace;(8.00 \times 10^6)(3.50 \times 10^4)&rbrace;&lbrace;(50.0)^2&rbrace;\\
    &= (6.67 \times 10^&lbrace;-11&rbrace;)\frac&lbrace;2.80 \times 10^&lbrace;11&rbrace;&rbrace;&lbrace;2500&rbrace; = (6.67 \times 10^&lbrace;-11&rbrace;)(1.12 \times 10^8) \approx 7.47 \times 10^&lbrace;-3&rbrace; \mathrm&lbrace; N&rbrace;
\end&lbrace;aligned&rbrace;
$$

</details>

### Problem 2

Calculate $g$ at 500 km altitude. How much weaker is this than 9.81 m/s$^2$?

<details>
<summary>Solution</summary>

$$
\begin&lbrace;aligned&rbrace;
    r &= 6.371 \times 10^6 + 5.00 \times 10^5 = 6.871 \times 10^6 \mathrm&lbrace; m&rbrace;\\[4pt]
    g &= \frac&lbrace;(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)&rbrace;&lbrace;(6.871 \times 10^6)^2&rbrace; = \frac&lbrace;3.983 \times 10^&lbrace;14&rbrace;&rbrace;&lbrace;4.721 \times 10^&lbrace;13&rbrace;&rbrace; \approx 8.44 \mathrm&lbrace; m/s&rbrace;^2
\end&lbrace;aligned&rbrace;
$$

Fractional decrease: $(9.81 - 8.44)/9.81 \approx 14.0\%$.

</details>

### Problem 3

Calculate the escape velocity from Mars. Given: $M_{\mathrm{Mars}} = 6.42 \times 10^{23}$ kg,
$R_{\mathrm{Mars}} = 3.390 \times 10^{6}$ m.

<details>
<summary>Solution</summary>

$$
\begin&lbrace;aligned&rbrace;
    v_e &= \sqrt&lbrace;\frac&lbrace;2(6.67 \times 10^&lbrace;-11&rbrace;)(6.42 \times 10^&lbrace;23&rbrace;)&rbrace;&lbrace;3.390 \times 10^6&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;8.564 \times 10^&lbrace;13&rbrace;&rbrace;&lbrace;3.390 \times 10^6&rbrace;&rbrace; = \sqrt&lbrace;2.526 \times 10^7&rbrace; \approx 5.03 \mathrm&lbrace; km/s&rbrace;
\end&lbrace;aligned&rbrace;
$$

Compared to 11.2 km/s for Earth.

</details>

### Problem 4

A 500 kg satellite is in circular orbit at 300 km altitude. Find: (a) orbital period, (b) orbital
speed, (c) total mechanical energy.

<details>
<summary>Solution</summary>

$$
\begin&lbrace;aligned&rbrace;
    r &= 6.671 \times 10^6 \mathrm&lbrace; m&rbrace;
\end&lbrace;aligned&rbrace;
$$

**(a)**

$$
\begin&lbrace;aligned&rbrace;
    T = 2\pi\sqrt&lbrace;\frac&lbrace;r^3&rbrace;&lbrace;GM&rbrace;&rbrace; = 2\pi\sqrt&lbrace;\frac&lbrace;(6.671 \times 10^6)^3&rbrace;&lbrace;(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)&rbrace;&rbrace; = 2\pi(863.3) \approx 5425 \mathrm&lbrace; s&rbrace; \approx 90.4 \mathrm&lbrace; min&rbrace;
\end&lbrace;aligned&rbrace;
$$

**(b)**

$$
\begin&lbrace;aligned&rbrace;
    v = \sqrt&lbrace;\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;3.983 \times 10^&lbrace;14&rbrace;&rbrace;&lbrace;6.671 \times 10^6&rbrace;&rbrace; \approx 7728 \mathrm&lbrace; m/s&rbrace; \approx 7.73 \mathrm&lbrace; km/s&rbrace;
\end&lbrace;aligned&rbrace;
$$

**(c)**

$$
\begin&lbrace;aligned&rbrace;
    E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = -\frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace; = -\frac&lbrace;(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)(500)&rbrace;&lbrace;2(6.671 \times 10^6)&rbrace; = -\frac&lbrace;1.992 \times 10^&lbrace;14&rbrace;&rbrace;&lbrace;1.334 \times 10^7&rbrace; \approx -14.9 \mathrm&lbrace; MJ&rbrace;
\end&lbrace;aligned&rbrace;
$$

</details>

### Problem 5

Calculate the work required to move a 1000 kg satellite from $r_1 = 6.671 \times 10^6$ m to
$r_2 = 4.22 \times 10^7$ m.

<details>
<summary>Solution</summary>

$$
\begin&lbrace;aligned&rbrace;
    W &= GMm\left(\frac&lbrace;1&rbrace;&lbrace;r_1&rbrace; - \frac&lbrace;1&rbrace;&lbrace;r_2&rbrace;\right)\\[4pt]
    &= (6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)(1000)\left(\frac&lbrace;1&rbrace;&lbrace;6.671 \times 10^6&rbrace; - \frac&lbrace;1&rbrace;&lbrace;4.22 \times 10^7&rbrace;\right)\\[4pt]
    &= (3.983 \times 10^&lbrace;14&rbrace;)(1.262 \times 10^&lbrace;-7&rbrace;) \approx 5.03 \times 10^7 \mathrm&lbrace; J&rbrace; = 50.3 \mathrm&lbrace; MJ&rbrace;
\end&lbrace;aligned&rbrace;
$$

This is only the potential energy change; additional kinetic energy changes are required at each
burn for a real transfer.

</details>

### Problem 6

The surface field strength of a planet of radius $R$ is $g_0$. At what distance from the center is
$g = g_0/9$?

<details>
<summary>Solution</summary>

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;GM&rbrace;&lbrace;r^2&rbrace; = \frac&lbrace;1&rbrace;&lbrace;9&rbrace; \cdot \frac&lbrace;GM&rbrace;&lbrace;R^2&rbrace; \implies r^2 = 9R^2 \implies r = 3R
\end&lbrace;aligned&rbrace;
$$

At distance $3R$ from the center (altitude $2R$ above the surface). Tripling the distance reduces
$g$ by $3^2 = 9$.

</details>

### Problem 7

A 2000 kg satellite orbits at 20,000 km altitude. (a) Find the total orbital energy. (b) What
minimum energy is needed for escape? (c) Verify $E_k = \frac{1}{2}|E_p|$.

<details>
<summary>Solution</summary>

$$
\begin&lbrace;aligned&rbrace;
    r = 6.371 \times 10^6 + 2.00 \times 10^7 = 2.637 \times 10^7 \mathrm&lbrace; m&rbrace;
\end&lbrace;aligned&rbrace;
$$

**(a)**

$$
\begin&lbrace;aligned&rbrace;
    E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = -\frac&lbrace;(6.67 \times 10^&lbrace;-11&rbrace;)(5.97 \times 10^&lbrace;24&rbrace;)(2000)&rbrace;&lbrace;2(2.637 \times 10^7)&rbrace; = -\frac&lbrace;7.966 \times 10^&lbrace;14&rbrace;&rbrace;&lbrace;5.274 \times 10^7&rbrace; \approx -15.1 \mathrm&lbrace; MJ&rbrace;
\end&lbrace;aligned&rbrace;
$$

**(b)** For escape, $E_{\mathrm{total}}$ must reach zero:
$\Delta E = 0 - (-15.1 \times 10^6) = 15.1$ MJ.

**(c)**

$$
\begin&lbrace;aligned&rbrace;
    E_k &= \frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace; = \frac&lbrace;7.966 \times 10^&lbrace;14&rbrace;&rbrace;&lbrace;2(2.637 \times 10^7)&rbrace; \approx 15.1 \times 10^6 \mathrm&lbrace; J&rbrace;\\[4pt]
    |E_p| &= \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; = \frac&lbrace;7.966 \times 10^&lbrace;14&rbrace;&rbrace;&lbrace;2.637 \times 10^7&rbrace; \approx 30.2 \times 10^6 \mathrm&lbrace; J&rbrace;\\[4pt]
    E_k &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;|E_p| \quad \checkmark
\end&lbrace;aligned&rbrace;
$$

</details>
