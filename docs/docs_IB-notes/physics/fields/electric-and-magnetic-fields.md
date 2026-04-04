---
title: Electric and Magnetic Fields
sidebar_position: 2
---

## Point Charge

A point charge is a point particle with nonzero electric charge and infinitesimal volume.

## Coulombs Law

Also called Coulomb's inverse-square law states the magnitude of the attraction or repulsion
electrostatic force ($\bm{F}$) between two charges is directly proportional to the magnitude of
charges ($q$) and inversely proportional to the square of the magnitude of the separation
displacement ($\bm{r}$):

$$
\begin{aligned}
    |\bm{F}| \propto |q_1||q_2|, \quad |\bm{F}| \propto |\bm{r}|^2\\
    |\bm{F}| = k \frac{|q_1||q_2|}{|\bm{r}|^2}
\end{aligned}
$$

:::info Coulomb's Law can also be expressed in vector form, where the force exerted by $q_1$ on
$q_2$ is:

$$
\begin{aligned}
    \bm{F_{12}} = k \frac{q_1 q_2}{|r|^2} \hat{r_{12}} = -\bm{F_{21}}
\end{aligned}
$$

![Coulombs_law](/img/physics/CoulombsLaw.png) :::

Where the constant $k$ is named Coulomb's constant and is equal to:

$$
\begin{aligned}
    k = \frac{1}{4\pi \epsilon_0}
\end{aligned}
$$

:::info The derivation of Coulomb's constant can be possible with Maxwell's equations. Gauss's Law
states that the electric flux ($\Phi$) through any closed surface is equal to net electric charge
enclosed within the surface multiply by the inverse of permittivity of free space ($\epsilon_0$):

$$
\begin{aligned}
    \Phi = \oiint\limits_{S} E \cdot dA = \frac{Q}{\epsilon_0}
\end{aligned}
$$

For a point charge, symmetry implies a radial electric field, and hence a sphere enclosed surface
($4\pi r^2$), therefore, simplifying $\phi$ to:

$$
\begin{aligned}
    \Phi = 4\pi r^2 = \frac{Q}{\epsilon_0}\\
    E = \left(\frac{1}{4\pi\epsilon_0}\right)\left(\frac{Q}{r^2}\right)\\
    F = q_2 E = \frac{1}{4\pi \epsilon_0} \frac{|q_1||q_2|}{r^2}
\end{aligned}
$$

Coulomb's constant can now be identify as:

$$
\begin{aligned}
    k = \frac{1}{4\pi \epsilon_0}
\end{aligned}
$$

:::

## Electric Field

The electric field $\bm{E}$ with vector quantity of electrostatic force $\bm{F}$ exerted per unit of
magnitude of charge, evaluated as:

$$
\begin{aligned}
    \bm{E} = \lim_{q \rightarrow 0} \frac{F}{q}
\end{aligned}
$$

### Electric Potential Energy

Electric potential energy ($U$ or $E_p$ or $W$)is the minimum work required to translate charges
from infinite separation displacement to a position $\bm{r}$. Since the electrostatic force
$\bm{F_e}$ varies due to the displacement, the line integral of the opposing force
$\bm{F_{ext}} = \bm{F_e}$ from infinity $(\infty)$ to the potion $\bm{r}$ gives the work required to
translate the charges:

$$
\begin{aligned}
    U &= E_p = W = \int_\infty^{\bm{r}} F_{ext} \cdot d\bm{r} = -\int_\infty^{\bm{r}} F_e \cdot \bm{dr}\\
    U &= -\int_\infty^{\bm{r}} \left(k\frac{q_1 q_2}{|\bm{r}|^2}\bm{\hat{r}}\right) \cdot \bm{dr}
\end{aligned}
$$

Separating the magnitude and direction of $\bm{dr}$ gives $d|\bm{r}|\bm{\hat{r}}$, and hence
changing the bounds ($\bm{r} \rightarrow |\bm{r}|$):

