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

**Example (OL):** Carbon has two common isotopes: ${}^{12}_6\mathrm{C}$ (98.9%) and
${}^{13}_6\mathrm{C}$ (1.1%).

### Relative Atomic Mass (OL/HL)

$$
A_r = \frac{\sum(\text{isotope abundance} \times \text{isotope mass})}{100}
$$

**Example (OL):** Chlorine has two isotopes: ${}^{35}\mathrm{Cl}$ (75%) and ${}^{37}\mathrm{Cl}$ (25%).

$$
A_r = \frac{75 \times 35 + 25 \times 37}{100} = \frac{2625 + 925}{100} = 35.5
$$

**Worked Example 1 (HL):** The relative atomic mass of boron is 10.81. If boron has two isotopes,
${}^{10}\mathrm{B}$ and ${}^{11}\mathrm{B}$, calculate their percentage abundances.

Let $x$ = percentage of ${}^{10}\mathrm{B}$ and $(100 - x)$ = percentage of ${}^{11}\mathrm{B}$.

$$10x + 11(100 - x) = 10.81 \times 100$$

$$10x + 1100 - 11x = 1081$$

$$-x = -19 \implies x = 19\%$$

${}^{10}\mathrm{B} = 19\%$, ${}^{11}\mathrm{B} = 81\%$.

**Worked Example 2 (OL):** Calculate the relative atomic mass of neon from its isotopes:
${}^{20}\mathrm{Ne}$ (90.5%) and ${}^{22}\mathrm{Ne}$ (9.5%).

$$A_r = \frac{90.5 \times 20 + 9.5 \times 22}{100} = \frac{1810 + 209}{100} = \frac{2019}{100} = 20.19$$

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

**Derivation:** Each shell can hold a maximum of $2n^2$ electrons because there are $n^2$ orbitals
in shell $n$ and each orbital holds 2 electrons.

### Electron Configuration (OL/HL)

Write the number of electrons in each shell from the nucleus outward.

**Example (OL):** Sodium ($Z = 11$): 2, 8, 1.

**Example (OL):** Calcium ($Z = 20$): 2, 8, 8, 2.

**Worked Example 3 (OL):** Write the electron configuration for potassium ($Z = 19$).

Potassium has 19 electrons. Filling shells: K (2), L (8), M (8), N (1). Configuration: 2, 8, 8, 1.

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

**Example (HL):** Iron ($Z = 26$): $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$ or $[\mathrm{Ar}]\,4s^2 3d^6$.

**Worked Example 4 (HL):** Write the full electron configuration and orbital diagram for chromium
($Z = 24$). (Hint: chromium is an exception.)

Expected: $[\mathrm{Ar}]\,4s^2 3d^4$. However, chromium is an exception: $[\mathrm{Ar}]\,4s^1 3d^5$.

This is because a half-filled $d$ subshell ($3d^5$) is more stable than a partially filled one
($3d^4$). Similarly, copper ($Z = 29$) is $[\mathrm{Ar}]\,4s^1 3d^{10}$ rather than
$[\mathrm{Ar}]\,4s^2 3d^9$.

### Hund's Rule (HL)

When filling degenerate orbitals (same energy), electrons occupy separate orbitals with parallel
spins before pairing.

**Example:** The $2p$ subshell of nitrogen ($Z = 7$):

$$\underset{\uparrow}{\boxed{2p_x}} \quad \underset{\uparrow}{\boxed{2p_y}} \quad \underset{\uparrow}{\boxed{2p_z}}$$

Three unpaired electrons with parallel spins.

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

**Worked Example 5 (HL):** List all possible quantum numbers for a $3p$ electron.

$n = 3$, $\ell = 1$ (p subshell), $m_\ell = -1, 0, +1$, $m_s = +\frac{1}{2}$ or $-\frac{1}{2}$.

There are 6 possible combinations: 3 orbitals $\times$ 2 spins = 6 electrons (matches the maximum
for the $p$ subshell).

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

**Derivation of the energy levels of hydrogen:**

The energy of an electron in the $n$th level of hydrogen is:

$$E_n = -\frac{13.6}{n^2} \text{ eV}$$

