---
title: Thermodynamics of Information Processing
tags:
  - Physics
  - University
---

### 20.1 Landauer Bound in Practice

The minimum energy dissipation per irreversible bit operation depends on the physical
implementation:

- **CMOS transistor** (2000s-era): $\sim 10^4\,k_BT$ per switch (vastly above the Landauer limit)
- **Modern CMOS** (7 nm node): $\sim 10^2$--$10^3\,k_BT$ per switch
- **Adiabatic / reversible logic proposals**: $\sim 1$--$10\,k_BT$ per operation (approaching the
  limit)

The gap between theory ($k_BT\ln 2 \approx 0.018$ eV at 300 K) and practice ($\sim 1$--$10$ fJ per
switch) spans 5--6 orders of magnitude. Closing this gap requires fundamentally different computing
paradigms.

### 20.2 Bennett's Clock and Reversible Computing

Bennett (1982) showed that a computer can be made logically reversible at every step if it never
erases information. Such a computer dissipates energy only during the initialisation of bits and
during optional output, not during computation.

A logically reversible computation can be embedded in a thermodynamically reversible process by
driving the system slowly enough that it remains near equilibrium at all times. The energy cost is
then:

$$E = \int_0^\tau \frac{\partial F}{\partial \lambda(t)}\,\dot{\lambda}(t)\,dt$$

For a quasi-static process: $E \to \Delta F$ (minimum possible).

**Fredkin and Toffoli gates** are examples of logically reversible logic gates. Any computation can
be made reversible by saving all intermediate results and running the computation in reverse to
restore the input tape.

## Worked Examples

### Example 1: Carnot efficiency

**Problem.** A Carnot engine operates between $500 \mathrm{ K}$ and $300 \mathrm{ K}$. Find the
maximum efficiency.

**Solution.** $\eta = 1 - T_C/T_H = 1 - 300/500 = 1 - 0.6 = 0.4 = 40\%$.

$\blacksquare$

### Example 2: Entropy change

**Problem.** Find the entropy change when $2 \mathrm{ mol}$ of ice at $0°\mathrm{C}$ melts
($\Delta H_{\text{fus}} = 6.01 \mathrm{ kJ/mol}$).

**Solution.**
$\Delta S = \frac{Q}{T} = \frac{n \Delta H_{\text{fus}}}{T} = \frac{2 \times 6010}{273} = 44.0 \mathrm{ J/K}$.

$\blacksquare$

## Summary

- First law: $\Delta U = Q - W$; conservation of energy.
- Second law: $\Delta S_{\text{universe}} \geq 0$; entropy of an isolated system never decreases.
- Carnot efficiency: $\eta = 1 - T_C/T_H$ (maximum possible for given temperatures).
- Statistical mechanics: $S = k_B \ln \Omega$; Boltzmann distribution:
  $p_i \propto e^{-E_i/(k_BT)}$.

## Cross-References

| Topic             | Site       | Link                                                                                                       |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Thermal Physics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/thermal-physics/01-thermal-properties) |
| [Thermal Physics] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/2-particulate-nature-of-matter/1_thermodynamics)             |
| [Thermal Physics] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/4-thermal-physics/1_heat-and-gases)                        |
| [Thermal Physics] | University | [View](https://university.wyattau.com/docs/physics/2-thermal-physics/1_thermal-physics)                    |

