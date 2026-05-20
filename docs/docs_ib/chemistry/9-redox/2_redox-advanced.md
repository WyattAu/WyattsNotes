title: Redox Reactions (Advanced) description: 'Rigorous IB chemistry notes covering Redox Reactions
(Advanced). Includes definitions, derivations, worked examples, and exam-style problems.' slug:
9-redox/2_redox-advanced

date: 2024-01-01T00:00:00Z tags:

- ib
- chemistry categories:
- ib
- ib-chemistry

## 1. Electrochemical Cells

### Galvanic (Voltaic) Cells

A **galvanic cell** converts chemical energy from spontaneous redox reactions into electrical
Energy.

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
Electrode** (SHE), assigned $E^\circ = 0.00\mathrm{ V}$.

$$
2\mathrm{H}^+(aq, 1\mathrm{ M}) + 2e^- \rightleftharpoons \mathrm{H}_2(g, 100\mathrm{ kPa}) \qquad E^\circ = 0.00\mathrm{ V}
$$

Standard conditions: $298\mathrm{ K}$$1\mathrm{ M}$ solutions, $100\mathrm{ kPa}$ gas pressure.

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
Value, the stronger the reducing agent.

### Common Pitfalls

- Always subtract $E_{\mathrm{anode}}^\circ$ from $E_{\mathrm{cathode}}^\circ$ — never reverse the
  sign of a reduction potential.
- $E^\circ$ values are intensive properties: they do not depend on the stoichiometric coefficients.
- The SHE is the reference, not necessarily the actual anode or cathode.

---

## 2. The Nernst Equation

For non-standard conditions, the cell potential is given by the Nernst equation:

$$
E_{\mathrm{cell}} = E_{\mathrm{cell}}^\circ - \frac`\{RT}``\{nF}`\ln Q
$$

At $298\mathrm{ K}$This simplifies to:

$$
E_{\mathrm{cell}} = E_{\mathrm{cell}}^\circ - \frac{0.0592}{n}\log Q
$$

Where:

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

At equilibrium, $E_{\mathrm{cell}} = 0$ and $\Delta G = 0$So:

$$
E_{\mathrm{cell}}^\circ = \frac`\{RT}``\{nF}`\ln K = \frac{0.0592}{n}\log K
$$

:::info[Example]

For the Daniell cell: $E_{\mathrm{cell}}^\circ = 1.10\mathrm{ V}$$n = 2$.

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
Cell has:

- Anode: positive electrode (oxidation)
- Cathode: negative electrode (reduction)
- External power source drives electrons from anode to cathode

### Faraday's Laws

**First law**: The amount of substance produced at an electrode is proportional to the charge
Passed.

$$
M = \frac{Q \cdot M}{n \cdot F} = \frac{It \cdot M}{n \cdot F}
$$

Where:

- $Q = It$ (charge = current $\times$ time)
- $M$ = molar mass ($\mathrm{g/mol}$)
- $n$ = number of moles of electrons per mole of product
- $F = 96485\mathrm{ C/mol}$

**Second law**: The masses of different substances produced by the same charge are proportional to
Their equivalent masses ($M/n$).

:::info[Example]

Calculate the mass of copper deposited when a current of $2.00\mathrm{ A}$ is passed through
$\mathrm{CuSO}_4$ solution for $30.0$ minutes.

$$
Q = It = 2.00 \times 30.0 \times 60 = 3600\mathrm{ C}
$$

$$
M = \frac{3600 \times 63.55}{2 \times 96485} = \frac{228780}{192970} = 1.19\mathrm{ g}
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

| Anode products              | Condition                             |
| --------------------------- | ------------------------------------- |
| Halogen (Cl$_2$Br$_2$I$_2$) | If halide ions present (except F$^-$) |
| Oxygen                      | Otherwise (from water oxidation)      |

:::info[Example — Electrolysis of $\mathrm{CuSO}_4$(aq) with inert electrodes]

