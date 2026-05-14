---
title: Magnetism
description:
  "Magnetism -- Magnetic Force, Biot-Savart Law, Ampere's Law, Faraday's Law, Lenz's Law,
  Inductance, RL and LC Circuits, and Maxwell's Equations (AP Physics C: E&"
date: 2026-05-05
tags:
  - Physics
  - AP
categories:
  - Physics
slug: magnetism
---

## Magnetic Force on a Moving Charge

A charge $q$ moving with velocity $\vec{v}$ in a magnetic field $\vec{B}$ experiences:

$$
\vec{F} = q\vec{v} \times \vec{B}
$$

The magnitude is $F = qvB\sin\theta$Where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$. The
Direction is given by the right-hand rule.

### Key Properties

- The magnetic force is always perpendicular to both $\vec{v}$ and $\vec{B}$.
- The magnetic force does no work ($\vec{F} \perp \vec{v}$So $W = \int \vec{F} \cdot d\vec{l} = 0$).
- The magnetic force changes the direction of motion, not the speed.

### Circular Motion in a Magnetic Field

A charged particle moving perpendicular to a uniform magnetic field follows a circular path. Setting
$F = ma$:

$$
QvB = \frac{mv^2}{r} \implies r = \frac{mv}{qB}
$$

The cyclotron frequency is:

$$
F = \frac{qB}{2\pi m}, \qquad \omega = \frac{qB}{m}
$$

### Motion at an Angle to the Field

If $\vec{v}$ makes angle $\theta$ with $\vec{B}$The motion is helical. The parallel component
$v_\parallel = v\cos\theta$ is unaffected. The perpendicular component $v_\perp = v\sin\theta$
produces Circular motion with radius $r = mv_\perp/(qB)$ and pitch
$p = v_\parallel \cdot T = 2\pi m v_\parallel/(qB)$.

## Magnetic Force on a Current-Carrying Wire

For a wire of length $L$ carrying current $I$ in a uniform field:

$$
\vec{F} = I\vec{L} \times \vec{B}
$$

For a non-uniform field or curved wire, use the differential form:

$$
D\vec{F} = I\, d\vec{l} \times \vec{B}
$$

:::info[Example: Force on a semicircular wire]

A semicircular wire of radius $R$ carries current $I$ in a uniform magnetic field $\vec{B}$ directed
Into the page. The straight ends of the wire are along the diameter.

The force on the straight segment of length $2R$ is $F = I(2R)B$ (by the right-hand rule, directed
Upward). For the curved part, consider a segment at angle $\theta$:

$$
DF = I(R\, d\theta)B
$$

Only the $y$-components survive: $dF_y = dF \sin\theta$. Integrating from $\theta = 0$ to $\pi$:

$$
F_y = \int_0^\pi IRB\sin\theta\, d\theta = IRB[-\cos\theta]_0^\pi = 2IRB
$$

The total force on the semicircular wire is $2IRB$The same as on a straight wire of length $2R$.

:::

## Torque on a Current Loop

A rectangular loop of area $A$ carrying current $I$ in a uniform field $\vec{B}$ experiences torque:

$$
\vec{\tau} = \vec{\mu} \times \vec{B}
$$

Where the magnetic dipole moment is $\vec{\mu} = NI\vec{A}$With $\vec{A}$ directed normal to the
loop By the right-hand rule and $N$ is the number of turns.

The magnitude is $\tau = NIAB\sin\alpha$Where $\alpha$ is the angle between $\vec{\mu}$ and
$\vec{B}$.

## Biot-Savart Law

The magnetic field produced by a current element $I\, d\vec{l}$ at position $\vec{r}$ from the
element:

$$
D\vec{B} = \frac{\mu_0}{4\pi} \frac{I\, d\vec{l} \times \hat{r}}{r^2}
$$

Where $\mu_0 = 4\pi \times 10^{-7}$ T$\cdot$M/A is the permeability of free space.

### Field of a Long Straight Wire

$$
B = \frac{\mu_0 I}{2\pi r}
$$

