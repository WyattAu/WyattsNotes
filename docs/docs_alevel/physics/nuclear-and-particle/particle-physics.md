---
title: Particle Physics
description:
  "A-Level Physics notes on Particle Physics: 1. The Standard Model; The Four Fundamental Interactions; 2. Quarks; The Six Flavours."
date: 2026-04-23T00:00:00.000Z
tags: [Physics, ALevel]
categories: [Physics]
slug: particle-physics
---

## Particle Physics

:::info Board Coverage AQA Paper 2 | Edexcel CP6 | OCR (A) Paper 2 | CIE P4 :::

## 1. The Standard Model

The Standard Model classifies all known fundamental particles and their interactions. It describes:

- **12 fermions** (matter particles): 6 quarks and 6 leptons, each with an antiparticle.
- **5 gauge bosons** (force carriers): photon, $W^+$, $W^-$, $Z^0$, gluon (8 types).
- **1 scalar boson:** Higgs ($H^0$), responsible for giving mass to $W$, $Z$ bosons and fermions.

### The Four Fundamental Interactions

| Interaction | Mediator | Acts on | Range | Relative strength |
|---|---|---|---|---|
| Electromagnetic | Photon ($\gamma$) | Charged particles | Infinite | $\sim 10^{-2}$ |
| Strong (colour) | Gluon ($g$) | Quarks, gluons | $\sim 10^{-15}$ m | $\sim 1$ |
| Weak | $W^\pm$, $Z^0$ | All fermions | $\sim 10^{-18}$ m | $\sim 10^{-6}$ |
| Gravitational | Graviton (hypothetical) | All mass/energy | Infinite | $\sim 10^{-39}$ |

## 2. Quarks

Quarks are fundamental particles that experience the strong force. They carry fractional electric
charge and a colour charge (red, green, or blue).

### The Six Flavours

| Generation | Up-type | Charge | Down-type | Charge |
|---|---|---|---|---|
| 1 | Up ($u$) | $+2e/3$ | Down ($d$) | $-e/3$ |
| 2 | Charm ($c$) | $+2e/3$ | Strange ($s$) | $-e/3$ |
| 3 | Top ($t$) | $+2e/3$ | Bottom ($b$) | $-e/3$ |

### Quark Confinement

Quarks are never observed in isolation. They are always bound into colour-neutral combinations:

- **Baryons:** Three quarks (one of each colour, or colour-anticolour combinations that cancel).
  Examples: proton ($uud$), neutron ($udd$).
- **Mesons:** A quark--antiquark pair. Examples: pion ($\pi^+ = u\bar{d}$), kaon ($K^+ = u\bar{s}$).

The strong force increases with distance (unlike gravity and electromagnetism, which decrease). Pulling
quarks apart stores energy in the colour field until it is energetically favourable to create a new
quark--antiquark pair (quark--antiquark pair production).

### Properties of Quarks

Each quark possesses: electric charge, colour charge, baryon number ($+1/3$ each), and flavour quantum
numbers (strangeness, charm, etc.). Antiquarks have opposite signs for all these quantities.

## 3. Leptons

Leptons are fundamental particles that do **not** experience the strong force.

### The Six Leptons

| Generation | Charged lepton | Neutrino |
|---|---|---|
| 1 | Electron ($e^-$) | Electron neutrino ($\nu_e$) |
| 2 | Muon ($\mu^-$) | Muon neutrino ($\nu_\mu$) |
| 3 | Tau ($\tau^-$) | Tau neutrino ($\nu_\tau$) |

Each lepton has a corresponding antiparticle ($e^+$, $\bar{\nu}_e$, etc.).

### Conservation of Lepton Number

Lepton number $L_e$, $L_\mu$, $L_\tau$ are conserved separately in all interactions. For example,
in beta-minus decay:

$$n \to p + e^- + \bar{\nu}_e$$

$L_e$: $0 \to 0 + 1 + (-1) = 0$. Conserved.

## 4. Hadrons: Baryons and Mesons

Hadrons are composite particles made of quarks that experience the strong force.

### Baryons

Baryons consist of three quarks. They have baryon number $B = +1$ (antibaryons: $B = -1$).

| Particle | Quark content | Charge | Strangeness |
|---|---|---|---|
| Proton ($p$) | $uud$ | $+e$ | $0$ |
| Neutron ($n$) | $udd$ | $0$ | $0$ |
| $\Sigma^+$ | $uus$ | $+e$ | $-1$ |
| $\Xi^-$ | $dss$ | $-e$ | $-2$ |
| $\Omega^-$ | $sss$ | $-e$ | $-3$ |

