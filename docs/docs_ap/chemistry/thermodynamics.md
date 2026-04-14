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

where $q$ is heat and $w$ is work.

### Sign Convention (Chemistry)

- $q \gt 0$: heat absorbed by the system (endothermic)
- $q \lt 0$: heat released by the system (exothermic)
- $w \gt 0$: work done on the system
- $w \lt 0$: work done by the system

### Pressure-Volume Work

For a gas expanding/contracting against constant external pressure:

$$
w = -P\Delta V
$$

### Work at Constant Pressure: Enthalpy

At constant pressure, $w = -P\Delta V$, so:

$$
\Delta U = q_P - P\Delta V \implies q_P = \Delta U + P\Delta V = \Delta H
$$

**Enthalpy** ($H$) is defined as $H = U + PV$. At constant pressure, $\Delta H = q_P$.

## Enthalpy of Reaction (CED Unit 6)

### Standard Enthalpy of Formation ($\Delta H_f^\circ$)

The enthalpy change when 1 mole of a compound forms from its elements in their standard states.

$$
\Delta H_{\text{rxn}}^\circ = \sum n\Delta H_f^\circ(\text{products}) - \sum m\Delta H_f^\circ(\text{reactants})
$$

Standard conditions: $1 \text{ atm}$, $298 \text{ K}$, pure substances.

### Hess's Law

The total enthalpy change for a reaction is the same regardless of the pathway. If a reaction can be
written as the sum of several steps:

$$
\Delta H_{\text{total}} = \Delta H_1 + \Delta H_2 + \cdots
$$

:::info[Example]

Calculate $\Delta H^\circ$ for the combustion of propane:

$$
\text{C}_3\text{H}_8(g) + 5\text{O}_2(g) \to 3\text{CO}_2(g) + 4\text{H}_2\text{O}(l)
$$

Using standard enthalpies of formation (kJ/mol):

| Substance                 | $\Delta H_f^\circ$ (kJ/mol) |
| ------------------------- | --------------------------- |
| $\text{C}_3\text{H}_8(g)$ | -103.8                      |
| $\text{O}_2(g)$           | 0                           |
| $\text{CO}_2(g)$          | -393.5                      |
| $\text{H}_2\text{O}(l)$   | -285.8                      |

$$
\Delta H^\circ = [3(-393.5) + 4(-285.8)] - [-103.8 + 5(0)]
$$

$$
= [-1180.5 - 1143.2] - [-103.8] = -2323.7 + 103.8 = -2219.9 \text{ kJ}
$$

:::

### Bond Enthalpies

The average enthalpy change when a bond is broken in the gas phase:

$$
\Delta H \approx \sum D(\text{bonds broken}) - \sum D(\text{bonds formed})
$$

This is an approximation because bond energies are average values.

:::info[Example]

Estimate $\Delta H$ for
$\text{CH}_4(g) + 2\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(g)$ using bond enthalpies.

Bonds broken: $4 \text{ C--H} (413) + 2 \text{ O=O} (495) = 1652 + 990 = 2642 \text{ kJ/mol}$

Bonds formed: $2 \text{ C=O} (799) + 4 \text{ O--H} (463) = 1598 + 1852 = 3450 \text{ kJ/mol}$

$$
\Delta H \approx 2642 - 3450 = -808 \text{ kJ/mol}
$$

(The exact value using formation enthalpies is about $-802 \text{ kJ/mol}$ for the gaseous
products.)

:::

## Calorimetry

### Specific Heat Capacity

$$
q = mc\Delta T
$$

where $m$ is mass, $c$ is specific heat capacity (J/g$\cdot$K), and $\Delta T$ is the temperature
change.

### Coffee-Cup Calorimetry (Constant Pressure)

Measures $\Delta H$ of reactions in solution. The calorimeter is open to the atmosphere, so $P$ is
constant.

$$
q_{\text{rxn}} = -q_{\text{solution}} = -(m_{\text{solution}} \cdot c_{\text{solution}} \cdot \Delta T)
$$

### Bomb Calorimetry (Constant Volume)

Measures $\Delta U$ of combustion reactions. The calorimeter has a fixed volume.

$$
q_{\text{rxn}} = -C_{\text{calorimeter}} \cdot \Delta T
$$

:::info[Example]

When $50.0 \text{ mL}$ of $1.00 \text{ M } \text{HCl}$ is mixed with $50.0 \text{ mL}$ of
$1.00 \text{ M }$ $\text{NaOH}$ in a coffee-cup calorimeter, the temperature rises from
$25.0^\circ\text{C}$ to $31.6^\circ\text{C}$. Calculate $\Delta H$ per mole of $\text{H}_2\text{O}$
formed.

Total mass: $50.0 + 50.0 = 100.0 \text{ g}$ (assume density = $1.00 \text{ g/mL}$,
$c = 4.18 \text{ J/g}\cdot\text{K}$).

$$
q_{\text{solution}} = (100.0)(4.18)(31.6 - 25.0) = 100.0 \times 4.18 \times 6.6 = 2759 \text{ J} = 2.76 \text{ kJ}
$$

$$
q_{\text{rxn}} = -2.76 \text{ kJ}
$$

Moles of $\text{H}_2\text{O}$ formed: $1.00 \times 0.0500 = 0.0500 \text{ mol}$.

$$
\Delta H = \frac{-2.76}{0.0500} = -55.2 \text{ kJ/mol}
$$

:::

## Entropy and the Second Law (CED Unit 9)

### Entropy ($S$)

Entropy is a measure of disorder or randomness. The second law states that the entropy of the
universe increases for any spontaneous process:

$$
\Delta S_{\text{universe}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}} \gt 0
$$

