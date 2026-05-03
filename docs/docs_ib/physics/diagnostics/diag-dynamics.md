---
title: Dynamics — Diagnostic Tests
description: Hardest IB Physics dynamics diagnostic tests covering Newton's 3rd law pairs, limiting friction, connected objects on inclines, and multi-body equilibrium with torques.
slug: diag-dynamics
hide_table_of_contents: true
---

# Dynamics — Diagnostic Tests

## Unit Tests

### UT-1: Newton's Third Law Pair Identification

**Question:**

A book of mass $1.5\,\text{kg}$ rests on a horizontal table which itself rests on the floor. A second book of mass $2.0\,\text{kg}$ is placed on top of the first book.

(a) List all the forces acting on the first book (mass $1.5\,\text{kg}$), identifying the body that exerts each force.

(b) For each force you listed in (a), state the corresponding Newton's third law pair, identifying both the body that experiences the pair force and the body that exerts it.

(c) The table is now tilted so that it makes an angle of $30^\circ$ with the horizontal. Neither book slides. Explain how the normal reaction force on the $1.5\,\text{kg}$ book changes and whether any new forces appear.

**Solution:**

(a) Forces on the $1.5\,\text{kg}$ book:
1. **Weight** $W_1 = 1.5g = 14.7\,\text{N}$, acting vertically downward. Exerted by the Earth.
2. **Normal reaction** $R$, acting vertically upward. Exerted by the table.
3. **Contact force** $C$, acting vertically downward. Exerted by the $2.0\,\text{kg}$ book (the second book presses down on the first).

(b) Newton's third law pairs:

| Force on $1.5\,\text{kg}$ book | Pair force (on other body) |
|---|---|
| Weight: Earth pulls $1.5\,\text{kg}$ book down ($14.7\,\text{N}$) | The $1.5\,\text{kg}$ book pulls the Earth upward ($14.7\,\text{N}$) |
| Normal reaction: table pushes $1.5\,\text{kg}$ book up ($R$) | The $1.5\,\text{kg}$ book pushes the table downward ($R$) |
| Contact: $2.0\,\text{kg}$ book pushes $1.5\,\text{kg}$ book down ($C$) | The $1.5\,\text{kg}$ book pushes the $2.0\,\text{kg}$ book upward ($C$) |

Common misconception: the weight of the $2.0\,\text{kg}$ book ($19.6\,\text{N}$) is NOT a force on the $1.5\,\text{kg}$ book. The weight acts on the $2.0\,\text{kg}$ book itself. The contact force $C = 19.6\,\text{N}$ acts on the $1.5\,\text{kg}$ book, and its third law pair acts on the $2.0\,\text{kg}$ book.

For equilibrium: $R = W_1 + C = 14.7 + 19.6 = 34.3\,\text{N}$.

(c) When the table is tilted at $30^\circ$:

The normal reaction force from the table now acts perpendicular to the table surface. It is $R = (m_1 + m_2)g\cos 30^\circ = 3.5 \times 9.81 \times 0.866 = 29.7\,\text{N}$.

A **frictional force** $f$ appears along the surface of the table, preventing the books from sliding. For the two books as a combined system: $f = (m_1 + m_2)g\sin 30^\circ = 3.5 \times 9.81 \times 0.5 = 17.2\,\text{N}$.

The $1.5\,\text{kg}$ book also experiences a contact force from the $2.0\,\text{kg}$ book that has both a normal component (perpendicular to the surface) and a frictional component (parallel to the surface, preventing relative motion).

---

### UT-2: Limiting Friction on an Inclined Plane with Applied Force

**Question:**

A block of mass $5.0\,\text{kg}$ rests on a rough plane inclined at $35^\circ$ to the horizontal. The coefficient of static friction between the block and the plane is $\mu_s = 0.45$, and the coefficient of kinetic friction is $\mu_k = 0.35$.

(a) A horizontal force $P$ is applied to the block, pushing it up the slope. Calculate the minimum value of $P$ required to keep the block from sliding down the slope.

(b) Calculate the minimum value of $P$ required to make the block slide up the slope.

(c) If $P = 45\,\text{N}$ is applied, determine whether the block moves, and if so, calculate its acceleration.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

