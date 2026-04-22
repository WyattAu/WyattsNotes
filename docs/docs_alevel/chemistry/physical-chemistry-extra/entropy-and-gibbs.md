---
title: Entropy and Gibbs Free Energy
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

where $k_B = 1.381 \times 10^{-23}\,\mathrm{J/K}$ is the Boltzmann constant. A system with more
accessible microstates has higher entropy. This is the Boltzmann equation, engraved on his
tombstone.

### Thermodynamic Definition

The entropy change is defined as:

$$
\Delta S = \int \frac{\delta q_\mathrm{rev}}{T}
$$

For an isothermal process:

$$
\Delta S = \frac{q_\mathrm{rev}}{T}
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
$0\,\mathrm{K}$, a perfect crystal has $S = 0$ (third law of thermodynamics). Standard entropies are
always positive.

Typical values ($\mathrm{J\,mol^{-1}\,K^{-1}}$):

| Substance                       | $S^\circ$ |
| ------------------------------- | --------- |
| $\mathrm{C}(\mathrm{diamond})$  | 2.4       |
| $\mathrm{C}(\mathrm{graphite})$ | 5.7       |
| $\mathrm{Fe}(s)$                | 27.3      |
| $\mathrm{NaCl}(s)$              | 72.1      |
| $\mathrm{H}_2\mathrm{O}(l)$     | 69.9      |
| $\mathrm{H}_2\mathrm{O}(g)$     | 188.8     |
| $\mathrm{CO}_2(g)$              | 213.7     |
| $\mathrm{N}_2(g)$               | 191.6     |

Gases have much higher standard entropies than liquids and solids. Diamond has a lower entropy than
graphite due to its more rigid, ordered structure.

### Standard Entropy Change

$$
\Delta S^\circ = \sum S^\circ(\mathrm{products}) - \sum S^\circ(\mathrm{reactants})
$$

**Worked Example.** Calculate $\Delta S^\circ$ for the thermal decomposition of calcium carbonate:

$$
\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)
$$

$$
\Delta S^\circ = S^\circ(\mathrm{CaO}) + S^\circ(\mathrm{CO}_2) - S^\circ(\mathrm{CaCO}_3) = 38.1 + 213.7 - 92.9 = +158.9\,\mathrm{J\,mol^{-1}\,K^{-1}}
$$

The entropy increases because a gas is produced from a solid, creating many more microstates.

## The Second Law of Thermodynamics

The total entropy of the universe increases in any spontaneous process:

$$
\Delta S_\mathrm{universe} = \Delta S_\mathrm{system} + \Delta S_\mathrm{surroundings} \gt 0
$$

At equilibrium: $\Delta S_\mathrm{universe} = 0$.

### Entropy Change of the Surroundings

The surroundings gain or lose heat as a result of the reaction. The entropy change of the
surroundings is:

$$
\Delta S_\mathrm{surroundings} = -\frac{\Delta H_\mathrm{system}}{T}
$$

The negative sign arises because when the system releases heat (exothermic, $\Delta H \lt 0$), the
surroundings gain that heat and their entropy increases. When the system absorbs heat (endothermic,
$\Delta H \gt 0$), the surroundings lose heat and their entropy decreases.

Combining with the second law:

$$
\Delta S_\mathrm{universe} = \Delta S_\mathrm{system} - \frac{\Delta H_\mathrm{system}}{T} \gt 0
$$

Multiplying through by $T$ (which is always positive):

$$
T\Delta S_\mathrm{system} - \Delta H_\mathrm{system} \gt 0
$$

Rearranging:

$$
\Delta H_\mathrm{system} - T\Delta S_\mathrm{system} \lt 0
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

This uses standard enthalpy and entropy data at $298\,\mathrm{K}$.

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

**Worked Example.** For the Haber process at $298\,\mathrm{K}$:

$$
\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)
$$

$\Delta H^\circ = -92\,\mathrm{kJ/mol}$, $\Delta S^\circ = -199\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$$
\Delta G^\circ = -92000 - 298 \times (-199) = -92000 + 59302 = -32698\,\mathrm{J/mol} = -32.7\,\mathrm{kJ/mol}
$$

