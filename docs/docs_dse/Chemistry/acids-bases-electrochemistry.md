---
id: dse-chemistry-acids-bases-electrochemistry
title: Chemistry - Acids, Bases, and Electrochemistry
description:
  DSE Chemistry notes covering acid-base theories, pH calculations, salt preparation, redox
  reactions, electrolysis, and electrochemical cells.
slug: chemistry-acids-bases-electrochemistry
---

## Acids and Bases

### Definitions

**Arrhenius Theory:**

- Acid: produces $\mathrm{H}^+$ (or $\mathrm{H}_3\mathrm{O}^+$) in aqueous solution
- Base: produces $\mathrm{OH}^-$ in aqueous solution

**Bronsted-Lowry Theory:**

- Acid: proton ($\mathrm{H}^+$) donor
- Base: proton ($\mathrm{H}^+$) acceptor

**Lewis Theory:**

- Acid: electron pair acceptor
- Base: electron pair donor

:::info In the DSE syllabus, the Bronsted-Lowry definition is most commonly used. Always identify
the proton donor and proton acceptor in acid-base reactions.
:::

### Conjugate Acid-Base Pairs

When an acid donates a proton, the remaining species is its conjugate base. When a base accepts a
proton, the resulting species is its conjugate acid.

$$\mathrm{HA} + \mathrm{B} \rightleftharpoons \mathrm{A}^- + \mathrm{BH}^+$$

- $\mathrm{HA}$ and $\mathrm{A}^-$ form a conjugate acid-base pair
- $\mathrm{B}$ and $\mathrm{BH}^+$ form a conjugate acid-base pair

### Strong and Weak Acids

| Property                   | Strong Acids                                                  | Weak Acids                                                               |
| -------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Degree of ionisation       | Nearly 100%                                                   | Partial                                                                  |
| Examples                   | $\mathrm{HCl}$, $\mathrm{HNO}_3$, $\mathrm{H}_2\mathrm{SO}_4$ | $\mathrm{CH}_3\mathrm{COOH}$, $\mathrm{H}_2\mathrm{CO}_3$, $\mathrm{HF}$ |
| pH at same concentration   | Lower pH                                                      | Higher pH                                                                |
| Conductivity               | Higher                                                        | Lower                                                                    |
| Reaction rate (same conc.) | Faster                                                        | Slower                                                                   |

:::warning A strong acid is NOT the same as a concentrated acid. Strength refers to the degree of
ionisation; concentration refers to the amount dissolved per unit volume. A dilute solution of a
strong acid can have a higher pH than a concentrated solution of a weak acid.
:::

### Common Strong Acids and Bases

**Strong acids:** $\mathrm{HCl}$, $\mathrm{HBr}$, $\mathrm{HI}$, $\mathrm{HNO}_3$,
$\mathrm{H}_2\mathrm{SO}_4$, $\mathrm{HClO}_4$

**Strong bases:** Group 1 hydroxides ($\mathrm{NaOH}$, $\mathrm{KOH}$), $\mathrm{Ba(OH)}_2$

---

## The pH Scale

### Definition of pH

$$\mathrm{pH} = -\log_{10}[\mathrm{H}^+]$$

Where $[\mathrm{H}^+]$ is the concentration of hydrogen ions in mol/dm$^3$.

### pH of Water

Pure water at $25^\circ\mathrm{C}$: $[\mathrm{H}^+] = [\mathrm{OH}^-] = 10^{-7}$ mol/dm$^3$, so
$\mathrm{pH} = 7$.

The ionic product of water:

$$K_w = [\mathrm{H}^+][\mathrm{OH}^-] = 10^{-14} \mathrm{ at } 25^\circ\mathrm{C}$$

This relationship always holds for aqueous solutions at $25^\circ\mathrm{C}$.

### Worked Example 1

Find the pH of a $0.05 \mathrm{ mol/dm}^3$ solution of $\mathrm{HCl}$.

$\mathrm{HCl}$ is a strong acid, so it is fully ionised:

$$[\mathrm{H}^+] = 0.05 \mathrm{ mol/dm}^3$$

$$\mathrm{pH} = -\log_{10}(0.05) = -\log_{10}(5 \times 10^{-2}) = 2 - \log_{10}5 = 2 - 0.699 = 1.30$$

### Worked Example 2

Find the pH of a $0.1 \mathrm{ mol/dm}^3$ solution of $\mathrm{NaOH}$.

$\mathrm{NaOH}$ is a strong base, fully ionised:

$$[\mathrm{OH}^-] = 0.1 \mathrm{ mol/dm}^3$$

$$[\mathrm{H}^+] = \frac{K_w}{[\mathrm{OH}^-]} = \frac{10^{-14}}{0.1} = 10^{-13} \mathrm{ mol/dm}^3$$

$$\mathrm{pH} = -\log_{10}(10^{-13}) = 13$$

### Worked Example 3

Find the pH of a $0.1 \mathrm{ mol/dm}^3$ solution of $\mathrm{CH}_3\mathrm{COOH}$
($K_a = 1.8 \times 10^{-5}$).

For a weak acid:

$$K_a = \frac{[\mathrm{H}^+][\mathrm{CH}_3\mathrm{COO}^-]}{[\mathrm{CH}_3\mathrm{COOH}]}$$

Assuming $[\mathrm{H}^+] = x$:

$$1.8 \times 10^{-5} = \frac{x^2}{0.1}$$

$$x^2 = 1.8 \times 10^{-6}$$

$$x = 1.34 \times 10^{-3} \mathrm{ mol/dm}^3$$

$$\mathrm{pH} = -\log_{10}(1.34 \times 10^{-3}) = 2.87$$

:::tip For weak acid calculations, you can assume
$[\mathrm{HA}]_{\mathrm{initial}} \approx [\mathrm{HA}]_{\mathrm{equilibrium}}$ only when the degree
of ionisation is small (typically when $K_a \lt 10^{-4}$). This simplification is valid for most
DSE-level problems.
:::

### Worked Example: pH After Dilution

A solution of $\mathrm{HCl}$ has $\mathrm{pH} = 2.00$. If $10.0 \mathrm{ cm^3}$ of this solution is diluted to $250 \mathrm{ cm^3}$, what is the new pH?

<details>
<summary>Solution</summary>

Original $[\mathrm{H^+}] = 10^{-2.00} = 0.0100 \mathrm{ mol/dm^3}$

After dilution: $[\mathrm{H^+}] = 0.0100 \times \frac{10.0}{250} = 4.00 \times 10^{-4} \mathrm{ mol/dm^3}$

$$\mathrm{pH} = -\log_{10}(4.00 \times 10^{-4}) = 3.40$$

</details>

### Worked Example: Identifying Conjugate Pairs

In the reaction $\mathrm{HNO_2} + \mathrm{H_2O} \rightleftharpoons \mathrm{NO_2^-} + \mathrm{H_3O^+}$, identify the two conjugate acid-base pairs.

<details>
<summary>Solution</summary>

$\mathrm{HNO_2}$ donates a proton to become $\mathrm{NO_2^-}$:

- Conjugate pair 1: $\mathrm{HNO_2}$ (acid) / $\mathrm{NO_2^-}$ (conjugate base)

