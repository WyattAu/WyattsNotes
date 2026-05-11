---
title: Centres of Mass and Elastic Collisions
description:
  "A-Level Further Maths notes on Centres of Mass and Elastic Collisions: Board Coverage; 1. Centre of Mass of a Uniform Lamina; 1.1 Centre of mass by integration."
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: centres-of-mass-elastic-collisions
sidebar_position: 3
---

## Centres of Mass and Elastic Collisions

This topic covers two major areas of further mechanics: finding the centre of mass of laminas,
solids, and composite bodies, and analysing elastic and inelastic collisions between particles
including oblique impacts.

### Board Coverage

| Board      | Paper   | Notes                                                |
| ---------- | ------- | ---------------------------------------------------- |
| AQA        | Paper 2 | Centres of mass; elastic collisions in one dimension |
| Edexcel    | M2      | Full coverage including oblique impacts              |
| OCR (A)    | Paper 2 | Centres of mass; direct and oblique collisions       |
| CIE (9231) | M2      | Centres of mass covered; collisions in M2            |

<hr />

## 1. Centre of Mass of a Uniform Lamina

### 1.1 Centre of mass by integration

**Definition.** The _centre of mass_ of a lamina bounded by $y = f(x)$, $x = a$, $x = b$, and the
$x$-axis is the point $(\bar{x}, \bar{y})$ where:

$$\boxed{\bar{x} = \frac◆LB◆\displaystyle\int_a^b x \cdot f(x)\,dx◆RB◆◆LB◆\displaystyle\int_a^b f(x)\,dx◆RB◆}$$

$$\boxed{\bar{y} = \frac◆LB◆\displaystyle\int_a^b \frac{1}{2}[f(x)]^2\,dx◆RB◆◆LB◆\displaystyle\int_a^b f(x)\,dx◆RB◆}$$

The denominator is the total area of the lamina: $A = \displaystyle\int_a^b f(x)\,dx$.

### Proof of the centre of mass of a uniform triangular lamina

### Proof

Consider a triangle with vertices at $(0, 0)$, $(b, 0)$, and $(c, h)$.

The line from $(0, 0)$ to $(c, h)$ is $y = \dfrac{h}{c}\,x$ and the line from $(b, 0)$ to $(c, h)$
is $y = \dfrac{h}{c - b}(x - b)$.

For simplicity, take a right triangle with vertices $(0, 0)$, $(b, 0)$, $(0, h)$, where
$f(x) = h - \dfrac{h}{b}x = h\!\left(1 - \dfrac{x}{b}\right)$.

$$\bar{x} = \frac◆LB◆\displaystyle\int_0^b x \cdot h\!\left(1 - \frac{x}{b}\right)dx◆RB◆◆LB◆\displaystyle\int_0^b h\!\left(1 - \frac{x}{b}\right)dx◆RB◆$$

Numerator:
$\displaystyle h\int_0^b \left(x - \frac{x^2}{b}\right)dx = h\left[\frac{x^2}{2} - \frac{x^3}{3b}\right]_0^b = h\left(\frac{b^2}{2} - \frac{b^2}{3}\right) = \frac{hb^2}{6}$.

Denominator:
$\displaystyle h\int_0^b \left(1 - \frac{x}{b}\right)dx = h\left[x - \frac{x^2}{2b}\right]_0^b = \frac{hb}{2}$.

$$\bar{x} = \frac{hb^2/6}{hb/2} = \frac{b}{3}$$

$$\bar{y} = \frac◆LB◆\displaystyle\int_0^b \frac{1}{2}h^2\!\left(1 - \frac{x}{b}\right)^2 dx◆RB◆◆LB◆hb/2◆RB◆ = \frac◆LB◆\dfrac{h^2}{2}\displaystyle\int_0^b \left(1 - \frac{2x}{b} + \frac{x^2}{b^2}\right)dx◆RB◆◆LB◆hb/2◆RB◆$$

$$= \frac◆LB◆\dfrac{h^2}{2}\!\left[b - b + \dfrac{b}{3}\right]◆RB◆◆LB◆hb/2◆RB◆ = \frac{h^2 b / 6}{hb/2} = \frac{h}{3}$$

For a general triangle with vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:

$$\boxed{\bar{x} = \frac{x_1 + x_2 + x_3}{3}, \qquad \bar{y} = \frac{y_1 + y_2 + y_3}{3}}$$

$\square$

<hr />

## 2. Centre of Mass of Standard Shapes

### 2.1 Uniform triangular lamina

$$\boxed{\bar{x} = \frac{x_1 + x_2 + x_3}{3}, \qquad \bar{y} = \frac{y_1 + y_2 + y_3}{3}}$$

For a triangle of base $b$ and height $h$ with base on the $x$-axis: $\bar{y} = \dfrac{h}{3}$.

### 2.2 Semicircular lamina

For a uniform semicircular lamina of radius $r$:

$$\boxed{\bar{y} = \frac◆LB◆4r◆RB◆◆LB◆3\pi◆RB◆}$$

The centre of mass lies on the axis of symmetry, a distance $\dfrac◆LB◆4r◆RB◆◆LB◆3\pi◆RB◆$ from the diameter.

### 2.3 Circular sector

For a sector of a circle of radius $r$ with half-angle $\alpha$ (so the sector subtends $2\alpha$ at
the centre):

$$\boxed{\bar{x} = \frac◆LB◆2r\sin\alpha◆RB◆◆LB◆3\alpha◆RB◆}$$

This lies on the axis of symmetry. For a semicircle ($\alpha = \pi/2$):
$\bar{x} = \dfrac◆LB◆2r◆RB◆◆LB◆3(\pi/2)◆RB◆ = \dfrac◆LB◆4r◆RB◆◆LB◆3\pi◆RB◆$, consistent with Section 2.2.

### 2.4 Circular arc

For a uniform circular arc of radius $r$ subtending angle $2\alpha$ at the centre:

$$\boxed{\bar{x} = \frac◆LB◆r\sin\alpha◆RB◆◆LB◆\alpha◆RB◆}$$

<hr />

## 3. Centre of Mass of Composite Bodies

**Definition.** For a body composed of $n$ parts with masses $m_1, m_2, \ldots, m_n$ and centres of
mass at $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$:

$$\boxed{\bar{x} = \frac◆LB◆\displaystyle\sum_{i=1}^{n} m_i x_i◆RB◆◆LB◆\displaystyle\sum_{i=1}^{n} m_i◆RB◆}$$

$$\boxed{\bar{y} = \frac◆LB◆\displaystyle\sum_{i=1}^{n} m_i y_i◆RB◆◆LB◆\displaystyle\sum_{i=1}^{n} m_i◆RB◆}$$

For a composite body, _negative masses_ can be used for holes or removed sections.

<details>
<summary>Worked Example: Composite lamina</summary>

A uniform lamina consists of a square of side $4a$ with a semicircle of radius $2a$ removed from one
edge. Find the centre of mass of the remaining lamina.

The square has area $(4a)^2 = 16a^2$ and centre of mass at $(2a, 2a)$.

The semicircle has area $\dfrac{1}{2}\pi(2a)^2 = 2\pi a^2$ and centre of mass at
$(2a, 2a + \dfrac◆LB◆4(2a)◆RB◆◆LB◆3\pi◆RB◆) = (2a, 2a + \dfrac◆LB◆8a◆RB◆◆LB◆3\pi◆RB◆)$, assuming the semicircle is removed
from the top edge.

Using negative mass for the semicircle:

$$\bar{y} = \frac◆LB◆16a^2 \times 2a - 2\pi a^2 \times (2a + 8a/(3\pi))◆RB◆◆LB◆16a^2 - 2\pi a^2◆RB◆$$

$$= \frac◆LB◆32a^3 - 4\pi a^3 - 16a^3/3◆RB◆◆LB◆a^2(16 - 2\pi)◆RB◆ = \frac◆LB◆a(96 - 12\pi - 16)/3◆RB◆◆LB◆16 - 2\pi◆RB◆ = \frac◆LB◆a(80 - 12\pi)◆RB◆◆LB◆3(16 - 2\pi)◆RB◆$$

