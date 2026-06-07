---
title: 'Quantum Statistical Mechanics: Advanced Topics'
tags:
  - Physics
  - University
---

### 18.1 Density Matrix and Ensemble Averages

The **density matrix** (or density operator) provides the most general description of a quantum
system, encompassing both pure and mixed states:

$$\hat{\rho} = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|$$

Where $p_i$ is the probability of being in state $|\psi_i\rangle$.

**Properties:**

- $\text{Tr}(\hat{\rho}) = 1$ (normalisation)
- $\hat{\rho}^\dagger = \hat{\rho}$ (hermiticity)
- $\hat{\rho}^2 = \hat{\rho}$ if and only if the state is pure
- $\text{Tr}(\hat{\rho}^2) \leq 1$ with equality for pure states

**Ensemble averages:** $\langle \hat{A} \rangle = \text{Tr}(\hat{\rho}\hat{A})$.

**Canonical ensemble:** $\hat{\rho} = \frac{1}{Z}\exp(-\beta\hat{H})$ where
$Z = \text{Tr}[\exp(-\beta\hat{H})]$.

**Von Neumann entropy:** $S = -k_B\text{Tr}(\hat{\rho}\ln\hat{\rho})$.

For a pure state: $S = 0$. For a thermal state: $S > 0$ (maximum for the maximally mixed state).

### 18.2 Quantum Ideal Gases: General Treatment

For a system of non-interacting quantum particles, the grand canonical partition function is:

$$\ln\mathcal{Z} = \pm\sum_{\mathbf{k}}\ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})$$

Where $+$ is for fermions and $-$ for bosons.

The thermodynamic quantities follow from:

$$N = \sum_{\mathbf{k}}\frac{1}{e^{\beta(\epsilon_{\mathbf{k}} - \mu)} \pm 1}, \quad E = \sum_{\mathbf{k}}\frac{\epsilon_{\mathbf{k}}}{e^{\beta(\epsilon_{\mathbf{k}} - \mu)} \pm 1}$$

$$\Omega = -PV = \mp k_BT\sum_{\mathbf{k}}\ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})$$

In the continuum limit:

$$\Omega = \mp k_BT\int_0^\infty g(\epsilon)\ln(1 \mp e^{-\beta(\epsilon - \mu)})\,d\epsilon$$

### 18.3 Ideal Bose Gas Below $T_c$

Below the Bose--Einstein condensation temperature, the chemical potential is pinned at
$\mu = \epsilon_0$ (the ground state energy, taken as zero). The integral for $N$ splits into
condensate and excited fractions:

$$N = N_0 + N_{\text{ex} = N_0 + \int_0^\infty \frac{g(\epsilon)}{e^{\beta\epsilon} - 1}\,d\epsilon}$$

For a 3D gas: $g(\epsilon) = (2m)^{3/2}V/(4\pi^2\hbar^3)\sqrt{\epsilon}$.

The excited fraction: $N_{\text{ex}/N = (T/T_c)^{3/2}}$.

**Condensate fraction:** $N_0/N = 1 - (T/T_c)^{3/2}$.

**Low-$T$ properties of the condensate:**

- Ground state energy: $E_0 = 0$ (no kinetic energy)
- Heat capacity: $C_V \propto T^3$ (from excited states only)
- The condensate does not contribute to $C_V$ (all particles in the ground state have fixed energy)

### 18.4 Landau Levels and Quantum Oscillations

In a magnetic field $\mathbf{B} = B\hat{z}$The energy levels of a free electron gas become quantised
into **Landau levels**:

$$\epsilon_n = \left(n + \frac{1}{2}\right)\hbar\omega_c + \frac{\hbar^2 k_z^2}{2m_e}, \quad \omega_c = \frac{eB}{m_e}$$

The density of states becomes a series of peaks (van Hove singularities) at each Landau level:

$$g(\epsilon) = \frac{eB}{2\pi^2\hbar}\sum_n \frac{1}{\sqrt{\epsilon - (n + 1/2)\hbar\omega_c}}$$

**Shubnikov--de Haas oscillations:** As $B$ is varied, Landau levels pass through the Fermi energy,
causing oscillations in the resistivity with period:

$$\Delta\!\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\text{ext}}}$$

Where $A_{\text{ext}}$ is the extremal cross-sectional area of the Fermi surface perpendicular to
$\mathbf{B}$.

**de Haas--van Alphen oscillations:** Similar oscillations in the magnetisation (and hence the
susceptibility). These provide the most precise tool for mapping Fermi surface geometry.

<details>
<summary>Worked Example 18.1: Density Matrix of a Two-Level System</summary>

Consider a spin-1/2 particle in a magnetic field $B\hat{z}$ at temperature $T$.

The Hamiltonian: $\hat{H} = -\gamma B\hbar\hat{S}_z$ with eigenstates $|\uparrow\rangle$ (energy
$-\gamma\hbar B/2$) and $|\downarrow\rangle$ (energy $+\gamma\hbar B/2$).

The density matrix:

$$\hat{\rho} = \frac{1}{Z}\begin{pmatrix} e^{\beta\gamma\hbar B/2} & 0 \\ 0 & e^{-\beta\gamma\hbar B/2} \end{pmatrix} = \begin{pmatrix} p_\uparrow & 0 \\ 0 & p_\downarrow \end{pmatrix}$$

Where $p_\uparrow = e^{\beta\gamma\hbar B/2}/(2\cosh(\beta\gamma\hbar B/2))$.

At high $T$: $p_\uparrow \approx p_\downarrow \approx 1/2$ (maximally mixed, $S = k_B\ln 2$).

At low $T$ ($\gamma\hbar B \gg k_BT$): $p_\uparrow \to 1$, $p_\downarrow \to 0$ (nearly pure,
$S \to 0$).

The magnetisation:
$\langle S_z \rangle = \text{Tr}(\hat{\rho}\hat{S}_z) = \frac{\hbar}{2}(p_\uparrow - p_\downarrow) = \frac{\hbar}{2}\tanh\!\left(\frac{\gamma\hbar B}{2k_BT}\right)$.

The entropy: $S = -k_B[p_\uparrow\ln p_\uparrow + p_\downarrow\ln p_\downarrow]$.

At $T = 0$: $S = 0$ (ground state, pure). At $T = \infty$: $S = k_B\ln 2$ (maximally mixed).

</details>

<details>
<summary>Worked Example 18.2: Blackbody Radiation in $d$ Dimensions</summary>

The photon density of states in $d$ dimensions scales as $g(\omega) \propto \omega^{d-1}$.

The energy density:

$$u_d = \int_0^\infty \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}\,g(\omega)\,d\omega \propto T^{d+1}$$

The Stefan--Boltzmann law in $d$ dimensions: $u_d \propto T^{d+1}$.

For $d = 1$: $u \propto T^2$. For $d = 2$: $u \propto T^3$. For $d = 3$: $u \propto T^4$ (the
standard result).

The Wien displacement law also changes: $\lambda_{\max} T \propto d$ (the peak wavelength scales
linearly with dimension).

In $d = 1$ (nanotubes): the blackbody spectrum peaks at lower temperatures and has a steeper
low-frequency rise. In $d = 2$ (graphene): the specific heat per area is
$C/A = (2\pi^2 k_B^4)/(15\hbar^3 c^2)\,T^3 \propto T^3$ (Debye $T^3$ in 2D).

</details>

