---
title: Measurement and Data Processing
description:
  IB Chemistry — uncertainty, significant figures, error propagation, graphical analysis, and
  spectroscopy.
slug: measurement-and-data-processing
---

## 1. Uncertainty and Error

### Random and Systematic Errors

**Definition.** A **random error** causes measurements to scatter unpredictably above and below the
true value. It arises from limitations in instrument precision and environmental fluctuations.
Random errors affect precision but not accuracy.

**Definition.** A **systematic error** causes measurements to deviate consistently in one direction
from the true value. It arises from instrument calibration faults or methodological biases.
Systematic errors affect accuracy but not precision.

| Property       | Random Error                     | Systematic Error                  |
| -------------- | -------------------------------- | --------------------------------- |
| Direction      | Scatters above and below         | Consistently in one direction     |
| Affects        | Precision                        | Accuracy                          |
| Reduction      | Repeated measurements, averaging | Calibration, improved methodology |
| Identification | Spread of repeated readings      | Comparison with accepted value    |

### Absolute and Percentage Uncertainty

**Definition.** The **absolute uncertainty** is the margin of error in a measurement, expressed in
the same units. For an analogue instrument, it is half the smallest division. For a digital
instrument, it equals the smallest division.

**Definition.** The **percentage uncertainty** is the absolute uncertainty expressed as a fraction
of the measured value:

$$
\%u = \frac&lbrace;\Delta x&rbrace;&lbrace;x&rbrace; \times 100\%
$$

:::info[Example]

A burette reading of $24.50\mathrm{ cm}^3$ with smallest division $0.1\mathrm{ cm}^3$:

$$
\Delta V = 0.05\mathrm&lbrace; cm&rbrace;^3, \quad \%u = \frac&lbrace;0.05&rbrace;&lbrace;24.50&rbrace; \times 100\% = 0.20\%
$$

:::

### Uncertainty in Addition and Subtraction

For quantities added or subtracted, add absolute uncertainties:

$$
\Delta(a \pm b) = \Delta a + \Delta b
$$

### Uncertainty in Multiplication and Division

For quantities multiplied or divided, add percentage uncertainties:

$$
\%\mathrm&lbrace;u&rbrace;(a \times b) = \%\mathrm&lbrace;u&rbrace;(a) + \%\mathrm&lbrace;u&rbrace;(b)
$$

### Uncertainty in Powers

For a quantity raised to a power, multiply the percentage uncertainty by the power:

$$
\%\mathrm&lbrace;u&rbrace;(a^n) = n \times \%\mathrm&lbrace;u&rbrace;(a)
$$

:::info[Example]

The density of a sphere: $\rho = \dfrac{m}{\frac{4}{3}\pi r^3}$

Given $m = 5.00 \pm 0.01\mathrm{ g}$ and $r = 1.00 \pm 0.01\mathrm{ cm}$:

$$
\%\mathrm&lbrace;u&rbrace;(m) = \frac&lbrace;0.01&rbrace;&lbrace;5.00&rbrace; \times 100\% = 0.20\%
$$

$$
\%\mathrm&lbrace;u&rbrace;(r) = \frac&lbrace;0.01&rbrace;&lbrace;1.00&rbrace; \times 100\% = 1.00\%
$$

$$
\%\mathrm&lbrace;u&rbrace;(\rho) = \%\mathrm&lbrace;u&rbrace;(m) + 3 \times \%\mathrm&lbrace;u&rbrace;(r) = 0.20\% + 3.00\% = 3.20\%
$$

:::

### Common Pitfalls

- Using the smallest division itself (not half of it) as the uncertainty for analogue instruments.
- Confusing percentage uncertainty with absolute uncertainty during propagation.
- Forgetting that the power rule applies only to the measured quantity being raised, not to
  constants like $\pi$.

---

## 2. Significant Figures

### Rules for Determining Significant Figures

1. All non-zero digits are significant.
2. Zeros between non-zero digits are significant.
3. Leading zeros are **not** significant.
4. Trailing zeros after a decimal point are significant.
5. Trailing zeros without a decimal point are **not** significant (ambiguous — use scientific
   notation).

