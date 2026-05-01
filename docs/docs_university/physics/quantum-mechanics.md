---
title: Quantum Mechanics
description:
  "University-level notes on Quantum Mechanics: 1. Historical Motivation; 1.1 Failures of Classical Physics; 1.2 Key Experiments."
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
depends on the intensity of light. Experiment showed it depends on the frequency.

**Atomic spectra.** Atoms emit light at discrete frequencies, not the continuous spectrum predicted
by classical electrodynamics.

**Stability of atoms.** Classical electrodynamics predicts orbiting electrons radiate energy and
spiral into the nucleus.

### 1.2 Key Experiments

**Planck's quantisation (1900).** Blackbody radiation is explained by assuming energy is emitted in
discrete quanta: $E = h\nu$ where $h = 6.626 \times 10^{-34}$ J$\cdot$s is Planck's constant.

**Einstein's photon (1905).** Light consists of photons, each carrying energy $E = h\nu$ and momentum
$p = h/\lambda = h\nu/c$. The photoelectric effect: $E_k = h\nu - \phi$ where $\phi$ is the work
function.

**Compton scattering (1923).** X-rays scattered off electrons show a wavelength shift:

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta)$$

This confirms that photons carry momentum $p = h/\lambda$.

**Davisson-Germer experiment (1927).** Electrons scattered off a nickel crystal produce a diffraction
pattern, confirming de Broglie's hypothesis that matter has wave properties: $\lambda = h/p$.

### 1.3 The Photoelectric Effect: Detailed Derivation

The photoelectric effect provided the first direct evidence for the quantum nature of light. When
monochromatic light of frequency $\nu$ strikes a metal surface, electrons are ejected with a maximum
kinetic energy $K_{\max}$ that depends on $\nu$ but **not** on the intensity.

**Einstein's quantum hypothesis (1905).** Each photon carries energy $E_\gamma = h\nu$. When a photon
strikes the surface, it transfers all its energy to a single electron. By energy conservation:

$$h\nu = \phi + K_{\max}$$

where $\phi$ is the work function (minimum energy to remove an electron from the metal).

**Key predictions:**

1. **Threshold frequency.** No electrons are emitted if $\nu \lt{} \nu_0 = \phi/h$, regardless of
   intensity. This is because each photon must supply at least $\phi$.

2. **Linear dependence on frequency.** $K_{\max} = h\nu - \phi$ is linear in $\nu$ with slope $h$
   (independent of the metal).

3. **Intensity affects current, not energy.** Higher intensity means more photons per unit time, so
   more electrons are emitted, but each electron has the same maximum kinetic energy.

4. **No time delay.** Classically, an electron should accumulate energy gradually; quantum
   mechanically, a single photon ejects an electron instantaneously.

*Proof of the threshold frequency.* Setting $K_{\max} = 0$ in the energy balance:

$$h\nu_0 = \phi \implies \nu_0 = \frac{\phi}{h}$$

For frequencies $\nu \lt{} \nu_0$, the photon energy is insufficient to liberate an electron, and
no photoelectric emission occurs regardless of intensity. $\blacksquare$

**Millikan's experimental verification (1916).** Robert Millikan, who initially opposed Einstein's
theory, performed careful experiments measuring $K_{\max}$ versus $\nu$ for various metals. His
results confirmed the linear relation $K_{\max} = h\nu - \phi$ with a universal slope $h$ (Planck's
constant), providing compelling evidence for the photon concept. Millikan's measured value of $h$
agreed with Planck's value from blackbody radiation to within $0.5\%$.

**Example 1.1.** Sodium has a work function $\phi = 2.28$ eV. Find the cutoff wavelength.

<details>
<summary>Solution</summary>

The cutoff frequency is $\nu_0 = \phi/h = 2.28 \times 1.602 \times 10^{-19} / 6.626 \times 10^{-34}$
$= 5.51 \times 10^{14}$ Hz. The cutoff wavelength is:

$$\lambda_0 = \frac{c}{\nu_0} = \frac{3.00 \times 10^8}{5.51 \times 10^{14}} = 544\;\mathrm{nm}$$

This lies in the green region of the visible spectrum, explaining why sodium is sensitive to visible
light.

</details>

### 1.4 Compton Scattering: Derivation

Compton scattering provides direct evidence that photons carry momentum. When an X-ray photon of
wavelength $\lambda$ scatters off a free (or loosely bound) electron at rest, the scattered photon
has a longer wavelength $\lambda'$.

**Setup.** Incident photon: energy $E = hc/\lambda$, momentum $p = h/\lambda$. Target electron:
at rest, energy $m_e c^2$, momentum $0$. After scattering, the photon is deflected by angle $\theta$
and the electron recoils at angle $\phi$.

**Energy conservation:**

