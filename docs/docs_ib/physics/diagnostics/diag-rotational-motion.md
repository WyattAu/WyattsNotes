---
title: Rotational Motion — Diagnostic Tests
description: Hardest IB Physics rotational motion diagnostic tests covering torque perpendicular distance, parallel axis theorem, angular momentum conservation, and combined translational-rotational dynamics.
slug: diag-rotational-motion
hide_table_of_contents: true
---

# Rotational Motion — Diagnostic Tests

## Unit Tests

### UT-1: Torque Calculation with Perpendicular Distance Trap

**Question:**

A force $\vec{F} = (12\hat{i} - 5\hat{j} + 8\hat{k})\,\text{N}$ is applied at a point with position vector $\vec{r} = (3\hat{i} + 4\hat{j} - 2\hat{k})\,\text{m}$ relative to the origin.

(a) Calculate the torque about the origin.

(b) Calculate the magnitude of the torque.

(c) A student calculates the torque magnitude as $|\vec{F}| \times |\vec{r}|$ and obtains a different answer. Explain why this is wrong and identify the correct perpendicular distance.

**Solution:**

(a) Torque: $\vec{\tau} = \vec{r} \times \vec{F}$

$$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 3 & 4 & -2 \\ 12 & -5 & 8 \end{vmatrix}$$

$$= \hat{i}(4 \times 8 - (-2) \times (-5)) - \hat{j}(3 \times 8 - (-2) \times 12) + \hat{k}(3 \times (-5) - 4 \times 12)$$

$$= \hat{i}(32 - 10) - \hat{j}(24 + 24) + \hat{k}(-15 - 48)$$

$$= 22\hat{i} - 48\hat{j} - 63\hat{k}\,\text{N}\,\text{m}$$

(b) Magnitude: $|\vec{\tau}| = \sqrt{22^2 + 48^2 + 63^2} = \sqrt{484 + 2304 + 3969} = \sqrt{6757} = 82.2\,\text{N}\,\text{m}$

(c) The student computed $|\vec{F}| \times |\vec{r}|$, which is the product of the magnitudes. This is only correct when $\vec{F}$ is perpendicular to $\vec{r}$. In general:

$$|\vec{r} \times \vec{F}| = |\vec{r}||\vec{F}|\sin\theta$$

where $\theta$ is the angle between $\vec{r}$ and $\vec{F}$.

The correct perpendicular distance (moment arm) is $d = |\vec{r}|\sin\theta$.

$$|\vec{F}| = \sqrt{144 + 25 + 64} = \sqrt{233} = 15.26\,\text{N}$$

$$|\vec{r}| = \sqrt{9 + 16 + 4} = \sqrt{29} = 5.385\,\text{m}$$

$$|\vec{F}| \times |\vec{r}| = 15.26 \times 5.385 = 82.2\,\text{N}\,\text{m}$$

In this case the product of magnitudes equals the torque magnitude. This occurs because $\vec{r} \cdot \vec{F} = 3(12) + 4(-5) + (-2)(8) = 36 - 20 - 16 = 0$, so $\vec{r}$ and $\vec{F}$ are perpendicular ($\theta = 90^\circ$). The perpendicular distance is $d = |\vec{r}| = 5.385\,\text{m}$.

However, the student's **method** is wrong in general -- they must use the cross product, not simply multiply magnitudes.

---

### UT-2: Parallel Axis Theorem Application

**Question:**

A uniform solid disc of mass $M = 8.0\,\text{kg}$ and radius $R = 0.30\,\text{m}$ is pivoted at a point on its rim, so it can rotate in its own plane about the pivot.

(a) Calculate the moment of inertia of the disc about the pivot using the parallel axis theorem.

(b) The disc is displaced through a small angle from its equilibrium position and released. Calculate the period of small oscillations.

(c) The pivot is now moved to a point at distance $d$ from the centre along a radius. Find the value of $d$ that minimises the period of small oscillations (this is the minimum period of a compound pendulum).

**Solution:**

(a) Moment of inertia about the centre: $I_{\text{cm}} = \frac{1}{2}MR^2 = \frac{1}{2} \times 8.0 \times 0.09 = 0.360\,\text{kg}\,\text{m}^2$

By the parallel axis theorem, with the pivot at distance $R$ from the centre:

$$I = I_{\text{cm}} + Md^2 = 0.360 + 8.0 \times 0.30^2 = 0.360 + 0.720 = 1.080\,\text{kg}\,\text{m}^2$$

(b) For a compound pendulum, the period is:

$$T = 2\pi\sqrt{\frac{I}{Mgd}}$$

where $d = R = 0.30\,\text{m}$:

$$T = 2\pi\sqrt{\frac{1.080}{8.0 \times 9.81 \times 0.30}} = 2\pi\sqrt{\frac{1.080}{23.54}} = 2\pi\sqrt{0.04588} = 2\pi \times 0.2142 = 1.346\,\text{s}$$

(c) The period is $T = 2\pi\sqrt{\frac{I_{\text{cm}} + Md^2}{Mgd}} = 2\pi\sqrt{\frac{R^2/2 + d^2}{gd}}$

To minimise $T$, we minimise $\frac{R^2/2 + d^2}{d} = \frac{R^2}{2d} + d$.

Setting the derivative to zero:

$$\frac{d}{dd}\left(\frac{R^2}{2d} + d\right) = -\frac{R^2}{2d^2} + 1 = 0$$

$$d^2 = \frac{R^2}{2}$$

$$d = \frac{R}{\sqrt{2}} = \frac{0.30}{1.414} = 0.212\,\text{m}$$

This is the radius of gyration of the disc, and at this distance the period equals that of a simple pendulum of length equal to the radius of gyration.

---

### UT-3: Angular Momentum Conservation with Changing Moment of Inertia

**Question:**

A figure skater of mass $60\,\text{kg}$ is spinning with arms extended at $2.0\,\text{rad}\,\text{s}^{-1}$. Her moment of inertia with arms extended is $4.0\,\text{kg}\,\text{m}^2$. She then pulls her arms in, reducing her moment of inertia to $1.2\,\text{kg}\,\text{m}^2$.

(a) Calculate her new angular speed.

(b) Calculate the work done by the skater in pulling her arms in.

(c) Explain why the skater's kinetic energy increases despite no external torque acting, and identify where the extra energy comes from.

**Solution:**

(a) Angular momentum is conserved (no external torque):

$$L = I_1\omega_1 = I_2\omega_2$$

$$4.0 \times 2.0 = 1.2 \times \omega_2$$

$$\omega_2 = \frac{8.0}{1.2} = 6.67\,\text{rad}\,\text{s}^{-1}$$

(b) Initial rotational KE: $KE_1 = \frac{1}{2}I_1\omega_1^2 = \frac{1}{2} \times 4.0 \times 4.0 = 8.0\,\text{J}$

Final rotational KE: $KE_2 = \frac{1}{2}I_2\omega_2^2 = \frac{1}{2} \times 1.2 \times 44.4 = 26.7\,\text{J}$

Work done $= KE_2 - KE_1 = 26.7 - 8.0 = 18.7\,\text{J}$

(c) The kinetic energy increases because the skater does internal work against the centrifugal tendency of her arms. When she pulls her arms in, she must exert a radial inward force (in the rotating frame) against the centrifugal effect. This internal force does work on the system, converting chemical energy from her muscles into rotational kinetic energy.

No external torque is needed because the angular momentum is conserved -- the increase in angular velocity compensates exactly for the decrease in moment of inertia. The energy comes from the skater's metabolic processes.

## Integration Tests

### IT-1: Rolling Without Slipping Down an Incline (with Energy and Dynamics)

**Question:**

A solid sphere of mass $2.0\,\text{kg}$ and radius $0.10\,\text{m}$ is released from rest at the top of a rough incline of length $3.0\,\text{m}$ and angle $30^\circ$ to the horizontal. The sphere rolls without slipping.

(a) Calculate the acceleration of the centre of mass of the sphere.

(b) Calculate the speed of the centre of mass at the bottom of the incline.

(c) If the incline were frictionless, calculate the speed at the bottom and compare with part (b). Explain the difference.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) For a solid sphere, $I_{\text{cm}} = \frac{2}{5}mr^2$.

For rolling without slipping: $a = r\alpha$ and $v = r\omega$.

Taking forces along the incline (down the slope positive):

$$mg\sin\theta - f = ma \quad \text{--- (1)}$$

