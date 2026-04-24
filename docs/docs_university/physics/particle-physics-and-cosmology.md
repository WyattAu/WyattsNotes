---
title: Particle Physics and Cosmology
date: 2026-04-24T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: particle-physics-and-cosmology
---

## 1. The Standard Model

### 1.1 Overview

The **Standard Model** of particle physics describes the fundamental particles and their interactions
via three of the four known forces: the electromagnetic, weak, and strong interactions. Gravity is
not included.

The fundamental particles are:

**Fermions** (spin-1/2):
- **Quarks** (6 flavours, 3 colours each): up, down, charm, strange, top, bottom.
- **Leptons** (6 flavours): electron, muon, tau, and their three neutrinos.

**Bosons** (integer spin):
- **Gauge bosons:** photon ($\gamma$), $W^\pm$, $Z^0$, gluons ($g$, 8 types).
- **Scalar boson:** Higgs ($H$).

**Forces and their gauge bosons:**

| Interaction | Gauge boson | Acts on | Relative strength |
|---|---|---|---|
| Electromagnetic | $\gamma$ | Electric charge | $\alpha \approx 1/137$ |
| Weak | $W^\pm, Z^0$ | Weak isospin | $G_F \approx 1.166 \times 10^{-5}$ GeV$^{-2}$ |
| Strong | $g$ (8 gluons) | Colour charge | $\alpha_s \approx 0.118$ (at $m_Z$) |

### 1.2 Quarks and Leptons

The fermions are organised into three **generations**, each with identical quantum numbers but
increasing mass:

| Generation | Quarks | Charge | Leptons | Charge |
|---|---|---|---|---|
| I | up ($u$), down ($d$) | $+2/3$, $-1/3$ | $e$, $\nu_e$ | $-1$, $0$ |
| II | charm ($c$), strange ($s$) | $+2/3$, $-1/3$ | $\mu$, $\nu_\mu$ | $-1$, $0$ |
| III | top ($t$), bottom ($b$) | $+2/3$, $-1/3$ | $\tau$, $\nu_\tau$ | $-1$, $0$ |

Each quark comes in three **colour charges**: red, green, blue. Antiquarks carry anticolours.

**Hadrons** are colour-neutral bound states of quarks:
- **Baryons:** three quarks (qqq), e.g., proton ($uud$), neutron ($udd$).
- **Mesons:** quark-antiquark pairs ($q\bar{q}$), e.g., $\pi^+$ ($u\bar{d}$), $K^-$ ($s\bar{u}$).

### 1.3 Gauge Bosons

- **Photon ($\gamma$):** Massless, mediates the electromagnetic force. Couples to electric charge.
- **$W^\pm$ and $Z^0$:** Massive ($m_W \approx 80.4$ GeV/$c^2$, $m_Z \approx 91.2$ GeV/$c^2$),
  mediate the weak force. $W^\pm$ changes flavour (charged current); $Z^0$ does not (neutral
  current).
- **Gluons ($g$):** Eight massless gluons mediate the strong force. They carry colour charge
  themselves, leading to self-interaction (non-Abelian gauge theory).
- **Higgs boson ($H$):** Scalar particle ($m_H \approx 125$ GeV/$c^2$), responsible for giving mass
  to $W^\pm$, $Z^0$, and fermions through the Higgs mechanism.

## 2. Conservation Laws and Symmetries

### 2.1 Exactly Conserved Quantities

The following are conserved in all known interactions:

- Energy $E$
- Momentum $\mathbf{p}$
- Angular momentum $\mathbf{L}$
- Electric charge $Q$
- Colour charge
- Baryon number $B$ (each quark has $B = 1/3$)
- Lepton family numbers $L_e$, $L_\mu$, $L_\tau$ (each lepton has $L = +1$, each antilepton $L = -1$)

### 2.2 Approximate or Partially Conserved Quantities

