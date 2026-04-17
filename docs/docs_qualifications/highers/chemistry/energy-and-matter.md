---
title: Energy and Matter
date: 2026-04-14
tags:
  - Chemistry
  - Highers
categories:
  - Chemistry
slug: energy-and-matter
---

# Energy and Matter

## Higher Energetics

### Enthalpy Changes

**Enthalpy ($H$):** The heat content of a system at constant pressure.

**Standard enthalpy change of reaction ($\Delta H_r^\circ$):** The enthalpy change when molar
quantities of reactants as stated in the equation react under standard conditions (298 K, 100 kPa).

**Exothermic:** $\Delta H < 0$ (energy released to surroundings).

**Endothermic:** $\Delta H > 0$ (energy absorbed from surroundings).

### Types of Enthalpy Change

| Symbol                         | Name                                | Definition                                                                        |
| ------------------------------ | ----------------------------------- | --------------------------------------------------------------------------------- |
| $\Delta H_f^\circ$             | Standard enthalpy of formation      | Enthalpy change when 1 mol of compound forms from its elements in standard states |
| $\Delta H_c^\circ$             | Standard enthalpy of combustion     | Enthalpy change when 1 mol of substance burns completely in oxygen                |
| $\Delta H_{\text{neut}}^\circ$ | Standard enthalpy of neutralisation | Enthalpy change when 1 mol of water forms from acid-base neutralisation           |
| $\Delta H_{\text{at}}$         | Enthalpy of atomisation             | Enthalpy change to form 1 mol of gaseous atoms from an element                    |

### Hess's Law

Hess's Law states that the enthalpy change of a reaction is independent of the route taken, provided
the initial and final conditions are the same.

$$\Delta H_1 = \Delta H_2 + \Delta H_3$$

**Proof of Hess's Law:**

Enthalpy is a state function, meaning it depends only on the initial and final states, not on the
pathway. Since enthalpy is defined as $H = U + pV$ and $U$ (internal energy) and $pV$ are both state
functions, $H$ must also be a state function. Therefore, any path between the same initial and final
states must give the same $\Delta H$.

**Worked Example 1:** Calculate $\Delta H_f^\circ$ for $\text{CH}_4$ given:

$$\text{C(s)} + \text{O}_2\text{(g)} \to \text{CO}_2\text{(g)} \quad \Delta H = -393.5 \text{ kJ/mol}$$

$$\text{H}_2\text{(g)} + \tfrac{1}{2}\text{O}_2\text{(g)} \to \text{H}_2\text{O(l)} \quad \Delta H = -285.8 \text{ kJ/mol}$$

$$\text{CH}_4\text{(g)} + 2\text{O}_2\text{(g)} \to \text{CO}_2\text{(g)} + 2\text{H}_2\text{O(l)} \quad \Delta H = -890.3 \text{ kJ/mol}$$

Using Hess's Law (elements $\to$ products via two routes):

$$\Delta H_f(\text{CH}_4) + (-890.3) = -393.5 + 2(-285.8)$$

$$\Delta H_f(\text{CH}_4) = -393.5 - 571.6 + 890.3 = -74.8 \text{ kJ/mol}$$

**Worked Example 2:** Calculate $\Delta H_f^\circ$ for $\text{CS}_2$ given:

$$\text{C(s)} + \text{O}_2\text{(g)} \to \text{CO}_2\text{(g)} \quad \Delta H = -393.5 \text{ kJ/mol}$$

$$\text{S(s)} + \text{O}_2\text{(g)} \to \text{SO}_2\text{(g)} \quad \Delta H = -296.8 \text{ kJ/mol}$$

$$\text{CS}_2\text{(l)} + 3\text{O}_2\text{(g)} \to \text{CO}_2\text{(g)} + 2\text{SO}_2\text{(g)} \quad \Delta H = -1075 \text{ kJ/mol}$$

Route 1: $\text{C} + 2\text{S} \to \text{CS}_2$ (direct, $\Delta H_f$) Route 2:
$\text{C} + \text{O}_2 \to \text{CO}_2$ and $2\text{S} + 2\text{O}_2 \to 2\text{SO}_2$, then
$\text{CO}_2 + 2\text{SO}_2 \to \text{CS}_2 + 3\text{O}_2$ (reverse the combustion)

$$\Delta H_f = -393.5 + 2(-296.8) - (-1075) = -393.5 - 593.6 + 1075 = 87.9 \text{ kJ/mol}$$

### Calorimetry

**Enthalpy of combustion:**

$$q = mc\Delta T$$

