---
title: Thermodynamics
date: 2026-04-14
tags:
  - Chemistry
  - AP
categories:
  - Chemistry
slug: thermodynamics
---

## The First Law of Thermodynamics (CED Unit 6)

Energy cannot be created or destroyed. The change in internal energy of a system is:

$$
\Delta U = q + w
$$

where $q$ is heat and $w$ is work. The first law is a statement of energy conservation: any change
in the internal energy of a system must be accounted for by heat flow and work done.

### Sign Convention (Chemistry)

- $q \gt 0$: heat absorbed by the system (endothermic)
- $q \lt 0$: heat released by the system (exothermic)
- $w \gt 0$: work done on the system (compression)
- $w \lt 0$: work done by the system (expansion)

This sign convention is used by chemists (IUPAC convention). Some physics texts use the opposite
sign for work.

### Pressure-Volume Work

For a gas expanding/contracting against constant external pressure:

$$
w = -P\Delta V
$$

The negative sign reflects the chemistry convention: when a gas expands ($\Delta V \gt 0$), it does
work on the surroundings ($w \lt 0$).

### Work at Constant Pressure: Enthalpy

At constant pressure, $w = -P\Delta V$, so:

$$
\Delta U = q_P - P\Delta V \implies q_P = \Delta U + P\Delta V = \Delta H
$$

**Enthalpy** ($H$) is defined as $H = U + PV$. At constant pressure, $\Delta H = q_P$. Enthalpy is
convenient because most chemical reactions occur at constant (atmospheric) pressure.

### Derivation: Why $\Delta H = q_P$

Starting from the first law at constant pressure:

$$\Delta U = q_P + w = q_P - P\Delta V$$

$$q_P = \Delta U + P\Delta V$$

$$q_P = (U_2 - U_1) + P(V_2 - V_1) = (U_2 + PV_2) - (U_1 + PV_1) = H_2 - H_1 = \Delta H$$

This derivation shows that enthalpy change equals heat at constant pressure because the $P\Delta V$
work term is absorbed into the enthalpy definition.

## Enthalpy of Reaction (CED Unit 6)

### Standard Enthalpy of Formation ($\Delta H_f^\circ$)

The enthalpy change when 1 mole of a compound forms from its elements in their standard states.

$$
\Delta H_{\mathrm{rxn}}^\circ = \sum n\Delta H_f^\circ(\mathrm{products}) - \sum m\Delta H_f^\circ(\mathrm{reactants})
$$

Standard conditions: $1 \mathrm{ atm}$, $298 \mathrm{ K}$ ($25^\circ\mathrm{C}$), pure substances in
their most stable form. By convention, $\Delta H_f^\circ = 0$ for elements in their standard state.

The standard state of an element is its most stable form at $1 \mathrm{ atm}$ and
$25^\circ\mathrm{C}$: e.g., $\mathrm{O}_2(g)$, not $\mathrm{O}_3(g)$ or $\mathrm{O}_2(l)$;
$\mathrm{C(graphite)}$, not $\mathrm{C(diamond)}$.

### Hess's Law

The total enthalpy change for a reaction is the same regardless of the pathway. If a reaction can be
written as the sum of several steps:

$$
\Delta H_{\mathrm{total}} = \Delta H_1 + \Delta H_2 + \cdots
$$

Hess's law is a direct consequence of enthalpy being a state function: it depends only on the
initial and final states, not on the path between them. This allows us to calculate enthalpy changes
that cannot be measured directly.

### Worked Example: Hess's Law

Calculate $\Delta H^\circ$ for the reaction
$\mathrm{C}(\mathrm{graphite}) + 2\mathrm{H}_2(g) \to \mathrm{CH}_4(g)$ using the following data:

$\mathrm{C}(\mathrm{graphite}) + \mathrm{O}_2(g) \to \mathrm{CO}_2(g)$,
$\Delta H_1 = -393.5 \mathrm{ kJ/mol}$

$\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)$,
$\Delta H_2 = -285.8 \mathrm{ kJ/mol}$

$\mathrm{CH}_4(g) + 2\mathrm{O}_2(g) \to \mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(l)$,
$\Delta H_3 = -890.3 \mathrm{ kJ/mol}$

Using Hess's law: $\Delta H_f(\mathrm{CH}_4) = \Delta H_1 + 2\Delta H_2 - \Delta H_3$

$$= -393.5 + 2(-285.8) - (-890.3) = -393.5 - 571.6 + 890.3 = -74.8 \mathrm{ kJ/mol}$$

### Worked Example: Hess's Law with Multiple Steps

Calculate $\Delta H^\circ$ for
$\mathrm{C}(s) + 2\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{CH}_3\mathrm{OH}(l)$.

Given: $\mathrm{C}(s) + \mathrm{O}_2(g) \to \mathrm{CO}_2(g)$, $\Delta H = -393.5 \mathrm{ kJ/mol}$
$\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)$,
$\Delta H = -285.8 \mathrm{ kJ/mol}$
$\mathrm{CH}_3\mathrm{OH}(l) + \frac{3}{2}\mathrm{O}_2(g) \to \mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(l)$,
$\Delta H = -726.4 \mathrm{ kJ/mol}$

Target:
$\mathrm{C}(s) + 2\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{CH}_3\mathrm{OH}(l)$

Reverse equation 3 and add equations 1 and 2:

$\mathrm{C}(s) + \mathrm{O}_2(g) \to \mathrm{CO}_2(g)$, $\Delta H = -393.5$

$2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$, $\Delta H = 2(-285.8) = -571.6$

$\mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{CH}_3\mathrm{OH}(l) + \frac{3}{2}\mathrm{O}_2(g)$,
$\Delta H = +726.4$

