---
title: thermodynamics
slug: university-physics/thermodynamics
date: 2026-05-30
tags:
  - University Physics
categories:
  - University Physics
description:
  'University-level thermodynamics: laws of thermodynamics, entropy, free energy, thermodynamic
  potentials, phase transitions, statistical mechanics foundations,.'
---

## 1. Introduction

### 1.1 Scope of Thermodynamics

**Thermodynamics** is the branch of physics that deals with heat, work, temperature, and their
relation to energy, entropy, and the physical properties of matter. It provides a macroscopic
description of systems without requiring detailed knowledge of microscopic constituents.

Unlike classical mechanics, which describes individual particle trajectories, thermodynamics
operates on aggregate quantities — pressure, volume, temperature, and internal energy — that
characterise bulk matter.

### 1.2 Macroscopic vs Microscopic Perspectives

**Classical thermodynamics** is purely macroscopic: it relates observable quantities through
empirical laws (the four laws of thermodynamics) without reference to atoms or molecules.

**Statistical mechanics** provides the microscopic foundation: macroscopic thermodynamic quantities
emerge as statistical averages over enormous numbers of microscopic states. The bridge between the
two perspectives is given by Boltzmann's entropy formula:

$$S = k_B \ln \Omega$$

where $\Omega$ is the number of accessible microstates.

### 1.3 Systems, Boundaries, and Processes

A **thermodynamic system** is the portion of the universe under study, separated from its
**surroundings** by a boundary. Systems are classified by the nature of their boundary:

- **Open:** Exchange of both matter and energy.
- **Closed:** Exchange of energy but not matter.
- **Isolated:** No exchange of matter or energy.

A **thermodynamic process** is a change of state of a system. Key processes include:

- **Isothermal:** Constant temperature ($dT = 0$).
- **Adiabatic:** No heat exchange ($\delta Q = 0$).
- **Isobaric:** Constant pressure ($dp = 0$).
- **Isochoric:** Constant volume ($dV = 0$).

## 2. Zeroth and First Laws

### 2.1 The Zeroth Law and Temperature

**Zeroth Law of Thermodynamics.** If system $A$ is in thermal equilibrium with system $B$, and
system $B$ is in thermal equilibrium with system $C$, then $A$ is in thermal equilibrium with $C$.

This law establishes **temperature** as a well-defined property: all systems in mutual thermal
equilibrium share the same temperature. It motivates the existence of temperature scales and
thermometers.

The **ideal gas temperature scale** is defined by the ideal gas law, which experiments show is
approached by all real gases in the low-density limit:

$$pV = nRT$$

where $R = 8.314\;\text{J mol}^{-1}\text{K}^{-1}$ is the molar gas constant. The temperature in
Kelvin is defined such that the triple point of water is exactly $273.16\;\text{K}$.

### 2.2 The First Law and Internal Energy

**First Law of Thermodynamics.** The change in internal energy of a system equals the heat added to
the system minus the work done by the system:

$$dU = \delta Q - \delta W$$

or equivalently (sign convention: work done _on_ the system):

$$\Delta U = Q - W$$

where $\Delta U$ depends only on the initial and final states (it is a **state function**), while
$Q$ and $W$ depend on the path taken.

### 2.3 Work and Heat

For a quasi-static process, the work done by an ideal gas expanding against an external pressure is:

$$\delta W = p\,dV$$

Other forms of work include:

$$\delta W = -\mathcal{E}\,dq \quad \text{(electrical)}, \qquad \delta W = \gamma\,dA \quad \text{(surface tension)}, \qquad \delta W = -\mathbf{M} \cdot d\mathbf{B} \quad \text{(magnetic)}$$

**Heat capacity** relates heat input to temperature change:

$$C = \frac{\delta Q}{dT}$$

For ideal gases:

- At constant volume: $C_V = \frac{f}{2}nR$ where $f$ is the number of degrees of freedom.
- At constant pressure: $C_p = C_V + nR$ (Mayer's relation).
- The ratio: $\gamma = C_p/C_V = (f+2)/f$.

### 2.4 Ideal Gas Processes

**Isothermal expansion** ($T = \text{const}$): From $pV = nRT$ and $dU = 0$ (ideal gas internal
energy depends only on $T$):

$$Q = W = nRT \ln\frac{V_f}{V_i}$$

**Adiabatic expansion** ($\delta Q = 0$): From the first law, $dU = -\delta W = -p\,dV$. For an
ideal gas this yields the adiabatic relation:

$$pV^\gamma = \text{const}, \qquad TV^{\gamma-1} = \text{const}$$

**Isobaric expansion** ($p = \text{const}$):

$$W = p(V_f - V_i), \qquad Q = nC_p(T_f - T_i)$$

<details>
<summary>Worked Example 2.1: Adiabatic Compression of a Monatomic Gas</summary>

A monatomic ideal gas ($\gamma = 5/3$) is compressed adiabatically from $V_1 = 10\;\text{L}$,
$T_1 = 300\;\text{K}$ to $V_2 = 2\;\text{L}$.

$$T_2 = T_1 \left(\frac{V_1}{V_2}\right)^{\gamma - 1} = 300 \times 5^{2/3} = 300 \times 2.924 = 877\;\text{K}$$

$$W = \frac{nR(T_1 - T_2)}{\gamma - 1} = \frac{nR(300 - 877)}{2/3} = -\frac{3}{2}nR \times 577$$

For $n = 1\;\text{mol}$: $W = -\frac{3}{2}(8.314)(577) = -7.19\;\text{kJ}$ (negative = work done on
the gas).

</details>

## 3. Second Law and Entropy

### 3.1 The Second Law: Statements

**Clausius statement.** Heat cannot spontaneously flow from a colder body to a hotter body.

**Kelvin–Planck statement.** No process is possible whose sole result is the complete conversion of
heat into work.

Both statements are equivalent — a violation of one implies a violation of the other.

### 3.2 The Carnot Cycle

The **Carnot cycle** is the most efficient heat engine operating between two temperatures. It
consists of four reversible stages:

1. **Isothermal expansion** at $T_H$: absorb heat $Q_H$ from the hot reservoir.
2. **Adiabatic expansion:** temperature drops from $T_H$ to $T_C$.
3. **Isothermal compression** at $T_C$: reject heat $Q_C$ to the cold reservoir.
4. **Adiabatic compression:** temperature rises from $T_C$ to $T_H$.

The **Carnot efficiency** is:

$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$$

This is the maximum possible efficiency for any heat engine operating between $T_H$ and $T_C$.

### 3.3 Entropy

**Definition (Clausius entropy).** For a reversible process:

$$dS = \frac{\delta Q_{\text{rev}}}{T}$$

Entropy is a **state function**: its change depends only on initial and final states.

**Second Law (entropy form).** For any process, the total entropy of an isolated system never
decreases:

$$\Delta S_{\text{total}} \geq 0$$

with equality if and only if the process is reversible.

For an ideal gas undergoing a reversible process:

$$\Delta S = nC_V \ln\frac{T_f}{T_i} + nR \ln\frac{V_f}{V_i}$$

### 3.4 Entropy of Mixing

When $n_A$ moles of ideal gas $A$ and $n_B$ moles of ideal gas $B$, initially separated, are allowed
to mix at the same $T$ and $p$:

$$\Delta S_{\text{mix}} = -n_A R \ln x_A - n_B R \ln x_B$$

where $x_A = n_A/(n_A + n_B)$ is the mole fraction. This is always positive (since $x_i < 1$),
reflecting the irreversibility of spontaneous mixing.

### 3.5 The Clausius Inequality

For any cyclic process:

$$\oint \frac{\delta Q}{T} \leq 0$$

with equality for reversible cycles. This generalises the second law: $\delta Q/T$ is a perfect
differential ($= dS$) only for reversible processes; for irreversible processes, $\delta Q < T\,dS$.

## 4. Thermodynamic Potentials

### 4.1 Motivation

The first law $dU = \delta Q - \delta W$ involves the path-dependent quantities $Q$ and $W$.
**Thermodynamic potentials** are state functions that replace $Q$ and $W$ with combinations of state
variables, making analysis of equilibrium and spontaneity purely in terms of state variables.

### 4.2 The Four Potentials

| Potential             | Symbol       | Natural Variables | Differential          |
| --------------------- | ------------ | ----------------- | --------------------- |
| Internal energy       | $U$          | $S, V$            | $dU = T\,dS - p\,dV$  |
| Enthalpy              | $H = U + pV$ | $S, p$            | $dH = T\,dS + V\,dp$  |
| Helmholtz free energy | $F = U - TS$ | $T, V$            | $dF = -S\,dT - p\,dV$ |
| Gibbs free energy     | $G = H - TS$ | $T, p$            | $dG = -S\,dT + V\,dp$ |

**Physical meaning:**

- $H$: Total heat content at constant pressure; enthalpy change equals heat at constant $p$.
- $F$: Maximum work extractable at constant $T$. Equilibrium at constant $T, V$: $dF \leq 0$.
- $G$: Maximum non-expansion work at constant $T, p$. Equilibrium at constant $T, p$: $dG \leq 0$.

### 4.3 Legendre Transforms

The potentials are related by **Legendre transforms**, which replace one natural variable with its
conjugate:

$$H = U + pV \quad (\text{replace } V \text{ by } p), \qquad F = U - TS \quad (\text{replace } S \text{ by } T), \qquad G = U - TS + pV$$

This structure is systematic: starting from the fundamental relation $U(S, V)$, each Legendre
transform swaps one variable for its conjugate to obtain a potential that is natural for different
experimental conditions.

### 4.4 Equilibrium Conditions

At equilibrium, the relevant thermodynamic potential is minimised:

- **Constant $S, V$:** minimise $U$ (isolated system).
- **Constant $S, p$:** minimise $H$ (isobaric, adiabatic system).
- **Constant $T, V$:** minimise $F$ (isothermal, closed rigid system).
- **Constant $T, p$:** minimise $G$ (isothermal, isobaric system — most common).

<details>
<summary>Worked Example 4.1: Gibbs Free Energy of a Phase Transition</summary>

Consider melting of ice at $T = 273\;\text{K}$, $p = 1\;\text{atm}$. At the melting point, both
phases coexist in equilibrium, so $\Delta G = 0$.

$$\Delta G = \Delta H - T\Delta S = 0 \implies \Delta S = \frac{\Delta H}{T} = \frac{6010\;\text{J/mol}}{273\;\text{K}} = 22.0\;\text{J mol}^{-1}\text{K}^{-1}$$

Above $273\;\text{K}$, $\Delta G < 0$ for melting (spontaneous). Below $273\;\text{K}$,
$\Delta G > 0$ (melting is non-spontaneous; freezing is).

</details>

## 5. Maxwell Relations

### 5.1 Derivation from Exact Differentials

Since $U$, $H$, $F$, $G$ are state functions, their differentials are exact. For an exact
differential $dz = M\,dx + N\,dy$, the cross-partial derivatives are equal:
$\partial M/\partial y = \partial N/\partial x$.

Applying this to the four thermodynamic potentials:

**From $dU = T\,dS - p\,dV$:**

$$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial p}{\partial S}\right)_V$$