$$\frac{hc}{\lambda} + m_e c^2 = \frac{hc}{\lambda'} + E_e$$

**Momentum conservation (vector equation):**

$$\frac{h}{\lambda}\hat{n} = \frac{h}{\lambda'}\hat{n}' + \mathbf{p}_e$$

*Derivation of the wavelength shift.* From the relativistic energy-momentum relation for the
electron, $E_e^2 = (p_e c)^2 + (m_e c^2)^2$. Rearranging the energy conservation:

$$E_e - m_e c^2 = hc\!\left(\frac{1}{\lambda} - \frac{1}{\lambda'}\right)$$

Squaring the momentum equation:

$$p_e^2 = \left(\frac{h}{\lambda}\right)^2 + \left(\frac{h}{\lambda'}\right)^2 - \frac{2h^2}{\lambda\lambda'}\cos\theta$$

Using $E_e^2 = p_e^2 c^2 + m_e^2 c^4$ and writing $T_e = E_e - m_e c^2$:

$$E_e^2 - m_e^2 c^4 = 2m_e c^2 T_e + T_e^2 = p_e^2 c^2$$

Substituting $T_e = hc(1/\lambda - 1/\lambda')$ and $p_e^2$ from above, then dividing by $c^2$ and
simplifying:

$$2m_e c \cdot \frac{h}{\lambda\lambda'}(1 - \cos\theta) = 2h^2\!\left(\frac{1}{\lambda^2} + \frac{1}{\lambda'^2} - \frac{2\cos\theta}{\lambda\lambda'}\right)$$

$$\frac{1}{\lambda'} - \frac{1}{\lambda} = \frac{h}{m_e c}(1 - \cos\theta)\cdot\frac{1}{\lambda\lambda'}$$

Multiplying through by $\lambda\lambda'$ yields the **Compton formula**:

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta)$$

The quantity $\lambda_C = h/(m_e c) \approx 2.426 \times 10^{-12}$ m is the **Compton wavelength** of
the electron. $\blacksquare$

**Classical limit.** In the classical limit ($\lambda \gg \lambda_C$), the wavelength shift
$\Delta\lambda \to 0$ and the scattering reduces to classical Thomson scattering. The Compton
effect is only significant for X-rays and gamma rays, where $\lambda$ is comparable to $\lambda_C$.
For visible light ($\lambda \sim 500$ nm), the Compton shift is negligible compared to the wavelength.

**Physical interpretation.** The maximum shift $\Delta\lambda = 2\lambda_C \approx 4.85$ pm occurs at
$\theta = \pi$ (backscattering). The shift is independent of the material and depends only on the
scattering angle, confirming that the scattering involves individual photons and electrons.

**Example 1.2.** X-rays of wavelength $0.100$ nm are Compton-scattered at $\theta = 90°$. Find the
wavelength of the scattered photon and the kinetic energy of the recoil electron.

<details>
<summary>Solution</summary>

$$\Delta\lambda = \lambda_C(1 - \cos 90°) = \lambda_C = 2.426 \times 10^{-12}\;\mathrm{m} = 0.00243\;\mathrm{nm}$$

$$\lambda' = \lambda + \Delta\lambda = 0.100 + 0.00243 = 0.10243\;\mathrm{nm}$$

The kinetic energy of the recoil electron:

$$T_e = hc\!\left(\frac{1}{\lambda} - \frac{1}{\lambda'}\right) = \frac{hc\,\Delta\lambda}{\lambda\lambda'}$$

$$= \frac{(6.626 \times 10^{-34})(3.00 \times 10^8)(2.43 \times 10^{-12})}{(1.00 \times 10^{-10})(1.0243 \times 10^{-10})} = 4.72 \times 10^{-17}\;\mathrm{J} = 295\;\mathrm{eV}$$

</details>

### 1.5 The Davisson-Germer Experiment

The Davisson-Germer experiment (1927) provided the first direct confirmation of de Broglie's
hypothesis that particles have wave-like properties.

**Experimental setup.** A beam of electrons is accelerated through a potential difference $V$ and
directed at a nickel crystal. The scattered electrons are detected at various angles $\phi$.

**de Broglie relation.** An electron accelerated through potential $V$ has kinetic energy $K = eV$
and momentum:

$$p = \sqrt{2m_e eV}$$

The de Broglie wavelength is:

$$\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m_e eV}}$$

**Bragg condition.** The nickel crystal acts as a diffraction grating with lattice spacing $d$.
Constructive interference occurs when:

$$n\lambda = 2d\sin\phi$$

where $\phi$ is the angle measured from the crystal surface.

**The key observation.** At $V = 54$ V, a pronounced peak was observed at $\phi = 50°$. The
de Broglie wavelength at this voltage is:

$$\lambda = \frac{6.626 \times 10^{-34}}{\sqrt{2(9.109 \times 10^{-31})(1.602 \times 10^{-19})(54)}} = 0.167\;\mathrm{nm}$$

The Bragg condition with the nickel lattice spacing gives excellent agreement with this
prediction, confirming that electrons exhibit wave-like diffraction.

**Significance.** The Davisson-Germer experiment established wave-particle duality for matter. The
de Broglie relation $\lambda = h/p$ was subsequently confirmed for neutrons, atoms, and molecules
(C60 fullerenes in 1999), establishing it as a universal principle. In 2019, the de Broglie
wavelength of molecules exceeding 25,000 atomic mass units was demonstrated, pushing the boundary
of quantum mechanics to the macroscopic regime.

## 2. Postulates of Quantum Mechanics

### 2.1 The Postulates

**Postulate 1 (State Space).** The state of a quantum system is completely described by a normalised
vector $|\psi\rangle$ in a complex Hilbert space $\mathcal{H}$.

*Physical motivation.* Superposition is observed in interference experiments (e.g., double-slit),
where a particle can traverse multiple paths simultaneously. The complex-valued nature of the state
is essential: relative phases between superposition components produce observable interference
patterns that cannot be replicated with real amplitudes alone.

**Postulate 2 (Observables).** Every measurable quantity (observable) is represented by a Hermitian
(self-adjoint) operator $\hat{A} = \hat{A}^\dagger$ acting on $\mathcal{H}$.

*Physical motivation.* Hermitian operators have real eigenvalues, matching the fact that measurement
outcomes are real numbers. The spectral theorem guarantees a complete set of eigenstates, providing a
basis for expansion.

**Postulate 3 (Measurement).** A measurement of observable $\hat{A}$ yields one of the eigenvalues
$a_n$ of $\hat{A}$. The probability of measuring $a_n$ when the system is in state $|\psi\rangle$ is

$$P(a_n) = |\langle a_n | \psi \rangle|^2$$

where $|a_n\rangle$ is the eigenstate corresponding to $a_n$. After measurement, the state collapses
to $|a_n\rangle$.

*Physical motivation.* The Born rule $P = |\langle a_n|\psi\rangle|^2$ was postulated by Born (1926)
to connect wave functions to observable probabilities. It correctly predicts the intensity
distribution in diffraction experiments and the statistics of particle detections.

**Postulate 4 (Time Evolution).** The time evolution of the state is governed by the **time-dependent
Schrodinger equation**:

$$i\hbar \frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle$$

where $\hat{H}$ is the Hamiltonian (energy operator).

*Physical motivation.* This is the quantum analogue of Hamilton's equations in classical mechanics.
The Schrodinger equation is linear, guaranteeing superposition is preserved. Energy conservation is
built in: for a time-independent Hamiltonian, $\langle H \rangle$ is constant.

**Postulate 5 (Composite Systems).** The state space of a composite system is the tensor product of
the state spaces of the components.

*Physical motivation.* This postulate naturally produces entangled states, which have been confirmed
experimentally (Bell inequality violations, quantum teleportation). The tensor product structure
ensures that measurements on subsystems can exhibit correlations stronger than any classical theory
permits.

### 2.2 The Measurement Problem

The measurement postulate (Postulate 3) introduces a fundamental tension: the Schrodinger equation
describes **deterministic, unitary** evolution, but measurement produces **probabilistic, non-unitary**
collapse. This is the **measurement problem**.

**The conflict.** Consider a system in a superposition $|\psi\rangle = \alpha|a_1\rangle + \beta|a_2\rangle$.
Under unitary evolution, the state remains a superposition. But a measurement of $\hat{A}$ yields
either $a_1$ or $a_2$ with probabilities $|\alpha|^2$ and $|\beta|^2$, and the state collapses to
the corresponding eigenstate. No unitary operator can map a superposition to a single eigenstate
with the correct probabilities.

**Major interpretational approaches:**

- **Copenhagen interpretation.** Collapse is a fundamental, irreducible process. The classical
  measuring apparatus triggers the collapse. No further mechanism is specified.

- **Many-worlds interpretation (Everett, 1957).** The universal wave function never collapses.
  Instead, measurement causes the observer and system to entangle, branching into multiple
  non-interacting "worlds," each corresponding to one measurement outcome.

- **Decoherence (Zurek).** Interaction with the environment rapidly suppresses off-diagonal
  elements of the reduced density matrix in a preferred basis ("einselection"), explaining the
  emergence of classical behaviour from unitary quantum mechanics.

- **Bohmian mechanics.** Particles have definite positions guided by the wave function via the
  "pilot wave." The wave function never collapses, but the effective description reproduces the
  Born rule.

The measurement problem remains an active area of research in the foundations of quantum mechanics.

### 2.3 Density Matrix Formalism

For systems where the state is not known precisely (statistical mixtures), the **density operator**
provides a more general description than the state vector.

**Definition.** For a pure state $|\psi\rangle$, the density operator is $\hat{\rho} = |\psi\rangle\langle\psi|$.
For a statistical mixture of states $|\psi_i\rangle$ with probabilities $p_i$:

$$\hat{\rho} = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|$$

**Properties:**
- $\mathrm{Tr}(\hat{\rho}) = 1$ (normalisation)
- $\hat{\rho}^\dagger = \hat{\rho}$ (Hermitian)
- $\hat{\rho}^2 = \hat{\rho}$ if and only if the state is pure; $\hat{\rho}^2 \lt \hat{\rho}$ for mixed states
- Expectation values: $\langle A \rangle = \mathrm{Tr}(\hat{\rho}\hat{A})$

**Time evolution:** $i\hbar\,d\hat{\rho}/dt = [\hat{H}, \hat{\rho}]$ (Liouville-von Neumann equation).

The density matrix is essential for describing subsystems of entangled states (reduced density
matrices via partial trace), open quantum systems, and decoherence.

### 2.4 Implications

- **Superposition:** A system can be in a linear combination of eigenstates: $|\psi\rangle = \sum_n c_n |a_n\rangle$.
- **Uncertainty Principle:** Non-commuting observables cannot be simultaneously measured with arbitrary precision.
- **Probabilistic Nature:** Quantum mechanics predicts probabilities, not deterministic outcomes.
- **No-cloning theorem.** There is no unitary operation that copies an arbitrary unknown quantum
  state $|\psi\rangle$. This follows from the linearity of quantum mechanics and has profound
  implications for quantum information.

## 3. Wave Functions and the Schrodinger Equation

### 3.1 Wave Functions

In the position representation, the state is described by a **wave function** $\psi(\mathbf{r}, t)$,
where $|\psi(\mathbf{r}, t)|^2$ is the probability density:

$$P(\mathbf{r} \in [\mathbf{r}, \mathbf{r} + d\mathbf{r}]) = |\psi(\mathbf{r}, t)|^2\, d^3\mathbf{r}$$

**Normalisation:** $\int_{-\infty}^{\infty} |\psi(\mathbf{r}, t)|^2\, d^3\mathbf{r} = 1$.

### 3.2 Time-Dependent Schrodinger Equation

$$i\hbar \frac{\partial \psi}{\partial t} = \hat{H}\psi = \left(-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r}, t)\right)\psi$$

### 3.3 Time-Independent Schrodinger Equation

For time-independent potentials $V(\mathbf{r})$, separate variables: $\psi(\mathbf{r}, t) = \phi(\mathbf{r}) e^{-iEt/\hbar}$:

$$\hat{H}\phi = E\phi \quad \mathrm{i.e.,} \quad -\frac{\hbar^2}{2m}\nabla^2\phi + V\phi = E\phi$$

This is an eigenvalue problem: $E$ is the energy eigenvalue, $\phi$ is the energy eigenstate.

**Properties of energy eigenstates:**

1. **Orthogonality.** If $\hat{H}\phi_n = E_n\phi_n$ and $\hat{H}\phi_m = E_m\phi_m$ with $E_n \neq E_m$,
   then $\int \phi_n^*\phi_m\,dx = 0$ (since $\hat{H}$ is Hermitian).

2. **Completeness.** The energy eigenstates form a complete basis: any state can be expanded as
   $\psi(x,0) = \sum_n c_n\phi_n(x)$ where $c_n = \int \phi_n^*(x)\psi(x,0)\,dx$.

3. **Stationary states.** If $\psi(x,0) = \phi_n(x)$, then $\psi(x,t) = \phi_n(x)e^{-iE_nt/\hbar}$.
   The probability density $|\psi|^2 = |\phi_n|^2$ is time-independent.

4. **Reality of $\phi$.** If $V(x)$ is real and there is no magnetic field, $\phi_n(x)$ can be chosen
   to be real. This is because if $\phi_n$ is a solution, so is $\phi_n^*$, and degenerate solutions
   can be combined into real linear combinations.

### 3.4 Probability Current

The **probability current density** is

$$\mathbf{J} = \frac{\hbar}{2mi}(\psi^* \nabla\psi - \psi \nabla\psi^*)$$

It satisfies the continuity equation: $\frac{\partial |\psi|^2}{\partial t} + \nabla \cdot \mathbf{J} = 0$,
expressing conservation of probability.

*Derivation of the continuity equation.* Start with the Schrodinger equation and its complex conjugate:

$$i\hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi + V\psi$$

$$-i\hbar \frac{\partial \psi^*}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi^* + V\psi^*$$

Multiply the first by $\psi^*$ and the second by $\psi$, then subtract:

$$i\hbar\!\left(\psi^*\frac{\partial \psi}{\partial t} + \psi\frac{\partial \psi^*}{\partial t}\right) = -\frac{\hbar^2}{2m}\!\left(\psi^*\nabla^2\psi - \psi\nabla^2\psi^*\right)$$

The left-hand side is $i\hbar\,\partial|\psi|^2/\partial t$. The right-hand side is a divergence:

$$\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*) = \psi^*\nabla^2\psi - \psi\nabla^2\psi^*$$

Therefore:

$$i\hbar\frac{\partial |\psi|^2}{\partial t} = -\frac{\hbar^2}{2m}\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*)$$

Dividing by $i\hbar$:

$$\frac{\partial |\psi|^2}{\partial t} + \nabla \cdot \left[\frac{\hbar}{2mi}(\psi^*\nabla\psi - \psi\nabla\psi^*)\right] = 0$$

$$\frac{\partial |\psi|^2}{\partial t} + \nabla \cdot \mathbf{J} = 0 \qquad \blacksquare$$

### 3.5 Unitarity of Time Evolution

**Theorem 3.1.** Time evolution governed by the Schrodinger equation with a Hermitian Hamiltonian
is unitary, and therefore preserves the norm of the state vector.

*Proof.* The time evolution operator $\hat{U}(t, t_0)$ is defined by:

$$|\psi(t)\rangle = \hat{U}(t, t_0)|\psi(t_0)\rangle$$

For a time-independent Hamiltonian:

$$\hat{U}(t, t_0) = \exp\!\left(-\frac{i\hat{H}(t - t_0)}{\hbar}\right)$$

To prove unitarity, we show $\hat{U}^\dagger \hat{U} = \hat{I}$:

$$\hat{U}^\dagger = \exp\!\left(\frac{i\hat{H}^\dagger(t - t_0)}{\hbar}\right) = \exp\!\left(\frac{i\hat{H}(t - t_0)}{\hbar}\right)$$

since $\hat{H} = \hat{H}^\dagger$ (Hermitian). Therefore:

$$\hat{U}^\dagger \hat{U} = \exp\!\left(\frac{i\hat{H}(t - t_0)}{\hbar}\right)\exp\!\left(-\frac{i\hat{H}(t - t_0)}{\hbar}\right) = \hat{I}$$

since commuting operators satisfy $e^A e^{-A} = I$.

**Consequence.** Norm preservation:

$$\langle\psi(t)|\psi(t)\rangle = \langle\psi(t_0)|\hat{U}^\dagger\hat{U}|\psi(t_0)\rangle = \langle\psi(t_0)|\psi(t_0)\rangle$$

Total probability is conserved under time evolution. $\blacksquare$

**Composing evolutions.** For successive time intervals, the evolution operator composes as:

$$\hat{U}(t_2, t_0) = \hat{U}(t_2, t_1)\,\hat{U}(t_1, t_0)$$

This composition law, combined with unitarity, is the group structure underlying quantum dynamics.
For a time-dependent Hamiltonian, the evolution operator is given by Dyson's time-ordered exponential:

$$\hat{U}(t, t_0) = \mathcal{T}\exp\!\left(-\frac{i}{\hbar}\int_{t_0}^{t}\hat{H}(t')\,dt'\right)$$

where $\mathcal{T}$ denotes time ordering (later times appear to the left).

For a time-dependent Hamiltonian, the evolution operator satisfies $i\hbar\,\partial\hat{U}/\partial t = \hat{H}(t)\hat{U}$
with $\hat{U}(t_0, t_0) = \hat{I}$. Unitarity still holds: $d(\hat{U}^\dagger\hat{U})/dt = 0$ since
$\hat{H}(t) = \hat{H}^\dagger(t)$.

### 3.6 Normalisation of Wave Functions

A physically valid wave function must satisfy $\int |\psi|^2\,dx = 1$. This determines the normalisation
constant.

**Example 3.1.** Normalise the wave function $\psi(x) = Ae^{-\alpha|x|}$ for $-\infty \lt x \lt \infty$,
where $\alpha \gt 0$.

<details>
<summary>Solution</summary>

$$\int_{-\infty}^{\infty} |A|^2 e^{-2\alpha|x|}\,dx = 2|A|^2 \int_0^{\infty} e^{-2\alpha x}\,dx = 2|A|^2 \cdot \frac{1}{2\alpha} = \frac{|A|^2}{\alpha} = 1$$

Therefore $|A| = \sqrt{\alpha}$, and we choose $A = \sqrt{\alpha}$:

$$\psi(x) = \sqrt{\alpha}\,e^{-\alpha|x|}$$

To find $\langle x \rangle$:

$$\langle x \rangle = \alpha \int_{-\infty}^{\infty} x\,e^{-2\alpha|x|}\,dx = 0$$

by symmetry (the integrand is odd). For $\langle x^2 \rangle$:

$$\langle x^2 \rangle = 2\alpha \int_0^{\infty} x^2 e^{-2\alpha x}\,dx = 2\alpha \cdot \frac{2}{(2\alpha)^3} = \frac{1}{2\alpha^2}$$

So $\Delta x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = 1/(\sqrt{2}\,\alpha)$.

The uncertainty product for this state is $\sigma_x\,\sigma_p = \hbar/(2\sqrt{2})$, which is larger
than the minimum $\hbar/2$, showing this is not a minimum-uncertainty state.

</details>

**Example 3.2.** Normalise $\psi(x) = Axe^{-\alpha x^2}$ for $-\infty \lt x \lt \infty$.

<details>
<summary>Solution</summary>

$$\int_{-\infty}^{\infty} |A|^2 x^2 e^{-2\alpha x^2}\,dx = |A|^2 \cdot \frac{1}{4\alpha}\sqrt{\frac{\pi}{2\alpha}} = 1$$

using the Gaussian integral $\int_{-\infty}^{\infty} x^2 e^{-ax^2}\,dx = \frac{1}{2a}\sqrt{\frac{\pi}{a}}$. Therefore:

$$A = 2\sqrt{\alpha}\left(\frac{2\alpha}{\pi}\right)^{1/4}$$

</details>

### 3.7 Time-Dependent Perturbation Theory

When the Hamiltonian has a time-dependent perturbation, $\hat{H}(t) = \hat{H}_0 + \hat{V}(t)$, the
transition probability from initial state $|i\rangle$ to final state $|f\rangle$ (with
$E_i \neq E_f$) is computed in the interaction picture.

**First-order transition amplitude.** If the system starts in $|i\rangle$ at $t = 0$, the probability
amplitude for being in $|f\rangle$ at time $t$ is, to first order:

$$c_f(t) = -\frac{i}{\hbar}\int_0^t \langle f | \hat{V}(t') | i \rangle\, e^{i\omega_{fi}t'}\,dt'$$

where $\omega_{fi} = (E_f - E_i)/\hbar$ is the Bohr frequency.

**Constant perturbation.** If $\hat{V}(t) = \hat{V}_0$ (constant) for $0 \lt t \lt T$:

$$c_f(T) = -\frac{i}{\hbar}V_{fi}\int_0^T e^{i\omega_{fi}t'}\,dt' = -\frac{V_{fi}}{\hbar\omega_{fi}}\!\left(e^{i\omega_{fi}T} - 1\right)$$

The transition probability is:

$$P_{i \to f}(T) = \frac{|V_{fi}|^2}{\hbar^2}\,\frac{\sin^2(\omega_{fi}T/2)}{(\omega_{fi}/2)^2}$$

This function is sharply peaked around $\omega_{fi} = 0$ (resonance), with width $\Delta\omega \sim 2\pi/T$.

**Interpretation.** As $T \to \infty$, the function $\sin^2(\omega_{fi}T/2)/(\omega_{fi}/2)^2 \to 2\pi T\,\delta(\omega_{fi})$,
so transitions occur only when energy is conserved ($E_f = E_i$). For finite $T$, energy conservation
is approximate to within $\Delta E \sim \hbar/T$, a manifestation of the time-energy uncertainty
relation.

**Fermi's Golden Rule.** For a transition to a continuum of final states with density of states
$\rho(E_f)$, the transition **rate** (probability per unit time) is:

$$\Gamma_{i \to f} = \frac{2\pi}{\hbar}|\langle f | \hat{V} | i \rangle|^2\,\rho(E_f)$$

This is one of the most important results in quantum mechanics, with applications to spontaneous
emission, scattering theory, and condensed matter physics.

**Sudden and adiabatic approximations.**

- **Sudden approximation.** If the Hamiltonian changes rapidly compared to the system's natural
  timescale $\sim \hbar/\Delta E$, the state does not have time to adjust: $|\psi_{\mathrm{after}}\rangle = |\psi_{\mathrm{before}}\rangle$.
  The probability of finding the system in the new $n$-th eigenstate is $P_n = |\langle n_{\mathrm{new}}|\psi_{\mathrm{before}}\rangle|^2$.

- **Adiabatic theorem.** If the Hamiltonian changes slowly enough (specifically, if
  $|\langle m|\partial\hat{H}/\partial t|n\rangle|/(\hbar\omega_{mn}^2) \ll 1$ for all $m \neq n$),
  the system remains in an instantaneous eigenstate without transitions. The adiabatic condition
  requires the rate of change to be much slower than the energy gap divided by $\hbar$.

**Harmonic perturbation.** For a sinusoidal perturbation $\hat{V}(t) = \hat{V}_1\,e^{-i\omega t} + \hat{V}_1^\dagger\,e^{i\omega t}$,
the first-order transition rate from $|i\rangle$ to $|f\rangle$ is significant only when $\omega \approx \omega_{fi}$
(absorption) or $\omega \approx -\omega_{fi}$ (stimulated emission). The transition probability for
resonant absorption ($\omega \approx \omega_{fi}$) is:

$$P_{i\to f}(t) = \frac{|\langle f|\hat{V}_1|i\rangle|^2}{\hbar^2}\,\frac{\sin^2((\omega - \omega_{fi})t/2)}{(\omega - \omega_{fi})^2/4}$$

In the long-time limit, this reduces to Fermi's Golden Rule with the replacement $V_{fi} \to \langle f|\hat{V}_1|i\rangle$.

## 4. Operators and Observables

### 4.1 Position and Momentum Operators

In the position representation:

$$\hat{x} = x, \quad \hat{p} = -i\hbar\frac{\partial}{\partial x}$$

These satisfy the **canonical commutation relation**:

$$[\hat{x}, \hat{p}] = i\hbar$$

### 4.2 General Properties of Hermitian Operators

**Hermitian operators** have real eigenvalues and orthogonal eigenstates -- essential for observables.

**Theorem 4.1.** If $\hat{A}$ is Hermitian, then:
- All eigenvalues are real.
- Eigenstates corresponding to distinct eigenvalues are orthogonal.
- The eigenstates form a complete basis (for the space of physical states).

*Proof that eigenvalues are real.* Let $\hat{A}|a\rangle = a|a\rangle$ with $\langle a|a\rangle = 1$. Then:

$$\langle a|\hat{A}|a\rangle = a\langle a|a\rangle = a$$

Taking the complex conjugate:

$$\langle a|\hat{A}|a\rangle^* = \langle a|\hat{A}^\dagger|a\rangle = \langle a|\hat{A}|a\rangle = a^*$$

where the second equality uses $\hat{A} = \hat{A}^\dagger$. Therefore $a = a^*$, so $a$ is real. $\blacksquare$

*Proof that eigenstates are orthogonal.* Let $\hat{A}|a\rangle = a|a\rangle$ and $\hat{A}|b\rangle = b|b\rangle$
with $a \neq b$:

$$\langle b|\hat{A}|a\rangle = a\langle b|a\rangle$$

$$\langle b|\hat{A}|a\rangle = \langle\hat{A}b|a\rangle = b^*\langle b|a\rangle = b\langle b|a\rangle$$

where the last step uses $b^* = b$ (eigenvalues are real). Therefore:

$$(a - b)\langle b|a\rangle = 0$$

Since $a \neq b$, we must have $\langle b|a\rangle = 0$. $\blacksquare$

**Theorem 4.2 (Spectral Theorem).** Every Hermitian operator on a finite-dimensional Hilbert space
has a complete orthonormal set of eigenvectors. In infinite dimensions, this holds for
self-adjoint operators with a discrete spectrum; operators with continuous spectra require the
spectral theorem in its general form (resolution of the identity).

### 4.3 Commutators

The **commutator** of two operators is $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$.

**Theorem 4.3 (Generalised Uncertainty Principle).** For observables $\hat{A}$ and $\hat{B}$:

$$\sigma_A \sigma_B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$$

**Corollary 4.4 (Heisenberg Uncertainty Principle).** $\sigma_x \sigma_p \geq \hbar/2$.

*Proof.* This follows from the generalised uncertainty principle with $[\hat{x}, \hat{p}] = i\hbar$:

$$\sigma_x \sigma_p \geq \frac{1}{2}|\langle i\hbar \rangle| = \frac{\hbar}{2}$$

$\blacksquare$

### 4.4 Proof of the Generalised Uncertainty Principle

**Theorem 4.5 (Robertson-Schrodinger inequality).** For any state $|\psi\rangle$ and observables
$\hat{A}$, $\hat{B}$:

$$\sigma_A^2\,\sigma_B^2 \geq \frac{1}{4}|\langle[\hat{A}, \hat{B}]\rangle|^2 + \frac{1}{4}\langle\{\Delta\hat{A}, \Delta\hat{B}\}\rangle^2$$

where $\Delta\hat{A} = \hat{A} - \langle\hat{A}\rangle$ and $\sigma_A^2 = \langle\Delta\hat{A}^2\rangle$.

*Proof.* Define $|\alpha\rangle = (\Delta\hat{A} + i\lambda\Delta\hat{B})|\psi\rangle$ for a real
parameter $\lambda$. Since $\langle\alpha|\alpha\rangle \geq 0$:

$$\langle\psi|(\Delta\hat{A} - i\lambda\Delta\hat{B})(\Delta\hat{A} + i\lambda\Delta\hat{B})|\psi\rangle \geq 0$$

$$= \sigma_A^2 + i\lambda\langle[\Delta\hat{A}, \Delta\hat{B}]\rangle + \lambda^2\sigma_B^2 \geq 0$$

This is a quadratic in $\lambda$ that is non-negative for all $\lambda$, so its discriminant must be
non-positive:

$$(\langle[\Delta\hat{A}, \Delta\hat{B}]\rangle)^2 - 4\sigma_A^2\sigma_B^2 \leq 0$$

Since $[\Delta\hat{A}, \Delta\hat{B}] = [\hat{A}, \hat{B}]$ (constants commute with everything):

$$\sigma_A^2\,\sigma_B^2 \geq \frac{1}{4}|\langle[\hat{A}, \hat{B}]\rangle|^2 \qquad \blacksquare$$

The stronger Robertson-Schrodinger form retains the anticommutator term $\langle\{\Delta\hat{A}, \Delta\hat{B}\}\rangle^2$,
which is always non-negative and provides a tighter bound.

**Example 4.1.** Show that the uncertainty principle is saturated for the harmonic oscillator ground state.

<details>
<summary>Solution</summary>

For the ground state $\psi_0(x) = (m\omega/\pi\hbar)^{1/4}\exp(-m\omega x^2/(2\hbar))$:

$$\langle x \rangle = 0, \quad \langle x^2 \rangle = \frac{\hbar}{2m\omega} \implies \sigma_x = \sqrt{\frac{\hbar}{2m\omega}}$$

$$\langle p \rangle = 0, \quad \langle p^2 \rangle = \frac{m\omega\hbar}{2} \implies \sigma_p = \sqrt{\frac{m\omega\hbar}{2}}$$

$$\sigma_x\,\sigma_p = \frac{\hbar}{2}$$

This saturates the Heisenberg bound, so the ground state is a **minimum uncertainty state** (Gaussian).

</details>

### 4.5 Expectation Values

The **expectation value** of an observable $\hat{A}$ in state $|\psi\rangle$:

$$\langle A \rangle = \langle \psi | \hat{A} | \psi \rangle = \int \psi^* \hat{A} \psi\, dx$$

**Theorem 4.6 (Ehrenfest's Theorem).** Quantum expectation values obey classical equations of motion:

$$\frac{d\langle \hat{x} \rangle}{dt} = \frac{\langle \hat{p} \rangle}{m}, \quad \frac{d\langle \hat{p} \rangle}{dt} = -\left\langle \frac{\partial V}{\partial x}\right\rangle$$

*Proof of Ehrenfest's Theorem.* From the Schrodinger equation:

$$\frac{d\langle \hat{A} \rangle}{dt} = \frac{i}{\hbar}\langle[\hat{H}, \hat{A}]\rangle + \left\langle\frac{\partial \hat{A}}{\partial t}\right\rangle$$

For $\hat{A} = \hat{x}$ (no explicit time dependence), using $[\hat{p}^2, \hat{x}] = -2i\hbar\hat{p}$:

$$\frac{d\langle \hat{x} \rangle}{dt} = \frac{i}{\hbar}\!\left\langle\left[\frac{\hat{p}^2}{2m}, \hat{x}\right]\right\rangle = \frac{i}{\hbar}\cdot\frac{-2i\hbar}{2m}\langle\hat{p}\rangle = \frac{\langle\hat{p}\rangle}{m}$$

For $\hat{A} = \hat{p}$, using $[V(\hat{x}), \hat{p}] = i\hbar\,V'(\hat{x})$:

$$\frac{d\langle \hat{p} \rangle}{dt} = \frac{i}{\hbar}\langle[V(\hat{x}), \hat{p}]\rangle = -\left\langle\frac{\partial V}{\partial x}\right\rangle$$

$\blacksquare$

**Correspondence principle.** Ehrenfest's theorem embodies the **correspondence principle**: in the
classical limit (large quantum numbers or $\hbar \to 0$), quantum expectation values follow
classical trajectories. However, this is only exact for linear or quadratic potentials; for general
potentials, $\langle V'(x) \rangle \neq V'(\langle x \rangle)$, so quantum corrections persist even
for large systems.

### 4.6 Solving Eigenvalue Equations

To find the eigenvalues and eigenvectors of an operator $\hat{A}$, solve:

$$\hat{A}|\phi\rangle = a|\phi\rangle \implies \det(\hat{A} - a\hat{I}) = 0$$

The roots give the eigenvalues; substituting each back yields the eigenvectors.

**Example 4.3.** Find the eigenvalues and eigenvectors of $\hat{S}_x = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

<details>
<summary>Solution</summary>

$$\det\!\left(\frac{\hbar}{2}\begin{pmatrix}-a & 1\\1 & -a\end{pmatrix}\right) = 0 \implies a^2 - 1 = 0 \implies a = \pm 1$$

Eigenvalues are $\pm\hbar/2$.

For $a = +1$: $\begin{pmatrix}-1 & 1\\1 & -1\end{pmatrix}\begin{pmatrix}c_1\\c_2\end{pmatrix} = 0 \implies c_1 = c_2$.
Normalised: $|+\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$.

For $a = -1$: $c_1 = -c_2$. Normalised: $|-\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}$.

These are equal superpositions of the $S_z$ eigenstates. Note that measuring $S_x$ on a state of
definite $S_z$ gives probabilistic outcomes, and vice versa.

</details>

## 5. One-Dimensional Problems

### 5.1 The Infinite Square Well

A particle of mass $m$ in a potential $V(x) = 0$ for $0 \lt x \lt L$ and $V(x) = \infty$ otherwise.

**Derivation.** Inside the well, the time-independent Schrodinger equation is:

$$-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} = E\phi \implies \frac{d^2\phi}{dx^2} + k^2\phi = 0$$

where $k = \sqrt{2mE}/\hbar$. The general solution is:

$$\phi(x) = A\sin(kx) + B\cos(kx)$$

**Boundary conditions:** $\phi(0) = \phi(L) = 0$.

From $\phi(0) = 0$: $B = 0$, so $\phi(x) = A\sin(kx)$.

From $\phi(L) = 0$: $\sin(kL) = 0$, which requires $kL = n\pi$ for $n = 1, 2, 3, \ldots$

Therefore $k_n = n\pi/L$ and:

$$E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{n^2\pi^2\hbar^2}{2mL^2}$$

**Normalisation.** $\int_0^L |A|^2\sin^2(n\pi x/L)\,dx = |A|^2 L/2 = 1$, giving $A = \sqrt{2/L}$.

**Solutions:**

$$\phi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right), \quad E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2}, \quad n = 1, 2, 3, \ldots$$

