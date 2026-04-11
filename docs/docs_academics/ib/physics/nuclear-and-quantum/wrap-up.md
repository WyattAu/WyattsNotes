---
title: Wrap Up
date: 2025-11-04T00:28:40.132Z
tags:
  - physics
categories:
  - physics
slug: wrap
---

<details>
<summary><strong>E.1 Structure of the Atom, E.2 Quantum Physics & E.3 Radioactive Decay</strong></summary>
1. **Question (E.2 & D.3 - HL Only):** In a photoelectric effect experiment, light of wavelength 400
   nm is incident on a metal surface with a work function of 2.28 eV. The emitted photoelectrons are
   then directed into a region of uniform magnetic field B = 1.5 mT, with their velocity
   perpendicular to the field. a) Calculate the maximum kinetic energy of the emitted
   photoelectrons, in joules. b) What is the radius of the circular path of the most energetic
   photoelectrons in the magnetic field? c) What is the minimum potential difference required to
   _stop_ these photoelectrons (the stopping potential)?

<details>
<summary>Answer</summary>
- **Strategy:** (a) Use Einstein's photoelectric equation. (b) Use the max KE to find the max speed, then use the formula for the radius of a charged particle in a B-field. (c) Relate stopping potential to max KE.
- **a) Maximum Kinetic Energy ($E_{k, \text{max}}$):**
  - Energy of incident photon: $E = hf = \frac{hc}{\lambda} = \frac{(6.63 \times 10^{-34})(3.0 \times 10^8)}{400 \times 10^{-9}} = 4.97 \times 10^{-19}$ J.
  - Convert photon energy to eV: $E = \frac{4.97 \times 10^{-19}}{1.60 \times 10^{-19}} = 3.11$ eV.
  - Photoelectric equation: $E_{k, \text{max}} = E - \Phi = 3.11 \text{ eV} - 2.28 \text{ eV} = 0.83$ eV.
  - Convert max KE back to joules: $E_{k, \text{max}} = 0.83 \text{ eV} \times (1.60 \times 10^{-19} \text{ J/eV}) = 1.33 \times 10^{-19}$ J.
- **b) Radius of Path:**
  - First, find the maximum speed of the electrons: $v_{\text{max}} = \sqrt{\frac{2E_{k, \text{max}}}{m_e}} = \sqrt{\frac{2(1.33 \times 10^{-19})}{9.11 \times 10^{-31}}} = 5.40 \times 10^5$ m/s.
  - The magnetic force provides the centripetal force: $evB = \frac{mv^2}{r}$.
  - Radius $r = \frac{m_e v_{\text{max}}}{eB} = \frac{(9.11 \times 10^{-31})(5.40 \times 10^5)}{(1.60 \times 10^{-19})(1.5 \times 10^{-3})} = 2.05 \times 10^{-3}$ m or 2.05 mm.
- **c) Stopping Potential ($V_s$):**
  - The stopping potential is the voltage required to do enough negative work to stop the most energetic electrons.
  - Work done by field = $eV_s$. This must equal the max KE.
  - $eV_s = E_{k, \text{max}}$.
  - The stopping potential in volts is numerically equal to the max KE in electron-volts.
  - $V_s = 0.83$ V.
<b>If you get this wrong, you should focus on:</b> The full photoelectric effect calculation (including unit conversions between J and eV), using the resulting kinetic energy to find particle speed, and applying principles of charged particle motion in a B-field. Also, the definition of stopping potential.
</details>

2. **Question (E.1 & A.5 - HL Only):** A hydrogen atom in the n=3 excited state is moving away from
   an observer at a relativistic speed. The atom de-excites, emitting a photon that an observer at
   rest with the atom would measure as a Balmer-alpha transition (n=3 to n=2). The observer on
   Earth, however, measures the wavelength of this photon to be 700 nm. a) What is the wavelength of
   the Balmer-alpha photon in its rest frame? b) What is the speed of the hydrogen atom relative to
   the Earth observer? c) From the Earth observer's perspective, what is the lifetime of the n=3
   excited state, if its proper lifetime is 10.0 ns?

