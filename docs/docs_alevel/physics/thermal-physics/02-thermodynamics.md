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

<PhetSimulation simulationId="gas-properties" title="Gas Properties" />

Explore the simulation above to develop intuition for this topic.

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
convention where $W$ is work done on the system.
:::

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

$$dW_{\mathrm{by}} = F\,\Delta x = pA\,\Delta x = p\,\Delta V$$

For a finite expansion:

$$\boxed{W_{\mathrm{by}} = \int_{V_1}^{V_2} p\,dV}$$

### Derivation of Work Done by Gas at Constant Pressure

1. A gas at pressure $p$ is in a cylinder with a frictionless piston of area $A$.
2. The gas exerts a force $F = pA$ on the piston.
3. When the piston moves outward by distance $\Delta x$, the work done by the gas is:

$$W_{\mathrm{by}} = F\Delta x = pA\Delta x$$

4. Since the volume change $\Delta V = A\Delta x$:

$$\boxed{W_{\mathrm{by}} = p\Delta V}$$

$\square$

**Special case: work done by gas at constant pressure:**

$$W_{\mathrm{by}} = p\Delta V = p(V_2 - V_1)$$

The work done by the gas equals the **area under the $p$-$V$ curve**.

In our convention (work done on system): $W_{\mathrm{on}} = -W_{\mathrm{by}} = -p\Delta V$ for
constant pressure.

## 3. Thermodynamic Processes on $p$-$V$ Diagrams

### Isobaric (Constant Pressure)

$$p = \mathrm{const}, \qquad W_{\mathrm{by}} = p\Delta V$$

On a $p$-$V$ diagram: a horizontal line. The area under it equals $p\Delta V$.

### Isochoric (Isovolumetric, Constant Volume)

$$V = \mathrm{const}, \qquad W_{\mathrm{by}} = 0$$

On a $p$-$V$ diagram: a vertical line. No area underneath, so no work is done.

From the first law: $\Delta U = Q$ (all heat goes into internal energy).

### Isothermal (Constant Temperature)

For an ideal gas, $pV = nRT = \mathrm{const}$, so $pV = \mathrm{const}$ — a **hyperbola** on the
$p$-$V$ diagram.

$$W_{\mathrm{by}} = \int_{V_1}^{V_2} p\,dV = \int_{V_1}^{V_2} \frac{nRT}{V}\,dV = nRT\ln\frac{V_2}{V_1}$$

For an ideal gas, internal energy depends only on temperature ($U = \frac{3}{2}Nk_BT$), so
$\Delta U = 0$ for an isothermal process.

From the first law: $Q = -W_{\mathrm{on}} = W_{\mathrm{by}}$.

### Adiabatic

No heat exchange with the surroundings: $Q = 0$.

From the first law: $\Delta U = W_{\mathrm{on}}$.

For an ideal gas undergoing a reversible adiabatic process:

$$pV^{\gamma} = \mathrm{constant}$$

where $\gamma = C_p/C_v$ is the ratio of specific heats. For a monatomic ideal gas, $\gamma = 5/3$.
For a diatomic gas (like air), $\gamma \approx 7/5 = 1.4$.

On a $p$-$V$ diagram, an adiabatic curve is **steeper** than an isothermal curve passing through the
same point.

**Intuition.** In an adiabatic expansion, the gas does work ($W_{\mathrm{by}} > 0$), so
$W_{\mathrm{on}} < 0$, giving $\Delta U < 0$ — the gas cools. In an adiabatic compression, the gas
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

$$\eta = \frac{W_{\mathrm{out}}}{Q_H} = \frac{Q_H - Q_C}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

**Derivation of Carnot efficiency.** For the Carnot cycle, $Q_H/T_H = Q_C/T_C$ (from the properties
of reversible cycles):

$$\frac{Q_C}{Q_H} = \frac{T_C}{T_H}$$

$$\boxed{\eta_{\mathrm{Carnot}} = 1 - \frac{T_C}{T_H}}$$

where $T_H$ and $T_C$ are the absolute temperatures of the hot and cold reservoirs.

**Key results:**

- The Carnot efficiency depends **only** on the two temperatures, not on the working substance.
- No real engine can exceed the Carnot efficiency.
- 100% efficiency requires $T_C = 0$ K (absolute zero), which is unattainable.

