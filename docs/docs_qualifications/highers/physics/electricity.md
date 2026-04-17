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

where $\rho$ is resistivity (measured in $\Omega \mathrm{m}$), $L$ is length, and $A$ is
cross-sectional area.

Resistivity is an intrinsic property of the material, independent of the dimensions of the wire. It
depends on temperature: for metals, resistivity increases approximately linearly with temperature.

**Example:** A copper wire of length $10 \text{ m}$ and diameter $0.5 \text{ mm}$ has resistivity
$1.7 \times 10^{-8} \Omega \mathrm{m}$. Find its resistance.

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

$$V_{\mathrm{out}} = V_{\mathrm{in}} \times \frac{R_2}{R_1 + R_2}$$

**Example:** A $12 \text{ V}$ supply is connected across a $10 \text{ k}\Omega$ and a
$2 \text{ k}\Omega$ resistor in series. Find the PD across the $2 \text{ k}\Omega$ resistor.

$$V_{\mathrm{out}} = 12 \times \frac{2}{10 + 2} = 12 \times \frac{1}{6} = 2 \text{ V}$$

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

**Example:** A $100 \mu\mathrm{F}$ capacitor is charged to $200 \text{ V}$. Find the energy stored.

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

**Example:** A $470 \mu\mathrm{F}$ capacitor is charged through a $100 \text{ k}\Omega$ resistor from
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

5. A $220 \mu\mathrm{F}$ capacitor is charged to $50 \text{ V}$ and then discharged through a
   $33 \text{ k}\Omega$ resistor. Find the time constant and the charge remaining after
   $15 \text{ s}$.

6. Three resistors of $4 \Omega$, $6 \Omega$, and $12 \Omega$ are connected to a $12 \text{ V}$
   battery. Find the total resistance and current if (a) all are in series, (b) all are in parallel.

7. A lamp rated $60 \text{ W}$, $240 \text{ V}$ is connected to a $200 \text{ V}$ supply. Calculate
   the actual power dissipated, assuming the resistance of the lamp is constant.

8. A $470 \mu\mathrm{F}$ capacitor stores $0.5 \text{ J}$ of energy. Find the voltage across it and
   the charge stored.

9. Two capacitors of $10 \mu\mathrm{F}$ and $22 \mu\mathrm{F}$ are connected in series across a
   $12 \text{ V}$ supply. Find the charge on each capacitor and the PD across each.

10. A battery of EMF $12 \text{ V}$ and internal resistance $0.8 \Omega$ is connected to an external
    circuit. The maximum power is delivered to the external load. Find the load resistance, the
    current, and the power delivered to the load.

## 11. Worked Example: Complex Circuit with Kirchhoff's Laws

A circuit contains two cells: Cell A has EMF $12 \text{ V}$ and internal resistance $1 \Omega$; Cell
B has EMF $6 \text{ V}$ and internal resistance $2 \Omega$. The positive terminals are connected
through a $4 \Omega$ resistor.

**Step 1:** Define current direction. Assume current $I$ flows clockwise (from Cell A through the
resistor to Cell B).

**Step 2:** Apply Kirchhoff's second law around the loop (clockwise):

$$12 - 1I - 4I - 6 - 2I = 0$$

$$6 - 7I = 0$$

$$I = \frac{6}{7} = 0.857 \text{ A}$$

The positive result confirms the assumed direction is correct: current flows from Cell A to Cell B.

**Step 3:** Terminal PD of each cell.

Cell A: $V_A = 12 - 0.857 \times 1 = 11.14 \text{ V}$

Cell B: $V_B = 6 + 0.857 \times 2 = 7.71 \text{ V}$ (current flows into the positive terminal, so
the terminal PD is EMF plus $Ir$)

**Step 4:** Power dissipated in the resistor: $P = I^2 R = 0.857^2 \times 4 = 2.94 \text{ W}$.

## 12. Worked Example: Resistivity and Wire Dimensions

