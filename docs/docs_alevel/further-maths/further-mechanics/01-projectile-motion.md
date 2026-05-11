---
title: Projectile Motion
description:
  "A-Level Further Maths notes on Projectile Motion: Board Coverage; 1. Equations of Motion; 1.1 Setting up the problem; 1.2 Horizontal motion (constant velocity)."
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: projectile-motion
sidebar_position: 1
---

## Projectile Motion

Projectile motion is the motion of a body launched into the air and subject only to the acceleration
due to gravity. By resolving the initial velocity into horizontal and vertical components and
applying the equations of motion independently in each direction, the complete trajectory can be
determined.

### Board Coverage

| Board      | Paper   | Notes                                          |
| ---------- | ------- | ---------------------------------------------- |
| AQA        | Paper 2 | Basic projectiles; limited inclined plane work |
| Edexcel    | M2      | Full coverage including inclined planes        |
| OCR (A)    | Paper 2 | Projectiles on inclined planes                 |
| CIE (9231) | M2      | Full coverage including inclined planes        |

:::info
In projectile motion, air resistance is always neglected unless stated otherwise. The only
acceleration is $g = 9.8\,\mathrm{m s}^{-2}$ acting vertically downward. Take care with sign
conventions — define upward as positive at the start and be consistent.
:::

<hr />

## 1. Equations of Motion

### 1.1 Setting up the problem

A projectile is launched with speed $V$ at angle $\theta$ to the horizontal from the origin.

**Horizontal component:** $V_x = V\cos\theta$

**Vertical component:** $V_y = V\sin\theta$

Taking upward as positive, with horizontal axis $x$ and vertical axis $y$:

### 1.2 Horizontal motion (constant velocity)

Since there is no horizontal acceleration:

$$\boxed{x = V\cos\theta \cdot t}$$

$$\dot{x} = V\cos\theta$$

### 1.3 Vertical motion (uniform acceleration)

$$\boxed{y = V\sin\theta \cdot t - \frac{1}{2}gt^2}$$

$$\dot{y} = V\sin\theta - gt$$

$$\ddot{y} = -g$$

<hr />

## 2. The Trajectory Equation

### Proof that the trajectory is a parabola

### Proof

From the horizontal equation: $t = \dfrac{x}{V\cos\theta}$.

Substituting into the vertical equation:

$$
\begin{aligned}
y &= V\sin\theta \cdot \frac{x}{V\cos\theta} - \frac{1}{2}g\left(\frac{x}{V\cos\theta}\right)^2 \\[4pt]
&= x\tan\theta - \frac{gx^2}{2V^2\cos^2\theta}
\end{aligned}
$$

$$\boxed{y = x\tan\theta - \frac{gx^2}{2V^2\cos^2\theta}}$$

Since this has the form $y = ax - bx^2$ (with $a = \tan\theta$ and
$b = \frac{g}{2V^2\cos^2\theta}$), the trajectory is a parabola opening downward. $\blacksquare$

<hr />

## 3. Key Results

### 3.1 Time of flight

The projectile returns to $y = 0$ when:

$$V\sin\theta \cdot t - \frac{1}{2}gt^2 = 0 \implies t(V\sin\theta - \frac{1}{2}gt) = 0$$

$$\boxed{T = \frac{2V\sin\theta}{g}}$$

### 3.2 Maximum height

At maximum height, $\dot{y} = 0$:

$$V\sin\theta - gt_{\mathrm{max}} = 0 \implies t_{\mathrm{max}} = \frac{V\sin\theta}{g}$$

### Proof of maximum height

### Proof

$$
\begin{aligned}
H &= V\sin\theta \cdot \frac{V\sin\theta}{g} - \frac{1}{2}g\left(\frac{V\sin\theta}{g}\right)^2 \\
&= \frac{V^2\sin^2\theta}{g} - \frac{V^2\sin^2\theta}{2g}
\end{aligned}
$$

$$\boxed{H = \frac{V^2\sin^2\theta}{2g}}$$

This occurs at $x = V\cos\theta \cdot \dfrac{V\sin\theta}{g} = \dfrac{V^2\sin\theta\cos\theta}{g}$.
$\blacksquare$

### 3.3 Range on horizontal ground

### Proof of range formula

### Proof

$$R = V\cos\theta \cdot T = V\cos\theta \cdot \frac{2V\sin\theta}{g}$$

$$\boxed{R = \frac{V^2\sin 2\theta}{g}}$$

This is maximised when $\sin 2\theta = 1$, i.e., $\theta = 45^\circ$, giving
$R_{\max} = \dfrac{V^2}{g}$. $\blacksquare$

:::info
For a given speed $V$, complementary angles give the same range: $\theta$ and $90° - \theta$
both produce $R = \dfrac{V^2\sin 2\theta}{g}$. However, the trajectories are different — the steeper
angle gives a higher but shorter arc.
:::

<hr />

## 4. Projection on Inclined Planes

### 4.1 Up the plane

A plane is inclined at angle $\alpha$ to the horizontal. A projectile is launched at angle $\theta$
above the horizontal from the bottom of the plane.

The projectile lands on the plane when $y = x\tan\alpha$.

Setting $x\tan\alpha = x\tan\theta - \dfrac{gx^2}{2V^2\cos^2\theta}$:

$$x\left(\tan\theta - \tan\alpha\right) = \frac{gx^2}{2V^2\cos^2\theta}$$

$$\boxed{x = \frac{2V^2\cos^2\theta(\tan\theta - \tan\alpha)}{g}}$$

The **range on the plane** is $r = \dfrac{x}{\cos\alpha}$:

$$\boxed{r = \frac{2V^2\cos\theta\sin(\theta - \alpha)}{g\cos^2\alpha}}$$

### 4.2 Down the plane

When a projectile is launched from the top of a plane inclined at angle $\alpha$ below the
horizontal at angle $\theta$ above the horizontal, the landing condition is $y = -x\tan\alpha$:

$$-x\tan\alpha = x\tan\theta - \frac{gx^2}{2V^2\cos^2\theta}$$

$$\boxed{r = \frac{2V^2\cos\theta\sin(\theta + \alpha)}{g\cos^2\alpha}}$$

### 4.3 Maximum range on an inclined plane

### Proof for up the plane

For maximum range up the plane, maximise
$r = \dfrac{2V^2\cos\theta\sin(\theta-\alpha)}{g\cos^2\alpha}$.

Using the product-to-sum identity:
$\cos\theta\sin(\theta-\alpha) = \frac{1}{2}[\sin(2\theta-\alpha) - \sin\alpha]$.

This is maximised when $\sin(2\theta - \alpha) = 1$, giving:

$$2\theta - \alpha = 90° \implies \boxed{\theta = \frac{90° + \alpha}{2} = 45° + \frac{\alpha}{2}}$$

