---
title: Advanced Semiconductor Physics
tags:
  - Physics
  - University
---

### 15.1 MOSFET Operation in Detail

In an n-channel MOSFET, the gate voltage $V_G$ controls the channel charge:

**Threshold voltage:**

$$V_T = V_{FB} + 2\phi_F + \frac{\sqrt{2\varepsilon_s q N_A(2\phi_F)}}{C_{ox}}$$

Where $V_{FB}$ is the flat-band voltage, $\phi_F = (k_BT/q)\ln(N_A/n_i)$ is the bulk Fermi
potential, and $C_{ox} = \varepsilon_{ox}/t_{ox}$ is the oxide capacitance.

**Drain current (long-channel, above threshold):**

$$I_D = \mu_n C_{ox}\frac{W}{L}\left[\left(V_G - V_T\right)V_D - \frac{V_D^2}{2}\right] \quad \text{(linear region)}$$

$$I_D = \frac{1}{2}\mu_n C_{ox}\frac{W}{L}(V_G - V_T)^2 \quad \text{(saturation,  V_D \geq V_G - V_T \text{)}}$$

**Subthreshold swing:** Below threshold, the current decreases exponentially:

$$I_D \propto e^{qV_G/(nk_BT)}$$

Where $n = 1 + C_d/C_{ox}$ and $C_d$ is the depletion capacitance. The minimum subthreshold swing at
room temperature is $S = nk_BT\ln 10/q \approx 60$ mV/decade.

### 15.2 Bipolar Junction Transistor (BJT)

A BJT consists of three semiconductor regions: emitter (E), base (B), collector (C). In active mode
(E-B forward biased, C-B reverse biased):

**Ebers--Moll model:**

$$I_E = I_{ES}\left(e^{V_{BE}/V_T} - 1\right) - \alpha_R I_{CS}\left(e^{V_{BC}/V_T} - 1\right)$$

$$I_C = \alpha_F I_{ES}\left(e^{V_{BE}/V_T} - 1\right) - I_{CS}\left(e^{V_{BC}/V_T} - 1\right)$$

Where $\alpha_F$ is the forward current gain ( $0.98$--$0.998$) and $V_T = k_BT/e$.

The common-emitter current gain $\beta = \alpha_F/(1 - \alpha_F)$. For $\alpha_F = 0.99$:
$\beta = 99$.

### 15.3 Excitons and Polaritons

**Wannier--Mott excitons** (in semiconductors with small $\varepsilon_r$ and small effective mass):

$$E_n = E_g - \frac{\mu e^4}{2(4\pi\varepsilon_0\varepsilon_r)^2\hbar^2 n^2} = E_g - \frac{R^*}{n^2}$$

Where $R^* = \frac{\mu}{m_e\varepsilon_r^2} \times 13.6$ eV is the effective Rydberg.

For GaAs ($m_e^* = 0.067m_e$, $m_h^* = 0.45m_e$, $\varepsilon_r = 12.9$):

$$\mu = \frac{0.067 \times 0.45}{0.067 + 0.45}m_e = 0.058m_e$$

$$R^* = \frac{0.058}{12.9^2} \times 13.6 = \frac{0.058}{166.4} \times 13.6 = 4.7\ \text{meV}$$

$$a_B^* = \frac{\varepsilon_r m_e}{\mu}a_0 = \frac{12.9}{0.058} \times 0.529\ \text{Å = 118\ \text{Å \approx 12\ \text{nm}}}$$

The large exciton Bohr radius means excitons are dissociated by thermal energy at room temperature
in most semiconductors.

**Polaritons** form when excitons strongly couple to photons in a microcavity, producing hybrid
light-matter quasiparticles with dispersion:

$$E_{\pm}(k) = \frac{1}{2}\left(E_{\text{cav}(k) + E_{\text{exc}(k)\right) \pm \frac{1}{2}\sqrt{\Omega_R^2 + \delta^2(k)}}}$$

Where $\Omega_R$ is the Rabi splitting and $\delta = E_{\text{cav} - E_{\text{exc}}}$ is the
detuning.

<details>
<summary>Worked Example 15.1: MOSFET Drain Current</summary>

An n-channel MOSFET has $\mu_n = 450$ cm$^2$/(V$\cdot$S), $C_{ox} = 34.5$ nF/cm$^2$ ($t_{ox} = 10$
nm SiO$_2$), $W = 10$ $\mu$M, $L = 1$ $\mu$M, $V_T = 0.7$ V.

For $V_G = 2$ V, $V_D = 0.5$ V (linear region since $V_D < V_G - V_T = 1.3$ V):

$$I_D = 450 \times 34.5 \times 10^{-9} \times \frac{10 \times 10^{-4}}{1 \times 10^{-4}}\left[1.3 \times 0.5 - \frac{0.25}{2}\right]$$

$$= 450 \times 3.45 \times 10^{-7} \times 10 \times [0.65 - 0.125]$$

$$= 1.55 \times 10^{-3} \times 0.525 = 8.14 \times 10^{-4}\ \text{A} = 0.814\ \text{mA}$$

