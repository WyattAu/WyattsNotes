---
title: Nuclear Physics
date: 2026-04-23T00:00:00.000Z
tags: [Physics, ALevel]
categories: [Physics]
slug: nuclear-physics
---

## Nuclear Physics

:::info Board Coverage AQA Paper 2 | Edexcel CP6 | OCR (A) Paper 2 | CIE P4 :::

## 1. Rutherford Scattering

### The Experiment

In 1911, Geiger and Marsden (under Rutherford's direction) fired alpha particles at a thin gold foil.
Most passed straight through, some were deflected through small angles, and a few ($\sim 1$ in 8000)
were deflected through angles greater than $90^\circ$.

### Interpretation

The results were incompatible with Thomson's "plum pudding" model (in which positive charge is
diffusely spread through the atom). A diffuse charge distribution could not produce the large-angle
deflections observed.

Rutherford proposed that all positive charge and nearly all mass are concentrated in a tiny, dense
**nucleus**. The large-angle deflections occur when an alpha particle approaches a nucleus head-on and
is repelled by the Coulomb force.

### Closest Approach Distance

For a head-on collision, the alpha particle momentarily stops (all kinetic energy converted to
electric potential energy):

$$\frac{1}{2}m_\alpha v^2 = \frac{Z_{\mathrm{Au}} \cdot 2e^2}{4\pi\varepsilon_0 d}$$

$$\boxed{d = \frac{Z_{\mathrm{Au}} e^2}{2\pi\varepsilon_0 E_k}}$$

where $d$ is the distance of closest approach. For 5.5 MeV alpha particles on gold ($Z = 79$):

$$d = \frac{79 \times (1.60 \times 10^{-19})^2}{2\pi \times 8.85 \times 10^{-12} \times 5.5 \times 10^6 \times 1.60 \times 10^{-19}} \approx 4.1 \times 10^{-14}\ \mathrm{m}$$

This gives an upper bound on the nuclear radius of gold ($\sim 10^{-14}$ m, compared to the atomic
radius of $\sim 10^{-10}$ m).

:::warning Common Pitfall The distance of closest approach is an *upper bound* on the nuclear radius,
not the radius itself. The alpha particle never actually touches the nucleus (the strong nuclear force
has a very short range).
:::

## 2. Nuclear Structure

The nucleus contains **protons** and **neutrons** (collectively, **nucleons**).

| Property | Proton | Neutron | Electron |
|---|---|---|---|
| Charge | $+e$ | $0$ | $-e$ |
| Mass (u) | 1.00728 | 1.00867 | 0.00055 |
| Location | Nucleus | Nucleus | Electron shells |

**Notation.** A nuclide $\prescript{A}{}{Z}\mathrm{X}$ has mass number $A$ (total nucleons) and
atomic number $Z$ (protons). The neutron number is $N = A - Z$.

**Isotopes** have the same $Z$ but different $N$ (hence different $A$). Isotopes have nearly
identical chemical properties but different nuclear properties (stability, half-life, decay mode).

**Isotones** have the same $N$ but different $Z$. **Isobars** have the same $A$ but different $Z$.

## 3. Mass Defect and Binding Energy

### Mass Defect

The mass of a nucleus is **less** than the sum of the masses of its constituent nucleons. The
difference is the **mass defect**:

$$\boxed{\Delta m = Zm_p + Nm_n - m_{\mathrm{nucleus}}}$$

### Einstein's Mass--Energy Equivalence

$$\boxed{E = mc^2}$$

The mass defect corresponds to the binding energy — the energy released when the nucleus was formed
from its constituent nucleons, or equivalently, the energy required to separate the nucleus into its
individual nucleons.

$$\boxed{E_b = \Delta m\,c^2}$$

### Binding Energy per Nucleon

The binding energy per nucleon is a measure of nuclear stability:

$$\boxed{\frac{E_b}{A} = \frac{\Delta m\,c^2}{A}}$$

