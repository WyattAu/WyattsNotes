---
title: Analytical Chemistry
date: 2026-04-14
tags:
  - Chemistry
  - Advanced Highers
categories:
  - Chemistry
slug: analytical-chemistry
---

# Analytical Chemistry

:::info

This chapter covers **Advanced Higher** Chemistry content, extending beyond Higher level.

:::

## Analytical Techniques

### Spectroscopy Overview

Analytical chemistry uses physical methods to determine the composition and structure of substances.
The main spectroscopic techniques are:

- **Infrared (IR) spectroscopy**
- **Mass spectrometry (MS)**
- **Nuclear magnetic resonance (NMR) spectroscopy**
- **UV-Visible spectroscopy**

### Comparison of Techniques

| Technique | Information provided                     | Sample type        | Destructive?          |
| --------- | ---------------------------------------- | ------------------ | --------------------- |
| IR        | Functional groups                        | Solid/liquid/gas   | No                    |
| MS        | Molecular mass, fragments                | Solid/liquid/gas   | Yes                   |
| NMR       | Molecular structure, proton environments | Solution           | No                    |
| UV-Vis    | Concentration, conjugation               | Solution           | No                    |
| TLC       | Number of components, purity             | Solution           | No                    |
| GC        | Separation, identification (with MS)     | Volatile compounds | No (GC) / Yes (GC-MS) |

### Infrared Spectroscopy

IR spectroscopy identifies functional groups by measuring the absorption of infrared radiation.
Covalent bonds absorb IR radiation at characteristic frequencies, causing them to vibrate.

**Key absorptions:**

| Bond                  | Wavenumber (cm$^{-1}$) | Type        |
| --------------------- | ---------------------- | ----------- |
| O-H (alcohol)         | 3200-3600              | Broad       |
| O-H (carboxylic acid) | 2500-3300              | Very broad  |
| N-H                   | 3300-3500              | Medium      |
| C-H                   | 2850-3100              | Weak-medium |
| C=O                   | 1680-1750              | Strong      |
| C=C                   | 1620-1680              | Medium      |
| C-O                   | 1000-1300              | Strong      |
| C-Cl                  | 600-800                | Strong      |
| C≡N                   | 2210-2260              | Medium      |

**Fingerprint region:** Below $1500 \text{ cm}^{-1}$, the pattern is unique to each molecule and can
be compared with reference spectra.

**Worked Example 1:** An organic compound with molecular formula $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$
shows a strong absorption at $1715 \text{ cm}^{-1}$ and a broad absorption at
$2500-3300 \text{ cm}^{-1}$. Identify the compound.

The strong absorption at $1715 \text{ cm}^{-1}$ indicates a $\mathrm{C}=\mathrm{O}$ group. The very
broad absorption at $2500-3300 \text{ cm}^{-1}$ is characteristic of the $\mathrm{O}-\mathrm{H}$ in a
carboxylic acid. The compound is propanoic acid ($\mathrm{CH}_3\mathrm{CH}_2\text{COOH}$).

**Worked Example 2:** An IR spectrum shows strong absorptions at $3300 \text{ cm}^{-1}$ (broad) and
$1050 \text{ cm}^{-1}$. Identify the functional groups present.

The broad absorption at $3300 \text{ cm}^{-1}$ indicates an O-H group (alcohol). The absorption at
$1050 \text{ cm}^{-1}$ is in the C-O stretching region, consistent with a primary alcohol
($\text{C-O}$ stretch at $1050 \text{ cm}^{-1}$ is characteristic of primary alcohols).

### Mass Spectrometry

Mass spectrometry determines the molecular mass and structure by ionising molecules and separating
them by their mass-to-charge ratio ($m/z$).

**Process:**

1. **Ionisation:** Molecules are bombarded with electrons, ejecting an electron to form a molecular
   ion ($\mathrm{M}^+^\bullet$)
2. **Acceleration:** Ions are accelerated by an electric field
3. **Deflection:** Ions are deflected by a magnetic field (lighter ions deflected more)
4. **Detection:** Ions hit a detector, producing a mass spectrum

**Molecular ion peak:** The peak at the highest $m/z$ value (for the most abundant isotope) gives
the molecular mass.

**Isotopic patterns:**

- Chlorine: $\mathrm{Cl}^{35}:\mathrm{Cl}^{37} \approx 3:1$ ratio
- Bromine: $\mathrm{Br}^{79}:\mathrm{Br}^{81} \approx 1:1$ ratio
- Carbon: $\mathrm{C}^{12}:\mathrm{C}^{13} \approx 99:1$ ratio