At saturation ($V_D = 2$ V):

$$I_D = \frac{1}{2} \times 450 \times 34.5 \times 10^{-9} \times 10 \times (1.3)^2 = 1.30\ \text{mA}$$

</details>

## Common Pitfalls (Additional)

1. **GL theory is valid only near $T_c$**: The Ginzburg--Landau theory is a mean-field expansion
   that assumes the order parameter varies slowly in space and is small. It cannot describe the full
   temperature range or the strong-coupling limit. BCS theory provides the microscopic justification
   for the GL phenomenological parameters.

2. **Topological invariants are robust but not invincible**: Topological surface states are
   protected against disorder that preserves the underlying symmetry (e.g., time-reversal for $Z_2$
   TIs). Breaking that symmetry (e.g., magnetic doping of a TI) can gap out the surface states.
   Similarly, interactions can sometimes destroy topological phases.

3. **Hubbard $U$ is not the bare Coulomb energy**: The effective $U$ in the Hubbard model is
   significantly reduced from the bare Coulomb repulsion ($\sim 20$ eV for $3d$ electrons) by
   screening. Typical values are $U \sim 2$--$8$ eV for transition metal oxides.

4. **MOSFET scaling limits**: As transistors shrink below $\sim 10$ nm, short-channel effects
   (drain-induced barrier lowering, punch-through) dominate, and the subthreshold swing cannot be
   reduced below 60 mV/decade with conventional thermionic emission. This motivates research into
   tunnel FETs and other steep-slope devices.

5. **Effective mass can be negative or anisotropic**: The curvature $d^2\varepsilon/dk^2$ determines
   the sign of $m^*$. Near band maxima, $m^* < 0$ (holes). In multivalley semiconductors like
   silicon, the effective mass tensor has longitudinal ($m_l$) and transverse ($m_t$) components
   that differ significantly ($m_l/m_t \approx 5$ for Si).

## Problems (Additional)

<details>
<summary>Problem 19: GL Coherence Length and Penetration Depth</summary>

A Type II superconductor has $\xi_0 = 5$ nm and $\lambda_0 = 50$ nm at $T = 0$. At $T = 0.9\,T_c$:

(a) Calculate $\xi(T)$, $\lambda(T)$And $\kappa(T)$.

(b) Calculate $B_{c1}$ and $B_{c2}$ at $T = 0.9\,T_c$.

(c) How many flux quanta per unit area are present at $B = B_{c2}/2$?

**Solution:**

(a) At $T = 0.9\,T_c$: $1 - T/T_c = 0.1$.

$$\xi = \frac{\xi_0}{\sqrt{0.1}} = \frac{5}{0.316} = 15.8\ \text{nm}, \quad \lambda = \frac{50}{\sqrt{0.1}} = 158\ \text{nm}$$

$$\kappa = \lambda/\xi = 10 \quad \text{(independent of  T\text{)}}$$

(b)
$B_{c2} = \frac{\Phi_0}{2\pi\xi^2} = \frac{2.07 \times 10^{-15}}{2\pi \times (15.8 \times 10^{-9})^2} = \frac{2.07 \times 10^{-15}}{1.57 \times 10^{-15}} = 1.32\ \text{T}$

$$B_{c1} = \frac{\Phi_0}{4\pi\lambda^2}\ln\kappa = \frac{2.07 \times 10^{-15}}{4\pi \times (158 \times 10^{-9})^2}\ln 10 = \frac{2.07 \times 10^{-15}}{3.14 \times 10^{-13}} \times 2.303 = 1.52 \times 10^{-3}\ \text{T} = 1.52\ \text{mT}$$

(c) At $B = B_{c2}/2 = 0.66$ T: number of flux quanta per m$^2$ =
$B/\Phi_0 = 0.66/(2.07 \times 10^{-15}) = 3.19 \times 10^{14}\ \text{m}^{-2}$.

Average spacing between vortices:
$a \approx (2\Phi_0/(\sqrt{3}B))^{1/2} = (2 \times 2.07 \times 10^{-15}/(1.73 \times 0.66))^{1/2} = 60\ \text{nm}$.

</details>

<details>
<summary>Problem 20: Berry Phase in a Tight-Binding Model</summary>

Consider a spinless particle on a 1D lattice with Hamiltonian:

$$\hat{H} = \sum_n \left(t\,e^{i\phi}\,\hat{c}_n^\dagger\hat{c}_{n+1} + t\,e^{-i\phi}\,\hat{c}_{n+1}^\dagger\hat{c}_n\right)$$

(a) Show that the dispersion is $\varepsilon(k) = -2t\cos(k + \phi)$.

(b) Calculate the Berry phase for an electron traversing the Brillouin zone $-\pi/a \to \pi/a$.

(c) Show that the Berry phase is $\gamma = 2\pi\phi/(2\pi/a)$ and interpret physically.

**Solution:**

(a) Substituting $\psi_k(n) = e^{ikna}/\sqrt{N}$:

$$\varepsilon(k)\psi_k(n) = t\,e^{i\phi}\,e^{ika}\psi_k(n) + t\,e^{-i\phi}\,e^{-ika}\psi_k(n)$$

$$\varepsilon(k) = t\,e^{i(k+\phi)a} + t\,e^{-i(k+\phi)a} = -2t\cos(k + \phi)$$

(b) The Bloch function is $u_k(n) = e^{i\phi n}$ (up to normalisation). The Berry connection:

$$A(k) = \langle u_k | i\partial_k | u_k \rangle = i \cdot i\phi = -\phi$$

Wait, more carefully. In a continuum formulation:

$$A(k) = \langle u_k | \frac{\partial}{\partial k} | u_k \rangle = \frac{\partial}{\partial k}(\arg u_k) = \frac{\partial}{\partial k}(0) = 0$$

Since $u_k(x) = e^{ikx}$ has $\partial_k \ln u_k = ix$ and $\langle u_k|ix|u_k\rangle$ averages to
zero.

Actually, for this model the Berry phase arises from the $\phi$-dependent phase winding. Let us use
the proper formulation. The wavefunction $\psi_k(x) = e^{ikx}u_k(x)$ where $u_k$ has the periodicity
of the lattice. With the flux $\phi$The Berry connection picks up an extra term. The Berry phase for
one circuit of the BZ is:

$$\gamma = \oint A(k)\,dk = 2\pi\phi$$

(c) The Berry phase $\gamma = 2\pi\phi$ is directly proportional to the flux $\phi$ per unit cell.
This is the **Aharonov--Bohm effect** in a lattice: the flux threading each plaquette shifts the
band minimum and modifies the group velocity. For $\phi = \pi$The band is inverted
($\varepsilon = 2t\cos k$), which is the basis for the Rice--Mele model of topological insulators.

</details>

<details>
<summary>Problem 21: Semiconductor Device Analysis</summary>

A silicon p-n junction has $N_A = 10^{24}$ m$^{-3}$ and $N_D = 10^{22}$ m$^{-3}$ at $T = 300$ K.

(a) Calculate the built-in potential $V_0$.

(b) Calculate the depletion width $W$ and the depletion capacitance per unit area at zero bias.

(c) Under forward bias $V = 0.5$ V, calculate the current density. Assume $I_0/A = 10^{-12}$
A/m$^2$.

(d) What is the breakdown voltage if the critical field for Zener breakdown in Si is
$E_{\text{crit} \approx 3 \times 10^8}$ V/m?

**Solution:**

(a)
$V_0 = \frac{k_BT}{e}\ln\frac{N_A N_D}{n_i^2} = 0.02585 \times \ln\frac{10^{24} \times 10^{22}}{(1.5 \times 10^{16})^2}$

$$= 0.02585 \times \ln\frac{10^{46}}{2.25 \times 10^{32}} = 0.02585 \times \ln(4.44 \times 10^{13})$$

$$= 0.02585 \times 31.43 = 0.812\ \text{V}$$

(b) $W = \sqrt{\frac{2\varepsilon_s V_0}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)}$

Since $N_D \ll N_A$The depletion region extends mainly into the n-side:

$$W \approx \sqrt{\frac{2 \times 11.7 \times 8.85 \times 10^{-12} \times 0.812}{1.6 \times 10^{-19} \times 10^{22}}} = \sqrt{\frac{1.68 \times 10^{-10}}{1.6 \times 10^{-3}}} = \sqrt{1.05 \times 10^{-7}} = 3.24 \times 10^{-4}\ \text{m} = 0.324\ \text{mm}$$

This is a wide depletion region because of the asymmetric doping.

$$C/A = \frac{\varepsilon_s}{W} = \frac{11.7 \times 8.85 \times 10^{-12}}{3.24 \times 10^{-4}} = 3.19 \times 10^{-7}\ \text{F}/m^2 = 319\ \text{nF}/m^2$$

(c)
$J = J_0(e^{eV/(k_BT)} - 1) = 10^{-12}(e^{0.5/0.02585} - 1) = 10^{-12}(e^{19.34} - 1) = 10^{-12} \times 2.48 \times 10^8 = 2.48 \times 10^{-4}\ \text{A}/m^2 = 0.248\ \text{mA}/m^2$

(d) The maximum field occurs at the metallurgical junction and for a one-sided junction is
approximately $E_{\max} = 2V_0/W$. For breakdown: $V_{BD} \approx E_{\text{crit} \cdot W_{BD}/2}$.

With $W_{BD} = \sqrt{2\varepsilon_s V_{BD}/(eN_D)}$ (one-sided):

$$V_{BD} = \frac{\varepsilon_s E_{\text{crit}^2}{2eN_D} = \frac{11.7 \times 8.85 \times 10^{-12} \times (3 \times 10^8)^2}{2 \times 1.6 \times 10^{-19} \times 10^{22}} = \frac{9.29 \times 10^{-1}}{3.2 \times 10^{-3}} = 290\ \text{V}}$$

</details>

