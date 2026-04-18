---
title: Magnetic Fields
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: magnetic-fields
---

## Magnetic Fields

:::info
Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

**Definition.** A magnetic field is a region of space where a magnetic force acts on moving charges
or magnetic materials.

## 1. Magnetic Force on a Current-Carrying Wire

**Definition.** Magnetic flux density $B$ is the force per unit length per unit current on a
straight conductor perpendicular to the field.

$$\boxed{B = \frac{F}{IL}}$$

A current-carrying wire in a magnetic field experiences a force:

$$\boxed{F = BIl\sin\theta}$$

where $B$ is the magnetic flux density (T), $I$ is the current (A), $l$ is the length of wire in the
field (m), and $\theta$ is the angle between the wire and the field direction.

The force is maximum when the wire is perpendicular to the field ($\theta = 90^\circ$): $F = BIl$. The
force is zero when the wire is parallel to the field ($\theta = 0^\circ$).

**Definition.** Fleming's left-hand rule relates the directions of force, magnetic field, and
current: thumb (force), index (field), middle (current).

**Direction:** Given by **Fleming's Left-Hand Rule**:

- **First finger** → Field ($B$)
- **Second finger** → Current ($I$)
- **Thumb** → Force ($F$)

**Definition.** The tesla is the SI unit of magnetic flux density; 1 T = 1 N A$^{-1}$ m$^{-1}$ — the
magnetic flux density that produces a force of 1 N on a wire of length 1 m carrying a current of 1 A
perpendicular to the field.

$$\boxed{1\,\mathrm{T} = 1\,\mathrm{N A}^{-1}\,\mathrm{m}^{-1}}$$

### Magnetic Force on a Moving Charge

Since $I = dq/dt$, and $n$ charges each of charge $q$ move through length $l$ in time $t$:
$I = nq/t$ for one charge $I = q/t$ where $t = l/v$.

$$F = B \cdot \frac{q}{t} \cdot l \cdot \sin\theta = B \cdot q \cdot \frac{l}{t} \cdot \sin\theta$$

$$\boxed{F = Bqv\sin\theta}$$

For a charge moving perpendicular to the field ($\theta = 90^\circ$):

$$\boxed{F = Bqv}$$

## 2. Circular Motion in a Magnetic Field

### Derivation of $r = mv/(Bq)$

When a charged particle moves perpendicular to a uniform magnetic field, the magnetic force provides
the centripetal acceleration:

$$F = Bqv = \frac{mv^2}{r}$$

Solving for the radius of curvature:

$$\boxed{r = \frac{mv}{Bq}}$$

**Derivation of the cyclotron frequency.** The period of the circular orbit:

$$T = \frac{2\pi r}{v} = \frac{2\pi m}{Bq}$$

Note that $T$ is **independent of $v$ and $r$** — a remarkable result. All particles of the same
mass and charge orbit with the same period regardless of speed.

The **cyclotron frequency** is:

$$f = \frac{1}{T} = \frac{Bq}{2\pi m}$$

**Intuition.** A faster particle has a larger orbit (proportionally), so it takes the same time to
complete one revolution. This is the principle behind the cyclotron particle accelerator.

### Kinetic Energy in Terms of $r$

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\left(\frac{Bqr}{m}\right)^2 = \frac{B^2q^2r^2}{2m}$$

<details>
<summary>Example: Proton in a Magnetic Field</summary>
A proton ($m = 1.67 \times 10^{-27}$ kg) moves at $3.0 \times 10^6$ m s$^{-1}$ perpendicular to a
magnetic field of 0.50 T. Find the radius of its circular path.

**Answer.**
$r = \frac{mv}{Bq} = \frac{1.67 \times 10^{-27} \times 3.0 \times 10^6}{0.50 \times 1.60 \times 10^{-19}} = \frac{5.01 \times 10^{-21}}{8.0 \times 10^{-20}} = 0.0626$
m $= 6.26$ cm.

</details>

## 3. Velocity Selector

A velocity selector uses crossed electric and magnetic fields to select particles of a specific
velocity.

**Principle.** A particle with charge $q$ and velocity $v$ passes through a region where
$\mathbf{E}$ and $\mathbf{B}$ are perpendicular to each other and to the particle's velocity.

The electric force: $F_E = qE$ (one direction) The magnetic force: $F_B = Bqv$ (opposite direction)

For the particle to travel in a straight line (undeflected):

$$F_E = F_B$$

$$\boxed{qE = Bqv \implies v = \frac{E}{B}}$$

Only particles with this specific velocity pass through undeflected. Faster or slower particles are
deflected and filtered out.

**Intuition.** The electric and magnetic forces balance for exactly one speed. This is how mass
spectrometers first select a monoenergetic beam before separating by mass.

