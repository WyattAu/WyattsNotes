---
title: Forces and Newton's Laws
description:
  "A-Level Mathematics notes on Forces and Newton's Laws: Board Coverage; 1. Newton's Laws of Motion; 1.1 Newton's First Law (Law of Inertia); 1.2 Newton's Seco."
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: forces-and-newtons-laws
---

## Board Coverage

| Board      | Paper   | Notes                                                 |
| ---------- | ------- | ----------------------------------------------------- |
| AQA        | Paper 1 | Newton's laws, friction, connected particles          |
| Edexcel    | P1      | Similar                                               |
| OCR (A)    | Paper 1 | Includes inclined planes                              |
| CIE (9709) | P1, P4  | Forces in P1; connected bodies, inclined planes in P4 |

:::info Always draw a clear free body diagram before writing any equations. The quality of your
diagram determines the quality of your solution.
:::

<hr />

## 1. Newton's Laws of Motion

### 1.1 Newton's First Law (Law of Inertia)

**Law.** A body remains at rest or moves with constant velocity unless acted upon by a resultant
external force.

**Implication.** If the resultant force on a body is zero, its acceleration is zero.

### 1.2 Newton's Second Law

**Law.** The resultant force on a body equals the rate of change of momentum:

$$\mathbf{F} = \frac{d\mathbf{p}}{dt} = \frac{d(m\mathbf{v})}{dt}$$

For constant mass:

$$\boxed{\mathbf{F} = m\mathbf{a}}$$

### 1.3 Newton's Third Law

**Law.** If body A exerts a force on body B, then body B exerts an equal and opposite force on body
A.

**Implication.** Forces always come in pairs: action and reaction. They act on **different** bodies
and are the same type of force.

:::warning Newton's Third Law pairs act on different bodies. The weight of a book on a table and the
normal reaction from the table are **not** a Third Law pair (both act on the book). The Third Law
pair of the weight is the gravitational pull of the book on the Earth.
:::

<hr />

## 2. Types of Forces

### 2.1 Weight

$$W = mg$$

where $g \approx 9.8\,\mathrm{m/s}^2$ (or $9.81$ on some boards). Weight acts vertically downward
through the centre of mass.

### 2.2 Normal reaction

The normal reaction $R$ (or $N$) is the perpendicular contact force exerted by a surface. Its
direction is always perpendicular to the surface.

### 2.3 Tension

Tension $T$ acts along a string/rope, always pulling away from the body.

### 2.4 Friction

See Section 4.

### 2.5 Thrust/drag

Applied forces in the direction of motion (thrust) or opposing motion (drag/resistance).

<hr />

## 3. Free Body Diagrams and Resolving Forces

### 3.1 Method

1. Isolate the body of interest.
2. Draw all forces acting **on** that body.
3. Choose positive directions.
4. Resolve forces in relevant directions.
5. Apply Newton's Second Law.

### 3.2 Resolving on an inclined plane

For a plane inclined at angle $\alpha$ to the horizontal:

- Parallel to plane (down the slope positive): $mg\sin\alpha$
- Perpendicular to plane: $mg\cos\alpha$ and the normal reaction $R$

At equilibrium perpendicular to the plane: $R = mg\cos\alpha$.

<hr />

## 4. Friction

### 4.1 The friction model

**Definition.** The friction force $F$ between two surfaces satisfies:

$$F \leq \mu R$$

where $\mu$ is the **coefficient of friction** and $R$ is the normal reaction.

When the body is sliding (or on the point of sliding):

$$F_{\max} = \mu R$$

### 4.2 Static vs. kinetic friction

- **Limiting friction** (on the point of sliding): $F = \mu_s R$ (static coefficient).
- **Kinetic friction** (sliding): $F = \mu_k R$ (kinetic coefficient, typically
  $\mu_k \lt{} \mu_s$).

In A Level, we usually assume $\mu_s = \mu_k = \mu$.

:::warning The friction force is not always $\mu R$. It adjusts to match the applied force up to the
maximum $\mu R$. Only use $F = \mu R$ when the body is sliding or about to slide.
:::

### 4.3 Angle of friction

The angle of friction $\lambda$ satisfies $\tan\lambda = \mu$. This is the steepest angle at which a
body can rest on an inclined plane without sliding.

**Proof.** On an inclined plane at angle $\alpha$:

- Driving force down slope: $mg\sin\alpha$
- Maximum friction up slope: $\mu R = \mu mg\cos\alpha$

On the point of sliding: $mg\sin\alpha = \mu mg\cos\alpha \implies \tan\alpha = \mu$. $\blacksquare$

<hr />

## 5. Connected Particles

### 5.1 Two particles connected by a light inextensible string

For two particles of masses $m_1$ and $m_2$ connected over a smooth pulley:

**Method:**

1. Draw free body diagrams for each particle.
2. Apply $F = ma$ to each particle separately.
3. Use the constraint that both have the same acceleration magnitude (inextensible string).
4. Solve the simultaneous equations.

**Example.** Masses $5\,\mathrm{kg}$ and $3\,\mathrm{kg}$ hang vertically over a smooth pulley.

For $5\,\mathrm{kg}$: $5g - T = 5a$. For $3\,\mathrm{kg}$: $T - 3g = 3a$.

