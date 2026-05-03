---
title: "Electrochemistry -- Diagnostic Tests"
description: Diagnostic tests for electrode potentials, electrochemical cells, electrolysis, and Faraday's laws at the hardest A-Level Chemistry standard.
slug: diag-electrochemistry
hide_table_of_contents: true
---

# Electrochemistry — Diagnostic Tests

## Unit Tests

### UT-1: Electrochemical Cell Calculations

**Question:**

Given the following standard electrode potentials:

| Half-equation | $E^\circ / \text{V}$ |
|---|---|
| $\text{Fe}^{3+}(aq) + e^- \rightleftharpoons \text{Fe}^{2+}(aq)$ | $+0.77$ |
| $\text{Ag}^+(aq) + e^- \rightleftharpoons \text{Ag}(s)$ | $+0.80$ |
| $\text{Cu}^{2+}(aq) + 2e^- \rightleftharpoons \text{Cu}(s)$ | $+0.34$ |
| $\text{Zn}^{2+}(aq) + 2e^- \rightleftharpoons \text{Zn}(s)$ | $-0.76$ |

(a) Calculate the standard cell potential for a cell made from $\text{Zn}/\text{Zn}^{2+}$ and $\text{Cu}^{2+}/\text{Cu}$ half-cells. Write the overall cell equation.

(b) A student wants to use a $\text{Fe}^{3+}/\text{Fe}^{2+}$ and $\text{Ag}^+/\text{Ag}$ cell to determine an unknown concentration of $\text{Fe}^{2+}$. The measured cell potential is $0.020\,\text{V}$ when $[\text{Ag}^+] = 1.00\,\text{mol dm}^{-3}$ and $[\text{Fe}^{3+}] = 1.00\,\text{mol dm}^{-3}$. Calculate $[\text{Fe}^{2+}]$.

**Solution:**

(a) The more positive $E^\circ$ value is reduced ($\text{Cu}^{2+}/\text{Cu}$), the less positive is oxidised ($\text{Zn}/\text{Zn}^{2+}$).

$$E^\circ_{\text{cell}} = E^\circ_{\text{red}}(\text{cathode}) - E^\circ_{\text{red}}(\text{anode}) = 0.34 - (-0.76) = 1.10\,\text{V}$$

Overall equation (balancing electrons):

Oxidation (anode): $\text{Zn}(s) \to \text{Zn}^{2+}(aq) + 2e^-$

Reduction (cathode): $\text{Cu}^{2+}(aq) + 2e^- \to \text{Cu}(s)$

Overall: $\text{Zn}(s) + \text{Cu}^{2+}(aq) \to \text{Zn}^{2+}(aq) + \text{Cu}(s)$

(b) Standard cell potential:

$$E^\circ_{\text{cell}} = E^\circ(\text{Ag}^+/\text{Ag}) - E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = 0.80 - 0.77 = 0.03\,\text{V}$$

Using the Nernst equation at $298\,\text{K}$:

$$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{RT}{nF}\ln Q$$

$$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n}\log Q$$

For the cell: $\text{Ag}^+(aq) + \text{Fe}^{2+}(aq) \rightleftharpoons \text{Ag}(s) + \text{Fe}^{3+}(aq)$, $n = 1$

$$Q = \frac{[\text{Fe}^{3+}]}{[\text{Ag}^+][\text{Fe}^{2+}]} = \frac{1.00}{1.00 \times [\text{Fe}^{2+}]} = \frac{1}{[\text{Fe}^{2+}]}$$

$$0.020 = 0.030 - 0.0592\log\frac{1}{[\text{Fe}^{2+}]}$$

$$-0.010 = -0.0592\log\frac{1}{[\text{Fe}^{2+}]}$$

$$\log\frac{1}{[\text{Fe}^{2+}]} = \frac{0.010}{0.0592} = 0.169$$

$$\frac{1}{[\text{Fe}^{2+}]} = 10^{0.169} = 1.476$$

$$[\text{Fe}^{2+}] = 0.678\,\text{mol dm}^{-3}$$

---
### UT-2: Electrolysis and Faraday's Laws

**Question:**

Copper(II) sulfate solution is electrolysed using inert platinum electrodes with a constant current of $0.500\,\text{A}$ for $2.00\,\text{hours}$.

(a) Calculate the mass of copper deposited at the cathode.

(b) Calculate the volume of oxygen gas produced at the anode at room temperature and pressure ($24.0\,\text{dm}^3\,\text{mol}^{-1}$).