This is derived from the Bohr model, which postulates that the angular momentum of the electron is
quantised: $mvr = n\hbar$. Solving for the allowed radii and energies gives the above formula.

**Example (HL):** Find the wavelength of the photon emitted when an electron in hydrogen drops from
$n = 4$ to $n = 2$.

$$
\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{16}\right) = 13.6 \times \frac{3}{16} = 2.55\text{ eV}
$$

$$
\lambda = \frac{hc}{\Delta E} = \frac{1240\text{ eV nm}}{2.55\text{ eV}} = 486\text{ nm}
$$

This is the blue-green line in the Balmer series.

**Worked Example 6 (HL):** A photon of wavelength $97.2\text{ nm}$ is emitted from a hydrogen atom.
Identify the transition involved.

$$\Delta E = \frac{1240}{97.2} = 12.76 \text{ eV}$$

$$12.76 = 13.6\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

This is a large energy, suggesting a transition to $n = 1$ (Lyman series):

$$12.76 = 13.6\left(1 - \frac{1}{n_i^2}\right)$$

$$\frac{12.76}{13.6} = 1 - \frac{1}{n_i^2}$$

$$\frac{1}{n_i^2} = 1 - 0.938 = 0.062$$

$$n_i^2 = 16.1 \implies n_i = 4$$

Transition: $n = 4 \to n = 1$ (Lyman series).

## Periodic Trends (OL/HL)

### Atomic Radius

Decreases across a period (increasing nuclear charge pulls electrons closer). Increases down a group
(additional shells).

**Worked Example 7 (OL):** Arrange the following in order of increasing atomic radius: $\mathrm{Na}$,
$\mathrm{Mg}$, $\mathrm{Al}$, $\mathrm{K}$.

$\mathrm{Al} < \mathrm{Mg} < \mathrm{Na} < \mathrm{K}$.

$\mathrm{Na}$, $\mathrm{Mg}$, and $\mathrm{Al}$ are in period 3: radius decreases from left to right.
$\mathrm{K}$ is in period 4 (below $\mathrm{Na}$) and has a much larger radius.

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

Magnesium has the electron configuration $[\mathrm{Ne}]\,3s^2$ -- a filled $3s$ subshell. Aluminium
has $[\mathrm{Ne}]\,3s^2 3p^1$. The $3p$ electron in aluminium is at a higher energy level and is
shielded by the $3s$ electrons, so it is easier to remove.

**Worked Example 8 (HL):** Explain why the first ionisation energy of sulfur is lower than that of
phosphorus.

Phosphorus: $[\mathrm{Ne}]\,3s^2 3p^3$ -- each $3p$ orbital has one electron (half-filled subshell,
stable). Sulfur: $[\mathrm{Ne}]\,3s^2 3p^4$ -- one $3p$ orbital has two electrons. The pairing energy
in sulfur's $3p^4$ configuration makes the fourth electron slightly easier to remove than
phosphorus's third $3p$ electron.

### Electronegativity (OL/HL)

The ability of an atom to attract bonding electrons.

- Increases across a period.
- Decreases down a group.

Fluorine is the most electronegative element (3.98 on the Pauling scale).

### Summary of Periodic Trends

| Property                | Across a period            | Down a group |
| ----------------------- | -------------------------- | ------------ |
| Atomic radius           | Decreases                  | Increases    |
| First ionisation energy | Increases (with anomalies) | Decreases    |
| Electronegativity       | Increases                  | Decreases    |
| Metallic character      | Decreases                  | Increases    |
| Melting point (metals)  | Increases                  | Decreases    |

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

### Isotope Abundance from Mass Spectra

**Worked Example 9 (HL):** The mass spectrum of an element shows peaks at $m/z = 52$ (83%) and
$m/z = 54$ (17%). Calculate the relative atomic mass.

$$A_r = \frac{83 \times 52 + 17 \times 54}{100} = \frac{4316 + 918}{100} = \frac{5234}{100} = 52.34$$

This element is chromium.

---

## Common Pitfalls

1. **Confusing mass number with atomic number** -- mass number includes neutrons.
2. **Electron configuration** -- 4s fills before 3d but loses electrons before 3d when forming ions.
3. **Ionisation energy anomalies** -- explain using subshell stability (filled/half-filled).
4. **Relative atomic mass** -- use percentage abundances, not numbers of atoms.
5. **Orbital diagrams** -- apply Hund's rule correctly.

