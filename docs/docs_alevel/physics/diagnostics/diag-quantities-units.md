---
title: "Quantities and Units -- Diagnostic Tests"
description: Diagnostic tests for SI units, dimensional analysis, uncertainty propagation, and significant figures at the hardest A-Level Physics standard.
slug: diag-quantities-units
hide_table_of_contents: true
---

# Quantities and Units — Diagnostic Tests

## Unit Tests

### UT-1: Dimensional Analysis of a Non-Standard Formula

**Question:**

A student proposes the following equation for the drag force $F_D$ on a sphere of radius $r$ moving at speed $v$ through a fluid of density $\rho$ and dynamic viscosity $\eta$:

$$F_D = k \, r^n \, v^m \, \rho^p \, \eta^q$$

where $k$ is a dimensionless constant.

Given that dynamic viscosity $\eta$ has dimensions $\text{M}\text{L}^{-1}\text{T}^{-1}$, use dimensional analysis to find the values of $n$, $m$, $p$, and $q$ such that the equation is dimensionally consistent. Express the resulting formula with $n$ as the subject.

**Solution:**

The dimensions of each quantity:

- $F_D$: $\text{M}\text{L}\text{T}^{-2}$
- $r$: $\text{L}$
- $v$: $\text{L}\text{T}^{-1}$
- $\rho$: $\text{M}\text{L}^{-3}$
- $\eta$: $\text{M}\text{L}^{-1}\text{T}^{-1}$

Setting up the dimensional equation:

$$\text{M}\text{L}\text{T}^{-2} = \text{L}^n \cdot (\text{L}\text{T}^{-1})^m \cdot (\text{M}\text{L}^{-3})^p \cdot (\text{M}\text{L}^{-1}\text{T}^{-1})^q$$

Expanding:

$$\text{M}\text{L}\text{T}^{-2} = \text{M}^{p+q} \cdot \text{L}^{n + m - 3p - q} \cdot \text{T}^{-m - q}$$

Equating exponents for each dimension:

**Mass:** $1 = p + q$

**Length:** $1 = n + m - 3p - q$

**Time:** $-2 = -m - q$, so $m + q = 2$

We have three equations with four unknowns, so we express in terms of one variable. Using $n$ as the subject:

From the mass equation: $p = 1 - q$

From the time equation: $m = 2 - q$

Substituting into the length equation:

$$1 = n + (2 - q) - 3(1 - q) - q$$
$$1 = n + 2 - q - 3 + 3q - q$$
$$1 = n - 1 + q$$
$$n = 2 - q$$

So the exponents in terms of $q$ are: $n = 2 - q$, $m = 2 - q$, $p = 1 - q$.

For the standard Stokes' drag ($q = 1$): $n = 1$, $m = 1$, $p = 0$, giving $F_D = k r v \eta$.

For high Reynolds number drag ($q = 0$): $n = 2$, $m = 2$, $p = 1$, giving $F_D = k r^2 v^2 \rho$.

---
### UT-2: Propagation of Uncertainties with Correlated Measurements

**Question:**

The period $T$ of a simple pendulum is related to its length $l$ by $T = 2\pi\sqrt{l/g}$, where $g$ is the acceleration due to free fall.

A student measures $T = (2.00 \pm 0.02)\,\text{s}$ and uses a value of $g = (9.81 \pm 0.01)\,\text{m}\,\text{s}^{-2}$ to calculate $l$.

(a) Calculate $l$ and its absolute uncertainty.

(b) The student then measures $l$ directly with a metre rule as $l = (0.993 \pm 0.002)\,\text{m}$. Comment on whether the two values of $l$ are consistent at the level of their combined uncertainties.

**Solution:**

(a) Rearranging: $l = \frac{gT^2}{4\pi^2}$

Central value:

$$l = \frac{9.81 \times 2.00^2}{4\pi^2} = \frac{9.81 \times 4.00}{39.478} = \frac{39.24}{39.478} = 0.9940\,\text{m}$$

Using the fractional uncertainty method:

$$\frac{\Delta l}{l} = \frac{\Delta g}{g} + 2\frac{\Delta T}{T}$$
$$\frac{\Delta l}{l} = \frac{0.01}{9.81} + 2 \times \frac{0.02}{2.00} = 0.00102 + 0.0200 = 0.0210$$

$$\Delta l = 0.0210 \times 0.9940 = 0.0209 \approx 0.021\,\text{m}$$

So $l = (0.994 \pm 0.021)\,\text{m}$.

Note: The uncertainty is dominated by the measurement of $T$ (which enters as $T^2$, doubling its fractional contribution). The uncertainty in $g$ is negligible by comparison.

(b) Calculated: $l_{\text{calc}} = 0.994 \pm 0.021\,\text{m}$

Direct: $l_{\text{direct}} = 0.993 \pm 0.002\,\text{m}$

Difference: $|0.994 - 0.993| = 0.001\,\text{m}$

Combined uncertainty: $\sqrt{0.021^2 + 0.002^2} = \sqrt{0.000441 + 0.000004} = \sqrt{0.000445} = 0.0211\,\text{m}$

Since $0.001 \ll 0.0211$, the values are consistent. However, this analysis reveals that the uncertainty in the calculated value is dominated by the timing measurement. The direct measurement of length is far more precise. The timing method introduces unnecessary uncertainty for determining $l$, though it would be the appropriate method if the goal were to determine $g$ from a known $l$.

---
### UT-3: Distinguishing Systematic and Random Uncertainties

**Question:**

A student uses a digital voltmeter (rated accuracy $\pm 0.5\%$ of reading $+ 2$ in the last digit) to measure the EMF of a cell. They record the following readings over several trials: $1.52\,\text{V}$, $1.52\,\text{V}$, $1.52\,\text{V}$, $1.52\,\text{V}$, $1.52\,\text{V}$.

(a) Identify the sources of systematic and random uncertainty in this measurement.

(b) Calculate the total uncertainty in the voltage reading, stating your answer to an appropriate number of significant figures.

(c) The student then uses an analogue voltmeter with the same accuracy specification but observes readings of $1.52\,\text{V}$, $1.53\,\text{V}$, $1.51\,\text{V}$, $1.52\,\text{V}$, $1.54\,\text{V}$. Explain why the random uncertainty has changed while the systematic uncertainty has not.

**Solution:**

(a) **Systematic uncertainty:** The $\pm 0.5\%$ of reading is a systematic uncertainty arising from calibration of the instrument. The $+2$ in the last digit is also systematic (quantisation error of the ADC). These affect all readings equally in the same direction.

**Random uncertainty:** From the repeated readings, the standard deviation of the mean provides the random uncertainty. Since all five readings are identical ($1.52\,\text{V}$), the random uncertainty is effectively zero for the digital instrument (its resolution is too coarse to reveal fluctuations).

(b) Total uncertainty = systematic uncertainty:

Percentage component: $0.5\% \times 1.52 = 0.0076\,\text{V}$

Last digit component: $2 \times 0.01 = 0.02\,\text{V}$ (the resolution is $\pm 0.01\,\text{V}$, so 2 in the last digit $= 0.02\,\text{V}$)

Combined systematic (adding in quadrature):

$$\Delta V = \sqrt{0.0076^2 + 0.02^2} = \sqrt{0.0000578 + 0.0004} = \sqrt{0.000458} = 0.0214 \approx 0.02\,\text{V}$$

So $V = (1.52 \pm 0.02)\,\text{V}$ (to 3 significant figures, matching the resolution of the instrument).

(c) The **analogue voltmeter** has a continuously moving needle, so the observer introduces **parallax error** and **judgement uncertainty** in reading the scale. These are **random** because the reading position on the scale varies slightly each time. The **systematic** uncertainty has not changed because both instruments share the same calibration accuracy specification ($\pm 0.5\% + 2$ in the last digit). Systematic uncertainties are properties of the instrument's calibration, not of how the reading is taken. The analogue meter reveals random uncertainty that the digital meter's coarse resolution conceals.

## Integration Tests

### IT-1: Dimensional Consistency Check on a Projectile Range Formula (with Kinematics)

**Question:**

A student derives the following expression for the horizontal range $R$ of a projectile launched at angle $\theta$ above the horizontal with initial speed $u$ from a cliff of height $h$:

$$R = \frac{u^2 \sin(2\theta)}{2g}\left(1 + \sqrt{1 + \frac{2gh}{u^2\sin^2\theta}}\right)$$

Without deriving this formula, verify it is dimensionally correct.

**Solution:**

We need to show that the right-hand side has dimensions of length ($\text{L}$).

**First term:** $\frac{u^2}{g}$

Dimensions: $\frac{(\text{L}\text{T}^{-1})^2}{\text{L}\text{T}^{-2}} = \frac{\text{L}^2\text{T}^{-2}}{\text{L}\text{T}^{-2}} = \text{L}$

$\sin(2\theta)$ and $\sin^2\theta$ are dimensionless.

**Inside the square root:** $\frac{2gh}{u^2\sin^2\theta}$

Dimensions: $\frac{(\text{L}\text{T}^{-2}) \cdot \text{L}}{(\text{L}\text{T}^{-1})^2} = \frac{\text{L}^2\text{T}^{-2}}{\text{L}^2\text{T}^{-2}} = 1$ (dimensionless)

The square root of a dimensionless quantity is dimensionless. The expression inside the parentheses is $1 + \text{dimensionless}$, which is dimensionless.

So the overall expression is: $\text{L} \times \text{dimensionless} \times \text{dimensionless} = \text{L}$

The formula is dimensionally correct.

---
### IT-2: Uncertainty in a Derived Quantity from a Practical Experiment (with Dynamics)

**Question:**

In an experiment to determine the acceleration of free fall $g$, a student drops a steel ball from rest through a light gate at a measured distance $d$ below the release point. The light gate records the speed $v$ of the ball as it passes through. The relationship is $v^2 = 2gd$, so $g = v^2/(2d)$.

The student records: $d = (1.500 \pm 0.003)\,\text{m}$, $v = (5.40 \pm 0.05)\,\text{m}\,\text{s}^{-1}$.

(a) Calculate $g$ and its absolute uncertainty.

(b) The student suspects there is an additional systematic error of $+0.10\,\text{m}\,\text{s}^{-1}$ in the speed measurement due to the finite size of the ball passing through the light gate. Recalculate $g$ accounting for this systematic error, and state the total uncertainty.

**Solution:**

(a) Central value:

$$g = \frac{v^2}{2d} = \frac{5.40^2}{2 \times 1.500} = \frac{29.16}{3.000} = 9.720\,\text{m}\,\text{s}^{-2}$$

Fractional uncertainty:

$$\frac{\Delta g}{g} = 2\frac{\Delta v}{v} + \frac{\Delta d}{d} = 2 \times \frac{0.05}{5.40} + \frac{0.003}{1.500} = 0.01852 + 0.00200 = 0.02052$$

$$\Delta g = 0.02052 \times 9.720 = 0.1995 \approx 0.20\,\text{m}\,\text{s}^{-2}$$

So $g = (9.72 \pm 0.20)\,\text{m}\,\text{s}^{-2}$.

(b) The systematic error of $+0.10\,\text{m}\,\text{s}^{-1}$ means the true speed is $v_{\text{true}} = v_{\text{measured}} - 0.10 = 5.40 - 0.10 = 5.30\,\text{m}\,\text{s}^{-1}$.

The systematic error shifts the central value but does not change the random uncertainty.

$$g_{\text{corrected}} = \frac{5.30^2}{2 \times 1.500} = \frac{28.09}{3.000} = 9.363\,\text{m}\,\text{s}^{-2}$$

The random uncertainty remains $\pm 0.20\,\text{m}\,\text{s}^{-2}$ (from part a).

The systematic uncertainty in $g$ due to the systematic error in $v$:

$$\Delta g_{\text{sys}} = \frac{2v \cdot \Delta v_{\text{sys}}}{2d} = \frac{2 \times 5.30 \times 0.10}{3.00} = \frac{1.060}{3.00} = 0.353\,\text{m}\,\text{s}^{-2}$$

Total uncertainty (random and systematic combined in quadrature):

