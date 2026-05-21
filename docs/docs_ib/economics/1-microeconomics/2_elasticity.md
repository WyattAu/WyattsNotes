---
title: Elasticity
description: 'IB Economics — price, income, and cross-price elasticity of demand and supply.'
date: 2026-05-21
tags: [ib, ib-economics]
categories: [ib-economics]
---

## Elasticity

### Price Elasticity of Demand (PED)

PED measures the responsiveness of quantity demanded to a change in price:

$$\mathrm{PED} = \frac{\% \Delta Q_d}{\% \Delta P}$$

Since the demand curve slopes downward, PED is negative, but it is conventionally expressed as an
Absolute value.

For precise calculations, the **midpoint (arc) formula** avoids the ambiguity of which price and
Quantity to use as the base:

$$\mathrm{PED} = \frac{\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\frac{P_2 - P_1}{(P_1 + P_2)/2}}$$

| PED Value                     | Classification      | Characteristics               |
| ----------------------------- | ------------------- | ----------------------------- |
| $\|\mathrm{PED}\| > 1$        | Elastic             | $\% \Delta Q_d > \% \Delta P$ |
| $\|\mathrm{PED}\| = 1$        | Unit elastic        | $\% \Delta Q_d = \% \Delta P$ |
| $\|\mathrm{PED}\| < 1$        | Inelastic           | $\% \Delta Q_d < \% \Delta P$ |
| $\|\mathrm{PED}\| = 0$        | Perfectly inelastic | Vertical demand curve         |
| $\|\mathrm{PED}\| \to \infty$ | Perfectly elastic   | Horizontal demand curve       |

**Determinants of PED:**

- **Availability of substitutes**: more substitutes = more elastic. A good with many close
  substitutes (e.g., Coca-Cola vs. Pepsi) has highly elastic demand
- **Proportion of income**: goods that take a larger share of income (e.g., cars, holidays) tend to
  be more elastic than inexpensive goods (e.g., salt, matches)
- **Necessity vs. Luxury**: necessities (food, medicine) tend to be inelastic; luxuries (designer
  clothing) tend to be elastic
- **Time horizon**: demand becomes more elastic over time as consumers adjust behaviour and find
  alternatives. Short-run PED for petrol is low; long-run PED is higher as consumers switch to
  electric vehicles or public transport
- **Addictiveness**: addictive goods (cigarettes, alcohol) tend to be inelastic in the short run,
  though demand may become more elastic in the long run as addiction is broken

**Relationship with total revenue:**

$$\mathrm{TR} = P \times Q$$

- If demand is elastic ($\|\mathrm{PED}\| > 1$), a price decrease increases total revenue
- If demand is inelastic ($\|\mathrm{PED}\| < 1$), a price decrease decreases total revenue
- If demand is unit elastic ($\|\mathrm{PED}\| = 1$), total revenue is unchanged (TR is maximised
  where PED $= -1$)

### Income Elasticity of Demand (YED)

$$\mathrm{YED} = \frac{\% \Delta Q_d}{\% \Delta Y}$$

| YED Value       | Classification               | Example                            |
| --------------- | ---------------------------- | ---------------------------------- |
| YED $> 0$       | Normal good                  | Organic food, restaurant meals     |
| $0 <$ YED $< 1$ | Necessity (income inelastic) | Bread, basic clothing              |
| YED $> 1$       | Luxury (income elastic)      | Designer goods, holidays           |
| YED $< 0$       | Inferior good                | Instant noodles, second-hand goods |

YED is important for understanding how demand changes as an economy grows. In a booming economy,
Demand for luxuries rises disproportionately, while demand for inferior goods falls.

### Price Elasticity of Supply (PES)

$$\mathrm{PES} = \frac{\% \Delta Q_s}{\% \Delta P}$$

**Determinants of PES:**

- **Spare production capacity**: firms with unused capacity can respond more quickly to price
  increases
- **Mobility of factors of production**: labour and capital that can be reallocated increase PES
- **Ability to store stocks**: goods that are non-perishable and inexpensive to store tend to have
  higher PES
- **Time period**: supply is more elastic in the long run than in the short run. In the _momentary
  run_, supply is perfectly inelastic (output cannot change). In the _short run_, supply is somewhat
  elastic. In the _long run_, all factors are variable, and supply is highly elastic

