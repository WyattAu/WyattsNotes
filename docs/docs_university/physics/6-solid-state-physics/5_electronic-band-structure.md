---
title: Electronic Band Structure
tags:
  - Physics
  - University
---

### 5.1 Free Electron Model

In the simplest model, conduction electrons move freely in a box of volume $V$ (the "jellium"
model). The allowed wave vectors are:

$$\mathbf{k} = \frac{2\pi}{L}(n_x, n_y, n_z), \quad n_i \in \mathbb{Z}$$

The energy spectrum:

$$\varepsilon(\mathbf{k}) = \frac{\hbar^2 k^2}{2m_e}$$

The **Fermi wave vector** is determined by the electron density $n = N/V$:

$$k_F = (3\pi^2 n)^{1/3}$$

The **Fermi energy:**

$$\varepsilon_F = \frac{\hbar^2 k_F^2}{2m_e}$$

### 5.2 Density of States

For a 3D free electron gas:

$$g(\varepsilon) = \frac{V}{2\pi^2}\left(\frac{2m_e}{\hbar^2}\right)^{3/2}\sqrt{\varepsilon}$$

**Derivation.** The number of states with $\lvert\mathbf{k}\rvert \leq k$ is:

$$N(k) = 2 \cdot \frac{V}{(2\pi)^3} \cdot \frac{4\pi k^3}{3}$$

Where the factor of 2 accounts for spin. Differentiating: $g(k)\,dk = dN/dk\,dk = (Vk^2/\pi^2)\,dk$.
Converting to energy:
$g(\varepsilon) = g(k)\lvert dk/d\varepsilon\rvert = (Vk^2/\pi^2)(m_e/\hbar^2 k)$. $\blacksquare$

At the Fermi energy: $g(\varepsilon_F) = \frac{3N}{2\varepsilon_F}$.

**The Fermi surface** is the surface in $\mathbf{k}$-space defined by
$\varepsilon(\mathbf{k}) = \varepsilon_F$. For the free electron gas, this is a sphere of radius
$k_F$. The shape of the Fermi surface Strongly influences transport properties (conductivity, Hall
effect, cyclotron resonance).

In real metals, the periodic potential distorts the Fermi surface from a sphere. At the Brillouin
Zone boundaries, band gaps open and the Fermi surface can develop "necks" (connecting to adjacent
Zones) or become multiply connected. The topology of the Fermi surface determines whether a material
Is a metal or insulator: a material is metallic if the Fermi surface crosses any Brillouin zone
Boundary.

The number of electrons per atom determines the filling: 1 electron/atom (e.g., Na, Cu) gives a
Nearly spherical Fermi surface well within the first BZ. 2 electrons/atom (e.g., Mg) nearly fills
The first BZ and the Fermi surface contacts the zone boundary. 3--4 electrons/atom (e.g., Al, Pb)
Produce complex multiply-connected Fermi surfaces.

### 5.3 Bloch's Theorem

**Theorem 5.1 (Bloch, 1928).** The eigenstates of the one-electron Hamiltonian in a periodic
Potential $V(\mathbf{r} + \mathbf{R}) = V(\mathbf{r})$ can be written as:

$$\psi_{n\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}} u_{n\mathbf{k}}(\mathbf{r})$$

Where $u_{n\mathbf{k}}(\mathbf{r})$ has the periodicity of the lattice:
$u_{n\mathbf{k}}(\mathbf{r} + \mathbf{R}) = u_{n\mathbf{k}}(\mathbf{r})$.

**Proof.** The translation operators $\hat{T}_{\mathbf{R}}$ commute with the Hamiltonian
$\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})$ since $V$ is periodic. Therefore, the
Eigenstates of $\hat{H}$ can be chosen as simultaneous eigenstates of all $\hat{T}_{\mathbf{R}}$:

$$\hat{T}_{\mathbf{R}}\psi(\mathbf{r}) = \psi(\mathbf{r} + \mathbf{R}) = c_{\mathbf{R}}\psi(\mathbf{r})$$

