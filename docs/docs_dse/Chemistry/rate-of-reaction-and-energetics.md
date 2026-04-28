---
title: Chemistry - Rate of Reaction and Energetics
date: 2026-04-23T00:00:00.000Z
tags:
  - Chemistry
  - DSE
categories:
  - Chemistry
slug: dse-chemistry-rate-of-reaction-and-energetics
---

## Rate of Reaction

The rate of reaction is the change in concentration of a reactant or product per unit time.

$$\mathrm{Rate} = \frac{\mathrm{change in concentration}}{\mathrm{time taken}}$$

---

## Collision Theory

For a reaction to occur, reactant particles must:

1. **Collide** with each other
2. Collide with **sufficient energy** (equal to or greater than the activation energy $E_a$)
3. Collide with the **correct orientation**

Only collisions that satisfy all three conditions result in a successful reaction. These are called
**effective collisions**.

### Activation Energy ($E_a$)

The activation energy is the minimum energy that colliding particles must have for a reaction to
occur. It represents the energy barrier that must be overcome for reactants to be converted to
products.

---

## Factors Affecting the Rate of Reaction

### 1. Concentration (for solutions)

Increasing the concentration of a reactant increases the number of particles per unit volume. This
increases the collision frequency and hence the rate of reaction.

### 2. Pressure (for gases)

Increasing the pressure of gaseous reactants increases the number of gas molecules per unit volume,
analogous to increasing concentration in solution. This increases collision frequency.

### 3. Temperature

Increasing the temperature increases the average kinetic energy of particles. More particles have
energy greater than or equal to $E_a$, so a greater proportion of collisions are effective. This is
the dominant effect.

As a rule of thumb, the rate approximately doubles for every $10^\circ\mathrm{C}$ increase in
temperature.

### 4. Surface Area of Solid Reactants

Increasing the surface area (e.g., powder instead of lumps) exposes more particles to collisions,
increasing the collision frequency.

### 5. Catalysts

A catalyst increases the rate of reaction by providing an alternative reaction pathway with a lower
activation energy. The catalyst is not consumed in the reaction and is regenerated at the end.

$$E_a(\mathrm{with catalyst}) \lt E_a(\mathrm{without catalyst})$$

| Factor           | Effect on Rate | Effect on $E_a$ | Reason                                 |
| ---------------- | -------------- | --------------- | -------------------------------------- |
| Concentration    | Increases      | No change       | More collisions per unit time          |
| Temperature      | Increases      | No change       | More particles have energy $\geq E_a$  |
| Surface area     | Increases      | No change       | More particles exposed for collisions  |
| Catalyst         | Increases      | Decreases       | Lower energy barrier, more effective collisions |

### Worked Example 1

Explain, in terms of collision theory, why increasing the temperature increases the rate of reaction.

At higher temperature, particles have greater average kinetic energy and move faster. This
increases the collision frequency. More importantly, a larger proportion of particles have kinetic
energy equal to or exceeding the activation energy $E_a$, so a greater fraction of collisions are
effective. Both effects increase the rate of reaction.

### Worked Example 2

Explain how a catalyst increases the rate of a reaction.

A catalyst provides an alternative reaction pathway with a lower activation energy. At the same
temperature, a larger proportion of particles now have energy greater than or equal to this lower
$E_a$. Therefore, a greater fraction of collisions are effective, increasing the rate. The catalyst
itself is not consumed and participates in the reaction without undergoing permanent change.

---

## Measuring Reaction Rate

### Common Methods

| Method                     | Measurement                             | Example Reaction                      |
| -------------------------- | --------------------------------------- | ------------------------------------- |
| Mass loss                  | Decrease in mass over time               | $\mathrm{CaCO_3} + \mathrm{HCl}$ (gas evolved) |
| Gas volume collected       | Volume of gas at regular intervals       | $\mathrm{Mg} + \mathrm{HCl}$          |
| Colour change              | Using a colorimeter                     | Disappearance of coloured reactant     |
| Titration                  | Concentration at different times         | $\mathrm{HCl} + \mathrm{NaOH}$        |
| Conductivity               | Change in electrical conductivity        | Formation of ions                     |

### Interpreting Rate Graphs

