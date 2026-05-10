---
title: "Atomic Structure and Atomic Theory -- Diagnostic Tests"
description: "Diagnostic tests for IB Chemistry atomic structure: electron configuration, quantum numbers, periodic trends, and isotopic calculations."
slug: diag-atomic-structure
hide_table_of_contents: true
---

# Atomic Structure and Atomic Theory — Diagnostic Tests

## Unit Tests

### UT-1: Electron Configuration Exceptions
**Question:** Write the ground-state electron configurations for chromium ($Z = 24$) and copper ($Z = 29$). Explain why neither follows the expected aufbau filling order, referring to the relative stability of half-filled and fully filled $d$-subshells.

**Solution:** Chromium: expected $[Ar]\, 4s^2\, 3d^4$, actual $[Ar]\, 4s^1\, 3d^5$. Copper: expected $[Ar]\, 4s^2\, 3d^9$, actual $[Ar]\, 4s^1\, 3d^{10}$.

The $4s$ orbital is filled before $3d$ according to aufbau, but once electrons occupy the $3d$ subshell, the $3d$ orbital drops in energy below $4s$. A half-filled $d$-subshell ($d^5$) has extra exchange energy (five unpaired electrons, each with parallel spin), which lowers the total energy. A fully filled $d^{10}$ subshell has a symmetric spherically averaged charge distribution that minimises electron-electron repulsion. In Cr, promoting one $4s$ electron to $3d$ gives $d^5$ (half-filled) for a net energy gain. In Cu, promoting one $4s$ electron to $3d$ gives $d^{10}$ (fully filled) for a net energy gain.

---
### UT-2: Quantum Numbers and Orbital Maximums
**Question:** State the four quantum numbers ($n$, $\ell$, $m_\ell$, $m_s$) for each electron in a $2p^4$ configuration. How many electrons maximum can occupy the $n = 3$ shell, and why?

**Solution:** The $2p$ subshell has $n = 2$, $\ell = 1$, $m_\ell \in \{-1, 0, +1\}$, $m_s = \pm \tfrac{1}{2}$. With four electrons, applying Hund's rule (maximum multiplicity first):

| Electron | $n$ | $\ell$ | $m_\ell$ | $m_s$ |
|----------|-----|--------|-----------|--------|
| 1 | 2 | 1 | +1 | $+\tfrac{1}{2}$ |
| 2 | 2 | 1 | 0 | $+\tfrac{1}{2}$ |
| 3 | 2 | 1 | -1 | $+\tfrac{1}{2}$ |
| 4 | 2 | 1 | +1 | $-\tfrac{1}{2}$ |

The $n = 3$ shell has subshells $3s$ ($\ell = 0$, 2 electrons), $3p$ ($\ell = 1$, 6 electrons), and $3d$ ($\ell = 2$, 10 electrons). Maximum capacity: $2 + 6 + 10 = 18$ electrons.

---
### UT-3: Isotopic Abundance and Relative Atomic Mass
**Question:** Naturally occurring chlorine has two stable isotopes: $^{35}\text{Cl}$ (34.969 u) and $^{37}\text{Cl}$ (36.966 u). The relative atomic mass of chlorine is 35.453 u. Calculate the percentage abundance of each isotope to three significant figures.

**Solution:** Let $x$ be the fraction of $^{35}\text{Cl}$. Then $1 - x$ is the fraction of $^{37}\text{Cl}$.

$$34.969x + 36.966(1 - x) = 35.453$$

$$34.969x + 36.966 - 36.966x = 35.453$$

$$-1.997x = 35.453 - 36.966 = -1.513$$

$$x = \frac{1.513}{1.997} = 0.7576$$

$^{35}\text{Cl}$: $75.8\%$, $^{37}\text{Cl}$: $24.2\%$.

## Integration Tests

### IT-1: Periodic Trends and Shielding (with Periodicity)
**Question:** Explain why the first ionisation energy of aluminium ($1090\ \text{kJ mol}^{-1}$) is lower than that of magnesium ($1097\ \text{kJ mol}^{-1}$), even though aluminium has a greater nuclear charge. Then explain why the first ionisation energy of sulfur ($1000\ \text{kJ mol}^{-1}$) is lower than that of phosphorus ($1012\ \text{kJ mol}^{-1}$).

**Solution:** Both anomalies arise from the stability of half-filled and fully filled subshells.

