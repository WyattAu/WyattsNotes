---
id: thermochemistry
title: Thermochemistry
description: IB Chemistry — enthalpy, Hess's law, bond enthalpies, calorimetry, and energy cycles.
slug: thermochemistry
---

## Enthalpy Changes

### Definitions

**Enthalpy** ($H$) is the heat content of a system at constant pressure.

An **enthalpy change** ($\Delta H$) is the heat energy exchanged with the surroundings during a
reaction at constant pressure.

### Sign Convention

| Type        | Sign             | Energy Flow                           |
| ----------- | ---------------- | ------------------------------------- |
| Exothermic  | $\Delta H \lt 0$ | System releases heat to surroundings  |
| Endothermic | $\Delta H \gt 0$ | System absorbs heat from surroundings |

### Standard Conditions

Standard enthalpy changes are measured under standard conditions:

- Pressure: $100\mathrm{ kPa}$ (IB standard)
- Concentration: $1\mathrm{ mol/L}$ for solutions
- Temperature: usually $298\mathrm{ K}$ ($25\degree\mathrm{C}$)
- All substances in their standard states

### Types of Enthalpy Change

| Type                                | Symbol                           | Definition                                                                        |
| ----------------------------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| Standard enthalpy of formation      | $\Delta H_f^\circ$               | Enthalpy change when 1 mol of compound forms from its elements in standard states |
| Standard enthalpy of combustion     | $\Delta H_c^\circ$               | Enthalpy change when 1 mol of substance burns completely in oxygen                |
| Standard enthalpy of neutralisation | $\Delta H_{\mathrm{neut}}^\circ$ | Enthalpy change when 1 mol of water forms from acid-base reaction                 |
| Standard enthalpy of atomisation    | $\Delta H_{\mathrm{at}}^\circ$   | Enthalpy change to form 1 mol of gaseous atoms from element in standard state     |

:::warning[Exam Tip]

$\Delta H_f^\circ$ for an element in its standard state is always zero (by definition). For example,
$\Delta H_f^\circ$ of O$_2$(g) = 0, $\Delta H_f^\circ$ of C(graphite) = 0.

:::

---

## Calorimetry

### Principle

Calorimetry measures the heat exchanged during a chemical or physical process.

### Specific Heat Capacity

The amount of energy required to raise the temperature of $1\mathrm{ g}$ of a substance by
$1\degree\mathrm{C}$:

$$
q = mc\Delta T
$$

where:

- $q$ = heat energy (J)
- $m$ = mass (g)
- $c$ = specific heat capacity (J/g/$\degree$C)
- $\Delta T$ = temperature change ($\degree$C)

| Substance | $c$ (J/g/$\degree$C) |
| --------- | -------------------- |
| Water     | 4.18                 |
| Ice       | 2.09                 |
| Aluminium | 0.90                 |
| Copper    | 0.39                 |
| Iron      | 0.45                 |

### Measuring Enthalpy of Reaction

For a reaction in solution:

$$
\Delta H = -\frac{mc\Delta T}{n}
$$

The negative sign accounts for the convention: heat lost by the reaction is gained by the solution.

### Assumptions in Calorimetry

1. No heat loss to the surroundings (use a calorimeter).
2. The calorimeter itself has negligible heat capacity.
3. The solution has the same density and specific heat capacity as water.

:::info[Example]

$50.0\mathrm{ mL}$ of $1.0\mathrm{ M}$ HCl is mixed with $50.0\mathrm{ mL}$ of $1.0\mathrm{ M}$ NaOH
in a calorimeter. The temperature rises from $21.0\degree\mathrm{C}$ to $27.5\degree\mathrm{C}$.
Calculate the enthalpy of neutralisation.

$$
m = 100.0\mathrm{ g} \mathrm{ (assuming density of water)}
$$

$$
q = mc\Delta T = 100.0 \times 4.18 \times 6.5 = 2717\mathrm{ J} = 2.717\mathrm{ kJ}
$$

$$
n(\mathrm{H}_2\mathrm{O}) = 0.050\mathrm{ mol} \mathrm{ (limited by the reagent volumes)}
$$

$$
\Delta H = -\frac{2.717}{0.050} = -54.3\mathrm{ kJ/mol}
$$

:::

### Bomb Calorimetry

Used for combustion reactions. The calorimeter constant $C$ accounts for the heat absorbed by the
calorimeter:

$$
q_{\mathrm{reaction}} = -(mc\Delta T + C\Delta T)
$$

---

## Hess's Law

### Statement

The total enthalpy change for a reaction is independent of the route taken. It depends only on the
initial and final states.

$$
\Delta H_{\mathrm{total}} = \Delta H_1 + \Delta H_2 + \cdots
$$

