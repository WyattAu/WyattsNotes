---
title: Radioactivity
description:
  'A-Level Physics Radioactivity notes covering key definitions, core concepts, worked examples, and
  practice questions for effective revision.'
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: radioactivity
---

## Radioactivity

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

<PhetSimulation simulationId="alpha-decay" title="Alpha Decay" />

Explore the simulation above to develop intuition for this topic.

**Definition.** Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei.

## 1. Nuclear Structure

The atom consists of a nucleus containing **protons** and **neutrons** (collectively called
**nucleons**), surrounded by electrons.

| Property | Proton    | Neutron   | Electron        |
| -------- | --------- | --------- | --------------- |
| Charge   | $+e$      | $0$       | $-e$            |
| Mass (u) | $1.00728$ | $1.00867$ | $0.00055$       |
| Location | Nucleus   | Nucleus   | Electron shells |

**Notation.** A nuclide is written as $\prescript{A}{Z}\mathrm{X}$ where $A$ is the mass number
(nucleon number) and $Z$ is the atomic number (proton number). The neutron number is $N = A - Z$.

**Isotopes** are atoms of the same element (same $Z$) with different mass numbers (different $N$).

## 2. Types of Radioactive Decay

### Alpha Decay ($\alpha$)

**Definition.** An alpha particle ($\alpha$) is a helium nucleus ($\prescript{4}{2}\mathrm{He}$),
Emitted during alpha decay.

$$\prescript{A}{Z}\mathrm{X} \to \prescript{A-4}{Z-2}\mathrm{Y} + \prescript{4}{2}\alpha$$

**Conservation checks:**

- Mass number: $A = (A-4) + 4$ $\checkmark$
- Atomic number: $Z = (Z-2) + 2$ $\checkmark$

Alpha particles are highly ionising but poorly penetrating (stopped by paper or a few cm of air).

### Beta Decay ($\beta^-$)

**Definition.** A beta particle ($\beta^-$) is an electron emitted when a neutron converts to a
Proton in beta-minus decay.

A neutron converts to a proton, emitting an electron and an antineutrino:

$$\prescript{A}{Z}\mathrm{X} \to \prescript{A}{Z+1}\mathrm{Y} + \prescript{0}{-1}\beta^- + \bar{\nu}_e$$

**Conservation checks:**

- Mass number: $A = A + 0$ $\checkmark$
- Atomic number: $Z = (Z+1) + (-1)$ $\checkmark$
- Charge: $0 = (+1) + (-1) + 0$ $\checkmark$

The antineutrino was postulated by Fermi (1934) to conserve energy and momentum — the observed
Electron energy spectrum is continuous, implying a third particle carries away the remaining energy.

**Penetration:** Beta particles are moderately ionising, stopped by a few mm of aluminium.

### Beta-Plus Decay ($\beta^+$)

**Definition.** A beta-plus particle ($\beta^+$) is a positron emitted when a proton converts to a
Neutron in beta-plus decay.

A proton converts to a neutron, emitting a positron and a neutrino:

$$\prescript{A}{Z}\mathrm{X} \to \prescript{A}{Z-1}\mathrm{Y} + \prescript{0}{+1}\beta^+ + \nu_e$$

This only occurs in proton-rich nuclei.

### Gamma Decay ($\gamma$)

**Definition.** A gamma ray ($\gamma$) is high-energy electromagnetic radiation emitted during
Nuclear transitions.

After alpha or beta decay, the daughter nucleus is often in an excited state. It de-excites by
Emitting a gamma ray (high-energy photon):

$$\prescript{A}{Z}\mathrm{X}^* \to \prescript{A}{Z}\mathrm{X} + \gamma$$

No change in $A$ or $Z$. Gamma rays are weakly ionising but highly penetrating (stopped by thick
Lead or concrete).

:::warning Common Pitfall In $\beta^-$ decay, the mass number $A$ does not change — only the atomic
Number changes. A neutron becomes a proton, so the total nucleon count is unchanged. :::

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

| Requirement                  | AQA         | Edexcel     | OCR (A)     | CIE      |
| ---------------------------- | ----------- | ----------- | ----------- | -------- |
| Alpha decay equations        | Yes         | Yes         | Yes         | Yes      |
| $\beta^-$ decay equations    | Yes         | Yes         | Yes         | Yes      |
| $\beta^+$ decay equations    | Required    | Required    | Not in core | Yes      |
| Neutrino / antineutrino      | Qualitative | Qualitative | Qualitative | Detailed |
| Spontaneous vs random nature | Required    | Required    | Required    | Required |

