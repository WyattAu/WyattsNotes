---
title: Circuits
description:
  'Qualifications Physics Circuits notes covering key definitions, core concepts, worked examples,
  and practice questions for exam preparation.'
date: 2026-05-05
tags:
  - ap
  - ap-physics
categories:
  - ap-physics
slug: 7-circuits
---

## Current

Electric current is the rate of flow of charge:

$$
I = \frac{dq}{dt}
$$

Current is a scalar (conventional current flows in the direction of positive charge flow). The SI
unit Is the ampere (A), where $1\,\text{A = 1\,\text{C/s$.

### Current Density

For a current distributed across a cross-sectional area $A$:

$$
J = \frac{I}{A}
$$

The current density is a vector: $\vec{J} = nq\vec{v}_d$Where $n$ is the charge carrier density and
$\vec{v}_d$ is the drift velocity.

### Microscopic View of Current

In a conductor with $n$ charge carriers per unit volume, each with charge $q$Moving with drift
velocity $v_d$:

$$
I = nqv_d A
$$

The drift velocity is very small (on the order of mm/s), even though the signal propagates at Nearly
the speed of light.

## Resistance and Ohm's Law

Ohm's law (for ohmic materials):

$$
V = IR
$$

The resistance of a uniform conductor:

$$
R = \rho \frac{L}{A}
$$

Where $\rho$ is the resistivity (not to be confused with charge density), $L$ is the length, and $A$
is The cross-sectional area.

### Temperature Dependence of Resistance

$$
R(T) = R_0[1 + \alpha(T - T_0)]
$$

Where $\alpha$ is the temperature coefficient of resistivity.

### Power in Resistive Elements

$$
P = IV = I^2R = \frac{V^2}{R}
$$

## Electromotive Force (EMF)

An ideal EMF source maintains a constant potential difference $V = \mathcal{E}$ across its
terminals. A Real battery has internal resistance $r$:

$$
V_{\text{terminal} = \mathcal{E} - Ir
$$

When the battery delivers current, the terminal voltage is less than the EMF.

## DC Circuits

### Resistors in Series and Parallel

**Series:** $R_{\text{eq} = R_1 + R_2 + \cdots + R_n$

The current is the same through all resistors. The voltage divides proportionally to resistance.

**Parallel:** $\dfrac{1}{R_{\text{eq}} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \cdots + \dfrac{1}{R_n}$

The voltage is the same across all resistors. The current divides inversely proportionally to
Resistance.

### Kirchhoff's Laws

**Junction Rule (KCL):** The sum of currents entering a junction equals the sum of currents leaving
it.

$$
\sum I_{\text{in} = \sum I_{\text{out}
$$

This is conservation of charge.

**Loop Rule (KVL):** The sum of potential changes around any closed loop is zero.

$$
\sum \Delta V = 0
$$

This is conservation of energy.

### Sign Conventions for KVL

- Crossing a resistor in the direction of current: $\Delta V = -IR$
- Crossing a resistor against the direction of current: $\Delta V = +IR$
- Crossing an EMF from the negative to the positive terminal: $\Delta V = +\mathcal{E}$
- Crossing an EMF from the positive to the negative terminal: $\Delta V = -\mathcal{E}$

:::info[Example: Multi-loop circuit]

A circuit has two batteries and three resistors. Battery 1 has $\mathcal{E}_1 = 12$ V with internal
Resistance $r_1 = 1\,\Omega$. Battery 2 has $\mathcal{E}_2 = 6$ V with internal resistance
$r_2 = 2\,\Omega$. Resistor $R_1 = 4\,\Omega$ is in series with Battery 1, and $R_2 = 3\,\Omega$
connects the two branches.

Assign loop currents $I_1$ (left loop, clockwise) and $I_2$ (right loop, clockwise).

**Left loop:** $\mathcal{E}_1 - I_1 r_1 - I_1 R_1 - (I_1 - I_2)R_2 = 0$

$$
12 - I_1(1) - I_1(4) - (I_1 - I_2)(3) = 0 \implies 12 - 8I_1 + 3I_2 = 0
$$

**Right loop:** $-\mathcal{E}_2 + I_2 r_2 + (I_2 - I_1)R_2 = 0$

$$
-6 + I_2(2) + (I_2 - I_1)(3) = 0 \implies -6 - 3I_1 + 5I_2 = 0
$$

From the second equation: $I_2 = (6 + 3I_1)/5$. Substituting into the first:

$$
12 - 8I_1 + 3\left(\frac{6 + 3I_1}{5}\right) = 0 \implies 12 - 8I_1 + \frac{18 + 9I_1}{5} = 0
$$

$$
60 - 40I_1 + 18 + 9I_1 = 0 \implies 78 = 31I_1 \implies I_1 = 2.516\,\text{A
$$

$$
I_2 = \frac{6 + 3(2.516)}{5} = \frac{13.548}{5} = 2.710\,\text{A
$$

:::

## RC Circuits

An RC circuit contains a resistor and a capacitor. The behavior is governed by a first-order ODE and
Exhibits exponential charging and discharging.

### Charging a Capacitor

With the switch closed at $t = 0$Apply KVL to the loop:

$$
\mathcal{E} - IR - \frac{Q}{C} = 0
$$

Since $I = dQ/dt$:

$$
\mathcal{E} - R\frac{dQ}{dt} - \frac{Q}{C} = 0
$$

This is a first-order linear ODE. Rearranging:

$$
\frac{dQ}{dt} + \frac{Q}{RC} = \frac{\mathcal{E}}{R}
$$

The integrating factor is $e^{t/(RC)}$:

$$
\frac{d}{dt}\left(Qe^{t/(RC)}\right) = \frac{\mathcal{E}}{R}e^{t/(RC)}
$$

Integrating with $Q(0) = 0$:

$$
Q(t) = C\mathcal{E}\left(1 - e^{-t/(RC)}\right) = Q_{\max}(1 - e^{-t/\tau})
$$

Where the **time constant** is $\tau = RC$.

The current during charging:

$$
I(t) = \frac{dQ}{dt} = \frac{\mathcal{E}}{R}e^{-t/\tau}
$$

### Discharging a Capacitor

With the battery removed and the capacitor initially charged to $Q_0$KVL gives:

$$
-IR - \frac{Q}{C} = 0 \implies R\frac{dQ}{dt} + \frac{Q}{C} = 0
$$

This is a separable ODE:

$$
\frac{dQ}{Q} = -\frac{dt}{RC} \implies \ln Q = -\frac{t}{RC} + C'
$$

With $Q(0) = Q_0$:

$$
Q(t) = Q_0 e^{-t/\tau}
$$

$$
I(t) = -\frac{dQ}{dt} = \frac{Q_0}{RC}e^{-t/\tau} = I_0 e^{-t/\tau}
$$

The negative sign indicates the current flows in the opposite direction during discharge.

### Energy in RC Circuits

The energy stored in the capacitor at any time during charging:

$$
U(t) = \frac{Q(t)^2}{2C} = \frac{C\mathcal{E}^2}{2}\left(1 - e^{-t/\tau}\right)^2
$$

The total energy supplied by the battery during charging:

$$
W_{\text{battery} = \int_0^\infty \mathcal{E}\, I\, dt = \frac{\mathcal{E}^2}{R}\int_0^\infty e^{-t/\tau}\, dt = \frac{\mathcal{E}^2}{R} \cdot RC = C\mathcal{E}^2
$$

The energy dissipated in the resistor:

$$
W_R = W_{\text{battery} - U_{\text{final} = C\mathcal{E}^2 - \frac{1}{2}C\mathcal{E}^2 = \frac{1}{2}C\mathcal{E}^2
$$

Exactly half the energy from the battery is stored in the capacitor and half is dissipated as heat
in The resistor, regardless of $R$.

### The Time Constant $\tau = RC$

- After one time constant ($t = \tau$): the capacitor is charged to $63.2\%$ of $Q_{\max}$.
- After three time constants ($t = 3\tau$): $95.0\%$ charged.
- After five time constants ($t = 5\tau$): $99.3\%$ charged (effectively fully charged).

During discharge, the capacitor retains $36.8\%$ of its charge after one time constant.

:::info[Example: RC circuit with numerical values]

A $5\,\mu\text{F$ capacitor is connected in series with a $200\,\text{k\Omega$ resistor and a $12$ V
Battery. Find (a) the time constant, (b) the charge after 1 s, (c) the current after 1 s, and (d)
the Time to reach 95% of maximum charge.

(a) $\tau = RC = (200 \times 10^3)(5 \times 10^{-6}) = 1.0\,\text{s$

(b)
$Q(1) = C\mathcal{E}(1 - e^{-1}) = (5 \times 10^{-6})(12)(1 - 0.368) = 60 \times 10^{-6} \times 0.632 = 37.9\,\mu\text{C$

(c) $I(1) = \frac{\mathcal{E}}{R}e^{-1} = \frac{12}{200000} \times 0.368 = 22.1\,\mu\text{A$

(d) $0.95 = 1 - e^{-t}$So $e^{-t} = 0.05$, $t = -\ln(0.05) = 3.0\,\text{s = 3\tau$.

:::

:::info[Example: Discharging through two parallel resistors]

A $10\,\mu\text{F$ capacitor charged to $50\,\mu\text{C$ discharges through
$R_1 = 100\,\text{k\Omega$ And $R_2 = 300\,\text{k\Omega$ in parallel. Find the current through
$R_1$ at $t = 0.5$ s.

Equivalent resistance:
$R_{\text{eq} = \frac{R_1 R_2}{R_1 + R_2} = \frac{100 \times 300}{400} = 75\,\text{k\Omega$.

Time constant: $\tau = R_{\text{eq}C = (75 \times 10^3)(10 \times 10^{-6}) = 0.75\,\text{s$.

Total current at $t = 0.5$ s:

$$
I(0.5) = \frac{Q_0}{R_{\text{eq}C}e^{-0.5/0.75} = \frac{50 \times 10^{-6}}{0.75}e^{-0.667} = 66.7 \times 10^{-6} \times 0.513 = 34.2\,\mu\text{A
$$

Current through $R_1$ (current divides inversely with resistance):

$$
I_1 = I \cdot \frac{R_2}{R_1 + R_2} = 34.2 \times \frac{300}{400} = 25.7\,\mu\text{A
$$

:::

## Ammeters and Voltmeters

- **Ammeter:** Measures current. Connected in series. Ideal ammeter has zero resistance.
- **Voltmeter:** Measures potential difference. Connected in parallel. Ideal voltmeter has infinite
  resistance.

A real ammeter has small resistance $R_A$Which slightly increases the total resistance of the
circuit. A real voltmeter has finite resistance $R_V$Which draws a small current and slightly
reduces the Voltage across the measured component.

## Common Pitfalls

1. **Confusing EMF with terminal voltage.** $\mathcal{E} = V_{\text{terminal} + Ir$. When the
   battery is delivering current, $V_{\text{terminal} < \mathcal{E}$. When the battery is being
   charged, $V_{\text{terminal} > \mathcal{E}$.
2. **Incorrect sign conventions in Kirchhoff's loop rule.** Be consistent: decide on a loop
   direction, then apply the sign rules rigorously. Crossing a resistor with the current gives
   $-IR$; against gives $+IR$.
3. **Misidentifying series and parallel elements.** Two elements are in series only if the same
   current flows through both. Two elements are in parallel only if the same voltage is across both.
   When in doubt, redraw the circuit.
4. **Forgetting that the time constant determines the rate, not the final values.** $\tau = RC$
   controls how fast the capacitor charges or discharges. The final charge $Q_{\max} = C\mathcal{E}$
   depends only on $C$ and $\mathcal{E}$Not on $R$.
5. **Assuming current through an open switch or no current through a capacitor at steady state.** At
   steady state (DC), a fully charged capacitor acts as an open circuit (no current through it), and
   an inductor acts as a short circuit.
6. **Incorrectly applying the junction rule.** The junction rule applies at every node, not just at
   T-junctions. Count all currents entering and leaving each node.
7. **Mixing up power formulas.** $P = IV$ always. $P = I^2R$ and $P = V^2/R$ apply only to resistive
   elements, not to ideal EMF sources.
8. **Ignoring internal resistance of batteries.** In many textbook problems the internal resistance
   is negligible, but when it is given, it must be included in the circuit analysis.

## Practice Questions

1. A battery with $\mathcal{E} = 24$ V and internal resistance $r = 0.5\,\Omega$ is connected to an
   external circuit of resistance $R = 11.5\,\Omega$. Find the terminal voltage and the power
   dissipated in the external resistance.

2. Three resistors $R_1 = 6\,\Omega$$R_2 = 12\,\Omega$$R_3 = 4\,\Omega$ are connected to a $12$ V
   battery. Find the current through each resistor when (a) all three are in series and (b) $R_1$
   and $R_2$ are in parallel, and the combination is in series with $R_3$.

3. Using Kirchhoff's laws, find the current through each resistor in a circuit with two loops:
   $\mathcal{E}_1 = 10$ V, $\mathcal{E}_2 = 4$ V,
   $R_1 = 2\,\Omega$$R_2 = 4\,\Omega$$R_3 = 6\,\Omega$. Battery 1 and $R_1$ are in the left branch;
   $R_3$ is the middle branch; Battery 2 and $R_2$ are in the right branch.

4. A $2\,\mu\text{F$ capacitor in series with a $500\,\text{k\Omega$ resistor is connected to a $20$
   V battery at $t = 0$. Find (a) the charge and current at $t = 0.5$ s, (b) the energy stored in
   the capacitor at $t = 2$ s, and (c) the total energy delivered by the battery.

5. A $4\,\mu\text{F$ capacitor is charged to $100\,\mu\text{C$ and then disconnected. It is then
   connected across a $1\,\text{M\Omega$ resistor. Find (a) the initial current, (b) the charge
   after 3 s, and (c) the time for the charge to drop to $10\,\mu\text{C$.

6. In an RC charging circuit, the capacitor reaches 90% of its maximum charge in 5 s. If the
   capacitance is $20\,\mu\text{F$Find the resistance.

<details>
<summary>Question 7: AP Exam-Style -- RC circuit with a switch</summary>

In the circuit shown, $R_1 = 10\,\text{k\Omega$$R_2 = 20\,\text{k\Omega$$C = 5\,\mu\text{F$And
$\mathcal{E} = 30$ V. Switch S is closed at $t = 0$ with the capacitor initially uncharged. Find (a)
the Initial current through the battery, (b) the current through the battery at steady state, (c)
the charge On the capacitor at steady state, and (d) the time constant of the circuit.

The circuit has the battery and $R_1$ in series, with $R_2$ and $C$ in parallel connected across
$R_1$.

</details>

<details>
<summary>Answer</summary>

(a) At $t = 0$The capacitor is uncharged ($V_C = 0$), so it acts as a short circuit. $R_2$ is in
Parallel with a short circuit, so all current flows through the capacitor branch. The equivalent
Resistance seen by the battery is just $R_1 = 10\,\text{k\Omega$.

$$I_{\text{initial} = \frac{\mathcal{E}}{R_1} = \frac{30}{10000} = 3.0\,\text{mA$$

(b) At steady state, the capacitor is fully charged and acts as an open circuit. The current flows
Through $R_1$ and $R_2$ in series.

$$I_{\text{steady} = \frac{\mathcal{E}}{R_1 + R_2} = \frac{30}{10000 + 20000} = 1.0\,\text{mA$$

(c) At steady state, the voltage across the capacitor equals the voltage across $R_2$:

$$V_C = I_{\text{steady} R_2 = (0.001)(20000) = 20\,\text{V$$

$$Q = CV_C = (5 \times 10^{-6})(20) = 100\,\mu\text{C$$

(d) The time constant is found by Thevenin analysis. The Thevenin resistance seen by the capacitor
is
$R_{\text{Th} = R_1 \| R_2 = \frac{R_1 R_2}{R_1 + R_2} = \frac{10 \times 20}{30} = 6.67\,\text{k\Omega$.

$$\tau = R_{\text{Th} C = (6670)(5 \times 10^{-6}) = 0.0333\,\text{s = 33.3\,\text{ms$$

</details>

<details>
<summary>Question 8: AP Exam-Style -- Energy analysis in an RC circuit</summary>

A $50\,\mu\text{F$ capacitor is charged through a $100\,\Omega$ resistor by a $10$ V battery. (a)
Find The total energy delivered by the battery. (b) Find the total energy dissipated in the
resistor. (c) Find The energy stored in the capacitor at steady state. Verify that energy is
conserved.

</details>

<details>
<summary>Answer</summary>

(a)
$W_{\text{battery} = \int_0^\infty \mathcal{E}\, I\, dt = \frac{\mathcal{E}^2}{R}\int_0^\infty e^{-t/(RC)}\, dt = \frac{\mathcal{E}^2}{R} \cdot RC = C\mathcal{E}^2$

$$W_{\text{battery} = (50 \times 10^{-6})(10)^2 = 5.0 \times 10^{-3}\,\text{J = 5.0\,\text{mJ$$

(b)
$W_R = W_{\text{battery} - U_{\text{cap} = C\mathcal{E}^2 - \frac{1}{2}C\mathcal{E}^2 = \frac{1}{2}C\mathcal{E}^2$

$$W_R = \frac{1}{2}(50 \times 10^{-6})(100) = 2.5 \times 10^{-3}\,\text{J = 2.5\,\text{mJ$$

(c) $U_{\text{cap} = \frac{1}{2}CV^2 = \frac{1}{2}(50 \times 10^{-6})(10)^2 = 2.5\,\text{mJ$

Verification: $W_{\text{battery} = W_R + U_{\text{cap} = 2.5 + 2.5 = 5.0\,\text{mJ$. Energy is
Conserved.

</details>

## Summary

This topic covers the fundamental principles of circuits, including the key equations, experimental
methods, and applications relevant to the specification.

**Key concepts include:**

- fundamental principles and equations
- SI units and dimensional analysis
- mathematical modelling of physical phenomena
- experimental techniques and measurement
- applications to real-world problems

A strong understanding of these principles, combined with regular practice of quantitative problems
and past paper questions, is essential for success in examinations.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
