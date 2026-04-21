---
title: Astrophysics
date: 2026-04-03T00:00:00.000Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: astrophysics
sidebar_position: 1
---

## Astrophysics

:::info Board Coverage AQA Paper 2 (Option 9) | Edexcel CP5 (Option 9) | OCR (A) Paper 2 (Option D)
:::

## 1. Astronomical Distances and Measurements

### Astronomical Units of Distance

**Definition.** The **astronomical unit** (AU) is the mean Earth--Sun distance, defined as exactly
149,597,870,700 m (approximately $1.50 \times 10^{11}$ m).

**Definition.** The **light-year** (ly) is the distance travelled by light in a vacuum in one Julian
year:

$$1\;\mathrm{ly} = c \times 1\;\mathrm{year} = 3.00 \times 10^8 \times 3.156 \times 10^7 = 9.46 \times 10^{15}\;\mathrm{m}$$

**Definition.** The **parsec** (pc) is the distance at which one astronomical unit subtends an angle
of one arcsecond:

$$1\;\mathrm{pc} = \frac{1\;\mathrm{AU}}{\tan(1'')} \approx \frac{1.50 \times 10^{11}}{4.848 \times 10^{-6}} = 3.09 \times 10^{16}\;\mathrm{m}$$

**Key conversions:**

| Unit | Metres                | Light-years           | Parsecs               |
| ---- | --------------------- | --------------------- | --------------------- |
| 1 AU | $1.50 \times 10^{11}$ | $1.58 \times 10^{-5}$ | $4.85 \times 10^{-6}$ |
| 1 ly | $9.46 \times 10^{15}$ | 1                     | $0.307$               |
| 1 pc | $3.09 \times 10^{16}$ | $3.26$                | 1                     |

### Stellar Parallax

As Earth orbits the Sun, nearby stars appear to shift position against the background of more
distant stars. This apparent angular displacement is called **stellar parallax**.

### Proof of the Parallax Formula

Consider a nearby star at distance $d$ from the Sun. As Earth moves from one side of its orbit to
the other (separation $2\;\mathrm{AU}$), the star appears to shift by an angle $2p$, where $p$ is
the **parallax angle** measured in arcseconds.

For small angles, $\tan p \approx p$ (in radians):

$$\tan p = \frac{1\;\mathrm{AU}}{d} \approx p$$

Converting $p$ from arcseconds to radians:

$$p\;(\mathrm{rad}) = p\;('') \times \frac{\pi}{648,000} = \frac{p\;('')}{206,265}$$

Therefore:

$$d = \frac{1\;\mathrm{AU}}{p\;(\mathrm{rad})} = \frac{206,265\;\mathrm{AU}}{p\;('')}$$

By definition, when $p = 1''$, $d = 1$ pc $= 206,265$ AU. Hence:

$$\boxed{d\;(\mathrm{pc}) = \frac{1}{p\;('')}}$$

$\square$

**Intuition.** The parsec is defined so that the formula becomes trivially simple: a star with a
parallax angle of 1 arcsecond is at a distance of 1 parsec. The inverse relationship means that
closer stars have larger parallax angles, making them easier to measure.

### Limitations of the Parallax Method

- Parallax angles are extremely small ($p \lt 1''$ for all stars), making precise measurement
  difficult.
- Ground-based observations are limited to $d \lt 100$ pc (atmospheric turbulence limits angular
  resolution).
- The **Hipparcos** satellite extended this to $\sim 1000$ pc; **Gaia** extends to $\sim 10,000$ pc.
- Beyond these distances, parallax is too small to measure reliably.

### Standard Candles and the Cosmic Distance Ladder

**Definition.** A **standard candle** is an astronomical object of known intrinsic luminosity $L$,
whose distance can be determined by comparing its apparent brightness $b$ with its luminosity.

The cosmic distance ladder uses overlapping methods to measure distances across the universe:

1. **Parallax** --- direct geometric measurement ($0$--$10,000$ pc)
2. **Cepheid variables** --- period--luminosity relation (up to $\sim 30$ Mpc)
3. **Type Ia supernovae** --- nearly constant peak luminosity (up to $\sim 1000$ Mpc)

### Cepheid Variables

Cepheid variables are pulsating stars whose luminosity is directly related to their pulsation
period. The **period--luminosity relation** (discovered by Henrietta Leavitt, 1912) states that
brighter Cepheids have longer periods. By measuring the period of variability, astronomers can
determine the absolute luminosity and hence the distance.

### Type Ia Supernovae

