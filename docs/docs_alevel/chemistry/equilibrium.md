---
title: Chemical Equilibrium
description: "A-Level Chemistry notes on Chemical Equilibrium: Dynamic Equilibrium; Le Chatelier's Principle; Equilibrium Constant $K_c$; Units of $K_c$."
date: 2026-04-21T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: chemical-equilibrium
sidebar_position: 10
---
# Chemical Equilibrium

## Dynamic Equilibrium

A reversible reaction reaches **dynamic equilibrium** when the rate of the forward reaction equals the rate of the reverse reaction. At equilibrium:

- The macroscopic properties (concentration, pressure, colour) are constant.
- Microscopically, both forward and reverse reactions continue to occur at equal rates.
- The position of equilibrium describes the relative amounts of reactants and products.

Dynamic equilibrium is only established in a **closed system** -- one in which no matter can enter or leave.

## Le Chatelier's Principle

If a system at equilibrium is subjected to a change in conditions, the equilibrium position shifts to **counteract** the imposed change.

| Change | Effect on equilibrium position | Effect on $K$ |
|---|---|---|
| Increase concentration of reactant | Shifts to products (right) | No change |
| Increase pressure (fewer moles gas on right) | Shifts to fewer gas moles | No change |
| Increase temperature (endothermic forward) | Shifts in endothermic direction | Changes |
| Add catalyst | No shift (speeds both equally) | No change |

**Critical distinction:** Le Chatelier's principle predicts the direction of the equilibrium shift but does **not** change the value of the equilibrium constant (except for temperature changes).

## Equilibrium Constant $K_c$

For a general reaction:

$$
A\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}
$$

The equilibrium constant in terms of concentrations is:

$$
K_c = \frac◆LB◆[\mathrm{C}]^c[\mathrm{D}]^d◆RB◆◆LB◆[\mathrm{A}]^a[\mathrm{B}]^b◆RB◆
$$

Where all concentrations are equilibrium concentrations in $\mathrm{mol/dm}^3$.

### Units of $K_c$

The units depend on the stoichiometry:

$$
\mathrm{Units of } K_c = (\mathrm{mol/dm}^3)^{(c+d)-(a+b)}
$$

If $(c+d) = (a+b)$$K_c$ is dimensionless.

| Reaction | Units of $K_c$ |
|---|---|
| $\mathrm{A} \rightleftharpoons \mathrm{B}$ (1:1) | No units |
| $\mathrm{A} \rightleftharpoons 2\mathrm{B}$ (1:2) | $\mathrm{mol/dm}^3$ |
| $\mathrm{A} + \mathrm{B} \rightleftharpoons \mathrm{C} + \mathrm{D}$ (1:1:1:1) | No units |
| $\mathrm{N}_2 + 3\mathrm{H}_2 \rightleftharpoons 2\mathrm{NH}_3$ | $\mathrm{mol^{-2}\,dm^6}$ |

### Worked Example: $K_c$ Calculation

$1.00\,\mathrm{mol}$ of $\mathrm{H}_2$ and $1.00\,\mathrm{mol}$ of $\mathrm{I}_2$ are placed in a $1.00\,\mathrm{dm}^3$ vessel at $718\,\mathrm{K}$. At equilibrium, $0.78\,\mathrm{mol}$ of $\mathrm{HI}$ has formed.

$$
\mathrm{H}_2(g) + \mathrm{I}_2(g) \rightleftharpoons 2\mathrm{HI}(g)
$$

| Species | Initial (mol) | Change (mol) | Equilibrium (mol) | Equilibrium ($\mathrm{mol/dm}^3$) |
|---|---|---|---|---|
| $\mathrm{H}_2$ | 1.00 | $-0.39$ | 0.61 | 0.61 |
| $\mathrm{I}_2$ | 1.00 | $-0.39$ | 0.61 | 0.61 |
| $\mathrm{HI}$ | 0 | $+0.78$ | 0.78 | 0.78 |

$$
K_c = \frac◆LB◆[\mathrm{HI}]^2◆RB◆◆LB◆[\mathrm{H}_2][\mathrm{I}_2]◆RB◆ = \frac{(0.78)^2}{(0.61)(0.61)} = \frac{0.6084}{0.3721} = 1.64
$$

$K_c$ is dimensionless here because $(c+d)-(a+b) = 2 - 2 = 0$.

## Equilibrium Constant $K_p$

For gaseous reactions, $K_p$ is expressed in terms of partial pressures:

$$
K_p = \frac◆LB◆(p_\mathrm{C})^c(p_\mathrm{D})^d◆RB◆◆LB◆(p_\mathrm{A})^a(p_\mathrm{B})^b◆RB◆
$$

Where $p_i$ is the equilibrium partial pressure of species $i$.

### Partial Pressure

The partial pressure of a gas in a mixture is the pressure that gas would exert if it occupied the entire volume alone:

$$
P_i = x_i \times p_\mathrm{total}
$$

Where $x_i = n_i / n_\mathrm{total}$ is the mole fraction of gas $i$.

### Units of $K_p$

The units depend on the stoichiometry. If $\Delta n_g = (c+d) - (a+b)$ is the change in the number of moles of gas:

- $\Delta n_g = 0$: $K_p$ is dimensionless.
- $\Delta n_g = 1$: units of pressure ($\mathrm{atm}$$\mathrm{kPa}$Etc.).
- $\Delta n_g = -2$: units of $\mathrm{pressure}^{-2}$.

**Note:** The numerical value of $K_p$ depends on the units of pressure used. Always state the pressure units.

### Worked Example: $K_p$ Calculation

$2.00\,\mathrm{mol}$ of $\mathrm{SO}_2$ and $1.00\,\mathrm{mol}$ of $\mathrm{O}_2$ are placed in a $10.0\,\mathrm{dm}^3$ vessel at $1000\,\mathrm{K}$. At equilibrium, $1.20\,\mathrm{mol}$ of $\mathrm{SO}_3$ has formed. Total pressure = $200\,\mathrm{kPa}$.

$$
2\mathrm{SO}_2(g) + \mathrm{O}_2(g) \rightleftharpoons 2\mathrm{SO}_3(g)
$$

| Species | Initial (mol) | Change (mol) | Equilibrium (mol) |
|---|---|---|---|
| $\mathrm{SO}_2$ | 2.00 | $-1.20$ | 0.80 |
| $\mathrm{O}_2$ | 1.00 | $-0.60$ | 0.40 |
| $\mathrm{SO}_3$ | 0 | $+1.20$ | 1.20 |