(c) State what would happen if copper electrodes were used instead of platinum, explaining the process occurring at the anode.

**Solution:**

(a) At the cathode: $\text{Cu}^{2+}(aq) + 2e^- \to \text{Cu}(s)$

Charge passed: $Q = It = 0.500 \times 2.00 \times 3600 = 3600\,\text{C}$

Moles of electrons: $n(e^-) = Q/F = 3600/96500 = 0.03731\,\text{mol}$

Moles of Cu: $n(\text{Cu}) = 0.03731/2 = 0.01866\,\text{mol}$

Mass of Cu: $m = 0.01866 \times 63.5 = 1.18\,\text{g}$

(b) At the anode: $4\text{OH}^-(aq) \to 2\text{H}_2\text{O}(l) + \text{O}_2(g) + 4e^-$

(Or equivalently: $2\text{H}_2\text{O}(l) \to 4\text{H}^+(aq) + \text{O}_2(g) + 4e^-$)

Moles of $\text{O}_2$: $n(\text{O}_2) = 0.03731/4 = 0.009328\,\text{mol}$

Volume of $\text{O}_2$: $V = 0.009328 \times 24.0 = 0.224\,\text{dm}^3 = 224\,\text{cm}^3$

(c) If **copper electrodes** are used:

- **Cathode:** $\text{Cu}^{2+} + 2e^- \to \text{Cu}(s)$ (copper deposited as before)
- **Anode:** The copper anode itself undergoes oxidation: $\text{Cu}(s) \to \text{Cu}^{2+}(aq) + 2e^-$

The copper anode dissolves, releasing $\text{Cu}^{2+}$ ions into solution. The concentration of $\text{CuSO}_4$ remains constant because copper is deposited at the cathode at the same rate as it dissolves at the anode. This is the principle behind **electrorefining** of copper. No oxygen is produced at the anode because copper is more easily oxidised than water or hydroxide ions.

---
### UT-3: Predicting Feasibility of Redox Reactions

**Question:**

Use the following standard electrode potentials to determine which of the following reactions are feasible under standard conditions:

| Half-equation | $E^\circ / \text{V}$ |
|---|---|
| $\text{MnO}_4^- + 8\text{H}^+ + 5e^- \rightleftharpoons \text{Mn}^{2+} + 4\text{H}_2\text{O}$ | $+1.51$ |
| $\text{Fe}^{3+} + e^- \rightleftharpoons \text{Fe}^{2+}$ | $+0.77$ |
| $\text{Cl}_2 + 2e^- \rightleftharpoons 2\text{Cl}^-$ | $+1.36$ |
| $\text{I}_2 + 2e^- \rightleftharpoons 2\text{I}^-$ | $+0.54$ |
| $\text{Br}_2 + 2e^- \rightleftharpoons 2\text{Br}^-$ | $+1.07$ |

(a) $\text{MnO}_4^-(aq) + 5\text{Fe}^{2+}(aq) + 8\text{H}^+(aq) \to \text{Mn}^{2+}(aq) + 5\text{Fe}^{3+}(aq) + 4\text{H}_2\text{O}(l)$

(b) $\text{Cl}_2(aq) + 2\text{Br}^-(aq) \to 2\text{Cl}^-(aq) + \text{Br}_2(aq)$

(c) $\text{Br}_2(aq) + 2\text{I}^-(aq) \to 2\text{Br}^-(aq) + \text{I}_2(aq)$

**Solution:**

A reaction is feasible under standard conditions if $E^\circ_{\text{cell}} \gt 0$ (typically $E^\circ_{\text{cell}} \gt 0.3\,\text{V}$ for the reaction to proceed to a significant extent).

(a) $\text{MnO}_4^-/\text{Mn}^{2+}$ is reduced ($E^\circ = +1.51\,\text{V}$), $\text{Fe}^{3+}/\text{Fe}^{2+}$ is reversed (oxidation, $E^\circ = +0.77\,\text{V}$).

$$E^\circ_{\text{cell}} = 1.51 - 0.77 = +0.74\,\text{V}$$

$E^\circ_{\text{cell}} \gt 0.3\,\text{V}$, so this reaction is **feasible**. This is the basis of redox titrations using potassium manganate(VII).

(b) $\text{Cl}_2/\text{Cl}^-$ is reduced ($E^\circ = +1.36\,\text{V}$), $\text{Br}_2/\text{Br}^-$ is reversed (oxidation, $E^\circ = +1.07\,\text{V}$).