**Properties:**
- The ground state ($n = 1$) has the lowest energy $E_1 > 0$ (**zero-point energy**).
- Energy levels are not equally spaced; $E_n \propto n^2$.
- There are $(n - 1)$ nodes in the $n$-th eigenstate.

:::caution Common Pitfall
The ground state has $n = 1$, not $n = 0$. The solution $n = 0$ gives $\phi(x) = 0$ everywhere,
which is not normalisable. Furthermore, $E_1 > 0$ (zero-point energy) is a direct consequence of
the uncertainty principle: confining the particle to a finite region requires kinetic energy.
:::

### 5.2 The Quantum Harmonic Oscillator

$V(x) = \frac{1}{2}m\omega^2 x^2$.

#### 5.2.1 Algebraic Method: Ladder Operators

Define the **ladder operators** (creation and annihilation operators):

$$\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i\hat{p}}{m\omega}\right), \quad \hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i\hat{p}}{m\omega}\right)$$

**Commutation relation.** Using $[\hat{x}, \hat{p}] = i\hbar$:

$$[\hat{a}, \hat{a}^\dagger] = \frac{m\omega}{2\hbar}\!\left[\hat{x} + \frac{i\hat{p}}{m\omega},\, \hat{x} - \frac{i\hat{p}}{m\omega}\right] = \frac{1}{2\hbar}(-i)(i\hbar) + \frac{1}{2\hbar}(i)(-i\hbar) = 1$$

