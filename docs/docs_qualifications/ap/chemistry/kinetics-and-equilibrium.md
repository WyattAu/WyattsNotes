---
title: Kinetics and Equilibrium
date: 2026-04-14
tags:
  - Chemistry
  - AP
categories:
  - Chemistry
slug: kinetics-and-equilibrium
---

## Chemical Kinetics (CED Unit 5)

Chemical kinetics studies the rates of chemical reactions and the factors that affect them.

### Rate of Reaction

The **average rate** of a reaction is the change in concentration of a reactant or product per unit
time:

$$
\text{Rate} = -\frac{1}{a}\frac{\Delta[\text{A}]}{\Delta t} = \frac{1}{b}\frac{\Delta[\text{B}]}{\Delta t}
$$

where $a$ and $b$ are stoichiometric coefficients.

### Rate Law

For the reaction $a\text{A} + b\text{B} \to \text{products}$:

$$
\text{Rate} = k[\text{A}]^m[\text{B}]^n
$$

- $k$ is the rate constant (depends on temperature).
- $m$ is the order with respect to A (determined experimentally, NOT from the stoichiometric
  coefficient).
- $n$ is the order with respect to B.
- The overall order is $m + n$.

### Determining the Rate Law from Initial Rate Data

Compare experiments where only one concentration changes. If doubling [A] doubles the rate, the
reaction is first order in A. If doubling [A] quadruples the rate, it is second order in A.

:::info[Example]

Determine the rate law from the following data for $2\text{A} + \text{B} \to \text{C}$:

| Experiment | [A] (M) | [B] (M) | Initial Rate (M/s) |
| ---------- | ------- | ------- | ------------------ |
| 1          | 0.10    | 0.10    | 0.0020             |
| 2          | 0.20    | 0.10    | 0.0040             |
| 3          | 0.10    | 0.20    | 0.0080             |

Comparing 1 and 2: [A] doubles, rate doubles $\implies$ first order in A ($m = 1$).

Comparing 1 and 3: [B] doubles, rate quadruples $\implies$ second order in B ($n = 2$).

$$
\text{Rate} = k[\text{A}][\text{B}]^2
$$

Find $k$ from experiment 1: $0.0020 = k(0.10)(0.10)^2 \implies k = 2.0 \text{ M}^{-2}\text{s}^{-1}$.

:::

### Worked Example: Rate Law Determination

Determine the rate law from the following data for $\text{A} + \text{B} \to \text{C}$:

| Experiment | [A] (M) | [B] (M) | Rate (M/s) |
| ---------- | ------- | ------- | ---------- |
| 1          | 0.10    | 0.20    | 0.0040     |
| 2          | 0.20    | 0.20    | 0.0080     |
| 3          | 0.20    | 0.40    | 0.0080     |
| 4          | 0.40    | 0.20    | 0.0160     |

Comparing 1 and 2: [A] doubles, rate doubles. First order in A.

Comparing 2 and 3: [B] doubles, rate unchanged. Zero order in B.

Comparing 2 and 4: [A] doubles, rate doubles. Confirms first order in A.

$$\text{Rate} = k[\text{A}], \quad k = \frac{0.0080}{0.20} = 0.040 \text{ s}^{-1}$$

## Integrated Rate Laws (CED Unit 5)

### First-Order Reactions

$$
\ln[\text{A}]_t = -kt + \ln[\text{A}]_0
$$

or equivalently:

$$
[\text{A}]_t = [\text{A}]_0 e^{-kt}
$$

**Half-life:** $\displaystyle t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$

The half-life is independent of initial concentration.

### Second-Order Reactions

$$
\frac{1}{[\text{A}]_t} = kt + \frac{1}{[\text{A}]_0}
$$

**Half-life:** $\displaystyle t_{1/2} = \frac{1}{k[\text{A}]_0}$

The half-life depends on initial concentration.

### Zero-Order Reactions