**Fragmentation:**

Common fragmentation patterns:

| Fragment                 | $m/z$ | Origin       |
| ------------------------ | ----- | ------------ |
| $\mathrm{CH}_3^+$          | 15    | Methyl group |
| $\mathrm{OH}^+$            | 17    | Hydroxyl     |
| $\mathrm{C}_2\mathrm{H}_5^+$ | 29    | Ethyl group  |
| $\mathrm{CH}_3\mathrm{CO}^+$ | 43    | Acetyl       |
| $\mathrm{C}_4\mathrm{H}_9^+$ | 57    | Butyl        |
| $\mathrm{C}_6\mathrm{H}_5^+$ | 77    | Phenyl       |

**Worked Example 3:** The mass spectrum of a chlorinated compound shows peaks at $m/z = 78$ and 80
in a 3:1 ratio. Identify the molecular ion.

The 3:1 ratio is characteristic of one chlorine atom. If the compound contains one chlorine, then:

- Peak at 78: contains $\mathrm{Cl}^{35}$, so the rest of the molecule has mass $78 - 35 = 43$.
- Peak at 80: contains $\mathrm{Cl}^{37}$, so the rest has mass $80 - 37 = 43$.

The molecular formula is $\mathrm{C}_2\mathrm{H}_3\mathrm{Cl}$ (mass: $24 + 3 + 35 = 62$... that does not
match). Let me recalculate.

$M$ with $\mathrm{Cl}^{35}$: $78 - 35 = 43$. $M$ with $\mathrm{Cl}^{37}$: $80 - 37 = 43$. The remainder
is 43, which could be $\mathrm{C}_2\mathrm{H}_3\mathrm{O}$ (mass $24 + 3 + 16 = 43$) or
$\mathrm{C}_3\mathrm{H}_7$ (mass $36 + 7 = 43$). The molecular formula is
$\mathrm{C}_2\mathrm{H}_3\mathrm{ClO}$ (chloroethanal, $M_r = 78$) or $\mathrm{C}_3\mathrm{H}_7\mathrm{Cl}$
(1-chloropropane or 2-chloropropane, $M_r = 78.5$... not quite). Given the exact match, the answer
is chloroethanal ($\mathrm{CH}_2\text{ClCHO}$).

**Worked Example 4:** The mass spectrum of a compound shows a molecular ion peak at $m/z = 58$ and a
prominent peak at $m/z = 43$. Suggest a structure.

$M = 58$. Possible formula: $\mathrm{C}_3\mathrm{H}_6\mathrm{O}$ (propanone, $M_r = 58$).

The peak at $m/z = 43$ corresponds to $\mathrm{CH}_3\mathrm{CO}^+$, formed by alpha cleavage of
propanone.

$$\mathrm{CH}_3\text{COCH}_3 \to \mathrm{CH}_3\mathrm{CO}^+ + \mathrm{CH}_3^\bullet$$

The compound is likely propanone.

### Nuclear Magnetic Resonance (NMR) Spectroscopy

#### $^1\mathrm{H}$ NMR

Proton NMR provides information about the hydrogen environments in a molecule.

**Chemical shift ($\delta$):** Measured in ppm relative to TMS (tetramethylsilane) as reference
($\delta = 0$).

| Proton environment              | $\delta$ (ppm)     |
| ------------------------------- | ------------------ |
| $\mathrm{R}-\mathrm{CH}_3$          | 0.9-1.2            |
| $\mathrm{R}_2-\mathrm{CH}_2$        | 1.2-1.5            |
| $\mathrm{R}-\mathrm{OH}$            | 1.0-5.5 (variable) |
| $\mathrm{R}-\mathrm{CH}_2-\mathrm{X}$ | 2.0-4.5            |
| $\mathrm{R}-\mathrm{CHO}$           | 9.0-10.0           |
| $\mathrm{R}-\text{COOH}$          | 10.0-13.0          |
| Aromatic                        | 6.5-8.5            |

**Key features of an NMR spectrum:**

1. **Number of signals:** Equals the number of different proton environments
2. **Integration (area under peak):** Proportional to the number of protons in that environment
3. **Splitting (multiplicity):** Given by the $n + 1$ rule (a signal is split into $n + 1$ peaks by
   $n$ neighbouring protons)

**Derivation of the $n + 1$ rule:**