where $m$ is mass of water, $c$ is specific heat capacity ($4.18 \text{ J g}^{-1}\text{K}^{-1}$),
and $\Delta T$ is temperature change.

**Worked Example 3:** When $1.50 \text{ g}$ of ethanol is burned, it raises the temperature of
$200 \text{ g}$ of water by $14.2°C$. Calculate the enthalpy of combustion.

$$q = 200 \times 4.18 \times 14.2 = 11871.2 \text{ J} = 11.87 \text{ kJ}$$

$$n(\text{ethanol}) = \frac{1.50}{46.07} = 0.03256 \text{ mol}$$

$$\Delta H_c = -\frac{11.87}{0.03256} = -364.7 \text{ kJ/mol}$$

(The negative sign indicates exothermic.)

**Worked Example 4:** $0.80 \text{ g}$ of ethanol ($M_r = 46$) raised the temperature of
$150 \text{ g}$ of water by $10.5°C$. Calculate $\Delta H_c$ and suggest why this differs from the
literature value of $-1367 \text{ kJ/mol}$.

$$q = 150 \times 4.18 \times 10.5 = 6583.5 \text{ J} = 6.58 \text{ kJ}$$

$$n = \frac{0.80}{46} = 0.0174 \text{ mol}$$

$$\Delta H_c = -\frac{6.58}{0.0174} = -378 \text{ kJ/mol}$$

This is much less exothermic than the literature value because of:

- Heat loss to the surroundings (calorimeter is not perfectly insulated)
- Incomplete combustion of ethanol
- Not all heat was transferred to the water (some heated the calorimeter itself)

### Enthalpy of Neutralisation

**Worked Example 5:** $25.0 \text{ cm}^3$ of $1.0 \text{ M}$ HCl is mixed with $25.0 \text{ cm}^3$
of $1.0 \text{ M}$ NaOH. The temperature rises by $6.8°C$. Calculate the enthalpy of neutralisation.

$$q = 50.0 \times 4.18 \times 6.8 = 1421.2 \text{ J} = 1.42 \text{ kJ}$$

$$n = 1.0 \times 0.0250 = 0.0250 \text{ mol}$$

$$\Delta H_{\text{neut}} = -\frac{1.42}{0.0250} = -56.8 \text{ kJ/mol}$$

---

## Chemical Equilibrium

### Dynamic Equilibrium

In a **reversible reaction**, when the rate of the forward reaction equals the rate of the reverse
reaction, the system is at **dynamic equilibrium**.

$$aA + bB \rightleftharpoons cC + dD$$

**Conditions for dynamic equilibrium:**

1. The reaction must be reversible
2. The system must be closed (no matter can enter or leave)
3. The temperature must be constant
4. Macroscopic properties (concentration, colour, pressure) remain constant

### Le Chatelier's Principle

If a system at equilibrium is subjected to a change, the system adjusts to **oppose** that change.

| Change                             | Effect                                                            |
| ---------------------------------- | ----------------------------------------------------------------- |
| Increase concentration of reactant | Equilibrium shifts right (products)                               |
| Increase pressure                  | Shifts towards fewer gas moles                                    |
| Increase temperature               | Shifts in the endothermic direction                               |
| Add catalyst                       | No effect on position; increases rate of both forward and reverse |

**Example:** For the Haber process:
$\text{N}_2 + 3\text{H}_2 \rightleftharpoons 2\text{NH}_3 \quad \Delta H = -92 \text{ kJ/mol}$.

- High pressure favours $\text{NH}_3$ (4 moles $\to$ 2 moles of gas)
- Low temperature favours $\text{NH}_3$ (exothermic), but slow rate
- Compromise: moderate temperature (~450°C), high pressure (~200 atm), iron catalyst

**Worked Example 6:** Explain the effect of increasing pressure on the equilibrium
$\text{N}_2\text{O}_4\text{(g)} \rightleftharpoons 2\text{NO}_2\text{(g)}$.

The forward reaction produces 2 moles of gas from 1 mole. Increasing pressure favours the side with
fewer gas moles, so the equilibrium shifts to the left, favouring $\text{N}_2\text{O}_4$. The
mixture becomes paler (less brown $\text{NO}_2$ gas).

### Equilibrium Constant ($K_c$)

For the reaction $aA + bB \rightleftharpoons cC + dD$:

$$K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

where square brackets denote equilibrium concentrations in $\text{mol/L}$.

**Key points about $K_c$:**

