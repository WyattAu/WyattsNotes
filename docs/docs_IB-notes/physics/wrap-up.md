---
title: Wrap Up
date: 2025-11-03T14:32:46.994Z
tags:
  - physics
categories:
  - physics
slug: wrap
---

<details>
<summary><strong>Theme A: Space, Time and Motion</strong></summary>

1. **Question:** A projectile is launched from a 50.0 m high cliff with an initial velocity of 80.0 m/s at an angle of 30.0° above the horizontal. A crosswind provides a constant horizontal acceleration of 2.00 m/s² perpendicular to the initial velocity's horizontal component. Ignoring vertical air resistance, calculate the final speed of the projectile just before it hits the ground and the total horizontal distance it travels from the base of the cliff.

<details>
<summary>Answer</summary>

- **Strategy:** Treat the motion in three independent dimensions: x (initial direction), y (vertical), and z (crosswind direction).
- **Initial Velocities:**
  - $u_x = 80.0 \cos(30.0^\circ) = 69.28$ m/s
  - $u_y = 80.0 \sin(30.0^\circ) = 40.0$ m/s
  - $u_z = 0$ m/s
- **Time of Flight (y-dimension):** Use $s_y = u_y t + \frac{1}{2} a_y t^2$ with $s_y = -50.0$ m, $a_y = -9.8$ m/s².
  - $-50.0 = 40.0t - 4.9t^2 \implies 4.9t^2 - 40.0t - 50.0 = 0$.
  - Solving the quadratic gives $t = 9.25$ s.
- **Final Velocities:**
  - $v_x = u_x = 69.28$ m/s (since $a_x = 0$)
  - $v_y = u_y + a_y t = 40.0 - 9.8(9.25) = -50.65$ m/s
  - $v_z = u_z + a_z t = 0 + 2.00(9.25) = 18.5$ m/s
- **Final Speed:** Use Pythagoras in 3D: $v_{\text{final}} = \sqrt{v_x^2 + v_y^2 + v_z^2}$.
  - $v_{\text{final}} = \sqrt{69.28^2 + (-50.65)^2 + 18.5^2} = 87.8$ m/s.
- **Total Horizontal Distance:** Use Pythagoras on the horizontal displacements $s_x = u_x t = 641$ m and $s_z = \frac{1}{2} a_z t^2 = 85.6$ m.
  - $d_{\text{horiz}} = \sqrt{s_x^2 + s_z^2} = \sqrt{641^2 + 85.6^2} = 647$ m.

<b>If you get this wrong, you should focus on:</b> The principle of vector independence (treating x, y, and z motion separately), using the correct signs for vector quantities (like vertical displacement and velocity), and combining vector components using Pythagoras.

</details>

2. **Question:** A 2.0 kg block starts from rest on a rough incline (angle 25°, coefficient of dynamic friction μ_d = 0.20). It slides 3.0 m down the incline and collides perfectly inelastically with a 1.0 kg block at rest. The combined mass then slides an additional distance before stopping. Calculate this additional distance.

<details>
<summary>Answer</summary>

- **Strategy:** A three-part problem: (1) Work-energy to find speed before collision, (2) Conservation of momentum for the collision, (3) Work-energy to find the final stopping distance.
- **Part 1: Speed before collision.**
  - Use the work-energy principle: $\Delta E_k = W_{\text{gravity}} + W_{\text{friction}}$.
  - $W_{\text{gravity}} = mgh = (2.0)(9.8)(3.0 \sin 25^\circ) = 24.85$ J.
  - $W_{\text{friction}} = -f_k d = -(\mu_d N)d = -(\mu_d mg \cos 25^\circ)d = -(0.20)(2.0)(9.8)\cos 25^\circ(3.0) = -10.66$ J.
  - $\frac{1}{2}(2.0)v_1^2 = 24.85 - 10.66 = 14.19$ J $\implies v_1 = 3.77$ m/s.
- **Part 2: Speed after collision.**
  - Conservation of momentum: $m_1 v_1 = (m_1 + m_2) v_f$.
  - $(2.0)(3.77) = (3.0) v_f \implies v_f = 2.51$ m/s.
