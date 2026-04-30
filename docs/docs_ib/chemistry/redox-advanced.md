---
title: Redox Reactions (Advanced)
description:
  IB Chemistry — electrochemical cells, standard electrode potentials, electrolysis, and
  quantitative electrochemistry.
slug: redox-advanced
---

## 1. Electrochemical Cells

### Galvanic (Voltaic) Cells

A **galvanic cell** converts chemical energy from spontaneous redox reactions into electrical
energy.

### Cell Components

| Component        | Function                                             |
| ---------------- | ---------------------------------------------------- |
| Anode            | Site of oxidation; negative electrode                |
| Cathode          | Site of reduction; positive electrode                |
| Salt bridge      | Maintains electrical neutrality by allowing ion flow |
| External circuit | Allows electron flow from anode to cathode           |
| Electrolyte      | Provides ions for internal conduction                |

### Half-Reactions and Cell Notation

The cell is written with the anode on the left and cathode on the right:

$$
\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(aq) \parallel \mathrm{Cu}^{2+}(aq) \mid \mathrm{Cu}(s)
$$

- Single vertical line ($\mid$): phase boundary
- Double vertical line ($\parallel$): salt bridge
- Anode (oxidation) is on the left; cathode (reduction) is on the right

### Standard Electrode Potentials ($E^\circ$)

Each half-reaction has a standard electrode potential measured relative to the **standard hydrogen
electrode** (SHE), assigned $E^\circ = 0.00\mathrm{ V}$.

$$
2\mathrm{H}^+(aq, 1\mathrm{ M}) + 2e^- \rightleftharpoons \mathrm{H}_2(g, 100\mathrm{ kPa}) \qquad E^\circ = 0.00\mathrm{ V}
$$

Standard conditions: $298\mathrm{ K}$, $1\mathrm{ M}$ solutions, $100\mathrm{ kPa}$ gas pressure.

### Standard Reduction Potentials (Selected)

| Half-reaction                                                                            | $E^\circ$ (V) |
| ---------------------------------------------------------------------------------------- | ------------- |
| $\mathrm{F}_2 + 2e^- \to 2\mathrm{F}^-$                                                  | $+2.87$       |
| $\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$ | $+1.51$       |
| $\mathrm{Cl}_2 + 2e^- \to 2\mathrm{Cl}^-$                                                | $+1.36$       |
| $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$                                                    | $+0.80$       |
| $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$                                                | $+0.34$       |
| $2\mathrm{H}^+ + 2e^- \to \mathrm{H}_2$                                                  | $0.00$        |
| $\mathrm{Fe}^{2+} + 2e^- \to \mathrm{Fe}$                                                | $-0.44$       |
| $\mathrm{Zn}^{2+} + 2e^- \to \mathrm{Zn}$                                                | $-0.76$       |
| $\mathrm{Na}^+ + e^- \to \mathrm{Na}$                                                    | $-2.71$       |

### Calculating Standard Cell Potential

$$
E_{\mathrm{cell}}^\circ = E_{\mathrm{cathode}}^\circ - E_{\mathrm{anode}}^\circ
$$

:::info[Example — Daniell Cell]

$$
\mathrm{Zn} \mid \mathrm{Zn}^{2+} \parallel \mathrm{Cu}^{2+} \mid \mathrm{Cu}
$$

Anode (oxidation): $\mathrm{Zn} \to \mathrm{Zn}^{2+} + 2e^- \qquad E^\circ = -0.76\mathrm{ V}$

Cathode (reduction): $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu} \qquad E^\circ = +0.34\mathrm{ V}$

$$
E_{\mathrm{cell}}^\circ = 0.34 - (-0.76) = +1.10\mathrm{ V}
$$

:::

### Predicting Spontaneity

| Condition                       | Result                                       |
| ------------------------------- | -------------------------------------------- |
| $E_{\mathrm{cell}}^\circ \gt 0$ | Spontaneous (galvanic cell)                  |
| $E_{\mathrm{cell}}^\circ = 0$   | At equilibrium                               |
| $E_{\mathrm{cell}}^\circ \lt 0$ | Non-spontaneous (electrolytic cell required) |

