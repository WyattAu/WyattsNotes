---
title: Circular Motion
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: further-circular-motion
sidebar_position: 2
---

## Circular Motion

Circular motion in further mathematics extends the basic treatment to include banked tracks, conical
pendulums, vertical circles with energy methods, and problems where the circular path constraints
determine unknown forces.

### Board Coverage

| Board      | Paper   | Notes                                       |
| ---------- | ------- | ------------------------------------------- |
| AQA        | Paper 2 | Limited coverage; horizontal circles mainly |
| Edexcel    | M2      | Full coverage including vertical circles    |
| OCR (A)    | Paper 2 | Horizontal and vertical circles             |
| CIE (9231) | M2      | Full coverage including vertical circles    |

:::info
Centripetal force is not a separate force — it is the resultant of the physical forces
(tension, friction, normal reaction, weight) directed towards the centre of the circle. Never
include "centripetal force" on a free body diagram.
:::

---

## 1. Angular Quantities

### 1.1 Definitions

**Definition.** The **angular displacement** $\theta$ is the angle swept by a radius vector,
measured in radians.

**Definition.** The **angular velocity** $\omega$ is the rate of change of angular displacement:

$$\boxed{\omega = \frac{d\theta}{dt}}$$

The SI unit is rad s$^{-1}$.

**Definition.** The **angular acceleration** $\alpha$ is the rate of change of angular velocity:

$$\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$$

### 1.2 Relationship with linear quantities

For a particle moving in a circle of radius $r$:

$$\boxed{v = \omega r}$$

$$\boxed{a_{\text{tangential}} = \alpha r}$$

### 1.3 Period and frequency

For uniform circular motion:

$$\boxed{\omega = \frac{2\pi}{T} = 2\pi f}$$

---

## 2. Centripetal Acceleration

### Proof from differentiation of position vector

### Proof

The position vector of a particle in a circle of radius $r$ in the $xy$-plane:

$$\mathbf{r}(t) = r\cos(\omega t)\,\mathbf{i} + r\sin(\omega t)\,\mathbf{j}$$

Velocity (first derivative):

$$\mathbf{v}(t) = \frac{d\mathbf{r}}{dt} = -r\omega\sin(\omega t)\,\mathbf{i} + r\omega\cos(\omega t)\,\mathbf{j}$$

Check: $|\mathbf{v}| = r\omega\sqrt{\sin^2(\omega t) + \cos^2(\omega t)} = r\omega = v$.
$\checkmark$

Acceleration (second derivative):

$$\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = -r\omega^2\cos(\omega t)\,\mathbf{i} - r\omega^2\sin(\omega t)\,\mathbf{j} = -\omega^2\mathbf{r}(t)$$

$$\boxed{\mathbf{a} = -\omega^2 r\,\hat{\mathbf{r}}}$$

Magnitude: $a = \omega^2 r = \dfrac{v^2}{r}$, directed radially inward. $\blacksquare$

### 2.1 Centripetal force

By Newton's second law:

$$\boxed{F_c = \frac{mv^2}{r} = m\omega^2 r}$$

---

## 3. Motion in Horizontal Circles

### 3.1 Conical pendulum

A mass $m$ on a string of length $L$ moves in a horizontal circle of radius $r = L\sin\alpha$, where
$\alpha$ is the angle the string makes with the vertical.

**Vertical equilibrium:** $T\cos\alpha = mg$ ... (i)

**Horizontal (centripetal):** $T\sin\alpha = \dfrac{mv^2}{r}$ ... (ii)

Dividing (ii) by (i):

$$\boxed{\tan\alpha = \frac{v^2}{rg} = \frac{\omega^2 r}{g}}$$

Since $r = L\sin\alpha$ and $\omega = \dfrac{v}{r}$:

$$\omega^2 = \frac{g\tan\alpha}{L\sin\alpha} = \frac{g}{L\cos\alpha}$$

$$\boxed{T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L\cos\alpha}{g}}}$$