Sum: $\Delta H = -393.5 - 571.6 + 726.4 = -238.7 \mathrm{ kJ/mol}$

### Worked Example: Bond Enthalpy Calculation

Estimate $\Delta H$ for $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \to 2\mathrm{NH}_3(g)$ using bond
enthalpies.

Bonds broken:
$1 \mathrm{ N}\equiv\mathrm{N} (945) + 3 \mathrm{ H-H} (436) = 945 + 1308 = 2253 \mathrm{ kJ/mol}$

Bonds formed: $6 \mathrm{ N-H} (391) = 2346 \mathrm{ kJ/mol}$

$$\Delta H \approx 2253 - 2346 = -93 \mathrm{ kJ/mol}$$

(The exact value is $-92.2 \mathrm{ kJ/mol}$, showing that bond enthalpies give a good
approximation.)

:::info[Example]

Calculate $\Delta H^\circ$ for the combustion of propane:

$$
\mathrm{C}_3\mathrm{H}_8(g) + 5\mathrm{O}_2(g) \to 3\mathrm{CO}_2(g) + 4\mathrm{H}_2\mathrm{O}(l)
$$

Using standard enthalpies of formation (kJ/mol):

| Substance                     | $\Delta H_f^\circ$ (kJ/mol) |
| ----------------------------- | --------------------------- |
| $\mathrm{C}_3\mathrm{H}_8(g)$ | -103.8                      |
| $\mathrm{O}_2(g)$             | 0                           |
| $\mathrm{CO}_2(g)$            | -393.5                      |
| $\mathrm{H}_2\mathrm{O}(l)$   | -285.8                      |

$$
\Delta H^\circ = [3(-393.5) + 4(-285.8)] - [-103.8 + 5(0)]
$$

$$
= [-1180.5 - 1143.2] - [-103.8] = -2323.7 + 103.8 = -2219.9 \mathrm{ kJ}
$$

:::

### Bond Enthalpies

The average enthalpy change when a bond is broken in the gas phase:

$$
\Delta H \approx \sum D(\mathrm{bonds broken}) - \sum D(\mathrm{bonds formed})
$$

This is an approximation because bond energies are average values that depend on the molecular
environment. The approximation is most accurate when all species are in the gas phase.

:::info[Example]

Estimate $\Delta H$ for
$\mathrm{CH}_4(g) + 2\mathrm{O}_2(g) \to \mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(g)$ using bond
enthalpies.

Bonds broken: $4 \mathrm{ C--H} (413) + 2 \mathrm{ O=O} (495) = 1648 + 990 = 2642 \mathrm{ kJ/mol}$

Bonds formed: $2 \mathrm{ C=O} (799) + 4 \mathrm{ O--H} (463) = 1598 + 1852 = 3450 \mathrm{ kJ/mol}$

$$
\Delta H \approx 2642 - 3450 = -808 \mathrm{ kJ/mol}
$$

(The exact value using formation enthalpies is about $-802 \mathrm{ kJ/mol}$ for the gaseous
products.)

:::

## Calorimetry

### Specific Heat Capacity

$$
q = mc\Delta T
$$

where $m$ is mass, $c$ is specific heat capacity (J/g$\cdot$K), and $\Delta T$ is the temperature
change.

The specific heat capacity of water is $4.18 \mathrm{ J/g}\cdot\mathrm{K}$. Water has an unusually
high specific heat capacity because hydrogen bonds must be broken to increase its temperature.

### Coffee-Cup Calorimetry (Constant Pressure)

Measures $\Delta H$ of reactions in solution. The calorimeter is open to the atmosphere, so $P$ is
constant.

$$
q_{\mathrm{rxn}} = -q_{\mathrm{solution}} = -(m_{\mathrm{solution}} \cdot c_{\mathrm{solution}} \cdot \Delta T)
$$

The negative sign ensures that if the solution temperature increases ($\Delta T \gt 0$), the
reaction is exothermic ($q_{\mathrm{rxn}} \lt 0$).

### Bomb Calorimetry (Constant Volume)

Measures $\Delta U$ of combustion reactions. The calorimeter has a fixed volume.

$$
q_{\mathrm{rxn}} = -C_{\mathrm{calorimeter}} \cdot \Delta T
$$

where $C_{\mathrm{calorimeter}}$ is the heat capacity of the entire calorimeter (including the water
bomb, stirrer, etc.).

### Derivation: Converting $\Delta U$ to $\Delta H$ in Bomb Calorimetry

For a bomb calorimetry experiment:

$$\Delta U = q_V = -C_{\mathrm{cal}} \cdot \Delta T$$

To convert to $\Delta H$:

$$\Delta H = \Delta U + \Delta n_g RT$$

where $\Delta n_g$ is the change in moles of gas. For combustion reactions, $\Delta n_g$ is often
negative (fewer gas moles of products than reactants), making $\Delta H$ slightly more negative than
$\Delta U$.

### Worked Example: Bomb Calorimetry with $\Delta H$ Conversion

A bomb calorimeter with $C_{\mathrm{cal}} = 894 \mathrm{ J/K}$ is used to determine the enthalpy of
combustion of glucose ($\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6$). Burning $1.00 \mathrm{ g}$ raises
the temperature by $3.02 \mathrm{ K}$. Calculate $\Delta U$ and $\Delta H$ per mole.

Molar mass of glucose: $180.16 \mathrm{ g/mol}$.

$$\Delta U = -894 \times 3.02 = -2700 \mathrm{ J} = -2.70 \mathrm{ kJ per gram}$$

$$\Delta U_{\mathrm{per mol}} = -2.70 \times 180.16 = -486 \mathrm{ kJ/mol}$$

