---
title: Radioactivity — Diagnostic Tests
description: Diagnostic tests for half-life, decay equations, activity, alpha-beta-gamma radiation, and nuclear decay chains at maximum A-Level Physics difficulty.
slug: diag-radioactivity
hide_table_of_contents: true
---

# Radioactivity — Diagnostic Tests

## Unit Tests

### UT-1: Exponential Decay with Variable Half-Life

**Question:**

A sample contains two radioactive isotopes: isotope $A$ with half-life $t_{A} = 5.0\,\text{days}$ and initial activity $R_{A0} = 400\,\text{Bq}$, and isotope $B$ with half-life $t_{B} = 20.0\,\text{days}$ and initial activity $R_{B0} = 600\,\text{Bq}$.

(a) Calculate the total activity of the sample after $10\,\text{days}$.

(b) At what time is the total activity minimum?

(c) Calculate the time at which the activities of $A$ and $B$ are equal.

**Solution:**

(a) Decay constants: $\lambda_A = \ln 2/t_A = 0.693/5.0 = 0.1386\,\text{day}^{-1}$

$\lambda_B = \ln 2/t_B = 0.693/20.0 = 0.03465\,\text{day}^{-1}$

After $10\,\text{days}$:

$R_A = 400e^{-0.1386 \times 10} = 400e^{-1.386} = 400 \times 0.250 = 100\,\text{Bq}$

$R_B = 600e^{-0.03465 \times 10} = 600e^{-0.3465} = 600 \times 0.707 = 424\,\text{Bq}$

Total: $R = 100 + 424 = 524\,\text{Bq}$

(b) Total activity: $R(t) = 400e^{-0.1386t} + 600e^{-0.03465t}$

Setting $dR/dt = 0$:

$$-400 \times 0.1386 e^{-0.1386t} - 600 \times 0.03465 e^{-0.03465t} = 0$$

$$-55.44 e^{-0.1386t} = 20.79 e^{-0.03465t}$$

$$e^{-0.10395t} = \frac{20.79}{55.44} = 0.3750$$

$$-0.10395t = \ln(0.3750) = -0.9808$$

$$t = 9.43\,\text{days}$$

(c) $400e^{-0.1386t} = 600e^{-0.03465t}$

$$e^{-0.10395t} = 600/400 = 1.5$$

This requires $e$ raised to a positive power to equal $1.5$, but $-0.10395t \lt 0$ for all $t \gt 0$, so $e^{-0.10395t} \lt 1$ always.

The activities are **never equal** for $t \gt 0$. At $t = 0$, $R_A = 400 \lt R_B = 600$, and $R_A$ always decays faster than $R_B$ (larger decay constant), so $R_A$ is always less than $R_B$ for $t \gt 0$.

For the activities to be equal, we would need $R_{A0} \gt R_{B0}$ (isotope $A$ starts with higher activity) and then they would cross at some time. With $R_{A0} \lt R_{B0}$, the activities never cross.

---
### UT-2: Decay Chain Analysis

**Question:**

Isotope $X$ decays to isotope $Y$ with decay constant $\lambda_X = 0.10\,\text{s}^{-1}$. Isotope $Y$ decays to stable isotope $Z$ with decay constant $\lambda_Y = 0.05\,\text{s}^{-1}$. Initially, only $X$ is present with $N_{X0} = 1000$ atoms.

(a) Write the differential equations governing the number of atoms of each isotope.

(b) Calculate the number of atoms of $Y$ at $t = 20\,\text{s}$ using the Bateman equation.

(c) State the condition for secular equilibrium and determine whether this system reaches it.

**Solution:**

(a) $\frac{dN_X}{dt} = -\lambda_X N_X$

$$\frac{dN_Y}{dt} = \lambda_X N_X - \lambda_Y N_Y$$

$$\frac{dN_Z}{dt} = \lambda_Y N_Y$$

(b) $N_X(t) = N_{X0}e^{-\lambda_X t} = 1000e^{-0.10 \times 20} = 1000e^{-2} = 135.3$

For $N_Y(t)$ (Bateman equation for $\lambda_X \ne \lambda_Y$):

$$N_Y(t) = \frac{\lambda_X N_{X0}}{\lambda_Y - \lambda_X}(e^{-\lambda_X t} - e^{-\lambda_Y t})$$

$$= \frac{0.10 \times 1000}{0.05 - 0.10}(e^{-2} - e^{-1}) = \frac{100}{-0.05}(0.1353 - 0.3679) = -2000 \times (-0.2326) = 465.2$$

So approximately $465$ atoms of $Y$ at $t = 20\,\text{s}$.

(c) Secular equilibrium occurs when $\lambda_X \ll \lambda_Y$ (the parent decays much more slowly than the daughter). In this case, $\lambda_X = 0.10$ and $\lambda_Y = 0.05$, so $\lambda_X \gt \lambda_Y$. This is the opposite of secular equilibrium -- it is **transient equilibrium** ($\lambda_Y \lt \lambda_X$).

