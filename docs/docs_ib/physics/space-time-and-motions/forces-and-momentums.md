---
title: Forces and Momentums
sidebar_position: 2
---

## motion

### Position

The position ($x$) is a vector quantity representing a point in space from a reference origin
position.

### Time Derivatives of motions

#### Displacement

The displacement ($s$ or $\Delta x$) is a vector quantity representing the change in
[position](#position) as a translation:

$$
\begin{aligned}
    s = \Delta x = x_f - x_i
\end{aligned}
$$

#### Velocity

The velocity ($v$) is a vector quantity representing the change in [displacement](#displacement)
with time:

$$
\begin{aligned}
    v = \frac{ds}{dt}
\end{aligned}
$$

#### Acceleration

The acceleration ($a$) is a vector quantity representing the change in [velocity](#velocity) with
time:

$$
\begin{aligned}
    a = \frac{dv}{dt}
\end{aligned}
$$

## Rigid Body

A rigid body is a solid with no deformation regardless of any external forces or moments applied.

## Angular Motion

### Unit vector for Radial Coordinates

The radial unit vector ($\bm{\hat{r}}$) is the directional vector with magnitude $1$ from the center
radially outside.

$$
\begin{aligned}
    \bm{\hat{r}} = \frac{\bm{r}}{|\bm{r}|}
\end{aligned}
$$

### Centripetal acceleration

The centripetal acceleration ($a$) is the [acceleration](#acceleration) directed radially to the
center ($-\bm{\hat{r}}$), keeping the body in circular motion:

$$
\begin{aligned}
    a = -\frac{v^2}{r}\bm{\hat{r}} = -\omega^2 r\bm{\hat{r}} = -\frac{4\pi^2r}{T^2}\bm{\hat{r}}
\end{aligned}
$$

:::warning The IB only consider the magnitude of centripetal acceleration, therefore is shown in the
equation booklet as:

$$
\begin{aligned}
    a = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2r}{T^2}
\end{aligned}
$$

:::

### Centripetal Force

The centripetal force is any force applied on a mass towards the center ($-\bm{\hat{r}}$), leading
to a [centripetal acceleration](#centripetal-acceleration) $\bm{a}$:

$$
\begin{aligned}
    F = m\bm{a} = -\frac{mv^2}{r}\bm{\hat{r}} = -m\omega^2 r\bm{\hat{r}} = -\frac{4\pi^2mr}{T^2}\bm{\hat{r}}
\end{aligned}
$$

:::warning As mentioned above, IB only consider the magnitude of centripetal force:

$$
\begin{aligned}
    F = ma = \frac{mv^2}{r} = m\omega^2 r = \frac{4\pi^2mr}{T^2}
\end{aligned}
$$

:::

### Angular Position

The angular position ($\theta$) of a [rigid body](#rigid-body) is a representation of the object's
orientation by the angle between a reference position and the current position.

### Time Derivatives of Angular Motions

#### Angular Displacement

The angular displacement ($\Delta \theta$) of a [rigid body](#rigid-body) is the change in
[angular position $\theta$](#angular-position) measured from the center:

$$
\begin{aligned}
    \Delta \theta = \theta_f - \theta_i
\end{aligned}
$$

#### Angular velocity

The angular velocity ($\omega$) is the change of
[angular displacement $\Delta \theta$](#angular-displacement) of a [rigid body](#rigid-body) with
time:

$$
\begin{aligned}
   \omega = \frac{d\theta}{dt}
\end{aligned}
$$

#### Angular acceleration

The angular acceleration ($\alpha$) is the change of [angular velocity](#angular-velocity) of a
[rigid body](#rigid-body) with time:

$$
\begin{aligned}
    \alpha = \frac{d\omega}{dt}
\end{aligned}
$$

### Moment of Inertia

The measure of a solid body's resistance to [angular acceleration](#angular-acceleration).

:::warning The IB syllabus only consider the moment of inertia of rigid body with approximated
geometry as a system of discrete particles, as well as moment of inertia that is determined by
closed-form expressions. :::

### Angular Momentum

The angular momentum ($L$) is the product of [moment of inertia $I$](#moment-of-inertia) and
[angular velocity $\omega$](#angular-velocity):

$$
\begin{aligned}
    L = I\omega
\end{aligned}
$$

### Work

The work ($W$) done by a force $F$ on a point mass with a movement of displacement $s$ is:

$$
\begin{aligned}
    W = \bm{F} \cdot \bm{s} = |\bm{F}||\bm{s}|\cos\theta
\end{aligned}
$$

:::info For a force that varies at different position, the line integral of $F$ across a surface $C$
is:

$$
\begin{aligned}
    W = \int_C F \cdot ds
\end{aligned}
$$

:::

## Wrap Up

### A.1 Kinematics & A.2 Forces and Momentum

**Problem 1.** A 1500 kg car is traveling on a horizontal road at a constant speed of 25.0 m/s. The
total resistive force (air drag + friction) is 800 N. The car then begins to accelerate uniformly
for 10.0 s, reaching a new constant speed. During the acceleration, the engine provides a constant
driving force of 2000 N. a) Calculate the car's acceleration. b) What is the final speed of the car?
c) At this new speed, what must the engine's driving force be to maintain it? d) What is the total
distance covered during the 10.0 s of acceleration?

<details>
<summary>Answer</summary>

- **Strategy:** Apply Newton's Second Law during acceleration and the definition of constant
  velocity (net force is zero) for the other parts. Use kinematics for the distance.
- **a) Acceleration:** During acceleration, the net force is
  $F_{\text{net}} = F_{\text{drive}} - F_{\text{resistive}}$.
  - $F_{\text{net}} = 2000 \text{ N} - 800 \text{ N} = 1200 \text{ N}$.
  - From Newton's Second Law,
    $F_{\text{net}} = ma \implies a = \frac{F_{\text{net}}}{m} = \frac{1200 \text{ N}}{1500 \text{ kg}} = 0.800 \text{ m/s}^2$.
- **b) Final Speed:** Use the kinematic equation $v = u + at$.
  - $v = 25.0 \text{ m/s} + (0.800 \text{ m/s}^2)(10.0 \text{ s}) = 25.0 + 8.0 = 33.0 \text{ m/s}$.
- **c) New Driving Force:** To maintain a constant speed of 33.0 m/s, the car must be in equilibrium
  (zero acceleration). This means the net force is zero.
  - $F_{\text{net}} = F_{\text{drive}} - F_{\text{resistive}} = 0$.
  - Therefore, $F_{\text{drive}} = F_{\text{resistive}} = 800 \text{ N}$. (This assumes resistive
    force is constant, a simplification.)
- **d) Distance:** Use the kinematic equation $s = ut + \frac{1}{2}at^2$.
  - $s = (25.0 \text{ m/s})(10.0 \text{ s}) + \frac{1}{2}(0.800 \text{ m/s}^2)(10.0 \text{ s})^2 = 250 + 0.4(100) = 290 \text{ m}$.
    **If you get this wrong, you should focus on:** Applying Newton's First Law ($F_{\text{net}}=0$
    for constant velocity) and Second Law ($F_{\text{net}}=ma$ for acceleration), and correctly
    linking the resulting acceleration to kinematic equations.

</details>

**Problem 2.** A 2.0 kg firework is launched vertically from rest. Its rocket motor provides a
constant upward thrust of 50.0 N for 3.0 s before running out of fuel. Ignore air resistance. a)
Calculate the maximum height the firework reaches. b) What is the total time the firework is in the
air (from launch until it returns to the ground)?

<details>
<summary>Answer</summary>

- **Strategy:** This is a two-stage motion problem. Stage 1 (powered ascent) has a net upward force.
  Stage 2 (coasting ascent and descent) has only gravity acting on it.
- **Stage 1: Powered Ascent (first 3.0 s)**
  - Net force:
    $F_{\text{net}} = F_{\text{thrust}} - F_g = 50.0 \text{ N} - (2.0 \text{ kg})(9.8 \text{ m/s}^2) = 50.0 - 19.6 = 30.4 \text{ N}$.
  - Acceleration: $a_1 = F_{\text{net}}/m = 30.4 / 2.0 = 15.2 \text{ m/s}^2$.
  - Height reached in Stage 1:
    $h_1 = \frac{1}{2}a_1 t^2 = \frac{1}{2}(15.2)(3.0)^2 = 68.4 \text{ m}$.
  - Velocity at end of Stage 1: $v_1 = a_1 t = 15.2 \times 3.0 = 45.6 \text{ m/s}$.
- **Stage 2: Coasting Motion (after 3.0 s)**
  - The firework now has an initial upward velocity of 45.6 m/s and is at a height of 68.4 m. The
    only acceleration is $a_2 = -g = -9.8 \text{ m/s}^2$.
  - **a) Maximum Height:** Find the additional height ($h_2$) it coasts upwards. Use
    $v^2 = u^2 + 2as$.
    - $0^2 = (45.6)^2 + 2(-9.8)h_2 \implies h_2 = \frac{45.6^2}{19.6} = 106.0 \text{ m}$.
    - Total max height: $H = h_1 + h_2 = 68.4 + 106.0 = 174.4 \text{ m}$.
  - **b) Total Time in Air:** We need the time for Stage 2. - Time to coast to peak
    ($t_{\text{up}}$):
    $v = u + at \implies 0 = 45.6 - 9.8 t_{\text{up}} \implies t_{\text{up}} = 4.65 \text{ s}$. -
    Time to fall from peak ($t_{\text{down}}$):
    $s = \frac{1}{2}at^2 \implies 174.4 = \frac{1}{2}(9.8) t_{\text{down}}^2 \implies t_{\text{down}} = 5.97 \text{ s}$. -
    Total time: $T = t_1 + t_{\text{up}} + t_{\text{down}} = 3.0 + 4.65 + 5.97 = 13.6 \text{ s}$.
    **If you get this wrong, you should focus on:** Breaking multi-stage motion problems into
    separate parts, calculating net force correctly in each stage, and using the final conditions of
    one stage as the initial conditions for the next.

</details>

**Problem 3.** A 5.0 kg object is suspended by a rope. A horizontal force is applied, pulling the
object to the side until the rope makes an angle of 35° with the vertical. The object is held in
static equilibrium. a) Draw a free-body diagram for the object. b) Calculate the magnitude of the
applied horizontal force and the tension in the rope.

