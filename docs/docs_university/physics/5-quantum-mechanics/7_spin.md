---
title: Spin
tags:
  - Physics
  - University
---

### 7.1 The Spin Operators

Spin is an **intrinsic** form of angular momentum with no classical analogue. For spin-$1/2$
particles (e.g., electrons):

$$\hat{S}_x = \frac{\hbar}{2}\sigma_x, \quad \hat{S}_y = \frac{\hbar}{2}\sigma_y, \quad \hat{S}_z = \frac{\hbar}{2}\sigma_z$$

Where $\sigma_x, \sigma_y, \sigma_z$ are the **Pauli matrices**:

$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

### 7.2 Properties of Pauli Matrices

$$\sigma_i^2 = I, \quad \sigma_i \sigma_j = i\epsilon_{ijk}\sigma_k \quad (i \neq j)$$

$$[\sigma_i, \sigma_j] = 2i\epsilon_{ijk}\sigma_k, \quad \{\sigma_i, \sigma_j\} = 2\delta_{ij}I$$

Spin states: $|\uparrow\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (spin up, $m_s = +1/2$) and
$|\downarrow\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (spin down, $m_s = -1/2$).

### 7.3 Derivation of the Pauli Matrices

The Pauli matrices are uniquely determined (up to unitary equivalence) by the angular momentum
algebra For $j = 1/2$.

**Requirements.** We seek $2 \times 2$ matrices $\sigma_x, \sigma_y, \sigma_z$ such that:

1. $\sigma_i^2 = I$ (eigenvalues are $\pm 1$Corresponding to $S_z = \pm\hbar/2$)
2. $\sigma_i^\dagger = \sigma_i$ (Hermitian)
3. $\mathrm{Tr}(\sigma_i) = 0$ (traceless, since eigenvalues sum to zero)
4. $[\sigma_x, \sigma_y] = 2i\sigma_z$ (and cyclic permutations)

**Step 1: Fix $\sigma_z$.** A traceless Hermitian matrix with eigenvalues $\pm 1$ is:

$$\sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

(up to an overall unitary transformation, which corresponds to choosing the quantisation axis).

**Step 2: Determine $\sigma_x$.** A general traceless Hermitian matrix is:

$$\sigma_x = \begin{pmatrix} a & b \\ b^* & -a \end{pmatrix}$$

Where $a \in \mathbb{R}$ and $b \in \mathbb{C}$. From $\sigma_x^2 = I$: $a^2 + |b|^2 = 1$ and
$2ab = 0$. Since $|b| \neq 0$ (otherwise $\sigma_x$ is diagonal and commutes with
$\sigma_z$Violating $[\sigma_x, \sigma_z] \neq 0$), we have $a = 0$ and $|b| = 1$. Choosing $b = 1$
(by convention):

$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

**Step 3: Determine $\sigma_y$.** From $[\sigma_x, \sigma_y] = 2i\sigma_z$:

$$\sigma_x\sigma_y - \sigma_y\sigma_x = 2i\sigma_z$$

Writing $\sigma_y = \begin{pmatrix} c & d \\ d^* & -c \end{pmatrix}$ and imposing $\sigma_y^2 = I$,
$\sigma_y^\dagger = \sigma_y$ And the commutation relation, we find $c = 0$, $|d| = 1$And the
commutator gives $d - d^* = 2i$ So $d = i$:

$$\sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$

$\blacksquare$

### 7.4 Spin-1/2 in a Magnetic Field

A particle with magnetic moment $\boldsymbol{\mu} = \gamma\mathbf{S}$ (where $\gamma$ is the
Gyromagnetic ratio) in a magnetic field $\mathbf{B} = B_0\hat{z}$ has Hamiltonian:

$$\hat{H} = -\boldsymbol{\mu}\cdot\mathbf{B} = -\gamma B_0\hat{S}_z = -\frac{\hbar\gamma B_0}{2}\sigma_z$$

The eigenstates are $|\uparrow\rangle$ and $|\downarrow\rangle$ with energies
$E_\uparrow = -\hbar\gamma B_0/2$ And $E_\downarrow = +\hbar\gamma B_0/2$. The energy splitting is
$\Delta E = \hbar\gamma B_0$.

**Time evolution.** For an arbitrary initial state:

$$|\psi(0)\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle$$

The state at time $t$ is:

$$|\psi(t)\rangle = \alpha e^{i\gamma B_0 t/2}|\uparrow\rangle + \beta e^{-i\gamma B_0 t/2}|\downarrow\rangle$$

**Larmor precession.** The expectation values precess around the $z$-axis:

$$\langle S_x \rangle(t) = \frac{\hbar}{2}(\alpha^*\beta\,e^{-i\gamma B_0 t} + \alpha\beta^*\,e^{i\gamma B_0 t})$$