The more positive $E^\circ$ value, the stronger the oxidizing agent. The more negative $E^\circ$
value, the stronger the reducing agent.

### Common Pitfalls

- Always subtract $E_{\mathrm{anode}}^\circ$ from $E_{\mathrm{cathode}}^\circ$ — never reverse the
  sign of a reduction potential.
- $E^\circ$ values are intensive properties: they do not depend on the stoichiometric coefficients.
- The SHE is the reference, not necessarily the actual anode or cathode.

---

## 2. The Nernst Equation

For non-standard conditions, the cell potential is given by the Nernst equation:

$$
E_{\mathrm{cell}} = E_{\mathrm{cell}}^\circ - \frac{RT}{nF}\ln Q
$$

At $298\mathrm{ K}$, this simplifies to:

$$
E_{\mathrm{cell}} = E_{\mathrm{cell}}^\circ - \frac{0.0592}{n}\log Q
$$

where:

- $n$ = number of moles of electrons transferred
- $F = 96485\mathrm{ C/mol}$ (Faraday constant)
- $Q$ = reaction quotient (activities of products / activities of reactants)

### Relationship to Gibbs Free Energy

$$
\Delta G^\circ = -nFE_{\mathrm{cell}}^\circ
$$

$$
\Delta G = -nFE_{\mathrm{cell}}
$$

At equilibrium, $E_{\mathrm{cell}} = 0$ and $\Delta G = 0$, so:

$$
E_{\mathrm{cell}}^\circ = \frac{RT}{nF}\ln K = \frac{0.0592}{n}\log K
$$

:::info[Example]

For the Daniell cell: $E_{\mathrm{cell}}^\circ = 1.10\mathrm{ V}$, $n = 2$.

$$
\log K = \frac{nE^\circ}{0.0592} = \frac{2 \times 1.10}{0.0592} = 37.2
$$

$$
K = 10^{37.2} = 1.6 \times 10^{37}
$$

The extremely large $K$ confirms that the reaction proceeds essentially to completion.

:::

---

## 3. Electrolysis

### Principles

**Electrolysis** uses electrical energy to drive a non-spontaneous redox reaction. The electrolytic
cell has:

- Anode: positive electrode (oxidation)
- Cathode: negative electrode (reduction)
- External power source drives electrons from anode to cathode

### Faraday's Laws

**First law**: The amount of substance produced at an electrode is proportional to the charge
passed.

$$
m = \frac{Q \cdot M}{n \cdot F} = \frac{It \cdot M}{n \cdot F}
$$

where:

- $Q = It$ (charge = current $\times$ time)
- $M$ = molar mass ($\mathrm{g/mol}$)
- $n$ = number of moles of electrons per mole of product
- $F = 96485\mathrm{ C/mol}$

**Second law**: The masses of different substances produced by the same charge are proportional to
their equivalent masses ($M/n$).

:::info[Example]

Calculate the mass of copper deposited when a current of $2.00\mathrm{ A}$ is passed through
$\mathrm{CuSO}_4$ solution for $30.0$ minutes.

$$
Q = It = 2.00 \times 30.0 \times 60 = 3600\mathrm{ C}
$$

$$
m = \frac{3600 \times 63.55}{2 \times 96485} = \frac{228780}{192970} = 1.19\mathrm{ g}
$$

:::

### Electrolysis of Aqueous Solutions

When electrolysing aqueous solutions, water can also be oxidized or reduced:

$$
\mathrm{At cathode (reduction): } 2\mathrm{H}_2\mathrm{O} + 2e^- \to \mathrm{H}_2 + 2\mathrm{OH}^- \qquad E^\circ = -0.83\mathrm{ V}
$$

$$
\mathrm{At anode (oxidation): } 2\mathrm{H}_2\mathrm{O} \to \mathrm{O}_2 + 4\mathrm{H}^+ + 4e^- \qquad E^\circ = -1.23\mathrm{ V}
$$

### Discharge Rules (in Aqueous Solution)

**At the cathode**: the species with the **least negative** (most positive) $E^\circ$ is reduced.

