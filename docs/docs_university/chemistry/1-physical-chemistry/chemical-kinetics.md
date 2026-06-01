---
title: Chemical Kinetics
description:
  'University Chemistry Chemical Kinetics notes covering key definitions, core concepts, worked
  examples, and practice questions for effective revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/chemical-kinetics
---

## 1. Rate Laws and Reaction Order

### 1.1 Rate of Reaction

For the reaction $aA + bB \to cC + dD$, the rate of reaction is:

$$v = -\frac{1}{a}\frac{d[A]}{dt} = -\frac{1}{b}\frac{d[B]}{dt} = \frac{1}{c}\frac{d[C]}{dt} = \frac{1}{d}\frac{d[D]}{dt}$$

### 1.2 The Rate Law

**Definition 1 (Rate Law):** For many reactions, the rate is proportional to the concentrations of
reactants raised to powers:

$$v = k[A]^m[B]^n$$

where $k$ is the **rate constant**, $m$ is the order with respect to $A$, $n$ is the order with
respect to $B$, and the overall order is $m + n$. The orders $m$ and $n$ are experimentally
determined — they need not equal the stoichiometric coefficients.

### 1.3 Elementary Reactions and molecularity

For an **elementary reaction** (single molecular event), the order equals the molecularity:

- **Unimolecular:** $A \to$ products, rate $= k[A]$ (first order)
- **Bimolecular:** $A + B \to$ products, rate $= k[A][B]$ (second order)
- **Termolecular:** $A + B + C \to$ products, rate $= k[A][B][C]$ (third order, rare)

## 2. Integrated Rate Laws

### 2.1 Zeroth-Order Reactions

$$\frac{d[A]}{dt} = -k$$

$$[A] = [A]_0 - kt$$

**Half-life:** $t_{1/2} = \frac{[A]_0}{2k}$

### 2.2 First-Order Reactions

$$\frac{d[A]}{dt} = -k[A]$$

$$\ln[A] = \ln[A]_0 - kt \quad \text{or} \quad [A] = [A]_0 e^{-kt}$$

**Half-life:** $t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$

The half-life is **independent** of initial concentration.

**Example 1:** Radioactive decay of ${}^{14}\text{C}$ has $t_{1/2} = 5730$ years. What fraction
remains after 10000 years?

$$k = \frac{0.693}{5730} = 1.21 \times 10^{-4} \text{ yr}^{-1}$$

$$\frac{[A]}{[A]_0} = e^{-kt} = e^{-1.21 \times 10^{-4} \times 10000} = e^{-1.21} = 0.298$$

About 29.8% remains.

$\blacksquare$

### 2.3 Second-Order Reactions

Type I: $A + A \to$ products, rate $= k[A]^2$:

$$\frac{1}{[A]} = \frac{1}{[A]_0} + kt$$

**Half-life:** $t_{1/2} = \frac{1}{k[A]_0}$

Type II: $A + B \to$ products with $[A]_0 = [B]_0$:

$$\frac{1}{[A]} = \frac{1}{[A]_0} + kt$$

### 2.4 Pseudo-First-Order Reactions

When one reactant is in large excess ($[B]_0 \gg [A]_0$):

$$v = k[A][B] \approx k'[A]$$

where $k' = k[B]_0$ is the pseudo-first-order rate constant.

## 3. Methods for Determining Reaction Order

### 3.1 Differential Method (Initial Rates)

Measure initial rates at different initial concentrations:

$$v_0 = k[A]_0^m \implies \log v_0 = \log k + m\log[A]_0$$

A plot of $\log v_0$ vs $\log[A]_0$ has slope $m$.

### 3.2 Integral Method

Assume a reaction order, plot the corresponding linearized form:

- Zeroth order: $[A]$ vs $t$ (linear)
- First order: $\ln[A]$ vs $t$ (linear)
- Second order: $1/[A]$ vs $t$ (linear)

### 3.3 Half-Life Method

- If $t_{1/2}$ is constant: first order.
- If $t_{1/2}$ doubles when $[A]_0$ halves: second order.
- If $t_{1/2} \propto 1/[A]_0$: second order.

## 4. The Arrhenius Equation

### 4.1 Temperature Dependence of Rate Constants

**Theorem 1 (Arrhenius Equation):**

$$k = A\,e^{-E_a/RT}$$