A nichrome wire has resistivity $1.10 \times 10^{-6} \Omega\mathrm{m}$. A length of this wire must
have a resistance of $15 \Omega$ and carry a maximum current of $2 \text{ A}$ without overheating.
If the wire must not exceed a power dissipation of $20 \text{ W}$, find the minimum cross-sectional
area and the corresponding length.

From $P = I^2R$: $R_{\max} = \frac{P}{I^2} = \frac{20}{4} = 5 \Omega$.

But we need $R = 15 \Omega$, and $P = I^2R = 4 \times 15 = 60 \text{ W}$, which exceeds the limit.
We need to reduce the resistance or the current. If we use two identical wires in parallel, each has
$R = 30 \Omega$, and the current through each is $1 \text{ A}$, giving
$P = 1^2 \times 30 = 30 \text{ W}$ per wire. Still too high.

This illustrates the constraints that real-world design must satisfy: the resistance must be
achieved with wire dimensions that keep the power dissipation within thermal limits.

## 13. Capacitors: Extended Analysis (Advanced Higher)

### Worked Example: RC Circuit Analysis

A $220 \mu\mathrm{F}$ capacitor is charged through a $47 \text{ k}\Omega$ resistor from a
$12 \text{ V}$ supply. Find:

(a) The time constant.

(b) The charge after one time constant.

(c) The current after two time constants.

(d) The time for the voltage to reach $10 \text{ V}$.

**(a)** $\tau = RC = 47000 \times 220 \times 10^{-6} = 10.34 \text{ s}$

**(b)** After $t = \tau$:
$Q = Q_0(1 - e^{-1}) = CV_0(1 - e^{-1}) = 220 \times 10^{-6} \times 12 \times 0.632 = 1.667 \times 10^{-3} \text{ C}$

**(c)** Current: $I(t) = I_0 e^{-t/\tau}$ where
$I_0 = V_0/R = 12/47000 = 2.55 \times 10^{-4} \text{ A}$.

At $t = 2\tau$:
$I = 2.55 \times 10^{-4} \times e^{-2} = 2.55 \times 10^{-4} \times 0.135 = 3.45 \times 10^{-5} \text{ A}$

**(d)** $V = 10 = 12(1 - e^{-t/10.34})$

$$1 - e^{-t/10.34} = \frac{10}{12} = 0.833$$

$$e^{-t/10.34} = 0.167$$

$$t = -10.34 \times \ln(0.167) = -10.34 \times (-1.79) = 18.5 \text{ s}$$

### Energy Stored in a Charged Capacitor: Why the Factor of One-Half

The energy stored in a capacitor is $E = \frac{1}{2}CV^2$, not $CV^2$. The factor of one-half arises
because the voltage increases linearly as charge builds up: at the start, $V = 0$, and at the end,
$V = V_0$. The average voltage during charging is $V_0/2$, and
$E = Q \times V_{\mathrm{avg}} = QV_0/2$.

Using calculus:
$E = \int_0^{Q_0} V\, dq = \int_0^{Q_0} \frac{q}{C}\, dq = \frac{Q_0^2}{2C} = \frac{1}{2}CV_0^2$.

### Capacitors in Series and Parallel: Worked Example

Two capacitors $C_1 = 10 \mu\mathrm{F}$ and $C_2 = 22 \mu\mathrm{F}$ are connected in series across a
$12 \text{ V}$ supply.

**Total capacitance:**

$$\frac{1}{C_{\text{total}}} = \frac{1}{10} + \frac{1}{22} = \frac{22 + 10}{220} = \frac{32}{220}$$

$$C_{\text{total}} = \frac{220}{32} = 6.875 \mu\mathrm{F}$$

**Charge on each capacitor:**
$Q = C_{\text{total}}V = 6.875 \times 10^{-6} \times 12 = 8.25 \times 10^{-5} \text{ C}$

(In series, the same charge is on each capacitor.)

