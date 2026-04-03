---
title: Thermodynamics
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: thermodynamics
---

## Thermodynamics

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P2 :::

## 1. The First Law of Thermodynamics

**Definition.** The first law of thermodynamics states that the change in internal energy of a
closed system equals the net energy transferred to it by heating plus the work done on it:
$\Delta U = Q + W$. This is a statement of energy conservation for thermodynamic systems.

**Definition.** Internal energy $U$ is the total energy of a system due to the kinetic and potential
energies of its constituent particles (molecules or atoms), excluding the macroscopic kinetic and
potential energies of the system as a whole.

**The First Law.** The change in internal energy of a system equals the energy transferred to it by
heating plus the work done on it:

$$\boxed{\Delta U = Q + W}$$

where:

- $\Delta U$ is the change in internal energy (J)
- $Q$ is the energy transferred to the system by heating (J) — positive if heat flows in
- $W$ is the work done **on** the system (J) — positive if work is done on the system

:::warning Common Pitfall Sign conventions vary. Some textbooks use $\Delta U = Q - W$ where $W$ is
work done **by** the system. Always check which convention is being used. We use the "physics"
convention where $W$ is work done on the system. :::

**Intuition.** The first law is simply energy conservation applied to thermodynamic systems. You can
increase a gas's internal energy either by heating it or by compressing it (doing work on it).

### Derivation of the First Law of Thermodynamics

1. The first law is a statement of energy conservation for thermodynamic systems.
2. Consider a closed system that can exchange energy with its surroundings only via heat transfer
   ($Q$) and work ($W$).
3. By the principle of conservation of energy, the change in the system's total energy must equal
   the net energy input:

$$\Delta U = Q + W$$

4. This applies to any process, whether reversible or irreversible.

$$\boxed{\Delta U = Q + W}$$

$\square$

**Definition.** Specific heat capacity $c$ is the energy required per unit mass to raise the
temperature of a substance by one kelvin without a change of state: $c = \Delta Q / (m\Delta T)$.
The SI unit is J kg$^{-1}$ K$^{-1}$.

**Definition.** Specific latent heat $l$ is the energy per unit mass required to change the state of
a substance at constant temperature: $l = \Delta Q / m$. The specific latent heat of fusion $l_f$
refers to melting/solidifying, and the specific latent heat of vaporisation $l_v$ refers to
boiling/condensing.

## 2. Work Done by a Gas

Consider a gas in a cylinder with a frictionless piston of area $A$. The gas expands against
external pressure $p$, pushing the piston out by a small distance $\Delta x$.

The work done **by** the gas:

$$dW_{\text{by}} = F\,\Delta x = pA\,\Delta x = p\,\Delta V$$

For a finite expansion:

$$\boxed{W_{\text{by}} = \int_{V_1}^{V_2} p\,dV}$$

### Derivation of Work Done by Gas at Constant Pressure

1. A gas at pressure $p$ is in a cylinder with a frictionless piston of area $A$.
2. The gas exerts a force $F = pA$ on the piston.
3. When the piston moves outward by distance $\Delta x$, the work done by the gas is:

$$W_{\text{by}} = F\Delta x = pA\Delta x$$

4. Since the volume change $\Delta V = A\Delta x$:

$$\boxed{W_{\text{by}} = p\Delta V}$$

$\square$

**Special case: work done by gas at constant pressure:**

$$W_{\text{by}} = p\Delta V = p(V_2 - V_1)$$

The work done by the gas equals the **area under the $p$-$V$ curve**.

In our convention (work done on system): $W_{\text{on}} = -W_{\text{by}} = -p\Delta V$ for constant
pressure.

## 3. Thermodynamic Processes on $p$-$V$ Diagrams

### Isobaric (Constant Pressure)

$$p = \text{const}, \qquad W_{\text{by}} = p\Delta V$$

On a $p$-$V$ diagram: a horizontal line. The area under it equals $p\Delta V$.

### Isochoric (Isovolumetric, Constant Volume)

$$V = \text{const}, \qquad W_{\text{by}} = 0$$

On a $p$-$V$ diagram: a vertical line. No area underneath, so no work is done.

From the first law: $\Delta U = Q$ (all heat goes into internal energy).

