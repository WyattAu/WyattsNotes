---
title: Circular Motion
description:
  A-Level Physics notes on Circular Motion: 1. Angular Quantities; 2.
  Centripetal Acceleration — Derivation; Method 1: Calculus; Method 2: Geometry.
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: circular-motion
---

## Circular Motion

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

<PhetSimulation simulationId="gravity-and-orbits" title="Gravity and Orbits" />

Explore the simulation above to develop intuition for this topic.

## 1. Angular Quantities

**Definition.** The **angular displacement** $\theta$ is the angle swept out by a radius vector. It
is measured in radians (rad).

**Definition.** The **angular velocity** $\omega$ is the rate of change of angular displacement:

$$\boxed{\omega = \frac{d\theta}{dt}}$$

The SI unit is rad s$^{-1}$. The relationship with linear velocity is:

$$v = \omega r$$

**Period and frequency.** For uniform circular motion:

$$\omega = \frac{2\pi}{T} = 2\pi f$$

where $T$ is the period (time for one revolution) and $f$ is the frequency.

:::info Board Coverage AQA, Edexcel, OCR (A), and CIE all require radian measure for angular
quantities. AQA and Edexcel may accept degrees in some contexts but radians are expected in
formulae. CIE explicitly states that angular velocity must be in rad s$^{-1}$.
:::

**Example.** A CD rotates at $480$ rpm. Converting:
$\omega = 480 \times 2\pi/60 = 16\pi \approx 50.3$ rad s$^{-1}$. A point $0.06$ m from the centre
has linear speed $v = \omega r = 50.3 \times 0.06 = 3.02$ m s$^{-1}$.

## 2. Centripetal Acceleration — Derivation

We prove that a body moving in a circle of radius $r$ at constant speed $v$ has an acceleration of
magnitude $a = v^2/r = \omega^2 r$ directed towards the centre.

### Method 1: Calculus

The position vector of a particle moving in a circle in the $xy$-plane is:

$$\mathbf{r}(t) = r\cos(\omega t)\,\mathbf{i} + r\sin(\omega t)\,\mathbf{j}$$

Differentiating to find velocity:

$$\mathbf{v}(t) = \frac{d\mathbf{r}}{dt} = -r\omega\sin(\omega t)\,\mathbf{i} + r\omega\cos(\omega t)\,\mathbf{j}$$

Note: $|\mathbf{v}| = r\omega\sqrt{\sin^2(\omega t) + \cos^2(\omega t)} = r\omega = v$. $\checkmark$

Differentiating again to find acceleration:

$$\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = -r\omega^2\cos(\omega t)\,\mathbf{i} - r\omega^2\sin(\omega t)\,\mathbf{j} = -\omega^2\mathbf{r}(t)$$

$$\boxed{\mathbf{a} = -\omega^2 r\,\hat{\mathbf{r}}}$$

The acceleration has magnitude $|\mathbf{a}| = \omega^2 r = \frac{v^2}{r}$ and is directed radially
**inward** (towards the centre). The negative sign indicates this inward direction. $\square$

**Key insight from the calculus approach.** The acceleration vector
$\mathbf{a}(t) = -\omega^2 \mathbf{r}(t)$ is always antiparallel to the position vector. This means
it always points towards the centre, regardless of where the particle is on the circle. Even though
the speed is constant, the _direction_ of velocity changes continuously, requiring acceleration.

:::info Board Coverage AQA: Both geometric and calculus derivations are accepted. Edexcel: Geometric
derivation is the standard approach; calculus is optional extension work. OCR (A): Either method
accepted; the geometric proof appears more frequently in mark schemes. CIE: The geometric method is
the primary derivation required; calculus is useful for STEP/matriculation preparation.
:::

### Method 2: Geometry

Consider two positions of the particle separated by a small angle $\delta\theta$. The change in
velocity $\delta\mathbf{v}$ is directed towards the centre. From the isosceles triangle formed:

$$\frac{|\delta\mathbf{v}|}{v} = \frac{|\delta\mathbf{s}|}{r} \implies |\delta\mathbf{v}| = \frac{v}{r}|\delta\mathbf{s}|$$

Dividing by $\delta t$ and taking the limit:

$$a = \frac{|\delta\mathbf{v}|}{\delta t} = \frac{v}{r}\frac{|\delta\mathbf{s}|}{\delta t} = \frac{v^2}{r}$$

## 3. Centripetal Force

By Newton's second law, the net force producing centripetal acceleration is:

$$\boxed{F_c = \frac{mv^2}{r} = m\omega^2 r}$$

:::warning Common Pitfall **Centripetal force is not a separate force.** It is the _net_ inward
force resulting from whatever physical forces act on the body (tension, friction, gravity, normal
reaction, etc.). Never draw "centripetal force" on a free body diagram — identify the actual
force(s) providing the centripetal acceleration.
:::

### Intuition: Circular Motion is NOT Equilibrium

A particle in uniform circular motion is accelerating (towards the centre) even though its speed is
constant. The velocity vector is changing _direction_. There is always a net inward force. If you
cut the string, the particle does **not** fly radially outward — it moves tangentially (Newton's
first law).

:::warning Common Pitfall **"Centrifugal force" is not a real force.** In a rotating reference
frame, objects appear to be pushed outward, but this is a pseudo-force (fictitious force) arising
because the frame itself is accelerating. In an inertial (laboratory) frame, no outward force
exists. AQA and Edexcel may ask you to explain the difference; OCR (A) has featured this in
multiple-choice questions.
:::

## 4. Applications

### Horizontal Circle: Conical Pendulum

A mass $m$ on a string of length $L$ moves in a horizontal circle of radius $r = L\sin\alpha$, where
$\alpha$ is the angle the string makes with the vertical.

Vertical: $T\cos\alpha = mg$ ... (i)

Horizontal (centripetal): $T\sin\alpha = \frac{mv^2}{r}$ ... (ii)

Dividing (ii) by (i):

$$\tan\alpha = \frac{v^2}{rg} = \frac{\omega^2 r}{g}$$

From (i), the tension is:

$$\boxed{T = \frac{mg}{\cos\alpha} = \frac{mgL}{\sqrt{L^2 - r^2}}}$$

The period of the conical pendulum can be expressed by substituting $r = L\sin\alpha$ and
$v = \omega r$ into the result for $\tan\alpha$:

$$\tan\alpha = \frac{\omega^2 L\sin\alpha}{g} \implies \omega^2 = \frac{g}{L\cos\alpha}$$

$$\boxed{T = 2\pi\sqrt{\frac{L\cos\alpha}{g}}}$$

**Example.** A conical pendulum with $L = 1.0$ m and $\alpha = 30^\circ$ has period
$T = 2\pi\sqrt{1.0 \times \cos 30°/9.81} = 2\pi\sqrt{0.0883} = 1.86$ s.

:::info Board Coverage AQA: Conical pendulum appears in Paper 1. Edexcel: Covered in CP2, typically
as a multi-step calculation. OCR (A): Appears in Paper 2 with derivations required. CIE: Appears in
P2; may be combined with energy considerations.
:::

### Banked Curves

A road is banked at angle $\theta$ so that a vehicle travelling at speed $v$ can negotiate the curve
without friction.

Resolving vertically: $N\cos\theta = mg$ ... (i)

Resolving horizontally: $N\sin\theta = \frac{mv^2}{r}$ ... (ii)

Dividing (ii) by (i):

$$\boxed{\tan\theta = \frac{v^2}{rg}}$$

$$\boxed{v_{\mathrm{optimum}} = \sqrt{rg\tan\theta}}$$

**Intuition.** At the optimum speed, the horizontal component of the normal reaction provides
exactly the centripetal force. If the vehicle goes faster, friction acts down the slope; if slower,
friction acts up the slope.

### Proof of Maximum Speed on a Banked Curve with Friction

When friction is present, the maximum safe speed is found by resolving forces with friction acting
**down** the slope (opposing the tendency to slide up).

Resolving perpendicular to the slope: $N = mg\cos\theta + \frac{mv^2}{r}\sin\theta$

Resolving parallel to the slope (friction acts down the slope for maximum speed):

$$N\sin\theta + \mu N\cos\theta = \frac{mv^2}{r}$$

Combining:

$$\frac{mv^2}{r} = N(\sin\theta + \mu\cos\theta) = (mg\cos\theta + \frac{mv^2}{r}\sin\theta)(\sin\theta + \mu\cos\theta)$$

This gives:

$$\frac{v^2}{r}\left[1 - \sin\theta(\sin\theta + \mu\cos\theta)\right] = g\cos\theta(\sin\theta + \mu\cos\theta)$$

$$\boxed{v_{\max} = \sqrt{\frac{rg(\sin\theta + \mu\cos\theta)}{\cos\theta - \mu\sin\theta}} = \sqrt{\frac{rg(\tan\theta + \mu)}{1 - \mu\tan\theta}}}$$

For the **minimum** speed, friction acts up the slope, giving:

$$\boxed{v_{\min} = \sqrt{\frac{rg(\tan\theta - \mu)}{1 + \mu\tan\theta}}}$$

**Real-world example.** Motorways are banked at about $2$--$3^\circ$ for drainage and slight curve
assistance. At higher angles, velodromes use banking up to $45^\circ$ so cyclists can maintain speed
through tight turns. The normal reaction alone provides the centripetal force at the design speed.

:::info Board Coverage AQA: Banked curves without friction are standard; friction on banked curves
is extension material. Edexcel: Both frictionless and friction cases may appear in CP2. OCR (A):
Frictionless derivation is core; friction is stretch/challenge. CIE: Frictionless is required;
friction on banked curves occasionally appears in P2 as a harder question.
:::

### Vertical Circles

Consider a mass $m$ on a string of length $r$ moving in a vertical circle.

At any angle, the forces on the mass are tension $T$ (towards centre) and weight $mg$ (vertically
down).

**At the top of the circle** (both $T$ and $mg$ act towards the centre):

$$T + mg = \frac{mv^2}{r}$$

**Condition for the string to remain taut:** $T \geq 0$, so:

$$\frac{mv^2}{r} \geq mg \implies v \geq \sqrt{gr}$$

**At the bottom of the circle** (centripetal direction is upward):

$$T - mg = \frac{mv^2}{r}$$

**Energy conservation** relates speeds at top and bottom:

$$\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}mv_{\mathrm{top}}^2 + mg(2r)$$

$$v_{\mathrm{bottom}}^2 = v_{\mathrm{top}}^2 + 4gr$$

For the minimum speed at the top ($v_{\mathrm{top}} = \sqrt{gr}$):

$$v_{\mathrm{bottom}}^2 = gr + 4gr = 5gr \implies v_{\mathrm{bottom}} = \sqrt{5gr}$$

## Problem Set

<details>
<summary>Problem 1</summary>
A car of mass $1200$ kg travels at $15$ m s$^{-1}$ around a circular bend of radius $50$ m.
Calculate the centripetal force required.

**Answer.** $F_c = mv^2/r = 1200 \times 225/50 = 5400$ N.

