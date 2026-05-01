---
title: Quantities and Units
description:
  A-Level Physics notes on Quantities and Units: 1. Physical Quantities and the
  SI System; The Seven SI Base Units; Derived Units; 2. Dimensional Analysis.
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: quantities-and-units
---

## Quantities and Units

:::info Board Coverage AQA Paper 1 & 3 | Edexcel CP1 | OCR (A) Paper 1 | CIE P1 :::

## 1. Physical Quantities and the SI System

We begin with the most fundamental question in physics: **how do we measure things?**

A **physical quantity** is a property of a phenomenon that can be quantified — assigned a numerical
value and compared with other instances of the same quantity. Physical quantities come in two
varieties:

- **Base quantities** are irreducible; they cannot be expressed in terms of other quantities. The SI
  system defines seven base quantities.
- **Derived quantities** are expressed as products and quotients of base quantities.

### The Seven SI Base Units

| Base Quantity       | Symbol | SI Unit  | Unit Symbol |
| ------------------- | ------ | -------- | ----------- |
| Length              | $l$    | metre    | m           |
| Mass                | $m$    | kilogram | kg          |
| Time                | $t$    | second   | s           |
| Electric current    | $I$    | ampere   | A           |
| Temperature         | $T$    | kelvin   | K           |
| Amount of substance | $n$    | mole     | mol         |
| Luminous intensity  | $I_v$  | candela  | cd          |

:::info Note The candela is rarely encountered in A Level Physics. Focus on the first six. :::

### Derived Units

A derived unit is obtained by combining base units according to the physical relationship. We denote
the dimensions of a quantity using square brackets.

**Definition.** The **dimension** of a physical quantity $Q$, written $[Q]$, is its expression in
terms of the base dimensions $\mathsf{M}$ (mass), $\mathsf{L}$ (length), $\mathsf{T}$ (time),
$\mathsf{I}$ (current), $\mathsf{\Theta}$ (temperature), $\mathsf{N}$ (amount of substance),
$\mathsf{J}$ (luminous intensity).

**Examples.**

- Velocity: $[v] = \frac{[s]}{[t]} = \mathsf{L}\mathsf{T}^{-1}$
- Acceleration: $[a] = \frac{[v]}{[t]} = \mathsf{L}\mathsf{T}^{-2}$
- Force (from $F = ma$): $[F] = \mathsf{M}\mathsf{L}\mathsf{T}^{-2}$
- Pressure (from $P = F/A$): $[P] = \mathsf{M}\mathsf{L}^{-1}\mathsf{T}^{-2}$
- Energy (from $W = Fd$): $[E] = \mathsf{M}\mathsf{L}^{2}\mathsf{T}^{-2}$

Some derived units have special names:

| Derived Quantity | Name    | Symbol   | In Base Units                                   |
| ---------------- | ------- | -------- | ----------------------------------------------- |
| Force            | newton  | N        | $\mathrm{kg m s}^{-2}$                          |
| Energy           | joule   | J        | $\mathrm{kg m}^2\mathrm{s}^{-2}$                |
| Power            | watt    | W        | $\mathrm{kg m}^2\mathrm{s}^{-3}$                |
| Pressure         | pascal  | Pa       | $\mathrm{kg m}^{-1}\mathrm{s}^{-2}$             |
| Charge           | coulomb | C        | $\mathrm{A s}$                                  |
| Voltage          | volt    | V        | $\mathrm{kg m}^2\mathrm{s}^{-3}\mathrm{A}^{-1}$ |
| Resistance       | ohm     | $\Omega$ | $\mathrm{kg m}^2\mathrm{s}^{-3}\mathrm{A}^{-2}$ |

## 2. Dimensional Analysis

**Definition.** An equation is **dimensionally homogeneous** (or **dimensionally consistent**) if
every term on each side has the same dimensions.

This is a necessary condition for any physically meaningful equation. If the dimensions do not
balance, the equation is certainly wrong. If they do balance, the equation may still be wrong
(dimensional analysis cannot reveal dimensionless constants), but it is at least plausible.

### Checking the SUVAT Equation

We prove that $v^2 = u^2 + 2as$ is dimensionally valid.

- $[v^2] = (\mathsf{L}\mathsf{T}^{-1})^2 = \mathsf{L}^2\mathsf{T}^{-2}$
- $[u^2] = (\mathsf{L}\mathsf{T}^{-1})^2 = \mathsf{L}^2\mathsf{T}^{-2}$
- $[2as] = [\mathsf{L}\mathsf{T}^{-2}][\mathsf{L}] = \mathsf{L}^2\mathsf{T}^{-2}$

Since $[v^2] = [u^2] = [2as] = \mathsf{L}^2\mathsf{T}^{-2}$, the equation is dimensionally
homogeneous. $\square$

### Determining the Form of an Equation

Suppose we wish to find how the period $T$ of a simple pendulum depends on its length $l$ and the
gravitational field strength $g$. We assume:

$$T = k \cdot l^a \cdot g^b$$

where $k$ is a dimensionless constant. By dimensional homogeneity:

$$\mathsf{T} = \mathsf{L}^a \cdot (\mathsf{L}\mathsf{T}^{-2})^b = \mathsf{L}^{a+b} \cdot \mathsf{T}^{-2b}$$

