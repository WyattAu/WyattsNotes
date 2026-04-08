---
id: dse-chemistry-energetics
title: Chemistry - Energetics / Thermochemistry
description:
  DSE Chemistry notes covering enthalpy changes, standard enthalpy of
  formation/combustion/neutralisation, Hess's Law and energy cycles, bond enthalpies, calorimetry,
  Born-Haber cycles, entropy, and Gibbs free energy.
slug: energetics
tags: [DSE, Chemistry]
categories: [DSE, Chemistry]
date: 2026-04-08T00:00:00.000Z
---

## Enthalpy Changes

### Definitions

**Enthalpy ($H$):** The heat content of a system at constant pressure. It is a state function.

**Enthalpy change ($\Delta H$):** The heat exchanged with the surroundings during a process at
constant pressure.

$$\Delta H = H_{\text{products}} - H_{\text{reactants}}$$

### Exothermic and Endothermic Reactions

**Exothermic:** $\Delta H \lt 0$. Heat is released to the surroundings. The products have less
enthalpy than the reactants.

Examples: combustion, neutralisation, respiration.

**Endothermic:** $\Delta H \gt 0$. Heat is absorbed from the surroundings. The products have more
enthalpy than the reactants.

Examples: thermal decomposition, photosynthesis, dissolving $\text{NH}_4\text{NO}_3$ in water.

### Standard Conditions

Standard enthalpy changes are measured under standard conditions:

- Pressure: $1 \text{ atm}$ ($101.3 \text{ kPa}$)
- Concentration: $1 \text{ mol/dm}^3$ for solutions
- Temperature: usually $25^\circ\text{C}$ ($298 \text{ K}$)
- All substances in their standard states

The standard state is the pure substance at 1 atm and the specified temperature.

---

## Standard Enthalpy Changes

### Standard Enthalpy of Formation ($\Delta H_f^\circ$)

The enthalpy change when 1 mole of a compound is formed from its elements in their standard states
under standard conditions.

$$\text{C}_{(s)} + \text{O}_{2(g)} \to \text{CO}_{2(g)} \quad \Delta H_f^\circ = -393.5 \text{ kJ/mol}$$

By definition, $\Delta H_f^\circ$ of any element in its standard state = 0.

$$\Delta H_f^\circ(\text{C}_{(s,\text{ graphite})}) = 0 \quad ; \quad \Delta H_f^\circ(\text{H}_{2(g)}) = 0$$

:::warning
$\Delta H_f^\circ$ always refers to 1 mole of the compound formed. The definition
involves formation FROM elements, not the other way around.
:::

### Standard Enthalpy of Combustion ($\Delta H_c^\circ$)

The enthalpy change when 1 mole of a substance is completely burned in excess oxygen under standard
conditions.

$$\text{CH}_{4(g)} + 2\text{O}_{2(g)} \to \text{CO}_{2(g)} + 2\text{H}_2\text{O}_{(l)} \quad \Delta H_c^\circ = -890.3 \text{ kJ/mol}$$

Combustion is always exothermic, so $\Delta H_c^\circ \lt 0$.

### Standard Enthalpy of Neutralisation ($\Delta H_{\text{neut}}^\circ$)

The enthalpy change when 1 mole of water is formed from the reaction between an acid and an alkali
under standard conditions.

$$\text{H}^+_{(aq)} + \text{OH}^-_{(aq)} \to \text{H}_2\text{O}_{(l)} \quad \Delta H_{\text{neut}}^\circ = -57.3 \text{ kJ/mol}$$

For strong acid-strong base reactions, $\Delta H_{\text{neut}}^\circ$ is approximately constant at
$-57.3 \text{ kJ/mol}$ because the net ionic equation is always the same.

For weak acid-strong base reactions, $\Delta H_{\text{neut}}^\circ$ is less exothermic (less
negative) because energy is absorbed to dissociate the weak acid.

### Standard Enthalpy of Atomisation ($\Delta H_{\text{at}}^\circ$)

The enthalpy change to form 1 mole of gaseous atoms from the element in its standard state.

$$\frac{1}{2}\text{Cl}_{2(g)} \to \text{Cl}_{(g)} \quad \Delta H_{\text{at}}^\circ = +122 \text{ kJ/mol}$$

This is always endothermic (bonds must be broken).

### Key Reference Values

| Substance                               | $\Delta H_f^\circ$ (kJ/mol) | $\Delta H_c^\circ$ (kJ/mol) |
| --------------------------------------- | --------------------------- | --------------------------- |
| $\text{CO}_{2(g)}$                      | $-393.5$                    | --                          |
| $\text{H}_2\text{O}_{(l)}$              | $-285.8$                    | --                          |
| $\text{H}_2\text{O}_{(g)}$              | $-241.8$                    | --                          |
| $\text{CH}_{4(g)}$                      | $-74.8$                     | $-890.3$                    |
| $\text{C}_2\text{H}_{5}\text{OH}_{(l)}$ | $-277.7$                    | $-1367$                     |
| $\text{C}_3\text{H}_{8(g)}$             | $-103.8$                    | $-2220$                     |
| $\text{NH}_{3(g)}$                      | $-46.0$                     | $-383$                      |
| $\text{NaOH}_{(aq)}$                    | $-470.1$                    | --                          |

