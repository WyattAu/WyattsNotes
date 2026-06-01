---
title: Science Practice Questions
slug: sat/science-practice
date: 2026-05-30
tags:
  - SAT
  - ACT
  - science
categories:
  - SAT
description:
  General Science practice problems with step-by-step solutions. Covers biology, chemistry, physics,
  and earth science, including data interpretation and.
---

## Overview

This page contains 15 practice problems covering general science topics commonly tested on
standardised science sections such as the **ACT Science** test and other science-based assessments.
Questions are organised by discipline and include data interpretation and experimental analysis
problems.

---

## Biology

### Problem 1: Cell Division

A biologist observes a population of cells undergoing mitosis. She counts 320 cells at the start of
the experiment and 1,280 cells after 6 hours. Assuming exponential growth with no cell death, how
many generations (rounds of cell division) occurred during this period?

**Solution:**

The number of cells after $n$ generations is given by:

$$N = N_0 \times 2^n$$

where $N_0 = 320$ and $N = 1280$.

$$1280 = 320 \times 2^n$$

$$\frac{1280}{320} = 2^n$$

$$4 = 2^n$$

$$n = 2$$

**Answer:** 2 generations occurred during the 6-hour period.

---

### Problem 2: Genetics

In a certain plant species, flower colour is controlled by a single gene with two alleles: red ($R$)
is dominant over white ($r$). A heterozygous plant ($Rr$) is crossed with a homozygous white plant
($rr$). What is the expected phenotypic ratio of the offspring?

**Solution:**

Punnett square for the cross $Rr \times rr$:

|       | **r** | **r** |
| ----- | ----- | ----- |
| **R** | Rr    | Rr    |
| **r** | rr    | rr    |

Genotypic ratio: 2 $Rr$ : 2 $rr$ (i.e. 1:1)

Phenotypic ratio: 2 red : 2 white (i.e. **1:1**), since $Rr$ displays the dominant red phenotype and
$rr$ displays the recessive white phenotype.

**Answer:** 1 red : 1 white

---

### Problem 3: Enzyme Kinetics

An enzyme-catalysed reaction is studied at different substrate concentrations. The initial reaction
rate is measured and the following data obtained:

| [S] (mmol/L) | Rate (μmol/min) |
| ------------ | --------------- |
| 0.5          | 8.3             |
| 1.0          | 14.3            |
| 2.0          | 22.2            |
| 5.0          | 33.3            |
| 10.0         | 40.0            |

The maximum reaction rate ($V_{\max}$) is known to be 50 μmol/min. What is the Michaelis constant
($K_m$) for this enzyme?

**Solution:**

Using the Michaelis-Menten equation:

$$v = \frac{V_{\max} [S]}{K_m + [S]}$$

Using the data point where $[S] = 1.0$ mmol/L and $v = 14.3$ μmol/min:

$$14.3 = \frac{50 \times 1.0}{K_m + 1.0}$$

$$14.3(K_m + 1.0) = 50$$

$$14.3K_m + 14.3 = 50$$

$$14.3K_m = 35.7$$

$$K_m \approx 2.50 \text{ mmol/L}$$

**Answer:** $K_m \approx 2.5$ mmol/L

---

## Chemistry

### Problem 4: Stoichiometry

What mass of sodium chloride (NaCl) is produced when 25.0 g of sodium hydroxide (NaOH) reacts
completely with excess hydrochloric acid (HCl)?

Given: M(NaOH) = 40.0 g/mol, M(NaCl) = 58.5 g/mol

**Solution:**

Balanced equation:

$$\text{NaOH} + \text{HCl} \rightarrow \text{NaCl} + \text{H}_2\text{O}$$

Moles of NaOH:

$$n = \frac{25.0}{40.0} = 0.625 \text{ mol}$$

The stoichiometric ratio NaOH : NaCl is 1:1, so:

$$n(\text{NaCl}) = 0.625 \text{ mol}$$

