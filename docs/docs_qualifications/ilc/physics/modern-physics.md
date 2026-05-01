---
title: Modern Physics
description:
  Modern Physics — The Photoelectric Effect (HL); Phenomenon; Key Observations;
  Why Classical Wave Theory Fails with worked examples and exam-style questions.
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
These subjects overturned classical mechanics and forced physicists to reconsider the fundamental
nature of energy, matter, and determinism.

The two pillars of modern physics are quantum mechanics and relativity. This chapter focuses
primarily on the quantum side: the experimental evidence that classical wave theory could not
explain, and the theoretical framework that replaced it.

## The Photoelectric Effect (HL)

### Phenomenon

When light of sufficiently high frequency is incident on a metal surface, electrons are emitted.
This is the photoelectric effect, first observed by Heinrich Hertz in 1887 and later studied in
detail by Philipp Lenard.

The emitted electrons are called **photoelectrons**. The setup typically consists of an evacuated
tube containing a metal plate (the cathode) and a collector plate (the anode). Light shines on the
cathode, and any emitted electrons travel to the anode, producing a measurable current.

### Key Observations

The experimental results were surprising and incompatible with classical wave theory:

1. **Threshold frequency.** Electrons are emitted only if the incident light frequency exceeds a
   **threshold frequency** $f_0$. Below $f_0$, no electrons are emitted regardless of intensity or
   exposure time.
2. **Maximum kinetic energy depends on frequency, not intensity.** Increasing the intensity of light
   above $f_0$ increases the number of photoelectrons but not their maximum kinetic energy.
3. **Instantaneous emission.** Electrons are emitted essentially instantaneously (within $10^{-9}$
   s) when the light exceeds $f_0$. There is no measurable time delay even at very low intensities.

### Why Classical Wave Theory Fails

Classical wave theory predicts that:

- The energy of a light wave depends on its intensity (amplitude), not its frequency.
- Higher intensity should give electrons more energy, and should eventually cause emission at any
  frequency given enough time.
- At low intensities, electrons should need time to accumulate sufficient energy before emission.

None of these predictions match observation. The threshold frequency and the instantaneous emission
at low intensity are particularly fatal to the classical picture. A wave spread over a large area
would deposit energy continuously; an electron at a specific point on the surface would need to wait
to accumulate enough energy. Yet experiment shows no delay.

### Einstein's Explanation (1905)

Einstein proposed that light consists of discrete packets called **photons**, each with energy:

$$
E = hf
$$

