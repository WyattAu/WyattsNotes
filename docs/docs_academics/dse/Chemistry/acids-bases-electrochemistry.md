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

- Acid: produces $\text{H}^+$ (or $\text{H}_3\text{O}^+$) in aqueous solution
- Base: produces $\text{OH}^-$ in aqueous solution

**Bronsted-Lowry Theory:**

- Acid: proton ($\text{H}^+$) donor
- Base: proton ($\text{H}^+$) acceptor

**Lewis Theory:**

- Acid: electron pair acceptor
- Base: electron pair donor

:::info
In the DSE syllabus, the Bronsted-Lowry definition is most commonly used. Always identify
the proton donor and proton acceptor in acid-base reactions.
:::

### Conjugate Acid-Base Pairs

When an acid donates a proton, the remaining species is its conjugate base. When a base accepts a
proton, the resulting species is its conjugate acid.

$$\text{HA} + \text{B} \rightleftharpoons \text{A}^- + \text{BH}^+$$

- $\text{HA}$ and $\text{A}^-$ form a conjugate acid-base pair
- $\text{B}$ and $\text{BH}^+$ form a conjugate acid-base pair

### Strong and Weak Acids

| Property                   | Strong Acids                                          | Weak Acids                                                     |
| -------------------------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| Degree of ionisation       | Nearly 100%                                           | Partial                                                        |
| Examples                   | $\text{HCl}$, $\text{HNO}_3$, $\text{H}_2\text{SO}_4$ | $\text{CH}_3\text{COOH}$, $\text{H}_2\text{CO}_3$, $\text{HF}$ |
| pH at same concentration   | Lower pH                                              | Higher pH                                                      |
| Conductivity               | Higher                                                | Lower                                                          |
| Reaction rate (same conc.) | Faster                                                | Slower                                                         |

:::warning
A strong acid is NOT the same as a concentrated acid. Strength refers to the degree of
ionisation; concentration refers to the amount dissolved per unit volume. A dilute solution of a
strong acid can have a higher pH than a concentrated solution of a weak acid.
:::

### Common Strong Acids and Bases

**Strong acids:** $\text{HCl}$, $\text{HBr}$, $\text{HI}$, $\text{HNO}_3$, $\text{H}_2\text{SO}_4$,
$\text{HClO}_4$

**Strong bases:** Group 1 hydroxides ($\text{NaOH}$, $\text{KOH}$), $\text{Ba(OH)}_2$

---

## The pH Scale

### Definition of pH

$$\text{pH} = -\log_{10}[\text{H}^+]$$

Where $[\text{H}^+]$ is the concentration of hydrogen ions in mol/dm$^3$.

### pH of Water

Pure water at $25^\circ\text{C}$: $[\text{H}^+] = [\text{OH}^-] = 10^{-7}$ mol/dm$^3$, so
$\text{pH} = 7$.

The ionic product of water:

$$K_w = [\text{H}^+][\text{OH}^-] = 10^{-14} \text{ at } 25^\circ\text{C}$$

This relationship always holds for aqueous solutions at $25^\circ\text{C}$.

### Worked Example 1

Find the pH of a $0.05 \text{ mol/dm}^3$ solution of $\text{HCl}$.

$\text{HCl}$ is a strong acid, so it is fully ionised:

$$[\text{H}^+] = 0.05 \text{ mol/dm}^3$$

$$\text{pH} = -\log_{10}(0.05) = -\log_{10}(5 \times 10^{-2}) = 2 - \log_{10}5 = 2 - 0.699 = 1.30$$

### Worked Example 2

Find the pH of a $0.1 \text{ mol/dm}^3$ solution of $\text{NaOH}$.

$\text{NaOH}$ is a strong base, fully ionised:

$$[\text{OH}^-] = 0.1 \text{ mol/dm}^3$$

$$[\text{H}^+] = \frac{K_w}{[\text{OH}^-]} = \frac{10^{-14}}{0.1} = 10^{-13} \text{ mol/dm}^3$$