6. **Transition metal electron configurations** -- remember the exceptions: Cr is
   $[\mathrm{Ar}]\,4s^1 3d^5$ and Cu is $[\mathrm{Ar}]\,4s^1 3d^{10}$.
7. **Ion formation** -- when a transition metal forms an ion, the $4s$ electrons are lost BEFORE the
   $3d$ electrons, even though $4s$ fills first.
8. **Spectral lines** -- emission spectra have dark background with bright lines; absorption spectra
   have bright background with dark lines.

---

## Practice Questions

### Ordinary Level

1. Describe the structure of an atom, naming the three subatomic particles and their properties.
2. Write the electron configuration for potassium ($Z = 19$).
3. Calculate the relative atomic mass of neon from its isotopes: ${}^{20}\mathrm{Ne}$ (90.5%) and
   ${}^{22}\mathrm{Ne}$ (9.5%).
4. State the trends in atomic radius and ionisation energy across a period.

### Higher Level

1. Write the full electron configuration and orbital diagram for chromium ($Z = 24$). (Hint:
   chromium is an exception.)
2. Explain why the first ionisation energy of sulfur is lower than that of phosphorus.
3. A photon of wavelength $97.2\text{ nm}$ is emitted from a hydrogen atom. Identify the transition
   involved.
4. The relative atomic mass of boron is 10.81. If boron has two isotopes, ${}^{10}\mathrm{B}$ and
   ${}^{11}\mathrm{B}$, calculate their percentage abundances.

### Extended Questions

5. Explain why the first ionisation energy of neon is much higher than that of sodium.
6. Write the electron configuration of $\mathrm{Fe}^{2+}$ and $\mathrm{Fe}^{3+}$, explaining why
   $\mathrm{Fe}^{3+}$ is more stable.
7. Calculate the energy of a photon with wavelength $121.6\text{ nm}$ and identify the hydrogen
   transition that produces it.
8. Explain why the second ionisation energy of sodium ($4562 \text{ kJ/mol}$) is much higher than
   the first ($496 \text{ kJ/mol}$).
9. The mass spectrum of silicon shows three peaks at $m/z = 28$, 29, 30 with relative abundances
   92.2%, 4.7%, and 3.1%. Calculate the relative atomic mass of silicon.
10. Explain the significance of the line spectrum of hydrogen in the development of atomic theory,
    referencing the Bohr model.

---

## Successive Ionisation Energies

Successive ionisation energies provide evidence for electron shell structure. When all electrons in
a shell have been removed, the next ionisation energy increases significantly.

### Evidence for Shell Structure

For sodium ($Z = 11$):

| Ionisation | Energy (kJ/mol) | Jump?      |
| ---------- | --------------- | ---------- |
| 1st        | 496             | --         |
| 2nd        | 4562            | --         |
| 3rd        | 6912            | --         |
| 4th        | 9544            | --         |
| 5th        | 13354           | --         |
| 6th        | 16610           | --         |
| 7th        | 20117           | --         |
| 8th        | 25496           | --         |
| 9th        | 28932           | --         |
| 10th       | 141362          | Large jump |
| 11th       | 159076          | --         |

The large jump between the 9th and 10th ionisation energies indicates that the 10th electron is
being removed from an inner shell (closer to the nucleus, less shielded). This confirms the electron
configuration 2, 8, 1.

### Using Successive Ionisation Energies to Identify Elements

**Worked Example 10 (HL):** The successive ionisation energies of an element are:

$738, 1451, 7733, 10540 \text{ kJ/mol}$

Identify the element and explain your reasoning.

The large jump between the 2nd and 3rd ionisation energies indicates that the first two electrons
are in the outer shell and the third is in an inner shell. The element has 2 valence electrons,
which corresponds to Group 2. The low values ($738, 1451$) are consistent with magnesium ($Z = 12$,
electron configuration $2, 8, 2$).

---

## Wave-Particle Duality of Electrons (HL)

### De Broglie Wavelength

Louis de Broglie proposed that all matter has wave properties:

$$\lambda = \frac{h}{mv} = \frac{h}{p}$$

where $h$ is Planck's constant, $m$ is mass, and $v$ is velocity.

For an electron in an orbital, the standing wave condition requires that an integer number of
wavelengths fit around the orbit: $n\lambda = 2\pi r$.

This explains why only certain energy levels are allowed: only orbits that satisfy the standing wave
condition are stable.

### Heisenberg Uncertainty Principle

$$\Delta x \cdot \Delta p \geq \frac{h}{4\pi}$$

It is impossible to simultaneously know both the exact position and exact momentum of an electron.
This is why we use probability distributions (orbitals) rather than fixed orbits to describe
electron positions.

---

## Quantum Mechanical Model (HL)

### Orbitals as Probability Distributions

An orbital is a region of space where there is a high probability (typically 90%) of finding an
electron. Each orbital is described by a wave function $\psi$, and $|\psi|^2$ gives the probability
density.

### Shapes of Orbitals

- **s orbitals:** Spherical. All $s$ orbitals are spherical but increase in size with $n$.
- **p orbitals:** Dumbbell-shaped. Three orientations: $p_x$, $p_y$, $p_z$.
- **d orbitals:** Clover-shaped (five orientations).

### Radial Distribution Functions

The radial distribution function shows the probability of finding an electron at a given distance
from the nucleus. For the $1s$ orbital, the most probable distance equals the Bohr radius
($a_0 = 52.9 \text{ pm}$). For the $2s$ orbital, there is a node (zero probability) at a certain
distance.

---

## Electron Configuration of Ions (HL)

### Transition Metal Ions

When transition metals form ions, the $4s$ electrons are removed before the $3d$ electrons.

**Example:** $\mathrm{Fe}$: $[\mathrm{Ar}]\,4s^2 3d^6$

$\mathrm{Fe}^{2+}$: $[\mathrm{Ar}]\,3d^6$ (two $4s$ electrons removed)

$\mathrm{Fe}^{3+}$: $[\mathrm{Ar}]\,3d^5$ (three electrons removed: two from $4s$, one from $3d$)

Note: $\mathrm{Fe}^{3+}$ has a half-filled $3d$ subshell, making it particularly stable.

### Common Ion Configurations

| Ion              | Electron configuration            |
| ---------------- | --------------------------------- |
| $\mathrm{Na}^+$    | $[\mathrm{Ne}]$ or $1s^2 2s^2 2p^6$ |
| $\mathrm{Ca}^{2+}$ | $[\mathrm{Ar}]$                     |
| $\mathrm{O}^{2-}$  | $[\mathrm{Ne}]$                     |
| $\mathrm{Cl}^-$    | $[\mathrm{Ar}]$                     |
| $\mathrm{Cu}^+$    | $[\mathrm{Ar}]\,3d^{10}$            |
| $\mathrm{Zn}^{2+}$ | $[\mathrm{Ar}]\,3d^{10}$            |

### Isoelectronic Series

Ions with the same number of electrons are isoelectronic.

**Example:** $\mathrm{O}^{2-}$, $\mathrm{F}^-$, $\mathrm{Ne}$, $\mathrm{Na}^+$, $\mathrm{Mg}^{2+}$ all have 10
electrons ($[\mathrm{Ne}]$ configuration).

**Trend in ionic radius:** For isoelectronic ions, the radius decreases as nuclear charge increases:

$$\mathrm{O}^{2-} > \mathrm{F}^-> \mathrm{Ne} > \mathrm{Na}^+ > \mathrm{Mg}^{2+}$$

---

## The Periodic Table in Detail

### Blocks of the Periodic Table

| Block   | Subshell being filled | Groups                 | Examples                              |
| ------- | --------------------- | ---------------------- | ------------------------------------- |
| s-block | $s$                   | 1, 2                   | $\mathrm{Na}$, $\mathrm{Mg}$              |
| p-block | $p$                   | 13-18                  | $\mathrm{Al}$, $\mathrm{Cl}$, $\mathrm{Ar}$ |
| d-block | $d$                   | 3-12                   | $\mathrm{Fe}$, $\mathrm{Cu}$              |
| f-block | $f$                   | Lanthanides, Actinides | $\mathrm{U}$, $\mathrm{Ce}$               |

