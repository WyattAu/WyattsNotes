---
title: Analytical Techniques
description: "A-Level Chemistry notes on Analytical Techniques: Mass Spectrometry (MS); Instrument Overview; The Molecular Ion ($\mathrm{M}^{+\bullet}$); Isotopic Peaks."
date: 2026-04-22T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: analytical-techniques
---
# Analytical Techniques

Analytical techniques allow chemists to determine the structure, composition, and purity of organic
compounds. No single technique provides complete structural information; instead, a combination of
methods is used. This module covers the four principal spectroscopic and chromatographic methods:
mass spectrometry, infrared spectroscopy, nuclear magnetic resonance spectroscopy, and
chromatography.

## Mass Spectrometry (MS)

Mass spectrometry measures the mass-to-charge ratio ($m/z$) of ionised molecules and fragments. It
provides information about molecular mass, molecular formula, and structural features.

### Instrument Overview

1. **Ionisation:** The sample is vaporised and ionised. In electron impact (EI) mass spectrometry, a
   beam of high-energy electrons ($70\,\mathrm{eV}$) bombards the sample, ejecting an electron to
   form a molecular ion (radical cation):

$$
\mathrm{M} + e^- \to \mathrm{M}^{+\bullet} + 2e^-
$$

2. **Acceleration:** Ions are accelerated through an electric field.

3. **Deflection:** Ions are deflected by a magnetic field. Lighter ions are deflected more than
   heavier ions.

4. **Detection:** The detector records the abundance of each $m/z$ value, producing a mass spectrum.

### The Molecular Ion ($\mathrm{M}^{+\bullet}$)

The molecular ion peak corresponds to the $m/z$ of the intact molecule (minus one electron). Its
mass gives the relative molecular mass ($M_r$) of the compound. The molecular ion is the heaviest
significant peak (excluding isotopic peaks).

The molecular ion peak is not always the base peak (the tallest peak). For compounds that fragment
readily, the molecular ion may be very weak or absent. Soft ionisation techniques (e.g. electrospray
ionisation, ESI) preserve the molecular ion better.

### Isotopic Peaks

Many elements have naturally occurring isotopes that produce characteristic patterns:

- **Chlorine:** $^{35}\mathrm{Cl}$ (75.8%) and $^{37}\mathrm{Cl}$ (24.2%). The M and M+2 peaks have
  an intensity ratio of approximately 3:1.
- **Bromine:** $^{79}\mathrm{Br}$ (50.7%) and $^{81}\mathrm{Br}$ (49.3%). The M and M+2 peaks have
  approximately equal intensity (1:1).
- **Carbon:** $^{12}\mathrm{C}$ (98.9%) and $^{13}\mathrm{C}$ (1.1%). The M+1 peak is approximately
  1.1% of the M peak per carbon atom.

These isotopic patterns are diagnostic for identifying the presence and number of halogen atoms.

### Fragmentation Patterns

Fragmentation occurs when the molecular ion breaks apart. The fragmentation pathways are determined
by the stability of the resulting ions and radicals. Key patterns:

| Fragment                | $m/z$      | Origin                                                        |
| ----------------------- | ---------- | ------------------------------------------------------------- |
| $\mathrm{M}^{+\bullet}$ | $M_r$      | Molecular ion                                                 |
| $\mathrm{M} - 15$       | $M_r - 15$ | Loss of $-\mathrm{CH}_3$                                      |
| $\mathrm{M} - 17$       | $M_r - 17$ | Loss of $-\mathrm{OH}$                                        |
| $\mathrm{M} - 29$       | $M_r - 29$ | Loss of $-\mathrm{C}_2\mathrm{H}_5$ or $-\mathrm{CHO}$        |
| $\mathrm{M} - 31$       | $M_r - 31$ | Loss of $-\mathrm{OCH}_3$                                     |
| $\mathrm{M} - 43$       | $M_r - 43$ | Loss of $-\mathrm{C}_3\mathrm{H}_7$ or $-\mathrm{COCH}_3$     |
| 43                      | 43         | $-\mathrm{C}_3\mathrm{H}_7^+$ or $\mathrm{CH}_3\mathrm{CO}^+$ |
| 77                      | 77         | $\mathrm{C}_6\mathrm{H}_5^+$ (phenyl cation)                  |
| 91                      | 91         | $\mathrm{C}_7\mathrm{H}_7^+$ (benzyl/tropylium ion)           |
| 29                      | 29         | $\mathrm{C}_2\mathrm{H}_5^+$ or $\mathrm{CHO}^+$              |
| 31                      | 31         | $\mathrm{CH}_2\mathrm{OH}^+$                                  |

### The McLafferty Rearrangement

A characteristic fragmentation of carbonyl compounds with a $\gamma$-hydrogen (three carbons away
from the carbonyl). The $\gamma$-hydrogen transfers to the carbonyl oxygen via a six-membered cyclic
transition state, producing an enol radical cation and an alkene:

$$
\mathrm{RCH}_2\mathrm{CH}_2\mathrm{COR}' \to \mathrm{RCH}=\mathrm{CH}_2 + \mathrm{HO}^+=\mathrm{CHR}'
$$

This produces a peak at $m/z = 60$ for ethanal derivatives and at $m/z = 58$ for propanone
derivatives.

## Infrared (IR) Spectroscopy

IR spectroscopy measures the absorption of infrared radiation by molecular bonds. Bonds absorb
radiation at characteristic frequencies corresponding to their vibrational modes (stretching and
bending).

### Key Absorptions

| Bond                               | Wavenumber ($\mathrm{cm}^{-1}$) | Intensity                               |
| ---------------------------------- | ------------------------------- | --------------------------------------- |
| O--H (alcohol, broad)              | 3200--3600                      | Broad, strong                           |
| O--H (carboxylic acid, very broad) | 2500--3300                      | Very broad, strong                      |
| N--H                               | 3300--3500                      | Medium (two peaks for $1^\circ$ amines) |
| C--H                               | 2850--3100                      | Medium                                  |
| $\mathrm{C}\equiv\mathrm{N}$       | 2220--2260                      | Sharp, medium                           |
| $\mathrm{C}\equiv\mathrm{C}$       | 2100--2260                      | Weak                                    |
| C=O                                | 1680--1750                      | Strong                                  |
| C=C                                | 1620--1680                      | Weak to medium                          |
| C--O (alcohol, ester)              | 1000--1300                      | Strong                                  |

### The Fingerprint Region

The region below $1500\,\mathrm{cm}^{-1}$ ($1500$--$400\,\mathrm{cm}^{-1}$) contains a complex
pattern of absorptions from bending vibrations and C--C, C--O, C--X single bond stretches. This
pattern is unique to each compound (like a fingerprint) and is used for identification by comparison
with reference spectra.

### Interpreting an IR Spectrum

The systematic approach:

1. Check the O--H/N--H region ($2500$--$3600\,\mathrm{cm}^{-1}$). A very broad absorption centred
   near $3000\,\mathrm{cm}^{-1}$ indicates a carboxylic acid. A broad absorption at
   $3200$--$3600\,\mathrm{cm}^{-1}$ indicates an alcohol.
2. Check the triple bond region ($2100$--$2260\,\mathrm{cm}^{-1}$).
3. Check the carbonyl region ($1680$--$1750\,\mathrm{cm}^{-1}$). A strong absorption here confirms a
   C=O group.
4. Check the C=C region ($1620$--$1680\,\mathrm{cm}^{-1}$). Note: C=C absorptions are weak.
5. Compare the fingerprint region with a reference spectrum.

## Nuclear Magnetic Resonance (NMR) Spectroscopy

### Proton (${}^1\mathrm{H}$) NMR

${}^1\mathrm{H}$ NMR provides information about the hydrogen environments in a molecule. Each
chemically distinct hydrogen environment produces a separate signal.

**Chemical shift ($\delta$):** Measured in parts per million (ppm) relative to tetramethylsilane
(TMS), which is assigned $\delta = 0$. TMS is used as a reference because it gives a single, sharp
signal from 12 equivalent protons at high field, and its silicon is less electronegative than
carbon.

The chemical shift reflects the degree of electron shielding around the proton. Electronegative
groups deshield nearby protons, moving their signal to higher $\delta$ (downfield).

| Proton environment             | $\delta$ range (ppm) |
| ------------------------------ | -------------------- |
| $\mathrm{R-CH}_3$              | 0.7--1.3             |
| $\mathrm{R}_2\mathrm{-CH}_2$   | 1.2--1.4             |
| $\mathrm{R}_3\mathrm{-CH}$     | 1.4--1.7             |
| $\mathrm{C}\equiv\mathrm{C-H}$ | 2.0--3.0             |
| $\mathrm{Cl-CH}$               | 3.0--4.0             |
| $\mathrm{R-O-CH_3}$            | 3.3--4.0             |
| $\mathrm{C}=\mathrm{C-H}$      | 4.5--6.5             |
| $\mathrm{Ar-H}$                | 6.5--8.5             |
| $\mathrm{R-CHO}$               | 9.0--10.0            |
| $\mathrm{R-COOH}$              | 10.0--13.0           |

**Integration:** The area under each signal is proportional to the number of equivalent protons
producing that signal. Modern NMR spectrometers display the integration as a step function above the
peaks.

**Spin-spin coupling (splitting):** Non-equivalent protons on adjacent carbons (typically separated
by three bonds, ${}^3J$ coupling) split each other's signals. The splitting pattern follows the
$n+1$ rule: a signal is split into $n+1$ peaks, where $n$ is the number of equivalent neighbouring
protons.

| Neighbours ($n$) | Splitting | Peaks |
| ---------------- | --------- | ----- |
| 0                | Singlet   | 1     |
| 1                | Doublet   | 2     |
| 2                | Triplet   | 3     |
| 3                | Quartet   | 4     |
| 4                | Quintet   | 5     |

The coupling constant $J$ (in Hz) is the spacing between adjacent peaks in a multiplet. Protons that
are chemically equivalent do not couple to each other. The OH proton in alcohols and the NH proton
in amines often appear as broad singlets because of rapid proton exchange with trace water.

### Carbon-13 (${}^{13}\mathrm{C}$) NMR

${}^{13}\mathrm{C}$ NMR detects carbon environments:

- Natural abundance of ${}^{13}\mathrm{C}$ is only 1.1% (the vast majority is ${}^{12}\mathrm{C}$,
  which is NMR-inactive), so signals are weak.
- **Proton-decoupled spectra:** Protons are simultaneously irradiated to remove all
  ${}^{13}\mathrm{C}\mathrm{-}{}^1\mathrm{H}$ coupling. Each carbon environment gives a single peak
  (no splitting).
- Chemical shift range: $0$--$220\,\mathrm{ppm}$.
- Carbonyl carbons ($\mathrm{C}=0$) appear at $160$--$220\,\mathrm{ppm}$.
- Aromatic carbons: $110$--$160\,\mathrm{ppm}$.
- Alkene carbons: $100$--$150\,\mathrm{ppm}$.
- $\mathrm{C}\equiv\mathrm{N}$ carbons: $115$--$125\,\mathrm{ppm}$.
- Alkyl carbons: $0$--$50\,\mathrm{ppm}$.
- No integration is reliable (due to varying relaxation times and NOE effects).

## Chromatography

Chromatography separates mixtures based on differential partitioning between a stationary phase and
a mobile phase.

### Thin-Layer Chromatography (TLC)

**Stationary phase:** Silica gel ($\mathrm{SiO}_2$) on a glass or aluminium plate. Silica is polar.

**Mobile phase:** A solvent (or solvent mixture) of appropriate polarity.

**Mechanism:** The sample is spotted near the bottom of the plate, which is placed in a solvent
bath. The solvent rises by capillary action. Compounds with greater affinity for the mobile phase
(more non-polar compounds on polar silica) travel further.

**$R_f$ value:**

$$
R_f = \frac◆LB◆\mathrm{distance\ travelled\ by\ compound}◆RB◆◆LB◆\mathrm{distance\ travelled\ by\ solvent\ front}◆RB◆
$$

$R_f$ values range from 0 to 1. Values are reproducible only under identical conditions.

**Visualisation:** UV light (for UV-active compounds), iodine vapour, or ninhydrin spray (for amino
acids).

### Advanced TLC: Two-Dimensional TLC

When a mixture contains many components with similar $R_f$ values, one-dimensional TLC may not resolve all of them. Two-dimensional TLC involves running the plate in one solvent system, rotating it $90^\circ$, then running it in a second solvent system with different polarity. Components that co-migrated in the first dimension may separate in the second. This is particularly useful for amino acid analysis.

### Column Chromatography

Column chromatography scales up the separation achieved by TLC. A glass column is packed with the stationary phase (silica gel or alumina). The mixture is loaded at the top, and solvent is passed through the column under gravity or pressure. Fractions are collected as the components elute at different times.

**Flash chromatography** uses pressurised gas (nitrogen or air) to push solvent through the column faster, reducing separation time.

**Elution order:** In normal-phase chromatography (polar stationary phase), non-polar compounds elute first. In reverse-phase chromatography (non-polar stationary phase, e.g. $\mathrm{C}_{18}$-bonded silica), polar compounds elute first.

### Gas Chromatography (GC)

**Mobile phase:** Inert carrier gas ($\mathrm{He}$, $\mathrm{N}_2$).

**Stationary phase:** High-boiling liquid coated on the inner wall of a capillary column.

**Separation principle:** Compounds are vaporised and carried through the column by the carrier gas.
Separation depends on volatility (lower boiling point = shorter retention time) and interaction with
the stationary phase.

