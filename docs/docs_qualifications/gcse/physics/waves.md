---
title: Waves
date: 2026-04-14
tags:
  - Physics
  - GCSE
categories:
  - Physics
slug: waves
---

## Waves

:::info Board Coverage AQA Paper 2 | Edexcel Paper 1 | OCR A Gateway P3 & P6 | WJEC P3 :::

<PhetSimulation simulationId="waves-on-a-string" title="Waves on a String" />

Explore the simulation above to develop intuition for this topic.

## 1. Properties of Waves

### 1.1 Transverse and Longitudinal Waves

**Transverse waves:** The oscillations are perpendicular to the direction of energy transfer.

Examples: electromagnetic waves, waves on a string, water waves.

**Longitudinal waves:** The oscillations are parallel to the direction of energy transfer.

Examples: sound waves, pressure waves in a spring (slinky).

### 1.2 Why the Distinction Matters

The distinction between transverse and longitudinal waves is not merely taxonomic. It determines
which polarisation phenomena are possible (only transverse waves can be polarised), which detection
mechanisms work, and how the wave interacts with matter. Sound is longitudinal, so it cannot be
polarised. Light is transverse, which is why polarising sunglasses can block glare by absorbing one
polarisation component while transmitting the other.

### 1.3 Wave Terminology

| Term       | Definition                                                 | Symbol/Unit   |
| ---------- | ---------------------------------------------------------- | ------------- |
| Amplitude  | Maximum displacement from the equilibrium position         | $A$ (m)       |
| Wavelength | Distance between two adjacent identical points on the wave | $\lambda$ (m) |
| Frequency  | Number of complete oscillations per second                 | $f$ (Hz)      |
| Period     | Time for one complete oscillation                          | $T$ (s)       |
| Wave speed | Distance travelled by the wave per unit time               | $v$ (m/s)     |

**Relationship between frequency and period:**

$$f = \frac{1}{T}$$

### 1.4 The Wave Equation

$$v = f\lambda$$

**Worked Example.** A wave has a frequency of 250 Hz and a wavelength of 1.4 m. Find the wave speed.

$$v = f\lambda = 250 \times 1.4 = 350 \mathrm{ m/s}$$

**Worked Example.** Sound travels at 330 m/s in air. A note has a wavelength of 0.66 m. Find its
frequency.

$$f = \frac{v}{\lambda} = \frac{330}{0.66} = 500 \mathrm{ Hz}$$

### 1.5 Derivation of the Wave Equation

Consider a wave moving at speed $v$. In one period $T$, each wavefront travels a distance equal to
one wavelength $\lambda$. Therefore:

$$v = \frac{\mathrm{distance}}{\mathrm{time}} = \frac{\lambda}{T} = \lambda \times \frac{1}{T} = \lambda f$$

This is not an approximation; it is exact for any periodic wave.

## 2. Measuring the Speed of Waves

### 2.1 Required Practical: Speed of Water Waves

**Method:**

1. Set up a ripple tank with a wave source.
2. Measure the wavelength by measuring the distance across several wavelengths and dividing.
3. Time the wave over a measured distance to find the speed.
4. Use $v = f\lambda$ to find frequency, or measure the frequency of the strobe light.

### 2.2 Required Practical: Speed of Sound in Air

**Method 1 (echo method):**

1. Stand a known distance from a large wall.
2. Clap and time the echo.
3. Speed $= \frac{2d}{t}$ (the sound travels there and back).

**Method 2 (oscilloscope method):**

1. Connect a microphone to an oscilloscope.
2. Place two microphones a known distance apart.
3. Measure the time delay between the two signals on the oscilloscope.
4. Speed $= \frac{d}{\Delta t}$.

**Worked Example.** Two microphones are placed 3.4 m apart. The oscilloscope shows a time difference
of 0.01 s. Calculate the speed of sound.

$$v = \frac{d}{\Delta t} = \frac{3.4}{0.01} = 340 \mathrm{ m/s}$$

### 2.3 Improving Accuracy in Wave Speed Measurements

- Measure across multiple wavelengths and divide (reduces the impact of random error in the position
  measurement).
- Repeat the measurement several times and calculate a mean.
- Use a strobe light to "freeze" the wave pattern, making wavelength measurement more precise.
- Ensure the microphone is at the same height as the sound source to avoid path-length errors.

## 3. Reflection and Refraction

### 3.1 Reflection

**Law of reflection:** The angle of incidence equals the angle of reflection, measured from the
normal.

$$\theta_i = \theta_r$$

The normal is an imaginary line perpendicular to the reflecting surface at the point of incidence.

### 3.2 Why Reflection Obeys This Law