---

## Hess's Law

### Statement

Hess's Law states that the enthalpy change for a reaction is the same regardless of the route taken
from reactants to products, provided the initial and final conditions are the same.

This is a consequence of enthalpy being a **state function**.

### Hess's Law Cycles

**Using Enthalpies of Formation:**

$$\Delta H_{\text{reaction}} = \sum \Delta H_f^\circ(\text{products}) - \sum \Delta H_f^\circ(\text{reactants})$$

**Using Enthalpies of Combustion:**

$$\Delta H_{\text{reaction}} = \sum \Delta H_c^\circ(\text{reactants}) - \sum \Delta H_c^\circ(\text{products})$$

Note the reversal of signs compared to formation.

**Worked example 1:** Calculate $\Delta H$ for the reaction:

$$\text{C}_{3\text{H}_{8(g)}} + 5\text{O}_{2(g)} \to 3\text{CO}_{2(g)} + 4\text{H}_2\text{O}_{(l)}$$

Given: $\Delta H_c^\circ(\text{C}_{3\text{H}_{8(g)}}) = -2220 \text{ kJ/mol}$,
$\Delta H_c^\circ(\text{CO}_{2(g)}) = 0$ (it is already fully oxidised),
$\Delta H_c^\circ(\text{H}_2\text{O}_{(l)}) = 0$.

<details>
<summary>Answer</summary>

Since $\text{CO}_2$ and $\text{H}_2\text{O}$ are already combustion products, their
$\Delta H_c^\circ = 0$.

$$\Delta H = \Delta H_c^\circ(\text{C}_3\text{H}_8) - [3\Delta H_c^\circ(\text{CO}_2) + 4\Delta H_c^\circ(\text{H}_2\text{O})]$$
$$= -2220 - [3(0) + 4(0)] = -2220 \text{ kJ/mol}$$

This makes sense: the enthalpy of combustion of propane equals the enthalpy change of its combustion
reaction.

</details>

**Worked example 2:** Calculate $\Delta H_f^\circ$ of ethanol given:

$$\text{C}_2\text{H}_{5}\text{OH}_{(l)} + 3\text{O}_{2(g)} \to 2\text{CO}_{2(g)} + 3\text{H}_2\text{O}_{(l)} \quad \Delta H = -1367 \text{ kJ/mol}$$

$\Delta H_f^\circ(\text{CO}_{2(g)}) = -393.5 \text{ kJ/mol}$,
$\Delta H_f^\circ(\text{H}_2\text{O}_{(l)}) = -285.8 \text{ kJ/mol}$

<details>
<summary>Answer</summary>

Using $\Delta H = \sum \Delta H_f^\circ(\text{products}) - \sum \Delta H_f^\circ(\text{reactants})$:

$$-1367 = [2(-393.5) + 3(-285.8)] - [\Delta H_f^\circ(\text{C}_2\text{H}_5\text{OH}) + 3(0)]$$

$$-1367 = [-787.0 + (-857.4)] - \Delta H_f^\circ(\text{C}_2\text{H}_5\text{OH})$$

$$-1367 = -1644.4 - \Delta H_f^\circ(\text{C}_2\text{H}_5\text{OH})$$

$$\Delta H_f^\circ(\text{C}_2\text{H}_5\text{OH}) = -1644.4 + 1367 = -277.4 \text{ kJ/mol}$$

This agrees with the accepted value of $-277.7 \text{ kJ/mol}$.

</details>

**Worked example 3:** Using enthalpies of combustion, calculate $\Delta H$ for:

$$3\text{C}_{(s)} + 4\text{H}_{2(g)} \to \text{C}_3\text{H}_{8(g)}$$

Given: $\Delta H_c^\circ(\text{C}_{(s)}) = -393.5 \text{ kJ/mol}$ (same as
$\Delta H_c^\circ(\text{CO}_2)$ since combustion of C gives $\text{CO}_2$),
$\Delta H_c^\circ(\text{H}_{2(g)}) = -285.8 \text{ kJ/mol}$ (gives $\text{H}_2\text{O}_{(l)}$),
$\Delta H_c^\circ(\text{C}_{3\text{H}_{8(g)}}) = -2220 \text{ kJ/mol}$.

<details>
<summary>Answer</summary>

$$\Delta H = \sum \Delta H_c^\circ(\text{reactants}) - \sum \Delta H_c^\circ(\text{products})$$

$$= [3(-393.5) + 4(-285.8)] - [(-2220)]$$

$$= [-1180.5 + (-1143.2)] - (-2220)$$

$$= -2323.7 + 2220 = -103.7 \text{ kJ/mol}$$

This is $\Delta H_f^\circ(\text{C}_{3\text{H}_{8(g)}})$, matching the reference value of
$-103.8 \text{ kJ/mol}$.

</details>

---

## Bond Enthalpies

### Definition

The **mean bond enthalpy** is the average enthalpy change when 1 mole of a specified type of bond is
broken in the gaseous state, averaged over a range of compounds.

Bond breaking is always endothermic ($\Delta H \gt 0$). Bond forming is always exothermic
($\Delta H \lt 0$).

### Using Bond Enthalpies to Estimate $\Delta H$

