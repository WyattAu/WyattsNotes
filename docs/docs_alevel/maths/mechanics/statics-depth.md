---
title: Statics (Extended)
description:
  A-Level Mathematics notes on Statics (Extended): Statics (Extended Treatment);
  1. Moments; 1.1 Definition; 1.2 Moment of a force at an angle.
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: statics-extended
---

## Statics (Extended Treatment)

This document covers moments, equilibrium conditions, centres of mass, ladder problems, and
frameworks with a rigorous, proof-based approach.

:::info
Statics problems require careful consideration of every force and every moment. A systematic
approach -- drawing the diagram, listing forces, choosing a pivot -- is more reliable than
intuition.
:::

<hr />

## 1. Moments

### 1.1 Definition

The **moment** of a force $\mathbf{F}$ about a point $O$ is:

$$M_O = F \times d$$

where $d$ is the **perpendicular distance** from the line of action of the force to the point $O$.

The SI unit of moment is the newton-metre ($\mathrm{Nm}$).

**Sign convention:** By convention, anticlockwise moments are positive and clockwise moments are
negative.

### 1.2 Moment of a force at an angle

If a force $F$ acts at angle $\theta$ to the line joining the point of application to the pivot,
the moment is $M = Fd\sin\theta$, where $d$ is the distance from the pivot to the point of
application.

**Proof.** Resolve the force into components parallel and perpendicular to the line from the pivot
to the point of application. The parallel component passes through the pivot and produces zero
moment. The perpendicular component is $F\sin\theta$, and its moment is $F\sin\theta \times d$.
$\blacksquare$

### 1.3 Worked example: beam on two supports

**Problem.** A uniform beam $AB$ of mass $20\;\mathrm{kg}$ and length $4\;\mathrm{m}$ rests
horizontally on supports at $A$ and at a point $C$, $1\;\mathrm{m}$ from $B$. A load of $50\;\mathrm{N}$
is hung from the beam at a point $0.5\;\mathrm{m}$ from $A$. Find the reactions at $A$ and $C$.

Taking moments about $A$ (anticlockwise positive):

Weight of beam: $20g\;\mathrm{N}$ acting at the midpoint, $2\;\mathrm{m}$ from $A$.

$$R_C \times 3 - 20g \times 2 - 50 \times 0.5 = 0$$

$$R_C = \frac{40g + 25}{3} = \frac{392 + 25}{3} = \frac{417}{3} = 139\;\mathrm{N}$$

Resolving vertically: $R_A + R_C = 20g + 50$

$$R_A = 20g + 50 - 139 = 196 + 50 - 139 = 107\;\mathrm{N}$$

:::warning Common Pitfall
When taking moments, always measure the **perpendicular distance** from the line of action of the
force to the pivot point, not just the distance along the beam.
:::

<hr />

## 2. Equilibrium of a Rigid Body

### 2.1 Conditions for equilibrium

A rigid body is in equilibrium if and only if:

1. **The resultant force is zero:**
   $$\sum \mathbf{F} = \mathbf{0}$$

2. **The resultant moment about any point is zero:**
   $$\sum M_O = 0 \quad \mathrm{for\ any\ point}\ O$$

**Theorem.** If the resultant force on a body is zero and the resultant moment about **one** point
is zero, then the resultant moment about **every** point is zero.

**Proof.** Suppose $\sum \mathbf{F} = \mathbf{0}$ and $\sum M_A = 0$. For any other point $B$:

$$M_B = M_A + \mathbf{r}_{BA} \times \sum \mathbf{F} = 0 + \mathbf{r}_{BA} \times \mathbf{0} = 0$$

where $\mathbf{r}_{BA}$ is the position vector from $B$ to $A$. $\blacksquare$

This theorem means we only need to take moments about **one** point, but we can choose any point
to simplify the calculation.

### 2.2 Resolving forces in two dimensions

For equilibrium in 2D, we resolve horizontally and vertically:

$$\sum F_x = 0, \qquad \sum F_y = 0, \qquad \sum M = 0$$

This gives three equations, which can determine up to three unknowns.

### 2.3 Worked example: non-uniform beam

**Problem.** A non-uniform beam $AB$ of length $6\;\mathrm{m}$ and mass $30\;\mathrm{kg}$ rests on
supports at $A$ and $B$. When a load of $200\;\mathrm{N}$ is placed at a point $2\;\mathrm{m}$ from
$A$, the reaction at $A$ is $350\;\mathrm{N}$. Find the position of the centre of mass of the beam.

