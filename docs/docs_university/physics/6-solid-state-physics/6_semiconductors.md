---
title: Semiconductors
tags:
  - Physics
  - University
---

### 6.1 Intrinsic Semiconductors

At $T = 0$The valence band is completely filled and the conduction band is completely empty. There
is a band gap $E_g$.

At finite $T$Electrons are thermally excited across the gap. The intrinsic carrier concentration:

$$n_i = p_i = \sqrt{N_c N_v}\, e^{-E_g/(2k_B T)}$$

Where $N_c$ and $N_v$ are the effective density of states in the conduction and valence bands:

$$N_c = 2\left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}, \quad N_v = 2\left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$$

Here $m_e^*$ and $m_h^*$ are the effective masses of electrons and holes.

**Fermi level** in an intrinsic semiconductor:
$E_F = (E_c + E_v)/2 + \frac{3}{4}k_B T\ln(m_h^*/m_e^*)$. For $m_e^* = m_h^*$: $E_F = E_g/2$.

### 6.2 Extrinsic Semiconductors

**n-type:** Doping with donor atoms (e.g., P in Si) that donate electrons to the conduction band.
Majority carriers: electrons.

**p-type:** Doping with acceptor atoms (e.g., B in Si) that accept electrons from the valence band,
Creating holes. Majority carriers: holes.

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
- **Depletion width:**
  $W = \sqrt{\frac{2\varepsilon_s V_0}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)}$ where
  $\varepsilon_s$ is the permittivity of the semiconductor.

**Current-voltage characteristic (Shockley equation):**

$$I = I_0\left(e^{eV/(k_B T)} - 1\right)$$

Where $I_0$ is the reverse saturation current. Forward bias ($V \gt 0$) exponentially increases the
Current. Reverse bias ($V \lt 0$) gives approximately $I \approx -I_0$.

**Derivation of the built-in potential.** In equilibrium, the Fermi level is constant. The potential
Difference between the n-side (where $E_F$ is near $E_c$) and the p-side (where $E_F$ is near $E_v$)
Is:

$$eV_0 = E_{c,n} - E_{c,p} = E_g - (E_c - E_F)_n - (E_F - E_v)_p$$

Using $n = N_c e^{-(E_c - E_F)/(k_B T)}$ and $p = N_v e^{-(E_F - E_v)/(k_B T)}$ with $np = n_i^2$:

$$V_0 = \frac{k_B T}{e}\ln\left(\frac{N_A N_D}{n_i^2}\right)$$

$\blacksquare$

**Capacitance.** The depletion region acts as a parallel-plate capacitor:

$$C = \frac{\varepsilon_s A}{W} = A\sqrt{\frac{e\varepsilon_s}{2}\frac{N_A N_D}{N_A + N_D}\frac{1}{V_0 - V}}$$

This $C \propto 1/\sqrt{V_0 - V}$ dependence is used experimentally to determine $N_A$ and $N_D$
(C--V profiling).

### 6.4 Band Diagrams

In equilibrium, the Fermi level is constant across the junction. Under forward bias, the bands on
The n-side are raised relative to the p-side, reducing the barrier. Under reverse bias, the barrier
Is increased.

### 6.5 Band Gap Engineering

The electronic and optical properties of semiconductors can be tailored by forming
**heterostructures** --- junctions between different semiconductor materials.

**Band offsets.** When two semiconductors with different band gaps are joined, the conduction band
Minimum and valence band maximum are offset. The **type-I** (straddling) alignment has the band gap
Of one material contained within the gap of the other (e.g., GaAs/AlGaAs). The **type-II**
(staggered) alignment has the conduction and valence band edges of different materials at different
Energies (e.g., InAs/GaSb).

**Quantum wells.** A thin layer of a narrow-gap semiconductor (e.g., 10 nm of GaAs) sandwiched
Between wide-gap barriers (e.g., AlGaAs) confines electrons and holes in one dimension. The
Confinement energy for an infinite well of width $L$:

$$E_n = \frac{n^2 \pi^2 \hbar^2}{2m^* L^2}$$

This quantisation raises the effective band gap, allowing the optical transition energy to be tuned
By varying $L$.

**Quantum wires and dots.** Further confinement in two dimensions (quantum wire) or three dimensions
(quantum dot) leads to additional quantisation. Quantum dots have discrete, atom-like energy levels
And are often called "artificial atoms."

**Strain engineering.** Lattice mismatch between a thin film and its substrate induces strain,
Modifying the band structure. Tensile strain reduces the band gap, while compressive Strain can lift
degeneracies (e.g., splitting the heavy-hole and light-hole bands).

### 6.6 Optical Properties of Semiconductors

**Absorption.** A photon of energy $\hbar\omega$ can be absorbed if $\hbar\omega \geq E_g$Promoting
An electron from the valence band to the conduction band.

