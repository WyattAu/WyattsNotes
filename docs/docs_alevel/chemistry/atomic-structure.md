---
title: Atomic Structure & Periodicity
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

| Property | Proton | Neutron | Electron |
|---|---|---|---|
| Symbol | $p$ or $p^+$ | $n$ or $n^0$ | $e^-$ |
| Relative charge | $+1$ | $0$ | $-1$ |
| Charge (C) | $+1.602 \times 10^{-19}$ | $0$ | $-1.602 \times 10^{-19}$ |
| Relative mass | $1.00728$ | $1.00867$ | $0.00055$ ($\approx 1/1836$) |
| Location | Nucleus | Nucleus | Electron shells / orbitals |
| Spin | $+\tfrac{1}{2}$ | $+\tfrac{1}{2}$ | $+\tfrac{1}{2}$ |

The **atomic number** (proton number) $Z$ defines the element. The **mass number** $A = Z + N$, where $N$ is the neutron number. The notation is:

$$
{}^{A}_{Z}\mathrm{X}
$$

## Isotopes

Isotopes are atoms of the same element (same $Z$) with different neutron numbers (different $A$). Chemical properties are virtually identical because they share the same electron configuration. Physical properties (melting point, density, reaction rate) differ slightly due to mass effects.

### Relative Atomic Mass ($A_r$)

The relative atomic mass is the weighted mean of the isotopic masses, weighted by their natural abundances:

$$
A_r(\mathrm{X}) = \frac{\sum_i m_i \cdot a_i}{\sum_i a_i}
$$

where $m_i$ is the isotopic mass and $a_i$ is the relative abundance of isotope $i$.

**Worked Example.** Chlorine has two stable isotopes: ${}^{35}\mathrm{Cl}$ (75.77%, $m = 34.969\,\mathrm{u}$) and ${}^{37}\mathrm{Cl}$ (24.23%, $m = 36.966\,\mathrm{u}$).

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
2. **Ionisation** -- typically by electron impact (EI): a high-energy electron beam ejects an electron from the sample molecule, producing a molecular ion $\mathrm{M}^{+\bullet}$.
3. **Acceleration** -- ions accelerated through a potential difference $V$, gaining kinetic energy $\tfrac{1}{2}mv^2 = zVe$.
4. **Deflection** -- a magnetic field $B$ deflects ions into a curved path of radius $r$:

$$
r = \frac{\sqrt{2mV/z}}{B}
$$

Lighter ions (lower $m/z$) are deflected more. The detector records the abundance at each $m/z$.

5. **Detection** -- ions strike the detector, generating a current proportional to their abundance.

### Interpreting Mass Spectra

- The **molecular ion peak** ($\mathrm{M}^{+\bullet}$) gives the relative molecular mass.
- Fragmentation produces characteristic peaks. For example, $\mathrm{CH}_4^{+\bullet}$ at $m/z = 16$; $\mathrm{CH}_3^+$ at $m/z = 15$.
- The **base peak** is the most intense signal (assigned 100% relative abundance).

**Worked Example.** A compound shows a molecular ion peak at $m/z = 78$ and a base peak at $m/z = 77$. The M+1 peak at $m/z = 79$ has 6.4% of the molecular ion intensity. This is consistent with benzene ($\mathrm{C}_6\mathrm{H}_6$, $M_r = 78$). The M+1 peak intensity ($\approx 6 \times 1.1\% = 6.6\%$) confirms six carbon atoms.

## Electron Configuration

### Quantum Numbers

Each electron in an atom is described by four quantum numbers:

| Quantum Number | Symbol | Values | Describes |
|---|---|---|---|
| Principal | $n$ | $1, 2, 3, \ldots$ | Energy level / shell |
| Azimuthal | $\ell$ | $0, 1, \ldots, n-1$ | Subshell type ($0 = s$, $1 = p$, $2 = d$) |
| Magnetic | $m_\ell$ | $-\ell, -\ell+1, \ldots, +\ell$ | Orbital orientation |
| Spin | $m_s$ | $+\tfrac{1}{2}, -\tfrac{1}{2}$ | Electron spin direction |

