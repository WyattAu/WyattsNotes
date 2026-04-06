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

:::info
The principle of moments is fundamental. Always state clearly the point about which you are
taking moments, and include the direction (clockwise/anticlockwise) of each moment.
:::

---

## 1. Definition of a Moment

**Definition.** The **moment** of a force $F$ about a point $O$ is

$$M = F \times d$$

where $d$ is the perpendicular distance from $O$ to the line of action of $F$.

The SI unit of moment is the newton-metre (Nm).

### 1.1 Real-world examples

**Seesaw.** A seesaw is the simplest moment problem. Two children of weights $W_1$ and $W_2$ sit at
distances $d_1$ and $d_2$ from the pivot. For balance: $W_1 d_1 = W_2 d_2$. A lighter child further
from the pivot can balance a heavier child closer to it — this is why you move back to let a lighter
friend balance you.

**Crane counterweight.** Tower cranes have a heavy concrete counterweight on the short arm behind
the tower. When a load is lifted on the long arm, the counterweight generates a restoring
(anticlockwise) moment about the base to prevent the crane from tipping. The counterweight must
satisfy $W_{\text{load}} \times d_{\text{long}} \lt W_{\text{counter}} \times d_{\text{short}}$.

**Spanner and bolt.** A spanner of length $0.2\,\text{m}$ applies a force of $50\,\text{N}$
perpendicular to its length. The moment on the bolt is $50 \times 0.2 = 10\,\text{Nm}$. A longer
spanner always generates a larger moment for the same force, which is why mechanics use extension
bars on stubborn bolts.

### 1.2 Sign convention

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

### 2.3 Real-world application: bridge supports

A simple beam bridge of length $L$ and weight $W$ is supported at both ends by piers. When a vehicle
of weight $P$ is on the bridge at distance $a$ from the left pier, the reaction forces at each pier
are found by taking moments about each pier in turn.

Taking moments about the left pier:
$R_{\text{right}} \times L = W \times \dfrac{L}{2} + P \times a$, so
$R_{\text{right}} = \dfrac{W}{2} + \dfrac{Pa}{L}$.

By symmetry (vertical equilibrium):
$R_{\text{left}} = W + P - R_{\text{right}} = \dfrac{W}{2} + \dfrac{P(L-a)}{L}$.

Notice that as the vehicle moves right ($a$ increases), $R_{\text{right}}$ increases and
$R_{\text{left}}$ decreases — the bridge load redistributes continuously.

:::warning
The principle of moments applies about **any** point — not just the pivot. Choosing a
clever point (often where an unknown force acts) can simplify calculations by eliminating that
unknown from the moment equation.
:::

---

## 3. Equilibrium Conditions

For a body in equilibrium under coplanar forces:

1. $\sum F_x = 0$ (horizontal forces balance)
2. $\sum F_y = 0$ (vertical forces balance)
3. $\sum M = 0$ about any point (moments balance)

These three conditions are both necessary and sufficient for equilibrium.

---

## 3.1 Couples and Torque

### 3.1.1 Definition of a couple

**Definition.** A **couple** is a pair of equal and opposite forces whose lines of action do not
coincide. A couple produces a **turning effect** (rotation) without any translational effect.

Since the forces are equal and opposite, $\sum \mathbf{F} = \mathbf{0}$, so there is no net force
and no acceleration of the centre of mass. However, the net moment (torque) is non-zero.

### 3.1.2 Moment of a couple

For a couple with forces $F$ separated by perpendicular distance $d$:

$$\text{Torque} = F \times d$$

The moment of a couple is the same about **any** point in the plane. This is a key property: unlike
the moment of a single force, the torque of a couple does not depend on the choice of reference
point.

**Proof.** Consider two forces $+F$ and $-F$ acting at points $A$ and $B$ respectively, with
$AB = d$ perpendicular to the forces. Taking moments about an arbitrary point $O$:

$$M_O = F \times d_A - F \times d_B = F(d_A - d_B) = F \times d$$

where $d_A$ and $d_B$ are the perpendicular distances from $O$ to the lines of action. The result is
independent of $O$. $\blacksquare$

### 3.1.3 Real-world examples of couples

- **Steering wheel.** Two hands apply equal and opposite forces on opposite sides of the wheel. The
  net force is zero, but the torque turns the wheel.
- **Taps and valves.** Turning a tap involves applying a couple to rotate the valve mechanism.
- **Clock hands.** The spring mechanism applies a couple to rotate the hands at a constant rate.

### 3.1.4 Torque as a vector

In two dimensions, torque (moment) can be treated as a scalar with a sign indicating direction. In
three dimensions, torque is a vector:

$$\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$$

The direction of $\boldsymbol{\tau}$ is given by the right-hand rule and is perpendicular to the
plane containing $\mathbf{r}$ and $\mathbf{F}$.

:::info
In A Level Maths, we work in 2D, so torque is effectively a signed scalar. Clockwise and
anticlockwise are the only two directions you need to consider.
:::

### 3.1.5 Equilibrium of couples

If a body is acted on by several couples, the body is in rotational equilibrium if and only if the
total torque is zero:

$$\sum \tau_i = 0$$

This condition is independent of the translational equilibrium conditions, since couples contribute
zero net force.

---

## 3.2 Ladders Against Walls

Ladder problems are a classic application of moments that combine friction, normal reactions, and
weight resolution. They test all three equilibrium conditions simultaneously.

### 3.2.1 Standard ladder setup

A uniform ladder of length $L$ and weight $W$ rests against a smooth vertical wall and on rough
horizontal ground. The ladder makes an angle $\theta$ with the horizontal.

**Forces acting:**

- Weight $W$ at the midpoint of the ladder (downward)
- Normal reaction $R_w$ from the wall (horizontal, away from wall)
- Normal reaction $R_g$ from the ground (vertical, upward)
- Friction $F$ at the ground (horizontal, towards the wall)

### 3.2.2 Solving ladder problems

Always apply all three equilibrium conditions:

1. **Horizontal forces:** $R_w = F$
2. **Vertical forces:** $R_g = W$ (or $W +$ any extra load on the ladder)
3. **Moments about a convenient point** (usually the base of the ladder to eliminate $F$ and $R_g$):

$$R_w \times L\sin\theta = W \times \frac{L}{2}\cos\theta$$

### 3.2.3 Key results

For a uniform ladder against a smooth wall on rough ground:

$$R_w = \frac{W}{2}\cot\theta, \qquad F = R_w, \qquad \mu_{\min} = \frac{R_w}{R_g} = \frac{1}{2}\cot\theta$$

The minimum coefficient of friction depends only on the angle $\theta$. As the ladder becomes
steeper ($\theta$ increases), $\cot\theta$ decreases and less friction is needed.

:::warning
If the wall is **rough**, there is an additional vertical friction force $F_w$ acting up
the wall. This changes the vertical equilibrium to $R_g + F_w = W$ and adds complexity to the moment
equation. Always read the question carefully to determine whether the wall is smooth or rough.
:::

### 3.2.4 Ladder with a person on it

When a person of weight $P$ stands on the ladder at a fraction $\alpha$ of the way up (distance
$\alpha L$ from the base), the moment equation becomes:

$$R_w \times L\sin\theta = W \times \frac{L}{2}\cos\theta + P \times \alpha L\cos\theta$$

This gives $R_w = \left(\dfrac{W}{2} + P\alpha\right)\cot\theta$, and the required friction
increases accordingly. The higher the person climbs (larger $\alpha$), the more friction is needed —
climb too high and the ladder slips.

---

## 3.3 Non-Uniform Beams

Non-uniform beams have their centre of mass away from the geometric centre. The position of the
centre of mass must be determined from the information given.

