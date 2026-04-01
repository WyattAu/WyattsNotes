---
title: Dynamics
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: dynamics
---

## Dynamics

:::info Board Coverage
AQA Paper 1 | Edexcel CP1, CP2 | OCR (A) Paper 1 | CIE P2
:::

## 1. Newton's Laws of Motion

Newton's three laws form the foundation of classical mechanics. They were first published in the _Principia Mathematica_ (1687).

### Newton's First Law (Law of Inertia)

> **Every body continues in its state of rest or uniform motion in a straight line unless acted upon by a net external force.**

**Intuition.** This law defines what a force _is_ — it is that which changes motion. An object does not need a force to keep moving; it needs a force to _stop_ moving. This was revolutionary: Aristotle believed that force was necessary to _maintain_ motion.

### Newton's Second Law

> **The rate of change of momentum of a body is directly proportional to the net external force acting on it, and takes place in the direction of that force.**

$$\mathbf{F}_{\text{net}} = \frac{d\mathbf{p}}{dt} = \frac{d(m\mathbf{v})}{dt}$$

For constant mass:

$$\boxed{\mathbf{F}_{\text{net}} = m\mathbf{a}}$$

This is the most important equation in mechanics. It states that force, mass, and acceleration are related by a simple proportionality.

**Units.** The newton is defined as the force required to accelerate a mass of 1 kg at 1 m s$^{-2}$: $1 \text{ N} = 1 \text{ kg m s}^{-2}$.

### Newton's Third Law

> **If body A exerts a force on body B, then body B exerts an equal and opposite force on body A.**

$$\mathbf{F}_{AB} = -\mathbf{F}_{BA}$$

:::warning Common Pitfall
The two forces in a Newton's third law pair act on **different bodies**. They do **not** cancel. The normal reaction from a table on a book and the book's weight are **not** a third law pair (both act on the book). The third law pair of the book's weight is the gravitational pull of the book on the Earth.
:::

## 2. Weight and Mass

**Definition.** The **mass** $m$ of a body is a measure of its inertia — its resistance to acceleration. Mass is a scalar, measured in kg. It is an intrinsic property of an object.

**Definition.** The **weight** $W$ of a body is the gravitational force acting on it.

$$W = mg$$

**Derivation.** By Newton's second law, the gravitational force on a mass $m$ in a gravitational field of strength $g$ is:

$$F = ma \implies W = mg$$

