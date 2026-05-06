---
title: Nervous System
description: "IB Biology — neuron structure and function, resting potential, action potential propagation, myelination, synapses, neurotransmitters, reflex arcs, sensory systems, muscle contraction, brain regions, autonomic nervous system, and endocrine integration."
slug: nervous-system
---

## 1. Neuron Structure and Function

### Types of Neurons

| Type                  | Structure                                                    | Function                                           |
| --------------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| **Sensory (afferent)** | Long dendrites, short axon; cell body in dorsal root ganglion | Transmit impulses from receptors to the CNS.       |
| **Relay (interneuron)**| Short dendrites, short or no axon; within CNS                | Process information; connect sensory and motor neurons. |
| **Motor (efferent)**  | Short dendrites, long axon; cell body in CNS                | Transmit impulses from CNS to effectors (muscles, glands). |

### Anatomy of a Neuron

- **Cell body (soma)**: contains the nucleus, mitochondria, rough ER (Nissl bodies), and other
  organelles. The metabolic centre of the neuron.
- **Dendrites**: branched, highly branched projections extending from the cell body. Receive signals
  (graded potentials) from other neurons via synapses. High surface area increases connectivity.
- **Axon hillock**: the junction between the cell body and the axon. The integration zone where
  graded potentials are summed. If the depolarisation reaches threshold, an action potential is
  initiated here.
- **Axon**: a long, thin cytoplasmic extension that transmits action potentials away from the cell
  body. Diameter ranges from $1$ to $25\;\mathrm{\mu m}$; length from micrometres to over a metre
  (e.g., sciatic nerve axons).
- **Myelin sheath**: a lipid-rich insulating layer surrounding the axon. Formed by **Schwann cells**
  in the peripheral nervous system (PNS) and **oligodendrocytes** in the central nervous system
  (CNS). Myelin increases conduction velocity and reduces energy expenditure.
- **Nodes of Ranvier**: gaps ($\approx 1$--$3\;\mathrm{\mu m}$) in the myelin sheath where the axon
  membrane is exposed. Voltage-gated $\mathrm{Na}^+$ channels are concentrated here. Action
  potentials "jump" between nodes (**saltatory conduction**).
- **Axon terminals (synaptic knobs/boutons)**: bulbous endings of the axon branches that contain
  **synaptic vesicles** filled with neurotransmitter. Release neurotransmitter into the synaptic
  cleft upon arrival of an action potential.

### Schwann Cells vs Oligodendrocytes

| Feature              | Schwann Cells (PNS)                              | Oligodendrocytes (CNS)                          |
| -------------------- | ------------------------------------------------ | ------------------------------------------------ |
| Myelination          | One Schwann cell myelinates one segment of one axon. | One oligodendrocyte myelinates multiple segments on multiple axons. |
| Regeneration         | Can guide axon regeneration after injury.         | Limited regenerative capacity in the CNS.        |
| Associated disorders | Guillain-Barre syndrome (autoimmune demyelination). | Multiple sclerosis (autoimmune demyelination).    |

### Glial Cells (Neuroglia)

Non-neuronal cells that support, nourish, and protect neurons:

| Cell type          | Location | Function                                                                                   |
| ------------------ | -------- | ------------------------------------------------------------------------------------------ |
| **Astrocytes**     | CNS      | Regulate extracellular ion concentrations; form the blood-brain barrier; provide metabolic support. |
| **Microglia**      | CNS      | Phagocytic immune cells; remove debris and dead neurons.                                    |
| **Ependymal cells**| CNS      | Line the ventricles of the brain and central canal of the spinal cord; produce cerebrospinal fluid (CSF). |
| **Schwann cells**  | PNS      | Myelinate axons; aid regeneration.                                                          |
| **Satellite cells**| PNS      | Surround cell bodies in ganglia; provide nutrients and regulate the extracellular environment. |

---

## 2. Resting Membrane Potential

### Ionic Basis

The **resting membrane potential** is approximately $-70\;\mathrm{mV}$ (inside negative relative to
outside). This potential is established and maintained by ion concentration gradients and selective
permeability of the membrane.

**Typical ion concentrations** (intracellular vs extracellular):

| Ion                        | Intracellular ($\mathrm{mmol/L}$) | Extracellular ($\mathrm{mmol/L}$) | Equilibrium potential ($\mathrm{mV}$) |
| -------------------------- | -------------------------------- | --------------------------------- | ------------------------------------- |
| $\mathrm{Na}^+$           | $15$                             | $145$                             | $\approx +60$                         |
| $\mathrm{K}^+$            | $150$                            | $5$                               | $\approx -90$                         |
| $\mathrm{Cl}^-$           | $10$                             | $110$                             | $\approx -70$                         |
| Impermeable anions (proteins, organic phosphates) | High | Low | --- |

### The Nernst Equation

The equilibrium potential for a single ion is calculated using the Nernst equation:

$$E_{\mathrm{ion}} = \frac{RT}{zF} \ln \frac{[\mathrm{ion}]_{\mathrm{out}}}{[\mathrm{ion}]_{\mathrm{in}}}$$

At body temperature ($37^\circ\mathrm{C} = 310\;\mathrm{K}$), this simplifies to:

$$E_{\mathrm{ion}} = \frac{61.5}{z} \log_{10} \frac{[\mathrm{ion}]_{\mathrm{out}}}{[\mathrm{ion}]_{\mathrm{in}}}$$

where $R$ is the gas constant, $T$ is temperature, $z$ is the ion's valence, and $F$ is Faraday's
constant.

### Mechanism of the Resting Potential

1. **$\mathrm{Na}^+/\mathrm{K}^+$ ATPase pump**: actively transports $3\;\mathrm{Na}^+$ out and
   $2\;\mathrm{K}^+$ in per ATP hydrolysed. This creates and maintains the concentration gradients
   ($\mathrm{Na}^+$ higher outside, $\mathrm{K}^+$ higher inside). The pump is **electrogenic**
   (net export of $1$ positive charge per cycle), contributing approximately $-4\;\mathrm{mV}$ to the
   resting potential.

2. **Selective membrane permeability at rest**: the membrane is approximately $50$--$100$ times more
   permeable to $\mathrm{K}^+$ than to $\mathrm{Na}^+$ due to open **leak (resting) $\mathrm{K}^+$
   channels**.

3. **$\mathrm{K}^+$ diffusion**: $\mathrm{K}^+$ diffuses out of the cell down its concentration
   gradient through leak channels. Each $\mathrm{K}^+$ that leaves carries a positive charge,
   making the interior progressively more negative.

4. **Equilibrium**: the outward diffusion of $\mathrm{K}^+$ is opposed by the electrical gradient
   (the negative interior attracts $\mathrm{K}^+$ back). The resting potential (approximately
   $-70\;\mathrm{mV}$) is close to (but more positive than) the $\mathrm{K}^+$ equilibrium
   potential ($-90\;\mathrm{mV}$) because the membrane has a small residual permeability to
   $\mathrm{Na}^+$, which pulls the potential toward the $\mathrm{Na}^+$ equilibrium potential.

