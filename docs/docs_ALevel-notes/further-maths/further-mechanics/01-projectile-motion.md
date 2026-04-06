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
acceleration is $g = 9.8\,\text{m s}^{-2}$ acting vertically downward. Take care with sign
conventions — define upward as positive at the start and be consistent. :::

---

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

---

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

---

## 3. Key Results

### 3.1 Time of flight

The projectile returns to $y = 0$ when:

$$V\sin\theta \cdot t - \frac{1}{2}gt^2 = 0 \implies t(V\sin\theta - \frac{1}{2}gt) = 0$$

$$\boxed{T = \frac{2V\sin\theta}{g}}$$

### 3.2 Maximum height

At maximum height, $\dot{y} = 0$:

$$V\sin\theta - gt_{\text{max}} = 0 \implies t_{\text{max}} = \frac{V\sin\theta}{g}$$

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

This is maximised when $\sin 2\theta = 1$, i.e., $\theta = 45°$, giving $R_{\max} = \dfrac{V^2}{g}$.
$\blacksquare$

:::info For a given speed $V$, complementary angles give the same range: $\theta$ and $90° - \theta$
both produce $R = \dfrac{V^2\sin 2\theta}{g}$. However, the trajectories are different — the steeper
angle gives a higher but shorter arc. :::

---

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

---

## 5. Velocity at Any Point

The velocity components at time $t$ are:

$$v_x = V\cos\theta, \qquad v_y = V\sin\theta - gt$$

The speed is $v = \sqrt{v_x^2 + v_y^2} = \sqrt{V^2\cos^2\theta + (V\sin\theta - gt)^2}$.

The direction of motion is at angle $\phi$ to the horizontal where:

$$\tan\phi = \frac{v_y}{v_x} = \frac{V\sin\theta - gt}{V\cos\theta} = \tan\theta - \frac{gt}{V\cos\theta}$$

---

## Problems

<details>
<summary>Problem 1</summary>
A projectile is launched at $30\,\text{m s}^{-1}$ at $50°$ to the horizontal from ground level. Find the maximum height, time of flight, and range.
</details>

<details>
<summary>Solution 1</summary>
$V = 30$, $\theta = 50°$, $g = 9.8$.

$H = \dfrac{V^2\sin^2\theta}{2g} = \dfrac{900\sin^2 50°}{19.6} = \dfrac{900 \times 0.5868}{19.6} \approx 26.94\,\text{m}$.

$T = \dfrac{2V\sin\theta}{g} = \dfrac{60\sin 50°}{9.8} = \dfrac{45.96}{9.8} \approx 4.69\,\text{s}$.

$R = \dfrac{V^2\sin 2\theta}{g} = \dfrac{900\sin 100°}{9.8} = \dfrac{900 \times 0.9848}{9.8} \approx 90.44\,\text{m}$.

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
A projectile is launched from a cliff $80\,\text{m}$ high at $20\,\text{m s}^{-1}$ horizontally. Find the time to hit the ground and the horizontal distance travelled.
</details>

<details>
<summary>Solution 3</summary>
$\theta = 0°$, so $v_x = 20$, $v_y = 0$.

$y = -\dfrac{1}{2}gt^2 = -80 \implies t^2 = \dfrac{160}{9.8} \implies t \approx 4.04\,\text{s}$.

$x = 20 \times 4.04 \approx 80.8\,\text{m}$.