<details>
<summary>Worked Example: Binding Energy of Helium-4</summary>
Calculate the binding energy per nucleon of $\prescript{4}{}{2}\mathrm{He}$.
Given: $m_p = 1.00728$ u, $m_n = 1.00867$ u, $m_{\mathrm{He}} = 4.00151$ u,
$1\ \mathrm{u} = 931.5$ MeV/c$^2$.

**Answer.** $\Delta m = 2 \times 1.00728 + 2 \times 1.00867 - 4.00151 = 2.01456 + 2.01734 - 4.00151 = 0.03039$ u.

$E_b = 0.03039 \times 931.5 = 28.3$ MeV.

$E_b/A = 28.3/4 = 7.08$ MeV per nucleon.

</details>

### The Binding Energy Curve

The binding energy per nucleon plotted against mass number shows:

- **Light nuclei** ($A \lt 20$): Low binding energy per nucleon, with peaks at $\prescript{4}{}{2}\mathrm{He}$, $\prescript{12}{}{6}\mathrm{C}$, and $\prescript{16}{}{8}\mathrm{O}$ (magic numbers).
- **Iron-56** ($\prescript{56}{}{26}\mathrm{Fe}$): Maximum binding energy per nucleon ($\sim 8.8$ MeV) — the most stable nucleus.
- **Heavy nuclei** ($A \gt 60$): Gradually decreasing binding energy per nucleon.

**Implications:**

- **Fission** of heavy nuclei ($A \gt 56$) releases energy because the products have higher binding
  energy per nucleon (the mass defect per nucleon increases).
- **Fusion** of light nuclei ($A \lt 56$) releases energy for the same reason.

## 4. Nuclear Stability

### Stability Band

Stable nuclei cluster around $N \approx Z$ for light nuclei, shifting to $N \gt Z$ for heavier
nuclei. The excess neutrons in heavy nuclei provide additional strong nuclear force to counteract the
increasing Coulomb repulsion between protons.

**Why not all-neutron nuclei?** The Pauli exclusion principle forces neutrons into progressively
higher energy states. Adding protons allows nucleons to occupy lower-energy states, reducing the
total energy. For light nuclei, the balance favours $N \approx Z$.

### Decay Modes and Stability

| Condition | Dominant decay | Reason |
|---|---|---|
| $N/Z$ too large | $\beta^-$ decay | Neutron converts to proton |
| $N/Z$ too small | $\beta^+$ decay or electron capture | Proton converts to neutron |
| $A \gt 150$ | Alpha decay | Reduces both $N$ and $Z$ |
| Excited state | Gamma decay | Releases excess energy |

**Alpha decay** occurs predominantly for $A \gt 150$ because the alpha particle is exceptionally
stable (high binding energy per nucleon of 7.08 MeV), making it energetically favourable to emit.

### Magic Numbers

Nuclei with $Z$ or $N$ equal to 2, 8, 20, 28, 50, 82, or 126 are unusually stable, analogous to
noble gas electron configurations. These "magic numbers" arise from the shell structure of the
nucleus, predicted by the nuclear shell model (Mayer and Jensen, 1949).

## 5. Radioactive Decay

### Alpha Decay

An alpha particle ($\prescript{4}{}{2}\alpha = \prescript{4}{}{2}\mathrm{He}$) is emitted:

$$\prescript{A}{}{Z}\mathrm{X} \to \prescript{A-4}{}{Z-2}\mathrm{Y} + \prescript{4}{}{2}\alpha$$

**Conservation:** $A$ decreases by 4, $Z$ decreases by 2. Highly ionising, stopped by paper.

### Beta-Minus Decay

A neutron converts to a proton, emitting an electron and an antineutrino:

$$\prescript{A}{}{Z}\mathrm{X} \to \prescript{A}{}{Z+1}\mathrm{Y} + \prescript{0}{}{-1}\beta^- + \bar{\nu}_e$$

**Conservation:** $A$ unchanged, $Z$ increases by 1. The antineutrino was postulated (Pauli, 1930;
Fermi, 1934) to conserve energy and momentum — the continuous electron energy spectrum requires a
third particle to carry away the remaining energy.

