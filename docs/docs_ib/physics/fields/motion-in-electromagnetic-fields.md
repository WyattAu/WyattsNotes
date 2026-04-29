---
title: Motion in Electromagnetic Fields
slug: motion-in-electromagnetic-fields
description: Comprehensive guide to motion in electromagnetic fields for the International
  Baccalaureate.
---


## Uniform Fields

A uniform field ($\bm{F}$) is a field with spatial invariance, therefore, a zero gradient
($\nabla \bm{F} = 0$).

## Test Charge

A test charge is an idealized particle where all other properties are assumed to be negligible
except for the charge.

## Lorentz Force Law

[Coulomb's Law](./electric-and-magnetic-fields.md#coulombs-law) is only valid for electrostatics, as
magnetic force is also induced by moving charge. The combined force ($\bm{F}$) on the test charge
($q$) can be governed by Lorentz force law:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;F&rbrace; = q(\bm&lbrace;E&rbrace;+\bm&lbrace;v&rbrace; \times \bm&lbrace;B&rbrace;)
\end&lbrace;aligned&rbrace;
$$

When only considering the magnitude of the force:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;F&rbrace; = q(|\bm&lbrace;E&rbrace;| + |\bm&lbrace;v&rbrace; \times \bm&lbrace;B&rbrace;|) = q(|\bm&lbrace;E&rbrace;|+|\bm&lbrace;v&rbrace;||\bm&lbrace;B&rbrace;|sin\theta)
\end&lbrace;aligned&rbrace;
$$

The magnitude form is written in the IB formula booklet separately for magnetic and electric force:

$$
\begin&lbrace;aligned&rbrace;
    F &= qvB \sin \theta\\
    F &= qE\\
    E &= \frac&lbrace;F&rbrace;&lbrace;q&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Motion of Current in Electromagnetic Field

The total force ($\bm{F}$) on a current ($I$) is determined by the combine force on the total number
($N$) of moving charges ($q$) in the current. As the dimensions of a electron is negligible when
comparing to the cross section of a wire, the flow of electrons $I$ can be approximated by a
continuum of current density ($\bm{J} = nq\bm{v}$), where $n$ is the density of charge carriers, and
since the electric field have a negligible effect, only the force applied by magnetic field
($\bm{B}$ is accounted):

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;F_m&rbrace; &= nV(q(v\times \bm&lbrace;B&rbrace;)) = V(\bm&lbrace;J&rbrace;\times\bm&lbrace;B&rbrace;)\\
    \bm&lbrace;F_m&rbrace; &= \int_C \bm&lbrace;J&rbrace;\times\bm&lbrace;B&rbrace; dV
\end&lbrace;aligned&rbrace;
$$

For current of a conductor with constant cross-sectional area ($A$) and length displacement of
($\bm{L}$), the volume can be evaluated as ($V = AL$), leading to a force of:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;F_m&rbrace; = \int I(d\bm&lbrace;L&rbrace;)\times B = I \int \bm&lbrace;B&rbrace;\times d\bm&lbrace;L&rbrace;
\end&lbrace;aligned&rbrace;
$$

Since IB only considers interactions of current with uniform electric fields, magnetic field
$\bm{B}$ is constant, evaluating the force to:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;F_m&rbrace; = I(\bm&lbrace;L&rbrace;\times\bm&lbrace;B&rbrace;)
\end&lbrace;aligned&rbrace;
$$

Since IB considers the direction separately by the use of right hand rule (Motor effect), the
magnitude of the force is expressed as:

$$
\begin&lbrace;aligned&rbrace;
    |\bm&lbrace;F_m&rbrace;| = F = I|\bm&lbrace;L&rbrace;\times\bm&lbrace;B&rbrace;| = I|\bm&lbrace;L&rbrace;||\bm&lbrace;B&rbrace;|\sin\theta = BIL\sin\theta
\end&lbrace;aligned&rbrace;
$$

This is expressed in the formula booklet $D.3$.

#### Motion Between Currents

According to Ampere's Law, current ($I_1$) generates a magnetic field ($\bm{B_1}$), due to
rotational symmetry around the direction of current, the magnetic field can be express using
cylindrical coordinates ($\hat{\phi}$) shows:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;B_1&rbrace; = \frac&lbrace;\mu_0 I_1&rbrace;&lbrace;2\pi r&rbrace;\hat&lbrace;\bm&lbrace;\phi&rbrace;&rbrace;
\end&lbrace;aligned&rbrace;
$$

For a $\hat{\phi} = \hat{y}$ where $\hat{y}$ is a unit vector perpendicular to other current
($I_2$). Using the Lorentz Force Law, the magnetic force ($F_{12}$) experienced by the other current
is:

$$
\begin&lbrace;aligned&rbrace;
    \bm&lbrace;F_&lbrace;12&rbrace;&rbrace; &= I_2(\bm&lbrace;L&rbrace;\times\bm&lbrace;B_1&rbrace;)\\
    \bm&lbrace;F_&lbrace;12&rbrace;&rbrace; &= I_2L(\hat&lbrace;z&rbrace;\times&lbrace;B_1&rbrace;), \quad \hat&lbrace;z&rbrace; = \hat&lbrace;\bm&lbrace;L&rbrace;&rbrace;\\
    \bm&lbrace;F_&lbrace;12&rbrace;&rbrace; &= I_2L\left(\hat&lbrace;z&rbrace;\times\frac&lbrace;\mu_0 I_1&rbrace;&lbrace;2\pi r&rbrace;\hat&lbrace;y&rbrace;\right)\\
    \bm&lbrace;F_&lbrace;12&rbrace;&rbrace; &= -\frac&lbrace;\mu_0 I_1 I_2 L&rbrace;&lbrace;2\pi r&rbrace;\hat&lbrace;x&rbrace;, \quad \hat&lbrace;y&rbrace; \times \hat&lbrace;z&rbrace; = -\hat&lbrace;x&rbrace;
\end&lbrace;aligned&rbrace;
$$

Similar to before the IB expresses the magnitude form of this equation in the formula booklet:

$$
\begin&lbrace;aligned&rbrace;
    |\bm&lbrace;F_&lbrace;12&rbrace;&rbrace;| = F = -\frac&lbrace;\mu_0 I_1 I_2 L&rbrace;&lbrace;2\pi r&rbrace;\hat&lbrace;x&rbrace; = \mu_0 \frac&lbrace;I_1 I_2 L&rbrace;&lbrace;2\pi r&rbrace;
\end&lbrace;aligned&rbrace;
$$

Where the direction of motion on current can be determined by right hand rule (motor effect).

---

## Force on a Stationary Charge in an Electric Field

When a charge $q$ is placed in an electric field $\bm{E}$, it experiences a force:

$$
\bm&lbrace;F_E&rbrace; = q\bm&lbrace;E&rbrace;
$$

Key points:

- The force is parallel to the electric field for positive charges and antiparallel for negative
  charges.
- The magnitude is $F = qE$.
- This force can accelerate the charge along the direction of the field line.

## Force on a Moving Charge in a Magnetic Field

When a charge $q$ moves with velocity $\bm{v}$ through a magnetic field $\bm{B}$, it experiences the
magnetic component of the Lorentz force:

$$
\bm&lbrace;F_B&rbrace; = q(\bm&lbrace;v&rbrace; \times \bm&lbrace;B&rbrace;)
$$

Key points:

- The magnetic force is always **perpendicular** to both $\bm{v}$ and $\bm{B}$.
- The magnetic force does **no work** on the charge (since $W = F \cdot d$ and $F \perp v$), so the
  kinetic energy of the charge does not change.
- The magnitude is $F = qvB \sin\theta$, where $\theta$ is the angle between $\bm{v}$ and $\bm{B}$.
- When $\bm{v} \perp \bm{B}$ ($\theta = 90^\circ$), the force is maximum: $F = qvB$.
- When $\bm{v} \parallel \bm{B}$ ($\theta = 0^\circ$ or $180^\circ$), the force is zero.

### Right-Hand Rule for Magnetic Force

Point your fingers in the direction of $\bm{v}$ (for a positive charge), curl them towards $\bm{B}$,
and your thumb points in the direction of $\bm{F}$. For a negative charge (e.g. an electron), the
force is in the **opposite** direction.

---

## Circular Motion of a Charged Particle in a Magnetic Field

When a charged particle moves perpendicular to a uniform magnetic field ($\bm{v} \perp \bm{B}$), the
magnetic force provides the centripetal force, causing the particle to move in a circular path.

### Derivation of the Radius

Since the magnetic force is always perpendicular to the velocity, it acts as the centripetal force:

$$
F_B = F_c
$$

$$
qvB = \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace;
$$

Solving for the radius $r$:

$$
r = \frac&lbrace;mv&rbrace;&lbrace;qB&rbrace;
$$

This is one of the most important results in this topic. Key observations:

- The radius is **proportional to the momentum** ($r \propto mv$).
- The radius is **inversely proportional to the magnetic field strength** ($r \propto 1/B$).
- The radius is **inversely proportional to the charge** ($r \propto 1/q$).

### Period and Frequency

The time for one complete revolution (the period $T$) is:

$$
T = \frac&lbrace;2\pi r&rbrace;&lbrace;v&rbrace; = \frac&lbrace;2\pi m&rbrace;&lbrace;qB&rbrace;
$$

The cyclotron frequency $f$ is:

$$
f = \frac&lbrace;1&rbrace;&lbrace;T&rbrace; = \frac&lbrace;qB&rbrace;&lbrace;2\pi m&rbrace;
$$

**Important:** The period and frequency are **independent of the speed** and radius. This means all
particles of the same charge-to-mass ratio orbit with the same period, regardless of their speed.
This principle is used in the cyclotron particle accelerator.

### Worked Example: Electron in a Magnetic Field

**Question:** An electron ($m_e = 9.11 \times 10^{-31}$ kg, $q = -1.60 \times 10^{-19}$ C) enters a
uniform magnetic field of $B = 0.50$ T with a speed of $v = 3.0 \times 10^6$ m/s, perpendicular to
the field. Find the radius and period of the circular path.

**Solution:**

$$
r = \frac&lbrace;m_e v&rbrace;&lbrace;|q| B&rbrace; = \frac&lbrace;(9.11 \times 10^&lbrace;-31&rbrace;)(3.0 \times 10^6)&rbrace;&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.50)&rbrace; = 3.42 \times 10^&lbrace;-5&rbrace; \mathrm&lbrace; m&rbrace; = 34.2 \mathrm&lbrace; \mu m&rbrace;
$$