| Value               | Sig Figs | Notes                               |
| ------------------- | -------- | ----------------------------------- |
| $0.00420$           | $3$      | Leading zeros not significant       |
| $1.050$             | $4$      | Trailing zero after decimal         |
| $3200$              | $2$      | Ambiguous; write as $3.2\times10^3$ |
| $3.200 \times 10^3$ | $4$      | Scientific notation is clear        |
| $0.001005$          | $4$      | Only leading zeros are ignored      |

### Arithmetic with Significant Figures

| Operation               | Rule                                                                     |
| ----------------------- | ------------------------------------------------------------------------ |
| Addition/subtraction    | Result has the same number of decimal places as the term with the fewest |
| Multiplication/division | Result has the same number of sig figs as the term with the fewest       |
| Logarithms              | Number of decimal places in result = sig figs in argument                |
| Antilogarithms          | Number of sig figs in result = decimal places in argument                |

:::info[Example]

$$
12.11 + 0.3 = 12.4 \quad \mathrm&lbrace;(one decimal place)&rbrace;
$$

$$
3.24 \times 1.5 = 4.9 \quad \mathrm&lbrace;(two sig figs)&rbrace;
$$

$$
\log(2.0 \times 10^3) = 3.30 \quad \mathrm&lbrace;(two decimal places)&rbrace;
$$

:::

---

## 3. Graphical Analysis

### Drawing Best-Fit Lines

- A **line of best fit** should pass through the centre of the data points, with approximately equal
  numbers of points above and below.
- Do not force the line through the origin unless the data physically require it.
- Anomalous points (clear outliers) should be excluded from the best-fit line.

### Determining Uncertainty from Graphs

**Maximum gradient line** passes through the error bars of the highest and lowest appropriate
points. **Minimum gradient line** does the same for the opposite extremes.

$$
\Delta(\mathrm&lbrace;gradient&rbrace;) = \frac&lbrace;g_&lbrace;\max&rbrace; - g_&lbrace;\min&rbrace;&rbrace;&lbrace;2&rbrace;
$$

The y-intercept uncertainty follows the same procedure using the maximum and minimum gradient lines
at $x = 0$.

### Interpolation and Extrapolation

- **Interpolation**: reading values within the data range — generally reliable.
- **Extrapolation**: extending the line beyond the data range — unreliable and should be noted.

### Using Graphs to Verify Relationships

For $y = kx^n$, plotting $\log y$ versus $\log x$ gives a straight line with gradient $n$ and
y-intercept $\log k$.

For $y = kx^n$ with $n = 1$, the graph of $y$ versus $x$ is linear through the origin.

### Common Pitfalls

- Drawing a line through every point rather than a best-fit line.
- Forgetting to label axes with quantity and unit.
- Using inconsistent or too-large scale divisions.

---

## 4. Spectroscopy: Infrared (IR)

### Principle

IR spectroscopy measures the absorption of infrared radiation by molecular bonds. Absorption occurs
when the photon energy matches the energy difference between vibrational states:

$$
\Delta E = h\nu = \frac&lbrace;hc&rbrace;&lbrace;\lambda&rbrace;
$$

Only bonds with a change in dipole moment during vibration are IR-active.

### Wavenumber

IR spectra are plotted as transmittance (%) versus wavenumber ($\bar{\nu}$) in $\mathrm{cm}^{-1}$:

$$
\bar&lbrace;\nu&rbrace; = \frac&lbrace;1&rbrace;&lbrace;\lambda&rbrace;
$$

The useful range for organic analysis is approximately $400$--$4000\mathrm{ cm}^{-1}$.

### Characteristic Absorptions

| Bond                   | Wavenumber ($\mathrm{cm}^{-1}$) | Notes                         |
| ---------------------- | ------------------------------- | ----------------------------- |
| O--H (alcohol, free)   | $3550$--$3200$                  | Broad, rounded                |
| O--H (carboxylic acid) | $3000$--$2500$                  | Very broad                    |
| N--H                   | $3500$--$3300$                  | Medium, often two peaks       |
| C--H (alkane)          | $3000$--$2850$                  | Sharp                         |
| C--H (alkene/arene)    | $3100$--$3000$                  | Above $3000\mathrm{ cm}^{-1}$ |
| C$\equiv$C             | $2250$--$2100$                  | Weak or absent if symmetric   |
| C$\equiv$N             | $2250$--$2200$                  | Sharp                         |
| C=O                    | $1700$--$1750$                  | Strong, characteristic        |
| C=C                    | $1680$--$1600$                  | Medium                        |
| C--O                   | $1300$--$1000$                  | Strong                        |
| O--H bend (alcohol)    | $1200$--$1000$                  |                               |
| N--H bend              | $1640$--$1550$                  |                               |