- $K_c$ is only affected by temperature, not by concentration, pressure, or catalysts
- A large $K_c$ ($\gt 10^3$) means products are favoured
- A small $K_c$ ($\lt 10^{-3}$) means reactants are favoured
- Pure solids and pure liquids are NOT included in the $K_c$ expression

**Worked Example 7:** For $\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}$, at equilibrium
the concentrations are $[\text{H}_2] = 0.22$, $[\text{I}_2] = 0.22$,
$[\text{HI}] = 1.56 \text{ mol/L}$. Find $K_c$.

$$K_c = \frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]} = \frac{(1.56)^2}{(0.22)(0.22)} = \frac{2.4336}{0.0484} = 50.3$$

**Worked Example 8:** $2.0 \text{ mol}$ of $\text{SO}_2$ and $1.0 \text{ mol}$ of $\text{O}_2$ are
placed in a $1.0 \text{ L}$ flask at equilibrium. If $1.4 \text{ mol}$ of $\text{SO}_3$ forms, find
$K_c$ for $\text{2SO}_2 + \text{O}_2 \rightleftharpoons 2\text{SO}_3$.

|             | $\text{SO}_2$ | $\text{O}_2$ | $\text{SO}_3$ |
| ----------- | ------------- | ------------ | ------------- |
| Initial     | 2.0           | 1.0          | 0             |
| Change      | -1.4          | -0.7         | +1.4          |
| Equilibrium | 0.6           | 0.3          | 1.4           |

$$K_c = \frac{[\text{SO}_3]^2}{[\text{SO}_2]^2[\text{O}_2]} = \frac{(1.4)^2}{(0.6)^2(0.3)} = \frac{1.96}{0.108} = 18.15$$

**Worked Example 9:** $1.0 \text{ mol}$ of $\text{PCl}_5$ is placed in a $5.0 \text{ L}$ container.
At equilibrium, $0.3 \text{ mol}$ has dissociated:
$\text{PCl}_5 \rightleftharpoons \text{PCl}_3 + \text{Cl}_2$. Find $K_c$.

|             | $\text{PCl}_5$ | $\text{PCl}_3$ | $\text{Cl}_2$ |
| ----------- | -------------- | -------------- | ------------- |
| Initial     | 1.0            | 0              | 0             |
| Change      | -0.3           | +0.3           | +0.3          |
| Equilibrium | 0.7            | 0.3            | 0.3           |

Concentrations (divide by $V = 5.0$ L): $[\text{PCl}_5] = 0.14$, $[\text{PCl}_3] = 0.06$,
$[\text{Cl}_2] = 0.06 \text{ mol/L}$.

$$K_c = \frac{[\text{PCl}_3][\text{Cl}_2]}{[\text{PCl}_5]} = \frac{(0.06)(0.06)}{0.14} = \frac{0.0036}{0.14} = 0.0257$$

---

## Advanced Higher Equilibrium

### Equilibrium Constant and Gibbs Free Energy

$$\Delta G^\circ = -RT\ln K$$

where $R = 8.314 \text{ J mol}^{-1}\text{K}^{-1}$, $T$ is temperature in Kelvin.

**Derivation:**

Starting from the thermodynamic relationship $\Delta G = \Delta G^\circ + RT\ln Q$ (where $Q$ is the
reaction quotient), at equilibrium $\Delta G = 0$ and $Q = K$, giving:

$$0 = \Delta G^\circ + RT\ln K \implies \Delta G^\circ = -RT\ln K$$

- $\Delta G^\circ < 0$: $K > 1$, reaction favours products
- $\Delta G^\circ > 0$: $K < 1$, reaction favours reactants
- $\Delta G^\circ = 0$: $K = 1$, system at equilibrium

**Worked Example 10:** Calculate $K$ at $298 \text{ K}$ for a reaction with
$\Delta G^\circ = -15.2 \text{ kJ/mol}$.

$$\Delta G^\circ = -RT\ln K \implies -15200 = -8.314 \times 298 \times \ln K$$

$$\ln K = \frac{15200}{8.314 \times 298} = \frac{15200}{2477.6} = 6.135$$

$$K = e^{6.135} = 461$$

### van't Hoff Equation

$$\ln\left(\frac{K_2}{K_1}\right) = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

This relates the equilibrium constant at two different temperatures.

**Derivation:**

Starting from $\Delta G^\circ = -RT\ln K$ and $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$:

$$-RT\ln K = \Delta H^\circ - T\Delta S^\circ$$

$$\ln K = -\frac{\Delta H^\circ}{RT} + \frac{\Delta S^\circ}{R}$$

Assuming $\Delta H^\circ$ and $\Delta S^\circ$ are temperature-independent over the range of
interest, differentiating with respect to $T$:

$$\frac{d\ln K}{dT} = \frac{\Delta H^\circ}{RT^2}$$

Integrating from $T_1$ to $T_2$:

$$\ln\left(\frac{K_2}{K_1}\right) = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

---

## Kinetics

### Collision Theory

For a reaction to occur:

1. Particles must collide
2. They must collide with sufficient energy (greater than or equal to the activation energy, $E_a$)
3. They must collide with the correct orientation

### Maxwell-Boltzmann Distribution

At any temperature, molecules have a range of kinetic energies. The Maxwell-Boltzmann distribution
shows that:

- Most molecules have energies close to the average
- Few molecules have very low or very high energies
- Increasing temperature shifts the curve to the right and increases the proportion of molecules
  with energy above $E_a$

**Effect of temperature:** A small increase in temperature significantly increases the fraction of
molecules with energy above $E_a$, because the distribution is exponential. A $10^\circ\mathrm{C}$ rise typically
doubles the rate.

**Effect of a catalyst:** A catalyst provides an alternative reaction pathway with a lower
activation energy. It does not change the distribution of molecular energies but lowers the
threshold, meaning more molecules have sufficient energy to react.

### Factors Affecting Rate

| Factor        | Effect         | Explanation                                              |
| ------------- | -------------- | -------------------------------------------------------- |
| Concentration | Increases rate | More particles per unit volume, more frequent collisions |
| Temperature   | Increases rate | More particles have energy $\geq E_a$                    |
| Surface area  | Increases rate | More particles exposed for collision                     |
| Catalyst      | Increases rate | Provides alternative pathway with lower $E_a$            |

### Rate Equation

For a reaction $aA + bB \to \text{products}$:

$$\text{Rate} = k[A]^m[B]^n$$

where $m$ and $n$ are the **orders of reaction** with respect to A and B, and $k$ is the **rate
constant**.

The overall order is $m + n$.

**Units of $k$:** Depend on the overall order.

| Overall order | Units of $k$                     |
| ------------- | -------------------------------- |
| 0             | $\text{mol L}^{-1}\text{s}^{-1}$ |
| 1             | $\text{s}^{-1}$                  |
| 2             | $\text{L mol}^{-1}\text{s}^{-1}$ |

**Worked Example 11:** For the reaction $\text{A} + 2\text{B} \to \text{C}$, the rate equation is
$\text{Rate} = k[\text{A}][\text{B}]^2$. If $[\text{A}]$ doubles and $[\text{B}]$ triples, by what
factor does the rate change?

New rate
$= k(2[\text{A}])(3[\text{B}])^2 = k \times 2[\text{A}] \times 9[\text{B}]^2 = 18 \times k[\text{A}][\text{B}]^2$.

The rate increases by a factor of 18.

### Determining Rate Equations Experimentally

**Method of initial rates:** Vary the concentration of one reactant while keeping others constant.
Measure the initial rate and determine the order with respect to each reactant.

**Worked Example 12:** Given the following data for the reaction
$\text{A} + \text{B} \to \text{products}$:

| Experiment | $[\text{A}]$ (M) | $[\text{B}]$ (M) | Initial rate (M/s)   |
| ---------- | ---------------- | ---------------- | -------------------- |
| 1          | 0.10             | 0.10             | $1.2 \times 10^{-3}$ |
| 2          | 0.20             | 0.10             | $2.4 \times 10^{-3}$ |
| 3          | 0.10             | 0.20             | $4.8 \times 10^{-3}$ |

From experiments 1 and 2: doubling $[\text{A}]$ doubles the rate, so order with respect to
$\text{A}$ is 1. From experiments 1 and 3: doubling $[\text{B}]$ quadruples the rate, so order with
respect to $\text{B}$ is 2.

Rate equation: $\text{Rate} = k[\text{A}][\text{B}]^2$

$$k = \frac{\text{Rate}}{[\text{A}][\text{B}]^2} = \frac{1.2 \times 10^{-3}}{(0.10)(0.10)^2} = \frac{1.2 \times 10^{-3}}{0.001} = 1.2 \text{ L}^2\text{mol}^{-2}\text{s}^{-1}$$

### Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

$$\ln k = \ln A - \frac{E_a}{RT}$$

A plot of $\ln k$ vs. $1/T$ gives a straight line with gradient $-E_a/R$ and y-intercept $\ln A$.

**Derivation of the Arrhenius equation:**