**Inversion.** From the definitions:

$$\hat{x} = \sqrt{\frac{\hbar}{2m\omega}}(\hat{a} + \hat{a}^\dagger), \quad \hat{p} = -i\sqrt{\frac{m\omega\hbar}{2}}(\hat{a} - \hat{a}^\dagger)$$

**Hamiltonian in terms of ladder operators.** Substituting into $\hat{H} = \hat{p}^2/(2m) + m\omega^2\hat{x}^2/2$:

$$\hat{H} = \hbar\omega\!\left(\hat{a}^\dagger\hat{a} + \frac{1}{2}\right)$$

where we used $\hat{a}\hat{a}^\dagger = [\hat{a}, \hat{a}^\dagger] + \hat{a}^\dagger\hat{a} = 1 + \hat{a}^\dagger\hat{a}$.

**Number operator.** $\hat{N} = \hat{a}^\dagger\hat{a}$, so $\hat{H} = \hbar\omega(\hat{N} + 1/2)$.

*Proof that $\hat{a}$ and $\hat{a}^\dagger$ lower and raise the energy.* Compute $[\hat{H}, \hat{a}]$:

$$[\hat{H}, \hat{a}] = \hbar\omega[\hat{a}^\dagger\hat{a}, \hat{a}] = \hbar\omega(\hat{a}^\dagger[\hat{a}, \hat{a}] + [\hat{a}^\dagger, \hat{a}]\hat{a}) = -\hbar\omega\,\hat{a}$$

So $\hat{H}\hat{a}|n\rangle = (E_n - \hbar\omega)\hat{a}|n\rangle$: $\hat{a}$ lowers energy by $\hbar\omega$.
Similarly, $[\hat{H}, \hat{a}^\dagger] = +\hbar\omega\,\hat{a}^\dagger$.

Let $|n\rangle$ be an eigenstate with $\hat{H}|n\rangle = E_n|n\rangle$. Then:

$$\hat{a}|n\rangle = c_n|n-1\rangle, \quad \hat{a}^\dagger|n\rangle = c_{n+1}|n+1\rangle$$

The constants follow from normalisation. Since $\hat{a}^\dagger\hat{a}|n\rangle = n|n\rangle$:

$$\|c_n|n-1\rangle\|^2 = \langle n|\hat{a}^\dagger\hat{a}|n\rangle = n$$

Therefore:

$$\hat{a}|n\rangle = \sqrt{n}\,|n-1\rangle, \quad \hat{a}^\dagger|n\rangle = \sqrt{n+1}\,|n+1\rangle$$

**Ground state.** The lowering process must terminate: $\hat{a}|0\rangle = 0$. This gives the
differential equation:

$$\left(x + \frac{\hbar}{m\omega}\frac{d}{dx}\right)\phi_0(x) = 0 \implies \phi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\exp\!\left(-\frac{m\omega x^2}{2\hbar}\right)$$

**Energy spectrum.** $E_n = \hbar\omega(n + 1/2)$ for $n = 0, 1, 2, \ldots$ The zero-point energy
$E_0 = \hbar\omega/2 \gt 0$ is a direct consequence of $[\hat{x}, \hat{p}] = i\hbar$.

#### 5.2.2 Analytic Solution

The eigenfunctions involve Hermite polynomials $H_n$:

$$\phi_n(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} \frac{1}{\sqrt{2^n n!}} H_n\!\left(\sqrt{\frac{m\omega}{\hbar}}\,x\right) e^{-m\omega x^2/(2\hbar)}$$

The first few Hermite polynomials are $H_0(\xi) = 1$, $H_1(\xi) = 2\xi$, $H_2(\xi) = 4\xi^2 - 2$.

**Example 5.1.** Using the ladder operators, find $\phi_1(x)$ from $\phi_0(x)$.

<details>
<summary>Solution</summary>

$$\phi_1(x) \propto \hat{a}^\dagger\phi_0(x) = \sqrt{\frac{m\omega}{2\hbar}}\left(x - \frac{\hbar}{m\omega}\frac{d}{dx}\right)\phi_0(x)$$

$$= \sqrt{\frac{m\omega}{2\hbar}}\!\left(x + \frac{\hbar}{m\omega}\cdot\frac{m\omega x}{\hbar}\right)\phi_0(x) = \sqrt{\frac{m\omega}{2\hbar}}\cdot 2x\,\phi_0(x)$$

Normalising gives $\phi_1(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\sqrt{\frac{2m\omega}{\hbar}}\,x\,e^{-m\omega x^2/(2\hbar)}$.

</details>

### 5.3 The Free Particle

$V(x) = 0$ everywhere. The Schrodinger equation:

$$-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} = E\phi$$

Solutions: $\phi_k(x) = \frac{1}{\sqrt{2\pi}} e^{ikx}$ with $E = \frac{\hbar^2 k^2}{2m}$.

The energy spectrum is **continuous** (all $E \geq 0$). The eigenfunctions are not normalisable (plane
waves); physical states are **wave packets** constructed by superposition.

### 5.3.1 Parity

The **parity operator** $\hat{\Pi}$ reflects the coordinate: $\hat{\Pi}\psi(x) = \psi(-x)$.

**Properties:**
- $\hat{\Pi}^2 = \hat{I}$, so eigenvalues are $\pm 1$.
- Even functions ($\psi(-x) = \psi(x)$) have parity $+1$.
- Odd functions ($\psi(-x) = -\psi(x)$) have parity $-1$.
- If $V(x) = V(-x)$ (symmetric potential), then $[\hat{H}, \hat{\Pi}] = 0$, so energy eigenstates
  can be chosen to have definite parity.

**Theorem 5.1.** For a symmetric potential $V(x) = V(-x)$, the energy eigenstates are either even
or odd.

*Proof.* Since $[\hat{H}, \hat{\Pi}] = 0$, there exists a simultaneous eigenbasis. Let
$\hat{H}\phi = E\phi$ and $\hat{\Pi}\phi = \pi\phi$ where $\pi = \pm 1$. Then $\phi(-x) = \pi\phi(x)$,
so $\phi$ is either even ($\pi = +1$) or odd ($\pi = -1$). $\blacksquare$

This theorem explains why the infinite square well, harmonic oscillator, and finite square well
eigenstates all have definite parity: their potentials are all symmetric about the origin.

### 5.3.2 The Virial Theorem

**Theorem 5.2 (Virial Theorem).** For a stationary state of a Hamiltonian
$\hat{H} = \hat{p}^2/(2m) + V(\hat{x})$:

$$2\langle T \rangle = \langle x\,V'(x) \rangle$$

where $T$ is the kinetic energy.

*Proof.* Using Ehrenfest's theorem for the operator $\hat{G} = \hat{x}\hat{p}$:

$$\frac{d}{dt}\langle\hat{x}\hat{p}\rangle = \frac{i}{\hbar}\langle[\hat{H}, \hat{x}\hat{p}]\rangle = 0$$

for a stationary state. Computing the commutator:

$$[\hat{H}, \hat{x}\hat{p}] = \left[\frac{\hat{p}^2}{2m} + V, \hat{x}\hat{p}\right] = \frac{1}{2m}[\hat{p}^2, \hat{x}]\hat{p} + [\hat{x}\hat{p}, V] + \hat{x}[V, \hat{p}]$$

$$= \frac{-i\hbar}{m}\hat{p}\hat{p} + \hat{x}[V, \hat{p}] + \hat{x}[V, \hat{p}] = \frac{-i\hbar\hat{p}^2}{m} + 2i\hbar\hat{x}\,V'(x)$$

Setting $d\langle\hat{x}\hat{p}\rangle/dt = 0$ and dividing by $i\hbar$:

$$-\frac{\langle\hat{p}^2\rangle}{m} + 2\langle\hat{x}\,V'(\hat{x})\rangle = 0$$

$$-2\langle T \rangle + \langle x\,V'(x) \rangle = 0 \implies 2\langle T \rangle = \langle x\,V'(x) \rangle \qquad \blacksquare$$

**Applications.** For the harmonic oscillator ($V \propto x^2$): $2\langle T \rangle = 2\langle V \rangle$,
so $\langle T \rangle = \langle V \rangle = E/2$. For the hydrogen atom ($V \propto -1/r$):
$2\langle T \rangle = -\langle V \rangle$, so $\langle T \rangle = -E$ and $\langle V \rangle = 2E$.

### 5.4 The Finite Square Well

Consider $V(x) = -V_0$ for $|x| \lt a$ and $V(x) = 0$ for $|x| \gt a$, where $V_0 \gt 0$.

#### 5.4.1 Bound States ($E \lt 0$)

Define $k = \sqrt{2m(E + V_0)}/\hbar$ (inside) and $\kappa = \sqrt{-2mE}/\hbar$ (outside).
Note that $k^2 + \kappa^2 = 2mV_0/\hbar^2$.

**Even parity solutions.** Inside: $\phi(x) = A\cos(kx)$. Outside: $\phi(x) = Be^{-\kappa|x|}$.

Matching $\phi$ and $\phi'$ at $x = a$ and dividing the two conditions:

$$k\tan(ka) = \kappa$$

**Odd parity solutions.** Inside: $\phi(x) = A\sin(kx)$. Outside: $\phi(x) = Be^{-\kappa|x|}$ (with sign
for $x \lt 0$). Matching gives:

$$-k\cot(ka) = \kappa$$

These are transcendental equations solved graphically. Define $z = ka$ and $z_0 = a\sqrt{2mV_0/\hbar^2}$.

The even condition becomes $\tan z = \sqrt{z_0^2/z^2 - 1}$ and the odd condition becomes
$-\cot z = \sqrt{z_0^2/z^2 - 1}$. The number of bound states is $N = \lfloor 2z_0/\pi \rfloor + 1$.
There is always at least one bound state (the even ground state).

#### 5.4.2 Scattering States ($E \gt 0$)

For $E \gt 0$, the particle has enough energy to escape. Define $k_1 = \sqrt{2mE}/\hbar$ (outside)
and $k_2 = \sqrt{2m(E + V_0)}/\hbar$ (inside). The solutions are oscillatory everywhere. The
transmission coefficient is:

$$T = \frac{1}{1 + \dfrac{V_0^2}{4E(E + V_0)}\sin^2(2k_2 a)}$$

**Resonances** occur when $2k_2 a = n\pi$ (integer multiples of $\pi$), giving $T = 1$: the well
becomes perfectly transparent.

**Example 5.3.** A finite square well has $V_0 = 5\,\mathrm{eV}$ and $2a = 1\,\mathrm{nm}$. Estimate the
number of bound states for an electron.

<details>
<summary>Solution</summary>

Compute $z_0 = a\sqrt{2m_e V_0}/\hbar$:

$$z_0 = (0.5 \times 10^{-9})\frac{\sqrt{2(9.109 \times 10^{-31})(5)(1.602 \times 10^{-19})}}{1.055 \times 10^{-34}}$$

$$= (5 \times 10^{-10})\frac{\sqrt{1.460 \times 10^{-48}}}{1.055 \times 10^{-34}} = (5 \times 10^{-10})\frac{3.821 \times 10^{-24}}{1.055 \times 10^{-34}}$$

$$= (5 \times 10^{-10})(3.622 \times 10^{10}) = 18.11$$

The number of bound states is $N = \lfloor 2z_0/\pi \rfloor + 1 = \lfloor 36.22/\pi \rfloor + 1 = \lfloor 11.53 \rfloor + 1 = 12$.

(Actually, the formula is $N = \lfloor z_0/(\pi/2) \rfloor + 1$ only when counting the number of
intersections. With $z_0/(\pi/2) = 18.11/1.571 = 11.53$, there are 11 full intersections plus one
partial, giving about 11 or 12 bound states.)

</details>

### 5.5 The Delta Function Potential

Consider $V(x) = -\alpha\delta(x)$ where $\alpha \gt 0$.

#### 5.5.1 Bound State ($E \lt 0$)