### Isothermal (Constant Temperature)

For an ideal gas, $pV = nRT = \text{const}$, so $pV = \text{const}$ — a **hyperbola** on the $p$-$V$
diagram.

$$W_{\text{by}} = \int_{V_1}^{V_2} p\,dV = \int_{V_1}^{V_2} \frac{nRT}{V}\,dV = nRT\ln\frac{V_2}{V_1}$$

For an ideal gas, internal energy depends only on temperature ($U = \frac{3}{2}Nk_BT$), so
$\Delta U = 0$ for an isothermal process.

From the first law: $Q = -W_{\text{on}} = W_{\text{by}}$.

### Adiabatic

No heat exchange with the surroundings: $Q = 0$.

From the first law: $\Delta U = W_{\text{on}}$.

For an ideal gas undergoing a reversible adiabatic process:

$$pV^{\gamma} = \text{constant}$$

where $\gamma = C_p/C_v$ is the ratio of specific heats. For a monatomic ideal gas, $\gamma = 5/3$.
For a diatomic gas (like air), $\gamma \approx 7/5 = 1.4$.

On a $p$-$V$ diagram, an adiabatic curve is **steeper** than an isothermal curve passing through the
same point.

**Intuition.** In an adiabatic expansion, the gas does work ($W_{\text{by}} > 0$), so
$W_{\text{on}} < 0$, giving $\Delta U < 0$ — the gas cools. In an adiabatic compression, the gas
heats up. This is why pumping a bicycle tyre makes the pump warm.

## 4. The Carnot Cycle

The **Carnot cycle** is the most efficient heat engine operating between two temperatures. It
consists of four reversible processes:

1. **Isothermal expansion** at $T_H$ (absorbing heat $Q_H$ from the hot reservoir)
2. **Adiabatic expansion** (temperature drops from $T_H$ to $T_C$)
3. **Isothermal compression** at $T_C$ (rejecting heat $Q_C$ to the cold reservoir)
4. **Adiabatic compression** (temperature rises from $T_C$ to $T_H$)

### Carnot Efficiency

The efficiency of any heat engine is:

$$\eta = \frac{W_{\text{out}}}{Q_H} = \frac{Q_H - Q_C}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

**Derivation of Carnot efficiency.** For the Carnot cycle, $Q_H/T_H = Q_C/T_C$ (from the properties
of reversible cycles):

$$\frac{Q_C}{Q_H} = \frac{T_C}{T_H}$$

$$\boxed{\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}}$$

where $T_H$ and $T_C$ are the absolute temperatures of the hot and cold reservoirs.

**Key results:**

- The Carnot efficiency depends **only** on the two temperatures, not on the working substance.
- No real engine can exceed the Carnot efficiency.
- 100% efficiency requires $T_C = 0$ K (absolute zero), which is unattainable.

**Intuition.** The larger the temperature difference between hot and cold reservoirs, the more
efficiently you can convert heat into work. A car engine is limited because the exhaust temperature
cannot be reduced to absolute zero.

## 5. The Second Law of Thermodynamics

**Clausius statement.** Heat cannot spontaneously flow from a colder body to a hotter body without
external work.

**Kelvin statement.** It is impossible to construct a heat engine that, operating in a cycle,
produces no effect other than the extraction of heat from a single reservoir and the performance of
an equivalent amount of work.

**Definition.** Entropy $S$ is a thermodynamic quantity that measures the degree of disorder or
randomness of a system. For a reversible process at constant temperature, the change in entropy is
$\Delta S = Q/T$. The total entropy of an isolated system can never decrease.

**Entropy statement.** The total entropy of an isolated system can never decrease:

$$\Delta S_{\text{total}} \geq 0$$

**Intuition.** The second law explains why some processes are irreversible: an egg can break but not
unscramble; heat flows from hot to cold but not the reverse. It sets a fundamental limit on the
efficiency of all engines and refrigerators.

:::tip Exam Technique When asked about the second law, state it clearly (Clausius or Kelvin form),
give a consequence (no 100% efficient engine), and explain in terms of entropy if possible. On a
$p$-$V$ diagram, the Carnot cycle encloses the maximum possible area for given temperature limits.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

