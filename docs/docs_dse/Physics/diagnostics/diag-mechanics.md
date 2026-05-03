---
title: Mechanics — Diagnostic Tests
description: "Hardest DSE Physics mechanics questions: advanced SUVAT selection, projectile motion independence, displacement sign conventions, and multi-stage motion."
slug: diag-mechanics
hide_table_of_contents: true
---

# Mechanics — Diagnostic Tests

## Unit Tests

### UT-1: Two-Stage Braking Problem

**Question:**

A car of mass $1500$ kg is travelling at $25 \text{ m s}^{-1}$ on a horizontal road. The driver applies the brakes with a constant braking force of $7500$ N. After $3$ s, the road surface changes to ice, reducing the braking force to $1500$ N. Find the total distance the car travels before coming to rest.

**Solution:**

**Stage 1: Braking on normal road ($t = 0$ to $t = 3$ s)**

Using Newton's second law:

$$a_1 = \frac{F}{m} = \frac{-7500}{1500} = -5 \text{ m s}^{-2}$$

Velocity after $3$ s:

$$v_1 = u + a_1 t = 25 + (-5)(3) = 10 \text{ m s}^{-1}$$

Distance in stage 1:

$$s_1 = ut + \frac{1}{2}a_1 t^2 = 25(3) + \frac{1}{2}(-5)(3)^2 = 75 - 22.5 = 52.5 \text{ m}$$

**Stage 2: Braking on ice ($v = 10 \text{ m s}^{-1}$ to $v = 0$)**

$$a_2 = \frac{-1500}{1500} = -1 \text{ m s}^{-2}$$

Using $v^2 = u^2 + 2as$:

$$0 = 10^2 + 2(-1)s_2$$

$$s_2 = \frac{100}{2} = 50 \text{ m}$$

**Total distance:**

$$s_{\text{total}} = s_1 + s_2 = 52.5 + 50 = 102.5 \text{ m}$$

**Key check:** The car is still moving when it hits ice ($v_1 = 10 \text{ m s}^{-1} \gt 0$), so stage 2 is needed.

---

### UT-2: Projectile with Elevated Launch and Target Below

**Question:**

A ball is thrown from the top of a $40$ m high cliff with an initial velocity of $18 \text{ m s}^{-1}$ at an angle of $30°$ above the horizontal. Air resistance is negligible. Find the horizontal distance from the base of the cliff where the ball strikes the ground.

**Solution:**

Resolve initial velocity:

$$u_x = 18 \cos 30° = 18 \times \frac{\sqrt{3}}{2} = 9\sqrt{3} \text{ m s}^{-1}$$

$$u_y = 18 \sin 30° = 18 \times 0.5 = 9 \text{ m s}^{-1}$$

**Vertical motion** (taking upward as positive, displacement when ball reaches ground is $s_y = -40$ m):

$$s_y = u_y t + \frac{1}{2}a_y t^2$$

$$-40 = 9t - \frac{1}{2}(9.81)t^2$$

$$4.905t^2 - 9t - 40 = 0$$

Using the quadratic formula:

$$t = \frac{9 \pm \sqrt{81 + 4(4.905)(40)}}{2(4.905)} = \frac{9 \pm \sqrt{81 + 784.8}}{9.81} = \frac{9 \pm \sqrt{865.8}}{9.81}$$

$$t = \frac{9 + 29.42}{9.81} = \frac{38.42}{9.81} = 3.92 \text{ s}$$

(taking the positive root)

**Horizontal distance:**

$$R = u_x \times t = 9\sqrt{3} \times 3.92 = 15.59 \times 3.92 = 61.1 \text{ m}$$

**Key point:** Horizontal and vertical motions are completely independent. The horizontal velocity remains constant throughout since air resistance is negligible.

---

### UT-3: Elevator with Variable Acceleration

**Question:**

A person of mass $65$ kg stands on a weighing scale inside a lift. The lift accelerates upward from rest at $2 \text{ m s}^{-2}$ for $4$ s, then travels at constant velocity for $6$ s, then decelerates at $3 \text{ m s}^{-2}$ until it stops. What is the reading on the scale during each phase?

**Solution:**

The scale reads the normal force $N$ acting on the person.

**Phase 1: Accelerating upward ($a = +2 \text{ m s}^{-2}$)**

Taking upward as positive, applying Newton's second law:

$$N - mg = ma$$

$$N = m(g + a) = 65(9.81 + 2) = 65 \times 11.81 = 767.7 \text{ N}$$

Scale reading in kg-equivalent: $\frac{767.7}{9.81} = 78.3$ kg

**Phase 2: Constant velocity ($a = 0$)**

$$N - mg = 0$$

$$N = mg = 65 \times 9.81 = 637.7 \text{ N}$$

Scale reads $65.0$ kg (normal weight).

**Phase 3: Decelerating ($a = -3 \text{ m s}^{-2}$, lift is moving up but slowing down)**

$$N - mg = ma$$

$$N = m(g + a) = 65(9.81 - 3) = 65 \times 6.81 = 442.7 \text{ N}$$

Scale reading: $\frac{442.7}{9.81} = 45.1$ kg

**Summary:** Phase 1: $767.7$ N ($78.3$ kg), Phase 2: $637.7$ N ($65.0$ kg), Phase 3: $442.7$ N ($45.1$ kg).

**Key misconception:** Many students think the normal force always equals the weight. The normal force equals the weight only when $a = 0$.