Cathode: $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$ ($E^\circ = +0.34\mathrm{ V}$More positive than
Water's $-0.83\mathrm{ V}$)

Anode: $2\mathrm{H}_2\mathrm{O} \to \mathrm{O}_2 + 4\mathrm{H}^+ + 4e^-$ (sulfate is not oxidised;
Water is oxidised instead)

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
- Faraday's constant is $96485\mathrm{ C/mol}$Not $96500$ (though $96500$ is often used for
  estimation).
- The anode in an electrolytic cell is positive (opposite to a galvanic cell).

---

## 4. Applications of Electrochemistry

### Fuel Cells

A fuel cell converts chemical energy from a fuel ( $\mathrm{H}_2$) directly into electricity. The
overall reaction:

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
N(\mathrm{Al}) = \frac{5.00}{27.0} = 0.185\mathrm{ mol}
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
At $298\mathrm{ K}$.

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
The cell potential.

</details>

<details>
<summary>Problem 4</summary>

Explain why a block of zinc attached to an iron ship hull prevents the iron from rusting.

**Solution:**

Zinc has a more negative standard reduction potential ($E^\circ = -0.76\mathrm{ V}$) than iron
($E^\circ = -0.44\mathrm{ V}$), making zinc a stronger reducing agent. When connected electrically,
Zinc acts as the **anode** and is preferentially oxidised:

$$
\mathrm{Zn} \to \mathrm{Zn}^{2+} + 2e^-
$$

The electrons flow to the iron, which becomes the cathode where oxygen reduction occurs. Since the
Iron is not oxidised, it does not corrode. The zinc is the "sacrificial anode" and is periodically
Replaced.

</details>

---

## Worked Examples

**Worked Example: Determining the Anode and Cathode from Potentials**

Given the following half-reactions and their standard reduction potentials, construct the
spontaneous galvanic cell. Write the cell notation, overall equation, and calculate
$E_{\mathrm{cell}}^\circ$.

$$
\mathrm{Sn}^{2+} + 2e^- \to \mathrm{Sn} \qquad E^\circ = -0.14\mathrm{ V}
$$

$$
\mathrm{Pb}^{2+} + 2e^- \to \mathrm{Pb} \qquad E^\circ = -0.13\mathrm{ V}
$$

<details>
<summary>Solution</summary>

The more positive $E^\circ$ value corresponds to the stronger oxidizing agent (cathode). The more
negative $E^\circ$ corresponds to the stronger reducing agent (anode).

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

The small positive value means the reaction is spontaneous but only marginally so. The equilibrium
lies close to the centre.

</details>

**Worked Example: Electrolysis Product Prediction**

Predict the products at each electrode when aqueous $\mathrm{NaBr}$ is electrolysed using inert
platinum electrodes. Write half-equations and the overall equation.

<details>
<summary>Solution</summary>

**Cathode (reduction):** The cations present are $\mathrm{Na}^+$ and $\mathrm{H}^+$ (from water).
Since sodium is more reactive than hydrogen
($E^\circ(\mathrm{Na}^+/\mathrm{Na}) = -2.71\mathrm{ V}$$E^\circ(\mathrm{H}^+/\mathrm{H}_2) = 0.00\mathrm{ V}$),
hydrogen is discharged preferentially:

$$
2\mathrm{H}_2\mathrm{O}(l) + 2e^- \to \mathrm{H}_2(g) + 2\mathrm{OH}^-(aq)
$$

**Anode (oxidation):** The anions present are $\mathrm{Br}^-$ and $\mathrm{OH}^-$ (from water).
Since bromide is a halide (other than fluoride), it is preferentially discharged over hydroxide:

$$
2\mathrm{Br}^-(aq) \to \mathrm{Br}_2(aq) + 2e^-
$$

**Overall equation** (combining and balancing):

$$
2\mathrm{H}_2\mathrm{O}(l) + 2\mathrm{NaBr}(aq) \to \mathrm{H}_2(g) + 2\mathrm{NaOH}(aq) + \mathrm{Br}_2(aq)
$$

Observation: colourless gas at the cathode ($\mathrm{H}_2$) and an orange-brown solution at the
anode ($\mathrm{Br}_2$). The solution near the cathode becomes alkaline due to $\mathrm{OH}^-$
production.

