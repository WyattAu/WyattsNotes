---
title: Atomic and Nuclear Physics
description: IB Physics — atomic models, nuclear physics, radioactivity, and mass-energy
  equivalence.
slug: atomic-physics
---


## Atomic Models

### Thomson's Plum Pudding Model (1897)

After discovering the electron, Thomson proposed that atoms consist of a uniform positive charge
with electrons embedded within it, like plums in a pudding.

### Rutherford Scattering (1911)

Rutherford directed alpha particles at a thin gold foil. Most passed through, but some were
deflected at large angles, and a few bounced back.

**Observations and conclusions**:

1. Most alpha particles passed straight through: the atom is mostly empty space.
2. Some were deflected: there is a small, dense, positively charged nucleus.
3. Very few bounced back: the nucleus is very small compared to the atom.

**Nuclear atom model**: A small, dense, positively charged nucleus surrounded by orbiting electrons.

### The Bohr Model (1913)

Bohr proposed a model for the hydrogen atom:

1. Electrons orbit the nucleus in certain **allowed orbits** (stationary states).
2. Electrons do not radiate energy while in a stationary state.
3. An electron can jump between orbits by absorbing or emitting a photon.
4. The angular momentum is quantised: $mvr = n\dfrac{h}{2\pi}$, where $n = 1, 2, 3, \ldots$

### Energy Levels

The energy of an electron in the $n$-th orbit of hydrogen:

$$
E_n = -\frac&lbrace;13.6\mathrm&lbrace; eV&rbrace;&rbrace;&lbrace;n^2&rbrace;
$$

| Level          | $n$      | Energy (eV) |
| -------------- | -------- | ----------- |
| Ground state   | 1        | $-13.6$     |
| First excited  | 2        | $-3.40$     |
| Second excited | 3        | $-1.51$     |
| Third excited  | 4        | $-0.85$     |
| Ionisation     | $\infty$ | $0$         |

### Photon Emission and Absorption

When an electron transitions from level $n_i$ to level $n_f$:

$$
\Delta E = E_&lbrace;n_f&rbrace; - E_&lbrace;n_i&rbrace; = hf = \frac&lbrace;hc&rbrace;&lbrace;\lambda&rbrace;
$$

- Emission ($n_i \gt n_f$): photon is released.
- Absorption ($n_i \lt n_f$): photon is absorbed.

:::info[Example]

Find the wavelength of light emitted when an electron in hydrogen drops from $n = 3$ to $n = 2$.

$$
\Delta E = E_2 - E_3 = -3.40 - (-1.51) = -1.89\mathrm&lbrace; eV&rbrace;
$$

(The energy of the photon is $1.89\mathrm{ eV}$.)

$$
\lambda = \frac&lbrace;hc&rbrace;&lbrace;\Delta E&rbrace; = \frac&lbrace;1240\mathrm&lbrace; eV&rbrace;\cdot\mathrm&lbrace;nm&rbrace;&rbrace;&lbrace;1.89\mathrm&lbrace; eV&rbrace;&rbrace; = 656\mathrm&lbrace; nm&rbrace;
$$

This is the red line in the Balmer series (visible spectrum of hydrogen).

:::

### Emission and Absorption Spectra

- **Emission spectrum**: bright lines on a dark background (photons emitted at specific
  wavelengths).
- **Absorption spectrum**: dark lines on a continuous spectrum (photons absorbed at specific
  wavelengths).
- Each element has a unique spectrum — like a fingerprint.

### Spectral Series of Hydrogen

| Series  | Transitions to | Region      |
| ------- | -------------- | ----------- |
| Lyman   | $n = 1$        | Ultraviolet |
| Balmer  | $n = 2$        | Visible     |
| Paschen | $n = 3$        | Infrared    |

---

## Nuclear Structure

### Nucleons

The nucleus contains:

- **Protons**: positive charge $+e$, mass $\approx 1.673 \times 10^{-27}\mathrm{ kg}$
- **Neutrons**: no charge, mass $\approx 1.675 \times 10^{-27}\mathrm{ kg}$

The **atomic number** $Z$ = number of protons (determines the element).

The **mass number** $A$ = number of protons + number of neutrons.