### Using Enthalpy Cycles

To find an unknown enthalpy change, construct a cycle with known enthalpy changes and apply Hess's
law.

### Using Standard Enthalpies of Formation

$$
\Delta H_r^\circ = \sum \Delta H_f^\circ(\mathrm{products}) - \sum \Delta H_f^\circ(\mathrm{reactants})
$$

:::info[Example]

Calculate $\Delta H_r^\circ$ for: CH$_4$(g) + 2O$_2$(g) $\to$ CO$_2$(g) + 2H$_2$O(l)

Given:

- $\Delta H_f^\circ$(CH$_4$) = $-74.8\mathrm{ kJ/mol}$
- $\Delta H_f^\circ$(CO$_2$) = $-393.5\mathrm{ kJ/mol}$
- $\Delta H_f^\circ$(H$_2$O) = $-285.8\mathrm{ kJ/mol}$

$$
\Delta H_r^\circ = [(-393.5) + 2(-285.8)] - [(-74.8) + 2(0)]
$$

$$
= (-393.5 - 571.6) - (-74.8) = -965.1 + 74.8 = -890.3\mathrm{ kJ/mol}
$$

:::

### Using Standard Enthalpies of Combustion

$$
\Delta H_r^\circ = \sum \Delta H_c^\circ(\mathrm{reactants}) - \sum \Delta H_c^\circ(\mathrm{products})
$$

Note the reversed order compared to formation enthalpies.

---

## Bond Enthalpies

### Definition

The **bond enthalpy** (bond dissociation energy) is the enthalpy change when one mole of covalent
bonds in the gas phase is broken.

### Average Bond Enthalpies

Since bond enthalpies vary slightly depending on the molecular environment, tables give average
values.

| Bond       | Average Enthalpy (kJ/mol) |
| ---------- | ------------------------- |
| C--C       | 347                       |
| C=C        | 612                       |
| C$\equiv$C | 838                       |
| C--H       | 413                       |
| C--O       | 358                       |
| C=O        | 743                       |
| O--H       | 463                       |
| O=O        | 495                       |
| H--H       | 436                       |
| N$\equiv$N | 945                       |
| N--H       | 391                       |

### Calculating Enthalpy Change from Bond Enthalpies

$$
\Delta H = \sum (\mathrm{bonds broken}) - \sum (\mathrm{bonds formed})
$$

Bonds broken (positive — energy absorbed) and bonds formed (negative — energy released).

:::info[Example]

Calculate the enthalpy change for: CH$_4$(g) + 2O$_2$(g) $\to$ CO$_2$(g) + 2H$_2$O(g)

**Bonds broken**: 4(C--H) + 2(O=O) $= 4(413) + 2(495) = 1652 + 990 = 2642\mathrm{ kJ/mol}$

**Bonds formed**: 2(C=O) + 4(O--H) $= 2(743) + 4(463) = 1486 + 1852 = 3338\mathrm{ kJ/mol}$

$$
\Delta H = 2642 - 3338 = -696\mathrm{ kJ/mol}
$$

:::

:::warning[Exam Tip]

Bond enthalpy calculations give approximate values because average bond enthalpies are used. Values
from Hess's law with formation data are more accurate. Bond enthalpy calculations only apply to
gases.

:::

---

## Born-Haber Cycles

### Purpose

Born-Haber cycles determine the **lattice energy** of an ionic compound using a thermodynamic cycle.

### Lattice Energy

The lattice energy $\Delta H_{\mathrm{latt}}$ is the enthalpy change when one mole of an ionic
compound is formed from its gaseous ions.

### Steps in a Born-Haber Cycle

For an ionic compound MX:

1. $\Delta H_f^\circ$: Standard enthalpy of formation of MX(s)
2. $\Delta H_{\mathrm{at}}(M)$: Enthalpy of atomisation of M(s) $\to$ M(g)
3. $\Delta H_{\mathrm{at}}(X_2)$: Enthalpy of atomisation of $\frac{1}{2}$X$_2$(g) $\to$ X(g)
4. IE$_1$, IE$_2$, ...: Ionisation energies of M
5. EA$_1$: Electron affinity of X (energy released when X gains an electron)
6. $\Delta H_{\mathrm{latt}}$: Lattice energy (exothermic)

### Applying Hess's Law

$$
\Delta H_f^\circ = \Delta H_{\mathrm{at}}(M) + \frac{1}{2}\Delta H_{\mathrm{at}}(X_2) + \mathrm{IE} + \mathrm{EA} + \Delta H_{\mathrm{latt}}
$$

:::info[Example]

Calculate the lattice energy of NaCl.

Given:

- $\Delta H_f^\circ$(NaCl) = $-411\mathrm{ kJ/mol}$
- $\Delta H_{\mathrm{at}}$(Na) = $+108\mathrm{ kJ/mol}$
- $\frac{1}{2}\Delta H_{\mathrm{at}}$(Cl$_2$) = $+122\mathrm{ kJ/mol}$
- IE$_1$(Na) = $+496\mathrm{ kJ/mol}$
- EA$_1$(Cl) = $-349\mathrm{ kJ/mol}$

$$
\Delta H_{\mathrm{latt}} = \Delta H_f^\circ - \Delta H_{\mathrm{at}}(\mathrm{Na}) - \frac{1}{2}\Delta H_{\mathrm{at}}(\mathrm{Cl}_2) - \mathrm{IE}_1 - \mathrm{EA}_1
$$

$$
= -411 - 108 - 122 - 496 - (-349) = -411 - 108 - 122 - 496 + 349 = -788\mathrm{ kJ/mol}
$$

:::

### Factors Affecting Lattice Energy

| Factor                | Effect                |
| --------------------- | --------------------- |
| Larger ionic charges  | Higher lattice energy |
| Smaller ionic radii   | Higher lattice energy |
| Higher charge density | Higher lattice energy |

---

## Entropy

### Definition

**Entropy** ($S$) is a measure of the disorder or randomness of a system.

### Factors Affecting Entropy

| Factor                       | Effect on Entropy  |
| ---------------------------- | ------------------ |
| More particles               | Higher entropy     |
| Higher temperature           | Higher entropy     |
| Gas $\to$ liquid $\to$ solid | Decreasing entropy |
| Dissolving solid in solvent  | Increasing entropy |

### Standard Entropy Change

$$
\Delta S^\circ = \sum S^\circ(\mathrm{products}) - \sum S^\circ(\mathrm{reactants})
$$

:::info[Example]

Calculate $\Delta S^\circ$ for: CaCO$_3$(s) $\to$ CaO(s) + CO$_2$(g)

Given: $S^\circ$(CaCO$_3$) = $92.9\mathrm{ J/(mol}\cdot\mathrm{K)}$, $S^\circ$(CaO) =
$39.7\mathrm{ J/(mol}\cdot\mathrm{K)}$, $S^\circ$(CO$_2$) = $213.7\mathrm{ J/(mol}\cdot\mathrm{K)}$.

$$
\Delta S^\circ = (39.7 + 213.7) - 92.9 = 253.4 - 92.9 = 160.5\mathrm{ J/(mol}\cdot\mathrm{K)}
$$

The positive $\Delta S$ is expected because a gas is produced from a solid.

:::

---

## Gibbs Free Energy

### Definition

Gibbs free energy combines enthalpy and entropy to predict spontaneity:

$$
\Delta G = \Delta H - T\Delta S
$$

where $T$ is the temperature in Kelvin.

### Spontaneity

| $\Delta G$       | Spontaneity                                |
| ---------------- | ------------------------------------------ |
| $\Delta G \lt 0$ | Spontaneous (thermodynamically favourable) |
| $\Delta G = 0$   | At equilibrium                             |
| $\Delta G \gt 0$ | Non-spontaneous                            |

### Standard Gibbs Free Energy Change

$$
\Delta G^\circ = \sum \Delta G_f^\circ(\mathrm{products}) - \sum \Delta G_f^\circ(\mathrm{reactants})
$$

### Relationship to Equilibrium Constant

$$
\Delta G^\circ = -RT\ln K
$$

where $R = 8.314\mathrm{ J/(mol}\cdot\mathrm{K)}$ and $K$ is the equilibrium constant.

### Temperature Dependence

A reaction that is non-spontaneous at low temperature may become spontaneous at high temperature if
$\Delta S \gt 0$ (and vice versa).

| $\Delta H$ | $\Delta S$ | Spontaneous when   |
| ---------- | ---------- | ------------------ |
| Negative   | Positive   | Always spontaneous |
| Negative   | Negative   | Low temperature    |
| Positive   | Positive   | High temperature   |
| Positive   | Negative   | Never spontaneous  |

:::info[Example]

For the reaction: CaCO$_3$(s) $\to$ CaO(s) + CO$_2$(g)

$\Delta H = +178\mathrm{ kJ/mol}$, $\Delta S = +160.5\mathrm{ J/(mol}\cdot\mathrm{K)}$

Find the temperature at which the reaction becomes spontaneous.

$$
\Delta G = 0 \mathrm{ when } T = \frac{\Delta H}{\Delta S} = \frac{178000}{160.5} = 1109\mathrm{ K}
$$

The reaction is spontaneous above $1109\mathrm{ K}$.

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Using bond enthalpies, calculate $\Delta H$ for: H$_2$(g) + Cl$_2$(g) $\to$ 2HCl(g)