<details>
<summary>Answer</summary>

- **a) Free-Body Diagram:** The diagram should show three forces acting on the object:
  1. Weight ($F_g = mg$) acting vertically downwards.
  2. Tension ($T$) acting upwards along the rope at 35° to the vertical.
  3. Applied Horizontal Force ($F_a$) acting horizontally.
- **b) Calculate Forces:** The object is in static equilibrium, so the net force in both the
  horizontal and vertical directions is zero. Resolve the tension into components.
  - Let the angle with the vertical be $\theta = 35^\circ$.
  - Vertical component of tension: $T_y = T \cos(\theta)$.
  - Horizontal component of tension: $T_x = T \sin(\theta)$.
  - **Vertical Equilibrium ($\Sigma F_y = 0$):**
    - $T_y - mg = 0 \implies T \cos(35^\circ) = (5.0 \text{ kg})(9.8 \text{ m/s}^2) = 49 \text{ N}$.
    - $T = \frac{49}{\cos(35^\circ)} = 59.8 \text{ N}$.
  - **Horizontal Equilibrium ($\Sigma F_x = 0$):** -
    $F_a - T_x = 0 \implies F_a = T \sin(35^\circ)$. -
    $F_a = (59.8 \text{ N}) \sin(35^\circ) = 34.3 \text{ N}$. **If you get this wrong, you should
    focus on:** The conditions for static equilibrium ($\Sigma F = 0$), correctly resolving vectors
    into components using trigonometry, and setting up and solving simultaneous equations for the
    vertical and horizontal forces.