The **neutron number** $N = A - Z$.

### Nuclear Notation

$$
&lbrace;&rbrace;^A_Z X
$$

For example: ${}^{235}_{92}\mathrm{U}$ has 92 protons and 143 neutrons.

### Isotopes

Isotopes of an element have the same number of protons but different numbers of neutrons.

| Isotope                          | Protons | Neutrons |
| -------------------------------- | ------- | -------- |
| ${}^{1}_1\mathrm{H}$ (protium)   | 1       | 0        |
| ${}^{2}_1\mathrm{H}$ (deuterium) | 1       | 1        |
| ${}^{3}_1\mathrm{H}$ (tritium)   | 1       | 2        |

### Nuclear Forces

- **Strong nuclear force**: short-range attractive force between nucleons. Overcomes electrostatic
  repulsion between protons. Range $\approx 1$--$3\mathrm{ fm}$
  ($1\mathrm{ fm} = 10^{-15}\mathrm{ m}$).
- **Electrostatic (Coulomb) force**: repulsive between protons, long range.

### Nuclear Radius

The radius of a nucleus is approximately:

$$
R = R_0 A^&lbrace;1/3&rbrace;
$$

where $R_0 \approx 1.2\mathrm{ fm}$.

### Nuclear Density

Since $R \propto A^{1/3}$, the volume $V \propto A$. All nuclei have approximately the same density:

$$
\rho \approx 2.3 \times 10^&lbrace;17&rbrace;\mathrm&lbrace; kg/m&rbrace;^3
$$

---

## Radioactivity

### Types of Radiation

| Property       | Alpha ($\alpha$)            | Beta ($\beta^-$)      | Gamma ($\gamma$) |
| -------------- | --------------------------- | --------------------- | ---------------- |
| Particle       | ${}^4_2\mathrm{He}$ nucleus | Electron ($e^-$)      | Photon           |
| Charge         | $+2e$                       | $-e$                  | $0$              |
| Mass           | $4\mathrm{ u}$              | $\approx 0$           | $0$              |
| Speed          | $\approx 0.05c$             | Up to $\approx 0.99c$ | $c$              |
| Penetration    | Paper                       | Aluminium (few mm)    | Lead (few cm)    |
| Ionising power | High                        | Medium                | Low              |

### Alpha Decay

$$
&lbrace;&rbrace;^A_Z X \to &lbrace;&rbrace;^&lbrace;A-4&rbrace;_&lbrace;Z-2&rbrace; Y + &lbrace;&rbrace;^4_2\alpha
$$

The daughter nucleus has atomic number reduced by 2 and mass number reduced by 4.

:::info[Example]

$$
&lbrace;&rbrace;^&lbrace;238&rbrace;_&lbrace;92&rbrace;\mathrm&lbrace;U&rbrace; \to &lbrace;&rbrace;^&lbrace;234&rbrace;_&lbrace;90&rbrace;\mathrm&lbrace;Th&rbrace; + &lbrace;&rbrace;^4_2\alpha
$$

:::

### Beta-minus Decay

$$
&lbrace;&rbrace;^A_Z X \to &lbrace;&rbrace;^A_&lbrace;Z+1&rbrace; Y + &lbrace;&rbrace;^0_&lbrace;-1&rbrace;\beta + \bar&lbrace;\nu&rbrace;_e
$$

A neutron converts to a proton, emitting an electron and an antineutrino:

$$
n \to p + e^- + \bar&lbrace;\nu&rbrace;_e
$$

:::info[Example]

$$
&lbrace;&rbrace;^&lbrace;14&rbrace;_6\mathrm&lbrace;C&rbrace; \to &lbrace;&rbrace;^&lbrace;14&rbrace;_7\mathrm&lbrace;N&rbrace; + &lbrace;&rbrace;^0_&lbrace;-1&rbrace;\beta + \bar&lbrace;\nu&rbrace;_e
$$

:::

### Beta-plus Decay (Positron Emission)

$$
&lbrace;&rbrace;^A_Z X \to &lbrace;&rbrace;^A_&lbrace;Z-1&rbrace; Y + &lbrace;&rbrace;^0_&lbrace;+1&rbrace;\beta^+ + \nu_e
$$