$$\text{pH} = -\log_{10}(10^{-13}) = 13$$

### Worked Example 3

Find the pH of a $0.1 \text{ mol/dm}^3$ solution of $\text{CH}_3\text{COOH}$
($K_a = 1.8 \times 10^{-5}$).

For a weak acid:

$$K_a = \frac{[\text{H}^+][\text{CH}_3\text{COO}^-]}{[\text{CH}_3\text{COOH}]}$$

Assuming $[\text{H}^+] = x$:

$$1.8 \times 10^{-5} = \frac{x^2}{0.1}$$

$$x^2 = 1.8 \times 10^{-6}$$

$$x = 1.34 \times 10^{-3} \text{ mol/dm}^3$$

$$\text{pH} = -\log_{10}(1.34 \times 10^{-3}) = 2.87$$

:::tip
For weak acid calculations, you can assume
$[\text{HA}]_{\text{initial}} \approx [\text{HA}]_{\text{equilibrium}}$ only when the degree of
ionisation is small (typically when $K_a \lt 10^{-4}$). This simplification is valid for most
DSE-level problems.
:::

### pH Scale Summary

| pH   | Nature           |
| ---- | ---------------- |
| 0-6  | Acidic           |
| 7    | Neutral          |
| 8-14 | Alkaline (basic) |

Each unit change in pH represents a **tenfold** change in $[\text{H}^+]$.

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
7. Repeat until concordant results are obtained (within $0.10 \text{ cm}^3$)

### Indicators

| Indicator           | Colour in Acid | Colour in Base | pH Range   |
| ------------------- | -------------- | -------------- | ---------- |
| Methyl orange       | Red            | Yellow         | 3.1 - 4.4  |
| Phenolphthalein     | Colourless     | Pink           | 8.3 - 10.0 |
| Universal indicator | Red / Orange   | Blue / Violet  | 1 - 14     |

### Worked Example 4

$25.0 \text{ cm}^3$ of $\text{NaOH}$ solution is titrated with $0.100 \text{ mol/dm}^3$
$\text{HCl}$. The average titre is $20.0 \text{ cm}^3$. Find the concentration of $\text{NaOH}$.

$$\text{HCl} + \text{NaOH} \to \text{NaCl} + \text{H}_2\text{O}$$

Moles of $\text{HCl} = 0.100 \times \frac{20.0}{1000} = 0.00200 \text{ mol}$

Since the mole ratio is 1:1:

Moles of $\text{NaOH} = 0.00200 \text{ mol}$

$$[\text{NaOH}] = \frac{0.00200}{25.0/1000} = \frac{0.00200}{0.0250} = 0.0800 \text{ mol/dm}^3$$

---

## Salt Preparation

### Solubility Rules

| Soluble                                | Exceptions                                                           |
| -------------------------------------- | -------------------------------------------------------------------- |
| All Group 1 and ammonium salts         | —                                                                    |
| All nitrates                           | —                                                                    |
| All chlorides                          | $\text{PbCl}_2$, $\text{AgCl}$, $\text{Hg}_2\text{Cl}_2$ (insoluble) |
| All sulphates                          | $\text{BaSO}_4$, $\text{PbSO}_4$, $\text{CaSO}_4$ (slightly soluble) |
| Sodium, potassium, ammonium carbonates | —                                                                    |
| Sodium, potassium, ammonium hydroxides | —                                                                    |

| Insoluble       | Exceptions                                               |
| --------------- | -------------------------------------------------------- |
| Most carbonates | Group 1 and ammonium                                     |
| Most hydroxides | Group 1, $\text{Ba(OH)}_2$, $\text{Ca(OH)}_2$ (slightly) |
| Most oxides     | Group 1                                                  |

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

1. Add dilute $\text{H}_2\text{SO}_4$ to a beaker
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

1. Elements in their standard state have oxidation number 0 (e.g., $\text{Na}$, $\text{Cl}_2$,
   $\text{O}_2$)
2. Simple ions have oxidation number equal to their charge (e.g., $\text{Na}^+ = +1$,
   $\text{Cl}^- = -1$)
