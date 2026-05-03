---
title: Nuclear Physics — Diagnostic Tests
description: "Hardest DSE nuclear questions: half-life calculations, binding energy per nucleon, radioactive decay chains, mass-energy equivalence, and nuclear reactions."
slug: diag-nuclear-physics
hide_table_of_contents: true
---

# Nuclear Physics — Diagnostic Tests

## Unit Tests

### UT-1: Radioactive Decay Chain with Multiple Half-Lives

**Question:**

A sample contains $1.0 \times 10^{20}$ atoms of isotope A, which decays to isotope B with a half-life of $5$ hours. Isotope B decays to stable isotope C with a half-life of $3$ hours. Initially, there is no B or C. Find (a) the number of A atoms remaining after $15$ hours, (b) the activity of A after $15$ hours, (c) the maximum number of B atoms present at any time, and (d) the approximate time at which B reaches its maximum.

**Solution:**

**(a) A atoms remaining after 15 hours:**

Number of half-lives of A: $n = 15/5 = 3$

$$N_A = N_0 \times \left(\frac{1}{2}\right)^3 = 1.0 \times 10^{20} \times \frac{1}{8} = 1.25 \times 10^{19}$$

**(b) Activity of A after 15 hours:**

$$\lambda_A = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{5 \times 3600} = 3.85 \times 10^{-5} \text{ s}^{-1}$$

$$A = \lambda_A N_A = 3.85 \times 10^{-5} \times 1.25 \times 10^{19} = 4.81 \times 10^{14} \text{ Bq}$$

**(c) Maximum number of B atoms:**

For a decay chain A $\to$ B $\to$ C, the number of B atoms is:

$$N_B(t) = \frac{\lambda_A N_0}{\lambda_B - \lambda_A}\left(e^{-\lambda_A t} - e^{-\lambda_B t}\right)$$

$\lambda_A = \frac{0.693}{18000} = 3.85 \times 10^{-5}$ s$^{-1}$

$\lambda_B = \frac{0.693}{10800} = 6.42 \times 10^{-5}$ s$^{-1}$

The maximum of $N_B$ occurs when $\frac{dN_B}{dt} = 0$:

$$\lambda_A e^{-\lambda_A t} = \lambda_B e^{-\lambda_B t}$$

$$e^{(\lambda_B - \lambda_A)t} = \frac{\lambda_B}{\lambda_A} = \frac{6.42}{3.85} = 1.668$$

$$t_{\max} = \frac{\ln 1.668}{\lambda_B - \lambda_A} = \frac{0.511}{(6.42 - 3.85) \times 10^{-5}} = \frac{0.511}{2.57 \times 10^{-5}} = 19883 \text{ s} = 5.52 \text{ hours}$$

**(d) Maximum number of B atoms:**

$$N_B(t_{\max}) = \frac{\lambda_A N_0}{\lambda_B - \lambda_A}\left(e^{-\lambda_A t_{\max}} - e^{-\lambda_B t_{\max}}\right)$$

$$= \frac{3.85 \times 10^{-5} \times 10^{20}}{2.57 \times 10^{-5}} \times \left(e^{-3.85 \times 10^{-5} \times 19883} - e^{-6.42 \times 10^{-5} \times 19883}\right)$$

$$= 1.498 \times 10^{20} \times (e^{-0.7654} - e^{-1.2763})$$

$$= 1.498 \times 10^{20} \times (0.4652 - 0.2790)$$

$$= 1.498 \times 10^{20} \times 0.1862 = 2.79 \times 10^{19}$$

**Key misconception:** Activity $= \lambda N$ (current number of atoms), NOT $\lambda N_0$ (original number). Many students use $N_0$ instead of $N$ after time has passed. Also, half-life is a statistical property -- it applies to large numbers of atoms, not to individual atoms.

---

### UT-2: Binding Energy and Nuclear Stability

**Question:**

The following data are given:

| Nucleus | Mass (u) |
|---------|----------|
| $^{1}\text{H}$ (proton) | 1.00728 |
| $n$ (neutron) | 1.00867 |
| $^{56}\text{Fe}$ | 55.93494 |
| $^{235}\text{U}$ | 235.04393 |
| $^{141}\text{Ba}$ | 140.91390 |
| $^{92}\text{Kr}$ | 91.92620 |