| Cathode products | Condition                                                                    |
| ---------------- | ---------------------------------------------------------------------------- |
| Metal            | If the metal is less reactive than hydrogen ($E^\circ \gt -0.83\mathrm{ V}$) |
| Hydrogen         | If the metal is more reactive than hydrogen                                  |

**At the anode**: the species with the **least positive** (most negative) $E^\circ$ is oxidized.

| Anode products                  | Condition                             |
| ------------------------------- | ------------------------------------- |
| Halogen (Cl$_2$, Br$_2$, I$_2$) | If halide ions present (except F$^-$) |
| Oxygen                          | Otherwise (from water oxidation)      |

:::info[Example — Electrolysis of $\mathrm{CuSO}_4$(aq) with inert electrodes]

Cathode: $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$ ($E^\circ = +0.34\mathrm{ V}$, more positive than
water's $-0.83\mathrm{ V}$)

Anode: $2\mathrm{H}_2\mathrm{O} \to \mathrm{O}_2 + 4\mathrm{H}^+ + 4e^-$ (sulfate is not oxidised;
water is oxidised instead)

The solution becomes acidic as $\mathrm{H}^+$ accumulates at the anode.

:::

### Electrolysis of Molten Salts

No water present, so only the ions from the salt are discharged.

:::info[Example — Molten $\mathrm{NaCl}$]

Cathode: $\mathrm{Na}^+ + e^- \to \mathrm{Na}(l)$

Anode: $2\mathrm{Cl}^- \to \mathrm{Cl}_2(g) + 2e^-$

This is the Downs process for industrial sodium production.

:::

### Common Pitfalls

- In aqueous solutions, water may be preferentially discharged instead of the expected ion.
- Faraday's constant is $96485\mathrm{ C/mol}$, not $96500$ (though $96500$ is often used for
  estimation).
- The anode in an electrolytic cell is positive (opposite to a galvanic cell).

---

## 4. Applications of Electrochemistry

### Fuel Cells

A fuel cell converts chemical energy from a fuel (usually $\mathrm{H}_2$) directly into electricity.
The overall reaction:

$$
2\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}
$$

**Advantages over combustion engines:**

- Higher efficiency (no Carnot limit on electrochemical conversion).
- No $\mathrm{CO}_2$ emissions (only $\mathrm{H}_2\mathrm{O}$ as product).
- Quiet operation.

**Limitations:**

- Hydrogen storage and transport.
- Cost of platinum catalysts.
- Infrastructure for hydrogen refuelling.

### Corrosion

**Rusting of iron** is an electrochemical process:

Anode (oxidation): $\mathrm{Fe} \to \mathrm{Fe}^{2+} + 2e^-$

Cathode (reduction): $\mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^- \to 4\mathrm{OH}^-$

Overall: $4\mathrm{Fe} + 3\mathrm{O}_2 + 6\mathrm{H}_2\mathrm{O} \to 4\mathrm{Fe(OH)}_3$ (rust)

**Prevention methods:**

| Method                     | Principle                                    |
| -------------------------- | -------------------------------------------- |
| Sacrificial anode (Zn)     | Zn is more reactive, corrodes preferentially |
| Galvanization (Zn coating) | Same principle; Zn acts as sacrificial anode |
| Painting/oiling            | Barrier between Fe and O$_2$/H$_2$O          |
| Alloying (stainless steel) | Cr forms protective oxide layer              |

---

## Practice Problems

<details>
<summary>Problem 1</summary>

A cell is constructed from $\mathrm{Fe} \mid \mathrm{Fe}^{2+}$ and $\mathrm{Ag} \mid \mathrm{Ag}^+$.
Calculate $E_{\mathrm{cell}}^\circ$ and write the overall equation.

**Solution:**

$\mathrm{Fe}^{2+} + 2e^- \to \mathrm{Fe}$: $E^\circ = -0.44\mathrm{ V}$ (anode, oxidation)

$\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$: $E^\circ = +0.80\mathrm{ V}$ (cathode, reduction)

$$
E_{\mathrm{cell}}^\circ = 0.80 - (-0.44) = +1.24\mathrm{ V}
$$