$$
\begin{aligned}
    U &= -\int_\infty^{|\bm{r}|} \left(k\frac{q_1 q_2}{|\bm{r}|^2}\bm{\hat{r}}\right) \cdot d|\bm{r}|\bm{\hat{r}}\\
    U &= -\frac{q_1 q_2}{4\pi\epsilon_0} \int_\infty^{|\bm{r}|} \frac{1}{|\bm{r}|^2} d|\bm{r}|\\
    U &= -\frac{q_1 q_2}{4\pi\epsilon_0} \left[-\frac{1}{|\bm{r}|}\right]_\infty^{|\bm{r}|}\\
    U &= \frac{1}{4\pi \epsilon_0}\frac{q_1 q_2}{|\bm{r}|}
\end{aligned}
$$

This is written in the formula booklet with $r = |\bm{r}|$ and Coulomb's constant $k$:

$$
\begin{aligned}
    U = k\frac{q_1 q_2}{r}
\end{aligned}
$$

This implies the electric potential energy is a scalar quantity approaching $0$ at infinite
displacement $r \rightarrow \infty$.

### Electric Potential

The electric potential ($V_e$) is the electric potential energy of a point charge ($Q$ or $q_1$) at
displacement $\bm{r}$ per unit charge:

$$
\begin{aligned}
    V_e &= \frac{U}{q_2} = \frac{1}{4\pi \epsilon_0}\frac{q_1 q_2}{|\bm{r}|q_2} = \frac{1}{4\pi \epsilon_0}\frac{Q}{|\bm{r}|}\\
    V_e &= \frac{kQ}{r}, \quad r = |\bm{r}|
\end{aligned}
$$

### Electric Field Strength

The electric field strength ($\bm{E}$) is the force ($\bm{F_{12}}$) per unit charge of the affected
point charge ($q_2$) at a displacement ($\bm{r_{12}}$):

$$
\begin{aligned}
  \bm{E} = \frac{\bm{F_{12}}}{q_2} = \frac{1}{4\pi \epsilon_0} \frac{q_1 q_2}{|\bm{r}|^2}\bm{\hat{r_{12}}}
\end{aligned}
$$

This is written in the formula booklet with $d = |\bm{r}|$:

$$
\begin{aligned}
    E = k\frac{F}{d}
\end{aligned}
$$

The electric field strength is also the negative gradient of the electric potential ($V_e$):

$$
\begin{aligned}
    E = -\nabla V_e
\end{aligned}
$$

Since spherical symmetry implies the gradient of electric potential are equal for equal magnitude of
displacement $\bm{r}$:

$$
    \nabla V_e = \frac{dV_e}{d|\bm{r}|}\bm{\hat{r}}\\
    \frac{dV_e}{d|\bm{r}|} = \frac{d}{d|\bm{r}|}\left(\frac{kQ}{|\bm{r}|}\right) = -k\frac{Q}{|\bm{r}|^2}\\
    E = k \frac{Q}{|\bm{r}|^2}\bm{\hat{r}}
$$

When expressing the electric field strength with the average electric potential change, and
expressing $r = |\bm{r}|$, the magnitude of $E$ is:

$$
\begin{aligned}
    E = -\frac{\Delta V_e}{\Delta r}
\end{aligned}
$$

### Graphical Presentation of Electric Field

#### Electric Field Lines

Electric field lines present the direction of electric field strength.

#### Equipotential Surfaces

Equipotential surfaces are surfaces with equivalent electric potential.

## Millikan's Experiment

The Millikan's experiment was conducted in 1909 to determine the value of elementary charge. The
experiment was passing ionized oil drops with charge $q$ within a region between two charged metal
plates with a electric potential $V_e$, and displacement $\bm{d}$. The IB include a simplified
calculation for elementary charge by ignoring buoyance force, where the electrostatic force
($\bm{F_e}$) equal to the opposite of gravitational force ($\bm{F_g}$):

$$
\begin{aligned}
    \bm{F_g} &= -\bm{F_e}\\
    \bm{F_g} &= m\bm{g}\\
    -\bm{F_e} &= -qE = -q\left(-\frac{V_e}{\bm{d}}\right)\\
    m\bm{g} &= q\frac{V_e}{\bm{d}}\\
    q &= \frac{m\bm{g}\bm{d}}{V_e}
\end{aligned}
$$

---

## Electric Field Between Parallel Plates

When two parallel conducting plates are separated by a distance $d$ and a potential difference $V$
is applied across them, a uniform electric field is created between the plates:

$$
E = \frac{V}{d}
$$