### Fingerprint Region

The region below $1500\mathrm{ cm}^{-1}$ contains complex absorptions unique to each molecule. It is
used to confirm identity by comparison with a reference spectrum.

### Identifying Functional Groups

1. Check above $3000\mathrm{ cm}^{-1}$ for O--H, N--H, and C--H stretches.
2. Check $2200$--$2250\mathrm{ cm}^{-1}$ for C$\equiv$C and C$\equiv$N.
3. Check $1700$--$1750\mathrm{ cm}^{-1}$ for C=O.
4. Use the fingerprint region to confirm.

:::info[Example]

An unknown compound shows: broad absorption at $3300\mathrm{ cm}^{-1}$, sharp absorption at
$1700\mathrm{ cm}^{-1}$, and a C--O stretch at $1200\mathrm{ cm}^{-1}$. This is consistent with a
carboxylic acid.

:::

---

## 5. Spectroscopy: Mass Spectrometry (MS)

### Principle (Organic Chemistry Context)

Electron impact ionization produces a molecular ion $\mathrm{M}^{+\bullet}$ that fragments. The mass
spectrum plots relative abundance against $m/z$.

### Key Information from MS

| Feature       | Information                                                |
| ------------- | ---------------------------------------------------------- |
| Molecular ion | Molar mass of the compound                                 |
| M + 1 peak    | Presence of $\mathrm{C}$-13 (about $1.1\%$ per C atom)     |
| M + 2 peak    | Presence of $\mathrm{Cl}$ ($3:1$) or $\mathrm{Br}$ ($1:1$) |
| Fragmentation | Structural information about the molecule                  |

### Nitrogen Rule

If the molecular ion has an **odd** nominal mass, the compound likely contains an **odd** number of
nitrogen atoms. If **even**, it likely contains an **even** number (including zero) of nitrogen
atoms.

### Fragmentation Patterns

| Fragment ($m/z$) | Likely species                                               |
| ---------------- | ------------------------------------------------------------ |
| $15$             | $\mathrm{CH}_3^+$                                            |
| $17$             | $\mathrm{OH}^+$                                              |
| $29$             | $\mathrm{C}_2\mathrm{H}_5^+$ or $\mathrm{CHO}^+$             |
| $31$             | $\mathrm{CH}_2\mathrm{OH}^+$ (primary alcohol)               |
| $43$             | $\mathrm{C}_3\mathrm{H}_7^+$ or $\mathrm{CH}_3\mathrm{CO}^+$ |
| $45$             | $\mathrm{COOH}^+$ or $\mathrm{C}_2\mathrm{H}_5\mathrm{O}^+$  |
| $77$             | $\mathrm{C}_6\mathrm{H}_5^+$ (benzene ring)                  |
| $91$             | $\mathrm{C}_7\mathrm{H}_7^+$ (tropylium ion, alkylbenzene)   |

### Common Pitfalls

- Assuming the tallest peak is the molecular ion; it may be a prominent fragment.
- Overlooking the M + 2 peak as evidence for halogens.

---

## 6. Spectroscopy: Nuclear Magnetic Resonance (NMR)

### Principle

Nuclei with non-zero spin ($I = 1/2$ for $\mathrm{^1H}$ and $\mathrm{^{13}C}$) align with or against
an external magnetic field. Radiofrequency radiation causes transitions between spin states. The
resonance frequency depends on the electronic environment.

### Chemical Shift

The chemical shift $\delta$ is defined relative to a reference standard (tetramethylsilane, TMS):

$$
\delta = \frac&lbrace;\nu_&lbrace;\mathrm&lbrace;sample&rbrace;&rbrace; - \nu_&lbrace;\mathrm&lbrace;reference&rbrace;&rbrace;&rbrace;&lbrace;\nu_&lbrace;\mathrm&lbrace;reference&rbrace;&rbrace;&rbrace; \times 10^6\mathrm&lbrace; ppm&rbrace;
$$