Neighbouring protons on adjacent carbons interact (spin-spin coupling) because their nuclear spins
can be aligned with or against the external magnetic field. For $n$ equivalent neighbouring protons,
there are $n + 1$ possible spin arrangements (and therefore $n + 1$ possible local magnetic fields
experienced by the observed proton). This gives $n + 1$ peaks with intensities following Pascal's
triangle.

**Worked Example 5:** The $^1\mathrm{H}$ NMR spectrum of a compound with formula
$\mathrm{C}_3\mathrm{H}_8\mathrm{O}$ shows:

- A triplet at $\delta = 1.2$ (integration 3)
- A quartet at $\delta = 3.7$ (integration 2)
- A singlet at $\delta = 2.5$ (integration 1, exchanges with $\mathrm{D}_2\mathrm{O}$)

Identify the compound.

The singlet that exchanges with $\mathrm{D}_2\mathrm{O}$ is an $\mathrm{O}-\mathrm{H}$ proton. The triplet
(3H) and quartet (2H) indicate a $\mathrm{CH}_3\mathrm{CH}_2$ group. The quartet is shifted to
$\delta = 3.7$, suggesting the $\mathrm{CH}_2$ is adjacent to an electronegative oxygen. The compound
is ethanol ($\mathrm{CH}_3\mathrm{CH}_2\mathrm{OH}$).

**Worked Example 6:** A compound with molecular formula $\mathrm{C}_4\mathrm{H}_{10}\mathrm{O}$ has two
$^1\mathrm{H}$ NMR signals: a septet at $\delta = 3.9$ (1H) and a doublet at $\delta = 1.2$ (6H).
Identify the compound.

The septet (7 peaks) indicates 6 neighbouring protons. The doublet (2 peaks) indicates 1
neighbouring proton. The chemical shift of $\delta = 3.9$ suggests the proton is on a carbon bonded
to oxygen. The compound is 2-methylpropan-2-ol: $(\mathrm{CH}_3)_3\mathrm{COH}$ has three equivalent
$\mathrm{CH}_3$ groups (6H, doublet split by 1H) and one $\mathrm{CH}$ proton (1H, septet split by 6H).

Wait, $(\mathrm{CH}_3)_3\mathrm{COH}$ has a quaternary carbon with OH, so the H on oxygen would be a
singlet. The compound is better described as $(\mathrm{CH}_3)_2\text{CHCH}_2\mathrm{OH}$... No. Let us
re-analyse.

A septet from 1 proton split by 6 equivalent protons, and a doublet from 6 protons split by 1
proton. This pattern is characteristic of an isopropyl group: $(\mathrm{CH}_3)_2\mathrm{CH}-$. The
chemical shift of the CH proton at $\delta = 3.9$ suggests it is attached to oxygen. The compound is
propan-2-ol ($\mathrm{CH}_3\text{CH(OH)CH}_3$).

#### $^{13}\mathrm{C}$ NMR

Carbon-13 NMR identifies the number of different carbon environments.

- No splitting (proton-decoupled)
- Each signal represents a unique carbon environment
- Chemical shifts range from 0-220 ppm

| Carbon environment           | $\delta$ (ppm) |
| ---------------------------- | -------------- |
| $\mathrm{C}-\mathrm{C}$          | 0-50           |
| $\mathrm{C}-\mathrm{O}$          | 50-90          |
| $\mathrm{C}=\mathrm{C}$ (alkene) | 100-150        |
| Aromatic                     | 100-150        |
| $\mathrm{C}=\mathrm{O}$          | 160-220        |

### UV-Visible Spectroscopy

UV-Vis spectroscopy measures the absorption of ultraviolet and visible light by molecules.

**Beer-Lambert Law:**

$$A = \varepsilon c l$$

where $A$ is absorbance, $\varepsilon$ is the molar absorptivity (L mol$^{-1}$ cm$^{-1}$), $c$ is
concentration (mol/L), and $l$ is the path length (cm).

**Derivation:**

The absorbance is proportional to the number of absorbing molecules in the light path. If a solution
of concentration $c$ and path length $l$ contains $c \times l$ moles per unit area, then doubling
$c$ or $l$ doubles the number of absorbers and hence the absorbance. The proportionality constant is
the molar absorptivity $\varepsilon$, which depends on the substance and wavelength.

**Applications:** Determining concentrations, following reaction kinetics, identifying conjugated
systems.

**Worked Example 7:** A solution of a compound with
$\varepsilon = 12500 \text{ L mol}^{-1}\text{ cm}^{-1}$ has an absorbance of 0.625 in a
$1 \text{ cm}$ cuvette. Find the concentration.