$$
T = \frac&lbrace;2\pi m_e&rbrace;&lbrace;|q| B&rbrace; = \frac&lbrace;2\pi (9.11 \times 10^&lbrace;-31&rbrace;)&rbrace;&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.50)&rbrace; = 7.16 \times 10^&lbrace;-11&rbrace; \mathrm&lbrace; s&rbrace;
$$

**Exam tip:** When dealing with electrons, remember that the charge is negative. Use the magnitude
of the charge in the radius/period formulae, and apply the right-hand rule in reverse to find the
direction of the force.

---

## Helical Motion

When a charged particle enters a magnetic field at an angle $\theta$ (not $90^\circ$) to the field,
the velocity component parallel to $\bm{B}$ ($v_\parallel = v \cos\theta$) is unaffected by the
magnetic force. Only the perpendicular component ($v_\perp = v \sin\theta$) causes circular motion.
The result is a **helical** (spiral) path.

- The radius of the helix: $r = \frac{mv_\perp}{qB} = \frac{mv \sin\theta}{qB}$
- The pitch (distance along the field per revolution):
  $p = v_\parallel \cdot T = \frac{2\pi m v \cos\theta}{qB}$

---

## The Velocity Selector

A velocity selector uses crossed (perpendicular) electric and magnetic fields to select particles of
a specific velocity.