The wave function is $\psi(x) = Ae^{\kappa x}$ for $x \lt 0$ and $\psi(x) = Be^{-\kappa x}$ for $x \gt 0$,
where $\kappa = \sqrt{-2mE}/\hbar$.

**Matching conditions.**

1. **Continuity:** $A = B$ at $x = 0$.

2. **Discontinuity in derivative** (integrating the Schrodinger equation across $x = 0$):

$$\psi'(0^+) - \psi'(0^-) = -\frac{2m\alpha}{\hbar^2}\psi(0)$$

This gives $-\kappa B - \kappa A = -2m\alpha A/\hbar^2$, and since $A = B$:

$$\kappa = \frac{m\alpha}{\hbar^2}$$

The bound state energy is:

$$E = -\frac{\hbar^2\kappa^2}{2m} = -\frac{m\alpha^2}{2\hbar^2}$$

The normalised wave function is $\psi(x) = \sqrt{\kappa}\,e^{-\kappa|x|}$. There is exactly one bound state.

#### 5.5.2 Scattering States ($E \gt 0$)

For a particle of energy $E = \hbar^2 k^2/(2m)$ incident from the left:

$$\psi(x) = \begin{cases} e^{ikx} + Re^{-ikx} & x \lt 0 \\ Te^{ikx} & x \gt 0 \end{cases}$$

Applying the matching conditions at $x = 0$:

$$1 + R = T, \quad ik(T - 1 - R) = -\frac{2m\alpha}{\hbar^2}T$$

Solving:

$$T = \frac{ik}{ik - m\alpha/\hbar^2} = \frac{1}{1 + im\alpha/(\hbar^2 k)}$$

$$R = \frac{-m\alpha/\hbar^2}{ik - m\alpha/\hbar^2} = \frac{-im\alpha/\hbar^2}{ik + m\alpha/\hbar^2}$$

The transmission and reflection coefficients:

$$|T|^2 = \frac{1}{1 + (m\alpha)^2/(\hbar^4 k^2)} = \frac{1}{1 + m\alpha^2/(2\hbar^2 E)}, \quad |R|^2 = 1 - |T|^2$$

Note that even for very high energies ($E \to \infty$), $|R|^2 \to (m\alpha)^2/(\hbar^4 k^2) \neq 0$:
the delta function always reflects some probability, unlike a smooth potential which becomes
transparent at high energies. This is because the delta function has an infinitely sharp feature
at $x = 0$ that scatters waves of all wavelengths.

### 5.6 Quantum Tunnelling

Consider a rectangular barrier $V(x) = V_0$ for $0 \lt x \lt a$ and $V(x) = 0$ otherwise, with
$E \lt V_0$.

Inside the barrier, the Schrodinger equation gives exponentially decaying and growing solutions:

$$\psi(x) = Ce^{\kappa x} + De^{-\kappa x}, \quad \kappa = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}$$

For a **thick barrier** ($\kappa a \gg 1$), the growing solution $Ce^{\kappa x}$ is negligible at the
far edge, and the transmission coefficient simplifies to:

$$T \approx \frac{16E(V_0 - E)}{V_0^2}\,e^{-2\kappa a}$$

The exponential factor $e^{-2\kappa a}$ is the hallmark of quantum tunnelling: the probability of
penetration decreases exponentially with barrier width and height.

:::caution Common Pitfall
Tunnelling does not violate energy conservation. The particle does not "have" energy $V_0$ inside
the barrier; rather, the wave function extends into the classically forbidden region with
exponentially decreasing amplitude. The particle's energy is $E \lt V_0$ throughout.
:::

**Example 5.2.** An electron with $E = 5$ eV approaches a barrier of height $V_0 = 10$ eV and
width $a = 0.5$ nm. Calculate $T$.

<details>
<summary>Solution</summary>

$$\kappa = \sqrt{\frac{2(9.109 \times 10^{-31})(10 - 5)(1.602 \times 10^{-19})}{(1.055 \times 10^{-34})^2}} = \sqrt{1.302 \times 10^{20}} = 1.141 \times 10^{10}\;\mathrm{m^{-1}}$$

$$2\kappa a = 2(1.141 \times 10^{10})(5 \times 10^{-10}) = 11.41$$

$$T \approx \frac{16(5)(5)}{100}\,e^{-11.41} = 4.0 \times e^{-11.41} = 4.0 \times 1.097 \times 10^{-5} = 4.4 \times 10^{-5}$$

The electron has roughly a $0.004\%$ chance of tunnelling through this barrier.

</details>

**Application: alpha decay.** Alpha decay can be understood as quantum tunnelling through the Coulomb
barrier. The Geiger-Nuttall law, which relates the decay constant to the alpha particle energy,
follows directly from the exponential dependence of $T$ on the barrier width.

**Application: scanning tunnelling microscope (STM).** In an STM, a small voltage is applied between
a sharp tip and a conducting surface. Electrons tunnel across the gap, producing a current that
depends exponentially on the tip-surface distance: $I \propto e^{-2\kappa d}$. This allows atomic-
resolution imaging of surfaces, as a change in distance of $0.1$ nm changes the current by a factor
of about 10.

## 6. Angular Momentum and the Hydrogen Atom

### 6.1 Angular Momentum Operators

$$\hat{L}_x = -i\hbar\left(y\frac{\partial}{\partial z} - z\frac{\partial}{\partial y}\right), \quad \hat{L}_y = -i\hbar\left(z\frac{\partial}{\partial x} - x\frac{\partial}{\partial z}\right), \quad \hat{L}_z = -i\hbar\left(x\frac{\partial}{\partial y} - y\frac{\partial}{\partial x}\right)$$

**Commutation relations:**

$$[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z, \quad [\hat{L}_y, \hat{L}_z] = i\hbar\hat{L}_x, \quad [\hat{L}_z, \hat{L}_x] = i\hbar\hat{L}_y$$

$$[\hat{L}^2, \hat{L}_i] = 0 \quad \mathrm{for\ all\ } i$$

**Simultaneous eigenstates:** $|l, m\rangle$ with

$$\hat{L}^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle, \quad \hat{L}_z|l,m\rangle = \hbar m|l,m\rangle$$

where $l = 0, 1, 2, \ldots$ and $m = -l, -l+1, \ldots, l-1, l$.

### 6.2 Raising and Lowering Operators

Define the **ladder operators**:

$$\hat{L}_{\pm} = \hat{L}_x \pm i\hat{L}_y$$

**Key commutation relations:**

$$[\hat{L}_z, \hat{L}_{\pm}] = \pm\hbar\hat{L}_{\pm}, \quad [\hat{L}^2, \hat{L}_{\pm}] = 0$$

*Proof.* $[\hat{L}_z, \hat{L}_+] = [\hat{L}_z, \hat{L}_x] + i[\hat{L}_z, \hat{L}_y] = i\hbar\hat{L}_y + i(i\hbar\hat{L}_x) = \hbar(\hat{L}_y + i\hat{L}_x)\cdot(-1)$

Wait, let us redo this carefully:

$$[\hat{L}_z, \hat{L}_+] = [\hat{L}_z, \hat{L}_x + i\hat{L}_y] = [\hat{L}_z, \hat{L}_x] + i[\hat{L}_z, \hat{L}_y] = i\hbar\hat{L}_y + i(-i\hbar\hat{L}_x) = i\hbar\hat{L}_y + \hbar\hat{L}_x = \hbar(\hat{L}_x + i\hat{L}_y) = \hbar\hat{L}_+$$

Similarly, $[\hat{L}_z, \hat{L}_-] = -\hbar\hat{L}_-$. And:

$$[\hat{L}^2, \hat{L}_+] = [\hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2, \hat{L}_+] = 0$$

since $\hat{L}^2$ commutes with each component. $\blacksquare$

**Action on eigenstates.** Since $[\hat{L}_z, \hat{L}_+] = \hbar\hat{L}_+$:

$$\hat{L}_z(\hat{L}_+|l,m\rangle) = (\hat{L}_+\hat{L}_z + \hbar\hat{L}_+)|l,m\rangle = \hbar(m+1)(\hat{L}_+|l,m\rangle)$$

So $\hat{L}_+|l,m\rangle$ is an eigenstate of $\hat{L}_z$ with eigenvalue $\hbar(m+1)$: it raises $m$ by 1.
Similarly, $\hat{L}_-$ lowers $m$ by 1. Both preserve the $l$ value since $[\hat{L}^2, \hat{L}_{\pm}] = 0$.

**Normalisation.** Write $\hat{L}_+|l,m\rangle = C_+(l,m)|l,m+1\rangle$. Then:

$$|C_+(l,m)|^2 = \langle l,m|\hat{L}_-\hat{L}_+|l,m\rangle$$

Using $\hat{L}_-\hat{L}_+ = \hat{L}^2 - \hat{L}_z^2 - \hbar\hat{L}_z$:

$$|C_+(l,m)|^2 = \hbar^2 l(l+1) - \hbar^2 m^2 - \hbar^2 m = \hbar^2[l(l+1) - m(m+1)]$$

Therefore:

$$\hat{L}_+|l,m\rangle = \hbar\sqrt{l(l+1) - m(m+1)}\,|l,m+1\rangle$$

$$\hat{L}_-|l,m\rangle = \hbar\sqrt{l(l+1) - m(m-1)}\,|l,m-1\rangle$$

### 6.3 Eigenvalue Spectrum of Angular Momentum

**Theorem 6.1.** The quantum numbers $l$ and $m$ satisfy:

- $l = 0, 1/2, 1, 3/2, 2, \ldots$ (integer or half-integer)
- For a given $l$: $m = -l, -l+1, \ldots, l-1, l$ (there are $2l+1$ values)
- For **orbital** angular momentum, $l$ is restricted to non-negative integers.

*Proof.* Starting from a state $|l,m\rangle$, repeatedly applying $\hat{L}_+$ raises $m$ by 1 each time.
The norm of the resulting state is:

$$\|\hat{L}_+|l,m\rangle\|^2 = \hbar^2[l(l+1) - m(m+1)]$$

This must remain non-negative, so $m(m+1) \leq l(l+1)$, giving $m \leq l$. The raising process must
terminate at some maximum $m_{\max}$ where $\hat{L}_+|l, m_{\max}\rangle = 0$:

$$l(l+1) - m_{\max}(m_{\max} + 1) = 0$$

Similarly, the lowering process terminates at $m_{\min}$ where $\hat{L}_-|l, m_{\min}\rangle = 0$:

$$l(l+1) - m_{\min}(m_{\min} - 1) = 0$$

Subtracting: $m_{\max}(m_{\max}+1) - m_{\min}(m_{\min}-1) = 0$. Since we reach $m_{\max}$ from $m_{\min}$ in
$N$ steps: $m_{\max} = m_{\min} + N$. Solving gives $m_{\max} = l$ and $m_{\min} = -l$, so
$N = 2l$, meaning $2l$ must be a non-negative integer. Therefore $l = 0, 1/2, 1, 3/2, \ldots$ and
$m$ takes $2l+1$ values from $-l$ to $l$. $\blacksquare$

For orbital angular momentum (defined as $\hat{\mathbf{L}} = \hat{\mathbf{r}} \times \hat{\mathbf{p}}$),
the wave function must be single-valued under a full rotation $\phi \to \phi + 2\pi$. This requires
$e^{im\phi} = e^{im(\phi+2\pi)}$, so $m$ must be an integer, which restricts $l$ to integers.

### 6.4 Spherical Harmonics

The simultaneous eigenfunctions of $\hat{L}^2$ and $\hat{L}_z$ are the **spherical harmonics**
$Y_l^m(\theta, \phi)$:

$$Y_l^m(\theta, \phi) = (-1)^m\sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}\,P_l^m(\cos\theta)\,e^{im\phi}$$

where $P_l^m$ are the associated Legendre functions.

**Properties:**
- Orthonormality: $\int Y_l^m{}^*\, Y_{l'}^{m'}\,d\Omega = \delta_{ll'}\delta_{mm'}$
- Completeness: $\sum_{l=0}^{\infty}\sum_{m=-l}^{l} Y_l^m(\theta,\phi)\,Y_l^m{}^*(\theta',\phi') = \delta(\cos\theta - \cos\theta')\delta(\phi - \phi')$
- Parity: $Y_l^m(\pi-\theta, \phi+\pi) = (-1)^l\,Y_l^m(\theta,\phi)$

**First few spherical harmonics:**

| $(l, m)$ | $Y_l^m(\theta,\phi)$ |
|---|---|
| $(0, 0)$ | $\dfrac{1}{\sqrt{4\pi}}$ |
| $(1, 0)$ | $\sqrt{\dfrac{3}{4\pi}}\cos\theta$ |
| $(1, \pm 1)$ | $\mp\sqrt{\dfrac{3}{8\pi}}\sin\theta\,e^{\pm i\phi}$ |
| $(2, 0)$ | $\sqrt{\dfrac{5}{16\pi}}(3\cos^2\theta - 1)$ |

### 6.5 The Hydrogen Atom

The Hamiltonian for hydrogen (electron of mass $m_e$ and charge $-e$, proton of charge $+e$):

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r}$$

#### 6.5.1 Separation of Variables

