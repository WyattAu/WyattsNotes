---
id: cooling
title: Cooling Systems
description:
  Cooling solutions — air cooling, AIO liquid cooling, custom loops, thermal paste, case airflow,
  and thermal management.
slug: cooling
---

## Heat Transfer Fundamentals

### Three Mechanisms of Heat Transfer

Every cooling solution relies on three mechanisms of heat transfer:

1. **Conduction** — Heat transfer through a solid material without bulk motion. Governed by
   Fourier's law:

$$
q = -k \cdot A \cdot \frac{dT}{dx}
$$

Where $q$ is heat flux (W), $k$ is thermal conductivity (W/m·K), $A$ is the cross-sectional area
(m$^2$), and $dT/dx$ is the temperature gradient (K/m).

2. **Convection** — Heat transfer between a solid surface and a moving fluid (air or liquid). The
   heat transfer coefficient depends on fluid velocity, viscosity, and surface geometry. Forced
   convection (fans or pumps) provides significantly higher heat transfer than natural convection.

3. **Radiation** — Heat transfer via electromagnetic radiation. Governed by the Stefan-Boltzmann
   law:

$$
P = \epsilon \cdot \sigma \cdot A \cdot (T_{surface}^4 - T_{ambient}^4)
$$

Radiation is typically a minor contributor (5–15% of total heat dissipation) in PC cooling but
becomes more significant at higher temperatures. Dark surfaces (high emissivity) radiate more
effectively than shiny surfaces.

### Thermal Resistance

Thermal resistance ($\theta$, measured in °C/W) quantifies how effectively a thermal interface or
material transfers heat. Lower thermal resistance means better heat transfer.

The total thermal resistance from die to ambient is the sum of all series thermal resistances:

$$
\theta_{total} = \theta_{die-to-IHS} + \theta_{TIM} + \theta_{IHS-to-heatsink} + \theta_{heatsink-to-air}
$$

A typical breakdown for a well-cooled desktop CPU:

| Interface             | Thermal Resistance | Temperature Rise (at 150 W) |
| --------------------- | ------------------ | --------------------------- |
| Die to IHS (soldered) | 0.05–0.10 °C/W     | 7.5–15 °C                   |
| TIM (paste)           | 0.10–0.30 °C/W     | 15–45 °C                    |
| Heatsink (convection) | 0.05–0.15 °C/W     | 7.5–22.5 °C                 |
| **Total**             | **0.20–0.55 °C/W** | **30–82.5 °C**              |

---

## Thermal Paste

### Thermal Interface Materials Compared

The TIM (Thermal Interface Material) between the CPU IHS and the heatsink is critical. Even the best
heatsink is useless if the thermal interface has high thermal resistance.

| TIM Type                                    | Thermal Conductivity   | Longevity                | Ease of Application | Best For                     |
| ------------------------------------------- | ---------------------- | ------------------------ | ------------------- | ---------------------------- |
| Standard paste (NT-H2, MX-4)                | 4–8 W/m·K              | 3–5 years                | Easy                | Most users                   |
| Premium paste (Kryonaut)                    | 12–13 W/m·K            | 1–3 years                | Moderate            | Overclocking                 |
| Liquid metal (Thermal Grizzly Conductonaut) | 73 W/m·K               | 2–5 years (with coating) | Difficult, risky    | Extreme overclocking         |
| Phase-change pad (PTM7950)                  | 6–8 W/m·K              | 5+ years                 | Very easy           | Low maintenance              |
| Graphite pad                                | 15–25 W/m·K (in-plane) | Indefinite               | Easy                | Laptops (single application) |

### Application Methods

**Pea method (recommended for most CPUs):** Place a pea-sized dot (3–4 mm diameter) in the center of
the IHS. Heatsink pressure spreads the paste. Works well with moderate-viscosity pastes and
direct-contact heatpipes.

**Spread method:** Spread the paste evenly across the IHS with a card or spatula. Ensures full
coverage but risks air bubbles. Better for large IHS surfaces (Threadripper, EPYC) or liquid metal.

**Cross/X method:** Two thin lines forming a cross. Provides good coverage for rectangular IHS
surfaces. Works well for Intel CPUs with their rectangular IHS.

:::danger
Liquid metal (galinstan) is electrically conductive and will short-circuit components if
it spills onto the motherboard contacts or pins. It also reacts with aluminum, causing corrosion.
Only use liquid metal on nickel-plated or copper surfaces. Apply a conformal coating (nail polish)
around the IHS to contain spills.
:::

### When to Repaste

- **Every 2–3 years** for standard paste under moderate loads.
- **Every 1–2 years** if operating temperatures are consistently above 80 °C.
- **Immediately** if you notice a sudden temperature increase of 10+ °C compared to previous
  readings. This indicates pump-out (thermal paste being pushed out from under the IHS by thermal
  cycling).
- **After removing the heatsink** for any reason. Always clean and reapply.

---

## Air Cooling

### Tower Coolers

Tower coolers use a stack of aluminum fins connected by heat pipes to a copper base plate. Airflow
from one or more fans pushes heat away from the fins.

Key specifications to evaluate:

| Spec        | What It Means                          | Good Value                               |
| ----------- | -------------------------------------- | ---------------------------------------- |
| TDP Rating  | Maximum heat dissipation               | Match or exceed CPU TDP + 50 W           |
| Height      | Must fit in your case with side panel  | Measure your case's CPU cooler clearance |
| Fan Size    | Larger fans move more air at lower RPM | 120 mm or 140 mm preferred               |
| Noise Level | Measured in dBA at specified RPM       | &lt; 25 dBA at full speed                |
| Weight      | Must be supported by the motherboard   | &lt; 1 kg without backplate              |

### Heat Pipe Technology

Heat pipes are sealed copper tubes containing a small amount of working fluid (usually water or a
water-based solution) under partial vacuum. The heat pipe operates by phase change:

1. Heat evaporates the fluid at the hot end (evaporator).
2. Vapor travels to the cold end (condenser) through the center of the pipe.
3. Vapor condenses, releasing latent heat to the fins.
4. Liquid returns to the evaporator via capillary action in a wick structure along the pipe wall.

Heat pipes are remarkably efficient — a single 6 mm heat pipe can transfer 50–100 W of heat over a
distance of 100 mm with a thermal resistance of less than 0.1 °C/W.

The number and diameter of heat pipes matter:

- **4 × 6 mm pipes:** Suitable for CPUs up to 150 W TDP.
- **5–6 × 6 mm pipes:** Suitable for CPUs up to 200 W TDP.
- **7–8 × 6 mm pipes or 6 × 8 mm pipes:** Suitable for CPUs up to 250+ W TDP.

### Fan Specifications

Understanding fan specs is critical for selecting the right fans for your build:

| Spec            | Unit           | What It Means                                               |
| --------------- | -------------- | ----------------------------------------------------------- |
| Airflow         | CFM or m$^3$/h | Volume of air moved per unit time                           |
| Static Pressure | mmH$_2$O       | Ability to push air through resistance (heatsinks, filters) |
| RPM             | rev/min        | Fan speed; higher = more airflow but more noise             |
| Noise           | dBA            | Sound pressure level at 1 meter                             |
| Bearing Type    | —              | Longevity and noise characteristics                         |

**Static pressure vs. airflow:** Heatsinks and radiators present high airflow resistance. You need
fans with high static pressure to push air through them effectively. Case exhaust fans benefit more
from high airflow.

Fan bearing types ranked by longevity:

1. **Fluid Dynamic Bearing (FDB):** 300,000+ hours. Low noise, long life. Best choice.
2. **Dual Ball Bearing:** 150,000+ hours. Durable but slightly noisier than FDB.
3. **Sleeve Bearing:** 40,000–60,000 hours. Short life, should only be mounted horizontally.
4. **Rifle Bearing:** 80,000+ hours. Mid-range option.

### Top Air Coolers (Reference)

| Cooler                                | TDP Rating | Height | Noise    | Price     |
| ------------------------------------- | ---------- | ------ | -------- | --------- |
| Noctua NH-D15 G2                      | 280 W      | 165 mm | Very low | Premium   |
| Thermalright Peerless Assassin 120 SE | 260 W      | 155 mm | Low      | Budget    |
| be quiet! Dark Rock Pro 5             | 270 W      | 168 mm | Very low | Premium   |
| Scythe Fuma 3                         | 220 W      | 154 mm | Low      | Mid-range |

---

## AIO Liquid Cooling

### AIO Components

An All-In-One (AIO) liquid cooler consists of:

1. **Cold plate:** Copper base that mounts to the CPU, containing micro-channels for coolant flow.
2. **Pump:** Circulates coolant through the loop. Located on the cold plate (most common) or as a
   separate unit.
3. **Radiator:** Aluminum fin stack that dissipates heat to the air via fans.
4. **Tubing:** Pre-filled, sealed tubing connecting the cold plate to the radiator.
5. **Coolant:** Propylene glycol/water mixture with anti-corrosion additives.

### Radiator Size Comparison

| Radiator Size   | Surface Area | Cooling Capacity | Typical Use                        |
| --------------- | ------------ | ---------------- | ---------------------------------- |
| 120 mm (single) | ~0.015 m$^2$ | 150 W            | Low-TDP CPUs, SFF builds           |
| 240 mm (double) | ~0.030 m$^2$ | 250 W            | Mid-range CPUs (up to 8-core)      |
| 280 mm          | ~0.035 m$^2$ | 300 W            | Mid-to-high-range CPUs             |
| 360 mm (triple) | ~0.045 m$^2$ | 350–400 W        | High-end CPUs, overclocking        |
| 420 mm          | ~0.053 m$^2$ | 400–450 W        | Extreme overclocking, Threadripper |

### Fan Configuration on Radiators

The orientation of fans on a radiator significantly affects thermals and noise:

| Configuration                        | Thermals        | Noise          | Notes                                   |
| ------------------------------------ | --------------- | -------------- | --------------------------------------- |
| Push (fans outside, blowing through) | Good            | Moderate       | Most common, easier to clean            |
| Pull (fans inside, pulling through)  | Slightly better | Slightly lower | Harder to clean dust from fins          |
| Push-Pull (fans on both sides)       | Best            | Highest        | Doubles fan count, marginal improvement |

### AIO Failure Modes

AIO coolers have finite lifespans. Common failure modes:

1. **Pump failure:** The pump stops circulating coolant. CPU temperatures spike rapidly. The pump is
   the most likely component to fail (typically after 4–7 years). Most AIOs provide pump RPM
   monitoring — if pump RPM drops to 0, the pump has failed.
2. **Coolant loss:** Sealed AIOs can lose coolant through permeation (slow loss through tubing) or
   from a micro-leak. Reduced coolant volume decreases cooling capacity.
3. **Air bubble buildup:** Over time, dissolved air comes out of solution and forms bubbles in the
   loop. These bubbles can block flow through the cold plate micro-channels, creating hot spots.
   Tilt the case to move bubbles to the radiator.
4. **Fan failure:** Individual fans can fail. Replaceable in most AIOs.

:::warning
Always monitor pump RPM. Set an alarm in your monitoring software if pump RPM drops below
a threshold (typically 1000 RPM). A dead pump with active fans will cook a CPU in minutes under
load.
:::

---

## Custom Water Cooling

### Components

Custom water cooling loops offer the best thermal performance and lowest noise but require
significant expertise and maintenance.

| Component   | Function                                        | Key Considerations                                      |
| ----------- | ----------------------------------------------- | ------------------------------------------------------- |
| Water block | Mounts to CPU/GPU, transfers heat to coolant    | Copper or nickel-plated copper; micro-channel design    |
| Radiator    | Dissipates heat to air                          | Size (120–480 mm), fin density (FPI), material          |
| Pump        | Circulates coolant                              | Flow rate (L/h), head pressure, noise                   |
| Reservoir   | Holds coolant, provides fill point and air trap | Size (fill port diameter matters for bleeding)          |
| Tubing      | Connects components                             | PETG, acrylic, or soft tubing (PTFE, PVC)               |
| Fittings    | Connect tubing to components                    | Compression, barb, or rotary fittings                   |
| Coolant     | Heat transfer fluid                             | Distilled water + biocide + anticorrosive, or pre-mixed |

### Loop Order

The order of components in a custom loop does not significantly affect temperatures (the coolant
reaches thermal equilibrium quickly). The standard recommendation is:

```
Reservoir → Pump → Radiator → CPU Block → GPU Block → Reservoir
```

Placing the reservoir before the pump ensures the pump is always flooded (never runs dry). Placing
the radiator before the CPU block provides slightly cooler coolant to the CPU, but the difference is
typically less than 1 °C.

### Maintenance

Custom loops require periodic maintenance:

- **Every 6–12 months:** Check coolant level, top off if needed, inspect for debris.
- **Every 12–18 months:** Flush and replace coolant. Inspect blocks for corrosion or buildup.
- **Every 2–3 years:** Replace soft tubing (PETG/acrylic rigid tubing does not need replacement).
- **As needed:** Clean radiator fins of dust, replace fans.

---

## Case Airflow

### Positive vs. Negative Pressure

**Positive pressure** (more intake than exhaust) ensures air enters through filtered intake fans and
exits through unfiltered exhaust vents. This minimizes dust accumulation inside the case.

**Negative pressure** (more exhaust than intake) can create slightly better thermals (hot air is
actively pulled out) but pulls unfiltered air through every gap in the case, leading to rapid dust
accumulation.

**Balanced pressure** (equal intake and exhaust) is the best compromise for most builds.

### Ideal Fan Configuration

```
Front:  Intake (filtered) — provides cool air to CPU and GPU
Top:    Exhaust — removes rising hot air (optional: intake for bottom-mounted rad)
Rear:   Exhaust — removes hot air from CPU cooler area
Bottom: Intake (filtered) — provides cool air to GPU
```

**Rules of thumb:**

1. Never have all fans as intake or all as exhaust. You need both.
2. Front and bottom intakes should have dust filters.
3. Rear and top exhaust should be unrestricted.
4. Avoid mixing GPU intake from front (bottom of case) with CPU exhaust from rear (top of case) —
   this creates a heat recirculation zone.
5. Cable management matters — cables blocking airflow can increase temperatures by 5–10 °C.

### Mesh vs. Glass Front Panels

Solid glass front panels restrict intake airflow and can increase GPU temperatures by 10–20 °C
compared to mesh panels. For high-TDP GPUs (300+ W), a mesh front panel is strongly recommended.

---

## Fan Curves and PWM Control

### PWM vs. DC Control

- **PWM (Pulse Width Modulation):** 4-pin fans. The motherboard sends a PWM signal (0–100% duty
  cycle) that controls fan speed by rapidly switching power on and off. Smooth, precise speed
  control from 0% to 100%.
- **DC (Voltage Control):** 3-pin fans. Speed is controlled by varying the supply voltage (7–12 V).
  Less precise, minimum speed is typically 40–60%.

### Building a Fan Curve

A well-tuned fan curve keeps temperatures acceptable while minimizing noise:

| Temperature | Fan Speed | Behavior                                       |
| ----------- | --------- | ---------------------------------------------- |
| Below 40 °C | 0–30%     | Near-silent, adequate for idle and light loads |
| 40–60 °C    | 30–60%    | Audible but quiet; normal use                  |
| 60–75 °C    | 60–85%    | Noticeable; gaming load                        |
| 75–85 °C    | 85–100%   | Loud; approaching thermal limits               |
| Above 85 °C | 100%      | Maximum cooling; investigate cause             |

### Fan Control Software

