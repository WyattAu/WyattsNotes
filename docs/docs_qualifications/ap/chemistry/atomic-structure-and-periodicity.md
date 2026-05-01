---
title: Atomic Structure and Periodicity
description:
  Atomic Structure and Periodicity — Atomic Theory and Structure (CED Unit 1);
  Key Historical Developments; Derivation: Rutherford Scattering and the
  Nucleus.
date: 2026-04-14
tags:
  - Chemistry
  - AP
categories:
  - Chemistry
slug: atomic-structure-and-periodicity
---

## Atomic Theory and Structure (CED Unit 1)

### Key Historical Developments

| Scientist   | Contribution                                                         |
| ----------- | -------------------------------------------------------------------- |
| Dalton      | Atomic theory: all matter composed of indivisible atoms              |
| Thomson     | Cathode ray experiment; discovered the electron (plum pudding model) |
| Rutherford  | Gold foil experiment; discovered the nucleus                         |
| Bohr        | Quantized energy levels for hydrogen                                 |
| de Broglie  | Wave-particle duality: $\lambda = \frac{h}{mv}$                      |
| Heisenberg  | Uncertainty principle: $\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$  |
| Schrodinger | Wave equation for the electron (quantum mechanical model)            |

Each model was superseded because it failed to explain new experimental observations. Dalton could
not explain cathode rays. Thomson could not explain the gold foil experiment. Rutherford's model was
unstable by classical electrodynamics. Bohr's model only worked for hydrogen. The Schrodinger
equation provides the complete quantum mechanical description, predicting probability distributions
for electrons rather than definite orbits.

### Derivation: Rutherford Scattering and the Nucleus

In Rutherford's gold foil experiment, alpha particles were fired at a thin gold foil. Most passed
straight through (the atom is mostly empty space), but some were deflected at large angles. A few
even bounced back. The large-angle scattering can only be explained if all the positive charge and
most of the mass are concentrated in a tiny, dense nucleus.

Rutherford derived that the closest approach distance $d$ for a head-on collision is:

$$d = \frac{k \cdot Z_1 Z_2 e^2}{K}$$

where $K$ is the kinetic energy of the alpha particle. For $5.5 \mathrm{ MeV}$ alpha particles on
gold, $d \approx 3 \times 10^{-14} \mathrm{ m}$, which is much smaller than the atomic radius of
about $10^{-10} \mathrm{ m}$. This confirms that the nucleus is extremely small compared to the
atom.

### Subatomic Particles

| Particle | Mass (amu) | Charge | Location        |
| -------- | ---------- | ------ | --------------- |
| Proton   | 1.0073     | +1     | Nucleus         |
| Neutron  | 1.0087     | 0      | Nucleus         |
| Electron | 0.000549   | -1     | Outside nucleus |

The nucleus contains over 99.9% of the atom's mass but occupies only about $10^{-12}$ of its volume.
The electron cloud defines the size of the atom, with a typical radius of about
$1 \mathrm{
\AA} = 10^{-10} \mathrm{ m}$.

### Isotopes and Average Atomic Mass

Isotopes are atoms of the same element with different numbers of neutrons. The average atomic mass
shown on the periodic table is the weighted average of all naturally occurring isotopes:

$$\mathrm{Average atomic mass} = \sum f_i \cdot m_i$$

where $f_i$ is the fractional abundance and $m_i$ is the mass of isotope $i$.

**Worked Example.** Chlorine has two isotopes: Cl-35 (75.77%, 34.969 amu) and Cl-37 (24.23%, 36.966
amu). Calculate the average atomic mass.

$$\mathrm{Average} = 0.7577 \times 34.969 + 0.2423 \times 36.966 = 26.496 + 8.958 = 35.454 \mathrm{ amu}$$

This matches the value on the periodic table (35.45).

## Quantum Numbers (CED Unit 1)

Each electron in an atom is described by four quantum numbers, which together specify the electron's
wave function (orbital) and spin state.

### Principal Quantum Number ($n$)

- Describes the **energy level** and average distance from the nucleus.
- Values: $n = 1, 2, 3, \ldots$
- Maximum electrons in level $n$: $2n^2$
- Higher $n$ means higher energy and larger average radius.

### Angular Momentum Quantum Number ($\ell$)

- Describes the **shape** of the orbital.
- Values: $\ell = 0, 1, 2, \ldots, n-1$
- Letters: $\ell = 0$ (s), $1$ (p), $2$ (d), $3$ (f)
- Each value of $\ell$ corresponds to a subshell.

### Magnetic Quantum Number ($m_\ell$)

- Describes the **orientation** of the orbital in space.
- Values: $m_\ell = -\ell, -\ell+1, \ldots, 0, \ldots, \ell-1, \ell$
- Total values: $2\ell + 1$ (the number of orbitals in the subshell)

### Spin Quantum Number ($m_s$)