$$c = \frac{A}{\varepsilon l} = \frac{0.625}{12500 \times 1} = 5.0 \times 10^{-5} \text{ mol/L}$$

**Worked Example 8:** A solution has absorbance 0.450 at 520 nm in a 2 cm cuvette. If
$\varepsilon = 15000 \text{ L mol}^{-1}\text{ cm}^{-1}$, find the concentration.

$$c = \frac{A}{\varepsilon l} = \frac{0.450}{15000 \times 2} = 1.5 \times 10^{-5} \text{ mol/L}$$

---

## Chromatography

### Principles

Chromatography separates mixtures based on differential distribution between a stationary phase and
a mobile phase.

**$R_f$ values:**

$$R_f = \frac{\text{distance travelled by substance}}{\text{distance travelled by solvent front}}$$

### Thin Layer Chromatography (TLC)

- Stationary phase: silica gel on a glass plate
- Mobile phase: solvent
- Visualisation: UV light or iodine vapour
- Used for quick, qualitative analysis

### Gas Chromatography (GC)

- Stationary phase: high-boiling liquid coating inside a capillary column
- Mobile phase: inert carrier gas (He, N$_2$)
- Separates volatile compounds
- Coupled with mass spectrometry (GC-MS) for identification

**Retention time:** The time a compound takes to pass through the column. Used for identification by
comparison with standards.

### High Performance Liquid Chromatography (HPLC)

- Stationary phase: packed column with small particles
- Mobile phase: liquid solvent (under high pressure)
- Used for non-volatile or thermally unstable compounds

### Comparison of Chromatographic Techniques

| Feature          | TLC                            | GC                      | HPLC                          |
| ---------------- | ------------------------------ | ----------------------- | ----------------------------- |
| Mobile phase     | Liquid                         | Gas                     | Liquid                        |
| Stationary phase | Silica gel                     | Liquid on solid support | Solid particles               |
| Sample type      | Non-volatile, thermally stable | Volatile                | Any (especially non-volatile) |
| Detection        | Visual, UV                     | FID, MS                 | UV, MS                        |
| Resolution       | Low                            | High                    | Very high                     |
| Speed            | Minutes                        | Minutes                 | Minutes                       |

**Worked Example 9:** In TLC, substance A travels 2.5 cm and substance B travels 4.0 cm while the
solvent front travels 8.0 cm. Calculate the $R_f$ values and identify which substance is more polar.

$$R_f(\mathrm{A}) = \frac{2.5}{8.0} = 0.31$$ $$R_f(\mathrm{B}) = \frac{4.0}{8.0} = 0.50$$

Substance A has a lower $R_f$ value, meaning it travels less far. On silica gel (a polar stationary
phase), more polar substances are more strongly attracted to the stationary phase and travel less
far. Therefore, substance A is more polar than substance B.

---

## Combined Spectroscopic Analysis

### Systematic Approach to Structure Determination

1. **Molecular formula:** From mass spectrometry (molecular ion peak) or given data.
2. **Degree of unsaturation (DBE):** $$\mathrm{DBE} = \frac{2C + 2 + N - H - X}{2}$$ where C, N, H, X
   are the numbers of carbon, nitrogen, hydrogen, and halogen atoms.
3. **Functional groups:** From IR spectroscopy.
4. **Carbon framework:** From $^{13}\mathrm{C}$ NMR (number of signals = number of different C
   environments).
5. **Hydrogen environments:** From $^1\mathrm{H}$ NMR (chemical shift, integration, splitting).
6. **Confirm:** Check that the proposed structure is consistent with all data.

**Worked Example 10:** Combined IR, mass spec, and NMR data for an unknown compound
$\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$ shows: IR absorption at $1740 \text{ cm}^{-1}$, molecular ion at
$m/z = 74$, and $^1\mathrm{H}$ NMR singlet at $\delta = 3.7$ (3H), singlet at $\delta = 2.1$ (3H).

**Step 1:** Molecular formula $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$, $M_r = 74$.

**Step 2:** DBE $= (2 \times 3 + 2 - 6)/2 = (6 + 2 - 6)/2 = 1$. One double bond or ring.

**Step 3:** IR absorption at $1740 \text{ cm}^{-1}$ indicates a C=O group. This accounts for the DBE
of 1.

**Step 4:** $^1\mathrm{H}$ NMR shows only two signals (singlets), indicating two types of protons that
are not coupled to each other. Integration 3:3, so 3H each.

