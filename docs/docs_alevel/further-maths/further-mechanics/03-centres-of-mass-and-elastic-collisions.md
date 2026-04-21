---
title: Centres of Mass and Elastic Collisions
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

$$\boxed{\bar{x} = \frac{\displaystyle\int_a^b x \cdot f(x)\,dx}{\displaystyle\int_a^b f(x)\,dx}}$$

$$\boxed{\bar{y} = \frac{\displaystyle\int_a^b \frac{1}{2}[f(x)]^2\,dx}{\displaystyle\int_a^b f(x)\,dx}}$$

The denominator is the total area of the lamina: $A = \displaystyle\int_a^b f(x)\,dx$.

### Proof of the centre of mass of a uniform triangular lamina

### Proof

Consider a triangle with vertices at $(0, 0)$, $(b, 0)$, and $(c, h)$.

The line from $(0, 0)$ to $(c, h)$ is $y = \dfrac{h}{c}\,x$ and the line from $(b, 0)$ to $(c, h)$
is $y = \dfrac{h}{c - b}(x - b)$.

For simplicity, take a right triangle with vertices $(0, 0)$, $(b, 0)$, $(0, h)$, where
$f(x) = h - \dfrac{h}{b}x = h\!\left(1 - \dfrac{x}{b}\right)$.

$$\bar{x} = \frac{\displaystyle\int_0^b x \cdot h\!\left(1 - \frac{x}{b}\right)dx}{\displaystyle\int_0^b h\!\left(1 - \frac{x}{b}\right)dx}$$

Numerator:
$\displaystyle h\int_0^b \left(x - \frac{x^2}{b}\right)dx = h\left[\frac{x^2}{2} - \frac{x^3}{3b}\right]_0^b = h\left(\frac{b^2}{2} - \frac{b^2}{3}\right) = \frac{hb^2}{6}$.

Denominator:
$\displaystyle h\int_0^b \left(1 - \frac{x}{b}\right)dx = h\left[x - \frac{x^2}{2b}\right]_0^b = \frac{hb}{2}$.

$$\bar{x} = \frac{hb^2/6}{hb/2} = \frac{b}{3}$$

$$\bar{y} = \frac{\displaystyle\int_0^b \frac{1}{2}h^2\!\left(1 - \frac{x}{b}\right)^2 dx}{hb/2} = \frac{\dfrac{h^2}{2}\displaystyle\int_0^b \left(1 - \frac{2x}{b} + \frac{x^2}{b^2}\right)dx}{hb/2}$$

$$= \frac{\dfrac{h^2}{2}\!\left[b - b + \dfrac{b}{3}\right]}{hb/2} = \frac{h^2 b / 6}{hb/2} = \frac{h}{3}$$

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

$$\boxed{\bar{y} = \frac{4r}{3\pi}}$$

The centre of mass lies on the axis of symmetry, a distance $\dfrac{4r}{3\pi}$ from the diameter.

### 2.3 Circular sector

For a sector of a circle of radius $r$ with half-angle $\alpha$ (so the sector subtends $2\alpha$ at
the centre):

$$\boxed{\bar{x} = \frac{2r\sin\alpha}{3\alpha}}$$

This lies on the axis of symmetry. For a semicircle ($\alpha = \pi/2$):
$\bar{x} = \dfrac{2r}{3(\pi/2)} = \dfrac{4r}{3\pi}$, consistent with Section 2.2.

### 2.4 Circular arc

For a uniform circular arc of radius $r$ subtending angle $2\alpha$ at the centre:

$$\boxed{\bar{x} = \frac{r\sin\alpha}{\alpha}}$$

<hr />

## 3. Centre of Mass of Composite Bodies

**Definition.** For a body composed of $n$ parts with masses $m_1, m_2, \ldots, m_n$ and centres of
mass at $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$:

$$\boxed{\bar{x} = \frac{\displaystyle\sum_{i=1}^{n} m_i x_i}{\displaystyle\sum_{i=1}^{n} m_i}}$$

$$\boxed{\bar{y} = \frac{\displaystyle\sum_{i=1}^{n} m_i y_i}{\displaystyle\sum_{i=1}^{n} m_i}}$$

For a composite body, _negative masses_ can be used for holes or removed sections.

<details>
<summary>Worked Example: Composite lamina</summary>

A uniform lamina consists of a square of side $4a$ with a semicircle of radius $2a$ removed from one
edge. Find the centre of mass of the remaining lamina.

The square has area $(4a)^2 = 16a^2$ and centre of mass at $(2a, 2a)$.

The semicircle has area $\dfrac{1}{2}\pi(2a)^2 = 2\pi a^2$ and centre of mass at
$(2a, 2a + \dfrac{4(2a)}{3\pi}) = (2a, 2a + \dfrac{8a}{3\pi})$, assuming the semicircle is removed
from the top edge.

Using negative mass for the semicircle:

$$\bar{y} = \frac{16a^2 \times 2a - 2\pi a^2 \times (2a + 8a/(3\pi))}{16a^2 - 2\pi a^2}$$

$$= \frac{32a^3 - 4\pi a^3 - 16a^3/3}{a^2(16 - 2\pi)} = \frac{a(96 - 12\pi - 16)/3}{16 - 2\pi} = \frac{a(80 - 12\pi)}{3(16 - 2\pi)}$$

$$= \frac{a(80 - 12\pi)}{48 - 6\pi} = \frac{a(40 - 6\pi)}{24 - 3\pi}$$

</details>

<hr />

## 4. Centre of Mass of Frameworks

### 4.1 Uniform wire frameworks

A framework is made of uniform wires (rods). Each rod has its centre of mass at its midpoint. The
total mass is proportional to the total length.

$$\boxed{\bar{x} = \frac{\displaystyle\sum m_i x_i}{\displaystyle\sum m_i} = \frac{\displaystyle\sum \ell_i x_i}{\displaystyle\sum \ell_i}}$$

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

$$\tan\beta = \frac{u_y}{e \cdot u_x} = \frac{\tan\alpha}{e}$$

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

Note: $\tan\beta = 4/3 = \dfrac{\tan\alpha}{e} = \dfrac{2/3}{0.5} = 4/3$. ✓

</details>

<hr />

## 8. Summary of Key Results

$$\boxed{\bar{x} = \frac{\displaystyle\sum m_i x_i}{\displaystyle\sum m_i}, \qquad \bar{y} = \frac{\displaystyle\sum m_i y_i}{\displaystyle\sum m_i}}$$

$$\boxed{\bar{y}_{\mathrm{semicircle}} = \frac{4r}{3\pi}, \qquad \bar{x}_{\mathrm{sector}} = \frac{2r\sin\alpha}{3\alpha}}$$

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

$\mu = \dfrac{3 \times 5}{8} = \dfrac{15}{8}$.

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
$\bar{y} = \dfrac{4r}{3\pi} = \dfrac{4 \times 5}{3\pi} = \dfrac{20}{3\pi} \approx 2.12\,\mathrm{cm}$.

The centre of mass lies on the axis of symmetry at a distance $\dfrac{20}{3\pi}\,\mathrm{cm}$ from
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
$\bar{x} = \dfrac{24a^2 \times 3a - \pi a^2 \times 3a}{24a^2 - \pi a^2} = \dfrac{3a(24 - \pi)}{24 - \pi} = 3a$.

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
$\theta = \arctan\!\left(\dfrac{4\sqrt{3}}{5}\right) = \arctan(1.386) \approx 54.2^\circ$.

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

$\bar{x} = \dfrac{4 \times 2 + 3 \times 0 + 5 \times 2}{12} = \dfrac{8 + 0 + 10}{12} = \dfrac{18}{12} = 1.5$.

$\bar{y} = \dfrac{4 \times 0 + 3 \times 1.5 + 5 \times 1.5}{12} = \dfrac{0 + 4.5 + 7.5}{12} = \dfrac{12}{12} = 1$.

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

$\bar{x} = \dfrac{48 \times 4 - 12 \times 20/3}{36} = \dfrac{192 - 80}{36} = \dfrac{112}{36} = \dfrac{28}{9} \approx 3.11\,\mathrm{cm}$.

$\bar{y} = \dfrac{48 \times 3 - 12 \times 4}{36} = \dfrac{144 - 48}{36} = \dfrac{96}{36} = \dfrac{8}{3} \approx 2.67\,\mathrm{cm}$.

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

Speed after bounce $= u\sqrt{\cos^2\theta + e^2\sin^2\theta}$.

Angle to horizontal:
$\phi = \arctan\!\left(\dfrac{e\sin\theta}{\cos\theta}\right) = \arctan(e\tan\theta)$.

Time between first and second bounce: $T = \dfrac{2eu\sin\theta}{g}$.

Horizontal distance $= u\cos\theta \times \dfrac{2eu\sin\theta}{g} = \dfrac{eu^2\sin 2\theta}{g}$.

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

$$\bar{x} = \frac{\dfrac{2}{3}\pi r^3 \times \dfrac{3r}{8} + \pi r^2 h \times \dfrac{h}{2}}{\pi r^2\!\left(\dfrac{2r}{3} + h\right)} = \frac{\dfrac{\pi r^4}{4} + \dfrac{\pi r^2 h^2}{2}}{\pi r^2\!\left(\dfrac{2r}{3} + h\right)}$$

$$= \frac{r^2/4 + h^2/2}{2r/3 + h} = \frac{r^2 + 2h^2}{4\!\left(\dfrac{2r}{3} + h\right)} = \frac{3(r^2 + 2h^2)}{4(2r + 3h)}$$

**If you get this wrong, revise:**
[Centre of mass of composite bodies](#3-centre-of-mass-of-composite-bodies) — Section 3.

</details>