$$
[\text{A}]_t = -kt + [\text{A}]_0
$$

**Half-life:** $\displaystyle t_{1/2} = \frac{[\text{A}]_0}{2k}$

### Identifying the Order

| Order  | Linear Plot            | Slope |
| ------ | ---------------------- | ----- |
| Zero   | [A] vs $t$             | $-k$  |
| First  | $\ln[\text{A}]$ vs $t$ | $-k$  |
| Second | $1/[\text{A}]$ vs $t$  | $k$   |

:::info[Example]

The decomposition of $\text{N}_2\text{O}_5$ is first order with
$k = 5.0 \times 10^{-4} \text{ s}^{-1}$. How long does it take for 80% of a $0.500 \text{ M}$ sample
to decompose?

$[\text{A}]_t = 0.20 \times 0.500 = 0.100 \text{ M}$.

$$
\ln(0.100) = -(5.0 \times 10^{-4})t + \ln(0.500)
$$

$$
-2.303 = -5.0 \times 10^{-4} t + (-0.693)
$$

$$
-2.303 + 0.693 = -5.0 \times 10^{-4} t
$$

$$
t = \frac{-1.610}{-5.0 \times 10^{-4}} = 3220 \text{ s} \approx 53.7 \text{ min}
$$

:::

### Worked Example: Half-Life Calculation

A first-order reaction has a rate constant of $0.030 \text{ min}^{-1}$. Calculate the half-life and
the time for 75% decomposition.

$$t_{1/2} = \frac{0.693}{0.030} = 23.1 \text{ min}$$

After 75% decomposition, $[\text{A}]_t = 0.25[\text{A}]_0$:

$$t = \frac{1}{k}\ln\frac{[\text{A}]_0}{[\text{A}]_t} = \frac{1}{0.030}\ln 4 = 33.3 \times 1.386 = 46.2 \text{ min}$$

Note that 75% decomposition takes two half-lives (46.2 min $\approx 2 \times 23.1$ min).

## Reaction Mechanisms (CED Unit 5)

A **reaction mechanism** is a sequence of elementary steps that sum to the overall reaction.

### Molecularity

| Molecularity | Description             | Rate Law                                        |
| ------------ | ----------------------- | ----------------------------------------------- |
| Unimolecular | One molecule reacts     | Rate = $k[\text{A}]$                            |
| Bimolecular  | Two molecules collide   | Rate = $k[\text{A}][\text{B}]$                  |
| Termolecular | Three molecules collide | Rate = $k[\text{A}][\text{B}][\text{C}]$ (rare) |

### Rate-Determining Step

The slowest step in the mechanism determines the overall rate law.

### Requirements for a Valid Mechanism

1. The elementary steps must sum to the overall reaction.
2. The rate law derived from the rate-determining step must agree with the experimental rate law.
3. If a fast equilibrium precedes the slow step, use the equilibrium approximation to express
   intermediates in terms of reactants.

:::info[Example]

The reaction $2\text{NO}_2 + \text{F}_2 \to 2\text{NO}_2\text{F}$ has the experimental rate law
$\text{Rate} = k[\text{NO}_2][\text{F}_2]$.

Proposed mechanism:

Step 1 (slow): $\text{NO}_2 + \text{F}_2 \to \text{NO}_2\text{F} + \text{F}$

Step 2 (fast): $\text{F} + \text{NO}_2 \to \text{NO}_2\text{F}$

The rate law from the slow step: $\text{Rate} = k[\text{NO}_2][\text{F}_2]$. This matches the
experimental rate law, so the mechanism is plausible.

Sum: $2\text{NO}_2 + \text{F}_2 \to 2\text{NO}_2\text{F}$.

:::

### Worked Example: Mechanism with Fast Equilibrium

The reaction $2\text{NO} + \text{O}_2 \to 2\text{NO}_2$ has the experimental rate law
$\text{Rate} = k[\text{NO}]^2[\text{O}_2]$.