where $h = 6.63 \times 10^{-34}\mathrm{ J s}$ (Planck's constant) and $f$ is the frequency.

When a photon strikes the metal surface, it transfers all its energy to a single electron. The
electron uses some of this energy to escape the metal (overcoming the binding energy) and retains
the rest as kinetic energy.

Einstein's photoelectric equation:

$$
hf = \phi + E_{k(\max)}
$$

where $\phi = hf_0$ is the **work function** (minimum energy to free an electron from the surface)
and $E_{k(\max)}$ is the maximum kinetic energy of the emitted electrons.

$$
E_{k(\max)} = hf - \phi = h(f - f_0)
$$

Alternatively, using $E = hf = \frac{hc}{\lambda}$:

$$
E_{k(\max)} = \frac{hc}{\lambda} - \phi
$$

This equation explains all three key observations:

- Below $f_0$, each photon has insufficient energy to overcome $\phi$, so no emission occurs.
- Above $f_0$, increasing $f$ increases each photon's energy, raising $E_{k(\max)}$.
- Increasing intensity means more photons per second, so more electrons are emitted, but each photon
  still carries the same energy.

### The Photon Momentum

Einstein also showed that photons carry momentum. From special relativity, for a massless particle:

$$
p = \frac{E}{c} = \frac{hf}{c} = \frac{h}{\lambda}
$$

This relation is critical: it connects the wave-like property (wavelength) to the particle-like
property (momentum) in a single equation.

### Stopping Voltage

The stopping voltage $V_s$ is the voltage needed to stop the most energetic photoelectrons. By
applying a reverse potential between the anode and cathode, even the fastest electrons are slowed to
zero:

$$
eV_s = E_{k(\max)} = hf - \phi
$$

A plot of $E_{k(\max)}$ versus $f$ yields a straight line with slope $h$ and intercept $-\phi$. This
is how Millikan experimentally determined Planck's constant in 1916, confirming Einstein's equation.

**Example (HL):** Light of wavelength $400\mathrm{ nm}$ is incident on a metal surface with work
function $2.0\mathrm{ eV}$. Find the maximum kinetic energy of the emitted electrons and the stopping
voltage.

$$
E = \frac{hc}{\lambda} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{400 \times 10^{-9}} = 4.97 \times 10^{-19}\mathrm{ J} = 3.11\mathrm{ eV}
$$

$$
E_{k(\max)} = 3.11 - 2.0 = 1.11\mathrm{ eV}
$$

$$
V_s = \frac{1.11\mathrm{ eV}}{e} = 1.11\mathrm{ V}
$$

### Threshold Frequency and Wavelength (HL)

The threshold frequency is the minimum frequency for photoelectric emission. Setting
$E_{k(\max)} = 0$:

$$
f_0 = \frac{\phi}{h}
$$

The threshold wavelength:

$$
\lambda_0 = \frac{c}{f_0} = \frac{hc}{\phi}
$$

For wavelengths longer than $\lambda_0$ (i.e., frequencies below $f_0$), no photoelectric emission
occurs regardless of intensity.

**Example (HL):** The work function of sodium is $2.28\mathrm{ eV}$. Find the threshold frequency and
threshold wavelength.

$$
f_0 = \frac{\phi}{h} = \frac{2.28 \times 1.6 \times 10^{-19}}{6.63 \times 10^{-34}} = 5.50 \times 10^{14}\mathrm{ Hz}
$$

$$
\lambda_0 = \frac{c}{f_0} = \frac{3 \times 10^8}{5.50 \times 10^{14}} = 5.45 \times 10^{-7}\mathrm{ m} = 545\mathrm{ nm}
$$

This is in the green region of the visible spectrum. Sodium can be photoelectrically excited by blue
and violet light, but not by red or orange light.

### Intensity and Photocurrent

If the frequency exceeds $f_0$, the photocurrent (number of electrons per second) is directly
proportional to the light intensity. Intensity in the photon picture is:

$$
I = N_{\mathrm{photon}} \times hf
$$

where $N_{\mathrm{photon}}$ is the number of photons per unit area per unit time. Doubling the
intensity doubles the number of photons, which doubles the photocurrent, but each photon still
carries the same energy $hf$.

## Atomic Models

### Thomson's Plum Pudding Model (OL/HL)

J.J. Thomson, who discovered the electron in 1897, proposed that atoms consist of a positively
charged sphere with negatively charged electrons embedded in it, like plums in a pudding. The
positive charge was spread uniformly, and the electrons were arranged to make the atom electrically
neutral overall.

This model was consistent with the known fact that atoms are electrically neutral and contain
electrons, but it had no mechanism for predicting atomic spectra or the stability of electron
arrangements.

### Rutherford's Nuclear Model (OL/HL)

In 1911, Ernest Rutherford, Hans Geiger, and Ernest Marsden fired alpha particles (helium nuclei,
$+2e$ charge) at a thin gold foil. The experimental setup used a radioactive source of alpha
particles, a thin gold foil target, and a zinc sulphide screen that produced a flash of light when
struck by an alpha particle.

**Observations:**

- The vast majority of alpha particles passed straight through the foil with little or no
  deflection.
- A small fraction were deflected through moderate angles.
- A very small number (about 1 in 8000) were deflected through angles greater than $90^\circ$, and some
  bounced nearly straight back.

**Conclusions:**

1. **The atom is mostly empty space.** Most alpha particles passed through because the nucleus is
   tiny compared to the atomic diameter.
2. **There is a small, dense, positively charged nucleus.** Large-angle deflections require a strong
   repulsive force (Coulomb repulsion between the $+2e$ alpha particle and the concentrated positive
   charge of the nucleus). The fact that only a few particles were deflected at large angles means
   the target (nucleus) is very small.
3. **Electrons orbit the nucleus.** The negative electrons must occupy the space around the nucleus
   at relatively large distances.

**Why the Thomson model failed:** In the plum pudding model, the positive charge is spread out. The
maximum Coulomb force on an alpha particle passing through a diffuse positive sphere would be much
smaller than what is needed to produce the observed large-angle deflections. Rutherford calculated
that to produce a deflection of greater than $90^\circ$, the alpha particle must encounter a concentrated
charge within a radius of approximately $10^{-14}\mathrm{ m}$, about four orders of magnitude smaller
than the known atomic radius ($\approx 10^{-10}\mathrm{ m}$).

### The Stability Problem

Rutherford's model had a serious flaw: according to classical electrodynamics, an orbiting electron
undergoes centripetal acceleration and therefore radiates electromagnetic energy. As the electron
radiates, it loses energy and spirals inward, collapsing into the nucleus within about $10^{-11}$ s.
Atoms are clearly stable, so the classical picture must be wrong. This problem was resolved by Bohr.

### Bohr Model of the Atom (HL)

Niels Bohr, working in Rutherford's lab in 1913, proposed a model that combined Rutherford's nuclear
atom with quantum ideas from Planck and Einstein.

**Postulates:**

1. **Stationary states.** Electrons orbit the nucleus in fixed energy levels (stationary states)
   without radiating energy. Only certain orbits are allowed, corresponding to specific energy
   values.
2. **Photon emission and absorption.** An electron can jump between levels by absorbing or emitting
   a photon whose energy equals the difference between the two levels:

   $$
   hf = E_n - E_m
   $$

   where $E_n \gt E_m$ for emission and $E_n \lt E_m$ for absorption.

3. **Quantised angular momentum.** The angular momentum of the electron is quantised in units of
   $h/(2\pi)$:

   $$
   mvr = \frac{nh}{2\pi} = n\hbar
   $$

   where $n = 1, 2, 3, \ldots$ is the principal quantum number and $\hbar = h/(2\pi)$ is the reduced
   Planck constant.

### Deriving the Bohr Energy Levels

Starting from the quantisation of angular momentum and Coulomb's law, we can derive the energy
levels. The centripetal force on the electron is provided by the Coulomb attraction:

$$
\frac{mv^2}{r} = \frac{k e^2}{r^2}
$$

where $k = 1/(4\pi\varepsilon_0)$. From the quantisation condition $mvr = n\hbar$:

$$
v = \frac{n\hbar}{mr}
$$

Substituting into the force equation:

$$
\frac{m}{r}\left(\frac{n\hbar}{mr}\right)^2 = \frac{ke^2}{r^2}
$$

$$
\frac{n^2\hbar^2}{mr^3} = \frac{ke^2}{r^2}
$$

$$
r_n = \frac{n^2\hbar^2}{mke^2}
$$

The total energy is the sum of kinetic and potential energy:

$$
E = \frac{1}{2}mv^2 - \frac{ke^2}{r}
$$

From the force equation, $\frac{1}{2}mv^2 = \frac{ke^2}{2r}$, so:

$$
E = \frac{ke^2}{2r} - \frac{ke^2}{r} = -\frac{ke^2}{2r}
$$

Substituting $r_n$:

$$
E_n = -\frac{ke^2}{2} \cdot \frac{mke^2}{n^2\hbar^2} = -\frac{mk^2e^4}{2n^2\hbar^2}
$$

Evaluating the constants gives:

$$
E_n = -\frac{13.6\mathrm{ eV}}{n^2}
$$

The ground state ($n = 1$) has energy $-13.6\mathrm{ eV}$, and the energy approaches zero as
$n \to \infty$ (ionisation).

### Energy Levels of Hydrogen (HL)

The energy of the $n$th level:

$$
E_n = -\frac{13.6\mathrm{ eV}}{n^2}
$$

The energy of a photon emitted in a transition from level $n$ to level $m$ ($n \gt m$):

$$
\Delta E = 13.6\left(\frac{1}{m^2} - \frac{1}{n^2}\right)\mathrm{ eV}
$$

### Spectral Series of Hydrogen

The discrete spectral lines of hydrogen fall into series named after their discoverers:

| Series   | Transition | Region      |
| -------- | ---------- | ----------- |
| Lyman    | $n \to 1$  | Ultraviolet |
| Balmer   | $n \to 2$  | Visible     |
| Paschen  | $n \to 3$  | Infrared    |
| Brackett | $n \to 4$  | Infrared    |

The Balmer series is the most well-known because its lines fall in the visible range. The H-alpha
line ($n = 3 \to 2$) at $656\mathrm{ nm}$ is a distinctive red line often observed in astrophysics.

### Ionisation Energy

The ionisation energy is the minimum energy required to remove an electron from the atom entirely
(transition from $n$ to $n = \infty$). For hydrogen:

$$
E_{\mathrm{ion}} = 0 - (-13.6) = 13.6\mathrm{ eV}
$$

This corresponds to a photon of wavelength:

$$
\lambda = \frac{hc}{E_{\mathrm{ion}}} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{13.6 \times 1.6 \times 10^{-19}} = 91.2\mathrm{ nm}
$$

This is in the far ultraviolet (Lyman limit). Any photon with wavelength shorter than
$91.2\mathrm{ nm}$ can ionise hydrogen.

**Example (HL):** Find the wavelength of light emitted when a hydrogen electron transitions from
$n = 3$ to $n = 2$.

$$
\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{9}\right) = 13.6 \times \frac{5}{36} = 1.889\mathrm{ eV}
$$

