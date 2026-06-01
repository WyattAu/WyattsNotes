---
title: Thermodynamics & Energetics
description: 'A-Level Chemistry Thermodynamics & Energetics notes covering key definitions, core concepts, worked examples, and practice questions for methodical revision.'
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

A **thermodynamic system** is the part of the universe under study. The **surroundings** are
everything else. The universe is the system plus the surroundings.

- **Open system:** exchanges both matter and energy with surroundings.
- **Closed system:** exchanges energy but not matter.
- **Isolated system:** exchanges neither matter nor energy.

### Enthalpy ($H$)

Enthalpy is a thermodynamic state function defined as:

$$
H = U + pV
$$

Where $U$ is internal energy, $p$ is pressure, and $V$ is volume. For constant-pressure processes
(the usual condition in chemistry):

$$
\Delta H = q_p
$$

The enthalpy change $\Delta H$ is the heat exchanged at constant pressure. It cannot be measured
absolutely; only changes in enthalpy are measurable.

### Internal Energy ($U$)

The internal energy of a system is the total kinetic and potential energy of all particles within
the system. At constant volume:

$$
\Delta U = q_V
$$

The relationship between $\Delta H$ and $\Delta U$:

$$
\Delta H = \Delta U + \Delta(pV)
$$

For reactions involving only solids and liquids, $\Delta(pV) \approx 0$So
$\Delta H \approx \Delta U$. For reactions involving gases:

$$
\Delta(pV) = \Delta n_g RT
$$

Where $\Delta n_g$ is the change in moles of gas.

### Standard Conditions

Standard enthalpy changes are measured under the following conditions:

- Pressure: $100\,\mathrm{kPa}$ ($1\,\mathrm{bar}$Approximately $1\,\mathrm{atm}$).
- Temperature: $298\,\mathrm{K}$ ($25^\circ\mathrm{C}$), unless otherwise stated.
- Concentration: $1\,\mathrm{mol/dm}^3$ for solutions.
- All substances in their standard states (most stable form at the specified conditions).

The standard symbol is $\Delta H^\circ$ with the superscript circle.

### Exothermic and Endothermic Reactions

- **Exothermic:** $\Delta H \lt 0$; heat is released to the surroundings.
- **Endothermic:** $\Delta H \gt 0$; heat is absorbed from the surroundings.

## Hess's Law

### Statement

Hess's Law states that the enthalpy change for a chemical reaction is the same regardless of the
route by which the reaction occurs, provided the initial and final conditions are the same.

This is a direct consequence of enthalpy being a **state function** -- its value depends only on the
current state of the system, not on the path taken to reach it.

### Application: Indirect Determination of Enthalpy Changes

**Worked Example 1.** Calculate $\Delta H_f^\circ$ of $\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l)$.

Given:

- $\Delta H_c^\circ(\mathrm{C}) = -394\,\mathrm{kJ/mol}$
- $\Delta H_c^\circ(\mathrm{H}_2) = -286\,\mathrm{kJ/mol}$
- $\Delta H_c^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}) = -1367\,\mathrm{kJ/mol}$

Formation:
$2\mathrm{C}(s) + 3\mathrm{H}_2(g) + \tfrac{1}{2}\mathrm{O}_2(g) \to \mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l)$

Combustion route:
$2\mathrm{C}(s) + 3\mathrm{H}_2(g) + 3\frac{1}{2}\mathrm{O}_2(g) \to 2\mathrm{CO}_2(g) + 3\mathrm{H}_2\mathrm{O}(l)$

By Hess's Law:

$$
\Delta H_f^\circ + \Delta H_c^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}) = 2\Delta H_c^\circ(\mathrm{C}) + 3\Delta H_c^\circ(\mathrm{H}_2)
$$

$$
\Delta H_f^\circ = 2(-394) + 3(-286) - (-1367) = -788 - 858 + 1367 = -279\,\mathrm{kJ/mol}
$$

## Standard Enthalpy Changes

### Standard Enthalpy of Formation ($\Delta H_f^\circ$)

The enthalpy change when one mole of a compound is formed from its constituent elements in their
standard states under standard conditions.

- $\Delta H_f^\circ$ of an element in its standard state is zero by definition.
- Example: $\Delta H_f^\circ(\mathrm{H}_2\mathrm{O}(l)) = -286\,\mathrm{kJ/mol}$.

### Standard Enthalpy of Combustion ($\Delta H_c^\circ$)

The enthalpy change when one mole of a substance is completely burned in excess oxygen under
standard conditions.

- Combustion reactions are always exothermic ($\Delta H_c^\circ \lt 0$).
- The products must be in their standard states ($\mathrm{CO}_2(g)$, $\mathrm{H}_2\mathrm{O}(l)$Etc.).

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

The bond dissociation enthalpy is the enthalpy change required to break one mole of a specific bond
in a specific molecule in the gaseous phase.

For a diatomic molecule, this is unambiguous. For polyatomic molecules, each bond-breaking step may
have a different enthalpy. **Mean bond enthalpies** are averages across a range of compounds.

Note: $\mathrm{C-H}$ bond energy in $\mathrm{CH}_4$ is not the same as in
$\mathrm{CH}_3\mathrm{Cl}$. Mean bond enthalpies introduce systematic error in thermochemical
calculations.

## Lattice Enthalpy

### Definition

The **lattice enthalpy** $\Delta H_\mathrm{lat}^\circ$ is the enthalpy change when one mole of an
ionic solid is formed from its constituent gaseous ions under standard conditions. This is always
exothermic ($\Delta H_\mathrm{lat}^\circ \lt 0$).

The reverse process (separating one mole of solid into gaseous ions) is the **lattice dissociation
enthalpy** and is always endothermic.

### Born-Haber Cycle

The Born-Haber cycle for an ionic compound $\mathrm{M}_a\mathrm{X}_b$ constructs a thermochemical
cycle:

$$
\Delta H_f^\circ = a\Delta H_\mathrm{at}^\circ(\mathrm{M}) + b\Delta H_\mathrm{at}^\circ(\mathrm{X}) + \sum \mathrm{IE}(\mathrm{M}) + \sum \mathrm{EA}(\mathrm{X}) + \Delta H_\mathrm{lat}^\circ
$$