**Step 5:** Singlet at $\delta = 3.7$ (3H) is characteristic of a $\mathrm{OCH}_3$ group (methyl
ester). Singlet at $\delta = 2.1$ (3H) is a $\mathrm{CH}_3\mathrm{CO}$ group (acetyl).

**Conclusion:** The compound is methyl ethanoate ($\mathrm{CH}_3\text{COOCH}_3$).

**Worked Example 11:** A compound $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$ has $^1\mathrm{H}$ NMR signals at
$\delta = 1.2$ (triplet, 3H), $\delta = 2.3$ (quartet, 2H), and $\delta = 11.5$ (singlet, 1H).
Identify the compound.

**Step 1:** Molecular formula $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$.

**Step 2:** DBE $= (2 \times 4 + 2 - 8)/2 = 1$. One double bond or ring.

**Step 3:** Singlet at $\delta = 11.5$ (1H) is characteristic of a carboxylic acid proton.

**Step 4:** Triplet (3H) at $\delta = 1.2$ and quartet (2H) at $\delta = 2.3$ indicate a
$\mathrm{CH}_3\mathrm{CH}_2$ group. The quartet at $\delta = 2.3$ is shifted downfield, suggesting the
$\mathrm{CH}_2$ is adjacent to a carbonyl group.

**Conclusion:** The compound is propanoic acid ($\mathrm{CH}_3\mathrm{CH}_2\text{COOH}$).

---

## Common Pitfalls

1. **IR spectroscopy:** The O-H stretch in carboxylic acids is very broad (2500-3300 cm$^{-1}$), not
   a sharp peak.

2. **Mass spectrometry:** The molecular ion peak may be very weak or absent for easily fragmented
   compounds.

3. **NMR splitting:** The $n + 1$ rule applies only to chemically equivalent neighbouring protons.
   Protons on adjacent carbons that are chemically different give complex splitting patterns.

4. **$R_f$ values:** These are always between 0 and 1. They depend on the solvent system and must be
   compared with a standard run on the same plate.

5. **Beer-Lambert Law:** Only valid for dilute solutions (typically $A < 2$).

6. **Isotopic patterns:** Chlorine gives 3:1 ratio; bromine gives 1:1. Do not confuse these.

7. **NMR integration:** Integration gives the ratio of protons, not the absolute number. A 3:2 ratio
   could mean 3H:2H, 6H:4H, etc.

8. **TLC:** Substances with similar $R_f$ values may not be resolved. A different solvent system
   should be tried.

---

## Practice Questions

1. An IR spectrum shows strong absorptions at 3300 cm$^{-1}$ (broad) and 1050 cm$^{-1}$. Identify
   the functional groups present.

2. The mass spectrum of a chlorinated compound shows peaks at $m/z = 78$ and 80 in a 3:1 ratio.
   Identify the molecular ion.

3. A compound $\mathrm{C}_4\mathrm{H}_8\mathrm{O}_2$ has $^1\mathrm{H}$ NMR signals at $\delta = 1.2$
   (triplet, 3H), $\delta = 2.3$ (quartet, 2H), and $\delta = 11.5$ (singlet, 1H). Identify the
   compound and explain the spectrum.

4. A solution has absorbance 0.450 at 520 nm in a 2 cm cuvette. If
   $\varepsilon = 15000 \text{ L mol}^{-1}\text{ cm}^{-1}$, find the concentration.

5. Explain how GC-MS can be used to identify an unknown compound in a mixture.

6. A compound with molecular formula $\mathrm{C}_4\mathrm{H}_{10}\mathrm{O}$ has two $^1\mathrm{H}$ NMR
   signals: a septet at $\delta = 3.9$ (1H) and a doublet at $\delta = 1.2$ (6H). Identify the
   compound.

7. In TLC, substance A travels 2.5 cm and substance B travels 4.0 cm while the solvent front travels
   8.0 cm. Calculate the $R_f$ values and identify which substance is more polar.

8. Combined IR, mass spec, and NMR data for an unknown compound $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$
   shows: IR absorption at $1740 \text{ cm}^{-1}$, molecular ion at $m/z = 74$, and $^1\mathrm{H}$ NMR
   singlet at $\delta = 3.7$ (3H), singlet at $\delta = 2.1$ (3H). Identify the compound.

9. Calculate the degree of unsaturation for each of the following molecular formulae: (a)
   $\mathrm{C}_6\mathrm{H}_{12}$, (b) $\mathrm{C}_4\mathrm{H}_{10}\mathrm{O}$, (c)
   $\mathrm{C}_7\mathrm{H}_{12}\mathrm{O}_2$, (d) $\mathrm{C}_8\mathrm{H}_8$.

