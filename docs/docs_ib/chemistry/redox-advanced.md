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
\mathrm&lbrace;Zn&rbrace;(s) \mid \mathrm&lbrace;Zn&rbrace;^&lbrace;2+&rbrace;(aq) \parallel \mathrm&lbrace;Cu&rbrace;^&lbrace;2+&rbrace;(aq) \mid \mathrm&lbrace;Cu&rbrace;(s)
$$

- Single vertical line ($\mid$): phase boundary
- Double vertical line ($\parallel$): salt bridge
- Anode (oxidation) is on the left; cathode (reduction) is on the right

### Standard Electrode Potentials ($E^\circ$)

Each half-reaction has a standard electrode potential measured relative to the **standard hydrogen
electrode** (SHE), assigned $E^\circ = 0.00\mathrm{ V}$.

$$
2\mathrm&lbrace;H&rbrace;^+(aq, 1\mathrm&lbrace; M&rbrace;) + 2e^- \rightleftharpoons \mathrm&lbrace;H&rbrace;_2(g, 100\mathrm&lbrace; kPa&rbrace;) \qquad E^\circ = 0.00\mathrm&lbrace; V&rbrace;
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
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ = E_&lbrace;\mathrm&lbrace;cathode&rbrace;&rbrace;^\circ - E_&lbrace;\mathrm&lbrace;anode&rbrace;&rbrace;^\circ
$$

:::info[Example — Daniell Cell]

$$
\mathrm&lbrace;Zn&rbrace; \mid \mathrm&lbrace;Zn&rbrace;^&lbrace;2+&rbrace; \parallel \mathrm&lbrace;Cu&rbrace;^&lbrace;2+&rbrace; \mid \mathrm&lbrace;Cu&rbrace;
$$

Anode (oxidation): $\mathrm{Zn} \to \mathrm{Zn}^{2+} + 2e^- \qquad E^\circ = -0.76\mathrm{ V}$

Cathode (reduction): $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu} \qquad E^\circ = +0.34\mathrm{ V}$

$$
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ = 0.34 - (-0.76) = +1.10\mathrm&lbrace; V&rbrace;
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
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace; = E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ - \frac&lbrace;RT&rbrace;&lbrace;nF&rbrace;\ln Q
$$

At $298\mathrm{ K}$, this simplifies to:

$$
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace; = E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ - \frac&lbrace;0.0592&rbrace;&lbrace;n&rbrace;\log Q
$$

where:

- $n$ = number of moles of electrons transferred
- $F = 96485\mathrm{ C/mol}$ (Faraday constant)
- $Q$ = reaction quotient (activities of products / activities of reactants)

### Relationship to Gibbs Free Energy

$$
\Delta G^\circ = -nFE_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ
$$

$$
\Delta G = -nFE_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;
$$

At equilibrium, $E_{\mathrm{cell}} = 0$ and $\Delta G = 0$, so:

$$
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ = \frac&lbrace;RT&rbrace;&lbrace;nF&rbrace;\ln K = \frac&lbrace;0.0592&rbrace;&lbrace;n&rbrace;\log K
$$

:::info[Example]

For the Daniell cell: $E_{\mathrm{cell}}^\circ = 1.10\mathrm{ V}$, $n = 2$.

$$
\log K = \frac&lbrace;nE^\circ&rbrace;&lbrace;0.0592&rbrace; = \frac&lbrace;2 \times 1.10&rbrace;&lbrace;0.0592&rbrace; = 37.2
$$

$$
K = 10^&lbrace;37.2&rbrace; = 1.6 \times 10^&lbrace;37&rbrace;
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
m = \frac&lbrace;Q \cdot M&rbrace;&lbrace;n \cdot F&rbrace; = \frac&lbrace;It \cdot M&rbrace;&lbrace;n \cdot F&rbrace;
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
Q = It = 2.00 \times 30.0 \times 60 = 3600\mathrm&lbrace; C&rbrace;
$$

$$
m = \frac&lbrace;3600 \times 63.55&rbrace;&lbrace;2 \times 96485&rbrace; = \frac&lbrace;228780&rbrace;&lbrace;192970&rbrace; = 1.19\mathrm&lbrace; g&rbrace;
$$

