---
title: Waves and Radiation
date: 2026-04-14
tags:
  - Physics
  - Highers
categories:
  - Physics
slug: waves-and-radiation
---

# Waves and Radiation

## Higher Waves

### Wave Properties

A wave is a disturbance that transfers energy without transferring matter.

**Transverse waves:** Oscillations perpendicular to the direction of energy transfer (e.g., light,
water waves).

**Longitudinal waves:** Oscillations parallel to the direction of energy transfer (e.g., sound).

### Why the Distinction Between Transverse and Longitudinal Matters

Only transverse waves can be polarised (the oscillations restricted to a single plane). Sound cannot
be polarised because it is longitudinal. This fact was historically important in establishing that
light is a transverse wave.

**Key Wave Quantities:**

- Wavelength $\lambda$: distance between successive crests (m)
- Frequency $f$: number of complete oscillations per second (Hz)
- Amplitude $A$: maximum displacement from equilibrium (m)
- Period $T$: time for one complete oscillation (s)

**Wave Equation:**

$$v = f\lambda$$

### Derivation of the Wave Equation

In one period $T$, each wavefront travels a distance of one wavelength $\lambda$. Therefore:

$$v = \frac{\text{distance}}{\text{time}} = \frac{\lambda}{T} = \lambda f$$

This is exact for any periodic wave.

**Example:** A sound wave has frequency $440 \text{ Hz}$ and wavelength $0.78 \text{ m}$. Find its
speed.

$$v = f\lambda = 440 \times 0.78 = 343.2 \text{ m/s}$$

### Wave Behaviour

**Reflection:** Angle of incidence equals angle of reflection ($\theta_i = \theta_r$).

**Refraction:** When a wave passes from one medium to another, its speed changes. If it enters at an
angle, the direction changes.

**Snell's Law:**

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

where $n$ is the refractive index of each medium.

**Example:** Light travels from air ($n = 1$) into glass ($n = 1.5$) at an angle of incidence of
$40°$. Find the angle of refraction.

$$1 \times \sin 40° = 1.5 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{\sin 40°}{1.5} = \frac{0.6428}{1.5} = 0.4285$$

$$\theta_2 = \arcsin(0.4285) \approx 25.4°$$

### Why Frequency Does Not Change During Refraction

The rate at which wavefronts arrive at the boundary must equal the rate at which they leave.
Otherwise, wavefronts would pile up or gaps would appear. Therefore the frequency is unchanged.
Since $v = f\lambda$ and $f$ is constant, a decrease in speed produces a proportional decrease in
wavelength.

**Total Internal Reflection:** Occurs when light travels from a denser to a less dense medium and
the angle of incidence exceeds the critical angle.

$$\sin\theta_c = \frac{n_2}{n_1} \quad (n_1 > n_2)$$

**Example:** Find the critical angle for light travelling from glass ($n = 1.5$) to air ($n = 1$).

$$\sin\theta_c = \frac{1}{1.5} = 0.6667$$

$$\theta_c = \arcsin(0.6667) \approx 41.8°$$

### Diffraction

**Diffraction** is the spreading of waves when they pass through a gap or around an obstacle.
Maximum diffraction occurs when the gap width is approximately equal to the wavelength.

### Why Diffraction Depends on Wavelength Relative to Gap Size

By Huygens' principle, every point on a wavefront acts as a source of secondary wavelets. If the gap
is much wider than the wavelength, most of the wavefront passes through undisturbed, and only the
edges show significant spreading. If the gap is comparable to the wavelength, the secondary wavelets
from all parts of the gap overlap significantly, producing broad spreading.

### Interference

- **Constructive interference:** Path difference = $n\lambda$ (waves in phase)
- **Destructive interference:** Path difference = $(n + \frac{1}{2})\lambda$ (waves out of phase)

### Path Difference and Phase Difference

Path difference $\Delta x$ and phase difference $\Delta\phi$ are related by:

$$\Delta\phi = \frac{2\pi}{\lambda} \Delta x$$

A path difference of $\lambda$ corresponds to a phase difference of $2\pi$ (one full cycle).

### Double Slit Experiment

For light of wavelength $\lambda$ passing through two slits separated by distance $d$, observed on a
screen at distance $L$:

**Fringe spacing:** $w = \dfrac{\lambda L}{d}$

**Example:** In a double slit experiment, light of wavelength $600 \text{ nm}$ passes through slits
$0.2 \text{ mm}$ apart. The screen is $1.5 \text{ m}$ away. Find the fringe spacing.

