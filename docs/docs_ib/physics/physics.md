---
title: Physics
slug: physics
description: Comprehensive guide to physics for the International Baccalaureate.
---


## IB Physics -- Course Overview

This section contains notes and study materials for IB Physics, based on the 2025 syllabus. The
course is available at both Standard Level (SL) and Higher Level (HL), with HL students covering
additional material in greater depth.

---

## Course Structure

The syllabus is organised into five thematic areas, labelled A through E. Each theme contains core
material studied at both SL and HL, with additional AHL (Additional Higher Level) extension content
for HL students. The course also includes a practical programme culminating in the Internal
Assessment (IA).

| Theme | Title                            | SL Sub-topics | AHL Sub-topics |
| :---- | :------------------------------- | :------------ | :------------- |
| A     | Space, Time and Motion           | A.1--A.3      | A.4--A.5       |
| B     | The Particulate Nature of Matter | B.1--B.4      | B.5--B.7       |
| C     | Wave Behaviour                   | C.1--C.4      | C.5            |
| D     | Fields                           | D.1--D.4      | D.5            |
| E     | Nuclear and Quantum Physics      | E.1--E.2      | E.3--E.4       |

---

## Theme A: Space, Time and Motion

This foundational theme covers the mechanics of motion, forces, energy, and the behaviour of rigid
bodies. It provides the kinematic and dynamic tools upon which much of the subsequent syllabus
depends.

**SL content includes:**

- **A.1 Kinematics:** Describing motion using displacement, velocity, and acceleration; the SUVAT
  equations for uniformly accelerated motion; projectile motion.
- **A.2 Forces and Momentum:** Newton's laws of motion; free-body diagrams; linear momentum and
  impulse; conservation of momentum; elastic and inelastic collisions; centripetal acceleration and
  force.
- **A.3 Work, Energy and Power:** Work done by a force; kinetic and potential energy; conservation
  of mechanical energy; power; efficiency.

**AHL content includes:**

- **A.4 Rigid Body Mechanics:** Torque; rotational equilibrium; moment of inertia; angular momentum
  and its conservation.
- **A.5 Galilean and Special Relativity:** Reference frames; the postulates of special relativity;
  time dilation; length contraction; the Lorentz factor.

> See [Forces and Momentum](space-time-and-motions/forces-and-momentums.md) for detailed notes.

### Worked Example: Projectile Motion (A.1)

A ball is thrown from the edge of a cliff 45.0 m high with an initial velocity of 25.0 m/s at an
angle of 35.0 degrees above the horizontal. Find: (a) the time it takes to hit the ground, (b) the
horizontal range, and (c) the speed of the ball just before impact.

<details>
<summary>Solution</summary>

- **Resolve the initial velocity:**
  - $u_x = 25.0\cos 35.0^\circ = 20.48$ m/s
  - $u_y = 25.0\sin 35.0^\circ = 14.34$ m/s
- **(a) Time of flight:** Use the vertical SUVAT equation with $s_y = -45.0$ m, $a_y = -9.81$ m/s$^2$:
  - $s_y = u_y t + \tfrac{1}{2}a_y t^2$
  - $-45.0 = 14.34t - 4.905t^2$
  - $4.905t^2 - 14.34t - 45.0 = 0$
  - $t = \dfrac{14.34 \pm \sqrt{14.34^2 + 4 \times 4.905 \times 45.0}}{2 \times 4.905}$
  - $t = \dfrac{14.34 + \sqrt{205.6 + 882.9}}{9.81} = \dfrac{14.34 + 32.99}{9.81} = 4.81$ s
- **(b) Horizontal range:**
  - $R = u_x \times t = 20.48 \times 4.81 = 98.5$ m
- **(c) Final speed:** Find the final vertical velocity, then use Pythagoras:
  - $v_y = u_y + a_y t = 14.34 + (-9.81)(4.81) = -32.84$ m/s
  - $v = \sqrt{v_x^2 + v_y^2} = \sqrt{20.48^2 + (-32.84)^2} = \sqrt{419.4 + 1078.5} = 38.7$ m/s

</details>

### Worked Example: Conservation of Momentum (A.2)

A 1500 kg car travelling east at 20.0 m/s collides with a 2500 kg truck travelling west at 15.0 m/s.
After the collision the two vehicles stick together. Find their common velocity and the kinetic energy
lost in the collision.

<details>
<summary>Solution</summary>

- **Define east as positive.** Initial velocities: car $= +20.0$ m/s, truck $= -15.0$ m/s.
- **Conservation of momentum:** $m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$
  - $(1500)(20.0) + (2500)(-15.0) = (1500 + 2500)v$
  - $30000 - 37500 = 4000v$
  - $v = -1.88$ m/s (the combined wreck moves west at 1.88 m/s)
- **Kinetic energy before:** $E_{k,i} = \tfrac{1}{2}(1500)(20.0)^2 + \tfrac{1}{2}(2500)(15.0)^2$
  - $= 300000 + 281250 = 581250$ J
- **Kinetic energy after:** $E_{k,f} = \tfrac{1}{2}(4000)(1.88)^2 = 7070$ J
- **Energy lost:** $\Delta E_k = 581250 - 7070 = 574180$ J $\approx 574$ kJ

</details>

### Worked Example: Centripetal Force (A.2)

A $0.50$ kg ball is attached to a string of length $0.80$ m and whirled in a horizontal circle at
a constant speed of $4.0$ m/s. Calculate the tension in the string and the period of revolution.

<details>
<summary>Solution</summary>

The tension provides the centripetal force:

- **Tension:** $T = \dfrac{mv^2}{r} = \dfrac{(0.50)(4.0)^2}{0.80} = \dfrac{8.0}{0.80} = 10$ N
- **Period:** $T = \dfrac{2\pi r}{v} = \dfrac{2\pi(0.80)}{4.0} = 1.26$ s

Note: In a true horizontal circle, gravity would cause the string to angle downward. This
calculation assumes the circular path is horizontal and gravity is balanced by another force.

</details>

### Worked Example: Power and Efficiency (A.3)

A pump lifts $1200$ kg of water per minute from a well $15$ m deep. The pump has an efficiency
of 65%. Calculate the power input to the pump.

<details>
<summary>Solution</summary>

- **Useful power output** (work done per second against gravity):
  - $P_{\mathrm{useful}} = \dfrac{mgh}{t} = \dfrac{(1200)(9.81)(15)}{60} = 2943$ W
- **Power input:**
  - $P_{\mathrm{input}} = \dfrac{P_{\mathrm{useful}}}{\eta} = \dfrac{2943}{0.65} = 4530$ W $\approx 4.5$ kW

The remaining 35% of the input power is wasted as heat and sound.

</details>

### Worked Example: Conservation of Energy (A.3)

A 2.00 kg block is released from rest at the top of a smooth curved ramp of height 3.50 m. At the
bottom it slides across a rough horizontal surface ($\mu_k = 0.30$) before hitting a spring with spring
constant $k = 500$ N/m. Find the maximum compression of the spring.

<details>
<summary>Solution</summary>

- **Step 1: Speed at the bottom of the ramp.** Using conservation of energy (ramp is smooth):
  - $mgh = \tfrac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 3.50} = 8.29$ m/s
- **Step 2: Distance travelled across the rough surface.** The friction force is $f = \mu_k mg$:
  - Work-energy: $\tfrac{1}{2}mv^2 - \mu_k mg \cdot d = 0$ (all KE converts to work done by friction before the spring is reached)
  - Actually, we set up the energy balance for the entire process from the bottom of the ramp to maximum compression $x$:
  - $\tfrac{1}{2}mv^2 = \mu_k mg \cdot x + \tfrac{1}{2}kx^2$
  - $\tfrac{1}{2}(2.00)(8.29)^2 = (0.30)(2.00)(9.81)x + \tfrac{1}{2}(500)x^2$
  - $68.7 = 5.886x + 250x^2$
  - $250x^2 + 5.886x - 68.7 = 0$
- **Solve the quadratic:**
  - $x = \dfrac{-5.886 + \sqrt{5.886^2 + 4 \times 250 \times 68.7}}{500}$
  - $x = \dfrac{-5.886 + \sqrt{34.64 + 68700}}{500} = \dfrac{-5.886 + 262.3}{500} = 0.513$ m

</details>

### Worked Example: Special Relativity -- Time Dilation (A.5, HL)

A spacecraft travels at $0.85c$ relative to Earth. A clock on the spacecraft measures a time
interval of $2.0 \times 10^6$ s between two events. What time interval is measured by an observer on
Earth?

<details>
<summary>Solution</summary>

