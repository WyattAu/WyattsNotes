---
title: Big Bang Cosmology
tags:
  - Physics
  - University
---

### 7.1 The Friedmann Equations

The dynamics of a homogeneous, isotropic universe are described by the
**Friedmann-Lemaitre-Robertson-Walker (FLRW) metric**:

$$ds^2 = -c^2 dt^2 + a(t)^2\left[\frac{dr^2}{1 - kr^2} + r^2(d\theta^2 + \sin^2\theta\,d\phi^2)\right]$$

Where $a(t)$ is the scale factor and $k \in \{-1, 0, +1\}$ is the curvature parameter.

The **Friedmann equation** (from Einstein's equations with the FLRW metric):

$$H^2 = \left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3}$$

Where $H = \dot{a}/a$ is the Hubble parameter and $\Lambda$ is the cosmological constant.

**Derivation of the Friedmann equation.** Starting from the Einstein field equations:

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$

The FLRW metric gives the Einstein tensor components $G_{00} = 3(\dot{a}^2 + kc^2)/(c^2 a^2)$ and
$G_{ij} = -(2a\ddot{a} + \dot{a}^2 + kc^2)g_{ij}/a^2$. For a perfect fluid with
$T_{\mu\nu} = \mathrm{diag}(\rho c^2, P, P, P)$The $00$ component yields:

$$\frac{3(\dot{a}^2 + kc^2)}{c^2 a^2} + \Lambda = \frac{8\pi G}{c^4}\rho c^2$$

Multiplying through by $c^2 a^2/3$:

$$\dot{a}^2 + kc^2 = \frac{8\pi G}{3}\rho a^2 + \frac{\Lambda c^2 a^2}{3}$$

Dividing by $a^2$:

$$H^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3} \quad \blacksquare$$

The **acceleration equation:**

$$\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3P}{c^2}\right) + \frac{\Lambda c^2}{3}$$

The **fluid equation** (from energy conservation):

$$\dot{\rho} + 3\frac{\dot{a}}{a}\left(\rho + \frac{P}{c^2}\right) = 0$$

### 7.2 Critical Density and Cosmological Parameters

The **critical density:** $\rho_c = \frac{3H_0^2}{8\pi G} \approx 9.2 \times 10^{-27}$ kg/m$^3$.

The **density parameters:** $\Omega_i = \rho_i/\rho_c$With $\sum_i \Omega_i = 1$ for a flat
universe.

Current best-fit values (Planck 2018):

- $\Omega_{\mathrm{matter} \approx 0.315}$ (matter: baryonic + dark)
- $\Omega_b \approx 0.049$ (baryonic matter)
- $\Omega_{\mathrm{DM} \approx 0.266}$ (dark matter)
- $\Omega_\Lambda \approx 0.685$ (dark energy)
- $\Omega_r \approx 9 \times 10^{-5}$ (radiation)
- $H_0 \approx 67.4$ km/s/Mpc

The universe is very close to flat ($\Omega_{\mathrm{total} \approx 1.0007}$).

### 7.3 Solutions for Different Components

For an equation of state $P = w\rho c^2$:

$$\rho \propto a^{-3(1+w)}$$

| Component                           | $w$   | $\rho(a)$ |
| ----------------------------------- | ----- | --------- |
| Matter                              | $0$   | $a^{-3}$  |
| Radiation                           | $1/3$ | $a^{-4}$  |
| Dark energy (cosmological constant) | $-1$  | constant  |

**Derivation.** From the fluid equation with $P = w\rho c^2$:

$$\dot{\rho} + 3\frac{\dot{a}}{a}\rho(1 + w) = 0$$

$$\frac{\dot{\rho}}{\rho} = -3(1+w)\frac{\dot{a}}{a}$$

Integrating: $\ln\rho = -3(1+w)\ln a + \mathrm{const}$Giving $\rho \propto a^{-3(1+w)}$.
$\blacksquare$

- **Matter-dominated era:** $a(t) \propto t^{2/3}$, $H \propto t^{-1}$.
- **Radiation-dominated era:** $a(t) \propto t^{1/2}$, $H \propto t^{-1}$.
- **Dark-energy-dominated era:** $a(t) \propto e^{Ht}$ (exponential expansion).

<details>
<summary>Example 7.1: Scale factor evolution in a matter-dominated universe</summary>

For a flat ($k = 0$), matter-dominated ($P = 0$) universe with $\Lambda = 0$The Friedmann equation
becomes:

$$\left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\rho_0\left(\frac{a_0}{a}\right)^3$$

Where $\rho_0$ is the density at $a = a_0$. Setting $a_0 = 1$:

$$\dot{a}^2 = \frac{8\pi G\rho_0}{3}\,a^{-1}$$

$$\dot{a} = \sqrt{\frac{8\pi G\rho_0}{3}}\,a^{-1/2}$$

Integrating: $\int a^{1/2}\,da = \sqrt{\frac{8\pi G\rho_0}{3}}\int dt$

$$\frac{2}{3}a^{3/2} = \sqrt{\frac{8\pi G\rho_0}{3}}\,t$$

$$a(t) = \left(\frac{3}{2}\sqrt{\frac{8\pi G\rho_0}{3}}\right)^{2/3} t^{2/3}$$

$$a(t) \propto t^{2/3} \quad \blacksquare$$

The Hubble parameter: $H = \dot{a}/a = (2/3)t^{-1}$So the age of a matter-dominated Universe is
$t_0 = 2/(3H_0)$. For $H_0 = 70$ km/s/Mpc, this gives $t_0 \approx 9.3$ Gyr, which is less than the
age of the oldest stars --- this Inconsistency was one of the motivations for introducing dark
energy.

</details>

### 7.4 The Cosmic Microwave Background

At $T \sim 3000$ K ($z \sim 1100$, $t \sim 380\,000$ years), the universe cooled enough for
electrons And protons to combine into neutral hydrogen (**recombination**). Before this, photons
were Continuously scattered by free electrons (the universe was opaque). After recombination,
photons Decoupled and travelled freely.

These photons have been redshifted by the expansion of the universe and are observed today as the
**Cosmic Microwave Background (CMB)** at $T_0 \approx 2.725$ K, with a peak wavelength
$\lambda_{\mathrm{peak} \approx 1.9}$ mm (microwave).

**Temperature-redshift relation.** The CMB temperature at redshift $z$ is:

$$T(z) = T_0(1 + z)$$

This follows from the adiabatic expansion of a photon gas: $\rho_\gamma \propto a^{-4}$ and
$\rho_\gamma \propto T^4$So $T \propto a^{-1} \propto (1+z)$.

### 7.5 CMB Anisotropy

The CMB is nearly isotropic but has small temperature fluctuations: $\Delta T / T \sim 10^{-5}$.

The **angular power spectrum** $C_l$ of these fluctuations encodes cosmological parameters:

- The first peak at $l \sim 200$ confirms the universe is spatially flat.
- The relative heights of peaks determine the baryon density $\Omega_b$.
- The damping tail constrains the matter density and Hubble constant.

The CMB is also polarised at the level of $\sim 10^{-6}$. Two modes:

- **E-mode:** Gradient-type polarisation, produced by density fluctuations (scalar perturbations).
- **B-mode:** Curl-type polarisation, produced by gravitational waves (tensor perturbations).

Detection of primordial B-mode polarisation would provide evidence for inflation.

<details>
<summary>Example 7.5: CMB temperature at recombination</summary>

The CMB temperature today is $T_0 = 2.725$ K. At recombination ($z_{\mathrm{rec} \approx 1100}$):

$$T_{\mathrm{rec} = T_0(1 + z_{\mathrm{rec}) = 2.725 \times 1101 \approx 3000\;\mathrm{K}}}$$

The peak wavelength of the CMB blackbody spectrum today is:

$$\lambda_{\mathrm{peak} = \frac{b}{T_0} = \frac{2.898 \times 10^{-3}\;\mathrm{m}\cdot K}{2.725\;\mathrm{K} \approx 1.06\;\mathrm{mm}}}$$

Where $b$ is Wien's displacement constant. At recombination:

$$\lambda_{\mathrm{peak}^{\mathrm{rec} = \frac{b}{T_{\mathrm{rec}} = \frac{2.898 \times 10^{-3}}{3000} \approx 966\;\mathrm{nm}}}}$$

This is in the **near-infrared** range. The photons have been redshifted by a factor of
$(1 + z_{\mathrm{rec}) \approx 1100}$ from near-infrared to microwave wavelengths over 13.8 billion
years.

</details>

### 7.6 Big Bang Nucleosynthesis

In the first few minutes after the Big Bang, the universe was hot and dense enough for nuclear
Reactions to occur. The main products were:

| Nucleus   | Mass fraction   |
| --------- | --------------- |
| $^1$H     | $\sim 75\%$     |
| $^4$He    | $\sim 25\%$     |
| D, $^3$He | $\sim 10^{-5}$  |
| $^7$Li    | $\sim 10^{-10}$ |

The nuclear reaction chain starts at $T \sim 0.1$ MeV ($t \sim 1$ s):

$$p + n \to d + \gamma$$

$$d + p \to {^3\mathrm{He} + \gamma, \quad d + d \to {^3\mathrm{He} + n, \quad d + d \to t + p}}$$

$$t + d \to {^4\mathrm{He} + \gamma, \quad {^3\mathrm{He} + d \to {^4\mathrm{He} + p}}}$$

The process stops at $^4$He because there are no stable nuclei with $A = 5$.

At $T \gg 1$ MeV, weak interactions maintain $n/p$ in thermal equilibrium:

$$\frac{n}{p} = e^{-\Delta m c^2/(k_B T)}$$

Where $\Delta m = m_n - m_p \approx 1.293$ MeV/$c^2$.

When $T \sim 0.8$ MeV ($t \sim 1$ s), the weak interaction rate falls below the expansion rate
($\Gamma_W \lt H$), and the $n/p$ ratio **freezes out** at $n/p \approx 1/6$. By the time
Nucleosynthesis begins ($t \sim 200$ s), neutron decay has reduced this to $n/p \approx 1/7$.

The predicted helium mass fraction:

$$Y_p = \frac{2(n/p)}{1 + n/p} \approx 0.25$$

<details>
<summary>Derivation of the helium mass fraction</summary>

Let $n_n$ and $n_p$ be the number densities of neutrons and protons. The neutron-to-proton Ratio at
freeze-out is:

$$\frac{n_n}{n_p} = \frac{1}{7}$$

Almost all neutrons end up in $^4$He nuclei. Each $^4$He nucleus contains 2 neutrons and 2 protons,
so the number of $^4$He nuclei per unit volume is:

$$n_{^4\mathrm{He} = \frac{n_n}{2}}$$

The remaining protons stay as hydrogen: $$n_H = n_p - 2n_{^4\mathrm{He} = n_p - n_n}$$

The baryon number density is $n_b = n_n + n_p$.

The helium mass fraction is:

$$Y_p = \frac{4 \cdot n_{^4\mathrm{He}}{n_b} = \frac{4 \cdot n_n/2}{n_n + n_p} = \frac{2n_n}{n_n + n_p} = \frac{2(n_n/n_p)}{1 + n_n/n_p}}$$

Substituting $n_n/n_p = 1/7$:

$$Y_p = \frac{2/7}{1 + 1/7} = \frac{2/7}{8/7} = \frac{2}{8} = 0.25 \quad \blacksquare$$

This prediction is remarkably robust and agrees with the observed primordial helium Abundance
$Y_p^{\mathrm{obs} \approx 0.245 \pm 0.003}$ to within a few percent. The small Discrepancy is
accounted for by including the precise neutron lifetime, detailed Reaction network, and non-thermal
effects.

</details>

BBN predictions agree with observations of primordial abundances. The deuterium abundance is
Particularly sensitive to the baryon-to-photon ratio $\eta = n_b/n_\gamma$:

$$\eta \approx 6.1 \times 10^{-10}$$

This value is consistent with that derived from the CMB, providing strong support for the Big Bang
Model.

<details>
<summary>Example 7.2: BBN as a probe of the baryon density</summary>

The primordial deuterium abundance depends sensitively on the baryon-to-photon ratio $\eta$. For
$\eta \approx 6.1 \times 10^{-10}$:

$$\mathrm{D}/H \approx 2.5 \times 10^{-5}$$

If the baryon density were significantly higher ($\eta \sim 10^{-9}$), deuterium would Be much more
efficiently processed into $^4$He, and the deuterium abundance would drop by Orders of magnitude.
Conversely, a lower baryon density would leave more deuterium unburned.

This strong dependence makes deuterium the best "baryometer" from BBN. Observations of Deuterium
absorption in high-redshift quasar spectra give:

$$\mathrm{D}/H = (2.527 \pm 0.030) \times 10^{-5}$$

