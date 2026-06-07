---
title: Motion in Electromagnetic Fields slug: motion-in-electromagnetic-fields description:
'Rigorous IB physics notes covering Motion in Electromagnetic Fields. Includes definitions,
derivations, worked examples, and exam-style problems. Baccalaureate.'

date: 2024-01-01T00:00:00Z tags:

- ib
- physics categories:
- ib
- ib-physics

---
## Uniform Fields

A uniform field ($\bm{F}$) is a field with spatial invariance, therefore, a zero gradient
($\nabla \bm{F} = 0$).

## Test Charge

A test charge is an idealized particle where all other properties are assumed to be negligible
Except for the charge.

## Lorentz Force Law

[Coulomb's Law](./2_electric-and-magnetic-fields#coulombs-law) is only valid for electrostatics, as
Magnetic force is also induced by moving charge. The combined force ($\bm{F}$) on the test charge
($q$) can be governed by Lorentz force law:

$$
\begin`\{aligned}`
 \bm{F} = q(\bm{E}+\bm{v} \times \bm{B})
\end`\{aligned}`
$$

When only considering the magnitude of the force:

$$
\begin`\{aligned}`
 \bm{F} = q(|\bm{E}| + |\bm{v} \times \bm{B}|) = q(|\bm{E}|+|\bm{v}||\bm{B}|sin\theta)
\end`\{aligned}`
$$

The magnitude form is written in the IB formula booklet separately for magnetic and electric force:

$$
\begin`\{aligned}`
 F &= qvB \sin \theta\\
 F &= qE\\
 E &= \frac{F}{q}
\end`\{aligned}`
$$

### Motion of Current in Electromagnetic Field

The total force ($\bm{F}$) on a current ($I$) is determined by the combine force on the total number
($N$) of moving charges ($q$) in the current. As the dimensions of a electron is negligible when
Comparing to the cross section of a wire, the flow of electrons $I$ can be approximated by a
Continuum of current density ($\bm{J} = nq\bm{v}$), where $n$ is the density of charge carriers, and
Since the electric field have a negligible effect, only the force applied by magnetic field
($\bm{B}$ is accounted):

$$
\begin`\{aligned}`
 \bm{F_m} &= nV(q(v\times \bm{B})) = V(\bm{J}\times\bm{B})\\
 \bm{F_m} &= \int_C \bm{J}\times\bm{B} dV
\end`\{aligned}`
$$

For current of a conductor with constant cross-sectional area ($A$) and length displacement of
($\bm{L}$), the volume can be evaluated as ($V = AL$), leading to a force of:

$$
\begin`\{aligned}`
 \bm{F_m} = \int I(d\bm{L})\times B = I \int \bm{B}\times d\bm{L}
\end`\{aligned}`
$$

Since IB only considers interactions of current with uniform electric fields, magnetic field
$\bm{B}$ is constant, evaluating the force to:

$$
\begin`\{aligned}`
 \bm{F_m} = I(\bm{L}\times\bm{B})
\end`\{aligned}`
$$

Since IB considers the direction separately by the use of right hand rule (Motor effect), the
Magnitude of the force is expressed as:

$$
\begin`\{aligned}`
 |\bm{F_m}| = F = I|\bm{L}\times\bm{B}| = I|\bm{L}||\bm{B}|\sin\theta = BIL\sin\theta
\end`\{aligned}`
$$

This is expressed in the formula booklet $D.3$.

#### Motion Between Currents

According to Ampere's Law, current ($I_1$) generates a magnetic field ($\bm{B_1}$), due to
Rotational symmetry around the direction of current, the magnetic field can be express using
Cylindrical coordinates ($\hat{\phi}$) shows:

$$
\begin`\{aligned}`
 \bm{B_1} = \frac{\mu_0 I_1}{2\pi r}\hat{\bm{\phi}}
\end`\{aligned}`
$$

For a $\hat{\phi} = \hat{y}$ where $\hat{y}$ is a unit vector perpendicular to other current
($I_2$). Using the Lorentz Force Law, the magnetic force ($F_{12}$) experienced by the other current
Is:

$$
\begin`\{aligned}`
 \bm{F_{12}} &= I_2(\bm{L}\times\bm{B_1})\\
 \bm{F_{12}} &= I_2L(\hat{z}\times{B_1}), \quad \hat{z} = \hat{\bm{L}}\\
 \bm{F_{12}} &= I_2L\left(\hat{z}\times\frac{\mu_0 I_1}{2\pi r}\hat{y}\right)\\
 \bm{F_{12}} &= -\frac{\mu_0 I_1 I_2 L}{2\pi r}\hat{x}, \quad \hat{y} \times \hat{z} = -\hat{x}
\end`\{aligned}`
$$

Similar to before the IB expresses the magnitude form of this equation in the formula booklet:

$$
\begin`\{aligned}`
 |\bm{F_{12}}| = F = -\frac{\mu_0 I_1 I_2 L}{2\pi r}\hat{x} = \mu_0 \frac{I_1 I_2 L}{2\pi r}
\end`\{aligned}`
$$

Where the direction of motion on current can be determined by right hand rule (motor effect).

---

## Force on a Stationary Charge in an Electric Field

When a charge $q$ is placed in an electric field $\bm{E}$It experiences a force:

$$
\bm{F_E} = q\bm{E}
$$

Key points:

- The force is parallel to the electric field for positive charges and antiparallel for negative
  charges.
- The magnitude is $F = qE$.
- This force can accelerate the charge along the direction of the field line.

## Force on a Moving Charge in a Magnetic Field

When a charge $q$ moves with velocity $\bm{v}$ through a magnetic field $\bm{B}$It experiences the
Magnetic component of the Lorentz force:

$$
\bm{F_B} = q(\bm{v} \times \bm{B})
$$

Key points:

- The magnetic force is always **perpendicular** to both $\bm{v}$ and $\bm{B}$.
- The magnetic force does **no work** on the charge (since $W = F \cdot d$ and $F \perp v$), so the
  kinetic energy of the charge does not change.
- The magnitude is $F = qvB \sin\theta$Where $\theta$ is the angle between $\bm{v}$ and $\bm{B}$.
- When $\bm{v} \perp \bm{B}$ ($\theta = 90^\circ$), the force is maximum: $F = qvB$.
- When $\bm{v} \parallel \bm{B}$ ($\theta = 0^\circ$ or $180^\circ$), the force is zero.

### Right-Hand Rule for Magnetic Force

Point your fingers in the direction of $\bm{v}$ (for a positive charge), curl them towards $\bm{B}$
And your thumb points in the direction of $\bm{F}$. For a negative charge (e.g. An electron), the
Force is in the **opposite** direction.

---

## Circular Motion of a Charged Particle in a Magnetic Field

When a charged particle moves perpendicular to a uniform magnetic field ($\bm{v} \perp \bm{B}$), the
Magnetic force provides the centripetal force, causing the particle to move in a circular path.

### Derivation of the Radius

Since the magnetic force is always perpendicular to the velocity, it acts as the centripetal force:

$$
F_B = F_c
$$

$$
QvB = \frac{mv^2}{r}
$$

Solving for the radius $r$:

$$
R = \frac`\{mv}``\{qB}`
$$

This is one of the most important results in this topic. Key observations:

- The radius is **proportional to the momentum** ($r \propto mv$).
- The radius is **inversely proportional to the magnetic field strength** ($r \propto 1/B$).
- The radius is **inversely proportional to the charge** ($r \propto 1/q$).

### Period and Frequency

The time for one complete revolution (the period $T$) is:

$$
T = \frac{2\pi r}{v} = \frac{2\pi m}`\{qB}`
$$

The cyclotron frequency $f$ is:

$$
F = \frac{1}{T} = \frac`\{qB}`{2\pi m}
$$

**Important:** The period and frequency are **independent of the speed** and radius. This means all
Particles of the same charge-to-mass ratio orbit with the same period, regardless of their speed.
This principle is used in the cyclotron particle accelerator.

### Worked Example: Electron in a Magnetic Field

**Question:** An electron ($m_e = 9.11 \times 10^{-31}$ kg, $q = -1.60 \times 10^{-19}$ C) enters a
Uniform magnetic field of $B = 0.50$ T with a speed of $v = 3.0 \times 10^6$ m/s, perpendicular to
The field. Find the radius and period of the circular path.

**Solution:**

$$
R = \frac{m_e v}{|q| B} = \frac{(9.11 \times 10^{-31})(3.0 \times 10^6)}{(1.60 \times 10^{-19})(0.50)} = 3.42 \times 10^{-5} \mathrm{ m} = 34.2 \mathrm{ \mu m}
$$

$$
T = \frac{2\pi m_e}{|q| B} = \frac{2\pi (9.11 \times 10^{-31})}{(1.60 \times 10^{-19})(0.50)} = 7.16 \times 10^{-11} \mathrm{ s}
$$

**Exam tip:** When dealing with electrons, remember that the charge is negative. Use the magnitude
Of the charge in the radius/period formulae, and apply the right-hand rule in reverse to find the
Direction of the force.

---

## Helical Motion

When a charged particle enters a magnetic field at an angle $\theta$ (not $90^\circ$) to the field,
The velocity component parallel to $\bm{B}$ ($v_\parallel = v \cos\theta$) is unaffected by the
Magnetic force. Only the perpendicular component ($v_\perp = v \sin\theta$) causes circular motion.
The result is a **helical** (spiral) path.

- The radius of the helix: $r = \frac{mv_\perp}{qB} = \frac{mv \sin\theta}{qB}$
- The pitch (distance along the field per revolution):
  $p = v_\parallel \cdot T = \frac{2\pi m v \cos\theta}{qB}$

---

## The Velocity Selector

A velocity selector uses crossed (perpendicular) electric and magnetic fields to select particles of
A specific velocity.

### Principle

A particle of charge $q$ and velocity $v$ enters a region where an electric field $\bm{E}$ and a
Magnetic field $\bm{B}$ are perpendicular to each other and to the direction of motion.

The electric force and magnetic force act in opposite directions:

- Electric force: $F_E = qE$ (in one direction)
- Magnetic force: $F_B = qvB$ (in the opposite direction)

For a particle to pass through undeflected, the forces must balance:

$$
F_E = F_B
$$

$$
QE = qvB
$$

$$
V = \frac{E}{B}
$$

Only particles with this exact velocity pass through. Particles with $v \gt E/B$ are deflected one
Way; particles with $v \lt E/B$ are deflected the other way.

### Worked Example: Velocity Selector

**Question:** A velocity selector has $E = 1.5 \times 10^5$ V/m and $B = 0.050$ T. What velocity is
Selected?

**Solution:**

$$
V = \frac{E}{B} = \frac{1.5 \times 10^5}{0.050} = 3.0 \times 10^6 \mathrm{ m/s}
$$

**Exam tip:** The velocity selector does not depend on the charge or mass of the particle — only on
$E$ and $B$. This means it selects a velocity, not a specific particle type.

---

## The Mass Spectrometer

A mass spectrometer is a device that separates ions by their mass-to-charge ratio. It is used in
Chemistry, forensics, environmental science, and many other fields.

### How It Works

1. **Ionisation:** Atoms are ionised (given a charge $+q$, $+e$).
2. **Acceleration:** Ions are accelerated through a potential difference $V$. The kinetic energy
   gained equals the electrical potential energy lost:

$$
QV = \frac{1}{2}mv^2
$$

3. **Velocity selection:** Ions pass through a velocity selector, so all entering the deflection
   region have the same velocity $v = E/B$.
4. **Magnetic deflection:** Ions enter a region of uniform magnetic field $\bm{B}$ (perpendicular to
   their velocity) and follow a semicircular path. The radius of the path depends on the mass:

$$
R = \frac`\{mv}``\{qB}`
$$

5. **Detection:** Ions of different masses hit the detector at different positions. Since $v$ is the
   same for all ions, the radius is proportional to mass:

$$
R \propto m
$$

### Combining the Equations

From the acceleration stage: $v = \sqrt{\frac{2qV}{m}}$

Substituting into the radius equation:

$$
R = \frac{m}`\{qB}` \sqrt{\frac{2qV}{m}} = \frac{1}{B} \sqrt{\frac{2mV}{q}}
$$

This gives the mass-to-charge ratio:

$$
\frac{m}{q} = \frac{B^2 r^2}{2V}
$$

### Worked Example: Mass Spectrometer

**Question:** In a mass spectrometer, singly charged ions ($q = +e = 1.60 \times 10^{-19}$ C) are
Accelerated through $V = 5000$ V and enter a magnetic field of $B = 0.20$ T. Two isotopes are
Detected at radii of $r_1 = 10.2$ cm and $r_2 = 10.8$ cm. Calculate the mass of each isotope in
Atomic mass units (u), where $1 \mathrm{ u} = 1.66 \times 10^{-27}$ kg.

**Solution:**

Using $\frac{m}{q} = \frac{B^2 r^2}{2V}$:

**Isotope 1:**

$$
M_1 = \frac{q B^2 r_1^2}{2V} = \frac{(1.60 \times 10^{-19})(0.20)^2(0.102)^2}{2(5000)} = \frac{(1.60 \times 10^{-19})(0.04)(0.0104)}{10000} = 6.67 \times 10^{-26} \mathrm{ kg}
$$

$$
M_1 = \frac{6.67 \times 10^{-26}}{1.66 \times 10^{-27}} = 40.2 \mathrm{ u}
$$

This is consistent with calcium-40.

**Isotope 2:**

$$
M_2 = \frac{(1.60 \times 10^{-19})(0.04)(0.108)^2}{10000} = \frac{(1.60 \times 10^{-19})(0.04)(0.01166)}{10000} = 7.47 \times 10^{-26} \mathrm{ kg}
$$

$$
M_2 = \frac{7.47 \times 10^{-26}}{1.66 \times 10^{-27}} = 45.0 \mathrm{ u}
$$

This is consistent with scandium-45.

---

## Force on a Current-Carrying Conductor

When a current-carrying wire is placed in a magnetic field, the moving charges within the wire
Experience a force, which is transmitted to the wire as a whole.

### Derivation

Consider a wire of length $L$ carrying current $I$ in a magnetic field $\bm{B}$. If the wire
Contains $N$ charge carriers, each with charge $q$Moving with drift velocity $v_d$:

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
   $\bm{v}$ and $\bm{B}$. If the question does not state the angle, it is $90^\circ$.

2. **Electrons are negative.** When working with electrons, the force direction is **opposite** to
   what the right-hand rule gives. Either use the left hand for negative charges, or reverse the
   right-hand rule result.

3. **Magnetic force does no work.** Since $\bm{F} \perp \bm{v}$The kinetic energy of the particle
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
- A charged particle experiences constant force: $F = qE$Leading to constant acceleration:
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
Strength is $B = 1.2$ T. A) What is the radius of the cyclotron at maximum speed? b) What is the
Cyclotron frequency? c) What is the maximum kinetic energy of the protons in electron-volts?