### Factors Affecting Entropy

- Phase changes: $S_{\text{gas}} \gg S_{\text{liquid}} \gt S_{\text{solid}}$
- Temperature: higher $T$ means higher $S$
- Number of particles: more particles means higher $S$
- Dissolution: dissolving a solid usually increases $S$

### Standard Entropy Change

$$
\Delta S^\circ = \sum n S^\circ(\text{products}) - \sum m S^\circ(\text{reactants})
$$

Note: unlike $\Delta H_f^\circ$, $S^\circ$ is not zero for elements (elements have nonzero absolute
entropy).

## Gibbs Free Energy (CED Unit 9)

### Definition

$$
\Delta G = \Delta H - T\Delta S
$$

### Spontaneity at Constant Temperature and Pressure

| Condition        | Spontaneity    |
| ---------------- | -------------- |
| $\Delta G \lt 0$ | Spontaneous    |
| $\Delta G = 0$   | At equilibrium |
| $\Delta G \gt 0$ | Nonspontaneous |

### Standard Gibbs Free Energy of Formation

$$
\Delta G^\circ = \sum n\Delta G_f^\circ(\text{products}) - \sum m\Delta G_f^\circ(\text{reactants})
$$

### Relationship to the Equilibrium Constant

$$
\Delta G^\circ = -RT\ln K
$$

where $R = 8.314 \text{ J/(mol}\cdot\text{K)}$ and $K$ is the equilibrium constant.

| $K$       | $\Delta G^\circ$       | Favorability      |
| --------- | ---------------------- | ----------------- |
| $K \gg 1$ | $\Delta G^\circ \ll 0$ | Products favored  |
| $K = 1$   | $\Delta G^\circ = 0$   | Neither           |
| $K \ll 1$ | $\Delta G^\circ \gg 0$ | Reactants favored |

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

For the reaction $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$:

$\Delta H^\circ = 178 \text{ kJ/mol}$, $\Delta S^\circ = 160 \text{ J/(mol}\cdot\text{K)}$.

Find the temperature at which the reaction becomes spontaneous.

$$
T = \frac{\Delta H}{\Delta S} = \frac{178000}{160} = 1113 \text{ K} \approx 840^\circ\text{C}
$$

Above $1113 \text{ K}$, $\Delta G \lt 0$ and the decomposition is spontaneous.

:::

## Common Pitfalls

1. **Confusing $\Delta U$ and $\Delta H$.** $\Delta H = \Delta U + P\Delta V$. They are equal only
   when there is no gas produced/consumed or when $\Delta V = 0$.
2. **Wrong sign for work.** In chemistry, $w = -P\Delta V$. When a gas expands ($\Delta V \gt 0$),
   the system does work on the surroundings ($w \lt 0$).
3. **Forgetting that $\Delta H_f^\circ = 0$ for elements in their standard state.** This is a
   convention.
4. **Using the wrong sign convention for calorimetry.** $q_{\text{rxn}} = -q_{\text{surroundings}}$.
5. **Confusing entropy of the system with entropy of the universe.** Spontaneity requires
   $\Delta S_{\text{universe}} \gt 0$, not just $\Delta S_{\text{system}} \gt 0$.
6. **Incorrect units in the Gibbs equation.** $\Delta H$ is in kJ/mol; $\Delta S$ is in
   J/(mol$\cdot$K). Convert one of them before combining.
7. \*\*Forgetting that $\Delta G^\circ = -RT\ln K$ uses $R = 8.314 \text{ J/(mol}\cdot\text{K)}$,
   not $0.08206$.

## Practice Questions

1. Calculate $\Delta H^\circ$ for
   $2\text{Fe}_2\text{O}_3(s) + 3\text{C}(s) \to 4\text{Fe}(s) + 3\text{CO}_2(g)$ using standard
   enthalpies of formation.

2. When $3.50 \text{ g}$ of $\text{NaOH}$ is dissolved in $100.0 \text{ g}$ of water in a
   calorimeter, the temperature rises from $23.0^\circ\text{C}$ to $36.5^\circ\text{C}$. Calculate
   $\Delta H$ per mole of $\text{NaOH}$.

3. For a reaction with $\Delta H = 125 \text{ kJ/mol}$ and
   $\Delta S = 200 \text{ J/(mol}\cdot\text{K)}$, find the temperature range where the reaction is
   spontaneous.

4. Given $\Delta G_f^\circ$ values: $\text{NO}_2(g) = 51.3 \text{ kJ/mol}$,
   $\text{N}_2\text{O}_4(g) = 97.8 \text{ kJ/mol}$. Find $\Delta G^\circ$ and $K$ for
   $2\text{NO}_2(g) \rightleftharpoons \text{N}_2\text{O}_4(g)$ at $298 \text{ K}$.

5. Estimate the enthalpy of combustion of $\text{CH}_4$ using bond enthalpies. Compare with the
   value calculated from standard enthalpies of formation.

6. A reaction has $\Delta G^\circ = -20.0 \text{ kJ/mol}$ at $298 \text{ K}$. Calculate $K$.

7. Explain why the melting of ice is spontaneous above $0^\circ\text{C}$ but not below, using
   $\Delta G = \Delta H - T\Delta S$.

8. Calculate $\Delta S^\circ$ for the reaction
   $2\text{H}_2(g) + \text{O}_2(g) \to 2\text{H}_2\text{O}(l)$ given: $S^\circ(\text{H}_2) = 130.7$,
   $S^\circ(\text{O}_2) = 205.1$,
   $S^\circ(\text{H}_2\text{O}, l) = 69.9 \text{ J/(mol}\cdot\text{K)}$.
