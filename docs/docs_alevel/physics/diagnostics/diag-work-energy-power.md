---
title: "Work, Energy and Power -- Diagnostic Tests"
description: Diagnostic tests for conservation of energy, work done by variable forces, efficiency, and power at maximum A-Level Physics difficulty.
slug: diag-work-energy-power
hide_table_of_contents: true
---

# Work, Energy and Power — Diagnostic Tests

## Unit Tests

### UT-1: Work Done by a Variable Force

**Question:**

A force $F = (3.0x^2 + 2.0)\,\text{N}$ acts on a particle of mass $2.0\,\text{kg}$ in the direction of its displacement along the $x$-axis. The particle starts from rest at $x = 0$.

(a) Calculate the work done by the force as the particle moves from $x = 0$ to $x = 3.0\,\text{m}$.

(b) Calculate the speed of the particle at $x = 3.0\,\text{m}$.

(c) If a resistive force $F_r = 1.5x\,\text{N}$ (opposing motion) also acts on the particle, calculate the speed at $x = 3.0\,\text{m}$.

**Solution:**

(a) Work done by the variable force:

$$W = \int_0^{3.0} (3.0x^2 + 2.0)\,dx = \left[x^3 + 2x\right]_0^3 = (27 + 6) - 0 = 33\,\text{J}$$

(b) By the work-energy theorem: $W = \Delta E_k = \frac{1}{2}mv^2$

$$33 = \frac{1}{2}(2.0)v^2 = v^2$$
$$v = \sqrt{33} = 5.74\,\text{m}\,\text{s}^{-1}$$

(c) Work done against the resistive force:

$$W_r = \int_0^{3.0} 1.5x\,dx = \left[0.75x^2\right]_0^3 = 0.75 \times 9 = 6.75\,\text{J}$$

Net work $= 33 - 6.75 = 26.25\,\text{J}$

$$v = \sqrt{\frac{2 \times 26.25}{2.0}} = \sqrt{26.25} = 5.12\,\text{m}\,\text{s}^{-1}$$

---
### UT-2: Energy Conservation with Non-Conservative Forces

**Question:**

A crate of mass $50\,\text{kg}$ is pushed up a rough ramp inclined at $20^\circ$ to the horizontal. The coefficient of friction is $\mu = 0.35$. A worker pushes with a constant force of $450\,\text{N}$ parallel to the ramp. The crate starts from rest at the bottom and travels $8.0\,\text{m}$ up the ramp.

(a) Calculate the work done by each force acting on the crate.

(b) Calculate the speed of the crate at the top of the ramp using energy methods.

(c) Calculate the instantaneous power delivered by the worker at the top of the ramp.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Forces acting on the crate:
- Applied force (up the ramp): $F = 450\,\text{N}$
- Weight component (down the ramp): $mg\sin 20^\circ = 50 \times 9.81 \times 0.342 = 167.8\,\text{N}$
- Normal reaction: $R = mg\cos 20^\circ = 50 \times 9.81 \times 0.940 = 461.0\,\text{N}$
- Friction (down the ramp, opposing motion): $F_r = \mu R = 0.35 \times 461.0 = 161.4\,\text{N}$

Work done:
- By applied force: $W_F = 450 \times 8.0 = 3600\,\text{J}$
- By weight component: $W_g = -167.8 \times 8.0 = -1342\,\text{J}$ (negative because force opposes displacement)
- By friction: $W_f = -161.4 \times 8.0 = -1291\,\text{J}$ (negative because force opposes displacement)
- By normal reaction: $W_N = 0$ (perpendicular to displacement)

(b) By the work-energy theorem:

$$W_{\text{net}} = \Delta E_k = \frac{1}{2}mv^2 - 0$$
$$3600 - 1342 - 1291 = \frac{1}{2}(50)v^2$$
$$967 = 25v^2$$
$$v = \sqrt{\frac{967}{25}} = \sqrt{38.68} = 6.22\,\text{m}\,\text{s}^{-1}$$

(c) Power $= Fv = 450 \times 6.22 = 2799 \approx 2800\,\text{W}$

Note: Power is $Fv$ (force times instantaneous velocity), not $F/t$.

