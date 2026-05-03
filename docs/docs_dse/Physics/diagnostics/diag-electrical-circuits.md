---
title: Electrical Circuits — Diagnostic Tests
description: "Hardest DSE circuit questions: Kirchhoff's laws with multiple loops, internal resistance analysis, potentiometer circuits, and RC transients."
slug: diag-electrical-circuits
hide_table_of_contents: true
---

# Electrical Circuits — Diagnostic Tests

## Unit Tests

### UT-1: Kirchhoff's Laws with Three Loops

**Question:**

In the circuit shown, three cells with EMFs $E_1 = 12$ V, $E_2 = 6$ V, and $E_3 = 4$ V are connected with resistors $R_1 = 4$ $\Omega$, $R_2 = 6$ $\Omega$, and $R_3 = 2$ $\Omega$. Cell $E_1$ is in series with $R_1$, cell $E_2$ is in series with $R_2$, and $R_3$ is the shared branch connecting the junctions. $E_1$ and $E_2$ have their positive terminals facing the same junction (opposing each other). $E_3$ is in the shared branch with its positive terminal facing the $E_1$ side. All cells have negligible internal resistance. Find the current in each branch.

**Solution:**

Define currents: $I_1$ flows from $E_1$ through $R_1$ to the junction, $I_2$ flows from $E_2$ through $R_2$ to the junction, and $I_3$ flows through $R_3$ and $E_3$ from the $E_1$ side to the $E_2$ side.

**KCL at the junction:**

$$I_1 + I_2 = I_3 \quad \text{--- (1)}$$

**KVL for Loop 1** (through $E_1$, $R_1$, $R_3$, $E_3$):

$$E_1 - I_1 R_1 - I_3 R_3 - E_3 = 0$$

$$12 - 4I_1 - 2I_3 - 4 = 0$$

$$8 - 4I_1 - 2I_3 = 0 \quad \text{--- (2)}$$

**KVL for Loop 2** (through $E_2$, $R_2$, $R_3$, $E_3$):

$$E_2 - I_2 R_2 - I_3 R_3 - E_3 = 0$$

$$6 - 6I_2 - 2I_3 - 4 = 0$$

$$2 - 6I_2 - 2I_3 = 0 \quad \text{--- (3)}$$

From (3): $I_2 = \frac{2 - 2I_3}{6} = \frac{1 - I_3}{3}$

From (2): $4I_1 = 8 - 2I_3$, so $I_1 = 2 - 0.5I_3$

Substituting into (1):

$$(2 - 0.5I_3) + \left(\frac{1 - I_3}{3}\right) = I_3$$

$$2 - 0.5I_3 + \frac{1}{3} - \frac{I_3}{3} = I_3$$

$$\frac{7}{3} = I_3 + 0.5I_3 + \frac{I_3}{3} = I_3\left(1 + 0.5 + \frac{1}{3}\right) = I_3 \times \frac{11}{6}$$

$$I_3 = \frac{7}{3} \times \frac{6}{11} = \frac{42}{33} = \frac{14}{11} = 1.273 \text{ A}$$

$$I_1 = 2 - 0.5 \times 1.273 = 1.364 \text{ A}$$

$$I_2 = \frac{1 - 1.273}{3} = \frac{-0.273}{3} = -0.0909 \text{ A}$$

$I_2$ is negative, meaning current actually flows into $E_2$ (the $6$ V cell is being charged).

**Key misconception:** Negative current in a branch does not indicate an error -- it simply means the assumed current direction was wrong. The magnitude is correct but the direction is reversed.

---

### UT-2: Internal Resistance and Maximum Power Transfer

**Question:**

A battery has an EMF of $24$ V and internal resistance $r = 2$ $\Omega$. It is connected to a variable external resistance $R$. (a) Find the value of $R$ for maximum power transfer. (b) Calculate the maximum power delivered to $R$. (c) Find the terminal PD and efficiency at maximum power transfer. (d) Sketch how the power delivered to $R$ varies with $R$.

**Solution:**

**(a) Maximum power transfer:**

Maximum power is delivered to the load when $R = r$:

$$R = 2 \text{ }\Omega$$

**(b) Maximum power:**

$$I = \frac{E}{R + r} = \frac{24}{2 + 2} = 6 \text{ A}$$

$$P_{\max} = I^2 R = 6^2 \times 2 = 72 \text{ W}$$

**(c) Terminal PD and efficiency at maximum power:**

$$V_{\text{terminal}} = E - Ir = 24 - 6 \times 2 = 12 \text{ V}$$

$$\eta = \frac{P_R}{P_{\text{total}}} = \frac{I^2 R}{IE} = \frac{IR}{E} = \frac{6 \times 2}{24} = 0.50 = 50\%$$

