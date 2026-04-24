---
title: Solid State Physics
date: 2026-04-24T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: solid-state-physics
---

## 1. Crystal Structures

### 1.1 Lattices and Basis

A crystal is defined by a **lattice** (infinite array of points with translational symmetry) and a
**basis** (the arrangement of atoms associated with each lattice point).

The lattice is specified by **primitive lattice vectors** $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$
such that every lattice point is at:

$$\mathbf{R} = n_1\mathbf{a}_1 + n_2\mathbf{a}_2 + n_3\mathbf{a}_3, \quad n_i \in \mathbb{Z}$$

### 1.2 Bravais Lattices

There are **14 Bravais lattices** in three dimensions, classified into 7 crystal systems:

| System | Lattices | Constraints |
|---|---|---|
| Cubic | SC, BCC, FCC | $a = b = c$, $\alpha = \beta = \gamma = 90^\circ$ |
| Tetragonal | P, I | $a = b \neq c$, $\alpha = \beta = \gamma = 90^\circ$ |
| Orthorhombic | P, C, I, F | $a \neq b \neq c$, $\alpha = \beta = \gamma = 90^\circ$ |
| Monoclinic | P, C | $a \neq b \neq c$, $\alpha = \gamma = 90^\circ \neq \beta$ |
| Triclinic | P | $a \neq b \neq c$, $\alpha \neq \beta \neq \gamma$ |
| Hexagonal | P | $a = b \neq c$, $\alpha = \beta = 90^\circ$, $\gamma = 120^\circ$ |
| Trigonal | R | $a = b = c$, $\alpha = \beta = \gamma \neq 90^\circ$ |

**Notation:** P = primitive, I = body-centred, F = face-centred, C = base-centred, R = rhombohedral.

### 1.3 Common Crystal Structures

**Simple Cubic (SC):** One atom per unit cell. Coordination number $= 6$. Packing fraction $= \pi/6 \approx 0.52$.

**Body-Centred Cubic (BCC):** Atoms at corners and body centre. Two atoms per cell. Coordination
number $= 8$. Packing fraction $= \sqrt{3}\pi/8 \approx 0.68$. Examples: Fe ($\alpha$-iron), W, Cr.

**Face-Centred Cubic (FCC):** Atoms at corners and face centres. Four atoms per cell. Coordination
number $= 12$. Packing fraction $= \sqrt{2}\pi/6 \approx 0.74$. Examples: Cu, Al, Au, Ag.

**Hexagonal Close-Packed (HCP):** Two atoms per primitive cell. Coordination number $= 12$. Same
packing fraction as FCC. Examples: Zn, Mg, Ti.

**Diamond structure:** Two interpenetrating FCC lattices offset by $(a/4, a/4, a/4)$. Eight atoms per
conventional cell. Examples: C (diamond), Si, Ge.

### 1.4 Miller Indices

A plane with Miller indices $(hkl)$ intersects the crystallographic axes at $a/h$, $b/k$, $c/l$.

**Procedure:** (1) Find intercepts with axes in units of lattice constants. (2) Take reciprocals.
(3) Reduce to smallest integers.

Negative indices are written with a bar: $(\bar{h}kl)$. Families of equivalent planes are denoted
$\{hkl\}$.

Directions are written as $[hkl]$; families of equivalent directions as $\langle hkl \rangle$.

### 1.5 Wigner-Seitz Cell

The **Wigner-Seitz cell** is the primitive cell constructed by drawing perpendicular bisector planes
between a lattice point and all its neighbours. It is the region of space closer to the given lattice
point than to any other.

## 2. Reciprocal Lattice

### 2.1 Definition

The **reciprocal lattice vectors** are defined by:

$$\mathbf{b}_1 = 2\pi\frac{\mathbf{a}_2 \times \mathbf{a}_3}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_2 = 2\pi\frac{\mathbf{a}_3 \times \mathbf{a}_1}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_3 = 2\pi\frac{\mathbf{a}_1 \times \mathbf{a}_2}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

