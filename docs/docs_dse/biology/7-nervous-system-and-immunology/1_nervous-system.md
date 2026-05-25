---
title: Nervous System
description:
  'DSE Biology nervous system notes covering neuron structure, resting and action potentials,
  synaptic transmission, reflex arcs, sense organs, brain structure,'
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Biology
categories:
  - DSE
  - Biology
slug: dse-biology-nervous-system
---

## Neuron Structure and Types

### Structure of a Neuron

Neurons (nerve cells) are the fundamental functional units of the nervous system. They are
specialised for transmitting electrical impulses (action potentials) from one part of the body to
another.

| Component        | Structure                                                    | Function                                                                                             |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Cell body (soma) | Contains the nucleus, cytoplasm, and organelles              | Controls metabolic activity of the neuron; synthesises neurotransmitters                             |
| Dendrites        | Short, branched extensions from the cell body                | Receive impulses from other neurons or sensory receptors; transmit towards the cell body             |
| Axon             | Long, single fibre extending from the cell body              | Carries impulses away from the cell body towards the axon terminal                                   |
| Myelin sheath    | Fatty insulating layer around the axon                       | Insulates the axon; speeds up impulse transmission by saltatory conduction                           |
| Nodes of Ranvier | Gaps in the myelin sheath at regular intervals (~1 mm apart) | Allow ions to flow in/out of the axon; action potential "jumps" between nodes (saltatory conduction) |
| Axon terminal    | Branched endings of the axon                                 | Release neurotransmitters into the synaptic cleft to stimulate the next neuron or effector           |
| Schwann cells    | Cells that form the myelin sheath (in the PNS)               | Wrap around the axon, depositing layers of lipid (myelin) that insulate it                           |

### Types of Neurons

| Type                | Structure                               | Function                                               | Location                                  |
| ------------------- | --------------------------------------- | ------------------------------------------------------ | ----------------------------------------- |
| Sensory (afferent)  | Long axon; cell body in a side branch   | Transmit impulses FROM receptors TO the CNS            | Dorsal root ganglion; throughout the body |
| Relay (interneuron) | Short axon; many dendrites              | Connect sensory and motor neurons; process information | Within the CNS (brain and spinal cord)    |
| Motor (efferent)    | Cell body in CNS; long axon to effector | Transmit impulses FROM the CNS TO effectors            | Ventral horn of spinal cord; brainstem    |

### Myelination

**Myelin in the peripheral nervous system (PNS):** Formed by Schwann cells. Each Schwann cell wraps
around a short section of axon, creating a segment of myelin sheath. The gap between adjacent
Schwann cells is a node of Ranvier.

**Myelin in the central nervous system (CNS):** Formed by oligodendrocytes. Each oligodendrocyte can
myelinate multiple axon segments simultaneously (unlike Schwann cells, which myelinate only one
segment).

**Significance of myelination:**

- Myelin acts as an electrical insulator, preventing current leakage across the axon membrane
- Forces depolarisation to occur only at the nodes of Ranvier
- The action potential "jumps" from node to node (saltatory conduction), which is much faster than
  continuous propagation along an unmyelinated axon
- Myelinated neurons conduct at speeds of approximately 100-120 m/s; unmyelinated neurons conduct at
  approximately 0.5-2 m/s

---

## Resting Potential

### Establishment of the Resting Potential

When a neuron is not transmitting an impulse, it is said to be at its **resting potential**. The
inside of the axon is negatively charged relative to the outside, at approximately **-70 mV**.

**The resting potential is established and maintained by three factors:**

**1. The sodium-potassium pump ($\mathrm{Na}^+/\mathrm{K}^+$-ATPase):**

- This active transport pump moves 3 $\mathrm{Na}^+$ ions OUT of the cell and 2 $\mathrm{K}^+$ ions
  INTO the cell for each ATP hydrolysed
- This creates a concentration gradient: high $\mathrm{Na}^+$ outside, high $\mathrm{K}^+$ inside
- The pump makes the inside more negative because more positive charge is pumped out than in (net
  loss of one positive charge per cycle)
- The pump operates continuously and is responsible for the long-term maintenance of the resting
  potential

**2. Potassium leak channels:**

- The axon membrane is much more permeable to $\mathrm{K}^+$ than to $\mathrm{Na}^+$ at rest
  (approximately 50-100 times more permeable)
- $\mathrm{K}^+$ ions diffuse out of the cell down their concentration gradient through these leak
  channels
- As $\mathrm{K}^+$ leaves, it carries positive charge out of the cell, making the inside more
  negative
- This outward diffusion of $\mathrm{K}^+$ is the primary cause of the negative resting potential

**3. Impermeability to sodium:**

- The membrane is very poorly permeable to $\mathrm{Na}^+$ at rest (few $\mathrm{Na}^+$ channels are
  open)
- Although there is a strong concentration gradient driving $\mathrm{Na}^+$ inward, very little
  $\mathrm{Na}^+$ can cross the membrane at rest
- This means the inward movement of $\mathrm{Na}^+$ does not counteract the outward movement of
  $\mathrm{K}^+$

The resting potential is therefore an **electrochemical gradient**: a combination of the
concentration gradients of $\mathrm{Na}^+$ and $\mathrm{K}^+$ (chemical gradient) and the electrical
potential difference (electrical gradient).

| Ion             | Intracellular Concentration (mM) | Extracellular Concentration (mM) | Direction of Concentration Gradient |
| --------------- | -------------------------------- | -------------------------------- | ----------------------------------- |
| $\mathrm{Na}^+$ | 15                               | 145                              | Inward                              |
| $\mathrm{K}^+$  | 140                              | 5                                | Outward                             |
| $\mathrm{Cl}^-$ | 10                               | 110                              | Inward                              |

---

## Action Potential

### Phases of the Action Potential

An action potential is a rapid, transient reversal of the membrane potential from approximately -70
mV to approximately +40 mV, followed by a return to the resting potential.

| Phase                         | Membrane Potential | Ion Movements                                                                                            | Channel Status                                                      |
| ----------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Resting                       | -70 mV             | $\mathrm{Na}^+/\mathrm{K}^+$ pump maintains gradients; $\mathrm{K}^+$ leaks out                          | Most voltage-gated channels closed                                  |
| Depolarisation                | -70 mV to +40 mV   | $\mathrm{Na}^+$ rushes IN through voltage-gated $\mathrm{Na}^+$ channels (down electrochemical gradient) | Voltage-gated $\mathrm{Na}^+$ channels open                         |
| Repolarisation                | +40 mV to -70 mV   | $\mathrm{K}^+$ rushes OUT through voltage-gated $\mathrm{K}^+$ channels (down concentration gradient)    | $\mathrm{Na}^+$ channels close; $\mathrm{K}^+$ channels open        |
| Hyperpolarisation (overshoot) | -70 mV to -80 mV   | $\mathrm{K}^+$ continues to diffuse out (voltage-gated $\mathrm{K}^+$ channels are slow to close)        | $\mathrm{Na}^+$ channels closed; $\mathrm{K}^+$ channels still open |
| Return to resting             | -80 mV to -70 mV   | $\mathrm{Na}^+/\mathrm{K}^+$ pump restores ionic gradients; $\mathrm{K}^+$ channels close                | All channels return to resting state                                |

### Threshold and the All-or-Nothing Principle

- The **threshold potential** is approximately -55 mV. If the membrane depolarises to this level,
  voltage-gated $\mathrm{Na}^+$ channels open fully, triggering an action potential.
- If the stimulus does not depolarise the membrane to threshold, no action potential is generated.
- Once threshold is reached, the action potential is always the same size and shape, regardless of
  stimulus strength. This is the **all-or-nothing principle**.
- A stronger stimulus does not produce a larger action potential. Instead, it produces a higher
  **frequency** of action potentials.

### The Refractory Period

After an action potential, there is a brief period during which the neuron cannot generate another
action potential.