$$E^\circ_{\text{cell}} = 1.36 - 1.07 = +0.29\,\text{V}$$

$E^\circ_{\text{cell}}$ is positive but only marginally above zero and below $0.3\,\text{V}$. The reaction is **marginally feasible** but the equilibrium position does not lie far to the right. In practice, chlorine can oxidise bromide to bromine, but the reaction is not complete and an equilibrium mixture is formed.

(c) $\text{Br}_2/\text{Br}^-$ is reduced ($E^\circ = +1.07\,\text{V}$), $\text{I}_2/\text{I}^-$ is reversed (oxidation, $E^\circ = +0.54\,\text{V}$).

$$E^\circ_{\text{cell}} = 1.07 - 0.54 = +0.53\,\text{V}$$

$E^\circ_{\text{cell}} \gt 0.3\,\text{V}$, so this reaction is **feasible**. Bromine can oxidise iodide to iodine. This explains the trend in reactivity: $\text{Cl}_2 \gt \text{Br}_2 \gt \text{I}_2$ as oxidising agents.

## Integration Tests

### IT-1: Electrochemical Cells and Gibbs Free Energy (with Thermodynamics)

**Question:**

For the cell: $\text{Zn}(s) \mid \text{Zn}^{2+}(aq) \parallel \text{Cu}^{2+}(aq) \mid \text{Cu}(s)$

$E^\circ_{\text{cell}} = +1.10\,\text{V}$

(a) Calculate $\Delta G^\circ$ for the cell reaction.

(b) Calculate the equilibrium constant $K$ for the cell reaction at $298\,\text{K}$.

(c) The cell is set up with $[\text{Zn}^{2+}] = 0.0100\,\text{mol dm}^{-3}$ and $[\text{Cu}^{2+}] = 1.00\,\text{mol dm}^{-3}$. Calculate the cell potential under these non-standard conditions.

**Solution:**

(a) $\Delta G^\circ = -nFE^\circ_{\text{cell}}$

$n = 2$ (two electrons transferred in the overall reaction)

$$\Delta G^\circ = -2 \times 96500 \times 1.10 = -212300\,\text{J mol}^{-1} = -212\,\text{kJ mol}^{-1}$$

(b) $\Delta G^\circ = -RT\ln K$

$$\ln K = -\frac{\Delta G^\circ}{RT} = \frac{212300}{8.31 \times 298} = \frac{212300}{2476.4} = 85.72$$

$$K = e^{85.72} = 1.67 \times 10^{37}$$

The extremely large $K$ confirms that the reaction proceeds essentially to completion under standard conditions.

(c) Using the Nernst equation:

$$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0592}{n}\log\frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}$$

$$E_{\text{cell}} = 1.10 - \frac{0.0592}{2}\log\frac{0.0100}{1.00}$$

$$E_{\text{cell}} = 1.10 - 0.0296 \times (-2) = 1.10 + 0.0592 = 1.159\,\text{V}$$

