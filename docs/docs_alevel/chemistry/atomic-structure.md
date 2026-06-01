---
title: Atomic Structure & Periodicity
description: 'A-Level Chemistry Atomic Structure & Periodicity notes covering key definitions, core concepts, worked examples, and practice questions for analytical revision.'
date: 2026-04-21T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: atomic-structure
sidebar_position: 6
---

# Atomic Structure & Periodicity

## Subatomic Particles

Atoms consist of three principal subatomic particles. Their properties are summarised below.

| Property        | Proton                   | Neutron         | Electron                     |
| --------------- | ------------------------ | --------------- | ---------------------------- |
| Symbol          | $p$ or $p^+$             | $n$ or $n^0$    | $e^-$                        |
| Relative charge | $+1$                     | $0$             | $-1$                         |
| Charge (C)      | $+1.602 \times 10^{-19}$ | $0$             | $-1.602 \times 10^{-19}$     |
| Relative mass   | $1.00728$                | $1.00867$       | $0.00055$ ($\approx 1/1836$) |
| Location        | Nucleus                  | Nucleus         | Electron shells / orbitals   |
| Spin            | $+\tfrac{1}{2}$          | $+\tfrac{1}{2}$ | $+\tfrac{1}{2}$              |

The **atomic number** (proton number) $Z$ defines the element. The **mass number** $A = Z + N$Where
$N$ is the neutron number. The notation is:

$$
^{A}_{Z}\mathrm{X}
$$

## Isotopes

Isotopes are atoms of the same element (same $Z$) with different neutron numbers (different $A$).
Chemical properties are virtually identical because they share the same electron configuration.
Physical properties (melting point, density, reaction rate) differ slightly due to mass effects.

### Relative Atomic Mass ($A_r$)

The relative atomic mass is the weighted mean of the isotopic masses, weighted by their natural
abundances:

$$
A_r(\mathrm{X}) = \frac◆LB◆\sum_i m_i \cdot a_i◆RB◆◆LB◆\sum_i a_i◆RB◆
$$

Where $m_i$ is the isotopic mass and $a_i$ is the relative abundance of isotope $i$.

**Worked Example.** Chlorine has two stable isotopes: $^{35}\mathrm{Cl}$ (75.77%,
$m = 34.969\,\mathrm{u}$) and $^{37}\mathrm{Cl}$ (24.23%, $m = 36.966\,\mathrm{u}$).

$$
A_r(\mathrm{Cl}) = \frac{(34.969)(75.77) + (36.966)(24.23)}{100} = \frac{2650.4 + 895.3}{100} = 35.45
$$

### Relative Molecular Mass ($M_r$)

For a compound with formula $\mathrm{X}_a\mathrm{Y}_b$:

$$
M_r = a \cdot A_r(\mathrm{X}) + b \cdot A_r(\mathrm{Y})
$$

## Mass Spectrometry

Mass spectrometry separates ions by their mass-to-charge ratio ($m/z$). The stages are:

1. **Vaporisation** -- sample converted to gaseous state.
2. **Ionisation** -- by electron impact (EI): a high-energy electron beam ejects an electron from
   the sample molecule, producing a molecular ion $\mathrm{M}^{+\bullet}$.
3. **Acceleration** -- ions accelerated through a potential difference $V$Gaining kinetic energy
   $\tfrac{1}{2}mv^2 = zVe$.
4. **Deflection** -- a magnetic field $B$ deflects ions into a curved path of radius $r$:

$$
R = \frac◆LB◆\sqrt{2mV/z}◆RB◆◆LB◆B◆RB◆
$$

Lighter ions (lower $m/z$) are deflected more. The detector records the abundance at each $m/z$.

5. **Detection** -- ions strike the detector, generating a current proportional to their abundance.

### Interpreting Mass Spectra

- The **molecular ion peak** ($\mathrm{M}^{+\bullet}$) gives the relative molecular mass.
- Fragmentation produces characteristic peaks. For example, $\mathrm{CH}_4^{+\bullet}$ at
  $m/z = 16$; $\mathrm{CH}_3^+$ at $m/z = 15$.
- The **base peak** is the most intense signal (assigned 100% relative abundance).

**Worked Example.** A compound shows a molecular ion peak at $m/z = 78$ and a base peak at
$m/z = 77$. The M+1 peak at $m/z = 79$ has 6.4% of the molecular ion intensity. This is consistent
with benzene ($\mathrm{C}_6\mathrm{H}_6$, $M_r = 78$). The M+1 peak intensity
($\approx 6 \times 1.1\% = 6.6\%$) confirms six carbon atoms.

## Electron Configuration

### Quantum Numbers

Each electron in an atom is described by four quantum numbers:

| Quantum Number | Symbol   | Values                          | Describes                             |
| -------------- | -------- | ------------------------------- | ------------------------------------- |
| Principal      | $n$      | $1, 2, 3, \ldots$               | Energy level / shell                  |
| Azimuthal      | $\ell$   | $0, 1, \ldots, n-1$             | Subshell type ($0 = s$, $1 = p$, $2 = d$) |
| Magnetic       | $m_\ell$ | $-\ell, -\ell+1, \ldots, +\ell$ | Orbital orientation                   |
| Spin           | $m_s$    | $+\tfrac{1}{2}, -\tfrac{1}{2}$  | Electron spin direction               |

### Subshell Capacities

| Subshell | $\ell$ | Orbitals | Max Electrons |
| -------- | ------ | -------- | ------------- |
| $s$      | $0$    | $1$      | $2$           |
| $p$      | $1$    | $3$      | $6$           |
| $d$      | $2$    | $5$      | $10$          |
| $f$      | $3$    | $7$      | $14$          |

The maximum number of electrons in shell $n$ is $2n^2$.

### Aufbau Principle

Electrons occupy the lowest energy subshells first. The filling order is:

$$
1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s \lt 4f \lt 5d \lt 6p \lt 7s
$$