<details>
<summary>Answer</summary>
- **Strategy:** (a) Use the Bohr model energy levels to find the proper wavelength. (b) Use the relativistic Doppler effect formula to find the speed. (c) Use the speed to find the Lorentz factor and apply time dilation.
- **a) Proper Wavelength ($\lambda_0$):**
  - Energy of the transition: $\Delta E = E_3 - E_2 = \left(-\frac{13.6}{3^2}\right) - \left(-\frac{13.6}{2^2}\right) = -1.511 - (-3.40) = 1.889$ eV.
  - Convert energy to joules: $\Delta E = 1.889 \times 1.6 \times 10^{-19} = 3.022 \times 10^{-19}$ J.
  - Photon wavelength: $\lambda_0 = \frac{hc}{\Delta E} = \frac{(6.63 \times 10^{-34})(3.0 \times 10^8)}{3.022 \times 10^{-19}} = 6.58 \times 10^{-7}$ m or 658 nm.
- **b) Relativistic Speed (v):**
  - The observed wavelength is $\lambda = 700$ nm. Since $\lambda > \lambda_0$, this is a redshift, confirming the atom is moving away.
  - Use the relativistic Doppler formula for light: $\lambda = \lambda_0 \sqrt{\frac{1+v/c}{1-v/c}}$.
  - $\left(\frac{\lambda}{\lambda_0}\right)^2 = \frac{1+v/c}{1-v/c} \implies \left(\frac{700}{658}\right)^2 = 1.132 = \frac{1+v/c}{1-v/c}$.
  - $1.132(1-v/c) = 1+v/c \implies 1.132 - 1.132(v/c) = 1 + v/c$.
  - $0.132 = 2.132(v/c) \implies v/c = \frac{0.132}{2.132} = 0.0619$.
  - The speed is $v = 0.0619c$.
- **c) Dilated Lifetime:**
  - The proper lifetime is $\Delta t_0 = 10.0$ ns.
  - First, find the Lorentz factor for $v=0.0619c$.
  - $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}} = \frac{1}{\sqrt{1 - (0.0619)^2}} = 1.0019$.
  - The lifetime measured by the Earth observer is $\Delta t = \gamma \Delta t_0 = 1.0019 \times 10.0 \text{ ns} = 10.019$ ns.
<b>If you get this wrong, you should focus on:</b> Calculating photon energies/wavelengths from the Bohr model, applying the full relativistic Doppler effect formula (not the approximation), and connecting the calculated speed to the time dilation formula.
</details>

3. **Question (E.3, E.4 & B.1):** A nuclear fission power plant generates 900 MW of electrical power
   with an overall efficiency of 35%. The plant uses Uranium-235. The fission of one U-235 nucleus
   releases 200 MeV of energy. a) What is the thermal power output of the reactor? b) How many U-235
   fissions must occur per second to produce this thermal power? c) Calculate the mass of U-235
   consumed in one year of operation. (1 year ≈ 3.15 x 10⁷ s).

<details>
<summary>Answer</summary>
- **Strategy:** (a) Use the definition of efficiency. (b) Find the energy per second and divide by the energy per fission. (c) Find the total number of fissions in a year, then use Avogadro's number and molar mass to find the total mass.
- **a) Thermal Power:**
  - Efficiency $\eta = \frac{P_{\text{electrical}}}{P_{\text{thermal}}}$.
  - $P_{\text{thermal}} = \frac{P_{\text{electrical}}}{\eta} = \frac{900 \times 10^6 \text{ W}}{0.35} = 2.57 \times 10^9$ W (or 2.57 GW).
- **b) Fissions per Second:**
  - First, convert the energy per fission to joules: $E_{\text{fission}} = 200 \text{ MeV} \times (1.6 \times 10^{-13} \text{ J/MeV}) = 3.2 \times 10^{-11}$ J.
  - The reactor produces $2.57 \times 10^9$ joules per second.
  - Fission rate = $\frac{P_{\text{thermal}}}{E_{\text{fission}}} = \frac{2.57 \times 10^9 \text{ J/s}}{3.2 \times 10^{-11} \text{ J/fission}} = 8.03 \times 10^{19}$ fissions/s.
