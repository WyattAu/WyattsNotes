---
title: Atomic and Nuclear Physics — Diagnostic Tests
description: Hardest IB Physics atomic and nuclear diagnostic tests covering Bohr model limitations, binding energy per nucleon, radioactive decay statistics, and alpha-beta-gamma properties.
slug: diag-atomic-nuclear
hide_table_of_contents: true
---

# Atomic and Nuclear Physics — Diagnostic Tests

## Unit Tests

### UT-1: Bohr Model — Limitations and Quantisation

**Question:**

(a) Derive the expression for the radius of the $n$-th Bohr orbit for hydrogen.

(b) Calculate the energy of a photon emitted when an electron transitions from $n = 4$ to $n = 2$ in a hydrogen atom.

(c) Explain two limitations of the Bohr model that are addressed by quantum mechanics.

**Solution:**

(a) In the Bohr model, the electron orbits the proton under the Coulomb force, which provides the centripetal force:

$$\frac{ke^2}{r_n^2} = \frac{m_e v_n^2}{r_n}$$

Bohr's quantisation condition: $m_e v_n r_n = n\hbar$ where $\hbar = h/(2\pi)$.

From the quantisation condition: $v_n = n\hbar/(m_e r_n)$.

Substituting into the force equation:

$$\frac{ke^2}{r_n^2} = \frac{m_e}{r_n} \times \frac{n^2\hbar^2}{m_e^2 r_n^2} = \frac{n^2\hbar^2}{m_e r_n^3}$$

$$r_n^3 = \frac{n^2\hbar^2}{m_e ke^2}$$

$$r_n = \frac{n^2\hbar^2}{m_e ke^2} = \frac{n^2 \times (h/2\pi)^2}{m_e ke^2} = \frac{n^2 h^2}{4\pi^2 m_e ke^2}$$

$$r_n = \frac{\varepsilon_0 n^2 h^2}{\pi m_e e^2}$$

For $n = 1$: $r_1 = \frac{8.854 \times 10^{-12} \times (6.626 \times 10^{-34})^2}{\pi \times 9.109 \times 10^{-31} \times (1.602 \times 10^{-19})^2} = 5.29 \times 10^{-11}\,\text{m}$

This is the Bohr radius $a_0$.

(b) Energy levels in hydrogen: $E_n = -\frac{13.6\,\text{eV}}{n^2}$

$E_4 = -13.6/16 = -0.85\,\text{eV}$

$E_2 = -13.6/4 = -3.40\,\text{eV}$

Photon energy: $\Delta E = E_4 - E_2 = -0.85 - (-3.40) = 2.55\,\text{eV}$

Wavelength: $\lambda = hc/\Delta E = (6.626 \times 10^{-34} \times 3.0 \times 10^8)/(2.55 \times 1.602 \times 10^{-19})$

$$= 1.988 \times 10^{-25}/4.085 \times 10^{-19} = 4.87 \times 10^{-7}\,\text{m} = 487\,\text{nm}$$

This is in the blue-green region of the visible spectrum (part of the Balmer series).

(c) Two key limitations of the Bohr model:

1. **Multi-electron atoms**: The Bohr model works only for hydrogen-like atoms (one electron). For atoms with multiple electrons, the electron-electron interactions make the problem unsolvable by simple Bohr orbits. Quantum mechanics uses the Schrodinger equation with appropriate potentials.

2. **No explanation for transition probabilities**: The Bohr model predicts the energy levels correctly but cannot explain why some transitions are more likely than others (selection rules). Quantum mechanics derives these from the transition matrix elements.

Additional limitations: the Bohr model gives definite orbits, violating the uncertainty principle; it cannot explain fine structure or the Zeeman effect.

---

### UT-2: Binding Energy Per Nucleon and Mass Defect

**Question:**

The isotope $\text{U-235}$ has atomic mass $235.0439\,\text{u}$. It undergoes fission into $\text{Ba-141}$ (mass $140.9144\,\text{u}$) and $\text{Kr-92}$ (mass $91.9262\,\text{u}$), releasing 3 neutrons.

(a) Calculate the mass defect of the fission products and the energy released.

(b) Calculate the binding energy per nucleon of $\text{U-235}$, $\text{Ba-141}$, and $\text{Kr-92}$, and explain why fission releases energy.

(c) A student claims that "nuclear fission converts mass directly into energy, which is why it releases so much energy." Discuss whether this is an accurate statement.

**Solution:**

(a) Mass of reactants: $235.0439\,\text{u}$

Mass of products: $140.9144 + 91.9262 + 3 \times 1.0087 = 140.9144 + 91.9262 + 3.0261 = 235.8667\,\text{u}$

Mass defect: $\Delta m = 235.0439 - 235.8667 = -0.8228\,\text{u}$