**Solution:**

**a) Maximum radius:**

$$
R_{\max} = \frac{m_p v_{\max}}`\{qB}` = \frac{(1.67 \times 10^{-27})(2.0 \times 10^7)}{(1.60 \times 10^{-19})(1.2)} = \frac{3.34 \times 10^{-20}}{1.92 \times 10^{-19}} = 0.174 \mathrm{ m} = 17.4 \mathrm{ cm}
$$

**b) Cyclotron frequency:**

$$
F = \frac`\{qB}`{2\pi m_p} = \frac{(1.60 \times 10^{-19})(1.2)}{2\pi(1.67 \times 10^{-27})} = \frac{1.92 \times 10^{-19}}{1.05 \times 10^{-26}} = 1.83 \times 10^7 \mathrm{ Hz} = 18.3 \mathrm{ MHz}
$$

**c) Maximum kinetic energy:**

$$
E_k = \frac{1}{2}m_p v_{\max}^2 = \frac{1}{2}(1.67 \times 10^{-27})(2.0 \times 10^7)^2 = 3.34 \times 10^{-13} \mathrm{ J}
$$

Converting to electron-volts:

$$
E_k = \frac{3.34 \times 10^{-13}}{1.60 \times 10^{-19}} = 2.09 \times 10^6 \mathrm{ eV} = 2.09 \mathrm{ MeV}
$$

