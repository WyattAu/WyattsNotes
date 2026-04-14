---
title: Electricity
date: 2026-04-14
tags:
  - Physics
  - Highers
categories:
  - Physics
slug: electricity
---

# Electricity

## Higher Electricity

### Electric Charge and Current

**Electric charge** is measured in coulombs (C). The elementary charge is
$e = 1.6 \times 10^{-19} \text{ C}$.

**Electric current** is the rate of flow of charge:

$$I = \frac{Q}{t}$$

Conventional current flows from positive to negative. In metals, the charge carriers are electrons,
which flow from negative to positive -- opposite to the conventional current direction.

**Example:** A current of $3 \text{ A}$ flows for $2 \text{ minutes}$. Calculate the total charge.

$$Q = It = 3 \times 120 = 360 \text{ C}$$

**Example:** How many electrons pass a point in a wire carrying $5 \text{ A}$ for $10 \text{ s}$?

$$Q = 5 \times 10 = 50 \text{ C}$$

$$n = \frac{Q}{e} = \frac{50}{1.6 \times 10^{-19}} = 3.125 \times 10^{20} \text{ electrons}$$

### Drift Velocity

The current in a wire can be expressed in terms of the microscopic properties of the charge
carriers:

$$I = nAve$$

where $n$ is the number density of free electrons (per m$^3$), $A$ is the cross-sectional area, $v$
is the drift velocity, and $e$ is the elementary charge.

For copper, $n \approx 8.5 \times 10^{28}$ m$^{-3}$. A 1 A current in a wire of area $10^{-6}$ m$^2$
gives a drift velocity of about $7 \times 10^{-5}$ m/s -- less than 0.1 mm/s. The signal propagates
at nearly the speed of light, but the electrons themselves move extraordinarily slowly.

### Potential Difference, EMF, and Resistance

**Potential Difference (PD):** The energy transferred per unit charge:

$$V = \frac{W}{Q}$$

**Electromotive Force (EMF):** The energy supplied per unit charge by a source:

$$\varepsilon = \frac{E}{Q}$$

**Resistance:** $R = \dfrac{V}{I}$

**Ohm's Law:** For an ohmic conductor at constant temperature, $V = IR$.

### Why Ohm's Law Is Not a Universal Law

Ohm's law applies only to ohmic conductors (typically metals at constant temperature). Many
components violate it: filament lamps (resistance increases with temperature), diodes (conduct only
in one direction), thermistors (resistance changes with temperature), and semiconductors. The term
"law" is historical.

### Resistivity

The resistance of a wire depends on its material and dimensions:

$$R = \frac{\rho L}{A}$$

where $\rho$ is resistivity (measured in $\Omega \text{m}$), $L$ is length, and $A$ is
cross-sectional area.

Resistivity is an intrinsic property of the material, independent of the dimensions of the wire. It
depends on temperature: for metals, resistivity increases approximately linearly with temperature.

**Example:** A copper wire of length $10 \text{ m}$ and diameter $0.5 \text{ mm}$ has resistivity
$1.7 \times 10^{-8} \Omega \text{m}$. Find its resistance.

$$A = \pi r^2 = \pi(0.25 \times 10^{-3})^2 = 1.963 \times 10^{-7} \text{ m}^2$$

$$R = \frac{1.7 \times 10^{-8} \times 10}{1.963 \times 10^{-7}} = \frac{1.7 \times 10^{-7}}{1.963 \times 10^{-7}} \approx 0.866 \Omega$$

### Series and Parallel Circuits

**Series Circuits:**

- Current is the same through all components: $I = I_1 = I_2 = \cdots$
- Total PD equals the sum of individual PDs: $V = V_1 + V_2 + \cdots$
- Total resistance: $R = R_1 + R_2 + \cdots$

**Parallel Circuits:**

- PD is the same across all branches: $V = V_1 = V_2 = \cdots$
- Total current equals the sum of branch currents: $I = I_1 + I_2 + \cdots$
- Total resistance: $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \cdots$

**Example:** Find the total resistance of a $6 \Omega$ and $12 \Omega$ resistor in parallel.

$$\frac{1}{R} = \frac{1}{6} + \frac{1}{12} = \frac{2}{12} + \frac{1}{12} = \frac{3}{12} = \frac{1}{4}$$

$$R = 4 \Omega$$

### Why Parallel Resistance Is Less Than Any Individual Resistance

Adding a parallel branch provides an additional path for current. More paths means less total
opposition, so the total resistance decreases. Adding a second identical resistor in parallel halves
the total resistance.

### Kirchhoff's Laws

**First Law (Current Law):** The sum of currents entering a junction equals the sum of currents
leaving it. This is a statement of conservation of charge.