---

## 3. Action Potential

### Phases of the Action Potential

An action potential is a rapid, transient reversal of the membrane potential, approximately
$+40\;\mathrm{mV}$ at its peak.

| Phase                 | Membrane potential             | Ion channels and movements                                                                            |
| --------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------- |
| **Resting**           | $\approx -70\;\mathrm{mV}$   | $\mathrm{Na}^+$ and $\mathrm{K}^+$ voltage-gated channels are closed; leak $\mathrm{K}^+$ channels are open. |
| **Threshold**         | $\approx -55\;\mathrm{mV}$   | If depolarisation reaches this level, voltage-gated $\mathrm{Na}^+$ channels open rapidly.             |
| **Depolarisation**    | $-55$ to $+40\;\mathrm{mV}$  | Voltage-gated $\mathrm{Na}^+$ channels open; $\mathrm{Na}^+$ rushes in (down both concentration and electrical gradients). |
| **Peak**              | $\approx +40\;\mathrm{mV}$   | $\mathrm{Na}^+$ channels become inactivated (ball-and-chain mechanism); voltage-gated $\mathrm{K}^+$ channels open. |
| **Repolarisation**    | $+40$ to $-70\;\mathrm{mV}$  | $\mathrm{Na}^+$ channels are inactivated; $\mathrm{K}^+$ channels remain open; $\mathrm{K}^+$ rushes out. |
| **Hyperpolarisation** | $-70$ to $-80\;\mathrm{mV}$  | $\mathrm{K}^+$ channels close slowly; excess $\mathrm{K}^+$ efflux makes the inside temporarily more negative than resting. |
| **Restoration**       | Returns to $-70\;\mathrm{mV}$| $\mathrm{K}^+$ channels close; $\mathrm{Na}^+/\mathrm{K}^+$ pump restores original ion concentrations. |

### Refractory Periods

- **Absolute refractory period**: during depolarisation and most of repolarisation, a second action
  potential cannot be generated regardless of stimulus strength. This is because voltage-gated
  $\mathrm{Na}^+$ channels are inactivated and cannot reopen.
- **Relative refractory period**: during hyperpolarisation, a stronger-than-normal stimulus can
  generate an action potential (some $\mathrm{Na}^+$ channels have recovered, but the membrane is
  hyperpolarised, requiring greater depolarisation to reach threshold).

**Functional significance**: the refractory period ensures **unidirectional propagation** of the
action potential along the axon and limits the maximum firing frequency.

### All-or-Nothing Principle

An action potential either occurs fully (if threshold is reached) or does not occur at all. The
amplitude of the action potential is constant (approximately $110\;\mathrm{mV}$ total change) and
does not depend on stimulus strength. Stimulus intensity is encoded by the **frequency** of action
potentials, not their amplitude.

---

## 4. Action Potential Propagation

### Continuous Conduction (Unmyelinated Axons)

In unmyelinated axons, the action potential propagates as a wave of depolarisation along the entire
axolemma. Adjacent regions of the membrane are depolarised to threshold by local current flow from
the active region (current spreads through the axoplasm and extracellular fluid).

$$v \propto \sqrt{d}$$

where $d$ is the axon diameter. Conduction velocity in unmyelinated axons ranges from $0.5$ to
$2\;\mathrm{m/s}$.

### Saltatory Conduction (Myelinated Axons)

In myelinated axons, the action potential "jumps" between nodes of Ranvier:

1. At a node of Ranvier, voltage-gated $\mathrm{Na}^+$ channels are concentrated, and an action
   potential is generated.
2. Local currents from this node depolarise the next node to threshold ($1$--$3\;\mathrm{mm}$
   away).
3. The myelin between nodes is an excellent insulator (high membrane resistance, low capacitance),
   preventing current leakage and allowing rapid, efficient depolarisation of the next node.
4. The action potential appears to "leap" from node to node.

**Advantages of saltatory conduction:**

- **Speed**: $15$--$120\;\mathrm{m/s}$ in myelinated axons vs $0.5$--$2\;\mathrm{m/s}$ in
  unmyelinated axons of the same diameter.
- **Energy efficiency**: only the nodes of Ranvier require active ion pumping, reducing ATP
  consumption by the $\mathrm{Na}^+/\mathrm{K}^+$ pump.
- **Fidelity**: the insulating myelin reduces signal degradation over long distances.

### Factors Affecting Conduction Velocity

| Factor                   | Effect                                                              |
| ------------------------ | ------------------------------------------------------------------- |
| **Axon diameter**        | Larger diameter = faster conduction (less resistance to current flow). |
| **Myelination**          | Myelinated axons conduct much faster (saltatory conduction).         |
| **Temperature**          | Higher temperature = faster conduction (ion channel kinetics are temperature-dependent). Hypothermia slows conduction. |

---

## 5. Synapses

### Structure of a Chemical Synapse

1. **Presynaptic membrane**: the axon terminal membrane containing voltage-gated $\mathrm{Ca}^{2+}$
   channels and the active zones where synaptic vesicles dock and fuse.
2. **Synaptic cleft**: the $20$--$30\;\mathrm{nm}$ gap between the pre- and postsynaptic
   membranes, filled with extracellular fluid.
3. **Postsynaptic membrane**: contains **receptors** (ligand-gated ion channels or G-protein coupled
   receptors) specific to the neurotransmitter released.

### Steps of Synaptic Transmission

1. An **action potential** arrives at the presynaptic terminal.
2. Depolarisation opens **voltage-gated $\mathrm{Ca}^{2+}$ channels**; $\mathrm{Ca}^{2+}$ ions flow
   into the terminal down their electrochemical gradient.
3. Increased intracellular $\mathrm{Ca}^{2+}$ triggers **exocytosis** of synaptic vesicles:
   $\mathrm{Ca}^{2+}$ binds to **synaptotagmin** on the vesicle membrane, promoting SNARE-protein
   mediated fusion of the vesicle with the presynaptic membrane.
4. **Neurotransmitter** molecules are released into the synaptic cleft by exocytosis.
5. Neurotransmitter diffuses across the synaptic cleft ($\approx 0.5\;\mathrm{ms}$) and binds to
   specific **receptors** on the postsynaptic membrane.
6. Receptor activation opens **ligand-gated ion channels**, causing ion flow across the postsynaptic
   membrane:
   - **Excitatory postsynaptic potential (EPSP)**: $\mathrm{Na}^+$ (and sometimes $\mathrm{Ca}^{2+}$)
     influx depolarises the membrane (e.g., ACh at neuromuscular junctions, glutamate in the CNS).
   - **Inhibitory postsynaptic potential (IPSP)**: $\mathrm{Cl}^-$ influx and/or $\mathrm{K}^+$
     efflux hyperpolarises the membrane (e.g., GABA, glycine in the CNS).
