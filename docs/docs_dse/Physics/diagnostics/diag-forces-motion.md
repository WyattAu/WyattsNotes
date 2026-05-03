---
title: Forces and Motion -- Diagnostic Tests
description: "Hardest DSE forces questions: action-reaction pairs, normal force on inclined planes, connected bodies, and friction misconceptions."
slug: diag-forces-motion
hide_table_of_contents: true
---

# Forces and Motion — Diagnostic Tests

## Unit Tests

### UT-1: Action-Reaction Pair Identification on an Accelerating System

**Question:**

A book of mass $2$ kg rests on a table. The table is on the floor of a lift that is accelerating upward at $3 \text{ m s}^{-2}$. (a) Draw free-body diagrams for the book and the table separately. (b) Identify which forces form Newton's third law pairs. (c) Calculate the normal force the table exerts on the book, and the normal force the floor exerts on the table (table mass $= 8$ kg).

**Solution:**

**(a) Free-body diagrams:**

*Book:* Weight $W_b = mg = 2 \times 9.81 = 19.62$ N (downward), Normal force from table $N_{t \to b}$ (upward).

*Table:* Weight $W_t = 8 \times 9.81 = 78.48$ N (downward), Normal force from book $N_{b \to t}$ (downward) [contact force from book on table], Normal force from floor $N_{f \to t}$ (upward).

**(b) Newton's third law pairs:**

- $N_{t \to b}$ (table pushes book up) and $N_{b \to t}$ (book pushes table down) — **This is a pair.**
- $W_b$ (Earth pulls book down) and book pulls Earth up — **This is a pair.**
- $W_t$ (Earth pulls table down) and table pulls Earth up — **This is a pair.**

**Common misconception:** $N_{t \to b}$ and $W_b$ are NOT a third law pair. They act on the same body (the book) and are not equal unless $a = 0$.

**(c) For the book (accelerating upward at $3 \text{ m s}^{-2}$):**

$$N_{t \to b} - W_b = m_b a$$

$$N_{t \to b} = m_b(g + a) = 2(9.81 + 3) = 25.62 \text{ N}$$

By Newton's third law: $N_{b \to t} = 25.62$ N (downward).

For the table:

$$N_{f \to t} - W_t - N_{b \to t} = m_t a$$

$$N_{f \to t} = W_t + N_{b \to t} + m_t a = 78.48 + 25.62 + 8(3) = 78.48 + 25.62 + 24 = 128.1 \text{ N}$$

---

### UT-2: Connected Objects with Friction on a Rough Incline

**Question:**

Block A ($5$ kg) rests on a rough horizontal surface ($\mu = 0.4$). It is connected by a light inextensible string over a smooth pulley to block B ($3$ kg) hanging vertically. Find (a) the acceleration of the system, (b) the tension in the string, and (c) the force exerted on the pulley by the string.

**Solution:**

**(a) System acceleration:**

For block B (taking downward as positive):

$$m_B g - T = m_B a \quad \text{--- (1)}$$

For block A (taking rightward toward pulley as positive):

$$T - f = m_A a$$

where $f = \mu m_A g = 0.4 \times 5 \times 9.81 = 19.62$ N

$$T - 19.62 = 5a \quad \text{--- (2)}$$

Adding (1) and (2):

$$m_B g - f = (m_A + m_B)a$$

$$3(9.81) - 19.62 = 8a$$

$$29.43 - 19.62 = 8a$$

$$a = \frac{9.81}{8} = 1.226 \text{ m s}^{-2}$$

**(b) Tension:**

From equation (1):

$$T = m_B(g - a) = 3(9.81 - 1.226) = 3(8.584) = 25.75 \text{ N}$$

**(c) Force on pulley:**

The string pulls the pulley downward with tension $T$ on both sides (vertical and horizontal). These two tension forces are perpendicular.

$$F_{\text{pulley}} = \sqrt{T^2 + T^2} = T\sqrt{2} = 25.75 \times \sqrt{2} = 36.41 \text{ N}$$

The force on the pulley is directed at $45°$ below the horizontal, toward block A and block B.

---

### UT-3: Banked Curve without Friction

**Question:**

A car travels at constant speed $v$ around a banked circular curve of radius $r = 80$ m and banking angle $\theta = 20°$. There is no friction between the tyres and the road. Find the speed at which the car can negotiate the curve without slipping up or down the bank.

**Solution:**

The forces on the car are: weight $mg$ (downward) and normal force $N$ (perpendicular to the banked surface). No friction acts.

Resolving forces:

**Vertically** (perpendicular to the road surface):

$$N \cos \theta = mg$$

$$N = \frac{mg}{\cos \theta}$$

**Horizontally** (toward centre of the circle):

$$N \sin \theta = \frac{mv^2}{r}$$

Substituting $N$:

$$\frac{mg \sin \theta}{\cos \theta} = \frac{mv^2}{r}$$

$$g \tan \theta = \frac{v^2}{r}$$

$$v = \sqrt{rg \tan \theta} = \sqrt{80 \times 9.81 \times \tan 20°}$$

$$v = \sqrt{80 \times 9.81 \times 0.3640} = \sqrt{285.8} = 16.9 \text{ m s}^{-1}$$

**Key insight:** At this specific speed, the horizontal component of the normal force alone provides the required centripetal force. No friction is needed. If the car goes faster, it tends to slide up; if slower, it tends to slide down.

---

## Integration Tests

### IT-1: Multiple Connected Bodies on Inclines (with Mechanics)