- Describes the **spin** of the electron.
- Values: $m_s = +\frac{1}{2}$ or $m_s = -\frac{1}{2}$
- Spin is an intrinsic property; it is not orbital motion.

### Example: Quantum Numbers for $3d$ Electrons

For $n = 3$, $\ell = 2$ (d orbital):

$m_\ell \in \{-2, -1, 0, 1, 2\}$ (5 orbitals, 10 electrons maximum)

Each electron also has $m_s = \pm\frac{1}{2}$.

### Constraints

The Pauli exclusion principle limits how many electrons can share the same quantum numbers: no two
electrons in an atom can have the same set of four quantum numbers. Since an orbital is defined by
$n$, $\ell$, and $m_\ell$, it can hold at most two electrons (differing in $m_s$).

### Example: Valid vs. Invalid Quantum Number Sets

For $n = 2$:

- $(2, 0, 0, +\frac{1}{2})$: valid (2s orbital, spin up)
- $(2, 1, -1, -\frac{1}{2})$: valid (2p orbital, spin down)
- $(2, 2, 0, +\frac{1}{2})$: invalid ($\ell$ cannot equal $n$)
- $(2, 1, 2, +\frac{1}{2})$: invalid ($m_\ell$ cannot exceed $\ell$)

**Worked Example.** List all possible sets of quantum numbers for the electrons in a 2p subshell.

For $n = 2$, $\ell = 1$, $m_\ell = -1, 0, +1$, and $m_s = \pm\frac{1}{2}$:

$(2, 1, -1, +1/2)$, $(2, 1, -1, -1/2)$, $(2, 1, 0, +1/2)$, $(2, 1, 0, -1/2)$, $(2, 1, 1, +1/2)$,
$(2, 1, 1, -1/2)$.

Six sets, corresponding to 6 electrons in the 2p subshell.

## Electron Configurations

### Aufbau Principle

Electrons fill orbitals from lowest to highest energy. The order is:

$$
1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s \lt 4f \lt 5d \lt 6p
$$

The apparent anomaly ($4s$ before $3d$) arises because the 4s orbital has lower energy when empty,
but once electrons occupy the 3d subshell, the energy levels shift and 3d drops below 4s. This has
important consequences for the formation of transition metal ions.

### Derivation: Why 4s Fills Before 3d

The energy of an orbital depends on both the principal quantum number $n$ and the penetration
effect. The 4s orbital has greater penetration to the nucleus than the 3d orbital (because s
orbitals have no angular momentum, so they spend more time near the nucleus). This greater
penetration lowers the energy of 4s below that of 3d when both are empty. However, once 3d electrons
are present, they shield the 4s electrons effectively, causing the 4s energy to rise above 3d.

### Pauli Exclusion Principle

No two electrons in an atom can have the same set of four quantum numbers. Each orbital holds at
most two electrons with opposite spins.

### Hund's Rule

Electrons occupy degenerate orbitals singly first, with parallel spins, before pairing up. This
minimises electron-electron repulsion and maximises total spin, which is energetically favourable.

### Writing Electron Configurations

**Notation types:**

- Full: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^6$
- Noble gas core: $[\mathrm{Ar}]\,4s^2 3d^{10} 4p^6$
- Orbital diagram: boxes with up/down arrows

### Exceptions to Aufbau

**Chromium ($Z = 24$):** $[\mathrm{Ar}]\,4s^1 3d^5$ (half-filled d subshell is more stable)

**Copper ($Z = 29$):** $[\mathrm{Ar}]\,4s^1 3d^{10}$ (fully filled d subshell is more stable)

Similar exceptions occur for Mo ($4d^5$) and $\mathrm{Ag}$ ($4d^{10}$).

The stability of half-filled and fully filled d subshells arises from exchange energy: electrons
with parallel spins in different orbitals are slightly lower in energy than paired electrons. A
half-filled ($d^5$) or fully filled ($d^{10}$) subshell maximises this exchange energy.

:::info[Example]

Write the electron configuration for Fe ($Z = 26$).

$$
\mathrm{Fe}: [\mathrm{Ar}]\,4s^2 3d^6
$$

Orbital diagram for $3d^6$:

$$
\begin{array}{ccccc}
\uparrow\downarrow & \uparrow\downarrow & \uparrow\downarrow & \uparrow & \uparrow \\
m_\ell = -2 & -1 & 0 & 1 & 2
\end{array}
$$

The 4s electrons fill first but are written after 3d by convention.

:::

### Electron Configuration of Ions

When forming cations, **remove $4s$ electrons before $3d$ electrons**, even though $4s$ fills first.
This is because once the 3d subshell is occupied, its energy drops below that of 4s.

**Example:** $\mathrm{Fe}^{2+}$: $[\mathrm{Ar}]\,3d^6$ (remove the two 4s electrons)