Since $\Delta G^\circ \lt 0$, the reaction is spontaneous at $298\,\mathrm{K}$ (but kinetically
extremely slow without a catalyst).

$$
K = \exp\left(\frac{-\Delta G^\circ}{RT}\right) = \exp\left(\frac{32698}{8.314 \times 298}\right) = \exp(13.19) = 5.3 \times 10^5
$$

The equilibrium constant is very large, confirming that products are strongly favoured at
$298\,\mathrm{K}$.

## Temperature Dependence of Feasibility

The $\Delta G = \Delta H - T\Delta S$ equation reveals that the spontaneity of a reaction can change
with temperature. The four cases:

| $\Delta H$ | $\Delta S$ | Low $T$         | High $T$        | Example                                    |
| ---------- | ---------- | --------------- | --------------- | ------------------------------------------ |
| $-$        | $+$        | Spontaneous     | Spontaneous     | Combustion of hydrogen                     |
| $-$        | $-$        | Spontaneous     | Non-spontaneous | Freezing of water                          |
| $+$        | $+$        | Non-spontaneous | Spontaneous     | Thermal decomposition of $\mathrm{CaCO}_3$ |
| $+$        | $-$        | Non-spontaneous | Non-spontaneous | Decomposition of $\mathrm{N}_2\mathrm{O}$  |

### The Temperature of Equilibrium

The temperature at which a reaction changes from spontaneous to non-spontaneous (or vice versa) is
the temperature at which $\Delta G = 0$:

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ}
$$

**Worked Example.** At what temperature does the thermal decomposition of calcium carbonate become
spontaneous?

$$
\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)
$$

$\Delta H^\circ = +178\,\mathrm{kJ/mol}$, $\Delta S^\circ = +160\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

$$
T = \frac{178 \times 10^3}{160} = 1113\,\mathrm{K} = 840^\circ\mathrm{C}
$$

Above $1113\,\mathrm{K}$, $\Delta G^\circ \lt 0$ and decomposition is spontaneous. In a lime kiln,
temperatures of approximately $900$--$1000^\circ\mathrm{C}$ are used to ensure thermodynamic
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
\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g) \quad \Delta H^\circ = -92\,\mathrm{kJ/mol}
$$

$\Delta H^\circ \lt 0$ (exothermic), $\Delta S^\circ \lt 0$ (4 moles of gas to 2 moles). By Le
Chatelier's principle and the Gibbs equation:

- **Low temperature** favours the forward reaction (exothermic). But low temperature gives a slow
  rate.
- **High pressure** favours the forward reaction (fewer gas moles on the product side).
- **Compromise:** $450^\circ\mathrm{C}$, $200\,\mathrm{atm}$, with an iron catalyst.

### The Contact Process

$$
2\mathrm{SO}_2(g) + \mathrm{O}_2(g) \rightleftharpoons 2\mathrm{SO}_3(g) \quad \Delta H^\circ = -198\,\mathrm{kJ/mol}
$$

$\Delta H^\circ \lt 0$, $\Delta S^\circ \lt 0$ (3 moles to 2 moles). Low temperature favours the
product but slows the rate. Industrial conditions: $450^\circ\mathrm{C}$, $1$--$2\,\mathrm{atm}$,
$\mathrm{V}_2\mathrm{O}_5$ catalyst.

### Extraction of Iron

$$
\mathrm{Fe}_2\mathrm{O}_3(s) + 3\mathrm{CO}(g) \rightleftharpoons 2\mathrm{Fe}(l) + 3\mathrm{CO}_2(g) \quad \Delta H^\circ = -23\,\mathrm{kJ/mol}
$$

$\Delta H^\circ \lt 0$ but small. The entropy change is favourable (3 moles of gas reactants to 3
moles of gas products, but the solid is consumed). At the blast furnace temperature
($\approx 1500^\circ\mathrm{C}$), the reaction is thermodynamically feasible.

## Common Pitfalls

