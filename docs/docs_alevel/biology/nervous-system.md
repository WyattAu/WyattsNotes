---
title: Nervous System
description:
  'A-Level Biology Nervous System notes covering key definitions, core concepts, worked examples,
  and practice questions for in-depth revision and exam readiness.'
date: 2026-04-18T00:00:00.000Z
tags:
  - Biology
  - ALevel
categories:
  - Biology
slug: nervous-system
sidebar_position: 8
---

## Nervous System

:::info Board Coverage AQA Paper 2 | Edexcel A Paper 2 | OCR (A) Paper 2 | CIE Paper 4 :::

## 1. Neuron Structure

### 1.1 Types of Neurone

The nervous system contains three functional types of neurone:

| Type                         | Structure                                 | Function                                                 |
| ---------------------------- | ----------------------------------------- | -------------------------------------------------------- |
| Sensory (afferent) neurone   | Long axon; cell body in ganglion near CNS | Carries impulses from receptors to the CNS               |
| Motor (efferent) neurone     | Cell body in CNS; long axon to effector   | Carries impulses from CNS to effectors (muscles, glands) |
| Relay (intermediate) neurone | Short axon; cell body entirely within CNS | Connects sensory and motor neurones within the CNS       |

**Structural features common to all neurones:**

- **Cell body (soma)**: contains the nucleus, mitochondria, ribosomes, and other organelles. Site of
  protein synthesis.
- **Dendrites**: branched extensions that receive impulses from other neurones and transmit them
  towards the cell body.
- **Axon**: a single, long cytoplasmic extension that transmits impulses away from the cell body.
  Surrounded by a fatty insulating sheath (myelin).
- **Axon terminals (synaptic knobs)**: branched endings that form synaptic junctions with the next
  neurone or effector.

### 1.2 Myelination

Many axons are surrounded by a **myelin sheath**, a lipid-rich insulating layer formed by Schwann
cells (in the peripheral nervous system) or oligodendrocytes (in the central nervous system). The
myelin sheath is not continuous; gaps between Schwann cells are called **nodes of Ranvier**
(approximately $1$--$3\ \mu\mathrm{m}$ apart).

Myelination has two critical effects:

1. **Electrical insulation**: the myelin sheath prevents ion leakage across the membrane,
   maintaining the potential difference along the axon.
2. **Saltatory conduction**: action potentials jump from node to node (the only places where the
   axon membrane is exposed to the extracellular fluid), dramatically increasing the speed of
   transmission.

| Feature            | Myelinated Neurone                   | Non-Myelinated Neurone                          |
| ------------------ | ------------------------------------ | ----------------------------------------------- |
| Speed              | $15$--$120\ \mathrm{m\ s^{-1}}$      | $0.5$--$2\ \mathrm{m\ s^{-1}}$                  |
| Conduction         | Saltatory (jumping between nodes)    | Continuous wave of depolarisation               |
| Energy consumption | Lower (fewer ions need to be pumped) | Higher (more $\mathrm{Na^+/K^+}$ pump activity) |

:::warning Common Pitfall Students often write that "myelin speeds up the action potential." More
precisely, myelin forces the action potential to jump between nodes of Ranvier (saltatory
conduction), which is much faster than continuous propagation. The speed increase is because less
membrane needs to be depolarised, and the local current flows further ahead to depolarise the next
node.
:::

## 2. Resting Potential

### 2.1 Establishing the Resting Potential

The **resting potential** is the electrical potential difference across the membrane of a resting
neurone, with the inside being approximately $-70\ \mathrm{mV}$ relative to the outside. This is
maintained by the **sodium-potassium pump** and differential membrane permeability.

**The sodium-potassium pump ($\mathrm{Na^+/K^+}$ ATPase)** actively transports ions:

- Moves $3\ \mathrm{Na^+}$ **out** of the cell.
- Moves $2\ \mathrm{K^+}$ **in**.
- Uses one ATP per cycle.

This creates two concentration gradients:

| Ion             | Extracellular Concentration           | Intracellular Concentration           | Gradient       |
| --------------- | ------------------------------------- | ------------------------------------- | -------------- |
| $\mathrm{Na^+}$ | $\approx 145\ \mathrm{mmol\ dm^{-3}}$ | $\approx 12\ \mathrm{mmol\ dm^{-3}}$  | Outward (10:1) |
| $\mathrm{K^+}$  | $\approx 4\ \mathrm{mmol\ dm^{-3}}$   | $\approx 155\ \mathrm{mmol\ dm^{-3}}$ | Inward (40:1)  |

The resting membrane is much more permeable to $\mathrm{K^+}$ than to $\mathrm{Na^+}$ (due to more
$\mathrm{K^+}$ leak channels). $\mathrm{K^+}$ diffuses out of the cell down its concentration
gradient, carrying positive charge with it. This makes the inside negative relative to the outside.
The resting potential is close to the equilibrium potential for $\mathrm{K^+}$ (approximately
$-90\ \mathrm{mV}$), but is slightly less negative (around $-70\ \mathrm{mV}$) because of a small
inward leak of $\mathrm{Na^+}$.

### 2.2 Quantifying the Resting Potential: The Nernst Equation

The equilibrium potential for an ion is given by the Nernst equation:

$$E = \frac{RT}{zF} \ln\frac◆LB◆[\text{ion}]_{\text{out}}◆RB◆◆LB◆[\text{ion}]_{\text{in}}◆RB◆$$

Where $R = 8.314\ \mathrm{J\ mol^{-1}\ K^{-1}}$, $T$ is temperature in Kelvin, $z$ is the ion's
charge, and $F = 96485\ \mathrm{C\ mol^{-1}}$.

At body temperature ($37\ ^\circ\mathrm{C} = 310\ \mathrm{K}$):

$$E_{\mathrm{K}} = \frac◆LB◆8.314 \times 310◆RB◆◆LB◆1 \times 96485◆RB◆ \ln\frac{4}{155} = 0.0267 \times \ln(0.0258) = 0.0267 \times (-3.66) = -97.7\ \mathrm{mV}$$

$$E_{\mathrm{Na}} = \frac◆LB◆8.314 \times 310◆RB◆◆LB◆1 \times 96485◆RB◆ \ln\frac{145}{12} = 0.0267 \times \ln(12.08) = 0.0267 \times 2.49 = +66.5\ \mathrm{mV}$$

The actual resting potential ($-70\ \mathrm{mV}$) lies between $E_{\mathrm{K}}$ and
$E_{\mathrm{Na}}$Weighted by the relative permeabilities.

## 3. Action Potentials

### 3.1 Depolarisation and the All-or-Nothing Principle

An action potential is a rapid reversal of the membrane potential from approximately
$-70\ \mathrm{mV}$ to approximately $+40\ \mathrm{mV}$Followed by a return to the resting potential.

**Stages of the action potential:**

1. **Depolarisation**: a stimulus causes voltage-gated $\mathrm{Na^+}$ channels to open.
   $\mathrm{Na^+}$ ions rush into the axon down their electrochemical gradient (attracted by the
   negative interior and by the higher external concentration). The membrane potential rapidly
   depolarises from $-70\ \mathrm{mV}$ to $+40\ \mathrm{mV}$.

2. **Repolarisation**: at approximately $+40\ \mathrm{mV}$The voltage-gated $\mathrm{Na^+}$ channels
   close and voltage-gated $\mathrm{K^+}$ channels open. $\mathrm{K^+}$ ions rush out of the axon
   down their concentration gradient, carrying positive charge out and restoring the negative
   interior.

3. **Hyperpolarisation (overshoot)**: the $\mathrm{K^+}$ channels are slow to close, so
   $\mathrm{K^+}$ continues to diffuse out after the resting potential has been reached, making the
   inside temporarily more negative than $-70\ \mathrm{mV}$ (approximately $-80\ \mathrm{mV}$).

4. **Restoring the resting potential**: the $\mathrm{K^+}$ channels close, and the
   $\mathrm{Na^+/K^+}$ pump restores the original ion concentrations (this is slower and uses ATP).

**The all-or-nothing principle**: a stimulus must reach a **threshold value** (approximately
$-55\ \mathrm{mV}$) to trigger an action potential. A sub-threshold stimulus produces no action
potential. Once threshold is reached, the action potential is always the same size
($+40\ \mathrm{mV}$) -- it does not increase with stronger stimuli. The intensity of a stimulus is
encoded in the **frequency** of action potentials, not their amplitude.

### 3.2 The Refractory Period

After an action potential, the neurone enters a **refractory period** during which it cannot be
stimulated to fire another action potential:

- **Absolute refractory period**: voltage-gated $\mathrm{Na^+}$ channels are inactivated (they
  cannot reopen immediately). No stimulus, however strong, can generate a new action potential. This
  ensures action potentials travel in one direction only.
- **Relative refractory period**: the $\mathrm{Na^+}$ channels have recovered but the membrane is
  hyperpolarised (more negative than resting). An action potential can be generated only by a
  stronger-than-normal stimulus.

### 3.3 Propagation of the Action Potential

Action potentials are propagated along the axon by local currents. When one region of the membrane
is depolarised, the positive charges inside flow laterally to adjacent regions, depolarising them to
threshold and triggering a new action potential. The region behind the action potential is
refractory, preventing backward propagation.

**Factors affecting conduction velocity:**

- **Axon diameter**: larger axons have lower internal resistance, allowing faster current flow.
  Conduction velocity is proportional to the square root of axon diameter.
- **Myelination**: saltatory conduction in myelinated axons is much faster
  ($15$--$120\ \mathrm{m\ s^{-1}}$) than continuous conduction in non-myelinated axons
  ($0.5$--$2\ \mathrm{m\ s^{-1}}$).

### 3.4 Worked Example: Calculating Conduction Velocity

An action potential is recorded at two points on an axon separated by $8.0\ \mathrm{cm}$. The time
between the two recordings is $2.0\ \mathrm{ms}$.

$$\text{Velocity} = \frac◆LB◆\text{distance}◆RB◆◆LB◆\text{time}◆RB◆ = \frac◆LB◆0.080\ \mathrm{m}◆RB◆◆LB◆0.002\ \mathrm{s}◆RB◆ = 40\ \mathrm{m\ s^{-1}}$$

This is consistent with a myelinated axon of moderate diameter.

## 4. Synaptic Transmission

### 4.1 Structure of a Synapse

A **synapse** is the junction between two neurones (or between a neurone and an effector). The gap
between the cells is the **synaptic cleft** (approximately $20$--$30\ \mathrm{nm}$ wide). The
neurone before the synapse is the **presynaptic neurone**; the one after is the **postsynaptic
neurone**.

Key structures:

- **Synaptic vesicles**: in the presynaptic terminal, containing neurotransmitter molecules.
- **Presynaptic membrane**: contains voltage-gated $\mathrm{Ca^{2+}}$ channels.
- **Synaptic cleft**: the gap filled with extracellular fluid.
- **Postsynaptic membrane**: contains receptor proteins (ligand-gated ion channels) specific to the
  neurotransmitter.
- **Mitochondria**: in the presynaptic terminal, providing ATP for neurotransmitter synthesis and
  vesicle recycling.

### 4.2 Mechanism of Synaptic Transmission

1. An action potential arrives at the presynaptic terminal.
2. The depolarisation opens **voltage-gated $\mathrm{Ca^{2+}}$ channels** in the presynaptic
   membrane.
3. $\mathrm{Ca^{2+}}$ ions diffuse into the presynaptic terminal down their concentration gradient.
4. The influx of $\mathrm{Ca^{2+}}$ causes synaptic vesicles to fuse with the presynaptic membrane
   (exocytosis), releasing neurotransmitter into the synaptic cleft.
5. The neurotransmitter diffuses across the synaptic cleft and binds to specific **receptor
   proteins** on the postsynaptic membrane.
6. Binding opens **ligand-gated ion channels** on the postsynaptic membrane:

- If $\mathrm{Na^+}$ channels open: $\mathrm{Na^+}$ enters the postsynaptic neurone, causing
  depolarisation (excitatory postsynaptic potential, EPSP).
- If $\mathrm{Cl^-}$ channels open: $\mathrm{Cl^-}$ enters (or $\mathrm{K^+}$ exits), causing
  hyperpolarisation (inhibitory postsynaptic potential, IPSP).

7. If the combined EPSPs reach threshold ($-55\ \mathrm{mV}$), an action potential is triggered in
   the postsynaptic neurone.
8. The neurotransmitter is rapidly removed from the synaptic cleft by: enzymatic breakdown (e.g.,
   acetylcholinesterase breaks down acetylcholine); reuptake into the presynaptic neurone; diffusion
   away from the synapse.

### 4.3 Excitatory and Inhibitory Synapses

| Feature                         | Excitatory Synapse                                           | Inhibitory Synapse                                           |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Neurotransmitter example        | Acetylcholine (at neuromuscular junction), glutamate         | GABA (in the brain), glycine                                 |
| Ion channels opened             | $\mathrm{Na^+}$ channels (sometimes also $\mathrm{Ca^{2+}}$) | $\mathrm{Cl^-}$ channels (sometimes $\mathrm{K^+}$ channels) |
| Effect on postsynaptic membrane | Depolarisation (EPSP) -- moves closer to threshold           | Hyperpolarisation (IPSP) -- moves further from threshold     |
| Net effect                      | Increases likelihood of action potential                     | Decreases likelihood of action potential                     |

### 4.4 Summation

A single EPSP is insufficient to reach threshold. The postsynaptic neurone integrates (sums)
multiple inputs:

- **Spatial summation**: multiple presynaptic neurones release neurotransmitter simultaneously onto
  the same postsynaptic neurone. The combined depolarisation from several EPSPs reaches threshold.
- **Temporal summation**: a single presynaptic neurone fires action potentials in rapid succession.
  The EPSPs overlap and add together before the first one decays, reaching threshold.

:::warning Common Pitfall Students often write that "neurotransmitters cross the synaptic cleft by
diffusion" without specifying that they bind to receptors. The neurotransmitter diffuses across the
cleft and binds to specific receptor proteins on the postsynaptic membrane. This binding opens ion
channels, which is what causes the change in membrane potential. The specificity of
neurotransmitter-receptor binding is what determines whether the synapse is excitatory or
inhibitory.
:::

## 5. Neurotransmitters

### 5.1 Acetylcholine

Acetylcholine (ACh) is the neurotransmitter at:

- **Neuromuscular junctions** (between motor neurones and muscle fibres) -- always excitatory.
- Many **synapses within the CNS** -- can be excitatory or inhibitory depending on the receptor.
- **Synapses in the parasympathetic nervous system** (e.g., stimulating digestion, slowing heart
  rate).

ACh is synthesised from choline and acetyl-CoA by the enzyme choline acetyltransferase. It is
rapidly broken down in the synaptic cleft by **acetylcholinesterase** into choline and acetate,
which are recycled by the presynaptic neurone. This rapid breakdown ensures that the signal is brief
and precise.

### 5.2 Other Important Neurotransmitters

| Neurotransmitter | Location                       | Function                                                |
| ---------------- | ------------------------------ | ------------------------------------------------------- |
| Noradrenaline    | Sympathetic nervous system     | Fight-or-flight response; increases heart rate          |
| Dopamine         | Basal ganglia, reward pathways | Motor control, motivation, reward, pleasure             |
| Serotonin        | Brainstem, GI tract            | Mood regulation, sleep, appetite, temperature           |
| GABA             | Brain (most common inhibitory) | Reduces neuronal excitability; prevents overactivity    |
| Glutamate        | Brain (most common excitatory) | Major excitatory neurotransmitter; involved in learning |
| Endorphins       | Brain, pituitary               | Natural pain relief; euphoria                           |

### 5.3 Drugs and the Nervous System

Many drugs act by modifying synaptic transmission:

- **Agonists**: mimic the action of a neurotransmitter by binding to its receptors (e.g., nicotine
  mimics ACh at nicotinic receptors).
- **Antagonists**: block the action of a neurotransmitter by binding to receptors without activating
  them (e.g., curare blocks ACh receptors at the neuromuscular junction, causing paralysis).
- **Enzyme inhibitors**: prevent the breakdown of neurotransmitter, prolonging its effect (e.g.,
  organophosphates inhibit acetylcholinesterase, causing continuous muscle contraction and
  paralysis; used as nerve agents and insecticides).
- **Reuptake inhibitors**: block the reuptake of neurotransmitter into the presynaptic neurone,
  increasing its concentration in the synaptic cleft (e.g., fluoxetine/Prozac blocks serotonin
  reuptake, used to treat depression).
- **Stimulants**: increase neurotransmitter release or receptor sensitivity (e.g., amphetamines
  increase dopamine and noradrenaline release).

## 6. Reflex Arcs

### 6.1 Structure of a Reflex Arc

A reflex arc is the pathway by which a reflex action (a rapid, involuntary response to a stimulus)
is carried out. It does not involve conscious processing in the brain, allowing very fast responses
that can be protective.

**Components of a reflex arc:**

1. **Stimulus**: a change in the environment detected by a receptor.
2. **Receptor**: a sensory cell that converts the stimulus into an electrical impulse
   (transduction).
3. **Sensory neurone**: transmits the impulse from the receptor to the CNS (spinal cord).
4. **Relay neurone**: (in some reflex arcs) connects the sensory neurone to the motor neurone within
   the CNS.
5. **Motor neurone**: transmits the impulse from the CNS to the effector.
6. **Effector**: a muscle or gland that carries out the response.
7. **Response**: the action taken by the effector (e.g., muscle contraction, gland secretion).

### 6.2 The Knee-Jerk Reflex (Stretch Reflex)

A **monosynaptic reflex** (only one synapse, between the sensory and motor neurone):

1. Tapping the patellar tendon stretches the quadriceps muscle.
2. Stretch receptors (muscle spindles) in the quadriceps detect the stretch and generate impulses.
3. Sensory neurones carry impulses to the spinal cord.
4. The sensory neurone synapses directly with a motor neurone (no relay neurone).
5. The motor neurone carries impulses to the quadriceps muscle, which contracts (causing the leg to
   kick).