Proposed mechanism:

Step 1 (fast equilibrium): $\text{NO} + \text{NO} \rightleftharpoons \text{N}_2\text{O}_2$

Step 2 (slow): $\text{N}_2\text{O}_2 + \text{O}_2 \to 2\text{NO}_2$

From step 1: $K = \frac{[\text{N}_2\text{O}_2]}{[\text{NO}]^2}$, so
$[\text{N}_2\text{O}_2] = K[\text{NO}]^2$.

Rate from step 2:
$\text{Rate} = k_2[\text{N}_2\text{O}_2][\text{O}_2] = k_2 K[\text{NO}]^2[\text{O}_2]$.

This matches the experimental rate law with $k = k_2 K$.

## Arrhenius Equation (CED Unit 5)

The rate constant depends on temperature:

$$
k = A e^{-E_a/(RT)}
$$

In logarithmic form:

$$
\ln k = -\frac{E_a}{R}\cdot\frac{1}{T} + \ln A
$$

where $E_a$ is the activation energy, $A$ is the frequency factor, and
$R = 8.314 \text{ J/(mol}\cdot\text{K)}$.

### Two-Point Form

$$
\ln\frac{k_2}{k_1} = \frac{E_a}{R}\!\left(\frac{1}{T_1} - \frac{1}{T_2}\right)
$$

### Catalysis

A catalyst provides an alternative pathway with a lower activation energy. It increases the rate
constant $k$ but is not consumed in the reaction.

- **Homogeneous catalyst:** same phase as the reactants.
- **Heterogeneous catalyst:** different phase (usually a solid surface).

:::info[Example]

A reaction has $k = 3.0 \times 10^{-3} \text{ s}^{-1}$ at $300 \text{ K}$ and
$k = 2.4 \times 10^{-2} \text{ s}^{-1}$ at $350 \text{ K}$. Find $E_a$.

$$
\ln\frac{2.4 \times 10^{-2}}{3.0 \times 10^{-3}} = \frac{E_a}{8.314}\!\left(\frac{1}{300} - \frac{1}{350}\right)
$$

$$
\ln 8.0 = \frac{E_a}{8.314}\!\left(\frac{50}{105000}\right)
$$

$$
2.079 = \frac{E_a}{8.314}(4.762 \times 10^{-4})
$$

$$
E_a = \frac{2.079}{4.762 \times 10^{-4}} \times 8.314 = 36300 \text{ J/mol} = 36.3 \text{ kJ/mol}
$$

:::

### Worked Example: Effect of a Catalyst

A reaction has $E_a = 75 \text{ kJ/mol}$ without a catalyst and $E_a = 50 \text{ kJ/mol}$ with a
catalyst. Calculate the ratio of rate constants at $298 \text{ K}$.

$$\frac{k_{\text{cat}}}{k_{\text{uncat}}} = \frac{A e^{-50000/(8.314 \times 298)}}{A e^{-75000/(8.314 \times 298)}} = e^{(75000 - 50000)/(8.314 \times 298)}$$

$$= e^{25000/2478} = e^{10.09} = 2.4 \times 10^4$$

The catalyst increases the rate constant by a factor of about 24,000 at room temperature.

## Chemical Equilibrium (CED Unit 7)

### Dynamic Equilibrium

At equilibrium, the forward and reverse reaction rates are equal. Concentrations of reactants and
products remain constant (but not necessarily equal).

### The Equilibrium Constant ($K$)

For the reaction $a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}$:

$$
K_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
$$

For gas-phase reactions, $K_p$ uses partial pressures:

$$
K_p = \frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}
$$

### Relationship Between $K_c$ and $K_p$

$$
K_p = K_c(RT)^{\Delta n}
$$

where $\Delta n = (\text{moles gaseous products}) - (\text{moles gaseous reactants})$.

### Heterogeneous Equilibria

Pure solids and pure liquids are not included in the equilibrium expression because their activities
are constant (equal to 1).

