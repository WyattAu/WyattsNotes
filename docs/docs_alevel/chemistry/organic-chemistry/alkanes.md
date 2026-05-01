---
title: Alkanes
description:
  "A-Level Chemistry notes on Alkanes: Structure and Bonding for comprehensive revision and examination preparation. and examination prepa."
date: 2026-04-22T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: alkanes
---

# Alkanes

Alkanes are saturated hydrocarbons with the general formula $\mathrm{C}_n\mathrm{H}_{2n+2}$.
"Saturated" means every carbon atom is bonded to the maximum possible number of hydrogen atoms --
there are no C=C or $\mathrm{C}\equiv\mathrm{C}$ bonds. All carbon-carbon and carbon-hydrogen bonds
are $\sigma$ bonds, formed by head-on overlap of hybridised orbitals ($sp^3$ for carbon).

## Structure and Bonding

Each carbon in an alkane is $sp^3$ hybridised with tetrahedral geometry (bond angles approximately
$109.5^\circ$). The C--C bond length is approximately $154\,\mathrm{pm}$, and the C--H bond length
is approximately $109\,\mathrm{pm}$.

Free rotation about C--C $\sigma$ bonds produces an infinite set of molecular conformations. The
three staggered conformations of ethane (gauche and anti) are energy minima, while the eclipsed
conformations are energy maxima. The rotational energy barrier in ethane is approximately
$12\,\mathrm{kJ/mol}$.

## Physical Properties

### State at Room Temperature

The state depends on chain length. Methane to butane ($\mathrm{C}_1$--$\mathrm{C}_4$) are gases,
pentane to hexadecane ($\mathrm{C}_5$--$\mathrm{C}_{16}$) are liquids, and heptadecane and above are
waxy solids.

### Boiling Points

Boiling point increases with chain length due to increasing surface area and therefore stronger
London (dispersion) forces. The relationship is approximately linear for the first ~20 members, with
each additional $-\mathrm{CH}_2-$ group contributing roughly 20--25 K to the boiling point.

Branched alkanes have lower boiling points than their straight-chain isomers because branching
reduces the surface area for intermolecular contact. For example, 2,2-dimethylpropane (b.p.
$9.5^\circ\mathrm{C}$) vs pentane (b.p. $36^\circ\mathrm{C}$) vs 2-methylbutane (b.p.
$28^\circ\mathrm{C}$).

### Solubility

Alkanes are non-polar and are insoluble in water. They dissolve in non-polar organic solvents (the
general principle of "like dissolves like"). Their density is less than that of water.

## Free Radical Substitution

Alkanes are generally unreactive. The C--C and C--H bonds are strong and non-polar. However, under
UV light or at high temperatures, alkanes undergo substitution reactions via a radical chain
mechanism.

### The Chlorination of Methane

The reaction between methane and chlorine under UV light is the canonical example.

$$
\mathrm{CH}_4 + \mathrm{Cl}_2 \xrightarrow{\mathrm{UV}} \mathrm{CH}_3\mathrm{Cl} + \mathrm{HCl}
$$

### Mechanism: Step-by-Step

**Initiation:** Homolytic fission of the $\mathrm{Cl-Cl}$ bond, requiring UV light to supply the
bond dissociation energy ($\mathrm{BDE} = 242\,\mathrm{kJ/mol}$):

$$
\mathrm{Cl}_2 \xrightarrow{h\nu} 2\mathrm{Cl}^\bullet
$$

**Propagation -- Step 1:** A chlorine radical abstracts a hydrogen atom from methane, forming
hydrogen chloride and a methyl radical:

$$
\mathrm{Cl}^\bullet + \mathrm{CH}_4 \to \mathrm{HCl} + \mathrm{CH}_3^\bullet
$$

This step has $\Delta H \approx +4\,\mathrm{kJ/mol}$ (slightly endothermic). The H--Cl bond formed
($431\,\mathrm{kJ/mol}$) nearly compensates the C--H bond broken ($435\,\mathrm{kJ/mol}$).

**Propagation -- Step 2:** The methyl radical reacts with a chlorine molecule, forming chloromethane
and regenerating the chlorine radical:

$$
\mathrm{CH}_3^\bullet + \mathrm{Cl}_2 \to \mathrm{CH}_3\mathrm{Cl} + \mathrm{Cl}^\bullet
$$

