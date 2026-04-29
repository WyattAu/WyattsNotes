---
title: Energy and Conservation
description: IB Physics — kinetic energy, potential energy, conservation of energy,
  and power.
slug: energy
---


## Forms of Energy

Energy is a scalar quantity measured in joules ($\mathrm{J}$). It exists in many forms and can be
transformed from one form to another, but the total energy in a closed system is conserved.

| Form                      | Description                                     |
| ------------------------- | ----------------------------------------------- |
| Kinetic                   | Energy of motion                                |
| Gravitational potential   | Energy due to position in a gravitational field |
| Elastic potential         | Energy stored in a deformed object              |
| Thermal                   | Energy associated with temperature              |
| Chemical                  | Energy stored in chemical bonds                 |
| Nuclear                   | Energy stored in atomic nuclei                  |
| Electrical                | Energy of moving charges                        |
| Radiant (electromagnetic) | Energy of electromagnetic waves                 |

---

## Kinetic Energy

### Translational Kinetic Energy

For an object of mass $m$ moving with speed $v$:

$$
E_k = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

### Key Points

- Kinetic energy is always non-negative ($E_k \ge 0$).
- It depends on speed squared, so doubling speed quadruples kinetic energy.
- It is a scalar (no direction).

### Work-Energy Theorem

The net work done on an object equals the change in its kinetic energy:

$$
W_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = \Delta E_k = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_f^2 - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_i^2
$$

:::info[Example]

A $1500\mathrm{ kg}$ car travelling at $20\mathrm{ m/s}$ brakes to a stop. Find the work done by the
brakes.

$$
W = \Delta E_k = 0 - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(1500)(400) = -300000\mathrm&lbrace; J&rbrace; = -300\mathrm&lbrace; kJ&rbrace;
$$

The negative sign indicates the brakes do negative work (remove energy from the car).

:::

---

## Gravitational Potential Energy

### Near Earth's Surface

For small height changes (where $g$ is approximately constant):

$$
E_p = mgh
$$

where $h$ is the height above a chosen reference level (datum).

### Universal Gravitational Potential Energy

For any two masses separated by distance $r$:

$$
E_p = -\frac&lbrace;GMm&rbrace;&lbrace;r&rbrace;
$$

where $G = 6.674 \times 10^{-11}\mathrm{ N}\cdot\mathrm{m}^2/\mathrm{kg}^2$.

### Key Differences

| Property        | Near Surface ($mgh$)       | Universal ($-GMm/r$)                    |
| --------------- | -------------------------- | --------------------------------------- |
| Reference level | Arbitrary (usually ground) | Zero at infinity                        |
| Sign            | Positive above reference   | Negative (bound state)                  |
| Validity        | $h \ll R_{\mathrm{Earth}}$ | Any distance                            |
| Gradient        | $-\dfrac{dE_p}{dh} = -mg$  | $-\dfrac{dE_p}{dr} = -\dfrac{GMm}{r^2}$ |

:::info[Example]

Find the gravitational potential energy of a $70\mathrm{ kg}$ person at the top of a $50\mathrm{ m}$
building (using $mgh$).

$$
E_p = 70 \times 9.81 \times 50 = 34335\mathrm&lbrace; J&rbrace; \approx 34.3\mathrm&lbrace; kJ&rbrace;
$$

:::

:::info[Example]

A satellite of mass $500\mathrm{ kg}$ orbits at a height of $300\mathrm{ km}$ above Earth's surface.
Find its gravitational potential energy. ($M_E = 5.97 \times 10^{24}\mathrm{ kg}$,
$R_E = 6.37 \times 10^6\mathrm{ m}$)

$$
r = 6.37 \times 10^6 + 3.0 \times 10^5 = 6.67 \times 10^6\mathrm&lbrace; m&rbrace;
$$

$$
E_p = -\frac&lbrace;6.674 \times 10^&lbrace;-11&rbrace; \times 5.97 \times 10^&lbrace;24&rbrace; \times 500&rbrace;&lbrace;6.67 \times 10^6&rbrace;
$$