---
### UT-3: Efficiency and Power in a Multi-Stage System

**Question:**

A pump lifts water from a well $15\,\text{m}$ deep at a rate of $200\,\text{kg}\,\text{min}^{-1}$. The pump motor is $85\%$ efficient and is powered by an electrical supply. The water exits the pump through a pipe of cross-sectional area $5.0 \times 10^{-3}\,\text{m}^2$ at ground level.

(a) Calculate the minimum power input to the motor.

(b) Calculate the speed at which water exits the pipe at ground level, assuming no energy losses in the pipe.

(c) The motor is connected to a $230\,\text{V}$ mains supply. Calculate the current drawn by the motor and the energy transferred in 1 hour of operation.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$. The density of water is $1000\,\text{kg}\,\text{m}^{-3}$.

**Solution:**

(a) Mass flow rate: $\dot{m} = 200/60 = 3.333\,\text{kg}\,\text{s}^{-1}$

Useful power (rate of gain of gravitational PE):

$$P_{\text{useful}} = \dot{m}gh = 3.333 \times 9.81 \times 15 = 490.5\,\text{W}$$

Electrical power input:

$$P_{\text{input}} = \frac{P_{\text{useful}}}{\eta} = \frac{490.5}{0.85} = 577\,\text{W}$$

(b) The useful power goes into gravitational PE and kinetic energy of the water:

$$P_{\text{useful}} = \dot{m}gh + \frac{1}{2}\dot{m}v^2$$
$$490.5 = 490.5 + \frac{1}{2}(3.333)v^2$$

Wait, this gives $v = 0$. That is because the question says "minimum power" in part (a), which accounts only for gravitational PE gain. If we assume no losses in the pipe, all the useful power goes to gravitational PE (since the water is pumped to ground level and we are not told it exits at speed). The water exits with negligible KE if the pipe is wide enough.

Actually, let me reconsider. The pump raises water from 15 m below to ground level. At ground level, the water exits through a pipe. If there are no losses, the power goes entirely into raising the water. The exit speed depends on the pipe diameter and flow rate.

Volume flow rate: $\dot{V} = \dot{m}/\rho = 3.333/1000 = 3.333 \times 10^{-3}\,\text{m}^3\,\text{s}^{-1}$

Exit speed: $v = \dot{V}/A = 3.333 \times 10^{-3}/5.0 \times 10^{-3} = 0.667\,\text{m}\,\text{s}^{-1}$

(c) Current: $I = P/V = 577/230 = 2.51\,\text{A}$

Energy in 1 hour: $E = P_{\text{input}} \times t = 577 \times 3600 = 2.08 \times 10^6\,\text{J} = 2.08\,\text{MJ}$

## Integration Tests

### IT-1: Bungee Jump Energy Analysis (with Properties of Materials)

**Question:**

A bungee jumper of mass $75\,\text{kg}$ jumps from a bridge. The bungee cord has natural length $25\,\text{m}$ and obeys Hooke's law with spring constant $k = 80\,\text{N}\,\text{m}^{-1}$ up to a maximum extension of $30\,\text{m}$. Beyond this extension, the cord becomes much stiffer. The bridge is $60\,\text{m}$ above the water.

(a) Calculate the maximum speed of the jumper during the descent.

(b) Calculate the maximum extension of the cord, assuming the cord does not reach its stiffening limit.

(c) State whether the jumper will hit the water. Support your answer with calculations.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) The jumper falls freely for the first $25\,\text{m}$ (natural length of cord). At this point:

$$v^2 = 2g \times 25 = 2 \times 9.81 \times 25 = 490.5$$
$$v = 22.15\,\text{m}\,\text{s}^{-1}$$

Below $25\,\text{m}$, the cord begins to stretch. The maximum speed occurs when acceleration is zero (when cord tension equals weight):

$$ke = mg \Rightarrow 80e = 75 \times 9.81 = 735.75$$
$$e = 9.20\,\text{m}$$

At this point, the jumper has fallen $25 + 9.20 = 34.20\,\text{m}$.

Using energy conservation from the start:

$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}ke^2$$
$$75 \times 9.81 \times 34.20 = \frac{1}{2}(75)v^2 + \frac{1}{2}(80)(9.20)^2$$
$$25160 = 37.5v^2 + 3386$$
$$37.5v^2 = 21774$$
$$v = \sqrt{580.6} = 24.09\,\text{m}\,\text{s}^{-1}$$

Maximum speed is $24.1\,\text{m}\,\text{s}^{-1}$.

(b) Maximum extension occurs when velocity is zero (lowest point). Using energy conservation from the bridge:

$$mg(25 + e) = \frac{1}{2}ke^2$$
$$75 \times 9.81(25 + e) = 40e^2$$
$$735.75(25 + e) = 40e^2$$
$$18394 + 735.75e = 40e^2$$
$$40e^2 - 735.75e - 18394 = 0$$

Using the quadratic formula:

$$e = \frac{735.75 + \sqrt{735.75^2 + 4 \times 40 \times 18394}}{80}$$
$$e = \frac{735.75 + \sqrt{541328 + 2943040}}{80} = \frac{735.75 + \sqrt{3484368}}{80}$$
$$= \frac{735.75 + 1866.6}{80} = \frac{2602.4}{80} = 32.53\,\text{m}$$

(c) Total distance fallen $= 25 + 32.53 = 57.53\,\text{m}$

Since $57.53\,\text{m} \lt 60\,\text{m}$, the jumper does **not** hit the water. The closest approach to the water is $60 - 57.53 = 2.47\,\text{m}$.

However, note that $32.53\,\text{m}$ exceeds the maximum elastic extension of $30\,\text{m}$. The cord stiffens beyond this point, which would actually make it stretch **less**, so the jumper would be even further from the water. The assumption in part (b) is conservative.

---
### IT-2: Car on a Roller Coaster Loop (with Circular Motion)

**Question:**

A roller coaster car of mass $500\,\text{kg}$ starts from rest at point $A$, which is $30\,\text{m}$ above the bottom of a vertical circular loop of radius $10\,\text{m}$. The track is frictionless except for a horizontal section $BC$ of length $20\,\text{m}$ between point $A$ and the loop, where a constant frictional force of $400\,\text{N}$ acts.

(a) Calculate the speed of the car at the bottom of the loop (point $D$).

(b) Calculate the normal reaction force on the car at the top of the loop (point $E$).

(c) State the minimum height of $A$ above the bottom of the loop for the car to complete the loop.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Energy conservation from $A$ to $D$ (the bottom of the loop is at the same height as $B$ and $C$):

$$mgh_A = \frac{1}{2}mv_D^2 + F_r \times d$$
$$500 \times 9.81 \times 30 = \frac{1}{2}(500)v_D^2 + 400 \times 20$$
$$147150 = 250v_D^2 + 8000$$
$$250v_D^2 = 139150$$
$$v_D = \sqrt{556.6} = 23.59\,\text{m}\,\text{s}^{-1}$$

(b) At the top of the loop (point $E$, height $2r = 20\,\text{m}$ above $D$):

Using energy conservation from $D$ to $E$:

$$\frac{1}{2}mv_D^2 = \frac{1}{2}mv_E^2 + mg(2r)$$
$$556.6 \times 500 = \frac{1}{2}(500)v_E^2 + 500 \times 9.81 \times 20$$

Wait, let me redo: $\frac{1}{2}(500)(23.59)^2 = \frac{1}{2}(500)v_E^2 + 500 \times 9.81 \times 20$

$$139150 = 250v_E^2 + 98100$$
$$250v_E^2 = 41050$$
$$v_E^2 = 164.2$$
$$v_E = 12.81\,\text{m}\,\text{s}^{-1}$$

At the top of the loop, both weight and normal reaction point downward (toward the centre):

$$R + mg = \frac{mv_E^2}{r}$$
$$R = \frac{mv_E^2}{r} - mg = \frac{500 \times 164.2}{10} - 500 \times 9.81 = 8210 - 4905 = 3305\,\text{N}$$

(c) At the top of the loop, the minimum condition for completing the loop is $R = 0$:

$$mg = \frac{mv_{\min}^2}{r} \Rightarrow v_{\min}^2 = gr = 9.81 \times 10 = 98.1$$