For
$\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6(s) + 6\mathrm{O}_2(g) \to 6\mathrm{CO}_2(g) + 6\mathrm{H}_2\mathrm{O}(l)$:

$\Delta n_g = 6 - 6 = 0$ (no net change in gas moles).

$$\Delta H = \Delta U + \Delta n_g RT = -486 + 0 = -486 \mathrm{ kJ/mol}$$

(Literature value: $-2803 \mathrm{ kJ/mol}$. The difference is due to the calorimeter containing a
solution rather than pure water.)

:::info[Example]

When $50.0 \mathrm{ mL}$ of $1.00 \mathrm{ M } \mathrm{HCl}$ is mixed with $50.0 \mathrm{ mL}$ of
$1.00 \mathrm{ M }$ $\mathrm{NaOH}$ in a coffee-cup calorimeter, the temperature rises from
$25.0^\circ\mathrm{C}$ to $31.6^\circ\mathrm{C}$. Calculate $\Delta H$ per mole of
$\mathrm{H}_2\mathrm{O}$ formed.

Total mass: $50.0 + 50.0 = 100.0 \mathrm{ g}$ (assume density = $1.00 \mathrm{ g/mL}$,
$c = 4.18 \mathrm{ J/g}\cdot\mathrm{K}$).

$$
q_{\mathrm{solution}} = (100.0)(4.18)(31.6 - 25.0) = 100.0 \times 4.18 \times 6.6 = 2759 \mathrm{ J} = 2.76 \mathrm{ kJ}
$$

$$
q_{\mathrm{rxn}} = -2.76 \mathrm{ kJ}
$$

Moles of $\mathrm{H}_2\mathrm{O}$ formed: $1.00 \times 0.0500 = 0.0500 \mathrm{ mol}$.

$$
\Delta H = \frac{-2.76}{0.0500} = -55.2 \mathrm{ kJ/mol}
$$

:::

## Entropy and the Second Law (CED Unit 9)

### Entropy ($S$)

Entropy is a measure of disorder or randomness at the molecular level. More precisely, it is a
measure of the number of microstates available to a system.

The second law states that the entropy of the universe increases for any spontaneous process:

$$
\Delta S_{\mathrm{universe}} = \Delta S_{\mathrm{system}} + \Delta S_{\mathrm{surroundings}} \gt 0
$$

### Factors Affecting Entropy

- Phase changes: $S_{\mathrm{gas}} \gg S_{\mathrm{liquid}} \gt S_{\mathrm{solid}}$ (gases have many
  more microstates because molecules are free to move in three dimensions)
- Temperature: higher $T$ means higher $S$ (more energy is distributed among more microstates)
- Number of particles: more particles means higher $S$ (more microstates for more particles)
- Dissolution: dissolving a solid usually increases $S$ (ions are dispersed in solution)
- Complexity: more complex molecules have higher $S$ (more vibrational modes)

### Worked Example: Predicting Entropy Changes

Predict the sign of $\Delta S^\circ$ for each reaction:

(a) $2\mathrm{Na}(s) + \mathrm{Cl}_2(g) \to 2\mathrm{NaCl}(s)$: Negative (gas consumed, solid
formed)

(b) $\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)$: Positive (gas produced)

(c) $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \to 2\mathrm{NH}_3(g)$: Negative (4 moles gas to 2 moles
gas)

(d) $\mathrm{NH}_4\mathrm{NO}_3(s) \to \mathrm{N}_2\mathrm{O}(g) + 2\mathrm{H}_2\mathrm{O}(g)$:
Positive (solid to 3 moles gas)

### Standard Entropy Change

$$
\Delta S^\circ = \sum n S^\circ(\mathrm{products}) - \sum m S^\circ(\mathrm{reactants})
$$

Note: unlike $\Delta H_f^\circ$, $S^\circ$ is not zero for elements (elements have nonzero absolute
entropy because they are not perfect crystals at absolute zero under standard conditions).

### The Third Law of Thermodynamics

The entropy of a perfect crystal at absolute zero ($0 \mathrm{ K}$) is zero. This provides an
absolute reference point for entropy, unlike enthalpy.

### Worked Example: Standard Entropy Calculation

Calculate $\Delta S^\circ$ for the reaction
$\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)$.

Given: $S^\circ(\mathrm{CaCO}_3, s) = 92.9$, $S^\circ(\mathrm{CaO}, s) = 39.7$,
$S^\circ(\mathrm{CO}_2, g) = 213.7 \mathrm{ J/(mol}\cdot\mathrm{K)}$.

$$\Delta S^\circ = [39.7 + 213.7] - [92.9] = 253.4 - 92.9 = 160.5 \mathrm{ J/(mol}\cdot\mathrm{K)}$$

The positive $\Delta S^\circ$ is expected because a solid decomposes to produce a gas.

### Worked Example: Entropy and Phase Changes

Calculate $\Delta S$ for the vaporisation of $1.00 \mathrm{ mol}$ of water at
$100^{\circ}\mathrm{C}$.

$$\Delta H_{\mathrm{vap}} = 40.7 \mathrm{ kJ/mol}$$

At the boiling point, $\Delta G = 0$, so $\Delta H = T\Delta S$:

$$\Delta S = \frac{\Delta H_{\mathrm{vap}}}{T} = \frac{40700}{373.15} = 109.1 \mathrm{ J/(mol}\cdot\mathrm{K)}$$

This positive entropy change confirms that the gas phase has more disorder than the liquid phase.

### Worked Example: Entropy of Surroundings

For the reaction
$\mathrm{NH}_4\mathrm{NO}_3(s) \to \mathrm{N}_2\mathrm{O}(g) + 2\mathrm{H}_2\mathrm{O}(g)$ at
$298 \mathrm{ K}$:

$\Delta H^\circ = -36.0 \mathrm{ kJ/mol}$ (exothermic, heat released to surroundings).

$$\Delta S_{\mathrm{surroundings}} = \frac{-\Delta H^\circ}{T} = \frac{36000}{298} = 120.8 \mathrm{ J/(mol}\cdot\mathrm{K)}$$

$$\Delta S_{\mathrm{system}} = 439 \mathrm{ J/(mol}\cdot\mathrm{K)}$$ (given)

$$\Delta S_{\mathrm{universe}} = 439 + 120.8 = 559.8 \mathrm{ J/(mol}\cdot\mathrm{K)} \gt 0$$

The reaction is spontaneous because $\Delta S_{\mathrm{universe}} \gt 0$. The positive
$\Delta S_{\mathrm{system}}$ (more gas molecules produced) and the positive
$\Delta S_{\mathrm{surroundings}}$ (exothermic) both contribute.

## Gibbs Free Energy (CED Unit 9)

### Definition

$$
\Delta G = \Delta H - T\Delta S
$$

The Gibbs free energy combines enthalpy and entropy into a single criterion for spontaneity. A
negative $\Delta G$ means the process is spontaneous at constant temperature and pressure.

### Spontaneity at Constant Temperature and Pressure

| Condition        | Spontaneity    |
| ---------------- | -------------- |
| $\Delta G \lt 0$ | Spontaneous    |
| $\Delta G = 0$   | At equilibrium |
| $\Delta G \gt 0$ | Nonspontaneous |

### Standard Gibbs Free Energy of Formation

$$
\Delta G^\circ = \sum n\Delta G_f^\circ(\mathrm{products}) - \sum m\Delta G_f^\circ(\mathrm{reactants})
$$

### Relationship to the Equilibrium Constant

$$
\Delta G^\circ = -RT\ln K
$$

where $R = 8.314 \mathrm{ J/(mol}\cdot\mathrm{K)}$ and $K$ is the equilibrium constant.

| $K$       | $\Delta G^\circ$       | Favorability      |
| --------- | ---------------------- | ----------------- |
| $K \gg 1$ | $\Delta G^\circ \ll 0$ | Products favored  |
| $K = 1$   | $\Delta G^\circ = 0$   | Neither           |
| $K \ll 1$ | $\Delta G^\circ \gg 0$ | Reactants favored |

This equation bridges thermodynamics and equilibrium: the equilibrium constant is determined by the
standard free energy change.

### Derivation: Non-Standard Gibbs Free Energy

$$
\Delta G = \Delta G^\circ + RT\ln Q
$$

where $Q$ is the reaction quotient. At equilibrium, $\Delta G = 0$ and $Q = K$, giving
$\Delta G^\circ = -RT\ln K$.

### Temperature Dependence of Spontaneity

| $\Delta H$ | $\Delta S$ | Spontaneous? | Temperature Effect                                           |
| ---------- | ---------- | ------------ | ------------------------------------------------------------ |
| Negative   | Positive   | Always       | Spontaneous at all $T$                                       |
| Positive   | Negative   | Never        | Nonspontaneous at all $T$                                    |
| Negative   | Negative   | Low $T$      | Becomes nonspontaneous above $T = \frac{\Delta H}{\Delta S}$ |
| Positive   | Positive   | High $T$     | Becomes spontaneous above $T = \frac{\Delta H}{\Delta S}$    |

### Temperature at Which Spontaneity Changes

$$
T = \frac{\Delta H}{\Delta S}
$$

At this temperature, $\Delta G = 0$ and $K = 1$.

:::info[Example]

For the reaction $\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)$:

$\Delta H^\circ = 178 \mathrm{ kJ/mol}$, $\Delta S^\circ = 160 \mathrm{ J/(mol}\cdot\mathrm{K)}$.

Find the temperature at which the reaction becomes spontaneous.

$$
T = \frac{\Delta H}{\Delta S} = \frac{178000}{160} = 1113 \mathrm{ K} \approx 840^\circ\mathrm{C}
$$

Above $1113 \mathrm{ K}$, $\Delta G \lt 0$ and the decomposition is spontaneous.

:::

### Worked Example: Gibbs Free Energy Calculation

For the reaction $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \to 2\mathrm{NH}_3(g)$ at $298 \mathrm{ K}$:

$\Delta H^\circ = -92.2 \mathrm{ kJ/mol}$,
$\Delta S^\circ = -198.8 \mathrm{ J/(mol}\cdot\mathrm{K)}$.

Calculate $\Delta G^\circ$ and $K$.

$$\Delta G^\circ = -92200 - 298(-198.8) = -92200 + 59242 = -32958 \mathrm{ J/mol} = -33.0 \mathrm{ kJ/mol}$$

$$K = e^{-\Delta G^\circ/(RT)} = e^{32958/(8.314 \times 298)} = e^{13.29} = 5.9 \times 10^5$$

$K \gg 1$, confirming the reaction strongly favours products at $298 \mathrm{ K}$.

### Worked Example: Non-Standard Gibbs Free Energy

Calculate $\Delta G$ for the reaction $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \to 2\mathrm{NH}_3(g)$ at
$298 \mathrm{ K}$ when $P(\mathrm{N}_2) = 10.0 \mathrm{ atm}$,
$P(\mathrm{H}_2) = 30.0 \mathrm{ atm}$, $P(\mathrm{NH}_3) = 0.500 \mathrm{ atm}$.

$$Q = \frac{(0.500)^2}{(10.0)(30.0)^3} = \frac{0.250}{270000} = 9.26 \times 10^{-7}$$

$$\Delta G = \Delta G^\circ + RT\ln Q = -33000 + (8.314)(298)\ln(9.26 \times 10^{-7})$$