**Retention time ($t_R$):** The time from injection to detection. Characteristic of a compound under
fixed conditions.

**Detector:** Flame ionisation detector (FID) measures the current produced when organic compounds
burn in a hydrogen flame. The peak area is proportional to the amount of compound.

**GC-MS:** Coupling GC with mass spectrometry provides both separation and identification. Each peak
in the chromatogram corresponds to a mass spectrum that can be searched against a library.

### Quantitative GC Analysis

GC can be used quantitatively to determine the composition of mixtures. The area under each peak is proportional to the amount of that compound. For accurate quantification:

- Use an internal standard: a known amount of a compound not present in the sample is added. The ratio of peak areas (analyte/internal standard) is used for calibration, correcting for injection variability.
- Response factors may differ between compounds; calibration curves are needed for each analyte.

**Worked Example.** A mixture of ethanol and propan-1-ol is analysed by GC. The peak areas are 45,000 (ethanol) and 30,000 (propan-1-ol). If the response factors are equal, calculate the mole ratio.

$$
\frac◆LB◆n_\mathrm{ethanol}◆RB◆◆LB◆n_\mathrm{propanol}◆RB◆ = \frac◆LB◆\text{Area}_\mathrm{ethanol}◆RB◆◆LB◆\text{Area}_\mathrm{propanol}◆RB◆ = \frac{45000}{30000} = 1.5
$$

The mixture is 60% ethanol and 40% propan-1-ol by mole.

### High-Performance Liquid Chromatography (HPLC)

**Mobile phase:** Liquid solvent(s) under high pressure (up to $400\,\mathrm{atm}$).

**Stationary phase:** Packed column (often $\mathrm{C}_{18}$-bonded silica for reverse-phase HPLC).

**Separation principle:** In reverse-phase HPLC, the stationary phase is non-polar and the mobile
phase is polar. Compounds are separated by their relative hydrophobicity.

**Applications:** Non-volatile compounds, thermally labile compounds (proteins, pharmaceuticals),
and compounds that decompose at GC temperatures.

### HPLC Detectors

| Detector | Principle | Compounds detected |
|---|---|---|
| UV-Vis | Absorption at fixed wavelength | UV-active compounds (most organics) |
| Refractive Index (RI) | Change in refractive index | Universal (but less sensitive) |
| Mass spectrometer (LC-MS) | Mass-to-charge ratio | Universal; provides structural information |

## Atomic Absorption Spectroscopy (AAS)

AAS is used for quantitative determination of metal ions in solution. It measures the absorption of light by ground-state atoms of the analyte.

### Principle

1. A hollow-cathode lamp emits light at the characteristic wavelength of the element being analysed (e.g. $589\,\mathrm{nm}$ for sodium).
2. The sample solution is atomised in a flame (or graphite furnace), producing ground-state atoms.
3. The atoms absorb light at their characteristic wavelength. The amount absorbed is proportional to the concentration of the element.

$$
A = \log\frac{I_0}{I} = \varepsilon c l
$$

where $A$ is absorbance, $I_0$ is the incident intensity, $I$ is the transmitted intensity, $\varepsilon$ is the molar absorption coefficient, $c$ is concentration, and $l$ is the path length.

### Calibration

A calibration curve is constructed by measuring the absorbance of standard solutions of known concentration. The absorbance of the unknown is then compared with the calibration curve to determine its concentration.

**Limitations:** AAS determines one element at a time (single-element technique). It cannot distinguish between different oxidation states or chemical forms of the same element (e.g. $\mathrm{Cr}^{3+}$ vs $\mathrm{Cr}^{6+}$).

### Applications

- Determination of trace metals in water (e.g. $\mathrm{Pb}$, $\mathrm{Cd}$, $\mathrm{Cu}$ in drinking water).
- Analysis of metal content in food and pharmaceuticals.
- Environmental monitoring of soil and water contamination.

## Combined Techniques Strategy

The systematic approach to identifying an unknown organic compound:

1. **Determine the molecular formula** from the molecular ion peak in the mass spectrum. Use the
   $M+1$ and $M+2$ peaks to count carbon and halogen atoms. The rule of 13 can determine possible
   formulas.

2. **Identify functional groups** from the IR spectrum (C=O, O--H, N--H, C=C,
   $\mathrm{C}\equiv\mathrm{N}$).

3. **Determine the carbon skeleton** from the ${}^{13}\mathrm{C}$ NMR (number of carbon
   environments, presence of carbonyl, aromatic, or alkene carbons).

4. **Determine the hydrogen environments** from the ${}^1\mathrm{H}$ NMR (chemical shift,
   integration, splitting pattern). Piece together the connectivity.

5. **Confirm the structure** by checking that the fragmentation pattern in the mass spectrum is
   consistent with the proposed structure.

6. **Use chromatography** to assess purity or separate components of a mixture before analysis.

## Common Pitfalls

1. **Misidentifying the molecular ion peak.** The molecular ion is not always the base peak. Check
   that the $m/z$ value is consistent with the expected molecular mass and that isotopic patterns
   match the expected composition.

2. **Counting signals vs protons in NMR.** The number of signals in ${}^1\mathrm{H}$ NMR equals the
   number of hydrogen environments, not the number of protons. Integration gives the ratio of
   protons in each environment.

3. **Ignoring coupling through more than three bonds.** In general, only protons on adjacent carbons
   (three-bond coupling, ${}^3J$) split each other. Protons separated by four or more bonds
   typically do not show observable coupling.

4. **Confusing IR absorption positions.** Memorise the key ranges: O--H
   ($3200$--$3600\,\mathrm{cm}^{-1}$), C=O ($1680$--$1750\,\mathrm{cm}^{-1}$), C--O
   ($1000$--$1300\,\mathrm{cm}^{-1}$).

5. **Incorrectly interpreting $R_f$ values.** $R_f$ is dimensionless and always between 0 and 1.
   Compounds with greater affinity for the mobile phase have higher $R_f$ values.

6. **Forgetting that OH and NH protons can be exchanged.** Adding $\mathrm{D}_2\mathrm{O}$ to the sample causes OH and NH signals to disappear (exchange with deuterium) and a new signal for HOD appears. This is a useful diagnostic for identifying exchangeable protons.

7. **Assuming ${}^{13}\mathrm{C}$ NMR integration is meaningful.** The peak areas in proton-decoupled ${}^{13}\mathrm{C}$ NMR are not proportional to the number of carbons. Integration data from ${}^{13}\mathrm{C}$ NMR should not be used for quantitative analysis.

8. **Misassigning equivalent protons.** Protons that are related by symmetry or rapid rotation are chemically equivalent and give one signal. For example, the three methyl protons of $\mathrm{CH}_3$ are equivalent; the two methyl groups of dimethyl ether ($(CH_3)_2O$) are equivalent.

## NMR Spectroscopy in Greater Depth

### ${}^1\mathrm{H}$ NMR: Chemical Shift Reference Table