$$
\lambda = \frac{hc}{\Delta E} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{1.889 \times 1.6 \times 10^{-19}} = \frac{1.989 \times 10^{-25}}{3.022 \times 10^{-19}} = 6.58 \times 10^{-7}\mathrm{ m} = 658\mathrm{ nm}
$$

This is in the visible (red) region -- the H-alpha line of the Balmer series.

**Example (HL):** An electron in a hydrogen atom is in the $n = 4$ state. Find all possible photon
energies emitted as the electron cascades to the ground state.

Possible transitions: $4 \to 3$, $4 \to 2$, $4 \to 1$, $3 \to 2$, $3 \to 1$, $2 \to 1$.

$$
\Delta E_{4\to3} = 13.6\left(\frac{1}{9} - \frac{1}{16}\right) = 13.6 \times \frac{7}{144} = 0.661\mathrm{ eV}
$$

$$
\Delta E_{4\to2} = 13.6\left(\frac{1}{4} - \frac{1}{16}\right) = 13.6 \times \frac{3}{16} = 2.55\mathrm{ eV}
$$

$$
\Delta E_{4\to1} = 13.6\left(1 - \frac{1}{16}\right) = 13.6 \times \frac{15}{16} = 12.75\mathrm{ eV}
$$

$$
\Delta E_{3\to2} = 1.889\mathrm{ eV} \quad (\mathrm{calculated above})
$$