</details>

**Problem 4.** A 0.20 kg ball traveling at 10 m/s collides with a stationary 0.30 kg ball. After the
collision, the 0.20 kg ball moves at 4.0 m/s at an angle of 30° to its original path. a) Determine
the speed and direction of the 0.30 kg ball after the collision. b) Was the collision elastic?
Justify your answer with a calculation.

<details>
<summary>Answer</summary>

- **Strategy:** This is a 2D collision. Apply conservation of momentum separately for the components
  parallel and perpendicular to the initial direction. Then compare kinetic energy before and after.
- Let the initial direction be the x-axis. Initial momentum is all in x: $p_i = (0.20)(10) = 2.0$ kg
  m/s.
- **a) Conservation of Momentum:**
  - **x-direction:** $p_{ix} = p_{fx} \implies 2.0 = (0.20)(4.0 \cos 30^\circ) + (0.30)v_{2x}$.
    - $2.0 = 0.693 + 0.30v_{2x} \implies v_{2x} = 4.36$ m/s.
  - **y-direction:** $p_{iy} = p_{fy} \implies 0 = (0.20)(4.0 \sin 30^\circ) + (0.30)v_{2y}$.
    - $0 = 0.40 + 0.30v_{2y} \implies v_{2y} = -1.33$ m/s.
  - **Speed and Direction of 2nd ball:**
    - Speed: $v_2 = \sqrt{v_{2x}^2 + v_{2y}^2} = \sqrt{4.36^2 + (-1.33)^2} = 4.56$ m/s.
    - Direction:
      $\theta = \arctan\left(\frac{v_{2y}}{v_{2x}}\right) = \arctan\left(\frac{-1.33}{4.36}\right) = -17.0^\circ$
      (below the original path).