### Subshell Capacities

| Subshell | $\ell$ | Orbitals | Max Electrons |
|---|---|---|---|
| $s$ | $0$ | $1$ | $2$ |
| $p$ | $1$ | $3$ | $6$ |
| $d$ | $2$ | $5$ | $10$ |
| $f$ | $3$ | $7$ | $14$ |

The maximum number of electrons in shell $n$ is $2n^2$.

### Aufbau Principle

Electrons occupy the lowest energy subshells first. The filling order is:

$$
1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s \lt 4f \lt 5d \lt 6p \lt 7s
$$

The $4s$ subshell fills before $3d$ because its energy is lower for $Z \le 20$. For $Z \gt 20$, the energies shift and $3d$ becomes lower -- this is important for transition metals (see [Transition Metals](./transition-metals)).

### Pauli Exclusion Principle

No two electrons in the same atom can have the same set of four quantum numbers. Consequently, each orbital holds at most two electrons, with opposite spins.

### Hund's Rule

Within a given subshell, electrons occupy degenerate orbitals singly first, with parallel spins, before pairing. This minimises electron-electron repulsion and maximises total spin.

### Writing Electron Configurations

Use the notation $n\ell^x$ where $x$ is the number of electrons in that subshell.

| Element | $Z$ | Configuration | Shorthand |
|---|---|---|---|
| H | 1 | $1s^1$ | $1s^1$ |
| C | 6 | $1s^2 2s^2 2p^2$ | $[\mathrm{He}]\,2s^2 2p^2$ |
| Na | 11 | $1s^2 2s^2 2p^6 3s^1$ | $[\mathrm{Ne}]\,3s^1$ |
| Fe | 26 | $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$ | $[\mathrm{Ar}]\,4s^2 3d^6$ |
| Cu | 29 | $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$ | $[\mathrm{Ar}]\,4s^1 3d^{10}$ |

**Note on Cr and Cu.** Chromium ($Z = 24$) is $[\mathrm{Ar}]\,4s^1 3d^5$ and copper ($Z = 29$) is $[\mathrm{Ar}]\,4s^1 3d^{10}$. The half-filled $d^5$ and fully-filled $d^{10}$ configurations are stabilised by exchange energy -- the extra stability gained from maximising parallel spins outweighs the energy cost of promoting an electron from $4s$ to $3d$.

### d-block Electron Configurations

For transition metals, when forming cations, the $4s$ electrons are removed before the $3d$ electrons. For example:

- $\mathrm{Fe}$: $[\mathrm{Ar}]\,4s^2 3d^6$
- $\mathrm{Fe}^{2+}$: $[\mathrm{Ar}]\,3d^6$
- $\mathrm{Fe}^{3+}$: $[\mathrm{Ar}]\,3d^5$

This is because once the $3d$ subshell begins to populate, it drops below $4s$ in energy.

## Ionisation Energy

### Definition

The **first ionisation energy** of an element is the enthalpy change when one mole of gaseous atoms each loses one electron to form one mole of gaseous $1+$ ions:

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
2. **Shielding increases negligibly** -- additional electrons enter the same shell, so the shielding effect of inner electrons remains approximately constant.
3. **Atomic radius decreases** -- the increased effective nuclear charge pulls electron shells closer.
4. **Net effect** -- the outer electron is held more tightly, requiring more energy to remove.

| Element | $Z$ | Configuration | $\mathrm{IE}_1$ (kJ/mol) |
|---|---|---|---|
| Na | 11 | $[\mathrm{Ne}]\,3s^1$ | 496 |
| Mg | 12 | $[\mathrm{Ne}]\,3s^2$ | 738 |
| Al | 13 | $[\mathrm{Ne}]\,3s^2 3p^1$ | 578 |
| Si | 14 | $[\mathrm{Ne}]\,3s^2 3p^2$ | 786 |
| P | 15 | $[\mathrm{Ne}]\,3s^2 3p^3$ | 1012 |
| S | 16 | $[\mathrm{Ne}]\,3s^2 3p^4$ | 1000 |
| Cl | 17 | $[\mathrm{Ne}]\,3s^2 3p^5$ | 1251 |
| Ar | 18 | $[\mathrm{Ne}]\,3s^2 3p^6$ | 1521 |

