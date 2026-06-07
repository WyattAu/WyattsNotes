---
title: Statics (Extended)
description:
  'A-Level Maths Statics (Extended) notes covering key definitions, core concepts, worked examples,
  and practice questions for effective revision.'
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: statics-extended
---

## Statics (Extended Treatment)

This document covers moments, equilibrium conditions, centres of mass, ladder problems, and
Frameworks with a rigorous, proof-based approach.

:::info Statics problems require careful consideration of every force and every moment. A systematic
Approach -- drawing the diagram, listing forces, choosing a pivot -- is more reliable than
Intuition.
:::

<hr />

## 1. Moments

### 1.1 Definition

The **moment** of a force $\mathbf{F}$ about a point $O$ is:

$$M_O = F \times d$$

Where $d$ is the **perpendicular distance** from the line of action of the force to the point $O$.

The SI unit of moment is the newton-metre ($\mathrm{Nm}$).

**Sign convention:** By convention, anticlockwise moments are positive and clockwise moments are
Negative.

### 1.2 Moment of a force at an angle

If a force $F$ acts at angle $\theta$ to the line joining the point of application to the pivot, The
moment is $M = Fd\sin\theta$Where $d$ is the distance from the pivot to the point of Application.

**Proof.** Resolve the force into components parallel and perpendicular to the line from the pivot
To the point of application. The parallel component passes through the pivot and produces zero
Moment. The perpendicular component is $F\sin\theta$And its moment is $F\sin\theta \times d$.
$\blacksquare$

### 1.3 Worked example: beam on two supports

**Problem.** A uniform beam $AB$ of mass $20\;\mathrm{kg}$ and length $4\;\mathrm{m}$ rests
Horizontally on supports at $A$ and at a point $C$, $1\;\mathrm{m}$ from $B$. A load of
$50\;\mathrm{N}$ Is hung from the beam at a point $0.5\;\mathrm{m}$ from $A$. Find the reactions at
$A$ and $C$.

Taking moments about $A$ (anticlockwise positive):

Weight of beam: $20g\;\mathrm{N}$ acting at the midpoint, $2\;\mathrm{m}$ from $A$.

$$R_C \times 3 - 20g \times 2 - 50 \times 0.5 = 0$$

$$R_C = \frac{40g + 25}{3} = \frac{392 + 25}{3} = \frac{417}{3} = 139\;\mathrm{N}$$

Resolving vertically: $R_A + R_C = 20g + 50$

$$R_A = 20g + 50 - 139 = 196 + 50 - 139 = 107\;\mathrm{N}$$

:::warning Common Pitfall When taking moments, always measure the **perpendicular distance** from
the line of action of the Force to the pivot point, not just the distance along the beam.
:::

<hr />

## 2. Equilibrium of a Rigid Body

### 2.1 Conditions for equilibrium

A rigid body is in equilibrium if and only if:

1. **The resultant force is zero:** $$\sum \mathbf{F} = \mathbf{0}$$

2. **The resultant moment about any point is zero:**
   $$\sum M_O = 0 \quad \mathrm{for\ any\ point}\ O$$

**Theorem.** If the resultant force on a body is zero and the resultant moment about **one** point
Is zero, then the resultant moment about **every** point is zero.

**Proof.** Suppose $\sum \mathbf{F} = \mathbf{0}$ and $\sum M_A = 0$. For any other point $B$:

$$M_B = M_A + \mathbf{r}_{BA} \times \sum \mathbf{F} = 0 + \mathbf{r}_{BA} \times \mathbf{0} = 0$$

Where $\mathbf{r}_{BA}$ is the position vector from $B$ to $A$. $\blacksquare$

This theorem means we only need to take moments about **one** point, but we can choose any point To
simplify the calculation.

### 2.2 Resolving forces in two dimensions

For equilibrium in 2D, we resolve horizontally and vertically:

$$\sum F_x = 0, \qquad \sum F_y = 0, \qquad \sum M = 0$$

This gives three equations, which can determine up to three unknowns.