Torque about the centre of mass: $fr = I_{\text{cm}}\alpha = I_{\text{cm}} \times a/r$

$$f = \frac{I_{\text{cm}}a}{r^2} = \frac{2}{5}ma \quad \text{--- (2)}$$

Substituting (2) into (1):

$$mg\sin\theta - \frac{2}{5}ma = ma$$

$$mg\sin\theta = \frac{7}{5}ma$$

$$a = \frac{5g\sin\theta}{7} = \frac{5 \times 9.81 \times 0.5}{7} = \frac{24.525}{7} = 3.50\,\text{m}\,\text{s}^{-2}$$

(b) Using $v^2 = u^2 + 2as$ with $u = 0$:

$$v^2 = 2 \times 3.50 \times 3.0 = 21.0$$

$$v = 4.58\,\text{m}\,\text{s}^{-1}$$

Alternatively, using energy conservation:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}mv^2 + \frac{1}{2} \times \frac{2}{5}mr^2 \times \frac{v^2}{r^2}$$

$$mgh = \frac{7}{10}mv^2$$

$$v = \sqrt{\frac{10gh}{7}} = \sqrt{\frac{10 \times 9.81 \times 3.0 \times \sin 30^\circ}{7}} = \sqrt{\frac{10 \times 9.81 \times 1.5}{7}} = \sqrt{21.02} = 4.58\,\text{m}\,\text{s}^{-1}$$

(c) On a frictionless incline, all PE converts to translational KE:

$$mgh = \frac{1}{2}mv^2$$

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 1.5} = \sqrt{29.43} = 5.42\,\text{m}\,\text{s}^{-1}$$

The frictionless case gives a higher speed ($5.42\,\text{m}\,\text{s}^{-1}$ vs $4.58\,\text{m}\,\text{s}^{-1}$). The difference arises because in the rolling case, some gravitational PE is converted to rotational kinetic energy rather than translational kinetic energy. The fraction going to translation is $\frac{5}{7} \approx 71\%$ and to rotation is $\frac{2}{7} \approx 29\%$.

---

### IT-2: Angular Momentum in a Collision (with Dynamics and Kinematics)

**Question:**

A uniform rod of mass $3.0\,\text{kg}$ and length $2.0\,\text{m}$ hangs vertically from a frictionless pivot at its upper end. A bullet of mass $50\,\text{g}$ travelling horizontally at $400\,\text{m}\,\text{s}^{-1}$ embeds itself in the rod at its lowest point.

(a) Calculate the angular velocity of the rod immediately after the collision.

(b) Calculate the maximum angle through which the rod swings.

(c) The bullet instead strikes the rod at its midpoint. Calculate the new angular velocity and compare with part (a).

**Solution:**

(a) Angular momentum is conserved about the pivot (the external forces at the pivot exert no torque about the pivot itself).

Moment of inertia of the rod about the pivot: $I_{\text{rod}} = \frac{1}{3}ML^2 = \frac{1}{3} \times 3.0 \times 4.0 = 4.0\,\text{kg}\,\text{m}^2$

Moment of inertia of the bullet (point mass at distance $L$ from pivot): $I_{\text{bullet}} = mL^2 = 0.050 \times 4.0 = 0.20\,\text{kg}\,\text{m}^2$

Total moment of inertia: $I = 4.0 + 0.20 = 4.20\,\text{kg}\,\text{m}^2$

Initial angular momentum of the bullet about the pivot:

$$L_i = mvL = 0.050 \times 400 \times 2.0 = 40.0\,\text{kg}\,\text{m}^2\,\text{s}^{-1}$$

After collision (angular momentum conserved):

$$L_i = I\omega$$

$$40.0 = 4.20\omega$$

$$\omega = \frac{40.0}{4.20} = 9.52\,\text{rad}\,\text{s}^{-1}$$

(b) Energy conservation from the instant after collision to maximum angle $\theta$:

$$\frac{1}{2}I\omega^2 = (M + m)g \times \text{rise of centre of mass}$$

The centre of mass of the combined system (rod + bullet at end) is at distance from pivot:

$$d_{\text{cm}} = \frac{M \times L/2 + m \times L}{M + m} = \frac{3.0 \times 1.0 + 0.050 \times 2.0}{3.050} = \frac{3.10}{3.050} = 1.016\,\text{m}$$