Rearranging gives the lattice enthalpy.

**Worked Example.** Calculate the lattice enthalpy of $\mathrm{MgO}$ given:

- $\Delta H_f^\circ(\mathrm{MgO}) = -602\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{at}^\circ(\mathrm{Mg}) = +148\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{at}^\circ(\mathrm{O}) = +248\,\mathrm{kJ/mol}$ (per atom; for
  $\tfrac{1}{2}\mathrm{O}_2$)
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
\Delta H_\mathrm{lat}^\circ \approx -\frac◆LB◆N_A M z^+ z^- e^2◆RB◆◆LB◆4\pi\varepsilon_0 r_0◆RB◆\left(1 - \frac{1}{n}\right)
$$

Where:

- $N_A$ is Avogadro's constant
- $M$ is the Madelung constant (depends on the lattice geometry)
- $z^+$, $z^-$ are the ion charges
- $e$ is the elementary charge
- $\varepsilon_0$ is the permittivity of free space
- $r_0$ is the sum of the ionic radii
- $n$ is the Born exponent (related to the electron configuration of the ions)

This equation predicts purely ionic bonding. Differences between theoretical and experimental
(Born-Haber) lattice enthalpies indicate the degree of **covalent character** in the ionic bond.

### Polarisation and Covalent Character (Fajans' Rules)

A small, highly charged cation (high charge density) can polarise a large, deformable anion, drawing
electron density towards itself and introducing covalent character.

Fajans' Rules predict increasing covalent character when:

1. The cation is small and/or highly charged (e.g. $\mathrm{Al}^{3+}$).
2. The anion is large and/or highly charged (e.g. $\mathrm{I}^-$).
3. The cation has an electronic configuration resembling a noble gas with no inert pair (e.g.
   $\mathrm{Li}^+$ vs $\mathrm{Tl}^+$).

Example: $\mathrm{AgI}$ has significant covalent character because $\mathrm{Ag}^+$ is a relatively
soft cation and $\mathrm{I}^-$ is a large, polarisable anion. The experimental lattice enthalpy is
less exothermic than the theoretical value.

## Entropy ($S$)

### Definition

Entropy is a measure of the number of ways energy can be distributed among the particles of a system
-- a measure of disorder or randomness.

The **second law of thermodynamics** states that the total entropy of the universe increases in any
spontaneous process:

$$
\Delta S_\mathrm{universe} = \Delta S_\mathrm{system} + \Delta S_\mathrm{surroundings} \gt 0
$$

### Factors Affecting Entropy

| Factor                                         | Effect on $S$ |
| ---------------------------------------------- | ------------- |
| More particles (gaseous products)              | Increase      |
| Higher temperature                             | Increase      |
| Change from solid to liquid to gas             | Increase      |
| Dissolution of a solid (if ions are dispersed) | Increase      |
| Fewer moles of gas                             | Decrease      |

### Standard Entropy Change ($\Delta S^\circ$)

$$
\Delta S^\circ = \sum S^\circ(\mathrm{products}) - \sum S^\circ(\mathrm{reactants})
$$

Standard entropies are always positive (absolute values, not relative like enthalpy).

**Worked Example.** Calculate $\Delta S^\circ$ for:

$$
\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)
$$

Given:
$S^\circ(\mathrm{CaCO}_3) = 92.9\,\mathrm{J\,mol^{-1}\,K^{-1}}$$S^\circ(\mathrm{CaO}) = 38.1\,\mathrm{J\,mol^{-1}\,K^{-1}}$$S^\circ(\mathrm{CO}_2) = 213.7\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$, $
\Delta S^\circ = (38.1 + 213.7) - 92.9 = 251.8 - 92.9 = +158.9\,\mathrm{J\,mol^{-1}\,K^{-1}}
$, $

The entropy increases because a gas is produced from a solid (more microstates).

### Entropy Change of the Surroundings

$, $
\Delta S_\mathrm{surroundings} = -\frac◆LB◆\Delta H◆RB◆◆LB◆T◆RB◆
$, $

For an exothermic reaction ($\Delta H \lt 0$), $\Delta S_\mathrm{surroundings} \gt 0$ (the
surroundings gain heat, increasing their disorder).

## Gibbs Free Energy ($G$)

### Definition

The Gibbs free energy combines enthalpy and entropy into a single criterion for spontaneity:

$, $
\Delta G = \Delta H - T\Delta S
$, $

| $\Delta G$       | Spontaneity                                      |
| ---------------- | ------------------------------------------------ |
| $\Delta G \lt 0$ | Spontaneous (thermodynamically favourable)       |
| $\Delta G = 0$   | At equilibrium                                   |
| $\Delta G \gt 0$ | Non-spontaneous (thermodynamically unfavourable) |

This is valid at constant temperature and pressure (standard laboratory conditions).

### Standard Gibbs Free Energy Change ($\Delta G^\circ$)

$, $
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ
$, $

The relationship between $\Delta G^\circ$ and the equilibrium constant:

$, $
\Delta G^\circ = -RT\ln K
$, $

Where $R = 8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$ and $T$ is in Kelvin.

When $\Delta G^\circ = 0$: $K = 1$ (equal amounts of reactants and products at equilibrium).

When $\Delta G^\circ \lt 0$: $K \gt 1$ (products favoured).

When $\Delta G^\circ \gt 0$: $K \lt 1$ (reactants favoured).

### Temperature Dependence of Spontaneity

| $\Delta H$        | $\Delta S$              | Spontaneity                         |
| ----------------- | ----------------------- | ----------------------------------- |
| $-$ (exothermic)  | $+$ (entropy increases) | Spontaneous at all temperatures     |
| $-$ (exothermic)  | $-$ (entropy decreases) | Spontaneous at low temperatures     |
| $+$ (endothermic) | $+$ (entropy increases) | Spontaneous at high temperatures    |
| $+$ (endothermic) | $-$ (entropy decreases) | Non-spontaneous at all temperatures |