**Intuition.** The larger the temperature difference between hot and cold reservoirs, the more
efficiently you can convert heat into work. A car engine is limited because the exhaust temperature
cannot be reduced to absolute zero.

### Derivation of $Q_H/T_H = Q_C/T_C$

**Proof.** Consider the Carnot cycle step by step:

1. **Isothermal expansion at $T_H$:** Gas absorbs heat $Q_H$ from hot reservoir. Since $T$ is
   constant, $\Delta U = 0$ and $Q_H = W_1$ (work done by gas equals heat absorbed).

2. **Adiabatic expansion ($T_H \to T_C$):** $Q = 0$. Gas cools from $T_H$ to $T_C$.

3. **Isothermal compression at $T_C$:** Gas rejects heat $Q_C$ to cold reservoir. $|Q_C| = W_3$
   (work done on gas equals heat rejected).

4. **Adiabatic compression ($T_C \to T_H$):** $Q = 0$. Gas heats from $T_C$ to $T_H$.

For the adiabatic steps, $TV^{\gamma-1} = \mathrm{const}$, so
$T_H V_2^{\gamma-1} = T_C V_3^{\gamma-1}$ and $T_C V_4^{\gamma-1} = T_H V_1^{\gamma-1}$, which gives
$V_2/V_1 = V_3/V_4$.

For the isothermal steps, $W_1 = nRT_H \ln(V_2/V_1)$ and $W_3 = nRT_C \ln(V_3/V_4)$. Since
$V_2/V_1 = V_3/V_4$:

$$\frac{Q_H}{T_H} = nR\ln\frac{V_2}{V_1} = nR\ln\frac{V_3}{V_4} = \frac{Q_C}{T_C}$$

$\square$

### Heat Pumps and Refrigerators

A **refrigerator** is a heat engine run in reverse: work $W$ is done on the system to transfer heat
$Q_C$ from a cold reservoir to a hot reservoir, rejecting $Q_H = Q_C + W$.

The **coefficient of performance** (COP) of a refrigerator:

$$\mathrm{COP}_{\mathrm{ref}} = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C} = \frac{T_C}{T_H - T_C}$$

A **heat pump** heats a building by extracting heat from outside (cold reservoir) and dumping it
inside (hot reservoir):

$$\mathrm{COP}_{\mathrm{hp}} = \frac{Q_H}{W} = \frac{T_H}{T_H - T_C}$$

Note that $\mathrm{COP}_{\mathrm{hp}} = \mathrm{COP}_{\mathrm{ref}} + 1$.

:::warning Common Pitfall Students often confuse engine efficiency ($\eta = W/Q_H$) with
refrigerator COP ($Q_C/W$). The key difference: efficiency is a fraction (always $\lt 1$), while COP
can exceed 1 (you move more heat than the work you put in).
:::

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

$$\Delta S_{\mathrm{total}} \geq 0$$

**Intuition.** The second law explains why some processes are irreversible: an egg can break but not
unscramble; heat flows from hot to cold but not the reverse. It sets a fundamental limit on the
efficiency of all engines and refrigerators.

### Entropy from the Carnot Cycle

**Derivation of entropy as a state function.** For a reversible Carnot cycle:

$$\oint \frac{dQ}{T} = \frac{Q_H}{T_H} - \frac{Q_C}{T_C} = 0$$

This shows $dQ/T$ is an **exact differential** -- its integral around any closed reversible path is
zero. Therefore, $\oint dQ_{\mathrm{rev}}/T = 0$ defines a state function, which we call **entropy**
$S$:

$$dS = \frac{dQ_{\mathrm{rev}}}{T}, \qquad \Delta S = \int \frac{dQ_{\mathrm{rev}}}{T}$$

For an **irreversible** process, $\Delta S_{\mathrm{total}} > 0$. For a **reversible** process,
$\Delta S_{\mathrm{total}} = 0$.

**Proof that heat flows from hot to cold.** Consider two bodies at $T_H > T_C$ exchanging a small
amount of heat $dQ$ reversibly through a Carnot engine. The total entropy change is:

$$dS_{\mathrm{total}} = -\frac{dQ}{T_H} + \frac{dQ}{T_C} = dQ\left(\frac{1}{T_C} - \frac{1}{T_H}\right) > 0$$