$\mathrm{H_2O}$ accepts a proton to become $\mathrm{H_3O^+}$:

- Conjugate pair 2: $\mathrm{H_2O}$ (base) / $\mathrm{H_3O^+}$ (conjugate acid)

</details>

### pH Scale Summary

| pH   | Nature           |
| ---- | ---------------- |
| 0-6  | Acidic           |
| 7    | Neutral          |
| 8-14 | Alkaline (basic) |

Each unit change in pH represents a **tenfold** change in $[\mathrm{H}^+]$.

---

## Acid-Base Titrations

A titration is a technique for determining the concentration of a solution by reacting it with a
solution of known concentration.

### Titration Procedure

1. Rinse the burette with the solution it will contain, then fill it
2. Record the initial burette reading
3. Add indicator to the solution in the conical flask
4. Slowly add the titrant from the burette, swirling constantly
5. Stop when the indicator changes colour (endpoint)
6. Record the final burette reading
7. Repeat until concordant results are obtained (within $0.10 \mathrm{ cm}^3$)

### Indicators

| Indicator           | Colour in Acid | Colour in Base | pH Range   |
| ------------------- | -------------- | -------------- | ---------- |
| Methyl orange       | Red            | Yellow         | 3.1 - 4.4  |
| Phenolphthalein     | Colourless     | Pink           | 8.3 - 10.0 |
| Universal indicator | Red / Orange   | Blue / Violet  | 1 - 14     |

### Worked Example 4

$25.0 \mathrm{ cm}^3$ of $\mathrm{NaOH}$ solution is titrated with $0.100 \mathrm{ mol/dm}^3$
$\mathrm{HCl}$. The average titre is $20.0 \mathrm{ cm}^3$. Find the concentration of
$\mathrm{NaOH}$.

$$\mathrm{HCl} + \mathrm{NaOH} \to \mathrm{NaCl} + \mathrm{H}_2\mathrm{O}$$

Moles of $\mathrm{HCl} = 0.100 \times \frac{20.0}{1000} = 0.00200 \mathrm{ mol}$

Since the mole ratio is 1:1:

Moles of $\mathrm{NaOH} = 0.00200 \mathrm{ mol}$

$$[\mathrm{NaOH}] = \frac{0.00200}{25.0/1000} = \frac{0.00200}{0.0250} = 0.0800 \mathrm{ mol/dm}^3$$

---

## Salt Preparation

### Solubility Rules

| Soluble                                | Exceptions                                                                   |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| All Group 1 and ammonium salts         | —                                                                            |
| All nitrates                           | —                                                                            |
| All chlorides                          | $\mathrm{PbCl}_2$, $\mathrm{AgCl}$, $\mathrm{Hg}_2\mathrm{Cl}_2$ (insoluble) |
| All sulphates                          | $\mathrm{BaSO}_4$, $\mathrm{PbSO}_4$, $\mathrm{CaSO}_4$ (slightly soluble)   |
| Sodium, potassium, ammonium carbonates | —                                                                            |
| Sodium, potassium, ammonium hydroxides | —                                                                            |

| Insoluble       | Exceptions                                                   |
| --------------- | ------------------------------------------------------------ |
| Most carbonates | Group 1 and ammonium                                         |
| Most hydroxides | Group 1, $\mathrm{Ba(OH)}_2$, $\mathrm{Ca(OH)}_2$ (slightly) |
| Most oxides     | Group 1                                                      |

### Methods of Salt Preparation

**Soluble salt from acid + insoluble base:**

1. Add excess insoluble base (metal oxide or carbonate) to the acid
2. Filter to remove excess base
3. Evaporate the filtrate to crystallisation
4. Filter and dry the crystals

**Soluble salt by titration (acid + soluble base):**

1. Titrate to find the exact volumes needed
2. Repeat using exact volumes without indicator
3. Evaporate to crystallisation

**Insoluble salt by precipitation:**

1. Mix two soluble salts that contain the required ions
2. Filter the precipitate
3. Wash with distilled water
4. Dry between filter papers

### Worked Example 5

Describe how to prepare a sample of copper(II) sulphate crystals.

1. Add dilute $\mathrm{H}_2\mathrm{SO}_4$ to a beaker
2. Add copper(II) oxide powder in excess (it is an insoluble base)
3. Warm gently and stir until no more reacts
4. Filter to remove excess copper(II) oxide
5. Evaporate the filtrate until crystals start to form
6. Leave to cool and crystallise
7. Filter, wash with cold water, and dry

---

## Redox Reactions

### Oxidation and Reduction

**Oxidation:** Loss of electrons, increase in oxidation number

**Reduction:** Gain of electrons, decrease in oxidation number

**OIL RIG:** Oxidation Is Loss, Reduction Is Gain

**LEO says GER:** Losing Electrons is Oxidation, Gaining Electrons is Reduction

### Oxidation Numbers

Rules for assigning oxidation numbers:

1. Elements in their standard state have oxidation number 0 (e.g., $\mathrm{Na}$, $\mathrm{Cl}_2$,
   $\mathrm{O}_2$)
2. Simple ions have oxidation number equal to their charge (e.g., $\mathrm{Na}^+ = +1$,
   $\mathrm{Cl}^- = -1$)
3. Oxygen is usually -2 (except in peroxides: -1; in $\mathrm{OF}_2$: +2)
4. Hydrogen is usually +1 (except in metal hydrides: -1)
5. The sum of oxidation numbers in a neutral compound is 0
6. The sum of oxidation numbers in a polyatomic ion equals the charge on the ion

### Worked Example 6

Find the oxidation numbers of each element in $\mathrm{KMnO}_4$.

Let the oxidation number of Mn be $x$.

$$+1 + x + 4(-2) = 0$$

$$1 + x - 8 = 0$$

$$x = +7$$

Oxidation numbers: $\mathrm{K} = +1$, $\mathrm{Mn} = +7$, $\mathrm{O} = -2$.

### Balancing Redox Equations (Ion-Electron Method)

1. Split the equation into two half-equations (oxidation and reduction)
2. Balance atoms other than $\mathrm{O}$ and $\mathrm{H}$
3. Balance $\mathrm{O}$ by adding $\mathrm{H}_2\mathrm{O}$
4. Balance $\mathrm{H}$ by adding $\mathrm{H}^+$
5. Balance charge by adding electrons ($e^-$)
6. Multiply half-equations so that the electrons cancel
7. Add the half-equations and simplify

### Worked Example 7

Balance the reaction: $\mathrm{MnO}_4^- + \mathrm{Fe}^{2+} \to \mathrm{Mn}^{2+} + \mathrm{Fe}^{3+}$
(in acidic solution)

**Reduction half-equation:**

$$\mathrm{MnO}_4^- \to \mathrm{Mn}^{2+}$$

$$\mathrm{MnO}_4^- + 8\mathrm{H}^+ \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$$

Charge: $-1 + 8 = +7$ (left), $+2$ (right). Add $5e^-$ to left:

$$\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$$

**Oxidation half-equation:**

$$\mathrm{Fe}^{2+} \to \mathrm{Fe}^{3+} + e^-$$

Multiply by 5:

$$5\mathrm{Fe}^{2+} \to 5\mathrm{Fe}^{3+} + 5e^-$$

**Combine:**

