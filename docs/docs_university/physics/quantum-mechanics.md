---
title: Quantum Mechanics
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

## 2. Postulates of Quantum Mechanics

### 2.1 The Postulates

**Postulate 1 (State Space).** The state of a quantum system is completely described by a normalised
vector $|\psi\rangle$ in a complex Hilbert space $\mathcal{H}$.

**Postulate 2 (Observables).** Every measurable quantity (observable) is represented by a Hermitian
(self-adjoint) operator $\hat{A} = \hat{A}^\dagger$ acting on $\mathcal{H}$.

**Postulate 3 (Measurement).** A measurement of observable $\hat{A}$ yields one of the eigenvalues
$a_n$ of $\hat{A}$. The probability of measuring $a_n$ when the system is in state $|\psi\rangle$ is

$$P(a_n) = |\langle a_n | \psi \rangle|^2$$

where $|a_n\rangle$ is the eigenstate corresponding to $a_n$. After measurement, the state collapses
to $|a_n\rangle$.

**Postulate 4 (Time Evolution).** The time evolution of the state is governed by the **time-dependent
Schrodinger equation**:

$$i\hbar \frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle$$

where $\hat{H}$ is the Hamiltonian (energy operator).

**Postulate 5 (Composite Systems).** The state space of a composite system is the tensor product of
the state spaces of the components.

### 2.2 Implications

- **Superposition:** A system can be in a linear combination of eigenstates: $|\psi\rangle = \sum_n c_n |a_n\rangle$.
- **Uncertainty Principle:** Non-commuting observables cannot be simultaneously measured with arbitrary precision.
- **Probabilistic Nature:** Quantum mechanics predicts probabilities, not deterministic outcomes.

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

### 3.4 Probability Current

The **probability current density** is

$$\mathbf{J} = \frac{\hbar}{2mi}(\psi^* \nabla\psi - \psi \nabla\psi^*)$$

It satisfies the continuity equation: $\frac{\partial |\psi|^2}{\partial t} + \nabla \cdot \mathbf{J} = 0$,
expressing conservation of probability.

## 4. Operators and Observables

### 4.1 Position and Momentum Operators

In the position representation:

$$\hat{x} = x, \quad \hat{p} = -i\hbar\frac{\partial}{\partial x}$$

These satisfy the **canonical commutation relation**:

$$[\hat{x}, \hat{p}] = i\hbar$$

### 4.2 General Properties of Operators

**Hermitian operators** have real eigenvalues and orthogonal eigenstates -- essential for observables.

**Theorem 4.1.** If $\hat{A}$ is Hermitian, then:
- All eigenvalues are real.
- Eigenstates corresponding to distinct eigenvalues are orthogonal.
- The eigenstates form a complete basis (for the space of physical states).

### 4.3 Commutators

The **commutator** of two operators is $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$.

**Theorem 4.2 (Generalised Uncertainty Principle).** For observables $\hat{A}$ and $\hat{B}$:

$$\sigma_A \sigma_B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$$

**Corollary 4.3 (Heisenberg Uncertainty Principle).** $\sigma_x \sigma_p \geq \hbar/2$.

*Proof.* This follows from the generalised uncertainty principle with $[\hat{x}, \hat{p}] = i\hbar$:

$$\sigma_x \sigma_p \geq \frac{1}{2}|\langle i\hbar \rangle| = \frac{\hbar}{2}$$

$\blacksquare$

### 4.4 Expectation Values

The **expectation value** of an observable $\hat{A}$ in state $|\psi\rangle$:

$$\langle A \rangle = \langle \psi | \hat{A} | \psi \rangle = \int \psi^* \hat{A} \psi\, dx$$

**Theorem 4.4 (Ehrenfest's Theorem).** Quantum expectation values obey classical equations of motion:

$$\frac{d\langle \hat{x} \rangle}{dt} = \frac{\langle \hat{p} \rangle}{m}, \quad \frac{d\langle \hat{p} \rangle}{dt} = -\left\langle \frac{\partial V}{\partial x}\right\rangle$$

## 5. One-Dimensional Problems

### 5.1 The Infinite Square Well

A particle of mass $m$ in a potential $V(x) = 0$ for $0 \lt x \lt L$ and $V(x) = \infty$ otherwise.

**Boundary conditions:** $\psi(0) = \psi(L) = 0$.

**Solutions:**

$$\phi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right), \quad E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2}, \quad n = 1, 2, 3, \ldots$$

**Properties:**
- The ground state ($n = 1$) has the lowest energy $E_1 > 0$ (**zero-point energy**).
- Energy levels are not equally spaced; $E_n \propto n^2$.
- There are $(n - 1)$ nodes in the $n$-th eigenstate.

### 5.2 The Quantum Harmonic Oscillator

$V(x) = \frac{1}{2}m\omega^2 x^2$. The energy eigenvalues are:

$$E_n = \hbar\omega\left(n + \frac{1}{2}\right), \quad n = 0, 1, 2, \ldots$$

The eigenfunctions involve Hermite polynomials $H_n$:

$$\phi_n(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} \frac{1}{\sqrt{2^n n!}} H_n\!\left(\sqrt{\frac{m\omega}{\hbar}}\,x\right) e^{-m\omega x^2/(2\hbar)}$$

**Ladder operators:**

$$\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i\hat{p}}{m\omega}\right), \quad \hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i\hat{p}}{m\omega}\right)$$

$$\hat{a}|n\rangle = \sqrt{n}|n-1\rangle, \quad \hat{a}^\dagger|n\rangle = \sqrt{n+1}|n+1\rangle$$

$$\hat{H} = \hbar\omega\left(\hat{a}^\dagger \hat{a} + \frac{1}{2}\right)$$