$$w = \frac{\lambda L}{d} = \frac{600 \times 10^{-9} \times 1.5}{0.2 \times 10^{-3}} = \frac{9 \times 10^{-7}}{2 \times 10^{-4}} = 4.5 \times 10^{-3} \text{ m} = 4.5 \text{ mm}$$

### Diffraction Grating

$$d\sin\theta = n\lambda$$

where $d$ is the grating spacing, $\theta$ is the angle to the $n$th order maximum, and $\lambda$ is
the wavelength.

**Example:** A diffraction grating has 500 lines per mm. Light of wavelength $580 \text{ nm}$ is
incident normally. Find the angle of the second-order maximum.

$$d = \frac{1}{500} \text{ mm} = 2 \times 10^{-6} \text{ m}$$

$$\sin\theta = \frac{n\lambda}{d} = \frac{2 \times 580 \times 10^{-9}}{2 \times 10^{-6}} = \frac{1.16 \times 10^{-6}}{2 \times 10^{-6}} = 0.58$$

$$\theta = \arcsin(0.58) \approx 35.4°$$

### The Electromagnetic Spectrum

| Region      | Wavelength Range                   | Typical Source    |
| ----------- | ---------------------------------- | ----------------- |
| Radio       | $> 0.1 \text{ m}$                  | Transmitters      |
| Microwave   | $1 \text{ mm}$ to $0.1 \text{ m}$  | Microwave ovens   |
| Infrared    | $700 \text{ nm}$ to $1 \text{ mm}$ | Warm objects      |
| Visible     | $400 - 700 \text{ nm}$             | The Sun           |
| Ultraviolet | $10 - 400 \text{ nm}$              | UV lamps          |
| X-ray       | $0.01 - 10 \text{ nm}$             | X-ray tubes       |
| Gamma       | $< 0.01 \text{ nm}$                | Radioactive decay |

All EM waves travel at $c = 3 \times 10^8 \text{ m/s}$ in a vacuum.

### Sound Waves

Sound is a longitudinal mechanical wave. It requires a medium.

**Speed of sound:** Approximately $343 \text{ m/s}$ in air at $20°C$.

**Intensity:** $I = \dfrac{P}{A}$ (power per unit area).

**Intensity level (decibels):**

$$\beta = 10\log_{10}\left(\frac{I}{I_0}\right)$$

where $I_0 = 10^{-12} \text{ W/m}^2$ (threshold of hearing).

**Example:** A sound has intensity $10^{-6} \text{ W/m}^2$. Find its intensity level in decibels.

$$\beta = 10\log_{10}\left(\frac{10^{-6}}{10^{-12}}\right) = 10\log_{10}(10^6) = 10 \times 6 = 60 \text{ dB}$$

### Why the Decibel Scale Is Logarithmic

The human ear can detect sounds over a range of intensities spanning $10^{12}$ (from the threshold
of hearing at $10^{-12}$ W/m$^2$ to the threshold of pain at $1$ W/m$^2$). A linear scale would
require numbers ranging from 1 to a trillion. The logarithmic decibel scale compresses this range to
0--120 dB, which is far more manageable.

---

## Higher Radiation

### Nuclear Radiation

**Alpha radiation ($\alpha$):** Helium nucleus ($^4_2\text{He}$). Highly ionising, stopped by paper,
range of a few cm in air.

**Beta radiation ($\beta^-$):** Electron ($^0_{-1}\text{e}$). Moderately ionising, stopped by a few
mm of aluminium.

**Gamma radiation ($\gamma$):** Electromagnetic radiation. Weakly ionising, requires thick lead or
concrete to absorb.

### Penetrating Power vs Ionising Power

There is a trade-off: alpha particles are the most ionising but the least penetrating, while gamma
rays are the least ionising but the most penetrating. This makes sense physically: a highly ionising
particle loses energy rapidly (short range), while a weakly ionising particle retains its energy
over a longer distance.

### Radioactive Decay

Radioactive decay is a random, spontaneous process. The activity $A$ (decay rate) is:

$$A = \lambda N$$

where $\lambda$ is the decay constant and $N$ is the number of undecayed nuclei.

**Half-life ($t_{1/2}$):** Time for half the nuclei to decay.

$$t_{1/2} = \frac{\ln 2}{\lambda}$$

**Decay law:**

$$N = N_0 e^{-\lambda t}$$

$$A = A_0 e^{-\lambda t}$$

**Example:** A radioactive isotope has a half-life of 5 hours. If the initial activity is
$800 \text{ Bq}$, find the activity after 15 hours.

$$\lambda = \frac{\ln 2}{5} = 0.1386 \text{ h}^{-1}$$

$$A = 800 e^{-0.1386 \times 15} = 800 e^{-2.079} = 800 \times 0.125 = 100 \text{ Bq}$$