3. Oxygen is usually -2 (except in peroxides: -1; in $\text{OF}_2$: +2)
4. Hydrogen is usually +1 (except in metal hydrides: -1)
5. The sum of oxidation numbers in a neutral compound is 0
6. The sum of oxidation numbers in a polyatomic ion equals the charge on the ion

### Worked Example 6

Find the oxidation numbers of each element in $\text{KMnO}_4$.

Let the oxidation number of Mn be $x$.

$$+1 + x + 4(-2) = 0$$

$$1 + x - 8 = 0$$

$$x = +7$$

Oxidation numbers: $\text{K} = +1$, $\text{Mn} = +7$, $\text{O} = -2$.

### Balancing Redox Equations (Ion-Electron Method)

1. Split the equation into two half-equations (oxidation and reduction)
2. Balance atoms other than $\text{O}$ and $\text{H}$
3. Balance $\text{O}$ by adding $\text{H}_2\text{O}$
4. Balance $\text{H}$ by adding $\text{H}^+$
5. Balance charge by adding electrons ($e^-$)
6. Multiply half-equations so that the electrons cancel
7. Add the half-equations and simplify

### Worked Example 7

Balance the reaction: $\text{MnO}_4^- + \text{Fe}^{2+} \to \text{Mn}^{2+} + \text{Fe}^{3+}$ (in
acidic solution)

**Reduction half-equation:**

$$\text{MnO}_4^- \to \text{Mn}^{2+}$$

$$\text{MnO}_4^- + 8\text{H}^+ \to \text{Mn}^{2+} + 4\text{H}_2\text{O}$$

Charge: $-1 + 8 = +7$ (left), $+2$ (right). Add $5e^-$ to left:

$$\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}$$

**Oxidation half-equation:**

$$\text{Fe}^{2+} \to \text{Fe}^{3+} + e^-$$

Multiply by 5:

$$5\text{Fe}^{2+} \to 5\text{Fe}^{3+} + 5e^-$$

**Combine:**

$$\text{MnO}_4^- + 8\text{H}^+ + 5\text{Fe}^{2+} \to \text{Mn}^{2+} + 4\text{H}_2\text{O} + 5\text{Fe}^{3+}$$

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

$$\text{M}^{n+} + ne^- \to \text{M}$$

At the anode (oxidation): Non-metal ions lose electrons and are discharged.

$$\text{X}^{n-} \to \frac{n}{2}\text{X}_2 + ne^-$$

### Worked Example 8

Describe the electrolysis of molten lead(II) bromide, $\text{PbBr}_2$.

At the cathode (-): $\text{Pb}^{2+} + 2e^- \to \text{Pb}$ (grey solid)

At the anode (+): $2\text{Br}^- \to \text{Br}_2 + 2e^-$ (orange-brown gas)

### Electrolysis of Aqueous Solutions

When an aqueous solution is electrolysed, both the dissolved ions and water molecules can be
discharged. The **discharge series** determines which species is preferentially discharged:

**At the cathode (less reactive metal is discharged):**

$$\text{K}^+ \lt \text{Na}^+ \lt \text{Ca}^{2+} \lt \text{Mg}^{2+} \lt \text{Al}^{3+} \lt \text{Zn}^{2+} \lt \text{Fe}^{2+} \lt \text{Ni}^{2+} \lt \text{Sn}^{2+} \lt \text{Pb}^{2+} \lt \text{H}^+ \lt \text{Cu}^{2+} \lt \text{Ag}^+ \lt \text{Au}^+$$

Ions above $\text{H}^+$: $\text{H}_2\text{O}$ is reduced instead
($2\text{H}_2\text{O} + 2e^- \to \text{H}_2 + 2\text{OH}^-$)

Ions below $\text{H}^+$: The metal ion is discharged

**At the anode:**

$$\text{SO}_4^{2-} \lt \text{NO}_3^- \lt \text{Cl}^- \lt \text{Br}^- \lt \text{I}^- \lt \text{OH}^-$$