- **Isospin $I$:** Conserved in strong interactions, violated by electromagnetic and weak.
  $I_3$ determines the electric charge: $Q = I_3 + (B + S)/2$ (Gell-Mann--Nishijima formula).
- **Strangeness $S$:** Conserved in strong and electromagnetic, violated by weak (hence "strange"
  particles are produced in pairs but decay via weak interaction).
- **Parity $P$:** Conserved in strong and electromagnetic, maximally violated in weak interactions.
- **Charge conjugation $C$:** Conserved in strong and electromagnetic, violated in weak.
- **CP:** Conserved in most interactions; violated in weak interactions (observed in $K$ and $B$
  meson systems). CP violation is necessary for the matter-antimatter asymmetry.

### 2.3 Symmetry and Noether's Theorem

**Noether's Theorem:** Every continuous symmetry of the action corresponds to a conserved quantity.

| Symmetry | Conserved Quantity |
|---|---|
| Time translation | Energy |
| Space translation | Momentum |
| Rotation | Angular momentum |
| U(1) gauge | Electric charge |
| SU(3) gauge | Colour charge |

Discrete symmetries ($P$, $C$, $T$) do not arise from Noether's theorem but are still powerful
constraints.

## 3. Feynman Diagrams

### 3.1 Rules

Feynman diagrams are a pictorial representation of perturbation theory in quantum field theory. The
basic elements:

- **External lines:** Incoming/outgoing particles (initial/final states).
- **Internal lines (propagators):** Virtual particles mediating the interaction.
- **Vertices:** Interaction points where particles meet. Each vertex has a coupling constant.
- **Antiparticles:** Represented as particles moving backwards in time.

### 3.2 Common Processes

**QED vertex:** $e^- + \gamma \to e^-$ (or $e^+ + \gamma \to e^+$). Coupling: $e = \sqrt{4\pi\alpha}$.

**Electron-positron annihilation:** $e^+ + e^- \to \mu^+ + \mu^-$ proceeds via a virtual photon
($s$-channel).

**Electron-muon scattering:** $e^- + \mu^- \to e^- + \mu^-$ via virtual photon ($t$-channel).

**Weak decay (beta decay):** $n \to p + e^- + \bar{\nu}_e$. The neutron emits a virtual $W^-$ which
decays to $e^-\bar{\nu}_e$.

**Gluon exchange:** $q + q \to q + q$ via gluon. Unlike QED, three-gluon and four-gluon vertices
exist due to the non-Abelian nature of SU(3).

### 3.3 Calculating Amplitudes

The Feynman rules assign a mathematical expression to each diagram element:

- **Fermion propagator:** $\frac{i(\gamma^\mu p_\mu + m)}{p^2 - m^2 + i\epsilon}$
- **Photon propagator:** $\frac{-ig_{\mu\nu}}{p^2 + i\epsilon}$
- **Vertex factor (QED):** $-ie\gamma^\mu$
- **Vertex factor (QCD):** $-ig_s T^a \gamma^\mu$ (where $T^a$ are Gell-Mann matrices)

The total amplitude is the sum over all topologically distinct diagrams at the desired order.

## 4. The Higgs Mechanism

### 4.1 Spontaneous Symmetry Breaking

The Higgs mechanism gives mass to the $W^\pm$ and $Z^0$ bosons while preserving gauge invariance. The
key idea: a scalar field acquires a non-zero **vacuum expectation value (VEV)**, spontaneously
breaking the electroweak symmetry.

**The Higgs potential:**

$$V(\phi) = \mu^2 \phi^\dagger\phi + \lambda(\phi^\dagger\phi)^2$$

with $\mu^2 \lt 0$ and $\lambda \gt 0$. This is the **Mexican hat** potential: the minimum is at
$|\phi| = v/\sqrt{2}$ where $v = \sqrt{-\mu^2/\lambda}$.

### 4.2 Mass Generation for Gauge Bosons

The Higgs field is an SU(2) doublet:

$$\phi = \begin{pmatrix} \phi^+ \\ \phi^0 \end{pmatrix}, \quad \langle\phi\rangle_0 = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ v \end{pmatrix}$$

where $v \approx 246$ GeV.

Expanding around the VEV, the kinetic term $|D_\mu\phi|^2$ (with $D_\mu$ the covariant derivative)
produces mass terms:

$$m_W = \frac{1}{2}gv, \quad m_Z = \frac{1}{2}\sqrt{g^2 + g'^2}\,v, \quad m_\gamma = 0$$

where $g$ and $g'$ are the SU(2) and U(1) coupling constants.

The ratio:

$$\frac{m_W}{m_Z} = \cos\theta_W$$

defines the **Weinberg angle** $\theta_W \approx 28.7^\circ$.

### 4.3 Fermion Masses

Fermions acquire mass through Yukawa couplings to the Higgs field:

$$\mathcal{L}_{\mathrm{Yukawa}} = -y_f \bar{\psi}_L \phi \psi_R + \mathrm{h.c.}$$

After symmetry breaking, this gives $m_f = y_f v/\sqrt{2}$. The Yukawa couplings $y_f$ are free
parameters of the Standard Model, not predicted by the theory.

### 4.4 Physical Higgs Boson

After gauge fixing (unitary gauge), the four degrees of freedom of the Higgs doublet become:

- Three **Goldstone bosons** absorbed by $W^\pm$ and $Z^0$ (giving them their longitudinal polarisation
  states).
- One **physical scalar** particle $H$ with mass $m_H = \sqrt{2\lambda}\,v \approx 125$ GeV/$c^2$.

## 5. Group Theory in Particle Physics

### 5.1 SU(3) Colour

The strong interaction is governed by the gauge group **SU(3)**. The eight gluons correspond to the
eight generators of SU(3), the Gell-Mann matrices $\lambda^a$ ($a = 1, \ldots, 8$).

**Colour confinement:** All observable particles are colour singlets (SU(3) invariant). This is why
free quarks and gluons are not observed.

**Quark colour states:** $q \in \mathbf{3}$ (triplet), $\bar{q} \in \bar{\mathbf{3}}$ (antitriplet).

**Meson colour wavefunction:** $q\bar{q} \in \mathbf{3} \otimes \bar{\mathbf{3}} = \mathbf{8} \oplus \mathbf{1}$.
The singlet $\mathbf{1}$ is the colour-neutral meson.

**Baryon colour wavefunction:** $qqq \in \mathbf{3} \otimes \mathbf{3} \otimes \mathbf{3} = \mathbf{10} \oplus \mathbf{8} \oplus \mathbf{8} \oplus \mathbf{1}$.
The completely antisymmetric singlet is the colour-neutral baryon.

### 5.2 SU(2)$\times$U(1) Electroweak Theory

The electroweak interaction is governed by SU(2)$_L \times$ U(1)$_Y$:

- SU(2)$_L$: weak isospin, acts on left-handed doublets only.
- U(1)$_Y$: weak hypercharge, acts on all particles.

Left-handed fermions form SU(2) doublets:
$$L = \begin{pmatrix} \nu_e \\ e^- \end{pmatrix}_L, \quad Q = \begin{pmatrix} u \\ d \end{pmatrix}_L$$

Right-handed fermions are singlets under SU(2):
$$e_R, \quad u_R, \quad d_R$$

The electric charge is: $Q = T_3 + Y/2$.

After electroweak symmetry breaking, the $W^\pm$ and $Z^0$ bosons and the photon emerge as linear
combinations of the SU(2) and U(1) gauge fields:

$$W^\pm = \frac{1}{\sqrt{2}}(W^1 \mp iW^2)$$

$$\begin{pmatrix} Z^0 \\ A \end{pmatrix} = \begin{pmatrix} \cos\theta_W & \sin\theta_W \\ -\sin\theta_W & \cos\theta_W \end{pmatrix} \begin{pmatrix} W^3 \\ B \end{pmatrix}$$

### 5.3 Flavour Symmetries and the Eightfold Way

Before QCD, Gell-Mann and Ne'eman organised hadrons using approximate SU(3) flavour symmetry:

- **Meson octet:** $\pi^+, \pi^0, \pi^-, K^+, K^0, \bar{K}^0, K^-, \eta$.
- **Baryon octet:** $p, n, \Sigma^+, \Sigma^0, \Sigma^-, \Xi^0, \Xi^-, \Lambda$.
- **Baryon decuplet:** $\Delta^{++}, \Delta^+, \Delta^0, \Delta^-, \Sigma^*, \Xi^*, \Omega^-$.

The prediction of the $\Omega^-$ (with strangeness $S = -3$) by Gell-Mann in 1962 and its discovery
in 1964 was a triumph of the quark model.

## 6. Running Coupling Constants

### 6.1 Asymptotic Freedom and Confinement

The strong coupling $\alpha_s$ depends on the energy scale $\mu$:

$$\alpha_s(\mu) = \frac{\alpha_s(\mu_0)}{1 + \frac{\alpha_s(\mu_0)}{12\pi}(33 - 2n_f)\ln(\mu^2/\mu_0^2)}$$

where $n_f$ is the number of active quark flavours.

- **Asymptotic freedom:** For $n_f \lt 17$, $\alpha_s$ decreases at high energies. Quarks behave as
  nearly free particles at short distances.
- **Confinement:** At low energies, $\alpha_s$ becomes large, and perturbation theory breaks down.
  Quarks are confined into hadrons.

The electromagnetic coupling also runs (but increases at high energies):

$$\alpha(\mu) = \frac{\alpha(\mu_0)}{1 - \frac{\alpha(\mu_0)}{3\pi}\ln(\mu^2/\mu_0^2)}$$

### 6.2 Grand Unification

If the three gauge couplings are extrapolated to very high energies, they approximately meet at
$\mu \sim 10^{15}$ GeV (in the Minimal Supersymmetric Standard Model), suggesting unification into a
simple group such as SU(5) or SO(10).

## 7. Big Bang Cosmology

### 7.1 The Friedmann Equations

The dynamics of a homogeneous, isotropic universe are described by the **Friedmann-Lemaitre-Robertson-Walker
(FLRW) metric**:

$$ds^2 = -c^2 dt^2 + a(t)^2\left[\frac{dr^2}{1 - kr^2} + r^2(d\theta^2 + \sin^2\theta\,d\phi^2)\right]$$

where $a(t)$ is the scale factor and $k \in \{-1, 0, +1\}$ is the curvature parameter.

The **Friedmann equation** (from Einstein's equations with the FLRW metric):

$$H^2 = \left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3}$$

where $H = \dot{a}/a$ is the Hubble parameter and $\Lambda$ is the cosmological constant.

The **acceleration equation:**

$$\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3P}{c^2}\right) + \frac{\Lambda c^2}{3}$$

