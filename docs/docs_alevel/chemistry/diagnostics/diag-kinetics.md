---
title: "Chemical Kinetics -- Diagnostic Tests"
description: Diagnostic tests for rate equations, reaction orders, Arrhenius equation, and catalysts at the hardest A-Level Chemistry standard.
slug: diag-kinetics
hide_table_of_contents: true
---

# Chemical Kinetics — Diagnostic Tests

## Unit Tests

### UT-1: Determining Rate Equation from Initial Rates Data

**Question:**

The reaction between substance $A$ and substance $B$ was studied at constant temperature. The following initial rate data were obtained:

| Experiment | $[A] / \text{mol dm}^{-3}$ | $[B] / \text{mol dm}^{-3}$ | Initial rate $/ \text{mol dm}^{-3}\text{ s}^{-1}$ |
|---|---|---|---|
| 1 | 0.10 | 0.10 | $1.2 \times 10^{-3}$ |
| 2 | 0.20 | 0.10 | $2.4 \times 10^{-3}$ |
| 3 | 0.10 | 0.20 | $4.8 \times 10^{-3}$ |
| 4 | 0.20 | 0.20 | $9.6 \times 10^{-3}$ |

(a) Determine the order of reaction with respect to $A$ and with respect to $B$.

(b) Write the rate equation and calculate the value of the rate constant, including units.

(c) Explain why changing the concentration of a reactant changes the rate but does not change the rate constant.

**Solution:**

(a) **Order with respect to $A$:** Compare experiments 1 and 2 ($[B]$ constant):

$[A]$ doubles from $0.10$ to $0.20$; rate doubles from $1.2 \times 10^{-3}$ to $2.4 \times 10^{-3}$.

Rate doubles when $[A]$ doubles, so **order with respect to $A = 1$**.

**Order with respect to $B$:** Compare experiments 1 and 3 ($[A]$ constant):

$[B]$ doubles from $0.10$ to $0.20$; rate quadruples from $1.2 \times 10^{-3}$ to $4.8 \times 10^{-3}$.

Rate quadruples when $[B]$ doubles, so **order with respect to $B = 2$**.

Verification with experiment 4: If $[A]$ doubles and $[B]$ doubles, rate should increase by $2^1 \times 2^2 = 8$ times. $1.2 \times 10^{-3} \times 8 = 9.6 \times 10^{-3}$. Confirmed.

(b) Rate equation: $\text{rate} = k[A][B]^2$

Using experiment 1:

$$k = \frac{\text{rate}}{[A][B]^2} = \frac{1.2 \times 10^{-3}}{0.10 \times 0.10^2} = \frac{1.2 \times 10^{-3}}{1.0 \times 10^{-3}} = 1.2$$

Units of $k$: $\frac{\text{mol dm}^{-3}\text{ s}^{-1}}{(\text{mol dm}^{-3})(\text{mol dm}^{-3})^2} = \frac{\text{mol dm}^{-3}\text{ s}^{-1}}{\text{mol}^3\text{ dm}^{-9}} = \text{mol}^{-2}\text{ dm}^6\text{ s}^{-1}$

$$k = 1.2\,\text{mol}^{-2}\text{ dm}^6\text{ s}^{-1}$$

(c) The rate depends on both the rate constant and the concentrations of reactants ($\text{rate} = k[A]^m[B]^n$). Changing concentration changes the rate because there are more reactant particles per unit volume, increasing collision frequency. The rate constant $k$ depends only on temperature (via the Arrhenius equation) and the presence of a catalyst. It reflects the proportion of collisions with energy $\geq E_a$ and the correct orientation, which are unaffected by changing concentrations.

---
### UT-2: Arrhenius Equation and Activation Energy

**Question:**

The rate constant for the decomposition of $\text{N}_2\text{O}_5$ was measured at two temperatures:

- At $300\,\text{K}$: $k = 3.46 \times 10^{-5}\,\text{s}^{-1}$
- At $350\,\text{K}$: $k = 1.35 \times 10^{-3}\,\text{s}^{-1}$

(a) Calculate the activation energy $E_a$ for this reaction. ($R = 8.31\,\text{J K}^{-1}\text{ mol}^{-1}$)

(b) Calculate the rate constant at $320\,\text{K}$.

(c) A student plots $\ln(k)$ against $1/T$ and obtains a straight line. State the gradient and $y$-intercept of this line in terms of the Arrhenius parameters.

