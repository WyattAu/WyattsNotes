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

## 11. Worked Example: Single Slit Diffraction Intensity

Light of wavelength $550 \text{ nm}$ passes through a slit of width $0.02 \text{ mm}$. Find the
angular width of the central maximum and the intensity of the first secondary maximum relative to
the central maximum.

**Central maximum half-width:**

$$\sin\theta = \frac{\lambda}{a} = \frac{550 \times 10^{-9}}{0.02 \times 10^{-3}} = 0.0275$$

$$\theta = \arcsin(0.0275) = 1.58^{\circ}$$

The full angular width of the central maximum is $2\theta = 3.15^{\circ}$.

**First secondary maximum:** The first secondary maximum occurs approximately halfway between the
first and second minima:

$$\sin\theta \approx \frac{3\lambda}{2a} = 0.0413$$

The intensity is approximately:

$$I \approx I_0 \left(\frac{\sin(1.5\pi)}{1.5\pi}\right)^2 = I_0 \left(\frac{-1}{1.5\pi}\right)^2 = I_0 \times 0.0450$$

The first secondary maximum has about 4.5% of the intensity of the central maximum.

## 12. Worked Example: Diffraction Grating with White Light

A diffraction grating with 500 lines/mm is illuminated with white light. Find the angular width of
the first-order spectrum.

The grating spacing: $d = \frac{1}{500 \times 10^3} = 2 \times 10^{-6} \text{ m}$.

For the first order ($n = 1$):

- Violet ($\lambda = 400 \text{ nm}$):
  $\sin\theta_v = \frac{400 \times 10^{-9}}{2 \times 10^{-6}} = 0.200$, $\theta_v = 11.5^{\circ}$
- Red ($\lambda = 700 \text{ nm}$):
  $\sin\theta_r = \frac{700 \times 10^{-9}}{2 \times 10^{-6}} = 0.350$, $\theta_r = 20.5^{\circ}$

The angular width of the first-order spectrum is $20.5^{\circ} - 11.5^{\circ} = 9.0^{\circ}$.

The second-order spectra overlap: the second-order violet ($\sin\theta = 0.400$,
$\theta = 23.6^{\circ}$) overlaps with the first-order red ($\theta = 20.5^{\circ}$). This limits
the useful number of orders for spectroscopy.

## 13. Radioactive Decay: Extended Analysis

### Worked Example: Decay Constant from Half-Life

Strontium-90 has a half-life of 28.8 years. Find the decay constant and the fraction remaining after
100 years.

$$\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{28.8} = 0.02406 \text{ year}^{-1}$$

$$\frac{N}{N_0} = e^{-\lambda t} = e^{-0.02406 \times 100} = e^{-2.406} = 0.0902$$

After 100 years, about 9% of the original strontium-90 remains. This is why strontium-90 is so
hazardous in nuclear fallout: it has a long enough half-life to persist for decades, yet decays fast
enough to deliver significant radiation dose.

### Activity and Mass Relationship

The activity of a sample depends on the number of nuclei and the decay constant:

$$A = \lambda N = \frac{\lambda m N_A}{M_{\text{atomic}}}$$

where $m$ is the mass of the sample, $N_A = 6.022 \times 10^{23}$ is Avogadro's number, and
$M_{\text{atomic}}$ is the molar mass in g/mol.

### Worked Example: Activity of a Sample

A sample contains $5 \text{ mg}$ of cobalt-60 (half-life $5.27$ years, molar mass
$60 \text{ g/mol}$).

Number of atoms:
$N = \frac{5 \times 10^{-3} \times 6.022 \times 10^{23}}{60} = 5.018 \times 10^{19}$

Decay constant:
$\lambda = \frac{0.693}{5.27 \times 3.156 \times 10^7} = 4.17 \times 10^{-9} \text{ s}^{-1}$

Activity:
$A = \lambda N = 4.17 \times 10^{-9} \times 5.018 \times 10^{19} = 2.09 \times 10^{11} \text{ Bq} = 209 \text{ GBq}$