</details>

**Worked Example: Faraday's Law — Time to Deposit a Metal**

How long must a current of $3.50\mathrm{ A}$ be passed through $\mathrm{AgNO}_3$ solution to deposit
$0.500\mathrm{ g}$ of silver on the cathode?

<details>
<summary>Solution</summary>

Reduction half-reaction: $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$So $n = 1$.

Molar mass of silver: $M = 107.87\mathrm{ g/mol}$.

$$
N(\mathrm{Ag}) = \frac{m}{M} = \frac{0.500}{107.87} = 0.00464\mathrm{ mol}
$$

$$
Q = n \times n_e \times F = 0.00464 \times 1 \times 96485 = 448\mathrm{ C}
$$

$$
T = \frac{Q}{I} = \frac{448}{3.50} = 128\mathrm{ s} \approx 2.13\mathrm{ minutes}
$$

</details>

**Worked Example: Equilibrium Constant from Cell Potential**

Calculate the equilibrium constant at $298\mathrm{ K}$ for the reaction:

$$
\mathrm{MnO}_4^-(aq) + 8\mathrm{H}^+(aq) + 5\mathrm{Fe}^{2+}(aq) \to \mathrm{Mn}^{2+}(aq) + 4\mathrm{H}_2\mathrm{O}(l) + 5\mathrm{Fe}^{3+}(aq)
$$

Given:
$E^\circ(\mathrm{MnO}_4^-/\mathrm{Mn}^{2+}) = +1.51\mathrm{ V}$$E^\circ(\mathrm{Fe}^{3+}/\mathrm{Fe}^{2+}) = +0.77\mathrm{ V}$.

<details>
<summary>Solution</summary>

Cathode (reduction):
$\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$$E^\circ = +1.51\mathrm{ V}$

Anode (oxidation): $\mathrm{Fe}^{2+} \to \mathrm{Fe}^{3+} + e^-$$E^\circ = +0.77\mathrm{ V}$

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

This astronomically large $K$ means the reaction proceeds essentially to completion under standard
conditions.

</details>

**Worked Example: Non-Standard Conditions with the Nernst Equation**

A voltaic cell consists of a $\mathrm{Zn}$ electrode in $0.50\mathrm{ M}$ $\mathrm{ZnSO}_4$ and a
$\mathrm{Cu}$ electrode in $0.10\mathrm{ M}$ $\mathrm{CuSO}_4$ at $298\mathrm{ K}$. Calculate the
cell potential.

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

The cell potential is slightly lower than standard because the higher concentration of product
($\mathrm{Zn}^{2+}$) relative to reactant ($\mathrm{Cu}^{2+}$) pushes the reaction slightly back
toward equilibrium.

</details>

---

## Common Pitfalls

- **Reversing $E^\circ$ values incorrectly:** When identifying the anode, the half-reaction is
  written as oxidation, but the $E^\circ$ value used in the $E_{\mathrm{cell}}^\circ$ calculation is
  always the reduction potential. Never flip the sign of a reduction potential — just subtract
  $E_{\mathrm{anode}}^\circ$ from $E_{\mathrm{cathode}}^\circ$.

- **Multiplying $E^\circ$ by stoichiometric coefficients:** $E^\circ$ is an intensive property.
  Doubling the half-reaction $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$ does not double $E^\circ$ to
  $+1.60\mathrm{ V}$; it remains $+0.80\mathrm{ V}$. Only $\Delta G^\circ$ scales with
  stoichiometry.

- **Confusing galvanic and electrolytic cell polarity:** In a galvanic cell the anode is negative;
  in an electrolytic cell the anode is positive. The mnemonic "anox red cat" (anode = oxidation,
  cathode = reduction) applies to both, but the polarity flips.

- **Using Faraday constant with wrong units:** $F = 96485\mathrm{ C/mol}$. If current is in
  milliamperes, convert to amperes first. If time is in minutes, convert to seconds. If mass is in
  milligrams, convert to grams.

