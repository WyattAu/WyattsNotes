---
title: Experimental Design
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: experimental-design
---

## Experimental Design

:::info Board Coverage
AQA Paper 3 | Edexcel CP6 | OCR (A) Paper 3 | CIE P5
:::

## 1. Key Principles of Experimental Design

### Independent, Dependent, and Control Variables

- **Independent variable**: the variable you deliberately change (e.g., length of wire)
- **Dependent variable**: the variable you measure (e.g., resistance)
- **Control variables**: variables you keep constant (e.g., temperature, material, cross-sectional area)

### Reliability, Validity, and Accuracy

**Reliability:** Can the experiment be repeated and give consistent results? Improved by:

- Repeating measurements and calculating a mean
- Using the same equipment and method
- Controlling all variables carefully

**Validity:** Does the experiment actually test what it claims to test? Improved by:

- Controlling all confounding variables
- Using an appropriate method
- Ensuring the measurement directly relates to the hypothesis

**Accuracy:** How close is the result to the true value? Improved by:

- Using calibrated instruments
- Eliminating systematic errors
- Reducing random errors

:::warning Common Pitfall
Do not confuse these three terms. An experiment can be reliable (consistent) but invalid (measuring the wrong thing), or valid but inaccurate (systematic error).
:::

## 2. Planning an Experiment

When asked to design an experiment, address:

1. **Aim:** What are you investigating?
2. **Variables:** Independent, dependent, and control variables
3. **Method:** Step-by-step procedure
4. **Measurements:** What instruments, what range, what intervals
5. **Safety:** Identify hazards and precautions
6. **Reliability:** How many repeats, how to handle outliers
7. **Analysis:** How to process the data (typically linearise and plot)
8. **Uncertainty:** Sources of error and how to minimise them

## 3. Common Apparatus and Techniques

### Measuring Instruments

| Instrument       | Typical Range    | Resolution      | Common Use                  |
| ---------------- | ---------------- | --------------- | --------------------------- |
| Metre rule       | 0–100 cm         | 1 mm            | Lengths                     |
| Vernier calipers | 0–15 cm          | 0.01 mm         | Internal/external diameters |
| Micrometer       | 0–25 mm          | 0.001 mm        | Wire diameters              |
| Digital balance  | 0–200 g          | 0.01 g          | Mass                        |
| Stopwatch        | 0–60 min         | 0.01 s          | Time intervals              |
| Thermometer      | $-10$ to $110°$C | 1°C or 0.1°C    | Temperature                 |
| Voltmeter        | 0–20 V           | 0.01 V or 0.1 V | Potential difference        |
| Ammeter          | 0–10 A           | 0.01 A or 0.1 A | Current                     |

### Improving Precision

- Use instruments with finer resolution
- Measure larger quantities (e.g., time 10 oscillations, not 1)
- Use appropriate measuring ranges
- Reduce parallax errors by reading scales at eye level

### Improving Accuracy

- Calibrate instruments before use
- Correct for zero errors
- Use methods that minimise systematic errors
- Compare with accepted values

## 4. Evaluating Experiments

When asked to evaluate an experiment:

1. **Identify the largest source of uncertainty** — this limits the overall precision.
2. **Suggest specific improvements** — not vague statements like "be more careful".
3. **Discuss systematic errors** — are there unaccounted biases?
4. **Assess whether the method is valid** — does it actually measure what is intended?

### Common Experimental Contexts

**Determining $g$ with a pendulum:**

- Measure period $T$ for various lengths $L$
- Plot $T^2$ vs $L$; gradient $= 4\pi^2/g$
- Largest uncertainty: reaction time when timing

**Determining resistivity:**

- Measure $R$ for various lengths $L$ of wire
- Plot $R$ vs $L$; gradient $= \rho/A$
- Largest uncertainty: wire diameter (use micrometer, measure at multiple positions and average)

**Determining the Young modulus:**

- Measure extension $\Delta L$ for various loads
- Plot stress vs strain; gradient $= E$
- Largest uncertainty: cross-sectional area (measure diameter with micrometer)

