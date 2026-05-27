---
title: 'Circular Motion -- Diagnostic Tests'
description:
  Diagnostic tests for centripetal acceleration, horizontal and vertical circles, angular velocity,
  and banked curves at maximum A-Level Physics difficulty.
slug: diag-circular-motion
hide_table_of_contents: true
---

# Circular Motion — Diagnostic Tests

## Unit Tests

### UT-1: Vertical Circle — Minimum Speed at the Top

**Question:**

A small bead of mass $0.050\,\text{kg}$ is threaded on a smooth vertical circular wire of radius
$0.40\,\text{m}$. The bead is projected from the lowest point with speed $u$.

(a) Derive the condition for the bead to complete a full vertical circle.

(b) Calculate the minimum value of $u$ for the bead to reach the highest point of the circle.

(c) For $u = 6.0\,\text{m}\,\text{s}^{-1}$Calculate the normal reaction from the wire at the highest
point and at the lowest point.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) At the highest point, the forces on the bead are: weight $mg$ downward and normal reaction $R$
from the wire (also downward, toward the centre). The centripetal force is provided by both:

$$R + mg = \frac◆LB◆mv_{\text{top}}^2◆RB◆◆LB◆r◆RB◆$$

For the bead to remain in contact with the wire, $R \ge 0$:

$$\frac◆LB◆mv_{\text{top}}^2◆RB◆◆LB◆r◆RB◆ \ge mg \Rightarrow v_{\text{top}}^2 \ge gr \Rightarrow v_{\text{top}} \ge \sqrt{gr}$$

Using energy conservation from the lowest to the highest point (height difference $= 2r$):

$$\frac{1}{2}mu^2 = \frac{1}{2}mv_{\text{top}}^2 + mg(2r)$$
$$u^2 = v_{\text{top}}^2 + 4gr \ge gr + 4gr = 5gr$$ $$u \ge \sqrt{5gr}$$

(b)
$u_{\min} = \sqrt{5gr} = \sqrt◆LB◆5 \times 9.81 \times 0.40◆RB◆ = \sqrt{19.62} = 4.43\,\text{m}\,\text{s}^{-1}$

(c) With $u = 6.0\,\text{m}\,\text{s}^{-1}$Using energy conservation:

At the top:
$\frac{1}{2}(0.050)(36) = \frac{1}{2}(0.050)v_{\text{top}}^2 + 0.050 \times 9.81 \times 0.80$

$$0.90 = 0.025v_{\text{top}}^2 + 0.3924$$
$$v_{\text{top}}^2 = \frac{0.90 - 0.3924}{0.025} = \frac{0.5076}{0.025} = 20.30$$
$$v_{\text{top}} = 4.51\,\text{m}\,\text{s}^{-1}$$

Normal reaction at the top:
$R_{\text{top}} = \frac◆LB◆mv_{\text{top}}^2◆RB◆◆LB◆r◆RB◆ - mg = \frac◆LB◆0.050 \times 20.30◆RB◆◆LB◆0.40◆RB◆ - 0.050 \times 9.81 = 2.538 - 0.491 = 2.05\,\text{N}$

At the bottom: using energy conservation (speed at bottom is $u = 6.0\,\text{m}\,\text{s}^{-1}$):

$R_{\text{bottom}} - mg = \frac{mu^2}{r}$

$$R_{\text{bottom}} = \frac◆LB◆0.050 \times 36◆RB◆◆LB◆0.40◆RB◆ + 0.050 \times 9.81 = 4.50 + 0.491 = 4.99\,\text{N}$$

Note: The normal reaction is directed toward the centre at all points. At the top, both weight and
reaction push toward the centre. At the bottom, reaction pushes toward the centre (upward) while
weight pulls away.

---

### UT-2: Conical Pendulum

**Question:**

A particle of mass $0.50\,\text{kg}$ is attached to one end of a light inextensible string of length
$1.0\,\text{m}$. The other end is fixed. The particle moves in a horizontal circle of radius $r$
with the string making a constant angle $\theta$ with the vertical.

(a) Show that $\cos\theta = g/\omega^2 l$Where $\omega$ is the angular velocity.

(b) If the period of rotation is $1.2\,\text{s}$Calculate the angle $\theta$ and the tension in the
string.

(c) Calculate the speed of the particle.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Resolving vertically: $T\cos\theta = mg$

Resolving horizontally (centripetal direction): $T\sin\theta = m\omega^2 r$

Since $r = l\sin\theta$:

$$T\sin\theta = m\omega^2 l\sin\theta \Rightarrow T = m\omega^2 l$$

Substituting into the vertical equation:

$$m\omega^2 l\cos\theta = mg \Rightarrow \cos\theta = \frac◆LB◆g◆RB◆◆LB◆\omega^2 l◆RB◆$$