$$\Delta g_{\text{total}} = \sqrt{0.20^2 + 0.353^2} = \sqrt{0.0400 + 0.1246} = \sqrt{0.1646} = 0.406 \approx 0.41\,\text{m}\,\text{s}^{-2}$$

So $g = (9.36 \pm 0.41)\,\text{m}\,\text{s}^{-2}$.

The corrected value of $9.36\,\text{m}\,\text{s}^{-2}$ is closer to the accepted $9.81\,\text{m}\,\text{s}^{-2}$, but the systematic correction reveals that the original reading was an overestimate due to the finite ball size.

---
### IT-3: Determining Planck's Constant from Photoelectric Data (with Electric Fields and Waves)

**Question:**

In the photoelectric effect, the stopping potential $V_s$ is related to the frequency $f$ of incident light by $eV_s = hf - \phi$, where $e$ is the elementary charge, $h$ is Planck's constant, and $\phi$ is the work function of the metal surface.

A student obtains the following data:

| $f / 10^{14}\,\text{Hz}$ | 5.0 | 6.0 | 7.0 | 8.0 | 9.0 |
|---|---|---|---|---|---|
| $V_s / \text{V}$ | $0.20 \pm 0.02$ | $0.62 \pm 0.02$ | $1.04 \pm 0.02$ | $1.46 \pm 0.02$ | $1.88 \pm 0.02$ |

The student plots a graph of $V_s$ against $f$ and determines the gradient as $m = (4.2 \pm 0.2) \times 10^{-15}\,\text{V}\,\text{s}$.

(a) Use dimensional analysis to show that the gradient has the correct dimensions for $h/e$.

(b) Calculate $h$ and its uncertainty. Use $e = 1.60 \times 10^{-19}\,\text{C}$.

(c) State the number of significant figures justified for $h$.

**Solution:**

(a) The equation $eV_s = hf - \phi$ can be rearranged as $V_s = \frac{h}{e}f - \frac{\phi}{e}$, which is of the form $y = mx + c$.

Dimensions of the gradient $m = h/e$:

$$[m] = \frac{[h]}{[e]} = \frac{\text{M}\text{L}^2\text{T}^{-1}}{\text{I}\text{T}} = \frac{\text{M}\text{L}^2\text{T}^{-2}}{\text{I}\text{T}^2}$$

The student's gradient has units of $\text{V}\,\text{s} = \frac{\text{J}}{\text{C}} \cdot \text{s} = \frac{\text{kg}\,\text{m}^2\,\text{s}^{-2}}{\text{A}\,\text{s}} \cdot \text{s} = \text{kg}\,\text{m}^2\,\text{s}^{-2}\,\text{A}^{-1}$.

Dimensions of $h$: $\text{M}\text{L}^2\text{T}^{-1}$

Dimensions of $e$: $\text{I}\text{T}$ (charge $=$ current $\times$ time)

$$\frac{[h]}{[e]} = \frac{\text{M}\text{L}^2\text{T}^{-1}}{\text{I}\text{T}} = \text{M}\text{L}^2\text{T}^{-2}\text{I}^{-1}$$

This matches $\text{kg}\,\text{m}^2\,\text{s}^{-2}\,\text{A}^{-1}$, confirming dimensional consistency.

(b) $h = me$:

$$h = 4.2 \times 10^{-15} \times 1.60 \times 10^{-19} = 6.72 \times 10^{-34}\,\text{J}\,\text{s}$$

Fractional uncertainty: $\frac{\Delta h}{h} = \frac{\Delta m}{m} = \frac{0.2}{4.2} = 0.0476$

$$\Delta h = 0.0476 \times 6.72 \times 10^{-34} = 3.20 \times 10^{-35}\,\text{J}\,\text{s}$$

So $h = (6.72 \pm 0.32) \times 10^{-34}\,\text{J}\,\text{s}$.

(c) The uncertainty begins in the second significant figure ($\pm 0.32 \times 10^{-34}$), so the value is given to 2 significant figures: $h = (6.7 \pm 0.3) \times 10^{-34}\,\text{J}\,\text{s}$.

The accepted value is $6.63 \times 10^{-34}\,\text{J}\,\text{s}$, which lies within the uncertainty range, confirming consistency.