Equating powers:

$$
\begin{aligned}
\mathsf{T}:&\quad 1 = -2b \implies b = -\frac{1}{2} \\[4pt]
\mathsf{L}:&\quad 0 = a + b \implies a = \frac{1}{2}
\end{aligned}
$$

Therefore $T = k\sqrt{l/g}$. Full analysis reveals $k = 2\pi$.

:::tip Exam Technique Dimensional analysis is invaluable for checking your working. Get into the
habit of verifying dimensions for every formula you derive in an exam.
:::

## 3. SI Prefixes

| Prefix | Symbol | Factor     |
| ------ | ------ | ---------- |
| tera   | T      | $10^{12}$  |
| giga   | G      | $10^9$     |
| mega   | M      | $10^6$     |
| kilo   | k      | $10^3$     |
| centi  | c      | $10^{-2}$  |
| milli  | m      | $10^{-3}$  |
| micro  | $\mu$  | $10^{-6}$  |
| nano   | n      | $10^{-9}$  |
| pico   | p      | $10^{-12}$ |
| femto  | f      | $10^{-15}$ |

## 4. Scalars and Vectors

**Definition.** A **scalar** is a physical quantity that has magnitude only. A **vector** is a
physical quantity that has both magnitude and direction.

| Scalar Examples                                  | Vector Examples                                               |
| ------------------------------------------------ | ------------------------------------------------------------- |
| Mass, temperature, speed, energy, time, distance | Displacement, velocity, acceleration, force, weight, momentum |

### Vector Operations

**Addition.** Vectors are added using the triangle rule or the parallelogram rule. Given vectors
$\mathbf{a}$ and $\mathbf{b}$, the resultant $\mathbf{R} = \mathbf{a} + \mathbf{b}$ is found by
placing the tail of $\mathbf{b}$ at the head of $\mathbf{a}$.

**Resolving.** Any vector $\mathbf{F}$ can be resolved into perpendicular components. If
$\mathbf{F}$ makes an angle $\theta$ with the horizontal:

$$F_x = F\cos\theta, \qquad F_y = F\sin\theta$$

**Magnitude.** Given components $F_x$ and $F_y$:

$$|\mathbf{F}| = \sqrt{F_x^2 + F_y^2}$$

**Direction.** The angle with the horizontal is $\theta = \arctan\left(\frac{F_y}{F_x}\right)$.

## 5. Uncertainty and Error Analysis

### Types of Error

- **Systematic error**: A consistent deviation from the true value, caused by a flaw in the
  apparatus or method. It affects accuracy (closeness to true value) but not precision
  (repeatability). Example: a zero error on a micrometer.
- **Random error**: Unpredictable fluctuations in measured values, caused by limitations in
  resolution or environmental factors. It affects precision but not accuracy. Random errors are
  reduced by taking repeated measurements.

:::warning Common Pitfall Do not confuse precision with accuracy. A precise measurement is
repeatable; an accurate measurement is close to the true value. You can have one without the other.
:::

### Absolute, Fractional, and Percentage Uncertainty

**Definition.** If a quantity is measured as $x \pm \Delta x$, then:

- **Absolute uncertainty**: $\Delta x$
- **Fractional uncertainty**: $\frac{\Delta x}{x}$
- **Percentage uncertainty**: $\frac{\Delta x}{x} \times 100\%$

### Combining Uncertainties

We now derive the rules for propagating uncertainty through calculations. Consider a quantity
$z = f(x, y)$ where $x$ and $y$ have uncertainties $\Delta x$ and $\Delta y$.

#### Rule 1: Addition and Subtraction

If $z = x + y$ or $z = x - y$, then:

$$\Delta z = \Delta x + \Delta y$$

**Derivation.** The worst-case scenario for $z = x + y$ is that both errors push $z$ in the same
direction. The maximum possible value is $z_{\max} = (x + \Delta x) + (y + \Delta y)$, and the
minimum is $z_{\min} = (x - \Delta x) + (y - \Delta y)$. Hence:

$$\Delta z = \frac{z_{\max} - z_{\min}}{2} = \Delta x + \Delta y$$

The same argument applies for subtraction. $\square$

#### Rule 2: Multiplication and Division

If $z = xy$ or $z = x/y$, then:

$$\frac{\Delta z}{z} = \frac{\Delta x}{x} + \frac{\Delta y}{y}$$

In words: when multiplying or dividing, add the **fractional** uncertainties.

**Derivation for $z = xy$.** We have:

$$
\begin{aligned}
z_{\max} &= (x + \Delta x)(y + \Delta y) = xy + x\Delta y + y\Delta x + \Delta x \Delta y \\
z_{\min} &= (x - \Delta x)(y - \Delta y) = xy - x\Delta y - y\Delta x + \Delta x \Delta y
\end{aligned}
$$

For small uncertainties, $\Delta x \Delta y$ is negligible:

$$
\begin{aligned}
\Delta z &= \frac{z_{\max} - z_{\min}}{2} \approx x\Delta y + y\Delta x \\[4pt]
\frac{\Delta z}{z} &= \frac{x\Delta y + y\Delta x}{xy} = \frac{\Delta y}{y} + \frac{\Delta x}{x}
\end{aligned}
$$

