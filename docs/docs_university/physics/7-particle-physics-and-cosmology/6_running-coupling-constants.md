---
title: Running Coupling Constants
tags:
  - Physics
  - University
---

### 6.1 Asymptotic Freedom and Confinement

The strong coupling $\alpha_s$ depends on the energy scale $\mu$:

$$\alpha_s(\mu) = \frac{\alpha_s(\mu_0)}{1 + \frac{\alpha_s(\mu_0)}{12\pi}(33 - 2n_f)\ln(\mu^2/\mu_0^2)}$$

Where $n_f$ is the number of active quark flavours.

- **Asymptotic freedom:** For $n_f \lt 17$, $\alpha_s$ decreases at high energies. Quarks behave as
  nearly free particles at short distances.
- **Confinement:** At low energies, $\alpha_s$ becomes large, and perturbation theory breaks down.
  Quarks are confined into hadrons.

The electromagnetic coupling also runs (but increases at high energies):

$$\alpha(\mu) = \frac{\alpha(\mu_0)}{1 - \frac{\alpha(\mu_0)}{3\pi}\ln(\mu^2/\mu_0^2)}$$

### 6.2 Beta Functions

The running of coupling constants is governed by the **beta function**:

$$\beta(g) \equiv \mu\frac{dg}{d\mu}$$

At one-loop order:

**QED:**

$$\beta_{\mathrm{QED}(e) = \frac{e^3}{12\pi^2} \quad \Rightarrow \quad \beta_{\mathrm{QED}(\alpha) = \frac{2\alpha^2}{3\pi} \gt 0}}$$

The positive beta function means the electromagnetic coupling **increases** with energy
(antiscreening).

**QCD:**

$$\beta_{\mathrm{QCD}(g_s) = -\frac{g_s^3}{16\pi^2}\left(\frac{11}{3}C_A - \frac{4}{3}T_F n_f\right)}$$

For SU(3), $C_A = N = 3$ and $T_F = 1/2$:

$$\beta_{\mathrm{QCD}(g_s) = -\frac{g_s^3}{16\pi^2}\left(11 - \frac{2n_f}{3}\right)}$$

The negative sign (for $n_f \lt 33/2$) means the strong coupling **decreases** with energy: This is
**asymptotic freedom** (Gross, Wilczek, and Politzer, Nobel Prize 2004).

**Interpretation.** The gluon self-interaction (the $C_A$ term) dominates over fermion screening
(the $n_f$ term) for the physically relevant number of flavours. Gluons carry colour charge and
Therefore antiscreen, leading to the coupling decreasing at short distances.

### 6.3 Grand Unification and the Unification Scale

If the three gauge couplings are extrapolated to very high energies, they approximately meet at
$\mu \sim 10^{15}$ GeV (in the Minimal Supersymmetric Standard Model), suggesting unification into a
Simple group such as SU(5) or SO(10).

<details>
<summary>Example 6.1: Estimating the unification scale</summary>

At one loop, the coupling at scale $\mu$ is:

$$\alpha_i^{-1}(\mu) = \alpha_i^{-1}(\mu_0) - \frac{b_i}{2\pi}\ln\left(\frac{\mu}{\mu_0}\right)$$

Where $b_i$ are the one-loop beta function coefficients and $\mu_0 = m_Z \approx 91.2$ GeV.

For the SM, the coefficients are:

- $b_1 = -41/(10\pi)$ for $\mathrm{U}(1)_Y$ (properly normalised)
- $b_2 = -19/(6\pi)$ for $\mathrm{SU}(2)_L$
- $b_3 = -7/\pi$ for $\mathrm{SU}(3)_C$

At the unification scale $M_{\mathrm{GUT}}$All three couplings are equal:
$\alpha_1^{-1}(M_{\mathrm{GUT}) = \alpha_2^{-1}(M_{\mathrm{GUT}) = \alpha_3^{-1}(M_{\mathrm{GUT})}}}$.

Setting $\alpha_1^{-1} = \alpha_2^{-1}$:

$$\alpha_1^{-1}(m_Z) - \alpha_2^{-1}(m_Z) = \frac{b_2 - b_1}{2\pi}\ln\left(\frac{M_{\mathrm{GUT}}{m_Z}\right)}$$

With $\alpha_1^{-1}(m_Z) \approx 59.0$, $\alpha_2^{-1}(m_Z) \approx 29.6$:

$$59.0 - 29.6 = \frac{b_2 - b_1}{2\pi}\ln\left(\frac{M_{\mathrm{GUT}}{m_Z}\right)}$$

This gives $M_{\mathrm{GUT} \sim 10^{13}}$--$10^{16}$ GeV depending on the precise Coefficients and
the inclusion of threshold corrections. In the MSSM, the modified beta Coefficients give a much
cleaner unification at $M_{\mathrm{GUT} \sim 2 \times 10^{16}}$ GeV.

</details>

:::caution Common Pitfall The Standard Model couplings do **not** meet at a single point when
extrapolated using SM beta Functions. The three lines form a rough triangle. It is only in
supersymmetric extensions (MSSM) That the additional superpartner contributions to the beta
functions bring the three couplings to Near-convergence. This convergence is often cited as indirect
evidence for supersymmetry.
:::