In spherical coordinates, the Laplacian separates, and we write $\psi(r,\theta,\phi) = R(r)\,Y_l^m(\theta,\phi)$.
The radial equation is:

$$-\frac{\hbar^2}{2m_e}\frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{dR}{dr}\right) + \left[-\frac{e^2}{4\pi\varepsilon_0 r} + \frac{\hbar^2 l(l+1)}{2m_e r^2}\right]R = ER$$

The term $\hbar^2 l(l+1)/(2m_e r^2$ acts as an effective **centrifugal barrier**.

#### 6.5.2 Solving the Radial Equation

Substitute $u(r) = rR(r)$ and define the Bohr radius $a_0 = 4\pi\varepsilon_0\hbar^2/(m_e e^2)$ and the
Rydberg energy $E_R = e^2/(8\pi\varepsilon_0 a_0) = m_e e^4/(8\varepsilon_0^2 h^2)$. With the substitution
$\rho = 2r/(na_0)$, the radial equation becomes:

$$\frac{d^2u}{d\rho^2} = \left[\frac{l(l+1)}{\rho^2} - \frac{1}{\rho} + \frac{n}{4}\left(\frac{1}{n^2} - \frac{E}{E_R}\right)\right]u$$

For the solution to be well-behaved at both $\rho = 0$ and $\rho \to \infty$, we require:

$$E = -\frac{E_R}{n^2} = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\cdot\frac{1}{n^2}$$

with $n = 1, 2, 3, \ldots$ and $l = 0, 1, \ldots, n-1$.

The radial wave functions are:

$$R_{nl}(r) = \sqrt{{\left(\frac{2}{na_0}\right)}^3\frac{(n-l-1)!}{2n[(n+l)!]^3}}\,e^{-r/(na_0)}\!\left(\frac{2r}{na_0}\right)^l L_{n-l-1}^{2l+1}\!\left(\frac{2r}{na_0}\right)$$

where $L_q^p$ are the associated Laguerre polynomials.

**Energy eigenvalues:**

$$E_n = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2 \hbar^2} \cdot \frac{1}{n^2} = -\frac{13.6\,\mathrm{eV}}{n^2}, \quad n = 1, 2, 3, \ldots$$

**Degeneracy:** Each energy level $E_n$ has degeneracy $n^2$ (ignoring spin). The quantum numbers are:
- Principal: $n = 1, 2, 3, \ldots$
- Orbital angular momentum: $l = 0, 1, \ldots, n - 1$
- Magnetic: $m_l = -l, \ldots, l$

The ground state wave function ($n = 1, l = 0, m_l = 0$):

$$\psi_{100}(r, \theta, \phi) = \frac{1}{\sqrt{\pi a_0^3}} e^{-r/a_0}$$

where $a_0 = \frac{4\pi\varepsilon_0 \hbar^2}{m_e e^2} \approx 0.529\,\mathrm{\AA}$ is the Bohr radius.

#### 6.5.3 Expectation Values for the Ground State

**Example 6.1.** Calculate $\langle r \rangle$, $\langle r^2 \rangle$, and $\langle 1/r \rangle$ for the
hydrogen ground state.

<details>
<summary>Solution</summary>

For $\psi_{100} = (\pi a_0^3)^{-1/2}e^{-r/a_0}$, all integrals involve radial integrals with $r^2 dr$:

$$\langle r \rangle = \frac{4\pi}{\pi a_0^3}\int_0^{\infty} r^3 e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{6}{(2/a_0)^4} = \frac{4 \cdot 6 \cdot a_0^4}{16} = \frac{3}{2}a_0$$

$$\langle r^2 \rangle = \frac{4}{a_0^3}\int_0^{\infty} r^4 e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{24}{(2/a_0)^5} = \frac{4 \cdot 24 \cdot a_0^5}{32} = 3a_0^2$$

$$\left\langle\frac{1}{r}\right\rangle = \frac{4}{a_0^3}\int_0^{\infty} r\,e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{1}{(2/a_0)^2} = \frac{1}{a_0}$$

Note that $\langle 1/r \rangle = 1/a_0 = -2E_1/e^2$ (by the virial theorem). The standard deviation is
$\Delta r = \sqrt{3a_0^2 - (3a_0/2)^2} = \sqrt{3/4}\,a_0$.

</details>

#### 6.5.4 Selection Rules

Electric dipole transitions between hydrogen states are governed by selection rules derived from the
Wigner-Eckart theorem. For a transition $|n,l,m\rangle \to |n',l',m'\rangle$ induced by the electric
dipole operator $\hat{\mathbf{r}}$:

$$\Delta l = l' - l = \pm 1, \quad \Delta m = m' - m = 0, \pm 1$$

$\Delta n$ is unrestricted (energy conservation determines which transitions are allowed).

*Proof sketch.* The matrix element $\langle n'l'm'|\hat{z}|nlm\rangle$ involves the integral
$\int Y_{l'}^{m'*}(\theta,\phi)\cos\theta\,Y_l^m(\theta,\phi)\,d\Omega$. Using the addition theorem
for spherical harmonics, $\cos\theta = \sqrt{4\pi/3}\,Y_1^0$, the integral becomes a product of
Clebsch-Gordan coefficients that vanishes unless $l' = l \pm 1$ and $m' = m$. $\blacksquare$

### 6.6 Orbital Shapes and Quantum Numbers

The three quantum numbers characterise hydrogen atom eigenstates:

- **$n$ (principal):** Determines the energy and overall size. The mean radius scales as $\langle r \rangle \propto n^2 a_0$.
- **$l$ (orbital angular momentum):** Determines the shape. The spectroscopic notation is
  $l = 0$ (s), $l = 1$ (p), $l = 2$ (d), $l = 3$ (f), etc.
- **$m_l$ (magnetic):** Determines the spatial orientation. The angular dependence is
  $Y_l^{m_l}(\theta, \phi)$.

**Radial probability distribution.** The probability of finding the electron between $r$ and $r+dr$ is
$P(r)\,dr = |R_{nl}(r)|^2 r^2\,dr$. For the $1s$ state, the maximum is at $r = a_0$ (the Bohr radius).
For $2s$, there is a node at $r = 2a_0$. For $2p$, the distribution peaks closer to the nucleus.

**Angular distributions.** The $s$ orbitals ($l = 0$) are spherically symmetric. The $p$ orbitals
($l = 1$) have dumbbell shapes aligned along the $x$-, $y$-, or $z$-axis depending on $m_l$. The $d$
orbitals ($l = 2$) have more complex cloverleaf patterns.

**Radial nodes.** The radial wave function $R_{nl}(r)$ has $n - l - 1$ nodes (zeros excluding $r = 0$
and $r = \infty$). The total number of nodes in the full wave function is $n - 1$, consistent with
the general property that the $n$-th energy eigenstate has $n - 1$ nodes.

**Fine structure.** The non-relativistic Schrodinger equation gives energy levels depending only on $n$.
Relativistic corrections (spin-orbit coupling, Darwin term, kinetic energy correction) split these
into fine structure multiplets, removing the $l$-degeneracy. The fine structure shift is of order
$\alpha^2 E_n$ where $\alpha \approx 1/137$ is the fine structure constant.

## 7. Spin

### 7.1 The Spin Operators

Spin is an **intrinsic** form of angular momentum with no classical analogue. For spin-$1/2$ particles
(e.g., electrons):

$$\hat{S}_x = \frac{\hbar}{2}\sigma_x, \quad \hat{S}_y = \frac{\hbar}{2}\sigma_y, \quad \hat{S}_z = \frac{\hbar}{2}\sigma_z$$

where $\sigma_x, \sigma_y, \sigma_z$ are the **Pauli matrices**:

$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

### 7.2 Properties of Pauli Matrices

$$\sigma_i^2 = I, \quad \sigma_i \sigma_j = i\epsilon_{ijk}\sigma_k \quad (i \neq j)$$

$$[\sigma_i, \sigma_j] = 2i\epsilon_{ijk}\sigma_k, \quad \{\sigma_i, \sigma_j\} = 2\delta_{ij}I$$

Spin states: $|\uparrow\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (spin up, $m_s = +1/2$) and
$|\downarrow\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (spin down, $m_s = -1/2$).

### 7.3 Derivation of the Pauli Matrices

The Pauli matrices are uniquely determined (up to unitary equivalence) by the angular momentum algebra
for $j = 1/2$.

**Requirements.** We seek $2 \times 2$ matrices $\sigma_x, \sigma_y, \sigma_z$ such that:
1. $\sigma_i^2 = I$ (eigenvalues are $\pm 1$, corresponding to $S_z = \pm\hbar/2$)
2. $\sigma_i^\dagger = \sigma_i$ (Hermitian)
3. $\mathrm{Tr}(\sigma_i) = 0$ (traceless, since eigenvalues sum to zero)
4. $[\sigma_x, \sigma_y] = 2i\sigma_z$ (and cyclic permutations)

**Step 1: Fix $\sigma_z$.** A traceless Hermitian matrix with eigenvalues $\pm 1$ is:

$$\sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

(up to an overall unitary transformation, which corresponds to choosing the quantisation axis).

**Step 2: Determine $\sigma_x$.** A general traceless Hermitian matrix is:

$$\sigma_x = \begin{pmatrix} a & b \\ b^* & -a \end{pmatrix}$$

where $a \in \mathbb{R}$ and $b \in \mathbb{C}$. From $\sigma_x^2 = I$: $a^2 + |b|^2 = 1$ and $2ab = 0$.
Since $|b| \neq 0$ (otherwise $\sigma_x$ is diagonal and commutes with $\sigma_z$, violating
$[\sigma_x, \sigma_z] \neq 0$), we have $a = 0$ and $|b| = 1$. Choosing $b = 1$ (by convention):

$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

**Step 3: Determine $\sigma_y$.** From $[\sigma_x, \sigma_y] = 2i\sigma_z$:

$$\sigma_x\sigma_y - \sigma_y\sigma_x = 2i\sigma_z$$

Writing $\sigma_y = \begin{pmatrix} c & d \\ d^* & -c \end{pmatrix}$ and imposing $\sigma_y^2 = I$, $\sigma_y^\dagger = \sigma_y$,
and the commutation relation, we find $c = 0$, $|d| = 1$, and the commutator gives $d - d^* = 2i$,
so $d = i$:

$$\sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$

$\blacksquare$

### 7.4 Spin-1/2 in a Magnetic Field

A particle with magnetic moment $\boldsymbol{\mu} = \gamma\mathbf{S}$ (where $\gamma$ is the
gyromagnetic ratio) in a magnetic field $\mathbf{B} = B_0\hat{z}$ has Hamiltonian:

$$\hat{H} = -\boldsymbol{\mu}\cdot\mathbf{B} = -\gamma B_0\hat{S}_z = -\frac{\hbar\gamma B_0}{2}\sigma_z$$

The eigenstates are $|\uparrow\rangle$ and $|\downarrow\rangle$ with energies $E_\uparrow = -\hbar\gamma B_0/2$
and $E_\downarrow = +\hbar\gamma B_0/2$. The energy splitting is $\Delta E = \hbar\gamma B_0$.

**Time evolution.** For an arbitrary initial state:

$$|\psi(0)\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle$$

the state at time $t$ is:

$$|\psi(t)\rangle = \alpha e^{i\gamma B_0 t/2}|\uparrow\rangle + \beta e^{-i\gamma B_0 t/2}|\downarrow\rangle$$

**Larmor precession.** The expectation values precess around the $z$-axis:

$$\langle S_x \rangle(t) = \frac{\hbar}{2}(\alpha^*\beta\,e^{-i\gamma B_0 t} + \alpha\beta^*\,e^{i\gamma B_0 t})$$

$$\langle S_y \rangle(t) = \frac{\hbar}{2i}(\alpha^*\beta\,e^{-i\gamma B_0 t} - \alpha\beta^*\,e^{i\gamma B_0 t})$$

$$\langle S_z \rangle(t) = \frac{\hbar}{2}(|\alpha|^2 - |\beta|^2) = \mathrm{const.}$$

The spin precesses at the **Larmor frequency** $\omega_L = \gamma B_0$.

For an electron, $\gamma = -e/(m_e)$ (negative charge), giving $\omega_L = eB_0/m_e$.

**The Larmor frequency.** For a typical laboratory field $B_0 = 1$ T:

$$\omega_L = \frac{(1.602 \times 10^{-19})(1)}{9.109 \times 10^{-31}} = 1.76 \times 10^{11}\;\mathrm{rad/s}$$

corresponding to a frequency $\nu_L = \omega_L/(2\pi) = 28$ GHz (microwave range). This is the basis
of Electron Spin Resonance (ESR) and Nuclear Magnetic Resonance (NMR) spectroscopy, where transitions
between spin states are driven by oscillating magnetic fields at the Larmor frequency.

**Example 7.1.** An electron starts in the state $|\psi(0)\rangle = |\uparrow\rangle$. A magnetic field
$\mathbf{B} = B_0\hat{x}$ is applied. Find $|\psi(t)\rangle$.

<details>
<summary>Solution</summary>