- **Direct band gap** (e.g., GaAs, InP): The conduction band minimum and valence band maximum occur
  at the same $\mathbf{k}$. Photon absorption requires only energy conservation (the photon momentum
  $\hbar\omega/c \approx 0$ is negligible). The absorption coefficient rises sharply above $E_g$:

  $$\alpha(\omega) \propto \sqrt{\hbar\omega - E_g}$$

- **Indirect band gap** (e.g., Si, Ge): The band edges occur at different $\mathbf{k}$. A phonon is
  required to conserve momentum, making the absorption weaker and temperature-dependent:

  $$\alpha(\omega) \propto \frac{(\hbar\omega - E_g - \hbar\Omega)^2}{e^{\hbar\Omega/k_BT} - 1} + \frac{(\hbar\omega - E_g + \hbar\Omega)^2}{1 - e^{-\hbar\Omega/k_BT}}$$

where $\hbar\Omega$ is the phonon energy.

**Excitons.** The electron and hole created by photon absorption are attracted by the Coulomb
Interaction, forming a bound state called an **exciton** with binding energy:

$$E_{\mathrm{ex} = \frac{\mu e^4}{2(4\pi\varepsilon_s)^2\hbar^2} = \frac{\mu}{m_e\varepsilon_r^2} \times 13.6\ \mathrm{eV}}$$

Where $\mu = m_e^* m_h^*/(m_e^* + m_h^*)$ is the reduced mass and $\varepsilon_r$ is the relative
Permittivity. Excitons produce sharp absorption lines slightly below $E_g$.

**Photoluminescence.** When electron--hole pairs recombine radiatively, photons are emitted at
Energies near $E_g$. Direct-gap materials are efficient light emitters (used in LEDs and laser
Diodes). Indirect-gap materials like Si have very low radiative efficiency.

<details>
<summary>Worked Example: Intrinsic Carrier Concentration in Silicon</summary>

For Si at $T = 300$ K: $E_g = 1.12$ eV, $m_e^* = 1.08\,m_e$, $m_h^* = 0.56\,m_e$.

$$N_c = 2\left(\frac{2\pi \times 1.08 \times 9.11 \times 10^{-31} \times 1.381 \times 10^{-23} \times 300}{(6.626 \times 10^{-34})^2}\right)^{3/2} = 2.81 \times 10^{25}\ \mathrm{m}^{-3}$$

$$N_v = 2\left(\frac{2\pi \times 0.56 \times 9.11 \times 10^{-31} \times 1.381 \times 10^{-23} \times 300}{(6.626 \times 10^{-34})^2}\right)^{3/2} = 1.04 \times 10^{25}\ \mathrm{m}^{-3}$$

$$n_i = \sqrt{N_c N_v}\,e^{-E_g/(2k_B T)} = \sqrt{2.81 \times 1.04} \times 10^{25} \times e^{-1.12/(2 \times 0.02585)}$$

$$n_i = 1.71 \times 10^{25} \times e^{-21.66} = 1.71 \times 10^{25} \times 3.95 \times 10^{-10} = 6.75 \times 10^{15}\ \mathrm{m}^{-3}$$

The accepted value is $n_i \approx 1.5 \times 10^{16}\ \mathrm{m}^{-3}$ at 300 K.

</details>

### 6.7 Semiconductor Devices

**Light-emitting diodes (LEDs).** Under forward bias, electrons and holes are injected into the
Depletion region where they recombine radiatively. The emission wavelength is determined by the Band
gap: $\lambda = hc/E_g$. GaAs ($E_g = 1.42$ eV) emits in the infrared; GaN ($E_g = 3.4$ eV) Emits in
the ultraviolet; InGaN alloys span the visible spectrum.

**Solar cells.** A p-n junction under illumination generates electron--hole pairs. The built-in
Field separates them, producing a photocurrent. The open-circuit voltage satisfies
$V_{\mathrm{OC} \lt E_g/e}$ ( $V_{\mathrm{OC} \approx 0.7\,E_g/e}$). The power conversion Efficiency
is limited by the **Shockley--Queisser limit** ($\sim 33\%$ for a single junction) Due to spectral
mismatch, thermalisation, and radiative recombination losses.

**Field-effect transistor (FET).** A voltage applied to a gate electrode modulates the conductivity
Of a semiconductor channel. In a MOSFET (metal--oxide--semiconductor FET), the gate voltage creates
An inversion layer at the oxide--semiconductor interface, forming a conductive channel. The
Threshold voltage $V_T$ depends on the oxide thickness, doping, and work function difference.

**HEMTs and HBTs.** High-electron-mobility transistors (HEMTs) use heterojunctions (e.g.,
AlGaAs/GaAs) to create a two-dimensional electron gas (2DEG) with very high mobility. Heterojunction
Bipolar transistors (HBTs) use a wide-gap emitter to improve injection efficiency.

