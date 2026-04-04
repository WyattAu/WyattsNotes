---
title: Motion in Electromagnetic Fields
date: 2025-04-27T16:56:56.736Z
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
\begin{aligned}
    \bm{F} = q(\bm{E}+\bm{v} \times \bm{B})
\end{aligned}
$$

When only considering the magnitude of the force:

$$
\begin{aligned}
    \bm{F} = q(|\bm{E}| + |\bm{v} \times \bm{B}|) = q(|\bm{E}|+|\bm{v}||\bm{B}|sin\theta)
\end{aligned}
$$

The magnitude form is written in the IB formula booklet separately for magnetic and electric force:

$$
\begin{aligned}
    F &= qvB \sin \theta\\
    F &= qE\\
    E &= \frac{F}{q}
\end{aligned}
$$

### Motion of Current in Electromagnetic Field

The total force ($\bm{F}$) on a current ($I$) is determined by the combine force on the total number
($N$) of moving charges ($q$) in the current. As the dimensions of a electron is negligible when
comparing to the cross section of a wire, the flow of electrons $I$ can be approximated by a
continuum of current density ($\bm{J} = nq\bm{v}$), where $n$ is the density of charge carriers, and
since the electric field have a negligible effect, only the force applied by magnetic field
($\bm{B}$ is accounted):

$$
\begin{aligned}
    \bm{F_m} &= nV(q(v\times \bm{B})) = V(\bm{J}\times\bm{B})\\
    \bm{F_m} &= \int_C \bm{J}\times\bm{B} dV
\end{aligned}
$$

For current of a conductor with constant cross-sectional area ($A$) and length displacement of
($\bm{L}$), the volume can be evaluated as ($V = AL$), leading to a force of:

$$
\begin{aligned}
    \bm{F_m} = \int I(d\bm{L})\times B = I \int \bm{B}\times d\bm{L}
\end{aligned}
$$

Since IB only considers interactions of current with uniform electric fields, magnetic field
$\bm{B}$ is constant, evaluating the force to:

$$
\begin{aligned}
    \bm{F_m} = I(\bm{L}\times\bm{B})
\end{aligned}
$$

Since IB considers the direction separately by the use of right hand rule (Motor effect), the
magnitude of the force is expressed as:

$$
\begin{aligned}
    |\bm{F_m}| = F = I|\bm{L}\times\bm{B}| = I|\bm{L}||\bm{B}|\sin\theta = BIL\sin\theta
\end{aligned}
$$

This is expressed in the formula booklet $D.3$.

#### Motion Between Currents

According to Ampere's Law, current ($I_1$) generates a magnetic field ($\bm{B_1}$), due to
rotational symmetry around the direction of current, the magnetic field can be express using
cylindrical coordinates ($\hat{\phi}$) shows:

$$
\begin{aligned}
    \bm{B_1} = \frac{\mu_0 I_1}{2\pi r}\hat{\bm{\phi}}
\end{aligned}
$$

For a $\hat{\phi} = \hat{y}$ where $\hat{y}$ is a unit vector perpendicular to other current
($I_2$). Using the Lorentz Force Law, the magnetic force ($F_{12}$) experienced by the other current
is:

$$
\begin{aligned}
    \bm{F_{12}} &= I_2(\bm{L}\times\bm{B_1})\\
    \bm{F_{12}} &= I_2L(\hat{z}\times{B_1}), \quad \hat{z} = \hat{\bm{L}}\\
    \bm{F_{12}} &= I_2L\left(\hat{z}\times\frac{\mu_0 I_1}{2\pi r}\hat{y}\right)\\
    \bm{F_{12}} &= -\frac{\mu_0 I_1 I_2 L}{2\pi r}\hat{x}, \quad \hat{y} \times \hat{z} = -\hat{x}
\end{aligned}
$$

Similar to before the IB expresses the magnitude form of this equation in the formula booklet:

$$
\begin{aligned}
    |\bm{F_{12}}| = F = -\frac{\mu_0 I_1 I_2 L}{2\pi r}\hat{x} = \mu_0 \frac{I_1 I_2 L}{2\pi r}
\end{aligned}
$$

Where the direction of motion on current can be determined by right hand rule (motor effect).

---

## Force on a Stationary Charge in an Electric Field

When a charge $q$ is placed in an electric field $\bm{E}$, it experiences a force:

$$
\bm{F_E} = q\bm{E}
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
\bm{F_B} = q(\bm{v} \times \bm{B})
$$

Key points:

- The magnetic force is always **perpendicular** to both $\bm{v}$ and $\bm{B}$.
- The magnetic force does **no work** on the charge (since $W = F \cdot d$ and $F \perp v$), so the
  kinetic energy of the charge does not change.
