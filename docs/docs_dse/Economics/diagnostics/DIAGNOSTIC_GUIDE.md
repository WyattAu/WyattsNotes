---
title: DSE Economics -- Diagnostic Guide
description: "Comprehensive guide to DSE Economics diagnostic tests with coverage map, grading rubric, prerequisite chains, and timing recommendations."
slug: diag-guide-dse-economics
hide_table_of_contents: true
---

# DSE Economics — Diagnostic Guide

## Coverage Map

### Microeconomics

| Diagnostic File | Topics Covered | Source File |
|---|---|---|
| `diag-basic-economic-concepts.md` | Scarcity, opportunity cost, PPC, economic systems, division of labour, specialisation | `basic-economic-concepts.md` |
| `diag-demand-supply-markets.md` | PED, PES, equilibrium, consumer/producer surplus, price controls, subsidies | `demand-supply-markets.md` |
| `diag-market-structure.md` | Perfect competition, monopoly, monopolistic competition, oligopoly, barriers to entry, game theory | `market-structure-and-theory-of-the-firm.md` |
| `diag-market-failure.md` | Externalities, Pigouvian tax, public goods, free rider problem, information asymmetry, adverse selection | `market-failure-and-government-intervention.md` |

### Macroeconomics

| Diagnostic File | Topics Covered | Source File |
|---|---|---|
| `diag-national-income.md` | GDP/GNP calculation, real vs nominal, GDP deflator, per capita measures, limitations of GDP | `national-income-and-macroeconomic-indicators.md` |
| `diag-money-banking.md` | Money creation, money multiplier, functions of money, interest rate determination, banking system | `money-and-banking.md` |
| `diag-fiscal-monetary-policy.md` | Fiscal multiplier, monetary transmission, budget balance, policy mix, supply-side policy | `fiscal-and-monetary-policy.md` |
| `diag-international-trade.md` | Comparative advantage, exchange rates, tariffs/quotas, balance of payments, PPP, impossible trinity | `international-trade-and-finance.md` |

## Grading Rubric

### PASS Criteria
- Correctly solve at least 2 out of 3 Unit Tests with full working
- Correctly solve at least 2 out of 3 Integration Tests showing cross-topic analysis
- Correct use of economic terminology (PED, DWL, multiplier, comparative advantage, etc.)
- Diagrams labelled correctly where applicable

### PARTIAL Criteria
- Correctly solve 1--2 Unit Tests and 1 Integration Test
- Shows understanding of concepts but makes calculation errors
- Partially correct analysis with some steps missing
- Can explain concepts qualitatively but struggles with quantitative analysis

### FAIL Indicators
- Cannot calculate PED, PES, or multipliers correctly
- Confuses nominal and real values
- Cannot apply opportunity cost reasoning
- Unable to identify market failures or appropriate policy responses

## Prerequisite Chains

```
Basic Economic Concepts (scarcity, opportunity cost, PPC)
  └── Demand, Supply, and Markets (PED, PES, equilibrium)
        ├── Market Structure (requires surplus analysis)
        │     └── Market Failure (builds on welfare analysis)
        └── International Trade (comparative advantage builds on opportunity cost)

National Income and Macroeconomic Indicators
  ├── Money and Banking (money supply, interest rates)
  │     ├── Fiscal and Monetary Policy (requires money/banking understanding)
  │     └── International Trade and Finance (exchange rates, BOP)
  └── Fiscal and Monetary Policy (AD-AS model)
```

**Recommended order of diagnostic completion:**
1. `diag-basic-economic-concepts` -- foundational concepts
2. `diag-demand-supply-markets` -- core analytical toolkit
3. `diag-market-failure` -- welfare analysis and government intervention
4. `diag-market-structure` -- requires supply/demand and welfare understanding
5. `diag-national-income` -- macroeconomic foundations
6. `diag-money-banking` -- monetary system mechanics
7. `diag-fiscal-monetary-policy` -- policy analysis
8. `diag-international-trade` -- integrates micro and macro concepts

## Timing Recommendations

| Diagnostic | Recommended Time | Notes |
|---|---|---|
| `diag-basic-economic-concepts` | 30 minutes | Conceptual questions with some calculation |
| `diag-demand-supply-markets` | 40 minutes | Quantitative elasticity and surplus questions |
| `diag-market-structure` | 45 minutes | Game theory and profit maximisation are complex |
| `diag-market-failure` | 40 minutes | Multi-step welfare analysis |
| `diag-national-income` | 35 minutes | GDP accounting and real/nominal conversions |
| `diag-money-banking` | 35 minutes | Money multiplier and interest rate calculations |
| `diag-fiscal-monetary-policy` | 45 minutes | Multiplier and policy analysis |
| `diag-international-trade` | 40 minutes | Comparative advantage and exchange rate calculations |

**Total recommended time:** approximately 5 hours (spread across 3--4 sessions).

## How to Use These Diagnostics

1. Complete each diagnostic without notes. Show all working for quantitative questions.
2. Check solutions immediately, comparing both the method and the final answer.
3. If you score FAIL, review the corresponding source file before retrying.
4. If you score PARTIAL, focus on specific calculation errors or conceptual gaps.
5. Integration Tests are critical for DSE exam preparation -- DSE frequently requires applying concepts across topics (e.g., using PED in the context of government policy, or combining national income analysis with trade).
6. Always practice drawing labelled diagrams for microeconomic questions -- they carry significant marks in the DSE exam.
7. Pay special attention to the distinction between real and nominal values, as this is a common exam pitfall.