This step has $\Delta H \approx -108\,\mathrm{kJ/mol}$ (exothermic). The C--Cl bond formed
($349\,\mathrm{kJ/mol}$) and the $\mathrm{Cl-Cl}$ bond broken ($242\,\mathrm{kJ/mol}$) give a net
release.

The chlorine radical is regenerated in step 2, which is why this is a **chain reaction**. A single
initiation event can produce thousands of product molecules before termination.

**Termination:** Radical-radical combination reactions that remove reactive species from the chain:

$$
2\mathrm{Cl}^\bullet \to \mathrm{Cl}_2
$$

$$
\mathrm{Cl}^\bullet + \mathrm{CH}_3^\bullet \to \mathrm{CH}_3\mathrm{Cl}
$$

$$
2\mathrm{CH}_3^\bullet \to \mathrm{C}_2\mathrm{H}_6
$$

Termination becomes significant only when radical concentrations are high enough to make bimolecular
encounters probable.

### Energetics of the Chain Reaction

The overall reaction is exothermic: $\Delta H \approx -104\,\mathrm{kJ/mol}$. However, the
initiation step requires significant energy input ($242\,\mathrm{kJ/mol}$). The propagation steps
provide the driving force: the first propagation step is slightly endothermic, and the second is
strongly exothermic.

### Multiple Substitution

The chloromethane product can itself undergo further substitution, producing dichloromethane
($\mathrm{CH}_2\mathrm{Cl}_2$), trichloromethane/chloroform ($\mathrm{CHCl}_3$), and
tetrachloromethane/carbon tetrachloride ($\mathrm{CCl}_4$). The product mixture is statistical, not
selective, which limits the synthetic utility of radical chlorination.

The relative rates of substitution at different hydrogen positions follow the order:

$$
3^\circ\,\mathrm{H} \gt 2^\circ\,\mathrm{H} \gt 1^\circ\,\mathrm{H}
$$

This is because the stability of the radical intermediate increases with substitution: tertiary
radicals are stabilised by hyperconjugation and inductive effects from neighbouring alkyl groups.

**Worked Example.** For the monochlorination of propane, calculate the ratio of 1-chloropropane to
2-chloropropane.

There are six primary hydrogens and two secondary hydrogens. The relative reactivity of $2^\circ$ vs
$1^\circ$ hydrogens is approximately 4:1.

$$
\frac{[2\mathrm{-chloropropane}]}{[1\mathrm{-chloropropane}]} = \frac{2 \times 4}{6 \times 1} = \frac{8}{6} = \frac{4}{3}
$$

The product ratio is 4:3 in favour of 2-chloropropane.

### Comparison with Bromination

Bromine radicals are less reactive but more selective than chlorine radicals. The H--Br bond formed
($366\,\mathrm{kJ/mol}$) is weaker than the H--Cl bond ($431\,\mathrm{kJ/mol}$), making the first
propagation step more endothermic. By the Hammond postulate, the transition state for hydrogen
abstraction by $\mathrm{Br}^\bullet$ resembles the products (radical character is more developed),
so the stability of the radical product has a larger effect on the activation energy.

Bromination is therefore far more selective:
$3^\circ\,\mathrm{H} : 2^\circ\,\mathrm{H} : 1^\circ\,\mathrm{H} \approx 1600 : 82 : 1$.

## Combustion

### Complete Combustion

In excess oxygen, alkanes burn to produce carbon dioxide and water:

$$
\mathrm{C}_n\mathrm{H}_{2n+2} + \frac{3n+1}{2}\mathrm{O}_2 \to n\mathrm{CO}_2 + (n+1)\mathrm{H}_2\mathrm{O}
$$

All combustion reactions are highly exothermic. For methane:

$$
\mathrm{CH}_4 + 2\mathrm{O}_2 \to \mathrm{CO}_2 + 2\mathrm{H}_2\mathrm{O} \quad \Delta H_c^\circ = -890\,\mathrm{kJ/mol}
$$

### Incomplete Combustion

When oxygen is limited, carbon monoxide and/or carbon (soot) are produced:

$$
2\mathrm{C}_n\mathrm{H}_{2n+2} + (2n+1)\mathrm{O}_2 \to 2n\mathrm{CO} + (2n+2)\mathrm{H}_2\mathrm{O}
$$

$$
\mathrm{C}_n\mathrm{H}_{2n+2} + \frac{n+1}{2}\mathrm{O}_2 \to n\mathrm{C} + (n+1)\mathrm{H}_2\mathrm{O}
$$

