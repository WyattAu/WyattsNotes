---
title: Group Theory in Particle Physics
tags:
  - Physics
  - University
---

### 5.1 SU(3) Colour

The strong interaction is governed by the gauge group **SU(3)**. The eight gluons correspond to the
Eight generators of SU(3), the Gell-Mann matrices $\lambda^a$ ($a = 1, \ldots, 8$).

**Colour confinement:** All observable particles are colour singlets (SU(3) invariant). This is why
Free quarks and gluons are not observed.

**Quark colour states:** $q \in \mathbf{3}$ (triplet), $\bar{q} \in \bar{\mathbf{3}}$ (antitriplet).

**Meson colour wavefunction:**
$q\bar{q} \in \mathbf{3} \otimes \bar{\mathbf{3}} = \mathbf{8} \oplus \mathbf{1}$. The singlet
$\mathbf{1}$ is the colour-neutral meson.

**Baryon colour wavefunction:**
$qqq \in \mathbf{3} \otimes \mathbf{3} \otimes \mathbf{3} = \mathbf{10} \oplus \mathbf{8} \oplus \mathbf{8} \oplus \mathbf{1}$.
The completely antisymmetric singlet is the colour-neutral baryon.

### 5.2 The Gell-Mann Matrices

The eight Gell-Mann matrices $\lambda^a$ are the generators of SU(3) in the fundamental
Representation. They satisfy:

$$[\lambda^a, \lambda^b] = 2if^{abc}\lambda^c, \quad \mathrm{Tr}(\lambda^a\lambda^b) = 2\delta^{ab}$$

Where $f^{abc}$ are the totally antisymmetric **structure constants** of SU(3).

Explicitly:

$$
\lambda^1 = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad
\lambda^2 = \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad
\lambda^3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

$$
\lambda^4 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}, \quad
\lambda^5 = \begin{pmatrix} 0 & 0 & -i \\ 0 & 0 & 0 \\ i & 0 & 0 \end{pmatrix}
$$

$$
\lambda^6 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}, \quad
\lambda^7 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -i \\ 0 & i & 0 \end{pmatrix}
$$

$$\lambda^8 = \frac{1}{\sqrt{3}}\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -2 \end{pmatrix}$$

The normalised generators used in the QCD Lagrangian are $T^a = \lambda^a/2$Satisfying
$[T^a, T^b] = if^{abc}T^c$ and $\mathrm{Tr}(T^a T^b) = \delta^{ab}/2$.

### 5.3 SU(3) Decomposition: Worked Examples

<details>
<summary>Example 5.1: Decomposing $3 \otimes \bar{3}$ (mesons)</summary>

The tensor product $\mathbf{3} \otimes \bar{\mathbf{3}}$ can be decomposed using the Clebsch--Gordan
series for SU(3):

$$\mathbf{3} \otimes \bar{\mathbf{3}} = \mathbf{8} \oplus \mathbf{1}$$

The singlet $\mathbf{1}$ corresponds to the colour-neutral state:

$$\frac{1}{\sqrt{3}}(r\bar{r} + g\bar{g} + b\bar{b})$$

This is the unique SU(3)-invariant combination, analogous to the trace of a $3 \times 3$ Matrix. The
remaining eight independent components form the adjoint representation $\mathbf{8}$.

For mesons, the colour wavefunction must be the singlet, ensuring colour confinement. The flavour
and spin wavefunctions are independent of this colour structure.

</details>

<details>
<summary>Example 5.2: Decomposing $3 \otimes 3 \otimes 3$ (baryons)</summary>

First decompose two triplets:

$$\mathbf{3} \otimes \mathbf{3} = \mathbf{6}_S \oplus \mathbf{3}_A$$

Where the subscript denotes symmetry ($S$) or antisymmetry ($A$) under exchange of the Two quarks.

Then:

$$\mathbf{3} \otimes \mathbf{3} \otimes \mathbf{3} = (\mathbf{6}_S \oplus \mathbf{3}_A) \otimes \mathbf{3}$$

$$= \mathbf{6}_S \otimes \mathbf{3} \oplus \mathbf{3}_A \otimes \mathbf{3}$$

$$= (\mathbf{10}_S \oplus \mathbf{8}_M) \oplus (\mathbf{8}_M \oplus \mathbf{1}_A)$$

$$= \mathbf{10} \oplus \mathbf{8} \oplus \mathbf{8} \oplus \mathbf{1}$$

The completely antisymmetric singlet $\mathbf{1}_A$ is the colour wavefunction of all Baryons. In
the full baryon wavefunction, the colour part is antisymmetric, so the Combined flavour $\otimes$
spin $\otimes$ space part must be symmetric (for ground-state Baryons, $L = 0$So the space part is
symmetric).

</details>

### 5.4 SU(2)$\times$U(1) Electroweak Theory

The electroweak interaction is governed by SU(2)$_L \times$ U(1)$_Y$:

- SU(2)$_L$: weak isospin, acts on left-handed doublets only.
- U(1)$_Y$: weak hypercharge, acts on all particles.

Left-handed fermions form SU(2) doublets:
$$L = \begin{pmatrix} \nu_e \\ e^- \end{pmatrix}_L, \quad Q = \begin{pmatrix} u \\ d \end{pmatrix}_L$$

Right-handed fermions are singlets under SU(2): $$e_R, \quad u_R, \quad d_R$$

The electric charge is: $Q = T_3 + Y/2$.

After electroweak symmetry breaking, the $W^\pm$ and $Z^0$ bosons and the photon emerge as linear
Combinations of the SU(2) and U(1) gauge fields:

$$W^\pm = \frac{1}{\sqrt{2}}(W^1 \mp iW^2)$$

$$\begin{pmatrix} Z^0 \\ A \end{pmatrix} = \begin{pmatrix} \cos\theta_W & \sin\theta_W \\ -\sin\theta_W & \cos\theta_W \end{pmatrix} \begin{pmatrix} W^3 \\ B \end{pmatrix}$$

### 5.5 Flavour Symmetries and the Eightfold Way

Before QCD, Gell-Mann and Ne'eman organised hadrons using approximate SU(3) flavour symmetry:

- **Meson octet:** $\pi^+, \pi^0, \pi^-, K^+, K^0, \bar{K}^0, K^-, \eta$.
- **Baryon octet:** $p, n, \Sigma^+, \Sigma^0, \Sigma^-, \Xi^0, \Xi^-, \Lambda$.
- **Baryon decuplet:** $\Delta^{++}, \Delta^+, \Delta^0, \Delta^-, \Sigma^*, \Xi^*, \Omega^-$.

The prediction of the $\Omega^-$ (with strangeness $S = -3$) by Gell-Mann in 1962 and its discovery
In 1964 was a triumph of the quark model.

<details>
<summary>Example 5.3: Eightfold way mass formula for the baryon octet</summary>

The Gell-Mann--Okubo mass formula for the baryon octet is:

$$\frac{1}{2}(N + \Xi) + \frac{3}{2}\Lambda = 2\Sigma$$

Where $N$, $\Xi$, $\Lambda$, $\Sigma$ denote the average masses of the respective isospin
Multiplets. Substituting the experimental values:

$$N = \frac{m_p + m_n}{2} = \frac{938.3 + 939.6}{2} = 938.9\;\mathrm{MeV}$$
$$\Xi = \frac{m_{\Xi^0} + m_{\Xi^-}}{2} = \frac{1314.9 + 1321.7}{2} = 1318.3\;\mathrm{MeV}$$
$$\Lambda = 1115.7\;\mathrm{MeV}$$
$$\Sigma = \frac{m_{\Sigma^+} + m_{\Sigma^0} + m_{\Sigma^-}}{3} = \frac{1189.4 + 1192.6 + 1197.4}{3} = 1193.1\;\mathrm{MeV}$$

**Left-hand side:**

$$\frac{1}{2}(938.9 + 1318.3) + \frac{3}{2}(1115.7) = 1128.6 + 1673.6 = 2802.2\;\mathrm{MeV}$$

**Right-hand side:**

$$2 \times 1193.1 = 2386.2\;\mathrm{MeV}$$

Wait --- these do not match. This is because the GMO formula for the octet is correctly:

$$\frac{m_N + m_\Xi}{2} = \frac{3m_\Lambda + m_\Sigma}{4}$$

**Left-hand side:** $(938.9 + 1318.3)/2 = 1128.6$ MeV. **Right-hand side:**
$(3 \times 1115.7 + 1193.1)/4 = (3347.1 + 1193.1)/4 = 4540.2/4 = 1135.1$ MeV.

The agreement is within $\sim 0.6\%$Confirming the SU(3) flavour symmetry to good Approximation. The
small deviation is due to SU(3) breaking by the strange quark mass.

</details>

<details>
<summary>Example 5.4: Decuplet equal-spacing rule</summary>

The baryon decuplet states have masses that follow an equal-spacing rule in strangeness:

$$m_{\Omega^-} - m_{\Xi^*} = m_{\Xi^*} - m_{\Sigma^*} = m_{\Sigma^*} - m_\Delta$$

Checking with experimental values:

- $m_\Delta \approx 1232$ MeV
- $m_{\Sigma^*} \approx 1385$ MeV
- $m_{\Xi^*} \approx 1533$ MeV
- $m_{\Omega^-} \approx 1672.5$ MeV

Spacing: $\Delta m_1 = 1385 - 1232 = 153$ MeV, $\Delta m_2 = 1533 - 1385 = 148$ MeV,
$\Delta m_3 = 1672.5 - 1533 = 139.5$ MeV.

The spacings are approximately equal (to within $\sim 9\%$), consistent with the Gell-Mann--Okubo
prediction for the decuplet. The deviations reflect higher-order SU(3)-breaking effects.

</details>

<details>
<summary>Example 5.5: Meson mass relations from the eightfold way</summary>

For the pseudoscalar meson octet, the Gell-Mann--Okubo formula gives:

$$4m_K^2 = m_\pi^2 + 3m_\eta^2$$

Using experimental masses:

- $m_\pi \approx 140$ MeV (average of $\pi^\pm$ and $\pi^0$)
- $m_K \approx 496$ MeV (average of $K^\pm$ and $K^0$)
- $m_\eta \approx 548$ MeV

**Left-hand side:** $4 \times (496)^2 = 4 \times 246\,016 = 984\,064$ MeV$^2$.

**Right-hand side:**
$(140)^2 + 3 \times (548)^2 = 19\,600 + 3 \times 300\,304 = 19\,600 + 900\,912 = 920\,512$ MeV$^2$.

The discrepancy is $(984\,064 - 920\,512)/920\,512 \approx 6.9\%$. This is larger than For the
baryon octet, reflecting the fact that the pseudoscalar mesons are (approximately) Goldstone bosons
of the spontaneously broken chiral symmetry, and their masses receive Additional contributions from
the chiral anomaly ($\eta'$ is not a pure octet state but mixes With the singlet). The
$\eta$-$\eta'$ mixing complicates the mass formula significantly.

</details>