In transient equilibrium, after sufficient time, the ratio $N_Y/N_X$ approaches a constant: $\lambda_X N_X = \lambda_Y N_Y$, giving $N_Y/N_X = \lambda_X/\lambda_Y = 2.0$.

At $t = 20\,\text{s}$: $N_Y/N_X = 465/135 = 3.44$, which has not yet reached the equilibrium value of $2.0$. More time is needed.

---
### UT-3: Beta Decay and the Neutrino

**Question:**

The isotope carbon-14 undergoes beta-minus decay to nitrogen-14:

$${}^{14}_{\ 6}\text{C} \to {}^{14}_{\ 7}\text{N} + {}^{\ 0}_{-1}\text{e} + \bar{\nu}_e$$

The Q-value of the decay is $0.156\,\text{MeV}$.

(a) Explain why a neutrino (or antineutrino) must be emitted in beta decay.

(b) The maximum kinetic energy of the emitted beta particle is $0.156\,\text{MeV}$. Explain why the beta particles have a continuous energy spectrum.

(c) Calculate the maximum momentum of the beta particle.

Take $m_e = 9.11 \times 10^{-31}\,\text{kg}$, $c = 3.00 \times 10^8\,\text{m}\,\text{s}^{-1}$, $1\,\text{eV} = 1.60 \times 10^{-19}\,\text{J}$.

**Solution:**

(a) In beta-minus decay, a neutron converts to a proton, electron, and electron antineutrino: $n \to p + e^- + \bar{\nu}_e$. Without the antineutrino, the decay would violate conservation of energy and momentum simultaneously. The kinetic energy of the beta particle varies from zero to $Q$, with the antineutrino carrying the remaining energy. The antineutrino ensures that both energy and momentum are conserved for every individual decay, not just on average.

Additionally, beta decay involves the weak nuclear force (mediated by $W^-$ bosons), and the leptons (electron and antineutrino) are produced as a lepton-antilepton pair to conserve lepton number.

(b) The beta particles have a continuous energy spectrum because the available energy ($Q$-value) is shared between the beta particle and the antineutrino. The antineutrino can carry anywhere from zero to nearly the full $Q$-value, giving the beta particle a range of kinetic energies from $0$ to $Q$. This three-body decay (unlike alpha decay, which is effectively two-body) allows continuous energy sharing.

(c) At maximum kinetic energy ($K_{\max} = 0.156\,\text{MeV}$), the antineutrino has zero energy and zero momentum. All momentum must be carried by the beta particle.

$K_{\max} = 0.156\,\text{MeV} = 0.156 \times 10^6 \times 1.60 \times 10^{-19} = 2.496 \times 10^{-14}\,\text{J}$

Since $K \ll m_e c^2 = 0.511\,\text{MeV}$, we can use non-relativistic mechanics:

$$p = \sqrt{2m_e K} = \sqrt{2 \times 9.11 \times 10^{-31} \times 2.496 \times 10^{-14}} = \sqrt{4.548 \times 10^{-44}} = 2.13 \times 10^{-22}\,\text{kg}\,\text{m}\,\text{s}^{-1}$$

Alternatively, using $pc = \sqrt{2m_e c^2 K} = \sqrt{2 \times 0.511 \times 0.156}\,\text{MeV} = \sqrt{0.159}\,\text{MeV} = 0.399\,\text{MeV}$, giving $p = 0.399\,\text{MeV}/c$.

## Integration Tests

### IT-1: Radioactive Dating (with Quantities and Units)

**Question:**

A sample of ancient wood has a carbon-14 activity of $1.2\,\text{Bq}\,\text{g}^{-1}$ of carbon. Living wood has an activity of $0.23\,\text{Bq}\,\text{g}^{-1}$. The half-life of carbon-14 is $5730\,\text{years}$.

(a) Calculate the age of the sample.

(b) Calculate the percentage of original carbon-14 remaining.

(c) If the measurement uncertainty in the activity is $\pm 0.1\,\text{Bq}\,\text{g}^{-1}$, calculate the uncertainty in the age.

**Solution:**

(a) $A = A_0 e^{-\lambda t}$

$\lambda = \ln 2/5730 = 1.209 \times 10^{-4}\,\text{year}^{-1}$

Wait, the sample activity ($1.2\,\text{Bq}\,\text{g}^{-1}$) is higher than living wood ($0.23\,\text{Bq}\,\text{g}^{-1}$). This is impossible for carbon-14 dating -- the sample cannot have more C-14 than living material. The values may have been swapped, or this tests whether the student notices the impossibility.

Assuming the values are correct as stated: $1.2 = 0.23 e^{-\lambda t}$ would give a negative $t$, confirming this is unphysical.

Assuming the correct values are $A = 0.12\,\text{Bq}\,\text{g}^{-1}$ (approximately half the living value):

$$t = \frac{1}{\lambda}\ln\frac{A_0}{A} = \frac{1}{1.209 \times 10^{-4}}\ln\frac{0.23}{0.12} = 8271 \times 0.652 = 5393\,\text{years}$$

Or with the original values interpreted as the sample having been contaminated (the $1.2$ is a typo for $0.12$):