**Worked Example.** For the thermal decomposition of $\mathrm{CaCO}_3$:

$, $
\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)
$, $

$\Delta H^\circ = +178\,\mathrm{kJ/mol}$$\Delta S^\circ = +160\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

At what temperature does the reaction become spontaneous?

$$
\Delta G^\circ = 0 \implies T = \frac◆LB◆\Delta H^\circ◆RB◆◆LB◆\Delta S^\circ◆RB◆ = \frac◆LB◆178 \times 10^3◆RB◆◆LB◆160◆RB◆ = 1113\,\mathrm{K} = 840^\circ\mathrm{C}
$$

Above $1113\,\mathrm{K}$$\Delta G^\circ \lt 0$ and the decomposition is spontaneous.

### Gibbs-Helmholtz Equation

$, $
\left(\frac◆LB◆\partial (\Delta G/T)◆RB◆◆LB◆\partial T◆RB◆\right)_p = -\frac◆LB◆\Delta H◆RB◆◆LB◆T^2◆RB◆
$, $

This shows how $\Delta G/T$ varies with temperature. In the simplified form used at A-Level, it
justifies the linear relationship:

$, $
\Delta G = \Delta H - T\Delta S
$, $

A plot of $\Delta G$ vs $T$ is linear with gradient $= -\Delta S$ and y-intercept $= \Delta H$.

### Gibbs Free Energy and Equilibrium

The relationship between $\Delta G^\circ$ and the equilibrium constant $K$ is one of the most
important equations in physical chemistry:

$, $
\Delta G^\circ = -RT\ln K
$, $

This equation allows prediction of the equilibrium position from thermodynamic data:

- When $\Delta G^\circ \lt 0$: $K \gt 1$Products are favoured at equilibrium.
- When $\Delta G^\circ = 0$: $K = 1$Reactants and products are present in equal amounts.
- When $\Delta G^\circ \gt 0$: $K \lt 1$Reactants are favoured at equilibrium.

**Worked Example.** Calculate $K$ at $298\,\mathrm{K}$ for the reaction
$\mathrm{N}_2\mathrm{O}_4(g) \rightleftharpoons 2\mathrm{NO}_2(g)$ given
$\Delta G^\circ = +4.72\,\mathrm{kJ/mol}$.

$, $
K = \exp\left(\frac◆LB◆-\Delta G^\circ◆RB◆◆LB◆RT◆RB◆\right) = \exp\left(\frac◆LB◆-4720◆RB◆◆LB◆8.314 \times 298◆RB◆\right) = \exp(-1.904) = 0.149
$, $

$K = 0.149$So reactants ($\mathrm{N}_2\mathrm{O}_4$) are favoured at equilibrium.

**Using $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ with the equilibrium expression:**

Combining the two equations:

$, $
-RT\ln K = \Delta H^\circ - T\Delta S^\circ
$, $

$, $
\ln K = -\frac◆LB◆\Delta H^\circ◆RB◆◆LB◆RT◆RB◆ + \frac◆LB◆\Delta S^\circ◆RB◆◆LB◆R◆RB◆
$, $

This is the van 't Hoff equation (linear form), which is identical in structure to the Arrhenius
equation.

## Calorimetry

### Experimental Determination of Enthalpy Changes

**Coffee-cup calorimetry:** A polystyrene cup minimises heat exchange with the surroundings. The
heat absorbed by the solution equals the heat released by the reaction:

$, $
Q = mc\Delta T
$, $

Where $m$ is the mass of solution (g), $c$ is the specific heat capacity
($4.18\,\mathrm{J\,g^{-1}\,K^{-1}}$ for water), and $\Delta T$ is the temperature change.

**Sources of error in calorimetry:**

1. Heat loss to the surroundings (exothermic reactions underestimate $\Delta H$; endothermic
   reactions overestimate it).
2. The calorimeter itself absorbs heat ($q_\mathrm{calorimeter} = C_\mathrm{cal}\Delta T$). For
   accurate work, include this.
3. Incomplete reaction (if the reaction does not go to completion).
4. Non-standard conditions (reactions are not at $298\,\mathrm{K}$ or $100\,\mathrm{kPa}$).

### Hess's Law Cycles with Mean Bond Enthalpies

Mean bond enthalpies are averages across different molecules. They introduce systematic error
because the actual bond enthalpy in a specific molecule may differ from the mean.

**Example of systematic error:** The C--O bond enthalpy in $\mathrm{CH}_3\mathrm{OH}$ differs from
the mean C--O bond enthalpy (which averages C--O bonds in alcohols, ethers, esters, carboxylic
acids). Using mean values for a specific molecule gives only an estimate of $\Delta H$.

**Rule:** Calculations using mean bond enthalpies give estimated values. Calculations using standard
enthalpies of formation give accurate values (provided the data are reliable). Always use formation
enthalpies in preference to bond enthalpies when both are available.

### Enthalpy of Neutralisation

The enthalpy of neutralisation is the enthalpy change when one mole of water is formed from the
reaction of an acid and a base:

$, $
\mathrm{H}^+(aq) + \mathrm{OH}^-(aq) \to \mathrm{H}_2\mathrm{O}(l) \quad \Delta H^\circ_\mathrm{neut} = -57.9\,\mathrm{kJ/mol}
$, $

This value is approximately constant for all strong acid-strong base reactions because the net ionic
equation is always the same. Weak acid-strong base or strong acid-weak base neutralisations have
less exothermic values because some energy is consumed in dissociating the weak acid or weak base.

| Reaction type             | $\Delta H_\mathrm{neut}$ ($\mathrm{kJ/mol}$)                | Explanation                           |
| ------------------------- | ----------------------------------------------------------- | ------------------------------------- |
| Strong acid + strong base | $-57.9$                                                     | Full ionisation of both               |
| Weak acid + strong base   | $-56.1$ (e.g. $\mathrm{CH}_3\mathrm{COOH} + \mathrm{NaOH}$) | Energy needed to dissociate weak acid |
| Strong acid + weak base   | $-57.3$ (e.g. $\mathrm{HCl} + \mathrm{NH}_3$)               | Energy needed to dissociate weak base |
| Weak acid + weak base     | Variable                                                    | Depends on relative strengths         |