- **BIOS/UEFI:** Most reliable, always works. Configure before OS loads.
- **Fan Control (open source):** Excellent Windows GUI for per-fan curve configuration.
- **speedfan (Windows):** Legacy but functional.
- **fancontrol (Linux):** Daemon-based fan control using lm-sensors data.
- **liquidctl (Linux):** Controls AIO pump and fans for supported devices.

---

## Thermal Monitoring

### Software Monitoring

```bash
# Linux: Install lm-sensors
sudo apt install lm-sensors
sudo sensors-detect  # Auto-detect available sensors
sensors              # Display all sensor readings

# Watch specific sensors
watch -n 1 sensors

# Turbostat for CPU-specific thermal data
sudo turbostat --show Core,CPU,Busy%,Bzy_MHz,PKG%,PkgTmp -i 5
```

### Hardware Monitoring Points

| Sensor            | Location           | What It Measures           |
| ----------------- | ------------------ | -------------------------- |
| CPU Package Temp  | On-die             | Average CPU temperature    |
| CPU Core Max      | Per-core           | Hottest core temperature   |
| GPU Edge Temp     | PCB sensor         | GPU temperature (lower)    |
| GPU Junction Temp | On-die             | GPU hottest point          |
| VRM Temp          | Motherboard sensor | Power delivery temperature |
| PCH Temp          | Chipset sensor     | Southbridge temperature    |
| NVMe Temp         | On-drive sensor    | SSD temperature            |
| System Temp       | Motherboard sensor | Ambient case temperature   |

### Safe Temperature Limits

| Component              | Maximum Sustained | Thermal Throttling | Danger Zone            |
| ---------------------- | ----------------- | ------------------ | ---------------------- |
| Intel CPU (12th+ Gen)  | 85 °C             | 100 °C             | &gt; 100 °C            |
| AMD CPU (Zen 4)        | 80 °C             | 95 °C              | &gt; 95 °C             |
| NVIDIA GPU (40-series) | 75 °C             | 83 °C              | &gt; 88 °C             |
| AMD GPU (RDNA 3)       | 85 °C             | 110 °C (junction)  | &gt; 115 °C (junction) |
| NVMe SSD               | 60 °C             | 70 °C              | &gt; 75 °C             |
| VRM                    | 80 °C             | N/A                | &gt; 100 °C            |

---

## Noise Optimization

### Noise Sources Ranked

1. **GPU fans** — Usually the loudest component under gaming load (40–50 dBA).
2. **CPU fans** — Significant under sustained multi-core load (35–45 dBA).
3. **Case fans** — Usually moderate (20–35 dBA) if properly selected.
4. **PSU fan** — Typically quiet (20–30 dBA) unless under heavy load.
5. **Pump (AIO/custom)** — Usually quiet (15–25 dBA) but can develop noise over time.

### Decibel Reference

| Level  | Example             | Perceived Loudness     |
| ------ | ------------------- | ---------------------- |
| 10 dBA | Near-silent room    | Barely audible         |
| 20 dBA | Quiet fan at 1 m    | Whisper quiet          |
| 30 dBA | Library             | Very quiet             |
| 40 dBA | Quiet office        | Quiet, noticeable      |
| 50 dBA | Normal conversation | Moderate               |
| 60 dBA | Busy restaurant     | Loud, tiring over time |

### Strategies for Quiet Operation

1. **Undervolt the CPU and GPU.** Lower voltage means less heat, which means fans spin slower. This
   is the single most effective noise reduction technique.
2. **Use larger fans.** A 140 mm fan moves the same air as a 120 mm fan at lower RPM and lower
   noise. Fan noise scales with the fifth power of RPM — a 20% reduction in RPM reduces noise by
   roughly 60%.
3. **Enable fan curves.** Never run fans at 100% all the time. Use temperature-based curves.
4. **Use a fan hub.** Dedicated fan controllers provide smoother PWM control than motherboard
   headers, which can have limited fan count or shared PWM channels.
5. **Anti-vibration mounts.** Rubber fan mounts and silicone grommets reduce vibration transmission
   to the case, which reduces low-frequency hum.

---

## Common Pitfalls

### Mounting the AIO Radiator as Intake

Mounting an AIO radiator at the top of the case as intake (pulling cool air from outside through the
radiator) provides lower CPU temperatures but dumps GPU heat into the radiator's exhaust path. The
net effect is lower CPU temps but higher GPU temps and higher overall case temperature. Mount the
radiator as exhaust (top) or side-intake with the understanding of the thermal trade-off.

### Using Too Much Thermal Paste

More paste is not better. Excess paste squeezes out from between the IHS and heatsink and can spill
onto the motherboard. Worse, a thick layer of paste has higher thermal resistance than a thin layer.
The paste should fill only the microscopic imperfections between the two surfaces — not act as a gap
filler. A pea-sized amount is sufficient for most CPUs.

### Neglecting Dust Filters

Dust accumulation on heatsink fins and radiator surfaces acts as an insulating layer, reducing
thermal conductivity. A 1 mm layer of dust can reduce cooling performance by 10–20%. Clean or
replace dust filters monthly, and use compressed air to blow dust out of heatsink fins quarterly.

### Forgetting to Check Pump RPM

