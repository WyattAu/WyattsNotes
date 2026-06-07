---
title: Historical Motivation
tags:
  - Physics
  - University
---

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
Discrete quanta: $E = h\nu$ where $h = 6.626 \times 10^{-34}$ J$\cdot$S is Planck's constant.

**Einstein's photon (1905).** Light consists of photons, each carrying energy $E = h\nu$ and
momentum $p = h/\lambda = h\nu/c$. The photoelectric effect: $E_k = h\nu - \phi$ where $\phi$ is the
work Function.

**Compton scattering (1923).** X-rays scattered off electrons show a wavelength shift:

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta)$$

This confirms that photons carry momentum $p = h/\lambda$.

**Davisson-Germer experiment (1927).** Electrons scattered off a nickel crystal produce a
diffraction Pattern, confirming de Broglie's hypothesis that matter has wave properties:
$\lambda = h/p$.

### 1.3 The Photoelectric Effect: Detailed Derivation

The photoelectric effect provided the first direct evidence for the quantum nature of light. When
Monochromatic light of frequency $\nu$ strikes a metal surface, electrons are ejected with a maximum
Kinetic energy $K_{\max}$ that depends on $\nu$ but **not** on the intensity.

**Einstein's quantum hypothesis (1905).** Each photon carries energy $E_\gamma = h\nu$. When a
photon Strikes the surface, it transfers all its energy to a single electron. By energy
conservation:

$$h\nu = \phi + K_{\max}$$

Where $\phi$ is the work function (minimum energy to remove an electron from the metal).

**Key predictions:**

1. **Threshold frequency.** No electrons are emitted if $\nu \lt \nu_0 = \phi/h$Regardless of
   intensity. This is because each photon must supply at least $\phi$.

2. **Linear dependence on frequency.** $K_{\max} = h\nu - \phi$ is linear in $\nu$ with slope $h$
   (independent of the metal).

3. **Intensity affects current, not energy.** Higher intensity means more photons per unit time, so
   more electrons are emitted, but each electron has the same maximum kinetic energy.

4. **No time delay.** Classically, an electron should accumulate energy gradually; quantum
   mechanically, a single photon ejects an electron instantaneously.

_Proof of the threshold frequency._ Setting $K_{\max} = 0$ in the energy balance:

$$h\nu_0 = \phi \implies \nu_0 = \frac{\phi}{h}$$

For frequencies $\nu \lt \nu_0$The photon energy is insufficient to liberate an electron, and No
photoelectric emission occurs regardless of intensity. $\blacksquare$

**Millikan's experimental verification (1916).** Robert Millikan, who initially opposed Einstein's
Theory, performed careful experiments measuring $K_{\max}$ versus $\nu$ for various metals. His
Results confirmed the linear relation $K_{\max} = h\nu - \phi$ with a universal slope $h$ (Planck's
Constant), providing compelling evidence for the photon concept. Millikan's measured value of $h$
Agreed with Planck's value from blackbody radiation to within $0.5\%$.

**Example 1.1.** Sodium has a work function $\phi = 2.28$ eV. Find the cutoff wavelength.

<details>
<summary>Solution</summary>

The cutoff frequency is $\nu_0 = \phi/h = 2.28 \times 1.602 \times 10^{-19} / 6.626 \times 10^{-34}$
$= 5.51 \times 10^{14}$ Hz. The cutoff wavelength is:

$$\lambda_0 = \frac{c}{\nu_0} = \frac{3.00 \times 10^8}{5.51 \times 10^{14}} = 544\;\mathrm{nm}$$

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