$$\Delta H \approx \sum (\text{bonds broken}) - \sum (\text{bonds formed})$$

### Common Bond Enthalpies

| Bond       | Enthalpy (kJ/mol)          | Bond       | Enthalpy (kJ/mol) |
| ---------- | -------------------------- | ---------- | ----------------- |
| C--C       | 347                        | C--H       | 413               |
| C=C        | 614                        | O--H       | 464               |
| C$\equiv$C | 839                        | H--H       | 436               |
| C--O       | 358                        | O=O        | 498               |
| C=O        | 805 (in $\text{CO}_2$)     | N$\equiv$N | 945               |
| C=O        | 743 (in aldehydes/ketones) | N--H       | 391               |
| C--Cl      | 346                        | F--F       | 158               |
| O--O       | 146                        | Cl--Cl     | 243               |

:::warning
Bond enthalpies give only **average** values. For reactions involving the gas phase, they
give good estimates. For reactions involving liquids or aqueous solutions, additional energy changes
(vaporisation, dissolution) are not accounted for, so the estimate is less accurate.
:::

**Worked example 4:** Estimate $\Delta H$ for the combustion of methane using bond enthalpies.

$$\text{CH}_{4(g)} + 2\text{O}_{2(g)} \to \text{CO}_{2(g)} + 2\text{H}_2\text{O}_{(g)}$$

<details>
<summary>Answer</summary>

Bonds broken:

- 4 $\times$ C--H = $4 \times 413 = 1652 \text{ kJ/mol}$
- 2 $\times$ O=O = $2 \times 498 = 996 \text{ kJ/mol}$

Total bonds broken = $1652 + 996 = 2648 \text{ kJ/mol}$

Bonds formed:

- 2 $\times$ C=O (in $\text{CO}_2$) = $2 \times 805 = 1610 \text{ kJ/mol}$
- 4 $\times$ O--H (in $2\text{H}_2\text{O}$) = $4 \times 464 = 1856 \text{ kJ/mol}$

Total bonds formed = $1610 + 1856 = 3466 \text{ kJ/mol}$

$\Delta H = 2648 - 3466 = -818 \text{ kJ/mol}$

Note: the accepted value is $-890.3 \text{ kJ/mol}$ (for $\text{H}_2\text{O}_{(l)}$). The
discrepancy arises because bond enthalpies are averages and we used $\text{H}_2\text{O}_{(g)}$
rather than $\text{H}_2\text{O}_{(l)}$.

</details>

**Worked example 5:** Using bond enthalpies, estimate the enthalpy change for:

$$\text{N}_{2(g)} + 3\text{H}_{2(g)} \to 2\text{NH}_{3(g)}$$

<details>
<summary>Answer</summary>

Bonds broken:

- 1 $\times$ N$\equiv$N = $945 \text{ kJ/mol}$
- 3 $\times$ H--H = $3 \times 436 = 1308 \text{ kJ/mol}$

Total bonds broken = $945 + 1308 = 2253 \text{ kJ/mol}$

Bonds formed:

- 6 $\times$ N--H = $6 \times 391 = 2346 \text{ kJ/mol}$

$\Delta H = 2253 - 2346 = -93 \text{ kJ/mol}$

For 2 mol $\text{NH}_3$: $\Delta H = -93 \text{ kJ}$, so per mole of reaction: $-93 \text{ kJ/mol}$.

Accepted $\Delta H_f^\circ(\text{NH}_{3(g)}) = -46.0 \text{ kJ/mol}$, so
$\Delta H = 2 \times (-46.0) = -92.0 \text{ kJ/mol}$. The estimate is close.

</details>

---

## Calorimetry

### Principle

Calorimetry measures the heat exchanged during a reaction by observing the temperature change of a
known mass of water (or solution).

$$q = mc\Delta T$$

Where:

- $q$ = heat energy (J)
- $m$ = mass of water/solution (g)
- $c$ = specific heat capacity (4.18 J g$^{-1}$ K$^{-1}$ for water)
- $\Delta T$ = temperature change (K or $^\circ$C)

$$\Delta H = -\frac{q}{n} = -\frac{mc\Delta T}{n}$$

The negative sign converts the perspective: if the solution temperature rises ($\Delta T \gt 0$),
the reaction is exothermic ($\Delta H \lt 0$).

### Solution Calorimetry

Used for reactions in solution (e.g., neutralisation, dissolution).

**Assumptions:**

1. The density of the solution is 1.00 g/cm$^3$ (so mass in g = volume in cm$^3$).
2. The specific heat capacity of the solution is the same as water (4.18 J g$^{-1}$ K$^{-1}$).
3. No heat is lost to the surroundings (or the calorimeter is well insulated).
4. The calorimeter itself absorbs negligible heat.

**Worked example 6:** 50.0 cm$^3$ of 1.00 mol/dm$^3$ HCl is mixed with 50.0 cm$^3$ of 1.00
mol/dm$^3$ NaOH in a polystyrene cup. The temperature rises from $22.0^\circ\text{C}$ to
$28.8^\circ\text{C}$. Calculate $\Delta H$ for the neutralisation per mole of water formed.

<details>
<summary>Answer</summary>