### Beta-Plus Decay

A proton converts to a neutron, emitting a positron and a neutrino:

$$\prescript{A}{}{Z}\mathrm{X} \to \prescript{A}{}{Z-1}\mathrm{Y} + \prescript{0}{}{+1}\beta^+ + \nu_e$$

This requires $m_{\mathrm{parent}} \gt m_{\mathrm{daughter}} + 2m_e$ (the positron mass must be
created).

### Gamma Decay

Excited nucleus de-excites by emitting a high-energy photon:

$$\prescript{A}{}{Z}\mathrm{X}^* \to \prescript{A}{}{Z}\mathrm{X} + \gamma$$

No change in $A$ or $Z$. Weakly ionising, highly penetrating (requires thick lead or concrete).

:::warning Common Pitfall In $\beta^-$ decay, $A$ does not change — only $Z$. The neutron becomes a
proton, so the total nucleon count is unchanged. Do not write $A - 1$ for beta decay.
:::

## 6. Exponential Decay Law and Half-Life

### Derivation

The decay constant $\lambda$ is the probability per unit time that a single nucleus will decay. If
there are $N$ nuclei:

$$\frac{dN}{dt} = -\lambda N$$

Separating variables and integrating from $N_0$ at $t = 0$ to $N$ at time $t$:

$$\int_{N_0}^{N}\frac{dN'}{N'} = -\int_0^t \lambda\,dt'$$

$$\ln\left(\frac{N}{N_0}\right) = -\lambda t$$

$$\boxed{N = N_0 e^{-\lambda t}}$$

### Activity

$$\boxed{A = \lambda N = -\frac{dN}{dt}}$$

SI unit: becquerel (Bq). $1\ \mathrm{Bq} = 1\ \mathrm{decay\,s}^{-1}$.

### Half-Life

Setting $N = N_0/2$ at $t = t_{1/2}$:

$$\frac{1}{2} = e^{-\lambda t_{1/2}} \implies t_{1/2} = \frac{\ln 2}{\lambda}$$

$$\boxed{t_{1/2} = \frac{\ln 2}{\lambda}}$$

## 7. Nuclear Fission

### Mechanism

A heavy nucleus (typically $\prescript{235}{}_{92}\mathrm{U}$ or $\prescript{239}{}_{94}\mathrm{Pu}$)
absorbs a neutron, becoming unstable and splitting into two lighter nuclei (fission fragments) plus
2--3 neutrons and energy:

$$\prescript{235}{}_{92}\mathrm{U} + \prescript{1}{}_{0}\mathrm{n} \to \prescript{236}{}_{92}\mathrm{U}^* \to \prescript{141}{}_{56}\mathrm{Ba} + \prescript{92}{}_{36}\mathrm{Kr} + 3\prescript{1}{}_{0}\mathrm{n} + \mathrm{energy}$$

### Energy Release

The binding energy per nucleon of the products ($\sim 8.5$ MeV) exceeds that of $\prescript{235}{}_{92}\mathrm{U}$ ($\sim 7.6$ MeV). The energy released per fission event is approximately 200 MeV, primarily as kinetic energy of the fission fragments.

### Chain Reaction

Each fission event releases 2--3 neutrons, which can induce further fission events. For a
**self-sustaining chain reaction**, the reproduction factor $k$ (average neutrons per fission that
cause another fission) must equal 1.

- $k \lt 1$: subcritical (reaction dies out).
- $k = 1$: critical (steady reaction — nuclear reactor).
- $k \gt 1$: supercritical (exponential growth — nuclear weapon).

**Critical mass:** The minimum mass of fissile material required to sustain a chain reaction. For
$\prescript{235}{}_{92}\mathrm{U}$, this is approximately 50 kg (sphere). The critical mass depends
on geometry, density, and the presence of a neutron reflector.

### Nuclear Reactor

Key components:

- **Fuel rods:** Enriched uranium ($\sim 3$--$5\%$\ $\prescript{235}{}_{92}\mathrm{U}$).
- **Moderator:** Graphite or heavy water — slows neutrons to thermal energies where the fission
  cross-section of $\prescript{235}{}_{92}\mathrm{U}$ is largest.
- **Control rods:** Boron or cadmium — absorb neutrons to regulate $k$.
- **Coolant:** Water, liquid sodium, or CO$_2$ — transfers heat from the reactor to the turbines.

## 8. Nuclear Fusion

### Mechanism

Two light nuclei combine to form a heavier nucleus, releasing energy when the product has higher
binding energy per nucleon.

### Conditions for Fusion

The positively charged nuclei must overcome their Coulomb repulsion to get within range of the strong
nuclear force ($\sim 10^{-15}$ m). This requires:

1. **Very high temperatures** ($\sim 10^8$ K) to give nuclei sufficient kinetic energy.
2. **Very high densities** to ensure sufficient collision rates.
3. **Sufficient confinement time** for reactions to occur.

The product of these three quantities is the Lawson criterion:

$$n\tau \gt 10^{20}\ \mathrm{s\,m^{-3}}$$

for deuterium--tritium fusion.

### Stellar Fusion

In the Sun's core ($T \approx 1.5 \times 10^7$ K), hydrogen fuses to helium via the proton--proton
chain:

$$4\prescript{1}{}{1}\mathrm{H} \to \prescript{4}{}{2}\mathrm{He} + 2\prescript{0}{}{+1}\beta^+ + 2\nu_e + 2\gamma$$

Net energy release: $\sim 26.7$ MeV per helium-4 nucleus formed.

### Why Fusion is Hard on Earth

Achieving and confining a plasma at $10^8$ K is extraordinarily difficult. Two main approaches:

- **Magnetic confinement** (tokamak): Strong magnetic fields confine the plasma in a toroidal
  chamber. ITER is the largest current project.
- **Inertial confinement:** Laser pulses compress and heat a fuel pellet to fusion conditions
  (National Ignition Facility).

<details>
<summary>Worked Example: Energy from Fission</summary>
Calculate the energy released when a $\prescript{235}{}_{92}\mathrm{U}$ nucleus undergoes fission.
Given: $m(\prescript{235}{}_{92}\mathrm{U}) = 235.044$ u, $m(\prescript{141}{}_{56}\mathrm{Ba}) = 140.914$ u,
$m(\prescript{92}{}_{36}\mathrm{Kr}) = 91.926$ u, $m(\prescript{1}{}_{0}\mathrm{n}) = 1.00867$ u.

**Answer.** Mass of products: $140.914 + 91.926 + 3 \times 1.00867 = 235.866$ u.

Mass defect: $\Delta m = 235.044 + 1.00867 - 235.866 = 0.187$ u.

Energy released: $E = 0.187 \times 931.5 = 174$ MeV.

</details>

## Problem Set

<details>
<summary>Problem 1</summary>
Calculate the distance of closest approach for a 7.7 MeV alpha particle scattered by a gold nucleus
($Z = 79$).

**Answer.** $d = \frac{Ze^2}{2\pi\varepsilon_0 E_k} = \frac{79 \times (1.60 \times 10^{-19})^2}{2\pi \times 8.85 \times 10^{-12} \times 7.7 \times 10^6 \times 1.60 \times 10^{-19}} = \frac{79 \times 1.60 \times 10^{-19}}{2\pi \times 8.85 \times 10^{-12} \times 7.7 \times 10^6} = 2.9 \times 10^{-14}$ m.

</details>

<details>
<summary>Problem 2</summary>
Calculate the binding energy per nucleon of $\prescript{56}{}_{26}\mathrm{Fe}$.
Given: $m(\prescript{56}{}_{26}\mathrm{Fe}) = 55.9349$ u.

**Answer.** $\Delta m = 26 \times 1.00728 + 30 \times 1.00867 - 55.9349 = 26.1893 + 30.2601 - 55.9349 = 0.5145$ u.

