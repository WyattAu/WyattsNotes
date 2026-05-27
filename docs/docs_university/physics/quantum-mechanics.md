---
title: Quantum Mechanics
description:
  'Comprehensive university-level notes on quantum mechanics covering historical motivation and
  failures of classical physics, the postulates of quantum mechanics, the Schrodinger equation,
  operators and observables, one-dimensional potential problems, angular momentum and the hydrogen
  atom, spin, perturbation theory, scattering theory, the WKB approximation, and density functional
  theory.'
date: 2026-04-23T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: quantum-mechanics
---

## 1. Historical Motivation

### 1.1 Failures of Classical Physics

By the late 19th century, classical physics could not explain several phenomena:

**Blackbody radiation.** The Rayleigh-Jeans law predicted infinite energy at short wavelengths (the
"ultraviolet catastrophe"). Experiment showed a peak that shifts with temperature.

**Photoelectric effect.** Classical theory predicted that the kinetic energy of emitted electrons
Depends on the intensity of light. Experiment showed on the frequency.

**Atomic spectra.** Atoms emit light at discrete frequencies, not the continuous spectrum predicted
By classical electrodynamics.

**Stability of atoms.** Classical electrodynamics predicts orbiting electrons radiate energy and
Spiral into the nucleus.

### 1.2 Key Experiments

**Planck's quantisation (1900).** Blackbody radiation is explained by assuming energy is emitted in
Discrete quanta: $E = h\nu$ where $h = 6.626 \times 10^◆LB◆-34◆RB◆$ J$\cdot$S is Planck's constant.

**Einstein's photon (1905).** Light consists of photons, each carrying energy $E = h\nu$ and
momentum $p = h/\lambda = h\nu/c$. The photoelectric effect: $E_k = h\nu - \phi$ where $\phi$ is the
work Function.

**Compton scattering (1923).** X-rays scattered off electrons show a wavelength shift:

$$\Delta\lambda = \frac◆LB◆h◆RB◆◆LB◆m_e c◆RB◆(1 - \cos\theta)$$

This confirms that photons carry momentum $p = h/\lambda$.

**Davisson-Germer experiment (1927).** Electrons scattered off a nickel crystal produce a
diffraction Pattern, confirming de Broglie's hypothesis that matter has wave properties:
$\lambda = h/p$.

### 1.3 The Photoelectric Effect: Detailed Derivation

The photoelectric effect provided the first direct evidence for the quantum nature of light. When
Monochromatic light of frequency $\nu$ strikes a metal surface, electrons are ejected with a maximum
Kinetic energy $K_◆LB◆\max◆RB◆$ that depends on $\nu$ but **not** on the intensity.

**Einstein's quantum hypothesis (1905).** Each photon carries energy $E_\gamma = h\nu$. When a
photon Strikes the surface, it transfers all its energy to a single electron. By energy
conservation:

$$h\nu = \phi + K_◆LB◆\max◆RB◆$$

Where $\phi$ is the work function (minimum energy to remove an electron from the metal).

**Key predictions:**

1. **Threshold frequency.** No electrons are emitted if $\nu \lt \nu_0 = \phi/h$Regardless of
   intensity. This is because each photon must supply at least $\phi$.

2. **Linear dependence on frequency.** $K_◆LB◆\max◆RB◆ = h\nu - \phi$ is linear in $\nu$ with slope $h$
   (independent of the metal).

3. **Intensity affects current, not energy.** Higher intensity means more photons per unit time, so
   more electrons are emitted, but each electron has the same maximum kinetic energy.

4. **No time delay.** Classically, an electron should accumulate energy gradually; quantum
   mechanically, a single photon ejects an electron instantaneously.

_Proof of the threshold frequency._ Setting $K_◆LB◆\max◆RB◆ = 0$ in the energy balance:

$$h\nu_0 = \phi \implies \nu_0 = \frac◆LB◆\phi◆RB◆◆LB◆h◆RB◆$$

For frequencies $\nu \lt \nu_0$The photon energy is insufficient to liberate an electron, and No
photoelectric emission occurs regardless of intensity. $\blacksquare$

**Millikan's experimental verification (1916).** Robert Millikan, who initially opposed Einstein's
Theory, performed careful experiments measuring $K_◆LB◆\max◆RB◆$ versus $\nu$ for various metals. His
Results confirmed the linear relation $K_◆LB◆\max◆RB◆ = h\nu - \phi$ with a universal slope $h$ (Planck's
Constant), providing compelling evidence for the photon concept. Millikan's measured value of $h$
Agreed with Planck's value from blackbody radiation to within $0.5\%$.

**Example 1.1.** Sodium has a work function $\phi = 2.28$ eV. Find the cutoff wavelength.

<details>
<summary>Solution</summary>

The cutoff frequency is $\nu_0 = \phi/h = 2.28 \times 1.602 \times 10^◆LB◆-19◆RB◆ / 6.626 \times 10^◆LB◆-34◆RB◆$
$= 5.51 \times 10^◆LB◆14◆RB◆$ Hz. The cutoff wavelength is:

$$\lambda_0 = \frac◆LB◆c◆RB◆◆LB◆\nu_0◆RB◆ = \frac◆LB◆3.00 \times 10^8◆RB◆◆LB◆5.51 \times 10^◆LB◆14◆RB◆◆RB◆ = 544\;\mathrm◆LB◆nm◆RB◆$$

This lies in the green region of the visible spectrum, explaining why sodium is sensitive to visible
Light.

</details>

### 1.4 Compton Scattering: Derivation

Compton scattering provides direct evidence that photons carry momentum. When an X-ray photon of
Wavelength $\lambda$ scatters off a free (or loosely bound) electron at rest, the scattered photon
Has a longer wavelength $\lambda'$.

**Setup.** Incident photon: energy $E = hc/\lambda$Momentum $p = h/\lambda$. Target electron: At
rest, energy $m_e c^2$Momentum $0$. After scattering, the photon is deflected by angle $\theta$ And
the electron recoils at angle $\phi$.

**Energy conservation:**

$$\frac◆LB◆hc◆RB◆◆LB◆\lambda◆RB◆ + m_e c^2 = \frac◆LB◆hc◆RB◆◆LB◆\lambda'◆RB◆ + E_e$$

**Momentum conservation (vector equation):**

$$\frac◆LB◆h◆RB◆◆LB◆\lambda◆RB◆\hat◆LB◆n◆RB◆ = \frac◆LB◆h◆RB◆◆LB◆\lambda'◆RB◆\hat◆LB◆n◆RB◆' + \mathbf◆LB◆p◆RB◆_e$$

_Derivation of the wavelength shift._ From the relativistic energy-momentum relation for the
Electron, $E_e^2 = (p_e c)^2 + (m_e c^2)^2$. Rearranging the energy conservation:

$$E_e - m_e c^2 = hc\!\left(\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆\lambda'◆RB◆\right)$$

Squaring the momentum equation:

$$p_e^2 = \left(\frac◆LB◆h◆RB◆◆LB◆\lambda◆RB◆\right)^2 + \left(\frac◆LB◆h◆RB◆◆LB◆\lambda'◆RB◆\right)^2 - \frac◆LB◆2h^2◆RB◆◆LB◆\lambda\lambda'◆RB◆\cos\theta$$

Using $E_e^2 = p_e^2 c^2 + m_e^2 c^4$ and writing $T_e = E_e - m_e c^2$:

$$E_e^2 - m_e^2 c^4 = 2m_e c^2 T_e + T_e^2 = p_e^2 c^2$$

Substituting $T_e = hc(1/\lambda - 1/\lambda')$ and $p_e^2$ from above, then dividing by $c^2$ and
Simplifying:

$$2m_e c \cdot \frac◆LB◆h◆RB◆◆LB◆\lambda\lambda'◆RB◆(1 - \cos\theta) = 2h^2\!\left(\frac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆\lambda'^2◆RB◆ - \frac◆LB◆2\cos\theta◆RB◆◆LB◆\lambda\lambda'◆RB◆\right)$$

$$\frac◆LB◆1◆RB◆◆LB◆\lambda'◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ = \frac◆LB◆h◆RB◆◆LB◆m_e c◆RB◆(1 - \cos\theta)\cdot\frac◆LB◆1◆RB◆◆LB◆\lambda\lambda'◆RB◆$$

Multiplying through by $\lambda\lambda'$ yields the **Compton formula**:

$$\Delta\lambda = \lambda' - \lambda = \frac◆LB◆h◆RB◆◆LB◆m_e c◆RB◆(1 - \cos\theta)$$

The quantity $\lambda_C = h/(m_e c) \approx 2.426 \times 10^◆LB◆-12◆RB◆$ m is the **Compton wavelength**
of The electron. $\blacksquare$

**Classical limit.** In the classical limit ($\lambda \gg \lambda_C$), the wavelength shift
$\Delta\lambda \to 0$ and the scattering reduces to classical Thomson scattering. The Compton Effect
is only significant for X-rays and gamma rays, where $\lambda$ is comparable to $\lambda_C$. For
visible light ($\lambda \sim 500$ nm), the Compton shift is negligible compared to the wavelength.

**Physical interpretation.** The maximum shift $\Delta\lambda = 2\lambda_C \approx 4.85$ pm occurs
at $\theta = \pi$ (backscattering). The shift is independent of the material and depends only on the
Scattering angle, confirming that the scattering involves individual photons and electrons.

**Example 1.2.** X-rays of wavelength $0.100$ nm are Compton-scattered at $\theta = 90°$. Find the
Wavelength of the scattered photon and the kinetic energy of the recoil electron.

<details>
<summary>Solution</summary>

$$\Delta\lambda = \lambda_C(1 - \cos 90°) = \lambda_C = 2.426 \times 10^◆LB◆-12◆RB◆\;\mathrm◆LB◆m◆RB◆ = 0.00243\;\mathrm◆LB◆nm◆RB◆$$

$$\lambda' = \lambda + \Delta\lambda = 0.100 + 0.00243 = 0.10243\;\mathrm◆LB◆nm◆RB◆$$

The kinetic energy of the recoil electron:

$$T_e = hc\!\left(\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆\lambda'◆RB◆\right) = \frac◆LB◆hc\,\Delta\lambda◆RB◆◆LB◆\lambda\lambda'◆RB◆$$

$$= \frac◆LB◆(6.626 \times 10^◆LB◆-34◆RB◆)(3.00 \times 10^8)(2.43 \times 10^◆LB◆-12◆RB◆)◆RB◆◆LB◆(1.00 \times 10^◆LB◆-10◆RB◆)(1.0243 \times 10^◆LB◆-10◆RB◆)◆RB◆ = 4.72 \times 10^◆LB◆-17◆RB◆\;\mathrm◆LB◆J◆RB◆ = 295\;\mathrm◆LB◆eV◆RB◆$$

</details>

### 1.5 The Davisson-Germer Experiment

The Davisson-Germer experiment (1927) provided the first direct confirmation of de Broglie's
Hypothesis that particles have wave-like properties.

**Experimental setup.** A beam of electrons is accelerated through a potential difference $V$ and
Directed at a nickel crystal. The scattered electrons are detected at various angles $\phi$.

**de Broglie relation.** An electron accelerated through potential $V$ has kinetic energy $K = eV$
And momentum:

$$p = \sqrt◆LB◆2m_e eV◆RB◆$$

The de Broglie wavelength is:

$$\lambda = \frac◆LB◆h◆RB◆◆LB◆p◆RB◆ = \frac◆LB◆h◆RB◆◆LB◆\sqrt◆LB◆2m_e eV◆RB◆◆RB◆$$

**Bragg condition.** The nickel crystal acts as a diffraction grating with lattice spacing $d$.
Constructive interference occurs when:

$$n\lambda = 2d\sin\phi$$

Where $\phi$ is the angle measured from the crystal surface.

**The key observation.** At $V = 54$ V, a pronounced peak was observed at $\phi = 50°$. The De
Broglie wavelength at this voltage is:

$$\lambda = \frac◆LB◆6.626 \times 10^◆LB◆-34◆RB◆◆RB◆◆LB◆\sqrt◆LB◆2(9.109 \times 10^◆LB◆-31◆RB◆)(1.602 \times 10^◆LB◆-19◆RB◆)(54)◆RB◆◆RB◆ = 0.167\;\mathrm◆LB◆nm◆RB◆$$

The Bragg condition with the nickel lattice spacing gives excellent agreement with this Prediction,
confirming that electrons exhibit wave-like diffraction.

**Significance.** The Davisson-Germer experiment established wave-particle duality for matter. The
De Broglie relation $\lambda = h/p$ was subsequently confirmed for neutrons, atoms, and molecules
(C60 fullerenes in 1999), establishing it as a universal principle. In 2019, the de Broglie
Wavelength of molecules exceeding 25,000 atomic mass units was demonstrated, pushing the boundary Of
quantum mechanics to the macroscopic regime.

## 2. Postulates of Quantum Mechanics

### 2.1 The Postulates

**Postulate 1 (State Space).** The state of a quantum system is completely described by a normalised
Vector $|\psi\rangle$ in a complex Hilbert space $\mathcal◆LB◆H◆RB◆$.

_Physical motivation._ Superposition is observed in interference experiments (e.g., double-slit),
Where a particle can traverse multiple paths simultaneously. The complex-valued nature of the state
Is essential: relative phases between superposition components produce observable interference
Patterns that cannot be replicated with real amplitudes alone.

**Postulate 2 (Observables).** Every measurable quantity (observable) is represented by a Hermitian
(self-adjoint) operator $\hat◆LB◆A◆RB◆ = \hat◆LB◆A◆RB◆^\dagger$ acting on $\mathcal◆LB◆H◆RB◆$.

_Physical motivation._ Hermitian operators have real eigenvalues, matching the fact that measurement
Outcomes are real numbers. The spectral theorem guarantees a complete set of eigenstates, providing
a Basis for expansion.

**Postulate 3 (Measurement).** A measurement of observable $\hat◆LB◆A◆RB◆$ yields one of the eigenvalues
$a_n$ of $\hat◆LB◆A◆RB◆$. The probability of measuring $a_n$ when the system is in state $|\psi\rangle$ is

$$P(a_n) = |\langle a_n | \psi \rangle|^2$$

Where $|a_n\rangle$ is the eigenstate corresponding to $a_n$. After measurement, the state collapses
To $|a_n\rangle$.

_Physical motivation._ The Born rule $P = |\langle a_n|\psi\rangle|^2$ was postulated by Born (1926)
To connect wave functions to observable probabilities. It correctly predicts the intensity
Distribution in diffraction experiments and the statistics of particle detections.

**Postulate 4 (Time Evolution).** The time evolution of the state is governed by the
**time-dependent Schrodinger equation**:

$$i\hbar \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆|\psi(t)\rangle = \hat◆LB◆H◆RB◆|\psi(t)\rangle$$

Where $\hat◆LB◆H◆RB◆$ is the Hamiltonian (energy operator).

_Physical motivation._ This is the quantum analogue of Hamilton's equations in classical mechanics.
The Schrodinger equation is linear, guaranteeing superposition is preserved. Energy conservation is
Built in: for a time-independent Hamiltonian, $\langle H \rangle$ is constant.

**Postulate 5 (Composite Systems).** The state space of a composite system is the tensor product of
The state spaces of the components.

_Physical motivation._ This postulate produces entangled states, which have been confirmed
Experimentally (Bell inequality violations, quantum teleportation). The tensor product structure
Ensures that measurements on subsystems can exhibit correlations stronger than any classical theory
Permits.

### 2.2 The Measurement Problem

The measurement postulate (Postulate 3) introduces a fundamental tension: the Schrodinger equation
Describes **deterministic, unitary** evolution, but measurement produces **probabilistic,
non-unitary** Collapse. This is the **measurement problem**.

**The conflict.** Consider a system in a superposition
$|\psi\rangle = \alpha|a_1\rangle + \beta|a_2\rangle$. Under unitary evolution, the state remains a
superposition. But a measurement of $\hat◆LB◆A◆RB◆$ yields Either $a_1$ or $a_2$ with probabilities
$|\alpha|^2$ and $|\beta|^2$And the state collapses to The corresponding eigenstate. No unitary
operator can map a superposition to a single eigenstate With the correct probabilities.

**Major interpretational approaches:**

- **Copenhagen interpretation.** Collapse is a fundamental, irreducible process. The classical
  measuring apparatus triggers the collapse. No further mechanism is specified.

- **Many-worlds interpretation (Everett, 1957).** The universal wave function never collapses.
  Instead, measurement causes the observer and system to entangle, branching into multiple
  non-interacting "worlds," each corresponding to one measurement outcome.

- **Decoherence (Zurek).** Interaction with the environment rapidly suppresses off-diagonal elements
  of the reduced density matrix in a preferred basis ("einselection"), explaining the emergence of
  classical behaviour from unitary quantum mechanics.

- **Bohmian mechanics.** Particles have definite positions guided by the wave function via the
  "pilot wave." The wave function never collapses, but the effective description reproduces the Born
  rule.

The measurement problem remains an active area of research in the foundations of quantum mechanics.

### 2.3 Density Matrix Formalism

For systems where the state is not known precisely (statistical mixtures), the **density operator**
Provides a more general description than the state vector.

**Definition.** For a pure state $|\psi\rangle$The density operator is
$\hat◆LB◆\rho◆RB◆ = |\psi\rangle\langle\psi|$. For a statistical mixture of states $|\psi_i\rangle$ with
probabilities $p_i$:

$$\hat◆LB◆\rho◆RB◆ = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|$$

**Properties:**

- $\mathrm◆LB◆Tr◆RB◆(\hat◆LB◆\rho◆RB◆) = 1$ (normalisation)
- $\hat◆LB◆\rho◆RB◆^\dagger = \hat◆LB◆\rho◆RB◆$ (Hermitian)
- $\hat◆LB◆\rho◆RB◆^2 = \hat◆LB◆\rho◆RB◆$ if and only if the state is pure; $\hat◆LB◆\rho◆RB◆^2 \lt \hat◆LB◆\rho◆RB◆$ for
  mixed states
- Expectation values: $\langle A \rangle = \mathrm◆LB◆Tr◆RB◆(\hat◆LB◆\rho◆RB◆\hat◆LB◆A◆RB◆)$

**Time evolution:** $i\hbar\,d\hat◆LB◆\rho◆RB◆/dt = [\hat◆LB◆H◆RB◆, \hat◆LB◆\rho◆RB◆]$ (Liouville-von Neumann
equation).

The density matrix is essential for describing subsystems of entangled states (reduced density
Matrices via partial trace), open quantum systems, and decoherence.

### 2.4 Implications

- **Superposition:** A system can be in a linear combination of eigenstates:
  $|\psi\rangle = \sum_n c_n |a_n\rangle$.
- **Uncertainty Principle:** Non-commuting observables cannot be simultaneously measured with
  arbitrary precision.
- **Probabilistic Nature:** Quantum mechanics predicts probabilities, not deterministic outcomes.
- **No-cloning theorem.** There is no unitary operation that copies an arbitrary unknown quantum
  state $|\psi\rangle$. This follows from the linearity of quantum mechanics and has profound
  implications for quantum information.

## 3. Wave Functions and the Schrodinger Equation

### 3.1 Wave Functions

In the position representation, the state is described by a **wave function** $\psi(\mathbf◆LB◆r◆RB◆, t)$
Where $|\psi(\mathbf◆LB◆r◆RB◆, t)|^2$ is the probability density:

$$P(\mathbf◆LB◆r◆RB◆ \in [\mathbf◆LB◆r◆RB◆, \mathbf◆LB◆r◆RB◆ + d\mathbf◆LB◆r◆RB◆]) = |\psi(\mathbf◆LB◆r◆RB◆, t)|^2\, d^3\mathbf◆LB◆r◆RB◆$$

**Normalisation:** $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ |\psi(\mathbf◆LB◆r◆RB◆, t)|^2\, d^3\mathbf◆LB◆r◆RB◆ = 1$.

### 3.2 Time-Dependent Schrodinger Equation

$$i\hbar \frac◆LB◆\partial \psi◆RB◆◆LB◆\partial t◆RB◆ = \hat◆LB◆H◆RB◆\psi = \left(-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla^2 + V(\mathbf◆LB◆r◆RB◆, t)\right)\psi$$

### 3.3 Time-Independent Schrodinger Equation

For time-independent potentials $V(\mathbf◆LB◆r◆RB◆)$Separate variables:
$\psi(\mathbf◆LB◆r◆RB◆, t) = \phi(\mathbf◆LB◆r◆RB◆) e^◆LB◆-iEt/\hbar◆RB◆$:

$$\hat◆LB◆H◆RB◆\phi = E\phi \quad \mathrm◆LB◆i◆RB◆.e., \quad -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla^2\phi + V\phi = E\phi$$

This is an eigenvalue problem: $E$ is the energy eigenvalue, $\phi$ is the energy eigenstate.

**Properties of energy eigenstates:**

1. **Orthogonality.** If $\hat◆LB◆H◆RB◆\phi_n = E_n\phi_n$ and $\hat◆LB◆H◆RB◆\phi_m = E_m\phi_m$ with
   $E_n \neq E_m$ then $\int \phi_n^*\phi_m\,dx = 0$ (since $\hat◆LB◆H◆RB◆$ is Hermitian).

2. **Completeness.** The energy eigenstates form a complete basis: any state can be expanded as
   $\psi(x,0) = \sum_n c_n\phi_n(x)$ where $c_n = \int \phi_n^*(x)\psi(x,0)\,dx$.

3. **Stationary states.** If $\psi(x,0) = \phi_n(x)$Then $\psi(x,t) = \phi_n(x)e^◆LB◆-iE_nt/\hbar◆RB◆$.
   The probability density $|\psi|^2 = |\phi_n|^2$ is time-independent.

4. **Reality of $\phi$.** If $V(x)$ is real and there is no magnetic field, $\phi_n(x)$ can be
   chosen to be real. This is because if $\phi_n$ is a solution, so is $\phi_n^*$And degenerate
   solutions can be combined into real linear combinations.

### 3.4 Probability Current

The **probability current density** is

$$\mathbf◆LB◆J◆RB◆ = \frac◆LB◆\hbar◆RB◆◆LB◆2mi◆RB◆(\psi^* \nabla\psi - \psi \nabla\psi^*)$$

It satisfies the continuity equation:
$\frac◆LB◆\partial |\psi|^2◆RB◆◆LB◆\partial t◆RB◆ + \nabla \cdot \mathbf◆LB◆J◆RB◆ = 0$ Expressing conservation of
probability.

_Derivation of the continuity equation._ Start with the Schrodinger equation and its complex
conjugate:

$$i\hbar \frac◆LB◆\partial \psi◆RB◆◆LB◆\partial t◆RB◆ = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla^2\psi + V\psi$$

$$-i\hbar \frac◆LB◆\partial \psi^*◆RB◆◆LB◆\partial t◆RB◆ = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla^2\psi^* + V\psi^*$$

Multiply the first by $\psi^*$ and the second by $\psi$Then subtract:

$$i\hbar\!\left(\psi^*\frac◆LB◆\partial \psi◆RB◆◆LB◆\partial t◆RB◆ + \psi\frac◆LB◆\partial \psi^*◆RB◆◆LB◆\partial t◆RB◆\right) = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\!\left(\psi^*\nabla^2\psi - \psi\nabla^2\psi^*\right)$$

The left-hand side is $i\hbar\,\partial|\psi|^2/\partial t$. The right-hand side is a divergence:

$$\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*) = \psi^*\nabla^2\psi - \psi\nabla^2\psi^*$$

Therefore:

$$i\hbar\frac◆LB◆\partial |\psi|^2◆RB◆◆LB◆\partial t◆RB◆ = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*)$$

Dividing by $i\hbar$:

$$\frac◆LB◆\partial |\psi|^2◆RB◆◆LB◆\partial t◆RB◆ + \nabla \cdot \left[\frac◆LB◆\hbar◆RB◆◆LB◆2mi◆RB◆(\psi^*\nabla\psi - \psi\nabla\psi^*)\right] = 0$$

$$\frac◆LB◆\partial |\psi|^2◆RB◆◆LB◆\partial t◆RB◆ + \nabla \cdot \mathbf◆LB◆J◆RB◆ = 0 \qquad \blacksquare$$

### 3.5 Unitarity of Time Evolution

**Theorem 3.1.** Time evolution governed by the Schrodinger equation with a Hermitian Hamiltonian Is
unitary, and therefore preserves the norm of the state vector.

_Proof._ The time evolution operator $\hat◆LB◆U◆RB◆(t, t_0)$ is defined by:

$$|\psi(t)\rangle = \hat◆LB◆U◆RB◆(t, t_0)|\psi(t_0)\rangle$$

For a time-independent Hamiltonian:

$$\hat◆LB◆U◆RB◆(t, t_0) = \exp\!\left(-\frac◆LB◆i\hat◆LB◆H◆RB◆(t - t_0)◆RB◆◆LB◆\hbar◆RB◆\right)$$

To prove unitarity, we show $\hat◆LB◆U◆RB◆^\dagger \hat◆LB◆U◆RB◆ = \hat◆LB◆I◆RB◆$:

$$\hat◆LB◆U◆RB◆^\dagger = \exp\!\left(\frac◆LB◆i\hat◆LB◆H◆RB◆^\dagger(t - t_0)◆RB◆◆LB◆\hbar◆RB◆\right) = \exp\!\left(\frac◆LB◆i\hat◆LB◆H◆RB◆(t - t_0)◆RB◆◆LB◆\hbar◆RB◆\right)$$

Since $\hat◆LB◆H◆RB◆ = \hat◆LB◆H◆RB◆^\dagger$ (Hermitian). Therefore:

$$\hat◆LB◆U◆RB◆^\dagger \hat◆LB◆U◆RB◆ = \exp\!\left(\frac◆LB◆i\hat◆LB◆H◆RB◆(t - t_0)◆RB◆◆LB◆\hbar◆RB◆\right)\exp\!\left(-\frac◆LB◆i\hat◆LB◆H◆RB◆(t - t_0)◆RB◆◆LB◆\hbar◆RB◆\right) = \hat◆LB◆I◆RB◆$$

Since commuting operators satisfy $e^A e^◆LB◆-A◆RB◆ = I$.

**Consequence.** Norm preservation:

$$\langle\psi(t)|\psi(t)\rangle = \langle\psi(t_0)|\hat◆LB◆U◆RB◆^\dagger\hat◆LB◆U◆RB◆|\psi(t_0)\rangle = \langle\psi(t_0)|\psi(t_0)\rangle$$

Total probability is conserved under time evolution. $\blacksquare$

**Composing evolutions.** For successive time intervals, the evolution operator composes as:

$$\hat◆LB◆U◆RB◆(t_2, t_0) = \hat◆LB◆U◆RB◆(t_2, t_1)\,\hat◆LB◆U◆RB◆(t_1, t_0)$$

This composition law, combined with unitarity, is the group structure underlying quantum dynamics.
For a time-dependent Hamiltonian, the evolution operator is given by Dyson's time-ordered
exponential:

$$\hat◆LB◆U◆RB◆(t, t_0) = \mathcal◆LB◆T◆RB◆\exp\!\left(-\frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\int_◆LB◆t_0◆RB◆^◆LB◆t◆RB◆\hat◆LB◆H◆RB◆(t')\,dt'\right)$$

Where $\mathcal◆LB◆T◆RB◆$ denotes time ordering (later times appear to the left).

For a time-dependent Hamiltonian, the evolution operator satisfies
$i\hbar\,\partial\hat◆LB◆U◆RB◆/\partial t = \hat◆LB◆H◆RB◆(t)\hat◆LB◆U◆RB◆$ With $\hat◆LB◆U◆RB◆(t_0, t_0) = \hat◆LB◆I◆RB◆$.
Unitarity still holds: $d(\hat◆LB◆U◆RB◆^\dagger\hat◆LB◆U◆RB◆)/dt = 0$ since $\hat◆LB◆H◆RB◆(t) = \hat◆LB◆H◆RB◆^\dagger(t)$.

### 3.6 Normalisation of Wave Functions

A physically valid wave function must satisfy $\int |\psi|^2\,dx = 1$. This determines the
normalisation Constant.

**Example 3.1.** Normalise the wave function $\psi(x) = Ae^◆LB◆-\alpha|x|◆RB◆$ for
$-\infty \lt x \lt \infty$ Where $\alpha \gt 0$.

<details>
<summary>Solution</summary>

$$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ |A|^2 e^◆LB◆-2\alpha|x|◆RB◆\,dx = 2|A|^2 \int_0^◆LB◆\infty◆RB◆ e^◆LB◆-2\alpha x◆RB◆\,dx = 2|A|^2 \cdot \frac◆LB◆1◆RB◆◆LB◆2\alpha◆RB◆ = \frac◆LB◆|A|^2◆RB◆◆LB◆\alpha◆RB◆ = 1$$

Therefore $|A| = \sqrt◆LB◆\alpha◆RB◆$And we choose $A = \sqrt◆LB◆\alpha◆RB◆$:

$$\psi(x) = \sqrt◆LB◆\alpha◆RB◆\,e^◆LB◆-\alpha|x|◆RB◆$$

To find $\langle x \rangle$:

$$\langle x \rangle = \alpha \int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ x\,e^◆LB◆-2\alpha|x|◆RB◆\,dx = 0$$

By symmetry (the integrand is odd). For $\langle x^2 \rangle$:

$$\langle x^2 \rangle = 2\alpha \int_0^◆LB◆\infty◆RB◆ x^2 e^◆LB◆-2\alpha x◆RB◆\,dx = 2\alpha \cdot \frac◆LB◆2◆RB◆◆LB◆(2\alpha)^3◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2\alpha^2◆RB◆$$

So $\Delta x = \sqrt◆LB◆\langle x^2 \rangle - \langle x \rangle^2◆RB◆ = 1/(\sqrt◆LB◆2◆RB◆\,\alpha)$.

The uncertainty product for this state is $\sigma_x\,\sigma_p = \hbar/(2\sqrt◆LB◆2◆RB◆)$Which is larger
Than the minimum $\hbar/2$Showing this is not a minimum-uncertainty state.

</details>

**Example 3.2.** Normalise $\psi(x) = Axe^◆LB◆-\alpha x^2◆RB◆$ for $-\infty \lt x \lt \infty$.

<details>
<summary>Solution</summary>

$$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ |A|^2 x^2 e^◆LB◆-2\alpha x^2◆RB◆\,dx = |A|^2 \cdot \frac◆LB◆1◆RB◆◆LB◆4\alpha◆RB◆\sqrt◆LB◆\frac◆LB◆\pi◆RB◆◆LB◆2\alpha◆RB◆◆RB◆ = 1$$

Using the Gaussian integral
$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ x^2 e^◆LB◆-ax^2◆RB◆\,dx = \frac◆LB◆1◆RB◆◆LB◆2a◆RB◆\sqrt◆LB◆\frac◆LB◆\pi◆RB◆◆LB◆a◆RB◆◆RB◆$. Therefore:

$$A = 2\sqrt◆LB◆\alpha◆RB◆\left(\frac◆LB◆2\alpha◆RB◆◆LB◆\pi◆RB◆\right)^◆LB◆1/4◆RB◆$$

</details>

### 3.7 Time-Dependent Perturbation Theory

When the Hamiltonian has a time-dependent perturbation, $\hat◆LB◆H◆RB◆(t) = \hat◆LB◆H◆RB◆_0 + \hat◆LB◆V◆RB◆(t)$The
Transition probability from initial state $|i\rangle$ to final state $|f\rangle$ (with
$E_i \neq E_f$) is computed in the interaction picture.

**First-order transition amplitude.** If the system starts in $|i\rangle$ at $t = 0$The probability
Amplitude for being in $|f\rangle$ at time $t$ is, to first order:

$$c_f(t) = -\frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\int_0^t \langle f | \hat◆LB◆V◆RB◆(t') | i \rangle\, e^◆LB◆i\omega_◆LB◆fi◆RB◆t'◆RB◆\,dt'$$

Where $\omega_◆LB◆fi◆RB◆ = (E_f - E_i)/\hbar$ is the Bohr frequency.

**Constant perturbation.** If $\hat◆LB◆V◆RB◆(t) = \hat◆LB◆V◆RB◆_0$ (constant) for $0 \lt t \lt T$:

$$c_f(T) = -\frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆V_◆LB◆fi◆RB◆\int_0^T e^◆LB◆i\omega_◆LB◆fi◆RB◆t'◆RB◆\,dt' = -\frac◆LB◆V_◆LB◆fi◆RB◆◆RB◆◆LB◆\hbar\omega_◆LB◆fi◆RB◆◆RB◆\!\left(e^◆LB◆i\omega_◆LB◆fi◆RB◆T◆RB◆ - 1\right)$$

The transition probability is:

$$P_◆LB◆i \to f◆RB◆(T) = \frac◆LB◆|V_◆LB◆fi◆RB◆|^2◆RB◆◆LB◆\hbar^2◆RB◆\,\frac◆LB◆\sin^2(\omega_◆LB◆fi◆RB◆T/2)◆RB◆◆LB◆(\omega_◆LB◆fi◆RB◆/2)^2◆RB◆$$

This function is sharply peaked around $\omega_◆LB◆fi◆RB◆ = 0$ (resonance), with width
$\Delta\omega \sim 2\pi/T$.

**Interpretation.** As $T \to \infty$The function
$\sin^2(\omega_◆LB◆fi◆RB◆T/2)/(\omega_◆LB◆fi◆RB◆/2)^2 \to 2\pi T\,\delta(\omega_◆LB◆fi◆RB◆)$ So transitions occur only
when energy is conserved ($E_f = E_i$). For finite $T$Energy conservation Is approximate to within
$\Delta E \sim \hbar/T$A manifestation of the time-energy uncertainty Relation.

**Fermi's Golden Rule.** For a transition to a continuum of final states with density of states
$\rho(E_f)$The transition **rate** (probability per unit time) is:

$$\Gamma_◆LB◆i \to f◆RB◆ = \frac◆LB◆2\pi◆RB◆◆LB◆\hbar◆RB◆|\langle f | \hat◆LB◆V◆RB◆ | i \rangle|^2\,\rho(E_f)$$

This is one of the most important results in quantum mechanics, with applications to spontaneous
Emission, scattering theory, and condensed matter physics.

**Sudden and adiabatic approximations.**

- **Sudden approximation.** If the Hamiltonian changes rapidly compared to the system's natural
  timescale $\sim \hbar/\Delta E$The state does not have time to adjust:
  $|\psi_◆LB◆\mathrm◆LB◆after◆RB◆\rangle = |\psi_◆LB◆\mathrm◆LB◆before◆RB◆\rangle$. The probability of finding the
  system in the new $n$-th eigenstate is
  $P_n = |\langle n_◆LB◆\mathrm◆LB◆new◆RB◆|\psi_◆LB◆\mathrm◆LB◆before◆RB◆\rangle|^2$.

- **Adiabatic theorem.** If the Hamiltonian changes slowly enough (specifically, if
  $|\langle m|\partial\hat◆LB◆H◆RB◆/\partial t|n\rangle|/(\hbar\omega_◆LB◆mn◆RB◆^2) \ll 1$ for all $m \neq n$),
  the system remains in an instantaneous eigenstate without transitions. The adiabatic condition
  requires the rate of change to be much slower than the energy gap divided by $\hbar$.

**Harmonic perturbation.** For a sinusoidal perturbation
$\hat◆LB◆V◆RB◆(t) = \hat◆LB◆V◆RB◆_1\,e^◆LB◆-i\omega t◆RB◆ + \hat◆LB◆V◆RB◆_1^\dagger\,e^◆LB◆i\omega t◆RB◆$ The first-order
transition rate from $|i\rangle$ to $|f\rangle$ is significant only when
$\omega \approx \omega_◆LB◆fi◆RB◆$ (absorption) or $\omega \approx -\omega_◆LB◆fi◆RB◆$ (stimulated emission).
The transition probability for Resonant absorption ($\omega \approx \omega_◆LB◆fi◆RB◆$) is:

$$P_◆LB◆i\to f◆RB◆(t) = \frac◆LB◆|\langle f|\hat◆LB◆V◆RB◆_1|i\rangle|^2◆RB◆◆LB◆\hbar^2◆RB◆\,\frac◆LB◆\sin^2((\omega - \omega_◆LB◆fi◆RB◆)t/2)◆RB◆◆LB◆(\omega - \omega_◆LB◆fi◆RB◆)^2/4◆RB◆$$

In the long-time limit, this reduces to Fermi's Golden Rule with the replacement
$V_◆LB◆fi◆RB◆ \to \langle f|\hat◆LB◆V◆RB◆_1|i\rangle$.

## 4. Operators and Observables

### 4.1 Position and Momentum Operators

In the position representation:

$$\hat◆LB◆x◆RB◆ = x, \quad \hat◆LB◆p◆RB◆ = -i\hbar\frac◆LB◆\partial◆RB◆◆LB◆\partial x◆RB◆$$

These satisfy the **canonical commutation relation**:

$$[\hat◆LB◆x◆RB◆, \hat◆LB◆p◆RB◆] = i\hbar$$

### 4.2 General Properties of Hermitian Operators

**Hermitian operators** have real eigenvalues and orthogonal eigenstates -- essential for
observables.

**Theorem 4.1.** If $\hat◆LB◆A◆RB◆$ is Hermitian, then:

- All eigenvalues are real.
- Eigenstates corresponding to distinct eigenvalues are orthogonal.
- The eigenstates form a complete basis (for the space of physical states).

_Proof that eigenvalues are real._ Let $\hat◆LB◆A◆RB◆|a\rangle = a|a\rangle$ with
$\langle a|a\rangle = 1$. Then:

$$\langle a|\hat◆LB◆A◆RB◆|a\rangle = a\langle a|a\rangle = a$$

Taking the complex conjugate:

$$\langle a|\hat◆LB◆A◆RB◆|a\rangle^* = \langle a|\hat◆LB◆A◆RB◆^\dagger|a\rangle = \langle a|\hat◆LB◆A◆RB◆|a\rangle = a^*$$

Where the second equality uses $\hat◆LB◆A◆RB◆ = \hat◆LB◆A◆RB◆^\dagger$. Therefore $a = a^*$So $a$ is real.
$\blacksquare$

_Proof that eigenstates are orthogonal._ Let $\hat◆LB◆A◆RB◆|a\rangle = a|a\rangle$ and
$\hat◆LB◆A◆RB◆|b\rangle = b|b\rangle$ With $a \neq b$:

$$\langle b|\hat◆LB◆A◆RB◆|a\rangle = a\langle b|a\rangle$$

$$\langle b|\hat◆LB◆A◆RB◆|a\rangle = \langle\hat◆LB◆A◆RB◆b|a\rangle = b^*\langle b|a\rangle = b\langle b|a\rangle$$

Where the last step uses $b^* = b$ (eigenvalues are real). Therefore:

$$(a - b)\langle b|a\rangle = 0$$

Since $a \neq b$We must have $\langle b|a\rangle = 0$. $\blacksquare$

**Theorem 4.2 (Spectral Theorem).** Every Hermitian operator on a finite-dimensional Hilbert space
Has a complete orthonormal set of eigenvectors. In infinite dimensions, this holds for Self-adjoint
operators with a discrete spectrum; operators with continuous spectra require the Spectral theorem
in its general form (resolution of the identity).

### 4.3 Commutators

The **commutator** of two operators is $[\hat◆LB◆A◆RB◆, \hat◆LB◆B◆RB◆] = \hat◆LB◆A◆RB◆\hat◆LB◆B◆RB◆ - \hat◆LB◆B◆RB◆\hat◆LB◆A◆RB◆$.

**Theorem 4.3 (Generalised Uncertainty Principle).** For observables $\hat◆LB◆A◆RB◆$ and $\hat◆LB◆B◆RB◆$:

$$\sigma_A \sigma_B \geq \frac◆LB◆1◆RB◆◆LB◆2◆RB◆|\langle[\hat◆LB◆A◆RB◆, \hat◆LB◆B◆RB◆]\rangle|$$

**Corollary 4.4 (Heisenberg Uncertainty Principle).** $\sigma_x \sigma_p \geq \hbar/2$.

_Proof._ This follows from the generalised uncertainty principle with $[\hat◆LB◆x◆RB◆, \hat◆LB◆p◆RB◆] = i\hbar$:

$$\sigma_x \sigma_p \geq \frac◆LB◆1◆RB◆◆LB◆2◆RB◆|\langle i\hbar \rangle| = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆$$

$\blacksquare$

### 4.4 Proof of the Generalised Uncertainty Principle

**Theorem 4.5 (Robertson-Schrodinger inequality).** For any state $|\psi\rangle$ and observables
$\hat◆LB◆A◆RB◆$, $\hat◆LB◆B◆RB◆$:

$$\sigma_A^2\,\sigma_B^2 \geq \frac◆LB◆1◆RB◆◆LB◆4◆RB◆|\langle[\hat◆LB◆A◆RB◆, \hat◆LB◆B◆RB◆]\rangle|^2 + \frac◆LB◆1◆RB◆◆LB◆4◆RB◆\langle\{\Delta\hat◆LB◆A◆RB◆, \Delta\hat◆LB◆B◆RB◆\}\rangle^2$$

Where $\Delta\hat◆LB◆A◆RB◆ = \hat◆LB◆A◆RB◆ - \langle\hat◆LB◆A◆RB◆\rangle$ and
$\sigma_A^2 = \langle\Delta\hat◆LB◆A◆RB◆^2\rangle$.

_Proof._ Define $|\alpha\rangle = (\Delta\hat◆LB◆A◆RB◆ + i\lambda\Delta\hat◆LB◆B◆RB◆)|\psi\rangle$ for a real
Parameter $\lambda$. Since $\langle\alpha|\alpha\rangle \geq 0$:

$$\langle\psi|(\Delta\hat◆LB◆A◆RB◆ - i\lambda\Delta\hat◆LB◆B◆RB◆)(\Delta\hat◆LB◆A◆RB◆ + i\lambda\Delta\hat◆LB◆B◆RB◆)|\psi\rangle \geq 0$$

$$= \sigma_A^2 + i\lambda\langle[\Delta\hat◆LB◆A◆RB◆, \Delta\hat◆LB◆B◆RB◆]\rangle + \lambda^2\sigma_B^2 \geq 0$$

This is a quadratic in $\lambda$ that is non-negative for all $\lambda$So its discriminant must be
Non-positive:

$$(\langle[\Delta\hat◆LB◆A◆RB◆, \Delta\hat◆LB◆B◆RB◆]\rangle)^2 - 4\sigma_A^2\sigma_B^2 \leq 0$$

Since $[\Delta\hat◆LB◆A◆RB◆, \Delta\hat◆LB◆B◆RB◆] = [\hat◆LB◆A◆RB◆, \hat◆LB◆B◆RB◆]$ (constants commute with everything):

$$\sigma_A^2\,\sigma_B^2 \geq \frac◆LB◆1◆RB◆◆LB◆4◆RB◆|\langle[\hat◆LB◆A◆RB◆, \hat◆LB◆B◆RB◆]\rangle|^2 \qquad \blacksquare$$

The stronger Robertson-Schrodinger form retains the anticommutator term
$\langle\{\Delta\hat◆LB◆A◆RB◆, \Delta\hat◆LB◆B◆RB◆\}\rangle^2$ Which is always non-negative and provides a
tighter bound.

**Example 4.1.** Show that the uncertainty principle is saturated for the harmonic oscillator ground
state.

<details>
<summary>Solution</summary>

For the ground state $\psi_0(x) = (m\omega/\pi\hbar)^◆LB◆1/4◆RB◆\exp(-m\omega x^2/(2\hbar))$:

$$\langle x \rangle = 0, \quad \langle x^2 \rangle = \frac◆LB◆\hbar◆RB◆◆LB◆2m\omega◆RB◆ \implies \sigma_x = \sqrt◆LB◆\frac◆LB◆\hbar◆RB◆◆LB◆2m\omega◆RB◆◆RB◆$$

$$\langle p \rangle = 0, \quad \langle p^2 \rangle = \frac◆LB◆m\omega\hbar◆RB◆◆LB◆2◆RB◆ \implies \sigma_p = \sqrt◆LB◆\frac◆LB◆m\omega\hbar◆RB◆◆LB◆2◆RB◆◆RB◆$$

$$\sigma_x\,\sigma_p = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆$$

This saturates the Heisenberg bound, so the ground state is a **minimum uncertainty state**
(Gaussian).

</details>

### 4.5 Expectation Values

The **expectation value** of an observable $\hat◆LB◆A◆RB◆$ in state $|\psi\rangle$:

$$\langle A \rangle = \langle \psi | \hat◆LB◆A◆RB◆ | \psi \rangle = \int \psi^* \hat◆LB◆A◆RB◆ \psi\, dx$$

**Theorem 4.6 (Ehrenfest's Theorem).** Quantum expectation values obey classical equations of
motion:

$$\frac◆LB◆d\langle \hat◆LB◆x◆RB◆ \rangle◆RB◆◆LB◆dt◆RB◆ = \frac◆LB◆\langle \hat◆LB◆p◆RB◆ \rangle◆RB◆◆LB◆m◆RB◆, \quad \frac◆LB◆d\langle \hat◆LB◆p◆RB◆ \rangle◆RB◆◆LB◆dt◆RB◆ = -\left\langle \frac◆LB◆\partial V◆RB◆◆LB◆\partial x◆RB◆\right\rangle$$

_Proof of Ehrenfest's Theorem._ From the Schrodinger equation:

$$\frac◆LB◆d\langle \hat◆LB◆A◆RB◆ \rangle◆RB◆◆LB◆dt◆RB◆ = \frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\langle[\hat◆LB◆H◆RB◆, \hat◆LB◆A◆RB◆]\rangle + \left\langle\frac◆LB◆\partial \hat◆LB◆A◆RB◆◆RB◆◆LB◆\partial t◆RB◆\right\rangle$$

For $\hat◆LB◆A◆RB◆ = \hat◆LB◆x◆RB◆$ (no explicit time dependence), using
$[\hat◆LB◆p◆RB◆^2, \hat◆LB◆x◆RB◆] = -2i\hbar\hat◆LB◆p◆RB◆$:

$$\frac◆LB◆d\langle \hat◆LB◆x◆RB◆ \rangle◆RB◆◆LB◆dt◆RB◆ = \frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\!\left\langle\left[\frac◆LB◆\hat◆LB◆p◆RB◆^2◆RB◆◆LB◆2m◆RB◆, \hat◆LB◆x◆RB◆\right]\right\rangle = \frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\cdot\frac◆LB◆-2i\hbar◆RB◆◆LB◆2m◆RB◆\langle\hat◆LB◆p◆RB◆\rangle = \frac◆LB◆\langle\hat◆LB◆p◆RB◆\rangle◆RB◆◆LB◆m◆RB◆$$

For $\hat◆LB◆A◆RB◆ = \hat◆LB◆p◆RB◆$Using $[V(\hat◆LB◆x◆RB◆), \hat◆LB◆p◆RB◆] = i\hbar\,V'(\hat◆LB◆x◆RB◆)$:

$$\frac◆LB◆d\langle \hat◆LB◆p◆RB◆ \rangle◆RB◆◆LB◆dt◆RB◆ = \frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\langle[V(\hat◆LB◆x◆RB◆), \hat◆LB◆p◆RB◆]\rangle = -\left\langle\frac◆LB◆\partial V◆RB◆◆LB◆\partial x◆RB◆\right\rangle$$

$\blacksquare$

**Correspondence principle.** Ehrenfest's theorem embodies the **correspondence principle**: in the
Classical limit (large quantum numbers or $\hbar \to 0$), quantum expectation values follow
Classical trajectories. However, this is only exact for linear or quadratic potentials; for general
Potentials, $\langle V'(x) \rangle \neq V'(\langle x \rangle)$So quantum corrections persist even
For large systems.

### 4.6 Solving Eigenvalue Equations

To find the eigenvalues and eigenvectors of an operator $\hat◆LB◆A◆RB◆$Solve:

$$\hat◆LB◆A◆RB◆|\phi\rangle = a|\phi\rangle \implies \det(\hat◆LB◆A◆RB◆ - a\hat◆LB◆I◆RB◆) = 0$$

The roots give the eigenvalues; substituting each back yields the eigenvectors.

**Example 4.3.** Find the eigenvalues and eigenvectors of
$\hat◆LB◆S◆RB◆_x = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆\begin◆LB◆pmatrix◆RB◆0&1\\1&0\end◆LB◆pmatrix◆RB◆$.

<details>
<summary>Solution</summary>

$$\det\!\left(\frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆\begin◆LB◆pmatrix◆RB◆-a & 1\\1 & -a\end◆LB◆pmatrix◆RB◆\right) = 0 \implies a^2 - 1 = 0 \implies a = \pm 1$$

Eigenvalues are $\pm\hbar/2$.

For $a = +1$:
$\begin◆LB◆pmatrix◆RB◆-1 & 1\\1 & -1\end◆LB◆pmatrix◆RB◆\begin◆LB◆pmatrix◆RB◆c_1\\c_2\end◆LB◆pmatrix◆RB◆ = 0 \implies c_1 = c_2$.
Normalised: $|+\rangle_x = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆\begin◆LB◆pmatrix◆RB◆1\\1\end◆LB◆pmatrix◆RB◆$.

For $a = -1$: $c_1 = -c_2$. Normalised:
$|-\rangle_x = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆\begin◆LB◆pmatrix◆RB◆1\\-1\end◆LB◆pmatrix◆RB◆$.

These are equal superpositions of the $S_z$ eigenstates. Note that measuring $S_x$ on a state of
Definite $S_z$ gives probabilistic outcomes, and vice versa.

</details>

## 5. One-Dimensional Problems

### 5.1 The Infinite Square Well

A particle of mass $m$ in a potential $V(x) = 0$ for $0 \lt x \lt L$ and $V(x) = \infty$ otherwise.

**Derivation.** Inside the well, the time-independent Schrodinger equation is:

$$-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\frac◆LB◆d^2\phi◆RB◆◆LB◆dx^2◆RB◆ = E\phi \implies \frac◆LB◆d^2\phi◆RB◆◆LB◆dx^2◆RB◆ + k^2\phi = 0$$

Where $k = \sqrt◆LB◆2mE◆RB◆/\hbar$. The general solution is:

$$\phi(x) = A\sin(kx) + B\cos(kx)$$

**Boundary conditions:** $\phi(0) = \phi(L) = 0$.

From $\phi(0) = 0$: $B = 0$So $\phi(x) = A\sin(kx)$.

From $\phi(L) = 0$: $\sin(kL) = 0$Which requires $kL = n\pi$ for $n = 1, 2, 3, \ldots$

Therefore $k_n = n\pi/L$ and:

$$E_n = \frac◆LB◆\hbar^2 k_n^2◆RB◆◆LB◆2m◆RB◆ = \frac◆LB◆n^2\pi^2\hbar^2◆RB◆◆LB◆2mL^2◆RB◆$$

**Normalisation.** $\int_0^L |A|^2\sin^2(n\pi x/L)\,dx = |A|^2 L/2 = 1$Giving $A = \sqrt◆LB◆2/L◆RB◆$.

**Solutions:**

$$\phi_n(x) = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆L◆RB◆◆RB◆\sin\left(\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\right), \quad E_n = \frac◆LB◆n^2 \pi^2 \hbar^2◆RB◆◆LB◆2mL^2◆RB◆, \quad n = 1, 2, 3, \ldots$$

**Properties:**

- The ground state ($n = 1$) has the lowest energy $E_1 > 0$ (**zero-point energy**).
- Energy levels are not equally spaced; $E_n \propto n^2$.
- There are $(n - 1)$ nodes in the $n$-th eigenstate.

:::caution Common Pitfall The ground state has $n = 1$Not $n = 0$. The solution $n = 0$ gives
$\phi(x) = 0$ everywhere, Which is not normalisable. Furthermore, $E_1 > 0$ (zero-point energy) is a
direct consequence of The uncertainty principle: confining the particle to a finite region requires
kinetic energy. :::

### 5.2 The Quantum Harmonic Oscillator

$V(x) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m\omega^2 x^2$.

#### 5.2.1 Algebraic Method: Ladder Operators

Define the **ladder operators** (creation and annihilation operators):

$$\hat◆LB◆a◆RB◆ = \sqrt◆LB◆\frac◆LB◆m\omega◆RB◆◆LB◆2\hbar◆RB◆◆RB◆\left(\hat◆LB◆x◆RB◆ + \frac◆LB◆i\hat◆LB◆p◆RB◆◆RB◆◆LB◆m\omega◆RB◆\right), \quad \hat◆LB◆a◆RB◆^\dagger = \sqrt◆LB◆\frac◆LB◆m\omega◆RB◆◆LB◆2\hbar◆RB◆◆RB◆\left(\hat◆LB◆x◆RB◆ - \frac◆LB◆i\hat◆LB◆p◆RB◆◆RB◆◆LB◆m\omega◆RB◆\right)$$

**Commutation relation.** Using $[\hat◆LB◆x◆RB◆, \hat◆LB◆p◆RB◆] = i\hbar$:

$$[\hat◆LB◆a◆RB◆, \hat◆LB◆a◆RB◆^\dagger] = \frac◆LB◆m\omega◆RB◆◆LB◆2\hbar◆RB◆\!\left[\hat◆LB◆x◆RB◆ + \frac◆LB◆i\hat◆LB◆p◆RB◆◆RB◆◆LB◆m\omega◆RB◆,\, \hat◆LB◆x◆RB◆ - \frac◆LB◆i\hat◆LB◆p◆RB◆◆RB◆◆LB◆m\omega◆RB◆\right] = \frac◆LB◆1◆RB◆◆LB◆2\hbar◆RB◆(-i)(i\hbar) + \frac◆LB◆1◆RB◆◆LB◆2\hbar◆RB◆(i)(-i\hbar) = 1$$

**Inversion.** From the definitions:

$$\hat◆LB◆x◆RB◆ = \sqrt◆LB◆\frac◆LB◆\hbar◆RB◆◆LB◆2m\omega◆RB◆◆RB◆(\hat◆LB◆a◆RB◆ + \hat◆LB◆a◆RB◆^\dagger), \quad \hat◆LB◆p◆RB◆ = -i\sqrt◆LB◆\frac◆LB◆m\omega\hbar◆RB◆◆LB◆2◆RB◆◆RB◆(\hat◆LB◆a◆RB◆ - \hat◆LB◆a◆RB◆^\dagger)$$

**Hamiltonian in terms of ladder operators.** Substituting into
$\hat◆LB◆H◆RB◆ = \hat◆LB◆p◆RB◆^2/(2m) + m\omega^2\hat◆LB◆x◆RB◆^2/2$:

$$\hat◆LB◆H◆RB◆ = \hbar\omega\!\left(\hat◆LB◆a◆RB◆^\dagger\hat◆LB◆a◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)$$

Where we used
$\hat◆LB◆a◆RB◆\hat◆LB◆a◆RB◆^\dagger = [\hat◆LB◆a◆RB◆, \hat◆LB◆a◆RB◆^\dagger] + \hat◆LB◆a◆RB◆^\dagger\hat◆LB◆a◆RB◆ = 1 + \hat◆LB◆a◆RB◆^\dagger\hat◆LB◆a◆RB◆$.

**Number operator.** $\hat◆LB◆N◆RB◆ = \hat◆LB◆a◆RB◆^\dagger\hat◆LB◆a◆RB◆$So $\hat◆LB◆H◆RB◆ = \hbar\omega(\hat◆LB◆N◆RB◆ + 1/2)$.

_Proof that $\hat◆LB◆a◆RB◆$ and $\hat◆LB◆a◆RB◆^\dagger$ lower and raise the energy._ Compute
$[\hat◆LB◆H◆RB◆, \hat◆LB◆a◆RB◆]$:

$$[\hat◆LB◆H◆RB◆, \hat◆LB◆a◆RB◆] = \hbar\omega[\hat◆LB◆a◆RB◆^\dagger\hat◆LB◆a◆RB◆, \hat◆LB◆a◆RB◆] = \hbar\omega(\hat◆LB◆a◆RB◆^\dagger[\hat◆LB◆a◆RB◆, \hat◆LB◆a◆RB◆] + [\hat◆LB◆a◆RB◆^\dagger, \hat◆LB◆a◆RB◆]\hat◆LB◆a◆RB◆) = -\hbar\omega\,\hat◆LB◆a◆RB◆$$

So $\hat◆LB◆H◆RB◆\hat◆LB◆a◆RB◆|n\rangle = (E_n - \hbar\omega)\hat◆LB◆a◆RB◆|n\rangle$: $\hat◆LB◆a◆RB◆$ lowers energy by
$\hbar\omega$. Similarly, $[\hat◆LB◆H◆RB◆, \hat◆LB◆a◆RB◆^\dagger] = +\hbar\omega\,\hat◆LB◆a◆RB◆^\dagger$.

Let $|n\rangle$ be an eigenstate with $\hat◆LB◆H◆RB◆|n\rangle = E_n|n\rangle$. Then:

$$\hat◆LB◆a◆RB◆|n\rangle = c_n|n-1\rangle, \quad \hat◆LB◆a◆RB◆^\dagger|n\rangle = c_◆LB◆n+1◆RB◆|n+1\rangle$$

The constants follow from normalisation. Since $\hat◆LB◆a◆RB◆^\dagger\hat◆LB◆a◆RB◆|n\rangle = n|n\rangle$:

$$\|c_n|n-1\rangle\|^2 = \langle n|\hat◆LB◆a◆RB◆^\dagger\hat◆LB◆a◆RB◆|n\rangle = n$$

Therefore:

$$\hat◆LB◆a◆RB◆|n\rangle = \sqrt◆LB◆n◆RB◆\,|n-1\rangle, \quad \hat◆LB◆a◆RB◆^\dagger|n\rangle = \sqrt◆LB◆n+1◆RB◆\,|n+1\rangle$$

**Ground state.** The lowering process must terminate: $\hat◆LB◆a◆RB◆|0\rangle = 0$. This gives the
Differential equation:

$$\left(x + \frac◆LB◆\hbar◆RB◆◆LB◆m\omega◆RB◆\frac◆LB◆d◆RB◆◆LB◆dx◆RB◆\right)\phi_0(x) = 0 \implies \phi_0(x) = \left(\frac◆LB◆m\omega◆RB◆◆LB◆\pi\hbar◆RB◆\right)^◆LB◆1/4◆RB◆\exp\!\left(-\frac◆LB◆m\omega x^2◆RB◆◆LB◆2\hbar◆RB◆\right)$$

**Energy spectrum.** $E_n = \hbar\omega(n + 1/2)$ for $n = 0, 1, 2, \ldots$ The zero-point energy
$E_0 = \hbar\omega/2 \gt 0$ is a direct consequence of $[\hat◆LB◆x◆RB◆, \hat◆LB◆p◆RB◆] = i\hbar$.

#### 5.2.2 Analytic Solution

The eigenfunctions involve Hermite polynomials $H_n$:

$$\phi_n(x) = \left(\frac◆LB◆m\omega◆RB◆◆LB◆\pi\hbar◆RB◆\right)^◆LB◆1/4◆RB◆ \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2^n n!◆RB◆◆RB◆ H_n\!\left(\sqrt◆LB◆\frac◆LB◆m\omega◆RB◆◆LB◆\hbar◆RB◆◆RB◆\,x\right) e^◆LB◆-m\omega x^2/(2\hbar)◆RB◆$$

The first few Hermite polynomials are $H_0(\xi) = 1$$H_1(\xi) = 2\xi$$H_2(\xi) = 4\xi^2 - 2$.

**Example 5.1.** Using the ladder operators, find $\phi_1(x)$ from $\phi_0(x)$.

<details>
<summary>Solution</summary>

$$\phi_1(x) \propto \hat◆LB◆a◆RB◆^\dagger\phi_0(x) = \sqrt◆LB◆\frac◆LB◆m\omega◆RB◆◆LB◆2\hbar◆RB◆◆RB◆\left(x - \frac◆LB◆\hbar◆RB◆◆LB◆m\omega◆RB◆\frac◆LB◆d◆RB◆◆LB◆dx◆RB◆\right)\phi_0(x)$$

$$= \sqrt◆LB◆\frac◆LB◆m\omega◆RB◆◆LB◆2\hbar◆RB◆◆RB◆\!\left(x + \frac◆LB◆\hbar◆RB◆◆LB◆m\omega◆RB◆\cdot\frac◆LB◆m\omega x◆RB◆◆LB◆\hbar◆RB◆\right)\phi_0(x) = \sqrt◆LB◆\frac◆LB◆m\omega◆RB◆◆LB◆2\hbar◆RB◆◆RB◆\cdot 2x\,\phi_0(x)$$

Normalising gives
$\phi_1(x) = \left(\frac◆LB◆m\omega◆RB◆◆LB◆\pi\hbar◆RB◆\right)^◆LB◆1/4◆RB◆\sqrt◆LB◆\frac◆LB◆2m\omega◆RB◆◆LB◆\hbar◆RB◆◆RB◆\,x\,e^◆LB◆-m\omega x^2/(2\hbar)◆RB◆$.

</details>

### 5.3 The Free Particle

$V(x) = 0$ everywhere. The Schrodinger equation:

$$-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\frac◆LB◆d^2\phi◆RB◆◆LB◆dx^2◆RB◆ = E\phi$$

Solutions: $\phi_k(x) = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2\pi◆RB◆◆RB◆ e^◆LB◆ikx◆RB◆$ with $E = \frac◆LB◆\hbar^2 k^2◆RB◆◆LB◆2m◆RB◆$.

The energy spectrum is **continuous** (all $E \geq 0$). The eigenfunctions are not normalisable
(plane Waves); physical states are **wave packets** constructed by superposition.

### 5.3.1 Parity

The **parity operator** $\hat◆LB◆\Pi◆RB◆$ reflects the coordinate: $\hat◆LB◆\Pi◆RB◆\psi(x) = \psi(-x)$.

**Properties:**

- $\hat◆LB◆\Pi◆RB◆^2 = \hat◆LB◆I◆RB◆$So eigenvalues are $\pm 1$.
- Even functions ($\psi(-x) = \psi(x)$) have parity $+1$.
- Odd functions ($\psi(-x) = -\psi(x)$) have parity $-1$.
- If $V(x) = V(-x)$ (symmetric potential), then $[\hat◆LB◆H◆RB◆, \hat◆LB◆\Pi◆RB◆] = 0$So energy eigenstates can
  be chosen to have definite parity.

**Theorem 5.1.** For a symmetric potential $V(x) = V(-x)$The energy eigenstates are either even Or
odd.

_Proof._ Since $[\hat◆LB◆H◆RB◆, \hat◆LB◆\Pi◆RB◆] = 0$There exists a simultaneous eigenbasis. Let
$\hat◆LB◆H◆RB◆\phi = E\phi$ and $\hat◆LB◆\Pi◆RB◆\phi = \pi\phi$ where $\pi = \pm 1$. Then
$\phi(-x) = \pi\phi(x)$ So $\phi$ is either even ($\pi = +1$) or odd ($\pi = -1$). $\blacksquare$

This theorem explains why the infinite square well, harmonic oscillator, and finite square well
Eigenstates all have definite parity: their potentials are all symmetric about the origin.

### 5.3.2 The Virial Theorem

**Theorem 5.2 (Virial Theorem).** For a stationary state of a Hamiltonian
$\hat◆LB◆H◆RB◆ = \hat◆LB◆p◆RB◆^2/(2m) + V(\hat◆LB◆x◆RB◆)$:

$$2\langle T \rangle = \langle x\,V'(x) \rangle$$

Where $T$ is the kinetic energy.

_Proof._ Using Ehrenfest's theorem for the operator $\hat◆LB◆G◆RB◆ = \hat◆LB◆x◆RB◆\hat◆LB◆p◆RB◆$:

$$\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆\langle\hat◆LB◆x◆RB◆\hat◆LB◆p◆RB◆\rangle = \frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\langle[\hat◆LB◆H◆RB◆, \hat◆LB◆x◆RB◆\hat◆LB◆p◆RB◆]\rangle = 0$$

For a stationary state. Computing the commutator:

$$[\hat◆LB◆H◆RB◆, \hat◆LB◆x◆RB◆\hat◆LB◆p◆RB◆] = \left[\frac◆LB◆\hat◆LB◆p◆RB◆^2◆RB◆◆LB◆2m◆RB◆ + V, \hat◆LB◆x◆RB◆\hat◆LB◆p◆RB◆\right] = \frac◆LB◆1◆RB◆◆LB◆2m◆RB◆[\hat◆LB◆p◆RB◆^2, \hat◆LB◆x◆RB◆]\hat◆LB◆p◆RB◆ + [\hat◆LB◆x◆RB◆\hat◆LB◆p◆RB◆, V] + \hat◆LB◆x◆RB◆[V, \hat◆LB◆p◆RB◆]$$

$$= \frac◆LB◆-i\hbar◆RB◆◆LB◆m◆RB◆\hat◆LB◆p◆RB◆\hat◆LB◆p◆RB◆ + \hat◆LB◆x◆RB◆[V, \hat◆LB◆p◆RB◆] + \hat◆LB◆x◆RB◆[V, \hat◆LB◆p◆RB◆] = \frac◆LB◆-i\hbar\hat◆LB◆p◆RB◆^2◆RB◆◆LB◆m◆RB◆ + 2i\hbar\hat◆LB◆x◆RB◆\,V'(x)$$

Setting $d\langle\hat◆LB◆x◆RB◆\hat◆LB◆p◆RB◆\rangle/dt = 0$ and dividing by $i\hbar$:

$$-\frac◆LB◆\langle\hat◆LB◆p◆RB◆^2\rangle◆RB◆◆LB◆m◆RB◆ + 2\langle\hat◆LB◆x◆RB◆\,V'(\hat◆LB◆x◆RB◆)\rangle = 0$$

$$-2\langle T \rangle + \langle x\,V'(x) \rangle = 0 \implies 2\langle T \rangle = \langle x\,V'(x) \rangle \qquad \blacksquare$$

**Applications.** For the harmonic oscillator ($V \propto x^2$):
$2\langle T \rangle = 2\langle V \rangle$ So $\langle T \rangle = \langle V \rangle = E/2$. For the
hydrogen atom ($V \propto -1/r$): $2\langle T \rangle = -\langle V \rangle$So
$\langle T \rangle = -E$ and $\langle V \rangle = 2E$.

### 5.4 The Finite Square Well

Consider $V(x) = -V_0$ for $|x| \lt a$ and $V(x) = 0$ for $|x| \gt a$Where $V_0 \gt 0$.

#### 5.4.1 Bound States ($E \lt 0$)

Define $k = \sqrt◆LB◆2m(E + V_0)◆RB◆/\hbar$ (inside) and $\kappa = \sqrt◆LB◆-2mE◆RB◆/\hbar$ (outside). Note that
$k^2 + \kappa^2 = 2mV_0/\hbar^2$.

**Even parity solutions.** Inside: $\phi(x) = A\cos(kx)$. Outside: $\phi(x) = Be^◆LB◆-\kappa|x|◆RB◆$.

Matching $\phi$ and $\phi'$ at $x = a$ and dividing the two conditions:

$$k\tan(ka) = \kappa$$

**Odd parity solutions.** Inside: $\phi(x) = A\sin(kx)$. Outside: $\phi(x) = Be^◆LB◆-\kappa|x|◆RB◆$ (with
sign For $x \lt 0$). Matching gives:

$$-k\cot(ka) = \kappa$$

These are transcendental equations solved graphically. Define $z = ka$ and
$z_0 = a\sqrt◆LB◆2mV_0/\hbar^2◆RB◆$.

The even condition becomes $\tan z = \sqrt◆LB◆z_0^2/z^2 - 1◆RB◆$ and the odd condition becomes
$-\cot z = \sqrt◆LB◆z_0^2/z^2 - 1◆RB◆$. The number of bound states is $N = \lfloor 2z_0/\pi \rfloor + 1$.
There is always at least one bound state (the even ground state).

#### 5.4.2 Scattering States ($E \gt 0$)

For $E \gt 0$The particle has enough energy to escape. Define $k_1 = \sqrt◆LB◆2mE◆RB◆/\hbar$ (outside) And
$k_2 = \sqrt◆LB◆2m(E + V_0)◆RB◆/\hbar$ (inside). The solutions are oscillatory everywhere. The
Transmission coefficient is:

$$T = \frac◆LB◆1◆RB◆◆LB◆1 + \dfrac◆LB◆V_0^2◆RB◆◆LB◆4E(E + V_0)◆RB◆\sin^2(2k_2 a)◆RB◆$$

**Resonances** occur when $2k_2 a = n\pi$ (integer multiples of $\pi$), giving $T = 1$: the well
Becomes perfectly transparent.

**Example 5.3.** A finite square well has $V_0 = 5\,\mathrm◆LB◆eV◆RB◆$ and $2a = 1\,\mathrm◆LB◆nm◆RB◆$. Estimate
the Number of bound states for an electron.

<details>
<summary>Solution</summary>

Compute $z_0 = a\sqrt◆LB◆2m_e V_0◆RB◆/\hbar$:

$$z_0 = (0.5 \times 10^◆LB◆-9◆RB◆)\frac◆LB◆\sqrt◆LB◆2(9.109 \times 10^◆LB◆-31◆RB◆)(5)(1.602 \times 10^◆LB◆-19◆RB◆)◆RB◆◆RB◆◆LB◆1.055 \times 10^◆LB◆-34◆RB◆◆RB◆$$

$$= (5 \times 10^◆LB◆-10◆RB◆)\frac◆LB◆\sqrt◆LB◆1.460 \times 10^◆LB◆-48◆RB◆◆RB◆◆RB◆◆LB◆1.055 \times 10^◆LB◆-34◆RB◆◆RB◆ = (5 \times 10^◆LB◆-10◆RB◆)\frac◆LB◆3.821 \times 10^◆LB◆-24◆RB◆◆RB◆◆LB◆1.055 \times 10^◆LB◆-34◆RB◆◆RB◆$$

$$= (5 \times 10^◆LB◆-10◆RB◆)(3.622 \times 10^◆LB◆10◆RB◆) = 18.11$$

The number of bound states is
$N = \lfloor 2z_0/\pi \rfloor + 1 = \lfloor 36.22/\pi \rfloor + 1 = \lfloor 11.53 \rfloor + 1 = 12$.

(Actually, the formula is $N = \lfloor z_0/(\pi/2) \rfloor + 1$ only when counting the number of
Intersections. With $z_0/(\pi/2) = 18.11/1.571 = 11.53$There are 11 full intersections plus one
Partial, giving about 11 or 12 bound states.)

</details>

### 5.5 The Delta Function Potential

Consider $V(x) = -\alpha\delta(x)$ where $\alpha \gt 0$.

#### 5.5.1 Bound State ($E \lt 0$)

The wave function is $\psi(x) = Ae^◆LB◆\kappa x◆RB◆$ for $x \lt 0$ and $\psi(x) = Be^◆LB◆-\kappa x◆RB◆$ for
$x \gt 0$ Where $\kappa = \sqrt◆LB◆-2mE◆RB◆/\hbar$.

**Matching conditions.**

1. **Continuity:** $A = B$ at $x = 0$.

2. **Discontinuity in derivative** (integrating the Schrodinger equation across $x = 0$):

$$\psi'(0^+) - \psi'(0^-) = -\frac◆LB◆2m\alpha◆RB◆◆LB◆\hbar^2◆RB◆\psi(0)$$

This gives $-\kappa B - \kappa A = -2m\alpha A/\hbar^2$And since $A = B$:

$$\kappa = \frac◆LB◆m\alpha◆RB◆◆LB◆\hbar^2◆RB◆$$

The bound state energy is:

$$E = -\frac◆LB◆\hbar^2\kappa^2◆RB◆◆LB◆2m◆RB◆ = -\frac◆LB◆m\alpha^2◆RB◆◆LB◆2\hbar^2◆RB◆$$

The normalised wave function is $\psi(x) = \sqrt◆LB◆\kappa◆RB◆\,e^◆LB◆-\kappa|x|◆RB◆$. There is exactly one
bound state.

#### 5.5.2 Scattering States ($E \gt 0$)

For a particle of energy $E = \hbar^2 k^2/(2m)$ incident from the left:

$$\psi(x) = \begin◆LB◆cases◆RB◆ e^◆LB◆ikx◆RB◆ + Re^◆LB◆-ikx◆RB◆ & x \lt 0 \\ Te^◆LB◆ikx◆RB◆ & x \gt 0 \end◆LB◆cases◆RB◆$$

Applying the matching conditions at $x = 0$:

$$1 + R = T, \quad ik(T - 1 - R) = -\frac◆LB◆2m\alpha◆RB◆◆LB◆\hbar^2◆RB◆T$$

Solving:

$$T = \frac◆LB◆ik◆RB◆◆LB◆ik - m\alpha/\hbar^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 + im\alpha/(\hbar^2 k)◆RB◆$$

$$R = \frac◆LB◆-m\alpha/\hbar^2◆RB◆◆LB◆ik - m\alpha/\hbar^2◆RB◆ = \frac◆LB◆-im\alpha/\hbar^2◆RB◆◆LB◆ik + m\alpha/\hbar^2◆RB◆$$

The transmission and reflection coefficients:

$$|T|^2 = \frac◆LB◆1◆RB◆◆LB◆1 + (m\alpha)^2/(\hbar^4 k^2)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 + m\alpha^2/(2\hbar^2 E)◆RB◆, \quad |R|^2 = 1 - |T|^2$$

Note that even for very high energies ($E \to \infty$),
$|R|^2 \to (m\alpha)^2/(\hbar^4 k^2) \neq 0$: The delta function always reflects some probability,
unlike a smooth potential which becomes Transparent at high energies. This is because the delta
function has an infinitely sharp feature At $x = 0$ that scatters waves of all wavelengths.

### 5.6 Quantum Tunnelling

Consider a rectangular barrier $V(x) = V_0$ for $0 \lt x \lt a$ and $V(x) = 0$ otherwise, with
$E \lt V_0$.

Inside the barrier, the Schrodinger equation gives exponentially decaying and growing solutions:

$$\psi(x) = Ce^◆LB◆\kappa x◆RB◆ + De^◆LB◆-\kappa x◆RB◆, \quad \kappa = \sqrt◆LB◆\frac◆LB◆2m(V_0 - E)◆RB◆◆LB◆\hbar^2◆RB◆◆RB◆$$

For a **thick barrier** ($\kappa a \gg 1$), the growing solution $Ce^◆LB◆\kappa x◆RB◆$ is negligible at
the Far edge, and the transmission coefficient simplifies to:

$$T \approx \frac◆LB◆16E(V_0 - E)◆RB◆◆LB◆V_0^2◆RB◆\,e^◆LB◆-2\kappa a◆RB◆$$

The exponential factor $e^◆LB◆-2\kappa a◆RB◆$ is the hallmark of quantum tunnelling: the probability of
Penetration decreases exponentially with barrier width and height.

:::caution Common Pitfall Tunnelling does not violate energy conservation. The particle does not
"have" energy $V_0$ inside The barrier; rather, the wave function extends into the classically
forbidden region with Exponentially decreasing amplitude. The particle's energy is $E \lt V_0$
throughout. :::

**Example 5.2.** An electron with $E = 5$ eV approaches a barrier of height $V_0 = 10$ eV and Width
$a = 0.5$ nm. Calculate $T$.

<details>
<summary>Solution</summary>

$$\kappa = \sqrt◆LB◆\frac◆LB◆2(9.109 \times 10^◆LB◆-31◆RB◆)(10 - 5)(1.602 \times 10^◆LB◆-19◆RB◆)◆RB◆◆LB◆(1.055 \times 10^◆LB◆-34◆RB◆)^2◆RB◆◆RB◆ = \sqrt◆LB◆1.302 \times 10^◆LB◆20◆RB◆◆RB◆ = 1.141 \times 10^◆LB◆10◆RB◆\;\mathrm◆LB◆m◆RB◆^◆LB◆-1◆RB◆◆RB◆$$

$$2\kappa a = 2(1.141 \times 10^◆LB◆10◆RB◆)(5 \times 10^◆LB◆-10◆RB◆) = 11.41$$

$$T \approx \frac◆LB◆16(5)(5)◆RB◆◆LB◆100◆RB◆\,e^◆LB◆-11.41◆RB◆ = 4.0 \times e^◆LB◆-11.41◆RB◆ = 4.0 \times 1.097 \times 10^◆LB◆-5◆RB◆ = 4.4 \times 10^◆LB◆-5◆RB◆$$

The electron has roughly a $0.004\%$ chance of tunnelling through this barrier.

</details>

**Application: alpha decay.** Alpha decay can be understood as quantum tunnelling through the
Coulomb Barrier. The Geiger-Nuttall law, which relates the decay constant to the alpha particle
energy, Follows directly from the exponential dependence of $T$ on the barrier width.

**Application: scanning tunnelling microscope (STM).** In an STM, a small voltage is applied between
A sharp tip and a conducting surface. Electrons tunnel across the gap, producing a current that
Depends exponentially on the tip-surface distance: $I \propto e^◆LB◆-2\kappa d◆RB◆$. This allows atomic-
Resolution imaging of surfaces, as a change in distance of $0.1$ nm changes the current by a factor
Of about 10.

## 6. Angular Momentum and the Hydrogen Atom

### 6.1 Angular Momentum Operators

$$\hat◆LB◆L◆RB◆_x = -i\hbar\left(y\frac◆LB◆\partial◆RB◆◆LB◆\partial z◆RB◆ - z\frac◆LB◆\partial◆RB◆◆LB◆\partial y◆RB◆\right), \quad \hat◆LB◆L◆RB◆_y = -i\hbar\left(z\frac◆LB◆\partial◆RB◆◆LB◆\partial x◆RB◆ - x\frac◆LB◆\partial◆RB◆◆LB◆\partial z◆RB◆\right), \quad \hat◆LB◆L◆RB◆_z = -i\hbar\left(x\frac◆LB◆\partial◆RB◆◆LB◆\partial y◆RB◆ - y\frac◆LB◆\partial◆RB◆◆LB◆\partial x◆RB◆\right)$$

**Commutation relations:**

$$[\hat◆LB◆L◆RB◆_x, \hat◆LB◆L◆RB◆_y] = i\hbar\hat◆LB◆L◆RB◆_z, \quad [\hat◆LB◆L◆RB◆_y, \hat◆LB◆L◆RB◆_z] = i\hbar\hat◆LB◆L◆RB◆_x, \quad [\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_x] = i\hbar\hat◆LB◆L◆RB◆_y$$

$$[\hat◆LB◆L◆RB◆^2, \hat◆LB◆L◆RB◆_i] = 0 \quad \mathrm◆LB◆for\ all\ ◆RB◆ i$$

**Simultaneous eigenstates:** $|l, m\rangle$ with

$$\hat◆LB◆L◆RB◆^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle, \quad \hat◆LB◆L◆RB◆_z|l,m\rangle = \hbar m|l,m\rangle$$

Where $l = 0, 1, 2, \ldots$ and $m = -l, -l+1, \ldots, l-1, l$.

### 6.2 Raising and Lowering Operators

Define the **ladder operators**:

$$\hat◆LB◆L◆RB◆_◆LB◆\pm◆RB◆ = \hat◆LB◆L◆RB◆_x \pm i\hat◆LB◆L◆RB◆_y$$

**Key commutation relations:**

$$[\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_◆LB◆\pm◆RB◆] = \pm\hbar\hat◆LB◆L◆RB◆_◆LB◆\pm◆RB◆, \quad [\hat◆LB◆L◆RB◆^2, \hat◆LB◆L◆RB◆_◆LB◆\pm◆RB◆] = 0$$

_Proof._
$[\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_+] = [\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_x] + i[\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_y] = i\hbar\hat◆LB◆L◆RB◆_y + i(i\hbar\hat◆LB◆L◆RB◆_x) = \hbar(\hat◆LB◆L◆RB◆_y + i\hat◆LB◆L◆RB◆_x)\cdot(-1)$

Wait, let us redo this carefully:

$$[\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_+] = [\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_x + i\hat◆LB◆L◆RB◆_y] = [\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_x] + i[\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_y] = i\hbar\hat◆LB◆L◆RB◆_y + i(-i\hbar\hat◆LB◆L◆RB◆_x) = i\hbar\hat◆LB◆L◆RB◆_y + \hbar\hat◆LB◆L◆RB◆_x = \hbar(\hat◆LB◆L◆RB◆_x + i\hat◆LB◆L◆RB◆_y) = \hbar\hat◆LB◆L◆RB◆_+$$

Similarly, $[\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_-] = -\hbar\hat◆LB◆L◆RB◆_-$. And:

$$[\hat◆LB◆L◆RB◆^2, \hat◆LB◆L◆RB◆_+] = [\hat◆LB◆L◆RB◆_x^2 + \hat◆LB◆L◆RB◆_y^2 + \hat◆LB◆L◆RB◆_z^2, \hat◆LB◆L◆RB◆_+] = 0$$

Since $\hat◆LB◆L◆RB◆^2$ commutes with each component. $\blacksquare$

**Action on eigenstates.** Since $[\hat◆LB◆L◆RB◆_z, \hat◆LB◆L◆RB◆_+] = \hbar\hat◆LB◆L◆RB◆_+$:

$$\hat◆LB◆L◆RB◆_z(\hat◆LB◆L◆RB◆_+|l,m\rangle) = (\hat◆LB◆L◆RB◆_+\hat◆LB◆L◆RB◆_z + \hbar\hat◆LB◆L◆RB◆_+)|l,m\rangle = \hbar(m+1)(\hat◆LB◆L◆RB◆_+|l,m\rangle)$$

So $\hat◆LB◆L◆RB◆_+|l,m\rangle$ is an eigenstate of $\hat◆LB◆L◆RB◆_z$ with eigenvalue $\hbar(m+1)$: it raises
$m$ by 1. Similarly, $\hat◆LB◆L◆RB◆_-$ lowers $m$ by 1. Both preserve the $l$ value since
$[\hat◆LB◆L◆RB◆^2, \hat◆LB◆L◆RB◆_◆LB◆\pm◆RB◆] = 0$.

**Normalisation.** Write $\hat◆LB◆L◆RB◆_+|l,m\rangle = C_+(l,m)|l,m+1\rangle$. Then:

$$|C_+(l,m)|^2 = \langle l,m|\hat◆LB◆L◆RB◆_-\hat◆LB◆L◆RB◆_+|l,m\rangle$$

Using $\hat◆LB◆L◆RB◆_-\hat◆LB◆L◆RB◆_+ = \hat◆LB◆L◆RB◆^2 - \hat◆LB◆L◆RB◆_z^2 - \hbar\hat◆LB◆L◆RB◆_z$:

$$|C_+(l,m)|^2 = \hbar^2 l(l+1) - \hbar^2 m^2 - \hbar^2 m = \hbar^2[l(l+1) - m(m+1)]$$

Therefore:

$$\hat◆LB◆L◆RB◆_+|l,m\rangle = \hbar\sqrt◆LB◆l(l+1) - m(m+1)◆RB◆\,|l,m+1\rangle$$

$$\hat◆LB◆L◆RB◆_-|l,m\rangle = \hbar\sqrt◆LB◆l(l+1) - m(m-1)◆RB◆\,|l,m-1\rangle$$

### 6.3 Eigenvalue Spectrum of Angular Momentum

**Theorem 6.1.** The quantum numbers $l$ and $m$ satisfy:

- $l = 0, 1/2, 1, 3/2, 2, \ldots$ (integer or half-integer)
- For a given $l$: $m = -l, -l+1, \ldots, l-1, l$ (there are $2l+1$ values)
- For **orbital** angular momentum, $l$ is restricted to non-negative integers.

_Proof._ Starting from a state $|l,m\rangle$Repeatedly applying $\hat◆LB◆L◆RB◆_+$ raises $m$ by 1 each
time. The norm of the resulting state is:

$$\|\hat◆LB◆L◆RB◆_+|l,m\rangle\|^2 = \hbar^2[l(l+1) - m(m+1)]$$

This must remain non-negative, so $m(m+1) \leq l(l+1)$Giving $m \leq l$. The raising process must
Terminate at some maximum $m_◆LB◆\max◆RB◆$ where $\hat◆LB◆L◆RB◆_+|l, m_◆LB◆\max◆RB◆\rangle = 0$:

$$l(l+1) - m_◆LB◆\max◆RB◆(m_◆LB◆\max◆RB◆ + 1) = 0$$

Similarly, the lowering process terminates at $m_◆LB◆\min◆RB◆$ where $\hat◆LB◆L◆RB◆_-|l, m_◆LB◆\min◆RB◆\rangle = 0$:

$$l(l+1) - m_◆LB◆\min◆RB◆(m_◆LB◆\min◆RB◆ - 1) = 0$$

Subtracting: $m_◆LB◆\max◆RB◆(m_◆LB◆\max◆RB◆+1) - m_◆LB◆\min◆RB◆(m_◆LB◆\min◆RB◆-1) = 0$. Since we reach $m_◆LB◆\max◆RB◆$ from
$m_◆LB◆\min◆RB◆$ in $N$ steps: $m_◆LB◆\max◆RB◆ = m_◆LB◆\min◆RB◆ + N$. Solving gives $m_◆LB◆\max◆RB◆ = l$ and
$m_◆LB◆\min◆RB◆ = -l$So $N = 2l$Meaning $2l$ must be a non-negative integer. Therefore
$l = 0, 1/2, 1, 3/2, \ldots$ and $m$ takes $2l+1$ values from $-l$ to $l$. $\blacksquare$

For orbital angular momentum (defined as
$\hat◆LB◆\mathbf◆LB◆L◆RB◆◆RB◆ = \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆ \times \hat◆LB◆\mathbf◆LB◆p◆RB◆◆RB◆$), The wave function must be
single-valued under a full rotation $\phi \to \phi + 2\pi$. This requires
$e^◆LB◆im\phi◆RB◆ = e^◆LB◆im(\phi+2\pi)◆RB◆$So $m$ must be an integer, which restricts $l$ to integers.

### 6.4 Spherical Harmonics

The simultaneous eigenfunctions of $\hat◆LB◆L◆RB◆^2$ and $\hat◆LB◆L◆RB◆_z$ are the **spherical harmonics**
$Y_l^m(\theta, \phi)$:

$$Y_l^m(\theta, \phi) = (-1)^m\sqrt◆LB◆\frac◆LB◆2l+1◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆(l-m)!◆RB◆◆LB◆(l+m)!◆RB◆◆RB◆\,P_l^m(\cos\theta)\,e^◆LB◆im\phi◆RB◆$$

Where $P_l^m$ are the associated Legendre functions.

**Properties:**

- Orthonormality: $\int Y_l^m^*\, Y_◆LB◆l'◆RB◆^◆LB◆m'◆RB◆\,d\Omega = \delta_◆LB◆ll'◆RB◆\delta_◆LB◆mm'◆RB◆$
- Completeness:
  $\sum_◆LB◆l=0◆RB◆^◆LB◆\infty◆RB◆\sum_◆LB◆m=-l◆RB◆^◆LB◆l◆RB◆ Y_l^m(\theta,\phi)\,Y_l^m^*(\theta',\phi') = \delta(\cos\theta - \cos\theta')\delta(\phi - \phi')$
- Parity: $Y_l^m(\pi-\theta, \phi+\pi) = (-1)^l\,Y_l^m(\theta,\phi)$

**First few spherical harmonics:**

| $(l, m)$     | $Y_l^m(\theta,\phi)$                                 |
| ------------ | ---------------------------------------------------- |
| $(0, 0)$     | $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆4\pi◆RB◆◆RB◆$                             |
| $(1, 0)$     | $\sqrt◆LB◆\dfrac◆LB◆3◆RB◆◆LB◆4\pi◆RB◆◆RB◆\cos\theta$                   |
| $(1, \pm 1)$ | $\mp\sqrt◆LB◆\dfrac◆LB◆3◆RB◆◆LB◆8\pi◆RB◆◆RB◆\sin\theta\,e^◆LB◆\pm i\phi◆RB◆$ |
| $(2, 0)$     | $\sqrt◆LB◆\dfrac◆LB◆5◆RB◆◆LB◆16\pi◆RB◆◆RB◆(3\cos^2\theta - 1)$         |

### 6.5 The Hydrogen Atom

The Hamiltonian for hydrogen (electron of mass $m_e$ and charge $-e$Proton of charge $+e$):

$$\hat◆LB◆H◆RB◆ = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆\nabla^2 - \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 r◆RB◆$$

#### 6.5.1 Separation of Variables

In spherical coordinates, the Laplacian separates, and we write
$\psi(r,\theta,\phi) = R(r)\,Y_l^m(\theta,\phi)$. The radial equation is:

$$-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆\frac◆LB◆1◆RB◆◆LB◆r^2◆RB◆\frac◆LB◆d◆RB◆◆LB◆dr◆RB◆\!\left(r^2\frac◆LB◆dR◆RB◆◆LB◆dr◆RB◆\right) + \left[-\frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 r◆RB◆ + \frac◆LB◆\hbar^2 l(l+1)◆RB◆◆LB◆2m_e r^2◆RB◆\right]R = ER$$

The term $\hbar^2 l(l+1)/(2m_e r^2$ acts as an effective **centrifugal barrier**.

#### 6.5.2 Solving the Radial Equation

Substitute $u(r) = rR(r)$ and define the Bohr radius $a_0 = 4\pi\varepsilon_0\hbar^2/(m_e e^2)$ and
the Rydberg energy $E_R = e^2/(8\pi\varepsilon_0 a_0) = m_e e^4/(8\varepsilon_0^2 h^2)$. With the
substitution $\rho = 2r/(na_0)$The radial equation becomes:

$$\frac◆LB◆d^2u◆RB◆◆LB◆d\rho^2◆RB◆ = \left[\frac◆LB◆l(l+1)◆RB◆◆LB◆\rho^2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆\rho◆RB◆ + \frac◆LB◆n◆RB◆◆LB◆4◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆ - \frac◆LB◆E◆RB◆◆LB◆E_R◆RB◆\right)\right]u$$

For the solution to be well-behaved at both $\rho = 0$ and $\rho \to \infty$We require:

$$E = -\frac◆LB◆E_R◆RB◆◆LB◆n^2◆RB◆ = -\frac◆LB◆m_e e^4◆RB◆◆LB◆2(4\pi\varepsilon_0)^2\hbar^2◆RB◆\cdot\frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆$$

With $n = 1, 2, 3, \ldots$ and $l = 0, 1, \ldots, n-1$.

The radial wave functions are:

$$R_◆LB◆nl◆RB◆(r) = \sqrt◆LB◆◆LB◆\left(\frac◆LB◆2◆RB◆◆LB◆na_0◆RB◆\right)◆RB◆^3\frac◆LB◆(n-l-1)!◆RB◆◆LB◆2n[(n+l)!]^3◆RB◆◆RB◆\,e^◆LB◆-r/(na_0)◆RB◆\!\left(\frac◆LB◆2r◆RB◆◆LB◆na_0◆RB◆\right)^l L_◆LB◆n-l-1◆RB◆^◆LB◆2l+1◆RB◆\!\left(\frac◆LB◆2r◆RB◆◆LB◆na_0◆RB◆\right)$$

Where $L_q^p$ are the associated Laguerre polynomials.

**Energy eigenvalues:**

$$E_n = -\frac◆LB◆m_e e^4◆RB◆◆LB◆2(4\pi\varepsilon_0)^2 \hbar^2◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆n^2◆RB◆ = -\frac◆LB◆13.6\,\mathrm◆LB◆eV◆RB◆◆LB◆n^2◆RB◆, \quad n = 1, 2, 3, \ldots$$

**Degeneracy:** Each energy level $E_n$ has degeneracy $n^2$ (ignoring spin). The quantum numbers
are:

- Principal: $n = 1, 2, 3, \ldots$
- Orbital angular momentum: $l = 0, 1, \ldots, n - 1$
- Magnetic: $m_l = -l, \ldots, l$

The ground state wave function ($n = 1, l = 0, m_l = 0$):

$$\psi_◆LB◆100◆RB◆(r, \theta, \phi) = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆\pi a_0^3◆RB◆◆RB◆ e^◆LB◆-r/a_0◆RB◆$$

Where $a_0 = \frac◆LB◆4\pi\varepsilon_0 \hbar^2◆RB◆◆LB◆m_e e^2◆RB◆ \approx 0.529\,\mathrm◆LB◆\AA◆RB◆$ is the Bohr
radius.

#### 6.5.3 Expectation Values for the Ground State

**Example 6.1.** Calculate $\langle r \rangle$, $\langle r^2 \rangle$And $\langle 1/r \rangle$ for the
Hydrogen ground state.

<details>
<summary>Solution</summary>

For $\psi_◆LB◆100◆RB◆ = (\pi a_0^3)^◆LB◆-1/2◆RB◆e^◆LB◆-r/a_0◆RB◆$All integrals involve radial integrals with $r^2 dr$:

$$\langle r \rangle = \frac◆LB◆4\pi◆RB◆◆LB◆\pi a_0^3◆RB◆\int_0^◆LB◆\infty◆RB◆ r^3 e^◆LB◆-2r/a_0◆RB◆\,dr = \frac◆LB◆4◆RB◆◆LB◆a_0^3◆RB◆\cdot\frac◆LB◆6◆RB◆◆LB◆(2/a_0)^4◆RB◆ = \frac◆LB◆4 \cdot 6 \cdot a_0^4◆RB◆◆LB◆16◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆a_0$$

$$\langle r^2 \rangle = \frac◆LB◆4◆RB◆◆LB◆a_0^3◆RB◆\int_0^◆LB◆\infty◆RB◆ r^4 e^◆LB◆-2r/a_0◆RB◆\,dr = \frac◆LB◆4◆RB◆◆LB◆a_0^3◆RB◆\cdot\frac◆LB◆24◆RB◆◆LB◆(2/a_0)^5◆RB◆ = \frac◆LB◆4 \cdot 24 \cdot a_0^5◆RB◆◆LB◆32◆RB◆ = 3a_0^2$$

$$\left\langle\frac◆LB◆1◆RB◆◆LB◆r◆RB◆\right\rangle = \frac◆LB◆4◆RB◆◆LB◆a_0^3◆RB◆\int_0^◆LB◆\infty◆RB◆ r\,e^◆LB◆-2r/a_0◆RB◆\,dr = \frac◆LB◆4◆RB◆◆LB◆a_0^3◆RB◆\cdot\frac◆LB◆1◆RB◆◆LB◆(2/a_0)^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆a_0◆RB◆$$

Note that $\langle 1/r \rangle = 1/a_0 = -2E_1/e^2$ (by the virial theorem). The standard deviation
is $\Delta r = \sqrt◆LB◆3a_0^2 - (3a_0/2)^2◆RB◆ = \sqrt◆LB◆3/4◆RB◆\,a_0$.

</details>

#### 6.5.4 Selection Rules

Electric dipole transitions between hydrogen states are governed by selection rules derived from the
Wigner-Eckart theorem. For a transition $|n,l,m\rangle \to |n',l',m'\rangle$ induced by the electric
Dipole operator $\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$:

$$\Delta l = l' - l = \pm 1, \quad \Delta m = m' - m = 0, \pm 1$$

$\Delta n$ is unrestricted (energy conservation determines which transitions are allowed).

_Proof sketch._ The matrix element $\langle n'l'm'|\hat◆LB◆z◆RB◆|nlm\rangle$ involves the integral
$\int Y_◆LB◆l'◆RB◆^◆LB◆m'*◆RB◆(\theta,\phi)\cos\theta\,Y_l^m(\theta,\phi)\,d\Omega$. Using the addition theorem
For spherical harmonics, $\cos\theta = \sqrt◆LB◆4\pi/3◆RB◆\,Y_1^0$The integral becomes a product of
Clebsch-Gordan coefficients that vanishes unless $l' = l \pm 1$ and $m' = m$. $\blacksquare$

### 6.6 Orbital Shapes and Quantum Numbers

The three quantum numbers characterise hydrogen atom eigenstates:

- **$n$ (principal):** Determines the energy and overall size. The mean radius scales as
  $\langle r \rangle \propto n^2 a_0$.
- **$l$ (orbital angular momentum):** Determines the shape. The spectroscopic notation is $l = 0$
  (s), $l = 1$ (p), $l = 2$ (d), $l = 3$ (f), etc.
- **$m_l$ (magnetic):** Determines the spatial orientation. The angular dependence is
  $Y_l^◆LB◆m_l◆RB◆(\theta, \phi)$.

**Radial probability distribution.** The probability of finding the electron between $r$ and $r+dr$
is $P(r)\,dr = |R_◆LB◆nl◆RB◆(r)|^2 r^2\,dr$. For the $1s$ state, the maximum is at $r = a_0$ (the Bohr
radius). For $2s$There is a node at $r = 2a_0$. For $2p$The distribution peaks closer to the
nucleus.

**Angular distributions.** The $s$ orbitals ($l = 0$) are spherically symmetric. The $p$ orbitals
($l = 1$) have dumbbell shapes aligned along the $x$-, $y$-, or $z$-axis depending on $m_l$. The $d$
Orbitals ($l = 2$) have more complex cloverleaf patterns.

**Radial nodes.** The radial wave function $R_◆LB◆nl◆RB◆(r)$ has $n - l - 1$ nodes (zeros excluding
$r = 0$ And $r = \infty$). The total number of nodes in the full wave function is $n - 1$Consistent
with The general property that the $n$-th energy eigenstate has $n - 1$ nodes.

**Fine structure.** The non-relativistic Schrodinger equation gives energy levels depending only on
$n$. Relativistic corrections (spin-orbit coupling, Darwin term, kinetic energy correction) split
these Into fine structure multiplets, removing the $l$-degeneracy. The fine structure shift is of
order $\alpha^2 E_n$ where $\alpha \approx 1/137$ is the fine structure constant.

## 7. Spin

### 7.1 The Spin Operators

Spin is an **intrinsic** form of angular momentum with no classical analogue. For spin-$1/2$
particles (e.g., electrons):

$$\hat◆LB◆S◆RB◆_x = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆\sigma_x, \quad \hat◆LB◆S◆RB◆_y = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆\sigma_y, \quad \hat◆LB◆S◆RB◆_z = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆\sigma_z$$

Where $\sigma_x, \sigma_y, \sigma_z$ are the **Pauli matrices**:

$$\sigma_x = \begin◆LB◆pmatrix◆RB◆ 0 & 1 \\ 1 & 0 \end◆LB◆pmatrix◆RB◆, \quad \sigma_y = \begin◆LB◆pmatrix◆RB◆ 0 & -i \\ i & 0 \end◆LB◆pmatrix◆RB◆, \quad \sigma_z = \begin◆LB◆pmatrix◆RB◆ 1 & 0 \\ 0 & -1 \end◆LB◆pmatrix◆RB◆$$

### 7.2 Properties of Pauli Matrices

$$\sigma_i^2 = I, \quad \sigma_i \sigma_j = i\epsilon_◆LB◆ijk◆RB◆\sigma_k \quad (i \neq j)$$

$$[\sigma_i, \sigma_j] = 2i\epsilon_◆LB◆ijk◆RB◆\sigma_k, \quad \{\sigma_i, \sigma_j\} = 2\delta_◆LB◆ij◆RB◆I$$

Spin states: $|\uparrow\rangle = \begin◆LB◆pmatrix◆RB◆ 1 \\ 0 \end◆LB◆pmatrix◆RB◆$ (spin up, $m_s = +1/2$) and
$|\downarrow\rangle = \begin◆LB◆pmatrix◆RB◆ 0 \\ 1 \end◆LB◆pmatrix◆RB◆$ (spin down, $m_s = -1/2$).

### 7.3 Derivation of the Pauli Matrices

The Pauli matrices are uniquely determined (up to unitary equivalence) by the angular momentum
algebra For $j = 1/2$.

**Requirements.** We seek $2 \times 2$ matrices $\sigma_x, \sigma_y, \sigma_z$ such that:

1. $\sigma_i^2 = I$ (eigenvalues are $\pm 1$Corresponding to $S_z = \pm\hbar/2$)
2. $\sigma_i^\dagger = \sigma_i$ (Hermitian)
3. $\mathrm◆LB◆Tr◆RB◆(\sigma_i) = 0$ (traceless, since eigenvalues sum to zero)
4. $[\sigma_x, \sigma_y] = 2i\sigma_z$ (and cyclic permutations)

**Step 1: Fix $\sigma_z$.** A traceless Hermitian matrix with eigenvalues $\pm 1$ is:

$$\sigma_z = \begin◆LB◆pmatrix◆RB◆ 1 & 0 \\ 0 & -1 \end◆LB◆pmatrix◆RB◆$$

(up to an overall unitary transformation, which corresponds to choosing the quantisation axis).

**Step 2: Determine $\sigma_x$.** A general traceless Hermitian matrix is:

$$\sigma_x = \begin◆LB◆pmatrix◆RB◆ a & b \\ b^* & -a \end◆LB◆pmatrix◆RB◆$$

Where $a \in \mathbb◆LB◆R◆RB◆$ and $b \in \mathbb◆LB◆C◆RB◆$. From $\sigma_x^2 = I$: $a^2 + |b|^2 = 1$ and
$2ab = 0$. Since $|b| \neq 0$ (otherwise $\sigma_x$ is diagonal and commutes with
$\sigma_z$Violating $[\sigma_x, \sigma_z] \neq 0$), we have $a = 0$ and $|b| = 1$. Choosing $b = 1$
(by convention):

$$\sigma_x = \begin◆LB◆pmatrix◆RB◆ 0 & 1 \\ 1 & 0 \end◆LB◆pmatrix◆RB◆$$

**Step 3: Determine $\sigma_y$.** From $[\sigma_x, \sigma_y] = 2i\sigma_z$:

$$\sigma_x\sigma_y - \sigma_y\sigma_x = 2i\sigma_z$$

Writing $\sigma_y = \begin◆LB◆pmatrix◆RB◆ c & d \\ d^* & -c \end◆LB◆pmatrix◆RB◆$ and imposing
$\sigma_y^2 = I$, $\sigma_y^\dagger = \sigma_y$ And the commutation relation, we find
$c = 0$, $|d| = 1$And the commutator gives $d - d^* = 2i$ So $d = i$:

$$\sigma_y = \begin◆LB◆pmatrix◆RB◆ 0 & -i \\ i & 0 \end◆LB◆pmatrix◆RB◆$$

$\blacksquare$

### 7.4 Spin-1/2 in a Magnetic Field

A particle with magnetic moment $\boldsymbol◆LB◆\mu◆RB◆ = \gamma\mathbf◆LB◆S◆RB◆$ (where $\gamma$ is the
Gyromagnetic ratio) in a magnetic field $\mathbf◆LB◆B◆RB◆ = B_0\hat◆LB◆z◆RB◆$ has Hamiltonian:

$$\hat◆LB◆H◆RB◆ = -\boldsymbol◆LB◆\mu◆RB◆\cdot\mathbf◆LB◆B◆RB◆ = -\gamma B_0\hat◆LB◆S◆RB◆_z = -\frac◆LB◆\hbar\gamma B_0◆RB◆◆LB◆2◆RB◆\sigma_z$$

The eigenstates are $|\uparrow\rangle$ and $|\downarrow\rangle$ with energies
$E_\uparrow = -\hbar\gamma B_0/2$ And $E_\downarrow = +\hbar\gamma B_0/2$. The energy splitting is
$\Delta E = \hbar\gamma B_0$.

**Time evolution.** For an arbitrary initial state:

$$|\psi(0)\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle$$

The state at time $t$ is:

$$|\psi(t)\rangle = \alpha e^◆LB◆i\gamma B_0 t/2◆RB◆|\uparrow\rangle + \beta e^◆LB◆-i\gamma B_0 t/2◆RB◆|\downarrow\rangle$$

**Larmor precession.** The expectation values precess around the $z$-axis:

$$\langle S_x \rangle(t) = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆(\alpha^*\beta\,e^◆LB◆-i\gamma B_0 t◆RB◆ + \alpha\beta^*\,e^◆LB◆i\gamma B_0 t◆RB◆)$$

$$\langle S_y \rangle(t) = \frac◆LB◆\hbar◆RB◆◆LB◆2i◆RB◆(\alpha^*\beta\,e^◆LB◆-i\gamma B_0 t◆RB◆ - \alpha\beta^*\,e^◆LB◆i\gamma B_0 t◆RB◆)$$

$$\langle S_z \rangle(t) = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆(|\alpha|^2 - |\beta|^2) = \mathrm◆LB◆const◆RB◆.$$

The spin precesses at the **Larmor frequency** $\omega_L = \gamma B_0$.

For an electron, $\gamma = -e/(m_e)$ (negative charge), giving $\omega_L = eB_0/m_e$.

**The Larmor frequency.** For a typical laboratory field $B_0 = 1$ T:

$$\omega_L = \frac◆LB◆(1.602 \times 10^◆LB◆-19◆RB◆)(1)◆RB◆◆LB◆9.109 \times 10^◆LB◆-31◆RB◆◆RB◆ = 1.76 \times 10^◆LB◆11◆RB◆\;\mathrm◆LB◆rad◆RB◆/s$$

Corresponding to a frequency $\nu_L = \omega_L/(2\pi) = 28$ GHz (microwave range). This is the basis
Of Electron Spin Resonance (ESR) and Nuclear Magnetic Resonance (NMR) spectroscopy, where
transitions Between spin states are driven by oscillating magnetic fields at the Larmor frequency.

**Example 7.1.** An electron starts in the state $|\psi(0)\rangle = |\uparrow\rangle$. A magnetic
field $\mathbf◆LB◆B◆RB◆ = B_0\hat◆LB◆x◆RB◆$ is applied. Find $|\psi(t)\rangle$.

<details>
<summary>Solution</summary>

With $\mathbf◆LB◆B◆RB◆ = B_0\hat◆LB◆x◆RB◆$The Hamiltonian is
$\hat◆LB◆H◆RB◆ = -\gamma B_0\hat◆LB◆S◆RB◆_x = \omega_L\hat◆LB◆S◆RB◆_x$ Where $\omega_L = \gamma B_0$. The eigenstates
of $\hat◆LB◆S◆RB◆_x$ are:

$$|+\rangle_x = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆(|\uparrow\rangle + |\downarrow\rangle), \quad |-\rangle_x = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆(|\uparrow\rangle - |\downarrow\rangle)$$

With eigenvalues $\pm\hbar\omega_L/2$.

Expanding $|\uparrow\rangle = (|+\rangle_x + |-\rangle_x)/\sqrt◆LB◆2◆RB◆$ and evolving:

$$|\psi(t)\rangle = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆\!\left(e^◆LB◆-i\omega_L t/2◆RB◆|+\rangle_x + e^◆LB◆i\omega_L t/2◆RB◆|-\rangle_x\right)$$

$$= \cos\!\left(\frac◆LB◆\omega_L t◆RB◆◆LB◆2◆RB◆\right)|\uparrow\rangle - i\sin\!\left(\frac◆LB◆\omega_L t◆RB◆◆LB◆2◆RB◆\right)|\downarrow\rangle$$

The probability of measuring spin-up along $z$ oscillates as $\cos^2(\omega_L t/2)$With period
$T = 2\pi/\omega_L$.

</details>

### 7.5 Stern-Gerlach Experiment

A beam of silver atoms passes through an inhomogeneous magnetic field and splits into two beams,
Confirming the quantisation of angular momentum (spin-1/2 for the outer electron).

**Detailed analysis.** The force on a magnetic moment in an inhomogeneous field is:

$$\mathbf◆LB◆F◆RB◆ = \nabla(\boldsymbol◆LB◆\mu◆RB◆\cdot\mathbf◆LB◆B◆RB◆)$$

For a field $\mathbf◆LB◆B◆RB◆ = B(z)\hat◆LB◆z◆RB◆$ with $\partial B_z/\partial z \neq 0$The $z$-component of
force Is $F_z = \mu_z\,\partial B_z/\partial z$. Since $\mu_z = \gamma m_s\hbar$ and
$m_s = \pm 1/2$:

$$F_z = \pm\frac◆LB◆\gamma\hbar◆RB◆◆LB◆2◆RB◆\frac◆LB◆\partial B_z◆RB◆◆LB◆\partial z◆RB◆$$

The beam splits into two, corresponding to $m_s = +1/2$ (deflected up) and $m_s = -1/2$ (deflected
down).

**Sequential Stern-Gerlach measurements.** Consider three apparatuses in sequence:

1. First SG-Z: selects $|\uparrow\rangle$.
2. Second SG-X: splits into $|+\rangle_x$ and $|-\rangle_x$ with equal probability $1/2$.
3. Third SG-Z (on the $|-\rangle_x$ beam): again splits into $|\uparrow\rangle$ and
   $|\downarrow\rangle$ with equal probability $1/2$.

This demonstrates that the intermediate $S_x$ measurement **erases** the information about the
Original $S_z$ state. The probabilities reflect the non-commutativity
$[\hat◆LB◆S◆RB◆_x, \hat◆LB◆S◆RB◆_z] = i\hbar\hat◆LB◆S◆RB◆_y$.

**Example 7.2.** A spin-1/2 particle passes through SG-Z (selecting $|\uparrow\rangle$), then
through SG-Z at angle $\theta$ from the $z$-axis. Find the probability of measuring $+1$ in the
second Apparatus.

<details>
<summary>Solution</summary>

The eigenstate of $\hat◆LB◆S◆RB◆_n = \hat◆LB◆S◆RB◆_z\cos\theta + \hat◆LB◆S◆RB◆_x\sin\theta$ with eigenvalue $+\hbar/2$
is:

$$|+\rangle_n = \cos\frac◆LB◆\theta◆RB◆◆LB◆2◆RB◆|\uparrow\rangle + \sin\frac◆LB◆\theta◆RB◆◆LB◆2◆RB◆|\downarrow\rangle$$

The probability is:

$$P = |\langle+_n|\uparrow\rangle|^2 = \cos^2\frac◆LB◆\theta◆RB◆◆LB◆2◆RB◆$$

For $\theta = 90°$ (i.e., measuring $S_x$): $P = 1/2$.

</details>

### 7.6 Addition of Angular Momenta

Given two angular momenta $\hat◆LB◆\mathbf◆LB◆J◆RB◆◆RB◆_1$ and $\hat◆LB◆\mathbf◆LB◆J◆RB◆◆RB◆_2$ with quantum numbers
$j_1, m_1$ and $j_2, m_2$Define the total
$\hat◆LB◆\mathbf◆LB◆J◆RB◆◆RB◆ = \hat◆LB◆\mathbf◆LB◆J◆RB◆◆RB◆_1 + \hat◆LB◆\mathbf◆LB◆J◆RB◆◆RB◆_2$.

**Compatible observables:** $\hat◆LB◆J◆RB◆^2$$\hat◆LB◆J◆RB◆_z$$\hat◆LB◆J◆RB◆_1^2$$\hat◆LB◆J◆RB◆_2^2$ all commute. We label
Simultaneous eigenstates as $|j_1, j_2; j, m\rangle$.

**Clebsch-Gordan decomposition.** The total angular momentum quantum numbers range over:

$$j = |j_1 - j_2|, |j_1 - j_2| + 1, \ldots, j_1 + j_2$$

In integer steps. For each $j$The magnetic quantum number $m$ ranges from $-j$ to $j$.

The transformation between the product basis and the total-$j$ basis is:

$$|j_1, j_2; j, m\rangle = \sum_◆LB◆m_1, m_2◆RB◆ C(j_1\,m_1\,j_2\,m_2|j\,m)\,|j_1, m_1\rangle|j_2, m_2\rangle$$

Where $C(j_1\,m_1\,j_2\,m_2|j\,m)$ are the **Clebsch-Gordan coefficients**.

**Two spin-1/2 particles.** The composite system has $j_1 = j_2 = 1/2$. The possible total spins
are:

- **Triplet** ($j = 1$): three states with $m = 1, 0, -1$ $$|1,1\rangle = |\uparrow\uparrow\rangle$$
  $$|1,0\rangle = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆(|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)$$
  $$|1,-1\rangle = |\downarrow\downarrow\rangle$$

- **Singlet** ($j = 0$): one state with $m = 0$
  $$|0,0\rangle = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆(|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)$$

The triplet states are symmetric under particle exchange; the singlet is antisymmetric.

**Total spin operator.**
$\hat◆LB◆S◆RB◆^2 = \hat◆LB◆S◆RB◆_1^2 + \hat◆LB◆S◆RB◆_2^2 + 2\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_1\cdot\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_2$So:

$$\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_1\cdot\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_2 = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(\hat◆LB◆S◆RB◆^2 - \hat◆LB◆S◆RB◆_1^2 - \hat◆LB◆S◆RB◆_2^2)$$

For the triplet: $\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_1\cdot\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_2 = \hbar^2/4$. For the singlet:
$\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_1\cdot\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_2 = -3\hbar^2/4$.

**Complete set of commuting observables (CSCO).** For a two-spin system, the set
$\\{\hat◆LB◆S◆RB◆^2, \hat◆LB◆S◆RB◆_z, \hat◆LB◆S◆RB◆_1^2, \hat◆LB◆S◆RB◆_2^2\\}$ forms a CSCO: their simultaneous eigenstates
are Uniquely labelled by the quantum numbers $(s, m_s, s_1, s_2)$. An alternative CSCO is
$\\{\hat◆LB◆S◆RB◆_◆LB◆1z◆RB◆, \hat◆LB◆S◆RB◆_◆LB◆2z◆RB◆, \hat◆LB◆S◆RB◆_1^2, \hat◆LB◆S◆RB◆_2^2\\}$Which uses the product basis. The
Clebsch-Gordan coefficients are the transformation matrix between these two bases.

**Clebsch-Gordan table for $j_1 = j_2 = 1/2$:**

| $m_1$  | $m_2$  | $j=1,\,m$    | $j=0,\,m$     |
| ------ | ------ | ------------ | ------------- |
| $+1/2$ | $+1/2$ | $1$          | $0$           |
| $+1/2$ | $-1/2$ | $1/\sqrt◆LB◆2◆RB◆$ | $1/\sqrt◆LB◆2◆RB◆$  |
| $-1/2$ | $+1/2$ | $1/\sqrt◆LB◆2◆RB◆$ | $-1/\sqrt◆LB◆2◆RB◆$ |
| $-1/2$ | $-1/2$ | $1$          | $0$           |

**Example 7.3.** Two electrons are in the singlet state. If electron 1 is measured to have
$S_z = +\hbar/2$What is the state of electron 2 immediately after? What is the probability of
Measuring $S_x = +\hbar/2$ for electron 2?

<details>
<summary>Solution</summary>

The singlet state is
$|0,0\rangle = (|\uparrow_1\downarrow_2\rangle - |\downarrow_1\uparrow_2\rangle)/\sqrt◆LB◆2◆RB◆$.

After measuring $S_1^z = +\hbar/2$The state collapses to $|\uparrow_1\downarrow_2\rangle$. Electron
2 is in $|\downarrow\rangle$.

The probability of measuring $S_2^x = +\hbar/2$ is:

$$P = |\langle+_x|\downarrow\rangle|^2 = \left|\frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆\langle\uparrow| + \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆\langle\downarrow|\;\downarrow\rangle\right|^2 = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$$

</details>

## 8. Approximation Methods

### 8.1 Time-Independent Perturbation Theory

For a Hamiltonian $\hat◆LB◆H◆RB◆ = \hat◆LB◆H◆RB◆_0 + \lambda \hat◆LB◆H◆RB◆'$ where $\hat◆LB◆H◆RB◆'$ is "small" and
$\hat◆LB◆H◆RB◆_0$ Has known eigenstates $|n^◆LB◆(0)◆RB◆\rangle$ and eigenvalues $E_n^◆LB◆(0)◆RB◆$.

**First-order energy correction:**

$$E_n^◆LB◆(1)◆RB◆ = \langle n^◆LB◆(0)◆RB◆ | \hat◆LB◆H◆RB◆' | n^◆LB◆(0)◆RB◆ \rangle$$

**Second-order energy correction:**

$$E_n^◆LB◆(2)◆RB◆ = \sum_◆LB◆m \neq n◆RB◆ \frac◆LB◆|\langle m^◆LB◆(0)◆RB◆ | \hat◆LB◆H◆RB◆' | n^◆LB◆(0)◆RB◆ \rangle|^2◆RB◆◆LB◆E_n^◆LB◆(0)◆RB◆ - E_m^◆LB◆(0)◆RB◆◆RB◆$$

**First-order state correction:**

$$|n^◆LB◆(1)◆RB◆\rangle = \sum_◆LB◆m \neq n◆RB◆ \frac◆LB◆\langle m^◆LB◆(0)◆RB◆ | \hat◆LB◆H◆RB◆' | n^◆LB◆(0)◆RB◆ \rangle◆RB◆◆LB◆E_n^◆LB◆(0)◆RB◆ - E_m^◆LB◆(0)◆RB◆◆RB◆ |m^◆LB◆(0)◆RB◆\rangle$$

**Physical interpretation.** The first-order energy correction is the expectation value of the
Perturbation in the unperturbed state. The second-order correction accounts for virtual transitions
To other states: if the perturbation mixes in state $|m\rangle$ with amplitude proportional to
$V_◆LB◆mn◆RB◆/(E_n - E_m)$The energy shift is the sum of $|V_◆LB◆mn◆RB◆|^2/(E_n - E_m)$ over all Intermediate
states. Lower-energy intermediate states ($E_m \lt E_n$) always lower the energy, While
higher-energy ones raise it.

**Higher-order corrections.** The perturbation series can be extended to arbitrary order:

$$E_n = E_n^◆LB◆(0)◆RB◆ + \lambda E_n^◆LB◆(1)◆RB◆ + \lambda^2 E_n^◆LB◆(2)◆RB◆ + \lambda^3 E_n^◆LB◆(3)◆RB◆ + \cdots$$

$$|n\rangle = |n^◆LB◆(0)◆RB◆\rangle + \lambda|n^◆LB◆(1)◆RB◆\rangle + \lambda^2|n^◆LB◆(2)◆RB◆\rangle + \cdots$$

The series converges if $\lambda|\langle m|\hat◆LB◆H◆RB◆'|n\rangle| \ll |E_n^◆LB◆(0)◆RB◆ - E_m^◆LB◆(0)◆RB◆|$ for all
$m \neq n$. In practice, low-order corrections often give excellent results for weak perturbations.

### 8.2 Degenerate Perturbation Theory

When $E_n^◆LB◆(0)◆RB◆$ is degenerate, the corrections are found by diagonalising the perturbation matrix
in The degenerate subspace.

**Theorem 8.1.** The correct zeroth-order states are the eigenvectors of the matrix
$W_◆LB◆ij◆RB◆ = \langle n_i^◆LB◆(0)◆RB◆ | \hat◆LB◆H◆RB◆' | n_j^◆LB◆(0)◆RB◆ \rangle$ within the degenerate subspace.

_Proof._ In a $d$-dimensional degenerate subspace spanned by
$\\{|n_1^◆LB◆(0)◆RB◆\rangle, \ldots, |n_d^◆LB◆(0)◆RB◆\rangle\\}$ The first-order correction to the states is
undetermined by the non-degenerate formula (denominators Vanish). The correct approach is to note
that $\hat◆LB◆H◆RB◆$ restricted to this subspace is:

$$\hat◆LB◆H◆RB◆_◆LB◆\mathrm◆LB◆sub◆RB◆ = E_n^◆LB◆(0)◆RB◆\hat◆LB◆I◆RB◆ + \lambda \hat◆LB◆W◆RB◆$$

Where $W_◆LB◆ij◆RB◆ = \langle n_i^◆LB◆(0)◆RB◆|\hat◆LB◆H◆RB◆'|n_j^◆LB◆(0)◆RB◆\rangle$. Diagonalising $\hat◆LB◆W◆RB◆$ gives the
correct Zeroth-order states and first-order energy splittings. $\blacksquare$

### 8.3 Worked Example: Perturbed Infinite Square Well

**Problem.** A one-dimensional infinite square well of width $L$ has a small perturbation $H' = V_0$
for $0 \lt x \lt L/2$ and $H' = 0$ for $L/2 \lt x \lt L$. Find the first-order energy Corrections.

<details>
<summary>Solution</summary>

The unperturbed states are $\phi_n^◆LB◆(0)◆RB◆(x) = \sqrt◆LB◆2/L◆RB◆\sin(n\pi x/L)$.

$$E_n^◆LB◆(1)◆RB◆ = \langle n^◆LB◆(0)◆RB◆ | H' | n^◆LB◆(0)◆RB◆ \rangle = \int_0^◆LB◆L/2◆RB◆ V_0 \frac◆LB◆2◆RB◆◆LB◆L◆RB◆\sin^2\!\left(\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\right) dx$$

$$= \frac◆LB◆2V_0◆RB◆◆LB◆L◆RB◆\int_0^◆LB◆L/2◆RB◆ \frac◆LB◆1 - \cos(2n\pi x/L)◆RB◆◆LB◆2◆RB◆\, dx = \frac◆LB◆V_0◆RB◆◆LB◆L◆RB◆\!\left[\frac◆LB◆L◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆L◆RB◆◆LB◆4n\pi◆RB◆\sin(n\pi)\right] = \frac◆LB◆V_0◆RB◆◆LB◆2◆RB◆$$

The first-order correction is $E_n^◆LB◆(1)◆RB◆ = V_0/2$ for all $n$. $\blacksquare$

</details>

:::caution Common Pitfall Perturbation theory assumes the perturbation is "small" compared to the
level spacing. If $|\langle m | H' | n \rangle| \sim |E_n^◆LB◆(0)◆RB◆ - E_m^◆LB◆(0)◆RB◆|$The perturbation series
may diverge. The Method also fails for systems where the unperturbed Hamiltonian has closely spaced
or degenerate Levels that are not handled correctly. :::

### 8.4 Variational Principle

**Theorem 8.2 (Variational Principle).** For any normalised trial state $|\phi\rangle$:

$$\langle\phi|\hat◆LB◆H◆RB◆|\phi\rangle \geq E_0$$

Where $E_0$ is the true ground state energy. The equality holds if and only if
$|\phi\rangle = |0\rangle$.

_Proof._ Expand the trial state in the energy eigenbasis:

$$|\phi\rangle = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ c_n |n\rangle, \quad \sum_n |c_n|^2 = 1$$

Then:

$$\langle\phi|\hat◆LB◆H◆RB◆|\phi\rangle = \sum_n |c_n|^2 E_n \geq E_0\sum_n |c_n|^2 = E_0$$

Since $E_n \geq E_0$ for all $n$And the inequality is strict unless $c_n = 0$ for all $n \geq 1$.
$\blacksquare$

**Procedure.** Choose a trial wave function $\phi(x; \alpha_1, \alpha_2, \ldots)$ depending on
variational Parameters $\alpha_i$. Compute
$E(\alpha_i) = \langle\phi|\hat◆LB◆H◆RB◆|\phi\rangle / \langle\phi|\phi\rangle$ And minimise with respect
to $\alpha_i$. The minimum provides an upper bound on $E_0$.

**Example 8.1.** Use a Gaussian trial function $\phi(x) = A\exp(-x^2/(2\alpha^2))$ to estimate the
Ground state energy of the anharmonic oscillator $V(x) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m\omega^2 x^2 + \lambda x^4$.

<details>
<summary>Solution</summary>

The normalised Gaussian is $\phi(x) = (\pi\alpha^2)^◆LB◆-1/4◆RB◆\exp(-x^2/(2\alpha^2))$ with
$\langle x^2 \rangle = \alpha^2/2$ and $\langle x^4 \rangle = 3\alpha^4/4$.

$$\langle T \rangle = \frac◆LB◆\langle p^2 \rangle◆RB◆◆LB◆2m◆RB◆ = \frac◆LB◆\hbar^2◆RB◆◆LB◆4m\alpha^2◆RB◆$$

(by using $p = -i\hbar\,d/dx$ and integrating by parts).

$$\langle V \rangle = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m\omega^2\langle x^2 \rangle + \lambda\langle x^4 \rangle = \frac◆LB◆m\omega^2\alpha^2◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆3\lambda\alpha^4◆RB◆◆LB◆4◆RB◆$$

$$E(\alpha) = \frac◆LB◆\hbar^2◆RB◆◆LB◆4m\alpha^2◆RB◆ + \frac◆LB◆m\omega^2\alpha^2◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆3\lambda\alpha^4◆RB◆◆LB◆4◆RB◆$$

Minimising: $dE/d\alpha = 0$ gives
$-\hbar^2/(2m\alpha^3) + m\omega^2\alpha/2 + 3\lambda\alpha^3 = 0$.

For $\lambda = 0$ (harmonic oscillator), this gives $\alpha^2 = \hbar/(m\omega)$ and
$E = \hbar\omega/2$Which is exact. For small $\lambda$Expand
$\alpha^2 = \hbar/(m\omega)(1 - \delta)$:

$$\alpha^2 \approx \frac◆LB◆\hbar◆RB◆◆LB◆m\omega◆RB◆\!\left(1 - \frac◆LB◆3\lambda\hbar◆RB◆◆LB◆2m^2\omega^3◆RB◆\right)$$

$$E_◆LB◆\mathrm◆LB◆var◆RB◆ \approx \frac◆LB◆\hbar\omega◆RB◆◆LB◆2◆RB◆\!\left(1 + \frac◆LB◆3\lambda\hbar◆RB◆◆LB◆4m^2\omega^3◆RB◆\right)$$

This agrees with second-order perturbation theory to first order in $\lambda$.

</details>

### 8.5 WKB Approximation

The WKB (Wentzel-Kramers-Brillouin) method provides approximate solutions to the one-dimensional
Schrodinger equation when the potential varies slowly compared to the de Broglie wavelength.

**Ansatz.** Write $\psi(x) = A(x)\exp(iS(x)/\hbar)$ and substitute into the Schrodinger equation:

$$-i\hbar A'S - \hbar^2 A S'' + \hbar^2 A S'^2 - A S' \cdot \hbar^2 = \mathrm◆LB◆(terms)◆RB◆$$

Actually, substituting directly into $-\hbar^2\psi''/(2m) + V\psi = E\psi$ and separating orders of
$\hbar$:

**Leading order ($\hbar^0$):** $S'(x) = \pm p(x) = \pm\sqrt◆LB◆2m(E - V(x))◆RB◆$

**Next order ($\hbar^1$):** $A'(x)/A(x) = -S''(x)/(2S'(x))$Giving $A(x) \propto 1/\sqrt◆LB◆p(x)◆RB◆$.

Therefore, in the classically allowed region ($E \gt V$):

$$\psi(x) \approx \frac◆LB◆C◆RB◆◆LB◆\sqrt◆LB◆p(x)◆RB◆◆RB◆\cos\!\left(\frac◆LB◆1◆RB◆◆LB◆\hbar◆RB◆\int_◆LB◆x_1◆RB◆^x p(x')\,dx' + \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right)$$

Where $x_1$ is a turning point ($E = V(x_1)$).

**Connection formulas.** At a turning point, the WKB solutions must be matched. The standard
Connection formula (for a linear turning point, $V(x) \approx E + V'(x_1)(x-x_1)$) gives:

- Approaching from the classically allowed side:
  $$\frac◆LB◆2C◆RB◆◆LB◆\sqrt◆LB◆p(x)◆RB◆◆RB◆\cos\!\left(\frac◆LB◆1◆RB◆◆LB◆\hbar◆RB◆\int_◆LB◆x_1◆RB◆^x p(x')\,dx' - \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right) \longleftrightarrow \frac◆LB◆C◆RB◆◆LB◆\sqrt◆LB◆|p(x)|◆RB◆◆RB◆\exp\!\left(-\frac◆LB◆1◆RB◆◆LB◆\hbar◆RB◆\int_x^◆LB◆x_1◆RB◆ |p(x')|\,dx'\right)$$

**Quantization condition.** For a potential well with turning points $x_1$ and $x_2$Applying the
Connection formulas at both ends yields:

$$\int_◆LB◆x_1◆RB◆^◆LB◆x_2◆RB◆ p(x)\,dx = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\pi\hbar, \quad n = 0, 1, 2, \ldots$$

Equivalently, using the closed phase-space integral:

$$\oint p\,dx = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)h$$

This is the Bohr-Sommerfeld quantization condition, corrected by the $1/2$ term from the connection
Formulas.

**Validity.** The WKB approximation requires $|d\lambda/dx| \ll 1$Where $\lambda = h/p(x)$ is the
Local de Broglie wavelength. Equivalently, the change in potential over one wavelength must be small
Compared to the kinetic energy: $|\hbar\,|V'(x)|/(2mp(x))| \ll 1$.

**Example 8.2.** Apply the WKB quantization condition to the harmonic oscillator.

<details>
<summary>Solution</summary>

For $V(x) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m\omega^2 x^2$The turning points are at $x_◆LB◆1,2◆RB◆ = \pm\sqrt◆LB◆2E/(m\omega^2)◆RB◆$.

$$\int_◆LB◆x_1◆RB◆^◆LB◆x_2◆RB◆ \sqrt◆LB◆2m\!\left(E - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m\omega^2 x^2\right)◆RB◆\,dx = \sqrt◆LB◆2mE◆RB◆\int_◆LB◆-a◆RB◆^◆LB◆a◆RB◆\sqrt◆LB◆1 - (x/a)^2◆RB◆\,dx$$

Where $a = \sqrt◆LB◆2E/(m\omega^2)◆RB◆$. The integral equals $\pi a/2$ times $\sqrt◆LB◆2mE◆RB◆$:

$$= \sqrt◆LB◆2mE◆RB◆\cdot\frac◆LB◆\pi a◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆\pi E◆RB◆◆LB◆\omega◆RB◆$$

Setting this equal to $(n + 1/2)\pi\hbar$:

$$\frac◆LB◆\pi E◆RB◆◆LB◆\omega◆RB◆ = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\pi\hbar \implies E_n = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\hbar\omega$$

This is the exact result! The WKB approximation gives the exact energy levels for the harmonic
Oscillator because the potential is quadratic, so the connection formulas are exact.

**Validity and limitations.** The WKB method fails near turning points (where $E = V(x)$) because
$p(x) \to 0$ and the local wavelength diverges. The linear approximation of the potential near
Turning points (used to derive the connection formulas) breaks down when the potential is not
smooth. The method also fails for potentials with discontinuities or cusps.

Despite these limitations, WKB is remarkably useful for estimating energy levels in potentials Where
exact solutions are not available, and it forms the basis of the JWKB approximation in Scattering
theory.

</details>

## 9. Problem Set

### Problems

**1.** (Photoelectric effect) A sodium surface has work function $\phi = 2.28$ eV. When illuminated
With light of wavelength $\lambda = 400$ nm, find (a) the maximum kinetic energy of emitted
Electrons, and (b) the stopping potential.

**2.** (Compton scattering) X-rays of wavelength $0.071$ nm are scattered at $\theta = 45°$ from a
Carbon target. Find (a) the wavelength of the scattered photons, and (b) the kinetic energy of The
recoil electrons.

**3.** (de Broglie wavelength) Electrons are accelerated through a potential difference of $200$ V.
Calculate their de Broglie wavelength. If these electrons pass through a double slit with slit
Separation $d = 100$ nm, find the angular position of the first diffraction maximum. Hint: use the
Small-angle approximation $\sin\theta \approx \theta$ for the double-slit formula
$d\sin\theta = \lambda$.

**4.** (Postulates) Explain why the state space of quantum mechanics must be a complex vector space
Rather than a real vector space. Give a physical example that demonstrates the necessity of Complex
amplitudes. Hint: consider the Mach-Zehnder interferometer with phase shifters.

**5.** (Continuity equation) Starting from the Schrodinger equation, derive the continuity equation
$\partial|\psi|^2/\partial t + \nabla\cdot\mathbf◆LB◆J◆RB◆ = 0$. Show that for a stationary state
$\psi(\mathbf◆LB◆r◆RB◆,t) = \phi(\mathbf◆LB◆r◆RB◆)e^◆LB◆-iEt/\hbar◆RB◆$The probability current is time-independent.
What does this imply about the probability distribution?

**6.** (Normalisation) Normalise the wave function $\psi(x) = N\,x(a-x)$ for $0 \lt x \lt a$ (and
zero Otherwise). Find $\langle x \rangle$$\langle x^2 \rangle$And $\langle p^2 \rangle$.

**7.** (Hermitian operators) Prove that the momentum operator $\hat◆LB◆p◆RB◆ = -i\hbar\,d/dx$ is Hermitian
On the space of wave functions that vanish at infinity. What boundary conditions are required? Show
by counterexample that $\hat◆LB◆p◆RB◆$ is not Hermitian if the boundary terms do not vanish.

**8.** (Uncertainty principle) For the harmonic oscillator ground state
$\psi_0(x) = (m\omega/\pi\hbar)^◆LB◆1/4◆RB◆e^◆LB◆-m\omega x^2/(2\hbar)◆RB◆$Calculate $\langle x \rangle$
$\langle x^2 \rangle$$\langle p \rangle$$\langle p^2 \rangle$And verify that
$\sigma_x\,\sigma_p = \hbar/2$. Also show that $\langle x \rangle = \langle p \rangle = 0$ by
symmetry.

**9.** (Eigenvalue problem) Find the eigenvalues and normalised eigenvectors of the matrix
$\hat◆LB◆A◆RB◆ = \begin◆LB◆pmatrix◆RB◆3 & 1\\1 & 3\end◆LB◆pmatrix◆RB◆$. Verify that the eigenvectors are orthogonal
And that they form a complete basis for $\mathbb◆LB◆C◆RB◆^2$. Generalise: what are the eigenvalues of
$\begin◆LB◆pmatrix◆RB◆a & b\\b & a\end◆LB◆pmatrix◆RB◆$?

**10.** (Infinite square well) A particle is in the ground state of an infinite square well of Width
$L$. Suddenly, the well expands symmetrically to width $2L$ (the centre remains fixed). Find the
probability that the particle is found in the ground state of the new well. Also find The
probability that it is found in the first excited state.

**11.** (Harmonic oscillator) Using the ladder operators, compute $\langle x^2 \rangle$
$\langle p^2 \rangle$And $\langle x^4 \rangle$ for the state $|n\rangle$ of the harmonic Oscillator.
Express your answers in terms of $n$$m$$\omega$And $\hbar$.

**12.** (Delta potential) A particle of mass $m$ and energy $E \gt 0$ is incident on the potential
$V(x) = \alpha[\delta(x+a) + \delta(x-a)]$. Find the transmission coefficient. In the limit
$a \to 0$Verify that you recover the single-delta-function result.

**13.** (Tunnelling) A proton with energy $3$ MeV approaches a rectangular barrier of height $10$
MeV and width $5 \times 10^◆LB◆-15◆RB◆$ m. Estimate the transmission coefficient. Compare with The alpha
decay of a typical heavy nucleus and comment on the exponential dependence on barrier width.

**14.** (Angular momentum algebra) Using the angular momentum commutation relations and the
Raising/lowering operators, prove that $[\hat◆LB◆L◆RB◆^2, \hat◆LB◆L◆RB◆_\pm] = 0$. Then show that
$\hat◆LB◆L◆RB◆_+|l,l\rangle = 0$ and hence derive the normalisation constant for $\hat◆LB◆L◆RB◆_+|l,m\rangle$.

**15.** (Hydrogen atom) Calculate $\langle r \rangle$$\langle r^2 \rangle$And $\langle 1/r \rangle$
for the hydrogen atom ground state $\psi_◆LB◆100◆RB◆$. Compare $\langle r \rangle$ With the Bohr radius
$a_0$. Use the virial theorem to relate $\langle T \rangle$ and $\langle V \rangle$ for The Coulomb
potential.

**16.** (Spin) An electron is in the spin state
$|\psi\rangle = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆|\uparrow\rangle +
\sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆3◆RB◆◆RB◆|\downarrow\rangle$. (a) If
$S_z$ is measured, what are the possible outcomes and Their probabilities? (b) If $S_x$ is measured,
what are the possible outcomes and their Probabilities? (c) What is $\langle S_x \rangle$? (d) Write
the density matrix $\hat◆LB◆\rho◆RB◆$ for this state and verify $\mathrm◆LB◆Tr◆RB◆(\hat◆LB◆\rho◆RB◆) = 1$ and
$\hat◆LB◆\rho◆RB◆^2 = \hat◆LB◆\rho◆RB◆$ (pure state).

**17.** (Singlet state) Two spin-1/2 particles are prepared in the singlet state. If particle 1 is
Measured to have $S_z^◆LB◆(1)◆RB◆ = +\hbar/2$What is the state of particle 2 immediately after? If
Particle 2's spin is then measured along the $x$-axis, what is the probability of obtaining
$+\hbar/2$? Explain how this result is consistent with Bell's theorem and the no-communication
theorem.

**18.** (Variational method) Use the variational principle with the trial function
$\psi(x) = A(a^2 - x^2)$ for $|x| \lt a$ (and zero otherwise) to estimate the ground state Energy of
the infinite square well $V(x) = 0$ for $|x| \lt L$ and $V(x) = \infty$ otherwise. Take $a = L$ as a
fixed parameter. Compare your result with the exact ground state energy $E_1 = \pi^2\hbar^2/(2mL^2)$
and calculate the percentage error. Comment on why the variational Estimate is higher than the exact
result.

## 9. Identical Particles and Exchange Symmetry

### 9.1 Symmetrisation Postulate

For a system of $N$ identical particles, the wavefunction must satisfy:

$$\psi(\ldots, \mathbf◆LB◆r◆RB◆_i, \ldots, \mathbf◆LB◆r◆RB◆_j, \ldots) = \pm\psi(\ldots, \mathbf◆LB◆r◆RB◆_j, \ldots, \mathbf◆LB◆r◆RB◆_i, \ldots)$$

- **Bosons** (integer spin): symmetric ($+$ sign). Any number can occupy the same state.
- **Fermions** (half-integer spin): antisymmetric ($-$ sign). Pauli exclusion: no two fermions can
  occupy the same state.

For two particles, the properly symmetrised states are:

$$\psi_S = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆\left[\psi_a(1)\psi_b(2) + \psi_b(1)\psi_a(2)\right] \quad \text◆LB◆(bosons)◆RB◆$$

$$\psi_A = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆\left[\psi_a(1)\psi_b(2) - \psi_b(1)\psi_a(2)\right] \quad \text◆LB◆(fermions)◆RB◆$$

### 9.2 Exchange Interaction

Even without an explicit interaction potential, the requirement of (anti)symmetry leads to an
effective **exchange interaction**. For two electrons in a box, the probability of finding them
close together differs between the triplet (spatially antisymmetric, spin symmetric) and singlet
(spatially symmetric, spin antisymmetric) states:

$$|\psi_◆LB◆\text◆LB◆triplet◆RB◆|^2 = 0 \quad \text◆LB◆when◆RB◆  \mathbf◆LB◆r◆RB◆_1 = \mathbf◆LB◆r◆RB◆_2$$

$$|\psi_◆LB◆\text◆LB◆singlet◆RB◆|^2 > 0 \quad \text◆LB◆when◆RB◆  \mathbf◆LB◆r◆RB◆_1 = \mathbf◆LB◆r◆RB◆_2$$

The triplet state keeps electrons apart (effective repulsion), while the singlet allows them to be
close. This is the origin of the **Hund's first rule**: parallel spins are energetically favourable
for atoms because the exchange interaction lowers the Coulomb repulsion.

### 9.3 The Helium Atom

The helium Hamiltonian (ignoring nuclear motion):

$$\hat◆LB◆H◆RB◆ = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆\left(\nabla_1^2 + \nabla_2^2\right) - \frac◆LB◆2e^2◆RB◆◆LB◆4\pi\varepsilon_0 r_1◆RB◆ - \frac◆LB◆2e^2◆RB◆◆LB◆4\pi\varepsilon_0 r_2◆RB◆ + \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0|\mathbf◆LB◆r◆RB◆_1 - \mathbf◆LB◆r◆RB◆_2|◆RB◆$$

**Ground state (parahelium):** Both electrons in the $1s$ orbital with opposite spins (singlet). The
spatial part is symmetric: $\psi_◆LB◆100◆RB◆(\mathbf◆LB◆r◆RB◆_1)\psi_◆LB◆100◆RB◆(\mathbf◆LB◆r◆RB◆_2)$.

**First-order perturbation theory** for the electron-electron repulsion:

$$E^◆LB◆(1)◆RB◆ = \frac◆LB◆5◆RB◆◆LB◆4◆RB◆\frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 a_0◆RB◆ = \frac◆LB◆5◆RB◆◆LB◆2◆RB◆\times 13.6\ \text◆LB◆eV◆RB◆ = 34.0\ \text◆LB◆eV◆RB◆$$

The unperturbed ground state energy is $E^◆LB◆(0)◆RB◆ = 2 \times (-54.4\ \text◆LB◆eV◆RB◆) = -108.8$ eV (two
electrons in $Z = 2$ Coulomb potential). Including perturbation: $E \approx -108.8 + 34.0 = -74.8$
eV. The experimental value is $-79.0$ eV.

**Excited states:** When one electron is excited to $1s\,nl$The spin configuration matters:

- **Parahelium** (singlet, $S = 0$): symmetric spatial, antisymmetric spin. Lower energy for given
  configuration.
- **Orthohelium** (triplet, $S = 1$): antisymmetric spatial, symmetric spin. Higher energy.

The **exchange integral** $K$ and **direct integral** $J$:

$$J = \iint |\psi_a(1)|^2\frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 r_◆LB◆12◆RB◆◆RB◆|\psi_b(2)|^2\, d^3r_1 d^3r_2$$

$$K = \iint \psi_a^*(1)\psi_b^*(2)\frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 r_◆LB◆12◆RB◆◆RB◆\psi_b(1)\psi_a(2)\, d^3r_1 d^3r_2$$

The energy splitting between singlet and triplet is $2K$With the triplet lower by $2K$.

<details>
<summary>Worked Example 9.1: Helium $1s2s$ States</summary>

For the $1s\,2s$ configuration of helium:

$$J_◆LB◆1s,2s◆RB◆ = \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\int |\psi_◆LB◆1s◆RB◆(1)|^2\frac◆LB◆1◆RB◆◆LB◆r_◆LB◆12◆RB◆◆RB◆|\psi_◆LB◆2s◆RB◆(2)|^2\, d^3r_1 d^3r_2$$

$$K_◆LB◆1s,2s◆RB◆ = \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\int \psi_◆LB◆1s◆RB◆^*(1)\psi_◆LB◆2s◆RB◆^*(2)\frac◆LB◆1◆RB◆◆LB◆r_◆LB◆12◆RB◆◆RB◆\psi_◆LB◆2s◆RB◆(1)\psi_◆LB◆1s◆RB◆(2)\, d^3r_1 d^3r_2$$

Evaluating these (using the multipole expansion
$1/r_◆LB◆12◆RB◆ = \sum_l r_<^l/r_>^◆LB◆l+1◆RB◆\,P_l(\cos\theta)$):

$$J_◆LB◆1s,2s◆RB◆ \approx 0.42\ \text◆LB◆Ry◆RB◆ = 5.7\ \text◆LB◆eV◆RB◆$$

$$K_◆LB◆1s,2s◆RB◆ \approx 0.032\ \text◆LB◆Ry◆RB◆ = 0.43\ \text◆LB◆eV◆RB◆$$

The singlet (parahelium) has energy $E = E_0 + J + K$And the triplet (orthohelium) has
$E = E_0 + J - K$.

The splitting: $E_◆LB◆\text◆LB◆singlet◆RB◆ - E_◆LB◆\text◆LB◆triplet◆RB◆ = 2K \approx 0.86$ eV. This is the exchange
splitting.

The orthohelium $2^3S$ state is metastable: it cannot decay to the ground state by electric dipole
transition (because $\Delta S = 0$ for E1 transitions, and the ground state is a singlet). Its
lifetime is $\sim 10^4$ s.

</details>

### 9.4 Slater Determinants

For $N$ fermions, the antisymmetric wavefunction is efficiently written as a **Slater determinant**:

$$\Psi(1, 2, \ldots, N) = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆N!◆RB◆◆RB◆\begin◆LB◆vmatrix◆RB◆ \phi_1(1) & \phi_2(1) & \cdots & \phi_N(1) \\ \phi_1(2) & \phi_2(2) & \cdots & \phi_N(2) \\ \vdots & \vdots & \ddots & \vdots \\ \phi_1(N) & \phi_2(N) & \cdots & \phi_N(N) \end◆LB◆vmatrix◆RB◆$$

**Properties:**

- Swapping any two rows (particles) changes the sign
- If any two columns (orbitals) are identical, the determinant vanishes (Pauli exclusion)
- The normalisation is correct if the spin-orbitals $\phi_i$ are orthonormal

## 10. Variational Methods

### 10.1 The Variational Principle

For any trial wavefunction $\psi_◆LB◆\text◆LB◆trial◆RB◆$ (normalised), the expectation value of the
Hamiltonian is an upper bound on the true ground state energy:

$$E_◆LB◆\text◆LB◆trial◆RB◆ = \langle\psi_◆LB◆\text◆LB◆trial◆RB◆|\hat◆LB◆H◆RB◆|\psi_◆LB◆\text◆LB◆trial◆RB◆\rangle \geq E_0$$

The equality holds if and only if $\psi_◆LB◆\text◆LB◆trial◆RB◆ = \psi_0$.

### 10.2 The Hydrogen Molecule Ion $H_2^+$

The simplest molecule: one electron in the field of two protons separated by distance $R$. The
Hamiltonian:

$$\hat◆LB◆H◆RB◆ = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m_e◆RB◆\nabla^2 - \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 r_A◆RB◆ - \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 r_B◆RB◆ + \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 R◆RB◆$$

**LCAO trial function:** $\psi_\pm = N_\pm[\psi_◆LB◆1s◆RB◆(\mathbf◆LB◆r◆RB◆_A) \pm \psi_◆LB◆1s◆RB◆(\mathbf◆LB◆r◆RB◆_B)]$

The energies:

$$E_\pm(R) = E_◆LB◆1s◆RB◆ + \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 R◆RB◆ + \frac◆LB◆J \pm K◆RB◆◆LB◆1 \pm S◆RB◆$$

Where $S = \langle\psi_A|\psi_B\rangle$ is the overlap integral, $J$ is the Coulomb integral, and
$K$ is the exchange integral.

- $E_-$ (bonding): has a minimum at $R \approx 2.5\,a_0$Giving a binding energy of $\sim 1.8$ eV
  (experiment: 2.8 eV).
- $E_+$ (antibonding): monotonically decreases, no bound state.

### 10.3 The Hydrogen Molecule $H_2$

With two electrons, the full Hamiltonian includes the electron-electron repulsion. Using the
variational method with properly (anti)symmetrised spatial-spin wavefunctions:

**Bonding (singlet):** $E_◆LB◆\text◆LB◆singlet◆RB◆ = 2E_◆LB◆1s◆RB◆ + \frac◆LB◆e^2◆RB◆◆LB◆R◆RB◆ + \frac◆LB◆2J + 2K◆RB◆◆LB◆1 + S^2◆RB◆$

**Antibonding (triplet):** $E_◆LB◆\text◆LB◆triplet◆RB◆ = 2E_◆LB◆1s◆RB◆ + \frac◆LB◆e^2◆RB◆◆LB◆R◆RB◆ + \frac◆LB◆2J - 2K◆RB◆◆LB◆1 - S^2◆RB◆$

The equilibrium bond length is $R_e \approx 1.4\,a_0$ with binding energy $\sim 3.5$ eV (experiment:
4.75 eV).

<details>
<summary>Worked Example 10.1: Variational Estimate for Helium Ground State</summary>

Use the trial function
$\psi_◆LB◆\text◆LB◆trial◆RB◆ = (Z_◆LB◆\text◆LB◆eff◆RB◆^3/\pi a_0^3)\exp(-Z_◆LB◆\text◆LB◆eff◆RB◆r_1/a_0)\exp(-Z_◆LB◆\text◆LB◆eff◆RB◆r_2/a_0)$
where $Z_◆LB◆\text◆LB◆eff◆RB◆$ is a variational parameter.

The energy expectation value (treating the electron-electron repulsion as a perturbation):

$$E(Z_◆LB◆\text◆LB◆eff◆RB◆) = 2\times\frac◆LB◆Z_◆LB◆\text◆LB◆eff◆RB◆^2◆RB◆◆LB◆2◆RB◆\text◆LB◆Ry◆RB◆ - 2\times\frac◆LB◆Z_◆LB◆\text◆LB◆eff◆RB◆ Z◆RB◆◆LB◆1◆RB◆\text◆LB◆Ry◆RB◆ + \frac◆LB◆5◆RB◆◆LB◆8◆RB◆Z_◆LB◆\text◆LB◆eff◆RB◆\text◆LB◆Ry◆RB◆$$

$$= \left(Z_◆LB◆\text◆LB◆eff◆RB◆^2 - 4Z_◆LB◆\text◆LB◆eff◆RB◆ + \frac◆LB◆5◆RB◆◆LB◆4◆RB◆Z_◆LB◆\text◆LB◆eff◆RB◆\right)\text◆LB◆Ry◆RB◆ = \left(Z_◆LB◆\text◆LB◆eff◆RB◆^2 - \frac◆LB◆11◆RB◆◆LB◆4◆RB◆Z_◆LB◆\text◆LB◆eff◆RB◆\right)\text◆LB◆Ry◆RB◆$$

Minimising:
$\partial E/\partial Z_◆LB◆\text◆LB◆eff◆RB◆ = (2Z_◆LB◆\text◆LB◆eff◆RB◆ - 11/4) = 0 \implies Z_◆LB◆\text◆LB◆eff◆RB◆ = 11/8 = 1.375$.

$$E = \left(\frac◆LB◆121◆RB◆◆LB◆64◆RB◆ - \frac◆LB◆121◆RB◆◆LB◆32◆RB◆\right)\text◆LB◆Ry◆RB◆ = -\frac◆LB◆121◆RB◆◆LB◆64◆RB◆\text◆LB◆Ry◆RB◆ = -2.848\text◆LB◆Ry◆RB◆ = -77.5\ \text◆LB◆eV◆RB◆$$

The exact (non-relativistic) ground state energy is $-79.0$ eV, so the variational result is within
2%.

The effective charge $Z_◆LB◆\text◆LB◆eff◆RB◆ = 1.375 < 2$ reflects the screening of the nuclear charge by the
other electron: each electron partially shields the nucleus from the other, reducing the effective
charge from $Z = 2$ to $Z_◆LB◆\text◆LB◆eff◆RB◆ \approx 1.375$.

</details>

## 11. Time-Dependent Perturbation Theory

### 11.1 Fermi's Golden Rule

For a time-dependent perturbation $\hat◆LB◆V◆RB◆(t) = \hat◆LB◆V◆RB◆\,e^◆LB◆-i\omega t◆RB◆$ applied to an initial state
$|i\rangle$The transition rate to a continuum of final states $|f\rangle$ is:

$$\Gamma_◆LB◆i \to f◆RB◆ = \frac◆LB◆2\pi◆RB◆◆LB◆\hbar◆RB◆|\langle f|\hat◆LB◆V◆RB◆|i\rangle|^2\rho(E_f)$$

Where $\rho(E_f)$ is the density of final states at energy $E_f = E_i + \hbar\omega$.

**Derivation.** Using first-order time-dependent perturbation theory, the transition amplitude to
state $|f\rangle$ is:

$$c_f(t) = -\frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\int_0^t \langle f|\hat◆LB◆V◆RB◆|i\rangle\,e^◆LB◆i\omega_◆LB◆fi◆RB◆t'◆RB◆\, dt'$$

For a sinusoidal perturbation at frequency $\omega$:

$$|c_f|^2 = \frac◆LB◆|\langle f|\hat◆LB◆V◆RB◆|i\rangle|^2◆RB◆◆LB◆\hbar^2◆RB◆\frac◆LB◆\sin^2[(\omega_◆LB◆fi◆RB◆ - \omega)t/2]◆RB◆◆LB◆(\omega_◆LB◆fi◆RB◆ - \omega)^2/4◆RB◆$$

In the long-time limit, $\sin^2(xt)/x^2 \to 2\pi t\,\delta(x)$Giving:

$$\frac◆LB◆|c_f|^2◆RB◆◆LB◆t◆RB◆ = \frac◆LB◆2\pi◆RB◆◆LB◆\hbar^2◆RB◆|\langle f|\hat◆LB◆V◆RB◆|i\rangle|^2\,\delta(E_f - E_i - \hbar\omega)$$

Summing over all final states with density $\rho(E_f)$:

$$\Gamma = \int \frac◆LB◆d|c_f|^2◆RB◆◆LB◆dt◆RB◆\,\rho(E_f)\,dE_f = \frac◆LB◆2\pi◆RB◆◆LB◆\hbar◆RB◆|\langle f|\hat◆LB◆V◆RB◆|i\rangle|^2\rho(E_f) \quad \blacksquare$$

### 11.2 Selection Rules for Electric Dipole Transitions

The electric dipole matrix element:

$$\langle f|\hat◆LB◆\mathbf◆LB◆d◆RB◆◆RB◆|i\rangle = -e\langle f|\mathbf◆LB◆r◆RB◆|i\rangle$$

For hydrogen-like atoms, the selection rules are:

- $\Delta l = \pm 1$ (parity change required)
- $\Delta m = 0, \pm 1$ (for $z$$x \pm iy$ polarisation respectively)
- $\Delta n$ unrestricted

The transition rate for $2p \to 1s$ in hydrogen:

$$A_◆LB◆2p \to 1s◆RB◆ = \frac◆LB◆\omega^3◆RB◆◆LB◆3\pi\varepsilon_0\hbar c^3◆RB◆|\langle 1s|e\mathbf◆LB◆r◆RB◆|2p\rangle|^2$$

With $|\langle 1s|z|2p, m=0\rangle| = \frac◆LB◆2^7\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆3^5◆RB◆a_0$This gives
$A_◆LB◆2p \to 1s◆RB◆ \approx 6.3 \times 10^8$ s$^◆LB◆-1◆RB◆$Corresponding to a lifetime $\tau \approx 1.6$ ns.

### 11.3 Spontaneous Emission and Einstein Coefficients

The **Einstein $A$ coefficient** (spontaneous emission rate) is related to the $B$ coefficient
(stimulated emission/absorption):

$$A_◆LB◆21◆RB◆ = \frac◆LB◆\hbar\omega^3◆RB◆◆LB◆\pi^2 c^3◆RB◆B_◆LB◆21◆RB◆$$

This relation, derived by Einstein in 1917 using thermodynamic arguments (detailed balance in a
blackbody radiation field), was one of the first indications that spontaneous emission requires
quantum electrodynamics.

<details>
<summary>Worked Example 11.1: Selection Rules for Hydrogen</summary>

Consider the transition $3d \to 1s$ in hydrogen. Is this an allowed E1 transition?

The matrix element involves the integral
$\langle n'l'm'|\mathbf◆LB◆r◆RB◆|nlm\rangle = \langle 1,0,0|r_q|3,2,m\rangle$ where $r_q$ is a spherical
tensor component.

By the Wigner--Eckart theorem and parity selection rules:

- $\Delta l = 0 - 2 = -2 \neq \pm 1$: **forbidden for E1**

The $3d \to 1s$ transition can proceed via:

- **E2 (electric quadrupole):** $\Delta l = 0, \pm 2$Rate $\sim \alpha(kR)^2$ times slower than E1
- **M1 (magnetic dipole):** requires $\Delta l = 0$Not applicable here
- **Two-photon decay:** $3d \to 2p \to 1s$ (two successive E1 transitions)

The $3d \to 2p$ transition ($\Delta l = -1$) is E1-allowed and dominates, with
$A_◆LB◆3d \to 2p◆RB◆ \sim 6.4 \times 10^7$ s$^◆LB◆-1◆RB◆$.

</details>

## 12. Scattering Theory

### 12.1 Partial Wave Analysis

For a spherically symmetric potential $V(r)$The scattering amplitude can be expanded in partial
waves:

$$f(\theta) = \frac◆LB◆1◆RB◆◆LB◆2ik◆RB◆\sum_◆LB◆l=0◆RB◆^◆LB◆\infty◆RB◆(2l + 1)(e^◆LB◆2i\delta_l◆RB◆ - 1)P_l(\cos\theta) = \frac◆LB◆1◆RB◆◆LB◆k◆RB◆\sum_◆LB◆l=0◆RB◆^◆LB◆\infty◆RB◆(2l + 1)e^◆LB◆i\delta_l◆RB◆\sin\delta_l\,P_l(\cos\theta)$$

Where $\delta_l$ is the phase shift for partial wave $l$.

**Optical theorem:**

$$\sigma_◆LB◆\text◆LB◆total◆RB◆ = \frac◆LB◆4\pi◆RB◆◆LB◆k◆RB◆\,\text◆LB◆Im◆RB◆\,f(0) = \frac◆LB◆4\pi◆RB◆◆LB◆k^2◆RB◆\sum_◆LB◆l=0◆RB◆^◆LB◆\infty◆RB◆(2l+1)\sin^2\delta_l$$

**Partial wave unitarity bound:** $\sin^2\delta_l \leq 1$So the maximum contribution of partial wave
$l$ to the cross section is:

$$\sigma_l^◆LB◆\max◆RB◆ = \frac◆LB◆4\pi◆RB◆◆LB◆k^2◆RB◆(2l + 1)$$

### 12.2 The Born Approximation

For a weak potential, the scattering amplitude to first order is:

$$f(\theta, \phi) \approx -\frac◆LB◆m◆RB◆◆LB◆2\pi\hbar^2◆RB◆\int e^◆LB◆-i\mathbf◆LB◆k◆RB◆'\cdot\mathbf◆LB◆r◆RB◆'◆RB◆V(\mathbf◆LB◆r◆RB◆')\,d^3r'$$

Where $\mathbf◆LB◆k◆RB◆'$ is the scattered wave vector and $\mathbf◆LB◆q◆RB◆ = \mathbf◆LB◆k◆RB◆' - \mathbf◆LB◆k◆RB◆$ is the
momentum transfer.

For the Yukawa potential $V(r) = (V_0/r)e^◆LB◆-\mu r◆RB◆$:

$$f(\theta) = -\frac◆LB◆2m V_0◆RB◆◆LB◆\hbar^2(\mu^2 + q^2)◆RB◆, \quad q = 2k\sin(\theta/2)$$

Setting $\mu = 0$ (Coulomb potential), this reproduces the Rutherford scattering formula.

### 12.3 Resonance Scattering

When the scattering energy is near a quasi-bound state, the phase shift passes through $\pi/2$
(resonance):

$$\delta_l(E) \approx \delta_◆LB◆\text◆LB◆bg◆RB◆ + \arctan\!\left(\frac◆LB◆\Gamma/2◆RB◆◆LB◆E_R - E◆RB◆\right)$$

Where $E_R$ is the resonance energy and $\Gamma$ is the width. The cross section has the
Breit--Wigner form:

$$\sigma_l(E) = \frac◆LB◆4\pi◆RB◆◆LB◆k^2◆RB◆(2l+1)\frac◆LB◆(\Gamma/2)^2◆RB◆◆LB◆(E - E_R)^2 + (\Gamma/2)^2◆RB◆$$

At resonance ($E = E_R$): $\sigma_l^◆LB◆\max◆RB◆ = \frac◆LB◆4\pi◆RB◆◆LB◆k^2◆RB◆(2l+1)$ (unitarity limit).

<details>
<summary>Worked Example 12.1: Low-Energy Scattering and Scattering Length</summary>

For $s$-wave scattering ($l = 0$) at low energy ($ka \ll 1$), only the $l = 0$ phase shift
contributes:

$$\sigma \approx \frac◆LB◆4\pi◆RB◆◆LB◆k^2◆RB◆\sin^2\delta_0 \approx 4\pi a_s^2$$

Where the **scattering length** $a_s$ is defined by $k\cot\delta_0 \to -1/a_s$ as $k \to 0$.

For a hard sphere of radius $a$: $\delta_0 = -ka$ (exact), giving $a_s = a$ and $\sigma = 4\pi a^2$
(four times the geometric cross section $\pi a^2$ --- a purely quantum result).

For the $^3$He--$^4$He system: $a_s \approx 1.4$ nm (positive, indicating a repulsive effective
potential). For the neutron--proton system (triplet): $a_s \approx 5.4$ fm (positive, with a bound
state --- the deuteron). For singlet: $a_s \approx -23.7$ fm (negative, indicating a virtual state).

</details>

<details>
<summary>Worked Example 12.2: Born Approximation for a Gaussian Potential</summary>

Consider $V(r) = V_0\,e^◆LB◆-r^2/(2a^2)◆RB◆$.

$$f(\theta) = -\frac◆LB◆m◆RB◆◆LB◆2\pi\hbar^2◆RB◆\int e^◆LB◆-i\mathbf◆LB◆q◆RB◆\cdot\mathbf◆LB◆r◆RB◆◆RB◆V_0 e^◆LB◆-r^2/(2a^2)◆RB◆\,d^3r$$

$$= -\frac◆LB◆m V_0◆RB◆◆LB◆2\pi\hbar^2◆RB◆(2\pi a^2)^◆LB◆3/2◆RB◆e^◆LB◆-q^2 a^2/2◆RB◆ = -\frac◆LB◆m V_0◆RB◆◆LB◆\hbar^2◆RB◆(2\pi)^◆LB◆1/2◆RB◆a^3\,e^◆LB◆-2k^2a^2\sin^2(\theta/2)◆RB◆$$

The total cross section:

$$\sigma = \int |f|^2\,d\Omega = 2\pi\int_0^\pi |f|^2\sin\theta\,d\theta$$

At low energy ($ka \ll 1$): $f \approx -\frac◆LB◆mV_0◆RB◆◆LB◆\hbar^2◆RB◆(2\pi)^◆LB◆1/2◆RB◆a^3$ (independent of
$\theta$), giving:

$$\sigma \approx 4\pi\left(\frac◆LB◆mV_0◆RB◆◆LB◆\hbar^2◆RB◆\right)^2 2\pi\,a^6 = \frac◆LB◆8\pi^2 m^2 V_0^2 a^6◆RB◆◆LB◆\hbar^4◆RB◆$$

The Born approximation is valid when $|V_0| \ll \hbar^2/(ma^2)$I.e., the potential is weak compared
to the kinetic energy associated with the length scale $a$.

</details>

## Common Pitfalls (Additional)

1. **Symmetrisation applies to the full wavefunction:** For fermions, the overall wavefunction
   (spatial $\otimes$ spin $\otimes$ any other degrees of freedom) must be antisymmetric. A
   symmetric spatial part requires an antisymmetric spin part (singlet), and vice versa. Do not
   apply (anti)symmetrisation to spatial and spin parts separately without ensuring the correct
   combined symmetry.

2. **The variational principle gives an upper bound:** $E_◆LB◆\text◆LB◆trial◆RB◆ \geq E_0$ always. If you
   obtain a variational energy lower than the known exact ground state energy, you have made an
   error in the calculation (wrong normalisation, incorrect matrix element, or the trial function is
   not in the correct Hilbert space).

3. **Fermi's Golden Rule applies to transitions to a continuum:** For transitions to discrete
   states, use the Rabi formula instead. The density of states $\rho(E_f)$ is essential --- if it is
   zero, the transition rate is zero regardless of the matrix element.

4. **The Born approximation assumes a weak potential:** The condition is $m|V_0|a/\hbar^2 \ll 1$
   where $a$ is the range of the potential. For strong potentials (like the nuclear potential or
   hard spheres), the Born approximation gives qualitatively wrong results. Use partial wave
   analysis instead.

5. **Resonances require careful treatment:** Near a resonance, perturbation theory breaks down. The
   Breit--Wigner formula is non-perturbative in the width $\Gamma$. The scattering length can be
   much larger than the range of the potential near a resonance (the unitarity limit).

## Problems (Additional)

<details>
<summary>Problem 19: Exchange Energy in Lithium</summary>

Lithium ($Z = 3$) has the electron configuration $1s^2 2s^1$. Using the variational method with
$Z_◆LB◆\text◆LB◆eff◆RB◆$ for the $1s$ electrons:

(a) Calculate $Z_◆LB◆\text◆LB◆eff◆RB◆$ for the $1s$ electrons, treating the $2s$ electron as a perturbation.

(b) Calculate the ionisation energy (removing the $2s$ electron) and compare with the experimental
value of 5.39 eV.

(c) Explain why the $2s$ electron is effectively screened by $Z_◆LB◆\text◆LB◆eff◆RB◆ \approx 1.26$.

**Solution:**

(a) For the $1s$ electrons, the effective charge is reduced from $Z = 3$ by screening from the other
$1s$ electron and partial penetration of the $2s$ electron. The $1s$ electrons screen each other
partially: using the helium result, $Z_◆LB◆\text◆LB◆eff◆RB◆(1s) \approx Z - 5/16 = 3 - 0.3125 = 2.69$.

(b) The $2s$ electron sees an effective nuclear charge of
$Z_◆LB◆\text◆LB◆eff◆RB◆(2s) \approx 3 - 2 \times 0.85 = 1.3$ (Slater's rules). The energy:

$$E_◆LB◆2s◆RB◆ = -\frac◆LB◆Z_◆LB◆\text◆LB◆eff◆RB◆^2◆RB◆◆LB◆n^2◆RB◆\times 13.6\ \text◆LB◆eV◆RB◆ = -\frac◆LB◆1.3^2◆RB◆◆LB◆4◆RB◆\times 13.6 = -\frac◆LB◆1.69◆RB◆◆LB◆4◆RB◆\times 13.6 = -5.75\ \text◆LB◆eV◆RB◆$$

The ionisation energy is $|E_◆LB◆2s◆RB◆| = 5.75$ eV, close to the experimental 5.39 eV. The discrepancy
reflects the crudeness of the Slater screening constants.

(c) The $2s$ electron has significant radial extent beyond the $1s$ core, so it sees a nearly bare
nuclear charge at small $r$ but is screened by both $1s$ electrons at large $r$. The effective
charge $Z_◆LB◆\text◆LB◆eff◆RB◆ \approx 1.26$ (using Hartree--Fock) represents this average screening.

</details>

<details>
<summary>Problem 20: Partial Wave Analysis for Square Well</summary>

Consider scattering from the attractive square well $V(r) = -V_0$ for $r < a$ and $V(r) = 0$ for
$r > a$.

(a) Show that the $s$-wave phase shift satisfies:

$$\delta_0 = -ka + \arctan\!\left(\frac◆LB◆k◆RB◆◆LB◆\kappa◆RB◆\tan(\kappa a)\right)$$

Where $\kappa = \sqrt◆LB◆2m(V_0 + E)◆RB◆/\hbar$ and $k = \sqrt◆LB◆2mE◆RB◆/\hbar$.

(b) Show that a bound state exists at energy $E = -|E|$ when $\kappa_0 a = \pi/2$ where
$\kappa_0 = \sqrt◆LB◆2m(V_0 - |E|)◆RB◆/\hbar$.

(c) Show that the scattering length diverges as a new bound state appears.

**Solution:**

(a) Inside the well ($r < a$), the radial wavefunction for $l = 0$ is $u(r) = A\sin(\kappa r)$.
Outside ($r > a$), $u(r) = B\sin(kr + \delta_0)$.

Matching $u$ and $u'$ at $r = a$:

$$\kappa\cos(\kappa a) = k\cos(ka + \delta_0)/\sin(ka + \delta_0)\cdot k$$

Wait: $\kappa\cot(\kappa a) = k\cot(ka + \delta_0)$.

$$\cot(ka + \delta_0) = \frac◆LB◆\kappa◆RB◆◆LB◆k◆RB◆\cot(\kappa a)$$

$$ka + \delta_0 = \arccot\!\left(\frac◆LB◆\kappa◆RB◆◆LB◆k◆RB◆\cot(\kappa a)\right) = \arctan\!\left(\frac◆LB◆k◆RB◆◆LB◆\kappa◆RB◆\tan(\kappa a)\right)$$

$$\delta_0 = -ka + \arctan\!\left(\frac◆LB◆k◆RB◆◆LB◆\kappa◆RB◆\tan(\kappa a)\right)$$

(b) A bound state has $E < 0$So $k = i\kappa'$ where $\kappa' = \sqrt◆LB◆2m|E|◆RB◆/\hbar$. The bound state
condition is that the exterior solution decays exponentially: $u(r) = Be^◆LB◆-\kappa' r◆RB◆$. Matching:

$$\kappa\cot(\kappa a) = -\kappa'$$

As $|E| \to 0$: $\kappa' \to 0$So $\kappa\cot(\kappa a) \to 0$Giving $\kappa a = \pi/2$ (the
threshold for the first bound state).

(c) The scattering length $a_s = -\lim_◆LB◆k \to 0◆RB◆(\delta_0/k)$. As
$\kappa a \to \pi/2$, $\tan(\kappa a) \to \infty$So:

$$\delta_0 \approx -ka + \arctan(\infty) = -ka + \pi/2$$

$$a_s = -\frac◆LB◆1◆RB◆◆LB◆k◆RB◆\left(-ka + \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right) = a - \frac◆LB◆\pi◆RB◆◆LB◆2k◆RB◆$$

As $k \to 0$: $a_s \to \pm\infty$ (diverges), changing sign as the bound state appears.

</details>

## 13. WKB Approximation

### 13.1 The WKB Method

The WKB (Wentzel--Kramers--Brillouin) method provides approximate solutions to the one-dimensional
Schrodinger equation when the potential varies slowly compared to the de Broglie wavelength.

The ansatz $\psi(x) = A(x)e^◆LB◆iS(x)/\hbar◆RB◆$ substituted into
$-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\psi'' + V\psi = E\psi$ gives, to leading order in $\hbar$:

$$S(x) = \pm\int^x p(x')\,dx', \quad p(x) = \sqrt◆LB◆2m[E - V(x)]◆RB◆$$

The WKB wavefunctions:

$$\psi(x) \approx \frac◆LB◆C◆RB◆◆LB◆\sqrt◆LB◆p(x)◆RB◆◆RB◆\exp\!\left(\pm\frac◆LB◆i◆RB◆◆LB◆\hbar◆RB◆\int^x p(x')\,dx'\right) \quad \text◆LB◆(classically allowed,  E > V\text◆LB◆)◆RB◆$$

$$\psi(x) \approx \frac◆LB◆C◆RB◆◆LB◆\sqrt◆LB◆|p(x)|◆RB◆◆RB◆\exp\!\left(\pm\frac◆LB◆1◆RB◆◆LB◆\hbar◆RB◆\int^x |p(x')|\,dx'\right) \quad \text◆LB◆(classically forbidden,  E < V\text◆LB◆)◆RB◆$$

### 13.2 Connection Formulas

At a classical turning point ($E = V(x_0)$), the WKB approximation breaks down. The Airy function
connects the oscillating and decaying solutions:

$$\frac◆LB◆2◆RB◆◆LB◆\sqrt◆LB◆p(x)◆RB◆◆RB◆\cos\!\left(\frac◆LB◆1◆RB◆◆LB◆\hbar◆RB◆\int_x^◆LB◆x_0◆RB◆ p(x')\,dx' - \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right) \longleftrightarrow \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆|p(x)|◆RB◆◆RB◆\exp\!\left(-\frac◆LB◆1◆RB◆◆LB◆\hbar◆RB◆\int_◆LB◆x_0◆RB◆^x |p(x')|\,dx'\right)$$

### 13.3 Bohr--Sommerfeld Quantisation

The WKB quantisation condition for a bound state in a potential well with turning points $a$ and
$b$:

$$\int_a^b p(x)\,dx = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\pi\hbar, \quad n = 0, 1, 2, \ldots$$

The factor of $1/2$ (Maslov index) accounts for the phase loss at each turning point.

**Application: Harmonic oscillator.** $V(x) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆m\omega^2 x^2$. Turning points at
$x = \pm\sqrt◆LB◆2E/(m\omega^2)◆RB◆$.

$$\int_◆LB◆-A◆RB◆^◆LB◆A◆RB◆\sqrt◆LB◆2mE - m^2\omega^2 x^2◆RB◆\,dx = \frac◆LB◆\pi E◆RB◆◆LB◆\omega◆RB◆ = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\pi\hbar$$

$$E_n = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\hbar\omega$$

The WKB gives the exact result for the harmonic oscillator --- a fortunate coincidence due to the
quadratic potential.

**Application: Power-law potential.** For $V(x) = V_0|x/a|^\alpha$:

$$E_n \propto \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)^◆LB◆2\alpha/(\alpha+2)◆RB◆$$

<details>
<summary>Worked Example 13.1: WKB Tunnelling Through a Barrier</summary>

For a potential barrier $V(x) = V_0(1 - x^2/a^2)$ for $|x| < a$With $E < V_0$The WKB transmission
probability is:

$$T \approx \exp\!\left(-\frac◆LB◆2◆RB◆◆LB◆\hbar◆RB◆\int_◆LB◆-a_0◆RB◆^◆LB◆a_0◆RB◆\sqrt◆LB◆2m(V_0(1 - x^2/a^2) - E)◆RB◆\,dx\right)$$

Where $a_0 = a\sqrt◆LB◆1 - E/V_0◆RB◆$ is the classical turning point.

$$T \approx \exp\!\left(-\frac◆LB◆2◆RB◆◆LB◆\hbar◆RB◆\sqrt◆LB◆2mV_0◆RB◆\int_◆LB◆-a_0◆RB◆^◆LB◆a_0◆RB◆\sqrt◆LB◆1 - E/V_0 - x^2/a^2◆RB◆\,dx\right)$$

$$= \exp\!\left(-\frac◆LB◆2◆RB◆◆LB◆\hbar◆RB◆\sqrt◆LB◆2mV_0◆RB◆\cdot\frac◆LB◆\pi a^2◆RB◆◆LB◆2a◆RB◆(1 - E/V_0)\right)$$

$$= \exp\!\left(-\frac◆LB◆\pi a◆RB◆◆LB◆\hbar◆RB◆\sqrt◆LB◆2mV_0◆RB◆\left(1 - \frac◆LB◆E◆RB◆◆LB◆V_0◆RB◆\right)\right)$$

For alpha decay ($V_0 \approx 25$ MeV, $a \approx 30$ fm, $E = 5$ MeV, $m = 4 \times 931.5$
MeV/$c^2$):

$$\frac◆LB◆\pi a◆RB◆◆LB◆\hbar c◆RB◆\sqrt◆LB◆2mc^2 V_0◆RB◆\left(1 - \frac◆LB◆E◆RB◆◆LB◆V_0◆RB◆\right) = \frac◆LB◆\pi \times 30\,\text◆LB◆fm◆RB◆◆LB◆197\,\text◆LB◆MeV◆RB◆\cdot\text◆LB◆fm◆RB◆\sqrt◆LB◆2 \times 3726 \times 25◆RB◆\times 0.8$$

$$= 0.479 \times 432.6 \times 0.8 = 165.7$$

$$T \approx e^◆LB◆-165.7◆RB◆ \approx 5 \times 10^◆LB◆-73◆RB◆$$

This extremely small probability explains the enormously long half-lives of alpha-emitting nuclei
($\sim 10^9$ years for $^◆LB◆238◆RB◆$U). The Geiger--Nuttall law relates $\log T_◆LB◆1/2◆RB◆$ to
$E^◆LB◆-1/2◆RB◆$Consistent with the WKB exponential dependence.

</details>

## 14. Density Functional Theory: Conceptual Overview

### 14.1 The Hohenberg--Kohn Theorems

**Theorem 1:** The ground-state electron density $n(\mathbf◆LB◆r◆RB◆)$ uniquely determines the external
potential $V_◆LB◆\text◆LB◆ext◆RB◆(\mathbf◆LB◆r◆RB◆)$ (up to an additive constant), and hence the full many-body
Hamiltonian and all ground-state properties.

**Theorem 2:** The ground-state energy is a functional of the density:
$E[n] = F_◆LB◆\text◆LB◆HK◆RB◆[n] + \int V_◆LB◆\text◆LB◆ext◆RB◆(\mathbf◆LB◆r◆RB◆)n(\mathbf◆LB◆r◆RB◆)\,d^3r$And the variational
principle applies: $E_0 \leq E[n]$ for any trial density $n(\mathbf◆LB◆r◆RB◆)$.

### 14.2 Kohn--Sham Equations

The interacting system is mapped to a fictitious system of non-interacting electrons in an effective
potential:

$$\left[-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla^2 + V_◆LB◆\text◆LB◆eff◆RB◆[n](\mathbf◆LB◆r◆RB◆)\right]\psi_i(\mathbf◆LB◆r◆RB◆) = \varepsilon_i\psi_i(\mathbf◆LB◆r◆RB◆)$$

$$n(\mathbf◆LB◆r◆RB◆) = \sum_◆LB◆i=1◆RB◆^◆LB◆N◆RB◆|\psi_i(\mathbf◆LB◆r◆RB◆)|^2 \quad \text◆LB◆(summing over occupied states)◆RB◆$$

$$V_◆LB◆\text◆LB◆eff◆RB◆ = V_◆LB◆\text◆LB◆ext◆RB◆ + V_H[n] + V_◆LB◆\text◆LB◆xc◆RB◆[n]$$

$$V_H[n](\mathbf◆LB◆r◆RB◆) = e^2\int\frac◆LB◆n(\mathbf◆LB◆r◆RB◆')◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆'|◆RB◆\,d^3r' \quad \text◆LB◆(Hartree potential)◆RB◆$$

The exchange-correlation functional $V_◆LB◆\text◆LB◆xc◆RB◆[n]$ contains all many-body effects beyond the
classical Hartree approximation.

### 14.3 Self-Interaction Error

The Hartree potential includes the interaction of each electron with itself. This **self-interaction
error** is not cancelled by the local density approximation (LDA) for $V_◆LB◆\text◆LB◆xc◆RB◆$. Consequences:

- Wrong asymptotic behaviour: $V_◆LB◆\text◆LB◆eff◆RB◆(r \to \infty) \to -e^2/r$ (correct) vs.
  $V_◆LB◆\text◆LB◆eff◆RB◆ \to 0$ (LDA, wrong)
- Underestimation of band gaps by 30--50\%
- Incorrect description of charge transfer excitations

Hybrid functionals (e.g., B3LYP, HSE06) and range-separated functionals partially correct this.

<details>
<summary>Worked Example 14.1: Thomas--Fermi Theory</summary>

The simplest density functional theory: the Thomas--Fermi model treats the kinetic energy as a local
functional of the density:

$$T_◆LB◆\text◆LB◆TF◆RB◆[n] = \frac◆LB◆3\hbar^2◆RB◆◆LB◆10m◆RB◆(3\pi^2)^◆LB◆2/3◆RB◆\int n^◆LB◆5/3◆RB◆(\mathbf◆LB◆r◆RB◆)\,d^3r = C_◆LB◆\text◆LB◆TF◆RB◆\int n^◆LB◆5/3◆RB◆\,d^3r$$

For an atom with nuclear charge $Ze$Minimising
$E[n] = T_◆LB◆\text◆LB◆TF◆RB◆[n] - Ze^2\int n(\mathbf◆LB◆r◆RB◆)/r\,d^3r + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^2\iint n(\mathbf◆LB◆r◆RB◆)n(\mathbf◆LB◆r◆RB◆')/|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|\,d^3rd^3r'$:

The variational equation gives:

$$C_◆LB◆\text◆LB◆TF◆RB◆\,n^◆LB◆2/3◆RB◆ = \frac◆LB◆Ze^2◆RB◆◆LB◆r◆RB◆ - e^2\int\frac◆LB◆n(\mathbf◆LB◆r◆RB◆')◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|◆RB◆\,d^3r'$$

This integral equation can be solved by scaling: $n(r) = (Z/a_0^3)\,g(r/a_0 Z^◆LB◆-1/3◆RB◆)$ where $g$ is
a universal function.

The Thomas--Fermi energy:
$E_◆LB◆\text◆LB◆TF◆RB◆ = -\frac◆LB◆3◆RB◆◆LB◆7◆RB◆(9\pi/2)^◆LB◆2/3◆RB◆\frac◆LB◆Z^◆LB◆7/3◆RB◆e^2◆RB◆◆LB◆2a_0◆RB◆ = -20.8\,Z^◆LB◆7/3◆RB◆$ eV.

This gives reasonable total energies for heavy atoms but fails qualitatively for light atoms (no
shell structure, no chemical bonding).

</details>

## Worked Examples

**Example 1: The wave equation**

A wave has a frequency of $250\,\text◆LB◆Hz◆RB◆$ and a wavelength of $1.5\,\text◆LB◆m◆RB◆$. Calculate the wave
speed.

**Solution:**

$$v = f\lambda = 250 \times 1.5 = 375\,\text◆LB◆m◆RB◆\,s◆RB◆^◆LB◆-1◆RB◆$$

**Example 2: Standing waves**

A string of length $0.80\,\text◆LB◆m◆RB◆$ vibrates at its fundamental frequency. If the wave speed on the
string is $120\,\text◆LB◆m◆RB◆\,s◆RB◆^◆LB◆-1◆RB◆$, calculate the fundamental frequency.

**Solution:**

At the fundamental frequency, $L = \frac◆LB◆\lambda◆RB◆◆LB◆2◆RB◆$, so $\lambda = 2L = 1.6\,\text◆LB◆m◆RB◆$.

$$f = \frac◆LB◆v◆RB◆◆LB◆\lambda◆RB◆ = \frac◆LB◆120◆RB◆◆LB◆1.6◆RB◆ = 75\,\text◆LB◆Hz◆RB◆$$

## Summary

- Wave function: $\Psi(x,t)$ describes quantum state; $|\Psi|^2$ gives probability density;
  normalisation $\int |\Psi|^2\,dx = 1$.
- Schrödinger equation: $i\hbar \frac◆LB◆\partial \Psi◆RB◆◆LB◆\partial t◆RB◆ = \hat◆LB◆H◆RB◆\Psi$; time-independent
  form $\hat◆LB◆H◆RB◆\psi = E\psi$ for stationary states.
- Operators and observables: position $\hat◆LB◆x◆RB◆ = x$, momentum
  $\hat◆LB◆p◆RB◆ = -i\hbar \partial/\partial x$; commutator $[\hat◆LB◆x◆RB◆, \hat◆LB◆p◆RB◆] = i\hbar$.
- Angular momentum: $\hat◆LB◆L◆RB◆^2 Y_l^m = l(l+1)\hbar^2 Y_l^m$; spin is intrinsic angular momentum with
  no classical analogue.
- Approximation methods: time-independent perturbation theory
  ($E_n \approx E_n^◆LB◆(0)◆RB◆ + \langle n^◆LB◆(0)◆RB◆|V|n^◆LB◆(0)◆RB◆\rangle$); variational principle gives upper
  bound on ground state energy.

## Cross-References

| Topic                        | Site        | Link                                                                    |
| ---------------------------- | ----------- | ----------------------------------------------------------------------- |
| Classical Mechanics          | WyattsNotes | [View](/docs/university/physics/classical-mechanics)                    |
| Electromagnetism             | WyattsNotes | [View](/docs/university/physics/electromagnetism)                       |
| Solid State Physics          | WyattsNotes | [View](/docs/university/physics/solid-state-physics)                    |
| Quantum Mechanics — MIT 8.04 | MIT OCW     | [View](https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/) |