Key properties:

- The field is **uniform** (constant magnitude and direction) between the plates.
- The field lines are parallel and equally spaced.
- Fringing occurs at the edges of the plates (the field is not perfectly uniform there, but this is
  usually neglected in IB problems).

### Worked Example: Parallel Plates

**Question:** Two parallel plates are separated by 2.0 cm with a potential difference of 500 V. An
electron is placed midway between the plates. What is the force on the electron and the
acceleration?

**Solution:**

$$
E = \frac{V}{d} = \frac{500}{0.020} = 2.5 \times 10^4 \text{ V/m}
$$

$$
F = eE = (1.60 \times 10^{-19})(2.5 \times 10^4) = 4.0 \times 10^{-15} \text{ N}
$$

$$
a = \frac{F}{m_e} = \frac{4.0 \times 10^{-15}}{9.11 \times 10^{-31}} = 4.39 \times 10^{15} \text{ m/s}^2
$$

**Exam tip:** Remember that the force on an electron is directed from the negative plate toward the
positive plate (opposite to the field direction, since the electron has negative charge).

---

## Electric Field Strength Due to a Point Charge

The electric field strength at a distance $r$ from a point charge $Q$ is:

$$
E = \frac{kQ}{r^2} = \frac{Q}{4\pi\epsilon_0 r^2}
$$

Direction: Radially outward from a positive charge, radially inward toward a negative charge.

### Superposition of Electric Fields

When multiple charges are present, the total electric field at any point is the **vector sum** of
the individual fields:

$$
\bm{E}_{\text{total}} = \bm{E}_1 + \bm{E}_2 + \bm{E}_3 + \cdots
$$

### Worked Example: Superposition

**Question:** Two point charges, $q_1 = +3.0 \text{ \mu C}$ and $q_2 = -5.0 \text{ \mu C}$, are
placed 20 cm apart. Find the electric field strength at the midpoint between them.

**Solution:**

Distance from each charge to midpoint: $r = 0.10$ m.

$$
E_1 = \frac{kq_1}{r^2} = \frac{(8.99 \times 10^9)(3.0 \times 10^{-6})}{(0.10)^2} = 2.70 \times 10^6 \text{ V/m} \quad \text{(away from } q_1)
$$

$$
E_2 = \frac{k|q_2|}{r^2} = \frac{(8.99 \times 10^9)(5.0 \times 10^{-6})}{(0.10)^2} = 4.50 \times 10^6 \text{ V/m} \quad \text{(toward } q_2)
$$

Since both fields point in the **same direction** at the midpoint (from $q_1$ toward $q_2$):

$$
E_{\text{total}} = E_1 + E_2 = 2.70 \times 10^6 + 4.50 \times 10^6 = 7.20 \times 10^6 \text{ V/m}
$$

---

## Electric Potential

The electric potential ($V_e$) at a point is the electric potential energy per unit charge at that
point. It is a **scalar** quantity.

For a point charge $Q$:

$$
V_e = \frac{kQ}{r}
$$

Key properties:

- $V_e$ is positive near positive charges and negative near negative charges.
- $V_e = 0$ at infinity (by convention).
- The electric field strength is the negative gradient of the potential:
  $E = -\frac{\Delta V_e}{\Delta r}$.

### Equipotential Surfaces

Equipotential surfaces are surfaces of constant electric potential. Key properties:

- Electric field lines are always **perpendicular** to equipotential surfaces.
- No work is done moving a charge along an equipotential surface.
- For a point charge, equipotential surfaces are concentric spheres.
- For parallel plates, equipotential surfaces are parallel planes.

---

## Capacitors

A capacitor is a device that stores electric charge and energy. The simplest form consists of two
parallel conducting plates separated by an insulator (dielectric).

### Capacitance

Capacitance ($C$) is defined as the charge stored per unit potential difference:

$$
C = \frac{Q}{V}
$$

The unit of capacitance is the farad (F). Typical capacitor values range from picofarads (pF) to
millifarads (mF).

### Capacitance of a Parallel Plate Capacitor

$$
C = \frac{\epsilon_0 A}{d}
$$

where:

- $\epsilon_0 = 8.85 \times 10^{-12}$ F/m is the permittivity of free space
- $A$ is the area of one plate (m²)
- $d$ is the separation between plates (m)

