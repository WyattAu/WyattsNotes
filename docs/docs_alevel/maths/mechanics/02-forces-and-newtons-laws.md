---
title: Forces and Newton's Laws
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

:::info
Always draw a clear free body diagram before writing any equations. The quality of your
diagram determines the quality of your solution.
:::

---

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

:::warning
Newton's Third Law pairs act on different bodies. The weight of a book on a table and the
normal reaction from the table are **not** a Third Law pair (both act on the book). The Third Law
pair of the weight is the gravitational pull of the book on the Earth.
:::

---

## 2. Types of Forces

### 2.1 Weight

$$W = mg$$

where $g \approx 9.8\,\text{m/s}^2$ (or $9.81$ on some boards). Weight acts vertically downward
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

---

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

---

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

:::warning
The friction force is not always $\mu R$. It adjusts to match the applied force up to the
maximum $\mu R$. Only use $F = \mu R$ when the body is sliding or about to slide.
:::

### 4.3 Angle of friction

The angle of friction $\lambda$ satisfies $\tan\lambda = \mu$. This is the steepest angle at which a
body can rest on an inclined plane without sliding.

**Proof.** On an inclined plane at angle $\alpha$:

- Driving force down slope: $mg\sin\alpha$
- Maximum friction up slope: $\mu R = \mu mg\cos\alpha$

On the point of sliding: $mg\sin\alpha = \mu mg\cos\alpha \implies \tan\alpha = \mu$. $\blacksquare$

---

## 5. Connected Particles

### 5.1 Two particles connected by a light inextensible string

For two particles of masses $m_1$ and $m_2$ connected over a smooth pulley:

**Method:**

1. Draw free body diagrams for each particle.
2. Apply $F = ma$ to each particle separately.
3. Use the constraint that both have the same acceleration magnitude (inextensible string).
4. Solve the simultaneous equations.

**Example.** Masses $5\,\text{kg}$ and $3\,\text{kg}$ hang vertically over a smooth pulley.

For $5\,\text{kg}$: $5g - T = 5a$. For $3\,\text{kg}$: $T - 3g = 3a$.

Adding: $2g = 8a \implies a = g/4 = 2.45\,\text{m/s}^2$. $T = 3(g/4 + g) = 15g/4 = 36.75\,\text{N}$.

### 5.2 On an inclined plane

The same method applies, but gravity must be resolved into components parallel and perpendicular to
the plane.

---

## 6. Pulleys

For a smooth, light pulley:

- The tension is the same on both sides of the string.
- The pulley only changes the direction of the tension.

---

## Problem Set

<details>
<summary>Problem 1</summary>
A body of mass $5\,\text{kg}$ is on a rough horizontal surface with $\mu = 0.4$. A horizontal force of $30\,\text{N}$ is applied. Find the acceleration.
</details>

<details>
<summary>Solution 1</summary>
$R = mg = 5(9.8) = 49\,\text{N}$. $F_{\max} = \mu R = 0.4(49) = 19.6\,\text{N}$.

Since $30 \gt{} 19.6$, the body slides. Friction $= 19.6\,\text{N}$ (opposing motion).

$F_{\text{net}} = 30 - 19.6 = 10.4\,\text{N}$. $a = F_{\text{net}}/m = 10.4/5 = 2.08\,\text{m/s}^2$.