Every reciprocal lattice point is at:

$$\mathbf{G} = m_1\mathbf{b}_1 + m_2\mathbf{b}_2 + m_3\mathbf{b}_3, \quad m_i \in \mathbb{Z}$$

**Key property:** $\mathbf{G} \cdot \mathbf{R} = 2\pi \times \mathrm{integer}$, so
$e^{i\mathbf{G}\cdot\mathbf{R}} = 1$.

### 2.2 First Brillouin Zone

The **first Brillouin zone** is the Wigner-Seitz cell of the reciprocal lattice. It is the set of
points closer to the origin than to any other reciprocal lattice point.

For FCC (real space), the reciprocal lattice is BCC. The first Brillouin zone is a truncated octahedron.
For BCC (real space), the reciprocal lattice is FCC.

### 2.3 Reciprocal Lattice and Planes

**Theorem 2.1.** The reciprocal lattice vector $\mathbf{G}_{hkl} = h\mathbf{b}_1 + k\mathbf{b}_2 + l\mathbf{b}_3$
is perpendicular to the real-space planes $(hkl)$, and $|\mathbf{G}_{hkl}| = 2\pi/d_{hkl}$ where
$d_{hkl}$ is the interplanar spacing.

## 3. Diffraction

### 3.1 Bragg's Law

X-ray diffraction from crystal planes produces constructive interference when:

$$2d\sin\theta = n\lambda$$

where $d$ is the interplanar spacing, $\theta$ is the angle of incidence, and $n$ is the order.

**Derivation.** The path difference between waves scattered from adjacent planes is
$2d\sin\theta$. Constructive interference requires this to be an integer multiple of $\lambda$.
$\blacksquare$

### 3.2 The Laue Condition

Diffraction occurs when the scattering vector equals a reciprocal lattice vector:

$$\Delta\mathbf{k} = \mathbf{k}' - \mathbf{k} = \mathbf{G}$$

This is equivalent to Bragg's law. Since $|\mathbf{k}| = |\mathbf{k}'|$ (elastic scattering), the
Laue condition requires $\mathbf{k}$ to terminate on the **Ewald sphere** (a sphere of radius $k$
centred at the tip of $\mathbf{k}$).

### 3.3 Structure Factor

The **structure factor** determines the intensity of diffraction from planes $(hkl)$:

$$S_{hkl} = \sum_j f_j e^{-i\mathbf{G}_{hkl}\cdot\mathbf{d}_j}$$

where $f_j$ is the atomic form factor of atom $j$ at position $\mathbf{d}_j$ in the basis.

**Example: BCC.** Two atoms at $(0,0,0)$ and $(a/2, a/2, a/2)$ in the conventional cell:

$$S_{hkl} = f\left[1 + e^{-i\pi(h+k+l)}\right] = f\left[1 + (-1)^{h+k+l}\right]$$

Reflections are present only when $h + k + l$ is even. When $h + k + l$ is odd, $S_{hkl} = 0$
(systematic absence).

**Example: FCC.** Atoms at $(0,0,0)$, $(a/2,a/2,0)$, $(a/2,0,a/2)$, $(0,a/2,a/2)$:

$$S_{hkl} = f\left[1 + e^{-i\pi(h+k)} + e^{-i\pi(h+l)} + e^{-i\pi(k+l)}\right]$$

Reflections present only when $h, k, l$ are all even or all odd.

## 4. Lattice Vibrations and Phonons

### 4.1 The One-Dimensional Monatomic Chain

Consider $N$ atoms of mass $m$ connected by springs of constant $K$ with equilibrium spacing $a$.

The equation of motion for the $n$-th atom:

$$m\ddot{u}_n = K(u_{n+1} - u_n) + K(u_{n-1} - u_n) = K(u_{n+1} + u_{n-1} - 2u_n)$$

Assuming solutions $u_n = u_0\, e^{i(qna - \omega t)}$:

$$-m\omega^2 = K(e^{iqa} + e^{-iqa} - 2) = 2K(\cos qa - 1) = -4K\sin^2\left(\frac{qa}{2}\right)$$

**Dispersion relation:**

$$\omega(q) = 2\sqrt{\frac{K}{m}}\left|\sin\left(\frac{qa}{2}\right)\right|$$

**Key features:**

- The Brillouin zone is $-\pi/a \leq q \leq \pi/a$.
- Linear for small $q$: $\omega \approx v_s |q|$ where $v_s = a\sqrt{K/m}$ is the speed of sound.
- Group velocity: $v_g = d\omega/dq = a\sqrt{K/m}\cos(qa/2)$.
- Maximum frequency: $\omega_{\mathrm{max}} = 2\sqrt{K/m}$.

### 4.2 The Diatomic Chain

For a chain with alternating masses $m_1$ and $m_2$ (e.g., NaCl):

$$\omega^2 = K\left(\frac{1}{m_1} + \frac{1}{m_2}\right) \pm K\sqrt{\left(\frac{1}{m_1} + \frac{1}{m_2}\right)^2 - \frac{4\sin^2(qa/2)}{m_1 m_2}}$$

This gives two branches:

- **Acoustic branch** ($-$ sign): $\omega \to 0$ as $q \to 0$. Atoms in the unit cell move in phase.
- **Optical branch** ($+$ sign): $\omega \neq 0$ at $q = 0$. Atoms in the unit cell move out of phase.
  Can interact with light (hence the name).

### 4.3 Quantisation: Phonons

Lattice vibrations are quantised. Each normal mode of wave vector $\mathbf{q}$ and branch $s$ has
energy:

$$E_{\mathbf{q}s} = \left(n_{\mathbf{q}s} + \frac{1}{2}\right)\hbar\omega_{\mathbf{q}s}$$

where $n_{\mathbf{q}s}$ is the phonon occupation number. Phonons are bosons obeying Bose-Einstein
statistics:

$$\langle n_{\mathbf{q}s} \rangle = \frac{1}{e^{\beta\hbar\omega_{\mathbf{q}s}} - 1}$$

### 4.4 Debye Model

The Debye model approximates the phonon spectrum as linear ($\omega = v_s q$) up to a cutoff frequency
$\omega_D$ (the Debye frequency):

$$\omega_D = v_s\left(\frac{6\pi^2 N}{V}\right)^{1/3}$$

The **Debye temperature:** $\Theta_D = \hbar\omega_D / k_B$.

**Phonon density of states:**

$$g(\omega) = \frac{3V\omega^2}{2\pi^2 v_s^3}, \quad 0 \leq \omega \leq \omega_D$$

**Lattice heat capacity:**

$$C_V = 9Nk_B\left(\frac{T}{\Theta_D}\right)^3 \int_0^{\Theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\,dx$$

**High-temperature limit** ($T \gg \Theta_D$): $C_V = 3Nk_B$ (Dulong-Petit law).

**Low-temperature limit** ($T \ll \Theta_D$): $C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3$
(Debye $T^3$ law).

### 4.5 Einstein Model

The Einstein model treats all atoms as independent quantum harmonic oscillators with the same frequency
$\omega_E$:

$$C_V = 3Nk_B\left(\frac{\Theta_E}{T}\right)^2 \frac{e^{\Theta_E/T}}{(e^{\Theta_E/T} - 1)^2}$$

where $\Theta_E = \hbar\omega_E/k_B$. This gives the correct high-$T$ limit but predicts
$C_V \propto e^{-\Theta_E/T}$ at low $T$, which disagrees with the Debye $T^3$ law (and experiment).

## 5. Electronic Band Structure

### 5.1 Free Electron Model

In the simplest model, conduction electrons move freely in a box of volume $V$ (the "jellium" model).
The allowed wave vectors are:

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

**Derivation.** The number of states with $|\mathbf{k}| \leq k$ is:

$$N(k) = 2 \cdot \frac{V}{(2\pi)^3} \cdot \frac{4\pi k^3}{3}$$

where the factor of 2 accounts for spin. Differentiating:
$g(k)\,dk = dN/dk\,dk = (Vk^2/\pi^2)\,dk$. Converting to energy:
$g(\varepsilon) = g(k)|dk/d\varepsilon| = (Vk^2/\pi^2)(m_e/\hbar^2 k)$. $\blacksquare$

### 5.3 Bloch's Theorem

**Theorem 5.1 (Bloch, 1928).** The eigenstates of the one-electron Hamiltonian in a periodic
potential $V(\mathbf{r} + \mathbf{R}) = V(\mathbf{r})$ can be written as:

$$\psi_{n\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}} u_{n\mathbf{k}}(\mathbf{r})$$

