---
title: Lattice Vibrations and Phonons
tags:
  - Physics
  - University
---

### 4.1 The One-Dimensional Monatomic Chain

Consider $N$ atoms of mass $m$ connected by springs of constant $K$ with equilibrium spacing $a$.

The equation of motion for the $n$-th atom:

$$m\ddot{u}_n = K(u_{n+1} - u_n) + K(u_{n-1} - u_n) = K(u_{n+1} + u_{n-1} - 2u_n)$$

**Derivation of the dispersion relation.** Assuming solutions $u_n = u_0\, e^{i(qna - \omega t)}$:

$$-m\omega^2 = K(e^{iqa} + e^{-iqa} - 2) = 2K(\cos qa - 1) = -4K\sin^2\left(\frac{qa}{2}\right)$$

$$\omega(q) = 2\sqrt{\frac{K}{m}}\left|\sin\left(\frac{qa}{2}\right)\right|$$

$\blacksquare$

**Key features:**

- The Brillouin zone is $-\pi/a \leq q \leq \pi/a$.
- Linear for small $q$: $\omega \approx v_s \lvert q\rvert$ where $v_s = a\sqrt{K/m}$ is the speed
  of sound.
- Group velocity: $v_g = d\omega/dq = a\sqrt{K/m}\cos(qa/2)$.
- Maximum frequency: $\omega_{\mathrm{max} = 2\sqrt{K/m}}$.
- Phase velocity: $v_p = \omega/q$Which exceeds $v_s$ and diverges as $q \to 0$.

### 4.2 The Diatomic Chain

For a chain with alternating masses $m_1$ and $m_2$ (e.g., NaCl):

$$\omega^2 = K\left(\frac{1}{m_1} + \frac{1}{m_2}\right) \pm K\sqrt{\left(\frac{1}{m_1} + \frac{1}{m_2}\right)^2 - \frac{4\sin^2(qa/2)}{m_1 m_2}}$$

This gives two branches:

- **Acoustic branch** ($-$ sign): $\omega \to 0$ as $q \to 0$. Atoms in the unit cell move in phase.
- **Optical branch** ($+$ sign): $\omega \neq 0$ at $q = 0$. Atoms in the unit cell move out of
  phase. Can interact with light (hence the name).

At $q = 0$The optical frequency is $\omega_0 = \sqrt{2K(1/m_1 + 1/m_2)}$ and the acoustic branch Has
$\omega = v_s q$ with $v_s = a\sqrt{2K/(m_1 + m_2)}$.

### 4.3 Quantisation: Phonons

Lattice vibrations are quantised. Each normal mode of wave vector $\mathbf{q}$ and branch $s$ has
Energy:

$$E_{\mathbf{q}s} = \left(n_{\mathbf{q}s} + \frac{1}{2}\right)\hbar\omega_{\mathbf{q}s}$$

Where $n_{\mathbf{q}s}$ is the phonon occupation number. Phonons are bosons obeying Bose-Einstein
Statistics:

$$\langle n_{\mathbf{q}s} \rangle = \frac{1}{e^{\beta\hbar\omega_{\mathbf{q}s}} - 1}$$

In three dimensions, there are 3 acoustic branches (1 longitudinal, 2 transverse) and $3p - 3$
Optical branches for a crystal with $p$ atoms per primitive cell.

### 4.4 Debye Model

The Debye model approximates the phonon spectrum as linear ($\omega = v_s q$) up to a cutoff
frequency $\omega_D$ (the Debye frequency):

$$\omega_D = v_s\left(\frac{6\pi^2 N}{V}\right)^{1/3}$$

The **Debye temperature:** $\Theta_D = \hbar\omega_D / k_B$.

**Derivation of the phonon density of states.** The number of modes with wave vector
$\lvert\mathbf{q}\rvert \leq q$ In 3D is
$N(q) = 3 \cdot \frac{V}{(2\pi)^3} \cdot \frac{4\pi q^3}{3}$ (factor of 3 for polarisations).
Differentiating: $g(q)\,dq = dN/dq\,dq = (Vq^2/\pi^2)\,dq$. Converting to frequency with
$\omega = v_s q$:

$$g(\omega)\,d\omega = \frac{Vq^2}{\pi^2}\frac{dq}{d\omega}\,d\omega = \frac{V\omega^2}{\pi^2 v_s^3}\,d\omega$$

Since there are $3N$ total modes, the cutoff is determined by
$\int_0^{\omega_D} g(\omega)\,d\omega = 3N$Giving $g(\omega) = \frac{3V\omega^2}{2\pi^2 v_s^3}$ For
$0 \leq \omega \leq \omega_D$. $\blacksquare$