**Question:**

Block A ($4$ kg) on a smooth incline of angle $30°$ is connected by a string over a smooth pulley at the top to block B ($6$ kg) on a rough incline of angle $45°$ on the other side ($\mu = 0.3$ between B and its incline). The system is released from rest. Determine the direction of motion and the acceleration.

**Solution:**

**Step 1: Calculate net driving forces for each possible direction**

*If the system moves such that A goes up the $30°$ incline and B goes down the $45°$ incline:*

Component of weight of A down the $30°$ incline: $m_A g \sin 30° = 4 \times 9.81 \times 0.5 = 19.62$ N

Component of weight of B down the $45°$ incline: $m_B g \sin 45° = 6 \times 9.81 \times 0.7071 = 41.62$ N

Friction on B (opposes B's motion, so acts up the $45°$ incline):
$$f = \mu m_B g \cos 45° = 0.3 \times 6 \times 9.81 \times 0.7071 = 12.49 \text{ N}$$

Net force driving A up / B down: $41.62 - 12.49 - 19.62 = 9.51$ N (positive, so motion in this direction)

*Check the other direction:*

If B goes up and A goes down, friction on B acts down the $45°$ incline:

Net force: $19.62 - (41.62 + 12.49) = -34.49$ N (negative, impossible)

**Direction:** A moves up the $30°$ incline, B moves down the $45°$ incline.

**Step 2: Acceleration**

For A (up the incline positive): $T - m_A g \sin 30° = m_A a$

$$T - 19.62 = 4a \quad \text{--- (1)}$$

For B (down the incline positive): $m_B g \sin 45° - T - f = m_B a$

$$41.62 - T - 12.49 = 6a$$

$$29.13 - T = 6a \quad \text{--- (2)}$$

Adding (1) and (2): $9.51 = 10a$

$$a = 0.951 \text{ m s}^{-2}$$

$$T = 19.62 + 4(0.951) = 23.42 \text{ N}$$

---

### IT-2: Tension Variation in a Whirling String (with Mechanics)

**Question:**

A light inextensible string of length $2L$ has a small mass $m$ attached at its midpoint. One end is fixed at point A and the other at point B, where A and B are on the same horizontal level separated by distance $L$. The system rotates about the vertical axis AB with angular speed $\omega$. Find the tension in each half of the string in terms of $m$, $\omega$, $g$, and $L$.

**Solution:**

Let the mass be at the midpoint M. The string forms two segments AM and BM, each of length $L$. Since AB $= L$, triangle ABM is equilateral, so the angle each string makes with the vertical is $30°$.

**Geometry check:** In the equilateral triangle, each side is $L$, and the height of the mass below AB is $L \cos 30° = \frac{L\sqrt{3}}{2}$.

By symmetry, both tensions are equal: $T_1 = T_2 = T$.

**Vertical equilibrium:**

$$2T \cos 30° = mg$$

$$2T \times \frac{\sqrt{3}}{2} = mg$$

$$T = \frac{mg}{\sqrt{3}}$$

**Horizontal (centripetal):**

The radius of circular motion is $r = L \sin 30° = \frac{L}{2}$.

$$2T \sin 30° = m\omega^2 r$$

$$2T \times \frac{1}{2} = m\omega^2 \left(\frac{L}{2}\right)$$

$$T = \frac{m\omega^2 L}{4}$$

**Equating both expressions for $T$:**

$$\frac{mg}{\sqrt{3}} = \frac{m\omega^2 L}{4}$$

$$\omega^2 = \frac{4g}{L\sqrt{3}}$$

$$\omega = \sqrt{\frac{4g}{L\sqrt{3}}}$$

And the tension:

$$T = \frac{mg}{\sqrt{3}}$$

**Key insight:** The tension simultaneously supports the weight (vertical component) and provides centripetal force (horizontal component). Both conditions must be satisfied simultaneously.

---

### IT-3: Friction on Accelerating Platform (with Energy and Work)

**Question:**

A parcel of mass $10$ kg rests on the flatbed of a truck. The coefficient of static friction between the parcel and the flatbed is $0.5$. The truck accelerates from rest uniformly. What is the shortest time in which the truck can reach a speed of $20 \text{ m s}^{-1}$ without the parcel sliding? What is the minimum stopping distance for the truck (from $20 \text{ m s}^{-1}$) without the parcel sliding?

**Solution:**

**Maximum acceleration without sliding:**

The friction force provides the acceleration for the parcel:

$$f_{\max} = \mu_s mg = m a_{\max}$$

$$a_{\max} = \mu_s g = 0.5 \times 9.81 = 4.905 \text{ m s}^{-2}$$

**(a) Minimum time to reach $20 \text{ m s}^{-1}$:**

$$v = u + at$$

$$20 = 0 + 4.905 \times t$$

$$t = \frac{20}{4.905} = 4.08 \text{ s}$$

**(b) Minimum stopping distance:**

When braking, friction acts forward on the parcel (opposing relative sliding tendency):

$$a_{\max} = 4.905 \text{ m s}^{-2}$$ (same magnitude, opposite direction)

$$v^2 = u^2 + 2as$$

$$0 = 20^2 + 2(-4.905)s$$

$$s = \frac{400}{9.81} = 40.77 \text{ m}$$

**Key insight:** The maximum frictional force limits both the maximum acceleration and the maximum deceleration. The parcel can withstand the same magnitude of acceleration in both directions since static friction adjusts to prevent relative motion.