7. The neurotransmitter is rapidly removed from the synaptic cleft by:
   - **Enzymatic degradation**: e.g., acetylcholinesterase (AChE) hydrolyses acetylcholine into
     acetate and choline.
   - **Reuptake**: neurotransmitter transporters on the presynaptic membrane actively transport the
     neurotransmitter back into the terminal (e.g., serotonin, dopamine, noradrenaline reuptake).
   - **Diffusion**: neurotransmitter diffuses away from the synaptic cleft.

### Spatial and Temporal Summation

A single EPSP is typically insufficient to reach threshold at the axon hillock. Multiple EPSPs must be
summed:

- **Temporal summation**: multiple EPSPs from the **same** presynaptic neuron arrive in rapid
  succession before the previous one decays, building up depolarisation.
- **Spatial summation**: EPSPs from **multiple** presynaptic neurons arrive simultaneously at different
  synapses on the same postsynaptic cell, their effects adding together.

The net effect at the axon hillock determines whether threshold is reached and an action potential is
fired.

---

## 6. Neurotransmitters

### Classification

| Neurotransmitter      | Type            | Receptors                                    | Effect                                            | Key locations                                          |
| -------------------- | --------------- | -------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| **Acetylcholine (ACh)** | Small molecule   | Nicotinic (ionotropic), muscarinic (metabotropic) | Excitatory at NMJ; can be excitatory or inhibitory in CNS | Neuromuscular junctions; autonomic ganglia; CNS       |
| **Glutamate**        | Amino acid       | AMPA, NMDA, kainate receptors (ionotropic); mGluR (metabotropic) | Major excitatory neurotransmitter in CNS          | Throughout CNS (most abundant)                         |
| **GABA**             | Amino acid       | $\mathrm{GABA_A}$ (ionotropic), $\mathrm{GABA_B}$ (metabotropic) | Major inhibitory neurotransmitter in CNS          | Throughout CNS                                         |
| **Glycine**          | Amino acid       | Glycine receptor (ionotropic, $\mathrm{Cl}^-$ channel) | Inhibitory; primarily in spinal cord and brainstem | Spinal cord, brainstem                                 |
| **Dopamine**         | Amine (catecholamine) | $\mathrm{D_1}$--$\mathrm{D_5}$ receptors (metabotropic) | Motor control, reward, motivation; can be excitatory or inhibitory depending on receptor | Substantia nigra, ventral tegmental area, basal ganglia |
| **Noradrenaline (norepinephrine)** | Amine (catecholamine) | $\alpha$ and $\beta$ adrenergic receptors | Arousal, attention, fight-or-flight; sympathetic NS | Locus coeruleus; sympathetic postganglionic neurons   |
| **Serotonin (5-HT)**  | Amine (indolamine) | $5\text{-HT}_1$--$5\text{-HT}_7$ receptors | Mood, sleep, appetite, pain perception           | Raphe nuclei (brainstem); gastrointestinal tract      |

### Acetylcholine in Detail

Acetylcholine (ACh) is the neurotransmitter at:

- **Neuromuscular junctions** (NMJ): motor neurons to skeletal muscle fibres (nicotinic receptors,
  always excitatory).
- **Autonomic ganglia**: both sympathetic and parasympathetic preganglionic neurons (nicotinic
  receptors).
- **Parasympathetic postganglionic synapses**: to target organs (muscarinic receptors).
- **Synapses in the CNS**: involved in learning, memory, and arousal.

**Synthesis**: choline + acetyl-CoA $\xrightarrow{\text{choline acetyltransferase}}$ ACh

**Degradation**: ACh $\xrightarrow{\text{acetylcholinesterase (AChE)}}$ choline + acetate

### Clinical Relevance of Neurotransmitters

| Condition                         | Neurotransmitter involved | Mechanism                                                       |
| --------------------------------- | ------------------------ | --------------------------------------------------------------- |
| **Alzheimer's disease**           | Acetylcholine             | Degeneration of cholinergic neurons in the basal forebrain; reduced ACh in hippocampus and cortex. |
| **Parkinson's disease**           | Dopamine                  | Loss of dopaminergic neurons in the substantia nigra; reduced dopamine in the basal ganglia. |
| **Depression**                    | Serotonin, noradrenaline | Monoamine hypothesis: deficiency of serotonin and/or noradrenaline at synapses. SSRIs block serotonin reuptake. |
| **Myasthenia gravis**             | Acetylcholine             | Autoantibodies destroy nicotinic ACh receptors at NMJ; muscle weakness and fatigue. |
| **Epilepsy**                      | GABA, glutamate          | Reduced GABAergic inhibition or excessive glutamatergic excitation. |
| **Schizophrenia**                 | Dopamine                  | Excess dopamine activity in mesolimbic pathway; $\mathrm{D_2}$ receptor antagonists are antipsychotics. |

---

## 7. Reflex Arcs

A **reflex arc** is the neural pathway controlling an involuntary, automatic response to a stimulus.
It does not require conscious brain involvement, allowing rapid protective responses.

### Components of a Reflex Arc

1. **Receptor**: detects the stimulus and generates a graded potential (e.g., pain receptors ---
   nociceptors --- in the skin).
2. **Sensory neuron**: transmits the action potential from the receptor to the spinal cord.
3. **Integration centre** (in the spinal cord): one or more synapses in the grey matter. The sensory
   neuron synapses directly (monosynaptic reflex) or via an interneuron (polysynaptic reflex) with a
   motor neuron.
4. **Motor neuron**: carries the action potential from the integration centre to the effector.
5. **Effector**: the muscle or gland that carries out the response (e.g., skeletal muscle contracts to
   withdraw a limb).

### The Stretch Reflex (Monosynaptic Reflex)

Example: the **knee-jerk reflex** (patellar reflex).

1. Tapping the patellar tendon stretches the **quadriceps muscle**.
2. **Muscle spindles** (stretch receptors embedded in the muscle) detect the stretch and generate
   action potentials in sensory neurons.
3. Sensory neurons enter the spinal cord and synapse **directly** (no interneuron) onto motor neurons
   in the ventral horn.
4. Motor neurons send action potentials to the quadriceps muscle, which **contracts** (extension of the
   lower leg).
5. Simultaneously, the sensory neuron activates an **inhibitory interneuron** that synapses onto motor
   neurons supplying the antagonistic **hamstring muscle**, causing it to **relax** (reciprocal
   inhibition).

### The Withdrawal Reflex (Polysynaptic Reflex)

Example: touching a hot object.

