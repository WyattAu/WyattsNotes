---
title: Many-Body Physics in Solids
tags:
  - Physics
  - University
---

### 14.1 Electron--Electron Interactions: Screening

In a metal, the Coulomb interaction between electrons is screened by the other electrons. The
**Thomas--Fermi screening wavevector**:

$$q_{\text{TF}^2 = \frac{e^2 g(\varepsilon_F)}{\varepsilon_0} = \frac{4k_F}{\pi a_0}}$$

Where $a_0 = 4\pi\varepsilon_0\hbar^2/(m_e e^2)$ is the Bohr radius. The screened potential:

$$V_{\text{scr}(r) = \frac{e^2}{4\pi\varepsilon_0 r}\,e^{-q_{\text{TF} r}}}$$

The screening length $\lambda_{\text{TF} = 1/q_{\text{TF} \sim 0.5}}$ Å in metals (about one atomic
spacing), meaning the Coulomb interaction is very short-ranged.

### 14.2 The Hubbard Model

The Hubbard model captures the competition between kinetic energy (delocalisation) and on-site
Coulomb repulsion (localisation):

$$\hat{H} = -t\sum_{\langle i,j\rangle,\sigma}\hat{c}_{i\sigma}^\dagger\hat{c}_{j\sigma} + U\sum_i \hat{n}_{i\uparrow}\hat{n}_{i\downarrow}$$

Where $t$ is the hopping integral and $U$ is the on-site repulsion energy.

**Limiting cases:**

- $U \ll t$: Weakly correlated metal (well-described by band theory)
- $U \gg t$: Mott insulator (each site has exactly one electron, localised by strong repulsion)
- $U/t \sim 1$: Strongly correlated regime (intermediate coupling), relevant for transition metal
  oxides

The half-filled Hubbard model on a bipartite lattice has a metal--insulator transition at
$U_c \sim W$ (bandwidth). For $U > U_c$The system is a Mott insulator even though band theory
predicts a metal.

### 14.3 Quasiparticles and Fermi Liquid Theory

Landau's **Fermi liquid theory** (1956) states that the low-energy excitations of an interacting
Fermi system can be described as **quasiparticles** --- weakly interacting fermions with
renormalised parameters:

- Effective mass $m^*$ (renormalised by interactions)
- Residual quasiparticle--quasiparticle interactions described by Landau parameters $F_l$

The quasiparticle lifetime goes as $\tau \propto 1/(\varepsilon - \varepsilon_F)^2$So quasiparticles
near the Fermi surface are well-defined (long-lived).

**Experimental signatures of Fermi liquid behaviour:**

- $C_V = \gamma T$ with enhanced $\gamma \propto m^*$
- $\rho = \rho_0 + AT^2$ (quadratic temperature dependence)
- Pauli-like susceptibility $\chi$ (temperature-independent)

**Non-Fermi liquid** behaviour occurs in many correlated systems (cuprates near optimal doping,
heavy fermion materials near quantum critical points) where $\rho \propto T$ (linear) or other
anomalous power laws are observed.

### 14.4 Kondo Effect

When a magnetic impurity (e.g., a single Fe atom) is embedded in a non-magnetic metal, the impurity
spin is screened by conduction electrons at low temperature, forming a singlet state. This is the
**Kondo effect**.

The Kondo temperature $T_K$ sets the energy scale:

$$k_B T_K \sim D\,e^{-1/(N(E_F)J)}$$

Where $D$ is the bandwidth and $J$ is the exchange coupling. Below $T_K$:

- The resistivity increases logarithmically: $\Delta\rho \propto \ln(T_K/T)$
- The impurity moment is fully screened
- A narrow resonance (Kondo resonance) appears at the Fermi level in the density of states

<details>
<summary>Worked Example 14.1: Mott Transition</summary>

Consider the Hubbard model at half-filling on a Bethe lattice (infinite coordination number) with
bandwidth $W = 12t$.

The Mott transition occurs when $U \sim W$. For typical transition metal oxides:

- VO$_2$: $U \sim 1$--$2$ eV, $W \sim 2$ eV --- near the transition (VO$_2$ undergoes a
  metal--insulator transition at $T_c = 340$ K)
- NiO: $U \sim 5$--$8$ eV, $W \sim 2$ eV --- deep in the insulating regime
- SrVO$_3$: $U \sim 1$--$3$ eV, $W \sim 3$ eV --- correlated metal

In the Mott insulator NiO, band theory predicts a partially filled $3d$ band (metal), but strong
correlations open a gap of $\sim 4$ eV between the lower and upper Hubbard bands. This is why DFT
(which underestimates correlations) incorrectly predicts NiO to be metallic, while DFT+$U$ or GW
methods correctly give an insulator.

</details>

<details>
<summary>Worked Example 14.2: Effective Mass Enhancement</summary>

In a heavy fermion material like CeCu$_2$Si$_2$The electronic specific heat coefficient is
$\gamma \approx 1$ J/(mol$\cdot$K$^2$), compared with the free electron value $\gamma_0 \approx 1$
mJ/(mol$\cdot$K$^2$).

The mass enhancement:

$$\frac{m^*}{m_e} = \frac{\gamma}{\gamma_0} \approx \frac{1000}{1} = 1000$$

This enormous enhancement arises from the Kondo effect: the $4f$ electrons of Ce hybridise with
conduction electrons, forming heavy quasiparticles. The Kondo temperature $T_K \sim 10$ K is the
characteristic energy scale.

Similarly, the Pauli susceptibility is enhanced: $\chi/\chi_0 = m^*/m_e = 1000$.

</details>