$E_b = 0.5145 \times 931.5 = 479.3$ MeV. $E_b/A = 479.3/56 = 8.56$ MeV/nucleon.

</details>

<details>
<summary>Problem 3</summary>
Write the balanced equation for the beta-minus decay of $\prescript{14}{}{6}\mathrm{C}$.

**Answer.** $\prescript{14}{}{6}\mathrm{C} \to \prescript{14}{}{7}\mathrm{N} + \prescript{0}{}{-1}\beta^- + \bar{\nu}_e$.

Check: $A$: $14 = 14 + 0 + 0$. $Z$: $6 = 7 + (-1) + 0$. Both conserved.

</details>

<details>
<summary>Problem 4</summary>
A sample has activity 400 Bq and half-life 5.0 hours. Calculate the activity after 20 hours and the
number of nuclei present initially.

**Answer.** After 20 hours: $n = 20/5 = 4$ half-lives. $A = 400/2^4 = 25$ Bq.

$A_0 = \lambda N_0$, $\lambda = \ln 2/t_{1/2} = 0.693/18000 = 3.85 \times 10^{-5}$ s$^{-1}$.
$N_0 = A_0/\lambda = 400/(3.85 \times 10^{-5}) = 1.04 \times 10^7$ nuclei.

</details>

<details>
<summary>Problem 5</summary>
Explain why energy is released in both nuclear fission and nuclear fusion, using the binding energy
curve.

**Answer.** The binding energy per nucleon curve has a maximum near $A = 56$ (iron). Fission splits
heavy nuclei ($A \gt 56$) into lighter fragments with higher binding energy per nucleon, so energy is
released. Fusion combines light nuclei ($A \lt 56$) into heavier products with higher binding energy
per nucleon, also releasing energy. In both cases, the products are closer to the peak of the curve
than the reactants, meaning mass is converted to energy via $E = \Delta m\,c^2$.

</details>

<details>
<summary>Problem 6</summary>
Calculate the energy released when two deuterium nuclei fuse to form helium-3 and a neutron:
$\prescript{2}{}{1}\mathrm{H} + \prescript{2}{}_{1}\mathrm{H} \to \prescript{3}{}_{2}\mathrm{He} + \prescript{1}{}_{0}\mathrm{n}$.
Given: $m(\prescript{2}{}_{1}\mathrm{H}) = 2.01410$ u, $m(\prescript{3}{}_{2}\mathrm{He}) = 3.01603$ u.

**Answer.** $\Delta m = 2 \times 2.01410 - 3.01603 - 1.00867 = 4.02820 - 4.02470 = 0.00350$ u.

$E = 0.00350 \times 931.5 = 3.26$ MeV.

</details>

<details>
<summary>Problem 7</summary>
Why must a fusion reactor achieve extremely high temperatures? Why is a moderator not needed?

**Answer.** Fusion requires overcoming the Coulomb repulsion between positively charged nuclei. Only at
very high temperatures ($\sim 10^8$ K) do nuclei have sufficient kinetic energy to approach within the
range of the strong nuclear force ($\sim 10^{-15}$ m).

A moderator slows neutrons down, which is needed for fission (thermal neutrons have larger fission
cross-sections). In fusion, the reactants are positively charged nuclei, not neutrons, and the
reaction requires them to be fast (high energy), not slow. A moderator would be counterproductive.

</details>

<details>
<summary>Problem 8</summary>
A radioactive sample contains $\prescript{131}{}_{53}\mathrm{I}$ (half-life 8.04 days) with initial
activity 800 Bq. How long until the activity falls to 50 Bq?

**Answer.** $A = A_0 e^{-\lambda t}$. $50 = 800 e^{-\lambda t}$. $e^{-\lambda t} = 1/16$.
$\lambda t = \ln 16 = 4\ln 2$. $t = 4\ln 2/\lambda = 4t_{1/2} = 4 \times 8.04 = 32.2$ days.

</details>
