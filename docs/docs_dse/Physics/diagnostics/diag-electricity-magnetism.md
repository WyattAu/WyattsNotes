---
title: Electricity and Magnetism -- Diagnostic Tests
description: "Hardest DSE electromagnetism questions: Faraday and Lenz laws, motor effect forces, transformer efficiency, electromagnetic induction, and back EMF."
slug: diag-electricity-magnetism
hide_table_of_contents: true
---

# Electricity and Magnetism — Diagnostic Tests

## Unit Tests

### UT-1: Faraday's Law with Changing Area

**Question:**

A rectangular coil of $200$ turns, width $0.05$ m and length $0.08$ m, is positioned with its plane perpendicular to a uniform magnetic field of $0.4$ T. The coil is pulled out of the field in $0.02$ s. Find the average EMF induced. If the coil resistance is $5$ $\Omega$, find the average current and the total charge that flows.

**Solution:**

**(a) Average induced EMF:**

Initial flux linkage: $\Phi_i = NAB = 200 \times 0.05 \times 0.08 \times 0.4 = 0.32$ Wb

Final flux linkage: $\Phi_f = 0$ (coil out of the field)

$$\varepsilon = -\frac{\Delta\Phi}{\Delta t} = -\frac{0 - 0.32}{0.02} = \frac{0.32}{0.02} = 16.0 \text{ V}$$

**(b) Average current:**

$$I = \frac{\varepsilon}{R} = \frac{16.0}{5} = 3.2 \text{ A}$$

**(c) Total charge:**

$$Q = I \times t = 3.2 \times 0.02 = 0.064 \text{ C}$$

Alternatively, using the flux linkage directly:

$$Q = \frac{N\Delta\Phi}{R} = \frac{0.32}{5} = 0.064 \text{ C}$$

**Key insight:** The total charge that flows depends only on the change in flux and the resistance, NOT on the speed at which the coil is removed. A faster removal gives a larger EMF and current, but for a shorter time, so the total charge is the same.

---

### UT-2: Transformer with Load and Efficiency

**Question:**

An ideal transformer has $2000$ turns on the primary and $100$ turns on the secondary. The primary is connected to a $240$ V RMS AC supply. A $5$ $\Omega$ resistor is connected across the secondary. Find (a) the secondary voltage, (b) the primary and secondary currents, and (c) the input power. If the transformer is actually $90\%$ efficient, find (d) the actual primary current and (e) the power loss.

**Solution:**

**(a) Secondary voltage (ideal):**

$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

$$V_s = V_p \times \frac{N_s}{N_p} = 240 \times \frac{100}{2000} = 12 \text{ V RMS}$$

**(b) Currents (ideal):**

Secondary current: $I_s = \frac{V_s}{R} = \frac{12}{5} = 2.4$ A

Primary current: $\frac{I_p}{I_s} = \frac{N_s}{N_p}$

$$I_p = I_s \times \frac{N_s}{N_p} = 2.4 \times \frac{100}{2000} = 0.12 \text{ A}$$

**(c) Input power (ideal):**

$$P_{\text{in}} = V_p I_p = 240 \times 0.12 = 28.8 \text{ W}$$

(Also equals $P_{\text{out}} = V_s I_s = 12 \times 2.4 = 28.8$ W for an ideal transformer.)

**(d) Actual primary current ($90\%$ efficiency):**

$$P_{\text{out}} = 28.8 \text{ W (unchanged)}$$

$$P_{\text{in}} = \frac{P_{\text{out}}}{\eta} = \frac{28.8}{0.90} = 32.0 \text{ W}$$

$$I_p = \frac{P_{\text{in}}}{V_p} = \frac{32.0}{240} = 0.1333 \text{ A}$$

**(e) Power loss:**

$$P_{\text{loss}} = P_{\text{in}} - P_{\text{out}} = 32.0 - 28.8 = 3.2 \text{ W}$$