(b) Period $T_p = 1.2\,\text{s}$So $\omega = 2\pi/T_p = 2\pi/1.2 = 5.236\,\text{rad}\,\text{s}^{-1}$

$$\cos\theta = \frac◆LB◆9.81◆RB◆◆LB◆(5.236)^2 \times 1.0◆RB◆ = \frac{9.81}{27.42} = 0.3577$$
$$\theta = \cos^{-1}(0.3577) = 69.0^\circ$$

Tension: $T = m\omega^2 l = 0.50 \times 27.42 \times 1.0 = 13.7\,\text{N}$

Check vertically: $T\cos\theta = 13.7 \times 0.3577 = 4.90\,\text{N}$And
$mg = 0.50 \times 9.81 = 4.91\,\text{N}$. Consistent.

(c) Speed
$v = \omega r = \omega \times l\sin\theta = 5.236 \times 1.0 \times \sin 69.0^\circ = 5.236 \times 0.9339 = 4.89\,\text{m}\,\text{s}^{-1}$

---

### UT-3: Banked Curve with Friction

**Question:**

A circular racing track of radius $80\,\text{m}$ is banked at an angle of $15^\circ$ to the
horizontal. A car of mass $1200\,\text{kg}$ travels around the track.

(a) Calculate the speed at which the car can travel around the track with no tendency to slip,
assuming no friction.

(b) If the coefficient of friction between the tyres and track is $\mu = 0.40$Calculate the maximum
safe speed.

(c) Calculate the minimum safe speed (below which the car would tend to slide down the bank).

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) For a frictionless banked curve:

Resolving vertically: $R\cos\theta = mg$

Resolving horizontally: $R\sin\theta = \frac{mv^2}{r}$

Dividing: $\tan\theta = v^2/(rg)$

$$v = \sqrt◆LB◆rg\tan\theta◆RB◆ = \sqrt◆LB◆80 \times 9.81 \times \tan 15^\circ◆RB◆ = \sqrt◆LB◆80 \times 9.81 \times 0.2679◆RB◆ = \sqrt{210.2} = 14.50\,\text{m}\,\text{s}^{-1}$$

(b) At maximum speed, friction acts **down** the slope to prevent the car from sliding outward.

Resolving vertically: $R\cos\theta - F\sin\theta = mg$

Resolving horizontally: $R\sin\theta + F\cos\theta = \frac◆LB◆mv_{\max}^2◆RB◆◆LB◆r◆RB◆$

Where $F = \mu R$:

$$R\cos\theta - \mu R\sin\theta = mg \Rightarrow R = \frac◆LB◆mg◆RB◆◆LB◆\cos\theta - \mu\sin\theta◆RB◆$$

$$R\sin\theta + \mu R\cos\theta = \frac◆LB◆mv_{\max}^2◆RB◆◆LB◆r◆RB◆ \Rightarrow v_{\max}^2 = \frac◆LB◆rR(\sin\theta + \mu\cos\theta)◆RB◆◆LB◆m◆RB◆$$

Substituting $R$:

$$v_{\max}^2 = \frac◆LB◆rg(\sin\theta + \mu\cos\theta)◆RB◆◆LB◆\cos\theta - \mu\sin\theta◆RB◆$$

$$= \frac◆LB◆80 \times 9.81(\sin 15^\circ + 0.40\cos 15^\circ)◆RB◆◆LB◆\cos 15^\circ - 0.40\sin 15^\circ◆RB◆$$

$$= \frac{784.8(0.2588 + 0.3864)}{0.9659 - 0.1035} = \frac◆LB◆784.8 \times 0.6452◆RB◆◆LB◆0.8624◆RB◆ = \frac{506.4}{0.8624} = 587.2$$

$$v_{\max} = \sqrt{587.2} = 24.2\,\text{m}\,\text{s}^{-1}$$

(c) At minimum speed, friction acts **up** the slope to prevent the car from sliding inward.

$$v_{\min}^2 = \frac◆LB◆rg(\sin\theta - \mu\cos\theta)◆RB◆◆LB◆\cos\theta + \mu\sin\theta◆RB◆$$

$$= \frac◆LB◆80 \times 9.81(0.2588 - 0.3864)◆RB◆◆LB◆0.9659 + 0.1035◆RB◆ = \frac◆LB◆784.8 \times (-0.1276)◆RB◆◆LB◆1.0694◆RB◆ = \frac{-100.1}{1.0694} = -93.6$$

Since $v_{\min}^2$ is negative, the car will not slide down the bank at any speed. The minimum safe
speed is effectively zero.

**Note:** Although $\tan 15^\circ = 0.268 \lt \mu = 0.40$ (meaning friction alone on a flat surface
could prevent sliding), on the banked surface the banking angle and friction together more than
suffice. The negative $v_{\min}^2$ confirms the car remains stationary at zero speed.