where $u_{n\mathbf{k}}(\mathbf{r})$ has the periodicity of the lattice: $u_{n\mathbf{k}}(\mathbf{r} + \mathbf{R}) = u_{n\mathbf{k}}(\mathbf{r})$.

**Proof.** The translation operators $\hat{T}_{\mathbf{R}}$ commute with the Hamiltonian
$\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})$ since $V$ is periodic. Therefore, the
eigenstates of $\hat{H}$ can be chosen as simultaneous eigenstates of all $\hat{T}_{\mathbf{R}}$:

$$\hat{T}_{\mathbf{R}}\psi(\mathbf{r}) = \psi(\mathbf{r} + \mathbf{R}) = c_{\mathbf{R}}\psi(\mathbf{r})$$

From the composition rule $\hat{T}_{\mathbf{R}_1}\hat{T}_{\mathbf{R}_2} = \hat{T}_{\mathbf{R}_1 + \mathbf{R}_2}$:

$$c_{\mathbf{R}_1 + \mathbf{R}_2} = c_{\mathbf{R}_1} c_{\mathbf{R}_2}$$

The only solution of this functional equation is $c_{\mathbf{R}} = e^{i\mathbf{k}\cdot\mathbf{R}}$.
Therefore $\psi(\mathbf{r} + \mathbf{R}) = e^{i\mathbf{k}\cdot\mathbf{R}}\psi(\mathbf{r})$, which is
satisfied by $\psi(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}}u_{\mathbf{k}}(\mathbf{r})$ with
$u_{\mathbf{k}}$ periodic. $\blacksquare$

**Consequences:**

- $\mathbf{k}$ is defined only up to a reciprocal lattice vector: $\mathbf{k}$ and $\mathbf{k} + \mathbf{G}$
  are equivalent.
- The energy spectrum consists of **bands** $\varepsilon_n(\mathbf{k})$, each labelled by a band index $n$.
- Band gaps appear between allowed energy bands.

### 5.4 Nearly Free Electron Model

Starting from the free electron model, a weak periodic potential $V(\mathbf{r}) = \sum_{\mathbf{G}} V_{\mathbf{G}} e^{i\mathbf{G}\cdot\mathbf{r}}$
opens gaps at the Brillouin zone boundaries where $|\mathbf{k}| = |\mathbf{k} + \mathbf{G}|$ (Bragg
condition).

At the zone boundary $\mathbf{k} = \mathbf{G}/2$, the gap is:

$$\Delta\varepsilon = 2|V_{\mathbf{G}}|$$

**Derivation.** Near the zone boundary, the free electron states at $\mathbf{k}$ and $\mathbf{k} - \mathbf{G}$
are degenerate: $\varepsilon_{\mathbf{k}}^0 = \varepsilon_{\mathbf{k} - \mathbf{G}}^0$. Degenerate
perturbation theory gives:

$$\det\begin{pmatrix} \varepsilon_{\mathbf{k}}^0 - E & V_{\mathbf{G}} \\ V_{\mathbf{G}}^* & \varepsilon_{\mathbf{k} - \mathbf{G}}^0 - E \end{pmatrix} = 0$$

