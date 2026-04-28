---
title: Atomic Structure
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Chemistry
categories:
  - DSE
  - Chemistry
slug: dse-chemistry-atomic-structure
---

## Subatomic Particles

| Particle | Symbol | Relative Mass         | Relative Charge | Location        |
| -------- | ------ | --------------------- | --------------- | --------------- |
| Proton   | $p$    | 1                     | $+1$            | Nucleus         |
| Neutron  | $n$    | 1                     | $0$             | Nucleus         |
| Electron | $e^-$  | $1/1836$ (negligible) | $-1$            | Electron shells |

The **atomic number** $Z$ equals the number of protons. The **mass number** $A$:

$$A = Z + N$$

where $N$ is the number of neutrons.

---

## Atomic Models

### Thomson's Plum Pudding Model (1904)

Atoms are spheres of positive charge with electrons embedded within, like plums in a pudding. This
model was disproved by Rutherford's scattering experiment.

### Rutherford's Nuclear Model (1911)

Alpha particles were fired at thin gold foil. Most passed through, but some were deflected at large
angles, and a few bounced back. This showed that:

- Most of the atom is empty space
- The positive charge and most of the mass are concentrated in a tiny, dense nucleus
- Electrons orbit the nucleus

### Bohr Model (1913)

Electrons occupy fixed energy levels (shells) at specific distances from the nucleus. Electrons can
jump between levels by absorbing or emitting photons of energy:

$$\Delta E = hf = \frac{hc}{\lambda}$$

where $h = 6.63 \times 10^{-34} \mathrm{ J\, s}$ is Planck's constant.

### Quantum Mechanical Model

Electrons occupy orbitals (regions of high probability) described by quantum numbers. This model
replaces the idea of fixed orbits with probability distributions.

| Quantum Number   | Symbol   | Description                              |
| ---------------- | -------- | ---------------------------------------- |
| Principal        | $n$      | Energy level ($n = 1, 2, 3, \ldots$)     |
| Angular momentum | $\ell$   | Subshell shape ($0$ to $n-1$)            |
| Magnetic         | $m_\ell$ | Orbital orientation ($-\ell$ to $+\ell$) |
| Spin             | $m_s$    | Electron spin ($+1/2$ or $-1/2$)         |

---

## Isotopes

### Definition

Isotopes are atoms of the same element (same $Z$) with different numbers of neutrons (different $N$
and hence different $A$). They have identical chemical properties but different physical properties
(different masses, different nuclear stability).

### Relative Atomic Mass

The relative atomic mass is the weighted average of the isotopic masses:

$$A_r = \sum (\mathrm{isotope mass} \times \mathrm{fractional abundance})$$

### Worked Example 1

Boron has two isotopes: $\mathrm{^{10}B}$ (19.9% abundance) and $\mathrm{^{11}B}$ (80.1% abundance).
Calculate the relative atomic mass.

<details>
<summary>Solution</summary>

$$A_r = 10 \times 0.199 + 11 \times 0.801 = 1.99 + 8.811 = 10.80$$

</details>

### Mass Spectrometry

A mass spectrometer separates ions by their mass-to-charge ratio ($m/z$):

1. **Vaporisation:** Sample is vaporised
2. **Ionisation:** Atoms are ionised by electron bombardment
3. **Acceleration:** Ions accelerated by electric field
4. **Deflection:** Ions deflected by magnetic field (lighter ions deflected more)
5. **Detection:** Ion abundance recorded

The mass spectrum shows peaks at each $m/z$ value with heights proportional to isotopic abundance.

---

## Electron Configuration

### Order of Filling (Aufbau Principle)

$$1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s$$

### Pauli Exclusion Principle

Each orbital holds a maximum of 2 electrons with opposite spins.

### Hund's Rule

When filling degenerate orbitals (e.g., the three $2p$ orbitals), electrons occupy separate orbitals
with parallel spins before pairing.

### Worked Example 2

Write the electron configurations of:

<details>
<summary>Solution</summary>

