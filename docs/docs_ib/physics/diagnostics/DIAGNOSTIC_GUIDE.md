---
title: IB Physics Diagnostic Guide
description: Comprehensive guide to the 12-topic IB Physics diagnostic test suite, covering prerequisite chains, grading rubrics, and usage instructions.
slug: diag-guide
hide_table_of_contents: true
---

# IB Physics Diagnostic Guide

## Overview

This diagnostic suite contains 12 topic-level tests for IB Physics. Each test comprises 3 unit tests (single-topic, maximum difficulty) and 3 integration tests (multi-topic synthesis). The questions target the hardest material within the IB specification and are designed to expose deep misconceptions.

## Topic Coverage Map

| # | File | Topic | Section |
|---|------|-------|---------|
| 1 | `diag-kinematics.md` | Kinematics | Mechanics |
| 2 | `diag-dynamics.md` | Dynamics | Mechanics |
| 3 | `diag-energy.md` | Energy and Conservation | Mechanics |
| 4 | `diag-rotational-motion.md` | Rotational Motion | Mechanics |
| 5 | `diag-wave-properties.md` | Wave Properties | Waves |
| 6 | `diag-shm.md` | Simple Harmonic Motion | Waves |
| 7 | `diag-electric-magnetic-fields.md` | Electric and Magnetic Fields | Fields |
| 8 | `diag-gravitational-fields.md` | Gravitational Fields | Fields |
| 9 | `diag-induction.md` | Induction | Fields |
| 10 | `diag-thermodynamics.md` | Thermodynamics | Thermal Physics |
| 11 | `diag-atomic-nuclear.md` | Atomic and Nuclear Physics | Quantum and Nuclear |
| 12 | `diag-current-electricity.md` | Current Electricity | Electricity |

## Prerequisite Chains

```
Kinematics
  └── Dynamics
        ├── Energy and Conservation
        │     └── Rotational Motion
        └── Gravitational Fields

Wave Properties
  └── Simple Harmonic Motion

Electric and Magnetic Fields
  ├── Gravitational Fields
  └── Induction
        └── Current Electricity

Thermodynamics
  └── (independent)

Atomic and Nuclear Physics
  └── (independent)
```

**Critical dependency notes:**

- Kinematics must be mastered before Dynamics.
- Dynamics underpins Energy, Rotational Motion, and Gravitational Fields.
- Wave Properties is a prerequisite for SHM.
- Electric and Magnetic Fields should be studied before Induction.
- Thermodynamics and Atomic/Nuclear Physics are relatively independent but require algebra and graph skills from the mechanics topics.
- Current Electricity is most naturally studied after Electric and Magnetic Fields.

## Integration Test Cross-References

| Primary Topic | Integration Partners |
|---|---|
| Kinematics | Dynamics, Work-Energy |
| Dynamics | Energy, Kinematics |
| Energy | Gravitational Fields, Dynamics |
| Rotational Motion | Energy, Dynamics, Kinematics |
| Wave Properties | SHM, Energy |
| SHM | Dynamics, Energy |
| Electric/Magnetic Fields | Kinematics, Current Electricity, Energy |
| Gravitational Fields | Circular Motion, Energy |
| Induction | Current Electricity, SHM |
| Thermodynamics | Energy, Kinematics |
| Atomic/Nuclear | Energy, Electric/Magnetic Fields |
| Current Electricity | Kirchhoff's Laws, Energy |

## Grading Rubric

### Per-Question Scoring

Each question (unit or integration) is scored on a 0--4 scale:

| Score | Descriptor |
|---|---|
| 0 | No meaningful attempt, or fundamental misconception evident |
| 1 | Correct approach identified but major errors in execution |
| 2 | Substantially correct method with one significant error |
| 3 | Correct method, minor arithmetical or notational error |
| 4 | Fully correct solution with appropriate working and sig figs |

### Diagnostic Classification

For each topic test (6 questions, max 24 marks):

| Total Score | Classification | Interpretation |
|---|---|---|
| 22--24 | **Secure** | Topic fully mastered; ready for extension |
| 18--21 | **Proficient** | Sound understanding; minor gaps to address |
| 13--17 | **Developing** | Core concepts present but inconsistent application |
| 8--12 | **Emerging** | Significant gaps; foundational revision needed |
| 0--7 | **Not Started** | Major revision required; return to prerequisite topics |