**Key insight:** The cyclotron frequency is independent of the proton's speed and radius. The
Alternating electric field must oscillate at exactly this frequency so that the proton is always
Accelerated as it crosses the gap between the dees.

---

## Worked Example: Velocity Selector with Mass Separation

**Question:** In a mass spectrometer, ions are first passed through a velocity selector with
$E = 6.0 \times 10^4$ V/m and $B_1 = 0.20$ T. They then enter a deflection region with $B_2 = 0.50$
T. Singly charged ions ($q = +e$) of two isotopes of neon are detected at radii $r_1 = 11.6$ cm and
$r_2 = 12.5$ cm. Calculate the mass of each isotope in atomic mass units.

**Solution:**

**Step 1:** Find the selected velocity:

$$
V = \frac{E}{B_1} = \frac{6.0 \times 10^4}{0.20} = 3.0 \times 10^5 \mathrm{ m/s}
$$

**Step 2:** Use $r = \frac{mv}{qB_2}$ to find each mass:

**Isotope 1:**

$$
M_1 = \frac{qB_2 r_1}{v} = \frac{(1.60 \times 10^{-19})(0.50)(0.116)}{3.0 \times 10^5} = 3.09 \times 10^{-26} \mathrm{ kg}
$$

$$
M_1 = \frac{3.09 \times 10^{-26}}{1.66 \times 10^{-27}} = 18.6 \mathrm{ u}
$$

