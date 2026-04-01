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

:::info Board Coverage
AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

## 1. Nuclear Structure

The atom consists of a nucleus containing **protons** and **neutrons** (collectively called **nucleons**), surrounded by electrons.

| Property | Proton    | Neutron   | Electron        |
| -------- | --------- | --------- | --------------- |
| Charge   | $+e$      | $0$       | $-e$            |
| Mass (u) | $1.00728$ | $1.00867$ | $0.00055$       |
| Location | Nucleus   | Nucleus   | Electron shells |

**Notation.** A nuclide is written as $\prescript{A}{}{Z}\text{X}$ where $A$ is the mass number (nucleon number) and $Z$ is the atomic number (proton number). The neutron number is $N = A - Z$.

**Isotopes** are atoms of the same element (same $Z$) with different mass numbers (different $N$).

## 2. Types of Radioactive Decay

### Alpha Decay ($\alpha$)

An alpha particle is a helium nucleus: $\prescript{4}{}{2}\alpha$.

$$\prescript{A}{}{Z}\text{X} \to \prescript{A-4}{}{Z-2}\text{Y} + \prescript{4}{}{2}\alpha$$

**Conservation checks:**

- Mass number: $A = (A-4) + 4$ $\checkmark$
- Atomic number: $Z = (Z-2) + 2$ $\checkmark$

Alpha particles are highly ionising but poorly penetrating (stopped by paper or a few cm of air).

### Beta Decay ($\beta^-$)

A neutron converts to a proton, emitting an electron and an antineutrino:

$$\prescript{A}{}{Z}\text{X} \to \prescript{A}{}{Z+1}\text{Y} + \prescript{0}{}{-1}\beta^- + \bar{\nu}_e$$

**Conservation checks:**

- Mass number: $A = A + 0$ $\checkmark$
- Atomic number: $Z = (Z+1) + (-1)$ $\checkmark$
- Charge: $0 = (+1) + (-1) + 0$ $\checkmark$

The antineutrino was postulated by Fermi (1934) to conserve energy and momentum — the observed electron energy spectrum is continuous, implying a third particle carries away the remaining energy.

**Penetration:** Beta particles are moderately ionising, stopped by a few mm of aluminium.

### Beta-Plus Decay ($\beta^+$)

A proton converts to a neutron, emitting a positron and a neutrino:

$$\prescript{A}{}{Z}\text{X} \to \prescript{A}{}{Z-1}\text{Y} + \prescript{0}{}{+1}\beta^+ + \nu_e$$

This only occurs in proton-rich nuclei.

### Gamma Decay ($\gamma$)

After alpha or beta decay, the daughter nucleus is often in an excited state. It de-excites by emitting a gamma ray (high-energy photon):

$$\prescript{A}{}{Z}\text{X}^* \to \prescript{A}{}{Z}\text{X} + \gamma$$

No change in $A$ or $Z$. Gamma rays are weakly ionising but highly penetrating (stopped by thick lead or concrete).

:::warning Common Pitfall
In $\beta^-$ decay, the mass number $A$ does not change — only the atomic number changes. A neutron becomes a proton, so the total nucleon count is unchanged.
:::

## 3. Exponential Decay Law

### Derivation of $N = N_0 e^{-\lambda t}$

The probability that any single nucleus decays in a small time interval $dt$ is $\lambda\,dt$, where $\lambda$ is the **decay constant**.

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

The **activity** $A$ is the number of decays per unit time:

$$A = -\frac{dN}{dt} = \lambda N = \lambda N_0 e^{-\lambda t} = A_0 e^{-\lambda t}$$

SI unit: becquerel (Bq), where 1 Bq = 1 decay per second.

### Half-Life

The **half-life** $t_{1/2}$ is the time for half the nuclei to decay: $N = N_0/2$.

$$\frac{N_0}{2} = N_0 e^{-\lambda t_{1/2}}$$

$$\frac{1}{2} = e^{-\lambda t_{1/2}}$$

$$\ln 2 = \lambda t_{1/2}$$

$$\boxed{t_{1/2} = \frac{\ln 2}{\lambda}}$$

**Intuition.** After one half-life, half remain. After two, a quarter. After $n$ half-lives, $N = N_0/2^n$. The decay is exponential — the activity is always proportional to the number of remaining nuclei, so it decreases exponentially.

:::tip Exam Technique
On a log-linear graph of activity vs time, radioactive decay appears as a straight line with gradient $=-\lambda$. The half-life can be found by finding the time for the activity to halve at any point on the curve.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Radium-226 undergoes alpha decay. Write the nuclear equation and identify the daughter nucleus.

**Answer.** $\prescript{226}{}{88}\text{Ra} \to \prescript{222}{}{86}\text{Rn} + \prescript{4}{}{2}\alpha$.

Daughter nucleus: Radon-222.