---

## Integration Tests

### IT-1: Projectile on an Inclined Plane (with Forces and Motion)

**Question:**

A block is projected up a smooth inclined plane of angle $30°$ with speed $12 \text{ m s}^{-1}$ from the bottom. Find (a) the time taken to reach the highest point, (b) the distance travelled along the incline to the highest point, and (c) the speed when the block returns to its starting position.

**Solution:**

Take the direction up the incline as positive. The component of gravitational acceleration along the incline:

$$a = -g \sin 30° = -9.81 \times 0.5 = -4.905 \text{ m s}^{-2}$$

**(a) Time to reach highest point** ($v = 0$):

$$v = u + at$$

$$0 = 12 + (-4.905)t$$

$$t = \frac{12}{4.905} = 2.45 \text{ s}$$

**(b) Distance along incline:**

$$v^2 = u^2 + 2as$$

$$0 = 12^2 + 2(-4.905)s$$

$$s = \frac{144}{9.81} = 14.68 \text{ m}$$

**(c) Speed on return** (displacement is zero, time is $2 \times 2.45 = 4.89$ s):

$$s = ut + \frac{1}{2}at^2$$

$$0 = 12(4.89) + \frac{1}{2}(-4.905)(4.89)^2$$

$$v = u + at = 12 + (-4.905)(4.89) = 12 - 24.0 = -12.0 \text{ m s}^{-1}$$

Speed $= 12.0 \text{ m s}^{-1}$.

**Key insight:** On a smooth incline, the block returns to the starting position with the same speed as it was projected (energy conservation). The acceleration is constant throughout since the incline is smooth (no friction).

---

### IT-2: Stacked Blocks with Friction (with Forces and Motion)

**Question:**

Block A (mass $4$ kg) rests on top of block B (mass $6$ kg), which rests on a smooth horizontal floor. A horizontal force of $30$ N is applied to block B. The coefficient of static friction between A and B is $0.3$, and the coefficient of kinetic friction is $0.25$. Determine whether the blocks move together or slide relative to each other, and find the acceleration of each block.

**Solution:**

**Step 1: Check if blocks move together**

Assume both blocks move together with acceleration $a$.

For the system (A + B combined):

$$F = (m_A + m_B)a$$

$$a = \frac{30}{4 + 6} = 3 \text{ m s}^{-2}$$

For block A to accelerate at $3 \text{ m s}^{-2}$, the friction force on A must provide this acceleration:

$$f = m_A \times a = 4 \times 3 = 12 \text{ N}$$

Maximum static friction:

$$f_{\max} = \mu_s m_A g = 0.3 \times 4 \times 9.81 = 11.77 \text{ N}$$

Since $12 \text{ N} \gt 11.77 \text{ N}$, the required friction exceeds the maximum static friction. **The blocks slide relative to each other.**

**Step 2: Find actual accelerations**

Kinetic friction acts between the blocks:

$$f_k = \mu_k m_A g = 0.25 \times 4 \times 9.81 = 9.81 \text{ N}$$

For block A (friction provides the only horizontal force):

$$a_A = \frac{f_k}{m_A} = \frac{9.81}{4} = 2.45 \text{ m s}^{-2}$$

For block B (applied force minus kinetic friction):

$$a_B = \frac{F - f_k}{m_B} = \frac{30 - 9.81}{6} = \frac{20.19}{6} = 3.37 \text{ m s}^{-2}$$

**Result:** Block A accelerates at $2.45 \text{ m s}^{-2}$; Block B accelerates at $3.37 \text{ m s}^{-2}$. Block B slides out from under block A.

---

### IT-3: Collision with Energy Loss Analysis (with Energy and Work)

**Question:**

Two trolleys approach each other on a horizontal frictionless track. Trolley A (mass $2$ kg) moves right at $5 \text{ m s}^{-1}$ and trolley B (mass $3$ kg) moves left at $3 \text{ m s}^{-1}$. They collide and stick together. Find (a) the common velocity after collision, (b) the kinetic energy lost, and (c) the distance the combined trolley slides on a rough surface ($\mu = 0.2$) after the collision.

**Solution:**

Taking right as positive.

**(a) Conservation of momentum:**

$$m_A u_A + m_B u_B = (m_A + m_B)v$$

$$(2)(5) + (3)(-3) = (2 + 3)v$$

$$10 - 9 = 5v$$

$$v = 0.2 \text{ m s}^{-1} \text{ (to the right)}$$

**(b) Kinetic energy lost:**

$$KE_i = \frac{1}{2}(2)(5)^2 + \frac{1}{2}(3)(3)^2 = 25 + 13.5 = 38.5 \text{ J}$$

$$KE_f = \frac{1}{2}(5)(0.2)^2 = 0.1 \text{ J}$$

$$\Delta KE = 38.5 - 0.1 = 38.4 \text{ J} \text{ (lost to deformation/heat)}$$

**(c) Distance on rough surface:**

The remaining KE is converted to work done against friction:

$$KE_f = f \times d = \mu(m_A + m_B)g \times d$$

$$0.1 = 0.2 \times 5 \times 9.81 \times d$$

$$d = \frac{0.1}{9.81} = 0.0102 \text{ m} = 1.02 \text{ cm}$$

**Key insight:** Momentum is always conserved in collisions, but kinetic energy is only conserved in elastic collisions. The massive energy loss ($38.4$ J out of $38.5$ J) shows this is a highly inelastic collision.