Sulphate and nitrate: $\text{H}_2\text{O}$ is oxidised instead
($4\text{OH}^- \to \text{O}_2 + 2\text{H}_2\text{O} + 4e^-$, or
$2\text{H}_2\text{O} \to \text{O}_2 + 4\text{H}^+ + 4e^-$)

Halides ($\text{Cl}^-$, $\text{Br}^-$, $\text{I}^-$): The halogen is discharged

:::warning
Concentration matters. In concentrated chloride solutions, $\text{Cl}^-$ is discharged at
the anode instead of $\text{OH}^-$. In dilute chloride solutions, $\text{OH}^-$ may be
preferentially discharged.
:::

### Worked Example 9

Describe the electrolysis of concentrated aqueous $\text{NaCl}$ using carbon electrodes.

At the cathode: $\text{Na}^+$ is above $\text{H}^+$ in the discharge series, so $\text{H}_2\text{O}$
is reduced:

$$2\text{H}_2\text{O} + 2e^- \to \text{H}_2 + 2\text{OH}^-$$

At the anode: Concentrated $\text{Cl}^-$ is discharged (halides above $\text{OH}^-$ in concentrated
solution):

$$2\text{Cl}^- \to \text{Cl}_2 + 2e^-$$

Overall: $2\text{H}_2\text{O} + 2\text{NaCl} \to \text{H}_2 + \text{Cl}_2 + 2\text{NaOH}$

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
- $F$ = Faraday constant $= 96500 \text{ C/mol}$

### Second Law

When the same quantity of electricity is passed through different electrolytes, the masses of
different substances liberated are proportional to their equivalent masses ($M/n$).

### Worked Example 10

What mass of copper is deposited when a current of $2.0 \text{ A}$ is passed through $\text{CuSO}_4$
solution for 30 minutes?

$$Q = It = 2.0 \times 30 \times 60 = 3600 \text{ C}$$

$$\text{Cu}^{2+} + 2e^- \to \text{Cu} \quad (n = 2)$$

$$m = \frac{Q \times M}{nF} = \frac{3600 \times 63.5}{2 \times 96500} = \frac{228600}{193000} = 1.18 \text{ g}$$

### Worked Example 11

What volume of oxygen (at r.t.p.) is produced when a current of $3.0 \text{ A}$ is passed through
dilute $\text{H}_2\text{SO}_4$ for 20 minutes?

$$Q = 3.0 \times 20 \times 60 = 3600 \text{ C}$$

At the anode: $4\text{OH}^- \to \text{O}_2 + 2\text{H}_2\text{O} + 4e^-$ ($n = 4$)

Moles of $\text{O}_2 = \frac{Q}{nF} = \frac{3600}{4 \times 96500} = 0.00933 \text{ mol}$

Volume at r.t.p. ($1 \text{ mol} = 24.0 \text{ dm}^3$):

$$V = 0.00933 \times 24.0 = 0.224 \text{ dm}^3 = 224 \text{ cm}^3$$

---

## Electrochemical Cells

### Voltaic (Galvanic) Cells

A voltaic cell converts chemical energy to electrical energy through a spontaneous redox reaction.

### Structure of a Voltaic Cell

1. Two half-cells, each containing an electrode in contact with an electrolyte
2. A metal wire connecting the two electrodes (external circuit)
3. A salt bridge or porous barrier connecting the two electrolytes (internal circuit)

**Salt bridge:** Contains an inert electrolyte (e.g., $\text{KNO}_3$) that allows ions to flow
without the solutions mixing directly.

### Electrode Potentials

The **standard electrode potential** ($E^\circ$) is the potential difference between a half-cell and
the standard hydrogen electrode (SHE) under standard conditions (298 K, 1 mol/dm$^3$, 1 atm).

The SHE is assigned $E^\circ = 0.00 \text{ V}$.

### Standard Cell Potential

$$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$$

Where:

- The cathode has the more positive (less negative) $E^\circ$ value (reduction occurs)
- The anode has the less positive (more negative) $E^\circ$ value (oxidation occurs)

If $E^\circ_{\text{cell}} \gt 0$, the reaction is spontaneous.

### Worked Example 12

A cell is constructed from a $\text{Zn}^{2+}/\text{Zn}$ half-cell ($E^\circ = -0.76 \text{ V}$) and
a $\text{Cu}^{2+}/\text{Cu}$ half-cell ($E^\circ = +0.34 \text{ V}$). Find the cell potential and
write the overall equation.

Copper has the more positive $E^\circ$, so reduction occurs at the copper electrode (cathode).

$$E^\circ_{\text{cell}} = 0.34 - (-0.76) = 1.10 \text{ V}$$

Cathode (reduction): $\text{Cu}^{2+} + 2e^- \to \text{Cu}$

Anode (oxidation): $\text{Zn} \to \text{Zn}^{2+} + 2e^-$

Overall: $\text{Zn} + \text{Cu}^{2+} \to \text{Zn}^{2+} + \text{Cu}$

### The Electrochemical Series

The electrochemical series ranks half-reactions by their standard electrode potentials:

| Half-reaction                         | $E^\circ$ (V) |
| ------------------------------------- | ------------- |
| $\text{Li}^+ + e^- \to \text{Li}$     | -3.03         |
| $\text{K}^+ + e^- \to \text{K}$       | -2.93         |
| $\text{Na}^+ + e^- \to \text{Na}$     | -2.71         |
| $\text{Zn}^{2+} + 2e^- \to \text{Zn}$ | -0.76         |
| $\text{Fe}^{2+} + 2e^- \to \text{Fe}$ | -0.44         |
| $2\text{H}^+ + 2e^- \to \text{H}_2$   | 0.00          |
| $\text{Cu}^{2+} + 2e^- \to \text{Cu}$ | +0.34         |
| $\text{Ag}^+ + e^- \to \text{Ag}$     | +0.80         |
| $\text{Au}^{3+} + 3e^- \to \text{Au}$ | +1.50         |

**More negative $E^\circ$:** Metal is a stronger reducing agent (more easily oxidised).

**More positive $E^\circ$:** Ion is a stronger oxidising agent (more easily reduced).

---

## Summary Table

| Topic          | Key Formula                                                                 | Key Concept                 |
| -------------- | --------------------------------------------------------------------------- | --------------------------- |
| pH             | $\text{pH} = -\log_{10}[\text{H}^+]$                                        | Measures acidity            |
| $K_w$          | $K_w = [\text{H}^+][\text{OH}^-] = 10^{-14}$                                | Ionic product of water      |
| $K_a$          | $K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$                        | Acid dissociation constant  |
| Titration      | $c_1V_1 = c_2V_2$ (for 1:1 reactions)                                       | Concentration determination |
| Faraday's Law  | $m = \frac{Q \times M}{nF}$                                                 | Mass from electrolysis      |
| Cell potential | $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ | Voltaic cell voltage        |

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

**Question 1:** $25.0 \text{ cm}^3$ of $0.200 \text{ mol/dm}^3$ $\text{H}_2\text{SO}_4$ is
neutralised by $\text{NaOH}$ solution. If $20.0 \text{ cm}^3$ of $\text{NaOH}$ is required, find its
concentration.

$$\text{H}_2\text{SO}_4 + 2\text{NaOH} \to \text{Na}_2\text{SO}_4 + 2\text{H}_2\text{O}$$

Moles of $\text{H}_2\text{SO}_4 = 0.200 \times 0.0250 = 0.00500 \text{ mol}$

Moles of $\text{NaOH} = 2 \times 0.00500 = 0.0100 \text{ mol}$

$$[\text{NaOH}] = \frac{0.0100}{0.0200} = 0.500 \text{ mol/dm}^3$$

**Question 2:** A current of $5.0 \text{ A}$ is passed through molten $\text{Al}_2\text{O}_3$ for 2
hours. What mass of aluminium is produced?