$n_\mathrm{total} = 0.80 + 0.40 + 1.20 = 2.40\,\mathrm{mol}$

Mole fractions: $x(\mathrm{SO}_2) = 0.80/2.40 = 0.333$$x(\mathrm{O}_2) = 0.40/2.40 = 0.167$$x(\mathrm{SO}_3) = 1.20/2.40 = 0.500$.

Partial pressures ($p_i = x_i \times 200$):
- $p(\mathrm{SO}_2) = 66.7\,\mathrm{kPa}$
- $p(\mathrm{O}_2) = 33.3\,\mathrm{kPa}$
- $p(\mathrm{SO}_3) = 100.0\,\mathrm{kPa}$

$$
K_p = \frac◆LB◆(p_{\mathrm{SO}_3})^2◆RB◆◆LB◆(p_{\mathrm{SO}_2})^2 \times p_{\mathrm{O}_2}◆RB◆ = \frac◆LB◆(100.0)^2◆RB◆◆LB◆(66.7)^2 \times 33.3◆RB◆ = \frac{10000}{148074} = 0.0675\,\mathrm{kPa}^{-1}
$$

## Homogeneous and Heterogeneous Equilibria

**Homogeneous equilibrium:** all species are in the same phase. Both $K_c$ and $K_p$ apply.

**Heterogeneous equilibrium:** species exist in more than one phase. Pure solids and pure liquids have constant concentration and are **omitted** from the equilibrium expression.

Example: $\mathrm{CaCO}_3(s) \rightleftharpoons \mathrm{CaO}(s) + \mathrm{CO}_2(g)$

$$
K_p = p(\mathrm{CO}_2)
$$

The concentrations of $\mathrm{CaCO}_3(s)$ and $\mathrm{CaO}(s)$ are constants (they are pure solids) and are absorbed into $K$.

## Effect of Conditions on Equilibrium

### Temperature

Changing temperature **does** change $K$. For an exothermic reaction ($\Delta H \lt 0$):

- Increasing temperature shifts equilibrium to the left (endothermic direction).
- $K$ decreases.

For an endothermic reaction ($\Delta H \gt 0$):

- Increasing temperature shifts equilibrium to the right.
- $K$ increases.

The quantitative relationship is given by the **van 't Hoff equation**:

$$
\ln\left(\frac{K_2}{K_1}\right) = -\frac◆LB◆\Delta H^\circ◆RB◆◆LB◆R◆RB◆\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
$$

This is analogous to the Arrhenius equation (see [Chemical Kinetics](./chemical-kinetics)).

**Worked Example.** For the reaction $\mathrm{N}_2\mathrm{O}_4(g) \rightleftharpoons 2\mathrm{NO}_2(g)$$\Delta H^\circ = +58.0\,\mathrm{kJ/mol}$ and $K_p = 0.115$ at $298\,\mathrm{K}$. Calculate $K_p$ at $350\,\mathrm{K}$.

$$
\ln\left(\frac{K_2}{0.115}\right) = -\frac{58000}{8.314}\left(\frac{1}{350} - \frac{1}{298}\right)
$$

$$
\ln\left(\frac{K_2}{0.115}\right) = -6977 \times (0.002857 - 0.003356) = -6977 \times (-4.99 \times 10^{-4}) = +3.48
$$

$$
\frac{K_2}{0.115} = e^{3.48} = 32.5
$$

$$
K_2 = 32.5 \times 0.115 = 3.73
$$

$K_p$ increases significantly with temperature, consistent with the endothermic forward reaction being favoured at higher temperature.

### Relationship Between $K_c$ and $K_p$

For gas-phase reactions, $K_c$ and $K_p$ are related by:

$$
K_p = K_c(RT)^{\Delta n_g}
$$

Where $\Delta n_g$ is the change in the number of moles of gas (products minus reactants).

**Worked Example.** For $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)$ at $500\,\mathrm{K}$$K_c = 6.0 \times 10^{-2}\,\mathrm{mol^{-2}\,dm^6}$. Calculate $K_p$.

$\Delta n_g = 2 - (1 + 3) = -2$.

$$
K_p = K_c(RT)^{-2} = \frac{K_c}{(RT)^2} = \frac◆LB◆6.0 \times 10^{-2}◆RB◆◆LB◆(8.314 \times 500)^2◆RB◆ = \frac{0.060}{(4157)^2} = \frac◆LB◆0.060◆RB◆◆LB◆1.728 \times 10^7◆RB◆ = 3.5 \times 10^{-9}\,\mathrm{Pa^{-2}}
$$

Note: if $K_c$ is in $\mathrm{mol/dm^3}$$R$ must be in consistent units. Alternatively, work in $\mathrm{atm}$: $R = 0.0821\,\mathrm{dm^3\,atm\,mol^{-1}\,K^{-1}}$.

$$
K_p = \frac◆LB◆0.060◆RB◆◆LB◆(0.0821 \times 500)^2◆RB◆ = \frac{0.060}{(41.05)^2} = \frac{0.060}{1685} = 3.6 \times 10^{-5}\,\mathrm{atm^{-2}}
$$

Always state the pressure units when giving $K_p$.

### Concentration / Pressure

Changing concentrations or partial pressures shifts the equilibrium position but does **not** change $K$ (at constant temperature). The system re-equilibrates such that the ratio of products to reactants returns to the same $K$ value.

### Catalyst

A catalyst increases the rate at which equilibrium is established but does not change the equilibrium position or the value of $K$.

## Industrial Applications

### The Haber Process

$$
\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g) \quad \Delta H = -92\,\mathrm{kJ/mol}
$$

| Condition | Effect on equilibrium | Effect on rate | Compromise |
|---|---|---|---|
| High pressure (200 atm) | Favours products (fewer moles) | Increases rate | Expensive equipment |
| Moderate temperature (450 $^\circ$C) | Low temperature favours products | Low temperature slows rate | 450 $^\circ$C is optimal |
| Iron catalyst | No effect on position | Increases rate | Cheap, effective |
| Removal of $\mathrm{NH}_3$ | Shifts equilibrium right | -- | Continuous removal |

### The Contact Process

$$
2\mathrm{SO}_2(g) + \mathrm{O}_2(g) \rightleftharpoons 2\mathrm{SO}_3(g) \quad \Delta H = -197\,\mathrm{kJ/mol}
$$