## 3. Exponential Decay Law

### Derivation of $N = N_0 e^{-\lambda t}$

**Definition.** The decay constant $\lambda$ is the probability per unit time of a nucleus decaying.

$$\boxed{\lambda = \frac◆LB◆\ln 2◆RB◆◆LB◆t_{1/2}◆RB◆}$$

The probability that any single nucleus decays in a small time interval $dt$ is $\lambda\,dt$.

If there are $N$ nuclei, the number decaying in $dt$ is:

$$dN = -\lambda N\,dt$$

(The minus sign indicates $N$ decreases.)

$$\frac{dN}{dt} = -\lambda N$$

Separating variables and integrating:

$$\int_{N_0}^{N}\frac{dN}{N} = -\int_0^t\lambda\,dt$$

$$\ln N - \ln N_0 = -\lambda t$$

$$\ln\left(\frac{N}{N_0}\right) = -\lambda t$$

$$\boxed{N = N_0 e^{-\lambda t}}$$

### Activity

**Definition.** Activity $A$ is the rate of decay of a radioactive sample:
$A = \lambda N = -\frac{dN}{dt}$.

$$\boxed{A = \lambda N = -\frac{dN}{dt}}$$

Expanding using the exponential decay law:

$$A = \lambda N_0 e^{-\lambda t} = A_0 e^{-\lambda t}$$

**Definition.** The becquerel is the SI unit of activity; 1 Bq = 1 decay per second.

$$\boxed{1\,\mathrm{Bq} = 1\,\mathrm{decay s}^{-1}}$$

### Half-Life

**Definition.** The half-life $t_{1/2}$ is the time taken for half of the radioactive nuclei in a
Sample to decay.

$$\boxed{N(t) = N_0 \cdot 2^{-t/t_{1/2}}}$$

Setting $N = N_0/2$:

$$\frac{N_0}{2} = N_0 e^{-\lambda t_{1/2}}$$

$$\frac{1}{2} = e^{-\lambda t_{1/2}}$$

$$\ln 2 = \lambda t_{1/2}$$

$$\boxed{t_{1/2} = \frac◆LB◆\ln 2◆RB◆◆LB◆\lambda◆RB◆}$$

**Intuition.** After one half-life, half remain. After two, a quarter. After $n$ half-lives,
$N = N_0/2^n$. The decay is exponential — the activity is always proportional to the number of
Remaining nuclei, so it decreases exponentially.

:::tip Tip Straight line with gradient $=-\lambda$. The half-life can be found by finding the time
for the Activity to halve at any point on the curve. :::

### Radiation Detection

:::info Info

#### Geiger-Muller Tube

The Geiger-Muller (GM) tube is the most common radiation detector. It consists of a thin-walled
Metal tube filled with an inert gas ( argon) at low pressure, with a central anode wire Held at high
positive potential.

When ionising radiation enters through the thin mica window, it ionises gas atoms. The freed
Electrons are accelerated towards the anode, gaining enough energy to ionise further atoms in an
**avalanche** process. Each avalanche produces a current pulse, which is counted electronically.

- The GM tube has a **dead time** of approximately $100\,\mu\mathrm{s}$ after each count, during
  which it cannot detect further radiation. At very high activities this leads to count rates lower
  than the true activity.
- **Background radiation** ( 20-40 counts per minute in the UK) must be subtracted from all
  measurements.

**Definition.** Background radiation is the ionising radiation present in the environment from
Natural and artificial sources.

Sources of background radiation include:

- **Radon gas** (from uranium decay in rocks) — the largest single source in the UK, contributing
  approximately 50% of background dose.
- **Cosmic rays** — high-energy particles from space, increasing with altitude.
- **Medical sources** — X-rays and nuclear medicine procedures.
- **Ground and building materials** — occurring radioactive isotopes such as $^{40}\mathrm{K}$ and
  $^{238}\mathrm{U}$.
- **Food and drink** — trace amounts of $^{40}\mathrm{K}$ and $^{14}\mathrm{C}$.

