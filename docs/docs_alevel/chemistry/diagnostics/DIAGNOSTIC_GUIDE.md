---
title: A-Level Chemistry Diagnostic Guide
description:
  Comprehensive guide to the 13-topic A-Level Chemistry diagnostic test suite, covering prerequisite
  chains, grading rubrics, and usage instructions.
slug: diagnostic-guide
hide_table_of_contents: true
---

# A-Level Chemistry Diagnostic Guide

## Overview

This diagnostic suite contains 13 topic-level tests for A-Level Chemistry. Each test comprises 3
unit tests (single-topic, maximum difficulty) and 3 integration tests (multi-topic synthesis). The
questions target the hardest material within the A-Level specification and are designed to expose
deep misconceptions.

## Topic Coverage Map

| #   | File                               | Topic                                  | Section             |
| --- | ---------------------------------- | -------------------------------------- | ------------------- |
| 1   | `diag-atomic-structure.md`         | Atomic Structure and Periodicity       | Physical Chemistry  |
| 2   | `diag-bonding-structure.md`        | Bonding and Structure                  | Physical Chemistry  |
| 3   | `diag-quantitative-chemistry.md`   | Quantitative Chemistry / Stoichiometry | Physical Chemistry  |
| 4   | `diag-kinetics.md`                 | Chemical Kinetics                      | Physical Chemistry  |
| 5   | `diag-equilibrium.md`              | Chemical Equilibrium                   | Physical Chemistry  |
| 6   | `diag-thermodynamics.md`           | Thermodynamics and Energetics          | Physical Chemistry  |
| 7   | `diag-acids-bases.md`              | Acids, Bases and Buffers               | Physical Chemistry  |
| 8   | `diag-electrochemistry.md`         | Electrochemistry                       | Physical Chemistry  |
| 9   | `diag-organic-introduction.md`     | Organic Chemistry Introduction         | Organic Chemistry   |
| 10  | `diag-alkanes-alkenes.md`          | Alkanes and Alkenes                    | Organic Chemistry   |
| 11  | `diag-halogenoalkanes-alcohols.md` | Halogenoalkanes, Alcohols              | Organic Chemistry   |
| 12  | `diag-carbonyl-arenes-amines.md`   | Carbonyl Compounds, Arenes, Amines     | Organic Chemistry   |
| 13  | `diag-transition-metals.md`        | Transition Metals                      | Inorganic Chemistry |

## Prerequisite Chains

```
Atomic Structure and Periodicity
  └── Bonding and Structure
        └── Quantitative Chemistry
              ├── Kinetics
              │     └── Equilibrium
              │           ├── Acids, Bases and Buffers
              │           └── Electrochemistry
              └── Thermodynamics and Energetics
                    ├── Equilibrium
                    └── Electrochemistry

Organic Chemistry Introduction
  ├── Alkanes and Alkenes
  │     └── Halogenoalkanes, Alcohols
  └── Carbonyl Compounds, Arenes, Amines
        └── (supported by Halogenoalkanes, Alcohols)

Transition Metals
  ├── Electrochemistry
  ├── Acids, Bases and Buffers
  └── Thermodynamics
```

**Critical dependency notes:**

- Atomic Structure must be mastered before Bonding and Structure.
- Quantitative Chemistry (moles, equations) underpins all subsequent topics.
- Kinetics and Thermodynamics both feed into Equilibrium.
- Acids and Bases requires Equilibrium concepts ($K_a$$K_w$ as equilibrium constants).
- Electrochemistry draws on redox concepts from Transition Metals and thermodynamics.
- Organic Introduction provides the nomenclature and isomerism foundation for all organic topics.
- Alkanes/Alkenes must precede Halogenoalkanes/Alcohols (mechanism foundations).

## Integration Test Cross-References

