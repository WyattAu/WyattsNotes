---
title: Nuclear Energy
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: nuclear-energy
---

## Nuclear Energy

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

## 1. Mass Defect and Binding Energy

### Mass Defect

**Definition.** The mass defect $\Delta m$ is the difference between the mass of a nucleus and the
total mass of its separated constituent nucleons. It represents the mass equivalent of the binding
energy that holds the nucleus together.

The **mass defect** $\Delta m$ is the difference between the mass of a nucleus and the sum of the
masses of its constituent nucleons:

$$\Delta m = Zm_p + Nm_n - m_{\text{nucleus}}$$

where $Z$ is the number of protons, $N$ is the number of neutrons, $m_p$ is the proton mass, $m_n$
is the neutron mass, and $m_{\text{nucleus}}$ is the actual nuclear mass.

The mass defect is always **positive** for stable nuclei — the nucleus is lighter than its
constituent parts.

### Einstein's Mass-Energy Equation

**Definition.** Binding energy is the minimum energy required to completely separate a nucleus into
its individual protons and neutrons, or equivalently, the energy released when a nucleus is formed
from its constituents.

### Derivation of Mass-Energy Equivalence

1. From Einstein's special relativity, the total energy of a body at rest is $E = mc^2$.
2. A nucleus of mass $m_{\text{nucleus}}$ is lighter than its constituent nucleons by the mass
   defect $\Delta m$.
3. The "missing mass" has been converted to energy that holds the nucleus together.
4. The energy equivalent of the mass defect is the binding energy:

$$\boxed{E = \Delta m \cdot c^2}$$

$\square$

$$\boxed{E = mc^2}$$

The energy equivalent of the mass defect is the **binding energy**:

$$\boxed{E_b = \Delta m \cdot c^2}$$

This is the energy that would be required to completely separate the nucleus into its individual
protons and neutrons. Equivalently, it is the energy released when the nucleus is formed from its
constituents.

**Calculating mass defect.** Use atomic mass units (u), where $1\,\text{u} = 1.661 \times 10^{-27}$
kg, and $1\,\text{u} \cdot c^2 = 931.5$ MeV.

<details>
<summary>Example: Binding Energy of Helium-4</summary>
<p>

Calculate the binding energy of $\prescript{4}{}{2}\text{He}$. Given:
$m(\prescript{4}{}{2}\text{He}) = 4.00260$ u, $m_p = 1.00728$ u, $m_n = 1.00867$ u.

**Answer.** $\Delta m = 2(1.00728) + 2(1.00867) - 4.00260 = 2.01456 + 2.01734 - 4.00260 = 0.03030$
u.

$E_b = 0.03030 \times 931.5 = 28.2$ MeV.

</p>
</details>

## 2. Binding Energy per Nucleon

**Definition.** The binding energy per nucleon is the binding energy of a nucleus divided by its
mass number $A$: $E_b/A$. It is a measure of nuclear stability — the higher the value, the more
tightly bound the nucleus.

The **binding energy per nucleon** is a measure of nuclear stability:

$$\frac{E_b}{A} = \frac{\Delta m \cdot c^2}{A}$$

### The Binding Energy Curve

The plot of $E_b/A$ versus mass number $A$ has the following key features:

- **Light nuclei** ($A < 20$): binding energy per nucleon rises rapidly with $A$. Nuclei become more
  stable by **fusion** (combining light nuclei to reach higher $E_b/A$).
- **Iron-56** ($\prescript{56}{}{26}\text{Fe}$): the peak of the curve at $\sim 8.8$ MeV/nucleon.
  Iron-56 is the most stable nucleus.
- **Heavy nuclei** ($A > 60$): binding energy per nucleon gradually decreases. Nuclei become more
  stable by **fission** (splitting heavy nuclei to reach higher $E_b/A$).

**Intuition.** Both fusion and fission release energy because they move nuclei towards the peak of
the binding energy curve, where $E_b/A$ is maximum. The released energy equals the increase in total
binding energy.

### Derivation of Energy Released from the Binding Energy Curve

1. For any nuclear process, the total number of nucleons is conserved:
   $A_{\text{products}} = A_{\text{reactants}}$.
2. The binding energy per nucleon changes from $(E_b/A)_{\text{initial}}$ to
   $(E_b/A)_{\text{final}}$.
3. Total binding energy before: $E_{b,\text{initial}} = (E_b/A)_{\text{initial}} \times A$.
4. Total binding energy after: $E_{b,\text{final}} = (E_b/A)_{\text{final}} \times A$.
5. Energy released equals the increase in total binding energy:

$$\Delta E = \left[(E_b/A)_{\text{final}} - (E_b/A)_{\text{initial}}\right] \times A$$

