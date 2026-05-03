---
title: A-Level Physics Diagnostic Guide
description: Comprehensive guide to the 20-topic A-Level Physics diagnostic test suite, covering prerequisite chains, grading rubrics, and usage instructions.
slug: diag-guide
hide_table_of_contents: true
---

# A-Level Physics Diagnostic Guide

## Overview

This diagnostic suite contains 20 topic-level tests for A-Level Physics. Each test comprises 3 unit tests (single-topic, maximum difficulty) and 3 integration tests (multi-topic synthesis). The questions target the hardest material within the A-Level specification and are designed to expose deep misconceptions.

## Topic Coverage Map

| # | File | Topic | Section |
|---|------|-------|---------|
| 1 | `diag-quantities-units.md` | Quantities and Units | Mechanics |
| 2 | `diag-kinematics.md` | Kinematics | Mechanics |
| 3 | `diag-dynamics.md` | Dynamics | Mechanics |
| 4 | `diag-work-energy-power.md` | Work, Energy and Power | Mechanics |
| 5 | `diag-momentum.md` | Momentum | Mechanics |
| 6 | `diag-circular-motion.md` | Circular Motion | Mechanics |
| 7 | `diag-oscillations.md` | Oscillations | Mechanics |
| 8 | `diag-gravitational-fields.md` | Gravitational Fields | Mechanics |
| 9 | `diag-properties-of-materials.md` | Properties of Materials | Mechanics |
| 10 | `diag-current-resistance.md` | Current and Resistance | Electricity |
| 11 | `diag-dc-circuits.md` | DC Circuits | Electricity |
| 12 | `diag-capacitance.md` | Capacitance | Electricity |
| 13 | `diag-wave-properties.md` | Wave Properties | Waves |
| 14 | `diag-superposition-interference.md` | Superposition and Interference | Waves |
| 15 | `diag-refraction-total-internal-reflection.md` | Refraction and TIR | Waves |
| 16 | `diag-electric-fields.md` | Electric Fields | Fields |
| 17 | `diag-magnetic-fields.md` | Magnetic Fields | Fields |
| 18 | `diag-electromagnetism-unification.md` | Electromagnetism Unification | Fields |
| 19 | `diag-radioactivity.md` | Radioactivity | Nuclear and Particle |
| 20 | `diag-nuclear-energy.md` | Nuclear Energy | Nuclear and Particle |

## Prerequisite Chains

```
Quantities and Units
  └── Kinematics
        └── Dynamics
              ├── Work, Energy and Power
              ├── Momentum
              ├── Circular Motion
              └── Oscillations

Properties of Materials
  └── (supports Dynamics, Work-Energy)

Current and Resistance
  └── DC Circuits
        └── Capacitance

Wave Properties
  └── Superposition and Interference
        └── Refraction and TIR

Electric Fields
  ├── Magnetic Fields
  └── Electromagnetism Unification

Radioactivity
  └── Nuclear Energy
```

**Critical dependency notes:**
- Kinematics must be mastered before Dynamics.
- Dynamics underpins Work-Energy, Momentum, Circular Motion, and Oscillations.
- Electric Fields is required before Magnetic Fields and Electromagnetism Unification.
- Superposition and Interference requires Wave Properties.
- Nuclear Energy builds on Radioactivity.

## Integration Test Cross-References

Integration tests explicitly combine two or more topics. The following matrix shows which topics appear in integration tests across the suite:

| Primary Topic | Integration Partners |
|---|---|
| Quantities and Units | Kinematics, Dynamics |
| Kinematics | Dynamics, Circular Motion |
| Dynamics | Work-Energy, Momentum |
| Work-Energy | Momentum, Gravitational Fields |
| Momentum | Circular Motion, Kinematics |
| Circular Motion | Gravitational Fields, Oscillations |
| Oscillations | Wave Properties, Capacitance |
| Gravitational Fields | Electric Fields, Circular Motion |
| Properties of Materials | Dynamics, Work-Energy |
| Current and Resistance | DC Circuits, Electric Fields |
| DC Circuits | Capacitance, Current and Resistance |
| Capacitance | Oscillations, DC Circuits |
| Wave Properties | Superposition, Oscillations |
| Superposition | Refraction/TIR, Wave Properties |
| Refraction/TIR | Wave Properties, Electric Fields |
| Electric Fields | Magnetic Fields, Gravitational Fields |
| Magnetic Fields | Electromagnetism, Electric Fields |
| Electromagnetism | Magnetic Fields, Wave Properties |
| Radioactivity | Nuclear Energy, Quantities and Units |
| Nuclear Energy | Radioactivity, Gravitational Fields |

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

1. Begin with `diag-quantities-units.md`. If score is below 13, revise before proceeding.
2. Work through prerequisite chains in order.
3. After completing a topic, attempt its integration tests to check cross-topic fluency.
4. Revisit any topic where the gap between unit and integration scores exceeds 4 marks.
5. Use the prerequisite chains to identify whether a low score stems from an earlier topic.

## Key Misconceptions Index

| Topic | Misconception | Diagnostic Test |
|---|---|---|
| Quantities/Units | Dimensional analysis errors | UT-2 |
| Quantities/Units | Systematic vs random uncertainty | UT-3 |
| Kinematics | Displacement vs distance on sign reversal | UT-2 |
| Kinematics | Projectile sign convention errors | IT-1 |
| Dynamics | Friction inequality vs equality | UT-2 |
| Dynamics | Newton's 3rd law pair identification | UT-3 |
| Work-Energy | Work done by friction is negative | UT-1 |
| Work-Energy | Power = Fv not F/t | UT-3 |
| Momentum | Sign convention for velocity direction | UT-2 |
| Momentum | Vector nature of momentum | IT-1 |
| Circular Motion | Centripetal force is not a separate force | UT-1 |
| Circular Motion | Vertical circles: speed varies | IT-1 |
| Oscillations | SHM condition $a = -\omega^2 x$ | UT-1 |
| Oscillations | Resonance vs damping trade-off | IT-2 |
| Gravitational Fields | $g$ at surface vs $g$ at height | UT-1 |
| Gravitational Fields | Gravitational potential is negative | UT-3 |
| Materials | Stress vs strain confusion | UT-1 |
| Materials | Elastic limit vs proportional limit | UT-3 |
| Current/Resistance | V=IR for ohmic conductors only | UT-2 |
| Current/Resistance | Resistivity formula application | UT-3 |
| DC Circuits | Internal resistance effect on terminal voltage | UT-1 |
| DC Circuits | Potential divider with load | UT-2 |
| Capacitance | Energy stored vs energy supplied by battery | UT-3 |
| Capacitance | RC time constant | IT-1 |
| Wave Properties | Intensity proportional to amplitude squared | UT-2 |
| Wave Properties | EM wave speed in vacuum | IT-1 |
| Superposition | Path difference for constructive/destructive | UT-1 |
| Superposition | Diffraction grating vs double slit | IT-2 |
| Refraction/TIR | Critical angle derivation | UT-2 |
| Refraction/TIR | TIR only from denser to less dense | UT-3 |
| Electric Fields | $E = -\frac{dV}{dr}$ sign | UT-3 |
| Electric Fields | Field lines vs equipotentials | IT-1 |
| Magnetic Fields | Fleming's left hand rule | UT-1 |
| Magnetic Fields | Lenz's law direction | UT-3 |
| Electromagnetism | Faraday's law vs Lenz's law | UT-1 |
| Electromagnetism | Transformer equations | IT-2 |
| Radioactivity | Activity = $\lambda N$ not $\lambda N_0$ | UT-2 |
| Radioactivity | Beta decay neutrino | UT-3 |
| Nuclear Energy | Binding energy per nucleon curve | UT-2 |
| Nuclear Energy | Mass defect = binding energy | UT-1 |