:::info[Example]

Write the equilibrium expression for:

$$
\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)
$$

$$
K_p = P_{\text{CO}_2}
$$

Only $\text{CO}_2$ appears because solids are omitted.

:::

## The Reaction Quotient ($Q$)

$$
Q = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
$$

$Q$ has the same form as $K$ but uses current (non-equilibrium) concentrations.

| Comparison | Result                       |
| ---------- | ---------------------------- |
| $Q \lt K$  | Reaction proceeds forward    |
| $Q = K$    | System is at equilibrium     |
| $Q \gt K$  | Reaction proceeds in reverse |

## Le Chatelier's Principle (CED Unit 7)

If a stress is applied to a system at equilibrium, the system shifts to counteract the stress.

### Types of Stress

| Stress                                   | Shift Direction           | Effect on $K$ |
| ---------------------------------------- | ------------------------- | ------------- |
| Add reactant                             | Toward products           | None          |
| Add product                              | Toward reactants          | None          |
| Remove reactant                          | Toward reactants          | None          |
| Remove product                           | Toward products           | None          |
| Increase temperature (endothermic)       | Toward products           | Increases     |
| Increase temperature (exothermic)        | Toward reactants          | Decreases     |
| Increase pressure (by decreasing volume) | Toward fewer moles of gas | None          |
| Add catalyst                             | No shift                  | None          |

**Key point:** Only temperature changes affect the value of $K$.

:::info[Example]

For the endothermic reaction $\text{N}_2\text{O}_4(g) \rightleftharpoons 2\text{NO}_2(g)$, predict
the effect of:

- Increasing temperature: shifts right (more $\text{NO}_2$), $K$ increases.
- Increasing pressure (decreasing volume): shifts left (fewer gas moles, 1 vs 2).
- Adding a catalyst: no shift, but equilibrium is reached faster.

:::

## ICE Tables (CED Unit 7)

ICE (Initial, Change, Equilibrium) tables organize the calculation of equilibrium concentrations.

:::info[Example]

For $\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)$ with $K_c = 50.5$ at
$448^\circ\text{C}$:

If $1.00 \text{ M } \text{H}_2$ and $1.00 \text{ M } \text{I}_2$ are mixed, find [HI] at
equilibrium.

| Species      | Initial | Change | Equilibrium |
| ------------ | ------- | ------ | ----------- |
| $\text{H}_2$ | 1.00    | $-x$   | $1.00 - x$  |
| $\text{I}_2$ | 1.00    | $-x$   | $1.00 - x$  |
| $\text{HI}$  | 0       | $+2x$  | $2x$        |

$$
K_c = \frac{(2x)^2}{(1.00 - x)^2} = 50.5
$$

$$
\frac{2x}{1.00 - x} = \sqrt{50.5} = 7.11
$$

$$
2x = 7.11(1.00 - x) \implies 2x = 7.11 - 7.11x \implies 9.11x = 7.11 \implies x = 0.781
$$

$$
[\text{HI}] = 2(0.781) = 1.56 \text{ M}
$$

:::

### Worked Example: ICE Table with Quadratic

For $\text{PCl}_5(g) \rightleftharpoons \text{PCl}_3(g) + \text{Cl}_2(g)$, $K_c = 0.0420$ at
$500 \text{ K}$. If $2.00 \text{ M } \text{PCl}_5$ is placed in a flask, find all equilibrium
concentrations.

| Species        | Initial | Change | Equilibrium |
| -------------- | ------- | ------ | ----------- |
| $\text{PCl}_5$ | 2.00    | $-x$   | $2.00 - x$  |
| $\text{PCl}_3$ | 0       | $+x$   | $x$         |
| $\text{Cl}_2$  | 0       | $+x$   | $x$         |

$$K_c = \frac{x^2}{2.00 - x} = 0.0420$$

