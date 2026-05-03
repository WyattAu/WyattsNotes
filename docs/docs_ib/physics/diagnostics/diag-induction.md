---
title: Induction -- Diagnostic Tests
description: Hardest IB Physics induction diagnostic tests covering Faraday and Lenz distinction, flux linkage calculation, back EMF in motors, and transformer efficiency with loaded secondary.
slug: diag-induction
hide_table_of_contents: true
---

# Induction — Diagnostic Tests

## Unit Tests

### UT-1: Faraday's Law (Magnitude) vs Lenz's Law (Direction)

**Question:**

A circular coil of $N = 200$ turns, radius $r = 0.05\,\text{m}$, and total resistance $R = 10\,\Omega$ is placed in a uniform magnetic field. The field is directed perpendicular to the plane of the coil and varies with time as $B(t) = (0.04 + 0.02t)\,\text{T}$ where $t$ is in seconds.

(a) Calculate the magnitude of the induced EMF at $t = 2.0\,\text{s}$.

(b) Determine the direction of the induced current and explain using Lenz's law.

(c) The magnetic field is now changed so that it makes an angle $\theta = 60^\circ$ with the normal to the coil and still varies as $B(t) = (0.04 + 0.02t)\,\text{T}$. Calculate the new induced EMF.

**Solution:**

(a) Faraday's law: $\varepsilon = -N\frac{d\Phi}{dt}$

Magnetic flux: $\Phi = BA\cos\theta$ where $A = \pi r^2 = \pi(0.05)^2 = 7.854 \times 10^{-3}\,\text{m}^2$ and $\theta = 0$ (perpendicular).

$$\Phi = (0.04 + 0.02t) \times 7.854 \times 10^{-3}$$

$$\frac{d\Phi}{dt} = 0.02 \times 7.854 \times 10^{-3} = 1.571 \times 10^{-4}\,\text{Wb}\,\text{s}^{-1}$$

$$|\varepsilon| = N \times \frac{d\Phi}{dt} = 200 \times 1.571 \times 10^{-4} = 0.0314\,\text{V} = 31.4\,\text{mV}$$

Induced current: $I = \varepsilon/R = 0.0314/10 = 3.14\,\text{mA}$

(b) By Lenz's law, the induced current opposes the **change** in flux. Since $B$ is increasing with time, the flux through the coil is increasing. The induced current must create a magnetic field that opposes this increase, i.e. a field directed opposite to the external field (out of the plane if $B$ is into the plane).

By the right-hand rule, if the external field is into the page, the induced current flows **anticlockwise** when viewed from the direction of the external field.

Key distinction: Faraday's law gives the **magnitude** of the EMF; Lenz's law (the minus sign) gives the **direction**. Students often confuse or conflate these.

(c) With $\theta = 60^\circ$:

$$\Phi = BA\cos 60^\circ = (0.04 + 0.02t) \times 7.854 \times 10^{-3} \times 0.5$$

$$\frac{d\Phi}{dt} = 0.02 \times 7.854 \times 10^{-3} \times 0.5 = 7.854 \times 10^{-5}\,\text{Wb}\,\text{s}^{-1}$$

$$|\varepsilon| = 200 \times 7.854 \times 10^{-5} = 0.0157\,\text{V} = 15.7\,\text{mV}$$

The EMF is halved because the effective area perpendicular to the field is $A\cos 60^\circ = A/2$.

---

### UT-2: Flux Linkage $NBA\cos\theta$ with Rotating Coil

**Question:**

A rectangular coil of $N = 500$ turns, dimensions $0.10\,\text{m} \times 0.15\,\text{m}$, rotates at $f = 50\,\text{Hz}$ in a uniform magnetic field $B = 0.40\,\text{T}$. The axis of rotation is perpendicular to the field.

(a) Calculate the maximum flux linkage and the maximum induced EMF.

(b) Write expressions for the flux linkage and induced EMF as functions of time, taking $\Phi = \Phi_{\max}$ at $t = 0$.

(c) Calculate the induced EMF when the plane of the coil makes an angle of $30^\circ$ with the field.

**Solution:**

(a) Area: $A = 0.10 \times 0.15 = 0.015\,\text{m}^2$

Maximum flux linkage (when the normal to the coil is parallel to the field):

$$\Phi_{\max} = NBA = 500 \times 0.40 \times 0.015 = 3.0\,\text{Wb}$$

Angular velocity: $\omega = 2\pi f = 2\pi \times 50 = 314.2\,\text{rad}\,\text{s}^{-1}$

Maximum EMF: $\varepsilon_{\max} = NAB\omega = \Phi_{\max}\omega = 3.0 \times 314.2 = 943\,\text{V}$

(b) If the normal to the coil makes angle $\theta = \omega t$ with the field at $t = 0$ (where $\Phi = \Phi_{\max}$):

$$\Phi(t) = NBA\cos(\omega t) = 3.0\cos(314.2t)\,\text{Wb}$$