1. **Nociceptors** in the skin detect the painful stimulus.
2. Sensory neurons transmit the signal to the spinal cord.
3. An **excitatory interneuron** activates a motor neuron to the **flexor muscles** (withdrawal).
4. An **inhibitory interneuron** inhibits the motor neuron to the **extensor muscles** (reciprocal
   inhibition).
5. A **sensory neuron also transmits the signal to the brain** via ascending tracts, so the person
   becomes consciously aware of the pain (after the reflex has already occurred).

---

## 8. Sensory Systems

### Sensory Receptors

Receptors are specialised cells or nerve endings that convert stimuli (energy) into electrical signals
(graded potentials, then action potentials) --- a process called **transduction**.

| Receptor type        | Stimulus detected              | Example                                           |
| -------------------- | ------------------------------ | ------------------------------------------------- |
| **Mechanoreceptors** | Mechanical deformation (pressure, vibration, stretch) | Pacinian corpuscles (deep pressure); Meissner's corpuscles (light touch, vibration); hair cells in cochlea (sound). |
| **Thermoreceptors**  | Temperature changes            | Warm receptors; cold receptors.                    |
| **Nociceptors**      | Pain (tissue damage, extreme stimuli) | Free nerve endings in skin, muscles, organs.      |
| **Chemoreceptors**   | Chemical substances            | Taste buds; olfactory receptors; carotid bodies ($\mathrm{O}_2$, $\mathrm{CO}_2$, pH). |
| **Photoreceptors**   | Light                          | Rods (dim light, black-and-white); cones (colour vision, high acuity). |

### Sensory Pathways to the Brain

- **Somatic sensory pathway**: receptors $\to$ sensory neurons $\to$ dorsal root ganglion $\to$ spinal
  cord (dorsal horn) $\to$ ascending tracts (spinothalamic tract for pain/temperature; dorsal
  columns for fine touch/proprioception) $\to$ thalamus (relay) $\to$ primary somatosensory cortex
  (postcentral gyrus).
- The body is mapped somatotopically on the sensory cortex (the **sensory homunculus**), with regions
  proportional to the density of sensory receptors (e.g., hands and face have disproportionately
  large cortical representation).

### The Eye and Vision

**Structure of the eye:**

| Structure            | Function                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------ |
| **Cornea**           | Transparent outer layer; refracts light (provides approximately $2/3$ of total refraction). |
| **Iris**             | Regulates the size of the pupil (controls light entry).                                    |
| **Pupil**            | Adjustable opening; dilates in dim light (sympathetic) and constricts in bright light (parasympathetic). |
| **Lens**             | Adjustable focus (accommodation); ciliary muscles change lens shape for near/far vision.    |
| **Retina**           | Light-sensitive layer containing photoreceptors (rods and cones).                           |
| **Fovea**            | Area of highest visual acuity; densely packed with cones.                                  |
| **Optic nerve**      | Transmits action potentials from retinal ganglion cells to the brain.                      |

**Phototransduction:**

1. Photoreceptors contain the pigment **retinal** (derived from vitamin A) bound to an opsin protein
   (forming rhodopsin in rods; iodopsin in cones).
2. Light isomerises retinal from the **11-cis** form to the **all-trans** form.
3. This activates a G-protein cascade (transducin) that activates **phosphodiesterase (PDE)**.
4. PDE hydrolyses cGMP to GMP, causing cGMP-gated $\mathrm{Na}^+$ channels to close.
5. The photoreceptor **hyperpolarises** (becomes more negative), reducing glutamate release onto
   bipolar cells.
6. Bipolar cells transmit the signal to ganglion cells, whose axons form the optic nerve.

**Rods vs cones:**

| Feature       | Rods                                              | Cones                                                 |
| ------------- | ------------------------------------------------- | ----------------------------------------------------- |
| Sensitivity   | High (function in dim light)                      | Low (require bright light)                             |
| Colour vision | No (one type of rhodopsin)                        | Yes (three types: red, green, blue --- trichromatic)   |
| Acuity        | Low (convergence of many rods onto one bipolar cell) | High (one cone per bipolar cell in fovea)            |
| Distribution  | Concentrated in periphery of retina               | Concentrated in fovea                                  |

### The Ear and Hearing

**Structure:**

- **Outer ear**: pinna (collects sound) $\to$ ear canal $\to$ tympanic membrane (eardrum).
- **Middle ear**: three ossicles (malleus, incus, stapes) transmit vibrations from the tympanic
  membrane to the oval window of the cochlea. **Eustachian tube** equalises pressure.
- **Inner ear**: cochlea (coiled, fluid-filled tube) contains the **organ of Corti** with hair cells.

**Mechanism of hearing:**

1. Sound waves cause the tympanic membrane to vibrate.
2. Ossicles amplify the vibration ($\approx 20\times$) and transmit it to the oval window.
3. Vibrations create pressure waves in the perilymph fluid of the cochlea.
4. The **basilar membrane** vibrates: different frequencies cause maximum displacement at different
  positions along the membrane (high frequencies near the base, low frequencies near the apex ---
   **tonotopic organisation**).
5. **Hair cells** on the basilar membrane deflect as the membrane vibrates. Deflection opens
  mechanically-gated ion channels, causing depolarisation and neurotransmitter release onto sensory
  neurons of the auditory nerve.

---

## 9. Muscle Contraction: The Sliding Filament Theory

### Structure of Skeletal Muscle

- **Muscle** $\to$ **fascicle** (bundle of muscle fibres) $\to$ **muscle fibre** (single muscle
  cell) $\to$ **myofibril** $\to$ **sarcomere** (functional unit).
- Each muscle fibre (cell) is multinucleated, containing thousands of myofibrils.
- **Myofibrils** are composed of two types of myofilaments:
  - **Thick filaments**: composed of **myosin** protein. Each myosin molecule has a globular head
    that can bind to actin and hydrolyse ATP.
  - **Thin filaments**: composed of **actin** (with binding sites for myosin), **tropomyosin**
    (blocks myosin-binding sites at rest), and **troponin** (binds $\mathrm{Ca}^{2+}$, moving
    tropomyosin away from the binding sites).
- **Sarcomere**: the repeating unit between two Z lines. Striations:
  - **A band**: full length of thick filaments (contains overlapping thick and thin filaments).
  - **I band**: thin filaments only (no thick filaments); narrows during contraction.
  - **H zone**: central region of A band with thick filaments only; narrows during contraction.
  - **Z disc (Z line)**: anchors thin filaments; defines sarcomere boundaries.

### The Sliding Filament Mechanism

During contraction, thin filaments slide past thick filaments, pulling the Z discs toward the centre
of the sarcomere. The filaments themselves do not change length.

**Steps of the cross-bridge cycle:**

1. **$\mathrm{Ca}^{2+}$ release**: the action potential travels along the sarcolemma and into the
   T-tubules, triggering $\mathrm{Ca}^{2+}$ release from the **sarcoplasmic reticulum** (SR).