## 14. Sound Waves: Extended Analysis

### Worked Example: Decibel Addition

Two sound sources produce intensity levels of $70 \text{ dB}$ and $73 \text{ dB}$ at a point. Find
the total intensity level.

$$I_1 = I_0 \times 10^{70/10} = 10^{-12} \times 10^7 = 10^{-5} \text{ W/m}^2$$

$$I_2 = I_0 \times 10^{73/10} = 10^{-12} \times 10^{7.3} = 2 \times 10^{-5} \text{ W/m}^2$$

$$I_{\text{total}} = 3 \times 10^{-5} \text{ W/m}^2$$

$$\beta_{\text{total}} = 10\log_{10}\left(\frac{3 \times 10^{-5}}{10^{-12}}\right) = 10\log_{10}(3 \times 10^7) = 10 \times 7.477 = 74.8 \text{ dB}$$

Note: adding two sources of 70 dB and 73 dB gives $74.8 \text{ dB}$, not $143 \text{ dB}$. Decibels
do not add linearly. A 3 dB increase corresponds to a doubling of intensity, so adding a second
source of equal intensity adds 3 dB.

## 15. Summary Table: Wave and Radiation Formulas

| Topic               | Formula                             | Variables                | Notes                     |
| ------------------- | ----------------------------------- | ------------------------ | ------------------------- |
| Wave speed          | $v = f\lambda$                      | $f$, $\lambda$           | Exact for periodic waves  |
| Snell's law         | $n_1\sin\theta_1 = n_2\sin\theta_2$ | $n$, $\theta$            | Frequency unchanged       |
| Critical angle      | $\sin\theta_c = n_2/n_1$            | $n_1 \gt n_2$            | Total internal reflection |
| Double slit         | $w = \lambda L/d$                   | $\lambda$, $L$, $d$      | Fringe spacing            |
| Diffraction grating | $d\sin\theta = n\lambda$            | $d$, $\theta$, $\lambda$ | $n$th order maximum       |
| Decibels            | $\beta = 10\log_{10}(I/I_0)$        | $I$, $I_0$               | $I_0 = 10^{-12}$ W/m$^2$  |
| Decay law           | $N = N_0 e^{-\lambda t}$            | $N_0$, $\lambda$, $t$    | Exponential decay         |
| Half-life           | $t_{1/2} = \ln 2/\lambda$           | $\lambda$                | Constant for each isotope |
| Activity            | $A = \lambda N$                     | $\lambda$, $N$           | In becquerels (Bq)        |
| Mass-energy         | $E = mc^2$                          | $m$, $c$                 | Binding energy            |

## 16. Practice Questions (Additional)

11. Light of wavelength $480 \text{ nm}$ passes through a double slit with slit separation
    $0.15 \text{ mm}$. The screen is $2.5 \text{ m}$ away. Calculate the fringe spacing and the
    distance from the central maximum to the third-order bright fringe.

12. A sample of radon-222 has an initial activity of $8000 \text{ Bq}$. After 11.4 days, the
    activity is $2000 \text{ Bq}$. Calculate the half-life of radon-222.

13. Two speakers emit sound at $440 \text{ Hz}$ and are $3 \text{ m}$ apart. A listener walks along
    a line perpendicular to the line joining the speakers, starting from the midpoint. At what
    distance from the midpoint does the listener first hear a minimum in intensity? (Speed of sound
    $= 343 \text{ m/s}$.)

14. Calculate the binding energy per nucleon of carbon-12. Given: mass of carbon-12 =
    $12.000 \text{ u}$, mass of proton $= 1.00728 \text{ u}$, mass of neutron $= 1.00867 \text{ u}$,
    $1 \text{ u} = 931.5 \text{ MeV}/c^2$.

15. A diffraction grating produces a first-order maximum at $22.0^{\circ}$ for light of wavelength
    $589 \text{ nm}$. Calculate the number of lines per mm on the grating and the maximum number of
    orders visible.

16. Explain why gamma rays are more penetrating than alpha particles, even though alpha particles
    carry more energy per particle.