### Principle

A particle of charge $q$ and velocity $v$ enters a region where an electric field $\bm{E}$ and a
magnetic field $\bm{B}$ are perpendicular to each other and to the direction of motion.

The electric force and magnetic force act in opposite directions:

- Electric force: $F_E = qE$ (in one direction)
- Magnetic force: $F_B = qvB$ (in the opposite direction)

For a particle to pass through undeflected, the forces must balance:

$$
F_E = F_B
$$

$$
qE = qvB
$$

$$
v = \frac&lbrace;E&rbrace;&lbrace;B&rbrace;
$$

Only particles with this exact velocity pass through. Particles with $v \gt E/B$ are deflected one
way; particles with $v \lt E/B$ are deflected the other way.

### Worked Example: Velocity Selector

**Question:** A velocity selector has $E = 1.5 \times 10^5$ V/m and $B = 0.050$ T. What velocity is
selected?

**Solution:**

$$
v = \frac&lbrace;E&rbrace;&lbrace;B&rbrace; = \frac&lbrace;1.5 \times 10^5&rbrace;&lbrace;0.050&rbrace; = 3.0 \times 10^6 \mathrm&lbrace; m/s&rbrace;
$$

**Exam tip:** The velocity selector does not depend on the charge or mass of the particle — only on
$E$ and $B$. This means it selects a velocity, not a specific particle type.

