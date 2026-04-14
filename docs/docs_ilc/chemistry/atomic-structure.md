---
title: Atomic Structure
date: 2026-04-14
tags:
  - Chemistry
  - ILC
categories:
  - Chemistry
slug: atomic-structure
---

# Atomic Structure

Atomic structure is the foundation of chemistry, covering the composition of atoms, electron
configuration, atomic spectra, and periodic trends.

## Subatomic Particles (OL/HL)

| Particle | Symbol | Relative mass          | Relative charge | Location |
| -------- | ------ | ---------------------- | --------------- | -------- |
| Proton   | $p^+$  | 1                      | $+1$            | Nucleus  |
| Neutron  | $n^0$  | 1                      | $0$             | Nucleus  |
| Electron | $e^-$  | $\approx 0$ ($1/1836$) | $-1$            | Shells   |

### Atomic Number and Mass Number

- **Atomic number ($Z$):** number of protons.
- **Mass number ($A$):** number of protons + neutrons.

Notation: ${}^A_Z X$

### Isotopes (OL/HL)

Atoms of the same element with different numbers of neutrons (same $Z$, different $A$).

**Example (OL):** Carbon has two common isotopes: ${}^{12}_6\text{C}$ (98.9%) and
${}^{13}_6\text{C}$ (1.1%).

### Relative Atomic Mass (OL/HL)

$$
A_r = \frac{\sum(\text{isotope abundance} \times \text{isotope mass})}{100}
$$

**Example (OL):** Chlorine has two isotopes: ${}^{35}\text{Cl}$ (75%) and ${}^{37}\text{Cl}$ (25%).

$$
A_r = \frac{75 \times 35 + 25 \times 37}{100} = \frac{2625 + 925}{100} = 35.5
$$

## The Bohr Model and Electron Shells (OL/HL)

### Electron Shell Structure

Electrons occupy shells (energy levels) around the nucleus:

| Shell | $n$ | Maximum electrons |
| ----- | --- | ----------------- |
| K     | 1   | 2                 |
| L     | 2   | 8                 |
| M     | 3   | 18                |
| N     | 4   | 32                |

Maximum electrons in shell $n$: $2n^2$.

### Electron Configuration (OL/HL)

Write the number of electrons in each shell from the nucleus outward.

**Example (OL):** Sodium ($Z = 11$): 2, 8, 1.

**Example (OL):** Calcium ($Z = 20$): 2, 8, 8, 2.

### Subshells and Orbitals (HL)

Shells are divided into subshells: $s$, $p$, $d$, $f$.

| Subshell | Orbitals | Max electrons |
| -------- | -------- | ------------- |
| $s$      | 1        | 2             |
| $p$      | 3        | 6             |
| $d$      | 5        | 10            |
| $f$      | 7        | 14            |

### Aufbau Principle (HL)

Electrons fill orbitals from lowest to highest energy. The order is:

1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, ...

**Example (HL):** Iron ($Z = 26$): $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$ or $[\text{Ar}]\,4s^2 3d^6$.

### Hund's Rule (HL)

When filling degenerate orbitals (same energy), electrons occupy separate orbitals with parallel
spins before pairing.

### Pauli Exclusion Principle (HL)

No two electrons in an atom can have the same set of four quantum numbers. An orbital holds at most
two electrons with opposite spins.

## Quantum Numbers (HL)

| Quantum number   | Symbol   | Values                       | Describes                  |
| ---------------- | -------- | ---------------------------- | -------------------------- |
| Principal        | $n$      | $1, 2, 3, \ldots$            | Energy level / shell       |
| Angular momentum | $\ell$   | $0$ to $n-1$                 | Subshell ($s=0, p=1, d=2$) |
| Magnetic         | $m_\ell$ | $-\ell$ to $+\ell$           | Orbital orientation        |
| Spin             | $m_s$    | $+\frac{1}{2}, -\frac{1}{2}$ | Electron spin              |

## Atomic Emission Spectra (HL)

### Hydrogen Spectrum

When hydrogen atoms absorb energy, electrons are excited to higher energy levels. When they return
to lower levels, they emit photons:

$$
\Delta E = E_{\text{higher}} - E_{\text{lower}} = hf = \frac{hc}{\lambda}
$$

**Balmer series** (transitions to $n = 2$): visible light.

**Lyman series** (transitions to $n = 1$): ultraviolet.

**Paschen series** (transitions to $n = 3$): infrared.

**Example (HL):** Find the wavelength of the photon emitted when an electron in hydrogen drops from
$n = 4$ to $n = 2$.

$$
\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{16}\right) = 13.6 \times \frac{3}{16} = 2.55\text{ eV}
$$

$$
\lambda = \frac{hc}{\Delta E} = \frac{1240\text{ eV nm}}{2.55\text{ eV}} = 486\text{ nm}
$$

This is the blue-green line in the Balmer series.

## Periodic Trends (OL/HL)

### Atomic Radius

Decreases across a period (increasing nuclear charge pulls electrons closer). Increases down a group
(additional shells).

### Ionisation Energy (OL/HL)

The energy required to remove the outermost electron from a gaseous atom.

**Trends:**

- Increases across a period (stronger nuclear attraction).
- Decreases down a group (outer electrons are further from the nucleus and shielded).

**Anomalies:** Between groups 2 and 13 (e.g., Mg to Al) and groups 15 and 16 (e.g., P to S), there
are slight dips because the $s$-subshell is full and the new electron enters a higher energy
$p$-subshell, or because pairing begins.

**Example (OL):** Explain why the first ionisation energy of aluminium is lower than that of
magnesium.

Magnesium has the electron configuration $[\text{Ne}]\,3s^2$ -- a filled $3s$ subshell. Aluminium
has $[\text{Ne}]\,3s^2 3p^1$. The $3p$ electron in aluminium is at a higher energy level and is
shielded by the $3s$ electrons, so it is easier to remove.

### Electronegativity (OL/HL)

The ability of an atom to attract bonding electrons.

- Increases across a period.
- Decreases down a group.

Fluorine is the most electronegative element (3.98 on the Pauling scale).

## Mass Spectrometry (HL)

### Principle

Atoms/molecules are ionised and then separated by their mass-to-charge ratio ($m/z$).

### Steps

1. **Vaporisation:** sample is vaporised.
2. **Ionisation:** atoms are ionised (electron impact or electrospray).
3. **Acceleration:** ions are accelerated by an electric field.
4. **Deflection:** ions are deflected by a magnetic field (lighter ions are deflected more).
5. **Detection:** ions hit a detector, producing a signal.

### Interpreting Mass Spectra

The peak at the highest $m/z$ value corresponds to the molecular ion ($M^+$). Other peaks represent
fragments.

## Common Pitfalls

1. **Confusing mass number with atomic number** -- mass number includes neutrons.
2. **Electron configuration** -- 4s fills before 3d but loses electrons before 3d when forming ions.
3. **Ionisation energy anomalies** -- explain using subshell stability (filled/half-filled).
4. **Relative atomic mass** -- use percentage abundances, not numbers of atoms.
5. **Orbital diagrams** -- apply Hund's rule correctly.

## Practice Questions

### Ordinary Level

1. Describe the structure of an atom, naming the three subatomic particles and their properties.
2. Write the electron configuration for potassium ($Z = 19$).
3. Calculate the relative atomic mass of neon from its isotopes: ${}^{20}\text{Ne}$ (90.5%) and
   ${}^{22}\text{Ne}$ (9.5%).
4. State the trends in atomic radius and ionisation energy across a period.

### Higher Level

1. Write the full electron configuration and orbital diagram for chromium ($Z = 24$). (Hint:
   chromium is an exception.)
2. Explain why the first ionisation energy of sulfur is lower than that of phosphorus.
3. A photon of wavelength $97.2\text{ nm}$ is emitted from a hydrogen atom. Identify the transition
   involved.
4. The relative atomic mass of boron is 10.81. If boron has two isotopes, ${}^{10}\text{B}$ and
   ${}^{11}\text{B}$, calculate their percentage abundances.