- **c) Mass Consumed in One Year:**
  - Total fissions in one year = $(8.03 \times 10^{19} \text{ fissions/s}) \times (3.15 \times 10^7 \text{ s/year}) = 2.53 \times 10^{27}$ fissions.
  - Since one fission consumes one nucleus, this is the number of U-235 nuclei consumed.
  - Number of moles consumed = $\frac{\text{Number of nuclei}}{N_A} = \frac{2.53 \times 10^{27}}{6.02 \times 10^{23}} = 4.20 \times 10^3$ moles.
  - Mass consumed = (moles) x (molar mass). The molar mass of U-235 is approximately 0.235 kg/mol.
  - Mass = $(4.20 \times 10^3 \text{ mol}) \times (0.235 \text{ kg/mol}) \approx 987$ kg.
<b>If you get this wrong, you should focus on:</b> The definition of power plant efficiency, converting between MeV and Joules, and stoichiometry for nuclear reactions (connecting the number of nuclei to moles and mass using Avogadro's constant).
</details>

4. **Question (E.2 & E.3 - HL Only):** A sample of Cobalt-60 (half-life 5.27 years) is a gamma-ray
   source. It undergoes beta decay, and the resulting excited Nickel-60 nucleus immediately emits
   two gamma photons in succession with energies of 1.17 MeV and 1.33 MeV. a) Calculate the de
   Broglie wavelength of the 1.17 MeV photon. (This is a trick question). b) A particular sample has
   an initial activity of 100 GBq. What will its activity be after 10 years? c) A lead shield is
   used to absorb the gamma rays. The 1.33 MeV photons have a much greater penetrating power. If
   this shield reduces the intensity of the 1.33 MeV photons to 1/16 of its initial value, and the
   half-value thickness of lead for these photons is 1.2 cm, how thick is the shield?

<details>
<summary>Answer</summary>
- **Strategy:** (a) Test the understanding of wave-particle duality. (b) Use the radioactive decay law for activity. (c) Use the concept of half-value thickness for attenuation.
- **a) De Broglie Wavelength of a Photon:**
  - The de Broglie wavelength formula $\lambda = h/p$ applies to particles with rest mass. A photon is a massless particle. While it has momentum ($p=E/c$), the term "de Broglie wavelength" is specifically reserved for matter waves. The wavelength of a photon is simply its electromagnetic wavelength, calculated from its energy.
  - $E=hf=hc/\lambda \implies \lambda = hc/E$.
  - $\lambda = \frac{(6.63 \times 10^{-34})(3.0 \times 10^8)}{(1.17 \text{ MeV})(1.6 \times 10^{-13} \text{ J/MeV})} = 1.06 \times 10^{-12}$ m.
  - A good answer would state that the term is misapplied, but then calculate the electromagnetic wavelength.
- **b) Activity after 10 years:**
  - First, find the decay constant $\lambda = \frac{\ln 2}{T_{1/2}} = \frac{\ln 2}{5.27 \text{ years}} = 0.1315 \text{ years}^{-1}$.
  - Use the activity decay formula: $A = A_0 e^{-\lambda t}$.
  - $A = (100 \text{ GBq}) e^{-(0.1315)(10)} = 100 \times e^{-1.315} = 100 \times 0.268 = 26.8$ GBq.
- **c) Shield Thickness:**
  - The intensity is reduced to 1/16. Since $1/16 = (1/2)^4$, the thickness of the shield must be equal to 4 half-value thicknesses ($x_{1/2}$).
  - Thickness = $4 \times x_{1/2} = 4 \times 1.2 \text{ cm} = 4.8$ cm.
<b>If you get this wrong, you should focus on:</b> The domain of applicability for quantum concepts (de Broglie for matter, E=hc/λ for photons), the exponential decay formula for activity, and the concept of half-value thickness for radiation attenuation.
</details>

