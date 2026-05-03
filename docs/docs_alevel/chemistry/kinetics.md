---
title: Chemical Kinetics
description:
  "A-Level Chemistry notes on Chemical Kinetics: Rate of Reaction; Methods of Measuring Rate; Collision Theory; Activation Energy ($E_a$)."
date: 2026-04-21T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: chemical-kinetics
sidebar_position: 9
---

# Chemical Kinetics

Kinetics is the study of reaction rates and the factors that influence them. Thermodynamics tells us whether a reaction is feasible; kinetics tells us whether it occurs at an observable rate.

## Rate of Reaction

The **rate of reaction** is the change in concentration of a reactant or product per unit time:

$$
\mathrm{Rate} = \frac{\Delta[\mathrm{product}]}{\Delta t} = -\frac{\Delta[\mathrm{reactant}]}{\Delta t}
$$

The negative sign for reactants ensures a positive rate value. For a general reaction:

$$
a\mathrm{A} + b\mathrm{B} \to c\mathrm{C} + d\mathrm{D}
$$

$$
\mathrm{Rate} = -\frac{1}{a}\frac{d[\mathrm{A}]}{dt} = -\frac{1}{b}\frac{d[\mathrm{B}]}{dt} = \frac{1}{c}\frac{d[\mathrm{C}]}{dt} = \frac{1}{d}\frac{d[\mathrm{D}]}{dt}
$$

Units of rate: $\mathrm{mol\,dm^{-3}\,s^{-1}}$.

### Methods of Measuring Rate

| Method | Observable | Suitable Reactions |
|---|---|---|
| Gas collection | Volume of gas vs time | Reactions producing gaseous products ($\mathrm{CO}_2$, $\mathrm{H}_2$) |
| Mass loss | Mass decrease vs time | Reactions producing gas from a solid in an open vessel |
| Colorimetry | Absorbance vs time | Reactions involving coloured species |
| Titration | Concentration by quenching | Slow reactions; samples withdrawn and quenched |
| Conductivity | Conductance vs time | Reactions changing the number or type of ions |
| Clock reactions | Time to reach a fixed point | Initial rate determination (e.g. iodine clock) |

## Collision Theory

For a reaction to occur between two molecules:

1. **They must collide** with sufficient kinetic energy.
2. The collision must have the correct **orientation** (steric requirement).
3. The kinetic energy along the line of centres must **exceed the activation energy** $E_a$.

### Activation Energy ($E_a$)

The activation energy is the minimum energy that colliding molecules must possess for a reaction to occur. It represents the energy barrier between reactants and products.

On an **enthalpy profile diagram**, $E_a$ is the difference between the energy of the reactants and the energy of the transition state (activated complex).

### Maxwell-Boltzmann Distribution

At a given temperature, the molecules in a gas have a distribution of kinetic energies described by the Maxwell-Boltzmann distribution:

$$
f(E) = 2\sqrt{\frac{E}{\pi}} \left(\frac{1}{k_BT}\right)^{3/2} e^{-E/k_BT}
$$

Key features:

- The distribution is asymmetric (skewed towards lower energies).
- The most probable energy is at the peak.
- The mean energy is slightly above the most probable energy.
- There is no upper limit on energy, but the fraction of molecules with very high energy decreases exponentially.

**Effect of temperature:** Increasing temperature shifts the distribution to higher energies and broadens it. The proportion of molecules with $E \ge E_a$ increases significantly, even for modest temperature increases.

**Quantitative analysis:** The fraction of molecules with energy exceeding $E_a$ is approximately proportional to $e^{-E_a/RT}$. A $10\,\mathrm{K}$ increase from $300\,\mathrm{K}$ to $310\,\mathrm{K}$ changes the exponent by a factor of $e^{-E_a/R(1/310 - 1/300)}$. For $E_a = 50\,\mathrm{kJ/mol}$:

$$
\mathrm{Ratio} = e^{50000/8.314 \times (1/310 - 1/300)} = e^{-6.45} \approx \mathrm{factor of 2 increase}
$$

This is the origin of the rule of thumb that reaction rates roughly double for every $10\,\mathrm{K}$ temperature increase.

## Factors Affecting Rate

### Temperature

Increasing temperature increases the rate because more molecules possess kinetic energy exceeding $E_a$. The effect is exponential (see Arrhenius equation below).

### Concentration / Pressure