Adding: $2g = 8a \implies a = g/4 = 2.45\,\mathrm{m/s}^2$.
$T = 3(g/4 + g) = 15g/4 = 36.75\,\mathrm{N}$.

### 5.2 On an inclined plane

The same method applies, but gravity must be resolved into components parallel and perpendicular to
the plane.

<hr />

## 6. Pulleys

For a smooth, light pulley:

- The tension is the same on both sides of the string.
- The pulley only changes the direction of the tension.

<hr />

## 7. Newton's Third Law -- Detailed Treatment

### 7.1 Action-reaction pairs

Newton's Third Law states that forces always occur in pairs. If body A exerts a force
$\mathbf{F}_{AB}$ on body B, then body B exerts a force $\mathbf{F}_{BA}$ on body A such that:

$$\mathbf{F}_{AB} = -\mathbf{F}_{BA}$$

These two forces are simultaneous, equal in magnitude, opposite in direction, collinear, and act on
**different bodies**.

### 7.2 Identifying Third Law pairs

A valid Third Law pair must satisfy **all** of the following criteria:

1. **Different bodies.** The two forces act on two different objects.
2. **Same type.** Both forces are of the same physical type (e.g. both gravitational, both contact,
   both frictional).
3. **Equal magnitude.** $|\mathbf{F}_{AB}| = |\mathbf{F}_{BA}|$.
4. **Opposite direction.** $\mathbf{F}_{AB}$ and $\mathbf{F}_{BA}$ are antiparallel.

### 7.3 Common misconceptions

:::warning The following are **not** Newton's Third Law pairs: :::

| Situation             | Incorrect Pair (NOT Third Law)                | Why It Fails                                            | Correct Third Law Pair                               |
| --------------------- | --------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------- |
| Book on a table       | Weight and normal reaction                    | Both act on the book                                    | Weight of book / gravitational pull of book on Earth |
| Person pushing a wall | Person's push on wall / wall's push on person | This IS a valid pair if different bodies are identified | Push of hand on wall / push of wall on hand          |
| Car accelerating      | Driving force and friction                    | These are not the same type of force                    | Tyre pushes road backward / road pushes tyre forward |
| Satellite in orbit    | Weight and centripetal force                  | Both act on the satellite                               | Earth pulls satellite / satellite pulls Earth        |

### 7.4 Worked example: identifying pairs

A block of mass $m$ sits on the floor of a lift which is accelerating upward at acceleration $a$.

**Forces on the block:**

1. Weight $W = mg$ downward (gravitational -- Earth on block).
2. Normal reaction $R$ upward (contact -- lift floor on block).

**Third Law pairs:**

1. Earth pulls block down with $mg$ $\longleftrightarrow$ block pulls Earth up with $mg$.
2. Lift floor pushes block up with $R$ $\longleftrightarrow$ block pushes lift floor down with $R$.

Note that $W$ and $R$ are **not** a Third Law pair (both act on the block, and they are different
types of force). In this case, applying Newton's Second Law to the block gives $R - mg = ma$, so
$R = m(g + a) \gt{} mg$.

<hr />

## 8. Friction -- Detailed Treatment

### 8.1 Limiting equilibrium

A body is in **limiting equilibrium** when it is on the point of moving. At this point the friction
has reached its maximum value:

$$F = \mu R$$

The word "limiting" is the signal to set $F = \mu R$ rather than $F \lt{} \mu R$.

:::tip In exam questions, the phrases "on the point of slipping," "about to move," and "in limiting
equilibrium" all mean the same thing: set $F = \mu R$.
:::

### 8.2 Friction on a horizontal surface -- full analysis

A block of mass $m$ rests on a rough horizontal surface with coefficient of friction $\mu$. A force
$P$ is applied at an angle $\theta$ above the horizontal.

**Perpendicular (equilibrium):**

$$R + P\sin\theta = mg \implies R = mg - P\sin\theta$$

**Parallel:**

$$P\cos\theta - F = ma$$

If the block is in limiting equilibrium ($a = 0$, $F = \mu R$):

$$P\cos\theta = \mu(mg - P\sin\theta)$$

$$P\cos\theta + \mu P\sin\theta = \mu mg$$

$$P = \frac{\mu mg}{\cos\theta + \mu\sin\theta}$$

:::warning Applying a force at an angle **upward** reduces $R$ and therefore reduces the maximum
friction. Applying a force at an angle **downward** increases $R$ and increases the maximum
friction.
:::

### 8.3 Connected particles on rough surfaces

When two particles are connected by a string and one or both surfaces are rough, friction must be
included in the equations of motion for each particle.

**Method:**

1. Assume a direction of motion.
2. Write $F = ma$ for each particle, including friction opposing the assumed motion.
3. Solve the simultaneous equations.
4. If $a \lt{} 0$, the assumed direction was wrong -- reconsider with friction reversed.

**Example.** A particle of mass $4\,\mathrm{kg}$ on a rough horizontal table ($\mu = 0.3$) is
connected by a light inextensible string over a smooth pulley at the table edge to a particle of
mass $3\,\mathrm{kg}$ hanging vertically. Find the acceleration.

For the $3\,\mathrm{kg}$ mass (assumed descending): $3g - T = 3a$.

For the $4\,\mathrm{kg}$ mass: $R = 4g$, $F = \mu R = 0.3 \times 4g = 1.2g$.

