---
id: dse-physics-kinematics
title: Physics - Kinematics
description:
  'DSE Physics notes covering scalars and vectors, distance and displacement, speed and velocity,
  acceleration, equations of motion, projectile motion, stopping distance, and acceleration due
  to gravity.'
slug: kinematics
tags: [DSE, Physics]
categories: [DSE, Physics]
date: 2026-05-31T00:00:00.000Z
---

## 1. Scalars and Vectors

| Quantity | Definition                          | Examples                                          |
| -------- | ----------------------------------- | -------------------------------------------------- |
| Scalar   | Has magnitude only                   | Speed, distance, mass, time, temperature, energy  |
| Vector   | Has magnitude and direction          | Velocity, displacement, force, acceleration, momentum |

### Vector Operations

- **Adding vectors:** use tip-to-tail method or resolve into components
- **Resolving a vector:** split into horizontal ($x$) and vertical ($y$) components

$$F_x = F\cos\theta \quad \text{and} \quad F_y = F\sin\theta$$

$$F = \sqrt{F_x^2 + F_y^2}$$

---

## 2. Distance and Displacement

| Quantity     | Type   | Definition                                    |
| ------------ | ------ | ---------------------------------------------- |
| Distance     | Scalar | Total length of path travelled                  |
| Displacement | Vector | Straight-line distance from start to finish in a given direction |

- Distance is always **$\geq$ displacement**
- Displacement can be zero if the object returns to its starting point

---

## 3. Speed and Velocity

| Quantity  | Type   | Definition                                    | Units        |
| --------- | ------ | ---------------------------------------------- | ------------ |
| Speed     | Scalar | Rate of change of distance                    | $\mathrm{m\,s^{-1}}$ |
| Velocity  | Vector | Rate of change of displacement                | $\mathrm{m\,s^{-1}}$ |

$$v = \frac{\Delta s}{\Delta t}$$

**Average speed:** total distance / total time
**Instantaneous speed:** speed at a specific moment (gradient of distance-time graph at that point)

### Displacement-Time Graphs

| Feature              | Meaning                                   |
| -------------------- | ----------------------------------------- |
| Gradient              | Velocity                                  |
| Horizontal line        | Stationary (velocity = 0)                 |
| Straight line (positive gradient) | Constant velocity              |
| Curve                 | Acceleration or deceleration              |
| Area under curve      | Not applicable (displacement is the quantity) |

### Velocity-Time Graphs

| Feature              | Meaning                                   |
| -------------------- | ----------------------------------------- |
| Gradient              | Acceleration                              |
| Horizontal line        | Constant velocity (acceleration = 0)      |
| Straight line (positive gradient) | Constant acceleration          |
| Area under curve      | Displacement                              |
| Negative region       | Object moving in opposite direction       |

---

## 4. Acceleration

**Acceleration** is the rate of change of velocity:

$$a = \frac{\Delta v}{\Delta t} = \frac{v - u}{t}$$

- Units: $\mathrm{m\,s^{-2}}$
- A positive acceleration means the object is speeding up in the direction of motion
- A negative acceleration (deceleration) means the object is slowing down

---

## 5. Equations of Motion (Uniform Acceleration)

For motion with **constant acceleration** (also called the **suvat equations**):

| Equation        | Variables                          | When to Use                              |
| -------------- | ---------------------------------- | ---------------------------------------- |
| $v = u + at$   | Uses $u, a, t$ to find $v$         | No displacement involved                 |
| $s = ut + \frac{1}{2}at^2$ | Uses $u, a, t$ to find $s$    | Displacement from initial velocity       |
| $s = \frac{(u+v)}{2}t$ | Uses $u, v, t$ to find $s$   | When acceleration is unknown             |
| $v^2 = u^2 + 2as$ | Uses $u, v, a$ to find $s$       | When time is unknown                     |

Where:
- $s$ = displacement (m)
- $u$ = initial velocity ($\mathrm{m\,s^{-1}}$)
- $v$ = final velocity ($\mathrm{m\,s^{-1}}$)
- $a$ = acceleration ($\mathrm{m\,s^{-2}}$)
- $t$ = time (s)

### Problem-Solving Strategy

1. **List** the known quantities ($s, u, v, a, t$) and identify what to find
2. **Choose** the suvat equation with exactly those variables (one unknown)
3. **Solve** the equation
4. **Check:** does the answer make sense? (e.g. negative displacement, zero final velocity)

---

## 6. Acceleration Due to Gravity

### Free Fall

All objects in **free fall** (only gravity acting, no air resistance) accelerate at the same rate:
$$g \approx 9.81\ \mathrm{m\,s^{-2}}$$

### Key Principles