$1 \text{ u} = 931.5 \text{ MeV}/c^2$, $1 \text{ eV} = 1.6 \times 10^{-19}$ J.

(a) Calculate the binding energy per nucleon of $^{56}\text{Fe}$.
(b) Calculate the binding energy per nucleon of $^{235}\text{U}$.
(c) For the fission reaction $^{235}\text{U} + n \to ^{141}\text{Ba} + ^{92}\text{Kr} + 3n$, calculate the energy released.

**Solution:**

**(a) Binding energy of $^{56}\text{Fe}$:**

$^{56}\text{Fe}$ has $Z = 26$ protons and $N = 30$ neutrons.

Mass of constituent nucleons:

$$m_{\text{nucleons}} = 26 \times 1.00728 + 30 \times 1.00867 = 26.18928 + 30.26010 = 56.44938 \text{ u}$$

Mass defect:

$$\Delta m = 56.44938 - 55.93494 = 0.51444 \text{ u}$$

Binding energy:

$$BE = 0.51444 \times 931.5 = 479.2 \text{ MeV}$$

Binding energy per nucleon:

$$\frac{BE}{A} = \frac{479.2}{56} = 8.557 \text{ MeV/nucleon}$$

**(b) Binding energy of $^{235}\text{U}$:**

$Z = 92$, $N = 143$.

$$m_{\text{nucleons}} = 92 \times 1.00728 + 143 \times 1.00867 = 92.66976 + 144.23981 = 236.90957 \text{ u}$$

$$\Delta m = 236.90957 - 235.04393 = 1.86564 \text{ u}$$

$$BE = 1.86564 \times 931.5 = 1738.1 \text{ MeV}$$

$$\frac{BE}{A} = \frac{1738.1}{235} = 7.396 \text{ MeV/nucleon}$$

**(c) Energy released in fission:**

Reactants: $^{235}\text{U} + n = 235.04393 + 1.00867 = 236.05260$ u

Products: $^{141}\text{Ba} + ^{92}\text{Kr} + 3n = 140.91390 + 91.92620 + 3(1.00867) = 140.91390 + 91.92620 + 3.02601 = 235.86611$ u

Mass defect:

$$\Delta m = 236.05260 - 235.86611 = 0.18649 \text{ u}$$

Energy released:

$$E = 0.18649 \times 931.5 = 173.7 \text{ MeV}$$

**Key insight:** Iron-56 has the highest binding energy per nucleon of any nucleus, making it the most stable. Energy is released both by fission of heavy nuclei (like U-235, moving toward Fe-56) and by fusion of light nuclei (moving toward Fe-56). The BE/A curve peaks at Fe-56.

---

### UT-3: Carbon Dating and Age Determination

**Question:**

A piece of ancient wood has a $^{14}\text{C}$ activity of $2.5$ decays per minute per gram. Living wood has a $^{14}\text{C}$ activity of $15.3$ decays per minute per gram. The half-life of $^{14}\text{C}$ is $5730$ years. (a) Calculate the age of the wood. (b) If the measurement uncertainty in activity is $\pm 0.3$ decays/min/g, what is the uncertainty in the age? (c) What percentage of the original $^{14}\text{C}$ remains?

**Solution:**

**(a) Age of the wood:**

$$\frac{A}{A_0} = e^{-\lambda t} = \left(\frac{1}{2}\right)^{t/t_{1/2}}$$

$$\frac{2.5}{15.3} = \left(\frac{1}{2}\right)^{t/5730}$$

$$0.1634 = \left(\frac{1}{2}\right)^{t/5730}$$

$$\log(0.1634) = \frac{t}{5730} \log(0.5)$$

$$\frac{t}{5730} = \frac{\log 0.1634}{\log 0.5} = \frac{-0.7866}{-0.3010} = 2.613$$

$$t = 2.613 \times 5730 = 14972 \text{ years}$$

**(b) Uncertainty in age:**

Upper bound (activity $= 2.8$):

$$\frac{2.8}{15.3} = 0.1830, \quad \frac{t_u}{5730} = \frac{\log 0.1830}{\log 0.5} = \frac{-0.7375}{-0.3010} = 2.450$$

$$t_u = 2.450 \times 5730 = 14039 \text{ years}$$

Lower bound (activity $= 2.2$):