An AIO with a dead pump and working fans will appear to be functioning, but coolant is not
circulating. CPU temperatures will climb rapidly under load and can reach 100+ °C within minutes,
causing thermal shutdown or permanent damage. Always verify pump RPM is non-zero in your monitoring
software.

### Ignoring Case Airflow Direction

Reversed fan orientation (intake fan blowing outward, exhaust fan pulling inward) creates turbulence
and disrupts the intended airflow path. Always verify fan direction by looking at the arrow on the
fan frame or observing which side the strut/bracket is on (strut side is intake).

## Advanced Thermal Paste Analysis

### Thermal Conductivity Testing Methodology

Thermal paste performance is measured by the temperature delta between the die and the heatsink
under controlled load conditions. Standardized tests use a calibrated heat source and thermal
sensors to eliminate variables:

$$
\theta_{TIM} = \frac{T_{die} - T_{heatsink}}{Q}
$$

Where $Q$ is the heat flux in watts. A lower $\theta_{TIM}$ indicates better thermal transfer.

### Phase-Change Materials (PTM7950)

Intel's PTM7950 is a phase-change thermal interface that behaves differently from traditional paste:

- **Below 45 °C:** Solid state, acts as an insulator (gap filler).
- **Above 45 °C:** Transitions to liquid state, flows to fill microscopic imperfections.
- **After cycling:** The material cures and maintains optimal contact permanently.

PTM7950 requires a heat cycling process after application:

1. Apply the pad to the IHS.
2. Mount the heatsink with moderate pressure.
3. Run a stress test (Prime95 Small FFTs) for 15–20 minutes to bring the CPU above 60 °C.
4. Let the system cool to room temperature.
5. Repeat the heat cycle 2–3 times for optimal curing.

### Graphite Pads

Graphite pads are anisotropic — they conduct heat well in the X-Y plane (along the pad surface)
but poorly in the Z-axis (through the pad thickness). This makes them suitable for:

- Laptops with bare-die CPUs (where the pad conforms to the die and heat spreader)
- Low-maintenance applications (no pumping out, no curing needed)

They are less suitable for desktop tower coolers where the primary heat transfer is through the
pad thickness (Z-axis).

## Detailed Air Cooler Analysis

### CFD Simulation of Tower Coolers

Computational Fluid Dynamics (CFD) analysis of tower coolers reveals the key airflow patterns:

- **Front intake:** Air enters the front of the heatsink fin stack. Approximately 70–80% of the
  air flows through the fin channels; 20–30% bypasses through gaps.
- **Fin channel flow:** Air speed decreases as it moves through the fin stack due to friction.
  The pressure drop is proportional to the square of the airflow velocity.
- **Heat transfer coefficient:** Higher at the front of the fin stack (cooler air) and lower at the
  rear (warmer air). This creates a temperature gradient across the fin stack.
- **Bypass air:** Air that does not pass through the fin channels is wasted. This is why
  shrouding (a cover that forces all air through the fins) improves performance.

### Optimizing Fan Configuration on Tower Coolers

**Single fan (front mount):** The most common configuration. Airflow direction: front to back.
The rear of the heatsink receives warmer air, reducing efficiency.

**Dual fan (push-pull):** Adds a second fan on the rear of the heatsink pulling air through.
Improves thermals by 2–5 °C compared to single fan. Doubles the noise level (two fans instead
of one).

**Dual fan (both push, front):** Two fans mounted side by side on the front. Only useful for
very wide heatsinks (140 mm+ width). Marginally better than single fan due to higher static
pressure.

**Fan orientation (up vs. forward):** On tower coolers, the airflow direction matters:

- **Horizontal (airflow front to back):** Standard orientation. Works well with rear exhaust fan.
- **Vertical (airflow bottom to top):** Aligns with natural convection (hot air rises). Provides
  1–3 °C improvement but may conflict with top-mounted case fans.

### Fan Blade Design

Fan blade design affects airflow, static pressure, and noise:

| Design | Airflow | Static Pressure | Noise | Use Case |
|--------|---------|----------------|-------|----------|
| Standard | Good | Moderate | Moderate | Case exhaust |
| High static pressure | Moderate | High | Moderate | Heatsinks, radiators |
| High airflow | High | Low | Low-Moderate | Case intake |
| Silent (FDB, low RPM) | Low | Low | Very Low | Quiet builds |
| PWM-controlled | Variable | Variable | Variable | All scenarios |

Key blade parameters:

- **Number of blades:** More blades = higher static pressure, but also higher noise.
- **Blade pitch:** Steeper pitch = more static pressure but more noise.
- **Blade curvature:** Curved blades reduce turbulence and noise compared to flat blades.
- **Leading edge:** Rounded leading edges reduce noise from air separation.

## Advanced AIO Liquid Cooling

### Pump Types

| Pump Type | Location | Noise | Reliability | Flow Rate |
|-----------|----------|-------|-------------|-----------|
| Centrifugal (most common) | Cold plate | Low-Moderate | High | 60–120 L/h |
| Peristaltic | External | High | Moderate | 30–80 L/h |
| Axial | Cold plate | Moderate | Moderate | 80–150 L/h |

Centrifugal pumps are the most common in AIO coolers. They use an impeller to push coolant
radially outward, creating pressure that drives flow through the loop. The pump is typically
integrated into the cold plate assembly.

### Coolant Composition