Mass of NaCl:

$$m = 0.625 \times 58.5 = 36.6 \text{ g}$$

**Answer:** 36.6 g of NaCl

---

### Problem 5: Gas Laws

A gas occupies a volume of 2.00 L at a pressure of 1.50 atm and a temperature of 300 K. If the
pressure is increased to 3.00 atm and the temperature is raised to 450 K, what is the new volume?

**Solution:**

Using the combined gas law:

$$\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$$

Solving for $V_2$:

$$V_2 = \frac{P_1 V_1 T_2}{P_2 T_1} = \frac{1.50 \times 2.00 \times 450}{3.00 \times 300}$$

$$V_2 = \frac{1350}{900} = 1.50 \text{ L}$$

**Answer:** 1.50 L

---

### Problem 6: pH Calculation

What is the pH of a solution prepared by dissolving 0.20 g of NaOH in water and diluting to 500 mL?

Given: M(NaOH) = 40.0 g/mol

**Solution:**

Moles of NaOH:

$$n = \frac{0.20}{40.0} = 0.0050 \text{ mol}$$

Concentration of NaOH:

$$[\text{NaOH}] = \frac{0.0050}{0.500} = 0.010 \text{ mol/L}$$

Since NaOH is a strong base, $[\text{OH}^-] = 0.010$ mol/L.

$$\text{pOH} = -\log_{10}(0.010) = 2.00$$

$$\text{pH} = 14.00 - \text{pOH} = 14.00 - 2.00 = 12.00$$

**Answer:** pH = 12.00

---

## Physics

### Problem 7: Kinematics

A car accelerates uniformly from rest at 3.0 m/s² for 8.0 seconds. How far does the car travel
during this time?

**Solution:**

Using the kinematic equation (starting from rest, $u = 0$):

$$s = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(3.0)(8.0)^2 = \frac{1}{2}(3.0)(64) = 96 \text{ m}$$

**Answer:** 96 m

---

### Problem 8: Forces and Motion

A block of mass 5.0 kg is placed on a horizontal surface. A horizontal force of 20 N is applied to
the block. If the coefficient of kinetic friction between the block and the surface is 0.30, what is
the acceleration of the block?

Given: $g = 9.8$ m/s²

**Solution:**

Net force:

$$F_{\text{net}} = F_{\text{applied}} - F_{\text{friction}}$$

$$F_{\text{friction}} = \mu_k N = \mu_k mg = 0.30 \times 5.0 \times 9.8 = 14.7 \text{ N}$$

$$F_{\text{net}} = 20 - 14.7 = 5.3 \text{ N}$$

Acceleration:

$$a = \frac{F_{\text{net}}}{m} = \frac{5.3}{5.0} = 1.06 \text{ m/s}^2$$

**Answer:** $a \approx 1.1$ m/s²

---

### Problem 9: Electric Circuits

Two resistors, $R_1 = 12\,\Omega$ and $R_2 = 6\,\Omega$, are connected in parallel across a 12 V
battery. What is the total power dissipated by the circuit?

**Solution:**

Equivalent resistance in parallel:

$$\frac{1}{R_{\text{eq}}} = \frac{1}{12} + \frac{1}{6} = \frac{1}{12} + \frac{2}{12} = \frac{3}{12} = \frac{1}{4}$$

$$R_{\text{eq}} = 4\,\Omega$$

Total current:

$$I = \frac{V}{R_{\text{eq}}} = \frac{12}{4} = 3 \text{ A}$$

Total power:

$$P = VI = 12 \times 3 = 36 \text{ W}$$

**Answer:** 36 W

---

### Problem 10: Waves

A sound wave has a frequency of 440 Hz and travels at 343 m/s in air. What is its wavelength?

**Solution:**

$$v = f\lambda$$

$$\lambda = \frac{v}{f} = \frac{343}{440} = 0.780 \text{ m}$$

**Answer:** 0.780 m

