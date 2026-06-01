---
title: Coordination Chemistry
description:
  'University Coordination Chemistry notes covering key definitions, core concepts, worked examples,
  and practice questions for effective revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/coordination-chemistry
---

## 1. Crystal Field Theory

### 1.1 The Crystal Field Concept

**Definition 1 (Crystal Field Theory):** A model in which ligands are treated as point charges (or
point dipoles) that interact electrostatically with the $d$ orbitals of the central metal ion.

### 1.2 Octahedral Complexes

In an octahedral field, the five $d$ orbitals split into two groups:

**Theorem 1 (Octahedral Crystal Field Splitting):**

$$\Delta_o = 10\,Dq$$

- **$e_g$ orbitals ($d_{z^2}$, $d_{x^2-y^2}$):** Higher energy, point directly at ligands.
- **$t_{2g}$ orbitals ($d_{xy}$, $d_{xz}$, $d_{yz}$):** Lower energy, point between ligands.

$$E(e_g) = +0.6\,\Delta_o = +6\,Dq$$ $$E(t_{2g}) = -0.4\,\Delta_o = -4\,Dq$$

The barycenter (weighted average) is preserved: $2(+6\,Dq) + 3(-4\,Dq) = 0$.

**Example 1:** For $[\text{Ti(H}_2\text{O)}_6]^{3+}$ ($d^1$), the single electron occupies $t_{2g}$.
The absorption at 20,300 cm$^{-1}$ gives $\Delta_o = 20,300$ cm$^{-1}$ = 243 kJ/mol.

$\blacksquare$

### 1.3 Tetrahedral Complexes

**Theorem 2 (Tetrahedral Crystal Field Splitting):**

$$\Delta_t = \frac{4}{9}\Delta_o$$

The splitting is inverted and smaller:

- **$e$ orbitals (lower):** $d_{z^2}$, $d_{x^2-y^2}$
- **$t_2$ orbitals (higher):** $d_{xy}$, $d_{xz}$, $d_{yz}$

$$E(t_2) = +0.6\,\Delta_t, \quad E(e) = -0.4\,\Delta_t$$

### 1.4 Square Planar Complexes

Derived from octahedral by removing the two axial ligands. The $d$-orbital energies:

$$d_{x^2-y^2} > d_{xy} > d_{z^2} > d_{xz}, d_{yz}$$

Square planar complexes are common for $d^8$ metals (Ni$^{2+}$, Pd$^{2+}$, Pt$^{2+}$, Au$^{3+}$).

| Geometry      | Most stable $d$-electron count | Common metals                   |
| ------------- | ------------------------------ | ------------------------------- |
| Octahedral    | $d^3$, $d^6$ (low-spin)        | Cr$^{3+}$, Co$^{3+}$            |
| Tetrahedral   | $d^{10}$, $d^5$ (high-spin)    | Zn$^{2+}$, Fe$^{2+}$            |
| Square planar | $d^8$                          | Ni$^{2+}$, Pd$^{2+}$, Pt$^{2+}$ |

## 2. Spectrochemical Series and $\Delta$

### 2.1 The Spectrochemical Series

**Definition 2 (Spectrochemical Series):** Ranking of ligands by their ability to split $d$ orbitals
(weak-field to strong-field):

$$\text{I}^- < \text{Br}^- < \text{Cl}^- < \text{SCN}^- < \text{F}^- < \text{OH}^- < \text{ox}^{2-} < \text{H}_2\text{O} < \text{NCS}^- < \text{NH}_3 < \text{en} < \text{bipy} < \text{NO}_2^- < \text{CN}^- < \text{CO}$$

**Spectrochemical series of metals:**

$$\text{Mn}^{2+} < \text{Ni}^{2+} < \text{Co}^{2+} < \text{Fe}^{2+} < \text{Fe}^{3+} < \text{Cr}^{3+} < \text{Co}^{3+} < \text{Rh}^{3+} < \text{Ir}^{3+} < \text{Pt}^{4+}$$

Higher oxidation states and heavier metals produce larger $\Delta$.

### 2.2 Factors Affecting $\Delta$

$$\Delta \propto \frac{Z\,q}{r^5}$$

where $Z$ is the metal charge, $q$ is the ligand charge, and $r$ is the metal-ligand distance.

- Higher metal oxidation state → larger $\Delta$.
- Stronger ligand field → larger $\Delta$.
- 4d and 5d metals → larger $\Delta$ (diffuse orbitals interact more with ligands).

