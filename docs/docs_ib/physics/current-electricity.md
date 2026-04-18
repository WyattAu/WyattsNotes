---
title: Current Electricity
date: 2026-04-09T00:00:00.000Z
tags:
  - IB
  - Physics
categories:
  - IB
  - Physics
slug: current-electricity
---

## 1. Electric Fields

### 1.1 Coulomb's Law

The electrostatic force between two point charges is governed by Coulomb's inverse-square law. The
magnitude of the force is directly proportional to the product of the charge magnitudes and
inversely proportional to the square of the separation distance:

$$
F = k\frac{|q_1||q_2|}{r^2}
$$

where $k$ is Coulomb's constant, defined as:

$$
k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9 \mathrm{ N m}^2 \mathrm{ C}^{-2}
$$

The permittivity of free space is
$\varepsilon_0 = 8.85 \times 10^{-12} \mathrm{ C}^2 \mathrm{ N}^{-1} \mathrm{ m}^{-2}$.

In vector form, the force exerted on $q_2$ by $q_1$ is:

$$
\vec{F}_{12} = k\frac{q_1 q_2}{r^2}\hat{r}_{12}
$$

where $\hat{r}_{12}$ is the unit vector pointing from $q_1$ to $q_2$. Like charges produce a
repulsive force (positive $F$ along $\hat{r}_{12}$), and unlike charges produce an attractive force
(negative $F$, i.e. anti-parallel to $\hat{r}_{12}$).

:::info[Data Booklet Reference] Both forms appear in the IB data booklet:

$$
F = \frac{q_1 q_2}{4\pi\varepsilon_0 r^2}
$$

$$
E = \frac{q}{4\pi\varepsilon_0 r^2}
$$

:::

### 1.2 Electric Field Strength

The electric field $\vec{E}$ at a point in space is defined as the electrostatic force per unit
positive test charge placed at that point:

$$
\vec{E} = \frac{\vec{F}}{q}
$$

The SI unit is $\mathrm{V m}^{-1}$ (equivalent to $\mathrm{N C}^{-1}$). For a point charge $Q$, the
field at distance $r$ is:

$$
E = \frac{Q}{4\pi\varepsilon_0 r^2}
$$

This is an inverse-square radial field. Field lines point radially outward for positive source
charges and radially inward for negative source charges.

### 1.3 Uniform Field Between Parallel Plates

When two parallel conducting plates are separated by a distance $d$ and maintained at a potential
difference $V$, the electric field between them is uniform:

$$
E = \frac{V}{d}
$$

This is exact for infinite plates and an excellent approximation when the plate separation is much
smaller than the plate dimensions. Field lines are parallel and equally spaced between the plates;
they fringe at the edges.

The direction of the field is from the positive plate to the negative plate. A positive test charge
placed in this field experiences a force $F = qE$ directed from positive to negative plate.

### 1.4 Motion of Charged Particles in Uniform Electric Fields

Consider a charged particle of mass $m$ and charge $q$ entering a uniform electric field $E$
perpendicular to its initial velocity $v$. This is the electric-field analogue of projectile motion.

The particle experiences a constant force perpendicular to its motion:

$$
F = qE \implies a = \frac{qE}{m}
$$

Since the acceleration is perpendicular to the initial velocity, the motion decomposes into:

**Parallel to plates** (no force, constant velocity):

$$
x = v \cdot t
$$

**Perpendicular to plates** (constant acceleration):

$$
y = \frac{1}{2}\left(\frac{qE}{m}\right)t^2
$$

Eliminating $t$ yields the parabolic trajectory:

$$
y = \frac{qE}{2mv^2}\,x^2
$$

The deflection angle upon exiting the field region is:

$$
\tan\theta = \frac{v_y}{v_x} = \frac{qEL}{mv^2}
$$

where $L$ is the length of the plates.

:::tip[Electron vs Proton Deflection] For the same field and entry speed, a proton is deflected
$m_p/m_e \approx 1836$ times less than an electron. The direction of deflection is opposite for
opposite charges.
:::

<details>
<summary>Worked Example: Electron Deflection Between Parallel Plates</summary>

An electron enters the region between two horizontal parallel plates at
$v = 3.0 \times 10^7 \mathrm{ m/s}$ horizontally. The plates are $5.0\mathrm{ cm}$ long and
$2.0\mathrm{ cm}$ apart, with a potential difference of $400\mathrm{ V}$ across them.

**Find the vertical deflection at the point of exit.**

The uniform electric field is:

$$
E = \frac{V}{d} = \frac{400}{0.020} = 2.0 \times 10^4 \mathrm{ V/m}
$$

Time between the plates:

$$
t = \frac{L}{v} = \frac{0.050}{3.0 \times 10^7} = 1.67 \times 10^{-9}\mathrm{ s}
$$

Vertical acceleration (note: the electron has charge $q = -1.6 \times 10^{-19}\mathrm{ C}$; it is
deflected toward the positive plate):

$$
a = \frac{eE}{m_e} = \frac{(1.6 \times 10^{-19})(2.0 \times 10^4)}{9.11 \times 10^{-31}} = 3.51 \times 10^{15}\mathrm{ m/s}^2
$$

Vertical deflection:

$$
y = \frac{1}{2}at^2 = \frac{1}{2}(3.51 \times 10^{15})(1.67 \times 10^{-9})^2 = 4.9 \times 10^{-3}\mathrm{ m} = 4.9\mathrm{ mm}
$$

The electron deflects $4.9\mathrm{ mm}$ toward the positive plate. Since $y = 4.9\mathrm{ mm}$ is less
than the half-separation of $10\mathrm{ mm}$, the electron exits the plates without striking them.

</details>

---

## 2. Electric Current

### 2.1 Defining Current

Electric current is the rate of flow of charge through a cross-section of a conductor:

$$
I = \frac{\Delta Q}{\Delta t}
$$

The SI unit is the ampere ($\mathrm{A}$), where $1\mathrm{ A} = 1\mathrm{ C s}^{-1}$. Conventional current
flows from positive to negative terminal, opposite to the drift direction of electrons.

### 2.2 Derivation of $I = nAev_d$

This is a fundamental derivation that connects microscopic charge carrier behaviour to the
macroscopic observable we call current.

Consider a cylindrical conductor of cross-sectional area $A$. The free electron number density is
$n$ (number of free electrons per unit volume). Each electron carries charge
$e = 1.60 \times 10^{-19}\mathrm{ C}$ and drifts with velocity $v_d$.

In time $\Delta t$, the volume swept by electrons crossing a given cross-section is:

$$
\mathrm{Volume} = A \cdot v_d \cdot \Delta t
$$

The number of free electrons in this volume:

$$
N = n \cdot A \cdot v_d \cdot \Delta t
$$

Total charge crossing the cross-section in $\Delta t$:

$$
\Delta Q = N \cdot e = nAev_d\,\Delta t
$$

Therefore:

$$
I = \frac{\Delta Q}{\Delta t} = nAev_d
$$

:::info[Typical Values] For copper, $n \approx 8.5 \times 10^{28}\mathrm{ m}^{-3}$. For a
$1\mathrm{ mm}^2$ copper wire carrying $1\mathrm{ A}$, the drift velocity is:

$$
v_d = \frac{I}{nAe} = \frac{1.0}{(8.5 \times 10^{28})(10^{-6})(1.6 \times 10^{-19})} \approx 7.4 \times 10^{-5}\mathrm{ m/s}
$$

This is extraordinarily slow. The signal (the electric field) propagates at a significant fraction
of $c$, but the electrons themselves crawl.
:::

<details>
<summary>Worked Example: Drift Velocity in Aluminium</summary>

An aluminium wire of diameter $0.50\mathrm{ mm}$ carries a current of $2.0\mathrm{ A}$. For aluminium,
the free electron density is $n = 6.0 \times 10^{28}\mathrm{ m}^{-3}$.

Cross-sectional area:

$$
A = \pi r^2 = \pi(0.25 \times 10^{-3})^2 = 1.96 \times 10^{-7}\mathrm{ m}^2
$$

Drift velocity:

$$
v_d = \frac{I}{nAe} = \frac{2.0}{(6.0 \times 10^{28})(1.96 \times 10^{-7})(1.6 \times 10^{-19})} = 1.06 \times 10^{-3}\mathrm{ m/s}
$$

The drift velocity is approximately $1.1\mathrm{ mm/s}$.

</details>

### 2.3 Potential Difference and Electromotive Force

**Potential difference** ($V$, or p.d.) is the energy transferred per unit charge between two points
in a circuit:

$$
V = \frac{W}{Q}
$$

SI unit: volt ($\mathrm{V}$), where $1\mathrm{ V} = 1\mathrm{ J C}^{-1}$.

**Electromotive force** ($\varepsilon$, or emf) is the energy converted from other forms to
electrical energy per unit charge by a source:

$$
\varepsilon = \frac{W}{Q}
$$

Although emf has the same unit as potential difference, they are physically distinct. Emf describes
energy conversion within the source (chemical to electrical, for instance), while p.d. describes
energy transfer to components in the external circuit.

---

## 3. Resistance and Ohm's Law

### 3.1 Ohm's Law