**From $dH = T\,dS + V\,dp$:**

$$\left(\frac{\partial T}{\partial p}\right)_S = \left(\frac{\partial V}{\partial S}\right)_p$$

**From $dF = -S\,dT - p\,dV$:**

$$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial p}{\partial T}\right)_V$$

**From $dG = -S\,dT + V\,dp$:**

$$\left(\frac{\partial S}{\partial p}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_p$$

These are the four **Maxwell relations**.

### 5.2 Applications

**Example (Relation between $C_p$ and $C_V$):** Using Maxwell relations and the chain rule, this can
be shown:

$$C_p - C_V = T\left(\frac{\partial p}{\partial T}\right)_V \left(\frac{\partial V}{\partial T}\right)_p$$

For an ideal gas, $\left(\frac{\partial p}{\partial T}\right)_V = nR/V$ and
$\left(\frac{\partial V}{\partial T}\right)_p = nR/p$, giving $C_p - C_V = nR$.

**Example (Internal energy of an ideal gas):** Using the Maxwell relation
$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial p}{\partial T}\right)_V = nR/V$
and integrating:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial p}{\partial T}\right)_V - p = T \cdot \frac{nR}{V} - p = p - p = 0$$

This proves that for an ideal gas, $U$ depends only on $T$ (Joule's law).

## 6. Phase Transitions

### 6.1 Classification

Phase transitions are classified by the behaviour of thermodynamic quantities and their derivatives:

**First-order transitions** involve a discontinuity in a first derivative of the Gibbs free energy
(e.g., $V$ or $S$). There is latent heat:

$$\Delta Q = T \Delta S = T(S_{\text{phase 2}} - S_{\text{phase 1}})$$

Examples: melting, boiling, sublimation.

**Second-order (continuous) transitions** involve a discontinuity in a _second_ derivative of $G$
(e.g., $C_p$, compressibility, thermal expansion coefficient). There is no latent heat.

Examples: superconducting transition, ferromagnetic Curie point, superfluid transition of $^4$He.

### 6.2 The Clausius–Clapeyron Equation

For a first-order phase transition along the coexistence curve:

$$\frac{dp}{dT} = \frac{\Delta S}{\Delta V} = \frac{L}{T \Delta V}$$

where $L = T\Delta S$ is the latent heat and $\Delta V$ is the volume change.

**Application (liquid–vapour):** If $\Delta V \approx V_{\text{gas}} = nRT/p$ (vapour treated as
ideal gas, liquid volume neglected):

$$\frac{dp}{dT} = \frac{Lp}{nRT^2} \implies \ln p = -\frac{L}{nR} \cdot \frac{1}{T} + \text{const}$$

This is the approximate form of the vapour pressure curve.

### 6.3 Critical Phenomena

At a **critical point**, the distinction between phases vanishes. For the liquid–vapour transition
in a van der Waals gas, the critical point is at:

$$T_c = \frac{8a}{27bR}, \qquad p_c = \frac{a}{27b^2}, \qquad V_c = 3nb$$

Near the critical point, thermodynamic quantities exhibit power-law behaviour characterised by
**critical exponents**. For example, the order parameter (e.g., density difference between liquid
and gas) vanishes as $|T - T_c|^\beta$ where $\beta \approx 0.326$ (the 3D Ising universality
class).

### 6.4 Order Parameters

An **order parameter** is a thermodynamic quantity that is zero in one phase and nonzero in another:

- Liquid–gas: density difference $\rho_l - \rho_g$.
- Ferromagnet: magnetisation $M$.
- Superconductor: energy gap $\Delta$ or superfluid density $\rho_s$.

Landau theory provides a phenomenological framework: the free energy is expanded as a power series
in the order parameter, with coefficients depending on temperature. Symmetry of the free energy
determines which terms appear.

## 7. Statistical Mechanics Foundations

### 7.1 Microstates and Macrostates

A **microstate** is a complete specification of the state of a system (positions and momenta of all
particles). A **macrostate** is specified by macroscopic variables ($E, V, N$).

The **fundamental postulate of statistical mechanics** (postulate of equal a priori probabilities):
an isolated system in equilibrium is equally likely to be found in any of its accessible
microstates.

### 7.2 The Boltzmann Distribution

For a system in thermal equilibrium at temperature $T$ with a heat bath, the probability of the
system being in microstate $i$ with energy $E_i$ is:

$$p_i = \frac{e^{-\beta E_i}}{Z}$$

where $\beta = 1/(k_B T)$ and $Z$ is the **partition function**.

### 7.3 The Partition Function

The **canonical partition function** for a system with discrete energy levels is:

$$Z = \sum_i e^{-\beta E_i}$$

For a classical ideal gas (continuous energies):

$$Z = \frac{1}{N! h^{3N}} \int e^{-\beta H(\mathbf{p}, \mathbf{q})}\, d^{3N}p\, d^{3N}q$$

The partition function encodes **all** thermodynamic information:

$$U = -\frac{\partial \ln Z}{\partial \beta}, \qquad F = -k_B T \ln Z, \qquad S = k_B(\ln Z + \beta U)$$

<details>
<summary>Worked Example 7.1: Partition Function of a Classical Ideal Gas</summary>

For $N$ non-interacting particles in a 3D box of volume $V$:

$$Z_1 = \frac{V}{\lambda^3} \quad \text{(single-particle partition function)}$$

where $\lambda = h/\sqrt{2\pi m k_B T}$ is the **thermal de Broglie wavelength**.

$$Z_N = \frac{Z_1^N}{N!} = \frac{1}{N!}\left(\frac{V}{\lambda^3}\right)^N$$

$$F = -k_B T \ln Z_N = -k_B T \left[N \ln \frac{V}{\lambda^3} - \ln N!\right]$$

Using Stirling's approximation $\ln N! \approx N \ln N - N$:

$$F = Nk_B T \left[\ln\left(\frac{N\lambda^3}{V}\right) - 1\right]$$

$$p = -\left(\frac{\partial F}{\partial V}\right)_T = \frac{Nk_B T}{V} \quad \text{(recovers ideal gas law)}$$

</details>

### 7.4 Connection to Thermodynamics

The statistical definition of entropy is:

$$S = k_B \ln \Omega$$

For the canonical ensemble:

$$S = k_B(\ln Z + \beta U) = -\left(\frac{\partial F}{\partial T}\right)_V$$

This connects the microscopic counting of states to the macroscopic entropy defined by the Clausius
relation $dS = \delta Q_{\text{rev}}/T$.

## 8. Heat Engines and Refrigerators

### 8.1 Heat Engines

A **heat engine** converts heat into work by operating between a hot reservoir at $T_H$ and a cold
reservoir at $T_C$.

**Efficiency:**

$$\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

**Carnot efficiency** (maximum possible):

$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$$

### 8.2 Refrigerators and Heat Pumps

A **refrigerator** uses work to transfer heat from a cold reservoir to a hot reservoir.

**Coefficient of Performance (refrigerator):**

$$\text{COP}_R = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C}$$