For down the plane: $\theta = 45° - \dfrac{\alpha}{2}$. $\blacksquare$

### 4.4 Using rotated coordinates

An alternative approach is to take axes parallel and perpendicular to the plane. With $s$ along the
plane and $n$ perpendicular:

- Component of gravity along the plane: $g\sin\alpha$ (down the plane)
- Component of gravity perpendicular to the plane: $g\cos\alpha$ (into the plane)

The projectile lands on the plane when $n = 0$.

<hr />

## 5. Velocity at Any Point

The velocity components at time $t$ are:

$$v_x = V\cos\theta, \qquad v_y = V\sin\theta - gt$$

The speed is $v = \sqrt{v_x^2 + v_y^2} = \sqrt{V^2\cos^2\theta + (V\sin\theta - gt)^2}$.

The direction of motion is at angle $\phi$ to the horizontal where:

$$\tan\phi = \frac{v_y}{v_x} = \frac{V\sin\theta - gt}{V\cos\theta} = \tan\theta - \frac{gt}{V\cos\theta}$$

<hr />

## Problems

<details>
<summary>Problem 1</summary>
A projectile is launched at $30\,\mathrm{m s}^{-1}$ at $50^\circ$ to the horizontal from ground level. Find the maximum height, time of flight, and range.
</details>

<details>
<summary>Solution 1</summary>
$V = 30$, $\theta = 50^\circ$, $g = 9.8$.

$H = \dfrac{V^2\sin^2\theta}{2g} = \dfrac{900\sin^2 50°}{19.6} = \dfrac{900 \times 0.5868}{19.6} \approx 26.94\,\mathrm{m}$.

$T = \dfrac{2V\sin\theta}{g} = \dfrac{60\sin 50°}{9.8} = \dfrac{45.96}{9.8} \approx 4.69\,\mathrm{s}$.

$R = \dfrac{V^2\sin 2\theta}{g} = \dfrac{900\sin 100°}{9.8} = \dfrac{900 \times 0.9848}{9.8} \approx 90.44\,\mathrm{m}$.

