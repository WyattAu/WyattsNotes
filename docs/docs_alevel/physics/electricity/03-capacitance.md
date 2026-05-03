---
title: Capacitance
description:
  "A-Level Physics notes on Capacitance: 2. Parallel Plate Capacitor; Derivation of $C = \varepsilon_0 A/d$; 3. Energy Stored in a Capacitor."
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: capacitance
---

## Capacitance

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

<PhetSimulation simulationId="capacitor-lab-basics" title="Capacitor Lab: Basics" />

Explore the simulation above to develop intuition for this topic.

## 1. Capacitance

**Definition.** The **capacitance** $C$ of a conductor is the charge stored per unit potential
difference:

$$\boxed{C = \frac{Q}{V}}$$

SI unit: farad (F), where 1 F = 1 C V$^{-1}$.

In practice, capacitances range from picofarads (pF) to millifarads (mF).

**Intuition.** A capacitor is a device that stores charge. When a p.d. is applied across two
parallel conducting plates, one plate gains $+Q$ and the other gains $-Q$. The larger the plates and
the closer they are, the more charge can be stored for a given p.d. — hence the larger the
capacitance.

## 2. Parallel Plate Capacitor

### Derivation of $C = \varepsilon_0 A/d$

Consider two parallel plates of area $A$ separated by distance $d$, with a vacuum between them. A
charge $+Q$ is placed on one plate and $-Q$ on the other.

The electric field between the plates is uniform:

$$E = \frac{Q}{\varepsilon_0 A}$$

(This comes from Gauss's law:
$\oint \mathbf{E} \cdot d\mathbf{A} = Q_{\mathrm{enclosed}}/\varepsilon_0$, applied to a Gaussian
surface enclosing one plate.)

The p.d. between the plates is:

$$V = Ed = \frac{Qd}{\varepsilon_0 A}$$

Therefore:

$$\boxed{C = \frac{Q}{V} = \frac{\varepsilon_0 A}{d}}$$

With a dielectric material of relative permittivity $\varepsilon_r$ between the plates:

$$\boxed{C = \frac{\varepsilon_0 \varepsilon_r A}{d}}$$

**Intuition.** Larger plate area allows more charge to be stored. Smaller separation increases the
electric field (and hence the p.d.) for a given charge, but since $C = Q/V$ and $V$ increases more
slowly than $Q$ with decreasing $d$, the net effect is that $C$ increases. A dielectric material
polarises in the field, partially cancelling it and allowing more charge to be stored.

## 3. Energy Stored in a Capacitor

### Derivation of $E = \frac{1}{2}CV^2$ from $dE = V\,dQ$

As charge builds up on the capacitor, the p.d. increases. The work done to transfer a small charge
$dQ$ at p.d. $V$ is:

$$dE = V\,dQ$$

Since $V = Q/C$:

$$E = \int_0^Q V\,dQ = \int_0^Q \frac{Q}{C}\,dQ = \frac{1}{C}\left[\frac{Q^2}{2}\right]_0^Q = \frac{Q^2}{2C}$$

Using $Q = CV$:

$$E = \frac{Q^2}{2C} = \frac{(CV)^2}{2C} = \boxed{\frac{1}{2}CV^2}$$

Alternative forms using $Q = CV$ and $V = Q/C$:

$$E = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$$

**Graphical interpretation.** The energy stored equals the area under the $V$-$Q$ graph (a straight
line through the origin). This area is a triangle of base $Q$ and height $V$: $E = \frac{1}{2}QV$.

### Energy Density

For a parallel plate capacitor, the energy per unit volume between the plates:

$$u = \frac{E}{\mathrm{volume}} = \frac{\frac{1}{2}CV^2}{Ad} = \frac{\frac{1}{2}\frac{\varepsilon_0 A}{d} \cdot V^2}{Ad} = \frac{\varepsilon_0 V^2}{2d^2} = \frac{1}{2}\varepsilon_0 E_{\mathrm{field}}^2$$

## 4. Capacitors in Series and Parallel

### Parallel Combination

$$C_{\mathrm{total}} = C_1 + C_2 + \cdots + C_n$$

**Proof.** All capacitors have the same p.d. $V$. Total charge:
$Q = Q_1 + Q_2 + \cdots = C_1 V + C_2 V + \cdots = (C_1 + C_2 + \cdots)V$. Since
$Q = C_{\mathrm{total}} V$: $C_{\mathrm{total}} = C_1 + C_2 + \cdots$ $\square$

### Series Combination

