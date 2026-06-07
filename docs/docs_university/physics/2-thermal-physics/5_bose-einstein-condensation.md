---
title: Bose-Einstein Condensation
tags:
  - Physics
  - University
---

### 5.1 Ideal Bose Gas

For bosons, the average occupation of a single-particle state of energy $\varepsilon$ is

$$\langle n_\varepsilon \rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} - 1}$$

The chemical potential must satisfy $\mu \leq \varepsilon_0$ (the lowest single-particle energy) to
prevent negative occupation numbers.

### 5.2 Density of States and Critical Temperature

For a 3D free Bose gas with $\varepsilon = \hbar^2 k^2 / (2m)$The density of states is
$g(\varepsilon) = (V/4\pi^2)(2m/\hbar^2)^{3/2}\sqrt{\varepsilon}$. The number of particles in
excited states ($\varepsilon > 0$) is

$$N_{\mathrm{ex} = \int_0^\infty \frac{g(\varepsilon)\, d\varepsilon}{e^{\beta \varepsilon} - 1} = V\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}\,\zeta\!\left(\frac{3}{2}\right)}$$

Where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function.

**Theorem 5.1 (BEC critical temperature).** The maximum number of particles that can be accommodated
in excited states is achieved at $\mu = 0$. When $N$ exceeds this maximum, the excess condenses into
the ground state. The critical temperature is

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

Where $n = N/V$.

_Proof._ Setting $N = N_{\mathrm{ex}^{\max}}$ at $\mu = 0$ and solving for $T$:

$$n = \left(\frac{mk_B T_c}{2\pi\hbar^2}\right)^{3/2}\,\zeta\!\left(\frac{3}{2}\right)$$

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3} \qquad \blacksquare$$

### 5.3 Condensate Fraction

Below $T_c$, $\mu \approx 0$ and the condensate fraction is

$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

This follows from $N_0 = N - N_{\mathrm{ex}}$ with $\mu = 0$:

$$N_{\mathrm{ex} = N\left(\frac{T}{T_c}\right)^{3/2}}$$

### 5.4 Thermodynamic Properties below $T_c$

The energy below $T_c$:

$$U = \int_0^\infty \frac{\varepsilon\, g(\varepsilon)\, d\varepsilon}{e^{\beta\varepsilon} - 1} = V\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}\,(k_BT)\,\frac{3}{2}\,\zeta\!\left(\frac{5}{2}\right) \cdot \Gamma\!\left(\frac{5}{2}\right)$$

$$= \frac{3}{2}\,Nk_BT_c\,\zeta\!\left(\frac{5}{2}\right)\Big/\zeta\!\left(\frac{3}{2}\right)\,\left(\frac{T}{T_c}\right)^{5/2}$$

The heat capacity:

$$C_V = \frac{15}{4}\,Nk_B\,\zeta\!\left(\frac{5}{2}\right)\Big/\zeta\!\left(\frac{3}{2}\right)\,\left(\frac{T}{T_c}\right)^{3/2} \propto T^{3/2}$$

This contrasts with the constant $C_V = \frac{3}{2}Nk_B$ above $T_c$ (equipartition). There is a
cusp (discontinuity in the derivative) at $T_c$Characteristic of a phase transition.

### 5.5 Worked Example: BEC in Rubidium-87

**Problem.** Estimate $T_c$ for a gas of $N = 10^4$ rubidium-87 atoms confined in a harmonic trap
with frequency $\omega_{\mathrm{ho} = 2\pi \times 100}$ Hz.

<details>
<summary>Solution</summary>

For a harmonic trap, the effective density of states is
$g(\varepsilon) = \varepsilon^2/(2\hbar^3\omega_{\mathrm{ho}^3)}$. The critical temperature in a
harmonic trap is:

$$k_BT_c = \hbar\omega_{\mathrm{ho}\left(\frac{N}{\zeta(3)}\right)^{1/3}}$$

$$k_BT_c = (1.055 \times 10^{-34})(2\pi \times 100)\left(\frac{10^4}{1.202}\right)^{1/3}$$

$$= (6.63 \times 10^{-32})(20.1) = 1.33 \times 10^{-30}\,\mathrm{J}$$

$$T_c = \frac{1.33 \times 10^{-30}}{1.381 \times 10^{-23}} \approx 9.6 \times 10^{-8}\,\mathrm{K} \approx 96\,\mathrm{nK}$$

This is consistent with the 1995 BEC experiments by Cornell and Wieman (JILA) and Ketterle (MIT),
who achieved BEC at temperatures of a few hundred nanokelvin. $\blacksquare$

</details>

---

