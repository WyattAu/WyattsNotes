---
title: DC Circuits
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: dc-circuits
---

## DC Circuits

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

## 1. Kirchhoff's Laws

### Kirchhoff's First Law (Current Law)

**Definition.** Kirchhoff's first law states that the algebraic sum of currents entering any
junction in an electrical circuit is zero, reflecting the conservation of electric charge:
$\sum I = 0$.

**The sum of currents entering a junction equals the sum of currents leaving it.**

$$\sum I_{\text{in}} = \sum I_{\text{out}}$$

**Derivation from charge conservation.** Charge cannot accumulate at a junction (in steady state).
The rate of charge flowing in must equal the rate flowing out:

$$\frac{dQ_{\text{in}}}{dt} = \frac{dQ_{\text{out}}}{dt} \implies \sum I_{\text{in}} = \sum I_{\text{out}}$$

$\square$

### Kirchhoff's Second Law (Voltage Law)

**Definition.** Kirchhoff's second law states that the algebraic sum of potential differences around
any closed loop in an electrical circuit is zero, reflecting the conservation of energy:
$\sum \mathcal{E} = \sum V$.

**The sum of e.m.f.s around any closed loop equals the sum of p.d.s around that loop.**

$$\sum \mathcal{E} = \sum V$$

**Derivation from energy conservation.** As a unit charge moves around a closed loop, the total
energy gained from sources must equal the total energy lost to components. Otherwise, energy would
be created or destroyed:

$$\frac{W_{\text{gained}}}{Q} = \frac{W_{\text{lost}}}{Q} \implies \sum \mathcal{E} = \sum IR$$

$\square$

:::tip Exam Technique When applying Kirchhoff's second law, choose a direction around the loop and
stick to it. E.m.f.s are positive if they drive current in your chosen direction; p.d.s are positive
if current flows through the resistor in your chosen direction. :::

## 2. Series and Parallel Resistors

### Series Combination

For resistors $R_1, R_2, \ldots, R_n$ in series, the same current $I$ flows through each.

By Kirchhoff's second law:

$$V = V_1 + V_2 + \cdots + V_n = IR_1 + IR_2 + \cdots + IR_n$$

$$V = I(R_1 + R_2 + \cdots + R_n)$$

The equivalent resistance is:

$$\boxed{R_{\text{series}} = R_1 + R_2 + \cdots + R_n}$$

### Parallel Combination

For resistors in parallel, the same p.d. $V$ is across each.

By Kirchhoff's first law:

$$I = I_1 + I_2 + \cdots + I_n = \frac{V}{R_1} + \frac{V}{R_2} + \cdots + \frac{V}{R_n}$$

$$I = V\left(\frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}\right)$$

The equivalent resistance satisfies $V/R_{\text{parallel}} = I$:

$$\boxed{\frac{1}{R_{\text{parallel}}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}}$$

For two resistors in parallel:

$$R_{\text{parallel}} = \frac{R_1 R_2}{R_1 + R_2}$$

**Proof.** $\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{R_1 + R_2}{R_1 R_2}$, hence
$R = \frac{R_1 R_2}{R_1 + R_2}$. $\square$

**Intuition.** Adding resistors in series always increases total resistance (current must pass
through all of them). Adding resistors in parallel always decreases total resistance (current has
more paths to flow through). The parallel equivalent is always less than the smallest individual
resistor.

## 3. Potential Dividers

**Definition.** A potential divider is a circuit consisting of two or more resistors connected in
series across a voltage supply, which produces an output voltage that is a fraction of the input
voltage, determined by the ratio of resistances.

A **potential divider** consists of two or more resistors in series across a voltage supply. The
voltage is divided in proportion to the resistances.

For two resistors $R_1$ and $R_2$ in series across supply $V_{\text{in}}$:

$$V_{\text{out}} = V_{\text{in}} \times \frac{R_2}{R_1 + R_2}$$

**Derivation.** The current through both resistors is $I = V_{\text{in}}/(R_1 + R_2)$. The p.d.
across $R_2$ is:

$$V_{\text{out}} = IR_2 = \frac{V_{\text{in}}}{R_1 + R_2} \cdot R_2 = V_{\text{in}} \cdot \frac{R_2}{R_1 + R_2}$$

$\square$

### Potentiometer

A **potentiometer** is a continuous potential divider — a single resistive track with a sliding
contact. It can provide any output voltage from 0 to $V_{\text{in}}$.

### Potential Divider with a Sensor

A thermistor or LDR can replace one resistor, creating a voltage that varies with temperature or
light intensity:

$$V_{\text{out}} = V_{\text{in}} \cdot \frac{R_{\text{sensor}}}{R_{\text{fixed}} + R_{\text{sensor}}}$$