$$\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5\mathrm{Fe}^{2+} \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O} + 5\mathrm{Fe}^{3+}$$

---

## Electrolysis

### Definitions

**Electrolysis:** The decomposition of an ionic compound by passing an electric current through it.

**Electrolyte:** The ionic compound, either molten or in aqueous solution, that conducts
electricity.

**Electrodes:** Conductors through which current enters and leaves the electrolyte.

- **Anode (+):** Positive electrode where oxidation occurs
- **Cathode (-):** Negative electrode where reduction occurs

### Electrolysis of Molten Ionic Compounds

At the cathode (reduction): Metal ions gain electrons and are discharged as metal atoms.

$$\mathrm{M}^{n+} + ne^- \to \mathrm{M}$$

At the anode (oxidation): Non-metal ions lose electrons and are discharged.

$$\mathrm{X}^{n-} \to \frac{n}{2}\mathrm{X}_2 + ne^-$$

### Worked Example 8

Describe the electrolysis of molten lead(II) bromide, $\mathrm{PbBr}_2$.

At the cathode (-): $\mathrm{Pb}^{2+} + 2e^- \to \mathrm{Pb}$ (grey solid)

At the anode (+): $2\mathrm{Br}^- \to \mathrm{Br}_2 + 2e^-$ (orange-brown gas)

### Electrolysis of Aqueous Solutions

When an aqueous solution is electrolysed, both the dissolved ions and water molecules can be
discharged. The **discharge series** determines which species is preferentially discharged:

**At the cathode (less reactive metal is discharged):**

$$\mathrm{K}^+ \lt \mathrm{Na}^+ \lt \mathrm{Ca}^{2+} \lt \mathrm{Mg}^{2+} \lt \mathrm{Al}^{3+} \lt \mathrm{Zn}^{2+} \lt \mathrm{Fe}^{2+} \lt \mathrm{Ni}^{2+} \lt \mathrm{Sn}^{2+} \lt \mathrm{Pb}^{2+} \lt \mathrm{H}^+ \lt \mathrm{Cu}^{2+} \lt \mathrm{Ag}^+ \lt \mathrm{Au}^+$$

Ions above $\mathrm{H}^+$: $\mathrm{H}_2\mathrm{O}$ is reduced instead
($2\mathrm{H}_2\mathrm{O} + 2e^- \to \mathrm{H}_2 + 2\mathrm{OH}^-$)

Ions below $\mathrm{H}^+$: The metal ion is discharged

**At the anode:**

$$\mathrm{SO}_4^{2-} \lt \mathrm{NO}_3^- \lt \mathrm{Cl}^- \lt \mathrm{Br}^- \lt \mathrm{I}^- \lt \mathrm{OH}^-$$

Sulphate and nitrate: $\mathrm{H}_2\mathrm{O}$ is oxidised instead
($4\mathrm{OH}^- \to \mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^-$, or
$2\mathrm{H}_2\mathrm{O} \to \mathrm{O}_2 + 4\mathrm{H}^+ + 4e^-$)

Halides ($\mathrm{Cl}^-$, $\mathrm{Br}^-$, $\mathrm{I}^-$): The halogen is discharged

:::warning Concentration matters. In concentrated chloride solutions, $\mathrm{Cl}^-$ is discharged
at the anode instead of $\mathrm{OH}^-$. In dilute chloride solutions, $\mathrm{OH}^-$ may be
preferentially discharged.
:::

### Worked Example 9

Describe the electrolysis of concentrated aqueous $\mathrm{NaCl}$ using carbon electrodes.

At the cathode: $\mathrm{Na}^+$ is above $\mathrm{H}^+$ in the discharge series, so
$\mathrm{H}_2\mathrm{O}$ is reduced:

$$2\mathrm{H}_2\mathrm{O} + 2e^- \to \mathrm{H}_2 + 2\mathrm{OH}^-$$

At the anode: Concentrated $\mathrm{Cl}^-$ is discharged (halides above $\mathrm{OH}^-$ in
concentrated solution):

$$2\mathrm{Cl}^- \to \mathrm{Cl}_2 + 2e^-$$

Overall:
$2\mathrm{H}_2\mathrm{O} + 2\mathrm{NaCl} \to \mathrm{H}_2 + \mathrm{Cl}_2 + 2\mathrm{NaOH}$

---

## Faraday's Laws of Electrolysis

### First Law

The mass of substance liberated at an electrode is proportional to the quantity of charge passed.

$$m = \frac{Q \times M}{nF}$$

Where:

- $m$ = mass liberated (g)
- $Q$ = charge (C) = $I \times t$ (current in A $\times$ time in s)
- $M$ = molar mass (g/mol)
- $n$ = number of electrons transferred per ion
- $F$ = Faraday constant $= 96500 \mathrm{ C/mol}$

### Second Law

When the same quantity of electricity is passed through different electrolytes, the masses of
different substances liberated are proportional to their equivalent masses ($M/n$).

### Worked Example 10

What mass of copper is deposited when a current of $2.0 \mathrm{ A}$ is passed through
$\mathrm{CuSO}_4$ solution for 30 minutes?

$$Q = It = 2.0 \times 30 \times 60 = 3600 \mathrm{ C}$$

$$\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu} \quad (n = 2)$$

$$m = \frac{Q \times M}{nF} = \frac{3600 \times 63.5}{2 \times 96500} = \frac{228600}{193000} = 1.18 \mathrm{ g}$$

### Worked Example 11

What volume of oxygen (at r.t.p.) is produced when a current of $3.0 \mathrm{ A}$ is passed through
dilute $\mathrm{H}_2\mathrm{SO}_4$ for 20 minutes?

$$Q = 3.0 \times 20 \times 60 = 3600 \mathrm{ C}$$

At the anode: $4\mathrm{OH}^- \to \mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^-$ ($n = 4$)

Moles of $\mathrm{O}_2 = \frac{Q}{nF} = \frac{3600}{4 \times 96500} = 0.00933 \mathrm{ mol}$

Volume at r.t.p. ($1 \mathrm{ mol} = 24.0 \mathrm{ dm}^3$):

$$V = 0.00933 \times 24.0 = 0.224 \mathrm{ dm}^3 = 224 \mathrm{ cm}^3$$

---

## Electrochemical Cells

### Voltaic (Galvanic) Cells

A voltaic cell converts chemical energy to electrical energy through a spontaneous redox reaction.

### Structure of a Voltaic Cell

1. Two half-cells, each containing an electrode in contact with an electrolyte
2. A metal wire connecting the two electrodes (external circuit)
3. A salt bridge or porous barrier connecting the two electrolytes (internal circuit)

**Salt bridge:** Contains an inert electrolyte (e.g., $\mathrm{KNO}_3$) that allows ions to flow
without the solutions mixing directly.

### Electrode Potentials

The **standard electrode potential** ($E^\circ$) is the potential difference between a half-cell and
the standard hydrogen electrode (SHE) under standard conditions (298 K, 1 mol/dm$^3$, 1 atm).

The SHE is assigned $E^\circ = 0.00 \mathrm{ V}$.

### Standard Cell Potential

$$E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}}$$

Where:

- The cathode has the more positive (less negative) $E^\circ$ value (reduction occurs)
- The anode has the less positive (more negative) $E^\circ$ value (oxidation occurs)