### Worked Example: Hess's Law with Indirect Routes

Calculate $\Delta H_f^\circ$ of $\mathrm{CH}_4(g)$ given:

- $\mathrm{C}(s) + \mathrm{O}_2(g) \to \mathrm{CO}_2(g)$; $\Delta H_1 = -394\,\mathrm{kJ/mol}$
- $\mathrm{H}_2(g) + \tfrac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)$;
  $\Delta H_2 = -286\,\mathrm{kJ/mol}$
- $\mathrm{CH}_4(g) + 2\mathrm{O}_2(g) \to \mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(l)$;
  $\Delta H_3 = -890\,\mathrm{kJ/mol}$

Formation: $\mathrm{C}(s) + 2\mathrm{H}_2(g) \to \mathrm{CH}_4(g)$

By Hess's Law, route the formation through combustion:

$, $
\Delta H_f^\circ + \Delta H_3 = \Delta H_1 + 2\Delta H_2
$, $

$, $
\Delta H_f^\circ = -394 + 2(-286) - (-890) = -394 - 572 + 890 = -76\,\mathrm{kJ/mol}
$, $

## Common Pitfalls

1. **Sign errors in Hess's Law cycles.** When constructing a cycle, ensure all arrows point in the
   correct direction. If a step is reversed, change the sign of the enthalpy.

2. **Confusing $\Delta S^\circ$ with $S^\circ$.** $\Delta S^\circ$ is the change in entropy;
   $S^\circ$ is the absolute entropy of a single species. $S^\circ$ is always positive;
   $\Delta S^\circ$ can be positive or negative.

3. **Using $\Delta H$ instead of $\Delta H^\circ$ in Gibbs calculations.** Standard values must be
   used for standard free energy calculations.

4. **Forgetting units in entropy calculations.** Entropy is in $\mathrm{J\,mol^{-1}\,K^{-1}}$Not
   $\mathrm{kJ}$. Always convert $\Delta H$ to $\mathrm{J}$ (or $\Delta S$ to $\mathrm{kJ}$) before
   combining in $\Delta G = \Delta H - T\Delta S$.

5. **Misidentifying the theoretical vs experimental lattice enthalpy in Fajans' Rules discussions.**
   The experimental (Born-Haber) value is less exothermic when covalent character is present; the
   theoretical (Born-Lande) value assumes perfect ionic bonding.

6. **Assuming $\Delta G = 0$ means the reaction has stopped.** $\Delta G = 0$ means the reaction is
   at equilibrium, not that it has stopped. Both forward and reverse reactions continue at equal
   rates.

7. **Using the wrong formula for the surroundings entropy.**
   $\Delta S_\mathrm{surroundings} = -\Delta H / T$. The negative sign is critical: an exothermic
   reaction ($\Delta H \lt 0$) increases the entropy of the surroundings.

## Bond Enthalpy Calculations

### Standard Enthalpy of Formation vs Mean Bond Enthalpy

Standard enthalpies of formation ($\Delta H_f^\circ$) are measured experimentally. Mean bond
enthalpies are calculated as averages. When both are available, $\Delta H_f^\circ$ data give more
accurate results.

**When to use bond enthalpies:** Use mean bond enthalpies when $\Delta H_f^\circ$ data are not
available for all species in the reaction (e.g. For gaseous atoms or free radicals).

### Worked Example: Bond Enthalpy Calculation for an Unknown Reaction

Calculate $\Delta H$ for the reaction:

$, $
\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \to 2\mathrm{NH}_3(g)
$, $

Using mean bond enthalpies:
$\mathrm{N}\equiv\mathrm{N} = 945\,\mathrm{kJ/mol}$$\mathrm{H}-\mathrm{H} = 436\,\mathrm{kJ/mol}$$\mathrm{N}-\mathrm{H} = 391\,\mathrm{kJ/mol}$.

$, $
\text{Bonds broken} = 1 \times \mathrm{N}\equiv\mathrm{N} + 3 \times \mathrm{H}-\mathrm{H} = 945 + 3(436) = 2253\,\mathrm{kJ/mol}
$, $

$, $
\text{Bonds formed} = 6 \times \mathrm{N}-\mathrm{H} = 6(391) = 2346\,\mathrm{kJ/mol}
$, $

$, $
\Delta H = 2253 - 2346 = -93\,\mathrm{kJ/mol}
$, $

The experimental value is $-92\,\mathrm{kJ/mol}$Showing good agreement.

## Born-Haber Cycles and Lattice Enthalpy (Summary)

### Lattice Enthalpy Definitions

- **Lattice dissociation enthalpy:** Enthalpy change when one mole of an ionic lattice is separated
  into its gaseous ions (endothermic, always positive).
- **Lattice formation enthalpy:** Enthalpy change when one mole of an ionic lattice is formed from
  its gaseous ions (exothermic, always negative).

$, $
\Delta H_\mathrm{latt}(\mathrm{dissociation}) = -\Delta H_\mathrm{latt}(\mathrm{formation})
$, $

### Factors Affecting Lattice Enthalpy

1. **Ionic charge:** Higher charge $\to$ stronger electrostatic attraction $\to$ more exothermic
   lattice enthalpy. $\mathrm{MgO}$ ($\mathrm{Mg}^{2+}$$\mathrm{O}^{2-}$) has a much more exothermic
   lattice enthalpy than $\mathrm{NaCl}$ ($\mathrm{Na}^+$$\mathrm{Cl}^-$).
2. **Ionic radius:** Smaller ions $\to$ shorter internuclear distance $\to$ stronger attraction
   $\to$ more exothermic lattice enthalpy. $\mathrm{LiF}$ has a more exothermic lattice enthalpy
   than $\mathrm{NaF}$ because $\mathrm{Li}^+$ is smaller than $\mathrm{Na}^+$.

### Fajans' Rules and Covalent Character

When the cation is small and highly charged (e.g. $\mathrm{Al}^{3+}$) and the anion is large and
highly charged (e.g. $\mathrm{I}^-$), the electron cloud of the anion is distorted (polarised)
towards the cation. This introduces covalent character, making the experimental lattice enthalpy
less exothermic than the theoretical (purely ionic) value.

