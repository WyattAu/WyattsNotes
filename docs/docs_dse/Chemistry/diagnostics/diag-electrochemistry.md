---
title: "Electrochemistry -- Diagnostic Tests"
description: Hardest diagnostic questions on electrochemistry within the DSE specification, each with a full worked solution.
slug: diag-electrochemistry
hide_table_of_contents: true
---

# DSE Chemistry Diagnostic: Electrochemistry

## Unit Test 1: Balancing Redox Equations

**Question**

Manganate(VII) ions ($MnO_{4}^{-}$) oxidise iron(II) ions ($Fe^{2+}$) to iron(III) ions ($Fe^{3+}$) in acidic medium, being reduced to manganese(II) ions ($Mn^{2+}$).

(a) Write the half-equation for the reduction of $MnO_{4}^{-}$ to $Mn^{2+}$ in acidic medium. [2 marks]

(b) Write the half-equation for the oxidation of $Fe^{2+}$ to $Fe^{3+}$. [1 mark]

(c) Combine the half-equations to give the balanced overall ionic equation. [2 marks]

---

**Worked Solution**

(a) Reduction (gain of electrons):

$$MnO_{4}^{-} + 8H^{+} + 5e^{-} \rightarrow Mn^{2+} + 4H_{2}O$$

Balancing check: Mn: 1, O: 4, H: 8, charge: $(-1) + 8(+1) + 5(-1) = +2$ on left; $+2 + 0 = +2$ on right. Balanced.

(b) Oxidation (loss of electrons):

$$Fe^{2+} \rightarrow Fe^{3+} + e^{-}$$

(c) To balance electrons, multiply the oxidation half-equation by 5:

$$5Fe^{2+} \rightarrow 5Fe^{3+} + 5e^{-}$$

Add to the reduction half-equation and cancel electrons:

$$MnO_{4}^{-} + 8H^{+} + 5Fe^{2+} \rightarrow Mn^{2+} + 5Fe^{3+} + 4H_{2}O$$

---

## Unit Test 2: Electrolysis Product Prediction

**Question**

Consider the electrolysis of **concentrated aqueous sodium chloride** using inert electrodes.

(a) Identify the products at the anode and cathode, giving reasons for your choices. [4 marks]

(b) Write the overall equation for the electrolysis. [1 mark]

(c) How would the products change if **dilute** aqueous sodium chloride were electrolysed instead? Explain. [3 marks]

---

**Worked Solution**

(a) **Cathode (negative electrode)**: $Na^{+}$ and $H_{2}O$ are present. $H_{2}O$ is reduced in preference to $Na^{+}$ (since $Na$ is very reactive, below hydrogen in the reactivity series; $H^{+}$ from water is more easily reduced):

$$2H_{2}O(l) + 2e^{-} \rightarrow H_{2}(g) + 2OH^{-}(aq)$$

Product: **hydrogen gas**.

**Anode (positive electrode)**: $Cl^{-}$ and $H_{2}O$ are present. In **concentrated** $NaCl$ solution, $Cl^{-}$ is discharged in preference to $H_{2}O$ (the overpotential of chlorine is lower than that of oxygen at the anode, and the high concentration of $Cl^{-}$ favours its discharge):

$$2Cl^{-}(aq) \rightarrow Cl_{2}(g) + 2e^{-}$$

Product: **chlorine gas**.

(b) Overall:

$$2NaCl(aq) + 2H_{2}O(l) \xrightarrow{\text{electrolysis}} Cl_{2}(g) + H_{2}(g) + 2NaOH(aq)$$

(c) In **dilute** aqueous $NaCl$:
- **Cathode**: Same as before -- $H_{2}O$ is still reduced to $H_{2}$ (since $Na^{+}$ is never discharged in aqueous solution).
- **Anode**: The low concentration of $Cl^{-}$ means $H_{2}O$ is now preferentially discharged:

$$4OH^{-}(aq) \rightarrow O_{2}(g) + 2H_{2}O(l) + 4e^{-}$$

or equivalently:

$$2H_{2}O(l) \rightarrow O_{2}(g) + 4H^{+}(aq) + 4e^{-}$$

Product at anode changes from **chlorine** to **oxygen**.

---

## Unit Test 3: Faraday's Calculations

**Question**

In the electrolysis of copper(II) sulphate solution using copper electrodes, a current of 0.500 A was passed for 30.0 minutes. The mass of the anode decreased by 0.296 g.

