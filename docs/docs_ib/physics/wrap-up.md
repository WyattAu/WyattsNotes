---
title: Wrap Up
slug: wrap-up
description:
  'IB Physics Wrap Up notes covering key definitions, core concepts, worked examples, and practice
  questions for thorough study and examination practice.'
---

# IB Physics -- Course Wrap-Up

This page provides a summary of key concepts across all five thematic areas of IB Physics and
strategies for final revision.

## Thematic Area Summaries

| Theme                                 | Key Topics                                                         | Full Notes                                                               |
| :------------------------------------ | :----------------------------------------------------------------- | :----------------------------------------------------------------------- |
| A -- Space, Time, and Motion          | Kinematics, dynamics, work and energy, momentum, rotational motion | [Mechanics](./1-space-time-and-motion/1_kinematics)                      |
| B -- The Particulate Nature of Matter | Thermodynamics, atomic physics, current electricity                | [Matter](./2-particulate-nature-of-matter/1_thermodynamics)              |
| C -- Wave Behaviour                   | SHM, wave properties, wave phenomena                               | [Waves](./3-wave-behaviour/1_simple-harmonic-motion)                     |
| D -- Fields                           | Gravitational fields, electric and magnetic fields                 | [Fields](./4-fields/1_gravitational-fields)                              |
| E -- Nuclear and Quantum Physics      | Quantum physics, radioactive decay, structure of the atom          | [Nuclear](./5-nuclear-and-quantum-physics/1_quantum-and-nuclear-physics) |

## Review Strategies

1. Work through each theme's wrap-up practice questions systematically.
2. Focus on connecting concepts across themes -- many exam questions require integration of multiple
   areas.
3. Practise dimensional analysis and estimation as a check on your working.
4. Review common pitfalls identified in each topic section.
5. Re-derive key formulae from first principles rather than relying solely on memorisation.

## Course Structure

IB Physics (first assessment 2025) is organised around five thematic areas:

- **A -- Space, Time, and Motion**: Kinematics, dynamics, work/energy, momentum, rotational motion
  (core + AHL).
- **B -- The Particulate Nature of Matter**: Thermodynamics, atomic physics, current electricity
  (core + AHL).
- **C -- Wave Behaviour**: SHM, wave properties, wave phenomena (core + AHL).
- **D -- Fields**: Gravitational fields, electric fields, magnetic fields (core + AHL).
- **E -- Nuclear and Quantum Physics**: Quantum physics, radioactive decay, atomic structure (core +
  AHL).

Additionally, students choose one **Option** from: A. Relativity, B. Engineering Physics, C.
Imaging, D. Astrophysics, E. Particle Physics, F. Nuclear Physics. The option counts for 15% of the
final mark.

Core topics (80 hours SL, 80 hours HL) are assessed at both levels. AHL topics (55 additional hours)
extend the core with greater mathematical rigour and are only assessed at HL.

## Exam Format

### Paper 1 (MCQ)

- SL: 30 questions, 45 minutes. HL: 40 questions, 60 minutes.
- Covers core + AHL (for HL) across all five themes.
- No calculator allowed. Questions test qualitative understanding, estimations, and basic
  arithmetic.
- Strategy: eliminate obviously wrong options first. For estimation questions, check the order of
  magnitude before selecting an answer.

### Paper 2 (Structured Response)

- SL: 4 short-answer questions (45 marks) + 1 extended-response question (20 marks), 75 minutes.
- HL: 4 short-answer questions (60 marks) + 1 extended-response question (24 marks), 135 minutes.
- Calculator allowed. Data booklet provided.
- Extended-response questions often require multi-step derivations or combining concepts from
  different themes.
- Strategy: show all working. Method marks are awarded even if the final answer is incorrect. Write
  units at every intermediate step.

### Paper 3 (Practical / Data-Based)

- Section A (data-based): A stimulus passage with associated questions. Tests experimental design,
  data analysis, and evaluation of methods.
- Section B (practical): A short experiment followed by analysis questions. Tests measurement
  technique, graphing, uncertainty propagation, and error evaluation.
- SL: 1 hour. HL: 1.5 hours.
- Calculator and data booklet allowed.
- Key skills: drawing best-fit lines, calculating gradients and intercepts with uncertainty,
  designing controlled experiments, identifying systematic vs random errors.

## Key Mathematical Skills

### Significant Figures

- Final answers should be given to the same number of significant figures as the least precise input
  value, or as stated in the question.
- Intermediate calculations should retain at least one extra significant figure to avoid rounding
  errors propagating through multi-step problems.
- Do not round constants (e.g., g = 9.8, c = 3.0 x 10^8) to fewer figures than necessary before
  substituting.

### Uncertainty Propagation

For quantities calculated from measured values:

- **Addition/subtraction**: Absolute uncertainties add. If z = x + y, then delta_z = delta_x +
  delta_y.
- **Multiplication/division**: Percentage uncertainties add. If z = xy, then (delta_z / z) =
  (delta_x / x) + (delta_y / y).
