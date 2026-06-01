---
title: Spectroscopy
description: 'University Chemistry Spectroscopy notes covering key definitions, core concepts, worked examples, and practice questions for solid revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/spectroscopy
---

## 1. UV-Visible Spectroscopy

### 1.1 Beer-Lambert Law

**Theorem 1 (Beer-Lambert Law):**

$$A = \varepsilon\,c\,l = \log_{10}\left(\frac{I_0}{I}\right)$$

where $A$ is absorbance (unitless), $\varepsilon$ is the molar extinction coefficient (M$^{-1}$cm$^{-1}$),
$c$ is concentration (M), and $l$ is path length (cm).

**Transmittance:** $T = I/I_0 = 10^{-A}$

### 1.2 Electronic Transitions

| Transition              | $\lambda_{\max}$ (nm) | $\varepsilon$ (M$^{-1}$cm$^{-1}$) |
| ----------------------- | --------------------- | ---------------------------------- |
| $\sigma \to \sigma^*$   | < 200                 | Very high                          |
| $n \to \sigma^*$        | 150–250               | 100–1000                           |
| $\pi \to \pi^*$         | 160–180 (isolated)    | $\sim 10^4$                        |
| $\pi \to \pi^*$         | 200–300 (conjugated)  | $10^3$–$10^5$                      |
| $n \to \pi^*$           | 250–350               | 10–100 (weak)                      |

### 1.3 Effect of Conjugation

**Theorem 2 (Conjugation Shift):** Extending conjugation shifts $\lambda_{\max}$ to longer wavelengths
(red shift, bathochromic shift) and increases $\varepsilon$.

For polyenes, the Woodward-Fieser rules estimate $\lambda_{\max}$:

$$\lambda_{\max} = \lambda_{\text{base}} + n_{\text{double bonds}} \times 30 + \text{substituent corrections}$$

| Structural Feature        | $\lambda_{\max}$ Increment (nm) |
| ------------------------ | ------------------------------ |
| Each additional double bond | 30                             |
| Alkyl substituent         | 5                              |
| Exocyclic double bond     | 5                              |
| Extending conjugation     | 30 per extra double bond        |

**Example 1:** Predict $\lambda_{\max}$ for a diene with one exocyclic double bond and one alkyl
substituent:

$$\lambda_{\max} = 214 + 30 + 5 + 5 = 254 \text{ nm}$$

$\blacksquare$

### 1.4 Applications

- Determining concentration (via Beer-Lambert).
- Monitoring reaction progress (kinetics).
- Protein quantification ($\lambda = 280$ nm for aromatic amino acids).
- Color and dyes (conjugated systems absorbing visible light).

## 2. Infrared Spectroscopy

### 2.1 Principles

IR spectroscopy measures absorption of infrared radiation corresponding to vibrational transitions.
The frequency of absorption depends on:

$$\tilde{\nu} = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}}$$

where $k$ is the force constant (N/m) and $\mu = \frac{m_1 m_2}{m_1 + m_2}$ is the reduced mass.

**Selection rule:** Only transitions that change the dipole moment are IR-active.

### 2.2 Characteristic IR Absorptions

| Bond Type          | Range (cm$^{-1}$) | Intensity |
| ------------------ | ----------------- | --------- |
| O–H (alcohol)      | 3200–3600         | Broad     |
| N–H                | 3300–3500         | Medium    |
| C–H (sp$^3$)      | 2850–3000         | Strong    |
| C–H (sp$^2$)       | 3000–3100         | Medium    |
| C–H (sp)           | 3300              | Strong    |
| C≡N                | 2210–2260         | Strong    |
| C≡C                | 2100–2260         | Variable  |
| C=O (aldehyde)     | 1720–1740         | Strong    |
| C=O (ketone)       | 1705–1725         | Strong    |
| C=O (ester)        | 1735–1750         | Strong    |
| C=O (amide)        | 1640–1690         | Strong    |
| C=C                | 1620–1680         | Variable  |
| C–O                | 1000–1300         | Strong    |
| C–Cl               | 600–800           | Strong    |