2. **$\mathrm{Ca}^{2+}$ binding to troponin**: $\mathrm{Ca}^{2+}$ binds to troponin, causing a
   conformational change that shifts tropomyosin away from the myosin-binding sites on actin.
3. **Cross-bridge formation**: the myosin head (energised with ADP and $\mathrm{P_i}$) binds to the
   exposed binding site on actin, forming a **cross-bridge**.
4. **Power stroke**: the myosin head pivots, pulling the thin filament toward the centre of the
   sarcomere. ADP and $\mathrm{P_i}$ are released.
5. **ATP binding**: a new ATP molecule binds to the myosin head, causing it to detach from actin.
6. **ATP hydrolysis**: ATP is hydrolysed to ADP and $\mathrm{P_i}$, re-energising the myosin head
   and repositioning it for another cycle.

### Neuromuscular Junction (NMJ)

The synapse between a motor neuron and a skeletal muscle fibre:

1. Action potential arrives at the motor neuron terminal.
2. Voltage-gated $\mathrm{Ca}^{2+}$ channels open; $\mathrm{Ca}^{2+}$ influx triggers ACh release.
3. ACh diffuses across the synaptic cleft and binds to **nicotinic ACh receptors** on the motor end
   plate (postsynaptic membrane of the muscle fibre).
4. Ligand-gated $\mathrm{Na}^+$ channels open; $\mathrm{Na}^+$ influx depolarises the motor end
   plate, generating an **end-plate potential (EPP)**.
5. The EPP depolarises the adjacent sarcolemma to threshold, triggering an action potential that
   propagates along the muscle fibre and into the T-tubules.
6. ACh is rapidly hydrolysed by **acetylcholinesterase**, preventing sustained contraction.

### Motor Unit and Twitch Summation

- **Motor unit**: one motor neuron and all the muscle fibres it innervates. Fine motor control (e.g.,
  eye muscles) requires small motor units ($1$--$10$ fibres per neuron); gross motor control (e.g.,
  leg muscles) uses large motor units ($1000$--$2000$ fibres per neuron).
- **Twitch**: a single action potential produces a single, brief contraction followed by relaxation.
- **Summation**: if a second stimulus arrives before the muscle has fully relaxed, the contractions
  add together (**wave summation**). At high stimulation frequency, individual twitches fuse into a
  sustained contraction (**tetanus**).
- **Tetanus**: sustained maximal contraction when the stimulus frequency is so high that the muscle
  cannot relax between stimuli. $\mathrm{Ca}^{2+}$ remains elevated in the sarcoplasm, and all
  cross-bridge cycling sites remain active.

---

## 10. Brain Regions and Functions

### Major Brain Regions

| Region                    | Key structures                                   | Primary functions                                                                                                   |
| ------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Cerebrum**              | Cerebral cortex (grey matter); basal ganglia; white matter tracts | Conscious thought, voluntary movement, sensory processing, language, memory, decision-making.                      |
| **Cerebellum**            | Two hemispheres, highly folded cortex            | Coordination of voluntary movement; balance; posture; motor learning; error correction during movement.             |
| **Diencephalon**          | Thalamus; hypothalamus; epithalamus (pineal gland) | Thalamus: sensory relay and filtering. Hypothalamus: homeostasis, thermoregulation, hunger/thirst, endocrine control (pituitary). Pineal: melatonin (circadian rhythm). |
| **Brainstem**             | Midbrain; pons; medulla oblongata                | Midbrain: reflexes (visual, auditory), dopamine pathways. Pons: relay between cerebrum and cerebellum, breathing regulation. Medulla: vital centres (cardiac, respiratory, vasomotor centres). |
| **Limbic system**         | Hippocampus; amygdala; hypothalamus; cingulate gyrus | Emotion, memory formation (hippocampus), fear processing (amygdala), motivation, olfaction.                         |

### Cerebral Cortex (Lobes)

| Lobe              | Location                 | Primary functions                                              |
| ----------------- | ------------------------ | -------------------------------------------------------------- |
| **Frontal**       | Anterior to central sulcus| Motor control (primary motor cortex, precentral gyrus); decision-making, planning, personality (prefrontal cortex); Broca's area (speech production, usually left hemisphere). |
| **Parietal**      | Posterior to central sulcus | Somatosensory processing (primary somatosensory cortex, postcentral gyrus); spatial awareness; proprioception. |
| **Temporal**      | Lateral, below lateral fissure | Auditory processing (primary auditory cortex); Wernicke's area (language comprehension, usually left hemisphere); memory (medial temporal lobe, hippocampus). |
| **Occipital**     | Posterior                | Visual processing (primary visual cortex); colour, motion, and form perception.                                           |

---

## 11. Autonomic Nervous System

The autonomic nervous system (ANS) regulates involuntary functions: heart rate, digestion, respiratory
rate, pupillary response, and glandular secretion.

### Sympathetic vs Parasympathetic Divisions

| Feature                  | Sympathetic ("fight or flight")                          | Parasympathetic ("rest and digest")                      |
| ------------------------ | ------------------------------------------------------- | -------------------------------------------------------- |
| **Origin**               | Thoracolumbar spinal cord ($\mathrm{T_1}$--$\mathrm{L_2/L_3}$) | Cranial nerves (III, VII, IX, X) and sacral spinal cord ($\mathrm{S_2}$--$\mathrm{S_4}$) |
| **Ganglia**              | Paravertebral chain (close to spinal cord)              | Terminal ganglia (close to or within target organ)       |
| **Preganglionic fibre**  | Short; myelinated                                       | Long; myelinated                                          |
| **Postganglionic fibre** | Long; unmyelinated                                      | Short; unmyelinated                                       |
| **Neurotransmitter**     | ACh (preganglionic); noradrenaline (postganglionic, mostly) | ACh at all synapses (nicotinic at ganglia, muscarinic at target organs) |
| **Effects**              | Pupil dilation; increased heart rate; bronchodilation; increased blood glucose; decreased digestive activity; vasodilation in skeletal muscle; vasoconstriction in skin and gut. | Pupil constriction; decreased heart rate; bronchoconstriction; increased digestive activity; salivation; urination. |

**Key principle**: most organs receive dual innervation. The sympathetic and parasympathetic systems
generally have **antagonistic** effects, allowing precise regulation (e.g., sympathetic increases heart
rate, parasympathetic decreases it).

**Exceptions**: most blood vessels, sweat glands, and the adrenal medulla receive **only sympathetic**
innervation. The adrenal medulla releases adrenaline (epinephrine) and noradrenaline
(norepinephrine) directly into the bloodstream (neurohormonal action).

---

## 12. Endocrine Integration

The nervous and endocrine systems interact extensively, particularly through the hypothalamus:

### Hypothalamus-Pituitary Axis