### 3.2 Banked tracks

A vehicle on a banked track of angle $\theta$ and radius $r$.

**Resolving vertically:** $N\cos\theta = mg$ ... (i)

**Resolving horizontally (centripetal):** $N\sin\theta = \dfrac{mv^2}{r}$ ... (ii)

Dividing (ii) by (i):

$$\boxed{\tan\theta = \frac{v^2}{rg}}$$

$$\boxed{v_{\text{optimum}} = \sqrt{rg\tan\theta}}$$

At the optimum speed, no friction is needed. If $v > v_{\text{opt}}$, friction acts down the slope.
If $v < v_{\text{opt}}$, friction acts up the slope.

### 3.3 Motion on the inside of a hollow sphere

A particle moves in a horizontal circle on the smooth inner surface of a sphere of radius $r$ at
height $h$ below the centre.

The radius of the circle is $a = \sqrt{r^2 - h^2}$.

**Normal reaction** $R$ acts radially outward. Resolving vertically: $R\cos\phi = mg$ where
$\sin\phi = a/r$.

**Horizontal:** $R\sin\phi = \dfrac{mv^2}{a}$.

$$\frac{v^2}{a} = \frac{R\sin\phi}{m} = \frac{g\sin\phi}{\cos\phi} = g\tan\phi = \frac{ga}{h}$$

---

## 4. Motion in Vertical Circles

### 4.1 General equations

Consider a mass $m$ on a string of length $r$ moving in a vertical circle. At angle $\theta$ from
the downward vertical:

**Along the string (towards centre):** $T - mg\cos\theta = \dfrac{mv^2}{r}$

**At the top** ($\theta = 180°$): both $T$ and $mg$ act towards centre:

$$T + mg = \frac{mv^2}{r}$$

**At the bottom** ($\theta = 0°$): centripetal direction is upward:

$$T - mg = \frac{mv^2}{r}$$

### 4.2 Proof of minimum speed at the top

### Proof

For the string to remain taut at the top: $T \geq 0$.

$$T + mg = \frac{mv^2}{r} \implies T = \frac{mv^2}{r} - mg \geq 0$$

$$\frac{mv^2}{r} \geq mg \implies v^2 \geq gr \implies \boxed{v_{\min} = \sqrt{gr}}$$

At this minimum speed, $T = 0$ — the weight alone provides the centripetal force. $\blacksquare$

### 4.3 Energy approach

Using conservation of mechanical energy between two points on a vertical circle:

$$\frac{1}{2}mv_1^2 + mgh_1 = \frac{1}{2}mv_2^2 + mgh_2$$

where $h$ is the height above a reference level.

**Between top and bottom** (height difference $2r$):

$$\frac{1}{2}mv_{\text{bottom}}^2 = \frac{1}{2}mv_{\text{top}}^2 + mg(2r)$$

$$v_{\text{bottom}}^2 = v_{\text{top}}^2 + 4gr$$

For minimum complete circle ($v_{\text{top}} = \sqrt{gr}$):

$$v_{\text{bottom}}^2 = gr + 4gr = 5gr \implies \boxed{v_{\text{bottom}} = \sqrt{5gr}}$$

### 4.4 Tension at any point

Using energy conservation, the speed at angle $\theta$ from the bottom is:

$$\frac{1}{2}mv^2 = \frac{1}{2}mv_0^2 - mgr(1-\cos\theta)$$

where $v_0$ is the speed at the bottom.

$$v^2 = v_0^2 - 2gr(1-\cos\theta)$$

Tension at angle $\theta$ (measuring from the bottom):

$$T = \frac{mv^2}{r} + mg\cos\theta = \frac{m}{r}[v_0^2 - 2gr(1-\cos\theta)] + mg\cos\theta$$

$$T = \frac{mv_0^2}{r} - 2mg + 2mg\cos\theta + mg\cos\theta = \frac{mv_0^2}{r} - 2mg + 3mg\cos\theta$$