:::warning Warning Because: (1) the detector only intercepts a fraction of emitted radiation (solid
angle factor), and (2) not all radiation that enters the tube produces a count (detection efficiency
is 1-2% For gamma rays). Never assume count rate equals activity. :::

#### Scintillation Detector

A scintillation detector uses a crystal (e.g. Sodium iodide) that emits flashes of light when
Radiation passes through it. The light pulses are converted to electrical signals by a
Photomultiplier tube. Scintillation detectors are more sensitive than GM tubes and can distinguish
Between different types of radiation by the intensity of the light pulse (pulse-height analysis),
Making them useful for identifying specific isotopes.

### Half-Life Measurement Techniques

#### Graphical Method

To determine half-life experimentally:

1. Measure the corrected count rate (subtracting background) at regular time intervals.
2. Plot a graph of corrected count rate (or activity) against time.
3. Find the time for the count rate to halve — this is $t_{1/2}$.
4. Alternatively, plot $\ln A$ vs $t$; the gradient equals $-\lambda$.

The logarithmic method is more accurate because it uses all data points, not just a single halving:

$$\ln A = \ln A_0 - \lambda t$$

The gradient of the straight line gives $-\lambda$And then $t_{1/2} = \ln 2 / \lambda$.

:::tip Exam Technique When describing an experimental method for determining half-life, always
Mention: (1) measuring background count rate first, (2) subtracting it from all readings, (3) taking
Readings at regular intervals, and (4) using a log-linear graph for greater accuracy. :::

#### Practical Considerations

- For short half-lives (seconds to minutes), readings can be taken in real time with a GM tube and
  data logger.
- For long half-lives (years to millennia), direct measurement is impractical. Instead, measure a
  known mass of the isotope and use $A = \lambda N$ where $N$ is calculated from the mass and
  Avogadro's number.

:::info Board Coverage AQA requires the graphical method; Edexcel and OCR (A) additionally require
Discussion of uncertainties and the effect of dead time on accuracy; CIE requires the logarithmic
Method. :::

## Problem Set

<details>
<summary>Problem 1</summary>
Radium-226 undergoes alpha decay. Write the nuclear equation and identify the daughter nucleus.

**Answer.**
$\prescript{226}{88}\mathrm{Ra} \to \prescript{222}{86}\mathrm{Rn} + \prescript{4}{2}\alpha$.

Daughter nucleus: Radon-222.