If $E^\circ_{\mathrm{cell}} \gt 0$, the reaction is spontaneous.

### Worked Example 12

A cell is constructed from a $\mathrm{Zn}^{2+}/\mathrm{Zn}$ half-cell
($E^\circ = -0.76 \mathrm{ V}$) and a $\mathrm{Cu}^{2+}/\mathrm{Cu}$ half-cell
($E^\circ = +0.34 \mathrm{ V}$). Find the cell potential and write the overall equation.

Copper has the more positive $E^\circ$, so reduction occurs at the copper electrode (cathode).

$$E^\circ_{\mathrm{cell}} = 0.34 - (-0.76) = 1.10 \mathrm{ V}$$

Cathode (reduction): $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$

Anode (oxidation): $\mathrm{Zn} \to \mathrm{Zn}^{2+} + 2e^-$

Overall: $\mathrm{Zn} + \mathrm{Cu}^{2+} \to \mathrm{Zn}^{2+} + \mathrm{Cu}$

### The Electrochemical Series

The electrochemical series ranks half-reactions by their standard electrode potentials:

| Half-reaction                             | $E^\circ$ (V) |
| ----------------------------------------- | ------------- |
| $\mathrm{Li}^+ + e^- \to \mathrm{Li}$     | -3.03         |
| $\mathrm{K}^+ + e^- \to \mathrm{K}$       | -2.93         |
| $\mathrm{Na}^+ + e^- \to \mathrm{Na}$     | -2.71         |
| $\mathrm{Zn}^{2+} + 2e^- \to \mathrm{Zn}$ | -0.76         |
| $\mathrm{Fe}^{2+} + 2e^- \to \mathrm{Fe}$ | -0.44         |
| $2\mathrm{H}^+ + 2e^- \to \mathrm{H}_2$   | 0.00          |
| $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$ | +0.34         |
| $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$     | +0.80         |
| $\mathrm{Au}^{3+} + 3e^- \to \mathrm{Au}$ | +1.50         |

**More negative $E^\circ$:** Metal is a stronger reducing agent (more easily oxidised).

**More positive $E^\circ$:** Ion is a stronger oxidising agent (more easily reduced).

---

## Summary Table

| Topic          | Key Formula                                                                       | Key Concept                 |
| -------------- | --------------------------------------------------------------------------------- | --------------------------- |
| pH             | $\mathrm{pH} = -\log_{10}[\mathrm{H}^+]$                                          | Measures acidity            |
| $K_w$          | $K_w = [\mathrm{H}^+][\mathrm{OH}^-] = 10^{-14}$                                  | Ionic product of water      |
| $K_a$          | $K_a = \frac{[\mathrm{H}^+][\mathrm{A}^-]}{[\mathrm{HA}]}$                        | Acid dissociation constant  |
| Titration      | $c_1V_1 = c_2V_2$ (for 1:1 reactions)                                             | Concentration determination |
| Faraday's Law  | $m = \frac{Q \times M}{nF}$                                                       | Mass from electrolysis      |
| Cell potential | $E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}}$ | Voltaic cell voltage        |

---

## Exam Tips

- In titration calculations, always convert volumes to dm$^3$ by dividing by 1000.
- For weak acid pH calculations, set up the $K_a$ expression and solve the quadratic (or use the
  approximation).
- When writing redox half-equations, always balance charge with electrons last.
- In electrolysis, identify the ions present and use the discharge series to determine the products.
- For Faraday's law problems, remember to convert minutes to seconds.
- In electrochemical cell questions, the species with the more positive $E^\circ$ undergoes
  reduction (cathode).

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** $25.0 \mathrm{ cm}^3$ of $0.200 \mathrm{ mol/dm}^3$ $\mathrm{H}_2\mathrm{SO}_4$ is
neutralised by $\mathrm{NaOH}$ solution. If $20.0 \mathrm{ cm}^3$ of $\mathrm{NaOH}$ is required,
find its concentration.

$$\mathrm{H}_2\mathrm{SO}_4 + 2\mathrm{NaOH} \to \mathrm{Na}_2\mathrm{SO}_4 + 2\mathrm{H}_2\mathrm{O}$$

Moles of $\mathrm{H}_2\mathrm{SO}_4 = 0.200 \times 0.0250 = 0.00500 \mathrm{ mol}$

Moles of $\mathrm{NaOH} = 2 \times 0.00500 = 0.0100 \mathrm{ mol}$

$$[\mathrm{NaOH}] = \frac{0.0100}{0.0200} = 0.500 \mathrm{ mol/dm}^3$$

**Question 2:** A current of $5.0 \mathrm{ A}$ is passed through molten $\mathrm{Al}_2\mathrm{O}_3$
for 2 hours. What mass of aluminium is produced?

$$Q = 5.0 \times 2 \times 3600 = 36000 \mathrm{ C}$$

$$\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al} \quad (n = 3)$$

$$m = \frac{36000 \times 27.0}{3 \times 96500} = \frac{972000}{289500} = 3.36 \mathrm{ g}$$

**Question 3:** Assign oxidation numbers to all elements in $\mathrm{K}_2\mathrm{Cr}_2\mathrm{O}_7$.

$2(+1) + 2x + 7(-2) = 0$

$2 + 2x - 14 = 0$

$x = +6$

Oxidation numbers: $\mathrm{K} = +1$, $\mathrm{Cr} = +6$, $\mathrm{O} = -2$.

**Question 4:** Balance the reaction between $\mathrm{MnO}_4^-$ and $\mathrm{C}_2\mathrm{O}_4^{2-}$
in acidic solution.

Reduction: $\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \to \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$

Oxidation: $\mathrm{C}_2\mathrm{O}_4^{2-} \to 2\mathrm{CO}_2 + 2e^-$

Multiply oxidation by 5 and reduction by 2:

$2\mathrm{MnO}_4^- + 16\mathrm{H}^+ + 10e^- \to 2\mathrm{Mn}^{2+} + 8\mathrm{H}_2\mathrm{O}$

$5\mathrm{C}_2\mathrm{O}_4^{2-} \to 10\mathrm{CO}_2 + 10e^-$

Overall:
$2\mathrm{MnO}_4^- + 5\mathrm{C}_2\mathrm{O}_4^{2-} + 16\mathrm{H}^+ \to 2\mathrm{Mn}^{2+} + 10\mathrm{CO}_2 + 8\mathrm{H}_2\mathrm{O}$

**Question 5:** A cell is made from $\mathrm{Zn}^{2+}/\mathrm{Zn}$ ($E^\circ = -0.76 \mathrm{ V}$)
and $\mathrm{Ag}^+/\mathrm{Ag}$ ($E^\circ = +0.80 \mathrm{ V}$). Write the overall equation and
calculate the cell potential.

Silver has the more positive $E^\circ$, so it is the cathode.

$$E^\circ_{\mathrm{cell}} = 0.80 - (-0.76) = 1.56 \mathrm{ V}$$

Cathode: $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$

Anode: $\mathrm{Zn} \to \mathrm{Zn}^{2+} + 2e^-$

Multiply cathode by 2: $2\mathrm{Ag}^+ + 2e^- \to 2\mathrm{Ag}$