$$x^2 = 0.0420(2.00 - x) = 0.0840 - 0.0420x$$

$$x^2 + 0.0420x - 0.0840 = 0$$

Using the quadratic formula:
$x = \frac{-0.0420 + \sqrt{0.0420^2 + 4(0.0840)}}{2} = \frac{-0.0420 + 0.581}{2} = 0.269 \text{ M}$

$[\text{PCl}_5] = 1.73 \text{ M}$, $[\text{PCl}_3] = 0.269 \text{ M}$,
$[\text{Cl}_2] = 0.269 \text{ M}$.

### Worked Example: $K_c$ to $K_p$ Conversion

For $\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)$ at $400^{\circ}\text{C}$,
$K_c = 0.500$. Calculate $K_p$.

$$\Delta n = 2 - (1 + 3) = -2$$

$$K_p = K_c(RT)^{\Delta n} = 0.500 \times (0.08206 \times 673)^{-2} = \frac{0.500}{(55.23)^2} = \frac{0.500}{3049} = 1.64 \times 10^{-4}$$

The small $K_p$ reflects the fact that the equilibrium lies to the left at this temperature (the
Haber process is typically run at higher temperatures to increase $K$).

## Solubility Equilibrium (CED Unit 7)

### Solubility Product Constant ($K_{sp}$)

For a sparingly soluble salt
$\text{M}_a\text{X}_b(s) \rightleftharpoons a\text{M}^{b+}(aq) + b\text{X}^{a-}(aq)$:

$$
K_{sp} = [\text{M}^{b+}]^a[\text{X}^{a-}]^b
$$

### Common Ion Effect

The solubility of a salt decreases when a common ion is already present in solution.

### Predicting Precipitation

Compare $Q_{sp}$ with $K_{sp}$:

- $Q_{sp} \lt K_{sp}$: no precipitate (unsaturated)
- $Q_{sp} = K_{sp}$: saturated, at equilibrium
- $Q_{sp} \gt K_{sp}$: precipitate forms

:::info[Example]

Will a precipitate form when $50.0 \text{ mL}$ of $0.0010 \text{ M } \text{Pb(NO}_3)_2$ is mixed
with $50.0 \text{ mL}$ of $0.0020 \text{ M } \text{NaCl}$?
$K_{sp}(\text{PbCl}_2) = 1.7 \times 10^{-5}$.

After mixing (volumes double):

$[\text{Pb}^{2+}] = 0.00050 \text{ M}$, $[\text{Cl}^-] = 0.0010 \text{ M}$.

$$
Q_{sp} = (0.00050)(0.0010)^2 = 5.0 \times 10^{-10}
$$

Since $Q_{sp} = 5.0 \times 10^{-10} \lt K_{sp} = 1.7 \times 10^{-5}$, no precipitate forms.

:::

### Worked Example: $K_{sp}$ Calculation from Solubility

The solubility of $\text{AgCl}$ in water at $25^{\circ}\text{C}$ is $1.3 \times 10^{-5} \text{ M}$.
Calculate $K_{sp}$.

$$\text{AgCl}(s) \rightleftharpoons \text{Ag}^+(aq) + \text{Cl}^-(aq)$$

$$K_{sp} = [\text{Ag}^+][\text{Cl}^-] = (1.3 \times 10^{-5})^2 = 1.7 \times 10^{-10}$$

### Worked Example: Common Ion Effect

Calculate the solubility of $\text{AgCl}$ in $0.10 \text{ M } \text{NaCl}$.
$K_{sp} = 1.7 \times 10^{-10}$.

$$K_{sp} = s(s + 0.10) \approx s \times 0.10$$

$$s = \frac{1.7 \times 10^{-10}}{0.10} = 1.7 \times 10^{-9} \text{ M}$$

Compare with solubility in pure water:
$s_0 = \sqrt{1.7 \times 10^{-10}} = 1.3 \times 10^{-5} \text{ M}$.