17. A sound source produces an intensity level of $85 \text{ dB}$ at $5 \text{ m}$. At what distance
    is the intensity level $60 \text{ dB}$?

18. Write balanced nuclear equations for: (a) alpha decay of polonium-210, (b) beta-minus decay of
    strontium-90.

19. Explain the process of nuclear fission. Why does it release energy? Reference the binding energy
    per nucleon curve in your answer.

20. Describe an experiment to demonstrate two-source interference with sound waves. Include a
    diagram description and explain how you would measure the wavelength.

## Extended Worked Examples

### Example 21: Intensity at Different Points in a Diffraction Pattern

Light of wavelength $590 \text{ nm}$ passes through a single slit of width $0.10 \text{ mm}$.
Calculate the ratio of intensities at the central maximum and the second secondary maximum.

**Step 1: Find the angular position of the second secondary maximum**

Secondary maxima occur approximately halfway between minima. Minima occur at
$a \sin\theta = n\lambda$.

The second secondary maximum is between $n = 2$ and $n = 3$:

$$a \sin\theta_2 \approx 2.5\lambda = 2.5 \times 590 \times 10^{-9} = 1.475 \times 10^{-6} \text{ m}$$

**Step 2: Calculate the phase parameter**

$$\beta = \frac{\pi a \sin\theta}{\lambda} = 2.5\pi$$

**Step 3: Use the single slit intensity formula**

$$\frac{I}{I_0} = \left( \frac{\sin\beta}{\beta} \right)^2 = \left( \frac{\sin(2.5\pi)}{2.5\pi} \right)^2 = \left( \frac{-1}{7.854} \right)^2 = \left( \frac{1}{7.854} \right)^2 = 0.0162$$

So the second secondary maximum has about $1.6\%$ of the central maximum intensity.

:::info
The intensity of secondary maxima drops rapidly: first secondary $\approx 4.7\%$, second
$\approx 1.6\%$, third $\approx 0.8\%$ of $I_0$. Most of the diffracted light energy is concentrated
in the central maximum.
:::

### Example 22: Radioactive Dating

A sample of ancient wood contains $25\%$ of the original carbon-14. Given that the half-life of
carbon-14 is $5730 \text{ years}$, calculate the age of the sample.

**Step 1: Use the decay law**

$$N = N_0 e^{-\lambda t}$$

$$\frac{N}{N_0} = 0.25 = e^{-\lambda t}$$

**Step 2: Relate $\lambda$ to half-life**

$$\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{5730} = 1.209 \times 10^{-4} \text{ yr}^{-1}$$

**Step 3: Solve for $t$**

$$\ln(0.25) = -\lambda t$$

$$t = \frac{-\ln(0.25)}{\lambda} = \frac{1.386}{1.209 \times 10^{-4}} = 11460 \text{ years}$$

**Check:** Since $0.25 = (1/2)^2$, the sample has undergone exactly 2 half-lives, so
$t = 2 \times 5730 = 11460 \text{ years}$. This confirms our calculation.

### Example 23: Sound Level Addition with Multiple Sources

Three identical machines each produce a sound level of $80 \text{ dB}$ at a certain point. Calculate
the combined sound level.

**Step 1: Convert each level to intensity**

$$L = 80 \text{ dB} = 10 \log_{10}\left(\frac{I}{I_0}\right)$$

$$\frac{I}{I_0} = 10^8$$

**Step 2: Add intensities**

$$I_{\text{total}} = 3I = 3 \times 10^8 \times I_0$$

**Step 3: Convert back to dB**

$$L_{\text{total}} = 10 \log_{10}(3 \times 10^8) = 10 \times (8 + \log_{10} 3) = 10 \times (8 + 0.477) = 84.8 \text{ dB}$$

:::warning
Doubling the number of identical sources only increases the sound level by $3 \text{ dB}$
(since $10\log_{10} 2 \approx 3$). Ten times as many sources gives $+10 \text{ dB}$. This
logarithmic behaviour surprises many students.
:::