- The **hypothalamus** produces **releasing hormones** (e.g., GnRH, TRH, CRH, GHRH) and
  **inhibiting hormones** (e.g., somatostatin, dopamine) that regulate the anterior pituitary.
- The hypothalamus also synthesises **ADH** (vasopressin) and **oxytocin**, which are transported
  along axons and stored in the **posterior pituitary**.
- The **anterior pituitary** secretes trophic hormones (ACTH, TSH, FSH, LH) that stimulate peripheral
  endocrine glands, which release hormones that exert negative feedback on the hypothalamus and/or
  pituitary.

### Neuroendocrine Cells

Specialised neurons that release hormones (neurohormones) into the blood at neurohemal organs:

- **ADH** and **oxytocin**: synthesised in hypothalamic neurons, transported down axons to the
  posterior pituitary, released into the bloodstream upon action potential arrival.
- **Adrenaline**: chromaffin cells of the adrenal medulla are functionally modified postganglionic
  sympathetic neurons that release catecholamines into the blood.

### Adrenal Medulla

The adrenal medulla is essentially a sympathetic ganglion:

1. Preganglionic sympathetic neurons (cholinergic) synapse directly onto chromaffin cells.
2. Chromaffin cells release **adrenaline** ($\approx 80\%$) and **noradrenaline** ($\approx 20\%$) into
   the bloodstream.
3. These catecholamines amplify and prolong the sympathetic "fight or flight" response, affecting
   organs throughout the body (wider distribution than sympathetic nerve fibres alone).

---

## Common Pitfalls

- Confusing **resting potential** with **equilibrium potential**: the resting potential
  ($-70\;\mathrm{mV}$) is a steady-state potential maintained by the $\mathrm{Na}^+/\mathrm{K}^+$
  pump and selective membrane permeability; it is not the equilibrium potential for any single ion.
- Stating that "the action potential travels back toward the cell body": the refractory period
  prevents backward propagation, ensuring unidirectional transmission.
- Confusing **EPSPs/IPSPs** with action potentials: EPSPs and IPSPs are graded potentials (variable
  amplitude, decremental, can summate); action potentials are all-or-nothing, non-decremental
  impulses.
- Describing the myelin sheath as "conducting electricity": myelin is an **insulator**; the action
  potential is generated at the nodes of Ranvier, not in the myelinated internodes.
- Confusing **rods and cones**: rods are for dim light (no colour); cones are for bright light and
  colour vision (trichromatic).
- Misunderstanding the sliding filament theory: the filaments slide past each other; neither thick
  nor thin filaments shorten during contraction. The A band stays constant; the I band and H zone
  narrow.
- Confusing sympathetic and parasympathetic effects: use "fight or flight" vs "rest and digest" as
  memory aids. Remember: sympathetic = pupil dilates, heart rate up, digestion slows; parasympathetic
  = pupil constricts, heart rate down, digestion increases.

---

## Practice Problems

<details>
<summary>Question 1: Action Potential Propagation Velocity</summary>

A myelinated axon has nodes of Ranvier spaced $2.0\;\mathrm{mm}$ apart. The time for an action
potential to propagate between two adjacent nodes is $0.015\;\mathrm{ms}$. Calculate the conduction
velocity. An unmyelinated axon of the same diameter has a conduction velocity of $1.5\;\mathrm{m/s}$.
How many times faster is the myelinated axon? Explain the biophysical basis for this difference.

</details>

<details>
<summary>Answer</summary>

Conduction velocity: $v = \frac{d}{t} = \frac{2.0 \times 10^{-3}\;\mathrm{m}}{0.015 \times 10^{-3}\;\mathrm{s}} = 133\;\mathrm{m/s}$

Speed ratio: $\frac{133}{1.5} \approx 89$ times faster.

The myelinated axon is faster because: (1) myelin has very high membrane resistance (reducing
current leakage across the internode) and very low membrane capacitance (less charge storage), so
the local current generated at one node travels efficiently to the next node without decay. (2)
Action potentials are regenerated at each node of Ranvier, maintaining amplitude. In unmyelinated
axons, current leaks across the entire membrane, the signal decrements with distance, and the
capacitance of the membrane slows the depolarisation rate.

</details>

<details>
<summary>Question 2: Synaptic Transmission and Summation</summary>

A motor neuron receives inputs from three sensory neurons (A, B, and C). Each produces an EPSP of
$+5\;\mathrm{mV}$ at the axon hillock. The threshold for firing is $-55\;\mathrm{mV}$ and the
resting potential is $-70\;\mathrm{mV}$. (a) If all three fire simultaneously, does the motor
neuron fire an action potential? (b) If A and B fire simultaneously but C fires $2\;\mathrm{ms}$
later (the EPSP duration is $5\;\mathrm{ms}$), does the motor neuron fire? (c) If A fires alone,
the membrane depolarises to $-65\;\mathrm{mV}$. An inhibitory interneuron also fires, producing an
IPSP of $-10\;\mathrm{mV}$. What is the resulting membrane potential?

</details>

<details>
<summary>Answer</summary>

(a) Three simultaneous EPSPs: $3 \times 5 = +15\;\mathrm{mV}$. New potential:
$-70 + 15 = -55\;\mathrm{mV}$, which exactly equals threshold. The motor neuron fires an action
potential (at threshold, the probability of firing is approximately $50\%$; any additional input
would guarantee firing).

(b) Spatial summation of A + B: $+10\;\mathrm{mV}$, bringing the membrane to $-60\;\mathrm{mV}$.
C fires $2\;\mathrm{ms}$ later; since the EPSP duration is $5\;\mathrm{ms}$, the depolarisation from
A + B has not fully decayed. Temporal summation adds C's $+5\;\mathrm{mV}$ to the remaining
depolarisation. The membrane reaches approximately $-55\;\mathrm{mV}$ (threshold), and the motor
neuron fires.

(c) Resting: $-70\;\mathrm{mV}$. EPSP of A: $+5\;\mathrm{mV}$, bringing membrane to
$-65\;\mathrm{mV}$. IPSP: $-10\;\mathrm{mV}$, bringing membrane to $-65 - 10 = -75\;\mathrm{mV}$.
The membrane is hyperpolarised below resting potential; the motor neuron does not fire.

</details>

<details>
<summary>Question 3: Sliding Filament Theory and Sarcomere Length</summary>

A sarcomere at rest has a length of $2.5\;\mathrm{\mu m}$. The A band is $1.6\;\mathrm{\mu m}$ wide,
the I band is $0.9\;\mathrm{\mu m}$ wide, and the H zone is $0.5\;\mathrm{\mu m}$ wide. During
maximal contraction, the thin filaments overlap completely and the H zone disappears. Calculate
the sarcomere length and I band width during maximal contraction. Explain which bands change and
which remain constant.

</details>

<details>
<summary>Answer</summary>

