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

**Fingerprint region:** Below $1500 \text{ cm}^{-1}$, the pattern is unique to each molecule and can
be compared with reference spectra.

**Example:** An organic compound with molecular formula $\text{C}_3\text{H}_6\text{O}$ shows a
strong absorption at $1715 \text{ cm}^{-1}$ and a broad absorption at $2500-3300 \text{ cm}^{-1}$.
Identify the compound.

The strong absorption at $1715 \text{ cm}^{-1}$ indicates a $\text{C}=\text{O}$ group. The very
broad absorption at $2500-3300 \text{ cm}^{-1}$ is characteristic of the $\text{O}-\text{H}$ in a
carboxylic acid. The compound is propanoic acid ($\text{CH}_3\text{CH}_2\text{COOH}$).

### Mass Spectrometry

Mass spectrometry determines the molecular mass and structure by ionising molecules and separating
them by their mass-to-charge ratio ($m/z$).

**Process:**

1. **Ionisation:** Molecules are bombarded with electrons, ejecting an electron to form a molecular
   ion ($\text{M}^+^\bullet$)
2. **Acceleration:** Ions are accelerated by an electric field
3. **Deflection:** Ions are deflected by a magnetic field (lighter ions deflected more)
4. **Detection:** Ions hit a detector, producing a mass spectrum

**Molecular ion peak:** The peak at the highest $m/z$ value (for the most abundant isotope) gives
the molecular mass.

**Isotopic patterns:**

- Chlorine: $\text{Cl}^{35}:\text{Cl}^{37} \approx 3:1$ ratio
- Bromine: $\text{Br}^{79}:\text{Br}^{81} \approx 1:1$ ratio

**Fragmentation:**

Common fragmentation patterns:

| Fragment                 | $m/z$ | Origin       |
| ------------------------ | ----- | ------------ |
| $\text{CH}_3^+$          | 15    | Methyl group |
| $\text{OH}^+$            | 17    | Hydroxyl     |
| $\text{C}_2\text{H}_5^+$ | 29    | Ethyl group  |
| $\text{CH}_3\text{CO}^+$ | 43    | Acetyl       |
| $\text{C}_4\text{H}_9^+$ | 57    | Butyl        |

**Example:** The mass spectrum of a compound shows a molecular ion peak at $m/z = 58$ and a
prominent peak at $m/z = 43$. Suggest a structure.

$M = 58$. Possible formula: $\text{C}_3\text{H}_6\text{O}$ (propanone, $M_r = 58$).

The peak at $m/z = 43$ corresponds to $\text{CH}_3\text{CO}^+$, formed by alpha cleavage of
propanone.

$$\text{CH}_3\text{COCH}_3 \to \text{CH}_3\text{CO}^+ + \text{CH}_3^\bullet$$

The compound is likely propanone.

### Nuclear Magnetic Resonance (NMR) Spectroscopy

#### $^1\text{H}$ NMR

Proton NMR provides information about the hydrogen environments in a molecule.

**Chemical shift ($\delta$):** Measured in ppm relative to TMS (tetramethylsilane) as reference
($\delta = 0$).

| Proton environment              | $\delta$ (ppm)     |
| ------------------------------- | ------------------ |
| $\text{R}-\text{CH}_3$          | 0.9-1.2            |
| $\text{R}_2-\text{CH}_2$        | 1.2-1.5            |
| $\text{R}-\text{OH}$            | 1.0-5.5 (variable) |
| $\text{R}-\text{CH}_2-\text{X}$ | 2.0-4.5            |
| $\text{R}-\text{CHO}$           | 9.0-10.0           |
| $\text{R}-\text{COOH}$          | 10.0-13.0          |
| Aromatic                        | 6.5-8.5            |

**Key features of an NMR spectrum:**

1. **Number of signals:** Equals the number of different proton environments
2. **Integration (area under peak):** Proportional to the number of protons in that environment
3. **Splitting (multiplicity):** Given by the $n + 1$ rule (a signal is split into $n + 1$ peaks by
   $n$ neighbouring protons)

