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
<p>

1. **Question (E.2 & D.3 - HL Only):** In a photoelectric effect experiment, light of wavelength 400 nm is incident on a metal surface with a work function of 2.28 eV. The emitted photoelectrons are then directed into a region of uniform magnetic field B = 1.5 mT, with their velocity perpendicular to the field.
   a) Calculate the maximum kinetic energy of the emitted photoelectrons, in joules.
   b) What is the radius of the circular path of the most energetic photoelectrons in the magnetic field?
   c) What is the minimum potential difference required to _stop_ these photoelectrons (the stopping potential)?

<details>
<summary>Answer</summary>
<p>
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
</p>
<p>
<b>If you get this wrong, you should focus on:</b> The full photoelectric effect calculation (including unit conversions between J and eV), using the resulting kinetic energy to find particle speed, and applying principles of charged particle motion in a B-field. Also, the definition of stopping potential.
</p>
</details>

2. **Question (E.1 & A.5 - HL Only):** A hydrogen atom in the n=3 excited state is moving away from an observer at a relativistic speed. The atom de-excites, emitting a photon that an observer at rest with the atom would measure as a Balmer-alpha transition (n=3 to n=2). The observer on Earth, however, measures the wavelength of this photon to be 700 nm.
   a) What is the wavelength of the Balmer-alpha photon in its rest frame?
   b) What is the speed of the hydrogen atom relative to the Earth observer?
   c) From the Earth observer's perspective, what is the lifetime of the n=3 excited state, if its proper lifetime is 10.0 ns?

<details>
<summary>Answer</summary>
<p>
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
</p>
<p>
<b>If you get this wrong, you should focus on:</b> Calculating photon energies/wavelengths from the Bohr model, applying the full relativistic Doppler effect formula (not the approximation), and connecting the calculated speed to the time dilation formula.
</p>
</details>

3. **Question (E.3, E.4 & B.1):** A nuclear fission power plant generates 900 MW of electrical power with an overall efficiency of 35%. The plant uses Uranium-235. The fission of one U-235 nucleus releases 200 MeV of energy.
   a) What is the thermal power output of the reactor?
   b) How many U-235 fissions must occur per second to produce this thermal power?
   c) Calculate the mass of U-235 consumed in one year of operation. (1 year ≈ 3.15 x 10⁷ s).

<details>
<summary>Answer</summary>
<p>
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
</p>
<p>
<b>If you get this wrong, you should focus on:</b> The definition of power plant efficiency, converting between MeV and Joules, and stoichiometry for nuclear reactions (connecting the number of nuclei to moles and mass using Avogadro's constant).
</p>
</details>

4. **Question (E.2 & E.3 - HL Only):** A sample of Cobalt-60 (half-life 5.27 years) is a gamma-ray source. It undergoes beta decay, and the resulting excited Nickel-60 nucleus immediately emits two gamma photons in succession with energies of 1.17 MeV and 1.33 MeV.
   a) Calculate the de Broglie wavelength of the 1.17 MeV photon. (This is a trick question).
   b) A particular sample has an initial activity of 100 GBq. What will its activity be after 10 years?
   c) A lead shield is used to absorb the gamma rays. The 1.33 MeV photons have a much greater penetrating power. If this shield reduces the intensity of the 1.33 MeV photons to 1/16 of its initial value, and the half-value thickness of lead for these photons is 1.2 cm, how thick is the shield?

<details>
<summary>Answer</summary>
<p>
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
</p>
<p>
<b>If you get this wrong, you should focus on:</b> The domain of applicability for quantum concepts (de Broglie for matter, E=hc/λ for photons), the exponential decay formula for activity, and the concept of half-value thickness for radiation attenuation.
</p>
</details>

5. **Question (E.5 & D.1):** A main-sequence star is analyzed and found to have the same surface temperature as the Sun (5800 K) but is 100 times more luminous.
   a) Determine the radius of this star in terms of the Sun's radius ($R_\odot$).
   b) Assuming the star has a mass 4 times that of the Sun ($M_\odot$), what is the escape velocity from the surface of this star compared to the Sun's?
   c) A planet orbits this star at a distance equal to the Earth's orbital radius (1 AU). Would you expect this planet to be habitable? Justify your answer with a calculation involving the star's radiation intensity.

<details>
<summary>Answer</summary>
<p>
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
</p>
<p>
<b>If you get this wrong, you should focus on:</b> Using ratiometric reasoning with the Stefan-Boltzmann law to compare stars, the formula for escape velocity, and applying the inverse-square law to determine stellar intensity at a given distance (the habitable zone concept).
</p>
</details>

</p>
</details>
