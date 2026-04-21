---
title: Electrical Circuits
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: dse-physics-electrical-circuits
---

## Electric Current

### Definition

Electric current is the rate of flow of electric charge:

$$I = \frac{Q}{t}$$

The SI unit of current is the ampere (A), where $1 \mathrm{ A} = 1 \mathrm{ C/s}$.

For current in a metal conductor, the charge carriers are free electrons. In electrolytes, charge
carriers are positive and negative ions.

### Current and Drift Velocity

$$I = nAve$$

where $n$ is the number density of charge carriers (per $\mathrm{ m}^3$), $A$ is the cross-sectional
area, $v$ is the drift velocity, and $e$ is the charge of each carrier.

---

## Ohm's Law and Resistance

### Ohm's Law

For an ohmic conductor at constant temperature:

$$V = IR$$

A conductor is ohmic if its $I$-$V$ graph is a straight line through the origin.

### Resistivity

$$R = \frac{\rho L}{A}$$

where $\rho$ is the resistivity of the material ($\Omega\,\mathrm{m}$), $L$ is the length, and $A$
is the cross-sectional area.

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
resistance and the potential difference across the wire.

$$A = \pi r^2 = \pi(0.5 \times 10^{-3})^2 = 7.854 \times 10^{-7} \mathrm{ m}^2$$

$$R = \frac{\rho L}{A} = \frac{1.7 \times 10^{-8} \times 100}{7.854 \times 10^{-7}} = \frac{1.7 \times 10^{-6}}{7.854 \times 10^{-7}} = 2.16 \Omega$$

$$V = IR = 2 \times 2.16 = 4.33 \mathrm{ V}$$

---

## Series and Parallel Circuits

<PhetSimulation simulationId="circuit-construction-kit-dc" title="Circuit Construction Kit: DC" />

Build series and parallel circuits interactively and observe how current and voltage distribute
across components.

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

### Worked Example 2

Three resistors of $4 \Omega$, $6 \Omega$, and $12 \Omega$ are connected in parallel across a
$12 \mathrm{ V}$ supply. Find the total resistance and the current through each resistor.

$$\frac{1}{R_{\mathrm{total}}} = \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = \frac{3 + 2 + 1}{12} = \frac{6}{12} = \frac{1}{2}$$

$$R_{\mathrm{total}} = 2 \Omega$$

$$I_4 = \frac{12}{4} = 3 \mathrm{ A}, \quad I_6 = \frac{12}{6} = 2 \mathrm{ A}, \quad I_{12} = \frac{12}{12} = 1 \mathrm{ A}$$

Total current: $I = 3 + 2 + 1 = 6 \mathrm{ A}$

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
equals the energy lost in the resistors.

### Solving Circuit Problems with Kirchhoff's Laws

1. Assign currents to each branch (choose a direction; if the actual direction is opposite, the
   calculated current will be negative).
2. Apply KCL at each junction.
3. Apply KVL to each independent loop.
4. Solve the resulting system of equations.

### Worked Example 3

In a circuit with two loops, a $12 \mathrm{ V}$ battery is in the left loop with a $4 \Omega$ and a
$6 \Omega$ resistor in series. A $6 \mathrm{ V}$ battery is in the right loop with the $6 \Omega$
resistor (shared) and a $3 \Omega$ resistor. Find the current through each resistor.

Let $I_1$ flow clockwise in the left loop and $I_2$ flow clockwise in the right loop. Current
through the $6 \Omega$ resistor is $I_1 - I_2$.

Left loop (KVL): $12 - 4I_1 - 6(I_1 - I_2) = 0 \implies 12 - 10I_1 + 6I_2 = 0 \quad (1)$

Right loop (KVL): $6 - 6(I_1 - I_2) - 3I_2 = 0 \implies 6 - 6I_1 + 3I_2 = 0 \quad (2)$

From (2): $3I_2 = 6I_1 - 6 \implies I_2 = 2I_1 - 2$