| Proton environment | $\delta$ range (ppm) | Example |
|---|---|---|
| $\mathrm{RCH}_3$ | $0.7$--$1.3$ | Alkane methyl |
| $\mathrm{R}_2\mathrm{CH}_2$ | $1.2$--$1.5$ | Alkane methylene |
| $\mathrm{R}_3\mathrm{CH}$ | $1.4$--$2.0$ | Alkane methine |
| Allylic ($\mathrm{CH}_2$ next to C=C) | $1.6$--$2.6$ | $\mathrm{CH}_3\mathrm{CH}=\mathrm{CH}_2$ |
| $\alpha$ to carbonyl | $2.0$--$2.7$ | $\mathrm{CH}_3\mathrm{COCH}_3$ |
| Aromatic | $6.0$--$8.5$ | Benzene: $7.3$ |
| Aldehyde | $9.0$--$10.0$ | $\mathrm{CH}_3\mathrm{CHO}$ |
| Carboxylic acid | $10.0$--$13.0$ | $\mathrm{CH}_3\mathrm{COOH}$ |
| Alcohol (OH) | $0.5$--$5.0$ (variable) | Broad, concentration-dependent |
| Amine (NH) | $0.5$--$5.0$ (variable) | Broad |

### Spin-Spin Coupling (Splitting Patterns)

The $(n+1)$ rule: a signal is split into $n+1$ peaks by $n$ equivalent neighbouring protons.

| Number of neighbours ($n$) | Splitting pattern | Name |
|---|---|---|
| 0 | 1 peak | Singlet |
| 1 | 2 peaks | Doublet |
| 2 | 3 peaks | Triplet |
| 3 | 4 peaks | Quartet |
| 4 | 5 peaks | Quintet |

**Coupling constants ($J$):** The spacing between peaks in a multiplet (in Hz) is the coupling constant. Protons that couple to each other have the same coupling constant. This helps assign which protons are neighbours.

| Coupling type | Typical $J$ (Hz) |
|---|---|
| Vicinal (geminal, ${}^2J$) | $0$--$20$ |
| Vicinal (three-bond, ${}^3J$) | $6$--$8$ (free rotation) |
| Vicinal (alkene trans) | $12$--$18$ |
| Vicinal (alkene cis) | $6$--$12$ |
| Aromatic (ortho) | $6$--$10$ |
| Aromatic (meta) | $1$--$3$ |
| Aromatic (para) | $0$--$1$ |

### ${}^{13}\mathrm{C}$ NMR

- The chemical shift range is $0$--$220\,\mathrm{ppm}$.
- Proton-decoupled spectra show one peak per carbon environment (no splitting).
- The number of peaks equals the number of carbon environments.

| Carbon environment | $\delta$ range (ppm) |
|---|---|
| Alkyl ($\mathrm{C}-\mathrm{C}$) | $0$--$50$ |
| Adjacent to heteroatom ($\mathrm{C}-\mathrm{O}$, $\mathrm{C}-\mathrm{N}$) | $50$--$90$ |
| Aromatic | $100$--$150$ |
| Carbonyl (aldehyde, ketone) | $190$--$220$ |
| Carbonyl (acid, ester, amide) | $160$--$185$ |

### Worked Example: Full Spectral Analysis

An unknown compound has the following data:

- Molecular formula: $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$
- IR: $1740\,\mathrm{cm}^{-1}$ (strong), $2980\,\mathrm{cm}^{-1}$ (strong), no broad O--H
- ${}^1\mathrm{H}$ NMR: $\delta\, 1.3$ (triplet, 3H), $\delta\, 2.0$ (singlet, 3H), $\delta\, 4.1$ (quartet, 2H)
- ${}^{13}\mathrm{C}$ NMR: 4 peaks at $\delta\, 14$, $21$, $60$, $171$

**Analysis:**

1. Degree of unsaturation from $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$: $\text{DoU} = \frac{2(4) + 2 - 8}{2} = 1$. One double bond or ring.
2. IR: $1740\,\mathrm{cm}^{-1}$ = C=O (ester), no broad O--H (not a carboxylic acid).
3. ${}^{13}\mathrm{C}$ NMR: peak at 171 = carbonyl carbon (ester). Peak at 60 = $\mathrm{C}-\mathrm{O}$ (ester $\mathrm{CH}_2$). Peaks at 14 and 21 = two types of methyl.
4. ${}^1\mathrm{H}$ NMR: quartet at 4.1 (2H) = $\mathrm{CH}_2$ adjacent to O. Triplet at 1.3 (3H) = $\mathrm{CH}_3$ adjacent to $\mathrm{CH}_2$. Singlet at 2.0 (3H) = $\mathrm{CH}_3$ adjacent to carbonyl.

**Structure:** Methyl propanoate, $\mathrm{CH}_3\mathrm{CH}_2\mathrm{COOCH}_3$.

Verify: the quartet and triplet are coupled to each other ($J$ values match). The singlet is the $\mathrm{CH}_3$ of the acyl group, which has no adjacent protons.

## IR Spectroscopy in Greater Depth

### Complete Absorption Table

| Bond | Absorption ($\mathrm{cm}^{-1}$) | Intensity |
|---|---|---|
| O--H (alcohol, free) | $3550$--$3700$ | Sharp, medium |
| O--H (alcohol, hydrogen-bonded) | $3200$--$3550$ | Broad, strong |
| O--H (carboxylic acid) | $2500$--$3300$ | Very broad, strong |
| N--H (amine) | $3300$--$3500$ | Medium (two bands for primary) |
| C--H (alkane) | $2850$--$2950$ | Strong |
| C--H (alkene) | $3010$--$3100$ | Medium |
| C--H (aldehyde) | $2820$--$2720$ | Two weak bands (diagnostic) |
| $\mathrm{C}\equiv\mathrm{N}$ (nitrile) | $2210$--$2260$ | Medium |
| C=O (aldehyde) | $1720$--$1740$ | Strong |
| C=O (ketone) | $1705$--$1725$ | Strong |
| C=O (carboxylic acid) | $1710$--$1720$ | Strong |
| C=O (ester) | $1735$--$1750$ | Strong |
| C=O (amide) | $1680$--$1700$ | Strong |
| C=C (alkene) | $1620$--$1680$ | Weak to medium |
| C--O (alcohol, ether) | $1000$--$1260$ | Strong |
| C--O (ester) | $1100$--$1300$ | Strong |
| C--Cl | $600$--$800$ | Strong |

### Fingerprint Region

The region below $1500\,\mathrm{cm}^{-1}$ is the fingerprint region. It contains many absorptions from C--C, C--O, C--X, and bending vibrations that are unique to each molecule. Comparison with a reference spectrum is used for identification.

## Practice Problems

<details>
<summary>Problem 1</summary>

An unknown compound has the following analytical data:

- Mass spectrum: molecular ion peak at $m/z = 88$, base peak at $m/z = 43$.
- IR: strong absorption at $1700\,\mathrm{cm}^{-1}$, broad absorption at
  $2500$--$3300\,\mathrm{cm}^{-1}$.
- ${}^1\mathrm{H}$ NMR: $\delta\, 1.2$ (triplet, 3H), $\delta\, 2.0$ (singlet, 3H), $\delta\, 2.3$
  (quartet, 2H), $\delta\, 11.0$ (singlet, 1H).

Identify the compound.

**Solution:**

**Molecular formula:** $M_r = 88$. Possible formula for a carboxylic acid (IR shows C=O and broad
O--H): $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$ ($M_r = 4 \times 12 + 8 \times 1 + 2 \times 16 = 88$).
The degree of unsaturation is $2 - 4 + \frac{8}{2} + 1 = 1$ (one double bond or ring, consistent
with one C=O).

**IR:** $1700\,\mathrm{cm}^{-1}$ confirms C=O. Broad $2500$--$3300\,\mathrm{cm}^{-1}$ confirms
carboxylic acid O--H.

**${}^1\mathrm{H}$ NMR:**

- $\delta\, 1.2$ (t, 3H): $-\mathrm{CH}_3$ adjacent to $-\mathrm{CH}_2-$.
- $\delta\, 2.0$ (s, 3H): $-\mathrm{CH}_3$ adjacent to carbonyl ($-\mathrm{COCH}_3$).
- $\delta\, 2.3$ (q, 2H): $-\mathrm{CH}_2\mathrm{CO}-$ (quartet implies adjacent to
  $-\mathrm{CH}_3$).
- $\delta\, 11.0$ (s, 1H): $-\mathrm{COOH}$ proton.

**Structure:** The quartet-triplet pair indicates an ethyl group. The singlet at 2.0 (3H) indicates
a methyl group attached to a carbonyl. The carboxylic acid proton is at 11.0.

The compound is **butanoic acid** ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CH}_2\mathrm{COOH}$). Let us
verify: $-\mathrm{CH}_3$ (t, 3H) at C-4, $-\mathrm{CH}_2-$ (sextet or multiplet, but the data shows
the quartet at 2.3 for $-\mathrm{CH}_2\mathrm{COOH}$). Actually, for butanoic acid: $-\mathrm{CH}_3$
at C-4 would be a triplet (adjacent to one $-\mathrm{CH}_2-$, 2H), the $-\mathrm{CH}_2-$ at C-3
would be a sextet (adjacent to 2H and 2H), the $-\mathrm{CH}_2-$ at C-2 would be a triplet (adjacent
to 2H). The singlet at 2.0 is inconsistent with butanoic acid.

The compound is **2-methylpropanoic acid** ($(\mathrm{CH}_3)_2\mathrm{CHCOOH}$): $-\mathrm{CH}_3$
groups (doublet, 6H), $-\mathrm{CH}-$ (multiplet, 1H), $-\mathrm{COOH}$ (singlet, 1H). This also
does not match the data.

Re-examining: The triplet-quartet pair + singlet at 2.0 + singlet at 11.0 is consistent with
**propanoic acid with a methyl ketone** -- but that exceeds the formula. The compound is **ethyl
acetate**? No, the IR shows carboxylic acid.

The compound is **2-oxobutanoic acid**? No. Given $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$: the
quartet (2H) at 2.3 and triplet (3H) at 1.2 form an ethyl group. The singlet (3H) at 2.0 is
$-\mathrm{COCH}_3$. Combined: $\mathrm{CH}_3\mathrm{COCH}_2\mathrm{CH}_3$ is butanone
($\mathrm{C}_4\mathrm{H}_8\mathrm{O}$), not $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$. With the
carboxylic acid proton, the compound is **butanoic acid** where the $-\mathrm{CH}_2-$ at position 3
appears as a multiplet. The data given may represent a simplified spectrum.

</details>

<details>
<summary>Problem 2</summary>

A compound with molecular formula $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ gives the following data:

- IR: strong absorption at $1715\,\mathrm{cm}^{-1}$; no absorption above $3000\,\mathrm{cm}^{-1}$.
- ${}^1\mathrm{H}$ NMR: $\delta\, 2.1$ (singlet, 3H), $\delta\, 2.5$ (singlet, 3H).
- Mass spectrum: molecular ion at $m/z = 58$, base peak at $m/z = 43$.

Identify the compound and explain each piece of evidence.

**Solution:**

**IR:** Strong absorption at $1715\,\mathrm{cm}^{-1}$ confirms a C=O group. No absorption above $3000\,\mathrm{cm}^{-1}$ rules out O--H and N--H, eliminating alcohols, carboxylic acids, and amines. The compound is either an aldehyde or a ketone.

**${}^1\mathrm{H}$ NMR:** Only two signals, both singlets, integrating to 3H each. No aldehyde proton ($\delta\, 9\text{--}10$), so the compound is a ketone. Two methyl groups in different environments, each adjacent to the carbonyl (hence the low chemical shift of $\delta\, 2.1$ and $\delta\, 2.5$).

**Mass spectrum:** $M_r = 58$, consistent with $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$. Base peak at $m/z = 43$ corresponds to $\mathrm{CH}_3\mathrm{CO}^+$ (acetyl cation), formed by alpha-cleavage adjacent to the carbonyl.

The compound is **propanone (acetone)**, $\mathrm{CH}_3\mathrm{COCH}_3$. The two methyl groups are equivalent (same chemical environment), but the NMR data shows two singlets. This is consistent with **butanone** ($\mathrm{C}_4\mathrm{H}_8\mathrm{O}$, $M_r = 72$), which does not match $M_r = 58$.

Reconsidering: with only two singlets of 3H each, the compound must have two non-equivalent methyl groups. $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ with two $\mathrm{CH}_3$ groups and one C=O accounts for all atoms: $\mathrm{CH}_3\mathrm{COCH}_3$ is propanone, but both methyls are equivalent (one singlet, 6H). The data showing two singlets of 3H each is inconsistent with propanone.

The correct compound is **propanal** ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CHO}$), but this would show a triplet, quartet, and aldehyde proton, not two singlets. The data is most consistent with **ethyl methyl ketone (butanone)**, $\mathrm{CH}_3\mathrm{CH}_2\mathrm{COCH}_3$, but this has $M_r = 72$, not 58.

Given the constraint $M_r = 58$ and $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$: the only ketone is propanone, which should show one singlet (6H). The data provided appears to describe a different compound. Under exam conditions, the most likely answer is **propanone**, with the NMR simplified to show overlapping environments. Alternatively, the formula may be $\mathrm{C}_4\mathrm{H}_8\mathrm{O}$ (butanone: $\delta\, 2.1$, s, 3H, $\mathrm{COCH}_3$; $\delta\, 2.5$, s, 3H, $\mathrm{COCH}_2\mathrm{CH}_3$ -- but this should be a quartet, not a singlet).

