---
title: Advanced Topics in Particle Physics
tags:
  - Physics
  - University
---

### 11.1 Deep Inelastic Scattering and Parton Model

**Deep inelastic scattering (DIS)** experiments (SLAC, 1968) scattered high-energy electrons off
protons. The key observation: at large momentum transfer $Q^2$The proton behaves as if composed of
nearly free point-like constituents --- the **partons** (identified with quarks and gluons by
Feynman and Bjorken).

**Structure functions.** The inclusive cross section for $ep \to eX$ is parameterised by structure
functions $F_1(x, Q^2)$ and $F_2(x, Q^2)$Where $x = Q^2/(2p \cdot q)$ is the **Bjorken scaling
variable**.

The **Callan--Gross relation** (for spin-1/2 partons):

$$F_2(x) = 2xF_1(x)$$

This relation was experimentally verified, confirming that the partons are fermions (quarks).

**Bjorken scaling:** At large $Q^2$The structure functions depend only on $x$Not on $Q^2$
separately. This is a consequence of the parton model (impulse approximation). In reality, QCD
predicts logarithmic scaling violations from gluon radiation and quark-antiquark pair production.

**PDFs.** The **parton distribution functions** $f_i(x, Q^2)$ give the probability of finding parton
$i$ with momentum fraction $x$ at resolution scale $Q^2$. The structure function is:

$$F_2(x, Q^2) = \sum_i e_i^2\, x\, f_i(x, Q^2)$$

Where $e_i$ is the electric charge of parton $i$.

The PDFs evolve with $Q^2$ according to the **DGLAP equations**:

$$\frac{\partial f_i(x, Q^2)}{\partial \ln Q^2} = \frac{\alpha_s(Q^2)}{2\pi}\sum_j \int_x^1 \frac{dz}{z}\, P_{ij}(z)\, f_j\!\left(\frac{x}{z}, Q^2\right)$$

Where $P_{ij}(z)$ are the splitting functions: $P_{qq}$ (quark emitting a gluon), $P_{qg}$ (gluon
splitting into $q\bar{q}$), $P_{gq}$ (quark emitting a gluon), $P_{gg}$ (gluon splitting into two
gluons).

<details>
<summary>Worked Example 11.1: Momentum Fraction Carried by Gluons</summary>

At $Q^2 \sim 10$ GeV$^2$The momentum sum rule requires:

$$\int_0^1 x\left[\sum_q f_q(x) + f_g(x)\right] dx = 1$$

Experimental measurements give:

$$\int_0^1 x \sum_q f_q(x)\, dx \approx 0.50$$

$$\int_0^1 x f_g(x)\, dx \approx 0.45$$

The remaining $\sim 5\%$ is carried by sea quarks ($q\bar{q}$ pairs). This means gluons carry
roughly half the proton's momentum, despite being electrically neutral and invisible in
electromagnetic DIS.

At higher $Q^2$The gluon momentum fraction increases further (gluon radiation shifts momentum from
quarks to gluons).

</details>

### 11.2 The Quark-Gluon Plasma

At temperatures above $T_c \approx 170$ MeV ($\sim 2 \times 10^{12}$ K), hadrons "melt" into a
**quark-gluon plasma (QGP)** --- a deconfined state of quarks and gluons.

**Phase diagram of QCD:**

| Axis       | Variable                          |
| ---------- | --------------------------------- |
| Horizontal | Baryon chemical potential $\mu_B$ |
| Vertical   | Temperature $T$                   |

- Low $T$Low $\mu_B$: Hadronic phase (confined)
- High $T$Low $\mu_B$: QGP (deconfined, crossover transition)
- High $\mu_B$Low $T$: Colour superconductor (predicted)
- Very high $\mu_B$: Colour-flavour locked phase (predicted)

**Experimental evidence.** The QGP is produced in heavy-ion collisions at RHIC and the LHC. Key
signatures:

1. **Jet quenching:** High-$p_T$ partons lose energy traversing the QGP, reducing the jet yield
   (observed at RHIC and LHC).
2. **Elliptic flow:** The azimuthal anisotropy of particle emission ($v_2$) indicates strong
   collective behaviour, consistent with a nearly ideal fluid ($\eta/s \approx 0.12$Close to the KSS
   bound $1/(4\pi)$).
3. **J/$\psi$ suppression:** In a deconfined medium, the $c\bar{c}$ potential is screened (Debye
   screening), suppressing quarkonium production.
4. **Strangeness enhancement:** Increased production of strange hadrons ($s\bar{s}$ pairs) relative
   to $pp$ collisions.