Resolving the applied horizontal force $P$ into components parallel and perpendicular to the slope:
- Parallel to slope (up): $P\cos 35^\circ$
- Perpendicular to slope (into surface): $P\sin 35^\circ$

Weight components:
- Parallel to slope (down): $mg\sin 35^\circ$
- Perpendicular to slope (into surface): $mg\cos 35^\circ$

Normal reaction: $R = mg\cos 35^\circ + P\sin 35^\circ$

Maximum static friction: $F_{\max} = \mu_s R = \mu_s(mg\cos 35^\circ + P\sin 35^\circ)$

(a) Block on the verge of sliding down (friction acts up the slope):

$$P\cos 35^\circ + F_{\max} = mg\sin 35^\circ$$

$$P\cos 35^\circ + 0.45(mg\cos 35^\circ + P\sin 35^\circ) = mg\sin 35^\circ$$

$$P(\cos 35^\circ + 0.45\sin 35^\circ) = mg\sin 35^\circ - 0.45 \times mg\cos 35^\circ$$

$$P(0.8192 + 0.2582) = 5.0 \times 9.81(0.5736 - 0.45 \times 0.8192)$$

$$P(1.0774) = 49.05(0.5736 - 0.3686) = 49.05 \times 0.2050 = 10.06$$

$$P = \frac{10.06}{1.0774} = 9.34\,\text{N}$$

(b) Block on the verge of sliding up (friction acts down the slope):

$$P\cos 35^\circ = mg\sin 35^\circ + F_{\max}$$

$$P\cos 35^\circ = mg\sin 35^\circ + 0.45(mg\cos 35^\circ + P\sin 35^\circ)$$

$$P(\cos 35^\circ - 0.45\sin 35^\circ) = mg\sin 35^\circ + 0.45 \times mg\cos 35^\circ$$

$$P(0.8192 - 0.2582) = 49.05(0.5736 + 0.3686) = 49.05 \times 0.9422 = 46.22$$

$$P = \frac{46.22}{0.5610} = 82.4\,\text{N}$$

(c) With $P = 45\,\text{N}$:

Since $9.34\,\text{N} \lt 45\,\text{N} \lt 82.4\,\text{N}$, the block does **not** slide. The static friction adjusts to maintain equilibrium.

$$f = mg\sin 35^\circ - P\cos 35^\circ = 49.05 \times 0.5736 - 45 \times 0.8192 = 28.14 - 36.86 = -8.72\,\text{N}$$

The negative sign means friction acts down the slope (preventing the block from being pushed up). The magnitude $8.72\,\text{N}$ is less than $F_{\max}$, confirming the block does not move.

---

### UT-3: Connected Objects with Different Frictional Surfaces

**Question:**

Two blocks, $A$ ($4.0\,\text{kg}$) and $B$ ($6.0\,\text{kg}$), are connected by a light inextensible string. Block $A$ rests on a rough horizontal surface ($\mu_A = 0.30$) and block $B$ rests on a different rough horizontal surface ($\mu_B = 0.50$). The surfaces meet at a corner, with the string running over a smooth pulley at the corner so that the blocks can move along their respective surfaces.

A horizontal force $F = 40\,\text{N}$ is applied to block $B$, pulling it away from the pulley.

(a) Calculate the acceleration of the system.

(b) Calculate the tension in the string.

(c) The force $F$ is now removed and block $B$ is given a push so that the system moves with block $B$ moving towards the pulley. Calculate the deceleration of the system.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Friction on $A$: $f_A = \mu_A m_A g = 0.30 \times 4.0 \times 9.81 = 11.77\,\text{N}$ (opposing motion, towards pulley)

Friction on $B$: $f_B = \mu_B m_B g = 0.50 \times 6.0 \times 9.81 = 29.43\,\text{N}$ (opposing motion, towards pulley)

For $B$ (positive direction = away from pulley):

$$F - T - f_B = m_B a$$

$$40 - T - 29.43 = 6.0a$$

$$10.57 - T = 6.0a \quad \text{--- (1)}$$

For $A$ (positive direction = towards pulley):

$$T - f_A = m_A a$$

$$T - 11.77 = 4.0a \quad \text{--- (2)}$$

Adding (1) and (2):