$$\frac{hc}{\lambda} + m_e c^2 = \frac{hc}{\lambda'} + E_e$$

**Momentum conservation (vector equation):**

$$\frac{h}{\lambda}\hat{n} = \frac{h}{\lambda'}\hat{n}' + \mathbf{p}_e$$

_Derivation of the wavelength shift._ From the relativistic energy-momentum relation for the
Electron, $E_e^2 = (p_e c)^2 + (m_e c^2)^2$. Rearranging the energy conservation:

$$E_e - m_e c^2 = hc\!\left(\frac{1}{\lambda} - \frac{1}{\lambda'}\right)$$

Squaring the momentum equation:

$$p_e^2 = \left(\frac{h}{\lambda}\right)^2 + \left(\frac{h}{\lambda'}\right)^2 - \frac{2h^2}{\lambda\lambda'}\cos\theta$$

Using $E_e^2 = p_e^2 c^2 + m_e^2 c^4$ and writing $T_e = E_e - m_e c^2$:

$$E_e^2 - m_e^2 c^4 = 2m_e c^2 T_e + T_e^2 = p_e^2 c^2$$

Substituting $T_e = hc(1/\lambda - 1/\lambda')$ and $p_e^2$ from above, then dividing by $c^2$ and
Simplifying:

$$2m_e c \cdot \frac{h}{\lambda\lambda'}(1 - \cos\theta) = 2h^2\!\left(\frac{1}{\lambda^2} + \frac{1}{\lambda'^2} - \frac{2\cos\theta}{\lambda\lambda'}\right)$$

$$\frac{1}{\lambda'} - \frac{1}{\lambda} = \frac{h}{m_e c}(1 - \cos\theta)\cdot\frac{1}{\lambda\lambda'}$$

Multiplying through by $\lambda\lambda'$ yields the **Compton formula**:

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta)$$

The quantity $\lambda_C = h/(m_e c) \approx 2.426 \times 10^{-12}$ m is the **Compton wavelength**
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

$$\Delta\lambda = \lambda_C(1 - \cos 90°) = \lambda_C = 2.426 \times 10^{-12}\;\mathrm{m} = 0.00243\;\mathrm{nm}$$

$$\lambda' = \lambda + \Delta\lambda = 0.100 + 0.00243 = 0.10243\;\mathrm{nm}$$

The kinetic energy of the recoil electron:

$$T_e = hc\!\left(\frac{1}{\lambda} - \frac{1}{\lambda'}\right) = \frac{hc\,\Delta\lambda}{\lambda\lambda'}$$

$$= \frac{(6.626 \times 10^{-34})(3.00 \times 10^8)(2.43 \times 10^{-12})}{(1.00 \times 10^{-10})(1.0243 \times 10^{-10})} = 4.72 \times 10^{-17}\;\mathrm{J} = 295\;\mathrm{eV}$$

</details>

### 1.5 The Davisson-Germer Experiment

The Davisson-Germer experiment (1927) provided the first direct confirmation of de Broglie's
Hypothesis that particles have wave-like properties.

**Experimental setup.** A beam of electrons is accelerated through a potential difference $V$ and
Directed at a nickel crystal. The scattered electrons are detected at various angles $\phi$.

**de Broglie relation.** An electron accelerated through potential $V$ has kinetic energy $K = eV$
And momentum:

$$p = \sqrt{2m_e eV}$$

The de Broglie wavelength is:

$$\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m_e eV}}$$

**Bragg condition.** The nickel crystal acts as a diffraction grating with lattice spacing $d$.
Constructive interference occurs when:

$$n\lambda = 2d\sin\phi$$

Where $\phi$ is the angle measured from the crystal surface.

**The key observation.** At $V = 54$ V, a pronounced peak was observed at $\phi = 50°$. The De
Broglie wavelength at this voltage is:

$$\lambda = \frac{6.626 \times 10^{-34}}{\sqrt{2(9.109 \times 10^{-31})(1.602 \times 10^{-19})(54)}} = 0.167\;\mathrm{nm}$$

The Bragg condition with the nickel lattice spacing gives excellent agreement with this Prediction,
confirming that electrons exhibit wave-like diffraction.

**Significance.** The Davisson-Germer experiment established wave-particle duality for matter. The
De Broglie relation $\lambda = h/p$ was subsequently confirmed for neutrons, atoms, and molecules
(C60 fullerenes in 1999), establishing it as a universal principle. In 2019, the de Broglie
Wavelength of molecules exceeding 25,000 atomic mass units was demonstrated, pushing the boundary Of
quantum mechanics to the macroscopic regime.