**If you get this wrong, revise:** [Equations of Motion](#1-equations-of-motion) — Section 1.

</details>

<details>
<summary>Problem 4</summary>
Find the angle of projection for maximum range on an inclined plane of angle $30°$ when projecting up the plane.
</details>

<details>
<summary>Solution 4</summary>
For maximum range up the plane: $\theta = 45° + \dfrac{\alpha}{2} = 45° + 15° = 60°$.

The projectile should be launched at $60°$ to the horizontal.

**If you get this wrong, revise:**
[Maximum range on an inclined plane](#43-maximum-range-on-an-inclined-plane) — Section 4.3.

</details>

<details>
<summary>Problem 5</summary>
A ball is thrown at $15\,\text{m s}^{-1}$ from a height of $2\,\text{m}$ at $40°$ above the horizontal. Find the speed and angle when it hits the ground.
</details>

<details>
<summary>Solution 5</summary>
$y = 2 + 15\sin 40°\cdot t - 4.9t^2 = 0$.

$4.9t^2 - 9.642t - 2 = 0 \implies t = \dfrac{9.642 + \sqrt{93.17 + 39.2}}{9.8} = \dfrac{9.642 + 11.47}{9.8} \approx 2.162\,\text{s}$.

$v_y = 15\sin 40° - 9.8(2.162) = 9.642 - 21.19 = -11.55\,\text{m s}^{-1}$.

$v_x = 15\cos 40° = 11.49\,\text{m s}^{-1}$.

Speed
$= \sqrt{11.49^2 + 11.55^2} = \sqrt{132.0 + 133.4} = \sqrt{265.4} \approx 16.3\,\text{m s}^{-1}$.

Angle below horizontal: $\arctan(11.55/11.49) \approx 45.1°$.

**If you get this wrong, revise:** [Velocity at Any Point](#5-velocity-at-any-point) — Section 5.

</details>

<details>
<summary>Problem 6</summary>
A projectile is launched at $25\,\text{m s}^{-1}$ at $35°$ up a plane inclined at $20°$ to the horizontal. Find the range on the plane.
</details>

<details>
<summary>Solution 6</summary>
$r = \dfrac{2V^2\cos\theta\sin(\theta-\alpha)}{g\cos^2\alpha} = \dfrac{2(625)\cos 35°\sin 15°}{9.8\cos^2 20°}$

$= \dfrac{1250 \times 0.8192 \times 0.2588}{9.8 \times 0.8830} = \dfrac{265.1}{8.653} \approx 30.6\,\text{m}$.

**If you get this wrong, revise:** [Up the plane](#41-up-the-plane) — Section 4.1.

</details>

<details>
<summary>Problem 7</summary>
Show that for a given initial speed $V$, the maximum range on horizontal ground is $\dfrac{V^2}{g}$ and occurs at $\theta = 45°$.
</details>

<details>
<summary>Solution 7</summary>
$R = \dfrac{V^2\sin 2\theta}{g}$. The maximum value of $\sin 2\theta$ is 1, occurring when $2\theta = 90°$, so $\theta = 45°$.

$R_{\max} = \dfrac{V^2 \times 1}{g} = \dfrac{V^2}{g}$. $\blacksquare$

**If you get this wrong, revise:** [Range on horizontal ground](#33-range-on-horizontal-ground) —
Section 3.3.

</details>

<details>
<summary>Problem 8</summary>
A cricketer hits a ball at $28\,\text{m s}^{-1}$ at $35°$ to the horizontal. A fielder stands $60\,\text{m}$ away. Can the fielder catch the ball at the same height?
</details>

<details>
<summary>Solution 8</summary>
$R = \dfrac{28^2\sin 70°}{9.8} = \dfrac{784 \times 0.9397}{9.8} = \dfrac{736.7}{9.8} \approx 75.2\,\text{m}$.

Since $75.2 > 60\,\text{m}$, the ball travels beyond the fielder. Check height at $x = 60$:

$y = 60\tan 35° - \dfrac{9.8 \times 3600}{2 \times 784 \times \cos^2 35°} = 42.02 - \dfrac{35280}{2 \times 784 \times 0.6710} = 42.02 - \dfrac{35280}{1051.9}$

$= 42.02 - 33.54 = 8.48\,\text{m}$.

The ball is at height $8.48\,\text{m}$ when it passes $x = 60\,\text{m}$, so the fielder cannot
catch it at the same height.

**If you get this wrong, revise:** [The Trajectory Equation](#2-the-trajectory-equation) —
Section 2.

</details>

<details>
<summary>Problem 9</summary>
A projectile is launched from the top of an incline of angle $25°$ at $20\,\text{m s}^{-1}$ at angle $30°$ to the horizontal, directed down the plane. Find the range on the plane.
</details>

<details>
<summary>Solution 9</summary>
$r = \dfrac{2V^2\cos\theta\sin(\theta+\alpha)}{g\cos^2\alpha} = \dfrac{2(400)\cos 30°\sin 55°}{9.8\cos^2 25°}$

$= \dfrac{800 \times 0.8660 \times 0.8192}{9.8 \times 0.8214} = \dfrac{567.5}{8.050} \approx 70.5\,\text{m}$.

**If you get this wrong, revise:** [Down the plane](#42-down-the-plane) — Section 4.2.

</details>

<details>
<summary>Problem 10</summary>
A projectile passes through two points at $(20, 5)$ and $(40, 5)$ (in metres). Find the angle of projection and the initial speed, given $g = 9.8\,\text{m s}^{-2}$.
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

$\tan\theta = \dfrac{15}{50} = 0.3$, so $\theta \approx 16.7°$.

$V^2\cos^2\theta = \dfrac{588}{0.3} = 1960$.
$V^2 = \dfrac{1960}{\cos^2 16.7°} = \dfrac{1960}{0.9163} \approx 2139$.
$V \approx 46.3\,\text{m s}^{-1}$.

**If you get this wrong, revise:** [The Trajectory Equation](#2-the-trajectory-equation) —
Section 2.

</details>

:::

:::
