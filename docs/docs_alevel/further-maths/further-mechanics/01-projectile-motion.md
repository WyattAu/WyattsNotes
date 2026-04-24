---
title: Projectile Motion
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

:::info In projectile motion, air resistance is always neglected unless stated otherwise. The only
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

:::info For a given speed $V$, complementary angles give the same range: $\theta$ and $90° - \theta$
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

:::