$$T - 1.2g = 4a$$

Adding: $3g - 1.2g = 7a \implies 1.8g = 7a \implies a = 1.8g/7 \approx 2.52\,\mathrm{m/s}^2$.

Since $a \gt{} 0$, the assumption is correct: the $3\,\mathrm{kg}$ mass descends.

### 8.4 Friction and the direction of motion

Friction always opposes **relative motion** (or the tendency to move). When setting up problems:

- If the body is moving, friction opposes the velocity.
- If the body is stationary, friction opposes the net applied force (up to $\mu R$).
- If the direction of motion is unknown, assume one direction. If $a$ comes out negative, reverse
  the assumed direction and recalculate with friction reversed.

<hr />

## 9. Pulley Systems

### 9.1 The Atwood machine

Two masses $m_1$ and $m_2$ ($m_1 \gt{} m_2$) hang vertically from a light inextensible string
passing over a smooth, light pulley.

**Equations of motion:**

For $m_1$ (descending): $m_1 g - T = m_1 a$

For $m_2$ (ascending): $T - m_2 g = m_2 a$

**Adding to eliminate $T$:**

$$a = \frac{(m_1 - m_2)g}{m_1 + m_2}$$

$$T = \frac{2m_1 m_2 g}{m_1 + m_2}$$

**Verification of limits:**

- If $m_1 = m_2$: $a = 0$, $T = mg$ (static equilibrium, as expected).
- If $m_2 = 0$: $a = g$, $T = 0$ (free fall, as expected).

### 9.2 Particle on a table with a pulley

A particle of mass $m_1$ rests on a smooth horizontal table, connected by a light inextensible
string over a smooth pulley at the edge to a particle of mass $m_2$ hanging freely.

**Equations of motion:**

For $m_1$ (horizontal): $T = m_1 a$

For $m_2$ (vertical, descending): $m_2 g - T = m_2 a$

**Solution:**

$$a = \frac{m_2 g}{m_1 + m_2}, \qquad T = \frac{m_1 m_2 g}{m_1 + m_2}$$

### 9.3 Particle on a table with a pulley -- rough surface

If the table surface is rough with coefficient $\mu$, the equation for $m_1$ becomes:

$$T - \mu m_1 g = m_1 a$$

Combined with $m_2 g - T = m_2 a$:

$$a = \frac{(m_2 - \mu m_1)g}{m_1 + m_2}$$

:::warning If $m_2 \lt{} \mu m_1$, then $a \lt{} 0$, meaning the system does not move. The friction
force is not at its maximum; instead $F = m_2 g$ (friction balances the hanging weight) and
$T = m_2 g$.
:::

### 9.4 Two particles on inclined planes with a pulley

Two particles of masses $m_1$ and $m_2$ are placed on two inclined planes with angles $\alpha$ and
$\beta$ respectively, connected by a string over a pulley at the top where the planes meet.

Assuming $m_1$ moves down plane $\alpha$ and $m_2$ moves up plane $\beta$:

For $m_1$: $m_1 g\sin\alpha - T - \mu_1 m_1 g\cos\alpha = m_1 a$

For $m_2$: $T - m_2 g\sin\beta - \mu_2 m_2 g\cos\beta = m_2 a$

Adding:

$$a = \frac{m_1 g(\sin\alpha - \mu_1\cos\alpha) - m_2 g(\sin\beta + \mu_2\cos\beta)}{m_1 + m_2}$$

<hr />

## 10. Inclined Planes with Friction

### 10.1 Resolving forces on a rough inclined plane

For a block of mass $m$ on a plane inclined at angle $\alpha$ to the horizontal, with coefficient of
friction $\mu$:

**Perpendicular to the plane (equilibrium):**

$$R = mg\cos\alpha$$

**Parallel to the plane:**

The component of weight driving the block down the slope is $mg\sin\alpha$.

The maximum available friction up the slope is $\mu R = \mu mg\cos\alpha$.

### 10.2 Equilibrium on a rough inclined plane

The block remains stationary if:

$$mg\sin\alpha \leq \mu mg\cos\alpha$$

i.e. $\tan\alpha \leq \mu$, or $\alpha \leq \lambda$ where $\lambda$ is the angle of friction.

If $\alpha \gt{} \lambda$, the block slides and the acceleration down the slope is:

$$a = g(\sin\alpha - \mu\cos\alpha)$$

### 10.3 Block pulled up a rough inclined plane

A force $P$ acts up the plane on a block of mass $m$ on a rough incline at angle $\alpha$.

**Case 1: Block moves up the plane.**

Friction acts down the slope (opposing upward motion):

$$P - mg\sin\alpha - \mu mg\cos\alpha = ma$$

$$a = \frac{P}{m} - g(\sin\alpha + \mu\cos\alpha)$$

**Case 2: Block is in limiting equilibrium (on the point of moving up).**

$$P = mg(\sin\alpha + \mu\cos\alpha)$$

**Case 3: Block moves down the plane.**

Friction acts up the slope (opposing downward motion):

$$P + \mu mg\cos\alpha - mg\sin\alpha = ma$$

$$a = \frac{P}{m} - g(\sin\alpha - \mu\cos\alpha)$$