- **Concentration vs. time:** The curve decreases (reactant) or increases (product). The gradient at
  any point gives the instantaneous rate. The rate decreases over time as reactants are consumed.
- **Volume vs. time (gas collection):** Curve rises and eventually levels off (reaction complete).
  The initial gradient gives the initial rate.

---

## Exothermic and Endothermic Reactions

### Exothermic Reactions

Energy is released to the surroundings. The products have less energy than the reactants.

$$\Delta H \lt 0$$

Examples: combustion, neutralisation, respiration.

### Endothermic Reactions

Energy is absorbed from the surroundings. The products have more energy than the reactants.

$$\Delta H \gt 0$$

Examples: thermal decomposition, photosynthesis.

### Enthalpy Change ($\Delta H$)

The enthalpy change is the heat energy change at constant pressure. It is measured in $\mathrm{kJ/mol}$.

$$\Delta H = H_{\mathrm{products}} - H_{\mathrm{reactants}}$$

---

## Enthalpy Level Diagrams

### Exothermic Reaction

```
Energy
  |
  |   Reactants
  |   -------         -------  Products
  |          \       /
  |           \     /   ΔH < 0
  |            \   /
  |             \_/
  |_______________
```

### Endothermic Reaction

```
Energy
  |               -------
  |              /  Products
  |             /    ΔH > 0
  |            /
  |   ------- /
  |  Reactants
  |_______________
```

---

## Standard Enthalpy Changes

| Type                            | Definition                                                      | Symbol     |
| ------------------------------- | --------------------------------------------------------------- | ---------- |
| Standard enthalpy of combustion | Enthalpy change when 1 mol of substance burns completely in O$_2$ | $\Delta H_c^\circ$ |
| Standard enthalpy of formation  | Enthalpy change when 1 mol of compound forms from its elements  | $\Delta H_f^\circ$ |
| Standard enthalpy of neutralisation | Enthalpy change when 1 mol of water forms from neutralisation | $\Delta H_n^\circ$ |

By convention: $\Delta H_f^\circ$ of an element in its standard state = 0.

---

## Hess's Law

Hess's law states that the enthalpy change of a reaction is independent of the route taken,
provided the initial and final conditions are the same.

This means that if a reaction can be expressed as the sum of two or more other reactions, the
enthalpy change of the overall reaction equals the sum of the enthalpy changes of the constituent
reactions.

### Worked Example 3

Calculate the standard enthalpy of combustion of carbon to form carbon dioxide, given:

$$\mathrm{C}(s) + \mathrm{O_2}(g) \to \mathrm{CO_2}(g) \quad \Delta H = ?$$

Given data:

$$\mathrm{C}(s) + \tfrac{1}{2}\mathrm{O_2}(g) \to \mathrm{CO}(g) \quad \Delta H = -111 \mathrm{ kJ/mol}$$

$$\mathrm{CO}(g) + \tfrac{1}{2}\mathrm{O_2}(g) \to \mathrm{CO_2}(g) \quad \Delta H = -283 \mathrm{ kJ/mol}$$

By Hess's law, add the two equations:

$$\mathrm{C}(s) + \mathrm{O_2}(g) \to \mathrm{CO_2}(g)$$

$$\Delta H = -111 + (-283) = -394 \mathrm{ kJ/mol}$$

### Worked Example 4

Using standard enthalpies of formation, calculate $\Delta H$ for:

$$\mathrm{CH_4}(g) + 2\mathrm{O_2}(g) \to \mathrm{CO_2}(g) + 2\mathrm{H_2O}(l)$$

Given:
- $\Delta H_f^\circ(\mathrm{CH_4}) = -75 \mathrm{ kJ/mol}$
- $\Delta H_f^\circ(\mathrm{CO_2}) = -394 \mathrm{ kJ/mol}$
- $\Delta H_f^\circ(\mathrm{H_2O}) = -286 \mathrm{ kJ/mol}$
- $\Delta H_f^\circ(\mathrm{O_2}) = 0 \mathrm{ kJ/mol}$

$$\Delta H = \sum \Delta H_f^\circ(\mathrm{products}) - \sum \Delta H_f^\circ(\mathrm{reactants})$$

$$\Delta H = [(-394) + 2(-286)] - [(-75) + 2(0)]$$