The Arrhenius equation arises from the observation that the rate constant depends exponentially on
temperature. The factor $e^{-E_a/RT}$ represents the fraction of collisions with energy $\geq E_a$.
The pre-exponential factor $A$ (frequency factor) accounts for the frequency of collisions and the
orientation factor.

**Worked Example 13:** The rate constant of a reaction at $300 \text{ K}$ is
$2.5 \times 10^{-3} \text{ s}^{-1}$ and at $350 \text{ K}$ is $4.2 \times 10^{-2} \text{ s}^{-1}$.
Find the activation energy.

$$\ln\left(\frac{4.2 \times 10^{-2}}{2.5 \times 10^{-3}}\right) = -\frac{E_a}{8.314}\left(\frac{1}{350} - \frac{1}{300}\right)$$

$$\ln(16.8) = -\frac{E_a}{8.314}\left(0.002857 - 0.003333\right)$$

$$2.821 = -\frac{E_a}{8.314}(-0.000476)$$

$$2.821 = \frac{E_a \times 0.000476}{8.314}$$

$$E_a = \frac{2.821 \times 8.314}{0.000476} = 49239 \text{ J/mol} \approx 49.2 \text{ kJ/mol}$$

**Worked Example 14:** The activation energy of a reaction is $75 \text{ kJ/mol}$. If the rate
constant at $300 \text{ K}$ is $3.0 \times 10^{-4} \text{ s}^{-1}$, find the rate constant at
$350 \text{ K}$.

$$\ln\left(\frac{k_2}{3.0 \times 10^{-4}}\right) = -\frac{75000}{8.314}\left(\frac{1}{350} - \frac{1}{300}\right)$$

$$\ln\left(\frac{k_2}{3.0 \times 10^{-4}}\right) = -9020 \times (-0.000476) = 4.294$$

$$\frac{k_2}{3.0 \times 10^{-4}} = e^{4.294} = 73.2$$

$$k_2 = 73.2 \times 3.0 \times 10^{-4} = 2.20 \times 10^{-2} \text{ s}^{-1}$$

---

## Catalysts in Detail

### Types of Catalysts

| Type          | Description                    | Example                                            |
| ------------- | ------------------------------ | -------------------------------------------------- |
| Homogeneous   | Same phase as reactants        | $\text{H}_2\text{SO}_4$ in esterification          |
| Heterogeneous | Different phase from reactants | Fe in Haber process, V$_2$O$_5$ in Contact process |
| Enzyme        | Biological catalysts           | Catalase, amylase                                  |

### How Catalysts Work

A catalyst provides an alternative reaction pathway with a lower activation energy. It does this by:

1. Forming an intermediate with the reactant(s)
2. The intermediate then decomposes to give products and regenerates the catalyst

**Example:** In the Haber process, iron catalyses the reaction by adsorbing $\text{N}_2$ and
$\text{H}_2$ onto its surface. The bonds in $\text{N}_2$ are weakened, allowing hydrogen atoms to
add step-by-step at lower energy than the uncatalysed reaction.

### Energy Profile Diagrams

For an exothermic reaction:

```
Energy
  ^
  |         ___
  |        /   \        Products (lower energy)
  |  ___  /     \___
  | /   \/           \___   Reactants
  |/   Ea(catalysed)      \___
  |        Ea(uncatalysed)
  +---------------------------------> Reaction progress
```

The catalysed pathway has a lower peak ($E_a$ reduced) but the same overall $\Delta H$.

---

## Summary Table: Energetics and Kinetics

| Concept              | Symbol/Formula                                                            | Notes                                 |
| -------------------- | ------------------------------------------------------------------------- | ------------------------------------- |
| Hess's Law           | $\Delta H_{\text{total}} = \Sigma \Delta H_{\text{steps}}$                | State function principle              |
| Calorimetry          | $q = mc\Delta T$                                                          | Assumes no heat loss                  |
| Equilibrium constant | $K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$                                     | Temperature-dependent only            |
| Gibbs free energy    | $\Delta G^\circ = -RT\ln K$                                               | Relates thermodynamics to equilibrium |
| Rate equation        | $\text{Rate} = k[A]^m[B]^n$                                               | Orders determined experimentally      |
| Arrhenius equation   | $k = Ae^{-E_a/RT}$                                                        | Plot $\ln k$ vs. $1/T$                |
| van't Hoff equation  | $\ln(K_2/K_1) = -\frac{\Delta H^\circ}{R}(\frac{1}{T_2} - \frac{1}{T_1})$ | Relates $K$ at two temperatures       |

---

## Common Pitfalls

1. **Hess's Law sign conventions:** When reversing a reaction, reverse the sign of $\Delta H$.