### 2.3 Worked example: non-uniform beam

**Problem.** A non-uniform beam $AB$ of length $6\;\mathrm{m}$ and mass $30\;\mathrm{kg}$ rests on
Supports at $A$ and $B$. When a load of $200\;\mathrm{N}$ is placed at a point $2\;\mathrm{m}$ from
$A$The reaction at $A$ is $350\;\mathrm{N}$. Find the position of the centre of mass of the beam.

Let the centre of mass be at distance $x$ from $A$. Taking moments about $B$ (anticlockwise
positive):

The beam's weight $30g$ acts downward at distance $x$ from $A$Which is $(6 - x)$ from $B$. The
$200\;\mathrm{N}$ load acts at distance $4\;\mathrm{m}$ from $B$. The reaction at $A$
($350\;\mathrm{N}$) acts at distance $6\;\mathrm{m}$ from $B$.

$$350 \times 6 + 200 \times 4 - 30g(6 - x) = 0$$

$$2100 + 800 - 294(6 - x) = 0$$

$$2900 = 1764 - 294x$$

$$294x = 1764 - 2900 = -1136$$

Wait -- this gives a negative result, which suggests an error in sign convention. Let me reconsider.

Taking moments about $B$ with anticlockwise positive: forces pushing the beam to rotate
anticlockwise About $B$ contribute positively.

$R_A = 350\;\mathrm{N}$ acts upward at distance $6\;\mathrm{m}$ from $B$: moment
$= +350 \times 6 = 2100$.

$200\;\mathrm{N}$ acts downward at distance $4\;\mathrm{m}$ from $B$: moment
$= -200 \times 4 = -800$.

$30g\;\mathrm{N}$ acts downward at distance $(6-x)$ from $B$: moment $= -30g(6-x)$.

$$2100 - 800 - 30g(6-x) = 0$$

$$1300 = 294(6-x) = 1764 - 294x$$

$$294x = 464 \implies x = \frac{464}{294} \approx 1.58\;\mathrm{m}$$

The centre of mass is approximately $1.58\;\mathrm{m}$ from $A$.

<hr />

## 3. Centres of Mass

### 3.1 Centre of mass of a system of particles