With $\mathbf{B} = B_0\hat{x}$, the Hamiltonian is $\hat{H} = -\gamma B_0\hat{S}_x = \omega_L\hat{S}_x$
where $\omega_L = \gamma B_0$. The eigenstates of $\hat{S}_x$ are:

$$|+\rangle_x = \frac{1}{\sqrt{2}}(|\uparrow\rangle + |\downarrow\rangle), \quad |-\rangle_x = \frac{1}{\sqrt{2}}(|\uparrow\rangle - |\downarrow\rangle)$$

with eigenvalues $\pm\hbar\omega_L/2$.

Expanding $|\uparrow\rangle = (|+\rangle_x + |-\rangle_x)/\sqrt{2}$ and evolving:

$$|\psi(t)\rangle = \frac{1}{\sqrt{2}}\!\left(e^{-i\omega_L t/2}|+\rangle_x + e^{i\omega_L t/2}|-\rangle_x\right)$$

$$= \cos\!\left(\frac{\omega_L t}{2}\right)|\uparrow\rangle - i\sin\!\left(\frac{\omega_L t}{2}\right)|\downarrow\rangle$$

The probability of measuring spin-up along $z$ oscillates as $\cos^2(\omega_L t/2)$, with period
$T = 2\pi/\omega_L$.

</details>

### 7.5 Stern-Gerlach Experiment

A beam of silver atoms passes through an inhomogeneous magnetic field and splits into two beams,
confirming the quantisation of angular momentum (spin-1/2 for the outer electron).

**Detailed analysis.** The force on a magnetic moment in an inhomogeneous field is:

$$\mathbf{F} = \nabla(\boldsymbol{\mu}\cdot\mathbf{B})$$

For a field $\mathbf{B} = B(z)\hat{z}$ with $\partial B_z/\partial z \neq 0$, the $z$-component of force
is $F_z = \mu_z\,\partial B_z/\partial z$. Since $\mu_z = \gamma m_s\hbar$ and $m_s = \pm 1/2$:

$$F_z = \pm\frac{\gamma\hbar}{2}\frac{\partial B_z}{\partial z}$$

The beam splits into two, corresponding to $m_s = +1/2$ (deflected up) and $m_s = -1/2$ (deflected down).

**Sequential Stern-Gerlach measurements.** Consider three apparatuses in sequence:

1. First SG-Z: selects $|\uparrow\rangle$.
2. Second SG-X: splits into $|+\rangle_x$ and $|-\rangle_x$ with equal probability $1/2$.
3. Third SG-Z (on the $|-\rangle_x$ beam): again splits into $|\uparrow\rangle$ and $|\downarrow\rangle$
   with equal probability $1/2$.

This demonstrates that the intermediate $S_x$ measurement **erases** the information about the
original $S_z$ state. The probabilities reflect the non-commutativity $[\hat{S}_x, \hat{S}_z] = i\hbar\hat{S}_y$.

**Example 7.2.** A spin-1/2 particle passes through SG-Z (selecting $|\uparrow\rangle$), then through
SG-Z at angle $\theta$ from the $z$-axis. Find the probability of measuring $+1$ in the second
apparatus.

<details>
<summary>Solution</summary>

The eigenstate of $\hat{S}_n = \hat{S}_z\cos\theta + \hat{S}_x\sin\theta$ with eigenvalue $+\hbar/2$ is:

$$|+\rangle_n = \cos\frac{\theta}{2}|\uparrow\rangle + \sin\frac{\theta}{2}|\downarrow\rangle$$

The probability is:

$$P = |\langle+_n|\uparrow\rangle|^2 = \cos^2\frac{\theta}{2}$$

For $\theta = 90°$ (i.e., measuring $S_x$): $P = 1/2$.

</details>

### 7.6 Addition of Angular Momenta

Given two angular momenta $\hat{\mathbf{J}}_1$ and $\hat{\mathbf{J}}_2$ with quantum numbers
$j_1, m_1$ and $j_2, m_2$, define the total $\hat{\mathbf{J}} = \hat{\mathbf{J}}_1 + \hat{\mathbf{J}}_2$.

**Compatible observables:** $\hat{J}^2$, $\hat{J}_z$, $\hat{J}_1^2$, $\hat{J}_2^2$ all commute. We label
simultaneous eigenstates as $|j_1, j_2; j, m\rangle$.

**Clebsch-Gordan decomposition.** The total angular momentum quantum numbers range over:

$$j = |j_1 - j_2|, |j_1 - j_2| + 1, \ldots, j_1 + j_2$$

in integer steps. For each $j$, the magnetic quantum number $m$ ranges from $-j$ to $j$.

The transformation between the product basis and the total-$j$ basis is:

$$|j_1, j_2; j, m\rangle = \sum_{m_1, m_2} C(j_1\,m_1\,j_2\,m_2|j\,m)\,|j_1, m_1\rangle|j_2, m_2\rangle$$

where $C(j_1\,m_1\,j_2\,m_2|j\,m)$ are the **Clebsch-Gordan coefficients**.

**Two spin-1/2 particles.** The composite system has $j_1 = j_2 = 1/2$. The possible total spins are:

- **Triplet** ($j = 1$): three states with $m = 1, 0, -1$
  $$|1,1\rangle = |\uparrow\uparrow\rangle$$
  $$|1,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)$$
  $$|1,-1\rangle = |\downarrow\downarrow\rangle$$

- **Singlet** ($j = 0$): one state with $m = 0$
  $$|0,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)$$

The triplet states are symmetric under particle exchange; the singlet is antisymmetric.

**Total spin operator.** $\hat{S}^2 = \hat{S}_1^2 + \hat{S}_2^2 + 2\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2$, so:

$$\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = \frac{1}{2}(\hat{S}^2 - \hat{S}_1^2 - \hat{S}_2^2)$$

For the triplet: $\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = \hbar^2/4$. For the singlet:
$\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = -3\hbar^2/4$.

**Complete set of commuting observables (CSCO).** For a two-spin system, the set
$\\{\hat{S}^2, \hat{S}_z, \hat{S}_1^2, \hat{S}_2^2\\}$ forms a CSCO: their simultaneous eigenstates are
uniquely labelled by the quantum numbers $(s, m_s, s_1, s_2)$. An alternative CSCO is
$\\{\hat{S}_{1z}, \hat{S}_{2z}, \hat{S}_1^2, \hat{S}_2^2\\}$, which uses the product basis. The
Clebsch-Gordan coefficients are the transformation matrix between these two bases.

**Clebsch-Gordan table for $j_1 = j_2 = 1/2$:**

| $m_1$ | $m_2$ | $j=1,\,m$ | $j=0,\,m$ |
|---|---|---|---|
| $+1/2$ | $+1/2$ | $1$ | $0$ |
| $+1/2$ | $-1/2$ | $1/\sqrt{2}$ | $1/\sqrt{2}$ |
| $-1/2$ | $+1/2$ | $1/\sqrt{2}$ | $-1/\sqrt{2}$ |
| $-1/2$ | $-1/2$ | $1$ | $0$ |

**Example 7.3.** Two electrons are in the singlet state. If electron 1 is measured to have
$S_z = +\hbar/2$, what is the state of electron 2 immediately after? What is the probability of
measuring $S_x = +\hbar/2$ for electron 2?

<details>
<summary>Solution</summary>

The singlet state is $|0,0\rangle = (|\uparrow_1\downarrow_2\rangle - |\downarrow_1\uparrow_2\rangle)/\sqrt{2}$.

After measuring $S_1^z = +\hbar/2$, the state collapses to $|\uparrow_1\downarrow_2\rangle$.
Electron 2 is in $|\downarrow\rangle$.

The probability of measuring $S_2^x = +\hbar/2$ is:

$$P = |\langle+_x|\downarrow\rangle|^2 = \left|\frac{1}{\sqrt{2}}\langle\uparrow| + \frac{1}{\sqrt{2}}\langle\downarrow|\;\downarrow\rangle\right|^2 = \frac{1}{2}$$

</details>

## 8. Approximation Methods

### 8.1 Time-Independent Perturbation Theory

For a Hamiltonian $\hat{H} = \hat{H}_0 + \lambda \hat{H}'$ where $\hat{H}'$ is "small" and $\hat{H}_0$
has known eigenstates $|n^{(0)}\rangle$ and eigenvalues $E_n^{(0)}$.

**First-order energy correction:**

$$E_n^{(1)} = \langle n^{(0)} | \hat{H}' | n^{(0)} \rangle$$

**Second-order energy correction:**