Overall: $\mathrm{Fe}(s) + 2\mathrm{Ag}^+(aq) \to \mathrm{Fe}^{2+}(aq) + 2\mathrm{Ag}(s)$

</details>

<details>
<summary>Problem 2</summary>

What current is required to produce $5.00\mathrm{ g}$ of aluminium from molten
$\mathrm{Al}_2\mathrm{O}_3$ in $2.00$ hours?

**Solution:**

$$
\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}, \quad n = 3, \quad M = 27.0\mathrm{ g/mol}
$$

$$
n(\mathrm{Al}) = \frac{5.00}{27.0} = 0.185\mathrm{ mol}
$$

$$
Q = n(\mathrm{Al}) \times 3 \times F = 0.185 \times 3 \times 96485 = 53600\mathrm{ C}
$$

$$
I = \frac{Q}{t} = \frac{53600}{2.00 \times 3600} = \frac{53600}{7200} = 7.44\mathrm{ A}
$$

</details>

<details>
<summary>Problem 3</summary>

Use the Nernst equation to calculate the cell potential for
$\mathrm{Zn} \mid \mathrm{Zn}^{2+}(0.010\mathrm{ M}) \parallel \mathrm{Cu}^{2+}(1.0\mathrm{ M}) \mid \mathrm{Cu}$
at $298\mathrm{ K}$.

**Solution:**

$$
E_{\mathrm{cell}}^\circ = 0.34 - (-0.76) = 1.10\mathrm{ V}
$$

$$
Q = \frac{[\mathrm{Zn}^{2+}]}{[\mathrm{Cu}^{2+}]} = \frac{0.010}{1.0} = 0.010
$$

$$
E_{\mathrm{cell}} = 1.10 - \frac{0.0592}{2}\log(0.010) = 1.10 - \frac{0.0592}{2} \times (-2) = 1.10 + 0.059 = 1.16\mathrm{ V}
$$

The lower concentration of $\mathrm{Zn}^{2+}$ drives the reaction further (Le Chatelier), increasing
the cell potential.

</details>

<details>
<summary>Problem 4</summary>

Explain why a block of zinc attached to an iron ship hull prevents the iron from rusting.

**Solution:**

Zinc has a more negative standard reduction potential ($E^\circ = -0.76\mathrm{ V}$) than iron
($E^\circ = -0.44\mathrm{ V}$), making zinc a stronger reducing agent. When connected electrically,
zinc acts as the **anode** and is preferentially oxidised:

$$
\mathrm{Zn} \to \mathrm{Zn}^{2+} + 2e^-
$$

The electrons flow to the iron, which becomes the cathode where oxygen reduction occurs. Since the
iron is not oxidised, it does not corrode. The zinc is the "sacrificial anode" and is periodically
replaced.

</details>

---

## Worked Examples

**Worked Example: Determining the Anode and Cathode from Potentials**

Given the following half-reactions and their standard reduction potentials, construct the spontaneous galvanic cell. Write the cell notation, overall equation, and calculate $E_{\mathrm{cell}}^\circ$.

$$
\mathrm{Sn}^{2+} + 2e^- \to \mathrm{Sn} \qquad E^\circ = -0.14\mathrm{ V}
$$

$$
\mathrm{Pb}^{2+} + 2e^- \to \mathrm{Pb} \qquad E^\circ = -0.13\mathrm{ V}
$$

<details>
<summary>Solution</summary>

The more positive $E^\circ$ value corresponds to the stronger oxidizing agent (cathode). The more negative $E^\circ$ corresponds to the stronger reducing agent (anode).

- Anode (oxidation): $\mathrm{Sn} \to \mathrm{Sn}^{2+} + 2e^-$ ($E^\circ = -0.14\mathrm{ V}$)
- Cathode (reduction): $\mathrm{Pb}^{2+} + 2e^- \to \mathrm{Pb}$ ($E^\circ = -0.13\mathrm{ V}$)

Cell notation:

$$
\mathrm{Sn}(s) \mid \mathrm{Sn}^{2+}(aq) \parallel \mathrm{Pb}^{2+}(aq) \mid \mathrm{Pb}(s)
$$