### 3.3.1 Finding the centre of mass of a non-uniform beam

When a non-uniform beam of weight $W$ and length $L$ is supported at two points, the reactions at
those points reveal the position of the centre of mass.

If the beam is supported at ends $A$ and $B$ with reactions $R_A$ and $R_B$:

Taking moments about $B$: $R_A \times L = W \times d_B$

So the centre of mass is $d_B = \dfrac{R_A L}{W}$ from end $B$.

### 3.3.2 Strategy for non-uniform beam problems

1. Let the centre of mass be an unknown distance $x$ from a reference point.
2. Use the given support/reaction information to write a moment equation.
3. Solve for $x$.
4. Once $x$ is known, solve subsequent parts of the question as you would for a uniform beam, with
   the weight acting at $x$ instead of at the midpoint.

---

## 3.4 Frameworks and Trusses

A framework (or truss) is a structure made of rods joined at points called **joints** or **nodes**.
Each rod is assumed to be light and either in tension (being stretched) or compression (being
squeezed).

### 3.4.1 Assumptions

- All rods are light (weightless).
- All joints are smooth pin joints.
- External forces act only at the joints.
- Each rod carries a force along its length only (axial force).

### 3.4.2 Method of joints

To find the forces in the members of a framework:

1. Find the **support reactions** by treating the whole framework as a rigid body and applying the
   three equilibrium conditions.
2. At each joint, resolve forces horizontally and vertically. Since each joint is in equilibrium,
   $\sum F_x = 0$ and $\sum F_y = 0$.
3. Work through joints systematically, starting from joints with the most known forces.

### 3.4.3 Sign convention for internal forces

- **Tension:** the rod is being stretched; the force pulls away from the joint (assume the force
  arrows point away from the joint when drawing).
- **Compression:** the rod is being squeezed; the force pushes towards the joint.

If you assume a rod is in tension and get a negative answer, the rod is in compression.

:::info
Framework problems are common in the mechanics section of the A Level exam. The key skill is
choosing the right joint to start with — look for joints where you have at most two unknown forces,
since you can only write two equilibrium equations per joint.
:::

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

### 4.3.1 Worked example: composite lamina

A uniform lamina consists of a rectangle $ABCD$ where $AB = 6\,\text{cm}$ and $BC = 4\,\text{cm}$,
with an equilateral triangle $BCE$ attached to side $BC$ (each side of the triangle is
$4\,\text{cm}$). Find the centre of mass of the composite lamina.

**Step 1: Treat as two separate bodies.**

Rectangle: area $= 6 \times 4 = 24\,\text{cm}^2$, centre at $(3, 2)$ from $A$.

Equilateral triangle $BCE$ with side $4\,\text{cm}$: height $= 4\sin 60° = 2\sqrt{3}\,\text{cm}$.
Area $= \frac{1}{2} \times 4 \times 2\sqrt{3} = 4\sqrt{3}\,\text{cm}^2$.

The centre of mass of the triangle is at $\frac{1}{3}$ of its height from $BC$. Taking $B$ as origin
with $BA$ along the positive $x$-axis and $BC$ along the positive $y$-axis:

Triangle centroid is at
$\left(\frac{4}{3}\cos 60°, 4 - \frac{2\sqrt{3}}{3}\right) = \left(\frac{2}{3}, 4 - \frac{2\sqrt{3}}{3}\right)$.

Wait — let us set up coordinates more carefully. Place $A$ at the origin, $AB$ along the $x$-axis,
$AD$ along the $y$-axis.

Rectangle centre: $(3, 2)$. Triangle vertex $E$ is at $(6 + 2, 4) = (8, 4)$... actually, let us
re-examine.

Let us use the **subtraction method** for clarity. Place $A$ at $(0,0)$, $B$ at $(6,0)$, $C$ at
$(6,4)$, $D$ at $(0,4)$. The triangle $BCE$ has $E$ above the line $BC$.