Type Ia supernovae occur when a white dwarf accreting matter from a companion star exceeds the
Chandrasekhar limit ($1.4\;M_\odot$). The resulting thermonuclear explosion releases a remarkably
consistent peak luminosity, making them excellent standard candles for cosmological distances.

### Luminosity and Apparent Brightness

**Definition.** The **luminosity** $L$ of a star is the total power it radiates in all directions
(units: watts, W).

**Definition.** The **apparent brightness** $b$ is the power received per unit area at a distance
$d$ from the star (units: W m$^{-2}$).

By conservation of energy, the luminosity is spread uniformly over a sphere of surface area
$4\pi d^2$:

$$\boxed{b = \frac{L}{4\pi d^2}}$$

This is the **inverse square law for intensity**: doubling the distance reduces the apparent
brightness by a factor of four.

### Stefan-Boltzmann Law

A star approximates a **black body** --- a perfect absorber and emitter of radiation. The power
radiated per unit surface area of a black body at temperature $T$ is:

$$j = \sigma T^4$$

where $\sigma = 5.67 \times 10^{-8}$ W m$^{-2}$ K$^{-4}$ is the **Stefan-Boltzmann constant**.

For a star of radius $r$ and surface temperature $T$, the total luminosity is:

$$\boxed{L = 4\pi r^2 \sigma T^4}$$

### Proof of the Radius Formula

Starting from $b = L/(4\pi d^2)$ and $L = 4\pi r^2 \sigma T^4$:

$$b = \frac{4\pi r^2 \sigma T^4}{4\pi d^2} = \frac{r^2 \sigma T^4}{d^2}$$

Rearranging for the radius:

$$\boxed{r = d\sqrt{\frac{b}{\sigma T^4}}}$$

This allows us to determine a star's radius from its distance, apparent brightness, and surface
temperature. $\square$

**Intuition.** A star's luminosity depends on two factors: how hot it is ($T^4$) and how large it is
($r^2$). A cool red giant can be more luminous than a hot blue star if it is sufficiently large ---
this is why giants and supergiants occupy the upper-right region of the H-R diagram.

### Wien's Displacement Law

The wavelength at which a black body emits maximum radiation is inversely proportional to its
temperature:

$$\boxed{\lambda_{\max} T = 2.898 \times 10^{-3}\;\mathrm{m K}}$$

where $\lambda_{\max}$ is in metres and $T$ is in kelvin.

This result follows from differentiating Planck's radiation law $B(\lambda, T)$ with respect to
$\lambda$ and setting the derivative to zero, which yields the transcendental equation
$x = 5(1 - e^{-x})$ where $x = hc/(\lambda_{\max} kT)$. The numerical solution gives the constant
$2.898 \times 10^{-3}$ m K.

**Intuition.** Hotter objects emit radiation peaked at shorter wavelengths. The Sun
($T \approx 5800$ K) peaks in the visible range ($\lambda_{\max} \approx 500$ nm). A cool red star
($T \approx 3000$ K) peaks in the infrared. This is why hotter stars appear bluer and cooler stars
appear redder.

:::info Board-Specific

- **AQA** requires Wien's law, Stefan-Boltzmann law, and the inverse square law explicitly.
- **Edexcel** emphasises the period--luminosity relation for Cepheids and the use of Type Ia
  supernovae as standard candles.
- **OCR (A)** includes parallax, standard candles, and black body radiation in the Turning Points
  option. :::

## 2. Stellar Evolution

### Star Formation

Stars form from the gravitational collapse of regions within **nebulae** --- vast clouds of gas
(mostly hydrogen) and dust. For a cloud to collapse under its own gravity, its gravitational
potential energy must exceed the thermal kinetic energy of the gas:

$$|E_{\mathrm{grav}}| \gt E_{\mathrm{thermal}}$$

When this condition is met, the cloud fragment collapses and heats up. Conservation of angular
momentum causes it to spin faster and flatten into a protoplanetary disk. The core temperature rises
until hydrogen fusion ignites --- a star is born.

### The Hertzsprung--Russell (H-R) Diagram

The H-R diagram plots stars according to their **luminosity** (or absolute magnitude) on the
vertical axis against their **surface temperature** (or spectral class) on the horizontal axis.
Temperature **decreases** from left to right.

Key regions:

- **Main sequence** --- a diagonal band from upper-left (hot, luminous O-type stars) to lower-right
  (cool, dim M-type stars). Stars spend $\sim 90\%$ of their lifetime here.
