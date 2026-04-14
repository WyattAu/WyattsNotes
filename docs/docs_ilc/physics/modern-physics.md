---
title: Modern Physics
date: 2026-04-14
tags:
  - Physics
  - ILC
categories:
  - Physics
slug: modern-physics
---

# Modern Physics

Modern physics covers the physics of the very small (atomic and subatomic scale) and the very fast.
Key topics include the photoelectric effect, atomic models, nuclear physics, and radioactivity.

## The Photoelectric Effect (HL)

### Phenomenon

When light of sufficiently high frequency is incident on a metal surface, electrons are emitted.
This is the photoelectric effect.

### Key Observations

1. Electrons are emitted only if the frequency exceeds a **threshold frequency** $f_0$.
2. The maximum kinetic energy of emitted electrons depends on the frequency, not the intensity.
3. Increasing intensity increases the number of electrons emitted, not their energy.

### Einstein's Explanation

Light consists of discrete packets called **photons**, each with energy:

$$
E = hf
$$

where $h = 6.63 \times 10^{-34}\text{ J s}$ (Planck's constant) and $f$ is the frequency.

Einstein's photoelectric equation:

$$
hf = \phi + E_{k(\max)}
$$

where $\phi = hf_0$ is the work function (minimum energy to free an electron) and $E_{k(\max)}$ is
the maximum kinetic energy of the emitted electrons.

$$
E_{k(\max)} = hf - \phi = h(f - f_0)
$$

Alternatively using $E = hf = \frac{hc}{\lambda}$:

$$
E_{k(\max)} = \frac{hc}{\lambda} - \phi
$$

### Stopping Voltage

The stopping voltage $V_s$ is the voltage needed to stop the most energetic photoelectrons:

$$
eV_s = E_{k(\max)} = hf - \phi
$$

**Example (HL):** Light of wavelength $400\text{ nm}$ is incident on a metal surface with work
function $2.0\text{ eV}$. Find the maximum kinetic energy of the emitted electrons and the stopping
voltage.

$$
E = \frac{hc}{\lambda} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{400 \times 10^{-9}} = 4.97 \times 10^{-19}\text{ J} = 3.11\text{ eV}
$$

$$
E_{k(\max)} = 3.11 - 2.0 = 1.11\text{ eV}
$$

$$
V_s = \frac{1.11\text{ eV}}{e} = 1.11\text{ V}
$$

### Threshold Frequency (HL)

The threshold frequency is the minimum frequency for photoelectric emission:

$$
f_0 = \frac{\phi}{h}
$$

The threshold wavelength: $\lambda_0 = \frac{c}{f_0} = \frac{hc}{\phi}$.

## Atomic Models

### Thomson's Plum Pudding Model (OL/HL)

Atoms consist of a positively charged sphere with negatively charged electrons embedded in it.

Disproved by Rutherford's scattering experiment.

### Rutherford's Nuclear Model (OL/HL)

Rutherford fired alpha particles at thin gold foil. Most passed through, some were deflected at
large angles, and a few bounced back.

**Conclusions:**

1. The atom is mostly empty space.
2. There is a small, dense, positively charged nucleus.
3. Electrons orbit the nucleus.

**Why the Thomson model failed:** It could not explain large-angle scattering. The nuclear model,
with most mass concentrated in a tiny nucleus, explained the results.

### Bohr Model of the Atom (HL)

Postulates:

1. Electrons orbit the nucleus in fixed energy levels (stationary states) without radiating energy.
2. An electron can jump between levels by absorbing or emitting a photon of energy equal to the
   energy difference:

$$
hf = E_n - E_m
$$

3. Angular momentum is quantised: $mvr = \frac{nh}{2\pi}$.

### Energy Levels of Hydrogen (HL)

The energy of the $n$th level:

$$
E_n = -\frac{13.6\text{ eV}}{n^2}
$$

The energy of a photon emitted in a transition from level $n$ to level $m$ ($n > m$):

$$
\Delta E = 13.6\left(\frac{1}{m^2} - \frac{1}{n^2}\right)\text{ eV}
$$

**Example (HL):** Find the wavelength of light emitted when a hydrogen electron transitions from
$n = 3$ to $n = 2$.

$$
\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{9}\right) = 13.6 \times \frac{5}{36} = 1.889\text{ eV}
$$

$$
\lambda = \frac{hc}{\Delta E} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{1.889 \times 1.6 \times 10^{-19}} = \frac{1.989 \times 10^{-25}}{3.022 \times 10^{-19}} = 6.58 \times 10^{-7}\text{ m} = 658\text{ nm}
$$

This is in the visible (red) region -- the H-alpha line of the Balmer series.

## Wave-Particle Duality (HL)

### De Broglie Wavelength

All matter exhibits wave-like properties:

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

**Example (HL):** Find the de Broglie wavelength of an electron accelerated through a potential
difference of 100 V.

