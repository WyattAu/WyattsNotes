---
title: Radioactivity
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: radioactivity
---

## Radioactivity

:::info
Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

**Definition.** Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei.

## 1. Nuclear Structure

The atom consists of a nucleus containing **protons** and **neutrons** (collectively called
**nucleons**), surrounded by electrons.

| Property | Proton    | Neutron   | Electron        |
| -------- | --------- | --------- | --------------- |
| Charge   | $+e$      | $0$       | $-e$            |
| Mass (u) | $1.00728$ | $1.00867$ | $0.00055$       |
| Location | Nucleus   | Nucleus   | Electron shells |

**Notation.** A nuclide is written as $\prescript{A}{}{Z}\text{X}$ where $A$ is the mass number
(nucleon number) and $Z$ is the atomic number (proton number). The neutron number is $N = A - Z$.

**Isotopes** are atoms of the same element (same $Z$) with different mass numbers (different $N$).

## 2. Types of Radioactive Decay

### Alpha Decay ($\alpha$)

**Definition.** An alpha particle ($\alpha$) is a helium nucleus ($\prescript{4}{}{2}\text{He}$),
emitted during alpha decay.

$$\prescript{A}{}{Z}\text{X} \to \prescript{A-4}{}{Z-2}\text{Y} + \prescript{4}{}{2}\alpha$$

**Conservation checks:**

- Mass number: $A = (A-4) + 4$ $\checkmark$
- Atomic number: $Z = (Z-2) + 2$ $\checkmark$

Alpha particles are highly ionising but poorly penetrating (stopped by paper or a few cm of air).

### Beta Decay ($\beta^-$)

**Definition.** A beta particle ($\beta^-$) is an electron emitted when a neutron converts to a
proton in beta-minus decay.

A neutron converts to a proton, emitting an electron and an antineutrino:

$$\prescript{A}{}{Z}\text{X} \to \prescript{A}{}{Z+1}\text{Y} + \prescript{0}{}{-1}\beta^- + \bar{\nu}_e$$

**Conservation checks:**

- Mass number: $A = A + 0$ $\checkmark$
- Atomic number: $Z = (Z+1) + (-1)$ $\checkmark$
- Charge: $0 = (+1) + (-1) + 0$ $\checkmark$

The antineutrino was postulated by Fermi (1934) to conserve energy and momentum — the observed
electron energy spectrum is continuous, implying a third particle carries away the remaining energy.

**Penetration:** Beta particles are moderately ionising, stopped by a few mm of aluminium.

### Beta-Plus Decay ($\beta^+$)

**Definition.** A beta-plus particle ($\beta^+$) is a positron emitted when a proton converts to a
neutron in beta-plus decay.

A proton converts to a neutron, emitting a positron and a neutrino:

$$\prescript{A}{}{Z}\text{X} \to \prescript{A}{}{Z-1}\text{Y} + \prescript{0}{}{+1}\beta^+ + \nu_e$$

This only occurs in proton-rich nuclei.

### Gamma Decay ($\gamma$)

**Definition.** A gamma ray ($\gamma$) is high-energy electromagnetic radiation emitted during
nuclear transitions.

After alpha or beta decay, the daughter nucleus is often in an excited state. It de-excites by
emitting a gamma ray (high-energy photon):

$$\prescript{A}{}{Z}\text{X}^* \to \prescript{A}{}{Z}\text{X} + \gamma$$

No change in $A$ or $Z$. Gamma rays are weakly ionising but highly penetrating (stopped by thick
lead or concrete).

:::warning
Common Pitfall In $\beta^-$ decay, the mass number $A$ does not change — only the atomic
number changes. A neutron becomes a proton, so the total nucleon count is unchanged.
:::

:::info
Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

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

$$\boxed{\lambda = \frac{\ln 2}{t_{1/2}}}$$

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

$$\boxed{1\,\text{Bq} = 1\,\text{decay s}^{-1}}$$

### Half-Life

**Definition.** The half-life $t_{1/2}$ is the time taken for half of the radioactive nuclei in a
sample to decay.

$$\boxed{N(t) = N_0 \cdot 2^{-t/t_{1/2}}}$$

Setting $N = N_0/2$:

$$\frac{N_0}{2} = N_0 e^{-\lambda t_{1/2}}$$

$$\frac{1}{2} = e^{-\lambda t_{1/2}}$$

$$\ln 2 = \lambda t_{1/2}$$

$$\boxed{t_{1/2} = \frac{\ln 2}{\lambda}}$$

**Intuition.** After one half-life, half remain. After two, a quarter. After $n$ half-lives,
$N = N_0/2^n$. The decay is exponential — the activity is always proportional to the number of
remaining nuclei, so it decreases exponentially.