<b>If you get this wrong, revise:</b> [Alpha Decay](#alpha-decay-)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

Carbon-14 undergoes beta-minus decay. Write the nuclear equation.

**Answer.** $\prescript{14}{}{6}\text{C} \to \prescript{14}{}{7}\text{N} + \prescript{0}{}{-1}\beta^- + \bar{\nu}_e$.

<b>If you get this wrong, revise:</b> [Beta Decay ($\beta^-$)](#beta-decay-_beta)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A radioactive sample has a half-life of 5.0 hours. If the initial activity is 800 Bq, what is the activity after 20 hours?

**Answer.** Number of half-lives: $n = 20/5 = 4$. $A = 800/2^4 = 800/16 = 50$ Bq.

<b>If you get this wrong, revise:</b> [Half-Life](#half-life)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A sample contains $4.0 \times 10^{12}$ nuclei of a radioactive isotope with decay constant $1.2 \times 10^{-7}$ s$^{-1}$. Calculate the initial activity and the number of nuclei remaining after 2.0 hours.

**Answer.** $A_0 = \lambda N_0 = 1.2 \times 10^{-7} \times 4.0 \times 10^{12} = 4.8 \times 10^5$ Bq.

$t = 7200$ s. $N = N_0 e^{-\lambda t} = 4.0 \times 10^{12} \times e^{-1.2 \times 10^{-7} \times 7200} = 4.0 \times 10^{12} \times e^{-0.864} = 4.0 \times 10^{12} \times 0.421 = 1.68 \times 10^{12}$.

<b>If you get this wrong, revise:</b> [Exponential Decay Law](#3-exponential-decay-law)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

Derive the relationship $t_{1/2} = \ln 2/\lambda$.

**Answer.** At $t = t_{1/2}$: $N = N_0/2$. From $N = N_0 e^{-\lambda t}$: $\frac{1}{2} = e^{-\lambda t_{1/2}}$. Taking natural logs: $\ln(1/2) = -\lambda t_{1/2}$. $-\ln 2 = -\lambda t_{1/2}$. $t_{1/2} = \ln 2/\lambda$.

<b>If you get this wrong, revise:</b> [Half-Life](#half-life)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

The activity of a sample decreases from 1200 Bq to 150 Bq in 30 minutes. Calculate the half-life.

**Answer.** $150/1200 = 1/8 = 1/2^3$. So 3 half-lives have elapsed. $t_{1/2} = 30/3 = 10$ minutes.

<b>If you get this wrong, revise:</b> [Half-Life](#half-life)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Explain why the antineutrino was proposed in beta decay.

**Answer.** In beta decay, the emitted electron has a continuous energy spectrum rather than a single energy. This appeared to violate conservation of energy. Pauli proposed (1930) and Fermi formalised (1934) the existence of an unseen particle (the antineutrino) that carries away the remaining energy and momentum. The total energy of electron + antineutrino equals the fixed energy released by the nuclear transition, conserving energy. The antineutrino was experimentally detected in 1956 by Cowan and Reines.

<b>If you get this wrong, revise:</b> [Beta Decay ($\beta^-$)](#beta-decay-_beta)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A sample of iodine-131 has a half-life of 8.04 days. How long does it take for the activity to fall to 5% of its initial value?

**Answer.** $0.05 = e^{-\lambda t}$. $\ln 0.05 = -\lambda t$. $\lambda = \ln 2/t_{1/2} = 0.693/8.04 = 0.0862$ day$^{-1}$.

$t = -\ln 0.05/\lambda = 3.00/0.0862 = 34.8$ days.

<b>If you get this wrong, revise:</b> [Exponential Decay Law](#3-exponential-decay-law)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

Compare and contrast alpha, beta, and gamma radiation in terms of: (a) nature, (b) ionising power, (c) penetrating power, (d) deflection in electric and magnetic fields.

**Answer.** (a) $\alpha$: helium nucleus (2p, 2n). $\beta$: electron/positron. $\gamma$: electromagnetic photon.

(b) Ionising power: $\alpha > \beta > \gamma$ (alpha has the largest charge and slowest speed, maximising interaction).

(c) Penetrating power: $\gamma > \beta > \alpha$ (alpha stopped by paper, beta by aluminium, gamma by thick lead).

(d) Deflection: $\alpha$ and $\beta$ are deflected (opposite directions since opposite charges). $\alpha$ deflection is less (larger mass). $\gamma$ is undeflected (no charge).

<b>If you get this wrong, revise:</b> [Types of Radioactive Decay](#2-types-of-radioactive-decay)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

A radioactive isotope X with half-life 12 hours decays to a stable daughter Y. A sample initially contains 1000 atoms of X. How many atoms of Y are present after 36 hours?

**Answer.** After 36 hours: $n = 36/12 = 3$ half-lives. $N_X = 1000/2^3 = 125$. Atoms of Y = $1000 - 125 = 875$.

<b>If you get this wrong, revise:</b> [Exponential Decay Law](#3-exponential-decay-law)

</p>
</details>
