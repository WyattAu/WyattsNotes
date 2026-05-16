---
title: Electrical Circuits
description:
  "DSE Physics electrical circuits notes covering Ohm's law, series and parallel circuits,
  resistance, Kirchhoff's laws, and electrical energy and power."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: electrical-circuits
---

## Electric Current

### Definition

Electric current is the rate of flow of electric charge:

$$I = \frac{Q}{t}$$

The SI unit of current is the ampere (A), where $1 \mathrm{ A} = 1 \mathrm{ C/s}$.

For current in a metal conductor, the charge carriers are free electrons. In electrolytes, charge
Carriers are positive and negative ions.

### Current and Drift Velocity

$$I = nAve$$

Where $n$ is the number density of charge carriers (per $\mathrm{ m}^3$), $A$ is the cross-sectional
Area, $v$ is the drift velocity, and $e$ is the charge of each carrier.

---

## Ohm's Law and Resistance

### Ohm's Law

For an ohmic conductor at constant temperature:

$$V = IR$$

A conductor is ohmic if its $I$-$V$ graph is a straight line through the origin.

### Resistivity

$$R = \frac{\rho L}{A}$$

Where $\rho$ is the resistivity of the material ($\Omega\,\mathrm{m}$), $L$ is the length, and $A$
Is the cross-sectional area.

Resistivity depends on the material and temperature but not on the dimensions of the conductor.

### Factors Affecting Resistance

| Factor                                  | Effect                                 |
| --------------------------------------- | -------------------------------------- |
| Increasing length                       | $R$ increases (proportional)           |
| Increasing cross-section                | $R$ decreases (inversely proportional) |
| Increasing temperature (metals)         | $R$ increases                          |
| Increasing temperature (semiconductors) | $R$ decreases                          |

### Worked Example 1

A copper wire of length $100 \mathrm{ m}$ and diameter $1.0 \mathrm{ mm}$ carries a current of
$2 \mathrm{ A}$. The resistivity of copper is $1.7 \times 10^{-8} \Omega\,\mathrm{m}$. Find the
Resistance and the potential difference across the wire.

<summary>Solution</summary>

$$A = \pi r^2 = \pi(0.5 \times 10^{-3})^2 = 7.854 \times 10^{-7} \mathrm{ m}^2$$

$$R = \frac{\rho L}{A} = \frac{1.7 \times 10^{-8} \times 100}{7.854 \times 10^{-7}} = \frac{1.7 \times 10^{-6}}{7.854 \times 10^{-7}} = 2.16 \Omega$$

$$V = IR = 2 \times 2.16 = 4.33 \mathrm{ V}$$

### Worked Example 2

A wire has resistance $10 \Omega$. If its length is doubled and its diameter is halved, what is Its
new resistance?

<summary>Solution</summary>

New length: $L_2 = 2L$

New diameter: $d_2 = d/2$So new area: $A_2 = \pi(d/4)^2 = A/4$

$$R_2 = \frac{\rho L_2}{A_2} = \frac{\rho(2L)}{A/4} = 8 \times \frac{\rho L}{A} = 8R = 8 \times 10 = 80 \Omega$$

### Worked Example 3

A copper wire has resistance $4 \Omega$ at $20^\circ\mathrm{C}$. The temperature coefficient of
Resistance of copper is $0.0039\ \mathrm{per\ ^\circ C}$. Find the resistance at
$80^\circ\mathrm{C}$.

<summary>Solution</summary>

$$R_2 = R_1(1 + \alpha\Delta T) = 4(1 + 0.0039 \times 60) = 4(1 + 0.234) = 4 \times 1.234 = 4.94 \Omega$$

---

## Series and Parallel Circuits

<PhetSimulation simulationId="circuit-construction-kit-dc" title="Circuit Construction Kit: DC" />

Build series and parallel circuits interactively and observe how current and voltage distribute
Across components.

### Series Circuits

Current is the same through all components:

$$I = I_1 = I_2 = I_3 = \cdots$$

Total resistance:

$$R_{\mathrm{total}} = R_1 + R_2 + R_3 + \cdots$$

Voltage divides in proportion to resistance:

$$\frac{V_1}{V_2} = \frac{R_1}{R_2}$$

### Parallel Circuits

Voltage is the same across all branches:

$$V = V_1 = V_2 = V_3 = \cdots$$

Total resistance:

$$\frac{1}{R_{\mathrm{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \cdots$$

Current divides inversely in proportion to resistance:

$$\frac{I_1}{I_2} = \frac{R_2}{R_1}$$

### Worked Example 3

Three resistors of $4 \Omega$$6 \Omega$And $12 \Omega$ are connected in parallel across a
$12 \mathrm{ V}$ supply. Find the total resistance and the current through each resistor.

<summary>Solution</summary>

$$\frac{1}{R_{\mathrm{total}}} = \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = \frac{3 + 2 + 1}{12} = \frac{6}{12} = \frac{1}{2}$$

$$R_{\mathrm{total}} = 2 \Omega$$

$$I_4 = \frac{12}{4} = 3 \mathrm{ A}, \quad I_6 = \frac{12}{6} = 2 \mathrm{ A}, \quad I_{12} = \frac{12}{12} = 1 \mathrm{ A}$$

Total current: $I = 3 + 2 + 1 = 6 \mathrm{ A}$

### Worked Example 4

A $6 \Omega$ resistor and a $3 \Omega$ resistor are connected in parallel. This combination is then
Connected in series with a $5 \Omega$ resistor across a $24 \mathrm{ V}$ supply. Find the total
Resistance, the current from the supply, and the power dissipated in each resistor.

<summary>Solution</summary>

Parallel combination: $R_{12} = \frac{6 \times 3}{6 + 3} = 2 \Omega$

Total resistance: $R_{\mathrm{total}} = 2 + 5 = 7 \Omega$

Total current: $I = \frac{V}{R_{\mathrm{total}}} = \frac{24}{7} = 3.43 \mathrm{ A}$

Voltage across parallel combination: $V_{12} = IR_{12} = 3.43 \times 2 = 6.86 \mathrm{ V}$

Current through $6 \Omega$: $I_6 = \frac{6.86}{6} = 1.14 \mathrm{ A}$

Current through $3 \Omega$: $I_3 = \frac{6.86}{3} = 2.29 \mathrm{ A}$

Power: $P_6 = I_6^2 R_6 = 1.14^2 \times 6 = 7.80 \mathrm{ W}$

$P_3 = I_3^2 R_3 = 2.29^2 \times 3 = 15.7 \mathrm{ W}$

$P_5 = I^2 R_5 = 3.43^2 \times 5 = 58.8 \mathrm{ W}$

---

## Kirchhoff's Laws

### Kirchhoff's Current Law (KCL)

The algebraic sum of currents at any junction is zero:

$$\sum I = 0$$

This is a statement of conservation of charge: current entering a junction equals current leaving.

### Kirchhoff's Voltage Law (KVL)

The algebraic sum of potential differences around any closed loop is zero:

$$\sum V = 0$$

This is a statement of conservation of energy: the energy gained by charge passing through a source
Equals the energy lost in the resistors.

### Solving Circuit Problems with Kirchhoff's Laws

1. Assign currents to each branch (choose a direction; if the actual direction is opposite, the
   calculated current will be negative).
2. Apply KCL at each junction.
3. Apply KVL to each independent loop.
4. Solve the resulting system of equations.

### Worked Example 5

In a circuit with two loops, a $12 \mathrm{ V}$ battery is in the left loop with a $4 \Omega$ and a
$6 \Omega$ resistor in series. A $6 \mathrm{ V}$ battery is in the right loop with the $6 \Omega$
Resistor (shared) and a $3 \Omega$ resistor. Find the current through each resistor.

<summary>Solution</summary>

Let $I_1$ flow clockwise in the left loop and $I_2$ flow clockwise in the right loop. Current
Through the $6 \Omega$ resistor is $I_1 - I_2$.

Left loop (KVL): $12 - 4I_1 - 6(I_1 - I_2) = 0 \implies 12 - 10I_1 + 6I_2 = 0 \quad (1)$

Right loop (KVL): $6 - 6(I_1 - I_2) - 3I_2 = 0 \implies 6 - 6I_1 + 3I_2 = 0 \quad (2)$

From (2): $3I_2 = 6I_1 - 6 \implies I_2 = 2I_1 - 2$

Substituting into (1): $12 - 10I_1 + 6(2I_1 - 2) = 0 \implies 12 - 10I_1 + 12I_1 - 12 = 0$

$$2I_1 = 0 \implies I_1 = 0 \mathrm{ A}, \quad I_2 = -2 \mathrm{ A}$$

The current through the $4 \Omega$ resistor is $0 \mathrm{ A}$. The current through the $3 \Omega$
Resistor is $2 \mathrm{ A}$ (counterclockwise). The current through the $6 \Omega$ resistor is
$2 \mathrm{ A}$ (upward).

### Worked Example 6

A circuit has a $12 \mathrm{ V}$ battery with internal resistance $1 \Omega$ connected to Three
resistors: $R_1 = 3 \Omega$ in series with a parallel combination of $R_2 = 6 \Omega$ And
$R_3 = 6 \Omega$. Find the current from the battery, the terminal PD, and the current Through each
resistor.

<summary>Solution</summary>

Parallel combination: $R_{23} = \frac{6 \times 6}{6 + 6} = 3 \Omega$

Total external resistance: $R_{\mathrm{ext}} = 3 + 3 = 6 \Omega$

$$I_{\mathrm{total}} = \frac{\varepsilon}{R_{\mathrm{ext}} + r} = \frac{12}{6 + 1} = \frac{12}{7} = 1.71 \mathrm{ A}$$

Terminal PD: $V = \varepsilon - I_{\mathrm{total}} r = 12 - 1.71 \times 1 = 10.29 \mathrm{ V}$

Voltage across parallel combination:
$V_{23} = I_{\mathrm{total}} \times R_{23} = 1.71 \times 3 = 5.14 \mathrm{ V}$

Current through each $6 \Omega$: $I_2 = I_3 = \frac{5.14}{6} = 0.857 \mathrm{ A}$

---

## Internal Resistance and EMF

### Electromotive Force (EMF)

The EMF ($\varepsilon$) of a source is the total energy per unit charge that the source transfers to
Charges passing through it:

$$\varepsilon = \frac{W}{Q}$$

The terminal potential difference (PD) across a source delivering current is less than the EMF
Because some energy is lost overcoming the internal resistance $r$:

$$V = \varepsilon - Ir$$

When no current flows (open circuit): $V = \varepsilon$.

### Maximum Power Transfer

The power delivered to the external load $R$ is:

$$P = I^2 R = \left(\frac{\varepsilon}{R + r}\right)^2 R = \frac{\varepsilon^2 R}{(R + r)^2}$$

Maximum power is delivered when $R = r$.

### Worked Example 6

A battery has EMF $9 \mathrm{ V}$ and internal resistance $0.5 \Omega$. It is connected to an
External circuit of resistance $4 \Omega$. Find the current, terminal PD, and power dissipated in
The external circuit.

<summary>Solution</summary>

$$I = \frac{\varepsilon}{R + r} = \frac{9}{4 + 0.5} = \frac{9}{4.5} = 2 \mathrm{ A}$$

$$V = \varepsilon - Ir = 9 - 2 \times 0.5 = 8 \mathrm{ V}$$

$$P = I^2 R = 4 \times 4 = 16 \mathrm{ W}$$

### Worked Example 7

A battery with unknown EMF $\varepsilon$ and internal resistance $r$ is connected to a $10 \Omega$
Resistor, giving a current of $0.5 \mathrm{ A}$. When the external resistance is changed to
$20 \Omega$The current is $0.28 \mathrm{ A}$. Find $\varepsilon$ and $r$.

<summary>Solution</summary>

$$\varepsilon = I_1(R_1 + r) = 0.5(10 + r) = 5 + 0.5r \quad (1)$$

$$\varepsilon = I_2(R_2 + r) = 0.28(20 + r) = 5.6 + 0.28r \quad (2)$$

Equating: $5 + 0.5r = 5.6 + 0.28r \implies 0.22r = 0.6 \implies r = 2.73 \Omega$

$$\varepsilon = 5 + 0.5(2.73) = 6.36 \mathrm{ V}$$

---

## Electrical Energy and Power

### Energy

$$E = VIt = I^2 Rt = \frac{V^2}{R}t$$

The SI unit is the joule (J). Commercially, energy is measured in kilowatt-hours (kWh):

$$1 \mathrm{ kWh} = 3.6 \times 10^6 \mathrm{ J}$$

### Power

$$P = IV = I^2 R = \frac{V^2}{R}$$

The SI unit is the watt (W), where $1 \mathrm{ W} = 1 \mathrm{ J/s}$.

### Worked Example 8

A $220 \mathrm{ V}$ electric heater has a power rating of $2000 \mathrm{ W}$. Find the current it
Draws, its resistance, and the cost of running it for 5 hours at `USD 0.90` per kWh.

<summary>Solution</summary>

$$I = \frac{P}{V} = \frac{2000}{220} = 9.09 \mathrm{ A}$$

$$R = \frac{V}{I} = \frac{220}{9.09} = 24.2 \Omega$$

Energy consumed:
$E = Pt = 2000 \times 5 \times 3600 = 3.6 \times 10^7 \mathrm{ J} = 10 \mathrm{ kWh}$

Cost: $10 \times 0.90 = \$9.00$

---

## Potential Divider

A potential divider (voltage divider) consists of two or more resistors in series across a supply
Voltage. The output voltage across one resistor is a fraction of the input:

$$V_{\mathrm{out}} = V_{\mathrm{in}} \times \frac{R_2}{R_1 + R_2}$$

### Potentiometer

A potentiometer is a variable potential divider. A sliding contact divides the total resistance into
Two parts, allowing continuous adjustment of $V_{\mathrm{out}}$ from $0$ to $V_{\mathrm{in}}$.

### Worked Example 9

A potential divider consists of a $12 \mathrm{ V}$ supply, a $8 \mathrm{ k}\Omega$ resistor ($R_1$),
and a $4 \mathrm{ k}\Omega$ resistor ($R_2$) in series. A voltmeter of resistance
$12 \mathrm{ k}\Omega$ is connected across $R_2$. Find the reading on the voltmeter (a) before and
(b) after it is connected.

<summary>Solution</summary>

(a) Without voltmeter: $V_2 = 12 \times \frac{4}{8 + 4} = 12 \times \frac{1}{3} = 4.0 \mathrm{ V}$

(b) With voltmeter across $R_2$: $R_2$ in parallel with
$R_V = \frac{4 \times 12}{4 + 12} = 3 \mathrm{ k}\Omega$

$$V_2 = 12 \times \frac{3}{8 + 3} = 12 \times \frac{3}{11} = 3.27 \mathrm{ V}$$

The voltmeter draws current and reduces the measured voltage (loading effect).

---

## Common Pitfalls

- Confusing EMF with terminal PD. EMF is the total energy per unit charge supplied by the source;
  terminal PD is the energy per unit charge delivered to the external circuit.
- Forgetting that current flows from higher potential to lower potential **through** an external
  resistor, but from lower to higher potential **inside** a battery.
- Incorrectly combining parallel resistances. The total parallel resistance is always less than the
  smallest individual resistance.
- Applying Ohm's law to non-ohmic components (e.g., diodes, filament lamps).
- Forgetting to include internal resistance in circuit calculations. The total resistance in a
  circuit includes both external and internal resistances.

---

## Summary Table

| Topic               | Key Formula                                        | Key Concept                      |
| ------------------- | -------------------------------------------------- | -------------------------------- |
| Ohm's Law           | $V = IR$                                           | Linear I-V for ohmic conductors  |
| Resistivity         | $R = \rho L/A$                                     | Material and geometry dependence |
| Series resistance   | $R = R_1 + R_2 + \cdots$                           | Same current                     |
| Parallel resistance | $1/R = 1/R_1 + 1/R_2 + \cdots$                     | Same voltage                     |
| KCL                 | $\sum I = 0$                                       | Conservation of charge           |
| KVL                 | $\sum V = 0$                                       | Conservation of energy           |
| Internal resistance | $V = \varepsilon - Ir$                             | Lost volts                       |
| Power               | $P = IV = I^2 R = V^2/R$                           | Rate of energy transfer          |
| Potential divider   | $V_{\mathrm{out}} = V_{\mathrm{in}} R_2/(R_1+R_2)$ | Voltage fraction                 |

---

## Problem Set

**Problem 1.** A cell of EMF $6 \mathrm{ V}$ and internal resistance $1.5 \Omega$ is connected to a
Variable resistor $R$. Find the value of $R$ that maximises the power delivered to $R$And Calculate
this maximum power.

<summary>Solution</summary>

Maximum power transfer occurs when $R = r = 1.5 \Omega$.

$$P_{\max} = \frac{\varepsilon^2}{4r} = \frac{36}{4 \times 1.5} = \frac{36}{6} = 6.0 \mathrm{ W}$$

If you get this wrong, revise: Internal Resistance and EMF / Maximum Power Transfer

**Problem 2.** Three identical cells each of EMF $1.5 \mathrm{ V}$ and internal resistance
$0.4 \Omega$ are connected in series to a $4.6 \Omega$ resistor. Find the current and the terminal
PD across the combination.

<summary>Solution</summary>

$$\varepsilon_{\mathrm{total}} = 3 \times 1.5 = 4.5 \mathrm{ V}, \quad r_{\mathrm{total}} = 3 \times 0.4 = 1.2 \Omega$$

$$I = \frac{4.5}{4.6 + 1.2} = \frac{4.5}{5.8} = 0.776 \mathrm{ A}$$

Terminal PD: $V = \varepsilon - Ir = 4.5 - 0.776 \times 1.2 = 4.5 - 0.931 = 3.57 \mathrm{ V}$

If you get this wrong, revise: Internal Resistance and EMF

**Problem 3.** A nichrome wire of length $2.0 \mathrm{ m}$ and cross-sectional area
$5.0 \times 10^{-7} \mathrm{ m}^2$ has a resistance of $44 \Omega$. Find the resistivity of
Nichrome.

<summary>Solution</summary>

$$\rho = \frac{RA}{L} = \frac{44 \times 5.0 \times 10^{-7}}{2.0} = \frac{2.2 \times 10^{-5}}{2.0} = 1.1 \times 10^{-5} \Omega\,\mathrm{m}$$

If you get this wrong, revise: Ohm's Law and Resistance / Resistivity

**Problem 4.** Two resistors $R_1 = 8 \Omega$ and $R_2 = 24 \Omega$ are connected in parallel Across
a $12 \mathrm{ V}$ battery with negligible internal resistance. Find the total current And the
current through each resistor.

<summary>Solution</summary>

$$I_1 = \frac{12}{8} = 1.5 \mathrm{ A}, \quad I_2 = \frac{12}{24} = 0.5 \mathrm{ A}$$

$$I_{\mathrm{total}} = 1.5 + 0.5 = 2.0 \mathrm{ A}$$

Verify:
$R_{\mathrm{total}} = \frac{8 \times 24}{8 + 24} = 6 \Omega$$I = \frac{12}{6} = 2.0 \mathrm{ A}$

If you get this wrong, revise: Series and Parallel Circuits

**Problem 5.** A circuit has a $9 \mathrm{ V}$ battery with internal resistance $0.8 \Omega$
Connected to two $6 \Omega$ resistors in parallel. Find the current from the battery and the Power
dissipated in each resistor.

<summary>Solution</summary>

External resistance: $R_{\mathrm{ext}} = \frac{6 \times 6}{6 + 6} = 3 \Omega$

$$I = \frac{\varepsilon}{R_{\mathrm{ext}} + r} = \frac{9}{3 + 0.8} = \frac{9}{3.8} = 2.37 \mathrm{ A}$$

Terminal PD: $V = \varepsilon - Ir = 9 - 2.37 \times 0.8 = 9 - 1.89 = 7.11 \mathrm{ V}$

Current through each $6 \Omega$: $I_6 = \frac{7.11}{6} = 1.18 \mathrm{ A}$

Power in each: $P = I_6^2 \times 6 = 1.18^2 \times 6 = 8.38 \mathrm{ W}$

If you get this wrong, revise: Internal Resistance and EMF / Parallel Circuits

**Problem 6.** In a potential divider circuit, $R_1 = 10 \mathrm{ k}\Omega$ and
$R_2 = 5 \mathrm{ k}\Omega$ Are connected in series across a $15 \mathrm{ V}$ supply. Find the
output voltage across $R_2$. If a $10 \mathrm{ k}\Omega$ load is connected across $R_2$What is the
new output voltage?

<summary>Solution</summary>

Without load:
$V_{\mathrm{out}} = 15 \times \frac{5}{10 + 5} = 15 \times \frac{1}{3} = 5.0 \mathrm{ V}$

With load: $R_2$ in parallel with load $= \frac{5 \times 10}{5 + 10} = 3.33 \mathrm{ k}\Omega$

$$V_{\mathrm{out}} = 15 \times \frac{3.33}{10 + 3.33} = 15 \times \frac{3.33}{13.33} = 3.75 \mathrm{ V}$$

If you get this wrong, revise: Potential Divider

**Problem 7.** A $100 \mathrm{ W}$ light bulb and a $60 \mathrm{ W}$ light bulb are connected In
series across a $240 \mathrm{ V}$ supply. Find the current and the power dissipated in each Bulb.
Which bulb is brighter?

<summary>Solution</summary>

Resistance of each bulb at rated voltage:

$R_{100} = \frac{V^2}{P} = \frac{240^2}{100} = 576 \Omega$

$R_{60} = \frac{240^2}{60} = 960 \Omega$

In series: $R_{\mathrm{total}} = 576 + 960 = 1536 \Omega$

$$I = \frac{240}{1536} = 0.156 \mathrm{ A}$$

$P_{100} = I^2 R_{100} = 0.156^2 \times 576 = 14.0 \mathrm{ W}$

$P_{60} = I^2 R_{60} = 0.156^2 \times 960 = 23.4 \mathrm{ W}$

The $60 \mathrm{ W}$ bulb is brighter in series because it has higher resistance and dissipates More
power.

If you get this wrong, revise: Series and Parallel Circuits / Electrical Power

**Problem 8.** A student connects an ammeter (resistance $0.5 \Omega$) in series with a $10 \Omega$
resistor and a $6 \mathrm{ V}$ battery (internal resistance $1 \Omega$). Find the Reading on the
ammeter and the percentage error caused by the ammeter's resistance.

<summary>Solution</summary>

$$I = \frac{\varepsilon}{R_{\mathrm{ext}} + R_A + r} = \frac{6}{10 + 0.5 + 1} = \frac{6}{11.5} = 0.522 \mathrm{ A}$$

Ideal ammeter reading (zero resistance):
$I_{\mathrm{ideal}} = \frac{6}{10 + 1} = \frac{6}{11} = 0.545 \mathrm{ A}$

$$\mathrm{Percentage\ error} = \frac{0.545 - 0.522}{0.545} \times 100\% = 4.2\%$$

If you get this wrong, revise: Internal Resistance and EMF / Ohm's Law

**Problem 9.** A copper wire and a steel wire of the same length and diameter are connected in
Series. The resistivity of copper is $1.7 \times 10^{-8} \Omega\,\mathrm{m}$ and that of steel Is
$1.0 \times 10^{-7} \Omega\,\mathrm{m}$. Find the ratio of power dissipated in the steel Wire to
that in the copper wire.

<summary>Solution</summary>

Since they are in series, the same current flows through both.

$$\frac{P_{\mathrm{steel}}}{P_{\mathrm{copper}}} = \frac{I^2 R_{\mathrm{steel}}}{I^2 R_{\mathrm{copper}}} = \frac{R_{\mathrm{steel}}}{R_{\mathrm{copper}}} = \frac{\rho_{\mathrm{steel}}}{\rho_{\mathrm{copper}}} = \frac{1.0 \times 10^{-7}}{1.7 \times 10^{-8}} = 5.88$$

If you get this wrong, revise: Ohm's Law and Resistance / Resistivity

**Problem 10.** A battery of EMF $12 \mathrm{ V}$ and internal resistance $0.5 \Omega$ is Connected
to an external circuit consisting of a $4 \Omega$ resistor in series with a parallel Combination of
two $6 \Omega$ resistors. Find the total current and the terminal PD.

<summary>Solution</summary>

Parallel combination: $R_p = \frac{6 \times 6}{6 + 6} = 3 \Omega$

Total external resistance: $R_{\mathrm{ext}} = 4 + 3 = 7 \Omega$

$$I = \frac{\varepsilon}{R_{\mathrm{ext}} + r} = \frac{12}{7 + 0.5} = \frac{12}{7.5} = 1.60 \mathrm{ A}$$

$$V = \varepsilon - Ir = 12 - 1.60 \times 0.5 = 12 - 0.80 = 11.2 \mathrm{ V}$$

If you get this wrong, revise: Series and Parallel Circuits / Internal Resistance

For the A-Level treatment of this topic, see
[DC Circuits](https://alevel.wyattau.com/docs/physics/electricity/dc-circuits).

---

:::tip Diagnostic Test Ready to test your understanding of **Electrical Circuits**? The
[diagnostic test](/docs/dse/Physics/diagnostics/diag-electrical-circuits) contains the hardest
questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Electrical
Circuits with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Physics/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

---

## Derivations

### Derivation: Resistivity from Drift Velocity

For a conductor of length $L$Cross-sectional area $A$With $n$ charge carriers per unit volume Each
of charge $e$ and drift velocity $v_d$:

$$I = nAev_d$$

The electric field in the conductor is $E = V/L$. The drift velocity is proportional to the Electric
field: $v_d = \mu E = \mu V/L$Where $\mu$ is the mobility of the charge carriers.

$$I = nAe\mu\frac{V}{L} = \frac{nAe\mu}{L}V$$

Comparing with $V = IR$:

$$R = \frac{L}{nAe\mu}$$

Defining $\rho = \frac{1}{ne\mu}$ (resistivity):

$$R = \frac{\rho L}{A}$$

This shows that resistivity is an intrinsic property of the material (dependent on $n$$e$And $\mu$)
and is independent of the conductor's dimensions.

### Derivation: Maximum Power Transfer Theorem

A battery of EMF $\varepsilon$ and internal resistance $r$ is connected to an external load $R$. The
current is $I = \varepsilon / (R + r)$.

Power delivered to the load:

$$P = I^2 R = \frac{\varepsilon^2 R}{(R + r)^2}$$

To find the maximum, differentiate with respect to $R$ and set to zero:

$$\frac{dP}{dR} = \varepsilon^2 \frac{(R + r)^2 - 2R(R + r)}{(R + r)^4} = \varepsilon^2 \frac{R + r - 2R}{(R + r)^3} = \varepsilon^2 \frac{r - R}{(R + r)^3} = 0$$

This gives $R = r$. Therefore, maximum power is delivered to the load when the load resistance
Equals the internal resistance of the source.

Maximum power: $P_{\max} = \frac{\varepsilon^2 r}{(r + r)^2} = \frac{\varepsilon^2}{4r}$.

### Derivation: Potential Divider Equation

For two resistors $R_1$ and $R_2$ in series across supply voltage $V_{\mathrm{in}}$The current
Through both resistors is:

$$I = \frac{V_{\mathrm{in}}}{R_1 + R_2}$$

The voltage across $R_2$:

$$V_{\mathrm{out}} = IR_2 = \frac{V_{\mathrm{in}}}{R_1 + R_2} \times R_2 = V_{\mathrm{in}} \times \frac{R_2}{R_1 + R_2}$$

### Derivation: Energy Dissipated in a Resistor

When a current $I$ flows through a resistor $R$ for time $t$The charge that passes through is
$Q = It$. Each coulomb of charge loses energy $V = IR$ joules (the potential difference across The
resistor).

$$E = QV = (It)(IR) = I^2 Rt$$

This energy is dissipated as thermal energy in the resistor (Joule heating).

---

## Experimental Methods

### Determining Resistivity of a Wire

**Apparatus:** A long wire (e.g., constantan), a metre rule, a micrometer screw gauge, an ammeter, A
voltmeter, a variable resistor (rheostat), and a power supply.

**Procedure:**

1. Measure the diameter of the wire at several points using the micrometer. Calculate the mean
   diameter and hence the cross-sectional area $A = \pi d^2/4$.
2. Connect the wire in series with the ammeter, rheostat, and power supply. Connect the voltmeter in
   parallel across a known length $L$ of the wire.
3. Adjust the rheostat to obtain different values of current $I$ and record the corresponding
   voltage $V$.
4. Calculate $R = V/I$ for each pair.
5. Plot $R$ (y-axis) versus $L$ (x-axis). The gradient gives $R/L = \rho/A$So
   $\rho = \mathrm{gradient} \times A$.

**Precautions:**

- Keep the current low to avoid heating the wire (which would change its resistance).
- Measure the diameter at multiple points and orientations to account for non-uniformity.
- Use a thin wire to ensure measurable resistance.

**Sources of error:**

- Contact resistance at the connections.
- Temperature rise of the wire due to current flow.
- Reading error on the micrometer (zero error).

### Measuring Internal Resistance of a Cell

**Apparatus:** A cell of unknown EMF $\varepsilon$ and internal resistance $r$An ammeter, a
Voltmeter, a variable resistor, and connecting wires.

**Procedure:**

1. Connect the cell in series with the ammeter and variable resistor. Connect the voltmeter in
   parallel across the cell terminals.
2. For several values of the variable resistor, record the current $I$ and terminal PD $V$.
3. Plot $V$ (y-axis) versus $I$ (x-axis).
4. The y-intercept gives the EMF $\varepsilon$ (when $I = 0$$V = \varepsilon$).
5. The gradient of the line is $-r$ (since $V = \varepsilon - Ir$).

**Expected result:** A straight line with negative gradient. The steeper the gradient, the larger
The internal resistance.

### Investigating the I-V Characteristics of Components

**Apparatus:** Various components (ohmic resistor, filament lamp, diode), ammeter, voltmeter,
Variable resistor, and power supply.

**Procedure:**

1. Connect the component in series with the ammeter and variable resistor. Connect the voltmeter in
   parallel across the component.
2. For both positive and negative voltages, record pairs of $V$ and $I$.
3. Plot $I$ (y-axis) versus $V$ (x-axis) for each component.

**Expected results:**

- **Ohmic resistor:** Straight line through the origin (constant resistance).
- **Filament lamp:** Non-linear curve. Current increases more slowly at higher voltages because the
  filament heats up, increasing its resistance.
- **Diode:** Almost zero current for negative voltages (reverse bias). Current rises sharply above a
  threshold voltage (about $0.7 \mathrm{ V}$ for silicon) in forward bias.

---

## Data Analysis and Uncertainty

### Uncertainty in Resistance Measurements

When measuring $R = V/I$:

$$\frac{\Delta R}{R} = \sqrt{\left(\frac{\Delta V}{V}\right)^2 + \left(\frac{\Delta I}{I}\right)^2}$$

**Example:** Voltage $= (6.00 \pm 0.05) \mathrm{ V}$Current $= (0.50 \pm 0.01) \mathrm{ A}$:

$$R = \frac{6.00}{0.50} = 12.0 \Omega$$

$$\frac{\Delta R}{R} = \sqrt{\left(\frac{0.05}{6.00}\right)^2 + \left(\frac{0.01}{0.50}\right)^2} = \sqrt{0.0000694 + 0.0004} = \sqrt{0.000469} = 0.0217 = 2.2\%$$

$$\Delta R = 0.022 \times 12.0 = 0.26 \Omega$$

$$R = (12.0 \pm 0.3) \Omega$$

### Uncertainty in Resistivity

For $\rho = RA/L$:

$$\frac{\Delta\rho}{\rho} = \sqrt{\left(\frac{\Delta R}{R}\right)^2 + \left(2\frac{\Delta d}{d}\right)^2 + \left(\frac{\Delta L}{L}\right)^2}$$

Note the factor of 2 on the diameter uncertainty because $A = \pi d^2/4$ and $\rho \propto d^2$.

**Example:** $R = (10.0 \pm 0.3) \Omega$$d = (0.500 \pm 0.005) \mathrm{ mm}$
$L = (1.000 \pm 0.005) \mathrm{ m}$:

$$\frac{\Delta\rho}{\rho} = \sqrt{(0.030)^2 + (2 \times 0.010)^2 + (0.005)^2} = \sqrt{0.0009 + 0.0004 + 0.000025} = \sqrt{0.001325} = 0.0364 = 3.6\%$$

The diameter measurement is often the largest source of uncertainty in resistivity experiments
Because of the factor of 2.

---

## Additional Worked Examples

### Worked Example 10

A circuit consists of a $12 \mathrm{ V}$ battery (internal resistance $0.5 \Omega$) connected to
Three resistors: $R_1 = 4 \Omega$ in series with a parallel combination of $R_2 = 6 \Omega$ and
$R_3 = 12 \Omega$. Find the current through each resistor, the terminal PD, and the power Dissipated
in $R_3$.

<summary>Solution</summary>

Parallel combination: $\frac{1}{R_p} = \frac{1}{6} + \frac{1}{12} = \frac{3}{12} = \frac{1}{4}$So
$R_p = 4 \Omega$.

Total resistance: $R_{\mathrm{total}} = 4 + 4 = 8 \Omega$.

$$I_{\mathrm{total}} = \frac{\varepsilon}{R_{\mathrm{total}} + r} = \frac{12}{8 + 0.5} = \frac{12}{8.5} = 1.41 \mathrm{ A}$$

Terminal PD: $V = \varepsilon - I_{\mathrm{total}} r = 12 - 1.41 \times 0.5 = 11.3 \mathrm{ V}$

Current through $R_1$: $I_1 = 1.41 \mathrm{ A}$

Voltage across parallel combination:
$V_p = V - I_1 R_1 = 11.3 - 1.41 \times 4 = 11.3 - 5.65 = 5.65 \mathrm{ V}$

Current through $R_2$: $I_2 = \frac{5.65}{6} = 0.942 \mathrm{ A}$

Current through $R_3$: $I_3 = \frac{5.65}{12} = 0.471 \mathrm{ A}$

Verify: $I_2 + I_3 = 0.942 + 0.471 = 1.41 \mathrm{ A}$ (equals $I_1$).

Power in $R_3$: $P_3 = I_3^2 R_3 = (0.471)^2 \times 12 = 0.222 \times 12 = 2.66 \mathrm{ W}$

### Worked Example 11

A student uses a potentiometer to compare the EMFs of two cells. The potentiometer wire is
$100 \mathrm{ cm}$ long. Cell A gives a null point at $65.0 \mathrm{ cm}$ and cell B at
$42.5 \mathrm{ cm}$. If the EMF of cell A is $1.50 \mathrm{ V}$Find the EMF of cell B.

<summary>Solution</summary>

For a potentiometer, the EMF is proportional to the balancing length:

$$\frac{\varepsilon_B}{\varepsilon_A} = \frac{L_B}{L_A}$$

$$\varepsilon_B = \varepsilon_A \times \frac{L_B}{L_A} = 1.50 \times \frac{42.5}{65.0} = 1.50 \times 0.6538 = 0.981 \mathrm{ V}$$

### Worked Example 12

A $220 \mathrm{ V}$ mains supply is connected to a $10 \Omega$ heater and a $20 \Omega$ heater In
parallel. Find the total power drawn from the supply and the current through each heater.

<summary>Solution</summary>

Current through $10 \Omega$: $I_1 = \frac{220}{10} = 22.0 \mathrm{ A}$

Current through $20 \Omega$: $I_2 = \frac{220}{20} = 11.0 \mathrm{ A}$

Total current: $I = 22.0 + 11.0 = 33.0 \mathrm{ A}$

Total power: $P = VI = 220 \times 33.0 = 7260 \mathrm{ W} = 7.26 \mathrm{ kW}$

Verify:
$P_1 = \frac{220^2}{10} = 4840 \mathrm{ W}$$P_2 = \frac{220^2}{20} = 2420 \mathrm{ W}$$P = 4840 + 2420 = 7260 \mathrm{ W}$.

---

## Exam-Style Questions

### Question 1 (DSE Structured)

A student investigates the I-V characteristic of a filament lamp rated $12 \mathrm{ V}$
$6 \mathrm{ W}$.

(a) Calculate the resistance of the lamp at its rated voltage.

(b) The student records the following data:

| Voltage (V) | Current (mA) |
| ----------- | ------------ |
| 1.0         | 120          |
| 2.0         | 160          |
| 3.0         | 195          |
| 4.0         | 220          |
| 5.0         | 245          |

Calculate the resistance at each voltage and explain why the resistance increases with voltage.

(c) Sketch the I-V graph for this lamp and explain its shape.

(d) State why a filament lamp is a non-ohmic conductor.

<summary>Solution</summary>

(a) At rated conditions: $P = V^2/R \implies R = V^2/P = 144/6 = 24 \Omega$.

(b)

| Voltage (V) | Current (mA) | Resistance ($\Omega$) |
| ----------- | ------------ | --------------------- |
| 1.0         | 120          | $1.0/0.120 = 8.3$     |
| 2.0         | 160          | $2.0/0.160 = 12.5$    |
| 3.0         | 195          | $3.0/0.195 = 15.4$    |
| 4.0         | 220          | $4.0/0.220 = 18.2$    |
| 5.0         | 245          | $5.0/0.245 = 20.4$    |

The resistance increases with voltage because higher current causes greater heating of the Filament
($P = I^2R$). As the temperature increases, the metal ions in the filament vibrate more, Increasing
the scattering of conduction electrons and hence increasing the resistivity.

(c) The I-V graph is a curve that starts steep and flattens out (increasing gradient of $V/I$ With
increasing $V$). It passes through the origin but is not a straight line.

(d) A filament lamp is non-ohmic because its resistance is not constant; it changes with the Current
flowing through it (due to temperature dependence). The I-V graph is not a straight line.

### Question 2 (DSE Structured)

A battery has EMF $\varepsilon$ and internal resistance $r$. When connected to an external Resistor
$R_1 = 5.0 \Omega$The terminal PD is $5.5 \mathrm{ V}$ and the current is $1.1 \mathrm{ A}$. When
connected to $R_2 = 12.0 \Omega$The terminal PD is $7.2 \mathrm{ V}$.

(a) Calculate the EMF and internal resistance of the battery.

(b) Calculate the power dissipated in the external resistor when $R = 5.0 \Omega$.

(c) Determine the value of the external resistance that maximises the power delivered to it, and
Calculate this maximum power.

(d) Sketch a graph of power delivered to the external resistor versus the resistance $R$ Marking the
maximum power point.

<summary>Solution</summary>

(a) From the first case: $V_1 = \varepsilon - I_1 r$

$$5.5 = \varepsilon - 1.1r \quad (1)$$

From the second case: $I_2 = V_2/R_2 = 7.2/12.0 = 0.60 \mathrm{ A}$

$$7.2 = \varepsilon - 0.60r \quad (2)$$

Subtracting (2) from (1): $5.5 - 7.2 = -1.1r + 0.60r \implies -1.7 = -0.50r \implies r = 3.4 \Omega$

$$\varepsilon = 5.5 + 1.1 \times 3.4 = 5.5 + 3.74 = 9.24 \mathrm{ V}$$

(b) $P = I_1^2 R_1 = (1.1)^2 \times 5.0 = 1.21 \times 5.0 = 6.05 \mathrm{ W}$

(c) Maximum power transfer when $R = r = 3.4 \Omega$.

$$P_{\max} = \frac{\varepsilon^2}{4r} = \frac{(9.24)^2}{4 \times 3.4} = \frac{85.4}{13.6} = 6.28 \mathrm{ W}$$

(d) The graph of $P$ versus $R$ starts at zero ($R = 0$), rises to a maximum of $6.28 \mathrm{ W}$
At $R = 3.4 \Omega$Then gradually decreases towards zero as $R \to \infty$. The curve is Asymmetric,
peaking at $R = r$.

### Question 3 (DSE Structured)

(a) State Kirchhoff's two laws.

(b) In the circuit shown below, $\varepsilon_1 = 12 \mathrm{ V}$ (internal resistance $1 \Omega$),
$\varepsilon_2 = 6 \mathrm{ V}$ (internal resistance $0.5 \Omega$), $R_1 = 4 \Omega$ And
$R_2 = 6 \Omega$. The two batteries are connected in parallel with their positive terminals
Together, and the resistors are in series across the combination. Find the current through each
Battery and the terminal PD across the combination.

(c) Explain what happens if $\varepsilon_2$ is connected with its polarity reversed.

<summary>Solution</summary>

(a) **Kirchhoff's Current Law (KCL):** The algebraic sum of currents at any junction in a circuit Is
zero (current in = current out). This follows from conservation of charge.

**Kirchhoff's Voltage Law (KVL):** The algebraic sum of potential differences around any closed Loop
is zero (energy gained = energy lost). This follows from conservation of energy.

(b) The two batteries in parallel (same polarity) have equivalent EMF and internal resistance.
However, since they have different EMFs, we must use Kirchhoff's laws.

Let $I_1$ flow out of $\varepsilon_1$ and $I_2$ flow out of $\varepsilon_2$. The external Resistors
$R_1$ and $R_2$ are in series, total $R_{\mathrm{ext}} = 10 \Omega$.

At the junction: $I_1 + I_2 = I_{\mathrm{ext}}$ (current through external circuit)

For the loop through $\varepsilon_1$: $\varepsilon_1 - I_1 r_1 = V_{\mathrm{terminal}}$

For the loop through $\varepsilon_2$: $\varepsilon_2 - I_2 r_2 = V_{\mathrm{terminal}}$

Both batteries drive current through the same terminal PD $V$:

$$V = 12 - I_1 \times 1 = 6 - I_2 \times 0.5$$

Also: $I_1 + I_2 = V / 10$

From the two equations: $12 - I_1 = 6 - 0.5I_2 \implies I_1 - 0.5I_2 = 6 \quad (1)$

And:
$I_1 + I_2 = V/10 = (12 - I_1)/10 \implies 10I_1 + 10I_2 = 12 - I_1 \implies 11I_1 + 10I_2 = 12 \quad (2)$

From (1): $I_1 = 6 + 0.5I_2$. Substituting into (2):

$$11(6 + 0.5I_2) + 10I_2 = 12 \implies 66 + 5.5I_2 + 10I_2 = 12 \implies 15.5I_2 = -54$$

$$I_2 = -3.48 \mathrm{ A}$$

This negative value means current flows **into** $\varepsilon_2$ (it is being charged by
$\varepsilon_1$).

$$I_1 = 6 + 0.5(-3.48) = 6 - 1.74 = 4.26 \mathrm{ A}$$

$$V = 12 - 4.26 \times 1 = 7.74 \mathrm{ V}$$

(c) If $\varepsilon_2$ is reversed, both batteries would oppose each other. The net EMF would be
$12 - 6 = 6 \mathrm{ V}$And the total internal resistance would be $1 + 0.5 = 1.5 \Omega$. Current
would flow from $\varepsilon_1$ through $\varepsilon_2$ (in reverse), and the terminal PD would be
much lower.

### Question 4 (DSE Structured)

A student designs a circuit to measure an unknown resistance $R_x$ using a Wheatstone bridge
Arrangement. Three known resistors are used: $R_1 = 100 \Omega$$R_2 = 200 \Omega$And a Variable
resistor $R_3$. A galvanometer is connected between the junction of $R_1$ and $R_2$ And the junction
of $R_3$ and $R_x$.

(a) Explain the principle of the Wheatstone bridge.

(b) When the bridge is balanced (zero galvanometer deflection), $R_3 = 150 \Omega$. Calculate $R_x$.

(c) The student estimates the uncertainty in each known resistance as $\pm 1\%$. Calculate the
Percentage uncertainty in $R_x$.

(d) Explain two advantages of using a Wheatstone bridge compared with a simple voltmeter-ammeter
Method.

<summary>Solution</summary>

(a) A Wheatstone bridge is balanced when no current flows through the galvanometer. At balance, The
potential at both sides of the galvanometer is equal, giving:

$$\frac{R_1}{R_2} = \frac{R_3}{R_x}$$

This condition is independent of the supply voltage and galvanometer sensitivity.

(b) At balance:
$R_x = R_2 \times \frac{R_3}{R_1} = 200 \times \frac{150}{100} = 200 \times 1.5 = 300 \Omega$

(c)
$\frac{\Delta R_x}{R_x} = \sqrt{\left(\frac{\Delta R_2}{R_2}\right)^2 + \left(\frac{\Delta R_3}{R_3}\right)^2 + \left(\frac{\Delta R_1}{R_1}\right)^2} = \sqrt{(0.01)^2 + (0.01)^2 + (0.01)^2} = \sqrt{0.0003} = 0.0173 = 1.7\%$

$$\Delta R_x = 0.017 \times 300 = 5.1 \Omega$$

$$R_x = (300 \pm 5) \Omega$$

(d) Two advantages:

1. The Wheatstone bridge is a null method: the measurement is made when the galvanometer reads zero,
   eliminating errors due to the galvanometer's calibration or non-linearity.
2. The result is independent of the supply voltage and the galvanometer sensitivity, reducing
   systematic errors.

### Question 5 (DSE Structured)

A $12 \mathrm{ V}$ car battery has internal resistance $0.05 \Omega$. The starter motor draws
$200 \mathrm{ A}$ when cranking the engine.

(a) Calculate the terminal PD when the starter motor is operating.

(b) Calculate the power delivered to the starter motor and the power dissipated in the battery.

(c) A student connects a $0.01 \Omega$ jumper cable between the battery terminals by mistake.
Calculate the current that flows and explain why this is dangerous.

(d) Explain why the headlights dim when the starter motor is engaged.

<summary>Solution</summary>

(a) $V = \varepsilon - Ir = 12 - 200 \times 0.05 = 12 - 10 = 2.0 \mathrm{ V}$

(b) Power to starter motor: $P_{\mathrm{motor}} = VI = 2.0 \times 200 = 400 \mathrm{ W}$

Power dissipated in battery:
$P_r = I^2 r = (200)^2 \times 0.05 = 40000 \times 0.05 = 2000 \mathrm{ W}$

Total power from battery: $P = \varepsilon I = 12 \times 200 = 2400 \mathrm{ W}$ (equals
$400 + 2000$).

(c) Short circuit current:
$I = \frac{\varepsilon}{r + R_{\mathrm{jumper}}} = \frac{12}{0.05 + 0.01} = \frac{12}{0.06} = 200 \mathrm{ A}$

Power dissipated: $P = I^2 R = (200)^2 \times 0.06 = 2400 \mathrm{ W}$

This is dangerous because the jumper cable and battery terminals would rapidly overheat, possibly
Causing fire or explosion. The enormous current can melt the cable insulation and damage the
Battery.

### Extended Analysis: Thevenin Equivalent Circuit

Any two-terminal network can be replaced by an equivalent circuit consisting of a single EMF
$\varepsilon_{\mathrm{Th}}$ in series with a single resistance $R_{\mathrm{Th}}$.

$\varepsilon_{\mathrm{Th}}$ is the open-circuit voltage (voltage across the terminals when no Load
is connected).

$R_{\mathrm{Th}}$ is the resistance seen looking back into the terminals when all independent
Voltage sources are replaced by short circuits (and current sources by open circuits).

**Example:** A circuit has a $12 \mathrm{ V}$ battery ($r = 1 \Omega$) in series with a $4 \Omega$
resistor, all in parallel with a $6 \Omega$ resistor. Find the Thevenin equivalent Across the
$6 \Omega$ resistor terminals.

### Details

<summary>Solution</summary>

$\varepsilon_{\mathrm{Th}}$: Open-circuit voltage across the $6 \Omega$ resistor. With no load, The
$6 \Omega$ is in parallel with the series combination of battery ($12 \mathrm{ V}$$1 \Omega$) And
$4 \Omega$.

Voltage across $6 \Omega$ (by potential divider):
$V = 12 \times \frac{6}{1 + 4 + 6} = 12 \times \frac{6}{11} = 6.55 \mathrm{ V}$

$R_{\mathrm{Th}}$: Resistance seen from the $6 \Omega$ terminals with the battery shorted.

$R_{\mathrm{Th}} = 6 \parallel (1 + 4) = \frac{6 \times 5}{6 + 5} = \frac{30}{11} = 2.73 \Omega$

(d) When the starter motor engages, it draws a very large current ($200 \mathrm{ A}$). The large
Current causes a significant voltage drop across the internal resistance of the battery
($Ir = 200 \times 0.05 = 10 \mathrm{ V}$), so the terminal PD drops from $12 \mathrm{ V}$ to About
$2 \mathrm{ V}$. Since the headlights are connected in parallel across the battery Terminals, they
receive only about $2 \mathrm{ V}$ instead of $12 \mathrm{ V}$Causing them To dim significantly.