The **fluid equation** (from energy conservation):

$$\dot{\rho} + 3\frac{\dot{a}}{a}\left(\rho + \frac{P}{c^2}\right) = 0$$

### 7.2 Critical Density and Cosmological Parameters

The **critical density:** $\rho_c = \frac{3H_0^2}{8\pi G} \approx 9.2 \times 10^{-27}$ kg/m$^3$.

The **density parameters:** $\Omega_i = \rho_i/\rho_c$, with $\sum_i \Omega_i = 1$ for a flat universe.

Current best-fit values (Planck 2018):

- $\Omega_{\mathrm{matter}} \approx 0.315$ (matter: baryonic + dark)
- $\Omega_b \approx 0.049$ (baryonic matter)
- $\Omega_{\mathrm{DM}} \approx 0.266$ (dark matter)
- $\Omega_\Lambda \approx 0.685$ (dark energy)
- $\Omega_r \approx 9 \times 10^{-5}$ (radiation)
- $H_0 \approx 67.4$ km/s/Mpc

The universe is very close to flat ($\Omega_{\mathrm{total}} \approx 1.0007$).

### 7.3 Solutions for Different Components

For an equation of state $P = w\rho c^2$:

$$\rho \propto a^{-3(1+w)}$$

| Component | $w$ | $\rho(a)$ |
|---|---|---|
| Matter | $0$ | $a^{-3}$ |
| Radiation | $1/3$ | $a^{-4}$ |
| Dark energy (cosmological constant) | $-1$ | constant |

