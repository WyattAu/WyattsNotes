---
title: Superconductivity
tags:
  - Physics
  - University
---

### 7.1 Basic Phenomenology

**Superconductivity** is the complete loss of electrical resistance below a critical temperature
$T_c$. Discovered by Onnes in 1911 (mercury, $T_c = 4.2$ K).

Key experimental facts:

1. **Zero resistance:** $\rho = 0$ for $T \lt T_c$.
2. **Meissner effect:** Complete expulsion of magnetic flux from the interior: $\mathbf{B} = 0$
   inside a superconductor (for $T \lt T_c$ and $B \lt B_c$).
3. **Critical magnetic field:** Superconductivity is destroyed above
   $B_c(T) = B_c(0)[1 - (T/T_c)^2]$.
4. **Critical current density:** Superconductivity is destroyed above a critical current density
   $J_c$.

### 7.2 London Equations

The **London equations** describe the electromagnetic response of a superconductor:

$$\frac{\partial \mathbf{J}_s}{\partial t} = \frac{n_s e^2}{m_e}\mathbf{E}$$

$$\nabla \times \mathbf{J}_s = -\frac{n_s e^2}{m_e}\mathbf{B}$$

Where $n_s$ is the density of superconducting electrons.

Combining with Maxwell's equations:

$$\nabla^2 \mathbf{B} = \frac{1}{\lambda_L^2}\mathbf{B}$$

Where $\lambda_L = \sqrt{m_e/(\mu_0 n_s e^2)}$ is the **London penetration depth**.

The solution $\mathbf{B}(x) = B_0 e^{-x/\lambda_L}$ shows that magnetic fields decay exponentially
Inside the superconductor, explaining the Meissner effect.

### 7.3 BCS Theory

**BCS theory** (Bardeen, Cooper, Schrieffer, 1957) explains superconductivity through the formation
Of **Cooper pairs**.

**Cooper pairing.** Two electrons with opposite momenta and spins form a bound state via the
Electron-phonon interaction (the lattice mediates an effective attractive interaction). The Cooper
pair Has charge $2e$ and spin 0 (boson).

**The BCS gap equation:**

$$\Delta = V_{\mathrm{pair} \sum_{\mathbf{k}} \frac{\Delta}{2E_{\mathbf{k}}} \tanh\left(\frac{E_{\mathbf{k}}}{2k_B T}\right)}$$

Where $E_{\mathbf{k}} = \sqrt{\xi_{\mathbf{k}}^2 + \Delta^2}$ is the quasiparticle energy,
$\xi_{\mathbf{k}}$ Is the normal-state energy relative to $E_F$And $\Delta$ is the superconducting
energy gap.

At $T = 0$: $\Delta(0) = 2\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair})}}$ (BCS formula).

The critical temperature:

$$k_B T_c = 1.13\,\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair})}}$$

The ratio $2\Delta(0)/(k_B T_c) \approx 3.53$ is a universal BCS prediction.

### 7.4 Type I and Type II Superconductors

**Type I:** One critical field $B_c$. Below $B_c$: complete Meissner effect. Above $B_c$: normal
State. Examples: Pb, Hg, Al.

**Type II:** Two critical fields $B_{c1} \lt B_{c2}$. For $B_{c1} \lt B \lt B_{c2}$: **mixed state**
(vortices with normal cores in a superconducting matrix). For $B \gt B_{c2}$: normal state.
Examples: Nb, YBCO (high-$T_c$).

### 7.5 High-Temperature Superconductors

Discovered in 1986 (Bednorz and Müller). Cuprate superconductors such as YBa$_2$Cu$_3$O$_{7-\delta}$
(YBCO) have $T_c$ up to $\sim 135$ K. These are Type II, layered, and not fully explained by BCS
Theory (the pairing mechanism is still debated).

**Key properties of high-$T_c$ superconductors:**

- **d-wave pairing symmetry:** Unlike conventional BCS superconductors (s-wave), cuprates have a gap
  function with $d_{x^2-y^2}$ symmetry: $\Delta(\mathbf{k}) = \Delta_0(\cos k_x - \cos k_y)/2$ which
  vanishes along the nodal directions $k_x = \pm k_y$.
- **Short coherence length:** $\xi \sim 1$--$2$ nm (compared with $\sim 100$ nm for conventional
  superconductors), making them sensitive to defects but allowing high critical current densities.
- **Strong anisotropy:** Superconducting properties differ dramatically between the $ab$-planes and
  the $c$-axis direction.
- **Pseudogap phase:** Above $T_c$ but below a characteristic temperature $T^*$A partial gap opens
  in the electronic spectrum, suggesting precursive pairing correlations.
- **Phase diagram:** Doping controls the transition from antiferromagnetic insulator (underdoped)
  through the superconducting dome to a normal metal (overdoped).

Other families of high-$T_c$ superconductors include iron-based pnictides ($T_c$ up to 56 K),
Magnesium diboride MgB$_2$ ($T_c = 39$ K), and the recently discovered nickelates and hydrides
($T_c$ up to $\sim 250$ K under extreme pressure).

