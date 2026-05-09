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
\mathrm{Rate{} = \frac{\Delta[\mathrm{product{}]}{\Delta t} = -\frac{\Delta[\mathrm{reactant{}]}{\Delta t}
$$

The negative sign for reactants ensures a positive rate value. For a general reaction:

$$
a\mathrm{A{} + b\mathrm{B{} \to c\mathrm{C{} + d\mathrm{D{}
$$

$$
\mathrm{Rate{} = -\frac{1}{a}\frac{d[\mathrm{A{}]}{dt} = -\frac{1}{b}\frac{d[\mathrm{B{}]}{dt} = \frac{1}{c}\frac{d[\mathrm{C{}]}{dt} = \frac{1}{d}\frac{d[\mathrm{D{}]}{dt}
$$

Units of rate: $\mathrm{mol\,dm^{-3}\,s^{-1}}$.

### Methods of Measuring Rate

| Method | Observable | Suitable Reactions |
|---|---|---|
| Gas collection | Volume of gas vs time | Reactions producing gaseous products ($\mathrm{CO{}_2$, $\mathrm{H{}_2$) |
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

**Quantitative analysis:** The fraction of molecules with energy exceeding $E_a$ is approximately proportional to $e^{-E_a/RT}$. A $10\,\mathrm{K{}$ increase from $300\,\mathrm{K{}$ to $310\,\mathrm{K{}$ changes the exponent by a factor of $e^{-E_a/R(1/310 - 1/300)}$. For $E_a = 50\,\mathrm{kJ/mol{}$:

$$
\mathrm{Ratio{} = e^{50000/8.314 \times (1/310 - 1/300)} = e^{-6.45} \approx \mathrm{factor of 2 increase{}
$$

This is the origin of the rule of thumb that reaction rates roughly double for every $10\,\mathrm{K{}$ temperature increase.

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

For a reaction $a\mathrm{A{} + b\mathrm{B{} \to \mathrm{products{}$, the **rate equation** has the form:

$$
\mathrm{Rate{} = k[\mathrm{A{}]^m[\mathrm{B{}]^n
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
| 0 | $\mathrm{Rate{} = k$ | $\mathrm{mol\,dm^{-3}\,s^{-1}}$ |
| 1 | $\mathrm{Rate{} = k[\mathrm{A{}]$ | $\mathrm{s^{-1}}$ |
| 2 | $\mathrm{Rate{} = k[\mathrm{A{}]^2$ | $\mathrm{mol^{-1}\,dm^3\,s^{-1}}$ |
| 3 | $\mathrm{Rate{} = k[\mathrm{A{}]^3$ | $\mathrm{mol^{-2}\,dm^6\,s^{-1}}$ |

In general: $\mathrm{Units of {} k = (\mathrm{mol\,dm^{-3}})^{1-\mathrm{order{}} \times \mathrm{s^{-1}}$.

### Integrated Rate Equations

For a **zero-order** reaction ($\mathrm{Rate{} = k$):

$$
[\mathrm{A{}] = [\mathrm{A{}]_0 - kt
$$

A plot of $[\mathrm{A{}]$ vs $t$ is linear with gradient $-k$.

For a **first-order** reaction ($\mathrm{Rate{} = k[\mathrm{A{}]$):

$$
\ln[\mathrm{A{}] = \ln[\mathrm{A{}]_0 - kt
$$

or equivalently:

$$
[\mathrm{A{}] = [\mathrm{A{}]_0 e^{-kt}
$$

A plot of $\ln[\mathrm{A{}]$ vs $t$ is linear with gradient $-k$.

The **half-life** of a first-order reaction is:

$$
t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}
$$

The half-life is constant and independent of initial concentration for first-order reactions.

For a **second-order** reaction ($\mathrm{Rate{} = k[\mathrm{A{}]^2$):

$$
\frac{1}{[\mathrm{A{}]} = \frac{1}{[\mathrm{A{}]_0} + kt
$$

A plot of $1/[\mathrm{A{}]$ vs $t$ is linear with gradient $k$.

## Determining Orders of Reaction

### Initial Rates Method

Perform experiments with varying initial concentrations while keeping other concentrations constant. Measure the initial rate for each experiment. Compare rates to determine orders.

**Worked Example.** For the reaction between $\mathrm{A{}$ and $\mathrm{B{}$:

| Experiment | $[\mathrm{A{}]$ ($\mathrm{mol/dm{}^3$) | $[\mathrm{B{}]$ ($\mathrm{mol/dm{}^3$) | Initial rate ($\mathrm{mol\,dm^{-3}\,s^{-1}}$) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | $1.2 \times 10^{-3}$ |
| 2 | 0.20 | 0.10 | $2.4 \times 10^{-3}$ |
| 3 | 0.10 | 0.20 | $4.8 \times 10^{-3}$ |

Comparing 1 and 2: $[\mathrm{A{}]$ doubles, rate doubles. Order with respect to A: $m = 1$.

Comparing 1 and 3: $[\mathrm{B{}]$ doubles, rate quadruples. Order with respect to B: $n = 2$.

Rate equation: $\mathrm{Rate{} = k[\mathrm{A{}][\mathrm{B{}]^2$. Overall order = 3.

$$
k = \frac{\mathrm{Rate{}}{[\mathrm{A{}][\mathrm{B{}]^2} = \frac{1.2 \times 10^{-3}}{0.10 \times 0.01} = 1.2\,\mathrm{mol^{-2}\,dm^6\,s^{-1}}
$$

### Continuous Monitoring

Monitor concentration continuously and plot against time. The shape of the curve reveals the order:

- **Zero order:** straight line (constant rate).
- **First order:** exponential decay; $\ln[\mathrm{A{}]$ vs $t$ is linear.
- **Second order:** $1/[\mathrm{A{}]$ vs $t$ is linear.

## The Arrhenius Equation

The rate constant depends on temperature according to the Arrhenius equation:

$$
k = A e^{-E_a / RT}
$$

where:
- $A$ is the **pre-exponential factor** (frequency factor) -- related to the frequency of collisions and the probability of correct orientation
- $E_a$ is the activation energy ($\mathrm{J/mol{}$)
- $R$ is the gas constant ($8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$)
- $T$ is the temperature ($\mathrm{K{}$)

Taking natural logarithms:

$$
\ln k = \ln A - \frac{E_a}{RT}
$$

An **Arrhenius plot** of $\ln k$ vs $1/T$ is linear with:
- Gradient $= -E_a / R$
- y-intercept $= \ln A$

This allows determination of $E_a$ from rate constants measured at different temperatures.

**Worked Example.** The rate constant for a reaction is $3.46 \times 10^{-5}\,\mathrm{s^{-1}}$ at $298\,\mathrm{K{}$ and $1.50 \times 10^{-3}\,\mathrm{s^{-1}}$ at $350\,\mathrm{K{}$. Calculate $E_a$.

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
E_a = \frac{3.770 \times 8.314}{4.99 \times 10^{-4}} = 62,800\,\mathrm{J/mol{} = 62.8\,\mathrm{kJ/mol{}
$$

## Catalysis

### Heterogeneous Catalysts

The catalyst is in a different phase from the reactants. The mechanism involves adsorption of reactant molecules onto the catalyst surface, where bonds are weakened, reaction occurs, and products desorb.

Examples:
- **Haber process:** Iron catalyst; $\mathrm{N{}_2$ and $\mathrm{H{}_2$ adsorb onto the iron surface, the $\mathrm{N{}\equiv\mathrm{N{}$ triple bond is weakened, and $\mathrm{NH{}_3$ forms and desorbs.
- **Contact process:** Vanadium(V) oxide ($\mathrm{V{}_2\mathrm{O{}_5$) catalyses the oxidation of $\mathrm{SO{}_2$ to $\mathrm{SO{}_3$.

Heterogeneous catalysts can be poisoned by impurities that adsorb strongly to the active sites (e.g. lead in catalytic converters, arsenic in the Contact process).

### Homogeneous Catalysts

The catalyst is in the same phase as the reactants. The catalyst forms an intermediate with the reactants, which then decomposes to release the catalyst and products.

Example: The decomposition of hydrogen peroxide catalysed by $\mathrm{Fe{}^{2+}$ ions:

$$
\mathrm{Fe{}^{2+} + \mathrm{H{}_2\mathrm{O{}_2 + 2\mathrm{H{}^+ \to \mathrm{Fe{}^{3+} + 2\mathrm{H{}_2\mathrm{O{}
$$

$$
\mathrm{Fe{}^{3+} + \mathrm{H{}_2\mathrm{O{}_2 \to \mathrm{Fe{}^{2+} + \mathrm{O{}_2 + 2\mathrm{H{}^+
$$

Net: $2\mathrm{H{}_2\mathrm{O{}_2 \to 2\mathrm{H{}_2\mathrm{O{} + \mathrm{O{}_2$

### Enzyme Catalysis

Enzymes are biological catalysts (globular proteins). They operate by the **lock-and-key** or **induced-fit** model:

1. Substrate binds to the active site.
2. An enzyme-substrate complex forms.
3. The reaction occurs with lowered $E_a$.
4. Products are released; the enzyme is regenerated.

Enzyme activity depends on temperature (optimum around $37^\circ\mathrm{C{}$ for human enzymes; denaturation above) and pH (each enzyme has an optimum pH).

## Mechanisms and the Rate-Determining Step

The **rate-determining step** (RDS) is the slowest step in a reaction mechanism. It controls the overall rate. The rate equation reflects the molecularity of the RDS, not the overall stoichiometry.

**Worked Example.** The reaction $\mathrm{NO{}_2(g) + \mathrm{CO{}(g) \to \mathrm{NO{}(g) + \mathrm{CO{}_2(g)$ has the experimental rate equation $\mathrm{Rate{} = k[\mathrm{NO{}_2]^2$. The proposed mechanism is:

**Step 1 (slow):** $\mathrm{NO{}_2 + \mathrm{NO{}_2 \to \mathrm{NO{} + \mathrm{NO{}_3$

**Step 2 (fast):** $\mathrm{NO{}_3 + \mathrm{CO{} \to \mathrm{NO{}_2 + \mathrm{CO{}_2$

The rate equation depends on the RDS (Step 1): $\mathrm{Rate{} = k_1[\mathrm{NO{}_2]^2$, consistent with the experimental rate equation. Note that $\mathrm{CO{}$ does not appear in the rate equation because it is not involved in the RDS.

If a species appears in the rate equation, it must be involved in or before the rate-determining step. If a reactant does not appear in the rate equation, it must be involved only after the rate-determining step.

### Pre-Equilibrium Approximation

When a fast reversible step precedes the rate-determining step, the pre-equilibrium approximation can be used. Consider a mechanism:

**Step 1 (fast, reversible):** $\mathrm{A{} + \mathrm{B{} \rightleftharpoons \mathrm{X{}$ (equilibrium constant $K$)

**Step 2 (slow, RDS):** $\mathrm{X{} + \mathrm{C{} \to \mathrm{D{}$

Because Step 1 is fast and reversible, it is at equilibrium throughout the reaction:

$$
K = \frac{[\mathrm{X{}]}{[\mathrm{A{}][\mathrm{B{}]} \implies [\mathrm{X{}] = K[\mathrm{A{}][\mathrm{B{}]
$$

The rate is determined by the slow step:

$$
\mathrm{Rate{} = k_2[\mathrm{X{}][\mathrm{C{}] = k_2 K[\mathrm{A{}][\mathrm{B{}][\mathrm{C{}] = k_\mathrm{obs{}[\mathrm{A{}][\mathrm{B{}][\mathrm{C{}]
$$

The observed rate constant $k_\mathrm{obs{} = k_2 K$ incorporates both the equilibrium constant and the rate constant of the RDS. The overall order is 3, even though only one step is bimolecular.

### The Steady-State Approximation

For more complex mechanisms, the steady-state approximation assumes that the concentration of any reactive intermediate remains approximately constant throughout most of the reaction (its rate of formation equals its rate of consumption).

For an intermediate $\mathrm{X{}$:

$$
\frac{d[\mathrm{X{}]}{dt} \approx 0
$$

**Worked Example.** Consider the decomposition of $\mathrm{N{}_2\mathrm{O{}_5$:

$$
2\mathrm{N{}_2\mathrm{O{}_5 \to 4\mathrm{NO{}_2 + \mathrm{O{}_2
$$

Proposed mechanism:

**Step 1:** $\mathrm{N{}_2\mathrm{O{}_5 \rightleftharpoons \mathrm{NO{}_2 + \mathrm{NO{}_3$ (fast, $k_1$ forward, $k_{-1}$ reverse)

**Step 2:** $\mathrm{NO{}_2 + \mathrm{NO{}_3 \to \mathrm{NO{} + \mathrm{O{}_2 + \mathrm{NO{}_2$ (slow, $k_2$)

**Step 3:** $\mathrm{NO{} + \mathrm{NO{}_3 \to 2\mathrm{NO{}_2$ (fast, $k_3$)

Applying steady-state to $\mathrm{NO{}_3$:

$$
\frac{d[\mathrm{NO{}_3]}{dt} = k_1[\mathrm{N{}_2\mathrm{O{}_5] - k_{-1}[\mathrm{NO{}_2][\mathrm{NO{}_3] - k_2[\mathrm{NO{}_2][\mathrm{NO{}_3] - k_3[\mathrm{NO{}][\mathrm{NO{}_3] = 0
$$

This leads (after simplification) to a rate equation of the form $\mathrm{Rate{} = k_\mathrm{eff{}[\mathrm{N{}_2\mathrm{O{}_5]$, showing that the reaction is experimentally first-order, consistent with observation. The key insight is that the intermediate $\mathrm{NO{}_3$ is consumed as fast as it is formed.

### Clock Reactions: The Iodine Clock

The iodine clock reaction is a classic kinetics experiment that demonstrates the initial rates method in a visually striking way.

**Reaction:** Persulphate ions oxidise iodide ions to iodine:

$$
\mathrm{S{}_2\mathrm{O{}_8^{2-}(aq) + 2\mathrm{I{}^-(aq) \to 2\mathrm{SO{}_4^{2-}(aq) + \mathrm{I{}_2(aq)
$$

A fixed amount of sodium thiosulphate is added to the mixture. Thiosulphate rapidly reduces any iodine produced back to iodide:

$$
\mathrm{I{}_2(aq) + 2\mathrm{S{}_2\mathrm{O{}_3^{2-}(aq) \to 2\mathrm{I{}^-(aq) + \mathrm{S{}_4\mathrm{O{}_6^{2-}(aq)
$$

Starch indicator is added. As long as thiosulphate remains, the iodine concentration is kept near zero. Once all the thiosulphate is consumed, the next iodine produced reacts with starch, producing an intense blue-black colour.

**Analysis:** If the fixed amount of thiosulphate is $n_0$ moles, then the amount of $\mathrm{I{}_2$ produced when the colour appears is $\frac{n_0}{2}$ moles, and the amount of $\mathrm{S{}_2\mathrm{O{}_8^{2-}$ reacted is $\frac{n_0}{2}$ moles. The rate is:

$$
\mathrm{Rate{} = \frac{n_0 / 2}{t \times V}
$$

where $t$ is the time for the colour change and $V$ is the total volume. By varying the initial concentrations of $\mathrm{S{}_2\mathrm{O{}_8^{2-}$ and $\mathrm{I{}^-$ while keeping the thiosulphate amount constant, the orders of reaction with respect to each reactant can be determined.

**Worked Example.** In an iodine clock experiment, the following data were obtained at constant temperature:

| Experiment | $[\mathrm{S{}_2\mathrm{O{}_8^{2-}]$ ($\mathrm{mol/dm{}^3$) | $[\mathrm{I{}^-]$ ($\mathrm{mol/dm{}^3$) | Time for colour change (s) |
|---|---|---|---|
| 1 | 0.040 | 0.040 | 52 |
| 2 | 0.080 | 0.040 | 26 |
| 3 | 0.040 | 0.080 | 26 |

Determine the rate equation.

Comparing 1 and 2: $[\mathrm{S{}_2\mathrm{O{}_8^{2-}]$ doubles, time halves (rate doubles). Order with respect to $\mathrm{S{}_2\mathrm{O{}_8^{2-}$: $m = 1$.

Comparing 1 and 3: $[\mathrm{I{}^-]$ doubles, time halves (rate doubles). Order with respect to $\mathrm{I{}^-$: $n = 1$.

Rate equation: $\mathrm{Rate{} = k[\mathrm{S{}_2\mathrm{O{}_8^{2-}][\mathrm{I{}^-]$. Overall order = 2.

### The Effect of a Catalyst on the Arrhenius Plot

Adding a catalyst lowers $E_a$ without changing $A$. On an Arrhenius plot ($\ln k$ vs $1/T$):

- Both the catalysed and uncatalysed reactions have the same y-intercept ($\ln A$).
- The catalysed line has a less steep (less negative) gradient because $E_a$ is smaller.
- The two lines converge as $1/T \to 0$ (as $T \to \infty$).

The ratio of rate constants at a given temperature is:

$$
\frac{k_\mathrm{cat{}}{k_\mathrm{uncat{}} = e^{(E_{a,\mathrm{uncat{}} - E_{a,\mathrm{cat{}})/RT}
$$

**Worked Example.** A reaction has $E_a = 75\,\mathrm{kJ/mol{}$ without a catalyst and $E_a = 50\,\mathrm{kJ/mol{}$ with a catalyst. Calculate the rate enhancement at $298\,\mathrm{K{}$.

$$
\frac{k_\mathrm{cat{}}{k_\mathrm{uncat{}} = e^{(75000 - 50000)/(8.314 \times 298)} = e^{25000/2478} = e^{10.09} = 24,300
$$

The catalyst increases the rate by a factor of approximately 24,000 at room temperature.

## Common Pitfalls

1. **Conflating order with stoichiometry.** The orders in the rate equation must be determined experimentally. They cannot be read from the balanced equation.

2. **Incorrect units for $k$.** Always derive units from the rate equation. A rate constant with incorrect units in an answer will lose marks.

3. **Confusing the activation energy of the forward and reverse reactions.** The activation energy of the reverse reaction is $E_a(\mathrm{reverse{}) = E_a(\mathrm{forward{}) + |\Delta H|$ (for exothermic forward reactions).

4. **Assuming catalysts increase yield.** Catalysts increase rate, not yield. The equilibrium position is unchanged.

5. **Plotting errors in Arrhenius plots.** The x-axis must be $1/T$ (in $\mathrm{K{}^{-1}$), not $T$ in $^\circ\mathrm{C{}$. The gradient is $-E_a/R$, so $E_a = -\mathrm{gradient{} \times R$.

6. **Misapplying the steady-state approximation.** The steady-state approximation applies to reactive intermediates, not to reactants or products. Intermediates are species that appear in the mechanism but not in the overall equation.

7. **Forgetting that clock reactions measure initial rate.** The iodine clock gives the initial rate (the rate at $t = 0$). The thiosulphate amount must be small relative to the reactants for this to be a good approximation.

8. **Confusing zero-order and first-order half-life behaviour.** For a first-order reaction, $t_{1/2}$ is constant (independent of $[\mathrm{A{}]_0$). For a zero-order reaction, $t_{1/2} = [\mathrm{A{}]_0 / (2k)$, which depends on the initial concentration. This is a key experimental distinction.

9. **Using the wrong rate expression for gas-phase reactions.** For gas reactions, rate can be expressed in terms of concentration change or pressure change. If the question asks for rate in terms of pressure, use partial pressures (consistent with $K_p$).

10. **Ignoring the effect of temperature on the pre-exponential factor $A$.** In the Arrhenius equation, $A$ is often assumed constant, but it does have a weak temperature dependence. This is negligible at A-Level but worth noting.

## Maxwell-Boltzmann Distribution

The Maxwell-Boltzmann distribution describes the distribution of molecular speeds (and therefore kinetic energies) in a gas at a given temperature:

### Key Features

1. The curve is asymmetric, skewed towards higher speeds.
2. The most probable speed is at the peak of the distribution.
3. The mean speed is slightly higher than the most probable speed.
4. The area under the curve represents the total number of molecules (constant).

### Effect of Temperature

At higher temperature:
- The curve flattens and broadens (more molecules have higher speeds).
- The peak shifts to higher speed.
- The area under the curve remains constant.
- A greater proportion of molecules have kinetic energy exceeding the activation energy $E_a$.

### Effect of a Catalyst

A catalyst provides an alternative reaction pathway with a lower activation energy ($E_a'$). On the Maxwell-Boltzmann distribution, the $E_a$ line moves to the left, and a larger proportion of molecules now have sufficient energy to react. The distribution itself does not change.

### Relationship to Collision Theory

For a reaction to occur, two conditions must be met:
1. **Sufficient energy:** The collision energy must exceed the activation energy $E_a$.
2. **Correct orientation:** The molecules must collide with the correct geometry (steric factor).

Only collisions satisfying both criteria lead to reaction. The rate is proportional to the product of the collision frequency, the fraction of collisions with sufficient energy ($e^{-E_a/RT}$), and the steric factor.

### Fraction of Molecules with Energy Exceeding $E_a$

The fraction is given by the Boltzmann factor:

$$
f = e^{-E_a/RT}
$$

**Worked Example.** Calculate the fraction of molecules with energy exceeding $E_a = 50\,\mathrm{kJ/mol{}$ at $298\,\mathrm{K{}$ and at $400\,\mathrm{K{}$.

At $298\,\mathrm{K{}$:

$$
f = \exp\left(\frac{-50000}{8.314 \times 298}\right) = \exp(-20.17) = 1.7 \times 10^{-9}
$$

At $400\,\mathrm{K{}$:

$$
f = \exp\left(\frac{-50000}{8.314 \times 400}\right) = \exp(-15.03) = 3.2 \times 10^{-7}
$$

Increasing the temperature from $298\,\mathrm{K{}$ to $400\,\mathrm{K{}$ increases the fraction of reactive molecules by a factor of approximately 190, even though the temperature increased by only 34\%. This exponential temperature dependence explains why small temperature changes can have large effects on reaction rate.

## Enzyme Kinetics (Brief Introduction)

Enzymes are biological catalysts (proteins) that follow Michaelis-Menten kinetics:

$$
v = \frac{V_{\max}[S]}{K_m + [S]}
$$

where $V_{\max}$ is the maximum rate (when all enzyme active sites are occupied), $[S]$ is the substrate concentration, and $K_m$ is the Michaelis constant (substrate concentration at half $V_{\max}$).

- At low $[S] \ll K_m$: $v \approx \frac{V_{\max}}{K_m}[S]$ -- rate is approximately first-order in $[S]$.
- At high $[S] \gg K_m$: $v \approx V_{\max}$ -- rate is approximately zero-order in $[S]$ (enzyme is saturated).

This is directly analogous to the behaviour of heterogeneous catalysts at low and high reactant concentrations.

## Advanced Rate Determination Methods

### The Initial Rates Method: Practical Considerations

When performing initial rate experiments:

1. **Keep initial concentrations of all but one reactant in large excess.** This ensures that the concentration of the excess reactant remains essentially constant, and the observed rate depends only on the reactant being varied.

2. **Measure the rate before more than 10% reaction has occurred.** This ensures the concentration is close to the initial value.

3. **Repeat experiments.** Initial rate measurements are inherently less precise than continuous monitoring because they use only two data points (the starting concentration and the amount reacted in a short time). Multiple repeats improve precision.

### Continuous Monitoring Methods

**Gas syringe method:** Collect gas produced in a gas syringe and plot volume vs time. The gradient of the tangent at $t = 0$ gives the initial rate.

**Colorimetric method:** For reactions involving a coloured species, measure absorbance vs time using a colorimeter. The Beer-Lambert law ($A = \varepsilon cl$) relates absorbance to concentration.

**Conductivity method:** For reactions that change the number or type of ions in solution, measure conductivity vs time. For example, the hydrolysis of a halogenoalkane:

$$
\mathrm{R-Br{} + \mathrm{H{}_2\mathrm{O{} \to \mathrm{R-OH{} + \mathrm{H{}^+ + \mathrm{Br{}^-
$$

Conductivity increases as $\mathrm{H{}^+$ and $\mathrm{Br{}^-$ are produced.

### Determining the Order from Concentration-Time Graphs

| Order | Plot of [A] vs t | Linearised plot | Half-life behaviour |
|---|---|---|---|
| 0 | Straight line (negative gradient) | [A] vs t | Decreases with [A]_0 |
| 1 | Exponential decay | ln[A] vs t | Constant |
| 2 | Curved, steeper at start | 1/[A] vs t | Decreases with [A]_0 |

To determine the order experimentally: plot the data in all three linearised forms. The one that gives the best straight line (highest $R^2$ value) indicates the order.

### Worked Example: Determining Order from Graphical Data

The hydrolysis of a halogenoalkane $\mathrm{R-X{}$ was monitored by measuring conductivity. The following data were obtained:

| Time (s) | Conductivity ($\mu\mathrm{S/cm{}$) |
|---|---|
| 0 | 12.0 |
| 60 | 25.8 |
| 120 | 36.4 |
| 180 | 44.2 |
| 240 | 49.8 |
| $\infty$ | 64.0 |

The conductivity at $t = \infty$ (complete reaction) is $64.0$. The conductivity is proportional to the concentration of product.

$[\mathrm{P{}] \propto (\kappa_t - \kappa_0) = (\kappa_t - 12.0)$, and $[\mathrm{R-X{}] \propto (\kappa_\infty - \kappa_t) = (64.0 - \kappa_t)$.

| Time (s) | $[\mathrm{R-X{}]$ (arb. units) | $\ln[\mathrm{R-X{}]$ | $1/[\mathrm{R-X{}]$ |
|---|---|---|---|
| 0 | 52.0 | 3.951 | 0.0192 |
| 60 | 38.2 | 3.643 | 0.0262 |
| 120 | 27.6 | 3.318 | 0.0362 |
| 180 | 19.8 | 2.986 | 0.0505 |
| 240 | 14.2 | 2.653 | 0.0704 |

Plotting $\ln[\mathrm{R-X{}]$ vs $t$: the points (0, 3.951), (60, 3.643), (120, 3.318), (180, 2.986), (240, 2.653) give an approximately straight line. The gradient is approximately $-0.0054\,\mathrm{s{}^{-1}$, so $k \approx 0.0054\,\mathrm{s{}^{-1}$ and the reaction is first-order with respect to $\mathrm{R-X{}$.

## Practice Problems

<details>
<summary>Problem 1</summary>

The rate equation for the reaction $\mathrm{A{} + 2\mathrm{B{} \to \mathrm{C{}$ is $\mathrm{Rate{} = k[\mathrm{A{}][\mathrm{B{}]$. Deduce a possible two-step mechanism.

**Solution:**

Since $[\mathrm{B{}]$ appears to the first power (not second), the RDS involves one molecule of B, not two. A possible mechanism:

Step 1 (slow, RDS): $\mathrm{A{} + \mathrm{B{} \to \mathrm{X{}$ (intermediate)

Step 2 (fast): $\mathrm{X{} + \mathrm{B{} \to \mathrm{C{}$

Rate equation: $\mathrm{Rate{} = k_1[\mathrm{A{}][\mathrm{B{}]$, which matches.

</details>

<details>
<summary>Problem 2</summary>

A first-order reaction has a half-life of 120 s. Calculate the rate constant and the time required for 90% of the reactant to be consumed.

**Solution:**

$$
k = \frac{0.693}{t_{1/2}} = \frac{0.693}{120} = 5.775 \times 10^{-3}\,\mathrm{s^{-1}}
$$

For 90% consumption: $[\mathrm{A{}] = 0.10[\mathrm{A{}]_0$.

$$
\ln\left(\frac{[\mathrm{A{}]}{[\mathrm{A{}]_0}\right) = -kt
$$

$$
\ln(0.10) = -5.775 \times 10^{-3} \times t
$$

$$
-2.303 = -5.775 \times 10^{-3} \times t
$$

$$
t = \frac{2.303}{5.775 \times 10^{-3}} = 399\,\mathrm{s{}
$$

</details>

<details>
<summary>Problem 4</summary>

The rate of the reaction $\mathrm{A{} + 2\mathrm{B{} \to \mathrm{C{}$ was studied at $298\,\mathrm{K{}$. The following initial rate data were obtained:

| Experiment | $[\mathrm{A{}]$ ($\mathrm{mol/dm{}^3$) | $[\mathrm{B{}]$ ($\mathrm{mol/dm{}^3$) | Initial rate ($\mathrm{mol\,dm^{-3}\,s^{-1}}$) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | $1.2 \times 10^{-3}$ |
| 2 | 0.20 | 0.10 | $2.4 \times 10^{-3}$ |
| 3 | 0.10 | 0.20 | $4.8 \times 10^{-3}$ |
| 4 | 0.20 | 0.20 | $9.6 \times 10^{-3}$ |

(a) Determine the order with respect to $\mathrm{A{}$ and $\mathrm{B{}$.
(b) Write the rate equation and calculate the rate constant.
(c) Calculate the initial rate when $[\mathrm{A{}] = 0.15$ and $[\mathrm{B{}] = 0.25\,\mathrm{mol/dm{}^3$.

**Solution:**

(a) Comparing experiments 1 and 2 (B constant, A doubled): rate doubles. Order with respect to $\mathrm{A{}$ = 1.

Comparing experiments 1 and 3 (A constant, B doubled): rate quadruples. Order with respect to $\mathrm{B{}$ = 2.

(b) Rate equation: $\text{'\{'}rate{'\}'} = k[\mathrm{A{}][\mathrm{B{}]^2$.

Using experiment 1: $1.2 \times 10^{-3} = k(0.10)(0.10)^2 = k(0.001)$

$$
k = \frac{1.2 \times 10^{-3}}{0.001} = 1.2\,\mathrm{dm{}^6\,\mathrm{mol{}^{-2}\,\mathrm{s{}^{-1}
$$

(c) $\text{'\{'}rate{'\}'} = 1.2 \times 0.15 \times (0.25)^2 = 1.2 \times 0.15 \times 0.0625 = 0.01125\,\mathrm{mol\,dm^{-3}\,s^{-1}} = 1.1 \times 10^{-2}\,\mathrm{mol\,dm^{-3}\,s^{-1}}$

</details>

<details>
<summary>Problem 5</summary>

For a first-order reaction, the rate constant at $300\,\mathrm{K{}$ is $3.46 \times 10^{-5}\,\mathrm{s{}^{-1}$ and at $350\,\mathrm{K{}$ it is $7.69 \times 10^{-3}\,\mathrm{s{}^{-1}$. Calculate the activation energy.

**Solution:**

Using the Arrhenius equation in two-point form:

$$
\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
$$

$$
\ln\frac{7.69 \times 10^{-3}}{3.46 \times 10^{-5}} = \ln(222.3) = 5.403
$$

$$
\frac{1}{T_2} - \frac{1}{T_1} = \frac{1}{350} - \frac{1}{300} = 0.002857 - 0.003333 = -4.762 \times 10^{-4}\,\mathrm{K{}^{-1}
$$

$$
5.403 = -\frac{E_a}{8.314} \times (-4.762 \times 10^{-4})
$$

$$
5.403 = \frac{E_a \times 4.762 \times 10^{-4}}{8.314}
$$

$$
E_a = \frac{5.403 \times 8.314}{4.762 \times 10^{-4}} = \frac{44.92}{4.762 \times 10^{-4}} = 94,300\,\mathrm{J/mol{} = 94.3\,\mathrm{kJ/mol{}
$$

</details>

## Advanced Kinetics: Rate-Determining Step and Mechanisms

### Rate-Determining Step

In a multi-step reaction, the slowest step determines the overall rate. The rate equation reflects the molecularity of the rate-determining step.

**Example:** The reaction between propanone and iodine in acidic solution:

$$\mathrm{CH{}_3\mathrm{COCH{}_3 + \mathrm{I{}_2 \to \mathrm{CH{}_2\mathrm{ICOCH{}_3 + \mathrm{HI{}$$

The observed rate equation is: Rate $= k[\mathrm{CH{}_3\mathrm{COCH{}_3}][\mathrm{H{}^+]$

Iodine does not appear in the rate equation, despite being a reactant. This means iodine participates in a fast step after the rate-determining step.

**Proposed mechanism:**

Step 1 (slow, rate-determining): Protonation of propanone:

$$\mathrm{CH{}_3\mathrm{COCH{}_3 + \mathrm{H{}^+ \to \mathrm{CH{}_3\mathrm{C(OH{}^+)\mathrm{CH{}_3$$

Step 2 (fast): Enolisation:

$$\mathrm{CH{}_3\mathrm{C(OH{}^+)\mathrm{CH{}_3 \to \mathrm{CH{}_2=\mathrm{C(OH{})\mathrm{CH{}_3 + \mathrm{H{}^+$$

Step 3 (fast): Reaction with iodine:

$$\mathrm{CH{}_2=\mathrm{C(OH{})\mathrm{CH{}_3 + \mathrm{I{}_2 \to \mathrm{CH{}_2\mathrm{ICOCH{}_3 + \mathrm{HI{}$$

The rate equation (Rate $= k[\mathrm{CH{}_3\mathrm{COCH{}_3}][\mathrm{H{}^+]$) matches step 1, confirming it is the rate-determining step.

### Steady-State Approximation (Brief Introduction)

For some mechanisms, the rate equation derived from the rate-determining step does not match the experimental data because an intermediate accumulates. The steady-state approximation assumes that the concentration of the intermediate remains constant (its rate of formation equals its rate of consumption).

**Example:** The decomposition of $\mathrm{N{}_2\mathrm{O{}_5$:

$$2\mathrm{N{}_2\mathrm{O{}_5 \to 4\mathrm{NO{}_2 + \mathrm{O{}_2$$

Mechanism:

Step 1: $\mathrm{N{}_2\mathrm{O{}_5 \rightleftharpoons \mathrm{NO{}_2 + \mathrm{NO{}_3$ (fast equilibrium, $K_1$)

Step 2: $\mathrm{NO{}_2 + \mathrm{NO{}_3 \to \mathrm{NO{} + \mathrm{O{}_2 + \mathrm{NO{}_2$ (slow)

Step 3: $\mathrm{NO{} + \mathrm{NO{}_3 \to 2\mathrm{NO{}_2$ (fast)

Applying the steady-state approximation to the intermediates $\mathrm{NO{}_2$ and $\mathrm{NO{}_3$ gives the rate equation:

$$\text{'\{'}Rate{'\}'} = k[\mathrm{N{}_2\mathrm{O{}_5]$$

This is first-order with respect to $\mathrm{N{}_2\mathrm{O{}_5$, consistent with experimental observation.

### Catalysis in Detail

**Heterogeneous catalysis:** The catalyst provides a surface on which reactant molecules adsorb. Adsorption weakens the bonds within the reactant molecules, lowering the activation energy. Examples:

- Haber process: Iron catalyst for $\mathrm{N{}_2 + 3\mathrm{H{}_2 \rightleftharpoons 2\mathrm{NH{}_3$
- Contact process: $\mathrm{V{}_2\mathrm{O{}_5$ catalyst for $2\mathrm{SO{}_2 + \mathrm{O{}_2 \rightleftharpoons 2\mathrm{SO{}_3$

**Homogeneous catalysis:** The catalyst is in the same phase as the reactants. Example:

- Acid-catalysed esterification: $\mathrm{H{}^+$ catalyses $\mathrm{CH{}_3\mathrm{COOH{} + \mathrm{CH{}_3\mathrm{CH{}_2\mathrm{OH{} \rightleftharpoons \mathrm{CH{}_3\mathrm{COOCH{}_2\mathrm{CH{}_3 + \mathrm{H{}_2\mathrm{O{}$

**Autocatalysis:** A product of the reaction acts as a catalyst for the reaction. Example:

- The reaction $\mathrm{MnO{}_4^- + 5\mathrm{Fe{}^{2+} + 8\mathrm{H{}^+ \to \mathrm{Mn{}^{2+} + 5\mathrm{Fe{}^{3+} + 4\mathrm{H{}_2\mathrm{O{}$ is catalysed by $\mathrm{Mn{}^{2+}$ ions, which are produced in the reaction. The rate initially increases as more $\mathrm{Mn{}^{2+}$ accumulates, then decreases as reactants are consumed.

### Practical Techniques: Determining Rate Equations (AQA RP 8)

**Method 1: Initial rates method.**

1. Measure the initial rate at several different starting concentrations of one reactant (keeping others constant).
2. Plot initial rate vs concentration.
3. If the graph is linear, the reaction is first-order with respect to that reactant.
4. If the graph is a horizontal line, the reaction is zero-order.

**Method 2: Continuous monitoring.**

Monitor the concentration of a reactant or product over time. Common techniques:
- **Colorimetry:** Measure absorbance of a coloured species at regular intervals.
- **Gas collection:** Measure the volume of gas produced at regular intervals.
- **Titration:** Quench aliquots at regular intervals and titrate to determine concentration.
- **pH measurement:** Monitor pH for reactions involving $\mathrm{H{}^+$ or $\mathrm{OH{}^-$.

**Method 3: Half-life method.**

For a first-order reaction, the half-life is constant and independent of concentration. Plot concentration vs time and measure the time for the concentration to halve at several points. If the half-life is constant, the reaction is first-order.

$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$$

### Arrhenius Applications: Catalyst Effect on Activation Energy

**Worked Example:** A reaction has $E_a = 75\,\mathrm{kJ/mol{}$ without a catalyst and $E_a = 50\,\mathrm{kJ/mol{}$ with a catalyst. Calculate the ratio of rate constants at $298\,\mathrm{K{}$, assuming the pre-exponential factor $A$ is unchanged.

$$\frac{k_\text{'\{'}cat{'\}'}}{k_\text{'\{'}uncat{'\}'}} = \frac{Ae^{-E_{a,\text{'\{'}cat{'\}'}}/RT}}{Ae^{-E_{a,\text{'\{'}uncat{'\}'}}/RT}} = e^{(E_{a,\text{'\{'}uncat{'\}'}} - E_{a,\text{'\{'}cat{'\}'}})/RT}$$

$$= e^{(75000 - 50000)/(8.314 \times 298)} = e^{25000/2478} = e^{10.09} = 2.4 \times 10^4$$

The catalyst increases the rate by a factor of approximately 24,000 at $298\,\mathrm{K{}$.

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (5 marks)</summary>

The reaction $\mathrm{A{} + 2\mathrm{B{} \to \mathrm{C{}$ was studied at $298\,\mathrm{K{}$. The following initial rate data were obtained:

| $[\mathrm{A{}]$ ($\mathrm{mol\,dm^{-3}}$) | $[\mathrm{B{}]$ ($\mathrm{mol\,dm^{-3}}$) | Initial rate ($\mathrm{mol\,dm^{-3}\,s^{-1}}$) |
|---|---|---|
| 0.10 | 0.10 | $1.2 \times 10^{-4}$ |
| 0.20 | 0.10 | $2.4 \times 10^{-4}$ |
| 0.10 | 0.20 | $4.8 \times 10^{-4}$ |

(a) Deduce the rate equation. (3 marks)

(b) Calculate the value of the rate constant, including units. (2 marks)

**Mark Scheme:**

(a) Comparing experiments 1 and 2: $[\mathrm{A{}]$ doubles, rate doubles. First-order with respect to $\mathrm{A{}$ (1 mark).

Comparing experiments 1 and 3: $[\mathrm{B{}]$ doubles, rate quadruples ($\times 4$). Second-order with respect to $\mathrm{B{}$ (1 mark).

Rate equation: Rate $= k[\mathrm{A{}][\mathrm{B{}]^2$ (1 mark).

(b) Using experiment 1: $1.2 \times 10^{-4} = k \times 0.10 \times (0.10)^2 = k \times 0.001$

$k = \frac{1.2 \times 10^{-4}}{0.001} = 0.12\,\mathrm{mol{}^{-2}\,\mathrm{dm{}^6\,\mathrm{s{}^{-1}$ (1 mark for calculation, 1 mark for units).

</details>

<details>
<summary>Q2 (4 marks)</summary>

Explain the term activation energy. Describe how a catalyst increases the rate of a chemical reaction.

**Mark Scheme:**

Activation energy is the minimum energy that colliding particles must have for a reaction to occur (1 mark). It is the energy difference between the reactants and the transition state (1 mark).

A catalyst provides an alternative reaction pathway with a lower activation energy (1 mark). More particles have energy $\geq E_a$ (lower threshold), so a greater proportion of collisions are successful, increasing the rate. The catalyst is not consumed in the reaction (1 mark).

</details>

<details>
<summary>Q3 (5 marks)</summary>

For a first-order reaction, the concentration of reactant falls from $0.200\,\mathrm{mol\,dm^{-3}}$ to $0.100\,\mathrm{mol\,dm^{-3}}$ in 120 s.

(a) Calculate the rate constant. (2 marks)

(b) Calculate the half-life. (1 mark)

(c) Calculate the time for the concentration to fall to $0.025\,\mathrm{mol\,dm^{-3}$. (2 marks)

**Mark Scheme:**

(a) For first-order: $\ln[\mathrm{A{}] = \ln[\mathrm{A{}]_0 - kt$

$\ln(0.100) = \ln(0.200) - k \times 120$

$-2.303 = -1.609 - 120k$

$120k = 1.609 - 2.303 = -0.694$

$k = \frac{0.694}{120} = 5.78 \times 10^{-3}\,\mathrm{s{}^{-1}$ (1 mark for equation, 1 mark for value.)

(b) $t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{5.78 \times 10^{-3}} = 120\,\mathrm{s{}$ (1 mark.)

(c) $0.025\,\mathrm{mol\,dm^{-3} = 0.200 \times \left(\frac{1}{2}\right)^n$ where $n$ is the number of half-lives.

$\frac{0.025}{0.200} = 0.125 = \left(\frac{1}{2}\right)^3$, so $n = 3$ half-lives.

$t = 3 \times 120 = 360\,\mathrm{s{}$ (2 marks.)

</details>

---

:::tip
Diagnostic Test
Ready to test your understanding of **Chemical Kinetics**? The [diagnostic test](/docs/alevel/chemistry/diagnostics/diag-kinetics) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Chemical Kinetics with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/chemistry/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.
:::