**Example:** $\mathrm{Fe}^{3+}$: $[\mathrm{Ar}]\,3d^5$ (remove two 4s and one 3d electron)

**Example:** $\mathrm{Cu}^+$: $[\mathrm{Ar}]\,3d^{10}$

**Worked Example.** Write the electron configuration for $\mathrm{Mn}^{2+}$ ($Z = 25$).

Neutral Mn: $[\mathrm{Ar}]\,4s^2 3d^5$. Remove the two 4s electrons first: $\mathrm{Mn}^{2+}$:
$[\mathrm{Ar}]\,3d^5$. Note that $\mathrm{Mn}^{2+}$ has a half-filled d subshell, which is
particularly stable. This explains why Mn$^{2+}$ is a common oxidation state for manganese.

## Electromagnetic Radiation and Atomic Spectra (CED Unit 1)

### Wave-Particle Duality

Light exhibits both wave and particle properties:

$$
E = h\nu = \frac{hc}{\lambda}
$$

where $h = 6.626 \times 10^{-34} \mathrm{ J}\cdot\mathrm{s}$ (Planck's constant),
$c = 3.00 \times 10^8 \mathrm{ m/s}$, $\nu$ is frequency, and $\lambda$ is wavelength.

### The Bohr Model for Hydrogen

The energy levels of hydrogen are:

$$
E_n = -\frac{13.6 \mathrm{ eV}}{n^2} = -\frac{2.18 \times 10^{-18} \mathrm{ J}}{n^2}
$$

The energy is negative because the electron is bound to the nucleus. The ground state ($n = 1$) has
the most negative (lowest) energy. As $n \to \infty$, $E_n \to 0$, which is the ionisation energy.

The radius of the $n$th orbit:

$$
r_n = n^2 a_0 = n^2 \times 0.529 \mathrm{ \AA}
$$

where $a_0$ is the Bohr radius.

### Derivation: Bohr Model Energy Levels

Starting from the quantisation of angular momentum ($L = mvr = n\hbar$) and equating the Coulomb
force with centripetal force:

$$\frac{ke^2}{r^2} = \frac{mv^2}{r}$$

Solving for $r_n$ and substituting into the total energy
$E = KE + PE = \frac{1}{2}mv^2 - \frac{ke^2}{r}$:

$$E_n = -\frac{mk^2e^4}{2n^2\hbar^2} = -\frac{13.6 \mathrm{ eV}}{n^2}$$

This derivation shows that the quantised energy levels arise directly from the quantisation of
angular momentum.

### The Rydberg Equation

The wavelength of light emitted or absorbed during a transition between levels $n_i$ and $n_f$:

$$
\frac{1}{\lambda} = R_H\!\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)
$$

where $R_H = 1.097 \times 10^7 \mathrm{ m}^{-1}$ is the Rydberg constant.

For emission: $n_i \gt n_f$ (photon released).

For absorption: $n_i \lt n_f$ (photon absorbed).

### Spectral Series

| Series  | Transition | Region      |
| ------- | ---------- | ----------- |
| Lyman   | $n_f = 1$  | Ultraviolet |
| Balmer  | $n_f = 2$  | Visible     |
| Paschen | $n_f = 3$  | Infrared    |

The convergence of lines towards the series limit corresponds to transitions from $n = \infty$ to
$n_f$, where the energy difference approaches a maximum value.

:::info[Example]

Calculate the wavelength of light emitted when an electron in hydrogen drops from $n = 4$ to
$n = 2$.

$$
\frac{1}{\lambda} = (1.097 \times 10^7)\!\left(\frac{1}{4} - \frac{1}{16}\right) = (1.097 \times 10^7)(0.1875) = 2.057 \times 10^6 \mathrm{ m}^{-1}
$$

$$
\lambda = \frac{1}{2.057 \times 10^6} = 4.86 \times 10^{-7} \mathrm{ m} = 486 \mathrm{ nm}
$$

This is in the visible region (blue-green), part of the Balmer series.

The energy of the photon:

$$
E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34})(3.00 \times 10^8)}{4.86 \times 10^{-7}} = 4.09 \times 10^{-19} \mathrm{ J} = 2.56 \mathrm{ eV}
$$

:::

### Atomic Spectra as Evidence for Quantized Energy Levels

The observation of discrete lines in atomic emission spectra (rather than a continuous spectrum) is
direct evidence that electrons in atoms can only occupy specific, quantized energy levels. Each line
corresponds to a transition between two specific energy levels.

## Photoelectric Effect

Einstein's explanation: light consists of photons, each with energy $E = h\nu$.

$$
KE_{\mathrm{max}} = h\nu - \phi
$$

where $\phi$ is the work function (minimum energy to eject an electron).

The threshold frequency: $\nu_0 = \frac{\phi}{h}$.

If $\nu \lt \nu_0$, no electrons are emitted regardless of intensity.