**Lattice heat capacity:**

$$C_V = 9Nk_B\left(\frac{T}{\Theta_D}\right)^3 \int_0^{\Theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\,dx$$

**High-temperature limit** ($T \gg \Theta_D$): $C_V = 3Nk_B$ (Dulong--Petit law).

**Low-temperature limit** ($T \ll \Theta_D$):
$C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3$ (Debye $T^3$ law).

### 4.5 Einstein Model

The Einstein model treats all atoms as independent quantum harmonic oscillators with the same
frequency $\omega_E$:

$$C_V = 3Nk_B\left(\frac{\Theta_E}{T}\right)^2 \frac{e^{\Theta_E/T}}{(e^{\Theta_E/T} - 1)^2}$$

Where $\Theta_E = \hbar\omega_E/k_B$.

**High-temperature limit** ($T \gg \Theta_E$): expanding
$e^{\Theta_E/T} \approx 1 + \Theta_E/T +
\frac{1}{2}(\Theta_E/T)^2$ gives $C_V \to 3Nk_B$
(Dulong--Petit), matching Debye.

**Low-temperature limit** ($T \ll \Theta_E$): $C_V \approx 3Nk_B(\Theta_E/T)^2 e^{-\Theta_E/T}$
Which is exponentially suppressed. This disagrees with the Debye $T^3$ law (and experiment).

### 4.6 Phonon Thermal Conductivity

Phonons carry heat through the lattice. By the kinetic theory formula:

$$\kappa_{\mathrm{ph} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}}$$

Where $\ell_{\mathrm{ph}}$ is the phonon mean free path.

**Scattering mechanisms** that limit $\ell_{\mathrm{ph}}$:

1. **Phonon--phonon scattering:** At high $T$, $\ell_{\mathrm{ph} \propto 1/T}$ (Umklapp processes
   dominate, where the total phonon momentum is not conserved). At low $T$Only normal processes
   ($N$-processes, conserving momentum) contribute, and $\ell_{\mathrm{ph}}$ grows exponentially.
2. **Boundary scattering:** At very low $T$, $\ell_{\mathrm{ph}}$ is limited by the sample size $L$.
3. **Defect scattering:** Point defects, dislocations, and grain boundaries scatter phonons,
   reducing $\kappa_{\mathrm{ph}}$.

**Temperature dependence:**

- Low $T$ ($T \ll \Theta_D$): $\kappa_{\mathrm{ph} \propto T^3}$ (from $C_V \propto T^3$With
  $\ell_{\mathrm{ph}}$ limited by boundaries).
- Intermediate $T$: $\kappa_{\mathrm{ph}}$ peaks.
- High $T$ ($T \gtrsim \Theta_D$): $\kappa_{\mathrm{ph} \propto 1/T}$ (from
  $\ell_{\mathrm{ph} \propto 1/T}$ and $C_V \approx \mathrm{const}$).

### 4.7 Specific Heat: Debye vs Einstein vs Experiment

| Feature          | Debye            | Einstein                  | Experiment      |
| ---------------- | ---------------- | ------------------------- | --------------- |
| High $T$         | $3Nk_B$          | $3Nk_B$                   | $3Nk_B$         |
| Low $T$          | $\propto T^3$    | $\propto e^{-\Theta_E/T}$ | $\propto T^3$   |
| Single parameter | $\Theta_D$       | $\Theta_E$                | ---             |
| Physical basis   | Acoustic phonons | Optical phonons           | Both contribute |

The Debye model captures the correct low-$T$ behaviour because long-wavelength acoustic phonons
Dominate the specific heat at low temperatures. The Einstein model is more appropriate for
Describing the optical branch contribution, which is nearly flat (dispersionless) and hence well
Approximated by a single frequency.

For crystals with optical branches (e.g., NaCl, SiO$_2$), a combined model using Debye for Acoustic
modes and Einstein for optical modes gives better agreement with experiment across all Temperatures.

<details>
<summary>Worked Example: Debye Temperature of Copper</summary>

Copper has molar mass $M = 63.55$ g/mol, density $\rho = 8.96\ \mathrm{g}/cm^3$And measured Speed of
sound $v_s = 3810$ m/s (average of longitudinal and transverse).

Number density:
$n = \frac{\rho N_A}{M} = \frac{8.96 \times 6.022 \times 10^{23}}{63.55} = 8.49 \times 10^{28}\ \mathrm{m}^{-3}$.