$$E_n^{(2)} = \sum_{m \neq n} \frac{|\langle m^{(0)} | \hat{H}' | n^{(0)} \rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

**First-order state correction:**

$$|n^{(1)}\rangle = \sum_{m \neq n} \frac{\langle m^{(0)} | \hat{H}' | n^{(0)} \rangle}{E_n^{(0)} - E_m^{(0)}} |m^{(0)}\rangle$$

**Physical interpretation.** The first-order energy correction is the expectation value of the
perturbation in the unperturbed state. The second-order correction accounts for virtual transitions
to other states: if the perturbation mixes in state $|m\rangle$ with amplitude proportional to
$V_{mn}/(E_n - E_m)$, the energy shift is the sum of $|V_{mn}|^2/(E_n - E_m)$ over all
intermediate states. Lower-energy intermediate states ($E_m \lt E_n$) always lower the energy,
while higher-energy ones raise it.

**Higher-order corrections.** The perturbation series can be extended to arbitrary order:

$$E_n = E_n^{(0)} + \lambda E_n^{(1)} + \lambda^2 E_n^{(2)} + \lambda^3 E_n^{(3)} + \cdots$$

$$|n\rangle = |n^{(0)}\rangle + \lambda|n^{(1)}\rangle + \lambda^2|n^{(2)}\rangle + \cdots$$

The series converges if $\lambda|\langle m|\hat{H}'|n\rangle| \ll |E_n^{(0)} - E_m^{(0)}|$ for all $m \neq n$.
In practice, low-order corrections often give excellent results for weak perturbations.

### 8.2 Degenerate Perturbation Theory

When $E_n^{(0)}$ is degenerate, the corrections are found by diagonalising the perturbation matrix in
the degenerate subspace.

**Theorem 8.1.** The correct zeroth-order states are the eigenvectors of the matrix
$W_{ij} = \langle n_i^{(0)} | \hat{H}' | n_j^{(0)} \rangle$ within the degenerate subspace.

*Proof.* In a $d$-dimensional degenerate subspace spanned by $\\{|n_1^{(0)}\rangle, \ldots, |n_d^{(0)}\rangle\\}$,
the first-order correction to the states is undetermined by the non-degenerate formula (denominators
vanish). The correct approach is to note that $\hat{H}$ restricted to this subspace is:

$$\hat{H}_{\mathrm{sub}} = E_n^{(0)}\hat{I} + \lambda \hat{W}$$

where $W_{ij} = \langle n_i^{(0)}|\hat{H}'|n_j^{(0)}\rangle$. Diagonalising $\hat{W}$ gives the correct
zeroth-order states and first-order energy splittings. $\blacksquare$

### 8.3 Worked Example: Perturbed Infinite Square Well

**Problem.** A one-dimensional infinite square well of width $L$ has a small perturbation
$H' = V_0$ for $0 \lt x \lt L/2$ and $H' = 0$ for $L/2 \lt x \lt L$. Find the first-order energy
corrections.

<details>
<summary>Solution</summary>

The unperturbed states are $\phi_n^{(0)}(x) = \sqrt{2/L}\sin(n\pi x/L)$.

$$E_n^{(1)} = \langle n^{(0)} | H' | n^{(0)} \rangle = \int_0^{L/2} V_0 \frac{2}{L}\sin^2\!\left(\frac{n\pi x}{L}\right) dx$$

$$= \frac{2V_0}{L}\int_0^{L/2} \frac{1 - \cos(2n\pi x/L)}{2}\, dx = \frac{V_0}{L}\!\left[\frac{L}{2} - \frac{L}{4n\pi}\sin(n\pi)\right] = \frac{V_0}{2}$$

The first-order correction is $E_n^{(1)} = V_0/2$ for all $n$. $\blacksquare$

</details>

:::caution Common Pitfall
Perturbation theory assumes the perturbation is "small" compared to the level spacing. If
$|\langle m | H' | n \rangle| \sim |E_n^{(0)} - E_m^{(0)}|$, the perturbation series may diverge. The
method also fails for systems where the unperturbed Hamiltonian has closely spaced or degenerate
levels that are not handled correctly.
:::

### 8.4 Variational Principle

**Theorem 8.2 (Variational Principle).** For any normalised trial state $|\phi\rangle$:

$$\langle\phi|\hat{H}|\phi\rangle \geq E_0$$

where $E_0$ is the true ground state energy. The equality holds if and only if $|\phi\rangle = |0\rangle$.

*Proof.* Expand the trial state in the energy eigenbasis:

$$|\phi\rangle = \sum_{n=0}^{\infty} c_n |n\rangle, \quad \sum_n |c_n|^2 = 1$$

Then:

$$\langle\phi|\hat{H}|\phi\rangle = \sum_n |c_n|^2 E_n \geq E_0\sum_n |c_n|^2 = E_0$$

since $E_n \geq E_0$ for all $n$, and the inequality is strict unless $c_n = 0$ for all $n \geq 1$. $\blacksquare$

**Procedure.** Choose a trial wave function $\phi(x; \alpha_1, \alpha_2, \ldots)$ depending on variational
parameters $\alpha_i$. Compute $E(\alpha_i) = \langle\phi|\hat{H}|\phi\rangle / \langle\phi|\phi\rangle$
and minimise with respect to $\alpha_i$. The minimum provides an upper bound on $E_0$.

**Example 8.1.** Use a Gaussian trial function $\phi(x) = A\exp(-x^2/(2\alpha^2))$ to estimate the
ground state energy of the anharmonic oscillator $V(x) = \frac{1}{2}m\omega^2 x^2 + \lambda x^4$.

<details>
<summary>Solution</summary>

The normalised Gaussian is $\phi(x) = (\pi\alpha^2)^{-1/4}\exp(-x^2/(2\alpha^2))$ with
$\langle x^2 \rangle = \alpha^2/2$ and $\langle x^4 \rangle = 3\alpha^4/4$.

$$\langle T \rangle = \frac{\langle p^2 \rangle}{2m} = \frac{\hbar^2}{4m\alpha^2}$$

(by using $p = -i\hbar\,d/dx$ and integrating by parts).

$$\langle V \rangle = \frac{1}{2}m\omega^2\langle x^2 \rangle + \lambda\langle x^4 \rangle = \frac{m\omega^2\alpha^2}{4} + \frac{3\lambda\alpha^4}{4}$$

$$E(\alpha) = \frac{\hbar^2}{4m\alpha^2} + \frac{m\omega^2\alpha^2}{4} + \frac{3\lambda\alpha^4}{4}$$

Minimising: $dE/d\alpha = 0$ gives $-\hbar^2/(2m\alpha^3) + m\omega^2\alpha/2 + 3\lambda\alpha^3 = 0$.

For $\lambda = 0$ (harmonic oscillator), this gives $\alpha^2 = \hbar/(m\omega)$ and
$E = \hbar\omega/2$, which is exact. For small $\lambda$, expand $\alpha^2 = \hbar/(m\omega)(1 - \delta)$:

$$\alpha^2 \approx \frac{\hbar}{m\omega}\!\left(1 - \frac{3\lambda\hbar}{2m^2\omega^3}\right)$$

$$E_{\mathrm{var}} \approx \frac{\hbar\omega}{2}\!\left(1 + \frac{3\lambda\hbar}{4m^2\omega^3}\right)$$

This agrees with second-order perturbation theory to first order in $\lambda$.

</details>

### 8.5 WKB Approximation

The WKB (Wentzel-Kramers-Brillouin) method provides approximate solutions to the one-dimensional
Schrodinger equation when the potential varies slowly compared to the de Broglie wavelength.

**Ansatz.** Write $\psi(x) = A(x)\exp(iS(x)/\hbar)$ and substitute into the Schrodinger equation:

$$-i\hbar A'S - \hbar^2 A S'' + \hbar^2 A S'^2 - A S' \cdot \hbar^2 = \mathrm{(terms)}$$

Actually, substituting directly into $-\hbar^2\psi''/(2m) + V\psi = E\psi$ and separating orders of $\hbar$:

**Leading order ($\hbar^0$):** $S'(x) = \pm p(x) = \pm\sqrt{2m(E - V(x))}$

**Next order ($\hbar^1$):** $A'(x)/A(x) = -S''(x)/(2S'(x))$, giving $A(x) \propto 1/\sqrt{p(x)}$.

Therefore, in the classically allowed region ($E \gt V$):

$$\psi(x) \approx \frac{C}{\sqrt{p(x)}}\cos\!\left(\frac{1}{\hbar}\int_{x_1}^x p(x')\,dx' + \frac{\pi}{4}\right)$$

where $x_1$ is a turning point ($E = V(x_1)$).

**Connection formulas.** At a turning point, the WKB solutions must be matched. The standard
connection formula (for a linear turning point, $V(x) \approx E + V'(x_1)(x-x_1)$) gives:

- Approaching from the classically allowed side:
  $$\frac{2C}{\sqrt{p(x)}}\cos\!\left(\frac{1}{\hbar}\int_{x_1}^x p(x')\,dx' - \frac{\pi}{4}\right) \longleftrightarrow \frac{C}{\sqrt{|p(x)|}}\exp\!\left(-\frac{1}{\hbar}\int_x^{x_1} |p(x')|\,dx'\right)$$

**Quantization condition.** For a potential well with turning points $x_1$ and $x_2$, applying the
connection formulas at both ends yields:

$$\int_{x_1}^{x_2} p(x)\,dx = \left(n + \frac{1}{2}\right)\pi\hbar, \quad n = 0, 1, 2, \ldots$$

Equivalently, using the closed phase-space integral:

$$\oint p\,dx = \left(n + \frac{1}{2}\right)h$$

This is the Bohr-Sommerfeld quantization condition, corrected by the $1/2$ term from the connection
formulas.

**Validity.** The WKB approximation requires $|d\lambda/dx| \ll 1$, where $\lambda = h/p(x)$ is the
local de Broglie wavelength. Equivalently, the change in potential over one wavelength must be small
compared to the kinetic energy: $|\hbar\,|V'(x)|/(2mp(x))| \ll 1$.

**Example 8.2.** Apply the WKB quantization condition to the harmonic oscillator.

<details>
<summary>Solution</summary>

For $V(x) = \frac{1}{2}m\omega^2 x^2$, the turning points are at $x_{1,2} = \pm\sqrt{2E/(m\omega^2)}$.

$$\int_{x_1}^{x_2} \sqrt{2m\!\left(E - \frac{1}{2}m\omega^2 x^2\right)}\,dx = \sqrt{2mE}\int_{-a}^{a}\sqrt{1 - (x/a)^2}\,dx$$

where $a = \sqrt{2E/(m\omega^2)}$. The integral equals $\pi a/2$ times $\sqrt{2mE}$:

$$= \sqrt{2mE}\cdot\frac{\pi a}{2} = \frac{\pi E}{\omega}$$

Setting this equal to $(n + 1/2)\pi\hbar$:

$$\frac{\pi E}{\omega} = \left(n + \frac{1}{2}\right)\pi\hbar \implies E_n = \left(n + \frac{1}{2}\right)\hbar\omega$$

This is the exact result! The WKB approximation gives the exact energy levels for the harmonic
oscillator because the potential is quadratic, so the connection formulas are exact.

**Validity and limitations.** The WKB method fails near turning points (where $E = V(x)$) because
$p(x) \to 0$ and the local wavelength diverges. The linear approximation of the potential near
turning points (used to derive the connection formulas) breaks down when the potential is not smooth.
The method also fails for potentials with discontinuities or cusps.

Despite these limitations, WKB is remarkably useful for estimating energy levels in potentials
where exact solutions are not available, and it forms the basis of the JWKB approximation in
scattering theory.

</details>

## 9. Problem Set

### Problems

**1.** (Photoelectric effect) A sodium surface has work function $\phi = 2.28$ eV. When illuminated
with light of wavelength $\lambda = 400$ nm, find (a) the maximum kinetic energy of emitted
electrons, and (b) the stopping potential.

**2.** (Compton scattering) X-rays of wavelength $0.071$ nm are scattered at $\theta = 45°$ from a
carbon target. Find (a) the wavelength of the scattered photons, and (b) the kinetic energy of
the recoil electrons.

**3.** (de Broglie wavelength) Electrons are accelerated through a potential difference of $200$ V.
Calculate their de Broglie wavelength. If these electrons pass through a double slit with slit
separation $d = 100$ nm, find the angular position of the first diffraction maximum. Hint: use the
small-angle approximation $\sin\theta \approx \theta$ for the double-slit formula $d\sin\theta = \lambda$.

**4.** (Postulates) Explain why the state space of quantum mechanics must be a complex vector space
rather than a real vector space. Give a physical example that demonstrates the necessity of
complex amplitudes. Hint: consider the Mach-Zehnder interferometer with phase shifters.

**5.** (Continuity equation) Starting from the Schrodinger equation, derive the continuity equation
$\partial|\psi|^2/\partial t + \nabla\cdot\mathbf{J} = 0$. Show that for a stationary state
$\psi(\mathbf{r},t) = \phi(\mathbf{r})e^{-iEt/\hbar}$, the probability current is time-independent.
What does this imply about the probability distribution?

**6.** (Normalisation) Normalise the wave function $\psi(x) = N\,x(a-x)$ for $0 \lt x \lt a$ (and zero
otherwise). Find $\langle x \rangle$, $\langle x^2 \rangle$, and $\langle p^2 \rangle$.

**7.** (Hermitian operators) Prove that the momentum operator $\hat{p} = -i\hbar\,d/dx$ is Hermitian
on the space of wave functions that vanish at infinity. What boundary conditions are required?
Show by counterexample that $\hat{p}$ is not Hermitian if the boundary terms do not vanish.

**8.** (Uncertainty principle) For the harmonic oscillator ground state
$\psi_0(x) = (m\omega/\pi\hbar)^{1/4}e^{-m\omega x^2/(2\hbar)}$, calculate $\langle x \rangle$,
$\langle x^2 \rangle$, $\langle p \rangle$, $\langle p^2 \rangle$, and verify that
$\sigma_x\,\sigma_p = \hbar/2$. Also show that $\langle x \rangle = \langle p \rangle = 0$ by symmetry.

**9.** (Eigenvalue problem) Find the eigenvalues and normalised eigenvectors of the matrix
$\hat{A} = \begin{pmatrix}3 & 1\\1 & 3\end{pmatrix}$. Verify that the eigenvectors are orthogonal
and that they form a complete basis for $\mathbb{C}^2$. Generalise: what are the eigenvalues of
$\begin{pmatrix}a & b\\b & a\end{pmatrix}$?

**10.** (Infinite square well) A particle is in the ground state of an infinite square well of
width $L$. Suddenly, the well expands symmetrically to width $2L$ (the centre remains fixed).
Find the probability that the particle is found in the ground state of the new well. Also find
the probability that it is found in the first excited state.

**11.** (Harmonic oscillator) Using the ladder operators, compute $\langle x^2 \rangle$,
$\langle p^2 \rangle$, and $\langle x^4 \rangle$ for the state $|n\rangle$ of the harmonic
oscillator. Express your answers in terms of $n$, $m$, $\omega$, and $\hbar$.

**12.** (Delta potential) A particle of mass $m$ and energy $E \gt 0$ is incident on the potential
$V(x) = \alpha[\delta(x+a) + \delta(x-a)]$. Find the transmission coefficient. In the limit
$a \to 0$, verify that you recover the single-delta-function result.

**13.** (Tunnelling) A proton with energy $3$ MeV approaches a rectangular barrier of height
$10$ MeV and width $5 \times 10^{-15}$ m. Estimate the transmission coefficient. Compare with
the alpha decay of a typical heavy nucleus and comment on the exponential dependence on barrier width.

**14.** (Angular momentum algebra) Using the angular momentum commutation relations and the
raising/lowering operators, prove that $[\hat{L}^2, \hat{L}_\pm] = 0$. Then show that
$\hat{L}_+|l,l\rangle = 0$ and hence derive the normalisation constant for $\hat{L}_+|l,m\rangle$.

**15.** (Hydrogen atom) Calculate $\langle r \rangle$, $\langle r^2 \rangle$, and
$\langle 1/r \rangle$ for the hydrogen atom ground state $\psi_{100}$. Compare $\langle r \rangle$
with the Bohr radius $a_0$. Use the virial theorem to relate $\langle T \rangle$ and $\langle V \rangle$ for
the Coulomb potential.

**16.** (Spin) An electron is in the spin state $|\psi\rangle = \frac{1}{\sqrt{3}}|\uparrow\rangle +
\sqrt{\frac{2}{3}}|\downarrow\rangle$. (a) If $S_z$ is measured, what are the possible outcomes and
their probabilities? (b) If $S_x$ is measured, what are the possible outcomes and their
probabilities? (c) What is $\langle S_x \rangle$? (d) Write the density matrix $\hat{\rho}$ for this state and verify
$\mathrm{Tr}(\hat{\rho}) = 1$ and $\hat{\rho}^2 = \hat{\rho}$ (pure state).

**17.** (Singlet state) Two spin-1/2 particles are prepared in the singlet state. If particle 1 is
measured to have $S_z^{(1)} = +\hbar/2$, what is the state of particle 2 immediately after? If
particle 2's spin is then measured along the $x$-axis, what is the probability of obtaining
$+\hbar/2$? Explain how this result is consistent with Bell's theorem and the no-communication theorem.

**18.** (Variational method) Use the variational principle with the trial function
$\psi(x) = A(a^2 - x^2)$ for $|x| \lt a$ (and zero otherwise) to estimate the ground state
energy of the infinite square well $V(x) = 0$ for $|x| \lt L$ and $V(x) = \infty$ otherwise.
Take $a = L$ as a fixed parameter. Compare your result with the exact ground state energy
$E_1 = \pi^2\hbar^2/(2mL^2)$ and calculate the percentage error. Comment on why the variational
estimate is higher than the exact result..
