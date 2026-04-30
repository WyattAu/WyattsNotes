---
title: Measurement and Data Processing
description: "IB Chemistry — uncertainty, significant figures, error propagation, graphical analysis, and spectroscopy."
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
\%u = \frac{\Delta x}{x} \times 100\%
$$

:::info[Example]

A burette reading of $24.50\mathrm{ cm}^3$ with smallest division $0.1\mathrm{ cm}^3$:

$$
\Delta V = 0.05\mathrm{ cm}^3, \quad \%u = \frac{0.05}{24.50} \times 100\% = 0.20\%
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
\%\mathrm{u}(a \times b) = \%\mathrm{u}(a) + \%\mathrm{u}(b)
$$

### Uncertainty in Powers

For a quantity raised to a power, multiply the percentage uncertainty by the power:

$$
\%\mathrm{u}(a^n) = n \times \%\mathrm{u}(a)
$$

:::info[Example]

The density of a sphere: $\rho = \dfrac{m}{\frac{4}{3}\pi r^3}$

Given $m = 5.00 \pm 0.01\mathrm{ g}$ and $r = 1.00 \pm 0.01\mathrm{ cm}$:

$$
\%\mathrm{u}(m) = \frac{0.01}{5.00} \times 100\% = 0.20\%
$$

$$
\%\mathrm{u}(r) = \frac{0.01}{1.00} \times 100\% = 1.00\%
$$

$$
\%\mathrm{u}(\rho) = \%\mathrm{u}(m) + 3 \times \%\mathrm{u}(r) = 0.20\% + 3.00\% = 3.20\%
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
12.11 + 0.3 = 12.4 \quad \mathrm{(one decimal place)}
$$

$$
3.24 \times 1.5 = 4.9 \quad \mathrm{(two sig figs)}
$$

$$
\log(2.0 \times 10^3) = 3.30 \quad \mathrm{(two decimal places)}
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
\Delta(\mathrm{gradient}) = \frac{g_{\max} - g_{\min}}{2}
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
\Delta E = h\nu = \frac{hc}{\lambda}
$$

Only bonds with a change in dipole moment during vibration are IR-active.

### Wavenumber

IR spectra are plotted as transmittance (%) versus wavenumber ($\bar{\nu}$) in $\mathrm{cm}^{-1}$:

$$
\bar{\nu} = \frac{1}{\lambda}
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
\delta = \frac{\nu_{\mathrm{sample}} - \nu_{\mathrm{reference}}}{\nu_{\mathrm{reference}}} \times 10^6\mathrm{ ppm}
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
\rho = \frac{m}{V} = \frac{6.82}{8.50} = 0.802\mathrm{ g/cm}^3
$$

$$
\%\mathrm{u}(m) = \frac{0.01}{6.82} \times 100\% = 0.147\%
$$

$$
\%\mathrm{u}(V) = \frac{0.05}{8.50} \times 100\% = 0.588\%
$$

$$
\%\mathrm{u}(\rho) = 0.147\% + 0.588\% = 0.735\% \approx 0.7\%
$$

$$
\Delta\rho = 0.802 \times 0.007 = 0.006\mathrm{ g/cm}^3
$$

$$
\rho = 0.802 \pm 0.006\mathrm{ g/cm}^3
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
E = h\nu = (6.626 \times 10^{-34})(5.56 \times 10^{14}) = 3.68 \times 10^{-19}\mathrm{ J/atom}
$$

$$
E_{\mathrm{mol}} = 3.68 \times 10^{-19} \times 6.022 \times 10^{23} = 222000\mathrm{ J/mol} = 222\mathrm{ kJ/mol}
$$

</details>

---

## Worked Examples

**Worked Example: Error propagation in a titration**

A student titrates $25.00 \pm 0.03\mathrm{ mL}$ of $\mathrm{HCl}$ with $0.1050 \pm 0.0005\mathrm{ M}$
$\mathrm{NaOH}$. The average titre is $23.45 \pm 0.08\mathrm{ mL}$. Calculate the concentration of
$\mathrm{HCl}$ and its absolute uncertainty.

<details>
<summary>Solution</summary>

**Step 1: Calculate the concentration.**