Overall: $\mathrm{Zn} + 2\mathrm{Ag}^+ \to \mathrm{Zn}^{2+} + 2\mathrm{Ag}$

</details>

---

## Buffers

### Definition

A buffer solution is one that resists changes in pH when small amounts of acid or base are added.

### Composition

A buffer can be made from:

- A weak acid and its conjugate base (salt of the weak acid)
- A weak base and its conjugate acid (salt of the weak base)

### How a Buffer Works

**Acidic buffer** (e.g., $\mathrm{CH}_3\mathrm{COOH}$ / $\mathrm{CH}_3\mathrm{COONa}$):

When acid ($\mathrm{H}^+$) is added:
$$\mathrm{CH}_3\mathrm{COO}^- + \mathrm{H}^+ \to \mathrm{CH}_3\mathrm{COOH}$$ The conjugate base
neutralises the added $\mathrm{H}^+$.

When base ($\mathrm{OH}^-$) is added:
$$\mathrm{CH}_3\mathrm{COOH} + \mathrm{OH}^- \to \mathrm{CH}_3\mathrm{COO}^- + \mathrm{H}_2\mathrm{O}$$
The weak acid neutralises the added $\mathrm{OH}^-$.

### Henderson-Hasselbalch Equation

$$\mathrm{pH} = \mathrm{p}K_a + \log_{10}\left(\frac{[\mathrm{A}^-]}{[\mathrm{HA}]}\right)$$

Where:

- $\mathrm{p}K_a = -\log_{10}K_a$
- $[\mathrm{A}^-]$ = concentration of the conjugate base
- $[\mathrm{HA}]$ = concentration of the weak acid

### Worked Example 12

A buffer contains $0.1 \mathrm{ mol/dm}^3$ $\mathrm{CH}_3\mathrm{COOH}$ ($K_a = 1.8 \times 10^{-5}$)
and $0.2 \mathrm{ mol/dm}^3$ $\mathrm{CH}_3\mathrm{COONa}$. Calculate the pH.

$$\mathrm{p}K_a = -\log_{10}(1.8 \times 10^{-5}) = 4.74$$

$$\mathrm{pH} = 4.74 + \log_{10}\left(\frac{0.2}{0.1}\right) = 4.74 + \log_{10}(2) = 4.74 + 0.30 = 5.04$$

### Worked Example 13

What is the pH of the buffer after adding $0.01 \mathrm{ mol}$ of $\mathrm{HCl}$ to
$1 \mathrm{ dm}^3$ of the buffer in Worked Example 12?

$\mathrm{HCl}$ reacts with $\mathrm{CH}_3\mathrm{COO}^-$:

New $[\mathrm{CH}_3\mathrm{COO}^-] = 0.2 - 0.01 = 0.19 \mathrm{ mol/dm}^3$

New $[\mathrm{CH}_3\mathrm{COOH}] = 0.1 + 0.01 = 0.11 \mathrm{ mol/dm}^3$

$$\mathrm{pH} = 4.74 + \log_{10}\left(\frac{0.19}{0.11}\right) = 4.74 + \log_{10}(1.727) = 4.74 + 0.237 = 4.98$$

The pH changed from 5.04 to 4.98, a change of only 0.06. Without the buffer, adding
$0.01 \mathrm{ mol}$ of $\mathrm{HCl}$ to $1 \mathrm{ dm}^3$ of water would give pH = 2.

:::info Buffers are most effective when $[\mathrm{HA}] = [\mathrm{A}^-]$, i.e., when
$\mathrm{pH} = \mathrm{p}K_a$. The effective buffering range is approximately $\mathrm{p}K_a \pm 1$.
:::

---

## Indicators and pH Curves

### Strong Acid - Strong Base Titration

- Equivalence point at pH = 7
- Sharp change in pH around the equivalence point
- Suitable indicators: phenolphthalein, methyl orange, universal indicator

### Weak Acid - Strong Base Titration

- Equivalence point at pH \gt 7 (salt hydrolysis produces $\mathrm{OH}^-$)
- Less sharp change in pH
- Suitable indicator: phenolphthalein (pH range 8.3-10.0)

### Strong Acid - Weak Base Titration

- Equivalence point at pH \lt 7 (salt hydrolysis produces $\mathrm{H}^+$)
- Suitable indicator: methyl orange (pH range 3.1-4.4)

### Worked Example 14

$25.0 \mathrm{ cm}^3$ of $0.100 \mathrm{ mol/dm}^3$ ethanoic acid ($\mathrm{CH}_3\mathrm{COOH}$,
$K_a = 1.8 \times 10^{-5}$) is titrated with $0.100 \mathrm{ mol/dm}^3$ $\mathrm{NaOH}$. Find the pH
at the equivalence point.

At equivalence point: moles of $\mathrm{NaOH}$ = moles of $\mathrm{CH}_3\mathrm{COOH}$

Moles of $\mathrm{CH}_3\mathrm{COOH} = 0.100 \times 0.0250 = 0.00250 \mathrm{ mol}$

Volume of $\mathrm{NaOH}$ needed = $0.0250 \mathrm{ dm}^3 = 25.0 \mathrm{ cm}^3$

Total volume = $50.0 \mathrm{ cm}^3 = 0.0500 \mathrm{ dm}^3$

The salt $\mathrm{CH}_3\mathrm{COONa}$ is formed. Concentration of $\mathrm{CH}_3\mathrm{COO}^-$:

$$[\mathrm{CH}_3\mathrm{COO}^-] = \frac{0.00250}{0.0500} = 0.0500 \mathrm{ mol/dm}^3$$

The $\mathrm{CH}_3\mathrm{COO}^-$ ion hydrolyses:

$$\mathrm{CH}_3\mathrm{COO}^- + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{CH}_3\mathrm{COOH} + \mathrm{OH}^-$$

$$K_b = \frac{K_w}{K_a} = \frac{10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}$$

$$K_b = \frac{[\mathrm{CH}_3\mathrm{COOH}][\mathrm{OH}^-]}{[\mathrm{CH}_3\mathrm{COO}^-]} = \frac{x^2}{0.0500} = 5.56 \times 10^{-10}$$

$$x^2 = 2.78 \times 10^{-11}$$

$$x = 5.27 \times 10^{-6} \mathrm{ mol/dm}^3$$

$$\mathrm{pOH} = -\log_{10}(5.27 \times 10^{-6}) = 5.28$$

$$\mathrm{pH} = 14 - 5.28 = 8.72$$

---

## Corrosion and Its Prevention

### Rusting of Iron

Rusting is an electrochemical process that requires both water and oxygen.

At the anode (oxidation):

$$\mathrm{Fe} \to \mathrm{Fe}^{2+} + 2e^-$$

At the cathode (reduction):

$$\mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^- \to 4\mathrm{OH}^-$$

The $\mathrm{Fe}^{2+}$ reacts with $\mathrm{OH}^-$ and oxygen to form hydrated iron(III) oxide
(rust):

$$4\mathrm{Fe}^{2+} + 4\mathrm{OH}^- + \mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} \to 4\mathrm{Fe}(\mathrm{OH})_3$$

### Methods of Prevention