- **Forgetting water as a competitor in aqueous electrolysis:** When electrolysing
  $\mathrm{NaCl}(aq)$$\mathrm{H}_2$ is produced at the cathode (not $\mathrm{Na}$), because
  $\mathrm{Na}^+$ is too reactive. Similarly, when electrolysing
  $\mathrm{Na}_2\mathrm{SO}_4(aq)$$\mathrm{O}_2$ is produced at the anode (not from sulfate
  oxidation).

- **Nernst equation sign errors:** The Nernst equation is $E = E^\circ - (0.0592/n)\log Q$. If you
  use $\ln$ instead of $\log$The factor is $RT/nF = 0.0257/n$Not $0.0592/n$. Mixing these up yields
  a wrong answer.

---

## Exam-Style Problems

1. **[Medium]** Write the cell notation for a galvanic cell in which $\mathrm{Ni}(s)$ is oxidised to
   $\mathrm{Ni}^{2+}(aq)$ and $\mathrm{Ag}^+(aq)$ is reduced to $\mathrm{Ag}(s)$. Calculate
   $E_{\mathrm{cell}}^\circ$.
   ($E^\circ(\mathrm{Ni}^{2+}/\mathrm{Ni}) = -0.25\mathrm{ V}$$E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\mathrm{ V}$)

2. **[Hard]** A current of $4.00\mathrm{ A}$ is passed through molten $\mathrm{Al}_2\mathrm{O}_3$
   for $45.0$ minutes. Calculate: (a) the mass of aluminium produced, (b) the volume of oxygen gas
   produced at STP ($22.7\mathrm{ L/mol}$). ($M_r(\mathrm{Al}) = 27.0$)

3. **[Medium]** In an $\mathrm{H}_2/\mathrm{O}_2$ fuel cell, the standard cell potential is
   $+1.23\mathrm{ V}$. Calculate $\Delta G^\circ$ for the overall reaction
   $2\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}(l)$ and comment on the efficiency
   relative to combusting hydrogen ($\Delta H = -572\mathrm{ kJ/mol}$ for $\mathrm{H}_2$).

4. **[Hard]** A cell is constructed with standard hydrogen electrode and a half-cell containing
   $\mathrm{Fe}^{3+}$ and $\mathrm{Fe}^{2+}$ at equal concentrations. The measured cell potential is
   $+0.77\mathrm{ V}$. Write the spontaneous cell reaction and calculate the equilibrium constant.

5. **[Medium]** Explain why, during the electrolysis of concentrated $\mathrm{NaCl}(aq)$The product
   at the anode is $\mathrm{Cl}_2$ rather than $\mathrm{O}_2$Even though the standard reduction
   potential for $\mathrm{O}_2/\mathrm{H}_2\mathrm{O}$ ($+1.23\mathrm{ V}$) is less positive than
   that of $\mathrm{Cl}_2/\mathrm{Cl}^-$ ($+1.36\mathrm{ V}$).

6. **[Hard]** Using the Nernst equation, calculate the potential of a half-cell consisting of a
   silver electrode in a solution where $[\mathrm{Ag}^+] = 0.0010\mathrm{ M}$ at $298\mathrm{ K}$.
   ($E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\mathrm{ V}$)

7. **[Medium]** A student sets up an electrolytic cell to copper-plate a spoon. The spoon is placed
   at the cathode. Describe the process, including the half-equations, and calculate the time
   required to deposit a $0.020\mathrm{ mm}$ thick layer of copper over a surface area of
   $50.0\mathrm{ cm}^2$ using a current of $0.500\mathrm{ A}$. (Density of copper
   $= 8.96\mathrm{ g/cm}^3$$M_r(\mathrm{Cu}) = 63.55$)

8. **[Hard]** For the cell
   $\mathrm{Zn} \mid \mathrm{Zn}^{2+}(1.0\mathrm{ M}) \parallel \mathrm{Fe}^{2+}(0.010\mathrm{ M}) \mid \mathrm{Fe}$Determine:
   (a) $E_{\mathrm{cell}}^\circ$(b) $E_{\mathrm{cell}}$ at the given concentrations, (c) $\Delta G$
   for the reaction under these non-standard conditions.
   ($E^\circ(\mathrm{Zn}^{2+}/\mathrm{Zn}) = -0.76\mathrm{ V}$$E^\circ(\mathrm{Fe}^{2+}/\mathrm{Fe}) = -0.44\mathrm{ V}$)