- Temperature: 400--450 $^\circ$C (compromise between equilibrium and rate).
- Pressure: 1--2 atm (since $K$ is already large at this temperature, high pressure is not essential).
- Catalyst: $\mathrm{V}_2\mathrm{O}_5$.

## Solubility Products ($K_{sp}$)

For a sparingly soluble salt $\mathrm{M}_a\mathrm{X}_b$:

$$
\mathrm{M}_a\mathrm{X}_b(s) \rightleftharpoons a\mathrm{M}^{b+}(aq) + b\mathrm{X}^{a-}(aq)
$$

$$
K_{sp} = [\mathrm{M}^{b+}]^a[\mathrm{X}^{a-}]^b
$$

$K_{sp}$ is the equilibrium constant for the dissolution of a solid. It applies only to sparingly soluble salts -- highly soluble salts have concentrations far above those described by equilibrium considerations.

### Common Solubility Products

| Salt | $K_{sp}$ | Expression |
|---|---|---|
| $\mathrm{AgCl}$ | $1.8 \times 10^{-10}$ | $[\mathrm{Ag}^+][\mathrm{Cl}^-]$ |
| $\mathrm{PbI}_2$ | $1.4 \times 10^{-8}$ | $[\mathrm{Pb}^{2+}][\mathrm{I}^-]^2$ |
| $\mathrm{BaSO}_4$ | $1.1 \times 10^{-10}$ | $[\mathrm{Ba}^{2+}][\mathrm{SO}_4^{2-}]$ |
| $\mathrm{Ca(OH)}_2$ | $5.5 \times 10^{-6}$ | $[\mathrm{Ca}^{2+}][\mathrm{OH}^-]^2$ |

### Worked Example: Calculating Solubility

Calculate the solubility of $\mathrm{PbI}_2$ in $\mathrm{mol/dm}^3$.

$$
\mathrm{PbI}_2(s) \rightleftharpoons \mathrm{Pb}^{2+}(aq) + 2\mathrm{I}^-(aq)
$$

Let $s$ = solubility in $\mathrm{mol/dm}^3$. At equilibrium: $[\mathrm{Pb}^{2+}] = s$$[\mathrm{I}^-] = 2s$.

$$
K_{sp} = [\mathrm{Pb}^{2+}][\mathrm{I}^-]^2 = s(2s)^2 = 4s^3
$$

$$
S = \sqrt[3]{\frac{K_{sp}}{4}} = \sqrt[3]{\frac◆LB◆1.4 \times 10^{-8}◆RB◆◆LB◆4◆RB◆} = \sqrt[3]{3.5 \times 10^{-9}} = 1.52 \times 10^{-3}\,\mathrm{mol/dm}^3
$$

### Precipitation Prediction

Compare the **ion product** ($Q$) with $K_{sp}$:

- $Q \lt K_{sp}$: solution is unsaturated; no precipitate.
- $Q = K_{sp}$: solution is saturated; at equilibrium.
- $Q \gt K_{sp}$: solution is supersaturated; precipitation occurs.

### Common Ion Effect

The solubility of a salt is reduced when a common ion is already present in solution. The additional common ion shifts the dissolution equilibrium to the left, suppressing dissolution.

**Example.** The solubility of $\mathrm{AgCl}$ in pure water is:

$$
S = \sqrt{K_{sp}} = \sqrt◆LB◆1.8 \times 10^{-10}◆RB◆ = 1.34 \times 10^{-5}\,\mathrm{mol/dm}^3
$$

In $0.10\,\mathrm{mol/dm}^3$ $\mathrm{NaCl}$ solution:

$$
[\mathrm{Ag}^+] = \frac◆LB◆K_{sp}◆RB◆◆LB◆[\mathrm{Cl}^-]◆RB◆ = \frac◆LB◆1.8 \times 10^{-10}◆RB◆◆LB◆0.10◆RB◆ = 1.8 \times 10^{-9}\,\mathrm{mol/dm}^3
$$

The solubility is reduced by a factor of approximately $10^4$.

## Common Pitfalls

1. **Including solids and liquids in $K_c$ expressions.** Pure solids and pure liquids are omitted because their activities are constant and incorporated into $K$.

2. **Confusing $K_c$ and $K_p$.** $K_c$ uses concentrations; $K_p$ uses partial pressures. They are numerically different for gas-phase reactions.

3. **Incorrectly applying Le Chatelier to catalysts.** A catalyst speeds up both forward and reverse reactions equally; it does not shift the equilibrium position.

4. **Ignoring the exponent in $K_{sp}$ expressions.** For $\mathrm{PbI}_2$The iodide concentration is squared in the $K_{sp}$ expression, leading to a factor of 4 in the solubility calculation.

5. **Reversing $K$ incorrectly.** If a reaction is reversed, $K_\mathrm{new} = 1/K_\mathrm{original}$. If the stoichiometry is multiplied by $n$$K_\mathrm{new} = K_\mathrm{original}^n$.

6. **Using concentration units incorrectly in $K_p$.** $K_p$ uses partial pressures (atm, Pa, or bar). Partial pressure $p_i = x_i \times p_\mathrm{total}$Where $x_i$ is the mole fraction.

7. **Assuming that changing the amount of a solid affects the equilibrium.** Changing the amount of a pure solid or liquid has no effect on the equilibrium position because its activity is constant.

## The Relationship Between $K_c$ and $K_p$

For a gas-phase reaction:

$$
A\mathrm{A}(g) + b\mathrm{B}(g) \rightleftharpoons c\mathrm{C}(g) + d\mathrm{D}(g)
$$

The relationship between $K_p$ and $K_c$ is:

$$
K_p = K_c(RT)^{\Delta n}
$$

Where $\Delta n = (c + d) - (a + b)$ is the change in the number of moles of gas, $R = 8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$And $T$ is in Kelvin.

**Important:** When $\Delta n = 0$ (equal moles of gas on both sides), $K_p = K_c$.

**Worked Example.** For $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)$ at $298\,\mathrm{K}$:

$$
\Delta n = 2 - (1 + 3) = -2
$$

$$
K_p = K_c(RT)^{-2} = \frac{K_c}{(RT)^2}
$$

The units of $K_p$ and $K_c$ differ when $\Delta n \neq 0$. Always check units carefully.

## Partition Coefficients and Distribution

A related concept to equilibrium constants is the partition coefficient, which describes the distribution of a solute between two immiscible solvents:

$$
K_\mathrm{partition} = \frac◆LB◆[\text{solute}]_\mathrm{organic}◆RB◆◆LB◆[\text{solute}]_\mathrm{aqueous}◆RB◆
$$

This is constant at a given temperature and is used in solvent extraction. If a solute is more soluble in the organic phase, $K_\mathrm{partition} \gt 1$And extraction with an organic solvent is efficient.

### Worked Example: Multiple Extractions

$100\,\mathrm{cm}^3$ of an aqueous solution contains $5.0\,\mathrm{g}$ of an organic compound. The partition coefficient between diethyl ether and water is 4.0. Calculate how much of the compound is extracted by:

(a) One extraction with $100\,\mathrm{cm}^3$ of ether.

(b) Two extractions with $50\,\mathrm{cm}^3$ of ether each.

**(a)** $K = \frac◆LB◆c_\mathrm{ether}◆RB◆◆LB◆c_\mathrm{water}◆RB◆ = 4.0$

Let $x$ = mass extracted. $c_\mathrm{ether} = x/100$$c_\mathrm{water} = (5.0 - x)/100$.

$$
4.0 = \frac{x/100}{(5.0 - x)/100} = \frac{x}{5.0 - x}
$$

$$
4(5.0 - x) = x \implies 20 - 4x = x \implies x = 4.0\,\mathrm{g}
$$

**(b)** First extraction with $50\,\mathrm{cm}^3$: Let $x_1$ = mass extracted.

$$
4.0 = \frac{x_1/50}{(5.0 - x_1)/100} = \frac{2x_1}{5.0 - x_1}
$$

$$
4(5.0 - x_1) = 2x_1 \implies 20 - 4x_1 = 2x_1 \implies x_1 = 3.33\,\mathrm{g}
$$

Remaining: $5.0 - 3.33 = 1.67\,\mathrm{g}$.

Second extraction with $50\,\mathrm{cm}^3$: Let $x_2$ = mass extracted.

$$
4.0 = \frac{x_2/50}{(1.67 - x_2)/100} = \frac{2x_2}{1.67 - x_2}
$$

$$
4(1.67 - x_2) = 2x_2 \implies x_2 = 1.11\,\mathrm{g}
$$

Total extracted: $3.33 + 1.11 = 4.44\,\mathrm{g}$.

Two extractions with half the volume each extract more ($4.44\,\mathrm{g}$) than one extraction with the full volume ($4.0\,\mathrm{g}$). Multiple extractions are always more efficient than a single extraction of the same total volume.

## Acid-Base Equilibria (Brief Link)

The equilibrium constant for the dissociation of a weak acid is the acid dissociation constant, $K_a$. The relationship between $K_a$ and $K_b$ for a conjugate acid-base pair at $298\,\mathrm{K}$ is:

$$
K_a \times K_b = K_w = 1.0 \times 10^{-14}
$$

This is a specific application of the general principle that $K_\mathrm{forward} \times K_\mathrm{reverse} = 1$ for a pair of conjugate reactions. See [Acids, Bases and Buffers](./acids-bases) for the full treatment.

## Practice Problems

<details>
<summary>Problem 1</summary>

At $700\,\mathrm{K}$The equilibrium $\mathrm{H}_2(g) + \mathrm{I}_2(g) \rightleftharpoons 2\mathrm{HI}(g)$ has $K_c = 50.0$. If $0.200\,\mathrm{mol}$ of $\mathrm{H}_2$ and $0.200\,\mathrm{mol}$ of $\mathrm{I}_2$ are placed in a $5.00\,\mathrm{dm}^3$ vessel, calculate the equilibrium concentrations.

**Solution:**

Initial concentrations: $[\mathrm{H}_2] = [\mathrm{I}_2] = 0.200/5.00 = 0.0400\,\mathrm{mol/dm}^3$$[\mathrm{HI}] = 0$.

Let $x$ = concentration of $\mathrm{H}_2$ reacted.

At equilibrium: $[\mathrm{H}_2] = 0.0400 - x$$[\mathrm{I}_2] = 0.0400 - x$$[\mathrm{HI}] = 2x$.

$$
K_c = \frac{(2x)^2}{(0.0400 - x)^2} = 50.0
$$

$$
\frac{2x}{0.0400 - x} = \sqrt{50.0} = 7.07
$$

$$
2x = 7.07(0.0400 - x) = 0.283 - 7.07x
$$

$$
9.07x = 0.283
$$

$$
X = 0.0312\,\mathrm{mol/dm}^3
$$

$[\mathrm{H}_2] = [\mathrm{I}_2] = 0.0088\,\mathrm{mol/dm}^3$$[\mathrm{HI}] = 0.0624\,\mathrm{mol/dm}^3$.

</details>

<details>
<summary>Problem 2</summary>

Will a precipitate form when $10.0\,\mathrm{cm}^3$ of $0.010\,\mathrm{mol/dm}^3$ $\mathrm{AgNO}_3$ is added to $40.0\,\mathrm{cm}^3$ of $0.0050\,\mathrm{mol/dm}^3$ $\mathrm{NaCl}$? ($K_{sp}(\mathrm{AgCl}) = 1.8 \times 10^{-10}$)

**Solution:**

Total volume = $50.0\,\mathrm{cm}^3$.

$[\mathrm{Ag}^+] = \frac◆LB◆0.010 \times 10.0◆RB◆◆LB◆50.0◆RB◆ = 0.0020\,\mathrm{mol/dm}^3$

$[\mathrm{Cl}^-] = \frac◆LB◆0.0050 \times 40.0◆RB◆◆LB◆50.0◆RB◆ = 0.0040\,\mathrm{mol/dm}^3$

$Q = [\mathrm{Ag}^+][\mathrm{Cl}^-] = 0.0020 \times 0.0040 = 8.0 \times 10^{-6}$

Since $Q = 8.0 \times 10^{-6} \gt K_{sp} = 1.8 \times 10^{-10}$A precipitate of $\mathrm{AgCl}$ will form.

</details>

<details>
<summary>Problem 3</summary>