Total volume = $50.0 + 50.0 = 100.0 \text{ cm}^3$

Mass of solution = $100.0 \text{ g}$ (density = 1.00 g/cm$^3$)

$\Delta T = 28.8 - 22.0 = 6.8^\circ\text{C}$

$q = mc\Delta T = 100.0 \times 4.18 \times 6.8 = 2842 \text{ J} = 2.842 \text{ kJ}$

Moles of $\text{H}_2\text{O}$ formed = moles of $\text{HCl}$ =
$1.00 \times 50.0 / 1000 = 0.0500 \text{ mol}$

$\Delta H = -\dfrac{2.842}{0.0500} = -56.8 \text{ kJ/mol}$

This is close to the standard value of $-57.3 \text{ kJ/mol}$.

</details>

### Combustion Calorimetry

Used to measure enthalpies of combustion. A known mass of fuel is burned, and the temperature rise
of a known mass of water is measured.

**Worked example 7:** 1.50 g of ethanol is burned in a spirit burner. The heat produced raises the
temperature of 200 g of water from $20.0^\circ\text{C}$ to $45.5^\circ\text{C}$. Calculate the
enthalpy of combustion of ethanol.

<details>
<summary>Answer</summary>

$q = mc\Delta T = 200 \times 4.18 \times (45.5 - 20.0) = 200 \times 4.18 \times 25.5 = 21318 \text{ J} = 21.32 \text{ kJ}$

Moles of $\text{C}_2\text{H}_5\text{OH} = 1.50 / 46.1 = 0.0325 \text{ mol}$

$\Delta H_c = -\dfrac{21.32}{0.0325} = -656 \text{ kJ/mol}$

The accepted value is $-1367 \text{ kJ/mol}$. The experimental value is much less exothermic due to
heat losses to the surroundings and incomplete combustion.

</details>

### Sources of Error in Calorimetry

| Error                               | Effect                                         | Minimisation                           |
| ----------------------------------- | ---------------------------------------------- | -------------------------------------- |
| Heat loss to surroundings           | $\Delta T$ too small; $\Delta H$ less negative | Use a polystyrene cup (good insulator) |
| Incomplete combustion               | Less heat released                             | Ensure good air supply                 |
| Evaporation of fuel during weighing | Apparent mass too low                          | Weigh quickly; use a cap               |
| Heat absorbed by calorimeter        | $\Delta T$ too small                           | Account for calorimeter heat capacity  |

---

## Born-Haber Cycles

### Overview

Born-Haber cycles calculate lattice energies of ionic compounds using Hess's Law. The lattice energy
is the enthalpy change when 1 mole of an ionic solid is formed from its gaseous ions.

### Steps in a Born-Haber Cycle (for NaCl)

1. **Atomisation of sodium:** $\text{Na}_{(s)} \to \text{Na}_{(g)}$
   ($\Delta H_{\text{at}}^\circ = +108 \text{ kJ/mol}$)
2. **Ionisation of sodium:** $\text{Na}_{(g)} \to \text{Na}^+_{(g)} + e^-$
   ($\text{IE}_1 = +496 \text{ kJ/mol}$)
3. **Atomisation of chlorine:** $\frac{1}{2}\text{Cl}_{2(g)} \to \text{Cl}_{(g)}$
   ($\Delta H_{\text{at}}^\circ = +122 \text{ kJ/mol}$)
4. **Electron affinity of chlorine:** $\text{Cl}_{(g)} + e^- \to \text{Cl}^-_{(g)}$
   ($\text{EA} = -349 \text{ kJ/mol}$)
5. **Lattice energy:** $\text{Na}^+_{(g)} + \text{Cl}^-_{(g)} \to \text{NaCl}_{(s)}$
   ($\Delta H_{\text{latt}} = ?$)
6. **Formation:** $\text{Na}_{(s)} + \frac{1}{2}\text{Cl}_{2(g)} \to \text{NaCl}_{(s)}$
   ($\Delta H_f^\circ = -411 \text{ kJ/mol}$)

By Hess's Law:

$$\Delta H_f^\circ = \Delta H_{\text{at}}(\text{Na}) + \text{IE}_1(\text{Na}) + \Delta H_{\text{at}}(\text{Cl}) + \text{EA}(\text{Cl}) + \Delta H_{\text{latt}}$$

$$-411 = 108 + 496 + 122 + (-349) + \Delta H_{\text{latt}}$$

$$-411 = 377 + \Delta H_{\text{latt}}$$

$$\Delta H_{\text{latt}} = -411 - 377 = -788 \text{ kJ/mol}$$

:::info
Lattice energy is always exothermic (negative) because energy is released when oppositely
charged ions come together.
:::

**Worked example 8:** Calculate the lattice energy of $\text{MgO}$ given:

- $\Delta H_{\text{at}}^\circ(\text{Mg}) = +148 \text{ kJ/mol}$
- $\text{IE}_1(\text{Mg}) = +738 \text{ kJ/mol}$
- $\text{IE}_2(\text{Mg}) = +1451 \text{ kJ/mol}$
- $\Delta H_{\text{at}}^\circ(\text{O}) = +248 \text{ kJ/mol}$ (for
  $\frac{1}{2}\text{O}_{2(g)} \to \text{O}_{(g)}$)
