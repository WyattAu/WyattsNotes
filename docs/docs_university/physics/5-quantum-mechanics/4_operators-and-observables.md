---
title: Operators and Observables
tags:
  - Physics
  - University
---

### 4.1 Position and Momentum Operators

In the position representation:

$$\hat{x} = x, \quad \hat{p} = -i\hbar\frac{\partial}{\partial x}$$

These satisfy the **canonical commutation relation**:

$$[\hat{x}, \hat{p}] = i\hbar$$

### 4.2 General Properties of Hermitian Operators

**Hermitian operators** have real eigenvalues and orthogonal eigenstates -- essential for
observables.

**Theorem 4.1.** If $\hat{A}$ is Hermitian, then:

- All eigenvalues are real.
- Eigenstates corresponding to distinct eigenvalues are orthogonal.
- The eigenstates form a complete basis (for the space of physical states).

_Proof that eigenvalues are real._ Let $\hat{A}|a\rangle = a|a\rangle$ with
$\langle a|a\rangle = 1$. Then:

$$\langle a|\hat{A}|a\rangle = a\langle a|a\rangle = a$$

Taking the complex conjugate:

$$\langle a|\hat{A}|a\rangle^* = \langle a|\hat{A}^\dagger|a\rangle = \langle a|\hat{A}|a\rangle = a^*$$

Where the second equality uses $\hat{A} = \hat{A}^\dagger$. Therefore $a = a^*$So $a$ is real.
$\blacksquare$

_Proof that eigenstates are orthogonal._ Let $\hat{A}|a\rangle = a|a\rangle$ and
$\hat{A}|b\rangle = b|b\rangle$ With $a \neq b$:

$$\langle b|\hat{A}|a\rangle = a\langle b|a\rangle$$

$$\langle b|\hat{A}|a\rangle = \langle\hat{A}b|a\rangle = b^*\langle b|a\rangle = b\langle b|a\rangle$$

Where the last step uses $b^* = b$ (eigenvalues are real). Therefore:

$$(a - b)\langle b|a\rangle = 0$$

Since $a \neq b$We must have $\langle b|a\rangle = 0$. $\blacksquare$

**Theorem 4.2 (Spectral Theorem).** Every Hermitian operator on a finite-dimensional Hilbert space
Has a complete orthonormal set of eigenvectors. In infinite dimensions, this holds for Self-adjoint
operators with a discrete spectrum; operators with continuous spectra require the Spectral theorem
in its general form (resolution of the identity).

### 4.3 Commutators

The **commutator** of two operators is $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$.

**Theorem 4.3 (Generalised Uncertainty Principle).** For observables $\hat{A}$ and $\hat{B}$:

$$\sigma_A \sigma_B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$$

**Corollary 4.4 (Heisenberg Uncertainty Principle).** $\sigma_x \sigma_p \geq \hbar/2$.

_Proof._ This follows from the generalised uncertainty principle with $[\hat{x}, \hat{p}] = i\hbar$:

$$\sigma_x \sigma_p \geq \frac{1}{2}|\langle i\hbar \rangle| = \frac{\hbar}{2}$$

$\blacksquare$

### 4.4 Proof of the Generalised Uncertainty Principle

**Theorem 4.5 (Robertson-Schrodinger inequality).** For any state $|\psi\rangle$ and observables
$\hat{A}$, $\hat{B}$:

$$\sigma_A^2\,\sigma_B^2 \geq \frac{1}{4}|\langle[\hat{A}, \hat{B}]\rangle|^2 + \frac{1}{4}\langle\{\Delta\hat{A}, \Delta\hat{B}\}\rangle^2$$

Where $\Delta\hat{A} = \hat{A} - \langle\hat{A}\rangle$ and
$\sigma_A^2 = \langle\Delta\hat{A}^2\rangle$.

_Proof._ Define $|\alpha\rangle = (\Delta\hat{A} + i\lambda\Delta\hat{B})|\psi\rangle$ for a real
Parameter $\lambda$. Since $\langle\alpha|\alpha\rangle \geq 0$:

$$\langle\psi|(\Delta\hat{A} - i\lambda\Delta\hat{B})(\Delta\hat{A} + i\lambda\Delta\hat{B})|\psi\rangle \geq 0$$

$$= \sigma_A^2 + i\lambda\langle[\Delta\hat{A}, \Delta\hat{B}]\rangle + \lambda^2\sigma_B^2 \geq 0$$

This is a quadratic in $\lambda$ that is non-negative for all $\lambda$So its discriminant must be
Non-positive:

$$(\langle[\Delta\hat{A}, \Delta\hat{B}]\rangle)^2 - 4\sigma_A^2\sigma_B^2 \leq 0$$

Since $[\Delta\hat{A}, \Delta\hat{B}] = [\hat{A}, \hat{B}]$ (constants commute with everything):