At $298\,\mathrm{K}$The equilibrium $\mathrm{PCl}_5(g) \rightleftharpoons \mathrm{PCl}_3(g) + \mathrm{Cl}_2(g)$ has $K_p = 12.5\,\mathrm{kPa}$. A sample of $\mathrm{PCl}_5$ is placed in a sealed vessel at $298\,\mathrm{K}$. At equilibrium, the total pressure is $200\,\mathrm{kPa}$ and the partial pressure of $\mathrm{Cl}_2$ is $95\,\mathrm{kPa}$. Calculate the partial pressures of $\mathrm{PCl}_5$ and $\mathrm{PCl}_3$ at equilibrium and verify that they satisfy $K_p$.

**Solution:**

At equilibrium: $p(\mathrm{Cl}_2) = 95\,\mathrm{kPa}$.

From the stoichiometry, $p(\mathrm{PCl}_3) = p(\mathrm{Cl}_2) = 95\,\mathrm{kPa}$ (1:1 ratio).

Total pressure: $p(\mathrm{PCl}_5) + p(\mathrm{PCl}_3) + p(\mathrm{Cl}_2) = 200\,\mathrm{kPa}$

$$
P(\mathrm{PCl}_5) = 200 - 95 - 95 = 10\,\mathrm{kPa}
$$

Verification:

$$
K_p = \frac◆LB◆p(\mathrm{PCl}_3) \times p(\mathrm{Cl}_2)◆RB◆◆LB◆p(\mathrm{PCl}_5)◆RB◆ = \frac◆LB◆95 \times 95◆RB◆◆LB◆10◆RB◆ = \frac{9025}{10} = 902.5\,\mathrm{kPa}
$$

This does not equal $K_p = 12.5\,\mathrm{kPa}$Indicating that the given data is inconsistent with $K_p = 12.5\,\mathrm{kPa}$. Either the total pressure or the $\mathrm{Cl}_2$ partial pressure is incorrect for the stated $K_p$.

Let us instead use $K_p = 12.5\,\mathrm{kPa}$ and total pressure $= 200\,\mathrm{kPa}$ to find the correct partial pressures.

Let $x = p(\mathrm{PCl}_5)$ at equilibrium. Then $p(\mathrm{PCl}_3) = p(\mathrm{Cl}_2) = 200 - x$ (since they are equal).

$$
K_p = \frac{(200 - x)^2}{x} = 12.5
$$

$$
(200 - x)^2 = 12.5x
$$

$$
40000 - 400x + x^2 = 12.5x
$$

$$
X^2 - 412.5x + 40000 = 0
$$

Using the quadratic formula:

$$
X = \frac◆LB◆412.5 \pm \sqrt{412.5^2 - 4 \times 40000}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆412.5 \pm \sqrt{170156 - 160000}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆412.5 \pm \sqrt{10156}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆412.5 \pm 100.8◆RB◆◆LB◆2◆RB◆
$$

$x = 256.7$ or $x = 155.9$. Since $p(\mathrm{PCl}_3) = 200 - x$ must be positive, $x = 155.9\,\mathrm{kPa}$.

$p(\mathrm{PCl}_5) = 155.9\,\mathrm{kPa}$$p(\mathrm{PCl}_3) = p(\mathrm{Cl}_2) = 44.1\,\mathrm{kPa}$.

Check: $K_p = (44.1)^2 / 155.9 = 1945 / 155.9 = 12.5\,\mathrm{kPa}$. Correct.

</details>

<details>
<summary>Problem 4</summary>

The common ion effect: Calculate the solubility of $\mathrm{CaF}_2$ in (a) pure water and (b) $0.050\,\mathrm{mol/dm}^3$ $\mathrm{CaCl}_2$ solution. $K_{sp}(\mathrm{CaF}_2) = 3.9 \times 10^{-11}$.

**Solution:**

(a) In pure water: $\mathrm{CaF}_2(s) \rightleftharpoons \mathrm{Ca}^{2+}(aq) + 2\mathrm{F}^-(aq)$

Let $s$ = solubility. $[\mathrm{Ca}^{2+}] = s$$[\mathrm{F}^-] = 2s$.

$$
K_{sp} = s(2s)^2 = 4s^3 = 3.9 \times 10^{-11}
$$

$$
S = \sqrt[3]{\frac◆LB◆3.9 \times 10^{-11}◆RB◆◆LB◆4◆RB◆} = \sqrt[3]{9.75 \times 10^{-12}} = 2.14 \times 10^{-4}\,\mathrm{mol/dm}^3
$$

(b) In $0.050\,\mathrm{mol/dm}^3$ $\mathrm{CaCl}_2$: $[\mathrm{Ca}^{2+}]_\mathrm{from\ CaCl_2} = 0.050\,\mathrm{mol/dm}^3$.

$$
K_{sp} = [\mathrm{Ca}^{2+}]_\mathrm{total}[\mathrm{F}^-]^2 = (0.050 + s)(2s)^2 \approx 0.050 \times 4s^2
$$

(The approximation $0.050 + s \approx 0.050$ is valid because $s$ will be very small compared to $0.050$.)

$$
0.200s^2 = 3.9 \times 10^{-11}
$$

$$
S^2 = 1.95 \times 10^{-10}
$$

$$
S = 1.40 \times 10^{-5}\,\mathrm{mol/dm}^3
$$

The solubility in $0.050\,\mathrm{mol/dm}^3$ $\mathrm{CaCl}_2$ ($1.40 \times 10^{-5}\,\mathrm{mol/dm}^3$) is approximately 15 times less than in pure water ($2.14 \times 10^{-4}\,\mathrm{mol/dm}^3$). The common ion ($\mathrm{Ca}^{2+}$) suppresses the dissolution of $\mathrm{CaF}_2$.

</details>

<details>
<summary>Problem 5</summary>

The equilibrium $\mathrm{N}_2\mathrm{O}_4(g) \rightleftharpoons 2\mathrm{NO}_2(g)$ has $\Delta H = +58\,\mathrm{kJ/mol}$ and $K_p = 0.115\,\mathrm{atm}$ at $298\,\mathrm{K}$.

(a) If the total pressure is increased, predict the effect on the equilibrium position.
(b) If the temperature is increased to $350\,\mathrm{K}$Predict whether $K_p$ increases or decreases, and explain.
(c) $1.00\,\mathrm{mol}$ of $\mathrm{N}_2\mathrm{O}_4$ is placed in a $10.0\,\mathrm{dm}^3$ vessel at $298\,\mathrm{K}$. Calculate the equilibrium partial pressures of both gases.

**Solution:**