- **Matter-dominated era:** $a(t) \propto t^{2/3}$, $H \propto t^{-1}$.
- **Radiation-dominated era:** $a(t) \propto t^{1/2}$, $H \propto t^{-1}$.
- **Dark-energy-dominated era:** $a(t) \propto e^{Ht}$ (exponential expansion).

## 8. The Cosmic Microwave Background

### 8.1 Origin

At $T \sim 3000$ K ($z \sim 1100$, $t \sim 380{,}000$ years), the universe cooled enough for electrons
and protons to combine into neutral hydrogen (**recombination**). Before this, photons were
continuously scattered by free electrons (the universe was opaque). After recombination, photons
decoupled and travelled freely.

These photons have been redshifted by the expansion of the universe and are observed today as the
**Cosmic Microwave Background (CMB)** at $T_0 \approx 2.725$ K, with a peak wavelength
$\lambda_{\mathrm{peak}} \approx 1.9$ mm (microwave).

### 8.2 CMB Anisotropy

The CMB is nearly isotropic but has small temperature fluctuations:
$\Delta T / T \sim 10^{-5}$.

The **angular power spectrum** $C_l$ of these fluctuations encodes cosmological parameters:
- The first peak at $l \sim 200$ confirms the universe is spatially flat.
- The relative heights of peaks determine the baryon density $\Omega_b$.
- The damping tail constrains the matter density and Hubble constant.

### 8.3 CMB Polarisation

The CMB is also polarised at the level of $\sim 10^{-6}$. Two modes:

- **E-mode:** Gradient-type polarisation, produced by density fluctuations (scalar perturbations).
- **B-mode:** Curl-type polarisation, produced by gravitational waves (tensor perturbations).

Detection of primordial B-mode polarisation would provide evidence for inflation.

## 9. Big Bang Nucleosynthesis

### 9.1 Overview

In the first few minutes after the Big Bang, the universe was hot and dense enough for nuclear
reactions to occur. The main products were:

| Nucleus | Mass fraction |
|---|---|
| $^1$H | $\sim 75\%$ |
| $^4$He | $\sim 25\%$ |
| D, $^3$He | $\sim 10^{-5}$ |
| $^7$Li | $\sim 10^{-10}$ |

### 9.2 Key Reactions

The nuclear reaction chain starts at $T \sim 0.1$ MeV ($t \sim 1$ s):

$$p + n \to d + \gamma$$

$$d + p \to {^3\mathrm{He}} + \gamma, \quad d + d \to {^3\mathrm{He}} + n, \quad d + d \to t + p$$

$$t + d \to {^4\mathrm{He}} + \gamma, \quad {^3\mathrm{He}} + d \to {^4\mathrm{He}} + p$$

The process stops at $^4$He because there are no stable nuclei with $A = 5$.

### 9.3 The Neutron-to-Proton Ratio

At $T \gg 1$ MeV, weak interactions maintain $n/p$ in thermal equilibrium:

$$\frac{n}{p} = e^{-\Delta m c^2/(k_B T)}$$

where $\Delta m = m_n - m_p \approx 1.293$ MeV/$c^2$.

When $T \sim 0.8$ MeV ($t \sim 1$ s), the weak interaction rate falls below the expansion rate
($\Gamma_W \lt H$), and the $n/p$ ratio **freezes out** at $n/p \approx 1/6$. By the time
nucleosynthesis begins ($t \sim 200$ s), neutron decay has reduced this to $n/p \approx 1/7$.