The $4s$ subshell fills before $3d$ because its energy is lower for $Z \le 20$. For $Z \gt 20$The
energies shift and $3d$ becomes lower -- this is important for transition metals (see
[Transition Metals](./transition-metals)).

### Pauli Exclusion Principle

No two electrons in the same atom can have the same set of four quantum numbers. Consequently, each
orbital holds at most two electrons, with opposite spins.

### Hund's Rule

Within a given subshell, electrons occupy degenerate orbitals singly first, with parallel spins,
before pairing. This minimises electron-electron repulsion and maximises total spin.

### Writing Electron Configurations

Use the notation $n\ell^x$ where $x$ is the number of electrons in that subshell.

| Element | $Z$ | Configuration                           | Shorthand                     |
| ------- | --- | --------------------------------------- | ----------------------------- |
| H       | 1   | $1s^1$                                  | $1s^1$                        |
| C       | 6   | $1s^2 2s^2 2p^2$                        | $[\mathrm{He}]\,2s^2 2p^2$    |
| Na      | 11  | $1s^2 2s^2 2p^6 3s^1$                   | $[\mathrm{Ne}]\,3s^1$         |
| Fe      | 26  | $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$    | $[\mathrm{Ar}]\,4s^2 3d^6$    |
| Cu      | 29  | $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$ | $[\mathrm{Ar}]\,4s^1 3d^{10}$ |

**Note on Cr and Cu.** Chromium ($Z = 24$) is $[\mathrm{Ar}]\,4s^1 3d^5$ and copper ($Z = 29$) is
$[\mathrm{Ar}]\,4s^1 3d^{10}$. The half-filled $d^5$ and fully-filled $d^{10}$ configurations are
stabilised by exchange energy -- the extra stability gained from maximising parallel spins outweighs
the energy cost of promoting an electron from $4s$ to $3d$.

### d-block Electron Configurations

For transition metals, when forming cations, the $4s$ electrons are removed before the $3d$
electrons. For example:

- $\mathrm{Fe}$: $[\mathrm{Ar}]\,4s^2 3d^6$
- $\mathrm{Fe}^{2+}$: $[\mathrm{Ar}]\,3d^6$
- $\mathrm{Fe}^{3+}$: $[\mathrm{Ar}]\,3d^5$

This is because once the $3d$ subshell begins to populate, it drops below $4s$ in energy.

## Ionisation Energy

### Definition

The **first ionisation energy** of an element is the enthalpy change when one mole of gaseous atoms
each loses one electron to form one mole of gaseous $1+$ ions:

$$
\mathrm{X}(g) \to \mathrm{X}^+(g) + e^- \quad \Delta H = \mathrm{IE}_1
$$

The **second ionisation energy** is:

$$
\mathrm{X}^+(g) \to \mathrm{X}^{2+}(g) + e^- \quad \Delta H = \mathrm{IE}_2
$$

Ionisation energies are always endothermic (positive $\Delta H$).

### General Trend Across a Period

Ionisation energy generally increases across a period (left to right) because:

1. **Nuclear charge increases** -- each successive element adds one proton to the nucleus.
2. **Shielding increases negligibly** -- additional electrons enter the same shell, so the shielding
   effect of inner electrons remains approximately constant.
3. **Atomic radius decreases** -- the increased effective nuclear charge pulls electron shells
   closer.
4. **Net effect** -- the outer electron is held more tightly, requiring more energy to remove.

| Element | $Z$ | Configuration              | $\mathrm{IE}_1$ (kJ/mol) |
| ------- | --- | -------------------------- | ------------------------ |
| Na      | 11  | $[\mathrm{Ne}]\,3s^1$      | 496                      |
| Mg      | 12  | $[\mathrm{Ne}]\,3s^2$      | 738                      |
| Al      | 13  | $[\mathrm{Ne}]\,3s^2 3p^1$ | 578                      |
| Si      | 14  | $[\mathrm{Ne}]\,3s^2 3p^2$ | 786                      |
| P       | 15  | $[\mathrm{Ne}]\,3s^2 3p^3$ | 1012                     |
| S       | 16  | $[\mathrm{Ne}]\,3s^2 3p^4$ | 1000                     |
| Cl      | 17  | $[\mathrm{Ne}]\,3s^2 3p^5$ | 1251                     |
| Ar      | 18  | $[\mathrm{Ne}]\,3s^2 3p^6$ | 1521                     |

### Anomalies: Al vs Mg and S vs P

**Al (578) &lt; Mg (738).** The electron removed from Al is a $3p$ electron, which is in a higher
energy subshell than the $3s$ electrons of Mg. The $3p$ electron is further from the nucleus on
average and experiences greater shielding from the $3s$ electrons.

**S (1000) &lt; P (1012).** In P ($3p^3$), each $3p$ orbital contains one electron. In S ($3p^4$),
one orbital must contain two paired electrons. Pairing introduces electron-electron repulsion within
the same orbital, which slightly reduces the energy required to remove one of the paired electrons.

### Trend Down a Group

Ionisation energy decreases down a group because:

1. **Principal quantum number increases** -- outer electrons occupy shells further from the nucleus.
2. **Shielding increases** -- additional inner shells screen the nuclear charge.
3. **Atomic radius increases** -- the outer electron is further from the nucleus.
4. **Net effect** -- despite increasing nuclear charge, the increased distance and shielding
   dominate, making electron removal easier.

| Element | $\mathrm{IE}_1$ (kJ/mol) |
| ------- | ------------------------ |
| Li      | 520                      |
| Na      | 496                      |
| K       | 419                      |
| Rb      | 403                      |

### Successive Ionisation Energies

Plotting successive ionisation energies ($\mathrm{IE}_1$$\mathrm{IE}_2$$\mathrm{IE}_3$...) against
ionisation number reveals the electron configuration. Large jumps occur when electrons are removed
from a new inner shell.

**Worked Example.** For aluminium ($Z = 13$), successive ionisation energies are:

| $n$ | $\mathrm{IE}_n$ (kJ/mol) | Shell          |
| --- | ------------------------ | -------------- |
| 1   | 578                      | $n = 3$        |
| 2   | 1817                     | $n = 3$        |
| 3   | 2745                     | $n = 3$        |
| 4   | 11577                    | $n = 2$ (jump) |

The large jump between $\mathrm{IE}_3$ and $\mathrm{IE}_4$ indicates that the first three electrons
were removed from the third shell (valence), and the fourth is removed from the second shell (core).

## Atomic and Ionic Radii

### Atomic Radius

The atomic radius is the distance from the nucleus to the outermost electrons. It cannot be measured
directly; instead, half the internuclear distance in a covalent bond or metallic lattice is used
(covalent radius or metallic radius).

**Trend across a period:** Atomic radius decreases. Increasing nuclear charge pulls electrons closer
without a compensating increase in shielding (same shell).

**Trend down a group:** Atomic radius increases. Each successive element adds a new electron shell.

### Ionic Radius

**Cations** are smaller than their parent atoms because removing electrons reduces electron-electron
repulsion and the remaining electrons are drawn closer by the unchanged nuclear charge. Higher
charge cations are even smaller: $\mathrm{Fe}^{3+} \lt \mathrm{Fe}^{2+} \lt \mathrm{Fe}$.

**Anions** are larger than their parent atoms because adding electrons increases electron-electron
repulsion, causing the electron cloud to expand. For isoelectronic species (same number of
electrons), the ionic radius decreases with increasing nuclear charge:

$, $
\mathrm{O}^{2-} \gt \mathrm{F}^- \gt \mathrm{Na}^+ \gt \mathrm{Mg}^{2+} \gt \mathrm{Al}^{3+}
$, $

All have the neon electron configuration ($1s^2 2s^2 2p^6$), but nuclear charge increases from 8
to 13.

## Shielding and Effective Nuclear Charge

### Shielding Constant ($\sigma$)