| Primary Topic            | Integration Partners                                     |
| ------------------------ | -------------------------------------------------------- |
| Atomic Structure         | Bonding, Quantitative Chemistry, Thermodynamics          |
| Bonding and Structure    | Acids and Bases, Organic Chemistry, Thermodynamics       |
| Quantitative Chemistry   | Atomic Structure, Acids and Bases, Kinetics              |
| Kinetics                 | Organic Chemistry, Equilibrium, Thermodynamics           |
| Equilibrium              | Kinetics, Acids and Bases, Quantitative Chemistry        |
| Thermodynamics           | Kinetics, Equilibrium, Electrochemistry, Bonding         |
| Acids and Bases          | Equilibrium, Quantitative Chemistry, Transition Metals   |
| Electrochemistry         | Thermodynamics, Kinetics, Transition Metals              |
| Organic Introduction     | Bonding, Kinetics, Halogenoalkanes/Alcohols              |
| Alkanes and Alkenes      | Kinetics, Halogenoalkanes/Alcohols, Organic Introduction |
| Halogenoalkanes/Alcohols | Kinetics, Electrochemistry, Organic Chemistry            |
| Carbonyl/Arenes/Amines   | Acids and Bases, Equilibrium, Organic Chemistry          |
| Transition Metals        | Electrochemistry, Acids and Bases, Kinetics              |

## Grading Rubric

### Per-Question Scoring

Each question (unit or integration) is scored on a 0--4 scale:

| Score | Descriptor                                                   |
| ----- | ------------------------------------------------------------ |
| 0     | No meaningful attempt, or fundamental misconception evident  |
| 1     | Correct approach identified but major errors in execution    |
| 2     | Substantially correct method with one significant error      |
| 3     | Correct method, minor arithmetical or notational error       |
| 4     | Fully correct solution with appropriate working and sig figs |

### Diagnostic Classification

For each topic test (6 questions, max 24 marks):

| Total Score | Classification  | Interpretation                                         |
| ----------- | --------------- | ------------------------------------------------------ |
| 22--24      | **Secure**      | Topic fully mastered; ready for extension              |
| 18--21      | **Proficient**  | Sound understanding; minor gaps to address             |
| 13--17      | **Developing**  | Core concepts present but inconsistent application     |
| 8--12       | **Emerging**    | Significant gaps; foundational revision needed         |
| 0--7        | **Not Started** | Major revision required; return to prerequisite topics |

### Unit vs Integration Analysis

- **Unit test score significantly higher than integration score**: Student can apply procedures in
  isolation but struggles with cross-topic synthesis. Focus on mixed-topic practice.
- **Integration test score higher than unit test score**: Unusual but may indicate stronger
  conceptual understanding than procedural fluency. Focus on technique.
- **Both scores low**: Return to prerequisite chain and rebuild from earlier topics.

### Recommended Diagnostic Workflow

1. Begin with `diag-atomic-structure.md`. If score is below 13, revise before proceeding.
2. Work through the Physical Chemistry chain: Atomic Structure, Bonding, Quantitative Chemistry,
   then the parallel branches of Kinetics/Thermodynamics.
3. After completing a topic, attempt its integration tests to check cross-topic fluency.
4. Revisit any topic where the gap between unit and integration scores exceeds 4 marks.
5. Complete the Organic Chemistry chain after Physical Chemistry fundamentals are secure.
6. Transition Metals can be studied alongside the later Physical Chemistry topics.

## Key Misconceptions Index