since $T_C < T_H$. This is consistent with the second law: the process (heat from hot to cold
through a reversible engine) increases total entropy. The reverse process would decrease total
entropy, which is forbidden.

$\square$

### Molecular Interpretation of Entropy

**Boltzmann's entropy formula:**

$$\boxed{S = k_B \ln W}$$

where $W$ is the number of microstates (distinct arrangements of particles) corresponding to a given
macrostate.

**Intuition.** A gas in a small volume has fewer accessible microstates than the same gas allowed to
expand into a larger volume. When a gas expands freely into a vacuum, $W$ increases enormously, so
entropy increases -- yet no energy is transferred and no work is done (free expansion). This is an
irreversible process driven purely by probability: the system evolves towards the macrostate with
the most microstates.

For a phase change: ice has an ordered crystal lattice (low $W$), while liquid water has disordered
molecular arrangements (high $W$). Melting increases entropy because molecules gain access to many
more configurations. Similarly, vaporisation produces a much larger entropy increase because gas
molecules have far more positional freedom.

:::tip Exam Technique When asked about the second law, state it clearly (Clausius or Kelvin form),
give a consequence (no 100% efficient engine), and explain in terms of entropy if possible. On a
$p$-$V$ diagram, the Carnot cycle encloses the maximum possible area for given temperature limits.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
A gas in a cylinder expands isobarically from $2.0 \times 10^{-3}$ m$^3$ to $5.0 \times 10^{-3}$
m$^3$ at a pressure of $1.5 \times 10^5$ Pa. Calculate the work done by the gas.

**Answer.**
$W_{\mathrm{by}} = p\Delta V = 1.5 \times 10^5 \times (5.0 - 2.0) \times 10^{-3} = 1.5 \times 10^5 \times 3.0 \times 10^{-3} = 450$
J.