From the composition rule
$\hat{T}_{\mathbf{R}_1}\hat{T}_{\mathbf{R}_2} = \hat{T}_{\mathbf{R}_1 + \mathbf{R}_2}$:

$$c_{\mathbf{R}_1 + \mathbf{R}_2} = c_{\mathbf{R}_1} c_{\mathbf{R}_2}$$

The only solution of this functional equation is $c_{\mathbf{R}} = e^{i\mathbf{k}\cdot\mathbf{R}}$.
Therefore $\psi(\mathbf{r} + \mathbf{R}) = e^{i\mathbf{k}\cdot\mathbf{R}}\psi(\mathbf{r})$Which is
Satisfied by $\psi(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}}u_{\mathbf{k}}(\mathbf{r})$ with
$u_{\mathbf{k}}$ periodic. $\blacksquare$

**Consequences:**

- $\mathbf{k}$ is defined only up to a reciprocal lattice vector: $\mathbf{k}$ and
  $\mathbf{k} + \mathbf{G}$ are equivalent.
- The energy spectrum consists of **bands** $\varepsilon_n(\mathbf{k})$Each labelled by a band index
  $n$.
- Band gaps appear between allowed energy bands.

### 5.4 Nearly Free Electron Model

Starting from the free electron model, a weak periodic potential
$V(\mathbf{r}) = \sum_{\mathbf{G}} V_{\mathbf{G}} e^{i\mathbf{G}\cdot\mathbf{r}}$ Opens gaps at the
Brillouin zone boundaries where $\lvert\mathbf{k}\rvert = \lvert\mathbf{k} + \mathbf{G}\rvert$
(Bragg Condition).

At the zone boundary $\mathbf{k} = \mathbf{G}/2$The gap is:

$$\Delta\varepsilon = 2\lvert V_{\mathbf{G}}\rvert$$

**Derivation.** Near the zone boundary, the free electron states at $\mathbf{k}$ and
$\mathbf{k} - \mathbf{G}$ Are degenerate:
$\varepsilon_{\mathbf{k}}^0 = \varepsilon_{\mathbf{k} - \mathbf{G}}^0$. Degenerate Perturbation
theory gives:

$$\det\begin{pmatrix} \varepsilon_{\mathbf{k}}^0 - E & V_{\mathbf{G}} \\ V_{\mathbf{G}}^* & \varepsilon_{\mathbf{k} - \mathbf{G}}^0 - E \end{pmatrix} = 0$$

At $\mathbf{k} = \mathbf{G}/2$: $E = \varepsilon_{\mathbf{G}/2}^0 \pm \lvert V_{\mathbf{G}}\rvert$So
the gap is $2\lvert V_{\mathbf{G}}\rvert$. $\blacksquare$

### 5.5 Drude Model

The **Drude model** (1900) treats conduction electrons as a classical ideal gas scattering off
Static ions with a mean free time $\tau$ (relaxation time).

**Equation of motion.** Under an electric field $\mathbf{E}$:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

The second term represents a frictional drag with characteristic time $\tau$.

**DC conductivity.** In steady state ($d\mathbf{v}/dt = 0$):
$\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$. The current density:
$\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

$$\sigma = \frac{ne^2\tau}{m_e}$$

**AC conductivity.** For $\mathbf{E}(t) = \mathbf{E}_0\,e^{-i\omega t}$The Drude model gives:

$$\sigma(\omega) = \frac{ne^2\tau/m_e}{1 - i\omega\tau} = \frac{\sigma_0}{1 - i\omega\tau}$$

The real part $\mathrm{Re}[\sigma(\omega)] = \frac{\sigma_0}{1 + \omega^2\tau^2}$ describes
absorption, Peaking at $\omega = 0$ (the Drude peak). This explains the metallic reflectivity in the
infrared.

**Hall effect.** With $\mathbf{B} = B\hat{z}$ applied, the steady-state equation becomes:

$$-e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau} - e\mathbf{v} \times \mathbf{B} = 0$$