---

## Worked Examples (Expanded)

**Worked Example: Concentration Cell**

A concentration cell is constructed from two $\mathrm{Ag}$ electrodes. One half-cell contains
$\mathrm{AgNO}_3$ at $0.100\;\mathrm{M}$ and the other contains $\mathrm{AgNO}_3$ at
$0.0010\;\mathrm{M}$. Calculate the cell potential at $298\;\mathrm{K}$.

<details>
<summary>Solution</summary>

A concentration cell has identical half-reactions but different ion concentrations. The half-cell
with the lower concentration acts as the anode (oxidation) because the equilibrium
$\mathrm{Ag}^+ + e^- \rightleftharpoons \mathrm{Ag}$ shifts left more readily when $[\mathrm{Ag}^+]$
is low.

Anode (oxidation): $\mathrm{Ag}(s) \to \mathrm{Ag}^+(aq, 0.0010\;\mathrm{M}) + e^-$

Cathode (reduction): $\mathrm{Ag}^+(aq, 0.100\;\mathrm{M}) + e^- \to \mathrm{Ag}(s)$

Since $E_{\mathrm{cell}}^\circ = 0$ (same half-reaction), the Nernst equation gives:

$$E_{\mathrm{cell}} = 0 - \frac{0.0592}{1}\log\!\left(\frac{[\mathrm{Ag}^+]_{\mathrm{anode}}}{[\mathrm{Ag}^+]_{\mathrm{cathode}}}\right)$$

$$E_{\mathrm{cell}} = -0.0592\log\!\left(\frac{0.0010}{0.100}\right) = -0.0592\log(0.010) = -0.0592 \times (-2) = +0.118\;\mathrm{V}$$

The cell potential is $+0.118\;\mathrm{V}$. The reaction spontaneously proceeds to equalise the
concentrations, and the cell potential decreases to zero as the concentrations converge.

</details>

**Worked Example: Electrolytic Cell -- Current Efficiency and Side Reactions**

A current of $5.00\;\mathrm{A}$ is passed through $\mathrm{NaCl}(aq)$ for $2.00$ hours. The expected
product at the anode is $\mathrm{Cl}_2$ (from $2\mathrm{Cl}^- \to \mathrm{Cl}_2 + 2e^-$), but some
$\mathrm{O}_2$ is also produced (from
$4\mathrm{OH}^- \to \mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^-$). If $8.90\;\mathrm{g}$ of
$\mathrm{Cl}_2$ is collected (instead of the theoretical $13.1\;\mathrm{g}$), calculate the current
efficiency for $\mathrm{Cl}_2$ production and the mass of $\mathrm{O}_2$ produced as a side product.

<details>
<summary>Solution</summary>

**Theoretical mass of $\mathrm{Cl}_2$:**

$$Q = It = 5.00 \times 7200 = 36000\;\mathrm{C}$$

$$n(e^-) = \frac{Q}{F} = \frac{36000}{96485} = 0.373\;\mathrm{mol\;e^-}$$

For $\mathrm{Cl}_2$: $2\;\mathrm{mol\;e^-}$ per mol $\mathrm{Cl}_2$:

$$n(\mathrm{Cl}_2)_{\mathrm{theoretical}} = \frac{0.373}{2} = 0.187\;\mathrm{mol}$$

$$m(\mathrm{Cl}_2)_{\mathrm{theoretical}} = 0.187 \times 71.0 = 13.2\;\mathrm{g}$$

**Current efficiency:**

$$\mathrm{Efficiency} = \frac{8.90}{13.2} \times 100 = 67.4\%$$

**Electrons used for $\mathrm{Cl}_2$:**

$$n(e^-)_{\mathrm{Cl}_2} = 2 \times \frac{8.90}{71.0} = 0.251\;\mathrm{mol\;e^-}$$

**Remaining electrons used for $\mathrm{O}_2$:**