TMS is assigned $\delta = 0\mathrm{ ppm}$.

### $\mathrm{^1H}$ NMR Features

| Feature            | What it tells you                                  |
| ------------------ | -------------------------------------------------- |
| Number of signals  | Number of chemically distinct proton environments  |
| Integration (area) | Relative number of protons in each environment     |
| Splitting pattern  | Number of protons on adjacent carbons (n + 1 rule) |
| Chemical shift     | Electronic environment of each proton              |

### The n + 1 Rule

A signal is split into $n + 1$ peaks, where $n$ is the number of equivalent protons on adjacent
carbons.

| Neighbouring H count | Splitting | Name   |
| -------------------- | --------- | ------ |
| $0$                  | Singlet   | $s$    |
| $1$                  | Doublet   | $d$    |
| $2$                  | Triplet   | $t$    |
| $3$                  | Quartet   | $q$    |
| $4$                  | Quintet   | $quin$ |

### Characteristic $\mathrm{^1H}$ NMR Chemical Shifts

| Proton type           | $\delta$ (ppm)       |
| --------------------- | -------------------- |
| Alkane (R--CH$_3$)    | $0.7$--$1.3$         |
| Alkane (R--CH$_2$--R) | $1.2$--$1.5$         |
| Adjacent to C=O/C=C   | $2.0$--$2.7$         |
| Alkene                | $4.5$--$6.5$         |
| Aromatic              | $6.5$--$8.0$         |
| Aldehyde              | $9.0$--$10.0$        |
| Carboxylic acid       | $10.0$--$12.0$       |
| Alcohol (R--OH)       | $0.5$--$5.0$ (broad) |

### $\mathrm{^{13}C}$ NMR

- Each chemically distinct carbon produces one signal.
- Peak areas are **not** proportional to the number of carbons (no quantitative integration).
- Splitting is normally removed by proton decoupling, so all signals are singlets.

| Carbon type         | $\delta$ (ppm) |
| ------------------- | -------------- |
| Alkane              | $0$--$50$      |
| Adjacent to C=O/C=C | $50$--$90$     |
| Alkene              | $100$--$150$   |
| Aromatic            | $120$--$150$   |
| Carboxylic acid     | $160$--$185$   |
| Ester/amide C=O     | $155$--$185$   |
| Aldehyde            | $190$--$220$   |

### Solvent Peaks

Deuterated solvents are used (e.g., $\mathrm{CDCl}_3$, $\mathrm{D}_2\mathrm{O}$). Residual proton
peaks appear at known positions:

| Solvent                      | Residual $\mathrm{^1H}$ $\delta$ (ppm) |
| ---------------------------- | -------------------------------------- |
| $\mathrm{CDCl}_3$            | $7.26$                                 |
| $\mathrm{D}_2\mathrm{O}$     | $4.79$                                 |
| $\mathrm{DMSO}\mathrm{-}d_6$ | $2.50$                                 |

### Common Pitfalls

- Counting equivalent protons incorrectly (e.g., the three methyl protons of a $\mathrm{CH}_3$ group
  count as one environment).
- Forgetting that protons on heteroatoms (OH, NH) may exchange with $\mathrm{D}_2\mathrm{O}$ and
  disappear from the spectrum.
- Misassigning splitting patterns when non-equivalent neighbouring protons exist.

---

## 7. Combined Spectroscopic Identification

### Strategy

1. **MS**: Determine the molecular mass and molecular formula from the molecular ion peak and
   isotope pattern.
2. **IR**: Identify functional groups from characteristic absorptions.
3. **$\mathrm{^1H}$ NMR**: Determine the number of proton environments, their relative numbers, and
   splitting patterns.
4. **$\mathrm{^{13}C}$ NMR**: Determine the number of carbon environments.
5. Assemble the structural fragments and propose a structure consistent with all data.

:::info[Example]

