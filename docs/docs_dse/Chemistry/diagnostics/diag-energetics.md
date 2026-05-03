---
title: "Energetics / Thermochemistry -- Diagnostic Tests"
description: Hardest diagnostic questions on energetics / thermochemistry within the DSE specification, each with a full worked solution.
slug: diag-energetics-thermochemistry
hide_table_of_contents: true
---

# DSE Chemistry Diagnostic: Energetics / Thermochemistry

## Unit Test 1: Hess's Law Cycle Construction

**Question**

Given the following standard enthalpy changes:

| Reaction | $\Delta H$ (kJ/mol) |
|----------|---------------------|
| $C(s) + O_{2}(g) \rightarrow CO_{2}(g)$ | $-393.5$ |
| $H_{2}(g) + \frac{1}{2}O_{2}(g) \rightarrow H_{2}O(l)$ | $-285.8$ |
| $CH_{4}(g) + 2O_{2}(g) \rightarrow CO_{2}(g) + 2H_{2}O(l)$ | $-890.3$ |

(a) Using Hess's law, calculate the standard enthalpy of formation of methane, $\Delta H_{f}^{\circ}(CH_{4})$. [4 marks]

(b) Draw a Hess's law cycle that clearly shows the two alternative routes from elements to products. [2 marks]

(c) A student writes $\Delta H_{f}^{\circ}(CH_{4}) = -393.5 - 285.8 - (-890.3) = +210.6$ kJ/mol. Identify the error in the student's working. [2 marks]

---

**Worked Solution**

(a) Target: $C(s) + 2H_{2}(g) \rightarrow CH_{4}(g)$

Using the cycle: elements $\rightarrow$ products (via elements $\rightarrow$ methane $\rightarrow$ products or directly).

$$\Delta H_{f}^{\circ}(CH_{4}) + \Delta H_{c}^{\circ}(CH_{4}) = \Delta H_{f}^{\circ}(CO_{2}) + 2\Delta H_{f}^{\circ}(H_{2}O)$$

$$\Delta H_{f}^{\circ}(CH_{4}) + (-890.3) = (-393.5) + 2 \times (-285.8)$$

$$\Delta H_{f}^{\circ}(CH_{4}) - 890.3 = -393.5 - 571.6$$

$$\Delta H_{f}^{\circ}(CH_{4}) - 890.3 = -965.1$$

$$\Delta H_{f}^{\circ}(CH_{4}) = -965.1 + 890.3 = -74.8 \text{ kJ/mol}$$

(b) Hess's cycle:

```
C(s) + 2H2(g) --[ΔHf°(CH4)]--> CH4(g)
     |                                |
     |                                | [ΔHc°(CH4)]
     |                                v
     +---[ΔHf°(CO2) + 2ΔHf°(H2O)]--> CO2(g) + 2H2O(l)
```

Route 1: Elements $\rightarrow$ Methane $\rightarrow$ Products: $\Delta H_{f}^{\circ}(CH_{4}) + \Delta H_{c}^{\circ}(CH_{4})$

Route 2: Elements $\rightarrow$ Products (directly): $\Delta H_{f}^{\circ}(CO_{2}) + 2\Delta H_{f}^{\circ}(H_{2}O)$

(c) The student's arithmetic is correct ($-393.5 - 571.6 + 890.3 = -74.8$), but the **numerical answer** they obtained ($+210.6$) is wrong because they **only subtracted one** $\Delta H_{f}^{\circ}(H_{2}O)$ instead of two. The combustion of methane produces **two** moles of water, so $2 \times (-285.8)$ must be used. The student calculated: $-393.5 - 285.8 + 890.3 = +211.0$ (not even their stated answer of 210.6). The correct calculation requires the factor of 2.

---

## Unit Test 2: Average Bond Enthalpy vs Exact

**Question**

The standard enthalpy change for the reaction $H_{2}(g) + Cl_{2}(g) \rightarrow 2HCl(g)$ is $-184.6$ kJ/mol.

(a) Using average bond enthalpies ($H-H = 436$ kJ/mol, $Cl-Cl = 242$ kJ/mol, $H-Cl = 431$ kJ/mol), calculate the enthalpy change for this reaction. [3 marks]