$$\Delta H = [-394 - 572] - [-75]$$

$$\Delta H = -966 + 75 = -891 \mathrm{ kJ/mol}$$

---

## Bond Energies

The **bond energy** (bond dissociation enthalpy) is the energy required to break one mole of a
particular bond in the gaseous state. Bond breaking is endothermic; bond forming is exothermic.

$$\Delta H = \sum \mathrm{bond energies broken} - \sum \mathrm{bond energies formed}$$

### Average Bond Energies

| Bond             | Energy (kJ/mol) |
| ---------------- | --------------- |
| $\mathrm{C - C}$ | 348             |
| $\mathrm{C = C}$ | 612             |
| $\mathrm{C - H}$ | 412             |
| $\mathrm{C - O}$ | 360             |
| $\mathrm{O - H}$ | 463             |
| $\mathrm{O = O}$ | 498             |
| $\mathrm{H - H}$ | 436             |

### Worked Example 5

Use bond energies to estimate the enthalpy change for the combustion of methane:

$$\mathrm{CH_4} + 2\mathrm{O_2} \to \mathrm{CO_2} + 2\mathrm{H_2O}$$

Bonds broken: $4 \times \mathrm{C - H} + 2 \times \mathrm{O = O}$

Bonds formed: $2 \times \mathrm{C = O}$ (in $\mathrm{CO_2}$) + $4 \times \mathrm{O - H}$ (in $2\mathrm{H_2O}$)

Energy absorbed (bonds broken):

$$4 \times 412 + 2 \times 498 = 1648 + 996 = 2644 \mathrm{ kJ/mol}$$

Energy released (bonds formed):

$$2 \times 743 + 4 \times 463 = 1486 + 1852 = 3338 \mathrm{ kJ/mol}$$

(Note: $\mathrm{C = O}$ in $\mathrm{CO_2}$ is $743 \mathrm{ kJ/mol}$.)

$$\Delta H = 2644 - 3338 = -694 \mathrm{ kJ/mol}$$

This is an estimate. The actual value ($-891 \mathrm{ kJ/mol}$) differs because bond energies are
average values.

---

## Calorimetry

Calorimetry measures the enthalpy change of a reaction by measuring the temperature change of the
surroundings (usually water).

### Formula

$$q = mc\Delta T$$

where:
- $q$ = heat energy transferred (J)
- $m$ = mass of solution ($\mathrm{g}$)
- $c$ = specific heat capacity of solution ($\approx 4.18 \mathrm{ J/(g \cdot K)}$ for water)
- $\Delta T$ = temperature change ($\mathrm{K}$ or $^\circ\mathrm{C}$)

The enthalpy change per mole:

$$\Delta H = \pm \frac{q}{n}$$

Use a positive sign for endothermic and a negative sign for exothermic reactions.

### Worked Example 6

$50.0 \mathrm{ cm^3}$ of $1.00 \mathrm{ mol/dm^3}$ $\mathrm{HCl}$ is mixed with $50.0 \mathrm{ cm^3}$
of $1.00 \mathrm{ mol/dm^3}$ $\mathrm{NaOH}$ in a polystyrene cup. The temperature rises from
$20.0^\circ\mathrm{C}$ to $26.7^\circ\mathrm{C}$. Calculate the enthalpy of neutralisation.

$$m = 50.0 + 50.0 = 100 \mathrm{ g}$$

$$\Delta T = 26.7 - 20.0 = 6.7^\circ\mathrm{C}$$

$$q = mc\Delta T = 100 \times 4.18 \times 6.7 = 2801 \mathrm{ J} = 2.80 \mathrm{ kJ}$$

$$n(\mathrm{H_2O}) = n(\mathrm{HCl}) = 1.00 \times 0.0500 = 0.0500 \mathrm{ mol}$$

$$\Delta H = -\frac{2.80}{0.0500} = -56.0 \mathrm{ kJ/mol}$$

The negative sign indicates an exothermic reaction.

---

## Activation Energy Profile Diagrams

An activation energy profile diagram shows the energy changes during a reaction:

- The peak represents the **transition state** (activated complex)
- The height from reactants to the peak is the **activation energy** $E_a$
- The difference in height between reactants and products is the **enthalpy change** $\Delta H$