$$
= -\frac&lbrace;1.992 \times 10^&lbrace;17&rbrace;&rbrace;&lbrace;6.67 \times 10^6&rbrace; = -2.987 \times 10^&lbrace;10&rbrace;\mathrm&lbrace; J&rbrace;
$$

:::

### Escape Velocity

The minimum speed needed to escape a gravitational field:

$$
v_&lbrace;\mathrm&lbrace;esc&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;2GM&rbrace;&lbrace;r&rbrace;&rbrace;
$$

For Earth: $v_{\mathrm{esc}} \approx 11200\mathrm{ m/s} \approx 11.2\mathrm{ km/s}$.

---

## Elastic Potential Energy

### Hooke's Law

For a spring obeying Hooke's law (within the elastic limit):

$$
F = -kx
$$

where $k$ is the spring constant (stiffness) and $x$ is the displacement from equilibrium.

### Elastic Potential Energy

$$
E_e = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2
$$

This is also the work done in compressing or extending the spring by $x$:

$$
W = \int_0^x kx'\,dx' = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2
$$

:::info[Example]

A spring with $k = 200\mathrm{ N/m}$ is compressed by $0.1\mathrm{ m}$. Find the elastic potential
energy stored.

$$
E_e = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(200)(0.01) = 1.0\mathrm&lbrace; J&rbrace;
$$

:::

### Force-Extension Graphs

For a spring obeying Hooke's law, the force-extension graph is a straight line through the origin.
The area under the graph equals the elastic potential energy.

---

## Conservation of Mechanical Energy

<PhetSimulation simulationId="energy-skate-park-basics" title="Energy Skate Park: Basics" />

Observe how kinetic energy and gravitational potential energy interchange as a skater moves along a
track. Try changing the skater's mass and the track shape to see how energy is conserved.

### Principle

In a system with only conservative forces (gravity, elastic forces), the total mechanical energy is
conserved:

$$
E_k + E_p + E_e = \mathrm&lbrace;constant&rbrace;
$$

$$
\frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_1^2 + mgh_1 + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx_1^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_2^2 + mgh_2 + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx_2^2
$$

### Conservative vs Non-Conservative Forces

| Conservative Forces      | Non-Conservative Forces |
| ------------------------ | ----------------------- |
| Gravity                  | Friction                |
| Elastic (spring)         | Air resistance          |
| Electrostatic            | Applied pushes/pulls    |
| Work is path-independent | Work is path-dependent  |

### Applications

:::info[Example]

A $2\mathrm{ kg}$ ball is dropped from a height of $10\mathrm{ m}$. Find its speed just before it
hits the ground (ignoring air resistance).

$$
E_k(\mathrm&lbrace;top&rbrace;) + E_p(\mathrm&lbrace;top&rbrace;) = E_k(\mathrm&lbrace;bottom&rbrace;) + E_p(\mathrm&lbrace;bottom&rbrace;)
$$

$$
0 + 2(9.81)(10) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(2)v^2 + 0
$$

$$
196.2 = v^2
$$

$$
v = 14.0\mathrm&lbrace; m/s&rbrace;
$$

:::

:::info[Example]

A pendulum of length $1.5\mathrm{ m}$ is released from horizontal. Find its speed at the lowest
point.

Taking the lowest point as reference ($E_p = 0$):

$$
E_p(\mathrm&lbrace;top&rbrace;) = mgL = m(9.81)(1.5)
$$

$$
E_k(\mathrm&lbrace;bottom&rbrace;) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

By conservation: $mgL = \dfrac{1}{2}mv^2$.

$$
v = \sqrt&lbrace;2gL&rbrace; = \sqrt&lbrace;2(9.81)(1.5)&rbrace; = \sqrt&lbrace;29.43&rbrace; = 5.42\mathrm&lbrace; m/s&rbrace;
$$

:::

:::info[Example]

A block of mass $0.5\mathrm{ kg}$ slides from rest down a frictionless curved ramp of height
$3\mathrm{ m}$ onto a horizontal surface with friction ($\mu_k = 0.4$). How far does it slide before
stopping?

At the bottom of the ramp, all $E_p$ converts to $E_k$:

$$
\frac&lbrace;1&rbrace;&lbrace;2&rbrace;(0.5)v^2 = 0.5(9.81)(3) \implies v^2 = 58.86 \implies v = 7.67\mathrm&lbrace; m/s&rbrace;
$$

Friction does work to stop the block:

$$
\mu_k mg \cdot d = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

$$
0.4(0.5)(9.81)d = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(0.5)(58.86)
$$

$$
1.962d = 14.72 \implies d = 7.50\mathrm&lbrace; m&rbrace;
$$

Alternatively, using energy directly:
$mgh = \mu_k mg d \implies d = \dfrac{h}{\mu_k} = \dfrac{3}{0.4} = 7.5\mathrm{ m}$.

:::

---

## Work Done by Non-Conservative Forces

When non-conservative forces (like friction) are present:

$$
W_&lbrace;\mathrm&lbrace;nc&rbrace;&rbrace; = \Delta E_k + \Delta E_p
$$

Or equivalently:

$$
E_&lbrace;k,i&rbrace; + E_&lbrace;p,i&rbrace; + W_&lbrace;\mathrm&lbrace;nc&rbrace;&rbrace; = E_&lbrace;k,f&rbrace; + E_&lbrace;p,f&rbrace;
$$

where $W_{\mathrm{nc}}$ is the work done by non-conservative forces (negative for friction).

:::info[Example]

A $3\mathrm{ kg}$ block slides down a $5\mathrm{ m}$ ramp inclined at $30\degree$ with
$\mu_k = 0.2$. Find the speed at the bottom if it starts from rest.

$$
mgh - \mu_k mg\cos\theta \cdot d = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

$$
3(9.81)(5\sin 30\degree) - 0.2(3)(9.81)\cos 30\degree \times \frac&lbrace;5&rbrace;&lbrace;\sin 30\degree&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(3)v^2
$$

Wait, $d = \dfrac{h}{\sin\theta} = \dfrac{5\sin 30\degree}{\sin 30\degree} = 5\mathrm{ m}$ (since
$h = 5\sin 30\degree = 2.5\mathrm{ m}$).

$$
3(9.81)(2.5) - 0.2(3)(9.81)(0.866)(10) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(3)v^2
$$

$$
73.58 - 50.97 = 1.5v^2
$$

$$
22.61 = 1.5v^2 \implies v = 3.88\mathrm&lbrace; m/s&rbrace;
$$

:::

---

## Power

### Definition

Power is the rate at which work is done or energy is transferred:

$$
P = \frac&lbrace;W&rbrace;&lbrace;t&rbrace; = \frac&lbrace;\Delta E&rbrace;&lbrace;t&rbrace;
$$

For a constant force:

$$
P = Fv
$$

### Units

- SI unit: watt ($\mathrm{W}$), where $1\mathrm{ W} = 1\mathrm{ J/s}$.
- Other units: kilowatt ($1\mathrm{ kW} = 1000\mathrm{ W}$), horsepower
  ($1\mathrm{ hp} \approx 746\mathrm{ W}$).

### Power and Inclined Planes

For an object moving up an incline at constant speed $v$:

$$
P = Fv = (mg\sin\theta + f)v
$$

### Power and Vehicles

For a car on a level road at maximum speed (driving force equals drag):

$$
P = Fv = f_&lbrace;\mathrm&lbrace;drag&rbrace;&rbrace; \cdot v
$$

Since drag increases with speed, there is a maximum speed where
$P = f_{\mathrm{drag}} \cdot v_{\max}$.

:::info[Example]

A car engine produces $80\mathrm{ kW}$ of power. The total resistive force is $800\mathrm{ N}$ at
the car's maximum speed. Find the maximum speed.

$$
P = Fv \implies 80000 = 800v \implies v = 100\mathrm&lbrace; m/s&rbrace;
$$

This is $360\mathrm{ km/h}$, which is unrealistic for a car with $80\mathrm{ kW}$ — in practice,
drag increases with $v^2$ so the maximum speed would be lower.

:::

---

## Efficiency of Energy Transfers

### Definition

$$
\mathrm&lbrace;Efficiency&rbrace; = \frac&lbrace;\mathrm&lbrace;useful energy output&rbrace;&rbrace;&lbrace;\mathrm&lbrace;total energy input&rbrace;&rbrace; \times 100\%
$$