### 5.3 The Free Particle

$V(x) = 0$ everywhere. The Schrodinger equation:

$$-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} = E\phi$$

Solutions: $\phi_k(x) = \frac{1}{\sqrt{2\pi}} e^{ikx}$ with $E = \frac{\hbar^2 k^2}{2m}$.

The energy spectrum is **continuous** (all $E \geq 0$). The eigenfunctions are not normalisable (plane
waves); physical states are **wave packets** constructed by superposition.

## 6. Angular Momentum and the Hydrogen Atom

### 6.1 Angular Momentum Operators

$$\hat{L}_x = -i\hbar\left(y\frac{\partial}{\partial z} - z\frac{\partial}{\partial y}\right), \quad \hat{L}_y = -i\hbar\left(z\frac{\partial}{\partial x} - x\frac{\partial}{\partial z}\right), \quad \hat{L}_z = -i\hbar\left(x\frac{\partial}{\partial y} - y\frac{\partial}{\partial x}\right)$$

**Commutation relations:**

$$[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z, \quad [\hat{L}_y, \hat{L}_z] = i\hbar\hat{L}_x, \quad [\hat{L}_z, \hat{L}_x] = i\hbar\hat{L}_y$$

$$[\hat{L}^2, \hat{L}_i] = 0 \quad \mathrm{for all } i$$

**Simultaneous eigenstates:** $|l, m\rangle$ with

$$\hat{L}^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle, \quad \hat{L}_z|l,m\rangle = \hbar m|l,m\rangle$$

where $l = 0, 1, 2, \ldots$ and $m = -l, -l+1, \ldots, l-1, l$.

### 6.2 The Hydrogen Atom

The Hamiltonian for hydrogen (electron of mass $m_e$ and charge $-e$, proton of charge $+e$):

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r}$$

**Energy eigenvalues:**

$$E_n = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2 \hbar^2} \cdot \frac{1}{n^2} = -\frac{13.6\,\mathrm{eV}}{n^2}, \quad n = 1, 2, 3, \ldots$$

**Degeneracy:** Each energy level $E_n$ has degeneracy $n^2$ (ignoring spin). The quantum numbers are:
- Principal: $n = 1, 2, 3, \ldots$
- Orbital angular momentum: $l = 0, 1, \ldots, n - 1$
- Magnetic: $m_l = -l, \ldots, l$

The ground state wave function ($n = 1, l = 0, m_l = 0$):

$$\psi_{100}(r, \theta, \phi) = \frac{1}{\sqrt{\pi a_0^3}} e^{-r/a_0}$$

where $a_0 = \frac{4\pi\varepsilon_0 \hbar^2}{m_e e^2} \approx 0.529\,\mathrm{\AA}$ is the Bohr radius.

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

### 7.3 Stern-Gerlach Experiment

A beam of silver atoms passes through an inhomogeneous magnetic field and splits into two beams,
confirming the quantisation of angular momentum (spin-1/2 for the outer electron).

## 8. Perturbation Theory

### 8.1 Time-Independent Perturbation Theory

For a Hamiltonian $\hat{H} = \hat{H}_0 + \lambda \hat{H}'$ where $\hat{H}'$ is "small" and $\hat{H}_0$
has known eigenstates $|n^{(0)}\rangle$ and eigenvalues $E_n^{(0)}$.

**First-order energy correction:**

$$E_n^{(1)} = \langle n^{(0)} | \hat{H}' | n^{(0)} \rangle$$

**Second-order energy correction:**

$$E_n^{(2)} = \sum_{m \neq n} \frac{|\langle m^{(0)} | \hat{H}' | n^{(0)} \rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

**First-order state correction:**

$$|n^{(1)}\rangle = \sum_{m \neq n} \frac{\langle m^{(0)} | \hat{H}' | n^{(0)} \rangle}{E_n^{(0)} - E_m^{(0)}} |m^{(0)}\rangle$$

### 8.2 Degenerate Perturbation Theory

When $E_n^{(0)}$ is degenerate, the corrections are found by diagonalising the perturbation matrix in
the degenerate subspace.

**Theorem 8.1.** The correct zeroth-order states are the eigenvectors of the matrix
$W_{ij} = \langle n_i^{(0)} | \hat{H}' | n_j^{(0)} \rangle$ within the degenerate subspace.

### 8.3 Worked Example

**Problem.** A one-dimensional infinite square well of width $L$ has a small perturbation
$H' = V_0$ for $0 \lt x \lt L/2$ and $H' = 0$ for $L/2 \lt x \lt L$. Find the first-order energy
corrections.

*Solution.* The unperturbed states are $\phi_n^{(0)}(x) = \sqrt{2/L}\sin(n\pi x/L)$.

$$E_n^{(1)} = \langle n^{(0)} | H' | n^{(0)} \rangle = \int_0^{L/2} V_0 \frac{2}{L}\sin^2\left(\frac{n\pi x}{L}\right) dx$$

$$= \frac{2V_0}{L}\int_0^{L/2} \frac{1 - \cos(2n\pi x/L)}{2}\, dx = \frac{V_0}{L}\left[\frac{L}{2} - \frac{L}{4n\pi}\sin(n\pi)\right] = \frac{V_0}{2}$$

The first-order correction is $E_n^{(1)} = V_0/2$ for all $n$. $\blacksquare$

:::caution Common Pitfall
Perturbation theory assumes the perturbation is "small" compared to the level spacing. If
$|\langle m | H' | n \rangle| \sim |E_n^{(0)} - E_m^{(0)}|$, the perturbation series may diverge. The
method also fails for systems where the unperturbed Hamiltonian has closely spaced or degenerate
levels that are not handled correctly.
:::