- Potassium ($Z = 19$): $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^1$
- Iron ($Z = 26$): $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^2\, 3d^6$ or $[\mathrm{Ar}]\, 4s^2\, 3d^6$
- Copper ($Z = 29$): $[\mathrm{Ar}]\, 4s^1\, 3d^{10}$ (exception: full $d$ subshell is more stable)

</details>

### Exceptions to Remember

- Chromium ($Z = 24$): $[\mathrm{Ar}]\, 4s^1\, 3d^5$ (half-filled $d$ subshell)
- Copper ($Z = 29$): $[\mathrm{Ar}]\, 4s^1\, 3d^{10}$ (fully-filled $d$ subshell)

When forming cations, $4s$ electrons are lost before $3d$ electrons, because once the $3d$ subshell
is occupied, it is at a lower energy than $4s$.

---

## Periodic Trends

### Trends Across a Period (Left to Right)

| Property                | Trend               | Reason                                                |
| ----------------------- | ------------------- | ----------------------------------------------------- |
| Atomic radius           | Decreases           | Increasing nuclear charge pulls electrons closer      |
| First ionisation energy | Generally increases | Electrons held more tightly by greater nuclear charge |
| Electronegativity       | Increases           | Greater attraction for bonding electrons              |
| Metallic character      | Decreases           | Atoms are less willing to lose electrons              |

### Trends Down a Group

| Property                | Trend     | Reason                                               |
| ----------------------- | --------- | ---------------------------------------------------- |
| Atomic radius           | Increases | Additional electron shells                           |
| First ionisation energy | Decreases | Outer electrons further from nucleus, more shielding |
| Electronegativity       | Decreases | Less attraction for bonding electrons                |
| Metallic character      | Increases | Easier to lose outer electrons                       |

### Ionisation Energy

**First ionisation energy** is the energy required to remove one mole of electrons from one mole of
gaseous atoms:

$$\mathrm{X}(g) \to \mathrm{X}^+(g) + e^-$$

**Dips in ionisation energy** across a period:

| Dip            | Element       | Reason                                                                      |
| -------------- | ------------- | --------------------------------------------------------------------------- |
| Group 2 to 13  | e.g. Mg to Al | $p$ electron is easier to remove than $s$ electron (higher energy subshell) |
| Group 15 to 16 | e.g. P to S   | Paired $p$ electron has electron-electron repulsion                         |

### Worked Example 3

Explain why the first ionisation energy of sulfur is lower than that of phosphorus.

<details>
<summary>Solution</summary>

Phosphorus ($Z = 15$): $[\mathrm{Ne}]\, 3s^2\, 3p^3$. All three $3p$ electrons are unpaired.

Sulfur ($Z = 16$): $[\mathrm{Ne}]\, 3s^2\, 3p^4$. One of the $3p$ orbitals now contains a paired
electron.

The fourth $3p$ electron in sulfur experiences electron-electron repulsion from its paired partner,
making it easier to remove than the unpaired $3p$ electron in phosphorus.

</details>

---

## Ionisation Energy and Group Identification

Successive ionisation energies reveal the group of an element. A large jump occurs when an electron
is removed from a new, inner shell (closer to the nucleus, less shielded).

### Worked Example 4

The first five ionisation energies of an element are: 578, 1817, 2745, 11577, and 14842 kJ/mol.
Identify the element and its group.

<details>
<summary>Solution</summary>

The large jump between the 3rd and 4th ionisation energies indicates that the first three electrons
are valence electrons and the fourth is from an inner shell. The element has three valence
electrons, placing it in **Group 13**. With a first ionisation energy of 578 kJ/mol, this is
**aluminium**.

</details>

---

## Electronegativity

Electronegativity is the ability of an atom to attract the bonding pair of electrons in a covalent
bond.

- Fluorine is the most electronegative element (Pauling scale: 4.0)
- Electronegativity increases across a period and decreases down a group
- The difference in electronegativity between bonded atoms determines bond character:
  - $\Delta\mathrm{EN} \lt 0.5$: non-polar covalent
  - $0.5 \leqslant \Delta\mathrm{EN} \lt 1.7$: polar covalent
  - $\Delta\mathrm{EN} \geqslant 1.7$: ionic

---

## Common Pitfalls

