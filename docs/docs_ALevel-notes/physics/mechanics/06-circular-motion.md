---
title: Circular Motion
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
formulae. CIE explicitly states that angular velocity must be in rad s$^{-1}$. :::

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
the primary derivation required; calculus is useful for STEP/matriculation preparation. :::

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
force(s) providing the centripetal acceleration. :::

### Intuition: Circular Motion is NOT Equilibrium

A particle in uniform circular motion is accelerating (towards the centre) even though its speed is
constant. The velocity vector is changing _direction_. There is always a net inward force. If you
cut the string, the particle does **not** fly radially outward — it moves tangentially (Newton's
first law).

:::warning Common Pitfall **"Centrifugal force" is not a real force.** In a rotating reference
frame, objects appear to be pushed outward, but this is a pseudo-force (fictitious force) arising
because the frame itself is accelerating. In an inertial (laboratory) frame, no outward force
exists. AQA and Edexcel may ask you to explain the difference; OCR (A) has featured this in
multiple-choice questions. :::

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

**Example.** A conical pendulum with $L = 1.0$ m and $\alpha = 30°$ has period
$T = 2\pi\sqrt{1.0 \times \cos 30°/9.81} = 2\pi\sqrt{0.0883} = 1.86$ s.

:::info Board Coverage AQA: Conical pendulum appears in Paper 1. Edexcel: Covered in CP2, typically
as a multi-step calculation. OCR (A): Appears in Paper 2 with derivations required. CIE: Appears in
P2; may be combined with energy considerations. :::

### Banked Curves

A road is banked at angle $\theta$ so that a vehicle travelling at speed $v$ can negotiate the curve
without friction.

Resolving vertically: $N\cos\theta = mg$ ... (i)

Resolving horizontally: $N\sin\theta = \frac{mv^2}{r}$ ... (ii)

Dividing (ii) by (i):

$$\boxed{\tan\theta = \frac{v^2}{rg}}$$

$$\boxed{v_{\text{optimum}} = \sqrt{rg\tan\theta}}$$

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

**Real-world example.** Motorways are banked at about $2$--$3°$ for drainage and slight curve
assistance. At higher angles, velodromes use banking up to $45°$ so cyclists can maintain speed
through tight turns. The normal reaction alone provides the centripetal force at the design speed.

:::info Board Coverage AQA: Banked curves without friction are standard; friction on banked curves
is extension material. Edexcel: Both frictionless and friction cases may appear in CP2. OCR (A):
Frictionless derivation is core; friction is stretch/challenge. CIE: Frictionless is required;
friction on banked curves occasionally appears in P2 as a harder question. :::

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

$$\frac{1}{2}mv_{\text{bottom}}^2 = \frac{1}{2}mv_{\text{top}}^2 + mg(2r)$$

$$v_{\text{bottom}}^2 = v_{\text{top}}^2 + 4gr$$

For the minimum speed at the top ($v_{\text{top}} = \sqrt{gr}$):

$$v_{\text{bottom}}^2 = gr + 4gr = 5gr \implies v_{\text{bottom}} = \sqrt{5gr}$$

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

A car of mass $1200$ kg travels at $15$ m s$^{-1}$ around a circular bend of radius $50$ m.
Calculate the centripetal force required.

**Answer.** $F_c = mv^2/r = 1200 \times 225/50 = 5400$ N.