Midpoint of $BC$ is $(6, 2)$. The triangle extends $2\sqrt{3}$ upward from $BC$, so $E$ is at
$(6, 4 + 2\sqrt{3})$.

Triangle centroid:
$\left(\dfrac{6+6+6}{3}, \dfrac{0+4+(4+2\sqrt{3})}{3}\right) = \left(6, \dfrac{8+2\sqrt{3}}{3}\right)$.

**Step 2: Apply the formula.**

$$\bar{x} = \frac{24 \times 3 + 4\sqrt{3} \times 6}{24 + 4\sqrt{3}} = \frac{72 + 24\sqrt{3}}{24 + 4\sqrt{3}}$$

Dividing numerator and denominator by 4: $\bar{x} = \dfrac{18 + 6\sqrt{3}}{6 + \sqrt{3}}$.

Rationalising:
$\bar{x} = \dfrac{(18 + 6\sqrt{3})(6 - \sqrt{3})}{36 - 3} = \dfrac{108 - 18\sqrt{3} + 36\sqrt{3} - 18}{33} = \dfrac{90 + 18\sqrt{3}}{33} \approx 3.69\,\text{cm}$.

$$\bar{y} = \frac{24 \times 2 + 4\sqrt{3} \times \frac{8+2\sqrt{3}}{3}}{24 + 4\sqrt{3}} = \frac{48 + \frac{32\sqrt{3}+24}{3}}{24 + 4\sqrt{3}} = \frac{\frac{168+32\sqrt{3}}{3}}{24+4\sqrt{3}}$$

$\bar{y} = \dfrac{168 + 32\sqrt{3}}{72 + 12\sqrt{3}} \approx 2.30\,\text{cm}$.

### 4.3.2 Subtraction method

When a shape has a hole or cut-out, treat it as a **negative mass**. If a rectangle of area $A_2$ is
removed from a larger rectangle of area $A_1$:

$$\bar{x} = \frac{A_1 x_1 - A_2 x_2}{A_1 - A_2}$$

This is extremely useful for L-shapes, T-shapes, and shapes with circular or triangular cut-outs.

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

### 5.3 Worked example: toppling vs. sliding

A uniform block of weight $500\,\text{N}$, width $0.6\,\text{m}$ and height $1.2\,\text{m}$ sits on
a rough surface with $\mu = 0.4$. A horizontal force $P$ is applied at the top of the block.
Determine whether the block slides or topples first, and find the critical value of $P$.

**Check sliding:** $P = \mu R = 0.4 \times 500 = 200\,\text{N}$.

**Check toppling:** The block topples about its bottom-right corner. Taking moments about that
corner:

$P \times 1.2 = 500 \times 0.3$ (weight acts at the centre, $0.3\,\text{m}$ from the corner).

$P = \dfrac{150}{1.2} = 125\,\text{N}$.

Since $125 \lt 200$, the block **topples first** at $P = 125\,\text{N}$.

:::info
A useful rule of thumb: if $\dfrac{h}{d} > \dfrac{1}{\mu}$, the body topples before it
slides. Here $\dfrac{1.2}{0.3} = 4$ and $\dfrac{1}{0.4} = 2.5$. Since $4 > 2.5$, toppling occurs
first, which matches our calculation.
:::

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

<details>
<summary>Problem 9</summary>
A uniform lamina is made from a rectangle $ABCD$ with $AB = 8\,\text{cm}$, $AD = 6\,\text{cm}$, and a square of side $3\,\text{cm}$ removed from corner $C$. Find the centre of mass of the remaining lamina.
</details>

<details>
<summary>Solution 9</summary>
Place $A$ at the origin, $AB$ along the $x$-axis, $AD$ along the $y$-axis.

Rectangle: area $= 48$, centre at $(4, 3)$.

Removed square: corner at $C(8,6)$, so the square occupies $x \in [5, 8]$, $y \in [3, 6]$. Area
$= 9$, centre at $(6.5, 4.5)$.