### Energy Degradation

In all real energy transfers, some energy is dissipated (usually as thermal energy due to friction).
This means:

- Efficiency is always less than 100%.
- Total energy is always conserved, but useful energy decreases.
- The "lost" energy is not destroyed — it is transferred to the surroundings as heat.

### Sankey Diagrams

Sankey diagrams visually represent energy flows:

- The width of each arrow is proportional to the amount of energy.
- The input energy splits into useful output and wasted energy.

:::info[Example]

A light bulb converts $100\mathrm{ J}$ of electrical energy into $10\mathrm{ J}$ of light energy and
$90\mathrm{ J}$ of thermal energy per second.

$$
\mathrm&lbrace;Efficiency&rbrace; = \frac&lbrace;10&rbrace;&lbrace;100&rbrace; \times 100\% = 10\%
$$

Power input $= 100\mathrm{ W}$, useful power output $= 10\mathrm{ W}$.

:::

### Common Efficiencies

| Device                  | Typical Efficiency |
| ----------------------- | ------------------ |
| Incandescent light bulb | 5--10%             |
| LED light bulb          | 30--40%            |
| Electric motor          | 70--95%            |
| Car engine (petrol)     | 20--30%            |
| Diesel engine           | 30--40%            |
| Steam turbine           | 35--45%            |
| Solar cell              | 15--25%            |
| Human body              | 20--25%            |

---

## Energy in Simple Harmonic Motion

### Total Energy in SHM

In simple harmonic motion, energy continuously converts between kinetic and potential:

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = E_k + E_p = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 A^2
$$

where $A$ is the amplitude.

### Energy as a Function of Position

$$
E_k(x) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;k(A^2 - x^2)
$$

$$
E_p(x) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2
$$

### Energy as a Function of Time

$$
E_k(t) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2\cos^2(\omega t)
$$

$$
E_p(t) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2\sin^2(\omega t)
$$

The total energy remains constant at all times.

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

A roller coaster car of mass $500\mathrm{ kg}$ starts from rest at point `A` which is
$30\mathrm{ m}$ above the ground. It travels along the track to point `B` which is $10\mathrm{ m}$
above the ground. Neglecting friction, find its speed at `B`.

$$
mgh_A = mgh_B + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_B^2
$$

$$
9.81(30) = 9.81(10) + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;v_B^2
$$

$$
294.3 = 98.1 + 0.5v_B^2
$$

$$
v_B^2 = 392.4 \implies v_B = 19.8\mathrm&lbrace; m/s&rbrace;
$$

### Question 2 (Paper 2 style)

A spring-loaded launcher has spring constant $k = 500\mathrm{ N/m}$ and is compressed by
$0.15\mathrm{ m}$. It launches a $0.2\mathrm{ kg}$ ball vertically upward.

**(a)** Find the speed of the ball as it leaves the launcher.

$$
\frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

$$
v = x\sqrt&lbrace;\frac&lbrace;k&rbrace;&lbrace;m&rbrace;&rbrace; = 0.15\sqrt&lbrace;\frac&lbrace;500&rbrace;&lbrace;0.2&rbrace;&rbrace; = 0.15\sqrt&lbrace;2500&rbrace; = 0.15 \times 50 = 7.5\mathrm&lbrace; m/s&rbrace;
$$

**(b)** Find the maximum height reached (from the launch point).

$$
\frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2 = mgh
$$

$$
h = \frac&lbrace;v^2&rbrace;&lbrace;2g&rbrace; = \frac&lbrace;56.25&rbrace;&lbrace;19.62&rbrace; = 2.87\mathrm&lbrace; m&rbrace;
$$

### Question 3 (Paper 2 style)

A pump lifts $500\mathrm{ kg}$ of water per minute from a well $15\mathrm{ m}$ deep. The pump has an
efficiency of 65%. Find the power input to the pump.

$$
P_&lbrace;\mathrm&lbrace;useful&rbrace;&rbrace; = \frac&lbrace;mgh&rbrace;&lbrace;t&rbrace; = \frac&lbrace;500 \times 9.81 \times 15&rbrace;&lbrace;60&rbrace; = 1226\mathrm&lbrace; W&rbrace;
$$