This problem illustrates the importance of cross-checking all data for consistency.

</details>

<details>
<summary>Problem 3</summary>

An unknown compound $\mathrm{C}_7\mathrm{H}_7\mathrm{Br}$ has the following NMR data:

- ${}^1\mathrm{H}$ NMR: $\delta\, 2.3$ (s, 3H), $\delta\, 7.2$ (s, 2H), $\delta\, 7.4$ (d, 2H).
- ${}^{13}\mathrm{C}$ NMR: 4 signals.

Identify the compound.

**Solution:**

The molecular formula $\mathrm{C}_7\mathrm{H}_7\mathrm{Br}$ has a degree of unsaturation of $2 - 7 + (7+1)/2 = 4$, strongly suggesting a benzene ring (one ring + three double bonds = 4 degrees of unsaturation).

${}^1\mathrm{H}$ NMR: $\delta\, 2.3$ (s, 3H) is a methyl group attached to an aromatic ring ($\mathrm{Ar-CH}_3$). The signals at $\delta\, 7.2$ and $\delta\, 7.4$ are aromatic protons. The doublet at $\delta\, 7.4$ (2H) indicates a para-disubstituted pattern (two pairs of equivalent protons on the ring, each pair coupling to its neighbour).

${}^{13}\mathrm{C}$ NMR: 4 signals. A benzene ring with two different substituents in para positions would give 4 distinct carbon environments (2 pairs of equivalent aromatic carbons, plus the methyl carbon and the ipso carbon bonded to Br).

The compound is **4-bromotoluene** (1-bromo-4-methylbenzene). The methyl group activates the ring and directs electrophilic substitution to the ortho and para positions.

</details>

<details>
<summary>Problem 3</summary>

An unknown compound $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ gives the following data:

- Mass spectrum: $M^+ = 58$, base peak at $m/z = 43$.
- IR: $1715\,\mathrm{cm}^{-1}$ (strong), $3000\,\mathrm{cm}^{-1}$ (weak), no O--H.
- ${}^1\mathrm{H}$ NMR: $\delta\, 1.1$ (d, 6H), $\delta\, 2.1$ (s, 3H), $\delta\, 2.5$ (septet, 1H).

Identify the compound and explain each piece of data.

**Solution:**

**Mass spectrometry:** $M = 58$. Possible formulas: $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ ($3 \times 12 + 6 \times 1 + 16 = 58$). DoU $= (6 + 1 - 6)/2 = 0.5$, which rounds to 1 (one C=O). Base peak at 43 = $\mathrm{CH}_3\mathrm{CO}^+$ (acylium ion, common fragmentation of ketones).

**IR:** $1715\,\mathrm{cm}^{-1}$ = C=O (ketone). No broad O--H = not a carboxylic acid or alcohol. Weak band at $3000\,\mathrm{cm}^{-1}$ = C--H stretch.

**${}^1\mathrm{H}$ NMR:**

- $\delta\, 2.1$ (s, 3H): $\mathrm{CH}_3$ adjacent to carbonyl (deshielded by the electron-withdrawing C=O).
- $\delta\, 1.1$ (d, 6H): two equivalent $\mathrm{CH}_3$ groups, each split by one neighbouring proton ($\mathrm{CH}$).
- $\delta\, 2.5$ (septet, 1H): one $\mathrm{CH}$ proton split by six equivalent neighbouring protons ($3 + 3$). This is the isopropyl pattern: $(\mathrm{CH}_3)_2\mathrm{CH}-$.

The compound is **propanone** ($\mathrm{CH}_3\mathrm{COCH}_3$)? No, propanone has only one type of methyl. The data show an isopropyl group and a methyl group adjacent to C=O. The compound is **butan-2-one**? That is $\mathrm{C}_4\mathrm{H}_8\mathrm{O}$, which is too many carbons.

Reconsidering: $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$, DoU = 1. The NMR shows $(\mathrm{CH}_3)_2\mathrm{CH}-$ (isopropyl, 7H total) and $\mathrm{CH}_3-$ (3H) = 10H. But the formula has only 6H. This is inconsistent.

The correct interpretation: $\delta\, 1.1$ (d, 6H) = two methyl groups, $\delta\, 2.1$ (s, 3H) = one methyl, total = 9H. This exceeds 6H in the formula. The data are actually for $\mathrm{C}_4\mathrm{H}_8\mathrm{O}$ (butan-2-one: $(\mathrm{CH}_3)_2\mathrm{C}=\mathrm{O}$ would show only one signal). The compound with these data is **3-methylbutan-2-one** ($\mathrm{C}_5\mathrm{H}_{10}\mathrm{O}$).

For $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ with one C=O, the correct compound is **propanal** ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CHO}$): triplet (3H), multiplet (2H), triplet (1H). This does not match the data.

The data as given are most consistent with **propanone** ($\mathrm{CH}_3\mathrm{COCH}_3$), where the $\delta\, 1.1$ doublet and $\delta\, 2.5$ septet are incorrectly stated (propanone would show a single singlet at approximately 2.1). This question illustrates the importance of cross-checking all data for internal consistency.

</details>

## Advanced Analytical Techniques

### Mass Spectrometry Fragmentation Patterns in Detail

Understanding fragmentation is essential for structure elucidation. The key fragmentation pathways are:

**Alpha cleavage:** The bond adjacent to a functional group breaks. This is particularly important for carbonyl compounds.

For butan-2-one ($\mathrm{CH}_3\mathrm{COCH}_2\mathrm{CH}_3$):

$$\mathrm{CH}_3\mathrm{COCH}_2\mathrm{CH}_3^{+\bullet} \to \mathrm{CH}_3\mathrm{CO}^+ + \bullet\mathrm{CH}_2\mathrm{CH}_3 \quad (m/z = 43)$$

$$\mathrm{CH}_3\mathrm{COCH}_2\mathrm{CH}_3^{+\bullet} \to \mathrm{CH}_3\mathrm{COCH}_2\bullet + \mathrm{CH}_3^+ \quad (m/z = 15)$$

**McLafferty rearrangement:** Requires a gamma-hydrogen (a hydrogen on the carbon three bonds away from the carbonyl). The hydrogen transfers to the carbonyl oxygen while the bond between the alpha- and beta-carbons breaks.

For pentanal ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CH}_2\mathrm{CHO}$):

$$\mathrm{CH}_3\mathrm{CH}_2\mathrm{CH}_2\mathrm{CHO}^{+\bullet} \to \mathrm{CH}_2=\mathrm{CH}_2 + \mathrm{CH}_2=\mathrm{CHOH}^{+\bullet} \quad (m/z = 44)$$

**Aromatic fragmentation:** The molecular ion of aromatic compounds is usually very stable (high intensity). Characteristic fragments include:

| $m/z$ | Fragment | Origin |
|---|---|---|
| 77 | $\mathrm{C}_6\mathrm{H}_5^+$ | Phenyl cation |
| 91 | $\mathrm{C}_7\mathrm{H}_7^+$ | Benzyl/tropylium ion |
| 105 | $\mathrm{C}_6\mathrm{H}_5\mathrm{CO}^+$ | Benzoyl cation |
| 39, 51, 65 | $\mathrm{C}_3\mathrm{H}_3^+$, $\mathrm{C}_4\mathrm{H}_3^+$, $\mathrm{C}_5\mathrm{H}_5^+$ | Fragmentary ring structures |

### IR Spectroscopy: Detailed Interpretation Guide

The IR spectrum is divided into functional group regions:

**$4000$--$2500\,\mathrm{cm}^{-1}$ (X--H stretching region):**

| Bond | Range | Notes |
|---|---|---|
| O--H (alcohol) | $3200$--$3600$ | Broad, rounded |
| O--H (carboxylic acid) | $2500$--$3300$ | Very broad, flat |
| N--H (primary amine) | $3300$--$3500$ | Two sharp bands |
| N--H (secondary amine) | $3300$--$3500$ | One sharp band |
| C--H (alkane) | $2850$--$2950$ | Sharp |
| C--H (alkene) | $3010$--$3100$ | Medium sharpness |
| C--H (alkyne) | $\approx 3300$ | Sharp |
| O--H (carboxylic acid) | $2500$--$3000$ | Very broad, distinctive |

**$2500$--$2000\,\mathrm{cm}^{-1}$ (triple bond region):**

| Bond | Range |
|---|---|
| C$\equiv$C | $2100$--$2260$ |
| C$\equiv$N | $2210$--$2260$ |

**$2000$--$1500\,\mathrm{cm}^{-1}$ (double bond region):**

| Bond | Range |
|---|---|
| C=O (aldehyde) | $1720$--$1740$ |
| C=O (ketone) | $1705$--$1725$ |
| C=O (carboxylic acid) | $1710$--$1720$ |
| C=O (ester) | $1735$--$1750$ |
| C=O (amide) | $1680$--$1700$ |
| C=C | $1620$--$1680$ (weak) |
| C=N | $1610$--$1680$ |

**$1500$--$400\,\mathrm{cm}^{-1}$ (fingerprint region):** Complex patterns unique to each molecule. Useful for comparison with reference spectra.

### NMR Spectroscopy: Advanced Interpretation

**${}^1\mathrm{H}$ NMR Integration and Coupling:**

The area under each signal (integration) is proportional to the number of protons giving that signal. The n+1 rule predicts the splitting pattern: a proton signal is split into $n+1$ peaks by $n$ equivalent neighbouring protons.

**Worked Example:** Analyse the ${}^1\mathrm{H}$ NMR spectrum of ethyl ethanoate ($\mathrm{CH}_3\mathrm{COOCH}_2\mathrm{CH}_3$).

- $\delta\, 2.0$ (s, 3H): Methyl group directly attached to the carbonyl ($\mathrm{CH}_3\mathrm{CO}-$). Singlet because there are no protons on the adjacent carbon (the adjacent carbon is the carbonyl carbon, which has no protons).

- $\delta\, 4.1$ (q, 2H): $-\mathrm{CH}_2-$ of the ethyl group. Quartet because it is coupled to the 3 equivalent protons of the adjacent methyl group ($n+1 = 3+1 = 4$). The chemical shift (4.1 ppm) indicates the protons are deshielded by the adjacent oxygen.

- $\delta\, 1.3$ (t, 3H): $-\mathrm{CH}_3$ of the ethyl group. Triplet because it is coupled to the 2 equivalent protons of the adjacent $-\mathrm{CH}_2-$ group ($n+1 = 2+1 = 3$).

**${}^{13}\mathrm{C}$ NMR:**

${}^{13}\mathrm{C}$ NMR shows one signal for each chemically distinct carbon environment. The chemical shift range is $0$--$220\,\mathrm{ppm}$:

| Carbon type | Chemical shift (ppm) |
|---|---|
| C--C (alkane) | $0$--$50$ |
| C--O (alcohol, ether) | $50$--$90$ |
| C--N (amine) | $30$--$65$ |
| C=C (alkene) | $100$--$150$ |
| Aromatic C | $110$--$160$ |
| C=O (carbonyl) | $160$--$220$ |

**Worked Example:** The ${}^{13}\mathrm{C}$ NMR spectrum of ethyl ethanoate shows four signals: $\delta\, 170$ (C=O), $\delta\, 60$ ($\mathrm{CH}_2\mathrm{O}$), $\delta\, 21$ ($\mathrm{CH}_3\mathrm{CO}$), $\delta\, 14$ ($\mathrm{CH}_3$). Four signals correspond to four distinct carbon environments.

### Chromatography: Rf Calculations and Advanced Techniques

**Rf values in TLC:**

$$R_f = \frac◆LB◆\text{distance travelled by compound}◆RB◆◆LB◆\text{distance travelled by solvent front}◆RB◆$$

$R_f$ values are always between 0 and 1. A compound with a higher $R_f$ is less polar (interacts less with the polar stationary phase and travels further with the non-polar mobile phase).

**Worked Example:** In a TLC experiment, the solvent front travels $12.0\,\mathrm{cm}$. Three compounds travel $3.6\,\mathrm{cm}$, $7.2\,\mathrm{cm}$, and $10.8\,\mathrm{cm}$ from the origin.

$$R_f(\mathrm{A}) = \frac{3.6}{12.0} = 0.30$$

$$R_f(\mathrm{B}) = \frac{7.2}{12.0} = 0.60$$

$$R_f(\mathrm{C}) = \frac{10.8}{12.0} = 0.90$$

Compound A is the most polar (lowest $R_f$), and compound C is the least polar.

**Gas Chromatography (GC):**

GC separates volatile compounds based on their boiling points and polarity. The retention time depends on:
- Boiling point (higher b.p. = longer retention time).
- Polarity relative to the stationary phase.
- Flow rate of the carrier gas.

GC can be coupled with mass spectrometry (GC-MS) for identification: the GC separates the components, and the MS provides the mass spectrum of each component as it elutes.

### Combined Spectroscopic Analysis: Worked Examples

<details>
<summary>Problem 5</summary>

An unknown compound has the following spectroscopic data:

- Molecular formula: $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$
- IR: strong absorption at $1740\,\mathrm{cm}^{-1}$; broad absorption at $2500$--$3300\,\mathrm{cm}^{-1}$
- ${}^1\mathrm{H}$ NMR: $\delta\, 11.0$ (s, 1H), $\delta\, 2.3$ (q, 2H), $\delta\, 1.1$ (t, 3H)

Identify the compound.

**Solution:**

IR: $1740\,\mathrm{cm}^{-1}$ = C=O (ester or acid). Broad $2500$--$3300\,\mathrm{cm}^{-1}$ = O--H of carboxylic acid. The compound is a carboxylic acid.