$$n(\mathrm{NaOH}) = 0.1050 \times 0.02345 = 2.4623 \times 10^{-3}\mathrm{ mol}$$

By stoichiometry (1:1 reaction): $n(\mathrm{HCl}) = n(\mathrm{NaOH}) = 2.4623 \times 10^{-3}\mathrm{ mol}$

$$[\mathrm{HCl}] = \frac{n}{V} = \frac{2.4623 \times 10^{-3}}{0.02500} = 0.09849\mathrm{ M}$$

**Step 2: Calculate percentage uncertainties.**

$$\%\mathrm{u}([\mathrm{NaOH}]) = \frac{0.0005}{0.1050} \times 100\% = 0.476\%$$

$$\%\mathrm{u}(V_{\mathrm{NaOH}}) = \frac{0.08}{23.45} \times 100\% = 0.341\%$$

$$\%\mathrm{u}(V_{\mathrm{HCl}}) = \frac{0.03}{25.00} \times 100\% = 0.120\%$$

**Step 3: Propagate uncertainties.**

The calculation is $[\mathrm{HCl}] = \dfrac{[\mathrm{NaOH}] \times V_{\mathrm{NaOH}}}{V_{\mathrm{HCl}}}$,
so we add percentage uncertainties (multiplication and division):

$$\%\mathrm{u}([\mathrm{HCl}]) = 0.476\% + 0.341\% + 0.120\% = 0.937\% \approx 0.9\%$$

**Step 4: Calculate absolute uncertainty.**

$$\Delta[\mathrm{HCl}] = 0.09849 \times 0.00937 = 0.00092\mathrm{ M}$$

$$[\mathrm{HCl}] = 0.0985 \pm 0.0009\mathrm{ M}$$

The dominant source of uncertainty is the $\mathrm{NaOH}$ concentration, contributing approximately
51% of the total uncertainty. Improving the accuracy of the standard solution preparation would most
effectively reduce the overall uncertainty.

</details>

**Worked Example: Determining molecular formula from mass spectrometry**

The mass spectrum of a compound shows a molecular ion peak at $m/z\ 78$ (base peak), an M+1 peak at
$m/z\ 79$ with 6.6% relative abundance, and no significant M+2 peak. No halogen pattern is observed.
Determine the molecular formula.

<details>
<summary>Solution</summary>

**Step 1: Estimate the number of carbon atoms.**

The M+1 peak arises primarily from $^{13}\mathrm{C}$, which has a natural abundance of 1.1% per
carbon atom.

$$\mathrm{Number\ of\ C\ atoms} \approx \frac{\%\mathrm{abundance\ of\ M+1}}{1.1\%} = \frac{6.6\%}{1.1\%} = 6$$

**Step 2: Calculate the remaining mass.**

Mass from 6 C atoms: $6 \times 12 = 72$

Remaining mass: $78 - 72 = 6$, corresponding to 6 hydrogen atoms.

**Step 3: Propose the molecular formula.**

$$\mathrm{C}_6\mathrm{H}_6$$

**Step 4: Verify with the degree of unsaturation.**

$$\mathrm{DBE} = C + 1 - \frac{H}{2} = 6 + 1 - \frac{6}{2} = 4$$

A DBE of 4 is characteristic of an aromatic ring (one ring + three double bonds), consistent with
benzene.

**Step 5: Confirm the M+2 peak.**

With no chlorine or bromine present, the M+2 peak should be very small (from $^{18}\mathrm{O}$,
$^{2}\mathrm{H}$, etc.). The absence of a significant M+2 peak is consistent with
$\mathrm{C}_6\mathrm{H}_6$.

</details>

**Worked Example: Combined spectroscopic identification**

An unknown compound has $\mathrm{M}^+ = 88$. IR: strong broad peak at
$2500$--$3300\mathrm{ cm}^{-1}$, strong peak at $1715\mathrm{ cm}^{-1}$, and a C--O stretch at
$1050\mathrm{ cm}^{-1}$. $^{1}\mathrm{H}$ NMR: $\delta\ 0.9\ (t,\ 3\mathrm{H})$,
$\delta\ 1.6\ (sextet,\ 2\mathrm{H})$, $\delta\ 2.3\ (t,\ 2\mathrm{H})$,
$\delta\ 11.0\ (s,\ 1\mathrm{H})$. $^{13}\mathrm{C}$ NMR: 4 signals. Identify the compound.

