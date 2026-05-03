---
title: "Paper 3 — Mechanics — Full Diagnostic Exam"
description: "Comprehensive mechanics diagnostic paper covering all 5 A-Level topics with worked solutions. Timed at 75 minutes."
slug: diag-paper-3-mechanics
hide_table_of_contents: true
---

# Paper 3 — Mechanics

**Time allowed:** 75 minutes
**Total marks:** 50
**Topics covered:** All 5 mechanics topics

---

## Instructions

Answer all questions. Calculators are permitted.
Take $g = 9.8$ m/s$^2$ unless otherwise stated.
Show all working — marks are awarded for method as well as final answer.

---

## Questions

### Q1 [10 marks] — Kinematics

A particle moves in a straight line so that its velocity $v$ m/s at time $t$ seconds ($t \geq 0$) is given by $v = 6t - t^2 - 5$.

**(a)** Find the times at which the particle is instantaneously at rest. [3 marks]

**(b)** Calculate the total distance travelled by the particle from $t = 0$ to $t = 7$. [5 marks]

**(c)** A student calculates the displacement over $[0, 7]$ by evaluating $\int_0^7 v\,dt$ and obtains a positive answer. The student then claims this integral equals the total distance. Calculate the percentage error in the student's answer. [2 marks]

### Q2 [10 marks] — Forces and Newton's Laws

A block of mass $8$ kg rests on a rough horizontal surface. The coefficient of friction between the block and the surface is $\mu = 0.4$. A horizontal force $P$ is applied to the block.

**(a)** Find the range of values of $P$ for which the block remains in equilibrium. [2 marks]

**(b)** When $P = 20$ N, find the magnitude and direction of the frictional force acting on the block. [2 marks]

**(c)** A student, upon seeing the value $\mu = 0.4$, immediately writes $F = \mu R = 0.4 \times 78.4 = 31.36$ N for the frictional force, regardless of the applied force $P$. Explain why this is incorrect for $P = 20$ N, and calculate the percentage by which the student overestimates the friction. [3 marks]

**(d)** The force $P$ is now applied at an angle of $30°$ above the horizontal. Find the maximum value of $P$ for which the block remains in equilibrium, and explain why this maximum is greater than the answer in part (a). [3 marks]

### Q3 [10 marks] — Moments

A force of $50$ N acts at one end $B$ of a uniform rod $AB$ of length $3$ m. The rod is hinged at end $A$ and held at an angle of $40°$ to the horizontal. The force acts vertically downwards.

**(a)** Find the moment of the $50$ N force about the hinge $A$. [3 marks]

**(b)** A student calculates the moment as $50 \times 3 = 150$ Nm. Explain the error and calculate the percentage overestimate. [4 marks]

**(c)** The force at $B$ is now replaced by a force of $50$ N acting perpendicular to the rod (not vertically). Find the new moment about $A$ and explain why it is larger than the answer in part (a). [3 marks]

### Q4 [10 marks] — Energy and Work

A car of mass $800$ kg travels on a level road. The engine works at constant power $40$ kW. The resistance to motion is a constant $200$ N.

**(a)** Show that the acceleration of the car is given by $a = \frac{P}{mv} - \frac{R}{m}$, where $P$ is the power, $v$ is the speed, and $R$ is the resistance. [2 marks]

**(b)** Find the maximum speed of the car. [2 marks]

**(c)** Find the acceleration when the speed is $10$ m/s, and when the speed is $100$ m/s. [2 marks]

**(d)** A student claims that "since the power is constant, the acceleration is constant." Use your answers from part (c) to refute this claim. [2 marks]

**(e)** Find the time taken for the car to accelerate from $5$ m/s to $15$ m/s, giving your answer in terms of an integral that you need not evaluate. [2 marks]

### Q5 [10 marks] — Momentum

Two particles $A$ (mass $4$ kg) and $B$ (mass $6$ kg) move towards each other along the same straight line. $A$ has speed $5$ m/s and $B$ has speed $3$ m/s. After the collision, $A$ moves in the opposite direction with speed $2$ m/s.

**(a)** Taking the direction of $A$'s initial motion as positive, apply conservation of momentum to find the velocity of $B$ after the collision. [3 marks]

**(b)** Find the coefficient of restitution for the collision. [3 marks]