---

## The Mass Spectrometer

A mass spectrometer is a device that separates ions by their mass-to-charge ratio. It is used in
chemistry, forensics, environmental science, and many other fields.

### How It Works

1. **Ionisation:** Atoms are ionised (given a charge $+q$, typically $+e$).
2. **Acceleration:** Ions are accelerated through a potential difference $V$. The kinetic energy
   gained equals the electrical potential energy lost:

$$
qV = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

3. **Velocity selection:** Ions pass through a velocity selector, so all entering the deflection
   region have the same velocity $v = E/B$.
4. **Magnetic deflection:** Ions enter a region of uniform magnetic field $\bm{B}$ (perpendicular to
   their velocity) and follow a semicircular path. The radius of the path depends on the mass:

$$
r = \frac&lbrace;mv&rbrace;&lbrace;qB&rbrace;
$$

5. **Detection:** Ions of different masses hit the detector at different positions. Since $v$ is the
   same for all ions, the radius is proportional to mass:

$$
r \propto m
$$

### Combining the Equations

From the acceleration stage: $v = \sqrt{\frac{2qV}{m}}$

Substituting into the radius equation:

$$
r = \frac&lbrace;m&rbrace;&lbrace;qB&rbrace; \sqrt&lbrace;\frac&lbrace;2qV&rbrace;&lbrace;m&rbrace;&rbrace; = \frac&lbrace;1&rbrace;&lbrace;B&rbrace; \sqrt&lbrace;\frac&lbrace;2mV&rbrace;&lbrace;q&rbrace;&rbrace;
$$

This gives the mass-to-charge ratio:

$$
\frac&lbrace;m&rbrace;&lbrace;q&rbrace; = \frac&lbrace;B^2 r^2&rbrace;&lbrace;2V&rbrace;
$$

### Worked Example: Mass Spectrometer

**Question:** In a mass spectrometer, singly charged ions ($q = +e = 1.60 \times 10^{-19}$ C) are
accelerated through $V = 5000$ V and enter a magnetic field of $B = 0.20$ T. Two isotopes are
detected at radii of $r_1 = 10.2$ cm and $r_2 = 10.8$ cm. Calculate the mass of each isotope in
atomic mass units (u), where $1 \mathrm{ u} = 1.66 \times 10^{-27}$ kg.

**Solution:**

Using $\frac{m}{q} = \frac{B^2 r^2}{2V}$:

**Isotope 1:**

$$
m_1 = \frac&lbrace;q B^2 r_1^2&rbrace;&lbrace;2V&rbrace; = \frac&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.20)^2(0.102)^2&rbrace;&lbrace;2(5000)&rbrace; = \frac&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.04)(0.0104)&rbrace;&lbrace;10000&rbrace; = 6.67 \times 10^&lbrace;-26&rbrace; \mathrm&lbrace; kg&rbrace;
$$

$$
m_1 = \frac&lbrace;6.67 \times 10^&lbrace;-26&rbrace;&rbrace;&lbrace;1.66 \times 10^&lbrace;-27&rbrace;&rbrace; = 40.2 \mathrm&lbrace; u&rbrace;
$$

This is consistent with calcium-40.

**Isotope 2:**

$$
m_2 = \frac&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.04)(0.108)^2&rbrace;&lbrace;10000&rbrace; = \frac&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.04)(0.01166)&rbrace;&lbrace;10000&rbrace; = 7.47 \times 10^&lbrace;-26&rbrace; \mathrm&lbrace; kg&rbrace;
$$