For particles of masses $m_1, m_2, \ldots, m_n$ at positions
$(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$:

$$\bar{x} = \frac◆LB◆\sum m_i x_i◆RB◆◆LB◆\sum m_i◆RB◆, \qquad \bar{y} = \frac◆LB◆\sum m_i y_i◆RB◆◆LB◆\sum m_i◆RB◆$$

### 3.2 Centre of mass of uniform laminas

**Uniform rod:** Midpoint.

**Uniform rectangular lamina:** Intersection of the diagonals.

**Uniform triangular lamina:** At the intersection of the medians, which is at a distance
$\dfrac{2}{3}$ of the median length from each vertex.

**Proof for a triangle.** Place the triangle with vertices at $(0,0)$, $(a,0)$And $(0,b)$. A strip
parallel to the base at height $y$ has width $a\!\left(1 - \dfrac{y}{b}\right)$ and mass
Proportional to this width.

$$\bar{y} = \frac◆LB◆\int_0^b y \cdot a\!\left(1 - \frac{y}{b}\right)dy◆RB◆◆LB◆\int_0^b a\!\left(1 - \frac{y}{b}\right)dy◆RB◆ = \frac◆LB◆\left[\frac{y^2}{2} - \frac{y^3}{3b}\right]_0^b◆RB◆◆LB◆\left[y - \frac{y^2}{2b}\right]_0^b◆RB◆ = \frac◆LB◆\frac{b^2}{2} - \frac{b^2}{3}◆RB◆◆LB◆b - \frac{b}{2}◆RB◆ = \frac◆LB◆\frac{b^2}{6}◆RB◆◆LB◆\frac{b}{2}◆RB◆ = \frac{b}{3}$$

The centre of mass is at height $\dfrac{b}{3}$Which is $\dfrac{1}{3}$ of the way from the base And
$\dfrac{2}{3}$ from the apex. $\blacksquare$

### 3.3 Composite bodies

For a body composed of several parts with known centres of mass, the overall centre of mass is found
By treating each part as a particle at its own centre of mass.

### 3.4 Worked example: composite lamina

**Problem.** A uniform lamina consists of a rectangle $ABCD$ with $AB = 8\;\mathrm{cm}$
$BC = 6\;\mathrm{cm}$With a semicircle of diameter $8\;\mathrm{cm}$ removed from the top edge $AD$.
Find the centre of mass of the remaining lamina.

Rectangle: area $= 48\;\mathrm{cm}^2$Centre at $(4, 3)$.

Semicircle: radius $= 4\;\mathrm{cm}$Area $= \dfrac{1}{2}\pi(16) = 8\pi\;\mathrm{cm}^2$. Centre of
mass of the semicircle is at distance $\dfrac◆LB◆4r◆RB◆◆LB◆3\pi◆RB◆ = \dfrac◆LB◆16◆RB◆◆LB◆3\pi◆RB◆$
from the Diameter, i.e. At $(4, 6 - \dfrac◆LB◆16◆RB◆◆LB◆3\pi◆RB◆)$.

Treating the removed semicircle as a negative mass:

$$\bar{x} = \frac◆LB◆48 \times 4 - 8\pi \times 4◆RB◆◆LB◆48 - 8\pi◆RB◆ = \frac◆LB◆4(48 - 8\pi)◆RB◆◆LB◆48 - 8\pi◆RB◆ = 4\;\mathrm{cm}$$

This is expected by symmetry.

$$\bar{y} = \frac◆LB◆48 \times 3 - 8\pi\!\left(6 - \frac{16}{3\pi}\right)◆RB◆◆LB◆48 - 8\pi◆RB◆ = \frac◆LB◆144 - 48\pi + \frac{128}{3}◆RB◆◆LB◆48 - 8\pi◆RB◆$$

$$\bar{y} = \frac{144 + 42.67 - 150.80}{48 - 25.13} = \frac{35.87}{22.87} \approx 1.57\;\mathrm{cm}$$

:::warning Common Pitfall When a shape has a hole or a section removed, use the **negative mass**
method: treat the removed Section as having negative area. The formula remains the same but with
negative contributions from The removed part.
:::

<hr />

## 4. Ladder Problems

### 4.1 General approach

Ladder problems involve a uniform ladder leaning against a rough vertical wall and resting on a
Rough horizontal ground. The key forces are:

- Weight $W$ of the ladder, acting at the centre.
- Normal reaction $R_g$ from the ground (vertical).
- Friction $F_g$ from the ground (horizontal).
- Normal reaction $R_w$ from the wall (horizontal).
- Friction $F_w$ from the wall (vertical).

### 4.2 Worked example: ladder on rough ground and smooth wall

**Problem.** A uniform ladder of length $5\;\mathrm{m}$ and mass $20\;\mathrm{kg}$ rests with its
Foot on rough horizontal ground and its top against a smooth vertical wall. The ladder makes an
Angle of $65^\circ$ with the horizontal. The coefficient of friction between the ladder and the
Ground is $0.4$. Will the ladder slip?

Resolving horizontally: $F_g = R_w$.

Resolving vertically: $R_g = 20g = 196\;\mathrm{N}$.

Taking moments about the foot of the ladder (anticlockwise positive):

$$R_w \times 5\sin 65^\circ - 20g \times 2.5\cos 65^\circ = 0$$

$$R_w = \frac◆LB◆20g \times 2.5\cos 65^\circ◆RB◆◆LB◆5\sin 65^\circ◆RB◆ = \frac◆LB◆49\cos 65^\circ◆RB◆◆LB◆\sin 65^\circ◆RB◆ = 49\cot 65^\circ$$

$$R_w = 49 \times 0.4663 = 22.85\;\mathrm{N}$$

$$F_g = R_w = 22.85\;\mathrm{N}$$

Maximum available friction: $F_{\max} = \mu R_g = 0.4 \times 196 = 78.4\;\mathrm{N}$.

Since $F_g = 22.85 \lt 78.4 = F_{\max}$The ladder does **not** slip.

### 4.3 Finding the minimum angle

**Problem.** For the same ladder, find the minimum angle with the horizontal for equilibrium.

At the limiting position, $F_g = \mu R_g$:

$$R_w = F_g = \mu R_g = 0.4 \times 196 = 78.4\;\mathrm{N}$$

Taking moments about the foot:

$$R_w \times 5\sin\alpha = 20g \times 2.5\cos\alpha$$

$$78.4 \times 5\sin\alpha = 490\cos\alpha$$

$$\tan\alpha = \frac{490}{392} = 1.25$$

$$\alpha = \arctan(1.25) \approx 51.3^\circ$$

The minimum angle is approximately $51.3^\circ$.

:::warning Warning In ladder problems, always take moments about the **foot** of the ladder (or the
point where two Unknown forces act) to eliminate as many unknowns as possible from the moment
equation.
:::

<hr />

## 5. Frameworks

### 5.1 Method of joints

A **framework** (or truss) is a structure made of light rods joined at points called **joints** (or
**nodes**). To analyse a framework:

1. Find the external reactions (support forces) using equilibrium of the whole structure.
2. Analyse each joint in turn, resolving forces in two perpendicular directions.
3. Determine whether each rod is in **tension** (pulling) or **compression** (pushing).

**Assumptions:**

- All rods are light (weightless).
- All joints are smooth pin joints.
- All forces act along the rods (no bending).

### 5.2 Worked example: simple truss

**Problem.** A framework consists of six light rods forming a equilateral triangle $ABC$ (side
$2\;\mathrm{m}$) with midpoints $D$$E$$F$ on $AB$$BC$$CA$ respectively, connected to the Opposite
vertices. A vertical load of $100\;\mathrm{N}$ acts at $A$. The framework is supported at $B$ and
$C$ on smooth horizontal surfaces. Find the forces in all rods.

By symmetry, the vertical reactions at $B$ and $C$ are equal:

$$R_B = R_C = 50\;\mathrm{N}$$

**Joint $A$:** Vertical equilibrium: $T_{AD}\sin 60^\circ + T_{AE}\sin 60^\circ = 100$.

By symmetry, $T_{AD} = T_{AE}$:

$$2T_{AD}\sin 60^\circ = 100 \implies T_{AD} = \frac◆LB◆100◆RB◆◆LB◆2\sin 60^\circ◆RB◆ = \frac◆LB◆100◆RB◆◆LB◆\sqrt{3}◆RB◆ \approx 57.7\;\mathrm{N}$$

Both $AD$ and $AE$ are in **tension** (pulling away from $A$).

**Joint $B$:** Horizontal: $T_{BD} = R_B\cot 60^\circ = 50/\sqrt{3} \approx 28.9\;\mathrm{N}$
(tension).

Vertical: $T_{BF} = R_B = 50\;\mathrm{N}$ (compression, pushing into $B$).

This analysis continues joint by joint until all rod forces are determined.

### 5.3 Method of sections

For large frameworks, the **method of sections** is often more efficient. An imaginary cut is made
Through the framework, and equilibrium of one of the resulting sections is analysed.

<hr />

## 6. Practice Problems

### Problem 1

A uniform beam $AB$ of length $5\;\mathrm{m}$ and weight $200\;\mathrm{N}$ is hinged at $A$ and
Supported by a wire attached at $B$Making an angle of $30^\circ$ with the beam. Find the tension In
the wire and the reaction at the hinge.

<details>
<summary>Solution</summary>

Taking moments about $A$:

$$T \times 5\sin 30^\circ - 200 \times 2.5 = 0$$

$$T = \frac{500}{2.5} = 200\;\mathrm{N}$$

Resolving at $A$: horizontal reaction $H = T\cos 30^\circ = 200\cos 30^\circ = 173.2\;\mathrm{N}$.

Vertical reaction $V = 200 - T\sin 30^\circ = 200 - 100 = 100\;\mathrm{N}$.

</details>

### Problem 2

A uniform lamina is formed from a square of side $10\;\mathrm{cm}$ with a right-angled triangle of
Base $10\;\mathrm{cm}$ and height $6\;\mathrm{cm}$ attached to one side. Find the centre of mass of
The composite lamina.

<details>
<summary>Solution</summary>

Square: area $= 100$Centre at $(5, 5)$. Triangle: area $= 30$Centre at
$\left(\dfrac{10}{3}, 3\right)$ (one-third from the base).

$$\bar{x} = \frac◆LB◆100 \times 5 + 30 \times \frac{10}{3}◆RB◆◆LB◆130◆RB◆ = \frac{500 + 100}{130} = \frac{600}{130} \approx 4.62\;\mathrm{cm}$$

$$\bar{y} = \frac◆LB◆100 \times 5 + 30 \times 3◆RB◆◆LB◆130◆RB◆ = \frac{500 + 90}{130} = \frac{590}{130} \approx 4.54\;\mathrm{cm}$$

</details>

### Problem 3

A uniform ladder of length $8\;\mathrm{m}$ and mass $25\;\mathrm{kg}$ rests against a rough vertical
Wall (coefficient of friction $0.3$) on rough horizontal ground (coefficient of friction $0.4$). The
ladder makes an angle of $55^\circ$ with the horizontal. A man of mass $75\;\mathrm{kg}$ stands On
the ladder at a point $5\;\mathrm{m}$ from the foot. Determine whether the ladder is in Equilibrium.

<details>
<summary>Solution</summary>

Resolving vertically: $R_g = (25 + 75)g = 980\;\mathrm{N}$.

Resolving horizontally: $F_g = R_w$.

Taking moments about the foot:

$R_w \times 8\sin 55^\circ - 25g \times 4\cos 55^\circ - 75g \times 5\cos 55^\circ = 0$

$R_w = \frac◆LB◆g(100 + 375)\cos 55^\circ◆RB◆◆LB◆8\sin 55^\circ◆RB◆ = \frac◆LB◆475g\cot 55^\circ◆RB◆◆LB◆8◆RB◆ = \frac◆LB◆475 \times 9.8 \times 0.7002◆RB◆◆LB◆8◆RB◆$

$R_w \approx 407.5\;\mathrm{N}$

So $F_g = 407.5\;\mathrm{N}$. Available friction at ground: $0.4 \times 980 = 392\;\mathrm{N}$.

Available friction at wall: $F_w \leq 0.3 R_w = 0.3 \times 407.5 = 122.3\;\mathrm{N}$.

For vertical equilibrium at the wall: $F_w + 25g + 75g = R_g$Which gives $F_w = 0$ by our Equation.
But we should check: resolving vertically for the whole system gives $R_g = 980\;\mathrm{N}$ And the
wall friction $F_w$ acts upward.

Taking moments about the foot again with $F_w$ included:

$R_w \times 8\sin 55^\circ + F_w \times 8\cos 55^\circ = 475g\cos 55^\circ + 25g \times 4\cos 55^\circ$

This gives $F_w = 0$ by the vertical resolution. Since $F_g = 407.5 \gt 392$The ladder **would
slip** at the ground.

</details>

### Problem 4

A uniform rod $AB$ of length $3\;\mathrm{m}$ and weight $80\;\mathrm{N}$ is freely hinged at $A$ to
A vertical wall. The rod is held horizontal by a string attached to $B$ and to a point $C$ on the
Wall $2\;\mathrm{m}$ above $A$. A load of $120\;\mathrm{N}$ is hung from $B$. Find the tension in
The string.

<details>
<summary>Solution</summary>

The string $BC$ has length $\sqrt{9 + 4} = \sqrt{13}\;\mathrm{m}$.

$\sin\theta = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{13}◆RB◆$ where $\theta$ is the angle between the string and
the rod.

Taking moments about $A$:

$T \times 3 \times \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{13}◆RB◆ - 80 \times 1.5 - 120 \times 3 = 0$

$T = \frac◆LB◆120 + 360◆RB◆◆LB◆6/\sqrt{13}◆RB◆ = \frac◆LB◆480\sqrt{13}◆RB◆◆LB◆6◆RB◆ = 80\sqrt{13} \approx 288.4\;\mathrm{N}$

</details>

## Common Pitfalls

1. Rounding intermediate answers too early, which compounds errors in multi-step calculations.

2. Using the wrong equation from the data sheet — take time to read the full equation, including
   conditions and variable definitions.

3. Forgetting to include units in final answers, especially when working with derived units like
   $\text{N}\,\text{kg}^{-1}\,\text{m}^2$.

4. Confusing scalar and vector quantities — always check whether direction matters for the quantity
   in question.

## Worked Examples

### Example 1: Ladder with Wall Friction

**Problem.** A uniform ladder of length $6\ \mathrm{m}$ and mass $18\ \mathrm{kg}$ leans against a
rough vertical wall ($\mu = 0.25$) on rough horizontal ground ($\mu = 0.35$) at an angle of
$60^\circ$ to the horizontal. Determine if the ladder is in equilibrium.

**Solution.** Resolving vertically: $R_g + F_w = 18g = 176.4\ \mathrm{N}$.

Resolving horizontally: $F_g = R_w$.

Taking moments about the foot:
$R_w \times 6\sin 60^\circ + F_w \times 6\cos 60^\circ = 18g \times 3\cos 60^\circ$.

$$5.196 R_w + 3 F_w = 264.6$$

At limiting equilibrium: $F_g = 0.35 R_g$ and $F_w = 0.25 R_w$.

From vertical: $R_g + 0.25 R_w = 176.4$, so $R_g = 176.4 - 0.25 R_w$.

From horizontal: $F_g = R_w$, so $0.35(176.4 - 0.25 R_w) = R_w$.

$61.74 - 0.0875 R_w = R_w$, giving $R_w = \frac{61.74}{1.0875} = 56.77\ \mathrm{N}$.

$F_g = 56.77\ \mathrm{N}$. Maximum ground friction:
$0.35 \times (176.4 - 0.25 \times 56.77) = 0.35 \times 162.2 = 56.77\ \mathrm{N}$.

The ladder is in limiting equilibrium.

$\blacksquare$

### Example 2: Centre of Mass of a Composite Lamina

**Problem.** A uniform rectangular lamina $12\ \mathrm{cm} \times 8\ \mathrm{cm}$ has a circular
disc of radius $3\ \mathrm{cm}$ removed, centred $4\ \mathrm{cm}$ from the left edge and
$4\ \mathrm{cm}$ from the bottom. Find the centre of mass.

**Solution.** Rectangle: area $= 96$, centre at $(6, 4)$.

Circle: area $= 9\pi \approx 28.27$, centre at $(4, 4)$.

Using negative mass for the hole:

$$\bar{x} = \frac{96 \times 6 - 9\pi \times 4}{96 - 9\pi} = \frac{576 - 113.1}{67.73} = \frac{462.9}{67.73} \approx 6.83\ \mathrm{cm}$$

By symmetry of the cut, $\bar{y} = 4\ \mathrm{cm}$.

$\blacksquare$

## Summary

- Equilibrium requires $\sum F_x = 0$, $\sum F_y = 0$, and $\sum M = 0$ about any point.
- Moments: $M = Fd$ where $d$ is the perpendicular distance from the pivot to the line of action.
- Centre of mass of a system: $\bar{x} = \frac{\sum m_i x_i}{\sum m_i}$; use negative mass for
  holes.
- Ladder problems: take moments about the foot to eliminate two unknown forces.
- Choose the pivot wisely to simplify the moment equation by eliminating unknown forces.