Carbon monoxide is a toxic, colourless, odourless gas that binds irreversibly to haemoglobin
($K \approx 200\times$ that of $\mathrm{O}_2$), reducing the blood's oxygen-carrying capacity.
Incomplete combustion of alkanes in poorly ventilated spaces is a major cause of CO poisoning.

### Calculating Enthalpy of Combustion from Bond Enthalpies

$$
\Delta H_c = \sum \mathrm{BE}(\mathrm{reactants}) - \sum \mathrm{BE}(\mathrm{products})
$$

This uses mean bond enthalpies and introduces systematic error because the actual bond enthalpies in
the specific molecules differ from the mean values. For precise work, experimental enthalpies (from
calorimetry) must be used.

**Worked Example.** Estimate $\Delta H_c$ for methane using mean bond enthalpies: C--H =
$413\,\mathrm{kJ/mol}$, O=O = $498\,\mathrm{kJ/mol}$, C=O (in $\mathrm{CO}_2$) =
$805\,\mathrm{kJ/mol}$, O--H = $464\,\mathrm{kJ/mol}$.

Bonds broken: $4 \times 413 + 2 \times 498 = 1652 + 996 = 2648\,\mathrm{kJ/mol}$.

Bonds formed: $2 \times (2 \times 805) + 4 \times 464 = 3220 + 1856 = 5076\,\mathrm{kJ/mol}$.

$$
\Delta H_c = 2648 - 5076 = -2428\,\mathrm{kJ/mol}
$$

This overestimates the experimental value ($-890\,\mathrm{kJ/mol}$ per mole of methane, which is
$-890\,\mathrm{kJ/mol}$ for the balanced equation as written with 1 mol methane). The discrepancy
arises because mean bond enthalpies are averages and do not account for the specific molecular
environment. Note: the bond enthalpy calculation above is per mole of methane as written.

## Environmental Impact of Alkanes

### Fossil Fuels and the Carbon Cycle

Alkanes are the primary components of fossil fuels: natural gas (mostly methane), petroleum (mix of
liquid alkanes $\mathrm{C}_5$--$\mathrm{C}_{12}$), and coal (complex hydrocarbon structures).

Combustion of fossil fuels releases $\mathrm{CO}_2$, which contributes to the enhanced greenhouse
effect. The atmospheric concentration of $\mathrm{CO}_2$ has increased from approximately
$280\,\mathrm{ppm}$ in pre-industrial times to over $420\,\mathrm{ppm}$ as of 2025.

### Methane as a Greenhouse Gas

Methane is a far more potent greenhouse gas than $\mathrm{CO}_2$ on a per-molecule basis. Its global
warming potential (GWP) over 100 years is approximately 28--36 times that of $\mathrm{CO}_2$. Major
anthropogenic sources include natural gas leaks, livestock (enteric fermentation), rice paddies, and
landfill decomposition.

### Photochemical Smog

Incomplete combustion of alkanes (particularly from internal combustion engines) releases unburnt
hydrocarbons and nitrogen oxides ($\mathrm{NO}_x$). In sunlight, these undergo a series of free
radical reactions to produce ozone ($\mathrm{O}_3$), peroxyacyl nitrates (PANs), and other secondary
pollutants at ground level. This mixture constitutes photochemical smog, which causes respiratory
problems and damages vegetation.

### Cracking

The demand for shorter-chain hydrocarbons (as fuels and chemical feedstocks) exceeds their natural
abundance in crude oil. **Cracking** is the thermal decomposition of long-chain alkanes into shorter
molecules. Two types:

**Thermal cracking:** High temperature ($400$--$900^\circ\mathrm{C}$) and pressure. Produces a
mixture of alkenes and smaller alkanes. Free radical mechanism. Example:

$$
\mathrm{C}_{10}\mathrm{H}_{22} \to \mathrm{C}_5\mathrm{H}_{10} + \mathrm{C}_5\mathrm{H}_{12}
$$

**Catalytic cracking:** Lower temperature ($450^\circ\mathrm{C}$) and moderate pressure, using a
zeolite catalyst. Produces branched alkanes, cycloalkanes, and aromatic compounds. The catalyst
provides an alternative reaction pathway with lower activation energy (carbocation mechanism).
Catalytic cracking also produces higher-quality gasoline (higher octane rating due to branching).

## Common Pitfalls