## 4. Faraday's Law of Electromagnetic Induction

### Magnetic Flux

**Definition.** Magnetic flux $\Phi$ is the product of the magnetic flux density and the
perpendicular component of area: $\Phi = BA\cos\theta$ where $\theta$ is the angle between the field
and the normal to the area.

$$\boxed{\Phi = BA\cos\theta}$$

where $A$ is the area of the surface and $\theta$ is the angle between the field and the normal to
the surface.

**Definition.** The weber is the SI unit of magnetic flux; 1 Wb = 1 T m$^2$.

$$\boxed{1\,\mathrm{Wb} = 1\,\mathrm{T}\,\mathrm{m}^2}$$

### Faraday's Law

**Definition.** Faraday's law states that the induced e.m.f. is equal to the negative rate of change
of magnetic flux linkage.

$$\boxed{\varepsilon = -N\frac{d\Phi}{dt}}$$

where $N$ is the number of turns, $\Phi$ is the magnetic flux, and $N\Phi$ is the **flux linkage**.

**Derivation from energy conservation.** If an e.m.f. were induced that did not oppose the change in
flux, you could create a self-sustaining current and violate conservation of energy.

### Lenz's Law

**Definition.** Lenz's law states that the direction of the induced current is such that it opposes
the change producing it.

This is the physical content of the minus sign in Faraday's law. The induced current creates a
magnetic field that opposes the change in the original flux.

**Intuition.** Lenz's law is nature's expression of inertia for magnetic systems. If you push a
magnet towards a coil, the coil generates a current whose field repels the magnet. If you pull the
magnet away, the current attracts it. The system always resists change.

### Motional e.m.f.

A conducting rod of length $l$ moving with velocity $v$ perpendicular to a uniform field $B$:

$$\mathcal{E} = Blv$$

**Derivation.** In time $dt$, the rod sweeps out area $l \cdot v\,dt$. The flux swept:
$d\Phi = B \cdot lv\,dt$. By Faraday's law: $\mathcal{E} = d\Phi/dt = Blv$. $\square$

## 5. The Alternating Current Generator

A coil of $N$ turns, area $A$, rotating at angular frequency $\omega$ in a uniform field $B$:

$$\Phi = NBA\cos(\omega t)$$

$$\mathcal{E} = -\frac{d\Phi}{dt} = NBA\omega\sin(\omega t)$$

$$\boxed{\mathcal{E} = \mathcal{E}_0\sin(\omega t)}$$

where the peak e.m.f. is $\mathcal{E}_0 = NBA\omega$.

:::tip
Exam Technique When asked about Lenz's law, always describe what the induced current does
(creates a field to oppose the change) and identify the direction of the induced current using the
right-hand grip rule.
:::

## 6. Biot-Savart Law and Ampere's Law

### The Biot-Savart Law

The Biot-Savart law is the magnetic analogue of Coulomb's law: it gives the magnetic field
contribution $d\mathbf{B}$ at a point $\mathbf{P}$ due to an infinitesimal current element
$I\,d\mathbf{l}$:

$$\boxed{d\mathbf{B} = \frac{\mu_0}{4\pi}\frac{I\,d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}}$$

where $\mu_0 = 4\pi \times 10^{-7}$ T m A$^{-1}$ is the permeability of free space, $d\mathbf{l}$
points along the current, $\hat{\mathbf{r}}$ is the unit vector from the element to $\mathbf{P}$,
and $r$ is the distance. The total field is:

$$\mathbf{B} = \frac{\mu_0 I}{4\pi}\int \frac{d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}$$

The direction of $d\mathbf{B}$ follows from the right-hand rule on
$d\mathbf{l} \times \hat{\mathbf{r}}$.

:::warning
Common Pitfall: the cross-product order is $d\mathbf{l} \times \hat{\mathbf{r}}$, not
$\hat{\mathbf{r}} \times d\mathbf{l}$. Reversing the order flips the field direction.
:::

### Field at the Centre of a Circular Loop

For a circular loop of radius $R$ carrying current $I$, every element $d\mathbf{l}$ satisfies
$d\mathbf{l} \perp \hat{\mathbf{r}}$ and $r = R$, so $|d\mathbf{l} \times \hat{\mathbf{r}}| = dl$:

$$B = \frac{\mu_0 I}{4\pi R^2}\oint dl = \frac{\mu_0 I}{4\pi R^2}\cdot 2\pi R$$

$$\boxed{B = \frac{\mu_0 I}{2R}}$$

For $N$ turns: $B = \mu_0 NI/(2R)$.

### Field on the Axis of a Circular Loop

