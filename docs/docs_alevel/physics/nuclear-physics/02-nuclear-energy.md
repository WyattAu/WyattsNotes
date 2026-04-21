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

<PhetSimulation simulationId="nuclear-fission" title="Nuclear Fission" />

Explore the simulation above to develop intuition for this topic.

## 1. Mass Defect and Binding Energy

### Mass Defect

**Definition.** The mass defect $\Delta m$ is the difference between the mass of a nucleus and the
total mass of its separated constituent nucleons. It represents the mass equivalent of the binding
energy that holds the nucleus together.

The **mass defect** $\Delta m$ is the difference between the mass of a nucleus and the sum of the
masses of its constituent nucleons:

$$\Delta m = Zm_p + Nm_n - m_{\mathrm{nucleus}}$$

where $Z$ is the number of protons, $N$ is the number of neutrons, $m_p$ is the proton mass, $m_n$
is the neutron mass, and $m_{\mathrm{nucleus}}$ is the actual nuclear mass.

The mass defect is always **positive** for stable nuclei — the nucleus is lighter than its
constituent parts.

### Einstein's Mass-Energy Equation

**Definition.** Binding energy is the minimum energy required to completely separate a nucleus into
its individual protons and neutrons, or equivalently, the energy released when a nucleus is formed
from its constituents.

### Derivation of Mass-Energy Equivalence

1. From Einstein's special relativity, the total energy of a body at rest is $E = mc^2$.
2. A nucleus of mass $m_{\mathrm{nucleus}}$ is lighter than its constituent nucleons by the mass
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

**Calculating mass defect.** Use atomic mass units (u), where
$1\,\mathrm{u} = 1.661 \times 10^{-27}$ kg, and $1\,\mathrm{u} \cdot c^2 = 931.5$ MeV.

<details>
<summary>Example: Binding Energy of Helium-4</summary>
Calculate the binding energy of $\prescript{4}{}{2}\mathrm{He}$. Given:
$m(\prescript{4}{}{2}\mathrm{He}) = 4.00260$ u, $m_H = 1.00783$ u (hydrogen atom mass), $m_n = 1.00867$ u.

**Answer.** $\Delta m = 2(1.00783) + 2(1.00867) - 4.00260 = 2.01566 + 2.01734 - 4.00260 = 0.03040$
u.

$E_b = 0.03040 \times 931.5 = 28.3$ MeV.

:::info When using atomic masses (which include electrons), use the hydrogen atom mass
$m_H = 1.00783$ u rather than the proton mass $m_p = 1.00728$ u. The electron binding energies
cancel out. :::

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
- **Iron-56** ($\prescript{56}{}{26}\mathrm{Fe}$): the peak of the curve at $\sim 8.8$ MeV/nucleon.
  Iron-56 is the most stable nucleus.
- **Heavy nuclei** ($A > 60$): binding energy per nucleon gradually decreases. Nuclei become more
  stable by **fission** (splitting heavy nuclei to reach higher $E_b/A$).

**Intuition.** Both fusion and fission release energy because they move nuclei towards the peak of
the binding energy curve, where $E_b/A$ is maximum. The released energy equals the increase in total
binding energy.

### Derivation of Energy Released from the Binding Energy Curve

1. For any nuclear process, the total number of nucleons is conserved:
   $A_{\mathrm{products}} = A_{\mathrm{reactants}}$.
2. The binding energy per nucleon changes from $(E_b/A)_{\mathrm{initial}}$ to
   $(E_b/A)_{\mathrm{final}}$.
3. Total binding energy before: $E_{b,\mathrm{initial}} = (E_b/A)_{\mathrm{initial}} \times A$.
4. Total binding energy after: $E_{b,\mathrm{final}} = (E_b/A)_{\mathrm{final}} \times A$.
5. Energy released equals the increase in total binding energy:

$$\Delta E = \left[(E_b/A)_{\mathrm{final}} - (E_b/A)_{\mathrm{initial}}\right] \times A$$

$$\boxed{\Delta E = \Delta(E_b/A) \times A}$$

For **fission** of heavy nuclei: $(E_b/A)_{\mathrm{final}} > (E_b/A)_{\mathrm{initial}}$, so
$\Delta E > 0$.

For **fusion** of light nuclei: $(E_b/A)_{\mathrm{final}} > (E_b/A)_{\mathrm{initial}}$, so
$\Delta E > 0$.

$\square$

## 3. Nuclear Fission

**Definition.** Nuclear fission is the process in which a heavy nucleus splits into two (or more)
lighter nuclei, releasing energy and typically one or more neutrons.

### Process

A heavy nucleus (e.g., uranium-235) absorbs a neutron and splits into two lighter nuclei (fission
fragments), releasing energy and more neutrons:

$$\prescript{1}{}{0}\mathrm{n} + \prescript{235}{}{92}\mathrm{U} \to \prescript{236}{}{92}\mathrm{U}^* \to \prescript{141}{}{56}\mathrm{Ba} + \prescript{92}{}{36}\mathrm{Kr} + 3\prescript{1}{}{0}\mathrm{n} + \mathrm{energy}$$

### Energy Released

The fission fragments have a higher binding energy per nucleon than the parent nucleus. The energy
released is:

$$\Delta E = (E_b/A)_{\mathrm{products}} \times A_{\mathrm{products}} - (E_b/A)_{\mathrm{parent}} \times A_{\mathrm{parent}}$$

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

## 4. Induced Fission Cross-Sections

### The Concept of Nuclear Cross-Section

**Definition.** The nuclear cross-section $\sigma$ quantifies the probability that a specific
nuclear reaction occurs when a projectile strikes a target nucleus. It has dimensions of area.

The cross-section is defined operationally as:

$$\sigma = \frac{\mathrm{number of reactions per unit time}}{\mathrm{incident flux} \times \mathrm{number of target nuclei}}$$