### Effect of a Catalyst

A catalyst lowers the activation energy by providing an alternative pathway. Both the forward and
reverse activation energies are lowered, but $\Delta H$ remains unchanged.

---

## Common Pitfalls

- Confusing temperature and concentration effects. Temperature affects the proportion of
  successful collisions (by changing the energy distribution); concentration affects only the
  collision frequency.
- Assuming a catalyst changes $\Delta H$. A catalyst changes the rate but not the enthalpy change
  or the position of equilibrium.
- Forgetting that bond energy values are averages. They give estimated, not exact, enthalpy changes.
- In calorimetry, forgetting to account for the total mass of the solution (both reactant volumes).
- Using the wrong sign convention. Exothermic: $\Delta H \lt 0$. Endothermic: $\Delta H \gt 0$.
- Confusing the activation energy with the enthalpy change. $E_a$ is the energy barrier; $\Delta H$
  is the overall energy difference between products and reactants.

---

## Summary Table

| Concept             | Key Point                                              |
| ------------------- | ------------------------------------------------------ |
| Collision theory    | Effective collisions need sufficient energy + correct orientation |
| Activation energy   | Minimum energy for a successful collision               |
| Catalyst            | Lowers $E_a$, provides alternative pathway, not consumed |
| Exothermic          | $\Delta H \lt 0$, releases energy to surroundings      |
| Endothermic         | $\Delta H \gt 0$, absorbs energy from surroundings     |
| Hess's law          | $\Delta H$ is independent of the route                 |
| Bond energy calc    | $\Delta H = \sum E_{\mathrm{broken}} - \sum E_{\mathrm{formed}}$ |
| Calorimetry         | $q = mc\Delta T$                                       |

---

## Additional Worked Examples

### Worked Example: Rate from a Graph

The concentration of $\mathrm{H_2O_2}$ in a decomposition reaction was measured over time. At $t = 0$, $[\mathrm{H_2O_2}] = 0.80 \mathrm{ mol/dm^3}$. At $t = 60 \mathrm{ s}$, $[\mathrm{H_2O_2}] = 0.40 \mathrm{ mol/dm^3}$. Calculate the average rate of reaction in the first 60 seconds.

<details>
<summary>Solution</summary>

$$\mathrm{Rate} = \frac{\Delta[\mathrm{H_2O_2}]}{\Delta t} = \frac{0.80 - 0.40}{60 - 0} = \frac{0.40}{60} = 0.00667 \mathrm{ mol/(dm^3 \cdot s)}$$

The rate is positive when expressed in terms of the decrease in reactant concentration (the negative sign is often omitted when stated as "rate of disappearance").

</details>

### Worked Example: Hess's Law with Combustion Data

Using the following standard enthalpies of combustion, calculate $\Delta H_f^\circ$ for ethanol:

- $\Delta H_c^\circ(\mathrm{C}) = -394 \mathrm{ kJ/mol}$
- $\Delta H_c^\circ(\mathrm{H_2}) = -286 \mathrm{ kJ/mol}$
- $\Delta H_c^\circ(\mathrm{C_2H_5OH}) = -1367 \mathrm{ kJ/mol}$

<details>
<summary>Solution</summary>

Target: $2\mathrm{C}(s) + 3\mathrm{H_2}(g) + \tfrac{1}{2}\mathrm{O_2}(g) \to \mathrm{C_2H_5OH}(l)$

Using Hess's law: $\Delta H_f^\circ = \sum \Delta H_c^\circ(\mathrm{reactants}) - \Delta H_c^\circ(\mathrm{product})$

$$\Delta H_f^\circ = [2(-394) + 3(-286)] - [-1367]$$

$$\Delta H_f^\circ = [-788 - 858] - [-1367]$$

$$\Delta H_f^\circ = -1646 + 1367 = -279 \mathrm{ kJ/mol}$$

</details>

### Worked Example: Calorimetry with Combustion

$1.50 \mathrm{ g}$ of ethanol ($M = 46.0 \mathrm{ g/mol}$) is burned to heat $200 \mathrm{ g}$ of water from $20.0^\circ\mathrm{C}$ to $43.5^\circ\mathrm{C}$. Calculate the experimental enthalpy of combustion of ethanol.