At $\mathbf{k} = \mathbf{G}/2$: $E = \varepsilon_{\mathbf{G}/2}^0 \pm |V_{\mathbf{G}}|$, so the gap is
$2|V_{\mathbf{G}}|$. $\blacksquare$

## 6. Semiconductors

### 6.1 Intrinsic Semiconductors

At $T = 0$, the valence band is completely filled and the conduction band is completely empty.
There is a band gap $E_g$.

At finite $T$, electrons are thermally excited across the gap. The intrinsic carrier concentration:

$$n_i = p_i = \sqrt{N_c N_v}\, e^{-E_g/(2k_B T)}$$

where $N_c$ and $N_v$ are the effective density of states in the conduction and valence bands:

$$N_c = 2\left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}, \quad N_v = 2\left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$$

Here $m_e^*$ and $m_h^*$ are the effective masses of electrons and holes.

**Fermi level** in an intrinsic semiconductor: $E_F = (E_c + E_v)/2 + \frac{3}{4}k_B T\ln(m_h^*/m_e^*)$.
For $m_e^* = m_h^*$: $E_F = E_g/2$.

### 6.2 Extrinsic Semiconductors

**n-type:** Doping with donor atoms (e.g., P in Si) that donate electrons to the conduction band.
Majority carriers: electrons.

**p-type:** Doping with acceptor atoms (e.g., B in Si) that accept electrons from the valence band,
creating holes. Majority carriers: holes.

For $n$-type with donor concentration $N_D$ (non-degenerate, $T$ not too high):

$$n \approx N_D, \quad p = \frac{n_i^2}{N_D}$$

$$E_F \approx E_c - k_B T \ln\left(\frac{N_c}{N_D}\right)$$

For $p$-type with acceptor concentration $N_A$:

$$p \approx N_A, \quad n = \frac{n_i^2}{N_A}$$

$$E_F \approx E_v + k_B T \ln\left(\frac{N_v}{N_A}\right)$$

**Mass action law:** $np = n_i^2$ holds at thermal equilibrium regardless of doping.

### 6.3 The p-n Junction

At the interface between p-type and n-type material:

- **Depletion region:** Mobile carriers diffuse, leaving behind fixed ionised donors (n-side) and
  acceptors (p-side), creating a built-in electric field.
- **Built-in potential:** $V_0 = \frac{k_B T}{e}\ln\left(\frac{N_A N_D}{n_i^2}\right)$.
- **Depletion width:** $W = \sqrt{\frac{2\varepsilon_s V_0}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)}$
  where $\varepsilon_s$ is the permittivity of the semiconductor.

**Current-voltage characteristic (Shockley equation):**

$$I = I_0\left(e^{eV/(k_B T)} - 1\right)$$

where $I_0$ is the reverse saturation current. Forward bias ($V \gt 0$) exponentially increases the
current. Reverse bias ($V \lt 0$) gives approximately $I \approx -I_0$.

### 6.4 Band Diagrams

In equilibrium, the Fermi level is constant across the junction. Under forward bias, the bands on
the n-side are raised relative to the p-side, reducing the barrier. Under reverse bias, the barrier
is increased.

## 7. Superconductivity

### 7.1 Basic Phenomenology

**Superconductivity** is the complete loss of electrical resistance below a critical temperature
$T_c$. Discovered by Onnes in 1911 (mercury, $T_c = 4.2$ K).

Key experimental facts:

1. **Zero resistance:** $\rho = 0$ for $T \lt T_c$.
2. **Meissner effect:** Complete expulsion of magnetic flux from the interior: $\mathbf{B} = 0$ inside
   a superconductor (for $T \lt T_c$ and $B \lt B_c$).
3. **Critical magnetic field:** Superconductivity is destroyed above $B_c(T) = B_c(0)[1 - (T/T_c)^2]$.
4. **Critical current density:** Superconductivity is destroyed above a critical current density $J_c$.