## Common Pitfalls Extended

### Pitfall 6: Confusing Activity, Count Rate, and Decay Constant

- **Activity** $A = \lambda N$ is the number of decays per second (Bq) -- a property of the _sample_
- **Count rate** is what a detector actually measures -- always less than activity due to detector
  efficiency and geometry
- **Decay constant** $\lambda$ is a fixed property of the _isotope_, independent of sample size

### Pitfall 7: Forgetting the Factor of 2 in Coherent Source Path Difference

For two coherent sources separated by distance $d$, the path difference to a point at angle $\theta$
is $d \sin\theta$, _not_ $2d \sin\theta$. The factor of 2 only appears in thin film interference
where the light traverses the film twice (reflection from top and bottom surfaces).

### Pitfall 8: Assuming All Nuclear Radiation Is Equally Ionising

Ionising power: alpha &gt; beta &gt; gamma. Penetrating power is the reverse: gamma &gt; beta &gt;
alpha. A common exam question asks you to explain this inverse relationship: alpha particles are
large and slow with double charge, so they interact strongly (high ionisation, low penetration).
Gamma rays have no charge or mass, so they pass through matter easily (low ionisation, high
penetration).

## Additional Practice Problems

21. A diffraction grating has $500 \text{ lines/mm}$. Light of wavelength $620 \text{ nm}$ is
    incident normally. Calculate the angular position of the third-order maximum and the total
    number of orders visible.

22. A sample of radon-222 (half-life $3.82 \text{ days}$) has an initial activity of
    $8000 \text{ Bq}$. Calculate the activity after 15 days and the time for the activity to fall to
    $500 \text{ Bq}$.

23. Two speakers are $3 \text{ m}$ apart and emit sound at $685 \text{ Hz}$. A listener walks along
    a line parallel to the speakers, $8 \text{ m}$ away. Calculate the positions of the first three
    points of constructive interference along this line. (Speed of sound $= 343 \text{ m/s}$.)

24. Calculate the energy released when $1 \text{ kg}$ of uranium-235 undergoes fission, assuming
    each fission releases $200 \text{ MeV}$ and Avogadro's number $= 6.02 \times 10^{23}$. Compare
    this to the energy released by burning $1 \text{ kg}$ of coal ($3 \times 10^7 \text{ J}$).

25. Explain why ultrasound is preferred to X-rays for imaging foetuses. Refer to the types of
    radiation, their ionising power, and the energy of typical photons in each case.

## Further Worked Examples

### Example 26: Resonance in a Closed Pipe

A closed pipe produces resonance with a tuning fork of frequency $512 \text{ Hz}$ when the air
column length is $16.5 \text{ cm}$. Calculate the speed of sound and the next two resonant lengths.

**Step 1: Identify the harmonic**

For a closed pipe, the first resonance occurs at $L = \lambda/4$.

$$\lambda = 4L = 4 \times 0.165 = 0.660 \text{ m}$$

**Step 2: Speed of sound**

$$v = f\lambda = 512 \times 0.660 = 337.9 \text{ m/s}$$

**Step 3: Next two resonant lengths**

Second resonance (third harmonic):
$L_2 = 3\lambda/4 = 3 \times 0.165 = 0.495 \text{ m} = 49.5 \text{ cm}$

Third resonance (fifth harmonic):
$L_3 = 5\lambda/4 = 5 \times 0.165 = 0.825 \text{ m} = 82.5 \text{ cm}$

### Example 27: Nuclear Binding Energy Calculation

Calculate the binding energy per nucleon of helium-4. Given: mass of helium-4 nucleus
$= 4.001506 \text{ u}$, mass of proton $= 1.007276 \text{ u}$, mass of neutron
$= 1.008665 \text{ u}$, $1 \text{ u} = 931.5 \text{ MeV}/c^2$.

**Step 1: Calculate mass defect**

Helium-4 has 2 protons and 2 neutrons.

$$\Delta m = 2m_p + 2m_n - m_{\text{He}} = 2(1.007276) + 2(1.008665) - 4.001506$$