- **Part 3: Final stopping distance (x).**
  - The initial kinetic energy of the combined mass is $E_k = \frac{1}{2}(3.0)(2.51^2) = 9.45$ J.
  - This energy is dissipated by the net work done on the block, which is $(W_{\text{gravity}} + W_{\text{friction}})$.
  - $W_{\text{net}} = (M g \sin 25^\circ)x - (\mu_d M g \cos 25^\circ)x = \Delta E_k = -9.45$ J.
  - $( (3)(9.8)\sin 25^\circ - 0.2(3)(9.8)\cos 25^\circ ) x = 9.45$.
  - $(12.43 - 5.33)x = 9.45 \implies 7.1x = 9.45 \implies x = 1.33$ m.

<b>If you get this wrong, you should focus on:</b> Chaining together different physics principles (work-energy, momentum), correctly calculating work done by non-conservative forces like friction, and applying the correct form of conservation law to each stage of the problem.

</details>

3. **Question (HL Only):** A solid uniform disk (mass M, radius R, $I = \frac{1}{2}MR^2$) is free to rotate. A string is wrapped around its rim, and a block of mass m hangs from it. As the system is released from rest, a constant frictional torque $\tau_f$ opposes the disk's motion. Derive an expression for the angular acceleration ($\alpha$) of the disk.

<details>
<summary>Answer</summary>

- **Strategy:** Set up Newton's Second Law for the block's linear motion and for the disk's rotational motion. Use the non-slip condition ($a = \alpha R$) to link the two equations.
- **For the block (mass m):** The net force is the weight minus tension:
  - $mg - T = ma$ (Eq. 1)
- **For the disk (mass M):** The net torque is the torque from tension minus the frictional torque:
  - $\tau_{\text{net}} = I\alpha \implies TR - \tau_f = (\frac{1}{2}MR^2)\alpha$ (Eq. 2)
- **Solve the system:**
  - From Eq. 1, substitute $a = \alpha R$ to get $T = mg - m\alpha R$.
  - Substitute this expression for T into Eq. 2:
  - $(mg - m\alpha R)R - \tau_f = \frac{1}{2}MR^2\alpha$.
  - $mgR - m\alpha R^2 - \tau_f = \frac{1}{2}MR^2\alpha$.
  - Rearrange to isolate $\alpha$: $mgR - \tau_f = \alpha (\frac{1}{2}MR^2 + mR^2)$.
  - $\alpha = \frac{mgR - \tau_f}{R^2 (\frac{M}{2} + m)}$.

<b>If you get this wrong, you should focus on:</b> Setting up coupled equations for systems with both linear and rotational motion, correctly identifying the direction of all forces and torques, and algebraically solving a system of equations.

</details>

4. **Question (HL Only):** A spaceship travels away from Earth at 0.80c. It fires a probe back towards Earth at 0.50c relative to the spaceship. A beacon on the probe flashes with a proper period of 2.0 s. What is the period of the flashes and the speed of the probe as measured by an observer on Earth?

<details>
<summary>Answer</summary>

- **Strategy:** First, use the relativistic velocity addition formula to find the probe's speed relative to Earth. Then, use that speed to calculate the time dilation of the beacon's flashes.
- **Part 1: Probe's speed relative to Earth (u).**
  - Let Earth be frame S. The spaceship is frame S' moving at $v = +0.80c$. The probe's velocity in S' is $u' = -0.50c$.
  - $u = \frac{u' + v}{1 + \frac{u'v}{c^2}} = \frac{-0.50c + 0.80c}{1 + \frac{(-0.50c)(0.80c)}{c^2}} = \frac{0.30c}{1 - 0.40} = 0.50c$.
  - The probe's speed as measured from Earth is 0.50c.
- **Part 2: Time dilation of the beacon.**
  - The probe is moving at $0.50c$ relative to Earth. The proper time is $\Delta t_0 = 2.0$ s.
  - First, find the Lorentz factor $\gamma$ for this speed:
    - $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}} = \frac{1}{\sqrt{1 - (0.50)^2}} = \frac{1}{\sqrt{0.75}} \approx 1.155$.
  - The observed period on Earth is $\Delta t = \gamma \Delta t_0$.
    - $\Delta t = 1.155 \times 2.0 = 2.31$ s.

<b>If you get this wrong, you should focus on:</b> Correctly assigning reference frames and signs in the velocity addition formula, and remembering to use the final, relative speed between the object and the observer for the time dilation calculation.