$$Q = 5.0 \times 2 \times 3600 = 36000 \text{ C}$$

$$\text{Al}^{3+} + 3e^- \to \text{Al} \quad (n = 3)$$

$$m = \frac{36000 \times 27.0}{3 \times 96500} = \frac{972000}{289500} = 3.36 \text{ g}$$

**Question 3:** Assign oxidation numbers to all elements in $\text{K}_2\text{Cr}_2\text{O}_7$.

$2(+1) + 2x + 7(-2) = 0$

$2 + 2x - 14 = 0$

$x = +6$

Oxidation numbers: $\text{K} = +1$, $\text{Cr} = +6$, $\text{O} = -2$.

**Question 4:** Balance the reaction between $\text{MnO}_4^-$ and $\text{C}_2\text{O}_4^{2-}$ in
acidic solution.

Reduction: $\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}$

Oxidation: $\text{C}_2\text{O}_4^{2-} \to 2\text{CO}_2 + 2e^-$

Multiply oxidation by 5 and reduction by 2:

$2\text{MnO}_4^- + 16\text{H}^+ + 10e^- \to 2\text{Mn}^{2+} + 8\text{H}_2\text{O}$

$5\text{C}_2\text{O}_4^{2-} \to 10\text{CO}_2 + 10e^-$

Overall:
$2\text{MnO}_4^- + 5\text{C}_2\text{O}_4^{2-} + 16\text{H}^+ \to 2\text{Mn}^{2+} + 10\text{CO}_2 + 8\text{H}_2\text{O}$

**Question 5:** A cell is made from $\text{Zn}^{2+}/\text{Zn}$ ($E^\circ = -0.76 \text{ V}$) and
$\text{Ag}^+/\text{Ag}$ ($E^\circ = +0.80 \text{ V}$). Write the overall equation and calculate the
cell potential.

Silver has the more positive $E^\circ$, so it is the cathode.

$$E^\circ_{\text{cell}} = 0.80 - (-0.76) = 1.56 \text{ V}$$

Cathode: $\text{Ag}^+ + e^- \to \text{Ag}$

Anode: $\text{Zn} \to \text{Zn}^{2+} + 2e^-$

Multiply cathode by 2: $2\text{Ag}^+ + 2e^- \to 2\text{Ag}$

Overall: $\text{Zn} + 2\text{Ag}^+ \to \text{Zn}^{2+} + 2\text{Ag}$
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

**Acidic buffer** (e.g., $\text{CH}_3\text{COOH}$ / $\text{CH}_3\text{COONa}$):

When acid ($\text{H}^+$) is added:
$$\text{CH}_3\text{COO}^- + \text{H}^+ \to \text{CH}_3\text{COOH}$$ The conjugate base neutralises
the added $\text{H}^+$.

When base ($\text{OH}^-$) is added:
$$\text{CH}_3\text{COOH} + \text{OH}^- \to \text{CH}_3\text{COO}^- + \text{H}_2\text{O}$$ The weak
acid neutralises the added $\text{OH}^-$.

### Henderson-Hasselbalch Equation

$$\text{pH} = \text{p}K_a + \log_{10}\left(\frac{[\text{A}^-]}{[\text{HA}]}\right)$$

Where:

- $\text{p}K_a = -\log_{10}K_a$
- $[\text{A}^-]$ = concentration of the conjugate base
- $[\text{HA}]$ = concentration of the weak acid

### Worked Example 12

A buffer contains $0.1 \text{ mol/dm}^3$ $\text{CH}_3\text{COOH}$ ($K_a = 1.8 \times 10^{-5}$) and
$0.2 \text{ mol/dm}^3$ $\text{CH}_3\text{COONa}$. Calculate the pH.

$$\text{p}K_a = -\log_{10}(1.8 \times 10^{-5}) = 4.74$$

$$\text{pH} = 4.74 + \log_{10}\left(\frac{0.2}{0.1}\right) = 4.74 + \log_{10}(2) = 4.74 + 0.30 = 5.04$$

### Worked Example 13