Consider a point $\mathbf{P}$ on the axis at distance $x$ from the centre of a loop of radius $R$.
Each current element is at distance $r = \sqrt{R^2 + x^2}$ from $\mathbf{P}$. Since
$d\mathbf{l} \perp \hat{\mathbf{r}}$, the contribution magnitude is
$dB = \frac{\mu_0 I}{4\pi}\frac{dl}{r^2}$.

By rotational symmetry, components of $d\mathbf{B}$ perpendicular to the axis cancel. Only the axial
component survives. Since $d\mathbf{B} \perp \hat{\mathbf{r}}$ and $\hat{\mathbf{r}}$ makes angle
$\alpha$ with the axis where $\sin\alpha = R/r$, the axial component is:

$$dB_{\parallel} = dB\sin\alpha = \frac{\mu_0 I}{4\pi}\frac{R\,dl}{r^3}$$

Integrating around the loop ($\oint dl = 2\pi R$):

$$B = \frac{\mu_0 I R}{4\pi(R^2 + x^2)^{3/2}}\cdot 2\pi R$$

$$\boxed{B = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}}$$

**Check.** At $x = 0$: $B = \mu_0 I/(2R)$, recovering the centre-of-loop result. As $x \to \infty$:
$B \to 0$, as expected.

### Ampere's Law

**Statement.** Ampere's circuital law: the line integral of $\mathbf{B}$ around any closed Amperian
loop equals $\mu_0$ times the net current threading that loop:

$$\boxed{\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc}}}$$

This is one of Maxwell's equations. It is the magnetic analogue of Gauss's law for electric fields.
Where Gauss's law exploits symmetry to find $E$ from enclosed charge, Ampere's law exploits symmetry
to find $B$ from enclosed current.

### Field Inside a Long Solenoid

Take a rectangular Amperian loop with one long side of length $L$ inside the solenoid (parallel to
the axis) and the other outside.

- **Inside:** $B$ is uniform and parallel to the axis, so $\mathbf{B} \cdot d\mathbf{l} = B\,dl$.
- **Outside:** $B \approx 0$ for an ideal long solenoid.
- **Ends:** $\mathbf{B} \perp d\mathbf{l}$, contributing zero.

$$\oint \mathbf{B} \cdot d\mathbf{l} = BL = \mu_0(nL)I$$

$$\boxed{B = \mu_0 n I}$$

where $n = N/L$ is the number of turns per unit length. The field is uniform inside and independent
of the solenoid's radius (for a long solenoid).

**Toroid.** A solenoid bent into a circle. Ampere's law with a circular path of radius $r$ inside
the toroid gives $B = \mu_0 NI/(2\pi r)$, where $N$ is the total number of turns. Unlike the
solenoid, the field varies with $r$.

## 7. Force Between Two Parallel Wires

### Derivation

Wire 1 (current $I_1$) creates a magnetic field at distance $d$. By Ampere's law (or the Biot-Savart
result for an infinite wire):

$$B_1 = \frac{\mu_0 I_1}{2\pi d}$$

Wire 2 (current $I_2$, length $L$) in this field experiences a force:

$$F = B_1 I_2 L = \frac{\mu_0 I_1 I_2 L}{2\pi d}$$

$$\boxed{\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}}$$

### Direction: Attractive or Repulsive

Apply the right-hand grip rule to wire 1 to find $\mathbf{B}_1$ at wire 2's position, then Fleming's
left-hand rule to wire 2 for the force direction:

- **Same-direction currents** $\to$ attractive force
- **Opposite-direction currents** $\to$ repulsive force

:::tip
Exam Technique To remember the direction: same-direction currents attract, opposite-direction
currents repel. Think of it as two parallel beams of particles moving together (attract) versus
head-on (repel).
:::

### Definition of the Ampere

Setting $I_1 = I_2 = 1$ A and $d = 1$ m:

$$\frac{F}{L} = \frac{\mu_0}{2\pi} = \frac{4\pi \times 10^{-7}}{2\pi} = 2 \times 10^{-7}\ \mathrm{N m}^{-1}$$

The ampere is defined such that this force is exactly $2 \times 10^{-7}$ N per metre of length.

<details>
<summary>Worked Example: Force Between Wires</summary>
Two parallel wires 10 cm apart carry currents of 10 A and 10 A in the same direction. Find the
force per unit length and its nature.

**Answer.**
$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi \times 10^{-7})(10)(10)}{2\pi(0.10)} = \frac{4 \times 10^{-7} \times 100}{0.20} = 2.0 \times 10^{-4}$
N m$^{-1}$.

Same-direction currents $\to$ attractive.

</details>

## 8. Charged Particles in Crossed Fields