## Integration Tests

### IT-1: Satellite in Elliptical Orbit (with Gravitational Fields)

**Question:**

A satellite of mass $200\,\text{kg}$ is in an elliptical orbit around the Earth. Its closest
approach (perigee) is at a distance of $6.8 \times 10^6\,\text{m}$ from the centre of the Earth,
where its speed is $7800\,\text{m}\,\text{s}^{-1}$. Its furthest distance (apogee) is
$8.5 \times 10^6\,\text{m}$.

(a) Calculate the speed of the satellite at apogee using conservation of angular momentum.

(b) Calculate the total energy of the satellite and verify it is conserved between perigee and
apogee.

(c) Calculate the speed the satellite would need at perigee to escape from Earth's gravitational
field.

Take
$G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$$M_E = 5.97 \times 10^{24}\,\text{kg}$.

**Solution:**

(a) Conservation of angular momentum: $mv_pr_p = mv_ar_a$

$$v_a = v_p \times \frac{r_p}{r_a} = 7800 \times \frac◆LB◆6.8 \times 10^6◆RB◆◆LB◆8.5 \times 10^6◆RB◆ = 7800 \times 0.800 = 6240\,\text{m}\,\text{s}^{-1}$$

(b) At perigee:

$$E_p = \frac{1}{2}mv_p^2 - \frac{GMm}{r_p} = \frac{1}{2}(200)(7800)^2 - \frac◆LB◆6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 200◆RB◆◆LB◆6.8 \times 10^6◆RB◆$$
$$= 100 \times 60840000 - \frac◆LB◆7.963 \times 10^{16}◆RB◆◆LB◆6.8 \times 10^6◆RB◆$$
$$= 6.084 \times 10^9 - 1.171 \times 10^{10} = -5.626 \times 10^9\,\text{J}$$

At apogee:

$$E_a = \frac{1}{2}(200)(6240)^2 - \frac◆LB◆6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 200◆RB◆◆LB◆8.5 \times 10^6◆RB◆$$
$$= 100 \times 38937600 - \frac◆LB◆7.963 \times 10^{16}◆RB◆◆LB◆8.5 \times 10^6◆RB◆$$
$$= 3.894 \times 10^9 - 9.368 \times 10^9 = -5.474 \times 10^9\,\text{J}$$

The slight difference arises from rounding. Using more precise values would show exact conservation.
Both values are approximately $-5.55 \times 10^9\,\text{J}$.

(c) For escape, total energy $= 0$:

$$\frac{1}{2}mv_{\text{esc}}^2 - \frac{GMm}{r_p} = 0$$
$$v_{\text{esc}} = \sqrt◆LB◆\frac{2GM}{r_p}◆RB◆ = \sqrt◆LB◆\frac{2 \times 6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.8 \times 10^6}◆RB◆ = \sqrt◆LB◆\frac{7.963 \times 10^{14}}{6.8 \times 10^6}◆RB◆ = \sqrt◆LB◆1.171 \times 10^8◆RB◆ = 10820\,\text{m}\,\text{s}^{-1}$$

Alternatively,
$v_{\text{esc}} = \sqrt{2} \times v_{\text{circular}} = \sqrt{2} \times \sqrt{GM/r_p}$.

The orbital speed at perigee ($7800\,\text{m}\,\text{s}^{-1}$) is less than escape speed
($10820\,\text{m}\,\text{s}^{-1}$), confirming the satellite is bound.

---

### IT-2: Motorcyclist on a Vertical Wall of Death (with Dynamics)

**Question:**

A motorcyclist of total mass $250\,\text{kg}$ (rider plus motorcycle) rides on the inside of a
vertical cylindrical wall of radius $8.0\,\text{m}$. The coefficient of static friction between the
tyres and the wall is $\mu_s = 0.80$.

(a) Calculate the minimum speed the motorcyclist must maintain to not slide down the wall.

(b) At this minimum speed, calculate the normal reaction force from the wall.

(c) If the motorcyclist increases speed by $20\%$Calculate the new normal reaction and explain
whether friction still prevents sliding.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) The centripetal force is provided by the normal reaction from the wall:

$$R = \frac{mv^2}{r}$$

Friction balances weight (at the minimum speed, friction is at its maximum):

$$F = \mu_s R = mg$$ $$\mu_s \frac{mv^2}{r} = mg$$
$$v_{\min} = \sqrt◆LB◆\frac{rg}{\mu_s}◆RB◆ = \sqrt◆LB◆\frac{8.0 \times 9.81}{0.80}◆RB◆ = \sqrt{98.1} = 9.90\,\text{m}\,\text{s}^{-1}$$