1. **Near Earth's surface**, $g$ is approximately constant at $9.81\ \mathrm{m\,s^{-2}}$
2. $g$ **does not depend** on the mass of the falling object (Galileo's principle)
3. In a **vacuum**, a feather and a bowling ball fall at the same rate

### Experiments to Determine $g$

**Method 1: Electromagnet and trapdoor**
- Electromagnet holds a steel ball; switch releases it
- Timer starts when ball released; stops when it hits trapdoor
- Repeat for various heights $h$

$$h = \frac{1}{2}gt^2 \implies g = \frac{2h}{t^2}$$

Plot $h$ vs $t^2$; gradient = $\frac{g}{2}$

**Method 2: Light gates**
- Measure time for card to pass through two light gates at known separation
- Gives velocity at each gate; use $v^2 = u^2 + 2as$ to find $g$

---

## 7. Projectile Motion

### Principles

A projectile moves under the influence of **gravity only** (air resistance is neglected in DSE).

**Key idea:** horizontal and vertical motion are **independent** of each other.

| Direction | Motion                      | Acceleration        |
| --------- | --------------------------- | ------------------- |
| Horizontal | Constant velocity (no force)| $a_x = 0$           |
| Vertical   | Uniformly accelerated       | $a_y = -g = -9.81\ \mathrm{m\,s^{-2}}$ |

### Equations

**Horizontal:**
$$x = v_x \cdot t$$

where $v_x = v_0\cos\theta$ (constant throughout)

**Vertical:**
$$v_y = u_y + at = v_0\sin\theta - gt$$
$$y = u_y t + \frac{1}{2}at^2 = v_0\sin\theta\cdot t - \frac{1}{2}gt^2$$

### Key Results

- **Time of flight:** set $y = 0$ and solve for $t$; or use $t = \frac{2v_0\sin\theta}{g}$
- **Maximum height:** occurs when $v_y = 0$; $H = \frac{(v_0\sin\theta)^2}{2g}$
- **Range:** $R = \frac{v_0^2\sin 2\theta}{g}$
- **Maximum range:** at $\theta = 45°$ (complementary angles give equal ranges: $30°$ and $60°$)

### Trajectory

The path of a projectile is a **parabola**. The vertical velocity is zero at the highest point, but
horizontal velocity is never zero (in ideal conditions).

---

## 8. Stopping Distance

The **stopping distance** is the total distance a vehicle travels from the moment the driver sees
a hazard to the moment the vehicle stops:

$$\text{Stopping distance} = \text{Thinking distance} + \text{Braking distance}$$

### Thinking Distance

- Distance travelled during the driver's **reaction time** before brakes are applied
- Depends on: **speed** (directly proportional), reaction time (affected by alcohol, drugs,
  fatigue, mobile phone use)

$$\text{Thinking distance} = \text{speed} \times \text{reaction time}$$

### Braking Distance

- Distance travelled after brakes are applied until the vehicle stops
- Depends on: **speed** (proportional to $v^2$), road conditions (wet/icy), tyre condition, vehicle
  mass, brake efficiency

### Factors Affecting Stopping Distance

| Factor                | Effect on Thinking Distance | Effect on Braking Distance |
| --------------------- | --------------------------- | --------------------------- |
| Higher speed          | Increases (proportional)    | Increases ($\propto v^2$)   |
| Tiredness/alcohol     | Increases (longer reaction) | No effect                    |
| Wet/icy road          | No effect                   | Increases greatly            |
| Worn tyres            | No effect                   | Increases                    |
| Heavy vehicle         | No effect                   | Increases                    |
| Poor brakes           | No effect                   | Increases                    |

### Typical Values

At $30\ \mathrm{mph}$: total $\approx 23\ \mathrm{m}$ (9 m thinking + 14 m braking)
At $70\ \mathrm{mph}$: total $\approx 96\ \mathrm{m}$ (21 m thinking + 75 m braking)

Note how braking distance increases much more than thinking distance as speed increases.

---

## 9. Key Equations Reference

| Topic                  | Equation                                    | Notes                          |
| ---------------------- | ------------------------------------------- | ------------------------------ |
| Speed                 | $v = \frac{s}{t}$                          |                                |
| Acceleration          | $a = \frac{v - u}{t}$                      |                                |
| suvat 1               | $v = u + at$                                |                                |
| suvat 2               | $s = ut + \frac{1}{2}at^2$                  |                                |
| suvat 3               | $s = \frac{1}{2}(u + v)t$                   |                                |
| suvat 4               | $v^2 = u^2 + 2as$                           |                                |
| Free fall              | $h = \frac{1}{2}gt^2$                       | Object released from rest       |
| Projectile (range)     | $R = \frac{v_0^2\sin 2\theta}{g}$          |                                |
| Projectile (max height)| $H = \frac{(v_0\sin\theta)^2}{2g}$          |                                |
| Vector resolution      | $F_x = F\cos\theta;\ F_y = F\sin\theta$    |                                |