During maximal contraction:
- The **A band** remains $1.6\;\mathrm{\mu m}$ (thick filament length does not change).
- The **H zone** disappears ($0\;\mathrm{\mu m}$) because thin filaments slide past each other and
  fully overlap the central region of the thick filaments.
- The sarcomere length = A band width = $1.6\;\mathrm{\mu m}$ (the Z discs are pulled inward until
  the thin filaments from opposite ends meet at the centre of the A band).
- The **I band** disappears ($0\;\mathrm{\mu m}$) because the thin filaments are now entirely within
  the A band.

**Summary of changes**: I band narrows from $0.9$ to $0\;\mathrm{\mu m}$; H zone narrows from
$0.5$ to $0\;\mathrm{\mu m}$; sarcomere shortens from $2.5$ to $1.6\;\mathrm{\mu m}$; A band
remains constant at $1.6\;\mathrm{\mu m}$. Note: in practice, maximal contraction may not
eliminate the I band entirely due to structural constraints.

</details>

<details>
<summary>Question 4: Nernst Equation Calculation</summary>

Calculate the equilibrium potential for $\mathrm{K}^+$ at $37^\circ\mathrm{C}$ given:
$[\mathrm{K}^+]_{\mathrm{in}} = 150\;\mathrm{mmol/L}$ and $[\mathrm{K}^+]_{\mathrm{out}} = 5\;\mathrm{mmol/L}$.
Using the Goldman equation with permeabilities $\mathrm{P_K : P_{Na} : P_{Cl}} = 1.0 : 0.04 : 0.45$,
calculate the resting membrane potential. Explain why the resting potential differs from the
$\mathrm{K}^+$ equilibrium potential.

</details>

<details>
<summary>Answer</summary>

**Nernst equation for $\mathrm{K}^+$**:
$E_{\mathrm{K}} = \frac{61.5}{1} \log_{10} \frac{5}{150} = 61.5 \times \log_{10}(0.0333) = 61.5 \times (-1.477) = -90.8\;\mathrm{mV}$

**Goldman equation** (simplified):
$V_{\mathrm{rest}} = \frac{RT}{F} \ln \frac{\mathrm{P_K}[\mathrm{K}^+]_{\mathrm{out}} + \mathrm{P_{Na}}[\mathrm{Na}^+]_{\mathrm{out}} + \mathrm{P_{Cl}}[\mathrm{Cl}^-]_{\mathrm{in}}}{\mathrm{P_K}[\mathrm{K}^+]_{\mathrm{in}} + \mathrm{P_{Na}}[\mathrm{Na}^+]_{\mathrm{in}} + \mathrm{P_{Cl}}[\mathrm{Cl}^-]_{\mathrm{out}}}$

Using the given permeabilities and concentrations:
$V_{\mathrm{rest}} \approx 61.5 \log_{10} \frac{1.0 \times 5 + 0.04 \times 145 + 0.45 \times 10}{1.0 \times 150 + 0.04 \times 15 + 0.45 \times 110}$

$= 61.5 \log_{10} \frac{5 + 5.8 + 4.5}{150 + 0.6 + 49.5} = 61.5 \log_{10} \frac{15.3}{200.1} = 61.5 \times (-1.117) = -68.7\;\mathrm{mV}$

The resting potential ($\approx -69\;\mathrm{mV}$) is less negative than $E_{\mathrm{K}}$ ($-91\;\mathrm{mV}$)
because the membrane has a small but significant permeability to $\mathrm{Na}^+$ ($\mathrm{P_{Na}} > 0$),
which pulls the potential toward the $\mathrm{Na}^+$ equilibrium potential ($+60\;\mathrm{mV}$).

</details>

<details>
<summary>Question 5: Autonomic Nervous System -- Drug Effects</summary>

Atropine is a muscarinic ACh receptor antagonist. Predict the effects of atropine administration on:
(a) heart rate, (b) pupil size, (c) digestive activity, and (d) salivation. Explain the mechanism
in each case, identifying whether the normal (unblocked) pathway is sympathetic or parasympathetic.

</details>

<details>
<summary>Answer</summary>

Atropine blocks **muscarinic ACh receptors**, which are found at parasympathetic postganglionic synapses
on target organs. Blocking parasympathetic effects leaves sympathetic effects unopposed:

(a) **Heart rate increases**: parasympathetic stimulation (via the vagus nerve) normally slows the heart
rate by releasing ACh onto muscarinic receptors in the SA node. Atropine blocks this, so heart rate
increases (tachycardia).

(b) **Pupils dilate (mydriasis)**: parasympathetic stimulation normally constricts the pupil by
releasing ACh onto the sphincter pupillae muscle. Atropine blocks this, and the unopposed radial
muscle (sympathetic) dilates the pupil.

(c) **Digestive activity decreases**: parasympathetic stimulation normally increases peristalsis and
glandular secretion in the GI tract. Atropine blocks this, reducing motility (can cause constipation
and dry mouth).

(d) **Salivation decreases**: parasympathetic stimulation normally stimulates salivary gland secretion.
Atropine blocks muscarinic receptors on salivary glands, causing dry mouth (xerostomia).

</details>

---

## Worked Examples

**Worked Example: Nernst and Goldman Equations Applied to Neuronal Physiology**

A neuron at $37^\circ\mathrm{C}$ has the following ion concentrations and permeabilities:
$[\mathrm{Na}^+]_{\mathrm{in}} = 12\;\mathrm{mmol/L}$, $[\mathrm{Na}^+]_{\mathrm{out}} = 145\;\mathrm{mmol/L}$,
$[\mathrm{K}^+]_{\mathrm{in}} = 155\;\mathrm{mmol/L}$, $[\mathrm{K}^+]_{\mathrm{out}} = 4\;\mathrm{mmol/L}$,
$[\mathrm{Cl}^-]_{\mathrm{in}} = 4\;\mathrm{mmol/L}$, $[\mathrm{Cl}^-]_{\mathrm{out}} = 120\;\mathrm{mmol/L}$.
During an action potential, voltage-gated $\mathrm{Na}^+$ channels open, making $\mathrm{P_{Na}} \gg \mathrm{P_K}$.
Predict the membrane potential at the peak of the action potential.

<details>
<summary>Solution</summary>

At the peak of the action potential, $\mathrm{P_{Na}}$ dominates completely ($\mathrm{P_{Na}} \gg \mathrm{P_K}, \mathrm{P_{Cl}}$).
The Goldman equation reduces to the Nernst equation for $\mathrm{Na}^+$:

$E_{\mathrm{Na}} = 61.5 \log_{10} \frac{145}{12} = 61.5 \times \log_{10}(12.08) = 61.5 \times 1.082 = +66.5\;\mathrm{mV}$