### Unit vs Integration Analysis

- **Unit test score significantly higher than integration score**: Student can apply procedures in isolation but struggles with cross-topic synthesis. Focus on mixed-topic practice.
- **Integration test score higher than unit test score**: Unusual but may indicate stronger conceptual understanding than procedural fluency. Focus on technique.
- **Both scores low**: Return to prerequisite chain and rebuild from earlier topics.

### Recommended Diagnostic Workflow

1. Begin with `diag-kinematics.md`. If score is below 13, revise before proceeding.
2. Work through prerequisite chains in order.
3. After completing a topic, attempt its integration tests to check cross-topic fluency.
4. Revisit any topic where the gap between unit and integration scores exceeds 4 marks.
5. Use the prerequisite chains to identify whether a low score stems from an earlier topic.

## Key Misconceptions Index

| Topic | Misconception | Diagnostic Test |
|---|---|---|
| Kinematics | Displacement vs distance on sign reversal | UT-2 |
| Kinematics | Projectile sign convention errors | UT-1 |
| Kinematics | Two-stage motion with restitution | UT-3 |
| Dynamics | Newton's 3rd law pair identification | UT-1 |
| Dynamics | Friction inequality vs equality | UT-2 |
| Dynamics | System equilibrium vs individual motion | UT-3 |
| Energy | Work done by friction is path-dependent | UT-1 |
| Energy | Elastic collision energy check | UT-2 |
| Energy | Power = Fv not F/t | UT-3 |
| Rotational Motion | Torque uses perpendicular distance | UT-1 |
| Rotational Motion | Parallel axis theorem application | UT-2 |
| Rotational Motion | Angular momentum conservation with changing I | UT-3 |
| Wave Properties | Intensity proportional to amplitude squared | UT-1 |
| Wave Properties | Wave speed depends on tension and mu | UT-2 |
| Wave Properties | Frequency is invariant across media | UT-3 |
| SHM | SHM condition a = -omega^2 x is necessary and sufficient | UT-1 |
| SHM | KE = PE at A/sqrt(2) | UT-2 |
| SHM | Phase difference in superposition | UT-3 |
| Electric/Magnetic Fields | Field lines never cross | UT-2 |
| Electric/Magnetic Fields | Magnetic force perpendicular to v and B | UT-3 |
| Electric/Magnetic Fields | Superposition requires vector addition | UT-1 |
| Gravitational Fields | Field inside uniform sphere is linear | UT-1 |
| Gravitational Fields | Gravitational potential is always negative | UT-2 |
| Gravitational Fields | Escape velocity is a threshold, not a target speed | UT-3 |
| Induction | Faraday (magnitude) vs Lenz (direction) | UT-1 |
| Induction | Flux linkage = NBA cos(theta), theta is normal angle | UT-2 |
| Induction | Back EMF limits starting current | UT-3 |
| Thermodynamics | Ideal gas is a model, not fundamental law | UT-1 |
| Thermodynamics | First law sign convention | UT-2 |
| Thermodynamics | Carnot efficiency is maximum possible | UT-3 |
| Atomic/Nuclear | Bohr model limitations | UT-1 |
| Atomic/Nuclear | Binding energy per nucleon explains fission/fusion | UT-2 |
| Atomic/Nuclear | Half-life is statistical, not deterministic | UT-3 |
| Current Electricity | Non-ohmic dynamic vs static resistance | UT-1 |
| Current Electricity | Internal resistance reduces terminal PD | UT-2 |
| Current Electricity | Potential divider loading effect | UT-3 |

## IB-Specific Notes

### Data Booklet Usage

These diagnostic tests are designed to be attempted under exam conditions. Students may use the IB Physics data booklet. The questions test whether students can apply the formulae correctly in non-standard situations, not whether they have memorised them.

### Significant Figures

IB Physics expects answers to be given to an appropriate number of significant figures (typically 3, or consistent with the data provided). One mark is deducted for incorrect sig figs in the grading rubric.

### Level of Difficulty

These questions correspond to the hardest questions found on IB Physics Paper 2 (SL/HL) and Paper 3. They target band 7 understanding. Students scoring below "Proficient" on multiple topics should prioritise revision over extension work.
