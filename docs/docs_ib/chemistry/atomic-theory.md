---
title: Atomic Theory
description:
  IB Chemistry — atomic models from Dalton to quantum mechanics, electron configuration, orbital
  theory, and periodic properties.
slug: atomic-theory
---

## 1. Historical Development of Atomic Theory

### Dalton's Atomic Theory (1803)

John Dalton proposed that:

1. All matter is composed of indivisible atoms.
2. Atoms of the same element are identical in mass and properties.
3. Atoms of different elements have different masses.
4. Compounds are formed by the combination of atoms in simple whole-number ratios.
5. Chemical reactions involve the rearrangement of atoms; atoms are neither created nor destroyed.

Dalton's theory explained the law of conservation of mass and the law of definite proportions. It
could not explain the existence of isotopes or subatomic particles.

### Thomson's Plum Pudding Model (1897)

J.J. Thomson discovered the electron using cathode ray experiments. He proposed that atoms are
spheres of positive charge with embedded electrons (like plums in pudding).

Key evidence: cathode rays were deflected by electric and magnetic fields, had a fixed
charge-to-mass ratio, and were independent of the cathode material.

### Rutherford's Nuclear Model (1911)

Ernest Rutherford directed alpha particles at a thin gold foil. Most passed through, but some were
deflected at large angles, and a few rebounded directly.

**Observations:**

- Most alpha particles passed straight through — the atom is mostly empty space.
- A few were deflected at large angles — a concentrated positive charge exists at the centre.
- Very few rebounded — the positive centre is extremely small and dense.

Rutherford concluded that the atom contains a small, dense, positively charged **nucleus**
containing most of the mass. Electrons orbit the nucleus.

**Failure**: The model could not explain the stability of atoms. Classically, accelerating electrons
should radiate energy and spiral into the nucleus, and the model predicted a continuous emission
spectrum rather than the observed discrete lines.

### Bohr's Model (1913)

Niels Bohr proposed quantised electron orbits for hydrogen:

1. Electrons occupy circular orbits at fixed energy levels.
2. An electron in a stationary orbit does not radiate energy.
3. Electrons can jump between orbits by absorbing or emitting photons:

$$
\Delta E = E_{\mathrm{higher}} - E_{\mathrm{lower}} = h\nu
$$

The energy levels of hydrogen:

$$
E_n = -\frac{13.6\mathrm{ eV}}{n^2} = -\frac{2.18 \times 10^{-18}\mathrm{ J}}{n^2}
$$

**Successes**: Explained the hydrogen emission spectrum, predicted the Rydberg formula, and
established the concept of quantised energy levels.

**Failures**: Only worked for hydrogen and hydrogen-like ions; could not explain the fine structure
of spectral lines or the spectra of multi-electron atoms; could not explain the Zeeman effect
(splitting in magnetic fields).

### de Broglie's Hypothesis (1924)

Louis de Broglie proposed that all matter exhibits wave-particle duality:

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

This explained why only certain orbits are stable: the electron wavelength must fit as a standing
wave around the orbit ($n\lambda = 2\pi r$).

### Heisenberg Uncertainty Principle (1927)

**Definition.** The **Heisenberg uncertainty principle** states that the position and momentum of a
particle cannot both be known simultaneously with arbitrary precision:

$$
\Delta x \cdot \Delta p \ge \frac{h}{4\pi}
$$

This means electrons cannot be described as orbiting in fixed paths. Instead, we describe regions of
probability.

### Schrodinger Wave Equation (1926)

The Schrodinger equation describes the wave function $\Psi$ of an electron:

$$
\hat{H}\Psi = E\Psi
$$

where $\hat{H}$ is the Hamiltonian operator. The square of the wave function, $|\Psi|^2$, gives the
probability density of finding the electron at a given position.

This is the basis of the **quantum mechanical model** of the atom.

### Summary of Atomic Models