:::tip
Exam Technique On a log-linear graph of activity vs time, radioactive decay appears as a
straight line with gradient $=-\lambda$. The half-life can be found by finding the time for the
activity to halve at any point on the curve.
:::

### Radiation Detection

:::info
Board Coverage AQA Paper 2 | Edexcel CP6 | OCR (A) Paper 2 | CIE P4
:::

#### Geiger-Muller Tube

The Geiger-Muller (GM) tube is the most common radiation detector. It consists of a thin-walled
metal tube filled with an inert gas (typically argon) at low pressure, with a central anode wire
held at high positive potential.

When ionising radiation enters through the thin mica window, it ionises gas atoms. The freed
electrons are accelerated towards the anode, gaining enough energy to ionise further atoms in an
**avalanche** process. Each avalanche produces a current pulse, which is counted electronically.

- The GM tube has a **dead time** of approximately $100\,\mu\text{s}$ after each count, during which
  it cannot detect further radiation. At very high activities this leads to count rates lower than
  the true activity.
- **Background radiation** (typically 20-40 counts per minute in the UK) must be subtracted from all
  measurements.

**Definition.** Background radiation is the ionising radiation present in the environment from
natural and artificial sources.

Sources of background radiation include:

- **Radon gas** (from uranium decay in rocks) — the largest single source in the UK, contributing
  approximately 50% of background dose.
- **Cosmic rays** — high-energy particles from space, increasing with altitude.
- **Medical sources** — X-rays and nuclear medicine procedures.
- **Ground and building materials** — naturally occurring radioactive isotopes such as
  ${}^{40}\text{K}$ and ${}^{238}\text{U}$.
- **Food and drink** — trace amounts of ${}^{40}\text{K}$ and ${}^{14}\text{C}$.

:::warning
Common Pitfall The count rate measured by a GM tube is always less than the true activity
because: (1) the detector only intercepts a fraction of emitted radiation (solid angle factor), and
(2) not all radiation that enters the tube produces a count (detection efficiency is typically 1-2%
for gamma rays). Never assume count rate equals activity.
:::

#### Scintillation Detector

A scintillation detector uses a crystal (e.g. sodium iodide) that emits flashes of light when
radiation passes through it. The light pulses are converted to electrical signals by a
photomultiplier tube. Scintillation detectors are more sensitive than GM tubes and can distinguish
between different types of radiation by the intensity of the light pulse (pulse-height analysis),
making them useful for identifying specific isotopes.

### Half-Life Measurement Techniques

#### Graphical Method

To determine half-life experimentally:

1. Measure the corrected count rate (subtracting background) at regular time intervals.
2. Plot a graph of corrected count rate (or activity) against time.
3. Find the time for the count rate to halve — this is $t_{1/2}$.
4. Alternatively, plot $\ln A$ vs $t$; the gradient equals $-\lambda$.

The logarithmic method is more accurate because it uses all data points, not just a single halving:

$$\ln A = \ln A_0 - \lambda t$$

The gradient of the straight line gives $-\lambda$, and then $t_{1/2} = \ln 2 / \lambda$.

:::tip
Exam Technique When describing an experimental method for determining half-life, always
mention: (1) measuring background count rate first, (2) subtracting it from all readings, (3) taking
readings at regular intervals, and (4) using a log-linear graph for greater accuracy.
:::

#### Practical Considerations

- For short half-lives (seconds to minutes), readings can be taken in real time with a GM tube and
  data logger.
- For long half-lives (years to millennia), direct measurement is impractical. Instead, measure a
  known mass of the isotope and use $A = \lambda N$ where $N$ is calculated from the mass and
  Avogadro's number.

:::info
Board Coverage AQA requires the graphical method; Edexcel and OCR (A) additionally require
discussion of uncertainties and the effect of dead time on accuracy; CIE requires the logarithmic
method.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
Radium-226 undergoes alpha decay. Write the nuclear equation and identify the daughter nucleus.

**Answer.**
$\prescript{226}{}{88}\text{Ra} \to \prescript{222}{}{86}\text{Rn} + \prescript{4}{}{2}\alpha$.

Daughter nucleus: Radon-222.