- $\text{EA}_1(\text{O}) = -141 \text{ kJ/mol}$
- $\text{EA}_2(\text{O}) = +798 \text{ kJ/mol}$ (second electron affinity is endothermic)
- $\Delta H_f^\circ(\text{MgO}) = -602 \text{ kJ/mol}$

<details>
<summary>Answer</summary>

$$\Delta H_f^\circ = \Delta H_{\text{at}}(\text{Mg}) + \text{IE}_1 + \text{IE}_2 + \Delta H_{\text{at}}(\text{O}) + \text{EA}_1 + \text{EA}_2 + \Delta H_{\text{latt}}$$

$$-602 = 148 + 738 + 1451 + 248 + (-141) + 798 + \Delta H_{\text{latt}}$$

$$-602 = 3242 + \Delta H_{\text{latt}}$$

$$\Delta H_{\text{latt}} = -602 - 3242 = -3844 \text{ kJ/mol}$$

The large magnitude reflects the high charges on $\text{Mg}^{2+}$ and $\text{O}^{2-}$.

</details>

---

## Entropy ($S$)

### Definition

Entropy is a measure of the disorder or randomness of a system.

$$\Delta S = S_{\text{products}} - S_{\text{reactants}}$$

### Factors Affecting Entropy

1. **Physical state:** Gas $\gt$ Liquid $\gt$ Solid (increasing disorder).
2. **Temperature:** Entropy increases with temperature.
3. **Number of particles:** More particles (especially gas molecules) means higher entropy.
4. **Dissolution:** Dissolving a solid in water generally increases entropy.

### Predicting Entropy Changes

- Reactions producing more gas molecules: $\Delta S \gt 0$.
- Reactions consuming gas molecules: $\Delta S \lt 0$.
- Solid to liquid or liquid to gas transitions: $\Delta S \gt 0$.

$$\text{CaCO}_{3(s)} \to \text{CaO}_{(s)} + \text{CO}_{2(g)} \quad \Delta S \gt 0 \text{ (solid to solid + gas)}$$

$$\text{N}_{2(g)} + 3\text{H}_{2(g)} \to 2\text{NH}_{3(g)} \quad \Delta S \lt 0 \text{ (4 mol gas to 2 mol gas)}$$

### Standard Entropy Values ($S^\circ$)

Typical values (J mol$^{-1}$ K$^{-1}$):

| Substance                  | $S^\circ$ (J mol$^{-1}$ K$^{-1}$) |
| -------------------------- | --------------------------------- |
| $\text{C}_{(s)}$           | 5.7                               |
| $\text{NaCl}_{(s)}$        | 72.1                              |
| $\text{H}_2\text{O}_{(l)}$ | 69.9                              |
| $\text{H}_2\text{O}_{(g)}$ | 188.7                             |
| $\text{CO}_{2(g)}$         | 213.6                             |
| $\text{N}_{2(g)}$          | 191.5                             |
| $\text{NH}_{3(g)}$         | 192.3                             |

---

## Gibbs Free Energy ($\Delta G$)

### Definition

$$\Delta G = \Delta H - T\Delta S$$

Where:

- $\Delta G$ = Gibbs free energy change (kJ/mol)
- $\Delta H$ = enthalpy change (kJ/mol)
- $T$ = temperature (K)
- $\Delta S$ = entropy change (kJ mol$^{-1}$ K$^{-1}$)

:::warning
Ensure units are consistent. If $\Delta H$ is in kJ/mol and $\Delta S$ is in J mol$^{-1}$
K$^{-1}$, convert $\Delta S$ to kJ mol$^{-1}$ K$^{-1}$ by dividing by 1000.
:::

### Feasibility of Reactions

| $\Delta G$       | Reaction                                                  |
| ---------------- | --------------------------------------------------------- |
| $\Delta G \lt 0$ | Feasible (spontaneous) under the given conditions         |
| $\Delta G = 0$   | At equilibrium                                            |
| $\Delta G \gt 0$ | Not feasible (non-spontaneous) under the given conditions |

### Effect of Temperature on Feasibility

The table below shows when $\Delta G \lt 0$ depending on the signs of $\Delta H$ and $\Delta S$:

| $\Delta H$ | $\Delta S$ | $\Delta G = \Delta H - T\Delta S$     | Feasibility             |
| ---------- | ---------- | ------------------------------------- | ----------------------- |
| $-$        | $+$        | Always negative                       | Always feasible         |
| $+$        | $-$        | Always positive                       | Never feasible          |
| $-$        | $-$        | Negative at low T, positive at high T | Feasible at low T only  |
| $+$        | $+$        | Positive at low T, negative at high T | Feasible at high T only |

### Temperature of Equilibrium

When $\Delta G = 0$:

$$T = \frac{\Delta H}{\Delta S}$$

**Worked example 9:** For the decomposition of calcium carbonate:

$$\text{CaCO}_{3(s)} \to \text{CaO}_{(s)} + \text{CO}_{2(g)}$$

$\Delta H = +178 \text{ kJ/mol}$, $\Delta S = +0.161 \text{ kJ mol}^{-1} \text{ K}^{-1}$