**Second Law (Voltage Law):** The sum of EMFs around any closed loop equals the sum of PDs around
that loop. This is a statement of conservation of energy.

### Applying Kirchhoff's Laws Systematically

1. Label the currents in each branch (choose a direction; if the actual direction is opposite, the
   calculated value will be negative).
2. Apply the first law at each junction.
3. Apply the second law to each independent loop (choose a direction for each loop).
4. Solve the resulting system of equations.

**Example:** In a circuit with a $12 \text{ V}$ battery, a $4 \Omega$ resistor in series with a
parallel combination of $6 \Omega$ and $3 \Omega$ resistors, find the current through each resistor.

Parallel combination: $\dfrac{1}{R_p} = \dfrac{1}{6} + \dfrac{1}{3} = \dfrac{1}{2}$, so
$R_p = 2 \Omega$.

Total resistance: $R_{\text{total}} = 4 + 2 = 6 \Omega$.

Total current: $I = \dfrac{12}{6} = 2 \text{ A}$.

PD across parallel combination: $V_p = IR_p = 2 \times 2 = 4 \text{ V}$.

Current through $6 \Omega$: $I_6 = \dfrac{4}{6} = \dfrac{2}{3} \text{ A}$.

Current through $3 \Omega$: $I_3 = \dfrac{4}{3} = 1.\bar{3} \text{ A}$.

Check: $\dfrac{2}{3} + \dfrac{4}{3} = 2 \text{ A}$. Correct.

### Internal Resistance

A real battery has internal resistance $r$. The terminal PD is:

$$V = \varepsilon - Ir$$

where $\varepsilon$ is the EMF and $I$ is the current.

### Why Terminal PD Decreases with Current

The battery's internal resistance dissipates energy as heat. The energy available to the external
circuit is the total EMF minus the energy lost internally. As the current increases, the internal
loss ($Ir$) increases, and the terminal PD decreases. If the battery is short-circuited ($R = 0$),
all the EMF is dropped across the internal resistance, and the terminal PD is zero.

**Example:** A battery of EMF $9 \text{ V}$ and internal resistance $0.5 \Omega$ is connected to a
$4 \Omega$ external resistor. Find the current and terminal PD.

$$I = \frac{\varepsilon}{R + r} = \frac{9}{4 + 0.5} = \frac{9}{4.5} = 2 \text{ A}$$

$$V = \varepsilon - Ir = 9 - 2(0.5) = 8 \text{ V}$$

### Maximum Power Transfer Theorem

The maximum power is delivered to the external load when the load resistance equals the internal
resistance: $R = r$.

Proof: $P = VI = \frac{\varepsilon^2 R}{(R+r)^2}$. Setting $\frac{dP}{dR} = 0$ gives $R = r$.

At this condition, the efficiency is only 50%, but the power delivered to the load is maximised.

### Electrical Power and Energy

**Power:** $P = IV = I^2R = \dfrac{V^2}{R}$

**Energy:** $E = VIt = Pt$

**Example:** A $2 \text{ kW}$ heater runs for 3 hours. How much energy does it consume?

$$E = Pt = 2000 \times 3 \times 3600 = 2.16 \times 10^7 \text{ J} = 21.6 \text{ MJ}$$

Or in kWh: $E = 2 \times 3 = 6 \text{ kWh}$.

### Potential Divider

Two resistors in series form a potential divider. The output voltage across $R_2$ is:

$$V_{\text{out}} = V_{\text{in}} \times \frac{R_2}{R_1 + R_2}$$

**Example:** A $12 \text{ V}$ supply is connected across a $10 \text{ k}\Omega$ and a
$2 \text{ k}\Omega$ resistor in series. Find the PD across the $2 \text{ k}\Omega$ resistor.

$$V_{\text{out}} = 12 \times \frac{2}{10 + 2} = 12 \times \frac{1}{6} = 2 \text{ V}$$

### Sensing Circuits with Potential Dividers

Replacing one resistor with a thermistor or LDR creates a circuit whose output voltage varies with
temperature or light level. A thermistor (NTC) decreases in resistance as temperature increases, so
the voltage across it decreases as temperature rises. An LDR decreases in resistance as light
intensity increases.

---

## Capacitors (Advanced Higher)

### Capacitance

$$C = \frac{Q}{V}$$

where $C$ is capacitance (farads, F), $Q$ is charge (coulombs), and $V$ is potential difference.

**Energy stored in a capacitor:**

$$E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$

**Derivation of energy:** The work done to charge a capacitor from 0 to $Q$ is:

$$E = \int_0^Q V\, dq = \int_0^Q \frac{q}{C}\, dq = \frac{Q^2}{2C} = \frac{1}{2}CV^2$$

**Example:** A $100 \mu\text{F}$ capacitor is charged to $200 \text{ V}$. Find the energy stored.