**Carnot COP (refrigerator):**

$$\text{COP}_{R,\text{Carnot}} = \frac{T_C}{T_H - T_C}$$

For a **heat pump** (heating mode):

$$\text{COP}_{HP} = \frac{Q_H}{W} = \frac{Q_H}{Q_H - Q_C}, \qquad \text{COP}_{HP,\text{Carnot}} = \frac{T_H}{T_H - T_C}$$

### 8.3 The Otto Cycle

The **Otto cycle** models a petrol engine:

1. **Adiabatic compression** ($V_1 \to V_2$).
2. **Isochoric combustion** ($V_2 = \text{const}$, heat $Q_H$ added).
3. **Adiabatic expansion / power stroke** ($V_2 \to V_1$).
4. **Isochoric rejection** ($V_1 = \text{const}$, heat $Q_C$ expelled).

$$\eta_{\text{Otto}} = 1 - \frac{1}{r^{\gamma-1}}$$

where $r = V_1/V_2$ is the **compression ratio**. Higher $r$ gives higher efficiency, but in
practice is limited by engine knock.

### 8.4 The Diesel Cycle

The **Diesel cycle** models a diesel engine:

1. **Adiabatic compression** ($V_1 \to V_2$).
2. **Isobaric combustion** ($p = \text{const}$, heat $Q_H$ added).
3. **Adiabatic expansion** ($V_3 \to V_4$).
4. **Isochoric rejection** ($V_4 = \text{const}$, heat $Q_C$ expelled).