The cell potential is higher than standard because the lower $[\text{Zn}^{2+}]$ and higher $[\text{Cu}^{2+}]$ drive the reaction further forward (Le Chatelier's principle applied to the cell reaction).

---
### IT-2: Electrolysis Product Prediction and Quantitative Analysis (with Transition Metals)

**Question:**

A solution containing $\text{Cu}^{2+}$, $\text{Ag}^+$, and $\text{Zn}^{2+}$ ions (all at $0.10\,\text{mol dm}^{-3}$) is electrolysed using carbon electrodes.

Relevant electrode potentials:
- $\text{Ag}^+ + e^- \rightleftharpoons \text{Ag}$: $E^\circ = +0.80\,\text{V}$
- $\text{Cu}^{2+} + 2e^- \rightleftharpoons \text{Cu}$: $E^\circ = +0.34\,\text{V}$
- $\text{Zn}^{2+} + 2e^- \rightleftharpoons \text{Zn}$: $E^\circ = -0.76\,\text{V}$

(a) State the order in which metals are deposited at the cathode during electrolysis, explaining your reasoning.

(b) If a current of $0.200\,\text{A}$ is passed until $0.108\,\text{g}$ of silver has been deposited, calculate the time taken.

(c) After all silver has been deposited, predict the next substance to form at the anode and write the half-equation.

**Solution:**

(a) Metals are deposited at the cathode in order of their **reduction potential** (most positive first):

1. **Silver** ($\text{Ag}^+$, $E^\circ = +0.80\,\text{V}$) -- deposited first (most easily reduced)
2. **Copper** ($\text{Cu}^{2+}$, $E^\circ = +0.34\,\text{V}$) -- deposited second
3. **Zinc** ($\text{Zn}^{2+}$, $E^\circ = -0.76\,\text{V}$) -- zinc would only be deposited after all copper is removed, and in practice hydrogen gas would be produced instead (from water reduction) because $\text{H}_2\text{O}/\text{H}_2$ has a less negative effective potential than $\text{Zn}^{2+}/\text{Zn}$ under these conditions.

(b) $\text{Ag}^+ + e^- \to \text{Ag}$

$$n(\text{Ag}) = \frac{0.108}{107.9} = 1.001 \times 10^{-3}\,\text{mol}$$

$$n(e^-) = 1.001 \times 10^{-3}\,\text{mol}$$

$$Q = n(e^-) \times F = 1.001 \times 10^{-3} \times 96500 = 96.6\,\text{C}$$

$$t = \frac{Q}{I} = \frac{96.6}{0.200} = 483\,\text{s} = 8.05\,\text{min}$$

(c) At the anode, the possible oxidation reactions are:
- $\text{Ag} \to \text{Ag}^+ + e^-$ (not applicable -- silver deposits at cathode, not present at anode)
- $2\text{H}_2\text{O}(l) \to \text{O}_2(g) + 4\text{H}^+(aq) + 4e^-$
- $2\text{Cl}^- \to \text{Cl}_2(g) + 2e^-$ (if chloride present, which it is not specified here)

Since the anions present are sulfate (from the salts, typically) and the cations are being reduced at the cathode, the species oxidised at the anode is **water**, producing **oxygen gas**:

$$2\text{H}_2\text{O}(l) \to \text{O}_2(g) + 4\text{H}^+(aq) + 4e^-$$

The solution becomes increasingly acidic as electrolysis proceeds.

---
### IT-3: Fuel Cell Calculations (with Kinetics and Thermodynamics)

**Question:**

A hydrogen-oxygen fuel cell operates at $298\,\text{K}$ with the overall reaction:

$$2\text{H}_2(g) + \text{O}_2(g) \to 2\text{H}_2\text{O}(l)$$

Standard electrode potentials:
- $\text{O}_2(g) + 4\text{H}^+(aq) + 4e^- \rightleftharpoons 2\text{H}_2\text{O}(l)$: $E^\circ = +1.23\,\text{V}$
- $2\text{H}^+(aq) + 2e^- \rightleftharpoons \text{H}_2(g)$: $E^\circ = 0.00\,\text{V}$

$\Delta G^\circ$ for the reaction is $-474\,\text{kJ mol}^{-1}$ (per 2 mol $\text{H}_2$).

(a) Calculate the standard cell potential and verify it is consistent with $\Delta G^\circ$.

(b) The fuel cell produces a current of $10.0\,\text{A}$ for $1.00\,\text{hour}$. Calculate the mass of hydrogen consumed.

(c) State two advantages of fuel cells over internal combustion engines for vehicle power.

**Solution:**

(a)

$$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 1.23 - 0.00 = 1.23\,\text{V}$$

Verifying with $\Delta G^\circ$:

$$\Delta G^\circ = -nFE^\circ_{\text{cell}}$$

$$n = 4\,\text{electrons per mol O}_2\text{ (or per 2 mol H}_2\text{)}$$

$$E^\circ_{\text{cell}} = -\frac{\Delta G^\circ}{nF} = -\frac{-474000}{4 \times 96500} = \frac{474000}{386000} = 1.23\,\text{V}$$

The values are consistent.

(b) Charge passed: $Q = 10.0 \times 3600 = 36000\,\text{C}$

Each $\text{H}_2$ molecule releases 2 electrons: $\text{H}_2 \to 2\text{H}^+ + 2e^-$

$$n(\text{H}_2) = \frac{36000}{2 \times 96500} = 0.1865\,\text{mol}$$

$$m(\text{H}_2) = 0.1865 \times 2.02 = 0.377\,\text{g}$$

(c)
1. **Higher efficiency**: Fuel cells convert chemical energy directly to electrical energy with no intermediate thermal step, achieving efficiencies of 40--60% compared to 20--30% for internal combustion engines (which lose energy as heat).
2. **Zero direct emissions**: The only product is water ($\text{H}_2\text{O}$), producing no $\text{CO}_2$, $\text{NO}_x$, or particulate matter. (Note: the source of hydrogen matters for overall carbon footprint.)