| Model      | Key Feature         | Explained                                  | Could Not Explain             |
| ---------- | ------------------- | ------------------------------------------ | ----------------------------- |
| Dalton     | Indivisible atoms   | Conservation of mass, definite proportions | Subatomic particles, isotopes |
| Thomson    | Plum pudding        | Electrons                                  | Nuclear atom, spectral lines  |
| Rutherford | Nuclear atom        | Alpha scattering                           | Atomic stability, spectra     |
| Bohr       | Quantised orbits    | Hydrogen spectrum                          | Multi-electron atoms          |
| Quantum    | Orbital probability | All atomic spectra                         | Relativistic effects          |

---

## 2. Electron Configuration

### Quantum Numbers

Each electron is described by four quantum numbers:

| Number    | Symbol | Meaning              | Allowed values               |
| --------- | ------ | -------------------- | ---------------------------- |
| Principal | $n$    | Shell (energy level) | $1, 2, 3, \ldots$            |
| Azimuthal | $l$    | Subshell             | $0, 1, \ldots, n-1$          |
| Magnetic  | $m_l$  | Orbital orientation  | $-l, \ldots, 0, \ldots, +l$  |
| Spin      | $m_s$  | Spin direction       | $+\frac{1}{2}, -\frac{1}{2}$ |

Subshell notation: $l = 0 \to s$, $l = 1 \to p$, $l = 2 \to d$, $l = 3 \to f$.

### Aufbau Principle

Electrons fill orbitals in order of increasing energy. The $(n + l)$ rule determines the filling
order:

$$
1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s \lt 4f \lt 5d \lt 6p
$$

### Pauli Exclusion Principle

No two electrons in the same atom can have identical sets of four quantum numbers. Each orbital
holds a maximum of two electrons with opposite spins.

### Hund's Rule

Within a degenerate set of orbitals, electrons occupy separate orbitals with parallel spins before
pairing.

### Writing Configurations

Full notation:

$$
\mathrm{Fe}: 1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^2\, 3d^6
$$

Noble gas core notation:

$$
\mathrm{Fe}: [\mathrm{Ar}]\, 4s^2\, 3d^6
$$

### Exceptions to the Aufbau Principle

Half-filled ($d^5$) and fully-filled ($d^{10}$) subshells have extra stability from exchange energy
and symmetry:

| Element       | Expected                      | Actual                           | Reason            |
| ------------- | ----------------------------- | -------------------------------- | ----------------- |
| $\mathrm{Cr}$ | $[\mathrm{Ar}]\, 4s^2\, 3d^4$ | $[\mathrm{Ar}]\, 4s^1\, 3d^5$    | Half-filled $3d$  |
| $\mathrm{Cu}$ | $[\mathrm{Ar}]\, 4s^2\, 3d^9$ | $[\mathrm{Ar}]\, 4s^1\, 3d^{10}$ | Fully-filled $3d$ |

### Ions

For transition metal ions, electrons are removed from the $ns$ orbital **before** the $(n-1)d$
orbital:

$$
\mathrm{Fe}^{2+}: [\mathrm{Ar}]\, 3d^6 \quad (\mathrm{not } 4s^2\, 3d^4)
$$

$$
\mathrm{Cu}^+: [\mathrm{Ar}]\, 3d^{10} \quad (\mathrm{not } 4s^1\, 3d^9)
$$

### Common Pitfalls

- Writing $3d$ before $4s$ in the configuration notation (always list by increasing $n$ first).
- Removing $3d$ electrons before $4s$ when forming cations of transition metals.
- Forgetting that the Aufbau order and the writing order are different for transition metals.

---

## 3. Orbital Theory

### Shapes of Orbitals

| Orbital | Shape      | Nodes                   | Max electrons     |
| ------- | ---------- | ----------------------- | ----------------- |
| $s$     | Spherical  | $n - 1$ total           | $2$               |
| $p$     | Dumbbell   | Angular node at nucleus | $6$ per subshell  |
| $d$     | Cloverleaf | $2$ angular nodes       | $10$ per subshell |