5. **Question (E.5 & D.1):** A main-sequence star is analyzed and found to have the same surface
   temperature as the Sun (5800 K) but is 100 times more luminous. a) Determine the radius of this
   star in terms of the Sun's radius ($R_\odot$). b) Assuming the star has a mass 4 times that of
   the Sun ($M_\odot$), what is the escape velocity from the surface of this star compared to the
   Sun's? c) A planet orbits this star at a distance equal to the Earth's orbital radius (1 AU).
   Would you expect this planet to be habitable? Justify your answer with a calculation involving
   the star's radiation intensity.

<details>
<summary>Answer</summary>
- **Strategy:** (a) Use the Stefan-Boltzmann law to relate luminosity, temperature, and radius. (b) Use the escape velocity formula. (c) Calculate the "solar constant" for this planet and compare it to Earth's.
- **a) Radius of the Star:**
  - Stefan-Boltzmann Law: $L = 4\pi \sigma R^2 T^4$.
  - For the star: $L_{\text{star}} = 100 L_\odot$. For the Sun: $L_\odot = 4\pi \sigma R_\odot^2 T_\odot^4$.
  - Since $T_{\text{star}} = T_\odot$, we can write:
  - $L_{\text{star}} = 4\pi \sigma R_{\text{star}}^2 T_\odot^4$.
  - Divide the two equations: $\frac{L_{\text{star}}}{L_\odot} = \frac{4\pi \sigma R_{\text{star}}^2 T_\odot^4}{4\pi \sigma R_\odot^2 T_\odot^4} = \left(\frac{R_{\text{star}}}{R_\odot}\right)^2$.
  - $100 = \left(\frac{R_{\text{star}}}{R_\odot}\right)^2 \implies \frac{R_{\text{star}}}{R_\odot} = \sqrt{100} = 10$.
  - The star has a radius 10 times that of the Sun.
- **b) Escape Velocity:**
  - Escape velocity formula: $v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$.
  - $v_{\text{esc, star}} = \sqrt{\frac{2G(4M_\odot)}{10R_\odot}} = \sqrt{\frac{4}{10}} \sqrt{\frac{2GM_\odot}{R_\odot}} = \sqrt{0.4} \cdot v_{\text{esc, Sun}}$.
  - $v_{\text{esc, star}} \approx 0.63 v_{\text{esc, Sun}}$. The escape velocity is lower.
- **c) Habitability:**
  - The intensity (solar constant) at a distance *d* is $S = \frac{L}{4\pi d^2}$.
  - For Earth: $S_{\text{Earth}} = \frac{L_\odot}{4\pi (1 \text{ AU})^2} \approx 1360$ W/m².
  - For the new planet: $S_{\text{planet}} = \frac{L_{\text{star}}}{4\pi (1 \text{ AU})^2} = \frac{100 L_\odot}{4\pi (1 \text{ AU})^2} = 100 \cdot S_{\text{Earth}}$.
  - The planet would receive about 136,000 W/m², 100 times more radiation than Earth. This would make it far too hot for liquid water and thus uninhabitable by life as we know it.
<b>If you get this wrong, you should focus on:</b> Using ratiometric reasoning with the Stefan-Boltzmann law to compare stars, the formula for escape velocity, and applying the inverse-square law to determine stellar intensity at a given distance (the habitable zone concept).
</details>
</details>

---

## Radioactive Decay

Radioactive decay is a random and spontaneous process by which an unstable nucleus emits radiation
to become more stable. It is unaffected by temperature, pressure, chemical bonding, or any external
conditions.

### Types of Radiation

| Type       | Symbol                          | Charge | Mass (u) | Penetrating Power | Ionising Power | Stopped By            |
| :--------- | :------------------------------ | :----- | :------- | :---------------- | :------------- | :-------------------- |
| Alpha      | $\alpha$ (${}^4_2\text{He}$)    | +2e    | 4        | Low               | High           | Paper / few cm of air |
| Beta-minus | $\beta^-$ (${}^0_{-1}\text{e}$) | -1e    | ~0       | Medium            | Medium         | Few mm of aluminium   |
| Beta-plus  | $\beta^+$ (${}^0_{+1}\text{e}$) | +1e    | ~0       | Medium            | Medium         | Few mm of aluminium   |
| Gamma      | $\gamma$                        | 0      | 0        | High              | Low            | Several cm of lead    |