$\square$

#### Rule 3: Powers

If $z = x^n$, then:

$$\frac{\Delta z}{z} = |n| \cdot \frac{\Delta x}{x}$$

**Derivation.** Write $z = \underbrace{x \cdot x \cdots x}_{n \mathrm{ times}}$. Applying the
multiplication rule repeatedly:

$$\frac{\Delta z}{z} = \underbrace{\frac{\Delta x}{x} + \frac{\Delta x}{x} + \cdots + \frac{\Delta x}{x}}_{n \mathrm{ terms}} = n \cdot \frac{\Delta x}{x}$$

For negative or fractional powers, the result generalises via logarithmic differentiation (see
[01-wave-properties](../waves/01-wave-properties.md) for the general propagation of error formula).
$\square$

#### The General Propagation of Error Formula

For any function $z = f(x_1, x_2, \ldots, x_n)$:

$$\Delta z = \sqrt{\sum_{i=1}^{n}\left(\frac{\partial f}{\partial x_i} \Delta x_i\right)^2}$$

This is the statistical (root-sum-square) combination, which gives the most probable uncertainty
rather than the worst case. For A Level exams, use the simpler worst-case rules above unless
instructed otherwise.

### Significant Figures and Uncertainty

The number of significant figures in a quoted result should be consistent with the uncertainty.

**Rule.** A result should be quoted to the same number of significant figures as the uncertainty,
and the uncertainty should be quoted to at most 2 significant figures.

**Example.** If a length is measured as $12.3 \pm 0.4$ cm, we quote two significant figures
(matching the uncertainty's one significant figure). We do not write $12.30 \pm 0.4$ cm — the
trailing zero implies precision we do not have.

:::tip Exam Technique When you compute $g = 9.78 \pm 0.15 \mathrm{ m s}^{-2}$, write $9.8 \pm 0.2$ m
s$^{-2}$ (round the uncertainty to 1 s.f. and match the result). This is what examiners expect.
:::

## 6. Determining Uncertainty from Repeated Measurements

When $n$ repeated measurements $x_1, x_2, \ldots, x_n$ are taken of the same quantity:

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

The **absolute uncertainty** is the half-range:

$$\Delta x = \frac{x_{\max} - x_{\min}}{2}$$

For large datasets, the standard deviation of the mean is more appropriate:

$$\Delta x = \frac{\sigma}{\sqrt{n}}, \qquad \sigma = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

## 7. Graphical Analysis of Uncertainties

When determining a physical constant from the gradient of a straight-line graph, we use the **line
of best fit** and the **worst acceptable line** (the steepest and shallowest lines consistent with
the error bars).

The uncertainty in the gradient is:

$$\Delta m = \frac{|m_{\mathrm{best}} - m_{\mathrm{worst}}|}{2}$$

A similar procedure applies to the $y$-intercept.

## Problem Set

<details>
<summary>Problem 1</summary>
A student measures the diameter of a sphere five times and obtains: 2.04 cm, 2.06 cm, 2.05 cm, 2.03 cm, 2.07 cm. Calculate the mean diameter and its absolute uncertainty.

**Answer.** $\bar{d} = \frac{2.04 + 2.06 + 2.05 + 2.03 + 2.07}{5} = 2.05$ cm. The range is
$2.07 - 2.03 = 0.04$ cm, so $\Delta d = 0.02$ cm. Result: $d = 2.05 \pm 0.02$ cm.

<b>If you get this wrong, revise:</b>
[Determining Uncertainty from Repeated Measurements](#6-determining-uncertainty-from-repeated-measurements)

</details>

<details>
<summary>Problem 2</summary>
The kinetic energy of a particle is given by $E_k = \frac{1}{2}mv^2$. Show that this expression is dimensionally consistent with the definition of work $W = Fd$.

**Answer.**
$[E_k] = [\mathrm{mass}][\mathrm{velocity}]^2 = \mathsf{M}(\mathsf{L}\mathsf{T}^{-1})^2 = \mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}$.
Meanwhile
$[W] = [F][d] = (\mathsf{M}\mathsf{L}\mathsf{T}^{-2})(\mathsf{L}) = \mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}$.
The dimensions match. $\square$