- Writing $4s^2\, 3d^6$ instead of $3d^6\, 4s^2$ when filling orbitals. The $4s$ subshell fills
  before $3d$, so write it first. However, when writing cation configurations, remove $4s$ electrons
  first.
- Confusing atomic number with mass number. Atomic number $Z$ counts protons; mass number $A$ counts
  protons plus neutrons.
- Forgetting that the first ionisation energy of an element is the energy to remove the
  **outermost** electron, not any electron.
- Assuming electronegativity differences cleanly divide bonds into ionic and covalent. The boundary
  at $\Delta\mathrm{EN} = 1.7$ is approximate.

---

## Summary Table

| Topic                   | Key Point                                     |
| ----------------------- | --------------------------------------------- |
| Atomic number $Z$       | Number of protons                             |
| Mass number $A$         | $Z + N$                                       |
| Isotopes                | Same $Z$, different $N$                       |
| Aufbau principle        | Fill orbitals in order of increasing energy   |
| Pauli exclusion         | Max 2 electrons per orbital                   |
| Hund's rule             | Fill degenerate orbitals singly first         |
| Ionisation energy trend | Increases across period, decreases down group |
| Electronegativity trend | Increases across period, decreases down group |

---

## Problem Set

**Problem 1:** The first four ionisation energies of an element are 738, 1451, 7733, and 10540
kJ/mol. To which group does this element belong?

*If you get this wrong, revise: Ionisation Energy and Group Identification*

<details>
<summary>Solution</summary>

The large jump between the 2nd and 3rd ionisation energies indicates that the first two electrons
are valence electrons. The element has two valence electrons, placing it in **Group 2**.

</details>

**Problem 2:** Write the electron configuration of $\mathrm{Fe}^{2+}$ and $\mathrm{Fe}^{3+}$.
Which ion is relatively more stable and why?

*If you get this wrong, revise: Electron Configuration*

<details>
<summary>Solution</summary>

Fe ($Z = 26$): $[\mathrm{Ar}]\, 4s^2\, 3d^6$

$\mathrm{Fe}^{2+}$: remove two $4s$ electrons: $[\mathrm{Ar}]\, 3d^6$

$\mathrm{Fe}^{3+}$: remove two $4s$ and one $3d$: $[\mathrm{Ar}]\, 3d^5$

$\mathrm{Fe}^{3+}$ is relatively stable due to its half-filled $3d^5$ configuration.

</details>

**Problem 3:** Neon has three naturally occurring isotopes: $\mathrm{^{20}Ne}$ (90.48%),
$\mathrm{^{21}Ne}$ (0.27%), and $\mathrm{^{22}Ne}$ (9.25%). Calculate the relative atomic mass of
neon.

*If you get this wrong, revise: Isotopes and Relative Atomic Mass*

<details>
<summary>Solution</summary>

$$A_r = 20 \times 0.9048 + 21 \times 0.0027 + 22 \times 0.0925 = 18.096 + 0.0567 + 2.035 = 20.188$$

</details>

**Problem 4:** Explain why the first ionisation energy of sodium is much lower than that of neon.

*If you get this wrong, revise: Ionisation Energy and Electron Configuration*

<details>
<summary>Solution</summary>

Sodium ($Z = 11$) has electron configuration $[\mathrm{Ne}]\, 3s^1$. The single $3s$ electron is in
a new shell further from the nucleus and is well shielded by the inner 10 electrons. It is
relatively easy to remove.

Neon ($Z = 10$) has a stable noble gas configuration $1s^2\, 2s^2\, 2p^6$ with a full outer shell.
Removing an electron requires breaking this stable arrangement, which requires much more energy.

</details>

**Problem 5:** The electron transition from $n = 3$ to $n = 2$ in a hydrogen atom emits a photon.
Calculate the wavelength of this photon. ($E_n = -2.18 \times 10^{-18}/n^2 \mathrm{ J}$)

*If you get this wrong, revise: Bohr Model*

<details>
<summary>Solution</summary>

$$\Delta E = E_3 - E_2 = \frac{-2.18 \times 10^{-18}}{9} - \frac{-2.18 \times 10^{-18}}{4} = -2.42 \times 10^{-19} + 5.45 \times 10^{-19} = 3.03 \times 10^{-19} \mathrm{ J}$$