Or more simply: after 3 half-lives, $A = 800 / 2^3 = 100 \text{ Bq}$.

### Why Radioactive Decay Is Random

Each nucleus decays independently with a fixed probability per unit time. It is impossible to
predict when a specific nucleus will decay. The decay law $N = N_0 e^{-\lambda t}$ describes the
_average_ behaviour of a large number of nuclei, not the behaviour of any individual nucleus. This
is analogous to throwing dice: you cannot predict the outcome of a single throw, but you can predict
the statistical distribution of many throws.

### Nuclear Equations

In a nuclear reaction, both mass number and atomic number are conserved.

**Alpha decay:** $^A_Z\text{X} \to ^{A-4}_{Z-2}\text{Y} + ^4_2\text{He}$

**Beta-minus decay:** $^A_Z\text{X} \to ^A_{Z+1}\text{Y} + ^0_{-1}\text{e} + \bar{\nu}_e$

### Mass-Energy Equivalence

$$E = mc^2$$

**Binding energy:** The energy equivalent of the mass defect (difference between the mass of a
nucleus and the sum of its constituent nucleons).

$$\Delta E = \Delta m \cdot c^2$$

**Example:** The mass defect of helium-4 is $0.0304 \text{ u}$. Find the binding energy in MeV.

$1 \text{ u} = 931.5 \text{ MeV}/c^2$.

$$E = 0.0304 \times 931.5 = 28.3 \text{ MeV}$$

### Why Binding Energy Per Nucleon Peaks at Iron-56

As nuclei get larger, the binding energy per nucleon increases (because the strong nuclear force
binds neighbouring nucleons). However, the strong force has a very short range, so nucleons on
opposite sides of a large nucleus do not attract each other, while the repulsive Coulomb force
between protons acts over the entire nucleus. Beyond iron-56, the Coulomb repulsion dominates, and
adding more nucleons actually decreases the binding energy per nucleon. This is why nuclei heavier
than iron can release energy through fission, and nuclei lighter than iron can release energy
through fusion.

### Background Radiation

Background radiation comes from:

- Radon gas (from rocks and soil)
- Cosmic rays
- Medical sources
- Nuclear waste
- Food and drink (e.g., potassium-40)

---

## Common Pitfalls

1. **Confusing frequency and wavelength:** They are inversely related via $v = f\lambda$.

2. **Forgetting to convert units:** Wavelengths in nm need to be converted to m for calculations.

3. **Snell's law direction:** The refractive index of the first medium multiplies the sine of the
   angle in the first medium.

4. **Total internal reflection conditions:** It only occurs when light travels from a denser medium
   ($n_1$) to a less dense medium ($n_2$).

5. **Decay constant and half-life:** $\lambda = \dfrac{\ln 2}{t_{1/2}}$, not
   $\lambda = \dfrac{1}{t_{1/2}}$.

6. **Confusing path difference and phase difference.** Path difference is in metres; phase
   difference is in radians or degrees.

7. **Using the fringe spacing formula with the wrong variable for slit separation.** $d$ is the slit
   separation, not the distance to the screen.

---

## Practice Questions

1. Light of wavelength $550 \text{ nm}$ is incident on a diffraction grating with 300 lines per mm.
   Find the angles of the first and second order maxima.

2. A sound has intensity level $75 \text{ dB}$. Find its intensity in $\text{W/m}^2$.

3. A radioactive sample has half-life 8 days and initial activity $1200 \text{ Bq}$. Find the
   activity after 32 days.

4. Light travels from water ($n = 1.33$) into air at an angle of $35°$ to the normal. Find the angle
   of refraction. Does total internal reflection occur?

5. The binding energy per nucleon of iron-56 is $8.79 \text{ MeV}$. Find the total binding energy.

6. In a double slit experiment, the fringe spacing is $3.2 \text{ mm}$ when the screen is
   $1.2 \text{ m}$ from the slits. If the slit separation is $0.25 \text{ mm}$, find the wavelength
   of the light.

7. Write the nuclear equation for the beta-minus decay of carbon-14.

8. A wave has frequency $250 \text{ Hz}$ and travels at $1500 \text{ m/s}$. Find the wavelength and
   the phase difference between two points $3 \text{ m}$ apart.

9. A diffraction grating produces a first-order maximum at $20°$ for light of wavelength
   $500 \text{ nm}$. Calculate the number of lines per mm on the grating.

10. A sample of iodine-131 has a half-life of 8 days. A hospital receives a shipment with activity
    $6.4 \times 10^8 \text{ Bq}$. After how many days will the activity fall below
    $1.0 \times 10^7 \text{ Bq}$?