Energy from $A$ to $E$ (minimum case, ignoring friction first):

$$mgh = \frac{1}{2}mv_{\min}^2 + mg(2r)$$
$$gh = \frac{1}{2}gr + 2gr = \frac{5gr}{2}$$
$$h = \frac{5r}{2} = 25\,\text{m}$$ (above the bottom of the loop, ignoring friction)

Accounting for friction on section $BC$:

$$mgh = \frac{1}{2}mv_{\min}^2 + mg(2r) + F_r \times d$$
$$500 \times 9.81 \times h = 250 \times 98.1 + 500 \times 9.81 \times 20 + 400 \times 20$$
$$4905h = 24525 + 98100 + 8000 = 130625$$
$$h = 26.6\,\text{m}$$

The minimum height of $A$ above the bottom of the loop is $26.6\,\text{m}$.

---
### IT-3: Satellite Orbital Energy and Escape (with Gravitational Fields)

**Question:**

A satellite of mass $500\,\text{kg}$ is in a circular orbit of radius $7.0 \times 10^6\,\text{m}$ around the Earth.

(a) Calculate the total energy of the satellite in its orbit.

(b) Calculate the minimum energy that must be supplied for the satellite to escape from Earth's gravitational field.

(c) The satellite's rocket motor fires for $30\,\text{s}$, providing a thrust of $2000\,\text{N}$ in the direction of motion. Calculate the new orbital radius, assuming the orbit remains circular.

Take $G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$, $M_E = 5.97 \times 10^{24}\,\text{kg}$, $R_E = 6.37 \times 10^6\,\text{m}$.

**Solution:**

(a) For a circular orbit, total energy $E = -\frac{GMm}{2r}$:

$$E = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 500}{2 \times 7.0 \times 10^6}$$
$$= -\frac{1.991 \times 10^{17}}{1.4 \times 10^7} = -1.422 \times 10^{10}\,\text{J}$$

(b) To escape, total energy must be at least zero. The energy required is:

$$\Delta E = 0 - E = 1.422 \times 10^{10}\,\text{J} = 1.42 \times 10^{10}\,\text{J}$$

This is equal in magnitude to the total energy of the orbit (kinetic energy equals the magnitude of potential energy for a circular orbit, so escape energy equals the kinetic energy).

(c) Impulse $= F \times t = 2000 \times 30 = 60000\,\text{N}\,\text{s}$

Change in velocity: $\Delta v = 60000/500 = 120\,\text{m}\,\text{s}^{-1}$

Current orbital speed: $v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{7.0 \times 10^6}}$

$$= \sqrt{\frac{3.982 \times 10^{14}}{7.0 \times 10^6}} = \sqrt{5.689 \times 10^7} = 7543\,\text{m}\,\text{s}^{-1}$$

New speed: $v' = 7543 + 120 = 7663\,\text{m}\,\text{s}^{-1}$

For a circular orbit: $v = \sqrt{GM/r}$, so $r = GM/v^2$

$$r' = \frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{7663^2} = \frac{3.982 \times 10^{14}}{5.872 \times 10^7} = 6.782 \times 10^6\,\text{m}$$

The new orbital radius is $6.78 \times 10^6\,\text{m}$, which is lower than the original. This is because the thrust was applied in the direction of motion, which raises the orbit on the opposite side, but for a quick burn the result is an elliptical orbit. For the simplified case of an instantaneous burn and assuming a new circular orbit at the new energy, the satellite would actually move to a higher orbit. Let me correct:

The new total energy is: $E' = E + F \times v \times t = E + 2000 \times 7543 \times 30 = -1.422 \times 10^{10} + 4.526 \times 10^8 = -1.377 \times 10^{10}\,\text{J}$

For circular orbit: $E' = -\frac{GMm}{2r'}$

$$r' = -\frac{GMm}{2E'} = \frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 500}{2 \times 1.377 \times 10^{10}} = \frac{1.991 \times 10^{17}}{2.754 \times 10^{10}} = 7.23 \times 10^6\,\text{m}$$

The new orbital radius is $7.23 \times 10^6\,\text{m}$ (higher, as expected for a prograde burn).