Substituting into (1): $12 - 10I_1 + 6(2I_1 - 2) = 0 \implies 12 - 10I_1 + 12I_1 - 12 = 0$

$$2I_1 = 0 \implies I_1 = 0 \mathrm{ A}, \quad I_2 = -2 \mathrm{ A}$$

The current through the $4 \Omega$ resistor is $0 \mathrm{ A}$. The current through the $3 \Omega$
resistor is $2 \mathrm{ A}$ (counterclockwise). The current through the $6 \Omega$ resistor is
$2 \mathrm{ A}$ (upward).

---

## Internal Resistance and EMF

### Electromotive Force (EMF)

The EMF ($\varepsilon$) of a source is the total energy per unit charge that the source transfers to
charges passing through it:

$$\varepsilon = \frac{W}{Q}$$

The terminal potential difference (PD) across a source delivering current is less than the EMF
because some energy is lost overcoming the internal resistance $r$:

$$V = \varepsilon - Ir$$

When no current flows (open circuit): $V = \varepsilon$.

### Maximum Power Transfer

The power delivered to the external load $R$ is:

$$P = I^2 R = \left(\frac{\varepsilon}{R + r}\right)^2 R = \frac{\varepsilon^2 R}{(R + r)^2}$$

Maximum power is delivered when $R = r$.

### Worked Example 4

A battery has EMF $9 \mathrm{ V}$ and internal resistance $0.5 \Omega$. It is connected to an
external circuit of resistance $4 \Omega$. Find the current, terminal PD, and power dissipated in
the external circuit.

$$I = \frac{\varepsilon}{R + r} = \frac{9}{4 + 0.5} = \frac{9}{4.5} = 2 \mathrm{ A}$$

$$V = \varepsilon - Ir = 9 - 2 \times 0.5 = 8 \mathrm{ V}$$

$$P = I^2 R = 4 \times 4 = 16 \mathrm{ W}$$

---

## Electrical Energy and Power

### Energy

$$E = VIt = I^2 Rt = \frac{V^2}{R}t$$

The SI unit is the joule (J). Commercially, energy is measured in kilowatt-hours (kWh):

$$1 \mathrm{ kWh} = 3.6 \times 10^6 \mathrm{ J}$$

### Power

$$P = IV = I^2 R = \frac{V^2}{R}$$

The SI unit is the watt (W), where $1 \mathrm{ W} = 1 \mathrm{ J/s}$.

### Worked Example 5

A $220 \mathrm{ V}$ electric heater has a power rating of $2000 \mathrm{ W}$. Find the current it
draws, its resistance, and the cost of running it for 5 hours at $\$0.90$ per kWh.

$$I = \frac{P}{V} = \frac{2000}{220} = 9.09 \mathrm{ A}$$

$$R = \frac{V}{I} = \frac{220}{9.09} = 24.2 \Omega$$

Energy consumed:
$E = Pt = 2000 \times 5 \times 3600 = 3.6 \times 10^7 \mathrm{ J} = 10 \mathrm{ kWh}$

Cost: $10 \times 0.90 = \$9.00$

---

## Potential Divider

A potential divider (voltage divider) consists of two or more resistors in series across a supply
voltage. The output voltage across one resistor is a fraction of the input:

$$V_{\mathrm{out}} = V_{\mathrm{in}} \times \frac{R_2}{R_1 + R_2}$$

### Potentiometer

A potentiometer is a variable potential divider. A sliding contact divides the total resistance into
two parts, allowing continuous adjustment of $V_{\mathrm{out}}$ from $0$ to $V_{\mathrm{in}}$.

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

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** A cell of EMF $6 \mathrm{ V}$ and internal resistance $1.5 \Omega$ is connected to a
variable resistor $R$. Find the value of $R$ that maximises the power delivered to $R$, and
calculate this maximum power.

Maximum power transfer occurs when $R = r = 1.5 \Omega$.