(b) Explain why the value obtained in (a) differs from the actual value of $-184.6$ kJ/mol. [3 marks]

(c) Which type of calculation is more accurate: using average bond enthalpies or using standard enthalpy of formation data? Explain. [2 marks]

---

**Worked Solution**

(a) Bonds broken:

$$H-H: 436 \text{ kJ/mol}$$
$$Cl-Cl: 242 \text{ kJ/mol}$$
$$\text{Total} = 436 + 242 = 678 \text{ kJ/mol}$$

Bonds formed:

$$2 \times H-Cl = 2 \times 431 = 862 \text{ kJ/mol}$$

$$\Delta H = 678 - 862 = -184 \text{ kJ/mol}$$

(b) The calculated value ($-184$) is very close to the actual value ($-184.6$), but the small difference arises because:

1. **Average bond enthalpies** are averages taken over many different compounds containing that bond type. The actual $H-Cl$ bond enthalpy in $HCl(g)$ may differ slightly from the average value.
2. Average bond enthalpies are typically given for species in the **gaseous state** at 298 K and refer to the mean bond dissociation enthalpy, which may differ from the specific bond enthalpy in this particular reaction.
3. The bond enthalpy values have experimental uncertainties.

(c) Using **standard enthalpy of formation data** is more accurate because these are experimentally measured values specific to each compound, rather than averages. Average bond enthalpies introduce error because the actual bond energy in a specific molecule can deviate from the average due to the molecular environment.

---

## Unit Test 3: Calorimetry with Heat Loss

**Question**

50.0 cm$^{3}$ of 1.00 mol/dm$^{3}$ $HCl$ was mixed with 50.0 cm$^{3}$ of 1.00 mol/dm$^{3}$ $NaOH$ in a polystyrene cup. The temperature rose from 20.0$^{\circ}$C to 26.7$^{\circ}$C.

(a) Calculate the enthalpy change of neutralisation per mole of water formed. [4 marks]

(b) The theoretical value is $-57.1$ kJ/mol. Calculate the percentage error and suggest a reason for any discrepancy. [2 marks]

(c) A student claims that using a glass beaker instead of a polystyrene cup would give a more accurate result. Evaluate this claim. [2 marks]

---

**Worked Solution**

(a) Assume density of solution = 1.00 g/cm$^{3}$ and specific heat capacity = 4.18 J/(g$\cdot$K).

Total volume = $50.0 + 50.0 = 100.0$ cm$^{3}$

Mass of solution = $100.0$ g

Temperature change = $26.7 - 20.0 = 6.7$ K

$$q = mc\Delta T = 100.0 \times 4.18 \times 6.7 = 2800.6 \text{ J} = 2.80 \text{ kJ}$$

Moles of water formed:

$$n(HCl) = 1.00 \times 0.0500 = 0.0500 \text{ mol}$$
$$n(NaOH) = 1.00 \times 0.0500 = 0.0500 \text{ mol}$$
$$n(H_{2}O) = 0.0500 \text{ mol} \text{ (limiting reagent = both, equimolar)}$$

$$\Delta H = \frac{-q}{n} = \frac{-2.80}{0.0500} = -56.0 \text{ kJ/mol}$$

(b) $$\%\text{ error} = \frac{|-56.0 - (-57.1)|}{57.1} \times 100\% = \frac{1.1}{57.1} \times 100\% = 1.9\%$$

The discrepancy is due to **heat loss to the surroundings** (the polystyrene cup is not a perfect insulator) and the heat absorbed by the cup itself (which was not accounted for in the calculation).

(c) The claim is **incorrect**. A glass beaker is a much better conductor of heat than a polystyrene cup, so more heat would be lost to the surroundings. This would result in a **smaller** temperature rise and a less exothermic (less negative) $\Delta H$ value, increasing the error.

---

## Integration Test 1: Hess's Law + Bond Enthalpy Comparison

**Question**