Magnesium has the configuration $[Ne]\, 3s^2$ -- the $3s$ subshell is fully filled, which is a relatively stable arrangement. Aluminium has $[Ne]\, 3s^2\, 3p^1$; the $3p$ electron is in a higher-energy subshell that is also more effectively shielded (penetration effect of $s \gt p$). Despite the extra proton in Al, the electron being removed is from a higher-energy $p$ orbital with greater average distance from the nucleus, so less energy is required.

Phosphorus has $[Ne]\, 3s^2\, 3p^3$: three unpaired electrons in three separate $p$ orbitals (Hund's rule), giving a half-filled $p$-subshell with extra exchange stability. Sulfur has $[Ne]\, 3s^2\, 3p^4$: the fourth $p$ electron must pair with another electron in one of the $p$ orbitals. The pairing introduces additional electron-electron repulsion, making this electron easier to remove.

---
### IT-2: Emission Spectra and Energy Levels (with Measurement and Data Processing)
**Question:** A hydrogen emission line has a wavelength of $434.0\ \text{nm}$. Calculate the energy of one photon of this light, determine the transition responsible (express your answer as $n_i \to n_f$), and calculate the uncertainty in the energy if the wavelength measurement has an uncertainty of $\pm 0.5\ \text{nm}$.

**Solution:**

Energy: $E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34})(2.998 \times 10^8)}{434.0 \times 10^{-9}} = 4.576 \times 10^{-19}\ \text{J}$.

Converting to eV: $E = \frac{4.576 \times 10^{-19}}{1.602 \times 10^{-19}} = 2.857\ \text{eV}$.

The Balmer series has $n_f = 2$. The energy of level $n$ is $E_n = -13.6/n^2\ \text{eV}$.

$E_2 = -13.6/4 = -3.40\ \text{eV}$. The photon energy corresponds to $\Delta E = 2.857\ \text{eV}$.

$E_i = E_f + \Delta E = -3.40 + 2.857 = -0.543\ \text{eV}$.

$n_i = \sqrt{13.6/0.543} = \sqrt{25.04} \approx 5$. The transition is $n = 5 \to n = 2$.

Uncertainty: $\frac{\Delta E}{E} = \frac{\Delta\lambda}{\lambda}$ (from $E \propto 1/\lambda$, so $\Delta E = \frac{hc\,\Delta\lambda}{\lambda^2}$).

$\Delta E = \frac{hc \times 0.5 \times 10^{-9}}{(434.0 \times 10^{-9})^2} = \frac{9.936 \times 10^{-34}}{1.884 \times 10^{-13}} = 5.27 \times 10^{-21}\ \text{J} \approx 0.033\ \text{eV}$.

---
### IT-3: Electron Configuration and Chemical Properties (with Chemical Bonding)
**Question:** Sodium ($Z = 11$) readily forms $\text{Na}^+$, whereas neon ($Z = 10$) is chemically inert. Use electron configuration and ionisation energy data to explain this difference. The first three ionisation energies of sodium are $496$, $4562$, and $6912\ \text{kJ mol}^{-1}$. What do these values reveal about the stability of the $\text{Na}^+$ ion?

**Solution:** Na: $[Ne]\, 3s^1$. Ne: $1s^2\, 2s^2\, 2p^6 = [Ne]$.

Neon has a complete octet in the $n = 2$ shell -- all subshells are fully filled. Removing an electron from a filled $2p$ orbital requires breaking into a stable noble gas configuration, resulting in a very high first ionisation energy ($2081\ \text{kJ mol}^{-1}$). Neon therefore has no tendency to lose or gain electrons under normal conditions.

Sodium has a single $3s$ electron outside a filled $[Ne]$ core. This valence electron is far from the nucleus and well-shielded by the inner 10 electrons. The first ionisation energy ($496\ \text{kJ mol}^{-1}$) is relatively low, so Na readily loses this electron to form $\text{Na}^+$, achieving the stable $[Ne]$ configuration.

The huge jump between the first ($496$) and second ($4562$) ionisation energies confirms that removing the first electron is easy but removing a second electron requires breaking into the stable $[Ne]$ core. The ratio $4562/496 \approx 9.2$ shows that $\text{Na}^+$ is highly stable -- it is extremely energetically unfavourable to form $\text{Na}^{2+}$.