<details>
<summary>Solution</summary>

$$q = mc\Delta T = 200 \times 4.18 \times (43.5 - 20.0) = 200 \times 4.18 \times 23.5 = 19646 \mathrm{ J} = 19.6 \mathrm{ kJ}$$

$$n(\mathrm{C_2H_5OH}) = \frac{1.50}{46.0} = 0.0326 \mathrm{ mol}$$

$$\Delta H_c = -\frac{19.6}{0.0326} = -601 \mathrm{ kJ/mol}$$

This is less exothermic than the literature value ($-1367 \mathrm{ kJ/mol}$) because significant heat is lost to the surroundings and the calorimeter in a school experiment.

</details>

---

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** Explain, using collision theory, why increasing the concentration of a solution
increases the rate of reaction.

Increasing concentration means more particles per unit volume. This increases the collision
frequency between reactant particles. Since a greater number of collisions occur per unit time, the
rate of reaction increases. The proportion of effective collisions remains the same because
temperature is unchanged.

**Question 2:** A student measures the rate of reaction between magnesium and dilute hydrochloric
acid by collecting the hydrogen gas produced. Suggest two ways to increase the initial rate.

1. Increase the concentration of the hydrochloric acid (increases collision frequency).
2. Use magnesium powder instead of magnesium ribbon (increases surface area, more particles exposed).

**Question 3:** Calculate $\Delta H$ for the reaction:

$$\mathrm{N_2}(g) + 3\mathrm{H_2}(g) \to 2\mathrm{NH_3}(g)$$

Given:
- $\Delta H_f^\circ(\mathrm{NH_3}) = -46 \mathrm{ kJ/mol}$
- $\Delta H_f^\circ(\mathrm{N_2}) = 0 \mathrm{ kJ/mol}$
- $\Delta H_f^\circ(\mathrm{H_2}) = 0 \mathrm{ kJ/mol}$

$$\Delta H = 2(-46) - [0 + 3(0)] = -92 \mathrm{ kJ/mol}$$

**Question 4:** Use bond energies to estimate $\Delta H$ for:

$$\mathrm{H_2} + \mathrm{Cl_2} \to 2\mathrm{HCl}$$

Bonds broken: $1 \times \mathrm{H - H} + 1 \times \mathrm{Cl - Cl}$

Bonds formed: $2 \times \mathrm{H - Cl}$

$$\Delta H = (436 + 243) - 2(432) = 679 - 864 = -185 \mathrm{ kJ/mol}$$

**Question 5:** When $4.00 \mathrm{ g}$ of $\mathrm{NaOH}$ ($M = 40 \mathrm{ g/mol}$) is dissolved
in $200 \mathrm{ g}$ of water, the temperature increases from $25.0^\circ\mathrm{C}$ to $31.0^\circ\mathrm{C}$.
Calculate the enthalpy of solution.

$$q = mc\Delta T = 200 \times 4.18 \times 6.0 = 5016 \mathrm{ J} = 5.02 \mathrm{ kJ}$$

$$n = 4.00/40 = 0.100 \mathrm{ mol}$$

$$\Delta H = -5.02/0.100 = -50.2 \mathrm{ kJ/mol}$$

(Negative because the dissolution is exothermic.)

**Question 6:** Draw a labelled activation energy profile diagram for an exothermic reaction in the
presence and absence of a catalyst.

The diagram should show:
- Two curves: uncatalysed (higher peak) and catalysed (lower peak)
- Both curves starting at the same reactant energy level
- Both curves ending at the same product energy level
- The difference between peaks = reduction in $E_a$ by the catalyst
- $\Delta H$ the same for both curves (product level below reactant level)

</details>

---

## Problem Set

**Problem 1:** Explain, using collision theory, why increasing the concentration of a reactant in solution increases the rate of reaction but does not change the activation energy.

*If you get this wrong, revise: Collision Theory and Factors Affecting Rate*

<details>
<summary>Solution</summary>

Increasing concentration means more particles per unit volume, increasing the collision frequency. More collisions per unit time means a higher rate. However, the minimum energy required for a successful collision ($E_a$) depends on the nature of the reactants and the bonds being broken, not on how many particles are present. Therefore, $E_a$ is unchanged.

</details>