Let the centre of mass be at distance $x$ from $A$. Taking moments about $B$ (anticlockwise positive):

The beam's weight $30g$ acts downward at distance $x$ from $A$, which is $(6 - x)$ from $B$.
The $200\;\mathrm{N}$ load acts at distance $4\;\mathrm{m}$ from $B$.
The reaction at $A$ ($350\;\mathrm{N}$) acts at distance $6\;\mathrm{m}$ from $B$.

$$350 \times 6 + 200 \times 4 - 30g(6 - x) = 0$$

$$2100 + 800 - 294(6 - x) = 0$$

$$2900 = 1764 - 294x$$

$$294x = 1764 - 2900 = -1136$$

Wait -- this gives a negative result, which suggests an error in sign convention. Let me reconsider.

Taking moments about $B$ with anticlockwise positive: forces pushing the beam to rotate anticlockwise
about $B$ contribute positively.

$R_A = 350\;\mathrm{N}$ acts upward at distance $6\;\mathrm{m}$ from $B$: moment $= +350 \times 6 = 2100$.

$200\;\mathrm{N}$ acts downward at distance $4\;\mathrm{m}$ from $B$: moment $= -200 \times 4 = -800$.

$30g\;\mathrm{N}$ acts downward at distance $(6-x)$ from $B$: moment $= -30g(6-x)$.

$$2100 - 800 - 30g(6-x) = 0$$

$$1300 = 294(6-x) = 1764 - 294x$$

$$294x = 464 \implies x = \frac{464}{294} \approx 1.58\;\mathrm{m}$$

The centre of mass is approximately $1.58\;\mathrm{m}$ from $A$.

<hr />

## 3. Centres of Mass

### 3.1 Centre of mass of a system of particles

For particles of masses $m_1, m_2, \ldots, m_n$ at positions $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$:

$$\bar{x} = \frac{\sum m_i x_i}{\sum m_i}, \qquad \bar{y} = \frac{\sum m_i y_i}{\sum m_i}$$

### 3.2 Centre of mass of uniform laminas

**Uniform rod:** Midpoint.

**Uniform rectangular lamina:** Intersection of the diagonals.

**Uniform triangular lamina:** At the intersection of the medians, which is at a distance
$\dfrac{2}{3}$ of the median length from each vertex.

**Proof for a triangle.** Place the triangle with vertices at $(0,0)$, $(a,0)$, and $(0,b)$.
A strip parallel to the base at height $y$ has width $a\!\left(1 - \dfrac{y}{b}\right)$ and mass
proportional to this width.

$$\bar{y} = \frac{\int_0^b y \cdot a\!\left(1 - \frac{y}{b}\right)dy}{\int_0^b a\!\left(1 - \frac{y}{b}\right)dy} = \frac{\left[\frac{y^2}{2} - \frac{y^3}{3b}\right]_0^b}{\left[y - \frac{y^2}{2b}\right]_0^b} = \frac{\frac{b^2}{2} - \frac{b^2}{3}}{b - \frac{b}{2}} = \frac{\frac{b^2}{6}}{\frac{b}{2}} = \frac{b}{3}$$

The centre of mass is at height $\dfrac{b}{3}$, which is $\dfrac{1}{3}$ of the way from the base
and $\dfrac{2}{3}$ from the apex. $\blacksquare$

### 3.3 Composite bodies

For a body composed of several parts with known centres of mass, the overall centre of mass is found
by treating each part as a particle at its own centre of mass.

### 3.4 Worked example: composite lamina

**Problem.** A uniform lamina consists of a rectangle $ABCD$ with $AB = 8\;\mathrm{cm}$,
$BC = 6\;\mathrm{cm}$, with a semicircle of diameter $8\;\mathrm{cm}$ removed from the top edge
$AD$. Find the centre of mass of the remaining lamina.

Rectangle: area $= 48\;\mathrm{cm}^2$, centre at $(4, 3)$.

Semicircle: radius $= 4\;\mathrm{cm}$, area $= \dfrac{1}{2}\pi(16) = 8\pi\;\mathrm{cm}^2$.
Centre of mass of the semicircle is at distance $\dfrac{4r}{3\pi} = \dfrac{16}{3\pi}$ from the
diameter, i.e. at $(4, 6 - \dfrac{16}{3\pi})$.

Treating the removed semicircle as a negative mass:

$$\bar{x} = \frac{48 \times 4 - 8\pi \times 4}{48 - 8\pi} = \frac{4(48 - 8\pi)}{48 - 8\pi} = 4\;\mathrm{cm}$$