<b>If you get this wrong, revise:</b> [Alpha Decay](#alpha-decay-alpha)

</details>

<details>
<summary>Problem 2</summary>
Carbon-14 undergoes beta-minus decay. Write the nuclear equation.

**Answer.**
$\prescript{14}{6}\mathrm{C} \to \prescript{14}{7}\mathrm{N} + \prescript{0}{-1}\beta^- + \bar{\nu}_e$.

<b>If you get this wrong, revise:</b> [Beta Decay ($\beta^-$)](#beta-decay-beta-)

</details>

<details>
<summary>Problem 3</summary>
A radioactive sample has a half-life of 5.0 hours. If the initial activity is 800 Bq, what is the
Activity after 20 hours?

**Answer.** Number of half-lives: $n = 20/5 = 4$. $A = 800/2^4 = 800/16 = 50$ Bq.

<b>If you get this wrong, revise:</b> [Half-Life](#half-life)

</details>

<details>
<summary>Problem 4</summary>
A sample contains $4.0 \times 10^{12}$ nuclei of a radioactive isotope with decay constant
$1.2 \times 10^{-7}$ s$^{-1}$. Calculate the initial activity and the number of nuclei remaining
After 2.0 hours.

**Answer.** $A_0 = \lambda N_0 = 1.2 \times 10^{-7} \times 4.0 \times 10^{12} = 4.8 \times 10^5$ Bq.

$t = 7200$ s.
$N = N_0 e^{-\lambda t} = 4.0 \times 10^{12} \times e^{-1.2 \times 10^{-7} \times 7200} = 4.0 \times 10^{12} \times e^{-0.864} = 4.0 \times 10^{12} \times 0.421 = 1.68 \times 10^{12}$.

<b>If you get this wrong, revise:</b> [Exponential Decay Law](#3-exponential-decay-law)

</details>

<details>
<summary>Problem 5</summary>
Derive the relationship $t_{1/2} = \ln 2/\lambda$.

**Answer.** At $t = t_{1/2}$: $N = N_0/2$. From $N = N_0 e^{-\lambda t}$:
$\frac{1}{2} = e^{-\lambda t_{1/2}}$. Taking natural logs: $\ln(1/2) = -\lambda t_{1/2}$.
$-\ln 2 = -\lambda t_{1/2}$. $t_{1/2} = \ln 2/\lambda$.

<b>If you get this wrong, revise:</b> [Half-Life](#half-life)

</details>

<details>
<summary>Problem 6</summary>
The activity of a sample decreases from 1200 Bq to 150 Bq in 30 minutes. Calculate the half-life.

**Answer.** $150/1200 = 1/8 = 1/2^3$. So 3 half-lives have elapsed. $t_{1/2} = 30/3 = 10$ minutes.

<b>If you get this wrong, revise:</b> [Half-Life](#half-life)

</details>

<details>
<summary>Problem 7</summary>
Explain why the antineutrino was proposed in beta decay.

**Answer.** In beta decay, the emitted electron has a continuous energy spectrum rather than a
Single energy. This appeared to violate conservation of energy. Pauli proposed (1930) and Fermi
Formalised (1934) the existence of an unseen particle (the antineutrino) that carries away the
Remaining energy and momentum. The total energy of electron + antineutrino equals the fixed energy
Released by the nuclear transition, conserving energy. The antineutrino was experimentally detected
In 1956 by Cowan and Reines.

<b>If you get this wrong, revise:</b> [Beta Decay ($\beta^-$)](#beta-decay-beta-)

</details>

<details>
<summary>Problem 8</summary>
A sample of iodine-131 has a half-life of 8.04 days. How long does it take for the activity to fall
To 5% of its initial value?

**Answer.** $0.05 = e^{-\lambda t}$. $\ln 0.05 = -\lambda t$.
$\lambda = \ln 2/t_{1/2} = 0.693/8.04 = 0.0862$ day$^{-1}$.

$t = -\ln 0.05/\lambda = 3.00/0.0862 = 34.8$ days.

<b>If you get this wrong, revise:</b> [Exponential Decay Law](#3-exponential-decay-law)

</details>

<details>
<summary>Problem 9</summary>
Compare and contrast alpha, beta, and gamma radiation in terms of: (a) nature, (b) ionising power,
(c) penetrating power, (d) deflection in electric and magnetic fields.

**Answer.** (a) $\alpha$: helium nucleus (2p, 2n). $\beta$: electron/positron. $\gamma$:
Electromagnetic photon.

(b) Ionising power: $\alpha > \beta > \gamma$ (alpha has the largest charge and slowest speed,
Maximising interaction).

(c) Penetrating power: $\gamma > \beta > \alpha$ (alpha stopped by paper, beta by aluminium, gamma
By thick lead).

(d) Deflection: $\alpha$ and $\beta$ are deflected (opposite directions since opposite charges).
$\alpha$ deflection is less (larger mass). $\gamma$ is undeflected (no charge).

<b>If you get this wrong, revise:</b> [Types of Radioactive Decay](#2-types-of-radioactive-decay)

</details>

<details>
<summary>Problem 10</summary>
A radioactive isotope X with half-life 12 hours decays to a stable daughter Y. A sample initially
Contains 1000 atoms of X. How many atoms of Y are present after 36 hours?

**Answer.** After 36 hours: $n = 36/12 = 3$ half-lives. $N_X = 1000/2^3 = 125$. Atoms of Y =
$1000 - 125 = 875$.

<b>If you get this wrong, revise:</b> [Exponential Decay Law](#3-exponential-decay-law)

</details>

## 4. Decay Chains

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

**Definition.** A decay chain (or radioactive series) is a sequence of radioactive decays where each
Daughter nuclide is itself radioactive, continuing until a stable nuclide is reached.

### The Uranium-238 Decay Series

The most important natural decay chain begins with uranium-238 and ends at stable lead-206 after 14
Decays (8 alpha and 6 beta-minus):

$$
\prescript{238}{92}\mathrm{U} \xrightarrow{\alpha} \prescript{234}{90}\mathrm{Th}
\xrightarrow{\beta^-} \prescript{234}{91}\mathrm{Pa}
\xrightarrow{\beta^-} \prescript{234}{92}\mathrm{U}
\xrightarrow{\alpha} \cdots \to \prescript{206}{82}\mathrm{Pb}
$$

**Verification of net change:** 8 alpha decays reduce $A$ by $8 \times 4 = 32$ and $Z$ by
$8 \times 2 = 16$. 6 beta-minus decays increase $Z$ by $6 \times 1 = 6$ and leave $A$ unchanged.
Net: $A$ decreases by 32 ($238 - 206 = 32$ $\checkmark$) and $Z$ decreases by 10 ($92 - 82 = 10$
$\checkmark$).

Other natural decay chains include:

- **Thorium-232 series** $\to$ $^{208}\mathrm{Pb}$ (6 alpha, 4 beta-minus)
- **Uranium-235 series** $\to$ $^{207}\mathrm{Pb}$ (7 alpha, 4 beta-minus)

### Secular Equilibrium

When a long-lived parent nuclide (very large $t_{1/2}$) decays through a chain of shorter-lived
Daughters, a state of **secular equilibrium** is established after several daughter half-lives. In
Equilibrium:

$$\boxed{\lambda_1 N_1 = \lambda_2 N_2 = \lambda_3 N_3 = \cdots}$$

Each daughter has the same activity as the parent. This has practical importance in radiological
Protection: the activity of radon-222 (a daughter of $^{238}\mathrm{U}$) in buildings is sustained
By the essentially constant uranium in the ground beneath.

:::warning Warning Only when the parent is much longer-lived than all daughters. If a short-lived
daughter precedes a Long-lived daughter, the long-lived daughter accumulates and can become the
dominant radiological Hazard. :::

## 5. Applications of Radioactivity

### Carbon-14 Dating

:::info Info

Living organisms continuously exchange carbon with the atmosphere, maintaining a constant ratio of
$^{14}\mathrm{C}$ to $^{12}\mathrm{C}$. Cosmic rays produce neutrons in the upper atmosphere, Which
react with nitrogen-14:

$$^{14}\mathrm{N} + ^{1}\mathrm{n} \to ^{14}\mathrm{C} + ^{1}\mathrm{H}$$

When an organism dies, this exchange stops and the $^{14}\mathrm{C}$ decays with a half-life of 5730
years. The age of a sample is found from:

$$t = \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆\ln\left(\frac{A_0}{A}\right) = \frac◆LB◆t_{1/2}◆RB◆◆LB◆\ln 2◆RB◆\ln\left(\frac{N_0}{N}\right)$$

Where $N_0/N$ is the ratio of current $^{14}\mathrm{C}$ content to that of a living sample.

**Limitations:**

- Effective range is approximately 50,000 years (beyond this, too few $^{14}\mathrm{C}$ atoms remain
  for accurate measurement).
- Assumes the atmospheric $^{14}\mathrm{C}$/$^{12}\mathrm{C}$ ratio has been constant. Variations
  are corrected using calibration curves from tree-ring dating (dendrochronology).
- Contamination by modern carbon makes samples appear younger; contamination by old carbon makes
  them appear older.

### Nuclear Medicine

Radioactive isotopes are used both diagnostically and therapeutically:

| Isotope             | Half-life   | Use                               | Reason                                                                         |
| ------------------- | ----------- | --------------------------------- | ------------------------------------------------------------------------------ |
| $^{99m}\mathrm{Tc}$ | 6.0 hours   | Diagnostic imaging (gamma camera) | Emits gamma rays; short half-life limits patient dose                          |
| $^{131}\mathrm{I}$  | 8.04 days   | Treatment of thyroid cancer       | Beta radiation destroys thyroid tissue; iodine selectively absorbed by thyroid |
| $^{60}\mathrm{Co}$  | 5.27 years  | Radiotherapy (external beam)      | High-energy gamma rays for tumour destruction                                  |
| $^{18}\mathrm{F}$   | 110 minutes | PET scans                         | Positron emission enables precise 3D imaging                                   |

**Definition.** The effective half-life of a radioactive substance in the body is the time for its
Activity to fall to half its initial value, combining both physical decay and biological clearance:

$$\frac◆LB◆1◆RB◆◆LB◆t_{\mathrm{eff}}◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆t_{\mathrm{physical}}◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆t_{\mathrm{biological}}◆RB◆$$

:::info Board Coverage The effective half-life is required by Edexcel and OCR (A) but is not
Explicitly tested by AQA or CIE at A Level. :::

## 6. Case Studies

### Chernobyl (1986)

The Chernobyl disaster released approximately $5.2 \times 10^{18}$ Bq of radioactive material into
The atmosphere. The most significant isotopes released were:

- **Iodine-131** ($t_{1/2} = 8.04$ days): Caused thyroid cancer, particularly in children who drank
  milk from cows that had grazed on contaminated grass. The short half-life meant the acute danger
  passed within months.
- **Caesium-137** ($t_{1/2} = 30.2$ years): More persistent contaminant. Caesium behaves chemically
  like potassium and was taken up by plants and animals, entering the food chain. The 30 km
  exclusion zone around the reactor remains in place partly because of $^{137}\mathrm{Cs}$
  contamination.

The different half-lives illustrate a key principle: short-lived isotopes produce intense but brief
Radiation hazards, while long-lived isotopes create lower but persistent contamination.

### Fukushima Daiichi (2011)

The Fukushima disaster, triggered by a tsunami following the Tohoku earthquake, released significant
Quantities of radioactive isotopes including $^{131}\mathrm{I}$, $^{134}\mathrm{Cs}$
($t_{1/2} = 2.06$ years), and $^{137}\mathrm{Cs}$.

Key differences from Chernobyl:

- Most radioactive material was released into the Pacific Ocean rather than the atmosphere, leading
  to rapid dilution of water-soluble isotopes.
- $^{134}\mathrm{Cs}$ has a short half-life (2.06 years) and decayed rapidly; $^{137}\mathrm{Cs}$
  remains the primary long-term concern.
- The disaster highlighted the importance of cooling systems for spent fuel and the vulnerability of
  nuclear plants to extreme natural events.

Both disasters demonstrate that understanding half-lives is critical for predicting contamination
Timelines and informing public health responses.

:::tip Exam Application When asked to evaluate the risks from a nuclear incident, consider: (1)
Which isotopes were released, (2) their half-lives, (3) how they enter the body (inhalation,
Ingestion, external exposure), and (4) the type of radiation emitted (alpha is most dangerous
Internally, gamma externally). :::

## Additional Problems

<details>
<summary>Problem 11</summary>
A sample of ancient wood has a $^{14}\mathrm{C}$ activity of 1.5 Bq per gram. A living sample of the
Same type of wood has an activity of 12.5 Bq per gram. Calculate the age of the ancient wood.
($t_{1/2}$ of $^{14}\mathrm{C} = 5730$ years.)

**Answer.** $A/A_0 = 1.5/12.5 = 0.12$. $\ln 0.12 = -\lambda t$.
$\lambda = \ln 2/5730 = 1.209 \times 10^{-4}$ year$^{-1}$.
$t = -\ln 0.12/(1.209 \times 10^{-4}) = 2.12/(1.209 \times 10^{-4}) = 17,500$ years (2 s.f.).

<b>If you get this wrong, revise:</b> [Carbon-14 Dating](#carbon-14-dating)

</details>

<details>
<summary>Problem 12</summary>
In the uranium-238 decay series, verify that 8 alpha decays and 6 beta-minus decays are consistent
With the transformation from $^{238}\mathrm{U}$ to $^{206}\mathrm{Pb}$.

**Answer.** After 8 alpha decays: $A = 238 - 8 \times 4 = 206$, $Z = 92 - 8 \times 2 = 76$. After 6
Beta-minus decays: $A$ unchanged, $Z = 76 + 6 = 82$. Final nuclide: $A = 206$, $Z = 82$Which is
$^{206}\mathrm{Pb}$ $\checkmark$.

<b>If you get this wrong, revise:</b> [The Uranium-238 Decay Series](#the-uranium-238-decay-series)

</details>

<details>
<summary>Problem 13</summary>
A GM tube records a count rate of 340 counts per minute from a radioactive source. The background
Count rate is 25 counts per minute. After 2.5 hours, the count rate (including background) has
Fallen to 105 counts per minute. Calculate the half-life of the source.

**Answer.** Corrected initial count rate: $340 - 25 = 315$ cpm. Corrected final count rate:
$105 - 25 = 80$ cpm. $80/315 = 0.254$. $\ln 0.254 = -\lambda \times 150$ min (2.5 hours).
$-1.37 = -150\lambda$. $\lambda = 0.00913$ min$^{-1}$. $t_{1/2} = \ln 2/0.00913 = 75.9$ minutes.

<b>If you get this wrong, revise:</b>
[Half-Life Measurement Techniques](#half-life-measurement-techniques)

</details>

<details>
<summary>Problem 14</summary>
A patient is administered $^{99m}\mathrm{Tc}$ with a physical half-life of 6.0 hours for a
Diagnostic scan. The biological half-life of $^{99m}\mathrm{Tc}$ in the body is 4.8 hours. Calculate
The effective half-life and the fraction of the initial activity remaining after 12 hours.

**Answer.** $1/t_{\mathrm{eff}} = 1/6.0 + 1/4.8 = 0.167 + 0.208 = 0.375$ hour$^{-1}$.
$t_{\mathrm{eff}} = 1/0.375 = 2.67$ hours.

After 12 hours: $n = 12/2.67 = 4.49$ effective half-lives. Fraction remaining
$= 1/2^{4.49} = 1/22.4 = 0.0446$I.e. 4.5%.

<b>If you get this wrong, revise:</b> [Nuclear Medicine](#nuclear-medicine)

</details>

<details>
<summary>Problem 15</summary>
Explain why a sample of radon-222 collected from the soil beneath a building continues to produce a
Detectable activity even after the original radon-222 has been removed, referring to the concept of
Secular equilibrium.

**Answer.** Radon-222 is part of the $^{238}\mathrm{U}$ decay chain. Its parent, radium-226, has a
Half-life of 1600 years — much longer than radon-222's half-life of 3.82 days. In secular
Equilibrium, radon-222 is produced by radium-226 at the same rate it decays, so its activity remains
Constant. Removing the radon-222 temporarily reduces the activity, but new radon-222 atoms are
Continuously produced by the long-lived parent, causing the radon activity to rebuild towards its
Equilibrium value over several radon half-lives (approximately 20-40 days).

<b>If you get this wrong, revise:</b> [Secular Equilibrium](#secular-equilibrium)

</details>

:::

:::

:::

:::

:::

:::

:::

:::

---

:::tip Diagnostic Test Ready to test your understanding of **Radioactivity**? The
[diagnostic test](/docs/alevel/physics/diagnostics/diag-radioactivity) contains the hardest
questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine
Radioactivity with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/physics/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

:::danger Common Pitfalls

- **Confusing alpha, beta, and gamma radiation properties:** Alpha particles are helium nuclei (2
  protons, 2 neutrons) -- they are heavy, positively charged, and stopped by paper. Beta particles
  are fast electrons -- they are light, negatively charged, and stopped by aluminium. Gamma rays are
  electromagnetic waves -- they have no charge or mass and require thick lead or concrete to stop.

- **Not balancing nuclear equations correctly:** In a nuclear equation, both atomic number (proton
  number) AND mass number must be conserved on both sides. When writing beta decay, remember: a
  neutron becomes a proton PLUS an electron (and an antineutrino). The mass number stays the same
  but the atomic number increases by 1.

- **Assuming half-life means half the substance is gone:** After one half-life, half of the ORIGINAL
  atoms have decayed and half remain. After two half-lives, one QUARTER of the original remains (not
  zero). The substance never fully decays -- it approaches zero asymptotically. The activity also
  halves with each half-life.

- **Confusing activity with count rate:** Activity is the total number of decays per second in the
  sample (Bq). Count rate is what a detector actually measures, which is always LESS than activity
  because the detector only captures a fraction of the emissions and background radiation adds to
  the reading.

:::

## Common Pitfalls

1. Confusing atomic number (protons) with mass number (protons + neutrons).

2. Forgetting that radioactive decay is random and spontaneous — it cannot be predicted for
   individual nuclei.

3. Misunderstanding that half-life is constant regardless of the initial amount of substance.

4. Confusing displacement with distance, or velocity with speed, particularly in graphs and
   calculations.

5. Incorrectly applying $\vec{F} = m\vec{a}$ when forces are not collinear — resolve into components
   first.

6. Confusing scalar and vector quantities — always check whether direction matters for the quantity
   in question.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