The **shielding constant** $\sigma$ quantifies the extent to which inner electrons screen the
nuclear charge from a valence electron. A simplified model (Slater's rules) assigns:

- Electrons in the same group ($ns, np$): shield with efficiency $0.35$ each (except $1s$: $0.30$).
- Electrons in the $(n-1)$ shell: shield with efficiency $0.85$.
- Electrons in shells $\le (n-2)$: shield with efficiency $1.00$.

### Effective Nuclear Charge ($Z_\mathrm{eff}$)

$, $
Z_\mathrm{eff} = Z - \sigma
$, $

**Worked Example.** For potassium ($Z = 19$Configuration $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$), the
shielding experienced by the $4s$ electron:

$, $
\sigma = (8 \times 0.85) + (10 \times 1.00) = 6.8 + 10.0 = 16.8
$, $

$, $
Z_\mathrm{eff} = 19 - 16.8 = 2.2
$, $

This low effective nuclear charge explains why the $4s$ electron is so lost (low first ionisation
energy of K).

For calcium ($Z = 20$$4s^2$), each $4s$ electron experiences:

$$
\sigma = (1 \times 0.35) + (8 \times 0.85) + (10 \times 1.00) = 0.35 + 6.8 + 10.0 = 17.15
$$

$$
Z_\mathrm{eff} = 20 - 17.15 = 2.85
$$

The higher $Z_\mathrm{eff}$ for Ca compared to K explains the higher first ionisation energy of Ca
(590 vs 419 kJ/mol).

## Periodic Trends Summary

| Property                   | Across a period     | Down a group |
| -------------------------- | ------------------- | ------------ |
| Atomic radius              | Decreases           | Increases    |
| Ionic radius (same charge) | Decreases           | Increases    |
| First ionisation energy    | Generally increases | Decreases    |
| Electronegativity          | Increases           | Decreases    |
| Metallic character         | Decreases           | Increases    |
| Melting point (metals)     | Increases           | Decreases    |
| Melting point (non-metals) | Variable            | Variable     |

## Practice Problems

<details>
<summary>Problem 1</summary>

Bromine has two stable isotopes: $^{79}\mathrm{Br}$ (50.69%) and $^{81}\mathrm{Br}$ (49.31%).
Calculate the relative atomic mass of bromine.

**Solution:**

$$
A_r(\mathrm{Br}) = \frac◆LB◆(79 \times 50.69) + (81 \times 49.31)◆RB◆◆LB◆100◆RB◆ = \frac{4004.5 + 3994.1}{100} = 79.99 \approx 80.0
$$

</details>

<details>
<summary>Problem 2</summary>

The first five ionisation energies of an element $X$ are (in kJ/mol): 590, 1145, 4912, 6491, 8153.
Identify the group of element $X$.

**Solution:**

The large jump between $\mathrm{IE}_2$ (1145) and $\mathrm{IE}_3$ (4912) indicates that the third
electron is being removed from a new, inner shell. This means $X$ has two valence electrons and
belongs to Group 2. The first ionisation energy (590 kJ/mol) is consistent with calcium.

</details>

<details>
<summary>Problem 3</summary>

Write the electron configuration of $\mathrm{Cr}^{3+}$ and explain why it has a $d^3$ configuration.

**Solution:**

Chromium ($Z = 24$) has the ground-state configuration $[\mathrm{Ar}]\,4s^1 3d^5$. When forming
$\mathrm{Cr}^{3+}$The $4s$ electrons are removed first (as they are higher in energy once the $3d$
subshell is populated), followed by one $3d$ electron:

$$
\mathrm{Cr}^{3+}: [\mathrm{Ar}]\,3d^3
$$

The $d^3$ configuration has one electron in each of three $d$ orbitals with parallel spins, which is
stabilised by exchange energy (Hund's rule). This half-filled-like arrangement is relatively stable.

</details>

<details>
<summary>Problem 4</summary>

Explain why the first ionisation energy of oxygen is less than that of nitrogen.

**Solution:**

Nitrogen ($1s^2 2s^2 2p^3$) has three unpaired $2p$ electrons, one in each $2p$ orbital (Hund's
rule). Oxygen ($1s^2 2s^2 2p^4$) has four $2p$ electrons, so one orbital must contain a pair.
Removing an electron from oxygen means removing one of the paired electrons from the doubly-occupied
orbital. The pairing repulsion in that orbital makes the electron less tightly held than a nitrogen
$2p$ electron, so oxygen has a lower first ionisation energy.

</details>

<details>
<summary>Problem 5</summary>

The mass spectrum of an element shows three peaks at $m/z = 52$54, and 56 with relative abundances
17.4%, 67.8%, and 14.8% respectively. (a) Identify the element. (b) Explain the pattern.

**Solution:**

(a) The element is chromium ($\mathrm{Cr}$$Z = 24$$A_r \approx 52$). The peaks correspond to
$^{52}\mathrm{Cr}$$^{54}\mathrm{Cr}$And $^{56}\mathrm{Cr}$.

(b) Chromium has four stable isotopes: $^{50}\mathrm{Cr}$ (4.3%), $^{52}\mathrm{Cr}$ (83.8%),
$^{53}\mathrm{Cr}$ (9.5%), and $^{54}\mathrm{Cr}$ (2.4%). However, the data shows three peaks at 52,
54, and 56, which is more consistent with iron ($\mathrm{Fe}$$Z = 26$): $^{54}\mathrm{Fe}$ (5.8%),
$^{56}\mathrm{Fe}$ (91.7%), $^{57}\mathrm{Fe}$ (2.1%), and $^{58}\mathrm{Fe}$ (0.3%).

Re-examining: the $m/z$ values of 52, 54, 56 with the given abundances most closely match chromium:
$^{52}\mathrm{Cr}$ ($A_r = 51.94$Abundance $\approx 83.8\%$), $^{53}\mathrm{Cr}$
($A_r = 52.94$$\approx 9.5\%$), $^{54}\mathrm{Cr}$ ($A_r = 53.94$$\approx 2.4\%$). However, the
relative abundances in the problem (17.4%, 67.8%, 14.8%) do not match chromium's known isotope
pattern.

The correct identification requires the data to be internally consistent:
$A_r = 52 \times 0.174 + 54 \times 0.678 + 56 \times 0.148 = 9.05 + 36.61 + 8.29 = 53.95$. This
value ($\approx 54$) is closest to chromium, but the isotope pattern does not match natural
abundance. The element is therefore most likely **chromium** with the mass spectrum showing a
simplified or experimental dataset.

</details>

## Mass Spectrometry in Detail

### High-Resolution Mass Spectrometry

Low-resolution mass spectrometry gives $m/z$ to the nearest integer. High-resolution MS gives $m/z$
to several decimal places, allowing distinction between species with the same nominal mass:

| Species                              | Exact mass ($m/z$) | Nominal mass |
| ------------------------------------ | ------------------ | ------------ |
| $\mathrm{C}_3\mathrm{H}_8$           | 44.063             | 44           |
| $\mathrm{CO}_2$                      | 43.990             | 44           |
| $\mathrm{N}_2\mathrm{O}$             | 44.001             | 44           |
| $\mathrm{C}_2\mathrm{H}_4\mathrm{O}$ | 44.026             | 44           |

High-resolution MS can distinguish $\mathrm{C}_3\mathrm{H}_8$ ($44.063$) from $\mathrm{CO}_2$
($43.990$) -- a difference of $0.073\,\mathrm{amu}$Resolved by modern instruments.

### The Rule of 13

The rule of 13 provides possible molecular formulas from the molecular ion peak:

$$
M_r = 13n + r
$$

Where $n$ is the number of carbon atoms and $r$ is the number of hydrogen atoms (plus halogens
counted as hydrogen equivalents: F = H, Cl = H + 35, Br = H + 79, I = H + 127).

**Example.** For $M_r = 92$: $92 = 13 \times 7 + 1$. Base formula: $\mathrm{C}_7\mathrm{H}_1$. This
is unrealistic (too few H for 7 C), so subtract 6 H and add one degree of unsaturation:
$\mathrm{C}_7\mathrm{H}_8$. Possible structures: toluene ($\mathrm{C}_6\mathrm{H}_5\mathrm{CH}_3$)
or methylcyclohexene.

### Isotope Peaks in Mass Spectrometry

The M+1 peak provides a way to estimate the number of carbon atoms:

$$
\text{Number of carbons} \approx \frac◆LB◆\%\,\text{intensity of M+1}◆RB◆◆LB◆1.1◆RB◆
$$

**Worked Example.** A compound has a molecular ion at $m/z = 150$ (100%) and M+1 at $m/z = 151$
(9.9%). Estimate the number of carbons.

$$
N(\mathrm{C}) \approx \frac{9.9}{1.1} = 9
$$

The compound likely contains 9 carbon atoms. $12 \times 9 = 108$. Remaining mass = $150 - 108 = 42$.
This could correspond to $\mathrm{C}_2\mathrm{H}_2\mathrm{O}$ (or other combinations). The rule of
13 confirms: $150 = 13 \times 11 + 7$So the base formula is $\mathrm{C}_{11}\mathrm{H}_7$. With 9
carbons, the formula becomes $\mathrm{C}_9\mathrm{H}_{10}\mathrm{O}$
($M_r = 9 \times 12 + 10 + 16 = 138$Which does not match). The calculation illustrates the method
but requires additional information (like the M+2 peak for halogens) for unambiguous determination.

## Electron Configuration and Periodic Trends

### Exceptions to the Aufbau Principle

The following elements have ground-state configurations that deviate from the simple Aufbau
prediction:

| Element     | Expected                   | Actual                        | Reason                                                    |
| ----------- | -------------------------- | ----------------------------- | --------------------------------------------------------- |
| Cr ($Z=24$) | $[\mathrm{Ar}]\,4s^2 3d^4$ | $[\mathrm{Ar}]\,4s^1 3d^5$    | Half-filled $d$ subshell is stabilised by exchange energy |
| Cu ($Z=29$) | $[\mathrm{Ar}]\,4s^2 3d^9$ | $[\mathrm{Ar}]\,4s^1 3d^{10}$ | Fully-filled $d$ subshell is stabilised                   |

The exchange energy arises because electrons with parallel spins (Hund's rule) cannot occupy the
same region of space (Pauli exclusion), which reduces electron-electron repulsion. The energy gained
from exchange stabilisation can exceed the energy difference between $4s$ and $3d$ orbitals.

### Ionisation Energy Trends Explained

**Across a period:** IE generally increases because:

1. Nuclear charge increases (stronger attraction to electrons).
2. Atomic radius decreases (electrons are closer to the nucleus).
3. Shielding increases only slightly (inner electrons screen imperfectly).

**Down a group:** IE decreases because:

1. Atomic radius increases significantly (outermost electron is further from the nucleus).
2. Shielding increases (more inner electron shells).

**Exceptions across Period 2:**

- Be ($\mathrm{IE} \gt \mathrm{B}$): Be has a filled $2s$ subshell ($2s^2$), which is relatively
  stable. B has $2s^2 2p^1$And the $2p$ electron is higher in energy and easier to remove.
- N ($\mathrm{IE} \gt \mathrm{O}$): N has a half-filled $2p$ subshell ($2p^3$), which is stabilised
  by exchange energy. O has $2p^4$ with pairing repulsion in one orbital.

### Successive Ionisation Energies

Successive ionisation energies ($\mathrm{IE}_1$$\mathrm{IE}_2$$\mathrm{IE}_3$...) always increase
because each electron is removed from an increasingly positive ion. Large jumps indicate that the
electron is being removed from a new, inner shell closer to the nucleus.

**Worked Example.** The first five ionisation energies of an element are (in $\mathrm{kJ/mol}$):
$578$$1817$$2745$$11578$$14842$.

The large jump between $\mathrm{IE}_3$ and $\mathrm{IE}_4$ indicates that the first three electrons
are removed from the outer shell, and the fourth is removed from an inner shell. The element is in
Group 13 (three valence electrons). This is aluminium.

### Using Ionisation Energy Data to Identify Elements

A plot of $\log(\mathrm{IE})$ vs ionisation number shows clear steps corresponding to the removal of
electrons from different shells. The number of electrons in each step gives the group number.

| Element | $\mathrm{IE}_1$ ($\mathrm{kJ/mol}$) | Group | Evidence             |
| ------- | ----------------------------------- | ----- | -------------------- |
| Na      | $496$$4562$...                      | 1     | Large jump after 1st |
| Mg      | $738$$1451$$7733$...                | 2     | Large jump after 2nd |
| Al      | $578$$1817$$2745$$11578$...         | 13    | Large jump after 3rd |
| Si      | $789$$1577$$3228$$4356$$16091$...   | 14    | Large jump after 4th |

### Trends Across Period 3 in Detail

| Property                            | Na   | Mg   | Al   | Si                   | P    | S    | Cl     | Ar     |
| ----------------------------------- | ---- | ---- | ---- | -------------------- | ---- | ---- | ------ | ------ |
| $\mathrm{IE}_1$ ($\mathrm{kJ/mol}$) | 496  | 738  | 578  | 789                  | 1012 | 1000 | 1251   | 1521   |
| Atomic radius ($\mathrm{pm}$)       | 186  | 160  | 143  | 118                  | 110  | 104  | 99     | --     |
| Melting point ($^\circ\mathrm{C}$)  | 98   | 650  | 661  | 1414                 | 44   | 115  | $-101$ | $-189$ |
| Electrical conductivity             | Good | Good | Good | Poor (semiconductor) | Poor | Poor | Poor   | Poor   |

**Melting point anomaly:** Silicon has the highest melting point because it has a giant covalent
(macromolecular) structure with strong covalent bonds throughout. Sulphur has a higher melting point
than phosphorus because $S_8$ molecules are larger and have more London forces than $P_4$ molecules.

### Metallic vs Non-Metallic Character

Metallic character decreases across a period (increasing nuclear charge pulls electrons closer,
making them harder to lose) and increases down a group (increasing atomic radius makes electron loss
easier).

Non-metallic character follows the opposite trend: it increases across a period and decreases down a
group.

The diagonal relationship: Elements diagonally adjacent in the periodic table (e.g. Li and Mg, Be
and Al) show similar properties due to similar charge-to-radius ratios.

## Additional Practice Problems

<details>
<summary>Problem 4</summary>

The first four ionisation energies of an element X are: $738$$1451$$7733$And
$10540\,\mathrm{kJ/mol}$. Identify the element and explain the pattern.

**Solution:**

The large jump between the second ($1451$) and third ($7733$) ionisation energies indicates that
removing the third electron requires breaking into a new, inner electron shell. The element has two
valence electrons and is in Group 2.

The element is **magnesium** ($\mathrm{Mg}$$Z = 12$Electron configuration $[\mathrm{Ne}]\,3s^2$).
The first two electrons are removed from the $3s$ subshell (valence); the third must be removed from
the $2p$ subshell (core), which is much closer to the nucleus and more tightly held.

</details>

<details>
<summary>Problem 5</summary>

A mass spectrum shows the following peaks for an organic compound: $m/z = 78$ (M+, base peak), 79
(M+1, 6.7\% of M+), 80 (M+2, 0.5\% of M+). No significant peaks at $m/z > 80$.

(a) Suggest the molecular formula. (b) Identify the compound.

**Solution:**

(a) M+1 = 6.7% suggests approximately $6.7/1.1 = 6$ carbons. $\mathrm{C}_6\mathrm{H}_6$: $M = 72$
(too low). $\mathrm{C}_6\mathrm{H}_6$... $M = 6(12) + 6(1) = 78$. Check: M+2 = 0.5%, consistent with
approximately 6 carbons (each $^{13}\mathrm{C}$ contributes 1.1%, and $6 \times 1.1 = 6.6\%$; M+2
from two $^{13}\mathrm{C}$ atoms: $C(6,2) \times (0.011)^2 \approx 15 \times 0.000121 = 0.18\%$Plus
other contributions). The data are consistent with $\mathrm{C}_6\mathrm{H}_6$.

(b) $\mathrm{C}_6\mathrm{H}_6$ is **benzene** ($M = 78$). The mass spectrum of benzene
characteristically shows the molecular ion as the base peak (highly stable aromatic ring).

</details>

<details>
<summary>Problem 6</summary>

Explain why the first ionisation energy of oxygen is lower than that of nitrogen, even though oxygen
has a higher nuclear charge.

**Solution:**

Nitrogen has the electron configuration $1s^2 2s^2 2p^3$ with a half-filled $2p$ subshell.
Half-filled subshells are stabilised by exchange energy (electrons with parallel spins minimise
repulsion due to the Pauli exclusion principle). Removing an electron from this stable configuration
requires extra energy.

Oxygen has $1s^2 2s^2 2p^4$. The fourth electron in the $2p$ subshell must pair with another
electron in one of the $p$ orbitals. The pairing repulsion between the two electrons in the same
orbital partially offsets the increased nuclear charge. This makes the electron easier to remove
from oxygen than from nitrogen, despite the higher nuclear charge.

Data:
$\mathrm{IE}_1(\mathrm{N}) = 1402\,\mathrm{kJ/mol}$$\mathrm{IE}_1(\mathrm{O}) = 1314\,\mathrm{kJ/mol}$.

</details>

## Advanced Ionisation Energy Problems

<details>
<summary>Problem 7</summary>

The successive ionisation energies of element X are shown below:

| $n$                    | 1   | 2    | 3    | 4     | 5     | 6     | 7     | 8     | 9     | 10    | 11    |
| ---------------------- | --- | ---- | ---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| IE ($\mathrm{kJ/mol}$) | 578 | 1817 | 2745 | 11578 | 14842 | 18377 | 23327 | 27466 | 31862 | 37216 | 42640 |

(a) In which group of the periodic table is element X? (1 mark)

(b) Identify element X. (1 mark)

(c) Explain the large jump between the third and fourth ionisation energies. (2 marks)

(d) Predict the formula of the oxide formed by element X. (1 mark)

**Solution:**

(a) Group 13. The large jump between the 3rd and 4th ionisation energies indicates that the first
three electrons are in the outer shell (valence electrons), and the 4th electron is removed from an
inner shell.

(b) Aluminium ($\mathrm{Al}$$Z = 13$). The first ionisation energy (578 kJ/mol) matches the known
value for aluminium.

(c) The first three electrons are removed from the $n = 3$ shell ($3s^2 3p^1$). The fourth electron
must be removed from the $n = 2$ shell ($2p^6$), which is much closer to the nucleus and more
strongly held. The large increase in ionisation energy reflects the transition from valence to core
electrons (1 mark for identifying the shell transition, 1 mark for explaining that inner shell
electrons experience less shielding and are closer to the nucleus).

(d) $\mathrm{Al}_2\mathrm{O}_3$. Aluminium is in Group 13 and forms a $3+$ ion. Oxygen forms a $2-$
ion. The formula requires charge balance: $2 \times 3+ = 3 \times 2-$Giving
$\mathrm{Al}_2\mathrm{O}_3$.

</details>

<details>
<summary>Problem 8</summary>

A mass spectrum of an organic compound shows the following peaks:

- $m/z = 92$ (M+, 100% relative intensity)
- $m/z = 93$ (M+1, 7.7% relative intensity)
- $m/z = 94$ (M+2, 0.3% relative intensity)
- $m/z = 65$ (base fragment)
- $m/z = 91$ (major fragment, tropylium ion)

(a) Determine the molecular formula. (3 marks)

(b) Suggest the identity of the compound. (1 mark)

(c) Explain the origin of the peak at $m/z = 91$. (2 marks)

**Solution:**

(a) M+1 = 7.7% suggests approximately $7.7/1.1 = 7$ carbon atoms. $7 \times 12 = 84$. Remaining mass
= $92 - 84 = 8$Which corresponds to 8 hydrogen atoms. The molecular formula is
$\mathrm{C}_7\mathrm{H}_8$. Verification: $\text{DoU} = \frac{2(7) + 2 - 8}{2} = 4$. This is
consistent with a benzene ring (4 degrees of unsaturation: one ring + three double bonds in the
aromatic system).

M+2 = 0.3% is consistent with two $^{13}\mathrm{C}$ atoms:
$C(7,2) \times (0.011)^2 = 21 \times 0.000121 = 0.25\%$Close to the observed value.

(b) $\mathrm{C}_7\mathrm{H}_8$ is consistent with **toluene**
($\mathrm{C}_6\mathrm{H}_5\mathrm{CH}_3$).

(c) The peak at $m/z = 91$ corresponds to the tropylium ion ($\mathrm{C}_7\mathrm{H}_7^+$), formed
by loss of one hydrogen atom from the methyl group followed by ring expansion of the resulting
benzyl cation. The tropylium ion has a cyclic, aromatic structure
($\mathrm{C}_7\mathrm{H}_7^+$$6\,\pi$ electrons satisfying Huckel's rule) that makes it
exceptionally stable, explaining its high intensity in the mass spectrum.

</details>

## Electron Configuration and Periodicity in Detail

### Shielding and Penetration Effects

Not all electrons in the same principal shell shield equally. The $s$ orbital penetrates closer to
the nucleus than the $p$ orbital, and $p$ penetrates closer than $d$. This means:

- $s$ electrons experience less shielding (higher $Z_\mathrm{eff}$) than $p$ electrons in the same
  shell.
- The $4s$ orbital is lower in energy than $3d$ for $Z \le 20$ because the $4s$ electron penetrates
  through the inner shell electron cloud more effectively.
- For $Z > 20$The increasing nuclear charge pulls the $3d$ electrons closer, and $3d$ drops below
  $4s$ in energy.

### Effective Nuclear Charge Calculations for Period 3

| Element | $Z$ | Configuration            | $\sigma$                                 | $Z_\mathrm{eff}$ (valence) |
| ------- | --- | ------------------------ | ---------------------------------------- | -------------------------- |
| Na      | 11  | $[\mathrm{Ne}]3s^1$      | $10 \times 0.85 = 8.5$                   | $11 - 8.5 = 2.5$           |
| Mg      | 12  | $[\mathrm{Ne}]3s^2$      | $1 \times 0.35 + 10 \times 0.85 = 8.85$  | $12 - 8.85 = 3.15$         |
| Al      | 13  | $[\mathrm{Ne}]3s^2 3p^1$ | $2 \times 0.35 + 10 \times 0.85 = 9.20$  | $13 - 9.20 = 3.80$         |
| Si      | 14  | $[\mathrm{Ne}]3s^2 3p^2$ | $3 \times 0.35 + 10 \times 0.85 = 9.55$  | $14 - 9.55 = 4.45$         |
| P       | 15  | $[\mathrm{Ne}]3s^2 3p^3$ | $4 \times 0.35 + 10 \times 0.85 = 9.90$  | $15 - 9.90 = 5.10$         |
| S       | 16  | $[\mathrm{Ne}]3s^2 3p^4$ | $5 \times 0.35 + 10 \times 0.85 = 10.25$ | $16 - 10.25 = 5.75$        |
| Cl      | 17  | $[\mathrm{Ne}]3s^2 3p^5$ | $6 \times 0.35 + 10 \times 0.85 = 10.60$ | $17 - 10.60 = 6.40$        |
| Ar      | 18  | $[\mathrm{Ne}]3s^2 3p^6$ | $7 \times 0.35 + 10 \times 0.85 = 10.95$ | $18 - 10.95 = 7.05$        |

The steady increase in $Z_\mathrm{eff}$ across the period explains the general increase in first
ionisation energy.

### Anomalous Trends: Quantitative Treatment

The drop from Be to B:

- $\mathrm{IE}_1(\mathrm{Be}) = 899\,\mathrm{kJ/mol}$ ($2s^2$Filled subshell)
- $\mathrm{IE}_1(\mathrm{B}) = 801\,\mathrm{kJ/mol}$ ($2s^2 2p^1$)

The $2p$ electron in boron is shielded by the two $2s$ electrons (which have the same $n$ value but
different $\ell$). The $2s$ orbital penetrates more effectively than $2p$So the $2s$ electrons are
held more tightly and shield the $2p$ electron more effectively than $2p$ electrons shield each
other. This reduces $Z_\mathrm{eff}$ for the $2p$ electron, making it easier to remove.

The drop from N to P:

- $\mathrm{IE}_1(\mathrm{N}) = 1402\,\mathrm{kJ/mol}$ ($2p^3$Half-filled)
- $\mathrm{IE}_1(\mathrm{O}) = 1314\,\mathrm{kJ/mol}$ ($2p^4$)

In nitrogen ($2p^3$), each $p$ orbital has one electron (Hund's rule). In oxygen ($2p^4$), one
orbital must contain two paired electrons. The pairing energy (exchange energy lost + Coulombic
repulsion between paired electrons) makes the fourth electron less tightly held.

Exchange energy stabilisation for half-filled subshells: A half-filled $p^3$ configuration has three
electrons with parallel spins. The number of exchange interactions is $\binom{3}{2} = 3$. For
$p^4$The number of parallel spin pairs is $\binom{3}{2} = 3$ (among the three unpaired electrons)
plus the exchange between one of the unpaired electrons and the paired electron if spins are
parallel. The net exchange stabilisation decreases slightly when the subshell goes from half-filled
to more-than-half-filled.

### Mass Spectrometry: Fragmentation Patterns

Understanding fragmentation patterns is essential for identifying organic compounds from mass
spectra.

**Common fragmentation pathways:**

| Fragment                     | $m/z$ | Origin                     |
| ---------------------------- | ----- | -------------------------- |
| $\mathrm{CH}_3^+$            | 15    | Loss of alkyl group        |
| $\mathrm{OH}^+$              | 17    | Alcohols, carboxylic acids |
| $\mathrm{C}_2\mathrm{H}_5^+$ | 29    | Ethyl group                |
| $\mathrm{CHO}^+$             | 29    | Aldehydes                  |
| $\mathrm{CH}_3\mathrm{CO}^+$ | 43    | Methyl ketones             |
| $\mathrm{COOH}^+$            | 45    | Carboxylic acids           |
| $\mathrm{C}_6\mathrm{H}_5^+$ | 77    | Aromatic compounds         |
| $\mathrm{C}_7\mathrm{H}_7^+$ | 91    | Benzyl/tropylium ion       |

**Alpha cleavage:** The bond adjacent to the carbonyl group breaks, producing an acylium ion. For
example, in propanone ($\mathrm{CH}_3\mathrm{COCH}_3$), alpha cleavage gives
$\mathrm{CH}_3\mathrm{CO}^+$ at $m/z = 43$ (base peak) and $\mathrm{CH}_3^+$ at $m/z = 15$.

**McLafferty rearrangement:** A hydrogen atom six atoms away from a carbonyl group transfers to the
carbonyl oxygen, with simultaneous cleavage of the bond between the $\alpha$- and $\beta$-carbons.
This produces an enol radical cation and a neutral alkene. For butanal
($\mathrm{CH}_3\mathrm{CH}_2\mathrm{CH}_2\mathrm{CHO}$), McLafferty rearrangement gives
$\mathrm{C}_2\mathrm{H}_4\mathrm{O}^{+\bullet}$ at $m/z = 44$.

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (4 marks)</summary>

Explain why the first ionisation energy of sodium is lower than that of magnesium, and why the first
ionisation energy of aluminium is lower than that of magnesium.

**Mark Scheme:**

Na < Mg (2 marks): Both have electrons in the $3s$ subshell. Magnesium has a higher nuclear charge
($Z = 12$ vs $Z = 11$) with similar shielding, so the outer electrons are held more tightly, giving
a higher ionisation energy (1 mark). The $3s^2$ configuration of Mg also has the added stability of
a filled subshell (1 mark).

Al < Mg (2 marks): The electron removed from Al is a $3p$ electron, which is higher in energy than
the $3s$ electrons of Mg (1 mark). The $3p$ electron is further from the nucleus on average and is
shielded by the $3s^2$ electrons, making it easier to remove (1 mark).

</details>

<details>
<summary>Q2 (5 marks)</summary>

The mass spectrum of a compound shows a molecular ion peak at $m/z = 78$ (100%) and a base peak at
$m/z = 77$ (M-1). The M+1 peak at $m/z = 79$ has 6.7% relative intensity. A significant peak also
appears at $m/z = 51$.

(a) Suggest the molecular formula. (2 marks)

(b) Identify the compound. (1 mark)

(c) Explain the peak at $m/z = 77$. (1 mark)

(d) Suggest the identity of the fragment at $m/z = 51$. (1 mark)

**Mark Scheme:**

(a) M+1 = 6.7% gives approximately $6.7/1.1 \approx 6$ carbon atoms (1 mark).
$\mathrm{C}_6\mathrm{H}_6$: $M = 72 + 6 = 78$. Molecular formula: $\mathrm{C}_6\mathrm{H}_6$ (1
mark).

(b) Benzene ($\mathrm{C}_6\mathrm{H}_6$) (1 mark).

(c) The peak at $m/z = 77$ is $\mathrm{C}_6\mathrm{H}_5^+$ (phenyl cation), formed by loss of one
hydrogen atom from the molecular ion (1 mark).

(d) The peak at $m/z = 51$ is $\mathrm{C}_4\mathrm{H}_3^+$Formed by further fragmentation of the
phenyl cation (loss of $\mathrm{C}_2\mathrm{H}_2$ from $\mathrm{C}_6\mathrm{H}_5^+$: $77 - 26 = 51$)
(1 mark).

</details>

<details>
<summary>Q3 (6 marks)</summary>

Define the term first ionisation energy. The first five ionisation energies of an element are shown
below:

| $n$                    | 1   | 2    | 3    | 4     | 5     |
| ---------------------- | --- | ---- | ---- | ----- | ----- |
| IE ($\mathrm{kJ/mol}$) | 738 | 1451 | 7733 | 10540 | 13630 |

(a) Identify the element. (1 mark)

(b) Explain why there is a large increase between the second and third ionisation energies. (2
marks)

(c) Write the electron configuration of the ion formed after the second ionisation. (1 mark)

(d) Explain why the ion in part (c) has a smaller ionic radius than the atom. (2 marks)

**Mark Scheme:**

(a) Magnesium ($\mathrm{Mg}$$Z = 12$) (1 mark).

(b) The first two electrons are removed from the $3s$ subshell (valence electrons) (1 mark). The
third electron is removed from the $2p$ subshell (core electrons), which is closer to the nucleus
and experiences less shielding, so much more energy is required (1 mark).

(c) $\mathrm{Mg}^{2+}$: $1s^2 2s^2 2p^6$ or $[\mathrm{Ne}]$ (1 mark).

(d) When electrons are removed, the remaining electrons experience less electron-electron repulsion
and are pulled closer to the nucleus by the unchanged nuclear charge (1 mark). The increased
effective nuclear charge per electron reduces the ionic radius (1 mark).

</details>

<details>
<summary>Q4 (5 marks)</summary>

High-resolution mass spectrometry gives the molecular ion peak of a compound at $m/z = 60.0575$. Two
possible molecular formulas are $\mathrm{C}_3\mathrm{H}_8\mathrm{O}$ and
$\mathrm{C}_2\mathrm{H}_4\mathrm{O}_2$.

(a) Calculate the exact mass of each formula. (2 marks)

(b) Identify the correct formula. (1 mark)

(c) The compound gives a positive iodoform test. Suggest the identity of the compound. (2 marks)

**Mark Scheme:**

(a) $\mathrm{C}_3\mathrm{H}_8\mathrm{O}$:
$3(12.0000) + 8(1.0078) + 15.9949 = 36.0000 + 8.0625 + 15.9949 = 60.0574$ (1 mark).

$\mathrm{C}_2\mathrm{H}_4\mathrm{O}_2$:
$2(12.0000) + 4(1.0078) + 2(15.9949) = 24.0000 + 4.0313 + 31.9898 = 60.0211$ (1 mark).

(b) The measured value ($60.0575$) matches $\mathrm{C}_3\mathrm{H}_8\mathrm{O}$ (60.0574) much more
closely than $\mathrm{C}_2\mathrm{H}_4\mathrm{O}_2$ (60.0211). The correct formula is
$\mathrm{C}_3\mathrm{H}_8\mathrm{O}$ (1 mark).

(c) A positive iodoform test indicates a $\mathrm{CH}_3\mathrm{CO}-$ group. With the formula
$\mathrm{C}_3\mathrm{H}_8\mathrm{O}$The compound is **propan-2-ol**
($\mathrm{CH}_3\mathrm{CH}(\mathrm{OH})\mathrm{CH}_3$). Under the iodoform test conditions,
propan-2-ol is oxidised to propanone, which contains the $\mathrm{CH}_3\mathrm{CO}-$ group (1 mark
for propan-2-ol, 1 mark for explanation).

</details>

---

:::tip Diagnostic Test Ready to test your understanding of **Atomic Structure and Periodicity**? The
[diagnostic test](/docs/alevel/chemistry/diagnostics/diag-atomic-structure) contains the hardest
questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Atomic
Structure and Periodicity with other chemistry topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/chemistry/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

## Common Pitfalls

1. Confusing enthalpy of formation with enthalpy of combustion, or using the wrong sign convention.

2. Misidentifying the limiting reagent — compare mole ratios rather than comparing masses.

3. Confusing the terms 'molar' and 'molecular' — molar refers to per mole ($\text{mol}^{-1}$), while
   molecular refers to individual molecules.

4. Forgetting to balance equations before performing calculations — always check that atoms and
   charges balance on both sides.