$$= -33000 + 2478 \times (-13.89) = -33000 - 34420 = -67420 \mathrm{ J/mol} = -67.4 \mathrm{ kJ/mol}$$

$\Delta G \lt 0$, so the reaction is spontaneous under these conditions. The high pressure of
reactants and low pressure of product drive the reaction forward.

## Summary Table: Thermodynamic Quantities

| Quantity          | Symbol | Units           | State Function? | Zero Reference             |
| ----------------- | ------ | --------------- | --------------- | -------------------------- |
| Internal energy   | $U$    | kJ              | Yes             | None (arbitrary)           |
| Enthalpy          | $H$    | kJ              | Yes             | Elements in standard state |
| Entropy           | $S$    | J/(mol$\cdot$K) | Yes             | Perfect crystal at 0 K     |
| Gibbs free energy | $G$    | kJ              | Yes             | Elements in standard state |

## Summary Table: Spontaneity Criteria

| $\Delta H$ | $\Delta S$ | Low $T$ ($\Delta G$) | High $T$ ($\Delta G$) | Spontaneous at |
| ---------- | ---------- | -------------------- | --------------------- | -------------- |
| $-$        | $+$        | $-$ (spontaneous)    | $-$ (spontaneous)     | All $T$        |
| $+$        | $-$        | $+$ (nonspontaneous) | $+$ (nonspontaneous)  | Never          |
| $-$        | $-$        | $-$ (spontaneous)    | $+$ (nonspontaneous)  | Low $T$ only   |
| $+$        | $+$        | $+$ (nonspontaneous) | $-$ (spontaneous)     | High $T$ only  |

## Common Pitfalls

1. **Confusing $\Delta U$ and $\Delta H$.** $\Delta H = \Delta U + P\Delta V$. They are equal only
   when there is no gas produced/consumed or when $\Delta V = 0$.
2. **Wrong sign for work.** In chemistry, $w = -P\Delta V$. When a gas expands ($\Delta V \gt 0$),
   the system does work on the surroundings ($w \lt 0$).
3. **Forgetting that $\Delta H_f^\circ = 0$ for elements in their standard state.** This is a
   convention.
4. **Using the wrong sign convention for calorimetry.**
   $q_{\mathrm{rxn}} = -q_{\mathrm{surroundings}}$.
5. **Confusing entropy of the system with entropy of the universe.** Spontaneity requires
   $\Delta S_{\mathrm{universe}} \gt 0$, not just $\Delta S_{\mathrm{system}} \gt 0$.
6. **Incorrect units in the Gibbs equation.** $\Delta H$ is in kJ/mol; $\Delta S$ is in
   J/(mol$\cdot$K). Convert one of them before combining.
7. **Using $R = 0.08206$ in $\Delta G^\circ = -RT\ln K$.** Use
   $R = 8.314 \mathrm{ J/(mol}\cdot\mathrm{K)}$ because $\Delta G^\circ$ is in J/mol.
8. **Assuming a negative $\Delta H$ guarantees spontaneity.** If $\Delta S$ is sufficiently
   negative, $\Delta G$ can be positive even when $\Delta H$ is negative.
9. **Forgetting that standard conditions are $298 \mathrm{ K}$ and $1 \mathrm{ atm}$, not STP.**

## Practice Questions

1. Calculate $\Delta H^\circ$ for
   $2\mathrm{Fe}_2\mathrm{O}_3(s) + 3\mathrm{C}(s) \to 4\mathrm{Fe}(s) + 3\mathrm{CO}_2(g)$ using
   standard enthalpies of formation.

2. When $3.50 \mathrm{ g}$ of $\mathrm{NaOH}$ is dissolved in $100.0 \mathrm{ g}$ of water in a
   calorimeter, the temperature rises from $23.0^\circ\mathrm{C}$ to $36.5^\circ\mathrm{C}$.
   Calculate $\Delta H$ per mole of $\mathrm{NaOH}$.

3. For a reaction with $\Delta H = 125 \mathrm{ kJ/mol}$ and
   $\Delta S = 200 \mathrm{ J/(mol}\cdot\mathrm{K)}$, find the temperature range where the reaction
   is spontaneous.

4. Given $\Delta G_f^\circ$ values: $\mathrm{NO}_2(g) = 51.3 \mathrm{ kJ/mol}$,
   $\mathrm{N}_2\mathrm{O}_4(g) = 97.8 \mathrm{ kJ/mol}$. Find $\Delta G^\circ$ and $K$ for
   $2\mathrm{NO}_2(g) \rightleftharpoons \mathrm{N}_2\mathrm{O}_4(g)$ at $298 \mathrm{ K}$.

5. Estimate the enthalpy of combustion of $\mathrm{CH}_4$ using bond enthalpies. Compare with the
   value calculated from standard enthalpies of formation.

6. A reaction has $\Delta G^\circ = -20.0 \mathrm{ kJ/mol}$ at $298 \mathrm{ K}$. Calculate $K$.

7. Explain why the melting of ice is spontaneous above $0^\circ\mathrm{C}$ but not below, using
   $\Delta G = \Delta H - T\Delta S$.

8. Calculate $\Delta S^\circ$ for the reaction
   $2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$ given:
   $S^\circ(\mathrm{H}_2) = 130.7$, $S^\circ(\mathrm{O}_2) = 205.1$,
   $S^\circ(\mathrm{H}_2\mathrm{O}, l) = 69.9 \mathrm{ J/(mol}\cdot\mathrm{K)}$.