$$
eV = \frac{1}{2}mv^2 \implies v = \sqrt{\frac{2eV}{m}} = \sqrt{\frac{2 \times 1.6 \times 10^{-19} \times 100}{9.11 \times 10^{-31}}} = 5.93 \times 10^6\text{ m/s}
$$

$$
\lambda = \frac{6.63 \times 10^{-34}}{9.11 \times 10^{-31} \times 5.93 \times 10^6} = 1.23 \times 10^{-10}\text{ m} = 0.123\text{ nm}
$$

## Nuclear Physics

### Structure of the Nucleus (OL/HL)

- The nucleus contains protons (positive charge) and neutrons (no charge), collectively called
  nucleons.
- Atomic number $Z$ = number of protons.
- Mass number $A$ = number of protons + neutrons.
- Isotopes have the same $Z$ but different $A$.

### Nuclear Binding Energy (HL)

The mass defect $\Delta m$ is the difference between the mass of the nucleus and the sum of the
masses of its individual nucleons:

$$
\Delta m = Zm_p + (A - Z)m_n - m_{\text{nucleus}}
$$

The binding energy is:

$$
E_b = \Delta m \cdot c^2
$$

The binding energy per nucleon indicates nuclear stability. Iron-56 has the highest binding energy
per nucleon.

### Radioactivity (OL/HL)

Radioactive decay is a random, spontaneous process. Types of decay:

| Type             | Symbol                          | Change                                 |
| ---------------- | ------------------------------- | -------------------------------------- |
| Alpha decay      | $\alpha$ (${}^4_2\text{He}$)    | $Z$ decreases by 2, $A$ decreases by 4 |
| Beta-minus decay | $\beta^-$ (${}^0_{-1}\text{e}$) | $Z$ increases by 1, $A$ unchanged      |
| Gamma decay      | $\gamma$                        | No change in $Z$ or $A$                |

### Half-Life (OL/HL)

The half-life $t_{1/2}$ is the time for half of the radioactive nuclei to decay.

$$
N = N_0 \left(\frac{1}{2}\right)^{t/t_{1/2}}
$$

$$
N = N_0 e^{-\lambda t}
$$

where $\lambda = \frac{\ln 2}{t_{1/2}}$ is the decay constant.

**Example (OL):** A sample has a half-life of 8 days. After 24 days, what fraction remains?

$$
N = N_0 \left(\frac{1}{2}\right)^{24/8} = N_0 \left(\frac{1}{2}\right)^3 = \frac{N_0}{8}
$$

**Example (HL):** Cobalt-60 has a half-life of 5.27 years. Find its decay constant.

$$
\lambda = \frac{\ln 2}{5.27} = 0.1315\text{ yr}^{-1}
$$

### Nuclear Reactions (HL)

**Fission:** A heavy nucleus splits into lighter nuclei, releasing energy. Example:

$$
{}^{235}_{92}\text{U} + {}^1_0\text{n} \to {}^{141}_{56}\text{Ba} + {}^{92}_{36}\text{Kr} + 3{}^1_0\text{n} + \text{energy}
$$

**Fusion:** Light nuclei combine to form a heavier nucleus, releasing energy. Example:

$$
{}^2_1\text{H} + {}^3_1\text{H} \to {}^4_2\text{He} + {}^1_0\text{n} + \text{energy}
$$

## Common Pitfalls

1. **Photoelectric effect** -- it is the frequency, not the intensity, that determines whether
   electrons are emitted.
2. **Bohr model** -- the formula $E_n = -13.6/n^2$ applies only to hydrogen.
3. **Binding energy** -- divide by the mass number to get binding energy per nucleon for comparison.
4. **Half-life calculations** -- use the correct formula for the fraction remaining.
5. **Alpha vs beta decay** -- alpha decreases $A$ by 4; beta-minus increases $Z$ by 1.
6. **Unit conversions** -- 1 eV = $1.6 \times 10^{-19}$ J; use SI units throughout.

## Practice Questions

### Ordinary Level

1. Define the photoelectric effect.
2. State Rutherford's conclusions from the gold foil experiment.
3. Uranium-238 undergoes alpha decay. Write the nuclear equation and identify the daughter nucleus.
4. A radioactive isotope has a half-life of 6 hours. After 18 hours, what fraction of the original
   sample remains?

### Higher Level

1. Light of wavelength $300\text{ nm}$ is incident on a zinc surface ($\phi = 3.63\text{ eV}$). Find
   the maximum kinetic energy of photoelectrons in eV.
2. Calculate the first three energy levels of hydrogen. Find the wavelength of the photon emitted
   for a transition from $n = 4$ to $n = 1$.
3. Find the de Broglie wavelength of a neutron moving at $2 \times 10^4\text{ m/s}$
   ($m_n = 1.675 \times 10^{-27}\text{ kg}$).
4. The mass defect of helium-4 is $0.0304\text{ u}$ ($1\text{ u} = 931.5\text{ MeV/c}^2$). Find the
   binding energy per nucleon.