The membrane potential approaches the $\mathrm{Na}^+$ equilibrium potential, which is approximately
$+67\;\mathrm{mV}$. In practice, the peak is typically around $+40\;\mathrm{mV}$ because the
$\mathrm{Na}^+$ channels begin to inactivate before the membrane fully reaches $E_{\mathrm{Na}}$,
and some $\mathrm{K}^+$ permeability remains.

</details>

**Worked Example: Effect of Myelin Demyelination on Conduction**

In multiple sclerosis, oligodendrocytes are destroyed, removing the myelin sheath from CNS axons.
A previously myelinated axon with a diameter of $10\;\mathrm{\mu m}$ had a conduction velocity of
$80\;\mathrm{m/s}$ and nodes spaced $1.5\;\mathrm{mm}$ apart. After demyelination, the same axon
conducts at $2\;\mathrm{m/s}$. Calculate the time for a signal to travel $0.5\;\mathrm{m}$ in both
cases and explain the functional consequences.

<details>
<summary>Solution</summary>

**Before demyelination**: $t = \frac{0.5}{80} = 0.00625\;\mathrm{s} = 6.25\;\mathrm{ms}$

**After demyelination**: $t = \frac{0.5}{2} = 0.25\;\mathrm{s} = 250\;\mathrm{ms}$

The conduction time increases $40$-fold. This has severe functional consequences:
- **Motor commands** from the brain to muscles arrive with a delay, causing weakness, incoordination,
  and spasticity.
- **Sensory signals** from the body to the brain are delayed, impairing proprioception, touch, and
  pain perception.
- **Signal degradation**: without saltatory conduction, the signal may decrement (weaken) over long
  distances, potentially failing to reach the target.
- **Uncontrolled firing**: demyelinated regions may generate ectopic action potentials, causing
  tremors, paraesthesia (tingling), and spasticity.

These symptoms characterise the relapsing-remitting pattern of MS, where demyelinating lesions cause
episodic neurological deficits.

</details>

---

## Common Pitfalls (Expanded)

- **Confusing resting potential with equilibrium potential**: the resting potential is a steady state
  maintained by the $\mathrm{Na}^+/\mathrm{K}^+$ pump and differential permeability, not the
  equilibrium potential for any single ion.
- **Stating that the action potential travels backward**: the absolute refractory period prevents
  backward propagation of the action potential along the axon.
- **Confusing EPSPs/IPSPs with action potentials**: EPSPs and IPSPs are graded, decremental potentials
  that can summate; action potentials are all-or-nothing, non-decremental, and propagated without
  decay.
- **Describing myelin as conductive**: myelin is an insulator that prevents current leakage. Action
  potentials are generated only at the nodes of Ranvier.
- **Confusing rods and cones**: rods = dim light, peripheral vision, no colour; cones = bright light,
  central vision (fovea), colour (trichromatic).
- **Misunderstanding the sliding filament theory**: filaments slide past each other; the A band is
  constant; the I band and H zone narrow; neither filament shortens.
- **Confusing sympathetic and parasympathetic effects**: sympathetic = "fight or flight" (dilate pupils,
  increase heart rate, inhibit digestion); parasympathetic = "rest and digest" (constrict pupils,
  decrease heart rate, promote digestion).

---

## Exam-Style Problems

<details>
<summary>Problem 1: Extended Response -- Neurone Communication</summary>

Describe the sequence of events involved in synaptic transmission at a cholinergic synapse in the
CNS, from the arrival of an action potential at the presynaptic terminal to the generation of a
postsynaptic potential. Explain how temporal and spatial summation determine whether an action
potential is fired in the postsynaptic neuron. Discuss how drugs that inhibit acetylcholinesterase
(e.g., organophosphates) would affect this process.

</details>

<details>
<summary>Problem 2: Data Analysis -- Action Potential Recording</summary>

A researcher records the membrane potential of a neuron using an intracellular microelectrode. The
following data are obtained after applying stimuli of increasing intensity:

| Stimulus intensity ($\mathrm{\mu A}$) | Peak membrane potential ($\mathrm{mV}$) |
| --------------------------------------- | --------------------------------------- |
| 0                                      | -70                                     |
| 2                                      | -65                                     |
| 4                                      | -60                                     |
| 6                                      | -55                                     |
| 8                                      | +40                                     |
| 10                                     | +40                                     |
| 12                                     | +40                                     |

(a) Plot the data. Identify the threshold stimulus intensity. (b) Explain why increasing the
stimulus from 8 to 12 $\mathrm{\mu A}$ does not change the peak potential. (c) Explain how the
nervous system encodes stimulus intensity given this all-or-nothing behaviour.

</details>

<details>
<summary>Problem 3: Extended Response -- Sliding Filament Theory and Muscle Disorders</summary>

Describe the molecular mechanism of skeletal muscle contraction, including the roles of calcium,
troponin, tropomyosin, and ATP. Explain how each of the following conditions would affect muscle
contraction: (a) low blood calcium (hypocalcaemia), (b) inhibition of acetylcholinesterase,
(c) mutation in the myosin head that prevents ATP binding, (d) denervation of the muscle (loss of
motor neuron).

</details>

<details>
<summary>Problem 4: Quantitative -- Nernst Equation and Ion Concentrations</summary>

A patient with severe vomiting has a plasma $\mathrm{K}^+$ concentration of $2.5\;\mathrm{mmol/L}$
(normal: $4.5\;\mathrm{mmol/L}$). Assuming intracellular $\mathrm{K}^+$ concentration is unchanged
at $150\;\mathrm{mmol/L}$, calculate: (a) the $\mathrm{K}^+$ equilibrium potential before and
after vomiting. (b) Predict the effect on the resting membrane potential. (c) Explain why this
patient is at risk of cardiac arrhythmias.

</details>

<details>
<summary>Problem 5: Extended Response -- Brain Function and Neurological Disorders</summary>

Parkinson's disease results from the degeneration of dopaminergic neurons in the substantia nigra.
(a) Describe the normal role of dopamine in the basal ganglia in regulating voluntary movement.
(b) Explain how the loss of dopamine produces the characteristic symptoms of Parkinson's disease
(tremor, rigidity, bradykinesia). (c) Evaluate the effectiveness of L-DOPA therapy, explaining
why L-DOPA is administered rather than dopamine itself. (d) Discuss why long-term L-DOPA therapy
can lead to involuntary movements (dyskinesias).

</details>

---

## If You Get These Wrong, Revise:

- **Cell membrane structure and transport** --> Review [./cell-biology](./cell-biology)
- **Protein structure and enzymes** --> Review [./molecular-biology](./molecular-biology)
- **Muscle contraction and energy** --> Review [./metabolism-cell-biology](./metabolism-cell-biology)
- **Homeostasis and hormonal control** --> Review [./human-physiology](./human-physiology)
- **Immune system and neuromuscular disorders** --> Review [./immunology](./immunology)
