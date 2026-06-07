---
title: Neutrino Physics
tags:
  - Physics
  - University
---

### 8.1 Neutrino Oscillations

Neutrinos are produced and detected in flavour eigenstates $(\nu_e, \nu_\mu, \nu_\tau)$But propagate
As mass eigenstates $(\nu_1, \nu_2, \nu_3)$ related by the **PMNS mixing matrix** $U$:

$$|\nu_\alpha\rangle = \sum_i U_{\alpha i}^* |\nu_i\rangle$$

As a neutrino of flavour $\alpha$ propagates, the mass eigenstates acquire different phases:
$\exp(-im_i^2 L/(2E))$Leading to oscillations.

**Two-flavour oscillation probability:**

$$P(\nu_\alpha \to \nu_\beta) = \sin^2(2\theta)\sin^2\left(\frac{\Delta m^2 L}{4E}\right)$$

Where $\Delta m^2 = m_2^2 - m_1^2$, $\theta$ is the mixing angle, $L$ is the distance, and $E$ is
the Energy.

**Evidence:** The Solar Neutrino Problem (deficit of $\nu_e$ from the Sun, resolved by
$\nu_e \to \nu_\mu, \nu_\tau$ oscillations) and atmospheric neutrino oscillations (Super-Kamiokande,
1998).

### 8.2 Neutrino Masses

Neutrino oscillations imply that neutrinos have mass, but the masses are extremely small:
$\sum m_\nu \lt 0.12$ eV (Planck 2018).

In the Standard Model, neutrinos are massless. Their masses require physics beyond the Standard
Model, most commonly via the **seesaw mechanism**:

$$m_\nu \sim \frac{m_D^2}{M}$$

Where $m_D$ is a Dirac mass and $M \gg m_D$ is the mass of a heavy right-handed neutrino.

<details>
<summary>Example 8.1: Atmospheric neutrino oscillation calculation</summary>

Atmospheric neutrinos are produced when cosmic rays strike the upper atmosphere, creating Pions that
decay: $\pi^+ \to \mu^+ + \nu_\mu$Followed by $\mu^+ \to e^+ + \bar{\nu}_\mu + \nu_e$.

Super-Kamiokande (1998) observed that upward-going muon neutrinos (travelling through the Earth,
$L \sim 10^4$ km) were significantly depleted relative to downward-going ones ($L \sim 10$ km),
while electron neutrinos showed no such deficit.

Using the two-flavour formula with the atmospheric parameters
$\Delta m^2_{32} \approx 2.5 \times 10^{-3}$ eV$^2$ and $\sin^2(2\theta_{23}) \approx 1$ (maximal
mixing):

For upward-going $\nu_\mu$ with $E = 1$ GeV and $L = 10\,000$ km:

$$\frac{\Delta m^2 L}{4E} = \frac{2.5 \times 10^{-3}\;\mathrm{eV}^2 \times 10^4\;\mathrm{km}{4 \times 1\;\mathrm{GeV}}}$$

Converting to natural units ($\hbar c = 1.973 \times 10^{-7}$ eV$\cdot$M): $L = 10^7$ m, so
$L/E = 10^7 / 10^9 = 10^{-2}$ eV$^{-1}$.

$$\frac{\Delta m^2 L}{4E} = \frac{2.5 \times 10^{-3} \times 10^{-2}}{4} = 6.25 \times 10^{-6}\;\mathrm{eV}^2\cdot\mathrm{eV}^{-1}$$

Wait --- we need to be more careful with units. Using the practical formula:

$$\frac{\Delta m^2 [\mathrm{eV}^2] \cdot L [\mathrm{km}]}{4E [\mathrm{GeV}]} = \frac{2.5 \times 10^{-3} \times 10^4}{4 \times 1} = \frac{25}{4} = 6.25\;\mathrm{rad}$$

$$P(\nu_\mu \to \nu_\mu) = 1 - \sin^2(2\theta_{23})\sin^2(6.25) = 1 - 1 \times \sin^2(6.25) \approx 1 - 0.018 \approx 0.98$$

Hmm, this gives almost no oscillation. Let me reconsider. Actually:

$$P(\nu_\mu \to \nu_\tau) = \sin^2(2\theta)\sin^2\left(\frac{\Delta m^2 L}{4E}\right) = \sin^2(6.25) \approx 0.018$$

This seems small. But at $E = 0.5$ GeV:

$$\frac{\Delta m^2 L}{4E} = \frac{25}{2} = 12.5\;\mathrm{rad}$$

$$\sin^2(12.5) \approx \sin^2(0.35) \approx 0.12$$

And at the first oscillation maximum,
$L/E = 2\pi/(\Delta m^2) = 2\pi/(2.5 \times 10^{-3}) \approx 2513$ km/GeV. For $E = 1$ GeV,
$L_{\mathrm{osc} \approx 2513}$ km, which is comparable to the Earth's diameter ($\sim 12\,700$ km).
The observed deficit is an average over many oscillations and energies, Giving roughly
$\langle P\rangle \approx 1/2$ for maximal mixing, consistent with the Super-Kamiokande observation
of approximately half the expected upward-going $\nu_\mu$ flux.

</details>