$$E = \frac{1}{2}CV^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 40000 = 2 \text{ J}$$

### Charging and Discharging

**Charging:** $Q = Q_0(1 - e^{-t/RC})$

**Discharging:** $Q = Q_0 e^{-t/RC}$

where $\tau = RC$ is the **time constant**.

At $t = \tau$: $Q = Q_0(1 - e^{-1}) \approx 0.632 Q_0$ (about 63.2% of full charge).

At $t = 5\tau$: $Q \approx 0.993 Q_0$ (effectively fully charged or discharged).

### Voltage and Current During Charging/Discharging

Since $V = Q/C$, the voltage follows the same exponential as the charge:

- Charging: $V = V_0(1 - e^{-t/RC})$
- Discharging: $V = V_0 e^{-t/RC}$

The current during charging is: $I = I_0 e^{-t/RC}$ (starts at $I_0 = V_0/R$, decays to zero).

The current during discharging is: $I = -I_0 e^{-t/RC}$ (flows in the opposite direction).

**Example:** A $470 \mu\text{F}$ capacitor is charged through a $100 \text{ k}\Omega$ resistor from
a $9 \text{ V}$ supply. Find the time constant and the time to reach 95% of full charge.

$$\tau = RC = 100000 \times 470 \times 10^{-6} = 47 \text{ s}$$

For 95% charge: $0.95 = 1 - e^{-t/47}$

$$e^{-t/47} = 0.05$$

$$t = -47 \ln(0.05) = -47 \times (-2.996) \approx 140.8 \text{ s}$$

### Capacitors in Series and Parallel

**Series:** $\dfrac{1}{C_{\text{total}}} = \dfrac{1}{C_1} + \dfrac{1}{C_2}$ (analogous to resistors
in parallel)

**Parallel:** $C_{\text{total}} = C_1 + C_2$ (analogous to resistors in series)

---

## Common Pitfalls

1. **Confusing EMF and terminal PD:** EMF is the total energy per unit charge supplied; terminal PD
   is what is available to the external circuit.

2. **Incorrect parallel resistance formula:** It is
   $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$, not $R = R_1 + R_2$.

3. **Units:** Ensure consistent units (volts, amperes, ohms). Convert millivolts, kilo-ohms, etc. as
   needed.

4. **Internal resistance sign:** The formula $V = \varepsilon - Ir$ applies when the battery is
   supplying current.

5. **Time constant:** $\tau = RC$ has units of seconds when $R$ is in ohms and $C$ is in farads.

6. **Forgetting that the current through a capacitor during charging starts at a maximum and decays
   to zero**, not the other way around.

7. **Using $P = IV$ with the terminal PD** when the problem asks for the total power output of the
   battery. The total power is $P = \varepsilon I$, where $\varepsilon$ is the EMF.

---

## Practice Questions

1. A wire of length $5 \text{ m}$ and cross-sectional area $2 \times 10^{-6} \text{ m}^2$ has
   resistance $0.85 \Omega$. Calculate the resistivity of the material.

2. Find the current through each resistor in a circuit with a $24 \text{ V}$ battery connected to
   $3 \Omega$, $6 \Omega$, and $12 \Omega$ resistors all in parallel.

3. A battery of EMF $15 \text{ V}$ and internal resistance $1.2 \Omega$ is connected to an external
   circuit. The terminal PD is $13.8 \text{ V}$. Find the current and external resistance.

4. Design a potential divider using a $12 \text{ V}$ supply to produce an output of $3.6 \text{ V}$
   using a $10 \text{ k}\Omega$ resistor as $R_1$.

5. A $220 \mu\text{F}$ capacitor is charged to $50 \text{ V}$ and then discharged through a
   $33 \text{ k}\Omega$ resistor. Find the time constant and the charge remaining after
   $15 \text{ s}$.

6. Three resistors of $4 \Omega$, $6 \Omega$, and $12 \Omega$ are connected to a $12 \text{ V}$
   battery. Find the total resistance and current if (a) all are in series, (b) all are in parallel.

7. A lamp rated $60 \text{ W}$, $240 \text{ V}$ is connected to a $200 \text{ V}$ supply. Calculate
   the actual power dissipated, assuming the resistance of the lamp is constant.

8. A $470 \mu\text{F}$ capacitor stores $0.5 \text{ J}$ of energy. Find the voltage across it and
   the charge stored.

9. Two capacitors of $10 \mu\text{F}$ and $22 \mu\text{F}$ are connected in series across a
   $12 \text{ V}$ supply. Find the charge on each capacitor and the PD across each.

10. A battery of EMF $12 \text{ V}$ and internal resistance $0.8 \Omega$ is connected to an external
    circuit. The maximum power is delivered to the external load. Find the load resistance, the
    current, and the power delivered to the load.