- **b) Elasticity:** Compare initial and final total kinetic energy.
  - $E_{k, \text{initial}} = \frac{1}{2}(0.20)(10)^2 = 10.0$ J.
  - $E_{k, \text{final}} = \frac{1}{2}(0.20)(4.0)^2 + \frac{1}{2}(0.30)(4.56)^2 = 1.6 + 3.12 = 4.72$
    J.
  - Since $E_{k, \text{final}} \lt{} E_{k, \text{initial}}$, kinetic energy was lost, and the
    collision was **inelastic**. **If you get this wrong, you should focus on:** Applying
    conservation of momentum as a vector equation (i.e., in component form), combining velocity
    components to find final speed and direction, and the definition of an elastic collision
    (conservation of kinetic energy).

</details>

**Problem 5.** A 1200 kg car travels at a constant speed of 15 m/s around a flat circular track of
radius 50 m. It then moves to a section of the track banked at an angle $\theta$. a) For the flat
track, what is the magnitude of the frictional force required to keep the car on the track, and what
is the minimum coefficient of static friction required? b) For the banked track, what is the ideal
banking angle $\theta$ (the "design speed" angle) for the car to navigate the turn at 15 m/s without
any reliance on friction?

<details>
<summary>Answer</summary>

- **Strategy:** In both cases, a net horizontal force must provide the centripetal force. On the
  flat track, this is friction. On the ideal banked track, this is the horizontal component of the
  normal force.
- **a) Flat Track:**
  - The centripetal force required is $F_c = \frac{mv^2}{r} = \frac{1200 \cdot 15^2}{50} = 5400$ N.
  - This force is provided entirely by static friction, so $f_s = 5400$ N.
  - The maximum static friction is $f_{s,\text{max}} = \mu_s N = \mu_s mg$.
  - To avoid slipping, we need $f_s \le f_{s,\text{max}} \implies 5400 \le \mu_s(1200)(9.8)$.
  - $\mu_s \ge \frac{5400}{11760} = 0.46$. The minimum coefficient of static friction is 0.46.
- **b) Banked Track (No Friction):**
  - Draw a free-body diagram showing only weight ($mg$) down and the normal force ($N$)
    perpendicular to the banked surface.
  - Resolve the normal force into components: $N_y = N \cos\theta$ and $N_x = N \sin\theta$.
  - **Vertical equilibrium:** $N_y = mg \implies N \cos\theta = mg$.
  - **Horizontal net force:** The horizontal component provides the centripetal force:
    $N_x = F_c \implies N \sin\theta = \frac{mv^2}{r}$.
  - Divide the horizontal equation by the vertical equation to eliminate N:
    - $\frac{N \sin\theta}{N \cos\theta} = \frac{mv^2/r}{mg} \implies \tan\theta = \frac{v^2}{rg}$.
  - $\tan\theta = \frac{15^2}{50 \cdot 9.8} = 0.459$.
  - $\theta = \arctan(0.459) = 24.7^\circ$. **If you get this wrong, you should focus on:**
    Identifying the source of the centripetal force in different situations (friction vs. component
    of normal force), correctly resolving forces on an inclined plane, and solving a system of force
    equations.

</details>

**Problem 6.** **Question (HL Only):** A thin hoop of mass M and radius R ($I=MR^2$) rolls without
slipping down an incline of angle $\theta$. a) Draw a free-body diagram for the hoop, including the
force of static friction. b) By considering both linear and rotational dynamics, derive an
expression for the linear acceleration, $a$, of the hoop's center of mass. c) How does this
acceleration compare to that of a block sliding down the same incline without friction?

<details>
<summary>Answer</summary>

- **a) Free-Body Diagram:** The diagram should show:
  1. Weight ($Mg$) acting vertically down from the center.
  2. Normal force ($N$) acting perpendicular to the incline, from the point of contact.
  3. Static friction ($f_s$) acting _up_ the incline, at the point of contact. (This friction
     provides the torque to make it rotate).
- **b) Derive Acceleration:**
  - **Linear Motion (down the incline):** $F_{\text{net}} = Ma \implies Mg \sin\theta - f_s = Ma$.
    (Eq. 1)
  - **Rotational Motion (about the center):** The only force providing a torque is friction.
    $\tau_{\text{net}} = I\alpha \implies f_s R = (MR^2)\alpha$. (Eq. 2)
  - **No-slip condition:** $a = \alpha R \implies \alpha = a/R$.
  - Substitute the no-slip condition into Eq. 2: $f_s R = MR^2(a/R) \implies f_s = Ma$.
  - Substitute this expression for $f_s$ back into Eq. 1:
    - $Mg \sin\theta - Ma = Ma \implies Mg \sin\theta = 2Ma$.
    - $a = \frac{1}{2}g \sin\theta$.