Let me proceed with $A = 0.12\,\text{Bq}\,\text{g}^{-1}$:

$$t = 8271 \times \ln(0.23/0.12) = 8271 \times 0.652 = 5393\,\text{years}$$

(b) Fraction remaining: $N/N_0 = A/A_0 = 0.12/0.23 = 0.522 = 52.2\%$

(c) $\Delta t = \frac{\Delta A}{\lambda A} = \frac{0.1}{1.209 \times 10^{-4} \times 0.12} = \frac{0.1}{1.451 \times 10^{-5}} = 6892\,\text{years}$

The uncertainty in the age ($\pm 6900\,\text{years}$) is larger than the age itself ($5400\,\text{years}$), meaning the measurement is not precise enough to date the sample. This demonstrates the limitation of carbon-14 dating for very old samples -- the activity approaches the background level and statistical uncertainties dominate.

---
### IT-2: Nuclear Medicine — Activity and Dosage (with Nuclear Energy)

**Question:**

Technetium-99m (half-life $6.0\,\text{hours}$) is used in medical imaging. A dose of $5.0\,\text{mCi}$ is prepared at 8:00 AM.

(a) Calculate the activity of the dose at 2:00 PM.

(b) If the effective half-life in the body is $4.8\,\text{hours}$ (due to biological excretion), calculate the time for the activity in the body to fall to $1\%$ of the injected value.

(c) Calculate the number of Tc-99m atoms in the initial dose.

Take $1\,\text{Ci} = 3.7 \times 10^{10}\,\text{Bq}$.

**Solution:**

(a) Time elapsed: 8:00 AM to 2:00 PM = 6.0 hours $= 1$ half-life.

$A = A_0/2 = 5.0/2 = 2.5\,\text{mCi}$

In Bq: $A_0 = 5.0 \times 10^{-3} \times 3.7 \times 10^{10} = 1.85 \times 10^8\,\text{Bq}$

$A = 9.25 \times 10^7\,\text{Bq}$

(b) The effective decay constant combines physical and biological processes:

$$\lambda_{\text{eff}} = \lambda_{\text{physical}} + \lambda_{\text{biological}} = \frac{\ln 2}{6.0} + \frac{\ln 2}{4.8}$$

$$= 0.1155 + 0.1444 = 0.2599\,\text{hour}^{-1}$$

Effective half-life: $t_{1/2,\text{eff}} = \ln 2/\lambda_{\text{eff}} = 0.693/0.2599 = 2.67\,\text{hours}$

Time to reach $1\%$: $0.01 = e^{-0.2599t}$

$$t = \ln(100)/0.2599 = 4.605/0.2599 = 17.7\,\text{hours}$$

(c) $A_0 = \lambda N_0 \Rightarrow N_0 = A_0/\lambda$

$\lambda = 0.1155\,\text{hour}^{-1} = 0.1155/3600 = 3.208 \times 10^{-5}\,\text{s}^{-1}$

$N_0 = 1.85 \times 10^8/3.208 \times 10^{-5} = 5.77 \times 10^{12}$ atoms

This is a very small number of atoms (about $10^{-11}\,\text{mol}$), demonstrating that radioactive samples contain far fewer atoms than ordinary chemical quantities.

---
### IT-3: Background Radiation and Shielding (with Properties of Materials)

**Question:**

A gamma-ray source emits photons of energy $0.662\,\text{MeV}$ (Cs-137). The linear attenuation coefficient in lead is $\mu = 1.20\,\text{cm}^{-1}$ and in concrete is $\mu = 0.15\,\text{cm}^{-1}$.

(a) Calculate the half-value thickness (HVT) for lead and for concrete.

(b) Calculate the thickness of lead required to reduce the intensity to $0.1\%$ of its original value.

(c) A detector behind a $5.0\,\text{cm}$ concrete wall measures a count rate of $120\,\text{counts}\,\text{min}^{-1}$ above background. Calculate the count rate without the wall.

**Solution:**

(a) $I = I_0 e^{-\mu x}$

At HVT: $I = I_0/2$, so $e^{-\mu x_{1/2}} = 0.5 \Rightarrow x_{1/2} = \ln 2/\mu$

Lead: $x_{1/2} = 0.693/1.20 = 0.578\,\text{cm}$

Concrete: $x_{1/2} = 0.693/0.15 = 4.62\,\text{cm}$

(b) $I/I_0 = 0.001 = e^{-1.20x}$

$$x = \ln(1000)/1.20 = 6.908/1.20 = 5.76\,\text{cm}$$

Alternatively: number of HVTs needed $= \log_2(1000) = 9.97 \approx 10$

$x = 10 \times 0.578 = 5.78\,\text{cm}$. Consistent.

(c) $120 = I_0 e^{-0.15 \times 5.0} = I_0 e^{-0.75} = I_0 \times 0.472$

$$I_0 = 120/0.472 = 254\,\text{counts}\,\text{min}^{-1}$$

Without the wall, the count rate would be $254\,\text{counts}\,\text{min}^{-1}$ above background. The $5\,\text{cm}$ concrete wall reduces the count rate by approximately $53\%$.