$$= \frac◆LB◆a(80 - 12\pi)◆RB◆◆LB◆48 - 6\pi◆RB◆ = \frac◆LB◆a(40 - 6\pi)◆RB◆◆LB◆24 - 3\pi◆RB◆$$

</details>

<hr />

## 4. Centre of Mass of Frameworks

### 4.1 Uniform wire frameworks

A framework is made of uniform wires (rods). Each rod has its centre of mass at its midpoint. The
total mass is proportional to the total length.

$$\boxed{\bar{x} = \frac◆LB◆\displaystyle\sum m_i x_i◆RB◆◆LB◆\displaystyle\sum m_i◆RB◆ = \frac◆LB◆\displaystyle\sum \ell_i x_i◆RB◆◆LB◆\displaystyle\sum \ell_i◆RB◆}$$

where $\ell_i$ is the length of the $i$-th rod and $x_i$ is the $x$-coordinate of its midpoint.

### 4.2 Hanging bodies

When a lamina is freely suspended from a point, it hangs with its centre of mass directly below the
point of suspension. This means:

- The line of action of the weight passes through the point of suspension.
- The lamina is in equilibrium when the point of suspension is vertically above the centre of mass.

### 4.3 Equilibrium of a suspended body

For a body suspended from a point $P$ to hang in equilibrium, the centre of mass $G$ must be
directly below $P$. If suspended from a second point $Q$, $G$ must be directly below $Q$. The
intersection of the two vertical lines through $P$ and $Q$ gives $G$.

<hr />

## 5. Elastic Collisions

### 5.1 Impulse and momentum

**Definition.** The _impulse_ $J$ delivered by a force $F$ acting for a time $\Delta t$ is:

$$\boxed{J = F \cdot \Delta t = \Delta p = m(v - u)}$$

where $u$ is the initial velocity and $v$ is the final velocity.

### 5.2 Newton's law of restitution

**Definition.** The _coefficient of restitution_ $e$ for a collision between two bodies is:

$$\boxed{e = -\frac{v_1 - v_2}{u_1 - u_2}}$$

where $u_1, u_2$ are the velocities before collision and $v_1, v_2$ are the velocities after
collision, with all velocities measured in the same direction.

- $e = 1$: perfectly elastic collision (kinetic energy conserved)
- $e = 0$: perfectly inelastic collision (bodies coalesce)
- $0 < e < 1$: inelastic collision

### 5.3 Direct collision of two particles

For two particles of masses $m_1$ and $m_2$ with velocities $u_1$ and $u_2$:

**Conservation of momentum:**

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

**Newton's experimental law:**

$$v_2 - v_1 = e(u_1 - u_2)$$

Solving simultaneously:

$$v_1 = \frac{m_1 u_1 + m_2 u_2 - m_2 e(u_1 - u_2)}{m_1 + m_2}$$

$$v_2 = \frac{m_1 u_1 + m_2 u_2 + m_1 e(u_1 - u_2)}{m_1 + m_2}$$

<details>
<summary>Worked Example: Direct elastic collision</summary>

A particle of mass $2\,\mathrm{kg}$ moving at $5\,\mathrm{m s}^{-1}$ collides directly with a
stationary particle of mass $3\,\mathrm{kg}$. The coefficient of restitution is $e = 0.6$. Find the
velocities after collision.

Momentum: $2(5) + 3(0) = 2v_1 + 3v_2 \implies 2v_1 + 3v_2 = 10$ ... (i)

Restitution: $v_2 - v_1 = 0.6(5 - 0) = 3 \implies v_2 = v_1 + 3$ ... (ii)

Substituting (ii) into (i):
$2v_1 + 3(v_1 + 3) = 10 \implies 5v_1 + 9 = 10 \implies v_1 = 0.2\,\mathrm{m s}^{-1}$.

$v_2 = 0.2 + 3 = 3.2\,\mathrm{m s}^{-1}$.

</details>

<hr />

## 6. Kinetic Energy Loss in Collisions

### 6.1 Derivation of the energy loss formula

### Proof of the elastic energy loss formula

Consider two particles of masses $m_1$ and $m_2$ with velocities $u_1$ and $u_2$ colliding with
coefficient of restitution $e$.

The loss in kinetic energy is:

$$\Delta KE = \left(\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2\right) - \left(\frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2\right)$$

Using the solutions for $v_1$ and $v_2$ and defining the reduced mass
$\mu = \dfrac{m_1 m_2}{m_1 + m_2}$:

$$\boxed{\Delta KE = \frac{1}{2}\mu(u_1 - u_2)^2(1 - e^2)}$$

where $\mu = \dfrac{m_1 m_2}{m_1 + m_2}$ is the _reduced mass_.

When $e = 1$: $\Delta KE = 0$ (perfectly elastic, no energy loss). ✓ When $e = 0$:
$\Delta KE = \dfrac{1}{2}\mu(u_1 - u_2)^2$ (maximum energy loss for coalescence). ✓

$\square$

<hr />

## 7. Oblique Impacts

### 7.1 Sphere hitting a smooth wall

When a smooth sphere hits a smooth wall, the component of velocity parallel to the wall is
unchanged, and the component perpendicular to the wall is reversed and reduced by the coefficient of
restitution.

If the wall is along the $y$-axis and the sphere approaches with velocity $(u_x, u_y)$:

$$v_x = -e \cdot u_x, \qquad v_y = u_y$$

The angle of incidence $\alpha$ and angle of reflection $\beta$ satisfy:

$$\tan\beta = \frac◆LB◆u_y◆RB◆◆LB◆e \cdot u_x◆RB◆ = \frac◆LB◆\tan\alpha◆RB◆◆LB◆e◆RB◆$$

Since $e \leq 1$, we have $\tan\beta \geq \tan\alpha$, so the angle of reflection is greater than or
equal to the angle of incidence.

### 7.2 Two spheres in oblique collision

When two smooth spheres collide obliquely, we resolve velocities into the normal direction (along
the line of centres) and the tangential direction (perpendicular to the line of centres).

- **Tangential components** are unchanged (smooth spheres).
- **Normal components** obey conservation of momentum and Newton's restitution law.

**Steps:**

1. Resolve the velocities of both spheres into normal and tangential components.
2. Apply conservation of momentum in the normal direction.
3. Apply Newton's restitution law in the normal direction.
4. Combine to find the final velocities.

<details>
<summary>Worked Example: Oblique collision with a wall</summary>

A sphere hits a smooth vertical wall with velocity $(6, -4)\,\mathrm{m s}^{-1}$. The coefficient of
restitution is $e = 0.5$. Find the velocity after impact and the angle of reflection.

The wall is vertical (along the $y$-axis), so the $x$-component is normal to the wall.

$v_x = -e \times 6 = -3\,\mathrm{m s}^{-1}$ (reversed and reduced).

$v_y = -4\,\mathrm{m s}^{-1}$ (unchanged).

Velocity after impact: $(-3, -4)\,\mathrm{m s}^{-1}$.

Speed: $\sqrt{9 + 16} = 5\,\mathrm{m s}^{-1}$.

Angle of incidence: $\alpha = \arctan(4/6) = \arctan(2/3)$.

Angle of reflection: $\beta = \arctan(4/3)$.

Note: $\tan\beta = 4/3 = \dfrac◆LB◆\tan\alpha◆RB◆◆LB◆e◆RB◆ = \dfrac{2/3}{0.5} = 4/3$. ✓

</details>

<hr />

## 8. Summary of Key Results

$$\boxed{\bar{x} = \frac◆LB◆\displaystyle\sum m_i x_i◆RB◆◆LB◆\displaystyle\sum m_i◆RB◆, \qquad \bar{y} = \frac◆LB◆\displaystyle\sum m_i y_i◆RB◆◆LB◆\displaystyle\sum m_i◆RB◆}$$

