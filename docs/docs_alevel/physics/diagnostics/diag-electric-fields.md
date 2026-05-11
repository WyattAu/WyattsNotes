---
title: "Electric Fields -- Diagnostic Tests"
description: Diagnostic tests for Coulomb's law, electric field strength, electric potential, and equipotentials at maximum A-Level Physics difficulty.
slug: diag-electric-fields
hide_table_of_contents: true
---

# Electric Fields — Diagnostic Tests

## Unit Tests

### UT-1: Electric Field of a Charged Ring on the Axis

**Question:**

A thin ring of radius $a = 0.10\,\text{m}$ carries a total charge $Q = 5.0\,\text{nC}$ uniformly distributed. A point $P$ lies on the axis of the ring at distance $x = 0.15\,\text{m}$ from the centre.

(a) Derive an expression for the electric field strength at point $P$ on the axis of the ring.

(b) Calculate the electric field strength at $P$.

(c) Calculate the distance from the centre at which the electric field on the axis is maximum.

Take $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{F}\,\text{m}^{-1}$.

**Solution:**

(a) Consider a small element of charge $\delta Q$ on the ring. The field at $P$ due to this element has magnitude:

$$\delta E = \frac{1}{4\pi\varepsilon_0}\frac{\delta Q}{(a^2 + x^2)}$$

By symmetry, the components perpendicular to the axis cancel for all pairs of diametrically opposite elements. Only the axial component survives:

$$\delta E_x = \delta E \cos\theta = \delta E \cdot \frac{x}{\sqrt{a^2 + x^2}} = \frac{1}{4\pi\varepsilon_0}\frac{x\,\delta Q}{(a^2 + x^2)^{3/2}}$$

Integrating around the ring:

$$E = \frac{1}{4\pi\varepsilon_0}\frac{Qx}{(a^2 + x^2)^{3/2}}$$

directed along the axis.

(b) $E = \frac{1}{4\pi \times 8.85 \times 10^{-12}} \times \frac{5.0 \times 10^{-9} \times 0.15}{(0.01 + 0.0225)^{3/2}}$

$$= 8.99 \times 10^9 \times \frac{7.5 \times 10^{-10}}{(0.0325)^{3/2}} = 8.99 \times 10^9 \times \frac{7.5 \times 10^{-10}}{5.856 \times 10^{-3}} = 8.99 \times 10^9 \times 1.281 \times 10^{-7} = 1152\,\text{V}\,\text{m}^{-1}$$

(c) Maximise $E$ with respect to $x$:

$$\frac{dE}{dx} = \frac{Q}{4\pi\varepsilon_0}\frac{(a^2 + x^2)^{3/2} - x \cdot \frac{3}{2}(a^2 + x^2)^{1/2} \cdot 2x}{(a^2 + x^2)^3} = 0$$

$$(a^2 + x^2) - 3x^2 = 0 \Rightarrow a^2 - 2x^2 = 0$$
$$x = \frac{a}{\sqrt{2}} = \frac{0.10}{1.414} = 0.0707\,\text{m}$$

The field is maximum at $x = a/\sqrt{2} = 70.7\,\text{mm}$ from the centre.

---
### UT-2: Electric Potential and Work Done

**Question:**

Two point charges $q_1 = +3.0\,\text{nC}$ and $q_2 = -5.0\,\text{nC}$ are separated by $0.20\,\text{m}$ in vacuum.

(a) Calculate the electric potential at the midpoint between the charges.

(b) Calculate the electric potential at a point $0.10\,\text{m}$ from $q_1$ along the line joining the charges, on the side of $q_1$ away from $q_2$.

(c) Calculate the work done by an external agent in moving a test charge $q = +1.0\,\text{nC}$ from the point in (b) to infinity.

Take $\frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9\,\text{N}\,\text{m}^2\,\text{C}^{-2}$.

**Solution:**

(a) At the midpoint ($r = 0.10\,\text{m}$ from each charge):

$$V = \frac{1}{4\pi\varepsilon_0}\left(\frac{q_1}{r} + \frac{q_2}{r}\right) = 8.99 \times 10^9 \times \frac{3.0 \times 10^{-9} + (-5.0 \times 10^{-9})}{0.10}$$
$$= 8.99 \times 10^9 \times \frac{-2.0 \times 10^{-9}}{0.10} = 8.99 \times 10^9 \times (-2.0 \times 10^{-8}) = -180\,\text{V}$$

The potential is negative because the negative charge has a larger magnitude and dominates.

(b) At a point $0.10\,\text{m}$ from $q_1$ on the side away from $q_2$:

Distance from $q_1$: $r_1 = 0.10\,\text{m}$

Distance from $q_2$: $r_2 = 0.10 + 0.20 = 0.30\,\text{m}$

$$V = 8.99 \times 10^9 \left(\frac{3.0 \times 10^{-9}}{0.10} + \frac{-5.0 \times 10^{-9}}{0.30}\right)$$
$$= 8.99 \times 10^9 (30 \times 10^{-9} - 16.67 \times 10^{-9}) = 8.99 \times 10^9 \times 13.33 \times 10^{-9} = 120\,\text{V}$$