<b>If you get this wrong, revise:</b> [Alpha Decay](#alpha-decay-)
</details>

<details>
<summary>Problem 2</summary>
Carbon-14 undergoes beta-minus decay. Write the nuclear equation.

**Answer.**
$\prescript{14}{}{6}\text{C} \to \prescript{14}{}{7}\text{N} + \prescript{0}{}{-1}\beta^- + \bar{\nu}_e$.

<b>If you get this wrong, revise:</b> [Beta Decay ($\beta^-$)](#beta-decay-_beta)
</details>

<details>
<summary>Problem 3</summary>
A radioactive sample has a half-life of 5.0 hours. If the initial activity is 800 Bq, what is the
activity after 20 hours?

**Answer.** Number of half-lives: $n = 20/5 = 4$. $A = 800/2^4 = 800/16 = 50$ Bq.

<b>If you get this wrong, revise:</b> [Half-Life](#half-life)
</details>

<details>
<summary>Problem 4</summary>
A sample contains $4.0 \times 10^{12}$ nuclei of a radioactive isotope with decay constant
$1.2 \times 10^{-7}$ s$^{-1}$. Calculate the initial activity and the number of nuclei remaining
after 2.0 hours.

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
single energy. This appeared to violate conservation of energy. Pauli proposed (1930) and Fermi
formalised (1934) the existence of an unseen particle (the antineutrino) that carries away the
remaining energy and momentum. The total energy of electron + antineutrino equals the fixed energy
released by the nuclear transition, conserving energy. The antineutrino was experimentally detected
in 1956 by Cowan and Reines.

<b>If you get this wrong, revise:</b> [Beta Decay ($\beta^-$)](#beta-decay-_beta)
</details>

<details>
<summary>Problem 8</summary>
A sample of iodine-131 has a half-life of 8.04 days. How long does it take for the activity to fall
to 5% of its initial value?

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
electromagnetic photon.

(b) Ionising power: $\alpha > \beta > \gamma$ (alpha has the largest charge and slowest speed,
maximising interaction).

(c) Penetrating power: $\gamma > \beta > \alpha$ (alpha stopped by paper, beta by aluminium, gamma
by thick lead).

(d) Deflection: $\alpha$ and $\beta$ are deflected (opposite directions since opposite charges).
$\alpha$ deflection is less (larger mass). $\gamma$ is undeflected (no charge).

<b>If you get this wrong, revise:</b> [Types of Radioactive Decay](#2-types-of-radioactive-decay)
</details>

<details>
<summary>Problem 10</summary>
A radioactive isotope X with half-life 12 hours decays to a stable daughter Y. A sample initially
contains 1000 atoms of X. How many atoms of Y are present after 36 hours?

**Answer.** After 36 hours: $n = 36/12 = 3$ half-lives. $N_X = 1000/2^3 = 125$. Atoms of Y =
$1000 - 125 = 875$.

<b>If you get this wrong, revise:</b> [Exponential Decay Law](#3-exponential-decay-law)
</details>

## 4. Decay Chains

:::info
Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

**Definition.** A decay chain (or radioactive series) is a sequence of radioactive decays where each
daughter nuclide is itself radioactive, continuing until a stable nuclide is reached.

### The Uranium-238 Decay Series

The most important natural decay chain begins with uranium-238 and ends at stable lead-206 after 14
decays (8 alpha and 6 beta-minus):

$$
\prescript{238}{}{92}\text{U} \xrightarrow{\alpha} \prescript{234}{}{90}\text{Th}
\xrightarrow{\beta^-} \prescript{234}{}{91}\text{Pa}
\xrightarrow{\beta^-} \prescript{234}{}{92}\text{U}
\xrightarrow{\alpha} \cdots \to \prescript{206}{}{82}\text{Pb}
$$

**Verification of net change:** 8 alpha decays reduce $A$ by $8 \times 4 = 32$ and $Z$ by
$8 \times 2 = 16$. 6 beta-minus decays increase $Z$ by $6 \times 1 = 6$ and leave $A$ unchanged.
Net: $A$ decreases by 32 ($238 - 206 = 32$ $\checkmark$) and $Z$ decreases by 10 ($92 - 82 = 10$
$\checkmark$).

Other natural decay chains include:

- **Thorium-232 series** $\to$ ${}^{208}\text{Pb}$ (6 alpha, 4 beta-minus)
- **Uranium-235 series** $\to$ ${}^{207}\text{Pb}$ (7 alpha, 4 beta-minus)

### Secular Equilibrium

When a long-lived parent nuclide (very large $t_{1/2}$) decays through a chain of shorter-lived
daughters, a state of **secular equilibrium** is established after several daughter half-lives. In
equilibrium:

$$\boxed{\lambda_1 N_1 = \lambda_2 N_2 = \lambda_3 N_3 = \cdots}$$

Each daughter has the same activity as the parent. This has practical importance in radiological
protection: the activity of radon-222 (a daughter of ${}^{238}\text{U}$) in buildings is sustained
by the essentially constant uranium in the ground beneath.

:::warning
Common Pitfall In a decay chain, the half-life of the parent determines the overall rate
only when the parent is much longer-lived than all daughters. If a short-lived daughter precedes a
long-lived daughter, the long-lived daughter accumulates and can become the dominant radiological
hazard.
:::

## 5. Applications of Radioactivity

### Carbon-14 Dating

:::info
Board Coverage AQA Paper 2 | Edexcel CP6 | OCR (A) Paper 2 | CIE P4
:::

Living organisms continuously exchange carbon with the atmosphere, maintaining a constant ratio of
${}^{14}\text{C}$ to ${}^{12}\text{C}$. Cosmic rays produce neutrons in the upper atmosphere, which
react with nitrogen-14:

$${}^{14}\text{N} + {}^{1}\text{n} \to {}^{14}\text{C} + {}^{1}\text{H}$$

When an organism dies, this exchange stops and the ${}^{14}\text{C}$ decays with a half-life of 5730
years. The age of a sample is found from:

$$t = \frac{1}{\lambda}\ln\left(\frac{A_0}{A}\right) = \frac{t_{1/2}}{\ln 2}\ln\left(\frac{N_0}{N}\right)$$

where $N_0/N$ is the ratio of current ${}^{14}\text{C}$ content to that of a living sample.

**Limitations:**

- Effective range is approximately 50,000 years (beyond this, too few ${}^{14}\text{C}$ atoms remain
  for accurate measurement).
- Assumes the atmospheric ${}^{14}\text{C}$/${}^{12}\text{C}$ ratio has been constant. Variations
  are corrected using calibration curves from tree-ring dating (dendrochronology).
- Contamination by modern carbon makes samples appear younger; contamination by old carbon makes
  them appear older.

### Nuclear Medicine

Radioactive isotopes are used both diagnostically and therapeutically:

| Isotope             | Half-life   | Use                               | Reason                                                                         |
| ------------------- | ----------- | --------------------------------- | ------------------------------------------------------------------------------ |
| ${}^{99m}\text{Tc}$ | 6.0 hours   | Diagnostic imaging (gamma camera) | Emits gamma rays; short half-life limits patient dose                          |
| ${}^{131}\text{I}$  | 8.04 days   | Treatment of thyroid cancer       | Beta radiation destroys thyroid tissue; iodine selectively absorbed by thyroid |
| ${}^{60}\text{Co}$  | 5.27 years  | Radiotherapy (external beam)      | High-energy gamma rays for tumour destruction                                  |
| ${}^{18}\text{F}$   | 110 minutes | PET scans                         | Positron emission enables precise 3D imaging                                   |

**Definition.** The effective half-life of a radioactive substance in the body is the time for its
activity to fall to half its initial value, combining both physical decay and biological clearance:

$$\frac{1}{t_{\text{eff}}} = \frac{1}{t_{\text{physical}}} + \frac{1}{t_{\text{biological}}}$$

:::info
Board Coverage The effective half-life is required by Edexcel and OCR (A) but is not
explicitly tested by AQA or CIE at A Level.
:::

## 6. Case Studies

### Chernobyl (1986)

The Chernobyl disaster released approximately $5.2 \times 10^{18}$ Bq of radioactive material into
the atmosphere. The most significant isotopes released were:

- **Iodine-131** ($t_{1/2} = 8.04$ days): Caused thyroid cancer, particularly in children who drank
  milk from cows that had grazed on contaminated grass. The short half-life meant the acute danger
  passed within months.
- **Caesium-137** ($t_{1/2} = 30.2$ years): More persistent contaminant. Caesium behaves chemically
  like potassium and was taken up by plants and animals, entering the food chain. The 30 km
  exclusion zone around the reactor remains in place partly because of ${}^{137}\text{Cs}$
  contamination.

The different half-lives illustrate a key principle: short-lived isotopes produce intense but brief
radiation hazards, while long-lived isotopes create lower but persistent contamination.

### Fukushima Daiichi (2011)

The Fukushima disaster, triggered by a tsunami following the Tohoku earthquake, released significant
quantities of radioactive isotopes including ${}^{131}\text{I}$, ${}^{134}\text{Cs}$
($t_{1/2} = 2.06$ years), and ${}^{137}\text{Cs}$.

Key differences from Chernobyl:

- Most radioactive material was released into the Pacific Ocean rather than the atmosphere, leading
  to rapid dilution of water-soluble isotopes.
- ${}^{134}\text{Cs}$ has a short half-life (2.06 years) and decayed rapidly; ${}^{137}\text{Cs}$
  remains the primary long-term concern.
- The disaster highlighted the importance of cooling systems for spent fuel and the vulnerability of
  nuclear plants to extreme natural events.

Both disasters demonstrate that understanding half-lives is critical for predicting contamination
timelines and informing public health responses.

:::tip
Exam Application When asked to evaluate the risks from a nuclear incident, consider: (1)
which isotopes were released, (2) their half-lives, (3) how they enter the body (inhalation,
ingestion, external exposure), and (4) the type of radiation emitted (alpha is most dangerous
internally, gamma externally).
:::

## Additional Problems

<details>
<summary>Problem 11</summary>
A sample of ancient wood has a ${}^{14}\text{C}$ activity of 1.5 Bq per gram. A living sample of the
same type of wood has an activity of 12.5 Bq per gram. Calculate the age of the ancient wood.
($t_{1/2}$ of ${}^{14}\text{C} = 5730$ years.)

**Answer.** $A/A_0 = 1.5/12.5 = 0.12$. $\ln 0.12 = -\lambda t$.
$\lambda = \ln 2/5730 = 1.209 \times 10^{-4}$ year$^{-1}$.
$t = -\ln 0.12/(1.209 \times 10^{-4}) = 2.12/(1.209 \times 10^{-4}) = 17,500$ years (2 s.f.).

<b>If you get this wrong, revise:</b> [Carbon-14 Dating](#carbon-14-dating)
</details>

<details>
<summary>Problem 12</summary>
In the uranium-238 decay series, verify that 8 alpha decays and 6 beta-minus decays are consistent
with the transformation from ${}^{238}\text{U}$ to ${}^{206}\text{Pb}$.

**Answer.** After 8 alpha decays: $A = 238 - 8 \times 4 = 206$, $Z = 92 - 8 \times 2 = 76$. After 6
beta-minus decays: $A$ unchanged, $Z = 76 + 6 = 82$. Final nuclide: $A = 206$, $Z = 82$, which is
${}^{206}\text{Pb}$ $\checkmark$.

<b>If you get this wrong, revise:</b> [The Uranium-238 Decay Series](#the-uranium-238-decay-series)
</details>

<details>
<summary>Problem 13</summary>
A GM tube records a count rate of 340 counts per minute from a radioactive source. The background
count rate is 25 counts per minute. After 2.5 hours, the count rate (including background) has
fallen to 105 counts per minute. Calculate the half-life of the source.

**Answer.** Corrected initial count rate: $340 - 25 = 315$ cpm. Corrected final count rate:
$105 - 25 = 80$ cpm. $80/315 = 0.254$. $\ln 0.254 = -\lambda \times 150$ min (2.5 hours).
$-1.37 = -150\lambda$. $\lambda = 0.00913$ min$^{-1}$. $t_{1/2} = \ln 2/0.00913 = 75.9$ minutes.

<b>If you get this wrong, revise:</b>
[Half-Life Measurement Techniques](#half-life-measurement-techniques)
</details>

<details>
<summary>Problem 14</summary>
A patient is administered ${}^{99m}\text{Tc}$ with a physical half-life of 6.0 hours for a
diagnostic scan. The biological half-life of ${}^{99m}\text{Tc}$ in the body is 4.8 hours. Calculate
the effective half-life and the fraction of the initial activity remaining after 12 hours.

**Answer.** $1/t_{\text{eff}} = 1/6.0 + 1/4.8 = 0.167 + 0.208 = 0.375$ hour$^{-1}$.
$t_{\text{eff}} = 1/0.375 = 2.67$ hours.

After 12 hours: $n = 12/2.67 = 4.49$ effective half-lives. Fraction remaining
$= 1/2^{4.49} = 1/22.4 = 0.0446$, i.e. 4.5%.

<b>If you get this wrong, revise:</b> [Nuclear Medicine](#nuclear-medicine)
</details>

<details>
<summary>Problem 15</summary>
Explain why a sample of radon-222 collected from the soil beneath a building continues to produce a
detectable activity even after the original radon-222 has been removed, referring to the concept of
secular equilibrium.

**Answer.** Radon-222 is part of the ${}^{238}\text{U}$ decay chain. Its parent, radium-226, has a
half-life of 1600 years — much longer than radon-222's half-life of 3.82 days. In secular
equilibrium, radon-222 is produced by radium-226 at the same rate it decays, so its activity remains
constant. Removing the radon-222 temporarily reduces the activity, but new radon-222 atoms are
continuously produced by the long-lived parent, causing the radon activity to rebuild towards its
equilibrium value over several radon half-lives (approximately 20-40 days).

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
