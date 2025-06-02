---
title: Gravitational Fields
sidebar_position: 1
---

## Point Mass
A point mass is a idealized object with non-zero mass and infinitesimal volume.

*Requirements*:
- The object have a even mass distribution
- The dimensions considered is larger than the size of the object

## Kepler's Three Laws of Orbital Motion
### Origins
Also called Kepler's laws of planetary motion, where the first two laws were published by Johannes Kepler in 1609, and the third being completed in 1619. These laws describes the planetary motions of orbital bodies.

### First Law
The orbit of any planet about the Sun is an ellipse with one of the focus being the Sun, where the orbit govern the separation distance ($r$) between the center of the Sun and the orbital body. Expressing the $r$ mathematically as a function of angle ($\theta$) measured from the Sun:
$$
\begin{aligned}
    r(\theta) = \frac{a(1-e^2)}{1+e \cos \theta}
\end{aligned}
$$
where:

$e$: Orbital eccentricity, where elliptic orbit constraint e to $0 < e < 1$

$a$: Semi-major axis, defined by the distance between the center and the furthest distance from the center

### Second Law
Equal areas are constructed by the sweeping of line segments at equal time interval. This implies the change of area ($A$) by time ($t$) is constant, expressing this relationship mathematically:
$$
\begin{aligned}
    \frac{dA}{dt} = \frac{1}{2} r^2 d\theta \quad \because A = \frac{1}{2} r^2 \theta
