---
title: DC Circuits
description:
  'A-Level Physics DC Circuits notes covering key definitions, core concepts, worked examples, and
  practice questions for systematic revision and exam readiness.'
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

<PhetSimulation simulationId="circuit-construction-kit-dc" title="Circuit Construction Kit: DC" />

Explore the simulation above to develop intuition for this topic.

## 1. Kirchhoff's Laws

### Kirchhoff's First Law (Current Law)

**Definition.** Kirchhoff's first law states that the algebraic sum of currents entering any
Junction in an electrical circuit is zero, reflecting the conservation of electric charge:
$\sum I = 0$.

**The sum of currents entering a junction equals the sum of currents leaving it.**

$$\sum I_{\mathrm{in}} = \sum I_{\mathrm{out}}$$

**Derivation from charge conservation.** Charge cannot accumulate at a junction (in steady state).
The rate of charge flowing in must equal the rate flowing out:

$$\frac◆LB◆dQ_{\mathrm{in}}◆RB◆◆LB◆dt◆RB◆ = \frac◆LB◆dQ_{\mathrm{out}}◆RB◆◆LB◆dt◆RB◆ \implies \sum I_{\mathrm{in}} = \sum I_{\mathrm{out}}$$

$\square$

### Kirchhoff's Second Law (Voltage Law)

**Definition.** Kirchhoff's second law states that the algebraic sum of potential differences around
Any closed loop in an electrical circuit is zero, reflecting the conservation of energy:
$\sum \mathcal{E} = \sum V$.

**The sum of e.m.f.s around any closed loop equals the sum of p.d.s around that loop.**

$$\sum \mathcal{E} = \sum V$$

**Derivation from energy conservation.** As a unit charge moves around a closed loop, the total
Energy gained from sources must equal the total energy lost to components. Otherwise, energy would
Be created or destroyed:

$$\frac◆LB◆W_{\mathrm{gained}}◆RB◆◆LB◆Q◆RB◆ = \frac◆LB◆W_{\mathrm{lost}}◆RB◆◆LB◆Q◆RB◆ \implies \sum \mathcal{E} = \sum IR$$

$\square$

:::tip Exam Technique When applying Kirchhoff's second law, choose a direction around the loop and
Stick to it. E.m.f.s are positive if they drive current in your chosen direction; p.d.s are positive
If current flows through the resistor in your chosen direction.
:::

## 2. Series and Parallel Resistors

### Series Combination

For resistors $R_1, R_2, \ldots, R_n$ in series, the same current $I$ flows through each.

By Kirchhoff's second law:

$$V = V_1 + V_2 + \cdots + V_n = IR_1 + IR_2 + \cdots + IR_n$$

$$V = I(R_1 + R_2 + \cdots + R_n)$$

The equivalent resistance is:

$$\boxed{R_{\mathrm{series}} = R_1 + R_2 + \cdots + R_n}$$

### Parallel Combination

For resistors in parallel, the same p.d. $V$ is across each.

By Kirchhoff's first law:

$$I = I_1 + I_2 + \cdots + I_n = \frac{V}{R_1} + \frac{V}{R_2} + \cdots + \frac{V}{R_n}$$

$$I = V\left(\frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}\right)$$

The equivalent resistance satisfies $V/R_{\mathrm{parallel}} = I$:

$$\boxed{\frac◆LB◆1◆RB◆◆LB◆R_{\mathrm{parallel}}◆RB◆ = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}}$$

For two resistors in parallel:

$$R_{\mathrm{parallel}} = \frac{R_1 R_2}{R_1 + R_2}$$

**Proof.** $\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{R_1 + R_2}{R_1 R_2}$Hence
$R = \frac{R_1 R_2}{R_1 + R_2}$. $\square$

**Intuition.** Adding resistors in series always increases total resistance (current must pass
Through all of them). Adding resistors in parallel always decreases total resistance (current has
More paths to flow through). The parallel equivalent is always less than the smallest individual
Resistor.

## 3. Potential Dividers

**Definition.** A potential divider is a circuit consisting of two or more resistors connected in
Series across a voltage supply, which produces an output voltage that is a fraction of the input
Voltage, determined by the ratio of resistances.

A **potential divider** consists of two or more resistors in series across a voltage supply. The
Voltage is divided in proportion to the resistances.

For two resistors $R_1$ and $R_2$ in series across supply $V_{\mathrm{in}}$:

$$V_{\mathrm{out}} = V_{\mathrm{in}} \times \frac{R_2}{R_1 + R_2}$$

**Derivation.** The current through both resistors is $I = V_{\mathrm{in}}/(R_1 + R_2)$. The p.d.
Across $R_2$ is:

$$V_{\mathrm{out}} = IR_2 = \frac◆LB◆V_{\mathrm{in}}◆RB◆◆LB◆R_1 + R_2◆RB◆ \cdot R_2 = V_{\mathrm{in}} \cdot \frac{R_2}{R_1 + R_2}$$

$\square$

### Potentiometer

A **potentiometer** is a continuous potential divider — a single resistive track with a sliding
Contact. It can provide any output voltage from 0 to $V_{\mathrm{in}}$.

### Potential Divider with a Sensor

A thermistor or LDR can replace one resistor, creating a voltage that varies with temperature or
Light intensity:

$$V_{\mathrm{out}} = V_{\mathrm{in}} \cdot \frac◆LB◆R_{\mathrm{sensor}}◆RB◆◆LB◆R_{\mathrm{fixed}} + R_{\mathrm{sensor}}◆RB◆$$

:::warning Common Pitfall A potential divider circuit loaded by connecting a component across $R_2$
Changes the effective resistance. The simple divider formula no longer applies — you must
Recalculate the parallel combination of $R_2$ and the load.
:::

## 4. Internal Resistance

**Definition.** Internal resistance $r$ is the resistance within a power source that opposes the
Flow of current and causes energy to be dissipated within the source, reducing the terminal
Potential difference below the e.m.f.

**Definition.** Terminal potential difference $V$ is the potential difference across the terminals
Of a power source when it is delivering current, equal to the e.m.f. Minus the potential difference
Across the internal resistance: $V = \mathcal{E} - Ir$.

Real power sources have **internal resistance** $r$Which causes the terminal p.d. To drop as Current
increases.

### Derivation of $V = \mathcal{E} - Ir$

Consider a cell of e.m.f. $\mathcal{E}$ and internal resistance $r$ connected to an external circuit
Of resistance $R$. The total resistance in the circuit is $R + r$.

$$I = \frac◆LB◆\mathcal{E}◆RB◆◆LB◆R + r◆RB◆$$

The terminal p.d. (voltage across the external circuit) is:

$$V = IR = \frac◆LB◆\mathcal{E}R◆RB◆◆LB◆R + r◆RB◆ = \mathcal{E}\left(\frac{R}{R+r}\right)$$

Alternatively, by Kirchhoff's second law around the full circuit:

$$\mathcal{E} = V + Ir \implies \boxed{V = \mathcal{E} - Ir}$$

The "lost volts" is $Ir$ — the p.d. Across the internal resistance.

**Maximum power transfer.** The power delivered to the load is:

$$P = I^2R = \frac◆LB◆\mathcal{E}^2 R◆RB◆◆LB◆(R+r)^2◆RB◆$$

Differentiating with respect to $R$ and setting $dP/dR = 0$ gives $R = r$. Maximum power is
Delivered when the load resistance equals the internal resistance.

### Measuring Internal Resistance

**Method 1: Vary the load.** Measure $V$ and $I$ for several different values of $R$. Plot $V$
Against $I$.

$$V = \mathcal{E} - Ir$$

This is a straight line with gradient $= -r$ and $y$-intercept $= \mathcal{E}$.

**Method 2: Direct calculation.** With two measurements $(V_1, I_1)$ and $(V_2, I_2)$:

$$r = \frac{V_1 - V_2}{I_2 - I_1}$$

## 5. Thevenin's Theorem

**Thevenin's Theorem.** Any linear circuit with two terminals can be replaced by an equivalent
Circuit consisting of:

- A single voltage source $V_{\mathrm{Th}}$ (the Thevenin voltage)
- A single series resistance $R_{\mathrm{Th}}$ (the Thevenin resistance)

### Finding $V_{\mathrm{Th}}$

The Thevenin voltage is the open-circuit voltage between the two terminals (i.e., the voltage when
Nothing is connected across them).

### Finding $R_{\mathrm{Th}}$

The Thevenin resistance is the resistance between the two terminals when all independent voltage
Sources are replaced by short circuits (and current sources by open circuits).

**Intuition.** Thevenin's theorem is powerful because it lets you simplify any complex circuit into
A simple source-resistor pair. Once you know $V_{\mathrm{Th}}$ and $R_{\mathrm{Th}}$You can Predict
the behaviour of the circuit for any load.

<details>
<summary>Example: Thevenin Equivalent</summary>
Find the Thevenin equivalent of a circuit with a 12 V battery in series with two parallel resistors
$R_1 = 6\,\Omega$ and $R_2 = 3\,\Omega$Across terminals A and B that are across $R_2$.

**Answer.** $V_{\mathrm{Th}}$ = open-circuit voltage across $R_2$ = potential divider:
$V_{\mathrm{Th}} = 12 \times \frac{3}{6+3} = 4.0$ V.