Calculate the minimum temperature at which the reaction becomes feasible.

<details>
<summary>Answer</summary>

At $\Delta G = 0$:
$T = \dfrac{\Delta H}{\Delta S} = \dfrac{178}{0.161} = 1106 \text{ K} = 833^\circ\text{C}$

Above $833^\circ\text{C}$, the reaction becomes thermodynamically feasible.

</details>

**Worked example 10:** For the reaction $\text{N}_{2(g)} + 3\text{H}_{2(g)} \to 2\text{NH}_{3(g)}$:

$\Delta H = -92.0 \text{ kJ/mol}$, $\Delta S = -0.199 \text{ kJ mol}^{-1} \text{ K}^{-1}$

Is the reaction feasible at 298 K? At what temperature does it become non-feasible?

<details>
<summary>Answer</summary>

At 298 K:

$\Delta G = -92.0 - 298 \times (-0.199) = -92.0 + 59.3 = -32.7 \text{ kJ/mol}$

Since $\Delta G \lt 0$, the reaction is feasible at 298 K.

At $\Delta G = 0$: $T = \dfrac{-92.0}{-0.199} = 462 \text{ K} = 189^\circ\text{C}$

Above 462 K, $\Delta G \gt 0$ and the reaction becomes non-feasible. However, in practice the Haber
process operates at high temperature (400--500$^\circ$C) for kinetic reasons (faster rate), and uses
a catalyst and continuous removal of $\text{NH}_3$ to shift equilibrium.

</details>

---

## Common Pitfalls

1. **Sign errors in Hess's Law:** When using $\Delta H_c^\circ$, remember:
   $\Delta H = \sum \Delta H_c^\circ(\text{reactants}) - \sum \Delta H_c^\circ(\text{products})$.
   The signs are reversed compared to using $\Delta H_f^\circ$.

2. **Forgetting $\Delta H_f^\circ = 0$ for elements:** Elements in their standard states have zero
   enthalpy of formation. Do not skip them or assign them non-zero values.

3. **Bond enthalpy limitations:** Bond enthalpies are averages. They do not account for
   intermolecular forces, phase changes, or the specific molecular environment. Estimates using bond
   enthalpies differ from experimental values.

4. **Unit inconsistency in Gibbs free energy:** $\Delta H$ is typically in kJ/mol, but $\Delta S$ is
   often given in J mol$^{-1}$ K$^{-1}$. Always convert to the same units.

5. **Calorimetry assumptions:** Assuming no heat loss and density = 1.00 g/cm$^3$ introduces
   systematic errors. Experimental values of $\Delta H_c$ are always less exothermic than literature
   values.

6. **Second electron affinity is endothermic:** Adding a second electron to a negative ion
   ($\text{O}^-$) requires energy because of electron-electron repulsion.

7. **$\Delta G$ predicts feasibility, not rate:** A reaction with $\Delta G \lt 0$ may still be
   extremely slow. Thermodynamic feasibility does not imply kinetic practicality.

---

## Practice Problems

### Problem 1

Using the following data, calculate $\Delta H_f^\circ$ of $\text{CH}_3\text{OH}_{(l)}$:

$\Delta H_c^\circ(\text{C}_{(s)}) = -393.5 \text{ kJ/mol}$
$\Delta H_c^\circ(\text{H}_{2(g)}) = -285.8 \text{ kJ/mol}$
$\Delta H_c^\circ(\text{CH}_3\text{OH}_{(l)}) = -726.0 \text{ kJ/mol}$

<details>
<summary>Answer</summary>

Formation:
$\text{C}_{(s)} + 2\text{H}_{2(g)} + \frac{1}{2}\text{O}_{2(g)} \to \text{CH}_3\text{OH}_{(l)}$

$$\Delta H_f^\circ = \sum \Delta H_c^\circ(\text{reactants}) - \sum \Delta H_c^\circ(\text{products})$$

$$= [(-393.5) + 2(-285.8) + 0] - (-726.0)$$

$$= [-393.5 - 571.6] + 726.0$$

$$= -965.1 + 726.0 = -239.1 \text{ kJ/mol}$$

</details>

### Problem 2

Using bond enthalpies, estimate $\Delta H$ for the hydrogenation of ethene:

$$\text{C}_2\text{H}_{4(g)} + \text{H}_{2(g)} \to \text{C}_2\text{H}_{6(g)}$$

<details>
<summary>Answer</summary>

Bonds broken:

- 1 $\times$ C=C = 614
- 4 $\times$ C--H = $4 \times 413 = 1652$
- 1 $\times$ H--H = 436

Total bonds broken = $614 + 1652 + 436 = 2702 \text{ kJ/mol}$

Bonds formed:

- 1 $\times$ C--C = 347
- 6 $\times$ C--H = $6 \times 413 = 2478$

Total bonds formed = $347 + 2478 = 2825 \text{ kJ/mol}$

$\Delta H = 2702 - 2825 = -123 \text{ kJ/mol}$

</details>

### Problem 3

50.0 cm$^3$ of 0.500 mol/dm$^3$ $\text{HNO}_3$ is added to 50.0 cm$^3$ of 0.500 mol/dm$^3$
$\text{KOH}$. The temperature rises from $21.0^\circ\text{C}$ to $24.2^\circ\text{C}$. Calculate the
enthalpy of neutralisation per mole of water formed.