The predicted helium mass fraction:

$$Y_p = \frac{2(n/p)}{1 + n/p} \approx 0.25$$

### 9.4 Observational Tests

BBN predictions agree with observations of primordial abundances. The deuterium abundance is
particularly sensitive to the baryon-to-photon ratio $\eta = n_b/n_\gamma$:

$$\eta \approx 6.1 \times 10^{-10}$$

This value is consistent with that derived from the CMB, providing strong support for the Big Bang
model.

## 10. Dark Matter

### 10.1 Evidence

1. **Galaxy rotation curves:** Stars orbit as if there is much more mass than is visible. The
   velocity does not decrease with distance from the galactic centre (as expected from Keplerian
   orbits), indicating a dark matter halo.

2. **Galaxy clusters:** The virial theorem gives masses much larger than the luminous mass (Zwicky,
   1933).

3. **Gravitational lensing:** The deflection of light by galaxy clusters indicates more mass than
   visible matter.

4. **CMB anisotropy:** The angular power spectrum requires $\Omega_{\mathrm{DM}} \approx 0.266$.

5. **Large-scale structure:** N-body simulations reproduce the observed cosmic web only with dark
   matter.

### 10.2 Properties

Dark matter:
- Does not emit, absorb, or scatter light (non-luminous).
- Is **cold** (non-relativistic at structure formation): CDM model.
- Accounts for $\sim 27\%$ of the total energy density.
- Interacts primarily via gravity (and possibly the weak force).

### 10.3 Candidates

- **WIMPs** (Weakly Interacting Massive Particles): $m \sim 10$ GeV--1 TeV. Predicted by
  supersymmetry. Searched for in direct detection experiments (XENON, LUX) and at the LHC. No
  confirmed detection.
- **Axions:** Light particles ($m \sim 10^{-5}$ eV/$c^2$) proposed to solve the strong CP problem.
- **Sterile neutrinos:** Right-handed neutrinos that do not participate in weak interactions.
- **Primordial black holes:** Black holes formed in the early universe.

## 11. Dark Energy

### 11.1 Evidence

In 1998, two teams (Riess et al., Perlmutter et al.) observed that Type Ia supernovae are fainter
than expected for a decelerating universe. This implies the expansion is **accelerating**:
$\ddot{a} \gt 0$.

From the acceleration equation, this requires $\rho + 3P/c^2 \lt 0$, which is satisfied by a
component with $w \lt -1/3$.

### 11.2 The Cosmological Constant

The simplest explanation is **Einstein's cosmological constant** $\Lambda$, with equation of state
$w = -1$:

$$\rho_\Lambda = \frac{\Lambda c^2}{8\pi G}, \quad P_\Lambda = -\rho_\Lambda c^2$$

**The cosmological constant problem:** Quantum field theory predicts a vacuum energy of order
$M_{\mathrm{Pl}}^4$ ($\sim 10^{120}$ times larger than the observed value). The origin of the tiny
observed value is one of the deepest unsolved problems in physics.

### 11.3 Alternative Models

- **Quintessence:** A dynamic scalar field with $-1 \lt w \lt -1/3$.
- **Modified gravity:** Modifications to general relativity on cosmological scales (e.g., $f(R)$
  gravity).

Current data are consistent with $w = -1$ (cosmological constant), but precision is limited.

## 12. Inflation

### 12.1 The Problems

The standard Big Bang model has several unresolved issues:

1. **Horizon problem:** The CMB is uniform across the sky, but regions separated by more than
   $\sim 1^\circ$ were causally disconnected at recombination.
2. **Flatness problem:** $\Omega$ must have been extraordinarily close to 1 in the early universe:
   $|\Omega - 1| \lt 10^{-60}$ at $t \sim 10^{-36}$ s.
