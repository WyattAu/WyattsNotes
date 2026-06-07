---
title: Fermi Gas at Finite Temperature
tags:
  - Physics
  - University
---

### 4.1 Sommerfeld Expansion

At finite temperature, the Fermi-Dirac distribution "smears out" the step function at
$\varepsilon_F$. The Sommerfeld expansion provides an asymptotic series for integrals of the form

$$I = \int_0^\infty \frac{f(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

When $k_BT \ll \varepsilon_F$ (the degenerate limit).

**Theorem 4.1 (Sommerfeld Expansion).** To leading order in $T/T_F$:

$$I = \int_0^\mu f(\varepsilon)\, d\varepsilon + \frac{\pi^2}{6}(k_BT)^2 f'(\mu) + \mathcal{O}(T^4)$$

_Proof (sketch)._ Write $f(\varepsilon) = f(\mu) + f'(\mu)(\varepsilon - \mu) + \cdots$ and use the
exact results:

$$\int_0^\infty \frac{d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mu + \mathcal{O}(T^4)$$

$$\int_0^\infty \frac{(\varepsilon - \mu)\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \frac{\pi^2}{6}(k_BT)^2$$

$$\int_0^\infty \frac{(\varepsilon - \mu)^2\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mathcal{O}(T^4)$$

Combining these with the Taylor expansion of $f(\varepsilon)$ gives the result. The key integral
identities follow from the substitution $x = \beta(\varepsilon - \mu)$ and the fact that the
integrand is an odd function of $x$ to leading order. $\blacksquare$

### 4.2 Chemical Potential at Finite Temperature

Applying the Sommerfeld expansion to the number equation
$N = \int_0^\infty g(\varepsilon) f_{\mathrm{FD}(\varepsilon)\, d\varepsilon}$ with
$g(\varepsilon) = C\sqrt{\varepsilon}$:

$$N = \frac{2}{3}C\mu^{3/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{C}{2\sqrt{\mu}} + \mathcal{O}(T^4)$$

At $T = 0$: $N = \frac{2}{3}C\varepsilon_F^{3/2}$. Expanding $\mu = \varepsilon_F + \delta\mu$ and
keeping terms to $\mathcal{O}(T^2)$:

$$\mu(T) \approx \varepsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

The chemical potential decreases slightly with temperature.

### 4.3 Heat Capacity of the Electron Gas

Applying the Sommerfeld expansion to the energy:

$$U = \int_0^\infty \varepsilon\, g(\varepsilon)\, f_{\mathrm{FD}(\varepsilon)\, d\varepsilon = \frac{2}{5}C\mu^{5/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{3}{2}C\mu^{1/2} + \cdots}$$

Substituting $\mu \approx \varepsilon_F$:

$$U \approx \frac{3}{5}N\varepsilon_F\left[1 + \frac{5\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

$$C_V = \frac{\partial U}{\partial T} = Nk_B \cdot \frac{\pi^2}{2}\frac{k_BT}{\varepsilon_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F}$$

**Physical insight.** At room temperature ($T \approx 300$ K), $T/T_F \approx 0.006$ for copper, so
$C_V \approx 0.03 Nk_B$Which is negligible compared to the lattice contribution $\approx 3Nk_B$.
This explains why the Dulong-Petit law works for metals despite the presence of conduction
electrons.

### 4.4 Worked Example: Electronic Heat Capacity of Copper

**Problem.** Calculate the electronic contribution to $C_V$ for copper at $T = 300$ K. Compare with
the lattice contribution. Given: $\varepsilon_F = 7.0$ eV, Debye temperature $\Theta_D = 343$ K.

<details>
<summary>Solution</summary>

Electronic contribution:

$$C_V^{\mathrm{el} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{300}{81000} \approx 0.018\, Nk_B}$$

Lattice contribution (from the Debye model at $T \gg \Theta_D$):

$$C_V^{\mathrm{lat} \approx 3Nk_B}$$

The ratio is:

$$\frac{C_V^{\mathrm{el}}{C_V^{\mathrm{lat}} \approx \frac{0.018}{3} \approx 0.006}}$$

The electronic heat capacity is only about $0.6\%$ of the lattice contribution at room temperature.
At very low temperatures ($T \ll \Theta_D$), the lattice contribution falls as $T^3$ while the
electronic contribution falls as $T$So the electronic term eventually dominates below a few kelvin.

$\blacksquare$

</details>

---