where $g$ is the gravitational field strength (approximately $9.81$ N kg$^{-1}$ near Earth's surface).

**Intuition.** Mass is the same everywhere in the universe. Weight depends on location. An astronaut on the Moon has the same mass but one-sixth the weight.

## 3. Free Body Diagrams

A **free body diagram** (FBD) is a diagram showing all the forces acting on a single body, drawn as arrows originating from the body's centre of mass.

**Rules:**

1. Include only forces acting **on** the body (not by the body).
2. Represent each force as an arrow in the direction of the force.
3. The length of the arrow should be proportional to the magnitude.
4. Label each force clearly.

Common forces: weight ($mg$), normal reaction ($R$), friction ($F_f$), tension ($T$), drag ($F_d$), thrust.

## 4. Resolving Forces in Two Dimensions

When forces are not collinear, we resolve them into perpendicular components (typically horizontal and vertical).

**Condition for equilibrium** (Newton's first law):

$$\sum F_x = 0 \quad \text{and} \quad \sum F_y = 0$$

**Condition for acceleration** (Newton's second law):

$$\sum F_x = ma_x \quad \text{and} \quad \sum F_y = ma_y$$

<details>
<summary>Example: Inclined Plane</summary>
<p>

A block of mass $m$ rests on a plane inclined at angle $\alpha$ to the horizontal. Find the acceleration down the plane, assuming no friction.

**Answer.** Resolving perpendicular to the plane: $R = mg\cos\alpha$.

Resolving parallel to the plane (taking down-plane as positive): $mg\sin\alpha = ma$.

$$a = g\sin\alpha$$

</p>
</details>

## 5. Friction

### Static Friction

When two surfaces are in contact but not sliding relative to each other, the friction force adjusts to prevent motion, up to a maximum:

$$F_s \leq \mu_s R$$

where $\mu_s$ is the **coefficient of static friction** and $R$ is the normal reaction.

### Dynamic (Kinetic) Friction

When sliding occurs, the friction force is:

$$F_d = \mu_d R$$

where $\mu_d$ is the **coefficient of dynamic friction**. In general, $\mu_d < \mu_s$ — it is harder to start an object moving than to keep it moving.

### Microscopic Origin

Friction arises from intermolecular bonds forming between the irregularities (asperities) of the two surfaces. At the microscopic level, the real area of contact is much smaller than the apparent area, but the contact pressure is enormous, causing cold welding. To slide, these bonds must be broken — this requires force.

**Intuition.** Friction is independent of the apparent area of contact (since the real contact area adjusts proportionally to the load) and independent of sliding speed (approximately). It is proportional to the normal force because a greater normal force creates more contact points.

## 6. Connected Particles

### Pulleys: The Atwood Machine

Consider two masses $m_1$ and $m_2$ ($m_1 > m_2$) connected by a light inextensible string over a smooth pulley.

**Assumptions:** The string is light (massless) and inextensible, the pulley is smooth (frictionless).

Since the string is inextensible, both masses have the same acceleration magnitude $a$ and same speed.

For mass $m_1$ (descending, taking downward as positive):

$$m_1 g - T = m_1 a \quad \text{...(i)}$$

For mass $m_2$ (ascending, taking upward as positive):

$$T - m_2 g = m_2 a \quad \text{...(ii)}$$

Adding (i) and (ii):

$$m_1 g - m_2 g = (m_1 + m_2)a$$

$$\boxed{a = \frac{(m_1 - m_2)g}{m_1 + m_2}}$$

Substituting back into (i):

$$T = m_1(g - a) = m_1 g\left(1 - \frac{m_1 - m_2}{m_1 + m_2}\right) = \frac{2m_1 m_2 g}{m_1 + m_2}$$

$$\boxed{T = \frac{2m_1 m_2 g}{m_1 + m_2}}$$

### Lifts (Apparent Weight)

A person of mass $m$ stands on a weighing scale in a lift.

**Case 1: Lift accelerating upward at $a$.**

For the person (taking upward as positive):

$$R - mg = ma \implies R = m(g + a)$$

The apparent weight $R$ is **greater** than the true weight $mg$.

**Case 2: Lift accelerating downward at $a$.**

$$mg - R = ma \implies R = m(g - a)$$

The apparent weight is **less** than the true weight. If $a = g$, then $R = 0$ — the person experiences **weightlessness**.

**Case 3: Constant velocity (or at rest).**

$R = mg$ — the apparent weight equals the true weight.

## 7. Terminal Velocity

When an object falls through a fluid, it experiences a drag force that increases with speed.

### Linear Drag Model

For low speeds (e.g., small objects in viscous fluids), Stokes' drag applies: $F_d = kv$.

Applying Newton's second law (taking downward as positive):

$$mg - kv = ma$$

$$ma = mg - kv \implies \frac{dv}{dt} = g - \frac{k}{m}v$$

This is a first-order linear ODE. At **terminal velocity**, $a = 0$:

$$mg - kv_T = 0 \implies \boxed{v_T = \frac{mg}{k}}$$

### Solving the ODE

Rewrite: $\frac{dv}{dt} = \frac{k}{m}(v_T - v)$ where $v_T = mg/k$.

$$\int_0^v \frac{dv'}{v_T - v'} = \int_0^t \frac{k}{m}\,dt'$$

$$-\ln\left(\frac{v_T - v}{v_T}\right) = \frac{kt}{m}$$

$$\frac{v_T - v}{v_T} = e^{-kt/m}$$

$$\boxed{v(t) = v_T\left(1 - e^{-kt/m}\right)}$$

**Intuition.** The velocity starts at zero and asymptotically approaches $v_T$. The exponential approach means the object gets close to terminal velocity quickly but never quite reaches it in finite time. The time constant is $\tau = m/k$.

### Quadratic Drag Model

At higher speeds (e.g., a skydiver in air), drag is proportional to $v^2$: $F_d = kv^2$.

$$mg - kv^2 = ma$$

At terminal velocity: $v_T = \sqrt{\frac{mg}{k}}$.

:::info Board Note
CIE and Edexcel may expect you to know both drag models qualitatively. AQA focuses on the qualitative description of terminal velocity.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

A block of mass $5.0$ kg rests on a rough horizontal surface with $\mu_s = 0.4$ and $\mu_d = 0.3$. A horizontal force of $25$ N is applied. Determine whether the block moves and, if so, find its acceleration.

**Answer.** Maximum static friction: $F_s = \mu_s R = 0.4 \times 5.0 \times 9.81 = 19.6$ N. Since the applied force $25$ N $> 19.6$ N, the block moves.

Dynamic friction: $F_d = 0.3 \times 49.05 = 14.7$ N.

Net force: $25 - 14.7 = 10.3$ N. Acceleration: $a = 10.3/5.0 = 2.1$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Friction](#5-friction)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

In an Atwood machine, $m_1 = 8.0$ kg and $m_2 = 5.0$ kg. Find the acceleration and the tension in the string.

**Answer.** $a = \frac{(8.0 - 5.0) \times 9.81}{8.0 + 5.0} = \frac{29.43}{13.0} = 2.26$ m s$^{-2}$.

$T = \frac{2 \times 8.0 \times 5.0 \times 9.81}{13.0} = \frac{784.8}{13.0} = 60.4$ N.

<b>If you get this wrong, revise:</b> [Pulleys: The Atwood Machine](#pulleys-the-atwood-machine)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

A person of mass $70$ kg stands on a scale in a lift. The lift accelerates upward at $2.0$ m s$^{-2}$ for 3 s, then travels at constant velocity for 4 s, then decelerates at $3.0$ m s$^{-2}$ to rest. Calculate the scale reading in each phase.

**Answer.** Phase 1 (accelerating up): $R = 70(9.81 + 2.0) = 70 \times 11.81 = 827$ N.

Phase 2 (constant velocity): $R = 70 \times 9.81 = 687$ N.

Phase 3 (decelerating, i.e., accelerating downward): $R = 70(9.81 - 3.0) = 70 \times 6.81 = 477$ N.

<b>If you get this wrong, revise:</b> [Lifts (Apparent Weight)](#lifts-apparent-weight)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A block of mass $4.0$ kg is placed on a smooth inclined plane at $30°$ to the horizontal. Find the acceleration of the block down the plane.

**Answer.** Resolving parallel to the plane: $mg\sin 30° = ma$, so $a = g\sin 30° = 9.81 \times 0.5 = 4.91$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A raindrop of mass $2.0 \times 10^{-5}$ kg falls through air with drag proportional to $v^2$. If the terminal velocity is $9.0$ m s$^{-1}$, find the drag constant $k$.

**Answer.** At terminal velocity: $mg = kv_T^2$. $k = \frac{mg}{v_T^2} = \frac{2.0 \times 10^{-5} \times 9.81}{81} = 2.4 \times 10^{-6}$ N s$^2$ m$^{-2}$.

<b>If you get this wrong, revise:</b> [Quadratic Drag Model](#quadratic-drag-model)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Two forces, $\mathbf{F}_1 = (3\mathbf{i} + 4\mathbf{j})$ N and $\mathbf{F}_2 = (-\mathbf{i} + 2\mathbf{j})$ N, act on a body of mass $2.0$ kg. Find the magnitude and direction of the acceleration.

**Answer.** $\mathbf{F}_{\text{net}} = (3-1)\mathbf{i} + (4+2)\mathbf{j} = (2\mathbf{i} + 6\mathbf{j})$ N. $\mathbf{a} = \frac{1}{2}(2\mathbf{i} + 6\mathbf{j}) = (1\mathbf{i} + 3\mathbf{j})$ m s$^{-2}$. $|\mathbf{a}| = \sqrt{1 + 9} = \sqrt{10} = 3.16$ m s$^{-2}$. Direction: $\theta = \arctan(3/1) = 71.6°$ from the $x$-axis.

<b>If you get this wrong, revise:</b> [Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A block slides down a rough inclined plane at $25°$ to the horizontal. If $\mu_d = 0.2$, find the acceleration.

**Answer.** Resolving parallel (down-plane positive): $mg\sin 25° - F_d = ma$. Resolving perpendicular: $R = mg\cos 25°$. So $F_d = 0.2mg\cos 25°$.

$a = g(\sin 25° - 0.2\cos 25°) = 9.81(0.4226 - 0.1813) = 9.81 \times 0.2413 = 2.37$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Friction](#5-friction) and [Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A $60$ kg woman is in a lift that is moving downward at $3.0$ m s$^{-1}$ and decelerating at $1.5$ m s$^{-2}$ (i.e., slowing down). What does the scale read?

**Answer.** The lift is decelerating while moving downward, so the acceleration is **upward**. $R - mg = ma$ where $a = 1.5$ m s$^{-2}$ upward.

$R = 60(9.81 + 1.5) = 60 \times 11.31 = 679$ N.

<b>If you get this wrong, revise:</b> [Lifts (Apparent Weight)](#lifts-apparent-weight)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

Two blocks, $m_1 = 3.0$ kg and $m_2 = 5.0$ kg, are in contact on a frictionless horizontal surface. A horizontal force of $24$ N pushes on $m_1$. Find: (a) the acceleration of the system, (b) the contact force between the blocks.

**Answer.** (a) $a = F/(m_1 + m_2) = 24/8.0 = 3.0$ m s$^{-2}$.

(b) For $m_2$ alone: the only horizontal force is the contact force $C$. $C = m_2 a = 5.0 \times 3.0 = 15$ N.

<b>If you get this wrong, revise:</b> [Newton's Second Law](#newtons-second-law)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

For the linear drag model $F_d = kv$, derive the time taken for a falling object to reach half its terminal velocity.

**Answer.** $v(t) = v_T(1 - e^{-kt/m})$. Setting $v = v_T/2$:

$\frac{1}{2} = 1 - e^{-kt/m} \implies e^{-kt/m} = \frac{1}{2} \implies -kt/m = \ln\frac{1}{2} = -\ln 2$.

$t = \frac{m \ln 2}{k}$. Since $\tau = m/k$, $t = \tau \ln 2 \approx 0.693\tau$.

<b>If you get this wrong, revise:</b> [Solving the ODE](#solving-the-ode)

</p>
</details>

<details>
<summary>Problem 11</summary>
<p>

Explain why the tension in a rope draped over a pulley is the same on both sides, assuming the pulley is smooth and light.

**Answer.** A smooth pulley exerts no friction on the rope, so the rope slides freely. A light pulley has zero moment of inertia, requiring zero net torque to rotate. Since the rope has the same tension throughout (no friction to create a difference), and the pulley requires no torque, Newton's second law for rotation ($\tau = I\alpha$) gives zero net torque, which is satisfied when $T_1 = T_2$.

<b>If you get this wrong, revise:</b> [Pulleys: The Atwood Machine](#pulleys-the-atwood-machine)

</p>
</details>

<details>
<summary>Problem 12</summary>
<p>

A crate of mass $20$ kg is pushed up a rough ramp inclined at $15°$ to the horizontal by a force of $120$ N acting parallel to the ramp. The coefficient of friction is $0.25$. Find the acceleration.

**Answer.** Resolving perpendicular: $R = mg\cos 15° = 20 \times 9.81 \times 0.966 = 189.5$ N.

Friction (opposing motion, so acting down the slope): $F_f = 0.25 \times 189.5 = 47.4$ N.

Resolving parallel (up the slope positive): $120 - mg\sin 15° - F_f = ma$.

$120 - 20 \times 9.81 \times 0.259 - 47.4 = 20a$.

$120 - 50.8 - 47.4 = 20a$. $21.8 = 20a$. $a = 1.09$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Friction](#5-friction) and [Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</p>
</details>