Overall equation: $\mathrm{Sn}(s) + \mathrm{Pb}^{2+}(aq) \to \mathrm{Sn}^{2+}(aq) + \mathrm{Pb}(s)$

$$
E_{\mathrm{cell}}^\circ = E_{\mathrm{cathode}}^\circ - E_{\mathrm{anode}}^\circ = (-0.13) - (-0.14) = +0.01\mathrm{ V}
$$

The small positive value means the reaction is spontaneous but only marginally so. The equilibrium lies close to the centre.

</details>

**Worked Example: Electrolysis Product Prediction**

Predict the products at each electrode when aqueous $\mathrm{NaBr}$ is electrolysed using inert platinum electrodes. Write half-equations and the overall equation.

<details>
<summary>Solution</summary>

**Cathode (reduction):** The cations present are $\mathrm{Na}^+$ and $\mathrm{H}^+$ (from water). Since sodium is more reactive than hydrogen ($E^\circ(\mathrm{Na}^+/\mathrm{Na}) = -2.71\mathrm{ V}$, $E^\circ(\mathrm{H}^+/\mathrm{H}_2) = 0.00\mathrm{ V}$), hydrogen is discharged preferentially:

$$
2\mathrm{H}_2\mathrm{O}(l) + 2e^- \to \mathrm{H}_2(g) + 2\mathrm{OH}^-(aq)
$$

**Anode (oxidation):** The anions present are $\mathrm{Br}^-$ and $\mathrm{OH}^-$ (from water). Since bromide is a halide (other than fluoride), it is preferentially discharged over hydroxide:

$$
2\mathrm{Br}^-(aq) \to \mathrm{Br}_2(aq) + 2e^-
$$

**Overall equation** (combining and balancing):

$$
2\mathrm{H}_2\mathrm{O}(l) + 2\mathrm{NaBr}(aq) \to \mathrm{H}_2(g) + 2\mathrm{NaOH}(aq) + \mathrm{Br}_2(aq)
$$

Observation: colourless gas at the cathode ($\mathrm{H}_2$) and an orange-brown solution at the anode ($\mathrm{Br}_2$). The solution near the cathode becomes alkaline due to $\mathrm{OH}^-$ production.

</details>

**Worked Example: Faraday's Law — Time to Deposit a Metal**

How long must a current of $3.50\mathrm{ A}$ be passed through $\mathrm{AgNO}_3$ solution to deposit $0.500\mathrm{ g}$ of silver on the cathode?

<details>
<summary>Solution</summary>

Reduction half-reaction: $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$, so $n = 1$.

Molar mass of silver: $M = 107.87\mathrm{ g/mol}$.

$$
n(\mathrm{Ag}) = \frac{m}{M} = \frac{0.500}{107.87} = 0.00464\mathrm{ mol}
$$

$$
Q = n \times n_e \times F = 0.00464 \times 1 \times 96485 = 448\mathrm{ C}
$$

$$
t = \frac{Q}{I} = \frac{448}{3.50} = 128\mathrm{ s} \approx 2.13\mathrm{ minutes}
$$

</details>

**Worked Example: Equilibrium Constant from Cell Potential**

Calculate the equilibrium constant at $298\mathrm{ K}$ for the reaction:

$$
\mathrm{MnO}_4^-(aq) + 8\mathrm{H}^+(aq) + 5\mathrm{Fe}^{2+}(aq) \to \mathrm{Mn}^{2+}(aq) + 4\mathrm{H}_2\mathrm{O}(l) + 5\mathrm{Fe}^{3+}(aq)
$$

Given: $E^\circ(\mathrm{MnO}_4^-/\mathrm{Mn}^{2+}) = +1.51\mathrm{ V}$, $E^\circ(\mathrm{Fe}^{3+}/\mathrm{Fe}^{2+}) = +0.77\mathrm{ V}$.

<details>
<summary>Solution</summary>

Cathode (reduction): $\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$, $E^\circ = +1.51\mathrm{ V}$

Anode (oxidation): $\mathrm{Fe}^{2+} \to \mathrm{Fe}^{3+} + e^-$, $E^\circ = +0.77\mathrm{ V}$

