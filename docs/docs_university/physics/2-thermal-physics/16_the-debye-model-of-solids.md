---
title: The Debye Model of Solids
tags:
  - Physics
  - University
---

### 16.1 From Einstein to Debye

The **Einstein model** treats all atoms as independent quantum oscillators with the same frequency
$\omega_E$:

$$C_V = 3Nk_B\left(\frac{\theta_E}{T}\right)^2 \frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}$$

Where $\theta_E = \hbar\omega_E/k_B$. This correctly predicts $C_V \to 0$ as $T \to 0$But gives
$C_V \propto e^{-\theta_E/T}$ at low $T$Whereas experiments show $C_V \propto T^3$.

The **Debye model** treats the lattice vibrations as a continuum of phonon modes with a cutoff
frequency $\omega_D$:

$$g(\omega) = \frac{3V\omega^2}{2\pi^2 v_s^3} \quad \text{for}  0 \leq \omega \leq \omega_D$$

Where $v_s$ is the average sound speed. The cutoff is determined by the total number of modes:

$$\int_0^{\omega_D} g(\omega)\,d\omega = 3N \implies \omega_D = v_s(6\pi^2 N/V)^{1/3}$$

### 16.2 Debye Specific Heat

The internal energy:

$$E = \int_0^{\omega_D} \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}\, g(\omega)\, d\omega = \frac{3V\hbar}{2\pi^2 v_s^3}\int_0^{\omega_D} \frac{\omega^3}{e^{\beta\hbar\omega} - 1}\, d\omega$$

With $x = \hbar\omega/k_BT$ and $\theta_D = \hbar\omega_D/k_B$ (Debye temperature):

$$E = 9Nk_BT\left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^3}{e^x - 1}\, dx$$

The specific heat:

$$C_V = 9Nk_B\left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\, dx$$

**Low-temperature limit** ($T \ll \theta_D$):

$$C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\theta_D}\right)^3 \propto T^3$$

**High-temperature limit** ($T \gg \theta_D$): $C_V \to 3Nk_B$ (Dulong--Petit).

<details>
<summary>Worked Example 16.1: Debye Temperature of Aluminum</summary>

Aluminum has $M = 27$ g/mol, $\rho = 2.70$ g/cm$^3$, $v_s \approx 6420$ m/s.

$$n = \frac{\rho N_A}{M} = \frac{2.70 \times 10^3 \times 6.022 \times 10^{23}}{27 \times 10^{-3}} = 6.02 \times 10^{28} \text{ m}^{-3}$$

$$\omega_D = v_s(6\pi^2 n)^{1/3} = 6420 \times (6\pi^2 \times 6.02 \times 10^{28})^{1/3}$$

$$= 6420 \times (3.56 \times 10^{30})^{1/3} = 6420 \times 1.526 \times 10^{10} = 9.80 \times 10^{13} \text{ rad/s}$$

$$\theta_D = \frac{\hbar\omega_D}{k_B} = \frac{1.055 \times 10^{-34} \times 9.80 \times 10^{13}}{1.38 \times 10^{-23}} \approx 748 \text{ K}$$

The experimental value is $\theta_D \approx 428$ K. The discrepancy arises from the oversimplified
single sound-speed approximation.

</details>