A proton converts to a neutron, emitting a positron and a neutrino:

$$
p \to n + e^+ + \nu_e
$$

### Gamma Decay

The nucleus transitions from a higher energy state to a lower energy state, emitting a gamma photon:

$$
&lbrace;&rbrace;^A_Z X^* \to &lbrace;&rbrace;^A_Z X + \gamma
$$

No change in $Z$ or $A$.

### Half-Life

The **half-life** $t_{1/2}$ is the time for half of the radioactive nuclei in a sample to decay.

### Exponential Decay Law

$$
N = N_0 e^&lbrace;-\lambda t&rbrace;
$$

where:

- $N$ = number of undecayed nuclei at time $t$
- $N_0$ = initial number of nuclei
- $\lambda$ = decay constant

### Relationship Between Half-Life and Decay Constant

$$
t_&lbrace;1/2&rbrace; = \frac&lbrace;\ln 2&rbrace;&lbrace;\lambda&rbrace;
$$

### Activity

The activity $A$ is the number of decays per unit time:

$$
A = \lambda N = \frac&lbrace;dN&rbrace;&lbrace;dt&rbrace;
$$

SI unit: becquerel ($\mathrm{Bq}$), where $1\mathrm{ Bq} = 1\mathrm{ decay/s}$.

:::info[Example]

A sample has a half-life of $5$ days and an initial activity of $800\mathrm{ Bq}$. Find the activity
after $15$ days.

$$
A = A_0 e^&lbrace;-\lambda t&rbrace;
$$

$$
\lambda = \frac&lbrace;\ln 2&rbrace;&lbrace;5&rbrace; = 0.1386\mathrm&lbrace; day&rbrace;^&lbrace;-1&rbrace;
$$

$$
A = 800 \times e^&lbrace;-0.1386 \times 15&rbrace; = 800 \times e^&lbrace;-2.079&rbrace; = 800 \times 0.125 = 100\mathrm&lbrace; Bq&rbrace;
$$

Alternatively: $15$ days $= 3$ half-lives, so $A = 800 \times (1/2)^3 = 100\mathrm{ Bq}$.

:::

### Background Radiation

Background radiation comes from natural and artificial sources:

- Cosmic rays
- Radon gas (from rocks and soil)
- Medical procedures (X-rays)
- Nuclear waste and fallout
- Radioactive materials in the Earth

---

## Nuclear Reactions

### Fission

A heavy nucleus splits into two (or more) lighter nuclei, releasing energy and neutrons.

**Example**:

$$
&lbrace;&rbrace;^&lbrace;235&rbrace;_&lbrace;92&rbrace;\mathrm&lbrace;U&rbrace; + &lbrace;&rbrace;^1_0 n \to &lbrace;&rbrace;^&lbrace;141&rbrace;_&lbrace;56&rbrace;\mathrm&lbrace;Ba&rbrace; + &lbrace;&rbrace;^&lbrace;92&rbrace;_&lbrace;36&rbrace;\mathrm&lbrace;Kr&rbrace; + 3&lbrace;&rbrace;^1_0 n + \mathrm&lbrace;energy&rbrace;
$$

### Chain Reaction

The neutrons released in fission can cause further fission events, creating a chain reaction.

- **Critical mass**: the minimum mass of fissile material needed to sustain a chain reaction.
- **Controlled fission**: used in nuclear power reactors (control rods absorb neutrons).
- **Uncontrolled fission**: nuclear weapons.

### Fusion

Light nuclei combine to form a heavier nucleus, releasing energy.

**Example** (proton-proton chain in the Sun):

$$
4&lbrace;&rbrace;^1_1\mathrm&lbrace;H&rbrace; \to &lbrace;&rbrace;^4_2\mathrm&lbrace;He&rbrace; + 2&lbrace;&rbrace;^0_&lbrace;+1&rbrace;\beta^+ + 2\nu_e + \mathrm&lbrace;energy&rbrace;
$$

### Conditions for Fusion

- Extremely high temperatures ($\gt 10^7\mathrm{ K}$) to overcome electrostatic repulsion.
- High density to increase collision rate.
- Sufficient confinement time.