$$P_{\max} = \frac{\varepsilon^2}{4r} = \frac{36}{4 \times 1.5} = \frac{36}{6} = 6.0 \mathrm{ W}$$

**Question 2:** In the circuit shown, $R_1 = 6 \Omega$ and $R_2 = 3 \Omega$ are in parallel, and
this combination is in series with $R_3 = 5 \Omega$. The total current from the $24 \mathrm{ V}$
supply is $3 \mathrm{ A}$. Find the current through each resistor and the power dissipated in $R_2$.

Parallel combination: $R_{12} = \frac{6 \times 3}{6 + 3} = 2 \Omega$

Total resistance: $R_{\mathrm{total}} = 2 + 5 = 7 \Omega$

Total voltage: $V_{\mathrm{total}} = IR = 3 \times 7 = 21 \mathrm{ V}$ (This is the terminal PD,
implying some internal resistance in the supply.)

Voltage across parallel combination: $V_{12} = IR_{12} = 3 \times 2 = 6 \mathrm{ V}$

Current through $R_1$: $I_1 = 6/6 = 1 \mathrm{ A}$

Current through $R_2$: $I_2 = 6/3 = 2 \mathrm{ A}$

Power in $R_2$: $P_2 = I_2^2 R_2 = 4 \times 3 = 12 \mathrm{ W}$

**Question 3:** A battery with unknown EMF $\varepsilon$ and internal resistance $r$ is connected to
a $10 \Omega$ resistor, giving a current of $0.5 \mathrm{ A}$. When the external resistance is
changed to $20 \Omega$, the current is $0.28 \mathrm{ A}$. Find $\varepsilon$ and $r$.

$$\varepsilon = I_1(R_1 + r) = 0.5(10 + r) = 5 + 0.5r \quad (1)$$

$$\varepsilon = I_2(R_2 + r) = 0.28(20 + r) = 5.6 + 0.28r \quad (2)$$

Equating: $5 + 0.5r = 5.6 + 0.28r \implies 0.22r = 0.6 \implies r = 2.73 \Omega$

$$\varepsilon = 5 + 0.5(2.73) = 6.36 \mathrm{ V}$$

**Question 4:** Three identical cells each of EMF $1.5 \mathrm{ V}$ and internal resistance
$0.4 \Omega$ are connected in series to a $4.6 \Omega$ resistor. Find the current and the terminal
PD across the combination.

$$\varepsilon_{\mathrm{total}} = 3 \times 1.5 = 4.5 \mathrm{ V}, \quad r_{\mathrm{total}} = 3 \times 0.4 = 1.2 \Omega$$

$$I = \frac{4.5}{4.6 + 1.2} = \frac{4.5}{5.8} = 0.776 \mathrm{ A}$$

Terminal PD: $V = \varepsilon - Ir = 4.5 - 0.776 \times 1.2 = 4.5 - 0.931 = 3.57 \mathrm{ V}$

**Question 5:** A potential divider consists of a $12 \mathrm{ V}$ supply, a $8 \mathrm{ k}\Omega$
resistor ($R_1$), and a $4 \mathrm{ k}\Omega$ resistor ($R_2$) in series. A voltmeter of resistance
$12 \mathrm{ k}\Omega$ is connected across $R_2$. Find the reading on the voltmeter (a) before and
(b) after it is connected.

(a) Without voltmeter: $V_2 = 12 \times \frac{4}{8 + 4} = 12 \times \frac{1}{3} = 4.0 \mathrm{ V}$

(b) With voltmeter across $R_2$: $R_2$ in parallel with
$R_V = \frac{4 \times 12}{4 + 12} = 3 \mathrm{ k}\Omega$

$$V_2 = 12 \times \frac{3}{8 + 3} = 12 \times \frac{3}{11} = 3.27 \mathrm{ V}$$

The voltmeter draws current and reduces the measured voltage (loading effect).

</details>