**PD across each:**

$V_1 = \frac{Q}{C_1} = \frac{82.5}{10} = 8.25 \text{ V}$

$V_2 = \frac{Q}{C_2} = \frac{82.5}{22} = 3.75 \text{ V}$

Check: $8.25 + 3.75 = 12 \text{ V}$. Correct.

## 14. Potential Divider: Extended Applications

### Worked Example: Sensor Circuit Design

Design a circuit that turns on a fan when the temperature exceeds $30^{\circ}\mathrm{C}$. Use a
$9 \text{ V}$ supply, a $10 \text{ k}\Omega$ fixed resistor, and an NTC thermistor with the
following characteristics: $R = 20 \text{ k}\Omega$ at $20^{\circ}\mathrm{C}$,
$R = 10 \text{ k}\Omega$ at $30^{\circ}\mathrm{C}$, $R = 5 \text{ k}\Omega$ at $40^{\circ}\mathrm{C}$.

Place the thermistor as $R_2$ (top of the divider). The output voltage across the thermistor is:

$$V_{\mathrm{out}} = 9 \times \frac{R_{\text{thermistor}}}{10 + R_{\text{thermistor}}}$$

At $20^{\circ}\mathrm{C}$: $V_{\mathrm{out}} = 9 \times \frac{20}{30} = 6.0 \text{ V}$

At $30^{\circ}\mathrm{C}$: $V_{\mathrm{out}} = 9 \times \frac{10}{20} = 4.5 \text{ V}$

At $40^{\circ}\mathrm{C}$: $V_{\mathrm{out}} = 9 \times \frac{5}{15} = 3.0 \text{ V}$

As temperature increases, the output voltage decreases. A voltage comparator set to trigger at
$4.5 \text{ V}$ would switch on the fan when the temperature exceeds $30^{\circ}\mathrm{C}$.

## 15. Summary Table: Key Electricity Formulas

| Topic               | Formula                                        | Variables                     | Notes                         |
| ------------------- | ---------------------------------------------- | ----------------------------- | ----------------------------- |
| Current             | $I = Q/t$                                      | $Q$, $t$                      | $I = nAve$ for drift velocity |
| Ohm's law           | $V = IR$                                       | $V$, $I$, $R$                 | Only for ohmic conductors     |
| Resistivity         | $R = \rho L / A$                               | $\rho$, $L$, $A$              | $\rho$ depends on temperature |
| Power               | $P = IV = I^2R = V^2/R$                        | $V$, $I$, $R$                 | Three equivalent forms        |
| Internal resistance | $V = \varepsilon - Ir$                         | $\varepsilon$, $I$, $r$       | Terminal PD                   |
| Capacitance         | $C = Q/V$                                      | $Q$, $V$                      | Unit: farad                   |
| Capacitor energy    | $E = \frac{1}{2}CV^2$                          | $C$, $V$                      | Three equivalent forms        |
| RC time constant    | $\tau = RC$                                    | $R$, $C$                      | 63.2% charge in one $\tau$    |
| Potential divider   | $V_{\mathrm{out}} = V_{\mathrm{in}} R_2/(R_1+R_2)$ | $V_{\mathrm{in}}$, $R_1$, $R_2$ | For sensing circuits          |

## 16. Practice Questions (Additional)

11. A copper wire of length $20 \text{ m}$ and diameter $1.0 \text{ mm}$ has a resistance of
    $0.35 \Omega$. Calculate the resistivity of copper.

12. In a circuit, a $24 \text{ V}$ battery with internal resistance $0.6 \Omega$ is connected to two
    parallel resistors of $8 \Omega$ and $12 \Omega$ in series with a $4 \Omega$ resistor. Find the
    current through each resistor and the power dissipated in the $4 \Omega$ resistor.