10. A compound $\mathrm{C}_4\mathrm{H}_{10}\mathrm{O}$ has $^1\mathrm{H}$ NMR: triplet at $\delta = 0.9$
    (3H), multiplet at $\delta = 1.4$ (2H), multiplet at $\delta = 1.6$ (2H), triplet at
    $\delta = 3.6$ (2H), singlet at $\delta = 2.5$ (1H, exchanges with $\mathrm{D}_2\mathrm{O}$).
    Identify the compound and explain the splitting pattern.

11. Explain why GC is not suitable for analysing ionic compounds, and suggest an alternative
    technique.

12. The mass spectrum of a compound shows the molecular ion peak at $m/z = 120$ with a smaller peak
    at $m/z = 122$ of approximately half the intensity. Explain what this indicates about the
    composition of the compound.

---

## Advanced NMR Concepts

### Spin-Spin Coupling Constants

The separation between the peaks in a multiplet is called the coupling constant $J$, measured in Hz.
Coupling constants provide information about the spatial relationship between coupled protons.

| Coupling type      | Typical $J$ (Hz) | Relationship                     |
| ------------------ | ---------------- | -------------------------------- |
| Vicinal ($^3J$)    | 5-8              | Protons on adjacent carbons      |
| Geminal ($^2J$)    | 0-20             | Protons on the same carbon       |
| Long-range ($^4J$) | 0-3              | Protons separated by three bonds |

**Application:** In aromatic systems, ortho coupling ($J \approx 7$ Hz) is larger than meta coupling
($J \approx 2$ Hz) or para coupling ($J \approx 0$ Hz).

### DEPT $^{13}\mathrm{C}$ NMR

DEPT (Distortionless Enhancement by Polarization Transfer) is a technique that distinguishes between
different types of carbon atoms:

| Experiment | CH$_3$ | CH$_2$ | CH  | C (quaternary) |
| ---------- | ------ | ------ | --- | -------------- |
| DEPT-90    | --     | --     | Up  | --             |
| DEPT-135   | Up     | Down   | Up  | --             |

Quaternary carbons appear only in the standard broadband-decoupled $^{13}\mathrm{C}$ NMR spectrum.

**Worked Example 13:** A compound $\mathrm{C}_5\mathrm{H}_{10}\mathrm{O}_2}$ has the following
$^{13}\mathrm{C}$ NMR data: $\delta = 14.1$ (CH$_3$), 22.6 (CH$_2$), 31.8 (CH$_2$), 60.5 (CH$_2$),
174.4 (C=O). Identify the compound.

The signal at $\delta = 174.4$ is a carbonyl carbon (carboxylic acid or ester). The signal at
$\delta = 60.5$ is a CH$_2$ bonded to oxygen. The three signals in the 14-32 ppm range are alkyl
carbons. The pattern is consistent with butanoic acid
($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CH}_2\text{COOH}$).

---

## Elemental Analysis

### Combustion Analysis

When an organic compound containing C, H, and possibly other elements is burned completely, the
products are $\mathrm{CO}_2$, $\mathrm{H}_2\mathrm{O}$, and other oxides.

**Worked Example 14:** A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. Find its empirical
formula.

Assume 100 g:

- $n(\mathrm{C}) = 40.0/12.0 = 3.33 \text{ mol}$
- $n(\mathrm{H}) = 6.7/1.0 = 6.7 \text{ mol}$
- $n(\mathrm{O}) = 53.3/16.0 = 3.33 \text{ mol}$

Ratio: $1 : 2 : 1$. Empirical formula: $\mathrm{CH}_2\mathrm{O}$.

If the molecular mass is 180, then molecular formula is $\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6$.

### Combustion Analysis with Other Elements

If nitrogen is present, it is collected as $\mathrm{N}_2$. If sulfur is present, it forms
$\mathrm{SO}_2$. If halogens are present, they are collected as silver halides.

**Worked Example 15:** 0.200 g of a compound containing C, H, and N produced 0.440 g of
$\mathrm{CO}_2$ and 0.180 g of $\mathrm{H}_2\mathrm{O}$ on combustion. Find the empirical formula.

$$n(\mathrm{C}) = \frac{0.440}{44.0} = 0.0100 \text{ mol}, \quad m(\mathrm{C}) = 0.120 \text{ g}$$

$$n(\mathrm{H}) = \frac{2 \times 0.180}{18.0} = 0.0200 \text{ mol}, \quad m(\mathrm{H}) = 0.0200 \text{ g}$$