</details>

</details>

<details>
<summary><strong>Theme B: The Particulate Nature of Matter</strong></summary>

1. **Question:** A sealed, insulated container holds 2.0 moles of a monatomic ideal gas at 300 K. A 50 W heater adds 1500 J of thermal energy. Assuming constant volume, find the final temperature and pressure.

<details>
<summary>Answer</summary>

- **Strategy:** At constant volume, all heat added increases internal energy. Relate the change in internal energy to the change in temperature, then use the ideal gas law.
- **Part 1: Find change in temperature.**
  - For a constant volume process, work done $W=0$. By the first law of thermodynamics, $\Delta U = Q = 1500$ J.
  - For a monatomic ideal gas, the change in internal energy is $\Delta U = \frac{3}{2}nR\Delta T$.
  - $\Delta T = \frac{2 \Delta U}{3nR} = \frac{2 \times 1500}{3 \times 2.0 \times 8.31} \approx 60.2$ K.
  - Final temperature $T_f = 300 + 60.2 = 360.2$ K.
- **Part 2: Find final pressure.**
  - For an isochoric (constant volume) process, $\frac{P_1}{T_1} = \frac{P_2}{T_2}$. First find initial pressure $P_1 = \frac{nRT_1}{V}$. We need V.
  - Let's use the ratio directly. Let $P_1$ be the initial pressure. $P_2 = P_1 \frac{T_2}{T_1}$.
  - If we assume standard initial pressure, say $P_1 = 1.0 \times 10^5$ Pa, then:
  - $P_2 = (1.0 \times 10^5) \frac{360.2}{300} = 1.20 \times 10^5$ Pa.

<b>If you get this wrong, you should focus on:</b> Connecting the First Law of Thermodynamics to the specific formula for internal energy of a monatomic gas, and correctly applying the ideal gas law ratios for a constant-volume process.

</details>

2. **Question:** A spherical planet (radius 6000 km, no atmosphere, emissivity 0.80, albedo 0.25) orbits a star where the incident radiation intensity is 1500 W/m². Calculate the planet's steady-state surface temperature.

<details>
<summary>Answer</summary>

- **Strategy:** In thermal equilibrium, the power absorbed by the planet equals the power radiated by it.
- **Power Absorbed:** The planet absorbs energy over its cross-sectional area (a disk of area $\pi R^2$), accounting for the albedo.
  - $P_{\text{in}} = (1 - \text{albedo}) \cdot S \cdot (\pi R^2) = (1 - 0.25) \cdot 1500 \cdot \pi R^2 = 1125 \pi R^2$.
- **Power Radiated:** The planet radiates energy from its entire surface area (a sphere of area $4\pi R^2$), according to the Stefan-Boltzmann law.
  - $P_{\text{out}} = e \sigma A T^4 = 0.80 \cdot \sigma \cdot (4\pi R^2) \cdot T^4$.
  - **Equilibrium:** Set $P_{\text{in}} = P_{\text{out}}$.
    - $1125 \pi R^2 = 0.80 \cdot \sigma \cdot 4\pi R^2 \cdot T^4$.
    - The $\pi R^2$ term cancels.
    - $1125 = 3.2 \sigma T^4$.
  - **Solve for T:**
    - $T^4 = \frac{1125}{3.2 \cdot (5.67 \times 10^{-8})} \approx 6.20 \times 10^9$ K⁴.
    - $T = (6.20 \times 10^9)^{1/4} \approx 280.5$ K.

<b>If you get this wrong, you should focus on:</b> Distinguishing between the area of absorption ($\pi R^2$) and the area of radiation ($4\pi R^2$), and correctly applying both albedo and emissivity in the energy balance equation.

</details>

3. **Question (HL Only):** 0.50 moles of a monatomic ideal gas undergo a cycle: A->B (isobaric expansion from V to 2V at $2\text{x}10^5$ Pa), B->C (isochoric cooling to original temperature T_A), C->A (isothermal compression). Find (i) the net work done and (ii) the cycle's efficiency.

<details>
<summary>Answer</summary>