(a) Increasing total pressure favours the side with fewer moles of gas. Here, 1 mole of $\mathrm{N}_2\mathrm{O}_4$ produces 2 moles of $\mathrm{NO}_2$So increasing pressure shifts equilibrium to the left (favouring $\mathrm{N}_2\mathrm{O}_4$).

(b) The forward reaction is endothermic ($\Delta H > 0$). Increasing temperature shifts equilibrium to the right (endothermic direction), so $K_p$ increases. This is consistent with the van 't Hoff equation: $\ln(K_2/K_1) = -(\Delta H/R)(1/T_2 - 1/T_1)$.

(c) Let $x$ = moles of $\mathrm{N}_2\mathrm{O}_4$ dissociated.

At equilibrium: $n(\mathrm{N}_2\mathrm{O}_4) = 1.00 - x$$n(\mathrm{NO}_2) = 2x$Total moles $= 1.00 + x$.

Total pressure: use $pV = nRT$:

$$
P_\mathrm{total} = \frac{(1.00 + x)RT}{V} = \frac◆LB◆(1.00 + x) \times 8.314 \times 298◆RB◆◆LB◆10.0 \times 10^{-3}◆RB◆ = (1.00 + x) \times 247\,700\,\mathrm{Pa}
$$

Partial pressures: $p(\mathrm{N}_2\mathrm{O}_4) = \frac{1.00 - x}{1.00 + x} \times p_\mathrm{total}$$p(\mathrm{NO}_2) = \frac{2x}{1.00 + x} \times p_\mathrm{total}$.

$$
K_p = \frac◆LB◆p(\mathrm{NO}_2)^2◆RB◆◆LB◆p(\mathrm{N}_2\mathrm{O}_4)◆RB◆ = \frac{(2x)^2}{(1.00 - x)(1.00 + x)} \times p_\mathrm{total} = \frac{4x^2}{1 - x^2} \times p_\mathrm{total}
$$

Since $K_p = 0.115\,\mathrm{atm} = 0.115 \times 101325 = 11652\,\mathrm{Pa}$:

$$
11652 = \frac{4x^2}{1 - x^2} \times 247700(1 + x)
$$

This requires iterative solution or approximation. Assuming $x \ll 1$:

$$
11652 \approx 4x^2 \times 247700
$$

$$
X^2 \approx \frac{11652}{990800} = 0.01176
$$

$$
X \approx 0.108\,\mathrm{mol}
$$

$n(\mathrm{NO}_2) = 2 \times 0.108 = 0.217\,\mathrm{mol}$$n(\mathrm{N}_2\mathrm{O}_4) = 0.892\,\mathrm{mol}$.

$p(\mathrm{NO}_2) = \frac{0.217}{1.108} \times 247700(1.108) = 0.217 \times 247700 = 53751\,\mathrm{Pa} = 0.531\,\mathrm{atm}$

$p(\mathrm{N}_2\mathrm{O}_4) = 0.892 \times 247700 = 220948\,\mathrm{Pa} = 2.18\,\mathrm{atm}$

Verify: $K_p = (0.531)^2 / 2.18 = 0.282/2.18 = 0.129\,\mathrm{atm}$ (close to $0.115$The discrepancy is due to the approximation).

</details>

## Advanced Equilibrium Calculations

### Le Chatelier's Principle: Quantitative Treatment

Le Chatelier's principle can be treated quantitatively using the equilibrium constant. When a change is made to a system at equilibrium, the system responds in a way that partially counteracts the change.

**Worked Example:** For the equilibrium $\mathrm{N}_2\mathrm{O}_4(g) \rightleftharpoons 2\mathrm{NO}_2(g)$ with $K_p = 0.115\,\mathrm{atm}$ at $298\,\mathrm{K}$What is the effect of doubling the total pressure by halving the volume?

Initially, let $p(\mathrm{N}_2\mathrm{O}_4) = 1.00\,\mathrm{atm}$ and $p(\mathrm{NO}_2) = 0.339\,\mathrm{atm}$ (satisfying $K_p = (0.339)^2/1.00 = 0.115$).

When the volume is halved, all partial pressures double instantly: $p(\mathrm{N}_2\mathrm{O}_4) = 2.00\,\mathrm{atm}$$p(\mathrm{NO}_2) = 0.678\,\mathrm{atm}$.

The reaction quotient: $Q_p = (0.678)^2 / 2.00 = 0.230 > K_p$.

Since $Q_p > K_p$The system shifts to the left (fewer moles of gas) to reduce $Q_p$ back towards $K_p$. This is consistent with Le Chatelier's principle: increasing pressure favours the side with fewer gas molecules.

**Worked Example: Effect of temperature on equilibrium composition.**

For $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)$$\Delta H = -92\,\mathrm{kJ/mol}$.

At $400^\circ\mathrm{C}$: $K_p = 6.2 \times 10^{-4}\,\mathrm{atm}^{-2}$.
At $500^\circ\mathrm{C}$: $K_p = 4.5 \times 10^{-6}\,\mathrm{atm}^{-2}$.

The equilibrium constant decreases with increasing temperature because the forward reaction is exothermic. According to Le Chatelier's principle, increasing temperature favours the endothermic (reverse) direction, reducing the ammonia yield. This is confirmed quantitatively by the decrease in $K_p$.

The relationship between $K$ and temperature is given by the van 't Hoff equation:

$$\ln\frac{K_2}{K_1} = -\frac◆LB◆\Delta H^\circ◆RB◆◆LB◆R◆RB◆\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

### Kp Calculations: Heterogeneous Equilibria

Heterogeneous equilibria involve substances in more than one phase. The concentrations of pure solids and pure liquids are constant and are incorporated into the equilibrium constant, so they do not appear in the $K_c$ or $K_p$ expression.

**Example:** $\mathrm{CaCO}_3(s) \rightleftharpoons \mathrm{CaO}(s) + \mathrm{CO}_2(g)$

$$K_p = p(\mathrm{CO}_2)$$

At $900^\circ\mathrm{C}$$K_p = 1.04\,\mathrm{atm}$. This means that in a closed container, $\mathrm{CaCO}_3$ decomposes until the partial pressure of $\mathrm{CO}_2$ reaches $1.04\,\mathrm{atm}$At which point equilibrium is established.

### Industrial Application: Haber Process Equilibrium Analysis

**Reaction:** $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)$$\Delta H = -92\,\mathrm{kJ/mol}$