1. **Assuming radical substitution gives a single product.** The product is always a mixture.
   Chloromethane reacts further to give dichloromethane, chloroform, and carbon tetrachloride. This
   limits the synthetic utility of radical halogenation.

2. **Writing the wrong termination reactions.** Termination requires two radicals. A radical
   combining with a non-radical molecule is not termination -- it is a propagation step.

3. **Confusing the energetics of propagation steps.** The first propagation step (hydrogen
   abstraction) is typically slightly endothermic for chlorination, while the second (halogen
   attack) is strongly exothermic. For bromination, the first step is much more endothermic, which
   accounts for the greater selectivity.

4. **Forgetting the UV initiation requirement.** Without UV light, the $\mathrm{Cl-Cl}$ bond does
   not undergo homolytic fission at room temperature. The reaction does not proceed in the dark.

5. **Incorrect stoichiometry in combustion equations.** Always balance the equation fully. For an
   alkane $\mathrm{C}_n\mathrm{H}_{2n+2}$, the stoichiometric oxygen requirement is $\frac{3n+1}{2}$
   moles per mole of alkane.

## Practice Problems

<details>
<summary>Problem 1</summary>

Write the mechanism for the radical bromination of ethane to give bromoethane. Calculate $\Delta H$
for each propagation step given: C--H bond enthalpy in ethane $= 420\,\mathrm{kJ/mol}$, H--Br bond
enthalpy $= 366\,\mathrm{kJ/mol}$, C--Br bond enthalpy in bromoethane $= 285\,\mathrm{kJ/mol}$,
Br--Br bond enthalpy $= 193\,\mathrm{kJ/mol}$.

**Solution:**

Initiation:
$\mathrm{Br}_2 \xrightarrow{h\nu} 2\mathrm{Br}^\bullet \quad \Delta H = +193\,\mathrm{kJ/mol}$

Propagation step 1:
$\mathrm{Br}^\bullet + \mathrm{CH}_3\mathrm{CH}_3 \to \mathrm{HBr} + \mathrm{CH}_3\mathrm{CH}_2^\bullet$

$$
\Delta H_1 = \mathrm{BE}(\mathrm{C{-}H}) - \mathrm{BE}(\mathrm{H{-}Br}) = 420 - 366 = +54\,\mathrm{kJ/mol}
$$

Propagation step 2:
$\mathrm{CH}_3\mathrm{CH}_2^\bullet + \mathrm{Br}_2 \to \mathrm{CH}_3\mathrm{CH}_2\mathrm{Br} + \mathrm{Br}^\bullet$

$$
\Delta H_2 = \mathrm{BE}(\mathrm{Br{-}Br}) - \mathrm{BE}(\mathrm{C{-}Br}) = 193 - 285 = -92\,\mathrm{kJ/mol}
$$

Overall: $\Delta H = +54 + (-92) = -38\,\mathrm{kJ/mol}$ (exothermic).

The endothermic first propagation step ($+54\,\mathrm{kJ/mol}$) is much less favourable than for
chlorination ($+4\,\mathrm{kJ/mol}$), which is why bromination is slower but more selective.

</details>

<details>
<summary>Problem 2</summary>

Explain why the radical chlorination of 2-methylpropane gives predominantly
2-chloro-2-methylpropane, even though there are nine primary hydrogens and only one tertiary
hydrogen.

**Solution:**

Although the ratio of primary to tertiary hydrogens is 9:1, the relative reactivity of tertiary vs
primary hydrogens toward $\mathrm{Cl}^\bullet$ is approximately 5:1. The expected ratio is:

$$
\frac{[2\mathrm{-chloro-2-methylpropane}]}{[1\mathrm{-chloro-2-methylpropane}]} = \frac{1 \times 5}{9 \times 1} = \frac{5}{9}
$$

In practice, the tertiary product predominates even more than this ratio predicts because the
statistical calculation assumes all primary positions are equivalent, but in 2-methylpropane there
are two different primary environments ($-\mathrm{CH}_3$ on C-1 vs $-\mathrm{CH}_3$ on C-3). The
tertiary radical $(\mathrm{CH}_3)_3\mathrm{C}^\bullet$ is stabilised by hyperconjugation from the
nine neighbouring C--H bonds and the inductive effect of three methyl groups, making it
significantly lower in energy than the primary radical
$\mathrm{CH}_3\mathrm{CH}^\bullet(\mathrm{CH}_3)\mathrm{CH}_3$.

</details>