- **Lorentz factor:**
  - $\gamma = \dfrac{1}{\sqrt{1 - v^2/c^2}} = \dfrac{1}{\sqrt{1 - 0.85^2}} = \dfrac{1}{\sqrt{0.2775}} = 1.90$
- **Time dilation:** The spacecraft clock measures the proper time $\Delta t_0$ (events at the same
  position in that frame):
  - $\Delta t = \gamma \Delta t_0 = 1.90 \times 2.0 \times 10^6 = 3.8 \times 10^6$ s

The Earth observer measures a longer time interval of $3.8 \times 10^6$ s.

</details>

---

## Theme B: The Particulate Nature of Matter

This theme examines matter at the microscopic scale, covering thermal physics, the behaviour of
gases, and the structure of matter.

**SL content includes:**

- **B.1 Thermal Energy Transfers:** Conduction, convection, and radiation; specific heat capacity;
  latent heat.
- **B.2 Greenhouse Effect:** Thermal equilibrium; the greenhouse mechanism; energy balance of the
  Earth.
- **B.3 Gas Laws:** Pressure, volume, and temperature relationships; the ideal gas law; kinetic
  theory of gases.
- **B.4 Currents and Circuits:** Electric current, potential difference, resistance; Ohm's law;
  series and parallel circuits; electrical power and energy.

**AHL content includes:**

- **B.5 Thermodynamics:** The first and second laws; heat engines; entropy; Carnot cycles.
- **B.6 Circular Motion and Gravitation:** Orbital mechanics; Kepler's laws; gravitational potential
  energy.
- **B.7 Discrete Energy and Radioactivity:** Atomic spectra; the Bohr model; radioactive decay;
  half-life; nuclear reactions.

> See [Thermodynamics](matter-behavior/thermodynamics.md) for detailed notes.

### Worked Example: Specific and Latent Heat (B.1)

A 0.500 kg block of ice at $-15.0$ degrees Celsius is heated until it becomes water at $25.0$ degrees
Celsius. The specific heat capacity of ice is $2.09 \times 10^3$ J/(kg K), the specific latent heat
of fusion is $3.34 \times 10^5$ J/kg, and the specific heat capacity of water is $4.18 \times 10^3$
J/(kg K). Calculate the total energy required.

<details>
<summary>Solution</summary>

The process has three stages:

- **Stage 1: Heating ice from $-15.0$ degrees Celsius to $0$ degrees Celsius:**
  - $Q_1 = m c_{\mathrm{ice}} \Delta T = (0.500)(2.09 \times 10^3)(15.0) = 15675$ J
- **Stage 2: Melting ice at $0$ degrees Celsius:**
  - $Q_2 = m L_f = (0.500)(3.34 \times 10^5) = 167000$ J
- **Stage 3: Heating water from $0$ degrees Celsius to $25.0$ degrees Celsius:**
  - $Q_3 = m c_{\mathrm{water}} \Delta T = (0.500)(4.18 \times 10^3)(25.0) = 52250$ J
- **Total energy:** $Q = Q_1 + Q_2 + Q_3 = 15675 + 167000 + 52250 = 234925$ J $\approx 235$ kJ

</details>

### Worked Example: Ideal Gas Law (B.3)

A sealed container of volume $0.0200$ m$^3$ holds $2.50$ mol of an ideal gas at a temperature of
$350$ K. Calculate (a) the pressure of the gas, and (b) the rms speed of the gas molecules. Take
$R = 8.31$ J/(mol K) and the molar mass of the gas as $0.0290$ kg/mol.

<details>
<summary>Solution</summary>

- **(a) Pressure from the ideal gas law $PV = nRT$:**
  - $P = \dfrac{nRT}{V} = \dfrac{(2.50)(8.31)(350)}{0.0200} = \dfrac{7271}{0.0200} = 363550$ Pa $\approx 364$ kPa
- **(b) RMS speed from $v_{\mathrm{rms}} = \sqrt{\dfrac{3RT}{M}}$:**
  - $v_{\mathrm{rms}} = \sqrt{\dfrac{3 \times 8.31 \times 350}{0.0290}} = \sqrt{\dfrac{8725.5}{0.0290}} = \sqrt{300879} = 548$ m/s

</details>

### Worked Example: Isothermal Compression (B.3)

A cylinder contains $0.20$ mol of an ideal gas at $300$ K and $1.5 \times 10^5$ Pa. The gas is
compressed isothermally to half its original volume. Calculate the final pressure and the work
done on the gas.

<details>
<summary>Solution</summary>

- **Initial volume** from the ideal gas law:
  - $V_i = \dfrac{nRT}{P_i} = \dfrac{(0.20)(8.31)(300)}{1.5 \times 10^5} = 3.32 \times 10^{-3}$ m$^3$
- **Final volume:** $V_f = V_i / 2 = 1.66 \times 10^{-3}$ m$^3$
- **Final pressure** (isothermal: $PV = \mathrm{constant}$):
  - $P_i V_i = P_f V_f \implies P_f = 1.5 \times 10^5 \times 2 = 3.0 \times 10^5$ Pa
- **Work done on the gas** (isothermal compression):
  - $W = nRT \ln\!\left(\dfrac{V_i}{V_f}\right) = (0.20)(8.31)(300) \ln 2$
  - $W = 498.6 \times 0.693 = 345$ J

The work done **on** the gas is $345$ J (positive, since volume decreases).

</details>

### Worked Example: Series and Parallel Circuits (B.4)

A 12.0 V battery with negligible internal resistance is connected to two resistors: $R_1 = 4.0$ ohms
in series with a parallel combination of $R_2 = 6.0$ ohms and $R_3 = 3.0$ ohms. Find (a) the total
resistance, (b) the current from the battery, (c) the potential difference across $R_1$, and (d) the
current through $R_2$.

<details>
<summary>Solution</summary>

- **(a) Total resistance:** The parallel combination first:
  - $\dfrac{1}{R_{23}} = \dfrac{1}{6.0} + \dfrac{1}{3.0} = \dfrac{1}{6.0} + \dfrac{2}{6.0} = \dfrac{3}{6.0} = 0.50$ S
  - $R_{23} = 2.0$ ohms
  - $R_{\mathrm{total}} = R_1 + R_{23} = 4.0 + 2.0 = 6.0$ ohms
- **(b) Current from battery:** $I = \dfrac{\mathrm{emf}}{R_{\mathrm{total}}} = \dfrac{12.0}{6.0} = 2.0$ A
- **(c) PD across $R_1$:** $V_1 = IR_1 = (2.0)(4.0) = 8.0$ V
- **(d) Current through $R_2$:** The PD across the parallel pair is $V_{23} = 12.0 - 8.0 = 4.0$ V:
  - $I_2 = \dfrac{V_{23}}{R_2} = \dfrac{4.0}{6.0} = 0.67$ A

</details>

### Worked Example: First Law of Thermodynamics (B.5, HL)

A monatomic ideal gas undergoes an isobaric expansion from $2.0 \times 10^{-3}$ m$^3$ to
$5.0 \times 10^{-3}$ m$^3$ at a constant pressure of $1.0 \times 10^5$ Pa. During this process
$500$ J of heat is supplied to the gas. Determine the work done by the gas and the change in
internal energy.

<details>
<summary>Solution</summary>

- **Work done by the gas at constant pressure:**
  - $W = P \Delta V = (1.0 \times 10^5)(5.0 \times 10^{-3} - 2.0 \times 10^{-3})$
  - $W = (1.0 \times 10^5)(3.0 \times 10^{-3}) = 300$ J
- **Change in internal energy (first law):**
  - $\Delta U = Q - W = 500 - 300 = 200$ J
- The internal energy increases by 200 J. For a monatomic ideal gas, $\Delta U = \tfrac{3}{2} nR \Delta T$,
  so we could also find the temperature change from $P \Delta V = nR \Delta T = 300$ J, giving
  $\Delta T = 200 \times \tfrac{2}{3} / (nR)$.

</details>

---

## Theme C: Wave Behaviour

This theme covers the properties and behaviour of waves, including light, sound, and simple harmonic
motion.

**SL content includes:**

- **C.1 Simple Harmonic Motion:** Defining characteristics; the period of a mass-spring system and a
  simple pendulum; energy in SHM.
- **C.2 Wave Model:** Travelling waves; transverse and longitudinal waves; wave speed, frequency,
  and wavelength; electromagnetic spectrum.
- **C.3 Wave Phenomena:** Reflection, refraction, diffraction, interference, and standing waves;
  Snell's law; double-slit interference.
- **C.4 Wave Model of Light:** Single-slit diffraction; resolution; thin film interference.

**AHL content includes:**

- **C.5 Standing Waves and Resonance:** Standing wave patterns in strings and pipes; boundary
  conditions; resonance and harmonics.