:::tip The sign in front of the friction term $\mu mg\cos\alpha$ depends on the direction of motion
(or the tendency to move). Always draw a clear diagram and think about which way friction acts.
:::

### 10.4 Block on an inclined plane with a horizontal applied force

A horizontal force $P$ is applied to a block on a rough inclined plane at angle $\alpha$.

The force $P$ must be resolved into components parallel and perpendicular to the plane:

- Component up the slope: $P\cos\alpha$
- Component into the slope (increasing $R$): $P\sin\alpha$

**Perpendicular:**

$$R = mg\cos\alpha + P\sin\alpha$$

**Parallel (if on the point of moving up):**

$$P\cos\alpha = mg\sin\alpha + \mu(mg\cos\alpha + P\sin\alpha)$$

$$P\cos\alpha - \mu P\sin\alpha = mg\sin\alpha + \mu mg\cos\alpha$$

$$P = \frac{mg(\sin\alpha + \mu\cos\alpha)}{\cos\alpha - \mu\sin\alpha}$$

:::warning If $\cos\alpha - \mu\sin\alpha \leq 0$, i.e. $\mu \geq \cot\alpha$, then no finite
horizontal force can move the block up the slope (pushing horizontally jams the block into the
surface).
:::

<hr />

## 11. Equilibrium of Rigid Bodies

### 11.1 Conditions for equilibrium

A rigid body is in equilibrium if and only if:

1. The resultant force is zero: $\Sigma \mathbf{F} = \mathbf{0}$
2. The resultant moment about any point is zero: $\Sigma M = 0$

For coplanar forces, these conditions give:

$$\Sigma F_x = 0, \qquad \Sigma F_y = 0, \qquad \Sigma M_O = 0$$

where $O$ is any convenient point (often where an unknown force acts, to eliminate it from the
moment equation).

### 11.2 Coplanar forces -- three-force principle

If a body in equilibrium is acted upon by exactly three coplanar forces, then:

1. The forces must be **concurrent** (their lines of action meet at a single point), or all three
   are parallel.