where $A$ is the pre-exponential (frequency) factor and $E_a$ is the activation energy.

Logarithmic form:

$$\ln k = \ln A - \frac{E_a}{RT}$$

A plot of $\ln k$ vs $1/T$ gives a straight line with slope $-E_a/R$.

### 4.2 Two-Point Form

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

**Example 2:** A reaction has $k_1 = 3.46 \times 10^{-5}$ s$^{-1}$ at 298 K and
$k_2 = 1.35 \times 10^{-3}$ s$^{-1}$ at 350 K. Find $E_a$.

$$E_a = R\frac{\ln(k_2/k_1)}{1/T_1 - 1/T_2} = 8.314 \times \frac{\ln(1.35 \times 10^{-3}/3.46 \times 10^{-5})}{1/298 - 1/350}$$

$$= 8.314 \times \frac{3.66}{5.0 \times 10^{-4}} = 60.9 \text{ kJ/mol}$$

$\blacksquare$

### 4.3 Modified Arrhenius Equation

For more accurate descriptions over wide temperature ranges:

$$k = A\,T^n\,e^{-E_a/RT}$$

## 5. Collision Theory

### 5.1 Basic Collision Theory

**Theorem 2 (Collision Theory Rate Constant):**

$$k = \sigma\,N_A\,\langle v_r \rangle\,e^{-E_a/RT}$$

where $\sigma = \pi(d_A + d_B)^2$ is the collision cross-section and $\langle v_r \rangle$ is the
relative mean speed.

The mean relative speed from kinetic theory:

$$\langle v_r \rangle = \sqrt{\frac{8k_BT}{\pi\mu}}$$

where $\mu = \frac{m_A m_B}{m_A + m_B}$ is the reduced mass.

### 5.2 Steric Factor

**Definition 2 (Steric Factor):** Not every collision leads to reaction. The steric factor $P$
accounts for orientation requirements:

$$k = P\,\sigma\,N_A\,\langle v_r \rangle\,e^{-E_a/RT}$$

For simple collisions, $P \approx 1$; for complex molecules, $P \ll 1$.

## 6. Transition State Theory

### 6.1 Activated Complex

**Definition 3 (Transition State):** The transition state (activated complex) is the highest energy
configuration along the reaction coordinate. The energy difference between reactants and the
transition state is the activation energy.

### 6.2 The Eyring Equation

**Theorem 3 (Eyring Equation):**

$$k = \frac{k_B T}{h}\,e^{-\Delta^{\ddagger} G^\circ/RT} = \frac{k_B T}{h}\,e^{\Delta^{\ddagger} S^\circ/R}\,e^{-\Delta^{\ddagger} H^\circ/RT}$$

where $k_B$ is Boltzmann's constant, $h$ is Planck's constant, $\Delta^{\ddagger} G^\circ$,
$\Delta^{\ddagger} H^\circ$, and $\Delta^{\ddagger} S^\circ$ are the standard Gibbs energy,
enthalpy, and entropy of activation.

### 6.3 Relation to Arrhenius Parameters

At moderate temperatures:

$$E_a = \Delta^{\ddagger} H^\circ + RT$$

$$A = e\,\frac{k_B T}{h}\,e^{\Delta^{\ddagger} S^\circ/R}$$

A large positive $\Delta^{\ddagger} S^\circ$ means a loose, disordered transition state (typical for
unimolecular reactions). A negative $\Delta^{\ddagger} S^\circ$ means a rigid, ordered transition
state (typical for bimolecular reactions).

## 7. Reaction Mechanisms

### 7.1 Elementary Steps and Mechanisms

**Definition 4 (Mechanism):** A reaction mechanism is a sequence of elementary steps that accounts
for the overall stoichiometry and the observed rate law.

**Theorem 4 (Rate-Determining Step):** If one elementary step is much slower than all others, the
overall rate is approximately equal to the rate of that step.

### 7.2 Steady-State Approximation

**Definition 5 (Steady-State Approximation):** For reactive intermediates, assume
$d[\text{intermediate}]/dt \approx 0$ after a short induction period.

**Example 3:** The decomposition of $\text{N}_2\text{O}_5$:
$2\text{N}_2\text{O}_5 \to 4\text{NO}_2 + \text{O}_2$.

Proposed mechanism:

1. $\text{N}_2\text{O}_5 \xrightarrow{k_1} \text{NO}_2 + \text{NO}_3$ (slow)
2. $\text{NO}_2 + \text{NO}_3 \xrightarrow{k_{-1}} \text{N}_2\text{O}_5$ (fast)
3. $\text{NO}_2 + \text{NO}_3 \xrightarrow{k_2} \text{NO} + \text{O}_2 + \text{NO}_2$ (slow)
4. $\text{NO} + \text{NO}_3 \xrightarrow{k_3} 2\text{NO}_2$ (fast)

Steady-state for $\text{NO}_3$:

$$\frac{d[\text{NO}_3]}{dt} = k_1[\text{N}_2\text{O}_5] - k_{-1}[\text{NO}_2][\text{NO}_3] - (k_2 + k_3)[\text{NO}_2][\text{NO}_3] = 0$$

$$[\text{NO}_3] = \frac{k_1[\text{N}_2\text{O}_5]}{(k_{-1} + k_2 + k_3)[\text{NO}_2]}$$

The rate of formation of $\text{O}_2$ (from step 3): $v = k_2[\text{NO}_2][\text{NO}_3]$.

Substituting: $v = k_{\text{eff}}[\text{N}_2\text{O}_5]$ where
$k_{\text{eff}} = \frac{k_1 k_2}{k_{-1} + k_2 + k_3}$.

$\blacksquare$

### 7.3 Pre-Equilibrium Approximation

When a rapid equilibrium precedes the rate-determining step:

$$K = \frac{k_1}{k_{-1}} = \frac{[\text{intermediate}]}{[\text{reactant}]}$$

The rate is determined by the slow step with the intermediate concentration expressed through $K$.

## 8. Chain Reactions

### 8.1 Chain Reaction Mechanism

1. **Initiation:** Formation of reactive intermediates (radicals).
2. **Propagation:** Intermediate reacts with reactant to form product and regenerate the
   intermediate.
3. **Termination:** Intermediates combine to form stable products.

**Example 4:** $\text{H}_2 + \text{Br}_2 \to 2\text{HBr}$ (Bodenstein mechanism).

$$v = \frac{k[\text{H}_2][\text{Br}_2]^{1/2}}{1 + k'[\text{HBr}/\text{Br}_2]}$$

The term $[\text{Br}_2]^{1/2}$ arises from the chain initiation/termination steps.

$\blacksquare$

### 8.2 Chain Length

**Definition 6 (Chain Length):** The number of product molecules formed per initiation event:

$$\nu = \frac{\text{rate of propagation}}{\text{rate of initiation}}$$

### 8.3 Explosions

Chain-branching reactions can lead to explosions (e.g., $\text{H}_2 + \text{O}_2$):

- **Thermal explosion:** Exothermic reaction heats the system, increasing the rate exponentially.
- **Chain-branching explosion:** Each propagation step produces more radicals than it consumes.

## 9. Enzyme Kinetics

### 9.1 Michaelis-Menten Mechanism

$$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \xrightarrow{k_2} E + P$$

### 9.2 Michaelis-Menten Equation

**Theorem 5 (Michaelis-Menten Equation):** Under steady-state approximation for $[ES]$:

$$v = \frac{V_{\max}[S]}{K_M + [S]}$$

where $V_{\max} = k_2[E]_0$ is the maximum velocity and $K_M = (k_{-1} + k_2)/k_1$ is the Michaelis
constant.

### 9.3 Lineweaver-Burk Plot

Taking reciprocals:

$$\frac{1}{v} = \frac{K_M}{V_{\max}}\frac{1}{[S]} + \frac{1}{V_{\max}}$$

A plot of $1/v$ vs $1/[S]$ gives slope $K_M/V_{\max}$ and intercept $1/V_{\max}$.

### 9.4 Catalytic Efficiency

**Definition 7 (Catalytic Efficiency):** For $[S] \ll K_M$:

$$\frac{v}{[E][S]} = \frac{k_2}{K_M}$$

The quantity $k_2/K_M$ is the catalytic efficiency. The diffusion-controlled limit is
$\sim 10^8$–$10^9$ M$^{-1}$s$^{-1}$.

### 9.5 Enzyme Inhibition

| Type           | Effect on $K_M$ | Effect on $V_{\max}$ |
| -------------- | --------------- | -------------------- |
| Competitive    | Increases       | Unchanged            |
| Uncompetitive  | Decreases       | Decreases            |
| Noncompetitive | Unchanged       | Decreases            |
| Mixed          | Varies          | Decreases            |

For competitive inhibition:

$$v = \frac{V_{\max}[S]}{K_M(1 + [I]/K_I) + [S]}$$

## 10. Catalysis

### 10.1 Types of Catalysis

- **Homogeneous catalysis:** Catalyst and reactants in the same phase.
- **Heterogeneous catalysis:** Catalyst in a different phase (in most cases solid catalyst,
  gaseous/liquid reactants). Involves adsorption, surface reaction, and desorption.
- **Autocatalysis:** Product catalyzes its own formation (S-shaped kinetics).

### 10.2 Langmuir-Hinshelwood Mechanism

For heterogeneous catalysis on a surface:

1. Adsorption of reactants onto the surface.
2. Surface reaction between adsorbed species.
3. Desorption of products.

Rate depends on surface coverage $\theta$, described by the Langmuir isotherm:

$$\theta = \frac{KP}{1 + KP}$$

## 11. Complex Reaction Mechanisms

### 11.1 Parallel Reactions

$$A \xrightarrow{k_1} B$$ $$A \xrightarrow{k_2} C$$

$$\frac{[B]}{[C]} = \frac{k_1}{k_2}$$

The ratio of products is constant and determined by the ratio of rate constants.

### 11.2 Consecutive Reactions

$$A \xrightarrow{k_1} B \xrightarrow{k_2} C$$

$$[B] = \frac{k_1[A]_0}{k_2 - k_1}\left(e^{-k_1 t} - e^{-k_2 t}\right)$$

Maximum concentration of $B$ occurs at $t_{\max} = \frac{\ln(k_2/k_1)}{k_2 - k_1}$.

### 11.3 Reversible Reactions

$$A \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} B$$

