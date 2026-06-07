---
slug: wrap
date: 2024-01-01T00:00:00Z
categories:
  - ib
  - ib-physics
---
## Radioactive Decay

Radioactive decay is a random and spontaneous process by which an unstable nucleus emits radiation
To become more stable. It is unaffected by temperature, pressure, chemical bonding, or any external
Conditions.

### Types of Radiation

| Type       | Symbol                          | Charge | Mass (u) | Penetrating Power | Ionising Power | Stopped By            |
| :--------- | :------------------------------ | :----- | :------- | :---------------- | :------------- | :-------------------- |
| Alpha      | $\alpha$ ($^4_2\mathrm{He}$)    | +2e    | 4        | Low               | High           | Paper / few cm of air |
| Beta-minus | $\beta^-$ ($^0_{-1}\mathrm{e}$) | -1e    | ~0       | Medium            | Medium         | Few mm of aluminium   |
| Beta-plus  | $\beta^+$ ($^0_{+1}\mathrm{e}$) | +1e    | ~0       | Medium            | Medium         | Few mm of aluminium   |
| Gamma      | $\gamma$                        | 0      | 0        | High              | Low            | Several cm of lead    |

### Decay Equations

**Alpha decay:** The nucleus emits a helium-4 nucleus (2 protons + 2 neutrons).

$$
^{A}_{Z}\mathrm{X} \rightarrow ^{A-4}_{Z-2}\mathrm{Y} + ^4_2\mathrm{He}
$$

**Beta-minus decay:** A neutron converts to a proton, emitting an electron and an antineutrino.

$$
^{A}_{Z}\mathrm{X} \rightarrow ^{A}_{Z+1}\mathrm{Y} + ^0_{-1}\mathrm{e} + \bar{\nu}_e
$$

**Beta-plus decay:** A proton converts to a neutron, emitting a positron and a neutrino.

$$
^{A}_{Z}\mathrm{X} \rightarrow ^{A}_{Z-1}\mathrm{Y} + ^0_{+1}\mathrm{e} + \nu_e
$$

**Gamma emission:** An excited nucleus releases energy as a photon. No change in A or Z.

$$
^{A}_{Z}\mathrm{X}^* \rightarrow ^{A}_{Z}\mathrm{X} + \gamma
$$

---

## Half-Life and Activity

### Half-Life ($T_{1/2}$)

The half-life is the time required for half of the radioactive nuclei in a sample to decay. It is a
Constant for a particular isotope and is independent of the initial quantity.

After $n$ half-lives, the fraction remaining is:

$$
\frac{N}{N_0} = \left(\frac{1}{2}\right)^n
$$

| Half-lives elapsed | Fraction remaining | Percentage remaining |
| :----------------- | :----------------- | :------------------- |
| 0                  | 1                  | 100%                 |
| 1                  | 1/2                | 50%                  |
| 2                  | 1/4                | 25%                  |
| 3                  | 1/8                | 12.5%                |
| 4                  | 1/16               | 6.25%                |

### Activity

Activity ($A$) is the number of decays per second, measured in becquerels (Bq), where 1 Bq = 1 decay
Per second.

$$
A = \lambda N
$$

Where $\lambda$ is the decay constant and $N$ is the number of undecayed nuclei.

### The Decay Law

The number of undecayed nuclei decreases exponentially:

$$
N = N_0 e^{-\lambda t}
$$

$$
A = A_0 e^{-\lambda t}
$$

The relationship between half-life and decay constant:

$$
T_{1/2} = \frac{\ln 2}{\lambda}
$$

### Worked Example: Radioactive Decay

**Question:** A sample of Iodine-131 has a half-life of 8.04 days and an initial activity of 400 Bq.
What is its activity after 30 days?

**Solution:**

Method 1 (using the decay law):

$$
\lambda = \frac{\ln 2}{T_{1/2}} = \frac{0.693}{8.04} = 0.0862 \mathrm{ days}^{-1}
$$

$$
A = A_0 e^{-\lambda t} = 400 \times e^{-(0.0862)(30)} = 400 \times e^{-2.586} = 400 \times 0.0752 = 30.1 \mathrm{ Bq}
$$

Method 2 (using half-lives):

$$
N = \frac{30}{8.04} = 3.73 \mathrm{ half-lives}
$$

$$
A = 400 \times \left(\frac{1}{2}\right)^{3.73} = 400 \times 0.0752 = 30.1 \mathrm{ Bq}
$$

---

## Nuclear Reactions and Binding Energy

### Mass Defect

The mass defect ($\Delta m$) is the difference between the mass of a nucleus and the sum of the
Masses of its constituent nucleons (protons and neutrons):

$$
\Delta m = Zm_p + (A-Z)m_n - m_{\mathrm{nucleus}}
$$

The mass defect arises because energy is released when nucleons bind together. By $E = mc^2$This
"lost" mass is converted to binding energy.

### Binding Energy