The photoelectric effect demonstrates the particle nature of light. Increasing the intensity of
light below the threshold frequency does not eject electrons because no single photon has enough
energy. Above the threshold, increasing intensity increases the number of ejected electrons (because
more photons arrive per unit time) but not their maximum kinetic energy.

### Worked Example: Photoelectric Effect

The work function of sodium is $2.28 \mathrm{ eV}$. Calculate the maximum kinetic energy of
electrons ejected by light of wavelength $400 \mathrm{ nm}$.

$$E = \frac{hc}{\lambda} = \frac{1240 \mathrm{ eV}\cdot\mathrm{nm}}{400 \mathrm{ nm}} = 3.10 \mathrm{ eV}$$

$$KE_{\mathrm{max}} = 3.10 - 2.28 = 0.82 \mathrm{ eV}$$

## Periodic Trends (CED Unit 1)

### Effective Nuclear Charge ($Z_{\mathrm{eff}}$)

$$
Z_{\mathrm{eff}} = Z - S
$$

where $Z$ is the atomic number and $S$ is the shielding constant. $Z_{\mathrm{eff}}$ increases
across a period (less shielding, same number of shells) and stays roughly constant down a group
(more shielding offsets more protons).

The concept of $Z_{\mathrm{eff}}$ is the key to understanding all periodic trends. Across a period,
$Z$ increases by one per element but the shielding increases very little (electrons in the same
shell do not shield each other effectively), so $Z_{\mathrm{eff}}$ increases significantly. Down a
group, $Z$ increases but the additional inner shells provide substantial shielding, so
$Z_{\mathrm{eff}}$ remains approximately constant.

### Key Periodic Trends

| Property           | Across a Period (L to R) | Down a Group        |
| ------------------ | ------------------------ | ------------------- |
| Atomic radius      | Decreases                | Increases           |
| Ionization energy  | Increases                | Decreases           |
| Electron affinity  | Generally increases      | Generally decreases |
| Electronegativity  | Increases                | Decreases           |
| Metallic character | Decreases                | Increases           |

### Ionization Energy

The first ionization energy ($IE_1$) is the energy required to remove the outermost electron from a
gaseous atom:

$$
\mathrm{X}(g) \to \mathrm{X}^+(g) + e^- \quad \Delta H = IE_1
$$

**Exceptions:** $IE_1$ decreases from Group 2 to 13 (s to p; the p electron is higher in energy and
more shielded) and from Group 15 to 16 (half-filled p subshell stability in Group 15; pairing
repulsion in Group 16).

**Successive ionization energies** provide evidence for electron shells. Large jumps in ionization
energy occur when an electron is removed from a new, inner shell (which is closer to the nucleus and
less shielded).

**Worked Example.** The first five ionization energies of an element are 578, 1817, 2745, 11578, and
14842 kJ/mol. Identify the group.

The large jump occurs between the third and fourth ionization energies (2745 to 11578 kJ/mol). This
means the fourth electron is being removed from a new, inner shell. The element has three valence
electrons, so it is in Group 13 (e.g., aluminium).

### Atomic Radius

Covalent radius: half the distance between nuclei of two bonded atoms of the same element.

Metallic radius: half the distance between nuclei of adjacent atoms in a metallic crystal.

### Electronegativity

The ability of an atom to attract bonding electrons. Pauling scale: F (3.98) is the most
electronegative element. Cs (0.79) is the least.

Electronegativity determines bond type. Large electronegativity differences ($\gt 1.7$) lead to
ionic bonding; small differences ($\lt 0.4$) lead to nonpolar covalent bonding.

### Electron Affinity

The energy change when an electron is added to a gaseous atom:

$$
\mathrm{X}(g) + e^- \to \mathrm{X}^-(g) \quad \Delta H = EA
$$

More negative EA = greater attraction for the added electron. Group 17 elements have the most
negative EA (most favourable to add an electron). Group 18 elements have approximately zero EA (the
closed shell provides no energetic incentive to add an electron).

### Ionic Radius

**Cations** are smaller than their parent atoms because removing electrons reduces electron-electron
repulsion, allowing the remaining electrons to be pulled closer to the nucleus.

**Anions** are larger than their parent atoms because adding electrons increases electron-electron
repulsion.

**Isoelectronic series** (same number of electrons): ionic radius decreases with increasing nuclear
charge. For example: $\mathrm{O}^{2-} \gt \mathrm{F}^- \gt \mathrm{Na}^+ \gt \mathrm{Mg}^{2+}$ (all
have 10 electrons, but nuclear charge increases from 8 to 12).

### Worked Example: Isoelectronic Radius Comparison

Arrange in order of increasing ionic radius: $\mathrm{Na}^+$, $\mathrm{Mg}^{2+}$, $\mathrm{F}^-$,
$\mathrm{O}^{2-}$.