Given:
- $\Delta H_{f}^{\circ}(C_{2}H_{4}, g) = +52.2$ kJ/mol
- $\Delta H_{f}^{\circ}(C_{2}H_{6}, g) = -84.7$ kJ/mol
- Bond enthalpies: $C=C = 612$, $C-C = 348$, $C-H = 412$, $H-H = 436$ (all in kJ/mol)

(a) Calculate the enthalpy change for the hydrogenation of ethene using standard enthalpy of formation data:

$$C_{2}H_{4}(g) + H_{2}(g) \rightarrow C_{2}H_{6}(g)$$

[2 marks]

(b) Calculate the same enthalpy change using average bond enthalpies. [4 marks]

(c) Account for any difference between the two values obtained in (a) and (b). [3 marks]

---

**Worked Solution**

(a) $$\Delta H_{\text{rxn}} = \Delta H_{f}^{\circ}(C_{2}H_{6}) - \Delta H_{f}^{\circ}(C_{2}H_{4}) - \Delta H_{f}^{\circ}(H_{2})$$

$$= -84.7 - 52.2 - 0 = -136.9 \text{ kJ/mol}$$

(b) Bonds broken:
- $C=C$: 612 kJ/mol
- $H-H$: 436 kJ/mol
- $4 \times C-H$: $4 \times 412 = 1648$ kJ/mol (the 4 $C-H$ bonds on the $CH_{2}=CH_{2}$ that remain)

Wait -- let me be more careful. In $C_{2}H_{4}$ ($H_{2}C=CH_{2}$): there are $1 \times C=C$, $4 \times C-H$ bonds. In $H_{2}$: $1 \times H-H$.

Bonds broken: $C=C + H-H + 4 \times C-H = 612 + 436 + 1648 = 2696$ kJ/mol

Bonds formed (in $C_{2}H_{6}$, $H_{3}C-CH_{3}$): $1 \times C-C + 6 \times C-H = 348 + 6 \times 412 = 348 + 2472 = 2820$ kJ/mol

$$\Delta H = 2696 - 2820 = -124 \text{ kJ/mol}$$

(c) The value from formation data ($-136.9$ kJ/mol) differs from the bond enthalpy value ($-124$ kJ/mol) by 12.9 kJ/mol.

Reasons:
1. Average bond enthalpies are averaged over many different compounds. The actual $C-H$ bond enthalpy in ethane differs from the average $C-H$ bond enthalpy because the electronic environment around each $C-H$ bond varies.
2. The $C=C$ bond enthalpy in ethene specifically may differ from the average $C=C$ bond enthalpy.
3. The bond enthalpy of $H-H$ in $H_{2}$ gas is well-defined, but the $C-C$ and $C-H$ values are averages.

---

## Integration Test 2: Born-Haber-Type Cycle

**Question**

The enthalpy of formation of magnesium oxide is $-601.6$ kJ/mol.

Given:
- Enthalpy of atomisation of Mg: $+147.1$ kJ/mol
- First ionisation energy of Mg: $+738$ kJ/mol
- Second ionisation energy of Mg: $+1451$ kJ/mol
- Bond dissociation enthalpy of $O_{2}$: $+498$ kJ/mol
- First electron affinity of O: $-141$ kJ/mol
- Second electron affinity of O: $+798$ kJ/mol

(a) Construct a Born-Haber cycle for the formation of $MgO(s)$ from its elements. [3 marks]

(b) Use the Born-Haber cycle to calculate the lattice enthalpy of $MgO(s)$. [3 marks]

(c) Explain why the second electron affinity of oxygen is endothermic. [2 marks]

---

**Worked Solution**

(a) Born-Haber cycle:

```
Mg(s) + 1/2 O2(g) --[ΔHf°]--> MgO(s)
     |                              |
     | +147.1                       | [ΔHlattice]
     v                              v
Mg(g) + 1/2 O2(g)                  Mg2+(g) + O2-(g)
     |                              ^
     | +738, +1451                  |
     v                              | -141, +798
Mg2+(g) + 1/2 O2(g)                 |
     |                              |
     | +249 (1/2 x 498)             |
     v                              |
Mg2+(g) + O(g) ---------------------+
```

(b) Hess's law:

$$\Delta H_{f}^{\circ} = \Delta H_{\text{atom}}(Mg) + IE_{1} + IE_{2} + \frac{1}{2}\Delta H_{\text{diss}}(O_{2}) + EA_{1} + EA_{2} + \Delta H_{\text{lattice}}$$

$$-601.6 = 147.1 + 738 + 1451 + 249 + (-141) + 798 + \Delta H_{\text{lattice}}$$

$$-601.6 = 147.1 + 738 + 1451 + 249 - 141 + 798 + \Delta H_{\text{lattice}}$$

Sum of all terms except lattice: $147.1 + 738 + 1451 + 249 - 141 + 798 = 3242.1$

$$-601.6 = 3242.1 + \Delta H_{\text{lattice}}$$

$$\Delta H_{\text{lattice}} = -601.6 - 3242.1 = -3843.7 \text{ kJ/mol}$$

(c) The second electron affinity of oxygen is endothermic because the $O^{-}$ ion already carries a negative charge. Adding a second electron to $O^{-}$ requires overcoming **electrostatic repulsion** between the incoming electron and the existing negative charge. Energy must be supplied to force the second electron onto the negatively charged ion.

---

## Integration Test 3: Multi-Step Energetics

**Question**

Methanol ($CH_{3}OH$) can be used as a fuel. The complete combustion of methanol is:

$$2CH_{3}OH(l) + 3O_{2}(g) \rightarrow 2CO_{2}(g) + 4H_{2}O(l) \quad \Delta H = -1452 \text{ kJ/mol (for the equation as written)}$$

The standard enthalpy of formation of $CO_{2}(g)$ is $-393.5$ kJ/mol and of $H_{2}O(l)$ is $-285.8$ kJ/mol.

(a) Calculate the standard enthalpy of formation of methanol, $CH_{3}OH(l)$. [3 marks]

(b) Calculate the enthalpy change when 10.0 g of methanol is burned completely. [2 marks]

(c) When 10.0 g of methanol was burned to heat 500 g of water, the temperature of the water rose by 31.2$^{\circ}$C. Calculate the experimental enthalpy of combustion per mole of methanol and the percentage efficiency of the experiment. [4 marks]

---

**Worked Solution**

(a) For 2 mol of methanol:

$$\Delta H_{\text{rxn}} = 2\Delta H_{f}^{\circ}(CO_{2}) + 4\Delta H_{f}^{\circ}(H_{2}O) - 2\Delta H_{f}^{\circ}(CH_{3}OH) - 3\Delta H_{f}^{\circ}(O_{2})$$

$$-1452 = 2(-393.5) + 4(-285.8) - 2\Delta H_{f}^{\circ}(CH_{3}OH) - 0$$

$$-1452 = -787.0 - 1143.2 - 2\Delta H_{f}^{\circ}(CH_{3}OH)$$

$$-1452 = -1930.2 - 2\Delta H_{f}^{\circ}(CH_{3}OH)$$

$$2\Delta H_{f}^{\circ}(CH_{3}OH) = -1930.2 + 1452 = -478.2$$

$$\Delta H_{f}^{\circ}(CH_{3}OH) = -239.1 \text{ kJ/mol}$$

(b) $$M(CH_{3}OH) = 12.0 + 4 \times 1.0 + 16.0 + 1.0 = 32.0 \text{ g/mol}$$

$$n(CH_{3}OH) = \frac{10.0}{32.0} = 0.3125 \text{ mol}$$

Enthalpy change per mole = $\frac{-1452}{2} = -726$ kJ/mol

$$\Delta H = 0.3125 \times (-726) = -226.9 \text{ kJ}$$

(c) Heat absorbed by water:

$$q = mc\Delta T = 500 \times 4.18 \times 31.2 = 65208 \text{ J} = 65.2 \text{ kJ}$$

Experimental enthalpy of combustion per mole:

$$\Delta H_{\text{exp}} = \frac{-65.2}{0.3125} = -208.6 \text{ kJ/mol}$$

Percentage efficiency:

$$\%\text{ efficiency} = \frac{208.6}{726} \times 100\% = 28.7\%$$

This low efficiency is due to significant heat loss to the surroundings, incomplete combustion, and heat absorbed by the container.