$$n(e^-)_{\mathrm{O}_2} = 0.373 - 0.251 = 0.122\;\mathrm{mol\;e^-}$$

For $\mathrm{O}_2$: $4\;\mathrm{mol\;e^-}$ per mol $\mathrm{O}_2$:

$$n(\mathrm{O}_2) = \frac{0.122}{4} = 0.0305\;\mathrm{mol}$$

$$m(\mathrm{O}_2) = 0.0305 \times 32.0 = 0.976\;\mathrm{g}$$

</details>

**Worked Example: Gibbs Free Energy, Cell Potential, and Equilibrium**

For the reaction
$\mathrm{Cu}(s) + 2\mathrm{Ag}^+(aq) \rightleftharpoons \mathrm{Cu}^{2+}(aq) + 2\mathrm{Ag}(s)$: (a)
Calculate $E_{\mathrm{cell}}^\circ$$\Delta G^\circ$And $K$ at $298\;\mathrm{K}$. (b) Calculate
$\Delta G$ when $[\mathrm{Ag}^+] = 0.010\;\mathrm{M}$ and $[\mathrm{Cu}^{2+}] = 0.10\;\mathrm{M}$.
($E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\;\mathrm{V}$$E^\circ(\mathrm{Cu}^{2+}/\mathrm{Cu}) = +0.34\;\mathrm{V}$)

<details>
<summary>Solution</summary>

**(a) Standard conditions:**

$$E_{\mathrm{cell}}^\circ = E_{\mathrm{cathode}}^\circ - E_{\mathrm{anode}}^\circ = 0.80 - 0.34 = +0.46\;\mathrm{V}$$

$$\Delta G^\circ = -nFE_{\mathrm{cell}}^\circ = -2 \times 96485 \times 0.46 = -88\,766\;\mathrm{J/mol} = -88.8\;\mathrm{kJ/mol}$$

$$\log K = \frac{nE^\circ}{0.0592} = \frac{2 \times 0.46}{0.0592} = 15.5$$

$$K = 10^{15.5} = 3.2 \times 10^{15}$$

**(b) Non-standard conditions:**

$$Q = \frac{[\mathrm{Cu}^{2+}]}{[\mathrm{Ag}^+]^2} = \frac{0.10}{(0.010)^2} = \frac{0.10}{0.00010} = 1000$$

$$E_{\mathrm{cell}} = E_{\mathrm{cell}}^\circ - \frac{0.0592}{n}\log Q = 0.46 - \frac{0.0592}{2}\log(1000) = 0.46 - \frac{0.0592}{2} \times 3 = 0.46 - 0.0888 = 0.371\;\mathrm{V}$$

$$\Delta G = -nFE_{\mathrm{cell}} = -2 \times 96485 \times 0.371 = -71\,600\;\mathrm{J/mol} = -71.6\;\mathrm{kJ/mol}$$

The reaction is still spontaneous ($\Delta G < 0$$E_{\mathrm{cell}} > 0$) but less strongly so
because the high product-to-reactant ratio pushes the reaction back toward equilibrium.

</details>

---

## Exam-Style Problems (Expanded)

<details>
<summary>Problem 9: Quantitative -- Lead-Acid Battery Discharge</summary>

A $12\;\mathrm{V}$ car battery contains six lead-acid cells in series. The overall cell reaction is:
$$\mathrm{Pb}(s) + \mathrm{PbO}_2(s) + 2\mathrm{H}_2\mathrm{SO}_4(aq) \to 2\mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l)$$

(a) Calculate $E_{\mathrm{cell}}^\circ$ per cell given that $K = 1.0 \times 10^{81}$ at
$298\;\mathrm{K}$. (b) If the battery can deliver $4.0\;\mathrm{A}$ for $60\;\mathrm{minutes}$
before needing recharge, calculate the total charge transferred and the mass of $\mathrm{Pb}$
consumed at the anode. ($M_r(\mathrm{Pb}) = 207.2$)

</details>

<details>
<summary>Problem 10: Extended Response -- Overpotential and Industrial Electrolysis</summary>