- The magnitude is $F = qvB \sin\theta$, where $\theta$ is the angle between $\bm{v}$ and $\bm{B}$.
- When $\bm{v} \perp \bm{B}$ ($\theta = 90°$), the force is maximum: $F = qvB$.
- When $\bm{v} \parallel \bm{B}$ ($\theta = 0°$ or $180°$), the force is zero.

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
qvB = \frac{mv^2}{r}
$$

Solving for the radius $r$:

$$
r = \frac{mv}{qB}
$$

This is one of the most important results in this topic. Key observations:

- The radius is **proportional to the momentum** ($r \propto mv$).
- The radius is **inversely proportional to the magnetic field strength** ($r \propto 1/B$).
- The radius is **inversely proportional to the charge** ($r \propto 1/q$).

### Period and Frequency

The time for one complete revolution (the period $T$) is:

$$
T = \frac{2\pi r}{v} = \frac{2\pi m}{qB}
$$

The cyclotron frequency $f$ is:

$$
f = \frac{1}{T} = \frac{qB}{2\pi m}
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
r = \frac{m_e v}{|q| B} = \frac{(9.11 \times 10^{-31})(3.0 \times 10^6)}{(1.60 \times 10^{-19})(0.50)} = 3.42 \times 10^{-5} \text{ m} = 34.2 \text{ \mu m}
$$

$$
T = \frac{2\pi m_e}{|q| B} = \frac{2\pi (9.11 \times 10^{-31})}{(1.60 \times 10^{-19})(0.50)} = 7.16 \times 10^{-11} \text{ s}
$$

**Exam tip:** When dealing with electrons, remember that the charge is negative. Use the magnitude
of the charge in the radius/period formulae, and apply the right-hand rule in reverse to find the
direction of the force.

---

## Helical Motion

When a charged particle enters a magnetic field at an angle $\theta$ (not $90°$) to the field, the
velocity component parallel to $\bm{B}$ ($v_\parallel = v \cos\theta$) is unaffected by the magnetic
force. Only the perpendicular component ($v_\perp = v \sin\theta$) causes circular motion. The
result is a **helical** (spiral) path.

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
v = \frac{E}{B}
$$

Only particles with this exact velocity pass through. Particles with $v \gt E/B$ are deflected one
way; particles with $v \lt E/B$ are deflected the other way.

### Worked Example: Velocity Selector

**Question:** A velocity selector has $E = 1.5 \times 10^5$ V/m and $B = 0.050$ T. What velocity is
selected?

**Solution:**

$$
v = \frac{E}{B} = \frac{1.5 \times 10^5}{0.050} = 3.0 \times 10^6 \text{ m/s}
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
qV = \frac{1}{2}mv^2
$$

3. **Velocity selection:** Ions pass through a velocity selector, so all entering the deflection
   region have the same velocity $v = E/B$.
4. **Magnetic deflection:** Ions enter a region of uniform magnetic field $\bm{B}$ (perpendicular to
   their velocity) and follow a semicircular path. The radius of the path depends on the mass:

$$
r = \frac{mv}{qB}
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
r = \frac{m}{qB} \sqrt{\frac{2qV}{m}} = \frac{1}{B} \sqrt{\frac{2mV}{q}}
$$

This gives the mass-to-charge ratio:

$$
\frac{m}{q} = \frac{B^2 r^2}{2V}
$$

### Worked Example: Mass Spectrometer

**Question:** In a mass spectrometer, singly charged ions ($q = +e = 1.60 \times 10^{-19}$ C) are
accelerated through $V = 5000$ V and enter a magnetic field of $B = 0.20$ T. Two isotopes are
detected at radii of $r_1 = 10.2$ cm and $r_2 = 10.8$ cm. Calculate the mass of each isotope in
atomic mass units (u), where $1 \text{ u} = 1.66 \times 10^{-27}$ kg.

**Solution:**

Using $\frac{m}{q} = \frac{B^2 r^2}{2V}$:

**Isotope 1:**

$$
m_1 = \frac{q B^2 r_1^2}{2V} = \frac{(1.60 \times 10^{-19})(0.20)^2(0.102)^2}{2(5000)} = \frac{(1.60 \times 10^{-19})(0.04)(0.0104)}{10000} = 6.67 \times 10^{-26} \text{ kg}
$$

$$
m_1 = \frac{6.67 \times 10^{-26}}{1.66 \times 10^{-27}} = 40.2 \text{ u}
$$

This is consistent with calcium-40.

**Isotope 2:**

$$
m_2 = \frac{(1.60 \times 10^{-19})(0.04)(0.108)^2}{10000} = \frac{(1.60 \times 10^{-19})(0.04)(0.01166)}{10000} = 7.47 \times 10^{-26} \text{ kg}
$$

$$
m_2 = \frac{7.47 \times 10^{-26}}{1.66 \times 10^{-27}} = 45.0 \text{ u}
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
   $\bm{v}$ and $\bm{B}$. If the question does not state the angle, it is usually $90°$.

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
