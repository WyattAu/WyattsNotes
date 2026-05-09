---
title: Entropy and Gibbs Free Energy
description:
  "A-Level Chemistry notes on Entropy and Gibbs Free Energy: Entropy ($S$); Statistical Definition; Thermodynamic Definition; Factors Affecting Entropy."
date: 2026-04-22T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: entropy-and-gibbs
---

# Entropy and Gibbs Free Energy

Enthalpy alone is insufficient to predict whether a reaction will occur spontaneously. The
dissolution of ammonium nitrate in water is endothermic yet proceeds spontaneously. The
decomposition of calcium carbonate requires continuous heating. To resolve these cases, we need a
second state function: entropy, and its combination with enthalpy in the Gibbs free energy.

## Entropy ($S$)

### Statistical Definition

Entropy is a measure of the number of microstates ($W$) accessible to a system -- that is, the
number of ways the energy of the system can be distributed among its particles:

$$
S = k_B \ln W
$$

where $k_B = 1.381 \times 10^{-23}\,\mathrm{J/K{}$ is the Boltzmann constant. A system with more
accessible microstates has higher entropy. This is the Boltzmann equation, engraved on his
tombstone.

### Thermodynamic Definition

The entropy change is defined as:

$$
\Delta S = \int \frac{\delta q_\mathrm{rev{}}{T}
$$

For an isothermal process:

$$
\Delta S = \frac{q_\mathrm{rev{}}{T}
$$

This shows that entropy is heat divided by temperature. Transferring a given amount of heat at a
lower temperature produces a larger entropy change than at a higher temperature.

### Factors Affecting Entropy

| Factor                                | Effect on $S$      | Rationale                                                        |
| ------------------------------------- | ------------------ | ---------------------------------------------------------------- |
| More gas molecules produced           | Increase           | More ways to distribute energy among more particles              |
| Change from solid to liquid to gas    | Increase           | Gases have the most microstates; solids the fewest               |
| Higher temperature                    | Increase           | More energy available to distribute; more accessible microstates |
| Dissolution of a solid ionic compound | Increase (usually) | Ions dispersed in solution have more freedom than in the lattice |
| Fewer moles of gas                    | Decrease           | Fewer particles, fewer microstates                               |
| Increased pressure of a gas           | Decrease           | Reduced volume constrains the available positions                |

### Standard Entropy Values ($S^\circ$)

Standard entropies are **absolute values** (not relative to a reference, unlike enthalpy). At
$0\,\mathrm{K{}$, a perfect crystal has $S = 0$ (third law of thermodynamics). Standard entropies are
always positive.

Typical values ($\mathrm{J\,mol^{-1}\,K^{-1}}$):

| Substance                       | $S^\circ$ |
| ------------------------------- | --------- |
| $\mathrm{C{}(\mathrm{diamond{})$  | 2.4       |
| $\mathrm{C{}(\mathrm{graphite{})$ | 5.7       |
| $\mathrm{Fe{}(s)$                | 27.3      |
| $\mathrm{NaCl{}(s)$              | 72.1      |
| $\mathrm{H{}_2\mathrm{O{}(l)$     | 69.9      |
| $\mathrm{H{}_2\mathrm{O{}(g)$     | 188.8     |
| $\mathrm{CO{}_2(g)$              | 213.7     |
| $\mathrm{N{}_2(g)$               | 191.6     |

Gases have much higher standard entropies than liquids and solids. Diamond has a lower entropy than
graphite due to its more rigid, ordered structure.

### Standard Entropy Change

$$
\Delta S^\circ = \sum S^\circ(\mathrm{products{}) - \sum S^\circ(\mathrm{reactants{})
$$

**Worked Example.** Calculate $\Delta S^\circ$ for the thermal decomposition of calcium carbonate:

$$
\mathrm{CaCO{}_3(s) \to \mathrm{CaO{}(s) + \mathrm{CO{}_2(g)
$$

$$
\Delta S^\circ = S^\circ(\mathrm{CaO{}) + S^\circ(\mathrm{CO{}_2) - S^\circ(\mathrm{CaCO{}_3) = 38.1 + 213.7 - 92.9 = +158.9\,\mathrm{J\,mol^{-1}\,K^{-1}}
$$

The entropy increases because a gas is produced from a solid, creating many more microstates.

## The Second Law of Thermodynamics

The total entropy of the universe increases in any spontaneous process:

$$
\Delta S_\mathrm{universe{} = \Delta S_\mathrm{system{} + \Delta S_\mathrm{surroundings{} \gt 0
$$

At equilibrium: $\Delta S_\mathrm{universe{} = 0$.

### Entropy Change of the Surroundings

The surroundings gain or lose heat as a result of the reaction. The entropy change of the
surroundings is:

$$
\Delta S_\mathrm{surroundings{} = -\frac{\Delta H_\mathrm{system{}}{T}
$$

The negative sign arises because when the system releases heat (exothermic, $\Delta H \lt 0$), the
surroundings gain that heat and their entropy increases. When the system absorbs heat (endothermic,
$\Delta H \gt 0$), the surroundings lose heat and their entropy decreases.

Combining with the second law:

$$
\Delta S_\mathrm{universe{} = \Delta S_\mathrm{system{} - \frac{\Delta H_\mathrm{system{}}{T} \gt 0
$$

Multiplying through by $T$ (which is always positive):

$$
T\Delta S_\mathrm{system{} - \Delta H_\mathrm{system{} \gt 0
$$

Rearranging:

$$
\Delta H_\mathrm{system{} - T\Delta S_\mathrm{system{} \lt 0
$$

## Gibbs Free Energy ($G$)

### Derivation

The inequality above defines the Gibbs free energy:

$$
\Delta G = \Delta H - T\Delta S
$$

This is the most important equation in chemical thermodynamics. It combines the enthalpy and entropy
contributions into a single quantity that determines spontaneity.

### Spontaneity Criterion

| $\Delta G$       | Process                                          |
| ---------------- | ------------------------------------------------ |
| $\Delta G \lt 0$ | Spontaneous (thermodynamically favourable)       |
| $\Delta G = 0$   | At equilibrium                                   |
| $\Delta G \gt 0$ | Non-spontaneous (thermodynamically unfavourable) |

A spontaneous process is one that proceeds without external intervention once initiated.
"Spontaneous" does not mean "fast" -- kinetics determines the rate; thermodynamics determines the
direction.

### Standard Gibbs Free Energy Change

$$
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ
$$

This uses standard enthalpy and entropy data at $298\,\mathrm{K{}$.

### Relationship to the Equilibrium Constant

$$
\Delta G^\circ = -RT\ln K
$$

where $R = 8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$, $T$ is in Kelvin, and $K$ is the equilibrium
constant (dimensionless, using activities).

This equation is one of the most powerful in chemistry because it connects thermodynamic data to
measurable equilibrium constants.

| $\Delta G^\circ$       | $K$       | Equilibrium Position |
| ---------------------- | --------- | -------------------- |
| $\Delta G^\circ \lt 0$ | $K \gt 1$ | Products favoured    |
| $\Delta G^\circ = 0$   | $K = 1$   | Neither favoured     |
| $\Delta G^\circ \gt 0$ | $K \lt 1$ | Reactants favoured   |

**Worked Example.** For the Haber process at $298\,\mathrm{K{}$:

$$
\mathrm{N{}_2(g) + 3\mathrm{H{}_2(g) \rightleftharpoons 2\mathrm{NH{}_3(g)
$$

$\Delta H^\circ = -92\,\mathrm{kJ/mol{}$, $\Delta S^\circ = -199\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$$
\Delta G^\circ = -92000 - 298 \times (-199) = -92000 + 59302 = -32698\,\mathrm{J/mol{} = -32.7\,\mathrm{kJ/mol{}
$$

Since $\Delta G^\circ \lt 0$, the reaction is spontaneous at $298\,\mathrm{K{}$ (but kinetically
extremely slow without a catalyst).

$$
K = \exp\left(\frac{-\Delta G^\circ}{RT}\right) = \exp\left(\frac{32698}{8.314 \times 298}\right) = \exp(13.19) = 5.3 \times 10^5
$$

The equilibrium constant is very large, confirming that products are strongly favoured at
$298\,\mathrm{K{}$.

## Temperature Dependence of Feasibility

The $\Delta G = \Delta H - T\Delta S$ equation reveals that the spontaneity of a reaction can change
with temperature. The four cases:

| $\Delta H$ | $\Delta S$ | Low $T$         | High $T$        | Example                                    |
| ---------- | ---------- | --------------- | --------------- | ------------------------------------------ |
| $-$        | $+$        | Spontaneous     | Spontaneous     | Combustion of hydrogen                     |
| $-$        | $-$        | Spontaneous     | Non-spontaneous | Freezing of water                          |
| $+$        | $+$        | Non-spontaneous | Spontaneous     | Thermal decomposition of $\mathrm{CaCO{}_3$ |
| $+$        | $-$        | Non-spontaneous | Non-spontaneous | Decomposition of $\mathrm{N{}_2\mathrm{O{}$  |

### The Temperature of Equilibrium

The temperature at which a reaction changes from spontaneous to non-spontaneous (or vice versa) is
the temperature at which $\Delta G = 0$:

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ}
$$

**Worked Example.** At what temperature does the thermal decomposition of calcium carbonate become
spontaneous?

$$
\mathrm{CaCO{}_3(s) \to \mathrm{CaO{}(s) + \mathrm{CO{}_2(g)
$$

$\Delta H^\circ = +178\,\mathrm{kJ/mol{}$, $\Delta S^\circ = +160\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$$
T = \frac{178 \times 10^3}{160} = 1113\,\mathrm{K{} = 840^\circ\mathrm{C{}
$$

Above $1113\,\mathrm{K{}$, $\Delta G^\circ \lt 0$ and decomposition is spontaneous. In a lime kiln,
temperatures of approximately $900$--$1000^\circ\mathrm{C{}$ are used to ensure thermodynamic
feasibility while maintaining a practical rate.

## Graphical Interpretation

A plot of $\Delta G^\circ$ vs $T$ is a straight line with slope $= -\Delta S^\circ$ and y-intercept
$= \Delta H^\circ$ (at $T = 0$).

- When $\Delta S^\circ \gt 0$: the line slopes downward. The reaction becomes more spontaneous as
  temperature increases.
- When $\Delta S^\circ \lt 0$: the line slopes upward. The reaction becomes less spontaneous as
  temperature increases.
- The x-intercept ($\Delta G^\circ = 0$) gives the equilibrium temperature.

**Important caveat:** This linear extrapolation assumes that $\Delta H^\circ$ and $\Delta S^\circ$
are independent of temperature (Kirchhoff's approximation). This is a reasonable approximation over
small temperature ranges but fails over large ranges where heat capacities change significantly.

### Non-Standard Conditions: $\Delta G$ vs $\Delta G^\circ$

The standard free energy change ($\Delta G^\circ$) applies when all reactants and products are in
their standard states (1 mol/dm$^3$ for solutions, 1 bar for gases). Under non-standard conditions:

$$
\Delta G = \Delta G^\circ + RT\ln Q
$$

where $Q$ is the reaction quotient (the same expression as $K$ but with current, non-equilibrium
concentrations or partial pressures).

At equilibrium, $Q = K$ and $\Delta G = 0$, recovering $\Delta G^\circ = -RT\ln K$.

## Industrial Applications

### The Haber Process

$$
\mathrm{N{}_2(g) + 3\mathrm{H{}_2(g) \rightleftharpoons 2\mathrm{NH{}_3(g) \quad \Delta H^\circ = -92\,\mathrm{kJ/mol{}
$$

$\Delta H^\circ \lt 0$ (exothermic), $\Delta S^\circ \lt 0$ (4 moles of gas to 2 moles). By Le
Chatelier's principle and the Gibbs equation:

- **Low temperature** favours the forward reaction (exothermic). But low temperature gives a slow
  rate.
- **High pressure** favours the forward reaction (fewer gas moles on the product side).
- **Compromise:** $450^\circ\mathrm{C{}$, $200\,\mathrm{atm{}$, with an iron catalyst.

### The Contact Process

$$
2\mathrm{SO{}_2(g) + \mathrm{O{}_2(g) \rightleftharpoons 2\mathrm{SO{}_3(g) \quad \Delta H^\circ = -198\,\mathrm{kJ/mol{}
$$

$\Delta H^\circ \lt 0$, $\Delta S^\circ \lt 0$ (3 moles to 2 moles). Low temperature favours the
product but slows the rate. Industrial conditions: $450^\circ\mathrm{C{}$, $1$--$2\,\mathrm{atm{}$,
$\mathrm{V{}_2\mathrm{O{}_5$ catalyst.

### Extraction of Iron

$$
\mathrm{Fe{}_2\mathrm{O{}_3(s) + 3\mathrm{CO{}(g) \rightleftharpoons 2\mathrm{Fe{}(l) + 3\mathrm{CO{}_2(g) \quad \Delta H^\circ = -23\,\mathrm{kJ/mol{}
$$

$\Delta H^\circ \lt 0$ but small. The entropy change is favourable (3 moles of gas reactants to 3
moles of gas products, but the solid is consumed). At the blast furnace temperature
($\approx 1500^\circ\mathrm{C{}$), the reaction is thermodynamically feasible.

## Common Pitfalls

1. **Unit mismatch in the Gibbs equation.** $\Delta H$ is typically in $\mathrm{kJ/mol{}$, while
   $\Delta S$ is in $\mathrm{J\,mol^{-1}\,K^{-1}}$. Always convert to consistent units before
   combining: either convert $\Delta H$ to $\mathrm{J/mol{}$ or $\Delta S$ to
   $\mathrm{kJ\,mol^{-1}\,K^{-1}}$.

2. **Using $\Delta G \lt 0$ to predict rate.** Thermodynamics says nothing about kinetics. A
   reaction with $\Delta G \ll 0$ may be immeasurably slow (e.g. diamond conversion to graphite at
   room temperature: $\Delta G^\circ \approx -2.9\,\mathrm{kJ/mol{}$, but the half-life is
   effectively infinite).

3. **Forgetting that $\Delta S^\circ$ values are absolute.** Unlike $\Delta H_f^\circ$ (which is
   relative to elements in standard states), $S^\circ$ values are absolute entropies. $S^\circ$ of
   an element in its standard state is not zero (except at $0\,\mathrm{K{}$).

4. **Confusing $\Delta G$ with $\Delta G^\circ$.** $\Delta G^\circ$ is the free energy change under
   standard conditions. The actual free energy change $\Delta G$ depends on the specific
   concentrations/pressures and is given by $\Delta G = \Delta G^\circ + RT\ln Q$.

5. **Assuming the linear $\Delta G$ vs $T$ relationship holds indefinitely.** The equation
   $\Delta G = \Delta H - T\Delta S$ assumes $\Delta H$ and $\Delta S$ are temperature-independent.
   Over large temperature ranges, this approximation fails.

## Practice Problems

<details>
<summary>Problem 1</summary>

For the reaction $\mathrm{C{}(s) + \mathrm{H{}_2\mathrm{O{}(g) \to \mathrm{CO{}(g) + \mathrm{H{}_2(g)$:

$\Delta H^\circ = +131\,\mathrm{kJ/mol{}$, $\Delta S^\circ = +134\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

(a) Calculate $\Delta G^\circ$ at $298\,\mathrm{K{}$. Is the reaction spontaneous? (b) At what
temperature does the reaction become spontaneous? (c) Calculate $K$ at $1000\,\mathrm{K{}$.

**Solution:**

(a)

$$
\Delta G^\circ = 131000 - 298 \times 134 = 131000 - 39932 = +91068\,\mathrm{J/mol{} = +91.1\,\mathrm{kJ/mol{}
$$

$\Delta G^\circ \gt 0$: not spontaneous at $298\,\mathrm{K{}$.

(b)

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{131000}{134} = 978\,\mathrm{K{} = 705^\circ\mathrm{C{}
$$

Above $978\,\mathrm{K{}$, the reaction becomes spontaneous.

(c) At $1000\,\mathrm{K{}$:

$$
\Delta G^\circ = 131000 - 1000 \times 134 = 131000 - 134000 = -3000\,\mathrm{J/mol{}
$$

$$
K = \exp\left(\frac{-\Delta G^\circ}{RT}\right) = \exp\left(\frac{3000}{8.314 \times 1000}\right) = \exp(0.361) = 1.43
$$

$K = 1.43$, so products are slightly favoured at $1000\,\mathrm{K{}$.

</details>

<details>
<summary>Problem 2</summary>

The melting of ice: $\mathrm{H{}_2\mathrm{O{}(s) \to \mathrm{H{}_2\mathrm{O{}(l)$ has
$\Delta H^\circ = +6.01\,\mathrm{kJ/mol{}$ and
$\Delta S^\circ = +22.0\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

(a) Calculate the normal melting point of ice. (b) Explain why ice melts spontaneously at room
temperature despite the process being endothermic.

**Solution:**

(a) At the melting point, $\Delta G = 0$:

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{6010}{22.0} = 273\,\mathrm{K{} = 0^\circ\mathrm{C{}
$$

(b) Although $\Delta H^\circ \gt 0$ (endothermic), $\Delta S^\circ \gt 0$ (entropy increases). At
temperatures above $273\,\mathrm{K{}$, the $T\Delta S$ term exceeds $\Delta H$, making
$\Delta G \lt 0$. The entropy gain from the increased disorder of the liquid phase more than
compensates for the enthalpy cost of breaking the hydrogen-bonded lattice.

</details>

<details>
<summary>Problem 3</summary>

For the reaction $2\mathrm{NO{}_2(g) \rightleftharpoons \mathrm{N{}_2\mathrm{O{}_4(g)$ at $298\,\mathrm{K{}$:

$\Delta H^\circ = -57.2\,\mathrm{kJ/mol{}$, $\Delta S^\circ = -175.8\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

(a) Calculate $\Delta G^\circ$ and $K_p$ at $298\,\mathrm{K{}$.
(b) At what temperature does $K_p = 1$?
(c) Explain qualitatively whether increasing temperature increases or decreases the yield of $\mathrm{N{}_2\mathrm{O{}_4$.

**Solution:**

(a)

$$
\Delta G^\circ = -57200 - 298 \times (-175.8) = -57200 + 52388 = -4812\,\mathrm{J/mol{} = -4.81\,\mathrm{kJ/mol{}
$$

$$
K_p = \exp\left(\frac{4812}{8.314 \times 298}\right) = \exp(1.943) = 6.98
$$

(b) $K_p = 1$ when $\Delta G^\circ = 0$:

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{-57200}{-175.8} = 325\,\mathrm{K{}
$$

(c) The forward reaction is exothermic ($\Delta H^\circ \lt 0$) and decreases entropy ($\Delta S^\circ \lt 0$). Increasing temperature makes $\Delta G^\circ$ less negative (eventually positive), so $K_p$ decreases. The yield of $\mathrm{N{}_2\mathrm{O{}_4$ decreases with increasing temperature. This is consistent with Le Chatelier's principle.

</details>

## Entropy in Chemical Processes

### Entropy of Phase Changes

At a phase transition, $\Delta G = 0$, so $\Delta S = \Delta H / T$.

For vaporisation: $\Delta S_\mathrm{vap{} = \Delta H_\mathrm{vap{} / T_\mathrm{boil{}$

Trouton's rule: $\Delta S_\mathrm{vap{} \approx 85\,\mathrm{J\,mol^{-1}\,K^{-1}}$ for most non-polar liquids. Deviations indicate hydrogen bonding (e.g. water: $\Delta S_\mathrm{vap{} = 109\,\mathrm{J\,mol^{-1}\,K^{-1}}$, due to extra ordering in the liquid from H-bonds).

### Entropy of Mixing

When two ideal gases (or two ideal solutions) mix, the entropy always increases:

$$
\Delta S_\mathrm{mix{} = -nR(x_1 \ln x_1 + x_2 \ln x_2)
$$

where $x_1$ and $x_2$ are the mole fractions. For equal amounts ($x_1 = x_2 = 0.5$):

$$
\Delta S_\mathrm{mix{} = -nR(0.5 \ln 0.5 + 0.5 \ln 0.5) = -nR(-0.693) = 5.76n\,\mathrm{J/K{}
$$

This is the thermodynamic basis for diffusion: gases spontaneously mix because the mixed state has higher entropy.

### The Third Law of Thermodynamics

The entropy of a perfect crystal at absolute zero is zero:

$$
S(0\,\mathrm{K{}) = 0
$$

This provides the reference point for absolute entropies ($S^\circ$ values tabulated in data books). Unlike enthalpy, entropy has an absolute scale.

### Worked Example: Calculating $\Delta S^\circ$ from Absolute Entropies

Calculate $\Delta S^\circ$ for the combustion of methane:

$$
\mathrm{CH{}_4(g) + 2\mathrm{O{}_2(g) \to \mathrm{CO{}_2(g) + 2\mathrm{H{}_2\mathrm{O{}(l)
$$

$S^\circ$ values: $\mathrm{CH{}_4(g) = 186.3$, $\mathrm{O{}_2(g) = 205.1$, $\mathrm{CO{}_2(g) = 213.7$, $\mathrm{H{}_2\mathrm{O{}(l) = 69.9\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$$
\Delta S^\circ = [213.7 + 2(69.9)] - [186.3 + 2(205.1)] = 353.5 - 596.5 = -243.0\,\mathrm{J\,mol^{-1}\,K^{-1}}
$$

The entropy decreases because 3 moles of gas produce 1 mole of gas + 2 moles of liquid. The decrease in the number of gaseous molecules dominates.

## Gibbs Free Energy in Biological Systems

ATP hydrolysis is the energy currency of cells:

$$
\mathrm{ATP{} + \mathrm{H{}_2\mathrm{O{} \to \mathrm{ADP{} + \mathrm{P{}_i \quad \Delta G^\circ = -30.5\,\mathrm{kJ/mol{}
$$

The large negative $\Delta G^\circ$ makes this reaction thermodynamically favourable, and it is coupled to endergonic (unfavourable) reactions in the cell. For example, the synthesis of glucose-6-phosphate from glucose and phosphate ($\Delta G^\circ = +13.8\,\mathrm{kJ/mol{}$) is driven by coupling with ATP hydrolysis:

$$
\mathrm{Glucose{} + \mathrm{P{}_i + \mathrm{ATP{} \to \mathrm{Glucose\text{'\{'}-{'\}'}6\text{'\{'}-{'\}'}phosphate} + \mathrm{ADP{}
$$

$$
\Delta G^\circ_\mathrm{overall{} = 13.8 + (-30.5) = -16.7\,\mathrm{kJ/mol{}
$$

The coupled reaction is spontaneous because the overall $\Delta G^\circ$ is negative.

## Thermodynamic Cycles

### Born-Haber Cycles (Recap)

Born-Haber cycles apply Hess's Law to ionic compound formation. They are covered in detail in [Born-Haber Cycles](./born-haber-cycles).

### Enthalpy-Entropy Compensation

Some reactions show enthalpy-entropy compensation: a more exothermic $\Delta H$ is offset by a more negative $\Delta S$, so $\Delta G$ changes less than expected. This is common in:

- Solvent reorganisation around dissolved species.
- Protein folding (hydrophobic effect).
- Ligand binding.

## Worked Examples: Comprehensive Gibbs Free Energy Problems

### Problem: Predicting Spontaneity at Different Temperatures

For the reaction $\mathrm{C{}(\text{'\{'}graphite{'\}'}) + \mathrm{CO{}_2(g) \rightleftharpoons 2\mathrm{CO{}(g)$:

$$
\Delta H^\circ = +173\,\mathrm{kJ/mol{}, \quad \Delta S^\circ = +176\,\mathrm{J\,mol^{-1}\,K^{-1}}
$$

(a) Calculate $\Delta G^\circ$ at $298\,\mathrm{K{}$ and $1000\,\mathrm{K{}$.

(b) At what temperature does the reaction become spontaneous?

(c) Calculate $K$ at $1000\,\mathrm{K{}$.

**(a)** At $298\,\mathrm{K{}$:

$$
\Delta G^\circ = 173 \times 10^3 - 298 \times 176 = 173000 - 52448 = +120\,552\,\mathrm{J/mol{} = +120.6\,\mathrm{kJ/mol{}
$$

Not spontaneous at room temperature.

At $1000\,\mathrm{K{}$:

$$
\Delta G^\circ = 173 \times 10^3 - 1000 \times 176 = 173000 - 176000 = -3000\,\mathrm{J/mol{} = -3.0\,\mathrm{kJ/mol{}
$$

Spontaneous at $1000\,\mathrm{K{}$.

**(b)** $\Delta G^\circ = 0$ when:

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{173 \times 10^3}{176} = 983\,\mathrm{K{}
$$

**(c)** At $1000\,\mathrm{K{}$:

$$
K = \exp\left(\frac{-\Delta G^\circ}{RT}\right) = \exp\left(\frac{3000}{8.314 \times 1000}\right) = \exp(0.361) = 1.43
$$

$K > 1$, confirming that products are favoured.

### Problem: Using Gibbs Energy to Predict Decomposition

Will $\mathrm{Ag{}_2\mathrm{CO{}_3(s)$ decompose at $500\,\mathrm{K{}$?

$$
\mathrm{Ag{}_2\mathrm{CO{}_3(s) \to \mathrm{Ag{}_2\mathrm{O{}(s) + \mathrm{CO{}_2(g)
$$

$\Delta H^\circ = +82\,\mathrm{kJ/mol{}$, $\Delta S^\circ = +170\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$$
\Delta G^\circ = 82000 - 500 \times 170 = 82000 - 85000 = -3000\,\mathrm{J/mol{}
$$

$\Delta G^\circ < 0$, so the decomposition is spontaneous at $500\,\mathrm{K{}$. (The threshold temperature is $T = 82000/170 = 482\,\mathrm{K{}$.)

## Advanced Entropy and Gibbs Energy

### Entropy Changes of Mixing

When two ideal gases mix, the entropy always increases because there are more ways to arrange the molecules in the larger volume.

**Worked Example:** $1.0\,\mathrm{mol{}$ of $\mathrm{He{}$ and $1.0\,\mathrm{mol{}$ of $\mathrm{Ne{}$, both initially in separate $10.0\,\mathrm{dm{}^3$ containers at $298\,\mathrm{K{}$, are allowed to mix in a combined volume of $20.0\,\mathrm{dm{}^3$. Calculate $\Delta S_\text{'\{'}mix{'\}'}$.

$$\Delta S_\text{'\{'}mix{'\}'} = -nR\left(x_\mathrm{He{}\ln x_\mathrm{He{} + x_\mathrm{Ne{}\ln x_\mathrm{Ne{}\right)$$

where $x_\mathrm{He{} = x_\mathrm{Ne{} = 0.5$:

$$\Delta S_\text{'\{'}mix{'\}'} = -(1.0 + 1.0) \times 8.314 \times (0.5 \ln 0.5 + 0.5 \ln 0.5)$$

$$= -2.0 \times 8.314 \times \ln 0.5 = -16.63 \times (-0.693) = +11.5\,\mathrm{J\,K^{-1}}$$

### Phase Transitions and Entropy

At a phase transition, the system is at equilibrium so $\Delta G = 0$, giving:

$$\Delta S_\text{'\{'}transition{'\}'} = \frac{\Delta H_\text{'\{'}transition{'\}'}}{T_\text{'\{'}transition{'\}'}}$$

| Transition | $\Delta H$ | $\Delta S$ | $\Delta G$ |
|---|---|---|---|
| Melting (fusion) | Positive (endothermic) | Positive (disorder increases) | 0 (at $T_\text{'\{'}m{'\}'}$) |
| Boiling (vaporisation) | Positive (endothermic) | Positive (large increase in disorder) | 0 (at $T_\text{'\{'}b{'\}'}$) |
| Freezing | Negative (exothermic) | Negative (order increases) | 0 (at $T_\text{'\{'}m{'\}'}$) |
| Sublimation | Positive (endothermic) | Positive | 0 (at $T_\text{'\{'}sub{'\}'}$) |

**Worked Example:** Calculate the entropy of vaporisation of water at $373\,\mathrm{K{}$ given $\Delta H_\text{'\{'}vap{'\}'} = +40.7\,\mathrm{kJ/mol{}$.

$$\Delta S_\text{'\{'}vap{'\}'} = \frac{40700}{373} = +109\,\mathrm{J\,mol^{-1}\,K^{-1}}$$

This is close to Trouton's rule ($\Delta S_\text{'\{'}vap{'\}'} \approx 88\,\mathrm{J\,mol^{-1}\,K^{-1}}$ for non-hydrogen-bonding liquids). Water is higher because of extensive hydrogen bonding in the liquid phase.

### Born-Haber Cycles and Gibbs Energy

Gibbs energy of formation can be calculated from Born-Haber cycles by using $\Delta G = \Delta H - T\Delta S$ for each step.

**Worked Example:** Calculate $\Delta G_f^\circ$ for $\mathrm{NaCl{}(s)$ at $298\,\mathrm{K{}$.

Using the Born-Haber cycle values:
- $\Delta H_f^\circ(\mathrm{NaCl{}) = -411\,\mathrm{kJ/mol{}$
- $\Delta S_f^\circ = -72.1\,\mathrm{J\,mol^{-1}\,K^{-1}}$ (system becomes more ordered: solid from gas atoms)

$$\Delta G_f^\circ = -411000 - 298 \times (-72.1) = -411000 + 21486 = -389514\,\mathrm{J/mol{} = -389.5\,\mathrm{kJ/mol{}$$

### Coupled Reactions in Biochemistry

A thermodynamically unfavourable reaction ($\Delta G > 0$) can be driven by coupling it to a thermodynamically favourable one ($\Delta G < 0$), provided the overall $\Delta G < 0$.

**Example:** Hydrolysis of ATP:
$$\mathrm{ATP{} + \mathrm{H{}_2\mathrm{O{} \to \mathrm{ADP{} + \mathrm{P{}_i \quad \Delta G^\circ = -30.5\,\mathrm{kJ/mol{}$$

This strongly exergonic reaction drives many endergonic processes in cells. If a reaction requires $+20\,\mathrm{kJ/mol{}$, coupling with ATP hydrolysis gives:

$$\Delta G_\text{'\{'}overall{'\}'} = +20.0 + (-30.5) = -10.5\,\mathrm{kJ/mol{}$$

### Gibbs Energy and Equilibrium: Quantitative Treatment

The relationship between $\Delta G$, the reaction quotient $Q$, and the equilibrium constant $K$:

$$\Delta G = \Delta G^\circ + RT\ln Q$$

At equilibrium, $\Delta G = 0$ and $Q = K$, giving:

$$\Delta G^\circ = -RT\ln K$$

**Worked Example:** For the reaction $\mathrm{N{}_2\mathrm{O{}_4(g) \rightleftharpoons 2\mathrm{NO{}_2(g)$ at $298\,\mathrm{K{}$:

$\Delta G^\circ = +4.72\,\mathrm{kJ/mol{}$. Calculate $K$.

$$K = \exp\left(\frac{-\Delta G^\circ}{RT}\right) = \exp\left(\frac{-4720}{8.314 \times 298}\right) = \exp(-1.905) = 0.149$$

If the initial pressure of $\mathrm{N{}_2\mathrm{O{}_4$ is $1.00\,\mathrm{atm{}$ and no $\mathrm{NO{}_2$ is present:

$$Q = \frac{(p_{\mathrm{NO{}_2})^2}{p_{\mathrm{N{}_2\mathrm{O{}_4}} = \frac{0}{1} = 0$$

$$\Delta G = 4720 + 8.314 \times 298 \times \ln 0 = 4720 + (-\infty) \to -\infty$$

$\Delta G$ is very negative, so the forward reaction is strongly favoured initially (the reaction proceeds to the right until equilibrium is reached).

### Common Pitfalls

1. **Sign errors in $\Delta G = \Delta H - T\Delta S$:** Remember the minus sign. A positive $\Delta H$ and positive $\Delta S$ means the reaction is spontaneous at high $T$ (the $-T\Delta S$ term dominates). Students often incorrectly write $\Delta G = \Delta H + T\Delta S$.

2. **Units of $\Delta S$:** Always use $\mathrm{J\,mol^{-1}\,K^{-1}}$ for entropy and $\mathrm{kJ/mol{}$ for enthalpy. You must convert one of them before combining. Forgetting to convert $\Delta S$ from $\mathrm{J{}$ to $\mathrm{kJ{}$ (divide by 1000) is the single most common arithmetic error.

3. **Standard vs non-standard conditions:** $\Delta G^\circ$ applies only when all components are in their standard states (1 mol/dm$^3$ for solutions, $100\,\mathrm{kPa{}$ for gases, pure solids/liquids). Under non-standard conditions, use $\Delta G = \Delta G^\circ + RT\ln Q$.

4. **Assuming $\Delta G^\circ < 0$ means the reaction happens quickly:** Thermodynamic feasibility does not imply kinetic feasibility. Diamond converting to graphite has $\Delta G^\circ < 0$ but the rate is essentially zero at room temperature.

5. **Entropy of a pure element:** The absolute entropy of a pure element in its standard state at $298\,\mathrm{K{}$ is not zero (only $S^\circ$ at $0\,\mathrm{K{}$ is zero, by the third law).

### Practical Applications: Gibbs Energy in Industry

| Industrial Process | Reaction | $\Delta H^\circ$ (kJ/mol) | $\Delta S^\circ$ (J/mol/K) | $T_\text{'\{'}threshold{'\}'}$ (K) |
|---|---|---|---|---|
| Haber process | $\mathrm{N{}_2 + 3\mathrm{H{}_2 \to 2\mathrm{NH{}_3$ | $-92$ | $-199$ | Not applicable ($\Delta H < 0$, $\Delta S < 0$: spontaneous at low $T$) |
| Contact process | $2\mathrm{SO{}_2 + \mathrm{O{}_2 \to 2\mathrm{SO{}_3$ | $-198$ | $-190$ | Not applicable |
| Thermal decomposition of $\mathrm{CaCO{}_3$ | $\mathrm{CaCO{}_3 \to \mathrm{CaO{} + \mathrm{CO{}_2$ | $+178$ | $+161$ | $1106$ |
| Roasting of $\mathrm{ZnS{}$ | $2\mathrm{ZnS{} + 3\mathrm{O{}_2 \to 2\mathrm{ZnO{} + 2\mathrm{SO{}_2$ | $-880$ | $+100$ | Spontaneous at all $T$ |

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (5 marks)</summary>

For the reaction $\mathrm{C{}(s) + \mathrm{H{}_2\mathrm{O{}(g) \to \mathrm{CO{}(g) + \mathrm{H{}_2(g)$:

$\Delta H^\circ = +131\,\mathrm{kJ/mol{}$, $\Delta S^\circ = +134\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

(a) Calculate $\Delta G^\circ$ at $298\,\mathrm{K{}$ and state whether the reaction is feasible. (3 marks)

(b) Calculate the minimum temperature at which the reaction becomes feasible. (2 marks)

**Mark Scheme:**

(a) $\Delta G^\circ = 131000 - 298 \times 134 = 131000 - 39932 = +91068\,\mathrm{J/mol{} = +91.1\,\mathrm{kJ/mol{}$ (2 marks for calculation).

$\Delta G^\circ > 0$, so the reaction is **not feasible** at $298\,\mathrm{K{}$ (1 mark).

(b) $\Delta G^\circ = 0$ when $T = \Delta H^\circ / \Delta S^\circ = 131000 / 134 = 978\,\mathrm{K{}$ (2 marks).

The reaction becomes feasible above $978\,\mathrm{K{}$.

</details>

<details>
<summary>Q2 (6 marks)</summary>

Explain why the entropy change for the reaction $\mathrm{N{}_2\mathrm{O{}_4(g) \rightleftharpoons 2\mathrm{NO{}_2(g)$ is positive, and calculate $\Delta S^\circ$ given the following standard entropies:

$S^\circ(\mathrm{N{}_2\mathrm{O{}_4) = 304\,\mathrm{J\,mol^{-1}\,K^{-1}}$, $S^\circ(\mathrm{NO{}_2) = 240\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

**Mark Scheme:**

The entropy change is positive because one mole of gas produces two moles of gas (1 mark). There are more ways to arrange the molecules and more microstates when there are more gas particles (1 mark). The products have greater positional disorder than the reactants (1 mark).

$$\Delta S^\circ = 2 \times 240 - 304 = 480 - 304 = +176\,\mathrm{J\,mol^{-1}\,K^{-1}}$$ (3 marks for calculation with correct units).

</details>

<details>
<summary>Q3 (5 marks)</summary>

A student claims that because the combustion of methane is highly exothermic ($\Delta H_c^\circ = -890\,\mathrm{kJ/mol{}$), it must be thermodynamically feasible at all temperatures. Evaluate this claim.

**Mark Scheme:**

$$\mathrm{CH{}_4(g) + 2\mathrm{O{}_2(g) \to \mathrm{CO{}_2(g) + 2\mathrm{H{}_2\mathrm{O{}(l)$$

$\Delta S^\circ = [213 + 2(70)] - [186 + 2(205)] = 353 - 596 = -243\,\mathrm{J\,mol^{-1}\,K^{-1}}$ (2 marks).

Since $\Delta H < 0$ and $\Delta S < 0$, the reaction is feasible only when $\Delta G = \Delta H - T\Delta S < 0$, i.e. when $T < |\Delta H / \Delta S| = 890000/243 = 3663\,\mathrm{K{}$ (2 marks).

The claim is **correct in practice** (combustion is feasible at all reasonable temperatures), but **incorrect in principle** -- at sufficiently high temperatures (above $3663\,\mathrm{K{}$), the reaction would not be thermodynamically feasible (1 mark).

</details>

<details>
<summary>Q4 (4 marks)</summary>

The melting point of sodium is $371\,\mathrm{K{}$ and $\Delta H_\text{'\{'}fus{'\}'} = +2.60\,\mathrm{kJ/mol{}$. Calculate the entropy change of fusion and explain its sign.

**Mark Scheme:**

$$\Delta S_\text{'\{'}fus{'\}'} = \frac{\Delta H_\text{'\{'}fus{'\}'}}{T_\text{'\{'}m{'\}'}} = \frac{2600}{371} = +7.01\,\mathrm{J\,mol^{-1}\,K^{-1}}$$ (2 marks).

The entropy change is positive because the solid sodium becomes a liquid, which has greater disorder and more ways to arrange the particles (1 mark). The ions in the liquid are no longer fixed in a lattice and have greater freedom of movement (1 mark).

</details>