$$\frac{2.2}{15.3} = 0.1438, \quad \frac{t_l}{5730} = \frac{\log 0.1438}{\log 0.5} = \frac{-0.8425}{-0.3010} = 2.799$$

$$t_l = 2.799 \times 5730 = 16038 \text{ years}$$

Uncertainty: approximately $\pm 1000$ years (asymmetric: $-933$ to $+1066$).

**(c) Percentage remaining:**

$$\frac{N}{N_0} = \frac{A}{A_0} = 0.1634 = 16.34\%$$

**Key insight:** Carbon dating becomes increasingly inaccurate for older samples because the remaining activity approaches the background radiation level. For samples older than about $50000$ years ($\sim 9$ half-lives), less than $0.2\%$ of the original $^{14}\text{C}$ remains, making reliable dating nearly impossible.

---

## Integration Tests

### IT-1: Nuclear Power Station Energy Analysis (with Heat and Gases)

**Question:**

A nuclear power station uses $^{235}\text{U}$ as fuel. Each fission of $^{235}\text{U}$ releases approximately $200$ MeV of energy. The power station has a thermal efficiency of $33\%$ and produces $500$ MW of electrical power. (a) Calculate the number of $^{235}\text{U}$ fissions per second. (b) The fuel is enriched to $3\%$ $^{235}\text{U}$ (the rest is $^{238}\text{U}$). Calculate the mass of uranium fuel consumed per day. (c) If the waste heat is discharged into a river with a flow rate of $500$ m$^3$ s$^{-1}$, calculate the temperature rise of the river.

**Solution:**

**(a) Fissions per second:**

Thermal power output:

$$P_{\text{thermal}} = \frac{P_{\text{electrical}}}{\eta} = \frac{500 \times 10^6}{0.33} = 1.515 \times 10^9 \text{ W}$$

Energy per fission: $E = 200 \text{ MeV} = 200 \times 10^6 \times 1.6 \times 10^{-19} = 3.2 \times 10^{-11}$ J

$$\text{Fissions per second} = \frac{1.515 \times 10^9}{3.2 \times 10^{-11}} = 4.734 \times 10^{19} \text{ s}^{-1}$$

**(b) Mass of fuel consumed per day:**

$^{235}\text{U}$ atoms fissioned per second $= 4.734 \times 10^{19}$

Per day: $N = 4.734 \times 10^{19} \times 86400 = 4.091 \times 10^{24}$ atoms

Mass of $^{235}\text{U}$ fissioned:

$$m_{235} = \frac{N \times 235 \times 1.661 \times 10^{-27}}{1} = 4.091 \times 10^{24} \times 3.903 \times 10^{-25} = 1.597 \text{ kg/day}$$

Total uranium fuel (enriched to 3%):

$$m_{\text{total}} = \frac{1.597}{0.03} = 53.2 \text{ kg/day}$$

**(c) Temperature rise of the river:**

Waste heat: $P_{\text{waste}} = P_{\text{thermal}} - P_{\text{electrical}} = 1515 - 500 = 1015 \text{ MW}$

$$P_{\text{waste}} = \rho_{\text{water}} \times \text{flow rate} \times c_{\text{water}} \times \Delta T$$

$$1015 \times 10^6 = 1000 \times 500 \times 4200 \times \Delta T$$

$$\Delta T = \frac{1015 \times 10^6}{2.1 \times 10^9} = 0.483°\text{C}$$

**Key insight:** Nuclear power stations have relatively low thermal efficiency ($30$--$35\%$), meaning about two-thirds of the energy is waste heat. This is a significant environmental consideration for power station siting.

---

### IT-2: Alpha and Beta Decay with Energy and Momentum Conservation (with Mechanics)

**Question:**

A stationary $^{226}\text{Ra}$ nucleus undergoes alpha decay to $^{222}\text{Rn}$. The kinetic energy of the alpha particle is $4.78$ MeV. (a) Calculate the recoil kinetic energy of the $^{222}\text{Rn}$ nucleus. (b) Calculate the total energy released in the decay. (c) Explain why the alpha particle carries most of the kinetic energy.

**Solution:**

**(a) Recoil energy of $^{222}\text{Rn}$:**

By conservation of momentum (initial momentum $= 0$):

$$p_\alpha = -p_{\text{Rn}}$$

$$m_\alpha v_\alpha = m_{\text{Rn}} v_{\text{Rn}}$$