Rise of centre of mass: $\Delta h = d_{\text{cm}}(1 - \cos\theta)$

$$\frac{1}{2} \times 4.20 \times 9.52^2 = 3.050 \times 9.81 \times 1.016(1 - \cos\theta)$$

$$190.3 = 30.42(1 - \cos\theta)$$

$$1 - \cos\theta = 6.26$$

Since $1 - \cos\theta$ cannot exceed 2, the rod makes a full revolution. This means the kinetic energy after the collision exceeds the gravitational PE needed for a complete rotation.

Check: PE for full rotation (rod to become horizontal, $\theta = 90^\circ$):

$\Delta h = 1.016\,\text{m}$, so $PE = 3.050 \times 9.81 \times 1.016 = 30.42\,\text{J} \lt 190.3\,\text{J}$.

The rod swings over the top (makes complete circles).

(c) If the bullet strikes at the midpoint ($L/2 = 1.0\,\text{m}$):

Initial angular momentum: $L_i = mv \times L/2 = 0.050 \times 400 \times 1.0 = 20.0\,\text{kg}\,\text{m}^2\,\text{s}^{-1}$

Moment of inertia of bullet: $I_{\text{bullet}} = m(L/2)^2 = 0.050 \times 1.0 = 0.050\,\text{kg}\,\text{m}^2$

Total $I = 4.0 + 0.050 = 4.050\,\text{kg}\,\text{m}^2$

$$\omega = \frac{20.0}{4.050} = 4.94\,\text{rad}\,\text{s}^{-1}$$

The angular velocity is approximately halved when the bullet strikes at the midpoint rather than the end, because the angular momentum input is halved (shorter moment arm) while the moment of inertia is nearly unchanged.

---

### IT-3: Yo-Yo Dynamics (with Energy and Kinematics)

**Question:**

A yo-yo consists of two discs of mass $M = 0.10\,\text{kg}$ each and radius $R = 0.030\,\text{m}$, connected by an axle of negligible mass and radius $r = 0.005\,\text{m}$. A string is wound around the axle. The yo-yo is released from rest with the string unwinding.

(a) Calculate the moment of inertia of the yo-yo about its central axis.

(b) Calculate the acceleration of the centre of mass as the yo-yo descends.

(c) Calculate the tension in the string and explain why the yo-yo descends more slowly than a freely falling object of the same mass.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Each disc: $I_{\text{disc}} = \frac{1}{2}MR^2 = \frac{1}{2} \times 0.10 \times 0.030^2 = 4.5 \times 10^{-5}\,\text{kg}\,\text{m}^2$

Total: $I = 2 \times 4.5 \times 10^{-5} = 9.0 \times 10^{-5}\,\text{kg}\,\text{m}^2$

Total mass: $m = 2M = 0.20\,\text{kg}$

(b) Forces: weight $mg$ downward, tension $T$ upward.

Translational: $mg - T = ma$

Rotational about the centre: $Tr = I\alpha$

For rolling without slipping (string unwinding): $a = r\alpha$, so $\alpha = a/r$.

$$T = \frac{I\alpha}{r} = \frac{Ia}{r^2}$$

Substituting into the translational equation:

$$mg - \frac{Ia}{r^2} = ma$$

$$a\left(m + \frac{I}{r^2}\right) = mg$$

$$a = \frac{mg}{m + I/r^2} = \frac{0.20 \times 9.81}{0.20 + 9.0 \times 10^{-5}/(0.005)^2}$$

$$a = \frac{1.962}{0.20 + 3.6} = \frac{1.962}{3.8} = 0.516\,\text{m}\,\text{s}^{-2}$$

(c) Tension: $T = mg - ma = 1.962 - 0.20 \times 0.516 = 1.962 - 0.103 = 1.86\,\text{N}$

The yo-yo descends much more slowly than free fall ($a = 0.516\,\text{m}\,\text{s}^{-2}$ vs $g = 9.81\,\text{m}\,\text{s}^{-2}$) because a significant fraction of the gravitational PE is converted to rotational kinetic energy rather than translational kinetic energy. The string tension provides a torque that causes rotation, and the constraint $a = r\alpha$ means the linear acceleration is reduced by the factor $\frac{1}{1 + I/(mr^2)}$.