$$
\Delta E_{3\to1} = 13.6\left(1 - \frac{1}{9}\right) = 13.6 \times \frac{8}{9} = 12.09\mathrm{ eV}
$$

$$
\Delta E_{2\to1} = 13.6\left(1 - \frac{1}{4}\right) = 13.6 \times \frac{3}{4} = 10.2\mathrm{ eV}
$$

### Limitations of the Bohr Model

The Bohr model works only for hydrogen and hydrogen-like ions (single electron). It cannot predict
the spectra of helium or more complex atoms. It also cannot explain:

- Why only certain orbits are allowed (the full answer requires quantum mechanics).
- Fine structure (small splittings of spectral lines).
- The relative intensities of spectral lines.
- Electron spin or the Pauli exclusion principle.

The full quantum mechanical treatment (Schrodinger equation, 1926) replaced the Bohr model, but the
Bohr model remains an excellent conceptual bridge between classical and quantum physics.

## Wave-Particle Duality (HL)

### De Broglie Hypothesis (1924)

Louis de Broglie proposed that if light (a wave) can behave as a particle, then matter (particles)
should also exhibit wave-like properties. He postulated that every particle has an associated
wavelength:

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

This is the **de Broglie wavelength**. For macroscopic objects, $\lambda$ is negligibly small, which
is why we do not observe wave behaviour in everyday life.

### Why de Broglie Wavelengths Are Not Observable for Macroscopic Objects

Consider a cricket ball of mass $0.16\mathrm{ kg}$ moving at $30\mathrm{ m/s}$:

$$
\lambda = \frac{6.63 \times 10^{-34}}{0.16 \times 30} = 1.38 \times 10^{-34}\mathrm{ m}
$$

This is about 20 orders of magnitude smaller than an atomic nucleus. No experiment can detect wave
effects at this scale. But for electrons, the wavelength is comparable to atomic spacing, which is
precisely why electron diffraction is observable.

### Davisson-Germer Experiment (1927)

Clinton Davisson and Lester Germer directed a beam of electrons at a nickel crystal and observed a
diffraction pattern. The angles at which the electrons were diffracted matched the predictions of de
Broglie's equation, providing direct experimental confirmation of wave-particle duality for matter.

This was analogous to X-ray diffraction from crystals: if electrons behave as waves with wavelength
$\lambda = h/(mv)$, then they should diffract from the crystal lattice planes according to Bragg's
law:

$$
n\lambda = 2d\sin\theta
$$

The observed diffraction peaks matched the predicted angles, confirming de Broglie's hypothesis.

### Electron Diffraction and the Bohr Model

De Broglie's hypothesis provides a physical justification for the Bohr quantisation condition. If
the electron is a standing wave around the orbit, then the circumference must be an integer number
of wavelengths:

$$
2\pi r = n\lambda = \frac{nh}{mv}
$$

$$
mvr = \frac{nh}{2\pi}
$$

This is exactly Bohr's quantisation condition. The Bohr orbits are the standing wave modes of the
electron. This is a deep insight: quantisation arises naturally from wave behaviour.

**Example (HL):** Find the de Broglie wavelength of an electron accelerated through a potential
difference of 100 V.

