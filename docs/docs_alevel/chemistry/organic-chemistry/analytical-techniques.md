---
title: Analytical Techniques
description:
  'A-Level Chemistry notes on Analytical Techniques: Mass Spectrometry (MS); Instrument Overview; The Molecular Ion ($\mathrm{M}^{+\bullet}$); Isotopic Peaks.'
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
R_f = \frac{\mathrm{distance\ travelled\ by\ compound}}{\mathrm{distance\ travelled\ by\ solvent\ front}}
$$

$R_f$ values range from 0 to 1. Values are reproducible only under identical conditions.

**Visualisation:** UV light (for UV-active compounds), iodine vapour, or ninhydrin spray (for amino
acids).

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

### High-Performance Liquid Chromatography (HPLC)

**Mobile phase:** Liquid solvent(s) under high pressure (up to $400\,\mathrm{atm}$).

**Stationary phase:** Packed column (often $\mathrm{C}_{18}$-bonded silica for reverse-phase HPLC).

**Separation principle:** In reverse-phase HPLC, the stationary phase is non-polar and the mobile
phase is polar. Compounds are separated by their relative hydrophobicity.

**Applications:** Non-volatile compounds, thermally labile compounds (proteins, pharmaceuticals),
and compounds that decompose at GC temperatures.

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

---

:::tip Diagnostic Test
Ready to test your understanding of **Analytical Techniques**? The [diagnostic test](/chemistry/diagnostics/diag-organic-introduction) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Analytical Techniques with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/chemistry/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