Increasing concentration (for solutions) or pressure (for gases) increases the frequency of collisions. The rate is proportional to the frequency of effective collisions, which increases with the number of molecules per unit volume.

### Surface Area

Increasing the surface area of a solid reactant increases the number of reaction sites available for collision, increasing the rate. This is why powders react faster than lumps.

### Catalysts

A catalyst provides an alternative reaction pathway with a lower activation energy. It does not alter the thermodynamics (no change to $\Delta H$ or equilibrium position) but increases the rate of both forward and reverse reactions equally.

On the Maxwell-Boltzmann distribution, a catalyst effectively shifts the activation energy threshold to the left, dramatically increasing the fraction of molecules that can react.

## Rate Equations

For a reaction $a\mathrm{A} + b\mathrm{B} \to \mathrm{products}$, the **rate equation** has the form:

$$
\mathrm{Rate} = k[\mathrm{A}]^m[\mathrm{B}]^n
$$

where:
- $k$ is the **rate constant** (temperature-dependent)
- $m$ is the **order of reaction with respect to A**
- $n$ is the **order of reaction with respect to B**
- The **overall order** is $m + n$

**Critical point:** The orders $m$ and $n$ are determined experimentally. They are not necessarily equal to the stoichiometric coefficients $a$ and $b$. The orders can only be predicted from the mechanism, not from the overall equation.

### Units of the Rate Constant $k$

The units of $k$ depend on the overall order of reaction:

| Overall order | Rate equation | Units of $k$ |
|---|---|---|
| 0 | $\mathrm{Rate} = k$ | $\mathrm{mol\,dm^{-3}\,s^{-1}}$ |
| 1 | $\mathrm{Rate} = k[\mathrm{A}]$ | $\mathrm{s^{-1}}$ |
| 2 | $\mathrm{Rate} = k[\mathrm{A}]^2$ | $\mathrm{mol^{-1}\,dm^3\,s^{-1}}$ |
| 3 | $\mathrm{Rate} = k[\mathrm{A}]^3$ | $\mathrm{mol^{-2}\,dm^6\,s^{-1}}$ |

In general: $\mathrm{Units of } k = (\mathrm{mol\,dm^{-3}})^{1-\mathrm{order}} \times \mathrm{s^{-1}}$.

### Integrated Rate Equations

For a **zero-order** reaction ($\mathrm{Rate} = k$):

$$
[\mathrm{A}] = [\mathrm{A}]_0 - kt
$$

A plot of $[\mathrm{A}]$ vs $t$ is linear with gradient $-k$.

For a **first-order** reaction ($\mathrm{Rate} = k[\mathrm{A}]$):

$$
\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt
$$

or equivalently:

$$
[\mathrm{A}] = [\mathrm{A}]_0 e^{-kt}
$$

A plot of $\ln[\mathrm{A}]$ vs $t$ is linear with gradient $-k$.

The **half-life** of a first-order reaction is:

$$
t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}
$$

The half-life is constant and independent of initial concentration for first-order reactions.

For a **second-order** reaction ($\mathrm{Rate} = k[\mathrm{A}]^2$):

$$
\frac{1}{[\mathrm{A}]} = \frac{1}{[\mathrm{A}]_0} + kt
$$

A plot of $1/[\mathrm{A}]$ vs $t$ is linear with gradient $k$.

## Determining Orders of Reaction

### Initial Rates Method

Perform experiments with varying initial concentrations while keeping other concentrations constant. Measure the initial rate for each experiment. Compare rates to determine orders.

**Worked Example.** For the reaction between $\mathrm{A}$ and $\mathrm{B}$:

| Experiment | $[\mathrm{A}]$ ($\mathrm{mol/dm}^3$) | $[\mathrm{B}]$ ($\mathrm{mol/dm}^3$) | Initial rate ($\mathrm{mol\,dm^{-3}\,s^{-1}}$) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | $1.2 \times 10^{-3}$ |
| 2 | 0.20 | 0.10 | $2.4 \times 10^{-3}$ |
| 3 | 0.10 | 0.20 | $4.8 \times 10^{-3}$ |

Comparing 1 and 2: $[\mathrm{A}]$ doubles, rate doubles. Order with respect to A: $m = 1$.

Comparing 1 and 3: $[\mathrm{B}]$ doubles, rate quadruples. Order with respect to B: $n = 2$.

