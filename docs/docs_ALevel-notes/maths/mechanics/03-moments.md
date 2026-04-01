---
title: Moments
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: moments
---

## Board Coverage

| Board      | Paper   | Notes                         |
| ---------- | ------- | ----------------------------- |
| AQA        | Paper 1 | Moments, equilibrium, tilting |
| Edexcel    | P1      | Similar                       |
| OCR (A)    | Paper 1 | Includes non-uniform bodies   |
| CIE (9709) | P4      | Moments and equilibrium       |

:::info The principle of moments is fundamental. Always state clearly the point about which you are
taking moments, and include the direction (clockwise/anticlockwise) of each moment. :::

---

## 1. Definition of a Moment

**Definition.** The **moment** of a force $F$ about a point $O$ is

$$M = F \times d$$

where $d$ is the perpendicular distance from $O$ to the line of action of $F$.

The SI unit of moment is the newton-metre (Nm).

### 1.1 Sign convention

- **Clockwise** moments are typically taken as positive (or negative — be consistent).
- **Anticlockwise** moments have the opposite sign.

---

## 2. Principle of Moments

### 2.1 Statement

**Theorem.** If a body is in equilibrium under the action of coplanar forces, then the sum of
clockwise moments about any point equals the sum of anticlockwise moments about that same point.

### 2.2 Proof (for a rigid body in equilibrium)

Consider a rigid body in equilibrium. For equilibrium, two conditions must hold:

1. **Translational equilibrium:** $\sum \mathbf{F} = \mathbf{0}$ (no net force).
2. **Rotational equilibrium:** The body does not rotate.

For rotational equilibrium, consider any point $O$. The total torque about $O$ must be zero:

$$\sum_{i} \mathbf{r}_i \times \mathbf{F}_i = \mathbf{0}$$

where $\mathbf{r}_i$ is the position vector of the point of application of $\mathbf{F}_i$ relative
to $O$.

This means the clockwise and anticlockwise moments balance:
$\sum M_{\text{clockwise}} = \sum M_{\text{anticlockwise}}$. $\blacksquare$

:::warning The principle of moments applies about **any** point — not just the pivot. Choosing a
clever point (often where an unknown force acts) can simplify calculations by eliminating that
unknown from the moment equation. :::

---

## 3. Equilibrium Conditions

For a body in equilibrium under coplanar forces:

1. $\sum F_x = 0$ (horizontal forces balance)
2. $\sum F_y = 0$ (vertical forces balance)
3. $\sum M = 0$ about any point (moments balance)

These three conditions are both necessary and sufficient for equilibrium.

---

## 4. Centre of Mass

### 4.1 Definition

**Definition.** The **centre of mass** is the point through which the total mass of the body can be
considered to act for the purpose of calculating moments due to gravity.

### 4.2 Centre of mass of a uniform lamina

For a uniform lamina (constant density), the centre of mass coincides with the centroid.

### 4.3 Composite bodies

For a body made of several parts with masses $m_1, m_2, \ldots$ at positions
$(x_1, y_1), (x_2, y_2), \ldots$:

$$\bar{x} = \frac{\sum m_i x_i}{\sum m_i}, \qquad \bar{y} = \frac{\sum m_i y_i}{\sum m_i}$$

**Derivation.** Taking moments about the $y$-axis for the total system and the equivalent point
mass:

$$\sum m_i x_i = M\bar{x} \implies \bar{x} = \frac{\sum m_i x_i}{M}$$

where $M = \sum m_i$. Similarly for $\bar{y}$. $\blacksquare$

### 4.4 Standard results

| Shape                       | Centre of Mass                                           |
| --------------------------- | -------------------------------------------------------- |
| Uniform rod                 | Midpoint                                                 |
| Uniform rectangular lamina  | Intersection of diagonals                                |
| Uniform triangular lamina   | $\frac{1}{3}$ of the way from each side along the median |
| Uniform circular lamina     | Centre of the circle                                     |
| Uniform semicircular lamina | $\dfrac{4r}{3\pi}$ from the flat side                    |