- **c) Comparison:** A block sliding without friction has only the component of gravity accelerating
it, so its acceleration is $a_{\text{block}} = g \sin\theta$. The hoop's acceleration is exactly
half of this. This is because some of the initial potential energy must be converted into rotational
kinetic energy, leaving less for translational kinetic energy, resulting in a smaller linear
acceleration. **If you get this wrong, you should focus on:** Applying both linear and rotational
forms of Newton's second law, correctly identifying static friction as the source of torque for
rolling objects, and using the no-slip condition ($a=\alpha R$) to connect the two equations.
</details>

**Problem 7.** **Question (HL Only):** An ice skater is spinning at an angular speed of 10.0 rad/s
with her arms outstretched. In this position, her moment of inertia is 4.0 kg m². She then pulls her
arms in, reducing her moment of inertia to 1.5 kg m². a) What is her new angular speed? b) Calculate
the change in her rotational kinetic energy. c) Where does this change in energy come from?

<details>
<summary>Answer</summary>

- **Strategy:** Apply conservation of angular momentum because there is no external torque. Then
  calculate the kinetic energy before and after.
- **a) New Angular Speed:**
  - Conservation of angular momentum: $L_i = L_f \implies I_i \omega_i = I_f \omega_f$.
  - $(4.0 \text{ kg m}^2)(10.0 \text{ rad/s}) = (1.5 \text{ kg m}^2) \omega_f$.
  - $\omega_f = \frac{40.0}{1.5} = 26.7$ rad/s.
- **b) Change in Rotational Kinetic Energy:**
  - $E_{k, \text{initial}} = \frac{1}{2}I_i \omega_i^2 = \frac{1}{2}(4.0)(10.0)^2 = 200$ J.
  - $E_{k, \text{final}} = \frac{1}{2}I_f \omega_f^2 = \frac{1}{2}(1.5)(26.7)^2 = 533$ J.
  - $\Delta E_k = E_{k, \text{final}} - E_{k, \text{initial}} = 533 - 200 = 333$ J.
- **c) Source of Energy:** The kinetic energy increased. This increase comes from the **work done by
the skater** using her muscles to pull her arms inward. She is doing work on her own system, which
is not an isolated system in terms of energy (though it is for angular momentum, as the forces are
internal). **If you get this wrong, you should focus on:** The law of conservation of angular
momentum and when it applies (no net external torque). Also, understanding that rotational kinetic
energy is _not_ necessarily conserved when the moment of inertia changes, and that work must be done
to change the configuration of a rotating system.
</details>

**Problem 8.** **Question (HL Only):** From the perspective of an observer in a laboratory, a muon
is created by a cosmic ray at an altitude of 10.0 km. It travels downwards at a speed of 0.995c. The
proper half-life of a muon at rest is 1.56 μs. a) From the lab observer's perspective, what is the
muon's half-life? b) Will the muon reach the ground before decaying, according to the lab observer?
Justify with a calculation. c) Now, analyze the situation from the muon's reference frame. How does
the muon "explain" its ability to reach the ground?

<details>
<summary>Answer</summary>

- **Strategy:** Use time dilation for the lab frame analysis and length contraction for the muon's
  frame analysis.
- **a) Dilated Half-Life (Lab Frame):**
  - $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}} = \frac{1}{\sqrt{1 - 0.995^2}} = 10.01$.
  - The dilated half-life is
    $\Delta t = \gamma \Delta t_0 = 10.01 \times (1.56 \times 10^{-6} \text{ s}) = 1.56 \times 10^{-5}$
    s.
- **b) Survival in Lab Frame:**
  - Time for the muon to travel 10.0 km:
    $t_{\text{travel}} = \frac{\text{distance}}{\text{speed}} = \frac{10000 \text{ m}}{0.995 \times 3.0 \times 10^8 \text{ m/s}} = 3.35 \times 10^{-5}$
    s.
  - $t_{\text{travel}} = 33.5$ μs. The dilated half-life is 15.6 μs.
  - Since the travel time (33.5 μs) is longer than one dilated half-life (15.6 μs), less than half
    the muons will survive. Specifically, the number of half-lives passed is
    $33.5/15.6 \approx 2.15$. A significant fraction will reach the ground. (The question is simply
    "will it reach", implying does it have time. Yes, it has time before it all decays).