### Anomalies: Al vs Mg and S vs P

**Al (578) &lt; Mg (738).** The electron removed from Al is a $3p$ electron, which is in a higher energy subshell than the $3s$ electrons of Mg. The $3p$ electron is further from the nucleus on average and experiences greater shielding from the $3s$ electrons.

**S (1000) &lt; P (1012).** In P ($3p^3$), each $3p$ orbital contains one electron. In S ($3p^4$), one orbital must contain two paired electrons. Pairing introduces electron-electron repulsion within the same orbital, which slightly reduces the energy required to remove one of the paired electrons.

### Trend Down a Group

Ionisation energy decreases down a group because:

1. **Principal quantum number increases** -- outer electrons occupy shells further from the nucleus.
2. **Shielding increases** -- additional inner shells screen the nuclear charge.
3. **Atomic radius increases** -- the outer electron is further from the nucleus.
4. **Net effect** -- despite increasing nuclear charge, the increased distance and shielding dominate, making electron removal easier.

| Element | $\mathrm{IE}_1$ (kJ/mol) |
|---|
| Li | 520 |
| Na | 496 |
| K | 419 |
| Rb | 403 |

### Successive Ionisation Energies

Plotting successive ionisation energies ($\mathrm{IE}_1$, $\mathrm{IE}_2$, $\mathrm{IE}_3$, ...) against ionisation number reveals the electron configuration. Large jumps occur when electrons are removed from a new inner shell.

**Worked Example.** For aluminium ($Z = 13$), successive ionisation energies are:

| $n$ | $\mathrm{IE}_n$ (kJ/mol) | Shell |
|---|---|---|
| 1 | 578 | $n = 3$ |
| 2 | 1817 | $n = 3$ |
| 3 | 2745 | $n = 3$ |
| 4 | 11577 | $n = 2$ (jump) |

The large jump between $\mathrm{IE}_3$ and $\mathrm{IE}_4$ indicates that the first three electrons were removed from the third shell (valence), and the fourth is removed from the second shell (core).

## Atomic and Ionic Radii

### Atomic Radius

The atomic radius is the distance from the nucleus to the outermost electrons. It cannot be measured directly; instead, half the internuclear distance in a covalent bond or metallic lattice is used (covalent radius or metallic radius).

**Trend across a period:** Atomic radius decreases. Increasing nuclear charge pulls electrons closer without a compensating increase in shielding (same shell).

**Trend down a group:** Atomic radius increases. Each successive element adds a new electron shell.

### Ionic Radius

**Cations** are smaller than their parent atoms because removing electrons reduces electron-electron repulsion and the remaining electrons are drawn closer by the unchanged nuclear charge. Higher charge cations are even smaller: $\mathrm{Fe}^{3+} \lt \mathrm{Fe}^{2+} \lt \mathrm{Fe}$.

**Anions** are larger than their parent atoms because adding electrons increases electron-electron repulsion, causing the electron cloud to expand. For isoelectronic species (same number of electrons), the ionic radius decreases with increasing nuclear charge:

$$
\mathrm{O}^{2-} \gt \mathrm{F}^- \gt \mathrm{Na}^+ \gt \mathrm{Mg}^{2+} \gt \mathrm{Al}^{3+}
$$

All have the neon electron configuration ($1s^2 2s^2 2p^6$), but nuclear charge increases from 8 to 13.

## Shielding and Effective Nuclear Charge

### Shielding Constant ($\sigma$)