Wait -- the products are heavier? Let me re-check. The atomic masses include electrons.

Actually, the reactant mass should be compared properly. $\text{U-235}$ has 92 electrons. $\text{Ba-141}$ has 56 electrons, $\text{Kr-92}$ has 36 electrons. Total: $56 + 36 = 92$ electrons. So electron counts balance.

The mass defect is: $\Delta m = 235.0439 - (140.9144 + 91.9262 + 3 \times 1.0087) = 235.0439 - 235.8667 = -0.8228\,\text{u}$

This gives a negative mass defect, which is wrong. Let me re-check the neutron mass.

Neutron mass $= 1.0087\,\text{u}$. Actually, the standard value is $1.008665\,\text{u}$.

$3 \times 1.0087 = 3.0261\,\text{u}$

Products: $140.9144 + 91.9262 + 3.0261 = 235.8667\,\text{u}$

Reactant: $235.0439\,\text{u}$

$\Delta m = 235.0439 - 235.8667 = -0.8228\,\text{u}$

This is incorrect; fission should release energy. The issue is that the given masses may not be consistent or I need to re-examine. Using more standard values:

Products: $140.914 + 91.926 + 3(1.009) = 235.867\,\text{u}$

Let me use the standard fission: $\text{U-235} + n \to \text{Ba-141} + \text{Kr-92} + 3n$

Mass of U-235 + neutron: $235.0439 + 1.0087 = 236.0526\,\text{u}$

Mass of products: $140.9144 + 91.9262 + 3(1.0087) = 235.8667\,\text{u}$

$\Delta m = 236.0526 - 235.8667 = 0.1859\,\text{u}$

Energy released: $E = 0.1859 \times 931.5 = 173.2\,\text{MeV}$

(b) Binding energy per nucleon:

$\text{U-235}$: $Z = 92$, $N = 143$. Mass of constituent nucleons: $92(1.0073) + 143(1.0087) = 92.6716 + 144.2441 = 236.9157\,\text{u}$

Mass defect: $236.9157 - 235.0439 = 1.8718\,\text{u}$

BE per nucleon: $1.8718 \times 931.5/235 = 7.41\,\text{MeV/nucleon}$

$\text{Ba-141}$: $Z = 56$, $N = 85$. Constituent mass: $56(1.0073) + 85(1.0087) = 56.4088 + 85.7395 = 142.1483\,\text{u}$

Mass defect: $142.1483 - 140.9144 = 1.2339\,\text{u}$

BE per nucleon: $1.2339 \times 931.5/141 = 8.15\,\text{MeV/nucleon}$

$\text{Kr-92}$: $Z = 36$, $N = 56$. Constituent mass: $36(1.0073) + 56(1.0087) = 36.2628 + 56.4872 = 92.7500\,\text{u}$

Mass defect: $92.7500 - 91.9262 = 0.8238\,\text{u}$

BE per nucleon: $0.8238 \times 931.5/92 = 8.34\,\text{MeV/nucleon}$

The fission products ($\sim 8.1$ and $8.3\,\text{MeV/nucleon}$) have higher binding energy per nucleon than U-235 ($7.4\,\text{MeV/nucleon}$). The "missing" binding energy is released as kinetic energy of the fission products and radiation. This is why fission releases energy: moving to nuclei with higher binding energy per nucleon.

(c) The statement is partially correct but misleading. The energy released is not because mass "directly converts" to energy. Rather, the fission products have a different (more tightly bound) nuclear configuration, and the total mass of the system decreases because the binding energy increases. The mass defect is a measure of the binding energy difference, and by $E = \Delta mc^2$, this mass difference corresponds to the energy release.

The energy appears as kinetic energy of the fission fragments, neutrons, and gamma radiation -- not as "pure energy."

---

### UT-3: Radioactive Decay — Statistical Nature of Half-Life

**Question:**

A sample contains $N_0 = 1.0 \times 10^{20}$ radioactive nuclei of a particular isotope with half-life $t_{1/2} = 5.0\,\text{hours}$.

(a) Calculate the decay constant and the number of nuclei remaining after $20\,\text{hours}$.

(b) Calculate the probability that any given nucleus will decay within the next $1.0\,\text{hour}$.

(c) After $20\,\text{hours}$, the activity is measured to be $A = 3.2 \times 10^{14}\,\text{Bq}$ with an uncertainty of $\pm 5\%$. Explain why this measurement is consistent with the theoretical prediction, and discuss whether a single nucleus can be said to have a half-life.

**Solution:**

(a) Decay constant: $\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{5.0 \times 3600} = 3.85 \times 10^{-5}\,\text{s}^{-1}$