<b>If you get this wrong, revise:</b> [Centripetal Force](#3-centripetal-force)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A conical pendulum has a string of length $1.5$ m and the bob moves in a horizontal circle of radius
$0.90$ m with a period of $1.8$ s. Find the angle the string makes with the vertical and the
tension.

**Answer.** $\cos\alpha = \sqrt{1 - (0.9/1.5)^2} = \sqrt{1 - 0.36} = \sqrt{0.64} = 0.80$.
$\alpha = 36.9°$.

$\omega = 2\pi/T = 2\pi/1.8 = 3.49$ rad s$^{-1}$. $v = \omega r = 3.49 \times 0.90 = 3.14$ m
s$^{-1}$.

$T\sin\alpha = mv^2/r = m \times 3.14^2/0.90 = 10.96m$.
$T = 10.96m/\sin 36.9° = 10.96m/0.60 = 18.3m$ N.

<b>If you get this wrong, revise:</b>
[Horizontal Circle: Conical Pendulum](#horizontal-circle-conical-pendulum)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A curve of radius $80$ m is banked at $15°$. Calculate the optimum speed for the curve.

**Answer.**
$v = \sqrt{rg\tan\theta} = \sqrt{80 \times 9.81 \times \tan 15°} = \sqrt{80 \times 9.81 \times 0.268} = \sqrt{210.3} = 14.5$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Banked Curves](#banked-curves)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A mass of $0.50$ kg on a string of length $1.0$ m is whirled in a vertical circle. What is the
minimum speed at the lowest point for the mass to complete the circle?

**Answer.** $v_{\text{bottom}} = \sqrt{5gr} = \sqrt{5 \times 9.81 \times 1.0} = \sqrt{49.05} = 7.00$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Vertical Circles](#vertical-circles)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A satellite orbits Earth at an altitude where the gravitational field strength is $4.5$ N kg$^{-1}$.
If the orbit radius is $8.0 \times 10^6$ m, find the orbital speed and period.

**Answer.**
$mg' = mv^2/r \implies v = \sqrt{g'r} = \sqrt{4.5 \times 8.0 \times 10^6} = \sqrt{3.6 \times 10^7} = 6000$
m s$^{-1}$.

$T = 2\pi r/v = 2\pi \times 8.0 \times 10^6/6000 = 8378$ s $\approx 2.3$ hours.

<b>If you get this wrong, revise:</b> [Centripetal Force](#3-centripetal-force)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

A car of mass $1000$ kg rounds a level (unbanked) curve of radius $40$ m at $12$ m s$^{-1}$. What
minimum coefficient of static friction is required?

**Answer.** $F_c = mv^2/r = 1000 \times 144/40 = 3600$ N. This must be provided by friction:
$\mu_s mg = \mu_s \times 9810 = 3600$. $\mu_s = 3600/9810 = 0.367$.

<b>If you get this wrong, revise:</b> [Centripetal Force](#3-centripetal-force)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A mass of $0.20$ kg is attached to a string of length $0.80$ m and whirled in a vertical circle. At
the highest point, the speed is $3.0$ m s$^{-1}$. Find: (a) the tension at the highest point, (b)
the speed at the lowest point, (c) the tension at the lowest point.

**Answer.** (a) $T + mg = mv^2/r$.
$T = 0.20 \times 9.0/0.80 - 0.20 \times 9.81 = 2.25 - 1.962 = 0.288$ N.

(b) $v_b^2 = v_t^2 + 4gr = 9 + 4 \times 9.81 \times 0.80 = 9 + 31.4 = 40.4$. $v_b = 6.36$ m
s$^{-1}$.

(c) $T - mg = mv_b^2/r$. $T = 0.20 \times 40.4/0.80 + 1.962 = 10.1 + 1.962 = 12.1$ N.

<b>If you get this wrong, revise:</b> [Vertical Circles](#vertical-circles)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

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

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

A cyclist of total mass $80$ kg rides around a banked track of radius $25$ m at $8.0$ m s$^{-1}$. If
the track is banked at $20°$, find the normal reaction and whether friction is needed (and in which
direction).

**Answer.** Optimum speed:
$v_{\text{opt}} = \sqrt{25 \times 9.81 \times \tan 20°} = \sqrt{25 \times 9.81 \times 0.364} = \sqrt{89.2} = 9.45$
m s$^{-1}$.

Since $8.0 < 9.45$, the cyclist is going too slowly, so friction must act **up** the slope to
prevent sliding down.

$N\cos 20° = mg + F\sin 20°$ and $N\sin 20° - F\cos 20° = mv^2/r$.

This requires solving two simultaneous equations. $N\sin 20° - F\cos 20° = 80 \times 64/25 = 204.8$
and $N\cos 20° + F\sin 20° = 784.8$.

<b>If you get this wrong, revise:</b> [Banked Curves](#banked-curves)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

Explain why a particle released from circular motion moves tangentially, not radially outward.

**Answer.** By Newton's first law, in the absence of a net force, a body continues in a straight
line at constant speed. When the centripetal force is removed (e.g., the string is cut), the only
velocity the particle has is tangential (perpendicular to the radius). There is no radial velocity
component — the particle was never moving radially outward during the circular motion; it was
accelerating radially inward. The apparent "outward fling" is an illusion of perspective from the
rotating frame.

<b>If you get this wrong, revise:</b>
[Intuition: Circular Motion is NOT Equilibrium](#intuition-circular-motion-is-not-equilibrium)

</p>
</details>

:::

:::

:::

:::

:::

:::