<details>
<summary>Answer</summary>

Mass of solution = $100.0 \text{ g}$

$\Delta T = 24.2 - 21.0 = 3.2^\circ\text{C}$

$q = 100.0 \times 4.18 \times 3.2 = 1338 \text{ J} = 1.338 \text{ kJ}$

Moles of $\text{H}_2\text{O} = 0.500 \times 50.0 / 1000 = 0.0250 \text{ mol}$

$\Delta H = -1.338 / 0.0250 = -53.5 \text{ kJ/mol}$

This is slightly less exothermic than $-57.3 \text{ kJ/mol}$ due to heat losses.

</details>

### Problem 4

For the reaction $\text{C}_{(s)} + \text{CO}_{2(g)} \to 2\text{CO}_{(g)}$:

$\Delta H = +173 \text{ kJ/mol}$, $\Delta S = +0.176 \text{ kJ mol}^{-1} \text{ K}^{-1}$

Calculate $\Delta G$ at 298 K and at 1000 K. At what temperature does the reaction become feasible?

<details>
<summary>Answer</summary>

At 298 K: $\Delta G = 173 - 298 \times 0.176 = 173 - 52.4 = +120.6 \text{ kJ/mol}$

Not feasible at 298 K.

At 1000 K: $\Delta G = 173 - 1000 \times 0.176 = 173 - 176 = -3 \text{ kJ/mol}$

Feasible at 1000 K.

At $\Delta G = 0$: $T = 173 / 0.176 = 983 \text{ K} = 710^\circ\text{C}$

The reaction becomes feasible above 983 K.

</details>

### Problem 5

Calculate the lattice energy of $\text{Na}_2\text{O}$ given:

- $\Delta H_f^\circ(\text{Na}_2\text{O}) = -414 \text{ kJ/mol}$
- $\Delta H_{\text{at}}^\circ(\text{Na}) = +108 \text{ kJ/mol}$
- $\text{IE}_1(\text{Na}) = +496 \text{ kJ/mol}$
- $\text{IE}_2(\text{Na}) = +4562 \text{ kJ/mol}$
- $\Delta H_{\text{at}}^\circ(\text{O}) = +248 \text{ kJ/mol}$
- $\text{EA}_1(\text{O}) = -141 \text{ kJ/mol}$
- $\text{EA}_2(\text{O}) = +798 \text{ kJ/mol}$

<details>
<summary>Answer</summary>

Born-Haber cycle (for 1 mol $\text{Na}_2\text{O}$, so 2 mol Na):

$$\Delta H_f^\circ = 2[\Delta H_{\text{at}}(\text{Na}) + \text{IE}_1 + \text{IE}_2] + [\Delta H_{\text{at}}(\text{O}) + \text{EA}_1 + \text{EA}_2] + \Delta H_{\text{latt}}$$

$$-414 = 2[108 + 496 + 4562] + [248 + (-141) + 798] + \Delta H_{\text{latt}}$$

$$-414 = 2(5166) + 905 + \Delta H_{\text{latt}}$$

$$-414 = 10332 + 905 + \Delta H_{\text{latt}}$$

$$-414 = 11237 + \Delta H_{\text{latt}}$$

$$\Delta H_{\text{latt}} = -414 - 11237 = -11651 \text{ kJ/mol}$$

</details>

### Problem 6

Explain why the experimental value of $\Delta H_c$ for ethanol determined by simple calorimetry
($-656 \text{ kJ/mol}$) is significantly less exothermic than the literature value
($-1367 \text{ kJ/mol}$). Suggest two improvements to the experimental setup.

<details>
<summary>Answer</summary>

The discrepancy is due to:

1. **Heat loss to surroundings:** Much of the heat produced escapes to the air and the calorimeter
   rather than being absorbed by the water.

2. **Incomplete combustion:** Ethanol may burn incompletely, producing CO and soot instead of only
   $\text{CO}_2$ and $\text{H}_2\text{O}$, releasing less heat per mole.

3. **Evaporation of ethanol:** Some ethanol evaporates before/during combustion, meaning not all the
   measured mass actually burns.

Improvements:

1. Use a bomb calorimeter (sealed, insulated vessel) to minimise heat loss and ensure complete
   combustion.

2. Reduce the distance between the flame and the calorimeter, or use a draught shield to reduce
   convective heat loss.

</details>

---

## Indirect Determination of Enthalpy Changes

### Using Hess's Law with Multiple Steps

Some enthalpy changes cannot be measured directly and must be determined indirectly using known
values and Hess's Law.

**Worked example 7:** Calculate the enthalpy change for:

$$\text{C}_{(s)} + 2\text{H}_{2(g)} + \frac{1}{2}\text{O}_{2(g)} \to \text{CH}_3\text{OH}_{(l)}$$

Using the following data:

$\text{C}_{(s)} + \text{O}_{2(g)} \to \text{CO}_{2(g)} \quad \Delta H_1 = -393.5 \text{ kJ/mol}$

$\text{CH}_3\text{OH}_{(l)} + \frac{3}{2}\text{O}_{2(g)} \to \text{CO}_{2(g)} + 2\text{H}_2\text{O}_{(l)} \quad \Delta H_2 = -726.0 \text{ kJ/mol}$