The velocity selector (Section 3) is the special case of crossed $\mathbf{E}$ and $\mathbf{B}$
fields where the particle happens to have $v = E/B$. The general case is richer.

### $\mathbf{E} \perp \mathbf{B}$: Cycloid Motion

Set up coordinates: $\mathbf{B} = B\hat{\mathbf{z}}$ (into the page),
$\mathbf{E} = E\hat{\mathbf{y}}$ (upward). A positive charge $q$ enters with velocity
$\mathbf{v} = v\hat{\mathbf{x}}$ (rightward).

The equations of motion are:

$$m\ddot{x} = qv_y B, \qquad m\ddot{y} = qE - qv_x B$$

When $v = E/B$: $\ddot{y} = 0$ and $\ddot{x} = 0$ — straight-line motion (velocity selector).

When $v \neq E/B$: the particle follows a **cycloid**. Decompose the velocity into the drift
velocity $v_d = E/B$ and a residual circular component. The particle gyrates around a guiding centre
that drifts at $\mathbf{v}_d = \mathbf{E} \times \mathbf{B}/B^2$ perpendicular to both fields.

- $v = 0$ initially: the particle traces a **cusped cycloid** (loops with sharp cusps).
- $0 \lt v \lt E/B$: **curtate cycloid** (wavy path, no loops).
- $v = E/B$: straight line (velocity selector).
- $v \gt E/B$: **prolate cycloid** (loops with self-intersections).

:::warning
Common Pitfall: the drift velocity $v_d = E/B$ is independent of the particle's initial
velocity and charge. Even a stationary particle will drift at this speed. The drift direction is
always $\mathbf{E} \times \mathbf{B}$, perpendicular to both fields.
:::

### $\mathbf{E} \parallel \mathbf{B}$: Accelerating Helix

When $\mathbf{E}$ is parallel to $\mathbf{B}$, the perpendicular component of velocity still
produces circular motion, but the parallel component is accelerated by $E$:

$$v_{\parallel}(t) = v_{0\parallel} + \frac{qE}{m}t$$

The result is a helix whose pitch increases linearly with time. The circular radius and period are
unchanged.

### Helical Motion in General

A particle entering a uniform $\mathbf{B}$ field at angle $\theta$ to the field lines has:

$$v_{\perp} = v\sin\theta, \qquad v_{\parallel} = v\cos\theta$$

The perpendicular component produces circular motion (radius $r = mv_{\perp}/(Bq)$, period
$T = 2\pi m/(Bq)$), while the parallel component is unaffected. The particle traces a helix with:

$$\boxed{\mathrm{pitch} = v_{\parallel}\,T = \frac{2\pi m v_{\parallel}}{Bq}}$$

The pitch is the axial distance travelled per revolution. A faster parallel component or larger mass
gives a more stretched helix; a stronger field or larger charge gives a tighter helix.

## 9. Electromagnetic Induction — Extended Applications

### Eddy Currents

When a conductor moves through a non-uniform magnetic field, or when the flux through a bulk
conductor changes, circulating currents called **eddy currents** are induced throughout the
material.

By Lenz's law, eddy currents oppose the relative motion, producing a velocity-dependent drag force.
This converts kinetic energy into thermal energy via resistive heating ($P = I^2R$ in the bulk
material).

**Applications:**

- **Electromagnetic braking** — trains, roller coasters, industrial machinery. Braking force is
  proportional to speed (no friction, no wear, no fade).
- **Induction heating** — cooktops, metal hardening, brazing. High-frequency AC induces eddy
  currents that heat the conductor directly.

**Problems:**

- **Energy loss in transformers** — eddy currents in the iron core dissipate power.
- **Mitigation:** laminated cores (thin insulated sheets break up current loops) or ferrite cores
  (high resistivity).

### Self-Induction

When the current in a coil changes, the changing magnetic flux through the coil itself induces an
e.m.f.:

$$\boxed{\mathcal{E} = -L\frac{dI}{dt}}$$

where $L$ is the **self-inductance** measured in henry (H). 1 H = 1 Wb A$^{-1}$ = 1 V s A$^{-1}$.

The self-inductance of a long solenoid is $L = \mu_0 n^2 A l = \mu_0 N^2 A/l$, derived from
$\Phi = \mu_0 n I A$ per turn and $N\Phi = LI$.

#### Energy Stored in an Inductor

The power delivered to an inductor while current grows from 0 to $I$:

$$P = -\mathcal{E}\,I = LI\frac{dI}{dt}$$

$$E = \int_0^t P\,dt' = \int_0^I LI'\,dI' = \frac{1}{2}LI^2$$

$$\boxed{E = \frac{1}{2}LI^2}$$