**(d) Power vs R relationship:**

$$P = I^2 R = \left(\frac{E}{R + r}\right)^2 R = \frac{E^2 R}{(R + r)^2} = \frac{576R}{(R + 2)^2}$$

Key points on the graph:
- $R = 0$: $P = 0$
- $R = 1$: $P = \frac{576}{9} = 64$ W
- $R = 2$: $P = 72$ W (maximum)
- $R = 4$: $P = \frac{2304}{36} = 64$ W
- $R \to \infty$: $P \to 0$

The curve is symmetric about $R = r$ on a logarithmic scale, but asymmetric on a linear scale.

**Key misconception:** Maximum power transfer occurs at 50% efficiency. For a battery, this means half the energy is wasted as heat in the internal resistance. In practice, batteries are designed so that $R \gg r$ for better efficiency, sacrificing some power.

---

### UT-3: Potentiometer Circuit Analysis

**Question:**

A potentiometer wire AB of length $100$ cm and resistance $10$ $\Omega$ is connected to a driver cell of EMF $6$ V and negligible internal resistance. A standard cell of EMF $1.018$ V gives a null point at $34.0$ cm. An unknown cell is then connected and the null point is found at $51.2$ cm. Find (a) the EMF of the unknown cell, (b) the potential gradient along the wire, and (c) the current through the potentiometer wire.

**Solution:**

**(a) EMF of unknown cell:**

At the null point, the potential drop along the wire equals the cell EMF:

$$\frac{E_{\text{unknown}}}{E_{\text{standard}}} = \frac{l_{\text{unknown}}}{l_{\text{standard}}}$$

$$E_{\text{unknown}} = 1.018 \times \frac{51.2}{34.0} = 1.018 \times 1.506 = 1.533 \text{ V}$$

**(b) Potential gradient:**

The potential drop across the full wire length equals the driver cell EMF (since no current is drawn at null point):

$$\text{Potential gradient} = \frac{6}{100} = 0.06 \text{ V cm}^{-1}$$

Verification: $0.06 \times 34.0 = 2.04$ V... but the standard cell is $1.018$ V. This means there must be a series resistor in the driver circuit. Let me reconsider.

Actually, the driver cell is connected across the FULL wire. The potential gradient is indeed $6/100 = 0.06$ V/cm, and the null point for the standard cell should be at $1.018/0.06 = 16.97$ cm. But the problem says $34.0$ cm.

This means there is a protective resistor in series with the potentiometer wire. Let $R_p$ be the protective resistance.

$$I_{\text{driver}} = \frac{6}{R_p + 10}$$

$$\text{Potential gradient} = I_{\text{driver}} \times \frac{10}{100} = \frac{60}{100(R_p + 10)} = \frac{0.6}{R_p + 10}$$

At null point: $E_{\text{standard}} = \text{gradient} \times 34.0$:

$$1.018 = \frac{0.6 \times 34.0}{R_p + 10} = \frac{20.4}{R_p + 10}$$

$$R_p + 10 = \frac{20.4}{1.018} = 20.04 \text{ }\Omega$$

$$R_p = 10.04 \text{ }\Omega$$

Potential gradient $= \frac{0.6}{20.04} = 0.02994$ V/cm.

**Revised answer for (a):**

$$E_{\text{unknown}} = \text{gradient} \times 51.2 = 0.02994 \times 51.2 = 1.533 \text{ V}$$

(The answer is the same since we used the ratio method, which is independent of the actual gradient.)

**(c) Current through the wire:**

$$I = \frac{6}{20.04} = 0.2994 \text{ A}$$

**Key insight:** A potentiometer draws NO current at the null point. This is why it gives more accurate EMF measurements than a voltmeter, which always draws some current.

---

## Integration Tests

### IT-1: Circuit with Multiple Cells and Internal Resistances (with Electricity and Magnetism)

**Question:**

Two cells are connected in parallel across an external resistor $R = 5$ $\Omega$. Cell 1 has EMF $E_1 = 12$ V and internal resistance $r_1 = 1$ $\Omega$. Cell 2 has EMF $E_2 = 10$ V and internal resistance $r_2 = 2$ $\Omega$. Find (a) the current through $R$, (b) the current from each cell, (c) the terminal PD of each cell, and (d) the power dissipated in $R$.

**Solution:**

**Equivalent circuit analysis using KVL:**

Let the junction where both cells meet be at potential $V_A$, and the other end of $R$ be at $V_B$.

Current from cell 1: $I_1 = \frac{E_1 - V}{r_1}$ (flowing out of cell 1)

Current from cell 2: $I_2 = \frac{E_2 - V}{r_2}$ (flowing out of cell 2)

Current through $R$: $I = \frac{V}{R}$

KCL: $I_1 + I_2 = I$