\end{aligned}
$$
As orbital bodies can be approximated by point masses, the [moment of inertia ($I$)](../SpaceTimeAndMotions/ForcesAndMomentums.md#moment-of-inertia) of the orbital body can be approximated by:
$$
\begin{aligned}
    I = mr^2
\end{aligned}
$$
Hence the [angular momentum ($L$)](../SpaceTimeAndMotions/ForcesAndMomentums.md#angular-momentum) of the orbital body would be:
$$
\begin{aligned}
    L = mr^2\omega = mr^2 \frac{d\theta}{dt}\\  
    \frac{d\theta}{dt} = \frac{L}{mr^2}
\end{aligned}
$$
Substituting $\frac{d\theta}{dt}$:
$$
\begin{aligned}
    \frac{dA}{dt} = \frac{1}{2}r^2 \left(\frac{L}{mr^2} \right)\\
    \frac{dA}{dt} = \frac{L}{2m}
\end{aligned}
$$
Since angular momentum is conserved under centripetal force, Kepler's second law holds.

### Third Law
The orbital period of a planet, squared is directly proportional to the semi major axes ($a$). This relationship can be presented as:
$$
\begin{aligned}
    T^2 \propto a^3 
\end{aligned}
$$

## Newton's Law of Universal Gravitation
Newton's Universal Law of Gravitation states that every point mass attracts every other point mass by a gravitational force attracting both points. This force is given by:
$$
\begin{aligned}
    F=G\frac{m_1 m_2}{r^2} 
\end{aligned}
$$

where:

$G$: Gravitational constant ($6.67 \times 10^{-11} m^3 kg^{-1} s^{-2}$)

$m_1, m_2$: The mass of the two point masses 

$r$: The separation distance between the point mass, where bodies approximated to point masses are measured from the center

:::info
The IB uses the Newton's Universal Law of Gravitation published in 1687, where the equation only describes the magnitude of the force, the vector form is required to describe the force $\bm{F}$ on $m_2$ with the direction, with $\bm{r}$ being the separation displacement ($r= r_2 - r_1$) from $m_1$ to $m_2$:
$$
\begin{aligned}
    \bm{F} = -G\frac{m_1 m_2}{|\bm{r}|^2}\bm{\hat{r}}, \qquad \left(\bm{\hat{r}} = \frac{\bm{r}}{|\bm{r}|}\right)
\end{aligned}
$$

This describes the force in the inverse direction as the displacement vector from $m_1$
:::

:::warning
IB extends Newton's Law of Universal Gravitation to include spherical masses with uniform density by assuming to be point mass.
:::


## Gravitational Field
A gravitational field ($g$) is a vector field with dimension of [acceleration](../SpaceTimeAndMotions/ForcesAndMomentums.md#acceleration), where the acceleration of each point determine the motion of bodies in the field.


### Gravitational Potential Energy
Gravitational potential energy ($E_p$ or $U$) is the minimum work required to translate a mass from infinite distance to a point in the gravitational field. The work done is therefore the resultant force ($F_{ext}$) opposing the gravitational force ($F_g$) at each point from infinity to the current position ($\bm{r}$). To determine the gravitational potential energy of a point with a displacement ($R$) from the [point mass](#point-mass), the work done is therefore:
$$
\begin{aligned}
    U = E_p = \int_{\infty}^{R} F_{ext}(\bm{r}) \cdot d\bm{r} = -\int_{\infty}^{R} F_g(\bm{r}) \cdot d\bm{r}
\end{aligned}
$$
since $d\bm{r}$ act inwards, and $F(\bm{r})$ acts opposite to $\bm{\hat{r}}$, the dot product between two vectors simplify to a scalar calculation:
$$
\begin{aligned}
    F_g(r) \cdot dr = \left(-\frac{G m_1 m_2}{|r|^2}\right)(-|dr|)= \frac{Gm_1 m_2}{|r|^2} |dr|\\
    U = -\int_{\infty}^{R} \frac{Gm_1 m_2}{|r|^2} |dr| = -Gm_1 m_2 \left[-\frac{1}{|r|}\right]_R^\infty\\
    U = E_p = -G\frac{m_1 m_2}{|R|}
\end{aligned}
$$
The IB formula booklet label this equation with $r$ as $|R|$:
$$
\begin{aligned}
    E_p = -G \frac{m_1 m_2}{r}
\end{aligned}
$$

### Gravitation Potential
The gravitational potential ($V_g$) is the [gravitational potential energy](#gravitational-potential-energy) per unit mass of a body with a [displacement](../SpaceTimeAndMotions/ForcesAndMomentums.md#displacement) magnitude of $r$. For a body with mass $m_2$ interacting with the magnetic field of a body with mass $m_1$, the gravitational potential is:
$$
\begin{aligned}
    V_g = \frac{E_p}{m_2} = -G \frac{m_1 m_2}{m_2 r} = -G\frac{m_1}{r}
\end{aligned}
$$
The IB formula booklet label this equation with $M$ as $m_1$:
$$
\begin{aligned}
    V_g = -G \frac{M}{r}
\end{aligned}
$$

#### Change of Gravitational Potential
The work done ($W$) by a translation of a body with a mass ($m$) in a gravitational field by a point mass ($M$) corresponds to the change in gravitational potential energy ($\Delta E_p$) between two position with different gravitational potential:
$$
\begin{aligned}
    W = \Delta E_p = G\frac{Mm}{r_2} - G\frac{Mm}{r_1} = m \Delta V_g
\end{aligned}
$$

### Gravitational Field Strength
The gravitational field strength ($\bm{g}$) is the [acceleration](../SpaceTimeAndMotions/ForcesAndMomentums.md#acceleration) (force per unit mass) experience by bodies of mass ($m$) interacting with the [gravitational field](#gravitational-field), therefore, calculated as:
$$
\begin{aligned}
    g = \frac{F}{m}
\end{aligned}
$$

Since the [gravitational potential energy](#gravitational-potential-energy) is the minimum work required to translate a body from a infinite displacement to displacement at $r$, the work done by gravity is inherently in the opposite direction:
$$
\begin{aligned}
    W_g = -E_p = -U
\end{aligned}
$$

Therefore, the gravitational field strength can also be determined by the negative gradient of the gravitational potential $V_g$:
$$
\begin{aligned}
    g = -\nabla V_g\\
\end{aligned}
$$

Since the gravitational field is radial, $\nabla V_g$ can be determined in spherical axis:
$$
\begin{aligned}
    \nabla V_g = \frac{dV_g}{dr}\hat{r}\\
    \frac{dV_g}{dr} = \frac{d}{dr}\left(-\frac{GM}{r}\right) = G\frac{M}{r^2}\\
    g = -G\frac{M}{r^2} \hat{r}
\end{aligned}
$$

The IB formula booklet only considers magnitude, hence expressing only the magnitude of g:
$$
\begin{aligned}
    g = G\frac{M}{r^2}
\end{aligned}
$$

When expressing this with the average change of [gravitational potential $V_g = -G\frac{M}{r}$](#gravitation-potential), the magnitude of g is:
$$
\begin{aligned}
    g = -\frac{\Delta V_g}{\Delta r}
\end{aligned}
$$

### Graphical Presentation of Gravitational Field 
#### Gravitational Field Lines
Gravitational field lines represent the direction of acceleration (equivalent to the gradient of gravitational potential) in the gravitational field, and the hence the direction of force applied on mass interacting with the gravitational field.

#### Equipotential Surfaces
Equipotential surfaces represent the region in space with equivalent gravitational potential. Combining the gravitational field lines and equipotential surface allow the representation of a gravitational field with direction of gravitational field strength and magnitude of gravitational potential at different surfaces.

### Escape Velocity
The escape velocity ($v_e$) is the minimum speed required for a body to sustain attraction by gravitational field strength but continue to move to an infinite displacement without further external force applied. This is valid under two assumptions:
- Ballistic trajectory: No other force than gravitational force is applied on the body
- No gravitational fields from other masses are considered

These assumptions along with the conservation of mechanical energy allow the total energy change is zero ($E_f - E_i = 0$), where gravitational potential energy at infinite displacement is $0$ by definition, and kinetic energy at infinite displacement is $0$ due to velocity approaching $0$ with gravitational field strength decelerating along the whole trajectory. This means the $E_f = E_i = E_k + E_p = 0+0 = 0$, using their definitions:
$$
\begin{aligned}
    E_i = \frac{1}{2}mv_e^2 - \frac{GMm}{r} = 0\\
    \frac{1}{2}mv_e^2 = \frac{GMm}{r}\\
    v_e^2 = \frac{2GM}{r}\\
    v_e = \sqrt\frac{2GM}{r}
\end{aligned}
$$

### Orbital speed
Orbital speed is the required speed for an object to remain in stable orbit around a barycenter or a center of a body with significantly more mass.

:::warning
In IB, only the cases of orbiting a body with significantly more mass is present. The IB also assume all orbits to be circular instead of elliptic as stated by [Keplar's First Law](#first-law).
:::

In a stable circular orbit, equivalent force in the opposite direction is required to balance the [centripetal force](../SpaceTimeAndMotions/ForcesAndMomentums.md#centripetal-force) $F_c$ of [gravitational force](#newtons-law-of-universal-gravitation) $F_g$:
$$
\begin{aligned}
    F_{total} = F_g + (-F_c) = 0 \\
    -\frac{GMm}{r^2}\bm{\hat{r}} + -(-\frac{mv^2}{r}\bm{\hat{r}}) = 0\\
    \left(-\frac{GMm}{r^2} + \frac{mv^2}{r}\right)\bm{\hat{r}} = 0\\
    \frac{mv^2}{r} = \frac{GMm}{r^2}\\
    v = \sqrt{\frac{GM}{r}}
\end{aligned}
$$

:::info
IB does only consider the magnitude of orbital velocity, therefore, the equation above is the one written in the formula booklet. The angle of orbital velocity is dependent on the angular position $\theta$ of the orbital body:
$$
\begin{aligned}
    \bm{\hat{r}} = \cos \theta \hat{i} + \sin \theta \hat{j}
    \frac{d\bm{\hat{r}}}{d\theta} = - \sin \theta \hat{i} + \cos \theta \hat{j}
\end{aligned}
$$

As the derivative is a unit vector:

$$
\begin{aligned}
    \bm{\hat{\theta}} = - \sin \theta \hat{i} + \cos \theta \hat{j}
\end{aligned}
$$
:::

## Viscous Drag in Atmosphere
The viscous drag ($F_{drag}$) on an orbiting body is influenced by the altitude (due to atmospheric density decreases with height) and orbital velocity by the formula:
$$
\begin{aligned}
    F_{drag} = \frac{1}{2}C_dA\rho v^2\\
    \rho(h) = \rho_0 e^{-\frac{h}{H}}, \quad H \approx 8 km\\
    v = \sqrt{\frac{GM}{r}}\\
    F_{drag} = \frac{1}{2}C_d A \rho_0 e^{-\frac{h}{H}} \left(\frac{GM}{r}\right)\\
    \therefore F \propto \frac{e^{-\frac{h}{H}}}{r}
\end{aligned}
$$

where:

$\rho_0$: density at sea level

$h$: height

$H$: Scale height

Since $e^{-{\frac{h}{H}}}$ approaches $0$ at a faster rate than $\frac{1}{r}$ approaching $0$, therefore viscous drag decrease rapidly at increasing altitudes.