The common ion effect reduces solubility by a factor of about 7,600.

## Summary Table: Rate Laws

| Order | Integrated Law                          | Half-Life           | Units of $k$                 | Linear Plot            |
| ----- | --------------------------------------- | ------------------- | ---------------------------- | ---------------------- |
| 0     | $[\text{A}] = -kt + [\text{A}]_0$       | $[\text{A}]_0/(2k)$ | $\text{M s}^{-1}$            | $[\text{A}]$ vs $t$    |
| 1     | $\ln[\text{A}] = -kt + \ln[\text{A}]_0$ | $0.693/k$           | $\text{s}^{-1}$              | $\ln[\text{A}]$ vs $t$ |
| 2     | $1/[\text{A}] = kt + 1/[\text{A}]_0$    | $1/(k[\text{A}]_0)$ | $\text{M}^{-1}\text{s}^{-1}$ | $1/[\text{A}]$ vs $t$  |

### Worked Example: Mechanism with Fast Equilibrium

The reaction $2\text{NO} + \text{O}_2 \to 2\text{NO}_2$ has the experimental rate law
$\text{Rate} = k[\text{NO}]^2[\text{O}_2]$.

Proposed mechanism:

Step 1 (fast equilibrium): $\text{NO} + \text{NO} \rightleftharpoons \text{N}_2\text{O}_2$

Step 2 (slow): $\text{N}_2\text{O}_2 + \text{O}_2 \to 2\text{NO}_2$

From step 1: $K = \frac{[\text{N}_2\text{O}_2]}{[\text{NO}]^2}$, so
$[\text{N}_2\text{O}_2] = K[\text{NO}]^2$.

Rate from step 2:
$\text{Rate} = k_2[\text{N}_2\text{O}_2][\text{O}_2] = k_2 K[\text{NO}]^2[\text{O}_2]$.

This matches the experimental rate law with $k = k_2 K$.

## Summary Table: Rate Laws

| Order | Integrated Law                          | Half-Life           | Units of $k$                 | Linear Plot            |
| ----- | --------------------------------------- | ------------------- | ---------------------------- | ---------------------- |
| 0     | $[\text{A}] = -kt + [\text{A}]_0$       | $[\text{A}]_0/(2k)$ | $\text{M s}^{-1}$            | $[\text{A}]$ vs $t$    |
| 1     | $\ln[\text{A}] = -kt + \ln[\text{A}]_0$ | $0.693/k$           | $\text{s}^{-1}$              | $\ln[\text{A}]$ vs $t$ |
| 2     | $1/[\text{A}] = kt + 1/[\text{A}]_0$    | $1/(k[\text{A}]_0)$ | $\text{M}^{-1}\text{s}^{-1}$ | $1/[\text{A}]$ vs $t$  |

## Summary Table: Factors Affecting Reaction Rate

| Factor         | Effect on Rate | Explanation                                                        |
| -------------- | -------------- | ------------------------------------------------------------------ |
| Concentration  | Increases      | More collisions per unit time                                      |
| Temperature    | Increases      | More molecules have energy $\geq E_a$; $k$ increases exponentially |
| Surface area   | Increases      | More exposed particles for collision                               |
| Catalyst       | Increases      | Lowers $E_a$ by providing an alternative pathway                   |
| Pressure (gas) | Increases      | Higher concentration = more collisions                             |
| Light (photo)  | May increase   | Provides energy to overcome $E_a$ via photon absorption            |

## Summary Table: Le Chatelier's Principle

| Stress Applied               | Direction of Shift | Effect on $K$ |
| ---------------------------- | ------------------ | ------------- |
| Add reactant                 | Toward products    | None          |
| Add product                  | Toward reactants   | None          |
| Remove reactant              | Toward reactants   | None          |
| Remove product               | Toward products    | None          |
| Increase temperature (endo.) | Toward products    | Increases     |
| Increase temperature (exo.)  | Toward reactants   | Decreases     |
| Decrease volume              | Fewer gas moles    | None          |
| Add catalyst                 | No shift           | None          |