This constrains $\eta = (6.10 \pm 0.04) \times 10^{-10}$In excellent agreement with The CMB value of
$\eta = (6.13 \pm 0.04) \times 10^{-10}$. The concordance between two Completely independent
measurements (one from nuclear physics at $t \sim 3$ min, the other From CMB physics at
$t \sim 380\,000$ yr) is one of the strongest tests of the Big Bang Model.

</details>

### 7.7 Dark Matter

**Evidence for dark matter:**

1. **Galaxy rotation curves:** Stars orbit as if there is much more mass than is visible. The
   velocity does not decrease with distance from the galactic centre (as expected from Keplerian
   orbits), indicating a dark matter halo.
2. **Galaxy clusters:** The virial theorem gives masses much larger than the luminous mass (Zwicky,
   1933).
3. **Gravitational lensing:** The deflection of light by galaxy clusters indicates more mass than
   visible matter.
4. **CMB anisotropy:** The angular power spectrum requires $\Omega_{\mathrm{DM} \approx 0.266}$.
5. **Large-scale structure:** N-body simulations reproduce the observed cosmic web only with dark
   matter.

**Properties:**

- Does not emit, absorb, or scatter light (non-luminous).
- Is **cold** (non-relativistic at structure formation): CDM model.
- Accounts for $\sim 27\%$ of the total energy density.
- Interacts primarily via gravity (and possibly the weak force).

**Candidates:**

- **WIMPs** (Weakly Interacting Massive Particles): $m \sim 10$ GeV--1 TeV. Predicted by
  supersymmetry. Searched for in direct detection experiments (XENON, LUX) and at the LHC. No
  confirmed detection.
- **Axions:** Light particles ($m \sim 10^{-5}$ eV/$c^2$) proposed to solve the strong CP problem.
- **Sterile neutrinos:** Right-handed neutrinos that do not participate in weak interactions.
- **Primordial black holes:** Black holes formed in the early universe.

<details>
<summary>Example 7.4: Galaxy rotation curve and dark matter halo</summary>

Consider a spiral galaxy with a flat rotation curve: $v(r) = v_0 \approx 200$ km/s For $r \gt r_0$
(where $r_0$ is the core radius).

**Without dark matter:** For a galaxy with luminous mass $M_{\mathrm{lum}}$ concentrated Within
$r_0$Keplerian dynamics gives:

$$v(r) = \sqrt{\frac{GM_{\mathrm{lum}}{r}}}$$

This predicts $v \propto r^{-1/2}$ at large $r$In conflict with the observed flat Rotation curve.

**With a dark matter halo:** Assume a singular isothermal sphere profile with density:

$$\rho(r) = \frac{v_0^2}{4\pi G r^2}$$

The enclosed mass is:

$$M(r) = \int_0^r 4\pi r'^2 \rho(r')\,dr' = \int_0^r \frac{v_0^2}{G}\,dr' = \frac{v_0^2 r}{G}$$

The circular velocity is:

$$v(r) = \sqrt{\frac{GM(r)}{r}} = \sqrt{\frac{G \cdot v_0^2 r/G}{r}} = v_0$$

The velocity is constant, matching the flat rotation curve. The total mass within radius $r$ is
$M(r) = v_0^2 r / G$.

**Numerical example.** For $v_0 = 200$ km/s and $r = 50$ kpc:

$$M(50\;\mathrm{kpc}) = \frac{(200 \times 10^3\;\mathrm{m}/s)^2 \times 50 \times 3.086 \times 10^{19}\;\mathrm{m}{6.674 \times 10^{-11}\;\mathrm{m}^3\,kg^{-1}\,s^{-2}}}$$

$$= \frac{4 \times 10^{10} \times 1.543 \times 10^{21}}{6.674 \times 10^{-11}} = \frac{6.17 \times 10^{31}}{6.674 \times 10^{-11}} \approx 9.25 \times 10^{41}\;\mathrm{kg}$$

This is roughly $4.6 \times 10^{11}$ solar masses, far exceeding the visible mass of a Typical
spiral galaxy ($\sim 10^{11}$ solar masses), demonstrating that dark matter Dominates the mass
budget.

</details>

### 7.8 Dark Energy

In 1998, two teams (Riess et al., Perlmutter et al.) observed that Type Ia supernovae are fainter
Than expected for a decelerating universe. This implies the expansion is **accelerating**:
$\ddot{a} \gt 0$.

From the acceleration equation, this requires $\rho + 3P/c^2 \lt 0$Which is satisfied by a Component
with $w \lt -1/3$.