**Problem 2:** A student measures the rate of $\mathrm{Mg} + 2\mathrm{HCl} \to \mathrm{MgCl_2} + \mathrm{H_2}$ by collecting gas. Suggest three ways to increase the initial rate.

*If you get this wrong, revise: Factors Affecting the Rate of Reaction*

<details>
<summary>Solution</summary>

1. Increase the concentration of $\mathrm{HCl}$ (more collisions per unit time)
2. Use magnesium powder instead of ribbon (greater surface area)
3. Increase the temperature (more particles have energy $\geqslant E_a$)
4. Add a suitable catalyst if available

Any three of the above.

</details>

**Problem 3:** Use standard enthalpies of formation to calculate $\Delta H$ for the combustion of propane:

$$\mathrm{C_3H_8}(g) + 5\mathrm{O_2}(g) \to 3\mathrm{CO_2}(g) + 4\mathrm{H_2O}(l)$$

Given: $\Delta H_f^\circ(\mathrm{C_3H_8}) = -104 \mathrm{ kJ/mol}$, $\Delta H_f^\circ(\mathrm{CO_2}) = -394 \mathrm{ kJ/mol}$, $\Delta H_f^\circ(\mathrm{H_2O}) = -286 \mathrm{ kJ/mol}$.

*If you get this wrong, revise: Hess's Law*

<details>
<summary>Solution</summary>

$$\Delta H = \sum \Delta H_f^\circ(\mathrm{products}) - \sum \Delta H_f^\circ(\mathrm{reactants})$$

$$\Delta H = [3(-394) + 4(-286)] - [(-104) + 5(0)]$$

$$\Delta H = [-1182 - 1144] - [-104]$$

$$\Delta H = -2326 + 104 = -2222 \mathrm{ kJ/mol}$$

</details>

**Problem 4:** Use bond energies to estimate $\Delta H$ for the reaction $\mathrm{N_2} + 3\mathrm{H_2} \to 2\mathrm{NH_3}$.

Given: $\mathrm{N \equiv N} = 945 \mathrm{ kJ/mol}$, $\mathrm{H - H} = 436 \mathrm{ kJ/mol}$, $\mathrm{N - H} = 391 \mathrm{ kJ/mol}$.

*If you get this wrong, revise: Bond Energies*

<details>
<summary>Solution</summary>

Bonds broken: $1 \times \mathrm{N \equiv N} + 3 \times \mathrm{H - H} = 945 + 3(436) = 945 + 1308 = 2253 \mathrm{ kJ/mol}$

Bonds formed: $6 \times \mathrm{N - H} = 6(391) = 2346 \mathrm{ kJ/mol}$

$$\Delta H = 2253 - 2346 = -93 \mathrm{ kJ/mol}$$

The reaction is exothermic (actual value: $-92 \mathrm{ kJ/mol}$).

</details>

**Problem 5:** When $50.0 \mathrm{ cm^3}$ of $1.00 \mathrm{ mol/dm^3}$ $\mathrm{HCl}$ is mixed with $50.0 \mathrm{ cm^3}$ of $1.00 \mathrm{ mol/dm^3}$ $\mathrm{NaOH}$ in a polystyrene cup, the temperature rises by $6.7^\circ\mathrm{C}$. Calculate the enthalpy of neutralisation per mole of water formed.

*If you get this wrong, revise: Calorimetry*

<details>
<summary>Solution</summary>

$$m = 50.0 + 50.0 = 100 \mathrm{ g}$$

$$q = mc\Delta T = 100 \times 4.18 \times 6.7 = 2801 \mathrm{ J} = 2.80 \mathrm{ kJ}$$

$$n(\mathrm{H_2O}) = 1.00 \times 0.0500 = 0.0500 \mathrm{ mol}$$

$$\Delta H = -\frac{2.80}{0.0500} = -56.0 \mathrm{ kJ/mol}$$

The negative sign indicates the reaction is exothermic.

</details>

**Problem 6:** Explain why a catalyst increases the rate of a reaction but does not change the enthalpy change of the reaction.

*If you get this wrong, revise: Activation Energy Profile Diagrams*

<details>
<summary>Solution</summary>