$\text{H}_{2(g)} + \frac{1}{2}\text{O}_{2(g)} \to \text{H}_2\text{O}_{(l)} \quad \Delta H_3 = -285.8 \text{ kJ/mol}$

<details>
<summary>Answer</summary>

Route: $\text{C} + 2\text{H}_2 + \frac{1}{2}\text{O}_2 \xrightarrow{\Delta H} \text{CH}_3\text{OH}$

Hess's Law cycle:

$\text{C} + 2\text{H}_2 + \frac{1}{2}\text{O}_2 \xrightarrow{\Delta H_1 + 2\Delta H_3} \text{CO}_2 + 2\text{H}_2\text{O} \xrightarrow{-\Delta H_2} \text{CH}_3\text{OH}$

$\Delta H = (\Delta H_1 + 2\Delta H_3) + (-\Delta H_2)$

$\Delta H = (-393.5 + 2(-285.8)) - (-726.0)$

$\Delta H = (-393.5 - 571.6) + 726.0$

$\Delta H = -965.1 + 726.0 = -239.1 \text{ kJ/mol}$

</details>

### Dissolution Enthalpies

The enthalpy of solution is the enthalpy change when 1 mole of solute dissolves in a large excess of
solvent to form an infinitely dilute solution.

$$\text{NaCl}_{(s)} \to \text{Na}^+_{(aq)} + \text{Cl}^-_{(aq)} \quad \Delta H_{\text{sol}}^\circ = +3.9 \text{ kJ/mol}$$

The enthalpy of solution can be related to the lattice energy and the hydration enthalpy:

$$\Delta H_{\text{sol}} = \Delta H_{\text{latt}} + \Delta H_{\text{hyd}}$$

Where $\Delta H_{\text{latt}}$ is the lattice energy (endothermic, breaking the lattice) and
$\Delta H_{\text{hyd}}$ is the hydration enthalpy (exothermic, ions interacting with water).

For NaCl: $\Delta H_{\text{latt}} = +788 \text{ kJ/mol}$,
$\Delta H_{\text{hyd}} = -784 \text{ kJ/mol}$.

$$\Delta H_{\text{sol}} = +788 + (-784) = +4 \text{ kJ/mol}$$

This is slightly endothermic, consistent with the accepted value of $+3.9 \text{ kJ/mol}$.

---

## Temperature Changes and Enthalpy

### Heat Capacity

The heat capacity ($C$) of a substance is the amount of heat required to raise its temperature by 1
K.

$$C = \frac{q}{\Delta T}$$

For water: $C = 4.18 \text{ J g}^{-1} \text{ K}^{-1}$ (specific heat capacity, per gram).

### Calorimeter Heat Capacity

In more accurate calorimetry, the heat absorbed by the calorimeter itself must be accounted for:

$$q_{\text{total}} = (m_{\text{water}} \times c_{\text{water}} + C_{\text{calorimeter}}) \times \Delta T$$

**Worked example 8:** A calorimeter has a heat capacity of 50.0 J/K. When 100 cm$^3$ of 1.00
mol/dm$^3$ HCl is mixed with 100 cm$^3$ of 1.00 mol/dm$^3$ NaOH, the temperature rises from
$20.0^\circ$C to $26.7^\circ$C. Calculate $\Delta H_{\text{neut}}$.

<details>
<summary>Answer</summary>

$\Delta T = 26.7 - 20.0 = 6.7^\circ$C

$q_{\text{water}} = 200 \times 4.18 \times 6.7 = 5601 \text{ J}$

$q_{\text{calorimeter}} = 50.0 \times 6.7 = 335 \text{ J}$

$q_{\text{total}} = 5601 + 335 = 5936 \text{ J} = 5.936 \text{ kJ}$

Moles of water = $1.00 \times 100 / 1000 = 0.100 \text{ mol}$

$\Delta H = -5.936 / 0.100 = -59.4 \text{ kJ/mol}$

</details>

---

## Summary of Key Equations

| Equation                                                                                      | Use                                |
| --------------------------------------------------------------------------------------------- | ---------------------------------- |
| $\Delta H = \sum \Delta H_f^\circ(\text{products}) - \sum \Delta H_f^\circ(\text{reactants})$ | Hess's Law (formation)             |
| $\Delta H = \sum \Delta H_c^\circ(\text{reactants}) - \sum \Delta H_c^\circ(\text{products})$ | Hess's Law (combustion)            |
| $\Delta H \approx \sum (\text{bonds broken}) - \sum (\text{bonds formed})$                    | Bond enthalpy estimate             |
| $q = mc\Delta T$                                                                              | Calorimetry                        |
| $\Delta H = -q/n$                                                                             | From calorimetry to molar enthalpy |
| $\Delta G = \Delta H - T\Delta S$                                                             | Gibbs free energy                  |
| $T = \Delta H / \Delta S$ (when $\Delta G = 0$)                                               | Feasibility temperature            |
| $\Delta H_{\text{sol}} = \Delta H_{\text{latt}} + \Delta H_{\text{hyd}}$                      | Solution enthalpy                  |