| Topic                    | Misconception                                             | Diagnostic Test |
| ------------------------ | --------------------------------------------------------- | --------------- |
| Atomic Structure         | Cr and Cu electron configuration exceptions               | UT-1            |
| Atomic Structure         | Successive IE pattern interpretation                      | UT-2            |
| Atomic Structure         | Periodic trend explanation vs description                 | UT-3            |
| Bonding                  | VSEPR lone pair effects on bond angle                     | UT-1            |
| Bonding                  | Hydrogen bonding vs van der Waals strength                | UT-2            |
| Bonding                  | Ionic vs covalent character continuum                     | UT-3            |
| Quantitative             | Back-titration calculation logic                          | UT-1            |
| Quantitative             | Ideal gas equation unit consistency                       | UT-2            |
| Quantitative             | Overall yield in multi-step synthesis                     | UT-3            |
| Kinetics                 | Rate vs rate constant effect of temperature               | UT-2            |
| Kinetics                 | Order determination from initial rates                    | UT-1            |
| Kinetics                 | Arrhenius plot gradient significance                      | UT-2            |
| Equilibrium              | $K_c$ expression excludes solids                          | UT-3            |
| Equilibrium              | Temperature effect on $K_c$ direction                     | UT-2            |
| Equilibrium              | Le Chatelier limitations                                  | IT-1            |
| Thermodynamics           | Born-Haber cycle sign conventions                         | UT-1            |
| Thermodynamics           | $\Delta G = 0$ at melting point                           | IT-2            |
| Thermodynamics           | Entropy of dissolution                                    | IT-2            |
| Acids/Bases              | pH of weak vs strong acid                                 | IT-3            |
| Acids/Bases              | Buffer mechanism and dilution                             | UT-1            |
| Acids/Bases              | Indicator choice from equivalence pH                      | UT-2            |
| Electrochemistry         | $E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}}$ | UT-1            |
| Electrochemistry         | Feasibility from $E_{\text{cell}}$ magnitude              | UT-3            |
| Electrochemistry         | Faraday calculation with mole ratio                       | UT-2            |
| Organic Intro            | E/Z vs cis/trans naming                                   | UT-2            |
| Organic Intro            | Enantiomeric excess calculation                           | UT-2            |
| Organic Intro            | Chirality identification criteria                         | UT-2            |
| Alkanes/Alkenes          | Free radical mechanism steps                              | UT-1            |
| Alkanes/Alkenes          | Markovnikov vs anti-Markovnikov                           | UT-2            |
| Alkanes/Alkenes          | Stereochemistry of bromine addition                       | IT-2            |
| Halogenoalkanes/Alcohols | SN1 vs SN2 for different classes                          | UT-1            |
| Halogenoalkanes/Alcohols | Elimination vs substitution conditions                    | UT-2            |
| Halogenoalkanes/Alcohols | Tertiary alcohol oxidation resistance                     | UT-3            |
| Carbonyl/Arenes/Amines   | Aldehyde vs ketone reactivity                             | UT-1            |
| Carbonyl/Arenes/Amines   | Directing effects of substituents                         | UT-2            |
| Carbonyl/Arenes/Amines   | Amine basicity comparison                                 | UT-3            |
| Transition Metals        | d-d transitions and colour origin                         | UT-1            |
| Transition Metals        | Ligand exchange and $K_{\text{stab}}$                     | UT-2            |
| Transition Metals        | Catalytic cycle construction                              | IT-1            |

## Diagnostic Test Matrix

### How to Use the Test Matrix

Each diagnostic test contains questions rated by difficulty and type:

- **UT (Unit Test):** Tests a single concept in isolation. Use these to identify specific gaps in
  understanding.
- **IT (Integration Test):** Combines two or more topics. Use these once unit tests are mastered.

**Self-marking protocol:**

1. Attempt all questions under timed conditions (5 minutes per mark).
2. Mark against the worked solutions.
3. For each incorrect answer, identify whether the error was conceptual (need to re-study the topic)
   or arithmetic (need more practice).
4. Record results in the tracking table below.

### Topic Cross-Reference Table

