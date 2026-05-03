---
title: Forces and Newton's Laws — Diagnostic Tests
description: Hard diagnostic tests for forces and Newton's laws covering friction inequalities, inclined plane resolution, connected particle systems, third-law pairs, and variable forces at A-Level standard.
slug: diag-forces-and-newtons-laws
hide_table_of_contents: true
---

# Forces and Newton's Laws — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for forces and Newton's laws.

### UT-1: Friction Inequality vs Equality — The Non-Limiting Trap

**Question:**

A block of mass $8$ kg rests on a rough horizontal surface. The coefficient of friction between the block and the surface is $\mu = 0.4$. A horizontal force $P$ is applied to the block.

**(a)** Find the range of values of $P$ for which the block remains in equilibrium.

**(b)** When $P = 20$ N, find the magnitude and direction of the frictional force acting on the block.

**(c)** A student, upon seeing the value $\mu = 0.4$, immediately writes $F = \mu R = 0.4 \times 78.4 = 31.36$ N for the frictional force, regardless of the applied force $P$. Explain why this is incorrect for $P = 20$ N, and calculate the percentage by which the student overestimates the friction.

**(d)** The force $P$ is now applied at an angle of $30°$ above the horizontal. Find the maximum value of $P$ for which the block remains in equilibrium, and explain why this maximum is greater than the answer in part (a).

[Difficulty: hard. Tests the critical distinction between $F \leq \mu R$ and $F = \mu R$, requiring the student to recognise when friction is not at its limiting value, and how an angled force changes the normal reaction.]

**Solution:**

**(a)** The block remains in equilibrium as long as the applied force does not exceed the maximum static friction.

Normal reaction: $R = mg = 8 \times 9.8 = 78.4$ N.

Maximum friction: $F_{\max} = \mu R = 0.4 \times 78.4 = 31.36$ N.

For equilibrium, the friction must balance $P$: $F = P$.

Since $F \leq F_{\max} = 31.36$ N, we need $P \leq 31.36$ N.

The block remains in equilibrium for $0 \leq P \leq 31.36$ N.

**(b)** When $P = 20$ N (which is less than $31.36$ N), the block does not move. The frictional force adjusts to exactly balance the applied force:

$$F = P = 20 \text{ N}$$

The frictional force acts in the direction opposite to $P$ (i.e., opposing the tendency to move).

**(c)** The student writes $F = 31.36$ N, but the actual friction is only $20$ N. The student has assumed the block is on the point of sliding, but $P = 20 \text{ N} \lt 31.36 \text{ N}$, so the block is not even close to sliding. The friction adjusts to match the applied force.

$$\text{Percentage overestimate} = \frac{31.36 - 20}{20} \times 100\% = 56.8\%$$

**(d)** Resolving perpendicular to the surface:

$$R + P\sin 30° = mg \implies R = 78.4 - 0.5P$$

Resolving horizontally, at limiting equilibrium:

$$P\cos 30° = \mu R = 0.4(78.4 - 0.5P)$$

$$0.866P = 31.36 - 0.2P$$

$$1.066P = 31.36 \implies P = \frac{31.36}{1.066} \approx 29.42 \text{ N}$$

This is **less** than $31.36$ N, not greater. Applying the force at an angle above the horizontal reduces the normal reaction ($R = 78.4 - 0.5P \lt 78.4$), which in turn reduces the maximum friction. Although the horizontal component of $P$ is only $P\cos 30° \approx 0.866P$, the reduction in $R$ means the maximum available horizontal force is reduced overall.

---

### UT-2: Connected Particles on Rough Inclined Planes

**Question:**

Two particles $A$ (mass $5$ kg) and $B$ (mass $3$ kg) are connected by a light inextensible string passing over a smooth pulley at the top of a rough inclined plane. Particle $A$ is on the plane, which is inclined at $30°$ to the horizontal, with $\mu = 0.3$. Particle $B$ hangs freely. The string is parallel to the plane.

**(a)** Determine whether the system moves when released from rest. If it does, find the acceleration and the tension in the string.