- **Red giants** --- luminous but cool, located in the upper-right.
- **White dwarfs** --- hot but very dim, located in the lower-left.
- **Red supergiants** --- extremely luminous and cool, at the top-right.

### Main Sequence Stars

Main sequence stars are in **hydrostatic equilibrium**: gravitational collapse is balanced by the
radiation pressure from nuclear fusion in the core.

Two fusion processes convert hydrogen to helium:

1. **Proton--proton (pp) chain** --- dominant in stars with $T \lt 1.5 \times 10^7$ K (like the
   Sun):

   $$4\,{}^{1}\mathrm{H} \rightarrow {}^{4}\mathrm{He} + 2e^+ + 2\nu_e + 2\gamma$$

   Energy released per reaction: $\sim 26.7$ MeV.

2. **CNO cycle** --- dominant in stars with $T \gt 1.5 \times 10^7$ K (more massive stars). Uses
   carbon, nitrogen, and oxygen as catalysts. This process is more temperature-sensitive than the pp
   chain, leading to convective cores in massive stars.

The **mass--luminosity relation** for main sequence stars:

$$\boxed{L \propto M^{3.5}}$$

A star of twice the solar mass has a luminosity roughly $2^{3.5} \approx 11$ times that of the Sun,
and therefore exhausts its fuel much faster. More massive stars have **shorter** lifetimes.

### Evolution of Low-Mass Stars ($M \lt 8\;M_\odot$)

1. **Main sequence** --- hydrogen fuses to helium in the core ($\sim 10^{10}$ years for solar-mass
   stars).
2. **Red giant** --- hydrogen shell burning causes the envelope to expand and cool. A helium flash
   ignites helium fusion in the core (${}^{4}\mathrm{He}$ to ${}^{12}\mathrm{C}$ and
   ${}^{16}\mathrm{O}$).
3. **Planetary nebula** --- the outer layers are gently ejected, exposing the hot core.
4. **White dwarf** --- the remaining core (typically $\sim 0.6\;M_\odot$), supported by **electron
   degeneracy pressure**. No fusion occurs; it slowly cools over billions of years.

### Evolution of High-Mass Stars ($M \gt 8\;M_\odot$)

1. **Main sequence** --- rapid hydrogen fusion ($\sim 10^7$ years for a $25\;M_\odot$ star).
2. **Red supergiant** --- successive nuclear burning stages create an onion-like shell structure: He
   $\rightarrow$ C $\rightarrow$ Ne $\rightarrow$ O $\rightarrow$ Si $\rightarrow$ Fe. Each stage
   releases less energy and proceeds faster than the last.
3. **Supernova** --- iron core collapse triggers a catastrophic explosion. The core collapses in
   milliseconds, rebounds, and drives a shock wave that ejects the outer layers.
4. **Neutron star** (if remnant mass $\lt 3\;M_\odot$) --- supported by **neutron degeneracy
   pressure**. Typical radius $\sim 10$ km, density $\sim 10^{17}$ kg m$^{-3}$.
5. **Black hole** (if remnant mass $\gt 3\;M_\odot$) --- no known force can halt gravitational
   collapse.

### The Chandrasekhar Limit

**Definition.** The **Chandrasekhar limit** ($\approx 1.4\;M_\odot$) is the maximum mass of a white
dwarf that can be supported by electron degeneracy pressure.

If a white dwarf exceeds this mass (e.g., by accreting matter from a binary companion), it undergoes
a **Type Ia supernova** --- the entire star is destroyed in a thermonuclear explosion.

### Supernovae

**Type Ia supernova:**

- White dwarf exceeds the Chandrasekhar limit
- No hydrogen lines in the spectrum (hydrogen has been consumed or stripped)
- Consistent peak luminosity (standard candle)
- Complete destruction of the star

**Type II supernova:**

- Core collapse of a massive star ($M \gt 8\;M_\odot$)
- Hydrogen lines present in the spectrum
- Variable luminosity (not a reliable standard candle)
- Leaves behind a neutron star or black hole

Both types are crucial for **nucleosynthesis** --- creating elements heavier than iron and
dispersing them into the interstellar medium, enriching future generations of stars and planets.

### Neutron Stars and Black Holes

**Neutron stars** have radii of $\sim 10$ km and densities comparable to an atomic nucleus.
**Pulsars** are rapidly rotating neutron stars that emit beams of electromagnetic radiation from
their magnetic poles.

**Black holes** are regions of spacetime from which nothing, not even light, can escape. The
boundary is the **event horizon**, at the **Schwarzschild radius**.