$$\varepsilon(t) = -\frac{d\Phi}{dt} = NBA\omega\sin(\omega t) = 943\sin(314.2t)\,\text{V}$$

(c) When the plane of the coil makes $30^\circ$ with the field, the normal makes $90^\circ - 30^\circ = 60^\circ$ with the field.

$$\theta = 60^\circ \Rightarrow \omega t = 60^\circ = \pi/3$$

$$\varepsilon = 943\sin(\pi/3) = 943 \times 0.866 = 817\,\text{V}$$

Common misconception: students confuse the angle of the **plane** with the angle of the **normal**. The flux linkage is $NBA\cos\theta$ where $\theta$ is the angle of the normal to the field, not the angle of the plane.

---

### UT-3: Back EMF in a DC Motor

**Question:**

A DC motor has an armature resistance of $R = 2.0\,\Omega$ and is connected to a $120\,\text{V}$ DC supply. When the motor is running at full speed, it draws a current of $5.0\,\text{A}$ and delivers a mechanical power output of $500\,\text{W}$.

(a) Calculate the back EMF of the motor at full speed.

(b) Calculate the starting current (when the motor is stationary) and explain why a starting resistor is needed.

(c) The motor is now used to lift a load at constant speed. The supply voltage is reduced to $60\,\text{V}$. Calculate the new back EMF and current, assuming the load torque is unchanged.

**Solution:**

(a) By Kirchhoff's voltage law: $V = \varepsilon_{\text{back}} + IR$

$$\varepsilon_{\text{back}} = V - IR = 120 - 5.0 \times 2.0 = 120 - 10 = 110\,\text{V}$$

(b) When the motor is stationary, $\varepsilon_{\text{back}} = 0$ (no rotation, no change in flux).

Starting current: $I_{\text{start}} = V/R = 120/2.0 = 60\,\text{A}$

This is 12 times the running current. Such a large current could damage the armature windings due to excessive heating and could damage the commutator. A starting resistor in series limits the initial current.

(c) At constant speed, the load torque equals the motor torque: $\tau = k\Phi I$ where $k\Phi$ is the motor constant. If the load torque is unchanged, the current must be the same: $I = 5.0\,\text{A}$.

$$\varepsilon_{\text{back}} = V - IR = 60 - 5.0 \times 2.0 = 50\,\text{V}$$

Check: the back EMF is proportional to angular velocity. Original: $\varepsilon_{\text{back}} = 110\,\text{V}$, new: $50\,\text{V}$. The motor runs at $50/110 = 45.5\%$ of its original speed.

## Integration Tests

### IT-1: Falling Magnet Through a Coil (with Energy and SHM)

**Question:**

A bar magnet of mass $0.050\,\text{kg}$ falls from rest through a vertical coil of $N = 100$ turns, mean radius $r = 0.02\,\text{m}$, and resistance $R = 5.0\,\Omega$. The magnet produces an average flux of $\Phi = 2.0 \times 10^{-4}\,\text{Wb}$ through the coil when it is centred.

(a) Estimate the average current induced in the coil as the magnet passes through.

(b) Calculate the average upward magnetic force on the magnet during its passage through the coil.

(c) The terminal velocity of the magnet as it falls through a very long coil is measured to be $0.80\,\text{m}\,\text{s}^{-1}$. Calculate the power dissipated and explain why the magnet reaches a terminal velocity.

**Solution:**

(a) As the magnet enters the coil, the flux changes from approximately 0 to $\Phi$, and as it exits, from $\Phi$ to approximately 0. The time for the magnet to pass through depends on its speed, but for an estimate, assume the magnet length is $\ell = 0.05\,\text{m}$ and it enters at speed $v$:

Time to pass through: $\Delta t \approx \ell/v$

Average EMF: $\varepsilon \approx N\Delta\Phi/\Delta t = N \times 2\Phi \times v/\ell$

This requires knowing $v$, which changes. For a rough estimate, assume the magnet reaches a terminal speed of $0.80\,\text{m}\,\text{s}^{-1}$:

$$\varepsilon \approx 100 \times 2 \times 2.0 \times 10^{-4} \times 0.80/0.05 = 0.64\,\text{V}$$

Average current: $I \approx 0.64/5.0 = 0.13\,\text{A}$

(b) The force on a current-carrying coil in a magnetic field is related to the rate of change of flux. The average upward force:

$$F \approx BIl \times N \approx \frac{\Phi}{\pi r^2} \times I \times 2\pi r \times N$$

More directly, by Lenz's law and energy conservation, the average retarding force equals the rate of energy dissipation divided by velocity:

$$F = P/v = I^2R/v = 0.13^2 \times 5.0/0.80 = 0.0845/0.80 = 0.106\,\text{N}$$

(c) At terminal velocity, the magnetic braking force equals the gravitational force:

$$F_{\text{brake}} = mg = 0.050 \times 9.81 = 0.4905\,\text{N}$$

Power dissipated: $P = Fv = 0.4905 \times 0.80 = 0.392\,\text{W}$