(a) Calculate the charge that passed through the solution. [2 marks]

(b) Calculate the theoretical mass of copper that should have deposited at the cathode. [3 marks]

(c) Calculate the percentage difference between the theoretical and actual mass change, and suggest a reason for any discrepancy. [2 marks]

---

**Worked Solution**

(a) $$Q = It = 0.500 \times 30.0 \times 60 = 900 \text{ C}$$

(b) At the cathode: $Cu^{2+} + 2e^{-} \rightarrow Cu$

Moles of electrons: $n(e^{-}) = \frac{Q}{F} = \frac{900}{96500} = 9.326 \times 10^{-3}$ mol

Moles of $Cu$ deposited: $n(Cu) = \frac{9.326 \times 10^{-3}}{2} = 4.663 \times 10^{-3}$ mol

$$m(Cu) = 4.663 \times 10^{-3} \times 63.5 = 0.296 \text{ g}$$

(c) The theoretical mass (0.296 g) matches the actual mass change at the anode (0.296 g) exactly in this case. This makes sense because with copper electrodes, the anode dissolves ($Cu \rightarrow Cu^{2+} + 2e^{-}$) at the same rate as copper deposits at the cathode. The concentration of $Cu^{2+}$ in solution remains constant, and the mass transfer is equal.

If there were a discrepancy, possible reasons would include:
- Current not being constant
- Side reactions (e.g., if the current density is too high, $H_{2}$ may be evolved at the cathode)
- Impurities in the copper electrodes
- Oxidation of the anode not involving just copper dissolution

---

## Integration Test 1: Electrochemical Series Predictions

**Question**

Given the following standard electrode potentials:

| Half-equation | $E^{\circ}$ (V) |
|--------------|-----------------|
| $Zn^{2+} + 2e^{-} \rightleftharpoons Zn$ | $-0.76$ |
| $Fe^{2+} + 2e^{-} \rightleftharpoons Fe$ | $-0.44$ |
| $2H^{+} + 2e^{-} \rightleftharpoons H_{2}$ | $0.00$ |
| $Cu^{2+} + 2e^{-} \rightleftharpoons Cu$ | $+0.34$ |
| $Ag^{+} + e^{-} \rightleftharpoons Ag$ | $+0.80$ |
| $Br_{2} + 2e^{-} \rightleftharpoons 2Br^{-}$ | $+1.07$ |

(a) Predict whether zinc will react with aqueous copper(II) sulphate. Write the equation and calculate the cell EMF. [3 marks]

(b) Predict whether silver will react with dilute hydrochloric acid. Explain. [2 marks]

(c) A student sets up a cell using $Zn|Zn^{2+}$ and $Ag|Ag^{+}$ half-cells. Calculate the standard cell EMF and state the direction of electron flow in the external circuit. [3 marks]

---

**Worked Solution**

(a) Yes, zinc will react with aqueous $CuSO_{4}$.

$Zn$ is a stronger reducing agent than $Cu$ (more negative $E^{\circ}$).

Oxidation: $Zn \rightarrow Zn^{2+} + 2e^{-}$ ($E^{\circ} = +0.76$ V as oxidation)

Reduction: $Cu^{2+} + 2e^{-} \rightarrow Cu$ ($E^{\circ} = +0.34$ V)

$$E^{\circ}_{\text{cell}} = 0.34 - (-0.76) = +1.10 \text{ V}$$

Since $E^{\circ}_{\text{cell}} \gt 0$, the reaction is feasible:

$$Zn(s) + Cu^{2+}(aq) \rightarrow Zn^{2+}(aq) + Cu(s)$$

(b) Silver will **not** react with dilute HCl.

$Ag$ has $E^{\circ} = +0.80$ V, which is more positive than $H^{+}/H_{2}$ ($E^{\circ} = 0.00$ V). Silver is **below** hydrogen in the electrochemical series, meaning $Ag$ is a weaker reducing agent than $H_{2}$. Silver cannot reduce $H^{+}$ to $H_{2}$.

$$E^{\circ}_{\text{cell}} = 0.00 - 0.80 = -0.80 \text{ V} \lt 0$$

The reaction is not feasible.

(c) Oxidation at anode: $Zn \rightarrow Zn^{2+} + 2e^{-}$

Reduction at cathode: $Ag^{+} + e^{-} \rightarrow Ag$

$$E^{\circ}_{\text{cell}} = E^{\circ}_{\text{cathode}} - E^{\circ}_{\text{anode}} = 0.80 - (-0.76) = +1.56 \text{ V}$$

