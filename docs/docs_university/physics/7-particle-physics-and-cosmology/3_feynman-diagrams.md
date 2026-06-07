---
title: Feynman Diagrams
tags:
  - Physics
  - University
---

### 3.1 Rules

Feynman diagrams are a pictorial representation of perturbation theory in quantum field theory. The
Basic elements:

- **External lines:** Incoming/outgoing particles (initial/final states).
- **Internal lines (propagators):** Virtual particles mediating the interaction.
- **Vertices:** Interaction points where particles meet. Each vertex has a coupling constant.
- **Antiparticles:** Represented as particles moving backwards in time.

### 3.2 Common Processes

**QED vertex:** $e^- + \gamma \to e^-$ (or $e^+ + \gamma \to e^+$). Coupling:
$e = \sqrt{4\pi\alpha}$.

**Electron-positron annihilation:** $e^+ + e^- \to \mu^+ + \mu^-$ proceeds via a virtual photon
($s$-channel).

**Electron-muon scattering:** $e^- + \mu^- \to e^- + \mu^-$ via virtual photon ($t$-channel).

**Weak decay (beta decay):** $n \to p + e^- + \bar{\nu}_e$. The neutron emits a virtual $W^-$ which
Decays to $e^-\bar{\nu}_e$.

**Gluon exchange:** $q + q \to q + q$ via gluon. Unlike QED, three-gluon and four-gluon vertices
Exist due to the non-Abelian nature of SU(3).

### 3.3 Calculating Amplitudes

The Feynman rules assign a mathematical expression to each diagram element:

- **Fermion propagator:** $\frac{i(\gamma^\mu p_\mu + m)}{p^2 - m^2 + i\epsilon}$
- **Photon propagator:** $\frac{-ig_{\mu\nu}}{p^2 + i\epsilon}$
- **Vertex factor (QED):** $-ie\gamma^\mu$
- **Vertex factor (QCD):** $-ig_s T^a \gamma^\mu$ (where $T^a$ are Gell-Mann matrices)

The total amplitude is the sum over all topologically distinct diagrams at the desired order.

### 3.4 Worked Example: Compton Scattering Amplitude

<details>
<summary>Example 3.1: Tree-level Compton scattering $e^-\gamma \to e^-\gamma$</summary>

Compton scattering has two tree-level diagrams in QED:

**Diagram (a):** The incoming photon is absorbed, then the outgoing photon is emitted ($s$-channel
Intermediate electron).

**Diagram (b):** The outgoing photon is emitted first, then the incoming photon is absorbed
($u$-channel intermediate electron).

The amplitude for diagram (a) is:

$$\mathcal{M}_a = (-ie)^2 \bar{u}(p')\gamma^\mu \frac{i(\slashed{p} + \slashed{k} + m)}{(p+k)^2 - m^2 + i\epsilon}\gamma^\nu u(p)\,\epsilon_\mu^*(k')\,\epsilon_\nu(k)$$

Where $\slashed{p} \equiv \gamma^\mu p_\mu$ and $\epsilon_\mu$ are photon polarisation vectors.

The amplitude for diagram (b) is:

$$\mathcal{M}_b = (-ie)^2 \bar{u}(p')\gamma^\nu \frac{i(\slashed{p} - \slashed{k}' + m)}{(p-k')^2 - m^2 + i\epsilon}\gamma^\mu u(p)\,\epsilon_\mu^*(k')\,\epsilon_\nu(k)$$

The total tree-level amplitude is:

$$\mathcal{M} = \mathcal{M}_a + \mathcal{M}_b$$

Squaring, summing over final-state polarisations and spins, averaging over initial-state
Polarisations, and integrating over phase space yields the Klein--Nishina cross section. In the
low-energy limit ($\omega \ll m_e$), this reduces to the classical Thomson cross Section:

$$\sigma_T = \frac{8\pi}{3}\left(\frac{e^2}{4\pi m_e}\right)^2 = \frac{8\pi}{3}\frac{\alpha^2}{m_e^2} \approx 0.665 \times 10^{-28}\;\mathrm{m}^2$$

</details>

<details>
<summary>Example 3.1b: Møller scattering $e^-e^- \to e^-e^-$</summary>

Møller scattering has two tree-level $t$- and $u$-channel diagrams. Because the electrons Are
identical fermions, the total amplitude must be antisymmetric under exchange:

$$\mathcal{M} = \mathcal{M}_t - \mathcal{M}_u$$

Where:

$$\mathcal{M}_t = \frac{e^2}{t}\,\bar{u}(p_3)\gamma^\mu u(p_1)\,\bar{u}(p_4)\gamma_\mu u(p_2)$$

$$\mathcal{M}_u = \frac{e^2}{u}\,\bar{u}(p_4)\gamma^\mu u(p_1)\,\bar{u}(p_3)\gamma_\mu u(p_2)$$

And $t = (p_1 - p_3)^2$, $u = (p_1 - p_4)^2$ are Mandelstam variables. The minus sign Is a
consequence of Fermi-Dirac .../4-statistics-and-probability/2_statistics and ensures the Pauli
exclusion principle is Satisfied. When the two electrons scatter at $90^\circ$ in the CM frame,
$t = u$ and the Two amplitudes cancel, giving $\mathcal{M} = 0$. This is the expected result:
identical Fermions cannot be distinguished in the final state at $90^\circ$ scattering.

</details>

### 3.5 Worked Example: Muon Pair Production

<details>
<summary>Example 3.2: $e^+e^- \to \mu^+\mu^-$ cross section</summary>

At tree level, $e^+e^- \to \mu^+\mu^-$ proceeds via a single virtual photon ($s$-channel). The
amplitude is:

$$\mathcal{M} = \frac{(-ie)^2}{s}\,\bar{v}(p_2)\gamma^\mu u(p_1)\,\bar{u}(p_3)\gamma_\mu v(p_4)$$

Where $s = (p_1 + p_2)^2$ is the Mandelstam variable (the centre-of-mass energy squared).

In the centre-of-mass frame with $s = 4E_{\mathrm{cm}^2 \gg m_\mu^2}$The spin-averaged Squared
amplitude is:

$$\lvert\overline{\mathcal{M}}\rvert^2 = \frac{e^4}{s^2}\cdot 8(s^2 + 2sm_\mu^2 + m_\mu^4) \xrightarrow{s \gg m_\mu^2} \frac{8e^4}{1}$$

The differential cross section in the CM frame is:

$$\frac{d\sigma}{d\Omega} = \frac{\alpha^2}{4s}(1 + \cos^2\theta)$$

Where $\theta$ is the scattering angle. Integrating over solid angle:

$$\sigma = \frac{4\pi\alpha^2}{3s}$$

This is the leading-order QED result. At LEP energies, electroweak corrections ($Z^0$ exchange and
interference) become significant.

</details>

### 3.6 Worked Example: Bhabha Scattering

<details>
<summary>Example 3.3: Bhabha scattering $e^+e^- \to e^+e^-$</summary>

Bhabha scattering has two tree-level diagrams:

**Diagram (a):** $s$-channel annihilation into a virtual photon, producing a new $e^+e^-$ pair (same
topology as muon pair production).

**Diagram (b):** $t$-channel exchange of a virtual photon between the incoming Electron and outgoing
positron (Møller-type scattering).

The amplitude for the $s$-channel diagram is:

$$\mathcal{M}_s = \frac{(-ie)^2}{s}\,\bar{v}(p_2)\gamma^\mu u(p_1)\,\bar{u}(p_3)\gamma_\mu v(p_4)$$

The amplitude for the $t$-channel diagram is:

$$\mathcal{M}_t = \frac{(-ie)^2}{t}\,\bar{u}(p_3)\gamma^\mu u(p_1)\,\bar{v}(p_2)\gamma_\mu v(p_4)$$

Where $t = (p_1 - p_3)^2$ is the Mandelstam $t$ variable. The total amplitude is:

$$\mathcal{M} = \mathcal{M}_s - \mathcal{M}_t$$

The minus sign arises from Fermi .../4-statistics-and-probability/2_statistics (exchange of
identical fermions in the Final state). When squaring, there is a cross term
$\mathcal{M}_s\mathcal{M}_t^*$ That leads to interference between the two diagrams. This
interference is destructive At small angles (forward scattering) and constructive at large angles,
producing a Characteristic angular distribution that is essential for calibrating detectors at
$e^+e^-$ colliders.

</details>

### 3.7 Renormalization Overview

Perturbative calculations in QFT often produce **divergent integrals** from loop diagrams. For
Example, the electron self-energy (one-loop correction to the electron propagator) diverges
Logarithmically.

**Renormalization** resolves this by:

1. **Regularisation:** Introducing a cutoff $\Lambda$ (or dimensional regularisation, working in
   $d = 4 - \epsilon$ dimensions) to make integrals finite.
2. **Renormalization:** Absorbing the divergences into redefinitions of the physical parameters
   (mass, charge, field normalisation).

A theory is **renormalisable** if all divergences can be absorbed into a finite number of
Parameters. The Standard Model is renormalisable ('t Hooft and Veltman, Nobel Prize 1999).

**Running couplings.** The renormalized parameters depend on the energy scale $\mu$. For QED, the
Fine-structure constant runs as:

$$\alpha(\mu) = \frac{\alpha(\mu_0)}{1 - \frac{\alpha(\mu_0)}{3\pi}\ln(\mu^2/\mu_0^2)}$$

This logarithmic running arises from vacuum polarisation (screening by virtual $e^+e^-$ pairs).

:::caution Common Pitfall Students often confuse **regularisation** (a mathematical tool to control
divergences) with **renormalization** (the physical procedure of redefining parameters).
Regularisation is a Temporary scaffold; renormalization is the essential step that yields finite,
physical predictions.