| Condition | Effect on equilibrium | Effect on rate | Industrial choice |
|---|---|---|---|
| High pressure | Favours products (4 mol $\to$ 2 mol) | Increases rate (higher concentration) | 200 atm (compromise: cost vs yield) |
| Low temperature | Favours products (exothermic forward) | Decreases rate | $450^\circ\mathrm{C}$ (compromise: yield vs rate) |
| Excess $\mathrm{N}_2$ | Shifts equilibrium right | Increases rate of forward reaction | $\mathrm{N}_2:\mathrm{H}_2 = 1:3$ (stoichiometric feed) |
| Iron catalyst | No effect on position | Increases rate (lower $E_a$) | Fe with $\mathrm{K}_2\mathrm{O}/\mathrm{Al}_2\mathrm{O}_3$ promoters |

The yield at $450^\circ\mathrm{C}$ and 200 atm is approximately 15% per pass. Unreacted $\mathrm{N}_2$ and $\mathrm{H}_2$ are recycled.

### Solubility Products ($K_{sp}$)

The solubility product is the equilibrium constant for the dissolution of a sparingly soluble ionic compound:

$$\mathrm{M}_a\mathrm{X}_b(s) \rightleftharpoons a\mathrm{M}^{b+}(aq) + b\mathrm{X}^{a-}(aq)$$

$$K_{sp} = [\mathrm{M}^{b+}]^a[\mathrm{X}^{a-}]^b$$

**Worked Example:** Calculate the solubility of $\mathrm{BaSO}_4$ in pure water. $K_{sp}(\mathrm{BaSO}_4) = 1.08 \times 10^{-10}\,\mathrm{mol^2\,dm^{-6}}$.

$$\mathrm{BaSO}_4(s) \rightleftharpoons \mathrm{Ba}^{2+}(aq) + \mathrm{SO}_4^{2-}(aq)$$

If $s$ is the solubility in $\mathrm{mol\,dm^{-3}}$:

$$K_{sp} = s \times s = s^2$$

$$s = \sqrt{K_{sp}} = \sqrt◆LB◆1.08 \times 10^{-10}◆RB◆ = 1.04 \times 10^{-5}\,\mathrm{mol\,dm^{-3}}$$

**Common ion effect:** The solubility of $\mathrm{BaSO}_4$ is reduced in the presence of $\mathrm{Na}_2\mathrm{SO}_4$ (a common source of $\mathrm{SO}_4^{2-}$). Adding $\mathrm{SO}_4^{2-}$ shifts the equilibrium to the left, precipitating more $\mathrm{BaSO}_4$.

**Worked Example:** Will $\mathrm{BaSO}_4$ precipitate when $100\,\mathrm{cm}^3$ of $0.010\,\mathrm{mol\,dm^{-3}}$ $\mathrm{BaCl}_2$ is mixed with $100\,\mathrm{cm}^3$ of $0.010\,\mathrm{mol\,dm^{-3}}$ $\mathrm{Na}_2\mathrm{SO}_4$?

After mixing, concentrations are halved:

$[\mathrm{Ba}^{2+}] = 0.0050\,\mathrm{mol\,dm^{-3}}$$[\mathrm{SO}_4^{2-}] = 0.0050\,\mathrm{mol\,dm^{-3}}$

$$Q = [\mathrm{Ba}^{2+}][\mathrm{SO}_4^{2-}] = (0.0050)^2 = 2.5 \times 10^{-5}$$

Since $Q = 2.5 \times 10^{-5} \gg K_{sp} = 1.08 \times 10^{-10}$Precipitation will occur until $[\mathrm{Ba}^{2+}][\mathrm{SO}_4^{2-}] = K_{sp}$.

## Practical Techniques for Equilibrium

### Required Practical: Investigating Equilibrium (AQA RP 9)

**Objective:** To determine the effect of concentration on the position of equilibrium for the reaction between iron(III) ions and thiocyanate ions.

$$\mathrm{Fe}^{3+}(aq) + \mathrm{SCN}^-(aq) \rightleftharpoons \mathrm{FeSCN}^{2+}(aq)$$

The $\mathrm{FeSCN}^{2+}$ ion is blood-red in colour. The intensity of the colour (measured by colorimetry) is proportional to its concentration.

**Procedure:**
1. Prepare a standard solution of known $[\mathrm{FeSCN}^{2+}]$ by using a large excess of $\mathrm{SCN}^-$ so that essentially all $\mathrm{Fe}^{3+}$ is converted to $\mathrm{FeSCN}^{2+}$.
2. Measure the absorbance of this standard solution using a colorimeter (filter wavelength $\approx 470\,\mathrm{nm}$).
3. Prepare equilibrium mixtures with varying initial concentrations of $\mathrm{Fe}^{3+}$ and $\mathrm{SCN}^-$.
4. Measure the absorbance of each equilibrium mixture.
5. Use a calibration curve (absorbance vs $[\mathrm{FeSCN}^{2+}]$) to determine the equilibrium concentration of $\mathrm{FeSCN}^{2+}$ in each mixture.
6. Calculate $K_c$ for each mixture.

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (5 marks)</summary>

Nitrogen and hydrogen react to form ammonia: $\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)$.

At $500^\circ\mathrm{C}$$K_p = 6.0 \times 10^{-3}\,\mathrm{atm}^{-2}$. A mixture of $1.0\,\mathrm{mol}$ $\mathrm{N}_2$ and $3.0\,\mathrm{mol}$ $\mathrm{H}_2$ is allowed to reach equilibrium at a total pressure of $200\,\mathrm{atm}$. Calculate the equilibrium mole fraction of ammonia.

**Mark Scheme:**

Let $x$ be the moles of $\mathrm{N}_2$ reacted.

Equilibrium moles: $\mathrm{N}_2 = 1.0 - x$$\mathrm{H}_2 = 3.0 - 3x$$\mathrm{NH}_3 = 2x$

Total moles = $4.0 - 2x$

Mole fractions: $y(\mathrm{N}_2) = \frac{1-x}{4-2x}$$y(\mathrm{H}_2) = \frac{3-3x}{4-2x}$$y(\mathrm{NH}_3) = \frac{2x}{4-2x}$

Partial pressures: $p_i = y_i \times P_\mathrm{total}$

$$K_p = \frac◆LB◆p(\mathrm{NH}_3)^2◆RB◆◆LB◆p(\mathrm{N}_2) \times p(\mathrm{H}_2)^3◆RB◆ = \frac◆LB◆\left(\frac{2x}{4-2x} \times 200\right)^2◆RB◆◆LB◆\left(\frac{1-x}{4-2x} \times 200\right)\left(\frac{3-3x}{4-2x} \times 200\right)^3◆RB◆$$