Kinetic energies:

$$KE_\alpha = \frac{p^2}{2m_\alpha}, \quad KE_{\text{Rn}} = \frac{p^2}{2m_{\text{Rn}}}$$

$$\frac{KE_{\text{Rn}}}{KE_\alpha} = \frac{m_\alpha}{m_{\text{Rn}}} = \frac{4}{222} = 0.01802$$

$$KE_{\text{Rn}} = 4.78 \times 0.01802 = 0.0861 \text{ MeV}$$

**(b) Total energy released:**

$$Q = KE_\alpha + KE_{\text{Rn}} = 4.78 + 0.0861 = 4.866 \text{ MeV}$$

**(c) Why the alpha particle carries most KE:**

Since $KE \propto 1/m$ for the same momentum, the lighter particle (alpha, mass $4$ u) carries much more kinetic energy than the heavier daughter nucleus (Rn, mass $222$ u). The ratio is inversely proportional to the mass ratio:

$$\frac{KE_\alpha}{KE_{\text{Rn}}} = \frac{m_{\text{Rn}}}{m_\alpha} = \frac{222}{4} = 55.5$$

The alpha particle carries about $98.2\%$ of the total kinetic energy released.

**Key insight:** In alpha decay, both energy AND momentum must be conserved. The lighter alpha particle gets most of the kinetic energy. This is analogous to a gun recoiling when fired -- the bullet gets much more KE than the gun, even though they have equal and opposite momenta.

---

### IT-3: E = mc^2 Applied to Particle Annihilation (with Electricity and Magnetism)

**Question:**

A positron ($e^+$) and an electron ($e^-$) annihilate, producing two gamma-ray photons. (a) Explain why two photons (not one) are produced. (b) Calculate the wavelength of each photon, assuming the particles are essentially at rest. (c) If the positron has a kinetic energy of $0.5$ MeV before annihilation, calculate the new photon wavelength. (d) In a PET scanner, these photons are detected. Explain how the detection of two photons allows localization of the annihilation event.

**Solution:**

**(a) Why two photons:**

Conservation of momentum: if the electron and positron are at rest (or nearly so), their total momentum is zero. A single photon always carries momentum ($p = E/c$), so producing one photon would violate momentum conservation. Two photons travelling in opposite directions can have zero total momentum while carrying away all the energy.

**(b) Photon wavelength (particles at rest):**

Rest mass energy of electron (or positron): $E_0 = m_e c^2 = 0.511$ MeV

Total energy available: $2 \times 0.511 = 1.022$ MeV

Each photon gets half: $E_\gamma = 0.511$ MeV $= 0.511 \times 10^6 \times 1.6 \times 10^{-19} = 8.176 \times 10^{-14}$ J

$$\lambda = \frac{hc}{E_\gamma} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{8.176 \times 10^{-14}} = \frac{1.989 \times 10^{-25}}{8.176 \times 10^{-14}} = 2.432 \times 10^{-12} \text{ m} = 0.00243 \text{ nm}$$

**(c) With 0.5 MeV kinetic energy:**

Total energy $= 2 \times 0.511 + 0.5 = 1.522$ MeV

Each photon: $E_\gamma = 0.761$ MeV $= 0.761 \times 10^6 \times 1.6 \times 10^{-19} = 1.218 \times 10^{-13}$ J

$$\lambda = \frac{hc}{E_\gamma} = \frac{1.989 \times 10^{-25}}{1.218 \times 10^{-13}} = 1.633 \times 10^{-12} \text{ m} = 0.00163 \text{ nm}$$

The extra kinetic energy produces shorter-wavelength (higher-energy) photons.

**(d) PET scanner localization:**

The two photons are emitted in exactly opposite directions (back-to-back, $180°$ apart). A ring of detectors surrounds the patient. When two detectors fire simultaneously (within a very short coincidence time window), the annihilation event must have occurred somewhere along the line connecting the two detectors. By recording many such coincidence events from multiple angles, a computer reconstructs the 3D distribution of the positron-emitting tracer using tomographic algorithms.

**Key insight:** Mass-energy equivalence ($E = mc^2$) is not just theoretical -- it is the operating principle of PET scanners, one of the most important medical imaging technologies. The complete conversion of mass to energy is the most efficient energy release possible.