### Periodic Trends in Detail: Atomic Radius

**Across a period:** Nuclear charge increases by one proton per element, but shielding increases
only slightly (electrons in the same shell do not shield effectively). The effective nuclear charge
($Z_{\mathrm{eff}}$) increases, pulling electrons closer.

**Down a group:** Each new shell is further from the nucleus. Although $Z$ increases, the additional
inner shells provide significant shielding, so the outer electrons are less tightly held.

### Periodic Trends in Detail: Ionisation Energy

The first ionisation energy increases across a period with two notable dips:

1. **Group 2 to 13 (e.g., Be to B):** The $2s$ subshell is full in Be. The new electron in B enters
   the $2p$ subshell, which is higher in energy and more shielded, making it easier to remove.

2. **Group 15 to 16 (e.g., N to O):** N has a half-filled $2p^3$ configuration (stable). In O, the
   fourth $2p$ electron pairs with another, introducing electron-electron repulsion that makes it
   easier to remove.

### Comparison of Group 1 and Group 17 Properties

| Property          | Group 1 (Alkali metals)     | Group 17 (Halogens)         |
| ----------------- | --------------------------- | --------------------------- |
| Atomic radius     | Large, increases down group | Small, increases down group |
| First IE          | Low, decreases down group   | High, decreases down group  |
| Reactivity        | Increases down group        | Decreases down group        |
| Electronegativity | Low                         | High                        |
| Type of element   | Metal                       | Non-metal                   |
| Bonding           | Metallic/ionic              | Covalent                    |
| Typical ion       | $+1$                        | $-1$                        |

---

## Advanced: Effective Nuclear Charge (HL)

The effective nuclear charge ($Z_{\mathrm{eff}}$) experienced by an electron is:

$$Z_{\mathrm{eff}} = Z - S$$