### Proof of the Schwarzschild Radius

The Schwarzschild radius is found by setting the escape velocity equal to the speed of light $c$:

$$v_e = \sqrt{\frac{2GM}{r}} = c$$

Squaring both sides and solving for $r$:

$$\frac{2GM}{r_s} = c^2$$

$$\boxed{r_s = \frac{2GM}{c^2}}$$

$\square$

**Intuition.** The Schwarzschild radius defines the event horizon --- the boundary within which the
escape velocity exceeds the speed of light. For the Sun, $r_s \approx 3$ km; for Earth,
$r_s \approx 9$ mm. This shows how extraordinarily compact a black hole must be: the entire mass of
the Sun compressed into a sphere smaller than a small city.

:::info Board-Specific

- **AQA** requires detailed knowledge of stellar evolution pathways, the H-R diagram, and the
  Chandrasekhar limit.
- **Edexcel** emphasises supernovae including light curves, and the use of standard candles.
- **OCR (A)** covers neutron stars and black holes, including the Schwarzschild radius derivation,
  in the Turning Points option. :::

## 3. Cosmology

### Olbers' Paradox

**Olbers' paradox** asks: if the universe is infinite, static, and uniformly filled with stars, why
is the night sky dark?

In an infinite, static universe with uniformly distributed stars, every line of sight should
eventually intersect the surface of a star, making the entire night sky as bright as the surface of
a typical star. The resolution of the paradox relies on three key facts:

1. The universe has a **finite age** ($\sim 13.8$ billion years), so we can only observe light from
   within our **observable universe**.
2. The universe is **expanding**, which redshifts the light from distant objects, reducing their
   energy density.
3. Stars have **finite lifetimes** and the universe does not contain enough energy to keep every
   point in the sky illuminated at stellar surface brightness.

### Doppler Effect for Light

When a light source moves relative to an observer, the observed wavelength is shifted. For recession
speeds much less than the speed of light ($v \ll c$):

$$\boxed{\frac{\Delta \lambda}{\lambda} = \frac{v}{c}}$$

where $\Delta \lambda = \lambda_{\mathrm{obs}} - \lambda_{\mathrm{emit}}$ is the change in
wavelength.

- **Redshift** ($\Delta \lambda \gt 0$): source receding from the observer
- **Blueshift** ($\Delta \lambda \lt 0$): source approaching the observer

For cosmological redshifts, the **redshift parameter** $z$ is defined as:

$$z = \frac{\lambda_{\mathrm{obs}} - \lambda_{\mathrm{emit}}}{\lambda_{\mathrm{emit}}}$$

so that $\Delta \lambda / \lambda = z = v/c$ for $v \ll c$.

### Hubble's Law

Edwin Hubble (1929) discovered a linear relationship between the recession velocity of galaxies and
their distance:

$$\boxed{v = H_0 d}$$

where $H_0 \approx 70$ km s$^{-1}$ Mpc$^{-1}$ is the **Hubble constant**. This law implies that the
universe is expanding uniformly --- more distant galaxies recede faster because there is more space
between them to expand.

### Proof of the Hubble Time

If the expansion has been at a constant rate, the time since all galaxies were at a single point
(the Big Bang) is:

$$t_H = \frac{1}{H_0}$$

With $H_0 = 70$ km s$^{-1}$ Mpc$^{-1}$:

$$H_0 = \frac{70 \times 10^3\;\mathrm{m s}^{-1}}{3.09 \times 10^{22}\;\mathrm{m}} = 2.27 \times 10^{-18}\;\mathrm{s}^{-1}$$

$$t_H = \frac{1}{2.27 \times 10^{-18}} = 4.41 \times 10^{17}\;\mathrm{s} \approx 14.0\;\mathrm{billion years}$$

$$\boxed{t_H \approx \frac{1}{H_0} \approx 14\;\mathrm{Gyr}}$$

$\square$

**Intuition.** Hubble's law tells us that more distant galaxies recede faster. If we "rewind" the
expansion, all matter converges to a single point at a finite time in the past --- the Big Bang. The
Hubble time gives a rough upper estimate of the age of the universe. The actual age is slightly less
because the expansion rate has not been constant (deceleration due to gravity, then acceleration due
to dark energy).

### Evidence for the Big Bang

Three major lines of evidence support the Big Bang model:

1. **Hubble's law** --- the expansion of the universe implies a hot, dense beginning.
2. **Cosmic Microwave Background (CMB)** --- the afterglow of the initial hot, dense phase,
   discovered by Penzias and Wilson (1965).