All four ions have 10 electrons (isoelectronic with Ne). The nuclear charges are: O (8), F (9), Na
(11), Mg (12). Higher nuclear charge pulls electrons closer, giving a smaller radius.

Order: $\mathrm{Mg}^{2+} \lt \mathrm{Na}^+ \lt \mathrm{F}^- \lt \mathrm{O}^{2-}$.

### Worked Example: Successive Ionization Energies

The first five ionization energies of aluminium ($Z = 13$) are: 578, 1817, 2745, 11578, and 14842
kJ/mol. Explain the pattern.

Al: $[\mathrm{Ne}]\,3s^2 3p^1$. The first three electrons are removed from the n=3 shell (relatively
easy). The large jump between the third (2745) and fourth (11578) IE occurs because the fourth
electron must be removed from the n=2 shell, which is much closer to the nucleus and less shielded.
This confirms aluminium has three valence electrons (Group 13).

### Shielding and Penetration

Electrons in inner shells shield outer electrons from the full nuclear charge. However, not all
subshells shield equally. The penetration order is $s \gt p \gt d \gt f$, meaning s electrons
penetrate closer to the nucleus and experience less shielding than p electrons in the same shell.

This explains why the 4s orbital fills before the 3d orbital: 4s electrons penetrate the core more
effectively than 3d electrons, giving them a lower energy when both subshells are empty.

### Summary Table: Period 3 Trends

| Element            | Na   | Mg   | Al   | Si   | P    | S    | Cl   | Ar   |
| ------------------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Atomic radius (pm) | 186  | 160  | 143  | 117  | 110  | 104  | 99   | --   |
| IE$_1$ (kJ/mol)    | 496  | 738  | 578  | 786  | 1012 | 1000 | 1251 | 1521 |
| Electronegativity  | 0.93 | 1.31 | 1.61 | 1.90 | 2.19 | 2.58 | 3.16 | --   |

Note the dip in IE from Mg to Al (s to p) and from P to S (half-filled stability to pairing
repulsion).

## Magnetic Properties of Atoms and Ions

### Paramagnetism and Diamagnetism

Atoms or ions with unpaired electrons are **paramagnetic** (attracted to a magnetic field). Those
with all electrons paired are **diamagnetic** (weakly repelled by a magnetic field).

| Species   | Unpaired Electrons | Magnetic Behavior |
| --------- | ------------------ | ----------------- |
| Na        | 1                  | Paramagnetic      |
| Mg        | 0                  | Diamagnetic       |
| Fe$^{3+}$ | 5                  | Paramagnetic      |
| Zn$^{2+}$ | 0                  | Diamagnetic       |
| O$_2$     | 2                  | Paramagnetic      |

### Worked Example: Magnetic Properties

Determine the magnetic properties of $\mathrm{Cr}^{3+}$.