| Cation                                  | Anion                      | Covalent character | Explanation          |
| --------------------------------------- | -------------------------- | ------------------ | -------------------- |
| $\mathrm{Na}^+$ (large, low charge)     | $\mathrm{Cl}^-$ (moderate) | Low                | Minimal polarisation |
| $\mathrm{Al}^{3+}$ (small, high charge) | $\mathrm{I}^-$ (large)     | High               | Strong polarisation  |

### Worked Example: Born-Haber Cycle for $\mathrm{CaCl}_2$

Construct a Born-Haber cycle for $\mathrm{CaCl}_2(s)$ and calculate the lattice enthalpy.

Steps (values are illustrative):

| Step | Description                                                                     | $\Delta H$ ($\mathrm{kJ/mol}$) |
| ---- | ------------------------------------------------------------------------------- | ------------------------------ |
| 1    | $\mathrm{Ca}(s) \to \mathrm{Ca}(g)$ (atomisation)                               | $+178$                         |
| 2    | $\mathrm{Ca}(g) \to \mathrm{Ca}^+(g) + e^-$ (1st IE)                            | $+590$                         |
| 3    | $\mathrm{Ca}^+(g) \to \mathrm{Ca}^{2+}(g) + e^-$ (2nd IE)                       | $+1145$                        |
| 4    | $\mathrm{Cl}_2(g) \to 2\mathrm{Cl}(g)$ (atomisation)                            | $+244$                         |
| 5    | $2\mathrm{Cl}(g) + 2e^- \to 2\mathrm{Cl}^-(g)$ (1st EA $\times 2$)              | $-728$                         |
| 6    | $\mathrm{Ca}(s) + \mathrm{Cl}_2(g) \to \mathrm{CaCl}_2(s)$ ($\Delta H_f^\circ$) | $-796$                         |

Lattice enthalpy (formation):

$, $
\Delta H_\mathrm{latt} = \Delta H_f^\circ - (\text{Steps 1--5}) = -796 - (178 + 590 + 1145 + 244 - 728)
$, $

$, $
\Delta H_\mathrm{latt} = -796 - 1435 = -2231\,\mathrm{kJ/mol}
$, $

## Applications of Thermodynamics

### Predicting the Feasibility of Industrial Processes

**Haber process:** $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)$

- $\Delta H^\circ = -92\,\mathrm{kJ/mol}$ (exothermic)
- $\Delta S^\circ = -199\,\mathrm{J\,mol^{-1}\,K^{-1}}$ (4 moles gas $\to$ 2 moles gas)
- $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$

At $298\,\mathrm{K}$: $\Delta G^\circ = -92 - 298(-0.199) = -92 + 59.3 = -32.7\,\mathrm{kJ/mol}$
(spontaneous, $K \approx 5.6 \times 10^5$).

At $700\,\mathrm{K}$: $\Delta G^\circ = -92 - 700(-0.199) = -92 + 139.3 = +47.3\,\mathrm{kJ/mol}$
(non-spontaneous).

The Haber process uses high temperature for kinetic reasons (faster rate), despite the thermodynamic
penalty. High pressure shifts equilibrium towards products (fewer moles of gas).

**Contact process:** $2\mathrm{SO}_2(g) + \mathrm{O}_2(g) \rightleftharpoons 2\mathrm{SO}_3(g)$

- $\Delta H^\circ = -198\,\mathrm{kJ/mol}$ (exothermic)
- $\Delta S^\circ = -190\,\mathrm{J\,mol^{-1}\,K^{-1}}$
- Optimal temperature is a compromise: $400$--$450^\circ\mathrm{C}$ gives acceptable rate and
  reasonable equilibrium yield. $\mathrm{V}_2\mathrm{O}_5$ catalyst lowers the activation energy.

## Practice Problems

<details>
<summary>Problem 1</summary>

Calculate $\Delta G^\circ$ at $298\,\mathrm{K}$ for the reaction:

$, $
2\mathrm{NO}(g) + \mathrm{O}_2(g) \to 2\mathrm{NO}_2(g)
$, $

Given:
$\Delta H^\circ = -114\,\mathrm{kJ/mol}$$\Delta S^\circ = -146\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

Is the reaction spontaneous?

**Solution:**

$$
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -114 \times 10^3 - 298 \times (-146) = -114000 + 43508 = -70492\,\mathrm{J/mol} = -70.5\,\mathrm{kJ/mol}
$$

Since $\Delta G^\circ \lt 0$The reaction is spontaneous at $298\,\mathrm{K}$. The negative
$\Delta H$ dominates over the unfavourable negative $\Delta S$.

</details>

<details>
<summary>Problem 2</summary>

The melting of ice: $\mathrm{H}_2\mathrm{O}(s) \to \mathrm{H}_2\mathrm{O}(l)$ has
$\Delta H^\circ = +6.01\,\mathrm{kJ/mol}$ and
$\Delta S^\circ = +22.0\,\mathrm{J\,mol^{-1}\,K^{-1}}$. Calculate the melting point of ice.

**Solution:**

At the melting point, $\Delta G = 0$:

$$
T = \frac◆LB◆\Delta H^\circ◆RB◆◆LB◆\Delta S^\circ◆RB◆ = \frac{6010}{22.0} = 273\,\mathrm{K} = 0^\circ\mathrm{C}
$$

</details>

<details>
<summary>Problem 3</summary>

Use bond enthalpy data to estimate $\Delta H$ for the hydrogenation of ethyne to ethane:

$$
\mathrm{HC}\equiv\mathrm{CH}(g) + 2\mathrm{H}_2(g) \to \mathrm{CH}_3\mathrm{CH}_3(g)
$$

Bond enthalpies:
$\mathrm{C}\equiv\mathrm{C} = 839\,\mathrm{kJ/mol}$$\mathrm{C}-\mathrm{C} = 347\,\mathrm{kJ/mol}$$\mathrm{C}-\mathrm{H} = 413\,\mathrm{kJ/mol}$$\mathrm{H}-\mathrm{H} = 436\,\mathrm{kJ/mol}$.