**Key misconception:** In a non-ideal transformer, the secondary voltage and current for a given load remain the same as in the ideal case (since the load resistance hasn't changed). The difference is that the primary must draw MORE current to compensate for the losses.

---

### UT-3: DC Motor with Back EMF

**Question:**

A DC motor is connected to a $120$ V DC supply. When the motor is running at full speed, it draws $5$ A and drives a load requiring a mechanical power output of $450$ W. The armature resistance is $2$ $\Omega$. Find (a) the back EMF, (b) the starting current (when the motor is stationary), and (c) the efficiency of the motor at full speed.

**Solution:**

**(a) Back EMF at full speed:**

$$V = E_{\text{back}} + I_a R_a$$

$$E_{\text{back}} = V - I_a R_a = 120 - 5 \times 2 = 120 - 10 = 110 \text{ V}$$

**(b) Starting current:**

When the motor is stationary, $E_{\text{back}} = 0$ (no motion means no back EMF):

$$I_{\text{start}} = \frac{V}{R_a} = \frac{120}{2} = 60 \text{ A}$$

This is $12$ times the running current, which is why DC motors use starter resistors or electronic controllers to limit the starting current.

**(c) Efficiency:**

$$\eta = \frac{P_{\text{mechanical}}}{P_{\text{electrical input}}} = \frac{450}{120 \times 5} = \frac{450}{600} = 0.75 = 75\%$$

Alternatively: $P_{\text{mechanical}} = E_{\text{back}} \times I_a = 110 \times 5 = 550$ W. But the problem states the load requires $450$ W, meaning there are additional mechanical losses (friction) of $550 - 450 = 100$ W.

Overall efficiency $= \frac{450}{600} = 75\%$.

**Key insight:** Back EMF is proportional to the motor's angular speed. At startup ($\omega = 0$), there is no back EMF, so the current is limited only by the armature resistance. As the motor speeds up, the back EMF increases, reducing the current automatically.

---

## Integration Tests

### IT-1: Falling Magnet Through a Solenoid (with Mechanics)

**Question:**

A bar magnet of mass $0.05$ kg falls from rest through a vertical solenoid of $500$ turns, length $0.3$ m, and resistance $10$ $\Omega$. The magnetic flux through the solenoid changes uniformly from $0.02$ Wb to $0$ as the magnet passes through. Calculate (a) the average EMF induced, (b) the average current in the solenoid, (c) the average retarding force on the magnet due to Lenz's law, and (d) the terminal velocity of the magnet.

**Solution:**

**(a) Average induced EMF:**

Time to fall through the solenoid: Using $s = \frac{1}{2}gt^2$ (assuming free fall for initial estimate):

$$t = \sqrt{\frac{2s}{g}} = \sqrt{\frac{0.6}{9.81}} = 0.2474 \text{ s}$$

$$\varepsilon = -N\frac{\Delta\Phi}{\Delta t} = 500 \times \frac{0.02}{0.2474} = 40.42 \text{ V}$$

**(b) Average current:**

$$I = \frac{\varepsilon}{R} = \frac{40.42}{10} = 4.042 \text{ A}$$

**(c) Average retarding force:**

By Lenz's law, the induced current creates a magnetic field that opposes the motion of the magnet.

$$F_{\text{retarding}} = BIl$$

where $B$ is the average field and $l$ is the effective length. More directly, using energy considerations:

$$F_{\text{retarding}} \times v = P_{\text{dissipated}} = \varepsilon I = \frac{\varepsilon^2}{R}$$

At terminal velocity, the retarding force equals the weight:

$$F_{\text{retarding}} = mg = 0.05 \times 9.81 = 0.4905 \text{ N}$$

**(d) Terminal velocity:**

At terminal velocity, the magnet falls at constant speed. The rate of flux change:

$$\varepsilon = N \frac{\Delta\Phi}{\Delta t} = N \times \frac{0.02}{L/v_t} = \frac{N \times 0.02 \times v_t}{L}$$

$$\varepsilon = \frac{500 \times 0.02 \times v_t}{0.3} = 33.33 v_t$$

Power dissipated $= \frac{\varepsilon^2}{R} = \frac{(33.33 v_t)^2}{10} = 111.1 v_t^2$

At terminal velocity: $\text{Power} = mg \times v_t$

$$111.1 v_t^2 = 0.4905 v_t$$

$$v_t = \frac{0.4905}{111.1} = 4.414 \times 10^{-3} \text{ m s}^{-1} = 4.41 \text{ mm s}^{-1}$$

**Key insight:** Lenz's law predicts the direction of the induced current. The falling magnet induces a current that creates an upward magnetic force, opposing the fall. This is why the magnet reaches a very low terminal velocity.

---

### IT-2: AC Generator Output Analysis (with Electrical Circuits)

**Question:**

An AC generator consists of a rectangular coil of $100$ turns, each of area $0.02$ m$^2$, rotating at $3000$ revolutions per minute in a magnetic field of $0.5$ T. The coil is connected to a $20$ $\Omega$ load. Find (a) the peak EMF, (b) the RMS voltage across the load, (c) the RMS current, (d) the average power delivered, and (e) the frequency of the output.

**Solution:**

**(a) Peak EMF:**

$$E_0 = NAB\omega$$

Angular speed: $\omega = 2\pi f = 2\pi \times \frac{3000}{60} = 100\pi \text{ rad s}^{-1}$

$$E_0 = 100 \times 0.02 \times 0.5 \times 100\pi = 100\pi = 314.2 \text{ V}$$

**(b) RMS voltage:**

$$V_{\text{RMS}} = \frac{E_0}{\sqrt{2}} = \frac{314.2}{\sqrt{2}} = 222.1 \text{ V}$$

**(c) RMS current:**

$$I_{\text{RMS}} = \frac{V_{\text{RMS}}}{R} = \frac{222.1}{20} = 11.11 \text{ A}$$

**(d) Average power:**

$$P_{\text{avg}} = V_{\text{RMS}} \times I_{\text{RMS}} = 222.1 \times 11.11 = 2468 \text{ W}$$

Or: $P_{\text{avg}} = I_{\text{RMS}}^2 R = (11.11)^2 \times 20 = 123.4 \times 20 = 2468$ W.

**(e) Frequency:**

$$f = \frac{3000}{60} = 50 \text{ Hz}$$

**Key insight:** The peak EMF occurs when the coil plane is parallel to the magnetic field (flux through coil is zero but rate of change of flux is maximum). Conversely, the EMF is zero when the coil plane is perpendicular to the field (flux is maximum but rate of change is zero).

---

### IT-3: Electromagnetic Braking System (with Mechanics and Energy)

**Question:**

A conducting bar of mass $0.2$ kg and length $0.5$ m slides without friction on two parallel conducting rails connected by a $4$ $\Omega$ resistor. A uniform magnetic field of $0.8$ T is directed perpendicular to the plane of the rails (into the page). The bar is given an initial velocity of $8 \text{ m s}^{-1}$ to the right. Find (a) the initial induced EMF, (b) the initial current and its direction, (c) the initial decelerating force, and (d) the total distance the bar travels before stopping.

**Solution:**

**(a) Initial induced EMF:**

$$\varepsilon = BLv = 0.8 \times 0.5 \times 8 = 3.2 \text{ V}$$

**(b) Initial current:**

$$I = \frac{\varepsilon}{R} = \frac{3.2}{4} = 0.8 \text{ A}$$

By Lenz's law, the current flows to oppose the change in flux. Since the bar moves right (increasing the enclosed area and thus the flux into the page), the induced current creates a field out of the page inside the loop. Using the right-hand grip rule, the current flows counterclockwise (upward through the bar).

**(c) Initial decelerating force:**

$$F = BIL = 0.8 \times 0.8 \times 0.5 = 0.32 \text{ N (to the left)}$$

**(d) Total distance before stopping:**

By energy conservation, all the initial kinetic energy is dissipated as heat in the resistor:

$$\frac{1}{2}mv_0^2 = \text{Total energy dissipated}$$

$$\frac{1}{2}(0.2)(8)^2 = 6.4 \text{ J}$$

We can also find the distance by analyzing the motion. At velocity $v$:

$$F = \frac{B^2L^2v}{R}$$

$$ma = -\frac{B^2L^2v}{R}$$

$$m\frac{dv}{dt} = -\frac{B^2L^2v}{R}$$

This gives exponential decay: $v(t) = v_0 e^{-t/\tau}$ where $\tau = \frac{mR}{B^2L^2}$.

$$\tau = \frac{0.2 \times 4}{0.64 \times 0.25} = \frac{0.8}{0.16} = 5 \text{ s}$$

$$d = \int_0^{\infty} v_0 e^{-t/\tau} dt = v_0 \tau = 8 \times 5 = 40 \text{ m}$$

**Key insight:** The bar undergoes exponential deceleration (similar to RC decay). The "time constant" is $\tau = mR / B^2L^2$. In principle the bar never fully stops, but practically it stops within a few time constants.