> See [Simple Harmonic Motion](waves/simple_harmonic_motion.md) for detailed notes.

### Worked Example: Double-Slit Interference (C.3)

Light of wavelength $590$ nm passes through a double slit with slit separation $0.050$ mm. The screen
is $1.20$ m away. Calculate (a) the fringe spacing, and (b) the distance from the central maximum to
the third bright fringe.

<details>
<summary>Solution</summary>

- **Given:** $\lambda = 590 \times 10^{-9}$ m, $d = 0.050 \times 10^{-3}$ m, $D = 1.20$ m
- **(a) Fringe spacing** from $s = \dfrac{\lambda D}{d}$:
  - $s = \dfrac{(590 \times 10^{-9})(1.20)}{0.050 \times 10^{-3}} = \dfrac{7.08 \times 10^{-7}}{5.0 \times 10^{-5}} = 0.01416$ m $\approx 14.2$ mm
- **(b) Distance to the third bright fringe:**
  - The $n$th bright fringe is at $y_n = ns$, so $y_3 = 3 \times 14.2 = 42.6$ mm

</details>

### Worked Example: Snell's Law and Total Internal Reflection (C.3)

A light ray travels from glass ($n = 1.50$) into water ($n = 1.33$). (a) Find the critical angle.
(b) If the angle of incidence is $55.0$ degrees, find the angle of refraction.

<details>
<summary>Solution</summary>

- **(a) Critical angle:** Total internal reflection occurs going from a denser to a less dense
  medium, so from glass to water:
  - $\sin \theta_c = \dfrac{n_2}{n_1} = \dfrac{1.33}{1.50} = 0.887$
  - $\theta_c = \arcsin(0.887) = 62.5$ degrees
- **(b) Angle of refraction at $\theta_i = 55.0$ degrees:**
  - $n_1 \sin \theta_1 = n_2 \sin \theta_2$
  - $(1.50)\sin 55.0^\circ = (1.33)\sin \theta_2$
  - $1.50 \times 0.8192 = 1.33 \sin \theta_2$
  - $\sin \theta_2 = \dfrac{1.229}{1.33} = 0.924$
  - $\theta_2 = \arcsin(0.924) = 67.5$ degrees

Since $\theta_i \lt \theta_c$, the light refracts into the water rather than undergoing TIR.

</details>

### Worked Example: Simple Harmonic Motion (C.1)

A mass of $0.25$ kg is attached to a vertical spring and oscillates with a period of $0.80$ s and
an amplitude of $0.12$ m. Determine the spring constant, the maximum velocity, and the maximum
acceleration of the mass.

<details>
<summary>Solution</summary>

- **Spring constant** from $T = 2\pi\sqrt{m/k}$:
  - $k = \dfrac{4\pi^2 m}{T^2} = \dfrac{4\pi^2(0.25)}{0.80^2} = \dfrac{9.87}{0.64} = 15.4$ N/m
- **Maximum velocity** (at equilibrium position):
  - $v_{\max} = \omega A = \dfrac{2\pi A}{T} = \dfrac{2\pi(0.12)}{0.80} = 0.942$ m/s
- **Maximum acceleration** (at maximum displacement):
  - $a_{\max} = \omega^2 A = \left(\dfrac{2\pi}{T}\right)^2 A = \left(\dfrac{2\pi}{0.80}\right)^2(0.12)$
  - $a_{\max} = (7.85)^2(0.12) = 7.40$ m/s$^2$

</details>

### Worked Example: Simple Pendulum (C.1)

A simple pendulum has a length of $1.50$ m. Calculate its period on Earth ($g = 9.81$ m/s$^2$) and
on the Moon ($g = 1.62$ m/s$^2$). If the pendulum has an amplitude of $0.10$ m, what is the maximum
speed on Earth?

<details>
<summary>Solution</summary>

- **Period on Earth:**
  - $T_E = 2\pi\sqrt{\dfrac{L}{g}} = 2\pi\sqrt{\dfrac{1.50}{9.81}} = 2.46$ s
- **Period on the Moon:**
  - $T_M = 2\pi\sqrt{\dfrac{1.50}{1.62}} = 6.05$ s
- **Maximum speed on Earth:**
  - $v_{\max} = \omega A = \dfrac{2\pi A}{T} = \dfrac{2\pi(0.10)}{2.46} = 0.256$ m/s

The period of a simple pendulum is independent of mass -- a key result to remember.

</details>

### Worked Example: Standing Waves in Pipes (C.5, HL)

A pipe of length $0.85$ m is open at both ends. The speed of sound in air is $340$ m/s. Determine
the fundamental frequency and the frequency of the second harmonic. Repeat for a pipe of the same
length that is closed at one end.

<details>
<summary>Solution</summary>

**Open pipe (both ends open):**
- Fundamental: $L = \lambda/2$, so $\lambda_1 = 2L = 1.70$ m.
  - $f_1 = v/\lambda_1 = 340/1.70 = 200$ Hz
- Second harmonic: $L = \lambda$, so $\lambda_2 = L = 0.85$ m.
  - $f_2 = v/\lambda_2 = 340/0.85 = 400$ Hz
- Open pipes produce all harmonics: $f_n = n f_1$ for $n = 1, 2, 3, \ldots$

**Closed pipe (one end closed):**
- Fundamental: $L = \lambda/4$, so $\lambda_1 = 4L = 3.40$ m.
  - $f_1 = v/\lambda_1 = 340/3.40 = 100$ Hz
- A closed pipe only produces odd harmonics. The "second harmonic" does not exist. The next
  resonance is the **third harmonic**: $f_3 = 3 f_1 = 300$ Hz.

</details>

### Worked Example: Diffraction Grating (C.3)

Monochromatic light of wavelength $620$ nm is directed at a diffraction grating with
$4.0 \times 10^5$ lines per metre. Calculate the angle of the second-order maximum and the total
number of bright fringes visible on each side of the central maximum.

<details>
<summary>Solution</summary>

- **Slit spacing:** $d = \dfrac{1}{4.0 \times 10^5} = 2.5 \times 10^{-6}$ m
- **Second-order maximum** ($n = 2$): $d \sin \theta = n \lambda$
  - $\sin \theta_2 = \dfrac{2(620 \times 10^{-9})}{2.5 \times 10^{-6}} = 0.496$
  - $\theta_2 = \arcsin(0.496) = 29.7^{\circ}$
- **Maximum order** (when $\sin \theta = 1$):
  - $n_{\max} = \dfrac{d}{\lambda} = \dfrac{2.5 \times 10^{-6}}{620 \times 10^{-9}} = 4.03$
- Since $n$ must be an integer, the maximum order is $n = 4$. Including the central maximum,
  there are $4 + 1 + 4 = 9$ bright fringes total (4 on each side).

</details>

---

## Theme D: Fields

This theme covers gravitational, electric, and magnetic fields, and the electromagnetic interactions
between charged particles and masses.

**SL content includes:**

- **D.1 Gravitational Fields:** Newton's law of gravitation; gravitational field strength;
  gravitational potential energy.
- **D.2 Electric and Magnetic Fields:** Coulomb's law; electric field strength and potential;
  magnetic force on a current-carrying conductor and on a moving charge.
- **D.3 Motion in Electromagnetic Fields:** Charged particle trajectories in uniform electric and
  magnetic fields; the Hall effect.
- **D.4 Induction:** Faraday's law; Lenz's law; induced emf in a moving conductor; AC generators and
  transformers.

**AHL content includes:**

- **D.5 RLC Circuits and Kirchhoff's Laws:** Kirchhoff's junction and loop rules; capacitance;
  inductance; impedance in AC circuits; resonance in series and parallel RLC circuits.

> See [Gravitational Fields](fields/gravitational-fields.md),
> [Electric and Magnetic Fields](fields/electric-and-magnetic-fields.md),
> [Motion in Electromagnetic Fields](fields/motion-in-electromagnetic-fields.md), and
> [Induction](fields/Induction.md) for detailed notes.

### Worked Example: Gravitational Field Strength (D.1)

Calculate the gravitational field strength at a point $300$ km above the Earth's surface. Given:
$M_{\mathrm{Earth}} = 5.97 \times 10^{24}$ kg, $R_{\mathrm{Earth}} = 6.37 \times 10^6$ m,
$G = 6.67 \times 10^{-11}$ N m$^2$/kg$^2$.

<details>
<summary>Solution</summary>