- **c) Muon's Reference Frame:**
  - In its own frame, the muon's half-life is just the proper half-life, $\Delta t_0 = 1.56$ μs. It
    "lives" for only a short time.
  - From the muon's perspective, the Earth and its atmosphere are rushing towards it at 0.995c. The
    distance of 10.0 km is **length contracted**.
  - Contracted distance: $L = \frac{L_0}{\gamma} = \frac{10.0 \text{ km}}{10.01} = 0.999$ km or 999
    m.
  - Time to travel this contracted distance:
    $t' = \frac{L}{v} = \frac{999 \text{ m}}{0.995 \times 3.0 \times 10^8 \text{ m/s}} = 3.35 \times 10^{-6}$
    s = 3.35 μs.
  - From the muon's perspective, it only needs to survive for 3.35 μs to reach the ground. Since
    this is longer than its proper half-life of 1.56 μs, it has a chance to make it. Both frames
    agree on the outcome. **If you get this wrong, you should focus on:** The two key consequences
    of special relativity. For a stationary observer watching a moving object, time dilates (clocks
    run slow). For a moving observer, distances in the direction of motion contract (are shorter).
    Both phenomena must lead to the same physical conclusion.

</details>

---

## Worked Example: Connected Bodies on a Frictionless Surface

**Problem:** Two blocks, $m_1 = 3.0$ kg and $m_2 = 5.0$ kg, are connected by a light inextensible
string. Block $m_1$ rests on a frictionless horizontal table, and the string passes over a
frictionless pulley at the edge so that $m_2$ hangs vertically. The system is released from rest. a)
Find the acceleration of the system. b) Find the tension in the string.

**Solution:**

For $m_2$ (hanging): $m_2 g - T = m_2 a$ (Eq. 1) For $m_1$ (on table): $T = m_1 a$ (Eq. 2, since no
friction)

Substitute Eq. 2 into Eq. 1: $m_2 g - m_1 a = m_2 a$ $m_2 g = (m_1 + m_2) a$
$a = \frac{m_2 g}{m_1 + m_2} = \frac{(5.0)(9.8)}{3.0 + 5.0} = \frac{49}{8.0} = 6.13$ m/s$^2$

Tension: $T = m_1 a = (3.0)(6.13) = 18.4$ N.

---

## Worked Example: Inclined Plane with Friction

**Problem:** A 4.0 kg block is placed on a $30^\circ$ incline. The coefficient of static friction is
$\mu_s = 0.40$ and the coefficient of kinetic friction is $\mu_k = 0.30$. a) Will the block slide?
Justify with a calculation. b) If a horizontal force of 20 N is applied pushing the block up the
incline, find the acceleration.

**Solution:**

**a) Check if block slides:** Component of gravity along the incline:
$mg\sin 30° = (4.0)(9.8)(0.5) = 19.6$ N. Maximum static friction:
$f_{s,\max} = \mu_s mg\cos 30° = (0.40)(4.0)(9.8)(0.866) = 13.6$ N. Since $mg\sin 30° = 19.6$ N
$\gt{} f_{s,\max} = 13.6$ N, the block **will slide**.

**b) With applied horizontal force of 20 N up the incline:** Resolve the horizontal force into
components parallel and perpendicular to the incline: $F_{\parallel} = 20\cos 30° = 17.3$ N (up the
incline). $F_{\perp} = 20\sin 30° = 10.0$ N (into the incline).

Normal force: $N = mg\cos 30° + F_{\perp} = (4.0)(9.8)(0.866) + 10.0 = 33.9 + 10.0 = 43.9$ N.
Kinetic friction: $f_k = \mu_k N = (0.30)(43.9) = 13.2$ N (down the incline).

Net force along the incline:
$F_{\text{net}} = F_{\parallel} - mg\sin 30° - f_k = 17.3 - 19.6 - 13.2 = -15.5$ N.

The net force is negative (down the incline), meaning the block slides **down** despite the applied
force. The acceleration is: $a = \frac{|F_{\text{net}}|}{m} = \frac{15.5}{4.0} = 3.88$ m/s$^2$ down
the incline.

---

## Worked Example: Torque and Rotational Equilibrium

**Problem:** A uniform beam of mass 10 kg and length 4.0 m is pivoted at its left end. A load of 15
kg is hung from the beam at a point 3.0 m from the pivot. The beam is held in horizontal equilibrium
by a vertical rope attached 1.0 m from the right end. a) Calculate the tension in the rope. b)
Calculate the magnitude and direction of the reaction force at the pivot.

**Solution:**

**a) Take moments about the pivot (clockwise positive):**

Clockwise moments:

- Weight of beam: $(10)(9.8)(2.0) = 196$ N m (acts at the center, 2.0 m from pivot).
- Weight of load: $(15)(9.8)(3.0) = 441$ N m.

Anticlockwise moments:

- Tension in rope: $T(4.0 - 1.0) = 3.0T$.

For equilibrium: $3.0T = 196 + 441 = 637$. $T = 212.3$ N.