### 7.2 London Equations

The **London equations** describe the electromagnetic response of a superconductor:

$$\frac{\partial \mathbf{J}_s}{\partial t} = \frac{n_s e^2}{m_e}\mathbf{E}$$

$$\nabla \times \mathbf{J}_s = -\frac{n_s e^2}{m_e}\mathbf{B}$$

where $n_s$ is the density of superconducting electrons.

Combining with Maxwell's equations:

$$\nabla^2 \mathbf{B} = \frac{1}{\lambda_L^2}\mathbf{B}$$

where $\lambda_L = \sqrt{m_e/(\mu_0 n_s e^2)}$ is the **London penetration depth**.

The solution $\mathbf{B}(x) = B_0 e^{-x/\lambda_L}$ shows that magnetic fields decay exponentially
inside the superconductor, explaining the Meissner effect.

### 7.3 BCS Theory

**BCS theory** (Bardeen, Cooper, Schrieffer, 1957) explains superconductivity through the formation
of **Cooper pairs**.

**Cooper pairing.** Two electrons with opposite momenta and spins form a bound state via the
electron-phonon interaction (the lattice mediates an effective attractive interaction). The Cooper pair
has charge $2e$ and spin 0 (boson).

**The BCS gap equation:**

$$\Delta = V_{\mathrm{pair}} \sum_{\mathbf{k}} \frac{\Delta}{2E_{\mathbf{k}}} \tanh\left(\frac{E_{\mathbf{k}}}{2k_B T}\right)$$

where $E_{\mathbf{k}} = \sqrt{\xi_{\mathbf{k}}^2 + \Delta^2}$ is the quasiparticle energy, $\xi_{\mathbf{k}}$
is the normal-state energy relative to $E_F$, and $\Delta$ is the superconducting energy gap.

At $T = 0$: $\Delta(0) = 2\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair}})}$ (BCS formula).

The critical temperature:

$$k_B T_c = 1.13\,\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair}})}$$

The ratio $2\Delta(0)/(k_B T_c) \approx 3.53$ is a universal BCS prediction.

### 7.4 Type I and Type II Superconductors

**Type I:** One critical field $B_c$. Below $B_c$: complete Meissner effect. Above $B_c$: normal
state. Examples: Pb, Hg, Al.

**Type II:** Two critical fields $B_{c1} \lt B_{c2}$. For $B_{c1} \lt B \lt B_{c2}$: **mixed state**
(vortices with normal cores in a superconducting matrix). For $B \gt B_{c2}$: normal state.
Examples: Nb, YBCO (high-$T_c$).

### 7.5 High-Temperature Superconductors

Discovered in 1986 (Bednorz and Muller). Cuprate superconductors such as YBa$_2$Cu$_3$O$_{7-\delta}$
(YBCO) have $T_c$ up to $\sim 135$ K. These are Type II, layered, and not fully explained by BCS
theory (the pairing mechanism is still debated).

## 8. Transport Properties

### 8.1 Electrical Conductivity: Drude Model

The **Drude model** treats conduction electrons as a classical gas scattering off ions with a mean
free time $\tau$.

Under an electric field $\mathbf{E}$, the equation of motion:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

In steady state ($d\mathbf{v}/dt = 0$): $\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$.

The current density: $\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

The **Drude conductivity:**

$$\sigma = \frac{ne^2\tau}{m_e}$$

The **mean free path:** $\ell = v_F\tau$.

**Successes:** Explains Ohm's law ($\mathbf{J} = \sigma\mathbf{E}$) and the Wiedemann-Franz law
($\kappa/\sigma = LT$ with $L = \pi^2 k_B^2/(3e^2)$).

**Failures:** Predicts the wrong temperature dependence ($\rho \propto T$, but experiments show
$\rho \propto T^5$ at low $T$ for pure metals). Predicts $\gamma_{\mathrm{electron}} = \frac{3}{2}nk_B$
but experiments give $\gamma_{\mathrm{electron}} = \frac{\pi^2}{2}nk_B(T/T_F)$ (much smaller).