<details>
<summary>Solution</summary>

**Step 1: Determine the molecular formula.**

$\mathrm{M} = 88$. Try $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$: $4(12) + 8(1) + 2(16) = 88$.

$$\mathrm{DBE} = 4 + 1 - \frac{8}{2} = 1$$

**Step 2: Analyse IR data.**

- Broad $2500$--$3300\mathrm{ cm}^{-1}$: O--H stretch of a carboxylic acid.
- $1715\mathrm{ cm}^{-1}$: C=O stretch (carbonyl).
- Combined O--H + C=O: carboxylic acid functional group. DBE = 1 is consumed by the C=O.

**Step 3: Analyse $^{1}\mathrm{H}$ NMR data.**

- $\delta\ 0.9\ (t,\ 3\mathrm{H})$: terminal $\mathrm{CH}_3$ group neighbouring a $\mathrm{CH}_2$.
- $\delta\ 1.6\ (sextet,\ 2\mathrm{H})$: $\mathrm{CH}_2$ group between a $\mathrm{CH}_3$ and a
  $\mathrm{CH}_2$.
- $\delta\ 2.3\ (t,\ 2\mathrm{H})$: $\mathrm{CH}_2$ group adjacent to an electron-withdrawing
  group (the carboxylic acid).
- $\delta\ 11.0\ (s,\ 1\mathrm{H})$: carboxylic acid proton (COOH).

The triplet--sextet--triplet pattern indicates a propyl chain:
$\mathrm{CH_3CH_2CH_2COOH}$.

**Step 4: Verify.**

- Proton count: $3 + 2 + 2 + 1 = 8 = \mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$. Confirmed.
- $^{13}\mathrm{C}$ NMR: 4 signals (4 distinct carbon environments). Confirmed.
- Molar mass: $88\mathrm{ g/mol}$. Confirmed.

The compound is **butanoic acid** ($\mathrm{CH_3CH_2CH_2COOH}$).

</details>

**Worked Example: Significant figures in logarithmic calculations**

A student measures the $\mathrm{pH}$ of a solution as $4.35$ at $25\degree\mathrm{C}$. Calculate
$[\mathrm{H}^+]$ with the correct number of significant figures. Then calculate $K_a$ if the acid
concentration is $0.10\mathrm{ M}$ and the acid is monoprotic.

<details>
<summary>Solution</summary>

**Step 1: Convert pH to $[\mathrm{H}^+]$.**

$$[\mathrm{H}^+] = 10^{-\mathrm{pH}} = 10^{-4.35} = 4.5 \times 10^{-5}\mathrm{ M}$$

The mantissa of the $\mathrm{pH}$ (4.35) has two decimal places, so $[\mathrm{H}^+]$ has two
significant figures: $4.5 \times 10^{-5}\mathrm{ M}$.

**Step 2: Calculate $K_a$.**

For a monoprotic weak acid $\mathrm{HA}$ with $c_0 = 0.10\mathrm{ M}$:

$$K_a = \frac{[\mathrm{H}^+]^2}{c_0 - [\mathrm{H}^+]} = \frac{(4.5 \times 10^{-5})^2}{0.10 - 4.5 \times 10^{-5}}$$

Since $[\mathrm{H}^+] \ll c_0$: $K_a \approx \dfrac{(4.5 \times 10^{-5})^2}{0.10} = \dfrac{2.025 \times 10^{-9}}{0.10}$

$$K_a = 2.0 \times 10^{-8}$$

Two significant figures, matching the two significant figures in $[\mathrm{H}^+]$.

**Step 3: Common error to avoid.**

Writing $K_a = 2.025 \times 10^{-8}$ would be incorrect --- the result cannot be more precise than
the input data. The $\mathrm{pH}$ was given to two decimal places, limiting all derived quantities to
two significant figures.

</details>

**Worked Example: Graphical analysis and uncertainty from a calibration curve**