### 2.3 Fingerprint Region

**Definition 1 (Fingerprint Region):** The region 400–1500 cm$^{-1}$ contains complex patterns unique
to each molecule (C–C, C–O, C–X stretches and bends). Useful for identification by comparison with
reference spectra.

### 2.4 Key Functional Group Identification

**Alcohols:** Broad O–H stretch (3200–3600 cm$^{-1}$), C–O stretch (1000–1260 cm$^{-1}$).

**Carboxylic acids:** Very broad O–H (2500–3300 cm$^{-1}$), C=O (1710–1760 cm$^{-1}$), broad C–O.

**Aldehydes:** C=O (1720–1740 cm$^{-1}$), characteristic aldehyde C–H stretch (2720, 2820 cm$^{-1}$).

**Ketones:** Strong C=O (1705–1725 cm$^{-1}$).

**Esters:** C=O (1735–1750 cm$^{-1}$), two C–O stretches.

## 3. Nuclear Magnetic Resonance Spectroscopy

### 3.1 Basic Principles

**Definition 2 (NMR):** Nuclei with spin $I \neq 0$ (e.g., $^1\text{H}$, $I = 1/2$; $^{13}\text{C}$, $I = 1/2$)
align with or against an external magnetic field $B_0$.

**Resonance condition:**

$$\nu = \frac{\gamma}{2\pi}B_0$$

where $\gamma$ is the gyromagnetic ratio. The frequency difference between two nuclei is expressed
relative to a reference (TMS) as the **chemical shift**:

$$\delta = \frac{\nu_{\text{sample}} - \nu_{\text{ref}}}{\nu_{\text{ref}}} \times 10^6 \text{ ppm}$$

### 3.2 $^1\text{H}$ NMR: Chemical Shifts

| Proton Type                    | $\delta$ (ppm)  |
| ------------------------------ | --------------- |
| TMS (reference)                | 0.0             |
| R–CH$_3$                       | 0.8–1.2         |
| R–CH$_2$–R                     | 1.2–1.5         |
| R$_3$CH                        | 1.5–2.0         |
| Allylic CH$_2$                 | 1.6–2.6         |
| $\alpha$ to carbonyl/aryl       | 2.0–2.7         |
| Acetylenic                     | 2.0–3.0         |
| CH$_3$–X (X = Cl, Br, O)       | 3.0–4.5         |
| Vinylic                        | 4.5–6.5         |
| Aromatic                       | 6.5–8.0         |
| Aldehyde                       | 9.0–10.0        |
| Carboxylic acid                | 10.0–13.0       |

### 3.3 Spin-Spin Splitting

**Theorem 3 (n+1 Rule):** A signal is split into $n + 1$ peaks by $n$ equivalent neighboring protons.

The splitting pattern follows Pascal's triangle:

| $n$ (neighbors) | Splitting | Peak Ratio |
| --------------- | --------- | ---------- |
| 0               | Singlet   | 1          |
| 1               | Doublet   | 1:1        |
| 2               | Triplet   | 1:2:1      |
| 3               | Quartet   | 1:3:3:1    |
| 4               | Quintet   | 1:4:6:4:1  |

**Coupling constant:** $J$ (Hz) is the separation between adjacent peaks in a multiplet. $J$ is
independent of $B_0$.

- **Vicinal coupling:** $^3J_{\text{HH}} \approx 6$–8 Hz (free rotation).
- **Geminal coupling:** $^2J_{\text{HH}} \approx 12$–16 Hz.
- **$^3J_{\text{vic}}$ in alkenes:** $cis$ ($J \approx 6$–12 Hz) vs $trans$ ($J \approx 12$–18 Hz).

### 3.4 Integration

The area under each signal is proportional to the number of protons giving that signal. Integration
ratios reveal the relative numbers of different types of protons.

### 3.5 Complex Splitting

When non-equivalent neighboring protons have different coupling constants, more complex patterns
arise:

- **Doublet of doublets (dd):** One proton coupled to two non-equivalent neighbors.
- **Doublet of doublet of doublets (ddd):** Three non-equivalent neighbors.
- **AX, AB, and AA'XX' systems:** More complex analysis required for coupled aromatic rings.

### 3.6 $^{13}\text{C}$ NMR

**Definition 3 ($^{13}$C NMR):** $^{13}\text{C}$ has $I = 1/2$ but only 1.1% natural abundance. Features:
- Broadband proton decoupling: all $^1$H–$^{13}$C couplings removed; one signal per unique carbon.
- DEPT (Distortionless Enhancement by Polarization Transfer): distinguishes CH, CH$_2$, CH$_3$, and
  quaternary carbons.
- Chemical shift range: 0–220 ppm.

| Carbon Type      | $\delta$ (ppm) |
| ---------------- | -------------- |
| R–CH$_3$         | 0–35           |
| R–CH$_2$–R       | 15–50          |
| R$_3$CH          | 25–50          |
| C–O (alcohol)    | 50–90          |
| C–O (ether)      | 60–80          |
| C=C (alkene)     | 100–150        |
| Aromatic         | 110–160        |
| C=O              | 160–220        |
| C≡N              | 115–150        |

### 3.7 2D NMR Techniques

**Definition 4 (COSY — Correlation Spectroscopy):** Reveals $^1$H–$^1$H coupling relationships.
Cross-peaks indicate which protons are coupled.

**Definition 5 (HSQC/HMQC):** Shows $^1$H–$^{13}$C one-bond correlations. Each proton signal correlates
to the carbon it is directly bonded to.

**Definition 6 (HMBC):** Shows $^1$H–$^{13}$C long-range correlations (2–3 bonds). Useful for
connecting fragments through quaternary carbons.

**Definition 7 (NOESY/ROESY):** Nuclear Overhauser Effect spectroscopy; reveals spatial proximity
($< 5$ Å) rather than through-bond coupling. Essential for stereochemistry.

## 4. Mass Spectrometry

### 4.1 Principles

**Definition 8 (Mass Spectrometry):** Measures the mass-to-charge ratio ($m/z$) of ionized molecules.

The mass spectrum plots intensity vs $m/z$. The **molecular ion peak** ($\text{M}^+$ or $\text{M}^+\bullet$)
gives the molecular weight.

**Isotopic patterns:** The natural abundance of isotopes creates characteristic patterns:
- $^{13}\text{C}$: 1.1% → $\text{M} + 1$ peak is $\sim 1.1\%$ of M per carbon.
- $^{35}\text{Cl}/^{37}\text{Cl}$: 3:1 ratio → $\text{M} + 2$ peak is $\sim 1/3$ of M for one Cl.
- $^{79}\text{Br}/^{81}\text{Br}$: 1:1 ratio → $\text{M} + 2$ peak is $\sim$ equal to M for one Br.

### 4.2 Ionization Methods

| Method       | Principle                        | Best For                    |
| ------------ | -------------------------------- | --------------------------- |
| EI (70 eV)   | Electron impact; hard ionization | Volatile, thermally stable  |
| CI           | Chemical ionization (CH$_4$)     | Molecular ion preservation  |
| ESI          | Electrospray ionization          | Large, polar molecules      |
| MALDI        | Matrix-assisted laser            | Biomolecules, polymers      |
| APCI         | Atmospheric pressure chemical    | Medium polarity compounds   |

### 4.3 Fragmentation Patterns

**McLafferty rearrangement:** $\gamma$-hydrogen transfer to a carbonyl oxygen, followed by
$\beta$-cleavage. Common in carbonyl compounds.

**Alpha cleavage:** Cleavage adjacent to a heteroatom or carbonyl:

$$\text{R}–\text{C}(=\text{O})–\text{R}' \to \text{R}^+ + \cdot\text{C}(=\text{O})\text{R}'$$

**Common fragmentation:**