**Solution:**

(a) Using the Arrhenius equation in two-temperature form:

$$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$\ln\left(\frac{1.35 \times 10^{-3}}{3.46 \times 10^{-5}}\right) = \frac{E_a}{8.31}\left(\frac{1}{300} - \frac{1}{350}\right)$$

$$\ln(39.02) = \frac{E_a}{8.31} \times 4.762 \times 10^{-4}$$

$$3.664 = \frac{E_a}{8.31} \times 4.762 \times 10^{-4}$$

$$E_a = \frac{3.664 \times 8.31}{4.762 \times 10^{-4}} = \frac{30.44}{4.762 \times 10^{-4}} = 63930\,\text{J mol}^{-1} = 63.9\,\text{kJ mol}^{-1}$$

(b) Using the Arrhenius equation with $T = 320\,\text{K}$:

$$\ln k = \ln A - \frac{E_a}{RT}$$

First find $\ln A$ using $T = 300\,\text{K}$:

$$\ln(3.46 \times 10^{-5}) = \ln A - \frac{63930}{8.31 \times 300}$$

$$-10.27 = \ln A - 25.65$$

$$\ln A = 15.38$$

Now at $320\,\text{K}$:

$$\ln k = 15.38 - \frac{63930}{8.31 \times 320} = 15.38 - 24.04 = -8.66$$

$$k = e^{-8.66} = 1.74 \times 10^{-4}\,\text{s}^{-1}$$

(c) The Arrhenius equation in logarithmic form is $\ln k = -\frac{E_a}{R}\cdot\frac{1}{T} + \ln A$, which has the form $y = mx + c$ where $y = \ln k$ and $x = 1/T$.

- **Gradient** $= -E_a/R$
- **$y$-intercept** $= \ln A$

The negative gradient confirms that as temperature increases ($1/T$ decreases), $\ln k$ increases (rate constant increases).

---
### UT-3: Maxwell-Boltzmann Distribution and Catalyst Mechanism

**Question:**

(a) Sketch a Maxwell-Boltzmann distribution curve for a gas at temperature $T_1$. On the same axes, sketch the curve at a higher temperature $T_2$. Label the activation energy $E_a$ on both curves.

(b) Explain why a small increase in temperature can lead to a large increase in the rate of reaction, referencing the Maxwell-Boltzmann distribution.

(c) A heterogeneous catalyst lowers the activation energy of a reaction from $120\,\text{kJ mol}^{-1}$ to $80\,\text{kJ mol}^{-1}$ at $500\,\text{K}$. Calculate the ratio of rate constants $k_{\text{catalysed}}/k_{\text{uncatalysed}}$, assuming the pre-exponential factor $A$ is unchanged. ($R = 8.31\,\text{J K}^{-1}\text{ mol}^{-1}$)

**Solution:**

(a) The Maxwell-Boltzmann distribution at $T_2$ (higher temperature) should show:
- A lower peak (fewer molecules at the most probable energy)
- A broader distribution (more spread of energies)
- A longer tail extending to higher energies (more molecules with $E \gt E_a$)
- The area under both curves is the same (same total number of molecules)

(b) The rate depends on the number of molecules with energy $\geq E_a$. The Maxwell-Boltzmann distribution has a long exponential tail, so the proportion of molecules above $E_a$ increases exponentially with temperature. A small increase in temperature shifts the distribution so that a significantly larger fraction of molecules exceeds $E_a$ (the area under the curve beyond $E_a$ increases disproportionately). Combined with the increased collision frequency, this leads to a large increase in rate. The Arrhenius equation quantifies this: $k = Ae^{-E_a/RT}$, showing the exponential dependence of $k$ on $1/T$.

(c) Using the Arrhenius equation:

$$\frac{k_{\text{catalysed}}}{k_{\text{uncatalysed}}} = \frac{Ae^{-E_{a,\text{cat}}/RT}}{Ae^{-E_{a,\text{uncat}}/RT}} = e^{(E_{a,\text{uncat}} - E_{a,\text{cat}})/RT}$$

$$= e^{(120000 - 80000)/(8.31 \times 500)} = e^{40000/4155} = e^{9.627} = 1.52 \times 10^4$$

The catalysed reaction is approximately $15000$ times faster at $500\,\text{K}$.

## Integration Tests