### Decay Equations

**Alpha decay:** The nucleus emits a helium-4 nucleus (2 protons + 2 neutrons).

$$
{}^{A}_{Z}\text{X} \rightarrow {}^{A-4}_{Z-2}\text{Y} + {}^4_2\text{He}
$$

**Beta-minus decay:** A neutron converts to a proton, emitting an electron and an antineutrino.

$$
{}^{A}_{Z}\text{X} \rightarrow {}^{A}_{Z+1}\text{Y} + {}^0_{-1}\text{e} + \bar{\nu}_e
$$

**Beta-plus decay:** A proton converts to a neutron, emitting a positron and a neutrino.

$$
{}^{A}_{Z}\text{X} \rightarrow {}^{A}_{Z-1}\text{Y} + {}^0_{+1}\text{e} + \nu_e
$$

**Gamma emission:** An excited nucleus releases energy as a photon. No change in A or Z.

$$
{}^{A}_{Z}\text{X}^* \rightarrow {}^{A}_{Z}\text{X} + \gamma
$$

---

## Half-Life and Activity

### Half-Life ($T_{1/2}$)

The half-life is the time required for half of the radioactive nuclei in a sample to decay. It is a
constant for a particular isotope and is independent of the initial quantity.

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
per second.

$$
A = \lambda N
$$

where $\lambda$ is the decay constant and $N$ is the number of undecayed nuclei.

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
\lambda = \frac{\ln 2}{T_{1/2}} = \frac{0.693}{8.04} = 0.0862 \text{ days}^{-1}
$$

$$
A = A_0 e^{-\lambda t} = 400 \times e^{-(0.0862)(30)} = 400 \times e^{-2.586} = 400 \times 0.0752 = 30.1 \text{ Bq}
$$

Method 2 (using half-lives):

$$
n = \frac{30}{8.04} = 3.73 \text{ half-lives}
$$

$$
A = 400 \times \left(\frac{1}{2}\right)^{3.73} = 400 \times 0.0752 = 30.1 \text{ Bq}
$$

---

## Nuclear Reactions and Binding Energy

### Mass Defect

The mass defect ($\Delta m$) is the difference between the mass of a nucleus and the sum of the
masses of its constituent nucleons (protons and neutrons):

$$
\Delta m = Zm_p + (A-Z)m_n - m_{\text{nucleus}}
$$

The mass defect arises because energy is released when nucleons bind together. By $E = mc^2$, this
"lost" mass is converted to binding energy.

### Binding Energy

The binding energy ($E_b$) is the energy required to completely separate a nucleus into its
constituent protons and neutrons:

$$
E_b = \Delta m \cdot c^2
$$

**Binding energy per nucleon** is a more useful measure for comparing nuclei:

$$
\frac{E_b}{A} = \frac{\Delta m \cdot c^2}{A}
$$

- Iron-56 (${}^{56}_{26}\text{Fe}$) has the highest binding energy per nucleon (~8.8 MeV/nucleon),
  making it the most stable nucleus.
- Light nuclei (A &lt; 56) can **increase** binding energy per nucleon through **fusion**.
- Heavy nuclei (A &gt; 56) can **increase** binding energy per nucleon through **fission**.

### Worked Example: Binding Energy

**Question:** Calculate the binding energy per nucleon of Helium-4. Given: $m_p = 1.00728$ u,
$m_n = 1.00867$ u, $m_{\text{He-4}} = 4.00150$ u, $1 \text{ u} = 931.5$ MeV/c².

**Solution:**

$$
\Delta m = 2m_p + 2m_n - m_{\text{He-4}} = 2(1.00728) + 2(1.00867) - 4.00150 = 2.01456 + 2.01734 - 4.00150 = 0.03040 \text{ u}
$$

$$
E_b = \Delta m \cdot c^2 = 0.03040 \times 931.5 = 28.3 \text{ MeV}
$$

