---
title: Conservation Laws and Symmetries
tags:
  - Physics
  - University
---

### 2.1 Exactly Conserved Quantities

The following are conserved in all known interactions:

- Energy $E$
- Momentum $\mathbf{p}$
- Angular momentum $\mathbf{L}$
- Electric charge $Q$
- Colour charge
- Baryon number $B$ (each quark has $B = 1/3$)
- Lepton family numbers $L_e$, $L_\mu$, $L_\tau$ (each lepton has $L = +1$Each antilepton $L = -1$)

### 2.2 Approximate or Partially Conserved Quantities

- **Isospin $I$:** Conserved in strong interactions, violated by electromagnetic and weak. $I_3$
  determines the electric charge via the Gell-Mann--Nishijima formula.
- **Strangeness $S$:** Conserved in strong and electromagnetic, violated by weak (hence "strange"
  particles are produced in pairs but decay via weak interaction).
- **Parity $P$:** Conserved in strong and electromagnetic, maximally violated in weak interactions.
- **Charge conjugation $C$:** Conserved in strong and electromagnetic, violated in weak.
- **CP:** Conserved in most interactions; violated in weak interactions (observed in $K$ and $B$
  meson systems). CP violation is necessary for the matter-antimatter asymmetry.

### 2.3 The Gell-Mann--Nishijima Formula

The Gell-Mann--Nishijima formula relates the electric charge of a hadron to its isospin Projection
$I_3$Baryon number $B$And strangeness $S$:

$$Q = I_3 + \frac{B + S}{2}$$

This can be generalised to include charm $C$Bottomness $B'$And topness $T$:

$$Q = I_3 + \frac{1}{2}(B + S + C + B' + T)$$

**Derivation.** The formula follows from the definition of the hypercharge $Y = B + S$ and the
Relation $Q = I_3 + Y/2$Which is a direct consequence of the embedding of
$\mathrm{U}(1)_{\mathrm{em}}$ Within $\mathrm{SU}(3)$ flavour. For the electroweak theory, the
hypercharge is generalised to $Y = B + S + C + B' + T$ when additional flavours are included.

<details>
<summary>Example 2.1: Applying the Gell-Mann--Nishijima formula</summary>

Verify the charges of the following hadrons:

**(a) Proton ($uud$):** $B = 1$, $S = 0$, $C = 0$, $B' = 0$, $T = 0$. The proton belongs to The
isospin doublet with $I = 1/2$, $I_3 = +1/2$.

$$Q = \frac{1}{2} + \frac{1 + 0}{2} = \frac{1}{2} + \frac{1}{2} = 1 \quad \checkmark$$

**(b) $\Xi^-$ ($ssd$):** $B = 1$, $S = -2$, $C = 0$, $B' = 0$, $T = 0$. The cascade Particle belongs
to the isospin doublet with $I = 1/2$, $I_3 = -1/2$.

$$Q = -\frac{1}{2} + \frac{1 + (-2)}{2} = -\frac{1}{2} + \left(-\frac{1}{2}\right) = -1 \quad \checkmark$$

**(c) $D^+$ ($c\bar{d}$):** $B = 0$, $S = 0$, $C = +1$, $B' = 0$, $T = 0$. The $D$ mesons form an
isospin doublet with $I = 1/2$, $I_3 = +1/2$.

$$Q = \frac{1}{2} + \frac{0 + 0 + 1}{2} = \frac{1}{2} + \frac{1}{2} = 1 \quad \checkmark$$

</details>

### 2.4 Parity Violation

Parity transformation $P$ reverses the sign of all spatial coordinates:
$\mathbf{x} \to -\mathbf{x}$. Under parity, polar vectors change sign while axial vectors do not.

In 1956, Lee and Yang proposed that parity might not be conserved in weak interactions. This was
Confirmed by the **Wu experiment** (1957), which measured the angular distribution of electrons
Emitted in the beta decay of polarised $^{60}$Co nuclei. The electrons were emitted preferentially
Opposite to the nuclear spin direction, a clear parity-violating asymmetry.

The weak interaction **maximally violates parity**: only left-handed fermions (and right-handed
Antifermions) participate in charged-current weak interactions. This is encoded in the $V - A$
structure of the weak current:

$$J^\mu_{\mathrm{weak} = \bar{\psi}\gamma^\mu(1 - \gamma^5)\psi}$$

Where the $(1 - \gamma^5)$ projector selects the left-handed chirality component.

### 2.5 Worked Examples: Conservation Laws in Decays

<details>
<summary>Example 2.2: Determining allowed decay modes</summary>

Consider the decay $\Sigma^+ \to p + \pi^0$. Is this allowed?

**Quantum numbers:**

| Particle   | $Q$  | $B$ | $S$  | $I_3$  |
| ---------- | ---- | --- | ---- | ------ |
| $\Sigma^+$ | $+1$ | $1$ | $-1$ | $+1$   |
| $p$        | $+1$ | $1$ | $0$  | $+1/2$ |
| $\pi^0$    | $0$  | $0$ | $0$  | $0$    |

**Conservation checks:**

- Charge: $+1 = +1 + 0$ $\checkmark$
- Baryon number: $1 = 1 + 0$ $\checkmark$
- Strangeness: $-1 \neq 0 + 0$ $\times$

Strangeness is violated, so this decay proceeds via the **weak interaction**. The Lifetime of the
$\Sigma^+$ ($\tau \sim 10^{-10}$ s) is characteristic of weak decays.

</details>

<details>
<summary>Example 2.3: Forbidden decay analysis</summary>

Is the decay $\pi^0 \to e^+ + e^-$ allowed?

**Conservation checks:**

- Charge: $0 = +1 + (-1)$ $\checkmark$
- Baryon number: $0 = 0 + 0$ $\checkmark$
- Lepton number: $0 = -1 + 1$ $\checkmark$
- Parity: The $\pi^0$ is a pseudoscalar ($J^P = 0^-$), but the final state $e^+e^-$ in an $s$-wave
  has $P = +1$. Therefore $P$ is violated.

Since parity is conserved in electromagnetic interactions, this decay cannot proceed
Electromagnetically. It can only proceed via the weak interaction (through a Two-photon intermediate
state), making it extremely suppressed: $\mathrm{BR}(\pi^0 \to e^+e^-) \approx 6.5 \times 10^{-8}$.

</details>

### 2.6 Symmetry and Noether's Theorem

**Noether's Theorem:** Every continuous symmetry of the action corresponds to a conserved quantity.

| Symmetry          | Conserved Quantity |
| ----------------- | ------------------ |
| Time translation  | Energy             |
| Space translation | Momentum           |
| Rotation          | Angular momentum   |
| U(1) gauge        | Electric charge    |
| SU(3) gauge       | Colour charge      |

**Proof (sketch).** Consider an infinitesimal transformation $x^\mu \to x^\mu + \delta x^\mu$
$\phi \to \phi + \delta\phi$. If the action $S = \int \mathcal{L}\,d^4x$ is invariant, then the
Current
$j^\mu = \frac{\partial \mathcal{L}}{\partial(\partial_\mu\phi)}\delta\phi -
\mathcal{L}\delta x^\mu$
satisfies $\partial_\mu j^\mu = 0$, yielding a conserved charge $Q = \int j^0\,d^3x$. $\blacksquare$

Discrete symmetries ($P$, $C$, $T$) do not arise from Noether's theorem but are still powerful
Constraints. The **CPT theorem** states that any Lorentz-invariant local quantum field theory is
Invariant under the combined transformation $CPT$.