### Radial and Angular Nodes

The total number of nodes for an orbital with quantum numbers $n$ and $l$ is:

$$
\mathrm{total nodes} = n - 1
$$

$$
\mathrm{angular nodes} = l
$$

$$
\mathrm{radial nodes} = n - l - 1
$$

:::info[Example]

For the $3p$ orbital ($n = 3$, $l = 1$):

- Total nodes $= 2$
- Angular nodes $= 1$ (the nodal plane through the nucleus)
- Radial nodes $= 3 - 1 - 1 = 1$

:::

### Penetration and Shielding

**Penetration** describes the ability of an electron in an outer orbital to approach the nucleus.
The $s$ orbitals have the greatest penetration, followed by $p$, then $d$, then $f$.

This explains why $4s$ fills before $3d$: the $4s$ electron has greater penetration and lower energy
than the $3d$ electron. However, once the $3d$ subshell is occupied, the increased shielding raises
the energy of $4s$ above $3d$.

### Effective Nuclear Charge

$$
Z_{\mathrm{eff}} = Z - S
$$

where $S$ is the shielding constant estimated by Slater's rules.

### Slater's Rules

1. Write the electron configuration in groups: $(1s)(2s,2p)(3s,3p)(3d)(4s,4p)(4d)(4f)\ldots$

2. Electrons in groups to the right contribute $0$ to $S$.

3. Same group: each other $ns$/$np$ electron contributes $0.35$ (except $1s$: $0.30$). For
   $nd$/$nf$: each other electron contributes $0.35$.

4. $n - 1$ shell: contributes $0.85$ per electron (for $s$/$p$) or $1.00$ (for $d$/$f$).

5. $n - 2$ and lower: each contributes $1.00$.

:::info[Example — $Z_{\mathrm{eff}}$ for a $4s$ electron in potassium ($Z = 19$)]

Configuration: $(1s)^2(2s,2p)^8(3s,3p)^8(4s)^1$

- Same group ($4s$): $0$ other electrons
- $n - 1$ $(3s,3p)^8$: $8 \times 0.85 = 6.80$
- $n - 2$ and lower $(1s)^2(2s,2p)^8$: $10 \times 1.00 = 10.00$

$$
S = 0 + 6.80 + 10.00 = 16.80
$$

$$
Z_{\mathrm{eff}} = 19 - 16.80 = 2.20
$$

:::

---

## 4. Ionization Energy

### Definition

The $n$-th **ionization energy** ($IE_n$) is the minimum energy required to remove the $n$-th
electron from one mole of gaseous atoms or ions:

$$
\mathrm{X}^{(n-1)+}(g) \to \mathrm{X}^{n+}(g) + e^- \qquad \Delta H = IE_n
$$

### Periodic Trends

| Trend                     | Explanation                                           |
| ------------------------- | ----------------------------------------------------- |
| Increases across a period | Increasing $Z_{\mathrm{eff}}$ pulls electrons closer  |
| Decreases down a group    | Greater distance from nucleus and increased shielding |

### Deviations Across a Period

| Deviation               | Elements | Explanation                                                                                    |
| ----------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| Drop Group $2$ to $13$  | Be to B  | Be has a stable filled $2s$ subshell; B removes a $2p$ electron (higher energy, less shielded) |
| Drop Group $15$ to $16$ | N to O   | N has stable half-filled $2p^3$; O has a paired $2p$ electron experiencing extra repulsion     |

### Successive Ionization Energies

A large jump between successive ionization energies indicates removal from a new inner shell:

$$
IE_1 \lt IE_2 \lt IE_3 \ll IE_4 \quad \mathrm{(large jump at } IE_4 \mathrm{ for Al)}
$$

This reveals the number of valence electrons.

:::info[Example — Silicon ($Z = 14$)]