| Diagnostic File               | Topics Covered                                                   | Core Content File                                                                                 |
| ----------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| diag-atomic-structure         | Electron configuration, IE trends, atomic orbitals               | atomic-structure.md                                                                               |
| diag-bonding-structure        | VSEPR, intermolecular forces, ionic/covalent bonding             | bonding-and-structure.md                                                                          |
| diag-quantitative-chemistry   | Moles, titration, gas calculations, uncertainties                | quantitative-chemistry.md                                                                         |
| diag-kinetics                 | Rate equations, Arrhenius, mechanisms, catalysts                 | kinetics.md                                                                                       |
| diag-equilibrium              | $K_c$$K_p$Le Chatelier, heterogeneous equilibrium                | equilibrium.md                                                                                    |
| diag-thermodynamics           | Enthalpy, entropy, Gibbs energy, Born-Haber                      | thermodynamics.md, entropy-and-gibbs.md, born-haber-cycles.md                                     |
| diag-acids-bases              | pH, weak acids, buffers, titration curves, indicators            | acids-bases.md                                                                                    |
| diag-electrochemistry         | Electrode potentials, cells, electrolysis, feasibility           | electrochemistry.md                                                                               |
| diag-organic-introduction     | Nomenclature, isomerism, chirality, reaction types               | organic-chemistry/introduction.md                                                                 |
| diag-alkanes-alkenes          | Free radicals, cracking, electrophilic addition, polymers        | organic-chemistry/alkanes.md, organic-chemistry/alkenes.md                                        |
| diag-halogenoalkanes-alcohols | SN1/SN2, elimination, oxidation, esterification                  | organic-chemistry/halogenoalkanes.md, organic-chemistry/alcohols.md                               |
| diag-carbonyl-arenes-amines   | Nucleophilic addition, electrophilic substitution, diazotisation | organic-chemistry/carbonyl-compounds.md, organic-chemistry/arenes.md, organic-chemistry/amines.md |
| diag-transition-metals        | d-d transitions, CFSE, ligand exchange, catalysis                | transition-metals.md                                                                              |

### Progress Tracking Template

Copy this table and fill in your scores after each attempt. Aim for 80%+ before moving to
integration tests.

| Topic                      | Date | Score | Time (min) | Weakest Area | Action |
| -------------------------- | ---- | ----- | ---------- | ------------ | ------ |
| Atomic Structure           |      | /25   |            |              |        |
| Bonding & Structure        |      | /25   |            |              |        |
| Quantitative Chemistry     |      | /25   |            |              |        |
| Kinetics                   |      | /25   |            |              |        |
| Equilibrium                |      | /25   |            |              |        |
| Thermodynamics             |      | /25   |            |              |        |
| Acids & Bases              |      | /25   |            |              |        |
| Electrochemistry           |      | /25   |            |              |        |
| Organic Introduction       |      | /25   |            |              |        |
| Alkanes & Alkenes          |      | /25   |            |              |        |
| Halogenoalkanes & Alcohols |      | /25   |            |              |        |
| Carbonyl, Arenes & Amines  |      | /25   |            |              |        |
| Transition Metals          |      | /25   |            |              |        |

### Building a Personal Test Matrix

1. **Baseline assessment:** Take all 13 diagnostic tests without preparation. Record scores.
2. **Identify priority topics:** Sort by score (lowest first). These are your priority topics.
3. **Study cycle:** For each priority topic, study the core content file, then re-take the
   diagnostic test. Repeat until 80%+ is achieved.
4. **Integration phase:** Once all unit test scores are 80%+, focus on integration test questions
   (IT-1, IT-2, IT-3).
5. **Exam simulation:** Select one question from each of 5 different topics and complete them in 25
   minutes under exam conditions.

### Common Error Patterns and Remedies

| Error Pattern                               | Likely Cause           | Remedy                                                                |
| ------------------------------------------- | ---------------------- | --------------------------------------------------------------------- |
| Correct method, wrong answer                | Arithmetic error       | Slow down; show all working; use a calculator for complex arithmetic  |
| Wrong method, correct steps for that method | Misread the question   | Underline key words; identify what is being asked before starting     |
| Blank answer                                | Knowledge gap          | Return to core content notes; work through relevant worked examples   |
| Partial credit only                         | Incomplete explanation | Practice writing full explanations with all key marking points        |
| Runs out of time                            | Poor time management   | Practice under timed conditions; skip hard questions and return later |