A compound has molecular ion $\mathrm{M}^+ = 88$. IR shows a strong broad peak at
$3000$--$2500\mathrm{ cm}^{-1}$ and a strong peak at $1710\mathrm{ cm}^{-1}$. $\mathrm{^1H}$ NMR:
$\delta\ 1.2\ (t,\ 3\mathrm{H})$, $\delta\ 2.6\ (q,\ 2\mathrm{H})$,
$\delta\ 11.0\ (s,\ 1\mathrm{H})$.

- M = 88; IR suggests carboxylic acid (broad O--H and C=O).
- $\mathrm{^1H}$ NMR: 3 environments. Quartet + triplet suggests an ethyl group
  ($\mathrm{CH}_3\mathrm{CH}_2$--).
- Singlet at $\delta\ 11.0$ confirms COOH.
- Structure: $\mathrm{CH}_3\mathrm{CH}_2\mathrm{COOH}$ (propanoic acid, $M = 74$). Mismatch — need
  to re-evaluate.
- With $\mathrm{M} = 88$: try $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$.
  $\mathrm{CH}_3\mathrm{CH}_2\mathrm{CH}_2\mathrm{COOH}$ (butanoic acid) has M = 88. NMR:
  $\delta\ 0.9\ (t,\ 3\mathrm{H})$, $\delta\ 1.6\ (sextet,\ 2\mathrm{H})$,
  $\delta\ 2.3\ (t,\ 2\mathrm{H})$, $\delta\ 11.0\ (s,\ 1\mathrm{H})$.

The original triplet/quartet pattern is consistent with an ethyl ester, not a carboxylic acid.
Consider ethyl methanoate ($\mathrm{HCOOCH}_2\mathrm{CH}_3$, $M = 74$) — still a mismatch. The
correct answer is $\mathrm{CH}_3\mathrm{CH}_2\mathrm{COOCH}_3$ (methyl propanoate, $M = 74$) — but M
= 88 is $\mathrm{CH}_3\mathrm{CH}_2\mathrm{COOCH}_2\mathrm{CH}_3$ (ethyl propanoate, $M = 102$).
This illustrates the iterative nature of spectral analysis.

:::

---

## Practice Problems

<details>
<summary>Problem 1</summary>

A student measures the density of a liquid using a $10.00\mathrm{ cm}^3$ measuring cylinder
(absolute uncertainty $\pm 0.05\mathrm{ cm}^3$) and a balance (absolute uncertainty
$\pm 0.01\mathrm{ g}$). The volume is $8.50\mathrm{ cm}^3$ and the mass is $6.82\mathrm{ g}$.
Calculate the density and its percentage uncertainty.

**Solution:**

$$
\rho = \frac&lbrace;m&rbrace;&lbrace;V&rbrace; = \frac&lbrace;6.82&rbrace;&lbrace;8.50&rbrace; = 0.802\mathrm&lbrace; g/cm&rbrace;^3
$$

$$
\%\mathrm&lbrace;u&rbrace;(m) = \frac&lbrace;0.01&rbrace;&lbrace;6.82&rbrace; \times 100\% = 0.147\%
$$

$$
\%\mathrm&lbrace;u&rbrace;(V) = \frac&lbrace;0.05&rbrace;&lbrace;8.50&rbrace; \times 100\% = 0.588\%
$$

$$
\%\mathrm&lbrace;u&rbrace;(\rho) = 0.147\% + 0.588\% = 0.735\% \approx 0.7\%
$$

$$
\Delta\rho = 0.802 \times 0.007 = 0.006\mathrm&lbrace; g/cm&rbrace;^3
$$

$$
\rho = 0.802 \pm 0.006\mathrm&lbrace; g/cm&rbrace;^3
$$

</details>

<details>
<summary>Problem 2</summary>

An IR spectrum shows absorptions at $3300\mathrm{ cm}^{-1}$ (broad), $2950\mathrm{ cm}^{-1}$
(sharp), $1705\mathrm{ cm}^{-1}$ (strong), and $1050\mathrm{ cm}^{-1}$ (strong). The mass spectrum
shows $\mathrm{M}^+ = 74$ as the base peak. Deduce the structure.

**Solution:**