:::warning Common Pitfall A potential divider circuit loaded by connecting a component across $R_2$
changes the effective resistance. The simple divider formula no longer applies — you must
recalculate the parallel combination of $R_2$ and the load. :::

## 4. Internal Resistance

**Definition.** Internal resistance $r$ is the resistance within a power source that opposes the
flow of current and causes energy to be dissipated within the source, reducing the terminal
potential difference below the e.m.f.

**Definition.** Terminal potential difference $V$ is the potential difference across the terminals
of a power source when it is delivering current, equal to the e.m.f. minus the potential difference
across the internal resistance: $V = \mathcal{E} - Ir$.

Real power sources have **internal resistance** $r$, which causes the terminal p.d. to drop as
current increases.

### Derivation of $V = \mathcal{E} - Ir$

Consider a cell of e.m.f. $\mathcal{E}$ and internal resistance $r$ connected to an external circuit
of resistance $R$. The total resistance in the circuit is $R + r$.

$$I = \frac{\mathcal{E}}{R + r}$$

The terminal p.d. (voltage across the external circuit) is:

$$V = IR = \frac{\mathcal{E}R}{R + r} = \mathcal{E}\left(\frac{R}{R+r}\right)$$

Alternatively, by Kirchhoff's second law around the full circuit:

$$\mathcal{E} = V + Ir \implies \boxed{V = \mathcal{E} - Ir}$$

The "lost volts" is $Ir$ — the p.d. across the internal resistance.

**Maximum power transfer.** The power delivered to the load is:

$$P = I^2R = \frac{\mathcal{E}^2 R}{(R+r)^2}$$

Differentiating with respect to $R$ and setting $dP/dR = 0$ gives $R = r$. Maximum power is
delivered when the load resistance equals the internal resistance.

### Measuring Internal Resistance

**Method 1: Vary the load.** Measure $V$ and $I$ for several different values of $R$. Plot $V$
against $I$.

$$V = \mathcal{E} - Ir$$

This is a straight line with gradient $= -r$ and $y$-intercept $= \mathcal{E}$.

**Method 2: Direct calculation.** With two measurements $(V_1, I_1)$ and $(V_2, I_2)$:

$$r = \frac{V_1 - V_2}{I_2 - I_1}$$

## 5. Thevenin's Theorem

**Thevenin's Theorem.** Any linear circuit with two terminals can be replaced by an equivalent
circuit consisting of:

- A single voltage source $V_{\text{Th}}$ (the Thevenin voltage)
- A single series resistance $R_{\text{Th}}$ (the Thevenin resistance)

### Finding $V_{\text{Th}}$

The Thevenin voltage is the open-circuit voltage between the two terminals (i.e., the voltage when
nothing is connected across them).

### Finding $R_{\text{Th}}$

The Thevenin resistance is the resistance between the two terminals when all independent voltage
sources are replaced by short circuits (and current sources by open circuits).

**Intuition.** Thevenin's theorem is powerful because it lets you simplify any complex circuit into
a simple source-resistor pair. Once you know $V_{\text{Th}}$ and $R_{\text{Th}}$, you can predict
the behaviour of the circuit for any load.

<details>
<summary>Example: Thevenin Equivalent</summary>
<p>

Find the Thevenin equivalent of a circuit with a 12 V battery in series with two parallel resistors
$R_1 = 6\,\Omega$ and $R_2 = 3\,\Omega$, across terminals A and B that are across $R_2$.

**Answer.** $V_{\text{Th}}$ = open-circuit voltage across $R_2$ = potential divider:
$V_{\text{Th}} = 12 \times \frac{3}{6+3} = 4.0$ V.

$R_{\text{Th}}$ = resistance between A and B with the 12 V source shorted:
$R_{\text{Th}} = R_1 \| R_2 = \frac{6 \times 3}{6+3} = 2.0$ $\Omega$.

The circuit is equivalent to a 4.0 V source with $2.0\,\Omega$ internal resistance.

</p>
</details>

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Three resistors of 4 $\Omega$, 6 $\Omega$, and 12 $\Omega$ are connected in parallel. Calculate the
equivalent resistance.

**Answer.**
$\frac{1}{R} = \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = \frac{3 + 2 + 1}{12} = \frac{6}{12} = \frac{1}{2}$.
$R = 2.0$ $\Omega$.