$$
P_&lbrace;\mathrm&lbrace;input&rbrace;&rbrace; = \frac&lbrace;P_&lbrace;\mathrm&lbrace;useful&rbrace;&rbrace;&rbrace;&lbrace;\eta&rbrace; = \frac&lbrace;1226&rbrace;&lbrace;0.65&rbrace; = 1887\mathrm&lbrace; W&rbrace; \approx 1.89\mathrm&lbrace; kW&rbrace;
$$

### Question 4 (Paper 1 style)

A satellite of mass $200\mathrm{ kg}$ is in a circular orbit at altitude $500\mathrm{ km}$.
($M_E = 5.97 \times 10^{24}\mathrm{ kg}$, $R_E = 6.37 \times 10^6\mathrm{ m}$)

**(a)** Find the orbital speed.

$$
r = 6.87 \times 10^6\mathrm&lbrace; m&rbrace;
$$

$$
\frac&lbrace;GMm&rbrace;&lbrace;r^2&rbrace; = \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace; \implies v = \sqrt&lbrace;\frac&lbrace;GM&rbrace;&lbrace;r&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;6.674 \times 10^&lbrace;-11&rbrace; \times 5.97 \times 10^&lbrace;24&rbrace;&rbrace;&lbrace;6.87 \times 10^6&rbrace;&rbrace;
$$

$$
v = \sqrt&lbrace;5.80 \times 10^7&rbrace; = 7616\mathrm&lbrace; m/s&rbrace;
$$

**(b)** Find the total mechanical energy.

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = E_k + E_p = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2 - \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\frac&lbrace;GM&rbrace;&lbrace;r&rbrace; - \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; = -\frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace;
$$

$$
E = -\frac&lbrace;6.674 \times 10^&lbrace;-11&rbrace; \times 5.97 \times 10^&lbrace;24&rbrace; \times 200&rbrace;&lbrace;2 \times 6.87 \times 10^6&rbrace;
$$

$$
= -\frac&lbrace;7.97 \times 10^&lbrace;16&rbrace;&rbrace;&lbrace;1.374 \times 10^7&rbrace; = -5.80 \times 10^9\mathrm&lbrace; J&rbrace;
$$

### Question 5 (Paper 2 style)

A $60\mathrm{ kg}$ person jumps from a platform $5\mathrm{ m}$ above a trampoline. The trampoline
sags $0.5\mathrm{ m}$ at the lowest point. Find the spring constant of the trampoline.

At the lowest point, all energy is elastic potential energy:

$$
mg(h + x) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2
$$

$$
60(9.81)(5.5) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;k(0.25)
$$

$$
3237.3 = 0.125k \implies k = 25898\mathrm&lbrace; N/m&rbrace; \approx 26000\mathrm&lbrace; N/m&rbrace;
$$

---

## Summary

| Energy Type                     | Formula                                                         |
| ------------------------------- | --------------------------------------------------------------- |
| Kinetic                         | $E_k = \dfrac{1}{2}mv^2$                                        |
| Gravitational PE (near surface) | $E_p = mgh$                                                     |
| Gravitational PE (universal)    | $E_p = -\dfrac{GMm}{r}$                                         |
| Elastic PE                      | $E_e = \dfrac{1}{2}kx^2$                                        |
| Conservation                    | $E_k + E_p + E_e = \mathrm{constant}$                           |
| Work-energy theorem             | $W_{\mathrm{net}} = \Delta E_k$                                 |
| Power                           | $P = \dfrac{W}{t} = Fv$                                         |
| Efficiency                      | $\eta = \dfrac{E_{\mathrm{out}}}{E_{\mathrm{in}}} \times 100\%$ |

:::tip[Exam Strategy]

For energy conservation problems, always define your reference level for gravitational PE. Show the
energy at two clearly chosen points (usually start and end). When friction is present, subtract the
work done by friction from the total mechanical energy.

:::

---

## Energy in Gravitational Fields (Extended)

### Gravitational Potential Energy Curves