$$
m_2 = \frac&lbrace;7.47 \times 10^&lbrace;-26&rbrace;&rbrace;&lbrace;1.66 \times 10^&lbrace;-27&rbrace;&rbrace; = 45.0 \mathrm&lbrace; u&rbrace;
$$

This is consistent with scandium-45.

---

## Force on a Current-Carrying Conductor

When a current-carrying wire is placed in a magnetic field, the moving charges within the wire
experience a force, which is transmitted to the wire as a whole.

### Derivation

Consider a wire of length $L$ carrying current $I$ in a magnetic field $\bm{B}$. If the wire
contains $N$ charge carriers, each with charge $q$, moving with drift velocity $v_d$:

$$
F = Nqv_d B \sin\theta
$$

Since $I = nqv_d A$ (where $n$ is charge carrier density and $A$ is cross-sectional area), and
$N = nAL$:

$$
F = (nAL)(qv_d B \sin\theta) = I(L)(B \sin\theta) = BIL \sin\theta
$$

The direction is given by Fleming's Left-Hand Rule (motor effect):

- **First finger:** Direction of the magnetic field ($\bm{B}$)
- **Second finger:** Direction of conventional current ($I$)
- **Thumb:** Direction of the force ($\bm{F}$)

---

## Exam Tips for D.3

1. **Always identify what is perpendicular.** The magnetic force depends on the angle between
   $\bm{v}$ and $\bm{B}$. If the question does not state the angle, it is usually $90^\circ$.

2. **Electrons are negative.** When working with electrons, the force direction is **opposite** to
   what the right-hand rule gives. Either use the left hand for negative charges, or reverse the
   right-hand rule result.

3. **Magnetic force does no work.** Since $\bm{F} \perp \bm{v}$, the kinetic energy of the particle
   does not change in a magnetic field. Only electric fields can change the kinetic energy of a
   charged particle.

4. **Distinguish between electric and magnetic force mechanisms.** Electric forces can accelerate
   charges (change speed); magnetic forces only change direction (perpendicular to velocity).

5. **Check units carefully.** In mass spectrometer problems, ensure all quantities are in SI units
   (meters, tesla, volts, coulombs, kilograms) before substituting into formulae.

6. **The force between parallel currents** is attractive when currents flow in the **same**
   direction and repulsive when they flow in **opposite** directions. This is analogous to the force
   between parallel magnetic field lines.

---

## Uniform Electric and Magnetic Fields: Summary

### Uniform Electric Field

A uniform electric field exists between two parallel conducting plates. Key properties:

- Field strength: $E = \frac{V}{d}$ (constant between the plates).
- A charged particle experiences constant force: $F = qE$, leading to constant acceleration:
  $a = \frac{qE}{m}$.
- The trajectory is **parabolic** (analogous to projectile motion in a gravitational field).
- The electric field **does work** on the charge, changing its kinetic energy.

### Uniform Magnetic Field

A uniform magnetic field is produced inside a long solenoid or between the poles of a strong magnet.

- The force on a moving charge is: $F = qvB\sin\theta$.
- The force is always **perpendicular** to the velocity, so it changes direction but not speed.
- The trajectory is **circular** (if $\bm{v} \perp \bm{B}$) or **helical** (if there is a velocity
  component parallel to $\bm{B}$).
- The magnetic force does **no work**: $W = \bm{F} \cdot \bm{d} = 0$ since $\bm{F} \perp \bm{v}$.

### Comparison Table

| Property            | Uniform Electric Field                  | Uniform Magnetic Field                      |
| :------------------ | :-------------------------------------- | :------------------------------------------ |
| Force on charge     | $F = qE$ (constant)                     | $F = qvB\sin\theta$ (velocity-dependent)    |
| Direction of force  | Parallel to $\bm{E}$                    | Perpendicular to both $\bm{v}$ and $\bm{B}$ |
| Does work on charge | Yes ($W = qEd$)                         | No ($\bm{F} \perp \bm{v}$)                  |
| Effect on speed     | Changes speed (accelerates/decelerates) | Does not change speed                       |
| Trajectory          | Parabolic                               | Circular or helical                         |
| Kinetic energy      | Changes                                 | Constant                                    |

---

## Worked Example: The Cyclotron