$$\langle S_y \rangle(t) = \frac{\hbar}{2i}(\alpha^*\beta\,e^{-i\gamma B_0 t} - \alpha\beta^*\,e^{i\gamma B_0 t})$$

$$\langle S_z \rangle(t) = \frac{\hbar}{2}(|\alpha|^2 - |\beta|^2) = \mathrm{const}.$$

The spin precesses at the **Larmor frequency** $\omega_L = \gamma B_0$.

For an electron, $\gamma = -e/(m_e)$ (negative charge), giving $\omega_L = eB_0/m_e$.

**The Larmor frequency.** For a typical laboratory field $B_0 = 1$ T:

$$\omega_L = \frac{(1.602 \times 10^{-19})(1)}{9.109 \times 10^{-31}} = 1.76 \times 10^{11}\;\mathrm{rad}/s$$

Corresponding to a frequency $\nu_L = \omega_L/(2\pi) = 28$ GHz (microwave range). This is the basis
Of Electron Spin Resonance (ESR) and Nuclear Magnetic Resonance (NMR) spectroscopy, where
transitions Between spin states are driven by oscillating magnetic fields at the Larmor frequency.

**Example 7.1.** An electron starts in the state $|\psi(0)\rangle = |\uparrow\rangle$. A magnetic
field $\mathbf{B} = B_0\hat{x}$ is applied. Find $|\psi(t)\rangle$.

<details>
<summary>Solution</summary>

With $\mathbf{B} = B_0\hat{x}$The Hamiltonian is
$\hat{H} = -\gamma B_0\hat{S}_x = \omega_L\hat{S}_x$ Where $\omega_L = \gamma B_0$. The eigenstates
of $\hat{S}_x$ are:

$$|+\rangle_x = \frac{1}{\sqrt{2}}(|\uparrow\rangle + |\downarrow\rangle), \quad |-\rangle_x = \frac{1}{\sqrt{2}}(|\uparrow\rangle - |\downarrow\rangle)$$

With eigenvalues $\pm\hbar\omega_L/2$.

Expanding $|\uparrow\rangle = (|+\rangle_x + |-\rangle_x)/\sqrt{2}$ and evolving:

$$|\psi(t)\rangle = \frac{1}{\sqrt{2}}\!\left(e^{-i\omega_L t/2}|+\rangle_x + e^{i\omega_L t/2}|-\rangle_x\right)$$

$$= \cos\!\left(\frac{\omega_L t}{2}\right)|\uparrow\rangle - i\sin\!\left(\frac{\omega_L t}{2}\right)|\downarrow\rangle$$

The probability of measuring spin-up along $z$ oscillates as $\cos^2(\omega_L t/2)$With period
$T = 2\pi/\omega_L$.

</details>

### 7.5 Stern-Gerlach Experiment

A beam of silver atoms passes through an inhomogeneous magnetic field and splits into two beams,
Confirming the quantisation of angular momentum (spin-1/2 for the outer electron).

**Detailed analysis.** The force on a magnetic moment in an inhomogeneous field is:

$$\mathbf{F} = \nabla(\boldsymbol{\mu}\cdot\mathbf{B})$$

For a field $\mathbf{B} = B(z)\hat{z}$ with $\partial B_z/\partial z \neq 0$The $z$-component of
force Is $F_z = \mu_z\,\partial B_z/\partial z$. Since $\mu_z = \gamma m_s\hbar$ and
$m_s = \pm 1/2$:

$$F_z = \pm\frac{\gamma\hbar}{2}\frac{\partial B_z}{\partial z}$$

The beam splits into two, corresponding to $m_s = +1/2$ (deflected up) and $m_s = -1/2$ (deflected
down).

**Sequential Stern-Gerlach measurements.** Consider three apparatuses in sequence:

1. First SG-Z: selects $|\uparrow\rangle$.
2. Second SG-X: splits into $|+\rangle_x$ and $|-\rangle_x$ with equal probability $1/2$.
3. Third SG-Z (on the $|-\rangle_x$ beam): again splits into $|\uparrow\rangle$ and
   $|\downarrow\rangle$ with equal probability $1/2$.

This demonstrates that the intermediate $S_x$ measurement **erases** the information about the
Original $S_z$ state. The probabilities reflect the non-commutativity
$[\hat{S}_x, \hat{S}_z] = i\hbar\hat{S}_y$.

**Example 7.2.** A spin-1/2 particle passes through SG-Z (selecting $|\uparrow\rangle$), then
through SG-Z at angle $\theta$ from the $z$-axis. Find the probability of measuring $+1$ in the
second Apparatus.

<details>
<summary>Solution</summary>

The eigenstate of $\hat{S}_n = \hat{S}_z\cos\theta + \hat{S}_x\sin\theta$ with eigenvalue $+\hbar/2$
is:

$$|+\rangle_n = \cos\frac{\theta}{2}|\uparrow\rangle + \sin\frac{\theta}{2}|\downarrow\rangle$$

The probability is:

$$P = |\langle+_n|\uparrow\rangle|^2 = \cos^2\frac{\theta}{2}$$

For $\theta = 90°$ (i.e., measuring $S_x$): $P = 1/2$.

</details>

### 7.6 Addition of Angular Momenta

Given two angular momenta $\hat{\mathbf{J}}_1$ and $\hat{\mathbf{J}}_2$ with quantum numbers
$j_1, m_1$ and $j_2, m_2$Define the total
$\hat{\mathbf{J}} = \hat{\mathbf{J}}_1 + \hat{\mathbf{J}}_2$.

**Compatible observables:** $\hat{J}^2$, $\hat{J}_z$, $\hat{J}_1^2$, $\hat{J}_2^2$ all commute. We
label Simultaneous eigenstates as $|j_1, j_2; j, m\rangle$.

**Clebsch-Gordan decomposition.** The total angular momentum quantum numbers range over:

$$j = |j_1 - j_2|, |j_1 - j_2| + 1, \ldots, j_1 + j_2$$

In integer steps. For each $j$The magnetic quantum number $m$ ranges from $-j$ to $j$.

The transformation between the product basis and the total-$j$ basis is:

$$|j_1, j_2; j, m\rangle = \sum_{m_1, m_2} C(j_1\,m_1\,j_2\,m_2|j\,m)\,|j_1, m_1\rangle|j_2, m_2\rangle$$

Where $C(j_1\,m_1\,j_2\,m_2|j\,m)$ are the **Clebsch-Gordan coefficients**.

**Two spin-1/2 particles.** The composite system has $j_1 = j_2 = 1/2$. The possible total spins
are:

- **Triplet** ($j = 1$): three states with $m = 1, 0, -1$ $$|1,1\rangle = |\uparrow\uparrow\rangle$$
  $$|1,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)$$
  $$|1,-1\rangle = |\downarrow\downarrow\rangle$$

- **Singlet** ($j = 0$): one state with $m = 0$
  $$|0,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)$$

The triplet states are symmetric under particle exchange; the singlet is antisymmetric.

**Total spin operator.**
$\hat{S}^2 = \hat{S}_1^2 + \hat{S}_2^2 + 2\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2$So:

$$\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = \frac{1}{2}(\hat{S}^2 - \hat{S}_1^2 - \hat{S}_2^2)$$

For the triplet: $\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = \hbar^2/4$. For the singlet:
$\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = -3\hbar^2/4$.

**Complete set of commuting observables (CSCO).** For a two-spin system, the set
$\\{\hat{S}^2, \hat{S}_z, \hat{S}_1^2, \hat{S}_2^2\\}$ forms a CSCO: their simultaneous eigenstates
are Uniquely labelled by the quantum numbers $(s, m_s, s_1, s_2)$. An alternative CSCO is
$\\{\hat{S}_{1z}, \hat{S}_{2z}, \hat{S}_1^2, \hat{S}_2^2\\}$Which uses the product basis. The
Clebsch-Gordan coefficients are the transformation matrix between these two bases.

**Clebsch-Gordan table for $j_1 = j_2 = 1/2$:**

| $m_1$  | $m_2$  | $j=1,\,m$    | $j=0,\,m$     |
| ------ | ------ | ------------ | ------------- |
| $+1/2$ | $+1/2$ | $1$          | $0$           |
| $+1/2$ | $-1/2$ | $1/\sqrt{2}$ | $1/\sqrt{2}$  |
| $-1/2$ | $+1/2$ | $1/\sqrt{2}$ | $-1/\sqrt{2}$ |
| $-1/2$ | $-1/2$ | $1$          | $0$           |

**Example 7.3.** Two electrons are in the singlet state. If electron 1 is measured to have
$S_z = +\hbar/2$What is the state of electron 2 immediately after? What is the probability of
Measuring $S_x = +\hbar/2$ for electron 2?

<details>
<summary>Solution</summary>

The singlet state is
$|0,0\rangle = (|\uparrow_1\downarrow_2\rangle - |\downarrow_1\uparrow_2\rangle)/\sqrt{2}$.

After measuring $S_1^z = +\hbar/2$The state collapses to $|\uparrow_1\downarrow_2\rangle$. Electron
2 is in $|\downarrow\rangle$.

The probability of measuring $S_2^x = +\hbar/2$ is:

$$P = |\langle+_x|\downarrow\rangle|^2 = \left|\frac{1}{\sqrt{2}}\langle\uparrow| + \frac{1}{\sqrt{2}}\langle\downarrow|\;\downarrow\rangle\right|^2 = \frac{1}{2}$$

</details>