$R_{\mathrm{Th}}$ = resistance between A and B with the 12 V source shorted:
$R_{\mathrm{Th}} = R_1 \| R_2 = \frac◆LB◆6 \times 3◆RB◆◆LB◆6+3◆RB◆ = 2.0$ $\Omega$.

The circuit is equivalent to a 4.0 V source with $2.0\,\Omega$ internal resistance.

</details>

## 6. Wheatstone Bridge

A **Wheatstone bridge** is a circuit arrangement of four resistors in a diamond configuration with a
Galvanometer connected between the midpoint nodes. It provides a precise method for measuring
Unknown resistances.

### Balance Condition

Consider four resistors $R_1, R_2, R_3, R_4$ arranged so that $R_1$ and $R_2$ form one branch, $R_3$
And $R_4$ form another, with a galvanometer of resistance $R_g$ connected between the junction of
$R_1$-$R_2$ and the junction of $R_3$-$R_4$.

**Derivation.** At balance, no current flows through the galvanometer ($I_g = 0$).

By KCL at each junction, the current through $R_1$ equals the current through $R_2$ (call it $I_1$),
And the current through $R_3$ equals the current through $R_4$ (call it $I_2$).

Since $I_g = 0$The p.d. Across the galvanometer is zero, so:

$$V_A = V_B$$

Where $A$ is the junction of $R_1$ and $R_3$And $B$ is the junction of $R_2$ and $R_4$.

The p.d. Across $R_1$: $V_{R_1} = I_1 R_1$. The p.d. Across $R_3$: $V_{R_3} = I_2 R_3$.

For the galvanometer p.d. To be zero:

$$I_1 R_1 = I_2 R_3 \quad \mathrm{...(i)}$$

Similarly, considering the other path:

$$I_1 R_2 = I_2 R_4 \quad \mathrm{...(ii)}$$

Dividing (i) by (ii):

$$\frac{R_1}{R_2} = \frac{R_3}{R_4}$$

$$\boxed{R_1 R_4 = R_2 R_3}$$

$\square$

### Meter Bridge

A **meter bridge** is a practical form of the Wheatstone bridge. A uniform resistance wire of length
1 m replaces two of the resistors. The balance point is found by sliding a contact along the wire.

At balance: $\frac{R}{S} = \frac{l_1}{l_2} = \frac{l}{100 - l}$

Where $R$ is the known resistance, $S$ is the unknown, and $l$ is the balance length.

<details>
<summary>Example: Wheatstone Bridge Calculation</summary>

A Wheatstone bridge has $R_1 = 100\,\Omega$$R_2 = 200\,\Omega$$R_3 = 150\,\Omega$. Find $R_4$ For
balance.

**Answer.** $R_4 = \frac{R_2 R_3}{R_1} = \frac◆LB◆200 \times 150◆RB◆◆LB◆100◆RB◆ = 300\,\Omega$.

</details>

:::warning Warning Current is exactly zero. If the bridge is unbalanced, you must use Kirchhoff's
laws (or Thevenin Analysis) to find the galvanometer current.
:::

## 7. Norton's Theorem

**Norton's Theorem.** Any linear two-terminal circuit can be replaced by an equivalent circuit
Consisting of a current source $I_N$ in parallel with a resistance $R_N$.

### Finding $I_N$

The Norton current is the short-circuit current between the two terminals (the current that flows
When the terminals are directly connected).

### Finding $R_N$

The Norton resistance is the same as the Thevenin resistance: the resistance between the two
Terminals when all independent sources are replaced by their internal resistances (voltage sources
Short-circuited, current sources open-circuited).

### Source Transformation

Thevenin and Norton equivalents are related by:

$$I_N = \frac◆LB◆V_{\mathrm{Th}}◆RB◆◆LB◆R_{\mathrm{Th}}◆RB◆, \qquad R_N = R_{\mathrm{Th}}$$

A voltage source $V_{\mathrm{Th}}$ in series with $R_{\mathrm{Th}}$ is equivalent to a current
Source $I_N$ in parallel with $R_N$.

**Proof.** For the Thevenin equivalent: open-circuit voltage $= V_{\mathrm{Th}}$Short-circuit
Current $= V_{\mathrm{Th}}/R_{\mathrm{Th}}$. For the Norton equivalent: short-circuit current
$= I_N$Open-circuit voltage $= I_N R_N$. For equivalence: $I_N = V_{\mathrm{Th}}/R_{\mathrm{Th}}$
And $R_N = R_{\mathrm{Th}}$. $\square$

:::tip Exam Technique Source transformations are useful for simplifying circuits step by step.
Convert a voltage source with series resistance to a Norton equivalent, combine parallel current
Sources, then convert back.
:::