**Question:** A cyclotron is used to accelerate protons ($m_p = 1.67 \times 10^{-27}$ kg,
$q = +1.60 \times 10^{-19}$ C) to a maximum speed of $2.0 \times 10^7$ m/s. The magnetic field
strength is $B = 1.2$ T. a) What is the radius of the cyclotron at maximum speed? b) What is the
cyclotron frequency? c) What is the maximum kinetic energy of the protons in electron-volts?

**Solution:**

**a) Maximum radius:**

$$
r_&lbrace;\max&rbrace; = \frac&lbrace;m_p v_&lbrace;\max&rbrace;&rbrace;&lbrace;qB&rbrace; = \frac&lbrace;(1.67 \times 10^&lbrace;-27&rbrace;)(2.0 \times 10^7)&rbrace;&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(1.2)&rbrace; = \frac&lbrace;3.34 \times 10^&lbrace;-20&rbrace;&rbrace;&lbrace;1.92 \times 10^&lbrace;-19&rbrace;&rbrace; = 0.174 \mathrm&lbrace; m&rbrace; = 17.4 \mathrm&lbrace; cm&rbrace;
$$

**b) Cyclotron frequency:**

$$
f = \frac&lbrace;qB&rbrace;&lbrace;2\pi m_p&rbrace; = \frac&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(1.2)&rbrace;&lbrace;2\pi(1.67 \times 10^&lbrace;-27&rbrace;)&rbrace; = \frac&lbrace;1.92 \times 10^&lbrace;-19&rbrace;&rbrace;&lbrace;1.05 \times 10^&lbrace;-26&rbrace;&rbrace; = 1.83 \times 10^7 \mathrm&lbrace; Hz&rbrace; = 18.3 \mathrm&lbrace; MHz&rbrace;
$$

**c) Maximum kinetic energy:**

$$
E_k = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m_p v_&lbrace;\max&rbrace;^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(1.67 \times 10^&lbrace;-27&rbrace;)(2.0 \times 10^7)^2 = 3.34 \times 10^&lbrace;-13&rbrace; \mathrm&lbrace; J&rbrace;
$$

Converting to electron-volts:

$$
E_k = \frac&lbrace;3.34 \times 10^&lbrace;-13&rbrace;&rbrace;&lbrace;1.60 \times 10^&lbrace;-19&rbrace;&rbrace; = 2.09 \times 10^6 \mathrm&lbrace; eV&rbrace; = 2.09 \mathrm&lbrace; MeV&rbrace;
$$

**Key insight:** The cyclotron frequency is independent of the proton's speed and radius. The
alternating electric field must oscillate at exactly this frequency so that the proton is always
accelerated as it crosses the gap between the dees.

---

## Worked Example: Velocity Selector with Mass Separation

**Question:** In a mass spectrometer, ions are first passed through a velocity selector with
$E = 6.0 \times 10^4$ V/m and $B_1 = 0.20$ T. They then enter a deflection region with $B_2 = 0.50$
T. Singly charged ions ($q = +e$) of two isotopes of neon are detected at radii $r_1 = 11.6$ cm and
$r_2 = 12.5$ cm. Calculate the mass of each isotope in atomic mass units.

**Solution:**

**Step 1:** Find the selected velocity:

$$
v = \frac&lbrace;E&rbrace;&lbrace;B_1&rbrace; = \frac&lbrace;6.0 \times 10^4&rbrace;&lbrace;0.20&rbrace; = 3.0 \times 10^5 \mathrm&lbrace; m/s&rbrace;
$$

**Step 2:** Use $r = \frac{mv}{qB_2}$ to find each mass:

**Isotope 1:**

$$
m_1 = \frac&lbrace;qB_2 r_1&rbrace;&lbrace;v&rbrace; = \frac&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.50)(0.116)&rbrace;&lbrace;3.0 \times 10^5&rbrace; = 3.09 \times 10^&lbrace;-26&rbrace; \mathrm&lbrace; kg&rbrace;
$$

$$
m_1 = \frac&lbrace;3.09 \times 10^&lbrace;-26&rbrace;&rbrace;&lbrace;1.66 \times 10^&lbrace;-27&rbrace;&rbrace; = 18.6 \mathrm&lbrace; u&rbrace;
$$

**Isotope 2:**