**(c)** A student defines positive as the direction of $B$'s initial motion and obtains a different numerical value for $v_B$. Show that the physical velocity is the same regardless of the sign convention. [2 marks]

**(d)** Determine whether the collision is elastic, inelastic, or perfectly inelastic, and calculate the kinetic energy lost. [2 marks]

---

## Solutions

### Q1

**(a)** $v = 0 \implies 6t - t^2 - 5 = 0 \implies t^2 - 6t + 5 = 0 \implies (t-1)(t-5) = 0$.

The particle is at rest at $t = 1$ s and $t = 5$ s.

**(b)** First, determine the sign of $v$ in each interval.

For $0 \lt{} t \lt{} 1$: test $t = 0.5$, $v = 3 - 0.25 - 5 = -2.25 \lt{} 0$ (moving in negative direction).

For $1 \lt{} t \lt{} 5$: test $t = 3$, $v = 18 - 9 - 5 = 4 \gt{} 0$ (moving in positive direction).

For $t \gt{} 5$: test $t = 6$, $v = 36 - 36 - 5 = -5 \lt{} 0$ (moving in negative direction).

The particle reverses direction at $t = 1$ and $t = 5$. Total distance requires integrating $\lvert v \rvert$, which means splitting at the turning points and taking the magnitude of each segment.

$$s(t) = \int v\,dt = \int (6t - t^2 - 5)\,dt = 3t^2 - \frac{t^3}{3} - 5t + C$$

With $s(0) = 0$: $C = 0$, so $s(t) = 3t^2 - \frac{t^3}{3} - 5t$.

$s(1) = 3 - \frac{1}{3} - 5 = -\frac{7}{3}$ m.

$s(5) = 75 - \frac{125}{3} - 25 = 50 - \frac{125}{3} = \frac{150 - 125}{3} = \frac{25}{3}$ m.

$s(7) = 147 - \frac{343}{3} - 35 = 112 - \frac{343}{3} = \frac{336 - 343}{3} = -\frac{7}{3}$ m.

$$\text{Distance} = \lvert s(1) - s(0) \rvert + \lvert s(5) - s(1) \rvert + \lvert s(7) - s(5) \rvert$$

$$= \left\lvert -\frac{7}{3} \right\rvert + \left\lvert \frac{25}{3} - \left(-\frac{7}{3}\right) \right\rvert + \left\lvert -\frac{7}{3} - \frac{25}{3} \right\rvert$$

$$= \frac{7}{3} + \frac{32}{3} + \frac{32}{3} = \frac{71}{3} \approx 23.67 \text{ m}$$

**(c)** The student's displacement answer:

$$\text{Displacement} = s(7) - s(0) = -\frac{7}{3} \approx -2.33 \text{ m}$$

The student claims the distance is $2.33$ m (taking the magnitude). Actual distance is $\frac{71}{3} \approx 23.67$ m.

$$\text{Percentage error} = \frac{\lvert \frac{71}{3} - \frac{7}{3} \rvert}{\frac{71}{3}} \times 100\% = \frac{64}{71} \times 100\% \approx 90.1\%$$

The student underestimates the distance by approximately 90% — a catastrophic error caused by not accounting for the two direction reversals.

### Q2

**(a)** The block remains in equilibrium as long as the applied force does not exceed the maximum static friction.

Normal reaction: $R = mg = 8 \times 9.8 = 78.4$ N.

Maximum friction: $F_{\max} = \mu R = 0.4 \times 78.4 = 31.36$ N.

For equilibrium, the friction must balance $P$: $F = P$.

Since $F \leq F_{\max} = 31.36$ N, we need $P \leq 31.36$ N.

The block remains in equilibrium for $0 \leq P \leq 31.36$ N.

**(b)** When $P = 20$ N (which is less than $31.36$ N), the block does not move. The frictional force adjusts to exactly balance the applied force:

$$F = P = 20 \text{ N}$$

The frictional force acts in the direction opposite to $P$ (i.e., opposing the tendency to move).

**(c)** The student writes $F = 31.36$ N, but the actual friction is only $20$ N. The student has assumed the block is on the point of sliding, but $20 \lt{} 31.36$ N, so the block is not even close to sliding. The friction adjusts to match the applied force.

$$\text{Percentage overestimate} = \frac{31.36 - 20}{20} \times 100\% = 56.8\%$$