- **Distance from centre of Earth:** $r = R_{\mathrm{Earth}} + h = 6.37 \times 10^6 + 3.00 \times 10^5 = 6.67 \times 10^6$ m
- **Gravitational field strength:** $g = \dfrac{GM}{r^2}$
  - $g = \dfrac{(6.67 \times 10^{-11})(5.97 \times 10^{24})}{(6.67 \times 10^6)^2}$
  - $g = \dfrac{3.982 \times 10^{14}}{4.449 \times 10^{13}} = 8.95$ N/kg

</details>

### Worked Example: Orbital Speed and Period (D.1)

A $500$ kg satellite orbits Earth at an altitude of $300$ km. Calculate the orbital speed and the
orbital period.

<details>
<summary>Solution</summary>

- **Distance from Earth's centre:** $r = 6.37 \times 10^6 + 3.0 \times 10^5 = 6.67 \times 10^6$ m
- **Orbital speed** (equating gravitational force to centripetal force):
  - $\dfrac{GMm}{r^2} = \dfrac{mv^2}{r} \implies v = \sqrt{\dfrac{GM}{r}}$
  - $v = \sqrt{\dfrac{(6.67 \times 10^{-11})(5.97 \times 10^{24})}{6.67 \times 10^6}} = \sqrt{5.97 \times 10^7} = 7730$ m/s
- **Orbital period:**
  - $T = \dfrac{2\pi r}{v} = \dfrac{2\pi(6.67 \times 10^6)}{7730} = 5420$ s $= 90.4$ min

</details>

### Worked Example: Electric Field and Potential (D.2)

Two point charges, $q_1 = +3.0$ nC and $q_2 = -5.0$ nC, are separated by $0.20$ m. Determine the
electric field strength and the electric potential at the midpoint between the charges.

<details>
<summary>Solution</summary>

- **Distance from each charge to the midpoint:** $r = 0.10$ m.
- **Electric field due to $q_1$** (pointing away from the positive charge):
  - $E_1 = \dfrac{k \lvert q_1 \rvert}{r^2} = \dfrac{(8.99 \times 10^9)(3.0 \times 10^{-9})}{(0.10)^2} = 2700$ N/C
- **Electric field due to $q_2$** (pointing toward the negative charge):
  - $E_2 = \dfrac{k \lvert q_2 \rvert}{r^2} = \dfrac{(8.99 \times 10^9)(5.0 \times 10^{-9})}{(0.10)^2} = 4500$ N/C
- Both fields point in the same direction (from $q_1$ toward $q_2$), so:
  - $E_{\mathrm{total}} = E_1 + E_2 = 2700 + 4500 = 7200$ N/C
- **Electric potential at the midpoint** (a scalar -- add algebraically):
  - $V = \dfrac{k q_1}{r} + \dfrac{k q_2}{r} = \dfrac{k}{r}(q_1 + q_2)$
  - $V = \dfrac{8.99 \times 10^9}{0.10}(3.0 \times 10^{-9} + (-5.0 \times 10^{-9}))$
  - $V = (8.99 \times 10^{10})(-2.0 \times 10^{-9}) = -180$ V

</details>

### Worked Example: Magnetic Force on a Moving Charge (D.2)

An electron moves at $2.0 \times 10^6$ m/s perpendicular to a uniform magnetic field of
$0.50$ T. Calculate the magnitude of the magnetic force and the radius of the circular path.
($m_e = 9.11 \times 10^{-31}$ kg, $e = 1.60 \times 10^{-19}$ C.)

<details>
<summary>Solution</summary>

- **Magnetic force:** $F = qvB \sin \theta$. Since the velocity is perpendicular to the field,
  $\sin \theta = 1$:
  - $F = (1.60 \times 10^{-19})(2.0 \times 10^6)(0.50) = 1.60 \times 10^{-13}$ N
- **Radius of circular path:** Equate magnetic force to centripetal force:
  - $qvB = \dfrac{mv^2}{r} \implies r = \dfrac{mv}{qB}$
  - $r = \dfrac{(9.11 \times 10^{-31})(2.0 \times 10^6)}{(1.60 \times 10^{-19})(0.50)}$
  - $r = \dfrac{1.82 \times 10^{-24}}{8.0 \times 10^{-20}} = 2.28 \times 10^{-5}$ m $= 22.8$ $\mu$m

</details>

### Worked Example: Faraday's Law and Induction (D.4)

A rectangular coil of 200 turns, each of area $0.040$ m$^2$, is placed in a uniform magnetic field.
The field strength decreases uniformly from $0.50$ T to $0.10$ T in $0.080$ s. Calculate the magnitude
of the induced emf.

<details>
<summary>Solution</summary>

- **Rate of change of flux through one turn:**
  - $\Delta \Phi = B_2 A - B_1 A = (0.10 - 0.50)(0.040) = -0.016$ Wb
  - $\dfrac{\Delta \Phi}{\Delta t} = \dfrac{-0.016}{0.080} = -0.20$ Wb/s
- **Induced emf:** $\varepsilon = -N\dfrac{\Delta \Phi}{\Delta t} = -(200)(-0.20) = 40$ V
- By Lenz's law, the induced current flows in a direction that opposes the decrease in flux,
  creating additional flux through the coil in the same direction as the original field.

</details>

### Worked Example: Gravitational Potential and Escape Speed (D.1, HL)

Calculate the gravitational potential at a point $3.0 \times 10^7$ m from the centre of the Earth
and the escape speed from this altitude.
($M_E = 5.97 \times 10^{24}$ kg.)

<details>
<summary>Solution</summary>

- **Gravitational potential** (negative, zero at infinity):
  - $V_g = -\dfrac{GM}{r} = -\dfrac{(6.67 \times 10^{-11})(5.97 \times 10^{24})}{3.0 \times 10^7}$
  - $V_g = -\dfrac{3.98 \times 10^{14}}{3.0 \times 10^7} = -1.33 \times 10^7$ J/kg
- **Escape speed** (set total energy to zero: $\tfrac{1}{2}mv_{\mathrm{esc}}^2 + m V_g = 0$):
  - $v_{\mathrm{esc}} = \sqrt{-2V_g} = \sqrt{2(1.33 \times 10^7)} = \sqrt{2.66 \times 10^7} = 5160$ m/s

</details>

---

## Theme E: Nuclear and Quantum Physics

This theme introduces the quantum nature of matter and energy, covering nuclear physics, quantum
phenomena, and the wave-particle duality of light and matter.

**SL content includes:**

- **E.1 Structure of the Atom:** The nuclear model; isotopes; mass defect and binding energy;
  nuclear fission and fusion.
- **E.2 Quantum Physics:** The photoelectric effect; photon energy and momentum; the de Broglie
  wavelength; wave-particle duality.

**AHL content includes:**

- **E.3 Radioactive Decay:** Exponential decay law; activity and half-life; decay series; background
  radiation.
- **E.4 Fission:** Chain reactions; critical mass; nuclear reactors; energy release in fission and
  fusion; binding energy per nucleon curve.

### Worked Example: Binding Energy per Nucleon (E.1)

Calculate the binding energy per nucleon of helium-4. Given: $m_p = 1.00728$ u, $m_n = 1.00867$ u,
$m_{\mathrm{He-4}} = 4.00150$ u, and $1$ u $= 931.5$ MeV/$c^2$.

<details>
<summary>Solution</summary>

- **Helium-4 has 2 protons and 2 neutrons.**
- **Mass defect:** $\Delta m = 2m_p + 2m_n - m_{\mathrm{He-4}}$
  - $\Delta m = 2(1.00728) + 2(1.00867) - 4.00150 = 2.01456 + 2.01734 - 4.00150 = 0.03040$ u
- **Binding energy:** $E_b = \Delta m \times 931.5 = 0.03040 \times 931.5 = 28.3$ MeV
- **Binding energy per nucleon:** $\dfrac{E_b}{A} = \dfrac{28.3}{4} = 7.08$ MeV/nucleon

</details>

### Worked Example: Photoelectric Effect (E.2)

Light of wavelength $450$ nm is incident on a zinc plate with a work function of $4.30$ eV. Determine
whether photoelectrons are emitted, and if so, calculate their maximum kinetic energy in eV. Use
$h = 6.63 \times 10^{-34}$ J s, $c = 3.00 \times 10^8$ m/s, $e = 1.60 \times 10^{-19}$ C.

<details>
<summary>Solution</summary>

- **Energy of incident photon:**
  - $E = \dfrac{hc}{\lambda} = \dfrac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{450 \times 10^{-9}}$
  - $E = \dfrac{1.989 \times 10^{-25}}{4.50 \times 10^{-7}} = 4.42 \times 10^{-19}$ J
  - $E = \dfrac{4.42 \times 10^{-19}}{1.60 \times 10^{-19}} = 2.76$ eV
