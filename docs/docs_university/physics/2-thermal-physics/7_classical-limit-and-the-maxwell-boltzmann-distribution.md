---
title: Classical Limit and the Maxwell-Boltzmann Distribution
tags:
  - Physics
  - University
---

### 7.1 Derivation from Quantum Statistics

In the classical (dilute) limit, both Fermi-Dirac and Bose-Einstein distributions reduce to the
Maxwell-Boltzmann distribution. The condition for the classical limit is

$$e^{\beta(\varepsilon - \mu)} \gg 1$$

For all relevant energies. This is equivalent to $n\lambda_{\mathrm{th}^3 \ll 1}$ (the thermal de
Broglie wavelength is much smaller than the inter-particle spacing).

**Theorem 7.1.** In the classical limit:

$$f_{\mathrm{FD}(\varepsilon) \approx f_{\mathrm{BE}(\varepsilon) \approx f_{\mathrm{MB}(\varepsilon) = e^{-\beta(\varepsilon - \mu)}}}}$$

_Proof._ When $e^{\beta(\varepsilon - \mu)} \gg 1$The $+1$ or $-1$ in the denominator is negligible:

$$\frac{1}{e^{\beta(\varepsilon - \mu)} \pm 1} \approx \frac{1}{e^{\beta(\varepsilon - \mu)}} = e^{-\beta(\varepsilon - \mu)}$$

$\blacksquare$

### 7.2 Maxwell-Boltzmann Speed Distribution

For a classical ideal gas, the probability distribution of molecular speeds is

$$f(v)\,dv = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 e^{-mv^2/(2k_BT)}\,dv$$

**Characteristic speeds:**

- Most probable: $v_p = \sqrt{2k_BT/m}$
- Mean: $\langle v \rangle = \sqrt{8k_BT/(\pi m)}$
- RMS: $v_{\mathrm{rms} = \sqrt{3k_BT/m}}$

The ordering is $v_p < \langle v \rangle < v_{\mathrm{rms}}$.

### 7.3 Worked Example: Effusion

**Problem.** A gas of molecular mass $m$ at temperature $T$ effuses through a small hole. Find the
distribution of speeds of the effusing molecules and the mean kinetic energy per effusing molecule.

<details>
<summary>Solution</summary>

The effusion rate for molecules with speed between $v$ and $v + dv$ is proportional to
$v \cdot f(v)\,dv$ (faster molecules hit the hole more frequently). The effusion distribution is:

$$f_{\mathrm{eff}(v)\,dv \propto v \cdot v^2 e^{-mv^2/(2k_BT)}\,dv = v^3 e^{-mv^2/(2k_BT)}\,dv}$$

Normalising:

$$f_{\mathrm{eff}(v) = \frac{1}{2(k_BT/m)^2}\,v^3\,e^{-mv^2/(2k_BT)}}$$

The mean kinetic energy:

$$\langle \varepsilon \rangle_{\mathrm{eff} = \frac{1}{2}m\langle v^2 \rangle_{\mathrm{eff} = \frac{1}{2}m \cdot \frac{\int_0^\infty v^5 e^{-mv^2/(2k_BT)}\,dv}{\int_0^\infty v^3 e^{-mv^2/(2k_BT)}\,dv}}}$$

Using $\int_0^\infty v^n e^{-av^2}\,dv = \frac{1}{2a^{(n+1)/2}}\Gamma\!\left(\frac{n+1}{2}\right)$:

$$\langle v^2 \rangle_{\mathrm{eff} = \frac{\Gamma(3)/(2a^3)}{\Gamma(2)/(2a^2)} = \frac{2}{a} = \frac{4k_BT}{m}}$$

$$\langle \varepsilon \rangle_{\mathrm{eff} = 2k_BT}$$

This is $4/3$ times the bulk average $\frac{3}{2}k_BT$ --- effusing molecules are "hotter" because
faster molecules escape preferentially. $\blacksquare$

</details>

---