**1. Absolute refractory period:**

- Lasts approximately 1-2 ms
- The $\mathrm{Na}^+$ channels are inactivated (closed and cannot be reopened regardless of stimulus
  strength)
- A second action potential is impossible under any circumstances
- This ensures that action potentials travel in one direction only (unidirectional propagation)

**2. Relative refractory period:**

- Lasts approximately 2-4 ms (overlaps with the end of the absolute refractory period)
- The $\mathrm{Na}^+$ channels are recovering from inactivation, and the $\mathrm{K}^+$ channels are
  still open (membrane hyperpolarised)
- A larger-than-normal stimulus CAN trigger another action potential
- The neuron is less excitable than normal

**Functional significance of the refractory period:**

- Ensures unidirectional propagation of action potentials (prevents backward spread)
- Limits the maximum frequency of action potential firing
- Prevents action potentials from overlapping and summing

### Saltatory Conduction

In myelinated neurons, the action potential does not travel continuously along the axon. Instead,
depolarisation only occurs at the nodes of Ranvier (where the axon membrane is exposed). The current
generated at one node spreads through the extracellular fluid and the axoplasm to depolarise the
next node, "jumping" over the myelinated internode.

**Advantages of saltatory conduction:**

- Much faster: the action potential effectively skips the myelinated sections, travelling only
  between nodes
- Energy efficient: fewer ions need to be actively pumped back across the membrane (only at the
  nodes), reducing the workload on the $\mathrm{Na}^+/\mathrm{K}^+$ pump
- The myelin sheath reduces membrane capacitance, allowing depolarisation to spread further

### Worked Example: Action Potential Speed

A myelinated sensory neuron has nodes of Ranvier spaced 1.2 mm apart. The action potential takes
$10 \mu\mathrm{s}$ to propagate between consecutive nodes. Calculate the conduction velocity.

<details>
<summary>Solution</summary>

Conduction velocity =
$\frac{\text{distance}}{\text{time}} = \frac{1.2 \times 10^{-3} \mathrm{ m}}{10 \times 10^{-6} \mathrm{ s}} = 120 \mathrm{ m/s}$

This is within the typical range for myelinated sensory neurons (approximately 100-120 m/s). An
unmyelinated neuron of the same diameter would conduct at approximately 0.5-2 m/s, demonstrating the
enormous speed advantage of myelination.

</details>

---

## Synaptic Transmission

### Structure of a Cholinergic Synapse

A synapse is the junction between two neurons (or between a neuron and an effector). The most
commonly studied synapse uses **acetylcholine** as the neurotransmitter.

| Structure              | Description                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| Pre-synaptic membrane  | The membrane of the axon terminal of the first (pre-synaptic) neuron                                         |
| Synaptic vesicles      | Vesicles in the pre-synaptic terminal that store neurotransmitter molecules                                  |
| Synaptic cleft         | The narrow gap (~20 nm) between the pre-synaptic and post-synaptic membranes                                 |
| Post-synaptic membrane | The membrane of the dendrite or cell body of the second (post-synaptic) neuron, containing receptor proteins |
| Mitochondria           | Provide ATP for the synthesis of neurotransmitter and for reuptake of breakdown products                     |

### Mechanism of Synaptic Transmission

1. **Arrival of action potential:** An action potential arrives at the pre-synaptic terminal,
   depolarising the membrane.

2. **Calcium influx:** Voltage-gated $\mathrm{Ca}^{2+}$ channels in the pre-synaptic membrane open
   in response to depolarisation. $\mathrm{Ca}^{2+}$ ions diffuse into the pre-synaptic terminal
   down their concentration gradient.

3. **Vesicle fusion:** The influx of $\mathrm{Ca}^{2+}$ causes synaptic vesicles to fuse with the
   pre-synaptic membrane (exocytosis), releasing neurotransmitter into the synaptic cleft.

4. **Diffusion:** Neurotransmitter molecules diffuse across the synaptic cleft (~20 nm, taking
   approximately 0.5 ms).

5. **Receptor binding:** Neurotransmitter molecules bind to specific receptor proteins on the
   post-synaptic membrane. This binding causes ion channels to open.

6. **Post-synaptic potential:** If acetylcholine (an excitatory neurotransmitter) binds to the
   receptors, $\mathrm{Na}^+$ channels open. $\mathrm{Na}^+$ diffuses into the post-synaptic neuron,
   causing a small depolarisation called an **excitatory post-synaptic potential (EPSP)**.

7. **Summation:** A single EPSP is insufficient to reach threshold. Multiple EPSPs from different
   synapses (**spatial summation**) or in rapid succession from the same synapse (**temporal
   summation**) can combine to depolarise the post-synaptic membrane to threshold, triggering a new
   action potential.

8. **Neurotransmitter removal:** Acetylcholine is rapidly broken down by the enzyme
   **acetylcholinesterase**, which is attached to the post-synaptic membrane. The breakdown products
   (choline and acetate) are taken back up by the pre-synaptic neuron and used to resynthesise
   acetylcholine.

### Excitatory and Inhibitory Synapses

| Feature             | Excitatory Synapse                                      | Inhibitory Synapse                                           |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| Neurotransmitter    | Acetylcholine, noradrenaline, glutamate                 | GABA, glycine                                                |
| Ion channels opened | $\mathrm{Na}^+$ channels (also some $\mathrm{Ca}^{2+}$) | $\mathrm{Cl}^-$ channels (also some $\mathrm{K}^+$ channels) |
| Effect on membrane  | Depolarisation (EPSP -- towards threshold)              | Hyperpolarisation (IPSP -- further from threshold)           |
| Probability of AP   | Increases                                               | Decreases                                                    |

**Inhibitory post-synaptic potential (IPSP):** When an inhibitory neurotransmitter (e.g., GABA)
binds to receptors on the post-synaptic membrane, $\mathrm{Cl}^-$ channels open. $\mathrm{Cl}^-$
diffuses into the neuron (or $\mathrm{K}^+$ diffuses out), making the inside even more negative
(hyperpolarisation, to approximately -75 to -80 mV). This moves the membrane potential further from
threshold, making it LESS likely that an action potential will be generated.

### Summation

The post-synaptic neuron integrates all incoming signals (both excitatory and inhibitory) to
determine whether threshold is reached.

**Temporal summation:** Multiple EPSPs from the SAME pre-synaptic neuron arrive in rapid succession,
adding together before the first one decays. Each subsequent impulse adds to the depolarisation.

**Spatial summation:** Multiple EPSPs from DIFFERENT pre-synaptic neurons arrive simultaneously,
adding together at the post-synaptic membrane. This allows integration of signals from multiple
sources.

### Why Synaptic Transmission is Unidirectional

Synaptic transmission occurs in one direction only (pre-synaptic to post-synaptic) because:

- Only the pre-synaptic terminal contains synaptic vesicles and the machinery for neurotransmitter
  release
- Only the post-synaptic membrane has the specific receptor proteins for the neurotransmitter
- Voltage-gated $\mathrm{Ca}^{2+}$ channels are only present on the pre-synaptic side
- Neurotransmitter is released only in response to depolarisation of the pre-synaptic terminal, not
  the post-synaptic membrane

### Synaptic Delay

Transmission across a synapse takes approximately 0.5-1.0 ms, which is much slower than transmission
along an axon. This delay is due to the time required for neurotransmitter release, diffusion,
receptor binding, and ion channel opening. Synaptic delay limits the speed of reflexes and neural
processing.

---

## Reflex Arcs

### Components of a Reflex Arc

A reflex arc is the neural pathway that controls an involuntary, rapid response to a stimulus. It
does not require conscious thought.