<b>If you get this wrong, revise:</b> [Parallel Combination](#parallel-combination)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A potential divider consists of a 10 k$\Omega$ and a 5.0 k$\Omega$ resistor in series across a 9.0 V
supply. Calculate the output voltage across the 5.0 k$\Omega$ resistor.

**Answer.** $V_{\text{out}} = 9.0 \times \frac{5.0}{10 + 5.0} = 9.0 \times \frac{1}{3} = 3.0$ V.

<b>If you get this wrong, revise:</b> [Potential Dividers](#3-potential-dividers)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A cell of e.m.f. 12 V and internal resistance 0.50 $\Omega$ is connected to a 5.5 $\Omega$ external
resistor. Calculate: (a) the current, (b) the terminal p.d., (c) the power dissipated in the
external resistor.

**Answer.** (a) $I = \frac{\mathcal{E}}{R + r} = \frac{12}{5.5 + 0.5} = \frac{12}{6.0} = 2.0$ A.

(b) $V = \mathcal{E} - Ir = 12 - 2.0 \times 0.50 = 11$ V.

(c) $P = I^2R = 4.0 \times 5.5 = 22$ W.

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

Using Kirchhoff's laws, find the current in each branch of a circuit where a 12 V battery and a 6 V
battery (opposing) are connected with resistors of 2 $\Omega$ and 4 $\Omega$ as follows: 12 V
battery in series with 2 $\Omega$ (branch 1), 6 V battery in series with 4 $\Omega$ (branch 2), both
branches sharing common nodes.

**Answer.** Let $I_1$ flow through branch 1 (12 V side) and $I_2$ through branch 2 (6 V side), with
$I_3 = I_1 + I_2$ flowing in the connecting wire.

Loop 1 (12 V, 2 $\Omega$): $12 = 2I_1 + 4(I_1 + I_2) = 6I_1 + 4I_2$ ... (i).

Loop 2 (6 V, 4 $\Omega$): $6 = 4(I_1 + I_2) + ... $

Let me use a clearer setup. Both branches meet at nodes A and B. Branch 1: 12 V → 2 $\Omega$. Branch
2: 6 V → 4 $\Omega$.

By KVL around the outer loop (travelling through branch 1 then back through branch 2):
$12 - 2I_1 - 4I_2 + 6 = 0$ (assuming 6 V opposes in the return path). Actually, the sign depends on
orientation. Let's say both batteries have their positive terminals facing the same direction
(towards node A):

Loop: $12 - 2I_1 + 6 - 4I_2 = 0$ ... wait, this depends on the circuit topology.

Assuming the batteries are in parallel (both driving current in the same direction) with their
internal loops: $12 - 2I_1 = 6 - 4I_2 = V_{AB}$.

So $12 - 2I_1 = 6 - 4I_2 \implies 6 = 2I_1 - 4I_2 \implies 3 = I_1 - 2I_2$ ... (i).

KCL: $I_1 + I_2 = I_3$ (current into the external circuit). Without an external load between the
common nodes, $I_3 = 0$, so $I_2 = -I_1$.

From (i): $3 = I_1 + 2I_1 = 3I_1$. $I_1 = 1.0$ A. $I_2 = -1.0$ A (current flows opposite to assumed
direction in branch 2).

This means the 12 V battery is driving current through the 6 V battery (charging it).

<b>If you get this wrong, revise:</b> [Kirchhoff's Laws](#1-kirchhoffs-laws)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A battery with unknown e.m.f. and internal resistance is connected to a variable resistor. When
$R = 4.0\,\Omega$, $I = 1.5$ A. When $R = 9.0\,\Omega$, $I = 0.80$ A. Find $\mathcal{E}$ and $r$.

**Answer.** $\mathcal{E} = I_1(R_1 + r) = 1.5(4.0 + r) = 6.0 + 1.5r$ ... (i).

$\mathcal{E} = I_2(R_2 + r) = 0.80(9.0 + r) = 7.2 + 0.80r$ ... (ii).

$6.0 + 1.5r = 7.2 + 0.80r \implies 0.70r = 1.2 \implies r = 1.71\,\Omega$.

$\mathcal{E} = 6.0 + 1.5(1.71) = 6.0 + 2.57 = 8.57$ V $\approx 8.6$ V.

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Find the Thevenin equivalent of a voltage divider with $R_1 = 8\,\Omega$ and $R_2 = 4\,\Omega$
across a 24 V supply, with terminals across $R_2$.

**Answer.** $V_{\text{Th}} = 24 \times \frac{4}{8+4} = 24 \times \frac{1}{3} = 8.0$ V.

$R_{\text{Th}} = R_1 \| R_2 = \frac{8 \times 4}{8+4} = \frac{32}{12} = 2.67\,\Omega$.

<b>If you get this wrong, revise:</b> [Thevenin's Theorem](#5-thevenins-theorem)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Two 6 $\Omega$ resistors are connected in parallel and this combination is connected in series with
a 3 $\Omega$ resistor across a 12 V supply. Calculate: (a) the total resistance, (b) the current
from the supply, (c) the p.d. across the parallel combination.

**Answer.** (a) $R_{\parallel} = \frac{6 \times 6}{6+6} = 3\,\Omega$.
$R_{\text{total}} = 3 + 3 = 6\,\Omega$.

(b) $I = 12/6 = 2.0$ A.

(c) $V_{\parallel} = IR_{\parallel} = 2.0 \times 3 = 6.0$ V.

<b>If you get this wrong, revise:</b>
[Series and Parallel Resistors](#2-series-and-parallel-resistors)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A 9.0 V battery with internal resistance $0.80\,\Omega$ is connected to a lamp rated 6.0 V, 3.0 W.
Calculate the current and determine whether the lamp operates at its rated voltage.

**Answer.** Lamp resistance at rated conditions: $R_L = V^2/P = 36/3.0 = 12\,\Omega$.

Actual current: $I = \frac{9.0}{12 + 0.80} = \frac{9.0}{12.8} = 0.703$ A.

Terminal p.d.: $V = IR_L = 0.703 \times 12 = 8.44$ V. This exceeds the rated 6.0 V, so the lamp is
over-driven (it would likely burn out).

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

In the circuit below, find the current through each resistor: $R_1 = 2\,\Omega$ and
$R_2 = 4\,\Omega$ in parallel, connected in series with $R_3 = 3\,\Omega$, across a 10 V supply.

**Answer.** $R_{\parallel} = \frac{2 \times 4}{2+4} = \frac{8}{6} = 1.33\,\Omega$.
$R_{\text{total}} = 1.33 + 3 = 4.33\,\Omega$.

$I_{\text{total}} = 10/4.33 = 2.31$ A.

$V_{\parallel} = 2.31 \times 1.33 = 3.07$ V.

$I_1 = V_{\parallel}/R_1 = 3.07/2 = 1.54$ A. $I_2 = 3.07/4 = 0.768$ A. Check: $1.54 + 0.768 = 2.31$
A. $\checkmark$

<b>If you get this wrong, revise:</b>
[Series and Parallel Resistors](#2-series-and-parallel-resistors)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

Explain why a voltmeter should have a very high resistance and an ammeter should have a very low
resistance.

**Answer.** A voltmeter is connected in parallel across a component. To avoid drawing significant
current and altering the circuit, its resistance should be very high (ideally infinite). An ammeter
is connected in series with a component. To avoid dropping significant voltage and altering the
circuit, its resistance should be very low (ideally zero).

<b>If you get this wrong, revise:</b> [Kirchhoff's Laws](#1-kirchhoffs-laws)

</p>
</details>

<details>
<summary>Problem 11</summary>
<p>

A potential divider circuit uses a 15 V supply with $R_1 = 10\,\text{k}\Omega$ and a thermistor as
$R_2$. The thermistor has resistance 2000 $\Omega$ at $25°$C and 500 $\Omega$ at $50°$C. Calculate
$V_{\text{out}}$ at each temperature.

**Answer.** At $25°$C:
$V_{\text{out}} = 15 \times \frac{2000}{10000 + 2000} = 15 \times \frac{2}{12} = 2.50$ V.

At $50°$C:
$V_{\text{out}} = 15 \times \frac{500}{10000 + 500} = 15 \times \frac{500}{10500} = 0.714$ V.

<b>If you get this wrong, revise:</b> [Potential Dividers](#3-potential-dividers)

</p>
</details>

<details>
<summary>Problem 12</summary>
<p>

A cell of e.m.f. $\mathcal{E}$ and internal resistance $r$ delivers maximum power to an external
load. Prove that maximum power is delivered when $R = r$, and find the efficiency at this condition.

**Answer.** $P = \left(\frac{\mathcal{E}}{R+r}\right)^2 R = \frac{\mathcal{E}^2 R}{(R+r)^2}$.

$\frac{dP}{dR} = \mathcal{E}^2 \cdot \frac{(R+r)^2 - 2R(R+r)}{(R+r)^4} = \mathcal{E}^2 \cdot \frac{r - R}{(R+r)^3}$.

Setting $\frac{dP}{dR} = 0$: $R = r$. (This is a maximum since $dP/dR > 0$ for $R < r$ and $< 0$ for
$R > r$.)

At $R = r$: $I = \mathcal{E}/(2r)$. Power to load:
$P = (\mathcal{E}/2r)^2 \cdot r = \mathcal{E}^2/(4r)$. Total power from cell:
$\mathcal{E} \cdot \mathcal{E}/(2r) = \mathcal{E}^2/(2r)$. Efficiency
$= P_{\text{load}}/P_{\text{total}} = 1/2 = 50\%$.

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</p>
</details>

:::

:::