For current $\mathbf{J} = J_x\hat{x}$A transverse field $E_y$ develops:

$$R_H = \frac{E_y}{J_x B} = -\frac{1}{ne}$$

This provides a direct measurement of the carrier density $n$.

**Successes:** Ohm's law ($\mathbf{J} = \sigma\mathbf{E}$), Wiedemann--Franz law
($\kappa/\sigma T = \frac{\pi^2 k_B^2}{3e^2}$), Hall effect.

**Failures:** Predicts $\chi \propto T^{-1}$ (Curie law) for magnetic susceptibility, but real
Metals have nearly temperature-independent Pauli paramagnetism. Predicts $C_V = \frac{3}{2}nk_B$ But
experiments give $C_V \ll \frac{3}{2}nk_B$ at room temperature.

### 5.6 Sommerfeld Model

The **Sommerfeld model** (1928) corrects the Drude model by treating electrons as a **Fermi gas**
Obeying Fermi--Dirac .../4-statistics-and-probability/2_statistics:

$$f(\varepsilon) = \frac{1}{e^{(\varepsilon - \mu)/k_B T} + 1}$$

At $T = 0$The chemical potential equals the Fermi energy: $\mu(0) = \varepsilon_F$. At finite $T$:

$$\mu(T) = \varepsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_B T}{\varepsilon_F}\right)^2 + \cdots\right]$$

Since $\varepsilon_F/k_B \sim 10^4$ K for metals, the correction at room temperature is negligible:
The chemical potential is essentially constant.

**Electronic specific heat.** By the Sommerfeld expansion:

$$C_e = \frac{\pi^2}{3}k_B^2\,g(\varepsilon_F)\,T = \gamma T$$

Where $\gamma = \frac{\pi^2}{2}\frac{Nk_B^2}{\varepsilon_F}$. At room temperature, only electrons
within $\sim k_B T$ of $\varepsilon_F$ can be thermally excited, which is a tiny fraction
$\sim T/T_F \sim 1/100$ of the total. This explains why $C_e \ll \frac{3}{2}Nk_B$.

**Pauli paramagnetism.** The spin susceptibility of a degenerate electron gas:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac{3\mu_0\mu_B^2 N}{2\varepsilon_F}$$

This is independent of $T$ (up to corrections of order $(T/T_F)^2$), in contrast to the Curie law
$\chi \propto 1/T$ of the Drude model.

<details>
<summary>Derivation: Sommerfeld Expansion</summary>

To compute thermal averages at low $T$We integrate $h(\varepsilon) f(\varepsilon)$ where
$f(\varepsilon) = 1/(e^{\beta(\varepsilon - \mu)} + 1)$ is the Fermi--Dirac distribution and
$h(\varepsilon)$ Is any smooth function (e.g., density of states times energy).