$$\Delta m = 2.014552 + 2.017330 - 4.001506 = 0.030376 \text{ u}$$

**Step 2: Total binding energy**

$$BE = \Delta m \times 931.5 = 0.030376 \times 931.5 = 28.30 \text{ MeV}$$

**Step 3: Binding energy per nucleon**

$$\frac{BE}{A} = \frac{28.30}{4} = 7.07 \text{ MeV/nucleon}$$

This is close to the accepted value of $7.07 \text{ MeV/nucleon}$ for helium-4.

:::info
The binding energy per nucleon peaks at around $8.8 \text{ MeV/nucleon}$ for iron-56. This
means:

- Nuclei lighter than iron can _release energy by fusion_ (combining to form heavier nuclei closer
  to iron)
- Nuclei heavier than iron can _release energy by fission_ (splitting to form lighter nuclei closer
to iron)
:::

### Example 28: Two-Source Interference Quantitative

In a two-source interference experiment, two coherent sources $S_1$ and $S_2$ are $0.8 \text{ mm}$
apart and emit light of wavelength $580 \text{ nm}$. The screen is $1.5 \text{ m}$ away. Calculate
the fringe spacing and the distance from the central maximum to the fifth bright fringe.

**Step 1: Fringe spacing**

$$\Delta y = \frac{\lambda D}{d} = \frac{580 \times 10^{-9} \times 1.5}{0.8 \times 10^{-3}} = \frac{8.7 \times 10^{-7}}{8 \times 10^{-4}} = 1.088 \times 10^{-3} \text{ m} = 1.09 \text{ mm}$$

**Step 2: Distance to fifth bright fringe**

$$y_5 = 5 \times \Delta y = 5 \times 1.09 = 5.44 \text{ mm}$$

**Step 3: What happens if the wavelength is doubled?**

$$\Delta y_{\text{new}} = \frac{2\lambda D}{d} = 2 \times 1.09 = 2.18 \text{ mm}$$

Doubling the wavelength doubles the fringe spacing.

## Board-Specific Content: SQA Advanced Higher

### Radiation Detection: Geiger-Muller Tube

A GM tube has a dead time of approximately $100 \text{ }\mu\text{s}$ after each count. This limits
the maximum count rate:

$$\text{Maximum count rate} = \frac{1}{\text{dead time}} = \frac{1}{100 \times 10^{-6}} = 10000 \text{ counts/s}$$

At high activities, the GM tube undercounts because some particles arrive during the dead time. The
true count rate is related to the observed count rate by:

$$R_{\text{true}} = \frac{R_{\text{obs}}}{1 - R_{\text{obs}} \times \tau}$$

where $\tau$ is the dead time.

## Additional Practice Problems

26. A diffraction grating has $600 \text{ lines/mm}$ and is illuminated with light of wavelength
    $550 \text{ nm}$. Calculate the angular positions of the first three orders and determine the
    maximum number of orders visible.

27. A sample of cobalt-60 has a half-life of $5.27 \text{ years}$ and an initial activity of
    $20000 \text{ Bq}$. Calculate the activity after 10 years, the number of cobalt-60 atoms
    remaining, and the mass of cobalt-60 remaining.

28. Two loudspeakers are connected to the same signal generator and placed $2 \text{ m}$ apart. They
    emit a tone of $440 \text{ Hz}$. A microphone is moved along a line $5 \text{ m}$ from and
    parallel to the line joining the speakers. Calculate the positions of the first three minima.
    (Speed of sound $= 343 \text{ m/s}$.)

29. Calculate the energy released when two deuterium nuclei fuse to form helium-3 and a neutron.
    Mass of deuterium $= 2.013553 \text{ u}$, mass of helium-3 $= 3.016029 \text{ u}$, mass of
    neutron $= 1.008665 \text{ u}$.

30. Explain the principles of a gamma camera used in medical imaging. Describe how the collimator,
    scintillator crystal, photomultiplier tubes, and computer work together to produce an image.
