---
title: Thermodynamics & Energetics
description:
  "A-Level Chemistry notes on Thermodynamics & Energetics: Fundamental Concepts; System, Surroundings, and the Universe; Enthalpy ($H$); Internal Energy ($U$)."
date: 2026-04-21T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: thermodynamics
sidebar_position: 12
---

# Thermodynamics & Energetics

## Fundamental Concepts

### System, Surroundings, and the Universe

A **thermodynamic system** is the part of the universe under study. The **surroundings** are everything else. The universe is the system plus the surroundings.

- **Open system:** exchanges both matter and energy with surroundings.
- **Closed system:** exchanges energy but not matter.
- **Isolated system:** exchanges neither matter nor energy.

### Enthalpy ($H$)

Enthalpy is a thermodynamic state function defined as:

$$
H = U + pV
$$

where $U$ is internal energy, $p$ is pressure, and $V$ is volume. For constant-pressure processes (the usual condition in chemistry):

$$
\Delta H = q_p
$$

The enthalpy change $\Delta H$ is the heat exchanged at constant pressure. It cannot be measured absolutely; only changes in enthalpy are measurable.

### Internal Energy ($U$)

The internal energy of a system is the total kinetic and potential energy of all particles within the system. At constant volume:

$$
\Delta U = q_V
$$

The relationship between $\Delta H$ and $\Delta U$:

$$
\Delta H = \Delta U + \Delta(pV)
$$

For reactions involving only solids and liquids, $\Delta(pV) \approx 0$, so $\Delta H \approx \Delta U$. For reactions involving gases:

$$
\Delta(pV) = \Delta n_g RT
$$

where $\Delta n_g$ is the change in moles of gas.

### Standard Conditions

Standard enthalpy changes are measured under the following conditions:

- Pressure: $100\,\mathrm{kPa}$ ($1\,\mathrm{bar}$, approximately $1\,\mathrm{atm}$).
- Temperature: $298\,\mathrm{K}$ ($25^\circ\mathrm{C}$), unless otherwise stated.
- Concentration: $1\,\mathrm{mol/dm}^3$ for solutions.
- All substances in their standard states (most stable form at the specified conditions).

The standard symbol is $\Delta H^\circ$ with the superscript circle.

### Exothermic and Endothermic Reactions

- **Exothermic:** $\Delta H \lt 0$; heat is released to the surroundings.
- **Endothermic:** $\Delta H \gt 0$; heat is absorbed from the surroundings.

## Hess's Law

### Statement

Hess's Law states that the enthalpy change for a chemical reaction is the same regardless of the route by which the reaction occurs, provided the initial and final conditions are the same.

This is a direct consequence of enthalpy being a **state function** -- its value depends only on the current state of the system, not on the path taken to reach it.

### Application: Indirect Determination of Enthalpy Changes

**Worked Example 1.** Calculate $\Delta H_f^\circ$ of $\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l)$.

Given:
- $\Delta H_c^\circ(\mathrm{C}) = -394\,\mathrm{kJ/mol}$
- $\Delta H_c^\circ(\mathrm{H}_2) = -286\,\mathrm{kJ/mol}$
- $\Delta H_c^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}) = -1367\,\mathrm{kJ/mol}$

Formation: $2\mathrm{C}(s) + 3\mathrm{H}_2(g) + \tfrac{1}{2}\mathrm{O}_2(g) \to \mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l)$

Combustion route: $2\mathrm{C}(s) + 3\mathrm{H}_2(g) + 3\frac{1}{2}\mathrm{O}_2(g) \to 2\mathrm{CO}_2(g) + 3\mathrm{H}_2\mathrm{O}(l)$

By Hess's Law:

$$
\Delta H_f^\circ + \Delta H_c^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}) = 2\Delta H_c^\circ(\mathrm{C}) + 3\Delta H_c^\circ(\mathrm{H}_2)
$$

$$
\Delta H_f^\circ = 2(-394) + 3(-286) - (-1367) = -788 - 858 + 1367 = -279\,\mathrm{kJ/mol}
$$

## Standard Enthalpy Changes

### Standard Enthalpy of Formation ($\Delta H_f^\circ$)

The enthalpy change when one mole of a compound is formed from its constituent elements in their standard states under standard conditions.

- $\Delta H_f^\circ$ of an element in its standard state is zero by definition.
- Example: $\Delta H_f^\circ(\mathrm{H}_2\mathrm{O}(l)) = -286\,\mathrm{kJ/mol}$.