A gas in a cylinder expands isobarically from $2.0 \times 10^{-3}$ m$^3$ to $5.0 \times 10^{-3}$
m$^3$ at a pressure of $1.5 \times 10^5$ Pa. Calculate the work done by the gas.

**Answer.**
$W_{\text{by}} = p\Delta V = 1.5 \times 10^5 \times (5.0 - 2.0) \times 10^{-3} = 1.5 \times 10^5 \times 3.0 \times 10^{-3} = 450$
J.

<b>If you get this wrong, revise:</b> [Work Done by a Gas](#2-work-done-by-a-gas)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

200 J of heat is added to a gas while 80 J of work is done on the gas. Calculate the change in
internal energy.

**Answer.** $\Delta U = Q + W = 200 + 80 = 280$ J.

<b>If you get this wrong, revise:</b>
[The First Law of Thermodynamics](#1-the-first-law-of-thermodynamics)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A Carnot engine operates between 600 K and 300 K. Calculate its efficiency and the heat rejected to
the cold reservoir if it absorbs 500 J from the hot reservoir.

**Answer.** $\eta = 1 - T_C/T_H = 1 - 300/600 = 0.50 = 50\%$.

$Q_C = Q_H(1 - \eta) = 500 \times 0.50 = 250$ J.

<b>If you get this wrong, revise:</b> [Carnot Efficiency](#carnot-efficiency)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

An ideal gas expands isothermally from $1.0 \times 10^{-3}$ m$^3$ to $4.0 \times 10^{-3}$ m$^3$ at
400 K. If there are 0.10 mol of gas, calculate the work done by the gas.

**Answer.**
$W_{\text{by}} = nRT\ln(V_2/V_1) = 0.10 \times 8.31 \times 400 \times \ln(4) = 332.4 \times 1.386 = 461$
J.

<b>If you get this wrong, revise:</b> [Isothermal](#isothermal-constant-temperature)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

In an isochoric process, 500 J of heat is added to a gas. Calculate the change in internal energy
and the work done.

**Answer.** Since $V$ is constant, $W = 0$. From the first law: $\Delta U = Q + W = 500 + 0 = 500$
J.

<b>If you get this wrong, revise:</b> [Isochoric](#isochoric-isovolumetric-constant-volume)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

A heat engine operates between 500 K and 200 K with an efficiency of 45%. Is this possible according
to the second law?

**Answer.** Carnot efficiency $= 1 - 200/500 = 60\%$. Since 45% < 60%, this is possible (it is below
the maximum theoretical efficiency).

<b>If you get this wrong, revise:</b>
[The Second Law of Thermodynamics](#5-the-second-law-of-thermodynamics)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Sketch a $p$-$V$ diagram showing an isothermal expansion followed by an isochoric pressure increase,
followed by an isothermal compression, followed by an isochoric pressure decrease. Label each stage
and indicate the net work done.

**Answer.** The isothermal expansion is a hyperbola from $(V_1, p_1)$ to $(V_2, p_2)$ where
$p_2 < p_1$. The isochoric pressure increase is a vertical line up at $V = V_2$ to some pressure
$p_3 > p_1$. The isothermal compression follows a hyperbola back from $(V_2, p_3)$ to $(V_1, p_4)$.
The isochoric decrease is a vertical line down at $V_1$ back to $(V_1, p_1)$. The net work done is
the area enclosed by the cycle (clockwise = positive net work output).

<b>If you get this wrong, revise:</b>
[Thermodynamic Processes on $p$-$V$ Diagrams](#3-thermodynamic-processes-on-p-v-diagrams)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

Explain why a refrigerator cannot cool a room by leaving its door open.

**Answer.** A refrigerator transfers heat from its interior (cold reservoir) to the room (hot
reservoir) using work from its compressor. With the door open, the cold and hot reservoirs are the
same room. The refrigerator exhausts more heat (into the room) than it removes (from the room),
because $Q_H = Q_C + W$ where $W$ is the electrical work input. The net effect is that the room
heats up, not cools. This is consistent with the second law — you cannot transfer heat from cold to
hot without external work, and the work input adds to the total heat in the room.

<b>If you get this wrong, revise:</b>
[The Second Law of Thermodynamics](#5-the-second-law-of-thermodynamics)

</p>
</details>