### IT-1: Rate Equation and Mechanism Deduction (with Organic Chemistry)

**Question:**

The reaction between 2-bromo-2-methylpropane ($\text{(CH}_3\text{)}_3\text{CBr}$) and sodium hydroxide follows the rate equation:

$$\text{rate} = k[(\text{CH}_3)_3\text{CBr}]$$

The reaction is zero order with respect to $\text{OH}^-$.

(a) Deduce the rate-determining step and propose a mechanism consistent with this rate equation.

(b) Explain why this reaction is first order with respect to the halogenoalkane, while the reaction between bromoethane and NaOH follows the rate equation $\text{rate} = k[\text{CH}_3\text{CH}_2\text{Br}][\text{OH}^-]$.

(c) The reaction of 2-bromo-2-methylpropane with NaOH produces 2-methylpropene. Explain why this product is formed under certain conditions rather than the alcohol.

**Solution:**

(a) The rate equation shows the reaction depends only on the halogenoalkane concentration and is independent of $[\text{OH}^-]$. This is consistent with an **SN1 mechanism** (unimolecular nucleophilic substitution):

**Step 1 (slow, rate-determining):** Heterolytic fission of the C--Br bond:

$$(\text{CH}_3)_3\text{CBr} \to (\text{CH}_3)_3\text{C}^+ + \text{Br}^-$$

Only the halogenoalkane is involved in this step, giving the observed rate equation $\text{rate} = k[(\text{CH}_3)_3\text{CBr}]$.

**Step 2 (fast):** Nucleophilic attack by $\text{OH}^-$ on the carbocation:

$$(\text{CH}_3)_3\text{C}^+ + \text{OH}^- \to (\text{CH}_3)_3\text{COH}$$

(b) Bromoethane is a **primary halogenoalkane**. Primary carbocations are too unstable to form, so the reaction proceeds via an **SN2 mechanism** (bimolecular nucleophilic substitution). In SN2, the nucleophile attacks the carbon as the leaving group departs in a single concerted step involving both reactants, giving the rate equation $\text{rate} = k[\text{CH}_3\text{CH}_2\text{Br}][\text{OH}^-]$.

2-Bromo-2-methylpropane is a **tertiary halogenoalkane**. The three methyl groups provide significant electron-donating inductive effect, stabilising the tertiary carbocation intermediate. This makes the SN1 pathway energetically favourable.

(c) When NaOH is in high concentration and the reaction is heated, **elimination (E1)** competes with substitution. The carbocation intermediate can lose a proton (from an adjacent carbon) to a base ($\text{OH}^-$), forming 2-methylpropene:

$$(\text{CH}_3)_3\text{C}^+ + \text{OH}^- \to (\text{CH}_3)_2\text{C}=\text{CH}_2 + \text{H}_2\text{O}$$

Higher temperatures favour elimination (which has a higher activation energy), and concentrated NaOH favours elimination over substitution.

---
### IT-2: Rate Equations and Equilibrium (with Chemical Equilibrium)

**Question:**

For the reaction $\text{A}(g) + \text{B}(g) \rightleftharpoons \text{C}(g) + \text{D}(g)$:

- The forward reaction is first order with respect to both A and B: $\text{rate}_f = k_f[A][B]$
- The reverse reaction is first order with respect to both C and D: $\text{rate}_r = k_r[C][D]$

At equilibrium, $k_f = 0.050\,\text{mol}^{-1}\text{ dm}^3\text{ s}^{-1}$ and the equilibrium constant $K_c = 4.0$.

(a) Calculate $k_r$.

(b) If the initial concentrations are $[A]_0 = [B]_0 = 0.50\,\text{mol dm}^{-3}$ and $[C]_0 = [D]_0 = 0$, calculate the equilibrium concentrations of all species.

(c) If the temperature is increased and $K_c$ increases to $8.0$, explain the effect on the forward and reverse rate constants.

**Solution:**

(a) At equilibrium, $\text{rate}_f = \text{rate}_r$:

$$k_f[A][B] = k_r[C][D]$$

$$\frac{k_f}{k_r} = \frac{[C][D]}{[A][B]} = K_c$$

$$k_r = \frac{k_f}{K_c} = \frac{0.050}{4.0} = 0.0125\,\text{mol}^{-1}\text{ dm}^3\text{ s}^{-1}$$