**Proof.** This is the magnetic analogue of $\frac{1}{2}CV^2$ for capacitors. The energy is stored
in the magnetic field, analogous to how $\frac{1}{2}\epsilon_0 E^2$ is stored in the electric field.

### RL Circuits

Consider a series circuit of resistance $R$, inductance $L$, and applied voltage $V$.

**Current growth** (switch closed at $t = 0$): $V = IR + L\,dI/dt$.

$$\boxed{I = I_0\!\left(1 - e^{-t/\tau}\right)}, \qquad I_0 = \frac{V}{R}, \qquad \tau = \frac{L}{R}$$

**Current decay** (source removed, current was $I_0$):

$$\boxed{I = I_0\,e^{-t/\tau}}$$

The time constant $\tau = L/R$ has the same physical meaning as $\tau = RC$ in capacitor circuits:
after one time constant, the current reaches $1 - e^{-1} \approx 63\%$ of its final value; after
$5\tau$, it is within 1%.

:::tip
Exam Technique The differential equation $L\,dI/dt + IR = V$ is identical in form to
$RC\,dV_C/dt + V_C = V$. Both are first-order linear ODEs with exponential solutions. Use the same
problem-solving framework for both.
:::

### Transformers

A transformer consists of two coils (primary and secondary) sharing a common magnetic flux through
an iron core.

**Ideal transformer equation:**

$$\boxed{\frac{V_s}{V_p} = \frac{N_s}{N_p}}$$

**Derivation.** The same changing flux $\Phi$ threads both coils. By Faraday's law:
$V_p = N_p\,|d\Phi/dt|$ and $V_s = N_s\,|d\Phi/dt|$. Dividing gives the result. $\square$

For an ideal transformer (no losses): $V_p I_p = V_s I_s$, so $I_s/I_p = N_p/N_s$. A step-up
transformer increases voltage but decreases current, and vice versa.

**Energy losses in real transformers:**

- **Eddy currents** in the core — reduced by lamination.
- **Hysteresis** in the core — reduced by using soft iron.
- **Resistive heating** ($I^2R$) in the windings — reduced by thick copper wire.
- **Flux leakage** — not all flux links both coils.

<details>
<summary>Worked Example: Transformer</summary>
A transformer with 2000 turns on the primary and 100 turns on the secondary is connected to a 240 V
AC supply. The secondary delivers 5.0 A to a load. Assuming ideal behaviour, find the secondary
voltage and the primary current.

**Answer.** $V_s = V_p \times N_s/N_p = 240 \times 100/2000 = 12$ V.

$I_p = I_s \times N_s/N_p = 5.0 \times 100/2000 = 0.25$ A.

(Equivalently: $V_p I_p = V_s I_s$, so $I_p = 12 \times 5.0 / 240 = 0.25$ A.)

</details>

## 10. Mass Spectrometry

A mass spectrometer separates ions by their mass-to-charge ratio. The essential stages are:

1. **Ionisation** — atoms are ionised (e.g. by electron bombardment), producing singly charged
   positive ions.
2. **Acceleration** — ions are accelerated through a potential difference $V$, gaining kinetic
   energy $\frac{1}{2}mv^2 = qV$.
3. **Velocity selection** — crossed $\mathbf{E}$ and $\mathbf{B}$ fields select ions with $v = E/B$
   (Section 3).
4. **Deflection** — selected ions enter a region with a uniform $\mathbf{B}$ field only. They follow
   semicircular paths of radius $r = mv/(Bq)$.
5. **Detection** — ions strike a detector (photographic plate or electronic). The impact position
   depends on $r$, hence on $m$.

### Mass Separation

For ions of the same charge and velocity (selected by the velocity selector):

$$r = \frac{mv}{Bq}$$

$$\frac{r_1}{r_2} = \frac{m_1}{m_2}$$

The separation on the detector (for semicircular deflection) is:

$$\Delta x = 2(r_1 - r_2) = \frac{2v}{Bq}(m_1 - m_2)$$

This linear dependence on mass difference makes the mass spectrometer a precision instrument for
isotope analysis.

**Applications:** measuring isotope ratios (geology, archaeology), drug testing (detecting doping
compounds by mass signature), carbon dating ($^{14}$C/$^{12}$C ratio), trace element analysis.

<details>
<summary>Worked Example: Separating Neon Isotopes</summary>
Singly ionised neon atoms pass through a velocity selector with $E = 1.5 \times 10^5$ V m$^{-1}$ and
$B_1 = 0.50$ T, then enter a deflection chamber with $B_2 = 0.50$ T. Find the detector separation
between $^{20}$Ne$^+$ and $^{22}$Ne$^+$. ($1\ \mathrm{u} = 1.66 \times 10^{-27}$ kg.)