**(b)** If the system does move, find the speed of $B$ when it has descended $1.5$ m.

**(c)** A student assumes $A$ moves up the plane and writes the equation $T - 5g\sin 30° - \mu(5g\cos 30°) = 5a$. Show that this assumption leads to $a \lt 0$, and explain what this means physically.

[Difficulty: hard. Tests the full connected-particle-on-inclined-plane problem including the initial check for whether the system moves, the correct assignment of friction direction, and interpretation of a negative acceleration.]

**Solution:**

**(a)** First, check whether the system moves by comparing the driving force with the maximum friction plus gravitational resistance.

If $B$ descends, $A$ moves up the plane:

Force trying to pull $A$ up the plane $= 3g = 29.4$ N.

Force opposing this $= 5g\sin 30° + \mu(5g\cos 30°) = 24.5 + 0.3(42.43) = 24.5 + 12.73 = 37.23$ N.

Since $29.4 \lt 37.23$, the system does **not** move with $B$ descending and $A$ ascending.

Now check if $A$ slides down the plane and $B$ ascends:

Force driving $A$ down the plane $= 5g\sin 30° = 24.5$ N.

Force opposing this (friction up the plane) $= \mu(5g\cos 30°) = 12.73$ N.

Net force driving $A$ down $= 24.5 - 12.73 = 11.77$ N.

Weight of $B = 29.4$ N, which opposes $A$'s downward motion.

Since $11.77 \lt 29.4$, $A$ does not slide down either.

**The system is in equilibrium.** The tension in the string equals the weight of $B$:

$$T = 3g = 29.4 \text{ N}$$

The friction on $A$ balances the remaining forces along the plane. With $B$ hanging and $A$ on the plane, resolving along the plane for $A$ (taking up the plane as positive):

$$T - 5g\sin 30° - F = 0 \implies 29.4 - 24.5 = F \implies F = 4.9 \text{ N}$$

Check: $F = 4.9 \text{ N} \lt \mu R = 12.73$ N. Confirmed: the block is not at limiting equilibrium.

**(b)** The system does not move, so the speed of $B$ remains zero.

**(c)** The student's equation assumes $A$ moves up the plane. With $T = 3g = 29.4$ (since the system is in equilibrium):

$$29.4 - 24.5 - 12.73 = 5a \implies -7.83 = 5a \implies a = -1.566 \text{ m/s}^2$$

The negative acceleration means the assumed direction of motion is wrong. The particle $A$ does not move up the plane; in fact, the forces are insufficient to overcome friction plus the component of gravity. The negative result signals that the system is in equilibrium (or would move in the opposite direction), and the student must reconsider the friction direction or check for equilibrium.

---

### UT-3: Newton's Third Law — Identifying Correct Action-Reaction Pairs

**Question:**

A car of mass $1200$ kg tows a trailer of mass $400$ kg along a horizontal road using a rigid tow bar. The engine provides a driving force of $2400$ N. There is a resistance of $200$ N on the car and $100$ N on the trailer.

**(a)** Find the acceleration of the system and the tension in the tow bar.

**(b)** Identify the Newton's Third Law pair for the tension in the tow bar, stating clearly the body on which each force acts.

**(c)** A student states: "The tension in the tow bar is a Newton's Third Law pair with the pull of the trailer on the car." Explain why this statement is ambiguous and potentially incorrect.

**(d)** The car now brakes with a braking force of $3000$ N (in addition to the resistances). Find the new tension in the tow bar and explain its sign.

[Difficulty: hard. Tests precise identification of Third Law pairs, a common source of error, and the effect of braking on the tension direction in connected systems.]

**Solution:**

**(a)** Treating the system as a whole (car + trailer):

$$F_{\text{net}} = 2400 - 200 - 100 = 2100 \text{ N}$$

$$a = \frac{F_{\text{net}}}{m_{\text{total}}} = \frac{2100}{1600} = 1.3125 \text{ m/s}^2$$

For the trailer alone (tension $T$ pulls it forward, resistance opposes):

$$T - 100 = 400 \times 1.3125 \implies T = 525 + 100 = 625 \text{ N}$$