AIO coolant is typically a mixture of:

- **Propylene glycol (30–40%):** Antifreeze and anti-corrosion agent. Lowers the freezing point
  and raises the boiling point of water.
- **Deionized water (60–70%):** Primary heat transfer fluid. Higher thermal conductivity than
  glycol.
- **Anti-corrosion additives:** Inhibit galvanic corrosion between dissimilar metals (copper cold
  plate, aluminum radiator).
- **Biocide:** Prevents biological growth (algae, bacteria) in the loop.

### Radiator Fin Density (FPI)

FPI (Fins Per Inch) determines the balance between surface area and airflow resistance:

| FPI | Density | Fan Required | Use Case |
|-----|---------|-------------|----------|
| 12–16 | Low | Low-RPM fans | Quiet builds, large radiators |
| 17–20 | Medium | Medium-RPM fans | Most builds |
| 21–30 | High | High-RPM fans | Maximum cooling, loud |

Low-FPI radiators (12–16 FPI) perform better with low-RPM fans because the airflow can penetrate
the fin stack more easily. High-FPI radiators require high-static-pressure fans to push air through
the dense fin stack, which generates more noise.

### Cross-Flow vs. Down-Flow Radiator Mounting

| Mounting | Airflow | Thermals | Tube Routing | Use Case |
|----------|---------|----------|-------------|----------|
| Top exhaust | Bottom to top | Good | Down and over | Standard |
| Top intake | Top to bottom | Slightly worse | Down and over | Positive pressure, dust management |
| Front intake | Front to back | Good | Side and up | Standard |
| Side mount | Horizontal | Variable | Side | Specialty cases |

## Custom Loop Design Considerations

### Loop Planning

Before purchasing components, plan the loop:

1. **Calculate total thermal load:** Sum the TDP of all components (CPU + GPU + any additional
   blocks). This determines the radiator capacity needed.
2. **Determine radiator capacity:** A general guideline is 120 mm of radiator per 100 W of heat
   load. For a 250 W CPU + 350 W GPU = 600 W total, you need approximately 720 mm of radiator
   (a 360 mm + 360 mm configuration).
3. **Choose tube routing:** Minimize bends and tube length. Every 90-degree bend adds flow
   restriction.
4. **Plan drain points:** Include a drain port at the lowest point of the loop for easy coolant
   changes.

### Tube Routing Best Practices

- **Minimize tube length.** Longer tubes add flow restriction and reduce flow rate.
- **Avoid sharp bends.** Use 45-degree fittings instead of two 90-degree fittings.
- **Route tubes away from heat sources** (VRMs, GPU backplate, motherboard chipset).
- **Leave slack for maintenance.** Do not route tubes so tightly that removing a component
  requires draining the loop.
- **Use consistent tube material.** Mixing PETG and acrylic rigid tubing is fine, but do not
  mix soft tubing and rigid tubing in the same run.

### Coolant Maintenance Schedule

| Maintenance Task | Frequency | Notes |
|-----------------|-----------|-------|
| Check coolant level | Monthly | Top off if below minimum |
| Check for discoloration/debris | Monthly | Cloudy or discolored coolant needs replacement |
| Clean radiator fins | Quarterly | Use compressed air or soft brush |
| Replace coolant | 12–18 months | Flush with distilled water before refilling |
| Replace soft tubing | 24–36 months | PETG/acrylic rigid tubing does not need replacement |
| Inspect blocks for corrosion | Annually | Remove blocks and inspect interior surfaces |
| Clean pump/reservoir | Annually | Remove debris from pump impeller |

### Water Block Selection

| Block Type | Restriction | Cooling Performance | Compatibility |
|-----------|-------------|--------------------|---------------|
| Full-cover GPU | High | Excellent | GPU-specific |
| CPU block (universal) | Moderate | Good | Socket-specific |
| Monoblock (CPU + VRM) | Moderate | Excellent | Motherboard-specific |
| RAM block | Low | Minimal | DIMM-specific |

Full-cover GPU blocks cool the GPU die, VRAM, and VRMs. They are the most effective but are
specific to each GPU model. When upgrading your GPU, you need a new block.

## Case Airflow Simulation

### Pressure Differential Analysis

Case airflow is driven by the pressure differential between the inside and outside of the case.
The net pressure depends on the fan configuration:

$$
\Delta P = \sum P_{intake} - \sum P_{exhaust}
$$

- $\Delta P \gt 0$: Positive pressure. Air enters through filtered intakes, exits through
  unfiltered exhausts. Dust management is better.
- $\Delta P \lt 0$: Negative pressure. Air enters through unfiltered gaps, exits through
  exhausts. Dust accumulates everywhere.
- $\Delta P \approx 0$: Balanced pressure. Equal intake and exhaust. Good compromise.

### Measuring Case Airflow

You can estimate case airflow by measuring the temperature rise of exhaust air:

$$
\dot{m} = \frac{Q}{c_p \times \Delta T}
$$

Where:
- $\dot{m}$ is the mass flow rate (kg/s)
- $Q$ is the total heat load (W)
- $c_p$ is the specific heat of air (1005 J/kg·K)
- $\Delta T$ is the temperature rise of exhaust air (K)

For a 500 W system with a 10 °C exhaust temperature rise:

$$
\dot{m} = \frac{500}{1005 \times 10} = 0.050 \text{ kg/s} \approx 150 \text{ CFM}
$$

If your total fan capacity (intake + exhaust) is less than 150 CFM, the case will have
positive pressure (air cannot exhaust fast enough), and internal temperatures will rise.

### Fan Placement Optimization

```
Front:  2x 140mm intake (filtered)     → GPU + CPU intake air
Rear:   1x 120mm exhaust               → CPU exhaust
Top:    2x 140mm exhaust (or intake)   → General exhaust
Bottom: 1x 120mm intake (filtered)     → GPU intake (if PSU shroud allows)
```

**Rules:**

1. Bottom intake fans should have dust filters.
2. Rear exhaust should be directly behind the CPU cooler.
3. Top exhaust fans should be offset from the CPU cooler to avoid pulling CPU exhaust back
   into the case.
4. Do not create competing airflow paths (e.g., front intake blowing directly against top
   exhaust pulling in the same direction).

## Thermal Interface for GPUs

### GPU Direct Die vs. IHS

Some GPUs (NVIDIA Founders Edition RTX 30/40 series) use a vapor chamber cold plate that makes
direct contact with the GPU die. Others (most custom board partner cards) use a traditional
copper IHS (Integrated Heat Spreader) soldered to the die.

- **Direct die contact:** Lower thermal resistance but more fragile. Thermal paste is applied
  directly to the bare die.
- **IHS:** Higher thermal resistance (extra layer) but more robust and easier to repaste.

### GPU Thermal Pad Replacement

GPU memory and VRM areas use thermal pads (not paste). When repasting a GPU:

1. Measure the existing pad thickness with calipers (typically 1.0–2.0 mm).
2. Replace with pads of the exact same thickness. Thicker pads make better contact but increase
  thermal resistance.
3. Use high-quality pads (Thermalright, Fujipoly). Gelid GP-Extreme is a popular budget option.
4. Ensure pads cover the entire contact area with no gaps.

### VRAM Thermal Considerations

GDDR6/GDDR6X memory modules generate 0.5–1.0 W each. With 12–24 modules on a high-end GPU,
VRAM contributes 6–24 W of heat. Inadequate VRAM cooling can cause memory clock throttling
even when the GPU core temperature is acceptable.

## Environmental Factors

### Ambient Temperature Impact

CPU temperature is the sum of the ambient temperature and the thermal rise from the CPU to
ambient:

$$
T_{CPU} = T_{ambient} + \Delta T_{CPU-ambient}
$$

If your room is 30 °C instead of 20 °C, your CPU will run 10 °C hotter for the same workload.
This is significant — a CPU that runs at 75 °C in a 20 °C room will hit 85 °C in a 30 °C room.

### Altitude Effects

At higher altitudes, air density decreases, which reduces the cooling capacity of air-based
cooling solutions:

| Altitude | Air Density (vs. sea level) | Cooling Capacity Reduction |
|----------|---------------------------|---------------------------|
| 0 m (sea level) | 100% | 0% |
| 1000 m | 88% | ~12% |
| 2000 m | 78% | ~22% |
| 3000 m | 69% | ~31% |

At 2000 m altitude, your cooling solution is approximately 22% less effective. This means a
cooler rated for 250 W at sea level can only handle approximately 195 W at 2000 m. Plan
accordingly if you live at high altitude.

## Detailed Fan Analysis

### Fan Curves and PWM Control

PWM (Pulse Width Modulation) controls fan speed by rapidly switching the power on and off. The
duty cycle determines the percentage of time the power is on:

| Duty Cycle | Effective Voltage (12V fan) | Approximate RPM |
|-----------|---------------------------|-----------------|
| 0% | 0 V | 0 RPM (stopped) |
| 25% | 3 V | 25–30% of max RPM |
| 50% | 6 V | 50–55% of max RPM |
| 75% | 9 V | 75–80% of max RPM |
| 100% | 12 V | 100% RPM |

Modern 4-pin PWM fans maintain a constant 12V supply and use the PWM signal to control the fan
motor directly. This provides smoother speed control and lower minimum speeds than 3-pin DC
fans.

### Fan Noise Spectrum

Fan noise has multiple components:

1. **Broadband noise (airflow):** The sound of air moving through the fan blades and heatsink
   fins. This increases with RPM and airflow volume.
2. **Tonal noise (blade pass frequency):** A tonal component at the blade pass frequency (BPF):

$$
BPF = RPM \times N_{blades} / 60
$$

For a 2000 RPM fan with 9 blades, BPF = 300 Hz. This is in the range where human hearing is
most sensitive (200–4000 Hz), making tonal noise particularly noticeable.

3. **Motor noise (bearing):** High-frequency whine from the bearing. FDB bearings produce the
   least motor noise.
4. **Vibration noise:** Low-frequency noise from fan vibration transmitted through the case.
   Decoupled mounts (rubber grommets, silicone pads) reduce this.

### Acoustic Optimization Techniques

1. **Use larger fans at lower RPM.** Two 140 mm fans at 800 RPM move the same air as one 120 mm
   fan at 1600 RPM, but at significantly lower noise.
2. **Enable fan curves.** Never run all fans at 100%. Match fan speed to actual cooling demand.
3. **Decouple fans from the case.** Use rubber mounts or silicone grommets to prevent vibration
   transmission.