**Isotope 2:**

$$
M_2 = \frac{(1.60 \times 10^{-19})(0.50)(0.125)}{3.0 \times 10^5} = 3.33 \times 10^{-26} \mathrm{ kg}
$$

$$
M_2 = \frac{3.33 \times 10^{-26}}{1.66 \times 10^{-27}} = 20.1 \mathrm{ u}
$$

These correspond to neon-20 (20.2 u) and neon-22 (21.9 u) — the slight discrepancy is due to
Simplified values.

---

## Common Pitfalls

1. **Forgetting the angle in $F = qvB\sin\theta$.** If the question does not specify the angle, it
   is $90^\circ$Making $\sin\theta = 1$. However, if the velocity has a component parallel to
   $\bm{B}$Use $\sin\theta$ with the perpendicular component only.

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

6. **Mixing up the velocity selector condition.** The condition $v = E/B$ comes from $qE = qvB$
   where the electric and magnetic forces are in **opposite** directions. If you set them in the
   same direction, you get the wrong answer.

---

## Problem Set

<details>
<summary>Question 1</summary>

An alpha particle ($m = 6.64 \times 10^{-27}$ kg, $q = +3.20 \times 10^{-19}$ C) moves with speed
$5.0 \times 10^6$ m/s perpendicular to a uniform magnetic field of $B = 0.80$ T. Calculate: a) The
Magnetic force on the alpha particle. B) The radius of its circular path. C) The period of its
Orbit.