| Component      | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| Receptor       | Detects the stimulus and generates nerve impulses                          |
| Sensory neuron | Transmits impulses from the receptor to the CNS (spinal cord or brainstem) |
| Relay neuron   | Connects the sensory neuron to the motor neuron within the CNS             |
| Motor neuron   | Transmits impulses from the CNS to the effector                            |
| Effector       | Muscle or gland that carries out the response                              |

### Types of Reflex

**1. Spinal reflex:** The relay neurones and motor neurones are in the spinal cord. The brain is not
involved in the initial response. Examples: withdrawal reflex, stretch reflex.

**2. Cranial reflex:** The relay and motor neurones are in the brain (brainstem). Examples:
pupillary reflex, blinking reflex.

### The Withdrawal (Escape) Reflex

When a person touches a hot object, the following sequence occurs:

1. **Receptor:** Pain receptors (nociceptors) in the skin detect heat/pain and generate impulses
2. **Sensory neuron:** Impulses travel along sensory neurones to the spinal cord
3. **Relay neuron:** Impulses pass to a relay neuron in the spinal cord
4. **Motor neuron:** Impulses are transmitted to the motor neuron
5. **Effector:** The biceps muscle of the upper arm contracts (flexor), pulling the hand away

**Simultaneous actions:**

- The relay neuron also sends impulses UP the spinal cord to the brain, so the person becomes aware
  of the pain after the reflex has occurred
- An inhibitory interneuron simultaneously inhibits the motor neuron supplying the antagonistic
  muscle (triceps -- extensor), preventing it from contracting and opposing the withdrawal. This is
  called **reciprocal inhibition**

### Advantages of Reflex Arcs

- **Speed:** Involuntary and rapid, protecting the body before conscious thought occurs
- **Protection:** Prevents tissue damage from harmful stimuli
- **No conscious input:** Does not require processing by the brain, saving time
- **Innate:** Present from birth, not learned

### The Pupillary Light Reflex

When light intensity increases:

1. **Receptors:** Photoreceptors in the retina detect increased light
2. **Sensory neurons:** Optic nerve (cranial nerve II) transmits impulses to the brain
3. **Relay neurons:** Impulses pass to the Edinger-Westphal nucleus in the midbrain
4. **Motor neurons:** Oculomotor nerve (cranial nerve III) transmits impulses to the circular
   muscles of the iris
5. **Effector:** Circular muscles contract, constricting the pupil and reducing the amount of light
   entering the eye

This is a **cranial reflex** and a **consensual reflex** -- shining light in one eye causes both
pupils to constrict because the relay neurons send impulses to both Edinger-Westphal nuclei.

---

## Sense Organs

### The Eye: Detailed Structure

| Component               | Structure and Function                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Sclera                  | Tough, white outer layer; protects the eye and maintains shape                                                      |
| Cornea                  | Transparent front part of the sclera; refracts light as it enters the eye                                           |
| Conjunctiva             | Thin transparent membrane covering the sclera and inner eyelids; produces mucus to lubricate the eye                |
| Choroid                 | Pigmented, vascular layer; absorbs stray light to prevent reflection; supplies nutrients to the retina              |
| Retina                  | Light-sensitive layer at the back of the eye; contains photoreceptors (rods and cones)                              |
| Fovea                   | Small depression at the centre of the retina; contains only cones; highest visual acuity (point of sharpest vision) |
| Blind spot (optic disc) | Point where the optic nerve exits the eye; no photoreceptors, so no vision at this point                            |
| Iris                    | Coloured ring of muscle; controls the size of the pupil (circular muscles constrict, radial muscles dilate)         |
| Pupil                   | Hole in the centre of the iris; allows light to enter the eye                                                       |
| Lens                    | Transparent, elastic structure; changes shape to focus light on the retina (accommodation)                          |
| Ciliary body            | Ring of muscle that controls the shape of the lens; also secretes aqueous humour                                    |
| Suspensory ligaments    | Connect the ciliary body to the lens; transmit tension from the ciliary muscles to the lens                         |
| Aqueous humour          | Watery fluid between the cornea and lens; maintains pressure and provides nutrients                                 |
| Vitreous humour         | Jelly-like fluid filling the space behind the lens; maintains the shape of the eye and transmits light              |
| Optic nerve             | Transmits impulses from the retina to the brain                                                                     |

### Adaptations of the Eye for Function

| Adaptation                               | Function                                                                                     |
| ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| Transparent cornea and lens              | Allow light to pass through to the retina                                                    |
| Suspensory ligaments and ciliary muscles | Enable the lens to change shape for accommodation (focusing on near and distant objects)     |
| Two types of photoreceptor               | Rods for dim light and peripheral vision; cones for colour and detailed central vision       |
| Fovea packed with cones                  | Highest visual acuity at the centre of the visual field                                      |
| Iris controls pupil size                 | Regulates the amount of light entering the eye (protects retina from damage in bright light) |
| Aqueous and vitreous humours             | Maintain the shape of the eyeball and keep the retina pressed against the choroid            |

### Photoreceptors: Rods and Cones

| Feature       | Rods                                                              | Cones                                                         |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------------------- |
| Sensitivity   | Very high; work in dim light (scotopic vision)                    | Lower; work in bright light (photopic vision)                 |
| Colour vision | Cannot distinguish colour (only one type of rhodopsin pigment)    | Three types (red, green, blue iodopsin); enable colour vision |
| Visual acuity | Low resolution (many rods share one bipolar neuron)               | High resolution (one cone per bipolar neuron in the fovea)    |
| Distribution  | Concentrated at the periphery of the retina (absent at the fovea) | Concentrated at the fovea (sparse at the periphery)           |
| Pigment       | Rhodopsin (bleached in bright light; takes time to regenerate)    | Iodopsin (three types with different absorption spectra)      |
| Role          | Peripheral vision; detecting movement; night vision               | Central vision; colour discrimination; fine detail            |

### The Ear: Hearing and Balance

The ear has two functions: hearing and balance.

**Hearing pathway:**

1. Sound waves collected by the pinna and directed into the ear canal
2. Sound waves cause the eardrum (tympanic membrane) to vibrate
3. Vibrations amplified by the ossicles (malleus, incus, stapes) -- lever action and area ratio
   amplify force approximately 20 times
4. Stapes pushes against the oval window, creating pressure waves in the perilymph fluid of the
   cochlea
5. Pressure waves cause the basilar membrane to vibrate
6. Hair cells (stereocilia) on the basilar membrane bend against the tectorial membrane
7. Bending of hair cells generates nerve impulses in the auditory nerve
8. Impulses transmitted to the auditory cortex of the brain, where sound is interpreted

**Frequency discrimination:** Different frequencies of sound cause different parts of the basilar
membrane to vibrate. High-frequency sounds cause vibration near the base (near the oval window);
low-frequency sounds cause vibration near the apex. This is the **place theory** of hearing.

**Balance (equilibrium):**

- The **semicircular canals** (three orthogonal canals) detect rotational acceleration of the head.
  Each canal contains endolymph fluid and hair cells in a swelling called the ampulla. Movement of
  the head causes the fluid to lag behind, bending the hair cells and generating impulses sent to
  the cerebellum.
- The **utricle** and **saccule** detect linear acceleration and the position of the head relative
  to gravity. They contain otoliths (calcium carbonate crystals) that move in response to gravity,
  bending hair cells.

---

## The Central Nervous System

### The Brain

The brain is the main coordinating centre of the nervous system. It receives sensory input,
processes information, and sends motor output.