The SI unit would be m$^2$, but nuclear cross-sections are so small that the standard unit is the
**barn**:

$$1\,\mathrm{barn} = 10^{-28}\,\mathrm{m}^2$$

The name is deliberate: a typical nuclear cross-section is "as big as a barn" compared to the
geometric cross-section of a nucleus ($\sim \pi R^2 \sim 10^{-30}$ m$^2$). Quantum mechanical
effects --- resonances, tunnelling, and the wave nature of particles --- make the effective
interaction area much larger than the physical size.

### Fission Cross-Section versus Neutron Energy

The fission cross-section depends critically on neutron energy. This is the fundamental reason why
some isotopes are "fissile" and others are merely "fertile."

For $\prescript{235}{}{92}\mathrm{U}$:

- Thermal neutron cross-section ($E \approx 0.025$ eV): $\sigma_f \approx 585$ barns
- Fast neutron cross-section ($E \approx 1$ MeV): $\sigma_f \approx 1$ barn

This roughly 500-fold decrease from thermal to fast energies is why a moderator is essential in
thermal reactors.

### Why U-235 is Fissile but U-238 is Not

**Definition.** A **fissile** nucleus can undergo fission after absorbing a neutron of any energy,
including thermal. A **fertile** nucleus cannot fission with thermal neutrons but can be converted
into a fissile isotope.

The distinction follows from the odd-even binding energy effect. When a nucleus absorbs a neutron,
the compound nucleus has excitation energy equal to the binding energy of the added neutron
$E_b^{\mathrm{added}}$. Fission occurs only if this exceeds the fission barrier $E_f$.

For $\prescript{235}{}{92}\mathrm{U} + \mathrm{n} \to \prescript{236}{}{92}\mathrm{U}^*$:

- $\prescript{235}{}{92}\mathrm{U}$ has 143 neutrons (odd). Adding a neutron pairs the last neutron,
  gaining extra pairing energy.
- $E_b^{\mathrm{added}} \approx 6.5$ MeV while $E_f \approx 5.3$ MeV.
- Since $E_b^{\mathrm{added}} \gt{} E_f$, fission proceeds even with thermal neutrons.

For $\prescript{238}{}{92}\mathrm{U} + \mathrm{n} \to \prescript{239}{}{92}\mathrm{U}^*$:

- $\prescript{238}{}{92}\mathrm{U}$ has 146 neutrons (even). Adding a neutron creates an unpaired
  neutron with less pairing energy gain.
- $E_b^{\mathrm{added}} \approx 4.9$ MeV while $E_f \approx 5.5$ MeV.
- Since $E_b^{\mathrm{added}} \lt{} E_f$, thermal neutrons cannot induce fission.

:::warning Common Pitfall Do not confuse "fissile" with "radioactive." U-238 is highly radioactive
but is not fissile --- it cannot sustain a chain reaction with thermal neutrons. The only naturally
occurring fissile isotope is U-235 (0.72\% of natural uranium). :::

### Fast Fission of U-238

U-238 can fission, but only with neutrons above approximately 1 MeV. The condition is:

$$E_b^{\mathrm{added}} + E_n^{\mathrm{kinetic}} \gt{} E_f \implies 4.9 + E_n \gt{} 5.5 \implies E_n \gt{} 0.6\,\mathrm{MeV}$$

The practical threshold is quoted as $\sim 1$ MeV to account for the distribution of fission barrier
heights and the very small cross-section just above threshold.

### The Conversion Chain: U-238 to Pu-239

Although U-238 is not fissile, it is **fertile**. It captures a neutron and is transmuted into
Pu-239 through beta decays:

$$\prescript{238}{}{92}\mathrm{U} + \mathrm{n} \to \prescript{239}{}{92}\mathrm{U} \xrightarrow{\beta^-,\; 23.5\,\mathrm{min}} \prescript{239}{}{93}\mathrm{Np} \xrightarrow{\beta^-,\; 2.36\,\mathrm{days}} \prescript{239}{}{94}\mathrm{Pu}$$

This conversion chain is the basis of **breeder reactors**, discussed in Section 5.

## 5. Nuclear Fission Mechanics

### Fission Fragment Mass Distribution

When a heavy nucleus fissions, the two fragments are **not** of equal mass. The distribution is
asymmetric, producing one "heavy" fragment ($A \approx 135$--$145$) and one "light" fragment
($A \approx 90$--$100$).

The nuclear shell model explains this qualitatively. Magic numbers (2, 8, 20, 28, 50, 82, 126)
correspond to filled nuclear shells, and nuclei near magic numbers are significantly more stable.
Asymmetric splitting allows one fragment to approach a magic neutron number ($N = 82$), which is
energetically favourable. Symmetric splitting ($A \approx 118$ each) is roughly 100 times less
probable.

### Prompt Neutrons versus Delayed Neutrons

**Prompt neutrons** are emitted within $\sim 10^{-14}$ s of fission as the highly deformed fragments
de-excite. Typically 2--3 are emitted per fission.

**Delayed neutrons** are emitted on timescales of seconds to minutes by certain fission products
that undergo beta decay to excited states above the neutron separation energy. Key precursors for
U-235 thermal fission:

| Precursor                         | Half-life | Yield per 100 fissions |
| --------------------------------- | --------- | ---------------------- |
| $\prescript{87}{}{35}\mathrm{Br}$ | 55.7 s    | 0.027                  |
| $\prescript{137}{}{53}\mathrm{I}$ | 24.5 s    | 0.025                  |

The **delayed neutron fraction** $\beta$ is the fraction of all fission neutrons that are delayed.
For U-235, $\beta \approx 0.0065$ (0.65\%). Although tiny, these neutrons are essential for reactor
control (see Section 6).

### Fission Product Poisoning

Some fission products have enormous neutron absorption cross-sections and can shut down the chain
reaction.

**Xenon-135** is the worst offender:

- Thermal absorption cross-section: $\sigma_a \approx 2.65 \times 10^6$ barns (the largest known for
  any stable nuclide)
- Produced mainly by decay:
  $\prescript{135}{}{52}\mathrm{Te} \to \prescript{135}{}{53}\mathrm{I}
  \xrightarrow{\beta^-} \prescript{135}{}{54}\mathrm{Xe} \xrightarrow{\beta^-} \prescript{135}{}{55}\mathrm{Cs}$
- $\prescript{135}{}{54}\mathrm{Xe}$ has $t_{1/2} = 9.2$ hours

After a reactor shutdown, xenon-135 builds up from iodine-135 decay faster than it decays away. This
**iodine pit** can prevent restart for 24--48 hours.

**Samarium-149**: $\sigma_a \approx 4.1 \times 10^4$ barns, stable, and accumulates permanently.

### Energy Distribution in Fission

The $\sim 200$ MeV released per U-235 fission is distributed as follows:

| Component                         | Energy (MeV)   | Form                       |
| --------------------------------- | -------------- | -------------------------- |
| Kinetic energy of fragments       | $\sim 170$     | Heat (immediate)           |
| Kinetic energy of prompt neutrons | $\sim 5$       | Heat (after moderation)    |
| Prompt gamma rays                 | $\sim 7$       | Radiation / heat           |
| Beta particles (product decay)    | $\sim 5$       | Heat (delayed)             |
| Gamma rays (product decay)        | $\sim 6$       | Radiation / heat (delayed) |
| Anti-neutrinos                    | $\sim 12$      | Lost (escape reactor)      |
| **Total recoverable**             | **$\sim 193$** |                            |

:::warning Common Pitfall Approximately 12 MeV per fission ($\sim 6\%$) is carried away by
anti-neutrinos, which interact so weakly that they escape the reactor entirely. When calculating
thermal power output, use $\sim 200$ MeV total but $\sim 193$ MeV recoverable. The neutrino energy
is unrecoverable. :::

### Breeder Reactors

A **breeder reactor** produces more fissile material than it consumes by placing fertile material
around the core where excess neutrons convert it to fissile isotopes.

**Uranium-plutonium cycle:**

$$\prescript{238}{}{92}\mathrm{U} + \mathrm{n} \to \prescript{239}{}{92}\mathrm{U} \to \prescript{239}{}{93}\mathrm{Np} \to \prescript{239}{}{94}\mathrm{Pu}$$

**Thorium-uranium cycle:**

$$\prescript{232}{}{90}\mathrm{Th} + \mathrm{n} \to \prescript{233}{}{90}\mathrm{Th} \to \prescript{233}{}{91}\mathrm{Pa} \to \prescript{233}{}{92}\mathrm{U}$$

The breeding ratio
$\mathrm{BR} = \mathrm{fissile atoms produced} / \mathrm{fissile atoms consumed}$. For BR $\gt{} 1$,
the reactor is a net producer. Fast breeder reactors using liquid sodium achieve BR
$\approx 1.2$--$1.3$. The thorium cycle is attractive because thorium is roughly $3\times$ more
abundant than uranium and produces less long-lived transuranic waste.

### Nuclear Waste Classification

| Level              | Description                   | Examples              | Disposal                 |
| ------------------ | ----------------------------- | --------------------- | ------------------------ |
| High Level (HLW)   | Highly radioactive, high heat | Spent fuel rods       | Deep geological disposal |
| Intermediate (ILW) | Some shielding required       | Reactor components    | Engineered facilities    |
| Low Level (LLW)    | Minimal radioactivity         | Contaminated clothing | Near-surface disposal    |

:::tip Exam Technique When discussing nuclear waste, always connect half-life to disposal strategy.
Short half-life isotopes can be stored and left to decay. Long half-life isotopes (thousands to
millions of years) require geological disposal relying on multiple barriers: waste form
(vitrification), container (steel/copper), buffer (bentonite clay), and host rock (granite/clay).
:::

## 6. Nuclear Reactor Design

### Why Neutrons Must Be Moderated

Fission neutrons are born with energies peaking around 1--2 MeV. As established in Section 4, the
U-235 fission cross-section at thermal energies ($\sigma_f \approx 585$ barns) is roughly 500 times
larger than at fast energies ($\sigma_f \approx 1$ barn). Without moderation, the probability of
inducing further fission is too low to sustain a chain reaction with natural or low-enriched
uranium.

### Moderation by Elastic Collisions

Neutrons are slowed by **elastic collisions** with light moderator nuclei. Consider a neutron of
mass $m_n$ and kinetic energy $E$ colliding elastically with a stationary nucleus of mass $M$.

**Theorem (maximum energy loss).** The maximum fractional energy loss per head-on collision is:

$$\frac{\Delta E_{\max}}{E} = \frac{4\,m_n\,M}{(m_n + M)^2}$$

_Proof._ In the lab frame, the neutron has initial velocity $v$ and the target is at rest. After a
head-on elastic collision, conservation of momentum and kinetic energy give the neutron's final
velocity:

$$v' = \frac{m_n - M}{m_n + M}\,v$$

The neutron's final kinetic energy is
$E' = \frac{1}{2}m_n(v')^2 = \left(\frac{m_n - M}{m_n + M}\right)^2 E$.

Therefore:

$$\frac{\Delta E}{E} = \frac{E - E'}{E} = 1 - \left(\frac{m_n - M}{m_n + M}\right)^2 = \frac{4m_n M}{(m_n + M)^2}$$

This is maximised when $m_n = M$ (equal masses), giving $\Delta E/E = 1$: the neutron transfers all
its energy in a single collision. $\square$

**Consequences for moderator choice:**

| Moderator                                  | $M/m_n$ | $\Delta E_{\max}/E$ | Collisions to thermalise |
| ------------------------------------------ | ------- | ------------------- | ------------------------ |
| Hydrogen ($\prescript{1}{}{1}\mathrm{H}$)  | 1       | 1.000               | $\sim 18$                |
| Deuterium ($\prescript{2}{}{1}\mathrm{H}$) | 2       | 0.889               | $\sim 25$                |
| Carbon-12                                  | 12      | 0.284               | $\sim 115$               |

The average logarithmic energy decrement per collision is $\xi$, and the number of collisions to
thermalise from $E_0 = 2$ MeV to $E_{\mathrm{th}} = 0.025$ eV is $n = \ln(E_0/E_{\mathrm{th}})/\xi$.
Hydrogen is the best moderator by energy loss per collision, but it has a non-negligible absorption
cross-section. Deuterium (in heavy water) is the best practical compromise: high energy loss with
negligible absorption.

### Control Rods and the Multiplication Factor

Control rods are made of materials with very high neutron absorption cross-sections: boron-10
($\sigma_a \approx 3840$ barns), cadmium-113 ($\sigma_a \approx 20\,800$ barns), or hafnium.

The **multiplication factor** is:

$$k = \frac{\mathrm{neutrons in generation } n + 1}{\mathrm{neutrons in generation } n}$$

| Regime        | Condition   | Behaviour                       |
| ------------- | ----------- | ------------------------------- |
| Subcritical   | $k \lt{} 1$ | Fission rate decreases          |
| Critical      | $k = 1$     | Steady power (normal operation) |
| Supercritical | $k \gt{} 1$ | Power increases                 |

The **effective** multiplication factor $k_{\mathrm{eff}}$ accounts for neutron leakage and non-fuel
absorption: $k_{\mathrm{eff}} = k_{\infty} \cdot P_{\mathrm{non-leak}}$, where $k_{\infty}$ is the
infinite-medium factor and $P_{\mathrm{non-leak}}$ is the non-leakage probability.

:::tip Exam Technique When asked about reactor control, state the precise condition: "The reactor is
critical when $k_{\mathrm{eff}} = 1$. Control rods absorb neutrons to reduce $k_{\mathrm{eff}}$
below 1 for shutdown, or are adjusted to maintain $k_{\mathrm{eff}} = 1$ for steady power." :::

### Delayed Neutrons and Reactor Control

This is one of the most important engineering facts about nuclear reactors. Without delayed
neutrons, controlling a reactor would be essentially impossible on human timescales.

**Theorem.** The reactor response time is governed by delayed neutrons, not the prompt neutron
lifetime, provided $k_{\mathrm{eff}} \lt 1 + \beta$.

_Proof._ The prompt neutron lifetime is $\ell \approx 10^{-4}$ s. If $k_{\mathrm{eff}} = 1.001$
(0.1\% supercritical) with only prompt neutrons, the power grows as:

$$P(t) = P_0 \, e^{(k-1)t/\ell} = P_0 \, e^{0.001 \times t / 10^{-4}} = P_0 \, e^{10\,t}$$

Power doubles every $\ln 2 / 10 \approx 0.069$ s. No mechanical system can respond this fast.

With delayed neutrons (fraction $\beta \approx 0.0065$ for U-235), the reactor is "prompt
subcritical" when $1 \lt k_{\mathrm{eff}} \lt 1 + \beta$. In this regime, the neutron population
grows on the timescale of the longest-lived delayed precursor ($\sim 55$ s for Br-87), not the
prompt lifetime. The effective time constant becomes:

$$\tau_{\mathrm{eff}} \approx \frac{\beta / \bar{\lambda}}{k_{\mathrm{eff}} - 1}$$

where $\bar{\lambda} \approx 0.08\,\mathrm{s}^{-1}$. For $k_{\mathrm{eff}} = 1.001$:
$\tau_{\mathrm{eff}} \approx 0.0065 / (0.08 \times 0.001) \approx 81$ s --- easily manageable by
mechanical control systems. $\square$

:::warning Common Pitfall The reactor period is not the prompt neutron lifetime. The reactor
responds on the timescale set by delayed neutrons ($\sim$tens of seconds), provided
$k_{\mathrm{eff}} \lt 1 + \beta$. Only if $k_{\mathrm{eff}}$ exceeds $1 + \beta$ does the reactor
become "prompt supercritical" and uncontrollable. :::

### Coolant

The coolant transfers heat from the fuel to the steam generators or turbine. Requirements: high
thermal conductivity and specific heat capacity, low neutron absorption, chemical stability under
radiation, and high boiling point.

| Coolant              | Used in      | Advantages                             | Disadvantages                                |
| -------------------- | ------------ | -------------------------------------- | -------------------------------------------- |
| Light water          | PWR, BWR     | Cheap, good moderator                  | Boils at 100 deg C (1 atm), absorbs neutrons |
| Heavy water (D$_2$O) | CANDU        | Excellent moderator, low absorption    | Expensive                                    |
| Carbon dioxide       | AGR          | Chemically inert, no phase change      | Lower heat capacity                          |
| Liquid sodium        | Fast breeder | Excellent heat transfer, no moderation | Reacts violently with water/air              |

### Fuel and Enrichment

Natural uranium is $\sim 0.72\%$ U-235 and $\sim 99.28\%$ U-238. Thermal reactors require enriched
uranium: light water reactors use 3--5\% U-235, research reactors up to 20\%. Fuel is fabricated as
ceramic UO$_2$ pellets sealed in zirconium alloy (zircaloy) cladding tubes, assembled into fuel rods
and bundles.

### Shielding

Radiation shielding protects personnel and the environment. **Concrete** (cheap, dense, contains
hydrogen for neutron moderation) provides bulk biological shielding. **Lead** (very dense) is used
for compact gamma shielding. **Water** provides both shielding and moderation in spent fuel pools.

### PWR versus AGR Comparison

| Feature             | PWR                                 | AGR                                         |
| ------------------- | ----------------------------------- | ------------------------------------------- |
| Moderator           | Light water                         | Graphite                                    |
| Coolant             | Pressurised water ($\sim 155$ bar)  | CO$_2$ gas ($\sim 40$ bar)                  |
| Fuel                | Enriched UO$_2$ (3--5\%)            | Enriched UO$_2$ (2--3\%) in stainless steel |
| Coolant temperature | $\sim 315$ deg C                    | $\sim 650$ deg C                            |
| Thermal efficiency  | $\sim 33\%$                         | $\sim 41\%$                                 |
| Steam cycle         | Secondary loop (no boiling in core) | Direct (CO$_2$ heats water in boiler)       |

:::tip Exam Technique For reactor comparison questions, the key trade-off is: PWRs use water as both
moderator and coolant (simpler but lower efficiency), while AGRs separate them (graphite moderator,
CO$_2$ coolant), allowing higher temperature and thus higher efficiency from
$\eta \lt{} 1 - T_c/T_h$. :::

## 7. Nuclear Fusion

**Definition.** Nuclear fusion is the process in which two light nuclei combine to form a heavier
nucleus, releasing energy due to the increase in binding energy per nucleon.

### Process

Two light nuclei combine to form a heavier nucleus, releasing energy:

$$\prescript{2}{}{1}\mathrm{H} + \prescript{3}{}{1}\mathrm{H} \to \prescript{4}{}{2}\mathrm{He} + \prescript{1}{}{0}\mathrm{n} + 17.6\,\mathrm{MeV}$$

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

## 8. Nuclear Fusion in Detail

### The Proton-Proton Chain

The pp chain is the dominant fusion process in main-sequence stars with mass $\lt 1.5\,M_\odot$
(solar masses). It proceeds in three steps:

**Step 1** (rate-limiting, mediated by the weak interaction):

$$\prescript{1}{}{1}\mathrm{H} + \prescript{1}{}{1}\mathrm{H} \to \prescript{2}{}{1}\mathrm{H} + \mathrm{e}^+ + \nu_e + 0.42\,\mathrm{MeV}$$

One proton must undergo inverse beta decay ($p \to n + e^+ + \nu_e$), which requires the weak force
and is extraordinarily slow --- mean time $\sim 10^{10}$ years in the solar core. This slowness is
why the Sun has a long lifetime.

**Step 2**:

$$\prescript{2}{}{1}\mathrm{H} + \prescript{1}{}{1}\mathrm{H} \to \prescript{3}{}{2}\mathrm{He} + \gamma + 5.49\,\mathrm{MeV}$$

**Step 3** (dominant branch, $\sim 85\%$ probability):

$$\prescript{3}{}{2}\mathrm{He} + \prescript{3}{}{2}\mathrm{He} \to \prescript{4}{}{2}\mathrm{He} + 2\prescript{1}{}{1}\mathrm{H} + 12.86\,\mathrm{MeV}$$

**Net reaction:**
$4\prescript{1}{}{1}\mathrm{H} \to \prescript{4}{}{2}\mathrm{He} + 2\mathrm{e}^+ + 2\nu_e + 2\gamma + 26.7\,\mathrm{MeV}$

### The CNO Cycle

In stars more massive than $\sim 1.5\,M_\odot$, the CNO cycle dominates. Carbon, nitrogen, and
oxygen act as catalysts:

$$\prescript{12}{}{6}\mathrm{C} \xrightarrow{+\mathrm{p}} \prescript{13}{}{7}\mathrm{N} \xrightarrow{\beta^+} \prescript{13}{}{6}\mathrm{C} \xrightarrow{+\mathrm{p}} \prescript{14}{}{7}\mathrm{N} \xrightarrow{+\mathrm{p}} \prescript{15}{}{8}\mathrm{O} \xrightarrow{\beta^+} \prescript{15}{}{7}\mathrm{N} \xrightarrow{+\mathrm{p}} \prescript{12}{}{6}\mathrm{C} + \prescript{4}{}{2}\mathrm{He}$$

**Net reaction:** $4\mathrm{p} \to \prescript{4}{}{2}\mathrm{He} + 26.7$ MeV (identical to the pp
chain).

The CNO cycle rate scales as $\propto T^{16\mathrm{--}20}$ (for the slowest step) versus
$\propto T^4$ for the pp chain. At $T \gt{} 1.5 \times 10^7$ K the CNO cycle dominates. It also
produces a steeper temperature gradient in the stellar core, driving convection in massive stars.

### The Lawson Criterion

For net energy output, the fusion power must exceed power losses. John Lawson (1957) derived the
minimum condition for D-T fusion:

$$n\tau \gt{} 10^{20}\,\mathrm{s}\,\mathrm{m}^{-3}$$

where $n$ is the ion density (m$^{-3}$) and $\tau$ is the energy confinement time (s).

**Derivation sketch.** Fusion power density:
$P_{\mathrm{fus}} = \frac{1}{4}n^2\langle\sigma v\rangle
E_{\mathrm{fus}}$, where
$\langle\sigma v\rangle$ is the reactivity (Maxwell-Boltzmann averaged) and the factor of $1/4$
accounts for equal D and T densities. Power lost by thermal conduction is
$P_{\mathrm{loss}} = 3nkT/\tau$. Setting $P_{\mathrm{fus}} \ge P_{\mathrm{loss}}$ and substituting
the temperature-dependent $\langle\sigma v\rangle$ yields the Lawson criterion. The exact numerical
value depends on fuel choice and loss model.

The triple product $nT\tau \gt{} 3 \times 10^{21}\,\mathrm{keV}\,\mathrm{s}\,\mathrm{m}^{-3}$ is
sometimes quoted as an equivalent form.

### Tokamak Design

A tokamak confines hot plasma in a toroidal (doughnut-shaped) chamber using magnetic fields:

- **Toroidal field** $B_t$: produced by coils wound around the torus, prevents outward radial drift.
- **Poloidal field** $B_p$: produced by the plasma current itself (induced by a central solenoid),
  prevents vertical drift.
- The combined helical field lines confine particles as they spiral along them.

The safety factor $q = rB_t / RB_p$ (minor radius $r$, major radius $R$) must satisfy $q \gt{} 1$
everywhere for stability.

### Inertial Confinement Fusion

In inertial confinement fusion (ICF), a small D-T pellet is compressed by laser or particle beams.
The outer layer ablates outward, driving an inward implosion that compresses the fuel to
$\sim 10^3\times$ solid density. The central "hot spot" reaches $\sim 10$ keV ($\sim 10^8$ K),
initiating fusion before the pellet disassembles. Confinement relies on the inertia of the fuel
itself --- no magnetic fields are needed.

### Why D-T is the Easiest Fusion Reaction

$$\prescript{2}{}{1}\mathrm{H} + \prescript{3}{}{1}\mathrm{H} \to \prescript{4}{}{2}\mathrm{He} + \mathrm{n} + 17.6\,\mathrm{MeV}$$

D-T has the lowest Coulomb barrier of any practical fuel combination: tritium has the largest
nuclear radius relative to its charge, the $Q$-value of 17.6 MeV is the highest per reaction of any
D-based fuel, and the reactivity $\langle\sigma v\rangle$ peaks at the lowest temperature ($\sim 70$
keV versus $\sim 500$ keV for D-D). However, tritium ($t_{1/2} = 12.3$ years) must be bred from
lithium:

$$\prescript{6}{}{3}\mathrm{Li} + \mathrm{n} \to \prescript{4}{}{2}\mathrm{He} + \prescript{3}{}{1}\mathrm{H} + 4.8\,\mathrm{MeV}$$

### The ITER Project

ITER (International Thermonuclear Experimental Reactor), under construction in Cadarache, France,
aims to demonstrate $Q \ge 10$ (fusion gain: 10 times more power out than heating power in). Key
parameters: major radius 6.2 m, magnetic field 5.3 T, plasma current 15 MA, fusion power 500 MW from
50 MW input heating, pulse duration $\sim 400$ s. ITER is a proof-of-concept; electricity generation
is the goal of the subsequent DEMO reactor.

### Stellar Nucleosynthesis: The Iron Peak

The binding energy per nucleon curve peaks near iron-56. This has a profound consequence:

- Fusion of nuclei lighter than iron: **exothermic** (releases energy)
- Fusion of nuclei heavier than iron: **endothermic** (absorbs energy)
- Fission of nuclei heavier than iron: **exothermic**

In massive stars, successive fusion stages build heavier elements: H $\to$ He ($T \sim 10^7$ K), He
$\to$ C/O ($T \sim 10^8$ K), C $\to$ Ne/Mg, Ne $\to$ O/Mg, O $\to$ Si/S, Si $\to$ Fe
($T \sim 3 \times 10^9$ K). The process stops at iron because further fusion is endothermic. When
the iron core exceeds the Chandrasekhar limit ($\sim 1.4\,M_\odot$), it collapses and triggers a
supernova, whose energy drives the creation of elements heavier than iron via the s-process and
r-process.

:::warning Common Pitfall The "iron peak" is often simplified to "iron is the most stable nucleus."
Strictly, Ni-62 has the highest $E_b/A$ (8.7945 MeV/nucleon versus Fe-56's 8.7906 MeV/nucleon), but
Fe-56 is produced in greater abundance because the alpha process favours nuclei with $N = Z$. :::

## Problem Set

<details>
<summary>Problem 1</summary>
Calculate the mass defect of $\prescript{56}{}{26}\mathrm{Fe}$. Given:
$m(\prescript{56}{}{26}\mathrm{Fe}) = 55.93493$ u, $m_H = 1.00783$ u (hydrogen atom mass), $m_n = 1.00867$ u.

**Answer.**
$\Delta m = 26(1.00783) + 30(1.00867) - 55.93493 = 26.20358 + 30.26010 - 55.93493 = 0.52875$ u.

$E_b = 0.52875 \times 931.5 = 492.5$ MeV. $E_b/A = 492.5/56 = 8.79$ MeV/nucleon.

<b>If you get this wrong, revise:</b>
[Mass Defect and Binding Energy](#1-mass-defect-and-binding-energy)

</details>

<details>
<summary>Problem 2</summary>
The binding energy per nucleon of $\prescript{235}{}{92}\mathrm{U}$ is 7.59 MeV. When it undergoes
fission into two nuclei each with binding energy per nucleon of 8.40 MeV, calculate the energy
released per fission.

**Answer.** Total binding energy before: $235 \times 7.59 = 1783.65$ MeV. Total binding energy
after: $235 \times 8.40 = 1974$ MeV. Energy released $= 1974 - 1783.65 = 190.35$ MeV $\approx 190$
MeV.

<b>If you get this wrong, revise:</b> [Binding Energy per Nucleon](#2-binding-energy-per-nucleon)

</details>

<details>
<summary>Problem 3</summary>
Explain why energy is released in both nuclear fission and nuclear fusion, using the binding energy
per nucleon curve.

**Answer.** The binding energy per nucleon curve peaks at iron-56 ($\sim 8.8$ MeV/nucleon). Fission
splits heavy nuclei (which have lower $E_b/A$ than the peak) into lighter fragments (which have
higher $E_b/A$). Fusion combines light nuclei (which have lower $E_b/A$) into heavier ones (which
have higher $E_b/A$). In both cases, the total binding energy increases, and the difference is
released as energy.

<b>If you get this wrong, revise:</b> [The Binding Energy Curve](#the-binding-energy-curve)

</details>

<details>
<summary>Problem 4</summary>
Calculate the energy released when a proton and neutron combine to form a deuteron
($\prescript{2}{}{1}\mathrm{H}$). Given: $m_p = 1.67262 \times 10^{-27}$ kg,
$m_n = 1.67493 \times 10^{-27}$ kg, $m_d = 3.34358 \times 10^{-27}$ kg, $c = 3.0 \times 10^8$ m
s$^{-1}$.

**Answer.** $\Delta m = m_p + m_n - m_d = 1.67262 + 1.67493 - 3.34358 = 0.00397 \times 10^{-27}$ kg.

$E = \Delta m c^2 = 0.00397 \times 10^{-27} \times 9.0 \times 10^{16} = 3.57 \times 10^{-13}$ J
$= 2.23$ MeV.

<b>If you get this wrong, revise:</b>
[Mass Defect and Binding Energy](#1-mass-defect-and-binding-energy)

</details>

<details>
<summary>Problem 5</summary>
In a nuclear reactor, each fission of U-235 releases 200 MeV and produces on average 2.5 neutrons.
If the reactor is operating at a power of 500 MW, calculate the number of fissions per second.

**Answer.** Energy per fission $= 200$ MeV
$= 200 \times 10^6 \times 1.60 \times 10^{-19} = 3.2 \times 10^{-11}$ J.

Number of fissions per second $= 500 \times 10^6 / 3.2 \times 10^{-11} = 1.56 \times 10^{19}$
s$^{-1}$.

<b>If you get this wrong, revise:</b> [Nuclear Fission](#3-nuclear-fission)

</details>

<details>
<summary>Problem 6</summary>
Explain the role of a moderator and control rods in a nuclear fission reactor.

**Answer.** **Moderator** (e.g., graphite or water): slows down fast fission neutrons to thermal
energies. Slow (thermal) neutrons have a much larger fission cross-section for U-235, making the
chain reaction more efficient. **Control rods** (e.g., boron or cadmium): absorb neutrons without
fissioning. By adjusting their depth, the number of neutrons available for fission is controlled,
maintaining the reactor in a critical state (one fission per fission, on average).

<b>If you get this wrong, revise:</b> [Chain Reaction](#chain-reaction)

</details>

<details>
<summary>Problem 7</summary>
The fusion reaction
$\prescript{2}{}{1}\mathrm{H} + \prescript{2}{}{1}\mathrm{H} \to \prescript{3}{}{2}\mathrm{He} + \prescript{1}{}{0}\mathrm{n}$
releases 3.27 MeV. Given the masses: $m(\prescript{2}{}{1}\mathrm{H}) = 2.01410$ u,
$m(\prescript{3}{}{2}\mathrm{He}) = 3.01603$ u, $m_n = 1.00867$ u. Verify the energy release using the
mass defect.

**Answer.** Total mass before: $2 \times 2.01410 = 4.02820$ u. Total mass after:
$3.01603 + 1.00867 = 4.02470$ u.

$\Delta m = 4.02820 - 4.02470 = 0.00350$ u. $E = 0.00350 \times 931.5 = 3.26$ MeV $\approx 3.27$
MeV. $\checkmark$

<b>If you get this wrong, revise:</b> [Nuclear Fusion](#7-nuclear-fusion)

</details>

<details>
<summary>Problem 8</summary>
Why does nuclear fusion require extremely high temperatures but fission does not?

**Answer.** Fission is initiated by neutrons, which carry no charge and therefore experience no
Coulomb repulsion from the nucleus. They can approach the nucleus freely and be absorbed. Fusion
requires two positively charged nuclei to approach within $\sim 10^{-15}$ m (the range of the strong
nuclear force), but the Coulomb repulsion between like charges creates an energy barrier of
$\sim$MeV. Extremely high temperatures ($\sim 10^8$ K) are needed to give nuclei sufficient kinetic
energy (via the Maxwell-Boltzmann distribution) to overcome this barrier.

<b>If you get this wrong, revise:</b> [Conditions for Fusion](#conditions-for-fusion)

</details>

<details>
<summary>Problem 9</summary>
Calculate the energy released by the fission reaction
$\mathrm{n} + \prescript{235}{}{92}\mathrm{U} \to \prescript{141}{}{56}\mathrm{Ba} + \prescript{92}{}{36}\mathrm{Kr} + 3\mathrm{n}$.
Given: $m_n = 1.00867$ u, $m(\prescript{235}{}{92}\mathrm{U}) = 235.04393$ u,
$m(\prescript{141}{}{56}\mathrm{Ba}) = 140.91440$ u, $m(\prescript{92}{}{36}\mathrm{Kr}) = 91.92627$ u.

**Answer.** Reactants: $1.00867 + 235.04393 = 236.05260$ u. Products:
$140.91440 + 91.92627 + 3(1.00867) = 140.91440 + 91.92627 + 3.02601 = 235.86668$ u.

$\Delta m = 236.05260 - 235.86668 = 0.18592$ u.

$E = 0.18592 \times 931.5 = 173.2$ MeV.

<b>If you get this wrong, revise:</b> [Nuclear Fission](#3-nuclear-fission)

</details>

<details>
<summary>Problem 10</summary>
Calculate the number of elastic collisions required to thermalise a 2 MeV neutron to 0.025 eV
using (a) graphite moderator ($\xi = 0.158$) and (b) heavy water moderator ($\xi = 0.725$).

**Answer.** The number of collisions is $n = \ln(E_0 / E_{\mathrm{th}}) / \xi$.

$E_0 / E_{\mathrm{th}} = 2 \times 10^6 / 0.025 = 8 \times 10^7$. $\ln(8 \times 10^7) = 18.20$.

(a) Graphite: $n = 18.20 / 0.158 = 115$ collisions. (b) Heavy water:
$n = 18.20 / 0.725 = 25.1 \approx 25$ collisions.

Heavy water is roughly 4.6 times more efficient at thermalising neutrons per collision.

<b>If you get this wrong, revise:</b>
[Moderation by Elastic Collisions](#moderation-by-elastic-collisions)

</details>

<details>
<summary>Problem 11</summary>
A breeder reactor operates at 500 MW thermal power. Each fission of U-235 releases 200 MeV, and
0.3 neutrons per fission are captured by U-238 to produce Pu-239. Calculate the annual Pu-239
production rate in kg.

**Answer.** Fissions per second
$= 500 \times 10^6 / (200 \times 10^6 \times 1.60 \times 10^{-19})
= 1.5625 \times 10^{19}$ s$^{-1}$.

Pu-239 atoms produced per second $= 0.3 \times 1.5625 \times 10^{19} = 4.6875 \times 10^{18}$
s$^{-1}$.

Mass per second $= 4.6875 \times 10^{18} \times 239 \times 1.661 \times 10^{-27}$
$= 1.86 \times 10^{-6}$ kg/s.

Annual production $= 1.86 \times 10^{-6} \times 3.156 \times 10^7 = 58.7$ kg/year.

<b>If you get this wrong, revise:</b> [Breeder Reactors](#breeder-reactors)

</details>

<details>
<summary>Problem 12</summary>
A D-T fusion plasma has ion density $n = 1.2 \times 10^{20}$ m$^{-3}$ and energy confinement time
$\tau = 0.8$ s. Does this satisfy the Lawson criterion?

**Answer.** Lawson criterion for D-T: $n\tau \gt{} 10^{20}\,\mathrm{s}\,\mathrm{m}^{-3}$.

$n\tau = 1.2 \times 10^{20} \times 0.8 = 9.6 \times 10^{19}\,\mathrm{s}\,\mathrm{m}^{-3}$.

Since $9.6 \times 10^{19} \lt 10^{20}$, this does **not** satisfy the Lawson criterion. The plasma
must achieve either higher density or longer confinement time.

<b>If you get this wrong, revise:</b> [The Lawson Criterion](#the-lawson-criterion)

</details>

<details>
<summary>Problem 13</summary>
A reactor produces $2.0 \times 10^{19}$ fissions per second. The recoverable energy per fission is
193 MeV (excluding neutrinos). Calculate the thermal power output in MW.

**Answer.** Power $= 2.0 \times 10^{19} \times 193 \times 10^6 \times 1.60 \times 10^{-19}$
$= 2.0 \times 10^{19} \times 3.088 \times 10^{-11}$ $= 6.18 \times 10^8$ W $= 618$ MW.

<b>If you get this wrong, revise:</b>
[Energy Distribution in Fission](#energy-distribution-in-fission)

</details>

<details>
<summary>Problem 14</summary>
$\prescript{16}{}{8}\mathrm{O}$ has binding energy per nucleon $E_b/A = 7.98$ MeV/nucleon. A
hypothetical fission of $\prescript{16}{}{8}\mathrm{O}$ into two $\prescript{8}{}{4}\mathrm{Be}$ nuclei
(each with $E_b/A = 7.06$ MeV/nucleon) is proposed. Determine whether this fission releases or
absorbs energy, and explain using the binding energy curve.

**Answer.** Total binding energy before: $16 \times 7.98 = 127.68$ MeV. Total binding energy after:
$2 \times 8 \times 7.06 = 112.96$ MeV.

$\Delta E = 112.96 - 127.68 = -14.72$ MeV.

Energy is **absorbed**, not released. This is consistent with the binding energy curve: nuclei
lighter than iron (peak at $\sim 8.8$ MeV/nucleon) release energy through **fusion** (moving toward
higher $E_b/A$), not fission. Splitting a light nucleus moves it away from the peak.

<b>If you get this wrong, revise:</b> [The Binding Energy Curve](#the-binding-energy-curve)

</details>

<details>
<summary>Problem 15</summary>
A fission product in nuclear waste has a half-life of 30.2 years and an initial activity of
$5.0 \times 10^{12}$ Bq. The safe disposal threshold is $1.0 \times 10^6$ Bq. How many years must
elapse before this waste can be reclassified as low-level?

**Answer.** $A = A_0 \cdot 2^{-t/t_{1/2}}$, so
$2^{-t/t_{1/2}} = A/A_0 = 10^6 / (5 \times 10^{12})
= 2 \times 10^{-7}$.

$t = -t_{1/2} \cdot \log_2(2 \times 10^{-7}) = -30.2 \times \frac{\ln(2 \times 10^{-7})}{\ln 2}$

$\ln(2 \times 10^{-7}) = \ln 2 - 7 \ln 10 = 0.693 - 16.118 = -15.425$

$t = -30.2 \times (-15.425 / 0.693) = -30.2 \times (-22.26) = 672$ years.

<b>If you get this wrong, revise:</b> [Nuclear Waste Classification](#nuclear-waste-classification)

</details>

<details>
<summary>Problem 16</summary>
The D-T fusion reaction releases 17.6 MeV from 5 nucleons. U-235 fission releases approximately
200 MeV from 235 nucleons. Calculate and compare the energy released per nucleon for each reaction.
What does this imply about the relative energy density of fusion versus fission fuel?

**Answer.** Fusion: $17.6 / 5 = 3.52$ MeV/nucleon. Fission: $200 / 235 = 0.851$ MeV/nucleon.

Ratio: $3.52 / 0.851 = 4.14$.

Fusion releases roughly 4 times more energy per nucleon than fission. This means fusion fuel has a
higher energy density per unit mass: 1 kg of D-T fuel ($N = 5$ nucleons per reaction, $N_A / 5$
reactions per mole) yields approximately 4 times the energy of 1 kg of U-235 fuel. This is why
fusion, if achieved practically, promises such high energy output per unit fuel mass.

<b>If you get this wrong, revise:</b>
[Why D-T is the Easiest Fusion Reaction](#why-d-t-is-the-easiest-fusion-reaction)

</details>