3. **Monopole problem:** Grand unified theories predict abundant magnetic monopoles, none of which
   are observed.
4. **Origin of structure:** What seeded the density fluctuations that grew into galaxies?

### 12.2 The Inflationary Paradigm

**Inflation** (Guth, 1981) proposes a period of exponential expansion in the early universe:

$$a(t) \propto e^{Ht}, \quad H \approx \mathrm{const}$$

lasting from $t \sim 10^{-36}$ s to $t \sim 10^{-33}$ s, during which the universe expanded by a
factor of $\sim e^{60} \sim 10^{26}$.

**Resolutions:**

- **Horizon:** Inflation pushes all pre-existing causal contacts outside the observable horizon, making
  the CMB uniform.
- **Flatness:** Inflation drives $\Omega$ exponentially close to 1, regardless of its initial value.
- **Monopoles:** Inflation dilutes their density to negligible levels.
- **Structure:** Quantum fluctuations during inflation are stretched to macroscopic scales, providing
  the primordial perturbation spectrum (nearly scale-invariant, $n_s \approx 0.965$).

### 12.3 Slow-Roll Inflation

Inflation is driven by a scalar field $\phi$ (the **inflaton**) with potential $V(\phi)$:

$$\epsilon = \frac{M_{\mathrm{Pl}}^2}{2}\left(\frac{V'}{V}\right)^2 \ll 1, \quad \eta = M_{\mathrm{Pl}}^2 \frac{V''}{V} \ll 1$$

The number of e-folds: $N = \int_{t_i}^{t_f} H\,dt$.

The spectral index: $n_s = 1 - 6\epsilon + 2\eta \approx 0.965$ (Planck 2018), consistent with
slow-roll inflation.

The tensor-to-scalar ratio: $r = 16\epsilon$. Current upper bound: $r \lt 0.036$ (Planck + BICEP/Keck).

## 13. Timeline of the Universe

| Time | Temperature | Event |
|---|---|---|
| $0$ | $\infty$ | Big Bang |
| $10^{-43}$ s | $10^{19}$ GeV | Planck epoch (quantum gravity) |
| $10^{-36}$ s | $10^{16}$ GeV | Inflation, GUT symmetry breaking |
| $10^{-12}$ s | $10^2$ GeV | Electroweak symmetry breaking |
| $10^{-6}$ s | $\sim 200$ MeV | QCD phase transition |
| 1 s | $\sim 1$ MeV | Neutrino decoupling, $n/p$ freeze-out |
| 3 min | $\sim 0.1$ MeV | Big Bang nucleosynthesis |
| $380{,}000$ yr | 3000 K | Recombination, CMB released |
| $\sim 200$ Myr | $\sim 30$ K | First stars (reionisation) |
| $\sim 1$ Gyr | $\sim 10$ K | Galaxy formation |
| 9.2 Gyr | $\sim 5$ K | Solar system forms |
| 13.8 Gyr | 2.725 K | Present day |

## 14. Neutrino Physics

### 14.1 Neutrino Oscillations

Neutrinos are produced and detected in flavour eigenstates $(\nu_e, \nu_\mu, \nu_\tau)$, but propagate
as mass eigenstates $(\nu_1, \nu_2, \nu_3)$ related by the **PMNS mixing matrix** $U$:

$$|\nu_\alpha\rangle = \sum_i U_{\alpha i}^* |\nu_i\rangle$$

As a neutrino of flavour $\alpha$ propagates, the mass eigenstates acquire different phases:
$\exp(-im_i^2 L/(2E))$, leading to oscillations.

**Two-flavour oscillation probability:**

$$P(\nu_\alpha \to \nu_\beta) = \sin^2(2\theta)\sin^2\left(\frac{\Delta m^2 L}{4E}\right)$$

where $\Delta m^2 = m_2^2 - m_1^2$, $\theta$ is the mixing angle, $L$ is the distance, and $E$ is the
energy.

**Evidence:** The Solar Neutrino Problem (deficit of $\nu_e$ from the Sun, resolved by
$\nu_e \to \nu_\mu, \nu_\tau$ oscillations) and atmospheric neutrino oscillations (Super-Kamiokande,
1998).

### 14.2 Neutrino Masses

Neutrino oscillations imply that neutrinos have mass, but the masses are extremely small:
$\sum m_\nu \lt 0.12$ eV (Planck 2018).

In the Standard Model, neutrinos are massless. Their masses require physics beyond the Standard
Model, most commonly via the **seesaw mechanism**:

$$m_\nu \sim \frac{m_D^2}{M}$$

where $m_D$ is a Dirac mass and $M \gg m_D$ is the mass of a heavy right-handed neutrino.

## 15. Beyond the Standard Model

### 15.1 Supersymmetry (SUSY)

Supersymmetry relates fermions and bosons: every SM particle has a superpartner differing by
half a unit of spin.

- Squarks ($\tilde{q}$), sleptons ($\tilde{l}$): scalar partners of quarks and leptons.
- Gluinos ($\tilde{g}$): fermionic partners of gluons.
- Neutralinos, charginos: partners of the Higgs and gauge bosons.

**Motivations:**

1. Solves the hierarchy problem by cancelling quadratic divergences in the Higgs mass.
2. Provides a dark matter candidate (lightest supersymmetric particle, LSP).
3. Enables gauge coupling unification.
4. Arises naturally from string theory.

**Status:** No SUSY particles have been observed at the LHC (as of 2026). If SUSY exists, the
superpartners must be heavier than $\sim 2$ TeV, requiring either fine-tuning or an extended model
(e.g., split SUSY).

### 15.2 Grand Unified Theories (GUTs)

GUTs unify the SM gauge groups into a single simple group. The simplest is **SU(5)**:

$$\mathrm{SU(3)}_C \times \mathrm{SU(2)}_L \times \mathrm{U(1)}_Y \subset \mathrm{SU(5)}$$

**Predictions of minimal SU(5):**

- $\sin^2\theta_W = 3/8$ at the GUT scale (reasonable).
- Proton decay: $p \to e^+ + \pi^0$ with lifetime $\tau_p \sim 10^{30\pm 1}$ years. Current limit:
  $\tau_p \gt 1.6 \times 10^{34}$ years (Super-Kamiokande), ruling out minimal SU(5).
- Charge quantisation: $Q(\mathrm{proton}) + Q(\mathrm{electron}) = 0$.

### 15.3 String Theory

String theory replaces point particles with one-dimensional objects (strings). The different
vibrational modes of the string correspond to different particles.

**Key features:**

- Naturally includes gravity (the graviton arises as a closed string excitation).
- Requires extra spatial dimensions (10 for superstring theory, 11 for M-theory).
- The extra dimensions are compactified, leading to a vast "landscape" of possible vacua.

**Status:** No experimental evidence. The Planck length ($\sim 10^{-35}$ m) is far below current
experimental reach.

### 15.4 Quantum Gravity

The reconciliation of general relativity with quantum mechanics remains the central unsolved problem
in theoretical physics.

**Approaches:**

- **String theory:** As above.
- **Loop quantum gravity (LQG):** Quantises spacetime geometry directly. Predicts discrete area
  and volume spectra.
- **Causal set theory:** Spacetime is fundamentally discrete.
- **Asymptotic safety:** The renormalisation group flow of gravity has a non-trivial fixed point.

No approach has been experimentally verified or gained universal acceptance.

:::caution Common Pitfall
The Hubble constant $H_0$ measured from the CMB ($\sim 67.4$ km/s/Mpc, Planck) disagrees with
local distance-ladder measurements ($\sim 73.0$ km/s/Mpc, SH0ES). This "Hubble tension" is one of
the most significant open problems in cosmology. When using $H_0$ in calculations, be aware of
which measurement you are referencing and the systematic uncertainties involved.
:::