---

## Earth Science

### Problem 11: Plate Tectonics

The Mid-Atlantic Ridge is a divergent plate boundary where new oceanic crust is formed. If the rate
of seafloor spreading at this ridge is 2.5 cm/year, how far apart will two points on opposite sides
of the ridge be after 1 million years?

**Solution:**

Each point moves away from the ridge at 2.5 cm/year. Since they are on opposite sides, the total
separation rate is:

$$2 \times 2.5 = 5.0 \text{ cm/year}$$

Over 1 million years:

$$d = 5.0 \times 10^6 \text{ cm} = 50 \text{ km}$$

**Answer:** 50 km

---

### Problem 12: Weather and Climate

A weather balloon is launched at sea level where the atmospheric pressure is 101.3 kPa and the
temperature is 25°C. The balloon rises to an altitude where the pressure is 50.7 kPa. Assuming the
temperature remains constant, what is the volume of the balloon at this altitude if its initial
volume was 2.00 m³?

**Solution:**

Using Boyle's Law ($P_1 V_1 = P_2 V_2$):

$$V_2 = \frac{P_1 V_1}{P_2} = \frac{101.3 \times 2.00}{50.7} = 4.00 \text{ m}^3$$

**Answer:** 4.00 m³

---

## Data Interpretation

### Problem 13: Experimental Data

A scientist measures the growth rate of bacteria at different temperatures:

| Temperature (°C) | Growth Rate (divisions/hr) |
| ---------------- | -------------------------- |
| 10               | 0.5                        |
| 20               | 2.0                        |
| 30               | 5.0                        |
| 37               | 8.0                        |
| 40               | 7.0                        |
| 50               | 1.0                        |

At what temperature does the maximum growth rate occur, and what is the approximate percentage
decrease in growth rate when the temperature increases from 37°C to 40°C?

**Solution:**

The maximum growth rate of 8.0 divisions/hr occurs at **37°C**.

Percentage decrease from 37°C to 40°C:

$$\text{Percentage decrease} = \frac{8.0 - 7.0}{8.0} \times 100\% = \frac{1.0}{8.0} \times 100\% = 12.5\%$$

**Answer:** Maximum growth at 37°C; approximately 12.5% decrease from 37°C to 40°C.

---

### Problem 14: Graphical Analysis

A ball is dropped from a height and its velocity is recorded over time:

| Time (s) | Velocity (m/s) |
| -------- | -------------- |
| 0        | 0              |
| 1        | 9.8            |
| 2        | 19.6           |
| 3        | 29.4           |
| 4        | 39.2           |

What is the acceleration of the ball, and how far does it fall in the first 3 seconds?

**Solution:**

The acceleration is the slope of the velocity–time graph:

$$a = \frac{\Delta v}{\Delta t} = \frac{9.8 - 0}{1 - 0} = 9.8 \text{ m/s}^2$$

(Checking: $\frac{39.2}{4} = 9.8$ — consistent throughout.)

Distance in the first 3 seconds (area under the velocity–time graph, or using
$s = \frac{1}{2}at^2$):

$$s = \frac{1}{2}(9.8)(3)^2 = \frac{1}{2}(9.8)(9) = 44.1 \text{ m}$$

**Answer:** Acceleration = 9.8 m/s²; distance = 44.1 m in the first 3 seconds.

---

## Experimental Analysis

### Problem 15: Experimental Design

A student designs an experiment to test the effect of light intensity on the rate of photosynthesis
in aquatic plants. She places identical plants in identical containers of water and varies the
distance of a lamp from each container. She measures the rate of oxygen bubble production over 10
minutes.

| Distance from lamp (cm) | Bubbles per minute |
| ----------------------- | ------------------ |
| 10                      | 28                 |
| 20                      | 21                 |
| 30                      | 14                 |
| 40                      | 8                  |
| 50                      | 5                  |