(c) Work done by external agent $= q(V_{\text{final}} - V_{\text{initial}})$

At infinity, $V = 0$. Moving from the point in (b) where $V = 120\,\text{V}$:

$$W = q(0 - 120) = 1.0 \times 10^{-9} \times (-120) = -1.2 \times 10^{-7}\,\text{J}$$

The negative sign means the electric field does positive work (the test charge is attracted toward the negative charge). The external agent must do negative work (i.e., work is done by the field) to move the positive test charge to infinity.

If the question asks for the work done **by** the external agent to move the charge to infinity, the answer is $W = q \times V = +1.2 \times 10^{-7}\,\text{J}$ (the external agent does positive work to overcome the attractive force of $q_2$).

---
### UT-3: Deflection of an Electron Beam

**Question:**

An electron (mass $9.11 \times 10^{-31}\,\text{kg}$, charge $-1.60 \times 10^{-19}\,\text{C}$) enters the region between two parallel horizontal plates with velocity $3.0 \times 10^7\,\text{m}\,\text{s}^{-1}$ horizontally. The plates are $5.0\,\text{cm}$ long, separated by $2.0\,\text{cm}$, and have a potential difference of $400\,\text{V}$ across them (top plate positive).

(a) Calculate the electric field strength between the plates.

(b) Calculate the vertical deflection of the electron as it exits the plates.

(c) Calculate the angle at which the electron exits the plates relative to the horizontal.

**Solution:**

(a) $E = V/d = 400/(2.0 \times 10^{-2}) = 2.0 \times 10^4\,\text{V}\,\text{m}^{-1}$, directed from the positive (top) plate to the negative (bottom) plate, i.e. downward.

(b) The electron (negative charge) experiences an upward force: $F = eE$

Vertical acceleration: $a = F/m = eE/m = 1.60 \times 10^{-19} \times 2.0 \times 10^4 / 9.11 \times 10^{-31} = 3.51 \times 10^{15}\,\text{m}\,\text{s}^{-2}$

Time in the field: $t = l/v_x = 5.0 \times 10^{-2}/(3.0 \times 10^7) = 1.667 \times 10^{-9}\,\text{s}$

Vertical deflection: $y = \frac{1}{2}at^2 = 0.5 \times 3.51 \times 10^{15} \times (1.667 \times 10^{-9})^2$

$$= 0.5 \times 3.51 \times 10^{15} \times 2.779 \times 10^{-18} = 0.5 \times 9.755 \times 10^{-3} = 4.88 \times 10^{-3}\,\text{m} = 4.88\,\text{mm}$$

(c) Vertical velocity at exit: $v_y = at = 3.51 \times 10^{15} \times 1.667 \times 10^{-9} = 5.85 \times 10^6\,\text{m}\,\text{s}^{-1}$

$$\theta = \tan^{-1}(v_y/v_x) = \tan^{-1}(5.85 \times 10^6/3.0 \times 10^7) = \tan^{-1}(0.195) = 11.0^\circ$$

The electron exits at $11.0^\circ$ above the horizontal.

## Integration Tests

### IT-1: Electric and Gravitational Field Comparison (with Gravitational Fields)

**Question:**

(a) Calculate the ratio of the electric force to the gravitational force between a proton and an electron separated by $5.3 \times 10^{-11}\,\text{m}$ (the Bohr radius).

(b) A particle of mass $m$ and charge $+q$ is placed in a region where both a uniform electric field $E$ and the gravitational field $g$ act vertically (both downward). Find the condition on $q/m$ for the particle to be in equilibrium.

(c) A charged oil drop of mass $1.0 \times 10^{-14}\,\text{kg}$ is held stationary between two horizontal plates separated by $8.0\,\text{mm}$ with a potential difference of $3000\,\text{V}$. Calculate the charge on the drop and express it in terms of the elementary charge.

Take $e = 1.60 \times 10^{-19}\,\text{C}$, $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Electric force: $F_E = \frac{e^2}{4\pi\varepsilon_0 r^2}$

Gravitational force: $F_G = \frac{Gm_em_p}{r^2}$

Ratio: $\frac{F_E}{F_G} = \frac{e^2}{4\pi\varepsilon_0 Gm_em_p}$

$$= \frac{(1.60 \times 10^{-19})^2}{4\pi \times 8.85 \times 10^{-12} \times 6.67 \times 10^{-11} \times 9.11 \times 10^{-31} \times 1.67 \times 10^{-27}}$$

$$= \frac{2.56 \times 10^{-38}}{4\pi \times 8.85 \times 10^{-12} \times 6.67 \times 10^{-11} \times 1.521 \times 10^{-57}}$$

$$= \frac{2.56 \times 10^{-38}}{4\pi \times 8.99 \times 10^{-79}} = \frac{2.56 \times 10^{-38}}{1.130 \times 10^{-77}} = 2.27 \times 10^{39}$$

The electric force is approximately $10^{39}$ times stronger than gravity. This enormous ratio explains why electromagnetic forces dominate at atomic and molecular scales while gravity dominates at astronomical scales.

(b) For equilibrium (upward electric force balancing downward gravity):