:::

### Electrolysis of Aqueous Solutions

When electrolysing aqueous solutions, water can also be oxidized or reduced:

$$
\mathrm&lbrace;At cathode (reduction): &rbrace; 2\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; + 2e^- \to \mathrm&lbrace;H&rbrace;_2 + 2\mathrm&lbrace;OH&rbrace;^- \qquad E^\circ = -0.83\mathrm&lbrace; V&rbrace;
$$

$$
\mathrm&lbrace;At anode (oxidation): &rbrace; 2\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; \to \mathrm&lbrace;O&rbrace;_2 + 4\mathrm&lbrace;H&rbrace;^+ + 4e^- \qquad E^\circ = -1.23\mathrm&lbrace; V&rbrace;
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
2\mathrm&lbrace;H&rbrace;_2 + \mathrm&lbrace;O&rbrace;_2 \to 2\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace;
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
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ = 0.80 - (-0.44) = +1.24\mathrm&lbrace; V&rbrace;
$$

Overall: $\mathrm{Fe}(s) + 2\mathrm{Ag}^+(aq) \to \mathrm{Fe}^{2+}(aq) + 2\mathrm{Ag}(s)$

</details>

<details>
<summary>Problem 2</summary>

What current is required to produce $5.00\mathrm{ g}$ of aluminium from molten
$\mathrm{Al}_2\mathrm{O}_3$ in $2.00$ hours?

**Solution:**

$$
\mathrm&lbrace;Al&rbrace;^&lbrace;3+&rbrace; + 3e^- \to \mathrm&lbrace;Al&rbrace;, \quad n = 3, \quad M = 27.0\mathrm&lbrace; g/mol&rbrace;
$$

$$
n(\mathrm&lbrace;Al&rbrace;) = \frac&lbrace;5.00&rbrace;&lbrace;27.0&rbrace; = 0.185\mathrm&lbrace; mol&rbrace;
$$

$$
Q = n(\mathrm&lbrace;Al&rbrace;) \times 3 \times F = 0.185 \times 3 \times 96485 = 53600\mathrm&lbrace; C&rbrace;
$$

$$
I = \frac&lbrace;Q&rbrace;&lbrace;t&rbrace; = \frac&lbrace;53600&rbrace;&lbrace;2.00 \times 3600&rbrace; = \frac&lbrace;53600&rbrace;&lbrace;7200&rbrace; = 7.44\mathrm&lbrace; A&rbrace;
$$

</details>

<details>
<summary>Problem 3</summary>

Use the Nernst equation to calculate the cell potential for
$\mathrm{Zn} \mid \mathrm{Zn}^{2+}(0.010\mathrm{ M}) \parallel \mathrm{Cu}^{2+}(1.0\mathrm{ M}) \mid \mathrm{Cu}$
at $298\mathrm{ K}$.

**Solution:**

$$
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace;^\circ = 0.34 - (-0.76) = 1.10\mathrm&lbrace; V&rbrace;
$$

$$
Q = \frac&lbrace;[\mathrm&lbrace;Zn&rbrace;^&lbrace;2+&rbrace;]&rbrace;&lbrace;[\mathrm&lbrace;Cu&rbrace;^&lbrace;2+&rbrace;]&rbrace; = \frac&lbrace;0.010&rbrace;&lbrace;1.0&rbrace; = 0.010
$$

$$
E_&lbrace;\mathrm&lbrace;cell&rbrace;&rbrace; = 1.10 - \frac&lbrace;0.0592&rbrace;&lbrace;2&rbrace;\log(0.010) = 1.10 - \frac&lbrace;0.0592&rbrace;&lbrace;2&rbrace; \times (-2) = 1.10 + 0.059 = 1.16\mathrm&lbrace; V&rbrace;
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
\mathrm&lbrace;Zn&rbrace; \to \mathrm&lbrace;Zn&rbrace;^&lbrace;2+&rbrace; + 2e^-
$$

The electrons flow to the iron, which becomes the cathode where oxygen reduction occurs. Since the
iron is not oxidised, it does not corrode. The zinc is the "sacrificial anode" and is periodically
replaced.

</details>
