---
title: Dispersion
tags:
  - Physics
  - University
---

### 11.1 Normal and Anomalous Dispersion

The refractive index varies with frequency:

$$n(\omega) = 1 + \frac{Ne^2}{2m_e\varepsilon_0} \sum_j \frac{f_j}{\omega_{0j}^2 - \omega^2 - i\gamma_j\omega}$$

Where $N$ is the electron density, $f_j$ are oscillator strengths, $\omega_{0j}$ are resonance
Frequencies, and $\gamma_j$ are damping constants.

- **Normal dispersion** ($dn/d\lambda \lt 0$): away from resonances, $n$ decreases with increasing
  $\lambda$.
- **Anomalous dispersion** ($dn/d\lambda \gt 0$): near resonances, $n$ increases with $\lambda$.

### 11.2 Group and Phase Velocity

- **Phase velocity:** $v_p = \omega/k = c/n$.
- **Group velocity:** $v_g = d\omega/dk = c/(n + \omega\, dn/d\omega)$.

For normal dispersion, $v_g \lt v_p$. In regions of anomalous dispersion, $v_g$ can exceed $c$ or
Even become negative, but this does not violate causality (signal velocity remains $\leq c$).

### 11.3 Dispersion Relation in a Medium

Starting from the Lorentz oscillator model for a single resonance:

$$n^2(\omega) = 1 + \frac{Ne^2}{m_e\varepsilon_0}\frac{1}{\omega_0^2 - \omega^2 - i\gamma\omega}$$

The real part $n(\omega) = \mathrm{Re}\sqrt{\epsilon(\omega)}$ gives the refractive index. The
Imaginary part gives absorption:

$$\alpha_{\mathrm{abs} = \frac{2\omega}{c}\,\mathrm{Im}\, n(\omega)}$$

**Worked example.** For X-rays ($\omega \gg \omega_0$):

$$n \approx 1 - \frac{Ne^2}{2m_e\varepsilon_0\omega^2} = 1 - \frac{\omega_p^2}{2\omega^2}$$

Where $\omega_p = \sqrt{Ne^2/(m_e\varepsilon_0)}$ is the plasma frequency. Since $n \lt 1$X-rays
Undergo total external reflection at grazing incidence.

### 11.4 Chromatic Aberration

Since $n$ depends on $\lambda$A lens has different focal lengths for different wavelengths. The
Longitudinal chromatic aberration is:

$$\Delta f = f(\lambda_1) - f(\lambda_2)$$

**Achromatic doublet.** Two lenses of different materials (e.g., crown and flint glass) with
Different dispersive powers are combined to cancel chromatic aberration at two wavelengths. The
Condition is:

$$\frac{\omega_1}{f_1} + \frac{\omega_2}{f_2} = 0$$

Where $\omega_i = (n_{i,F} - n_{i,C})/(n_{i,d} - 1)$ is the Abbe number for glass $i$.