What is the pH of the buffer after adding $0.01 \text{ mol}$ of $\text{HCl}$ to $1 \text{ dm}^3$ of
the buffer in Worked Example 12?

$\text{HCl}$ reacts with $\text{CH}_3\text{COO}^-$:

New $[\text{CH}_3\text{COO}^-] = 0.2 - 0.01 = 0.19 \text{ mol/dm}^3$

New $[\text{CH}_3\text{COOH}] = 0.1 + 0.01 = 0.11 \text{ mol/dm}^3$

$$\text{pH} = 4.74 + \log_{10}\left(\frac{0.19}{0.11}\right) = 4.74 + \log_{10}(1.727) = 4.74 + 0.237 = 4.98$$

The pH changed from 5.04 to 4.98, a change of only 0.06. Without the buffer, adding
$0.01 \text{ mol}$ of $\text{HCl}$ to $1 \text{ dm}^3$ of water would give pH = 2.

:::info
Buffers are most effective when $[\text{HA}] = [\text{A}^-]$, i.e., when
$\text{pH} = \text{p}K_a$. The effective buffering range is approximately $\text{p}K_a \pm 1$.
:::

---

## Indicators and pH Curves

### Strong Acid - Strong Base Titration

- Equivalence point at pH = 7
- Sharp change in pH around the equivalence point
- Suitable indicators: phenolphthalein, methyl orange, universal indicator

### Weak Acid - Strong Base Titration

- Equivalence point at pH \gt 7 (salt hydrolysis produces $\text{OH}^-$)
- Less sharp change in pH
- Suitable indicator: phenolphthalein (pH range 8.3-10.0)

### Strong Acid - Weak Base Titration

- Equivalence point at pH \lt 7 (salt hydrolysis produces $\text{H}^+$)
- Suitable indicator: methyl orange (pH range 3.1-4.4)

### Worked Example 14

$25.0 \text{ cm}^3$ of $0.100 \text{ mol/dm}^3$ ethanoic acid ($\text{CH}_3\text{COOH}$,
$K_a = 1.8 \times 10^{-5}$) is titrated with $0.100 \text{ mol/dm}^3$ $\text{NaOH}$. Find the pH at
the equivalence point.

At equivalence point: moles of $\text{NaOH}$ = moles of $\text{CH}_3\text{COOH}$

Moles of $\text{CH}_3\text{COOH} = 0.100 \times 0.0250 = 0.00250 \text{ mol}$

Volume of $\text{NaOH}$ needed = $0.0250 \text{ dm}^3 = 25.0 \text{ cm}^3$

Total volume = $50.0 \text{ cm}^3 = 0.0500 \text{ dm}^3$

The salt $\text{CH}_3\text{COONa}$ is formed. Concentration of $\text{CH}_3\text{COO}^-$:

$$[\text{CH}_3\text{COO}^-] = \frac{0.00250}{0.0500} = 0.0500 \text{ mol/dm}^3$$

The $\text{CH}_3\text{COO}^-$ ion hydrolyses:

$$\text{CH}_3\text{COO}^- + \text{H}_2\text{O} \rightleftharpoons \text{CH}_3\text{COOH} + \text{OH}^-$$

$$K_b = \frac{K_w}{K_a} = \frac{10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}$$

$$K_b = \frac{[\text{CH}_3\text{COOH}][\text{OH}^-]}{[\text{CH}_3\text{COO}^-]} = \frac{x^2}{0.0500} = 5.56 \times 10^{-10}$$

$$x^2 = 2.78 \times 10^{-11}$$

$$x = 5.27 \times 10^{-6} \text{ mol/dm}^3$$

$$\text{pOH} = -\log_{10}(5.27 \times 10^{-6}) = 5.28$$

$$\text{pH} = 14 - 5.28 = 8.72$$

---

## Corrosion and Its Prevention

### Rusting of Iron

Rusting is an electrochemical process that requires both water and oxygen.

At the anode (oxidation):

$$\text{Fe} \to \text{Fe}^{2+} + 2e^-$$