$$\frac{12 - V}{1} + \frac{10 - V}{2} = \frac{V}{5}$$

$$12 - V + 5 - 0.5V = 0.2V$$

$$17 = 1.7V$$

$$V = 10.0 \text{ V}$$

**(a) Current through $R$:**

$$I = \frac{V}{R} = \frac{10}{5} = 2.0 \text{ A}$$

**(b) Current from each cell:**

$$I_1 = \frac{12 - 10}{1} = 2.0 \text{ A}$$

$$I_2 = \frac{10 - 10}{2} = 0.0 \text{ A}$$

Cell 2 delivers no current. This makes sense because the terminal PD equals its EMF.

**(c) Terminal PD:**

Both cells have terminal PD $= 10.0$ V (they are in parallel across $R$).

**(d) Power in $R$:**

$$P = I^2 R = 4 \times 5 = 20 \text{ W}$$

**Key insight:** When cells of different EMFs are connected in parallel, the cell with the higher EMF may supply all the current while the lower-EMF cell delivers none (or even absorbs current if its EMF is much lower).

---

### IT-2: Wheatstone Bridge with Galvanometer (with Electricity and Magnetism)

**Question:**

A Wheatstone bridge has the following resistances: $P = 100$ $\Omega$, $Q = 200$ $\Omega$, $R = 150$ $\Omega$, and the unknown resistance $S$. A galvanometer of resistance $50$ $\Omega$ is connected between the junction of $P$ and $Q$ and the junction of $R$ and $S$. A battery of EMF $6$ V (negligible internal resistance) is connected across the bridge. The galvanometer shows zero deflection. Find the value of $S$ and the current through each resistor.

**Solution:**

**At balance (zero galvanometer current):**

$$\frac{P}{Q} = \frac{R}{S}$$

$$\frac{100}{200} = \frac{150}{S}$$

$$S = \frac{150 \times 200}{100} = 300 \text{ }\Omega$$

**Current through each arm:**

The galvanometer carries no current, so the circuit is effectively two parallel branches:

*Branch 1 (P and Q in series):* Total $= 100 + 200 = 300$ $\Omega$

$$I_1 = \frac{6}{300} = 0.02 \text{ A}$$

Current through $P = 0.02$ A, current through $Q = 0.02$ A.

*Branch 2 (R and S in series):* Total $= 150 + 300 = 450$ $\Omega$

$$I_2 = \frac{6}{450} = 0.01333 \text{ A}$$

Current through $R = 0.01333$ A, current through $S = 0.01333$ A.

**Total current from battery:**

$$I_{\text{total}} = I_1 + I_2 = 0.02 + 0.01333 = 0.03333 \text{ A}$$

**Key insight:** At balance, the galvanometer resistance is irrelevant -- no current flows through it regardless of its resistance. This is the fundamental principle of the Wheatstone bridge.

---

### IT-3: Charging and Discharging a Capacitor Through a Resistor (with Heat and Gases)

**Question:**

A $100$ $\mu$F capacitor is charged through a $50$ k$\Omega$ resistor by a $12$ V battery. (a) Find the time constant. (b) Calculate the charge on the capacitor after $5$ s. (c) Calculate the energy stored in the capacitor when fully charged. (d) How much energy is dissipated in the resistor during the full charging process?

**Solution:**

**(a) Time constant:**

$$\tau = RC = 50 \times 10^3 \times 100 \times 10^{-6} = 5 \text{ s}$$

**(b) Charge after 5 s (one time constant):**

$$Q(t) = Q_{\max}(1 - e^{-t/\tau})$$

$$Q_{\max} = CV = 100 \times 10^{-6} \times 12 = 1.2 \times 10^{-3} \text{ C}$$

$$Q(5) = 1.2 \times 10^{-3}(1 - e^{-1}) = 1.2 \times 10^{-3} \times 0.6321 = 7.585 \times 10^{-4} \text{ C}$$

**(c) Energy stored when fully charged:**

$$E = \frac{1}{2}CV^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 12^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 144 = 7.2 \times 10^{-3} \text{ J} = 7.2 \text{ mJ}$$

**(d) Energy dissipated in the resistor:**

Total energy supplied by battery during charging:

$$E_{\text{battery}} = Q_{\max} \times V = 1.2 \times 10^{-3} \times 12 = 14.4 \times 10^{-3} \text{ J} = 14.4 \text{ mJ}$$

Energy dissipated in resistor:

$$E_R = E_{\text{battery}} - E_C = 14.4 - 7.2 = 7.2 \text{ mJ}$$

**Key insight:** Exactly half the energy supplied by the battery is stored in the capacitor, and the other half is dissipated as heat in the resistor. This is always true for RC charging from a constant voltage source, regardless of $R$ and $C$ values.