## 8. Multi-Loop Circuit Analysis

For circuits with multiple loops, a systematic approach is needed.

### Loop Current Method (Mesh Analysis)

1. Assign a clockwise loop current to each independent loop.
2. Apply KVL around each loop, expressing voltage drops in terms of loop currents.
3. Solve the resulting system of simultaneous equations.

**Worked example.** Consider a circuit with two loops. Loop 1 contains a 12 V battery and
$R_1 = 4\,\Omega$. Loop 2 contains a 6 V battery and $R_2 = 2\,\Omega$. The shared branch contains
$R_3 = 6\,\Omega$.

Assign loop currents $I_1$ (loop 1, clockwise) and $I_2$ (loop 2, clockwise).

**Loop 1 (KVL):** $12 = 4I_1 + 6(I_1 - I_2)$

**Loop 2 (KVL):** $6 = 2I_2 + 6(I_2 - I_1)$

Expanding:

$$12 = 10I_1 - 6I_2 \quad \mathrm{...(i)}$$ $$6 = -6I_1 + 8I_2 \quad \mathrm{...(ii)}$$

From (i): $I_2 = (10I_1 - 12)/6$.

Substituting into (ii): $6 = -6I_1 + 8(10I_1 - 12)/6 = -6I_1 + (80I_1 - 96)/6$.

$36 = -36I_1 + 80I_1 - 96$. $132 = 44I_1$. $I_1 = 3.0$ A.

$I_2 = (30 - 12)/6 = 3.0$ A.

Current through $R_3$: $I_1 - I_2 = 0$ A (the shared resistor carries no current in this case).

### Number of Independent Equations

For a circuit with $b$ branches and $n$ nodes:

- KCL provides $n - 1$ independent equations.
- KVL provides $b - n + 1$ independent equations.
- Total: $(n - 1) + (b - n + 1) = b$ equations for $b$ unknown branch currents.

## 9. Measuring Instruments and Loading Effects

### Ideal vs Real Instruments

An **ideal voltmeter** has infinite resistance ($R_V \to \infty$) and draws zero current. A **real
Voltmeter** has finite resistance ( $10\,\mathrm{k}\Omega$ to $10\,\mathrm{M}\Omega$ for Digital
meters).

An **ideal ammeter** has zero resistance ($R_A \to 0$) and drops zero voltage. A **real ammeter**
Has finite (but small) resistance.

### Loading Error

When a voltmeter of resistance $R_V$ is connected across a resistor $R_2$ in a potential divider,
The parallel combination changes the circuit:

$$R_{\mathrm{eff}} = \frac{R_2 R_V}{R_2 + R_V}$$

The measured voltage is:

$$V_{\mathrm{measured}} = V_{\mathrm{in}} \cdot \frac◆LB◆R_{\mathrm{eff}}◆RB◆◆LB◆R_1 + R_{\mathrm{eff}}◆RB◆$$

Which is always less than the true voltage
$V_{\mathrm{true}} = V_{\mathrm{in}} \cdot R_2/(R_1 + R_2)$.

**Proof that loading always reduces the reading.** Since $R_{\mathrm{eff}} \lt R_2$ (parallel
Resistance is less than the smallest), and $V_{\mathrm{out}}$ is an increasing function of the lower
Resistance in the divider, we have $V_{\mathrm{measured}} \lt V_{\mathrm{true}}$. $\square$

### Voltmeter Multiplier

To extend the range of a galvanometer (full-scale current $I_g$Internal resistance $R_g$) to Measure
voltage up to $V_{\mathrm{range}}$:

A series "multiplier" resistor $R_s$ is added so that at full scale:

$$V_{\mathrm{range}} = I_g(R_g + R_s)$$

$$\boxed{R_s = \frac◆LB◆V_{\mathrm{range}}◆RB◆◆LB◆I_g◆RB◆ - R_g}$$

### Ammeter Shunt

To extend the range of a galvanometer to measure current up to $I_{\mathrm{range}}$:

A parallel "shunt" resistor $R_{\mathrm{shunt}}$ diverts excess current so that $I_g$ flows through
The galvanometer:

$$I_g R_g = (I_{\mathrm{range}} - I_g) R_{\mathrm{shunt}}$$

$$\boxed{R_{\mathrm{shunt}} = \frac◆LB◆R_g \cdot I_g◆RB◆◆LB◆I_{\mathrm{range}} - I_g◆RB◆}$$

<details>
<summary>Example: Ammeter Shunt Calculation</summary>

A galvanometer has $R_g = 50\,\Omega$ and full-scale current $I_g = 1.0$ mA. Calculate the shunt
Resistance to convert it to a 0--5 A ammeter.