This is expected by symmetry.

$$\bar{y} = \frac{48 \times 3 - 8\pi\!\left(6 - \frac{16}{3\pi}\right)}{48 - 8\pi} = \frac{144 - 48\pi + \frac{128}{3}}{48 - 8\pi}$$

$$\bar{y} = \frac{144 + 42.67 - 150.80}{48 - 25.13} = \frac{35.87}{22.87} \approx 1.57\;\mathrm{cm}$$

:::warning Common Pitfall
When a shape has a hole or a section removed, use the **negative mass** method: treat the removed
section as having negative area. The formula remains the same but with negative contributions from
the removed part.
:::

<hr />

## 4. Ladder Problems

### 4.1 General approach

Ladder problems involve a uniform ladder leaning against a rough vertical wall and resting on a
rough horizontal ground. The key forces are:

- Weight $W$ of the ladder, acting at the centre.
- Normal reaction $R_g$ from the ground (vertical).
- Friction $F_g$ from the ground (horizontal).
- Normal reaction $R_w$ from the wall (horizontal).
- Friction $F_w$ from the wall (vertical).

### 4.2 Worked example: ladder on rough ground and smooth wall

**Problem.** A uniform ladder of length $5\;\mathrm{m}$ and mass $20\;\mathrm{kg}$ rests with its
foot on rough horizontal ground and its top against a smooth vertical wall. The ladder makes an
angle of $65^\circ$ with the horizontal. The coefficient of friction between the ladder and the
ground is $0.4$. Will the ladder slip?

Resolving horizontally: $F_g = R_w$.

Resolving vertically: $R_g = 20g = 196\;\mathrm{N}$.

Taking moments about the foot of the ladder (anticlockwise positive):

$$R_w \times 5\sin 65^\circ - 20g \times 2.5\cos 65^\circ = 0$$

$$R_w = \frac{20g \times 2.5\cos 65^\circ}{5\sin 65^\circ} = \frac{49\cos 65^\circ}{\sin 65^\circ} = 49\cot 65^\circ$$

$$R_w = 49 \times 0.4663 = 22.85\;\mathrm{N}$$

$$F_g = R_w = 22.85\;\mathrm{N}$$

Maximum available friction: $F_{\max} = \mu R_g = 0.4 \times 196 = 78.4\;\mathrm{N}$.

Since $F_g = 22.85 \lt 78.4 = F_{\max}$, the ladder does **not** slip.

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

:::warning Common Pitfall
In ladder problems, always take moments about the **foot** of the ladder (or the point where two
unknown forces act) to eliminate as many unknowns as possible from the moment equation.
:::

<hr />

## 5. Frameworks

### 5.1 Method of joints

A **framework** (or truss) is a structure made of light rods joined at points called **joints**
(or **nodes**). To analyse a framework:

1. Find the external reactions (support forces) using equilibrium of the whole structure.
2. Analyse each joint in turn, resolving forces in two perpendicular directions.
3. Determine whether each rod is in **tension** (pulling) or **compression** (pushing).

**Assumptions:**
- All rods are light (weightless).
- All joints are smooth pin joints.
- All forces act along the rods (no bending).

### 5.2 Worked example: simple truss

**Problem.** A framework consists of six light rods forming a equilateral triangle $ABC$ (side
$2\;\mathrm{m}$) with midpoints $D$, $E$, $F$ on $AB$, $BC$, $CA$ respectively, connected to the
opposite vertices. A vertical load of $100\;\mathrm{N}$ acts at $A$. The framework is supported at
$B$ and $C$ on smooth horizontal surfaces. Find the forces in all rods.

By symmetry, the vertical reactions at $B$ and $C$ are equal:

$$R_B = R_C = 50\;\mathrm{N}$$

**Joint $A$:** Vertical equilibrium: $T_{AD}\sin 60^\circ + T_{AE}\sin 60^\circ = 100$.

By symmetry, $T_{AD} = T_{AE}$:

$$2T_{AD}\sin 60^\circ = 100 \implies T_{AD} = \frac{100}{2\sin 60^\circ} = \frac{100}{\sqrt{3}} \approx 57.7\;\mathrm{N}$$

Both $AD$ and $AE$ are in **tension** (pulling away from $A$).

**Joint $B$:** Horizontal: $T_{BD} = R_B\cot 60^\circ = 50/\sqrt{3} \approx 28.9\;\mathrm{N}$ (tension).