### Standard Enthalpy of Combustion ($\Delta H_c^\circ$)

The enthalpy change when one mole of a substance is completely burned in excess oxygen under standard conditions.

- Combustion reactions are always exothermic ($\Delta H_c^\circ \lt 0$).
- The products must be in their standard states ($\mathrm{CO}_2(g)$, $\mathrm{H}_2\mathrm{O}(l)$, etc.).

### Standard Enthalpy of Atomisation ($\Delta H_\mathrm{at}^\circ$)

The enthalpy change when one mole of gaseous atoms is formed from an element in its standard state.

For a diatomic molecule $\mathrm{X}_2$:

$$
\Delta H_\mathrm{at}^\circ = \frac{1}{2} \times \mathrm{bond dissociation enthalpy of } \mathrm{X}_2
$$

Example: $\Delta H_\mathrm{at}^\circ(\mathrm{Cl}_2) = \tfrac{1}{2}(242) = 121\,\mathrm{kJ/mol}$.

For a solid element (e.g. Na), atomisation includes sublimation and bond breaking:

$$
\mathrm{Na}(s) \to \mathrm{Na}(g) \quad \Delta H_\mathrm{at}^\circ = +108\,\mathrm{kJ/mol}
$$

### Bond Dissociation Enthalpy

The bond dissociation enthalpy is the enthalpy change required to break one mole of a specific bond in a specific molecule in the gaseous phase.

For a diatomic molecule, this is unambiguous. For polyatomic molecules, each bond-breaking step may have a different enthalpy. **Mean bond enthalpies** are averages across a range of compounds.

Note: $\mathrm{C-H}$ bond energy in $\mathrm{CH}_4$ is not the same as in $\mathrm{CH}_3\mathrm{Cl}$. Mean bond enthalpies introduce systematic error in thermochemical calculations.

## Lattice Enthalpy

### Definition

The **lattice enthalpy** $\Delta H_\mathrm{lat}^\circ$ is the enthalpy change when one mole of an ionic solid is formed from its constituent gaseous ions under standard conditions. This is always exothermic ($\Delta H_\mathrm{lat}^\circ \lt 0$).

The reverse process (separating one mole of solid into gaseous ions) is the **lattice dissociation enthalpy** and is always endothermic.

### Born-Haber Cycle

The Born-Haber cycle for an ionic compound $\mathrm{M}_a\mathrm{X}_b$ constructs a thermochemical cycle:

$$
\Delta H_f^\circ = a\Delta H_\mathrm{at}^\circ(\mathrm{M}) + b\Delta H_\mathrm{at}^\circ(\mathrm{X}) + \sum \mathrm{IE}(\mathrm{M}) + \sum \mathrm{EA}(\mathrm{X}) + \Delta H_\mathrm{lat}^\circ
$$

Rearranging gives the lattice enthalpy.

**Worked Example.** Calculate the lattice enthalpy of $\mathrm{MgO}$ given:

- $\Delta H_f^\circ(\mathrm{MgO}) = -602\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{at}^\circ(\mathrm{Mg}) = +148\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{at}^\circ(\mathrm{O}) = +248\,\mathrm{kJ/mol}$ (per atom; for $\tfrac{1}{2}\mathrm{O}_2$)
- $\mathrm{IE}_1(\mathrm{Mg}) = +738\,\mathrm{kJ/mol}$
- $\mathrm{IE}_2(\mathrm{Mg}) = +1451\,\mathrm{kJ/mol}$
- $\mathrm{EA}_1(\mathrm{O}) = -141\,\mathrm{kJ/mol}$
- $\mathrm{EA}_2(\mathrm{O}) = +798\,\mathrm{kJ/mol}$

$$
\Delta H_\mathrm{lat}^\circ = \Delta H_f^\circ - \Delta H_\mathrm{at}^\circ(\mathrm{Mg}) - \Delta H_\mathrm{at}^\circ(\mathrm{O}) - \mathrm{IE}_1 - \mathrm{IE}_2 - \mathrm{EA}_1 - \mathrm{EA}_2
$$

$$
\Delta H_\mathrm{lat}^\circ = -602 - 148 - 248 - 738 - 1451 - (-141) - 798
$$

$$
\Delta H_\mathrm{lat}^\circ = -602 - 148 - 248 - 738 - 1451 + 141 - 798 = -3844\,\mathrm{kJ/mol}
$$

### Theoretical Lattice Enthalpy: Born-Lande Equation