## 3. High-Spin vs Low-Spin Complexes

### 3.1 The Decision

**Theorem 3 (High-Spin vs Low-Spin):** When pairing energy $P$ is compared to $\Delta$:

- **$\Delta < P$:** High-spin (weak field). Electrons fill all orbitals singly before pairing.
- **$\Delta > P$:** Low-spin (strong field). Electrons pair in lower orbitals before occupying upper
  orbitals.

**Only octahedral $d^4$–$d^7$ complexes have a high-spin/low-spin choice.**

### 3.2 Electron Configurations

| $d^n$ | High-spin (weak field)         | Low-spin (strong field)        |
| ----- | ------------------------------ | ------------------------------ |
| $d^4$ | $t_{2g}^3\,e_g^1$ (4 unpaired) | $t_{2g}^4\,e_g^0$ (2 unpaired) |
| $d^5$ | $t_{2g}^3\,e_g^2$ (5 unpaired) | $t_{2g}^5\,e_g^0$ (1 unpaired) |
| $d^6$ | $t_{2g}^4\,e_g^2$ (4 unpaired) | $t_{2g}^6\,e_g^0$ (0 unpaired) |
| $d^7$ | $t_{2g}^5\,e_g^2$ (3 unpaired) | $t_{2g}^6\,e_g^1$ (1 unpaired) |

**Example 2:** $[\text{Fe(H}_2\text{O)}_6]^{2+}$ ($d^6$, $\Delta_o \approx 10,400$ cm$^{-1}$):
High-spin ($\Delta_o < P$), $t_{2g}^4\,e_g^2$, 4 unpaired electrons.

$[\text{Fe(CN)}_6]^{4-}$ ($d^6$, $\Delta_o \approx 32,200$ cm$^{-1}$): Low-spin ($\Delta_o > P$),
$t_{2g}^6\,e_g^0$, 0 unpaired electrons.

$\blacksquare$

## 4. Crystal Field Stabilization Energy (CFSE)

### 4.1 Calculation

**Definition 3 (CFSE):** The net energy lowering of a complex relative to the barycenter:

$$\text{CFSE} = n_{t_{2g}}(-4\,Dq) + n_{e_g}(+6\,Dq) + n_p\,P$$

where $n_{t_{2g}}$ and $n_{e_g}$ are electron counts, $P$ is the pairing energy, and $n_p$ is the
number of extra electron pairs relative to the high-spin configuration.

**Example 3:** CFSE for $d^6$ low-spin octahedral:

$$\text{CFSE} = 6(-4\,Dq) + 0(+6\,Dq) + 3P = -24\,Dq + 3P$$

For $d^6$ high-spin:

$$\text{CFSE} = 4(-4\,Dq) + 2(+6\,Dq) + 0P = -4\,Dq$$

$\blacksquare$

### 4.2 CFSE and Thermodynamic Properties

CFSE contributes to:

- **Lattice energies** (hydrated transition metal ions).
- **Hydration enthalpies** (dip in the series at $d^3$, $d^8$ due to extra stabilization).
- **Ligand substitution rates** (low-spin $d^6$ is inert; high-spin $d^5$ is labile).

## 5. Ligand Field Theory

### 5.1 Beyond Crystal Field Theory

**Definition 4 (Ligand Field Theory):** An extension of CFT that includes covalent bonding (sigma
and pi interactions between metal and ligand orbitals) alongside electrostatic effects.

### 5.2 Sigma Bonding

Ligand donor orbitals overlap with metal $d_{z^2}$, $d_{x^2-y^2}$, $s$, $p_x$, $p_y$, $p_z$ to form
$\sigma$ bonding and $\sigma^*$ antibonding molecular orbitals.

### 5.3 Pi Bonding

**Pi-donor ligands** (e.g., F$^-$, O$^{2-}$, Cl$^-$):

- Donate electron density into empty metal $t_{2g}$ orbitals.
- Decrease $\Delta_o$ (weak field).
- Examples: halides, oxide, hydroxide.

**Pi-acceptor ligands** (e.g., CO, CN$^-$, NO):

- Accept electron density from filled metal $t_{2g}$ orbitals into empty ligand $\pi^*$ orbitals.
- Increase $\Delta_o$ (strong field).
- Examples: CO, CN$^-$, phosphines (PR$_3$).