**(d)** Resolving perpendicular to the surface:

$$R + P\sin 30° = mg \implies R = 78.4 - 0.5P$$

Resolving horizontally, at limiting equilibrium:

$$P\cos 30° = \mu R = 0.4(78.4 - 0.5P)$$

$$0.866P = 31.36 - 0.2P$$

$$1.066P = 31.36 \implies P = \frac{31.36}{1.066} \approx 29.42 \text{ N}$$

This is **less** than $31.36$ N, not greater. Applying the force at an angle above the horizontal reduces the normal reaction ($R = 78.4 - 0.5P \lt{} 78.4$), which in turn reduces the maximum friction. Although the horizontal component of $P$ is only $P\cos 30° \approx 0.866P$, the reduction in $R$ means the maximum available horizontal force is reduced overall.

### Q3

**(a)** The moment of a force about a point equals the force multiplied by the **perpendicular distance** from the point to the line of action of the force.

The force acts vertically downwards at $B$. The perpendicular distance from $A$ to the vertical line through $B$ is the horizontal distance from $A$ to $B$:

$$d = AB \times \cos 40° = 3\cos 40° \approx 2.298 \text{ m}$$

$$\text{Moment} = F \times d = 50 \times 3\cos 40° = 150\cos 40° \approx 114.9 \text{ Nm}$$

**(b)** The student used the distance $AB = 3$ m instead of the perpendicular distance $3\cos 40° \approx 2.298$ m. The moment is $F \times d_{\perp}$, not $F \times d_{\text{along rod}}$.