### 8.2 The Boltzmann Transport Equation

The semiclassical distribution function $f(\mathbf{r}, \mathbf{k}, t)$ satisfies:

$$\frac{\partial f}{\partial t} + \mathbf{v}_{\mathbf{k}} \cdot \nabla_{\mathbf{r}} f - \frac{e\mathbf{E}}{\hbar}\cdot\nabla_{\mathbf{k}} f = \left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}$$

In the **relaxation time approximation:**

$$\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}} = -\frac{f - f_0}{\tau}$$

where $f_0$ is the equilibrium distribution.

**Solution for conductivity.** In a uniform electric field with $f = f_0 + f_1$:

$$f_1 = e\tau\mathbf{E}\cdot\mathbf{v}_{\mathbf{k}}\frac{\partial f_0}{\partial\varepsilon}$$

The conductivity becomes:

$$\sigma = \frac{e^2}{3}\int \tau(\varepsilon)\,v^2(\varepsilon)\,g(\varepsilon)\left(-\frac{\partial f_0}{\partial\varepsilon}\right) d\varepsilon$$

At low $T$, $-\partial f_0/\partial\varepsilon \approx \delta(\varepsilon - \varepsilon_F)$, so only states
near $E_F$ contribute to transport.

### 8.3 Thermal Conductivity

The thermal conductivity of electrons:

$$\kappa_e = \frac{1}{3}c_e v_F \ell_e$$

where $c_e = \frac{\pi^2}{2}nk_B(T/T_F)$ is the electronic specific heat. The phonon contribution:

$$\kappa_{\mathrm{ph}} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}$$

The total thermal conductivity: $\kappa = \kappa_e + \kappa_{\mathrm{ph}}$.

### 8.4 The Hall Effect

When a magnetic field $\mathbf{B} = B\hat{\mathbf{z}}$ is applied perpendicular to a current
$\mathbf{J} = J_x\hat{\mathbf{x}}$, a transverse electric field develops:

$$E_y = R_H J_x B$$

The **Hall coefficient:** $R_H = -1/(ne)$ for a single carrier type.

The **Hall angle:** $\theta_H = \arctan(E_y/E_x) = \omega_c\tau$ where $\omega_c = eB/m^*$ is the
cyclotron frequency.

### 8.5 Effective Mass

Near a band extremum, the energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}k_i k_j$$