| Functional Group  | Characteristic Fragmentation                    |
| ----------------- | ---------------------------------------------- |
| Alcohols          | M – 18 (loss of H$_2$O), $\alpha$-cleavage     |
| Aldehydes         | M – 1, M – 29 (CHO), McLafferty                |
| Ketones           | $\alpha$-cleavage, McLafferty                 |
| Carboxylic acids  | M – 17 (OH), M – 45 (COOH)                     |
| Esters            | McLafferty, acyl ion (RCO$^+$)                 |
| Amines            | $\alpha$-cleavage, odd molecular ion (N rule)   |
| Aromatics         | Strong M$^+$, tropylium ion ($m/z = 91$)       |

### 4.4 High-Resolution MS

**Definition 9 (High-Resolution MS):** Determines exact mass to 4–6 decimal places, distinguishing
between formulas with the same nominal mass:

$$\text{C}_6\text{H}_{12}\text{O}_6: \text{exact mass} = 180.0634$$
$$\text{C}_8\text{H}_{12}\text{N}_2\text{O}_3: \text{exact mass} = 180.0899$$

### 4.5 Nitrogen Rule

**Theorem 4 (Nitrogen Rule):** A molecule with an odd number of nitrogen atoms has an odd molecular
weight; a molecule with an even number (or zero) of nitrogen atoms has an even molecular weight.

## 5. Combined Structure Elucidation

### 5.1 Strategy

**Theorem 5 (Structure Elucidation Workflow):**
1. **Molecular formula** from HRMS (exact mass) or elemental analysis. Calculate degree of
   unsaturation.
2. **IR** for functional groups (O–H, C=O, C≡N, C=C, etc.).
3. **$^1$H NMR** for proton environments (chemical shifts, integration, splitting).
4. **$^{13}$C NMR** for carbon framework (number of unique carbons, types).
5. **2D NMR** (COSY, HSQC, HMBC) for connectivity.
6. **MS** fragmentation to confirm proposed structure.

### 5.2 Degree of Unsaturation

**Theorem 6 (Degrees of Unsaturation):** For a formula C$_c$H$_h$N$_n$O$_o$X$_x$ (X = halogen):

$$\text{DoU} = c + 1 - \frac{h - n + x}{2}$$

Each DoU corresponds to one double bond or ring.

**Example 2:** C$_8$H$_8$O$_2$: DoU $= 8 + 1 - 8/2 = 5$. Likely one benzene ring (4 DoU) plus one C=O.

$\blacksquare$

### 5.3 Worked Example

**Unknown:** Molecular ion at $m/z = 120$, HRMS = 120.0575, formula C$_7$H$_8$O.

DoU $= 7 + 1 - 8/2 = 4$.

IR: 3350 cm$^{-1}$ (broad, O–H), 1600, 1500 cm$^{-1}$ (aromatic C=C), no C=O.

$^1$H NMR: $\delta$ 7.1 (2H, d, $J = 8$ Hz), 6.7 (2H, d, $J = 8$ Hz), 4.5 (1H, br s), 2.2 (3H, s).

Interpretation: Para-disubstituted benzene (AA'BB' pattern, 4H). Methyl group ($\delta$ 2.2). OH
($\delta$ 4.5, broad). Structure: 4-methylphenol ($p$-cresol).

$\blacksquare$

## Common Pitfalls

1. **Wrong chemical shift assignments.** O–H and N–H protons are highly variable and can appear
   anywhere from $\delta$ 0.5 to 13 ppm depending on concentration and hydrogen bonding. **Fix:** Always
   consider exchangeable protons as variable; use D$_2$O shake to identify them.
2. **Ignoring coupling constants for stereochemistry.** $J$ values distinguish cis ($\sim 6$–12 Hz) from
   trans ($\sim 12$–18 Hz) alkenes and axial-axial ($\sim 8$–12 Hz) from other couplings in
   cyclohexanes. **Fix:** Always extract $J$ values from spectra.
3. **Misinterpreting IR broadness.** A broad O–H stretch indicates hydrogen bonding (alcohol or acid);
   a sharp O–H indicates free OH (dilute solution). **Fix:** Run spectra at different concentrations
   to distinguish.
