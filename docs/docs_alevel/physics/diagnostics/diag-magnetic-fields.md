---
title: Magnetic Fields -- Diagnostic Tests
description: Diagnostic tests for force on a current-carrying conductor, force on a moving charge, electromagnetic induction, and the Hall effect at maximum A-Level Physics difficulty.
slug: diag-magnetic-fields
hide_table_of_contents: true
---

# Magnetic Fields — Diagnostic Tests

## Unit Tests

### UT-1: Force on a Current-Carrying Wire in a Non-Uniform Field

**Question:**

A long straight wire carries a current $I_1 = 10\,\text{A}$ vertically upwards. A second straight wire of length $0.30\,\text{m}$ carrying current $I_2 = 5.0\,\text{A}$ is placed parallel to the first wire at a distance of $0.05\,\text{m}$.

(a) Calculate the force per unit length between the wires and state whether it is attractive or repulsive.

(b) Calculate the total force on the $0.30\,\text{m}$ wire.

(c) If the second wire is now placed perpendicular to the first (still at $0.05\,\text{m}$ distance), calculate the force on it and explain why it differs from part (b).

Take $\mu_0 = 4\pi \times 10^{-7}\,\text{T}\,\text{m}\,\text{A}^{-1}$.

**Solution:**

(a) The magnetic field due to $I_1$ at the location of $I_2$:

$$B = \frac{\mu_0 I_1}{2\pi r} = \frac{4\pi \times 10^{-7} \times 10}{2\pi \times 0.05} = \frac{4\pi \times 10^{-6}}{0.1\pi} = 4.0 \times 10^{-5}\,\text{T}$$

Force per unit length: $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi r} = \frac{4\pi \times 10^{-7} \times 10 \times 5.0}{2\pi \times 0.05}$

$$= \frac{2 \times 10^{-5}}{0.05} = 4.0 \times 10^{-4}\,\text{N}\,\text{m}^{-1}$$

Using the right-hand grip rule: $I_1$ produces a field that points into the page at the location of $I_2$ (if $I_2$ is to the right of $I_1$ and both carry current upward). Fleming's left-hand rule gives a force on $I_2$ directed toward $I_1$. The force is **attractive**.

(b) Total force: $F = 4.0 \times 10^{-4} \times 0.30 = 1.2 \times 10^{-4}\,\text{N} = 0.12\,\text{mN}$

(c) When the second wire is perpendicular, the force depends on the angle between the current and the field. The field from $I_1$ still circles $I_1$. If the second wire is horizontal (perpendicular to $I_1$), the field at the closest point of $I_2$ is tangential to the circle around $I_1$, which is perpendicular to $I_2$ at the closest point. However, along the length of $I_2$, the distance from $I_1$ varies and the field direction changes.

For a wire perpendicular to $I_1$ with one end at distance $r = 0.05\,\text{m}$, the field varies along its length and the direction of the force also varies. The total force requires integration. The key difference from part (b) is that the field is no longer uniform along $I_2$, and the angle between the field and current changes along the wire.

The force on a perpendicular wire is generally larger per unit length near the close end but the total force depends on the geometry. For a long perpendicular wire, the total force is finite and approximately equal to $\mu_0 I_1 I_2/(2\pi)$ times a geometric factor.

---
### UT-2: Cyclotron Motion of a Charged Particle

**Question:**

A proton (mass $1.67 \times 10^{-27}\,\text{kg}$, charge $1.60 \times 10^{-19}\,\text{C}$) enters a uniform magnetic field $B = 0.50\,\text{T}$ perpendicular to its velocity with speed $4.0 \times 10^6\,\text{m}\,\text{s}^{-1}$.

(a) Calculate the radius of the circular orbit.

(b) Calculate the cyclotron frequency and the period of revolution.

(c) Calculate the kinetic energy of the proton in electronvolts.

**Solution:**

(a) The magnetic force provides the centripetal force:

$$Bqv = \frac{mv^2}{r} \Rightarrow r = \frac{mv}{Bq}$$

$$r = \frac{1.67 \times 10^{-27} \times 4.0 \times 10^6}{0.50 \times 1.60 \times 10^{-19}} = \frac{6.68 \times 10^{-21}}{8.0 \times 10^{-20}} = 0.0835\,\text{m} = 8.35\,\text{cm}$$

(b) Cyclotron frequency: $f = \frac{Bq}{2\pi m} = \frac{0.50 \times 1.60 \times 10^{-19}}{2\pi \times 1.67 \times 10^{-27}}$

$$= \frac{8.0 \times 10^{-20}}{1.049 \times 10^{-26}} = 7.63 \times 10^6\,\text{Hz} = 7.63\,\text{MHz}$$

Period: $T = 1/f = 1.31 \times 10^{-7}\,\text{s} = 131\,\text{ns}$

Note: the cyclotron frequency is independent of the speed (and hence radius), which is the principle behind the cyclotron accelerator.