2. **Calorimetry heat losses:** Real experiments lose heat to surroundings, so calculated values are
   less exothermic than literature values.

3. **Le Chatelier's Principle:** A catalyst does NOT shift the equilibrium position; it only speeds
   up reaching equilibrium.

4. **Units of $K_c$:** Always include units, which depend on the stoichiometry of the reaction.

5. **Rate order vs. stoichiometric coefficient:** The order of reaction is determined
   experimentally, not from the balanced equation.

6. **Exothermic vs. endothermic:** Remember that $\Delta H$ refers to the system. Exothermic means
   the system loses energy ($\Delta H < 0$).

7. **Equilibrium concentrations:** Use the ICE table method (Initial, Change, Equilibrium)
   consistently to avoid errors.

---

## Practice Questions

1. Calculate the standard enthalpy of formation of $\text{CS}_2$ given:
   - $\text{C(s)} + \text{O}_2\text{(g)} \to \text{CO}_2\text{(g)}$,
     $\Delta H = -393.5 \text{ kJ/mol}$
   - $\text{S(s)} + \text{O}_2\text{(g)} \to \text{SO}_2\text{(g)}$,
     $\Delta H = -296.8 \text{ kJ/mol}$
   - $\text{CS}_2\text{(l)} + 3\text{O}_2\text{(g)} \to \text{CO}_2\text{(g)} + 2\text{SO}_2\text{(g)}$,
     $\Delta H = -1075 \text{ kJ/mol}$

2. Explain the effect of increasing pressure on the equilibrium
   $\text{N}_2\text{O}_4\text{(g)} \rightleftharpoons 2\text{NO}_2\text{(g)}$.

3. For the reaction $\text{A} + 2\text{B} \to \text{C}$, the rate equation is
   $\text{Rate} = k[\text{A}][\text{B}]^2$. If $[\text{A}]$ doubles and $[\text{B}]$ triples, by
   what factor does the rate change?

4. The activation energy of a reaction is $75 \text{ kJ/mol}$. If the rate constant at
   $300 \text{ K}$ is $3.0 \times 10^{-4} \text{ s}^{-1}$, find the rate constant at
   $350 \text{ K}$.

5. $1.0 \text{ mol}$ of $\text{PCl}_5$ is placed in a $5.0 \text{ L}$ container. At equilibrium,
   $0.3 \text{ mol}$ has dissociated: $\text{PCl}_5 \rightleftharpoons \text{PCl}_3 + \text{Cl}_2$.
   Find $K_c$.

6. Explain why a catalyst increases the rate of a reaction without being consumed.

7. In a calorimetry experiment, $0.80 \text{ g}$ of ethanol ($M_r = 46$) raised the temperature of
   $150 \text{ g}$ of water by $10.5°C$. Calculate $\Delta H_c$ and suggest why this value differs
   from the literature value of $-1367 \text{ kJ/mol}$.

8. Given $\Delta G^\circ = -RT\ln K$, calculate $K$ at $298 \text{ K}$ for a reaction with
   $\Delta G^\circ = -15.2 \text{ kJ/mol}$.

9. Using the following data, determine the rate equation and the value of $k$:

   | Experiment | $[\text{P}]$ (M) | $[\text{Q}]$ (M) | Initial rate (M/s)   |
   | ---------- | ---------------- | ---------------- | -------------------- |
   | 1          | 0.20             | 0.10             | $4.0 \times 10^{-4}$ |
   | 2          | 0.40             | 0.10             | $8.0 \times 10^{-4}$ |
   | 3          | 0.20             | 0.20             | $4.0 \times 10^{-4}$ |
   | 4          | 0.40             | 0.20             | $8.0 \times 10^{-4}$ |

10. Sketch an energy profile diagram for an endothermic reaction, showing the effect of adding a
    catalyst. Label the activation energies, $\Delta H$, and the transition state.

11. For the equilibrium
    $\text{CO(g)} + \text{H}_2\text{O(g)} \rightleftharpoons \text{CO}_2\text{(g)} + \text{H}_2\text{(g)}$
    $\Delta H = -41 \text{ kJ/mol}$, explain how increasing temperature affects the yield of
    $\text{CO}_2$ and the value of $K_c$.

12. Calculate the enthalpy of neutralisation when $30.0 \text{ cm}^3$ of $0.50 \text{ M}$ HCl is
    mixed with $30.0 \text{ cm}^3$ of $0.50 \text{ M}$ NaOH, producing a temperature rise of
    $3.2°C$.

---

## Advanced Calorimetry: Solution Calorimetry vs. Bomb Calorimetry