- **Compare with work function:** Since $E = 2.76$ eV $\lt \phi = 4.30$ eV, the photon energy is
  insufficient. **No photoelectrons are emitted.**

</details>

### Worked Example: Radioactive Half-Life (E.3)

A sample of iodine-131 has an initial activity of $6400$ Bq. The half-life of iodine-131 is $8.04$
days. Calculate (a) the activity after $32.2$ days, and (b) the time for the activity to fall to
$200$ Bq.

<details>
<summary>Solution</summary>

- **(a) Activity after $32.2$ days:**
  - Number of half-lives: $n = \dfrac{32.2}{8.04} = 4.00$
  - $A = A_0 \times \left(\dfrac{1}{2}\right)^n = 6400 \times \left(\dfrac{1}{2}\right)^4 = 6400 \times \dfrac{1}{16} = 400$ Bq
- **(b) Time for activity to reach 200 Bq:**
  - $200 = 6400 \times \left(\dfrac{1}{2}\right)^t / 8.04$
  - $\left(\dfrac{1}{2}\right)^t / 8.04 = \dfrac{200}{6400} = \dfrac{1}{32} = \left(\dfrac{1}{2}\right)^5$
  - $\dfrac{t}{8.04} = 5 \implies t = 40.2$ days

</details>

### Worked Example: Nuclear Fission Energy (E.4, HL)

The nuclear reaction $\;^{235}_{92}\mathrm{U} + {}^{1}_{0}\mathrm{n} \rightarrow {}^{141}_{56}\mathrm{Ba} + {}^{92}_{36}\mathrm{Kr} + 3\,{}^{1}_{0}\mathrm{n}$ is a fission
event. Calculate the energy released.
(Mass of $\;{}^{235}\mathrm{U} = 235.044$ u,
mass of $\;{}^{141}\mathrm{Ba} = 140.914$ u,
mass of $\;{}^{92}\mathrm{Kr} = 91.926$ u,
mass of $\;{}^{1}\mathrm{n} = 1.00867$ u,
$1$ u $= 931.5$ MeV/$c^2$.)

<details>
<summary>Solution</summary>

- **Mass of reactants:**
  - $m_{\mathrm{reactants}} = 235.044 + 1.00867 = 236.053$ u
- **Mass of products:**
  - $m_{\mathrm{products}} = 140.914 + 91.926 + 3(1.00867) = 140.914 + 91.926 + 3.026 = 235.866$ u
- **Mass defect:**
  - $\Delta m = 236.053 - 235.866 = 0.187$ u
- **Energy released:**
  - $E = 0.187 \times 931.5 = 174$ MeV

This is a typical energy release per fission event of uranium-235.

</details>

### Worked Example: Electron Accelerated Through a Potential Difference (E.2)

An electron is accelerated from rest through a potential difference of $500$ V. Calculate the final
speed of the electron and the electric field strength if the acceleration takes place over a
distance of $0.050$ m.

<details>
<summary>Solution</summary>

- **Energy gained by the electron:**
  - $E_k = e \Delta V = (1.60 \times 10^{-19})(500) = 8.0 \times 10^{-17}$ J
- **Final speed:**
  - $\tfrac{1}{2} m_e v^2 = 8.0 \times 10^{-17}$
  - $v = \sqrt{\dfrac{2(8.0 \times 10^{-17})}{9.11 \times 10^{-31}}} = \sqrt{1.76 \times 10^{14}} = 1.33 \times 10^7$ m/s
- **Electric field strength:**
  - $E = \dfrac{\Delta V}{d} = \dfrac{500}{0.050} = 1.0 \times 10^4$ V/m

</details>

---

## SL vs HL Distinctions

The key differences between SL and HL are:

- **Depth of coverage:** HL students study approximately 60 hours of additional content (AHL) beyond
  the 80 hours of core SL material, totalling 150 hours compared to 110 hours at SL.
- **Mathematical rigour:** HL examinations demand a higher level of mathematical fluency, including
  more complex derivations and multi-step problems.
- **Paper 3:** Only HL students sit Paper 3, which assesses the AHL extension content through
  data-based and extended-response questions.
- **Practical work:** HL students are expected to complete a broader range of practical
  investigations, though the IA format is the same for both levels.

---

## Assessment Overview

| Component   | Description                                                                                                                                       | Weighting          |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------- |
| **Paper 1** | Multiple-choice questions (MCQ) covering the full syllabus. Duration: 45 min (SL), 1h (HL).                                                       | 30% (SL), 20% (HL) |
| **Paper 2** | Structured and extended-response questions covering the full syllabus. Data-based questions are included. Duration: 1h 15min (SL), 2h 15min (HL). | 50% (SL), 36% (HL) |
| **Paper 3** | HL only. Data-based and extended-response questions on AHL content. Duration: 1h.                                                                 | 24% (HL)           |
| **IA**      | Internal Assessment -- an individual investigation of a physics topic, with a report of up to 3,000 words.                                        | 20% (SL), 20% (HL) |

---

## Detailed Topic Breakdown

### Most-Tested Topics (by Exam Frequency)

Based on analysis of past IB Physics examinations, the following topics appear most frequently and
carry significant marks:

1. **Mechanics (A.1--A.3):** Projectile motion, conservation of energy, momentum collisions,
   circular motion. Expect at least one major question in Paper 2.
2. **Thermal Physics (B.1--B.3, B.5):** Specific/latent heat calculations, ideal gas law, the first
   law of thermodynamics ($Q = \Delta U + W$), entropy. Multi-stage heating problems are a staple.
3. **Wave Phenomena (C.2--C.4):** Double-slit interference, single-slit diffraction, Snell's law,
   standing waves in strings and pipes. Usually tested with both conceptual and calculation
   questions.
4. **Fields (D.1--D.4):** Gravitational potential energy, electric field calculations, Faraday's law
   and Lenz's law. AHL students should expect a challenging induction problem.
5. **Quantum and Nuclear Physics (E.1--E.4):** Photoelectric effect, binding energy calculations,
   radioactive decay. The photoelectric equation $E_k = hf - \phi$ appears almost every year.

### Topic Weighting by Paper

| Paper        | Focus                     | Typical Question Style                                             |
| :----------- | :------------------------ | :----------------------------------------------------------------- |
| Paper 1      | Breadth across all themes | Quick MCQ, ~1--2 min each, many formula-recall questions           |
| Paper 2      | Depth on core + AHL       | Multi-part structured questions, data analysis, 10--20 marks each  |
| Paper 3 (HL) | AHL content only          | Data-based question + extended response on D.5, E.3, E.4, B.5, B.7 |

---

## Study Strategies

### Spaced Revision Approach

A proven approach for IB Physics revision is to cycle through topics in increasing depth over
several weeks:

1. **Weeks 1--4 (Foundation):** Read through all topic notes. Create a one-page formula summary per
   theme. Focus on understanding concepts, not memorising.
2. **Weeks 5--8 (Application):** Work through past paper questions topic by topic. Focus on the
   "Explain" and "Deduce" command terms. Identify weak areas.
3. **Weeks 9--12 (Exam Practice):** Complete full past papers under timed conditions. Focus on Paper
   2 Section B (extended response) and time management.
4. **Final 2 Weeks (Polish):** Review your formula summary sheets. Revisit only the questions you
   got wrong. Practise data booklet navigation.

### Mastering Command Terms

IB Physics exams use specific command terms that indicate the expected depth of response:

| Command Term  | What it Means                                                   |
| :------------ | :-------------------------------------------------------------- |
| **Define**    | Give the precise meaning of a term                              |
| **Describe**  | Give a detailed account, including qualities or characteristics |
| **Explain**   | Give a detailed account of causes, reasons, or mechanisms       |
| **Deduce**    | Reach a conclusion from the information given                   |
| **Derive**    | Manipulate an equation to arrive at a new equation              |
| **Determine** | Find the only possible answer                                   |
| **Estimate**  | Find an approximate value                                       |
| **Justify**   | Give valid reasons or evidence to support an answer             |
| **Sketch**    | Draw approximately, showing key features (not to scale)         |
| **State**     | Give a specific name, value, or brief answer                    |

> **Exam Tip:** An "Explain" question typically requires a chain of reasoning with 2--3 linked
> statements. An answer that just states a formula will not earn full marks for "Explain."

### Common Pitfalls

- **Significant figures:** IB expects answers to be given to the same number of significant figures
  as the least precise data in the question (usually 2--3 sf). Dropping to 1 sf or using 5+ sf will
  lose marks.
- **Units:** Every numerical answer must have a correct unit. Writing "15" instead of "15 J" will
  lose a mark, even if the calculation is correct.
- **Negative signs:** Particularly in thermodynamics ($Q$, $W$, $\Delta U$) and lens equations, sign
  conventions matter. Be consistent.