<b>If you get this wrong, revise:</b> [Derived Units](#1-physical-quantities-and-the-si-system)

</details>

<details>
<summary>Problem 3</summary>
A force $F = 12.0 \pm 0.3$ N acts over a distance $d = 3.45 \pm 0.05$ m. Calculate the work done and its percentage uncertainty.

**Answer.** $W = Fd = 12.0 \times 3.45 = 41.4$ J. The fractional uncertainties are
$\frac{0.3}{12.0} = 0.025$ and $\frac{0.05}{3.45} = 0.0145$. By the multiplication rule:
$\frac{\Delta W}{W} = 0.025 + 0.0145 = 0.0395$, so $\Delta W = 41.4 \times 0.0395 \approx 1.6$ J.
Result: $W = 41.4 \pm 1.6$ J (3.9% uncertainty).

<b>If you get this wrong, revise:</b>
[Rule 2: Multiplication and Division](#rule-2-multiplication-and-division)

</details>

<details>
<summary>Problem 4</summary>
Use dimensional analysis to show that the expression $v = \sqrt{\frac{2\Delta E}{m}}$ is dimensionally valid, where $\Delta E$ is energy and $m$ is mass.

**Answer.** $[v] = \mathsf{L}\mathsf{T}^{-1}$.
$[\Delta E/m] = \frac{\mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}}{\mathsf{M}} = \mathsf{L}^2\mathsf{T}^{-2}$.
$[\sqrt{2\Delta E/m}] = (\mathsf{L}^2\mathsf{T}^{-2})^{1/2} = \mathsf{L}\mathsf{T}^{-1} = [v]$.
$\square$

<b>If you get this wrong, revise:</b> [Dimensional Analysis](#2-dimensional-analysis)

</details>

<details>
<summary>Problem 5</summary>
The density of a cylinder is $\rho = \frac{m}{\pi r^2 h}$. The mass $m = 150.0 \pm 0.5$ g, radius $r = 1.20 \pm 0.05$ cm, and height $h = 5.00 \pm 0.02$ cm. Calculate $\rho$ and its uncertainty.

**Answer.** $\rho = \frac{150.0}{\pi(1.20)^2(5.00)} = \frac{150.0}{22.62} = 6.63$ g cm$^{-3}$.

Fractional uncertainties: $\frac{0.5}{150.0} = 0.0033$, $\frac{2(0.05)}{1.20} = 0.0833$ (power
rule), $\frac{0.02}{5.00} = 0.004$.

Total fractional uncertainty: $0.0033 + 0.0833 + 0.004 = 0.0907$.
$\Delta\rho = 6.63 \times 0.0907 = 0.60$ g cm$^{-3}$. Result: $\rho = 6.6 \pm 0.6$ g cm$^{-3}$.

<b>If you get this wrong, revise:</b> [Rule 3: Powers](#rule-3-powers)

</details>

<details>
<summary>Problem 6</summary>
Two vectors are given: $\mathbf{A} = 3\mathbf{i} + 4\mathbf{j}$ N and $\mathbf{B} = -2\mathbf{i} + 5\mathbf{j}$ N. Find the magnitude and direction of $\mathbf{A} + \mathbf{B}$.

**Answer.**
$\mathbf{A} + \mathbf{B} = (3-2)\mathbf{i} + (4+5)\mathbf{j} = \mathbf{i} + 9\mathbf{j}$. Magnitude:
$|\mathbf{A}+\mathbf{B}| = \sqrt{1^2 + 9^2} = \sqrt{82} = 9.06$ N. Direction:
$\theta = \arctan(9/1) = 83.7^\circ$ above the positive $x$-axis.

<b>If you get this wrong, revise:</b> [Vector Operations](#4-scalars-and-vectors)

</details>

<details>
<summary>Problem 7</summary>
A student proposes the formula for the period of a mass on a spring: $T = 2\pi\sqrt{\frac{k}{m}}$, where $k$ is the spring constant and $m$ is the mass. Use dimensional analysis to show this formula is incorrect, and find the correct form.

**Answer.** $[T] = \mathsf{T}$.
$[k/m] = \frac{[\mathrm{force}]/[\mathrm{displacement}]}{[\mathrm{mass}]} = \frac{\mathsf{M}\mathsf{L}\mathsf{T}^{-2}/\mathsf{L}}{\mathsf{M}} = \mathsf{T}^{-2}$.
So $[\sqrt{k/m}] = \mathsf{T}^{-1} \neq \mathsf{T}$. The formula is dimensionally wrong. The correct
form is $T = 2\pi\sqrt{\frac{m}{k}}$, which gives
$[\sqrt{m/k}] = \sqrt{\frac{\mathsf{M}}{\mathsf{T}^{-2}}} = \mathsf{T}$. $\square$

<b>If you get this wrong, revise:</b>
[Determining the Form of an Equation](#determining-the-form-of-an-equation)

</details>

<details>
<summary>Problem 8</summary>
Convert 0.0000450 nm to SI base units with appropriate significant figures.

**Answer.** $0.0000450$ nm $= 4.50 \times 10^{-5}$ nm $= 4.50 \times 10^{-5} \times 10^{-9}$ m
$= 4.50 \times 10^{-14}$ m. The result has 3 significant figures, matching the original.

<b>If you get this wrong, revise:</b> [SI Prefixes](#3-si-prefixes)

</details>

<details>
<summary>Problem 9</summary>
A resistance is calculated from $R = \frac{V}{I}$ where $V = 6.00 \pm 0.05$ V and $I = 0.50 \pm 0.02$ A. Find $R$ and its absolute uncertainty.

**Answer.** $R = \frac{6.00}{0.50} = 12.0$ $\Omega$. Fractional uncertainties:
$\frac{0.05}{6.00} = 0.0083$ and $\frac{0.02}{0.50} = 0.04$. Total: $0.0083 + 0.04 = 0.048$.
$\Delta R = 12.0 \times 0.048 = 0.58 \approx 0.6$ $\Omega$. Result: $R = 12.0 \pm 0.6$ $\Omega$.

<b>If you get this wrong, revise:</b>
[Rule 2: Multiplication and Division](#rule-2-multiplication-and-division)

</details>

<details>
<summary>Problem 10</summary>
Explain the difference between a systematic error and a random error, giving one example of each from a measurement of the acceleration of free fall using a simple pendulum.

**Answer.** A systematic error is a consistent offset from the true value. Example: the bob is not
perfectly point-like, effectively increasing the pendulum length. A random error causes scatter in
repeated readings. Example: human reaction time when timing oscillations with a stopwatch — it
varies unpredictably from trial to trial.

<b>If you get this wrong, revise:</b> [Types of Error](#types-of-error)

</details>

<details>
<summary>Problem 11</summary>
The gravitational potential energy is given by $E_p = -\frac{GMm}{r}$. Use dimensional analysis to determine the SI units of the gravitational constant $G$.

**Answer.** $[E_p] = \mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}$.
$[Mm/r] = \frac{\mathsf{M} \cdot \mathsf{M}}{\mathsf{L}} = \mathsf{M}^2\mathsf{L}^{-1}$. Since
$E_p = -\frac{GMm}{r}$:
$[G] = \frac{[E_p][r]}{[Mm]} = \frac{\mathsf{M}\mathsf{L}^2\mathsf{T}^{-2} \cdot \mathsf{L}}{\mathsf{M}^2} = \mathsf{M}^{-1}\mathsf{L}^3\mathsf{T}^{-2}$.
In SI units: m$^3$ kg$^{-1}$ s$^{-2}$.

<b>If you get this wrong, revise:</b> [Derived Units](#1-physical-quantities-and-the-si-system)

</details>

<details>
<summary>Problem 12</summary>
A quantity $Q$ is measured as $Q = \frac{a^2 b}{\sqrt{c}}$ where $a = 4.0 \pm 0.2$, $b = 3.0 \pm 0.1$, $c = 9.0 \pm 0.3$. Calculate $Q$ and its percentage uncertainty.

**Answer.** $Q = \frac{16.0 \times 3.0}{3.0} = 16.0$.

Fractional uncertainties: $\frac{2(0.2)}{4.0} = 0.10$ (power rule for $a^2$),
$\frac{0.1}{3.0} = 0.033$ (for $b$), $\frac{1}{2} \cdot \frac{0.3}{9.0} = 0.0167$ (power rule for
$c^{1/2}$).

Total: $0.10 + 0.033 + 0.0167 = 0.150$. Percentage uncertainty: 15.0%.
$\Delta Q = 16.0 \times 0.150 = 2.4$. Result: $Q = 16.0 \pm 2.4$ (15%).

<b>If you get this wrong, revise:</b> [Rule 3: Powers](#rule-3-powers)

</details>

## 8. SI Base Units in Detail

Understanding how each SI base unit is defined is essential for experimental physics and for
interpreting measurements correctly.

| Base Quantity       | SI Unit       | Current Definition (SI 2019)                                                               |
| ------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| Length              | metre (m)     | Defined by fixing the speed of light $c = 299{,}792{,}458$ m s$^{-1}$                      |
| Mass                | kilogram (kg) | Defined by fixing the Planck constant $h = 6.626{,}070{,}15 \times 10^{-34}$ J s           |
| Time                | second (s)    | Defined by fixing the caesium frequency $\Delta\nu_{Cs} = 9{,}192{,}631{,}770$ Hz          |
| Electric current    | ampere (A)    | Defined by fixing the elementary charge $e = 1.602{,}176{,}634 \times 10^{-19}$ C          |
| Temperature         | kelvin (K)    | Defined by fixing the Boltzmann constant $k_B = 1.380{,}649 \times 10^{-23}$ J K$^{-1}$    |
| Amount of substance | mole (mol)    | Defined by fixing the Avogadro constant $N_A = 6.022{,}140{,}76 \times 10^{23}$ mol$^{-1}$ |
| Luminous intensity  | candela (cd)  | Defined by fixing the luminous efficacy $K_{cd} = 683$ lm W$^{-1}$                         |

:::info Note Since 2019, all SI base units are defined in terms of fundamental physical constants.
The values of $c$, $h$, $e$, $k_B$, $N_A$, and $\Delta\nu_{Cs}$ are now exact defined quantities,
while the unit values are derived from them.
:::

## 9. Dimensional Analysis: Extended Worked Examples

### 9.1 Checking Formula Validity

**Example.** A student proposes that the pressure at depth $h$ in a fluid is $P = \rho g h^2$. Check
whether this is dimensionally valid.

**Answer.** $[P] = \mathsf{M}\mathsf{L}^{-1}\mathsf{T}^{-2}$.
$[\rho g h^2] = (\mathsf{M}\mathsf{L}^{-3})(\mathsf{L}\mathsf{T}^{-2})(\mathsf{L}^2) = \mathsf{M}\mathsf{L}^0\mathsf{T}^{-2} = \mathsf{M}\mathsf{T}^{-2}$.
This does not match $[P]$. The correct formula is $P = \rho g h$, which gives
$[\rho g h] = \mathsf{M}\mathsf{L}^{-3} \cdot \mathsf{L}\mathsf{T}^{-2} \cdot \mathsf{L} = \mathsf{M}\mathsf{L}^{-1}\mathsf{T}^{-2} = [P]$.
$\square$

### 9.2 Verifying the Ideal Gas Equation

**Example.** Show that the ideal gas equation $PV = nRT$ is dimensionally consistent, where $R$ is
the molar gas constant with units J mol$^{-1}$ K$^{-1}$.

**Answer.**
$[PV] = (\mathsf{M}\mathsf{L}^{-1}\mathsf{T}^{-2})(\mathsf{L}^3) = \mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}$.

$[nRT] = (\mathrm{mol})(\mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}\mathrm{ mol}^{-1}\mathsf{\Theta}^{-1})(\mathsf{\Theta}) = \mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}$.

Both sides have dimensions $\mathsf{M}\mathsf{L}^2\mathsf{T}^{-2}$, so the equation is dimensionally
consistent. $\square$

### 9.3 Determining the Form of an Equation

**Example.** The centripetal force on an object moving in a circle of radius $r$ at speed $v$ is
assumed to depend on mass $m$, speed $v$, and radius $r$. Find the form of the equation.

**Answer.** Assume $F = k \cdot m^a \cdot v^b \cdot r^c$.

$[F] = \mathsf{M}\mathsf{L}\mathsf{T}^{-2}$.
$[m^a v^b r^c] = \mathsf{M}^a (\mathsf{L}\mathsf{T}^{-1})^b \mathsf{L}^c = \mathsf{M}^a \mathsf{L}^{b+c} \mathsf{T}^{-b}$.

Equating dimensions:

$$\mathsf{M}: \quad a = 1, \qquad \mathsf{L}: \quad b + c = 1, \qquad \mathsf{T}: \quad -b = -2 \implies b = 2$$

Therefore $c = 1 - 2 = -1$, giving $F = k \cdot m v^2 / r$. Full analysis gives $k = 1$. $\square$

### 9.4 Unit Conversions Using Dimensional Analysis

**Example.** Convert a density of $5.4$ g cm$^{-3}$ to kg m$^{-3}$.

**Answer.** $5.4$ g cm$^{-3} = 5.4 \times 10^{-3}$ kg $\times (10^{-2}$
m$)^{-3} = 5.4 \times 10^{-3} \times 10^6$ kg m$^{-3} = 5400$ kg m$^{-3}$.

**Example.** Convert $120$ km h$^{-1}$ to m s$^{-1}$.

**Answer.** $120$ km h$^{-1} = 120 \times 10^3$ m / $3600$ s $= 33.3$ m s$^{-1}$.

## 10. Systematic Errors vs Random Errors: Detailed Comparison

| Feature               | Systematic Error                                    | Random Error                                                     |
| --------------------- | --------------------------------------------------- | ---------------------------------------------------------------- |
| Cause                 | Faulty apparatus or method                          | Environmental fluctuations, resolution limits                    |
| Effect on accuracy    | Reduces accuracy (shifts mean away from true value) | Does not affect mean accuracy                                    |
| Effect on precision   | Does not affect precision                           | Reduces precision (increases scatter)                            |
| Detection             | Compare with accepted value or use different method | Take repeated measurements; large scatter indicates random error |
| Reduction             | Calibrate instruments, improve method               | Take more readings, use instruments with finer resolution        |
| Effect on mean        | Shifts the mean consistently                        | Mean approaches true value as $n$ increases                      |
| Effect on uncertainty | Not reduced by averaging                            | Reduced by $\Delta x = \sigma / \sqrt{n}$                        |

### Identifying Systematic Errors in Practice

**Example: Zero Error.** A micrometer reads $0.02$ mm when the jaws are fully closed. Every
measurement will be $0.02$ mm too large. Correction: subtract $0.02$ mm from all readings.

**Example: Calibration Error.** A stopwatch runs consistently fast by $0.1$ s per minute. Every
timed interval will be overestimated. Correction: apply a proportional correction factor.

**Example: Methodological Error.** In a pendulum experiment, measuring from the top of the bob
rather than its centre of mass introduces a consistent offset in the effective length, shifting all
calculated values of $g$ in the same direction.

## 11. Uncertainty Propagation: Extended Worked Examples

### 11.1 Uncertainty in a Power Relationship

**Example.** The area of a circle is $A = \pi r^2$. If $r = 4.50 \pm 0.05$ cm, find $A$ with its
uncertainty.

**Answer.** $A = \pi(4.50)^2 = 63.62$ cm$^2$.

Fractional uncertainty in $r$: $\Delta r / r = 0.05 / 4.50 = 0.0111$.

Since $A \propto r^2$, $\Delta A / A = 2 \times 0.0111 = 0.0222$.

$\Delta A = 63.62 \times 0.0222 = 1.41$ cm$^2$.

Result: $A = 63.6 \pm 1.4$ cm$^2$.

### 11.2 Combining Addition and Multiplication Rules

**Example.** The volume of a rectangular block is $V = l \times w \times h$. The measurements are
$l = 5.00 \pm 0.02$ cm, $w = 3.00 \pm 0.02$ cm, $h = 2.00 \pm 0.01$ cm. Find $V$ with its percentage
uncertainty.

**Answer.** $V = 5.00 \times 3.00 \times 2.00 = 30.00$ cm$^3$.

Fractional uncertainties: $\Delta l/l = 0.02/5.00 = 0.004$, $\Delta w/w = 0.02/3.00 = 0.0067$,
$\Delta h/h = 0.01/2.00 = 0.005$.

Total fractional uncertainty: $0.004 + 0.0067 + 0.005 = 0.0157$.

Percentage uncertainty: $1.57\%$. $\Delta V = 30.00 \times 0.0157 = 0.47$ cm$^3$.

Result: $V = 30.0 \pm 0.5$ cm$^3$.

### 11.3 Uncertainty in a Formula with Roots

**Example.** The speed of a wave on a string is $v = \sqrt{T/\mu}$, where $T$ is the tension and
$\mu$ is the mass per unit length. Given $T = 10.0 \pm 0.2$ N and $\mu = 0.0250 \pm 0.0005$ kg
m$^{-1}$, find $v$ and its uncertainty.

**Answer.** $v = \sqrt{10.0 / 0.0250} = \sqrt{400} = 20.0$ m s$^{-1}$.

Since $v = T^{1/2}\mu^{-1/2}$, the fractional uncertainty is:

$\Delta v/v = \frac{1}{2}(\Delta T/T) + \frac{1}{2}(\Delta\mu/\mu) = \frac{1}{2}(0.2/10.0) + \frac{1}{2}(0.0005/0.0250) = 0.010 + 0.010 = 0.020$.

$\Delta v = 20.0 \times 0.020 = 0.40$ m s$^{-1}$.

Result: $v = 20.0 \pm 0.4$ m s$^{-1}$.

### 11.4 Mixed Operations: Adding Quantities Then Multiplying

**Example.** Two lengths are measured as $l_1 = 1.20 \pm 0.02$ m and $l_2 = 0.80 \pm 0.02$ m. Their
sum is multiplied by a width $w = 0.50 \pm 0.01$ m to find an area $A = (l_1 + l_2) \times w$. Find
$A$ and its uncertainty.

**Answer.** First, $l_1 + l_2 = 2.00$ m. By the addition rule:
$\Delta(l_1 + l_2) = 0.02 + 0.02 = 0.04$ m.

Now $A = 2.00 \times 0.50 = 1.00$ m$^2$. By the multiplication rule:

$\Delta A/A = 0.04/2.00 + 0.01/0.50 = 0.020 + 0.020 = 0.040$.

$\Delta A = 1.00 \times 0.040 = 0.040$ m$^2$.

Result: $A = 1.00 \pm 0.04$ m$^2$.

## 12. Common Pitfalls

1. **Mixing absolute and percentage uncertainty when combining quantities.** When adding or
   subtracting, use absolute uncertainties. When multiplying or dividing, use fractional (or
   percentage) uncertainties. Applying the wrong rule is a frequent source of error.

2. **Forgetting the power rule.** If $z = x^3$, then $\Delta z / z = 3(\Delta x / x)$, not
   $\Delta z / z = \Delta x / x$. A common mistake is treating all operations as simple
   multiplication.

3. **Quoting too many significant figures.** If the uncertainty is $0.3$, the result should be
   quoted to one decimal place. Writing $9.814 \pm 0.3$ is wrong; write $9.8 \pm 0.3$. Match the
   result to the uncertainty.

4. **Assuming dimensional consistency implies correctness.** An equation can be dimensionally
   correct but still wrong (e.g., missing a factor of $\pi$ or a numerical constant). Dimensional
   analysis is a necessary but not sufficient check.

5. **Confusing precision with accuracy.** A precise set of readings (small scatter) can still be
   inaccurate if there is an undetected systematic error. Always consider both.

6. **Ignoring the resolution uncertainty for single readings.** If you take only one reading with a
   ruler (smallest division $1$ mm), the uncertainty is $\pm 0.5$ mm (half the smallest division for
   analogue instruments), not zero.

7. **Using the wrong rule for digital instruments.** For a digital instrument, the uncertainty
   equals the smallest division (the last digit), not half the smallest division.

## 13. Extension Problem Set

<details>
<summary>Problem 1</summary>
The escape velocity from a planet of mass $M$ and radius $R$ is given by $v_e = \sqrt{2GM/R}$. Use dimensional analysis to determine the SI units of the gravitational constant $G$.

**Answer.** $[v_e] = \mathsf{L}\mathsf{T}^{-1}$.
$[2GM/R] = [G][M]/[R] = [G]\mathsf{M}\mathsf{L}^{-1}$.

Setting $[v_e]^2 = [2GM/R]$: $\mathsf{L}^2\mathsf{T}^{-2} = [G]\mathsf{M}\mathsf{L}^{-1}$.

$[G] = \mathsf{L}^3\mathsf{M}^{-1}\mathsf{T}^{-2}$. In SI units: m$^3$ kg$^{-1}$ s$^{-2}$.

<b>If you get this wrong, revise:</b> [Derived Units](#1-physical-quantities-and-the-si-system)

</details>

<details>
<summary>Problem 2</summary>
A student proposes the formula for the frequency of a mass-spring system: $f = \frac{1}{2\pi}\sqrt{\frac{m}{k}}$, where $k$ is the spring constant. Use dimensional analysis to determine whether this formula is correct.

**Answer.** $[f] = \mathsf{T}^{-1}$.
$[m/k] = \frac{\mathsf{M}}{[\mathrm{force}]/[\mathrm{displacement}]} = \frac{\mathsf{M}}{\mathsf{M}\mathsf{L}\mathsf{T}^{-2}/\mathsf{L}} = \frac{\mathsf{M}}{\mathsf{M}\mathsf{T}^{-2}} = \mathsf{T}^2$.

$[\sqrt{m/k}] = \mathsf{T} \neq \mathsf{T}^{-1}$. The formula is incorrect. The correct form is
$f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$, giving $[\sqrt{k/m}] = \mathsf{T}^{-1} = [f]$. $\square$

<b>If you get this wrong, revise:</b>
[Determining the Form of an Equation](#determining-the-form-of-an-equation)

</details>

<details>
<summary>Problem 3</summary>
A force $F = 8.0 \pm 0.4$ N acts on an object of mass $m = 2.00 \pm 0.05$ kg. Calculate the acceleration $a = F/m$ with its percentage uncertainty.

**Answer.** $a = 8.0 / 2.00 = 4.0$ m s$^{-2}$.

Fractional uncertainties: $\Delta F/F = 0.4/8.0 = 0.050$, $\Delta m/m = 0.05/2.00 = 0.025$.

Total fractional uncertainty: $0.050 + 0.025 = 0.075 = 7.5\%$.

$\Delta a = 4.0 \times 0.075 = 0.30$ m s$^{-2}$.

Result: $a = 4.0 \pm 0.3$ m s$^{-2}$ (7.5%).

<b>If you get this wrong, revise:</b>
[Rule 2: Multiplication and Division](#rule-2-multiplication-and-division)

</details>

<details>
<summary>Problem 4</summary>
Show that the equation $v^2 = u^2 + 2as$ is dimensionally valid, and determine the SI base units of a quantity with dimensions $\mathsf{M}^{1/2}\mathsf{L}^{3/2}\mathsf{T}^{-1}$.

**Answer.** $[v^2] = (\mathsf{L}\mathsf{T}^{-1})^2 = \mathsf{L}^2\mathsf{T}^{-2}$.
$[u^2] = \mathsf{L}^2\mathsf{T}^{-2}$.
$[2as] = (\mathsf{L}\mathsf{T}^{-2})(\mathsf{L}) = \mathsf{L}^2\mathsf{T}^{-2}$. All terms match.
$\square$

For $\mathsf{M}^{1/2}\mathsf{L}^{3/2}\mathsf{T}^{-1}$:
$\sqrt{\mathrm{kg}} \cdot \mathrm{m}^{3/2} \cdot \mathrm{s}^{-1}$. An example is
$\sqrt{G} \cdot M / r$ where $G$ has units m$^3$ kg$^{-1}$ s$^{-2}$, giving
$[\sqrt{G}] = \mathrm{m}^{3/2}\mathrm{ kg}^{-1/2}\mathrm{ s}^{-1}$ and
$[\sqrt{G} \cdot M] = \mathrm{m}^{3/2}\mathrm{ kg}^{1/2}\mathrm{ s}^{-1}$.

<b>If you get this wrong, revise:</b> [Derived Units](#1-physical-quantities-and-the-si-system)

</details>

<details>
<summary>Problem 5</summary>
The kinetic energy of a particle is $E_k = \frac{1}{2}mv^2$. Given $m = 0.150 \pm 0.005$ kg and $v = 3.20 \pm 0.04$ m s$^{-1}$, calculate $E_k$ with its uncertainty.

**Answer.** $E_k = 0.5 \times 0.150 \times 3.20^2 = 0.5 \times 0.150 \times 10.24 = 0.768$ J.

Fractional uncertainties: $\Delta m/m = 0.005/0.150 = 0.0333$. For $v^2$:
$2\Delta v/v = 2(0.04/3.20) = 0.025$.

Total fractional uncertainty: $0.0333 + 0.025 = 0.0583$.

$\Delta E_k = 0.768 \times 0.0583 = 0.045$ J.

Result: $E_k = 0.77 \pm 0.04$ J.

<b>If you get this wrong, revise:</b> [Rule 3: Powers](#rule-3-powers)

</details>

<details>
<summary>Problem 6</summary>
A student measures the period of a pendulum as $T = 2.05 \pm 0.05$ s and the length as $L = 1.00 \pm 0.01$ m. Using $g = 4\pi^2 L / T^2$, calculate $g$ with its absolute uncertainty. Comment on whether the result is consistent with the accepted value of $9.81$ m s$^{-2}$.

**Answer.** $g = 4\pi^2 \times 1.00 / (2.05)^2 = 39.48 / 4.2025 = 9.395$ m s$^{-2}$.

Fractional uncertainties: $\Delta L/L = 0.01/1.00 = 0.010$. For $T^2$:
$2\Delta T/T = 2(0.05/2.05) = 0.0488$.

Total fractional uncertainty: $0.010 + 0.0488 = 0.0588$.

$\Delta g = 9.395 \times 0.0588 = 0.55$ m s$^{-2}$.

Result: $g = 9.4 \pm 0.6$ m s$^{-2}$.

The accepted value $9.81$ m s$^{-2}$ falls within the range $9.4 \pm 0.6$ (i.e., $8.8$ to $10.0$ m
s$^{-2}$), so the result is consistent with the accepted value. $\square$

<b>If you get this wrong, revise:</b> [Rule 3: Powers](#rule-3-powers)

</details>