### Mesons

Mesons consist of a quark--antiquark pair. They have baryon number $B = 0$.

| Particle | Quark content | Charge | Strangeness |
|---|---|---|---|
| $\pi^+$ | $u\bar{d}$ | $+e$ | $0$ |
| $\pi^-$ | $\bar{u}d$ | $-e$ | $0$ |
| $\pi^0$ | $u\bar{u}$ or $d\bar{d}$ | $0$ | $0$ |
| $K^+$ | $u\bar{s}$ | $+e$ | $+1$ |
| $K^-$ | $\bar{u}s$ | $-e$ | $-1$ |

### Verifying Quark Content

**Proton charge:** $q_p = 2\!\left(\frac{+2e}{3}\right) + \frac{-e}{3} = \frac{4e - e}{3} = +e$. $\checkmark$

**Neutron charge:** $q_n = \frac{+2e}{3} + 2\!\left(\frac{-e}{3}\right) = \frac{2e - 2e}{3} = 0$. $\checkmark$

**Beta-minus decay of a neutron:**

$$udd \to uud + e^- + \bar{\nu}_e$$

A $d$ quark converts to a $u$ quark (via the weak interaction, mediated by a $W^-$ boson):

$$d \to u + W^-, \qquad W^- \to e^- + \bar{\nu}_e$$

Strangeness changes by $\Delta S = +1$ (a strange quark is destroyed), consistent with the weak
interaction (which does not conserve strangeness).

## 5. Conservation Laws

In all particle interactions, the following quantities are **always conserved**:

| Quantity | Conserved in all interactions? |
|---|---|
| Energy | Yes |
| Momentum | Yes |
| Electric charge | Yes |
| Lepton number ($L_e$, $L_\mu$, $L_\tau$) | Yes |
| Baryon number ($B$) | Yes |
| Strangeness ($S$) | Strong and EM only (not weak) |

:::warning Common Pitfall Strangeness is conserved by the strong and electromagnetic interactions but
**not** by the weak interaction. Strange particles are always produced in pairs (associated production)
via the strong interaction (conserving $S$) but decay individually via the weak interaction.
:::

<details>
<summary>Worked Example: Conservation Check</summary>
Verify conservation laws for: $K^- + p \to \pi^+ + \pi^-$.

Quark content: $K^- = \bar{u}s$, $p = uud$, $\pi^+ = u\bar{d}$, $\pi^- = \bar{u}d$.

**Charge:** $-1 + 1 = 1 + (-1) = 0$. Conserved.
**Baryon number:** $0 + 1 = 0 + 0 = 1$. NOT conserved ($1 \neq 0$).

This reaction **cannot occur** because baryon number is not conserved.

Corrected reaction: $K^- + p \to \Lambda^0 + \pi^0$ (or other baryon + meson combinations).

$\Lambda^0 = uds$, $\pi^0 = u\bar{u}$ or $d\bar{d}$.

**Charge:** $-1 + 1 = 0 + 0 = 0$. Conserved.
**Baryon number:** $0 + 1 = 1 + 0 = 1$. Conserved.
**Strangeness:** $+1 + 0 = -1 + 0 = -1$. Conserved.

</details>

## 6. Antiparticles

Every particle has a corresponding antiparticle with the same mass but opposite values of all quantum
numbers (charge, baryon number, lepton number, strangeness).

| Particle | Antiparticle | Key difference |
|---|---|---|
| Electron ($e^-$) | Positron ($e^+$) | Charge reversed |
| Proton ($p$) | Antiproton ($\bar{p}$) | Charge and baryon number reversed |
| Neutrino ($\nu_e$) | Antineutrino ($\bar{\nu}_e$) | Lepton number reversed |

### Pair Production and Annihilation

**Pair production:** A photon with energy at least $2m_e c^2 = 1.022$ MeV can create an
electron--positron pair (usually near a nucleus to conserve momentum):

$$\gamma \to e^- + e^+$$

**Annihilation:** When a particle meets its antiparticle, they annihilate, converting their combined
rest mass energy into photons:

$$e^- + e^+ \to 2\gamma$$

Two photons are required (not one) to conserve both energy and momentum.

### Dirac's Prediction

Dirac (1928) combined quantum mechanics with special relativity, obtaining an equation that naturally
predicted antiparticles. The positron ($e^+$) was discovered by Anderson (1932) in cosmic ray
photographs, confirming Dirac's prediction.

## 7. Feynman Diagrams

Feynman diagrams are pictorial representations of particle interactions. Each diagram corresponds to
a mathematical term in the perturbation theory expansion of the interaction amplitude.

### Conventions