$$10.57 - 11.77 = 10.0a$$

$$a = \frac{-1.20}{10.0} = -0.120\,\text{m}\,\text{s}^{-2}$$

Since the acceleration is negative, the system does **not** accelerate in the direction of the applied force. The applied force of $40\,\text{N}$ is insufficient to overcome the total friction of $11.77 + 29.43 = 41.2\,\text{N}$.

The system remains at rest, and the static friction on each block adjusts to balance the forces.

(b) Since the system is at rest, $a = 0$.

From equation (2): $T = f_A = 11.77\,\text{N}$

From equation (1): $T = 10.57\,\text{N}$

This contradiction shows the static friction forces adjust. The actual tension is between these values. The block $B$ has static friction less than kinetic, so:

$T = 40 - 29.43 = 10.57\,\text{N}$ (from block $B$'s equation)

Check block $A$: $T = 10.57\,\text{N}$, $f_A = \mu_s \times 4.0 \times 9.81 = 11.77\,\text{N}$. Since $T \lt f_A^{\max}$, block $A$ does not move. So $a = 0$ for block $A$ and the system does not move.

(c) When block $B$ is pushed towards the pulley (kinetic friction now applies):

For $B$ (positive direction = towards pulley):

$$-T - f_B = m_B a$$

$$-T - 29.43 = 6.0a \quad \text{--- (3)}$$

For $A$ (positive direction = towards pulley, so $A$ is pulled):

$$T - f_A = m_A a$$

$$T - 11.77 = 4.0a \quad \text{--- (4)}$$

Adding (3) and (4):

$$-29.43 - 11.77 = 10.0a$$

$$a = \frac{-41.20}{10.0} = -4.12\,\text{m}\,\text{s}^{-2}$$

The deceleration is $4.12\,\text{m}\,\text{s}^{-2}$ (opposing the direction of motion towards the pulley).

## Integration Tests

### IT-1: Block on Inclined Plane with Spring (with Energy)

**Question:**

A block of mass $2.0\,\text{kg}$ is placed on a rough inclined plane at angle $\theta = 40^\circ$ to the horizontal. The coefficient of kinetic friction is $\mu_k = 0.25$. A spring of spring constant $k = 200\,\text{N}\,\text{m}^{-1}$ is attached to the bottom of the incline and to the block. The spring is initially at its natural length.

The block is released from rest $0.80\,\text{m}$ down the slope from the spring's natural length position (i.e. the spring is compressed as the block slides down).

(a) Calculate the speed of the block at the instant the spring reaches its natural length (block has moved $0.80\,\text{m}$).

(b) Calculate the maximum distance the block travels beyond the spring's natural length before coming to rest.

(c) Calculate the total energy dissipated by friction during one complete oscillation (from release to the block returning to its starting position).

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Using energy conservation. As the block moves $0.80\,\text{m}$ up the slope:

Energy lost by gravity: $mg \times 0.80 \times \sin 40^\circ = 2.0 \times 9.81 \times 0.80 \times 0.6428 = 10.09\,\text{J}$

Energy stored in spring (released): $\frac{1}{2}kx^2 = \frac{1}{2} \times 200 \times 0.80^2 = 64.0\,\text{J}$

Work done against friction: $f \times 0.80 = \mu_k mg\cos 40^\circ \times 0.80 = 0.25 \times 2.0 \times 9.81 \times \cos 40^\circ \times 0.80 = 0.25 \times 2.0 \times 9.81 \times 0.7660 \times 0.80 = 3.00\,\text{J}$

Net energy to kinetic energy:

$$\frac{1}{2}mv^2 = 64.0 + 10.09 - 3.00 = 71.09\,\text{J}$$

$$v = \sqrt{\frac{2 \times 71.09}{2.0}} = \sqrt{71.09} = 8.43\,\text{m}\,\text{s}^{-1}$$

(b) Beyond the natural length, the spring is now stretched. Let the block travel a further distance $d$ up the slope before stopping.

Energy balance from the natural length position:

$$\frac{1}{2}mv^2 = \frac{1}{2}kd^2 + mgd\sin 40^\circ + \mu_k mg\cos 40^\circ \times d$$

$$71.09 = 100d^2 + 2.0 \times 9.81 \times 0.6428d + 0.25 \times 2.0 \times 9.81 \times 0.7660d$$

$$71.09 = 100d^2 + 12.61d + 3.76d$$

$$100d^2 + 16.37d - 71.09 = 0$$

$$d = \frac{-16.37 + \sqrt{16.37^2 + 4 \times 100 \times 71.09}}{200}$$

$$d = \frac{-16.37 + \sqrt{267.98 + 28436}}{200} = \frac{-16.37 + \sqrt{28704}}{200} = \frac{-16.37 + 169.42}{200}$$

$$d = \frac{153.05}{200} = 0.765\,\text{m}$$

(c) The total distance travelled in one complete oscillation is $0.80 + 0.765 + 0.765 + 0.80 = 3.13\,\text{m}$ (down, up beyond, back, and the block does not return to the original compression because of energy loss -- but for one full return we compute the total frictional dissipation).

Actually, for one complete oscillation from start to return: the block travels $0.80\,\text{m}$ up (spring decompresses), then $0.765\,\text{m}$ up (spring stretches), then $0.765\,\text{m}$ back down, then the spring pulls it the remaining $0.80\,\text{m}$ back down (but with less compression). The block does not return to its original position.

Total distance for the outward journey and return to natural length: $0.80 + 0.765 + 0.765 = 2.33\,\text{m}$.

Energy dissipated by friction $= f \times 2.33 = 0.25 \times 2.0 \times 9.81 \times 0.7660 \times 2.33 = 3.76 \times 2.33 = 8.76\,\text{J}$.

---

### IT-2: Two-Body System with Pulley on an Incline (with Kinematics)

**Question:**

Block $A$ of mass $8.0\,\text{kg}$ rests on a rough inclined plane at $30^\circ$ to the horizontal ($\mu = 0.20$). Block $B$ of mass $3.0\,\text{kg}$ hangs freely, connected to $A$ by a light inextensible string over a smooth pulley at the top of the incline. The system is released from rest.

(a) Calculate the acceleration of the system and the tension in the string.

(b) Block $B$ hits the ground after travelling $1.5\,\text{m}$. Calculate the speed of block $A$ at this instant.

(c) After $B$ hits the ground, block $A$ continues moving up the incline. Calculate the additional distance $A$ travels before coming to rest, and determine whether it then slides back down.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Assume $B$ moves down and $A$ moves up the incline.

For $B$: $m_B g - T = m_B a$

$$3.0 \times 9.81 - T = 3.0a \Rightarrow 29.43 - T = 3.0a \quad \text{--- (1)}$$

For $A$: $T - m_A g\sin 30^\circ - \mu m_A g\cos 30^\circ = m_A a$

$$T - 8.0 \times 9.81 \times 0.5 - 0.20 \times 8.0 \times 9.81 \times 0.866 = 8.0a$$

$$T - 39.24 - 13.61 = 8.0a$$

$$T - 52.85 = 8.0a \quad \text{--- (2)}$$

Adding (1) and (2):

$$29.43 - 52.85 = 11.0a$$

$$a = \frac{-23.42}{11.0} = -2.13\,\text{m}\,\text{s}^{-2}$$

Since $a$ is negative, the assumption that $B$ moves down is wrong. The system moves with $A$ sliding **down** the incline and $B$ being pulled **up**.

Re-solving with $A$ moving down:

For $B$ (upward positive): $T - m_B g = m_B a$

$$T - 29.43 = 3.0a \quad \text{--- (3)}$$

For $A$ (down the incline positive): $m_A g\sin 30^\circ - T - \mu m_A g\cos 30^\circ = m_A a$

$$39.24 - T - 13.61 = 8.0a$$

$$25.63 - T = 8.0a \quad \text{--- (4)}$$

Adding (3) and (4):

$$25.63 - 29.43 = 11.0a$$

$$a = \frac{-3.80}{11.0} = -0.345\,\text{m}\,\text{s}^{-2}$$

Still negative, meaning the system does not move. The static friction is sufficient to hold the system in equilibrium.

Checking: without $B$, $A$ alone would require $mg\sin 30^\circ = 39.24\,\text{N}$ to start sliding, while maximum static friction $= 0.20 \times 8.0 \times 9.81 \times 0.866 = 13.61\,\text{N}$. So $A$ would slide down without $B$. But $B$ pulls back with $29.43\,\text{N}$.

Net force down the slope without friction: $39.24 - 29.43 = 9.81\,\text{N}$. Since $9.81\,\text{N} \gt 13.61\,\text{N}$... wait, $9.81 \lt 13.61$. So the system is indeed in equilibrium.

The system does not move. $a = 0$, $T = 29.43\,\text{N}$.

(b) Since the system is in equilibrium, block $B$ never hits the ground. The question setup is a trap: the static friction is sufficient to hold the entire system at rest.

(c) Not applicable -- the system does not move.

---

### IT-3: Multiple Forces on a Suspended Object (with Kinematics)

**Question:**

A helicopter of mass $2500\,\text{kg}$ is rising vertically. At time $t = 0$, it is ascending at $5.0\,\text{m}\,\text{s}^{-1}$ at a height of $50\,\text{m}$ above the ground. The upward thrust from the rotors is $32000\,\text{N}$ and the constant air resistance (drag) is $2500\,\text{N}$.

At $t = 8.0\,\text{s}$, the engine fails and the thrust drops to zero instantly. The drag remains proportional to speed: $F_d = 500v\,\text{N}$ where $v$ is in $\text{m}\,\text{s}^{-1}$.

(a) Calculate the height and speed of the helicopter at $t = 8.0\,\text{s}$.

(b) Determine whether the helicopter reaches a terminal velocity after engine failure, and if so, calculate it.

(c) The pilot activates an emergency parachute at $t = 8.0\,\text{s}$ which provides an additional constant upward force of $18000\,\text{N}$. Determine whether the helicopter lands safely (i.e. reaches the ground with speed less than $6.0\,\text{m}\,\text{s}^{-1}$).

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Before engine failure ($0 \le t \le 8.0\,\text{s}$):

Net upward force: $F_{\text{net}} = 32000 - 2500 - 2500 \times 9.81 = 32000 - 2500 - 24525 = 4975\,\text{N}$

Acceleration: $a = F_{\text{net}}/m = 4975/2500 = 1.99\,\text{m}\,\text{s}^{-2}$

Speed at $t = 8.0\,\text{s}$: $v = 5.0 + 1.99 \times 8.0 = 5.0 + 15.92 = 20.9\,\text{m}\,\text{s}^{-1}$

Height at $t = 8.0\,\text{s}$: $h = 50 + 5.0 \times 8.0 + \frac{1}{2} \times 1.99 \times 64 = 50 + 40 + 63.7 = 153.7\,\text{m}$

(b) After engine failure without parachute:

Net force (taking down as positive): $mg - F_d = 2500 \times 9.81 - 500v$

Terminal velocity when $F_{\text{net}} = 0$:

$$2500 \times 9.81 = 500v_t$$

$$v_t = \frac{24525}{500} = 49.1\,\text{m}\,\text{s}^{-1}$$

Since the helicopter is moving upward at $20.9\,\text{m}\,\text{s}^{-1}$ when the engine fails, it first decelerates, stops, then accelerates downward. It approaches terminal velocity of $49.1\,\text{m}\,\text{s}^{-1}$ as it falls.

(c) With the parachute providing $18000\,\text{N}$ upward:

Net downward force (taking down as positive): $mg - 18000 - 500v = 24525 - 18000 - 500v = 6525 - 500v$

Terminal velocity: $6525 = 500v_t \Rightarrow v_t = 13.1\,\text{m}\,\text{s}^{-1}$

This exceeds the safe landing speed of $6.0\,\text{m}\,\text{s}^{-1}$.

The helicopter is at $153.7\,\text{m}$ moving upward at $20.9\,\text{m}\,\text{s}^{-1}$. The parachute drag $F_d = 500v$ is speed-dependent, so the landing speed depends on the full dynamics.

At terminal velocity $v_t = 13.1\,\text{m}\,\text{s}^{-1}$ (downward), the helicopter hits the ground at approximately $13.1\,\text{m}\,\text{s}^{-1}$, which is above the $6.0\,\text{m}\,\text{s}^{-1}$ safety threshold. The helicopter does **not** land safely.
