---
title: "States of Matter -- Diagnostic Tests"
description: "Diagnostic tests for IB Chemistry states of matter: kinetic theory, gas laws, ideal gas equation deviations, and phase diagrams."
slug: diag-states-of-matter
hide_table_of_contents: true
---

# States of Matter — Diagnostic Tests

## Unit Tests

### UT-1: Ideal Gas Law and Unit Conversion
**Question:** A gas occupies $250\ \text{cm}^3$ at $25\ ^\circ\text{C}$ and $98.5\ \text{kPa}$. Calculate the volume it would occupy at STP ($0\ ^\circ\text{C}$, $101.3\ \text{kPa}$), giving your answer in $\text{dm}^3$ to three significant figures.

**Solution:** Use the combined gas law: $\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$.

$T_1 = 25 + 273.15 = 298.15\ \text{K}$, $T_2 = 273.15\ \text{K}$.

$V_2 = \frac{P_1 V_1 T_2}{P_2 T_1} = \frac{98.5 \times 250 \times 273.15}{101.3 \times 298.15}$

First, convert $250\ \text{cm}^3 = 0.250\ \text{dm}^3$.

$V_2 = \frac{98.5 \times 0.250 \times 273.15}{101.3 \times 298.15} = \frac{6725.06}{30192.0} = 0.2228\ \text{dm}^3$

$V_2 = 0.223\ \text{dm}^3$ (3 s.f.)

Common error: forgetting to convert $^\circ\text{C}$ to K. If Celsius were used directly, the answer would be nonsensically wrong.

---
### UT-2: Deviation from Ideal Gas Behaviour
**Question:** For which gas under which conditions would deviation from ideal behaviour be greatest: (a) $\text{He}$ at $50\ \text{K}$ and $1\ \text{atm}$, or (b) $\text{NH}_3$ at $400\ \text{K}$ and $1\ \text{atm}$? Justify your answer using the van der Waals equation concepts of intermolecular forces and molecular volume.

**Solution:** Deviation is greatest for (a) He at 50 K.

The ideal gas assumes: (1) no intermolecular forces, (2) negligible molecular volume. Deviations occur when these assumptions fail.

He is a noble gas with only London dispersion forces -- minimal intermolecular attractions. $\text{NH}_3$ has strong hydrogen bonding. At low temperature (50 K), He molecules have very low kinetic energy, so even weak LDF become significant relative to thermal energy. However, the stronger argument involves the real-gas correction: at low temperatures, all gases approach their condensation point, and the assumption of negligible molecular volume fails less than the assumption of negligible forces.

Actually, let us reconsider. The van der Waals constant $a$ (intermolecular forces) is larger for $\text{NH}_3$ than He. The constant $b$ (molecular volume) is similar for both small molecules. The reduced conditions matter more: $T_r = T/T_c$ where $T_c(\text{He}) = 5.2\ \text{K}$ and $T_c(\text{NH}_3) = 405.5\ \text{K}$. For He: $T_r = 50/5.2 = 9.6$ (far above critical, nearly ideal). For $\text{NH}_3$: $T_r = 400/405.5 = 0.99$ (near critical point, large deviations).

Therefore, deviation is greatest for **(b) $\text{NH}_3$ at 400 K and 1 atm**. Despite the higher temperature, $\text{NH}_3$ is near its critical point where intermolecular forces are most significant relative to kinetic energy. He at 50 K is still far above its critical temperature.

---
### UT-3: Maxwell-Boltzmann Distribution Application
**Question:** On a Maxwell-Boltzmann distribution curve, mark the most probable speed, mean speed, and root-mean-square speed. If the temperature of a gas is increased from $300\ \text{K}$ to $600\ \text{K}$, by what factor does the fraction of molecules with energy greater than the activation energy $E_a$ change, given that $E_a = 50\ \text{kJ mol}^{-1}$?

**Solution:** On the distribution: $v_{\text{mp}} \lt v_{\text{mean}} \lt v_{\text{rms}}$, all increasing with temperature. The peak shifts right and lowers.

The fraction of molecules with energy $\geq E_a$ is proportional to $\exp(-E_a/RT)$.

At $300\ \text{K}$: $\exp\left(\frac{-50000}{8.314 \times 300}\right) = \exp(-20.04) = 2.03 \times 10^{-9}$

At $600\ \text{K}$: $\exp\left(\frac{-50000}{8.314 \times 600}\right) = \exp(-10.02) = 4.50 \times 10^{-5}$

Factor: $\frac{4.50 \times 10^{-5}}{2.03 \times 10^{-9}} = 2.22 \times 10^{4} \approx 22000$.

Doubling the temperature increases the fraction of sufficiently energetic molecules by a factor of approximately 22000 -- a dramatic increase that explains the strong temperature dependence of reaction rates.

## Integration Tests