$$\boxed{\bar{y}_{\mathrm{semicircle}} = \frac◆LB◆4r◆RB◆◆LB◆3\pi◆RB◆, \qquad \bar{x}_{\mathrm{sector}} = \frac◆LB◆2r\sin\alpha◆RB◆◆LB◆3\alpha◆RB◆}$$

$$\boxed{e = -\frac{v_1 - v_2}{u_1 - u_2}}$$

$$\boxed{\Delta KE = \frac{1}{2}\mu(u_1 - u_2)^2(1 - e^2), \quad \mu = \frac{m_1 m_2}{m_1 + m_2}}$$

$$\boxed{\mathrm{Oblique wall impact: } v_{\mathrm{normal}} = -e \cdot u_{\mathrm{normal}}, \quad v_{\mathrm{tangential}} = u_{\mathrm{tangential}}}$$

<hr />

## Problems

<details>
<summary>Problem 1</summary>
A uniform triangular lamina has vertices at $(0, 0)$, $(6, 0)$, and $(2, 4)$. Find the coordinates of the centre of mass.
</details>

<details>
<summary>Solution 1</summary>
$\bar{x} = \dfrac{0 + 6 + 2}{3} = \dfrac{8}{3}$.

$\bar{y} = \dfrac{0 + 0 + 4}{3} = \dfrac{4}{3}$.

Centre of mass: $\left(\dfrac{8}{3}, \dfrac{4}{3}\right)$.