This simplifies to:

$$K_p = \frac◆LB◆4x^2(4-2x)^2◆RB◆◆LB◆(1-x)(3-3x)^3 \times 200^2◆RB◆$$

Assuming $x$ is small (5% approximation): $4 - 2x \approx 4$$1 - x \approx 1$$3 - 3x \approx 3$:

$$6.0 \times 10^{-3} = \frac◆LB◆4x^2 \times 16◆RB◆◆LB◆1 \times 27 \times 40000◆RB◆ = \frac{64x^2}{1080000}$$

$$x^2 = \frac◆LB◆6.0 \times 10^{-3} \times 1080000◆RB◆◆LB◆64◆RB◆ = \frac{6480}{64} = 101.25$$

$$x \approx 10.1$$

This is inconsistent with the assumption that $x$ is small (it exceeds the initial moles of $\mathrm{N}_2$). This shows that at 200 atm and $500^\circ\mathrm{C}$The equilibrium lies significantly towards products. A numerical or iterative solution would be required.

(1 mark for setting up the $K_p$ expression, 1 mark for mole fractions, 1 mark for partial pressures, 1 mark for substitution, 1 mark for recognising the approximation issue.)

</details>

<details>
<summary>Q2 (4 marks)</summary>

For the equilibrium $\mathrm{PCl}_5(g) \rightleftharpoons \mathrm{PCl}_3(g) + \mathrm{Cl}_2(g)$State and explain the effect on the equilibrium position of:

(a) Increasing the pressure at constant temperature. (2 marks)

(b) Adding a catalyst. (2 marks)

**Mark Scheme:**

(a) Increasing pressure shifts the equilibrium to the left (towards fewer moles of gas: 1 mol vs 2 mol) (1 mark). The system partially counteracts the increase in pressure by reducing the total number of gas molecules (1 mark).

(b) A catalyst increases the rate of both forward and reverse reactions equally, so the equilibrium position is unchanged (1 mark). The catalyst provides an alternative pathway with lower activation energy but does not affect the thermodynamics ($\Delta G^\circ$ and therefore $K$) (1 mark).

</details>

<details>
<summary>Q3 (6 marks)</summary>

The esterification reaction: $\mathrm{CH}_3\mathrm{COOH} + \mathrm{CH}_3\mathrm{CH}_2\mathrm{OH} \rightleftharpoons \mathrm{CH}_3\mathrm{COOCH}_2\mathrm{CH}_3 + \mathrm{H}_2\mathrm{O}$

$1.00\,\mathrm{mol}$ of ethanoic acid and $1.00\,\mathrm{mol}$ of ethanol are mixed and allowed to reach equilibrium. $0.667\,\mathrm{mol}$ of ethyl ethanoate is formed at equilibrium.

(a) Calculate the value of $K_c$. (3 marks)

(b) Calculate the percentage conversion of ethanoic acid. (1 mark)

(c) How would the equilibrium yield change if the volume of the container were halved? (2 marks)

**Mark Scheme:**

(a) Equilibrium moles: $\mathrm{CH}_3\mathrm{COOH} = 1.00 - 0.667 = 0.333\,\mathrm{mol}$$\mathrm{CH}_3\mathrm{CH}_2\mathrm{OH} = 0.333\,\mathrm{mol}$$\mathrm{CH}_3\mathrm{COOCH}_2\mathrm{CH}_3 = 0.667\,\mathrm{mol}$$\mathrm{H}_2\mathrm{O} = 0.667\,\mathrm{mol}$.

Since all species are in the same volume (cancels in $K_c$):

$$K_c = \frac◆LB◆[\mathrm{ester}][\mathrm{H}_2\mathrm{O}]◆RB◆◆LB◆[\mathrm{acid}][\mathrm{alcohol}]◆RB◆ = \frac◆LB◆0.667 \times 0.667◆RB◆◆LB◆0.333 \times 0.333◆RB◆ = \frac{0.445}{0.111} = 4.01$$

(1 mark for equilibrium moles, 1 mark for expression, 1 mark for calculation.)

(b) Percentage conversion: $\frac{0.667}{1.00} \times 100 = 66.7\%$ (1 mark).

(c) Halving the volume doubles all concentrations equally. Since $\Delta n = 0$ (equal moles on both sides), the equilibrium position does not change (2 marks). The value of $K_c$ remains the same ( only on temperature).

</details>

<details>
<summary>Q4 (4 marks)</summary>

Define the term solubility product, $K_{sp}$. The $K_{sp}$ of $\mathrm{PbI}_2$ is $9.8 \times 10^{-9}\,\mathrm{mol^3\,dm^{-9}}$ at $298\,\mathrm{K}$. Calculate the solubility of $\mathrm{PbI}_2$ in $\mathrm{mol\,dm^{-3}}$.

**Mark Scheme:**

Definition (1 mark): The solubility product is the product of the equilibrium concentrations of the ions in a saturated solution of a sparingly soluble ionic compound, each raised to the power of its stoichiometric coefficient.

Calculation (3 marks):

$$\mathrm{PbI}_2(s) \rightleftharpoons \mathrm{Pb}^{2+}(aq) + 2\mathrm{I}^-(aq)$$

If $s$ is the solubility: $[\mathrm{Pb}^{2+}] = s$$[\mathrm{I}^-] = 2s$

$$K_{sp} = [\mathrm{Pb}^{2+}][\mathrm{I}^-]^2 = s \times (2s)^2 = 4s^3$$

$$s = \sqrt[3]{\frac{K_{sp}}{4}} = \sqrt[3]{\frac◆LB◆9.8 \times 10^{-9}◆RB◆◆LB◆4◆RB◆} = \sqrt[3]{2.45 \times 10^{-9}} = 1.35 \times 10^{-3}\,\mathrm{mol\,dm^{-3}}$$

(1 mark for expression, 1 mark for substitution, 1 mark for calculation.)

</details>

---

:::tip
Diagnostic Test
Ready to test your understanding of **Chemical Equilibrium**? The [diagnostic test](/docs/alevel/chemistry/diagnostics/diag-equilibrium) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Chemical Equilibrium with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/chemistry/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.
:::

## Summary

<!-- TODO: Add a summary for this topic -->

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