At the cathode (reduction):

$$\text{O}_2 + 2\text{H}_2\text{O} + 4e^- \to 4\text{OH}^-$$

The $\text{Fe}^{2+}$ reacts with $\text{OH}^-$ and oxygen to form hydrated iron(III) oxide (rust):

$$4\text{Fe}^{2+} + 4\text{OH}^- + \text{O}_2 + 2\text{H}_2\text{O} \to 4\text{Fe}(\text{OH})_3$$

### Methods of Prevention

| Method                 | Principle                                               |
| ---------------------- | ------------------------------------------------------- |
| Painting / Oil coating | Barrier to water and oxygen                             |
| Galvanising            | Coating with zinc (sacrificial protection)              |
| Alloying               | Adding chromium and nickel (stainless steel)            |
| Sacrificial anode      | Attaching a more reactive metal (e.g., Mg, Zn)          |
| Cathodic protection    | Applying negative voltage to make the metal the cathode |

### Sacrificial Protection

When iron is in contact with a more reactive metal (e.g., zinc), the more reactive metal oxidises
preferentially (becomes the anode), protecting the iron (which becomes the cathode).

Zinc (anode): $\text{Zn} \to \text{Zn}^{2+} + 2e^-$

Iron (cathode): $\text{O}_2 + 2\text{H}_2\text{O} + 4e^- \to 4\text{OH}^-$

---

## Additional Practice Questions

<details>
<summary>More Exam-Style Problems</summary>

**Question 6:** Calculate the pH of a buffer made by mixing $100 \text{ cm}^3$ of
$0.20 \text{ mol/dm}^3$ $\text{NH}_3$ ($K_b = 1.8 \times 10^{-5}$) with $100 \text{ cm}^3$ of
$0.10 \text{ mol/dm}^3$ $\text{HCl}$.

$\text{NH}_3$ reacts with $\text{HCl}$: $\text{NH}_3 + \text{HCl} \to \text{NH}_4^+ + \text{Cl}^-$

Moles of $\text{NH}_3 = 0.20 \times 0.100 = 0.0200 \text{ mol}$

Moles of $\text{HCl} = 0.10 \times 0.100 = 0.0100 \text{ mol}$

Remaining $\text{NH}_3 = 0.0200 - 0.0100 = 0.0100 \text{ mol}$

$\text{NH}_4^+$ formed $= 0.0100 \text{ mol}$

Total volume $= 0.200 \text{ dm}^3$

$[\text{NH}_3] = 0.0500 \text{ mol/dm}^3$, $[\text{NH}_4^+] = 0.0500 \text{ mol/dm}^3$

$\text{p}K_a = 14 - \text{p}K_b = 14 - (-\log_{10}(1.8 \times 10^{-5})) = 14 - 4.74 = 9.26$

$\text{pH} = 9.26 + \log_{10}\left(\frac{0.0500}{0.0500}\right) = 9.26 + 0 = 9.26$

**Question 7:** Explain why steel wool rusts faster when in contact with less active metals like
copper.

Copper is less reactive than iron. When in contact, iron acts as the anode and copper as the
cathode. The iron oxidises more rapidly, accelerating the rusting process. This is an example of
**electrochemical corrosion** where the less reactive metal provides a surface for the reduction
reaction.

**Question 8:** A current of $4.0 \text{ A}$ is passed through $\text{CuSO}_4$ solution using copper
electrodes. The mass of the anode decreased by $2.38 \text{ g}$ after a certain time. Calculate the
time for which the current was passed.

$$m = \frac{Q \times M}{nF}$$

$$2.38 = \frac{Q \times 63.5}{2 \times 96500}$$

$$Q = \frac{2.38 \times 2 \times 96500}{63.5} = \frac{459340}{63.5} = 7234 \text{ C}$$

$$t = \frac{Q}{I} = \frac{7234}{4.0} = 1808.5 \text{ s} \approx 30.1 \text{ minutes}$$
</details>

:::

:::

:::

:::

:::
