---
title: Energy and Work — Diagnostic Tests
description: "Hardest DSE energy questions: work done at angles, power-velocity relation, efficiency chains, and energy conservation with non-conservative forces."
slug: diag-energy-work
hide_table_of_contents: true
---

# Energy and Work — Diagnostic Tests

## Unit Tests

### UT-1: Work Done by a Variable-Angle Force on an Incline

**Question:**

A block of mass $8$ kg is pulled up a rough incline of angle $25°$ by a force $F = 100$ N applied at an angle of $15°$ above the incline surface. The coefficient of kinetic friction is $0.3$. The block moves $5$ m up the incline. Find (a) the work done by each force, (b) the net work done, and (c) the final speed if the block started from rest.

**Solution:**

**(a) Work done by each force:**

**Applied force:** $W_F = Fd \cos 15° = 100 \times 5 \times \cos 15° = 500 \times 0.9659 = 482.9$ J

**Weight:** The component of weight along the incline (opposing motion):
$$W_g = -mgd \sin 25° = -8 \times 9.81 \times 5 \times \sin 25° = -392.4 \times 0.4226 = -165.8 \text{ J}$$

**Normal force:** First find $N$:

$$N + F \sin 15° = mg \cos 25°$$

$$N = mg \cos 25° - F \sin 15° = 8(9.81)(0.9063) - 100(0.2588) = 71.10 - 25.88 = 45.22 \text{ N}$$

Normal force is perpendicular to displacement, so $W_N = 0$.

**Friction:** $W_f = -fd = -\mu N d = -0.3 \times 45.22 \times 5 = -67.83$ J

**(b) Net work done:**

$$W_{\text{net}} = 482.9 - 165.8 - 67.83 = 249.3 \text{ J}$$

**(c) Final speed (work-energy theorem):**

$$W_{\text{net}} = \Delta KE = \frac{1}{2}mv^2 - 0$$

$$v = \sqrt{\frac{2 W_{\text{net}}}{m}} = \sqrt{\frac{2 \times 249.3}{8}} = \sqrt{62.33} = 7.90 \text{ m s}^{-1}$$

**Key misconception:** The work done by the applied force is $Fd \cos\alpha$ where $\alpha$ is the angle between the force and the displacement, NOT the incline angle.

---

### UT-2: Power with Variable Velocity on a Slope

**Question:**

A car of mass $1200$ kg climbs a hill of constant gradient $1$ in $10$ (i.e., $\sin\theta = 0.1$) at constant speed $v$. The total resistive force (air resistance + rolling friction) is given by $R = 80 + 2v^2$ newtons, where $v$ is in $\text{ m s}^{-1}$. The engine power output is $30$ kW. Find the maximum constant speed the car can maintain on the hill.

**Solution:**

At constant speed, the driving force equals the total resistive force plus the component of weight along the slope:

$$F_{\text{drive}} = mg \sin\theta + R = 1200 \times 9.81 \times 0.1 + 80 + 2v^2$$

$$F_{\text{drive}} = 1177.2 + 80 + 2v^2 = 1257.2 + 2v^2$$

Power $P = F_{\text{drive}} \times v$:

$$30000 = (1257.2 + 2v^2)v$$

$$2v^3 + 1257.2v - 30000 = 0$$

This cubic equation must be solved numerically. By trial:

- $v = 15$: $2(3375) + 1257.2(15) - 30000 = 6750 + 18858 - 30000 = -4392$ (too low)
- $v = 20$: $2(8000) + 1257.2(20) - 30000 = 16000 + 25144 - 30000 = 11144$ (too high)
- $v = 17$: $2(4913) + 1257.2(17) - 30000 = 9826 + 21372 - 30000 = 1198$ (close)
- $v = 16.8$: $2(4741.6) + 1257.2(16.8) - 30000 = 9483.2 + 21121.0 - 30000 = 604.2$
- $v = 16.5$: $2(4492.1) + 1257.2(16.5) - 30000 = 8984.2 + 20743.8 - 30000 = -272.0$

By interpolation, $v \approx 16.6 \text{ m s}^{-1}$.

**Key insight:** As speed increases, the resistive force increases (due to the $2v^2$ term), so the driving force must also increase, but $P = Fv$ is constant, meaning $v$ is limited.

---

### UT-3: Efficiency of a Compound Machine System

**Question:**