| Region            | Structure                                | Function                                                                                                                                        |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Cerebrum          | Two cerebral hemispheres (left, right)   | Higher-order functions: conscious thought, memory, learning, language, decision-making, reasoning, personality                                  |
| Cerebral cortex   | Outer layer of grey matter               | Contains motor areas (control voluntary movement), sensory areas (receive sensory input), association areas (interpretation)                    |
| Corpus callosum   | Bundle of nerve fibres                   | Connects the two cerebral hemispheres, allowing communication between them                                                                      |
| Hypothalamus      | Small region below the thalamus          | Controls the pituitary gland; regulates body temperature, hunger, thirst, blood water potential; produces ADH and releasing hormones            |
| Pituitary gland   | Pea-sized gland below the hypothalamus   | "Master gland" -- secretes hormones controlling other endocrine glands (FSH, LH, TSH, ACTH, GH); posterior lobe stores ADH and oxytocin         |
| Thalamus          | Above the hypothalamus                   | Relay station for sensory impulses (except olfaction) to the cerebral cortex; filters sensory information before it reaches conscious awareness |
| Medulla oblongata | Lowest part of the brainstem             | Controls involuntary (autonomic) functions: breathing rate, heart rate, blood pressure, swallowing, coughing, sneezing                          |
| Cerebellum        | Below the cerebrum, behind the brainstem | Coordinates movement and balance; fine-tunes motor activity; maintains posture; involved in motor learning                                      |
| Pons              | Above the medulla                        | Relays signals between the cerebrum and cerebellum; helps regulate breathing rhythm                                                             |

### The Spinal Cord

The spinal cord runs from the medulla oblongata down the vertebral column. It has two main
functions:

1. **Transmission of nerve impulses:** Ascending tracts carry sensory information up to the brain;
   descending tracts carry motor commands from the brain to effectors.

2. **Reflex centre:** Contains relay neurons that form the central component of spinal reflex arcs
   (e.g., withdrawal reflex, stretch reflex).

**Cross-sectional structure of the spinal cord:**

| Feature              | Description                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| Grey matter          | Central H-shaped region; contains cell bodies of relay neurons, motor neurons, and interneurons |
| White matter         | Outer region; contains myelinated axons (sensory ascending tracts and motor descending tracts)  |
| Central canal        | Small channel running the length of the cord; contains cerebrospinal fluid (CSF)                |
| Dorsal root          | Contains sensory neuron axons entering the spinal cord                                          |
| Ventral root         | Contains motor neuron axons leaving the spinal cord                                             |
| Dorsal root ganglion | Swelling containing cell bodies of sensory neurons                                              |

---

## The Autonomic Nervous System

### Overview

The autonomic nervous system (ANS) controls involuntary body functions such as heart rate,
digestion, breathing rate, and pupil size. It has two divisions that generally have antagonistic
effects.

| Feature                            | Sympathetic Nervous System                                | Parasympathetic Nervous System                             |
| ---------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| General function                   | "Fight or flight" -- prepares body for action/stress      | "Rest and digest" -- promotes calm, maintenance activities |
| Neurotransmitter (pre-ganglionic)  | Acetylcholine                                             | Acetylcholine                                              |
| Neurotransmitter (post-ganglionic) | Noradrenaline (at most effectors)                         | Acetylcholine                                              |
| Origin                             | Thoracic and lumbar regions of spinal cord                | Brainstem and sacral region of spinal cord                 |
| Ganglia location                   | Close to the spinal cord (paravertebral chain)            | Close to or within the target organ                        |
| Preganglionic fibre                | Short                                                     | Long                                                       |
| Postganglionic fibre               | Long                                                      | Short                                                      |
| Heart rate                         | Increases                                                 | Decreases                                                  |
| Pupil size                         | Dilates                                                   | Constricts                                                 |
| Bronchioles                        | Dilates (increases air intake)                            | Constricts                                                 |
| Digestive activity                 | Decreases (inhibits peristalsis; reduces secretions)      | Increases (stimulates peristalsis and secretions)          |
| Blood glucose                      | Increases (stimulates glycogenolysis)                     | Decreases                                                  |
| Blood vessels                      | Vasoconstriction in skin and gut; vasodilation in muscles | No significant effect on most blood vessels                |

### Nervous Control of Heart Rate

The heart has its own intrinsic pacemaker -- the **sinoatrial (SA) node** -- which generates
electrical impulses that cause the heart to beat at approximately 60-80 beats per minute at rest.
However, the autonomic nervous system modifies this rate.

**Sympathetic stimulation (increases heart rate):**

1. During exercise, stress, or excitement, the sympathetic nervous system is activated
2. Noradrenaline is released at the SA node
3. Noradrenaline binds to beta-1 adrenergic receptors on the SA node cells
4. This increases the rate of depolarisation of the SA node cells, causing them to reach threshold
   faster
5. The SA node fires more frequently, increasing heart rate
6. Additionally, sympathetic stimulation increases the force of contraction (stroke volume),
   increasing cardiac output

**Parasympathetic stimulation (decreases heart rate):**

1. During rest, the parasympathetic nervous system dominates
2. The vagus nerve (cranial nerve X) releases acetylcholine at the SA node
3. Acetylcholine binds to muscarinic receptors on the SA node cells
4. This slows the rate of depolarisation of the SA node cells (hyperpolarises them slightly)
5. The SA node takes longer to reach threshold, decreasing heart rate

**Adrenaline (from the adrenal medulla):**

- Released into the blood during the "fight or flight" response
- Binds to beta-1 receptors on the heart, increasing heart rate and stroke volume
- Effects last longer than nervous stimulation because the hormone remains in the blood until broken
  down by the liver

### Nervous Control of Breathing Rate

Breathing rate is controlled by the **ventilation centre** (respiratory centre) in the **medulla
oblongata**.

**Normal breathing cycle:**

1. The ventilation centre sends rhythmic impulses to the intercostal muscles (between ribs) and
   diaphragm via the phrenic and intercostal nerves
2. These impulses cause the muscles to contract: the diaphragm flattens and the ribs move up and out
3. Lung volume increases, pressure decreases below atmospheric, and air rushes in (inhalation)
4. When the impulses stop, the muscles relax: the diaphragm curves up and ribs move down and in
5. Lung volume decreases, pressure increases above atmospheric, and air is forced out (exhalation)

**Chemical control of breathing rate:**

- **$\mathrm{CO}_2$ concentration** is the primary stimulus (not $\mathrm{O}_2$ concentration)
- Increased $\mathrm{CO}_2$ in the blood lowers blood pH (carbonic acid:
  $\mathrm{CO}_2 + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{H}_2\mathrm{CO}_3 \rightleftharpoons \mathrm{H}^+ + \mathrm{HCO}_3^-$)
- Chemoreceptors in the aorta (aortic body) and carotid arteries (carotid body) detect increased
  $\mathrm{CO}_2$ / decreased pH
- Additional chemoreceptors in the medulla itself (central chemoreceptors) respond to $\mathrm{H}^+$
  in the CSF
- These receptors send impulses to the ventilation centre, which increases the rate and depth of
  breathing
- $\mathrm{O}_2$ concentration is only monitored by chemoreceptors in the aortic and carotid bodies
  when it drops significantly (below approximately 60 mmHg)

---

---

## Sense Organs

### The Eye

**Structure of the eye:**