## Common Pitfalls

1. **Confusing rate law orders with stoichiometric coefficients.** The orders must be determined
   experimentally.
2. **Using the wrong integrated rate law.** Identify the order first from the data or from the
   problem statement.
3. **Forgetting that catalysts do not change $K$.** Catalysts increase the rate of both forward and
   reverse reactions equally.
4. **Including solids and liquids in $K$ expressions.** Only gases and aqueous species appear.
5. **Incorrectly predicting the effect of pressure changes.** Only changes in the number of gas
   moles matter. Adding an inert gas at constant volume does not shift equilibrium.
6. **Making algebraic errors in ICE tables.** Check that the stoichiometric coefficients match the
   changes.
7. **Forgetting to account for dilution** when mixing solutions (total volume changes).
8. **Confusing $Q$ with $K$.** $Q$ uses current concentrations; $K$ uses equilibrium concentrations.
9. **Using the quadratic formula incorrectly in ICE table problems.** Always take the positive root
   for $x$ (concentrations cannot be negative).
10. **Forgetting that $K_p$ and $K_c$ are related by $(RT)^{\Delta n}$.** Use the correct
    $\Delta n$.

## Practice Questions

1. For a first-order reaction with $k = 0.050 \text{ s}^{-1}$, how long does it take for the
   concentration to decrease from $0.80 \text{ M}$ to $0.20 \text{ M}$?

2. The following data were collected for the reaction $\text{A} + \text{B} \to \text{C}$:

   | [A] (M) | [B] (M) | Rate (M/s) |
   | ------- | ------- | ---------- |
   | 0.10    | 0.10    | 0.0030     |
   | 0.20    | 0.10    | 0.0060     |
   | 0.20    | 0.20    | 0.0240     |

   Determine the rate law and rate constant.

3. At $400 \text{ K}$, $k = 6.4 \times 10^{-3} \text{ M}^{-1}\text{s}^{-1}$. At $450 \text{ K}$,
   $k = 3.2 \times 10^{-2} \text{ M}^{-1}\text{s}^{-1}$. Find $E_a$.

4. For $\text{PCl}_5(g) \rightleftharpoons \text{PCl}_3(g) + \text{Cl}_2(g)$, $K_p = 1.80$ at
   $250^\circ\text{C}$. If $0.500 \text{ atm}$ of $\text{PCl}_5$ is placed in a flask, find the
   equilibrium partial pressures of all species.

5. Does a precipitate form when $100 \text{ mL}$ of $0.010 \text{ M } \text{AgNO}_3$ is mixed with
   $100 \text{ mL}$ of $0.010 \text{ M } \text{NaCl}$? $K_{sp}(\text{AgCl}) = 1.8 \times 10^{-10}$.

6. Explain how Le Chatelier's principle applies when the volume of the container is decreased for
   the reaction $\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)$.

7. For a reaction with $\Delta H = -92 \text{ kJ/mol}$, what happens to $K$ when the temperature
   increases from $298 \text{ K}$ to $400 \text{ K}$?

8. Calculate the molar solubility of $\text{PbSO}_4$ in pure water and in
   $0.10 \text{ M } \text{Na}_2\text{SO}_4$. $K_{sp}(\text{PbSO}_4) = 1.6 \times 10^{-8}$.

9. The half-life of a reaction is $120 \text{ s}$ and the initial concentration is $0.50 \text{ M}$.
   If the reaction is first order, what is the rate constant? What is the concentration after
   $240 \text{ s}$?

10. Write the equilibrium expression for
    $\text{BaSO}_4(s) \rightleftharpoons \text{Ba}^{2+}(aq) +
    \text{SO}_4^{2-}(aq)$ and calculate
    the concentration of $\text{Ba}^{2+}$ in a saturated solution.
    $K_{sp} = 1.1 \times
    10^{-10}$.