$$m(\mathrm{N}) = 0.200 - 0.120 - 0.020 = 0.060 \text{ g}$$

$$n(\mathrm{N}) = \frac{0.060}{14.0} = 0.00429 \text{ mol}$$

Ratio: $\mathrm{C} : \mathrm{H} : \mathrm{N} = 0.0100 : 0.0200 : 0.00429 = 2.33 : 4.67 : 1 = 7 : 14 : 3$.

Empirical formula: $\mathrm{C}_7\mathrm{H}_{14}\mathrm{N}_3$ (or more practically, this would need
checking with molecular mass information).

---

## Electroanalytical Methods

### Flame Emission Spectroscopy

Used for determination of metal ions. A sample is atomised in a flame, and the emitted light at
characteristic wavelengths is measured.

- **Sodium:** intense yellow (589 nm)
- **Potassium:** lilac (766 nm)
- **Calcium:** brick red (622 nm)
- **Copper:** blue-green (521 nm)

### Atomic Absorption Spectroscopy (AAS)

Measures the absorption of light by ground-state atoms. A hollow cathode lamp provides light at the
specific wavelength of the element being analysed.

**Applications:** Determining trace metal concentrations in water, soil, biological samples.

**Worked Example 16:** A series of standard solutions of $\mathrm{Cu}^{2+}$ gave the following
absorbance readings:

| Concentration (ppm) | Absorbance |
| ------------------- | ---------- |
| 0                   | 0.00       |
| 2                   | 0.15       |
| 4                   | 0.30       |
| 6                   | 0.45       |
| 8                   | 0.60       |

An unknown sample gave an absorbance of 0.40. Find the concentration.

From the calibration curve, absorbance is proportional to concentration:
$$c = \frac{0.40}{0.60} \times 8 = 5.3 \text{ ppm}$$

---

## Summary Table: Analytical Techniques

| Technique           | Information obtained        | Sensitivity  | Sample requirement |
| ------------------- | --------------------------- | ------------ | ------------------ |
| IR spectroscopy     | Functional groups           | Low          | mg                 |
| Mass spectrometry   | Molecular mass, fragments   | Very high    | ng                 |
| $^1\mathrm{H}$ NMR    | H environments, structure   | Moderate     | mg                 |
| $^{13}\mathrm{C}$ NMR | C environments              | Low-moderate | mg                 |
| UV-Vis              | Concentration, conjugation  | High         | mL of solution     |
| TLC                 | Number of components, $R_f$ | Moderate     | ug                 |
| GC                  | Separation, retention time  | High         | uL (volatile)      |
| HPLC                | Separation, retention time  | High         | uL                 |
| AAS                 | Metal ion concentration     | Very high    | mL of solution     |

---

## Quality of Analytical Data

### Accuracy and Precision

- **Accuracy:** How close the result is to the true value.
- **Precision:** How close repeated measurements are to each other.

### Uncertainty

Every measurement has uncertainty. Combined uncertainty for multiplication/division:

$$\frac{\Delta y}{y} = \sqrt{\left(\frac{\Delta a}{a}\right)^2 + \left(\frac{\Delta b}{b}\right)^2}$$

### Significant Figures

Results should be quoted to an appropriate number of significant figures, consistent with the
precision of the measurements used.

---

## Practice Questions (Extended)

13. A compound $\mathrm{C}_5\mathrm{H}_{12}\mathrm{O}$ has $^1\mathrm{H}$ NMR signals: $\delta = 0.9$ (t,
    6H), $\delta = 1.5$ (m, 4H), $\delta = 3.4$ (t, 1H, exchanges with $\mathrm{D}_2\mathrm{O}$),
    $\delta = 1.6$ (m, 1H). Identify the compound and explain your reasoning.

14. Explain how you would use TLC to determine whether a reaction has gone to completion.

15. The molecular ion peak in the mass spectrum of a compound has $m/z = 92$. The base peak is at
    $m/z = 91$. Suggest what the compound might be and explain the fragmentation.

16. Describe the principles of HPLC and explain why it is preferred over GC for the analysis of
    pharmaceutical compounds.

17. A compound with molecular formula $\mathrm{C}_8\mathrm{H}_8\mathrm{O}$ has the following spectroscopic
    data:
    - IR: 1700 cm$^{-1}$ (strong), 1600, 1500 cm$^{-1}$ (medium)
    - $^1\mathrm{H}$ NMR: $\delta = 2.6$ (s, 3H), $\delta = 7.5-8.0$ (m, 5H)
    - MS: molecular ion at $m/z = 120$

    Identify the compound and assign all spectral features.