### Solution Calorimetry

Used for reactions occurring in solution. The calorimeter itself also absorbs heat:

$$q_{\text{total}} = (m_{\text{water}}c_{\text{water}} + C_{\text{cal}})\Delta T$$

where $C_{\text{cal}}$ is the heat capacity of the calorimeter (in J/K).

**Worked Example 15:** A calorimeter has heat capacity $45 \text{ J/K}$. When $50 \text{ cm}^3$ of
$1.0 \text{ M}$ $\text{HCl}$ is mixed with $50 \text{ cm}^3$ of $1.0 \text{ M}$ $\text{NaOH}$ in the
calorimeter, the temperature rises by $6.5°C$. Calculate the enthalpy of neutralisation.

$$q_{\text{total}} = (100 \times 4.18 + 45) \times 6.5 = (418 + 45) \times 6.5 = 463 \times 6.5 = 3009.5 \text{ J} = 3.01 \text{ kJ}$$

$$n = 1.0 \times 0.050 = 0.050 \text{ mol}$$

$$\Delta H_{\text{neut}} = -\frac{3.01}{0.050} = -60.2 \text{ kJ/mol}$$

### Bomb Calorimetry

Used for combustion reactions. The sample is ignited in a sealed container (bomb) surrounded by
water. The bomb calorimeter is designed to operate at constant volume, so the heat measured is
$\Delta U$ (internal energy change), not $\Delta H$. The correction is:

$$\Delta H = \Delta U + \Delta n_g RT$$

where $\Delta n_g$ is the change in moles of gas.

---

## Temperature Dependence of Equilibrium in Detail

**Worked Example 16:** For the reaction
$\text{N}_2\text{O}_4\text{(g)} \rightleftharpoons 2\text{NO}_2\text{(g)}$,
$\Delta H^\circ = +57.2 \text{ kJ/mol}$ and $K_c = 0.115$ at $298 \text{ K}$. Find $K_c$ at
$350 \text{ K}$.

Using the van't Hoff equation:

$$\ln\left(\frac{K_2}{0.115}\right) = -\frac{57200}{8.314}\left(\frac{1}{350} - \frac{1}{298}\right)$$

$$= -6879 \times (0.002857 - 0.003356) = -6879 \times (-0.000499) = 3.432$$

$$\frac{K_2}{0.115} = e^{3.432} = 30.94$$

$$K_2 = 30.94 \times 0.115 = 3.56$$