| Component       | Description                                                                                       | Function                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Sclera          | Tough, white, fibrous outer layer of the eye                                                      | Protects the eye; provides attachment points for the extrinsic muscles that move the eye                                          |
| Cornea          | Transparent front part of the sclera; curved                                                      | Refracts (bends) light as it enters the eye; provides most of the eye's focusing power (~2/3 of the total refraction)             |
| Conjunctiva     | Thin, transparent membrane covering the sclera and inner eyelids                                  | Protects and lubricates the eye surface                                                                                           |
| Iris            | Coloured ring of muscle tissue behind the cornea                                                  | Controls the size of the pupil; regulates the amount of light entering the eye                                                    |
| Pupil           | Hole in the centre of the iris                                                                    | Allows light to pass through to the retina                                                                                        |
| Lens            | Transparent, flexible, biconvex structure behind the iris and pupil                               | Fine-tunes focusing (accommodation); changes shape to focus on objects at different distances                                     |
| Ciliary body    | Ring of muscle tissue connected to the lens by suspensory ligaments                               | Controls the shape of the lens (accommodation)                                                                                    |
| Retina          | Light-sensitive layer at the back of the eye; contains photoreceptor cells (rods and cones)       | Converts light energy into electrical nerve impulses (transduction)                                                               |
| Fovea           | Small depression in the retina at the centre of the macula; highest concentration of cones        | Area of sharpest vision (highest visual acuity); colour vision is best here                                                       |
| Optic nerve     | Bundle of nerve fibres carrying impulses from the retina to the brain                             | Transmits visual information to the visual cortex in the occipital lobe                                                           |
| Blind spot      | Area where the optic nerve leaves the retina (optic disc)                                         | No photoreceptors; cannot detect light; the brain fills in the missing information                                                |
| Aqueous humour  | Clear, watery fluid in the space between the cornea and the lens (anterior chamber)               | Maintains the shape of the front of the eye; provides nutrients to the cornea and lens; refracts light slightly                   |
| Vitreous humour | Clear, jelly-like substance filling the space between the lens and the retina (posterior chamber) | Maintains the shape of the eyeball; keeps the retina pressed against the back of the eye                                          |
| Choroid         | Pigmented, vascular layer between the sclera and the retina                                       | Provides oxygen and nutrients to the retina; contains pigment (melanin) that absorbs stray light and prevents internal reflection |

### Accommodation

Accommodation is the process by which the eye changes focus to see objects at different distances.

| Distance       | Ciliary Muscles | Suspensory Ligaments | Lens Shape         | Focal Point   |
| -------------- | --------------- | -------------------- | ------------------ | ------------- |
| Distant object | Relaxed         | Taut (pulled tight)  | Thin, flattened    | On the retina |
| Near object    | Contracted      | Slack (loose)        | Thick, more curved | On the retina |

**Mechanism:**

1. Light from a distant object is nearly parallel; the relaxed lens is thin enough to focus it on
   the retina
2. Light from a near object is diverging; the thin lens would focus it behind the retina (image
   would be blurry)
3. The ciliary muscles contract, reducing the diameter of the ciliary body
4. This causes the suspensory ligaments to go slack (they are no longer under tension)
5. The elastic lens recoils and becomes more rounded (thicker, more curved)
6. The thicker lens has greater refracting power and brings the diverging light rays to focus on the
   retina

### Rods vs Cones

| Feature                | Rods                                                                                                                        | Cones                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Number                 | ~120 million per eye                                                                                                        | ~6 million per eye                                                                                                  |
| Distribution           | Distributed throughout the retina, concentrated at the periphery; absent from the fovea                                     | Concentrated in the fovea (centre of the macula); very few at the periphery                                         |
| Sensitivity to light   | Very sensitive; function well in dim light (scotopic vision)                                                                | Less sensitive; require bright light (photopic vision)                                                              |
| Colour vision          | No; only one type of rod pigment (rhodopsin)                                                                                | Yes; three types of cones (S-cones for blue, M-cones for green, L-cones for red); enable trichromatic colour vision |
| Visual acuity (detail) | Low; many rods share a single ganglion cell connection, so the brain cannot distinguish which individual rod was stimulated | High; each cone has its own dedicated ganglion cell connection, so the brain can precisely locate the stimulus      |
| Response speed         | Slow to respond and recover (take longer to adapt to changes in light intensity)                                            | Fast to respond and recover                                                                                         |
| Used for               | Peripheral vision; night vision; detecting motion                                                                           | Central vision; colour vision; fine detail (reading, recognising faces)                                             |

### The Ear

**Structure and function:**

| Component                   | Description                                                                                     | Function                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Pinna (auricle)             | Visible outer part of the ear; made of cartilage covered by skin                                | Collects sound waves and directs them into the ear canal                                                             |
| Ear canal (auditory meatus) | Tube leading from the pinna to the eardrum                                                      | Directs sound waves to the tympanum; contains wax-producing glands that protect the ear from dust and microorganisms |
| Tympanum (eardrum)          | Thin, flexible membrane at the end of the ear canal                                             | Vibrates when sound waves reach it; transfers vibrations to the ossicles                                             |
| Ossicles                    | Three tiny bones: malleus (hammer), incus (anvil), stapes (stirrup); smallest bones in the body | Amplify the vibrations from the tympanum (by about 20x) and transmit them to the oval window of the cochlea          |
| Oval window                 | Membrane-covered opening between the middle ear and the inner ear (cochlea)                     | Receives vibrations from the stapes; transmits them to the fluid in the cochlea                                      |
| Cochlea                     | Coiled, fluid-filled tube in the inner ear; contains the organ of Corti (hair cells)            | Converts vibrations into electrical nerve impulses; different parts of the cochlea respond to different frequencies  |
| Round window                | Membrane-covered opening below the oval window                                                  | Allows the fluid in the cochlea to move; dissipates the energy of the vibrations                                     |
| Semi-circular canals        | Three fluid-filled loops at right angles to each other in the inner ear                         | Detect rotational movement of the head (balance and equilibrium)                                                     |
| Auditory nerve              | Carries impulses from the cochlea to the auditory cortex in the temporal lobe                   | Transmits sound information to the brain for interpretation                                                          |
| Eustachian tube             | Tube connecting the middle ear to the nasopharynx (back of the throat)                          | Equalises air pressure on both sides of the tympanum; allows the eardrum to vibrate freely                           |

**Hearing mechanism:**

1. Sound waves are collected by the pinna and directed into the ear canal
2. The sound waves cause the tympanum to vibrate
3. The ossicles amplify the vibrations and transmit them to the oval window
4. The oval window vibrates, creating pressure waves in the fluid (perilymph) inside the cochlea
5. The pressure waves cause the basilar membrane in the cochlea to vibrate; different frequencies
   cause different parts of the basilar membrane to vibrate most (the base vibrates to high
   frequencies; the apex vibrates to low frequencies)
6. Hair cells (stereocilia) on the organ of Corti bend as the basilar membrane vibrates
7. Bending of the stereocilia opens ion channels, creating a receptor potential
8. This triggers the release of neurotransmitter at the base of the hair cells, stimulating sensory
   neurons
9. Impulses travel along the auditory nerve to the auditory cortex in the temporal lobe, where the
   sound is interpreted

### The Skin (Integumentary System)

| Structure                       | Description                                                                                                                       | Function                                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Epidermis                       | Outer layer of skin; contains keratinocytes (produce keratin), melanocytes (produce melanin), and Langerhans cells (immune cells) | Barrier against pathogens, UV radiation, and water loss; melanin provides UV protection               |
| Dermis                          | Inner layer of skin; contains blood vessels, nerves, hair follicles, sweat glands, sebaceous glands, sensory receptors            | Provides structural support; nourishment; temperature regulation; sensation                           |
| Hypodermis (subcutaneous layer) | Layer of fat and connective tissue below the dermis                                                                               | Insulation; energy storage; cushioning                                                                |
| Thermoreceptors                 | Nerve endings in the dermis that detect temperature changes                                                                       | Detect heat and cold; relay information to the hypothalamus                                           |
| Mechanoreceptors                | Nerve endings in the dermis that detect pressure and touch                                                                        | Detect pressure, vibration, and texture; relay information to the somatosensory cortex                |
| Nociceptors                     | Nerve endings that detect pain (tissue damage)                                                                                    | Detect harmful stimuli; initiate protective reflexes                                                  |
| Sweat glands (eccrine)          | Coiled tubular glands in the dermis that produce sweat                                                                            | Thermoregulation: sweat evaporates from the skin surface, removing heat                               |
| Hair erector muscles            | Small muscles attached to hair follicles                                                                                          | Contract in cold conditions (causing goosebumps), trapping a layer of insulating air next to the skin |

:::

## Drugs and the Nervous System

### How Drugs Affect Synaptic Transmission

Many drugs exert their effects by interfering with synaptic transmission. Understanding these
mechanisms is important for both the DSE specification and for understanding the basis of addiction
and medicine.