(b)
$R = \frac◆LB◆mv_{\min}^2◆RB◆◆LB◆r◆RB◆ = \frac◆LB◆250 \times 98.1◆RB◆◆LB◆8.0◆RB◆ = 3066\,\text{N}$

Check: $\mu_s R = 0.80 \times 3066 = 2453\,\text{N}$And $mg = 250 \times 9.81 = 2453\,\text{N}$.
Consistent.

(c) New speed: $v' = 1.20 \times 9.90 = 11.88\,\text{m}\,\text{s}^{-1}$

New normal reaction:
$R' = \frac◆LB◆250 \times 11.88^2◆RB◆◆LB◆8.0◆RB◆ = \frac◆LB◆250 \times 141.1◆RB◆◆LB◆8.0◆RB◆ = 4409\,\text{N}$

Maximum friction: $F'_{\max} = 0.80 \times 4409 = 3527\,\text{N}$

Since $3527 \gt 2453\,\text{N}$ (weight), friction prevents sliding. At higher speeds, the
motorcyclist has a larger safety margin. The friction required to prevent sliding is still only
$mg = 2453\,\text{N}$But the maximum available friction has increased to $3527\,\text{N}$.

---

### IT-3: Object on a Rotating Platform with Springs (with Oscillations)

**Question:**

A small block of mass $0.30\,\text{kg}$ is placed on a horizontal turntable at a distance
$r = 0.20\,\text{m}$ from the axis. It is attached to the axis by a spring of natural length
$0.10\,\text{m}$ and spring constant $k = 50\,\text{N}\,\text{m}^{-1}$. The surface is smooth (no
friction). The turntable rotates with angular velocity $\omega$.

(a) Calculate the equilibrium radius of the block (where the spring force provides the centripetal
force) as a function of $\omega$.

(b) If the turntable rotates at $\omega = 15\,\text{rad}\,\text{s}^{-1}$Calculate the extension of
the spring and the tension in it.

(c) The block is displaced radially outward by $0.02\,\text{m}$ from its equilibrium position and
released. Explain why it oscillates and calculate the period of small radial oscillations about the
equilibrium position.

**Solution:**

(a) At equilibrium radius $r_0$The spring extension is $(r_0 - l_0)$ where $l_0 = 0.10\,\text{m}$:

$$k(r_0 - l_0) = m\omega^2 r_0$$ $$kr_0 - kl_0 = m\omega^2 r_0$$ $$r_0(k - m\omega^2) = kl_0$$
$$r_0 = \frac◆LB◆kl_0◆RB◆◆LB◆k - m\omega^2◆RB◆$$

This is valid only when $k \gt m\omega^2$ (otherwise the spring cannot provide enough centripetal
force and the block flies off).

(b) With $\omega = 15\,\text{rad}\,\text{s}^{-1}$:

$$r_0 = \frac◆LB◆50 \times 0.10◆RB◆◆LB◆50 - 0.30 \times 225◆RB◆ = \frac{5.0}{50 - 67.5} = \frac{5.0}{-17.5} = -0.286\,\text{m}$$

Since $r_0$ is negative, this means $k \lt m\omega^2$So the spring cannot provide sufficient
centripetal force and the block slides outward. The critical angular velocity is:

$$\omega_c = \sqrt◆LB◆\frac{k}{m}◆RB◆ = \sqrt◆LB◆\frac{50}{0.30}◆RB◆ = 12.9\,\text{rad}\,\text{s}^{-1}$$

At $\omega = 15\,\text{rad}\,\text{s}^{-1} \gt \omega_c$The block cannot maintain a stable circular
orbit. It will spiral outward.

(c) For $\omega \lt \omega_c$The restoring force for a small radial displacement $\delta$ from $r_0$
is:

$$F_{\text{restore}} = -k\delta + m\omega^2\delta = -(k - m\omega^2)\delta$$

This is SHM with effective spring constant $k_{\text{eff}} = k - m\omega^2$.

Period of radial oscillations:

$$T = 2\pi\sqrt◆LB◆\frac{m}{k_{\text{eff}}}◆RB◆ = 2\pi\sqrt◆LB◆\frac{m}{k - m\omega^2}◆RB◆$$

For $\omega = 10\,\text{rad}\,\text{s}^{-1}$ (below critical):

$$T = 2\pi\sqrt◆LB◆\frac{0.30}{50 - 0.30 \times 100}◆RB◆ = 2\pi\sqrt◆LB◆\frac{0.30}{20}◆RB◆ = 2\pi\sqrt{0.015} = 2\pi \times 0.1225 = 0.770\,\text{s}$$

Note: as $\omega$ approaches $\omega_c$The period diverges (the oscillation becomes infinitely
slow), indicating the onset of instability.