$$\eta_{\text{Diesel}} = 1 - \frac{1}{r^{\gamma-1}} \cdot \frac{\alpha^\gamma - 1}{\gamma(\alpha - 1)}$$

where $r = V_1/V_2$ is the compression ratio and $\alpha = V_3/V_2$ is the **cut-off ratio**.

<details>
<summary>Worked Example 8.1: Otto Cycle Efficiency</summary>

A petrol engine with compression ratio $r = 10$ uses air ($\gamma = 1.4$):

$$\eta = 1 - \frac{1}{10^{0.4}} = 1 - \frac{1}{2.512} = 1 - 0.398 = 0.602$$

That is, 60.2% efficiency in the ideal Otto cycle. Real engines achieve roughly 25–35% due to
friction, heat losses, incomplete combustion, and finite combustion speed.

</details>

---

## 9. Common Pitfalls

1. **"Heat and internal energy are the same thing."** Heat $Q$ is energy in transit due to a
   temperature difference; it is a path-dependent process quantity. Internal energy $U$ is a state
   function depending only on the current state. Adding heat does not "increase the heat" in a body
   — it increases the internal energy.

2. **"$\Delta S = 0$ only for reversible processes."** False. Entropy is a state function, so
   $\Delta S$ between two equilibrium states is the same regardless of path (reversible or
   irreversible). To _calculate_ $\Delta S$, you imagine a reversible path between the same states,
   but the result is path-independent. What is path-dependent is the total entropy _generation_:
   $\Delta S_{\text{gen}} = \Delta S - Q/T_{\text{surr}} \geq 0$.

3. **"The Carnot efficiency applies to all heat engines."** The Carnot efficiency
   $\eta = 1 - T_C/T_H$ is an _upper bound_ achievable only by a reversible engine operating between
   two _thermal reservoirs_. Real engines (Otto, Diesel) operate between varying temperatures and
   are irreversible.

4. **"Free energy minimisation determines equilibrium in all conditions."** Different potentials are
   minimised under different constraints. At constant $T$ and $p$, minimise $G$. At constant $T$ and
   $V$, minimise $F$. At constant $S$ and $V$, minimise $U$. Applying the wrong potential leads to
   incorrect predictions.

