---
id: energy
title: Energy and Conservation
description: IB Physics — kinetic energy, potential energy, conservation of energy, and power.
slug: energy
---

## Forms of Energy

Energy is a scalar quantity measured in joules ($\text{J}$). It exists in many forms and can be
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
E_k = \frac{1}{2}mv^2
$$

### Key Points

- Kinetic energy is always non-negative ($E_k \ge 0$).
- It depends on speed squared, so doubling speed quadruples kinetic energy.
- It is a scalar (no direction).

### Work-Energy Theorem

The net work done on an object equals the change in its kinetic energy:

$$
W_{\text{net}} = \Delta E_k = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
$$

:::info[Example]

A $1500\text{ kg}$ car travelling at $20\text{ m/s}$ brakes to a stop. Find the work done by the
brakes.

$$
W = \Delta E_k = 0 - \frac{1}{2}(1500)(400) = -300000\text{ J} = -300\text{ kJ}
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
E_p = -\frac{GMm}{r}
$$

where $G = 6.674 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$.

### Key Differences

| Property        | Near Surface ($mgh$)       | Universal ($-GMm/r$)                    |
| --------------- | -------------------------- | --------------------------------------- |
| Reference level | Arbitrary (usually ground) | Zero at infinity                        |
| Sign            | Positive above reference   | Negative (bound state)                  |
| Validity        | $h \ll R_{\text{Earth}}$   | Any distance                            |
| Gradient        | $-\dfrac{dE_p}{dh} = -mg$  | $-\dfrac{dE_p}{dr} = -\dfrac{GMm}{r^2}$ |

:::info[Example]

Find the gravitational potential energy of a $70\text{ kg}$ person at the top of a $50\text{ m}$
building (using $mgh$).

$$
E_p = 70 \times 9.81 \times 50 = 34335\text{ J} \approx 34.3\text{ kJ}
$$

:::

:::info[Example]

A satellite of mass $500\text{ kg}$ orbits at a height of $300\text{ km}$ above Earth's surface.
Find its gravitational potential energy. ($M_E = 5.97 \times 10^{24}\text{ kg}$,
$R_E = 6.37 \times 10^6\text{ m}$)

$$
r = 6.37 \times 10^6 + 3.0 \times 10^5 = 6.67 \times 10^6\text{ m}
$$

$$
E_p = -\frac{6.674 \times 10^{-11} \times 5.97 \times 10^{24} \times 500}{6.67 \times 10^6}
$$

$$
= -\frac{1.992 \times 10^{17}}{6.67 \times 10^6} = -2.987 \times 10^{10}\text{ J}
$$

:::

### Escape Velocity

The minimum speed needed to escape a gravitational field:

$$
v_{\text{esc}} = \sqrt{\frac{2GM}{r}}
$$

For Earth: $v_{\text{esc}} \approx 11200\text{ m/s} \approx 11.2\text{ km/s}$.

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
E_e = \frac{1}{2}kx^2
$$

This is also the work done in compressing or extending the spring by $x$:

$$
W = \int_0^x kx'\,dx' = \frac{1}{2}kx^2
$$

:::info[Example]

A spring with $k = 200\text{ N/m}$ is compressed by $0.1\text{ m}$. Find the elastic potential
energy stored.

$$
E_e = \frac{1}{2}(200)(0.01) = 1.0\text{ J}
$$

:::

### Force-Extension Graphs

For a spring obeying Hooke's law, the force-extension graph is a straight line through the origin.
The area under the graph equals the elastic potential energy.

---

## Conservation of Mechanical Energy

### Principle

In a system with only conservative forces (gravity, elastic forces), the total mechanical energy is
conserved:

$$
E_k + E_p + E_e = \text{constant}
$$

$$
\frac{1}{2}mv_1^2 + mgh_1 + \frac{1}{2}kx_1^2 = \frac{1}{2}mv_2^2 + mgh_2 + \frac{1}{2}kx_2^2
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