### 4.5 Particle on the outside of a sphere

A particle slides on the smooth outer surface of a sphere of radius $r$. It leaves the surface when
the normal reaction $R = 0$.

At angle $\theta$ from the top: $R + mg\cos\theta = \dfrac{mv^2}{r}$.

Energy: $\dfrac{1}{2}mv^2 = mgr(1-\cos\theta)$ (from rest at the top).

When $R = 0$: $mg\cos\theta = \dfrac{mv^2}{r} = \dfrac{2mg(1-\cos\theta)}{r}$.

$g\cos\theta = 2g(1-\cos\theta) \implies \cos\theta = 2 - 2\cos\theta \implies 3\cos\theta = 2$.

$$\boxed{\theta = \arccos\!\left(\frac{2}{3}\right) \approx 48.2°}$$

---

## 5. Non-uniform Circular Motion

When the speed varies, there is both centripetal and tangential acceleration:

$$a_c = \frac{v^2}{r} \quad \text{(radially inward)}, \qquad a_t = \frac{dv}{dt} \quad \text{(tangential)}$$

The total acceleration has magnitude:

$$a = \sqrt{a_c^2 + a_t^2}$$

The resultant force has a radial component providing $a_c$ and a tangential component providing
$a_t$.

---

## Problems

<details>
<summary>Problem 1</summary>
A particle of mass $0.5\,\text{kg}$ is attached to a string of length $1.2\,\text{m}$ and whirled in a horizontal circle at $3\,\text{m s}^{-1}$. Find the tension and the angle the string makes with the vertical.
</details>

<details>
<summary>Solution 1</summary>
$T\cos\alpha = mg = 0.5 \times 9.8 = 4.9$ ... (i)

$T\sin\alpha = \dfrac{mv^2}{r} = \dfrac{0.5 \times 9}{r}$ ... (ii)

$r = 1.2\sin\alpha$. From (ii): $T\sin\alpha = \dfrac{4.5}{1.2\sin\alpha}$.

$T\sin^2\alpha = \dfrac{4.5}{1.2} = 3.75$.

From (i): $T = \dfrac{4.9}{\cos\alpha}$.

$\dfrac{4.9\sin^2\alpha}{\cos\alpha} = 3.75 \implies \dfrac{4.9(1-\cos^2\alpha)}{\cos\alpha} = 3.75$.

$4.9\cos^2\alpha + 3.75\cos\alpha - 4.9 = 0$.

$\cos\alpha = \dfrac{-3.75 + \sqrt{14.0625 + 96.04}}{9.8} = \dfrac{-3.75 + 10.48}{9.8} \approx 0.687$.

$\alpha \approx 46.6°$. $r = 1.2\sin 46.6° \approx 0.873\,\text{m}$.
$T = 4.9/0.687 \approx 7.13\,\text{N}$.

