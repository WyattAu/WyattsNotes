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

### Hess's Law

Hess's Law states that the enthalpy change of a reaction is independent of the route taken, provided
the initial and final conditions are the same.

$$\Delta H_1 = \Delta H_2 + \Delta H_3$$

**Example:** Calculate $\Delta H_f^\circ$ for $\text{CH}_4$ given:

$$\text{C(s)} + \text{O}_2\text{(g)} \to \text{CO}_2\text{(g)} \quad \Delta H = -393.5 \text{ kJ/mol}$$

$$\text{H}_2\text{(g)} + \tfrac{1}{2}\text{O}_2\text{(g)} \to \text{H}_2\text{O(l)} \quad \Delta H = -285.8 \text{ kJ/mol}$$

$$\text{CH}_4\text{(g)} + 2\text{O}_2\text{(g)} \to \text{CO}_2\text{(g)} + 2\text{H}_2\text{O(l)} \quad \Delta H = -890.3 \text{ kJ/mol}$$

Using Hess's Law (elements $\to$ products via two routes):

$$\Delta H_f(\text{CH}_4) + (-890.3) = -393.5 + 2(-285.8)$$

$$\Delta H_f(\text{CH}_4) = -393.5 - 571.6 + 890.3 = -74.8 \text{ kJ/mol}$$

### Calorimetry

**Enthalpy of combustion:**

$$q = mc\Delta T$$

where $m$ is mass of water, $c$ is specific heat capacity ($4.18 \text{ J g}^{-1}\text{K}^{-1}$),
and $\Delta T$ is temperature change.

**Example:** When $1.50 \text{ g}$ of ethanol is burned, it raises the temperature of
$200 \text{ g}$ of water by $14.2°C$. Calculate the enthalpy of combustion.

$$q = 200 \times 4.18 \times 14.2 = 11871.2 \text{ J} = 11.87 \text{ kJ}$$

$$n(\text{ethanol}) = \frac{1.50}{46.07} = 0.03256 \text{ mol}$$

$$\Delta H_c = -\frac{11.87}{0.03256} = -364.7 \text{ kJ/mol}$$

(The negative sign indicates exothermic.)

### Enthalpy of Neutralisation

**Example:** $25.0 \text{ cm}^3$ of $1.0 \text{ M}$ HCl is mixed with $25.0 \text{ cm}^3$ of
$1.0 \text{ M}$ NaOH. The temperature rises by $6.8°C$. Calculate the enthalpy of neutralisation.

$$q = 50.0 \times 4.18 \times 6.8 = 1421.2 \text{ J} = 1.42 \text{ kJ}$$

$$n = 1.0 \times 0.0250 = 0.0250 \text{ mol}$$

$$\Delta H_{\text{neut}} = -\frac{1.42}{0.0250} = -56.8 \text{ kJ/mol}$$

---

## Chemical Equilibrium

### Dynamic Equilibrium

In a **reversible reaction**, when the rate of the forward reaction equals the rate of the reverse
reaction, the system is at **dynamic equilibrium**.

$$aA + bB \rightleftharpoons cC + dD$$

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

### Equilibrium Constant ($K_c$)

For the reaction $aA + bB \rightleftharpoons cC + dD$:

$$K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

where square brackets denote equilibrium concentrations in $\text{mol/L}$.

**Example:** For $\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}$, at equilibrium the
concentrations are $[\text{H}_2] = 0.22$, $[\text{I}_2] = 0.22$, $[\text{HI}] = 1.56 \text{ mol/L}$.
Find $K_c$.

$$K_c = \frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]} = \frac{(1.56)^2}{(0.22)(0.22)} = \frac{2.4336}{0.0484} = 50.3$$

**Example:** $2.0 \text{ mol}$ of $\text{SO}_2$ and $1.0 \text{ mol}$ of $\text{O}_2$ are placed in
a $1.0 \text{ L}$ flask at equilibrium. If $1.4 \text{ mol}$ of $\text{SO}_3$ forms, find $K_c$ for
$\text{2SO}_2 + \text{O}_2 \rightleftharpoons 2\text{SO}_3$.

|             | $\text{SO}_2$ | $\text{O}_2$ | $\text{SO}_3$ |
| ----------- | ------------- | ------------ | ------------- |
| Initial     | 2.0           | 1.0          | 0             |
| Change      | -1.4          | -0.7         | +1.4          |
| Equilibrium | 0.6           | 0.3          | 1.4           |

$$K_c = \frac{[\text{SO}_3]^2}{[\text{SO}_2]^2[\text{O}_2]} = \frac{(1.4)^2}{(0.6)^2(0.3)} = \frac{1.96}{0.108} = 18.15$$

---

## Advanced Higher Equilibrium

### Equilibrium Constant and Gibbs Free Energy

$$\Delta G^\circ = -RT\ln K$$

where $R = 8.314 \text{ J mol}^{-1}\text{K}^{-1}$, $T$ is temperature in Kelvin.

- $\Delta G^\circ < 0$: $K > 1$, reaction favours products
- $\Delta G^\circ > 0$: $K < 1$, reaction favours reactants
- $\Delta G^\circ = 0$: $K = 1$, system at equilibrium

### van't Hoff Equation

$$\ln\left(\frac{K_2}{K_1}\right) = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

This relates the equilibrium constant at two different temperatures.

---

## Kinetics

### Collision Theory

For a reaction to occur:

1. Particles must collide
2. They must collide with sufficient energy (greater than or equal to the activation energy, $E_a$)
3. They must collide with the correct orientation

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

### Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

$$\ln k = \ln A - \frac{E_a}{RT}$$

A plot of $\ln k$ vs. $1/T$ gives a straight line with gradient $-E_a/R$.

**Example:** The rate constant of a reaction at $300 \text{ K}$ is
$2.5 \times 10^{-3} \text{ s}^{-1}$ and at $350 \text{ K}$ is $4.2 \times 10^{-2} \text{ s}^{-1}$.
Find the activation energy.

$$\ln\left(\frac{4.2 \times 10^{-2}}{2.5 \times 10^{-3}}\right) = -\frac{E_a}{8.314}\left(\frac{1}{350} - \frac{1}{300}\right)$$

$$\ln(16.8) = -\frac{E_a}{8.314}\left(0.002857 - 0.003333\right)$$

$$2.821 = -\frac{E_a}{8.314}(-0.000476)$$

$$2.821 = \frac{E_a \times 0.000476}{8.314}$$

$$E_a = \frac{2.821 \times 8.314}{0.000476} = 49239 \text{ J/mol} \approx 49.2 \text{ kJ/mol}$$

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