When a wavefront strikes a flat surface, each point on the wavefront acts as a new source of
circular wavelets (Huygens' principle). The wavelets from points that reach the surface first have
traveled further by the time later points arrive. The envelope of all these wavelets forms the
reflected wavefront. Geometry dictates that the reflected angle equals the incident angle.

### 3.3 Refraction

**Refraction** is the change in direction of a wave when it crosses a boundary between two media
where the wave speed changes.

**Rules:**

- When a wave slows down, it bends **towards** the normal
- When a wave speeds up, it bends **away** from the normal
- The frequency stays the same; the wavelength changes

**Example:** Light entering glass from air slows down (from $3 \times 10^8$ m/s to approximately
$2 \times 10^8$ m/s). It bends towards the normal.

### 3.4 Why Frequency Does Not Change During Refraction

The frequency of a wave is set by the source. When a wave crosses a boundary, the rate at which
wavefronts arrive at the boundary equals the rate at which they leave (otherwise wavefronts would
pile up or gaps would appear). Therefore the frequency is unchanged. Since $v = f\lambda$ and $f$ is
constant, a decrease in speed produces a proportional decrease in wavelength.

### 3.5 Total Internal Reflection

When light travels from a denser medium to a less dense medium, if the angle of incidence exceeds
the **critical angle**, all the light is reflected back into the denser medium.

$$\sin c = \frac{n_2}{n_1}$$

where $c$ is the critical angle, $n_1$ is the refractive index of the denser medium, and $n_2$ is
the refractive index of the less dense medium.

**Applications of total internal reflection:**

- Optical fibres (used in endoscopes and telecommunications)
- Prisms in binoculars and periscopes

### 3.6 How Optical Fibres Work

An optical fibre consists of a core with a higher refractive index surrounded by a cladding with a
lower refractive index. Light entering the fibre at an angle greater than the critical angle
undergoes repeated total internal reflection and travels along the fibre with minimal loss. This is
the basis of modern telecommunications: millions of phone calls and internet data streams are
carried by light pulses through bundles of optical fibres.

**Signal degradation:** Over long distances, some light is absorbed by the fibre material, and some
leaks out at bends. The signal can also spread out (dispersion), causing pulses to overlap.
Repeaters are placed at intervals to regenerate the signal.

## 4. The Electromagnetic Spectrum

### 4.1 Overview

Electromagnetic waves are transverse waves that travel at the speed of light in a vacuum:

$$c = 3.0 \times 10^8 \mathrm{ m/s}$$

| Type          | Wavelength range                           | Uses                             | Dangers                          |
| ------------- | ------------------------------------------ | -------------------------------- | -------------------------------- |
| Radio         | $\gt 10^{-1}$ m                            | Broadcasting, communication      | Generally safe                   |
| Microwave     | $10^{-3}$ to $10^{-1}$ m                   | Cooking, satellite communication | Heating of body tissues          |
| Infrared      | $10^{-7}$ to $10^{-3}$ m                   | Remote controls, thermal imaging | Skin burns                       |
| Visible light | $4 \times 10^{-7}$ to $7 \times 10^{-7}$ m | Vision, fibre optics             | Very bright light damages retina |
| Ultraviolet   | $10^{-8}$ to $4 \times 10^{-7}$ m          | Fluorescent lamps, sunbeds       | Skin cancer, eye damage          |
| X-ray         | $10^{-10}$ to $10^{-8}$ m                  | Medical imaging, security        | Cell damage, cancer              |
| Gamma ray     | $\lt 10^{-10}$ m                           | Cancer treatment, sterilisation  | Cell damage, cancer, mutation    |

### 4.2 Key Properties

- All electromagnetic waves travel at the same speed in a vacuum
- They all transfer energy
- They can all travel through a vacuum
- They are all transverse
- They can all be reflected, refracted, and diffracted

### 4.3 Why Higher Frequency Means Higher Energy

The energy of an electromagnetic wave is carried by its photons:

$$E = hf$$

where $h$ is Planck's constant ($6.63 \times 10^{-34}$ J s). Higher frequency means higher energy
per photon. This is why gamma rays and X-rays are dangerous (high energy per photon can damage DNA)
while radio waves are harmless (the energy per photon is far too low to break chemical bonds).

### 4.4 Applications

**Infrared:** Remote controls, thermal imaging cameras, optical fibre communication.

**Microwave:** Mobile phone signals, satellite TV, microwave ovens.

**X-ray:** Medical radiography, CT scans, airport security scanners.

**Gamma ray:** Sterilising medical equipment, treating cancer (radiotherapy), killing bacteria in
food.

### 4.5 Uses and Dangers in Detail (Higher Tier)

**Microwave ovens:** Microwaves at a frequency of about 2.45 GHz are absorbed by water molecules,
causing them to vibrate and heat up. The wavelength (about 12 cm) is chosen so that the microwaves
penetrate several centimetres into food, ensuring even heating.

**Mobile phones:** Use microwave frequencies (typically 0.8--2.6 GHz). The power output is very low
(typically 0.1--2 W), and there is no conclusive evidence that this level of exposure is harmful.
However, the long-term effects of widespread mobile phone use are still being studied.

**Ultraviolet:** Causes tanning and vitamin D production at low doses, but at high doses causes skin
cancer and cataracts. Sunscreen works by absorbing UV radiation before it reaches the skin.

## 5. Sound Waves

### 5.1 Production and Detection

Sound waves are longitudinal waves produced by vibrating objects. They require a medium to travel
through (they cannot travel through a vacuum).

**Detection:** Microphones convert sound waves to electrical signals. The human ear detects sound
waves between approximately 20 Hz and 20,000 Hz.

### 5.2 Why Sound Cannot Travel Through a Vacuum

Sound is a mechanical wave: it propagates by particles colliding with their neighbours and passing
on the disturbance. In a vacuum, there are no particles to collide, so the disturbance cannot
propagate. Light, being an electromagnetic wave, does not require a medium, which is why we can see
the Sun but cannot hear it.

### 5.3 Properties of Sound

- **Pitch:** Determined by frequency. Higher frequency = higher pitch.
- **Loudness:** Determined by amplitude. Larger amplitude = louder sound.
- **Quality (timbre):** Determined by the waveform (overtones present).

### 5.4 The Human Ear: Frequency Range and Sensitivity

The human ear can detect frequencies from about 20 Hz to 20,000 Hz. This range decreases with age,
particularly at the upper end. The ear is most sensitive to frequencies around 3000--4000 Hz, which
is roughly the frequency range of human speech. The threshold of hearing is $10^{-12}$ W/m$^2$ at
1000 Hz, and the threshold of pain is about 1 W/m$^2$ -- a range of $10^{12}$, which is why the
decibel (logarithmic) scale is used.

### 5.5 Ultrasound

**Ultrasound** is sound with a frequency above 20,000 Hz (beyond the range of human hearing).

**Applications:**

- Medical imaging (foetal scanning): ultrasound pulses are sent into the body, and the reflected
  echoes are used to build up an image. Non-ionising, so safer than X-rays.
- Sonar (measuring depth of water, detecting objects underwater)
- Cleaning delicate objects: high-frequency vibrations dislodge dirt from surfaces.

**Sonar:** A pulse of ultrasound is emitted and the time for the echo to return is measured.

$$d = \frac{v \times t}{2}$$

**Worked Example.** A sonar pulse is sent from a ship and the echo returns after 0.4 seconds. If the
speed of sound in water is 1500 m/s, find the depth of the water.

$$d = \frac{1500 \times 0.4}{2} = 300 \mathrm{ m}$$

## 6. Wave Behaviour

### 6.1 Diffraction

**Diffraction** is the spreading of waves when they pass through a gap or around an obstacle.

**Key points:**

- Maximum diffraction occurs when the gap width is approximately equal to the wavelength
- Diffraction is most noticeable when the wavelength is similar to the size of the gap
- All waves can diffract

**Example:** Sound waves diffract around corners (wavelength is comparable to door width). Light
waves do not diffract noticeably around everyday objects because their wavelength is very small.

### 6.2 Why Diffraction Occurs

Diffraction is a consequence of Huygens' principle: every point on a wavefront acts as a source of
secondary wavelets. When a wave passes through a gap, the wavelets from the edges of the gap spread
out into the region behind the gap. If the gap is much wider than the wavelength, most of the wave
passes through undisturbed and only the edges show diffraction. If the gap is comparable to the
wavelength, the secondary wavelets from all parts of the gap overlap significantly, producing a
broad diffraction pattern.

### 6.3 Interference

When two waves meet, they **superpose** (their displacements add together).

- **Constructive interference:** Waves in phase; amplitudes add. Path difference = $n\lambda$.
- **Destructive interference:** Waves in antiphase; amplitudes cancel. Path difference
  $= (n + 0.5)\lambda$.

### 6.4 Path Difference and Phase Difference

Path difference is the difference in distance travelled by two waves from their sources to a given
point. Phase difference is how much one wave is shifted relative to the other, measured in degrees
or radians.

- Path difference $= 0, \lambda, 2\lambda, \ldots$: constructive interference (phase difference
  $= 0, 360^{\circ}, 720^{\circ}, \ldots$).
- Path difference $= 0.5\lambda, 1.5\lambda, \ldots$: destructive interference (phase difference
  $= 180^{\circ}, 540^{\circ}, \ldots$).

### 6.5 Required Practical: Investigating Waves on a String

**Method:**

1. Attach one end of a string to a vibration generator and the other to a pulley with masses.
2. Adjust the frequency until a standing wave with a clear pattern is observed.
3. Measure the wavelength (distance between nodes).
4. Vary the tension (mass) and repeat.
5. Plot a graph of $v$ against $T$ (tension) and show $v \propto \sqrt{T}$.

### 6.6 Standing Waves (Higher Tier)

A standing wave is formed when two waves of the same frequency and amplitude travel in opposite
directions and superpose. The result is a wave pattern that does not travel: some points (nodes)
remain stationary, while others (antinodes) oscillate with maximum amplitude.

**String fixed at both ends:**

- Fundamental frequency (first harmonic): $f_1 = \frac{v}{2L}$
- Second harmonic: $f_2 = \frac{v}{L} = 2f_1$
- $n$th harmonic: $f_n = \frac{nv}{2L}$

where $L$ is the length of the string and $v$ is the wave speed.

## 7. Lenses

### 7.1 Convex (Converging) Lenses

A convex lens is thicker at the centre than at the edges. It causes parallel rays of light to
converge at the **principal focus**.

**Key terms:**

- **Principal axis:** The line through the centre of the lens
- **Principal focus ($F$):** The point where parallel rays converge
- **Focal length ($f$):** The distance from the centre of the lens to the principal focus

### 7.2 Ray Diagrams

Three standard rays for a convex lens:

1. A ray parallel to the principal axis is refracted through the focus
2. A ray through the centre of the lens continues undeviated
3. A ray through the focus is refracted parallel to the principal axis

### 7.3 Images Formed by Convex Lenses

| Object position      | Image                | Nature                      | Use              |
| -------------------- | -------------------- | --------------------------- | ---------------- |
| Beyond $2f$          | Between $f$ and $2f$ | Real, inverted, diminished  | Camera           |
| At $2f$              | At $2f$              | Real, inverted, same size   | Photocopier      |
| Between $f$ and $2f$ | Beyond $2f$          | Real, inverted, magnified   | Projector        |
| At $f$               | At infinity          | No image                    | Spotlight        |
| Inside $f$           | Same side as object  | Virtual, upright, magnified | Magnifying glass |

### 7.4 Real vs Virtual Images

A **real image** is formed where light rays actually converge. It can be projected onto a screen. A
**virtual image** is formed where light rays only _appear_ to diverge from; no light actually passes
through the image position. It cannot be projected onto a screen.

### 7.5 The Thin Lens Equation

$$\frac{1}{f} = \frac{1}{v} + \frac{1}{u}$$

where $u$ is always positive (object distance), $v$ is positive for real images and negative for
virtual images, and $f$ is positive for convex lenses.

**Magnification:**

$$m = \frac{\mathrm{image height}}{\mathrm{object height}} = \frac{v}{u}$$

### 7.6 Concave (Diverging) Lenses (Higher Tier)

A concave lens is thinner at the centre than at the edges. It causes parallel rays to diverge as if
they came from the principal focus on the same side as the incident light. The image formed is
always virtual, upright, and diminished.

## 8. The Inverse Square Law for Waves

### 8.1 Intensity and Distance

For a point source emitting waves uniformly in all directions, the intensity (power per unit area)
decreases with the square of the distance:

$$I = \frac{P}{4\pi r^2}$$

where $P$ is the power of the source and $r$ is the distance from the source.

This means that doubling the distance from a source reduces the intensity to one-quarter. Tripling
the distance reduces it to one-ninth. This applies to all point sources: sound, light, gamma
radiation, etc.

### 8.2 Worked Example

A source emits 100 W of sound power. Calculate the intensity at distances of 2 m and 6 m.

At 2 m: $I = \frac{100}{4\pi \times 4} = \frac{100}{50.3} \approx 1.99$ W/m$^2$.

At 6 m: $I = \frac{100}{4\pi \times 36} = \frac{100}{452.4} \approx 0.221$ W/m$^2$.

The ratio is $(6/2)^2 = 9$, so the intensity at 6 m is $1/9$ of the intensity at 2 m.

## Common Pitfalls

- **Confusing transverse and longitudinal waves.** Sound is longitudinal; light is transverse.
- **Forgetting to halve the time in echo calculations.** The sound travels there AND back.
- **Using the wrong boundary for refraction.** The normal is always at the boundary.
- **Confusing frequency and wavelength.** Higher frequency means shorter wavelength (since
  $v = f\lambda$).
- **Drawing ray diagrams incorrectly.** Parallel rays must pass through the focus; rays through the
  centre pass straight through.
- **Forgetting that electromagnetic waves all travel at the same speed in a vacuum.** They differ in
  frequency and wavelength.
- **Stating that sound is a transverse wave.** Sound is longitudinal: the particles oscillate
  parallel to the direction of energy transfer.
- **Confusing amplitude and frequency.** Amplitude determines loudness; frequency determines pitch.
- **Forgetting that diffraction requires the gap to be comparable to the wavelength.** A very wide
  gap (compared to the wavelength) produces negligible diffraction.
- **Writing the lens equation incorrectly.** The correct form is
  $\frac{1}{f} = \frac{1}{v} + \frac{1}{u}$, not $\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$.

## Practice Questions

1. A radio wave has a frequency of 90 MHz. Calculate its wavelength. (Speed of light
   $= 3 \times 10^8$ m/s.)

2. Explain the difference between reflection and refraction, using wave terminology.

3. Describe how ultrasound can be used to determine the depth of the sea bed, including a
   calculation.

4. Draw a ray diagram for an object placed between $f$ and $2f$ from a convex lens. Describe the
   image formed.

5. Explain why diffraction of light is not normally observed in everyday life.

6. A concave lens has a focal length of 10 cm. An object is placed 25 cm from the lens. (Note: this
   is a diverging lens -- describe the expected image.)

7. Explain why total internal reflection only occurs when light travels from a denser to a less
   dense medium.

8. Describe one use and one danger for each of: microwaves, infrared, ultraviolet, and X-rays.

9. Water waves in a ripple tank have a wavelength of 3 cm and a frequency of 8 Hz. Calculate the
   wave speed.

10. Explain, with reference to the wave equation, why the wavelength of sound in water is different
    from that in air, given the same frequency.

11. Light of wavelength 500 nm passes through a single slit of width 0.01 mm. Calculate the angle to
    the first minimum. (Hint: use $\sin\theta = \lambda / a$.)

12. A standing wave on a string of length 1.2 m has a fundamental frequency of 100 Hz. Calculate the
    wave speed and the frequency of the third harmonic.

13. Explain how polarising filters can be used to reduce glare from a water surface.

14. An object is placed 8 cm from a convex lens of focal length 12 cm. Calculate the image distance
    and magnification. Describe the image.

15. The intensity of gamma radiation from a source is 800 W/m$^2$ at a distance of 1 m. Calculate
    the intensity at 5 m and explain why gamma radiation is used for sterilising medical equipment.

## 9. Worked Example: Thin Lens Calculation

An object of height 3 cm is placed 15 cm from a convex lens of focal length 10 cm. Find the image
position, magnification, and nature.

Using the thin lens equation:

$$\frac{1}{f} = \frac{1}{v} + \frac{1}{u}$$

$$\frac{1}{10} = \frac{1}{v} + \frac{1}{15}$$

$$\frac{1}{v} = \frac{1}{10} - \frac{1}{15} = \frac{3 - 2}{30} = \frac{1}{30}$$

$$v = 30 \mathrm{ cm}$$

The image is 30 cm from the lens, on the opposite side to the object (real image).

**Magnification:**

$$m = \frac{v}{u} = \frac{30}{15} = 2$$

The image is 2 times larger than the object: $3 \times 2 = 6 \mathrm{ cm}$ tall. Since $m$ is
positive and $v$ is positive, the image is real and inverted.

**Check:** The object is between $f$ and $2f$ (between 10 cm and 20 cm), so the image should be
beyond $2f$, real, inverted, and magnified. Our result
($v = 30 \mathrm{ cm} \gt 2f = 20 \mathrm{ cm}$, inverted, $m = 2$) is consistent.

## 10. Worked Example: Using the Diffraction Grating Equation

A diffraction grating has 600 lines per mm. Light of wavelength $550 \mathrm{ nm}$ is incident
normally. Find the maximum number of bright fringes visible on each side of the central maximum.

$$d = \frac{1}{600 \times 10^3} = 1.667 \times 10^{-6} \mathrm{ m}$$

The maximum order occurs when $\sin\theta = 1$:

$$n_{\max} = \frac{d}{\lambda} = \frac{1.667 \times 10^{-6}}{550 \times 10^{-9}} = 3.03$$

Since $n$ must be an integer, the maximum order is $n = 3$. Including both sides, there are 3
fringes on each side plus the central maximum, giving 7 fringes in total.

## 11. Why Sound Intensity Follows the Inverse Square Law

For a point source emitting sound uniformly in all directions, the power $P$ is spread over a sphere
of surface area $4\pi r^2$. The intensity (power per unit area) is:

$$I = \frac{P}{4\pi r^2}$$

Doubling the distance quadruples the area over which the power is distributed, so the intensity
drops to one-quarter. This is a geometric consequence of living in three-dimensional space and
applies to any radiation emitted from a point source.

## 12. Worked Example: Sound Intensity and Decibel Level

A speaker emits sound with a power output of 0.01 W. Calculate the intensity and decibel level at
distances of 2 m and 8 m.

**At 2 m:**

$$I_2 = \frac{0.01}{4\pi(4)} = \frac{0.01}{50.3} = 1.99 \times 10^{-4} \mathrm{ W/m}^2$$

$$\beta_2 = 10\log_{10}\left(\frac{1.99 \times 10^{-4}}{10^{-12}}\right) = 10\log_{10}(1.99 \times 10^8) = 10 \times 8.30 = 83.0 \mathrm{ dB}$$

**At 8 m:**

$$I_8 = \frac{0.01}{4\pi(64)} = \frac{0.01}{804} = 1.24 \times 10^{-5} \mathrm{ W/m}^2$$

$$\beta_8 = 10\log_{10}\left(\frac{1.24 \times 10^{-5}}{10^{-12}}\right) = 10\log_{10}(1.24 \times 10^7) = 10 \times 7.09 = 70.9 \mathrm{ dB}$$

The distance increased by a factor of 4, so the intensity decreased by a factor of 16 ($4^2$), and
the decibel level decreased by $10\log_{10}(16) = 12.0 \mathrm{ dB}$.

## 13. Polarisation (Higher Tier)

Polarisation is the restriction of wave oscillations to a single plane. Only transverse waves can be
polarised.

**How Polaroid filters work:** A Polaroid filter contains long-chain polymer molecules aligned in
one direction. The filter absorbs the component of the electric field parallel to the polymer chains
and transmits the perpendicular component. The transmitted light is polarised.

**Two Polaroid filters at right angles:** The first filter polarises the light. The second filter
(the analyser) is at $90^{\circ}$ to the first, so it blocks all the polarised light. No light
passes through. This is called **crossed Polaroids**.

**Applications of polarisation:**

- Polarising sunglasses reduce glare by blocking horizontally polarised light reflected from
  surfaces.
- Liquid crystal displays (LCDs) use polarising filters to control which pixels are visible.
- Stress analysis in engineering: transparent plastic models are placed between crossed Polaroids,
  and stress patterns appear as coloured fringes.

## 14. Refractive Index and the Speed of Light

The refractive index $n$ of a medium is defined as:

$$n = \frac{c}{v}$$

where $c$ is the speed of light in a vacuum and $v$ is the speed of light in the medium. Since
$v \lt c$ for all material media, $n \gt 1$ always.

**Example:** The refractive index of glass is 1.5. Find the speed of light in glass.

$$v = \frac{c}{n} = \frac{3 \times 10^8}{1.5} = 2 \times 10^8 \mathrm{ m/s}$$

Light travels two-thirds as fast in glass as in a vacuum. This is why light bends towards the normal
when it enters glass: the part of the wavefront that enters the glass first slows down, causing the
wavefront to rotate.

## 15. Summary Table: Wave Behaviours

| Behaviour    | What Happens                                | Key Equation                            | Everyday Example           |
| ------------ | ------------------------------------------- | --------------------------------------- | -------------------------- |
| Reflection   | Wave bounces off surface                    | $\theta_i = \theta_r$                   | Mirror, echo               |
| Refraction   | Wave changes direction due to speed change  | $n_1\sin\theta_1 = n_2\sin\theta_2$     | Pencil in water looks bent |
| Diffraction  | Wave spreads through gap or around obstacle | Max when $\mathrm{gap} \approx \lambda$ | Sound around a corner      |
| Interference | Waves superpose, creating pattern           | $\Delta x = n\lambda$ (constructive)    | Oil film colours           |
| Polarisation | Oscillations restricted to one plane        | Only transverse waves                   | Sunglasses                 |

## 16. Worked Example: Refractive Index and Critical Angle

Find the critical angle for light travelling from diamond ($n = 2.42$) to water ($n = 1.33$).

$$\sin\theta_c = \frac{n_2}{n_1} = \frac{1.33}{2.42} = 0.5496$$

$$\theta_c = \arcsin(0.5496) = 33.3^{\circ}$$

The critical angle for diamond in water is $33.3^{\circ}$. This is much smaller than for glass to
air ($41.8^{\circ}$), which is why diamond is so effective at trapping light through total internal
reflection, producing its characteristic brilliance.

## 17. Worked Example: Measuring the Speed of Sound with an Echo

A student stands 50 m from a large wall and claps. The echo returns 0.3 s after the clap. Calculate
the speed of sound.

The sound travels to the wall and back, so the total distance is $2 \times 50 = 100 \mathrm{ m}$.

$$v = \frac{d}{t} = \frac{100}{0.3} = 333 \mathrm{ m/s}$$

This is a reasonable value for the speed of sound in air at room temperature.

## 18. Practice Questions (Additional)

16. Light of wavelength $480 \mathrm{ nm}$ passes through a diffraction grating with 400 lines per
    mm. Calculate the angles of the first, second, and third order maxima. How many orders are
    visible in total?

17. An object is placed 20 cm from a concave lens of focal length 15 cm. Calculate the image
    distance and describe the image.

18. Explain why two independent light sources cannot produce a stable interference pattern.

19. A sound wave has frequency $250 \mathrm{ Hz}$ and intensity level $80 \mathrm{ dB}$ at a
    distance of $3 \mathrm{ m}$ from the source. Calculate the intensity at $12 \mathrm{ m}$ and the
    new intensity level in decibels.

20. Water waves in a ripple tank pass through a gap of width $4 \mathrm{ cm}$. The wavelength is
    $2 \mathrm{ cm}$. Describe the diffraction pattern observed. How would the pattern change if the
    gap width were increased to $10 \mathrm{ cm}$?

21. A convex lens has focal length $8 \mathrm{ cm}$. An object of height $2 \mathrm{ cm}$ is placed
    $12 \mathrm{ cm}$ from the lens. Draw a ray diagram (or calculate) to find the image position,
    height, and nature.

22. Explain how an optical fibre transmits light by total internal reflection. Why must the core
    have a higher refractive index than the cladding?

23. The speed of light in a certain type of glass is $1.8 \times 10^8 \mathrm{ m/s}$. Calculate the
    refractive index of the glass and the critical angle for light travelling from this glass to
    air.

24. A standing wave on a string of length $0.8 \mathrm{ m}$ has a fundamental frequency of
    $150 \mathrm{ Hz}$. Calculate the wave speed and the frequencies of the second and third
    harmonics.

25. Describe an experiment to demonstrate that light is a transverse wave using polarising filters.

## Extended Worked Examples

### Example 26: Combining Wave Properties

A water wave has frequency $2.5 \mathrm{ Hz}$ and wavelength $0.4 \mathrm{ m}$. It travels from deep
water (speed $1.0 \mathrm{ m/s}$) into shallow water where its speed is $0.6 \mathrm{ m/s}$.
Calculate the new wavelength and explain what happens to the frequency and amplitude.

**Step 1: Verify the given data**

$$v = f\lambda = 2.5 \times 0.4 = 1.0 \mathrm{ m/s}$$

This matches the deep water speed.

**Step 2: New wavelength in shallow water**

Frequency stays the same when a wave crosses a boundary:

$$\lambda_{\mathrm{shallow}} = \frac{v_{\mathrm{shallow}}}{f} = \frac{0.6}{2.5} = 0.24 \mathrm{ m}$$

**Step 3: What happens to the amplitude**

When the wave slows down and the wavelength decreases, the wave height (amplitude) increases. Energy
is conserved, and since the wave is moving more slowly, the energy is concentrated in a shorter
wavelength.

:::info This is analogous to light bending towards the normal when entering a denser medium. The
decrease in wave speed causes the wavelength to decrease while the frequency remains constant.
:::

### Example 27: Electromagnetic Spectrum Calculations

A radio station broadcasts at a frequency of $97.4 \mathrm{ MHz}$. Calculate (a) the wavelength, and
(b) the time for one complete wave cycle.

**Step 1: Wavelength**

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{97.4 \times 10^6} = 3.08 \mathrm{ m}$$

**Step 2: Period**

$$T = \frac{1}{f} = \frac{1}{97.4 \times 10^6} = 1.027 \times 10^{-8} \mathrm{ s} = 10.27 \mathrm{ ns}$$

### Example 28: Sound Wave Intensity and Distance

A speaker produces a sound intensity of $0.01 \mathrm{ W/m}^2$ at $1 \mathrm{ m}$. Calculate the
intensity at $5 \mathrm{ m}$ and the sound level in decibels at both distances.

**Step 1: Intensity at $5 \mathrm{ m}$ (inverse square law)**

$$\frac{I_2}{I_1} = \frac{r_1^2}{r_2^2} = \frac{1}{25}$$

$$I_2 = \frac{0.01}{25} = 4 \times 10^{-4} \mathrm{ W/m}^2$$

**Step 2: Sound levels**

$$L_1 = 10\log_{10}\left(\frac{0.01}{10^{-12}}\right) = 10\log_{10}(10^{10}) = 100 \mathrm{ dB}$$

$$L_2 = 10\log_{10}\left(\frac{4 \times 10^{-4}}{10^{-12}}\right) = 10\log_{10}(4 \times 10^8) = 10 \times 8.602 = 86.0 \mathrm{ dB}$$

Doubling the distance reduces the level by $6 \mathrm{ dB}$ (from 5 times the distance:
$10\log_{10} 25 \approx 14 \mathrm{ dB}$ reduction).

## Common Pitfalls Extended

### Pitfall 6: Confusing Frequency and Pitch, Amplitude and Loudness

Frequency determines pitch (high frequency = high pitch). Amplitude determines loudness (large
amplitude = loud). These are perceptual descriptions, not physical quantities. The physical
quantities are frequency (Hz) and intensity (W/m^2) or amplitude (m).

### Pitfall 7: Assuming All Waves Require a Medium

Electromagnetic waves (light, radio, X-rays) do NOT require a medium and can travel through a
vacuum. Mechanical waves (sound, water waves, waves on a string) DO require a medium. This is why we
can see the Sun but cannot hear solar flares.

### Pitfall 8: Misidentifying the Wavelength in Diagrams

The wavelength is the distance between two consecutive _identical_ points -- two crests, two
troughs, or any two points one full cycle apart. A common error is to measure from a crest to the
next trough, which is only half a wavelength.

## Additional Practice Problems

26. Light travels from water ($n = 1.33$) into glass ($n = 1.52$) at an angle of incidence of
    $35^\circ$. Calculate the angle of refraction and state whether the light bends towards or away
    from the normal.

27. A person standing $100 \mathrm{ m}$ from a cliff claps their hands. If the speed of sound is
    $340 \mathrm{ m/s}$, how long does it take to hear the echo? What is the minimum distance
    between the person and the cliff to hear a distinct echo (assuming the human ear can distinguish
    sounds $0.1 \mathrm{ s}$ apart)?

28. Compare the properties of transverse and longitudinal waves by completing a table with the
    following headings: direction of oscillation, direction of propagation, example, can be
    polarised, can travel through a vacuum.

29. A microwave oven operates at a frequency of $2.45 \mathrm{ GHz}$. Calculate the wavelength.
    Explain why microwaves are particularly effective at heating food containing water molecules.

30. Describe an experiment to measure the speed of sound in air using two microphones connected to
    an oscilloscope. Explain how you would improve the accuracy of your measurement.

## Practice Problems

<details>
<summary>Question 1: Wave speed calculation</summary>

A wave has a frequency of $250 \mathrm{ Hz}$ and a wavelength of $1.5 \mathrm{ m}$. Calculate the
wave speed.

</details>

<details>
<summary>Answer</summary>

$v = f\lambda = 250 \times 1.5 = 375 \mathrm{ m/s}$.

</details>

<details>
<summary>Question 2: Electromagnetic spectrum</summary>

Arrange the following in order of increasing wavelength: gamma rays, microwaves, visible light,
X-rays, radio waves, ultraviolet, infrared. State which type has the highest frequency and which has
the highest energy.

</details>

<details>
<summary>Answer</summary>

Increasing wavelength: gamma rays, X-rays, ultraviolet, visible light, infrared, microwaves, radio
waves.

Gamma rays have the highest frequency and the highest energy (since $E = hf$).

Radio waves have the longest wavelength and the lowest frequency and energy.

</details>

<details>
<summary>Question 3: Transverse and longitudinal waves</summary>

Compare transverse and longitudinal waves, giving an example of each. Describe how vibrations differ
in the two types.

</details>

<details>
<summary>Answer</summary>

Transverse waves: vibrations are perpendicular to the direction of energy transfer. Example: light
waves, water waves (partially). They have peaks and troughs.

Longitudinal waves: vibrations are parallel to the direction of energy transfer. Example: sound
waves. They have compressions (high pressure) and rarefactions (low pressure).

</details>

<details>
<summary>Question 4: Reflection and refraction</summary>

A ray of light strikes a plane mirror at an angle of $35^\circ$ to the normal. Calculate the angle
of reflection and draw a ray diagram.

</details>

<details>
<summary>Answer</summary>

By the law of reflection, the angle of reflection equals the angle of incidence: $35^\circ$ to the
normal.

The angle between the incident ray and the mirror surface is $90^\circ - 35^\circ = 55^\circ$.

</details>

<details>
<summary>Question 5: Speed of sound experiment</summary>

Two students stand $150 \mathrm{ m}$ apart. One student claps two blocks of wood together, and the
other starts a stopwatch when they see the clap and stops it when they hear the sound. The time
recorded is $0.44 \mathrm{ s}$. Calculate the speed of sound.

</details>

<details>
<summary>Answer</summary>

Speed $= \mathrm{distance}/\mathrm{time} = 150/0.44 = 341 \mathrm{ m/s}$.

This is close to the accepted value of approximately $343 \mathrm{ m/s}$ at $20^\circ\mathrm{C}$.

</details>