$$
\frac{E_b}{A} = \frac{28.3}{4} = 7.08 \text{ MeV/nucleon}
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
frequency is incident upon it. It provided key evidence for the particle nature of light.

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
E_{k,\text{max}} = hf - \Phi
$$

where:

- $E_{k,\text{max}}$ is the maximum kinetic energy of emitted electrons (J)
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
explain:

- The existence of a threshold frequency.
- The instantaneous nature of emission.
- The independence of $E_{k,\text{max}}$ from intensity.

Einstein's explanation: Light consists of discrete packets of energy called **photons**, each with
energy $E = hf$. One photon interacts with one electron. If $hf \lt \Phi$, no emission occurs
regardless of intensity.

---

## Atomic Energy Levels

### Bohr Model of Hydrogen

Niels Bohr proposed that electrons in hydrogen atoms occupy discrete energy levels (orbits) with
quantised energies:

$$
E_n = -\frac{13.6}{n^2} \text{ eV}
$$

where $n = 1, 2, 3, ...$ is the principal quantum number.

- $n = 1$: Ground state ($E_1 = -13.6$ eV)
- $n = 2$: First excited state ($E_2 = -3.40$ eV)
- $n = \infty$: Ionisation ($E_\infty = 0$ eV)

### Photon Emission and Absorption

When an electron transitions between energy levels, a photon is emitted or absorbed:

$$
\Delta E = E_{\text{higher}} - E_{\text{lower}} = hf = \frac{hc}{\lambda}
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
wavelength of the emitted photon?

**Solution:**

$$
\Delta E = E_4 - E_2 = \left(-\frac{13.6}{16}\right) - \left(-\frac{13.6}{4}\right) = -0.85 - (-3.40) = 2.55 \text{ eV}
$$

Convert to joules: $\Delta E = 2.55 \times 1.60 \times 10^{-19} = 4.08 \times 10^{-19}$ J.

$$
\lambda = \frac{hc}{\Delta E} = \frac{(6.63 \times 10^{-34})(3.0 \times 10^8)}{4.08 \times 10^{-19}} = 4.87 \times 10^{-7} \text{ m} = 487 \text{ nm}
$$

This is in the visible (blue-green) region — it is the $H_\beta$ line of the Balmer series.

---

## Wave-Particle Duality

### De Broglie Wavelength

Louis de Broglie proposed that all matter exhibits wave-like properties. The de Broglie wavelength
is:

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

where $p$ is the momentum of the particle.

**Significance:** The wave nature of matter explains the quantised energy levels in the Bohr model —
an electron orbit is stable only when a whole number of wavelengths fits around the orbit (standing
wave condition):

$$
n\lambda = 2\pi r \quad \Rightarrow \quad n\frac{h}{mv} = 2\pi r \quad \Rightarrow \quad mvr = \frac{nh}{2\pi}
$$

This is precisely Bohr's quantisation condition for angular momentum.

### Worked Example: De Broglie Wavelength

**Question:** What is the de Broglie wavelength of an electron accelerated through a potential
difference of 50 V?

**Solution:**

The kinetic energy gained: $eV = \frac{1}{2}mv^2$.

$$
v = \sqrt{\frac{2eV}{m_e}} = \sqrt{\frac{2(1.60 \times 10^{-19})(50)}{9.11 \times 10^{-31}}} = \sqrt{1.76 \times 10^{13}} = 4.19 \times 10^6 \text{ m/s}
$$

$$
\lambda = \frac{h}{m_e v} = \frac{6.63 \times 10^{-34}}{(9.11 \times 10^{-31})(4.19 \times 10^6)} = 1.74 \times 10^{-10} \text{ m} = 0.174 \text{ nm}
$$

This is comparable to the spacing between atoms in a crystal lattice, which is why electron
diffraction is observable.

---

## Exam Tips for Nuclear and Quantum Physics

1. **Always check units in nuclear problems.** Mass defect is often given in atomic mass units (u) —
   convert to kg or use $1 \text{ u} = 931.5$ MeV/c² directly. Energy may be in eV or MeV — convert
   to joules when using SI formulae.

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