$$\sigma_A^2\,\sigma_B^2 \geq \frac{1}{4}|\langle[\hat{A}, \hat{B}]\rangle|^2 \qquad \blacksquare$$

The stronger Robertson-Schrodinger form retains the anticommutator term
$\langle\{\Delta\hat{A}, \Delta\hat{B}\}\rangle^2$ Which is always non-negative and provides a
tighter bound.

**Example 4.1.** Show that the uncertainty principle is saturated for the harmonic oscillator ground
state.

<details>
<summary>Solution</summary>

For the ground state $\psi_0(x) = (m\omega/\pi\hbar)^{1/4}\exp(-m\omega x^2/(2\hbar))$:

$$\langle x \rangle = 0, \quad \langle x^2 \rangle = \frac{\hbar}{2m\omega} \implies \sigma_x = \sqrt{\frac{\hbar}{2m\omega}}$$

$$\langle p \rangle = 0, \quad \langle p^2 \rangle = \frac{m\omega\hbar}{2} \implies \sigma_p = \sqrt{\frac{m\omega\hbar}{2}}$$

$$\sigma_x\,\sigma_p = \frac{\hbar}{2}$$

This saturates the Heisenberg bound, so the ground state is a **minimum uncertainty state**
(Gaussian).

</details>

### 4.5 Expectation Values

The **expectation value** of an observable $\hat{A}$ in state $|\psi\rangle$:

$$\langle A \rangle = \langle \psi | \hat{A} | \psi \rangle = \int \psi^* \hat{A} \psi\, dx$$

**Theorem 4.6 (Ehrenfest's Theorem).** Quantum expectation values obey classical equations of
motion:

$$\frac{d\langle \hat{x} \rangle}{dt} = \frac{\langle \hat{p} \rangle}{m}, \quad \frac{d\langle \hat{p} \rangle}{dt} = -\left\langle \frac{\partial V}{\partial x}\right\rangle$$

_Proof of Ehrenfest's Theorem._ From the Schrodinger equation:

$$\frac{d\langle \hat{A} \rangle}{dt} = \frac{i}{\hbar}\langle[\hat{H}, \hat{A}]\rangle + \left\langle\frac{\partial \hat{A}}{\partial t}\right\rangle$$

For $\hat{A} = \hat{x}$ (no explicit time dependence), using
$[\hat{p}^2, \hat{x}] = -2i\hbar\hat{p}$:

$$\frac{d\langle \hat{x} \rangle}{dt} = \frac{i}{\hbar}\!\left\langle\left[\frac{\hat{p}^2}{2m}, \hat{x}\right]\right\rangle = \frac{i}{\hbar}\cdot\frac{-2i\hbar}{2m}\langle\hat{p}\rangle = \frac{\langle\hat{p}\rangle}{m}$$

For $\hat{A} = \hat{p}$Using $[V(\hat{x}), \hat{p}] = i\hbar\,V'(\hat{x})$:

$$\frac{d\langle \hat{p} \rangle}{dt} = \frac{i}{\hbar}\langle[V(\hat{x}), \hat{p}]\rangle = -\left\langle\frac{\partial V}{\partial x}\right\rangle$$

$\blacksquare$

**Correspondence principle.** Ehrenfest's theorem embodies the **correspondence principle**: in the
Classical limit (large quantum numbers or $\hbar \to 0$), quantum expectation values follow
Classical trajectories. However, this is only exact for linear or quadratic potentials; for general
Potentials, $\langle V'(x) \rangle \neq V'(\langle x \rangle)$So quantum corrections persist even
For large systems.

### 4.6 Solving Eigenvalue Equations

To find the eigenvalues and eigenvectors of an operator $\hat{A}$Solve:

$$\hat{A}|\phi\rangle = a|\phi\rangle \implies \det(\hat{A} - a\hat{I}) = 0$$

The roots give the eigenvalues; substituting each back yields the eigenvectors.

**Example 4.3.** Find the eigenvalues and eigenvectors of
$\hat{S}_x = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

<details>
<summary>Solution</summary>

$$\det\!\left(\frac{\hbar}{2}\begin{pmatrix}-a & 1\\1 & -a\end{pmatrix}\right) = 0 \implies a^2 - 1 = 0 \implies a = \pm 1$$

Eigenvalues are $\pm\hbar/2$.

For $a = +1$:
$\begin{pmatrix}-1 & 1\\1 & -1\end{pmatrix}\begin{pmatrix}c_1\\c_2\end{pmatrix} = 0 \implies c_1 = c_2$.
Normalised: $|+\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$.

For $a = -1$: $c_1 = -c_2$. Normalised:
$|-\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}$.

These are equal superpositions of the $S_z$ eigenstates. Note that measuring $S_x$ on a state of
Definite $S_z$ gives probabilistic outcomes, and vice versa.

</details>