The simplest explanation is **Einstein's cosmological constant** $\Lambda$With equation of state
$w = -1$:

$$\rho_\Lambda = \frac{\Lambda c^2}{8\pi G}, \quad P_\Lambda = -\rho_\Lambda c^2$$

**The cosmological constant problem:** Quantum field theory predicts a vacuum energy of order
$M_{\mathrm{Pl}^4}$ ($\sim 10^{120}$ times larger than the observed value). The origin of the tiny
Observed value is one of the deepest unsolved problems in physics.

Alternative models include **quintessence** (a dynamic scalar field with $-1 \lt w \lt -1/3$) And
**modified gravity** (e.g., $f(R)$ gravity). Current data are consistent with $w = -1$ (cosmological
constant), but precision is limited.

<details>
<summary>Example 7.3: Acceleration from Type Ia supernovae</summary>

Type Ia supernovae are "standardisable candles": their peak luminosity is correlated With the shape
of their light curve, allowing intrinsic variations to be calibrated.

For a flat universe, the luminosity distance is:

$$d_L = c(1+z)\int_0^z \frac{dz'}{H(z')}$$

Where $H(z) = H_0\sqrt{\Omega_m(1+z)^3 + \Omega_\Lambda}$ for a $\Lambda$CDM universe.

The observed flux is $F = L/(4\pi d_L^2)$. For a matter-only universe ($\Omega_\Lambda = 0$),
Supernovae at $z \sim 0.5$ appear brighter (closer) than in a $\Lambda$CDM universe with
$\Omega_\Lambda \approx 0.7$.

The key observational result (Riess et al. 1998, Perlmutter et al. 1999) was that the Measured $d_L$
at $z \sim 0.5$ was **larger** than predicted by the matter-only model, Implying the supernovae were
fainter. This required $\Omega_\Lambda \gt 0$.

The deceleration parameter at $z = 0$ is:

$$q_0 = -\frac{\ddot{a}a}{\dot{a}^2}\bigg\rvert_{t_0} = \frac{\Omega_m}{2} - \Omega_\Lambda$$

For $\Omega_m = 0.3$ and $\Omega_\Lambda = 0.7$: $q_0 = 0.15 - 0.7 = -0.55 \lt 0$Confirming
Acceleration.

</details>

### 7.9 Inflation

The standard Big Bang model has several unresolved issues:

1. **Horizon problem:** The CMB is uniform across the sky, but regions separated by more than
   $\sim 1^\circ$ were causally disconnected at recombination.
2. **Flatness problem:** $\Omega$ must have been extraordinarily close to 1 in the early universe:
   $|\Omega - 1| \lt 10^{-60}$ at $t \sim 10^{-36}$ s.
3. **Monopole problem:** Grand unified theories predict abundant magnetic monopoles, none of which
   are observed.
4. **Origin of structure:** What seeded the density fluctuations that grew into galaxies?

<details>
<summary>Example 7.6: The flatness problem</summary>

Define the deviation from critical density:

$$\lvert\Omega(t) - 1\rvert = \frac{\lvert\rho - \rho_c\rvert}{\rho_c}$$

The Friedmann equation with $k \neq 0$ gives:

$$\rho_c - \rho = \frac{3kc^2}{8\pi G a^2}$$

So $\rho_c - \rho \propto a^{-2}$While $\rho_c \propto H^2 \propto \rho$ (in a Radiation- or
matter-dominated era).

Therefore:

$$\lvert\Omega - 1\rvert = \frac{\lvert\rho_c - \rho\rvert}{\rho_c} \propto \frac{a^{-2}}{a^{-3}} = a \quad \mathrm{(matter\mathrm{-dominated)}}$$

$$\lvert\Omega - 1\rvert \propto \frac{a^{-2}}{a^{-4}} = a^2 \quad \mathrm{(radiation\mathrm{-dominated)}}$$

**In a matter-dominated universe:** $\lvert\Omega - 1\rvert$ grows linearly with $a$. Going From
$a_{\mathrm{now} = 1}$ back to the Planck time ($a \sim 10^{-32}$):

$$\lvert\Omega - 1\rvert_{\mathrm{Planck} \sim 10^{-32} \times \lvert\Omega - 1\rvert_{\mathrm{now}}}$$

Since $\lvert\Omega_{\mathrm{now} - 1\rvert \sim 0.007}$This gives:

$$\lvert\Omega - 1\rvert_{\mathrm{Planck} \sim 7 \times 10^{-35}}$$

This is an extraordinarily fine-tuned initial condition. Inflation solves this by Exponentially
expanding $a$ by a factor of $e^{N}$ ($N \sim 60$), driving $\lvert\Omega - 1\rvert$ to
$e^{-2N} \sim 10^{-52}$ after inflation, which then Grows to the observed value by the present day.

</details>

**Inflation** (Guth, 1981) proposes a period of exponential expansion in the early universe:

$$a(t) \propto e^{Ht}, \quad H \approx \mathrm{const}$$

Lasting from $t \sim 10^{-36}$ s to $t \sim 10^{-33}$ s, during which the universe expanded by a
Factor of $\sim e^{60} \sim 10^{26}$.

**Resolutions:**

- **Horizon:** Inflation pushes all pre-existing causal contacts outside the observable horizon,
  making the CMB uniform.
- **Flatness:** Inflation drives $\Omega$ exponentially close to 1, regardless of its initial value.
- **Monopoles:** Inflation dilutes their density to negligible levels.
- **Structure:** Quantum fluctuations during inflation are stretched to macroscopic scales,
  providing the primordial perturbation spectrum (nearly scale-invariant, $n_s \approx 0.965$).

Inflation is driven by a scalar field $\phi$ (the **inflaton**) with potential $V(\phi)$. The
Slow-roll parameters are:

$$\epsilon = \frac{M_{\mathrm{Pl}^2}{2}\left(\frac{V'}{V}\right)^2 \ll 1, \quad \eta = M_{\mathrm{Pl}^2 \frac{V''}{V} \ll 1}}$$

The number of e-folds: $N = \int_{t_i}^{t_f} H\,dt$.

The spectral index: $n_s = 1 - 6\epsilon + 2\eta \approx 0.965$ (Planck 2018), consistent with
Slow-roll inflation.

The tensor-to-scalar ratio: $r = 16\epsilon$. Current upper bound: $r \lt 0.036$ (Planck +
BICEP/Keck).

### 7.10 The Hubble Tension

The Hubble constant $H_0$ measured from the CMB ($\sim 67.4$ km/s/Mpc, Planck 2018, assuming
$\Lambda$CDM) disagrees with local distance-ladder measurements ($\sim 73.0$ km/s/Mpc, SH0ES).

This discrepancy is now at the $\sim 5\sigma$ level and is one of the most significant open problems
In cosmology. Possible resolutions include:

1. **Systematic errors** in one or both measurement methods.
2. **New physics** prior to recombination (e.g., additional radiation, early dark energy).
3. **Extensions to $\Lambda$CDM** (e.g., time-varying dark energy equation of state $w(z)$).

:::caution Common Pitfall The Hubble constant $H_0$ measured from the CMB ($\sim 67.4$ km/s/Mpc,
Planck) disagrees with Local distance-ladder measurements ($\sim 73.0$ km/s/Mpc, SH0ES). This
"Hubble tension" is one of The most significant open problems in cosmology. When using $H_0$ in
calculations, be aware of Which measurement you are referencing and the systematic uncertainties
involved.
:::

### 7.11 Timeline of the Universe

| Time           | Temperature    | Event                                 |
| -------------- | -------------- | ------------------------------------- |
| $0$            | $\infty$       | Big Bang                              |
| $10^{-43}$ s   | $10^{19}$ GeV  | Planck epoch (quantum gravity)        |
| $10^{-36}$ s   | $10^{16}$ GeV  | Inflation, GUT symmetry breaking      |
| $10^{-12}$ s   | $10^2$ GeV     | Electroweak symmetry breaking         |
| $10^{-6}$ s    | $\sim 200$ MeV | QCD phase transition                  |
| 1 s            | $\sim 1$ MeV   | Neutrino decoupling, $n/p$ freeze-out |
| 3 min          | $\sim 0.1$ MeV | Big Bang nucleosynthesis              |
| $380\,000$ yr  | 3000 K         | Recombination, CMB released           |
| $\sim 200$ Myr | $\sim 30$ K    | First stars (reionisation)            |
| $\sim 1$ Gyr   | $\sim 10$ K    | Galaxy formation                      |
| 9.2 Gyr        | $\sim 5$ K     | Solar system forms                    |
| 13.8 Gyr       | 2.725 K        | Present day                           |