Verification using the car: $2400 - 200 - T = 1200 \times 1.3125 \implies 2200 - T = 1575 \implies T = 625$ N. Consistent.

**(b)** The tension in the tow bar is a contact force exerted **by the car on the trailer** through the tow bar.

Newton's Third Law pair is:
- **Force A:** The tow bar pulls the trailer forward with force $T = 625$ N. (Acts on the **trailer**.)
- **Force B:** The trailer pulls the tow bar (and hence the car) backward with force $T = 625$ N. (Acts on the **car** via the tow bar.)

Both forces are contact forces of equal magnitude, opposite direction, and act on **different bodies**.

**(c)** The student's statement is ambiguous because "the pull of the trailer on the car" could mean either:
1. The tension in the tow bar as experienced by the car (which IS the Third Law pair) -- correct interpretation.
2. Some other force such as air resistance from the trailer or a gravitational pull -- incorrect.

More importantly, saying "the tension" refers to a single force, but the Third Law requires specifying **both** forces and the **bodies** on which they act. The correct formulation must identify two distinct forces on two distinct bodies.

**(d)** Now the braking force acts on the car (opposing motion):

$$F_{\text{net}} = 2400 - 3000 - 200 - 100 = -900 \text{ N}$$

$$a = \frac{-900}{1600} = -0.5625 \text{ m/s}^2$$

The system decelerates. For the trailer:

$$T - 100 = 400(-0.5625) \implies T = -225 + 100 = -125 \text{ N}$$

The negative tension means the tow bar is now in **compression** rather than tension. The car is decelerating more than the trailer would on its own, so the tow bar pushes the trailer backward (or equivalently, the trailer pushes forward on the car through the bar).

---

## Integration Tests

> Tests synthesis of forces and Newton's laws with other topics. Requires combining concepts from multiple units.

### IT-1: Variable Force and Impulse (with Integration)

**Question:**

A particle of mass $2$ kg moves along the positive $x$-axis. At time $t$ seconds, the force acting on the particle is $F = (3t^2 - 12t + 9)$ N in the direction of motion. When $t = 0$, the particle is at rest at the origin.

**(a)** Find the velocity of the particle at time $t$.

**(b)** Find the times at which the particle is at rest.

**(c)** Find the total distance travelled from $t = 0$ to $t = 4$.

**(d)** Find the work done by the force from $t = 0$ to $t = 4$, and verify that it equals the change in kinetic energy.

[Difficulty: hard. Combines variable force with integration for velocity, identification of turning points, distance calculation, and verification of the work-energy theorem.]

**Solution:**

**(a)** By Newton's Second Law: $F = ma$, so $a = \frac{F}{m} = \frac{3t^2 - 12t + 9}{2}$.

$$v = \int a\,dt = \int \frac{3t^2 - 12t + 9}{2}\,dt = \frac{t^3}{2} - 3t^2 + \frac{9t}{2} + C$$

Since $v(0) = 0$: $C = 0$.

$$v = \frac{t^3}{2} - 3t^2 + \frac{9t}{2} = \frac{t}{2}(t^2 - 6t + 9) = \frac{t}{2}(t - 3)^2$$

**(b)** $v = 0 \implies \frac{t}{2}(t-3)^2 = 0 \implies t = 0$ or $t = 3$.

The particle is at rest at $t = 0$ and $t = 3$ s. For $0 \lt t \lt 3$: $v \gt 0$ (the particle moves in the positive direction). For $t \gt 3$: $(t-3)^2 \gt 0$ and $t \gt 0$, so $v \gt 0$. The particle never reverses direction.

**(c)** Since the particle never reverses direction, the total distance equals the magnitude of the displacement.

$$s = \int_0^4 v\,dt = \int_0^4 \left(\frac{t^3}{2} - 3t^2 + \frac{9t}{2}\right)dt = \left[\frac{t^4}{8} - t^3 + \frac{9t^2}{4}\right]_0^4$$

$$= \frac{256}{8} - 64 + \frac{144}{4} = 32 - 64 + 36 = 4 \text{ m}$$