2. The forces can be represented as a closed triangle when drawn head-to-tail (Lami's theorem).

### 11.3 Lami's theorem

If three coplanar forces $F_1$, $F_2$, $F_3$ act on a body in equilibrium, and $\theta_1$ is the
angle between $F_2$ and $F_3$, $\theta_2$ is the angle between $F_1$ and $F_3$, and $\theta_3$ is
the angle between $F_1$ and $F_2$, then:

$$\frac{F_1}{\sin\theta_1} = \frac{F_2}{\sin\theta_2} = \frac{F_3}{\sin\theta_3}$$

**Example.** A particle of mass $10\,\mathrm{kg}$ is suspended by two strings. One string makes an
angle of $30^\circ$ with the vertical and the other makes an angle of $60^\circ$ with the vertical.
Find the tensions.

The three forces are: $T_1$ (at $30^\circ$ from vertical), $T_2$ (at $60^\circ$ from vertical), and
weight $W = 10g$ (vertically downward).

Angles between the forces: the angle between $T_1$ and $T_2$ is $30° + 60° = 90^\circ$.

By Lami's theorem:

$$\frac{T_1}{\sin(180° - 60°)} = \frac{T_2}{\sin(180° - 30°)} = \frac{10g}{\sin 90°}$$

$$T_1 = 10g \sin 60° = 10g \times \frac{\sqrt{3}}{2} = 5\sqrt{3}\,g \approx 84.9\,\mathrm{N}$$

$$T_2 = 10g \sin 30° = 10g \times \frac{1}{2} = 5g = 49\,\mathrm{N}$$

### 11.4 Triangle of forces

When three coplanar forces maintain a body in equilibrium, the forces can be drawn as a triangle
with the forces as sides. The triangle is closed (the head of the last vector meets the tail of the
first).

This is equivalent to Lami's theorem and follows from the sine rule applied to the force triangle.

### 11.5 Worked example -- beam in equilibrium

A uniform beam $AB$ of length $4\,\mathrm{m}$ and mass $20\,\mathrm{kg}$ is hinged at $A$ and
supported by a wire attached at $B$, making an angle of $30^\circ$ with the beam. A particle of mass
$30\,\mathrm{kg}$ hangs from the beam at a point $1.5\,\mathrm{m}$ from $A$. Find the tension in the
wire and the reaction at the hinge.

**Taking moments about $A$ (to eliminate the hinge reaction):**

$$T\sin 30° \times 4 - 20g \times 2 - 30g \times 1.5 = 0$$

$$T \times 0.5 \times 4 = 40g + 45g$$

$$2T = 85g \implies T = 42.5g = 416.5\,\mathrm{N}$$

**Resolving horizontally at $A$:**

$$H_A = T\cos 30° = 42.5g \times \frac{\sqrt{3}}{2} \approx 360.8\,\mathrm{N}$$

**Resolving vertically at $A$:**

$$V_A + T\sin 30° = 20g + 30g$$

$$V_A + 42.5g \times 0.5 = 50g$$

$$V_A = 50g - 21.25g = 28.75g = 281.75\,\mathrm{N}$$

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
A body of mass $5\,\mathrm{kg}$ is on a rough horizontal surface with $\mu = 0.4$. A horizontal force of $30\,\mathrm{N}$ is applied. Find the acceleration.
</details>

<details>
<summary>Solution 1</summary>
$R = mg = 5(9.8) = 49\,\mathrm{N}$. $F_{\max} = \mu R = 0.4(49) = 19.6\,\mathrm{N}$.

Since $30 \gt{} 19.6$, the body slides. Friction $= 19.6\,\mathrm{N}$ (opposing motion).

$F_{\mathrm{net}} = 30 - 19.6 = 10.4\,\mathrm{N}$.
$a = F_{\mathrm{net}}/m = 10.4/5 = 2.08\,\mathrm{m/s}^2$.

**If you get this wrong, revise:** [Friction](#4-friction) — Section 4.

</details>

<details>
<summary>Problem 2</summary>
A block of mass $8\,\mathrm{kg}$ rests on a smooth plane inclined at $30^\circ$ to the horizontal. It is held in equilibrium by a force $P$ acting parallel to the plane. Find $P$.
</details>

<details>
<summary>Solution 2</summary>
Along the plane: $P = mg\sin 30° = 8(9.8)(0.5) = 39.2\,\mathrm{N}$.

**If you get this wrong, revise:**
[Resolving on an Inclined Plane](#32-resolving-on-an-inclined-plane) — Section 3.2.

</details>

<details>
<summary>Problem 3</summary>
Masses of $6\,\mathrm{kg}$ and $4\,\mathrm{kg}$ are connected by a light inextensible string over a smooth pulley. Find the acceleration and the tension.
</details>

<details>
<summary>Solution 3</summary>
For $6\,\mathrm{kg}$: $6g - T = 6a$. For $4\,\mathrm{kg}$: $T - 4g = 4a$.

Adding: $2g = 10a \implies a = g/5 = 1.96\,\mathrm{m/s}^2$.
$T = 4(1.96 + 9.8) = 4(11.76) = 47.04\,\mathrm{N}$.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.

</details>

<details>
<summary>Problem 4</summary>
A block of mass $10\,\mathrm{kg}$ is on a rough surface with $\mu = 0.3$. Find the minimum horizontal force required to move the block.
</details>

<details>
<summary>Solution 4</summary>
$R = 10g = 98\,\mathrm{N}$. $F_{\max} = 0.3(98) = 29.4\,\mathrm{N}$.

Minimum force $= 29.4\,\mathrm{N}$.

**If you get this wrong, revise:** [The Friction Model](#41-the-friction-model) — Section 4.1.

</details>

<details>
<summary>Problem 5</summary>
A $5\,\mathrm{kg}$ block is on a rough plane inclined at $40^\circ$ with $\mu = 0.25$. Is the block in equilibrium? If not, find its acceleration.
</details>

<details>
<summary>Solution 5</summary>
$R = mg\cos 40° = 5(9.8)(0.766) = 37.53\,\mathrm{N}$.
$F_{\max} = 0.25(37.53) = 9.38\,\mathrm{N}$.
Force down slope: $mg\sin 40° = 5(9.8)(0.643) = 31.49\,\mathrm{N}$.

Since $31.49 \gt{} 9.38$, the block slides. $a = (31.49 - 9.38)/5 = 22.11/5 = 4.42\,\mathrm{m/s}^2$.

**If you get this wrong, revise:**
[Resolving on an Inclined Plane](#32-resolving-on-an-inclined-plane) — Section 3.2.

</details>

<details>
<summary>Problem 6</summary>
A particle of mass $2\,\mathrm{kg}$ is on a smooth horizontal table. It is connected by a light string passing over a smooth pulley at the edge to a particle of mass $5\,\mathrm{kg}$ hanging freely. Find the acceleration and tension.
</details>

<details>
<summary>Solution 6</summary>
For $5\,\mathrm{kg}$: $5g - T = 5a$. For $2\,\mathrm{kg}$ (horizontal): $T = 2a$.

$5g - 2a = 5a \implies 5g = 7a \implies a = 5g/7 = 7\,\mathrm{m/s}^2$. $T = 2(7) = 14\,\mathrm{N}$.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.

</details>

<details>
<summary>Problem 7</summary>
A $3\,\mathrm{kg}$ block on a rough horizontal surface ($\mu = 0.5$) is pulled by a force of $25\,\mathrm{N}$ at $30^\circ$ above the horizontal. Find the acceleration.
</details>

<details>
<summary>Solution 7</summary>
Vertical: $R + 25\sin 30° = 3g \implies R = 29.4 - 12.5 = 16.9\,\mathrm{N}$.
$F_{\max} = 0.5(16.9) = 8.45\,\mathrm{N}$.
Horizontal: $25\cos 30° - 8.45 = 3a \implies 21.65 - 8.45 = 3a \implies a = 4.4\,\mathrm{m/s}^2$.

**If you get this wrong, revise:** [Free Body Diagrams](#3-free-body-diagrams-and-resolving-forces)
— Section 3.

</details>

<details>
<summary>Problem 8</summary>
A lift of mass $500\,\mathrm{kg}$ carries a person of mass $70\,\mathrm{kg}$. Find the tension in the cable when the lift accelerates upward at $2\,\mathrm{m/s}^2$. Find the apparent weight of the person.
</details>

<details>
<summary>Solution 8</summary>
Total mass $= 570\,\mathrm{kg}$. $T - 570g = 570(2) \implies T = 570(9.8+2) = 570(11.8) = 6726\,\mathrm{N}$.

Person: $R - 70g = 70(2) \implies R = 70(11.8) = 826\,\mathrm{N}$ (apparent weight).

**If you get this wrong, revise:** [Newton's Second Law](#12-newtons-second-law) — Section 1.2.

</details>

<details>
<summary>Problem 9</summary>
Two particles of masses $m$ and $3m$ are connected by a light inextensible string over a smooth pulley. The system is released from rest. Find the time for the heavier mass to descend $2\,\mathrm{m}$.
</details>

<details>
<summary>Solution 9</summary>
$3mg - T = 3ma$, $T - mg = ma$. Adding: $2mg = 4ma \implies a = g/2$.

$s = \tfrac{1}{2}at^2 \implies 2 = \tfrac{1}{2}(g/2)t^2 \implies t^2 = 8/g \implies t = \sqrt{8/9.8} \approx 0.904\,\mathrm{s}$.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.

</details>

<details>
<summary>Problem 10</summary>
A block slides down a rough slope of length $10\,\mathrm{m}$ inclined at $35^\circ$ with $\mu = 0.2$. If it starts from rest, find its speed at the bottom.
</details>

<details>
<summary>Solution 10</summary>
$a = g(\sin 35° - \mu\cos 35°) = 9.8(0.574 - 0.2 \times 0.819) = 9.8(0.574 - 0.164) = 9.8(0.410) = 4.02\,\mathrm{m/s}^2$.

$v^2 = u^2 + 2as = 0 + 2(4.02)(10) = 80.4 \implies v \approx 8.97\,\mathrm{m/s}$.

**If you get this wrong, revise:**
[Resolving on an Inclined Plane](#32-resolving-on-an-inclined-plane) — Section 3.2.

</details>

<details>
<summary>Problem 11</summary>
Prove that the angle of friction $\lambda$ satisfies $\tan\lambda = \mu$.
</details>

<details>
<summary>Solution 11</summary>
On the point of sliding down an incline of angle $\alpha$:
- Component of weight down slope $= mg\sin\alpha$
- Maximum friction up slope $= \mu R = \mu mg\cos\alpha$

Equilibrium: $mg\sin\alpha = \mu mg\cos\alpha \implies \tan\alpha = \mu$.

The critical angle is the angle of friction: $\tan\lambda = \mu$. $\blacksquare$

**If you get this wrong, revise:** [Angle of Friction](#43-angle-of-friction) — Section 4.3.

</details>

<details>
<summary>Problem 12</summary>
A $4\,\mathrm{kg}$ block on a rough inclined plane ($\mu = 0.3$, angle $= 50^\circ$) is attached to a $2\,\mathrm{kg}$ block hanging freely over a pulley at the top. Find the acceleration.
</details>

<details>
<summary>Solution 12</summary>
For $4\,\mathrm{kg}$ down slope: $4g\sin 50° - T - \mu(4g\cos 50°) = 4a$.
$4(9.8)(0.766) - T - 0.3(4)(9.8)(0.643) = 4a$
$30.03 - T - 7.54 = 4a \implies 22.49 - T = 4a$.

For $2\,\mathrm{kg}$: $T - 2g = 2a \implies T = 2(9.8+a) = 19.6 + 2a$.

$22.49 - 19.6 - 2a = 4a \implies 2.89 = 6a \implies a = 0.482\,\mathrm{m/s}^2$.

The $4\,\mathrm{kg}$ block accelerates down the slope.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.

</details>

<details>
<summary>Problem 13</summary>
A $6\,\mathrm{kg}$ block is on a rough horizontal surface with $\mu = 0.4$. A force $P$ is applied at an angle of $25^\circ$ below the horizontal. Find the minimum value of $P$ required to move the block.
</details>

<details>
<summary>Solution 13</summary>
Perpendicular: $R = mg + P\sin 25° = 6(9.8) + P\sin 25° = 58.8 + 0.4226P$.

At limiting equilibrium: $P\cos 25° = \mu R = 0.4(58.8 + 0.4226P)$.

$0.9063P = 23.52 + 0.1690P$

$0.7373P = 23.52$

$P = 31.9\,\mathrm{N}$ (2 d.p.)

**If you get this wrong, revise:**
[Friction -- Detailed Treatment](#8-friction----detailed-treatment) — Section 8.2.

</details>

<details>
<summary>Problem 14</summary>
A particle of mass $5\,\mathrm{kg}$ is suspended by two light inextensible strings. One string makes an angle of $45^\circ$ with the upward vertical and the other makes an angle of $60^\circ$ with the upward vertical on the opposite side. Use Lami's theorem to find the tensions in both strings.
</details>

<details>
<summary>Solution 14</summary>
The three forces are $T_1$ (at $45^\circ$ from vertical), $T_2$ (at $60^\circ$ from vertical), and $W = 5g$ (downward).

The angle between $T_1$ and $T_2$ is $45° + 60° = 105^\circ$.

The angle between $T_1$ and $W$ is $180° - 60° = 120^\circ$.

The angle between $T_2$ and $W$ is $180° - 45° = 135^\circ$.

By Lami's theorem:

$$\frac{T_1}{\sin 135°} = \frac{T_2}{\sin 120°} = \frac{5g}{\sin 105°}$$

$\sin 105° \approx 0.9659$, $\sin 135° = \frac{\sqrt{2}}{2} \approx 0.7071$,
$\sin 120° = \frac{\sqrt{3}}{2} \approx 0.8660$.

$T_1 = \frac{5g \times 0.7071}{0.9659} = \frac{34.65}{0.9659} \approx 35.9\,\mathrm{N}$

$T_2 = \frac{5g \times 0.8660}{0.9659} = \frac{42.43}{0.9659} \approx 43.9\,\mathrm{N}$

**If you get this wrong, revise:** [Lami's Theorem](#113-lamis-theorem) — Section 11.3.

</details>

<details>
<summary>Problem 15</summary>
A $7\,\mathrm{kg}$ block on a rough inclined plane (angle $= 35^\circ$, $\mu = 0.35$) is pulled up the slope by a force of $80\,\mathrm{N}$ acting parallel to the plane. Find the acceleration of the block.
</details>

<details>
<summary>Solution 15</summary>
$R = mg\cos 35° = 7(9.8)(0.819) = 56.18\,\mathrm{N}$.

$F = \mu R = 0.35(56.18) = 19.66\,\mathrm{N}$ (friction acts down the slope since the block moves
up).

Parallel to the plane: $80 - mg\sin 35° - F = ma$

$80 - 7(9.8)(0.574) - 19.66 = 7a$

$80 - 39.37 - 19.66 = 7a$

$20.97 = 7a \implies a \approx 3.00\,\mathrm{m/s}^2$

**If you get this wrong, revise:**
[Inclined Planes with Friction](#10-inclined-planes-with-friction) — Section 10.3.

</details>

<details>
<summary>Problem 16</summary>
A $3\,\mathrm{kg}$ block on a rough horizontal table ($\mu = 0.5$) is connected by a light inextensible string over a smooth pulley at the table edge to a $2\,\mathrm{kg}$ block hanging freely. Determine whether the system moves, and if so find the acceleration and tension.
</details>

<details>
<summary>Solution 16</summary>
Check if the system moves: the weight of the hanging mass is $2g = 19.6\,\mathrm{N}$.

Maximum static friction on the $3\,\mathrm{kg}$ block:
$F_{\max} = \mu m_1 g = 0.5 \times 3 \times 9.8 = 14.7\,\mathrm{N}$.

Since $19.6 \gt{} 14.7$, the system moves.

For $2\,\mathrm{kg}$ (descending): $2g - T = 2a$.

For $3\,\mathrm{kg}$ (horizontal): $T - \mu(3g) = 3a \implies T - 14.7 = 3a$.

Adding: $2g - 14.7 = 5a \implies 19.6 - 14.7 = 5a \implies a = 4.9/5 = 0.98\,\mathrm{m/s}^2$.

$T = 2(9.8 - 0.98) = 2(8.82) = 17.64\,\mathrm{N}$.

**If you get this wrong, revise:**
[Particle on a table with a pulley -- rough surface](#93-particle-on-a-table-with-a-pulley----rough-surface)
— Section 9.3.

</details>

<details>
<summary>Problem 17</summary>
A uniform beam $AB$ of weight $120\,\mathrm{N}$ and length $6\,\mathrm{m}$ is hinged at $A$ and held horizontally by a cable attached at $B$ making an angle of $40^\circ$ with the horizontal. A load of $80\,\mathrm{N}$ is hung from the beam at a point $2\,\mathrm{m}$ from $A$. Find the tension in the cable and the magnitude and direction of the reaction at the hinge.
</details>

<details>
<summary>Solution 17</summary>
Taking moments about $A$:

$T\sin 40° \times 6 - 120 \times 3 - 80 \times 2 = 0$

$6T\sin 40° = 360 + 160 = 520$

$T = \frac{520}{6\sin 40°} = \frac{520}{6(0.6428)} = \frac{520}{3.857} \approx 134.8\,\mathrm{N}$

Resolving horizontally: $H_A = T\cos 40° = 134.8 \times 0.766 = 103.3\,\mathrm{N}$.

Resolving vertically: $V_A + T\sin 40° = 120 + 80$

$V_A = 200 - 134.8 \times 0.6428 = 200 - 86.7 = 113.3\,\mathrm{N}$.

Magnitude of hinge reaction:
$\sqrt{H_A^2 + V_A^2} = \sqrt{103.3^2 + 113.3^2} = \sqrt{10670.9 + 12836.9} = \sqrt{23507.8} \approx 153.3\,\mathrm{N}$.

Angle below horizontal: $\arctan(V_A/H_A) = \arctan(113.3/103.3) \approx 47.6^\circ$.

**If you get this wrong, revise:** [Beam in Equilibrium](#115-worked-example----beam-in-equilibrium)
— Section 11.5.

</details>

<details>
<summary>Problem 18</summary>
A $4\,\mathrm{kg}$ block is placed on a rough inclined plane at angle $30^\circ$ with $\mu = 0.6$. Determine whether the block is in equilibrium. If a horizontal force $P = 50\,\mathrm{N}$ is then applied pushing the block up the slope, find the acceleration.
</details>

<details>
<summary>Solution 18</summary>
Without $P$: $mg\sin 30° = 4(9.8)(0.5) = 19.6\,\mathrm{N}$. $F_{\max} = \mu mg\cos 30° = 0.6(4)(9.8)(0.866) = 20.35\,\mathrm{N}$.

Since $19.6 \lt{} 20.35$, the block is in equilibrium without the applied force.

With $P = 50\,\mathrm{N}$ horizontal:

Perpendicular to plane:
$R = mg\cos 30° + P\sin 30° = 4(9.8)(0.866) + 50(0.5) = 33.95 + 25 = 58.95\,\mathrm{N}$.

$F = \mu R = 0.6(58.95) = 35.37\,\mathrm{N}$ (down the slope, opposing upward motion).

Component of $P$ up the slope: $P\cos 30° = 50(0.866) = 43.3\,\mathrm{N}$.

Parallel to plane: $43.3 - mg\sin 30° - 35.37 = 4a$

$43.3 - 19.6 - 35.37 = 4a$

$-11.67 = 4a$

Since $a \lt{} 0$, the block does not move up the slope with this force. The applied force is
insufficient to overcome both gravity and friction.

**If you get this wrong, revise:**
[Block on an inclined plane with a horizontal applied force](#104-block-on-an-inclined-plane-with-a-horizontal-applied-force)
— Section 10.4.

</details>

<details>
<summary>Problem 19</summary>
A book of mass $1.5\,\mathrm{kg}$ rests on a table. Identify the Newton's Third Law pair for each of the forces acting on the book, stating the bodies on which each force acts.
</details>

<details>
<summary>Solution 19</summary>
Forces on the book:
1. Weight $W = 1.5g$ downward (Earth on book).
2. Normal reaction $R = 1.5g$ upward (table on book).

Third Law pairs:

1. Weight pair: the gravitational pull of the book on the Earth (Earth on book $\leftrightarrow$
   book on Earth), magnitude $1.5g$, directed upward toward the book.
2. Normal reaction pair: the contact force of the book pushing down on the table (table on book
   $\leftrightarrow$ book on table), magnitude $1.5g$, directed downward.

Note that $W$ and $R$ are not a Third Law pair: they are different types of force (gravitational vs
contact) and both act on the book.

**If you get this wrong, revise:**
[Newton's Third Law -- Detailed Treatment](#7-newtons-third-law----detailed-treatment) — Section 7.

</details>

<details>
<summary>Problem 20</summary>
Two particles of masses $5\,\mathrm{kg}$ and $3\,\mathrm{kg}$ are attached to the ends of a light inextensible string. The $5\,\mathrm{kg}$ particle is on a rough plane inclined at $30^\circ$ ($\mu = 0.4$) and the $3\,\mathrm{kg}$ particle hangs vertically over a smooth pulley at the top of the incline. The string is parallel to the slope. Find the acceleration and the tension.
</details>

<details>
<summary>Solution 20</summary>
Assume the $5\,\mathrm{kg}$ block moves down the slope (we check $a \gt{} 0$ afterwards).

For $5\,\mathrm{kg}$ down the slope: $5g\sin 30° - T - \mu(5g\cos 30°) = 5a$

$5(9.8)(0.5) - T - 0.4(5)(9.8)(0.866) = 5a$

$24.5 - T - 16.99 = 5a$

$7.51 - T = 5a$ \hfill (1)

For $3\,\mathrm{kg}$: $T - 3g = 3a$

$T = 3(9.8 + a) = 29.4 + 3a$ \hfill (2)

Substituting (2) into (1):

$7.51 - 29.4 - 3a = 5a$

$-21.89 = 8a \implies a = -2.74\,\mathrm{m/s}^2$

Since $a \lt{} 0$, the assumption is wrong. The $5\,\mathrm{kg}$ block does not move down; instead
the $3\,\mathrm{kg}$ mass descends and the $5\,\mathrm{kg}$ block moves up the slope.

Re-do with the $5\,\mathrm{kg}$ block moving up the slope (friction now acts down the slope):

$T - 5g\sin 30° - \mu(5g\cos 30°) = 5a$

$T - 24.5 - 16.99 = 5a$

$T - 41.49 = 5a$ \hfill (3)

For $3\,\mathrm{kg}$ (descending): $3g - T = 3a$

$T = 29.4 - 3a$ \hfill (4)

Substituting (4) into (3):

$29.4 - 3a - 41.49 = 5a$

$-12.09 = 8a \implies a = -1.51\,\mathrm{m/s}^2$

Since $a$ is still negative, the system does not move at all. The hanging mass is too light to
overcome friction plus the component of weight down the slope.

Check: the force trying to pull the $5\,\mathrm{kg}$ block up the slope is $3g = 29.4\,\mathrm{N}$.
The force opposing this is $5g\sin 30° + \mu(5g\cos 30°) = 24.5 + 16.99 = 41.49\,\mathrm{N}$.

Since $29.4 \lt{} 41.49$, the system remains in equilibrium. The tension is
$T = 3g = 29.4\,\mathrm{N}$, and friction $= T - 5g\sin 30° = 29.4 - 24.5 = 4.9\,\mathrm{N}$ (which
is $\lt{} \mu R = 16.99\,\mathrm{N}$, confirming equilibrium).

**If you get this wrong, revise:**
[Friction and the direction of motion](#84-friction-and-the-direction-of-motion) — Section 8.4.

</details>