- **Powers**: Multiply the percentage uncertainty by the power. If z = x^n, then (delta_z / z) =
  n \* (delta_x / x).

When combining both types (e.g., z = ax + b/x), split the expression and apply each rule to the
appropriate term.

### Linearisation

Many relationships in IB Physics are non-linear (e.g., T^2 proportional to L for a pendulum). To
extract the gradient:

1. Rearrange the equation into the form y = mx + c, where y and x are measurable quantities.
2. Plot the rearranged variables on a graph.
3. The gradient m gives the constant of proportionality.
4. The y-intercept c should be consistent with the physical scenario (often zero).

Example: For T = 2*pi*sqrt(L/g), square both sides to get T^2 = (4*pi^2/g) * L. Plot T^2 (y-axis)
against L (x-axis). The gradient is 4\*pi^2/g, from which g can be determined.

## Data Booklet Usage

- The data booklet contains physical constants, formulae, and unit conversions. Know its layout so
  you can find information quickly under exam conditions.
- Not all formulae are in the booklet. Key formulae you must derive or memorise include: centripetal
  acceleration (a = v^2/r), kinetic energy (E_k = 1/2 mv^2), escape velocity (v = sqrt(2GM/R)), and
  the mirror/lens equation.
- Use the data booklet as a reference, not a crutch. If you cannot recall a formula without looking
  it up, you do not know it well enough to apply it fluently under time pressure.

## Common Calculation Errors

1. **Mixing units**: Always convert all quantities to SI units before substituting. Common traps: km
   to m, cm to m, minutes to seconds, grams to kg, degrees Celsius to Kelvin.
2. **Vector sign errors**: In kinematics, define a positive direction before writing equations.
   Sticking a negative sign in the wrong place in a kinematic equation is the single most frequent
   error.
3. **Forgetting to square in T^2 proportional to L**: Students often plot T vs L and get a curve,
   then try to draw a best-fit line. Square the dependent variable first.
4. **Confusing resistance and resistivity**: R = rho \* L / A. Resistance depends on geometry;
   resistivity is a material property.
5. **Incorrect gradient units**: When calculating a gradient from a graph, the units are (y-axis
   units) / (x-axis units). Omitting these loses a mark in Paper 3.
6. **Applying the data booklet formula for the wrong context**: The booklet has many similar-looking
   formulae. Read the question carefully to identify which variables are given and which are
   unknown, then select the correct formula.

## Study Strategy

### Topic-by-Topic vs Integrated

In the early stages of revision, work topic-by-topic to build fluency within each theme. Use the
topic pages on WyattsNotes for structured revision.

In the final 6-8 weeks before exams, switch to integrated practice:

- Work full past papers under timed conditions.
- Focus on questions that combine multiple themes (e.g., a mechanics question that requires energy
  conservation from Theme A and circular motion calculations from the same theme, then applies the
  result to a gravitational field problem in Theme D).
- Identify weak themes through past paper performance and allocate extra time to those areas.

### Formula Memorisation Strategy

Not every formula in the data booklet needs to be memorised. Prioritise:

- Formulae **not** in the booklet (centripetal acceleration, escape velocity, energy stored in a
  spring, decay law, Bernoulli's equation for HL).
- Formulae that must be derived quickly in the exam (e.g., deriving theSHM equation from Newton's
  second law and Hooke's law).
- Definitions that double as formulae (e.g., electric field strength E = F/q, gravitational
  potential energy U = -GMm/r).

For formulae in the booklet, focus on knowing what each symbol represents and the conditions under
which the formula applies (e.g., kinematic equations assume constant acceleration).

## Cross-Topic Connections

Understanding connections between themes is essential for extended-response questions and for
building a coherent mental model of physics:

- **Energy conservation** appears in Theme A (work-energy theorem, kinetic and potential energy),
  Theme B (first law of thermodynamics, specific heat capacity), and Theme D (electric potential
  energy, gravitational potential energy). All are manifestations of the same principle.
- **Force fields** in Theme D (gravitational and electric) follow mathematically identical
  structures: F proportional to 1/r^2, potential proportional to 1/r, field strength proportional to
  1/r^2. Mastery of one transfers to the other.
- **Wave behaviour** (Theme C) connects to **quantum physics** (Theme E) through wave-particle
  duality, de Broglie wavelength, and the probability amplitude interpretation.
- **SHM** (Theme C) connects to **orbital mechanics** (Theme D) through the analogy between
  mass-spring systems and satellite orbits: both are governed by a restoring force proportional to
  displacement.

Recognising these connections reduces the effective number of distinct concepts you need to learn
and improves your ability to tackle synoptic questions.

## Common Pitfalls

1. Confusing scalar and vector quantities in kinematics and dynamics problems.
2. Misapplying the conservation laws (energy, momentum) when external forces are present.
3. Forgetting to convert units (especially degrees to radians, and temperature scales).
4. Neglecting significant figures and uncertainty in final answers.