9. A bomb calorimeter has $C_{\mathrm{cal}} = 850 \mathrm{ J/K}$. Burning $1.00 \mathrm{ g}$ of
   naphthalene ($\mathrm{C}_{10}\mathrm{H}_8$) raises the temperature by $2.46 \mathrm{ K}$.
   Calculate the enthalpy of combustion per mole of naphthalene.

10. For the reaction
    $\mathrm{NH}_4\mathrm{NO}_3(s) \to \mathrm{N}_2\mathrm{O}(g) + 2\mathrm{H}_2\mathrm{O}(g)$,
    $\Delta H^\circ = -36.0 \mathrm{ kJ/mol}$ and
    $\Delta S^\circ = 439 \mathrm{ J/(mol}\cdot\mathrm{K)}$. Is the reaction spontaneous at
    $298 \mathrm{ K}$? At what temperature does it become nonspontaneous?

11. Explain why the dissolution of $\mathrm{NH}_4\mathrm{NO}_3$ in water is endothermic yet
    spontaneous at room temperature.

12. Calculate $\Delta G$ (not $\Delta G^\circ$) for the reaction
    $\mathrm{N}_2\mathrm{O}_4(g)
    \rightleftharpoons 2\mathrm{NO}_2(g)$ at $298 \mathrm{ K}$ when
    $P(\mathrm{N}_2\mathrm{O}_4) = 0.50
    \mathrm{ atm}$ and
    $P(\mathrm{NO}_2) = 0.10 \mathrm{ atm}$. Given: $\Delta G^\circ = 4.72
    \mathrm{ kJ/mol}$.

13. Predict the sign of $\Delta S^\circ$ for each reaction and explain your reasoning: (a)
    $2\mathrm{Na}(s) + \mathrm{Cl}_2(g) \to 2\mathrm{NaCl}(s)$ (b)
    $\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)$

14. Calculate $\Delta H^\circ$ for the reaction
    $\mathrm{N}_2(g) + 2\mathrm{O}_2(g) \to 2\mathrm{NO}_2(g)$ using the following data:
    $\frac{1}{2}\mathrm{N}_2(g) + \mathrm{O}_2(g) \to \mathrm{NO}_2(g)$,
    $\Delta H^\circ = 33.2
    \mathrm{ kJ/mol}$.

15. A student calculates $\Delta G^\circ = -15 \mathrm{ kJ/mol}$ for a reaction at $298 \mathrm{ K}$
    and concludes that the reaction will reach completion. Explain why this conclusion may not be
    justified.

16. Calculate $\Delta G^\circ$ at $500 \mathrm{ K}$ for a reaction with
    $\Delta H^\circ = -50 \mathrm{ kJ/mol}$ and
    $\Delta S^\circ = -80 \mathrm{ J/(mol}\cdot\mathrm{K)}$. Is the reaction spontaneous at this
    temperature?

17. Using the data below, calculate the standard enthalpy change for the reaction
    $\mathrm{C}_2\mathrm{H}_5\mathrm{OH}(l) + 3\mathrm{O}_2(g) \to 2\mathrm{CO}_2(g) + 3\mathrm{H}_2\mathrm{O}(l)$.
    $\Delta H_f^\circ(\mathrm{C}_2\mathrm{H}_5\mathrm{OH}, l) = -277.7 \mathrm{ kJ/mol}$.

18. Explain why a reaction with $\Delta H \gt 0$ and $\Delta S \gt 0$ is nonspontaneous at low
    temperatures but becomes spontaneous at high temperatures.

19. Calculate the boiling point of $\mathrm{Br}_2$ given that
    $\mathrm{Br}_2(l) \to \mathrm{Br}_2(g)$ has $\Delta H^\circ = 30.9 \mathrm{ kJ/mol}$ and
    $\Delta S^\circ = 93.2 \mathrm{ J/(mol}\cdot\mathrm{K)}$.

20. A calorimeter contains $200 \mathrm{ g}$ of water at $25.0^\circ\mathrm{C}$. When
    $5.00 \mathrm{ g}$ of $\mathrm{KOH}$ is dissolved, the temperature rises to
    $35.0^\circ\mathrm{C}$. Calculate the enthalpy of solution of $\mathrm{KOH}$ in kJ/mol.

21. For the reaction $2\mathrm{NO}(g) + \mathrm{O}_2(g) \to 2\mathrm{NO}_2(g)$, given
    $\Delta H^\circ = -114.1 \mathrm{ kJ/mol}$ and
    $\Delta S^\circ = -146.5 \mathrm{ J/(mol}\cdot\mathrm{K)}$, calculate the temperature above
    which the reaction is no longer spontaneous.

22. Using the following data, calculate $\Delta S^\circ$ for the reaction
    $4\mathrm{Fe}(s) + 3\mathrm{O}_2(g) \to 2\mathrm{Fe}_2\mathrm{O}_3(s)$:
    $S^\circ(\mathrm{Fe}, s) = 27.3$, $S^\circ(\mathrm{O}_2, g) = 205.1$,
    $S^\circ(\mathrm{Fe}_2\mathrm{O}_3, s) = 87.4 \mathrm{ J/(mol}\cdot\mathrm{K)}$.

23. Calculate the normal boiling point of chloroform ($\mathrm{CHCl}_3$) given that
    $\mathrm{CHCl}_3(l) \to \mathrm{CHCl}_3(g)$ has $\Delta H^\circ = 31.4 \mathrm{ kJ/mol}$ and
    $\Delta S^\circ = 94.2 \mathrm{ J/(mol}\cdot\mathrm{K)}$.

24. For the reaction
    $\mathrm{C}(s) + \mathrm{H}_2\mathrm{O}(g) \to \mathrm{CO}(g) + \mathrm{H}_2(g)$,
    $\Delta H^\circ = 131.3 \mathrm{ kJ/mol}$ and
    $\Delta S^\circ = 133.7 \mathrm{ J/(mol}\cdot\mathrm{K)}$. Calculate the minimum temperature at
    which this reaction becomes spontaneous.