**If you get this wrong, revise:** [Friction](#4-friction) — Section 4.
</details>

<details>
<summary>Problem 2</summary>
A block of mass $8\,\text{kg}$ rests on a smooth plane inclined at $30°$ to the horizontal. It is held in equilibrium by a force $P$ acting parallel to the plane. Find $P$.
</details>

<details>
<summary>Solution 2</summary>
Along the plane: $P = mg\sin 30° = 8(9.8)(0.5) = 39.2\,\text{N}$.

**If you get this wrong, revise:**
[Resolving on an Inclined Plane](#32-resolving-on-an-inclined-plane) — Section 3.2.
</details>

<details>
<summary>Problem 3</summary>
Masses of $6\,\text{kg}$ and $4\,\text{kg}$ are connected by a light inextensible string over a smooth pulley. Find the acceleration and the tension.
</details>

<details>
<summary>Solution 3</summary>
For $6\,\text{kg}$: $6g - T = 6a$. For $4\,\text{kg}$: $T - 4g = 4a$.

Adding: $2g = 10a \implies a = g/5 = 1.96\,\text{m/s}^2$.
$T = 4(1.96 + 9.8) = 4(11.76) = 47.04\,\text{N}$.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.
</details>

<details>
<summary>Problem 4</summary>
A block of mass $10\,\text{kg}$ is on a rough surface with $\mu = 0.3$. Find the minimum horizontal force required to move the block.
</details>

<details>
<summary>Solution 4</summary>
$R = 10g = 98\,\text{N}$. $F_{\max} = 0.3(98) = 29.4\,\text{N}$.

Minimum force $= 29.4\,\text{N}$.

**If you get this wrong, revise:** [The Friction Model](#41-the-friction-model) — Section 4.1.
</details>

<details>
<summary>Problem 5</summary>
A $5\,\text{kg}$ block is on a rough plane inclined at $40°$ with $\mu = 0.25$. Is the block in equilibrium? If not, find its acceleration.
</details>

<details>
<summary>Solution 5</summary>
$R = mg\cos 40° = 5(9.8)(0.766) = 37.53\,\text{N}$.
$F_{\max} = 0.25(37.53) = 9.38\,\text{N}$.
Force down slope: $mg\sin 40° = 5(9.8)(0.643) = 31.49\,\text{N}$.

Since $31.49 \gt{} 9.38$, the block slides. $a = (31.49 - 9.38)/5 = 22.11/5 = 4.42\,\text{m/s}^2$.

**If you get this wrong, revise:**
[Resolving on an Inclined Plane](#32-resolving-on-an-inclined-plane) — Section 3.2.
</details>

<details>
<summary>Problem 6</summary>
A particle of mass $2\,\text{kg}$ is on a smooth horizontal table. It is connected by a light string passing over a smooth pulley at the edge to a particle of mass $5\,\text{kg}$ hanging freely. Find the acceleration and tension.
</details>

<details>
<summary>Solution 6</summary>
For $5\,\text{kg}$: $5g - T = 5a$. For $2\,\text{kg}$ (horizontal): $T = 2a$.

$5g - 2a = 5a \implies 5g = 7a \implies a = 5g/7 = 7\,\text{m/s}^2$. $T = 2(7) = 14\,\text{N}$.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.
</details>

<details>
<summary>Problem 7</summary>
A $3\,\text{kg}$ block on a rough horizontal surface ($\mu = 0.5$) is pulled by a force of $25\,\text{N}$ at $30°$ above the horizontal. Find the acceleration.
</details>

<details>
<summary>Solution 7</summary>
Vertical: $R + 25\sin 30° = 3g \implies R = 29.4 - 12.5 = 16.9\,\text{N}$.
$F_{\max} = 0.5(16.9) = 8.45\,\text{N}$.
Horizontal: $25\cos 30° - 8.45 = 3a \implies 21.65 - 8.45 = 3a \implies a = 4.4\,\text{m/s}^2$.

**If you get this wrong, revise:** [Free Body Diagrams](#3-free-body-diagrams-and-resolving-forces)
— Section 3.
</details>

<details>
<summary>Problem 8</summary>
A lift of mass $500\,\text{kg}$ carries a person of mass $70\,\text{kg}$. Find the tension in the cable when the lift accelerates upward at $2\,\text{m/s}^2$. Find the apparent weight of the person.
</details>

<details>
<summary>Solution 8</summary>
Total mass $= 570\,\text{kg}$. $T - 570g = 570(2) \implies T = 570(9.8+2) = 570(11.8) = 6726\,\text{N}$.

Person: $R - 70g = 70(2) \implies R = 70(11.8) = 826\,\text{N}$ (apparent weight).

**If you get this wrong, revise:** [Newton's Second Law](#12-newtons-second-law) — Section 1.2.
</details>

<details>
<summary>Problem 9</summary>
Two particles of masses $m$ and $3m$ are connected by a light inextensible string over a smooth pulley. The system is released from rest. Find the time for the heavier mass to descend $2\,\text{m}$.
</details>

<details>
<summary>Solution 9</summary>
$3mg - T = 3ma$, $T - mg = ma$. Adding: $2mg = 4ma \implies a = g/2$.

$s = \tfrac{1}{2}at^2 \implies 2 = \tfrac{1}{2}(g/2)t^2 \implies t^2 = 8/g \implies t = \sqrt{8/9.8} \approx 0.904\,\text{s}$.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.
</details>

<details>
<summary>Problem 10</summary>
A block slides down a rough slope of length $10\,\text{m}$ inclined at $35°$ with $\mu = 0.2$. If it starts from rest, find its speed at the bottom.
</details>

<details>
<summary>Solution 10</summary>
$a = g(\sin 35° - \mu\cos 35°) = 9.8(0.574 - 0.2 \times 0.819) = 9.8(0.574 - 0.164) = 9.8(0.410) = 4.02\,\text{m/s}^2$.

$v^2 = u^2 + 2as = 0 + 2(4.02)(10) = 80.4 \implies v \approx 8.97\,\text{m/s}$.

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
A $4\,\text{kg}$ block on a rough inclined plane ($\mu = 0.3$, angle $= 50°$) is attached to a $2\,\text{kg}$ block hanging freely over a pulley at the top. Find the acceleration.
</details>

<details>
<summary>Solution 12</summary>
For $4\,\text{kg}$ down slope: $4g\sin 50° - T - \mu(4g\cos 50°) = 4a$.
$4(9.8)(0.766) - T - 0.3(4)(9.8)(0.643) = 4a$
$30.03 - T - 7.54 = 4a \implies 22.49 - T = 4a$.

For $2\,\text{kg}$: $T - 2g = 2a \implies T = 2(9.8+a) = 19.6 + 2a$.

$22.49 - 19.6 - 2a = 4a \implies 2.89 = 6a \implies a = 0.482\,\text{m/s}^2$.

The $4\,\text{kg}$ block accelerates down the slope.

**If you get this wrong, revise:** [Connected Particles](#5-connected-particles) — Section 5.
</details>

:::

:::

:::