4. **Use undervolting on CPU and GPU.** Lower voltage = lower heat = lower fan speed = lower noise.
5. **Cable management.** Cables that obstruct airflow force fans to work harder, increasing noise.
6. **Anti-vibration pads.** Place the case on anti-vibration pads if it is on a hard surface
   (desk, floor).

## Thermal Design for Small Form Factor

### SFF Challenges

Small form factor (SFF) builds face unique thermal challenges:

1. **Limited cooler height.** Many SFF cases restrict cooler height to 40–70 mm, eliminating
   tower coolers.
2. **Limited fan count.** SFF cases typically have 1–2 fan mounts, reducing airflow.
3. **Higher component density.** Components are closer together, increasing internal temperatures.
4. **Constrained airflow paths.** Shorter distance between intake and exhaust means air does not
   have time to dissipate heat.

### SFF Cooling Strategies

| Strategy | Description | Thermals | Noise |
|----------|-------------|----------|-------|
| Low-profile air cooler | Noctua NH-L9a-AM4, be quiet! LP | Moderate | Low |
| AIO (120mm or 240mm) | Compact liquid cooling | Good | Moderate |
| Desk-facing case | Case acts as convection surface | Good | Very Low |
| Ducted airflow | Direct intake to CPU cooler | Good | Low |

### SFF-Specific Considerations

- **Top-mount AIOs** in SFF cases should use intake airflow (pulling cool air from outside) for
  the best thermals, even though this creates positive pressure.
- **Low-profile coolers** rely heavily on case airflow because their fin area is small. Ensure the
  case has good intake airflow.
- **GPU blower-style coolers** exhaust heat directly out of the case, which is beneficial in SFF
  builds where the GPU would otherwise dump heat onto the CPU cooler.

## Thermal Monitoring Deep Dive

### Linux Thermal Zones

```bash
# List all thermal zones
ls /sys/class/thermal/

# Read thermal zone temperature
cat /sys/class/thermal/thermal_zone0/temp
# Output is in millidegrees Celsius (divide by 1000)

# Read trip points (temperature thresholds)
cat /sys/class/thermal/thermal_zone0/trip_point_*_temp

# Set cooling device state (fan speed)
echo 100 | sudo tee /sys/class/thermal/cooling_device0/cur_state
```

### ACPI Thermal Management

ACPI defines thermal zones with trip points that trigger cooling actions:

| Trip Point Type | Action | Typical Setting |
|----------------|--------|----------------|
| Passive | Throttle CPU (reduce P-state) | 85 °C |
| Active (fan) | Increase fan speed | 60 °C, 70 °C, 80 °C |
| Critical | Emergency shutdown | 100 °C |

### Cross-Platform Monitoring Script

```bash
#!/bin/bash
# Simple temperature monitor
while true; do
    echo "=== $(date) ==="
    # CPU temperature
    cat /sys/class/thermal/thermal_zone*/temp 2>/dev/null | \
        while read temp; do
            echo "  Thermal zone: $((temp / 1000))°C"
        done
    # GPU temperature (NVIDIA)
    nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader 2>/dev/null | \
        while read temp; do
            echo "  GPU: ${temp}°C"
        done
    # Fan speeds
    cat /sys/class/hwmon/hwmon*/fan*_input 2>/dev/null | \
        while read rpm; do
            echo "  Fan: ${rpm} RPM"
        done
    sleep 5
done
```

## Advanced Troubleshooting

### Diagnosing Thermal Issues

When temperatures are higher than expected, check in this order:

1. **Verify contact.** Remove the cooler and inspect the thermal paste pattern. A good pattern
   covers the entire IHS with a thin, even layer. Gaps or thick spots indicate poor contact.
2. **Check mounting pressure.** The cooler should be firmly mounted with even pressure. Loose
   mounting creates air gaps that dramatically increase thermal resistance.
3. **Verify fan operation.** Confirm all fans are spinning and in the correct direction. A
   reversed fan (exhaust blowing in) can raise temperatures by 10–20 °C.
4. **Check case airflow.** Ensure intake and exhaust paths are unobstructed. Remove side panels
   temporarily to see if temperatures drop significantly (indicating a case airflow problem).
5. **Check ambient temperature.** A hot room directly raises all component temperatures.
6. **Verify TIM quality.** Some thermal pastes degrade quickly (after 6 months) or were
   improperly applied at the factory.

### Uneven Core Temperatures

On multi-core CPUs, it is normal for individual core temperatures to vary by 5–15 °C. The
hottest core is typically the one closest to the VRMs or the one with the highest sustained
load. However, if the variance exceeds 20 °C, check:

1. **Cooler mounting.** Uneven mounting pressure causes one side of the IHS to have worse
   contact than the other.
2. **Thermal paste application.** An uneven application creates thick spots with higher thermal
   resistance.
3. **Silicon quality.** Some cores simply run hotter due to manufacturing variance. This is
   normal and cannot be fixed.

### Temperature Spikes and Transients

Modern CPUs can spike to high temperatures (20–30 °C above average) for brief periods during
sudden load transitions. These spikes are caused by the CPU ramping from a low P-state to a high
P-state before the cooling system can respond. They are normal and not cause for concern as long
as average temperatures remain within safe limits.

:::

:::