<b>If you get this wrong, revise:</b> [Work Done by a Gas](#2-work-done-by-a-gas)

</details>

<details>
<summary>Problem 2</summary>
200 J of heat is added to a gas while 80 J of work is done on the gas. Calculate the change in
internal energy.

**Answer.** $\Delta U = Q + W = 200 + 80 = 280$ J.

<b>If you get this wrong, revise:</b>
[The First Law of Thermodynamics](#1-the-first-law-of-thermodynamics)

</details>

<details>
<summary>Problem 3</summary>
A Carnot engine operates between 600 K and 300 K. Calculate its efficiency and the heat rejected to
the cold reservoir if it absorbs 500 J from the hot reservoir.

**Answer.** $\eta = 1 - T_C/T_H = 1 - 300/600 = 0.50 = 50\%$.

$Q_C = Q_H(1 - \eta) = 500 \times 0.50 = 250$ J.

<b>If you get this wrong, revise:</b> [Carnot Efficiency](#carnot-efficiency)

</details>

<details>
<summary>Problem 4</summary>
An ideal gas expands isothermally from $1.0 \times 10^{-3}$ m$^3$ to $4.0 \times 10^{-3}$ m$^3$ at
400 K. If there are 0.10 mol of gas, calculate the work done by the gas.

**Answer.**
$W_{\mathrm{by}} = nRT\ln(V_2/V_1) = 0.10 \times 8.31 \times 400 \times \ln(4) = 332.4 \times 1.386 = 461$
J.

<b>If you get this wrong, revise:</b> [Isothermal](#isothermal-constant-temperature)

</details>

<details>
<summary>Problem 5</summary>
In an isochoric process, 500 J of heat is added to a gas. Calculate the change in internal energy
and the work done.

**Answer.** Since $V$ is constant, $W = 0$. From the first law: $\Delta U = Q + W = 500 + 0 = 500$
J.

<b>If you get this wrong, revise:</b> [Isochoric](#isochoric-isovolumetric-constant-volume)

</details>

<details>
<summary>Problem 6</summary>
A heat engine operates between 500 K and 200 K with an efficiency of 45%. Is this possible according
to the second law?

**Answer.** Carnot efficiency $= 1 - 200/500 = 60\%$. Since 45% < 60%, this is possible (it is below
the maximum theoretical efficiency).

<b>If you get this wrong, revise:</b>
[The Second Law of Thermodynamics](#5-the-second-law-of-thermodynamics)

</details>

<details>
<summary>Problem 7</summary>
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

</details>

<details>
<summary>Problem 8</summary>
Explain why a refrigerator cannot cool a room by leaving its door open.

**Answer.** A refrigerator transfers heat from its interior (cold reservoir) to the room (hot
reservoir) using work from its compressor. With the door open, the cold and hot reservoirs are the
same room. The refrigerator exhausts more heat (into the room) than it removes (from the room),
because $Q_H = Q_C + W$ where $W$ is the electrical work input. The net effect is that the room
heats up, not cools. This is consistent with the second law — you cannot transfer heat from cold to
hot without external work, and the work input adds to the total heat in the room.

<b>If you get this wrong, revise:</b>
[The Second Law of Thermodynamics](#5-the-second-law-of-thermodynamics)

</details>

<details>
<summary>Problem 9</summary>

A heat pump is used to heat a building. The outside temperature is 5°C and the inside is maintained
at 22°C. Calculate the maximum possible COP and the electrical power required to deliver 5.0 kW of
heating.

**Answer.** $T_H = 295$ K, $T_C = 278$ K. Maximum COP (Carnot):
$\mathrm{COP}_{\mathrm{hp}} = T_H / (T_H - T_C) = 295/17 = 17.4$.

Power required: $W = Q_H / \mathrm{COP} = 5000 / 17.4 = 287$ W.

In practice, real heat pumps have COP of 3--5 due to irreversibilities, so actual power would be
1000--1700 W. The Carnot COP represents the theoretical upper bound.

<b>If you get this wrong, revise:</b> [Heat Pumps and Refrigerators](#heat-pumps-and-refrigerators)

</details>

<details>
<summary>Problem 10</summary>

Calculate the entropy change when 1.0 kg of ice at 0°C melts to water at 0°C.
($L_f = 3.34 \times 10^5$ J kg$^{-1}$.)

**Answer.** The melting occurs at constant temperature $T = 273$ K. The heat absorbed is
$Q = mL_f = 1.0 \times 3.34 \times 10^5 = 3.34 \times 10^5$ J.

$\Delta S = Q/T = 3.34 \times 10^5 / 273 = 1223$ J K$^{-1}$.

The entropy increases because the liquid phase has more disorder (more accessible microstates) than
the solid phase.

<b>If you get this wrong, revise:</b>
[Entropy from the Carnot Cycle](#entropy-from-the-carnot-cycle)

</details>

<details>
<summary>Problem 11</summary>

200 g of water at 90°C is mixed with 300 g of water at 20°C in an insulated container. Calculate the
final temperature and the total entropy change.

**Answer.** Energy conservation: $m_1 c (T_1 - T_f) = m_2 c (T_f - T_2)$.

$0.200(90 - T_f) = 0.300(T_f - 20)$.

$18 - 0.2T_f = 0.3T_f - 6$. $24 = 0.5T_f$. $T_f = 48$°C $= 321$ K.

Entropy change of hot water: $\Delta S_1 = 0.200 \times 4200 \times \ln(321/363) = -104.2$ J
K$^{-1}$. Entropy change of cold water: $\Delta S_2 = 0.300 \times 4200 \times \ln(321/293) = 117.7$
J K$^{-1}$. Total: $\Delta S_{\mathrm{total}} = -104.2 + 117.7 = 13.5$ J K$^{-1}$ > 0.

The positive total entropy confirms this is a spontaneous, irreversible process.

<b>If you get this wrong, revise:</b>
[Entropy from the Carnot Cycle](#entropy-from-the-carnot-cycle)

</details>

<details>
<summary>Problem 12</summary>

An ideal gas expands from $V_1 = 2.0 \times 10^{-3}$ m$^3$ to $V_2 = 8.0 \times 10^{-3}$ m$^3$ at
constant temperature $T = 400$ K. Calculate: (a) the work done by the gas, (b) the heat absorbed,
(c) the entropy change of the gas, (d) the entropy change of the universe.

**Answer.** (a) The gas does work, but we need $n$ or the initial pressure. Since $pV = nRT$ at both
states and $T$ is constant: $W_{\mathrm{by}} = nRT\ln(V_2/V_1)$. Without $n$ or $p_1$, we need more
information. Assume $p_1 = 2.0 \times 10^5$ Pa. Then
$n = p_1V_1/(RT) = 2.0 \times 10^5 \times 2.0 \times 10^{-3} / (8.31 \times 400) = 0.120$ mol.

$W_{\mathrm{by}} = nRT\ln(V_2/V_1) = 0.120 \times 8.31 \times 400 \times \ln(4) = 553$ J.

(b) $\Delta U = 0$ (isothermal, ideal gas), so $Q = -W_{\mathrm{on}} = W_{\mathrm{by}} = 553$ J
(heat absorbed).

(c) $\Delta S_{\mathrm{gas}} = Q/T = 553/400 = 1.38$ J K$^{-1}$.

(d) The surroundings lose heat $Q$ at temperature $T$, so $\Delta S_{\mathrm{surr}} = -Q/T = -1.38$
J K$^{-1}$. Total: $\Delta S_{\mathrm{universe}} = 0$ (reversible isothermal process).

<b>If you get this wrong, revise:</b> [Isothermal](#isothermal-constant-temperature)

</details>

<details>
<summary>Problem 13</summary>

Explain why the adiabatic curve on a $p$-$V$ diagram is steeper than the isothermal curve passing
through the same point.

**Answer.** For an isothermal process: $pV = \mathrm{const}$, so $p \propto 1/V$. For an adiabatic
process: $pV^{\gamma} = \mathrm{const}$, so $p \propto 1/V^{\gamma}$. Since $\gamma > 1$, the
adiabatic pressure drops faster with increasing volume than the isothermal pressure.

Physically: in an isothermal expansion, heat flows in to maintain temperature, so the pressure drop
is moderated. In an adiabatic expansion, no heat enters, so the gas cools
($\Delta U = W_{\mathrm{on}} < 0$), and the pressure drops both due to increased volume and
decreased temperature. The combined effect makes the adiabatic curve steeper.

At any given volume $V > V_0$ (expansion from $V_0$), the adiabatic pressure is lower than the
isothermal pressure because the gas is colder.

<b>If you get this wrong, revise:</b> [Adiabatic](#adiabatic)

</details>

<details>
<summary>Problem 14</summary>

A real engine operates between 600 K and 300 K with an actual efficiency of 40%. Calculate: (a) the
Carnot efficiency, (b) the heat absorbed per cycle if the engine delivers 500 J of work per cycle,
(c) the entropy change of the universe per cycle.

**Answer.** (a) $\eta_{\mathrm{Carnot}} = 1 - 300/600 = 50\%$.

(b) $W = \eta \times Q_H$. $Q_H = W/\eta = 500/0.40 = 1250$ J. $Q_C = Q_H - W = 750$ J.

(c)
$\Delta S_{\mathrm{universe}} = -Q_H/T_H + Q_C/T_C = -1250/600 + 750/300 = -2.083 + 2.500 = 0.417$ J
K$^{-1}$ per cycle.

The positive entropy production confirms the engine is irreversible (if it were reversible,
$\Delta S_{\mathrm{universe}} = 0$ and $\eta = \eta_{\mathrm{Carnot}}$).

<b>If you get this wrong, revise:</b>
[Entropy from the Carnot Cycle](#entropy-from-the-carnot-cycle)

</details>

<details>
<summary>Problem 15</summary>

Derive the relation $pV^{\gamma} = \mathrm{const}$ for a reversible adiabatic process starting from
the first law and the ideal gas law.

**Answer.** For an adiabatic process, $Q = 0$, so $\Delta U = W_{\mathrm{on}} = -p\,dV$
(infinitesimal work done on system).

For $n$ moles of ideal gas: $dU = nC_v\,dT$.

$nC_v\,dT = -p\,dV$. Using $p = nRT/V$:

$nC_v\,dT = -\frac{nRT}{V}\,dV$.

$\frac{dT}{T} = -\frac{R}{C_v}\frac{dV}{V}$.

Since $R = C_p - C_v$ and $\gamma = C_p/C_v$: $\frac{R}{C_v} = \frac{C_p - C_v}{C_v} = \gamma - 1$.

Integrating: $\ln T = -(\gamma - 1)\ln V + \mathrm{const}$, so $TV^{\gamma-1} = \mathrm{const}$.

Using $T = pV/(nR)$: $\frac{pV}{nR} V^{\gamma-1} = \mathrm{const}$, giving
$pV^{\gamma} = \mathrm{const}$.

$\square$

<b>If you get this wrong, revise:</b> [Adiabatic](#adiabatic)

</details>