$IE_1 = 787$, $IE_2 = 1577$, $IE_3 = 3228$, $IE_4 = 4356$, $IE_5 = 16091\mathrm{ kJ/mol}$

The large jump from $IE_4$ to $IE_5$ indicates 4 valence electrons, consistent with silicon
($[\mathrm{Ne}]\, 3s^2\, 3p^2$).

:::

---

## 5. Electronegativity

### Definition

**Electronegativity** is the tendency of an atom to attract the shared pair of electrons in a
covalent bond. The Pauling scale is most commonly used, with fluorine assigned the maximum value of
$3.98$.

### Periodic Trends

| Trend                     | Explanation                    |
| ------------------------- | ------------------------------ |
| Increases across a period | Increasing $Z_{\mathrm{eff}}$  |
| Decreases down a group    | Greater distance and shielding |

### Electronegativity and Bonding

| $\Delta\chi$ | Bond type          |
| ------------ | ------------------ |
| $0.0$--$0.4$ | Non-polar covalent |
| $0.5$--$1.7$ | Polar covalent     |
| $\gt 1.7$    | Ionic              |

### Polarising Power and Polarizability

**Polarising power**: the ability of a cation to distort the electron cloud of an anion. It
increases with charge and decreases with size.

**Polarizability**: the ease with which an anion's electron cloud is distorted. It increases with
size and charge.