**b) Vertical equilibrium:** $R_{\text{pivot}} + T = mg_{\text{beam}} + mg_{\text{load}}$
$R_{\text{pivot}} + 212.3 = 98 + 147 = 245$ $R_{\text{pivot}} = 32.7$ N (upward).

---

## Angular Momentum Conservation: Extended Analysis

The law of conservation of angular momentum states that when no net external torque acts on a
system, the total angular momentum remains constant:

$$
L_{\text{initial}} = L_{\text{final}} \implies I_i \omega_i = I_f \omega_f
$$

This principle explains a wide range of phenomena:

- **Spinning ice skater:** Pulling arms in reduces $I$, so $\omega$ must increase.
- **Spinning neutron star:** When a star collapses, its moment of inertia decreases enormously,
  causing extremely rapid rotation (pulsars can spin at hundreds of revolutions per second).
- **Orbital mechanics:** A planet in an elliptical orbit moves faster at perihelion (closer to the
  star, smaller effective $r$) and slower at aphelion (farther, larger effective $r$).

**Important distinction:** Angular momentum is conserved when the net **external torque** is zero.
Internal forces (like the skater's muscles) can change $I$ and $\omega$, but not the total $L$.
However, internal forces **can** change the rotational kinetic energy (as seen in the skater problem
where $E_k$ increased).

---

## Common Pitfalls

1. **Centripetal force is not a "new" force.** It is the net force directed toward the center.
   Always identify which force(s) provide the centripetal force: tension, friction, component of
   gravity, normal force, etc.

2. **Confusing centripetal and centrifugal force.** Centrifugal force is a **fictitious force** that
   appears in a rotating reference frame. In an inertial frame, only centripetal force exists.

3. **Forgetting that rolling involves both translation and rotation.** A rolling object has both
   translational kinetic energy ($\frac{1}{2}mv^2$) and rotational kinetic energy
   ($\frac{1}{2}I\omega^2$). The total is $\frac{1}{2}mv^2(1 + \frac{I}{mr^2})$.

4. **Sign conventions in angular momentum.** Define a positive direction of rotation and be
   consistent. Clockwise and counterclockwise torques must be assigned opposite signs.

5. **Using the wrong moment of inertia.** For a solid sphere $I = \frac{2}{5}mr^2$; for a hollow
   sphere $I = \frac{2}{3}mr^2$; for a solid cylinder $I = \frac{1}{2}mr^2$; for a thin hoop
   $I = mr^2$. These are different and must be used correctly.

6. **Equating centripetal acceleration to gravity.** $g = v^2/r$ only applies at the surface of a
   planet for orbital motion. Do not use it for objects on the surface (unless explicitly stated).

---

## Problem Set

<details>
<summary>Question 1</summary>

A 2.0 kg block slides down a frictionless incline of angle $35^\circ$ from a height of 1.5 m. a) Find the
speed of the block at the bottom of the incline. b) The block then slides across a rough horizontal
surface with $\mu_k = 0.30$. How far does it travel before stopping?

</details>

<details>
<summary>Answer 1</summary>

a) By conservation of energy:
$mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2(9.8)(1.5)} = \sqrt{29.4} = 5.42$ m/s.

b) On the rough surface, friction decelerates the block: $f_k = \mu_k mg = (0.30)(2.0)(9.8) = 5.88$
N. $a = \frac{f_k}{m} = \frac{5.88}{2.0} = 2.94$ m/s$^2$. Using $v^2 = u^2 + 2as$:
$0 = (5.42)^2 - 2(2.94)s \implies s = \frac{29.4}{5.88} = 5.0$ m.

</details>

<details>
<summary>Question 2</summary>

A 500 g ball is attached to a string of length 0.80 m and swung in a vertical circle. The minimum
speed at the top of the circle is $2.8$ m/s. a) Calculate the tension in the string at the top of
the circle. b) Calculate the speed of the ball at the bottom of the circle (assuming no energy
losses).

</details>

<details>
<summary>Answer 2</summary>

a) At the top: $T + mg = \frac{mv^2}{r}$.
$T = \frac{mv^2}{r} - mg = \frac{(0.50)(2.8)^2}{0.80} - (0.50)(9.8) = \frac{3.92}{0.80} - 4.9 = 4.9 - 4.9 = 0$
N. (This confirms the minimum speed condition where tension equals zero at the top.)

b) Conservation of energy: $\frac{1}{2}mv_b^2 = \frac{1}{2}mv_t^2 + mg(2r)$.
$v_b = \sqrt{v_t^2 + 4gr} = \sqrt{(2.8)^2 + 4(9.8)(0.80)} = \sqrt{7.84 + 31.36} = \sqrt{39.2} = 6.26$
m/s.