- **Strategy:** Calculate work and heat transfer for each leg of the cycle. Net work is the sum of work done. Efficiency is $W_{\text{net}} / Q_{\text{in}}$.
- **Part (i): Net Work Done**
  - $W_{AB} = P\Delta V = P_A(2V_A - V_A) = P_A V_A$.
  - $W_{BC} = 0$ (isochoric).
  - $W_{CA} = nRT_A \ln(V_A/V_C) = P_A V_A \ln(1/2) = -P_A V_A \ln(2)$.
  - $W_{\text{net}} = W_{AB} + W_{BC} + W_{CA} = P_A V_A (1 - \ln(2))$.
  - To find a value, let's find $P_AV_A$. Let $T_A = 300$ K. $P_AV_A = nRT_A = 0.5(8.31)(300) = 1246.5$ J.
  - $W_{\text{net}} = 1246.5 (1 - \ln(2)) \approx 382.8$ J.
- **Part (ii): Efficiency**
  - Heat is added only during the isobaric expansion A->B, where both volume and temperature increase.
  - $Q_{\text{in}} = Q_{AB} = \Delta U_{AB} + W_{AB}$.
  - $\Delta U_{AB} = \frac{3}{2}nR(T_B - T_A) = \frac{3}{2}nR(2T_A - T_A) = \frac{3}{2}nRT_A = \frac{3}{2}P_A V_A$.
  - $Q_{\text{in}} = \frac{3}{2}P_A V_A + P_A V_A = \frac{5}{2}P_A V_A = \frac{5}{2}(1246.5) = 3116.25$ J.
  - $\eta = \frac{W_{\text{net}}}{Q_{\text{in}}} = \frac{P_A V_A (1 - \ln 2)}{\frac{5}{2}P_A V_A} = \frac{2}{5}(1 - \ln 2) \approx 0.123$ or 12.3%.

<b>If you get this wrong, you should focus on:</b> Applying the correct formulas for work and internal energy for each type of thermodynamic process (isobaric, isochoric, isothermal), and correctly identifying which stages of the cycle involve heat input ($Q_{\text{in}}$).

</details>

</details>

<details>
<summary><strong>Theme C: Wave Behaviour</strong></summary>

1. **Question (HL Only):** A 0.50 kg mass on a horizontal spring (k = 200 N/m) is pulled 10 cm from equilibrium and released at t=0. At t = 0.20 s, 0.30 kg of putty is dropped on and sticks to it. Determine the new amplitude and maximum speed.

<details>
<summary>Answer</summary>

- **Strategy:** Find the position and velocity of the mass just before the collision. Apply conservation of momentum for the inelastic collision. Use the new state (mass, position, velocity) in the conservation of energy equation for SHM to find the new amplitude.
- **Initial SHM:** $m_1=0.50$ kg, $x_0=0.10$ m. $\omega_1 = \sqrt{k/m_1} = 20.0$ rad/s.
- **State at t = 0.20 s:**
  - $x(t) = x_0 \cos(\omega_1 t) \implies x(0.20) = 0.10 \cos(4) = -0.0654$ m.
  - $v(t) = -x_0 \omega_1 \sin(\omega_1 t) \implies v(0.20) = -2.0 \sin(4) = 1.514$ m/s.
- **Collision:** Momentum is conserved horizontally. $m_1 v_1 = (m_1+m_2)v_f$.
  - $(0.50)(1.514) = (0.80)v_f \implies v_f = 0.946$ m/s.
- **New SHM:** New mass $M=0.80$ kg. At the instant after collision, the system has energy $E_{\text{total}} = \frac{1}{2}M v_f^2 + \frac{1}{2}k x^2$.
  - $E_{\text{total}} = \frac{1}{2}(0.80)(0.946)^2 + \frac{1}{2}(200)(-0.0654)^2 = 0.358 + 0.428 = 0.786$ J.
- **New Amplitude (A'):** The total energy is also $E_{\text{total}} = \frac{1}{2}k(A')^2$.
  - $A' = \sqrt{2 E_{\text{total}} / k} = \sqrt{2 \cdot 0.786 / 200} = 0.0887$ m.
- **New Max Speed ($v'_{\text{max}}$):** The total energy is also $E_{\text{total}} = \frac{1}{2}M(v'_{\text{max}})^2$.
  - $v'_{\text{max}} = \sqrt{2 E_{\text{total}} / M} = \sqrt{2 \cdot 0.786 / 0.80} = 1.40$ m/s.