Electrons flow from the **zinc electrode (anode)** through the external circuit to the **silver electrode (cathode)**.

---

## Integration Test 2: Electrolysis + Mass Calculation

**Question**

A student electrolysed molten aluminium oxide ($Al_{2}O_{3}$) using graphite electrodes with a current of 5.00 A for 2.00 hours.

(a) Write the half-equations occurring at the anode and cathode. [2 marks]

(b) Calculate the mass of aluminium produced at the cathode. [3 marks]

(c) The actual mass obtained was 2.80 g. Calculate the current efficiency. [2 marks]

---

**Worked Solution**

(a) Cathode (reduction): $Al^{3+} + 3e^{-} \rightarrow Al$

Anode (oxidation): $2O^{2-} \rightarrow O_{2} + 4e^{-}$

(b) $$Q = It = 5.00 \times 2.00 \times 3600 = 36000 \text{ C}$$

Moles of electrons: $n(e^{-}) = \frac{36000}{96500} = 0.3731$ mol

Moles of $Al$: $n(Al) = \frac{0.3731}{3} = 0.1244$ mol

$$m(Al) = 0.1244 \times 27.0 = 3.36 \text{ g}$$

(c) $$\text{Current efficiency} = \frac{\text{actual mass}}{\text{theoretical mass}} \times 100\% = \frac{2.80}{3.36} \times 100\% = 83.3\%$$

The efficiency is less than 100\% due to:
- Some current being used for side reactions (e.g., oxidation of the graphite anode to $CO_{2}$)
- Heat losses in the electrolytic cell
- Some aluminium re-oxidising before it is collected

---

## Integration Test 3: Cell EMF + Spontaneity

**Question**

Consider the following cell:

$$Sn(s) | Sn^{2+}(aq, 1.0 \text{ mol/dm}^{3}) || Cu^{2+}(aq, 1.0 \text{ mol/dm}^{3}) | Cu(s)$$

Standard electrode potentials: $Sn^{2+}/Sn = -0.14$ V; $Cu^{2+}/Cu = +0.34$ V.

(a) Identify the anode and cathode. Calculate the standard cell EMF. [2 marks]

(b) Write the overall cell reaction. [1 mark]

(c) If the concentration of $Sn^{2+}$ is increased to 5.0 mol/dm$^{3}$ while $[Cu^{2+}]$ remains at 1.0 mol/dm$^{3}$, use the Nernst equation to predict the effect on the cell EMF. [4 marks]

---

**Worked Solution**

(a) **Anode**: $Sn$ electrode (oxidation occurs; $Sn$ has the more negative $E^{\circ}$).

**Cathode**: $Cu$ electrode (reduction occurs).

$$E^{\circ}_{\text{cell}} = E^{\circ}_{\text{cathode}} - E^{\circ}_{\text{anode}} = 0.34 - (-0.14) = +0.48 \text{ V}$$

(b) $Sn(s) + Cu^{2+}(aq) \rightarrow Sn^{2+}(aq) + Cu(s)$

(c) Using the Nernst equation for the cell reaction $Sn + Cu^{2+} \rightarrow Sn^{2+} + Cu$ (2 electrons transferred):

$$E_{\text{cell}} = E^{\circ}_{\text{cell}} - \frac{RT}{nF}\ln Q$$

At 298 K:

$$E_{\text{cell}} = E^{\circ}_{\text{cell}} - \frac{0.0592}{n}\log Q$$

$$Q = \frac{[Sn^{2+}]}{[Cu^{2+}]} = \frac{5.0}{1.0} = 5.0$$

$$E_{\text{cell}} = 0.48 - \frac{0.0592}{2}\log(5.0)$$

$$= 0.48 - 0.0296 \times 0.699$$

$$= 0.48 - 0.0207 = 0.459 \text{ V}$$

The cell EMF **decreases** from 0.48 V to 0.459 V. Increasing $[Sn^{2+}]$ (product concentration) shifts the equilibrium towards the reactants, reducing the driving force for the forward reaction.

Note: In the DSE context, the Nernst equation is often presented as $E = E^{\circ} + \frac{0.0592}{n}\log\frac{[\text{oxidised}]}{[\text{reduced}]}$ applied to each half-cell separately. The conclusion is the same: increasing $[Sn^{2+}]$ makes the tin half-cell potential more positive, reducing the overall cell potential.