The **effective mass tensor** $(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
determines the response to external fields. For isotropic bands, $m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
steep band (high mobility).

## 9. Defects in Crystals

### 9.1 Point Defects

- **Vacancy:** Missing atom at a lattice site.
- **Interstitial:** Extra atom between lattice sites.
- **Substitutional:** Foreign atom replacing a host atom.
- **Frenkel defect:** Vacancy-interstitial pair (atom moves to interstitial site).
- **Schottky defect:** Vacancy pair (in ionic crystals, cation and anion vacancies).

**Equilibrium concentration of vacancies:**

$$n_v = N\,e^{-E_v/(k_B T)}$$

where $N$ is the number of lattice sites and $E_v$ is the vacancy formation energy ($\sim 1$ eV).

**Derivation.** Minimising the free energy $F = n_v E_v - T S_{\mathrm{config}}$ where
$S_{\mathrm{config}} = k_B \ln\binom{N}{n_v}$:

$$\frac{\partial F}{\partial n_v} = E_v + k_B T \ln\left(\frac{n_v}{N - n_v}\right) = 0$$

For $n_v \ll N$: $n_v = N e^{-E_v/(k_B T)}$. $\blacksquare$

### 9.2 Dislocations

- **Edge dislocation:** Extra half-plane inserted into the lattice. Burgers vector $\mathbf{b}$ is
  perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is sheared. $\mathbf{b}$ is parallel to the dislocation line.

Dislocations enable **plastic deformation** at stresses far below the theoretical shear strength.
The Peach-Koehler force on a dislocation:

$$\mathbf{F} = (\boldsymbol{\sigma}\cdot\mathbf{b}) \times \hat{\mathbf{t}}$$

where $\boldsymbol{\sigma}$ is the stress tensor and $\hat{\mathbf{t}}$ is the unit tangent to the
dislocation line.

### 9.3 Impact on Properties

Defects strongly affect electrical, mechanical, and thermal properties:
- **Electrical:** Donor and acceptor levels in semiconductors are substitutional defects. Vacancies
  act as scattering centres, reducing conductivity.
- **Mechanical:** Dislocations determine yield strength (Hall-Petch relation). Work hardening
  increases dislocation density.
- **Thermal:** Point defects scatter phonons, reducing thermal conductivity.

## 10. Magnetism in Solids

### 10.1 Types of Magnetism

- **Diamagnetism:** Weak, negative susceptibility ($\chi \lt 0$). Present in all materials. Arises from
  the orbital response to an applied field (Lenz's law). $\chi_d \sim -10^{-5}$.
- **Paramagnetism:** Positive susceptibility ($\chi \gt 0$). Unpaired spins align with the field.
  Curie law: $\chi = C/T$ where $C = N\mu_0\mu_{\mathrm{eff}}^2/(3k_B)$.
- **Ferromagnetism:** Large positive susceptibility. Spontaneous magnetisation below the Curie
  temperature $T_C$.
- **Antiferromagnetism:** Adjacent spins antiparallel. Susceptibility peaks at the Neel temperature $T_N$.
- **Ferrimagnetism:** Antiparallel spins of unequal magnitude. Net magnetisation (e.g., magnetite).

### 10.2 Ferromagnetism and the Mean-Field Theory

In the **mean-field (Weiss) model**, each spin experiences an effective field:

$$B_{\mathrm{eff}} = B_0 + \lambda M$$

where $\lambda$ is the molecular field constant and $M$ is the magnetisation.

The spontaneous magnetisation satisfies:

$$M = N\mu_B\tanh\left(\frac{\mu_B(B_0 + \lambda M)}{k_B T}\right)$$

Setting $B_0 = 0$ and expanding for small $M$ near $T_C$:

$$M \approx \frac{N\mu_B^2\lambda M}{k_B T_C}$$

giving the **Curie temperature:** $T_C = N\mu_B^2\lambda/k_B$.

The critical exponent $\beta = 1/2$ (mean-field value), compared with the experimental value
$\beta \approx 1/3$ (3D Ising universality class).

### 10.3 Magnetic Domains

Below $T_C$, a ferromagnet divides into **domains** of uniform magnetisation, separated by **domain
walls** (Bloch walls). Domain formation reduces the magnetostatic energy.

The **domain wall width:** $\delta \sim \sqrt{A/K}$ where $A$ is the exchange stiffness and $K$ is the
anisotropy constant. Typical values: $\delta \sim 100$ nm.

### 10.4 The de Haas-van Alphen Effect

In a magnetic field, the electron orbits are quantised into **Landau levels**:

$$\varepsilon_n = \left(n + \frac{1}{2}\right)\hbar\omega_c, \quad \omega_c = \frac{eB}{m^*}$$

The density of states oscillates with $1/B$ (de Haas-van Alphen oscillations). The oscillation period
gives the extremal cross-sectional area of the Fermi surface:

$$\Delta\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\mathrm{ext}}}$$

This is the primary experimental technique for mapping Fermi surfaces.

:::caution Common Pitfall
The free electron model and the nearly free electron model give band gaps at different locations.
In the free electron model, gaps open at the Brillouin zone boundaries (where Bragg diffraction
occurs). Do not confuse the real-space lattice constant $a$ with the reciprocal lattice spacing
$2\pi/a$. The first Brillouin zone extends from $-\pi/a$ to $+\pi/a$ in each direction, not from
$0$ to $a$.
:::