A $2\text{ kg}$ ball is dropped from a height of $10\text{ m}$. Find its speed just before it hits
the ground (ignoring air resistance).

$$
E_k(\text{top}) + E_p(\text{top}) = E_k(\text{bottom}) + E_p(\text{bottom})
$$

$$
0 + 2(9.81)(10) = \frac{1}{2}(2)v^2 + 0
$$

$$
196.2 = v^2
$$

$$
v = 14.0\text{ m/s}
$$

:::

:::info[Example]

A pendulum of length $1.5\text{ m}$ is released from horizontal. Find its speed at the lowest point.

Taking the lowest point as reference ($E_p = 0$):

$$
E_p(\text{top}) = mgL = m(9.81)(1.5)
$$

$$
E_k(\text{bottom}) = \frac{1}{2}mv^2
$$

By conservation: $mgL = \dfrac{1}{2}mv^2$.

$$
v = \sqrt{2gL} = \sqrt{2(9.81)(1.5)} = \sqrt{29.43} = 5.42\text{ m/s}
$$

:::

:::info[Example]

A block of mass $0.5\text{ kg}$ slides from rest down a frictionless curved ramp of height
$3\text{ m}$ onto a horizontal surface with friction ($\mu_k = 0.4$). How far does it slide before
stopping?

At the bottom of the ramp, all $E_p$ converts to $E_k$:

$$
\frac{1}{2}(0.5)v^2 = 0.5(9.81)(3) \implies v^2 = 58.86 \implies v = 7.67\text{ m/s}
$$

Friction does work to stop the block:

$$
\mu_k mg \cdot d = \frac{1}{2}mv^2
$$

$$
0.4(0.5)(9.81)d = \frac{1}{2}(0.5)(58.86)
$$

$$
1.962d = 14.72 \implies d = 7.50\text{ m}
$$

Alternatively, using energy directly:
$mgh = \mu_k mg d \implies d = \dfrac{h}{\mu_k} = \dfrac{3}{0.4} = 7.5\text{ m}$.

:::

---

## Work Done by Non-Conservative Forces

When non-conservative forces (like friction) are present:

$$
W_{\text{nc}} = \Delta E_k + \Delta E_p
$$

Or equivalently:

$$
E_{k,i} + E_{p,i} + W_{\text{nc}} = E_{k,f} + E_{p,f}
$$

where $W_{\text{nc}}$ is the work done by non-conservative forces (negative for friction).

:::info[Example]

A $3\text{ kg}$ block slides down a $5\text{ m}$ ramp inclined at $30\degree$ with $\mu_k = 0.2$.
Find the speed at the bottom if it starts from rest.

$$
mgh - \mu_k mg\cos\theta \cdot d = \frac{1}{2}mv^2
$$

$$
3(9.81)(5\sin 30\degree) - 0.2(3)(9.81)\cos 30\degree \times \frac{5}{\sin 30\degree} = \frac{1}{2}(3)v^2
$$

Wait, $d = \dfrac{h}{\sin\theta} = \dfrac{5\sin 30\degree}{\sin 30\degree} = 5\text{ m}$ (since
$h = 5\sin 30\degree = 2.5\text{ m}$).

$$
3(9.81)(2.5) - 0.2(3)(9.81)(0.866)(10) = \frac{1}{2}(3)v^2
$$

$$
73.58 - 50.97 = 1.5v^2
$$

$$
22.61 = 1.5v^2 \implies v = 3.88\text{ m/s}
$$

:::

---

## Power

### Definition

Power is the rate at which work is done or energy is transferred:

$$
P = \frac{W}{t} = \frac{\Delta E}{t}
$$

For a constant force:

$$
P = Fv
$$

### Units

- SI unit: watt ($\text{W}$), where $1\text{ W} = 1\text{ J/s}$.
- Other units: kilowatt ($1\text{ kW} = 1000\text{ W}$), horsepower
  ($1\text{ hp} \approx 746\text{ W}$).