**If you get this wrong, revise:** [Key Results](#3-key-results) — Section 3.

</details>

<details>
<summary>Problem 2</summary>
Derive the trajectory equation $y = x\tan\theta - \dfrac{gx^2}{2V^2\cos^2\theta}$ from the equations of motion.
</details>

<details>
<summary>Solution 2</summary>
Horizontal: $x = V\cos\theta \cdot t \implies t = \dfrac{x}{V\cos\theta}$.

Vertical: $y = V\sin\theta \cdot t - \dfrac{1}{2}gt^2$.

Substituting:
$y = V\sin\theta \cdot \dfrac{x}{V\cos\theta} - \dfrac{1}{2}g\left(\dfrac{x}{V\cos\theta}\right)^2 = x\tan\theta - \dfrac{gx^2}{2V^2\cos^2\theta}$.
$\blacksquare$

**If you get this wrong, revise:** [The Trajectory Equation](#2-the-trajectory-equation) —
Section 2.

</details>

<details>
<summary>Problem 3</summary>
A projectile is launched from a cliff $80\,\mathrm{m}$ high at $20\,\mathrm{m s}^{-1}$ horizontally. Find the time to hit the ground and the horizontal distance travelled.
</details>

<details>
<summary>Solution 3</summary>
$\theta = 0^\circ$, so $v_x = 20$, $v_y = 0$.

$y = -\dfrac{1}{2}gt^2 = -80 \implies t^2 = \dfrac{160}{9.8} \implies t \approx 4.04\,\mathrm{s}$.

$x = 20 \times 4.04 \approx 80.8\,\mathrm{m}$.

**If you get this wrong, revise:** [Equations of Motion](#1-equations-of-motion) — Section 1.

</details>

<details>
<summary>Problem 4</summary>
Find the angle of projection for maximum range on an inclined plane of angle $30^\circ$ when projecting up the plane.
</details>

<details>
<summary>Solution 4</summary>
For maximum range up the plane: $\theta = 45° + \dfrac{\alpha}{2} = 45° + 15° = 60^\circ$.

The projectile should be launched at $60^\circ$ to the horizontal.

**If you get this wrong, revise:**
[Maximum range on an inclined plane](#43-maximum-range-on-an-inclined-plane) — Section 4.3.

</details>

<details>
<summary>Problem 5</summary>
A ball is thrown at $15\,\mathrm{m s}^{-1}$ from a height of $2\,\mathrm{m}$ at $40^\circ$ above the horizontal. Find the speed and angle when it hits the ground.
</details>

<details>
<summary>Solution 5</summary>
$y = 2 + 15\sin 40°\cdot t - 4.9t^2 = 0$.

$4.9t^2 - 9.642t - 2 = 0 \implies t = \dfrac{9.642 + \sqrt{93.17 + 39.2}}{9.8} = \dfrac{9.642 + 11.47}{9.8} \approx 2.162\,\mathrm{s}$.

$v_y = 15\sin 40° - 9.8(2.162) = 9.642 - 21.19 = -11.55\,\mathrm{m s}^{-1}$.

$v_x = 15\cos 40° = 11.49\,\mathrm{m s}^{-1}$.

Speed
$= \sqrt{11.49^2 + 11.55^2} = \sqrt{132.0 + 133.4} = \sqrt{265.4} \approx 16.3\,\mathrm{m s}^{-1}$.

Angle below horizontal: $\arctan(11.55/11.49) \approx 45.1^\circ$.

**If you get this wrong, revise:** [Velocity at Any Point](#5-velocity-at-any-point) — Section 5.

</details>

<details>
<summary>Problem 6</summary>
A projectile is launched at $25\,\mathrm{m s}^{-1}$ at $35^\circ$ up a plane inclined at $20^\circ$ to the horizontal. Find the range on the plane.
</details>

<details>
<summary>Solution 6</summary>
$r = \dfrac{2V^2\cos\theta\sin(\theta-\alpha)}{g\cos^2\alpha} = \dfrac{2(625)\cos 35°\sin 15°}{9.8\cos^2 20°}$

$= \dfrac{1250 \times 0.8192 \times 0.2588}{9.8 \times 0.8830} = \dfrac{265.1}{8.653} \approx 30.6\,\mathrm{m}$.

**If you get this wrong, revise:** [Up the plane](#41-up-the-plane) — Section 4.1.

</details>

<details>
<summary>Problem 7</summary>
Show that for a given initial speed $V$, the maximum range on horizontal ground is $\dfrac{V^2}{g}$ and occurs at $\theta = 45^\circ$.
</details>

<details>
<summary>Solution 7</summary>
$R = \dfrac{V^2\sin 2\theta}{g}$. The maximum value of $\sin 2\theta$ is 1, occurring when $2\theta = 90^\circ$, so $\theta = 45^\circ$.

$R_{\max} = \dfrac{V^2 \times 1}{g} = \dfrac{V^2}{g}$. $\blacksquare$

**If you get this wrong, revise:** [Range on horizontal ground](#33-range-on-horizontal-ground) —
Section 3.3.

</details>

<details>
<summary>Problem 8</summary>
A cricketer hits a ball at $28\,\mathrm{m s}^{-1}$ at $35^\circ$ to the horizontal. A fielder stands $60\,\mathrm{m}$ away. Can the fielder catch the ball at the same height?
</details>

<details>
<summary>Solution 8</summary>
$R = \dfrac{28^2\sin 70°}{9.8} = \dfrac{784 \times 0.9397}{9.8} = \dfrac{736.7}{9.8} \approx 75.2\,\mathrm{m}$.

Since $75.2 > 60\,\mathrm{m}$, the ball travels beyond the fielder. Check height at $x = 60$:

$y = 60\tan 35° - \dfrac{9.8 \times 3600}{2 \times 784 \times \cos^2 35°} = 42.02 - \dfrac{35280}{2 \times 784 \times 0.6710} = 42.02 - \dfrac{35280}{1051.9}$

$= 42.02 - 33.54 = 8.48\,\mathrm{m}$.

The ball is at height $8.48\,\mathrm{m}$ when it passes $x = 60\,\mathrm{m}$, so the fielder cannot
catch it at the same height.

**If you get this wrong, revise:** [The Trajectory Equation](#2-the-trajectory-equation) —
Section 2.

</details>

<details>
<summary>Problem 9</summary>
A projectile is launched from the top of an incline of angle $25^\circ$ at $20\,\mathrm{m s}^{-1}$ at angle $30^\circ$ to the horizontal, directed down the plane. Find the range on the plane.
</details>

<details>
<summary>Solution 9</summary>
$r = \dfrac{2V^2\cos\theta\sin(\theta+\alpha)}{g\cos^2\alpha} = \dfrac{2(400)\cos 30°\sin 55°}{9.8\cos^2 25°}$

$= \dfrac{800 \times 0.8660 \times 0.8192}{9.8 \times 0.8214} = \dfrac{567.5}{8.050} \approx 70.5\,\mathrm{m}$.

**If you get this wrong, revise:** [Down the plane](#42-down-the-plane) — Section 4.2.

</details>

<details>
<summary>Problem 10</summary>
A projectile passes through two points at $(20, 5)$ and $(40, 5)$ (in metres). Find the angle of projection and the initial speed, given $g = 9.8\,\mathrm{m s}^{-2}$.
</details>

<details>
<summary>Solution 10</summary>
From the trajectory equation at both points:

$5 = 20\tan\theta - \dfrac{9.8 \times 400}{2V^2\cos^2\theta}$ ... (i)

$5 = 40\tan\theta - \dfrac{9.8 \times 1600}{2V^2\cos^2\theta}$ ... (ii)

From (ii) $-$ (i): $0 = 20\tan\theta - \dfrac{9.8 \times 1200}{2V^2\cos^2\theta}$.

$\tan\theta = \dfrac{9.8 \times 1200}{2V^2\cos^2\theta \times 20} = \dfrac{588}{V^2\cos^2\theta}$.

From (i):
$5 = 20\tan\theta - \dfrac{1960}{V^2\cos^2\theta} = 20\tan\theta - \dfrac{1960}{588}\tan\theta = \tan\theta\left(20 - \dfrac{10}{3}\right) = \dfrac{50}{3}\tan\theta$.

$\tan\theta = \dfrac{15}{50} = 0.3$, so $\theta \approx 16.7^\circ$.

$V^2\cos^2\theta = \dfrac{588}{0.3} = 1960$.
$V^2 = \dfrac{1960}{\cos^2 16.7°} = \dfrac{1960}{0.9163} \approx 2139$.
$V \approx 46.3\,\mathrm{m s}^{-1}$.

**If you get this wrong, revise:** [The Trajectory Equation](#2-the-trajectory-equation) —
Section 2.

</details>

<hr />

## 6. Maximum Range: Rigorous Proof from the Trajectory Equation

### Proof

Starting from the trajectory equation, the projectile lands when $y = 0$:

$$0 = R\tan\theta - \frac{gR^2}{2V^2\cos^2\theta}$$

Either $R = 0$ (the launch point) or:

$$\tan\theta = \frac{gR}{2V^2\cos^2\theta} = \frac{gR\sec^2\theta}{2V^2} = \frac{gR}{2V^2\cos^2\theta}$$

Solving for $R$:

$$R = \frac{2V^2\cos^2\theta\tan\theta}{g} = \frac{2V^2\sin\theta\cos\theta}{g} = \frac{V^2\sin 2\theta}{g}$$

To maximise, differentiate with respect to $\theta$ and set to zero:

$$\frac{dR}{d\theta} = \frac{V^2}{g}\cdot 2\cos 2\theta = 0 \implies \cos 2\theta = 0 \implies 2\theta = 90° \implies \theta = 45^\circ$$

Second derivative check:

$$\frac{d^2R}{d\theta^2} = \frac{V^2}{g}\cdot(-4\sin 2\theta) \bigg|_{\theta = 45°} = \frac{V^2}{g}(-4) \lt{} 0 \quad \checkmark$$

So the maximum is confirmed. Substituting $\theta = 45^\circ$:

$$R_{\max} = \frac{V^2\sin 90°}{g} = \frac{V^2}{g}$$

<hr />

## 7. Projectile from a Height: Full Trajectory Analysis

### 7.1 Time of flight from height $h$

A projectile is launched from height $h$ above ground level with speed $V$ at angle $\theta$ above
the horizontal. Taking upward as positive with origin at the launch point:

$$y = V\sin\theta \cdot t - \frac{1}{2}gt^2$$

The projectile hits the ground when $y = -h$:

$$V\sin\theta \cdot t - \frac{1}{2}gt^2 = -h$$

$$\frac{1}{2}gt^2 - V\sin\theta \cdot t - h = 0$$

Using the quadratic formula (taking the positive root):

$$\boxed{T = \frac{V\sin\theta + \sqrt{V^2\sin^2\theta + 2gh}}{g}}$$

### 7.2 Range from a height

$$R = V\cos\theta \cdot T = \frac{V\cos\theta\left(V\sin\theta + \sqrt{V^2\sin^2\theta + 2gh}\right)}{g}$$

### 7.3 Maximum height above launch point

The maximum height above the launch point is unchanged from the ground-level case:

$$H_{\mathrm{above launch}} = \frac{V^2\sin^2\theta}{2g}$$

The maximum height above ground level is $h + \dfrac{V^2\sin^2\theta}{2g}$.

### 7.4 Angle for maximum range from a height

For maximum range from a height, the optimal angle is **less than** $45^\circ$. The exact value
satisfies:

$$\theta = \arctan\!\left(\frac{V}{\sqrt{V^2 + 2gh}}\right)$$

### Proof

### Proof

Maximise $R = V\cos\theta\cdot T$ where $T$ is given above. Equivalently, maximise:

$$R(\theta) = \frac{V^2\sin\theta\cos\theta + V\cos\theta\sqrt{V^2\sin^2\theta + 2gh}}{g}$$

Let $u = \sin\theta$. Then $\cos\theta = \sqrt{1 - u^2}$ and we maximise:

$$R(u) \propto u\sqrt{1-u^2} + \sqrt{1-u^2}\sqrt{V^2 u^2 + 2gh}$$

Differentiating and simplifying leads to the condition $\cos\theta = \dfrac{V}{\sqrt{V^2 + 2gh}}$,
i.e.:

$$\tan\theta = \frac{V\sin\theta}{V\cos\theta} = \frac{V\sqrt{1 - \frac{V^2}{V^2 + 2gh}}}{\frac{V^2}{\sqrt{V^2 + 2gh}}} = \frac{V}{\sqrt{V^2 + 2gh}}$$

When $h = 0$, this reduces to $\tan\theta = 1$, i.e., $\theta = 45^\circ$ as expected.
$\blacksquare$

### 7.5 Worked example: projectile from a cliff

**Example.** A stone is thrown from a cliff $50\,\mathrm{m}$ high at $15\,\mathrm{m s}^{-1}$ at
$30^\circ$ above the horizontal. Find the time of flight, the horizontal range, the maximum height
above ground, and the speed and direction of impact.

**Time of flight:**

$$T = \frac{15\sin 30° + \sqrt{15^2\sin^2 30° + 2(9.8)(50)}}{9.8}$$

$$= \frac{7.5 + \sqrt{56.25 + 980}}{9.8} = \frac{7.5 + \sqrt{1036.25}}{9.8} = \frac{7.5 + 32.19}{9.8} \approx 4.05\,\mathrm{s}$$

**Range:** $R = 15\cos 30° \times 4.05 \approx 12.99 \times 4.05 \approx 52.6\,\mathrm{m}$.

**Maximum height above ground:**
$50 + \dfrac{15^2\sin^2 30°}{2(9.8)} = 50 + \dfrac{56.25}{19.6} \approx 50 + 2.87 = 52.87\,\mathrm{m}$.

**Speed at impact:**

$v_x = 15\cos 30° = 12.99\,\mathrm{m s}^{-1}$.

$v_y = 15\sin 30° - 9.8(4.05) = 7.5 - 39.69 = -32.19\,\mathrm{m s}^{-1}$.

Speed
$= \sqrt{12.99^2 + 32.19^2} = \sqrt{168.7 + 1036.2} = \sqrt{1204.9} \approx 34.7\,\mathrm{m s}^{-1}$.

**Angle below horizontal:** $\arctan(32.19/12.99) \approx 68.1^\circ$.

<hr />

## 8. Worked Example: Range on an Inclined Plane

**Example.** A projectile is launched at $30\,\mathrm{m s}^{-1}$ at $55^\circ$ to the horizontal up
a plane inclined at $20^\circ$. Find the range on the plane and the time of flight.

Using the range formula:

$$r = \frac{2V^2\cos\theta\sin(\theta - \alpha)}{g\cos^2\alpha} = \frac{2(900)\cos 55°\sin 35°}{9.8\cos^2 20°}$$

$$= \frac{1800 \times 0.5736 \times 0.5736}{9.8 \times 0.8830} = \frac{592.4}{8.653} \approx 68.5\,\mathrm{m}$$

Time of flight: the projectile lands when $y = x\tan 20^\circ$.

From the trajectory equation:

$$x = \frac{2V^2\cos^2\theta(\tan\theta - \tan\alpha)}{g} = \frac{2(900)\cos^2 55°(\tan 55° - \tan 20°)}{9.8}$$

$$= \frac{1800 \times 0.3290 \times (1.4281 - 0.3640)}{9.8} = \frac{1800 \times 0.3290 \times 1.0641}{9.8} \approx 64.3\,\mathrm{m}$$

$$T = \frac{x}{V\cos\theta} = \frac{64.3}{30\cos 55°} = \frac{64.3}{17.21} \approx 3.74\,\mathrm{s}$$

<hr />

## 9. Time of Flight Derivation for Inclined Planes

### 9.1 Up the plane

The horizontal distance at landing is $x = \dfrac{2V^2\cos^2\theta(\tan\theta - \tan\alpha)}{g}$.

Since $x = V\cos\theta \cdot T$:

$$\boxed{T = \frac{2V\cos\theta(\tan\theta - \tan\alpha)}{g} = \frac{2V\sin(\theta - \alpha)}{g\cos\alpha}}$$

### 9.2 Down the plane

Similarly:

$$\boxed{T = \frac{2V\cos\theta(\tan\theta + \tan\alpha)}{g} = \frac{2V\sin(\theta + \alpha)}{g\cos\alpha}}$$

<hr />

## 10. Common Pitfalls

### Sign conventions

The most common error in projectile motion is inconsistent sign conventions. If you define upward as
positive, then:

- $g$ appears as $-g$ in the acceleration, giving $y = V\sin\theta\cdot t - \frac{1}{2}gt^2$
- A projectile landing **below** the launch point has $y = -h$ at impact, **not** $y = h$
- The final vertical velocity is **negative** when the projectile is moving downward

If you define downward as positive, then $g$ is positive but $V\sin\theta$ becomes negative for
upward projection. Pick one convention and stick with it throughout the entire problem.

### Inclined plane angle confusion

When working with inclined planes, the angle $\alpha$ is the angle of the **plane** to the
horizontal, not the angle of projection. Common mistakes:

- Confusing $\theta$ (projection angle) with $\alpha$ (plane angle)
- Using $\theta - \alpha$ for the down-the-plane case (should be $\theta + \alpha$)
- Forgetting that the range formula $r = x/\cos\alpha$ converts horizontal distance to distance
  along the plane

### Complementary angles trap

Two angles $\theta$ and $90° - \theta$ give the **same range** but **different trajectories**. The
steeper angle:

- Reaches a greater maximum height
- Has a longer time of flight
- Has a smaller horizontal component of velocity at every point

If an exam question asks about the trajectory (height, time, speed at a specific point), the
complementary angle will give a different answer even though the range is the same.

### Forgetting to check physical constraints

Always check that your answer makes physical sense:

- Range should be positive
- Time of flight should be positive
- The speed at impact from a height must exceed the launch speed (energy gained from gravity)
- The angle of impact should be steeper than the angle of projection (for horizontal ground
  launches)

<hr />

## 11. Problem Set

<details>
<summary>Q1. A projectile is launched from ground level at $25\,\mathrm{m s}^{-1}$. Find the two angles that give a range of $50\,\mathrm{m}$, and for each angle find the maximum height and time of flight.</summary>

$R = \dfrac{V^2\sin 2\theta}{g} \implies 50 = \dfrac{625\sin 2\theta}{9.8} \implies \sin 2\theta = \dfrac{490}{625} = 0.784$.

$2\theta = 51.6^\circ$ or $128.4^\circ$, so $\theta = 25.8^\circ$ or $64.2^\circ$.

For $\theta = 25.8^\circ$: $H = \dfrac{625\sin^2 25.8°}{19.6} \approx 5.83\,\mathrm{m}$,
$T = \dfrac{50\sin 25.8°}{9.8} \approx 2.19\,\mathrm{s}$.

For $\theta = 64.2^\circ$: $H = \dfrac{625\sin^2 64.2°}{19.6} \approx 25.8\,\mathrm{m}$,
$T = \dfrac{50\sin 64.2°}{9.8} \approx 4.61\,\mathrm{s}$.

</details>

<details>
<summary>Q2. A ball is thrown from a window $12\,\mathrm{m}$ above the ground at $10\,\mathrm{m s}^{-1}$ at $45^\circ$ below the horizontal. Find the time to hit the ground and the horizontal distance from the window.</summary>

Taking upward as positive, $V_y = -10\sin 45° = -7.071\,\mathrm{m s}^{-1}$.

$y = 12 - 7.071t - 4.9t^2 = 0 \implies 4.9t^2 + 7.071t - 12 = 0$.

$t = \dfrac{-7.071 + \sqrt{50.0 + 235.2}}{9.8} = \dfrac{-7.071 + 16.89}{9.8} \approx 1.002\,\mathrm{s}$.

$R = 10\cos 45° \times 1.002 \approx 7.09\,\mathrm{m}$.

</details>

<details>
<summary>Q3. Prove that the maximum horizontal range from a height $h$ is achieved at an angle less than $45^\circ$, and find the optimal angle when $V = 20\,\mathrm{m s}^{-1}$ and $h = 10\,\mathrm{m}$.</summary>

From Section 7.4: $\theta = \arctan\!\left(\dfrac{V}{\sqrt{V^2 + 2gh}}\right)$.

$\theta = \arctan\!\left(\dfrac{20}{\sqrt{400 + 196}}\right) = \arctan\!\left(\dfrac{20}{\sqrt{596}}\right) = \arctan\!\left(\dfrac{20}{24.41}\right) = \arctan(0.819) \approx 39.3^\circ$.

This is less than $45^\circ$ because the projectile benefits from the extra "free" height gained
from the elevated launch point, so a flatter trajectory maximises the horizontal component of
velocity.

</details>

<details>
<summary>Q4. A projectile is launched at $18\,\mathrm{m s}^{-1}$ at $50^\circ$ to the horizontal up a plane inclined at $15^\circ$. Find the range on the plane and the time of flight.</summary>

$r = \dfrac{2(324)\cos 50°\sin 35°}{9.8\cos^2 15°} = \dfrac{648 \times 0.6428 \times 0.5736}{9.8 \times 0.9330}$

$= \dfrac{239.0}{9.143} \approx 26.1\,\mathrm{m}$.

$T = \dfrac{2V\sin(\theta - \alpha)}{g\cos\alpha} = \dfrac{2(18)\sin 35°}{9.8\cos 15°} = \dfrac{36 \times 0.5736}{9.8 \times 0.9659} = \dfrac{20.65}{9.466} \approx 2.18\,\mathrm{s}$.

</details>

<details>
<summary>Q5. A projectile is launched at speed $V$ at angle $\theta$ to the horizontal from the edge of a cliff of height $h$. Show that the speed $v$ when the projectile hits the ground satisfies $v^2 = V^2 + 2gh$ regardless of the angle of projection.</summary>

By conservation of energy (or by kinematics):

$v_x = V\cos\theta$ (constant).

$v_y^2 = (V\sin\theta)^2 + 2gh$ (from $v^2 = u^2 + 2as$ with $a = g$, $s = h$).

$v^2 = v_x^2 + v_y^2 = V^2\cos^2\theta + V^2\sin^2\theta + 2gh = V^2 + 2gh$.

The angle $\theta$ cancels out entirely. This is the energy conservation result: kinetic energy
gained equals gravitational potential energy lost.

</details>

<details>
<summary>Q6. A golfer hits a ball from the top of a hill $30\,\mathrm{m}$ above the fairway. The ball leaves at $40\,\mathrm{m s}^{-1}$ at $35^\circ$ above the horizontal. The fairway slopes downward at $10^\circ$ below the horizontal. Find the distance the ball travels along the fairway before landing.</summary>

The landing condition is that the ball reaches the sloping fairway. The fairway surface passes
through $(0, -30)$ and has equation $y = -30 - x\tan 10^\circ$.

Setting the trajectory equal to the fairway:

$x\tan 35° - \dfrac{9.8x^2}{2(1600)\cos^2 35°} = -30 - x\tan 10^\circ$

$x(0.7002 + 0.1763) - \dfrac{9.8x^2}{2(1600)(0.6710)} = -30$

$0.8765x - \dfrac{9.8x^2}{2147.2} = -30$

$0.8765x - 0.004564x^2 + 30 = 0$

$0.004564x^2 - 0.8765x - 30 = 0$

$x = \dfrac{0.8765 + \sqrt{0.7683 + 0.5477}}{0.009128} = \dfrac{0.8765 + 1.147}{0.009128} \approx 220.8\,\mathrm{m}$.

Distance along fairway $= \dfrac{x}{\cos 10°} = \dfrac{220.8}{0.9848} \approx 224.2\,\mathrm{m}$.

</details>

:::

---

## 8. Advanced Worked Examples

### Example 8.1: Projectiles on an inclined plane

**Problem.** A particle is projected up a plane inclined at $30°$ to the horizontal with speed $20\,\mathrm{m\,s^{-1}}$ at an angle of $50°$ to the horizontal. Find the range along the plane.

**Solution.** Resolving perpendicular to the plane (call this the $\xi$-axis) and parallel to the plane (the $\eta$-axis):

$a_\xi = -g\cos 30° = -\dfrac{g\sqrt{3}}{2}$, $a_\eta = -g\sin 30° = -\dfrac{g}{2}$.

$u_\xi = 20\sin(50° - 30°) = 20\sin 20° \approx 6.84\,\mathrm{m\,s^{-1}}$.

$u_\eta = 20\cos 20° \approx 18.79\,\mathrm{m\,s^{-1}}$.

The particle lands when $\xi = 0$ again:

$\xi = u_\xi t + \dfrac{1}{2}a_\xi t^2 = 0 \implies t\!\left(20\sin 20° - \dfrac{g\sqrt{3}}{4}\,t\right) = 0$.

Time of flight: $T = \dfrac{80\sin 20°}{g\sqrt{3}} \approx \dfrac{27.36}{17.06} \approx 1.604\,\mathrm{s}$.

Range along plane: $\eta = u_\eta T + \dfrac{1}{2}a_\eta T^2 = 20\cos 20° \times 1.604 - \dfrac{9.8}{2}(1.604)^2$

$\approx 30.14 - 12.60 = \boxed{17.5\,\mathrm{m}}$ (along the incline).

### Example 8.2: Maximum range on an inclined plane

**Problem.** Show that the angle of projection $\theta$ for maximum range $R$ up a plane of inclination $\alpha$ satisfies $\theta = \dfrac{\pi}{4} + \dfrac{\alpha}{2}$.

**Solution.** The range formula for a plane inclined at angle $\alpha$ is:

$$R = \frac{2u^2\cos\theta\sin(\theta - \alpha)}{g\cos^2\alpha}$$

Using $\sin A\cos B = \dfrac{1}{2}[\sin(A+B) + \sin(A-B)]$:

$$R = \frac{u^2[\sin(2\theta - \alpha) - \sin\alpha]}{g\cos^2\alpha}$$

$R$ is maximised when $\sin(2\theta - \alpha) = 1$, i.e., $2\theta - \alpha = \dfrac{\pi}{2}$.

$$\boxed{\theta = \frac{\pi}{4} + \frac{\alpha}{2}}$$

### Example 8.3: Hitting a moving target

**Problem.** A particle is projected from the origin with speed $u$ at angle $\theta$ above the horizontal. At the same instant, a second particle is released from rest at position $(d, h)$. Find the condition on $u$ and $\theta$ for a collision.

**Solution.** The second particle falls freely: $x_2(t) = d$, $y_2(t) = h - \dfrac{1}{2}gt^2$.

The first particle: $x_1(t) = u\cos\theta\,t$, $y_1(t) = u\sin\theta\,t - \dfrac{1}{2}gt^2$.

For collision: $u\cos\theta\,t = d \implies t = \dfrac{d}{u\cos\theta}$.

Then: $u\sin\theta \cdot \dfrac{d}{u\cos\theta} - \dfrac{1}{2}g\!\left(\dfrac{d}{u\cos\theta}\right)^{\!2} = h$.

$$d\tan\theta - \frac{gd^2}{2u^2\cos^2\theta} = h$$

$$\boxed{u^2 = \frac{gd^2}{2\cos^2\theta\,(d\tan\theta - h)}}$$

provided $d\tan\theta > h$.

### Example 8.4: Projectile with quadratic air resistance (energy approach)

**Problem.** A particle of mass $m$ is projected vertically upward at speed $u$. The air resistance is $mkv^2$ opposing motion. Find the maximum height.

**Solution.** Going up: $\dfrac{dv}{dt} = -g - kv^2$.

$$\int_0^u \frac{v\,dv}{g + kv^2} = \int_0^H dh$$

Let $w = g + kv^2$, $dw = 2kv\,dv$:

$$\frac{1}{2k}\int_g^{g+ku^2} \frac{dw}{w} = \frac{1}{2k}\ln\!\left(\frac{g+ku^2}{g}\right) = H$$

$$\boxed{H = \frac{1}{2k}\ln\!\left(1 + \frac{ku^2}{g}\right)}$$

### Example 8.5: Cartesian equation of trajectory from parametric

**Problem.** A projectile has position $(x, y)$ at time $t$ given by $x = V\cos\theta\,t$ and $y = V\sin\theta\,t - \dfrac{1}{2}gt^2$. Derive the Cartesian equation and identify the key features.

**Solution.** Eliminating $t$: $t = \dfrac{x}{V\cos\theta}$.

$$y = x\tan\theta - \frac{gx^2}{2V^2\cos^2\theta} = x\tan\theta - \frac{gx^2\sec^2\theta}{2V^2}$$

$$\boxed{y = x\tan\theta - \frac{gx^2}{2V^2}(1 + \tan^2\theta)}$$

This is a parabola. Setting $y = 0$: $x = 0$ or $x = \dfrac{2V^2\sin\theta\cos\theta}{g} = \dfrac{V^2\sin 2\theta}{g}$ (the range).

Maximum height: $y_{\max} = \dfrac{V^2\sin^2\theta}{2g}$ at $x = \dfrac{V^2\sin 2\theta}{2g}$.

### Example 8.6: Envelope of safety (parabolic envelope)

**Problem.** A gun can fire a shell with speed $u$ at any angle. Show that no point outside the parabola $y = \dfrac{u^2}{2g} - \dfrac{gx^2}{2u^2}$ can be hit.

**Solution.** For angle $\theta$, the trajectory is $y = x\tan\theta - \dfrac{gx^2}{2u^2}(1+\tan^2\theta)$.

Rearranging as a quadratic in $\tan\theta$:

$$\frac{gx^2}{2u^2}\tan^2\theta - x\tan\theta + \frac{gx^2}{2u^2} + y = 0$$

For a real angle to exist, the discriminant must be $\geq 0$:

$$x^2 - 4 \cdot \frac{gx^2}{2u^2}\!\left(\frac{gx^2}{2u^2} + y\right) \geq 0$$

$$x^2 - \frac{2gx^2}{u^2}\!\left(\frac{gx^2}{2u^2} + y\right) \geq 0$$

$$1 - \frac{2g}{u^2}\!\left(\frac{gx^2}{2u^2} + y\right) \geq 0 \implies y \leq \frac{u^2}{2g} - \frac{gx^2}{2u^2}$$

$\blacksquare$

---

## 9. Common Pitfalls

| Pitfall | Correct Approach |
|---|---|
| Using $45°$ for maximum range without checking if the target is above or below launch height | Maximum range at $45°$ only applies when launch and landing are at the same height |
| Forgetting that $g$ acts downward in all projectile problems | Decompose $g$ into components along your chosen axes |
| Assuming air resistance is negligible when the question does not specify | In A-Level Further Maths, always state "assuming no air resistance" unless told otherwise |
| Confusing the angle to the horizontal with the angle to the inclined plane | On a plane inclined at $\alpha$: angle to the plane $= \theta - \alpha$, angle to horizontal $= \theta$ |

---

## 10. Additional Exam-Style Questions

### Question 8

A cricketer hits a ball from ground level with speed $25\,\mathrm{m\,s^{-1}}$ at $35°$ to the horizontal. The ball just clears a wall $5\,\mathrm{m}$ high. Find the distance from the batsman to the wall.

<details>
<summary>Solution</summary>

$y = x\tan 35° - \dfrac{9.8x^2}{2(25)^2\cos^2 35°}$.

Setting $y = 5$: $5 = 0.7002x - 0.002914x^2$.

$0.002914x^2 - 0.7002x + 5 = 0$.

$x = \dfrac{0.7002 \pm \sqrt{0.4903 - 0.05828}}{0.005828} = \dfrac{0.7002 \pm 0.6572}{0.005828}$.

$x \approx 232.8\,\mathrm{m}$ (far wall) or $x \approx 7.35\,\mathrm{m}$ (near wall on the way up).

Since the ball "just clears," the wall is at $\boxed{7.35\,\mathrm{m}}$ (first crossing) or $\boxed{232.8\,\mathrm{m}}$ depending on context.

</details>

### Question 9

**Prove that** the time of flight of a projectile on a plane inclined at angle $\alpha$ below the horizontal is $T = \dfrac{2u\sin(\theta+\alpha)}{g\cos\alpha}$.

<details>
<summary>Solution</summary>

Take axes parallel and perpendicular to the downward slope. The component of $g$ along the plane (upward positive) is $-g\sin\alpha$, and perpendicular to the plane (outward positive) is $g\cos\alpha$.

Actually, resolving along the plane: $a_\parallel = -g\sin\alpha$ and $a_\perp = g\cos\alpha$ (into the plane).

The particle lands when it returns to the plane. The perpendicular displacement returns to zero:

$0 = u_\perp T + \dfrac{1}{2}a_\perp T^2$ where $u_\perp = u\sin(\theta+\alpha)$ and $a_\perp = -g\cos\alpha$ (taking outward as positive).

$T = \dfrac{2u\sin(\theta+\alpha)}{g\cos\alpha}$. $\blacksquare$

</details>

### Question 10

A particle is projected from a point $A$ on a cliff $40\,\mathrm{m}$ above sea level. It lands in the sea at a horizontal distance of $100\,\mathrm{m}$ from the foot of the cliff. If the angle of projection is $30°$ above the horizontal, find the initial speed.

<details>
<summary>Solution</summary>

$x = u\cos 30°\,t \implies t = \dfrac{100}{u\cos 30°}$.

$y = u\sin 30°\,t - \dfrac{1}{2}gt^2 = -40$.

$\dfrac{u}{2} \cdot \dfrac{100}{u\cos 30°} - \dfrac{9.8 \times 10000}{2u^2\cos^2 30°} = -40$.

$\dfrac{50}{\cos 30°} - \dfrac{49000}{u^2 \cdot \frac{3}{4}} = -40$.

$\dfrac{49000 \times 4}{3u^2} = 40 + 57.74 = 97.74$.

$u^2 = \dfrac{196000}{293.2} \approx 668.4$.

$\boxed{u \approx 25.9\,\mathrm{m\,s^{-1}}}$

</details>

---

## 11. Connections to Other Topics

### 11.1 Projectiles and circular motion

Both topics involve resolving forces and using Newton's second law in 2D. See [Circular Motion](/docs/docs_alevel/further-maths/further-mechanics/02-circular-motion).

### 11.2 Projectile equations and calculus

The trajectory equation is derived by eliminating the parameter $t$ from the parametric equations, a standard calculus technique. See [Further Calculus](/docs/docs_alevel/further-maths/pure-mathematics/04-further-calculus).

### 11.3 Energy methods in projectiles

Conservation of energy provides an alternative to resolving forces, connecting projectiles to the work-energy principle.

---

## 12. Key Results Summary

| Quantity | Formula |
|---|---|
| Horizontal range (same height) | $R = \dfrac{u^2\sin 2\theta}{g}$ |
| Maximum height | $H = \dfrac{u^2\sin^2\theta}{2g}$ |
| Time of flight (same height) | $T = \dfrac{2u\sin\theta}{g}$ |
| Trajectory equation | $y = x\tan\theta - \dfrac{gx^2}{2u^2\cos^2\theta}$ |
| Maximum range angle | $\theta = 45°$ (same height) |
| Range on inclined plane (angle $\alpha$) | $R = \dfrac{2u^2\cos\theta\sin(\theta-\alpha)}{g\cos^2\alpha}$ |
| Speed at any point | $v = \sqrt{u^2 - 2gy}$ (energy conservation) |

---

## 13. Further Exam-Style Questions

### Question 11

A ball is thrown from a height of $1.5\,\mathrm{m}$ at $10\,\mathrm{m\,s^{-1}}$ at $30°$ above the horizontal. Find:
(a) the time to reach maximum height;
(b) the maximum height above the ground;
(c) the horizontal range (distance from launch to landing).

<details>
<summary>Solution</summary>

**(a)** Vertical: $v_y = u\sin\theta - gt = 5 - 9.8t$. At max height: $t = \dfrac{5}{9.8} \approx \boxed{0.510\,\mathrm{s}}$.

**(b)** $y_{\max} = 1.5 + \dfrac{5^2}{2 \times 9.8} = 1.5 + 1.276 = \boxed{2.78\,\mathrm{m}}$.

**(c)** Total time: solve $1.5 + 5t - 4.9t^2 = 0 \implies t = \dfrac{5+\sqrt{25+29.4}}{9.8} = \dfrac{5+7.389}{9.8} \approx 1.263\,\mathrm{s}$.

Range $= 10\cos 30° \times 1.263 = 8.66 \times 1.263 \approx \boxed{10.9\,\mathrm{m}}$.

</details>

### Question 12

**Prove that** for a projectile launched from ground level, the speed at height $h$ is $v = \sqrt{u^2 - 2gh}$.

<details>
<summary>Solution</summary>

By conservation of energy: $\dfrac{1}{2}mu^2 = \dfrac{1}{2}mv^2 + mgh$.

$u^2 = v^2 + 2gh$.

$v^2 = u^2 - 2gh$.

$v = \sqrt{u^2 - 2gh}$. $\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 Projectile with linear air resistance

With air resistance proportional to velocity ($\mathbf{'\{'}F{'\}'}_{\text{drag}} = -mk\mathbf{'\{'}v{'\}'}$):

Horizontal: $m\ddot{x} = -mk\dot{x} \implies \dot{x} = u\cos\theta\,e^{-kt}$.

$x = \dfrac{u\cos\theta}{k}(1-e^{-kt})$.

Vertical: $m\ddot{y} = -mg - mk\dot{y}$.

This is a first-order linear ODE with solution involving exponential decay toward terminal velocity $v_t = -g/k$.

### 14.2 Coriolis effect (qualitative)

On a rotating Earth, the Coriolis force deflects projectiles to the right in the Northern Hemisphere and to the left in the Southern Hemisphere. This is significant for long-range artillery but negligible for short-range projectiles.

### 14.3 Optimal launch angle for maximum range on a slope

For a plane inclined at angle $\alpha$ below the horizontal, the optimal angle for maximum range down the slope is:

$$\theta = \frac{\pi}{4} - \frac{\alpha}{2}$$

This is complementary to the result for an upward slope ($\theta = \pi/4 + \alpha/2$).

### 14.4 Range as a function of elevation

At constant speed $u$, the range is $R = \dfrac{u^2\sin 2\theta}{g}$.

Two angles give the same range: $\theta$ and $90° - \theta$ (complementary angles).

---

## 15. Further Exam-Style Questions

### Question 13

A projectile is launched at speed $u$ at angle $\theta$ above horizontal. Show that the maximum height equals $\dfrac{R\tan\theta}{4}$ where $R$ is the horizontal range.

<details>
<summary>Solution</summary>

$H = \dfrac{u^2\sin^2\theta}{2g}$, $R = \dfrac{u^2\sin 2\theta}{g} = \dfrac{2u^2\sin\theta\cos\theta}{g}$.

$\dfrac{R\tan\theta}{4} = \dfrac{2u^2\sin\theta\cos\theta}{4g} \cdot \dfrac{\sin\theta}{\cos\theta} = \dfrac{u^2\sin^2\theta}{2g} = H$. $\blacksquare$

</details>

### Question 14

A ball is dropped from a height $H$. At the same instant, a second ball is projected upward from the ground with speed $u$. Find the condition for the balls to collide.

<details>
<summary>Solution</summary>

Ball 1: $y_1 = H - \dfrac{1}{2}gt^2$.

Ball 2: $y_2 = ut - \dfrac{1}{2}gt^2$.

Collision: $H - \dfrac{1}{2}gt^2 = ut - \dfrac{1}{2}gt^2 \implies H = ut \implies t = H/u$.

At this time, $y_1 = H - \dfrac{gH^2}{2u^2}$ must be $\geq 0$:

$H \geq \dfrac{gH^2}{2u^2} \implies u^2 \geq \dfrac{gH}{2} \implies \boxed{u \geq \sqrt{\dfrac{gH}{2}}}$.

</details>

### Question 15

**Prove that** the locus of the focus of a projectile's parabolic trajectory, as the angle varies, is a circle.

<details>
<summary>Solution</summary>

The trajectory is $y = x\tan\theta - \dfrac{gx^2}{2u^2}(1+\tan^2\theta)$.

The vertex of this parabola (maximum height point) is at $x_v = \dfrac{u^2\sin 2\theta}{2g}$, $y_v = \dfrac{u^2\sin^2\theta}{2g}$.

$x_v^2 + (y_v - \dfrac{u^2}{4g})^2 = \dfrac{u^4\sin^2 2\theta}{4g^2} + \dfrac{u^4}{16g^2}(\cos 2\theta - 1)^2$.

Using $\sin^2 2\theta + (1-\cos 2\theta)^2/4 = \sin^2 2\theta + \sin^4\theta/\cos^2\theta$... 

Actually, a simpler approach: $x_v = \dfrac{u^2}{2g}\sin 2\theta$ and $y_v = \dfrac{u^2}{4g}(1-\cos 2\theta)$.

$x_v^2 + (y_v - \dfrac{u^2}{4g})^2 = \dfrac{u^4}{4g^2}\sin^2 2\theta + \dfrac{u^4}{16g^2}\cos^2 2\theta = \dfrac{u^4}{16g^2}(4\sin^2 2\theta + \cos^2 2\theta)$.

This is not a simple circle in general. However, the directrix envelope of all trajectories (with varying $\theta$ but fixed $u$) is a parabola $y = \dfrac{u^2}{2g}$.

The **envelope of safety** (the parabolic boundary) is $y = \dfrac{u^2}{2g} - \dfrac{gx^2}{2u^2}$ as derived in Example 8.6.

</details>

---

## 16. Advanced Topics in Projectile Motion

### 16.1 Coriolis deflection

On a rotating Earth, the Coriolis acceleration is $\mathbf{'\{'}a{'\}'}_C = -2\boldsymbol{'\{'}\omega{'\}'} \times \mathbf{'\{'}v{'\}'}$ where $\boldsymbol{'\{'}\omega{'\}'}$ is Earth's angular velocity.

For a projectile at latitude $\phi$:
- Horizontal deflection: proportional to $v \cdot \omega \sin\phi$
- Maximum deflection for eastward launch at the equator

### 16.2 Projectile motion in a resistive medium

With quadratic drag ($F = kv^2$), the equations of motion become coupled nonlinear ODEs with no closed-form solution. Numerical methods (Euler, Runge-Kutta) are required.

### 16.3 Multi-stage projectiles

Rockets and fireworks involve variable mass and thrust. The thrust equation is:

$$m\frac{dv}{dt} = F_{\text{thrust}} - mg - F_{\text{drag}}$$

where $m$ decreases as fuel is consumed.

### 16.4 Range tables

Before computers, artillery range tables were computed using numerical integration of the equations of motion. These accounted for air resistance, wind, and the Coriolis effect.

---

## 17. Further Exam-Style Questions

### Question 16

A particle is projected from a height $h$ at angle $\theta$ below the horizontal with speed $u$. Find the horizontal distance travelled before it hits the ground.

<details>
<summary>Solution</summary>

Taking downward as positive for the vertical: $y = h + u\sin\theta\,t + \dfrac{1}{2}gt^2$ (since the particle is projected downward).

Wait, let me set up coordinates properly. Upward positive:

$y = h - u\sin\theta\,t - \dfrac{1}{2}gt^2$.

$x = u\cos\theta\,t$.

When $y = 0$: $\dfrac{1}{2}gt^2 + u\sin\theta\,t - h = 0$.

$t = \dfrac{-u\sin\theta + \sqrt{u^2\sin^2\theta + 2gh}}{g}$ (taking positive root).

$R = u\cos\theta \cdot t = \dfrac{u\cos\theta\left(\sqrt{u^2\sin^2\theta + 2gh} - u\sin\theta\right)}{g}$.

</details>

### Question 17

**Prove that** the time taken for a projectile to reach maximum height is $t = \dfrac{u\sin\theta}{g}$.

<details>
<summary>Solution</summary>

Vertical: $v_y = u\sin\theta - gt$. At maximum height, $v_y = 0$.

$u\sin\theta - gt = 0 \implies t = \dfrac{u\sin\theta}{g}$. $\blacksquare$

</details>