Rate equation: $\mathrm{Rate} = k[\mathrm{A}][\mathrm{B}]^2$. Overall order = 3.

$$
k = \frac{\mathrm{Rate}}{[\mathrm{A}][\mathrm{B}]^2} = \frac{1.2 \times 10^{-3}}{0.10 \times 0.01} = 1.2\,\mathrm{mol^{-2}\,dm^6\,s^{-1}}
$$

### Continuous Monitoring

Monitor concentration continuously and plot against time. The shape of the curve reveals the order:

- **Zero order:** straight line (constant rate).
- **First order:** exponential decay; $\ln[\mathrm{A}]$ vs $t$ is linear.
- **Second order:** $1/[\mathrm{A}]$ vs $t$ is linear.

## The Arrhenius Equation

The rate constant depends on temperature according to the Arrhenius equation:

$$
k = A e^{-E_a / RT}
$$

where:
- $A$ is the **pre-exponential factor** (frequency factor) -- related to the frequency of collisions and the probability of correct orientation
- $E_a$ is the activation energy ($\mathrm{J/mol}$)
- $R$ is the gas constant ($8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$)
- $T$ is the temperature ($\mathrm{K}$)

Taking natural logarithms:

$$
\ln k = \ln A - \frac{E_a}{RT}
$$

An **Arrhenius plot** of $\ln k$ vs $1/T$ is linear with:
- Gradient $= -E_a / R$
- y-intercept $= \ln A$

This allows determination of $E_a$ from rate constants measured at different temperatures.

**Worked Example.** The rate constant for a reaction is $3.46 \times 10^{-5}\,\mathrm{s^{-1}}$ at $298\,\mathrm{K}$ and $1.50 \times 10^{-3}\,\mathrm{s^{-1}}$ at $350\,\mathrm{K}$. Calculate $E_a$.

$$
\ln k_2 - \ln k_1 = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
$$

$$
\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)
$$

$$
\ln\left(\frac{1.50 \times 10^{-3}}{3.46 \times 10^{-5}}\right) = \frac{E_a}{8.314}\left(\frac{1}{298} - \frac{1}{350}\right)
$$

$$
\ln(43.35) = \frac{E_a}{8.314}(0.003356 - 0.002857)
$$

$$
3.770 = \frac{E_a}{8.314} \times 4.99 \times 10^{-4}
$$

$$
E_a = \frac{3.770 \times 8.314}{4.99 \times 10^{-4}} = 62,800\,\mathrm{J/mol} = 62.8\,\mathrm{kJ/mol}
$$

## Catalysis

### Heterogeneous Catalysts

The catalyst is in a different phase from the reactants. The mechanism involves adsorption of reactant molecules onto the catalyst surface, where bonds are weakened, reaction occurs, and products desorb.

Examples:
- **Haber process:** Iron catalyst; $\mathrm{N}_2$ and $\mathrm{H}_2$ adsorb onto the iron surface, the $\mathrm{N}\equiv\mathrm{N}$ triple bond is weakened, and $\mathrm{NH}_3$ forms and desorbs.
- **Contact process:** Vanadium(V) oxide ($\mathrm{V}_2\mathrm{O}_5$) catalyses the oxidation of $\mathrm{SO}_2$ to $\mathrm{SO}_3$.

Heterogeneous catalysts can be poisoned by impurities that adsorb strongly to the active sites (e.g. lead in catalytic converters, arsenic in the Contact process).

### Homogeneous Catalysts

The catalyst is in the same phase as the reactants. The catalyst forms an intermediate with the reactants, which then decomposes to release the catalyst and products.

Example: The decomposition of hydrogen peroxide catalysed by $\mathrm{Fe}^{2+}$ ions:

$$
\mathrm{Fe}^{2+} + \mathrm{H}_2\mathrm{O}_2 + 2\mathrm{H}^+ \to \mathrm{Fe}^{3+} + 2\mathrm{H}_2\mathrm{O}
$$

$$
\mathrm{Fe}^{3+} + \mathrm{H}_2\mathrm{O}_2 \to \mathrm{Fe}^{2+} + \mathrm{O}_2 + 2\mathrm{H}^+
$$

Net: $2\mathrm{H}_2\mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O} + \mathrm{O}_2$

### Enzyme Catalysis

Enzymes are biological catalysts (globular proteins). They operate by the **lock-and-key** or **induced-fit** model:

1. Substrate binds to the active site.
2. An enzyme-substrate complex forms.
3. The reaction occurs with lowered $E_a$.
4. Products are released; the enzyme is regenerated.

Enzyme activity depends on temperature (optimum around $37^\circ\mathrm{C}$ for human enzymes; denaturation above) and pH (each enzyme has an optimum pH).

## Mechanisms and the Rate-Determining Step

The **rate-determining step** (RDS) is the slowest step in a reaction mechanism. It controls the overall rate. The rate equation reflects the molecularity of the RDS, not the overall stoichiometry.

**Worked Example.** The reaction $\mathrm{NO}_2(g) + \mathrm{CO}(g) \to \mathrm{NO}(g) + \mathrm{CO}_2(g)$ has the experimental rate equation $\mathrm{Rate} = k[\mathrm{NO}_2]^2$. The proposed mechanism is:

**Step 1 (slow):** $\mathrm{NO}_2 + \mathrm{NO}_2 \to \mathrm{NO} + \mathrm{NO}_3$

**Step 2 (fast):** $\mathrm{NO}_3 + \mathrm{CO} \to \mathrm{NO}_2 + \mathrm{CO}_2$

The rate equation depends on the RDS (Step 1): $\mathrm{Rate} = k_1[\mathrm{NO}_2]^2$, consistent with the experimental rate equation. Note that $\mathrm{CO}$ does not appear in the rate equation because it is not involved in the RDS.

If a species appears in the rate equation, it must be involved in or before the rate-determining step. If a reactant does not appear in the rate equation, it must be involved only after the rate-determining step.

## Common Pitfalls

1. **Conflating order with stoichiometry.** The orders in the rate equation must be determined experimentally. They cannot be read from the balanced equation.

2. **Incorrect units for $k$.** Always derive units from the rate equation. A rate constant with incorrect units in an answer will lose marks.

3. **Confusing the activation energy of the forward and reverse reactions.** The activation energy of the reverse reaction is $E_a(\mathrm{reverse}) = E_a(\mathrm{forward}) + |\Delta H|$ (for exothermic forward reactions).

4. **Assuming catalysts increase yield.** Catalysts increase rate, not yield. The equilibrium position is unchanged.

5. **Plotting errors in Arrhenius plots.** The x-axis must be $1/T$ (in $\mathrm{K}^{-1}$), not $T$ in $^\circ\mathrm{C}$. The gradient is $-E_a/R$, so $E_a = -\mathrm{gradient} \times R$.

## Practice Problems

<details>
<summary>Problem 1</summary>

The rate equation for the reaction $\mathrm{A} + 2\mathrm{B} \to \mathrm{C}$ is $\mathrm{Rate} = k[\mathrm{A}][\mathrm{B}]$. Deduce a possible two-step mechanism.

**Solution:**

Since $[\mathrm{B}]$ appears to the first power (not second), the RDS involves one molecule of B, not two. A possible mechanism:

Step 1 (slow, RDS): $\mathrm{A} + \mathrm{B} \to \mathrm{X}$ (intermediate)

Step 2 (fast): $\mathrm{X} + \mathrm{B} \to \mathrm{C}$

Rate equation: $\mathrm{Rate} = k_1[\mathrm{A}][\mathrm{B}]$, which matches.

</details>

<details>
<summary>Problem 2</summary>

A first-order reaction has a half-life of 120 s. Calculate the rate constant and the time required for 90% of the reactant to be consumed.

**Solution:**

$$
k = \frac{0.693}{t_{1/2}} = \frac{0.693}{120} = 5.775 \times 10^{-3}\,\mathrm{s^{-1}}
$$

For 90% consumption: $[\mathrm{A}] = 0.10[\mathrm{A}]_0$.

$$
\ln\left(\frac{[\mathrm{A}]}{[\mathrm{A}]_0}\right) = -kt
$$

$$
\ln(0.10) = -5.775 \times 10^{-3} \times t
$$

$$
-2.303 = -5.775 \times 10^{-3} \times t
$$

$$
t = \frac{2.303}{5.775 \times 10^{-3}} = 399\,\mathrm{s}
$$

</details>

---

:::tip Diagnostic Test
Ready to test your understanding of **Chemical Kinetics**? The [diagnostic test](/chemistry/diagnostics/diag-kinetics) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Chemical Kinetics with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/chemistry/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