$$\boxed{\Delta E = \Delta(E_b/A) \times A}$$

For **fission** of heavy nuclei: $(E_b/A)_{\text{final}} > (E_b/A)_{\text{initial}}$, so
$\Delta E > 0$.

For **fusion** of light nuclei: $(E_b/A)_{\text{final}} > (E_b/A)_{\text{initial}}$, so
$\Delta E > 0$.

$\square$

## 3. Nuclear Fission

**Definition.** Nuclear fission is the process in which a heavy nucleus splits into two (or more)
lighter nuclei, releasing energy and typically one or more neutrons.

### Process

A heavy nucleus (e.g., uranium-235) absorbs a neutron and splits into two lighter nuclei (fission
fragments), releasing energy and more neutrons:

$$\prescript{1}{}{0}\text{n} + \prescript{235}{}{92}\text{U} \to \prescript{236}{}{92}\text{U}^* \to \prescript{141}{}{56}\text{Ba} + \prescript{92}{}{36}\text{Kr} + 3\prescript{1}{}{0}\text{n} + \text{energy}$$

### Energy Released

The fission fragments have a higher binding energy per nucleon than the parent nucleus. The energy
released is:

$$\Delta E = (E_b/A)_{\text{products}} \times A_{\text{products}} - (E_b/A)_{\text{parent}} \times A_{\text{parent}}$$

For U-235 fission: $\Delta E \approx 200$ MeV per fission event.

### Chain Reaction

**Definition.** A chain reaction is a self-sustaining series of nuclear fission events in which
neutrons released from each fission induce further fission events.

**Definition.** The critical mass is the minimum mass of fissile material required to sustain a
nuclear chain reaction under given conditions.

Each fission event releases 2-3 neutrons, which can induce further fission events. If each fission
causes exactly one further fission, the reaction is **critical** (steady). If more than one, it is
**supercritical** (increasing). If fewer, it is **subcritical** (dying out).

**Controlled chain reaction**: nuclear power stations use control rods (e.g., boron or cadmium,
which absorb neutrons) to maintain a critical state.

**Uncontrolled chain reaction**: nuclear weapons.

## 4. Nuclear Fusion

**Definition.** Nuclear fusion is the process in which two light nuclei combine to form a heavier
nucleus, releasing energy due to the increase in binding energy per nucleon.

### Process

Two light nuclei combine to form a heavier nucleus, releasing energy:

$$\prescript{2}{}{1}\text{H} + \prescript{3}{}{1}\text{H} \to \prescript{4}{}{2}\text{He} + \prescript{1}{}{0}\text{n} + 17.6\,\text{MeV}$$

### Conditions for Fusion

For fusion to occur, the nuclei must overcome the **Coulomb barrier** — the electrostatic repulsion
between positively charged nuclei. This requires:

1. **Extremely high temperatures** ($\sim 10^8$ K) to give nuclei sufficient kinetic energy
2. **High particle density** to ensure frequent collisions
3. **Confinement** for long enough for fusion to occur

**Magnetic confinement** (tokamak) and **inertial confinement** (laser fusion) are two approaches.

### Why Fusion is Harder than Fission

Fission is initiated by a neutral particle (neutron), so there is no Coulomb barrier to overcome.
Fusion requires positively charged nuclei to approach within $\sim 10^{-15}$ m, requiring enormous
kinetic energy to overcome the Coulomb repulsion.

:::info Board Note AQA and Edexcel focus on the qualitative aspects of fission and fusion. CIE may
require calculation of energy released from mass defect. :::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Calculate the mass defect of $\prescript{56}{}{26}\text{Fe}$. Given:
$m(\prescript{56}{}{26}\text{Fe}) = 55.93493$ u, $m_p = 1.00728$ u, $m_n = 1.00867$ u.

**Answer.**
$\Delta m = 26(1.00728) + 30(1.00867) - 55.93493 = 26.18928 + 30.26010 - 55.93493 = 0.51445$ u.

$E_b = 0.51445 \times 931.5 = 479.2$ MeV. $E_b/A = 479.2/56 = 8.56$ MeV/nucleon.