11. A proposed mechanism for a reaction is: Step 1 (fast):
    $\text{NO}(g) + \text{Br}_2(g) \rightleftharpoons \text{NOBr}_2(g)$ Step 2 (slow):
    $\text{NOBr}_2(g) + \text{NO}(g) \to 2\text{NOBr}(g)$ Derive the rate law from this mechanism.

12. Calculate the solubility of $\text{PbI}_2$ in $0.020 \text{ M } \text{KI}$.
    $K_{sp}(\text{PbI}_2) = 7.9 \times 10^{-9}$.

13. For the reaction $2\text{SO}_2(g) + \text{O}_2(g) \rightleftharpoons 2\text{SO}_3(g)$,
    $K_c = 4.0 \times 10^{24}$ at $700 \text{ K}$. If $0.10 \text{ mol}$ of $\text{SO}_2$ and
    $0.050 \text{ mol}$ of $\text{O}_2$ are placed in a $1.00 \text{ L}$ container, find the
    equilibrium concentrations.

14. Explain why increasing the concentration of a reactant in a reaction at equilibrium causes more
    product to form, but does not change the value of $K$.

15. The decomposition of $\text{HI}$ is second order with a rate constant of
    $1.6 \times 10^{-3} \text{ M}^{-1}\text{s}^{-1}$ at $700 \text{ K}$. If the initial
    concentration of $\text{HI}$ is $0.200 \text{ M}$, how long does it take for the concentration
    to decrease to $0.050 \text{ M}$?

16. A catalyst lowers the activation energy of a reaction from $85 \text{ kJ/mol}$ to
    $55 \text{kJ/mol}$. Calculate the ratio of rate constants at $300 \text{ K}$.

17. For $\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)$ at $448^{\circ}\text{C}$,
    $K_c = 50.5$. Calculate $K_p$ for this reaction at the same temperature.

18. Will a precipitate form when equal volumes of $0.0020 \text{ M } \text{CaCl}_2$ and
    $0.0010 \text{ M } \text{Na}_2\text{SO}_4$ are mixed?
    $K_{sp}(\text{CaSO}_4) = 2.4 \times 10^{-5}$.

19. For a zero-order reaction $\text{A} \to \text{products}$ with $k = 0.0050 \text{ M/s}$,
    calculate the concentration of $\text{A}$ after $60 \text{ s}$ if
    $[\text{A}]_0 = 0.400 \text{ M}$.

20. Calculate $K_c$ for the reaction
    $\text{Fe}^{3+}(aq) + \text{SCN}^-(aq) \rightleftharpoons \text{FeSCN}^{2+}(aq)$ if at
    equilibrium $[\text{Fe}^{3+}] = 0.0100 \text{ M}$, $[\text{SCN}^-] = 0.0080 \text{ M}$, and
    $[\text{FeSCN}^{2+}] = 0.0020 \text{ M}$.

21. Explain why the rate of a reaction approximately doubles for every $10^{\circ}\text{C}$ increase
    in temperature (the "rule of thumb"), and show that this corresponds to an activation energy of
    approximately $50 \text{ kJ/mol}$ using the Arrhenius equation.

22. For the reaction $\text{N}_2\text{O}_4(g) \rightleftharpoons 2\text{NO}_2(g)$, $K_c = 0.600$ at
    $340 \text{ K}$. If $1.00 \text{ atm}$ of $\text{N}_2\text{O}_4$ is placed in a container at
    $340 \text{ K}$, find the equilibrium partial pressures and the percentage dissociation.

23. Calculate the pH of a saturated solution of $\text{Mg(OH)}_2$. $K_{sp} = 5.6 \times 10^{-12}$.

24. A reaction has $\Delta H = +50 \text{ kJ/mol}$. At $300 \text{ K}$, $K = 0.10$. Calculate $K$ at
    $400 \text{ K}$ using the van't Hoff equation.