Define $H(\varepsilon) = \int_0^\varepsilon h(\varepsilon')\,d\varepsilon'$. Then:

$$I = \int_0^\infty h(\varepsilon)f(\varepsilon)\,d\varepsilon = \int_0^\infty \frac{dH}{d\varepsilon}\,f\,d\varepsilon = [Hf]_0^\infty + \int_0^\infty H(\varepsilon)\left(-\frac{\partial f}{\partial \varepsilon}\right)d\varepsilon$$

Since $f(0) \approx 1$ and $f(\infty) = 0$And $-\partial f/\partial \varepsilon$ is sharply peaked
At $\varepsilon = \mu$ with width $\sim k_B T$We expand $H(\varepsilon)$ about $\mu$:

$$I = \int_0^\mu h(\varepsilon)\,d\varepsilon + \frac{\pi^2}{6}(k_B T)^2 h'(\mu) + \cdots$$

For the total energy with $h(\varepsilon) = \varepsilon\,g(\varepsilon)$:

$$E = \int_0^{\mu_0} \varepsilon\,g(\varepsilon)\,d\varepsilon + \frac{\pi^2}{6}(k_B T)^2 \frac{d}{d\varepsilon}[\varepsilon g(\varepsilon)]_{\varepsilon = \mu_0} + \cdots$$

Differentiating with respect to $T$ gives the specific heat
$C_V = \frac{\pi^2}{3}k_B^2\,g(\varepsilon_F)\,T$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Fermi Energy of Sodium</summary>

Sodium has $n = 2.65 \times 10^{28}\ \mathrm{m}^{-3}$ conduction electrons (one per atom, BCC
structure).

$$k_F = (3\pi^2 n)^{1/3} = (3\pi^2 \times 2.65 \times 10^{28})^{1/3} = (7.85 \times 10^{29})^{1/3} = 9.23 \times 10^9\ \mathrm{m}^{-1}$$

$$\varepsilon_F = \frac{\hbar^2 k_F^2}{2m_e} = \frac{(1.055 \times 10^{-34})^2 \times (9.23 \times 10^9)^2}{2 \times 9.11 \times 10^{-31}} = \frac{9.48 \times 10^{-58}}{1.82 \times 10^{-30}} = 5.21 \times 10^{-19}\ \mathrm{J} = 3.25\ \mathrm{eV}$$

$$T_F = \frac{\varepsilon_F}{k_B} = \frac{5.21 \times 10^{-19}}{1.381 \times 10^{-23}} = 3.77 \times 10^4\ \mathrm{K}$$

$$v_F = \frac{\hbar k_F}{m_e} = \frac{1.055 \times 10^{-34} \times 9.23 \times 10^9}{9.11 \times 10^{-31}} = 1.07 \times 10^6\ \mathrm{m}/s$$

The electronic specific heat coefficient:
$\gamma = \frac{\pi^2}{2}\frac{nk_B^2}{\varepsilon_F} = \frac{\pi^2 \times 2.65 \times 10^{28} \times (1.381 \times 10^{-23})^2}{2 \times 5.21 \times 10^{-19}} = 1.38 \times 10^3\ \mathrm{J}/(m^3\cdot K^2)$

</details>

### 5.7 Tight-Binding Model

The **tight-binding model** starts from isolated atomic orbitals and treats the overlap between
Neighbours as a perturbation. For a 1D chain with lattice constant $a$ and a single $s$-orbital Of
energy $\varepsilon_0$:

$$\psi_k(r) = \frac{1}{\sqrt{N}}\sum_n e^{ikna}\,\phi(r - na)$$

Where $\phi(r - na)$ is the atomic orbital centred at site $n$.

**Dispersion relation** (nearest-neighbour approximation):

$$\varepsilon(k) = \varepsilon_0 - 2t\cos(ka)$$

Where $t = -\int \phi^*(r - na)\,\hat{H}\,\phi(r - (n+1)a)\,dr$ is the **hopping integral** ($t > 0$
for typical $s$-orbitals).

**Key features:**

- Band width: $W = 4t$.
- Minimum at $k = 0$: $\varepsilon_{\min} = \varepsilon_0 - 2t$.
- Maximum at $k = \pm\pi/a$: $\varepsilon_{\max} = \varepsilon_0 + 2t$.
- Effective mass at band bottom: $m^* = \hbar^2/(2ta^2)$.

**Extension to 3D:** For a simple cubic lattice with nearest-neighbour hopping:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 - 2t(\cos k_x a + \cos k_y a + \cos k_z a)$$

The band width is $W = 12t$ and the density of states develops a van Hove singularity at
$\varepsilon = \varepsilon_0$.

<details>
<summary>Worked Example: Tight-Binding Band Structure of Graphene</summary>

Graphene has a honeycomb lattice with two carbon atoms per unit cell. Using $p_z$ orbitals with
Nearest-neighbour hopping $t \approx 2.8$ eV, the tight-binding Hamiltonian gives:

$$\varepsilon_{\pm}(\mathbf{k}) = \pm t\left\lvert 1 + e^{i\mathbf{k}\cdot\mathbf{a}_1} + e^{i\mathbf{k}\cdot\mathbf{a}_2}\right\rvert$$

Where $\mathbf{a}_1$ and $\mathbf{a}_2$ are the primitive vectors of the hexagonal lattice.

The two bands touch at the **Dirac points** $\mathbf{K}$ and $\mathbf{K}'$ in the Brillouin zone.
Near these points, expanding to linear order:

$$\varepsilon(\mathbf{q}) = \pm \hbar v_F \lvert\mathbf{q}\rvert$$

Where $v_F = \frac{\sqrt{3}}{2}\frac{ta}{\hbar} \approx 10^6$ m/s and
$\mathbf{q} = \mathbf{k} - \mathbf{K}$.

This linear (Dirac-like) dispersion means graphene has zero effective mass and a density of states
$g(\varepsilon) \propto \lvert\varepsilon\rvert$ (linear in energy), unlike the $\sqrt{\varepsilon}$
Dependence of a parabolic band.

</details>

### 5.8 Effective Mass

Near a band extremum at $\mathbf{k}_0$The energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}(k_i - k_{0,i})(k_j - k_{0,j})$$