Vertical: $T_{BF} = R_B = 50\;\mathrm{N}$ (compression, pushing into $B$).

This analysis continues joint by joint until all rod forces are determined.

### 5.3 Method of sections

For large frameworks, the **method of sections** is often more efficient. An imaginary cut is made
through the framework, and equilibrium of one of the resulting sections is analysed.

<hr />

## 6. Practice Problems

### Problem 1

A uniform beam $AB$ of length $5\;\mathrm{m}$ and weight $200\;\mathrm{N}$ is hinged at $A$ and
supported by a wire attached at $B$, making an angle of $30^\circ$ with the beam. Find the tension
in the wire and the reaction at the hinge.

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
base $10\;\mathrm{cm}$ and height $6\;\mathrm{cm}$ attached to one side. Find the centre of mass of
the composite lamina.

<details>
<summary>Solution</summary>

Square: area $= 100$, centre at $(5, 5)$.
Triangle: area $= 30$, centre at $\left(\dfrac{10}{3}, 3\right)$ (one-third from the base).

$$\bar{x} = \frac{100 \times 5 + 30 \times \frac{10}{3}}{130} = \frac{500 + 100}{130} = \frac{600}{130} \approx 4.62\;\mathrm{cm}$$

$$\bar{y} = \frac{100 \times 5 + 30 \times 3}{130} = \frac{500 + 90}{130} = \frac{590}{130} \approx 4.54\;\mathrm{cm}$$

</details>

### Problem 3

A uniform ladder of length $8\;\mathrm{m}$ and mass $25\;\mathrm{kg}$ rests against a rough vertical
wall (coefficient of friction $0.3$) on rough horizontal ground (coefficient of friction $0.4$).
The ladder makes an angle of $55^\circ$ with the horizontal. A man of mass $75\;\mathrm{kg}$ stands
on the ladder at a point $5\;\mathrm{m}$ from the foot. Determine whether the ladder is in
equilibrium.

<details>
<summary>Solution</summary>

Resolving vertically: $R_g = (25 + 75)g = 980\;\mathrm{N}$.

Resolving horizontally: $F_g = R_w$.

Taking moments about the foot:

$R_w \times 8\sin 55^\circ - 25g \times 4\cos 55^\circ - 75g \times 5\cos 55^\circ = 0$

$R_w = \frac{g(100 + 375)\cos 55^\circ}{8\sin 55^\circ} = \frac{475g\cot 55^\circ}{8} = \frac{475 \times 9.8 \times 0.7002}{8}$

$R_w \approx 407.5\;\mathrm{N}$

So $F_g = 407.5\;\mathrm{N}$. Available friction at ground: $0.4 \times 980 = 392\;\mathrm{N}$.

Available friction at wall: $F_w \leq 0.3 R_w = 0.3 \times 407.5 = 122.3\;\mathrm{N}$.

For vertical equilibrium at the wall: $F_w + 25g + 75g = R_g$, which gives $F_w = 0$ by our
equation. But we should check: resolving vertically for the whole system gives $R_g = 980\;\mathrm{N}$
and the wall friction $F_w$ acts upward.

Taking moments about the foot again with $F_w$ included:

$R_w \times 8\sin 55^\circ + F_w \times 8\cos 55^\circ = 475g\cos 55^\circ + 25g \times 4\cos 55^\circ$

This gives $F_w = 0$ by the vertical resolution. Since $F_g = 407.5 \gt 392$, the ladder
**would slip** at the ground.

</details>

### Problem 4

A uniform rod $AB$ of length $3\;\mathrm{m}$ and weight $80\;\mathrm{N}$ is freely hinged at $A$ to
a vertical wall. The rod is held horizontal by a string attached to $B$ and to a point $C$ on the
wall $2\;\mathrm{m}$ above $A$. A load of $120\;\mathrm{N}$ is hung from $B$. Find the tension in
the string.

<details>
<summary>Solution</summary>

The string $BC$ has length $\sqrt{9 + 4} = \sqrt{13}\;\mathrm{m}$.

$\sin\theta = \dfrac{2}{\sqrt{13}}$ where $\theta$ is the angle between the string and the rod.

Taking moments about $A$:

$T \times 3 \times \dfrac{2}{\sqrt{13}} - 80 \times 1.5 - 120 \times 3 = 0$

$T = \frac{120 + 360}{6/\sqrt{13}} = \frac{480\sqrt{13}}{6} = 80\sqrt{13} \approx 288.4\;\mathrm{N}$

</details>