- Straight lines: fermions (quarks, leptons).
- Wavy lines: photons (electromagnetic interaction).
- Wavy/spring lines with arrow: $W^\pm$, $Z^0$ bosons (weak interaction).
- Curly lines: gluons (strong interaction).
- Time flows from left to right.
- Particles are labelled with their symbols.
- Arrows on fermion lines indicate the direction of fermion number flow (forward for particles,
  backward for antiparticles).

### Beta-Minus Decay

$$n \to p + e^- + \bar{\nu}_e$$

**Diagram:** A $d$ quark line enters, emits a $W^-$ boson (wavy line), and continues as a $u$ quark
line. The $W^-$ decays into an electron line and an antineutrino line.

At the quark level: $d \to u + W^-$, then $W^- \to e^- + \bar{\nu}_e$.

### Electron--Positron Annihilation

$$e^- + e^+ \to \gamma \to \mu^- + \mu^+$$

**Diagram:** An $e^-$ line and an $e^+$ line (arrow reversed) meet at a vertex, connected by a photon
line. The photon line connects to a second vertex where a $\mu^-$ line and $\mu^+$ line emerge.

### Key Vertices

Each vertex in a Feynman diagram represents a fundamental interaction and must conserve all
applicable quantum numbers:

1. **QED vertex:** A fermion line, an antifermion line, and a photon line meet. Charge is conserved.
2. **Weak vertex:** A fermion line changes flavour (e.g., $d \to u$), connected by a $W$ or $Z$ boson.
3. **QCD vertex:** A quark line emits or absorbs a gluon, changing colour but not flavour.

## 8. Photoelectric Effect

### Einstein's Equation

When photons of frequency $f$ strike a metal surface, electrons are emitted only if $hf \gt \phi$,
where $\phi$ is the work function of the metal.

$$\boxed{hf = E_k^{\max} + \phi}$$

where $E_k^{\max}$ is the maximum kinetic energy of the emitted photoelectrons.

### Key Observations

1. **Threshold frequency:** $f_0 = \phi/h$. No emission below this frequency, regardless of
   intensity.
2. **Instantaneous emission:** Electrons are emitted within $10^{-9}$ s of illumination. This rules
   out a classical energy-accumulation model.
3. **Intensity effect:** Increasing intensity increases the number of photoelectrons (more photons)
   but not their maximum kinetic energy.
4. **Frequency effect:** Increasing frequency above threshold increases $E_k^{\max}$ linearly.

### Proof of the Threshold Frequency

At the threshold, $E_k^{\max} = 0$, so $hf_0 = \phi$:

$$\boxed{f_0 = \frac{\phi}{h}}$$

For frequencies below $f_0$, no electron can be emitted regardless of intensity, because each photon
carries insufficient energy. Increasing intensity means more photons, not more energy per photon.

<details>
<summary>Worked Example: Photoelectric Effect</summary>
Light of wavelength 400 nm strikes a zinc plate ($\phi = 4.30$ eV). Calculate the maximum kinetic
energy of the emitted photoelectrons and determine whether emission occurs.

**Answer.** $E_{\mathrm{photon}} = hf = hc/\lambda = (6.63 \times 10^{-34} \times 3.00 \times 10^8)/(400 \times 10^{-9}) = 4.97 \times 10^{-19}$ J $= 3.11$ eV.

Since $3.11\ \mathrm{eV} \lt 4.30\ \mathrm{eV} = \phi$, no photoelectrons are emitted.

For emission, the minimum wavelength is: $\lambda_{\min} = hc/\phi = (6.63 \times 10^{-34} \times 3.00 \times 10^8)/(4.30 \times 1.60 \times 10^{-19}) = 2.89 \times 10^{-7}$ m $= 289$ nm (UV).

</details>

## 9. Electron Diffraction and de Broglie Wavelength

### de Broglie's Hypothesis

**Hypothesis.** Every particle with momentum $p$ has an associated wavelength:

$$\boxed{\lambda = \frac{h}{p}}$$

where $h = 6.63 \times 10^{-34}$ J s is Planck's constant.

This unifies the wave--particle duality: matter particles exhibit wave-like properties (diffraction,
interference) just as electromagnetic waves exhibit particle-like properties (photoelectric effect).

### Derivation for Non-Relativistic Electrons

An electron accelerated through potential difference $V$ gains kinetic energy:

$$\frac{1}{2}m_e v^2 = eV \implies v = \sqrt{\frac{2eV}{m_e}}$$

$$p = m_e v = \sqrt{2m_e eV}$$

$$\boxed{\lambda = \frac{h}{\sqrt{2m_e eV}}}$$