A motor lifts a $500$ kg load through a height of $12$ m in $30$ s. The motor is $85\%$ efficient and is connected to a gearbox that is $92\%$ efficient. The electrical energy costs $\$0.15$ per kWh. Calculate (a) the total input power to the motor, (b) the total electrical energy consumed, and (c) the cost of this operation.

**Solution:**

**(a) Useful power output (lifting the load):**

$$P_{\text{useful}} = \frac{mgh}{t} = \frac{500 \times 9.81 \times 12}{30} = \frac{58860}{30} = 1962 \text{ W}$$

Overall efficiency: $\eta_{\text{total}} = \eta_{\text{motor}} \times \eta_{\text{gearbox}} = 0.85 \times 0.92 = 0.782$

$$P_{\text{input}} = \frac{P_{\text{useful}}}{\eta_{\text{total}}} = \frac{1962}{0.782} = 2509 \text{ W} = 2.51 \text{ kW}$$

**(b) Electrical energy consumed:**

$$E = P_{\text{input}} \times t = 2.51 \times \frac{30}{3600} = 0.0209 \text{ kWh}$$

**(c) Cost:**

$$\text{Cost} = 0.0209 \times 0.15 = \$0.00314$$

**Key misconception:** When machines are connected in series, the overall efficiency is the PRODUCT of individual efficiencies, not the sum or average. Also, efficiency $=$ useful output / total input, not the other way around.

---

## Integration Tests

### IT-1: Spring-Launched Block on Rough Surface (with Mechanics)

**Question:**

A block of mass $2$ kg is placed against a compressed spring of force constant $k = 800 \text{ N m}^{-1}$ on a rough horizontal surface ($\mu = 0.25$). The spring is compressed by $0.3$ m and then released. The block leaves the spring at the equilibrium position. Find (a) the speed of the block as it leaves the spring, and (b) the total distance the block travels before stopping.

**Solution:**

**(a) Speed leaving the spring:**

Energy stored in spring: $E_s = \frac{1}{2}kx^2 = \frac{1}{2}(800)(0.3)^2 = 36$ J

Work done against friction while spring expands: $W_f = \mu mg \times x = 0.25 \times 2 \times 9.81 \times 0.3 = 1.4715$ J

By work-energy theorem:

$$\frac{1}{2}kx^2 - \mu mg x = \frac{1}{2}mv^2$$

$$36 - 1.4715 = \frac{1}{2}(2)v^2$$

$$v^2 = \frac{34.53}{1} = 34.53$$

$$v = 5.88 \text{ m s}^{-1}$$

**(b) Total distance before stopping:**

After leaving the spring, the remaining KE is converted to work against friction:

$$\frac{1}{2}mv^2 = \mu mg d$$

$$d = \frac{v^2}{2\mu g} = \frac{34.53}{2 \times 0.25 \times 9.81} = \frac{34.53}{4.905} = 7.04 \text{ m}$$

**Total distance from start** $= 0.3 + 7.04 = 7.34$ m.

**Key insight:** While the spring is still in contact with the block (over the $0.3$ m compression distance), friction also does work. Students often forget this energy loss during the spring expansion phase.

---

### IT-2: Bungee Jump Energy Analysis (with Mechanics)

**Question:**

A bungee jumper of mass $70$ kg jumps from a bridge. The bungee cord has a natural (unstretched) length of $25$ m and a spring constant of $50 \text{ N m}^{-1}$. Air resistance is negligible. Find (a) the maximum speed of the jumper, (b) the maximum extension of the cord, and (c) the maximum deceleration experienced.

**Solution:**

Take the bridge as the reference point (zero gravitational PE). Downward is positive.

**(a) Maximum speed:**

The jumper is in free fall until the cord begins to stretch (first $25$ m). At $25$ m:

$$v^2 = u^2 + 2gs = 0 + 2(9.81)(25) = 490.5$$

$$v = 22.1 \text{ m s}^{-1}$$

After this, the cord stretches and exerts an upward spring force. Maximum speed occurs when acceleration $= 0$ (net force $= 0$):

$$mg = kx$$

$$x = \frac{mg}{k} = \frac{70 \times 9.81}{50} = 13.73 \text{ m}$$

So maximum speed occurs at $25 + 13.73 = 38.73$ m below the bridge.

Using energy conservation (taking bridge as zero GPE reference):

$$mgd = \frac{1}{2}kx^2 + \frac{1}{2}mv_{\max}^2$$

where $d = 38.73$ m and $x = 13.73$ m:

$$70 \times 9.81 \times 38.73 = \frac{1}{2}(50)(13.73)^2 + \frac{1}{2}(70)v_{\max}^2$$

$$26614.4 = 4712.6 + 35 v_{\max}^2$$

$$v_{\max}^2 = \frac{21901.8}{35} = 625.8$$

$$v_{\max} = 25.0 \text{ m s}^{-1}$$

**(b) Maximum extension:**

At maximum extension, velocity $= 0$ (all energy converted to spring PE and GPE loss):

$$mg(d + x_{\max}) = \frac{1}{2}kx_{\max}^2$$

where $d = 25$ m (natural length):

$$70 \times 9.81 \times (25 + x_{\max}) = \frac{1}{2}(50)x_{\max}^2$$

$$25 x_{\max}^2 - 686.7 x_{\max} - 17167.5 = 0$$

$$x_{\max} = \frac{686.7 + \sqrt{686.7^2 + 4(25)(17167.5)}}{50} = \frac{686.7 + \sqrt{471567 + 1716750}}{50}$$

$$x_{\max} = \frac{686.7 + 1477.6}{50} = 43.29 \text{ m}$$

**(c) Maximum deceleration:**

Maximum deceleration occurs at maximum extension where the spring force is greatest:

$$F_{\text{net}} = kx_{\max} - mg = 50 \times 43.29 - 686.7 = 2164.5 - 686.7 = 1477.8 \text{ N}$$

$$a_{\max} = \frac{F_{\text{net}}}{m} = \frac{1477.8}{70} = 21.1 \text{ m s}^{-2}$$ (upward, i.e., deceleration of $21.1 \text{ m s}^{-2}$)

---

### IT-3: Roller Coaster Loop with Friction (with Mechanics and Forces)

**Question:**

A roller coaster car of mass $500$ kg starts from rest at height $h = 30$ m above the bottom of a frictionless circular loop of radius $R = 8$ m. However, the track from the starting point to the loop entry has friction ($\mu = 0.1$). The horizontal distance from start to loop entry is $40$ m, and the track descends by $12$ m over this distance. Find the minimum speed of the car at the top of the loop and state whether the car completes the loop.

**Solution:**

**Step 1: Energy at the start:**

$$E_i = mgh = 500 \times 9.81 \times 30 = 147150 \text{ J}$$

**Step 2: Energy lost to friction on the approach track:**

The track length: the horizontal distance is $40$ m with a vertical drop of $12$ m, so the track length is:

$$L = \sqrt{40^2 + 12^2} = \sqrt{1600 + 144} = \sqrt{1744} = 41.76 \text{ m}$$

The normal force on the inclined section:

$$N = mg \cos\alpha$$

where $\cos\alpha = \frac{40}{41.76} = 0.9578$:

$$N = 500 \times 9.81 \times 0.9578 = 4696.5 \text{ N}$$

Work done against friction:

$$W_f = \mu NL = 0.1 \times 4696.5 \times 41.76 = 19610 \text{ J}$$

**Step 3: KE at loop entry (height $= 30 - 12 = 18$ m above bottom):**

$$KE_{\text{entry}} = E_i - mgh_{\text{entry}} - W_f = 147150 - 500(9.81)(18) - 19610$$

$$KE_{\text{entry}} = 147150 - 88290 - 19610 = 39250 \text{ J}$$

**Step 4: Speed at top of loop** (height $= 2R = 16$ m above bottom, loop is frictionless):

Height at top of loop $= 16$ m, height at entry $= 18$ m.

$$KE_{\text{top}} = KE_{\text{entry}} + mg(h_{\text{entry}} - h_{\text{top}})$$

$$KE_{\text{top}} = 39250 + 500 \times 9.81 \times (18 - 16) = 39250 + 9810 = 49060 \text{ J}$$

$$v_{\text{top}} = \sqrt{\frac{2 \times 49060}{500}} = \sqrt{196.24} = 14.01 \text{ m s}^{-1}$$

**Step 5: Does the car complete the loop?**

Minimum speed at top: $v_{\min} = \sqrt{gR} = \sqrt{9.81 \times 8} = \sqrt{78.48} = 8.86 \text{ m s}^{-1}$

Since $14.01 \text{ m s}^{-1} \gt 8.86 \text{ m s}^{-1}$, **the car completes the loop**.

**Key insight:** The minimum speed condition at the top of the loop requires the centripetal acceleration to be at least $g$ (so the normal force is just zero). Any higher speed means a positive normal force from the track.