<b>If you get this wrong, revise:</b>
[Mass Defect and Binding Energy](#1-mass-defect-and-binding-energy)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

The binding energy per nucleon of $\prescript{235}{}{92}\text{U}$ is 7.59 MeV. When it undergoes
fission into two nuclei each with binding energy per nucleon of 8.40 MeV, calculate the energy
released per fission.

**Answer.** Total binding energy before: $235 \times 7.59 = 1783.65$ MeV. Total binding energy
after: $235 \times 8.40 = 1974$ MeV. Energy released $= 1974 - 1783.65 = 190.35$ MeV $\approx 190$
MeV.

<b>If you get this wrong, revise:</b> [Binding Energy per Nucleon](#2-binding-energy-per-nucleon)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Explain why energy is released in both nuclear fission and nuclear fusion, using the binding energy
per nucleon curve.

**Answer.** The binding energy per nucleon curve peaks at iron-56 ($\sim 8.8$ MeV/nucleon). Fission
splits heavy nuclei (which have lower $E_b/A$ than the peak) into lighter fragments (which have
higher $E_b/A$). Fusion combines light nuclei (which have lower $E_b/A$) into heavier ones (which
have higher $E_b/A$). In both cases, the total binding energy increases, and the difference is
released as energy.

<b>If you get this wrong, revise:</b> [The Binding Energy Curve](#the-binding-energy-curve)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

Calculate the energy released when a proton and neutron combine to form a deuteron
($\prescript{2}{}{1}\text{H}$). Given: $m_p = 1.67262 \times 10^{-27}$ kg,
$m_n = 1.67493 \times 10^{-27}$ kg, $m_d = 3.34358 \times 10^{-27}$ kg, $c = 3.0 \times 10^8$ m
s$^{-1}$.

**Answer.** $\Delta m = m_p + m_n - m_d = 1.67262 + 1.67493 - 3.34358 = 0.00397 \times 10^{-27}$ kg.

$E = \Delta m c^2 = 0.00397 \times 10^{-27} \times 9.0 \times 10^{16} = 3.57 \times 10^{-13}$ J
$= 2.23$ MeV.

<b>If you get this wrong, revise:</b>
[Mass Defect and Binding Energy](#1-mass-defect-and-binding-energy)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

In a nuclear reactor, each fission of U-235 releases 200 MeV and produces on average 2.5 neutrons.
If the reactor is operating at a power of 500 MW, calculate the number of fissions per second.

**Answer.** Energy per fission $= 200$ MeV
$= 200 \times 10^6 \times 1.60 \times 10^{-19} = 3.2 \times 10^{-11}$ J.

Number of fissions per second $= 500 \times 10^6 / 3.2 \times 10^{-11} = 1.56 \times 10^{19}$
s$^{-1}$.

<b>If you get this wrong, revise:</b> [Nuclear Fission](#3-nuclear-fission)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Explain the role of a moderator and control rods in a nuclear fission reactor.

**Answer.** **Moderator** (e.g., graphite or water): slows down fast fission neutrons to thermal
energies. Slow (thermal) neutrons have a much larger fission cross-section for U-235, making the
chain reaction more efficient. **Control rods** (e.g., boron or cadmium): absorb neutrons without
fissioning. By adjusting their depth, the number of neutrons available for fission is controlled,
maintaining the reactor in a critical state (one fission per fission, on average).

<b>If you get this wrong, revise:</b> [Chain Reaction](#chain-reaction)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

The fusion reaction
$\prescript{2}{}{1}\text{H} + \prescript{2}{}{1}\text{H} \to \prescript{3}{}{2}\text{He} + \prescript{1}{}{0}\text{n}$
releases 3.27 MeV. Given the masses: $m(\prescript{2}{}{1}\text{H}) = 2.01410$ u,
$m(\prescript{3}{}{2}\text{He}) = 3.01603$ u, $m_n = 1.00867$ u. Verify the energy release using the
mass defect.

**Answer.** Total mass before: $2 \times 2.01410 = 4.02820$ u. Total mass after:
$3.01603 + 1.00867 = 4.02470$ u.

$\Delta m = 4.02820 - 4.02470 = 0.00350$ u. $E = 0.00350 \times 931.5 = 3.26$ MeV $\approx 3.27$
MeV. $\checkmark$

<b>If you get this wrong, revise:</b> [Nuclear Fusion](#4-nuclear-fusion)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

Why does nuclear fusion require extremely high temperatures but fission does not?

**Answer.** Fission is initiated by neutrons, which carry no charge and therefore experience no
Coulomb repulsion from the nucleus. They can approach the nucleus freely and be absorbed. Fusion
requires two positively charged nuclei to approach within $\sim 10^{-15}$ m (the range of the strong
nuclear force), but the Coulomb repulsion between like charges creates an energy barrier of
$\sim$MeV. Extremely high temperatures ($\sim 10^8$ K) are needed to give nuclei sufficient kinetic
energy (via the Maxwell-Boltzmann distribution) to overcome this barrier.

<b>If you get this wrong, revise:</b> [Conditions for Fusion](#conditions-for-fusion)

</p>
</details>