$\mathrm{Cr}^{3+}$: $[\mathrm{Ar}]\,3d^3$. Three unpaired electrons in the 3d subshell (one in each
of three orbitals, following Hund's rule). Therefore, $\mathrm{Cr}^{3+}$ is paramagnetic.

### Worked Example: Predicting Magnetic Properties

Predict the magnetic properties of $\mathrm{Zn}^{2+}$ and $\mathrm{Fe}^{3+}$.

$\mathrm{Zn}^{2+}$: $[\mathrm{Ar}]\,3d^{10}$. All 3d orbitals are fully paired. Diamagnetic.

$\mathrm{Fe}^{3+}$: $[\mathrm{Ar}]\,3d^5$. Five unpaired electrons (one in each 3d orbital,
maximising parallel spins by Hund's rule). Paramagnetic, and strongly so because of the five
unpaired electrons.

## The d-Block and Valence Electrons (CED Unit 1)

### Valence Electrons for Transition Metals

For main group elements, valence electrons are those in the outermost s and p subshells. For
transition metals, the valence electrons include the outermost s electrons and the d electrons of
the highest occupied d subshell.

| Element | Configuration                 | Valence Electrons |
| ------- | ----------------------------- | ----------------- |
| Sc      | $[\mathrm{Ar}]\,4s^2 3d^1$    | 3                 |
| Ti      | $[\mathrm{Ar}]\,4s^2 3d^2$    | 4                 |
| Fe      | $[\mathrm{Ar}]\,4s^2 3d^6$    | 8                 |
| Cu      | $[\mathrm{Ar}]\,4s^1 3d^{10}$ | 11                |

### Common Oxidation States of Transition Metals

Transition metals can lose different numbers of electrons, giving multiple oxidation states.

| Element | Common Oxidation States |
| ------- | ----------------------- |
| Mn      | +2, +4, +7              |
| Fe      | +2, +3                  |
| Cu      | +1, +2                  |
| Cr      | +2, +3, +6              |

### Worked Example: Transition Metal Ion Configurations

Write the electron configurations for Fe, $\mathrm{Fe}^{2+}$, and $\mathrm{Fe}^{3+}$. Explain why
$\mathrm{Fe}^{3+}$ is particularly stable.

Fe: $[\mathrm{Ar}]\,4s^2 3d^6$.

$\mathrm{Fe}^{2+}$: $[\mathrm{Ar}]\,3d^6$ (remove 4s electrons).

$\mathrm{Fe}^{3+}$: $[\mathrm{Ar}]\,3d^5$ (remove 4s and one 3d electron).

$\mathrm{Fe}^{3+}$ has a half-filled 3d subshell ($d^5$), which is particularly stable due to
maximum exchange energy (all five electrons have parallel spins). This explains why
$\mathrm{Fe}^{3+}$ is more common and more stable than $\mathrm{Fe}^{2+}$ in many compounds.

### Worked Example: Periodic Trend Prediction

Without consulting a data table, arrange the following in order of increasing first ionization
energy: Na, Al, Cl, Ar.

Na (Group 1) has the lowest IE (one valence electron, far from nucleus, well shielded). Al
(Group 13) is next (s to p dip, lower than Mg). Cl (Group 17) is higher (high $Z_{\mathrm{eff}}$,
nearly full shell). Ar (Group 18) has the highest IE (full shell, very stable configuration).

Order: Na &lt; Al &lt; Cl &lt; Ar.

### Derivation: Ionization Energy Across a Period

The first ionization energy generally increases across a period because $Z_{\mathrm{eff}}$ increases
while the principal quantum number $n$ stays the same. The outermost electron is held more tightly.

The decrease from Group 2 to Group 13 occurs because the Group 13 electron enters a p subshell,
which is higher in energy and more effectively shielded than the s subshell of Group 2.

The decrease from Group 15 to Group 16 occurs because the Group 16 electron pairs with another
electron in the same p orbital, creating electron-electron repulsion (pairing energy) that offsets
the increase in $Z_{\mathrm{eff}}$.

## Summary Table: Periodic Trends Explained

| Trend             | Direction                  | Explanation                                                        |
| ----------------- | -------------------------- | ------------------------------------------------------------------ |
| Atomic radius     | Decreases L to R           | Increasing $Z_{\mathrm{eff}}$ pulls electrons closer               |
| Atomic radius     | Increases top to bottom    | Additional shells outweigh increased nuclear charge                |
| Ionization energy | Increases L to R           | Higher $Z_{\mathrm{eff}}$ makes electrons harder to remove         |
| Ionization energy | Decreases top to bottom    | Outer electrons are further from nucleus and more shielded         |
| Electron affinity | Generally increases L to R | Greater $Z_{\mathrm{eff}}$ increases attraction for added electron |
| Electronegativity | Increases L to R           | Greater $Z_{\mathrm{eff}}$ increases pull on bonding electrons     |
| Electronegativity | Decreases top to bottom    | Greater distance from nucleus reduces pull on bonding electrons    |

## Common Pitfalls

1. **Confusing $n$ and $\ell$.** $n$ is the principal quantum number (energy level), $\ell$ is the
   angular momentum quantum number (subshell shape).
2. **Writing $4s$ before $3d$ in configurations for transition metal cations.** When forming
   cations, remove $4s$ electrons first (even though $4s$ fills before $3d$).
3. **Incorrect quantum numbers.** The valid range of $\ell$ is $0$ to $n-1$, and $m_\ell$ ranges
   from $-\ell$ to $+\ell$.
4. **Confounding atomic radius with ionic radius.** Cations are smaller than their parent atoms;
   anions are larger.
5. **Misremembering the ionization energy exceptions.** Group 13 has lower IE than Group 12 (s to
   p); Group 16 has lower IE than Group 15 (pairing energy).
6. **Forgetting that the Bohr model only works for hydrogen and hydrogen-like ions.** Multi-electron
   atoms require the quantum mechanical model.
7. **Using the wrong sign for energy.** Energy levels are negative (bound states); transitions to
   higher levels require energy input.
8. **Confusing effective nuclear charge with nuclear charge.** $Z_{\mathrm{eff}}$ accounts for
   shielding; it is always less than $Z$.
9. **Assuming ionization energy always increases across a period.** The dips at Group 13 and Group
   16 are important exceptions.
10. **Confusing frequency and wavelength.** $c = \lambda\nu$; frequency and wavelength are inversely
    proportional.
11. **Forgetting to convert wavelength to metres** before using $E = hc/\lambda$.
12. **Assuming paramagnetism means strong attraction.** Paramagnetism is a weak effect compared to
    ferromagnetism.

## Practice Questions

1. Write the ground-state electron configuration and orbital diagram for S ($Z = 16$).

2. What are the four quantum numbers for each electron in the $2p$ subshell of carbon?

3. Calculate the wavelength of a photon emitted when an electron in hydrogen transitions from
   $n = 5$ to $n = 2$. In what spectral series does this belong?

4. Explain why the first ionization energy of oxygen is less than that of nitrogen.

5. Arrange the following in order of increasing atomic radius: $\mathrm{Mg}^{2+}$, $\mathrm{Na}^+$,
   $\mathrm{F}^-$, $\mathrm{O}^{2-}$.

6. The work function of potassium is $2.30 \mathrm{ eV}$. What is the maximum kinetic energy of
   electrons ejected by light of wavelength $400 \mathrm{ nm}$?

7. Write the electron configurations for $\mathrm{Cr}^{3+}$ and $\mathrm{Cu}^+$.

8. Calculate the energy of the $n = 3$ level of hydrogen in joules and electron-volts.

9. Explain why the second ionization energy of sodium is much larger than the first.

10. Which element has the higher electronegativity, and why: P or Cl?

11. For the isoelectronic series $\mathrm{N}^{3-}$, $\mathrm{O}^{2-}$, $\mathrm{F}^-$,
    $\mathrm{Na}^+$, $\mathrm{Mg}^{2+}$, arrange the ions in order of increasing radius and explain
    the trend.

12. Explain, in terms of effective nuclear charge, why atomic radius decreases across a period.

13. Calculate the minimum frequency of light required to eject electrons from a metal surface with a
    work function of $4.5 \times 10^{-19}$ J.

14. Write the electron configuration for arsenic ($Z = 33$) using noble gas core notation, and
    identify the number of unpaired electrons.

15. The first four ionization energies of an element are 738, 1451, 7733, and 10540 kJ/mol. Identify
    the group of the element and explain your reasoning.

16. Calculate the wavelength of light required to ionise a hydrogen atom in the ground state.

17. Explain why the electron affinity of chlorine is more negative than that of fluorine.

18. A photon with energy $10.2 \mathrm{ eV}$ is absorbed by a hydrogen atom in the ground state. To
    what energy level is the electron excited?

19. Write the electron configuration for $\mathrm{Co}^{2+}$ and state the number of unpaired
    electrons.

20. Explain, using the concept of shielding, why the atomic radius increases down Group 2 despite
    increasing nuclear charge.

21. Determine whether each of the following is paramagnetic or diamagnetic: (a) $\mathrm{Zn}^{2+}$
    (b) $\mathrm{Fe}^{2+}$ (c) $\mathrm{O}^{2-}$ (d) Ne.

22. Calculate the frequency and wavelength of light emitted when an electron in hydrogen drops from
    $n = 6$ to $n = 2$. Identify the spectral series.

23. The first three ionization energies of an element are 419, 3052, and 4420 kJ/mol. Identify the
    element and explain your reasoning.

24. Explain why the atomic radius of gallium is nearly the same as that of aluminium, despite
    gallium being in the period below aluminium.

25. Calculate the de Broglie wavelength of an electron travelling at
    $2.0 \times 10^6 \mathrm{ m/s}$. (Electron mass = $9.11 \times 10^{-31}$ kg.)

26. Explain why potassium has a lower first ionization energy than argon, despite having a higher
    nuclear charge.

27. Write the ground-state electron configuration for selenium ($Z = 34$). How many unpaired
    electrons does it have?

28. Calculate the energy difference (in joules) between the $n = 1$ and $n = 2$ energy levels of the
    hydrogen atom.

29. A student writes the electron configuration of Cu as $[\mathrm{Ar}]\,4s^2 3d^9$. Identify the
    error and write the correct configuration.

30. Explain why the atomic radius of Ga (gallium) is similar to that of Al (aluminium), despite Ga
    being in the period below Al.

## Practice Problems

<details>
<summary>Question 1: Electron configuration and periodic properties</summary>

Element X has the electron configuration $[\mathrm{Ar}]4s^2 3d^{10} 4p^3$. Identify the element,
state its period and group, and predict whether its atomic radius is larger or smaller than that of
arsenic. Explain the trend.

</details>

<details>
<summary>Answer</summary>

Element X has 33 electrons: $2 + 8 + 8 + 2 + 10 + 3 = 33$. This is arsenic (As), in period 4 and
group 15.

Arsenic's atomic radius should be compared with itself -- the question asks relative to arsenic.
Since element X IS arsenic, the radii are equal. However, if comparing with neighbours: arsenic is
larger than selenium (Se, to its right) because atomic radius decreases across a period (increasing
effective nuclear charge pulls electrons closer). Arsenic is smaller than germanium (Ge, to its
left) for the same reason in reverse.

The 3d electrons provide poor shielding, causing the 4p electrons to experience a higher effective
nuclear charge than expected. This is why Ga has a similar radius to Al (the d-block contraction).

</details>

<details>
<summary>Question 2: Photoelectric effect and photon energy</summary>

Light with a wavelength of $200 \mathrm{ nm}$ is shone on a metal surface. The work function of the
metal is $4.0 \mathrm{ eV}$. Calculate the kinetic energy of the ejected electrons in joules. If no
electrons are ejected, explain why.

</details>

<details>
<summary>Answer</summary>

Energy of the photon:
$$E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34} \mathrm{ J\cdot s})(3.00 \times 10^8 \mathrm{ m/s})}{200 \times 10^{-9} \mathrm{ m}} = 9.94 \times 10^{-19} \mathrm{ J}$$