| Mechanism                               | Description                                                                                                     | Example Drug                                                         | Effect                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------- |
| Agonist                                 | Mimics the neurotransmitter by binding to and activating the receptor                                           | Nicotine (acetylcholine receptor agonist)                            | Stimulates the postsynaptic neuron                       |
| Antagonist                              | Blocks the receptor, preventing the neurotransmitter from binding                                               | Curare (acetylcholine receptor antagonist)                           | Prevents synaptic transmission; causes paralysis         |
| Inhibits neurotransmitter breakdown     | Blocks the enzyme that breaks down the neurotransmitter, prolonging its effect                                  | Sarin (inhibits acetylcholinesterase)                                | Acetylcholine accumulates; overstimulation; muscle spasm |
| Stimulates neurotransmitter release     | Causes more neurotransmitter to be released from the pre-synaptic terminal                                      | Amphetamine (stimulates dopamine and noradrenaline release)          | Increased stimulation of postsynaptic neurons            |
| Inhibits neurotransmitter release       | Prevents neurotransmitter release from the pre-synaptic terminal                                                | Botulinum toxin (prevents acetylcholine release)                     | Flaccid paralysis; used medically for muscle spasms      |
| Blocks reuptake                         | Prevents the pre-synaptic neuron from recycling the neurotransmitter, increasing its concentration in the cleft | Cocaine (blocks dopamine reuptake); SSRIs (block serotonin reuptake) | Prolonged effect of neurotransmitter; mood elevation     |
| Blocks receptor on post-synaptic neuron | Binds to the receptor without activating it, preventing the real neurotransmitter from binding                  | Ketamine (NMDA receptor blocker)                                     | Disrupts normal synaptic signalling                      |

### Effects of Drugs on the Body

**Nicotine:**

- Binds to nicotinic acetylcholine receptors in the brain, stimulating dopamine release in the
  reward pathway
- Causes initial stimulation (increased alertness, heart rate, blood pressure)
- Highly addictive because it activates the brain's reward system
- Long-term use is associated with cardiovascular disease, lung cancer (through smoking), and
  reduced lung function

**Alcohol (ethanol):**

- Crosses the blood-brain barrier and affects multiple neurotransmitter systems:
- Enhances GABA activity (inhibitory neurotransmitter): slows brain function, reduces anxiety,
  impairs coordination
- Inhibits glutamate (excitatory neurotransmitter): further depresses brain activity
- Increases dopamine release in the reward pathway: contributes to addictive potential
- Short-term effects: impaired judgement, reduced coordination, slurred speech, slowed reaction time
- Long-term effects: liver damage (cirrhosis), brain damage, cardiovascular disease, addiction

### Worked Example: Nervous Control During Exercise

During intense exercise, a person's breathing rate increases from 15 breaths/min to 40 breaths/min,
and heart rate increases from 70 bpm to 180 bpm. Explain the nervous and hormonal mechanisms
responsible for these changes.

<details>
<summary>Solution</summary>

**Increased breathing rate:**

- Increased muscle respiration produces more $\mathrm{CO}_2$ as a waste product
- Blood $\mathrm{CO}_2$ concentration rises, lowering blood pH
- Peripheral chemoreceptors (aortic body, carotid body) and central chemoreceptors (medulla) detect
  the increased $\mathrm{CO}_2$ / decreased pH
- These chemoreceptors send more impulses to the ventilation centre in the medulla
- The ventilation centre sends more frequent impulses to the intercostal muscles and diaphragm
- Breathing rate and depth increase, removing more $\mathrm{CO}_2$ from the blood

**Increased heart rate:**

- The sympathetic nervous system is activated during exercise
- Sympathetic nerve impulses release noradrenaline at the SA node, increasing the rate of pacemaker
  depolarisation
- The adrenal medulla releases adrenaline into the blood, which binds to beta-1 receptors on the
  heart, further increasing heart rate and stroke volume
- Proprioceptors in muscles and joints detect movement and send signals to the cardiovascular centre
  in the medulla, which relays impulses via the sympathetic nervous system to increase heart rate

Both responses are examples of **negative feedback** -- when $\mathrm{CO}_2$ levels return to
normal, the chemoreceptors reduce their firing, and the ventilation centre decreases breathing rate
accordingly.

</details>

---

## Common Pitfalls

1. **Writing that the action potential "travels" along the neuron:** The action potential does not
   physically move. Rather, it is a local reversal of membrane potential that is regenerated at each
   point along the axon. Each section of the membrane undergoes depolarisation in sequence, passing
   the signal along like a wave.

2. **Confusing the direction of ion movement during the action potential:** During depolarisation,
   $\mathrm{Na}^+$ moves INTO the cell (not out). During repolarisation, $\mathrm{K}^+$ moves OUT of
   the cell (not in). This is counterintuitive because the resting potential is negative, but
   remember: depolarisation makes the inside more positive (positive ions enter), and repolarisation
   restores the negative charge (positive ions leave).

3. **Stating that the $\mathrm{Na}^+/\mathrm{K}^+$ pump is responsible for the action potential:**
   The pump maintains the gradients but is too slow to directly cause the action potential. The
   rapid changes during the action potential are caused by voltage-gated ion channels (diffusion,
   not active transport). The pump restores the gradients AFTER the action potential.

4. **Writing that a stronger stimulus produces a larger action potential:** This violates the
   all-or-nothing principle. A stronger stimulus produces more action potentials per second (higher
   frequency), not larger ones. The amplitude of each action potential is constant.

5. **Confusing the refractory period with fatigue:** The refractory period is a normal, brief period
   after each action potential during which the neuron cannot fire again. It is not caused by
   fatigue or exhaustion. Fatigue refers to a decline in response over a sustained period of
   stimulation.

6. **Writing that neurotransmitter is released from both sides of the synapse:** Only the
   pre-synaptic terminal releases neurotransmitter. The post-synaptic membrane only has receptors.
   This is what makes transmission unidirectional.

7. **Confusing spatial and temporal summation:** Spatial summation involves multiple DIFFERENT
   pre-synaptic neurons firing simultaneously. Temporal summation involves the SAME pre-synaptic
   neuron firing rapidly in succession. Both can cause the post-synaptic membrane to reach
   threshold.

8. **Writing that rods are responsible for colour vision:** Rods are responsible for vision in dim
   light and cannot distinguish colour. Only cones provide colour vision (three types: red, green,
   blue). This is why colours appear washed out at night.

9. **Confusing the sympathetic and parasympathetic nervous systems:** Sympathetic = fight or flight
   (noradrenaline at most effectors; increases heart rate, dilates pupils, inhibits digestion).
   Parasympathetic = rest and digest (acetylcholine at all effectors; decreases heart rate,
   constricts pupils, stimulates digestion).

10. **Writing that $\mathrm{O}_2$ concentration is the primary stimulus for breathing:** Under
    normal conditions, $\mathrm{CO}_2$ concentration (and the resulting change in blood pH) is the
    primary stimulus for breathing rate. $\mathrm{O}_2$ concentration only becomes a significant
    stimulus when it drops dangerously low.

---

## Problem Set

**Problem 1:** Explain how the resting potential of approximately -70 mV is established and
maintained in a neuron. In your answer, refer to the roles of the sodium-potassium pump, potassium
leak channels, and membrane permeability.

If you get this wrong, revise: Resting Potential

<details>
<summary>Solution</summary>

The resting potential of approximately -70 mV is established by three factors:

1. **The sodium-potassium pump ($\mathrm{Na}^+/\mathrm{K}^+$-ATPase)** actively transports 3
   $\mathrm{Na}^+$ ions out and 2 $\mathrm{K}^+$ ions in per ATP hydrolysed. This creates
   concentration gradients (high $\mathrm{Na}^+$ outside, high $\mathrm{K}^+$ inside) and a net
   outward movement of positive charge.