**This explains the spectrochemical series:** $\pi$-acceptors > no $\pi$ interaction > $\pi$-donors.

## 6. The Jahn-Teller Effect

### 6.1 Statement

**Theorem 4 (Jahn-Teller Theorem):** Any nonlinear molecular system in a degenerate electronic state
will undergo distortion to remove the degeneracy.

### 6.2 Octahedral Jahn-Teller Distortion

**High-spin $d^4$** ($t_{2g}^3\,e_g^1$): One electron in $e_g$ — the complex elongates along one
axis to lower the energy of the singly occupied orbital.

**Low-spin $d^7$** ($t_{2g}^6\,e_g^1$): Same $e_g$ degeneracy — elongation.

**$d^9$** ($t_{2g}^6\,e_g^3$): One hole in $e_g$ — strong Jahn-Teller effect (e.g., Cu$^{2+}$).

**Examples:**

- $[\text{Cu(H}_2\text{O)}_6]^{2+}$: Two long axial bonds (~2.4 Å) and four short equatorial bonds
  (~2.0 Å).
- $[\text{Mn(H}_2\text{O)}_6]^{3+}$ ($d^4$, high-spin): Elongated octahedral.

### 6.3 Consequences

- Splitting of $d$-orbital degeneracy leads to additional spectroscopic transitions.
- Structural distortions lower symmetry.
- $d^3$, $d^5$ (high-spin), and $d^8$ (low-spin) have no Jahn-Teller distortion (no degeneracy in
  $e_g$ or $t_{2g}$).

## 7. Magnetism

### 7.1 Spin-Only Formula

**Theorem 5 (Spin-Only Magnetic Moment):**

$$\mu_{\text{eff}} = \sqrt{n(n+2)}\,\mu_B$$

where $n$ is the number of unpaired electrons and $\mu_B = 9.274 \times 10^{-24}$ J/T is the Bohr
magneton.

| Unpaired Electrons $n$ | $\mu_{\text{eff}}$ ($\mu_B$) |
| ---------------------- | ---------------------------- |
| 1                      | 1.73                         |
| 2                      | 2.83                         |
| 3                      | 3.87                         |
| 4                      | 4.90                         |
| 5                      | 5.92                         |

### 7.2 Magnetic Properties

- **Diamagnetic:** All electrons paired; $\mu_{\text{eff}} = 0$; repelled by magnetic field.
- **Paramagnetic:** Unpaired electrons; attracted to magnetic field.
- **Spin crossover:** Some $d^6$ complexes switch between high-spin and low-spin with temperature.

## 8. Stability Constants

### 8.1 Stepwise and Overall Formation Constants

**Definition 5 (Formation Constant):** For the reaction
$\text{M}^{n+} + \text{L} \rightleftharpoons \text{ML}^{n+}$:

$$K_1 = \frac{[\text{ML}^{n+}]}{[\text{M}^{n+}][\text{L}]}$$

**Overall formation constant:**

$$\beta_n = K_1 \cdot K_2 \cdot \ldots \cdot K_n = \frac{[\text{ML}_n^{n+}]}{[\text{M}^{n+}][\text{L}]^n}$$

### 8.2 Chelate Effect

**Theorem 6 (Chelate Effect):** Multidentate ligands form more stable complexes than equivalent
monodentate ligands:

$$[\text{Ni(en)}_3]^{2+} \text{ (log } \beta_3 = 18.8) \gg [\text{Ni(NH}_3)_6]^{2+} \text{ (log } \beta_6 = 8.6)$$

**Explanation:**

- **Entropy:** One chelate replaces several monodentate ligands, increasing the number of free
  particles ($\Delta S > 0$).
- **Ring size:** 5-membered chelate rings are most stable (en, acac). 3-membered rings are strained;
  7+ membered rings are floppy.

### 8.3 Irving-Williams Series

**Theorem 7 (Irving-Williams Series):** The stability of M$^{2+}$ complexes with a given ligand:

$$\text{Mn}^{2+} < \text{Fe}^{2+} < \text{Co}^{2+} < \text{Ni}^{2+} < \text{Cu}^{2+} > \text{Zn}^{2+}$$

Explained by a combination of CFSE (peaks at $d^8$ Ni$^{2+}$) and Jahn-Teller effects (extra
stabilization for Cu$^{2+}$, $d^9$).

## 9. Ligand Substitution Reactions