**Derivation:** Place the wire along the $z$-axis. A current element $I\, dz$ at the origin
produces:

$$
DB = \frac{\mu_0}{4\pi}\frac{I\, dz}{r^2}\sin\theta
$$

Where $\sin\theta = R/r$ and $r = \sqrt{z^2 + R^2}$. Let $z = R\tan\phi$$dz = R\sec^2\phi\, d\phi$:

$$
DB = \frac{\mu_0 I}{4\pi} \frac{R\sec^2\phi\, d\phi}{R^2\sec^2\phi} \cdot \sin\phi = \frac{\mu_0 I}{4\pi R}\sin\phi\, d\phi
$$

Integrating from $\phi = 0$ to $\pi$ (infinite wire):

$$
B = \frac{\mu_0 I}{4\pi R}\int_0^\pi \sin\phi\, d\phi = \frac{\mu_0 I}{4\pi R}[-\cos\phi]_0^\pi = \frac{\mu_0 I}{2\pi R}
$$

### Field on the Axis of a Circular Loop

$$
B = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}
$$

At the center ($x = 0$): $B = \dfrac{\mu_0 I}{2R}$.

**Derivation:** Each current element $I\, dl$ produces
$dB = \frac{\mu_0}{4\pi}\frac{I\, dl}{r^2}\sin 90°$. By symmetry, only the axial component survives:

$$
DB_x = \frac{\mu_0 I}{4\pi r^2}\cdot\frac{R}{r}\, dl = \frac{\mu_0 IR}{4\pi(R^2+x^2)^{3/2}}\, dl
$$

$$
B_x = \frac{\mu_0 IR}{4\pi(R^2+x^2)^{3/2}}\oint dl = \frac{\mu_0 I \cdot 2\pi R^2}{4\pi(R^2+x^2)^{3/2}} = \frac{\mu_0 IR^2}{2(R^2+x^2)^{3/2}}
$$

## Ampere's Law

Ampere's law relates the line integral of $\vec{B}$ around a closed loop to the enclosed current:

$$
\oint_C \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc{}}
$$

### Field Inside a Long Solenoid

For a solenoid with $n$ turns per unit length carrying current $I$Choose a rectangular Amperian loop
With one side inside the solenoid and one outside.

$$
B = \mu_0 n I
$$

This result is valid for an ideal (infinitely long) solenoid and is a good approximation near the
center Of a long solenoid.

### Field Inside a Toroid

A toroid with $N$ turns carrying current $I$Inner radius $a$Outer radius $b$:

$$
B = \frac{\mu_0 N I}{2\pi r}
$$

Valid for $a < r < b$.

:::info[Example: Thick conductor with non-uniform current density]

A long cylindrical conductor of radius $R$ carries current $I$ with current density $J(r) = J_0 r/R$
for $0 \le r \le R$. Find $B$ inside and outside.

**Inside ($r \le R$):** Use a circular Amperian loop of radius $r$.