</details>

<details>
<summary>Answer 1</summary>

A) $F = qvB = (3.20 \times 10^{-19})(5.0 \times 10^6)(0.80) = 1.28 \times 10^{-12}$ N.

B)
$r = \frac{mv}{qB} = \frac{(6.64 \times 10^{-27})(5.0 \times 10^6)}{(3.20 \times 10^{-19})(0.80)} = \frac{3.32 \times 10^{-20}}{2.56 \times 10^{-19}} = 0.130$
M $= 13.0$ cm.

C)
$T = \frac{2\pi m}{qB} = \frac{2\pi(6.64 \times 10^{-27})}{(3.20 \times 10^{-19})(0.80)} = \frac{4.17 \times 10^{-26}}{2.56 \times 10^{-19}} = 1.63 \times 10^{-7}$
S.

</details>

<details>
<summary>Question 2</summary>

A velocity selector is designed to select ions with velocity $4.0 \times 10^5$ m/s. The magnetic
Field is $B = 0.30$ T. A) What electric field strength is required? b) An ion with charge $+2e$ and
Mass $6.68 \times 10^{-26}$ kg passes through the selector undeflected. It then enters a region of
Uniform magnetic field ($B = 0.50$ T) perpendicular to its velocity. Calculate the radius of the
Resulting circular path.

</details>

<details>
<summary>Answer 2</summary>

A) $E = vB = (4.0 \times 10^5)(0.30) = 1.2 \times 10^5$ V/m.

B)
$r = \frac{mv}{qB} = \frac{(6.68 \times 10^{-26})(4.0 \times 10^5)}{(2 \times 1.60 \times 10^{-19})(0.50)} = \frac{2.67 \times 10^{-20}}{1.60 \times 10^{-19}} = 0.167$
M $= 16.7$ cm.

</details>

<details>
<summary>Question 3</summary>

An electron enters a region of uniform magnetic field ($B = 0.40$ T) with a velocity of
$6.0 \times 10^6$ m/s at an angle of $60^\circ$ to the field lines. Calculate: a) The radius of the
Helical path. B) The pitch of the helix (distance along the field per revolution).

</details>

<details>
<summary>Answer 3</summary>

A) The perpendicular component of velocity:
$v_\perp = v\sin 60^{\circ} = (6.0 \times 10^6)(0.866) = 5.20 \times 10^6$ m/s.
$r = \frac{m_e v_\perp}{|q|B} = \frac{(9.11 \times 10^{-31})(5.20 \times 10^6)}{(1.60 \times 10^{-19})(0.40)} = \frac{4.74 \times 10^{-24}}{6.40 \times 10^{-20}} = 7.41 \times 10^{-5}$
M $= 74.1$ \mu m.