Using the subtraction method:

$\bar{x} = \dfrac{48 \times 4 - 9 \times 6.5}{48 - 9} = \dfrac{192 - 58.5}{39} = \dfrac{133.5}{39} = 3.42\,\text{cm}$.

$\bar{y} = \dfrac{48 \times 3 - 9 \times 4.5}{39} = \dfrac{144 - 40.5}{39} = \dfrac{103.5}{39} = 2.65\,\text{cm}$.

Centre of mass at approximately $(3.42, 2.65)$.

**If you get this wrong, revise:** [Subtraction Method](#432-subtraction-method) — Section 4.3.2.

</details>

<details>
<summary>Problem 10</summary>
A uniform ladder of length $6\,\text{m}$ and weight $150\,\text{N}$ rests against a smooth vertical wall, with the foot on rough horizontal ground. The ladder makes an angle of $55°$ with the horizontal. A man of weight $800\,\text{N}$ stands on the ladder $2\,\text{m}$ from the top. Find the minimum coefficient of friction between the ladder and the ground for equilibrium.
</details>

<details>
<summary>Solution 10</summary>
Let $R_w$ = reaction from wall (horizontal), $R_g$ = reaction from ground (vertical), $F$ = friction at ground.

The man is $2\,\text{m}$ from the top, so $4\,\text{m}$ from the base. His horizontal distance from
the base is $4\cos 55°$.

Horizontal: $R_w = F$. Vertical: $R_g = 150 + 800 = 950\,\text{N}$.

Moments about the base of the ladder (perpendicular distances):

$R_w \times 6\sin 55° = 150 \times 3\cos 55° + 800 \times 4\cos 55°$.

$R_w = \dfrac{(450 + 3200)\cos 55°}{6\sin 55°} = \dfrac{3650\cos 55°}{6\sin 55°} = \dfrac{3650}{6}\cot 55°$.

$\cot 55° \approx 0.7002$, so $R_w = \dfrac{3650 \times 0.7002}{6} \approx 426.0\,\text{N}$.

$\mu_{\min} = F/R_g = R_w/R_g = 426.0/950 = 0.448$.

**If you get this wrong, revise:** [Ladders Against Walls](#32-ladders-against-walls) — Section 3.2.

</details>

<details>
<summary>Problem 11</summary>
A couple consists of two forces of $25\,\text{N}$ acting at the ends of a rod of length $0.8\,\text{m}$. The forces are perpendicular to the rod. Calculate the torque of the couple. A second couple is applied to the same rod in the opposite direction with forces of $40\,\text{N}$ at a distance of $0.5\,\text{m}$ apart. Is the rod in equilibrium? If not, what is the net torque?
</details>

<details>
<summary>Solution 11</summary>
Torque of first couple: $\tau_1 = 25 \times 0.8 = 20\,\text{Nm}$.

Torque of second couple: $\tau_2 = 40 \times 0.5 = 20\,\text{Nm}$ (opposite direction).

Net torque: $\tau_{\text{net}} = 20 - 20 = 0\,\text{Nm}$.

The rod **is** in rotational equilibrium since the two couples balance exactly.

**If you get this wrong, revise:** [Couples and Torque](#31-couples-and-torque) — Section 3.1.

</details>

<details>
<summary>Problem 12</summary>
A non-uniform beam $AB$ of length $5\,\text{m}$ and weight $300\,\text{N}$ is supported at $A$ on a pivot and at $B$ by a vertical string. A load of $400\,\text{N}$ is hung from a point $C$, $2\,\text{m}$ from $A$. When the beam is horizontal, the tension in the string at $B$ is $500\,\text{N}$. Find the distance of the centre of mass of the beam from $A$.
</details>

<details>
<summary>Solution 12</summary>
Let the centre of mass be at distance $x$ from $A$.

Taking moments about $A$ (clockwise positive):

$T_B \times 5 = 300x + 400 \times 2$.

$500 \times 5 = 300x + 800$.

$2500 = 300x + 800$.

$300x = 1700 \implies x = \dfrac{1700}{300} = \dfrac{17}{3} \approx 5.67\,\text{m}$.

Since $x > 5\,\text{m}$ (the length of the beam), the centre of mass lies **beyond** end $B$. This
makes sense — the tension at $B$ is large relative to the load, suggesting the beam is heavier near
end $B$.

Wait — let us check: if the beam is $5\,\text{m}$ long, the centre of mass must lie on the beam. Let
us re-examine.

$2500 = 300x + 800 \implies x = \dfrac{1700}{300} = 5.67\,\text{m}$.

This is impossible for a $5\,\text{m}$ beam. The given data is inconsistent — there must be an error
in the problem statement. In an exam, you would state that no valid position exists.

**If you get this wrong, revise:** [Non-Uniform Beams](#33-non-uniform-beams) — Section 3.3.

</details>

<details>
<summary>Problem 13</summary>
A light framework consists of six rods joined to form a regular hexagon of side $2\,\text{m}$. Three additional diagonal rods connect opposite vertices. A vertical force of $100\,\text{N}$ acts downward at the top vertex. The framework is supported at the bottom two vertices. Using the method of joints, find the force in the vertical rod connecting the top vertex to the centre of the hexagon.
</details>

<details>
<summary>Solution 13</summary>
By symmetry, the two support reactions are equal. Vertical equilibrium: $2R = 100 \implies R = 50\,\text{N}$ at each bottom vertex.

Consider the joint at the top vertex. The vertical rod carries force $F_v$ and the two diagonal rods
carry forces $F_d$ each.

Resolving vertically at the top joint: $F_v + 2F_d\cos 60° = 100$.

$F_v + F_d = 100$.

Now consider the joint where the vertical rod meets the centre. By symmetry, the horizontal
components from the diagonal rods at this joint cancel. Resolving vertically:
$F_v = 2F_d\cos 60° = F_d$.

Substituting: $F_v + F_v = 100 \implies F_v = 50\,\text{N}$ (tension).

The vertical rod carries $50\,\text{N}$ in tension.

**If you get this wrong, revise:** [Frameworks and Trusses](#34-frameworks-and-trusses) — Section
3.4.

</details>

<details>
<summary>Problem 14</summary>
A uniform rectangular block of weight $400\,\text{N}$ has a base $0.5\,\text{m}$ wide and height $1.0\,\text{m}$. It rests on a rough horizontal surface with $\mu = 0.3$. A horizontal force $P$ is applied at a height $h$ above the ground. Find the range of $h$ for which the block will slide before it topples.
</details>

<details>
<summary>Solution 14</summary>
**Sliding force:** $P_{\text{slide}} = \mu \times 400 = 0.3 \times 400 = 120\,\text{N}$.

**Toppling condition:** Taking moments about the bottom-right corner when the block is about to
topple:

$P \times h = 400 \times 0.25$ (half the base width).

$P_{\text{topple}} = \dfrac{100}{h}$.

For sliding to occur before toppling: $P_{\text{slide}} \lt P_{\text{topple}}$.

$120 \lt \dfrac{100}{h} \implies h \lt \dfrac{100}{120} = \dfrac{5}{6} \approx 0.833\,\text{m}$.

So the block will slide before it topples if $h \lt \dfrac{5}{6}\,\text{m}$ (i.e., the force is
applied below $\dfrac{5}{6}\,\text{m}$ from the ground).

For $h > \dfrac{5}{6}\,\text{m}$, the block topples first. At $h = \dfrac{5}{6}\,\text{m}$, sliding
and toppling occur simultaneously.

**If you get this wrong, revise:** [Tilting and Toppling](#5-tilting-and-toppling) — Section 5.

</details>

<details>
<summary>Problem 15</summary>
A uniform rod $AB$ of length $4\,\text{m}$ and weight $120\,\text{N}$ is hinged at $A$ to a vertical wall. The rod is held in a horizontal position by a light strut $BC$ connected to the wall at $C$, vertically below $A$, with $AC = 3\,\text{m}$. Find the thrust in the strut and the magnitude and direction of the reaction at the hinge $A$.
</details>

<details>
<summary>Solution 15</summary>
The strut $BC$ is a rod under compression (thrust). Let the thrust be $T$ along $BC$.

First, find the geometry. $AC = 3\,\text{m}$, $AB = 4\,\text{m}$, so
$BC = \sqrt{3^2 + 4^2} = 5\,\text{m}$.

The angle between $BC$ and the horizontal is $\alpha$ where $\sin\alpha = 3/5$ and
$\cos\alpha = 4/5$.

Taking moments about $A$: the perpendicular distance from $A$ to the line of action of the thrust
$T$ in $BC$ is needed.

The thrust acts along $CB$. The moment arm from $A$ to this line is $AC = 3\,\text{m}$ (the
perpendicular distance from $A$ to line $BC$).

Clockwise moment of thrust: $T \times 3$ (thrust pushes from $B$ toward $C$, creating a clockwise
moment about $A$).

Anticlockwise moment of weight: $120 \times 2 = 240\,\text{Nm}$.

$T \times 3 = 240 \implies T = 80\,\text{N}$ (compression).

Resolving forces at $A$:

Horizontal: $R_x = T\cos\alpha = 80 \times \dfrac{4}{5} = 64\,\text{N}$.

Vertical: $R_y = 120 - T\sin\alpha = 120 - 80 \times \dfrac{3}{5} = 120 - 48 = 72\,\text{N}$.

$R = \sqrt{64^2 + 72^2} = \sqrt{4096 + 5184} = \sqrt{9280} \approx 96.3\,\text{N}$.

Direction: $\theta = \arctan(72/64) = \arctan(1.125) \approx 48.4°$ above the horizontal.

**If you get this wrong, revise:** [Equilibrium Conditions](#3-equilibrium-conditions) — Section 3.

</details>

<details>
<summary>Problem 16</summary>
A uniform solid is formed from a hemisphere of radius $6\,\text{cm}$ attached to a cylinder of the same radius and height $10\,\text{cm}$. Find the distance of the centre of mass from the flat face of the hemisphere.
</details>

<details>
<summary>Solution 16</summary>
**Hemisphere:** The centre of mass of a uniform solid hemisphere is at $\dfrac{3r}{8}$ from the flat face.

$\bar{x}_H = \dfrac{3 \times 6}{8} = \dfrac{18}{8} = 2.25\,\text{cm}$ from the flat face.

Volume of hemisphere: $V_H = \dfrac{2}{3}\pi r^3 = \dfrac{2}{3}\pi(216) = 144\pi\,\text{cm}^3$.

**Cylinder:** Centre of mass at midpoint: $\bar{x}_C = 5\,\text{cm}$ from its base (which is the
flat face of the hemisphere).

Volume of cylinder: $V_C = \pi r^2 h = \pi(36)(10) = 360\pi\,\text{cm}^3$.

**Composite body:** Taking moments about the flat face:

$\bar{x} = \dfrac{V_H \times 2.25 + V_C \times 5}{V_H + V_C} = \dfrac{144\pi \times 2.25 + 360\pi \times 5}{144\pi + 360\pi}$

$= \dfrac{324\pi + 1800\pi}{504\pi} = \dfrac{2124}{504} = \dfrac{59}{14} \approx 4.21\,\text{cm}$.

Centre of mass is approximately $4.21\,\text{cm}$ from the flat face.

**If you get this wrong, revise:** [Composite Bodies](#43-composite-bodies) — Section 4.3.

</details>

:::

:::

:::

:::

:::

:::