Total distance $= 4$ m.

**(d)** Work done by the force:

$$W = \int_0^4 F\,ds = \int_0^4 F \cdot v\,dt = \int_0^4 (3t^2 - 12t + 9)\left(\frac{t^3}{2} - 3t^2 + \frac{9t}{2}\right)dt$$

$$= \int_0^4 \frac{(3t^2 - 12t + 9)(t^3 - 6t^2 + 9t)}{2}\,dt$$

Note that $3t^2 - 12t + 9 = 3(t-1)(t-3)$ and $t^3 - 6t^2 + 9t = t(t-3)^2$.

$$W = \frac{1}{2}\int_0^4 3(t-1)(t-3) \cdot t(t-3)^2\,dt = \frac{3}{2}\int_0^4 t(t-1)(t-3)^3\,dt$$

Alternatively, use the work-energy theorem directly: $W = \Delta\mathrm{KE}$.

$v(0) = 0$ and $v(4) = \frac{4}{2}(1)^2 = 2$ m/s.

$$\Delta\mathrm{KE} = \frac{1}{2}(2)(2^2) - 0 = 4 \text{ J}$$

Therefore $W = 4$ J, consistent with the work-energy theorem.

---

### IT-2: Proving Equilibrium via Force Resolution and Moments (with Proof)

**Question:**

A uniform beam $AB$ of length $4$ m and weight $120$ N is hinged at $A$ to a vertical wall. The beam is held in a horizontal position by a light inextensible string $BC$, where $C$ is a point on the wall vertically above $A$ with $AC = 3$ m. A particle of weight $80$ N is suspended from the beam at a point $D$, where $AD = 3$ m.

**(a)** Find the tension in the string $BC$ and the magnitude and direction of the reaction at the hinge $A$.

**(b)** Prove that the system is in equilibrium by verifying all three equilibrium conditions.

**(c)** A student claims that taking moments about $B$ instead of $A$ is invalid because $B$ is not a fixed point. Explain why the student is wrong.

[Difficulty: hard. Combines force resolution with moment equilibrium on a non-trivial geometry, and requires a formal proof of equilibrium.]

**Solution:**

**(a)** First, find the geometry. $AB = 4$ m (horizontal), $AC = 3$ m (vertical), so $BC = \sqrt{3^2 + 4^2} = 5$ m (by Pythagoras).

The string makes angle $\theta$ with the horizontal where $\sin\theta = 3/5$ and $\cos\theta = 4/5$.

The perpendicular distance from $A$ to the line of action of the tension $T$ along $BC$ is:

The tension acts along $CB$ (from $B$ towards $C$). The moment arm of $T$ about $A$ is the perpendicular distance from $A$ to the line $BC$.

This equals $AB \times \sin\theta = 4 \times \frac{3}{5} = \frac{12}{5} = 2.4$ m.

Alternatively, resolve the tension into components at $B$:
- Horizontal component: $T\cos\theta = \frac{4T}{5}$ (acts to the left).
- Vertical component: $T\sin\theta = \frac{3T}{5}$ (acts upward).

Taking moments about $A$ (clockwise positive):

$$\frac{3T}{5} \times 4 - 120 \times 2 - 80 \times 3 = 0$$

$$\frac{12T}{5} = 240 + 240 = 480$$

$$T = \frac{480 \times 5}{12} = 200 \text{ N}$$

Resolving horizontally at $A$ (the hinge reaction has components $H_A$ horizontal and $V_A$ vertical):

$$H_A = T\cos\theta = 200 \times \frac{4}{5} = 160 \text{ N (to the right)}$$

Resolving vertically:

$$V_A + T\sin\theta = 120 + 80 \implies V_A + 120 = 200 \implies V_A = 80 \text{ N (upward)}$$

Magnitude of hinge reaction: $\sqrt{160^2 + 80^2} = \sqrt{25600 + 6400} = \sqrt{32000} = 80\sqrt{5} \approx 178.9$ N.