2. **Potassium leak channels** make the membrane much more permeable to $\mathrm{K}^+$ than to
   $\mathrm{Na}^+$ at rest. $\mathrm{K}^+$ diffuses out of the cell down its concentration gradient,
   carrying positive charge out and making the inside more negative.

3. **Low $\mathrm{Na}^+$ permeability** means that despite the strong inward concentration gradient
   for $\mathrm{Na}^+$Very little $\mathrm{Na}^+$ enters the cell at rest, so the outward
   $\mathrm{K}^+$ diffusion is not counteracted.

The resting potential is maintained because the $\mathrm{Na}^+/\mathrm{K}^+$ pump continuously
compensates for the slow leakage of ions, restoring the concentration gradients over time.

</details>

**Problem 2:** Describe the sequence of events at a cholinergic synapse that leads to transmission
of an impulse from one neuron to the next. Explain why transmission only occurs in one direction.

If you get this wrong, revise: Synaptic Transmission

<details>
<summary>Solution</summary>

1. An action potential arrives at the pre-synaptic terminal, depolarising the membrane.
2. Voltage-gated $\mathrm{Ca}^{2+}$ channels open; $\mathrm{Ca}^{2+}$ ions diffuse into the
   terminal.
3. $\mathrm{Ca}^{2+}$ causes synaptic vesicles to fuse with the pre-synaptic membrane, releasing
   acetylcholine into the synaptic cleft (exocytosis).
4. Acetylcholine diffuses across the synaptic cleft and binds to receptor proteins on the
   post-synaptic membrane.
5. The binding opens $\mathrm{Na}^+$ channels; $\mathrm{Na}^+$ diffuses into the post-synaptic
   neuron, causing depolarisation (EPSP).
6. If threshold is reached (by summation), a new action potential is generated in the post-synaptic
   neuron.
7. Acetylcholinesterase on the post-synaptic membrane breaks down acetylcholine into choline and
   acetate, preventing continuous stimulation.

**Unidirectional transmission:** Only the pre-synaptic terminal has synaptic vesicles (to release
neurotransmitter), only the post-synaptic membrane has specific receptors (to detect it), and
$\mathrm{Ca}^{2+}$ channels are only on the pre-synaptic side. Therefore, impulses can only travel
from pre-synaptic to post-synaptic.

</details>

**Problem 3:** A person's left pupil constricts when light is shone into the right eye, but not when
light is shone into the left eye. Explain the normal pathway for the pupillary reflex and identify
where the damage is likely to be.

If you get this wrong, revise: Reflex Arcs -- The Pupillary Light Reflex

<details>
<summary>Solution</summary>

**Normal pathway (consensual reflex):** Light is detected by photoreceptors in the retina. Impulses
travel along the optic nerve to the brain, where they reach the optic chiasm. Some fibres cross to
the opposite side, while others stay on the same side. Both sets of fibres reach the
Edinger-Westphal nuclei (one in each midbrain). From each nucleus, impulses travel along the
oculomotor nerve (cranial nerve III) to the circular muscles of the iris in BOTH eyes, causing
constriction.

**Diagnosis:** The consensual reflex works (right eye stimulated causes left pupil to constrict),
meaning the pathway from the right retina to the left Edinger-Westphal nucleus and from there to the
left iris is intact. However, the direct reflex in the left eye fails (left eye stimulated does not
cause left pupil to constrict). This indicates the damage is in the **afferent (sensory) pathway of
the left eye** -- either the left optic nerve or the left retina is damaged. If the efferent pathway
(left oculomotor nerve) were damaged, neither the direct nor the consensual reflex would work for
the left eye.

</details>

---

:::tip Tip Ready to test your understanding of **Nervous System**? Review the
[Human Physiology diagnostic test](/docs/dse/biology/diagnostics/diag-human-physiology) which covers
nervous system topics within the DSE specification.