Number after $20\,\text{hours}$ ($4$ half-lives):

$$N = N_0 \times 2^{-t/t_{1/2}} = 1.0 \times 10^{20} \times 2^{-4} = 6.25 \times 10^{18}$$

(b) The probability that a given nucleus decays in time $\Delta t$ is:

$$P = 1 - e^{-\lambda \Delta t}$$

For $\Delta t = 1.0\,\text{hour} = 3600\,\text{s}$:

$$P = 1 - e^{-3.85 \times 10^{-5} \times 3600} = 1 - e^{-0.1386} = 1 - 0.8706 = 0.1294$$

So there is a $12.9\%$ probability that any given nucleus will decay within the next hour.

(c) Theoretical activity at $t = 20\,\text{hours}$:

$$A = \lambda N = 3.85 \times 10^{-5} \times 6.25 \times 10^{18} = 2.41 \times 10^{14}\,\text{Bq}$$

The measured value of $(3.2 \pm 0.16) \times 10^{14}\,\text{Bq}$ does not agree with the theoretical prediction of $2.41 \times 10^{14}\,\text{Bq}$. The measurement is outside the uncertainty range. This discrepancy could indicate counting errors, contamination, or that the sample is not purely the stated isotope.

A single nucleus does not have a half-life in a deterministic sense. The half-life is a **statistical** property of a large ensemble of identical nuclei. Each individual nucleus has a constant probability of decay per unit time ($\lambda$), but it is impossible to predict when any particular nucleus will decay. The half-life is the time for half of a very large number of nuclei to decay, and it becomes increasingly accurate as the number of nuclei increases.

## Integration Tests

### IT-1: Nuclear Physics with Energy Conservation (with Energy)

**Question:**

In a nuclear reactor, each fission of $\text{U-235}$ releases approximately $200\,\text{MeV}$ of energy. The reactor operates at a thermal power of $3000\,\text{MW}$.

(a) Calculate the number of fissions per second.

(b) Calculate the mass of $\text{U-235}$ consumed per day.

(c) If the reactor is $35\%$ efficient at converting thermal energy to electrical energy, calculate the electrical power output and the mass of $\text{U-235}$ consumed per day for electrical generation.

**Solution:**

(a) Energy per fission: $200\,\text{MeV} = 200 \times 1.602 \times 10^{-13} = 3.204 \times 10^{-11}\,\text{J}$

Number of fissions per second: $n = P/(E_{\text{per fission}}) = 3000 \times 10^6/3.204 \times 10^{-11}$

$$n = 9.36 \times 10^{19}\,\text{fissions/s}$$

(b) Mass of $\text{U-235}$ per fission: $m = 235 \times 1.661 \times 10^{-27} = 3.903 \times 10^{-25}\,\text{kg}$

Mass consumed per second: $9.36 \times 10^{19} \times 3.903 \times 10^{-25} = 3.653 \times 10^{-5}\,\text{kg/s}$

Mass per day: $3.653 \times 10^{-5} \times 86400 = 3.16\,\text{kg/day}$

(c) Electrical power: $P_e = 0.35 \times 3000 = 1050\,\text{MW}$

For $1050\,\text{MW}$ electrical, the thermal power needed is $3000\,\text{MW}$ (same reactor). The mass consumption per day for electrical generation is still $3.16\,\text{kg/day}$ of $\text{U-235}$ (the fuel consumption is determined by the thermal power, not the electrical output).

The distinction is important: the efficiency determines how much of the thermal energy is converted to useful electricity, but the fuel consumption rate depends on the total thermal energy produced.

---

### IT-2: Alpha, Beta, and Gamma — Identification and Properties (with Electric and Magnetic Fields)

**Question:**

A radioactive source emits alpha particles, beta-minus particles, and gamma rays. These are directed into a region with a uniform magnetic field $\vec{B}$ directed into the page and a uniform electric field $\vec{E}$ directed downward (in the plane of the page). The particles enter from the left with the same initial horizontal velocity.

(a) Describe the path of each type of radiation and explain the physics.

(b) The magnetic field alone deflects the alpha particles into a circular path of radius $r_\alpha = 0.20\,\text{m}$. Calculate the radius of the circular path for a beta particle with the same speed.

(c) Explain why gamma rays are not deflected by either field and how this property is used in radiation detection.

**Solution:**

(a) **Alpha particles** ($^4_2\text{He}^{2+}$, positive charge $+2e$):
- Magnetic force: $\vec{F} = q\vec{v} \times \vec{B}$. For positive charge moving right with $\vec{B}$ into the page, the force is upward (by right-hand rule). Path curves upward (circular).
- Electric force: $\vec{F} = q\vec{E}$. For positive charge, force is in the direction of $\vec{E}$ (downward). This opposes the magnetic force.