- **Showing work:** In Paper 2, method marks are awarded even if the final answer is wrong. Always
  show your working clearly, including the formula you are using and substitution of values.

---

## Calculator Skills

The IB Physics exam allows a **GDC (Graphical Display Calculator)**. Proficiency with your
calculator is essential.

### Recommended Calculators

| Calculator                               | Notes                                      |
| :--------------------------------------- | :----------------------------------------- |
| Texas Instruments TI-84 Plus CE          | Most popular; widely supported             |
| Texas Instruments TI-Nspire CX (non-CAS) | More powerful; excellent for data analysis |
| Casio fx-CG50                            | Good alternative; colour display           |

**Note:** CAS (Computer Algebra System) calculators are **not permitted** in IB exams. Ensure your
calculator mode is correct.

### Essential Calculator Skills for IB Physics

1. **Solving simultaneous equations:** Use the matrix solver or systems of equations function for
   circuit analysis (Kirchhoff's laws) and kinematic problems.
2. **Statistical analysis:** For the IA, you need to calculate mean, standard deviation, and
   uncertainty. Use the built-in statistics mode.
3. **Regression lines:** Linear regression ($y = mx + c$) for determining relationships from
   experimental data. Know how to find $r^2$ and interpret it.
4. **Converting units:** Practice converting between SI prefixes (nano, micro, milli, kilo, mega,
   giga) quickly.
5. **Scientific notation:** Ensure your calculator is in SCI mode so that very large or very small
   numbers are displayed properly.
6. **Storing values:** Use the STO function to store intermediate results with full precision,
   avoiding premature rounding.

### Worked Example: Calculator Efficiency

A problem requires calculating
$v = \sqrt{\frac{2(6.67 \times 10^{-11})(5.97 \times 10^{24})}{6.37 \times 10^6 + 3.5 \times 10^5}}$.

**Efficient approach:** Store the numerator and denominator separately:

- Numerator: $2 \times 6.67\mathrm{E}-11 \times 5.97\mathrm{E}24 \rightarrow$ STO A
- Denominator: $6.37\mathrm{E}6 + 3.5\mathrm{E}5 \rightarrow$ STO B
- Answer: $\sqrt{\mathrm{A}/\mathrm{B}}$

This avoids transcription errors and preserves precision.

> **Exam Tip:** In Paper 1 (no calculator allowed for SL; calculator allowed for HL), you must be
> comfortable with mental math and estimation. For Paper 2 and Paper 3, always check that your
> calculator answer has a reasonable order of magnitude.

---

## Exam Format and Time Management

### Paper 1: Multiple Choice

|                   | SL     | HL     |
| :---------------- | :----- | :----- |
| Duration          | 45 min | 60 min |
| Marks             | 30     | 40     |
| Time per question | ~90 s  | ~90 s  |

**Strategy:**

- Read the entire question and all four options before answering
- Eliminate obviously wrong options first
- For calculation questions, estimate the answer to check if your calculation is reasonable
- Do not spend more than 2 minutes on any single question; flag and return if time permits
- There is **no negative marking** -- never leave a question blank

### Paper 2: Structured and Extended Response

|           | SL                                         | HL                                          |
| :-------- | :----------------------------------------- | :------------------------------------------ |
| Duration  | 1h 15min                                   | 2h 15min                                    |
| Section A | Data-based question + short response       | Data-based question + short response        |
| Section B | One extended response (from choice of two) | Two extended response (from choice of four) |

**Time management:**

- Section A: allocate ~30 min (SL) or ~60 min (HL)
- Section B: allocate ~45 min (SL) or ~75 min (HL)
- Within Section B, spend ~2--3 minutes reading and planning before writing
- Aim for 1 mark per minute as a rough guide

### Paper 3 (HL Only)

|           | HL                                                    |
| :-------- | :---------------------------------------------------- |
| Duration  | 1h                                                    |
| Section A | Data-based question on AHL content (practical skills) |
| Section B | Extended response from AHL topics                     |

**Strategy:**

- Section A tests experimental skills: uncertainty propagation, graph analysis, evaluating
  procedures
- Section B often combines multiple AHL topics in a single question
- Practise with past Paper 3 questions specifically -- the style is distinct from Paper 2

### Internal Assessment (IA)

- Individual investigation of your choice, assessed internally and moderated externally
- Maximum 3,000 words
- Worth 20% of the final grade (both SL and HL)
- Assessment criteria: Exploration (6), Analysis (6), Evaluation (6), Communication (4)
- Total: 22 marks

**IA tips:**

- Choose a topic with a clear independent and dependent variable
- Collect sufficient data (at least 5--7 data points with repeats)
- Show uncertainty calculations explicitly
- Include a thorough evaluation of systematic and random errors
- Do not choose an overly complex topic; a simple experiment done well scores higher than a complex
  one done poorly

---

## Recommended Resources

### Official IB Resources

| Resource                    | Description                                                                                    |
| :-------------------------- | :--------------------------------------------------------------------------------------------- |
| **IB Physics Data Booklet** | Contains all formulas, constants, and tables. You must be thoroughly familiar with its layout. |
| **IB Subject Guide (2025)** | The official syllabus document with aims, assessment objectives, and the full topic list.      |
| **Past Papers**             | Available from your teacher or the IB store. The single best preparation resource.             |

### Textbooks

| Textbook                                        | Level   | Notes                                                             |
| :---------------------------------------------- | :------ | :---------------------------------------------------------------- |
| _Physics for the IB Diploma_ (K. A. Tsokos)     | SL + HL | Comprehensive, well-explained theory with worked examples         |
| _IB Physics Course Book_ (Oxford, 2025 edition) | SL + HL | Aligned with the new syllabus; strong on conceptual understanding |
| _Pearson Baccalaureate Physics_                 | SL + HL | Good practice questions and exam-style problems                   |

### Online Resources

- **Physics and Maths Tutor (PMT):** Free past papers, mark schemes, and topic-wise question banks
  organised by syllabus
- **Khan Academy (Physics):** Excellent for building conceptual understanding, especially for
  mechanics and electromagnetism
- **Chris Doner (YouTube):** IB-specific physics tutorials with worked solutions to past paper
  questions
- **IB Questionbank:** Official IB question bank (available through some schools) with filtering by
  topic and difficulty

### Data Booklet Tips

The physics data booklet is your most important tool in the exam. To use it effectively:

1. **Know the layout:** The booklet is organised by topic. Practise navigating it quickly -- do not
   waste exam time searching for a formula.
2. **Check units:** The booklet provides formulas but not always the units. Know the SI units for
   every quantity.
3. **Know what is NOT in the booklet:** Basic definitions, conceptual explanations, and many AHL
   formulas may need to be derived or memorised.
4. **Practise with it:** When doing past papers, always have the data booklet open. Never practise
   without it -- you need to build the habit of looking things up.
5. **Copy formulas correctly:** Transcription errors from the booklet are a major source of lost
   marks. Double-check that you have written the formula exactly as it appears.

---

## How to Use These Notes

- Begin with the [Syllabus](Syllabus.md) page for a detailed breakdown of all topics, sub-topics,
  and the relevant equations from the data booklet.
- Navigate to the relevant theme section for topic-specific notes and worked examples.
- The [Wrap-up](wrap-up.md) page provides a summary of key concepts across the course.
- When preparing for examinations, ensure familiarity with the physics data booklet and practise
  both calculation and explanation-style questions.
- Focus revision time on the most-tested topics listed above, and always practise under timed
  conditions in the final weeks before the exam.

---

## Problem Set

### Mechanics

1. A stone is dropped from a hot air balloon ascending at $5.00$ m/s. After $3.00$ s, what is the
   stone's velocity and displacement below the balloon? Take $g = 9.81$ m/s$^2$.

<details>
<summary>Solution</summary>

- **Velocity:** $v = u + at = 5.00 + (-9.81)(3.00) = 5.00 - 29.43 = -24.4$ m/s (downward)
- **Displacement relative to release point:** $s = ut + \tfrac{1}{2}at^2 = (5.00)(3.00) + \tfrac{1}{2}(-9.81)(3.00)^2$
  - $s = 15.0 - 44.1 = -29.1$ m (29.1 m below release point)

If you get this wrong, revise: Kinematics -- SUVAT equations and sign conventions for
upward/downward motion (Theme A.1).

</details>

2. A hockey puck of mass $0.170$ kg slides at $4.00$ m/s and is struck by a stick, receiving an
   impulse of $2.50$ N s in the direction of travel. Find its final speed.

<details>
<summary>Solution</summary>

- **Impulse-momentum theorem:** $J = \Delta p = m(v_f - v_i)$
- $2.50 = 0.170(v_f - 4.00)$
- $v_f - 4.00 = \dfrac{2.50}{0.170} = 14.71$
- $v_f = 18.7$ m/s

If you get this wrong, revise: Impulse and momentum, the impulse-momentum theorem (Theme A.2).

</details>

3. A roller coaster car of mass $500$ kg starts from rest at point A, $20.0$ m above the ground.
   It descends to point B at ground level and then rises to point C at $12.0$ m. A constant friction
   force of $200$ N acts over the total track length of $80.0$ m. Find the speed at point C.

<details>
<summary>Solution</summary>

- **Energy balance:** $mgh_A = mgh_C + \tfrac{1}{2}mv_C^2 + f \cdot d$
- $(500)(9.81)(20.0) = (500)(9.81)(12.0) + \tfrac{1}{2}(500)v_C^2 + (200)(80.0)$
- $98100 = 58860 + 250v_C^2 + 16000$
- $98100 - 58860 - 16000 = 250v_C^2$
- $23240 = 250v_C^2$
- $v_C = \sqrt{92.96} = 9.64$ m/s

If you get this wrong, revise: Conservation of energy with non-conservative forces (Theme A.3).

</details>

### Thermal Physics and Gases

4. An electric heater supplies $2.50$ kW of power to $0.800$ kg of water initially at $20.0$ degrees
   Celsius. How long does it take to bring the water to boiling point? ($c_{\mathrm{water}} = 4180$
   J/(kg K), ignore heat losses.)

<details>
<summary>Solution</summary>

- **Energy needed:** $Q = mc\Delta T = (0.800)(4180)(80.0) = 267520$ J
- **Time:** $P = \dfrac{Q}{t} \implies t = \dfrac{Q}{P} = \dfrac{267520}{2500} = 107$ s

If you get this wrong, revise: Specific heat capacity and power (Theme B.1).

</details>

5. A gas cylinder of volume $0.100$ m$^3$ contains gas at $300$ kPa and $300$ K. If the temperature
   is raised to $450$ K at constant volume, what is the new pressure?

<details>
<summary>Solution</summary>

- **Gay-Lussac's law (constant volume):** $\dfrac{P_1}{T_1} = \dfrac{P_2}{T_2}$
- $P_2 = \dfrac{P_1 T_2}{T_1} = \dfrac{(300)(450)}{300} = 450$ kPa

If you get this wrong, revise: Gas laws and the ideal gas law (Theme B.3).

</details>

### Waves

6. A standing wave on a string of length $0.75$ m has a fundamental frequency of $220$ Hz. Find (a) the
   wave speed, and (b) the frequency of the second harmonic.

<details>
<summary>Solution</summary>

- **(a) Wave speed:** For the fundamental, $L = \lambda/2$, so $\lambda = 2L = 1.50$ m.
  - $v = f\lambda = (220)(1.50) = 330$ m/s
- **(b) Second harmonic frequency:** $f_2 = 2f_1 = 2 \times 220 = 440$ Hz

If you get this wrong, revise: Standing waves and harmonics on strings (Theme C.5).

</details>

7. Light passes from air into a material with refractive index $1.60$ at an angle of incidence of
   $40.0$ degrees. Calculate the angle of refraction.

<details>
<summary>Solution</summary>

- **Snell's law:** $n_1 \sin \theta_1 = n_2 \sin \theta_2$
- $(1.00)\sin 40.0^\circ = (1.60)\sin \theta_2$
- $\sin \theta_2 = \dfrac{0.6428}{1.60} = 0.4017$
- $\theta_2 = \arcsin(0.4017) = 23.7$ degrees

If you get this wrong, revise: Snell's law and refraction (Theme C.3).

</details>

### Electricity and Circuits

8. A $6.0$ V battery with internal resistance $0.50$ ohms is connected to an external resistor of
   $11.5$ ohms. Calculate (a) the current, and (b) the terminal PD.

<details>
<summary>Solution</summary>

- **(a) Current:** $I = \dfrac{\mathrm{emf}}{R_{\mathrm{ext}} + r} = \dfrac{6.0}{11.5 + 0.50} = \dfrac{6.0}{12.0} = 0.50$ A
- **(b) Terminal PD:** $V = \mathrm{emf} - Ir = 6.0 - (0.50)(0.50) = 5.75$ V

If you get this wrong, revise: Internal resistance and terminal PD (Theme B.4).

</details>

### Fields

9. Two point charges, $q_1 = +3.0$ $\mu$C and $q_2 = -5.0$ $\mu$C, are placed $0.20$ m apart in
   vacuum. Calculate the force between them and state its nature.

<details>
<summary>Solution</summary>

- **Coulomb's law:** $F = \dfrac{k q_1 q_2}{r^2}$ where $k = 8.99 \times 10^9$ N m$^2$/C$^2$
- $F = \dfrac{(8.99 \times 10^9)(3.0 \times 10^{-6})(5.0 \times 10^{-6})}{(0.20)^2}$
- $F = \dfrac{(8.99 \times 10^9)(1.5 \times 10^{-11})}{0.040} = \dfrac{0.1349}{0.040} = 3.37$ N
- The force is **attractive** because the charges have opposite signs.

If you get this wrong, revise: Coulomb's law and electric forces (Theme D.2).

</details>

10. A satellite orbits Earth at a height of $500$ km above the surface. Calculate its orbital speed.
    Given: $M_{\mathrm{Earth}} = 5.97 \times 10^{24}$ kg, $R_{\mathrm{Earth}} = 6.37 \times 10^6$ m.

<details>
<summary>Solution</summary>

- **Orbital radius:** $r = 6.37 \times 10^6 + 5.00 \times 10^5 = 6.87 \times 10^6$ m
- **Equate gravitational force to centripetal force:** $\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}$
- $v = \sqrt{\dfrac{GM}{r}} = \sqrt{\dfrac{(6.67 \times 10^{-11})(5.97 \times 10^{24})}{6.87 \times 10^6}}$
- $v = \sqrt{\dfrac{3.982 \times 10^{14}}{6.87 \times 10^6}} = \sqrt{5.796 \times 10^7} = 7610$ m/s $= 7.61$ km/s