B) Period:
$T = \frac{2\pi m_e}{|q|B} = \frac{2\pi(9.11 \times 10^{-31})}{(1.60 \times 10^{-19})(0.40)} = 8.95 \times 10^{-11}$
S. Parallel component: $v_\parallel = v\cos 60^{\circ} = (6.0 \times 10^6)(0.500) = 3.0 \times 10^6$
m/s. Pitch: $p = v_\parallel T = (3.0 \times 10^6)(8.95 \times 10^{-11}) = 2.69 \times 10^{-4}$ m
$= 0.269$ mm.

</details>

<details>
<summary>Question 4</summary>

Two long straight parallel wires carry currents of $I_1 = 8.0$ A and $I_2 = 5.0$ A in the same
Direction. The wires are separated by $d = 0.10$ m. Calculate: a) The magnetic force per unit length
Between the wires. B) State whether the force is attractive or repulsive. Justify your answer.

</details>

<details>
<summary>Answer 4</summary>

A)
$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi \times 10^{-7})(8.0)(5.0)}{2\pi(0.10)} = \frac{5.03 \times 10^{-5}}{0.628} = 8.0 \times 10^{-5}$
N/m.

B) The force is **attractive**. When two parallel currents flow in the same direction, the magnetic
Field produced by each wire exerts a force on the other wire that pulls them together. This follows
From the right-hand rule and the Lorentz force law.

</details>

<details>
<summary>Question 5</summary>

Explain why a magnetic field cannot be used to increase the speed of a charged particle. In your
Answer, refer to the work-energy theorem and the direction of the magnetic force relative to the
Velocity.

</details>

<details>
<summary>Answer 5</summary>

The magnetic force is always perpendicular to the velocity of the charged particle (by definition,
$\bm{F} = q(\bm{v} \times \bm{B})$). The work done by a force is $W = \bm{F} \cdot \bm{d}$And Since
the displacement $\bm{d}$ is parallel to $\bm{v}$The dot product $\bm{F} \cdot \bm{d} = 0$. By the
work-energy theorem, $W = \Delta E_k = 0$Meaning the kinetic energy (and therefore the Speed) of the
particle does not change. The magnetic force only changes the **direction** of the Velocity, causing
circular or helical motion, but never the speed.

</details>

<details>
<summary>Question 6</summary>

A proton is accelerated from rest through a potential difference of 2000 V and then enters a region
Of uniform magnetic field ($B = 0.10$ T) perpendicular to its velocity. Calculate the radius of the
Circular path. ($m_p = 1.67 \times 10^{-27}$ kg, $q = 1.60 \times 10^{-19}$ C)

</details>

<details>
<summary>Answer 6</summary>

From the accelerating potential: $qV = \frac{1}{2}mv^2$So $v = \sqrt{\frac{2qV}{m}}$.
$v = \sqrt{\frac{2(1.60 \times 10^{-19})(2000)}{1.67 \times 10^{-27}}} = \sqrt{\frac{6.40 \times 10^{-16}}{1.67 \times 10^{-27}}} = \sqrt{3.83 \times 10^{11}} = 6.19 \times 10^5$
M/s.
$r = \frac{mv}{qB} = \frac{(1.67 \times 10^{-27})(6.19 \times 10^5)}{(1.60 \times 10^{-19})(0.10)} = \frac{1.03 \times 10^{-21}}{1.60 \times 10^{-20}} = 0.0646$
M $= 6.46$ cm.

</details>

## Worked Examples

**Example 1: Newton's second law**

A $2.0\,\text{kg}$ object is pulled across a rough horizontal surface by a horizontal force of
$15\,\text{N}$. The frictional force is $5.0\,\text{N}$. Calculate the acceleration.

**Solution:**

$$F_{\text{net}} = F_{\text{applied}} - F_{\text{friction}} = 15 - 5.0 = 10\,\text{N}$$

$$a = \frac{F_{\text{net}}}{m} = \frac{10}{2.0} = 5.0\,\text{m\,s}^{-2}$$

## Summary

- Magnetic force: $\vec{F} = q\vec{v} \times \vec{B}$, perpendicular to both $v$ and $B$
- Circular motion in magnetic field: $r = mv/(qB)$, $T = 2\pi m/(qB)$
- Magnetic fields do no work (force $\perp$ velocity), so speed and KE are constant
- Fleming's left-hand rule for direction of force on conventional current