25. Explain why the following statement is incorrect: "An exothermic reaction is always
    spontaneous."

26. A bomb calorimeter with $C_{\mathrm{cal}} = 950 \mathrm{ J/K}$ is used to determine the enthalpy
    of combustion of benzoic acid ($\mathrm{C}_7\mathrm{H}_6\mathrm{O}_2$). Burning
    $1.00 \mathrm{ g}$ raises the temperature by $3.24 \mathrm{ K}$. Calculate the enthalpy of
    combustion per mole.

27. Calculate $\Delta G^\circ$ and $K$ at $298 \mathrm{ K}$ for the reaction
    $\mathrm{H}_2(g) + \mathrm{I}_2(g) \to 2\mathrm{HI}(g)$ given:
    $\Delta G_f^\circ(\mathrm{HI}, g) = 1.7 \mathrm{ kJ/mol}$.

28. For a certain reaction, $\Delta G^\circ = -5.4 \mathrm{ kJ/mol}$ at $300 \mathrm{ K}$. Calculate
    $K$ at this temperature and determine whether products or reactants are favoured.

29. Calculate the work done when $2.00 \mathrm{ mol}$ of a gas expands from $5.0 \mathrm{ L}$ to
    $15.0 \mathrm{ L}$ against a constant external pressure of $1.00 \mathrm{ atm}$.

30. Explain, using thermodynamic principles, why ice melts spontaneously at temperatures above
    $0^{\circ}\mathrm{C}$ even though the process is endothermic.

31. Calculate the work done by the system and $\Delta U$ when $3.00 \mathrm{ L}$ of gas at
    $2.00 \mathrm{ atm}$ expands against a constant external pressure of $0.50 \mathrm{ atm}$ to a
    final volume of $8.00 \mathrm{ L}$.

32. Given $\Delta H_f^\circ(\mathrm{NH}_3, g) = -46.1 \mathrm{ kJ/mol}$,
    $\Delta H_f^\circ(\mathrm{NO}, g) = 90.3 \mathrm{ kJ/mol}$, and
    $\Delta H_f^\circ(\mathrm{H}_2\mathrm{O}, g) = -241.8 \mathrm{ kJ/mol}$, calculate
    $\Delta H^\circ$ for the reaction
    $4\mathrm{NH}_3(g) + 5\mathrm{O}_2(g) \to 4\mathrm{NO}(g) + 6\mathrm{H}_2\mathrm{O}(g)$.

33. The standard entropy values are: $S^\circ(\mathrm{C}, s) = 5.7$,
    $S^\circ(\mathrm{CO}_2, g) = 213.7$,
    $S^\circ(\mathrm{CO}, g) = 197.7 \mathrm{ J/(mol}\cdot\mathrm{K)}$. Calculate $\Delta S^\circ$
    for the reaction $\mathrm{C}(s) + \mathrm{CO}_2(g) \to 2\mathrm{CO}(g)$ and comment on the sign.

## Practice Problems

<details>
<summary>Question 1: Hess's law and enthalpy of formation</summary>

Given the following data, calculate the standard enthalpy of formation of
$\mathrm{CH}_3\mathrm{OH}(l)$:

- $\mathrm{C}(s) + \mathrm{O}_2(g) \to \mathrm{CO}_2(g)$, $\Delta H^\circ = -393.5 \mathrm{ kJ/mol}$
- $\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)$,
  $\Delta H^\circ = -285.8 \mathrm{ kJ/mol}$
- $\mathrm{CH}_3\mathrm{OH}(l) + \frac{3}{2}\mathrm{O}_2(g) \to \mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(l)$,
  $\Delta H^\circ = -726.4 \mathrm{ kJ/mol}$

</details>

<details>
<summary>Answer</summary>

Target:
$\mathrm{C}(s) + 2\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{CH}_3\mathrm{OH}(l)$

Manipulate the given equations:

(1) $\mathrm{C}(s) + \mathrm{O}_2(g) \to \mathrm{CO}_2(g)$,
$\Delta H^\circ = -393.5 \mathrm{ kJ/mol}$ -- keep

(2) $2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$,
$\Delta H^\circ = 2(-285.8) = -571.6 \mathrm{ kJ/mol}$ -- multiply by 2

(3)
$\mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{CH}_3\mathrm{OH}(l) + \frac{3}{2}\mathrm{O}_2(g)$,
$\Delta H^\circ = +726.4 \mathrm{ kJ/mol}$ -- reverse

Add (1) + (2) + (3):

$\mathrm{C}(s) + 2\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{CH}_3\mathrm{OH}(l)$

$\Delta H_f^\circ = -393.5 + (-571.6) + 726.4 = -238.7 \mathrm{ kJ/mol}$.

</details>

<details>
<summary>Question 2: Gibbs free energy and spontaneity</summary>

For the reaction
$\mathrm{NH}_4\mathrm{NO}_3(s) \to \mathrm{N}_2\mathrm{O}(g) + 2\mathrm{H}_2\mathrm{O}(g)$,
$\Delta H^\circ = -36.0 \mathrm{ kJ/mol}$ and $\Delta S^\circ = 347 \mathrm{ J/(mol\cdot K)}$.
Calculate $\Delta G^\circ$ at $298 \mathrm{ K}$ and determine the temperature range over which the
reaction is spontaneous.

</details>

<details>
<summary>Answer</summary>

$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -36,000 - 298 \times 347 = -36,000 - 103,406 = -139,406 \mathrm{ J/mol} = -139.4 \mathrm{ kJ/mol}$.