The equilibrium constant increases significantly with temperature, confirming that the forward
reaction is endothermic (Le Chatelier's principle).

---

## Rate-Determining Step and Reaction Mechanisms

For a multi-step reaction, the overall rate is determined by the **rate-determining step** (slowest
step).

**Worked Example 17:** A reaction proceeds by the following mechanism:

Step 1 (slow): $\text{A} + \text{B} \to \text{C}$

Step 2 (fast): $\text{C} + \text{D} \to \text{E}$

The rate equation is determined by the slow step: $\text{Rate} = k[\text{A}][\text{B}]$.

Note that $\text{D}$ does not appear in the rate equation because it is involved only in the fast
step.

**Worked Example 18:** For the reaction $\text{2NO}_2 + \text{F}_2 \to 2\text{NO}_2\text{F}$, the
proposed mechanism is:

Step 1 (slow): $\text{NO}_2 + \text{F}_2 \to \text{NO}_2\text{F} + \text{F}$

Step 2 (fast): $\text{F} + \text{NO}_2 \to \text{NO}_2\text{F}$

The rate equation is: $\text{Rate} = k[\text{NO}_2][\text{F}_2]$.

This is first order with respect to $\text{NO}_2$ and first order with respect to $\text{F}_2$, even
though the overall balanced equation has coefficient 2 for $\text{NO}_2$. This confirms that the
rate order cannot be predicted from the stoichiometry.

---

## Comparison Table: Thermodynamics vs. Kinetics

| Aspect             | Thermodynamics (Equilibrium)           | Kinetics (Rate)                       |
| ------------------ | -------------------------------------- | ------------------------------------- |
| What it predicts   | Whether a reaction CAN occur           | How FAST a reaction occurs            |
| Key equation       | $\Delta G^\circ = -RT\ln K$            | $\text{Rate} = k[A]^m[B]^n$           |
| Temperature effect | Changes $K$ and equilibrium position   | Changes rate constant $k$             |
| Catalyst effect    | No effect on $K$ or position           | Increases $k$ (lowers $E_a$)          |
| Time dependence    | System reaches equilibrium eventually  | Describes the approach to equilibrium |
| Spontaneity        | $\Delta G^\circ < 0$ means spontaneous | No concept of spontaneity             |

---

## Practice Questions (Extended)

13. Using Hess's Law, calculate $\Delta H_r^\circ$ for:
    $\text{3C(s)} + 4\text{H}_2\text{(g)} \to \text{C}_3\text{H}_8\text{(g)}$ given
    $\Delta H_c^\circ(\text{C}_3\text{H}_8) = -2220 \text{ kJ/mol}$,
    $\Delta H_c^\circ(\text{C}) = -393.5 \text{ kJ/mol}$,
    $\Delta H_c^\circ(\text{H}_2) = -285.8 \text{ kJ/mol}$.

14. Explain why the enthalpy of neutralisation for strong acid-strong base reactions is
    approximately constant (~-57 kJ/mol), but for weak acid-strong base reactions it is less
    exothermic.

15. For a reaction with $\Delta H^\circ = -92 \text{ kJ/mol}$, explain qualitatively how $K_c$
    changes as temperature increases. Would the equilibrium yield of products increase or decrease?

16. In a bomb calorimeter, $1.00 \text{ g}$ of glucose ($\text{C}_6\text{H}_{12}\text{O}_6$) is
    burned. The temperature of $500 \text{ g}$ of water rises by $7.48°C$. The calorimeter heat
    capacity is $620 \text{ J/K}$. Calculate the enthalpy of combustion per mole of glucose.

17. The following data were obtained for the reaction $\text{A} + \text{B} \to \text{C}$ at 25°C:

    | $[\text{A}]$ (M) | $[\text{B}]$ (M) | Initial rate (M/s)   |
    | ---------------- | ---------------- | -------------------- |
    | 0.10             | 0.10             | $2.0 \times 10^{-3}$ |
    | 0.20             | 0.10             | $4.0 \times 10^{-3}$ |
    | 0.20             | 0.20             | $1.6 \times 10^{-2}$ |

    Determine the rate equation, the value of $k$ with units, and the overall order.

18. Draw and label a fully annotated Maxwell-Boltzmann distribution curve at two different
    temperatures, showing the activation energy and explaining why a small temperature increase has
    a large effect on the reaction rate.

---

## Entropy and Spontaneity

### Entropy ($S$)

Entropy is a measure of disorder or randomness in a system.

**Factors that increase entropy:**

- Increasing the number of particles (more ways to arrange them)
- Changing from solid to liquid to gas
- Increasing temperature (more kinetic energy, more microstates)
- Dissolving a solid in a solvent

**Standard entropy change:**

$$\Delta S^\circ = \sum S^\circ(\text{products}) - \sum S^\circ(\text{reactants})$$

### Gibbs Free Energy

$$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$$

| $\Delta H^\circ$ | $\Delta S^\circ$ | $\Delta G^\circ$   | Spontaneity           |
| ---------------- | ---------------- | ------------------ | --------------------- |
| Negative         | Positive         | Always negative    | Always spontaneous    |
| Positive         | Negative         | Always positive    | Never spontaneous     |
| Negative         | Negative         | Negative at low T  | Spontaneous at low T  |
| Positive         | Positive         | Negative at high T | Spontaneous at high T |

**Worked Example 19:** For the reaction
$\text{CaCO}_3\text{(s)} \to \text{CaO(s)} + \text{CO}_2\text{(g)}$,
$\Delta H^\circ = +178 \text{ kJ/mol}$ and $\Delta S^\circ = +160 \text{ J mol}^{-1}\text{K}^{-1}$.
Find the minimum temperature at which the reaction becomes spontaneous.

The reaction is spontaneous when $\Delta G^\circ < 0$:

$$0 = \Delta H^\circ - T\Delta S^\circ$$

$$T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{178000}{160} = 1112.5 \text{ K} \approx 840°C$$

This is the decomposition temperature of limestone, consistent with industrial practice.

**Worked Example 20:** For the dissolution of $\text{NH}_4\text{NO}_3\text{(s)}$ in water:
$\Delta H^\circ = +25.7 \text{ kJ/mol}$, $\Delta S^\circ = +108 \text{ J mol}^{-1}\text{K}^{-1}$.
Explain why this dissolution is spontaneous at room temperature.

$$\Delta G^\circ = 25700 - 298 \times 108 = 25700 - 32184 = -6484 \text{ J/mol}$$

Since $\Delta G^\circ < 0$, the dissolution is spontaneous despite being endothermic. The driving
force is the large increase in entropy (solid $\to$ aqueous ions).