| Method                 | Principle                                               |
| ---------------------- | ------------------------------------------------------- |
| Painting / Oil coating | Barrier to water and oxygen                             |
| Galvanising            | Coating with zinc (sacrificial protection)              |
| Alloying               | Adding chromium and nickel (stainless steel)            |
| Sacrificial anode      | Attaching a more reactive metal (e.g., Mg, Zn)          |
| Cathodic protection    | Applying negative voltage to make the metal the cathode |

---

## Additional Worked Examples

### Worked Example: Buffer pH Calculation

Calculate the pH of a buffer containing $0.20 \mathrm{ mol/dm^3}$ $\mathrm{CH_3COOH}$ ($K_a = 1.8 \times 10^{-5}$) and $0.10 \mathrm{ mol/dm^3}$ $\mathrm{CH_3COONa}$.

<details>
<summary>Solution</summary>

$$\mathrm{p}K_a = -\log_{10}(1.8 \times 10^{-5}) = 4.74$$

Using the Henderson-Hasselbalch equation:

$$\mathrm{pH} = \mathrm{p}K_a + \log_{10}\left(\frac{[\mathrm{CH_3COO^-}]}{[\mathrm{CH_3COOH}]}\right) = 4.74 + \log_{10}\left(\frac{0.10}{0.20}\right) = 4.74 + \log_{10}(0.5) = 4.74 - 0.30 = 4.44$$

</details>

### Worked Example: Electrolysis Product Prediction

Predict the products of electrolysis of dilute $\mathrm{Na_2SO_4}$ solution using inert carbon electrodes.

<details>
<summary>Solution</summary>

Ions present: $\mathrm{Na^+}$, $\mathrm{SO_4^{2-}}$, $\mathrm{H^+}$, $\mathrm{OH^-}$

Cathode: $\mathrm{Na^+}$ is above $\mathrm{H^+}$ in the discharge series, so water is reduced:

$$2\mathrm{H_2O} + 2e^- \to \mathrm{H_2} + 2\mathrm{OH^-}$$

Anode: $\mathrm{SO_4^{2-}}$ is not a halide, so water is oxidised:

$$4\mathrm{OH^-} \to \mathrm{O_2} + 2\mathrm{H_2O} + 4e^-$$