In the industrial chlor-alkali process (membrane cell), the theoretical voltage required to
electrolyse concentrated $\mathrm{NaCl}(aq)$ is approximately $2.2\;\mathrm{V}$But in practice the
cell operates at $3.5$--$4.0\;\mathrm{V}$. (a) Define overpotential and explain its origin at the
electrode surfaces. (b) Identify two additional sources of voltage loss in an industrial cell
(besides overpotential). (c) Calculate the energy cost per kg of $\mathrm{Cl}_2$ produced if the
cell operates at $3.8\;\mathrm{V}$ and $85\%$ current efficiency.
($1\;\mathrm{kWh} = 3.6\;\mathrm{MJ}$)

</details>

<details>
<summary>Problem 11: Quantitative -- $E^\circ$ from $\Delta G_f^\circ$ Values</summary>

Given the following standard Gibbs free energies of formation:
$\Delta G_f^\circ(\mathrm{Zn}^{2+}, aq) = -147\;\mathrm{kJ/mol}$
$\Delta G_f^\circ(\mathrm{Cu}^{2+}, aq) = +65\;\mathrm{kJ/mol}$
$\Delta G_f^\circ(\mathrm{Zn}, s) = 0\;\mathrm{kJ/mol}$
$\Delta G_f^\circ(\mathrm{Cu}, s) = 0\;\mathrm{kJ/mol}$

(a) Calculate $\Delta G^\circ$ for the reaction
$\mathrm{Zn}(s) + \mathrm{Cu}^{2+}(aq) \to \mathrm{Zn}^{2+}(aq) + \mathrm{Cu}(s)$. (b) Calculate
$E_{\mathrm{cell}}^\circ$ for the Daniell cell. (c) Compare your result with the standard reduction
potential values
($E^\circ(\mathrm{Zn}^{2+}/\mathrm{Zn}) = -0.76\;\mathrm{V}$$E^\circ(\mathrm{Cu}^{2+}/\mathrm{Cu}) = +0.34\;\mathrm{V}$).

</details>

<details>
<summary>Problem 12: Extended Response -- Corrosion Mechanism and Prevention Economics</summary>

A steel pipeline ($\mathrm{Fe}$) buried in soil is protected using a sacrificial anode of magnesium.
(a) Write the half-equations for the corrosion of iron and the protection reaction of magnesium. (b)
Calculate the minimum mass of magnesium required to protect $1.00\;\mathrm{tonne}$
($1000\;\mathrm{kg}$) of iron from complete corrosion.
($M_r(\mathrm{Mg}) = 24.3$$M_r(\mathrm{Fe}) = 55.8$) (c) Explain why the pipeline must be
electrically connected to the magnesium block. (d) Discuss why impressed-current cathodic protection
(using an external DC power supply and an inert anode) may be preferred for large structures.

</details>

<details>
<summary>Problem 13: Quantitative -- pH Change During Electrolysis</summary>

During the electrolysis of $\mathrm{CuSO}_4(aq)$ with inert electrodes, $\mathrm{O}_2$ is produced
at the anode and $\mathrm{Cu}$ is deposited at the cathode. The overall reaction is:
$$2\mathrm{Cu}^{2+}(aq) + 2\mathrm{H}_2\mathrm{O}(l) \to 2\mathrm{Cu}(s) + 4\mathrm{H}^+(aq) + \mathrm{O}_2(g)$$

A current of $2.50\;\mathrm{A}$ is passed through $500\;\mathrm{mL}$ of $0.200\;\mathrm{M}$
$\mathrm{CuSO}_4$ solution for $30.0\;\mathrm{minutes}$. (a) Calculate the concentration of
$\mathrm{H}^+$ produced. (b) Calculate the pH of the solution after electrolysis. (c) Calculate the
volume of $\mathrm{O}_2$ gas produced at STP ($22.7\;\mathrm{L/mol}$).

</details>

<details>
<summary>Problem 14: Extended Response -- Fuel Cell Efficiency</summary>