A student measures the rate constant $k$ of a reaction at different temperatures and plots
$\ln(k)$ versus $1/T$ (Arrhenius plot). The gradient of the best-fit line is
$-5400\mathrm{ K}$. The maximum gradient line has gradient $-5800\mathrm{ K}$ and the minimum
gradient line has gradient $-5000\mathrm{ K}$. Calculate $E_a$ and its absolute uncertainty.

<details>
<summary>Solution</summary>

**Step 1: Calculate $E_a$ from the best-fit gradient.**

From the Arrhenius equation: $\ln(k) = -\dfrac{E_a}{R} \cdot \dfrac{1}{T} + \ln(A)$

$$\mathrm{gradient} = -\frac{E_a}{R}$$

$$E_a = -\mathrm{gradient} \times R = -(-5400) \times 8.314 = 44900\mathrm{ J/mol} = 44.9\mathrm{ kJ/mol}$$

**Step 2: Calculate $E_a$ from the maximum and minimum gradients.**

$$E_{a,\max} = 5800 \times 8.314 = 48200\mathrm{ J/mol} = 48.2\mathrm{ kJ/mol}$$

$$E_{a,\min} = 5000 \times 8.314 = 41600\mathrm{ J/mol} = 41.6\mathrm{ kJ/mol}$$

**Step 3: Calculate the absolute uncertainty.**

$$\Delta E_a = \frac{E_{a,\max} - E_{a,\min}}{2} = \frac{48.2 - 41.6}{2} = 3.3\mathrm{ kJ/mol}$$

$$E_a = 44.9 \pm 3.3\mathrm{ kJ/mol}$$

</details>

---

## Common Pitfalls

- **Using the smallest division (not half) for analogue instrument uncertainty**: A ruler with 1 mm
  divisions has an absolute uncertainty of $\pm 0.5\mathrm{ mm}$, not $\pm 1\mathrm{ mm}$. A
  thermometer with $1\degree\mathrm{C}$ divisions has $\pm 0.5\degree\mathrm{C}$.

- **Confusing absolute and percentage uncertainty during propagation**: For addition/subtraction,
  add absolute uncertainties. For multiplication/division, add percentage uncertainties. Applying
  the wrong rule gives a quantitatively incorrect result.

- **Including constants in uncertainty calculations**: $\pi$, $R$, $N_A$, and other defined constants
  have no uncertainty. Do not include them in percentage uncertainty propagation. Only measured
  quantities contribute.

- **Reporting too many significant figures in a final answer**: The result cannot be more precise
  than the least precise input. After propagation, round the uncertainty to one or two significant
  figures, then round the result to match the decimal place of the uncertainty.

- **Misidentifying the molecular ion peak in mass spectrometry**: The molecular ion is not always
  the tallest peak (base peak). The molecular ion is the peak at the highest $m/z$ corresponding
  to the intact molecule, before fragmentation.

- **Overlooking the $\mathrm{D}_2\mathrm{O}$ exchange test in NMR**: Protons on OH and NH groups
  exchange with deuterium when $\mathrm{D}_2\mathrm{O}$ is added, causing those signals to
  disappear from the $^{1}\mathrm{H}$ NMR spectrum. This is a definitive test for labile protons.