A catalyst provides an alternative pathway with a lower activation energy, so more particles have energy $\geqslant E_a$ and a greater proportion of collisions are effective. However, the catalyst does not change the energy levels of the reactants or products -- it only changes the energy barrier between them. Since $\Delta H$ depends only on the initial and final energy levels, it remains unchanged.

</details>

**Problem 7:** The enthalpy change for $\mathrm{C}(s) + \mathrm{O_2}(g) \to \mathrm{CO_2}(g)$ is $-394 \mathrm{ kJ/mol}$. The enthalpy change for $\mathrm{C}(s) + \tfrac{1}{2}\mathrm{O_2}(g) \to \mathrm{CO}(g)$ is $-111 \mathrm{ kJ/mol}$ and for $\mathrm{CO}(g) + \tfrac{1}{2}\mathrm{O_2}(g) \to \mathrm{CO_2}(g)$ is $-283 \mathrm{ kJ/mol}$. Show that these data are consistent with Hess's law.

*If you get this wrong, revise: Hess's Law*

<details>
<summary>Solution</summary>

Adding the two steps:

$$\mathrm{C}(s) + \tfrac{1}{2}\mathrm{O_2}(g) \to \mathrm{CO}(g) \quad \Delta H_1 = -111 \mathrm{ kJ/mol}$$

$$\mathrm{CO}(g) + \tfrac{1}{2}\mathrm{O_2}(g) \to \mathrm{CO_2}(g) \quad \Delta H_2 = -283 \mathrm{ kJ/mol}$$

Overall: $\mathrm{C}(s) + \mathrm{O_2}(g) \to \mathrm{CO_2}(g) \quad \Delta H = -111 + (-283) = -394 \mathrm{ kJ/mol}$

This matches the direct route, confirming Hess's law.

</details>

**Problem 8:** $2.00 \mathrm{ g}$ of $\mathrm{CaO}$ is added to $100 \mathrm{ g}$ of water. The temperature rises from $20.0^\circ\mathrm{C}$ to $35.5^\circ\mathrm{C}$. Calculate the enthalpy of solution of $\mathrm{CaO}$.

*If you get this wrong, revise: Calorimetry*

<details>
<summary>Solution</summary>

$$q = mc\Delta T = 100 \times 4.18 \times (35.5 - 20.0) = 100 \times 4.18 \times 15.5 = 6479 \mathrm{ J} = 6.48 \mathrm{ kJ}$$

$$n(\mathrm{CaO}) = \frac{2.00}{56.1} = 0.0356 \mathrm{ mol}$$

$$\Delta H = -\frac{6.48}{0.0356} = -182 \mathrm{ kJ/mol}$$

The dissolution of $\mathrm{CaO}$ is highly exothermic.

</details>

**Problem 9:** Explain why the rate of reaction between magnesium and dilute hydrochloric acid decreases as the reaction proceeds.

*If you get this wrong, revise: Measuring Reaction Rate*

<details>
<summary>Solution</summary>

As the reaction proceeds, the concentration of the reactants ($\mathrm{HCl}$ and $\mathrm{Mg}$) decreases. Lower concentration means fewer particles per unit volume and fewer collisions per unit time. The rate of reaction is proportional to the collision frequency, so the rate decreases. This is seen as a decreasing gradient on a concentration-vs-time graph.

</details>

**Problem 10:** Use bond energies to estimate $\Delta H$ for: $\mathrm{CH_4} + \mathrm{Cl_2} \to \mathrm{CH_3Cl} + \mathrm{HCl}$

Given: $\mathrm{C - H} = 412$, $\mathrm{Cl - Cl} = 243$, $\mathrm{C - Cl} = 328$, $\mathrm{H - Cl} = 432 \mathrm{ kJ/mol}$.

*If you get this wrong, revise: Bond Energies*

<details>
<summary>Solution</summary>

Bonds broken: $1 \times \mathrm{C - H} + 1 \times \mathrm{Cl - Cl} = 412 + 243 = 655 \mathrm{ kJ/mol}$

Bonds formed: $1 \times \mathrm{C - Cl} + 1 \times \mathrm{H - Cl} = 328 + 432 = 760 \mathrm{ kJ/mol}$

$$\Delta H = 655 - 760 = -105 \mathrm{ kJ/mol}$$

The reaction is exothermic.

</details>