**Answer.**
$R_{\mathrm{shunt}} = \frac◆LB◆50 \times 1.0 \times 10^{-3}◆RB◆◆LB◆5.0 - 1.0 \times 10^{-3}◆RB◆ = \frac{0.050}{4.999} = 0.0100\,\Omega$.

Note the very small shunt resistance — most current bypasses the galvanometer.

</details>

:::warning Warning The circuit it is measuring. Always ensure $R_V \gg R_{\mathrm{circuit}}$ (rule
of thumb: $R_V \gt 10 \times R_{\mathrm{circuit}}$ for less than 10% loading error).
:::

## Problem Set

<details>
<summary>Problem 1</summary>
Three resistors of 4 $\Omega$6 $\Omega$And 12 $\Omega$ are connected in parallel. Calculate the
Equivalent resistance.

**Answer.**
$\frac{1}{R} = \frac{1}{4} + \frac{1}{6} + \frac{1}{12} = \frac{3 + 2 + 1}{12} = \frac{6}{12} = \frac{1}{2}$.
$R = 2.0$ $\Omega$.

<b>If you get this wrong, revise:</b> [Parallel Combination](#parallel-combination)

</details>

<details>
<summary>Problem 2</summary>
A potential divider consists of a 10 k$\Omega$ and a 5.0 k$\Omega$ resistor in series across a 9.0 V
Supply. Calculate the output voltage across the 5.0 k$\Omega$ resistor.

**Answer.** $V_{\mathrm{out}} = 9.0 \times \frac{5.0}{10 + 5.0} = 9.0 \times \frac{1}{3} = 3.0$ V.

<b>If you get this wrong, revise:</b> [Potential Dividers](#3-potential-dividers)

</details>

<details>
<summary>Problem 3</summary>
A cell of e.m.f. 12 V and internal resistance 0.50 $\Omega$ is connected to a 5.5 $\Omega$ external
Resistor. Calculate: (a) the current, (b) the terminal p.d., (c) the power dissipated in the
External resistor.

**Answer.** (a)
$I = \frac◆LB◆\mathcal{E}◆RB◆◆LB◆R + r◆RB◆ = \frac{12}{5.5 + 0.5} = \frac{12}{6.0} = 2.0$ A.

(b) $V = \mathcal{E} - Ir = 12 - 2.0 \times 0.50 = 11$ V.

(c) $P = I^2R = 4.0 \times 5.5 = 22$ W.

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</details>

<details>
<summary>Problem 4</summary>
Using Kirchhoff's laws, find the current in each branch of a circuit where a 12 V battery and a 6 V
Battery (opposing) are connected with resistors of 2 $\Omega$ and 4 $\Omega$ as follows: 12 V
Battery in series with 2 $\Omega$ (branch 1), 6 V battery in series with 4 $\Omega$ (branch 2), both
Branches sharing common nodes.

**Answer.** Let $I_1$ flow through branch 1 (12 V side) and $I_2$ through branch 2 (6 V side), with
$I_3 = I_1 + I_2$ flowing in the connecting wire.

Loop 1 (12 V, 2 $\Omega$): $12 = 2I_1 + 4(I_1 + I_2) = 6I_1 + 4I_2$ ... (i).

Loop 2 (6 V, 4 $\Omega$): $6 = 4(I_1 + I_2) + ... $

Let me use a clearer setup. Both branches meet at nodes A and B. Branch 1: 12 V → 2 $\Omega$. Branch
2: 6 V → 4 $\Omega$.

By KVL around the outer loop (travelling through branch 1 then back through branch 2):
$12 - 2I_1 - 4I_2 + 6 = 0$ (assuming 6 V opposes in the return path). Actually, the sign depends on
Orientation. Let's say both batteries have their positive terminals facing the same direction
(towards node A):

Loop: $12 - 2I_1 + 6 - 4I_2 = 0$ ... Wait, this depends on the circuit topology.

Assuming the batteries are in parallel (both driving current in the same direction) with their
Internal loops: $12 - 2I_1 = 6 - 4I_2 = V_{AB}$.

So $12 - 2I_1 = 6 - 4I_2 \implies 6 = 2I_1 - 4I_2 \implies 3 = I_1 - 2I_2$ ... (i).

KCL: $I_1 + I_2 = I_3$ (current into the external circuit). Without an external load between the
Common nodes, $I_3 = 0$So $I_2 = -I_1$.

From (i): $3 = I_1 + 2I_1 = 3I_1$. $I_1 = 1.0$ A. $I_2 = -1.0$ A (current flows opposite to assumed
Direction in branch 2).

This means the 12 V battery is driving current through the 6 V battery (charging it).

<b>If you get this wrong, revise:</b> [Kirchhoff's Laws](#1-kirchhoffs-laws)

</details>

<details>
<summary>Problem 5</summary>
A battery with unknown e.m.f. And internal resistance is connected to a variable resistor. When
$R = 4.0\,\Omega$$I = 1.5$ A. When $R = 9.0\,\Omega$$I = 0.80$ A. Find $\mathcal{E}$ and $r$.

**Answer.** $\mathcal{E} = I_1(R_1 + r) = 1.5(4.0 + r) = 6.0 + 1.5r$ ... (i).

$\mathcal{E} = I_2(R_2 + r) = 0.80(9.0 + r) = 7.2 + 0.80r$ ... (ii).

$6.0 + 1.5r = 7.2 + 0.80r \implies 0.70r = 1.2 \implies r = 1.71\,\Omega$.

$\mathcal{E} = 6.0 + 1.5(1.71) = 6.0 + 2.57 = 8.57$ V $\approx 8.6$ V.

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</details>

<details>
<summary>Problem 6</summary>
Find the Thevenin equivalent of a voltage divider with $R_1 = 8\,\Omega$ and $R_2 = 4\,\Omega$
Across a 24 V supply, with terminals across $R_2$.

**Answer.** $V_{\mathrm{Th}} = 24 \times \frac{4}{8+4} = 24 \times \frac{1}{3} = 8.0$ V.

$R_{\mathrm{Th}} = R_1 \| R_2 = \frac◆LB◆8 \times 4◆RB◆◆LB◆8+4◆RB◆ = \frac{32}{12} = 2.67\,\Omega$.

<b>If you get this wrong, revise:</b> [Thevenin's Theorem](#5-thevenins-theorem)

</details>

<details>
<summary>Problem 7</summary>
Two 6 $\Omega$ resistors are connected in parallel and this combination is connected in series with
A 3 $\Omega$ resistor across a 12 V supply. Calculate: (a) the total resistance, (b) the current
From the supply, (c) the p.d. Across the parallel combination.

**Answer.** (a) $R_{\parallel} = \frac◆LB◆6 \times 6◆RB◆◆LB◆6+6◆RB◆ = 3\,\Omega$.
$R_{\mathrm{total}} = 3 + 3 = 6\,\Omega$.

(b) $I = 12/6 = 2.0$ A.

(c) $V_{\parallel} = IR_{\parallel} = 2.0 \times 3 = 6.0$ V.

<b>If you get this wrong, revise:</b>
[Series and Parallel Resistors](#2-series-and-parallel-resistors)

</details>

<details>
<summary>Problem 8</summary>
A 9.0 V battery with internal resistance $0.80\,\Omega$ is connected to a lamp rated 6.0 V, 3.0 W.
Calculate the current and determine whether the lamp operates at its rated voltage.

**Answer.** Lamp resistance at rated conditions: $R_L = V^2/P = 36/3.0 = 12\,\Omega$.

Actual current: $I = \frac{9.0}{12 + 0.80} = \frac{9.0}{12.8} = 0.703$ A.

Terminal p.d.: $V = IR_L = 0.703 \times 12 = 8.44$ V. This exceeds the rated 6.0 V, so the lamp is
Over-driven (it would likely burn out).

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</details>

<details>
<summary>Problem 9</summary>
In the circuit below, find the current through each resistor: $R_1 = 2\,\Omega$ and
$R_2 = 4\,\Omega$ in parallel, connected in series with $R_3 = 3\,\Omega$Across a 10 V supply.

**Answer.** $R_{\parallel} = \frac◆LB◆2 \times 4◆RB◆◆LB◆2+4◆RB◆ = \frac{8}{6} = 1.33\,\Omega$.
$R_{\mathrm{total}} = 1.33 + 3 = 4.33\,\Omega$.

$I_{\mathrm{total}} = 10/4.33 = 2.31$ A.

$V_{\parallel} = 2.31 \times 1.33 = 3.07$ V.

$I_1 = V_{\parallel}/R_1 = 3.07/2 = 1.54$ A. $I_2 = 3.07/4 = 0.768$ A. Check: $1.54 + 0.768 = 2.31$
A. $\checkmark$

<b>If you get this wrong, revise:</b>
[Series and Parallel Resistors](#2-series-and-parallel-resistors)

</details>

<details>
<summary>Problem 10</summary>
Explain why a voltmeter should have a very high resistance and an ammeter should have a very low
Resistance.

**Answer.** A voltmeter is connected in parallel across a component. To avoid drawing significant
Current and altering the circuit, its resistance should be very high (ideally infinite). An ammeter
Is connected in series with a component. To avoid dropping significant voltage and altering the
Circuit, its resistance should be very low (ideally zero).

<b>If you get this wrong, revise:</b> [Kirchhoff's Laws](#1-kirchhoffs-laws)

</details>

<details>
<summary>Problem 11</summary>
A potential divider circuit uses a 15 V supply with $R_1 = 10\,\mathrm{k}\Omega$ and a thermistor as
$R_2$. The thermistor has resistance 2000 $\Omega$ at $25^\circ\mathrm{C}$ and 500 $\Omega$ at $50^\circ\mathrm{C}$. Calculate
$V_{\mathrm{out}}$ at each temperature.

**Answer.** At $25^\circ\mathrm{C}$:
$V_{\mathrm{out}} = 15 \times \frac{2000}{10000 + 2000} = 15 \times \frac{2}{12} = 2.50$ V.

At $50^\circ\mathrm{C}$:
$V_{\mathrm{out}} = 15 \times \frac{500}{10000 + 500} = 15 \times \frac{500}{10500} = 0.714$ V.

<b>If you get this wrong, revise:</b> [Potential Dividers](#3-potential-dividers)

</details>

<details>
<summary>Problem 12</summary>
A cell of e.m.f. $\mathcal{E}$ and internal resistance $r$ delivers maximum power to an external
Load. Prove that maximum power is delivered when $R = r$And find the efficiency at this condition.

**Answer.**
$P = \left(\frac◆LB◆\mathcal{E}◆RB◆◆LB◆R+r◆RB◆\right)^2 R = \frac◆LB◆\mathcal{E}^2 R◆RB◆◆LB◆(R+r)^2◆RB◆$.

$\frac{dP}{dR} = \mathcal{E}^2 \cdot \frac{(R+r)^2 - 2R(R+r)}{(R+r)^4} = \mathcal{E}^2 \cdot \frac{r - R}{(R+r)^3}$.

Setting $\frac{dP}{dR} = 0$: $R = r$. (This is a maximum since $dP/dR > 0$ for $R < r$ and $< 0$ for
$R > r$.)

At $R = r$: $I = \mathcal{E}/(2r)$. Power to load:
$P = (\mathcal{E}/2r)^2 \cdot r = \mathcal{E}^2/(4r)$. Total power from cell:
$\mathcal{E} \cdot \mathcal{E}/(2r) = \mathcal{E}^2/(2r)$. Efficiency
$= P_{\mathrm{load}}/P_{\mathrm{total}} = 1/2 = 50\%$.

<b>If you get this wrong, revise:</b> [Internal Resistance](#4-internal-resistance)

</details>

<details>
<summary>Problem 13</summary>
A Wheatstone bridge has $R_1 = 120\,\Omega$$R_2 = 180\,\Omega$And $R_3 = 200\,\Omega$. Find $R_4$ for balance.

**Answer.** $R_4 = \frac{R_2 R_3}{R_1} = \frac◆LB◆180 \times 200◆RB◆◆LB◆120◆RB◆ = 300\,\Omega$.

<b>If you get this wrong, revise:</b> [Wheatstone Bridge](#6-wheatstone-bridge)

</details>

<details>
<summary>Problem 14</summary>
A circuit has a Thevenin equivalent of $V_{\mathrm{Th}} = 20$ V and $R_{\mathrm{Th}} = 5\,\Omega$. Find the Norton equivalent.

**Answer.** $I_N = V_{\mathrm{Th}}/R_{\mathrm{Th}} = 20/5 = 4.0$ A.
$R_N = R_{\mathrm{Th}} = 5\,\Omega$.

The Norton equivalent is a 4.0 A current source in parallel with $5\,\Omega$.

<b>If you get this wrong, revise:</b> [Norton's Theorem](#7-nortons-theorem)

</details>

<details>
<summary>Problem 15</summary>
A potential divider with $R_1 = 10\,\mathrm{k}\Omega$ and $R_2 = 10\,\mathrm{k}\Omega$ across a 12 V supply is measured with a voltmeter of resistance $R_V = 10\,\mathrm{k}\Omega$ across $R_2$. Calculate the loading error.

**Answer.** True voltage: $V_{\mathrm{true}} = 12 \times \frac{10}{20} = 6.00$ V.

$R_{\mathrm{eff}} = \frac◆LB◆10 \times 10◆RB◆◆LB◆10 + 10◆RB◆ = 5.0\,\mathrm{k}\Omega$.

$V_{\mathrm{measured}} = 12 \times \frac{5.0}{10 + 5.0} = 12 \times \frac{1}{3} = 4.00$ V.

Loading error $= \frac{6.00 - 4.00}{6.00} \times 100 = 33.3\%$.

<b>If you get this wrong, revise:</b>
[Measuring Instruments and Loading Effects](#9-measuring-instruments-and-loading-effects)

</details>

<details>
<summary>Problem 16</summary>
A galvanometer has $R_g = 100\,\Omega$ and full-scale deflection at $I_g = 50\,\mu$A. Calculate the multiplier resistance needed to convert it into a voltmeter with range 0--50 V.

**Answer.**
$R_s = \frac◆LB◆V_{\mathrm{range}}◆RB◆◆LB◆I_g◆RB◆ - R_g = \frac◆LB◆50◆RB◆◆LB◆50 \times 10^{-6}◆RB◆ - 100 = 10^6 - 100 \approx 1.0\,\mathrm{M}\Omega$.

<b>If you get this wrong, revise:</b>
[Measuring Instruments and Loading Effects](#9-measuring-instruments-and-loading-effects)

</details>

<details>
<summary>Problem 17</summary>
In a two-loop circuit: Loop 1 has a 24 V battery with $R_1 = 3\,\Omega$Loop 2 has a 12 V battery with $R_2 = 6\,\Omega$And the shared branch has $R_3 = 4\,\Omega$. Both batteries drive current clockwise. Find the current through $R_3$.

**Answer.** Assign $I_1$ (loop 1, CW) and $I_2$ (loop 2, CW).

Loop 1: $24 = 3I_1 + 4(I_1 - I_2) = 7I_1 - 4I_2$ ... (i).

Loop 2: $12 = 6I_2 + 4(I_2 - I_1) = -4I_1 + 10I_2$ ... (ii).

From (i): $I_1 = (24 + 4I_2)/7$.

Substitute into (ii): $12 = -4(24 + 4I_2)/7 + 10I_2$.

$84 = -96 - 16I_2 + 70I_2$. $180 = 54I_2$. $I_2 = 3.33$ A.

$I_1 = (24 + 13.33)/7 = 37.33/7 = 5.33$ A.

Current through $R_3$: $I_1 - I_2 = 5.33 - 3.33 = 2.0$ A (from node A towards node B).

<b>If you get this wrong, revise:</b> [Multi-Loop Circuit Analysis](#8-multi-loop-circuit-analysis)

</details>

<details>
<summary>Problem 18</summary>
A meter bridge has a wire of length 100 cm. With a known resistance $R = 10\,\Omega$ in the left gap, the balance point is at 40 cm from the left end. Find the unknown resistance $S$.

**Answer.** At balance: $R/S = l/(100 - l) = 40/60 = 2/3$.

$S = R \times 60/40 = 10 \times 1.5 = 15\,\Omega$.

<b>If you get this wrong, revise:</b> [Wheatstone Bridge](#6-wheatstone-bridge)

</details>

---

:::tip Tip Ready to test your understanding of **DC Circuits**? The
[diagnostic test](/docs/alevel/physics/diagnostics/diag-dc-circuits) contains the hardest questions
within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine DC Circuits
with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/physics/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix.
:::

:::danger Danger

- **Applying Kirchhoff's second law incorrectly to parallel circuits:** The sum of p.d.s around ANY
  closed loop equals the sum of e.m.f.s. In a parallel circuit, each branch is a separate loop. The
  p.d. Across each parallel branch equals the e.m.f. Of the supply, not a fraction of it.

- **Confusing series and parallel resistance formulas:** For resistors in SERIES, resistances add
  (R_total = R1 + R2 + ...). For resistors in PARALLEL, the reciprocal formula applies (1/R_total =
  1/R1 + 1/R2 + ...). Students frequently invert these. A useful check: the total parallel
  resistance is always LESS than the smallest individual resistor.

- **Forgetting internal resistance in calculations:** When a battery has internal resistance r, the
  terminal p.d. (V = E - Ir) is LESS than the e.m.f. E. If a question gives both the e.m.f. And the
  terminal p.d., the difference is the p.d. Across the internal resistance (lost volts = Ir).

- **Misapplying the potential divider formula:** V_out = V_in \* R2 / (R1 + R2) only works for two
  resistors in series with no load connected. If a load resistance is connected across R2, the
  effective resistance of the parallel combination must be used instead.

## Common Pitfalls

1. Confusing EMF and potential difference — EMF is the total energy per unit charge supplied; PD is
   the energy per unit charge transferred to a component.

2. Forgetting that ammeters are connected in series and voltmeters in parallel.

3. Incorrectly applying Kirchhoff's second law by missing components in a loop.

4. Forgetting to include units in final answers, especially when working with derived units like
   $\text{N}\,\text{kg}^{-1}\,\text{m}^2$.

5. Neglecting air resistance or assuming ideal conditions when the question specifies a real-world
   scenario.

6. Rounding intermediate answers too early, which compounds errors in multi-step calculations.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