For $V = 100$ V: $\lambda = 6.63 \times 10^{-34}/\sqrt{2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times 100} = 1.23 \times 10^{-10}$ m $= 0.123$ nm.

This is comparable to atomic spacing, explaining why electron diffraction can resolve crystal
structures.

### Davisson--Germer Experiment (1927)

Davisson and Germer directed a beam of electrons at a nickel crystal and observed a diffraction
pattern — sharp intensity maxima at specific angles. The angles matched the prediction of the de
Broglie wavelength using the Bragg condition:

$$n\lambda = 2d\sin\theta$$

This provided direct experimental confirmation of wave--particle duality for matter.

### Evidence for Wave Nature of Particles

| Phenomenon | Particle | Evidence of wave nature |
|---|---|---|
| Electron diffraction | Electron | Davisson--Germer (1927) |
| Neutron diffraction | Neutron | Crystal diffraction patterns |
| Electron interference | Electron | Double-slit experiment |
| Molecular diffraction | $C_{60}$ (fullerene) | Interference fringes (Arndt, 1999) |

<details>
<summary>Worked Example: de Broglie Wavelength</summary>
Calculate the de Broglie wavelength of (a) an electron with kinetic energy 150 eV, (b) a proton
moving at $2.0 \times 10^6$ m s$^{-1}$.

**Answer.** (a) $\lambda = h/\sqrt{2m_e eV} = 6.63 \times 10^{-34}/\sqrt{2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times 150} = 6.63 \times 10^{-34}/\sqrt{4.37 \times 10^{-47}} = 6.63 \times 10^{-34}/6.61 \times 10^{-24} = 1.00 \times 10^{-10}$ m $= 0.100$ nm.

(b) $\lambda = h/(m_p v) = 6.63 \times 10^{-34}/(1.67 \times 10^{-27} \times 2.0 \times 10^6) = 1.98 \times 10^{-13}$ m.

The proton's wavelength is about 500 times shorter than the electron's for comparable energies,
because of its much larger mass.

</details>

## 10. Wave--Particle Duality: Unification

The de Broglie relation $\lambda = h/p$ and the Einstein relation $E = hf$ together imply:

$$E = hf = \frac{hc}{\lambda} = pc$$

for massless particles (photons). For massive particles in the non-relativistic limit:

$$E_k = \frac{p^2}{2m} = \frac{h^2}{2m\lambda^2}$$

These relations are the foundation of quantum mechanics. The wave function $\Psi$ of a particle
satisfies the Schrodinger equation, and the probability of finding the particle in a region is
$|\Psi|^2$.

## Problem Set

<details>
<summary>Problem 1</summary>
State the quark content of (a) a proton, (b) a neutron, (c) a $\pi^+$ meson, (d) a $K^-$ meson.
Verify the electric charge in each case.

**Answer.** (a) $p = uud$: $2(+2e/3) + (-e/3) = +e$. $\checkmark$
(b) $n = udd$: $(+2e/3) + 2(-e/3) = 0$. $\checkmark$
(c) $\pi^+ = u\bar{d}$: $(+2e/3) + (+e/3) = +e$. $\checkmark$
(d) $K^- = \bar{u}s$: $(-2e/3) + (-e/3) = -e$. $\checkmark$

</details>

<details>
<summary>Problem 2</summary>
A positron with kinetic energy 2.0 MeV collides with an electron at rest. Calculate the total energy
available for photon production.

**Answer.** Total energy $= 2m_e c^2 + E_k = 2 \times 0.511 + 2.0 = 3.022$ MeV.

</details>

<details>
<summary>Problem 3</summary>
Check whether the following reaction conserves charge, baryon number, and strangeness:
$\pi^- + p \to K^0 + \Lambda^0$.

**Answer.** Quark content: $\pi^- = \bar{u}d$, $p = uud$, $K^0 = d\bar{s}$, $\Lambda^0 = uds$.

**Charge:** $-1 + 1 = 0 + 0 = 0$. Conserved.
**Baryon number:** $0 + 1 = 0 + 1 = 1$. Conserved.
**Strangeness:** $0 + 0 = +1 + (-1) = 0$. Conserved.

The reaction is allowed by all conservation laws (proceeds via the strong interaction).

</details>

<details>
<summary>Problem 4</summary>
Light of wavelength 550 nm falls on a metal with work function 2.0 eV. Calculate the maximum kinetic
energy of the photoelectrons and their maximum speed.

