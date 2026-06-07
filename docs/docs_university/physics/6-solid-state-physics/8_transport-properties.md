---
title: Transport Properties
tags:
  - Physics
  - University
---

### 8.1 Electrical Conductivity: Drude Model

The **Drude model** treats conduction electrons as a classical gas scattering off ions with a mean
Free time $\tau$.

Under an electric field $\mathbf{E}$The equation of motion:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

In steady state ($d\mathbf{v}/dt = 0$): $\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$.

The current density: $\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

The **Drude conductivity:**

$$\sigma = \frac{ne^2\tau}{m_e}$$

The **mean free path:** $\ell = v_F\tau$.

**Successes:** Explains Ohm's law ($\mathbf{J} = \sigma\mathbf{E}$) and the Wiedemann--Franz law
($\kappa/\sigma = LT$ with $L = \pi^2 k_B^2/(3e^2)$).

**Failures:** Predicts the wrong temperature dependence ($\rho \propto T$But experiments show
$\rho \propto T^5$ at low $T$ for pure metals). Predicts
$\gamma_{\mathrm{electron} = \frac{3}{2}nk_B}$ But experiments give
$\gamma_{\mathrm{electron} = \frac{\pi^2}{2}nk_B(T/T_F)}$ (much smaller).

### 8.2 The Boltzmann Transport Equation

The semiclassical distribution function $f(\mathbf{r}, \mathbf{k}, t)$ satisfies:

$$\frac{\partial f}{\partial t} + \mathbf{v}_{\mathbf{k}} \cdot \nabla_{\mathbf{r}} f - \frac{e\mathbf{E}}{\hbar}\cdot\nabla_{\mathbf{k}} f = \left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}$$

In the **relaxation time approximation:**

$$\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll} = -\frac{f - f_0}{\tau}}$$

Where $f_0$ is the equilibrium distribution.

**Solution for conductivity.** In a uniform electric field with $f = f_0 + f_1$:

$$f_1 = e\tau\mathbf{E}\cdot\mathbf{v}_{\mathbf{k}}\frac{\partial f_0}{\partial\varepsilon}$$

The conductivity becomes:

$$\sigma = \frac{e^2}{3}\int \tau(\varepsilon)\,v^2(\varepsilon)\,g(\varepsilon)\left(-\frac{\partial f_0}{\partial\varepsilon}\right) d\varepsilon$$

At low $T$, $-\partial f_0/\partial\varepsilon \approx \delta(\varepsilon - \varepsilon_F)$So only
states Near $E_F$ contribute to transport. This explains why impurity scattering dominates at low
$T$ (even a small concentration of impurities affects states near $E_F$).

**Matthiessen's rule.** When multiple scattering mechanisms act independently, the total resistivity
Is approximately additive:

$$\rho(T) = \rho_0 + \rho_{\mathrm{ph}(T)}$$

Where $\rho_0$ is the residual resistivity (temperature-independent, from impurities and defects)
And $\rho_{\mathrm{ph}(T)}$ is the phonon contribution (proportional to $T$ at high $T$ and to $T^5$
At low $T$ via the Bloch--Grüneisen formula). The **resistance ratio**
$RRR = \rho(300\ \mathrm{K})/\rho_0$ Is a measure of sample purity.

**Bloch--Grüneisen formula.** For electron--phonon scattering in a free electron metal:

$$\rho_{\mathrm{ph}(T) \propto \left(\frac{T}{\Theta_D}\right)^5 \int_0^{\Theta_D/T} \frac{x^5}{(e^x - 1)(1 - e^{-x})}\,dx}$$

At high $T$ ($T \gt \Theta_D$): $\rho_{\mathrm{ph} \propto T}$ (linear, agreeing with the Drude
model). At low $T$ ($T \ll \Theta_D$): $\rho_{\mathrm{ph} \propto T^5}$Consistent with experiment.

### 8.3 Thermal Conductivity

The thermal conductivity of electrons:

$$\kappa_e = \frac{1}{3}c_e v_F \ell_e$$

Where $c_e = \frac{\pi^2}{2}nk_B(T/T_F)$ is the electronic specific heat. The phonon contribution:

$$\kappa_{\mathrm{ph} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}}$$

The total thermal conductivity: $\kappa = \kappa_e + \kappa_{\mathrm{ph}}$.

### 8.4 The Hall Effect

When a magnetic field $\mathbf{B} = B\hat{\mathbf{z}}$ is applied perpendicular to a current
$\mathbf{J} = J_x\hat{\mathbf{x}}$A transverse electric field develops:

$$E_y = R_H J_x B$$

The **Hall coefficient:** $R_H = -1/(ne)$ for a single carrier type.

The **Hall angle:** $\theta_H = \arctan(E_y/E_x) = \omega_c\tau$ where $\omega_c = eB/m^*$ is the
Cyclotron frequency.

### 8.5 Effective Mass

Near a band extremum, the energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}k_i k_j$$

The **effective mass tensor**
$(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
Determines the response to external fields. For isotropic bands,
$m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
Steep band (high mobility).