Since $\Delta G^\circ \lt 0$ at $298 \mathrm{ K}$, the reaction is spontaneous at this temperature.

The reaction is spontaneous when $\Delta G \lt 0$:

$\Delta H - T\Delta S \lt 0$

Since $\Delta H = -36.0 \mathrm{ kJ/mol}$ (negative) and $\Delta S = +347 \mathrm{ J/(mol\cdot K)}$
(positive), both terms favour spontaneity. The reaction is spontaneous at all temperatures. There is
no upper temperature limit because the $-T\Delta S$ term always contributes negatively to $\Delta G$
when $\Delta S$ is positive.

</details>

<details>
<summary>Question 3: Calorimetry and specific heat</summary>

A $50.0 \mathrm{ g}$ sample of an unknown metal is heated to $100.0^\circ\mathrm{C}$ and then placed
in $100.0 \mathrm{ g}$ of water at $25.0^\circ\mathrm{C}$ in a coffee-cup calorimeter. The final
temperature of the mixture is $28.8^\circ\mathrm{C}$. Calculate the specific heat capacity of the
metal. Assume no heat loss to the calorimeter.

</details>

<details>
<summary>Answer</summary>

Heat gained by water = heat lost by metal.

$q_{\text{water}} = m_{\text{water}} \times c_{\text{water}} \times \Delta T_{\text{water}} = 100.0 \times 4.184 \times (28.8 - 25.0) = 100.0 \times 4.184 \times 3.8 = 1589.9 \mathrm{ J}$.

$q_{\text{metal}} = m_{\text{metal}} \times c_{\text{metal}} \times \Delta T_{\text{metal}} = 50.0 \times c_{\text{metal}} \times (100.0 - 28.8) = 50.0 \times c_{\text{metal}} \times 71.2$.

Setting equal: $1589.9 = 50.0 \times c_{\text{metal}} \times 71.2$.

$c_{\text{metal}} = 1589.9 / 3560 = 0.447 \mathrm{ J/(g\cdot^\circ\mathrm{C})}$.

This value is close to that of iron ($0.449 \mathrm{ J/(g\cdot^\circ\mathrm{C})}$), suggesting the
unknown metal may be iron.

</details>

<details>
<summary>Question 4: Entropy change of surroundings</summary>

For the vaporisation of water at $100^\circ\mathrm{C}$ and $1 \mathrm{ atm}$:
$\mathrm{H}_2\mathrm{O}(l) \to \mathrm{H}_2\mathrm{O}(g)$,
$\Delta H_{\text{vap}} = 40.7 \mathrm{ kJ/mol}$. Calculate $\Delta S_{\text{system}}$,
$\Delta S_{\text{surroundings}}$, and $\Delta S_{\text{universe}}$. Is the process spontaneous at
this temperature?

</details>

<details>
<summary>Answer</summary>

$\Delta S_{\text{system}} = \Delta H_{\text{vap}} / T = 40,700 / 373 = 109.1 \mathrm{ J/(mol\cdot K)}$.

$\Delta S_{\text{surroundings}} = -\Delta H_{\text{vap}} / T = -40,700 / 373 = -109.1 \mathrm{ J/(mol\cdot K)}$.

$\Delta S_{\text{universe}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}} = 109.1 + (-109.1) = 0 \mathrm{ J/(mol\cdot K)}$.

At $100^\circ\mathrm{C}$ and $1 \mathrm{ atm}$, liquid and gaseous water are in equilibrium, so
$\Delta G = 0$ and $\Delta S_{\text{universe}} = 0$. The process is at equilibrium, not spontaneous
in either direction. Above $100^\circ\mathrm{C}$, vaporisation becomes spontaneous
($\Delta S_{\text{universe}} \gt 0$).

</details>

<details>
<summary>Question 5: Bond enthalpy calculation</summary>

Using the following average bond enthalpies, estimate $\Delta H$ for the reaction
$\mathrm{CH}_4(g) + 2\mathrm{Cl}_2(g) \to \mathrm{CH}_2\mathrm{Cl}_2(g) + 2\mathrm{HCl}(g)$:

C-H: $413 \mathrm{ kJ/mol}$, Cl-Cl: $242 \mathrm{ kJ/mol}$, C-Cl: $339 \mathrm{ kJ/mol}$, H-Cl:
$431 \mathrm{ kJ/mol}$.

</details>

<details>
<summary>Answer</summary>

Bonds broken (reactants):

- 4 C-H bonds in $\mathrm{CH}_4$: $4 \times 413 = 1652 \mathrm{ kJ/mol}$
- 2 Cl-Cl bonds: $2 \times 242 = 484 \mathrm{ kJ/mol}$

Wait -- not all C-H bonds break. In $\mathrm{CH}_2\mathrm{Cl}_2$, two C-H bonds remain. So only 2
C-H bonds break.

Corrected bonds broken:

- 2 C-H bonds: $2 \times 413 = 826 \mathrm{ kJ/mol}$
- 2 Cl-Cl bonds: $2 \times 242 = 484 \mathrm{ kJ/mol}$
- Total broken: $826 + 484 = 1310 \mathrm{ kJ/mol}$

Bonds formed (products):

- 2 C-Cl bonds: $2 \times 339 = 678 \mathrm{ kJ/mol}$
- 2 H-Cl bonds: $2 \times 431 = 862 \mathrm{ kJ/mol}$
- Total formed: $678 + 862 = 1540 \mathrm{ kJ/mol}$

$\Delta H = \text{bonds broken} - \text{bonds formed} = 1310 - 1540 = -230 \mathrm{ kJ/mol}$.

The reaction is exothermic because stronger bonds (H-Cl, C-Cl) are formed than are broken (C-H,
Cl-Cl).

</details>