13. A $470 \mu\mathrm{F}$ capacitor is charged to $25 \text{ V}$ and then discharged through a
    $22 \text{ k}\Omega$ resistor. Calculate (a) the time constant, (b) the voltage after
    $15 \text{ s}$, (c) the current after $15 \text{ s}$, and (d) the energy remaining in the
    capacitor after $15 \text{ s}$.

14. A potential divider consists of a $15 \text{ k}\Omega$ resistor and an LDR in series with a
    $9 \text{ V}$ supply. The LDR has resistance $100 \text{ k}\Omega$ in darkness and
    $1 \text{ k}\Omega$ in bright light. Calculate the output voltage (across the LDR) in both
    conditions.

15. Two capacitors of $47 \mu\mathrm{F}$ and $100 \mu\mathrm{F}$ are connected in series and charged
    from a $12 \text{ V}$ supply. Find (a) the total capacitance, (b) the charge on each capacitor,
    (c) the PD across each capacitor, and (d) the total energy stored.

16. Explain why the total capacitance of capacitors in parallel is greater than any individual
    capacitance, whereas the total resistance of resistors in parallel is less than any individual
    resistance.

17. A battery of unknown EMF is connected to a $6 \Omega$ resistor and the current is
    $1.5 \text{ A}$. When a $12 \Omega$ resistor is connected instead, the current is
    $0.85 \text{ A}$. Calculate the EMF and internal resistance of the battery.

18. A $100 \mu\mathrm{F}$ capacitor charged to $50 \text{ V}$ is connected across an uncharged
    $47 \mu\mathrm{F}$ capacitor. Calculate the final voltage across both capacitors and the energy
    lost in the process.

19. Design a potential divider circuit using a $12 \text{ V}$ supply that produces an output of
    $4 \text{ V}$ when a thermistor has resistance $8 \text{ k}\Omega$. Specify the value of the
    fixed resistor.

20. Explain how a capacitor can be used to smooth the output of a half-wave rectifier. Include a
    sketch of the output waveform before and after smoothing.

## Extended Worked Examples

### Example 21: Maximum Power Transfer Theorem

A battery has EMF $12 \text{ V}$ and internal resistance $2 \Omega$. It is connected to a variable
external resistor $R$. Find the value of $R$ that maximises the power delivered to $R$, and
calculate this maximum power.

**Step 1: Express the power in $R$**

$$I = \frac{\mathcal{E}}{R + r} = \frac{12}{R + 2}$$

$$P = I^2 R = \frac{144R}{(R + 2)^2}$$

**Step 2: Differentiate and set to zero**

$$\frac{dP}{dR} = \frac{144(R + 2)^2 - 144R \times 2(R + 2)}{(R + 2)^4} = \frac{144(R + 2 - 2R)}{(R + 2)^3} = \frac{144(2 - R)}{(R + 2)^3}$$

Setting $\frac{dP}{dR} = 0$ gives $R = 2 \Omega$.

**Step 3: Calculate maximum power**

$$I = \frac{12}{2 + 2} = 3 \text{ A}$$

$$P_{\max} = I^2 R = 9 \times 2 = 18 \text{ W}$$

**Efficiency at maximum power transfer:**

$$\eta = \frac{P_R}{P_{\text{total}}} = \frac{IR}{\mathcal{E}} = \frac{3 \times 2}{12} = 50\%$$

:::info
The maximum power transfer theorem states that maximum power is delivered to the load when
the load resistance equals the internal resistance ($R = r$). However, the efficiency is only 50%.
In power distribution, we want high efficiency, so $R \gg r$. In audio systems, we want maximum
power transfer, so impedance matching is used.
:::

### Example 22: RC Circuit with AC Supply

A $100 \Omega$ resistor and a $50 \mu\mathrm{F}$ capacitor are connected in series with an AC supply
of $V_{\mathrm{rms}} = 240 \text{ V}$ at $50 \text{ Hz}$. Calculate the impedance, current, voltage
across each component, and the phase angle.

**Step 1: Calculate capacitive reactance**