If you get this wrong, revise: Circular motion and gravitation, orbital mechanics (Theme B.6, D.1).

</details>

### Nuclear and Quantum Physics

11. The photoelectric effect is observed from a metal surface using light of frequency
    $8.0 \times 10^{14}$ Hz. The maximum kinetic energy of the emitted electrons is
    $1.2 \times 10^{-19}$ J. Calculate the work function of the metal in eV.

<details>
<summary>Solution</summary>

- **Photoelectric equation:** $E_k = hf - \phi$
- $\phi = hf - E_k = (6.63 \times 10^{-34})(8.0 \times 10^{14}) - 1.2 \times 10^{-19}$
- $\phi = 5.304 \times 10^{-19} - 1.2 \times 10^{-19} = 4.104 \times 10^{-19}$ J
- $\phi = \dfrac{4.104 \times 10^{-19}}{1.60 \times 10^{-19}} = 2.57$ eV

If you get this wrong, revise: The photoelectric effect and the equation $E_k = hf - \phi$ (Theme E.2).

</details>

12. A radioactive isotope has a half-life of $5.27$ years. A sample initially contains
    $4.00 \times 10^{20}$ nuclei. How many nuclei remain after $15.81$ years?

<details>
<summary>Solution</summary>

- **Number of half-lives:** $n = \dfrac{15.81}{5.27} = 3.00$
- **Remaining nuclei:** $N = N_0 \times \left(\dfrac{1}{2}\right)^n = 4.00 \times 10^{20} \times \dfrac{1}{8} = 5.00 \times 10^{19}$

If you get this wrong, revise: Exponential decay and half-life calculations (Theme E.3).

</details>

13. An electron is accelerated from rest through a potential difference of $250$ V. Calculate
    the de Broglie wavelength of the electron.
    ($m_e = 9.11 \times 10^{-31}$ kg, $e = 1.60 \times 10^{-19}$ C,
    $h = 6.63 \times 10^{-34}$ J s.)

<details>
<summary>Solution</summary>

- **Kinetic energy gained:** $E_k = e \Delta V = (1.60 \times 10^{-19})(250) = 4.00 \times 10^{-17}$ J
- **Momentum:** $p = \sqrt{2 m_e E_k} = \sqrt{2(9.11 \times 10^{-31})(4.00 \times 10^{-17})}$
  - $p = \sqrt{7.29 \times 10^{-47}} = 8.54 \times 10^{-24}$ kg m/s
