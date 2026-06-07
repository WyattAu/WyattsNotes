---
title: Nonlinear Optics
tags:
  - Physics
  - University
---

### 18.1 Nonlinear Polarisation

When the electric field is strong (e.g., laser), the polarisation develops nonlinear terms:

$$P = \varepsilon_0(\chi^{(1)}E + \chi^{(2)}E^2 + \chi^{(3)}E^3 + \cdots)$$

The second-order susceptibility $\chi^{(2)}$ is nonzero only in non-centrosymmetric media. The
third-order $\chi^{(3)}$ exists in all media.

### 18.2 Second Harmonic Generation (SHG)

A beam of frequency $\omega$ generates light at $2\omega$. The intensity of the second harmonic:

$$I_{2\omega} = \frac{2\omega^2 d_{\text{eff}^2 I_\omega^2 L^2}{n_\omega^2 n_{2\omega} c^3 \varepsilon_0}\,\text{sinc}^2\!\left(\frac{\Delta k\,L}{2}\right)}$$

Where $d_{\text{eff} = \chi^{(2)}/2}$ is the effective nonlinear coefficient and
$\Delta k = k_{2\omega} - 2k_\omega$ is the phase mismatch.

**Phase matching:** Maximum conversion occurs when $\Delta k = 0$ (momentum conservation).
Techniques:

- **Birefringent phase matching:** Exploit the different refractive indices for ordinary and
  extraordinary polarisations.
- **Quasi-phase matching:** Periodically pole the nonlinear crystal to reverse the sign of
  $\chi^{(2)}$ every coherence length $\pi/\Delta k$.

### 18.3 Other Nonlinear Processes

| Process                    | Order        | Description                                              |
| -------------------------- | ------------ | -------------------------------------------------------- |
| SHG                        | $\chi^{(2)}$ | $\omega + \omega \to 2\omega$                            |
| SFG                        | $\chi^{(2)}$ | $\omega_1 + \omega_2 \to \omega_3$                       |
| Pockels effect             | $\chi^{(2)}$ | Linear electro-optic effect ($\Delta n \propto E$)       |
| Optical Kerr effect        | $\chi^{(3)}$ | $n = n_0 + n_2 I$ (intensity-dependent refractive index) |
| Self-focusing              | $\chi^{(3)}$ | Beam collapses when $P > P_{\text{cr}}$                  |
| Two-photon absorption      | $\chi^{(3)}$ | Simultaneous absorption of two photons                   |
| Stimulated Raman/Brillouin | $\chi^{(3)}$ | Inelastic scattering amplification                       |

**Self-phase modulation:** The Kerr effect causes $\Delta n = n_2 I$ which broadens the spectrum of
ultrashort pulses. Combined with dispersion, this leads to **soliton** formation in optical fibres
(a balance between Kerr self-focusing and anomalous dispersion).

<details>
<summary>Worked Example 18.1: Phase Matching in BBO Crystal</summary>

Beta-barium borate (BBO) is a common nonlinear crystal for SHG of 800 nm Ti:sapphire laser light.

The relevant refractive indices at $\lambda = 800$ nm ($\omega$) and $\lambda = 400$ nm ($2\omega$):

$n_o(800\,\text{nm}) = 1.6549$, $n_e(800\,\text{nm}) = 1.5425$ (at $\theta = 29.2°$)

$n_o(400\,\text{nm}) = 1.7030$, $n_e(400\,\text{nm}) = 1.5665$ (at $\theta = 29.2°$)

For Type I phase matching ($o + o \to e$): $n_e(2\omega, \theta) = n_o(\omega)$.

Using Sellmeier equations, the phase matching angle is found to be
$\theta_{\text{PM} \approx 29.2°}$.

The coherence length without phase matching:

$$\ell_c = \frac{\pi}{\Delta k} = \frac{\lambda}{4(n_e^{2\omega} - n_o^{\omega})}$$

For typical values: $\ell_c \sim 5$ $\mu$M. A 1 mm crystal is $\sim 200$ coherence lengths long, so
phase matching is essential.

The conversion efficiency for perfect phase matching with a 10 mm crystal at $I_\omega = 100$
MW/cm$^2$:

$$\eta \approx \frac{8\pi^2 \times (2.0 \times 10^{-12})^2 \times 10^{-4} \times 10^{10}}{(1.6)^3 \times (400 \times 10^{-9})^2 \times 3 \times 10^8 \times 8.85 \times 10^{-12}} \approx 15\%$$

</details>