### Binding Energy per Nucleon

The binding energy per nucleon curve shows:

- Light nuclei (up to Fe-56): fusion increases binding energy per nucleon (releases energy).
- Heavy nuclei (beyond Fe-56): fission increases binding energy per nucleon (releases energy).
- Iron-56 has the highest binding energy per nucleon (most stable nucleus).

| Nucleus                   | Binding Energy per Nucleon (MeV) |
| ------------------------- | -------------------------------- |
| ${}^2_1\mathrm{H}$        | 1.11                             |
| ${}^4_2\mathrm{He}$       | 7.07                             |
| ${}^{56}_{26}\mathrm{Fe}$ | 8.79                             |
| ${}^{235}_{92}\mathrm{U}$ | 7.59                             |

### Mass Defect and Binding Energy

The mass defect $\Delta m$ is the difference between the mass of a nucleus and the sum of the masses
of its individual nucleons:

$$
\Delta m = Zm_p + Nm_n - m_&lbrace;\mathrm&lbrace;nucleus&rbrace;&rbrace;
$$

The binding energy is:

$$
E_b = \Delta m \cdot c^2
$$

:::info[Example]

Calculate the binding energy of the helium-4 nucleus. ($m_p = 1.00728\mathrm{ u}$,
$m_n = 1.00867\mathrm{ u}$, $m_{\alpha} = 4.00151\mathrm{ u}$,
$1\mathrm{ u} = 931.5\mathrm{ MeV}/c^2$)

$$
\Delta m = 2(1.00728) + 2(1.00867) - 4.00151 = 2.01456 + 2.01734 - 4.00151 = 0.03039\mathrm&lbrace; u&rbrace;
$$

$$
E_b = 0.03039 \times 931.5 = 28.3\mathrm&lbrace; MeV&rbrace;
$$

Binding energy per nucleon $= \dfrac{28.3}{4} = 7.08\mathrm{ MeV}$.

:::

---

## Mass-Energy Equivalence

### Einstein's Equation

$$
E = mc^2
$$

where $c = 3.0 \times 10^8\mathrm{ m/s}$.

This shows that mass and energy are equivalent and can be converted into each other.

### Energy-Mass Unit Conversion

$$
1\mathrm&lbrace; u&rbrace; = 931.5\mathrm&lbrace; MeV&rbrace;/c^2
$$

$$
1\mathrm&lbrace; eV&rbrace; = 1.602 \times 10^&lbrace;-19&rbrace;\mathrm&lbrace; J&rbrace;
$$

---

## The Photoelectric Effect

<PhetSimulation simulationId="photoelectric" title="Photoelectric Effect" />

Shine light of different wavelengths and intensities onto a metal surface and observe the emission
of photoelectrons. Investigate how frequency, intensity, and the work function affect the maximum
kinetic energy.

### Phenomenon

When light above a certain frequency shines on a metal surface, electrons are emitted
(photoelectrons).

### Key Observations

1. Electrons are emitted only if the frequency exceeds a **threshold frequency** $f_0$.
2. The maximum kinetic energy of photoelectrons depends on frequency, not intensity.
3. Increasing intensity increases the number of photoelectrons (current), not their energy.
4. Emission is instantaneous (no time delay).

### Einstein's Explanation

Light consists of photons, each with energy $E = hf$. A single photon can eject one electron if
$hf \ge \phi$.

$$
E_&lbrace;k,\max&rbrace; = hf - \phi
$$

where $\phi = hf_0$ is the **work function** (minimum energy to free an electron from the metal).

### Key Equations

$$
E_&lbrace;k,\max&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_&lbrace;\max&rbrace;^2 = eV_s
$$

where $V_s$ is the stopping potential.

$$
hf = \phi + E_&lbrace;k,\max&rbrace;
$$

### Graph of $E_{k,\max}$ vs $f$