For an ohmic conductor at constant temperature, the current through the conductor is directly
proportional to the potential difference across it:

$$
V = IR
$$

where $R$ is the resistance measured in ohms ($\Omega$), with $1\,\Omega = 1\mathrm{ V A}^{-1}$.

Ohm's law is an empirical relationship. It holds for metallic conductors at constant temperature. It
is not a universal law of nature — many materials and devices are non-ohmic.

### 3.2 Resistivity

The resistance of a uniform conductor depends on its geometry and the intrinsic property of the
material called resistivity ($\rho$):

$$
R = \rho\frac{L}{A}
$$

where $L$ is the length and $A$ is the cross-sectional area. The SI unit of resistivity is
$\Omega\,\mathrm{m}$.

The inverse quantity is conductivity: $\sigma = 1/\rho$, with SI unit $\mathrm{S m}^{-1}$ (siemens per
metre).

:::info[Data Booklet Resistivity Values] Copper:
$\rho \approx 1.7 \times 10^{-8}\,\Omega\,\mathrm{m}$. Nichrome (alloy):
$\rho \approx 1.1 \times 10^{-6}\,\Omega\,\mathrm{m}$. Semiconductors: $\rho$ spans many orders of
magnitude.
:::

### 3.3 Factors Affecting Resistance

**Temperature.** For metallic conductors, resistance increases approximately linearly with
temperature (for modest ranges):

$$
R_T = R_0[1 + \alpha(T - T_0)]
$$

where $\alpha$ is the temperature coefficient of resistance. For copper,
$\alpha \approx 3.9 \times 10^{-3}\mathrm{ K}^{-1}$. The physical mechanism is that lattice vibrations
(phonons) increase with temperature, scattering conduction electrons more frequently and reducing
their mean free path.

For semiconductors, resistance decreases with temperature because more charge carriers are promoted
across the band gap into the conduction band.

**Material.** Different materials have vastly different resistivities. Conductors
($\rho \lt 10^{-4}\,\Omega\,\mathrm{m}$), semiconductors ($\rho$ between roughly $10^{-4}$ and
$10^{6}\,\Omega\,\mathrm{m}$), and insulators ($\rho \gt 10^{6}\,\Omega\,\mathrm{m}$) form a continuum.

**Geometry.** Longer conductors have greater resistance (more scattering centres along the path).
Thicker conductors have lower resistance (more parallel conduction channels).

### 3.4 I-V Characteristics

The I-V graph reveals whether a component is ohmic and provides insight into the underlying physics.

**Ohmic conductors.** A straight line through the origin with constant slope $1/R$. Metallic wires
at constant temperature behave this way.

**Filament lamp.** The I-V curve is a steepening curve (non-linear). As current increases, the
filament heats up, increasing its resistance. At higher temperatures, the lattice vibrations
intensify, and the gradient of the I-V graph increases (more voltage needed per ampere). The curve
is symmetric about the origin.

**Semiconductor diode.** The I-V curve is highly asymmetric. In forward bias (positive voltage
across the diode in the direction of easy current flow), negligible current flows until the
threshold voltage is reached (approximately $0.7\mathrm{ V}$ for silicon diodes), after which current
rises steeply. In reverse bias, only a tiny leakage current flows until breakdown occurs.

**Thermistor.** An NTC (negative temperature coefficient) thermistor has a resistance that decreases
as temperature increases. As more current flows, self-heating reduces resistance, so the I-V curve
is a shallowing curve (opposite behaviour to a filament lamp).

**Light-dependent resistor (LDR).** Resistance decreases with increasing light intensity. More
photons promote more electrons into the conduction band, increasing the number of charge carriers.

### 3.5 Common Pitfalls: Resistance

A frequent error is assuming Ohm's law applies universally. Ohm's law is a property of specific
materials under specific conditions (constant temperature), not a fundamental law. A filament lamp
obeying $V = IR$ at every instant (with $R$ varying) does not satisfy Ohm's law, because Ohm's law
requires $R$ to be constant.

Another pitfall is confusing resistance with resistivity. Resistance depends on both the material
and the geometry; resistivity is an intrinsic property of the material alone.

---

## 4. Circuit Analysis

### 4.1 Series Circuits

For components connected in series, the same current flows through each component. The total
resistance is the sum of individual resistances:

$$
R_{\mathrm{total}} = R_1 + R_2 + R_3 + \cdots
$$

The total p.d. is distributed among components in proportion to their resistances:

$$
V_{\mathrm{total}} = V_1 + V_2 + V_3 + \cdots
$$

For two resistors in series, the voltage divider relationship gives:

$$
V_1 = V_{\mathrm{total}} \cdot \frac{R_1}{R_1 + R_2}
$$

### 4.2 Parallel Circuits

For components connected in parallel, the p.d. across each branch is the same. The reciprocal of the
total resistance equals the sum of reciprocals:

$$
\frac{1}{R_{\mathrm{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \cdots
$$

For two resistors in parallel:

$$
R_{\mathrm{total}} = \frac{R_1 R_2}{R_1 + R_2}
$$

The total current splits between branches in inverse proportion to their resistances:

$$
\frac{I_1}{I_2} = \frac{R_2}{R_1}
$$

### 4.3 Kirchhoff's Laws

Kirchhoff's two laws are conservation statements that allow systematic analysis of any circuit.

**Kirchhoff's Current Law (KCL) — the Junction Rule.** The sum of currents entering any junction
equals the sum of currents leaving it. This is conservation of charge:

$$
\sum I_{\mathrm{in}} = \sum I_{\mathrm{out}}
$$

**Kirchhoff's Voltage Law (KVL) — the Loop Rule.** The sum of all potential differences around any
closed loop is zero. This is conservation of energy:

$$
\sum V = 0
$$

When applying KVL, adopt a consistent sign convention. A common convention: assign a sign based on
whether you encounter a potential rise or drop as you traverse the loop. Emf is a rise (positive),
and potential drops across resistors are negative.

<details>
<summary>Worked Example: Kirchhoff's Laws</summary>

Consider a circuit with two cells and three resistors. Cell 1 has emf $\varepsilon_1 = 12\mathrm{ V}$
and cell 2 has emf $\varepsilon_2 = 6\mathrm{ V}$ (opposing). The resistors are $R_1 = 4\,\Omega$,
$R_2 = 6\,\Omega$, and $R_3 = 2\,\Omega$, all in series with the cells.

Applying KVL around the single loop (travelling clockwise):

$$
\varepsilon_1 - \varepsilon_2 - IR_1 - IR_2 - IR_3 = 0
$$

$$
12 - 6 - I(4) - I(6) - I(2) = 0
$$

$$
6 = 12I
$$

$$
I = 0.50\mathrm{ A}
$$

The p.d. across each resistor: $V_1 = 2.0\mathrm{ V}$, $V_2 = 3.0\mathrm{ V}$, $V_3 = 1.0\mathrm{ V}$.
These sum to $6\mathrm{ V}$, which equals the net emf of $12 - 6 = 6\mathrm{ V}$, confirming energy
conservation.

</details>

### 4.4 The Potential Divider

A potential divider (or voltage divider) consists of two or more resistors in series across a
supply. The output voltage is tapped from the junction between resistors.

For two resistors $R_1$ (upper) and $R_2$ (lower) across supply $V_{\mathrm{in}}$:

$$
V_{\mathrm{out}} = V_{\mathrm{in}} \cdot \frac{R_2}{R_1 + R_2}
$$

If $R_2$ is replaced by a variable component (thermistor, LDR), the output voltage becomes a
function of the physical quantity being sensed.

**Sensing circuits.** An NTC thermistor in the lower position produces a p.d. that rises with
temperature (since $R_2$ falls, but more current flows, and the voltage drop across the upper fixed
resistor increases, so $V_{\mathrm{out}}$ measured across $R_2$ actually decreases). Careful analysis
is needed depending on which component the output is measured across.

A common configuration places the variable resistor (e.g., thermistor) as $R_1$ and measures
$V_{\mathrm{out}}$ across $R_2$ (fixed). As temperature rises, $R_1$ decreases, so more of
$V_{\mathrm{in}}$ drops across $R_2$, and $V_{\mathrm{out}}$ increases.

### 4.5 Wheatstone Bridge

The Wheatstone bridge is a null-detection arrangement of four resistors:

$$
\frac{R_1}{R_2} = \frac{R_3}{R_4}
$$

When this ratio is satisfied, no current flows through the galvanometer connected between the
junctions. This condition is used for precise resistance measurement.

If three resistors are known and one is unknown, balance the bridge and solve:

$$
R_x = R_2 \cdot \frac{R_3}{R_1}
$$

The sensitivity of the bridge is greatest when all four arms have similar resistances.

<details>
<summary>Worked Example: Wheatstone Bridge</summary>

A Wheatstone bridge has $R_1 = 100\,\Omega$, $R_2 = 200\,\Omega$, and $R_3 = 150\,\Omega$. The
unknown resistor $R_x$ is in the fourth arm. The galvanometer reads zero.

At balance:

$$
\frac{R_1}{R_2} = \frac{R_3}{R_x}
$$

$$
\frac{100}{200} = \frac{150}{R_x}
$$

$$
R_x = \frac{200 \times 150}{100} = 300\,\Omega
$$

</details>

### 4.6 Common Pitfalls: Circuit Analysis

A common mistake when applying Kirchhoff's voltage law is inconsistent sign conventions. Always
define your traversal direction first, then apply signs consistently. Another error is forgetting
that the voltage across parallel branches is identical, not the current.

When analysing potential dividers, students often confuse which resistor the output is measured
across. Always identify the output terminals clearly before calculating.

---

## 5. Internal Resistance

### 5.1 EMF and Terminal Potential Difference

A real cell has internal resistance $r$ due to the resistance of the electrolyte, electrodes, and
internal connections. The terminal p.d. ($V$) is less than the emf ($\varepsilon$) when current is
drawn:

$$
V = \varepsilon - Ir
$$

When no current flows (open circuit), $V = \varepsilon$. The terminal p.d. decreases linearly with
increasing current.

The "lost volts" is the p.d. across the internal resistance: $V_{\mathrm{lost}} = Ir$.

### 5.2 Measuring Internal Resistance

**Method 1: Vary the external load.** Connect a variable resistor across the cell. Measure the
terminal p.d. $V$ and current $I$ for a range of load resistances. Plot $V$ against $I$.

The graph is a straight line: $V = \varepsilon - Ir$.

The y-intercept equals $\varepsilon$. The gradient equals $-r$ (so $r = |\mathrm{gradient}|$).

The x-intercept gives the short-circuit current $I_{\mathrm{sc}} = \varepsilon / r$.

**Method 2: Two-reading method.** Measure $V_1$ and $I_1$ for one load, and $V_2$ and $I_2$ for
another. Solve simultaneously:

$$
V_1 = \varepsilon - I_1 r
$$

$$
V_2 = \varepsilon - I_2 r
$$

Subtracting: $V_1 - V_2 = (I_2 - I_1)r$, giving $r = (V_1 - V_2)/(I_2 - I_1)$.

<details>
<summary>Worked Example: Internal Resistance</summary>

A cell with unknown emf and internal resistance is connected to a $4.0\,\Omega$ resistor. The
terminal p.d. is measured as $5.8\mathrm{ V}$ and the current is $1.2\mathrm{ A}$.

Using $V = \varepsilon - Ir$:

$$
\varepsilon = V + Ir = 5.8 + (1.2)r
$$

When the external resistor is changed to $9.0\,\Omega$, the current becomes $0.65\mathrm{ A}$:

$$
V' = \varepsilon - I'r = (5.8 + 1.2r) - 0.65r = 5.8 + 0.55r
$$

But also $V' = I'R' = 0.65 \times 9.0 = 5.85\mathrm{ V}$:

$$
5.85 = 5.8 + 0.55r
$$

$$
r = \frac{0.05}{0.55} = 0.091\,\Omega
$$

$$
\varepsilon = 5.8 + 1.2(0.091) = 5.91\mathrm{ V}
$$

</details>

### 5.3 Maximum Power Transfer Theorem

The power delivered to the external load $R_L$ is:

$$
P = I^2 R_L = \left(\frac{\varepsilon}{R_L + r}\right)^2 R_L = \frac{\varepsilon^2 R_L}{(R_L + r)^2}
$$

To find the maximum, differentiate with respect to $R_L$ and set to zero:

$$
\frac{dP}{dR_L} = \varepsilon^2 \frac{(R_L + r)^2 - 2R_L(R_L + r)}{(R_L + r)^4} = 0
$$

The numerator simplifies to $(R_L + r)(r - R_L)$, giving $R_L = r$.

Maximum power is delivered to the load when the load resistance equals the internal resistance. At
this condition:

$$
P_{\max} = \frac{\varepsilon^2}{4r}
$$

:::warning[Efficiency at Maximum Power] At $R_L = r$, the efficiency is only 50% (half the power is
dissipated in the internal resistance). In power distribution systems, $R_L \gt r$ is preferred for
higher efficiency, even though less total power is delivered.
:::

### 5.4 Battery Configurations

**Series.** Identical cells in series: total emf adds, total internal resistance adds.

$$
\varepsilon_{\mathrm{total}} = n\varepsilon, \quad r_{\mathrm{total}} = nr
$$

where $n$ is the number of cells.

**Parallel.** Identical cells in parallel: total emf equals that of one cell, total internal
resistance decreases.

$$
\varepsilon_{\mathrm{total}} = \varepsilon, \quad r_{\mathrm{total}} = \frac{r}{n}
$$

Parallel configuration provides the same voltage but can deliver $n$ times the current of a single
cell.

**Mixed (series-parallel) banks.** For $n$ rows of $m$ cells each (all identical):

$$
\varepsilon_{\mathrm{total}} = m\varepsilon, \quad r_{\mathrm{total}} = \frac{mr}{n}
$$

The configuration is chosen based on whether the load requires higher voltage (more cells in series)
or higher current capacity (more cells in parallel).

---

## 6. Power in Circuits

### 6.1 Power Equations

Electrical power is the rate of energy transfer:

$$
P = IV
$$

Using Ohm's law ($V = IR$), two equivalent forms follow:

$$
P = I^2 R
$$

$$
P = \frac{V^2}{R}
$$

These are all algebraically equivalent for ohmic conductors. The form to use depends on what is held
constant in the problem. If current is constant (series circuit), use $P = I^2 R$. If voltage is
constant (parallel circuit), use $P = V^2/R$.

### 6.2 Energy Dissipated

The energy dissipated by a resistor over time $t$ is:

$$
E = Pt = IVt = I^2 Rt = \frac{V^2}{R}t
$$

This energy appears as thermal energy in the resistor (Joule heating).

### 6.3 Power and Internal Resistance

The total power output of a cell is:

$$
P_{\mathrm{total}} = \varepsilon I
$$

The power delivered to the external circuit:

$$
P_{\mathrm{ext}} = VI = I^2 R_L
$$

The power wasted in the internal resistance:

$$
P_{\mathrm{int}} = I^2 r
$$

Conservation of energy requires $P_{\mathrm{total}} = P_{\mathrm{ext}} + P_{\mathrm{int}}$.

The efficiency of the cell:

$$
\eta = \frac{P_{\mathrm{ext}}}{P_{\mathrm{total}}} = \frac{R_L}{R_L + r}
$$

<details>
<summary>Worked Example: Power Transfer</summary>

A battery with emf $12\mathrm{ V}$ and internal resistance $2.0\,\Omega$ is connected to an external
resistor of $4.0\,\Omega$.

Current:

$$
I = \frac{\varepsilon}{R_L + r} = \frac{12}{4.0 + 2.0} = 2.0\mathrm{ A}
$$

Power to external resistor:

$$
P_{\mathrm{ext}} = I^2 R_L = (2.0)^2(4.0) = 16\mathrm{ W}
$$

Power wasted internally:

$$
P_{\mathrm{int}} = I^2 r = (2.0)^2(2.0) = 8\mathrm{ W}
$$

Total power: $P_{\mathrm{total}} = 16 + 8 = 24\mathrm{ W}$.

Check: $P_{\mathrm{total}} = \varepsilon I = 12 \times 2.0 = 24\mathrm{ W}$.

Efficiency: $\eta = 4.0/(4.0 + 2.0) = 66.7\%$.

</details>

### 6.4 Common Pitfalls: Power

A critical error is using $P = V^2/R$ when $V$ refers to the terminal p.d. of a cell (which differs
from the emf due to internal resistance) and $R$ refers to the external load. Always be explicit
about which voltage and which resistance you are using. If the problem involves internal resistance,
track the terminal p.d. separately from the emf.

Another mistake is confusing power (rate of energy transfer, watts) with energy (joules). To find
total energy transferred, always multiply power by time.

---

## 7. Measuring Instruments

### 7.1 Ideal vs Real Instruments

**Ammeter.** Measures current. Connected in series with the component. An ideal ammeter has zero
resistance so it does not alter the current it measures. A real ammeter has a small but finite
resistance (typically a fraction of an ohm for analogue, or a very small resistance for digital
meters based on shunt resistors).

**Voltmeter.** Measures potential difference. Connected in parallel across the component. An ideal
voltmeter has infinite resistance so it draws no current from the circuit. A real voltmeter has a
large but finite resistance (typically $10^4$ to $10^7\,\Omega$).

### 7.2 Impact of Non-Ideal Instruments

A non-ideal ammeter in series adds its resistance to the circuit, reducing the current below the
true value. The measured current is:

$$
I_{\mathrm{measured}} = \frac{\varepsilon}{R + R_A + r}
$$

which is less than the true current $I_{\mathrm{true}} = \varepsilon/(R + r)$.

A non-ideal voltmeter in parallel acts as an additional current path, effectively reducing the
resistance of the component being measured. The equivalent resistance of the parallel combination
is:

$$
R_{\mathrm{eq}} = \frac{R \cdot R_V}{R + R_V}
$$

which is always less than $R$. The measured p.d. is lower than the true p.d.

:::tip[Minimising Measurement Error] For ammeters: use instruments with the smallest possible
internal resistance. For voltmeters: use instruments with the largest possible internal resistance.
A voltmeter is considered sufficiently ideal if $R_V \gt 100R$, where $R$ is the resistance across
which it is connected.
:::

### 7.3 Galvanometer as Ammeter and Voltmeter

A galvanometer is a sensitive current-measuring device. A typical galvanometer might have a
full-scale deflection current $I_g = 100\,\mu\mathrm{A}$ and internal resistance $R_g = 50\,\Omega$.

**Converting to ammeter.** A shunt resistor $R_s$ is connected in parallel to bypass excess current:

$$
R_s = \frac{I_g R_g}{I - I_g}
$$

For a galvanometer to measure up to $I = 1\mathrm{ A}$:
$R_s = (100 \times 10^{-6} \times 50)/(1 - 100 \times 10^{-6}) \approx 5.0 \times 10^{-3}\,\Omega$.

**Converting to voltmeter.** A multiplier resistor $R_m$ is connected in series to limit current:

$$
R_m = \frac{V}{I_g} - R_g
$$

For a galvanometer to measure up to $V = 10\mathrm{ V}$:
$R_m = 10/(100 \times 10^{-6}) - 50 = 99950\,\Omega \approx 100\,\mathrm{k}\Omega$.

---

## 8. Cells and Batteries: Deeper Analysis

### 8.1 EMF as Energy per Charge

The emf of a cell is the total energy converted per unit charge:

$$
\varepsilon = \frac{E_{\mathrm{chemical}}}{Q}
$$

For a cell that converts $E_{\mathrm{chemical}}$ joules of chemical energy when $Q$ coulombs of charge
flow, the emf is $\varepsilon = E_{\mathrm{chemical}}/Q$.

A rechargeable cell can reverse this process: during charging, electrical energy is converted back
to chemical energy. The charging voltage must exceed the emf to drive current through the cell
against its emf.

### 8.2 Discharge Characteristics

As a battery discharges, its emf gradually decreases and its internal resistance increases. This is
because the concentration of reactants decreases and reaction products accumulate, affecting the
electrochemistry at the electrodes.

For a lead-acid battery, the emf drops from about $12.6\mathrm{ V}$ (fully charged) to approximately
$11.9\mathrm{ V}$ (discharged), while internal resistance can increase by an order of magnitude.

### 8.3 Combining Cells with Different EMFs

When cells with different emfs are connected in parallel, current can circulate between them even
with no external load. This is generally avoided in practice unless a diode is used to prevent
reverse current.

For cells in series, the total emf is the algebraic sum (taking polarity into account), and the
total internal resistance is the sum of individual internal resistances regardless of polarity.

---

## 9. Systematic Circuit Analysis: A Framework

When faced with an arbitrary circuit, apply the following systematic approach:

1. Label all known and unknown quantities (currents, voltages, resistances, emfs).
2. Assign current directions (if the actual direction is unknown, assume one; a negative result
   indicates the current flows in the opposite direction).
3. Apply KCL at each junction to write current equations.
4. Apply KVL around each independent loop to write voltage equations.
5. Solve the resulting system of simultaneous equations.

This method works for any circuit topology, regardless of complexity.

<details>
<summary>Worked Example: Multi-Loop Circuit</summary>

Two cells are connected in parallel across a common load. Cell 1 has $\varepsilon_1 = 12\mathrm{ V}$,
$r_1 = 1.0\,\Omega$. Cell 2 has $\varepsilon_2 = 10\mathrm{ V}$, $r_2 = 2.0\,\Omega$. The load
resistor is $R_L = 5.0\,\Omega$.

Let $I_1$ be the current from cell 1, $I_2$ from cell 2, and $I_L$ through the load (all assumed
clockwise through the load).

KCL at the top junction: $I_1 + I_2 = I_L$.

KVL around loop 1 (cell 1, load): $\varepsilon_1 - I_1 r_1 - I_L R_L = 0$, giving
$12 - I_1 - 5I_L = 0$, so $I_1 = 12 - 5I_L$.

KVL around loop 2 (cell 2, load): $\varepsilon_2 - I_2 r_2 - I_L R_L = 0$, giving
$10 - 2I_2 - 5I_L = 0$, so $I_2 = 5 - 2.5I_L$.

Substituting into KCL: $(12 - 5I_L) + (5 - 2.5I_L) = I_L$.

$$
17 - 7.5I_L = I_L
$$

$$
17 = 8.5I_L
$$

$$
I_L = 2.0\mathrm{ A}
$$

Then $I_1 = 12 - 5(2.0) = 2.0\mathrm{ A}$ and $I_2 = 5 - 2.5(2.0) = 0\mathrm{ A}$.

In this specific case, cell 2 contributes no current. The terminal p.d. of cell 2 is
$V_2 = \varepsilon_2 = 10\mathrm{ V}$ (no current, so no internal drop), which equals the terminal
p.d. of cell 1: $V_1 = 12 - 2.0(1.0) = 10\mathrm{ V}$. The p.d. across the load is
$V_L = I_L R_L = 2.0 \times 5.0 = 10\mathrm{ V}$. This is consistent.

</details>

---

## 10. Resistivity Experiments

### 10.1 Determining Resistivity Experimentally

To determine the resistivity of a material:

1. Measure the length $L$ of the wire with a metre rule.
2. Measure the diameter with a micrometer screw gauge at several points and average to find
   cross-sectional area $A = \pi d^2/4$.
3. Connect the wire in a circuit with a variable resistor, ammeter, and voltmeter.
4. Record $V$ and $I$ for a range of currents (keeping the current low to minimise heating).
5. Calculate $R = V/I$ for each reading and average.
6. Compute $\rho = RA/L$.

### 10.2 Sources of Error

Systematic errors include contact resistance at the clips (use four-terminal sensing for high
precision), the assumption of uniform wire diameter, and the ammeter/voltmeter resistance effects
discussed in Section 7.2.

Random errors are reduced by taking multiple readings and averaging. Temperature control is
critical: even small temperature changes during the experiment alter resistivity.

### 10.3 I-V Characteristic Experiments

To obtain I-V characteristics:

1. Connect the component in series with a variable resistor, ammeter, and power supply.
2. Connect a voltmeter in parallel across the component.
3. Vary the current and record corresponding $V$-$I$ pairs.
4. Plot $I$ (y-axis) against $V$ (x-axis) — this is the IB convention.

For a diode, use both forward and reverse bias. In forward bias, include a protective resistor in
series to prevent excessive current when the diode conducts.

---

## 11. Summary of Key Equations

:::info[IB Physics Data Booklet — Topic 5] The following are the key equations for current
electricity found in the IB Physics data booklet:

| Quantity                         | Equation                                                |
| -------------------------------- | ------------------------------------------------------- |
| Coulomb's law                    | $F = \dfrac{q_1 q_2}{4\pi\varepsilon_0 r^2}$            |
| Electric field (point charge)    | $E = \dfrac{q}{4\pi\varepsilon_0 r^2}$                  |
| Electric field (parallel plates) | $E = \dfrac{V}{d}$                                      |
| Current (drift velocity)         | $I = nAev_d$                                            |
| Ohm's law                        | $V = IR$                                                |
| Resistance and resistivity       | $R = \dfrac{\rho L}{A}$                                 |
| Power                            | $P = IV = I^2R = \dfrac{V^2}{R}$                        |
| Internal resistance              | $V = \varepsilon - Ir$                                  |
| Potential divider                | $V_{\mathrm{out}} = V_{\mathrm{in}} \dfrac{R_2}{R_1 + R_2}$ |
| Wheatstone bridge                | $\dfrac{R_1}{R_2} = \dfrac{R_3}{R_4}$                   |

:::

---

## 12. Common Pitfalls: Consolidated

**Sign conventions in KVL.** The single most common source of error in circuit problems. Define your
loop direction, assign $+$ to emf rises and $-$ to potential drops across resistors (or vice versa,
as long as you are consistent), and stick to it.

**Confusing emf with terminal p.d.** Emf is the open-circuit voltage. Terminal p.d. is always less
than or equal to emf (for a cell supplying current). The difference is the "lost volts" $Ir$.

**Assuming all conductors are ohmic.** Diodes, thermistors, LDRs, and filament lamps are all
non-ohmic. Ohm's law applies only to metallic conductors at constant temperature.

**Drift velocity confusion.** Electrons drift slowly, but the electric field (and hence the signal)
propagates at near light speed. These are completely different phenomena.

**Series vs parallel formulas.** In series, resistances add directly. In parallel, reciprocals add.
Students frequently mix these up. A useful mnemonic: series is "additive" (path is single), parallel
is "reciprocal-additive" (paths multiply).

**Power formula selection.** $P = I^2 R$ assumes current is held constant (series). $P = V^2/R$
assumes voltage is held constant (parallel). In circuits with internal resistance, neither may be
directly applicable without careful identification of the relevant $V$ and $I$.

**Ammeter in parallel, voltmeter in series.** Connecting an ammeter in parallel creates a short
circuit through the ammeter (potentially damaging it). Connecting a voltmeter in series means the
circuit is effectively open (the voltmeter's high resistance blocks current). Always connect
ammeters in series and voltmeters in parallel.