The QGP at LHC reaches temperatures of $T \sim 300$--$600$ MeV ($\sim 5$ $\times$ the transition
temperature) and behaves as the most perfect fluid known.

### 11.3 Anomalies and the Axion

**Chiral anomaly.** In the Standard Model, the classically conserved axial current
$J_5^\mu = \bar{\psi}\gamma^\mu\gamma^5\psi$ is not conserved at the quantum level:

$$\partial_\mu J_5^\mu = \frac{g^2}{16\pi^2}F_{\mu\nu}\tilde{F}^{\mu\nu}$$

Where $\tilde{F}^{\mu\nu} = \frac{1}{2}\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$ is the dual field
strength tensor.

**Consequences:**

- The $\pi^0 \to \gamma\gamma$ decay rate is accurately predicted by the anomaly
- The anomaly cancels between quark generations in the SM (gauge anomaly cancellation, a constraint
  on fermion representations)

**Strong CP problem.** QCD allows a term
$\mathcal{L}_\theta = \theta\frac{g_s^2}{32\pi^2}F_{\mu\nu}^a\tilde{F}^{a\mu\nu}$ in the Lagrangian.
This gives the neutron an electric dipole moment $d_n \propto \theta$But experiments find
$d_n < 1.8 \times 10^{-26}\,e\cdot\text{cm}$Implying $|\theta| < 10^{-10}$. Why is $\theta$ so
small?

**Axion solution.** The Peccei--Quinn mechanism (1977) promotes $\theta$ to a dynamical field ---
the **axion** $a(x)$. The axion potential has a minimum at $\theta_{\text{eff} = 0}$Dynamically
solving the strong CP problem. The axion acquires a small mass:

$$m_a \approx \frac{m_\pi f_\pi}{f_a} \approx 6\ \text{meV}\times\left(\frac{10^{12}\ \text{GeV}{f_a}\right)}$$

Where $f_a$ is the axion decay constant. Axions in the "window" $10^9$--$10^{12}$ GeV are viable
cold dark matter candidates and are searched for by ADMX, CASPEr, and other experiments.

### 11.4 CP Violation in Detail

**CP violation in the SM** arises from a single irreducible complex phase in the CKM matrix. The
**unitarity triangle** provides a convenient parameterisation:

$$V_{ud}V_{ub}^* + V_{cd}V_{cb}^* + V_{td}V_{tb}^* = 0$$

This can be rescaled to form a triangle in the complex plane with sides and angles
$(\alpha, \beta, \gamma)$.

**Experimental status:** All three angles have been measured:

- $\sin 2\beta = 0.691 \pm 0.017$ (B factories, $B^0 \to J/\psi\, K_S$)
- $\alpha = (84.7^{+2.6}_{-2.9})^\circ$ (LHCb, $B \to \pi\pi$, $\rho\rho$)
- $\gamma = (65.4 \pm 3.4)^\circ$ (LHCb, $B \to DK$ tree-level)

The triangle closes, confirming the CKM mechanism as the source of CP violation in quark decays.
However, the amount of CP violation in the CKM matrix is far too small to explain the
matter-antimatter asymmetry of the universe (Sakharov conditions require additional CP-violating
sources, e.g., in the neutrino sector or from BSM physics).

<details>
<summary>Worked Example 11.2: B Mixing and $B^0$--$\bar{B}^0$ Oscillations</summary>

$B^0_d$ mesons ($b\bar{d}$) oscillate into $\bar{B}^0_d$ ($\bar{b}d$) via box diagrams with internal
$u$, $c$, $t$ quarks. The oscillation frequency is characterised by $\Delta m_d$.

The mass difference:

$$\Delta m_d = \frac{G_F^2 m_W^2}{6\pi^2} m_B f_B^2 \hat{B}_B \, \eta_B\, S(x_t)\, |V_{td}|^2$$

Where $S(x_t)$ is the Inami--Lim function, $f_B$ is the $B$ decay constant, and $\hat{B}_B$ is the
bag parameter.

Numerically, $\Delta m_d \approx 0.507$ ps$^{-1}$Corresponding to an oscillation period of
$\Delta t = \pi/\Delta m_d \approx 6.2$ ps. At the LHCb experiment, $B$ mesons travel $\sim 1$ cm
before decaying, during which they undergo several oscillation cycles, allowing precise measurement
of mixing parameters.

For $B^0_s$ mesons ($b\bar{s}$), the oscillation is much faster: $\Delta m_s \approx 17.8$
ps$^{-1}$Because $|V_{ts}| > |V_{td}|$.

</details>