$$\frac{1}{C_{\mathrm{total}}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots + \frac{1}{C_n}$$

**Proof.** All capacitors store the same charge $Q$. Total p.d.:
$V = V_1 + V_2 + \cdots = Q/C_1 + Q/C_2 + \cdots = Q(1/C_1 + 1/C_2 + \cdots)$. Since
$V = Q/C_{\mathrm{total}}$: $1/C_{\mathrm{total}} = 1/C_1 + 1/C_2 + \cdots$ $\square$

:::warning Common Pitfall Note the "mirror" relationship with resistors: capacitors in parallel add
(like resistors in series), and capacitors in series add reciprocally (like resistors in parallel).
:::

## 5. RC Circuits: Charging

Consider a capacitor $C$ charged through a resistor $R$ from a supply of e.m.f. $\mathcal{E}$.

### Derivation of $Q = Q_0(1 - e^{-t/RC})$

By Kirchhoff's second law at any instant:

$$\mathcal{E} = V_R + V_C = IR + \frac{Q}{C}$$

Since $I = dQ/dt$:

$$\mathcal{E} = R\frac{dQ}{dt} + \frac{Q}{C}$$

Rearranging:

$$\frac{dQ}{dt} = \frac{\mathcal{E}}{R} - \frac{Q}{RC}$$

Let $Q_0 = C\mathcal{E}$ (the maximum charge when fully charged):

$$\frac{dQ}{dt} = \frac{Q_0 - Q}{RC}$$

Separating variables and integrating:

$$\int_0^Q \frac{dQ}{Q_0 - Q} = \int_0^t \frac{dt}{RC}$$

$$\left[-\ln(Q_0 - Q)\right]_0^Q = \frac{t}{RC}$$

$$-\ln(Q_0 - Q) + \ln Q_0 = \frac{t}{RC}$$

$$\ln\left(\frac{Q_0}{Q_0 - Q}\right) = \frac{t}{RC}$$

$$\frac{Q_0}{Q_0 - Q} = e^{t/RC}$$

$$\boxed{Q = Q_0\left(1 - e^{-t/RC}\right)}$$

The current is:

$$I = \frac{dQ}{dt} = \frac{Q_0}{RC}e^{-t/RC} = \frac{\mathcal{E}}{R}e^{-t/RC} = I_0 e^{-t/RC}$$

The p.d. across the capacitor is:

$$V_C = \frac{Q}{C} = \mathcal{E}\left(1 - e^{-t/RC}\right)$$

## 6. RC Circuits: Discharging

When a charged capacitor discharges through a resistor:

$$\mathcal{E} = 0 \implies 0 = IR + \frac{Q}{C}$$

$$R\frac{dQ}{dt} = -\frac{Q}{C}$$

$$\frac{dQ}{dt} = -\frac{Q}{RC}$$

Separating and integrating:

$$\int_{Q_0}^Q \frac{dQ}{Q} = -\int_0^t \frac{dt}{RC}$$

$$\ln Q - \ln Q_0 = -\frac{t}{RC}$$

$$\boxed{Q = Q_0 e^{-t/RC}}$$

$$I = \frac{dQ}{dt} = -\frac{Q_0}{RC}e^{-t/RC} = -I_0 e^{-t/RC}$$

$$V_C = \frac{Q}{C} = V_0 e^{-t/RC}$$

## 7. The Time Constant

**Definition.** The **time constant** $\tau = RC$ has units of seconds and characterises the rate of
charging/discharging.

### Proof that 63.2% of charge is stored in one time constant

At $t = \tau = RC$:

$$\frac{Q}{Q_0} = 1 - e^{-1} = 1 - \frac{1}{e} = 1 - 0.368 = 0.632$$

So **63.2%** of the maximum charge is stored.

For discharging: $\frac{Q}{Q_0} = e^{-1} = 0.368$, so **36.8%** remains (63.2% is lost).

**Other useful values:**

| Time    | Charged | Discharged remaining |
| ------- | ------- | -------------------- |
| $1\tau$ | 63.2%   | 36.8%                |
| $2\tau$ | 86.5%   | 13.5%                |
| $3\tau$ | 95.0%   | 5.0%                 |
| $5\tau$ | 99.3%   | 0.7%                 |

**Intuition.** The time constant is the "characteristic time" of the circuit. A large resistance
limits the charging current, and a large capacitance requires more charge — both increase the time
needed. After $5\tau$, the capacitor is effectively fully charged or discharged.

:::tip Exam Technique When asked to find the time constant from a graph: for charging, find the time
at which the curve reaches 63.2% of its final value. For discharging, find the time at which the
curve drops to 36.8% of its initial value. Alternatively, find the time at which the tangent at
$t = 0$ intersects the final value line.
:::

## 8. Dielectrics in Detail

### Polarisation Mechanism

A **dielectric** is an insulating material placed between the plates of a capacitor. When an
external electric field $E_0$ is applied (by charging the plates), the molecules within the
dielectric respond in one of two ways depending on the material:

1. **Polar dielectrics** (e.g. water, HCl): Molecules possess a permanent electric dipole moment. In
   the absence of a field, these dipoles are randomly oriented. When $E_0$ is applied, the dipoles
   tend to align with the field. Thermal agitation prevents perfect alignment, but a net
   polarisation emerges.

2. **Non-polar dielectrics** (e.g. polystyrene, glass): Molecules have no permanent dipole moment.
   The applied field distorts the electron cloud relative to the nucleus, **inducing** a dipole
   moment proportional to the applied field.

In both cases, the net effect is the same: the dielectric material becomes **polarised** — the
positive and negative charges within the molecules shift slightly in opposite directions along the
field lines.

### Bound Surface Charges and Field Reduction

Consider a dielectric slab inserted between the plates of a parallel plate capacitor charged to
$\pm Q$.

The polarisation creates a layer of **bound charge** on the surfaces of the dielectric adjacent to
the plates:

- The surface of the dielectric facing the $+Q$ plate acquires a **negative** bound charge density
  $-\sigma_b$.
- The surface facing the $-Q$ plate acquires a **positive** bound charge density $+\sigma_b$.

These bound charges produce their own electric field $E_b$ that **opposes** the applied field $E_0$:

$$E_b = \frac{\sigma_b}{\varepsilon_0}$$

The net field inside the dielectric is therefore:

$$E_{\mathrm{eff}} = E_0 - E_b = E_0 - \frac{\sigma_b}{\varepsilon_0}$$

### Derivation of $E_{\mathrm{eff}} = E_0/\varepsilon_r$

The **polarisation** $\mathbf{P}$ of the dielectric is defined as the dipole moment per unit volume.
For a linear, isotropic dielectric, the polarisation is proportional to the effective field:

$$P = \chi_e \varepsilon_0 E_{\mathrm{eff}}$$

where $\chi_e$ is the **electric susceptibility** of the material.

The bound surface charge density is related to the polarisation by $\sigma_b = P$, so:

$$E_{\mathrm{eff}} = E_0 - \frac{P}{\varepsilon_0} = E_0 - \chi_e E_{\mathrm{eff}}$$

Rearranging:

$$E_{\mathrm{eff}}(1 + \chi_e) = E_0$$

$$\boxed{E_{\mathrm{eff}} = \frac{E_0}{1 + \chi_e}}$$

The **relative permittivity** (dielectric constant) is defined as:

$$\varepsilon_r = 1 + \chi_e$$

Therefore:

$$\boxed{E_{\mathrm{eff}} = \frac{E_0}{\varepsilon_r}}$$

This is the key result: the dielectric reduces the internal electric field by a factor of
$\varepsilon_r$.

### Capacitance Increase: $C = \varepsilon_r C_0$

The p.d. between the plates with a dielectric inserted is:

$$V = E_{\mathrm{eff}} \cdot d = \frac{E_0}{\varepsilon_r} \cdot d = \frac{V_0}{\varepsilon_r}$$

Since the charge $Q$ on the plates is unchanged (assuming the capacitor was isolated before
insertion), the new capacitance is:

$$C = \frac{Q}{V} = \frac{Q}{V_0/\varepsilon_r} = \varepsilon_r \frac{Q}{V_0} = \boxed{\varepsilon_r C_0}$$

The capacitance increases by a factor of $\varepsilon_r$. Physically, the reduced internal field
means a smaller p.d. for the same charge — the capacitor can store more charge for the same p.d.

### Absolute vs Relative Permittivity

The **absolute permittivity** $\varepsilon$ of a material is:

$$\varepsilon = \varepsilon_0 \varepsilon_r$$

where $\varepsilon_0 = 8.854 \times 10^{-12}$ F m$^{-1}$ is the permittivity of free space (vacuum).

For a parallel plate capacitor with a dielectric:

$$C = \frac{\varepsilon A}{d} = \frac{\varepsilon_0 \varepsilon_r A}{d}$$

### Dielectric Strength

The **dielectric strength** is the maximum electric field a material can withstand before electrical
breakdown occurs (the dielectric becomes conducting). When $E$ exceeds this threshold, electrons are
ripped from their atoms and a conducting path forms — this is what happens in a lightning strike,
for instance.

The maximum p.d. a capacitor can tolerate is:

$$V_{\mathrm{max}} = E_{\mathrm{breakdown}} \cdot d$$

### Common Dielectrics

| Material        | $\varepsilon_r$ | Dielectric Strength (kV/mm) |
| --------------- | --------------- | --------------------------- |
| Vacuum          | 1.00            | $\infty$                    |
| Air (1 atm)     | 1.0006          | 3.0                         |
| Paper (dry)     | 2.0 -- 4.0      | 16                          |
| Polyethylene    | 2.25            | 20                          |
| Polystyrene     | 2.56            | 20                          |
| Glass           | 5 -- 10         | 10 -- 40                    |
| Mica            | 5.4 -- 8.0      | 160                         |
| Water (pure)    | 80              | $\approx 0.065$             |
| Barium titanate | 1200 -- 10000   | 3                           |

:::warning Common Pitfall A high $\varepsilon_r$ does not imply high dielectric strength. Water has
an enormous $\varepsilon_r = 80$ but a very low breakdown voltage ($\approx 65$ V/mm), so water is a
poor practical dielectric for high-voltage capacitors despite its high permittivity.
:::

### Effect of Dielectric on Energy Stored

Two distinct cases must be considered:

**Case 1: Capacitor isolated (charge $Q$ fixed).** The dielectric is inserted after the capacitor
has been charged and disconnected from the supply. Since $Q$ is constant and $C$ increases by
$\varepsilon_r$, the energy **decreases**:

$$E_{\mathrm{new}} = \frac{Q^2}{2C_{\mathrm{new}}} = \frac{Q^2}{2\varepsilon_r C_0} = \frac{E_0}{\varepsilon_r}$$

The "missing" energy is extracted by the work done pulling the dielectric into the field (the
polarised dielectric is attracted into the gap).

**Case 2: Capacitor connected to supply (p.d. $V$ fixed).** The dielectric is inserted while the
capacitor remains connected to the battery. Since $V$ is constant and $C$ increases by
$\varepsilon_r$, the energy **increases**:

$$E_{\mathrm{new}} = \frac{1}{2}C_{\mathrm{new}}V^2 = \frac{1}{2}\varepsilon_r C_0 V^2 = \varepsilon_r E_0$$

The additional energy comes from the battery, which supplies extra charge
$Q' = (\varepsilon_r - 1)CV$ to the plates.

:::tip Exam Technique When a question asks about inserting a dielectric, always check whether the
capacitor is isolated or connected to a supply. This completely determines whether $Q$ or $V$ is
held constant, and therefore whether energy increases or decreases.
:::

## 9. Charge Sharing Between Capacitors

### Setup

Consider a capacitor $C_1$ charged to p.d. $V_1$, carrying charge $Q_1 = C_1 V_1$. It is then
connected (via ideal conducting wires) to an initially uncharged capacitor $C_2$. Charge
redistributes between them until both capacitors reach the same potential difference.

### Conservation of Charge

Charge is conserved: the total charge before and after connection must be equal:

$$Q_1 = Q_1' + Q_2'$$

where primes denote the final state. The battery (if any) is disconnected, so no charge enters or
leaves the system.

### Common Potential Difference

After connection, both capacitors are in parallel (they share the same two nodes), so they reach the
same p.d. $V'$:

$$Q_1' = C_1 V', \quad Q_2' = C_2 V'$$

Substituting into the charge conservation equation:

$$C_1 V_1 = C_1 V' + C_2 V' = (C_1 + C_2)V'$$

Solving for $V'$:

$$\boxed{V' = \frac{C_1 V_1}{C_1 + C_2}}$$

### Final Charges

$$Q_1' = C_1 V' = \frac{C_1^2 V_1}{C_1 + C_2}, \quad Q_2' = C_2 V' = \frac{C_1 C_2 V_1}{C_1 + C_2}$$

### Energy is NOT Conserved

Initial energy stored:

$$E_i = \frac{1}{2}C_1 V_1^2$$

Final energy stored:

$$E_f = \frac{1}{2}C_1 V'^2 + \frac{1}{2}C_2 V'^2 = \frac{1}{2}(C_1 + C_2)\left(\frac{C_1 V_1}{C_1 + C_2}\right)^2 = \frac{1}{2}\frac{C_1^2 V_1^2}{C_1 + C_2}$$

The energy lost:

$$\Delta E = E_i - E_f = \frac{1}{2}C_1 V_1^2 - \frac{1}{2}\frac{C_1^2 V_1^2}{C_1 + C_2} = \frac{1}{2}C_1 V_1^2\left(1 - \frac{C_1}{C_1 + C_2}\right)$$

$$\boxed{\Delta E = \frac{1}{2}\frac{C_1 C_2}{C_1 + C_2}V_1^2}$$

**Where does the energy go?** The energy loss is real and irrecoverable. During the charge
redistribution, a transient current flows through the connecting wires. The resistance of the wires
(however small) dissipates the energy as heat. Additionally, the changing currents produce
electromagnetic radiation. The "missing" energy is accounted for by Joule heating and radiative
losses.

:::warning Common Pitfall Energy is NOT conserved in charge-sharing problems. Charge is conserved,
but the system loses energy to the surroundings. Never assume $E_i = E_f$ when solving
charge-sharing problems.
:::

### Worked Example

A $10\,\mu$F capacitor is charged to $100$ V and then connected to an uncharged $30\,\mu$F
capacitor. Find the final p.d., the final charge on each capacitor, and the energy lost.

**Step 1: Initial charge.** $Q_1 = C_1 V_1 = 10 \times 10^{-6} \times 100 = 1.0 \times 10^{-3}$ C.

**Step 2: Final p.d.**
$V' = \frac{C_1 V_1}{C_1 + C_2} = \frac{10 \times 100}{10 + 30} = \frac{1000}{40} = 25$ V.

**Step 3: Final charges.** $Q_1' = 10 \times 10^{-6} \times 25 = 250\,\mu$C.
$Q_2' = 30 \times 10^{-6} \times 25 = 750\,\mu$C. Check: $250 + 750 = 1000\,\mu$C $= Q_1$.

**Step 4: Energy.** $E_i = \frac{1}{2} \times 10 \times 10^{-6} \times 10000 = 0.050$ J.
$E_f = \frac{1}{2} \times 10 \times 10^{-6} \times 625 + \frac{1}{2} \times 30 \times 10^{-6} \times 625 = 3.125 \times 10^{-3} + 9.375 \times 10^{-3} = 12.5 \times 10^{-3}$
J. $\Delta E = 50.0 - 12.5 = 37.5$ mJ.

Using the formula:
$\Delta E = \frac{1}{2}\frac{10 \times 30}{10 + 30} \times 10000 \times 10^{-6} = \frac{1}{2} \times 7.5 \times 10^{-6} \times 10000 = 37.5 \times 10^{-3}$
J $= 37.5$ mJ.

## 10. RC Circuit Applications

### Integrator Circuit

Consider a series $RC$ circuit where the output is taken across the capacitor:

$$V_{\mathrm{in}} = V_R + V_C = IR + \frac{Q}{C}$$

If $RC \gg T$ (the time constant is much larger than the period of the input signal), then
$V_R \gg V_C$ at all times during one cycle, so $V_{\mathrm{in}} \approx V_R = IR$. Since
$I = dQ/dt$:

$$V_{\mathrm{in}} \approx RC\frac{dV_C}{dt}$$

Therefore:

$$V_{\mathrm{out}} = V_C \approx \frac{1}{RC}\int_0^t V_{\mathrm{in}}\,dt$$

The output is approximately the integral of the input. For a square wave input, the output
approximates a triangular wave.

### Differentiator Circuit

Consider a series $RC$ circuit where the output is taken across the resistor:

$$V_{\mathrm{in}} = \frac{Q}{C} + IR$$

If $RC \ll T$ (the time constant is much smaller than the period), then $V_C \gg V_R$, so
$V_{\mathrm{in}} \approx V_C = Q/C$. The current is:

$$I = \frac{dQ}{dt} = C\frac{dV_C}{dt} \approx C\frac{dV_{\mathrm{in}}}{dt}$$

Therefore:

$$V_{\mathrm{out}} = V_R = IR \approx RC\frac{dV_{\mathrm{in}}}{dt}$$

The output is approximately the derivative of the input. For a square wave input, the output
produces sharp spikes at the transitions.

### Timing Circuits

The exponential charging/discharging behaviour of RC circuits provides a natural timing mechanism. A
common application is the **555 timer IC**, which uses an RC network to define the timing period.
The 555 timer charges an external capacitor through a resistor; when the voltage across the
capacitor reaches $2/3$ of the supply voltage, the output switches. The timing period is:

$$T \approx 0.693 \cdot RC$$

This principle is used in:

- **Monostable circuits**: a single pulse of fixed duration is produced in response to a trigger
  input.
- **Astable circuits**: a continuous square wave output with a frequency determined by $R$ and $C$.

### Smoothing Circuits

In AC-to-DC power supplies, a rectifier converts AC to pulsating DC. A capacitor placed in parallel
with the load acts as a **smoothing filter**:

- During the peak of the rectified waveform, the capacitor charges to the peak voltage.
- Between peaks, the capacitor discharges through the load resistor $R_L$, maintaining the output
  voltage.

The **ripple voltage** is approximately:

$$\Delta V \approx \frac{I_{\mathrm{load}}}{fC}$$

where $I_{\mathrm{load}}$ is the load current and $f$ is the frequency of the rectified AC. A larger
$C$ produces smaller ripple, hence smoother DC output.

### Flash Photography

A camera flash uses a capacitor to store energy and release it rapidly through a xenon gas tube:

1. A battery slowly charges a capacitor ($C \approx 100$ -- $1000\,\mu$F) to a high voltage
   ($V \approx 300$ V) through a step-up converter circuit.
2. When the shutter is triggered, the capacitor discharges through the flash tube in a time of order
   $\tau = RC$, where $R$ is the resistance of the ionised gas (very small, typically $\lt{}$ 1
   $\Omega$).
3. The rapid discharge ($\tau \approx 1$ ms) delivers a large pulse of power:
   $P = E/\tau \approx \frac{1}{2}CV^2 / \tau$.

**Example.** A $330\,\mu$F capacitor charged to $300$ V stores
$E = \frac{1}{2} \times 330 \times 10^{-6} \times 90000 = 14.85$ J. If discharged in $1$ ms, the
average power is $14.85$ kW.

## 11. Measuring Capacitance Experimentally

### Method 1: RC Discharge Curve

This is the most common method at A-level.

**Procedure.**

1. Charge the capacitor to a known p.d. $V_0$.
2. Disconnect the supply and immediately start recording the p.d. $V$ across the capacitor at
   regular time intervals as it discharges through a known resistor $R$.
3. Plot $\ln(V)$ against $t$.

**Derivation of the method.** From the discharge equation:

$$V = V_0 e^{-t/RC}$$

Taking natural logarithms:

$$\ln V = \ln V_0 - \frac{t}{RC}$$

This is a straight line of the form $y = mx + c$ where:

- Gradient $m = -1/(RC)$
- y-intercept $c = \ln V_0$

From the gradient, since $R$ is known:

$$C = -\frac{1}{mR}$$

**Uncertainty analysis.** The uncertainty in $C$ depends on:

- Uncertainty in the resistor $R$ (typically $\pm 1$% for a standard resistor).
- Uncertainty in the gradient of the $\ln(V)$ vs $t$ graph (from the line of best fit).
- Systematic errors: the voltmeter has its own resistance $R_V$ in parallel with the capacitor. If
  $R_V$ is not much larger than $R$, the effective discharge resistance is
  $R_{\mathrm{eff}} = \frac{R \cdot R_V}{R + R_V}$, leading to a systematic underestimate of $C$.

:::tip Exam Technique When asked to determine $C$ from a discharge curve, always take the natural
log of the voltage values and plot $\ln(V)$ vs $t$. Do NOT attempt to fit an exponential curve
directly. The gradient gives you $-1/(RC)$, and since $R$ is known, you extract $C$. Show the
log-linear transformation explicitly.
:::

### Method 2: Repeating Capacitor (Ballistic Galvanometer)

A **ballistic galvanometer** measures total charge passing through it. If a capacitor $C$ is charged
to p.d. $V$ and then fully discharged through the galvanometer, the total charge $Q = CV$ flows, and
the galvanometer deflection $\theta$ is proportional to $Q$:

$$\theta = kQ = kCV$$

where $k$ is the galvanometer constant. By measuring $\theta$ for a known $V$, $C$ can be determined
if $k$ is calibrated using a standard capacitor.

### Method 3: Capacitance Bridge

A **capacitance bridge** (analogous to a Wheatstone bridge for resistors) compares an unknown
capacitance $C_x$ with a known standard $C_s$. At balance:

$$\frac{C_x}{C_s} = \frac{R_3}{R_4}$$

where $R_3$ and $R_4$ are known resistances. This method is capable of high precision but is less
common at A-level.

## Problem Set

<details>
<summary>Problem 1</summary>
A 100 $\mu$F capacitor is charged to 12 V. Calculate the stored energy.

**Answer.**
$E = \frac{1}{2}CV^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 144 = 7.2 \times 10^{-3}$ J
$= 7.2$ mJ.

<b>If you get this wrong, revise:</b>
[Energy Stored in a Capacitor](#3-energy-stored-in-a-capacitor)

</details>

<details>
<summary>Problem 2</summary>
A parallel plate capacitor has plates of area $0.020$ m$^2$ separated by $0.50$ mm in vacuum. Calculate its capacitance.

**Answer.**
$C = \frac{\varepsilon_0 A}{d} = \frac{8.85 \times 10^{-12} \times 0.020}{0.50 \times 10^{-3}} = \frac{1.77 \times 10^{-13}}{5.0 \times 10^{-4}} = 3.54 \times 10^{-10}$
F $= 354$ pF.

<b>If you get this wrong, revise:</b> [Parallel Plate Capacitor](#2-parallel-plate-capacitor)

</details>

<details>
<summary>Problem 3</summary>
A $470\,\mu$F capacitor is charged through a $100\,\mathrm{k}\Omega$ resistor from a 6.0 V supply. Calculate: (a) the time constant, (b) the charge after 20 s, (c) the current after 20 s.

**Answer.** (a) $\tau = RC = 100 \times 10^3 \times 470 \times 10^{-6} = 47.0$ s.

(b) $Q_0 = CV = 470 \times 10^{-6} \times 6.0 = 2.82 \times 10^{-3}$ C.
$Q = Q_0(1 - e^{-t/\tau}) = 2.82 \times 10^{-3}(1 - e^{-20/47}) = 2.82 \times 10^{-3}(1 - 0.654) = 2.82 \times 10^{-3} \times 0.346 = 9.76 \times 10^{-4}$
C.

(c)
$I = I_0 e^{-t/\tau} = \frac{6.0}{100 \times 10^3} e^{-20/47} = 6.0 \times 10^{-5} \times 0.654 = 3.92 \times 10^{-5}$
A $= 39.2\,\mu$A.

<b>If you get this wrong, revise:</b> [RC Circuits: Charging](#5-rc-circuits-charging)

</details>

<details>
<summary>Problem 4</summary>
A $220\,\mu$F capacitor charged to 10 V discharges through a $50\,\mathrm{k}\Omega$ resistor. Calculate: (a) the time constant, (b) the p.d. across the capacitor after 15 s, (c) the time for the p.d. to fall to 3.0 V.

**Answer.** (a) $\tau = 50 \times 10^3 \times 220 \times 10^{-6} = 11.0$ s.

(b) $V = V_0 e^{-t/\tau} = 10 \times e^{-15/11} = 10 \times e^{-1.364} = 10 \times 0.256 = 2.56$ V.

(c) $3.0 = 10 e^{-t/11}$. $e^{-t/11} = 0.3$. $-t/11 = \ln 0.3 = -1.204$.
$t = 11 \times 1.204 = 13.2$ s.

<b>If you get this wrong, revise:</b> [RC Circuits: Discharging](#6-rc-circuits-discharging)

</details>

<details>
<summary>Problem 5</summary>
Two capacitors, $C_1 = 10\,\mu$F and $C_2 = 20\,\mu$F, are connected (a) in parallel and (b) in series. Calculate the equivalent capacitance in each case.

**Answer.** (a) $C_{\mathrm{parallel}} = 10 + 20 = 30\,\mu$F.

(b) $\frac{1}{C_{\mathrm{series}}} = \frac{1}{10} + \frac{1}{20} = \frac{3}{20}$.
$C_{\mathrm{series}} = 6.67\,\mu$F.

<b>If you get this wrong, revise:</b>
[Capacitors in Series and Parallel](#4-capacitors-in-series-and-parallel)

</details>

<details>
<summary>Problem 6</summary>
A capacitor is charged to 50 V and then discharged through a $200\,\mathrm{k}\Omega$ resistor. After 30 s, the p.d. is 18 V. Calculate the capacitance.

**Answer.** $V = V_0 e^{-t/RC}$. $18 = 50 e^{-30/(200000 \times C)}$. $0.36 = e^{-30/(200000C)}$.
$\ln 0.36 = -30/(200000C)$. $-1.022 = -30/(200000C)$.
$C = 30/(200000 \times 1.022) = 1.47 \times 10^{-4}$ F $= 147\,\mu$F.

<b>If you get this wrong, revise:</b> [RC Circuits: Discharging](#6-rc-circuits-discharging)

</details>

<details>
<summary>Problem 7</summary>
Prove that the energy stored in a capacitor is $E = \frac{1}{2}QV$ by considering the area under the $V$-$Q$ graph.

**Answer.** The $V$-$Q$ graph for a capacitor is a straight line through the origin: $V = Q/C$. The
energy stored equals the work done in charging, which is the area under this graph from $Q = 0$ to
$Q = Q_0$. This area is a triangle with base $Q_0$ and height $V_0 = Q_0/C$:

$E = \frac{1}{2} \times Q_0 \times V_0 = \frac{1}{2}QV$.

<b>If you get this wrong, revise:</b>
[Energy Stored in a Capacitor](#3-energy-stored-in-a-capacitor)

</details>

<details>
<summary>Problem 8</summary>
A parallel plate capacitor with plate area $0.010$ m$^2$ and separation $0.20$ mm is filled with a dielectric of $\varepsilon_r = 5.0$. Calculate the capacitance and the energy stored when charged to 200 V.

**Answer.**
$C = \frac{\varepsilon_0 \varepsilon_r A}{d} = \frac{8.85 \times 10^{-12} \times 5.0 \times 0.010}{0.20 \times 10^{-3}} = \frac{4.425 \times 10^{-13}}{2.0 \times 10^{-4}} = 2.21 \times 10^{-9}$
F $= 2.21$ nF.

$E = \frac{1}{2}CV^2 = \frac{1}{2} \times 2.21 \times 10^{-9} \times 40000 = 4.42 \times 10^{-5}$ J
$= 44.2\,\mu$J.

<b>If you get this wrong, revise:</b> [Parallel Plate Capacitor](#2-parallel-plate-capacitor)

</details>

<details>
<summary>Problem 9</summary>
An uncharged $100\,\mu$F capacitor in series with a $500\,\mathrm{k}\Omega$ resistor is connected to a 20 V supply. How long does it take for the capacitor to charge to 15 V?

**Answer.** $15 = 20(1 - e^{-t/\tau})$. $0.75 = 1 - e^{-t/\tau}$. $e^{-t/\tau} = 0.25$.
$-t/\tau = \ln 0.25 = -1.386$. $\tau = RC = 500 \times 10^3 \times 100 \times 10^{-6} = 50$ s.
$t = 1.386 \times 50 = 69.3$ s.

<b>If you get this wrong, revise:</b> [RC Circuits: Charging](#5-rc-circuits-charging)

</details>

<details>
<summary>Problem 10</summary>
A $47\,\mu$F capacitor charged to 24 V discharges through a $33\,\mathrm{k}\Omega$ resistor. Calculate: (a) the initial energy stored, (b) the time constant, (c) the energy remaining after one time constant.

**Answer.** (a)
$E_0 = \frac{1}{2}CV^2 = \frac{1}{2} \times 47 \times 10^{-6} \times 576 = 1.354 \times 10^{-2}$ J
$= 13.5$ mJ.

(b) $\tau = 33 \times 10^3 \times 47 \times 10^{-6} = 1.551$ s.

(c) After $t = \tau$: $V = 24e^{-1} = 8.83$ V.
$E = \frac{1}{2} \times 47 \times 10^{-6} \times 77.9 = 1.83 \times 10^{-3}$ J $= 1.83$ mJ.

Alternatively:
$E = \frac{1}{2}CV^2 = \frac{1}{2}C(V_0 e^{-1})^2 = E_0 e^{-2} = 13.5 \times 0.135 = 1.83$ mJ.

<b>If you get this wrong, revise:</b> [The Time Constant](#7-the-time-constant)

</details>

<details>
<summary>Problem 11</summary>
A parallel plate capacitor has plate area $0.050$ m$^2$ and separation $1.0$ mm, with vacuum between the plates. It is charged to $500$ V and then isolated. A dielectric with $\varepsilon_r = 4.0$ is inserted, filling the gap. Calculate: (a) the capacitance before and after insertion, (b) the charge on the plates, (c) the p.d. after insertion, (d) the energy stored before and after insertion, (e) the energy change and where it went.

**Answer.** (a) Before:
$C_0 = \frac{8.85 \times 10^{-12} \times 0.050}{1.0 \times 10^{-3}} = 4.43 \times 10^{-10}$ F
$= 443$ pF. After: $C = \varepsilon_r C_0 = 4.0 \times 443 = 1772$ pF $= 1.77$ nF.

(b) The capacitor is isolated, so $Q$ is constant:
$Q = C_0 V_0 = 4.43 \times 10^{-10} \times 500 = 2.21 \times 10^{-7}$ C $= 221$ nC.

(c) $V = Q/C = 2.21 \times 10^{-7} / (1.77 \times 10^{-9}) = 125$ V.

(d) Before:
$E_i = \frac{1}{2}C_0 V_0^2 = \frac{1}{2} \times 4.43 \times 10^{-10} \times 250000 = 5.54 \times 10^{-5}$
J. After:
$E_f = \frac{1}{2}CV^2 = \frac{1}{2} \times 1.77 \times 10^{-9} \times 15625 = 1.38 \times 10^{-5}$
J.

(e) $\Delta E = 5.54 \times 10^{-5} - 1.38 \times 10^{-5} = 4.16 \times 10^{-5}$ J lost. This energy
is extracted as work done on the dielectric by the electric field as it pulls the dielectric into
the gap (fringe-field forces attract the polarised dielectric into the capacitor).

<b>If you get this wrong, revise:</b> [Dielectrics in Detail](#8-dielectrics-in-detail)

</details>

<details>
<summary>Problem 12</summary>
A $20\,\mu$F capacitor is charged to $60$ V. It is then connected to an uncharged $80\,\mu$F capacitor. Calculate: (a) the final common p.d., (b) the final charge on each capacitor, (c) the initial and final total energy, (d) the energy lost.

**Answer.** (a)
$V' = \frac{C_1 V_1}{C_1 + C_2} = \frac{20 \times 60}{20 + 80} = \frac{1200}{100} = 12$ V.

(b) $Q_1' = 20 \times 10^{-6} \times 12 = 240\,\mu$C.
$Q_2' = 80 \times 10^{-6} \times 12 = 960\,\mu$C. Verification: $240 + 960 = 1200\,\mu$C
$= C_1 V_1 = 20 \times 60\,\mu$C.

(c) $E_i = \frac{1}{2} \times 20 \times 10^{-6} \times 3600 = 0.0360$ J $= 36.0$ mJ.
$E_f = \frac{1}{2} \times 20 \times 10^{-6} \times 144 + \frac{1}{2} \times 80 \times 10^{-6} \times 144 = 1.44 \times 10^{-3} + 5.76 \times 10^{-3} = 7.20 \times 10^{-3}$
J $= 7.20$ mJ.

(d) $\Delta E = 36.0 - 7.20 = 28.8$ mJ. Using the formula:
$\Delta E = \frac{1}{2}\frac{C_1 C_2}{C_1 + C_2}V_1^2 = \frac{1}{2}\frac{20 \times 80}{100} \times 10^{-6} \times 3600 = \frac{1}{2} \times 16 \times 10^{-6} \times 3600 = 28.8 \times 10^{-3}$
J. Energy dissipated as heat in the connecting wires and radiated as EM waves.

<b>If you get this wrong, revise:</b>
[Charge Sharing Between Capacitors](#9-charge-sharing-between-capacitors)

</details>

<details>
<summary>Problem 13</summary>
A $100\,\mu$F capacitor with air ($\varepsilon_r = 1.0$) between the plates is in series with a $10\,\mathrm{k}\Omega$ resistor and connected to a $12$ V supply. The capacitor charges fully. While still connected to the supply, a dielectric with $\varepsilon_r = 3.0$ is inserted between the plates. Calculate: (a) the time constant before and after insertion, (b) the charge on the capacitor before and after insertion, (c) the energy stored before and after insertion.

**Answer.** (a) Before: $\tau_1 = RC = 10 \times 10^3 \times 100 \times 10^{-6} = 1.0$ s. After
insertion, the capacitance becomes $C' = \varepsilon_r C = 3.0 \times 100 = 300\,\mu$F.
$\tau_2 = 10 \times 10^3 \times 300 \times 10^{-6} = 3.0$ s.

(b) Before: $Q_1 = CV = 100 \times 10^{-6} \times 12 = 1.20 \times 10^{-3}$ C $= 1.20$ mC. After:
$Q_2 = C'V = 300 \times 10^{-6} \times 12 = 3.60 \times 10^{-3}$ C $= 3.60$ mC. The supply provides
the additional charge $\Delta Q = 2.40$ mC.

(c) Before:
$E_1 = \frac{1}{2}CV^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 144 = 7.20 \times 10^{-3}$ J.
After:
$E_2 = \frac{1}{2}C'V^2 = \frac{1}{2} \times 300 \times 10^{-6} \times 144 = 2.16 \times 10^{-2}$ J
$= 21.6$ mJ. Energy increased by a factor of $\varepsilon_r = 3$, consistent with the $V$-fixed
case.

<b>If you get this wrong, revise:</b> [Dielectrics in Detail](#8-dielectrics-in-detail)

</details>

<details>
<summary>Problem 14</summary>
Two parallel plate capacitors have the same plate area $A = 0.010$ m$^2$ and separation $d = 0.50$ mm. Capacitor A has vacuum between the plates and is charged to $400$ V. Capacitor B has a mica dielectric ($\varepsilon_r = 6.0$) and is charged to the same p.d. Calculate: (a) the capacitance of each, (b) the energy density of each, (c) the maximum p.d. each can withstand if the dielectric strength of mica is $160$ kV/mm.

**Answer.** (a)
$C_A = \frac{8.85 \times 10^{-12} \times 0.010}{5.0 \times 10^{-4}} = 1.77 \times 10^{-10}$ F
$= 177$ pF. $C_B = \varepsilon_r C_A = 6.0 \times 177 = 1062$ pF $= 1.06$ nF.

(b) Energy density $u = \frac{1}{2}\varepsilon_0 \varepsilon_r E^2$ where
$E = V/d = 400/(5.0 \times 10^{-4}) = 8.0 \times 10^5$ V/m. For A:
$u_A = \frac{1}{2} \times 8.85 \times 10^{-12} \times 1.0 \times (8.0 \times 10^5)^2 = \frac{1}{2} \times 8.85 \times 10^{-12} \times 6.4 \times 10^{11} = 2.83$
J/m$^3$. For B:
$u_B = \frac{1}{2} \times 8.85 \times 10^{-12} \times 6.0 \times (8.0 \times 10^5)^2 = 6.0 \times 2.83 = 17.0$
J/m$^3$.

(c) For A (vacuum): the limiting factor is not the dielectric but rather practical considerations;
for an ideal vacuum the breakdown field is effectively infinite. In practice, field emission limits
vacuum capacitors to roughly $20$ -- $40$ MV/m. For B (mica): $E_{\mathrm{max}} = 160 \times 10^6$
V/m.
$V_{\mathrm{max}} = E_{\mathrm{max}} \cdot d = 160 \times 10^6 \times 5.0 \times 10^{-4} = 8.0 \times 10^4$
V $= 80$ kV. The energy stored at maximum:
$E_B = \frac{1}{2}C_B V_{\mathrm{max}}^2 = \frac{1}{2} \times 1.062 \times 10^{-9} \times 6.4 \times 10^9 = 3.40$
J.

<b>If you get this wrong, revise:</b> [Dielectrics in Detail](#8-dielectrics-in-detail)

</details>

<details>
<summary>Problem 15</summary>
Four capacitors are connected as follows: $C_1 = 10\,\mu$F and $C_2 = 20\,\mu$F are in series with each other. This series combination is in parallel with $C_3 = 30\,\mu$F. The entire network is in series with $C_4 = 15\,\mu$F. A $100$ V supply is connected across the entire network. Calculate: (a) the equivalent capacitance, (b) the charge on $C_4$, (c) the p.d. across the $C_1$--$C_2$--$C_3$ sub-network, (d) the charge on $C_3$.

**Answer.** (a) $C_{12} = \frac{10 \times 20}{10 + 20} = 6.67\,\mu$F (series).
$C_{123} = C_{12} + C_3 = 6.67 + 30 = 36.67\,\mu$F (parallel).
$C_{\mathrm{total}} = \frac{36.67 \times 15}{36.67 + 15} = \frac{550}{51.67} = 10.6\,\mu$F.

(b)
$Q_{\mathrm{total}} = C_{\mathrm{total}} \times V = 10.6 \times 10^{-6} \times 100 = 1.06 \times 10^{-3}$
C. Since $C_4$ is in series with the rest, $Q_4 = Q_{\mathrm{total}} = 1.06$ mC.

(c) $V_{123} = Q_{\mathrm{total}} / C_{123} = 1.06 \times 10^{-3} / (36.67 \times 10^{-6}) = 28.9$
V. Check: $V_4 = Q_{\mathrm{total}}/C_4 = 1.06 \times 10^{-3}/(15 \times 10^{-6}) = 70.7$ V.
$28.9 + 70.7 = 99.6 \approx 100$ V (rounding).

(d) $C_3$ is in parallel with the $C_1$--$C_2$ combination, so $V_3 = V_{123} = 28.9$ V.
$Q_3 = C_3 V_3 = 30 \times 10^{-6} \times 28.9 = 8.67 \times 10^{-4}$ C $= 867\,\mu$C.

<b>If you get this wrong, revise:</b>
[Capacitors in Series and Parallel](#4-capacitors-in-series-and-parallel)

</details>

<details>
<summary>Problem 16</summary>
A student investigates an unknown capacitor by charging it to $10.0$ V and measuring the p.d. during discharge through a $47\,\mathrm{k}\Omega$ resistor. The following data are recorded:

| $t$ (s) | $V$ (V) |
| ------- | ------- |
| 0       | 10.0    |
| 10      | 7.45    |
| 20      | 5.55    |
| 30      | 4.13    |
| 40      | 3.08    |
| 50      | 2.30    |

(a) Plot $\ln(V)$ against $t$ and determine the gradient. (b) Hence calculate the capacitance $C$.
(c) Estimate the uncertainty in $C$ if the uncertainty in $R$ is $\pm 2$% and the uncertainty in the
gradient is $\pm 0.005$ s$^{-1}$.

**Answer.** (a) Computing $\ln(V)$:

| $t$ (s) | $V$ (V) | $\ln(V)$ |
| ------- | ------- | -------- |
| 0       | 10.0    | 2.303    |
| 10      | 7.45    | 2.008    |
| 20      | 5.55    | 1.714    |
| 30      | 4.13    | 1.418    |
| 40      | 3.08    | 1.125    |
| 50      | 2.30    | 0.833    |

The gradient from a line of best fit through these points: $m \approx -0.0294$ s$^{-1}$.

(b) $m = -1/(RC)$, so $C = -1/(mR) = -1/(-0.0294 \times 47000) = 1/(1382) = 7.24 \times 10^{-4}$ F
$= 724\,\mu$F.

(c) $C = \frac{1}{|m|R}$. Using fractional uncertainties:
$\frac{\Delta C}{C} = \frac{\Delta |m|}{|m|} + \frac{\Delta R}{R} = \frac{0.005}{0.0294} + 0.02 = 0.170 + 0.020 = 0.190$.
$\Delta C = 0.190 \times 724 = 138\,\mu$F. So $C = 724 \pm 138\,\mu$F, or
$C = (7.2 \pm 1.4) \times 10^{-4}$ F.

<b>If you get this wrong, revise:</b>
[Measuring Capacitance Experimentally](#11-measuring-capacitance-experimentally)

</details>


---

:::tip Diagnostic Test
Ready to test your understanding of **Capacitance**? The [diagnostic test](/physics/diagnostics/diag-capacitance) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Capacitance with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/physics/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::

:::danger Common Pitfalls

- **Assuming charge is shared equally between capacitors in series:** In series, all capacitors store the SAME charge, not equal charge. The total charge stored is NOT Q1 + Q2 -- it is the common charge Q that flows through all of them. This is because the same current flows through each capacitor in series.

- **Forgetting that energy is lost when capacitors are reconnected:** When a charged capacitor is disconnected from a source and connected to another (uncharged) capacitor, charge is conserved but energy is NOT conserved. Some energy is always lost as heat in the connecting wires, even though this is not obvious from the equations.

- **Confusing capacitance formulas for series and parallel:** Capacitors in PARALLEL add directly (C_total = C1 + C2), just like resistors in series. Capacitors in SERIES use the reciprocal formula (1/C_total = 1/C1 + 1/C2), just like resistors in parallel. Students frequently mix these up.

- **Misidentifying the area in C = epsilon_0 * A / d:** The area A is the area of ONE plate (the overlapping area), not the total area of both plates. If plates have different areas, use the smaller area. Also, d is the separation between plates, not the thickness of a plate.

:::