$$\Theta_D = \frac{\hbar v_s}{k_B}(6\pi^2 n)^{1/3}$$

$$(6\pi^2 n)^{1/3} = (6\pi^2 \times 8.49 \times 10^{28})^{1/3} = (5.03 \times 10^{30})^{1/3} = 1.71 \times 10^{10}\ \mathrm{m}^{-1}$$

$$\Theta_D = \frac{1.055 \times 10^{-34} \times 3810}{1.381 \times 10^{-23}} \times 1.71 \times 10^{10} = 2.91 \times 10^{-8} \times 1.71 \times 10^{10} = 498\ \mathrm{K}$$

The accepted experimental value is $\Theta_D = 343$ K. The discrepancy arises because the Debye
Model uses a single average sound velocity, while the real phonon spectrum is anisotropic.

</details>

:::caution Common Pitfall The Debye and Einstein models describe the _lattice_ contribution to
specific heat. At low Temperatures, the electronic specific heat $C_e = \gamma T$ also contributes
and can dominate over The lattice $T^3$ term in metals. The total low-$T$ specific heat of a metal
is $C_V = \gamma T + \beta T^3$Where $\beta$ is related to $\Theta_D$. A plot of $C_V/T$ versus
$T^2$ yields $\gamma$ (intercept) and $\beta$ (slope).

<details>
<summary>Worked Example: Comparing Debye and Einstein Specific Heats</summary>

For aluminium: $\Theta_D = 428$ K. Fit an Einstein temperature to match the Debye model at
$T = \Theta_D/2 = 214$ K.

The Debye specific heat at $T/\Theta_D = 0.5$:

$$\frac{C_V}{3Nk_B} = \left(\frac{T}{\Theta_D}\right)^3 \int_0^{\Theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\,dx = 0.125 \times \int_0^2 \frac{x^4 e^x}{(e^x - 1)^2}\,dx$$

Numerical evaluation gives $C_V/(3Nk_B) \approx 0.825$ at $T/\Theta_D = 0.5$.

For the Einstein model, $\Theta_E \approx 0.75\,\Theta_D$ gives a good match at intermediate
Temperatures. The Einstein model overestimates $C_V$ at low $T$ and is less accurate overall, but It
is simpler to evaluate analytically.

At $T = 300$ K: $T/\Theta_D = 0.70$And both models give $C_V \approx 0.94 \times 3Nk_B$ Approaching
the Dulong--Petit limit.

</details>

<details>
<summary>Worked Example: Phonon Mean Free Path in Copper</summary>

For copper at 300 K: $\Theta_D = 343$ K, $v_s = 3810$ m/s, thermal conductivity
$\kappa_{\mathrm{ph} = 401}$ W/(m$\cdot$K), and
$C_V \approx 3Nk_B = 3 \times 8.49 \times 10^{28} \times 1.381 \times 10^{-23} = 3.52 \times 10^6$
J/(m$^3\cdot$K).

From $\kappa = \frac{1}{3}C_V v_s \ell$:

$$\ell = \frac{3\kappa}{C_V v_s} = \frac{3 \times 401}{3.52 \times 10^6 \times 3810} = 8.97 \times 10^{-8}\ \mathrm{m} \approx 90\ \mathrm{nm}$$

This is much shorter than the sample size, confirming that phonon--phonon (Umklapp) scattering
Dominates at room temperature. At 10 K, the mean free path would be limited by sample boundaries.

</details>

### 4.8 Neutron Scattering

Neutrons are an ideal probe of phonons because their de Broglie wavelength ($\sim 1$ Å) matches
Lattice spacings, and their energy ($\sim 10$--$100$ meV) matches phonon energies. In an **inelastic
Neutron scattering** experiment, the energy and momentum transfer are measured:

$$\hbar\omega = E_i - E_f, \quad \mathbf{q} = \mathbf{k}_i - \mathbf{k}_f$$

The scattering cross-section is proportional to the dynamical structure factor
$S(\mathbf{q}, \omega)$ Which has peaks when $\hbar\omega = \hbar\omega_{\mathbf{q}s}$ (phonon
creation) or $\hbar\omega = -\hbar\omega_{\mathbf{q}s}$ (phonon annihilation). This allows direct
measurement of The full phonon dispersion relation $\omega(\mathbf{q})$.

Time-of-flight and triple-axis spectrometers are the primary instruments used. Neutron scattering
Has provided definitive measurements of phonon dispersions in virtually all important crystals.


:::