(c) $E_k = \frac{1}{2}mv^2 = 0.5 \times 1.67 \times 10^{-27} \times (4.0 \times 10^6)^2 = 0.5 \times 1.67 \times 10^{-27} \times 1.6 \times 10^{13} = 1.336 \times 10^{-14}\,\text{J}$

In eV: $E_k = 1.336 \times 10^{-14}/(1.60 \times 10^{-19}) = 83500\,\text{eV} = 83.5\,\text{keV}$

---
### UT-3: Electromagnetic Induction — Faraday's and Lenz's Laws

**Question:**

A rectangular coil of $200$ turns, each of dimensions $0.05\,\text{m} \times 0.08\,\text{m}$, is rotated at $3000\,\text{rpm}$ in a uniform magnetic field of $0.40\,\text{T}$. The axis of rotation is perpendicular to the field.

(a) Calculate the maximum EMF induced in the coil.

(b) Calculate the EMF as a function of time, taking the EMF to be zero at $t = 0$.

(c) Calculate the average EMF over one quarter of a revolution.

**Solution:**

(a) Area of coil: $A = 0.05 \times 0.08 = 4.0 \times 10^{-3}\,\text{m}^2$

Angular velocity: $\omega = 2\pi \times 3000/60 = 2\pi \times 50 = 314.2\,\text{rad}\,\text{s}^{-1}$

Maximum EMF: $\varepsilon_{\max} = NAB\omega = 200 \times 4.0 \times 10^{-3} \times 0.40 \times 314.2$

$$= 200 \times 4.0 \times 10^{-3} \times 125.7 = 100.5\,\text{V}$$

(b) $\varepsilon = NAB\omega\sin(\omega t) = 100.5\sin(314.2t)\,\text{V}$

At $t = 0$, the flux through the coil is maximum and the rate of change is zero, so $\varepsilon = 0$. This is consistent with $\varepsilon = \varepsilon_{\max}\sin(\omega t)$.

(c) Average EMF over one quarter revolution ($t = 0$ to $t = T/4 = \pi/(2\omega)$):

$$\bar{\varepsilon} = \frac{1}{T/4}\int_0^{T/4} \varepsilon_{\max}\sin(\omega t)\,dt = \frac{4}{T}\left[-\frac{\varepsilon_{\max}}{\omega}\cos(\omega t)\right]_0^{T/4}$$

$$= \frac{4\varepsilon_{\max}}{\omega T}\left[-\cos\frac{\pi}{2} + \cos 0\right] = \frac{4\varepsilon_{\max}}{2\pi}(0 + 1) = \frac{2\varepsilon_{\max}}{\pi}$$

$$= \frac{2 \times 100.5}{\pi} = 63.9\,\text{V}$$

This is $2/\pi \approx 0.637$ times the peak value, which is the mean of a half sine wave.

## Integration Tests

### IT-1: Velocity Selector and Mass Spectrometer (with Electric Fields)

**Question:**

A velocity selector consists of parallel plates producing a uniform electric field $E = 1.5 \times 10^5\,\text{V}\,\text{m}^{-1}$ and a uniform magnetic field $B = 0.050\,\text{T}$ perpendicular to $E$. Ions pass through undeflected and enter a region of uniform magnetic field $B' = 0.20\,\text{T}$ where they follow semicircular paths before hitting a detector.

(a) Calculate the velocity of ions that pass through the velocity selector undeflected.

(b) Singly charged ions of neon-20 ($m = 20\,\text{u}$) and neon-22 ($m = 22\,\text{u}$) enter the deflection region. Calculate the separation of their impact points on the detector.

(c) Explain why the velocity selector must use crossed $E$ and $B$ fields (not parallel).

Take $1\,\text{u} = 1.66 \times 10^{-27}\,\text{kg}$, $e = 1.60 \times 10^{-19}\,\text{C}$.

**Solution:**

(a) For undeflected passage: $qE = qvB \Rightarrow v = E/B$

$$v = 1.5 \times 10^5/0.050 = 3.0 \times 10^6\,\text{m}\,\text{s}^{-1}$$

(b) In the deflection region: $B'qv = mv^2/r \Rightarrow r = mv/(B'q)$

For neon-20: $r_{20} = 20 \times 1.66 \times 10^{-27} \times 3.0 \times 10^6/(0.20 \times 1.60 \times 10^{-19})$

$$= \frac{9.96 \times 10^{-20}}{3.2 \times 10^{-20}} = 3.1125\,\text{m}$$

For neon-22: $r_{22} = 22 \times 1.66 \times 10^{-27} \times 3.0 \times 10^6/(0.20 \times 1.60 \times 10^{-19})$

$$= \frac{10.956 \times 10^{-20}}{3.2 \times 10^{-20}} = 3.4238\,\text{m}$$

Separation on detector: $d = 2(r_{22} - r_{20}) = 2(3.4238 - 3.1125) = 2 \times 0.3113 = 0.623\,\text{m} = 62.3\,\text{cm}$