The **effective mass tensor**
$(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
Determines the response to external fields. For isotropic bands,
$m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
Steep band (high mobility).

The effective mass can be **negative** near a band maximum (holes). Cyclotron resonance experiments
Measure $m^*$ directly: the resonance frequency is $\omega_c = eB/m^*$.

:::caution Common Pitfall The effective mass is a tensor quantity . For crystals with cubic
symmetry, it reduces to A scalar, but for anisotropic crystals (e.g., graphite, silicon), different
effective masses apply Along different crystallographic directions. Always check the crystal
symmetry before assuming $m^*$ is a scalar.

### 5.9 Band Structure Calculations

Modern band structure calculations are based on **density functional theory** (DFT), formulated by
Hohenberg, Kohn, and Sham (1964--1965).

**Hohenberg--Kohn theorems.** (1) The ground-state energy of a many-electron system is a unique
Functional of the electron density $n(\mathbf{r})$. (2) The correct ground-state density minimises
This functional.

**Kohn--Sham equations.** The interacting system is mapped to a fictitious system of non-interacting
Electrons in an effective potential:

$$\left[-\frac{\hbar^2}{2m}\nabla^2 + V_{\mathrm{eff}(\mathbf{r})\right]\psi_i(\mathbf{r}) = \varepsilon_i\psi_i(\mathbf{r})}$$

Where $V_{\mathrm{eff} = V_{\mathrm{ext} + V_H[n] + V_{\mathrm{xc}[n]}}}$. Here $V_{\mathrm{ext}}$
is the External (ionic) potential, $V_H$ is the Hartree (classical Coulomb) potential, and
$V_{\mathrm{xc}}$ Is the exchange-correlation potential.

The electron density is $n(\mathbf{r}) = \sum_i \lvert\psi_i(\mathbf{r})\rvert^2$ (summing over
occupied States). The Kohn--Sham equations are solved self-consistently.

**Common approximations for $V_{\mathrm{xc}}$:**

- **Local density approximation (LDA):**
  $V_{\mathrm{xc}(\mathbf{r}) = V_{\mathrm{xc}^{\mathrm{hom}(n(\mathbf{r}))}}}$ using the
  exchange-correlation energy of a homogeneous electron gas. Good for simple metals but tends to
  underestimate band gaps.
- **Generalised gradient approximation (GGA):** Includes the density gradient
  $\nabla n(\mathbf{r})$Improving accuracy for structural properties and band gaps.
- **Hybrid functionals (e.g., HSE06):** Mix a fraction of exact Hartree--Fock exchange with DFT
  exchange, giving improved band gaps at higher computational cost.

DFT accurately predicts structural properties (lattice constants, elastic constants, phonon
Frequencies within a few percent) but is less reliable for band gaps (LDA underestimates By
30--50\%) and strongly correlated systems (e.g., transition metal oxides).



:::