$$X_C = \frac{1}{2\pi f C} = \frac{1}{2\pi \times 50 \times 50 \times 10^{-6}} = \frac{1}{0.01571} = 63.7 \Omega$$

**Step 2: Calculate impedance**

$$Z = \sqrt{R^2 + X_C^2} = \sqrt{100^2 + 63.7^2} = \sqrt{10000 + 4058} = \sqrt{14058} = 118.6 \Omega$$

**Step 3: Calculate current**

$$I_{\mathrm{rms}} = \frac{V_{\mathrm{rms}}}{Z} = \frac{240}{118.6} = 2.02 \text{ A}$$

**Step 4: Voltage across each component**

$$V_R = I_{\mathrm{rms}} \times R = 2.02 \times 100 = 202 \text{ V}$$

$$V_C = I_{\mathrm{rms}} \times X_C = 2.02 \times 63.7 = 128.8 \text{ V}$$

**Check:** $V_R^2 + V_C^2 = 202^2 + 128.8^2 = 40804 + 16589 = 57393$.
$\sqrt{57393} = 239.6 \approx 240 \text{ V}$. Confirmed.

**Step 5: Phase angle**

$$\tan\phi = \frac{X_C}{R} = \frac{63.7}{100} = 0.637$$

$$\phi = \arctan(0.637) = 32.5°$$

The current leads the voltage by $32.5°$.

### Example 23: Wheatstone Bridge Analysis

A Wheatstone bridge has the following resistors: $P = 100 \Omega$, $Q = 200 \Omega$,
$R = 150 \Omega$, and $S$ is unknown. A galvanometer of negligible resistance is connected between
the junction of $P$ and $Q$ and the junction of $R$ and $S$. The bridge is balanced when
$S = 300 \Omega$. Verify this and calculate the current through each resistor when a $12 \text{ V}$
battery is connected across the bridge.

**Step 1: Balance condition**

$$\frac{P}{Q} = \frac{R}{S} \implies \frac{100}{200} = \frac{150}{S} \implies S = 300 \Omega$$

Confirmed: the bridge is balanced.

**Step 2: Equivalent resistance**

When balanced, no current flows through the galvanometer. The circuit becomes two parallel branches:

- Branch 1: $P + Q = 100 + 200 = 300 \Omega$
- Branch 2: $R + S = 150 + 300 = 450 \Omega$

$$R_{\mathrm{eq}} = \frac{300 \times 450}{300 + 450} = \frac{135000}{750} = 180 \Omega$$

**Step 3: Total current from battery**

$$I_{\text{total}} = \frac{12}{180} = 0.0667 \text{ A} = 66.7 \text{ mA}$$

**Step 4: Current in each branch**

$$I_1 = \frac{12}{300} = 0.040 \text{ A} = 40.0 \text{ mA} \quad \text{(through P and Q)}$$

$$I_2 = \frac{12}{450} = 0.0267 \text{ A} = 26.7 \text{ mA} \quad \text{(through R and S)}$$

**Check:** $I_1 + I_2 = 40.0 + 26.7 = 66.7 \text{ mA} = I_{\text{total}}$. Confirmed.

## Common Pitfalls Extended

### Pitfall 6: Forgetting That Capacitors Block DC in Steady State

After a long time connected to a DC supply, a fully charged capacitor draws zero current. All the
supply voltage appears across the capacitor and none across any series resistor. This is a common
source of error in circuit analysis problems.

### Pitfall 7: Incorrectly Combining AC Voltages

In AC circuits with reactive components, the voltages across individual components are **not** in
phase and cannot be added algebraically. They must be added as phasors (vectorially):

$$V_{\text{total}} = \sqrt{V_R^2 + (V_L - V_C)^2}$$

### Pitfall 8: Confusing EMF with Terminal PD

EMF ($\mathcal{E}$) is the total energy per unit charge supplied by the cell. Terminal PD ($V$) is
the energy per unit charge delivered to the external circuit. They are related by:

$$V = \mathcal{E} - Ir$$

When $I = 0$ (open circuit), $V = \mathcal{E}$. As current increases, $V$ decreases.

## Additional Practice Problems

21. A $470 \mu\mathrm{F}$ capacitor is charged to $20 \text{ V}$ and then discharged through a
    $33 \text{ k}\Omega$ resistor. Calculate (a) the time constant, (b) the time for the voltage to
    fall to $5 \text{ V}$, and (c) the energy dissipated in the resistor during the complete
    discharge.

22. Three resistors of $10 \Omega$, $20 \Omega$, and $30 \Omega$ are connected to a $24 \text{ V}$
    battery with internal resistance $1 \Omega$. Find the current and power delivered for each
    possible connection arrangement (all series, all parallel, and series-parallel combinations).

23. An AC circuit has $R = 80 \Omega$, $X_L = 100 \Omega$, and $X_C = 40 \Omega$ in series with a
    $230 \text{ V}$, $50 \text{ Hz}$ supply. Calculate the impedance, current, power factor, and
    true power dissipated.

24. Design a potential divider using a $9 \text{ V}$ battery and two resistors to produce an output
    voltage of $3 \text{ V}$ that can supply up to $20 \text{ mA}$ without the voltage dropping by
    more than 5%. Specify the resistor values and justify your choice.

25. Explain why domestic appliances are connected in parallel rather than series. Include
    quantitative reasoning about what happens when one appliance is switched on or off in each
    configuration.

## Further Worked Examples

### Example 26: Internal Resistance from Two Load Conditions

A battery is connected first to a $4 \Omega$ resistor, giving a terminal PD of $5.6 \text{ V}$, and
then to a $10 \Omega$ resistor, giving a terminal PD of $7.2 \text{ V}$. Find the EMF and internal
resistance.

**Step 1: Set up equations**

$$\mathcal{E} = V_1 + I_1 r = 5.6 + \frac{5.6}{4}r = 5.6 + 1.4r$$

$$\mathcal{E} = V_2 + I_2 r = 7.2 + \frac{7.2}{10}r = 7.2 + 0.72r$$

**Step 2: Solve simultaneously**

$$5.6 + 1.4r = 7.2 + 0.72r$$

$$0.68r = 1.6$$

$$r = 2.35 \Omega$$

**Step 3: Find EMF**

$$\mathcal{E} = 5.6 + 1.4 \times 2.35 = 5.6 + 3.29 = 8.89 \text{ V}$$

**Check:** $\mathcal{E} = 7.2 + 0.72 \times 2.35 = 7.2 + 1.69 = 8.89 \text{ V}$. Confirmed.

### Example 27: Energy Stored and Dissipated in an RC Circuit

A $220 \mu\mathrm{F}$ capacitor is charged to $12 \text{ V}$ and then discharged through a
$15 \text{ k}\Omega$ resistor. Calculate (a) the initial energy stored, (b) the time constant, (c)
the energy remaining after one time constant, and (d) the total energy dissipated in the resistor.

**Step 1: Initial energy**

$$E_0 = \frac{1}{2}CV^2 = \frac{1}{2} \times 220 \times 10^{-6} \times 144 = 0.01584 \text{ J} = 15.84 \text{ mJ}$$

**Step 2: Time constant**

$$\tau = RC = 15000 \times 220 \times 10^{-6} = 3.3 \text{ s}$$

**Step 3: Energy after one time constant**

$$V(\tau) = V_0 e^{-1} = 12 \times 0.3679 = 4.414 \text{ V}$$

$$E(\tau) = \frac{1}{2}CV(\tau)^2 = \frac{1}{2} \times 220 \times 10^{-6} \times 19.48 = 2.143 \times 10^{-3} \text{ J} = 2.14 \text{ mJ}$$

This is $13.5\%$ of the initial energy (since $E \propto V^2 \propto e^{-2}$).