- **de Broglie wavelength:** $\lambda = \dfrac{h}{p} = \dfrac{6.63 \times 10^{-34}}{8.54 \times 10^{-24}} = 7.76 \times 10^{-11}$ m

This wavelength is comparable to atomic spacing, which is why electron diffraction can probe crystal
structures.

If you get this wrong, revise: de Broglie wavelength and wave-particle duality (Theme E.2).

</details>

14. A conducting rod of length $0.40$ m moves perpendicular to a uniform magnetic field of
    flux density $0.25$ T at a speed of $8.0$ m/s. The rod is part of a closed circuit with total
    resistance $5.0$ ohms. Calculate the induced emf and the current in the circuit.

<details>
<summary>Solution</summary>

- **Induced emf (motional emf):** $\varepsilon = BLv = (0.25)(0.40)(8.0) = 0.80$ V
- **Current:** $I = \dfrac{\varepsilon}{R} = \dfrac{0.80}{5.0} = 0.16$ A
- By Lenz's law, the induced current flows in a direction that creates a magnetic force
  opposing the motion of the rod.

If you get this wrong, revise: Faraday's law, motional emf, and Lenz's law (Theme D.4).

</details>

15. A monatomic ideal gas expands isobarically from $2.0 \times 10^{-3}$ m$^3$ to
    $5.0 \times 10^{-3}$ m$^3$ at a constant pressure of $1.5 \times 10^5$ Pa. During the
    process $600$ J of heat is supplied to the gas. Calculate the work done by the gas and
    the change in internal energy.

<details>
<summary>Solution</summary>

- **Work done by the gas at constant pressure:**
  - $W = P \Delta V = (1.5 \times 10^5)(5.0 \times 10^{-3} - 2.0 \times 10^{-3})$
  - $W = (1.5 \times 10^5)(3.0 \times 10^{-3}) = 450$ J
- **Change in internal energy (first law):** $\Delta U = Q - W = 600 - 450 = 150$ J

If you get this wrong, revise: First law of thermodynamics and thermodynamic processes (Theme B.5).

</details>

---

## Common Pitfalls

### Mechanics (Theme A)

- **Confusing velocity and speed:** Velocity is a vector; speed is its magnitude. A car rounding a
  bend at constant speed has changing velocity and therefore non-zero acceleration.
- **Projectile motion sign conventions:** Always define your positive direction at the start. Mixing
  up the sign of $g$ is the single most common error in kinematics problems.
- **Impulse-momentum sign errors:** Impulse $F \Delta t = \Delta p$. If a ball bounces off a wall,
  the change in momentum is $m(v_f - v_i)$ where $v_f$ and $v_i$ have opposite signs. Always
  account for direction when computing impulse.
- **Centripetal vs centrifugal:** There is no centrifugal force in an inertial frame. The net force
  towards the centre is the centripetal force -- it is not a separate force but the result of other
  forces (tension, gravity, friction, etc.).
- **Energy conservation with friction:** When friction is present, mechanical energy is not
  conserved. Always account for the work done by friction separately: $E_{k,i} + E_{p,i} = E_{k,f} + E_{p,f} + W_{\mathrm{friction}}$.
- **Power and efficiency:** Power is the rate of energy transfer ($P = W/t = Fv$). Efficiency is
  $\eta = \mathrm{useful\;output}/\mathrm{total\;input}$. Do not confuse power with energy or
  forget that efficiency is always less than 1 (or 100%).

### Thermal Physics (Theme B)

- **Mixing up specific heat and latent heat:** Specific heat ($Q = mc\Delta T$) applies during
  temperature changes; latent heat ($Q = mL$) applies during phase changes at constant temperature.
  Multi-stage heating problems require both.
- **First law sign convention:** $\Delta U = Q - W$. The IB convention defines $W$ as work done
  **by** the system. During compression, $W$ is negative and $\Delta U$ increases.
- **Ideal gas law units:** Pressure must be in pascals, volume in $\mathrm{m^3}$, and temperature
  in kelvin. Never use Celsius in the ideal gas equation.
- **Internal resistance:** The terminal PD is always less than the emf when current flows:
  $V = \varepsilon - Ir$. Many students forget to subtract the internal potential drop.
- **Isothermal vs adiabatic:** In an isothermal process $\Delta T = 0$ and $\Delta U = 0$;
  in an adiabatic process $Q = 0$ so $\Delta U = -W$. Do not confuse the two.

### Waves (Theme C)

- **Fringe spacing formula:** $\Delta y = \lambda D / d$. Many students invert $d$ and $D$. Remember
  that increasing slit separation $d$ **decreases** fringe spacing.
- **Open vs closed pipe harmonics:** Open pipes produce all harmonics ($f_n = n f_1$); closed pipes
  produce only odd harmonics ($f_n = n f_1$ for odd $n$ only). The "second harmonic" does not exist
  in a closed pipe.
- **Standing wave nodes and antinodes:** At a closed end there is always a displacement node; at an
  open end there is always a displacement antinode.
- **Snell's law and TIR:** Total internal reflection can only occur when light travels from a
  higher-index medium to a lower-index medium. Always check this condition first.
- **Diffraction grating maximum order:** The maximum number of orders is limited by $\sin \theta \leq 1$, giving $n_{\max} = d/\lambda$. If this is not an integer, round down.
- **Single-slit vs double-slit:** Single-slit diffraction produces a broad central maximum with
  subsidiary maxima; double-slit interference produces equally spaced fringes modulated by the
  single-slit envelope. Do not confuse the two patterns.

### Fields (Theme D)

- **Gravitational field strength vs gravitational force:** $g = GM/r^2$ is field strength (per unit
  mass); $F = GMm/r^2$ is force on a specific mass. Do not multiply by $m$ twice.
- **Gravitational potential:** $V_g = -GM/r$ is always negative. It becomes less negative (increases)
  as $r$ increases, approaching zero at infinity. Many students incorrectly state that potential
  "decreases" with distance.
- **Electric potential is a scalar:** Unlike electric field (a vector), potential is a scalar.
  When multiple charges are present, add potentials algebraically, taking sign into account.
- **Lenz's law direction:** The induced current opposes the **change** in flux, not the flux itself.
  If flux is increasing, the induced current creates flux in the opposite direction.
- **Transformer equations:** $V_s/V_p = N_s/N_p$. Many students confuse primary and secondary. The
  side with more turns has the higher voltage.
- **Motional emf:** $\varepsilon = BLv$ requires the velocity to be perpendicular to the field.
  If the velocity is at an angle, use the perpendicular component only.

### Nuclear and Quantum Physics (Theme E)

- **Photoelectric effect threshold:** No electrons are emitted if $hf \lt \phi$, regardless of
  intensity. Increasing intensity only increases the number of photons, not their energy.
- **Mass defect sign:** The mass defect $\Delta m$ is always positive (mass of nucleus is always
  less than the sum of nucleon masses). Do not report a negative mass defect.
- **Binding energy per nucleon curve:** The most stable nuclei (like iron-56) are near the peak.
  Fusion is energetically favourable for light nuclei; fission is favourable for heavy nuclei.
- **Half-life calculations:** Remember that after $n$ half-lives, the fraction remaining is
  $(1/2)^n$, not $1/(2n)$. This is a very common arithmetic error.
- **de Broglie wavelength for massive particles:** The de Broglie equation applies to all matter,
  not just electrons. However, the wavelength is only significant for particles with very small
  mass (electrons, neutrons) -- for macroscopic objects it is negligibly small.
- **Activity vs count rate:** Activity $A$ is the number of decays per second in the sample;
  count rate is the number detected by a detector. Count rate is always less than activity due to
  detector efficiency and geometry. IB questions usually specify which is being asked.

---

## How to Use These Notes

- Begin with the [Syllabus](Syllabus.md) page for a detailed breakdown of all topics, sub-topics,
  and the relevant equations from the data booklet.
- Navigate to the relevant theme section for topic-specific notes and worked examples.
- The [Wrap-up](wrap-up.md) page provides a summary of key concepts across the course.
- When preparing for examinations, ensure familiarity with the physics data booklet and practise
  both calculation and explanation-style questions.
- Focus revision time on the most-tested topics listed above, and always practise under timed
  conditions in the final weeks before the exam.
- Attempt the 15-problem set above under exam conditions, then check your answers against the
  solutions. Review the cross-referenced topic notes for any problems you get wrong.
- Use the worked examples throughout this page as templates for solving similar problems. Pay
  attention to the method of setting up equations and the logical flow of each solution.
- Review the Common Pitfalls section before each exam -- the errors listed there are the ones that
  most frequently cost students marks.
- For HL students, pay extra attention to the AHL worked examples (marked with "HL" in the title)
  as these topics appear in Paper 3 and carry significant marks.