(b) Let $x$ be the amount of A (and B) that reacts at equilibrium:

| Species | A | B | C | D |
|---|---|---|---|---|
| Initial | 0.50 | 0.50 | 0 | 0 |
| Change | $-x$ | $-x$ | $+x$ | $+x$ |
| Equilibrium | $0.50 - x$ | $0.50 - x$ | $x$ | $x$ |

$$K_c = \frac{[C][D]}{[A][B]} = \frac{x^2}{(0.50 - x)^2} = 4.0$$

$$\frac{x}{0.50 - x} = 2.0$$

$$x = 1.0 - 2x$$

$$3x = 1.0$$

$$x = 0.333\,\text{mol dm}^{-3}$$

Equilibrium concentrations: $[A] = [B] = 0.167\,\text{mol dm}^{-3}$, $[C] = [D] = 0.333\,\text{mol dm}^{-3}$.

(c) If $K_c$ increases from $4.0$ to $8.0$, the equilibrium shifts to the right, meaning the forward reaction is more favoured. Since $K_c = k_f/k_r$, and $K_c$ has increased:

- Either $k_f$ has increased, or $k_r$ has decreased, or both.
- Since $K_c$ increased with temperature, the forward reaction is **endothermic** (Le Chatelier's principle: increasing temperature favours the endothermic direction).
- Both rate constants increase with temperature (Arrhenius), but $k_f$ increases proportionally more than $k_r$, so the ratio $k_f/k_r$ increases.

---
### IT-3: Catalyst and Rate Profile Analysis (with Thermodynamics)

**Question:**

The decomposition of hydrogen peroxide is catalysed by manganese(IV) oxide:

$$2\text{H}_2\text{O}_2(aq) \xrightarrow{\text{MnO}_2} 2\text{H}_2\text{O}(l) + \text{O}_2(g)$$

(a) Explain, with reference to the Boltzmann distribution, how $\text{MnO}_2$ increases the rate of decomposition without being consumed.

(b) In an experiment, $50.0\,\text{cm}^3$ of $0.50\,\text{mol dm}^{-3}$ $\text{H}_2\text{O}_2$ decomposes. The volume of oxygen collected at $25\,^\circ\text{C}$ and $1.01 \times 10^5\,\text{Pa}$ is $290\,\text{cm}^3$. Calculate the percentage of $\text{H}_2\text{O}_2$ that has decomposed.

(c) The standard enthalpy change for this decomposition is $-98.0\,\text{kJ mol}^{-1}$. Explain whether a catalyst changes the enthalpy change of the reaction.

**Solution:**

(a) $\text{MnO}_2$ provides an alternative reaction pathway with a **lower activation energy**. On the Maxwell-Boltzmann distribution, this means a larger proportion of molecules now have energy $\geq$ the (lowered) $E_a$, so more successful collisions occur per unit time. The catalyst is not consumed because it participates in the reaction mechanism (reacting with $\text{H}_2\text{O}_2$ and then being regenerated in a subsequent step). The overall reaction is unchanged, and the catalyst is recovered in its original form.

(b) Using the ideal gas equation to find moles of $\text{O}_2$:

$$n(\text{O}_2) = \frac{pV}{RT} = \frac{1.01 \times 10^5 \times 290 \times 10^{-6}}{8.31 \times 298} = \frac{29.29}{2476.4} = 0.01183\,\text{mol}$$

From the equation, 2 mol $\text{H}_2\text{O}_2$ produce 1 mol $\text{O}_2$:

$$n(\text{H}_2\text{O}_2\text{ decomposed}) = 2 \times 0.01183 = 0.02366\,\text{mol}$$

Initial moles of $\text{H}_2\text{O}_2$:

$$n(\text{H}_2\text{O}_2\text{ initial}) = 0.50 \times \frac{50.0}{1000} = 0.0250\,\text{mol}$$

$$\text{Percentage decomposed} = \frac{0.02366}{0.0250} \times 100 = 94.6\%$$

(c) A catalyst **does not** change the enthalpy change of the reaction. The enthalpy change $\Delta H$ depends only on the initial and final states (it is a state function), not on the pathway taken. The catalyst provides an alternative pathway with lower activation energy for both the forward and reverse reactions, but the energy difference between reactants and products remains the same. This can be seen on an enthalpy profile diagram: the catalysed pathway has a lower peak but the same starting and ending levels.
