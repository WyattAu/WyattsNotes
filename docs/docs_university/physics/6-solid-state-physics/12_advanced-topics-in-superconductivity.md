---
title: Advanced Topics in Superconductivity
tags:
  - Physics
  - University
---

### 12.1 Ginzburg--Landau Theory

The Ginzburg--Landau (GL) theory provides a phenomenological description of superconductivity near
$T_c$ using a complex order parameter $\psi(\mathbf{r})$ where $|\psi|^2 = n_s$ is the superfluid
density.

The GL free energy functional:

$$\mathcal{F} = \mathcal{F}_n + \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2m^*}\left|\left(-i\hbar\nabla - e^*\mathbf{A}\right)\psi\right|^2 + \frac{|\mathbf{B}|^2}{2\mu_0}$$

Where $\alpha = \alpha_0(T - T_c)$ (negative below $T_c$), $\beta > 0$, $m^* = 2m_e$, $e^* = 2e$
(Cooper pair charge), and $\mathbf{A}$ is the vector potential.

Minimising with respect to $\psi^*$ gives the **first GL equation**:

$$\alpha\psi + \beta|\psi|^2\psi + \frac{1}{2m^*}\left(-i\hbar\nabla - e^*\mathbf{A}\right)^2\psi = 0$$

Minimising with respect to $\mathbf{A}$ gives the **second GL equation** (supercurrent):

$$\mathbf{J}_s = \frac{e^*\hbar}{m^*}\left(\psi^*\nabla\psi - \psi\nabla\psi^*\right) - \frac{e^{*2}}{m^*}|\psi|^2\mathbf{A}$$

### 12.2 Coherence Length and Penetration Depth

Two fundamental length scales emerge from the GL theory:

**Coherence length** (characterises the spatial variation of $|\psi|$):

$$\xi(T) = \sqrt{\frac{\hbar^2}{2m^*|\alpha|}} = \frac{\xi_0}{\sqrt{1 - T/T_c}}$$

**Penetration depth** (characterises the decay of $\mathbf{B}$):

$$\lambda(T) = \sqrt{\frac{m^*}{\mu_0 e^{*2}|\psi_\infty|^2}} = \frac{\lambda_0}{\sqrt{1 - T/T_c}}$$

Where $|\psi_\infty|^2 = |\alpha|/\beta$ is the bulk equilibrium value.

The ratio of these length scales determines the superconductor type:

$$\kappa = \frac{\lambda}{\xi}$$

- $\kappa < 1/\sqrt{2}$: Type I (positive surface energy)
- $\kappa > 1/\sqrt{2}$: Type II (negative surface energy, mixed state favourable)

### 12.3 Abrikosov Vortices

In the mixed state of a Type II superconductor ($B_{c1} < B < B_{c2}$), magnetic flux penetrates in
quantised vortices, each carrying one flux quantum:

$$\Phi_0 = \frac{h}{2e} = 2.07 \times 10^{-15}\ \mathrm{Wb}$$

The vortex core (radius $\sim\xi$) is in the normal state, while supercurrents circulate around it
(decaying over $\sim\lambda$).

The upper critical field from GL theory:

$$B_{c2} = \frac{\Phi_0}{2\pi\xi^2}$$

The lower critical field:

$$B_{c1} = \frac{\Phi_0}{4\pi\lambda^2}\ln\kappa$$

The thermodynamic critical field:

$$B_c = \frac{\Phi_0}{2\pi\sqrt{2}\xi\lambda}$$

These satisfy $B_{c1} < B_c < B_{c2}$ for $\kappa > 1/\sqrt{2}$.

### 12.4 Flux Quantisation and Josephson Effect

**Flux quantisation.** The GL order parameter must be single-valued. Integrating the supercurrent
around a closed loop enclosing flux $\Phi$:

$$\oint \nabla\theta \cdot d\mathbf{l} = \frac{2\pi\Phi}{\Phi_0} = 2\pi n$$

Where $\theta$ is the phase of $\psi$ and $n$ is an integer. Hence $\Phi = n\Phi_0$.

**DC Josephson effect.** For a superconductor--insulator--superconductor (SIS) junction with phase
difference $\delta$:

$$I = I_c \sin\delta$$

Where $I_c$ is the critical current.

**AC Josephson effect.** Applying a voltage $V$ across the junction causes the phase to evolve as
$\dot{\delta} = 2eV/\hbar$Giving:

$$I = I_c\sin\!\left(\delta_0 + \frac{2eV}{\hbar}t\right)$$

The oscillation frequency $\nu = 2eV/h$ provides the basis for the Josephson voltage standard:
$V = n(h/2e)\nu$.

<details>
<summary>Worked Example 12.1: Type I vs Type II Classification</summary>

Niobium has $\xi_0 = 39$ nm and $\lambda_0 = 39$ nm, giving
$\kappa = \lambda/\xi = 1.0 > 1/\sqrt{2} \approx 0.71$. Therefore Nb is Type II.

$$B_{c2} = \frac{\Phi_0}{2\pi\xi^2} = \frac{2.07 \times 10^{-15}}{2\pi \times (39 \times 10^{-9})^2} = \frac{2.07 \times 10^{-15}}{9.55 \times 10^{-15}} \approx 0.217\ \mathrm{T}$$

The experimental $B_{c2}(0) \approx 0.4$ T. The discrepancy arises because the GL expressions use
$\xi$ and $\lambda$ at $T_c$While the actual values differ at $T = 0$.

For aluminium: $\xi_0 = 1600$ nm, $\lambda_0 = 16$ nm, $\kappa = 0.01 \ll 1/\sqrt{2}$. Al is
strongly Type I.

</details>

<details>
<summary>Worked Example 12.2: Josephson Junction Frequency</summary>

A voltage $V = 1\ \mu$V is applied across a Josephson junction:

$$\nu = \frac{2eV}{h} = \frac{2 \times 1.602 \times 10^{-19} \times 10^{-6}}{6.626 \times 10^{-34}} = \frac{3.204 \times 10^{-25}}{6.626 \times 10^{-34}} = 4.836 \times 10^{8}\ \mathrm{Hz} \approx 483.6\ \mathrm{MHz}$$

The convenient relation is $\nu/\text{GHz} = 483.6 \times V/\mu\text{V}$. This precise
frequency-voltage relation is used to maintain the volt standard worldwide.

</details>