(a) Identify the independent and dependent variables. (b) As the distance doubles from 20 cm to 40
cm, the bubble rate approximately halves. Which law or relationship does this follow? (c) What is a
controlled variable in this experiment?

**Solution:**

(a) **Independent variable:** Distance from the lamp (or equivalently, light intensity). **Dependent
variable:** Rate of oxygen bubble production (bubbles per minute).

(b) The relationship follows the **inverse square law** for light intensity:
$I \propto \frac{1}{d^2}$. When the distance doubles from 20 cm to 40 cm, the light intensity
decreases by a factor of 4 ($\frac{1}{20^2} / \frac{1}{40^2} = \frac{1}{400} / \frac{1}{1600} = 4$).
However, the observed bubble rate only halves, not quarters. This suggests the relationship is
approximately **inverse ($I \propto 1/d$)** rather than strictly inverse square, which can occur
when other factors (e.g., CO₂ concentration, water temperature) become limiting at higher
intensities.

(c) **Controlled variables** include: type and size of plant, volume and temperature of water,
duration of measurement, type of light source, and CO₂ concentration in the water.

**Answer:** (a) Independent: lamp distance; Dependent: bubble rate. (b) Approximately inverse
relationship ($1/d$), deviating from the strict inverse square law due to limiting factors. (c)
Plant type, water volume, water temperature, light source type, CO₂ concentration.

## Worked Examples

### Example 1: Analysing an Experimental Design

**Problem:** A student measures the rate of a chemical reaction at different temperatures. The
student records the time for a colour change and repeats each measurement twice. Evaluate the
experimental method and suggest one improvement. **Approach:** Identify strengths (repetition
improves reliability, controlled variable is temperature) and weaknesses (only two repeats is
insufficient for reliable averages, no mention of controlling other variables such as concentration
or catalyst presence). Improvement: increase to at least 3-5 repeats per temperature, or use a data
logger for more precise timing.

### Example 2: Interpreting a Data Table

**Problem:** A table shows the concentration of dissolved oxygen in a river at four sampling points:
A (upstream) = 8.2 mg/L, B (near factory) = 3.1 mg/L, C (downstream) = 5.5 mg/L, D (far downstream)
= 7.8 mg/L. Explain the pattern. **Approach:** Dissolved oxygen decreases near the factory (point B)
due to pollution that increases biological oxygen demand from decomposing organic matter. It
recovers downstream (C, D) as the river by definition re-oxygenates through aeration and
photosynthesis. The recovery is not complete at C, suggesting ongoing effects, but near-complete at
D indicates the river has sufficient self-purification capacity.

## Common Pitfalls

- **Confusing independent and dependent variables.** The independent variable is the one the
  experimenter changes; the dependent variable is the one measured. Mixing these up leads to
  incorrect conclusions about causation.
- **Stating a correlation implies causation.** Just because two variables change together does not
  mean one causes the other. SAT science questions frequently test this distinction.
- **Forgetting to mention controlled variables.** Every experiment has variables that must be kept
  constant. Omitting them from an experimental design answer loses marks.
- **Describing data without using numbers.** Vague descriptions like "the value increases" are
  insufficient. Reference specific data points to support claims.

## Summary

The SAT science question bank covers experimental design (identifying variables, evaluating methods,
suggesting improvements), data interpretation (tables, graphs, identifying patterns and anomalies),
and scientific reasoning (correlation vs. causation, drawing conclusions, evaluating evidence).
Questions span biology (photosynthesis, cell biology, ecology), chemistry (reactions, bonding,
rates), and physics (electricity, forces, waves). Key exam skills include precise use of scientific
terminology, reference to specific data points, and understanding of experimental controls.

## Cross-References

| Topic                   | Link                                                 |
| ----------------------- | ---------------------------------------------------- |
| SAT Advanced Strategies | [View](/docs_qualifications/sat/advanced-strategies) |
| SAT Math Strategies     | [View](/docs_qualifications/sat/math-strategies)     |