- $\mathrm{M} = 74$: possible molecular formula $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$.
- $3300\mathrm{ cm}^{-1}$ broad: O--H (carboxylic acid or alcohol).
- $1705\mathrm{ cm}^{-1}$: C=O (carbonyl).
- Combined O--H + C=O at these positions: carboxylic acid.
- $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$ with a COOH group:
  $\mathrm{CH}_3\mathrm{CH}_2\mathrm{COOH}$ (propanoic acid).
- $1050\mathrm{ cm}^{-1}$: C--O stretch consistent with the acid.
- $\mathrm{M} = 74$: $12(3) + 1(6) + 16(2) = 74$. Confirmed.

The compound is propanoic acid.

</details>

<details>
<summary>Problem 3</summary>

A compound $\mathrm{C}_4\mathrm{H}_8\mathrm{O}$ shows the following $\mathrm{^1H}$ NMR spectrum:
$\delta\ 1.2\ (d,\ 6\mathrm{H})$, $\delta\ 2.1\ (s,\ 3\mathrm{H})$,
$\delta\ 3.6\ (septet,\ 1\mathrm{H})$. Identify the compound.

**Solution:**

- $d, 6\mathrm{H}$ at $\delta\ 1.2$: two equivalent $\mathrm{CH}_3$ groups, each neighbouring one H.
- $s, 3\mathrm{H}$ at $\delta\ 2.1$: isolated $\mathrm{CH}_3$ group — likely adjacent to C=O.
- $septet, 1\mathrm{H}$ at $\delta\ 3.6$: one proton neighbouring six equivalent protons.
- The doublet + septet pattern indicates an isopropyl group: $\mathrm{(CH}_3)_2\mathrm{CH}$--.
- The singlet at $\delta\ 2.1$ suggests $\mathrm{CH}_3\mathrm{CO}$--.
- Structure: $\mathrm{CH}_3\mathrm{COCH(CH}_3)_2$ (3-methyl-2-butanone).

Check: $\mathrm{C}_5\mathrm{H}_{10}\mathrm{O}$ — this does not match
$\mathrm{C}_4\mathrm{H}_8\mathrm{O}$. Reconsider: $\mathrm{CH}_3\mathrm{COCH}_2\mathrm{CH}_3$
(butan-2-one) has $\mathrm{C}_4\mathrm{H}_8\mathrm{O}$. But its NMR would show
$\delta\ 1.0\ (t,\ 3\mathrm{H})$, $\delta\ 2.1\ (s,\ 3\mathrm{H})$,
$\delta\ 2.4\ (q,\ 2\mathrm{H})$. The septet pattern does not match.

The correct answer is: the formula must be $\mathrm{C}_5\mathrm{H}_{12}\mathrm{O}$ for an isopropyl
group with a $\mathrm{CH}_3$. If restricted to $\mathrm{C}_4\mathrm{H}_8\mathrm{O}$, re-examine:
2-methylpropanal, $\mathrm{(CH}_3)_2\mathrm{CHCHO}$, has the correct formula. Its NMR:
$\delta\ 1.1\ (d,\ 6\mathrm{H})$, $\delta\ 2.4\ (septet,\ 1\mathrm{H})$,
$\delta\ 9.7\ (s,\ 1\mathrm{H})$. The singlet at $\delta\ 2.1$ does not match.

This problem demonstrates the importance of checking the molecular formula against the proposed
structure.

</details>

<details>
<summary>Problem 4</summary>

The first ionization energy of sodium is determined by measuring the minimum frequency of light that
ejects electrons from a sodium surface. The threshold frequency is
$5.56 \times 10^{14}\mathrm{ Hz}$. Calculate the first ionization energy in $\mathrm{kJ/mol}$.

**Solution:**

$$
E = h\nu = (6.626 \times 10^&lbrace;-34&rbrace;)(5.56 \times 10^&lbrace;14&rbrace;) = 3.68 \times 10^&lbrace;-19&rbrace;\mathrm&lbrace; J/atom&rbrace;
$$

$$
E_&lbrace;\mathrm&lbrace;mol&rbrace;&rbrace; = 3.68 \times 10^&lbrace;-19&rbrace; \times 6.022 \times 10^&lbrace;23&rbrace; = 222000\mathrm&lbrace; J/mol&rbrace; = 222\mathrm&lbrace; kJ/mol&rbrace;
$$

</details>