Products: hydrogen gas (cathode) and oxygen gas (anode). The solution becomes increasingly alkaline due to $\mathrm{OH^-$ accumulation.

</details>

### Worked Example: Choosing a Salt Preparation Method

Describe how to prepare pure, dry crystals of zinc sulphate.

<details>
<summary>Solution</summary>

$\mathrm{ZnSO_4}$ is a soluble salt. Zinc is a reactive metal (above hydrogen), so the **acid + metal** method can be used:

1. Add excess zinc granules to dilute $\mathrm{H_2SO_4}$ in a beaker.
2. Effervescence occurs as $\mathrm{H_2}$ is produced: $\mathrm{Zn} + \mathrm{H_2SO_4} \to \mathrm{ZnSO_4} + \mathrm{H_2}$
3. Continue until no more gas is produced (excess zinc ensures all acid is consumed).
4. Filter to remove excess zinc.
5. Heat the filtrate to concentrate by evaporation until crystals begin to form.
6. Allow to cool for crystallisation, then filter and dry.

</details>

---

## Additional Practice Questions

<details>
<summary>More Exam-Style Problems</summary>

**Question 6:** Calculate the pH of a buffer made by mixing $100 \mathrm{ cm}^3$ of
$0.20 \mathrm{ mol/dm}^3$ $\mathrm{NH}_3$ ($K_b = 1.8 \times 10^{-5}$) with $100 \mathrm{ cm}^3$ of
$0.10 \mathrm{ mol/dm}^3$ $\mathrm{HCl}$.

$\mathrm{NH}_3$ reacts with $\mathrm{HCl}$:
$\mathrm{NH}_3 + \mathrm{HCl} \to \mathrm{NH}_4^+ + \mathrm{Cl}^-$

Moles of $\mathrm{NH}_3 = 0.20 \times 0.100 = 0.0200 \mathrm{ mol}$

Moles of $\mathrm{HCl} = 0.10 \times 0.100 = 0.0100 \mathrm{ mol}$

Remaining $\mathrm{NH}_3 = 0.0200 - 0.0100 = 0.0100 \mathrm{ mol}$

$\mathrm{NH}_4^+$ formed $= 0.0100 \mathrm{ mol}$

Total volume $= 0.200 \mathrm{ dm}^3$

$[\mathrm{NH}_3] = 0.0500 \mathrm{ mol/dm}^3$, $[\mathrm{NH}_4^+] = 0.0500 \mathrm{ mol/dm}^3$

$\mathrm{p}K_a = 14 - \mathrm{p}K_b = 14 - (-\log_{10}(1.8 \times 10^{-5})) = 14 - 4.74 = 9.26$

$\mathrm{pH} = 9.26 + \log_{10}\left(\frac{0.0500}{0.0500}\right) = 9.26 + 0 = 9.26$

**Question 7:** Explain why steel wool rusts faster when in contact with less active metals like
copper.

Copper is less reactive than iron. When in contact, iron acts as the anode and copper as the
cathode. The iron oxidises more rapidly, accelerating the rusting process. This is an example of
**electrochemical corrosion** where the less reactive metal provides a surface for the reduction
reaction.

**Question 8:** A current of $4.0 \mathrm{ A}$ is passed through $\mathrm{CuSO}_4$ solution using
copper electrodes. The mass of the anode decreased by $2.38 \mathrm{ g}$ after a certain time.
Calculate the time for which the current was passed.

$$m = \frac{Q \times M}{nF}$$

$$2.38 = \frac{Q \times 63.5}{2 \times 96500}$$

$$Q = \frac{2.38 \times 2 \times 96500}{63.5} = \frac{459340}{63.5} = 7234 \mathrm{ C}$$

$$t = \frac{Q}{I} = \frac{7234}{4.0} = 1808.5 \mathrm{ s} \approx 30.1 \mathrm{ minutes}$$

---

## Problem Set

**Problem 1:** Calculate the pH of $0.0025 \mathrm{ mol/dm^3}$ $\mathrm{H_2SO_4}$.

*If you get this wrong, revise: The pH Scale*

<details>
<summary>Solution</summary>

$\mathrm{H_2SO_4}$ is a strong diprotic acid: $[\mathrm{H^+}] = 2 \times 0.0025 = 0.0050 \mathrm{ mol/dm^3}$

$$\mathrm{pH} = -\log_{10}(0.0050) = 2.30$$

</details>

**Problem 2:** Calculate the pH of $0.050 \mathrm{ mol/dm^3}$ $\mathrm{CH_3COOH}$ ($K_a = 1.8 \times 10^{-5}$).

*If you get this wrong, revise: Strong and Weak Acids*

<details>
<summary>Solution</summary>

$$K_a = \frac{x^2}{0.050} = 1.8 \times 10^{-5}$$

$$x = \sqrt{9.0 \times 10^{-7}} = 9.49 \times 10^{-4} \mathrm{ mol/dm^3}$$

$$\mathrm{pH} = -\log_{10}(9.49 \times 10^{-4}) = 3.02$$

</details>

**Problem 3:** A buffer contains $0.15 \mathrm{ mol/dm^3}$ $\mathrm{NH_3}$ and $0.15 \mathrm{ mol/dm^3}$ $\mathrm{NH_4Cl}$ ($K_b = 1.8 \times 10^{-5}$). Calculate the pH.

*If you get this wrong, revise: Buffers*

<details>
<summary>Solution</summary>

$\mathrm{p}K_b = -\log_{10}(1.8 \times 10^{-5}) = 4.74$

$\mathrm{p}K_a = 14 - 4.74 = 9.26$

$$\mathrm{pH} = \mathrm{p}K_a + \log_{10}\left(\frac{[\mathrm{NH_3}]}{[\mathrm{NH_4^+}]}\right) = 9.26 + \log_{10}\left(\frac{0.15}{0.15}\right) = 9.26 + 0 = 9.26$$

</details>

**Problem 4:** $25.0 \mathrm{ cm^3}$ of $0.100 \mathrm{ mol/dm^3}$ $\mathrm{HCl}$ is titrated with $0.0800 \mathrm{ mol/dm^3}$ $\mathrm{NaOH}$. Calculate the volume of $\mathrm{NaOH}$ needed to reach the equivalence point.

*If you get this wrong, revise: Acid-Base Titrations*

<details>
<summary>Solution</summary>

$$\mathrm{HCl} + \mathrm{NaOH} \to \mathrm{NaCl} + \mathrm{H_2O}$$

$$n(\mathrm{HCl}) = 0.100 \times 0.0250 = 0.00250 \mathrm{ mol}$$

$$V(\mathrm{NaOH}) = \frac{n}{c} = \frac{0.00250}{0.0800} = 0.03125 \mathrm{ dm^3} = 31.3 \mathrm{ cm^3}$$

</details>

**Problem 5:** Describe how to prepare pure, dry crystals of lead(II) nitrate.

*If you get this wrong, revise: Salt Preparation*

<details>
<summary>Solution</summary>

$\mathrm{Pb(NO_3)_2}$ is soluble, and lead is below hydrogen in the reactivity series (it does not react with dilute acids to produce $\mathrm{H_2}$). The best method is **acid + insoluble base**:

1. Add excess $\mathrm{PbO}$ or $\mathrm{PbCO_3}$ to dilute $\mathrm{HNO_3}$
2. $\mathrm{PbO} + 2\mathrm{HNO_3} \to \mathrm{Pb(NO_3)_2} + \mathrm{H_2O}$
3. Filter to remove excess base
4. Evaporate filtrate to crystallisation
5. Filter, wash, and dry

</details>

**Problem 6:** Assign oxidation numbers to all elements in $\mathrm{H_2O_2}$ (hydrogen peroxide).

*If you get this wrong, revise: Oxidation Numbers*

<details>
<summary>Solution</summary>

$\mathrm{H_2O_2}$ is a peroxide. In peroxides, oxygen has oxidation number $-1$.

$$2(+1) + 2(-1) = 0$$

$\mathrm{H} = +1$, $\mathrm{O} = -1$.

This is an exception to the usual rule that oxygen is $-2$.

</details>

**Problem 7:** Balance the reaction of $\mathrm{MnO_4^-}$ with $\mathrm{H_2S}$ in acidic solution to give $\mathrm{Mn^{2+}}$ and $\mathrm{S}$.

*If you get this wrong, revise: Balancing Redox Equations*

<details>
<summary>Solution</summary>

Reduction: $\mathrm{MnO_4^-} + 8\mathrm{H^+} + 5e^- \to \mathrm{Mn^{2+}} + 4\mathrm{H_2O}$

Oxidation: $\mathrm{H_2S} \to \mathrm{S} + 2\mathrm{H^+} + 2e^-$

Multiply reduction by 2 and oxidation by 5:

$2\mathrm{MnO_4^-} + 16\mathrm{H^+} + 10e^- \to 2\mathrm{Mn^{2+}} + 8\mathrm{H_2O}$

$5\mathrm{H_2S} \to 5\mathrm{S} + 10\mathrm{H^+} + 10e^-$

Overall: $2\mathrm{MnO_4^-} + 5\mathrm{H_2S} + 6\mathrm{H^+} \to 2\mathrm{Mn^{2+}} + 5\mathrm{S} + 8\mathrm{H_2O}$

</details>

**Problem 8:** Predict the products at each electrode when concentrated aqueous $\mathrm{NaCl}$ is electrolysed using carbon electrodes. Write half-equations and the overall equation.

*If you get this wrong, revise: Electrolysis of Aqueous Solutions*

<details>
<summary>Solution</summary>

Cathode: $\mathrm{Na^+}$ is above $\mathrm{H^+}$, so $\mathrm{H_2}$ is produced:

$$2\mathrm{H_2O} + 2e^- \to \mathrm{H_2} + 2\mathrm{OH^-}$$

Anode: Concentrated $\mathrm{Cl^-}$ is discharged:

$$2\mathrm{Cl^-} \to \mathrm{Cl_2} + 2e^-$$

Overall: $2\mathrm{H_2O} + 2\mathrm{NaCl} \to \mathrm{H_2} + \mathrm{Cl_2} + 2\mathrm{NaOH}$

</details>

**Problem 9:** What mass of silver is deposited when a current of $0.60 \mathrm{ A}$ is passed through $\mathrm{AgNO_3}$ solution for 25 minutes?

*If you get this wrong, revise: Faraday's Laws of Electrolysis*

<details>
<summary>Solution</summary>

$$Q = 0.60 \times 25 \times 60 = 900 \mathrm{ C}$$

$$\mathrm{Ag^+} + e^- \to \mathrm{Ag} \quad (n = 1)$$

$$m = \frac{Q \times M}{nF} = \frac{900 \times 108}{1 \times 96500} = \frac{97200}{96500} = 1.01 \mathrm{ g}$$

</details>

**Problem 10:** A cell is made from $\mathrm{Mg}^{2+}/\mathrm{Mg}$ ($E^\circ = -2.37 \mathrm{ V}$) and $\mathrm{Ni}^{2+}/\mathrm{Ni}$ ($E^\circ = -0.25 \mathrm{ V}$). Calculate $E^\circ_{\mathrm{cell}}$ and write the overall equation. Is the reaction spontaneous?

*If you get this wrong, revise: Electrochemical Cells*

<details>
<summary>Solution</summary>

Nickel has the more positive $E^\circ$ (cathode, reduction).

$$E^\circ_{\mathrm{cell}} = -0.25 - (-2.37) = 2.12 \mathrm{ V}$$

Cathode: $\mathrm{Ni}^{2+} + 2e^- \to \mathrm{Ni}$

Anode: $\mathrm{Mg} \to \mathrm{Mg}^{2+} + 2e^-$

Overall: $\mathrm{Mg} + \mathrm{Ni}^{2+} \to \mathrm{Mg}^{2+} + \mathrm{Ni}$

Yes, spontaneous because $E^\circ_{\mathrm{cell}} = +2.12 \mathrm{ V} \gt 0$.

</details>

**Problem 11:** Which indicator would you choose for titrating ammonia solution with hydrochloric acid? Explain.

*If you get this wrong, revise: Indicators and pH Curves*

<details>
<summary>Solution</summary>

Methyl orange (pH range 3.1--4.4). $\mathrm{NH_3}$ is a weak base and $\mathrm{HCl}$ is a strong acid, so the equivalence point has $\mathrm{pH} \lt 7$. Methyl orange changes colour in the acidic range, which matches the equivalence point pH. Phenolphthalein would not be suitable because it changes colour at pH 8.3--10.0, which is above the equivalence point.

</details>

**Problem 12:** Explain why zinc coating on iron (galvanising) protects iron even when scratched, whereas tin coating does not.

*If you get this wrong, revise: Corrosion and Its Prevention*

<details>
<summary>Solution</summary>

**Zinc (galvanising):** Zinc is more reactive than iron. When the coating is scratched, zinc acts as a sacrificial anode and corrodes preferentially: $\mathrm{Zn} \to \mathrm{Zn^{2+}} + 2e^-$. The electrons flow to the iron, protecting it from oxidation.

**Tin:** Tin is less reactive than iron. When the coating is scratched, iron becomes the anode and corrodes faster than it would on its own. The tin acts as the cathode, accelerating the rusting of the exposed iron through electrochemical corrosion.

</details>

**Problem 13:** Calculate the $\mathrm{pH}$ of a solution made by diluting $5.0 \mathrm{ cm^3}$ of $0.10 \mathrm{ mol/dm^3}$ $\mathrm{NaOH}$ to $500 \mathrm{ cm^3}$ with distilled water.

*If you get this wrong, revise: The pH Scale*

<details>
<summary>Solution</summary>

$$[\mathrm{OH^-}] = 0.10 \times \frac{5.0}{500} = 1.0 \times 10^{-3} \mathrm{ mol/dm^3}$$

$$[\mathrm{H^+}] = \frac{K_w}{[\mathrm{OH^-}]} = \frac{10^{-14}}{1.0 \times 10^{-3}} = 1.0 \times 10^{-11} \mathrm{ mol/dm^3}$$

$$\mathrm{pH} = -\log_{10}(1.0 \times 10^{-11}) = 11.0$$

</details>

**Problem 14:** What mass of $\mathrm{Ag}$ is deposited when a current of $1.20 \mathrm{ A}$ is passed through $\mathrm{AgNO_3}$ solution for 15.0 minutes?

*If you get this wrong, revise: Faraday's Laws of Electrolysis*

<details>
<summary>Solution</summary>

$$Q = 1.20 \times 15.0 \times 60 = 1080 \mathrm{ C}$$

$$\mathrm{Ag^+} + e^- \to \mathrm{Ag} \quad (n = 1)$$

$$m = \frac{Q \times M}{nF} = \frac{1080 \times 108}{1 \times 96500} = \frac{116640}{96500} = 1.21 \mathrm{ g}$$

</details>

**Problem 15:** Write the ionic equation for the reaction between excess magnesium and dilute sulphuric acid.

*If you get this wrong, revise: Salt Preparation and Ionic Equations*

<details>
<summary>Solution</summary>

Full equation: $\mathrm{Mg} + \mathrm{H_2SO_4} \to \mathrm{MgSO_4} + \mathrm{H_2}$

Ionic equation: $\mathrm{Mg} + 2\mathrm{H^+} \to \mathrm{Mg^{2+}} + \mathrm{H_2}$

$\mathrm{SO_4^{2-}}$ is a spectator ion.

</details>

**Problem 16:** Explain the difference between a strong acid and a concentrated acid.

*If you get this wrong, revise: Strong and Weak Acids*

<details>
<summary>Solution</summary>

**Strength** refers to the degree of ionisation. A strong acid (e.g., $\mathrm{HCl}$) is completely dissociated into ions in water. A weak acid (e.g., $\mathrm{CH_3COOH}$) is only partially dissociated.

**Concentration** refers to the amount of acid dissolved per unit volume. A concentrated acid has a large amount dissolved; a dilute acid has a small amount.

A dilute solution of a strong acid can have a higher pH than a concentrated solution of a weak acid. Strength and concentration are independent properties.

</details>

**Problem 17:** A Daniell cell has $E^\circ_{\mathrm{cell}} = 1.10 \mathrm{ V}$. If the concentration of $\mathrm{Zn^{2+}}$ is increased, what happens to the cell potential? Explain.

*If you get this wrong, revise: Electrochemical Cells*

<details>
<summary>Solution</summary>

The cell potential decreases. At the anode (oxidation): $\mathrm{Zn} \to \mathrm{Zn^{2+}} + 2e^-$. Increasing $[\mathrm{Zn^{2+}}]$ shifts the equilibrium to the left (Le Chatelier's principle), making it harder for zinc to oxidise. This reduces the driving force for the cell reaction, decreasing $E^\circ_{\mathrm{cell}}$. Using the Nernst equation (beyond core DSE), $E_{\mathrm{cell}}$ decreases as $[\mathrm{Zn^{2+}}]$ increases.

</details>

**Problem 18:** Write the equation for the reaction between zinc and dilute sulphuric acid, and identify the gas evolved.

*If you get this wrong, revise: Salt Preparation*

<details>
<summary>Solution</summary>

$$\mathrm{Zn} + \mathrm{H_2SO_4} \to \mathrm{ZnSO_4} + \mathrm{H_2}$$

The gas evolved is hydrogen ($\mathrm{H_2}$). Zinc is above hydrogen in the reactivity series, so it displaces hydrogen from the acid. The test for hydrogen: the gas produces a "pop" sound when a burning splint is placed in the gas.

</details>

**Problem 19:** $50.0 \mathrm{ cm^3}$ of $0.500 \mathrm{ mol/dm^3}$ ethanoic acid is neutralised by $25.0 \mathrm{ cm^3}$ of sodium hydroxide solution. Calculate the concentration of the sodium hydroxide solution.

*If you get this wrong, revise: Acid-Base Titrations*

<details>
<summary>Solution</summary>

$$\mathrm{CH_3COOH} + \mathrm{NaOH} \to \mathrm{CH_3COONa} + \mathrm{H_2O}$$

$$n(\mathrm{CH_3COOH}) = 0.500 \times 0.0500 = 0.0250 \mathrm{ mol}$$

1:1 ratio, so $n(\mathrm{NaOH}) = 0.0250 \mathrm{ mol}$

$$[\mathrm{NaOH}] = \frac{0.0250}{0.0250} = 1.00 \mathrm{ mol/dm^3}$$

</details>

**Problem 20:** Describe the effect of adding a small amount of $\mathrm{NaOH}$ to a buffer solution containing $\mathrm{CH_3COOH}$ and $\mathrm{CH_3COONa}$.

*If you get this wrong, revise: Buffers*

<details>
<summary>Solution</summary>

The added $\mathrm{OH^-$ reacts with the weak acid component:

$$\mathrm{CH_3COOH} + \mathrm{OH^-} \to \mathrm{CH_3COO^-} + \mathrm{H_2O}$$

This converts some $\mathrm{CH_3COOH}$ to $\mathrm{CH_3COO^-}$. The ratio $[\mathrm{CH_3COO^-}]/[\mathrm{CH_3COOH}]$ increases slightly, but the pH changes only minimally because the buffer system absorbs the added base. The buffer resists large pH changes.

</details>

</details>