$$
eV = \frac{1}{2}mv^2 \implies v = \sqrt{\frac{2eV}{m}} = \sqrt{\frac{2 \times 1.6 \times 10^{-19} \times 100}{9.11 \times 10^{-31}}} = 5.93 \times 10^6\mathrm{ m/s}
$$

$$
\lambda = \frac{6.63 \times 10^{-34}}{9.11 \times 10^{-31} \times 5.93 \times 10^6} = 1.23 \times 10^{-10}\mathrm{ m} = 0.123\mathrm{ nm}
$$

This is comparable to the spacing between atomic planes in a crystal ($\sim 0.2\mathrm{ nm}$), which
is why electron diffraction is observable.

### Heisenberg Uncertainty Principle (HL)

Werner Heisenberg showed that there is a fundamental limit to the precision with which certain pairs
of physical properties can be known simultaneously. The most commonly used form is:

$$
\Delta x \cdot \Delta p \geq \frac{h}{4\pi} = \frac{\hbar}{2}
$$

where $\Delta x$ is the uncertainty in position and $\Delta p$ is the uncertainty in momentum.

This is not a limitation of measurement technology; it is a fundamental property of nature arising
from the wave nature of matter. A particle localised to a small region of space must have a large
spread in momentum, and vice versa.

**Implications:**

- Electrons in atoms cannot have well-defined orbits (as in the Bohr model). Instead, we describe
  them using probability distributions (orbitals).
- An electron confined to a nucleus ($\Delta x \approx 10^{-14}\mathrm{ m}$) would have a momentum
  uncertainty far exceeding $mc$, implying relativistic speeds -- another argument against electrons
  existing inside the nucleus.

There is also an energy-time uncertainty relation:

$$
\Delta E \cdot \Delta t \geq \frac{\hbar}{2}
$$

This explains why short-lived excited states have broader spectral lines: a short lifetime
($\Delta t$) implies a large energy uncertainty ($\Delta E$), which broadens the emitted photon's
frequency.

## Nuclear Physics

### Structure of the Nucleus (OL/HL)

The nucleus contains protons (positive charge, $+e$) and neutrons (no charge), collectively called
**nucleons**. The nucleus is held together by the **strong nuclear force**, which is short-ranged
(operating only over distances of a few femtometres) and much stronger than the electromagnetic
force at those distances.

- **Atomic number** $Z$ = number of protons. This determines the element.
- **Mass number** $A$ = number of protons + neutrons. This determines the isotope.
- **Isotopes** have the same $Z$ but different $A$ (different numbers of neutrons).
- **Isobars** have the same $A$ but different $Z$.
- **Isotones** have the same number of neutrons but different $Z$.

Notation: an element $X$ with mass number $A$ and atomic number $Z$ is written ${}^{A}_{Z}X$.

### Nuclear Forces

The strong nuclear force has several key properties:

- It is attractive and very strong (about 100 times stronger than the electromagnetic force at
  nuclear distances).
- It has a very short range, falling to near zero beyond about $3\mathrm{ fm}$
  ($3 \times 10^{-15}\mathrm{ m}$).
- It is charge-independent: it acts between any two nucleons (proton-proton, neutron-neutron, or
  proton-neutron).
- At very short distances (less than about $0.5\mathrm{ fm}$), it becomes repulsive, preventing the
  nucleus from collapsing to a point.

The competition between the attractive strong force (short range) and the repulsive Coulomb force
(long range, between protons) determines which nuclei are stable. Large nuclei have more protons, so
Coulomb repulsion grows relative to the strong force, making them less stable.

### Nuclear Binding Energy (HL)

The **mass defect** $\Delta m$ is the difference between the mass of the nucleus and the sum of the
masses of its individual nucleons:

$$
\Delta m = Zm_p + (A - Z)m_n - m_{\mathrm{nucleus}}
$$

where $m_p = 1.6726 \times 10^{-27}\mathrm{ kg}$ is the proton mass and
$m_n = 1.6749 \times 10^{-27}\mathrm{ kg}$ is the neutron mass.

In practice, atomic masses (which include the mass of the electrons) are used, and the calculation
is simplified by noting that the electron masses cancel:

$$
\Delta m = Zm(\mathrm{{}^1H}) + (A - Z)m_n - m(\mathrm{atom})
$$

where $m(\mathrm{{}^1H})$ is the mass of a hydrogen atom (proton plus electron).

The binding energy is:

$$
E_b = \Delta m \cdot c^2
$$