- **Forcing a line of best fit through the origin**: Only force through $(0, 0)$ if the data
  physically require it (e.g., Charles's law at absolute zero). For most experimental data, the
  intercept has physical meaning and should be determined from the fit.

- **Ignoring anomalous points instead of justifying their exclusion**: Outliers must be identified
  and justified (e.g., measurement error, equipment malfunction) before exclusion. Removing
  inconvenient data points without justification is scientifically invalid.

- **Misinterpreting the M+2 peak in mass spectrometry**: A 3:1 ratio of M to M+2 indicates one
  chlorine atom. A 1:1 ratio indicates one bromine atom. The absence of a significant M+2 peak
  rules out halogens but does not rule out other elements.

- **Counting proton environments incorrectly in NMR**: Symmetry-equivalent protons produce a single
  signal. In $\mathrm{CH_3CH_2CH_3}$ (propane), there are two proton environments (the two terminal
  $\mathrm{CH}_3$ groups are equivalent), not three.

---

## Exam-Style Problems

1. A student measures the density of a metal cylinder using a vernier caliper (absolute uncertainty
   $\pm 0.02\mathrm{ mm}$) and a balance (absolute uncertainty $\pm 0.01\mathrm{ g}$). The diameter
   is $12.50\mathrm{ mm}$, the height is $25.00\mathrm{ mm}$, and the mass is $20.00\mathrm{ g}$.
   Calculate the density and its percentage uncertainty. The density formula is
   $\rho = \dfrac{m}{\pi(d/2)^2 h}$. **[Medium]**

2. An IR spectrum shows absorptions at $3350\mathrm{ cm}^{-1}$ (broad, medium),
   $2950\mathrm{ cm}^{-1}$ (sharp), $1680\mathrm{ cm}^{-1}$ (strong), $1600\mathrm{ cm}^{-1}$
   (medium), and $1500\mathrm{ cm}^{-1}$ (medium). The mass spectrum shows $\mathrm{M}^+ = 122$
   with a small M+2 peak. Deduce the structure and explain each piece of spectral evidence.
   **[Hard]**

3. A compound $\mathrm{C}_5\mathrm{H}_{10}\mathrm{O}_2$ has the following $^{1}\mathrm{H}$ NMR
   spectrum: $\delta\ 1.2\ (d,\ 6\mathrm{H})$, $\delta\ 2.0\ (s,\ 3\mathrm{H})$,
   $\delta\ 4.1\ (septet,\ 1\mathrm{H})$, $\delta\ 11.5\ (s,\ 1\mathrm{H})$. IR shows a broad
   peak at $3000\mathrm{ cm}^{-1}$ and a strong peak at $1710\mathrm{ cm}^{-1}$. Identify the
   compound and explain the splitting pattern. **[Hard]**

4. A student performs an experiment to determine $K_c$ for a reaction and obtains the following
   values in three trials: $4.2 \times 10^{-2}$, $3.8 \times 10^{-2}$, $4.5 \times 10^{-2}$. (a)
   Calculate the mean and standard deviation. (b) Express the result as mean $\pm$ uncertainty.
   (c) Is the spread of results consistent with random error only? **[Medium]**

5. The mass spectrum of a compound shows the molecular ion at $m/z\ 94$ (base peak) and a prominent
   fragment at $m/z\ 77$. The IR spectrum shows absorptions at $3050\mathrm{ cm}^{-1}$,
   $1600\mathrm{ cm}^{-1}$, $1500\mathrm{ cm}^{-1}$, and $750\mathrm{ cm}^{-1}$. Deduce the
   structure of the compound and explain the fragmentation. **[Medium]**

6. In a colorimetry experiment, a student measures the absorbance of five standard solutions and
   constructs a calibration curve of absorbance versus concentration. The gradient is
   $245\mathrm{ L/mol}$ with an uncertainty of $\pm 12\mathrm{ L/mol}$. An unknown solution has
   absorbance $0.350 \pm 0.005$. Calculate the concentration of the unknown and its uncertainty.
   **[Hard]**

7. Calculate $\log(3.20 \times 10^{-4})$ and $10^{-7.45}$, each to the correct number of
   significant figures. State the rule that governs significant figures in logarithmic and
   antilogarithmic operations. **[Easy]**

8. A $^{13}\mathrm{C}$ NMR spectrum of a compound $\mathrm{C}_8\mathrm{H}_{10}$ shows 5 signals.
   The $^{1}\mathrm{H}$ NMR shows: $\delta\ 2.3\ (s,\ 3\mathrm{H})$, $\delta\ 7.1$--$7.4$
   $(m,\ 7\mathrm{H})$. Identify the compound. Explain why the aromatic region shows a multiplet
   rather than distinct signals. **[Hard]**

---

## If You Get These Wrong, Revise:

- **Atomic theory and electron configurations** → Review [./atomic-theory](./atomic-theory)
- **Organic chemistry spectroscopic identification** → Review [./organic-chemistry-advanced](./organic-chemistry-advanced)
- **Acid-base calculations and pH** → Review [./acids-bases-advanced](./acids-bases-advanced)
- **Equilibrium constant expressions** → Review [./equilibrium/equilibrium](./equilibrium/equilibrium)