$$
I_{\text{enc{}} = \int_0^r J(r') \cdot 2\pi r'\, dr' = \frac{2\pi J_0}{R}\int_0^r r'^2\, dr' = \frac{2\pi J_0 r^3}{3R}
$$

$$
B \cdot 2\pi r = \mu_0 \frac{2\pi J_0 r^3}{3R} \implies B = \frac{\mu_0 J_0 r^2}{3R}
$$

To express in terms of $I$Find the total current:

$$
I = \frac{2\pi J_0 R^3}{3R} = \frac{2\pi J_0 R^2}{3} \implies J_0 = \frac{3I}{2\pi R^2}
$$

$$
B = \frac{\mu_0 I r^2}{2\pi R^3}
$$

**Outside ($r > R$):** $I_{\text{enc{}} = I$.

$$
B = \frac{\mu_0 I}{2\pi r}
$$

:::

## Faraday's Law

Faraday's law states that a changing magnetic flux induces an EMF:

$$
\mathcal{{'}E{}'} = -\frac{d\Phi_B}{dt}
$$

Where the magnetic flux through a surface is:

$$
\Phi_B = \int_S \vec{B} \cdot d\vec{A}
$$

For a uniform field perpendicular to a flat surface of area $A$: $\Phi_B = BA$.

### Lenz's Law

The negative sign in Faraday's law encodes Lenz's law: the induced EMF drives a current whose
magnetic Field opposes the change in flux that produced it. The induced current acts to maintain the
status quo.

### Motional EMF

A conducting bar of length $L$ moving with velocity $v$ perpendicular to a uniform field $B$:

$$
\mathcal{{'}E{}'} = BLv
$$

**Derivation:** The free charges in the bar experience a magnetic force $F = qvB$. This is
equivalent To an electric field $E = vB$ along the bar. The EMF is:

$$
\mathcal{{'}E{}'} = \int_0^L E\, dl = \int_0^L vB\, dl = BLv
$$

:::info[Example: Rotating loop in a magnetic field]

A rectangular loop of area $A$ with $N$ turns rotates with angular velocity $\omega$ in a uniform
Magnetic field $B$. The flux through the loop is:

$$
\Phi_B = NBA\cos(\omega t)
$$

The induced EMF is:

$$
\mathcal{{'}E{}'} = -\frac{d\Phi_B}{dt} = NBA\omega\sin(\omega t) = \mathcal{{'}E{}'}_0\sin(\omega t)
$$

Where $\mathcal{{'}E{}'}_0 = NBA\omega$ is the peak EMF. This is the principle behind AC generators.

:::

:::info[Example: Induced EMF in a changing field]

A circular loop of radius $r = 0.1$ m is in a region where the magnetic field increases as
$B(t) = (0.5 + 0.2t)$ T. The loop has resistance $R = 2\,\Omega$. Find the induced current.

$$
\Phi_B = B \cdot \pi r^2 = (0.5 + 0.2t)\pi(0.1)^2 = (0.5 + 0.2t)(0.0314)\,\text{Wb{}
$$

$$
\mathcal{{'}E{}'} = -\frac{d\Phi_B}{dt} = -0.2 \times 0.0314 = -0.00628\,\text{V{}
$$

$$
I = \frac{|\mathcal{{'}E{}'}|}{R} = \frac{0.00628}{2} = 3.14\,\text{mA{}
$$

By Lenz's law, the current flows counterclockwise (viewed along $\vec{B}$) to oppose the increasing
flux.

:::

## Inductance

### Self-Inductance

The self-induced EMF in a coil is:

$$
\mathcal{{'}E{}'} = -L\frac{dI}{dt}
$$

Where $L$ is the inductance, measured in henrys (H). For a long solenoid with $N$ turns, length
$\ell$ Cross-sectional area $A$:

$$
L = \frac{\mu_0 N^2 A}{\ell} = \mu_0 n^2 A \ell
$$

Where $n = N/\ell$ is the turns per unit length.

### Mutual Inductance

When the current in coil 1 changes, it induces an EMF in coil 2:

$$
\mathcal{{'}E{}'}_2 = -M\frac{dI_1}{dt}
$$

Where $M$ is the mutual inductance. For a solenoid with a secondary coil of $N_2$ turns:

$$
M = \frac{\mu_0 N_1 N_2 A}{\ell}
$$

### Energy Stored in an Inductor

$$
U = \frac{1}{2}LI^2
$$

**Derivation:** The power delivered to the inductor is $P = \mathcal{{'}E{}'}I = LI(dI/dt)$.
Integrating:

$$
U = \int_0^t P\, dt' = L\int_0^I I'\, dI' = \frac{1}{2}LI^2
$$

### RL Circuits

When a switch is closed in a circuit with resistance $R$ and inductance $L$:

$$
\mathcal{{'}E{}'} - IR - L\frac{dI}{dt} = 0
$$

This is a first-order linear ODE with solution:

$$
I(t) = \frac{\mathcal{{'}E{}'}}{R}\left(1 - e^{-t/(L/R)}\right) = I_{\max}\left(1 - e^{-t/\tau_L}\right)
$$

Where $\tau_L = L/R$ is the inductive time constant.

When the switch is opened (current decaying):

$$
I(t) = I_0 e^{-t/\tau_L}
$$

**Voltage across the inductor during charging:**

$$
V_L = L\frac{dI}{dt} = \mathcal{{'}E{}'} e^{-t/\tau_L}
$$

At $t = 0$All the voltage is across the inductor. At $t \to \infty$All the voltage is across the
Resistor.

### LC Circuits

An LC circuit (inductor and capacitor, no resistance) exhibits simple harmonic oscillation. By KVL:

$$
-L\frac{dI}{dt} + \frac{Q}{C} = 0
$$

Since $I = dQ/dt$ and $dI/dt = d^2Q/dt^2$:

$$
\frac{d^2Q}{dt^2} + \frac{1}{LC}Q = 0
$$

This is the equation for simple harmonic motion with angular frequency:

$$
\omega = \frac{1}{\sqrt{LC}}, \qquad f = \frac{1}{2\pi\sqrt{LC}}
$$

The solutions are:

$$
Q(t) = Q_0\cos(\omega t + \phi)
$$

$$
I(t) = -Q_0\omega\sin(\omega t + \phi) = -I_0\sin(\omega t + \phi)
$$

The charge and current oscillate $90°$ out of phase. Energy oscillates between the capacitor
($U_C = Q^2/(2C)$) and the inductor ($U_L = LI^2/2$), with total energy conserved:

$$
U_{\text{total{}} = \frac{Q_0^2}{2C} = \frac{1}{2}LI_0^2
$$

:::info[Example: LC circuit energy analysis]

An LC circuit has $L = 10$ mH and $C = 100\,\mu\text{F{}$. The capacitor is initially charged to
$Q_0 = 50\,\mu\text{C{}$. Find (a) the oscillation frequency, (b) the maximum current, and (c) the
Charge when the current is half its maximum value.

(a)
$f = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{(0.01)(10^{-4})}} = \frac{1}{2\pi \times 10^{-3}} = 159\,\text{Hz{}$

(b)
$I_0 = Q_0\omega = Q_0/\sqrt{LC} = (50 \times 10^{-6})/\sqrt{10^{-6}} = 50 \times 10^{-6}/10^{-3} = 0.05\,\text{A{} = 50\,\text{mA{}$

(c) When $I = I_0/2 = 25\,\text{mA{}$:

$$
U_L = \frac{1}{2}LI^2 = \frac{1}{2}(0.01)(0.025)^2 = 3.125 \times 10^{-6}\,\text{J{}
$$

$$
U_C = U_{\text{total{}} - U_L = \frac{(50 \times 10^{-6})^2}{2(10^{-4})} - 3.125 \times 10^{-6} = 12.5 \times 10^{-6} - 3.125 \times 10^{-6} = 9.375 \times 10^{-6}\,\text{J{}
$$

$$
Q = \sqrt{2CU_C} = \sqrt{2(10^{-4})(9.375 \times 10^{-6})} = \sqrt{1.875 \times 10^{-9}} = 43.3\,\mu\text{C{}
$$

:::

## Maxwell's Equations (Integral Form)

The four Maxwell's equations unify electricity and magnetism:

| Equation                    | Law                                                           | Integral Form                                                                               |
| --------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Gauss's Law for Electricity | Electric charges produce electric fields                      | $\oint \vec{E} \cdot d\vec{A} = \dfrac{Q_{\text{enc{}}}{\epsilon_0}$                        |
| Gauss's Law for Magnetism   | No magnetic monopoles                                         | $\oint \vec{B} \cdot d\vec{A} = 0$                                                          |
| Faraday's Law               | Changing magnetic fields produce electric fields              | $\oint \vec{E} \cdot d\vec{l} = -\dfrac{d\Phi_B}{dt}$                                       |
| Ampere-Maxwell Law          | Currents and changing electric fields produce magnetic fields | $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc{}} + \mu_0\epsilon_0\dfrac{d\Phi_E}{dt}$ |

### The Displacement Current

Maxwell added the displacement current term $\mu_0\epsilon_0 \frac{d\Phi_E}{dt}$ to Ampere's law.
This Term accounts for the fact that a changing electric field (as between capacitor plates) also
produces a Magnetic field, even in the absence of a physical current.

$$
I_d = \epsilon_0 \frac{d\Phi_E}{dt}
$$

:::info[Example: Displacement current in a charging capacitor]

A parallel plate capacitor with plate area $A$ and separation $d$ is being charged by a current $I$.
Find the magnetic field at distance $r$ from the axis between the plates ($r < R_{\text{plate{}}$).

The displacement current equals the conduction current (by charge conservation):

$$
I_d = I
$$

The electric flux through a disk of radius $r$ is:

$$
\Phi_E = E \cdot \pi r^2 = \frac{V}{d}\pi r^2
$$

Since $V = Q/C = Qd/(\epsilon_0 A)$We have $E = Q/(\epsilon_0 A)$So
$\Phi_E = Q\pi r^2/(\epsilon_0 A)$.

Apply Ampere-Maxwell law with a circular Amperian loop of radius $r$:

$$
B \cdot 2\pi r = \mu_0 \epsilon_0 \frac{d\Phi_E}{dt} = \mu_0 \epsilon_0 \frac{d}{dt}\left(\frac{Q\pi r^2}{\epsilon_0 A}\right) = \mu_0 \frac{\pi r^2}{A}\frac{dQ}{dt} = \mu_0 I \frac{r^2}{R^2}
$$

$$
B = \frac{\mu_0 I r}{2\pi R^2}
$$

This is the same as the field inside a wire of radius $R$ carrying current $I$.

:::

## Common Pitfalls

1. **Wrong direction for the magnetic force.** Use $\vec{F} = q\vec{v} \times \vec{B}$Not
   $\vec{B} \times \vec{v}$. The cross product is not commutative. For negative charges, reverse the
   direction.
2. **Confusing Gauss's law for magnetism with Gauss's law for electricity.**
   $\oint \vec{B} \cdot
 d\vec{A} = 0$ always (no magnetic monopoles). This does not mean $B = 0$
   everywhere; it means the net flux through any closed surface is zero.
3. **Incorrect sign in Faraday's law.** The negative sign matters. It represents Lenz's law. If you
   forget it, your induced current will be in the wrong direction.
4. **Using Ampere's law without symmetry.** Like Gauss's law, Ampere's law is always true but only
   useful when symmetry allows you to extract $B$ from the integral. Choose Amperian loops that
   match the symmetry: circles for straight wires and solenoids.
5. **Forgetting that inductors oppose changes in current.** At $t = 0$ in an RL circuit, the
   inductor acts as an open circuit ($I = 0$). At steady state, it acts as a short circuit
   ($V_L = 0$). This is the opposite of a capacitor.
6. **Confusing self-inductance and mutual inductance.** Self-inductance $L$ relates the EMF in a
   coil to its own changing current. Mutual inductance $M$ relates the EMF in one coil to the
   changing current in another coil.
7. **Incorrectly computing flux for non-perpendicular fields.** When $\vec{B}$ is not perpendicular
   to the surface, use $\Phi_B = BA\cos\theta$Not $BA$. The angle $\theta$ is between $\vec{B}$ and
   the surface normal.
8. **Forgetting the displacement current in Ampere-Maxwell law.** When applying Ampere's law between
   capacitor plates (or in any region where $d\vec{E}/dt \neq 0$), you must include the displacement
   current term. Without it, Ampere's law gives incorrect results.
9. **Assuming the magnetic field inside a solenoid is zero.** The field inside an ideal solenoid is
   uniform and given by $B = \mu_0 nI$. The field outside is approximately zero.

## Practice Questions

1. A proton ($m_p = 1.67 \times 10^{-27}$ kg, $q = 1.6 \times 10^{-19}$ C) enters a magnetic field
   of $B = 0.5$ T with velocity $v = 3 \times 10^6$ m/s perpendicular to the field. Find the radius
   of the circular orbit and the cyclotron frequency.

2. A wire carrying $I = 10$ A is bent into a right angle. Find the magnetic field at point $P$
   located at distance $d = 5$ cm from the vertex along the angle bisector.

3. A solenoid of length $0.3$ m has 1000 turns and carries a current of $5$ A. Find the magnetic
   field inside and the inductance if the cross-sectional area is $4 \times 10^{-4}$ m$^2$.

4. A square loop of side $0.2$ m is in a magnetic field $B = 0.5$ T perpendicular to the loop. The
   field decreases to zero in $0.1$ s. If the loop has resistance $2\,\Omega$Find the induced
   current and the energy dissipated.

5. An RL circuit has $R = 50\,\Omega$ and $L = 0.2$ H connected to a $12$ V battery. Find (a) the
   time constant, (b) the current at $t = 10$ ms, and (c) the voltage across the inductor at
   $t = 10$ ms.

6. An LC circuit has $L = 25$ mH and $C = 40\,\mu\text{F{}$. The maximum charge on the capacitor is
   $80\,\mu\text{C{}$. Find (a) the oscillation frequency, (b) the maximum current, and (c) the
   total energy in the circuit.

<details>
<summary>Question 7: AP Exam-Style -- Biot-Savart and Ampere combined</summary>

A long straight wire carries current $I_1 = 10$ A. A circular loop of radius $R = 0.05$ m lies in
the Same plane as the wire, with its center at distance $d = 0.1$ m from the wire. The loop carries
current $I_2 = 5$ A. Find the net magnetic field at the center of the loop.

</details>

<details>
<summary>Answer</summary>

The field from the straight wire at the center of the loop (distance $d = 0.1$ m):

$$B_{\text{wire{}} = \frac{\mu_0 I_1}{2\pi d} = \frac{(4\pi \times 10^{-7})(10)}{2\pi(0.1)} = \frac{2 \times 10^{-5}}{0.1} = 2.0 \times 10^{-4}\,\text{T{}$$

By the right-hand rule, if the wire is vertical and the loop is to the right, the field from the
wire At the loop center points out of the page.

The field from the circular loop at its center:

$$B_{\text{loop{}} = \frac{\mu_0 I_2}{2R} = \frac{(4\pi \times 10^{-7})(5)}{2(0.05)} = \frac{2\pi \times 10^{-6}}{0.05} = 1.257 \times 10^{-4}\,\text{T{}$$

The direction depends on the current direction in the loop. If the loop current flows
counterclockwise (viewed from above), the field at the center points out of the page (same direction
as the wire's Field).

If both fields are in the same direction:

$$B_{\text{net{}} = (2.0 + 1.257) \times 10^{-4} = 3.26 \times 10^{-4}\,\text{T{}$$

If opposite:

$$B_{\text{net{}} = (2.0 - 1.257) \times 10^{-4} = 0.74 \times 10^{-4}\,\text{T{}$$

</details>

<details>
<summary>Question 8: AP Exam-Style -- Faraday's law with a falling loop</summary>

A rectangular conducting loop of width $w = 0.1$ m and height $h = 0.2$ m falls vertically into a
Region of uniform magnetic field $B = 0.5$ T directed into the page. The field region extends from
$y = 0$ to $y = 0.3$ m. The loop has mass $m = 0.01$ kg and resistance $R = 0.5\,\Omega$. Find the
Terminal velocity of the loop as it enters the field.

</details>

<details>
<summary>Answer</summary>

As the loop enters the field, the flux through the loop changes. Only the bottom edge of width $w$
is Inside the field during entry.

The motional EMF: $\mathcal{{'}E{}'} = Bwv$.

The induced current: $I = \mathcal{{'}E{}'}/R = Bwv/R$.

By Lenz's law, the induced current creates a force opposing the motion (upward). The force on the
Bottom wire is:

$$F_B = BIw = \frac{B^2 w^2 v}{R}$$

At terminal velocity, this magnetic force balances gravity:

$$
mg = \frac{B^2 w^2 v_T}{R}
$$

$$
v_T = \frac{mgR}{B^2 w^2} = \frac{(0.01)(9.8)(0.5)}{(0.5)^2(0.1)^2} = \frac{0.049}{0.0025} = 19.6\,\text{m/s{}
$$

</details>

<details>
<summary>Question 9: AP Exam-Style -- RL circuit analysis</summary>

An RL circuit with $R = 100\,\Omega$ and $L = 0.5$ H is connected to a DC source of
$\mathcal{{'}E{}'} = 20$ V. At $t = 0$The switch is closed. (a) Derive the current as a function of
time. (b) At what time is The current increasing at half its initial rate? (c) How much energy has
been stored in the inductor When the current reaches 80% of its maximum value?

</details>

<details>
<summary>Answer</summary>

(a) The ODE is $\mathcal{{'}E{}'} = L\frac{dI}{dt} + IR$.

Rearranging: $\frac{dI}{dt} = \frac{\mathcal{{'}E{}'}}{L} - \frac{R}{L}I$.

Let $I_{\max} = \mathcal{{'}E{}'}/R = 20/100 = 0.2$ A and $\tau = L/R = 0.5/100 = 5 \times 10^{-3}$
s.

Solution: $I(t) = I_{\max}(1 - e^{-t/\tau}) = 0.2(1 - e^{-200t})$.

(b) The initial rate of current increase is $dI/dt|_{t=0} = \mathcal{{'}E{}'}/L = 20/0.5 = 40$ A/s.

Half of this is $20$ A/s:

$$\frac{dI}{dt} = \frac{\mathcal{{'}E{}'}}{L}e^{-t/\tau} = 40e^{-200t} = 20$$

$$e^{-200t} = 0.5 \implies t = \frac{\ln 2}{200} = 3.47 \times 10^{-3}\,\text{s{} = 3.47\,\text{ms{}$$

Note: this occurs at $t = \tau \ln 2$.

(c) At $I = 0.8 I_{\max} = 0.16$ A:

$$U_L = \frac{1}{2}LI^2 = \frac{1}{2}(0.5)(0.16)^2 = \frac{1}{2}(0.5)(0.0256) = 6.4 \times 10^{-3}\,\text{J{} = 6.4\,\text{mJ{}$$

</details>

<details>
<summary>Question 10: AP Exam-Style -- Displacement current and Maxwell's equations</summary>

A parallel plate capacitor with circular plates of radius $R = 5$ cm and separation $d = 2$ mm is
being Charged by a current $I = 3$ A. (a) Find the displacement current between the plates. (b) Find
the Magnetic field at $r = 3$ cm from the axis, midway between the plates. (c) Find the rate of
change of The electric field between the plates.

</details>

<details>
<summary>Answer</summary>

(a) By conservation of charge and the continuity of the displacement current:

$$I_d = I = 3\,\text{A{}$$

(b) Apply the Ampere-Maxwell law with a circular Amperian loop of radius $r = 0.03$ m (note
$r < R$):

$$B \cdot 2\pi r = \mu_0 I_d \frac{r^2}{R^2} = \mu_0(3)\frac{(0.03)^2}{(0.05)^2} = \mu_0(3)(0.36)$$

$$B = \frac{(4\pi \times 10^{-7})(1.08)}{2\pi(0.03)} = \frac{4.32\pi \times 10^{-7}}{6\pi \times 10^{-2}} = \frac{4.32 \times 10^{-7}}{0.06} = 7.2 \times 10^{-6}\,\text{T{} = 7.2\,\mu\text{T{}$$

(c) The displacement current is:

$$I_d = \epsilon_0 \frac{d\Phi_E}{dt} = \epsilon_0 \frac{d}{dt}(E \cdot \pi R^2) = \epsilon_0 \pi R^2 \frac{dE}{dt}$$

$$\frac{dE}{dt} = \frac{I_d}{\epsilon_0 \pi R^2} = \frac{3}{(8.854 \times 10^{-12})\pi(0.05)^2} = \frac{3}{6.95 \times 10^{-14}} = 4.32 \times 10^{13}\,\text{V/m{}\cdot\text{s{}$$

</details>

## Summary

<!-- TODO: Add a summary for this topic -->

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