(c) Crossed fields are needed so that the electric and magnetic forces can be in opposite directions for the selected velocity. With $E$ and $B$ perpendicular, the electric force ($qE$) and magnetic force ($qvB$) act along the same line (perpendicular to both $E$ and $B$). Only ions with the specific velocity $v = E/B$ experience equal and opposite forces. Slower ions are deflected by $E$; faster ions are deflected by $B$. With parallel fields, the forces would be perpendicular and could not cancel.

---
### IT-2: Transformer with Load and Efficiency (with DC Circuits)

**Question:**

A transformer has 500 turns on the primary and 50 turns on the secondary. The primary is connected to a $240\,\text{V}$ RMS AC supply. The secondary is connected to a load of $10\,\Omega$.

(a) Calculate the secondary voltage and the primary and secondary currents (assuming an ideal transformer).

(b) The transformer is $92\%$ efficient. Calculate the actual primary current and the power loss.

(c) The core has a cross-sectional area of $0.010\,\text{m}^2$ and the maximum flux density is $1.5\,\text{T}$. Calculate the minimum supply frequency for the transformer to operate correctly.

**Solution:**

(a) Turns ratio: $n = N_s/N_p = 50/500 = 0.10$

Secondary voltage: $V_s = nV_p = 0.10 \times 240 = 24.0\,\text{V}$ (RMS)

Secondary current: $I_s = V_s/R_L = 24.0/10 = 2.40\,\text{A}$ (RMS)

Primary current (ideal): $I_p = nI_s = 0.10 \times 2.40 = 0.240\,\text{A}$ (RMS)

(b) Output power: $P_{\text{out}} = V_s I_s = 24.0 \times 2.40 = 57.6\,\text{W}$

Input power: $P_{\text{in}} = P_{\text{out}}/\eta = 57.6/0.92 = 62.6\,\text{W}$

Actual primary current: $I_p = P_{\text{in}}/V_p = 62.6/240 = 0.261\,\text{A}$

Power loss: $P_{\text{loss}} = P_{\text{in}} - P_{\text{out}} = 62.6 - 57.6 = 5.0\,\text{W}$

(c) The induced EMF equation: $V_p = N_p \times \frac{d\Phi}{dt}$

For sinusoidal: $V_p = N_p \times \omega \times \hat{B} \times A$, where $\hat{B}$ is the peak flux density.

Using RMS: $V_{p,\text{RMS}} = \frac{N_p \times 2\pi f \times \hat{B} \times A}{\sqrt{2}}$

$$f_{\min} = \frac{V_{p,\text{RMS}}\sqrt{2}}{2\pi N_p \hat{B} A} = \frac{240 \times 1.414}{2\pi \times 500 \times 1.5 \times 0.010}$$

$$= \frac{339.4}{47.12} = 7.20\,\text{Hz}$$

The transformer operates correctly at frequencies above $7.2\,\text{Hz}$. Standard mains frequency ($50\,\text{Hz}$ or $60\,\text{Hz}$) is well above this.

---
### IT-3: Eddy Currents and Lenz's Law (with Work-Energy)

**Question:**

A square conducting loop of side $0.10\,\text{m}$ and resistance $2.0\,\Omega$ is pulled out of a uniform magnetic field $B = 0.50\,\text{T}$ at a constant speed $v = 5.0\,\text{m}\,\text{s}^{-1}$. The field is directed into the page and the loop moves to the right.

(a) Calculate the EMF induced in the loop as it exits the field.

(b) Calculate the force required to maintain the constant speed.

(c) Calculate the power dissipated and verify it equals the mechanical power input.

**Solution:**

(a) As the loop exits, the area within the field decreases. If $x$ is the length still inside the field, the flux is $\Phi = B \times 0.10 \times x$.

$$\varepsilon = -\frac{d\Phi}{dt} = -B \times 0.10 \times \frac{dx}{dt} = -B \times 0.10 \times (-v) = B \times 0.10 \times v$$

(The sign depends on direction convention.)

$$\varepsilon = 0.50 \times 0.10 \times 5.0 = 0.25\,\text{V}$$

(b) Current in the loop: $I = \varepsilon/R = 0.25/2.0 = 0.125\,\text{A}$

By Lenz's law, the induced current flows to oppose the change in flux (to maintain the flux), creating a force that opposes the motion.

Force on the leading vertical side (the only side in the field):

$$F = BIl = 0.50 \times 0.125 \times 0.10 = 6.25 \times 10^{-3}\,\text{N}$$

This force opposes the motion (to the left), so the applied force must be $6.25\,\text{mN}$ to the right.

(c) Power dissipated in the loop: $P = I^2R = (0.125)^2 \times 2.0 = 0.03125\,\text{W} = 31.3\,\text{mW}$

Mechanical power input: $P = Fv = 6.25 \times 10^{-3} \times 5.0 = 0.03125\,\text{W} = 31.3\,\text{mW}$

The power dissipated equals the mechanical power input, confirming conservation of energy. The mechanical work done in pulling the loop is entirely converted to thermal energy in the resistance.