### Energy Stored in a Capacitor

$$
W = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}
$$

These three expressions are equivalent (using $Q = CV$). Use whichever is most convenient given the
known quantities.

### Worked Example: Capacitor Energy

**Question:** A 100 $\mu$F capacitor is charged to a potential difference of 200 V. How much energy
does it store?

**Solution:**

$$
W = \frac{1}{2}CV^2 = \frac{1}{2}(100 \times 10^{-6})(200)^2 = \frac{1}{2}(100 \times 10^{-6})(40000) = 2.0 \text{ J}
$$

---

## Magnetic Fields

### Sources of Magnetic Fields

- **Permanent magnets:** Produce a magnetic field due to the alignment of magnetic domains.
- **Current-carrying conductors:** A current produces a magnetic field around it (Ampere's law).
- **Earth:** The Earth has a magnetic field, approximately that of a dipole, with the geographic
  south pole near the magnetic north pole.

### Magnetic Field Lines

Magnetic field lines represent the direction of the magnetic field:

- They point from **north to south** outside a magnet.
- They form **closed loops** (they always form continuous loops, unlike electric field lines).
- The density of field lines indicates the strength of the field.
- Field lines never cross.

### Magnetic Field of a Long Straight Wire

The magnetic field at a distance $r$ from a long straight wire carrying current $I$ is:

$$
B = \frac{\mu_0 I}{2\pi r}
$$

where $\mu_0 = 4\pi \times 10^{-7}$ Tm/A is the permeability of free space.

The direction is given by the **right-hand grip rule**: grip the wire with your right hand, thumb
pointing in the direction of conventional current, and your fingers curl in the direction of the
magnetic field.

### Magnetic Field Inside a Solenoid

A solenoid is a long coil of wire. Inside an ideal solenoid:

$$
B = \mu_0 n I
$$

where $n$ is the number of turns per unit length ($n = N/L$).

The field inside a solenoid is approximately **uniform** and parallel to the axis. The field outside
is approximately zero.

---

## Comparison: Electric vs Magnetic Fields

| Property            | Electric Field                       | Magnetic Field                                 |
| :------------------ | :----------------------------------- | :--------------------------------------------- |
| Source              | Stationary or moving charges         | Moving charges (currents)                      |
| Force on charge     | $F = qE$ (parallel to E)             | $F = qvB\sin\theta$ (perpendicular to v and B) |
| Does work on charge | Yes                                  | No (always perpendicular to velocity)          |
| Field lines         | Start on + charges, end on - charges | Form closed loops (no monopoles)               |
| Units               | V/m or N/C                           | Tesla (T)                                      |
| Constant            | $\epsilon_0$ (permittivity)          | $\mu_0$ (permeability)                         |

---

## Exam Tips for D.2 (Electric and Magnetic Fields)

1. **Coulomb's law vs gravitational force:** Both are inverse-square laws, but electric forces can
   be attractive or repulsive, while gravitational forces are always attractive.

2. **Sign conventions for electric potential:** The electric potential energy of two like charges is
   positive (repulsive); for two unlike charges, it is negative (attractive). The potential energy
   is zero at infinite separation.

3. **Distinguish between electric potential ($V_e$) and electric field strength ($E$):** Potential
   is a scalar; field strength is a vector. They are related by $E = -\Delta V_e / \Delta r$.

4. **For parallel plate problems:** Always identify whether you need $E = V/d$ or
   $E = \sigma / \epsilon_0$ (the latter is beyond IB scope but good to know). The IB formula is
   $E = V/d$.

5. **Millikan's experiment:** Be able to explain how balancing gravitational and electric forces on
   a charged oil drop allows the determination of the elementary charge. The key equation is
   $q = mgd/V$.

6. **Capacitors:** Remember that capacitance depends only on the geometry of the plates ($A$, $d$)
   and the dielectric, not on the charge or voltage. The energy stored can be expressed in three
   equivalent forms — use the one that matches your given data.

7. **Unit conversions:** Electric fields are often in V/m or N/C (equivalent). Capacitance is in
   farads (F), but practical values are in $\mu$F, nF, or pF. Be comfortable converting between SI
   prefixes.