Bonds broken: H--H ($436$) + Cl--Cl ($242$) $= 678\mathrm{ kJ/mol}$

Bonds formed: $2 \times$ H--Cl ($431$) $= 862\mathrm{ kJ/mol}$

$$
\Delta H = 678 - 862 = -184\mathrm{ kJ/mol}
$$

### Question 2 (Paper 2 style)

$25.0\mathrm{ cm}^3$ of $1.0\mathrm{ M}$ HCl is added to $25.0\mathrm{ cm}^3$ of $1.0\mathrm{ M}$
NaOH in a polystyrene cup. The temperature increases from $20.0\degree\mathrm{C}$ to
$26.5\degree\mathrm{C}$.

**(a)** Calculate the enthalpy change of neutralisation per mole of water formed.

$$
q = 50.0 \times 4.18 \times 6.5 = 1359\mathrm{ J}
$$

$$
n = 0.025 \times 1.0 = 0.025\mathrm{ mol}
$$

$$
\Delta H = -\frac{1.359}{0.025} = -54.4\mathrm{ kJ/mol}
$$

**(b)** Explain why the experimental value differs from the theoretical value of
$-57.1\mathrm{ kJ/mol}$.

Heat loss to the surroundings, calorimeter absorbs some heat, incomplete reaction, or the assumption
that the solution has the same properties as pure water.

### Question 3 (Paper 2 style)

Given the following data, calculate the lattice energy of MgO:

- $\Delta H_f^\circ$(MgO) = $-602\mathrm{ kJ/mol}$
- $\Delta H_{\mathrm{at}}$(Mg) = $+148\mathrm{ kJ/mol}$
- $\frac{1}{2}\Delta H_{\mathrm{at}}$(O$_2$) = $+249\mathrm{ kJ/mol}$
- IE$_1$(Mg) + IE$_2$(Mg) = $+2188\mathrm{ kJ/mol}$
- EA$_1$(O) + EA$_2$(O) = $+603\mathrm{ kJ/mol}$

$$
\Delta H_{\mathrm{latt}} = -602 - 148 - 249 - 2188 - 603 = -3790\mathrm{ kJ/mol}
$$

### Question 4 (Paper 1 style)

For which reaction is $\Delta S$ positive?

A. 2H$_2$(g) + O$_2$(g) $\to$ 2H$_2$O(g) B. NH$_4$Cl(s) $\to$ NH$_3$(g) + HCl(g) C. CaO(s) +
H$_2$O(l) $\to$ Ca(OH)$_2$(s) D. N$_2$(g) + 3H$_2$(g) $\to$ 2NH$_3$(g)

**Answer: B** — a solid produces two gases, increasing disorder.

---

## Summary

| Formula                 | Expression                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------- |
| Heat energy             | $q = mc\Delta T$                                                                        |
| Enthalpy from formation | $\Delta H_r = \sum \Delta H_f(\mathrm{products}) - \sum \Delta H_f(\mathrm{reactants})$ |
| From bond enthalpies    | $\Delta H = \sum(\mathrm{bonds broken}) - \sum(\mathrm{bonds formed})$                  |
| Entropy change          | $\Delta S = \sum S(\mathrm{products}) - \sum S(\mathrm{reactants})$                     |
| Gibbs free energy       | $\Delta G = \Delta H - T\Delta S$                                                       |
| Equilibrium relation    | $\Delta G^\circ = -RT\ln K$                                                             |

:::tip[Exam Strategy]

For Hess's law questions, draw the energy cycle clearly. For calorimetry, always account for the
total mass of the solution. For Gibbs free energy, pay attention to units — $\Delta H$ is typically
in kJ/mol while $\Delta S$ is in J/(mol$\cdot$K), so convert one before combining.

:::

---

## Thermochemistry Extended

### Enthalpy of Solution

The enthalpy change when one mole of solute dissolves in a solvent to form an infinitely dilute
solution:

$$
\Delta H_{\mathrm{sol}} = \Delta H_{\mathrm{lattice}} + \Delta H_{\mathrm{hydration}}
$$

- If $\Delta H_{\mathrm{sol}} \gt 0$: endothermic (solution cools, e.g., NH$_4$NO$_3$).
- If $\Delta H_{\mathrm{sol}} \lt 0$: exothermic (solution warms, e.g., NaOH).

### Enthalpy of Hydration

The enthalpy change when gaseous ions are surrounded by water molecules:

$$
\Delta H_{\mathrm{hyd}} = \Delta H_{\mathrm{at}} + \Delta H_{\mathrm{EA}} + \mathrm{other terms}
$$

### Trends in Lattice Energy

