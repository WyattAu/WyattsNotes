---
title: Chemical Equilibrium
description:
  "A-Level Chemistry notes on Chemical Equilibrium: Dynamic Equilibrium; Le Chatelier's Principle; Equilibrium Constant $K_c$; Units of $K_c$."
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
a\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}
$$

the equilibrium constant in terms of concentrations is:

$$
K_c = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}
$$

where all concentrations are equilibrium concentrations in $\mathrm{mol/dm}^3$.

### Units of $K_c$

The units depend on the stoichiometry:

$$
\mathrm{Units of } K_c = (\mathrm{mol/dm}^3)^{(c+d)-(a+b)}
$$

If $(c+d) = (a+b)$, $K_c$ is dimensionless.

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
K_c = \frac{[\mathrm{HI}]^2}{[\mathrm{H}_2][\mathrm{I}_2]} = \frac{(0.78)^2}{(0.61)(0.61)} = \frac{0.6084}{0.3721} = 1.64
$$

$K_c$ is dimensionless here because $(c+d)-(a+b) = 2 - 2 = 0$.

## Equilibrium Constant $K_p$

For gaseous reactions, $K_p$ is expressed in terms of partial pressures:

$$
K_p = \frac{(p_\mathrm{C})^c(p_\mathrm{D})^d}{(p_\mathrm{A})^a(p_\mathrm{B})^b}
$$

where $p_i$ is the equilibrium partial pressure of species $i$.

### Partial Pressure

The partial pressure of a gas in a mixture is the pressure that gas would exert if it occupied the entire volume alone:

$$
p_i = x_i \times p_\mathrm{total}
$$

where $x_i = n_i / n_\mathrm{total}$ is the mole fraction of gas $i$.

### Units of $K_p$

The units depend on the stoichiometry. If $\Delta n_g = (c+d) - (a+b)$ is the change in the number of moles of gas:

- $\Delta n_g = 0$: $K_p$ is dimensionless.
- $\Delta n_g = 1$: units of pressure ($\mathrm{atm}$, $\mathrm{kPa}$, etc.).
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

Mole fractions: $x(\mathrm{SO}_2) = 0.80/2.40 = 0.333$, $x(\mathrm{O}_2) = 0.40/2.40 = 0.167$, $x(\mathrm{SO}_3) = 1.20/2.40 = 0.500$.

Partial pressures ($p_i = x_i \times 200$):
- $p(\mathrm{SO}_2) = 66.7\,\mathrm{kPa}$
- $p(\mathrm{O}_2) = 33.3\,\mathrm{kPa}$
- $p(\mathrm{SO}_3) = 100.0\,\mathrm{kPa}$

$$
K_p = \frac{(p_{\mathrm{SO}_3})^2}{(p_{\mathrm{SO}_2})^2 \times p_{\mathrm{O}_2}} = \frac{(100.0)^2}{(66.7)^2 \times 33.3} = \frac{10000}{148074} = 0.0675\,\mathrm{kPa}^{-1}
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
\ln\left(\frac{K_2}{K_1}\right) = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
$$

This is analogous to the Arrhenius equation (see [Chemical Kinetics](./chemical-kinetics)).

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

Let $s$ = solubility in $\mathrm{mol/dm}^3$. At equilibrium: $[\mathrm{Pb}^{2+}] = s$, $[\mathrm{I}^-] = 2s$.

$$
K_{sp} = [\mathrm{Pb}^{2+}][\mathrm{I}^-]^2 = s(2s)^2 = 4s^3
$$

$$
s = \sqrt[3]{\frac{K_{sp}}{4}} = \sqrt[3]{\frac{1.4 \times 10^{-8}}{4}} = \sqrt[3]{3.5 \times 10^{-9}} = 1.52 \times 10^{-3}\,\mathrm{mol/dm}^3
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
s = \sqrt{K_{sp}} = \sqrt{1.8 \times 10^{-10}} = 1.34 \times 10^{-5}\,\mathrm{mol/dm}^3
$$

In $0.10\,\mathrm{mol/dm}^3$ $\mathrm{NaCl}$ solution:

$$
[\mathrm{Ag}^+] = \frac{K_{sp}}{[\mathrm{Cl}^-]} = \frac{1.8 \times 10^{-10}}{0.10} = 1.8 \times 10^{-9}\,\mathrm{mol/dm}^3
$$

The solubility is reduced by a factor of approximately $10^4$.

## Common Pitfalls

1. **Including solids and liquids in $K_c$ expressions.** Pure solids and pure liquids are omitted because their activities are constant and incorporated into $K$.

2. **Confusing $K_c$ and $K_p$.** $K_c$ uses concentrations; $K_p$ uses partial pressures. They are numerically different for gas-phase reactions.

3. **Incorrectly applying Le Chatelier to catalysts.** A catalyst speeds up both forward and reverse reactions equally; it does not shift the equilibrium position.

4. **Ignoring the exponent in $K_{sp}$ expressions.** For $\mathrm{PbI}_2$, the iodide concentration is squared in the $K_{sp}$ expression, leading to a factor of 4 in the solubility calculation.

5. **Reversing $K$ incorrectly.** If a reaction is reversed, $K_\mathrm{new} = 1/K_\mathrm{original}$. If the stoichiometry is multiplied by $n$, $K_\mathrm{new} = K_\mathrm{original}^n$.

## Practice Problems

<details>
<summary>Problem 1</summary>

At $700\,\mathrm{K}$, the equilibrium $\mathrm{H}_2(g) + \mathrm{I}_2(g) \rightleftharpoons 2\mathrm{HI}(g)$ has $K_c = 50.0$. If $0.200\,\mathrm{mol}$ of $\mathrm{H}_2$ and $0.200\,\mathrm{mol}$ of $\mathrm{I}_2$ are placed in a $5.00\,\mathrm{dm}^3$ vessel, calculate the equilibrium concentrations.

**Solution:**

Initial concentrations: $[\mathrm{H}_2] = [\mathrm{I}_2] = 0.200/5.00 = 0.0400\,\mathrm{mol/dm}^3$, $[\mathrm{HI}] = 0$.

Let $x$ = concentration of $\mathrm{H}_2$ reacted.

At equilibrium: $[\mathrm{H}_2] = 0.0400 - x$, $[\mathrm{I}_2] = 0.0400 - x$, $[\mathrm{HI}] = 2x$.

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
x = 0.0312\,\mathrm{mol/dm}^3
$$

$[\mathrm{H}_2] = [\mathrm{I}_2] = 0.0088\,\mathrm{mol/dm}^3$, $[\mathrm{HI}] = 0.0624\,\mathrm{mol/dm}^3$.

</details>

<details>
<summary>Problem 2</summary>

Will a precipitate form when $10.0\,\mathrm{cm}^3$ of $0.010\,\mathrm{mol/dm}^3$ $\mathrm{AgNO}_3$ is added to $40.0\,\mathrm{cm}^3$ of $0.0050\,\mathrm{mol/dm}^3$ $\mathrm{NaCl}$? ($K_{sp}(\mathrm{AgCl}) = 1.8 \times 10^{-10}$)

**Solution:**

Total volume = $50.0\,\mathrm{cm}^3$.

$[\mathrm{Ag}^+] = \frac{0.010 \times 10.0}{50.0} = 0.0020\,\mathrm{mol/dm}^3$

$[\mathrm{Cl}^-] = \frac{0.0050 \times 40.0}{50.0} = 0.0040\,\mathrm{mol/dm}^3$

$Q = [\mathrm{Ag}^+][\mathrm{Cl}^-] = 0.0020 \times 0.0040 = 8.0 \times 10^{-6}$

Since $Q = 8.0 \times 10^{-6} \gt K_{sp} = 1.8 \times 10^{-10}$, a precipitate of $\mathrm{AgCl}$ will form.

</details>

---

:::tip Diagnostic Test
Ready to test your understanding of **Chemical Equilibrium**? The [diagnostic test](/chemistry/diagnostics/diag-equilibrium) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Chemical Equilibrium with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/chemistry/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