### Power and Inclined Planes

For an object moving up an incline at constant speed $v$:

$$
P = Fv = (mg\sin\theta + f)v
$$

### Power and Vehicles

For a car on a level road at maximum speed (driving force equals drag):

$$
P = Fv = f_{\text{drag}} \cdot v
$$

Since drag increases with speed, there is a maximum speed where
$P = f_{\text{drag}} \cdot v_{\max}$.

:::info[Example]

A car engine produces $80\text{ kW}$ of power. The total resistive force is $800\text{ N}$ at the
car's maximum speed. Find the maximum speed.

$$
P = Fv \implies 80000 = 800v \implies v = 100\text{ m/s}
$$

This is $360\text{ km/h}$, which is unrealistic for a car with $80\text{ kW}$ — in practice, drag
increases with $v^2$ so the maximum speed would be lower.

:::

---

## Efficiency of Energy Transfers

### Definition

$$
\text{Efficiency} = \frac{\text{useful energy output}}{\text{total energy input}} \times 100\%
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

A light bulb converts $100\text{ J}$ of electrical energy into $10\text{ J}$ of light energy and
$90\text{ J}$ of thermal energy per second.

$$
\text{Efficiency} = \frac{10}{100} \times 100\% = 10\%
$$

Power input $= 100\text{ W}$, useful power output $= 10\text{ W}$.

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
E_{\text{total}} = E_k + E_p = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2
$$

where $A$ is the amplitude.

### Energy as a Function of Position

$$
E_k(x) = \frac{1}{2}k(A^2 - x^2)
$$

$$
E_p(x) = \frac{1}{2}kx^2
$$

### Energy as a Function of Time

$$
E_k(t) = \frac{1}{2}kA^2\cos^2(\omega t)
$$

$$
E_p(t) = \frac{1}{2}kA^2\sin^2(\omega t)
$$

The total energy remains constant at all times.

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

A roller coaster car of mass $500\text{ kg}$ starts from rest at point `A` which is $30\text{ m}$
above the ground. It travels along the track to point `B` which is $10\text{ m}$ above the ground.
Neglecting friction, find its speed at `B`.

$$
mgh_A = mgh_B + \frac{1}{2}mv_B^2
$$

$$
9.81(30) = 9.81(10) + \frac{1}{2}v_B^2
$$

$$
294.3 = 98.1 + 0.5v_B^2
$$

$$
v_B^2 = 392.4 \implies v_B = 19.8\text{ m/s}
$$

### Question 2 (Paper 2 style)

A spring-loaded launcher has spring constant $k = 500\text{ N/m}$ and is compressed by
$0.15\text{ m}$. It launches a $0.2\text{ kg}$ ball vertically upward.

**(a)** Find the speed of the ball as it leaves the launcher.

$$
\frac{1}{2}kx^2 = \frac{1}{2}mv^2
$$

$$
v = x\sqrt{\frac{k}{m}} = 0.15\sqrt{\frac{500}{0.2}} = 0.15\sqrt{2500} = 0.15 \times 50 = 7.5\text{ m/s}
$$

**(b)** Find the maximum height reached (from the launch point).

$$
\frac{1}{2}mv^2 = mgh
$$

$$
h = \frac{v^2}{2g} = \frac{56.25}{19.62} = 2.87\text{ m}
$$

### Question 3 (Paper 2 style)

A pump lifts $500\text{ kg}$ of water per minute from a well $15\text{ m}$ deep. The pump has an
efficiency of 65%. Find the power input to the pump.

$$
P_{\text{useful}} = \frac{mgh}{t} = \frac{500 \times 9.81 \times 15}{60} = 1226\text{ W}
$$

$$
P_{\text{input}} = \frac{P_{\text{useful}}}{\eta} = \frac{1226}{0.65} = 1887\text{ W} \approx 1.89\text{ kW}
$$