| Trend                 | Effect on Lattice Energy |
| --------------------- | ------------------------ |
| Higher ionic charge   | Increases                |
| Smaller ionic radius  | Increases                |
| Higher charge density | Increases                |

| Comparison       | Higher Lattice Energy                  |
| ---------------- | -------------------------------------- |
| NaCl vs NaBr     | NaCl (Br$^-$ is larger)                |
| NaCl vs MgCl$_2$ | MgCl$_2$ (Mg$^{2+}$ has higher charge) |
| NaCl vs Na$_2$O  | Na$_2$O (O$^{2-}$ has higher charge)   |

### Using Born-Haber Cycles to Compare Compounds

:::info[Example]

Explain why the lattice energy of MgO ($-3791\mathrm{ kJ/mol}$) is much more negative than that of
NaCl ($-788\mathrm{ kJ/mol}$).

MgO has Mg$^{2+}$ and O$^{2-}$ ions (both doubly charged), while NaCl has Na$^+$ and Cl$^-$ ions
(singly charged). The electrostatic attraction between ions is proportional to the product of their
charges, so the doubly charged ions in MgO have much stronger attraction (four times stronger by
Coulomb's law). Additionally, Mg$^{2+}$ is smaller than Na$^+$, further increasing lattice energy.

:::

---

## Entropy: Extended Analysis

### Predicting Entropy Changes

| Process                         | $\Delta S$       | Reason                |
| ------------------------------- | ---------------- | --------------------- |
| Solid $\to$ liquid              | Positive         | More disorder         |
| Liquid $\to$ gas                | Positive         | Much more disorder    |
| Dissolving ionic solid in water | Usually positive | Ions become dispersed |
| Gas $\to$ solid                 | Negative         | Much less disorder    |
| Decreasing volume of gas        | Negative         | Fewer microstates     |
| Increasing temperature          | Positive         | More molecular motion |

### Calculating $\Delta S$ for Reactions

:::info[Example]

Calculate $\Delta S^\circ$ for: 2H$_2$(g) + O$_2$(g) $\to$ 2H$_2$O(l)

$S^\circ$(H$_2$) $= 131\mathrm{ J/(mol}\cdot\mathrm{K)}$, $S^\circ$(O$_2$)
$= 205\mathrm{ J/(mol}\cdot\mathrm{K)}$, $S^\circ$(H$_2$O) $= 70\mathrm{ J/(mol}\cdot\mathrm{K)}$.

$$
\Delta S^\circ = 2(70) - [2(131) + 205] = 140 - 467 = -327\mathrm{ J/(mol}\cdot\mathrm{K)}
$$

The large negative $\Delta S$ is expected: 3 moles of gas produce 2 moles of liquid.

:::

---

## Gibbs Free Energy: Extended

### Calculating $\Delta G$ from $\Delta G_f^\circ$ Values

$$
\Delta G_r^\circ = \sum \Delta G_f^\circ(\mathrm{products}) - \sum \Delta G_f^\circ(\mathrm{reactants})
$$

:::info[Example]

Calculate $\Delta G^\circ$ for: C(s) + CO$_2$(g) $\to$ 2CO(g) at $298\mathrm{ K}$.

Given: $\Delta G_f^\circ$(CO$_2$) $= -394\mathrm{ kJ/mol}$, $\Delta G_f^\circ$(CO)
$= -137\mathrm{ kJ/mol}$.

$$
\Delta G^\circ = 2(-137) - (-394) = -274 + 394 = +120\mathrm{ kJ/mol}
$$

The reaction is not spontaneous at $298\mathrm{ K}$ (but is at higher temperatures since
$\Delta S \gt 0$ for this reaction).

:::

### Using $\Delta G$ to Predict the Equilibrium Constant

$$
K = e^{-\Delta G^\circ/RT}
$$

:::info[Example]

For a reaction with $\Delta G^\circ = -5.4\mathrm{ kJ/mol}$ at $298\mathrm{ K}$:

$$
K = e^{-(-5400)/(8.314 \times 298)} = e^{2.18} = 8.85
$$

Since $K \gt 1$, products are favoured at equilibrium.

:::

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

The enthalpy of combustion of methanol is $-726\mathrm{ kJ/mol}$. A spirit burner containing
methanol is used to heat $200\mathrm{ g}$ of water from $20.0\degree\mathrm{C}$ to
$65.0\degree\mathrm{C}$. The mass of methanol burned is $1.50\mathrm{ g}$.

**(a)** Calculate the experimental enthalpy of combustion.

$$
q = 200 \times 4.18 \times 45 = 37620\mathrm{ J} = 37.62\mathrm{ kJ}
$$

$$
n(\mathrm{CH}_3\mathrm{OH}) = \frac{1.50}{32.04} = 0.0468\mathrm{ mol}
$$

$$
\Delta H_c = -\frac{37.62}{0.0468} = -804\mathrm{ kJ/mol}
$$

**(b)** Calculate the percentage error compared to the literature value.

$$
\mathrm{Percentage error} = \frac{|-804 - (-726)|}{726} \times 100\% = \frac{78}{726} \times 100\% = 10.7\%
$$

**(c)** Explain two sources of error.

Heat loss to the surroundings; incomplete combustion of methanol; not all heat transferred to the
water; the calorimeter absorbs some heat.

### Question 6 (Paper 1 style)

For the reaction: N$_2$O$_4$(g) $\rightleftharpoons$ 2NO$_2$(g), $\Delta H = +57\mathrm{ kJ/mol}$
and $\Delta S = +176\mathrm{ J/(mol}\cdot\mathrm{K)}$.

At what temperature does the reaction become spontaneous?

$$
\Delta G = 0 \mathrm{ when } T = \frac{\Delta H}{\Delta S} = \frac{57000}{176} = 324\mathrm{ K}
$$

The reaction is spontaneous above $324\mathrm{ K}$ ($51\degree\mathrm{C}$).

### Question 7 (Paper 2 style)

Using the data below, calculate the lattice energy of CaF$_2$:

- $\Delta H_f^\circ$(CaF$_2$) $= -1220\mathrm{ kJ/mol}$
- $\Delta H_{\mathrm{at}}$(Ca) $= +178\mathrm{ kJ/mol}$
- $\frac{1}{2}\Delta H_{\mathrm{at}}$(F$_2$) $= +79\mathrm{ kJ/mol}$ (per mole of F atoms)
- IE$_1$(Ca) + IE$_2$(Ca) $= +1735\mathrm{ kJ/mol}$
- EA$_1$(F) $= -328\mathrm{ kJ/mol}$ (per mole of F atoms)

$$
\Delta H_f^\circ = \Delta H_{\mathrm{at}}(\mathrm{Ca}) + 2\left[\frac{1}{2}\Delta H_{\mathrm{at}}(\mathrm{F}_2) + \mathrm{EA}(\mathrm{F})\right] + \mathrm{IE}_1 + \mathrm{IE}_2 + \Delta H_{\mathrm{latt}}
$$

$$
-1220 = 178 + 2(79 - 328) + 1735 + \Delta H_{\mathrm{latt}}
$$

$$
-1220 = 178 + 2(-249) + 1735 + \Delta H_{\mathrm{latt}}
$$

$$
-1220 = 178 - 498 + 1735 + \Delta H_{\mathrm{latt}} = 1415 + \Delta H_{\mathrm{latt}}
$$

$$
\Delta H_{\mathrm{latt}} = -1220 - 1415 = -2635\mathrm{ kJ/mol}
$$

---

## Thermochemistry: Extended Topics

### Enthalpy of Atomisation of Elements

The enthalpy of atomisation is the enthalpy change to form one mole of gaseous atoms from the
element in its standard state under standard conditions.

| Element      | Standard State | $\Delta H_{\mathrm{at}}$ (kJ/mol) |
| ------------ | -------------- | --------------------------------- |
| Na           | Solid          | $+108$                            |
| Mg           | Solid          | $+148$                            |
| Al           | Solid          | $+330$                            |
| Cl$_2$       | Gas            | $+122$                            |
| H$_2$        | Gas            | $+218$                            |
| C (graphite) | Solid          | $+717$                            |
| O$_2$        | Gas            | $+249$                            |

### Electron Affinity Trends

Electron affinity is the enthalpy change when one mole of gaseous atoms gains one electron.

| Trend                           | Effect                          |
| ------------------------------- | ------------------------------- |
| Across a period (left to right) | Generally becomes more negative |
| Down a group                    | Generally becomes less negative |
| Noble gases                     | Positive (unfavourable)         |
| Group 17                        | Most negative (most favourable) |

### Ionisation Energy Trends

| Trend           | Effect                                               |
| --------------- | ---------------------------------------------------- |
| Across a period | Increases (nuclear charge increases, same shielding) |
| Down a group    | Decreases (atomic radius increases)                  |
| Large jumps     | Occur when removing electron from new shell          |

### Successive Ionisation Energies

Each successive ionisation energy is larger than the previous one. Large jumps indicate removal from
a new shell.

:::info[Example]

The first four ionisation energies of aluminium are (in kJ/mol): 578, 1817, 2745, 11578.

The large jump between the 3rd and 4th IE indicates that the 4th electron is being removed from a
new (inner) shell. This confirms Al has 3 valence electrons.

:::

### Calculating Enthalpy Changes from Calorimetry Data

When using a calorimeter, account for the heat absorbed by the calorimeter itself:

$$
q_{\mathrm{reaction}} = -(m_{\mathrm{solution}} c_{\mathrm{solution}} \Delta T + C_{\mathrm{calorimeter}} \Delta T)
$$

:::info[Example]

$50\mathrm{ cm}^3$ of $1.0\mathrm{ M}$ HCl and $50\mathrm{ cm}^3$ of $1.0\mathrm{ M}$ NaOH are mixed
in a calorimeter with heat capacity $15\mathrm{ J/K}$. The temperature rises from
$20.0\degree\mathrm{C}$ to $26.8\degree\mathrm{C}$.

$$
q_{\mathrm{total}} = (100)(4.18)(6.8) + 15(6.8) = 2842.4 + 102 = 2944.4\mathrm{ J}
$$

$$
n(\mathrm{H}_2\mathrm{O}) = 0.050\mathrm{ mol}
$$

$$
\Delta H = -\frac{2944.4}{0.050} = -58888\mathrm{ J/mol} = -58.9\mathrm{ kJ/mol}
$$

:::

---

## Additional IB Exam-Style Questions

### Question 8 (Paper 1 style)

Which process has a positive entropy change?

A. $\mathrm{Ca}^{2+}(aq) + \mathrm{CO}_3^{2-}(aq) \to \mathrm{CaCO}_3(s)$ B.
$\mathrm{NH}_4\mathrm{Cl}(s) \to \mathrm{NH}_3(g) + \mathrm{HCl}(g)$ C.
$2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$ D.
$\mathrm{NaOH}(aq) + \mathrm{HCl}(aq) \to \mathrm{NaCl}(aq) + \mathrm{H}_2\mathrm{O}(l)$

**Answer: B.** A solid produces two gases, increasing the number of particles and the disorder.

### Question 9 (Paper 2 style)

Using the following data, calculate the enthalpy of reaction for:

$\mathrm{CH}_4(g) + 2\mathrm{O}_2(g) \to \mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(l)$

Given bond enthalpies (kJ/mol): C--H $= 413$, O=O $= 495$, C=O $= 743$, O--H $= 463$.

**Bonds broken**:
$4(\mathrm{C--H}) + 2(\mathrm{O=O}) = 4(413) + 2(495) = 1652 + 990 = 2642\mathrm{ kJ/mol}$

**Bonds formed**:
$2(\mathrm{C=O}) + 4(\mathrm{O--H}) = 2(743) + 4(463) = 1486 + 1852 = 3338\mathrm{ kJ/mol}$

$$
\Delta H = 2642 - 3338 = -696\mathrm{ kJ/mol}
$$

### Question 10 (Paper 2 style)

For the reaction: $\mathrm{N}_2\mathrm{O}(g) \to \mathrm{N}_2(g) + \mathrm{O}_2(g)$,
$\Delta H = -163\mathrm{ kJ/mol}$ and $\Delta S = +149\mathrm{ J/(mol}\cdot\mathrm{K)}$.

**(a)** Calculate $\Delta G^\circ$ at $298\mathrm{ K}$ and state whether the reaction is
spontaneous.

$$
\Delta G^\circ = -163000 - 298 \times 149 = -163000 - 44402 = -207402\mathrm{ J/mol} = -207.4\mathrm{ kJ/mol}
$$

Since $\Delta G^\circ \lt 0$, the reaction is spontaneous at $298\mathrm{ K}$.

**(b)** At what temperature does $\Delta G^\circ$ become positive?

$$
\Delta G^\circ = 0 \mathrm{ when } T = \frac{\Delta H}{\Delta S} = \frac{-163000}{149} = -1094\mathrm{ K}
$$

Since both $\Delta H$ and $\Delta S$ are negative, the reaction is spontaneous at low temperatures.
It becomes non-spontaneous above $1094\mathrm{ K}$. Since the calculated "temperature" is negative,
$\Delta G^\circ$ is negative at all positive temperatures — the reaction is always spontaneous.

## Practice Problems

<details>
<summary>Question 1: Calorimetry Calculation</summary>

$50.0\mathrm{ cm}^3$ of $1.0\mathrm{ M}$ $\mathrm{HCl}$ is mixed with $50.0\mathrm{ cm}^3$ of
$1.0\mathrm{ M}$ $\mathrm{NaOH}$ in a calorimeter. The temperature increases from
$22.0\degree\mathrm{C}$ to $28.8\degree\mathrm{C}$. Calculate the enthalpy of neutralisation per
mole of water formed.

</details>

<details>
<summary>Answer</summary>

$$q = mc\Delta T = 100.0 \times 4.18 \times 6.8 = 2842\mathrm{ J} = 2.842\mathrm{ kJ}$$

$$n(\mathrm{H}_2\mathrm{O}) = 0.0500 \times 1.0 = 0.0500\mathrm{ mol}$$

$$\Delta H = -\frac{2.842}{0.0500} = -56.8\mathrm{ kJ/mol}$$

</details>

<details>
<summary>Question 2: Hess's Law with Formation Enthalpies</summary>

Using standard enthalpies of formation, calculate $\Delta H_r^\circ$ for the combustion of propane:

$$\mathrm{C}_3\mathrm{H}_8(g) + 5\mathrm{O}_2(g) \to 3\mathrm{CO}_2(g) + 4\mathrm{H}_2\mathrm{O}(l)$$

Given: $\Delta H_f^\circ(\mathrm{C}_3\mathrm{H}_8) = -104\mathrm{ kJ/mol}$,
$\Delta H_f^\circ(\mathrm{CO}_2) = -394\mathrm{ kJ/mol}$,
$\Delta H_f^\circ(\mathrm{H}_2\mathrm{O}) = -286\mathrm{ kJ/mol}$.

</details>

<details>
<summary>Answer</summary>

$$\Delta H_r^\circ = \sum \Delta H_f^\circ(\mathrm{products}) - \sum \Delta H_f^\circ(\mathrm{reactants})$$

$$= [3(-394) + 4(-286)] - [(-104) + 5(0)]$$

$$= (-1182 - 1144) - (-104) = -2326 + 104 = -2222\mathrm{ kJ/mol}$$

</details>

<details>
<summary>Question 3: Bond Enthalpy Calculation</summary>

Using average bond enthalpies, calculate $\Delta H$ for the reaction:

$$\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \to 2\mathrm{NH}_3(g)$$

Given: $\mathrm{N} \equiv \mathrm{N} = 945\mathrm{ kJ/mol}$,
$\mathrm{H}-\mathrm{H} = 436\mathrm{ kJ/mol}$, $\mathrm{N}-\mathrm{H} = 391\mathrm{ kJ/mol}$.

</details>

<details>
<summary>Answer</summary>

Bonds broken:
$1(\mathrm{N} \equiv \mathrm{N}) + 3(\mathrm{H}-\mathrm{H}) = 945 + 3(436) = 945 + 1308 = 2253\mathrm{ kJ/mol}$

Bonds formed: $6(\mathrm{N}-\mathrm{H}) = 6 \times 391 = 2346\mathrm{ kJ/mol}$

$$\Delta H = 2253 - 2346 = -93\mathrm{ kJ/mol}$$

The actual value is $-92\mathrm{ kJ/mol}$, so the bond enthalpy approximation is close.

</details>

<details>
<summary>Question 4: Gibbs Free Energy and Spontaneity</summary>

For the decomposition of calcium carbonate:

$$\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)$$