6. Simultaneously, an inhibitory interneurone inhibits the motor neurone supplying the antagonistic
   hamstring muscle (reciprocal inhibition).

This reflex is used clinically to test the function of spinal segments L2--L4.

### 6.3 The Withdrawal Reflex

A **polysynaptic reflex** (involves at least one relay neurone):

1. A painful stimulus (e.g., touching a hot object) is detected by pain receptors (nociceptors) in
   the skin.
2. Sensory neurones transmit impulses to the spinal cord.
3. Relay neurones in the spinal cord activate motor neurones that supply the flexor muscles in the
   affected limb (causing withdrawal).
4. Simultaneously, inhibitory interneurones inhibit the motor neurones supplying the extensor
   muscles (reciprocal inhibition).
5. The limb is rapidly withdrawn from the painful stimulus before the brain has time to process the
   information consciously.

The brain is informed of the reflex action (by sensory neurones ascending to the brain), allowing
conscious awareness and modification of the response, but the reflex itself is spinal.

:::warning Common Pitfall Students often state that reflexes "do not involve the brain." Reflexes do
not require brain processing to occur, but the brain receives sensory information about the reflex
via ascending tracts. This allows the brain to modify the response if necessary (e.g., suppressing
the withdrawal reflex if you are carrying something hot).
:::

## 7. Sensory Receptors

### 7.1 Pacinian Corpuscles

Pacinian corpuscles are mechanoreceptors that detect **pressure and vibration** in the skin. They
are found deep in the dermis and subcutaneous tissue.

**Structure**: each consists of the ending of a sensory neurone surrounded by concentric layers of
connective tissue (lamellae) that form an onion-like capsule.

**Mechanism of action:**

1. When pressure is applied, the lamellae are deformed, stretching the neurone membrane.
2. The deformation opens **stretch-mediated sodium channels** in the membrane.
3. $\mathrm{Na^+}$ ions diffuse into the neurone, causing depolarisation.
4. This creates a **generator potential** (a local depolarisation, not an action potential).
5. If the generator potential reaches threshold, it triggers an action potential in the sensory
   neurone.
6. The action potential propagates along the sensory neurone to the CNS.

The generator potential is **graded**: stronger pressure produces larger depolarisation (more sodium
channels open), increasing the frequency of action potentials. This allows the brain to perceive the
intensity of the stimulus.

### 7.2 Other Receptor Types

| Receptor Type    | Stimulus Detected                                                         | Location                                                        |
| ---------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Mechanoreceptors | Pressure, vibration, sound                                                | Skin, inner ear (cochlea)                                       |
| Thermoreceptors  | Temperature changes                                                       | Skin, hypothalamus                                              |
| Chemoreceptors   | Chemical concentration (e.g., $\mathrm{O_2}$, $\mathrm{CO_2}$Glucose, pH) | Carotid bodies, aortic bodies, taste buds, olfactory epithelium |
| Photoreceptors   | Light                                                                     | Retina (rods and cones)                                         |
| Nociceptors      | Pain (tissue damage)                                                      | Skin, joints, internal organs                                   |
| Proprioceptors   | Body position, limb movement                                              | Muscles, tendons, joints                                        |

## 8. Muscle Contraction: The Sliding Filament Mechanism

### 8.1 Structure of Skeletal Muscle

Skeletal muscle is composed of **muscle fibres** (multinucleated cells formed by the fusion of many
myoblasts). Each muscle fibre contains:

- **Myofibrils**: parallel, cylindrical organelles running the length of the fibre, composed of
  repeating units called **sarcomeres**.
- **Sarcomere**: the functional unit of muscle contraction, bounded by Z-lines. Contains two types
  of protein filament:
- **Thick filaments (myosin)**: composed of myosin molecules with globular heads that can bind to
  actin and hydrolyse ATP.
- **Thin filaments (actin)**: composed of actin monomers twisted into a double helix, with binding
  sites for myosin heads. Thin filaments also contain **tropomyosin** (which blocks myosin-binding
  sites on actin at rest) and **troponin** (which binds calcium and moves tropomyosin aside).

**Banding pattern**: the alternating arrangement of thick and thin filaments produces characteristic
bands visible under light microscopy:

- **A-band**: the full length of the thick filament (dark).
- **I-band**: the region containing only thin filaments (light).
- **H-zone**: the central region of the A-band containing only thick filaments (no overlap).
- **Z-line**: the boundary between adjacent sarcomeres.

### 8.2 The Sliding Filament Theory

Muscle contraction occurs by the sliding of thin filaments past thick filaments, drawing the Z-lines
closer together and shortening the sarcomere. The filaments themselves do not change length.

**The cross-bridge cycle:**

1. **Calcium release**: an action potential arrives at the neuromuscular junction (see Section 8.3)
   and triggers muscle contraction. The action potential travels along the sarcolemma (muscle cell
   membrane) and into T-tubules (invaginations of the sarcolemma), causing the sarcoplasmic
   reticulum to release $\mathrm{Ca^{2+}}$ ions into the sarcoplasm.

2. **Calcium binds to troponin**: $\mathrm{Ca^{2+}}$ binds to troponin, causing a conformational
   change that moves tropomyosin away from the myosin-binding sites on actin. The binding sites are
   now exposed.

3. **Cross-bridge formation**: the myosin head (which has already hydrolysed ATP to ADP + $P_i$ and
   is in a high-energy "cocked" position) binds to the exposed binding site on actin, forming a
   **cross-bridge**.

4. **The power stroke**: the myosin head pivots, pulling the thin filament towards the centre of the
   sarcomere. ADP and $P_i$ are released during this step.

5. **ATP binding and cross-bridge detachment**: a new ATP molecule binds to the myosin head, causing
   it to detach from actin.

6. **ATP hydrolysis and re-cocking**: ATP is hydrolysed to ADP + $P_i$And the energy released
   re-cocks the myosin head to its high-energy position, ready for another cycle.

This cycle continues as long as $\mathrm{Ca^{2+}}$ and ATP are available. One power stroke moves the
thin filament approximately $5$--$10\ \mathrm{nm}$.

### 8.3 The Neuromuscular Junction

The neuromuscular junction (NMJ) is a specialised cholinergic synapse between a motor neurone and a
skeletal muscle fibre.

1. An action potential arrives at the motor neurone terminal.
2. Voltage-gated $\mathrm{Ca^{2+}}$ channels open; $\mathrm{Ca^{2+}}$ enters and triggers exocytosis
   of acetylcholine-containing vesicles.
3. ACh diffuses across the synaptic cleft and binds to **nicotinic acetylcholine receptors** on the
   muscle fibre membrane (motor end plate).
4. These receptors are ligand-gated $\mathrm{Na^+}$ channels. When ACh binds, they open, allowing
   $\mathrm{Na^+}$ to enter the muscle fibre.
5. The resulting depolarisation (end-plate potential) opens voltage-gated $\mathrm{Na^+}$ channels
   in the adjacent membrane, triggering an action potential that propagates along the sarcolemma and
   into T-tubules.
6. Acetylcholinesterase in the synaptic cleft rapidly breaks down ACh, terminating the signal.

### 8.4 Energy and Muscle Contraction

Muscle contraction requires ATP for:

- The cross-bridge cycle (myosin head detachment and re-cocking).
- The $\mathrm{Ca^{2+}}$ pump (SERCA) that actively transports $\mathrm{Ca^{2+}}$ back into the
  sarcoplasmic reticulum, ending contraction.
- The $\mathrm{Na^+/K^+}$ pump that restores ion gradients after action potentials.

ATP is regenerated by:

- **Aerobic respiration**: in mitochondria (for sustained, moderate activity).
- **Anaerobic glycolysis**: produces ATP rapidly but also generates lactate (for intense,
  short-duration activity). See [Respiration](/docs/alevel/biology/respiration-depth).
- **Creatine phosphate**: a rapidly mobilised phosphate store in muscle. Creatine phosphate
  transfers its phosphate group to ADP, regenerating ATP almost instantly:
  $$\mathrm{Creatine\ phosphate + ADP \rightleftharpoons creatine + ATP}$$ This provides ATP for
  approximately the first 5--10 seconds of intense activity.

## 9. Nervous Control of Heart Rate

### 9.1 The Autonomic Nervous System

Heart rate is controlled involuntarily by the **autonomic nervous system (ANS)**, which has two
antagonistic divisions:

| Feature                    | Sympathetic Nervous System                       | Parasympathetic Nervous System      |
| -------------------------- | ------------------------------------------------ | ----------------------------------- |
| General role               | Fight-or-flight; increases activity              | Rest-and-digest; decreases activity |
| Neurotransmitter at target | Noradrenaline                                    | Acetylcholine                       |
| Effect on heart rate       | Increases (accelerates)                          | Decreases (decelerates)             |
| Effect on cardiac output   | Increases (via increased rate and stroke volume) | Decreases (via decreased rate)      |

### 9.2 Control Centre: The Medulla Oblongata

The **cardiovascular centre** in the **medulla oblongata** (in the brainstem) coordinates heart
rate:

- The **acceleratory centre** sends impulses via the **sympathetic nervous system** to the
  **sinoatrial node (SAN)**, increasing heart rate.
- The **inhibitory centre** sends impulses via the **vagus nerve** (parasympathetic) to the SAN,
  decreasing heart rate.

### 9.3 Factors Influencing Heart Rate

**Chemoreceptors** in the **aortic body** and **carotid body** detect changes in blood chemistry:

- Low $p\mathrm{O_2}$High $p\mathrm{CO_2}$Or low pH (high $\mathrm{H^+}$ concentration): detected by
  chemoreceptors, which send impulses to the cardiovascular centre. The centre increases sympathetic
  stimulation and decreases parasympathetic stimulation, increasing heart rate to increase blood
  flow to the lungs for gas exchange.

**Baroreceptors** (pressure receptors) in the **aortic arch** and **carotid sinus** detect changes
in blood pressure:

- High blood pressure: baroreceptors are stretched more, sending more impulses to the cardiovascular
  centre. The centre increases parasympathetic stimulation and decreases sympathetic stimulation,
  slowing the heart rate to reduce blood pressure.
- Low blood pressure: reduced baroreceptor stimulation leads to increased sympathetic output and
  decreased parasympathetic output, increasing heart rate to restore blood pressure.

For more detail on the cardiac cycle and pressure changes, see
[Exchange and Transport](/docs/alevel/biology/exchange-and-transport).

## 10. Brain Structure and Function

### 10.1 Major Brain Regions

| Region            | Location                        | Key Functions                                                                                |
| ----------------- | ------------------------------- | -------------------------------------------------------------------------------------------- |
| Cerebrum          | Largest part; two hemispheres   | Conscious thought, memory, language, decision-making, sensory processing, voluntary movement |
| Cerebellum        | Below the cerebrum; at the back | Coordination of movement, balance, posture, fine motor control                               |
| Medulla oblongata | Base of the brainstem           | Control of breathing rate, heart rate, blood pressure (autonomic functions)                  |
| Hypothalamus      | Below the thalamus              | Thermoregulation, osmoregulation (ADH release), hunger, thirst, circadian rhythm             |
| Thalamus          | Above the hypothalamus          | Relay station for sensory information to the cerebrum; filters sensory input                 |
| Pituitary gland   | Below the hypothalamus          | Hormone secretion (ACTH, TSH, FSH, LH, growth hormone, ADH); "master gland"                  |

### 10.2 The Cerebral Cortex

The cerebral cortex is the outer layer of the cerebrum, approximately $2$--$4\ \mathrm{mm}$ thick,
containing cell bodies of neurones (grey matter). It is divided into functional areas:

- **Motor cortex** (frontal lobe): controls voluntary movement of skeletal muscles. The area is
  mapped to specific body parts (the motor homunculus).
- **Somatosensory cortex** (parietal lobe): receives and processes sensory information from the skin
  (touch, pressure, temperature, pain).
- **Visual cortex** (occipital lobe): processes visual information from the eyes.
- **Auditory cortex** (temporal lobe): processes auditory information from the ears.
- **Prefrontal cortex** (anterior frontal lobe): higher cognitive functions: planning,
  decision-making, personality, social behaviour.

## 11. Neurodegenerative Diseases

### 11.1 Alzheimer's Disease

Alzheimer's disease is a progressive neurodegenerative disorder and the most common cause of
dementia.

**Pathology:**

- **Amyloid plaques**: deposits of beta-amyloid peptide ($\mathrm{A\beta_{42}}$) accumulate in the
  spaces between neurones. These plaques are toxic to neurones and disrupt synaptic function.
- **Neurofibrillary tangles**: hyperphosphorylated tau protein accumulates inside neurones,
  disrupting the microtubule transport system that normally moves organelles and molecules along the
  axon.
- **Loss of cholinergic neurones**: neurones using acetylcholine in the cerebral cortex and
  hippocampus degenerate, reducing ACh levels and impairing memory and cognition.

**Symptoms**: progressive memory loss (especially short-term), confusion, language difficulties,
personality changes, loss of ability to perform daily tasks. The hippocampus (essential for forming
new memories) is affected early.

**Risk factors**: age (greatest risk factor), genetics (APOE4 allele), cardiovascular disease, head
injury.

### 11.2 Parkinson's Disease

Parkinson's disease results from the progressive death of **dopamine-producing neurones in the
substantia nigra** (part of the basal ganglia, involved in movement control).

**Pathology**: loss of dopaminergic neurones reduces dopamine levels in the basal ganglia,
disrupting the balance between excitation and inhibition of motor pathways.

**Symptoms**: tremor (especially at rest), bradykinesia (slowness of movement), rigidity (stiff
muscles), postural instability, reduced facial expression. Non-motor symptoms include depression,
sleep disturbances, and cognitive decline.

**Treatment**: L-DOPA (a precursor of dopamine that can cross the blood-brain barrier); dopamine
agonists; deep brain stimulation.

### 11.3 Motor Neurone Disease (MND)

MND (amyotrophic lateral sclerosis, ALS) involves the progressive degeneration of both **upper motor
neurones** (in the motor cortex) and **lower motor neurones** (in the brainstem and spinal cord).
This leads to progressive muscle weakness, wasting, and eventual paralysis, including respiratory
failure. The cause is not fully understood but involves a combination of genetic and environmental
factors.

## Practice Problems

<details>
<summary>Problem 1</summary>
Describe the events that occur at a cholinergic synapse when an action potential arrives at the presynaptic terminal. (6 marks)

**Answer.** (1) The action potential depolarises the presynaptic membrane, opening voltage-gated
$\mathrm{Ca^{2+}}$ channels. (2) $\mathrm{Ca^{2+}}$ ions diffuse into the presynaptic terminal down
their electrochemical gradient. (3) The influx of $\mathrm{Ca^{2+}}$ causes synaptic vesicles
containing acetylcholine to move to and fuse with the presynaptic membrane (exocytosis), releasing
ACh into the synaptic cleft. (4) ACh diffuses across the synaptic cleft and binds to specific
receptor proteins (nicotinic receptors, which are ligand-gated $\mathrm{Na^+}$ channels) on the
postsynaptic membrane. (5) The binding opens the $\mathrm{Na^+}$ channels; $\mathrm{Na^+}$ ions flow
into the postsynaptic neurone, causing depolarisation (an excitatory postsynaptic potential). (6) If
threshold is reached, an action potential is triggered in the postsynaptic neurone. (7)
Acetylcholinesterase in the synaptic cleft hydrolyses ACh into choline and acetate, which are
reabsorbed by the presynaptic neurone, terminating the signal.