**Beta-minus particles** ($e^-$, negative charge $-e$):
- Magnetic force: negative charge moving right with $\vec{B}$ into page. Force is downward (opposite to alpha). Path curves downward (circular, opposite direction).
- Electric force: negative charge, force opposite to $\vec{E}$ (upward). This opposes the magnetic force.

**Gamma rays** (photons, no charge):
- No magnetic force ($q = 0$).
- No electric force ($q = 0$).
- Travel in a straight line, undeflected.

(b) Magnetic force provides centripetal force: $qvB = mv^2/r$, so $r = mv/(qB)$.

For alpha: $r_\alpha = m_\alpha v/(2eB) = 0.20\,\text{m}$

For beta (same speed $v$): $r_\beta = m_e v/(eB)$

Ratio: $r_\beta/r_\alpha = (m_e/eB)/(m_\alpha/2eB) = 2m_e/m_\alpha = 2 \times 9.109 \times 10^{-31}/(4 \times 1.661 \times 10^{-27})$

$$= 1.822 \times 10^{-30}/6.644 \times 10^{-27} = 2.74 \times 10^{-4}$$

$$r_\beta = 0.20 \times 2.74 \times 10^{-4} = 5.48 \times 10^{-5}\,\text{m} = 54.8\,\mu\text{m}$$

The beta particle's path radius is much smaller because of its much smaller mass.

(c) Gamma rays are uncharged electromagnetic radiation (photons). Since they carry no electric charge, they experience no force in either electric or magnetic fields ($F = qE = 0$ and $F = qvB = 0$).

This property is exploited in radiation detection:
- A Geiger-Muller tube with a magnetic field can distinguish between charged particles (alpha, beta) and gamma rays.
- In a magnetic spectrometer, placing a detector straight ahead (zero deflection) selectively counts gamma rays while charged particles are deflected away.
- Gamma rays require dense materials (lead, concrete) for shielding, while charged particles can be stopped by much less material (paper for alpha, aluminium for beta).

---

### IT-3: Carbon Dating and Exponential Decay (with Kinematics)

**Question:**

A wooden artefact is found to have a carbon-14 activity of $0.25\,\text{Bq}$ per gram of carbon. Living wood has an activity of $0.23\,\text{Bq}$ per gram. The half-life of carbon-14 is $5730\,\text{years}$.

(a) Calculate the age of the artefact.

(b) A student argues that "since half the C-14 has decayed after one half-life, we can date anything up to about $50000\,\text{years}$." Discuss the practical limits of carbon dating.

(c) The artefact is from a burial site where the temperature has been measured to be $15^\circ\text{C}$ throughout its history. Explain whether temperature affects the dating calculation.

**Solution:**

(a) Activity ratio: $A/A_0 = 0.25/0.23 = 1.087$

Wait -- this gives $A/A_0 \gt 1$, meaning the artefact appears to have **more** C-14 than living wood. This is impossible unless there is contamination or measurement error. Let me re-read the problem.

Actually, if the activity is $0.25\,\text{Bq/g}$ and living wood has $0.23\,\text{Bq/g}$, this suggests the artefact is younger than the present or contaminated. This is likely a deliberate trap. The correct answer is that the data is inconsistent with radioactive decay and suggests measurement error or contamination.

However, if we assume the numbers were swapped (a common exam scenario where $A = 0.23$ and $A_0 = 0.25$):

$A/A_0 = 0.23/0.25 = 0.92$

$0.92 = e^{-\lambda t}$

$t = -\ln(0.92)/\lambda = -\ln(0.92) \times t_{1/2}/\ln 2 = 0.0834 \times 5730/0.693 = 689\,\text{years}$

With the numbers as given, the artefact cannot be dated by C-14 because the activity is inconsistent with decay.

(b) The practical limit of carbon dating is approximately $50000$--$60000\,\text{years}$. Beyond this:
- The remaining C-14 activity is extremely low (after 10 half-lives, only $1/1024$ of the original remains)
- Statistical fluctuations become comparable to the signal
- Contamination by modern carbon introduces proportionally large errors
- Background radiation interferes with measurements

The student's reasoning is approximately correct but oversimplified. The actual limit depends on measurement sensitivity, not just the number of half-lives.

(c) Temperature does **not** affect the radioactive decay constant. The decay constant $\lambda$ is a nuclear property that depends only on the nucleus, not on external conditions such as temperature, pressure, or chemical state. This is because nuclear forces are vastly stronger than the thermal energies at $15^\circ\text{C}$ ($k_BT \approx 0.025\,\text{eV}$ vs nuclear binding energies of $\sim 10^6\,\text{eV}$).

The dating calculation is therefore unaffected by the burial temperature.