5. **"The Maxwell relations are independent identities to be memorised."** All four follow from the
   exactness of the differential of one of the four thermodynamic potentials. They are
   systematically generated, not independent. If you remember the four differentials, you can derive
   all four relations on the spot using
   $\partial^2 f/\partial x\partial y = \partial^2 f/\partial y\partial x$.

6. **"At the critical point, the first-order phase transition becomes continuous."** The distinction
   between first-order and continuous is meaningful only away from the critical point. At the
   critical point itself, the transition is characterised by diverging correlation lengths and
   universal critical exponents, described by renormalisation group theory rather than classical
   thermodynamics alone.

7. **"The Boltzmann factor $e^{-\beta E}$ applies to isolated systems."** The Boltzmann distribution
   applies to a system in contact with a heat bath (canonical ensemble). For an isolated system with
   fixed total energy $E$, the correct description is the **microcanonical ensemble**, where all
   accessible microstates at energy $E$ are equally probable.

---

## 10. Summary

- **Zeroth law** establishes temperature as a transitive, well-defined equilibrium property.
- **First law** ($dU = \delta Q - \delta W$) is energy conservation; $U$ is a state function while
  $Q$ and $W$ are path-dependent.
- **Second law** ($\Delta S_{\text{total}} \geq 0$) dictates the direction of spontaneous processes
  and limits engine efficiency to $\eta \leq 1 - T_C/T_H$.
- **Entropy** ($dS = \delta Q_{\text{rev}}/T$) measures irreversibility; Boltzmann's formula
  $S = k_B \ln \Omega$ connects it to microscopic state counting.
- **Thermodynamic potentials** ($U$, $H$, $F$, $G$) replace path-dependent $Q$ and $W$ with state
  functions; each is natural for specific experimental conditions.
- **Maxwell relations** follow from exact differentials and allow rewriting hard-to-measure partial
  derivatives in terms of accessible quantities.
- **Phase transitions** are classified by discontinuities in derivatives of $G$; the
  Clausius–Clapeyron equation governs coexistence curves; critical phenomena exhibit universal power
  laws.
- **Statistical mechanics** provides the microscopic foundation via the partition function, which
  encodes all thermodynamic quantities through its logarithm and derivatives.
- **Heat engines** (Carnot, Otto, Diesel) are limited by the second law; efficiency increases with
  compression ratio and temperature differential.

---

## Cross-References

| Topic                          | Link                                                                        |
| ------------------------------ | --------------------------------------------------------------------------- |
| Classical Mechanics            | [View](/docs/university/physics/classical-mechanics)                        |
| Quantum Mechanics I            | [View](/docs/university/physics/quantum-mechanics)                          |
| Solid State Physics            | [View](/docs/university/physics/solid-state-physics)                        |
| Electromagnetism               | [View](/docs/university/physics/electromagnetism)                           |
| MIT 5.60 Thermodynamics        | [View](https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-fall-2008/) |
| Stanford Statistical Mechanics | [View](https://web.stanford.edu/~peastwood/statmech/)                       |

## Worked Examples

### Example 1: Carnot Efficiency Calculation

**Problem:** A Carnot engine operates between a hot reservoir at 600 K and a cold reservoir at 300
K. If the engine absorbs 1000 J of heat per cycle, how much work is done and how much heat is
rejected? **Solution:** Efficiency eta = 1 - T_c/T_h = 1 - 300/600 = 0.50 (50%). Work = eta _ Q_h =
0.50 _ 1000 = 500 J. Q_c = Q_h - W = 1000 - 500 = 500 J. The engine rejects 500 J of heat to the
cold reservoir per cycle.

### Example 2: Entropy Change of Phase Transition

**Problem:** Calculate the entropy change when 1 mol of ice melts at 0 degrees C. Delta H_fusion =
6.01 kJ/mol. **Solution:** Delta S = q_rev/T = Delta H_fusion / T = 6010 J / 273.15 K = 22.0 J K^-1
mol^-1. The entropy increases because the solid (ordered) becomes liquid (more disordered).

## Cross-References

| Topic                | Link                                                  |
| -------------------- | ----------------------------------------------------- |
| Quantum Mechanics II | [View](/docs/university/physics/quantum-mechanics-ii) |
| Kinetic Theory       | [View](/docs/university/physics/kinetic-theory)       |