The theoretical lattice enthalpy is calculated from the electrostatic model:

$$
\Delta H_\mathrm{lat}^\circ \approx -\frac{N_A M z^+ z^- e^2}{4\pi\varepsilon_0 r_0}\left(1 - \frac{1}{n}\right)
$$

where:
- $N_A$ is Avogadro's constant
- $M$ is the Madelung constant (depends on the lattice geometry)
- $z^+$, $z^-$ are the ion charges
- $e$ is the elementary charge
- $\varepsilon_0$ is the permittivity of free space
- $r_0$ is the sum of the ionic radii
- $n$ is the Born exponent (related to the electron configuration of the ions)

This equation predicts purely ionic bonding. Differences between theoretical and experimental (Born-Haber) lattice enthalpies indicate the degree of **covalent character** in the ionic bond.

### Polarisation and Covalent Character (Fajans' Rules)

A small, highly charged cation (high charge density) can polarise a large, easily deformable anion, drawing electron density towards itself and introducing covalent character.

Fajans' Rules predict increasing covalent character when:
1. The cation is small and/or highly charged (e.g. $\mathrm{Al}^{3+}$).
2. The anion is large and/or highly charged (e.g. $\mathrm{I}^-$).
3. The cation has an electronic configuration resembling a noble gas with no inert pair (e.g. $\mathrm{Li}^+$ vs $\mathrm{Tl}^+$).

Example: $\mathrm{AgI}$ has significant covalent character because $\mathrm{Ag}^+$ is a relatively soft cation and $\mathrm{I}^-$ is a large, polarisable anion. The experimental lattice enthalpy is less exothermic than the theoretical value.

## Entropy ($S$)

### Definition

Entropy is a measure of the number of ways energy can be distributed among the particles of a system -- a measure of disorder or randomness.

The **second law of thermodynamics** states that the total entropy of the universe increases in any spontaneous process:

$$
\Delta S_\mathrm{universe} = \Delta S_\mathrm{system} + \Delta S_\mathrm{surroundings} \gt 0
$$

### Factors Affecting Entropy

| Factor | Effect on $S$ |
|---|---|
| More particles (gaseous products) | Increase |
| Higher temperature | Increase |
| Change from solid to liquid to gas | Increase |
| Dissolution of a solid (if ions are dispersed) | Increase |
| Fewer moles of gas | Decrease |

### Standard Entropy Change ($\Delta S^\circ$)

$$
\Delta S^\circ = \sum S^\circ(\mathrm{products}) - \sum S^\circ(\mathrm{reactants})
$$

Standard entropies are always positive (absolute values, not relative like enthalpy).

**Worked Example.** Calculate $\Delta S^\circ$ for:

$$
\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)
$$

Given: $S^\circ(\mathrm{CaCO}_3) = 92.9\,\mathrm{J\,mol^{-1}\,K^{-1}}$, $S^\circ(\mathrm{CaO}) = 38.1\,\mathrm{J\,mol^{-1}\,K^{-1}}$, $S^\circ(\mathrm{CO}_2) = 213.7\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$$
\Delta S^\circ = (38.1 + 213.7) - 92.9 = 251.8 - 92.9 = +158.9\,\mathrm{J\,mol^{-1}\,K^{-1}}
$$

The entropy increases because a gas is produced from a solid (more microstates).

### Entropy Change of the Surroundings

$$
\Delta S_\mathrm{surroundings} = -\frac{\Delta H}{T}
$$

For an exothermic reaction ($\Delta H \lt 0$), $\Delta S_\mathrm{surroundings} \gt 0$ (the surroundings gain heat, increasing their disorder).

## Gibbs Free Energy ($G$)

### Definition

The Gibbs free energy combines enthalpy and entropy into a single criterion for spontaneity:

$$
\Delta G = \Delta H - T\Delta S
$$

| $\Delta G$ | Spontaneity |
|---|---|
| $\Delta G \lt 0$ | Spontaneous (thermodynamically favourable) |
| $\Delta G = 0$ | At equilibrium |
| $\Delta G \gt 0$ | Non-spontaneous (thermodynamically unfavourable) |

This is valid at constant temperature and pressure (standard laboratory conditions).

### Standard Gibbs Free Energy Change ($\Delta G^\circ$)

$$
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ
$$

The relationship between $\Delta G^\circ$ and the equilibrium constant:

$$
\Delta G^\circ = -RT\ln K
$$

where $R = 8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$ and $T$ is in Kelvin.