$$\lambda = \frac{hc}{\Delta E} = \frac{(6.63 \times 10^{-34})(3.0 \times 10^8)}{3.03 \times 10^{-19}} = \frac{1.989 \times 10^{-25}}{3.03 \times 10^{-19}} = 6.56 \times 10^{-7} \mathrm{ m} = 656 \mathrm{ nm}$$

This is in the red region of the visible spectrum (the H-alpha line).

</details>

**Problem 6:** Write the electron configuration of $\mathrm{Cu}^{2+}$ and explain why the $4s$
electrons are removed before the $3d$ electrons.

*If you get this wrong, revise: Electron Configuration and Exceptions*

<details>
<summary>Solution</summary>

$\mathrm{Cu}$ ($Z = 29$): $[\mathrm{Ar}]\, 4s^1\, 3d^{10}$

When forming $\mathrm{Cu}^{2+}$, both the $4s$ electron and one $3d$ electron are removed:

$\mathrm{Cu}^{2+}$: $[\mathrm{Ar}]\, 3d^9$

Once the $3d$ subshell is occupied, it is at a lower energy than the $4s$ subshell. Therefore,
$4s$ electrons are removed first when forming cations, even though the $4s$ subshell fills before
$3d$.

</details>

**Problem 7:** An element has the following first seven ionisation energies (kJ/mol): 789, 1577,
3232, 4356, 16091, 19784, and 23793. Identify the group of this element.

*If you get this wrong, revise: Ionisation Energy and Group Identification*

<details>
<summary>Solution</summary>

Looking at the jumps: 789 to 1577 (small), 1577 to 3232 (moderate), 3232 to 4356 (moderate),
4356 to 16091 (**very large**).

The large jump between the 4th and 5th ionisation energies means the first four electrons are
valence electrons. The element has four valence electrons, placing it in **Group 14**.

</details>

**Problem 8:** Explain why argon has a higher first ionisation energy than chlorine, even though
chlorine has a greater nuclear charge.

*If you get this wrong, revise: Ionisation Energy Dips Across a Period*

<details>
<summary>Solution</summary>

Chlorine ($Z = 17$): $[\mathrm{Ne}]\, 3s^2\, 3p^5$. The last electron enters a $3p$ orbital that
already contains one electron, so it experiences electron-electron repulsion, making it relatively
easy to remove.

Argon ($Z = 18$): $[\mathrm{Ne}]\, 3s^2\, 3p^6$. All $3p$ orbitals are fully occupied. The
additional proton in argon's nucleus (compared to chlorine) increases the effective nuclear charge
significantly. Although there is some repulsion from paired electrons, the increased nuclear charge
dominates, making argon's outer electrons harder to remove.

</details>

**Problem 9:** Calculate the relative atomic mass of silicon given its three isotopes:
$\mathrm{^{28}Si}$ (92.2%), $\mathrm{^{29}Si}$ (4.7%), and $\mathrm{^{30}Si}$ (3.1%).

*If you get this wrong, revise: Isotopes and Relative Atomic Mass*

<details>
<summary>Solution</summary>

$$A_r = 28 \times 0.922 + 29 \times 0.047 + 30 \times 0.031 = 25.816 + 1.363 + 0.930 = 28.11$$

</details>

**Problem 10:** Define electronegativity and explain the trend in electronegativity across Period 3
from sodium to chlorine.

*If you get this wrong, revise: Electronegativity and Periodic Trends*

<details>
<summary>Solution</summary>

Electronegativity is the ability of an atom to attract the bonding pair of electrons in a covalent
bond.

Across Period 3 from Na to Cl, electronegativity increases. This is because the nuclear charge
increases by one proton each element while the shielding remains roughly the same (same number of
inner shells). The increased effective nuclear charge pulls bonding electrons more strongly,
increasing the atom's ability to attract shared electrons.

Sodium (EN $= 0.9$, lowest) to chlorine (EN $= 3.0$, highest in Period 3). Argon, being a noble
gas, does not typically form covalent bonds and is not assigned an electronegativity value.

</details>