$$\frac{[B]_{\text{eq}}}{[A]_{\text{eq}}} = \frac{k_1}{k_{-1}} = K$$

$$[A] = [A]_0\frac{k_{-1} + k_1 e^{-(k_1 + k_{-1})t}}{k_1 + k_{-1}}$$

## 12. Photochemistry

### 12.1 Beer-Lambert Law

**Theorem 6 (Beer-Lambert Law):**

$$A = \varepsilon\,c\,l = \log_{10}\frac{I_0}{I}$$

where $A$ is absorbance, $\varepsilon$ is the molar absorptivity, $c$ is concentration, $l$ is path
length, $I_0$ is incident intensity, and $I$ is transmitted intensity.

### 12.2 Quantum Yield

**Definition 8 (Quantum Yield):**

$$\Phi = \frac{\text{number of reaction events}}{\text{number of photons absorbed}}$$

For a chain reaction, $\Phi \gg 1$; for fluorescence, $\Phi \leq 1$.

### 12.3 Stern-Volmer Equation

For fluorescence quenching:

$$\frac{I_0}{I} = 1 + k_q\,\tau_0\,[Q] = 1 + K_{SV}[Q]$$

where $[Q]$ is the quencher concentration, $\tau_0$ is the fluorescence lifetime without quencher,
and $K_{SV}$ is the Stern-Volmer constant.

## 13. Fast Reactions

### 13.1 Relaxation Methods

For a reaction perturbed from equilibrium by a rapid temperature jump ($T$-jump):

**Theorem 7 (Relaxation Time):** For a single-step reaction $A \rightleftharpoons B$:

$$\frac{1}{\tau} = k_1 + k_{-1}$$

For $A + B \rightleftharpoons C + D$:

$$\frac{1}{\tau} = k_1([A]_{\text{eq}} + [B]_{\text{eq}}) + k_{-1}([C]_{\text{eq}} + [D]_{\text{eq}})$$

### 13.2 Flash Photolysis

A short laser pulse initiates the reaction; time-resolved spectroscopy monitors the decay of
intermediates. Can measure rate constants up to $\sim 10^{12}$ s$^{-1}$.

## Common Pitfalls

1. **Confusing molecularity with reaction order.** Molecularity applies only to elementary steps;
   the overall reaction order is determined experimentally. **Fix:** Never assign orders from the
   balanced equation unless the reaction is known to be elementary.