**Example:** The $^1\text{H}$ NMR spectrum of a compound with formula $\text{C}_3\text{H}_8\text{O}$
shows:

- A triplet at $\delta = 1.2$ (integration 3)
- A quartet at $\delta = 3.7$ (integration 2)
- A singlet at $\delta = 2.5$ (integration 1, exchanges with $\text{D}_2\text{O}$)

Identify the compound.

The singlet that exchanges with $\text{D}_2\text{O}$ is an $\text{O}-\text{H}$ proton. The triplet
(3H) and quartet (2H) indicate a $\text{CH}_3\text{CH}_2$ group. The quartet is shifted to
$\delta = 3.7$, suggesting the $\text{CH}_2$ is adjacent to an electronegative oxygen. The compound
is ethanol ($\text{CH}_3\text{CH}_2\text{OH}$).

#### $^{13}\text{C}$ NMR

Carbon-13 NMR identifies the number of different carbon environments.

- No splitting (proton-decoupled)
- Each signal represents a unique carbon environment
- Chemical shifts range from 0-220 ppm

| Carbon environment           | $\delta$ (ppm) |
| ---------------------------- | -------------- |
| $\text{C}-\text{C}$          | 0-50           |
| $\text{C}-\text{O}$          | 50-90          |
| $\text{C}=\text{C}$ (alkene) | 100-150        |
| Aromatic                     | 100-150        |
| $\text{C}=\text{O}$          | 160-220        |

### UV-Visible Spectroscopy

UV-Vis spectroscopy measures the absorption of ultraviolet and visible light by molecules.

**Beer-Lambert Law:**

$$A = \varepsilon c l$$

where $A$ is absorbance, $\varepsilon$ is the molar absorptivity (L mol$^{-1}$ cm$^{-1}$), $c$ is
concentration (mol/L), and $l$ is the path length (cm).

**Applications:** Determining concentrations, following reaction kinetics, identifying conjugated
systems.

**Example:** A solution of a compound with $\varepsilon = 12500 \text{ L mol}^{-1}\text{ cm}^{-1}$
has an absorbance of 0.625 in a $1 \text{ cm}$ cuvette. Find the concentration.

$$c = \frac{A}{\varepsilon l} = \frac{0.625}{12500 \times 1} = 5.0 \times 10^{-5} \text{ mol/L}$$

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

---

## Practice Questions

1. An IR spectrum shows strong absorptions at 3300 cm$^{-1}$ (broad) and 1050 cm$^{-1}$. Identify
   the functional groups present.

2. The mass spectrum of a chlorinated compound shows peaks at $m/z = 78$ and 80 in a 3:1 ratio.
   Identify the molecular ion.

3. A compound $\text{C}_4\text{H}_8\text{O}_2$ has $^1\text{H}$ NMR signals at $\delta = 1.2$
   (triplet, 3H), $\delta = 2.3$ (quartet, 2H), and $\delta = 11.5$ (singlet, 1H). Identify the
   compound and explain the spectrum.

4. A solution has absorbance 0.450 at 520 nm in a 2 cm cuvette. If
   $\varepsilon = 15000 \text{ L mol}^{-1}\text{ cm}^{-1}$, find the concentration.

5. Explain how GC-MS can be used to identify an unknown compound in a mixture.

6. A compound with molecular formula $\text{C}_4\text{H}_{10}\text{O}$ has two $^1\text{H}$ NMR
   signals: a septet at $\delta = 3.9$ (1H) and a doublet at $\delta = 1.2$ (6H). Identify the
   compound.

7. In TLC, substance A travels 2.5 cm and substance B travels 4.0 cm while the solvent front travels
   8.0 cm. Calculate the $R_f$ values and identify which substance is more polar.

8. Combined IR, mass spec, and NMR data for an unknown compound $\text{C}_3\text{H}_6\text{O}_2$
   shows: IR absorption at $1740 \text{ cm}^{-1}$, molecular ion at $m/z = 74$, and $^1\text{H}$ NMR
   singlet at $\delta = 3.7$ (3H), singlet at $\delta = 2.1$ (3H). Identify the compound.