$$
m_2 = \frac&lbrace;(1.60 \times 10^&lbrace;-19&rbrace;)(0.50)(0.125)&rbrace;&lbrace;3.0 \times 10^5&rbrace; = 3.33 \times 10^&lbrace;-26&rbrace; \mathrm&lbrace; kg&rbrace;
$$

$$
m_2 = \frac&lbrace;3.33 \times 10^&lbrace;-26&rbrace;&rbrace;&lbrace;1.66 \times 10^&lbrace;-27&rbrace;&rbrace; = 20.1 \mathrm&lbrace; u&rbrace;
$$

These correspond to neon-20 (20.2 u) and neon-22 (21.9 u) — the slight discrepancy is due to
simplified values.

---

## Common Pitfalls

1. **Forgetting the angle in $F = qvB\sin\theta$.** If the question does not specify the angle, it
   is usually $90^\circ$, making $\sin\theta = 1$. However, if the velocity has a component parallel
   to $\bm{B}$, use $\sin\theta$ with the perpendicular component only.

2. **Sign of electron charge.** The Lorentz force on an electron is in the **opposite** direction to
   $\bm{v} \times \bm{B}$. Use the right-hand rule and then reverse the result, or use the left hand
   for negative charges.

3. **Confusing electric and magnetic force work.** Electric fields do work on charges and change
   kinetic energy. Magnetic fields do zero work — they change direction only.

4. **Incorrectly using the charge sign in the radius formula.** The radius formula $r = mv/(|q|B)$
   uses the magnitude of the charge. The sign of the charge only affects the direction of the
   circular motion (clockwise vs counterclockwise).

5. **Assuming all particles have the same charge.** In mass spectrometer problems, always check
   whether ions are singly or doubly charged. The charge affects both the selected velocity (no —
   velocity selector is charge-independent) and the deflection radius (yes — $r \propto m/q$).

6. **Mixing up the velocity selector condition.** The condition $v = E/B$ comes from $qE = qvB$,
   where the electric and magnetic forces are in **opposite** directions. If you set them in the
   same direction, you get the wrong answer.

---

## Problem Set

<details>
<summary>Question 1</summary>

An alpha particle ($m = 6.64 \times 10^{-27}$ kg, $q = +3.20 \times 10^{-19}$ C) moves with speed
$5.0 \times 10^6$ m/s perpendicular to a uniform magnetic field of $B = 0.80$ T. Calculate: a) The
magnetic force on the alpha particle. b) The radius of its circular path. c) The period of its
orbit.

</details>

<details>
<summary>Answer 1</summary>

a) $F = qvB = (3.20 \times 10^{-19})(5.0 \times 10^6)(0.80) = 1.28 \times 10^{-12}$ N.

b)
$r = \frac{mv}{qB} = \frac{(6.64 \times 10^{-27})(5.0 \times 10^6)}{(3.20 \times 10^{-19})(0.80)} = \frac{3.32 \times 10^{-20}}{2.56 \times 10^{-19}} = 0.130$
m $= 13.0$ cm.

c)
$T = \frac{2\pi m}{qB} = \frac{2\pi(6.64 \times 10^{-27})}{(3.20 \times 10^{-19})(0.80)} = \frac{4.17 \times 10^{-26}}{2.56 \times 10^{-19}} = 1.63 \times 10^{-7}$
s.

</details>

<details>
<summary>Question 2</summary>

A velocity selector is designed to select ions with velocity $4.0 \times 10^5$ m/s. The magnetic
field is $B = 0.30$ T. a) What electric field strength is required? b) An ion with charge $+2e$ and
mass $6.68 \times 10^{-26}$ kg passes through the selector undeflected. It then enters a region of
uniform magnetic field ($B = 0.50$ T) perpendicular to its velocity. Calculate the radius of the
resulting circular path.

</details>

<details>
<summary>Answer 2</summary>

a) $E = vB = (4.0 \times 10^5)(0.30) = 1.2 \times 10^5$ V/m.

b)
$r = \frac{mv}{qB} = \frac{(6.68 \times 10^{-26})(4.0 \times 10^5)}{(2 \times 1.60 \times 10^{-19})(0.50)} = \frac{2.67 \times 10^{-20}}{1.60 \times 10^{-19}} = 0.167$
m $= 16.7$ cm.

</details>

<details>
<summary>Question 3</summary>