2. **Using integrated rate laws for non-elementary reactions.** The integrated forms assume a single
   step of that order. **Fix:** First determine the rate law experimentally, then check which
   integrated form is consistent.
3. **Ignoring the steady-state approximation validity.** The approximation requires the intermediate
   to be consumed as fast as it is formed. **Fix:** Check that $k_2 \gg k_1$ or verify the result by
   numerical integration.
4. **Wrong activation energy units in the Arrhenius equation.** $E_a$ must be in J/mol (not kJ/mol)
   when using $R = 8.314$ J/(mol·K). **Fix:** Always convert to consistent units before
   substituting.
5. **Confusing $K_M$ with $K_d$ (dissociation constant).** $K_M = (k_{-1} + k_2)/k_1$, not
   $k_{-1}/k_1$. **Fix:** $K_M = K_d$ only when $k_2 \ll k_{-1}$.
6. **Misapplying Michaelis-Menten.** The equation assumes steady-state $[ES]$, not equilibrium, and
   $[E]_0 \ll [S]$. **Fix:** When $[S]$ is comparable to $[E]_0$, use the full quadratic solution.
7. **Forgetting that the Eyring equation uses $\Delta^{\ddagger} H^\circ$, not $E_a$.**
   $E_a = \Delta^{\ddagger} H^\circ + RT$. **Fix:** For reactions in solution,
   $E_a \approx \Delta^{\ddagger} H^\circ$, but in the gas phase the $RT$ term matters at high
   temperatures.

## Summary

- **Rate law:** $v = k[A]^m[B]^n$; order determined experimentally.
- **Integrated rate laws:** Zeroth ($[A]$ vs $t$), first ($\ln[A]$ vs $t$), second ($1/[A]$ vs $t$).
- **Arrhenius equation:** $k = A e^{-E_a/RT}$; activation energy from slope of $\ln k$ vs $1/T$.
- **Collision theory:** $k = P\sigma N_A\langle v_r\rangle e^{-E_a/RT}$.
- **Eyring equation:** $k = (k_B T/h)e^{-\Delta^{\ddagger}G^\circ/RT}$; connects kinetics to
  thermodynamics.
- **Steady-state approximation:** $d[\text{intermediate}]/dt \approx 0$; simplifies complex
  mechanisms.
- **Michaelis-Menten:** $v = V_{\max}[S]/(K_M + [S])$; Lineweaver-Burk plot for parameter
  extraction.
- **Chain reactions:** Initiation, propagation, termination; chain length $\nu$.
- **Enzyme inhibition:** Competitive, uncompetitive, noncompetitive effects on $K_M$ and $V_{\max}$.

## Worked Examples

### Example 1: Determining Reaction Order from Initial Rate Data

**Problem:** For the reaction A + 2B -> C, experiments yield: [A]=0.1, [B]=0.1, Rate=0.002; [A]=0.2,
[B]=0.1, Rate=0.004; [A]=0.1, [B]=0.2, Rate=0.002. Determine the rate law. **Solution:** Doubling
[A] (experiments 1 to 2) doubles the rate: order in A = 1. Doubling [B] (experiments 1 to 3) does
not change the rate: order in B = 0. Rate law: v = k[A]. Rate constant k = 0.002/0.1 = 0.02 mol^-1 L
s^-1.

### Example 2: Arrhenius Plot Analysis

**Problem:** The rate constant doubles when temperature increases from 300 K to 310 K. Calculate the
activation energy (R = 8.314 J mol^-1 K^-1). **Solution:** ln(k2/k1) = (Ea/R)(1/T1 - 1/T2). ln(2) =
(Ea/8.314)(1/300 - 1/310) = (Ea/8.314)(10/93000). Ea = 0.693 x 8.314 x 93000/10 = 53,570 J/mol =
53.6 kJ/mol.

## Cross-References

| Topic                      | Site        | Link                                                                          |
| -------------------------- | ----------- | ----------------------------------------------------------------------------- |
| Thermodynamics             | WyattsNotes | [View](/docs/university/chemistry/thermodynamics)                             |
| Quantum Chemistry          | WyattsNotes | [View](/docs/university/chemistry/quantum-chemistry)                          |
| Statistical Mechanics      | WyattsNotes | [View](/docs/university/chemistry/statistical-mechanics)                      |
| Enzyme Kinetics — MIT 5.60 | MIT OCW     | [View](https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/) |