### Question 4 (Paper 1 style)

A satellite of mass $200\text{ kg}$ is in a circular orbit at altitude $500\text{ km}$.
($M_E = 5.97 \times 10^{24}\text{ kg}$, $R_E = 6.37 \times 10^6\text{ m}$)

**(a)** Find the orbital speed.

$$
r = 6.87 \times 10^6\text{ m}
$$

$$
\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.674 \times 10^{-11} \times 5.97 \times 10^{24}}{6.87 \times 10^6}}
$$

$$
v = \sqrt{5.80 \times 10^7} = 7616\text{ m/s}
$$

**(b)** Find the total mechanical energy.

$$
E_{\text{total}} = E_k + E_p = \frac{1}{2}mv^2 - \frac{GMm}{r} = \frac{1}{2}m\frac{GM}{r} - \frac{GMm}{r} = -\frac{GMm}{2r}
$$

$$
E = -\frac{6.674 \times 10^{-11} \times 5.97 \times 10^{24} \times 200}{2 \times 6.87 \times 10^6}
$$

$$
= -\frac{7.97 \times 10^{16}}{1.374 \times 10^7} = -5.80 \times 10^9\text{ J}
$$

### Question 5 (Paper 2 style)

A $60\text{ kg}$ person jumps from a platform $5\text{ m}$ above a trampoline. The trampoline sags
$0.5\text{ m}$ at the lowest point. Find the spring constant of the trampoline.

At the lowest point, all energy is elastic potential energy:

$$
mg(h + x) = \frac{1}{2}kx^2
$$

$$
60(9.81)(5.5) = \frac{1}{2}k(0.25)
$$

$$
3237.3 = 0.125k \implies k = 25898\text{ N/m} \approx 26000\text{ N/m}
$$

---

## Summary

| Energy Type                     | Formula                                                     |
| ------------------------------- | ----------------------------------------------------------- |
| Kinetic                         | $E_k = \dfrac{1}{2}mv^2$                                    |
| Gravitational PE (near surface) | $E_p = mgh$                                                 |
| Gravitational PE (universal)    | $E_p = -\dfrac{GMm}{r}$                                     |
| Elastic PE                      | $E_e = \dfrac{1}{2}kx^2$                                    |
| Conservation                    | $E_k + E_p + E_e = \text{constant}$                         |
| Work-energy theorem             | $W_{\text{net}} = \Delta E_k$                               |
| Power                           | $P = \dfrac{W}{t} = Fv$                                     |
| Efficiency                      | $\eta = \dfrac{E_{\text{out}}}{E_{\text{in}}} \times 100\%$ |

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
E_{\text{total}} = E_k + E_p = \frac{1}{2}mv^2 - \frac{GMm}{r} = \frac{GMm}{2r} - \frac{GMm}{r} = -\frac{GMm}{2r}
$$

### Energy to Change Orbits

To move from one circular orbit to another, energy must be supplied. The minimum energy required is
the difference in total orbital energies.

:::info[Example]

Find the energy required to move a $1000\text{ kg}$ satellite from a circular orbit at
$300\text{ km}$ altitude to one at $600\text{ km}$ altitude.

($M_E = 5.97 \times 10^{24}\text{ kg}$, $R_E = 6.37 \times 10^6\text{ m}$)

$$
r_1 = 6.67 \times 10^6\text{ m}, \quad r_2 = 6.97 \times 10^6\text{ m}
$$

$$
E_1 = -\frac{GMm}{2r_1} = -\frac{6.674 \times 10^{-11} \times 5.97 \times 10^{24} \times 1000}{2 \times 6.67 \times 10^6}
$$

$$
= -\frac{3.985 \times 10^{17}}{1.334 \times 10^7} = -2.988 \times 10^{10}\text{ J}
$$

$$
E_2 = -\frac{GMm}{2r_2} = -\frac{3.985 \times 10^{17}}{1.394 \times 10^7} = -2.858 \times 10^{10}\text{ J}
$$