---

## 5. Tilting and Toppling

### 5.1 Tilting

A body on a surface will **tilt** (start to rotate) when the moment of the applied force about the
point of tilting exceeds the restoring moment.

### 5.2 Condition for toppling vs. sliding

A body will **topple** before it **slides** if:

$$\frac{h}{d} > \frac{1}{\mu}$$

where $h$ is the height at which the force is applied and $d$ is half the base width.

---

## Problem Set

<details>
<summary>Problem 1</summary>
A uniform beam of length $4\,\text{m}$ and weight $200\,\text{N}$ is supported at its ends $A$ and $B$. A load of $300\,\text{N}$ is placed $1\,\text{m}$ from $A$. Find the reactions at $A$ and $B$.
</details>

<details>
<summary>Solution 1</summary>
Taking moments about $A$: $R_B \times 4 - 200 \times 2 - 300 \times 1 = 0 \implies 4R_B = 700 \implies R_B = 175\,\text{N}$.

Vertical equilibrium: $R_A + 175 = 200 + 300 = 500 \implies R_A = 325\,\text{N}$.

**If you get this wrong, revise:** [Principle of Moments](#2-principle-of-moments) — Section 2.

</details>

<details>
<summary>Problem 2</summary>
A uniform rod $AB$ of length $3\,\text{m}$ and mass $12\,\text{kg}$ is hinged at $A$ and held horizontal by a string attached at $B$ making an angle of $30°$ with the horizontal. Find the tension in the string.
</details>

<details>
<summary>Solution 2</summary>
Weight acts at midpoint: $12g\,\text{N}$ at $1.5\,\text{m}$ from $A$.

Moments about $A$: $T\cos 30° \times 3 = 12g \times 1.5$.

$T = \dfrac{12(9.8)(1.5)}{3\cos 30°} = \dfrac{176.4}{2.598} \approx 67.9\,\text{N}$.

**If you get this wrong, revise:** [Definition of a Moment](#1-definition-of-a-moment) — Section 1.

</details>

<details>
<summary>Problem 3</summary>
Find the centre of mass of three particles of masses $2\,\text{kg}$, $3\,\text{kg}$, and $5\,\text{kg}$ placed at $(0,0)$, $(4,0)$, and $(2,3)$ respectively.
</details>

<details>
<summary>Solution 3</summary>
$\bar{x} = \dfrac{2(0) + 3(4) + 5(2)}{2+3+5} = \dfrac{0+12+10}{10} = \dfrac{22}{10} = 2.2$.

$\bar{y} = \dfrac{2(0) + 3(0) + 5(3)}{10} = \dfrac{15}{10} = 1.5$.

Centre of mass at $(2.2, 1.5)$.

**If you get this wrong, revise:** [Composite Bodies](#43-composite-bodies) — Section 4.3.

</details>

<details>
<summary>Problem 4</summary>
A uniform beam $AB$ of weight $W$ and length $2l$ rests on a support at its midpoint $C$. A man of weight $3W$ stands on the beam at a distance $x$ from $A$. For what range of $x$ is the beam in equilibrium?
</details>

<details>
<summary>Solution 4</summary>
Taking moments about $C$: the man's weight creates a moment of $3W(x-l)$.

The beam remains in equilibrium as long as neither end lifts off, i.e., the reaction at each end is
non-negative.

For the reaction at $B \geq 0$: moment of weight about $C$ must not exceed restoring moment.
$3W(x-l) \leq W \cdot l \implies 3x - 3l \leq l \implies x \leq \dfrac{4l}{3}$.

For the reaction at $A \geq 0$:
$3W(l-x) \leq W \cdot l \implies 3l - 3x \leq l \implies x \geq \dfrac{2l}{3}$.

Range: $\dfrac{2l}{3} \leq x \leq \dfrac{4l}{3}$.

**If you get this wrong, revise:** [Tilting and Toppling](#5-tilting-and-toppling) — Section 5.

</details>

<details>
<summary>Problem 5</summary>
A non-uniform rod $AB$ of length $2\,\text{m}$ and weight $40\,\text{N}$ is supported at $A$ and at a point $C$, $1.4\,\text{m}$ from $A$. When supported at $A$ and $B$, the reaction at $A$ is $18\,\text{N}$. Find the position of the centre of mass.
</details>

<details>
<summary>Solution 5</summary>
When supported at $A$ and $B$: moments about $B$: $R_A \times 2 = W \times d_{\text{from } B}$.
$18 \times 2 = 40 \times d_{\text{from } B} \implies d_{\text{from } B} = 36/40 = 0.9\,\text{m}$.

Centre of mass is $0.9\,\text{m}$ from $B$, i.e., $1.1\,\text{m}$ from $A$.

**If you get this wrong, revise:** [Centre of Mass](#4-centre-of-mass) — Section 4.

</details>

<details>
<summary>Problem 6</summary>
A ladder of length $5\,\text{m}$ and weight $200\,\text{N}$ rests against a smooth vertical wall at an angle of $65°$ to the horizontal. The ground is rough. Find the minimum coefficient of friction for equilibrium.
</details>

<details>
<summary>Solution 6</summary>
Let $R_w$ = reaction from wall (horizontal), $R_g$ = reaction from ground (vertical), $F$ = friction at ground.

Horizontal: $R_w = F$. Vertical: $R_g = 200$.

Moments about base of ladder: $R_w \times 5\sin 65° = 200 \times 2.5\cos 65°$.

$R_w = \dfrac{500\cos 65°}{5\sin 65°} = \dfrac{100\cos 65°}{\sin 65°} = 100\cot 65° \approx 46.6\,\text{N}$.

$F = R_w = 46.6\,\text{N}$. $\mu_{\min} = F/R_g = 46.6/200 = 0.233$.

**If you get this wrong, revise:** [Friction and Moments](#2-principle-of-moments) — Section 2.

</details>

<details>
<summary>Problem 7</summary>
Find the centre of mass of a uniform lamina in the shape of a triangle with vertices at $(0,0)$, $(6,0)$, and $(0,4)$.
</details>

<details>
<summary>Solution 7</summary>
The centre of mass of a uniform triangular lamina is at the intersection of the medians, which is $\dfrac{1}{3}$ of the way from each side.

$\bar{x} = \dfrac{0+6+0}{3} = 2$, $\bar{y} = \dfrac{0+0+4}{3} = \dfrac{4}{3}$.

Centre of mass at $\left(2, \dfrac{4}{3}\right)$.

**If you get this wrong, revise:** [Standard Results](#44-standard-results) — Section 4.4.

</details>

<details>
<summary>Problem 8</summary>
A uniform rod $AB$ of length $6\,\text{m}$ and weight $100\,\text{N}$ is hinged at $A$ and supported by a wire at $B$ making angle $60°$ with the rod. Find the tension and the reaction at the hinge.
</details>

<details>
<summary>Solution 8</summary>
Moments about $A$: $T \times 6\sin 60° = 100 \times 3$ (weight acts at midpoint).

$T = \dfrac{300}{6 \times 0.866} = \dfrac{300}{5.196} \approx 57.74\,\text{N}$.

Resolving horizontally: $R_x = T\sin 60° = 57.74 \times 0.866 = 50\,\text{N}$.

Resolving vertically: $R_y = 100 - T\cos 60° = 100 - 28.87 = 71.13\,\text{N}$.

$R = \sqrt{50^2 + 71.13^2} = \sqrt{2500 + 5059.5} \approx 86.9\,\text{N}$ at
$\arctan(71.13/50) \approx 54.9°$ below horizontal.

**If you get this wrong, revise:** [Equilibrium Conditions](#3-equilibrium-conditions) — Section 3.

</details>