The binding energy per nucleon, $E_b/A$, indicates nuclear stability. A plot of $E_b/A$ versus $A$
shows that iron-56 has the highest binding energy per nucleon ($\approx 8.8\mathrm{ MeV/nucleon}$).
Nuclei with lower $A$ can gain stability by fusing (moving right on the curve), while nuclei with
higher $A$ can gain stability by fissioning (moving left).

**Example (HL):** The atomic mass of helium-4 is $4.0026\mathrm{ u}$. Find the binding energy per
nucleon. ($m(\mathrm{{}^1H}) = 1.0078\mathrm{ u}$, $m_n = 1.0087\mathrm{ u}$,
$1\mathrm{ u} = 931.5\mathrm{ MeV}/c^2$).

$$
\Delta m = 2(1.0078) + 2(1.0087) - 4.0026 = 2.0156 + 2.0174 - 4.0026 = 0.0304\mathrm{ u}
$$

$$
E_b = 0.0304 \times 931.5 = 28.3\mathrm{ MeV}
$$

$$
\frac{E_b}{A} = \frac{28.3}{4} = 7.08\mathrm{ MeV/nucleon}
$$

### Radioactivity (OL/HL)

Radioactive decay is a random, spontaneous process. It is not affected by temperature, pressure,
chemical bonding, or any external conditions. Each nucleus decays independently with a fixed
probability per unit time.

Types of decay:

| Type             | Symbol                          | Change                                 | Penetrating Power    |
| ---------------- | ------------------------------- | -------------------------------------- | -------------------- |
| Alpha decay      | $\alpha$ (${}^4_2\mathrm{He}$)    | $Z$ decreases by 2, $A$ decreases by 4 | Low (paper)          |
| Beta-minus decay | $\beta^-$ (${}^0_{-1}\mathrm{e}$) | $Z$ increases by 1, $A$ unchanged      | Moderate (aluminium) |
| Gamma decay      | $\gamma$                        | No change in $Z$ or $A$                | High (lead/concrete) |

**Alpha decay** occurs mainly in heavy nuclei ($A \gt 150$). The emitted alpha particle is a
helium-4 nucleus. Example: ${}^{238}_{92}\mathrm{U} \to {}^{234}_{90}\mathrm{Th} + {}^4_2\mathrm{He}$.

**Beta-minus decay** occurs when a neutron converts to a proton, emitting an electron and an
antineutrino: $n \to p + e^- + \bar{\nu}_e$. This process is mediated by the weak nuclear force.
Example: ${}^{14}_{6}\mathrm{C} \to {}^{14}_{7}\mathrm{N} + {}^0_{-1}\mathrm{e} + \bar{\nu}_e$.

**Gamma decay** occurs when a nucleus in an excited state emits a high-energy photon to reach a
lower energy state. The nucleus remains the same isotope; only its energy changes.

### Why Beta Decay Requires the Neutrino

In beta-minus decay, the emitted electron has a continuous spectrum of kinetic energies, from zero
up to a maximum value. If only the electron and daughter nucleus were produced, energy and momentum
conservation would require the electron to have a fixed energy. The continuous spectrum implies a
third particle carrying away the remaining energy and momentum: the **antineutrino**. Pauli proposed
the neutrino in 1930, and it was experimentally confirmed in 1956 by Cowan and Reines.

### Nuclear Equations and Conservation Laws

All nuclear reactions conserve:

1. **Charge** (atomic number $Z$)
2. **Mass number** $A$
3. **Energy** (including mass-energy via $E = mc^2$)
4. **Momentum**

When writing nuclear equations, always check that the total $Z$ and total $A$ are the same on both
sides.

### Half-Life (OL/HL)

The half-life $t_{1/2}$ is the time for half of the radioactive nuclei in a sample to decay. It is a
statistical property: it does not mean that individual nuclei "wait" for $t_{1/2}$ before decaying.
Each nucleus has a fixed probability of decaying per unit time, and the half-life emerges from the
statistics of large numbers.

$$
N = N_0 \left(\frac{1}{2}\right)^{t/t_{1/2}}
$$

$$
N = N_0 e^{-\lambda t}
$$

where $\lambda = \frac{\ln 2}{t_{1/2}}$ is the **decay constant**, the probability of decay per unit
time per nucleus.

The **activity** $A$ (rate of decay) is:

$$
A = \lambda N = -\frac{dN}{dt}
$$

Activity is measured in becquerels (Bq), where $1\mathrm{ Bq} = 1\mathrm{ decay/s}$.

### Derivation of the Exponential Decay Law

Starting from the definition of the decay constant: each nucleus has probability $\lambda \, dt$ of
decaying in a short time interval $dt$. For $N$ nuclei:

$$
dN = -\lambda N \, dt
$$

$$
\frac{dN}{N} = -\lambda \, dt
$$

Integrating:

$$
\ln N = -\lambda t + C
$$

At $t = 0$, $N = N_0$, so $C = \ln N_0$:

$$
\ln\left(\frac{N}{N_0}\right) = -\lambda t
$$

$$
N = N_0 e^{-\lambda t}
$$

Setting $N = N_0/2$ at $t = t_{1/2}$:

$$
\frac{1}{2} = e^{-\lambda t_{1/2}} \implies t_{1/2} = \frac{\ln 2}{\lambda}
$$

**Example (OL):** A sample has a half-life of 8 days. After 24 days, what fraction remains?

$$
N = N_0 \left(\frac{1}{2}\right)^{24/8} = N_0 \left(\frac{1}{2}\right)^3 = \frac{N_0}{8}
$$

So $1/8$ of the original sample remains.

**Example (HL):** Cobalt-60 has a half-life of 5.27 years. Find its decay constant.

$$
\lambda = \frac{\ln 2}{5.27} = 0.1315\mathrm{ yr}^{-1}
$$

**Example (HL):** A sample of iodine-131 ($t_{1/2} = 8.02\mathrm{ days}$) initially has an activity of
$400\mathrm{ Bq}$. Find the activity after 30 days.

$$
A = A_0 e^{-\lambda t} = 400 \times e^{-\frac{\ln 2}{8.02} \times 30} = 400 \times e^{-2.59} = 400 \times 0.0749 = 30.0\mathrm{ Bq}
$$

### Nuclear Reactions (HL)

**Fission:** A heavy nucleus splits into lighter nuclei, releasing energy because the products have
higher binding energy per nucleon. Fission is triggered when a heavy nucleus absorbs a neutron. The
products include two (or sometimes three) lighter nuclei, additional neutrons (which can sustain a
chain reaction), and energy.

$$
{}^{235}_{92}\mathrm{U} + {}^1_0\mathrm{n} \to {}^{141}_{56}\mathrm{Ba} + {}^{92}_{36}\mathrm{Kr} + 3{}^1_0\mathrm{n} + \mathrm{energy}
$$

The released neutrons can induce further fission events, creating a **chain reaction**. In a nuclear
reactor, control rods absorb some neutrons to maintain a controlled, steady rate of fission.

**Critical mass:** The minimum mass of fissile material required to sustain a chain reaction. Below
the critical mass, too many neutrons escape without causing further fission, and the reaction dies
out.

**Fusion:** Light nuclei combine to form a heavier nucleus, releasing energy because the product has
higher binding energy per nucleon. Fusion requires extremely high temperatures
($\sim 10^7\mathrm{ K}$) to overcome the Coulomb repulsion between the positively charged nuclei.

$$
{}^2_1\mathrm{H} + {}^3_1\mathrm{H} \to {}^4_2\mathrm{He} + {}^1_0\mathrm{n} + \mathrm{energy}
$$

Fusion is the process that powers stars. In the Sun, the proton-proton chain converts hydrogen to
helium, releasing approximately $26.7\mathrm{ MeV}$ per helium-4 nucleus formed. Achieving controlled
fusion on Earth remains an active area of research (e.g., tokamak reactors and laser fusion).

### Energy Released in Fission

The energy released in a single fission event of U-235 is approximately $200\mathrm{ MeV}$. This can
be estimated from the binding energy per nucleon: U-235 has about $7.6\mathrm{ MeV/nucleon}$, while
the fission products have about $8.5\mathrm{ MeV/nucleon}$. The difference of about
$0.9\mathrm{ MeV/nucleon}$ times 235 nucleons gives approximately $210\mathrm{ MeV}$.

### Background Radiation

We are constantly exposed to ionising radiation from natural and artificial sources:

- **Radon gas:** A naturally occurring radioactive gas (from uranium decay in rocks) that can
  accumulate in buildings. This is the largest source of natural background radiation.
- **Cosmic rays:** High-energy particles from space, primarily muons and protons. Exposure increases
  with altitude.
- **Terrestrial radiation:** From radioactive isotopes (potassium-40, carbon-14, uranium, thorium)
  in rocks, soil, and food.
- **Medical sources:** X-rays and radioactive tracers used in medicine.
- **Artificial sources:** Nuclear power plants, fallout from nuclear weapons testing (now a minor
  contributor).

### Applications of Radioactivity

