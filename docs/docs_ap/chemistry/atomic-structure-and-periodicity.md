---
title: Atomic Structure and Periodicity
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

### Subatomic Particles

| Particle | Mass (amu) | Charge | Location        |
| -------- | ---------- | ------ | --------------- |
| Proton   | 1.0073     | +1     | Nucleus         |
| Neutron  | 1.0087     | 0      | Nucleus         |
| Electron | 0.000549   | -1     | Outside nucleus |

## Quantum Numbers (CED Unit 1)

Each electron in an atom is described by four quantum numbers:

### Principal Quantum Number ($n$)

- Describes the **energy level** and size of the orbital.
- Values: $n = 1, 2, 3, \ldots$
- Maximum electrons in level $n$: $2n^2$

### Angular Momentum Quantum Number ($\ell$)

- Describes the **shape** of the orbital.
- Values: $\ell = 0, 1, 2, \ldots, n-1$
- Letters: $\ell = 0$ (s), $1$ (p), $2$ (d), $3$ (f)

### Magnetic Quantum Number ($m_\ell$)

- Describes the **orientation** of the orbital in space.
- Values: $m_\ell = -\ell, -\ell+1, \ldots, 0, \ldots, \ell-1, \ell$
- Total values: $2\ell + 1$

### Spin Quantum Number ($m_s$)

- Describes the **spin** of the electron.
- Values: $m_s = +\frac{1}{2}$ or $m_s = -\frac{1}{2}$

### Example: Quantum Numbers for $3d$ Electrons

For $n = 3$, $\ell = 2$ (d orbital):

$m_\ell \in \{-2, -1, 0, 1, 2\}$ (5 orbitals, 10 electrons maximum)

Each electron also has $m_s = \pm\frac{1}{2}$.

## Electron Configurations

### Aufbau Principle

Electrons fill orbitals from lowest to highest energy. The order is:

$$
1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s \lt 4f \lt 5d \lt 6p
$$

### Pauli Exclusion Principle

No two electrons in an atom can have the same set of four quantum numbers. Each orbital holds at
most two electrons with opposite spins.

### Hund's Rule

Electrons occupy degenerate orbitals singly first, with parallel spins, before pairing up.

### Writing Electron Configurations

**Notation types:**

- Full: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^6$
- Noble gas core: $[\text{Ar}]\,4s^2 3d^{10} 4p^6$
- Orbital diagram: boxes with up/down arrows

### Exceptions to Aufbau

**Chromium ($Z = 24$):** $[\text{Ar}]\,4s^1 3d^5$ (half-filled d subshell is more stable)

**Copper ($Z = 29$):** $[\text{Ar}]\,4s^1 3d^{10}$ (fully filled d subshell is more stable)

Similar exceptions occur for Mo ($4d^5$) and $\text{Ag}$ ($4d^{10}$).

:::info[Example]

Write the electron configuration for Fe ($Z = 26$).

$$
\text{Fe}: [\text{Ar}]\,4s^2 3d^6
$$

Orbital diagram for $3d^6$:

$$
\begin{array}{ccccc}
\uparrow\downarrow & \uparrow\downarrow & \uparrow\downarrow & \uparrow & \uparrow \\
m_\ell = -2 & -1 & 0 & 1 & 2
\end{array}
$$

:::

## Electromagnetic Radiation and Atomic Spectra (CED Unit 1)

### Wave-Particle Duality

Light exhibits both wave and particle properties:

$$
E = h\nu = \frac{hc}{\lambda}
$$

where $h = 6.626 \times 10^{-34} \text{ J}\cdot\text{s}$ (Planck's constant),
$c = 3.00 \times 10^8 \text{ m/s}$, $\nu$ is frequency, and $\lambda$ is wavelength.

### The Bohr Model for Hydrogen

The energy levels of hydrogen are:

$$
E_n = -\frac{13.6 \text{ eV}}{n^2} = -\frac{2.18 \times 10^{-18} \text{ J}}{n^2}
$$

The radius of the $n$th orbit:

$$
r_n = n^2 a_0 = n^2 \times 0.529 \text{ \AA}
$$

where $a_0$ is the Bohr radius.

### The Rydberg Equation

The wavelength of light emitted or absorbed during a transition between levels $n_i$ and $n_f$:

$$
\frac{1}{\lambda} = R_H\!\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)
$$