**Answer.** $E_{\mathrm{photon}} = hc/\lambda = 2.26$ eV.
$E_k = hf - \phi = 2.26 - 2.0 = 0.26$ eV $= 4.16 \times 10^{-20}$ J.
$v = \sqrt{2E_k/m_e} = \sqrt{2 \times 4.16 \times 10^{-20}/9.11 \times 10^{-31}} = 3.02 \times 10^5$ m s$^{-1}$.

</details>

<details>
<summary>Problem 5</summary>
Draw the Feynman diagram for beta-plus decay: $p \to n + e^+ + \nu_e$. Describe the quark-level
process.

**Answer.** At the quark level: a $u$ quark converts to a $d$ quark by emitting a $W^+$ boson.
The $W^+$ then decays to $e^+ + \nu_e$.

**Diagram structure:**
- $u$ quark line enters from the left.
- At the first vertex: $u$ emits $W^+$ and becomes $d$ (continues right).
- At the second vertex: $W^+$ splits into $e^+$ (forward arrow for antiparticle shown as
  backward arrow) and $\nu_e$.

</details>

<details>
<summary>Problem 6</summary>
Calculate the de Broglie wavelength of a neutron with kinetic energy 0.025 eV (thermal neutron at
room temperature).

**Answer.** $E_k = 0.025 \times 1.60 \times 10^{-19} = 4.0 \times 10^{-21}$ J.
$v = \sqrt{2E_k/m_n} = \sqrt{2 \times 4.0 \times 10^{-21}/1.67 \times 10^{-27}} = 2189$ m s$^{-1}$.
$\lambda = h/(m_n v) = 6.63 \times 10^{-34}/(1.67 \times 10^{-27} \times 2189) = 1.82 \times 10^{-10}$ m $= 0.182$ nm.

This wavelength is comparable to interatomic spacing, which is why thermal neutrons are used for
neutron diffraction studies of crystal structures.

</details>

<details>
<summary>Problem 7</summary>
Explain why the $K^+$ meson ($u\bar{s}$) decays via the weak interaction with a lifetime of
$\sim 10^{-8}$ s, while the $\rho^0$ meson ($u\bar{u}$) decays via the strong interaction with a
lifetime of $\sim 10^{-23}$ s.

**Answer.** The $K^+$ contains a strange quark. Decaying the $s$ quark requires changing its flavour
(since there is no lighter meson containing an $s$ quark that conserves mass-energy). Flavour change
requires the weak interaction, which is much weaker than the strong force, hence the much longer
lifetime ($\sim 10^{-8}$ s vs $\sim 10^{-23}$ s).

The $\rho^0$ ($u\bar{u}$) can decay to $\pi^+ + \pi^-$ via the strong interaction (no flavour
change needed), so it decays almost instantaneously on the nuclear timescale.

</details>

<details>
<summary>Problem 8</summary>
A particle of unknown mass is accelerated through 500 V and produces a first-order diffraction
maximum at $50^\circ$ when scattered by a crystal with lattice spacing $2.0 \times 10^{-10}$ m.
Identify the particle.

**Answer.** From Bragg's law (first order, $n = 1$): $\lambda = 2d\sin\theta = 2 \times 2.0 \times 10^{-10} \times \sin 50^\circ = 3.06 \times 10^{-10}$ m.

From $\lambda = h/\sqrt{2meV}$: $m = h^2/(2eV\lambda^2) = (6.63 \times 10^{-34})^2/(2 \times 1.60 \times 10^{-19} \times 500 \times (3.06 \times 10^{-10})^2) = 4.40 \times 10^{-67}/(1.50 \times 10^{-37}) = 2.93 \times 10^{-30}$ kg.

Comparing with known masses: $m_e = 9.11 \times 10^{-31}$ kg, $m_p = 1.67 \times 10^{-27}$ kg.
The mass is approximately $3.2\,m_e$, which does not match a known fundamental particle. This
suggests a systematic error or that the particle is a muon ($m_\mu = 1.88 \times 10^{-28}$ kg).
For a muon: $\lambda = 6.63 \times 10^{-34}/\sqrt{2 \times 1.88 \times 10^{-28} \times 1.60 \times 10^{-19} \times 500} = 6.63 \times 10^{-34}/\sqrt{3.01 \times 10^{-44}} = 6.63 \times 10^{-34}/1.74 \times 10^{-22} = 3.82 \times 10^{-12}$ m.

The calculated $\lambda = 3.06 \times 10^{-10}$ m is most consistent with an electron
($\lambda_e = h/\sqrt{2m_e eV} = 6.63 \times 10^{-34}/\sqrt{2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times 500} = 5.49 \times 10^{-11}$ m). The discrepancy suggests an experimental issue or different scattering geometry.

</details>