1. **Unit mismatch in the Gibbs equation.** $\Delta H$ is typically in $\mathrm{kJ/mol}$, while
   $\Delta S$ is in $\mathrm{J\,mol^{-1}\,K^{-1}}$. Always convert to consistent units before
   combining: either convert $\Delta H$ to $\mathrm{J/mol}$ or $\Delta S$ to
   $\mathrm{kJ\,mol^{-1}\,K^{-1}}$.

2. **Using $\Delta G \lt 0$ to predict rate.** Thermodynamics says nothing about kinetics. A
   reaction with $\Delta G \ll 0$ may be immeasurably slow (e.g. diamond conversion to graphite at
   room temperature: $\Delta G^\circ \approx -2.9\,\mathrm{kJ/mol}$, but the half-life is
   effectively infinite).

3. **Forgetting that $\Delta S^\circ$ values are absolute.** Unlike $\Delta H_f^\circ$ (which is
   relative to elements in standard states), $S^\circ$ values are absolute entropies. $S^\circ$ of
   an element in its standard state is not zero (except at $0\,\mathrm{K}$).

4. **Confusing $\Delta G$ with $\Delta G^\circ$.** $\Delta G^\circ$ is the free energy change under
   standard conditions. The actual free energy change $\Delta G$ depends on the specific
   concentrations/pressures and is given by $\Delta G = \Delta G^\circ + RT\ln Q$.

5. **Assuming the linear $\Delta G$ vs $T$ relationship holds indefinitely.** The equation
   $\Delta G = \Delta H - T\Delta S$ assumes $\Delta H$ and $\Delta S$ are temperature-independent.
   Over large temperature ranges, this approximation fails.

## Practice Problems

<details>
<summary>Problem 1</summary>

For the reaction $\mathrm{C}(s) + \mathrm{H}_2\mathrm{O}(g) \to \mathrm{CO}(g) + \mathrm{H}_2(g)$:

$\Delta H^\circ = +131\,\mathrm{kJ/mol}$, $\Delta S^\circ = +134\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

(a) Calculate $\Delta G^\circ$ at $298\,\mathrm{K}$. Is the reaction spontaneous? (b) At what
temperature does the reaction become spontaneous? (c) Calculate $K$ at $1000\,\mathrm{K}$.

**Solution:**

(a)

$$
\Delta G^\circ = 131000 - 298 \times 134 = 131000 - 39932 = +91068\,\mathrm{J/mol} = +91.1\,\mathrm{kJ/mol}
$$

$\Delta G^\circ \gt 0$: not spontaneous at $298\,\mathrm{K}$.

(b)

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{131000}{134} = 978\,\mathrm{K} = 705^\circ\mathrm{C}
$$

Above $978\,\mathrm{K}$, the reaction becomes spontaneous.

(c) At $1000\,\mathrm{K}$:

$$
\Delta G^\circ = 131000 - 1000 \times 134 = 131000 - 134000 = -3000\,\mathrm{J/mol}
$$

$$
K = \exp\left(\frac{-\Delta G^\circ}{RT}\right) = \exp\left(\frac{3000}{8.314 \times 1000}\right) = \exp(0.361) = 1.43
$$

$K = 1.43$, so products are slightly favoured at $1000\,\mathrm{K}$.

</details>

<details>
<summary>Problem 2</summary>

The melting of ice: $\mathrm{H}_2\mathrm{O}(s) \to \mathrm{H}_2\mathrm{O}(l)$ has
$\Delta H^\circ = +6.01\,\mathrm{kJ/mol}$ and
$\Delta S^\circ = +22.0\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

(a) Calculate the normal melting point of ice. (b) Explain why ice melts spontaneously at room
temperature despite the process being endothermic.

**Solution:**

(a) At the melting point, $\Delta G = 0$:

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{6010}{22.0} = 273\,\mathrm{K} = 0^\circ\mathrm{C}
$$

(b) Although $\Delta H^\circ \gt 0$ (endothermic), $\Delta S^\circ \gt 0$ (entropy increases). At
temperatures above $273\,\mathrm{K}$, the $T\Delta S$ term exceeds $\Delta H$, making
$\Delta G \lt 0$. The entropy gain from the increased disorder of the liquid phase more than
compensates for the enthalpy cost of breaking the hydrogen-bonded lattice.

</details>