**Solution:**

Bonds broken:
$1 \times \mathrm{C}\equiv\mathrm{C} + 2 \times \mathrm{C}-\mathrm{H} + 2 \times \mathrm{H}-\mathrm{H} = 839 + 2(413) + 2(436) = 839 + 826 + 872 = 2537\,\mathrm{kJ/mol}$

Bonds formed:
$1 \times \mathrm{C}-\mathrm{C} + 6 \times \mathrm{C}-\mathrm{H} = 347 + 6(413) = 347 + 2478 = 2825\,\mathrm{kJ/mol}$

$, $
\Delta H = \sum(\text{bonds broken}) - \sum(\text{bonds formed}) = 2537 - 2825 = -288\,\mathrm{kJ/mol}
$, $

The reaction is exothermic, as expected for hydrogenation. Note that mean bond enthalpies are used,
so this is an estimate. The experimental value is approximately $-312\,\mathrm{kJ/mol}$; the
discrepancy arises because the $\mathrm{C}-\mathrm{H}$ bond enthalpy in
$\mathrm{HC}\equiv\mathrm{CH}$ differs from the mean value used.

</details>

<details>
<summary>Problem 4</summary>

The decomposition of ammonium chloride:

$, $
\mathrm{NH}_4\mathrm{Cl}(s) \to \mathrm{NH}_3(g) + \mathrm{HCl}(g)
$, $

Has $\Delta H^\circ = +176\,\mathrm{kJ/mol}$ and
$\Delta S^\circ = +285\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

(a) Explain why $\Delta S^\circ$ is positive. (b) Calculate the minimum temperature at which the
decomposition becomes spontaneous. (c) State two assumptions made in the calculation.

**Solution:**

(a) $\Delta S^\circ$ is positive because one mole of solid produces two moles of gas. Gases have
much higher entropy than solids due to the large number of accessible microstates. The increase in
the number of gas molecules and the change from a highly ordered solid to freely moving gas
molecules both contribute to a large positive entropy change.

(b) At the threshold of spontaneity, $\Delta G^\circ = 0$:

$, $
T = \frac◆LB◆\Delta H^\circ◆RB◆◆LB◆\Delta S^\circ◆RB◆ = \frac◆LB◆176 \times 10^3◆RB◆◆LB◆285◆RB◆ = 618\,\mathrm{K} = 345^\circ\mathrm{C}
$, $

Above $618\,\mathrm{K}$$\Delta G^\circ \lt 0$ and the decomposition is spontaneous.

(c) Assumptions: (i) $\Delta H^\circ$ and $\Delta S^\circ$ are constant over the temperature range
(they are not strictly constant but vary little for most reactions). (ii) The reaction is at
standard pressure ($100\,\mathrm{kPa}$).

</details>

<details>
<summary>Problem 5</summary>

Use the following standard enthalpies of formation to calculate $\Delta H_f^\circ$ for ethanol:

- $\Delta H_f^\circ(\mathrm{C}(\text{graphite})) = 0\,\mathrm{kJ/mol}$
- $\Delta H_f^\circ(\mathrm{H}_2(g)) = 0\,\mathrm{kJ/mol}$
- $\Delta H_f^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l)) = -277\,\mathrm{kJ/mol}$
- $\Delta H_c^\circ(\mathrm{C}(\text{graphite})) = -394\,\mathrm{kJ/mol}$
- $\Delta H_c^\circ(\mathrm{H}_2(g)) = -286\,\mathrm{kJ/mol}$
- $\Delta H_c^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l)) = -1367\,\mathrm{kJ/mol}$

Verify the consistency of the data by constructing a Hess's Law cycle.

**Solution:**

The combustion of ethanol:

$$
\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l) + 3\mathrm{O}_2(g) \to 2\mathrm{CO}_2(g) + 3\mathrm{H}_2\mathrm{O}(l) \quad \Delta H_c = -1367\,\mathrm{kJ/mol}
$$

Route via elements:

$$
2\mathrm{C}(\text{graphite}) + 3\mathrm{H}_2(g) + \tfrac{1}{2}\mathrm{O}_2(g) \to \mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l) \quad \Delta H_f^\circ
$$

Combustion of elements:

$$
2\mathrm{C}(\text{graphite}) + 2\mathrm{O}_2(g) \to 2\mathrm{CO}_2(g) \quad 2 \times (-394) = -788\,\mathrm{kJ/mol}
$$

$$
3\mathrm{H}_2(g) + \tfrac{3}{2}\mathrm{O}_2(g) \to 3\mathrm{H}_2\mathrm{O}(l) \quad 3 \times (-286) = -858\,\mathrm{kJ/mol}
$$

By Hess's Law:
$\Delta H_f^\circ + \Delta H_c^\circ(\text{ethanol}) = 2\Delta H_c^\circ(\mathrm{C}) + 3\Delta H_c^\circ(\mathrm{H}_2)$

$$
\Delta H_f^\circ = (-788) + (-858) - (-1367) = -1646 + 1367 = -279\,\mathrm{kJ/mol}
$$

The calculated value ($-279\,\mathrm{kJ/mol}$) is close to the literature value
($-277\,\mathrm{kJ/mol}$), confirming consistency. The small discrepancy is within experimental
uncertainty.

</details>

<details>
<summary>Problem 6</summary>

The enthalpy of neutralisation of $\mathrm{NaOH}(aq)$ and $\mathrm{CH}_3\mathrm{COOH}(aq)$ is
$-56.1\,\mathrm{kJ/mol}$Whereas the enthalpy of neutralisation of $\mathrm{NaOH}(aq)$ and
$\mathrm{HCl}(aq)$ is $-57.9\,\mathrm{kJ/mol}$. Explain the difference.

**Solution:**

The neutralisation of a strong acid ($\mathrm{HCl}$) with a strong base ($\mathrm{NaOH}$) always
gives the same value ($-57.9\,\mathrm{kJ/mol}$) because the net ionic equation is:

$$
\mathrm{H}^+(aq) + \mathrm{OH}^-(aq) \to \mathrm{H}_2\mathrm{O}(l) \quad \Delta H = -57.9\,\mathrm{kJ/mol}
$$

With ethanoic acid (a weak acid), some energy is consumed in dissociating the acid:

$$
\mathrm{CH}_3\mathrm{COOH}(aq) \rightleftharpoons \mathrm{CH}_3\mathrm{COO}^-(aq) + \mathrm{H}^+(aq) \quad \Delta H_\mathrm{diss} \approx +0.4\,\mathrm{kJ/mol}
$$

The overall enthalpy is the sum of the dissociation and neutralisation:

$$
\Delta H_\mathrm{neut}(\text{weak}) = \Delta H_\mathrm{diss} + \Delta H_\mathrm{neut}(\text{strong}) \approx +0.4 + (-57.9) = -57.5\,\mathrm{kJ/mol}
$$

The measured value is $-56.1\,\mathrm{kJ/mol}$Suggesting additional endothermic contributions (the
enthalpy of dissociation of ethanoic acid is endothermic, consuming some of the heat released by
neutralisation). The reaction is less exothermic because the weak acid must first dissociate, which
is an endothermic process.

</details>

## Advanced Thermodynamic Calculations

### Gibbs Free Energy and Equilibrium

The relationship between $\Delta G^\circ$ and the equilibrium constant:

$$\Delta G^\circ = -RT\ln K$$

This is one of the most important equations in A-Level chemistry. It connects thermodynamics
(energetics) with equilibrium (composition).

**Worked Example:** Calculate $K_c$ at $298\,\mathrm{K}$ for a reaction with
$\Delta G^\circ = -5.40\,\mathrm{kJ/mol}$.

$$-5400 = -8.314 \times 298 \times \ln K_c$$

$$\ln K_c = \frac◆LB◆5400◆RB◆◆LB◆8.314 \times 298◆RB◆ = \frac{5400}{2478} = 2.179$$

$$K_c = e^{2.179} = 8.84$$

Since $\Delta G^\circ < 0$$K > 1$Confirming the reaction is spontaneous and products are favoured at
equilibrium.

**Worked Example:** Calculate the temperature at which $\Delta G = 0$ for the reaction
$\mathrm{N}_2\mathrm{O}_4(g) \rightleftharpoons 2\mathrm{NO}_2(g)$Given
$\Delta H^\circ = +57.2\,\mathrm{kJ/mol}$ and
$\Delta S^\circ = +175.8\,\mathrm{J\,K^{-1}\,\mathrm{mol}^{-1}$.

At $\Delta G = 0$: $0 = \Delta H^\circ - T\Delta S^\circ$

$$T = \frac◆LB◆\Delta H^\circ◆RB◆◆LB◆\Delta S^\circ◆RB◆ = \frac{57200}{175.8} = 325\,\mathrm{K}$$

Below $325\,\mathrm{K}$, $\Delta G < 0$ and the forward reaction is spontaneous. Above
$325\,\mathrm{K}$, $\Delta G > 0$ and the reverse reaction is spontaneous. At $325\,\mathrm{K}$The
system is at equilibrium ($K = 1$).

### Entropy Calculations

**Worked Example:** Calculate $\Delta S^\circ$ for the reaction
$\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)$.

$S^\circ$ values:
$\mathrm{CaCO}_3(s) = 92.9\,\mathrm{J\,K^{-1}\,\mathrm{mol}^{-1}}$$\mathrm{CaO}(s) = 38.1\,\mathrm{J\,K^{-1}\mathrm{mol}^{-1}}$$\mathrm{CO}_2(g) = 213.7\,\mathrm{J\,K^{-1}\mathrm{mol}^{-1}}$.

$$\Delta S^\circ = S^\circ(\mathrm{CaO}) + S^\circ(\mathrm{CO}_2) - S^\circ(\mathrm{CaCO}_3)$$

$$= 38.1 + 213.7 - 92.9 = 158.9\,\mathrm{J\,K^{-1}\mathrm{mol}^{-1}}$$

The entropy change is positive, as expected: a solid decomposes to give a gas (increased disorder).

### Born-Haber and Hess's Law Applications

**Worked Example:** Use Hess's Law to calculate $\Delta H_f^\circ$ for
$\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l)$.

Given data:

- $\mathrm{C}(s) + \mathrm{O}_2(g) \to \mathrm{CO}_2(g)$, $\Delta H = -393.5\,\mathrm{kJ/mol}$
- $\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)$, $\Delta H = -285.8\,\mathrm{kJ/mol}$
- $\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l) + 3\mathrm{O}_2(g) \to 2\mathrm{CO}_2(g) + 3\mathrm{H}_2\mathrm{O}(l)$, $\Delta H = -1367\,\mathrm{kJ/mol}$

By Hess's Law:

$$2(\mathrm{C} \to \mathrm{CO}_2) + 3(\mathrm{H}_2 + \tfrac{1}{2}\mathrm{O}_2 \to \mathrm{H}_2\mathrm{O}) - (\mathrm{C}_2\mathrm{H}_5\mathrm{OH} + 3\mathrm{O}_2 \to 2\mathrm{CO}_2 + 3\mathrm{H}_2\mathrm{O}) = \Delta H_f^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH})$$

$$2(-393.5) + 3(-285.8) - (-1367) = -787.0 - 857.4 + 1367 = -277.4\,\mathrm{kJ/mol}$$

$\Delta H_f^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}) = -277\,\mathrm{kJ/mol}$ (to 3 s.f.)

### Gibbs Free Energy: Predicting Feasibility

**Worked Example:** Is the reduction of $\mathrm{TiO}_2$ to $\mathrm{Ti}$ by carbon
thermodynamically feasible at $1500\,\mathrm{K}$?

$$\mathrm{TiO}_2(s) + 2\mathrm{C}(s) \to \mathrm{Ti}(s) + 2\mathrm{CO}(g)$$