3. **Abundance of light elements** --- the observed ratios of hydrogen ($\sim 75\%$), helium
   ($\sim 25\%$), deuterium, and lithium match predictions from Big Bang nucleosynthesis. No other
   model successfully predicts these abundances.

### The Cosmic Microwave Background (CMB)

**Definition.** The **Cosmic Microwave Background** is the remnant electromagnetic radiation from
the early universe, emitted when the universe became transparent at the recombination epoch
($\sim 380,000$ years after the Big Bang, $T \approx 3000$ K).

Key properties:

- **Temperature:** $T \approx 2.725$ K (the radiation has been redshifted by a factor of $\sim 1100$
  since emission)
- **Spectrum:** a near-perfect black body curve peaking in the microwave region
- **Isotropy:** uniform to one part in $10^5$, with tiny anisotropies that are the seeds of large-
  scale structure formation

Using Wien's law to find the peak wavelength:

$$\lambda_{\max} = \frac{2.898 \times 10^{-3}}{2.725} = 1.06 \times 10^{-3}\;\mathrm{m} = 1.06\;\mathrm{mm}$$

This confirms the microwave nature of the CMB, which was initially detected as excess noise at a
wavelength of 7.35 cm by Penzias and Wilson.

### Expansion of the Universe

The expansion of the universe is not galaxies moving through space, but rather the expansion of
space itself. This is described by the **scale factor** $a(t)$, where $a = 1$ today. As the universe
expands, photon wavelengths are stretched, producing cosmological redshift:

$$1 + z = \frac{a_{\mathrm{now}}}{a_{\mathrm{then}}}$$

:::info Board-Specific

- **AQA** requires understanding of Hubble's law, the CMB, and evidence for the Big Bang.
- **Edexcel** includes the Doppler effect for electromagnetic radiation and redshift calculations.
- **OCR (A)** covers Olbers' paradox and its resolution in the Turning Points option. :::

## 4. Telescopes and Observational Astronomy

### Refracting Telescopes

A refracting telescope uses a converging (convex) **objective lens** to form a real image, which is
then magnified by a converging **eyepiece lens**.

The **angular magnification** is the ratio of the angle subtended by the image to the angle
subtended by the object at the unaided eye:

$$\boxed{M = \frac{\theta'}{\theta} = \frac{f_o}{f_e}}$$

where $f_o$ is the focal length of the objective and $f_e$ is the focal length of the eyepiece.

**Advantages of refracting telescopes:**

- Sharp images with good contrast
- Rugged, sealed tube design (no air currents inside)
- Durable alignment

**Disadvantages of refracting telescopes:**

- **Chromatic aberration** --- different wavelengths refract by different amounts, producing colour
  fringes (corrected with achromatic doublets, but not perfectly)
- **Spherical aberration** --- marginal rays focus at different points from paraxial rays
- Expensive to manufacture large, defect-free lenses
- Heavy lenses can distort under their own weight, limiting practical sizes to $\sim 1$ m diameter

### Reflecting Telescopes

A reflecting telescope uses a concave **primary mirror** to collect and focus light. The most common
designs are:

- **Newtonian** --- flat secondary mirror at 45 degrees redirects light to the eyepiece at the side
- **Cassegrain** --- convex secondary mirror reflects light through a hole in the primary mirror

**Advantages of reflecting telescopes:**

- No chromatic aberration (mirrors reflect all wavelengths equally)
- Cheaper to manufacture large mirrors than large lenses
- Easier to support structurally (mirrors can be supported from behind)
- Practically no limit on aperture size (modern telescopes exceed 10 m)

**Disadvantages of reflecting telescopes:**

- Spherical aberration (corrected by using parabolic mirrors)
- Central obstruction from the secondary mirror reduces light-gathering and introduces diffraction
  spikes
- Requires regular alignment of optics (collimation)
- Mirror surfaces degrade over time and require re-coating

### Ray Diagrams

For a **converging lens**, the three principal rays are:

1. A ray parallel to the principal axis refracts through the far focal point $F'$.
2. A ray through the optical centre passes straight through undeviated.
3. A ray through the near focal point $F$ refracts parallel to the principal axis.

For a **concave (converging) mirror**:

1. A ray parallel to the principal axis reflects through the focal point $F$.
2. A ray through the centre of curvature $C$ reflects back on itself.
3. A ray through the focal point $F$ reflects parallel to the principal axis.

### Resolving Power and the Rayleigh Criterion

**Definition.** The **resolving power** of a telescope is its ability to distinguish between two
closely spaced objects.

Two point sources are just resolved when the central maximum of one diffraction pattern coincides
with the first minimum of the other. For a circular aperture, this gives the **Rayleigh criterion**:

$$\boxed{\theta = \frac{1.22\lambda}{D}}$$

where $\theta$ is the minimum angular resolution (in radians), $\lambda$ is the wavelength of the
observed radiation, and $D$ is the diameter of the aperture.

### Proof of the Rayleigh Criterion

For a circular aperture of diameter $D$, the diffraction pattern is an Airy disk. The angular
position of the first minimum is given by:

$$\sin\theta = 1.22\frac{\lambda}{D}$$

For small angles ($\theta \ll 1$ rad), $\sin\theta \approx \theta$:

$$\boxed{\theta \approx \frac{1.22\lambda}{D}}$$

$\square$

**Intuition.** A larger aperture produces a narrower diffraction pattern, allowing finer detail to
be resolved. Shorter wavelengths also improve resolution --- this is why electron microscopes (de
Broglie wavelengths of $\sim 0.01$ nm) resolve far finer detail than optical microscopes
($\lambda \approx 500$ nm).

### Why Large Telescopes Are Needed

Large telescopes serve two fundamental purposes:

1. **Collecting power** --- proportional to $D^2$. A larger aperture collects more light, enabling
   the observation of fainter objects. The collecting power relative to the human eye (diameter
   $\sim 5$ mm) is:

   $$\mathrm{Collecting power ratio} = \left(\frac{D}{d_{\mathrm{eye}}}\right)^2$$

2. **Resolving power** --- proportional to $1/D$. A larger aperture gives smaller minimum angular
   resolution $\theta$, allowing finer detail to be distinguished.

These are the two fundamental reasons why astronomers continually push for larger telescopes.

### Radio Telescopes

Radio telescopes detect radio waves (wavelengths from $\sim 1$ mm to $\sim 10$ m) using large
parabolic dishes.

**Advantages:**

- Operate 24 hours a day (unaffected by daylight or clouds)
- Detect non-thermal emission (e.g., synchrotron radiation from cosmic-ray electrons)
- Radio waves penetrate interstellar dust clouds that block visible light
- **Interferometry** --- linking multiple dishes (e.g., the Very Large Array) achieves angular
  resolution equivalent to a single dish of diameter equal to the maximum baseline separation

**Disadvantages:**

- Poor inherent resolution due to long wavelengths ($\theta \propto \lambda/D$)
- Require very large single dishes or interferometer arrays to achieve useful resolution
- Susceptible to radio frequency interference (RFI) from terrestrial sources

### Ground-Based vs Space-Based Telescopes

**Ground-based telescopes:**

- Cheaper to build, launch, and maintain
- Larger apertures are possible (currently up to $\sim 39$ m for the Extremely Large Telescope)
- Limited by atmospheric absorption (UV, X-rays, gamma rays are absorbed)
- Atmospheric turbulence causes **seeing** (image blurring) --- partially mitigated by **adaptive
  optics**, which deform the mirror surface in real time to compensate

**Space-based telescopes:**

- No atmospheric absorption --- full access to the electromagnetic spectrum
- No atmospheric turbulence --- diffraction-limited resolution
- Much more expensive to build, launch, and maintain (no servicing missions for most)
- Limited aperture size (constrained by launch vehicle fairings; JWST's primary mirror is 6.5 m)

:::info Board-Specific

- **AQA** requires comparison of reflecting and refracting telescopes, and the Rayleigh criterion.
- **Edexcel** emphasises angular magnification and the advantages of large-diameter telescopes.
- **OCR (A)** covers radio telescopes and the comparison of ground-based and space-based
  observatories. :::

## 5. Problems

**Problem 1.** A star has a parallax angle of $0.05''$. Calculate its distance in parsecs and
light-years.

<details>
<summary>Hint</summary>

Using $d = 1/p$: $d = 1/0.05 = 20$ pc.

Converting to light-years: $20 \times 3.26 = 65.2$ ly.

</details>

**Problem 2.** A star has an apparent brightness of $2.0 \times 10^{-8}$ W m$^{-2}$ and a luminosity
of $5.0 \times 10^{29}$ W. Calculate its distance in metres and in parsecs.

<details>
<summary>Hint</summary>

From $b = L/(4\pi d^2)$:

$$d^2 = \frac{L}{4\pi b} = \frac{5.0 \times 10^{29}}{4\pi \times 2.0 \times 10^{-8}} = \frac{5.0 \times 10^{29}}{2.513 \times 10^{-7}} = 1.99 \times 10^{36}$$

$$d = \sqrt{1.99 \times 10^{36}} = 1.41 \times 10^{18}\;\mathrm{m}$$

Converting to parsecs: $d = 1.41 \times 10^{18}/(3.09 \times 10^{16}) = 45.6$ pc.

</details>

**Problem 3.** The Sun has a surface temperature of $5800$ K and a luminosity of
$3.85 \times 10^{26}$ W. Calculate its radius.

<details>
<summary>Hint</summary>

From $L = 4\pi r^2 \sigma T^4$:

$$r^2 = \frac{L}{4\pi \sigma T^4} = \frac{3.85 \times 10^{26}}{4\pi \times 5.67 \times 10^{-8} \times (5800)^4}$$

$(5800)^4 = 1.133 \times 10^{15}$ K$^4$

$$r^2 = \frac{3.85 \times 10^{26}}{4\pi \times 5.67 \times 10^{-8} \times 1.133 \times 10^{15}} = \frac{3.85 \times 10^{26}}{8.07 \times 10^{8}} = 4.77 \times 10^{17}$$

$$r = 6.91 \times 10^{8}\;\mathrm{m} \approx 6.91 \times 10^{5}\;\mathrm{km}$$

This matches the accepted solar radius of $6.96 \times 10^{8}$ m.

</details>

**Problem 4.** A star has a surface temperature of $12,000$ K. Calculate the wavelength at which it
emits maximum radiation. In which part of the electromagnetic spectrum does this peak lie?

<details>
<summary>Hint</summary>

Using Wien's displacement law:

$$\lambda_{\max} = \frac{2.898 \times 10^{-3}}{T} = \frac{2.898 \times 10^{-3}}{12,000} = 2.42 \times 10^{-7}\;\mathrm{m} = 242\;\mathrm{nm}$$

This is in the **ultraviolet** region. The star appears blue-white to the human eye, with most of
its visible output at shorter (blue) wavelengths.

</details>

**Problem 5.** A galaxy is observed to have a redshift $z = 0.05$. Calculate its recession velocity
(assuming $v \ll c$) and its distance, using $H_0 = 70$ km s$^{-1}$ Mpc$^{-1}$.

<details>
<summary>Hint</summary>

From $z = v/c$: $v = 0.05 \times 3.0 \times 10^8 = 1.5 \times 10^{7}$ m s$^{-1}$ $= 15,000$ km
s$^{-1}$.

From Hubble's law: $d = v/H_0 = 15,000/70 = 214$ Mpc.

</details>

**Problem 6.** A reflecting telescope has a primary mirror of diameter $200$ mm. Calculate its
minimum angular resolution for light of wavelength $550$ nm. Express your answer in arcseconds.

<details>
<summary>Hint</summary>

Using the Rayleigh criterion:

$$\theta = \frac{1.22\lambda}{D} = \frac{1.22 \times 550 \times 10^{-9}}{0.200} = 3.36 \times 10^{-6}\;\mathrm{rad}$$

Converting to arcseconds: $\theta = 3.36 \times 10^{-6} \times 206,265 = 0.69''$.

</details>

**Problem 7.** A Cepheid variable in a nearby galaxy has a pulsation period of $10$ days. Its
absolute magnitude is $M = -4.0$ and its apparent magnitude is $m = 20.0$. Calculate the distance to
the galaxy using the distance modulus.

<details>
<summary>Hint</summary>

Using the distance modulus $m - M = 5\log_{10}(d/10)$ where $d$ is in parsecs:

$$20.0 - (-4.0) = 5\log_{10}\!\left(\frac{d}{10}\right)$$

$$24.0 = 5\log_{10}\!\left(\frac{d}{10}\right)$$

$$\log_{10}\!\left(\frac{d}{10}\right) = 4.8$$

$$\frac{d}{10} = 10^{4.8} = 6.31 \times 10^{4}$$

$$d = 6.31 \times 10^{5}\;\mathrm{pc} = 631\;\mathrm{kpc}$$

</details>

**Problem 8.** Calculate the Schwarzschild radius of a black hole with mass $10\;M_\odot$.
($M_\odot = 1.99 \times 10^{30}$ kg)

<details>
<summary>Hint</summary>

$$r_s = \frac{2GM}{c^2} = \frac{2 \times 6.67 \times 10^{-11} \times 10 \times 1.99 \times 10^{30}}{(3.0 \times 10^8)^2}$$

$$r_s = \frac{2.653 \times 10^{21}}{9.0 \times 10^{16}} = 2.95 \times 10^{4}\;\mathrm{m} \approx 29.5\;\mathrm{km}$$

This is comparable to the size of a large city, containing ten times the mass of the Sun.

</details>

**Problem 9.** Two stars A and B have the same luminosity. Star A has a surface temperature of
$6000$ K and Star B has a surface temperature of $3000$ K. Calculate the ratio of their radii
$r_A / r_B$.

<details>
<summary>Hint</summary>

Since $L_A = L_B$: $4\pi r_A^2 \sigma T_A^4 = 4\pi r_B^2 \sigma T_B^4$

$$r_A^2 T_A^4 = r_B^2 T_B^4$$

$$\left(\frac{r_A}{r_B}\right)^2 = \left(\frac{T_B}{T_A}\right)^4 = \left(\frac{3000}{6000}\right)^4 = \left(\frac{1}{2}\right)^4 = \frac{1}{16}$$

$$\frac{r_A}{r_B} = \frac{1}{4} = 0.25$$

Star A is four times smaller in radius than Star B, despite being twice as hot. Both emit the same
total power --- Star B compensates for its lower temperature with a much larger surface area.

</details>

**Problem 10.** Estimate the age of the universe using $H_0 = 67.4$ km s$^{-1}$ Mpc$^{-1}$ (Planck
satellite value).

<details>
<summary>Hint</summary>

Convert $H_0$ to SI units:

$$H_0 = \frac{67.4 \times 10^{3}}{3.09 \times 10^{22}} = 2.181 \times 10^{-18}\;\mathrm{s}^{-1}$$

$$t_H = \frac{1}{H_0} = \frac{1}{2.181 \times 10^{-18}} = 4.585 \times 10^{17}\;\mathrm{s}$$

Converting to years:

$$t_H = \frac{4.585 \times 10^{17}}{3.156 \times 10^7} = 1.453 \times 10^{10}\;\mathrm{years} \approx 14.5\;\mathrm{Gyr}$$

This is a reasonable estimate of the age of the universe. The accepted value from the Planck data is
$\sim 13.8$ Gyr; the difference arises because the expansion rate has not been constant.

</details>

**Problem 11.** A radio telescope has a dish diameter of $30$ m and operates at a wavelength of $21$
cm (the hydrogen line). Compare its resolving power with an optical telescope of diameter $1.0$ m
operating at $\lambda = 550$ nm. Give the ratio of their minimum resolvable angles.

<details>
<summary>Hint</summary>

Radio telescope:

$$\theta_{\mathrm{radio}} = \frac{1.22 \times 0.21}{30} = 8.54 \times 10^{-3}\;\mathrm{rad} \approx 29.3'$$

Optical telescope:

$$\theta_{\mathrm{optical}} = \frac{1.22 \times 550 \times 10^{-9}}{1.0} = 6.71 \times 10^{-7}\;\mathrm{rad} \approx 0.14''$$

Ratio:

$$\frac{\theta_{\mathrm{radio}}}{\theta_{\mathrm{optical}}} = \frac{8.54 \times 10^{-3}}{6.71 \times 10^{-7}} \approx 12,700$$

The optical telescope resolves about 12,700 times finer detail despite its much smaller aperture,
because the resolving power depends on $\lambda/D$ and the radio wavelength is $\sim 400,000$ times
longer. This illustrates why radio astronomers use interferometry with baselines of many kilometres.

</details>

**Problem 12.** A Type Ia supernova in a distant galaxy has an apparent brightness of
$3.2 \times 10^{-15}$ W m$^{-2}$. Given that Type Ia supernovae have a peak luminosity of
approximately $1.0 \times 10^{36}$ W, calculate the distance to the galaxy in megaparsecs.

<details>
<summary>Hint</summary>

From $b = L/(4\pi d^2)$:

$$d^2 = \frac{L}{4\pi b} = \frac{1.0 \times 10^{36}}{4\pi \times 3.2 \times 10^{-15}} = \frac{1.0 \times 10^{36}}{4.02 \times 10^{-14}} = 2.49 \times 10^{49}$$

$$d = 4.99 \times 10^{24}\;\mathrm{m}$$

Converting to megaparsecs: $d = 4.99 \times 10^{24}/(3.09 \times 10^{22}) = 161$ Mpc.

</details>

:::

:::

:::

:::