- **Medical imaging:** Technetium-99m is used as a radioactive tracer in gamma cameras.
- **Radiotherapy:** Cobalt-60 or other high-energy gamma sources are used to destroy cancer cells.
- **Carbon dating:** The ratio of carbon-14 to carbon-12 in organic material decreases after death
  with a half-life of 5730 years, allowing estimation of the age of archaeological samples.
- **Smoke detectors:** Americium-241 emits alpha particles that ionise air, allowing current flow.
  Smoke particles disrupt this current, triggering the alarm.
- **Tracers in industry:** Radioactive isotopes are used to detect leaks in pipelines and monitor
  wear in engine parts.

## Common Pitfalls

1. **Photoelectric effect** -- it is the frequency, not the intensity, that determines whether
   electrons are emitted. Intensity affects the number of electrons, not their maximum energy.
2. **Bohr model** -- the formula $E_n = -13.6/n^2$ applies only to hydrogen (and hydrogen-like ions
   with a correction factor of $Z^2$). It does not work for multi-electron atoms.
3. **Binding energy** -- always divide by the mass number to get binding energy per nucleon for
   comparison. Higher binding energy per nucleon means greater stability.
4. **Half-life calculations** -- the fraction remaining is $(1/2)^{n}$ where $n$ is the number of
   half-lives elapsed. Do not confuse the number of half-lives with the time itself.
5. **Alpha vs beta decay** -- alpha decreases $A$ by 4 and $Z$ by 2; beta-minus increases $Z$ by 1
   with no change in $A$.
6. **Unit conversions** -- $1\mathrm{ eV} = 1.6 \times 10^{-19}\mathrm{ J}$. Always work in SI units
   (joules) for calculations involving $h$, $c$, and $m$, and convert to eV at the end if needed.
7. **Nuclear equations** -- always check conservation of $Z$ and $A$ on both sides.
8. **De Broglie wavelength** -- use the relativistic momentum $p = \gamma mv$ for particles moving
   at speeds approaching $c$. For electrons accelerated through less than about $10\mathrm{ kV}$, the
   non-relativistic formula is accurate enough.

## Practice Questions

### Ordinary Level

1. Define the photoelectric effect. State two observations that cannot be explained by classical
   wave theory.
2. State Rutherford's conclusions from the gold foil experiment. Why did these results contradict
   Thomson's plum pudding model?
3. Uranium-238 undergoes alpha decay. Write the nuclear equation and identify the daughter nucleus.
4. A radioactive isotope has a half-life of 6 hours. After 18 hours, what fraction of the original
   sample remains?
5. Distinguish between alpha, beta, and gamma radiation in terms of their penetrating power and the
   effect each has on atomic number and mass number.
6. What is background radiation? List three natural sources.

### Higher Level

1. Light of wavelength $300\mathrm{ nm}$ is incident on a zinc surface ($\phi = 3.63\mathrm{ eV}$). Find
   the maximum kinetic energy of photoelectrons in eV. Will photoelectrons be emitted?
2. The work function of caesium is $1.95\mathrm{ eV}$. Find the threshold frequency and threshold
   wavelength. If light of wavelength $450\mathrm{ nm}$ is incident on the surface, find the stopping
   voltage.
3. Calculate the first three energy levels of hydrogen. Find the wavelength of the photon emitted
   for a transition from $n = 4$ to $n = 1$. In which spectral series does this line belong?
4. Find the de Broglie wavelength of a neutron moving at $2 \times 10^4\mathrm{ m/s}$
   ($m_n = 1.675 \times 10^{-27}\mathrm{ kg}$).
5. The mass defect of helium-4 is $0.0304\mathrm{ u}$ ($1\mathrm{ u} = 931.5\mathrm{ MeV}/c^2$). Find the
   binding energy per nucleon.
6. A sample of strontium-90 ($t_{1/2} = 28.8\mathrm{ years}$) has an initial activity of
   $1000\mathrm{ Bq}$. Find the activity after 100 years and the time for the activity to fall to
   $100\mathrm{ Bq}$.
7. Carbon-14 has a half-life of 5730 years. A sample of ancient wood has a carbon-14 activity that
   is 25% of the activity of a living tree. Estimate the age of the wood.
8. Explain why beta decay requires the existence of the neutrino. What conservation laws would be
   violated without it?
9. A hydrogen atom absorbs a photon of wavelength $97.3\mathrm{ nm}$. Determine the transition that
   occurred (initial and final energy levels).
10. An electron is accelerated from rest through a potential difference of $200\mathrm{ V}$. Find its
    de Broglie wavelength. Would this electron be suitable for diffraction by a crystal with lattice
    spacing $0.25\mathrm{ nm}$? Justify your answer.