When $\Delta G^\circ = 0$: $K = 1$ (equal amounts of reactants and products at equilibrium).

When $\Delta G^\circ \lt 0$: $K \gt 1$ (products favoured).

When $\Delta G^\circ \gt 0$: $K \lt 1$ (reactants favoured).

### Temperature Dependence of Spontaneity

| $\Delta H$ | $\Delta S$ | Spontaneity |
|---|---|---|
| $-$ (exothermic) | $+$ (entropy increases) | Spontaneous at all temperatures |
| $-$ (exothermic) | $-$ (entropy decreases) | Spontaneous at low temperatures |
| $+$ (endothermic) | $+$ (entropy increases) | Spontaneous at high temperatures |
| $+$ (endothermic) | $-$ (entropy decreases) | Non-spontaneous at all temperatures |

**Worked Example.** For the thermal decomposition of $\mathrm{CaCO}_3$:

$$
\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)
$$

$\Delta H^\circ = +178\,\mathrm{kJ/mol}$, $\Delta S^\circ = +160\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

At what temperature does the reaction become spontaneous?

$$
\Delta G^\circ = 0 \implies T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{178 \times 10^3}{160} = 1113\,\mathrm{K} = 840^\circ\mathrm{C}
$$

Above $1113\,\mathrm{K}$, $\Delta G^\circ \lt 0$ and the decomposition is spontaneous.

### Gibbs-Helmholtz Equation

$$
\left(\frac{\partial (\Delta G/T)}{\partial T}\right)_p = -\frac{\Delta H}{T^2}
$$

This shows how $\Delta G/T$ varies with temperature. In the simplified form used at A-Level, it justifies the linear relationship:

$$
\Delta G = \Delta H - T\Delta S
$$

A plot of $\Delta G$ vs $T$ is linear with gradient $= -\Delta S$ and y-intercept $= \Delta H$.

## Common Pitfalls

1. **Sign errors in Hess's Law cycles.** When constructing a cycle, ensure all arrows point in the correct direction. If a step is reversed, change the sign of the enthalpy.

2. **Confusing $\Delta S^\circ$ with $S^\circ$.** $\Delta S^\circ$ is the change in entropy; $S^\circ$ is the absolute entropy of a single species. $S^\circ$ is always positive; $\Delta S^\circ$ can be positive or negative.

3. **Using $\Delta H$ instead of $\Delta H^\circ$ in Gibbs calculations.** Standard values must be used for standard free energy calculations.

4. **Forgetting units in entropy calculations.** Entropy is in $\mathrm{J\,mol^{-1}\,K^{-1}}$, not $\mathrm{kJ}$. Always convert $\Delta H$ to $\mathrm{J}$ (or $\Delta S$ to $\mathrm{kJ}$) before combining in $\Delta G = \Delta H - T\Delta S$.

5. **Misidentifying the theoretical vs experimental lattice enthalpy in Fajans' Rules discussions.** The experimental (Born-Haber) value is less exothermic when covalent character is present; the theoretical (Born-Lande) value assumes perfect ionic bonding.

## Practice Problems

<details>
<summary>Problem 1</summary>

Calculate $\Delta G^\circ$ at $298\,\mathrm{K}$ for the reaction:

$$
2\mathrm{NO}(g) + \mathrm{O}_2(g) \to 2\mathrm{NO}_2(g)
$$

Given: $\Delta H^\circ = -114\,\mathrm{kJ/mol}$, $\Delta S^\circ = -146\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

Is the reaction spontaneous?

**Solution:**

$$
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -114 \times 10^3 - 298 \times (-146) = -114000 + 43508 = -70492\,\mathrm{J/mol} = -70.5\,\mathrm{kJ/mol}
$$

Since $\Delta G^\circ \lt 0$, the reaction is spontaneous at $298\,\mathrm{K}$. The negative $\Delta H$ dominates over the unfavourable negative $\Delta S$.

</details>

<details>
<summary>Problem 2</summary>

The melting of ice: $\mathrm{H}_2\mathrm{O}(s) \to \mathrm{H}_2\mathrm{O}(l)$ has $\Delta H^\circ = +6.01\,\mathrm{kJ/mol}$ and $\Delta S^\circ = +22.0\,\mathrm{J\,mol^{-1}\,K^{-1}}$. Calculate the melting point of ice.

**Solution:**

At the melting point, $\Delta G = 0$:

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{6010}{22.0} = 273\,\mathrm{K} = 0^\circ\mathrm{C}
$$

</details>