The **shielding constant** $\sigma$ quantifies the extent to which inner electrons screen the nuclear charge from a valence electron. A simplified model (Slater's rules) assigns:

- Electrons in the same group ($ns, np$): shield with efficiency $0.35$ each (except $1s$: $0.30$).
- Electrons in the $(n-1)$ shell: shield with efficiency $0.85$.
- Electrons in shells $\le (n-2)$: shield with efficiency $1.00$.

### Effective Nuclear Charge ($Z_\mathrm{eff}$)

$$
Z_\mathrm{eff} = Z - \sigma
$$

**Worked Example.** For potassium ($Z = 19$, configuration $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$), the shielding experienced by the $4s$ electron:

$$
\sigma = (8 \times 0.85) + (10 \times 1.00) = 6.8 + 10.0 = 16.8
$$

$$
Z_\mathrm{eff} = 19 - 16.8 = 2.2
$$

This low effective nuclear charge explains why the $4s$ electron is so easily lost (low first ionisation energy of K).

For calcium ($Z = 20$, $4s^2$), each $4s$ electron experiences:

$$
\sigma = (1 \times 0.35) + (8 \times 0.85) + (10 \times 1.00) = 0.35 + 6.8 + 10.0 = 17.15
$$

$$
Z_\mathrm{eff} = 20 - 17.15 = 2.85
$$

The higher $Z_\mathrm{eff}$ for Ca compared to K explains the higher first ionisation energy of Ca (590 vs 419 kJ/mol).

## Periodic Trends Summary

| Property | Across a period | Down a group |
|---|---|---|
| Atomic radius | Decreases | Increases |
| Ionic radius (same charge) | Decreases | Increases |
| First ionisation energy | Generally increases | Decreases |
| Electronegativity | Increases | Decreases |
| Metallic character | Decreases | Increases |
| Melting point (metals) | Increases | Decreases |
| Melting point (non-metals) | Variable | Variable |

## Practice Problems

<details>
<summary>Problem 1</summary>

Bromine has two stable isotopes: ${}^{79}\mathrm{Br}$ (50.69%) and ${}^{81}\mathrm{Br}$ (49.31%). Calculate the relative atomic mass of bromine.

**Solution:**

$$
A_r(\mathrm{Br}) = \frac{(79 \times 50.69) + (81 \times 49.31)}{100} = \frac{4004.5 + 3994.1}{100} = 79.99 \approx 80.0
$$

</details>

<details>
<summary>Problem 2</summary>

The first five ionisation energies of an element $X$ are (in kJ/mol): 590, 1145, 4912, 6491, 8153. Identify the group of element $X$.

**Solution:**

The large jump between $\mathrm{IE}_2$ (1145) and $\mathrm{IE}_3$ (4912) indicates that the third electron is being removed from a new, inner shell. This means $X$ has two valence electrons and belongs to Group 2. The first ionisation energy (590 kJ/mol) is consistent with calcium.

</details>

<details>
<summary>Problem 3</summary>

Write the electron configuration of $\mathrm{Cr}^{3+}$ and explain why it has a $d^3$ configuration.

**Solution:**

Chromium ($Z = 24$) has the ground-state configuration $[\mathrm{Ar}]\,4s^1 3d^5$. When forming $\mathrm{Cr}^{3+}$, the $4s$ electrons are removed first (as they are higher in energy once the $3d$ subshell is populated), followed by one $3d$ electron:

$$
\mathrm{Cr}^{3+}: [\mathrm{Ar}]\,3d^3
$$

The $d^3$ configuration has one electron in each of three $d$ orbitals with parallel spins, which is stabilised by exchange energy (Hund's rule). This half-filled-like arrangement is relatively stable.

</details>

<details>
<summary>Problem 4</summary>

Explain why the first ionisation energy of oxygen is less than that of nitrogen.

**Solution:**

Nitrogen ($1s^2 2s^2 2p^3$) has three unpaired $2p$ electrons, one in each $2p$ orbital (Hund's rule). Oxygen ($1s^2 2s^2 2p^4$) has four $2p$ electrons, so one orbital must contain a pair. Removing an electron from oxygen means removing one of the paired electrons from the doubly-occupied orbital. The pairing repulsion in that orbital makes the electron less tightly held than a nitrogen $2p$ electron, so oxygen has a lower first ionisation energy.

</details>