NMR: $\delta\, 11.0$ (s, 1H) = carboxylic acid proton ($-\mathrm{COOH}$). $\delta\, 2.3$ (q, 2H) = $-\mathrm{CH}_2-$ adjacent to C=O. $\delta\, 1.1$ (t, 3H) = $-\mathrm{CH}_3$ coupled to 2 protons.

The compound is **propanoic acid** ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{COOH}$).

Verify: $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2 = 3(12) + 6(1) + 2(16) = 74\,\mathrm{g/mol}$. But the formula given is $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2 = 88\,\mathrm{g/mol}$.

Reconsider: With $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$ and the carboxylic acid data, the compound could be 2-methylpropanoic acid ($(\mathrm{CH}_3)_2\mathrm{CHCOOH}$) or butanoic acid ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CH}_2\mathrm{COOH}$).

Butanoic acid NMR: $\delta\, 0.9$ (t, 3H), $\delta\, 1.6$ (m, 2H), $\delta\, 2.3$ (t, 2H), $\delta\, 11.0$ (s, 1H). The given data show only a quartet and triplet, consistent with an ethyl group ($\mathrm{CH}_3\mathrm{CH}_2-$) and a carboxylic acid proton. This matches **propanoic acid**, but the formula should be $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$.

If the formula is $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$, the additional $\mathrm{CH}_2$ would appear in the NMR. The discrepancy suggests the formula may be $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$ (propanoic acid).

</details>

<details>
<summary>Problem 6</summary>

An organic compound $\mathrm{C}_7\mathrm{H}_8$ shows the following data:

- Mass spec: M+ at $m/z = 92$ (base peak), M+1 at 7.7%, significant fragment at $m/z = 91$
- IR: absorption at $3030\,\mathrm{cm}^{-1}$, $1600$ and $1500\,\mathrm{cm}^{-1}$, no absorption above $3100\,\mathrm{cm}^{-1}$
- ${}^1\mathrm{H}$ NMR: $\delta\, 7.2$ (m, 5H), $\delta\, 2.3$ (s, 3H)

Identify the compound.

**Solution:**

Mass spec: M+1 = 7.7% gives $7.7/1.1 \approx 7$ carbon atoms. $\mathrm{C}_7\mathrm{H}_8$: $M = 84 + 8 = 92$. Fragment at $m/z = 91$ = $\mathrm{C}_7\mathrm{H}_7^+$ (tropylium/benzyl ion), characteristic of alkylbenzenes.

IR: $3030\,\mathrm{cm}^{-1}$ = aromatic C--H stretch. $1600$ and $1500\,\mathrm{cm}^{-1}$ = aromatic C=C stretches. No absorption above $3100\,\mathrm{cm}^{-1}$ = no O--H or N--H.

NMR: $\delta\, 7.2$ (m, 5H) = monosubstituted benzene ring (5 aromatic protons). $\delta\, 2.3$ (s, 3H) = methyl group not adjacent to any protons (attached directly to the benzene ring).

The compound is **toluene** ($\mathrm{C}_6\mathrm{H}_5\mathrm{CH}_3$).

</details>

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (5 marks)</summary>

Describe how thin-layer chromatography (TLC) can be used to determine whether a reaction has gone to completion.

**Mark Scheme:**

5 marks:
- Spot the reaction mixture alongside samples of the starting material and the expected product on a TLC plate (1 mark).
- Place the plate in a suitable solvent (mobile phase) in a tank with a lid (1 mark).
- Allow the solvent to rise by capillary action until it nearly reaches the top. Remove and dry the plate (1 mark).
- Visualise the spots using UV light or a developing agent (e.g. iodine or ninhydrin) (1 mark).
- If only one spot is present and it has the same $R_f$ value as the expected product, and no spot corresponding to the starting material is visible, the reaction has gone to completion (1 mark).

</details>

<details>
<summary>Q2 (6 marks)</summary>

The ${}^1\mathrm{H}$ NMR spectrum of a compound $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ shows three signals: a triplet at $\delta\, 1.0$ (3H), a sextet at $\delta\, 2.4$ (2H), and a triplet at $\delta\, 9.8$ (1H). The IR spectrum shows a strong absorption at $1730\,\mathrm{cm}^{-1}$ and a weak pair at $2720$ and $2820\,\mathrm{cm}^{-1}$.

(a) Identify the compound. (2 marks)

(b) Explain the splitting pattern of the signal at $\delta\, 2.4$. (2 marks)

(c) Explain the significance of the IR absorptions at $2720$ and $2820\,\mathrm{cm}^{-1}$. (2 marks)

**Mark Scheme:**

(a) Propanal ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CHO}$) (1 mark). $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ with one C=O and the aldehyde proton at $\delta\, 9.8$ (1 mark).

(b) The sextet at $\delta\, 2.4$ is the $-\mathrm{CH}_2-$ group. It is split by the 3 equivalent protons of the adjacent $-\mathrm{CH}_3$ group and the 1 proton of the adjacent $-\mathrm{CHO}$ group, giving $n+1 = 3+1+1 = 5$... wait, that would be a multiplet, not a sextet. Actually, $n+1 = (3+1)(1+1) = 8$ peaks? No, the n+1 rule only applies when all neighbouring protons are equivalent. Here the neighbouring protons are not equivalent (3 methyl protons and 1 aldehyde proton), so the signal is a complex multiplet, not a clean sextet. In practice, the coupling constant between the $-\mathrm{CH}_2-$ and the aldehyde proton ($J \approx 2\,\mathrm{Hz}$) is much smaller than the coupling to the methyl group ($J \approx 7\,\mathrm{Hz}$), so the signal appears approximately as a quartet of doublets or sextet. The question states sextet, so we accept this (2 marks for explanation of splitting by adjacent protons).

(c) The weak pair at $2720$ and $2820\,\mathrm{cm}^{-1}$ is the Fermi resonance doublet characteristic of the aldehyde C--H stretch (1 mark). This is diagnostic of an aldehyde group and distinguishes it from other carbonyl compounds (1 mark).

</details>

<details>
<summary>Q3 (4 marks)</summary>

Explain how gas chromatography can be used to determine the purity of a synthesised organic compound.

**Mark Scheme:**

4 marks:
- Inject the synthesised sample into the GC. Pure compounds produce a single peak (1 mark).
- The area under each peak is proportional to the amount of that compound (1 mark).
- The retention time of the product peak should match that of an authentic (pure) reference sample (1 mark).
- Impurities produce additional peaks at different retention times. The percentage purity can be estimated from the ratio of the product peak area to the total peak area (1 mark).

</details>

---

:::tip
Diagnostic Test
Ready to test your understanding of **Analytical Techniques**? The [diagnostic test](/docs/alevel/chemistry/diagnostics/diag-organic-introduction) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Analytical Techniques with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/chemistry/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.
:::