$$qE = mg$$
$$\frac{q}{m} = \frac{g}{E}$$

(c) For the oil drop (Millikan-type experiment):

$$qE = mg \Rightarrow q = \frac{mg}{E} = \frac{mgd}{V}$$

$$q = \frac{1.0 \times 10^{-14} \times 9.81 \times 8.0 \times 10^{-3}}{3000} = \frac{7.848 \times 10^{-16}}{3000} = 2.616 \times 10^{-19}\,\text{C}$$

In terms of elementary charge: $n = q/e = 2.616 \times 10^{-19}/1.60 \times 10^{-19} = 1.635$

This is not exactly an integer, which means either the measurement has some uncertainty or the drop carries approximately 2 elementary charges. With the given values, the closest integer is $n = 2$, giving $q = 3.20 \times 10^{-19}\,\text{C}$. The discrepancy suggests experimental uncertainty.

---
### IT-2: Capacitance from Parallel Plates (with Capacitance)

**Question:**

A parallel plate capacitor has plate area $A = 0.020\,\text{m}^2$ and plate separation $d = 2.0\,\text{mm}$. A potential difference of $500\,\text{V}$ is applied.

(a) Calculate the electric field strength between the plates.

(b) Calculate the charge on each plate and the capacitance.

(c) A dielectric slab of relative permittivity $\varepsilon_r = 3.0$ and thickness $1.0\,\text{mm}$ is inserted. Calculate the new capacitance.

Take $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{F}\,\text{m}^{-1}$.

**Solution:**

(a) For parallel plates: $E = V/d = 500/(2.0 \times 10^{-3}) = 2.5 \times 10^5\,\text{V}\,\text{m}^{-1}$

(b) $C_0 = \varepsilon_0 A/d = 8.85 \times 10^{-12} \times 0.020/(2.0 \times 10^{-3}) = 8.85 \times 10^{-11}\,\text{F} = 88.5\,\text{pF}$

$Q = C_0 V = 88.5 \times 10^{-12} \times 500 = 4.43 \times 10^{-8}\,\text{C} = 44.3\,\text{nC}$

(c) With the dielectric slab of thickness $t = 1.0\,\text{mm}$ filling half the gap, we have two capacitors in series:

Dielectric-filled: $C_1 = \varepsilon_0 \varepsilon_r A/t = 8.85 \times 10^{-12} \times 3.0 \times 0.020/(1.0 \times 10^{-3}) = 5.31 \times 10^{-10}\,\text{F}$

Air-filled: $C_2 = \varepsilon_0 A/(d - t) = 8.85 \times 10^{-12} \times 0.020/(1.0 \times 10^{-3}) = 1.77 \times 10^{-10}\,\text{F}$

$$\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} = \frac{1}{5.31 \times 10^{-10}} + \frac{1}{1.77 \times 10^{-10}} = 1.883 \times 10^9 + 5.650 \times 10^9 = 7.533 \times 10^9$$

$$C = 1.327 \times 10^{-10}\,\text{F} = 133\,\text{pF}$$

The capacitance increased from $88.5\,\text{pF}$ to $133\,\text{pF}$, a factor of 1.50.

---
### IT-3: Field Lines and Equipotentials — Proof of Perpendicularity (with Wave Properties)

**Question:**

The electric potential at a point in a region is given by $V = 3x^2 - 2xy + 4y\,\text{V}$, where $x$ and $y$ are in metres.

(a) Calculate the electric field components $E_x$ and $E_y$ at the point $(2, 1)$.

(b) Calculate the magnitude and direction of the electric field at $(2, 1)$.

(c) Verify that the electric field is perpendicular to the equipotential surface at $(2, 1)$ by showing that $\mathbf{E} \cdot \nabla V = -|\mathbf{E}|^2$.

**Solution:**

(a) $E_x = -\frac{\partial V}{\partial x} = -(6x - 2y)$

$E_y = -\frac{\partial V}{\partial y} = -(-2x + 4)$

At $(2, 1)$:

$E_x = -(12 - 2) = -10\,\text{V}\,\text{m}^{-1}$

$E_y = -(-4 + 4) = 0\,\text{V}\,\text{m}^{-1}$

(b) $|\mathbf{E}| = \sqrt{(-10)^2 + 0^2} = 10\,\text{V}\,\text{m}^{-1}$

The field points in the $-x$ direction (i.e. to the left).

(c) The gradient of $V$: $\nabla V = \left(\frac{\partial V}{\partial x}, \frac{\partial V}{\partial y}\right) = (6x - 2y, -2x + 4)$

At $(2, 1)$: $\nabla V = (10, 0)$

$\mathbf{E} \cdot \nabla V = (-10)(10) + (0)(0) = -100$

$-|\mathbf{E}|^2 = -(10)^2 = -100$

So $\mathbf{E} \cdot \nabla V = -|\mathbf{E}|^2$, confirming that $\mathbf{E}$ is perpendicular to the equipotential (since $\nabla V$ is perpendicular to the equipotential, and $\mathbf{E} = -\nabla V$).

This confirms the general result: electric field lines are always perpendicular to equipotential surfaces.