**If you get this wrong, revise:** [Uniform triangular lamina](#21-uniform-triangular-lamina) —
Section 2.1.

</details>

<details>
<summary>Problem 2</summary>
A particle of mass $3\,\mathrm{kg}$ moving at $8\,\mathrm{m s}^{-1}$ collides directly with a particle of mass $5\,\mathrm{kg}$ moving at $2\,\mathrm{m s}^{-1}$ in the opposite direction. The coefficient of restitution is $e = 0.5$. Find the velocities after collision and the kinetic energy loss.
</details>

<details>
<summary>Solution 2</summary>
Taking the direction of the $3\,\mathrm{kg}$ particle as positive: $u_1 = 8$, $u_2 = -2$.

Momentum: $3(8) + 5(-2) = 3v_1 + 5v_2 \implies 3v_1 + 5v_2 = 14$ ... (i)

Restitution: $v_2 - v_1 = 0.5(8 - (-2)) = 5 \implies v_2 = v_1 + 5$ ... (ii)

Substituting into (i):
$3v_1 + 5(v_1 + 5) = 14 \implies 8v_1 = -11 \implies v_1 = -1.375\,\mathrm{m s}^{-1}$.

$v_2 = -1.375 + 5 = 3.625\,\mathrm{m s}^{-1}$.

$\mu = \dfrac◆LB◆3 \times 5◆RB◆◆LB◆8◆RB◆ = \dfrac{15}{8}$.

$\Delta KE = \dfrac{1}{2} \times \dfrac{15}{8} \times (10)^2 \times (1 - 0.25) = \dfrac{15}{16} \times 100 \times 0.75 = \dfrac{1125}{16} \approx 70.3\,\mathrm{J}$.

**If you get this wrong, revise:**
[Direct collision of two particles](#53-direct-collision-of-two-particles) — Section 5.3.

</details>

<details>
<summary>Problem 3</summary>
Find the centre of mass of a uniform semicircular lamina of radius $5\,\mathrm{cm}$.
</details>

<details>
<summary>Solution 3</summary>
$\bar{y} = \dfrac◆LB◆4r◆RB◆◆LB◆3\pi◆RB◆ = \dfrac◆LB◆4 \times 5◆RB◆◆LB◆3\pi◆RB◆ = \dfrac◆LB◆20◆RB◆◆LB◆3\pi◆RB◆ \approx 2.12\,\mathrm{cm}$.

The centre of mass lies on the axis of symmetry at a distance $\dfrac◆LB◆20◆RB◆◆LB◆3\pi◆RB◆\,\mathrm{cm}$ from
the diameter.

**If you get this wrong, revise:** [Semicircular lamina](#22-semicircular-lamina) — Section 2.2.

</details>

<details>
<summary>Problem 4</summary>
A uniform lamina is made from a rectangle of dimensions $6a \times 4a$ with a circular hole of radius $a$ cut out. The centre of the hole is at $(3a, 2a)$, which is the centre of the rectangle. Find the centre of mass of the remaining lamina.
</details>

<details>
<summary>Solution 4</summary>
Rectangle: area $= 24a^2$, centre of mass at $(3a, 2a)$.

Hole: area $= \pi a^2$, centre of mass at $(3a, 2a)$.

Since both centres of mass coincide at $(3a, 2a)$, the composite lamina also has its centre of mass
at $(3a, 2a)$ by symmetry.

More formally:
$\bar{x} = \dfrac◆LB◆24a^2 \times 3a - \pi a^2 \times 3a◆RB◆◆LB◆24a^2 - \pi a^2◆RB◆ = \dfrac◆LB◆3a(24 - \pi)◆RB◆◆LB◆24 - \pi◆RB◆ = 3a$.

Similarly $\bar{y} = 2a$.

**If you get this wrong, revise:**
[Centre of mass of composite bodies](#3-centre-of-mass-of-composite-bodies) — Section 3.

</details>

<details>
<summary>Problem 5</summary>
A sphere hits a smooth horizontal floor with speed $10\,\mathrm{m s}^{-1}$ at an angle of $60^\circ$ to the horizontal. The coefficient of restitution is $e = 0.8$. Find the speed and angle of the sphere immediately after impact.
</details>

<details>
<summary>Solution 5</summary>
Normal to the floor (vertical): $u_y = -10\sin 60° = -5\sqrt{3}$.

Tangential (horizontal): $u_x = 10\cos 60° = 5$.

After impact: $v_y = -e \times u_y = 0.8 \times 5\sqrt{3} = 4\sqrt{3}$ (upward).

$v_x = 5$ (unchanged).

Speed $= \sqrt{25 + 48} = \sqrt{73} \approx 8.54\,\mathrm{m s}^{-1}$.

Angle to horizontal:
$\theta = \arctan\!\left(\dfrac◆LB◆4\sqrt{3}◆RB◆◆LB◆5◆RB◆\right) = \arctan(1.386) \approx 54.2^\circ$.

**If you get this wrong, revise:** [Sphere hitting a smooth wall](#71-sphere-hitting-a-smooth-wall)
— Section 7.1.

</details>

<details>
<summary>Problem 6</summary>
A uniform wire framework consists of three rods forming a right-angled triangle with vertices at $(0, 0)$, $(4, 0)$, and $(0, 3)$. All rods are made of the same uniform material. Find the centre of mass of the framework.
</details>

<details>
<summary>Solution 6</summary>
Rod 1: from $(0, 0)$ to $(4, 0)$, length $= 4$, midpoint $(2, 0)$.
Rod 2: from $(0, 0)$ to $(0, 3)$, length $= 3$, midpoint $(0, 1.5)$.
Rod 3: from $(4, 0)$ to $(0, 3)$, length $= \sqrt{16 + 9} = 5$, midpoint $(2, 1.5)$.

Total length $= 4 + 3 + 5 = 12$.

$\bar{x} = \dfrac◆LB◆4 \times 2 + 3 \times 0 + 5 \times 2◆RB◆◆LB◆12◆RB◆ = \dfrac{8 + 0 + 10}{12} = \dfrac{18}{12} = 1.5$.

$\bar{y} = \dfrac◆LB◆4 \times 0 + 3 \times 1.5 + 5 \times 1.5◆RB◆◆LB◆12◆RB◆ = \dfrac{0 + 4.5 + 7.5}{12} = \dfrac{12}{12} = 1$.

Centre of mass: $(1.5, 1)$.

**If you get this wrong, revise:** [Uniform wire frameworks](#41-uniform-wire-frameworks) — Section
4.1.

</details>

<details>
<summary>Problem 7</summary>
Two smooth spheres $A$ (mass $2\,\mathrm{kg}$) and $B$ (mass $3\,\mathrm{kg}$) collide. Before collision, $A$ has velocity $(3\mathbf{i} + 2\mathbf{j})\,\mathrm{m s}^{-1}$ and $B$ has velocity $(\mathbf{i} - \mathbf{j})\,\mathrm{m s}^{-1}$. The line of centres at impact is parallel to $\mathbf{i}$. The coefficient of restitution is $e = 0.6$. Find the velocities after collision.
</details>

<details>
<summary>Solution 7</summary>
The normal direction is $\mathbf{i}$ and the tangential direction is $\mathbf{j}$.

Tangential components are unchanged: $v_{Ay} = 2$, $v_{By} = -1$.

Normal components: $u_{An} = 3$, $u_{Bn} = 1$.

Momentum: $2(3) + 3(1) = 2v_{An} + 3v_{Bn} \implies 2v_{An} + 3v_{Bn} = 9$ ... (i)

Restitution: $v_{Bn} - v_{An} = 0.6(3 - 1) = 1.2$ ... (ii)

From (i): $2v_{An} + 3(v_{An} + 1.2) = 9 \implies 5v_{An} + 3.6 = 9 \implies v_{An} = 1.08$.

$v_{Bn} = 1.08 + 1.2 = 2.28$.

Velocity of $A$: $(1.08\mathbf{i} + 2\mathbf{j})\,\mathrm{m s}^{-1}$.

Velocity of $B$: $(2.28\mathbf{i} - \mathbf{j})\,\mathrm{m s}^{-1}$.

**If you get this wrong, revise:**
[Two spheres in oblique collision](#72-two-spheres-in-oblique-collision) — Section 7.2.

</details>

<details>
<summary>Problem 8</summary>
A uniform lamina is made from a rectangle $ABCD$ where $AB = 8\,\mathrm{cm}$ and $BC = 6\,\mathrm{cm}$, with a triangle $BCE$ removed where $E$ is the midpoint of $AD$. Find the centre of mass of the remaining lamina, taking $A$ as the origin with $AB$ along the $x$-axis.
</details>

<details>
<summary>Solution 8</summary>
Rectangle $ABCD$: area $= 48$, centre of mass at $(4, 3)$.

Triangle $BCE$: vertices $B(8, 0)$, $C(8, 6)$, $E(4, 6)$. Area
$= \dfrac{1}{2} \times 4 \times 6 = 12$. Centre of mass:
$\bar{x} = \dfrac{8 + 8 + 4}{3} = \dfrac{20}{3}$, $\bar{y} = \dfrac{0 + 6 + 6}{3} = 4$.

Remaining area $= 48 - 12 = 36$.

$\bar{x} = \dfrac◆LB◆48 \times 4 - 12 \times 20/3◆RB◆◆LB◆36◆RB◆ = \dfrac{192 - 80}{36} = \dfrac{112}{36} = \dfrac{28}{9} \approx 3.11\,\mathrm{cm}$.

$\bar{y} = \dfrac◆LB◆48 \times 3 - 12 \times 4◆RB◆◆LB◆36◆RB◆ = \dfrac{144 - 48}{36} = \dfrac{96}{36} = \dfrac{8}{3} \approx 2.67\,\mathrm{cm}$.

**If you get this wrong, revise:**
[Centre of mass of composite bodies](#3-centre-of-mass-of-composite-bodies) — Section 3.

</details>

<details>
<summary>Problem 9</summary>
A particle of mass $m$ is projected with speed $u$ at angle $\theta$ to the horizontal onto a smooth horizontal plane. The coefficient of restitution is $e$. Find the speed and angle of the first bounce, and the horizontal distance between the first and second bounces.
</details>

<details>
<summary>Solution 9</summary>
Just before first impact:
$v_x = u\cos\theta$ (unchanged throughout),
$v_y = -u\sin\theta$ (downward).

After first impact: $v_x = u\cos\theta$, $v_{y}' = eu\sin\theta$ (upward).

Speed after bounce $= u\sqrt◆LB◆\cos^2\theta + e^2\sin^2\theta◆RB◆$.

Angle to horizontal:
$\phi = \arctan\!\left(\dfrac◆LB◆e\sin\theta◆RB◆◆LB◆\cos\theta◆RB◆\right) = \arctan(e\tan\theta)$.

Time between first and second bounce: $T = \dfrac◆LB◆2eu\sin\theta◆RB◆◆LB◆g◆RB◆$.

Horizontal distance $= u\cos\theta \times \dfrac◆LB◆2eu\sin\theta◆RB◆◆LB◆g◆RB◆ = \dfrac◆LB◆eu^2\sin 2\theta◆RB◆◆LB◆g◆RB◆$.

**If you get this wrong, revise:** [Sphere hitting a smooth wall](#71-sphere-hitting-a-smooth-wall)
— Section 7.1.

</details>

<details>
<summary>Problem 10</summary>
A uniform composite body is formed from a solid hemisphere of radius $r$ and a solid cylinder of radius $r$ and height $h$, joined at their circular faces. Both are made of the same uniform material. Find the centre of mass of the composite body, measured from the flat face of the hemisphere.
</details>

<details>
<summary>Solution 10</summary>
Hemisphere: volume $= \dfrac{2}{3}\pi r^3$, centre of mass at distance $\dfrac{3r}{8}$ from the flat
face.

Cylinder: volume $= \pi r^2 h$, centre of mass at distance $\dfrac{h}{2}$ from the hemisphere end.

Total volume $= \dfrac{2}{3}\pi r^3 + \pi r^2 h = \pi r^2\!\left(\dfrac{2r}{3} + h\right)$.

$$\bar{x} = \frac◆LB◆\dfrac{2}{3}\pi r^3 \times \dfrac{3r}{8} + \pi r^2 h \times \dfrac{h}{2}◆RB◆◆LB◆\pi r^2\!\left(\dfrac{2r}{3} + h\right)◆RB◆ = \frac◆LB◆\dfrac{\pi r^4}{4} + \dfrac{\pi r^2 h^2}{2}◆RB◆◆LB◆\pi r^2\!\left(\dfrac{2r}{3} + h\right)◆RB◆$$

$$= \frac{r^2/4 + h^2/2}{2r/3 + h} = \frac◆LB◆r^2 + 2h^2◆RB◆◆LB◆4\!\left(\dfrac{2r}{3} + h\right)◆RB◆ = \frac{3(r^2 + 2h^2)}{4(2r + 3h)}$$

**If you get this wrong, revise:**
[Centre of mass of composite bodies](#3-centre-of-mass-of-composite-bodies) — Section 3.

</details>

---

## 9. Advanced Worked Examples

### Example 9.1: Oblique collision between two spheres

**Problem.** Two smooth spheres $A$ and $B$ have equal mass $m$. Before collision, $A$ moves with velocity $(5\mathbf{i} + 3\mathbf{j})$ m/s and $B$ is stationary. The line of centres at impact makes angle $\alpha$ with $\mathbf{i}$, where $\tan\alpha = 3/4$. The coefficient of restitution is $e = 1/2$. Find the velocities after collision.

**Solution.** The normal direction is along the line of centres: $\hat{\mathbf{n}} = \dfrac{4}{5}\mathbf{i} + \dfrac{3}{5}\mathbf{j}$.

The tangential direction: $\hat{\mathbf{t}} = -\dfrac{3}{5}\mathbf{i} + \dfrac{4}{5}\mathbf{j}$.

Resolving $A$'s velocity: $u_{An} = (5)(4/5) + (3)(3/5) = 4 + 9/5 = 29/5$.

$u_{At} = (5)(-3/5) + (3)(4/5) = -3 + 12/5 = -3/5$.

$u_{Bn} = 0$, $u_{Bt} = 0$.

Tangential components unchanged: $v_{At} = -3/5$, $v_{Bt} = 0$.

Normal direction (conservation of momentum): $m(29/5) + m(0) = mv_{An} + mv_{Bn} \implies v_{An} + v_{Bn} = 29/5$ ... (i)

Restitution: $v_{Bn} - v_{An} = (1/2)(29/5) = 29/10$ ... (ii)

From (i) and (ii): $2v_{Bn} = 29/5 + 29/10 = 87/10 \implies v_{Bn} = 87/20$.

$v_{An} = 29/5 - 87/20 = 116/20 - 87/20 = 29/20$.

$\mathbf{v}_A = v_{An}\hat{\mathbf{n}} + v_{At}\hat{\mathbf{t}} = \dfrac{29}{20}\!\left(\dfrac{4}{5}\mathbf{i} + \dfrac{3}{5}\mathbf{j}\right) + \dfrac{-3}{5}\!\left(-\dfrac{3}{5}\mathbf{i} + \dfrac{4}{5}\mathbf{j}\right)$

$= \left(\dfrac{116}{100} + \dfrac{9}{25}\right)\mathbf{i} + \left(\dfrac{87}{100} - \dfrac{12}{25}\right)\mathbf{j}$

$= \left(\dfrac{29}{25} + \dfrac{9}{25}\right)\mathbf{i} + \left(\dfrac{87}{100} - \dfrac{48}{100}\right)\mathbf{j} = \dfrac{38}{25}\mathbf{i} + \dfrac{39}{100}\mathbf{j}$

$\mathbf{v}_B = \dfrac{87}{20}\!\left(\dfrac{4}{5}\mathbf{i} + \dfrac{3}{5}\mathbf{j}\right) = \dfrac{87}{25}\mathbf{i} + \dfrac{261}{100}\mathbf{j}$

### Example 9.2: Composite lamina with a triangular hole

**Problem.** A uniform square lamina $ABCD$ has side $6a$. An equilateral triangle of side $2a$ is removed with one vertex at the centre of the square and the opposite side on $AB$. Find the centre of mass of the remaining lamina.

**Solution.** Square: area $= 36a^2$, centre of mass at $(3a, 3a)$.

Equilateral triangle with side $2a$: area $= \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆(2a)^2 = \sqrt{3}\,a^2$.

Height $= \sqrt{3}\,a$. The triangle's centroid is at distance $\sqrt{3}\,a/3$ from the base.

Assuming the square has vertices at $(0, 0)$, $(6a, 0)$, $(6a, 6a)$, $(0, 6a)$, and the triangle has its base on the top edge $y = 6a$ with centroid at $(3a, 6a - \sqrt{3}\,a/3)$:

Using negative mass:

$$\bar{y} = \frac◆LB◆36a^2 \times 3a - \sqrt{3}\,a^2 \times (6a - a\sqrt{3}/3)◆RB◆◆LB◆36a^2 - \sqrt{3}\,a^2◆RB◆ = \frac◆LB◆108a^3 - 6\sqrt{3}\,a^3 + a^3◆RB◆◆LB◆a^2(36 - \sqrt{3})◆RB◆$$

$$= \frac◆LB◆a(109 - 6\sqrt{3})◆RB◆◆LB◆36 - \sqrt{3}◆RB◆$$

### Example 9.3: Successive collisions with a wall

**Problem.** A ball is projected from point $O$ with speed $u$ at angle $\alpha$ to the horizontal towards a smooth vertical wall at horizontal distance $d$. The coefficient of restitution between the ball and the wall is $e$. Show that the horizontal distance from the wall to the point where the ball next hits the ground is $ed$.

**Solution.** Time to reach the wall: $t_1 = d/(u\cos\alpha)$.

After impact with the wall:
- Horizontal velocity reverses and reduces: $v_x' = e \cdot u\cos\alpha$ (moving away from wall).
- Vertical velocity unchanged: $v_y' = u\sin\alpha - gd/(u\cos\alpha)$.

The ball follows a parabolic trajectory after bouncing. By the reversibility of projectile motion and the scaling of horizontal velocity by factor $e$, the horizontal range from the wall is $ed$. $\blacksquare$

### Example 9.4: Centre of mass of a solid cone

**Problem.** Find the centre of mass of a uniform solid right circular cone of height $h$ and base radius $r$.

**Solution.** Place the cone with its vertex at the origin and axis along the $z$-axis, extending to $z = h$.

At height $z$, the cross-section is a disc of radius $\dfrac{rz}{h}$, with volume $dV = \pi\!\left(\dfrac{rz}{h}\right)^2 dz$.

$$\bar{z} = \frac◆LB◆\displaystyle\int_0^h z \cdot \pi r^2 z^2/h^2\,dz◆RB◆◆LB◆\displaystyle\int_0^h \pi r^2 z^2/h^2\,dz◆RB◆ = \frac{h^4/4}{h^3/3} = \frac{3h}{4}$$

The centre of mass is at distance $\dfrac{3h}{4}$ from the vertex (or $\dfrac{h}{4}$ from the base).

### Example 9.5: Three-body collision problem

**Problem.** Three identical particles $A$, $B$, $C$ of mass $m$ are at rest in a straight line on a smooth surface with equal spacing $d$. Particle $A$ is given velocity $u$ towards $B$. If all collisions are perfectly elastic ($e = 1$), describe the subsequent motion.

**Solution.** **Collision 1 ($A$ hits $B$):** By symmetry of equal masses with $e = 1$, $A$ stops and $B$ moves with velocity $u$ towards $C$.

**Collision 2 ($B$ hits $C$):** Similarly, $B$ stops and $C$ moves with velocity $u$ away.

After both collisions: $A$ at rest, $B$ at rest, $C$ moves with velocity $u$. No further collisions occur.

### Example 9.6: Suspended lamina equilibrium

**Problem.** A uniform rectangular lamina $ABCD$ with $AB = 8$ cm and $BC = 6$ cm is freely suspended from vertex $A$ and hangs in equilibrium. Find the angle that diagonal $AC$ makes with the vertical.

**Solution.** Centre of mass $G$ is at the centre of the rectangle. With $A$ at the origin and $B$ along the positive $x$-axis, $G = (4, 3)$.

When suspended from $A$, the line $AG$ is vertical. The vector $AG = (4, 3)$ makes angle $\arctan(3/4)$ with the horizontal.

The diagonal $AC = (8, 6)$ also makes angle $\arctan(6/8) = \arctan(3/4)$ with the horizontal.

Since $AG$ is parallel to $AC$, the angle between the diagonal $AC$ and the vertical is the same as the angle between $AG$ and the vertical: $90^\circ - \arctan(3/4) = \arctan(4/3) \approx 53.1^\circ$.

---

## 10. Connections to Other Topics

### 10.1 Centre of mass and further calculus

Finding centres of mass by integration requires the same techniques as volumes of revolution: substitution, integration by parts, and definite integrals. See [Further Calculus](/docs/docs_alevel/further-maths/pure-mathematics/04-further-calculus).

### 10.2 Collisions and energy

The kinetic energy loss formula $\Delta KE = \frac{1}{2}\mu(u_1 - u_2)^2(1-e^2)$ connects to the work-energy principle and conservation of momentum. See [Projectile Motion](/docs/docs_alevel/further-maths/further-mechanics/01-projectile-motion).

### 10.3 Oblique impacts and vectors

Resolving velocities in oblique collisions requires vector decomposition and dot products. See [Vectors in 3D](/docs/docs_alevel/further-maths/pure-mathematics/09-vectors-in-3d).

---

## 11. Additional Exam-Style Questions

### Question 11

A uniform lamina is in the shape of a semicircle of radius $a$ with a circle of radius $a/2$ removed. The centre of the removed circle lies on the diameter of the semicircle, at distance $a/2$ from the centre of the semicircle. Find the centre of mass of the remaining lamina.

<details>
<summary>Solution</summary>

Semicircle: area $= \pi a^2/2$, centre of mass at $(0, 4a/(3\pi))$ from the diameter.

Removed circle: area $= \pi a^2/4$, centre of mass at $(a/2, 0)$.

Remaining area $= \pi a^2/2 - \pi a^2/4 = \pi a^2/4$.

$$\bar{x} = \frac◆LB◆(\pi a^2/2)(0) - (\pi a^2/4)(a/2)◆RB◆◆LB◆\pi a^2/4◆RB◆ = \frac◆LB◆-\pi a^3/8◆RB◆◆LB◆\pi a^2/4◆RB◆ = -\frac{a}{2}$$

$$\bar{y} = \frac◆LB◆(\pi a^2/2)(4a/(3\pi)) - (\pi a^2/4)(0)◆RB◆◆LB◆\pi a^2/4◆RB◆ = \frac◆LB◆2a^2/3◆RB◆◆LB◆\pi a^2/4◆RB◆ = \frac◆LB◆8a◆RB◆◆LB◆3\pi◆RB◆$$

Centre of mass: $\left(-\dfrac{a}{2}, \dfrac◆LB◆8a◆RB◆◆LB◆3\pi◆RB◆\right)$.

</details>

### Question 12

A particle of mass $2$ kg moving at $6$ m/s collides directly with a stationary particle of mass $m$ kg. After collision, the 2 kg particle rebounds with speed $1$ m/s and the coefficient of restitution is $e = 2/3$. Find $m$.

<details>
<summary>Solution</summary>

Taking the initial direction of the 2 kg particle as positive: $u_1 = 6$, $u_2 = 0$, $v_1 = -1$.

Momentum: $2(6) + m(0) = 2(-1) + m v_2 \implies 12 = -2 + m v_2 \implies m v_2 = 14$ ... (i)

Restitution: $v_2 - (-1) = (2/3)(6 - 0) \implies v_2 + 1 = 4 \implies v_2 = 3$.

From (i): $3m = 14 \implies m = 14/3$ kg.

</details>

### Question 13

**Prove that** in any elastic collision between two particles (with $e = 1$), the relative speed of separation equals the relative speed of approach.

<details>
<summary>Solution</summary>

By Newton's law of restitution with $e = 1$:

$$v_2 - v_1 = 1 \cdot (u_1 - u_2)$$

The relative speed of separation is $|v_2 - v_1|$ and the relative speed of approach is $|u_1 - u_2|$.

$$|v_2 - v_1| = |u_1 - u_2| \quad \blacksquare$$

</details>

### Question 14

A uniform solid hemisphere of radius $r$ and a uniform solid cone of base radius $r$ and height $h$ are joined base-to-base. Both are made of the same material. For what value of $h$ does the composite body have its centre of mass exactly at the join?

<details>
<summary>Solution</summary>

Hemisphere: volume $= 2\pi r^3/3$, centre of mass at distance $3r/8$ from the flat face.

Cone: volume $= \pi r^2 h/3$, centre of mass at distance $h/4$ from the base.

Taking the join as the origin (measuring into the hemisphere as positive):

$$\bar{x} = \frac◆LB◆(2\pi r^3/3)(3r/8) + (\pi r^2 h/3)(-h/4)◆RB◆◆LB◆2\pi r^3/3 + \pi r^2 h/3◆RB◆ = \frac◆LB◆\pi r^4/4 - \pi r^2 h^2/12◆RB◆◆LB◆\pi r^2(2r + h)/3◆RB◆$$

For the centre of mass to be at the join: $\bar{x} = 0$:

$$\frac◆LB◆\pi r^4◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆\pi r^2 h^2◆RB◆◆LB◆12◆RB◆ \implies 3r^2 = h^2 \implies h = r\sqrt{3}$$

</details>

---

## 8. Advanced Worked Examples

### Example 8.1: Centre of mass of a composite lamina

**Problem.** A uniform lamina consists of a semicircle of radius $a$ attached to a rectangle of width $2a$ and height $h$. The flat side of the semicircle coincides with one edge of the rectangle. Find the distance of the centre of mass from the base of the rectangle.

**Solution.** Semicircle: area $= \dfrac◆LB◆\pi a^2◆RB◆◆LB◆2◆RB◆$, centre of mass at $\dfrac◆LB◆4a◆RB◆◆LB◆3\pi◆RB◆$ above the diameter.

Rectangle: area $= 2ah$, centre of mass at $\dfrac{h}{2}$ above the base.

Taking the base as datum:

$$\bar{y} = \frac◆LB◆\frac{\pi a^2}{2}\!\left(h + \frac{4a}{3\pi}\right) + 2ah \cdot \frac{h}{2}◆RB◆◆LB◆\frac{\pi a^2}{2} + 2ah◆RB◆$$

$$= \frac◆LB◆\frac{\pi a^2 h}{2} + \frac{2a^3}{3} + ah^2◆RB◆◆LB◆\frac{\pi a^2}{2} + 2ah◆RB◆$$

### Example 8.2: Oblique elastic collision in 2D

**Problem.** A particle of mass $m$ moving at $4\,\mathrm{m\,s^{-1}}$ collides elastically with a stationary particle of mass $2m$. After the collision, the first particle moves at $60°$ to its original direction. Find the speeds after collision.

**Solution.** Conservation of momentum (along original direction): $m \times 4 = mv_1\cos 60° + 2mv_2\cos\theta$.

$4 = \dfrac{v_1}{2} + 2v_2\cos\theta$ ... (1)

Perpendicular to original direction: $0 = mv_1\sin 60° - 2mv_2\sin\theta$.

$v_1\sin 60° = 2v_2\sin\theta$ ... (2)

Conservation of KE: $\dfrac{1}{2}m \times 16 = \dfrac{1}{2}mv_1^2 + \dfrac{1}{2}(2m)v_2^2$.

$16 = v_1^2 + 2v_2^2$ ... (3)

From (2): $v_2\sin\theta = \dfrac◆LB◆v_1\sqrt{3}◆RB◆◆LB◆4◆RB◆$. From (1): $v_2\cos\theta = 2 - \dfrac{v_1}{4}$.

Squaring and adding: $v_2^2 = \dfrac{3v_1^2}{16} + 4 - \dfrac{v_1}{2} + \dfrac{v_1^2}{16} = \dfrac{v_1^2}{4} - \dfrac{v_1}{2} + 4$.

Substituting into (3): $16 = v_1^2 + 2\!\left(\dfrac{v_1^2}{4} - \dfrac{v_1}{2} + 4\right) = \dfrac{3v_1^2}{2} - v_1 + 8$.

$\dfrac{3v_1^2}{2} - v_1 - 8 = 0 \implies 3v_1^2 - 2v_1 - 16 = 0$.

$v_1 = \dfrac◆LB◆2 \pm \sqrt{4+192}◆RB◆◆LB◆6◆RB◆ = \dfrac◆LB◆2 \pm 14◆RB◆◆LB◆6◆RB◆$. Taking positive: $v_1 = \dfrac{16}{6} = \dfrac{8}{3}\,\mathrm{m\,s^{-1}}$.

$v_2^2 = \dfrac◆LB◆64◆RB◆◆LB◆9 \times 4◆RB◆ - \dfrac{4}{3} + 4 = \dfrac{16}{9} - \dfrac{4}{3} + 4 = \dfrac{16-12+36}{9} = \dfrac{40}{9}$.

$v_2 = \dfrac◆LB◆2\sqrt{10}◆RB◆◆LB◆3◆RB◆\,\mathrm{m\,s^{-1}}$.

### Example 8.3: Toppling and sliding on an inclined plane

**Problem.** A uniform solid cylinder of radius $r$ and mass $m$ is placed on a rough inclined plane at angle $\alpha$. The coefficient of friction is $\mu$. Determine whether the cylinder slides or rolls.

**Solution.** For sliding: $mg\sin\alpha > \mu mg\cos\alpha \implies \tan\alpha > \mu$.

For rolling without slipping: the friction must be sufficient to provide the angular acceleration. Taking moments about the centre:

$Fr = I\alpha = \dfrac{1}{2}mr^2 \cdot \dfrac{a}{r} \implies F = \dfrac{ma}{2}$.

Linear: $mg\sin\alpha - F = ma \implies mg\sin\alpha = \dfrac{3ma}{2} \implies a = \dfrac◆LB◆2g\sin\alpha◆RB◆◆LB◆3◆RB◆$.

$F = \dfrac◆LB◆mg\sin\alpha◆RB◆◆LB◆3◆RB◆ \leq \mu mg\cos\alpha \implies \tan\alpha \leq 3\mu$.

If $\mu < \tan\alpha \leq 3\mu$: rolls without slipping.
If $\tan\alpha > 3\mu$: slides with slipping.

### Example 8.4: Centre of mass of a non-uniform rod

**Problem.** A rod of length $L$ has density $\rho(x) = \rho_0(1 + x/L)$. Find the centre of mass.

**Solution.** $$\bar{x} = \frac◆LB◆\int_0^L x\rho(x)\,dx◆RB◆◆LB◆\int_0^L \rho(x)\,dx◆RB◆ = \frac◆LB◆\int_0^L x(1+x/L)\,dx◆RB◆◆LB◆\int_0^L (1+x/L)\,dx◆RB◆$$

Numerator: $\displaystyle\int_0^L \!\left(x + \frac{x^2}{L}\right)dx = \frac{L^2}{2} + \frac{L^2}{3} = \frac{5L^2}{6}$.

Denominator: $\displaystyle\int_0^L \!\left(1 + \frac{x}{L}\right)dx = L + \frac{L}{2} = \frac{3L}{2}$.

$$\bar{x} = \frac{5L^2/6}{3L/2} = \frac{5L}{9}$$

The centre of mass is at $\boxed{\dfrac{5L}{9}}$ from the lighter end (shifted toward the heavier end).

### Example 8.5: Elastic collision with a wall

**Problem.** A particle of mass $m$ and speed $u$ collides elastically with a fixed wall at angle $\theta$ to the normal. Find the impulse exerted by the wall.

**Solution.** Only the component perpendicular to the wall reverses:

$v_{\perp} = u\cos\theta$ (reverses), $v_{\parallel} = u\sin\theta$ (unchanged).

Since the collision is elastic, the speed is unchanged: the perpendicular component reverses.

$$\text{Impulse} = m(u\cos\theta - (-u\cos\theta)) = \boxed{2mu\cos\theta}$$

directed along the normal away from the wall.

---

## 9. Common Pitfalls

| Pitfall | Correct Approach |
|---|---|
| Forgetting to include the mass in centre of mass calculations for composite bodies | Always weight each centre of mass by its mass, not just its area |
| Assuming elastic means KE of each particle is conserved individually | Elastic means total KE is conserved, not individual KE |
| Using the wrong moment of inertia for a body | Rod about end: $\dfrac{ml^2}{3}$; about centre: $\dfrac{ml^2}{12}$; solid disc: $\dfrac{mr^2}{2}$ |

---

## 10. Additional Exam-Style Questions

### Question 8

A uniform lamina is formed from an equilateral triangle of side $2a$ with a circular hole of radius $a/2$ cut out. The centre of the hole coincides with the centroid of the triangle. Find the centre of mass of the remaining lamina.

<details>
<summary>Solution</summary>

Triangle: area $= \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆(2a)^2 = \sqrt{3}a^2$, centroid at geometric centre.

Hole: area $= \dfrac◆LB◆\pi a^2◆RB◆◆LB◆4◆RB◆$, centroid at geometric centre.

Since the hole is at the centroid, the remaining lamina has its centre of mass at the centroid of the triangle.

Wait — the centre of mass of the remaining lamina is the weighted average of the triangle and the hole (with negative mass for the hole):

$$\bar{x} = \frac◆LB◆\sqrt{3}a^2 \cdot 0 - \frac{\pi a^2}{4} \cdot 0◆RB◆◆LB◆\sqrt{3}a^2 - \frac{\pi a^2}{4}◆RB◆ = 0$$

The centre of mass remains at the centroid since both the triangle and hole are centred there. $\boxed{\bar{x} = 0}$

</details>

### Question 9

**Prove that** in a one-dimensional elastic collision between a particle of mass $m_1$ and a stationary particle of mass $m_2$, the velocity of $m_1$ after collision is $v_1 = \dfrac{(m_1-m_2)u}{m_1+m_2}$.

<details>
<summary>Solution</summary>

Conservation of momentum: $m_1 u = m_1 v_1 + m_2 v_2$ ... (1)

Conservation of KE: $\dfrac{1}{2}m_1 u^2 = \dfrac{1}{2}m_1 v_1^2 + \dfrac{1}{2}m_2 v_2^2$ ... (2)

From (1): $v_2 = \dfrac{m_1(u-v_1)}{m_2}$. Substituting into (2):

$m_1 u^2 = m_1 v_1^2 + \dfrac{m_1^2(u-v_1)^2}{m_2}$.

$u^2 = v_1^2 + \dfrac{m_1(u^2-2uv_1+v_1^2)}{m_2}$.

$m_2 u^2 = m_2 v_1^2 + m_1 u^2 - 2m_1 uv_1 + m_1 v_1^2$.

$(m_1-m_2)u^2 + 2m_1 uv_1 - (m_1+m_2)v_1^2 = 0$.

Factoring: $(u-v_1)[(m_1-m_2)u - (m_1+m_2)v_1] = 0$.

Excluding $u = v_1$ (no collision): $v_1 = \dfrac{(m_1-m_2)u}{m_1+m_2}$. $\blacksquare$

</details>

---

## 11. Connections to Other Topics

### 11.1 Elastic collisions and energy conservation

Elastic collisions conserve both momentum and kinetic energy, connecting to the work-energy theorem. See [Projectile Motion](/docs/docs_alevel/further-maths/further-mechanics/01-projectile-motion).

### 11.2 Centre of mass and integration

Finding centres of mass of continuous bodies requires integration techniques. See [Further Calculus](/docs/docs_alevel/further-maths/pure-mathematics/04-further-calculus).

### 11.3 Moments and vectors

The moment of a force about a point uses the cross product: $\mathbf{M} = \mathbf{r} \times \mathbf{F}$. See [Vectors in 3D](/docs/docs_alevel/further-maths/pure-mathematics/09-vectors-in-3d).

---

## 12. Key Results Summary

| Result | Formula |
|---|---|
| 1D elastic collision | $v_1 = \dfrac{(m_1-m_2)u}{m_1+m_2}$, $v_2 = \dfrac{2m_1 u}{m_1+m_2}$ |
| Conservation of momentum | $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$ |
| Conservation of KE (elastic) | $\dfrac{1}{2}m_1u_1^2 + \dfrac{1}{2}m_2u_2^2 = \dfrac{1}{2}m_1v_1^2 + \dfrac{1}{2}m_2v_2^2$ |
| Centre of mass (discrete) | $\bar{x} = \dfrac◆LB◆\sum m_i x_i◆RB◆◆LB◆\sum m_i◆RB◆$ |
| Centre of mass (continuous) | $\bar{x} = \dfrac◆LB◆\int x\,\rho(x)\,dA◆RB◆◆LB◆\int \rho(x)\,dA◆RB◆$ |
| Moment of inertia (rod, centre) | $I = \dfrac{ml^2}{12}$ |
| Moment of inertia (rod, end) | $I = \dfrac{ml^2}{3}$ |
| Moment of inertia (disc) | $I = \dfrac{mr^2}{2}$ |

---

## 13. Further Exam-Style Questions

### Question 10

Two particles of masses $3\,\mathrm{kg}$ and $5\,\mathrm{kg}$ collide. Before collision, the $3\,\mathrm{kg}$ particle moves at $4\,\mathrm{m\,s^{-1}}$ and the $5\,\mathrm{kg}$ particle moves at $-2\,\mathrm{m\,s^{-1}}$. After the elastic collision, find the velocities of both particles.

<details>
<summary>Solution</summary>

Conservation of momentum: $3(4)+5(-2) = 3v_1+5v_2 \implies 3v_1+5v_2 = 2$ ... (1)

Conservation of KE: $\dfrac{1}{2}(3)(16)+\dfrac{1}{2}(5)(4) = \dfrac{1}{2}(3)v_1^2+\dfrac{1}{2}(5)v_2^2 \implies 3v_1^2+5v_2^2 = 68$ ... (2)

From (1): $v_2 = \dfrac{2-3v_1}{5}$. Substituting into (2):

$3v_1^2 + 5\!\left(\dfrac{2-3v_1}{5}\right)^{\!2} = 68$.

$3v_1^2 + \dfrac{4-12v_1+9v_1^2}{5} = 68$.

$15v_1^2+4-12v_1+9v_1^2 = 340$.

$24v_1^2-12v_1-336 = 0 \implies 2v_1^2-v_1-28 = 0$.

$(2v_1+7)(v_1-4) = 0$. $v_1 = 4$ (no collision) or $v_1 = -7/2 = -3.5$.

$v_2 = \dfrac{2-3(-3.5)}{5} = \dfrac{12.5}{5} = 2.5$.

$\boxed{v_1 = -3.5\,\mathrm{m\,s^{-1}},\; v_2 = 2.5\,\mathrm{m\,s^{-1}}}$

</details>

### Question 11

A uniform solid cone of height $h$ and base radius $r$ is placed with its vertex on a horizontal table. Find the height of its centre of mass above the table.

<details>
<summary>Solution</summary>

Using the standard result: the centre of mass of a solid cone is at $\dfrac{h}{4}$ from the base, i.e., $\dfrac{3h}{4}$ from the vertex.

With the vertex on the table, the centre of mass is at $\boxed{\dfrac{3h}{4}}$ above the table.

</details>

---

## 14. Advanced Topics

### 14.1 Centre of mass of a circular arc

A uniform circular arc of radius $r$ subtending angle $2\alpha$ at the centre has its centre of mass at:

$$\bar{x} = \frac◆LB◆r\sin\alpha◆RB◆◆LB◆\alpha◆RB◆$$

from the centre, along the axis of symmetry.

### 14.2 Centre of mass of a circular sector

A uniform circular sector of radius $r$ and angle $2\alpha$ has its centre of mass at:

$$\bar{x} = \frac◆LB◆2r\sin\alpha◆RB◆◆LB◆3\alpha◆RB◆$$

from the centre, along the axis of symmetry.

### 14.3 Coefficient of restitution

For partially elastic collisions, the coefficient of restitution $e$ is defined as:

$$e = \frac◆LB◆\text{relative speed of separation}◆RB◆◆LB◆\text{relative speed of approach}◆RB◆$$

$e = 1$: perfectly elastic. $e = 0$: perfectly inelastic.

### 14.4 Oblique collisions with walls

When a particle hits a smooth wall, only the component of velocity perpendicular to the wall reverses:

$v_{\perp}^{\text{after}} = -e \cdot v_{\perp}^{\text{before}}$

The parallel component is unchanged.

---

## 15. Further Exam-Style Questions

### Question 12

A particle of mass $2\,\mathrm{kg}$ moving at $5\,\mathrm{m\,s^{-1}}$ collides with a stationary particle of mass $3\,\mathrm{kg}$. The coefficient of restitution is $e = 0.6$. Find the velocities after collision and the kinetic energy lost.

<details>
<summary>Solution</summary>

Momentum: $2(5) = 2v_1 + 3v_2 \implies 2v_1 + 3v_2 = 10$ ... (1)

Restitution: $v_2 - v_1 = 0.6 \times 5 = 3$ ... (2)

From (2): $v_2 = v_1 + 3$. Substituting into (1): $2v_1 + 3(v_1+3) = 10 \implies 5v_1 = 1 \implies v_1 = 0.2$.

$v_2 = 3.2$.

KE lost $= \dfrac{1}{2}(2)(25) - \dfrac{1}{2}(2)(0.04) - \dfrac{1}{2}(3)(10.24) = 25 - 0.04 - 15.36 = \boxed{9.6\,\mathrm{J}}$.

</details>

### Question 13

Find the centre of mass of a uniform semicircular lamina of radius $a$.

<details>
<summary>Solution</summary>

By symmetry, $\bar{x} = 0$.

$$\bar{y} = \frac◆LB◆\int_0^{\pi} \frac{1}{2}a^2 \cdot \frac{2}{3}a\sin\theta\,d\theta◆RB◆◆LB◆\frac{1}{2}\pi a^2◆RB◆ = \frac◆LB◆\frac{a^3}{3}\int_0^{\pi}\sin\theta\,dtheta◆RB◆◆LB◆\frac{\pi a^2}{2}◆RB◆ = \frac◆LB◆\frac{2a^3}{3}◆RB◆◆LB◆\frac{\pi a^2}{2}◆RB◆ = \boxed{\frac◆LB◆4a◆RB◆◆LB◆3\pi◆RB◆}$$

</details>

---

## 16. Further Advanced Topics

### 16.1 Centre of mass of a solid hemisphere

A uniform solid hemisphere of radius $a$ has its centre of mass at distance $\dfrac{3a}{8}$ from the flat face (or $\dfrac{3a}{8}$ from the centre of the sphere).

### 16.2 Centre of mass of a thin hemispherical shell

A thin hemispherical shell of radius $a$ has its centre of mass at distance $\dfrac{a}{2}$ from the flat face.

Note the difference: $\dfrac{3a}{8} < \dfrac{a}{2}$ — the solid hemisphere's centre of mass is closer to the base.

### 16.3 Pappus' centroid theorem (second theorem)

The volume generated by rotating a plane area about an external axis equals the area times the distance travelled by its centroid:

$$V = 2\pi \bar{d} \cdot A$$

where $\bar{d}$ is the distance from the centroid to the axis of rotation.

### 16.4 Centre of mass by integration — general formula

For a 3D body with density $\rho(\mathbf{r})$:

$$\bar{x} = \frac◆LB◆\iiint_V x\,\rho\,dV◆RB◆◆LB◆\iiint_V \rho\,dV◆RB◆, \quad \bar{y} = \frac◆LB◆\iiint_V y\,\rho\,dV◆RB◆◆LB◆\iiint_V \rho\,dV◆RB◆, \quad \bar{z} = \frac◆LB◆\iiint_V z\,\rho\,dV◆RB◆◆LB◆\iiint_V \rho\,dV◆RB◆$$

---

## 17. Further Exam-Style Questions

### Question 14

A uniform wire is bent into a semicircle of radius $a$. Find its centre of mass.

<details>
<summary>Solution</summary>

For a wire (1D), use $\bar{x} = \dfrac◆LB◆\int x\,ds◆RB◆◆LB◆\int ds◆RB◆$ where $ds = a\,d\theta$.

$$\bar{y} = \frac◆LB◆\int_0^{\pi} a\sin\theta \cdot a\,d\theta◆RB◆◆LB◆\int_0^{\pi} a\,d\theta◆RB◆ = \frac◆LB◆a^2[-\cos\theta]_0^{\pi}◆RB◆◆LB◆a\pi◆RB◆ = \frac◆LB◆2a^2◆RB◆◆LB◆a\pi◆RB◆ = \boxed{\frac◆LB◆2a◆RB◆◆LB◆\pi◆RB◆}$$

</details>

### Question 15

**Prove Pappus' first theorem:** the volume of revolution of a plane area about an external axis in its plane equals the area times the distance travelled by its centroid.

<details>
<summary>Solution</summary>

Consider rotating area $A$ about axis $x = 0$. By the shell method:

$V = 2\pi\displaystyle\int_A x\,dA = 2\pi \cdot \bar{x} \cdot A$.

where $\bar{x} = \dfrac{1}{A}\displaystyle\int_A x\,dA$ is the centroid's $x$-coordinate.

The centroid travels a distance $2\pi\bar{x}$, so $V = 2\pi\bar{x}\cdot A$. $\blacksquare$

</details>