where $R_H = 1.097 \times 10^7 \text{ m}^{-1}$ is the Rydberg constant.

For emission: $n_i \gt n_f$ (photon released).

For absorption: $n_i \lt n_f$ (photon absorbed).

### Spectral Series

| Series  | Transition | Region      |
| ------- | ---------- | ----------- |
| Lyman   | $n_f = 1$  | Ultraviolet |
| Balmer  | $n_f = 2$  | Visible     |
| Paschen | $n_f = 3$  | Infrared    |

:::info[Example]

Calculate the wavelength of light emitted when an electron in hydrogen drops from $n = 4$ to
$n = 2$.

$$
\frac{1}{\lambda} = (1.097 \times 10^7)\!\left(\frac{1}{4} - \frac{1}{16}\right) = (1.097 \times 10^7)(0.1875) = 2.057 \times 10^6 \text{ m}^{-1}
$$

$$
\lambda = \frac{1}{2.057 \times 10^6} = 4.86 \times 10^{-7} \text{ m} = 486 \text{ nm}
$$

This is in the visible region (blue-green), part of the Balmer series.

The energy of the photon:

$$
E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34})(3.00 \times 10^8)}{4.86 \times 10^{-7}} = 4.09 \times 10^{-19} \text{ J} = 2.56 \text{ eV}
$$

:::

## Photoelectric Effect

Einstein's explanation: light consists of photons, each with energy $E = h\nu$.

$$
KE_{\text{max}} = h\nu - \phi
$$

where $\phi$ is the work function (minimum energy to eject an electron).

The threshold frequency: $\nu_0 = \frac{\phi}{h}$.

If $\nu \lt \nu_0$, no electrons are emitted regardless of intensity.

## Periodic Trends (CED Unit 1)

### Effective Nuclear Charge ($Z_{\text{eff}}$)

$$
Z_{\text{eff}} = Z - S
$$

where $Z$ is the atomic number and $S$ is the shielding constant. $Z_{\text{eff}}$ increases across
a period (less shielding) and stays roughly constant down a group (more shielding offsets more
protons).

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
\text{X}(g) \to \text{X}^+(g) + e^- \quad \Delta H = IE_1
$$

**Exceptions:** $IE_1$ decreases from Group 2 to 13 (s to p) and from Group 15 to 16 (half-filled p
subshell stability).

### Atomic Radius

Covalent radius: half the distance between nuclei of two bonded atoms of the same element.

Metallic radius: half the distance between nuclei of adjacent atoms in a metallic crystal.

### Electronegativity

The ability of an atom to attract bonding electrons. Pauling scale: F (3.98) is the most
electronegative element. Cs (0.79) is the least.

### Electron Affinity

The energy change when an electron is added to a gaseous atom:

$$
\text{X}(g) + e^- \to \text{X}^-(g) \quad \Delta H = EA
$$

More negative EA = greater attraction for the added electron.

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

## Practice Questions

1. Write the ground-state electron configuration and orbital diagram for S ($Z = 16$).

2. What are the four quantum numbers for each electron in the $2p$ subshell of carbon?

3. Calculate the wavelength of a photon emitted when an electron in hydrogen transitions from
   $n = 5$ to $n = 2$. In what spectral series does this belong?

4. Explain why the first ionization energy of oxygen is less than that of nitrogen.

5. Arrange the following in order of increasing atomic radius: $\text{Mg}^{2+}$, $\text{Na}^+$,
   $\text{F}^-$, $\text{O}^{2-}$.

6. The work function of potassium is $2.30 \text{ eV}$. What is the maximum kinetic energy of
   electrons ejected by light of wavelength $400 \text{ nm}$?

7. Write the electron configurations for $\text{Cr}^{3+}$ and $\text{Cu}^+$.

8. Calculate the energy of the $n = 3$ level of hydrogen in joules and electron-volts.