See [Diagnostic Guide](/docs/dse/biology/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix.

:::

---

## Drugs and the Nervous System

### Alcohol (ethanol):\*\*

- Crosses the blood-brain barrier and affects multiple neurotransmitter systems:
- Enhances GABA activity (inhibitory neurotransmitter): slows brain function, reduces anxiety,
  impairs coordination
- Inhibits glutamate (excitatory neurotransmitter): further depresses brain activity
- Increases dopamine release in the reward pathway: contributes to addictive potential
- Short-term effects: impaired judgement, reduced coordination, slurred speech, slowed reaction time
- Long-term effects: liver damage (cirrhosis), brain damage, cardiovascular disease, addiction
- Tolerance develops with repeated use: the brain adapts by reducing the number of GABA receptors
  and increasing glutamate receptors, requiring more alcohol for the same effect

### Caffeine:

- Binds to adenosine receptors (without activating them), blocking the inhibitory effect of
  adenosine
- Adenosine normally promotes sleep and suppresses arousal; blocking it increases alertness
- Increases dopamine release, contributing to mild addictive potential
- Short-term effects: increased alertness, reduced fatigue, increased heart rate
- Long-term effects: tolerance (more receptors produced), withdrawal symptoms (headache, fatigue)
  when intake stops

---

## Neurological Disorders

### Stroke

A stroke occurs when blood flow to part of the brain is disrupted, causing brain cells to die from
oxygen and glucose deprivation.

| Type                | Cause                                                                 | Proportion |
| ------------------- | --------------------------------------------------------------------- | ---------- |
| Ischaemic stroke    | Blockage of a brain artery by a blood clot or thrombus                | ~85%       |
| Haemorrhagic stroke | Rupture of a blood vessel in the brain, causing bleeding and pressure | ~15%       |

**Risk factors:** High blood pressure, smoking, diabetes, high cholesterol, obesity, age, family
history.

**Symptoms:** Sudden weakness or numbness on one side of the body, slurred speech, confusion, visual
disturbances, severe headache, difficulty walking.

### Parkinson's Disease

- Degenerative disorder of the central nervous system
- Caused by the death of dopamine-producing neurons in the substantia nigra (part of the basal
  ganglia in the midbrain)
- Dopamine is essential for initiating and coordinating voluntary movement
- Symptoms: tremor (especially at rest), rigidity, slow movement (bradykinesia), poor balance,
  difficulty initiating movement
- Treatment: L-DOPA (a dopamine precursor that can cross the blood-brain barrier and is converted to
  dopamine in the brain); dopamine agonists; deep brain stimulation

### Alzheimer's Disease

- Progressive degenerative brain disease and the most common cause of dementia
- Characterised by the accumulation of amyloid plaques (protein deposits between neurons) and
  neurofibrillary tangles (abnormally phosphorylated tau protein inside neurons)
- Neurons in the cerebral cortex (especially the hippocampus, involved in memory) progressively die
- Symptoms: progressive memory loss, confusion, difficulty with language, personality changes, loss
  of independence
- No cure; treatment focuses on managing symptoms and slowing progression

### Multiple Sclerosis (MS)

- Autoimmune disease in which the immune system attacks the myelin sheath of neurons in the CNS
- Destruction of myelin disrupts the transmission of nerve impulses (slows or blocks conduction)
- Symptoms: vision problems, muscle weakness, spasms, fatigue, coordination difficulties, numbness
- More common in women than men; diagnosed between ages 20-40
- Treatment: immunosuppressants, corticosteroids (during relapses), disease-modifying therapies

---

## Memory and Learning

### Types of Memory

| Type                    | Description                                                                     | Duration           | Capacity                |
| ----------------------- | ------------------------------------------------------------------------------- | ------------------ | ----------------------- |
| Sensory memory          | Brief storage of sensory information (visual, auditory, tactile)                | Less than 1 second | Very large              |
| Short-term memory (STM) | Temporary storage of information currently being processed; holds 7$\pm$2 items | 15-30 seconds      | Limited (7$\pm$2 items) |
| Long-term memory (LTM)  | Permanent storage of information; potentially unlimited capacity                | Days to lifetime   | Potentially unlimited   |

### Short-Term Memory

- Information is held as electrical impulses circulating in neural circuits (reverberating circuits)
- Capacity is limited to approximately 7$\pm$2 items (Miller's Law)
- Can be increased by **chunking** -- grouping individual items into meaningful units (e.g.,
  remembering a phone number as 3 chunks rather than 10 digits)
- Duration can be extended by **rehearsal** -- actively repeating the information
- Information is displaced by new incoming information (proactive and retroactive interference)

### Long-Term Memory

Long-term memory is subdivided into:

| Type                           | Description                                                                                                       | Example                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Explicit (declarative)**     | Conscious recall of facts and events                                                                              |                                                                |
| -- Episodic memory             | Memory of specific personal experiences and events                                                                | Remembering your 18th birthday                                 |
| -- Semantic memory             | Memory of general knowledge, facts, concepts                                                                      | Knowing that Paris is the capital of France                    |
| **Implicit (non-declarative)** | Unconscious memory; skills and procedures that are performed automatically                                        |                                                                |
| -- Procedural memory           | Memory of motor skills and how to perform tasks                                                                   | Riding a bicycle, typing on a keyboard                         |
| -- Priming                     | Exposure to one stimulus influences response to a subsequent stimulus                                             | Seeing the word "doctor" makes you faster to recognise "nurse" |
| -- Classical conditioning      | Associative learning; pairing a neutral stimulus with an unconditioned stimulus to produce a conditioned response | Pavlov's dogs salivating at a bell                             |

### Memory Consolidation and the Role of Sleep

- **Consolidation** is the process by which short-term memories are converted into long-term
  memories
- Occurs primarily during **slow-wave sleep (deep sleep, stages 3-4 of NREM sleep)** and **REM
  sleep**
- The hippocampus plays a central role in memory consolidation -- it acts as a temporary storage
  site and gradually transfers memories to the cerebral cortex for long-term storage
- During sleep, neural circuits activated during learning are **replayed** (reactivated),
  strengthening the synaptic connections (long-term potentiation)
- Sleep deprivation significantly impairs consolidation and learning

### Long-Term Potentiation (LTP)

LTP is the cellular basis of learning and memory:

1. A presynaptic neuron repeatedly and persistently stimulates a postsynaptic neuron
2. This causes the release of glutamate (excitatory neurotransmitter), which binds to NMDA and AMPA
   receptors on the postsynaptic membrane
3. With repeated stimulation, sufficient glutamate is released to activate NMDA receptors (which are
   normally blocked by a magnesium ion)
4. Calcium ions flow into the postsynaptic neuron through the NMDA receptor channels
5. Calcium triggers a signalling cascade that:

- Causes more AMPA receptors to be inserted into the postsynaptic membrane (increasing sensitivity
  to glutamate)
- Activates gene transcription in the postsynaptic neuron (synthesis of new proteins)
- Strengthens the synaptic connection between the two neurons

6. The strengthened connection means that future stimulation of the presynaptic neuron produces a
   larger response in the postsynaptic neuron

### Brain Imaging Techniques

| Technique | Full Name                    | Principle                                                                                                                                | Uses                                                                                        | Resolution                              |
| --------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------- |
| CT scan   | Computed Tomography          | X-rays are passed through the brain from multiple angles; computer constructs a 3D image from the X-ray data                             | Detecting tumours, haemorrhages, skull fractures; quick and widely available                | Moderate                                |
| MRI       | Magnetic Resonance Imaging   | Strong magnetic field aligns hydrogen nuclei in water molecules; radio waves perturb them; emitted signals form an image                 | Detailed structural images of the brain; detecting tumours, lesions, atrophy                | High                                    |
| fMRI      | Functional MRI               | Measures changes in blood oxygenation (BOLD signal) as a proxy for neural activity; active brain areas receive more blood flow           | Identifying which brain regions are active during specific tasks or cognitive processes     | Moderate-high                           |
| PET scan  | Positron Emission Tomography | Patient injected with radioactive glucose; scanner detects positrons emitted by decaying radioisotope; active areas consume more glucose | Mapping brain activity; studying brain function in disease (e.g., Alzheimer's, Parkinson's) | Moderate                                |
| EEG       | Electroencephalography       | Electrodes placed on the scalp detect electrical activity (brain waves) produced by neurons                                              | Diagnosing epilepsy; studying sleep stages; monitoring anaesthesia depth                    | Low temporal resolution (high temporal) |

---

## Synaptic Plasticity

### Synaptic Pruning

- During early brain development, the brain produces an excess of neurons and synaptic connections
- Synaptic pruning is the process by which unused or weak synaptic connections are eliminated, while
  frequently used connections are strengthened
- "Use it or lose it" -- synaptic connections that are rarely activated are removed
- Pruning is guided by experience and neural activity, making the brain more efficient
- Critical periods exist for certain types of learning (e.g., language development, visual
  processing); if the appropriate input is not received during the critical period, the relevant
  neural circuits may not develop properly

### Neurotransmitters Summary Table

| Neurotransmitter               | Type                | Function                                                                                                    | Disorders Associated with Imbalance                                                           |
| ------------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Acetylcholine (ACh)            | Excitatory (mainly) | Muscle contraction at neuromuscular junctions; role in memory, attention, and arousal in the CNS            | Alzheimer's disease (deficiency); myasthenia gravis (receptor destruction)                    |
| Dopamine                       | Both                | Reward and pleasure; voluntary movement control; motivation; emotional response                             | Parkinson's disease (deficiency); schizophrenia (excess in certain pathways)                  |
| Serotonin (5-HT)               | Both                | Mood regulation; sleep; appetite; pain perception; body temperature regulation                              | Depression (deficiency); anxiety disorders                                                    |
| GABA                           | Inhibitory          | Principal inhibitory neurotransmitter in the brain; reduces neuronal excitability; prevents over-excitation | Epilepsy (reduced GABA activity); anxiety (reduced GABA)                                      |
| Glutamate                      | Excitatory          | Principal excitatory neurotransmitter in the brain; essential for learning and memory (LTP)                 | Excitotoxicity (excess glutamate causes neuronal death, implicated in stroke and Alzheimer's) |
| Noradrenaline (norepinephrine) | Both                | Alertness; attention; fight-or-flight response; regulates heart rate and blood pressure                     | Depression (deficiency); ADHD; anxiety disorders                                              |
| Endorphins                     | Inhibitory          | Pain relief; euphoria; stress reduction; released during exercise, injury, and excitement                   | Endorphin deficiency linked to chronic pain and depression                                    |

### Common Pitfalls

- Students often confuse agonists and antagonists: **agonists** mimic or enhance the effect of a
  neurotransmitter; **antagonists** block its effect
- Curare is an antagonist at acetylcholine receptors at the neuromuscular junction -- it causes
  paralysis by preventing ACh from binding, but it does NOT affect ACh release
- Parkinson's disease involves **dopamine deficiency** (not excess); schizophrenia involves
  **dopamine excess** (not deficiency)
- GABA is the main inhibitory neurotransmitter, NOT the main excitatory one (that is glutamate)
- Synaptic transmission is always in one direction: presynaptic $\rightarrow$ postsynaptic (because
  only the presynaptic terminal has synaptic vesicles containing neurotransmitter)

## Summary

experimental evidence, and real-world applications.

> > > > > > > Stashed changes:docs/docs_dse/Biology/nervous-system.md

**Key concepts include:**


- key biological principles and concepts
- experimental methods and data analysis
- applications of biology in medicine and industry
- ethical considerations in biological research
- the relationship between structure and function

Success requires the ability to recall specific factual content, apply knowledge to novel scenarios,
and evaluate experimental evidence critically.

> > > > > > > Stashed changes:docs/docs_dse/Biology/nervous-system.md