<b>If you get this wrong, revise:</b> [Centripetal Force](#3-centripetal-force)

</details>

<details>
<summary>Problem 2</summary>
A conical pendulum has a string of length $1.5$ m and the bob moves in a horizontal circle of radius
$0.90$ m with a period of $1.8$ s. Find the angle the string makes with the vertical and the
tension.

**Answer.** $\cos\alpha = \sqrt{1 - (0.9/1.5)^2} = \sqrt{1 - 0.36} = \sqrt{0.64} = 0.80$.
$\alpha = 36.9^\circ$.

$\omega = 2\pi/T = 2\pi/1.8 = 3.49$ rad s$^{-1}$. $v = \omega r = 3.49 \times 0.90 = 3.14$ m
s$^{-1}$.

$T\sin\alpha = mv^2/r = m \times 3.14^2/0.90 = 10.96m$.
$T = 10.96m/\sin 36.9° = 10.96m/0.60 = 18.3m$ N.

<b>If you get this wrong, revise:</b>
[Horizontal Circle: Conical Pendulum](#horizontal-circle-conical-pendulum)

</details>

<details>
<summary>Problem 3</summary>
A curve of radius $80$ m is banked at $15^\circ$. Calculate the optimum speed for the curve.

**Answer.**
$v = \sqrt{rg\tan\theta} = \sqrt{80 \times 9.81 \times \tan 15°} = \sqrt{80 \times 9.81 \times 0.268} = \sqrt{210.3} = 14.5$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Banked Curves](#banked-curves)

</details>

<details>
<summary>Problem 4</summary>
A mass of $0.50$ kg on a string of length $1.0$ m is whirled in a vertical circle. What is the
minimum speed at the lowest point for the mass to complete the circle?

**Answer.**
$v_{\mathrm{bottom}} = \sqrt{5gr} = \sqrt{5 \times 9.81 \times 1.0} = \sqrt{49.05} = 7.00$ m
s$^{-1}$.

<b>If you get this wrong, revise:</b> [Vertical Circles](#vertical-circles)

</details>

<details>
<summary>Problem 5</summary>
A satellite orbits Earth at an altitude where the gravitational field strength is $4.5$ N kg$^{-1}$.
If the orbit radius is $8.0 \times 10^6$ m, find the orbital speed and period.

**Answer.**
$mg' = mv^2/r \implies v = \sqrt{g'r} = \sqrt{4.5 \times 8.0 \times 10^6} = \sqrt{3.6 \times 10^7} = 6000$
m s$^{-1}$.

$T = 2\pi r/v = 2\pi \times 8.0 \times 10^6/6000 = 8378$ s $\approx 2.3$ hours.

<b>If you get this wrong, revise:</b> [Centripetal Force](#3-centripetal-force)

</details>

<details>
<summary>Problem 6</summary>
A car of mass $1000$ kg rounds a level (unbanked) curve of radius $40$ m at $12$ m s$^{-1}$. What
minimum coefficient of static friction is required?

**Answer.** $F_c = mv^2/r = 1000 \times 144/40 = 3600$ N. This must be provided by friction:
$\mu_s mg = \mu_s \times 9810 = 3600$. $\mu_s = 3600/9810 = 0.367$.

<b>If you get this wrong, revise:</b> [Centripetal Force](#3-centripetal-force)

</details>

<details>
<summary>Problem 7</summary>
A mass of $0.20$ kg is attached to a string of length $0.80$ m and whirled in a vertical circle. At
the highest point, the speed is $3.0$ m s$^{-1}$. Find: (a) the tension at the highest point, (b)
the speed at the lowest point, (c) the tension at the lowest point.

**Answer.** (a) $T + mg = mv^2/r$.
$T = 0.20 \times 9.0/0.80 - 0.20 \times 9.81 = 2.25 - 1.962 = 0.288$ N.

(b) $v_b^2 = v_t^2 + 4gr = 9 + 4 \times 9.81 \times 0.80 = 9 + 31.4 = 40.4$. $v_b = 6.36$ m
s$^{-1}$.

(c) $T - mg = mv_b^2/r$. $T = 0.20 \times 40.4/0.80 + 1.962 = 10.1 + 1.962 = 12.1$ N.

<b>If you get this wrong, revise:</b> [Vertical Circles](#vertical-circles)

</details>

<details>
<summary>Problem 8</summary>
Derive the centripetal acceleration formula $a = v^2/r$ using the geometric method (considering two
positions separated by a small angle).

**Answer.** Consider the velocity vector triangle: two velocity vectors of length $v$ separated by
angle $\delta\theta$. The change in velocity $\delta v$ is the chord of this arc. For small
$\delta\theta$: $|\delta\mathbf{v}| = v\delta\theta$.

The time for this change is $\delta t = \delta s/v = r\delta\theta/v$.

$a = |\delta\mathbf{v}|/\delta t = v\delta\theta \cdot v/(r\delta\theta) = v^2/r$. The direction is
towards the centre. $\square$

<b>If you get this wrong, revise:</b>
[Centripetal Acceleration — Derivation](#2-centripetal-acceleration--derivation)

</details>

<details>
<summary>Problem 9</summary>
A cyclist of total mass $80$ kg rides around a banked track of radius $25$ m at $8.0$ m s$^{-1}$. If
the track is banked at $20^\circ$, find the normal reaction and whether friction is needed (and in which
direction).

**Answer.** Optimum speed:
$v_{\mathrm{opt}} = \sqrt{25 \times 9.81 \times \tan 20°} = \sqrt{25 \times 9.81 \times 0.364} = \sqrt{89.2} = 9.45$
m s$^{-1}$.

Since $8.0 < 9.45$, the cyclist is going too slowly, so friction must act **up** the slope to
prevent sliding down.

$N\cos 20° = mg + F\sin 20^\circ$ and $N\sin 20° - F\cos 20° = mv^2/r$.

This requires solving two simultaneous equations. $N\sin 20° - F\cos 20° = 80 \times 64/25 = 204.8$
and $N\cos 20° + F\sin 20° = 784.8$.

<b>If you get this wrong, revise:</b> [Banked Curves](#banked-curves)

</details>

<details>
<summary>Problem 10</summary>
Explain why a particle released from circular motion moves tangentially, not radially outward.

**Answer.** By Newton's first law, in the absence of a net force, a body continues in a straight
line at constant speed. When the centripetal force is removed (e.g., the string is cut), the only
velocity the particle has is tangential (perpendicular to the radius). There is no radial velocity
component -- the particle was never moving radially outward during the circular motion; it was
accelerating radially inward. The apparent "outward fling" is an illusion of perspective from the
rotating frame.

<b>If you get this wrong, revise:</b>
[Intuition: Circular Motion is NOT Equilibrium](#intuition-circular-motion-is-not-equilibrium)

</details>

## 5. Vertical Circles -- Detailed Analysis

The basic equations were introduced in Section 4. Here we examine vertical circular motion in
greater detail, including general positions on the circle and a full worked example.

### General Position on the Circle

Consider a mass $m$ attached to a string of length $r$, moving in a vertical circle. At a general
position where the string makes angle $\theta$ with the downward vertical, the forces are:

- Tension $T$ along the string (towards the centre)
- Weight $mg$ vertically downward

Resolving along the radial direction (towards the centre):

$$T - mg\cos\theta = \frac{mv^2}{r}$$

$$\boxed{T = \frac{mv^2}{r} + mg\cos\theta}$$

**At the top** ($\theta = 180^\circ$, so $\cos\theta = -1$):

$$\boxed{T_{\mathrm{top}} = \frac{mv^2}{r} - mg}$$

Both $T$ and $mg$ point towards the centre. The string remains taut if $T_{\mathrm{top}} \geq 0$,
giving the minimum speed at the top:

$$\boxed{v_{\min} = \sqrt{gr}}$$

**At the bottom** ($\theta = 0^\circ$, so $\cos\theta = 1$):

$$\boxed{T_{\mathrm{bottom}} = \frac{mv^2}{r} + mg}$$

The tension must overcome gravity and provide the centripetal force, so $T_{\mathrm{bottom}}$ is
always greater than $T_{\mathrm{top}}$ for the same speed.

### Energy Conservation Between Top and Bottom

$$\tfrac{1}{2}mv_b^2 = \tfrac{1}{2}mv_t^2 + mg(2r)$$

$$\boxed{v_b^2 = v_t^2 + 4gr}$$

For the minimum case ($v_t = \sqrt{gr}$):

$$v_b^2 = gr + 4gr = 5gr \implies \boxed{v_b = \sqrt{5gr}}$$

### Difference in Tension: Top vs Bottom

$$T_{\mathrm{bottom}} - T_{\mathrm{top}} = \left(\frac{mv_b^2}{r} + mg\right) - \left(\frac{mv_t^2}{r} - mg\right) = \frac{m(v_b^2 - v_t^2)}{r} + 2mg$$

Using $v_b^2 - v_t^2 = 4gr$:

$$T_{\mathrm{bottom}} - T_{\mathrm{top}} = \frac{m \cdot 4gr}{r} + 2mg = 4mg + 2mg = 6mg$$

$$\boxed{T_{\mathrm{bottom}} - T_{\mathrm{top}} = 6mg}$$

This result is independent of the radius and speed -- it depends only on the mass and $g$.

:::tip Exam Technique When asked about the difference between tension at the top and bottom of a
vertical circle, the answer is always $6mg$ (for a string). For a rod (which can push as well as
pull), the minimum speed at the top is zero, not $\sqrt{gr}$, because the rod can support the weight
even when the speed is zero.
:::

<details>
<summary>Example: Bucket of Water in a Vertical Circle</summary>
A bucket of water of total mass $1.5$ kg is whirled in a vertical circle of radius $0.80$ m. Find:
(a) the minimum speed at the top of the circle for the water to remain in the bucket, (b) the
tension in the arm (modelled as a string) at the top and bottom for this minimum-speed case, (c)
the speed at the bottom.

**Answer.** (a) The water remains in the bucket if the bucket exerts a non-negative normal force on
the water. This is equivalent to the string-remaining-taut condition:
$v_{\min} = \sqrt{gr} = \sqrt{9.81 \times 0.80} = \sqrt{7.85} = 2.80$ m s$^{-1}$.

(b) At the top (minimum speed):
$T = mv^2/r - mg = 1.5 \times 7.85/0.80 - 1.5 \times 9.81 = 14.7 - 14.7 = 0$ N.

This confirms the condition: at minimum speed, the tension is exactly zero -- gravity alone provides
the centripetal force.

At the bottom: $v_b = \sqrt{5gr} = \sqrt{5 \times 9.81 \times 0.80} = \sqrt{39.24} = 6.26$ m
s$^{-1}$.

$T = mv_b^2/r + mg = 1.5 \times 39.24/0.80 + 14.7 = 73.6 + 14.7 = 88.3$ N.

(c) As calculated in (b): $v_b = 6.26$ m s$^{-1}$.

</details>

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

## 6. Conical Pendulum -- Extended Analysis

Section 4 derived the basic results for the conical pendulum. Here we present a complete derivation
and discuss additional features.

### Full Derivation

A mass $m$ is suspended from a string of length $L$ and set into motion so that it traces a
horizontal circle of radius $r$. The string makes a constant angle $\alpha$ with the vertical.

**Geometry.** The horizontal circle radius and string length are related by:

$$\boxed{r = L\sin\alpha}$$

**Forces.** Two forces act on the mass: tension $T$ along the string (at angle $\alpha$ to the
vertical) and weight $mg$ downward.

Resolving vertically (no vertical acceleration):

$$T\cos\alpha = mg \implies \boxed{T = \frac{mg}{\cos\alpha}}$$

Resolving horizontally (centripetal acceleration towards centre):

$$T\sin\alpha = \frac{mv^2}{r} = m\omega^2 r$$

Substituting $T = mg/\cos\alpha$ and $r = L\sin\alpha$, then simplifying for $\sin\alpha \neq 0$:

$$\frac{mg}{\cos\alpha}\sin\alpha = m\omega^2 L\sin\alpha \implies \omega^2 = \frac{g}{L\cos\alpha}$$

The period is therefore:

$$\boxed{T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L\cos\alpha}{g}}}$$

**Key features of the period formula:**

The period depends on $L\cos\alpha$ (the vertical height of the bob below the pivot), not on the
mass. For a given vertical height $h = L\cos\alpha$, all conical pendulums have the same period,
regardless of the angle or string length. A larger angle $\alpha$ (wider circle) gives a shorter
period (faster motion). As $\alpha \to 0$, the period approaches $T = 2\pi\sqrt{L/g}$, which is the
period of a simple pendulum for small oscillations.

:::warning Common Pitfall The period of a conical pendulum is $T = 2\pi\sqrt{L\cos\alpha/g}$, which
is **shorter** than the small-angle simple pendulum period $T = 2\pi\sqrt{L/g}$. Do not confuse
these two results. The conical pendulum has an additional $\cos\alpha$ factor because only the
vertical component of tension balances gravity.
:::

## 7. Centrifugal Force -- Rotating Reference Frames

**Definition.** The **centrifugal force** is a fictitious (pseudo) force that appears to act on a
body in a rotating reference frame, directed radially outward from the axis of rotation.

**Intuition.** Passengers in a car going around a bend feel "thrown outward". This is not because an
outward force acts on them. In the inertial (ground) frame, the passengers tend to move in a
straight line (Newton's first law) while the car turns underneath them. The door or seatbelt must
exert an inward force to change the passengers' direction -- this is the centripetal force.

In the rotating frame of the car, the passengers appear stationary. To make Newton's second law work
in this non-inertial frame, we must introduce a fictitious outward force:

$$\boxed{F_{\mathrm{centrifugal}} = m\omega^2 r = \frac{mv^2}{r}}$$

This has the same magnitude as the centripetal force but points in the opposite direction.

:::warning Common Pitfall **Centrifugal force is not a real force.** It does not appear on free-body
diagrams in inertial frames. It is a mathematical convenience for analysing motion in rotating
frames. In exams, always explain circular motion using centripetal force in an inertial frame unless
explicitly asked about rotating frames. AQA and OCR (A) have specifically tested the distinction
between centripetal and centrifugal descriptions.
:::

**Summary of the two descriptions:**

| Feature                | Inertial frame (ground)              | Rotating frame (car)                 |
| ---------------------- | ------------------------------------ | ------------------------------------ |
| Real forces            | Friction / normal from door (inward) | Friction / normal from door (inward) |
| Additional force       | None                                 | Centrifugal (fictitious, outward)    |
| Passenger acceleration | Centripetal (inward)                 | Zero (apparent equilibrium)          |

:::tip Exam Technique When asked "why do passengers feel thrown outward in a cornering car?", the
correct A-level answer is: "The passengers tend to continue in a straight line by Newton's first law
while the car turns. No outward force acts on the passengers." Mentioning centrifugal force is
acceptable only if you clearly state it is a fictitious force in a rotating frame.
:::

## Further Problems

<details>
<summary>Problem 11</summary>
A mass of $0.40$ kg on a string of length $1.2$ m is whirled in a vertical circle. At the highest
point, the tension in the string is $1.8$ N. Find: (a) the speed at the highest point, (b) the
speed at the lowest point, (c) the tension at the lowest point, (d) the difference
$T_{\mathrm{bottom}} - T_{\mathrm{top}}$ and verify that it equals $6mg$.

**Answer.** (a) At the top: $T + mg = mv^2/r$.

$1.8 + 0.40 \times 9.81 = 0.40v_t^2/1.2$.

$1.8 + 3.924 = 0.333v_t^2$.

$v_t^2 = 5.724/0.333 = 17.18$, so $v_t = 4.14$ m s$^{-1}$.

(b) $v_b^2 = v_t^2 + 4gr = 17.18 + 4 \times 9.81 \times 1.2 = 17.18 + 47.09 = 64.27$.

$v_b = 8.02$ m s$^{-1}$.

(c) $T_b - mg = mv_b^2/r$.

$T_b = 0.40 \times 64.27/1.2 + 3.924 = 21.42 + 3.924 = 25.3$ N.

(d) $T_b - T_t = 25.3 - 1.8 = 23.5$ N. $6mg = 6 \times 0.40 \times 9.81 = 23.5$ N. $\checkmark$

<b>If you get this wrong, revise:</b>
[Vertical Circles -- Detailed Analysis](#5-vertical-circles----detailed-analysis)

</details>

<details>
<summary>Problem 12</summary>
A conical pendulum has a string of length $2.0$ m and the bob has mass $0.50$ kg. The bob moves in a
horizontal circle of radius $1.0$ m. Find: (a) the angle the string makes with the vertical, (b) the
tension, (c) the period, (d) the linear speed of the bob.

**Answer.** (a) $\sin\alpha = r/L = 1.0/2.0 = 0.50$, so $\alpha = 30.0^\circ$.

(b) $T = mg/\cos\alpha = 0.50 \times 9.81/\cos 30° = 4.905/0.866 = 5.66$ N.

(c)
$T_{\mathrm{period}} = 2\pi\sqrt{L\cos\alpha/g} = 2\pi\sqrt{2.0 \times 0.866/9.81} = 2\pi\sqrt{0.1766} = 2.64$
s.

(d) $v = 2\pi r/T_{\mathrm{period}} = 2\pi \times 1.0/2.64 = 2.38$ m s$^{-1}$.

<b>If you get this wrong, revise:</b>
[Conical Pendulum -- Extended Analysis](#6-conical-pendulum----extended-analysis)

</details>

<details>
<summary>Problem 13</summary>
A car of mass $800$ kg travels over a humpback bridge of radius of curvature $20$ m. At what speed
would the car lose contact with the road at the top of the bridge?

**Answer.** The car loses contact when the normal reaction is zero. At the top of the bridge:

$mg - N = mv^2/r$.

Setting $N = 0$: $mg = mv^2/r$, so $v = \sqrt{gr} = \sqrt{9.81 \times 20} = \sqrt{196.2} = 14.0$ m
s$^{-1}$.

<b>If you get this wrong, revise:</b>
[Vertical Circles -- Detailed Analysis](#5-vertical-circles----detailed-analysis)

</details>

<details>
<summary>Problem 14</summary>
A bead slides without friction on a vertical circular wire of radius $0.50$ m. If it is given just
enough speed at the lowest point to reach the highest point, what is its speed: (a) at the highest
point, (b) when the radius to the bead makes an angle of $60^\circ$ with the upward vertical?

**Answer.** "Just enough to reach the highest point" means the speed at the top is zero (for a
wire/rod, unlike a string, there is no minimum speed requirement since the wire can provide a normal
force in either direction).

(a) $v_{\mathrm{top}} = 0$.

By energy conservation: $\tfrac{1}{2}mv_b^2 = mg(2r) + 0$.

$v_b = \sqrt{4gr} = \sqrt{4 \times 9.81 \times 0.50} = \sqrt{19.62} = 4.43$ m s$^{-1}$.

(b) At angle $\theta = 60^\circ$ from the upward vertical, the height above the bottom is
$r + r\cos 60° = r + r/2 = 3r/2 = 0.75$ m.

$\tfrac{1}{2}mv^2 = \tfrac{1}{2}mv_b^2 - mg \times 0.75$.

$v^2 = v_b^2 - 2g \times 0.75 = 19.62 - 14.72 = 4.90$.

$v = 2.21$ m s$^{-1}$.

<b>If you get this wrong, revise:</b>
[Vertical Circles -- Detailed Analysis](#5-vertical-circles----detailed-analysis)

</details>

<details>
<summary>Problem 15</summary>
Two identical conical pendulums have the same string length $L$ but different angles $\alpha_1 = 20^\circ$
and $\alpha_2 = 40^\circ$. Show that the pendulum with the larger angle has the shorter period, and find
the ratio of their periods.

**Answer.**
$T_1/T_2 = \sqrt{\cos\alpha_1/\cos\alpha_2} = \sqrt{\cos 20°/\cos 40°}
= \sqrt{0.9397/0.7660} = \sqrt{1.227} = 1.108$.

Since $T_1/T_2 \gt 1$, $T_1 \gt T_2$: the pendulum at the larger angle ($40^\circ$) has the shorter
period, as expected.

The ratio is $T_1:T_2 = 1.108:1$, or equivalently $T_2/T_1 = 0.902$.

<b>If you get this wrong, revise:</b>
[Conical Pendulum -- Extended Analysis](#6-conical-pendulum----extended-analysis)

</details>

<details>
<summary>Problem 16</summary>
A small sphere of mass $m$ is attached to a light rigid rod of length $r$ (rather than a string) and
whirled in a vertical circle. Explain why the rod can maintain circular motion even when the sphere
is at rest at the top, and find the force exerted by the rod at the top and bottom when the sphere
has the minimum possible speed at the top.

**Answer.** Unlike a string (which can only pull), a rod can both push and pull. At the top of the
circle, if the speed is zero, gravity provides more centripetal acceleration than needed
($g \gt v^2/r = 0$), so the rod must push outward (exert a compressive normal force) to reduce the
net inward force to zero.

At the top with $v = 0$: $mg - N = mv^2/r = 0$, so $N = mg$ (rod pushes outward with force $mg$).

At the bottom, by energy conservation: $v_b^2 = 0 + 4gr = 4gr$, so $v_b = 2\sqrt{gr}$.

$T - mg = mv_b^2/r = 4mg$, so $T = 5mg$ (rod pulls inward with force $5mg$).

<b>If you get this wrong, revise:</b>
[Vertical Circles -- Detailed Analysis](#5-vertical-circles----detailed-analysis)

</details>