**If you get this wrong, revise:** [Conical pendulum](#31-conical-pendulum) — Section 3.1.

</details>

<details>
<summary>Problem 2</summary>
Derive the formula for centripetal acceleration $a = v^2/r$ by differentiating the position vector $\mathbf{r}(t) = r\cos(\omega t)\,\mathbf{i} + r\sin(\omega t)\,\mathbf{j}$.
</details>

<details>
<summary>Solution 2</summary>
$\mathbf{v}(t) = -r\omega\sin(\omega t)\,\mathbf{i} + r\omega\cos(\omega t)\,\mathbf{j}$.

$\mathbf{a}(t) = -r\omega^2\cos(\omega t)\,\mathbf{i} - r\omega^2\sin(\omega t)\,\mathbf{j} = -\omega^2\mathbf{r}(t)$.

$|\mathbf{a}| = \omega^2 r = \dfrac{v^2}{r}$, directed radially inward. $\blacksquare$

**If you get this wrong, revise:**
[Proof from differentiation](#proof-from-differentiation-of-position-vector) — Section 2.

</details>

<details>
<summary>Problem 3</summary>
A curve of radius $60\,\text{m}$ is banked at $20°$. Find the optimum speed and the normal reaction for a car of mass $1000\,\text{kg}$ at this speed.
</details>

<details>
<summary>Solution 3</summary>
$v_{\text{opt}} = \sqrt{rg\tan\theta} = \sqrt{60 \times 9.8 \times \tan 20°} = \sqrt{60 \times 9.8 \times 0.3640} = \sqrt{214.0} \approx 14.6\,\text{m s}^{-1}$.

$N = \dfrac{mg}{\cos\theta} = \dfrac{1000 \times 9.8}{\cos 20°} = \dfrac{9800}{0.9397} \approx 10\,430\,\text{N}$.

**If you get this wrong, revise:** [Banked tracks](#32-banked-tracks) — Section 3.2.

</details>

<details>
<summary>Problem 4</summary>
A mass of $0.3\,\text{kg}$ on a string of length $0.8\,\text{m}$ is whirled in a vertical circle. At the highest point, the speed is $4\,\text{m s}^{-1}$. Find the tension at the highest point, the speed at the lowest point, and the tension at the lowest point.
</details>

<details>
<summary>Solution 4</summary>
At the top: $T + mg = \dfrac{mv^2}{r} \implies T = \dfrac{0.3 \times 16}{0.8} - 0.3 \times 9.8 = 6 - 2.94 = 3.06\,\text{N}$.

Energy conservation:
$\dfrac{1}{2}mv_b^2 = \dfrac{1}{2}mv_t^2 + mg(2r) = \dfrac{1}{2}(0.3)(16) + 0.3(9.8)(1.6)$

$= 2.4 + 4.704 = 7.104$.
$v_b = \sqrt{2 \times 7.104/0.3} = \sqrt{47.36} \approx 6.88\,\text{m s}^{-1}$.

At the bottom:
$T - mg = \dfrac{mv_b^2}{r} \implies T = \dfrac{0.3 \times 47.36}{0.8} + 2.94 = 17.76 + 2.94 = 20.7\,\text{N}$.

**If you get this wrong, revise:** [Motion in Vertical Circles](#4-motion-in-vertical-circles) —
Section 4.

</details>

<details>
<summary>Problem 5</summary>
Find the minimum speed at the lowest point for a particle on a string of length $r$ to complete a vertical circle.
</details>

<details>
<summary>Solution 5</summary>
At the top: $T \geq 0 \implies \dfrac{mv_t^2}{r} \geq mg \implies v_t \geq \sqrt{gr}$.

Energy: $\dfrac{1}{2}mv_b^2 = \dfrac{1}{2}mv_t^2 + mg(2r)$.

For minimum: $v_b^2 = gr + 4gr = 5gr$.

$$\boxed{v_{\min} = \sqrt{5gr}} \quad \blacksquare$$

**If you get this wrong, revise:**
[Proof of minimum speed at the top](#42-proof-of-minimum-speed-at-the-top) — Section 4.2.

</details>

<details>
<summary>Problem 6</summary>
A particle starts from rest at the top of a smooth sphere of radius $1.5\,\text{m}$. At what angle does it leave the surface?
</details>

<details>
<summary>Solution 6</summary>
The particle leaves when $R = 0$, which occurs at $\theta = \arccos(2/3) \approx 48.2°$ from the top.

At this point: $\dfrac{1}{2}mv^2 = mgr(1-\cos\theta) = mg(1.5)(1/3) = 0.5mg$.

$v = \sqrt{g} \approx 3.13\,\text{m s}^{-1}$.

**If you get this wrong, revise:**
[Particle on the outside of a sphere](#45-particle-on-the-outside-of-a-sphere) — Section 4.5.

</details>

<details>
<summary>Problem 7</summary>
A car of mass $1200\,\text{kg}$ travels at $18\,\text{m s}^{-1}$ around a banked curve of radius $50\,\text{m}$ banked at $25°$. Determine whether friction acts up or down the slope, and find the friction force.
</details>

<details>
<summary>Solution 7</summary>
$v_{\text{opt}} = \sqrt{50 \times 9.8 \times \tan 25°} = \sqrt{50 \times 9.8 \times 0.4663} = \sqrt{228.5} \approx 15.1\,\text{m s}^{-1}$.

Since $18 > 15.1$, the car is going too fast, so friction acts **down** the slope.

$N\cos 25° - F\sin 25° = 1200 \times 9.8 = 11760$ ... (i)

$N\sin 25° + F\cos 25° = \dfrac{1200 \times 324}{50} = 7776$ ... (ii)

From (i): $N = \dfrac{11760 + F\sin 25°}{\cos 25°}$.

Substituting into (ii): $\dfrac{(11760 + F\sin 25°)\sin 25°}{\cos 25°} + F\cos 25° = 7776$.

$11760\tan 25° + F\tan 25°\sin 25° + F\cos 25° = 7776$.

$5484 + F(0.1786 + 0.9063) = 7776 \implies 1.085F = 2292 \implies F \approx 2113\,\text{N}$.

**If you get this wrong, revise:** [Banked tracks](#32-banked-tracks) — Section 3.2.

</details>

<details>
<summary>Problem 8</summary>
A particle of mass $m$ is attached to a light rod (not a string) of length $r$ and moves in a vertical circle. What is the minimum speed at the lowest point for the particle to reach the highest point?
</details>

<details>
<summary>Solution 8</summary>
Unlike a string, a rod can support compression. The particle can reach the top with $v = 0$.

Energy: $\dfrac{1}{2}mv_b^2 = mg(2r) \implies v_b = \sqrt{4gr} = 2\sqrt{gr}$.

This is less than $\sqrt{5gr}$ (the string case) because the rod can push as well as pull.

**If you get this wrong, revise:** [Energy approach](#43-energy-approach) — Section 4.3.

</details>

<details>
<summary>Problem 9</summary>
A conical pendulum has period $2\,\text{s}$ and string length $1\,\text{m}$. Find the radius of the circle and the angle the string makes with the vertical.
</details>

<details>
<summary>Solution 9</summary>
$\omega = \dfrac{2\pi}{T} = \pi\,\text{rad s}^{-1}$.

From $\omega^2 = \dfrac{g}{L\cos\alpha}$:
$\pi^2 = \dfrac{9.8}{\cos\alpha} \implies \cos\alpha = \dfrac{9.8}{\pi^2} \approx 0.993$.

$\alpha \approx 6.6°$.

$r = L\sin\alpha = 1 \times \sin 6.6° \approx 0.115\,\text{m}$.

**If you get this wrong, revise:** [Conical pendulum](#31-conical-pendulum) — Section 3.1.

</details>

<details>
<summary>Problem 10</summary>
A bead of mass $0.1\,\text{kg}$ slides on a smooth vertical circular wire of radius $0.5\,\text{m}$. It is projected from the lowest point with speed $4\,\text{m s}^{-1}$. Find the speed and the reaction force when the bead is level with the centre of the circle.
</details>

<details>
<summary>Solution 10</summary>
Height gain to the centre: $r = 0.5\,\text{m}$.

Energy: $\dfrac{1}{2}(0.1)v^2 = \dfrac{1}{2}(0.1)(16) - 0.1(9.8)(0.5) = 0.8 - 0.49 = 0.31$.

$v = \sqrt{6.2} \approx 2.49\,\text{m s}^{-1}$.

At the midpoint (horizontal), the reaction $R$ acts horizontally (towards the centre) since the
weight acts vertically:

$R = \dfrac{mv^2}{r} = \dfrac{0.1 \times 6.2}{0.5} = 1.24\,\text{N}$.

Note: the weight is perpendicular to the radius at this point, so it does not contribute to the
centripetal force.

**If you get this wrong, revise:** [Motion in Vertical Circles](#4-motion-in-vertical-circles) —
Section 4.

</details>

:::