</details>

<details>
<summary>Question 3</summary>

A disc of mass 0.50 kg and radius 0.20 m ($I = \frac{1}{2}mr^2$) is rotating at 300 rpm. A
frictional torque of 0.030 N m is applied to bring it to rest. a) Calculate the initial angular
momentum. b) How long does it take for the disc to stop?

</details>

<details>
<summary>Answer 3</summary>

a) $\omega_i = 300 \times \frac{2\pi}{60} = 31.4$ rad/s. $I = \frac{1}{2}(0.50)(0.20)^2 = 0.010$ kg
m$^2$. $L_i = I\omega_i = (0.010)(31.4) = 0.314$ kg m$^2$/s.

b)
$\tau = \frac{\Delta L}{\Delta t} \implies \Delta t = \frac{L_i}{\tau} = \frac{0.314}{0.030} = 10.5$
s.

</details>

<details>
<summary>Question 4</summary>

A 60 kg person stands at the edge of a rotating platform of mass 100 kg and radius 2.0 m, modeled as
a uniform disc ($I = \frac{1}{2}mr^2$). The system rotates at 1.5 rad/s. The person walks to the
center of the platform. What is the new angular speed?

</details>

<details>
<summary>Answer 4</summary>

$I_{\text{disc}} = \frac{1}{2}(100)(2.0)^2 = 200$ kg m$^2$.
$I_{\text{person, initial}} = mr^2 = (60)(2.0)^2 = 240$ kg m$^2$. $I_{\text{person, final}} = 0$ (at
the center, $r = 0$).

$I_i = 200 + 240 = 440$ kg m$^2$, $\omega_i = 1.5$ rad/s. $I_f = 200 + 0 = 200$ kg m$^2$.

Conservation: $I_i\omega_i = I_f\omega_f \implies (440)(1.5) = 200\omega_f$.
$\omega_f = \frac{660}{200} = 3.3$ rad/s.

</details>

<details>
<summary>Question 5</summary>

A 3.0 kg block on a frictionless table is connected by a string over a pulley to a 2.0 kg block
hanging vertically. The pulley has mass 0.50 kg and radius 0.10 m ($I = \frac{1}{2}mr^2$ for the
pulley). a) Derive an expression for the acceleration of the system. b) Calculate the tension on
each side of the pulley.

</details>

<details>
<summary>Answer 5</summary>

a) Let $T_1$ be the tension on the table side and $T_2$ on the hanging side. For $m_1$ (on table):
$T_1 = m_1 a$ (Eq. 1). For $m_2$ (hanging): $m_2 g - T_2 = m_2 a$ (Eq. 2). For pulley:
$(T_2 - T_1)R = I\alpha = (\frac{1}{2}m_p R^2)(a/R) = \frac{1}{2}m_p Ra$. So
$T_2 - T_1 = \frac{1}{2}m_p a$ (Eq. 3).

From Eq. 1 and Eq. 2: $T_2 = m_2(g - a)$ and $T_1 = m_1 a$. Substituting into Eq. 3:
$m_2(g - a) - m_1 a = \frac{1}{2}m_p a$. $m_2 g = (m_1 + m_2 + \frac{1}{2}m_p) a$.
$a = \frac{m_2 g}{m_1 + m_2 + \frac{1}{2}m_p} = \frac{(2.0)(9.8)}{3.0 + 2.0 + 0.25} = \frac{19.6}{5.25} = 3.73$
m/s$^2$.

b) $T_1 = m_1 a = (3.0)(3.73) = 11.2$ N. $T_2 = m_2(g - a) = (2.0)(9.8 - 3.73) = (2.0)(6.07) = 12.1$
N.

</details>

<details>
<summary>Question 6</summary>

A solid sphere of mass $M$ and radius $R$ ($I = \frac{2}{5}MR^2$) rolls without slipping down an
incline of angle $\theta$. Derive an expression for the linear acceleration of the sphere in terms
of $g$ and $\theta$.

</details>

<details>
<summary>Answer 6</summary>

Linear motion (down the incline): $Mg\sin\theta - f = Ma$ (Eq. 1). Rotational motion:
$fR = I\alpha = (\frac{2}{5}MR^2)(a/R) = \frac{2}{5}MRa$ (Eq. 2). From Eq. 2: $f = \frac{2}{5}Ma$.
Substitute into Eq. 1: $Mg\sin\theta - \frac{2}{5}Ma = Ma$. $Mg\sin\theta = \frac{7}{5}Ma$.
$a = \frac{5}{7}g\sin\theta$.

</details>