- Gradient $= h$ (Planck's constant)
- $x$-intercept $= f_0$ (threshold frequency)
- $y$-intercept $= -\phi$

:::info[Example]

The work function of sodium is $2.28\mathrm{ eV}$. Find the maximum kinetic energy of photoelectrons
when light of wavelength $400\mathrm{ nm}$ is incident.

$$
E_&lbrace;\mathrm&lbrace;photon&rbrace;&rbrace; = \frac&lbrace;hc&rbrace;&lbrace;\lambda&rbrace; = \frac&lbrace;1240\mathrm&lbrace; eV&rbrace;\cdot\mathrm&lbrace;nm&rbrace;&rbrace;&lbrace;400\mathrm&lbrace; nm&rbrace;&rbrace; = 3.10\mathrm&lbrace; eV&rbrace;
$$

$$
E_&lbrace;k,\max&rbrace; = 3.10 - 2.28 = 0.82\mathrm&lbrace; eV&rbrace;
$$

:::

---

## Wave-Particle Duality

### de Broglie Wavelength

All matter has wave-like properties. The de Broglie wavelength of a particle:

$$
\lambda = \frac&lbrace;h&rbrace;&lbrace;p&rbrace; = \frac&lbrace;h&rbrace;&lbrace;mv&rbrace;
$$

where $h = 6.626 \times 10^{-34}\mathrm{ J}\cdot\mathrm{s}$ is Planck's constant.

:::info[Example]

Find the de Broglie wavelength of an electron moving at $2 \times 10^6\mathrm{ m/s}$.
($m_e = 9.109 \times 10^{-31}\mathrm{ kg}$)

$$
\lambda = \frac&lbrace;6.626 \times 10^&lbrace;-34&rbrace;&rbrace;&lbrace;9.109 \times 10^&lbrace;-31&rbrace; \times 2 \times 10^6&rbrace; = \frac&lbrace;6.626 \times 10^&lbrace;-34&rbrace;&rbrace;&lbrace;1.822 \times 10^&lbrace;-24&rbrace;&rbrace; = 3.64 \times 10^&lbrace;-10&rbrace;\mathrm&lbrace; m&rbrace; = 0.364\mathrm&lbrace; nm&rbrace;
$$

This is comparable to X-ray wavelengths, explaining electron diffraction.

:::

### Davisson-Germer Experiment

Confirmed de Broglie's hypothesis by observing the diffraction of electrons by a crystal lattice.

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Uranium-238 undergoes alpha decay. What is the daughter nucleus?

$$
&lbrace;&rbrace;^&lbrace;238&rbrace;_&lbrace;92&rbrace;\mathrm&lbrace;U&rbrace; \to &lbrace;&rbrace;^&lbrace;234&rbrace;_&lbrace;90&rbrace;\mathrm&lbrace;Th&rbrace; + &lbrace;&rbrace;^4_2\alpha
$$

The daughter is thorium-234.

### Question 2 (Paper 2 style)

A radioactive isotope has a half-life of 8 hours. A sample initially has an activity of
$1200\mathrm{ Bq}$.

**(a)** Find the activity after 24 hours.

$$
n = \frac&lbrace;24&rbrace;&lbrace;8&rbrace; = 3 \mathrm&lbrace; half-lives&rbrace;
$$

$$
A = 1200 \times \left(\frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right)^3 = 150\mathrm&lbrace; Bq&rbrace;
$$

**(b)** Find the decay constant.

$$
\lambda = \frac&lbrace;\ln 2&rbrace;&lbrace;t_&lbrace;1/2&rbrace;&rbrace; = \frac&lbrace;0.693&rbrace;&lbrace;8 \times 3600&rbrace; = 2.41 \times 10^&lbrace;-5&rbrace;\mathrm&lbrace; s&rbrace;^&lbrace;-1&rbrace;
$$

**(c)** How many undecayed nuclei remain after 24 hours?

$$
A = \lambda N \implies 150 = 2.41 \times 10^&lbrace;-5&rbrace; \times N
$$

$$
N = \frac&lbrace;150&rbrace;&lbrace;2.41 \times 10^&lbrace;-5&rbrace;&rbrace; = 6.22 \times 10^6
$$

### Question 3 (Paper 2 style)

The work function of a metal surface is $4.5\mathrm{ eV}$.

**(a)** Find the threshold frequency.

$$
f_0 = \frac&lbrace;\phi&rbrace;&lbrace;h&rbrace; = \frac&lbrace;4.5 \times 1.602 \times 10^&lbrace;-19&rbrace;&rbrace;&lbrace;6.626 \times 10^&lbrace;-34&rbrace;&rbrace; = \frac&lbrace;7.21 \times 10^&lbrace;-19&rbrace;&rbrace;&lbrace;6.626 \times 10^&lbrace;-34&rbrace;&rbrace; = 1.09 \times 10^&lbrace;15&rbrace;\mathrm&lbrace; Hz&rbrace;
$$

**(b)** Find the stopping potential when UV light of frequency $2.0 \times 10^{15}\mathrm{ Hz}$ is
incident.

$$
E_&lbrace;k,\max&rbrace; = hf - \phi = (6.626 \times 10^&lbrace;-34&rbrace;)(2.0 \times 10^&lbrace;15&rbrace;) - 4.5(1.602 \times 10^&lbrace;-19&rbrace;)
$$

$$
= 1.325 \times 10^&lbrace;-18&rbrace; - 7.21 \times 10^&lbrace;-19&rbrace; = 6.04 \times 10^&lbrace;-20&rbrace;\mathrm&lbrace; J&rbrace;
$$

$$
V_s = \frac&lbrace;E_&lbrace;k,\max&rbrace;&rbrace;&lbrace;e&rbrace; = \frac&lbrace;6.04 \times 10^&lbrace;-20&rbrace;&rbrace;&lbrace;1.602 \times 10^&lbrace;-19&rbrace;&rbrace; = 0.377\mathrm&lbrace; V&rbrace;
$$

### Question 4 (Paper 2 style)

Calculate the energy released when ${}^{235}\mathrm{U}$ undergoes fission to produce
${}^{141}\mathrm{Ba}$, ${}^{92}\mathrm{Kr}$, and 3 neutrons.

Masses: ${}^{235}\mathrm{U} = 235.044\mathrm{ u}$, ${}^{141}\mathrm{Ba} = 140.914\mathrm{ u}$,
${}^{92}\mathrm{Kr} = 91.926\mathrm{ u}$, $n = 1.00867\mathrm{ u}$.

$$
\Delta m = 235.044 - (140.914 + 91.926 + 3 \times 1.00867)
$$

$$
= 235.044 - (140.914 + 91.926 + 3.026) = 235.044 - 235.866 = -0.822\mathrm&lbrace; u&rbrace;
$$

Wait, that gives negative mass defect. Let me recalculate:

$$
\Delta m = 235.044 - 140.914 - 91.926 - 3(1.00867) = 235.044 - 140.914 - 91.926 - 3.026 = -0.822\mathrm&lbrace; u&rbrace;
$$

This indicates I should use the neutron as incoming:

$$
\Delta m = (235.044 + 1.00867) - (140.914 + 91.926 + 3 \times 1.00867)
$$

$$
= 236.053 - 235.866 = 0.187\mathrm&lbrace; u&rbrace;
$$

$$
E = 0.187 \times 931.5 = 174\mathrm&lbrace; MeV&rbrace;
$$

---

## Summary

| Concept               | Formula                                |
| --------------------- | -------------------------------------- |
| Bohr energy levels    | $E_n = \dfrac{-13.6\mathrm{ eV}}{n^2}$ |
| Photon energy         | $E = hf = \dfrac{hc}{\lambda}$         |
| Half-life             | $t_{1/2} = \dfrac{\ln 2}{\lambda}$     |
| Decay law             | $N = N_0 e^{-\lambda t}$               |
| Activity              | $A = \lambda N$                        |
| Mass-energy           | $E = mc^2$                             |
| Binding energy        | $E_b = \Delta m \cdot c^2$             |
| Photoelectric effect  | $E_{k,\max} = hf - \phi$               |
| de Broglie wavelength | $\lambda = \dfrac{h}{mv}$              |
| Nuclear radius        | $R = R_0 A^{1/3}$                      |

:::tip[Exam Strategy]

For nuclear physics, always balance your nuclear equations (conservation of $A$ and $Z$). For
photoelectric effect problems, check units carefully (eV vs J). For decay calculations, clearly
identify the half-life and number of half-lives elapsed.

:::

---

## Electron Energy Levels and Transitions (Extended)

### Energy Level Diagrams

Energy level diagrams show the allowed energies of electrons in an atom:

- The ground state is the lowest energy level ($n = 1$).
- Excited states are higher energy levels ($n = 2, 3, \ldots$).
- The ionisation energy is the energy needed to remove an electron from the ground state to
  infinity.
- Transition lines represent photon absorption (upward) or emission (downward).

### Absorption Spectrum vs Emission Spectrum

| Feature      | Emission                              | Absorption                              |
| ------------ | ------------------------------------- | --------------------------------------- |
| How produced | Hot gas emits light                   | Cool gas absorbs from continuous source |
| Appearance   | Bright lines on dark background       | Dark lines on continuous spectrum       |
| Information  | Wavelengths emitted by the element    | Wavelengths absorbed by the element     |
| Use          | Identifying elements in stars/nebulae | Identifying elements in atmospheres     |

### Series Limits

Each spectral series has a series limit (convergence limit) corresponding to transitions to/from the
continuum (ionised state).

For the Lyman series: $\lambda_{\mathrm{limit}} = \dfrac{hc}{13.6\mathrm{ eV}} = 91.2\mathrm{ nm}$.

---

## Nuclear Physics Extended

### Nuclear Binding Energy Curve

The binding energy per nucleon curve reveals:

- **Light nuclei** (A $\lt 56$): Can release energy through fusion (combining).
- **Iron-56**: Peak of the curve, most stable nucleus.
- **Heavy nuclei** (A $\gt 56$): Can release energy through fission (splitting).
- **Very light nuclei** (A $\lt 4$): Have very low binding energy per nucleon, large energy release
  in fusion.

### Energy from Fission

:::info[Example]

Calculate the energy released when one nucleus of U-235 fissions into Ba-141 and Kr-92 with 3
neutrons.

Masses: U-235 = $235.0439\mathrm{ u}$, Ba-141 = $140.9139\mathrm{ u}$, Kr-92 = $91.8970\mathrm{ u}$,
n = $1.00867\mathrm{ u}$.

Reactants: $235.0439 + 1.00867 = 236.0526\mathrm{ u}$

Products: $140.9139 + 91.8970 + 3(1.00867) = 140.9139 + 91.8970 + 3.0260 = 235.8369\mathrm{ u}$

Mass defect: $236.0526 - 235.8369 = 0.2157\mathrm{ u}$

Energy released: $0.2157 \times 931.5 = 200.9\mathrm{ MeV}$

:::

### Nuclear Reactors

Key components:

- **Fuel rods**: contain fissile material (U-235 or Pu-239).
- **Moderator**: slows down neutrons (water, heavy water, graphite).
- **Control rods**: absorb neutrons to control the rate of fission (boron, cadmium).
- **Coolant**: removes heat from the reactor (water, liquid sodium).
- **Shielding**: protects workers from radiation (concrete, lead).

### Nuclear Waste

| Type                               | Half-life          | Handling                      |
| ---------------------------------- | ------------------ | ----------------------------- |
| High-level (fission products)      | Years to centuries | Deep geological disposal      |
| Transuranic waste                  | Thousands of years | Deep geological disposal      |
| Low-level (contaminated materials) | Days to years      | Compaction and shallow burial |

---

## Quantum Mechanics Concepts

### Wave-Particle Duality

Both matter and electromagnetic radiation exhibit wave-like and particle-like properties depending
on the experiment.

| Phenomenon | Wave Nature               | Particle Nature                          |
| ---------- | ------------------------- | ---------------------------------------- |
| Light      | Diffraction, interference | Photoelectric effect, Compton scattering |
| Electrons  | Electron diffraction      | Quantised energy levels                  |

### Heisenberg Uncertainty Principle

$$
\Delta x \cdot \Delta p \ge \frac&lbrace;h&rbrace;&lbrace;2\pi&rbrace;
$$

It is fundamentally impossible to know both the exact position and exact momentum of a particle
simultaneously.

### Compton Scattering

When X-rays scatter off electrons, the scattered X-ray has a longer wavelength:

$$
\Delta\lambda = \frac&lbrace;h&rbrace;&lbrace;m_e c&rbrace;(1 - \cos\theta)
$$

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

The isotope Po-210 undergoes alpha decay with a half-life of 138 days.

**(a)** Write the nuclear equation for the decay.

$$
&lbrace;&rbrace;^&lbrace;210&rbrace;_&lbrace;84&rbrace;\mathrm&lbrace;Po&rbrace; \to &lbrace;&rbrace;^&lbrace;206&rbrace;_&lbrace;82&rbrace;\mathrm&lbrace;Pb&rbrace; + &lbrace;&rbrace;^4_2\alpha
$$

**(b)** A sample of Po-210 has an initial activity of $800\mathrm{ Bq}$. Find the activity after 1
year (365 days).

Number of half-lives: $n = \dfrac{365}{138} = 2.645$.

$$
A = 800 \times \left(\frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right)^&lbrace;2.645&rbrace; = 800 \times 0.162 = 129.6\mathrm&lbrace; Bq&rbrace;
$$

**(c)** Find the number of Po-210 nuclei in the initial sample.

$$
\lambda = \frac&lbrace;\ln 2&rbrace;&lbrace;138 \times 86400&rbrace; = 5.83 \times 10^&lbrace;-8&rbrace;\mathrm&lbrace; s&rbrace;^&lbrace;-1&rbrace;
$$

$$
N = \frac&lbrace;A&rbrace;&lbrace;\lambda&rbrace; = \frac&lbrace;800&rbrace;&lbrace;5.83 \times 10^&lbrace;-8&rbrace;&rbrace; = 1.37 \times 10^&lbrace;10&rbrace;
$$

**(d)** Calculate the mass of the initial sample.

$$
m = \frac&lbrace;N \times 210&rbrace;&lbrace;N_A&rbrace; = \frac&lbrace;1.37 \times 10^&lbrace;10&rbrace; \times 210&rbrace;&lbrace;6.022 \times 10^&lbrace;23&rbrace;&rbrace; = 4.78 \times 10^&lbrace;-12&rbrace;\mathrm&lbrace; g&rbrace;
$$

### Question 6 (Paper 1 style)

Which of the following radiations has the highest ionising power and the lowest penetrating power?

A. Alpha particles B. Beta particles C. Gamma rays D. X-rays

**Answer: A.** Alpha particles are the most ionising and the least penetrating.

### Question 7 (Paper 2 style)

An electron is accelerated through a potential difference of $500\mathrm{ V}$.

**(a)** Calculate the kinetic energy of the electron in eV and J.

$$
E_k = 500\mathrm&lbrace; eV&rbrace; = 500 \times 1.602 \times 10^&lbrace;-19&rbrace; = 8.01 \times 10^&lbrace;-17&rbrace;\mathrm&lbrace; J&rbrace;
$$

**(b)** Calculate the de Broglie wavelength of the electron.

$$
v = \sqrt&lbrace;\frac&lbrace;2E_k&rbrace;&lbrace;m_e&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;2 \times 8.01 \times 10^&lbrace;-17&rbrace;&rbrace;&lbrace;9.109 \times 10^&lbrace;-31&rbrace;&rbrace;&rbrace; = \sqrt&lbrace;1.759 \times 10^&lbrace;14&rbrace;&rbrace; = 1.326 \times 10^7\mathrm&lbrace; m/s&rbrace;
$$

$$
\lambda = \frac&lbrace;h&rbrace;&lbrace;mv&rbrace; = \frac&lbrace;6.626 \times 10^&lbrace;-34&rbrace;&rbrace;&lbrace;9.109 \times 10^&lbrace;-31&rbrace; \times 1.326 \times 10^7&rbrace; = \frac&lbrace;6.626 \times 10^&lbrace;-34&rbrace;&rbrace;&lbrace;1.208 \times 10^&lbrace;-23&rbrace;&rbrace; = 5.49 \times 10^&lbrace;-11&rbrace;\mathrm&lbrace; m&rbrace;
$$

This wavelength is comparable to atomic spacing, suitable for electron diffraction experiments.