<b>If you get this wrong, revise:</b>
[Mechanism of Synaptic Transmission](#42-mechanism-of-synaptic-transmission)

</details>

<details>
<summary>Problem 2</summary>
Explain the sliding filament theory of muscle contraction. In your answer, describe the roles of calcium ions, ATP, tropomyosin, and troponin. (6 marks)

**Answer.** When an action potential reaches a muscle fibre, it travels along the sarcolemma into
T-tubules, triggering the sarcoplasmic reticulum to release $\mathrm{Ca^{2+}}$ into the sarcoplasm.
Calcium ions bind to **troponin**, causing a conformational change that moves **tropomyosin** away
from the myosin-binding sites on actin filaments, exposing them. The myosin heads (which have
already hydrolysed ATP to ADP + $P_i$ and are in a high-energy cocked position) bind to the exposed
sites on actin, forming cross-bridges. The myosin heads pivot (the power stroke), pulling the thin
filaments towards the centre of the sarcomere and releasing ADP + $P_i$. A new molecule of **ATP**
binds to the myosin head, causing it to detach from actin. The ATP is hydrolysed, re-cocking the
myosin head for another cycle. This process continues as long as $\mathrm{Ca^{2+}}$ and ATP are
available. The sliding of filaments shortens each sarcomere, and the combined shortening of all
sarcomeres shortens the entire muscle fibre, producing contraction.

<b>If you get this wrong, revise:</b> [The Sliding Filament Theory](#82-the-sliding-filament-theory)

</details>

<details>
<summary>Problem 3</summary>
Explain how the refractory period ensures that action potentials travel in one direction only along an axon, and why this is important. (4 marks)

**Answer.** During the absolute refractory period, the voltage-gated sodium channels behind the
action potential are inactivated and cannot reopen. This means the region of the axon that has just
been depolarised cannot be depolarised again immediately. When local currents from the action
potential spread ahead (in the forward direction), they depolarise the next region of membrane to
threshold, triggering a new action potential. When the currents spread backwards, they encounter
membrane in the refractory state and cannot depolarise it to threshold. This ensures unidirectional
propagation of the action potential from the cell body towards the axon terminals. Unidirectional
transmission is essential for the orderly flow of information in the nervous system, ensuring that
signals reach the correct target.

<b>If you get this wrong, revise:</b> [The Refractory Period](#32-the-refractory-period)

</details>

<details>
<summary>Problem 4</summary>
A person's blood pressure rises sharply. Describe the sequence of events by which the nervous system detects this change and restores normal blood pressure. (5 marks)

**Answer.** The rise in blood pressure is detected by **baroreceptors** (pressure receptors) in the
aortic arch and carotid sinus. The increased blood pressure causes greater stretching of the
baroreceptor walls, which increases the frequency of action potentials sent to the **cardiovascular
centre** in the **medulla oblongata**. The cardiovascular centre responds by increasing
parasympathetic (vagus nerve) stimulation to the **sinoatrial node (SAN)** and decreasing
sympathetic stimulation. Acetylcholine released by parasympathetic neurones at the SAN slows the
rate of depolarisation of the SAN, reducing heart rate. The decreased heart rate reduces cardiac
output, which lowers blood pressure back towards normal. This is an example of negative feedback.

<b>If you get this wrong, revise:</b>
[Nervous Control of Heart Rate](#9-nervous-control-of-heart-rate)

</details>

<details>
<summary>Problem 5</summary>
Explain how spatial and temporal summation enable a postsynaptic neurone to reach threshold and fire an action potential. (4 marks)

**Answer.** A single excitatory postsynaptic potential (EPSP) produces a depolarisation of a few
millivolts, which is insufficient to reach the threshold of approximately $-55\ \mathrm{mV}$.
**Spatial summation** occurs when multiple presynaptic neurones release neurotransmitter
simultaneously onto different parts of the same postsynaptic neurone. The EPSPs generated at
different synapses on the postsynaptic neurone add together (summate), producing a larger
depolarisation that may reach threshold. **Temporal summation** occurs when a single presynaptic
neurone fires rapidly, releasing neurotransmitter in quick succession. Each EPSP begins before the
previous one has fully decayed, so the depolarisations build on each other, producing a larger
cumulative depolarisation. Both mechanisms allow the nervous system to integrate multiple inputs and
fire action potentials only when sufficient excitatory input is received.

<b>If you get this wrong, revise:</b> [Summation](#44-summation)

</details>

## 12. Detailed Neurone Physiology

### 12.1 The Refractory Period in Detail

The refractory period has critical functional consequences:

1. **Unidirectional propagation**: during the absolute refractory period, the sodium channels behind
   the action potential are inactivated. Local currents from the active region cannot depolarise
   this region to threshold because the channels cannot reopen. This forces the action potential to
   propagate in one direction only -- from the cell body towards the axon terminals.

2. **Frequency coding**: the refractory period limits the maximum frequency at which action
   potentials can fire. If the absolute refractory period is approximately $1\ \mathrm{ms}$The
   maximum firing rate is approximately $1000$ action potentials per second. In practice, the
   relative refractory period extends the minimum interval between action potentials, reducing the
   maximum rate further.

3. **Prevention of tetanus**: skeletal muscles stimulated by nerve impulses at high frequency
   undergo sustained contraction (tetanus) because calcium remains in the sarcoplasm. However,
   individual action potentials remain discrete because each must wait for the refractory period
   before the next can be generated. This is why nerve impulses are always all-or-nothing events,
   not graded responses.

### 12.2 Myelination and Conduction Velocity

The relationship between axon diameter and conduction velocity for myelinated and non-myelinated
axons is approximately:

- **Non-myelinated**: $v \approx k \cdot d^{0.5}$ (velocity proportional to the square root of
  diameter)
- **Myeliated**: $v \approx 6 \cdot d$ (velocity approximately proportional to diameter)

The much steeper relationship for myelinated axons means that larger myelinated axons have
disproportionately faster conduction velocities. This is why the largest axons in the nervous system
(e.g., the giant squid axon, diameter $\approx 500\ \mu\mathrm{m}$) are unmyelinated -- at such
large diameters, the increased resistance per unit length is less significant.

### 12.3 Local Currents and Cable Theory

The depolarisation at one point on the axon membrane creates a circuit with the adjacent,
still-polarised region. Current flows from the depolarised region (positive inside) to the adjacent
polarised region (negative inside), completing the circuit through the extracellular fluid.

The distance an action potential can propagate without being too attenuated depends on the **length
constant ($\lambda$)**:

$$\lambda = \sqrt◆LB◆\frac{r_m}{r_i + r_o}◆RB◆$$

Where $r_m$ is the membrane resistance ($\Omega \cdot \mathrm{cm}$), $r_i$ is the intracellular
(axial) resistance ($\Omega\ \mathrm{cm^{-1}}$), and $r_o$ is the extracellular resistance.

For myelinated axons, $r_m$ is very high (due to the insulating myelin sheath), so $\lambda$ is very
large. This means the depolarisation can spread further without attenuation, and saltatory
conduction is efficient.

## 13. Synaptic Integration

### 13.1 EPSPs and IPSPs

**Excitatory postsynaptic potentials (EPSPs)** are local, graded depolarisations of the postsynaptic
membrane caused by the opening of ligand-gated $\mathrm{Na^+}$ channels. Typical amplitude:
$0.5$--$5\ \mathrm{mV}$. Duration: $5$--$20\ \mathrm{ms}$.

**Inhibitory postsynaptic potentials (IPSPs)** are local, graded hyperpolarisations caused by the
opening of $\mathrm{Cl^-}$ channels (or $\mathrm{K^+}$ channels). Typical amplitude:
$1$--$5\ \mathrm{mV}$ hyperpolarisation. Duration: $10$--$30\ \mathrm{ms}$.

### 13.2 The Postsynaptic Membrane as an Integrator

The postsynaptic neurone's membrane acts as an integrator, summing all incoming EPSPs and IPSPs at
the axon hillock (the region where the axon meets the cell body). The axon hillock has the highest
density of voltage-gated $\mathrm{Na^+}$ channels and therefore the lowest threshold for action
potential initiation.

An action potential is fired only when the net depolarisation at the axon hillock reaches threshold
($\approx -55\ \mathrm{mV}$). This requires the sum of EPSPs minus the sum of IPSPs to exceed
threshold.

### 13.3 Facilitation and Long-Term Potentiation

**Synaptic facilitation**: repeated stimulation of a synapse at high frequency increases the amount
of neurotransmitter released per action potential (due to residual $\mathrm{Ca^{2+}}$ in the
presynaptic terminal). This enhances the postsynaptic response -- each successive EPSP is slightly
larger than the previous one. This is a form of short-term memory at the synaptic level.

**Long-term potentiation (LTP)**: persistent strengthening of a synapse following high-frequency
stimulation. LTP involves:

1. High-frequency stimulation of a presynaptic neurone causes large, sustained increases in
   $\mathrm{Ca^{2+}}$ in the postsynaptic neurone.
2. The $\mathrm{Ca^{2+}}$ activates **CaMKII** (calcium/calmodulin-dependent protein kinase II),
   which phosphorylates AMPA receptors, increasing their conductance.
3. More AMPA receptors are inserted into the postsynaptic membrane.
4. **NMDA receptors** (a type of glutamate receptor that is both ligand-gated and voltage-gated)
   play a key role: they are only activated when the postsynaptic membrane is already depolarised
   (by AMPA receptor-mediated EPSPs) and glutamate is bound. This makes NMDA receptors coincidence
   detectors -- they are activated only when the presynaptic neurone fires repeatedly at high
   frequency.

LTP is considered a cellular mechanism for **learning and memory** in the hippocampus.

## 14. The Eye and Photoreceptors

### 14.1 Retinal Structure

The retina contains two types of photoreceptor:

**Rods:**

- Responsible for vision in low light (scotopic vision).
- Approximately 120 million per eye, concentrated in the periphery.
- Contain the pigment **rhodopsin** (composed of retinal and opsin).
- Sensitive to a broad range of wavelengths (peak at approximately $500\ \mathrm{nm}$Blue-green
  light).
- Low spatial resolution (many rods converge onto a single bipolar cell via convergence).
- Cannot distinguish colour (only one type of photopigment).

**Cones:**

- Responsible for colour vision and high-acuity vision (photopic vision).
- Approximately 6 million per eye, concentrated in the fovea (centre of the retina).
- Three types, each containing a different photopigment sensitive to different wavelengths:
- **S-cones** (blue): peak sensitivity at $\approx 430\ \mathrm{nm}$.
- **M-cones** (green): peak sensitivity at $\approx 530\ \mathrm{nm}$.
- **L-cones** (red): peak sensitivity at $\approx 560\ \mathrm{nm}$.
- High spatial resolution (fewer cones per bipolar cell in the fovea; 1:1 ratio).
- Require brighter light to function (explain why colour vision is poor in dim light).

### 14.2 Phototransduction

When light strikes a photoreceptor:

1. A photon is absorbed by the photopigment (rhodopsin in rods).
2. The pigment bleaches (retinal isomerises from 11-cis to all-trans configuration).
3. This activates transducin (a G-protein), which activates phosphodiesterase (PDE).
4. PDE breaks down cGMP to GMP.
5. The decrease in cGMP causes Na$^+$ channels to close.
6. The cell hyperpolarises (becomes more negative inside).
7. Reduced neurotransmitter release signals to bipolar cells that light has been detected.

### 14.3 The Fovea and Visual Acuity

The **fovea** is a small depression at the centre of the retina where cones are most densely packed.
Each cone connects to a single bipolar cell and a single ganglion cell (1:1:1 pathway), providing
maximum spatial resolution. However, the fovea contains no rods, which is why peripheral vision is
poor in dim light but central vision has high acuity.

## 15. Hormonal and Nervous System Interactions

### 15.1 Adrenal Glands

The adrenal glands sit on top of the kidneys and have two functionally distinct regions:

**Adrenal cortex** (outer region, controlled by ACTH from the pituitary):

- Produces **mineralocorticoids** (e.g., aldosterone), which regulates $\mathrm{Na^+}$ reabsorption
  in the kidneys.
- Produces **glucocorticoids** (e.g., cortisol), which regulates metabolism, suppresses the immune
  system, and responds to stress.

**Adrenal medulla** (inner region, controlled by the sympathetic nervous system):

- Produces **adrenaline** (epinephrine) and **noradrenaline** (norepinephrine) -- catecholamine
  hormones that mediate the fight-or-flight response.
- Secretion is controlled directly by sympathetic preganglionic neurones (not by hormones), making
  the adrenal medulla a specialised neuroendocrine organ.

### 15.2 The Fight-or-Flight Response

Perceived threat $\to$ hypothalamus $\to$ sympathetic nervous system $\to$ adrenal medulla + target
organs:

| Effect                          | Mechanism                                                            |
| ------------------------------- | -------------------------------------------------------------------- |
| Increased heart rate            | Sympathetic stimulation of SAN; adrenaline on $\beta_1$ receptors    |
| Increased ventilation           | Sympathetic stimulation of respiratory muscles                       |
| Pupil dilation                  | Radial muscle contraction (sympathetic)                              |
| Bronchodilation                 | Relaxation of bronchial smooth muscle                                |
| Vasoconstriction of skin        | Redirects blood to muscles and brain                                 |
| Vasodilation of skeletal muscle | Increased blood flow to muscles                                      |
| Glycogenolysis in liver         | Adrenaline stimulates breakdown of glycogen to glucose               |
| Increased blood glucose         | Adrenaline inhibits insulin secretion; stimulates glucagon secretion |
| Inhibition of digestion         | Reduced blood flow to gut; decreased gut motility                    |
| Increased mental alertness      | Adrenaline acts on the brain; pupils dilate for wider visual field   |

For more on hormonal control of blood glucose, see [Homeostasis](/docs/alevel/biology/homeostasis).

## 16. Invertebrate Nervous Systems

### 16.1 Comparison with Vertebrate Nervous Systems

| Feature           | Vertebrate Nervous System                  | Invertebrate Nervous System (e.g., insect)      |
| ----------------- | ------------------------------------------ | ----------------------------------------------- |
| Organisation      | Central (brain + spinal cord) + peripheral | Ventral nerve cord + ganglia                    |
| Neurone structure | Myelinated; saltatory conduction           | Non-myelinated; slower conduction               |
| Speed             | Fast ($15$--$120\ \mathrm{m\ s^{-1}}$)     | Slower ($0.5$--$10\ \mathrm{m\ s^{-1}}$)        |
| Giant axons       | Rare (some in vertebrates)                 | Common (squid giant axon, $500\ \mu\mathrm{m}$) |
| Cell bodies       | In CNS                                     | In ganglia (peripheral)                         |

### 16.2 The Squid Giant Axon

The giant axon of the squid (_Loligo forbesii_) was instrumental in the discovery of the ionic basis
of the action potential (Hodgkin and Huxley, 1952; Nobel Prize 1963). Its large diameter
($\approx 500\ \mu\mathrm{m}$) allowed insertion of microelectrodes for intracellular recording,
which was not possible with smaller vertebrate axons at the time.

Hodgkin and Huxley used the **voltage clamp** technique to hold the membrane potential at a fixed
value and measure the ionic currents flowing across the membrane. This allowed them to determine the
conductances of the $\mathrm{Na^+}$ and $\mathrm{K^+}$ channels as a function of membrane potential,
establishing the Hodgkin-Huxley equations that describe the action potential quantitatively.

## 17. Drugs Affecting Synaptic Transmission

### 17.1 Detailed Mechanisms

**Nicotine** (from tobacco) binds to nicotinic ACh receptors (ligand-gated $\mathrm{Na^+}$ channels)
in the brain, causing $\mathrm{Na^+}$ influx and depolarisation. Prolonged exposure causes receptor
**up-regulation** (increased number of receptors), which contributes to tolerance and addiction.

**Cocaine** blocks the reuptake of dopamine from the synaptic cleft by the dopamine transporter
(DAT). Dopamine accumulates in the synapse, overstimulating postsynaptic receptors. Chronic use
causes down-regulation of dopamine receptors and depletion of dopamine reserves, contributing to the
"crash" and addiction cycle.

**Serotonin reuptake inhibitors (SSRIs)** (e.g., fluoxetine/Prozac) block the serotonin transporter
(SERT), increasing serotonin concentration in the synaptic cleft. This enhances serotonergic
neurotransmission, which is thought to alleviate depression by increasing neurotransmission in brain
circuits that regulate mood, emotion, and sleep.

**Benzodiazepines** (e.g., diazepam/Valium) enhance the effect of GABA (the main inhibitory
neurotransmitter in the brain). They bind to a specific site on the $\mathrm{GABA_A}$ receptor,
increasing the frequency of chloride channel opening, increasing hyperpolarisation of the
postsynaptic membrane. This produces anxiolytic (anti-anxiety), sedative, and muscle-relaxant
effects.

### 17.2 Tolerance and Dependence

**Tolerance**: repeated exposure to a drug reduces its effect. Mechanisms include receptor
down-regulation (fewer receptors), metabolic tolerance (faster drug breakdown), and behavioural
tolerance (learned compensatory responses).

**Dependence**: the body adapts to the continued presence of a drug, so that removal causes
withdrawal symptoms. Physical dependence involves neuroadaptation; psychological dependence involves
craving and compulsive drug-seeking behaviour.

## 18. The Brain: Structure and Function

### 18.1 Major Brain Regions

| Region            | Location                                                       | Key Functions                                                                                                                                    |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cerebrum          | Largest part, divided into left and right cerebral hemispheres | Conscious thought, memory, language, decision-making, sensory processing, voluntary movement                                                     |
| Cerebellum        | Below the cerebrum, behind the brainstem                       | Coordination of movement, balance, posture, motor learning                                                                                       |
| Medulla oblongata | Lowest part of the brainstem                                   | Controls autonomic functions: heart rate, breathing rate (ventilation centre), blood pressure (vasomotor centre), swallowing, coughing, sneezing |
| Hypothalamus      | Below the thalamus, above the pituitary                        | Thermoregulation, osmoregulation, control of pituitary hormone release, hunger and thirst, sleep-wake cycles                                     |
| Thalamus          | Central relay station above the hypothalamus                   | Relays sensory information (except olfaction) to the appropriate area of the cerebrum; involved in consciousness and alertness                   |
| Corpus callosum   | Band of nerve fibres connecting the two cerebral hemispheres   | Communication between left and right hemispheres                                                                                                 |

### 18.2 The Cerebral Cortex

The outer layer of the cerebrum is the **cerebral cortex** (approximately 2--4 mm thick), which is
highly folded (gyri = ridges, sulci = grooves) to increase surface area. It is divided into four
**lobes**:

| Lobe      | Location                                   | Primary Functions                                                                                                                                                 |
| --------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontal   | Front of the brain, behind the forehead    | Motor cortex (voluntary movement), prefrontal cortex (decision-making, planning, personality), Broca's area (speech production -- left hemisphere in most people) |
| Parietal  | Behind the frontal lobe                    | Somatosensory cortex (touch, pressure, temperature, pain perception from the body)                                                                                |
| Temporal  | Side of the brain, below the parietal lobe | Primary auditory cortex (hearing), Wernicke's area (speech comprehension -- left hemisphere), memory formation (hippocampus)                                      |
| Occipital | Back of the brain                          | Primary visual cortex (vision)                                                                                                                                    |

### 18.3 Localisation of Function

**Motor cortex** (frontal lobe): the body is mapped contralaterally (left motor cortex controls the
right side of the body and vice versa) and with disproportionate representation -- areas requiring
fine motor control (hands, face, tongue) have larger areas of the motor cortex devoted to them than
areas requiring less precise control (trunk, legs).

**Somatosensory cortex** (parietal lobe): similarly organised contralaterally and with
disproportionate representation (lips and fingertips have large areas).

Evidence for localisation of function comes from:

- **Brain imaging** (fMRI, PET scans): shows which brain areas are active during specific tasks.
- **Electrical stimulation** (during brain surgery): stimulating specific areas produces specific
  movements or sensations.
- **Lesion studies** (patients with brain damage): damage to Broca's area causes expressive aphasia
  (difficulty speaking); damage to Wernicke's area causes receptive aphasia (difficulty
  understanding speech).
- **Animal experiments**: ablation (surgical removal) of specific brain areas in animals and
  observation of resulting deficits.

### 18.4 Neuroplasticity

**Neuroplasticity** is the ability of the brain to change its structure and function in response to
experience, learning, or injury. Mechanisms include:

- **Synaptic plasticity**: strengthening (LTP) or weakening (LTD) of synaptic connections based on
  activity.
- **Synaptogenesis**: formation of new synapses in response to learning.
- **Axonal sprouting**: surviving neurons grow new branches to replace connections lost to damage.
- **Neurogenesis**: production of new neurons in the hippocampus and olfactory bulb (limited in
  adult mammals).

Neuroplasticity is greatest during childhood (critical periods for language acquisition, vision
development) but continues throughout life. It underlies learning, memory, and recovery from brain
injury (e.g., stroke rehabilitation).

## 19. Visual Processing in Detail

### 19.1 Structure of the Eye

| Component               | Function                                                                                                   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| Cornea                  | Transparent outer layer; refracts (bends) light; provides most of the eye's focusing power                 |
| Iris                    | Coloured ring of muscle; controls the size of the pupil (regulates light entry)                            |
| Pupil                   | Hole in the iris; allows light to enter the eye                                                            |
| Lens                    | Transparent, flexible structure; fine-tunes focusing (accommodation) by changing shape                     |
| Retina                  | Light-sensitive layer at the back of the eye; contains photoreceptors (rods and cones)                     |
| Fovea                   | Area of the retina with the highest density of cones; provides the sharpest vision (highest visual acuity) |
| Optic nerve             | Carries impulses from the retina to the brain                                                              |
| Blind spot (optic disc) | Where the optic nerve leaves the eye; no photoreceptors, so no vision at this point                        |

### 19.2 Rods and Cones

| Feature        | Rods                                                                                       | Cones                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Sensitivity    | High (function well in low light)                                                          | Low (require bright light)                                                                                                |
| Visual acuity  | Low (many rods share a single ganglion cell, so signals are pooled)                        | High (each cone connects to its own ganglion cell via a bipolar cell, so signals are separate)                            |
| Colour vision  | No (only one type of rhodopsin pigment, maximally sensitive at $\approx 500\ \mathrm{nm}$) | Yes (three types: S-cones $\approx 420\ \mathrm{nm}$M-cones $\approx 534\ \mathrm{nm}$L-cones $\approx 564\ \mathrm{nm}$) |
| Distribution   | Concentrated in the periphery of the retina; absent from the fovea                         | Concentrated in the fovea; sparse in the periphery                                                                        |
| Response speed | Slow                                                                                       | Fast                                                                                                                      |
| Number         | $\approx 120$ million per eye                                                              | $\approx 6$ million per eye                                                                                               |

### 19.3 Phototransduction

In the dark, rod cells have high levels of **cGMP**, which opens $\mathrm{Na^+}$ channels
(cGMP-gated channels). $\mathrm{Na^+}$ flows in, depolarising the cell to approximately
$-40\ \mathrm{mV}$. This depolarisation causes the release of the neurotransmitter **glutamate**
onto bipolar cells.

When light strikes rhodopsin, the retinal component changes from the **11-cis** to the **all-trans**
configuration. This activates **transducin** (a G-protein), which activates **phosphodiesterase
(PDE)**. PDE hydrolyses cGMP to GMP, reducing cGMP levels. The $\mathrm{Na^+}$ channels close, the
cell hyperpolarises (to approximately $-70\ \mathrm{mV}$), and glutamate release is reduced.

This hyperpolarisation is unusual (most sensory receptors depolarise when stimulated) but effective:
the reduction in glutamate causes the bipolar cells to change their activity, which is transmitted
to ganglion cells and then to the brain via the optic nerve.

### 19.4 Accommodation

**Accommodation** is the process by which the lens changes shape to focus light from objects at
different distances on the retina:

- **Distant objects** ($> 6\ \mathrm{m}$): the ciliary muscles are relaxed, the suspensory ligaments
  are taut, and the lens is pulled thin (flatter, lower refractive power).
- **Near objects** ($< 6\ \mathrm{m}$): the ciliary muscles contract, the suspensory ligaments
  slacken, and the elastic lens springs back to a more rounded shape (thicker, higher refractive
  power).

The **near point** is the closest distance at which the eye can focus (approximately 25 cm for a
young adult). It increases with age as the lens becomes less elastic (**presbyopia**).

### 19.5 Colour Blindness

Colour blindness results from the absence or malfunction of one or more types of cone:

| Type                       | Cause                                   | Frequency                    |
| -------------------------- | --------------------------------------- | ---------------------------- |
| Protanopia                 | Missing L-cones (red)                   | 1% of males                  |
| Deuteranopia               | Missing M-cones (green)                 | 1% of males                  |
| Tritanopia                 | Missing S-cones (blue)                  | Rare ($< 0.01\%$)            |
| Red-green colour blindness | Missing or defective L-cones or M-cones | 8% of males, 0.5% of females |

Colour blindness is X-linked recessive (genes for L-cones and M-cones are on the X chromosome),
which explains why it is much more common in males (who have only one X chromosome).

## 20. Neuronal Communication: Comparative Summary

### 20.1 Electrical vs Chemical Transmission

| Feature       | Electrical Synapse                          | Chemical Synapse                                           |
| ------------- | ------------------------------------------- | ---------------------------------------------------------- |
| Gap junctions | Present (connexon channels)                 | Not present                                                |
| Speed         | Very fast (no synaptic delay)               | Slower (synaptic delay $\approx 0.5\ \mathrm{ms}$)         |
| Direction     | bidirectional                               | Unidirectional (presynaptic $\to$ postsynaptic)            |
| Transmission  | Direct ionic current flow                   | Neurotransmitter release and receptor binding              |
| Modulation    | Limited                                     | Highly modifiable (basis of learning and memory)           |
| Location      | Cardiac muscle, smooth muscle, some neurons | Most neurons in the CNS and all at neuromuscular junctions |

### 20.2 Synaptic Integration

A single neuron may receive thousands of synaptic inputs from other neurons. Whether the neuron
fires an action potential depends on the **sum of all inputs** at the axon hillock:

- **Excitatory postsynaptic potentials (EPSPs)**: depolarising (e.g., caused by glutamate, ACh).
- **Inhibitory postsynaptic potentials (IPSPs)**: hyperpolarising (e.g., caused by GABA, glycine).
- **Temporal summation**: multiple EPSPs from the same synapse arriving in rapid succession combine
  to reach threshold.
- **Spatial summation**: EPSPs from multiple different synapses arriving simultaneously combine to
  reach threshold.

If the summed depolarisation at the axon hillock reaches the threshold potential (approximately
$-55\ \mathrm{mV}$), voltage-gated $\mathrm{Na^+}$ channels open, and an action potential is
initiated.

:::warning Common Pitfall Students often confuse the terms "threshold" and "resting potential." The
**resting potential** ($-70\ \mathrm{mV}$) is the membrane potential of an unstimulated neuron. The
**threshold potential** ($-55\ \mathrm{mV}$) is the depolarisation level that must be reached to
trigger an action potential. If the membrane depolarises to $-60\ \mathrm{mV}$ (above resting but
below threshold), no action potential is fired.
:::

## 25. Reflex Arcs: Detailed Mechanisms

### 25.1 Components of a Reflex Arc

1. **Receptor**: detects the stimulus and converts it to an electrical impulse (transduction).
2. **Sensory neuron**: transmits the impulse from the receptor to the CNS (spinal cord or brain).
3. **Relay neuron** (interneuron): connects the sensory neuron to the motor neuron within the CNS.
4. **Motor neuron**: transmits the impulse from the CNS to the effector.
5. **Effector**: carries out the response (muscle contracts or gland secretes).

### 25.2 The Spinal Reflex

A **spinal reflex** does not involve the brain (the neural pathway is confined to the spinal cord).
This allows rapid, involuntary responses that protect the body from harm.

**Example: The withdrawal reflex (pulling hand away from a hot object).**

1. Heat receptors in the skin detect the stimulus.
2. A sensory neuron transmits the impulse to the spinal cord.
3. A relay neuron connects the sensory neuron to a motor neuron.
4. A motor neuron transmits the impulse to the biceps muscle (flexor) in the arm.
5. The biceps contracts, pulling the hand away from the hot object.

This is a **monosynaptic reflex** (only one synapse, between the sensory and motor neurons) or a
**polysynaptic reflex** (at least one relay neuron and two synapses).

### 25.3 Reciprocal Innervation and Inhibition

When a muscle contracts during a reflex, the antagonistic muscle must relax. This is achieved by a
**reciprocal inhibitory interneuron**, which releases an inhibitory neurotransmitter (glycine or
GABA) onto the motor neuron supplying the antagonistic muscle, preventing it from contracting.

In the withdrawal reflex:

- The biceps (flexor) motor neuron is stimulated (excitatory synapse).
- The triceps (extensor) motor neuron is inhibited (inhibitory synapse).
- The biceps contracts and the triceps relaxes, allowing the arm to flex.

### 25.4 The Importance of Reflexes

| Feature     | Why It Matters                                                                                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Speed       | Reflexes are faster than voluntary responses because they involve fewer synapses and shorter neural pathways (no processing in the brain). This is critical for survival (e.g., pulling away from heat before tissue damage occurs). |
| Involuntary | Reflexes do not require conscious thought or decision-making, freeing the brain for other tasks.                                                                                                                                     |
| Protection  | Reflexes protect the body from harm (withdrawal, blink, cough, sneeze, gag).                                                                                                                                                         |
| Adaptation  | Simple reflexes can be modified by learning (e.g., the vestibulo-ocular reflex, which stabilises gaze, can be adapted).                                                                                                              |

---

:::tip Diagnostic Test

## 24. Muscle Contraction: The Sliding Filament Theory

### 24.1 Structure of Skeletal Muscle

A muscle is made up of many **muscle fibres** (cells), each containing many **myofibrils**. Each
myofibril is composed of repeating units called **sarcomeres**, the functional units of muscle
contraction.

Each sarcomere contains two types of protein filament:

| Filament            | Protein                               | Structure                                                                           | Function                                                                   |
| ------------------- | ------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Thick filaments** | Myosin                                | Golf-club-shaped heads on a long tail; heads have ATPase activity and bind to actin | Pull thin filaments towards the centre of the sarcomere during contraction |
| **Thin filaments**  | Actin (plus troponin and tropomyosin) | Helical chain of actin monomers with troponin-tropomyosin complex                   | Slides past thick filaments during contraction                             |

**Bands and lines in a sarcomere:**

| Region          | Appearance                                 | What It Contains                                                          |
| --------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| Z line (Z disc) | Dark line at each end of the sarcomere     | Anchors the thin filaments                                                |
| I band          | Light band                                 | Thin filaments only (shortens during contraction)                         |
| A band          | Dark band                                  | Full length of thick filaments (stays the same length during contraction) |
| H zone          | Lighter region in the centre of the A band | Thick filaments only (shortens during contraction)                        |
| M line          | Dark line in the centre of the H zone      | Anchors the thick filaments                                               |

### 24.2 The Sliding Filament Mechanism

1. **Resting state**: tropomyosin blocks the myosin-binding sites on actin. The myosin head is in
   the "cocked" position, with ADP and Pi bound.
2. **Calcium ions released**: action potential triggers $\mathrm{Ca^{2+}}$ release from the
   sarcoplasmic reticulum. $\mathrm{Ca^{2+}}$ binds to **troponin C**, causing a conformational
   change that moves tropomyosin away from the myosin-binding sites on actin.
3. **Cross-bridge formation**: the myosin head binds to an exposed binding site on actin, forming a
   **cross-bridge**.
4. **Power stroke**: the myosin head pivots, pulling the thin filament towards the centre of the
   sarcomere. ADP and Pi are released during the power stroke.
5. **ATP binding**: a new ATP molecule binds to the myosin head, causing it to detach from actin.
6. **ATP hydrolysis**: the ATP is hydrolysed to ADP and Pi, and the energy released recocks the
   myosin head to its starting position. The cycle is ready to repeat.

Each cycle moves the thin filament approximately 5 nm past the thick filament. Thousands of
cross-bridge cycles occur simultaneously in each sarcomere, producing the macroscopic contraction of
the muscle.

### 24.3 Energy for Muscle Contraction

ATP is required for:

- The power stroke (myosin ATPase activity).
- Detaching myosin from actin (preventing rigor mortis).
- Pumping $\mathrm{Ca^{2+}}$ back into the sarcoplasmic reticulum (by $\mathrm{Ca^{2+}}$-ATPase,
  terminating contraction).
- Active transport of $\mathrm{Na^+}$ and $\mathrm{K^+}$ by the $\mathrm{Na^+/K^+}$ ATPase
  (maintaining resting membrane potential for the next action potential).

ATP is regenerated by:

- **Aerobic respiration** (during rest and light exercise): glucose and fatty acids are oxidised in
  mitochondria.
- **Anaerobic respiration** (during intense exercise): glucose is converted to lactate, providing
  rapid ATP but limited quantity.
- **Creatine phosphate**: a short-term energy store in muscle cells. Creatine phosphate donates a
  phosphate group to ADP via creatine kinase, rapidly regenerating ATP:

$$\text{Creatine phosphate} + \text{ADP} \rightleftharpoons \text{Creatine} + \text{ATP}$$

This provides approximately 5--10 seconds of maximal ATP supply before anaerobic glycolysis becomes
the dominant source.

### 24.4 Slow-Twitch and Fast-Twitch Muscle Fibres

| Feature            | Type I (Slow-Twitch)                             | Type IIb (Fast-Twitch)                           |
| ------------------ | ------------------------------------------------ | ------------------------------------------------ |
| Colour             | Red (high myoglobin content)                     | White (low myoglobin)                            |
| Energy source      | Aerobic respiration (fat and glucose)            | Anaerobic glycolysis (glycogen)                  |
| Mitochondria       | Many                                             | Few                                              |
| Capillary supply   | Dense                                            | Sparse                                           |
| Contraction speed  | Slow                                             | Fast                                             |
| Force generated    | Low                                              | High                                             |
| Fatigue resistance | High (resistant to fatigue)                      | Low (fatigues quickly)                           |
| Use                | Endurance activities (marathon running, posture) | Short bursts of power (sprinting, weightlifting) |

Most muscles contain a mixture of both fibre types. The proportion is genetically determined but can
be modified to some extent by training (endurance training increases the oxidative capacity of Type
II fibres).

---

:::tip Diagnostic Test

## 21. Synaptic Transmission: Detailed Mechanism

### 21.1 Step-by-Step: Cholinergic Synapse

1. **Action potential arrives** at the presynaptic terminal (axion terminal).
2. **Depolarisation** of the presynaptic membrane opens **voltage-gated calcium channels**.
3. **$\mathrm{Ca^{2+}}$ ions flow in** down their electrochemical gradient (high concentration
   outside, negative membrane potential inside).
4. The increase in intracellular $\mathrm{Ca^{2+}}$ causes **synaptic vesicles** (containing the
   neurotransmitter acetylcholine, ACh) to move to and fuse with the presynaptic membrane.
5. ACh is released into the **synaptic cleft** by **exocytosis**.
6. ACh diffuses across the synaptic cleft (gap of approximately 20--40 nm) and binds to **nicotinic
   ACh receptors** on the postsynaptic membrane.
7. These receptors are **ligand-gated sodium channels**. When ACh binds, the channel opens, allowing
   $\mathrm{Na^+}$ to flow into the postsynaptic cell.
8. This causes **depolarisation** of the postsynaptic membrane (an **excitatory postsynaptic
   potential**, EPSP).
9. If sufficient EPSPs summate to reach threshold at the axon hillock, an action potential is
   initiated in the postsynaptic neuron.
10. ACh is rapidly broken down by the enzyme **acetylcholinesterase** (attached to the postsynaptic
    membrane), terminating the signal. The products (choline and acetate) are taken up by the
    presynaptic terminal and used to resynthesise ACh.

### 21.2 Synaptic Transmission: Quantitative Analysis

**Synaptic delay**: the time between the arrival of the action potential at the presynaptic terminal
and the initiation of the postsynaptic potential is approximately 0.5 ms. This delay is due to the
time taken for:

- $\mathrm{Ca^{2+}}$ influx.
- Vesicle fusion and neurotransmitter release.
- Diffusion across the synaptic cleft.
- Receptor binding and channel opening.

In a pathway with many synapses (e.g., a polysynaptic reflex arc with 3 synapses), the total delay
is approximately $3 \times 0.5 = 1.5\ \mathrm{ms}$ plus the conduction time along the axons.

**Temporal summation**: if a single presynaptic neuron fires at a high frequency (e.g., 100 impulses
per second, or one every 10 ms), the EPSPs overlap and summate because each EPSP lasts approximately
10--20 ms before decaying.

**Spatial summation**: if multiple presynaptic neurons fire simultaneously, their EPSPs add together
at the postsynaptic membrane.

**Worked Example.** A single EPSP depolarises the postsynaptic membrane by $5\ \mathrm{mV}$. The
threshold for an action potential is $-55\ \mathrm{mV}$And the resting potential is
$-70\ \mathrm{mV}$. The membrane needs to be depolarised by $15\ \mathrm{mV}$ to reach threshold.

- Temporal summation: at least 3 rapid EPSPs from a single presynaptic neuron
  ($3 \times 5 = 15\ \mathrm{mV}$).
- Spatial summation: at least 3 simultaneous EPSPs from 3 different presynaptic neurons
  ($3 \times 5 = 15\ \mathrm{mV}$).
- Combination: 2 EPSPs from neuron A + 1 EPSP from neuron B ($10 + 5 = 15\ \mathrm{mV}$).

## 22. The Nervous System and Disease

### 22.1 Parkinson's Disease

**Cause:** degeneration of **dopamine-producing neurons** in the substantia nigra (midbrain).
Dopamine is essential for the smooth initiation and coordination of voluntary movement.

**Symptoms:** resting tremor (pill-rolling tremor of the hands), bradykinesia (slowness of
movement), rigidity (stiff muscles), postural instability.

**Mechanism:** the basal ganglia (a group of deep brain nuclei) require a balance between dopamine
(inhibitory) and acetylcholine (excitatory) for normal motor control. Loss of dopamine creates an
imbalance, resulting in excessive cholinergic activity and the characteristic motor symptoms.

**Treatment:**

- **L-DOPA** (levodopa): a dopamine precursor that can cross the blood-brain barrier (dopamine
  itself cannot). L-DOPA is converted to dopamine in the brain by DOPA decarboxylase. Often given
  with carbidopa (a DOPA decarboxylase inhibitor that does not cross the blood-brain barrier) to
  prevent peripheral conversion.
- **Dopamine agonists** (e.g., bromocriptine): mimic dopamine by directly stimulating dopamine
  receptors.
- **Anticholinergics**: reduce the excessive cholinergic activity.
- **Deep brain stimulation**: electrodes implanted in the subthalamic nucleus deliver electrical
  impulses, reducing tremor and rigidity.

### 22.2 Myasthenia Gravis

**Cause:** autoimmune disease in which antibodies are produced against **nicotinic ACh receptors**
on the postsynaptic membrane of the neuromuscular junction. The antibodies block the receptors,
causing their internalisation and degradation, and activate complement, damaging the postsynaptic
membrane.

**Effect:** fewer functional ACh receptors are available. Although ACh is released normally, the
postsynaptic response is reduced. The end-plate potential may be too small to reach threshold, and
the action potential fails to fire in the muscle fibre. This causes **muscle weakness** that worsens
with repeated use (fatigability).

**Symptoms:** drooping eyelids (ptosis), double vision (diplopia), difficulty swallowing and
speaking, weakness in the limbs.

**Treatment:** acetylcholinesterase inhibitors (e.g., pyridostigmine) increase the concentration of
ACh in the synaptic cleft by preventing its breakdown, allowing more ACh molecules to bind to the
remaining receptors and increasing the probability of reaching threshold.

### 22.3 Multiple Sclerosis

**Cause:** autoimmune disease in which T cells and macrophages attack the **myelin sheath**
surrounding neurons in the central nervous system. The myelin is replaced by scar tissue (sclerosis,
plaques), disrupting saltatory conduction.

**Effect:** action potentials are slowed or blocked because:

- The myelin sheath provides electrical insulation, allowing the action potential to "jump" between
  Nodes of Ranvier (saltatory conduction).
- Loss of myelin exposes the axon membrane, increasing the capacitance and decreasing the membrane
  resistance, so current leaks away instead of flowing to the next node.
- The action potential may fail to reach the next Node of Ranvier (conduction block).

**Symptoms:** fatigue, visual disturbances (optic neuritis), numbness, muscle weakness, tremor,
difficulty with coordination and balance.

**Type of MS:**

| Type                         | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| Relapsing-remitting (RRMS)   | Episodes of worsening symptoms (relapses) followed by periods of improvement (remissions) |
| Secondary progressive (SPMS) | Initial relapsing-remitting course followed by progressive worsening without remissions   |
| Primary progressive (PPMS)   | Gradual worsening from onset without relapses                                             |

## 23. Sensory Receptors

### 23.1 Types of Sensory Receptors

| Receptor Type   | Stimulus                                                            | Location                                                    | Example                                       |
| --------------- | ------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------- |
| Mechanoreceptor | Mechanical deformation (pressure, stretch, vibration)               | Skin, inner ear, muscles                                    | Pacinian corpuscle, hair cells in cochlea     |
| Thermoreceptor  | Temperature change                                                  | Skin, hypothalamus                                          | Warm and cold receptors in dermis             |
| Chemoreceptor   | Chemical concentration ($\mathrm{O_2}$, $\mathrm{CO_2}$Glucose, pH) | Carotid body, aortic body, taste buds, olfactory epithelium | Carotid body (detects blood $p\mathrm{CO_2}$) |
| Photoreceptor   | Light intensity (rods) and wavelength (cones)                       | Retina                                                      | Rods and cones                                |
| Baroreceptor    | Blood pressure change                                               | Aortic arch, carotid sinus                                  | Aortic baroreceptors                          |

### 23.2 The Pacinian Corpuscle: Mechanism

The Pacinian corpuscle is a pressure receptor found in the skin, tendons, and ligaments. It consists
of a sensory nerve ending surrounded by concentric layers of connective tissue (lamellae).

1. **Pressure** deforms the corpuscle, stretching the lamellae.
2. The stretching deforms the nerve ending, opening **stretch-mediated sodium channels** in the
   membrane.
3. $\mathrm{Na^+}$ flows into the nerve ending, causing **depolarisation** (a **generator
   potential**).
4. If the generator potential reaches threshold, it triggers an **action potential** in the sensory
   neuron.
5. The action potential is transmitted along the sensory neuron to the CNS.
6. The action potential frequency (rate of firing) is proportional to the intensity of the stimulus
   (stronger pressure $=$ larger generator potential $=$ higher frequency of action potentials).

### 23.3 Adaptation

Some receptors **adapt** (respond less to a continued stimulus):

- **Phasic (rapidly adapting) receptors**: respond strongly at the onset of a stimulus but quickly
  reduce their firing rate. They detect changes (dynamic stimuli). Example: Pacinian corpuscle
  (detects vibration and changes in pressure, not sustained pressure).
- **Tonic (slowly adapting) receptors**: maintain their firing rate as long as the stimulus is
  present. They detect steady-state stimuli. Example: stretch receptors in muscles (muscle
  spindles), thermoreceptors.

## 24. The Brain: Structure and Function in Detail

### 24.1 Major Brain Regions

| Region            | Location                                                     | Key Functions                                                                                        |
| ----------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Cerebral cortex   | Outer layer of cerebrum                                      | Conscious thought, language, memory, decision-making, sensory processing, voluntary movement         |
| Cerebellum        | Behind brainstem, below cerebrum                             | Coordination of movement, balance, posture, motor learning                                           |
| Hypothalamus      | Below thalamus                                               | Thermoregulation, osmoregulation, hunger/thirst, sleep-wake cycle, endocrine control (via pituitary) |
| Medulla oblongata | Lowest part of brainstem                                     | Control of breathing rate, heart rate, blood pressure (autonomic functions)                          |
| Corpus callosum   | Band of nerve fibres connecting the two cerebral hemispheres | Communication between left and right hemispheres                                                     |
| Thalamus          | Centre of brain, above hypothalamus                          | Relay station for sensory information (except olfaction) to the cerebral cortex                      |

### 24.2 Cerebral Hemispheres and Lateralisation

The cerebral cortex is divided into two hemispheres, each with four lobes:

| Lobe      | Location                         | Primary Functions                                                                                                                  |
| --------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Frontal   | Behind forehead                  | Motor control (primary motor cortex), decision-making, planning, personality, speech production (Broca's area, in left hemisphere) |
| Parietal  | Behind frontal lobe              | Somatosensory processing (primary somatosensory cortex), spatial awareness                                                         |
| Temporal  | Below frontal and parietal lobes | Auditory processing (primary auditory cortex), memory (hippocampus), language comprehension (Wernicke's area, in left hemisphere)  |
| Occipital | Back of brain                    | Visual processing (primary visual cortex)                                                                                          |

**Lateralisation**: certain functions are predominantly processed in one hemisphere:

- **Left hemisphere** (in most right-handed people): language (speech and comprehension), logical
  reasoning, mathematical ability.
- **Right hemisphere**: spatial awareness, face recognition, musical ability, creative thinking.

### 24.3 Memory Formation

Memory involves three stages:

1. **Encoding**: converting sensory information into a form that can be stored. Involves the
   hippocampus (for declarative memories -- facts and events) and amygdala (for emotional memories).
2. **Storage**: maintaining the encoded information. Short-term memory (working memory) is stored in
   the prefrontal cortex and lasts seconds to minutes. Long-term memory is stored in various
   cortical areas and can last a lifetime.
3. **Retrieval**: accessing stored information when needed.

**Long-term potentiation (LTP)**: a persistent strengthening of synaptic connections that underlies
learning and memory. When two neurons are repeatedly activated together, the synaptic connection
between them is strengthened (Hebb's rule: "neurons that fire together, wire together"). LTP
involves:

- Increased release of neurotransmitter (glutamate) from the presynaptic neuron.
- Insertion of additional AMPA receptors into the postsynaptic membrane.
- Activation of NMDA receptors, which allows $\mathrm{Ca^{2+}}$ entry, triggering intracellular
  signalling cascades that lead to structural changes at the synapse.

## 25. Neurodegenerative Diseases

### 25.1 Parkinson's Disease

- **Cause**: degeneration of dopamine-producing neurons in the substantia nigra (midbrain), leading
  to reduced dopamine in the basal ganglia.
- **Symptoms**: tremor (especially at rest), bradykinesia (slowness of movement), rigidity, postural
  instability.
- **Treatment**: L-DOPA (precursor to dopamine; crosses the blood-brain barrier; converted to
  dopamine in the brain). Deep brain stimulation (electrodes implanted in the subthalamic nucleus to
  modulate neural activity).
- **Limitations of L-DOPA**: does not stop disease progression; side effects include dyskinesia
  (involuntary movements) after prolonged use.

### 25.2 Alzheimer's Disease

- **Cause**: accumulation of amyloid-$\beta$ plaques (extracellular protein deposits) and
  neurofibrillary tangles (intracellular tau protein aggregates) in the brain, leading to neuronal
  death and brain atrophy.
- **Symptoms**: progressive memory loss, confusion, language difficulties, personality changes, loss
  of ability to perform daily activities.
- **Risk factors**: age (greatest risk factor), APOE4 allele (genetic), head injury, cardiovascular
  disease.
- **Treatment**: acetylcholinesterase inhibitors (donepezil, rivastigmine) to increase acetylcholine
  levels; memantine (NMDA receptor antagonist) to reduce excitotoxicity. Neither cures the disease;
  they slow symptom progression.

### 25.3 Motor Neurone Disease (MND / ALS)

- **Cause**: progressive degeneration of upper and lower motor neurons.
- **Symptoms**: progressive muscle weakness and wasting; difficulty speaking, swallowing, and
  breathing; eventually fatal ( within 3--5 years of diagnosis).
- **Treatment**: riluzole (slows disease progression by reducing glutamate release); supportive care
  (ventilation, feeding tubes).

## 26. Synaptic Transmission: Detailed Mechanisms

### 26.1 Excitatory and Inhibitory Postsynaptic Potentials (EPSPs and IPSPs)

| Feature                                  | EPSP                                                   | IPSP                                                                   |
| ---------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| Neurotransmitter                         | Glutamate (main excitatory NT in CNS)                  | GABA (main inhibitory NT in CNS) or glycine (in spinal cord)           |
| Ion channels opened                      | $\mathrm{Na^+}$ (and some $\mathrm{Ca^{2+}}$)          | $\mathrm{Cl^-}$ (and sometimes $\mathrm{K^+}$)                         |
| Ion movement                             | $\mathrm{Na^+}$ flows in (depolarisation)              | $\mathrm{Cl^-}$ flows in (hyperpolarisation)                           |
| Effect on membrane potential             | Moves towards threshold (closer to $-55\ \mathrm{mV}$) | Moves further from threshold (more negative, e.g., $-75\ \mathrm{mV}$) |
| Effect on likelihood of action potential | Increases (more likely to fire)                        | Decreases (less likely to fire)                                        |

**Spatial summation**: multiple EPSPs from different presynaptic neurons arrive at the same
postsynaptic neuron simultaneously, adding together to reach threshold.

**Temporal summation**: multiple EPSPs from a single presynaptic neuron arrive in rapid succession
(before the previous EPSP has decayed), adding together to reach threshold.

### 26.2 Neurotransmitter Inactivation

Neurotransmitters must be rapidly removed from the synaptic cleft to allow precise signalling:

| Mechanism             | Example                                                                                             | Notes                                                                                                                                                                                                      |
| --------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Diffusion             | Any NT                                                                                              | NT diffuses away from the synapse; slow and non-specific                                                                                                                                                   |
| Enzymatic degradation | Acetylcholinesterase (AChE) breaks down ACh into choline and acetate; MAO breaks down noradrenaline | AChE inhibitors (e.g., organophosphorus nerve agents, sarin) cause ACh accumulation, leading to muscle paralysis and death. Edrophoton (a reversible AChE inhibitor) is used to diagnose myasthenia gravis |
| Reuptake              | SERT reuptakes serotonin; DAT reuptakes dopamine; NET reuptakes noradrenaline                       | SSRIs (selective serotonin reuptake inhibitors) block SERT, increasing serotonin in the synaptic cleft (used to treat depression)                                                                          |

### 26.3 Drugs and the Nervous System

| Drug                             | Target                                            | Mechanism                                                                               | Effect                                                                                             |
| -------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Nicotine                         | Nicotinic ACh receptors (excitatory)              | Agonist: binds to and activates the receptor                                            | Stimulates the release of dopamine in the reward pathway; causes addiction                         |
| Curare                           | Nicotinic ACh receptors at neuromuscular junction | Competitive antagonist: blocks ACh binding                                              | Muscle paralysis (used historically as arrow poison; modern derivative vecuronium used in surgery) |
| Benzodiazepines (e.g., diazepam) | GABA_A receptors                                  | Positive allosteric modulator: enhances GABA binding, increasing $\mathrm{Cl^-}$ influx | Anxiolytic, sedative, anticonvulsant                                                               |
| Cocaine                          | Dopamine transporter (DAT)                        | Blocks reuptake of dopamine                                                             | Increased dopamine in synaptic cleft; euphoria and addiction                                       |
| Propranolol                      | $\beta$-adrenergic receptors                      | Antagonist: blocks noradrenaline binding                                                | Reduces heart rate and blood pressure (used to treat hypertension, anxiety)                        |
| Lidocaine                        | Voltage-gated $\mathrm{Na^+}$ channels            | Blocks channels, preventing action potential initiation                                 | Local anaesthetic                                                                                  |

### 26.4 Myasthenia Gravis: An Autoimmune Disease

- **Cause**: autoantibodies against nicotinic ACh receptors at the neuromuscular junction.
- **Effect**: reduced number of functional ACh receptors; fewer ACh receptors can be activated, so
  end-plate potentials are smaller and may not reach threshold.
- **Symptoms**: muscle weakness and fatigue (worse with repeated use, improves with rest); ptosis
  (drooping eyelids); difficulty swallowing and speaking; respiratory muscle weakness (can be
  fatal).
- **Treatment**: acetylcholinesterase inhibitors (e.g., pyridostigmine) to increase ACh
  availability; immunosuppressants (e.g., corticosteroids); thymectomy (thymus often abnormal in MG
  patients).

## 27. The Endocrine System: Detailed Overview

### 27.1 Major Endocrine Glands and Hormones

| Gland               | Hormone(s)                                                                   | Target                                                 | Function                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Hypothalamus        | Releasing and inhibiting hormones (e.g., GnRH, TRH, CRH, GHRH, somatostatin) | Anterior pituitary                                     | Controls anterior pituitary hormone secretion                                                                  |
| Posterior pituitary | ADH (vasopressin), oxytocin                                                  | Kidneys (ADH); uterus/breasts (oxytocin)               | ADH: water reabsorption. Oxytocin: uterine contraction, milk ejection                                          |
| Anterior pituitary  | FSH, LH, ACTH, TSH, GH, prolactin                                            | Various                                                | FSH/LH: reproduction. ACTH: adrenal cortex. TSH: thyroid. GH: growth. Prolactin: milk production               |
| Thyroid             | Thyroxine ($\mathrm{T_4}$), triiodothyronine ($\mathrm{T_3}$), calcitonin    | Most body cells (thyroid hormones); bones (calcitonin) | Increases metabolic rate; promotes growth and development; calcitonin lowers blood $\mathrm{Ca^{2+}}$          |
| Parathyroid         | PTH (parathyroid hormone)                                                    | Bones, kidneys, intestine                              | Raises blood $\mathrm{Ca^{2+}}$ (stimulates osteoclasts; increases $\mathrm{Ca^{2+}}$ reabsorption in kidneys) |
| Adrenal cortex      | Aldosterone, cortisol, androgens                                             | Kidneys (aldosterone); most cells (cortisol)           | Aldosterone: $\mathrm{Na^+}$ reabsorption. Cortisol: stress response, anti-inflammatory                        |
| Pancreas (islets)   | Insulin ($\beta$ cells), glucagon ($\alpha$ cells)                           | Liver, muscle, adipose                                 | Regulates blood glucose                                                                                        |
| Ovaries             | Oestrogen, progesterone                                                      | Uterus, breasts, hypothalamus                          | Female secondary sexual characteristics; regulates menstrual cycle; maintains pregnancy                        |
| Testes              | Testosterone                                                                 | Various                                                | Male secondary sexual characteristics; spermatogenesis; muscle and bone growth                                 |

### 27.2 Hormone Action: Signal Transduction

Hormones bind to specific receptors on (or in) target cells. The type of receptor determines the
mechanism of action:

| Receptor Type                  | Hormone Type                                                           | Mechanism                                                                                                                                                                           | Speed                     |
| ------------------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Intracellular (nuclear)        | Steroid hormones (testosterone, oestrogen, cortisol), thyroid hormones | Hormone diffuses through the membrane; binds to intracellular receptor; hormone-receptor complex enters nucleus; acts as a transcription factor, directly affecting gene expression | Slow (hours to days)      |
| Cell surface (GPCR)            | Peptide hormones (insulin, glucagon, ADH), adrenaline                  | Hormone binds to G-protein coupled receptor; activates second messenger cascade (cAMP, $\mathrm{IP_3/DAG}$, $\mathrm{Ca^{2+}}$); amplifies signal                                   | Fast (seconds to minutes) |
| Cell surface (tyrosine kinase) | Insulin, growth factors                                                | Hormone binds to receptor tyrosine kinase; autophosphorylation; activates intracellular signalling cascade (MAPK, PI3K)                                                             | Minutes to hours          |

### 27.3 Second Messengers

| Second Messenger   | Generated By                                   | Activated By               | Effect                                                                               |
| ------------------ | ---------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------ |
| cAMP               | Adenylate cyclase                              | G-protein ($\mathrm{G_s}$) | Activates protein kinase A (PKA), which phosphorylates target proteins               |
| $\mathrm{IP_3}$    | Phospholipase C (PLC)                          | G-protein ($\mathrm{G_q}$) | Binds to receptors on ER, releasing stored $\mathrm{Ca^{2+}}$                        |
| DAG                | PLC                                            | G-protein ($\mathrm{G_q}$) | Activates protein kinase C (PKC), which phosphorylates target proteins               |
| $\mathrm{Ca^{2+}}$ | Released from ER via $\mathrm{IP_3}$ receptors | $\mathrm{IP_3}$            | Binds to calmodulin; $\mathrm{Ca^{2+}}$-calmodulin complex activates various enzymes |

## 28. Visual Processing and the Eye

### 28.1 Structure of the Eye

| Structure   | Function                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cornea      | Transparent front of the eye; refracts (bends) light; provides approximately 2/3 of the eye's total refractive power                               |
| Iris        | Controls the size of the pupil (regulates light entry); contains circular and radial muscles                                                       |
| Pupil       | Hole in the centre of the iris; allows light to enter the eye                                                                                      |
| Lens        | Transparent, elastic structure; changes shape (accommodation) to focus light on the retina; controlled by ciliary muscles and suspensory ligaments |
| Retina      | Light-sensitive layer at the back of the eye; contains photoreceptors (rods and cones) and interneurons (bipolar cells, ganglion cells)            |
| Fovea       | Region of the retina with the highest visual acuity; densely packed with cones; no rods                                                            |
| Optic nerve | Carries action potentials from ganglion cells to the brain                                                                                         |
| Blind spot  | Where the optic nerve exits the eye; no photoreceptors                                                                                             |

### 28.2 Accommodation (Focusing)

| Condition            | Distant Object (> 6 m)              | Near Object (< 6 m)                |
| -------------------- | ----------------------------------- | ---------------------------------- |
| Ciliary muscles      | Relaxed                             | Contracted (constrict)             |
| Suspensory ligaments | Taut (pulled tight)                 | Slack (loose)                      |
| Lens shape           | Thin, flattened (weakly refracting) | Fat, rounded (strongly refracting) |

### 28.3 Rods vs Cones

| Feature       | Rods                                                | Cones                                                             |
| ------------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| Pigment       | Rhodopsin                                           | Photopsin (three types: S, M, L -- sensitive to blue, green, red) |
| Sensitivity   | Very sensitive to low light                         | Less sensitive; require brighter light                            |
| Colour vision | No (monochromatic)                                  | Yes (trichromatic colour vision)                                  |
| Visual acuity | Low (many rods share one bipolar cell; convergence) | High (one cone connects to one bipolar cell; 1:1 pathway)         |
| Distribution  | Concentrated in the periphery of the retina         | Concentrated in the fovea                                         |
| Number        | ~120 million per eye                                | ~6 million per eye                                                |
| Response time | Slow                                                | Fast                                                              |
| Function      | Night vision; peripheral vision                     | Daytime vision; colour vision; fine detail                        |

### 28.4 Control of Heart Rate

The autonomic nervous system controls heart rate:

| Factor                                                   | Detected By                                    | Response                               | Pathway                                                                                                                                             |
| -------------------------------------------------------- | ---------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| High blood pressure                                      | Baroreceptors in aortic arch and carotid sinus | Decrease heart rate                    | Baroreceptors $\to$ sensory neurone $\to$ medulla oblongata (cardiovascular centre) $\to$ parasympathetic (vagus nerve) $\to$ SAN: slows heart rate |
| Low blood pressure                                       | Baroreceptors                                  | Increase heart rate                    | Baroreceptors $\to$ medulla $\to$ sympathetic nervous system $\to$ SAN: increases heart rate; adrenaline also increases heart rate                  |
| High blood $\mathrm{CO_2}$ / low $\mathrm{O_2}$ / low pH | Chemoreceptors in aortic and carotid bodies    | Increase heart rate and breathing rate | Chemoreceptors $\to$ medulla $\to$ sympathetic nervous system + increased ventilation rate                                                          |

## 29. Muscle Contraction: The Sliding Filament Mechanism

### 29.1 Structure of Skeletal Muscle

| Structure                | Description                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Muscle fascicle          | Bundle of muscle fibres, surrounded by perimysium                                                                                        |
| Muscle fibre (cell)      | Multinucleate cell (formed by fusion of myoblasts); contains many myofibrils                                                             |
| Myofibril                | Contractile unit; composed of repeating sarcomeres                                                                                       |
| Sarcomere                | Functional unit of muscle contraction; from Z-line to Z-line                                                                             |
| Thin filaments (actin)   | Made of actin (with binding sites for myosin heads), tropomyosin (covers binding sites at rest), and troponin (binds $\mathrm{Ca^{2+}}$) |
| Thick filaments (myosin) | Made of myosin, with globular heads that bind to actin and hydrolyse ATP                                                                 |

### 29.2 The Sliding Filament Mechanism

1. **Action potential arrives** at the neuromuscular junction, triggering release of ACh.
2. **Action potential spreads** along the sarcolemma (muscle cell membrane) and down T-tubules
   (infoldings of the sarcolemma).
3. **$\mathrm{Ca^{2+}}$ release**: the action potential triggers opening of $\mathrm{Ca^{2+}}$
   release channels (ryanodine receptors) on the sarcoplasmic reticulum, releasing
   $\mathrm{Ca^{2+}}$ into the sarcoplasm.
4. **$\mathrm{Ca^{2+}}$ binds to troponin**, causing a conformational change that moves tropomyosin
   away from the myosin-binding sites on actin.
5. **Cross-bridge formation**: myosin heads bind to exposed binding sites on actin, forming
   cross-bridges.
6. **Power stroke**: the myosin heads pivot, pulling the thin filaments towards the centre of the
   sarcomere (the H-zone and I-band shorten; the A-band remains the same length).
7. **ATP binds to myosin**, causing the myosin head to detach from actin.
8. **ATP hydrolysis**: the myosin head is re-cocked (returns to its original position), ready for
   another cycle.
9. **$\mathrm{Ca^{2+}}$ is pumped back** into the sarcoplasmic reticulum by
   $\mathrm{Ca^{2+}}$-ATPase pumps (active transport), tropomyosin re-covers binding sites, and the
   muscle relaxes.

### 29.3 Energy for Muscle Contraction

| Source                | Duration      | Capacity                         | Use                                       |
| --------------------- | ------------- | -------------------------------- | ----------------------------------------- |
| Phosphocreatine (PCr) | 0--10 s       | Very limited                     | Sprinting; weightlifting (maximal effort) |
| Anaerobic glycolysis  | 10 s -- 3 min | Limited; produces lactate        | 400 m sprint; intense exercise            |
| Aerobic respiration   | > 3 min       | Virtually unlimited (fat stores) | Marathon; endurance exercise              |

### 29.4 Fast vs Slow Muscle Fibres

| Feature                 | Type I (Slow-Twitch)                    | Type IIb (Fast-Twitch)                    |
| ----------------------- | --------------------------------------- | ----------------------------------------- |
| Contraction speed       | Slow                                    | Fast                                      |
| Myosin ATPase activity  | Low                                     | High                                      |
| Fatigue resistance      | High (resistant to fatigue)             | Low (fatigue quickly)                     |
| Mitochondrial density   | High                                    | Low                                       |
| Myoglobin concentration | High (red muscle)                       | Low (white muscle)                        |
| Glycogen stores         | Low                                     | High                                      |
| $\mathrm{O_2}$ supply   | High (many capillaries)                 | Low (fewer capillaries)                   |
| Energy source           | Aerobic (fatty acids)                   | Anaerobic (glycogen)                      |
| Function                | Endurance activities (posture, walking) | Explosive activities (sprinting, jumping) |

## 30. Reflex Arcs and Instinctive Behaviour

### 30.1 Components of a Reflex Arc

A reflex arc is the pathway taken by nerve impulses in an automatic, involuntary response (reflex):

1. **Stimulus**: a change in the environment detected by a receptor.
2. **Receptor**: converts the stimulus into an electrical impulse (generator potential $\to$ action
   potential).
3. **Sensory neurone**: transmits the impulse from the receptor to the CNS (spinal cord or brain).
4. **Relay neurone** (interneuron): connects the sensory neurone to the motor neurone in the CNS
   (may also connect to the brain for conscious awareness).
5. **Motor neurone**: transmits the impulse from the CNS to the effector.
6. **Effector**: carries out the response (muscle contracts or gland secretes).

### 30.2 Types of Reflex

| Type               | Description                                                                                            | Example                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Spinal reflex      | Reflex arc passes through the spinal cord only (not the brain); very fast                              | Withdrawal reflex (pulling hand away from hot object); stretch reflex (knee jerk) |
| Cranial reflex     | Reflex arc passes through the brain                                                                    | Pupillary reflex (pupil constricts in bright light); blinking reflex              |
| Simple reflex      | Involves only one synapse (monosynaptic)                                                               | Knee jerk (patellar tendon) reflex                                                |
| Conditioned reflex | A learned response to a stimulus that normally would not produce the response (classical conditioning) | Pavlov's dogs (salivating at the sound of a bell)                                 |

### 30.3 The Withdrawal Reflex

When the hand touches a hot object:

1. Heat receptors in the skin detect the stimulus and generate nerve impulses.
2. Sensory neurones transmit impulses to the spinal cord.
3. In the spinal cord, the sensory neurone synapses with:

- A relay neurone (which transmits impulses to the brain -- the brain becomes aware of the pain
  after the reflex has occurred).
- A motor neurone (which transmits impulses to the biceps muscle in the upper arm).

4. The biceps muscle contracts (flexor), pulling the hand away from the hot object.
5. Simultaneously, a relay neurone synapses with an inhibitory interneurone that inhibits the motor
   neurone to the triceps (extensor). This is **reciprocal inhibition**: the antagonist muscle is
   inhibited to prevent conflicting movements.

### 30.4 Control of Breathing Rate

Breathing rate is controlled by the medulla oblongata:

| Factor                                        | Detected By                                                                                                                                                                    | Response                                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| High blood $\mathrm{CO_2}$ ($p\mathrm{CO_2}$) | Chemoreceptors in aortic and carotid bodies; central chemoreceptors in medulla                                                                                                 | Increase breathing rate and depth (hyperventilation)                                                                       |
| Low blood $\mathrm{O_2}$ ($p\mathrm{O_2}$)    | Peripheral chemoreceptors (carotid and aortic bodies)                                                                                                                          | Increase breathing rate (only significant when $p\mathrm{O_2}$ is very low; $\mathrm{CO_2}$ is normally the main stimulus) |
| Low blood pH                                  | Central chemoreceptors (respond to $\mathrm{H^+}$ in cerebrospinal fluid; $\mathrm{CO_2}$ diffuses across blood-brain barrier and forms $\mathrm{H^+}$ via carbonic anhydrase) | Increase breathing rate                                                                                                    |

## 31. Habituation, Conditioning, and Learning

### 31.1 Habituation

Habituation is the simplest form of learning: an animal learns to ignore a repeated, harmless
stimulus.

**Example:** a sea anemone withdraws its tentacles when first touched, but after repeated harmless
touches, it no longer responds.

**Biological importance:** prevents the animal from wasting energy on responses to irrelevant
stimuli; allows the nervous system to focus on genuinely important stimuli.

### 31.2 Classical Conditioning (Pavlovian Conditioning)

An animal learns to associate a new stimulus with an existing reflex response.

**Example (Pavlov's dogs):**

1. Unconditioned stimulus (US): food ( causes salivation).
2. Unconditioned response (UR): salivation.
3. Conditioned stimulus (CS): bell (initially does not cause salivation).
4. After repeated pairing of CS with US, the CS alone triggers the conditioned response (CR):
   salivation.

### 31.3 Operant Conditioning (Skinner)

An animal learns to associate a behaviour with a consequence (reward or punishment).

| Type                   | Consequence                    | Effect on Behaviour | Example                                   |
| ---------------------- | ------------------------------ | ------------------- | ----------------------------------------- |
| Positive reinforcement | Reward (food, pleasure)        | Behaviour increases | Rat presses lever to receive food pellet  |
| Negative reinforcement | Removal of unpleasant stimulus | Behaviour increases | Pressing a button stops an electric shock |
| Positive punishment    | Unpleasant stimulus applied    | Behaviour decreases | Electric shock for wrong response         |
| Negative punishment    | Pleasant stimulus removed      | Behaviour decreases | Toy taken away for bad behaviour          |

### 31.4 Insight Learning

The most complex form of learning: the animal solves a problem suddenly (without trial and error) by
mentally manipulating concepts.

**Example:** a chimpanzee cannot reach a banana with a stick; it suddenly stacks boxes to reach the
banana. This requires understanding cause-and-effect relationships.

## 32. Neuronal Communication: Worked Calculations

### 32.1 Resting Membrane Potential

The resting membrane potential is approximately $-70\ \mathrm{mV}$ (inside negative relative to
outside). This is maintained by:

1. The $\mathrm{Na^+/K^+}$ ATPase (3 $\mathrm{Na^+}$ out, 2 $\mathrm{K^+}$ in).
2. Membrane permeability: at rest, the membrane is approximately 50--100 times more permeable to
   $\mathrm{K^+}$ than to $\mathrm{Na^+}$ (more $\mathrm{K^+}$ leak channels than $\mathrm{Na^+}$
   leak channels).
3. $\mathrm{K^+}$ diffuses out of the cell down its concentration gradient, carrying positive charge
   with it, making the inside negative.

**Nernst equation** (simplified for one ion):

$$E = \frac{RT}{zF} \ln \frac◆LB◆[\text{ion}]_{\text{out}}◆RB◆◆LB◆[\text{ion}]_{\text{in}}◆RB◆$$

For $\mathrm{K^+}$: $E_K \approx -90\ \mathrm{mV}$; for $\mathrm{Na^+}$:
$E_{Na} \approx +60\ \mathrm{mV}$.

The resting potential ($-70\ \mathrm{mV}$) is closer to $E_K$ than to $E_{Na}$Reflecting the greater
permeability to $\mathrm{K^+}$.

### 32.2 Action Potential Phases

| Phase             | Membrane Potential                            | Ion Movements                                                                                                                                                                                                                         |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Resting           | $-70\ \mathrm{mV}$                            | $\mathrm{Na^+}$ and $\mathrm{K^+}$ leak channels open (net: $\mathrm{K^+}$ out)                                                                                                                                                       |
| Depolarisation    | Rises to $+40\ \mathrm{mV}$                   | Voltage-gated $\mathrm{Na^+}$ channels open; $\mathrm{Na^+}$ rushes in                                                                                                                                                                |
| Peak              | $+40\ \mathrm{mV}$                            | $\mathrm{Na^+}$ channels close (inactivated); $\mathrm{K^+}$ channels begin to open                                                                                                                                                   |
| Repolarisation    | Falls back towards $-70\ \mathrm{mV}$         | Voltage-gated $\mathrm{K^+}$ channels open; $\mathrm{K^+}$ rushes out                                                                                                                                                                 |
| Hyperpolarisation | Briefly more negative than $-70\ \mathrm{mV}$ | $\mathrm{K^+}$ channels close slowly; excess $\mathrm{K^+}$ efflux                                                                                                                                                                    |
| Refractory period | Returns to $-70\ \mathrm{mV}$                 | $\mathrm{Na^+}$ channels are inactivated (absolute refractory period: no new action potential can be generated); then return to resting state (relative refractory period: only a larger stimulus can trigger a new action potential) |

### 32.3 Speed of Nerve Impulse Conduction

The speed of conduction depends on:

| Factor        | Effect                                 | Mechanism                                                                                                                                                |
| ------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Axon diameter | Larger diameter = faster conduction    | Less resistance to current flow                                                                                                                          |
| Myelination   | Myelinated axons conduct faster        | Saltatory conduction: action potentials jump between nodes of Ranvier (gaps in the myelin sheath) rather than propagating along the entire axon membrane |
| Temperature   | Higher temperature = faster conduction | Increases rate of ion channel opening and diffusion                                                                                                      |

**Speeds:**

- Unmyelinated axon ($0.5\ \mu\mathrm{m}$ diameter): approximately $0.5\ \mathrm{m\ s^{-1}}$
- Myelinated axon ($10\ \mu\mathrm{m}$ diameter): approximately $100\ \mathrm{m\ s^{-1}}$
- Squid giant axon ($500\ \mu\mathrm{m}$ diameter, unmyelinated): approximately
  $25\ \mathrm{m\ s^{-1}}$

**Multiple sclerosis (MS):** autoimmune destruction of the myelin sheath in the CNS, slowing or
blocking nerve impulse conduction. Symptoms depend on which nerves are affected.

## 33. Synaptic Plasticity and the Brain

### 33.1 Long-Term Potentiation (LTP) in Detail

LTP is the cellular basis of learning and memory in the hippocampus:

1. A presynaptic neuron is stimulated repeatedly (high-frequency stimulation, e.g., 100 Hz for 1
   second).
2. This causes a large, sustained depolarisation of the postsynaptic neuron (EPSPs summate).
3. The depolarisation is sufficient to activate NMDA receptors, allowing $\mathrm{Ca^{2+}}$ to enter
   the postsynaptic neuron.
4. $\mathrm{Ca^{2+}$ activates $\mathrm{Ca^{2+}}$/calmodulin-dependent protein kinase II (CaMKII).
5. CaMKII phosphorylates AMPA receptors, causing them to be inserted into the postsynaptic membrane
   (more AMPA receptors $\to$ larger EPSPs to the same stimulus).
6. The synapse is now "strengthened": the same presynaptic stimulus produces a larger postsynaptic
   response.

### 33.2 Long-Term Depression (LTD)

LTD is the opposite of LTP: the weakening of a synapse following low-frequency stimulation. It
involves removal of AMPA receptors from the postsynaptic membrane. LTD is important for:

- Forgetting irrelevant information.
- Clearing old memories to make room for new ones.
- Refining motor skills (removing unnecessary connections).

### 33.3 Neural Networks and the Brain

The brain contains approximately 86 billion neurons, each forming approximately 7,000 synapses,
giving a total of approximately $6 \times 10^{14}$ synapses. The pattern of connections between
neurons (the "connectome") underlies all brain function:

| Brain Region    | Approximate Number of Neurons | Function                                                         |
| --------------- | ----------------------------- | ---------------------------------------------------------------- |
| Cerebral cortex | 16 billion                    | Conscious thought, perception, language, memory, decision-making |
| Cerebellum      | 69 billion                    | Coordination, motor learning, balance                            |
| Brainstem       | 1 billion                     | Vital functions (breathing, heart rate, sleep-wake cycle)        |
| Hippocampus     | 0.4 billion                   | Formation of new long-term memories (consolidation)              |
| Amygdala        | 0.013 billion                 | Emotional processing (fear, aggression); emotional memories      |

### 33.4 Neurotransmitter Summary

| Neurotransmitter               | Type           | Synthesised From                                                                       | Primary Functions                                                                                                                                   |
| ------------------------------ | -------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Acetylcholine (ACh)            | Biogenic amine | Choline + acetyl-CoA (via choline acetyltransferase)                                   | NMJ (skeletal muscle contraction); parasympathetic nervous system; memory (hippocampus); Alzheimer's disease involves ACh neuron degeneration       |
| Dopamine                       | Catecholamine  | Tyrosine $\to$ L-DOPA $\to$ dopamine (via tyrosine hydroxylase and DOPA decarboxylase) | Reward pathway; motivation; voluntary movement; Parkinson's disease (dopamine deficiency); schizophrenia (excess dopamine in certain brain regions) |
| Noradrenaline (norepinephrine) | Catecholamine  | Tyrosine $\to$ dopamine $\to$ noradrenaline (via dopamine $\beta$-hydroxylase)         | Sympathetic nervous system (fight or flight); attention; arousal                                                                                    |
| Serotonin (5-HT)               | Indolamine     | Tryptophan $\to$ 5-HTP $\to$ serotonin (via tryptophan hydroxylase)                    | Mood regulation; sleep (converted to melatonin); appetite; depression (SSRIs increase serotonin availability)                                       |
| GABA                           | Amino acid     | Glutamate (via glutamate decarboxylase)                                                | Main inhibitory neurotransmitter in the brain; reduces neuronal excitability; anxiety (GABA-A receptor target of benzodiazepines)                   |
| Glutamate                      | Amino acid     | Glutamine $\to$ glutamate (via glutaminase)                                            | Main excitatory neurotransmitter; learning and memory; excitotoxicity (excess glutamate damages neurons; implicated in stroke and ALS)              |
| Glycine                        | Amino acid     | Serine (via serine hydroxymethyltransferase)                                           | Inhibitory neurotransmitter in the spinal cord and brainstem; motor control                                                                         |
| Histamine                      | Biogenic amine | Histidine (via histidine decarboxylase)                                                | Inflammatory response; arousal and wakefulness; gastric acid secretion                                                                              |
| Endorphins                     | Peptide        | Pro-opiomelanocortin (POMC) precursor                                                  | Pain relief (natural opioids); reward; euphoria; exercise-induced "runner's high"                                                                   |

## 34. The Autonomic Nervous System in Detail

### 34.1 Comparison of Sympathetic and Parasympathetic Systems

| Feature                          | Sympathetic (Fight or Flight)                                                                                                                                                 | Parasympathetic (Rest and Digest)                                                                                            |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Origin                           | Thoracic and lumbar regions of spinal cord (T1--L2)                                                                                                                           | Brainstem and sacral region of spinal cord (S2--S4)                                                                          |
| Pre-ganglionic neurotransmitter  | Acetylcholine (nicotinic receptors)                                                                                                                                           | Acetylcholine (nicotinic receptors)                                                                                          |
| Post-ganglionic neurotransmitter | Noradrenaline (adrenergic receptors: $\alpha$ and $\beta$)                                                                                                                    | Acetylcholine (muscarinic receptors)                                                                                         |
| Pre-ganglionic fibre length      | Short                                                                                                                                                                         | Long                                                                                                                         |
| Post-ganglionic fibre length     | Long                                                                                                                                                                          | Short                                                                                                                        |
| General effect                   | Mobilises body for action: dilates pupils, increases heart rate, dilates bronchioles, inhibits digestion, stimulates glycogenolysis, dilates blood vessels to skeletal muscle | Conserves energy: constricts pupils, decreases heart rate, constricts bronchioles, stimulates digestion, promotes salivation |
| Adrenal medulla                  | Releases adrenaline and noradrenaline into blood (systemic effect)                                                                                                            | Not involved                                                                                                                 |

### 34.2 Key Examples

| Organ            | Sympathetic Effect                                                                                      | Parasympathetic Effect                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Heart            | Increases heart rate (SA node) and force of contraction                                                 | Decreases heart rate; slows AV node conduction                      |
| Lungs            | Dilates bronchioles (relaxes smooth muscle via $\beta_2$ receptors)                                     | Constricts bronchioles                                              |
| Pupils           | Dilates (radial muscles contract)                                                                       | Constricts (circular muscles contract)                              |
| Digestive system | Inhibits peristalsis; reduces secretions; contracts sphincters                                          | Stimulates peristalsis; increases secretions; relaxes sphincters    |
| Bladder          | Relaxes detrusor muscle; contracts internal sphincter (retention)                                       | Contracts detrusor muscle; relaxes internal sphincter (micturition) |
| Blood vessels    | Vasoconstriction (via $\alpha_1$ receptors, except skeletal muscle where $\beta_2$ causes vasodilation) | Minimal effect (few parasympathetic fibres to blood vessels)        |

## 35. Visual Processing in the Retina

### 35.1 Retinal Cell Types

| Cell Type       | Location                                               | Function                                                                                                                                                |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rod cell        | Distributed throughout retina (except fovea)           | Low-light vision; scotopic vision; 120 million per eye; one type of rhodopsin pigment; high sensitivity but low acuity; cannot distinguish colour       |
| Cone cell       | Concentrated in the fovea (central retina)             | High-acuity colour vision; photopic vision; 6 million per eye; three types (L/red, M/green, S/blue); require bright light; lower sensitivity            |
| Bipolar cell    | Between photoreceptors and ganglion cells              | Transmit signals from photoreceptors to ganglion cells; one type is ON-bipolar (depolarised by light), another is OFF-bipolar (hyperpolarised by light) |
| Ganglion cell   | Innermost retinal layer                                | Axons form the optic nerve; transmit action potentials to the brain; some are directionally sensitive (detect motion)                                   |
| Horizontal cell | Lateral connections between photoreceptors             | Lateral inhibition; enhance contrast and edge detection                                                                                                 |
| Amacrine cell   | Lateral connections between bipolar and ganglion cells | Motion detection; temporal processing                                                                                                                   |

### 35.2 Visual Acuity

| Feature               | Fovea                                         | Peripheral Retina                         |
| --------------------- | --------------------------------------------- | ----------------------------------------- |
| Photoreceptor density | Very high (only cones)                        | Lower (mixture of rods and cones)         |
| Convergence           | 1:1 (one cone to one bipolar to one ganglion) | Many rods converge onto one ganglion cell |
| Acuity                | Very high (sharp, detailed vision)            | Lower                                     |
| Sensitivity           | Low (requires bright light)                   | High (functions in dim light)             |
| Colour vision         | Yes (three cone types)                        | Limited (fewer cones)                     |

### 35.3 The Blind Spot

The blind spot is where the optic nerve exits the retina. There are no photoreceptors at this point,
so no light is detected.

- Normally not noticed because: (a) the other eye covers the blind spot; (b) the brain "fills in"
  the missing information using surrounding visual context.
- Can be demonstrated with a simple visual field test.

## 36. The Kidney: Nephron Function and Ultrafiltration

### 36.1 The Nephron

| Region                           | Location                 | Function                                                                                                                                                            |
| -------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Renal (Bowman's) capsule         | Cortex                   | Site of ultrafiltration; encloses the glomerulus                                                                                                                    |
| Proximal convoluted tubule (PCT) | Cortex                   | Selective reabsorption: ALL glucose, ALL amino acids, ~85% Na$^+$~80% water, ALL vitamins; microvilli increase surface area; many mitochondria for active transport |
| Loop of Henle (descending limb)  | Medulla                  | Water reabsorption (permeable to water, impermeable to salts); water moves out by osmosis into the hypertonic medulla                                               |
| Loop of Henle (ascending limb)   | Medulla                  | Active transport of Na$^+$ and Cl$^-$ out (Na$^+$/K$^+$ pump and Na$^+$/Cl$^-$ co-transporter); impermeable to water; creates the countercurrent multiplier         |
| Distal convoluted tubule (DCT)   | Cortex                   | Selective reabsorption and secretion; regulated by aldosterone (Na$^+$ reabsorption, K$^+$ secretion) and ADH (water reabsorption if needed)                        |
| Collecting duct                  | Medulla (passes through) | Final water reabsorption under ADH control; water moves out into hypertonic medulla                                                                                 |

### 36.2 Ultrafiltration

| Feature                 | Description                                                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Site                    | Renal (Bowman's) capsule                                                                                                                                   |
| Driving force           | Hydrostatic pressure of blood in the glomerulus (~7 kPa); opposed by oncotic pressure of blood (~3.3 kPa) and hydrostatic pressure in the capsule (~2 kPa) |
| Net filtration pressure | ~7 - 3.3 - 2 = ~1.7 kPa                                                                                                                                    |
| Filtrate composition    | Water, glucose, amino acids, urea, ions; NO large proteins, NO blood cells                                                                                 |
| Filter                  | Basement membrane (collagen and glycoproteins); podocyte foot processes (slits)                                                                            |
| What is retained        | Blood cells, platelets, and large plasma proteins (albumin, globulins)                                                                                     |

## 37. Muscle Contraction: Sliding Filament Theory

### 37.1 Structure of a Sarcomere

| Component      | Location                                                                   | Protein                               | Function                                                      |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------- |
| Thick filament | A band (centre of sarcomere)                                               | Myosin                                | Has heads (cross-bridges) that bind to actin; ATPase activity |
| Thin filament  | Extends from Z lines into A band; passes through I band                    | Actin (with tropomyosin and troponin) | Binding sites for myosin cross-bridges                        |
| Z line         | Boundary of each sarcomere                                                 | $\alpha$-actinin                      | Anchors thin filaments                                        |
| I band         | Region around Z line; thin filaments only                                  | --                                    | Shortens during contraction                                   |
| A band         | Region containing thick filaments (and overlapping thin filaments)         | --                                    | Length stays constant during contraction                      |
| H zone         | Central region of A band; thick filaments only (no thin filaments overlap) | --                                    | Shortens during contraction; disappears at full contraction   |
| M line         | Centre of A band; holds thick filaments in place                           | --                                    | Maintains filament alignment                                  |

### 37.2 The Cross-Bridge Cycle

| Step                       | What Happens                                                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Calcium release         | Action potential arrives at neuromuscular junction $\to$ acetylcholine released $\to$ action potential in muscle fibre $\to$ sarcoplasmic reticulum releases $\mathrm{Ca^{2+}}$ ions into sarcoplasm |
| 2. Calcium binds troponin  | $\mathrm{Ca^{2+}}$ binds to troponin $\to$ troponin changes shape $\to$ tropomyosin moves away from actin binding sites                                                                              |
| 3. Cross-bridge formation  | Myosin head (previously energised with ADP + Pi) binds to exposed actin binding site                                                                                                                 |
| 4. Power stroke            | Myosin head pivots, pulling the thin filament towards the centre of the sarcomere; ADP and Pi are released                                                                                           |
| 5. Cross-bridge detachment | ATP binds to myosin head $\to$ myosin detaches from actin                                                                                                                                            |
| 6. Re-cocking              | ATP is hydrolysed to ADP + Pi; energy released re-cocks the myosin head (back to step 3)                                                                                                             |

## 38. Neurodegenerative Diseases

### 38.1 Alzheimer's Disease

| Feature      | Description                                                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause        | Progressive degeneration of neurons in the cerebral cortex and hippocampus                                                                               |
| Pathology    | Amyloid plaques (extracellular deposits of $\beta$-amyloid protein); neurofibrillary tangles (intracellular deposits of hyperphosphorylated tau protein) |
| Symptoms     | Progressive memory loss; confusion; disorientation; language problems; personality changes; eventually unable to care for self                           |
| Risk factors | Age (most common over 65); APOE4 gene (genetic risk factor); female sex; cardiovascular disease                                                          |
| Treatment    | No cure; cholinesterase inhibitors (donepezil) temporarily improve symptoms by increasing acetylcholine availability                                     |

### 38.2 Parkinson's Disease

| Feature   | Description                                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cause     | Degeneration of dopamine-producing neurons in the substantia nigra (midbrain)                                                                    |
| Pathology | Loss of dopaminergic neurons; Lewy bodies (intracellular inclusions of $\alpha$-synuclein protein)                                               |
| Symptoms  | Resting tremor (pill-rolling tremor); bradykinesia (slowness of movement); rigidity (stiffness); postural instability; reduced facial expression |
| Treatment | L-DOPA (levodopa; precursor to dopamine; crosses the blood-brain barrier); dopamine agonists; deep brain stimulation                             |

### 38.3 Motor Neurone Disease (MND / ALS)

| Feature   | Description                                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause     | Progressive degeneration of upper and lower motor neurones                                                                                  |
| Symptoms  | Progressive muscle weakness and wasting; difficulty speaking, swallowing, and breathing; eventually fatal ( within 2--5 years of diagnosis) |
| Pathology | TDP-43 protein aggregation in motor neurones                                                                                                |
| Treatment | No cure; riluzole (slows progression slightly); supportive care (ventilation, feeding tube)                                                 |

## 39. Synaptic Transmission in Detail

### 39.1 Steps in Synaptic Transmission

| Step | What Happens                                                                                                                       |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Action potential arrives at the presynaptic terminal                                                                               |
| 2    | Voltage-gated calcium ($\mathrm{Ca^{2+}}$) channels open; $\mathrm{Ca^{2+}}$ ions flow into the presynaptic terminal               |
| 3    | $\mathrm{Ca^{2+}}$ triggers exocytosis of synaptic vesicles (vesicles fuse with the presynaptic membrane)                          |
| 4    | Neurotransmitter is released into the synaptic cleft                                                                               |
| 5    | Neurotransmitter diffuses across the synaptic cleft (very fast; distance ~20--40 nm)                                               |
| 6    | Neurotransmitter binds to specific receptors on the postsynaptic membrane                                                          |
| 7    | Ion channels on the postsynaptic membrane open (or close), causing a change in membrane potential                                  |
| 8    | If the postsynaptic potential reaches threshold, an action potential is initiated in the postsynaptic neurone                      |
| 9    | Neurotransmitter is removed from the synaptic cleft (by reuptake into the presynaptic terminal, enzymatic breakdown, or diffusion) |

### 39.2 Excitatory vs Inhibitory Synapses

| Feature                                  | Excitatory Synapse                                        | Inhibitory Synapse                                                                        |
| ---------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Neurotransmitter example                 | Acetylcholine (at neuromuscular junction), glutamate      | GABA (in the brain), glycine (in the spinal cord)                                         |
| Ion channels opened                      | $\mathrm{Na^+}$ channels (cations enter)                  | $\mathrm{Cl^-}$ channels (anions enter) or $\mathrm{K^+}$ channels ($\mathrm{K^+}$ exits) |
| Effect on postsynaptic membrane          | Depolarisation (EPSP: excitatory postsynaptic potential)  | Hyperpolarisation (IPSP: inhibitory postsynaptic potential)                               |
| Effect on likelihood of action potential | Increases (brings membrane potential closer to threshold) | Decreases (moves membrane potential further from threshold)                               |

### 39.3 Synaptic Summation

| Type               | Description                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Spatial summation  | Multiple presynaptic neurones fire simultaneously; their EPSPs add together at the postsynaptic neurone to reach threshold |
| Temporal summation | A single presynaptic neurone fires rapidly in succession; EPSPs add together before the first one decays                   |

## 40. The Reflex Arc

### 40.1 Components of a Reflex Arc

| Component       | Type of Neurone | Description                                                                                          |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| Receptor        | --              | Detects the stimulus (e.g., pain receptors in skin)                                                  |
| Sensory neurone | Afferent        | Transmits impulses from the receptor to the CNS (spinal cord); cell body in the dorsal root ganglion |
| Relay neurone   | Interneurone    | Connects sensory neurone to motor neurone within the CNS                                             |
| Motor neurone   | Efferent        | Transmits impulses from the CNS to the effector                                                      |
| Effector        | --              | Carries out the response (muscle contracts; gland secretes)                                          |

### 40.2 Features of Reflexes

| Feature     | Description                                                                             |
| ----------- | --------------------------------------------------------------------------------------- |
| Involuntary | Does not require conscious thought; automatic                                           |
| Fast        | Short pathway (few synapses); rapid response                                            |
| Protective  | Protects the body from harm (e.g., withdrawal reflex from hot objects; blinking reflex) |
| Not learned | Innate (present from birth); does not require prior experience                          |

### 40.3 Example: Withdrawal Reflex

1. Finger touches a hot object $\to$ pain receptors in the skin are stimulated.
2. Sensory neurone transmits impulse to the spinal cord.
3. Relay neurone passes the impulse to a motor neurone.
4. Motor neurone stimulates the biceps muscle (flexor) to contract $\to$ the arm is pulled away.
5. Simultaneously, a relay neurone inhibits the triceps (extensor) via an inhibitory interneurone
   $\to$ reciprocal inhibition prevents opposing muscles from working against each other.
6. The brain is informed (by a branch of the sensory neurone) so the person becomes consciously
   aware of the pain, but the reflex action has already occurred.

## 41. The Endocrine System: Key Hormones

### 41.1 Hypothalamus and Pituitary

| Hormone                               | Source                                         | Target                                              | Effect                                                                            |
| ------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| TRH (thyrotropin-releasing hormone)   | Hypothalamus                                   | Anterior pituitary                                  | Stimulates release of TSH                                                         |
| CRH (corticotropin-releasing hormone) | Hypothalamus                                   | Anterior pituitary                                  | Stimulates release of ACTH                                                        |
| GnRH (gonadotropin-releasing hormone) | Hypothalamus                                   | Anterior pituitary                                  | Stimulates release of FSH and LH                                                  |
| ADH (vasopressin)                     | Hypothalamus (released by posterior pituitary) | Kidney collecting ducts                             | Increases water reabsorption                                                      |
| Oxytocin                              | Hypothalamus (released by posterior pituitary) | Uterus; mammary glands                              | Stimulates uterine contractions during labour; milk ejection during breastfeeding |
| TSH (thyroid-stimulating hormone)     | Anterior pituitary                             | Thyroid gland                                       | Stimulates thyroid hormone secretion                                              |
| ACTH (adrenocorticotropic hormone)    | Anterior pituitary                             | Adrenal cortex                                      | Stimulates cortisol secretion                                                     |
| FSH                                   | Anterior pituitary                             | Ovaries (follicles) / Testes (seminiferous tubules) | Stimulates follicle development / sperm production                                |
| LH                                    | Anterior pituitary                             | Ovaries / Testes                                    | Triggers ovulation / stimulates testosterone production                           |
| Prolactin                             | Anterior pituitary                             | Mammary glands                                      | Stimulates milk production                                                        |
| Growth hormone (GH)                   | Anterior pituitary                             | Most tissues (liver, bones, muscles)                | Stimulates growth; stimulates the liver to produce IGF-1                          |

### 41.2 Thyroid and Adrenal Glands

| Hormone                    | Source          | Effect                                                                                                                   |
| -------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Thyroxine ($\mathrm{T_4}$) | Thyroid gland   | Stimulates basal metabolic rate; essential for growth and development; increases oxygen consumption and heat production  |
| Cortisol                   | Adrenal cortex  | Increases blood glucose (stimulates gluconeogenesis and glycogenolysis); suppresses the immune system; anti-inflammatory |
| Adrenaline                 | Adrenal medulla | Fight or flight response: increases heart rate, dilates bronchioles, dilates pupils, stimulates glycogenolysis           |
| Aldosterone                | Adrenal cortex  | Increases $\mathrm{Na^+}$ reabsorption and $\mathrm{K^+}$ secretion in the kidney; increases blood volume and pressure   |

## 42. Sensory Receptors

### 42.1 How Sensory Receptors Work

| Step | What Happens                                                                                                                                             |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Stimulus (e.g., light, pressure, temperature, chemicals) activates the receptor                                                                          |
| 2    | The receptor acts as a transducer (converts one form of energy to another: stimulus energy $\to$ electrical energy in the form of a generator potential) |
| 3    | If the generator potential reaches threshold, it triggers an action potential in the sensory neurone                                                     |
| 4    | The action potential is transmitted to the CNS                                                                                                           |

### 42.2 Types of Sensory Receptors

| Receptor Type            | Stimulus Detected               | Location                          | Mechanism                                                                                                                                                                                        |
| ------------------------ | ------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pacinian corpuscle       | Mechanical pressure / vibration | Deep in the skin, joints, tendons | Pressure deforms the corpuscle; stretches the sensory neurone membrane; opens stretch-mediated sodium channels; $\mathrm{Na^+}$ enters; depolarisation (generator potential)                     |
| Photoreceptor (rod/cone) | Light                           | Retina of the eye                 | Light is absorbed by visual pigment (rhodopsin in rods; photopsin in cones); pigment splits; triggers a cascade that closes $\mathrm{Na^+}$ channels; hyperpolarisation (generator potential)    |
| Olfactory receptor       | Chemical (volatile odorants)    | Nasal epithelium                  | Odorant binds to G-protein coupled receptor on cilia; activates adenylate cyclase $\to$ cAMP $\to$ opens $\mathrm{Na^+}$ channels; depolarisation                                                |
| Gustatory receptor       | Chemical (dissolved tastants)   | Taste buds on tongue              | Tastant binds to receptor; depolarisation; action potential sent to brain                                                                                                                        |
| Baroreceptor             | Blood pressure                  | Aortic arch, carotid sinus        | Stretch of arterial wall by high blood pressure opens stretch-mediated channels; depolarisation; sends signals to the medulla (triggers vasodilation and reduced heart rate via the vagus nerve) |

## 43. The Human Eye

### 43.1 Structure and Function

| Component    | Description                                                      | Function                                                                               |
| ------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Sclera       | Tough, white, outer layer of the eye                             | Protection; maintains shape of the eyeball                                             |
| Cornea       | Transparent front part of the sclera                             | Refracts (bends) light as it enters the eye; provides most of the eye's focusing power |
| Conjunctiva  | Thin, transparent membrane covering the sclera and inner eyelids | Protection; lubrication                                                                |
| Iris         | Coloured ring of muscle that controls the size of the pupil      | Controls the amount of light entering the eye (pupil dilation/constriction)            |
| Pupil        | Hole in the centre of the iris                                   | Allows light to pass through to the lens and retina                                    |
| Lens         | Transparent, flexible, biconvex structure behind the iris        | Fine focusing (accommodation); changes shape to focus on near or distant objects       |
| Ciliary body | Ring of muscle and suspensory ligaments attached to the lens     | Controls lens shape for accommodation                                                  |
| Retina       | Light-sensitive layer at the back of the eye                     | Contains photoreceptors (rods and cones); converts light to electrical signals         |
| Fovea        | Small depression in the retina (highest cone density)            | Area of sharpest vision (highest visual acuity)                                        |
| Optic nerve  | Bundle of ganglion cell axons exiting the eye                    | Transmits action potentials to the brain                                               |
| Blind spot   | Where the optic nerve exits the retina                           | No photoreceptors; no vision at this point                                             |

### 43.2 Accommodation

| Distance       | Ciliary Muscles | Suspensory Ligaments | Lens Shape          | Focused On |
| -------------- | --------------- | -------------------- | ------------------- | ---------- |
| Distant object | Relaxed         | Taut                 | Thin (flattened)    | Retina     |
| Near object    | Contracted      | Slack                | Thick (more curved) | Retina     |

## 44. Action Potentials in Detail

### 44.1 Stages of an Action Potential

| Stage             | What Happens                                                                                                                                                                                                   | Membrane Potential            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Resting potential | $\mathrm{Na^+}$/$\mathrm{K^+}$ pump maintains concentration gradients; membrane is more permeable to $\mathrm{K^+}$ than $\mathrm{Na^+}$ (leak channels); inside is negative relative to outside               | -70 mV                        |
| Depolarisation    | Stimulus causes voltage-gated $\mathrm{Na^+}$ channels to open; $\mathrm{Na^+}$ rushes in (down its electrochemical gradient); membrane potential becomes more positive                                        | -70 mV $\to$ +40 mV           |
| Repolarisation    | Voltage-gated $\mathrm{Na^+}$ channels close; voltage-gated $\mathrm{K^+}$ channels open (with a delay); $\mathrm{K^+}$ rushes out (down its electrochemical gradient); membrane potential returns to negative | +40 mV $\to$ -70 mV           |
| Hyperpolarisation | Voltage-gated $\mathrm{K^+}$ channels close slowly; membrane potential briefly becomes more negative than the resting potential                                                                                | -70 mV $\to$ -80 mV (briefly) |
| Return to resting | $\mathrm{Na^+}$/$\mathrm{K^+}$ pump restores the original ion concentrations                                                                                                                                   | -70 mV                        |

### 44.2 Refractory Periods

| Period                     | What Happens                                                                                                                                              | Why It Matters                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Absolute refractory period | Voltage-gated $\mathrm{Na^+}$ channels are inactivated; no new action potential can be generated regardless of stimulus strength                          | Ensures action potentials travel in one direction only (unidirectional propagation) |
| Relative refractory period | Some $\mathrm{Na^+}$ channels have recovered but $\mathrm{K^+}$ channels are still open; a stronger-than-normal stimulus can generate an action potential | Limits the maximum frequency of action potentials                                   |

## 45. Myelination and Saltatory Conduction

### 45.1 Myelin Sheath

| Feature          | Description                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Structure        | Multiple layers of cell membrane (from Schwann cells in the PNS; oligodendrocytes in the CNS) wrapped around the axon           |
| Function         | Insulates the axon; prevents ion leakage; increases the speed of action potential propagation                                   |
| Nodes of Ranvier | Gaps in the myelin sheath (~1--3 mm apart); exposed axon membrane; voltage-gated $\mathrm{Na^+}$ channels are concentrated here |

### 45.2 Saltatory Conduction

| Feature          | Description                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mechanism        | Action potential "jumps" from one node of Ranvier to the next (does not propagate continuously along the axon)                                               |
| Speed            | Much faster than continuous conduction (up to 120 m/s in myelinated neurones vs ~0.5 m/s in unmyelinated neurones)                                           |
| Why faster       | The depolarisation at one node is sufficient to depolarise the next node to threshold (current flows under the myelin sheath and builds up at the next node) |
| Energy efficient | Fewer $\mathrm{Na^+}$/$\mathrm{K^+}$ pumps needed to restore ion gradients (only the nodes of Ranvier need repolarisation, not the entire axon membrane)     |

## 46. Diseases of the Nervous System

### 46.1 Multiple Sclerosis (MS)

| Feature     | Description                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause       | Autoimmune destruction of the myelin sheath in the CNS (brain and spinal cord)                                                                                |
| Pathology   | Inflammatory demyelination; scleroses (scar tissue) form where myelin has been destroyed                                                                      |
| Symptoms    | Vision problems (optic neuritis); muscle weakness, numbness, tingling; fatigue; cognitive changes; problems with coordination and balance                     |
| Progression | Relapsing-remitting (most common form): episodes of worsening (relapses) followed by periods of recovery (remissions)                                         |
| Treatment   | No cure; disease-modifying therapies (e.g., interferon-$\beta$Natalizumab, fingolimod) reduce relapse rate; corticosteroids for acute relapses; physiotherapy |

### 46.2 Parkinson's Disease

| Feature            | Description                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause              | Progressive loss of dopamine-producing neurones in the substantia nigra                                                                                        |
| Pathology          | Lewy bodies (intracellular inclusions of $\alpha$-synuclein protein) in surviving neurones                                                                     |
| Motor symptoms     | Resting tremor (pill-rolling); bradykinesia (slowness of movement); rigidity; postural instability; shuffling gait; reduced facial expression (mask-like face) |
| Non-motor symptoms | Depression; sleep disorders; constipation; loss of sense of smell (anosmia); cognitive decline (in advanced stages)                                            |
| Treatment          | L-DOPA (levodopa); dopamine agonists; MAO-B inhibitors; deep brain stimulation (DBS) for severe, drug-resistant cases                                          |

## 47. The Eye and Photoreception

### 47.1 Structure of the Human Eye

| Structure    | Function                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| Cornea       | Transparent outer layer; provides most of the eye's focusing power (refraction); fixed curvature                   |
| Iris         | Coloured ring of muscle; controls the size of the pupil (regulates light entry)                                    |
| Pupil        | Hole in the iris; diameter changes to control light intensity reaching the retina                                  |
| Lens         | Transparent, flexible structure behind the iris; changes shape (accommodation) to focus on near or distant objects |
| Ciliary body | Contains ciliary muscles and suspensory ligaments; controls lens shape                                             |
| Retina       | Light-sensitive layer at the back of the eye; contains photoreceptors (rods and cones)                             |
| Fovea        | Area of the retina with the highest density of cones; sharpest vision (highest visual acuity)                      |
| Optic nerve  | Carries impulses from the retina to the visual cortex in the brain                                                 |
| Blind spot   | Where the optic nerve exits the eye; no photoreceptors; cannot detect light                                        |

### 47.2 Rods vs Cones

| Feature       | Rods                                                                    | Cones                                                                       |
| ------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Distribution  | Concentrated at the periphery of the retina                             | Concentrated at the fovea (centre of retina)                                |
| Sensitivity   | Very sensitive to low light (scotopic vision)                           | Require bright light (photopic vision)                                      |
| Colour vision | No (only one type of rhodopsin pigment)                                 | Yes (three types: red, green, blue)                                         |
| Visual acuity | Low (many rods share one ganglion cell; cannot distinguish fine detail) | High (each cone connects to its own ganglion cell)                          |
| Rhodopsin     | Contains retinal + opsin; breaks down in bright light (bleaching)       | Contains photopsin + retinal; three types with different absorption spectra |

## 48. Drug Action on the Nervous System

### 48.1 How Drugs Affect Synaptic Transmission

| Mechanism                                           | Description                                                                                                       | Example                                                                                          |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Stimulates neurotransmitter release                 | Drug causes more vesicles to fuse with the presynaptic membrane                                                   | Black widow spider venom (causes massive ACh release)                                            |
| Inhibits neurotransmitter release                   | Drug prevents vesicle fusion                                                                                      | Botulinum toxin (Botox); blocks ACh release at neuromuscular junctions; causes flaccid paralysis |
| Mimics neurotransmitter (agonist)                   | Drug binds to the postsynaptic receptor and activates it                                                          | Nicotine (nicotinic ACh receptor agonist); morphine (opioid receptor agonist)                    |
| Blocks neurotransmitter receptor (antagonist)       | Drug binds to the postsynaptic receptor but does not activate it; prevents the real neurotransmitter from binding | Curare (nicotinic ACh receptor antagonist); blocks neuromuscular junction; causes paralysis      |
| Inhibits enzyme that breaks down neurotransmitter   | Drug prevents breakdown; neurotransmitter remains in the synaptic cleft for longer                                | Sarin nerve gas (inhibits acetylcholinesterase); organophosphate pesticides                      |
| Stimulates enzyme that breaks down neurotransmitter | Drug increases breakdown rate; reduces neurotransmitter effect                                                    | --                                                                                               |

### 48.2 Effects of Specific Drugs

| Drug                | Type                | Effect on Nervous System                                                                                                                                                                                                                               |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Alcohol (ethanol)   | Depressant          | Increases the inhibitory effect of GABA; decreases excitatory effect of glutamate; overall: slows brain activity; reduces anxiety and inhibitions at low doses; causes loss of coordination, unconsciousness, and respiratory depression at high doses |
| Cocaine             | Stimulant           | Blocks reuptake of dopamine at synapses in the reward pathway; dopamine accumulates in the synaptic cleft; produces feelings of euphoria; highly addictive                                                                                             |
| Prozac (fluoxetine) | SSRI antidepressant | Selectively inhibits serotonin reuptake; serotonin remains in the synaptic cleft longer; increases serotonin signalling; takes 2--4 weeks for full therapeutic effect                                                                                  |

## 49. Habituation and Learning

### 49.1 Habituation

| Feature         | Description                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What it is      | A simple form of learning in which an animal stops responding to a repeated, harmless stimulus                                                                   |
| Example         | Sea anemones retract their tentacles when touched; after repeated harmless touches, they no longer respond                                                       |
| Significance    | Prevents the animal from wasting energy on responses to stimuli that are not important (e.g., background noise)                                                  |
| Characteristics | The response can recover if the stimulus is not presented for a while (spontaneous recovery); only the specific repeated stimulus is ignored (stimulus-specific) |

### 49.2 Other Types of Learning

| Type                   | Description                                                                     | Example                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Classical conditioning | An animal learns to associate a neutral stimulus with a meaningful stimulus     | Pavlov's dogs: learned to associate a bell with food; salivated at the bell alone           |
| Operant conditioning   | An animal learns to associate a behaviour with a reward or punishment           | Rats learn to press a lever to receive food (Skinner box)                                   |
| Insight learning       | An animal suddenly solves a problem without trial and error; requires reasoning | Chimpanzees stacking boxes to reach a banana; Sultan the chimp using a stick to reach fruit |

## 50. Synaptic Transmission in Detail

### 50.1 Steps at a Cholinergic Synapse

| Step                           | Description                                                                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Arrival of impulse          | Action potential arrives at the presynaptic terminal (axon terminal)                                                                                                                              |
| 2. Calcium influx              | Voltage-gated calcium ion channels open; $\mathrm{Ca^{2+}}$ ions diffuse into the presynaptic terminal down their concentration gradient                                                          |
| 3. Vesicle fusion              | The influx of $\mathrm{Ca^{2+}}$ causes synaptic vesicles (containing the neurotransmitter acetylcholine, ACh) to move to and fuse with the presynaptic membrane                                  |
| 4. Exocytosis                  | ACh is released into the synaptic cleft by exocytosis                                                                                                                                             |
| 5. Diffusion                   | ACh diffuses across the synaptic cleft (very short distance; transmission is fast)                                                                                                                |
| 6. Receptor binding            | ACh binds to specific receptor proteins (nicotinic ACh receptors) on the postsynaptic membrane; this causes sodium ion channels to open                                                           |
| 7. Postsynaptic depolarisation | $\mathrm{Na^+}$ ions diffuse into the postsynaptic neurone; this causes depolarisation (excitatory postsynaptic potential, EPSP); if the EPSP reaches threshold, an action potential is triggered |
| 8. Enzymatic breakdown         | Acetylcholinesterase (in the synaptic cleft) hydrolyses ACh into choline and ethanoic acid (acetate); this prevents continuous stimulation of the postsynaptic neurone                            |
| 9. Reuptake/recycling          | Choline is taken back up into the presynaptic neurone by active transport; combined with acetyl-CoA to resynthesise ACh; stored in new vesicles                                                   |

---

:::tip Diagnostic Test ::: ::: :::

## Common Pitfalls

1. Confusing DNA replication (S phase) with transcription or translation — be clear about which
   process is being described.

2. Stating that 'enzymes are denatured by heat' without specifying that high temperatures cause the
   change in tertiary structure.

3. Forgetting to include control variables in experimental design, leading to invalid conclusions.

4. Confusing correlation with causation when evaluating experimental data and drawing conclusions.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