$\Delta H^\circ = +877\,\mathrm{kJ/mol}$, $\Delta S^\circ = +193\,\mathrm{J\,K^{-1}\mathrm{mol}^{-1}$

$$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = 877000 - 1500 \times 193 = 877000 - 289500 = 587500\,\mathrm{J/mol} = +588\,\mathrm{kJ/mol}$$

$\Delta G^\circ > 0$So the reaction is not thermodynamically feasible at $1500\,\mathrm{K}$.

At what temperature does it become feasible?

$$T = \frac◆LB◆\Delta H^\circ◆RB◆◆LB◆\Delta S^\circ◆RB◆ = \frac{877000}{193} = 4544\,\mathrm{K}$$

The reaction becomes feasible above approximately $4544\,\mathrm{K}$ (extremely high temperature,
impractical). In practice, the Kroll process (reduction with $\mathrm{Mg}$ or $\mathrm{Cl}_2$) is
used.

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (5 marks)</summary>

Define the term standard enthalpy change of reaction, $\Delta H^\circ_\mathrm{r}$. Explain why the
standard enthalpy change of neutralisation of a strong acid with a strong base is always
approximately $-57\,\mathrm{kJ/mol}$ regardless of which strong acid and strong base are used.

**Mark Scheme:**

$\Delta H^\circ_\mathrm{r}$ is the enthalpy change when the reaction occurs under standard
conditions with all reactants and products in their standard states (1 mark).

The neutralisation of any strong acid with any strong base has the same net ionic equation:

$$\mathrm{H}^+(aq) + \mathrm{OH}^-(aq) \to \mathrm{H}_2\mathrm{O}(l)$$ (1 mark).

The specific acid and base are irrelevant because strong acids and bases are fully dissociated in
solution (1 mark). The enthalpy change depends only on the formation of the O--H bond in water,
which is the same in every case (1 mark). Minor differences arise from the enthalpies of dilution of
different ions (1 mark).

</details>

<details>
<summary>Q2 (6 marks)</summary>

For the reaction $\mathrm{A}(g) + 2\mathrm{B}(g) \to \mathrm{C}(g) + \mathrm{D}(g)$:

$\Delta H^\circ = -85\,\mathrm{kJ/mol}$, $\Delta S^\circ = -120\,\mathrm{J\,K^{-1}\mathrm{mol}^{-1}$

(a) Calculate $\Delta G^\circ$ at $298\,\mathrm{K}$. (2 marks)

(b) State whether the reaction is feasible at $298\,\mathrm{K}$Explaining your answer. (1 mark)

(c) Calculate the temperature above which the reaction becomes non-spontaneous. (2 marks)

(d) State the effect of increasing the pressure on the position of equilibrium. (1 mark)

**Mark Scheme:**

(a)
$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -85000 - 298 \times (-120) = -85000 + 35760 = -49240\,\mathrm{J/mol} = -49.2\,\mathrm{kJ/mol}$
(1 mark for substitution, 1 mark for answer).

(b) $\Delta G^\circ < 0$So the reaction is feasible (spontaneous) at $298\,\mathrm{K}$ (1 mark).

(c) $\Delta G^\circ = 0$:
$T = \frac◆LB◆\Delta H^\circ◆RB◆◆LB◆\Delta S^\circ◆RB◆ = \frac{-85000}{-120} = 708\,\mathrm{K}$ (1
mark). Above $708\,\mathrm{K}$, $\Delta G^\circ > 0$ and the reaction is non-spontaneous (1 mark).

(d) 3 moles of gas on the left, 2 moles on the right. Increasing pressure favours the side with
fewer moles (products), shifting the equilibrium to the right (1 mark).

</details>

<details>
<summary>Q3 (4 marks)</summary>

Explain why the entropy change for the reaction
$\mathrm{NH}_4\mathrm{Cl}(s) \to \mathrm{NH}_3(g) + \mathrm{HCl}(g)$ is positive.

**Mark Scheme:**

A solid is converted into two gases (2 marks). Gases have much higher entropy than solids because
the particles are free to move in all directions (1 mark). The number of particles increases from 1
to 2, and the disorder increases (1 mark).

</details>

<details>
<summary>Q4 (5 marks)</summary>

Use the following data to calculate the lattice enthalpy of $\mathrm{KCl}$ using a Born-Haber cycle:

- $\Delta H_f^\circ(\mathrm{KCl}) = -437\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{at}^\circ(\mathrm{K}) = +89\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{at}^\circ(\mathrm{Cl}) = +122\,\mathrm{kJ/mol}$
- $\mathrm{IE}_1(\mathrm{K}) = +419\,\mathrm{kJ/mol}$
- $\mathrm{EA}_1(\mathrm{Cl}) = -349\,\mathrm{kJ/mol}$

**Mark Scheme:**

$$\Delta H_\mathrm{lat}^\circ = \Delta H_f^\circ - \Delta H_\mathrm{at}^\circ(\mathrm{K}) - \Delta H_\mathrm{at}^\circ(\mathrm{Cl}) - \mathrm{IE}_1(\mathrm{K}) - \mathrm{EA}_1(\mathrm{Cl})$$
(1 mark for equation)

$$= -437 - 89 - 122 - 419 - (-349)$$ (1 mark for substitution)

$$= -437 - 89 - 122 - 419 + 349 = -718\,\mathrm{kJ/mol}$$ (1 mark for arithmetic)

The lattice enthalpy of KCl is $-718\,\mathrm{kJ/mol}$ (1 mark for answer with sign).

The negative sign indicates the process of forming the ionic lattice from gaseous ions is exothermic
(1 mark).

</details>

---

:::tip Diagnostic Test Ready to test your understanding of **Thermodynamics**? The
[diagnostic test](/docs/alevel/chemistry/diagnostics/diag-thermodynamics) contains the hardest
questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine
Thermodynamics with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/chemistry/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

## Worked Examples

**Example 1: Conservation of energy**

A $0.50\,\text{kg}$ ball is dropped from a height of $20\,\text{m}$. Calculate its speed just before
it hits the ground (ignore air resistance).

**Solution:**

Using conservation of energy: $mgh = \frac{1}{2}mv^2$

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 20} = \sqrt{392.4} \approx 19.8\,\text{m\,s}^{-1}$$