**Answer.** $v = E/B_1 = 1.5 \times 10^5 / 0.50 = 3.0 \times 10^5$ m s$^{-1}$.

For $^{20}$Ne$^+$:
$r_{20} = \frac{m_{20}v}{B_2 e} = \frac{20 \times 1.66 \times 10^{-27} \times 3.0 \times 10^5}{0.50 \times 1.60 \times 10^{-19}} = \frac{9.96 \times 10^{-21}}{8.0 \times 10^{-20}} = 0.125$
m.

For $^{22}$Ne$^+$: $r_{22} = \frac{22}{20} \times 0.125 = 0.137$ m.

Separation: $\Delta x = 2(0.137 - 0.125) = 0.024$ m $= 2.4$ cm.

</details>

## Problem Set

<details>
<summary>Problem 1</summary>
A wire of length 0.30 m carries a current of 5.0 A at $30^\circ$ to a magnetic field of 0.40 T. Calculate
the force on the wire.

**Answer.**
$F = BIl\sin\theta = 0.40 \times 5.0 \times 0.30 \times \sin 30° = 0.40 \times 5.0 \times 0.30 \times 0.5 = 0.30$
N.

<b>If you get this wrong, revise:</b>
[Magnetic Force on a Current-Carrying Wire](#1-magnetic-force-on-a-current-carrying-wire)

</details>

<details>
<summary>Problem 2</summary>
An electron moves at $2.0 \times 10^6$ m s$^{-1}$ perpendicular to a magnetic field of 0.80 T.
Calculate the radius of its circular path.

**Answer.**
$r = \frac{mv}{Be} = \frac{9.11 \times 10^{-31} \times 2.0 \times 10^6}{0.80 \times 1.60 \times 10^{-19}} = \frac{1.822 \times 10^{-24}}{1.28 \times 10^{-19}} = 1.42 \times 10^{-5}$
m $= 14.2\,\mu$m.

<b>If you get this wrong, revise:</b>
[Circular Motion in a Magnetic Field](#2-circular-motion-in-a-magnetic-field)

</details>

<details>
<summary>Problem 3</summary>
A velocity selector has $E = 6.0 \times 10^5$ V m$^{-1}$ and $B = 0.20$ T. Calculate the velocity of
particles that pass through undeflected.

**Answer.** $v = E/B = 6.0 \times 10^5 / 0.20 = 3.0 \times 10^6$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Velocity Selector](#3-velocity-selector)

</details>

<details>
<summary>Problem 4</summary>
A coil of 200 turns, each of area $0.010$ m$^2$, is placed in a magnetic field that decreases
uniformly from 0.50 T to 0.10 T in 0.05 s. Calculate the average induced e.m.f.

**Answer.** $d\Phi = A \cdot dB = 0.010 \times (0.50 - 0.10) = 0.004$ Wb.
$d(N\Phi)/dt = 200 \times 0.004 / 0.05 = 16$ V. $\mathcal{E} = 16$ V.

<b>If you get this wrong, revise:</b> [Faraday's Law](#4-faradays-law-of-electromagnetic-induction)

</details>

<details>
<summary>Problem 5</summary>
A proton and an alpha particle enter a magnetic field with the same velocity. The alpha particle has
twice the charge and four times the mass of the proton. Compare the radii of their circular paths.

**Answer.** $r = mv/(Bq)$.
$r_\alpha/r_p = \frac{(4m_p)v/(B \cdot 2e)}{m_p v/(Be)} = \frac{4}{2} = 2$. The alpha particle has
twice the radius.

<b>If you get this wrong, revise:</b>
[Circular Motion in a Magnetic Field](#2-circular-motion-in-a-magnetic-field)

</details>

<details>
<summary>Problem 6</summary>
A straight rod of length 0.50 m moves at 8.0 m s$^{-1}$ perpendicular to a magnetic field of 0.60 T.
Calculate the motional e.m.f. induced.

**Answer.** $\mathcal{E} = Blv = 0.60 \times 0.50 \times 8.0 = 2.4$ V.

<b>If you get this wrong, revise:</b> [Motional e.m.f.](#motional-emf)

</details>

<details>
<summary>Problem 7</summary>
A rectangular coil of 100 turns, dimensions 0.10 m $\times$ 0.05 m, rotates at 3000 rpm in a 0.20 T
magnetic field. Calculate the peak e.m.f.

**Answer.** $\omega = 3000 \times 2\pi/60 = 314$ rad s$^{-1}$. $A = 0.10 \times 0.05 = 0.005$ m$^2$.

$\mathcal{E}_0 = NBA\omega = 100 \times 0.20 \times 0.005 \times 314 = 31.4$ V.

<b>If you get this wrong, revise:</b>
[The Alternating Current Generator](#5-the-alternating-current-generator)

</details>

<details>
<summary>Problem 8</summary>
State Lenz's law and explain how it relates to conservation of energy.

**Answer.** Lenz's law states that the direction of the induced current is such that it opposes the
change in magnetic flux that produced it. This ensures energy conservation: if the induced current
reinforced the flux change, it would amplify the effect, creating energy from nothing. The
opposition means work must be done against the induced effects, and this work appears as electrical
energy in the circuit.

<b>If you get this wrong, revise:</b> [Lenz's Law](#lenzs-law)

</details>

<details>
<summary>Problem 9</summary>
An electron moves in a circle of radius 1.0 mm in a magnetic field of 0.30 T. Calculate its speed
and kinetic energy.

**Answer.**
$v = \frac{Ber}{m} = \frac{1.60 \times 10^{-19} \times 0.30 \times 0.001}{9.11 \times 10^{-31}} = \frac{4.8 \times 10^{-23}}{9.11 \times 10^{-31}} = 5.27 \times 10^7$
m s$^{-1}$.

$E_k = \frac{1}{2}mv^2 = \frac{1}{2} \times 9.11 \times 10^{-31} \times (5.27 \times 10^7)^2 = 1.27 \times 10^{-16}$
J.

<b>If you get this wrong, revise:</b>
[Circular Motion in a Magnetic Field](#2-circular-motion-in-a-magnetic-field)

</details>

<details>
<summary>Problem 10</summary>
A magnet is pushed into a coil of 50 turns, and the magnetic flux through each turn increases by
$4.0 \times 10^{-3}$ Wb in 0.10 s. Calculate the average induced e.m.f. and explain which end of the
coil acts as a north pole.

**Answer.** $\mathcal{E} = N\frac{d\Phi}{dt} = 50 \times \frac{4.0 \times 10^{-3}}{0.10} = 2.0$ V.

By Lenz's law, the induced current opposes the increasing flux. If the magnet's north pole is being
pushed in, the coil end facing the magnet becomes a north pole (to repel the magnet), so current
flows anticlockwise when viewed from the magnet's side.

<b>If you get this wrong, revise:</b> [Faraday's Law](#4-faradays-law-of-electromagnetic-induction)
and [Lenz's Law](#lenzs-law)

</details>

<details>
<summary>Problem 11</summary>
A circular coil of radius 10 cm carries a current of 5.0 A. Calculate the magnetic field at the
centre of the coil.

**Answer.**
$B = \frac{\mu_0 I}{2R} = \frac{4\pi \times 10^{-7} \times 5.0}{2 \times 0.10} = \frac{6.28 \times 10^{-6}}{0.20} = 3.14 \times 10^{-5}$
T $= \pi \times 10^{-5}$ T $\approx 31.4\,\mu$T.

<b>If you get this wrong, revise:</b>
[Biot-Savart Law and Ampere's Law](#6-biot-savart-law-and-amperes-law)

</details>

<details>
<summary>Problem 12</summary>
Two parallel wires 10 cm apart carry currents of 10 A and 10 A in the same direction. Calculate the
force per unit length between them and state whether it is attractive or repulsive.

**Answer.**
$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{(4\pi \times 10^{-7})(10)(10)}{2\pi(0.10)} = \frac{4 \times 10^{-7} \times 100}{0.20} = 2.0 \times 10^{-4}$
N m$^{-1}$.

Same-direction currents $\to$ attractive.

<b>If you get this wrong, revise:</b>
[Force Between Two Parallel Wires](#7-force-between-two-parallel-wires)

</details>

<details>
<summary>Problem 13</summary>
A solenoid of length 0.20 m produces a magnetic field of 2.5 mT when carrying a current of 5.0 A.
Calculate the number of turns required.

**Answer.** $B = \mu_0 n I = \mu_0 (N/L) I$, so
$N = \frac{BL}{\mu_0 I} = \frac{2.5 \times 10^{-3} \times 0.20}{4\pi \times 10^{-7} \times 5.0} = \frac{5.0 \times 10^{-4}}{6.28 \times 10^{-6}} = 79.6$.

Approximately 80 turns.

<b>If you get this wrong, revise:</b>
[Biot-Savart Law and Ampere's Law](#6-biot-savart-law-and-amperes-law)

</details>

<details>
<summary>Problem 14</summary>
A small neodymium magnet of mass 10 g falls through a vertical copper tube. It reaches a terminal
velocity of 8.0 cm s$^{-1}$ due to eddy current braking. Calculate the average braking force and the
power dissipated as heat.

**Answer.** At terminal velocity the braking force equals weight:
$F = mg = 0.010 \times 9.81 = 0.098$ N $= 98$ mN.

Power dissipated: $P = Fv = 0.098 \times 0.080 = 7.8 \times 10^{-3}$ W $= 7.8$ mW.

<b>If you get this wrong, revise:</b>
[Electromagnetic Induction — Extended Applications](#9-electromagnetic-induction--extended-applications)

</details>

<details>
<summary>Problem 15</summary>
A 100 mH inductor is connected in series with a 200 $\Omega$ resistor and a 12 V battery. Calculate
(a) the time constant, (b) the current 1.0 ms after the circuit is switched on.

**Answer.** (a) $\tau = L/R = 0.100/200 = 5.0 \times 10^{-4}$ s $= 0.50$ ms.

(b) $I_0 = V/R = 12/200 = 0.060$ A.
$I = I_0(1 - e^{-t/\tau}) = 0.060(1 - e^{-1.0/0.50}) = 0.060(1 - e^{-2}) = 0.060 \times 0.865 = 0.052$
A $= 52$ mA.

<b>If you get this wrong, revise:</b>
[Electromagnetic Induction — Extended Applications](#9-electromagnetic-induction--extended-applications)

</details>

<details>
<summary>Problem 16</summary>
A transformer has 2000 turns on the primary and 100 turns on the secondary. The primary is connected
to a 240 V AC supply. The secondary delivers 5.0 A to a load. Calculate (a) the secondary voltage,
(b) the primary current, assuming an ideal transformer.

**Answer.** (a) $V_s = V_p \times N_s/N_p = 240 \times 100/2000 = 12$ V.

(b) $I_p = I_s \times N_s/N_p = 5.0 \times 100/2000 = 0.25$ A.

<b>If you get this wrong, revise:</b>
[Electromagnetic Induction — Extended Applications](#9-electromagnetic-induction--extended-applications)

</details>

<details>
<summary>Problem 17</summary>
Singly ionised neon atoms pass through a velocity selector with $E = 1.5 \times 10^5$ V m$^{-1}$ and
$B_1 = 0.50$ T, then enter a deflection chamber with $B_2 = 0.50$ T. Find the separation on the
detector between $^{20}$Ne$^+$ and $^{22}$Ne$^+$. ($1\ \mathrm{u} = 1.66 \times 10^{-27}$ kg.)

**Answer.** $v = E/B_1 = 1.5 \times 10^5 / 0.50 = 3.0 \times 10^5$ m s$^{-1}$.

$r_{20} = \frac{m_{20}v}{B_2 e} = \frac{20 \times 1.66 \times 10^{-27} \times 3.0 \times 10^5}{0.50 \times 1.60 \times 10^{-19}} = \frac{9.96 \times 10^{-21}}{8.0 \times 10^{-20}} = 0.125$
m.

$r_{22} = \frac{22}{20} \times 0.125 = 0.137$ m.

$\Delta x = 2(0.137 - 0.125) = 0.024$ m $= 2.4$ cm.

<b>If you get this wrong, revise:</b> [Mass Spectrometry](#10-mass-spectrometry)

</details>

<details>
<summary>Problem 18</summary>
A proton enters a uniform magnetic field of 0.40 T at an angle of $30^\circ$ to the field lines with speed
$5.0 \times 10^6$ m s$^{-1}$. Calculate (a) the radius of the helical path, (b) the pitch of the
helix.

**Answer.** $v_\perp = v\sin 30° = 5.0 \times 10^6 \times 0.5 = 2.5 \times 10^6$ m s$^{-1}$.
$v_\parallel = v\cos 30° = 5.0 \times 10^6 \times 0.866 = 4.33 \times 10^6$ m s$^{-1}$.

(a)
$r = \frac{mv_\perp}{Bq} = \frac{1.67 \times 10^{-27} \times 2.5 \times 10^6}{0.40 \times 1.60 \times 10^{-19}} = \frac{4.18 \times 10^{-21}}{6.4 \times 10^{-20}} = 0.0653$
m $= 6.53$ cm.

(b)
$T = \frac{2\pi m}{Bq} = \frac{2\pi \times 1.67 \times 10^{-27}}{0.40 \times 1.60 \times 10^{-19}} = \frac{1.05 \times 10^{-26}}{6.4 \times 10^{-20}} = 1.64 \times 10^{-7}$
s.

$\mathrm{pitch} = v_\parallel T = 4.33 \times 10^6 \times 1.64 \times 10^{-7} = 0.710$ m $= 71.0$ cm.

<b>If you get this wrong, revise:</b>
[Charged Particles in Crossed Fields](#8-charged-particles-in-crossed-fields)

</details>