### IT-1: Gas Laws and Stoichiometry (with Stoichiometry)
**Question:** $0.150\ \text{g}$ of magnesium ribbon reacts completely with excess hydrochloric acid: $\text{Mg}(s) + 2\text{HCl}(aq) \to \text{MgCl}_2(aq) + \text{H}_2(g)$. The hydrogen gas is collected over water at $22\ ^\circ\text{C}$ and $100.5\ \text{kPa}$ total pressure. The vapour pressure of water at $22\ ^\circ\text{C}$ is $2.64\ \text{kPa}$. Calculate the volume of dry hydrogen gas produced.

**Solution:** First find the moles of Mg: $n(\text{Mg}) = \frac{0.150}{24.31} = 0.00617\ \text{mol}$.

From stoichiometry, $n(\text{H}_2) = n(\text{Mg}) = 0.00617\ \text{mol}$.

The pressure of dry $\text{H}_2$ = total pressure $-$ vapour pressure of water $= 100.5 - 2.64 = 97.86\ \text{kPa}$.

Using the ideal gas equation: $V = \frac{nRT}{P} = \frac{0.00617 \times 8.314 \times 295.15}{97.86}$.

$V = \frac{15.15}{97.86} = 0.1548\ \text{dm}^3 = 155\ \text{cm}^3$ (3 s.f.).

Key steps: (1) subtract water vapour pressure to get dry gas pressure, (2) use absolute temperature in K, (3) ensure consistent units ($R = 8.314\ \text{J K}^{-1}\text{ mol}^{-1}$ gives volume in $\text{m}^3$; convert to $\text{dm}^3$).

---
### IT-2: Phase Changes and Energetics (with Energetics)
**Question:** The enthalpy of vaporisation of water is $40.7\ \text{kJ mol}^{-1}$ at $100\ ^\circ\text{C}$ and the enthalpy of fusion is $6.01\ \text{kJ mol}^{-1}$ at $0\ ^\circ\text{C}$. Calculate the total energy required to convert $50.0\ \text{g}$ of ice at $-10\ ^\circ\text{C}$ to steam at $110\ ^\circ\text{C}$. Use: $c_{\text{ice}} = 2.09\ \text{J g}^{-1}\text{K}^{-1}$, $c_{\text{water}} = 4.18\ \text{J g}^{-1}\text{K}^{-1}$, $c_{\text{steam}} = 2.01\ \text{J g}^{-1}\text{K}^{-1}$.

**Solution:** Five stages:

1. Heat ice from $-10$ to $0\ ^\circ\text{C}$: $q_1 = mc\Delta T = 50.0 \times 2.09 \times 10 = 1045\ \text{J}$
2. Melt ice at $0\ ^\circ\text{C}$: $q_2 = n\Delta H_{\text{fus}} = \frac{50.0}{18.02} \times 6010 = 16676\ \text{J}$
3. Heat water from $0$ to $100\ ^\circ\text{C}$: $q_3 = 50.0 \times 4.18 \times 100 = 20900\ \text{J}$
4. Vaporise at $100\ ^\circ\text{C}$: $q_4 = \frac{50.0}{18.02} \times 40700 = 112986\ \text{J}$
5. Heat steam from $100$ to $110\ ^\circ\text{C}$: $q_5 = 50.0 \times 2.01 \times 10 = 1005\ \text{J}$

Total: $q_1 + q_2 + q_3 + q_4 + q_5 = 1045 + 16676 + 20900 + 112986 + 1005 = 152612\ \text{J} = 153\ \text{kJ}$ (3 s.f.)

Note that vaporisation ($q_4$) accounts for about 74% of the total energy -- phase changes require much more energy than temperature changes.

---
### IT-3: Gas Behaviour and Bonding (with Chemical Bonding)
**Question:** Explain why $\text{CO}_2$ sublimes rather than melts at $1\ \text{atm}$, referring to its phase diagram. Why does $\text{SiO}_2$ not have a triple point at accessible pressures? Relate both observations to the type of bonding in each substance.

**Solution:** $\text{CO}_2$ has a triple point at $-56.6\ ^\circ\text{C}$ and $5.11\ \text{atm}$. At $1\ \text{atm}$, the solid-gas equilibrium line lies below the solid-liquid line, meaning that at atmospheric pressure, solid $\text{CO}_2$ transforms directly to gas (sublimation) without passing through the liquid phase. This occurs because $\text{CO}_2$ consists of small, non-polar molecules with only weak London dispersion forces. Little energy is needed to separate molecules from the solid lattice, and at $1\ \text{atm}$ there is insufficient pressure to stabilise the liquid phase.

$\text{SiO}_2$ is a giant covalent (macromolecular) network solid where every Si atom is covalently bonded to four O atoms in a continuous tetrahedral framework. It does not have discrete molecules -- it has an extremely high melting point ($1713\ ^\circ\text{C}$). Any "triple point" would require extremely high temperatures and pressures far beyond normal laboratory conditions. The covalent bonds throughout the network must be broken (rather than merely overcome, as with intermolecular forces) to change state, making all phase transitions require enormous energy input.