### 9.1 Inert and Labile Complexes

**Definition 6 (Labile):** Complexes that undergo rapid ligand substitution (half-life < 1 minute).
**Definition 7 (Inert):** Complexes with slow ligand substitution (half-life > 1 minute).

**Theorem 8:** Low-spin $d^6$ complexes (e.g., $[\text{Co(CN)}_6]^{3-}$, $[\text{Cr(NH}_3)_6]^{3+}$)
are inert. High-spin complexes and $d^{10}$ are labile.

### 9.2 Octahedral Substitution Mechanisms

**S$\_\text{N}$1 (Dissociative):** First, a ligand leaves, creating a 5-coordinate intermediate;
then the new ligand enters.

$$[\text{ML}_6] \to [\text{ML}_5] + \text{L} \to [\text{ML}_5\text{L}']$$

Rate: $v = k[\text{complex}]$ (independent of incoming ligand).

**S$\_\text{N}$2 (Associative):** The incoming ligand attacks to form a 7-coordinate intermediate;
then a ligand leaves.

$$[\text{ML}_6] + \text{L}' \to [\text{ML}_6\text{L}'] \to [\text{ML}_5\text{L}'] + \text{L}$$

Rate: $v = k[\text{complex}][\text{L}']$.

### 9.3 Trans Effect (Square Planar)

**Definition 8 (Trans Effect):** In square planar complexes, some ligands labilize the ligand
**trans** to them, accelerating its substitution.

**Trans effect series:**

$$\text{CN}^- \approx \text{CO} \approx \text{C}_2\text{H}_4 > \text{PR}_3 > \text{H}^- > \text{SC(NH}_2)_2 > \text{CH}_3^- > \text{SCN}^- > \text{I}^- > \text{Br}^- > \text{Cl}^- > \text{py} > \text{NH}_3 > \text{OH}^- > \text{H}_2\text{O}$$

This is exploited in the synthesis of square planar Pt complexes (e.g., cisplatin).

## 10. Electronic Spectra and Color

### 10.1 d–d Transitions

**Definition 9 (d–d Transition):** An electron is promoted from a lower-energy $d$ orbital to a
higher-energy $d$ orbital, absorbing light in the visible or near-UV region.

$$\Delta_o = h\nu = \frac{hc}{\lambda}$$

- The absorbed wavelength determines the color (complementary color is observed).
- Selection rules: Laporte forbidden ($\Delta\ell = \pm 0$ not satisfied), but weakly allowed by
  vibronic coupling or low symmetry.

### 10.2 Orgel Diagrams

**Definition 10 (Orgel Diagram):** Qualitative diagrams showing the energy of $d$-orbital states as
a function of $\Delta/B$ (field strength ratio).

For octahedral $d^n$, the Orgel diagram shows which transitions are spin-allowed and their
approximate positions.

### 10.3 Charge Transfer Transitions

**Definition 11 (Charge Transfer):** Intense transitions involving electron transfer between metal
and ligand:

- **LMCT (Ligand to Metal Charge Transfer):** Electron transfers from ligand to metal (e.g.,
  $[\text{MnO}_4]^-$, purple color from O$^{2-}$ → Mn$^{7+}$).
- **MLCT (Metal to Ligand Charge Transfer):** Electron transfers from metal to ligand (e.g.,
  $[\text{Ru(bpy)}_3]^{2+}$, MLCT absorption in visible).

Charge transfer transitions are much more intense ($\varepsilon \sim 10^3$–$10^5$) than d–d
transitions ($\varepsilon \sim 1$–$100$).

## Common Pitfalls

1. **Confusing $\Delta_o$ and pairing energy $P$ units.** $\Delta_o$ is in most cases in cm$^{-1}$
   (wavenumbers) or kJ/mol; $P$ is in the same units. **Fix:** Always compare in the same units.
2. **Wrong tetrahedral splitting direction.** $\Delta_t$ is inverted relative to $\Delta_o$: $e$ is
   lower, $t_2$ is higher. **Fix:** Tetrahedral has fewer ligands and less direct overlap, so the
   splitting is smaller ($\frac{4}{9}\Delta_o$) and inverted.
3. **Assuming all octahedral $d^n$ complexes can be high-spin or low-spin.** Only $d^4$–$d^7$ have
   this choice. **Fix:** $d^1$–$d^3$ and $d^8$–$d^{10}$ have only one configuration regardless of
   field strength.
4. **Ignoring the chelate effect for stability.** EDTA forms extremely stable complexes not because
   of bond strength but because of entropy. **Fix:** $\beta_n$ for chelates is much larger than for
   monodentate analogs.
5. **Wrong trans effect vs trans influence.** Trans effect is a kinetic phenomenon (rate of
   substitution); trans influence is a thermodynamic phenomenon (bond weakening). **Fix:** Trans
   effect relates to substitution rates; trans influence relates to ground-state bond lengths.
6. **Misassigning spectrochemical series positions.** The spectrochemical series ranks ligands, not
   metals. **Fix:** Memorize the ligand series; also note that higher oxidation state metals produce
   larger $\Delta$.
7. **Ignoring orbital contributions to magnetic moments.** The spin-only formula works for first-row
   transition metals but fails for heavier metals where orbital contributions are significant.
   **Fix:** Use $\mu_{\text{eff}} = \sqrt{4S(S+1) + L(L+1)}\,\mu_B$ when orbital angular momentum is
   not quenched.

## Summary

- **CFT:** $d$-orbital splitting in ligand fields; $\Delta_o$ (octahedral),
  $\Delta_t = \frac{4}{9}\Delta_o$ (tetrahedral).
- **Spectrochemical series:** I$^-$ < Cl$^-$ < F$^-$ < H$_2$O < NH$_3$ < CN$^-$ < CO.
- **High-spin vs low-spin:** Determined by $\Delta$ vs $P$; only $d^4$–$d^7$ octahedral.
- **CFSE:** Net stabilization from $d$-orbital splitting; explains hydration enthalpies.
- **Jahn-Teller:** Degenerate states distort; most important for $d^4$ (high-spin) and $d^9$.
- **Magnetism:** $\mu_{\text{eff}} = \sqrt{n(n+2)}\,\mu_B$; spin-only formula for first-row metals.
- **Stability:** Irving-Williams series; chelate effect (entropy-driven).
- **Color:** d–d transitions (weak, $\epsilon \sim 10$) and charge transfer (strong,
  $\epsilon \sim 10^4$).

## Worked Examples

### Example 1: CFSE Calculation

**Problem:** Calculate the crystal field stabilisation energy for [CoF6]^3- (high-spin, octahedral)
and [Co(CN)6]^3- (low-spin, octahedral). Co^3+ has d^6 configuration. Delta_o for F- is 15,000 cm^-1
and for CN- is 33,000 cm^-1. **Solution:** High-spin [CoF6]^3-: t2g^4 eg^2. CFSE = 4(-0.4 Delta_o) +
2(0.6 Delta_o) = -1.6 + 1.2 = -0.4 Delta_o = -0.4 x 15,000 = -6,000 cm^-1 = -71.8 kJ/mol. Low-spin
[Co(CN)6]^3-: t2g^6 eg^0. CFSE = 6(-0.4 Delta_o) + 0 = -2.4 Delta_o = -2.4 x 33,000 = -79,200 cm^-1
= -947.5 kJ/mol. The low-spin complex is much more stabilised.

### Example 2: Isomer Counting

**Problem:** How many geometric isomers does [Co(NH3)2(en)2]^2+ have, and how many are optically
active? (en = ethylenediamine, bidentate) **Solution:** The bidentate ligands occupy two
coordination sites each. Possible arrangements: cis and trans for the NH3 pairs relative to each
other. In the cis form, the two en ligands can be arranged as fac (with N atoms on a triangular
face) or mer (with N atoms in a meridian). Total geometric isomers: 3 (cis-fac, cis-mer, trans). The
cis-fac and cis-mer forms are chiral (no plane of symmetry), so there are 2 pairs of enantiomers.

## Cross-References

| Topic                             | Site        | Link                                                                                      |
| --------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| Atomic Structure                  | WyattsNotes | [View](/docs/university/chemistry/atomic-structure-and-periodicity)                       |
| Main-Group Chemistry              | WyattsNotes | [View](/docs/university/chemistry/main-group-chemistry)                                   |
| Solid-State Chemistry             | WyattsNotes | [View](/docs/university/chemistry/solid-state-chemistry)                                  |
| Coordination Chemistry — MIT 5.03 | MIT OCW     | [View](https://ocw.mit.edu/courses/5-03-principles-of-inorganic-chemistry-iii-fall-2005/) |