### Cross-Price Elasticity of Demand (XED)

$$\mathrm{XED} = \frac{\% \Delta Q_{d,A}}{\% \Delta P_B}$$

- XED $> 0$: goods are substitutes (the higher the positive value, the closer the substitute)
- XED $< 0$: goods are complements (the more negative, the stronger the complement relationship)
- XED $= 0$: goods are unrelated

XED is used by firms to assess competitive threats. A high positive XED between two products
Indicates they are close competitors.

## Common Pitfalls

- Confusing PED with slope. Elasticity changes along a linear demand curve even though the slope is
  constant
- Forgetting that PED is expressed as an absolute value. A PED of $-0.5$ means demand is inelastic
  ($|-0.5| < 1$)
- Stating "demand is elastic" when you mean "demand is price elastic." The unqualified word
  "elastic" is ambiguous
- Confusing income elasticity sign with elasticity magnitude. Normal goods have $YED > 0$; inferior
  goods have $YED < 0$. The magnitude still matters for determining necessity ($0 < YED < 1$) vs
  luxury ($YED > 1$)
- Using the wrong formula for cross-price elasticity. XED measures the responsiveness of quantity
  demanded of good X to a change in the price of good Y — not the other way around
- Calculating percentage change incorrectly when there is no base value given. Always use the
  midpoint (arc elasticity) formula when the base is ambiguous:
  $\frac{\Delta Q}{(Q_1 + Q_2)/2} \div \frac{\Delta P}{(P_1 + P_2)/2}$
- Confusing total revenue with total expenditure. They are the same number ($P \times Q$) but
  represent different perspectives (seller vs buyer)

## Worked Examples

### Example 1: Calculating PED

A firm raises the price of its product from $10 to $12. Quantity demanded falls from 500 to 400
units.

$$\text{PED} = \frac{\%\Delta Q_d}{\%\Delta P} = \frac{\frac{400-500}{500} \times 100}{\frac{12-10}{10} \times 100} = \frac{-20\%}{+20\%} = -1.0$$

Demand is unit elastic ($|\text{PED}| = 1$). Total revenue remains unchanged:
$10 \times 500 = \$5{,}000$ and $12 \times 400 = \$4{,}800$.

Wait — actually $\$5{,}000 \neq \$4{,}800$, which means the PED calculated using the initial-point
method gives $-1.0$ but the revenue changed. Using the midpoint method:

$$\text{PED} = \frac{\frac{400-500}{(400+500)/2}}{\frac{12-10}{(12+10)/2}} = \frac{-100/450}{2/11} = \frac{-0.222}{0.182} \approx -1.22$$

Demand is price elastic, consistent with the fall in total revenue.

### Example 2: Income Elasticity

When income rises from $30{,}000 to $35{,}000, a household's purchases of fresh vegetables increase
from 200 to 230 kg/year, and purchases of instant noodles fall from 150 to 120 packets/year.

$$\text{YED}_{\text{vegetables}} = \frac{\frac{30}{200}}{\frac{5000}{30000}} = \frac{0.15}{0.167} \approx 0.90$$

Fresh vegetables are a normal good ($YED > 0$) and a necessity ($0 < YED < 1$).

$$\text{YED}_{\text{noodles}} = \frac{\frac{-30}{150}}{\frac{5000}{30000}} = \frac{-0.20}{0.167} \approx -1.20$$

Instant noodles are an inferior good ($YED < 0$).

## Summary

- **Price elasticity of demand (PED)** measures how responsive quantity demanded is to a price
  change; $|PED| < 1$ = inelastic, $|PED| = 1$ = unit elastic, $|PED| > 1$ = elastic
- **Price elasticity of supply (PES)** depends on time horizon, spare capacity, and factor mobility
- **Income elasticity (YED)** distinguishes normal goods ($YED > 0$) from inferior goods
  ($YED < 0$); luxuries have $YED > 1$
- **Cross-price elasticity (XED)** identifies substitutes ($XED > 0$) and complements ($XED < 0$)
- PED and total revenue are linked: when demand is inelastic, a price rise increases total revenue;
  when elastic, a price rise decreases total revenue
- Key formula: $\text{PED} = \frac{\%\Delta Q_d}{\%\Delta P}$