For two masses $M$ and $m$ separated by distance $r$, the total energy determines the type of orbit:

| Total Energy $E$ | Orbit Type                    |
| ---------------- | ----------------------------- | --- | --- | --- | ------------------ |
| $E \lt 0$ (and $ | E                             | \lt | E_p | $)  | Bound (elliptical) |
| $E = 0$          | Parabolic (escape trajectory) |
| $E \gt 0$        | Hyperbolic (unbound)          |

For a circular orbit:

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = E_k + E_p = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2 - \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; = \frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace; - \frac&lbrace;GMm&rbrace;&lbrace;r&rbrace; = -\frac&lbrace;GMm&rbrace;&lbrace;2r&rbrace;
$$

### Energy to Change Orbits

To move from one circular orbit to another, energy must be supplied. The minimum energy required is
the difference in total orbital energies.

:::info[Example]

Find the energy required to move a $1000\mathrm{ kg}$ satellite from a circular orbit at
$300\mathrm{ km}$ altitude to one at $600\mathrm{ km}$ altitude.

($M_E = 5.97 \times 10^{24}\mathrm{ kg}$, $R_E = 6.37 \times 10^6\mathrm{ m}$)

$$
r_1 = 6.67 \times 10^6\mathrm&lbrace; m&rbrace;, \quad r_2 = 6.97 \times 10^6\mathrm&lbrace; m&rbrace;
$$

$$
E_1 = -\frac&lbrace;GMm&rbrace;&lbrace;2r_1&rbrace; = -\frac&lbrace;6.674 \times 10^&lbrace;-11&rbrace; \times 5.97 \times 10^&lbrace;24&rbrace; \times 1000&rbrace;&lbrace;2 \times 6.67 \times 10^6&rbrace;
$$

$$
= -\frac&lbrace;3.985 \times 10^&lbrace;17&rbrace;&rbrace;&lbrace;1.334 \times 10^7&rbrace; = -2.988 \times 10^&lbrace;10&rbrace;\mathrm&lbrace; J&rbrace;
$$

$$
E_2 = -\frac&lbrace;GMm&rbrace;&lbrace;2r_2&rbrace; = -\frac&lbrace;3.985 \times 10^&lbrace;17&rbrace;&rbrace;&lbrace;1.394 \times 10^7&rbrace; = -2.858 \times 10^&lbrace;10&rbrace;\mathrm&lbrace; J&rbrace;
$$

$$
\Delta E = E_2 - E_1 = -2.858 \times 10^&lbrace;10&rbrace; - (-2.988 \times 10^&lbrace;10&rbrace;) = 1.30 \times 10^9\mathrm&lbrace; J&rbrace;
$$

The energy required is $1.30 \times 10^9\mathrm{ J}$ (about $1.30\mathrm{ GJ}$).

:::

---

## Work Done by a Variable Force

When the force varies with position, the work done is the area under the force-displacement graph:

$$
W = \int_&lbrace;x_1&rbrace;^&lbrace;x_2&rbrace; F(x)\,dx
$$

:::info[Example]

A spring obeys Hooke's law: $F = -kx$. Find the work done in compressing the spring from $x = 0$ to
$x = -d$.

$$
W = \int_0^&lbrace;-d&rbrace; (-kx)\,dx = \left[-\frac&lbrace;kx^2&rbrace;&lbrace;2&rbrace;\right]_0^&lbrace;-d&rbrace; = -\frac&lbrace;k(-d)^2&rbrace;&lbrace;2&rbrace; = -\frac&lbrace;kd^2&rbrace;&lbrace;2&rbrace;
$$

The negative sign indicates work is done on the spring (energy stored). The elastic potential energy
is $\dfrac{1}{2}kd^2$.

:::

### Force-Extension Graphs for Non-Hookean Materials

For materials that do not obey Hooke's law, the area under the force-extension graph still equals
the elastic potential energy, but it must be found by integration or by counting squares.

---

## Power in Rotational Systems

For rotational systems:

$$
P = \tau\omega
$$

where $\tau$ is the torque and $\omega$ is the angular velocity.

:::info[Example]