<b>If you get this wrong, you should focus on:</b> Applying conservation laws at the correct instant. Momentum is conserved _during_ the collision; energy is conserved _before_ and _after_ but not during an inelastic collision. Correctly calculating the total energy of an oscillator that has both KE and PE.

</details>

2. **Question (HL Only):** A diffraction grating with 500 lines/mm is illuminated by light from a source moving towards it. The light's proper wavelength is 600 nm. The second-order spectrum line is seen at 35.0°. Find the source's speed.

<details>
<summary>Answer</summary>

- **Strategy:** Use the grating equation to find the wavelength measured by the grating ($\lambda'$). Compare this to the proper wavelength ($\lambda$) using the Doppler shift formula.
- **Part 1: Find observed wavelength ($\lambda'$).**
  - Grating spacing $d = \frac{1}{500 \text{ lines/mm}} = 2.0 \times 10^{-6}$ m.
  - From $d \sin\theta = n\lambda'$, we get:
  - $\lambda' = \frac{d \sin\theta}{n} = \frac{(2.0 \times 10^{-6}) \sin(35.0^\circ)}{2} = 5.736 \times 10^{-7}$ m or 573.6 nm.
- **Part 2: Use Doppler shift for light.**
  - Since the observed wavelength (573.6 nm) is shorter than the proper wavelength (600 nm), this is a blueshift, confirming the source is approaching.
  - Use the approximation $\frac{\Delta\lambda}{\lambda} \approx \frac{v}{c}$. The negative sign is handled by convention; here we use magnitudes.
  - $\Delta \lambda = 600 - 573.6 = 26.4$ nm.
  - $v \approx c \frac{\Delta\lambda}{\lambda} = (3.0 \times 10^8) \frac{26.4 \text{ nm}}{600 \text{ nm}} = 1.32 \times 10^7$ m/s.

<b>If you get this wrong, you should focus on:</b> Chaining two separate wave concepts, correctly calculating the grating spacing from lines/mm, and applying the Doppler shift equation with the correct interpretation of blueshift vs. redshift.

</details>

</details>

<details>
<summary><strong>Theme D: Fields</strong></summary>

1. **Question (HL Only):** A satellite of mass m is in a circular orbit of radius 2R around a planet of mass M and radius R. How much work must be done by thrusters to move it to a new circular orbit of radius 3R?

<details>
<summary>Answer</summary>

- **Strategy:** The work done by an external force (thrusters) equals the change in the satellite's total mechanical energy. First, derive the formula for total energy in a circular orbit.
- **Total Energy in Orbit:**
  - The total energy is $E_{\text{total}} = E_k + E_p$.
  - The gravitational force provides the centripetal force: $\frac{GMm}{r^2} = \frac{mv^2}{r}$, which gives the kinetic energy: $E_k = \frac{1}{2}mv^2 = \frac{GMm}{2r}$.
  - The potential energy is $E_p = -\frac{GMm}{r}$.
  - So, $E_{\text{total}} = \frac{GMm}{2r} - \frac{GMm}{r} = -\frac{GMm}{2r}$.
- **Calculate Energy Change:**
  - $E_{\text{initial}} (\text{at } r=2R) = -\frac{GMm}{2(2R)} = -\frac{GMm}{4R}$.
  - $E_{\text{final}} (\text{at } r=3R) = -\frac{GMm}{2(3R)} = -\frac{GMm}{6R}$.
- **Work Done:** $W = \Delta E = E_{\text{final}} - E_{\text{initial}}$.
  - $W = \left(-\frac{GMm}{6R}\right) - \left(-\frac{GMm}{4R}\right) = GMm \left(\frac{1}{4R} - \frac{1}{6R}\right)$.
  - $W = GMm \left(\frac{3 - 2}{12R}\right) = \frac{GMm}{12R}$.

<b>If you get this wrong, you should focus on:</b> Understanding that the work done to change an orbit is the change in _total_ mechanical energy (KE + PE), not just potential energy. Also, be careful with the negative signs in the energy formulas.

</details>

2. **Question (HL Only):** An alpha particle (+2e, 4u) is accelerated from rest through 5.0 kV. It then enters a uniform magnetic field B = 0.20 T, perpendicular to its velocity. What is the radius of its circular path?

<details>
<summary>Answer</summary>

- **Strategy:** First, find the particle's speed by equating the work done by the electric field to the gain in kinetic energy. Then, use the formula for the radius of a charged particle's path in a magnetic field.
- **Part 1: Find Speed (v).**
  - The work done is $W=qV$. The kinetic energy gained is $E_k = \frac{1}{2}mv^2$.
  - $qV = \frac{1}{2}mv^2 \implies v = \sqrt{\frac{2qV}{m}}$.
  - $v = \sqrt{\frac{2(2 \times 1.6\times 10^{-19})(5000)}{4 \times 1.661\times 10^{-27}}} = 6.94 \times 10^5$ m/s.
- **Part 2: Find Radius (r).**
  - The magnetic force provides the centripetal force: $qvB = \frac{mv^2}{r}$.
  - $r = \frac{mv}{qB} = \frac{(4 \times 1.661\times 10^{-27})(6.94\times 10^5)}{(2 \times 1.6\times 10^{-19})(0.20)} = 0.072$ m or 7.2 cm.

<b>If you get this wrong, you should focus on:</b> Converting between energy in electron-volts (or from a voltage) and joules, and recalling the derivation for the radius of a particle in a B-field by equating magnetic force to centripetal force.

</details>

3. **Question (HL Only):** A rectangular loop (10cm x 5cm, 50 turns, 2.0 Ω) rotates at 30 rad/s in a 0.40 T B-field. The rotation axis is perpendicular to B. At t=0, the loop's plane is perpendicular to B. Find the peak induced current and the average power dissipated.

<details>
<summary>Answer</summary>

- **Strategy:** Determine the magnetic flux as a function of time. Use Faraday's Law to find the induced EMF. Use Ohm's Law for current. Use RMS values to find the average power.
- **Part 1: Find Peak EMF ($\varepsilon_{\text{max}}$).**
  - Magnetic flux linkage is $\Phi = NBA \cos(\theta) = NBA \cos(\omega t)$.
  - Induced EMF is $\varepsilon = - \frac{d\Phi}{dt} = -NBA(-\omega \sin(\omega t)) = NBA\omega \sin(\omega t)$.
  - The peak EMF occurs when $\sin(\omega t) = 1$:
  - $\varepsilon_{\text{max}} = NBA\omega = (50)(0.40)(0.10 \times 0.050)(30) = 3.0$ V.
- **Part 2: Find Peak Current ($I_{\text{max}}$).**
  - $I_{\text{max}} = \frac{\varepsilon_{\text{max}}}{R} = \frac{3.0 \text{ V}}{2.0 \Omega} = 1.5$ A.
- **Part 3: Find Average Power ($P_{\text{avg}}$).**
  - Average power is calculated using RMS values: $P_{\text{avg}} = I_{\text{rms}}^2 R$.
  - $I_{\text{rms}} = \frac{I_{\text{max}}}{\sqrt{2}} = \frac{1.5}{\sqrt{2}}$ A.
  - $P_{\text{avg}} = \left(\frac{1.5}{\sqrt{2}}\right)^2 (2.0) = \frac{2.25}{2} \times 2.0 = 2.25$ W.

<b>If you get this wrong, you should focus on:</b> The relationship between flux and EMF (Faraday's Law as a derivative), the difference between peak and RMS values for sinusoidal currents/voltages, and the correct formulas for average power.

</details>

</details>

<details>
<summary><strong>Theme E: Nuclear and Quantum Physics</strong></summary>

1. **Question (HL Only):** Electrons, accelerated from rest by a potential V, are directed at a crystal with 0.20 nm atomic spacing. A first-order diffraction maximum is seen at 30°. Find the accelerating potential V.

<details>
<summary>Answer</summary>

- **Strategy:** This problem links the wave nature of particles to classical electromagnetism. (1) Use the diffraction formula to find the de Broglie wavelength. (2) Use the wavelength to find momentum. (3) Use momentum to find kinetic energy. (4) Relate kinetic energy to accelerating potential.
- **Part 1: Find de Broglie wavelength ($\lambda$).**
  - The crystal acts like a diffraction grating: $d \sin\theta = n\lambda$.
  - $(0.20 \times 10^{-9}) \sin(30^\circ) = (1)\lambda \implies \lambda = 0.10 \times 10^{-9}$ m.
- **Part 2: Find Kinetic Energy ($E_k$).**
  - Momentum $p = h/\lambda = (6.63 \times 10^{-34}) / (0.10 \times 10^{-9}) = 6.63 \times 10^{-24}$ kg m/s.
  - $E_k = \frac{p^2}{2m_e} = \frac{(6.63 \times 10^{-24})^2}{2(9.11 \times 10^{-31})} = 2.41 \times 10^{-17}$ J.
- **Part 3: Find Accelerating Potential (V).**
  - The energy gained from the electric field is $E_k = eV$.
  - $V = \frac{E_k}{e} = \frac{2.41 \times 10^{-17}}{1.60 \times 10^{-19}} = 151$ V.

<b>If you get this wrong, you should focus on:</b> The de Broglie hypothesis ($\lambda = h/p$), the relationship between momentum and kinetic energy ($E_k=p^2/2m$), and the work-energy principle for charges in an electric field ($E_k=qV$).

</details>

2. **Question (HL Only):** Ancient wood has a C-14 activity of 0.125 Bq. A modern sample of the same mass has an activity of 0.250 Bq. A different isotope, X, has a decay constant $\lambda = 3.85 \times 10^{-12} s^{-1}$. How many half-lives of X are equal to the wood's age? (Half-life of C-14 is 5730 years).

<details>
<summary>Answer</summary>

- **Strategy:** Use the C-14 activity to find the age of the wood. Calculate the half-life of isotope X from its decay constant. Divide the age by the half-life, being careful with units.
- **Part 1: Age of the wood.**
  - The activity has dropped to half its initial value ($0.125 = 0.250/2$), so exactly one half-life of C-14 has passed.
  - Age of wood = 5730 years.
- **Part 2: Half-life of isotope X.**
  - $T_{1/2, X} = \frac{\ln 2}{\lambda_X} = \frac{\ln 2}{3.85 \times 10^{-12} \text{ s}^{-1}} = 1.80 \times 10^{11}$ s.
- **Part 3: Compare the timescales.**
  - Convert the wood's age to seconds: Age = $5730 \text{ yr} \times (3.156 \times 10^7 \text{ s/yr}) = 1.81 \times 10^{11}$ s.
  - Number of half-lives of X = $\frac{\text{Age of wood}}{T_{1/2, X}} = \frac{1.81 \times 10^{11} \text{ s}}{1.80 \times 10^{11} \text{ s}} \approx 1.0$.
  - The age of the wood is equal to approximately 1.0 half-life of isotope X.

<b>If you get this wrong, you should focus on:</b> The definition of half-life in terms of activity, the relationship between half-life and decay constant ($T_{1/2} = \ln(2)/\lambda$), and performing consistent unit conversions.

</details>

3. **Question:** A star has a peak emission wavelength of 400 nm and luminosity of 1.6 x 10²⁷ W. Its spectrum shows the Balmer alpha absorption line (n=2 to n=3). Determine the radius of this star.

<details>
<summary>Answer</summary>

- **Strategy:** Use Wien's Law to find the star's surface temperature from its peak wavelength. Then, use the Stefan-Boltzmann Law with the given luminosity and calculated temperature to find its radius. The Balmer line information is contextual, confirming the star is hot enough for these laws to be applicable.
- **Part 1: Surface Temperature (T).**
  - From Wien's Law: $\lambda_{\text{max}} T = 2.9 \times 10^{-3}$ m·K.
  - $T = \frac{2.9 \times 10^{-3}}{400 \times 10^{-9}} = 7250$ K.
- **Part 2: Radius of the Star (R).**
  - From the Stefan-Boltzmann Law: $L = \sigma A T^4 = \sigma (4\pi R^2) T^4$.
  - Rearrange to solve for R: $R = \sqrt{\frac{L}{4\pi \sigma T^4}}$.
  - $R = \sqrt{\frac{1.6 \times 10^{27}}{4\pi (5.67 \times 10^{-8}) (7250)^4}} = \sqrt{8.13 \times 10^{17}} = 9.02 \times 10^8$ m.

<b>If you get this wrong, you should focus on:</b> Applying both Wien's Law and the Stefan-Boltzmann Law, and correctly rearranging the Stefan-Boltzmann equation to solve for the radius. Remember that luminosity is total power output.

</details>

</details>