$$
E_{\mathrm{cell}}^\circ = 1.51 - 0.77 = +0.74\mathrm{ V}
$$

Number of electrons transferred: $n = 5$.

$$
\log K = \frac{nE^\circ}{0.0592} = \frac{5 \times 0.74}{0.0592} = \frac{3.70}{0.0592} = 62.5
$$

$$
K = 10^{62.5}
$$

This astronomically large $K$ means the reaction proceeds essentially to completion under standard conditions.

</details>

**Worked Example: Non-Standard Conditions with the Nernst Equation**

A voltaic cell consists of a $\mathrm{Zn}$ electrode in $0.50\mathrm{ M}$ $\mathrm{ZnSO}_4$ and a $\mathrm{Cu}$ electrode in $0.10\mathrm{ M}$ $\mathrm{CuSO}_4$ at $298\mathrm{ K}$. Calculate the cell potential.

<details>
<summary>Solution</summary>

$$
E_{\mathrm{cell}}^\circ = E_{\mathrm{Cu}^{2+}/\mathrm{Cu}}^\circ - E_{\mathrm{Zn}^{2+}/\mathrm{Zn}}^\circ = 0.34 - (-0.76) = +1.10\mathrm{ V}
$$

Overall reaction: $\mathrm{Zn}(s) + \mathrm{Cu}^{2+}(aq) \to \mathrm{Zn}^{2+}(aq) + \mathrm{Cu}(s)$

$$
Q = \frac{[\mathrm{Zn}^{2+}]}{[\mathrm{Cu}^{2+}]} = \frac{0.50}{0.10} = 5.0
$$

$$
E_{\mathrm{cell}} = E_{\mathrm{cell}}^\circ - \frac{0.0592}{n}\log Q = 1.10 - \frac{0.0592}{2}\log(5.0)
$$

$$
\log(5.0) = 0.699
$$

$$
E_{\mathrm{cell}} = 1.10 - \frac{0.0592}{2} \times 0.699 = 1.10 - 0.0207 = 1.08\mathrm{ V}
$$

The cell potential is slightly lower than standard because the higher concentration of product ($\mathrm{Zn}^{2+}$) relative to reactant ($\mathrm{Cu}^{2+}$) pushes the reaction slightly back toward equilibrium.

</details>

---

## Common Pitfalls

- **Reversing $E^\circ$ values incorrectly:** When identifying the anode, the half-reaction is written as oxidation, but the $E^\circ$ value used in the $E_{\mathrm{cell}}^\circ$ calculation is always the reduction potential. Never flip the sign of a reduction potential — just subtract $E_{\mathrm{anode}}^\circ$ from $E_{\mathrm{cathode}}^\circ$.

- **Multiplying $E^\circ$ by stoichiometric coefficients:** $E^\circ$ is an intensive property. Doubling the half-reaction $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$ does not double $E^\circ$ to $+1.60\mathrm{ V}$; it remains $+0.80\mathrm{ V}$. Only $\Delta G^\circ$ scales with stoichiometry.

- **Confusing galvanic and electrolytic cell polarity:** In a galvanic cell the anode is negative; in an electrolytic cell the anode is positive. The mnemonic "anox red cat" (anode = oxidation, cathode = reduction) applies to both, but the polarity flips.

- **Using Faraday constant with wrong units:** $F = 96485\mathrm{ C/mol}$. If current is in milliamperes, convert to amperes first. If time is in minutes, convert to seconds. If mass is in milligrams, convert to grams.

- **Forgetting water as a competitor in aqueous electrolysis:** When electrolysing $\mathrm{NaCl}(aq)$, $\mathrm{H}_2$ is produced at the cathode (not $\mathrm{Na}$), because $\mathrm{Na}^+$ is too reactive. Similarly, when electrolysing $\mathrm{Na}_2\mathrm{SO}_4(aq)$, $\mathrm{O}_2$ is produced at the anode (not from sulfate oxidation).

- **Nernst equation sign errors:** The Nernst equation is $E = E^\circ - (0.0592/n)\log Q$. If you use $\ln$ instead of $\log$, the factor is $RT/nF = 0.0257/n$, not $0.0592/n$. Mixing these up yields a wrong answer.