A motor delivers a torque of $50\mathrm{ N}\cdot\mathrm{m}$ at $3000\mathrm{ rpm}$. Find the power
output.

$$
\omega = 3000 \times \frac&lbrace;2\pi&rbrace;&lbrace;60&rbrace; = 314.2\mathrm&lbrace; rad/s&rbrace;
$$

$$
P = 50 \times 314.2 = 15708\mathrm&lbrace; W&rbrace; \approx 15.7\mathrm&lbrace; kW&rbrace;
$$

:::

---

## Energy Dissipation and Thermal Effects

### Friction and Heat

When friction does work $W_f$, the energy is converted to thermal energy:

$$
Q = W_f = \mu_k Nd
$$

### Air Resistance

Air resistance converts kinetic energy to thermal energy:

$$
\Delta E_k = W_&lbrace;\mathrm&lbrace;drag&rbrace;&rbrace; = \int F_&lbrace;\mathrm&lbrace;drag&rbrace;&rbrace;\,dx
$$

---

## Additional IB Exam-Style Questions

### Question 6 (Paper 2 style)

A $0.5\mathrm{ kg}$ ball is attached to a string of length $1.0\mathrm{ m}$ and swings as a simple
pendulum. It is released from horizontal.

**(a)** Find the tension in the string at the lowest point.

At the lowest point, all $E_p$ has converted to $E_k$:

$$
\frac&lbrace;1&rbrace;&lbrace;2&rbrace;(0.5)v^2 = 0.5(9.81)(1.0) \implies v^2 = 19.62 \implies v = 4.43\mathrm&lbrace; m/s&rbrace;
$$

For circular motion at the lowest point:

$$
T - mg = \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace;
$$

$$
T = mg + \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace; = 0.5(9.81) + \frac&lbrace;0.5(19.62)&rbrace;&lbrace;1.0&rbrace; = 4.905 + 9.81 = 14.72\mathrm&lbrace; N&rbrace;
$$

**(b)** Find the speed when the string makes an angle of $45\degree$ with the vertical.

Height above lowest point: $h = L - L\cos 45\degree = 1.0 - 0.707 = 0.293\mathrm{ m}$.

$$
mgh = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

$$
v = \sqrt&lbrace;2gh&rbrace; = \sqrt&lbrace;2(9.81)(0.293)&rbrace; = \sqrt&lbrace;5.75&rbrace; = 2.40\mathrm&lbrace; m/s&rbrace;
$$

### Question 7 (Paper 2 style)

A car of mass $1500\mathrm{ kg}$ travels up a hill of incline $5\degree$ at constant speed of
$20\mathrm{ m/s}$. The total resistive force (friction + air resistance) is $400\mathrm{ N}$.

**(a)** Calculate the driving force required.

$$
F = mg\sin\theta + f = 1500(9.81)\sin 5\degree + 400 = 1283 + 400 = 1683\mathrm&lbrace; N&rbrace;
$$

**(b)** Calculate the power output of the engine.

$$
P = Fv = 1683 \times 20 = 33660\mathrm&lbrace; W&rbrace; \approx 33.7\mathrm&lbrace; kW&rbrace;
$$

**(c)** If the engine efficiency is $25\%$, what is the rate of fuel energy consumption?

$$
P_&lbrace;\mathrm&lbrace;input&rbrace;&rbrace; = \frac&lbrace;33660&rbrace;&lbrace;0.25&rbrace; = 134640\mathrm&lbrace; W&rbrace; = 134.6\mathrm&lbrace; kW&rbrace;
$$

### Question 8 (Paper 1 style)

A spring with $k = 500\mathrm{ N/m}$ is used to launch a $0.1\mathrm{ kg}$ projectile vertically.
The spring is compressed $0.08\mathrm{ m}$. What is the maximum height reached above the launch
point?

$$
\frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2 = mgh
$$

$$
h = \frac&lbrace;kx^2&rbrace;&lbrace;2mg&rbrace; = \frac&lbrace;500(0.0064)&rbrace;&lbrace;2(0.1)(9.81)&rbrace; = \frac&lbrace;3.2&rbrace;&lbrace;1.962&rbrace; = 1.63\mathrm&lbrace; m&rbrace;
$$