The magnet reaches terminal velocity because the induced current (and therefore the braking force) increases with speed. As the magnet accelerates, the rate of flux change increases, increasing the induced EMF, current, and braking force. Equilibrium is reached when the braking force equals gravity.

---

### IT-2: Transformer with Non-Ideal Loading (with Current Electricity)

**Question:**

An ideal transformer has $N_p = 1000$ primary turns and $N_s = 200$ secondary turns. The primary is connected to a $240\,\text{V}$ RMS AC supply. A load resistor $R_L = 10\,\Omega$ is connected across the secondary.

(a) Calculate the secondary voltage, primary current, and secondary current.

(b) The transformer is now loaded with a non-purely-resistive load with power factor $\cos\phi = 0.80$. The secondary current RMS is $10\,\text{A}$. Calculate the primary current and the power delivered to the load.

(c) A real transformer has an efficiency of $92\%$. Calculate the power loss and the primary current under the conditions of part (a).

**Solution:**

(a) Turns ratio: $n = N_s/N_p = 200/1000 = 0.20$

Secondary voltage: $V_s = nV_p = 0.20 \times 240 = 48\,\text{V}$ RMS

Secondary current: $I_s = V_s/R_L = 48/10 = 4.8\,\text{A}$ RMS

For an ideal transformer: $V_pI_p = V_sI_s$

Primary current: $I_p = V_sI_s/V_p = 48 \times 4.8/240 = 0.96\,\text{A}$ RMS

(b) Secondary apparent power: $S_s = V_sI_s = 48 \times 10 = 480\,\text{VA}$

Active power delivered: $P = S_s\cos\phi = 480 \times 0.80 = 384\,\text{W}$

Primary current (ideal): $I_p = S_s/V_p = 480/240 = 2.0\,\text{A}$ RMS

Note: the primary current is determined by the apparent power (VA), not the active power (W). This is because the transformer transfers both real and reactive power.

(c) Output power: $P_{\text{out}} = V_sI_s = 48 \times 4.8 = 230.4\,\text{W}$

Input power: $P_{\text{in}} = P_{\text{out}}/\eta = 230.4/0.92 = 250.4\,\text{W}$

Power loss: $P_{\text{loss}} = P_{\text{in}} - P_{\text{out}} = 250.4 - 230.4 = 20.0\,\text{W}$

Primary current: $I_p = P_{\text{in}}/V_p = 250.4/240 = 1.04\,\text{A}$ RMS

---

### IT-3: AC Generator Connected to RL Circuit (with Current Electricity and SHM)

**Question:**

An AC generator produces an EMF $\varepsilon = 170\sin(120\pi t)\,\text{V}$ and is connected to a series circuit containing a resistor $R = 100\,\Omega$ and an inductor $L = 0.30\,\text{H}$.

(a) Calculate the impedance of the circuit, the current amplitude, and the phase angle between the current and the voltage.

(b) Calculate the RMS voltage across the resistor and across the inductor.

(c) Calculate the resonant frequency of the circuit and explain what happens to the current if the frequency is increased to this value (assuming the generator frequency can be adjusted).

**Solution:**

(a) Angular frequency: $\omega = 120\pi = 377.0\,\text{rad}\,\text{s}^{-1}$

Inductive reactance: $X_L = \omega L = 377.0 \times 0.30 = 113.1\,\Omega$

Impedance: $Z = \sqrt{R^2 + X_L^2} = \sqrt{10000 + 12791} = \sqrt{22791} = 151.0\,\Omega$

Current amplitude: $I_0 = \varepsilon_0/Z = 170/151.0 = 1.126\,\text{A}$

Phase angle: $\phi = \tan^{-1}(X_L/R) = \tan^{-1}(113.1/100) = \tan^{-1}(1.131) = 48.5^\circ$

The current lags the voltage by $48.5^\circ$.

(b) RMS current: $I_{\text{rms}} = I_0/\sqrt{2} = 1.126/1.414 = 0.796\,\text{A}$

Voltage across resistor: $V_R = I_{\text{rms}}R = 0.796 \times 100 = 79.6\,\text{V}$ RMS

Voltage across inductor: $V_L = I_{\text{rms}}X_L = 0.796 \times 113.1 = 90.0\,\text{V}$ RMS

Check: $\sqrt{V_R^2 + V_L^2} = \sqrt{6336 + 8100} = \sqrt{14436} = 120.2\,\text{V}$. This equals $V_{\text{rms}} = 170/\sqrt{2} = 120.2\,\text{V}$. Confirmed.

(c) For resonance, we would need a capacitor. With only $R$ and $L$, there is no resonance (the impedance $Z = \sqrt{R^2 + (\omega L)^2}$ increases monotonically with $\omega$).

If a capacitor $C$ were added, resonance occurs when $X_L = X_C$, i.e. $\omega_0 = 1/\sqrt{LC}$.

Without a capacitor, increasing the frequency increases $X_L$ and therefore $Z$, which decreases the current. There is no resonance in a purely RL circuit.