18. Explain the difference between flame emission spectroscopy and atomic absorption spectroscopy,
    including the principle behind each technique.

---

## Advanced Mass Spectrometry

### High-Resolution Mass Spectrometry (HRMS)

Low-resolution mass spectrometry gives $m/z$ values to the nearest whole number. High-resolution MS
can distinguish between compounds with the same nominal mass but different exact masses.

**Example:** $\mathrm{CO}$ has exact mass 27.9949 and $\mathrm{N}_2$ has exact mass 28.0061. These
cannot be distinguished at low resolution (both appear at $m/z = 28$) but are easily separated at
high resolution.

### Tandem Mass Spectrometry (MS-MS)

In MS-MS, ions of a selected $m/z$ are fragmented further (collision-induced dissociation),
providing additional structural information. This is particularly useful for large biomolecules like
proteins.

### Fragmentation Mechanisms

**Alpha cleavage:** Breaks the bond adjacent to a carbonyl group, common in ketones and aldehydes.

$$\text{R-CO-R'} \to \text{R-CO}^+ + \mathrm{R}'^\bullet$$

**McLafferty rearrangement:** A hydrogen atom from the gamma carbon (three bonds away) transfers to
the carbonyl oxygen, followed by cleavage of the beta-gamma bond. Produces an enol radical cation
and a neutral alkene.

This rearrangement requires a gamma hydrogen and is common in carbonyl compounds with at least 3
carbons in the chain.

**Beta cleavage:** Common in amines and halogenoalkanes. The charge stays on the fragment with the
heteroatom.

---

## Advanced Chromatography Concepts

### Theoretical Plates

Column efficiency is measured in theoretical plates ($N$). A higher number of plates means better
separation.

$$N = 16\left(\frac{t_R}{W}\right)^2$$

where $t_R$ is retention time and $W$ is peak width at the base.

### Resolution

The ability to separate two adjacent peaks:

$$R_s = \frac{2(t_{R2} - t_{R1})}{W_1 + W_2}$$

where $R_s > 1.5$ indicates baseline separation.

### Factors Affecting Chromatographic Separation

| Factor                          | Effect on separation                                      |
| ------------------------------- | --------------------------------------------------------- |
| Column length                   | Longer column = more plates = better separation           |
| Particle size (HPLC)            | Smaller particles = better separation but higher pressure |
| Temperature (GC)                | Optimal temperature gives best resolution                 |
| Flow rate                       | Too fast or too slow reduces efficiency                   |
| Mobile phase composition (HPLC) | Optimised gradient improves separation                    |

---

## Interpretation Guide for Combined Spectroscopic Data

### Step-by- Strategy

1. **Mass spec:** Determine molecular mass and molecular formula. Check for characteristic isotope
   patterns (Cl, Br, S).
2. **Calculate DBE:** Determine the number of rings and pi bonds.
3. **IR:** Identify functional groups (C=O, O-H, N-H, C=C, C≡N).
4. **$^{13}\mathrm{C}$ NMR:** Count signals to determine the number of unique carbon environments. Use
   DEPT to classify carbons.
5. **$^1\mathrm{H}$ NMR:** Use chemical shifts, integration, and splitting to piece together the
   carbon-hydrogen framework.
6. **Cross-check:** Verify that the proposed structure is consistent with ALL data.

### Common Functional Group Signatures

| Functional group | IR (cm$^{-1}$)       | $^1\mathrm{H}$ NMR $\delta$ (ppm)                     | $^{13}\mathrm{C}$ NMR $\delta$ (ppm) |
| ---------------- | -------------------- | --------------------------------------------------- | ---------------------------------- |
| Alcohol (-OH)    | 3200-3600 (broad)    | 1-5 (variable, exchanges with $\mathrm{D}_2\mathrm{O}$) | 50-90 (C-O)                        |
| Aldehyde (-CHO)  | 1720-1740            | 9-10                                                | 190-210                            |
| Ketone (C=O)     | 1705-1725            | No H on C=O                                         | 200-220                            |
| Carboxylic acid  | 1700-1725, 2500-3300 | 10-13 (broad)                                       | 170-185                            |
| Ester            | 1735-1750            | 3.5-4.5 (O-CH$_2$)                                  | 160-180                            |
| Aromatic ring    | 1600-1580, 1500-1400 | 6.5-8.5                                             | 120-150                            |
| Alkene (C=C)     | 1620-1680            | 4.5-6.5                                             | 100-150                            |