High polarising power combined with high polarizability leads to covalent character in ionic bonds
(Fajans' rules).

### Common Pitfalls

- Electronegativity is a relative property of atoms **in bonds**, not of isolated atoms.
- The transition metals do not show a smooth electronegativity trend across the $d$-block.
- Noble gases are typically not assigned electronegativity values (they do not form covalent bonds
  under normal conditions).

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Use Slater's rules to calculate $Z_{\mathrm{eff}}$ experienced by a $3d$ electron in iron
($Z = 26$). Explain why the $4s$ electrons are removed before the $3d$ electrons when iron forms
$\mathrm{Fe}^{2+}$.

**Solution:**

Configuration of Fe: $(1s)^2(2s,2p)^8(3s,3p)^8(3d)^6(4s)^2$

For a $3d$ electron:

- Same group $(3d)^6$: $5$ other electrons $\times 0.35 = 1.75$
- $n - 1$ shell: $(3s,3p)^8$: $8 \times 1.00 = 8.00$ (rule for $d$ electrons)
- $n - 2$ and lower: $(1s)^2(2s,2p)^8 = 10 \times 1.00 = 10.00$

$$
S = 1.75 + 8.00 + 10.00 = 19.75
$$

$$
Z_{\mathrm{eff}}(3d) = 26 - 19.75 = 6.25
$$

For a $4s$ electron:

- Same group $(4s)^2$: $1$ other $\times 0.35 = 0.35$
- $n - 1$ shell $(3s,3p,3d)^{14}$: $14 \times 0.85 = 11.90$
- $n - 2$ and lower: $10 \times 1.00 = 10.00$

$$
S = 0.35 + 11.90 + 10.00 = 22.25
$$

$$
Z_{\mathrm{eff}}(4s) = 26 - 22.25 = 3.75
$$

Wait — this gives $Z_{\mathrm{eff}}(3d) \gt Z_{\mathrm{eff}}(4s)$, which suggests $4s$ is higher in
energy. For a neutral atom, the $4s$ has lower energy due to its greater penetration. Once the $3d$
subshell is occupied, however, the $3d$ electrons shield the $4s$ electrons, raising $4s$ above $3d$
in energy. Therefore, upon ionization, the $4s$ electrons (now at higher energy) are removed first.

</details>

<details>
<summary>Problem 2</summary>

The first five ionization energies of an element are (in $\mathrm{kJ/mol}$): $578$, $1817$, $2745$,
$11577$, $14842$. Identify the element and explain your reasoning.

**Solution:**

The large jump occurs between $IE_3$ and $IE_4$ (from $2745$ to $11577\mathrm{ kJ/mol}$), indicating
that the first three electrons are valence electrons and the fourth is from an inner shell. This
corresponds to a Group 13 element with three valence electrons.

$IE_1 = 578\mathrm{ kJ/mol}$ matches aluminium ($\mathrm{Al}$, $Z = 13$, configuration
$[\mathrm{Ne}]\, 3s^2\, 3p^1$).

</details>

<details>
<summary>Problem 3</summary>

Explain why the second ionization energy of sodium ($4562\mathrm{ kJ/mol}$) is much larger than the
first ($496\mathrm{ kJ/mol}$), while the second ionization energy of magnesium
($1451\mathrm{ kJ/mol}$) is less than twice the first ($738\mathrm{ kJ/mol}$).

**Solution:**

For sodium: $IE_1$ removes a $3s$ valence electron. $IE_2$ removes a $2p$ electron from the $n = 2$
shell, which is much closer to the nucleus and experiences far greater $Z_{\mathrm{eff}}$ with much
less shielding. This accounts for the nearly tenfold increase.

For magnesium: both $IE_1$ and $IE_2$ remove $3s$ electrons from the same valence shell. The
increase from $IE_1$ to $IE_2$ is due to reduced electron-electron repulsion after the first
electron is removed, increasing $Z_{\mathrm{eff}}$ on the remaining electron. But both are still
valence electrons, so the jump is modest.

</details>

<details>
<summary>Problem 4</summary>

The electron configuration of a transition metal ion is $[\mathrm{Ar}]\, 3d^5$. The ion has a charge
of $+2$. Identify the element and determine whether the ion is paramagnetic or diamagnetic.

**Solution:**

The neutral atom would be $[\mathrm{Ar}]\, 4s^2\, 3d^5$, which is manganese ($\mathrm{Mn}$,
$Z = 25$). The ion $\mathrm{Mn}^{2+}$ has five unpaired $d$-electrons (all in separate orbitals
following Hund's rule), so it is strongly paramagnetic.

</details>

---

## Worked Examples

**Worked Example: Full electron configuration and quantum numbers**

Write the full electron configuration of vanadium ($\mathrm{V}$, $Z = 23$). State the four quantum
numbers for each of the five valence electrons.

<details>
<summary>Solution</summary>

Full configuration: $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^2\, 3d^3$

Noble gas notation: $[\mathrm{Ar}]\, 4s^2\, 3d^3$

Valence electrons: $4s^2\, 3d^3$ (5 valence electrons in total).

Quantum numbers:

$4s$ electrons (same orbital, opposite spins):
- $(n=4,\ l=0,\ m_l=0,\ m_s=+\tfrac{1}{2})$
- $(n=4,\ l=0,\ m_l=0,\ m_s=-\tfrac{1}{2})$

$3d$ electrons (by Hund's rule, each occupies a separate orbital with parallel spin):
- $(n=3,\ l=2,\ m_l=-2,\ m_s=+\tfrac{1}{2})$
- $(n=3,\ l=2,\ m_l=-1,\ m_s=+\tfrac{1}{2})$
- $(n=3,\ l=2,\ m_l=0,\ m_s=+\tfrac{1}{2})$

All five electrons have different sets of quantum numbers, consistent with the Pauli exclusion
principle. The three $3d$ electrons have parallel spins, maximising exchange energy (Hund's rule).

</details>

**Worked Example: Identifying an element from successive ionization energies**

The first five ionization energies of an element are (in $\mathrm{kJ/mol}$): $578$, $1817$, $2745$,
$11577$, $14842$. Identify the element and justify your reasoning.

<details>
<summary>Solution</summary>

**Step 1: Locate the large jump.**

The jump between $IE_3$ ($2745\mathrm{ kJ/mol}$) and $IE_4$ ($11577\mathrm{ kJ/mol}$) is
approximately a factor of 4. This is the largest discontinuity in the series.

**Step 2: Interpret the jump.**

A large jump indicates that the $n$-th electron is being removed from a new, inner shell. The jump
from $IE_3$ to $IE_4$ means the first three electrons are valence electrons and the fourth is from
an inner shell. This corresponds to a Group 13 element.

**Step 3: Identify the element.**

$IE_1 = 578\mathrm{ kJ/mol}$ matches aluminium ($\mathrm{Al}$, $Z = 13$, configuration
$[\mathrm{Ne}]\, 3s^2\, 3p^1$).

**Step 4: Verify.**

$IE_1$ removes a $3p$ electron. $IE_2$ removes a $3s$ electron. $IE_3$ removes the second $3s$
electron. $IE_4$ would remove a $2p$ electron from the $n = 2$ shell, which is much closer to the
nucleus with far greater $Z_{\mathrm{eff}}$.

</details>

**Worked Example: Slater's rules and the nitrogen--oxygen anomaly**

Calculate $Z_{\mathrm{eff}}$ for a $2p$ electron in nitrogen ($Z = 7$) and oxygen ($Z = 8$). Use
the results to explain why $IE_1(\mathrm{N}) = 1402\mathrm{ kJ/mol}$ is higher than
$IE_1(\mathrm{O}) = 1314\mathrm{ kJ/mol}$ despite oxygen having a greater nuclear charge.

<details>
<summary>Solution</summary>

**Nitrogen:** configuration $(1s)^2(2s, 2p)^5$

For a $2p$ electron:
- Same group: $4$ other electrons $\times 0.35 = 1.40$
- $n - 1$ shell: $(1s)^2 \times 1.00 = 2.00$
- $S = 1.40 + 2.00 = 3.40$
- $Z_{\mathrm{eff}} = 7 - 3.40 = 3.60$

**Oxygen:** configuration $(1s)^2(2s, 2p)^6$

For a $2p$ electron:
- Same group: $5$ other electrons $\times 0.35 = 1.75$
- $n - 1$ shell: $(1s)^2 \times 1.00 = 2.00$
- $S = 1.75 + 2.00 = 3.75$
- $Z_{\mathrm{eff}} = 8 - 3.75 = 4.25$

**Analysis:** Slater's rules predict $Z_{\mathrm{eff}}(\mathrm{O}) > Z_{\mathrm{eff}}(\mathrm{N})$,
which alone would suggest higher $IE$ for oxygen. The observed anomaly arises from two factors
Slater's rules do not fully capture:

1. Nitrogen has a half-filled $2p^3$ subshell with maximum exchange energy (three parallel spins),
   giving extra stability.
2. In oxygen ($2p^4$), the first electron removed comes from a paired orbital, where
   electron-electron repulsion partially offsets the greater $Z_{\mathrm{eff}}$.

This is a classic example where a simple electrostatic model (Slater's rules) does not fully
reproduce the observed trend, and quantum mechanical exchange effects must be invoked.

</details>

**Worked Example: Photon energy from electron transitions in hydrogen**

An electron in a hydrogen atom transitions from $n = 4$ to $n = 2$. Calculate the energy,
frequency, and wavelength of the emitted photon, and identify the spectral series.

<details>
<summary>Solution</summary>

$$E_n = -\frac{2.18 \times 10^{-18}\mathrm{ J}}{n^2}$$

$$E_4 = -\frac{2.18 \times 10^{-18}}{16} = -1.3625 \times 10^{-19}\mathrm{ J}$$

$$E_2 = -\frac{2.18 \times 10^{-18}}{4} = -5.45 \times 10^{-19}\mathrm{ J}$$

$$\Delta E = E_4 - E_2 = (-1.3625 \times 10^{-19}) - (-5.45 \times 10^{-19}) = 4.0875 \times 10^{-19}\mathrm{ J}$$

The negative sign of $\Delta E$ confirms energy is released (photon emitted).

$$\nu = \frac{\Delta E}{h} = \frac{4.0875 \times 10^{-19}}{6.626 \times 10^{-34}} = 6.17 \times 10^{14}\mathrm{ Hz}$$

$$\lambda = \frac{c}{\nu} = \frac{3.00 \times 10^8}{6.17 \times 10^{14}} = 4.86 \times 10^{-7}\mathrm{ m} = 486\mathrm{ nm}$$

This wavelength (486 nm) is in the visible region (blue-green). The transition terminates at $n = 2$,
placing it in the **Balmer series**.

</details>

**Worked Example: Transition metal ion configuration and magnetism**

Write the electron configuration of $\mathrm{Co}^{2+}$ ($Z = 27$). Determine the number of unpaired
electrons and state whether the ion is paramagnetic or diamagnetic.

<details>
<summary>Solution</summary>

**Neutral cobalt:** $[\mathrm{Ar}]\, 4s^2\, 3d^7$

**Forming $\mathrm{Co}^{2+}$:** Remove the $4s$ electrons first (they are at higher energy once the
$3d$ subshell is occupied).

$$\mathrm{Co}^{2+}: [\mathrm{Ar}]\, 3d^7$$

**Orbital diagram for $3d^7$:**

The seven $3d$ electrons fill as follows (by Hund's rule):
- Three electrons in three separate orbitals (all spin-up): $\uparrow\ \uparrow\ \uparrow$
- Two electrons pair in the remaining two orbitals: $\uparrow\downarrow\ \uparrow\downarrow$
- One more electron in the last orbital: $\uparrow$

Arrangement: $(\uparrow\downarrow)(\uparrow\downarrow)(\uparrow)(\uparrow)(\uparrow)$

Number of unpaired electrons: 3

$\mathrm{Co}^{2+}$ is **paramagnetic** with three unpaired electrons.

</details>

---

## Common Pitfalls

- **Writing electron configurations in the wrong order**: The filling order (Aufbau) differs from the
  writing order for transition metals. $4s$ fills before $3d$, but in the written configuration
  $3d$ is listed before $4s$ for neutral atoms: $[\mathrm{Ar}]\, 3d^x\, 4s^y$.

- **Removing the wrong electrons when forming cations**: Transition metal ions lose $4s$ electrons
  before $3d$ electrons, despite $4s$ filling first. $\mathrm{Fe}$ is $[\mathrm{Ar}]\, 4s^2\, 3d^6$,
  but $\mathrm{Fe}^{2+}$ is $[\mathrm{Ar}]\, 3d^6$, not $[\mathrm{Ar}]\, 4s^2\, 3d^4$.

- **Confusing penetration with shielding**: Penetration describes how close an electron can approach
  the nucleus ($s \gt p \gt d \gt f$). Shielding describes how other electrons reduce the effective
  nuclear charge felt by a given electron. They are related but distinct concepts.

- **Misapplying the Aufbau principle to ions**: The filling order applies to neutral atoms. For ions,
  write the neutral atom configuration first, then remove or add electrons. Do not attempt to
  re-apply the $n + l$ rule to the ion directly.

- **Assuming all electrons in a subshell are equivalent for ionization**: Within a $p$-subshell, the
  first electron removed comes from a paired orbital (if one exists), which requires less energy than
  removing from a half-filled subshell. This explains the Group 15--16 dip in ionization energy.

- **Over-interpreting Slater's rules**: Slater's rules are a simplified approximation. They do not
  account for exchange energy, orbital shape effects, or the differences between $s$ and $p$ electrons
  in the same shell. Use them for qualitative trends, not precise predictions.

- **Forgetting that $d$-block elements have variable valence**: Transition metals can lose different
  numbers of $d$-electrons depending on the compound. $\mathrm{Mn}$ can form $\mathrm{Mn}^{2+}$
  ($3d^5$) or $\mathrm{Mn}^{4+}$ ($3d^3$), among others.

- **Misidentifying the last electron added**: The last electron added to $\mathrm{Cr}$ goes into the
  $3d$ subshell (giving $3d^5$), not the $4s$. The last electron added to $\mathrm{Cu}$ goes into
  the $3d$ subshell (giving $3d^{10}$). The exceptions exist to achieve half-filled or fully-filled
  $d$-subshells.

---

## Exam-Style Problems

1. Write the electron configuration of $\mathrm{Fe}^{3+}$ ($Z = 26$). Determine the number of unpaired
   electrons and state whether the ion is paramagnetic or diamagnetic. Explain why $\mathrm{Fe}^{3+}$ is
   more stable than $\mathrm{Fe}^{2+}$ in many compounds. **[Medium]**

2. The first five ionization energies of an element are: $IE_1 = 1090$, $IE_2 = 2353$,
   $IE_3 = 4621$, $IE_4 = 6223$, $IE_5 = 37831\mathrm{ kJ/mol}$. (a) Identify the element. (b) Write
   the equation for the process corresponding to $IE_5$. (c) Explain the large jump between $IE_4$
   and $IE_5$. **[Medium]**

3. Use Slater's rules to calculate $Z_{\mathrm{eff}}$ for a $3p$ electron in sulfur ($Z = 16$) and a
   $3p$ electron in phosphorus ($Z = 15$). Use the results to explain the increase in first ionization
   energy from phosphorus to sulfur across Period 3. **[Hard]**

4. An electron in a $\mathrm{He}^+$ ion ($Z = 2$) transitions from $n = 3$ to $n = 1$. (a) Calculate
   the energy, frequency, and wavelength of the emitted photon. (b) Compare the energy with the same
   transition in hydrogen. (c) In what region of the electromagnetic spectrum does this photon lie?
   **[Medium]**

5. Explain why chromium has the electron configuration $[\mathrm{Ar}]\, 3d^5\, 4s^1$ rather than the
   expected $[\mathrm{Ar}]\, 4s^2\, 3d^4$. Reference exchange energy and subshell stability in your
   explanation. Why does this exception not extend to elements beyond copper? **[Medium]**

6. The first four ionization energies of an element are: $738$, $1451$, $7733$, $10541\mathrm{ kJ/mol}$.
   (a) Identify the element. (b) Write the equation for the process corresponding to $IE_3$. (c)
   Explain why $IE_3$ is so much larger than $IE_2$. (d) Would you expect this element to form a $+2$
   or $+3$ ion more readily? Justify. **[Easy]**

7. Calculate the de Broglie wavelength of an electron traveling at $2.0 \times 10^6\mathrm{ m/s}$.
   ($h = 6.626 \times 10^{-34}\mathrm{ J \cdot s}$, $m_e = 9.109 \times 10^{-31}\mathrm{ kg}$). Is
   this wavelength consistent with wave-like behavior on the atomic scale (comparable to bond lengths
   of $\sim 100\mathrm{ pm}$)? **[Medium]**

8. State whether each of the following sets of quantum numbers is permitted or not permitted. If not
   permitted, explain why. (a) $n=2$, $l=2$, $m_l=0$, $m_s=+\tfrac{1}{2}$ (b) $n=3$, $l=1$,
   $m_l=-1$, $m_s=0$ (c) $n=4$, $l=3$, $m_l=-3$, $m_s=-\tfrac{1}{2}$ (d) $n=1$, $l=0$, $m_l=1$,
   $m_s=+\tfrac{1}{2}$ **[Easy]**

---

## If You Get These Wrong, Revise:

- **Chemical bonding and VSEPR geometry** → Review [./chemical-bonding-advanced](./chemical-bonding-advanced)
- **Periodic trends (IE, EN, atomic radius)** → Review [./periodicity](./periodicity)
- **Spectroscopy and energy level calculations** → Review [./measurement-and-data-processing](./measurement-and-data-processing)
- **Redox half-equations and oxidation states** → Review [./redox-advanced](./redox-advanced)