Direction: $\alpha = \arctan\!\left(\frac{80}{160}\right) = \arctan(0.5) \approx 26.6°$ above the horizontal.

**(b)** Verification of all three equilibrium conditions:

1. **$\Sigma F_x = 0$:** $H_A - T\cos\theta = 160 - 160 = 0$. Satisfied.

2. **$\Sigma F_y = 0$:** $V_A + T\sin\theta - 120 - 80 = 80 + 120 - 200 = 0$. Satisfied.

3. **$\Sigma M_A = 0$:** Already verified in part (a): the clockwise and anticlockwise moments about $A$ sum to zero.

Since all three conditions are satisfied, the system is in equilibrium.

**(c)** The principle of moments states that if a body is in equilibrium, the sum of moments about **any** point is zero. The choice of pivot is arbitrary. Taking moments about $B$ is perfectly valid and will yield the same equilibrium conditions (though it may not eliminate the unknown tension as conveniently as taking moments about $A$ does).

---

### IT-3: Forces as Vectors — Resultant and Equilibrium (with Vectors)

**Question:**

Three forces act on a particle. Force $\mathbf{F}_1 = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$ N, force $\mathbf{F}_2 = \begin{pmatrix} -2 \\ 4 \end{pmatrix}$ N, and force $\mathbf{F}_3 = \begin{pmatrix} a \\ b \end{pmatrix}$ N.

**(a)** Find the values of $a$ and $b$ for which the particle is in equilibrium.

**(b)** With the values of $a$ and $b$ from part (a), a fourth force $\mathbf{F}_4 = \begin{pmatrix} 5 \\ 2 \end{pmatrix}$ N is added. Find the magnitude and direction of the resultant force.

**(c)** The particle has mass $3$ kg. Find the initial acceleration and the velocity after $4$ seconds, assuming the resultant force from part (b) acts constantly.

[Difficulty: hard. Combines vector addition of forces with Newton's Second Law and SUVAT kinematics, requiring the student to work entirely in vector form.]

**Solution:**

**(a)** For equilibrium, the resultant force must be zero:

$$\mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \mathbf{0}$$

$$\begin{pmatrix} 3 \\ -1 \end{pmatrix} + \begin{pmatrix} -2 \\ 4 \end{pmatrix} + \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$$\begin{pmatrix} 1 + a \\ 3 + b \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$$a = -1, \quad b = -3$$

So $\mathbf{F}_3 = \begin{pmatrix} -1 \\ -3 \end{pmatrix}$ N.

**(b)** With $\mathbf{F}_4$ added:

$$\mathbf{F}_{\text{resultant}} = \mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 + \mathbf{F}_4 = \mathbf{0} + \mathbf{F}_4 = \begin{pmatrix} 5 \\ 2 \end{pmatrix} \text{ N}$$

(Since $\mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \mathbf{0}$ from part (a).)

Magnitude: $\lvert\mathbf{F}_{\text{resultant}}\rvert = \sqrt{25 + 4} = \sqrt{29} \approx 5.39$ N.

Direction: $\theta = \arctan\!\left(\frac{2}{5}\right) \approx 21.8°$ above the positive $x$-axis.

**(c)** By Newton's Second Law: $\mathbf{a} = \frac{\mathbf{F}}{m} = \frac{1}{3}\begin{pmatrix} 5 \\ 2 \end{pmatrix} = \begin{pmatrix} 5/3 \\ 2/3 \end{pmatrix}$ m/s$^2$.

The velocity after $4$ seconds (starting from rest):

$$\mathbf{v} = \mathbf{u} + \mathbf{a}t = \begin{pmatrix} 0 \\ 0 \end{pmatrix} + \begin{pmatrix} 5/3 \\ 2/3 \end{pmatrix} \times 4 = \begin{pmatrix} 20/3 \\ 8/3 \end{pmatrix} \text{ m/s}$$

Speed $= \sqrt{(20/3)^2 + (8/3)^2} = \sqrt{\frac{400 + 64}{9}} = \sqrt{\frac{464}{9}} = \frac{2\sqrt{116}}{3} \approx 7.18$ m/s.