$$
\Delta E = E_2 - E_1 = -2.858 \times 10^{10} - (-2.988 \times 10^{10}) = 1.30 \times 10^9\text{ J}
$$

The energy required is $1.30 \times 10^9\text{ J}$ (about $1.30\text{ GJ}$).

:::

---

## Work Done by a Variable Force

When the force varies with position, the work done is the area under the force-displacement graph:

$$
W = \int_{x_1}^{x_2} F(x)\,dx
$$

:::info[Example]

A spring obeys Hooke's law: $F = -kx$. Find the work done in compressing the spring from $x = 0$ to
$x = -d$.

$$
W = \int_0^{-d} (-kx)\,dx = \left[-\frac{kx^2}{2}\right]_0^{-d} = -\frac{k(-d)^2}{2} = -\frac{kd^2}{2}
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

A motor delivers a torque of $50\text{ N}\cdot\text{m}$ at $3000\text{ rpm}$. Find the power output.

$$
\omega = 3000 \times \frac{2\pi}{60} = 314.2\text{ rad/s}
$$

$$
P = 50 \times 314.2 = 15708\text{ W} \approx 15.7\text{ kW}
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
\Delta E_k = W_{\text{drag}} = \int F_{\text{drag}}\,dx
$$

---

## Additional IB Exam-Style Questions

### Question 6 (Paper 2 style)

A $0.5\text{ kg}$ ball is attached to a string of length $1.0\text{ m}$ and swings as a simple
pendulum. It is released from horizontal.

**(a)** Find the tension in the string at the lowest point.

At the lowest point, all $E_p$ has converted to $E_k$:

$$
\frac{1}{2}(0.5)v^2 = 0.5(9.81)(1.0) \implies v^2 = 19.62 \implies v = 4.43\text{ m/s}
$$

For circular motion at the lowest point:

$$
T - mg = \frac{mv^2}{r}
$$

$$
T = mg + \frac{mv^2}{r} = 0.5(9.81) + \frac{0.5(19.62)}{1.0} = 4.905 + 9.81 = 14.72\text{ N}
$$

**(b)** Find the speed when the string makes an angle of $45\degree$ with the vertical.

Height above lowest point: $h = L - L\cos 45\degree = 1.0 - 0.707 = 0.293\text{ m}$.

$$
mgh = \frac{1}{2}mv^2
$$

$$
v = \sqrt{2gh} = \sqrt{2(9.81)(0.293)} = \sqrt{5.75} = 2.40\text{ m/s}
$$

### Question 7 (Paper 2 style)

A car of mass $1500\text{ kg}$ travels up a hill of incline $5\degree$ at constant speed of
$20\text{ m/s}$. The total resistive force (friction + air resistance) is $400\text{ N}$.

**(a)** Calculate the driving force required.

$$
F = mg\sin\theta + f = 1500(9.81)\sin 5\degree + 400 = 1283 + 400 = 1683\text{ N}
$$

**(b)** Calculate the power output of the engine.

$$
P = Fv = 1683 \times 20 = 33660\text{ W} \approx 33.7\text{ kW}
$$

**(c)** If the engine efficiency is $25\%$, what is the rate of fuel energy consumption?

$$
P_{\text{input}} = \frac{33660}{0.25} = 134640\text{ W} = 134.6\text{ kW}
$$

### Question 8 (Paper 1 style)

A spring with $k = 500\text{ N/m}$ is used to launch a $0.1\text{ kg}$ projectile vertically. The
spring is compressed $0.08\text{ m}$. What is the maximum height reached above the launch point?

$$
\frac{1}{2}kx^2 = mgh
$$

$$
h = \frac{kx^2}{2mg} = \frac{500(0.0064)}{2(0.1)(9.81)} = \frac{3.2}{1.962} = 1.63\text{ m}
$$