An $\mathrm{H}_2/\mathrm{O}_2$ fuel cell operates at $80\degree\mathrm{C}$ with
$E_{\mathrm{cell}} = 1.15\;\mathrm{V}$ and a current density of $0.5\;\mathrm{A/cm}^2$. (a)
Calculate $\Delta G$ for the cell reaction at $80\degree\mathrm{C}$ ($353\;\mathrm{K}$). (b) The
enthalpy change for $\mathrm{H}_2$ combustion is $\Delta H = -286\;\mathrm{kJ/mol}$. Calculate the
thermodynamic efficiency of the fuel cell ($\Delta G / \Delta H$). (c) Explain why the actual
operating voltage ($1.15\;\mathrm{V}$) is less than the theoretical
$E_{\mathrm{cell}}^\circ = 1.23\;\mathrm{V}$And calculate the voltage efficiency.

</details>

---

## Common Pitfalls (Expanded)

- **Forgetting to convert between volts and joules in $\Delta G$ calculations**: $\Delta G = -nFE$
  requires $F$ in $\mathrm{C/mol}$ and $E$ in $\mathrm{V}$. Since
  $1\;\mathrm{V} = 1\;\mathrm{J/C}$The product $nFE$ is automatically in joules. However, if you
  need the answer in $\mathrm{kJ/mol}$You must divide by $1000$.

- **Confusing $Q$ (reaction quotient) with $K$ (equilibrium constant)**: $Q$ uses the current
  (non-equilibrium) concentrations, while $K$ uses equilibrium concentrations. In the Nernst
  equation, $Q$ is used. At equilibrium, $Q = K$ and $E_{\mathrm{cell}} = 0$.

- **Applying Faraday's law without accounting for current efficiency**: In real electrolysis, not
  all current goes to the desired product. Side reactions (e.g., $\mathrm{O}_2$ instead of
  $\mathrm{Cl}_2$ evolution) consume some charge. Always check whether the problem specifies a
  current efficiency before assuming $100\%$.

- **Using the standard hydrogen electrode incorrectly in cell diagrams**: The SHE is always written
  on the side (anode or cathode) that makes $E_{\mathrm{cell}}^\circ$ positive. If the unknown
  half-cell has $E^\circ > 0$The SHE is the anode. If $E^\circ < 0$The SHE is the cathode.

- **Neglecting the stoichiometry of electrons when using $\Delta G = -nFE$**: The $n$ must be the
  total number of electrons transferred in the balanced equation, not per mole of a specific
  reactant. For $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$$n = 2$. For
  $2\mathrm{Fe}^{3+} + 2e^- \to 2\mathrm{Fe}^{2+}$$n$ is still $2$ (not $2 \times 2 = 4$).

- **Assuming standard conditions apply to real batteries**: A car battery at $12\;\mathrm{V}$ (open
  circuit) delivers less than $12\;\mathrm{V}$ under load due to internal resistance. The terminal
  voltage is $V = E_{\mathrm{cell}} - Ir_{\mathrm{internal}}$Where $I$ is the current drawn.

---

## If You Get These Wrong, Revise:

- **Oxidation numbers and balancing redox equations** → Review
  [..../9-redox/1_redox-reactions](../9-redox/1_redox-reactions)
- **Equilibrium and the equilibrium constant** → Review
  [..../7-equilibrium/1_equilibrium](../7-equilibrium/1_equilibrium)
- **Thermodynamics and Gibbs free energy** → Review
  [..../5-energetics/1_thermochemistry](../5-energetics/1_thermochemistry)
- **Atomic structure and electron configurations** → Review
  [..../2-atomic-structure/1_atomic-theory](../2-atomic-structure/1_atomic-theory)
- **Acids, bases, and pH** → Review
  [..../8-acids-and-bases/2_acids-and-bases-advanced](../8-acids-and-bases/2_acids-and-bases-advanced)

## Summary

This topic covers the essential chemistry of redox reactions (advanced), including key reactions,
underlying theories, and practical applications.

**Key concepts include:**

- standard electrode potentials
- electrochemical cells
- electrolysis and Faraday's laws
- corrosion and prevention
- fuel cells

Mastery of these concepts requires both theoretical understanding and the ability to apply knowledge
to unfamiliar contexts, particularly in calculation and practical questions.