---

## Exam-Style Problems

1. **[Medium]** Write the cell notation for a galvanic cell in which $\mathrm{Ni}(s)$ is oxidised to $\mathrm{Ni}^{2+}(aq)$ and $\mathrm{Ag}^+(aq)$ is reduced to $\mathrm{Ag}(s)$. Calculate $E_{\mathrm{cell}}^\circ$. ($E^\circ(\mathrm{Ni}^{2+}/\mathrm{Ni}) = -0.25\mathrm{ V}$, $E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\mathrm{ V}$)

2. **[Hard]** A current of $4.00\mathrm{ A}$ is passed through molten $\mathrm{Al}_2\mathrm{O}_3$ for $45.0$ minutes. Calculate: (a) the mass of aluminium produced, (b) the volume of oxygen gas produced at STP ($22.7\mathrm{ L/mol}$). ($M_r(\mathrm{Al}) = 27.0$)

3. **[Medium]** In an $\mathrm{H}_2/\mathrm{O}_2$ fuel cell, the standard cell potential is $+1.23\mathrm{ V}$. Calculate $\Delta G^\circ$ for the overall reaction $2\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}(l)$ and comment on the efficiency relative to combusting hydrogen ($\Delta H = -572\mathrm{ kJ/mol}$ for $\mathrm{H}_2$).

4. **[Hard]** A cell is constructed with standard hydrogen electrode and a half-cell containing $\mathrm{Fe}^{3+}$ and $\mathrm{Fe}^{2+}$ at equal concentrations. The measured cell potential is $+0.77\mathrm{ V}$. Write the spontaneous cell reaction and calculate the equilibrium constant.

5. **[Medium]** Explain why, during the electrolysis of concentrated $\mathrm{NaCl}(aq)$, the product at the anode is $\mathrm{Cl}_2$ rather than $\mathrm{O}_2$, even though the standard reduction potential for $\mathrm{O}_2/\mathrm{H}_2\mathrm{O}$ ($+1.23\mathrm{ V}$) is less positive than that of $\mathrm{Cl}_2/\mathrm{Cl}^-$ ($+1.36\mathrm{ V}$).

6. **[Hard]** Using the Nernst equation, calculate the potential of a half-cell consisting of a silver electrode in a solution where $[\mathrm{Ag}^+] = 0.0010\mathrm{ M}$ at $298\mathrm{ K}$. ($E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\mathrm{ V}$)

7. **[Medium]** A student sets up an electrolytic cell to copper-plate a spoon. The spoon is placed at the cathode. Describe the process, including the half-equations, and calculate the time required to deposit a $0.020\mathrm{ mm}$ thick layer of copper over a surface area of $50.0\mathrm{ cm}^2$ using a current of $0.500\mathrm{ A}$. (Density of copper $= 8.96\mathrm{ g/cm}^3$, $M_r(\mathrm{Cu}) = 63.55$)

8. **[Hard]** For the cell $\mathrm{Zn} \mid \mathrm{Zn}^{2+}(1.0\mathrm{ M}) \parallel \mathrm{Fe}^{2+}(0.010\mathrm{ M}) \mid \mathrm{Fe}$, determine: (a) $E_{\mathrm{cell}}^\circ$, (b) $E_{\mathrm{cell}}$ at the given concentrations, (c) $\Delta G$ for the reaction under these non-standard conditions. ($E^\circ(\mathrm{Zn}^{2+}/\mathrm{Zn}) = -0.76\mathrm{ V}$, $E^\circ(\mathrm{Fe}^{2+}/\mathrm{Fe}) = -0.44\mathrm{ V}$)

---

## If You Get These Wrong, Revise:

- **Oxidation numbers and balancing redox equations** → Review [./redox](./redox)
- **Equilibrium and the equilibrium constant** → Review [./equilibrium](./equilibrium)
- **Thermodynamics and Gibbs free energy** → Review [./thermodynamics](./thermodynamics)
- **Atomic structure and electron configurations** → Review [./atomic-theory](./atomic-theory)
- **Acids, bases, and pH** → Review [./acids-bases-advanced](./acids-bases-advanced)