**Step 4: Total energy dissipated**

$$E_{\text{dissipated}} = E_0 = 15.84 \text{ mJ}$$

All the initial stored energy is eventually dissipated as heat in the resistor.

### Example 28: Diode Circuit Analysis

A silicon diode (forward voltage $0.7 \text{ V}$) is connected in series with a $470 \Omega$
resistor and a $9 \text{ V}$ battery. Calculate the current, the voltage across the resistor, and
the power dissipated in the resistor.

**Step 1: Apply Kirchhoff's voltage law**

$$V_{\text{battery}} = V_{\text{diode}} + V_R$$

$$9 = 0.7 + I \times 470$$

$$I = \frac{9 - 0.7}{470} = \frac{8.3}{470} = 0.01766 \text{ A} = 17.7 \text{ mA}$$

**Step 2: Voltage across resistor**

$$V_R = IR = 0.01766 \times 470 = 8.3 \text{ V}$$

**Step 3: Power dissipated**

$$P_R = I^2 R = (0.01766)^2 \times 470 = 0.000312 \times 470 = 0.147 \text{ W}$$

$$P_R = IV = 0.01766 \times 8.3 = 0.147 \text{ W}$$

Both methods give the same result.

:::info
When analysing diode circuits, always subtract the forward voltage drop from the supply
voltage before applying Ohm's law to the series resistor. Silicon diodes drop approximately
$0.7 \text{ V}$ and LED forward voltages depend on colour ($1.8\text{--}2.2 \text{ V}$ for red,
$2.8\text{--}3.3 \text{ V}$ for blue).
:::

## Board-Specific Content: SQA Advanced Higher

### Charge Carrier Density

The current in a conductor can be expressed as:

$$I = nAve$$

where $n$ is the number density of charge carriers (per $\mathrm{m}^3$), $A$ is the cross-sectional
area, $v$ is the drift velocity, and $e$ is the charge of an electron.

For copper: $n \approx 8.5 \times 10^{28} \text{ m}^{-3}$.

**Example:** A copper wire of diameter $1 \text{ mm}$ carries a current of $5 \text{ A}$.

$$v = \frac{I}{nAe} = \frac{5}{8.5 \times 10^{28} \times \pi(0.0005)^2 \times 1.602 \times 10^{-19}}$$

$$v = \frac{5}{8.5 \times 10^{28} \times 7.854 \times 10^{-7} \times 1.602 \times 10^{-19}} = \frac{5}{1.068 \times 10^4} = 4.68 \times 10^{-4} \text{ m/s}$$

The drift velocity is less than $1 \text{ mm/s}$, even though the current signal propagates at near
the speed of light.

## Additional Practice Problems

26. A battery with EMF $15 \text{ V}$ and internal resistance $0.8 \Omega$ is connected to an
    external circuit of two $6 \Omega$ resistors in parallel. Calculate the current from the
    battery, the terminal PD, the current through each resistor, and the power delivered to each
    resistor.

27. A $100 \mu\mathrm{F}$ capacitor is charged to $30 \text{ V}$ and then connected across a
    $200 \mu\mathrm{F}$ uncharged capacitor. Calculate the final voltage across both, the charge on
    each, and the energy lost.

28. An AC circuit has a $60 \Omega$ resistor and a $0.1 \text{ H}$ inductor in series with a
    $230 \text{ V}$, $50 \text{ Hz}$ supply. Calculate the reactance of the inductor, the impedance,
    the current, the power factor, and the phase angle.

29. A potential divider circuit uses a $10 \text{ k}\Omega$ variable resistor and an LDR. In
    darkness the LDR has resistance $1 \text{ M}\Omega$ and in bright light $500 \Omega$. The supply
    is $9 \text{ V}$. Calculate the output voltage in each condition.

30. Explain the difference between EMF and potential difference. Why can a voltmeter give a reading
    less than the EMF when connected across a battery supplying current to a circuit?