An electron enters a region of uniform magnetic field ($B = 0.40$ T) with a velocity of
$6.0 \times 10^6$ m/s at an angle of $60^\circ$ to the field lines. Calculate: a) The radius of the
helical path. b) The pitch of the helix (distance along the field per revolution).

</details>

<details>
<summary>Answer 3</summary>

a) The perpendicular component of velocity:
$v_\perp = v\sin 60° = (6.0 \times 10^6)(0.866) = 5.20 \times 10^6$ m/s.
$r = \frac{m_e v_\perp}{|q|B} = \frac{(9.11 \times 10^{-31})(5.20 \times 10^6)}{(1.60 \times 10^{-19})(0.40)} = \frac{4.74 \times 10^{-24}}{6.40 \times 10^{-20}} = 7.41 \times 10^{-5}$
m $= 74.1$ \mu m.

b) Period:
$T = \frac{2\pi m_e}{|q|B} = \frac{2\pi(9.11 \times 10^{-31})}{(1.60 \times 10^{-19})(0.40)} = 8.95 \times 10^{-11}$
s. Parallel component: $v_\parallel = v\cos 60° = (6.0 \times 10^6)(0.500) = 3.0 \times 10^6$ m/s.
Pitch: $p = v_\parallel T = (3.0 \times 10^6)(8.95 \times 10^{-11}) = 2.69 \times 10^{-4}$ m
$= 0.269$ mm.

</details>

<details>
<summary>Question 4</summary>

Two long straight parallel wires carry currents of $I_1 = 8.0$ A and $I_2 = 5.0$ A in the same
direction. The wires are separated by $d = 0.10$ m. Calculate: a) The magnetic force per unit length
between the wires. b) State whether the force is attractive or repulsive. Justify your answer.

</details>

<details>
<summary>Answer 4</summary>

a)
$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi \times 10^{-7})(8.0)(5.0)}{2\pi(0.10)} = \frac{5.03 \times 10^{-5}}{0.628} = 8.0 \times 10^{-5}$
N/m.

b) The force is **attractive**. When two parallel currents flow in the same direction, the magnetic
field produced by each wire exerts a force on the other wire that pulls them together. This follows
from the right-hand rule and the Lorentz force law.

</details>

<details>
<summary>Question 5</summary>

Explain why a magnetic field cannot be used to increase the speed of a charged particle. In your
answer, refer to the work-energy theorem and the direction of the magnetic force relative to the
velocity.

</details>

<details>
<summary>Answer 5</summary>

The magnetic force is always perpendicular to the velocity of the charged particle (by definition,
$\bm{F} = q(\bm{v} \times \bm{B})$). The work done by a force is $W = \bm{F} \cdot \bm{d}$, and
since the displacement $\bm{d}$ is parallel to $\bm{v}$, the dot product $\bm{F} \cdot \bm{d} = 0$.
By the work-energy theorem, $W = \Delta E_k = 0$, meaning the kinetic energy (and therefore the
speed) of the particle does not change. The magnetic force only changes the **direction** of the
velocity, causing circular or helical motion, but never the speed.

</details>

<details>
<summary>Question 6</summary>

A proton is accelerated from rest through a potential difference of 2000 V and then enters a region
of uniform magnetic field ($B = 0.10$ T) perpendicular to its velocity. Calculate the radius of the
circular path. ($m_p = 1.67 \times 10^{-27}$ kg, $q = 1.60 \times 10^{-19}$ C)

</details>

<details>
<summary>Answer 6</summary>

From the accelerating potential: $qV = \frac{1}{2}mv^2$, so $v = \sqrt{\frac{2qV}{m}}$.
$v = \sqrt{\frac{2(1.60 \times 10^{-19})(2000)}{1.67 \times 10^{-27}}} = \sqrt{\frac{6.40 \times 10^{-16}}{1.67 \times 10^{-27}}} = \sqrt{3.83 \times 10^{11}} = 6.19 \times 10^5$
m/s.
$r = \frac{mv}{qB} = \frac{(1.67 \times 10^{-27})(6.19 \times 10^5)}{(1.60 \times 10^{-19})(0.10)} = \frac{1.03 \times 10^{-21}}{1.60 \times 10^{-20}} = 0.0646$
m $= 6.46$ cm.

</details>