The binding energy ($E_b$) is the energy required to completely separate a nucleus into its
Constituent protons and neutrons:

$$
E_b = \Delta m \cdot c^2
$$

**Binding energy per nucleon** is a more useful measure for comparing nuclei:

$$
\frac{E_b}{A} = \frac{\Delta m \cdot c^2}{A}
$$

- Iron-56 ($^{56}_{26}\mathrm{Fe}$) has the highest binding energy per nucleon (~8.8 MeV/nucleon),
  making it the most stable nucleus.
- Light nuclei (A &lt; 56) can **increase** binding energy per nucleon through **fusion**.
- Heavy nuclei (A &gt; 56) can **increase** binding energy per nucleon through **fission**.

### Worked Example: Binding Energy

**Question:** Calculate the binding energy per nucleon of Helium-4. Given: $m_p = 1.00728$ u,
$m_n = 1.00867$ u, $m_{\mathrm{He-4}} = 4.00150$ u, $1 \mathrm{ u} = 931.5$ MeV/c².

**Solution:**

$$
\Delta m = 2m_p + 2m_n - m_{\mathrm{He-4}} = 2(1.00728) + 2(1.00867) - 4.00150 = 2.01456 + 2.01734 - 4.00150 = 0.03040 \mathrm{ u}
$$

$$
E_b = \Delta m \cdot c^2 = 0.03040 \times 931.5 = 28.3 \mathrm{ MeV}
$$

$$
\frac{E_b}{A} = \frac{28.3}{4} = 7.08 \mathrm{ MeV/nucleon}
$$

### Fission vs Fusion

| Feature        | Fission                                  | Fusion                                          |
| :------------- | :--------------------------------------- | :---------------------------------------------- |
| Process        | Heavy nucleus splits into lighter nuclei | Light nuclei combine to form a heavier nucleus  |
| Energy release | ~200 MeV per fission                     | ~17.6 MeV per fusion (D-T)                      |
| Fuel           | Uranium-235, Plutonium-239               | Deuterium, Tritium, Helium-3                    |
| By-products    | Radioactive waste                        | Helium (non-radioactive)                        |
| Conditions     | Neutron bombardment                      | Extreme temperature ($\sim 10^8$ K) and density |
| Chain reaction | Yes (self-sustaining with critical mass) | No (requires continuous conditions)             |

---

## The Photoelectric Effect

The photoelectric effect is the emission of electrons from a metal surface when light of sufficient
Frequency is incident upon it. It provided key evidence for the particle nature of light.

### Key Observations

1. **Threshold frequency ($f_0$):** Electrons are only emitted if the frequency of the incident
   light exceeds a minimum value, regardless of intensity.
2. **Instantaneous emission:** Electrons are emitted immediately — there is no time delay, even at
   low intensity.
3. **Intensity effect:** Increasing the intensity of light above $f_0$ increases the **number** of
   photoelectrons, not their maximum kinetic energy.
4. **Frequency effect:** Increasing the frequency of light above $f_0$ increases the **maximum
   kinetic energy** of the photoelectrons.

### Einstein's Photoelectric Equation

$$
E_{k,\mathrm{max}} = hf - \Phi
$$

Where:

- $E_{k,\mathrm{max}}$ is the maximum kinetic energy of emitted electrons (J)
- $h = 6.63 \times 10^{-34}$ Js is Planck's constant
- $f$ is the frequency of incident light (Hz)
- $\Phi = hf_0$ is the work function of the metal (J) — the minimum energy needed to liberate an
  electron

**Work function values:**

| Metal    | $\Phi$ (eV) |
| :------- | :---------- |
| Cesium   | 2.1         |
| Sodium   | 2.3         |
| Zinc     | 4.3         |
| Copper   | 4.7         |
| Platinum | 5.6         |

### Why Classical Wave Theory Fails

Classical theory predicts that the energy of light depends on intensity, not frequency. It cannot
Explain:

- The existence of a threshold frequency.
- The instantaneous nature of emission.
- The independence of $E_{k,\mathrm{max}}$ from intensity.

Einstein's explanation: Light consists of discrete packets of energy called **photons**, each with
Energy $E = hf$. One photon interacts with one electron. If $hf \lt \Phi$No emission occurs
Regardless of intensity.

---

## Atomic Energy Levels

### Bohr Model of Hydrogen

Niels Bohr proposed that electrons in hydrogen atoms occupy discrete energy levels (orbits) with
Quantised energies:

$$
E_n = -\frac{13.6}{n^2} \mathrm{ eV}
$$

Where $n = 1, 2, 3, ...$ is the principal quantum number.

- $n = 1$: Ground state ($E_1 = -13.6$ eV)
- $n = 2$: First excited state ($E_2 = -3.40$ eV)
- $n = \infty$: Ionisation ($E_\infty = 0$ eV)

### Photon Emission and Absorption

When an electron transitions between energy levels, a photon is emitted or absorbed:

$$
\Delta E = E_{\mathrm{higher}} - E_{\mathrm{lower}} = hf = \frac`\{hc}`{\lambda}
$$

- **Emission:** Electron drops from a higher level to a lower level; a photon is released.
- **Absorption:** A photon of exactly the right energy is absorbed; the electron jumps to a higher
  level.

### Spectral Series

Transitions ending at a particular level produce a series of spectral lines:

| Series  | Final level ($n_f$) | Region of Spectrum |
| :------ | :------------------ | :----------------- |
| Lyman   | 1                   | Ultraviolet        |
| Balmer  | 2                   | Visible            |
| Paschen | 3                   | Infrared           |

### Worked Example: Energy Levels

**Question:** An electron in a hydrogen atom transitions from $n = 4$ to $n = 2$. What is the
Wavelength of the emitted photon?

**Solution:**

$$
\Delta E = E_4 - E_2 = \left(-\frac{13.6}{16}\right) - \left(-\frac{13.6}{4}\right) = -0.85 - (-3.40) = 2.55 \mathrm{ eV}
$$

Convert to joules: $\Delta E = 2.55 \times 1.60 \times 10^{-19} = 4.08 \times 10^{-19}$ J.

$$
\lambda = \frac`\{hc}`{\Delta E} = \frac{(6.63 \times 10^{-34})(3.0 \times 10^8)}{4.08 \times 10^{-19}} = 4.87 \times 10^{-7} \mathrm{ m} = 487 \mathrm{ nm}
$$

This is in the visible (blue-green) region — it is the $H_\beta$ line of the Balmer series.

---

## Wave-Particle Duality

### De Broglie Wavelength

Louis de Broglie proposed that all matter exhibits wave-like properties. The de Broglie wavelength
Is:

$$
\lambda = \frac{h}{p} = \frac{h}`\{mv}`
$$

Where $p$ is the momentum of the particle.

**Significance:** The wave nature of matter explains the quantised energy levels in the Bohr model —
An electron orbit is stable only when a whole number of wavelengths fits around the orbit (standing
Wave condition):

$$
N\lambda = 2\pi r \quad \Rightarrow \quad n\frac{h}`\{mv}` = 2\pi r \quad \Rightarrow \quad mvr = \frac`\{nh}`{2\pi}
$$

This is precisely Bohr's quantisation condition for angular momentum.

### Worked Example: De Broglie Wavelength

**Question:** What is the de Broglie wavelength of an electron accelerated through a potential
Difference of 50 V?

**Solution:**

The kinetic energy gained: $eV = \frac{1}{2}mv^2$.

$$
V = \sqrt{\frac{2eV}{m_e}} = \sqrt{\frac{2(1.60 \times 10^{-19})(50)}{9.11 \times 10^{-31}}} = \sqrt{1.76 \times 10^{13}} = 4.19 \times 10^6 \mathrm{ m/s}
$$

$$
\lambda = \frac{h}{m_e v} = \frac{6.63 \times 10^{-34}}{(9.11 \times 10^{-31})(4.19 \times 10^6)} = 1.74 \times 10^{-10} \mathrm{ m} = 0.174 \mathrm{ nm}
$$

This is comparable to the spacing between atoms in a crystal lattice, which is why electron
Diffraction is observable.

---

## Exam Tips for Nuclear and Quantum Physics

1. **Always check units in nuclear problems.** Mass defect is often given in atomic mass units (u) —
   convert to kg or use $1 \mathrm{ u} = 931.5$ MeV/c² directly. Energy may be in eV or MeV —
   convert to joules when using SI formulae.

2. **Distinguish between activity, count rate, and number of nuclei.** Activity ($A = \lambda N$) is
   the rate of decay. Count rate is what a detector measures (always less than activity). $N$ is the
   number of undecayed nuclei.

3. **The photoelectric effect requires $hf \geq \Phi$.** If the frequency is below the threshold, no
   electrons are emitted regardless of intensity. This is the single most important concept.

4. **Energy levels are negative.** The ground state has the most negative energy. An electron is
   free (ionised) when $E \geq 0$. Transitions to higher $n$ require energy input; transitions to
   lower $n$ release energy as photons.

5. **Know your spectral series.** Lyman (UV, to $n=1$), Balmer (visible, to $n=2$), Paschen (IR, to
   $n=3$). Be able to calculate the wavelength of any transition.

6. **De Broglie wavelength applies to matter, not photons.** For photons, use
   $\lambda = c/f = hc/E$. For matter particles, use $\lambda = h/p = h/(mv)$.

## Common Pitfalls

1. Rounding intermediate answers too early, which compounds errors in multi-step calculations.

2. Neglecting air resistance or assuming ideal conditions when the question specifies a real-world
   scenario.

3. Using the wrong equation from the data sheet — take time to read the full equation, including
   conditions and variable definitions.

4. Misidentifying the system boundary when applying conservation laws — define what is included
   before writing equations.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