:::tip Exam Technique
When asked "how could you improve this experiment?", always be specific. Instead of "use a more accurate instrument", say "use a micrometer instead of a ruler to measure the wire diameter, reducing the uncertainty from $\pm 0.5$ mm to $\pm 0.005$ mm."
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Design an experiment to determine the resistivity of a metal wire. Identify the independent, dependent, and control variables.

**Answer.** **Independent variable:** length $L$ of the wire. **Dependent variable:** resistance $R$ (measured using a voltmeter and ammeter). **Control variables:** material, cross-sectional area, temperature.

**Method:** Measure the diameter with a micrometer at several points and average. Set up the wire in a circuit with an ammeter in series and a voltmeter in parallel. Vary the length from 0.10 m to 1.00 m in 0.10 m steps. Record $V$ and $I$ at each length, calculate $R = V/I$. Plot $R$ vs $L$. Gradient $= \rho/A$, so $\rho = \text{gradient} \times A$.

**Improvements:** Use a low current to avoid heating. Ensure good contact at the crocodile clips. Measure diameter at multiple positions.

<b>If you get this wrong, revise:</b> [Key Principles of Experimental Design](#1-key-principles-of-experimental-design)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

In an experiment to determine $g$ using a simple pendulum, a student measures the time for 20 oscillations. Explain why this improves the reliability compared to timing a single oscillation.

**Answer.** The uncertainty in timing a single oscillation is dominated by human reaction time ($\sim 0.2$ s). For a period of $\sim 1$ s, this gives a percentage uncertainty of $\sim 20\%$. Timing 20 oscillations gives a total time of $\sim 20$ s, and the reaction time uncertainty is still $\sim 0.2$ s (at the start and end), giving a percentage uncertainty of $\sim 0.4/20 = 2\%$. The period uncertainty is reduced by a factor of 20.

<b>If you get this wrong, revise:</b> [Improving Precision](#improving-precision)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Identify the independent, dependent, and control variables in an experiment to investigate how the resistance of a thermistor varies with temperature.

**Answer.** **Independent variable:** temperature $T$ (varied using a water bath). **Dependent variable:** resistance $R$ (measured with an ohmmeter). **Control variables:** type of thermistor, immersion depth, heating rate, method of measurement.

<b>If you get this wrong, revise:</b> [Independent, Dependent, and Control Variables](#independent-dependent-and-control-variables)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A student measures the diameter of a wire using a ruler and obtains 1.0 mm. The actual diameter is 1.02 mm. Explain the systematic error and suggest a better instrument.

**Answer.** The ruler has a resolution of 1 mm, which is too coarse for measuring a wire diameter of $\sim 1$ mm. The reading of 1.0 mm is an approximation. A **micrometer** (resolution 0.001 mm) should be used, reducing the uncertainty from $\pm 0.5$ mm to $\pm 0.005$ mm.

<b>If you get this wrong, revise:</b> [Measuring Instruments](#measuring-instruments)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A student obtains data points that do not lie on a straight line when plotting $T^2$ against $L$ for a pendulum. Suggest three possible reasons and how to investigate each.

**Answer.** (1) **Large angle oscillations**: the formula $T = 2\pi\sqrt{L/g}$ assumes small angles. For angles $> 10°$, the period increases. Solution: use smaller angles ($< 5°$) and repeat. (2) **String not ideal**: the string may stretch or have mass. Solution: use a lighter, inextensible string. (3) **Air resistance**: damping affects the period at large amplitudes. Solution: use a denser bob to minimise air resistance effects.

<b>If you get this wrong, revise:</b> [Evaluating Experiments](#4-evaluating-experiments)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Explain the difference between reliability and validity in the context of an experiment to determine the speed of sound in air using echo timing.

**Answer.** **Reliability:** repeating the experiment gives consistent values of the speed of sound. This is ensured by using the same apparatus, same distance, same temperature control, and taking multiple readings. **Validity:** the method actually measures the speed of sound, not some other quantity. This requires that the distance to the reflecting surface is accurately known, the time measured is truly the echo time (not other reflections), and temperature is controlled (since the speed of sound depends on temperature).

<b>If you get this wrong, revise:</b> [Reliability, Validity, and Accuracy](#reliability-validity-and-accuracy)

</p>
</details>
