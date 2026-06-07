---
title: Precision Tests of the Standard Model
tags:
  - Physics
  - University
---

### 13.1 The $g$-2 Anomaly

The anomalous magnetic moment of the electron and muon:

$$a_e = \frac{g_e - 2}{2}, \quad a_\mu = \frac{g_\mu - 2}{2}$$

The Dirac equation predicts $g = 2$ exactly, but QED radiative corrections give:

$$a_e^{\text{QED} = \frac{\alpha}{2\pi} - 0.328\,478\,966\left(\frac{\alpha}{\pi}\right)^2 + 1.181\,241\,456\left(\frac{\alpha}{\pi}\right)^3 - 1.9144(35)\left(\frac{\alpha}{\pi}\right)^4}$$

The experimental value agrees with theory to 12 significant figures, making $a_e$ the most precisely
verified prediction in all of physics.

**The muon $g$-2:** The muon is $\sim 207$ times heavier than the electron, so it is more sensitive
to virtual particles beyond the Standard Model (supersymmetry, dark photons, etc.).

$$a_\mu^{\text{exp} - a_\mu^{\text{SM} = (251 \pm 59) \times 10^{-11}}}$$

This $\sim 4.2\sigma$ discrepancy (as of 2023) is one of the strongest hints of physics beyond the
SM.

### 13.2 Electroweak Precision Observables

The **$Z$-pole observables** measured at LEP and SLC test the SM at the per-mil level:

- $m_Z = 91.1876 \pm 0.0021$ GeV
- $\Gamma_Z = 2.4952 \pm 0.0023$ GeV (total $Z$ width)
- $\sin^2\theta_{\text{eff}^{\text{lept} = 0.23155 \pm 0.00016}}$ (effective weak mixing angle)
- $R_\ell = \Gamma_{\text{had}/\Gamma_{\ell\ell} = 20.767 \pm 0.025}$ (hadronic to leptonic width
  ratio)
- $A_{FB}^{0,\ell} = 0.0171 \pm 0.0010$ (forward-backward asymmetry)

The $S$, $T$, $U$ parameterisation (Peskin, Takeuchi) provides a model-independent framework for
comparing these measurements:

$$\alpha_{\text{em}(m_Z) = \frac{\sqrt{2}G_F m_W^2(1 - m_W^2/m_Z^2)}{\pi\alpha} \times \frac{1}{1 - \Delta r}}$$

Where $\Delta r$ is the radiative correction depending on $S$, $T$, $U$. Current data give
$S = 0.05 \pm 0.11$ and $T = 0.09 \pm 0.13$Consistent with the SM ($S = T = 0$) but leaving room for
new physics.

### 13.3 Rare Decays and Flavour Physics

**$B$-physics anomalies.** The LHCb experiment has observed several tensions in $B$-meson decays:

- **$R_{K^{(*)}}$:** The ratio $R_K = \text{BR}(B^+ \to K^+\mu^+\mu^-)/\text{BR}(B^+ \to K^+e^+e^-)$
  is predicted to be 1 in the SM (lepton universality). Measurements show
  $R_K = 0.846^{+0.044}_{-0.041}$ ($3.1\sigma$ deviation).

- **$b \to s\ell^+\ell^-$ angular observables:** The observable $P_5'$ shows a persistent deviation
  from SM predictions.

These anomalies could indicate lepton-flavour-universal new physics (e.g., a $Z'$ boson coupling
preferentially to muons).

**Kaon physics:** The extremely rare decay $K_L \to \mu^+\mu^-$ has been observed with BR
$\sim 3 \times 10^{-11}$ (SM prediction), constraining new physics at the TeV scale through the
process $s \to d\ell^+\ell^-$.

### 13.4 Neutrinoless Double Beta Decay

The decay $0\nu\beta\beta$: $(A, Z) \to (A, Z+2) + 2e^-$ violates lepton number by two units. If
observed, it would prove that neutrinos are Majorana particles (identical to their antiparticles).

The half-life:

$$(T_{1/2}^{0\nu})^{-1} = G_{0\nu}|M_{0\nu}|^2\frac{\langle m_{\beta\beta}\rangle^2}{m_e^2}$$

Where $G_{0\nu}$ is the phase space factor, $M_{0\nu}$ is the nuclear matrix element, and
$\langle m_{\beta\beta}\rangle$ is the effective Majorana mass.

Current best limit: $T_{1/2}^{0\nu} > 1.8 \times 10^{26}$ yr ($^{76}$Ge, GERDA), corresponding to
$\langle m_{\beta\beta}\rangle < 0.07$--$0.16$ eV.

<details>
<summary>Worked Example 13.1: QED Correction to Electron $g$-Factor</summary>

The leading QED correction to $a_e$:

$$a_e^{(1)} = \frac{\alpha}{2\pi} = \frac{1/137.036}{2\pi} = 0.001161 \times 10^{-3}$$

The full QED + hadronic + weak correction:

$$a_e^{\text{total} = 1\,159\,652\,180.73(0.28) \times 10^{-12}}$$

Experimental (Gabrielse group, Harvard, 2023):

$$a_e^{\text{exp} = 1\,159\,652\,180.59(0.22) \times 10^{-12}}$$

The agreement is at the level of $0.2 \times 10^{-12}$ out of $1160 \times 10^{-9}$I.e., relative
precision of $1.7 \times 10^{-13}$. This is the most precise test of any prediction in physics.

The comparison also determines $\alpha$ to higher precision than any direct measurement:

$$\alpha^{-1} = 137.035\,999\,166(15)$$

</details>

## Worked Examples

### Example 1: Conservation laws

**Problem.** Is the decay $\Lambda^0 \to p + \pi^-$ possible? Check all conservation laws.

**Solution.** Charge: $0 = +1 + (-1)$ ✓. Baryon number: $1 = 1 + 0$ ✓. Lepton number: $0 = 0 + 0$ ✓.
Strangeness: $-1 \neq 0 + 0$ ✗ (violated, but strangeness is not conserved in weak decays). The
decay is possible via the weak interaction.

$\blacksquare$

### Example 2: Hubble's law

**Problem.** A galaxy has redshift $z = 0.05$. If $H_0 = 70 \mathrm{ km/s/Mpc}$, estimate its
distance.

**Solution.** $v \approx cz = 0.05 \times 3 \times 10^5 = 1.5 \times 10^4 \mathrm{ km/s}$.
$d = v/H_0 = 15000/70 = 214 \mathrm{ Mpc}$.

$\blacksquare$

## Common Pitfalls

- **Confusing Feynman diagrams with physical trajectories.** Feynman diagrams are calculational
  tools, not pictures of particle paths. **Fix:** Each diagram represents a term in the perturbation
  series; internal lines are virtual particles.
- **Wrong conservation law application.** In particle reactions, conserve energy, momentum, charge,
  lepton number, baryon number, and strangeness (for strong interactions). **Fix:** Weak
  interactions can change strangeness; strong and EM interactions conserve it.
- **Confusing redshift types.** Cosmological redshift: due to expansion of space. Doppler redshift:
  due to relative motion. **Fix:** For distant galaxies, cosmological redshift dominates;
  $z \approx H_0 d/c$ for small $z$.

## Summary

- Standard Model: quarks, leptons, gauge bosons, Higgs boson; four fundamental forces.
- Conservation laws: energy, momentum, charge, baryon number, lepton number, strangeness (strong/EM
  only).
- Hubble's law: $v = H_0 d$; evidence for the expanding universe.
- Big Bang: CMB radiation, nucleosynthesis, dark matter and dark energy.

## Cross-References

| Topic              | Site       | Link                                                                                                                  |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| [Particle Physics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/nuclear-physics/04-particle-physics)              |
| [Particle Physics] | University | [View](https://university.wyattau.com/docs/physics/7-particle-physics-and-cosmology/1_particle-physics-and-cosmology) |