$$\text{Student's answer} = 150 \text{ Nm}$$

$$\text{Correct answer} = 150\cos 40° \approx 114.9 \text{ Nm}$$

$$\text{Percentage overestimate} = \frac{150 - 150\cos 40°}{150\cos 40°} \times 100\% = \frac{1 - \cos 40°}{\cos 40°} \times 100\% = \left(\frac{1}{\cos 40°} - 1\right) \times 100\% \approx 30.5\%$$

**(c)** If the $50$ N force acts perpendicular to the rod at $B$, the perpendicular distance from $A$ to the line of action is simply the length of the rod:

$$\text{Moment} = 50 \times 3 = 150 \text{ Nm}$$

This is larger because the perpendicular distance equals the full length of the rod ($3$ m), whereas in part (a) the perpendicular distance was only $3\cos 40° \approx 2.298$ m. A force applied perpendicular to a rod always produces the maximum possible moment for a given force magnitude and application point.

### Q4

**(a)** The driving force at speed $v$ is $F = \frac{P}{v}$ (from $P = Fv$).

Net force $= F - R = \frac{P}{v} - R$.

By Newton's Second Law: $ma = \frac{P}{v} - R$.

$$a = \frac{P}{mv} - \frac{R}{m} \quad \blacksquare$$

**(b)** At maximum speed, $a = 0$:

$$\frac{P}{v_{\max}} = R \implies v_{\max} = \frac{P}{R} = \frac{40000}{200} = 200 \text{ m/s}$$

**(c)** At $v = 10$ m/s:

$$a = \frac{40000}{800 \times 10} - \frac{200}{800} = 5 - 0.25 = 4.75 \text{ m/s}^2$$

At $v = 100$ m/s:

$$a = \frac{40000}{800 \times 100} - \frac{200}{800} = 0.5 - 0.25 = 0.25 \text{ m/s}^2$$

**(d)** The acceleration at $10$ m/s is $4.75$ m/s$^2$ and at $100$ m/s is $0.25$ m/s$^2$. The acceleration decreases by a factor of 19 as the speed increases by a factor of 10. Constant power does not imply constant acceleration; in fact, the acceleration decreases hyperbolically with speed.

**(e)** From $a = \frac{dv}{dt} = \frac{P}{mv} - \frac{R}{m}$:

$$dt = \frac{dv}{\frac{P}{mv} - \frac{R}{m}} = \frac{mv\,dv}{P - Rv}$$

$$t = \int_{5}^{15} \frac{mv}{P - Rv}\,dv = 800\int_{5}^{15} \frac{v}{40000 - 200v}\,dv$$

Let $u = 40000 - 200v$, $du = -200\,dv$, $dv = -\frac{du}{200}$, $v = \frac{40000 - u}{200}$:

$$t = 800\int \frac{(40000 - u)/200}{u} \cdot \left(-\frac{du}{200}\right) = 800 \times \frac{-1}{40000}\int \frac{40000 - u}{u}\,du$$

$$= -\frac{1}{50}\int \left(\frac{40000}{u} - 1\right)du = -\frac{1}{50}[40000\ln u - u]$$

Evaluating from $v = 5$ ($u = 39000$) to $v = 15$ ($u = 37000$):

$$t = -\frac{1}{50}\left[(40000\ln 37000 - 37000) - (40000\ln 39000 - 39000)\right]$$

$$= \frac{1}{50}\left[40000\ln\!\left(\frac{39000}{37000}\right) + 2000\right]$$

$$= 800\ln\!\left(\frac{39}{37}\right) + 40 \approx 800(0.05263) + 40 \approx 42.1 + 40 = 82.1 \text{ s}$$

### Q5

**(a)** Positive direction = $A$'s initial motion (to the right).

Initial momenta: $p_A = 4 \times 5 = 20$ kg m/s, $p_B = 6 \times (-3) = -18$ kg m/s.

Total initial momentum $= 20 + (-18) = 2$ kg m/s.

After collision: $p_A' = 4 \times (-2) = -8$ kg m/s.

By conservation: $2 = -8 + 6v_B \implies 6v_B = 10 \implies v_B = \frac{5}{3} \approx 1.67$ m/s.

$B$ moves in the positive direction (the same direction as $A$'s initial motion) at $\frac{5}{3}$ m/s.

**(b)** Coefficient of restitution:

$$e = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}$$

Relative speed of approach $= 5 - (-3) = 8$ m/s.

Relative speed of separation $= v_B - v_A = \frac{5}{3} - (-2) = \frac{5}{3} + 2 = \frac{11}{3}$ m/s.

$$e = \frac{11/3}{8} = \frac{11}{24} \approx 0.458$$

**(c)** With positive = $B$'s initial motion (to the left):

$u_A = -5$ m/s, $u_B = 3$ m/s.

Total initial momentum $= 4(-5) + 6(3) = -20 + 18 = -2$ kg m/s.

After collision: $v_A = 2$ m/s (moves in $B$'s initial direction).

Conservation: $-2 = 4(2) + 6v_B \implies -2 = 8 + 6v_B \implies 6v_B = -10 \implies v_B = -\frac{5}{3}$ m/s.

The negative sign means $B$ moves in the opposite direction to the defined positive, i.e., in $A$'s initial direction. This is the same physical velocity as $\frac{5}{3}$ m/s in $A$'s initial direction, confirming the result is convention-independent.

**(d)** Since $e = \frac{11}{24} \approx 0.458$ and $0 \lt{} e \lt{} 1$, the collision is **inelastic**.

$$\text{KE}_{\text{before}} = \frac{1}{2}(4)(25) + \frac{1}{2}(6)(9) = 50 + 27 = 77 \text{ J}$$

$$\text{KE}_{\text{after}} = \frac{1}{2}(4)(4) + \frac{1}{2}(6)\!\left(\frac{25}{9}\right) = 8 + \frac{75}{9} = 8 + \frac{25}{3} = \frac{49}{3} \approx 16.33 \text{ J}$$

$$\Delta\text{KE} = 77 - \frac{49}{3} = \frac{231 - 49}{3} = \frac{182}{3} \approx 60.67 \text{ J lost}$$

---

## Marking Guide

| Question | Topic | Marks | Key Skills Tested |
|----------|-------|------:|-------------------|
| Q1 | Kinematics | 10 | Displacement vs distance, direction changes from $v = 0$, splitting integrals, percentage error |
| Q2 | Forces and Newton's Laws | 10 | Static friction inequality $F \leq \mu R$, non-limiting friction, angled force and normal reaction |
| Q3 | Moments | 10 | Perpendicular distance vs distance to pivot, trigonometric moments, percentage error analysis |
| Q4 | Energy and Work | 10 | $P = Fv$ derivation, maximum speed, decreasing acceleration at constant power, integration for time |
| Q5 | Momentum | 10 | Sign convention consistency, conservation of momentum, coefficient of restitution, energy classification |
| **Total** | | **50** | |