$\Delta H = +178\mathrm{ kJ/mol}$, $\Delta S = +161\mathrm{ J/(mol \cdot K)}$.

(a) Calculate $\Delta G$ at $298\mathrm{ K}$ and state whether the reaction is spontaneous.

(b) Calculate the minimum temperature at which the reaction becomes spontaneous.

</details>

<details>
<summary>Answer</summary>

(a)
$$\Delta G = \Delta H - T\Delta S = 178000 - 298 \times 161 = 178000 - 47978 = +130\,022\mathrm{ J/mol} = +130\mathrm{ kJ/mol}$$

Since $\Delta G \gt 0$, the reaction is **not spontaneous** at $298\mathrm{ K}$.

(b) At $\Delta G = 0$:

$$T = \frac{\Delta H}{\Delta S} = \frac{178000}{161} = 1106\mathrm{ K}$$

The reaction becomes spontaneous above $1106\mathrm{ K}$ (approximately $833\degree\mathrm{C}$).

</details>

<details>
<summary>Question 5: Entropy Change Prediction</summary>

Predict the sign of $\Delta S$ for each of the following processes and explain:

(a) $\mathrm{NH}_4\mathrm{Cl}(s) \to \mathrm{NH}_3(g) + \mathrm{HCl}(g)$

(b) $2\mathrm{NO}(g) + \mathrm{O}_2(g) \to 2\mathrm{NO}_2(g)$

(c) $\mathrm{NaCl}(s) \to \mathrm{Na}^+(aq) + \mathrm{Cl}^-(aq)$

</details>

<details>
<summary>Answer</summary>

(a) **Positive** $\Delta S$: One mole of solid produces two moles of gas, significantly increasing
disorder.

(b) **Negative** $\Delta S$: Three moles of gas produce two moles of gas, decreasing the number of
gaseous particles and thus disorder.

(c) **Positive** $\Delta S$: An ordered solid lattice breaks apart into freely moving hydrated ions
in solution, increasing disorder.

</details>