Convert to eV: $9.94 \times 10^{-19} / 1.602 \times 10^{-19} = 6.20 \mathrm{ eV}$.

Kinetic energy of ejected electrons:
$$KE = E_{\mathrm{photon}} - \phi = 6.20 \mathrm{ eV} - 4.0 \mathrm{ eV} = 2.20 \mathrm{ eV}$$

In joules: $2.20 \times 1.602 \times 10^{-19} = 3.52 \times 10^{-19} \mathrm{ J}$.

Electrons are ejected because the photon energy ($6.20 \mathrm{ eV}$) exceeds the work function
($4.0 \mathrm{ eV}$).

</details>

<details>
<summary>Question 3: Ionization energy trends and exceptions</summary>

Explain why the first ionization energy of oxygen ($1314 \mathrm{ kJ/mol}$) is lower than that of
nitrogen ($1402 \mathrm{ kJ/mol}$), even though oxygen has a higher nuclear charge. Use electron
configurations in your explanation.

</details>

<details>
<summary>Answer</summary>

Nitrogen has the electron configuration $1s^2 2s^2 2p^3$, with three unpaired electrons in the three
$2p$ orbitals (Hund's rule). Each electron occupies a separate orbital, minimising electron-electron
repulsion.

Oxygen has the configuration $1s^2 2s^2 2p^4$. The fourth $2p$ electron must pair with an existing
electron in one of the $2p$ orbitals. The paired electrons experience additional electron-electron
repulsion, which makes it easier to remove one of them. This repulsion effect outweighs the
increased nuclear charge in oxygen.

This is a general trend: atoms with half-filled or fully-filled subshells (like N with $2p^3$) have
higher ionization energies than their neighbours because these configurations are particularly
stable.

</details>

<details>
<summary>Question 4: Quantum numbers and orbitals</summary>

An electron in a hydrogen atom has the quantum numbers $n = 4$, $l = 2$, $m_l = -1$, $m_s = +1/2$.
Identify the orbital type and the maximum number of electrons that can occupy this subshell. Explain
why $m_l = 4$ is not a valid quantum number for this electron.

</details>

<details>
<summary>Answer</summary>

The quantum number $l = 2$ corresponds to a d orbital. The subshell is $4d$.

The maximum number of electrons in a d subshell is 10 (5 orbitals $\times$ 2 electrons each). The
five orbitals have $m_l$ values of $-2, -1, 0, +1, +2$.

The value $m_l = 4$ is not valid because $m_l$ must be an integer in the range from $-l$ to $+l$.
Since $l = 2$, the valid values are $m_l = -2, -1, 0, +1, +2$. The value 4 exceeds this range.

</details>

<details>
<summary>Question 5: Effective nuclear charge calculation</summary>

Calculate the effective nuclear charge ($Z_{\mathrm{eff}}$) experienced by a valence electron in
potassium ($Z = 19$) using Slater's rules. Compare this with the $Z_{\mathrm{eff}}$ for a valence
electron in sodium ($Z = 11$) and explain the trend in atomic radius.

</details>

<details>
<summary>Answer</summary>

For potassium: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$.

Using Slater's rules for the $4s$ electron:

- Electrons in the same group ($4s$): 0 (no other $4s$ electrons)
- Electrons in the $n-1$ shell ($3s, 3p$): 8 electrons $\times$ 0.85 = 6.80
- Electrons in the $n-2$ or lower shells ($1s, 2s, 2p$): 10 electrons $\times$ 1.00 = 10.00

$Z_{\mathrm{eff}} = Z - S = 19 - (6.80 + 10.00) = 19 - 16.80 = 2.20$.

For sodium: $1s^2 2s^2 2p^6 3s^1$.

For the $3s$ electron:

- Electrons in the $n-1$ shell ($2s, 2p$): 8 electrons $\times$ 0.85 = 6.80
- Electrons in the $n-2$ or lower shells ($1s$): 2 electrons $\times$ 1.00 = 2.00

$Z_{\mathrm{eff}} = 11 - (6.80 + 2.00) = 11 - 8.80 = 2.20$.

Both have similar $Z_{\mathrm{eff}}$ for their valence electron, but potassium has an additional
shell of inner electrons ($n = 3$ vs $n = 2$), making its valence electron farther from the nucleus.
This is why K has a larger atomic radius than Na despite similar $Z_{\mathrm{eff}}$.

</details>