4. **Wrong molecular ion in EI-MS.** EI is a hard ionization; the molecular ion may be absent for
   fragile molecules. **Fix:** Use CI, ESI, or soft ionization to find M$^+$.
5. **Confusing mass spectral isotope patterns.** One Br gives M and M+2 in 1:1 ratio; two Br gives
   M:M+2:M+4 in 1:2:1. **Fix:** Calculate expected ratios and compare.
6. **Overlooking NOE for stereochemistry.** NOE shows proximity, not bonding. An NOE between protons
   on different fragments confirms their spatial relationship. **Fix:** Use NOESY/ROESY when stereochemistry
   is needed.
7. **Wrong degree of unsaturation calculation.** For halogens, add their count to H; for nitrogen,
   subtract. **Fix:** Use DoU $= c + 1 - (h + x - n)/2$ where $x$ = halogens.

## Summary

- **UV-Vis:** $\lambda_{\max}$ depends on conjugation; Beer-Lambert law for quantitation.
- **IR:** Functional group identification; fingerprint region for comparison; O–H, C=O, C≡N are
  most diagnostic.
- **$^1$H NMR:** Chemical shift (environment), splitting ($n + 1$ rule), integration (number of protons),
  coupling constant $J$ (geometry).
- **$^{13}$C NMR:** Carbon framework; DEPT distinguishes CH$_n$ types; chemical shifts 0–220 ppm.
- **2D NMR:** COSY (H–H connectivity), HSQC (one-bond H–C), HMBC (long-range H–C), NOESY (spatial).
- **MS:** Molecular weight, formula (HRMS), fragmentation patterns, isotopic patterns.
- **Structure elucidation:** Combine all techniques systematically with DoU calculation.

## Worked Examples

### Example 1: Interpreting an IR Spectrum
**Problem:** A compound with molecular formula C4H8O shows a strong IR absorption at 1715 cm^-1 and no absorption above 3000 cm^-1 except at 2850-2950 cm^-1. What functional group is present?
**Solution:** The absorption at 1715 cm^-1 indicates a carbonyl (C=O) stretch. The absence of broad O-H absorption above 3000 cm^-1 rules out a carboxylic acid. The absence of N-H stretch rules out an amide. The sharp, moderate-wavenumber carbonyl is consistent with an aldehyde (no O-H, but C-H stretch around 2720 cm^-1 should be checked). Given C4H8O and one C=O: likely butanal (CH3CH2CH2CHO) or butanone (CH3CH2COCH3).

### Example 2: Degree of Unsaturation Calculation
**Problem:** A compound with molecular formula C6H6O has the following spectroscopic data: IR: 3300 (broad), 1600, 1500 cm^-1. 1H NMR: 7.2 (5H, multiplet), 4.5 (1H, singlet), 2.0 (1H, singlet, exchanges with D2O). Identify the compound.
**Solution:** DoU = 2C + 2 + N - H/2 - X/2 = 12 + 2 - 3 = 4. IR at 3300 (broad) indicates O-H (phenol or alcohol). 1600, 1500 cm^-1: aromatic ring (DoU >= 4). 1H NMR: 5H multiplet at 7.2 ppm = monosubstituted benzene. 1H singlet at 4.5 ppm = CH attached to O. 1H singlet at 2.0 ppm exchanging with D2O = OH. Compound: phenol (C6H5OH).

## Cross-References

| Topic                    | Site        | Link                                                                  |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| Structure and Bonding    | WyattsNotes | [View](/docs/university/chemistry/structure-and-bonding)              |
| Reaction Mechanisms      | WyattsNotes | [View](/docs/university/chemistry/reaction-mechanisms)                |
| Quantum Chemistry        | WyattsNotes | [View](/docs/university/chemistry/quantum-chemistry)                  |
| Organic Spectroscopy — MIT 5.33 | MIT OCW | [View](https://ocw.mit.edu/courses/5-33-advanced-chemical-experimentation-fall-2003/) |