where $Z$ is the actual nuclear charge and $S$ is the shielding constant (Slater's rules).

**Slater's Rules (simplified):**

1. Electrons in the same group (ns, np) shield each other by 0.35 (except 1s, which shields by
   0.30).
2. Electrons in the (n-1) shell shield by 0.85.
3. Electrons in lower shells shield by 1.00.

**Worked Example 11 (HL):** Calculate $Z_{\mathrm{eff}}$ for a $3p$ electron in chlorine.

$\mathrm{Cl}$: $1s^2 2s^2 2p^6 3s^2 3p^5$. $Z = 17$.

For a $3p$ electron:

- Other electrons in the same group ($n = 3$): 7 electrons $\times 0.35 = 2.45$
- Electrons in $n = 2$: 8 electrons $\times 0.85 = 6.80$
- Electrons in $n = 1$: 2 electrons $\times 1.00 = 2.00$

$$S = 2.45 + 6.80 + 2.00 = 11.25$$

$$Z_{\mathrm{eff}} = 17 - 11.25 = 5.75$$

This relatively high $Z_{\mathrm{eff}}$ explains chlorine's high electronegativity and small atomic
radius.

---

## X-ray Spectra and Moseley's Law (HL)

Henry Moseley discovered that the frequency of characteristic X-rays emitted by an element is
related to its atomic number:

$$\sqrt{f} = a(Z - b)$$

where $a$ and $b$ are constants. This established that atomic number (not atomic mass) is the
fundamental property that determines an element's identity, leading to the modern periodic table.

---

## Applications of Atomic Structure

### Lasers

Lasers rely on stimulated emission: an excited electron is stimulated to drop to a lower energy
level by an incoming photon of exactly the right energy, emitting a second photon with the same
wavelength, phase, and direction.

Conditions for laser action:

1. Population inversion (more atoms in excited state than ground state)
2. Metastable state (long-lived excited state)
3. Optical cavity (mirrors to reflect photons back and forth)

### Fluorescence

When atoms or molecules absorb UV light, electrons are excited to higher energy levels. They then
return to lower levels in steps, emitting visible light. This is the principle behind fluorescent
lamps and biological staining.

### Electron Microscopy

Electron microscopes use beams of electrons (which have much shorter wavelengths than visible light)
to achieve much higher resolution than optical microscopes. Transmission electron microscopy (TEM)
and scanning electron microscopy (SEM) are two common types.

---

## Summary: Atomic Structure Key Relationships

| Concept                  | Formula/Relationship                  | Key Idea                      |
| ------------------------ | ------------------------------------- | ----------------------------- |
| Bohr model energy        | $E_n = -13.6/n^2 \text{ eV}$          | Quantised energy levels       |
| Photon energy            | $E = hf = hc/\lambda$                 | Emitted/absorbed photons      |
| De Broglie               | $\lambda = h/mv$                      | Wave-particle duality         |
| Heisenberg               | $\Delta x \cdot \Delta p \geq h/4\pi$ | Measurement limits            |
| Effective nuclear charge | $Z_{\mathrm{eff}} = Z - S$              | Shielding effects             |
| Shell capacity           | $2n^2$                                | Maximum electrons per shell   |
| Moseley's law            | $\sqrt{f} = a(Z - b)$                 | Atomic number defines element |

---

## Practice Questions (Extended)

11. The successive ionisation energies of an element are:
    $578, 1817, 2745, 11578, 14842, 18379 \text{ kJ/mol}$. Identify the element and explain the
    pattern.

12. Calculate the de Broglie wavelength of an electron travelling at $2.0 \times 10^6 \text{ m/s}$.
    (Mass of electron $= 9.11 \times 10^{-31} \text{ kg}$, $h = 6.63 \times 10^{-34} \text{ J s}$.)

13. Explain why potassium ($Z = 19$) is placed after argon ($Z = 18$) in the periodic table, despite
    argon having a filled $3p$ subshell and potassium having an electron in the $4s$ subshell.

14. Calculate $Z_{\mathrm{eff}}$ for a valence electron in sodium and in potassium. Use your results
    to explain why potassium is more reactive than sodium.

15. The first four ionisation energies of an element X are: $1090, 2350, 4620, 6220 \text{ kJ/mol}$.
    To which group does X belong? Explain your reasoning.

16. Draw the shape of a $2p_z$ orbital and a $3d_{xy}$ orbital, labelling the axes.

17. Explain the difference between a continuous spectrum and a line spectrum. Why do hot gases
    produce line spectra but hot solids produce continuous spectra?

18. Calculate the wavelength of light emitted when an electron in a hydrogen atom transitions from
    $n = 5$ to $n = 2$. In which spectral series does this line appear?

---

## History of Atomic Theory

### Key Developments

| Scientist   | Contribution                                                      | Date |
| ----------- | ----------------------------------------------------------------- | ---- |
| Dalton      | Atomic theory: all matter is made of atoms                        | 1808 |
| Thomson     | Discovered the electron (cathode ray experiments)                 | 1897 |
| Rutherford  | Nuclear model: gold foil experiment showed dense positive nucleus | 1911 |
| Bohr        | Quantised energy levels for hydrogen                              | 1913 |
| de Broglie  | Wave-particle duality                                             | 1924 |
| Heisenberg  | Uncertainty principle                                             | 1927 |
| Schrodinger | Wave equation for electrons                                       | 1926 |

### Rutherford's Gold Foil Experiment

Most alpha particles passed straight through the gold foil, but a few were deflected at large angles
and some bounced back. This led to the conclusion that:

1. Most of the atom is empty space (most particles pass through)
2. The nucleus is very small, dense, and positively charged (few particles deflected)
3. Electrons orbit the nucleus (to account for the overall neutral atom)

### Thomson's Plum Pudding Model

Before Rutherford, Thomson proposed that the atom was a sphere of positive charge with electrons
embedded in it (like plums in a pudding). The gold foil experiment disproved this model because the
large-angle deflections could not be explained by a diffuse positive charge.

### Limitations of the Bohr Model

The Bohr model successfully explained the hydrogen spectrum but failed for multi-electron atoms
because:

1. It treats electrons as particles in fixed orbits, not as standing waves
2. It cannot explain the fine structure of spectral lines (splitting due to spin-orbit coupling)
3. It violates the Heisenberg uncertainty principle (specifying both orbit radius and momentum)

The quantum mechanical model (Schrodinger equation) overcomes these limitations by describing
electrons as probability waves.
