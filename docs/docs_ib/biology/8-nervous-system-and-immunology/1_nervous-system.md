---
title: Nervous System description: 'IB Biology — neuron structure and function, resting potential,
action potential propagation, myelination, synapses, neurotransmitters, reflex arcs, sensory' slug:
nervous-system

date: 2024-01-01T00:00:00Z tags:

- ib
- biology categories:
- ib
- ib-biology

---
## 1. Neuron Structure and Function

### Types of Neurons

| Type                    | Structure                                                     | Function                                                   |
| ----------------------- | ------------------------------------------------------------- | ---------------------------------------------------------- |
| **Sensory (afferent)**  | Long dendrites, short axon; cell body in dorsal root ganglion | Transmit impulses from receptors to the CNS.               |
| **Relay (interneuron)** | Short dendrites, short or no axon; within CNS                 | Process information; connect sensory and motor neurons.    |
| **Motor (efferent)**    | Short dendrites, long axon; cell body in CNS                  | Transmit impulses from CNS to effectors (muscles, glands). |

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

| Feature              | Schwann Cells (PNS)                                  | Oligodendrocytes (CNS)                                              |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------- |
| Myelination          | One Schwann cell myelinates one segment of one axon. | One oligodendrocyte myelinates multiple segments on multiple axons. |
| Regeneration         | Can guide axon regeneration after injury.            | Limited regenerative capacity in the CNS.                           |
| Associated disorders | Guillain-Barre syndrome (autoimmune demyelination).  | Multiple sclerosis (autoimmune demyelination).                      |

### Glial Cells (Neuroglia)

Non-neuronal cells that support, nourish, and protect neurons:

| Cell type           | Location | Function                                                                                                  |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| **Astrocytes**      | CNS      | Regulate extracellular ion concentrations; form the blood-brain barrier; provide metabolic support.       |
| **Microglia**       | CNS      | Phagocytic immune cells; remove debris and dead neurons.                                                  |
| **Ependymal cells** | CNS      | Line the ventricles of the brain and central canal of the spinal cord; produce cerebrospinal fluid (CSF). |
| **Schwann cells**   | PNS      | Myelinate axons; aid regeneration.                                                                        |
| **Satellite cells** | PNS      | Surround cell bodies in ganglia; provide nutrients and regulate the extracellular environment.            |

---

## 2. Resting Membrane Potential

### Ionic Basis

The **resting membrane potential** is approximately $-70\;\mathrm{mV}$ (inside negative relative to
Outside). This potential is established and maintained by ion concentration gradients and selective
Permeability of the membrane.

**Typical ion concentrations** (intracellular vs extracellular):

| Ion                                               | Intracellular ($\mathrm{mmol/L}$) | Extracellular ($\mathrm{mmol/L}$) | Equilibrium potential ($\mathrm{mV}$) |
| ------------------------------------------------- | --------------------------------- | --------------------------------- | ------------------------------------- |
| $\mathrm{Na}^+$                                   | $15$                              | $145$                             | $\approx +60$                         |
| $\mathrm{K}^+$                                    | $150$                             | $5$                               | $\approx -90$                         |
| $\mathrm{Cl}^-$                                   | $10$                              | $110$                             | $\approx -70$                         |
| Impermeable anions (proteins, organic phosphates) | High                              | Low                               | ---                                   |

### The Nernst Equation

The equilibrium potential for a single ion is calculated using the Nernst equation:

$$E_{\mathrm{ion}} = \frac{RT}{zF} \ln \frac{[\mathrm{ion}]_{\mathrm{out}}}{[\mathrm{ion}]_{\mathrm{in}}}$$

At body temperature ($37^\circ\mathrm{C} = 310\;\mathrm{K}$), this simplifies to:

$$E_{\mathrm{ion}} = \frac{61.5}{z} \log_{10} \frac{[\mathrm{ion}]_{\mathrm{out}}}{[\mathrm{ion}]_{\mathrm{in}}}$$

Where $R$ is the gas constant, $T$ is temperature, $z$ is the ion's valence, and $F$ is Faraday's
Constant.

### Mechanism of the Resting Potential

1. **$\mathrm{Na}^+/\mathrm{K}^+$ ATPase pump**: actively transports $3\;\mathrm{Na}^+$ out and
   $2\;\mathrm{K}^+$ in per ATP hydrolysed. This creates and maintains the concentration gradients
   ($\mathrm{Na}^+$ higher outside, $\mathrm{K}^+$ higher inside). The pump is **electrogenic** (net
   export of $1$ positive charge per cycle), contributing approximately $-4\;\mathrm{mV}$ to the
   resting potential.

2. **Selective membrane permeability at rest**: the membrane is approximately $50$--$100$ times more
   permeable to $\mathrm{K}^+$ than to $\mathrm{Na}^+$ due to open **leak (resting) $\mathrm{K}^+$
   channels**.

3. **$\mathrm{K}^+$ diffusion**: $\mathrm{K}^+$ diffuses out of the cell down its concentration
   gradient through leak channels. Each $\mathrm{K}^+$ that leaves carries a positive charge, making
   the interior progressively more negative.

4. **Equilibrium**: the outward diffusion of $\mathrm{K}^+$ is opposed by the electrical gradient
   (the negative interior attracts $\mathrm{K}^+$ back). The resting potential (approximately
   $-70\;\mathrm{mV}$) is close to (but more positive than) the $\mathrm{K}^+$ equilibrium potential
   ($-90\;\mathrm{mV}$) because the membrane has a small residual permeability to
   $\mathrm{Na}^+$Which pulls the potential toward the $\mathrm{Na}^+$ equilibrium potential.

---

## 3. Action Potential

### Phases of the Action Potential

An action potential is a rapid, transient reversal of the membrane potential, approximately
$+40\;\mathrm{mV}$ at its peak.

| Phase                 | Membrane potential            | Ion channels and movements                                                                                                  |
| --------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Resting**           | $\approx -70\;\mathrm{mV}$    | $\mathrm{Na}^+$ and $\mathrm{K}^+$ voltage-gated channels are closed; leak $\mathrm{K}^+$ channels are open.                |
| **Threshold**         | $\approx -55\;\mathrm{mV}$    | If depolarisation reaches this level, voltage-gated $\mathrm{Na}^+$ channels open rapidly.                                  |
| **Depolarisation**    | $-55$ to $+40\;\mathrm{mV}$   | Voltage-gated $\mathrm{Na}^+$ channels open; $\mathrm{Na}^+$ rushes in (down both concentration and electrical gradients).  |
| **Peak**              | $\approx +40\;\mathrm{mV}$    | $\mathrm{Na}^+$ channels become inactivated (ball-and-chain mechanism); voltage-gated $\mathrm{K}^+$ channels open.         |
| **Repolarisation**    | $+40$ to $-70\;\mathrm{mV}$   | $\mathrm{Na}^+$ channels are inactivated; $\mathrm{K}^+$ channels remain open; $\mathrm{K}^+$ rushes out.                   |
| **Hyperpolarisation** | $-70$ to $-80\;\mathrm{mV}$   | $\mathrm{K}^+$ channels close slowly; excess $\mathrm{K}^+$ efflux makes the inside temporarily more negative than resting. |
| **Restoration**       | Returns to $-70\;\mathrm{mV}$ | $\mathrm{K}^+$ channels close; $\mathrm{Na}^+/\mathrm{K}^+$ pump restores original ion concentrations.                      |

### Refractory Periods

- **Absolute refractory period**: during depolarisation and most of repolarisation, a second action
  potential cannot be generated regardless of stimulus strength. This is because voltage-gated
  $\mathrm{Na}^+$ channels are inactivated and cannot reopen.
- **Relative refractory period**: during hyperpolarisation, a stronger-than-normal stimulus can
  generate an action potential (some $\mathrm{Na}^+$ channels have recovered, but the membrane is
  hyperpolarised, requiring greater depolarisation to reach threshold).

**Functional significance**: the refractory period ensures **unidirectional propagation** of the
Action potential along the axon and limits the maximum firing frequency.

### All-or-Nothing Principle

An action potential either occurs fully (if threshold is reached) or does not occur at all. The
Amplitude of the action potential is constant (approximately $110\;\mathrm{mV}$ total change) and
Does not depend on stimulus strength. Stimulus intensity is encoded by the **frequency** of action
Potentials, not their amplitude.

---

## 4. Action Potential Propagation

### Continuous Conduction (Unmyelinated Axons)

In unmyelinated axons, the action potential propagates as a wave of depolarisation along the entire
Axolemma. Adjacent regions of the membrane are depolarised to threshold by local current flow from
The active region (current spreads through the axoplasm and extracellular fluid).

$$v \propto \sqrt{d}$$

Where $d$ is the axon diameter. Conduction velocity in unmyelinated axons ranges from $0.5$ to
$2\;\mathrm{m/s}$.

### Saltatory Conduction (Myelinated Axons)

In myelinated axons, the action potential "jumps" between nodes of Ranvier:

1. At a node of Ranvier, voltage-gated $\mathrm{Na}^+$ channels are concentrated, and an action
   potential is generated.
2. Local currents from this node depolarise the next node to threshold ($1$--$3\;\mathrm{mm}$ away).
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

| Factor            | Effect                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Axon diameter** | Larger diameter = faster conduction (less resistance to current flow).                                                 |
| **Myelination**   | Myelinated axons conduct much faster (saltatory conduction).                                                           |
| **Temperature**   | Higher temperature = faster conduction (ion channel kinetics are temperature-dependent). Hypothermia slows conduction. |

---

## 5. Synapses

### Structure of a Chemical Synapse

1. **Presynaptic membrane**: the axon terminal membrane containing voltage-gated $\mathrm{Ca}^{2+}$
   channels and the active zones where synaptic vesicles dock and fuse.
2. **Synaptic cleft**: the $20$--$30\;\mathrm{nm}$ gap between the pre- and postsynaptic membranes,
   filled with extracellular fluid.
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
- **Inhibitory postsynaptic potential (IPSP)**: $\mathrm{Cl}^-$ influx and/or $\mathrm{K}^+$ efflux
  hyperpolarises the membrane (e.g., GABA, glycine in the CNS).

7. The neurotransmitter is rapidly removed from the synaptic cleft by:

- **Enzymatic degradation**: e.g., acetylcholinesterase (AChE) hydrolyses acetylcholine into acetate
  and choline.
- **Reuptake**: neurotransmitter transporters on the presynaptic membrane actively transport the
  neurotransmitter back into the terminal (e.g., serotonin, dopamine, noradrenaline reuptake).
- **Diffusion**: neurotransmitter diffuses away from the synaptic cleft.

### Spatial and Temporal Summation

A single EPSP is insufficient to reach threshold at the axon hillock. Multiple EPSPs must be Summed:

- **Temporal summation**: multiple EPSPs from the **same** presynaptic neuron arrive in rapid
  succession before the previous one decays, building up depolarisation.
- **Spatial summation**: EPSPs from **multiple** presynaptic neurons arrive simultaneously at
  different synapses on the same postsynaptic cell, their effects adding together.

The net effect at the axon hillock determines whether threshold is reached and an action potential
is Fired.

---

## 6. Neurotransmitters

### Classification

| Neurotransmitter                   | Type                  | Receptors                                                        | Effect                                                                                   | Key locations                                           |
| ---------------------------------- | --------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **Acetylcholine (ACh)**            | Small molecule        | Nicotinic (ionotropic), muscarinic (metabotropic)                | Excitatory at NMJ; can be excitatory or inhibitory in CNS                                | Neuromuscular junctions; autonomic ganglia; CNS         |
| **Glutamate**                      | Amino acid            | AMPA, NMDA, kainate receptors (ionotropic); mGluR (metabotropic) | Major excitatory neurotransmitter in CNS                                                 | Throughout CNS (most abundant)                          |
| **GABA**                           | Amino acid            | $\mathrm{GABA_A}$ (ionotropic), $\mathrm{GABA_B}$ (metabotropic) | Major inhibitory neurotransmitter in CNS                                                 | Throughout CNS                                          |
| **Glycine**                        | Amino acid            | Glycine receptor (ionotropic, $\mathrm{Cl}^-$ channel)           | Inhibitory; primarily in spinal cord and brainstem                                       | Spinal cord, brainstem                                  |
| **Dopamine**                       | Amine (catecholamine) | $\mathrm{D_1}$--$\mathrm{D_5}$ receptors (metabotropic)          | Motor control, reward, motivation; can be excitatory or inhibitory depending on receptor | Substantia nigra, ventral tegmental area, basal ganglia |
| **Noradrenaline (norepinephrine)** | Amine (catecholamine) | $\alpha$ and $\beta$ adrenergic receptors                        | Arousal, attention, fight-or-flight; sympathetic NS                                      | Locus coeruleus; sympathetic postganglionic neurons     |
| **Serotonin (5-HT)**               | Amine (indolamine)    | $5\text{-HT}_1$--$5\text{-HT}_7$ receptors                       | Mood, sleep, appetite, pain perception                                                   | Raphe nuclei (brainstem); gastrointestinal tract        |

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

| Condition               | Neurotransmitter involved | Mechanism                                                                                                       |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Alzheimer's disease** | Acetylcholine             | Degeneration of cholinergic neurons in the basal forebrain; reduced ACh in hippocampus and cortex.              |
| **Parkinson's disease** | Dopamine                  | Loss of dopaminergic neurons in the substantia nigra; reduced dopamine in the basal ganglia.                    |
| **Depression**          | Serotonin, noradrenaline  | Monoamine hypothesis: deficiency of serotonin and/or noradrenaline at synapses. SSRIs block serotonin reuptake. |
| **Myasthenia gravis**   | Acetylcholine             | Autoantibodies destroy nicotinic ACh receptors at NMJ; muscle weakness and fatigue.                             |
| **Epilepsy**            | GABA, glutamate           | Reduced GABAergic inhibition or excessive glutamatergic excitation.                                             |
| **Schizophrenia**       | Dopamine                  | Excess dopamine activity in mesolimbic pathway; $\mathrm{D_2}$ receptor antagonists are antipsychotics.         |

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
5. **Effector**: the muscle or gland that carries out the response (e.g., skeletal muscle contracts
   to withdraw a limb).

### The Stretch Reflex (Monosynaptic Reflex)

Example: the **knee-jerk reflex** (patellar reflex).

1. Tapping the patellar tendon stretches the **quadriceps muscle**.
2. **Muscle spindles** (stretch receptors embedded in the muscle) detect the stretch and generate
   action potentials in sensory neurons.
3. Sensory neurons enter the spinal cord and synapse **directly** (no interneuron) onto motor
   neurons in the ventral horn.
4. Motor neurons send action potentials to the quadriceps muscle, which **contracts** (extension of
   the lower leg).
5. Simultaneously, the sensory neuron activates an **inhibitory interneuron** that synapses onto
   motor neurons supplying the antagonistic **hamstring muscle**, causing it to **relax**
   (reciprocal inhibition).

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

Receptors are specialised cells or nerve endings that convert stimuli (energy) into electrical
signals (graded potentials, then action potentials) --- a process called **transduction**.

| Receptor type        | Stimulus detected                                     | Example                                                                                                             |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Mechanoreceptors** | Mechanical deformation (pressure, vibration, stretch) | Pacinian corpuscles (deep pressure); Meissner's corpuscles (light touch, vibration); hair cells in cochlea (sound). |
| **Thermoreceptors**  | Temperature changes                                   | Warm receptors; cold receptors.                                                                                     |
| **Nociceptors**      | Pain (tissue damage, extreme stimuli)                 | Free nerve endings in skin, muscles, organs.                                                                        |
| **Chemoreceptors**   | Chemical substances                                   | Taste buds; olfactory receptors; carotid bodies ($\mathrm{O}_2$, $\mathrm{CO}_2$PH).                                  |
| **Photoreceptors**   | Light                                                 | Rods (dim light, black-and-white); cones (colour vision, high acuity).                                              |

### Sensory Pathways to the Brain

- **Somatic sensory pathway**: receptors $\to$ sensory neurons $\to$ dorsal root ganglion $\to$
  spinal cord (dorsal horn) $\to$ ascending tracts (spinothalamic tract for pain/temperature; dorsal
  columns for fine touch/proprioception) $\to$ thalamus (relay) $\to$ primary somatosensory cortex
  (postcentral gyrus).
- The body is mapped somatotopically on the sensory cortex (the **sensory homunculus**), with
  regions proportional to the density of sensory receptors (e.g., hands and face have
  disproportionately large cortical representation).

### The Eye and Vision

**Structure of the eye:**

| Structure       | Function                                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Cornea**      | Transparent outer layer; refracts light (provides approximately $2/3$ of total refraction).              |
| **Iris**        | Regulates the size of the pupil (controls light entry).                                                  |
| **Pupil**       | Adjustable opening; dilates in dim light (sympathetic) and constricts in bright light (parasympathetic). |
| **Lens**        | Adjustable focus (accommodation); ciliary muscles change lens shape for near/far vision.                 |
| **Retina**      | Light-sensitive layer containing photoreceptors (rods and cones).                                        |
| **Fovea**       | Area of highest visual acuity; densely packed with cones.                                                |
| **Optic nerve** | Transmits action potentials from retinal ganglion cells to the brain.                                    |

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

| Feature       | Rods                                                 | Cones                                                |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| Sensitivity   | High (function in dim light)                         | Low (require bright light)                           |
| Colour vision | No (one type of rhodopsin)                           | Yes (three types: red, green, blue --- trichromatic) |
| Acuity        | Low (convergence of many rods onto one bipolar cell) | High (one cone per bipolar cell in fovea)            |
| Distribution  | Concentrated in periphery of retina                  | Concentrated in fovea                                |

### The Ear and Hearing

**Structure:**

- **Outer ear**: pinna (collects sound) $\to$ ear canal $\to$ tympanic membrane (eardrum).
- **Middle ear**: three ossicles (malleus, incus, stapes) transmit vibrations from the tympanic
  membrane to the oval window of the cochlea. **Eustachian tube** equalises pressure.
- **Inner ear**: cochlea (coiled, fluid-filled tube) contains the **organ of Corti** with hair
  cells.

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
- **Thick filaments**: composed of **myosin** protein. Each myosin molecule has a globular head that
  can bind to actin and hydrolyse ATP.
- **Thin filaments**: composed of **actin** (with binding sites for myosin), **tropomyosin** (blocks
  myosin-binding sites at rest), and **troponin** (binds $\mathrm{Ca}^{2+}$Moving tropomyosin away
  from the binding sites).
- **Sarcomere**: the repeating unit between two Z lines. Striations:
- **A band**: full length of thick filaments (contains overlapping thick and thin filaments).
- **I band**: thin filaments only (no thick filaments); narrows during contraction.
- **H zone**: central region of A band with thick filaments only; narrows during contraction.
- **Z disc (Z line)**: anchors thin filaments; defines sarcomere boundaries.

### The Sliding Filament Mechanism

During contraction, thin filaments slide past thick filaments, pulling the Z discs toward the centre
Of the sarcomere. The filaments themselves do not change length.

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
6. **ATP hydrolysis**: ATP is hydrolysed to ADP and $\mathrm{P_i}$Re-energising the myosin head and
   repositioning it for another cycle.

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

- **Motor unit**: one motor neuron and all the muscle fibres it innervates. Fine motor control
  (e.g., eye muscles) requires small motor units ($1$--$10$ fibres per neuron); gross motor control
  (e.g., leg muscles) uses large motor units ($1000$--$2000$ fibres per neuron).
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

| Region            | Key structures                                                    | Primary functions                                                                                                                                                                              |
| ----------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cerebrum**      | Cerebral cortex (grey matter); basal ganglia; white matter tracts | Conscious thought, voluntary movement, sensory processing, language, memory, decision-making.                                                                                                  |
| **Cerebellum**    | Two hemispheres, highly folded cortex                             | Coordination of voluntary movement; balance; posture; motor learning; error correction during movement.                                                                                        |
| **Diencephalon**  | Thalamus; hypothalamus; epithalamus (pineal gland)                | Thalamus: sensory relay and filtering. Hypothalamus: homeostasis, thermoregulation, hunger/thirst, endocrine control (pituitary). Pineal: melatonin (circadian rhythm).                        |
| **Brainstem**     | Midbrain; pons; medulla oblongata                                 | Midbrain: reflexes (visual, auditory), dopamine pathways. Pons: relay between cerebrum and cerebellum, breathing regulation. Medulla: vital centres (cardiac, respiratory, vasomotor centres). |
| **Limbic system** | Hippocampus; amygdala; hypothalamus; cingulate gyrus              | Emotion, memory formation (hippocampus), fear processing (amygdala), motivation, olfaction.                                                                                                    |

### Cerebral Cortex (Lobes)

| Lobe          | Location                       | Primary functions                                                                                                                                                      |
| ------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontal**   | Anterior to central sulcus     | Motor control (primary motor cortex, precentral gyrus); decision-making, planning, personality (prefrontal cortex); Broca's area (speech production, left hemisphere). |
| **Parietal**  | Posterior to central sulcus    | Somatosensory processing (primary somatosensory cortex, postcentral gyrus); spatial awareness; proprioception.                                                         |
| **Temporal**  | Lateral, below lateral fissure | Auditory processing (primary auditory cortex); Wernicke's area (language comprehension, left hemisphere); memory (medial temporal lobe, hippocampus).                  |
| **Occipital** | Posterior                      | Visual processing (primary visual cortex); colour, motion, and form perception.                                                                                        |

---

## 11. Autonomic Nervous System

The autonomic nervous system (ANS) regulates involuntary functions: heart rate, digestion,
respiratory Rate, pupillary response, and glandular secretion.

### Sympathetic vs Parasympathetic Divisions

| Feature                  | Sympathetic ("fight or flight")                                                                                                                                                  | Parasympathetic ("rest and digest")                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Origin**               | Thoracolumbar spinal cord ($\mathrm{T_1}$--$\mathrm{L_2/L_3}$)                                                                                                                   | Cranial nerves (III, VII, IX, X) and sacral spinal cord ($\mathrm{S_2}$--$\mathrm{S_4}$)                            |
| **Ganglia**              | Paravertebral chain (close to spinal cord)                                                                                                                                       | Terminal ganglia (close to or within target organ)                                                                  |
| **Preganglionic fibre**  | Short; myelinated                                                                                                                                                                | Long; myelinated                                                                                                    |
| **Postganglionic fibre** | Long; unmyelinated                                                                                                                                                               | Short; unmyelinated                                                                                                 |
| **Neurotransmitter**     | ACh (preganglionic); noradrenaline (postganglionic, mostly)                                                                                                                      | ACh at all synapses (nicotinic at ganglia, muscarinic at target organs)                                             |
| **Effects**              | Pupil dilation; increased heart rate; bronchodilation; increased blood glucose; decreased digestive activity; vasodilation in skeletal muscle; vasoconstriction in skin and gut. | Pupil constriction; decreased heart rate; bronchoconstriction; increased digestive activity; salivation; urination. |

**Key principle**: most organs receive dual innervation. The sympathetic and parasympathetic systems
Generally have **antagonistic** effects, allowing precise regulation (e.g., sympathetic increases
heart Rate, parasympathetic decreases it).

**Exceptions**: most blood vessels, sweat glands, and the adrenal medulla receive **only
sympathetic** Innervation. The adrenal medulla releases adrenaline (epinephrine) and noradrenaline
(norepinephrine) directly into the bloodstream (neurohormonal action).

---

## 12. Endocrine Integration

The nervous and endocrine systems interact extensively, particularly through the hypothalamus:

### Hypothalamus-Pituitary Axis

- The **hypothalamus** produces **releasing hormones** (e.g., GnRH, TRH, CRH, GHRH) and **inhibiting
  hormones** (e.g., somatostatin, dopamine) that regulate the anterior pituitary.
- The hypothalamus also synthesises **ADH** (vasopressin) and **oxytocin**, which are transported
  along axons and stored in the **posterior pituitary**.
- The **anterior pituitary** secretes trophic hormones (ACTH, TSH, FSH, LH) that stimulate
  peripheral endocrine glands, which release hormones that exert negative feedback on the
  hypothalamus and/or pituitary.

### Neuroendocrine Cells

Specialised neurons that release hormones (neurohormones) into the blood at neurohemal organs:

- **ADH** and **oxytocin**: synthesised in hypothalamic neurons, transported down axons to the
  posterior pituitary, released into the bloodstream upon action potential arrival.
- **Adrenaline**: chromaffin cells of the adrenal medulla are functionally modified postganglionic
  sympathetic neurons that release catecholamines into the blood.

### Adrenal Medulla

The adrenal medulla is essentially a sympathetic ganglion:

1. Preganglionic sympathetic neurons (cholinergic) synapse directly onto chromaffin cells.
2. Chromaffin cells release **adrenaline** ($\approx 80\%$) and **noradrenaline** ($\approx 20\%$)
   into the bloodstream.
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
  memory aids. Remember: sympathetic = pupil dilates, heart rate up, digestion slows;
  parasympathetic = pupil constricts, heart rate down, digestion increases.

---

## Practice Problems

<details>
<summary>Question 1: Action Potential Propagation Velocity</summary>

A myelinated axon has nodes of Ranvier spaced $2.0\;\mathrm{mm}$ apart. The time for an action
Potential to propagate between two adjacent nodes is $0.015\;\mathrm{ms}$. Calculate the conduction
Velocity. An unmyelinated axon of the same diameter has a conduction velocity of
$1.5\;\mathrm{m/s}$. How many times faster is the myelinated axon? Explain the biophysical basis for
this difference.

</details>

<details>
<summary>Answer</summary>

Conduction velocity:
$v = \frac{d}{t} = \frac{2.0 \times 10^{-3}\;\mathrm{m}}{0.015 \times 10^{-3}\;\mathrm{s}} = 133\;\mathrm{m/s}$

Speed ratio: $\frac{133}{1.5} \approx 89$ times faster.

The myelinated axon is faster because: (1) myelin has very high membrane resistance (reducing
Current leakage across the internode) and very low membrane capacitance (less charge storage), so
The local current generated at one node travels efficiently to the next node without decay. (2)
Action potentials are regenerated at each node of Ranvier, maintaining amplitude. In unmyelinated
Axons, current leaks across the entire membrane, the signal decrements with distance, and the
Capacitance of the membrane slows the depolarisation rate.

</details>

<details>
<summary>Question 2: Synaptic Transmission and Summation</summary>

A motor neuron receives inputs from three sensory neurons (A, B, and C). Each produces an EPSP of
$+5\;\mathrm{mV}$ at the axon hillock. The threshold for firing is $-55\;\mathrm{mV}$ and the
Resting potential is $-70\;\mathrm{mV}$. (a) If all three fire simultaneously, does the motor Neuron
fire an action potential? (b) If A and B fire simultaneously but C fires $2\;\mathrm{ms}$ Later (the
EPSP duration is $5\;\mathrm{ms}$), does the motor neuron fire? (c) If A fires alone, The membrane
depolarises to $-65\;\mathrm{mV}$. An inhibitory interneuron also fires, producing an IPSP of
$-10\;\mathrm{mV}$. What is the resulting membrane potential?

</details>

<details>
<summary>Answer</summary>

(a) Three simultaneous EPSPs: $3 \times 5 = +15\;\mathrm{mV}$. New potential:
$-70 + 15 = -55\;\mathrm{mV}$Which exactly equals threshold. The motor neuron fires an action
Potential (at threshold, the probability of firing is approximately $50\%$; any additional input
Would guarantee firing).

(b) Spatial summation of A + B: $+10\;\mathrm{mV}$Bringing the membrane to $-60\;\mathrm{mV}$. C
fires $2\;\mathrm{ms}$ later; since the EPSP duration is $5\;\mathrm{ms}$The depolarisation from A +
B has not fully decayed. Temporal summation adds C's $+5\;\mathrm{mV}$ to the remaining
Depolarisation. The membrane reaches approximately $-55\;\mathrm{mV}$ (threshold), and the motor
Neuron fires.

(c) Resting: $-70\;\mathrm{mV}$. EPSP of A: $+5\;\mathrm{mV}$Bringing membrane to
$-65\;\mathrm{mV}$. IPSP: $-10\;\mathrm{mV}$Bringing membrane to $-65 - 10 = -75\;\mathrm{mV}$. The
membrane is hyperpolarised below resting potential; the motor neuron does not fire.

</details>

<details>
<summary>Question 3: Sliding Filament Theory and Sarcomere Length</summary>

A sarcomere at rest has a length of $2.5\;\mathrm{\mu m}$. The A band is $1.6\;\mathrm{\mu m}$ wide,
The I band is $0.9\;\mathrm{\mu m}$ wide, and the H zone is $0.5\;\mathrm{\mu m}$ wide. During
Maximal contraction, the thin filaments overlap completely and the H zone disappears. Calculate The
sarcomere length and I band width during maximal contraction. Explain which bands change and Which
remain constant.

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

**Summary of changes**: I band narrows from $0.9$ to $0\;\mathrm{\mu m}$; H zone narrows from $0.5$
to $0\;\mathrm{\mu m}$; sarcomere shortens from $2.5$ to $1.6\;\mathrm{\mu m}$; A band Remains
constant at $1.6\;\mathrm{\mu m}$. Note: in practice, maximal contraction may not Eliminate the I
band entirely due to structural constraints.

</details>

<details>
<summary>Question 4: Nernst Equation Calculation</summary>

Calculate the equilibrium potential for $\mathrm{K}^+$ at $37^\circ\mathrm{C}$ given:
$[\mathrm{K}^+]_{\mathrm{in}} = 150\;\mathrm{mmol/L}$ and
$[\mathrm{K}^+]_{\mathrm{out}} = 5\;\mathrm{mmol/L}$. Using the Goldman equation with permeabilities
$\mathrm{P_K : P_{Na} : P_{Cl}} = 1.0 : 0.04 : 0.45$ Calculate the resting membrane potential.
Explain why the resting potential differs from the $\mathrm{K}^+$ equilibrium potential.

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

The resting potential ($\approx -69\;\mathrm{mV}$) is less negative than $E_{\mathrm{K}}$
($-91\;\mathrm{mV}$) Because the membrane has a small but significant permeability to
$\mathrm{Na}^+$ ($\mathrm{P_{Na}} > 0$), Which pulls the potential toward the $\mathrm{Na}^+$
equilibrium potential ($+60\;\mathrm{mV}$).

</details>

<details>
<summary>Question 5: Autonomic Nervous System -- Drug Effects</summary>

Atropine is a muscarinic ACh receptor antagonist. Predict the effects of atropine administration on:
(a) heart rate, (b) pupil size, (c) digestive activity, and (d) salivation. Explain the mechanism In
each case, identifying whether the normal (unblocked) pathway is sympathetic or parasympathetic.

</details>

<details>
<summary>Answer</summary>

Atropine blocks **muscarinic ACh receptors**, which are found at parasympathetic postganglionic
synapses On target organs. Blocking parasympathetic effects leaves sympathetic effects unopposed:

(a) **Heart rate increases**: parasympathetic stimulation (via the vagus nerve) normally slows the
heart Rate by releasing ACh onto muscarinic receptors in the SA node. Atropine blocks this, so heart
rate Increases (tachycardia).

(b) **Pupils dilate (mydriasis)**: parasympathetic stimulation normally constricts the pupil by
Releasing ACh onto the sphincter pupillae muscle. Atropine blocks this, and the unopposed radial
Muscle (sympathetic) dilates the pupil.

(c) **Digestive activity decreases**: parasympathetic stimulation normally increases peristalsis and
Glandular secretion in the GI tract. Atropine blocks this, reducing motility (can cause constipation
And dry mouth).

(d) **Salivation decreases**: parasympathetic stimulation normally stimulates salivary gland
secretion. Atropine blocks muscarinic receptors on salivary glands, causing dry mouth (xerostomia).

</details>

---

## Worked Examples

**Worked Example: Nernst and Goldman Equations Applied to Neuronal Physiology**

A neuron at $37^\circ\mathrm{C}$ has the following ion concentrations and permeabilities:
$[\mathrm{Na}^+]_{\mathrm{in}} = 12\;\mathrm{mmol/L}$, $[\mathrm{Na}^+]_{\mathrm{out}} = 145\;\mathrm{mmol/L}$
$[\mathrm{K}^+]_{\mathrm{in}} = 155\;\mathrm{mmol/L}$, $[\mathrm{K}^+]_{\mathrm{out}} = 4\;\mathrm{mmol/L}$
$[\mathrm{Cl}^-]_{\mathrm{in}} = 4\;\mathrm{mmol/L}$, $[\mathrm{Cl}^-]_{\mathrm{out}} = 120\;\mathrm{mmol/L}$.
During an action potential, voltage-gated $\mathrm{Na}^+$ channels open, making
$\mathrm{P_{Na}} \gg \mathrm{P_K}$. Predict the membrane potential at the peak of the action
potential.

<details>
<summary>Solution</summary>

At the peak of the action potential, $\mathrm{P_{Na}}$ dominates completely
($\mathrm{P_{Na}} \gg \mathrm{P_K}, \mathrm{P_{Cl}}$). The Goldman equation reduces to the Nernst
equation for $\mathrm{Na}^+$:

$E_{\mathrm{Na}} = 61.5 \log_{10} \frac{145}{12} = 61.5 \times \log_{10}(12.08) = 61.5 \times 1.082 = +66.5\;\mathrm{mV}$

The membrane potential approaches the $\mathrm{Na}^+$ equilibrium potential, which is approximately
$+67\;\mathrm{mV}$. In practice, the peak is around $+40\;\mathrm{mV}$ because the $\mathrm{Na}^+$
channels begin to inactivate before the membrane fully reaches $E_{\mathrm{Na}}$ And some
$\mathrm{K}^+$ permeability remains.

</details>

**Worked Example: Effect of Myelin Demyelination on Conduction**

In multiple sclerosis, oligodendrocytes are destroyed, removing the myelin sheath from CNS axons. A
previously myelinated axon with a diameter of $10\;\mathrm{\mu m}$ had a conduction velocity of
$80\;\mathrm{m/s}$ and nodes spaced $1.5\;\mathrm{mm}$ apart. After demyelination, the same axon
Conducts at $2\;\mathrm{m/s}$. Calculate the time for a signal to travel $0.5\;\mathrm{m}$ in both
Cases and explain the functional consequences.

<details>
<summary>Solution</summary>

**Before demyelination**: $t = \frac{0.5}{80} = 0.00625\;\mathrm{s} = 6.25\;\mathrm{ms}$

**After demyelination**: $t = \frac{0.5}{2} = 0.25\;\mathrm{s} = 250\;\mathrm{ms}$

The conduction time increases $40$-fold. This has severe functional consequences:

- **Motor commands** from the brain to muscles arrive with a delay, causing weakness,
  incoordination, and spasticity.
- **Sensory signals** from the body to the brain are delayed, impairing proprioception, touch, and
  pain perception.
- **Signal degradation**: without saltatory conduction, the signal may decrement (weaken) over long
  distances, potentially failing to reach the target.
- **Uncontrolled firing**: demyelinated regions may generate ectopic action potentials, causing
  tremors, paraesthesia (tingling), and spasticity.

These symptoms characterise the relapsing-remitting pattern of MS, where demyelinating lesions cause
Episodic neurological deficits.

</details>

---

## Common Pitfalls (Expanded)

- **Confusing resting potential with equilibrium potential**: the resting potential is a steady
  state maintained by the $\mathrm{Na}^+/\mathrm{K}^+$ pump and differential permeability, not the
  equilibrium potential for any single ion.
- **Stating that the action potential travels backward**: the absolute refractory period prevents
  backward propagation of the action potential along the axon.
- **Confusing EPSPs/IPSPs with action potentials**: EPSPs and IPSPs are graded, decremental
  potentials that can summate; action potentials are all-or-nothing, non-decremental, and propagated
  without decay.
- **Describing myelin as conductive**: myelin is an insulator that prevents current leakage. Action
  potentials are generated only at the nodes of Ranvier.
- **Confusing rods and cones**: rods = dim light, peripheral vision, no colour; cones = bright
  light, central vision (fovea), colour (trichromatic).
- **Misunderstanding the sliding filament theory**: filaments slide past each other; the A band is
  constant; the I band and H zone narrow; neither filament shortens.
- **Confusing sympathetic and parasympathetic effects**: sympathetic = "fight or flight" (dilate
  pupils, increase heart rate, inhibit digestion); parasympathetic = "rest and digest" (constrict
  pupils, decrease heart rate, promote digestion).

---

## Exam-Style Problems

<details>
<summary>Problem 1: Extended Response -- Neurone Communication</summary>

Describe the sequence of events involved in synaptic transmission at a cholinergic synapse in the
CNS, from the arrival of an action potential at the presynaptic terminal to the generation of a
Postsynaptic potential. Explain how temporal and spatial summation determine whether an action
Potential is fired in the postsynaptic neuron. Discuss how drugs that inhibit acetylcholinesterase
(e.g., organophosphates) would affect this process.

</details>

<details>
<summary>Problem 2: Data Analysis -- Action Potential Recording</summary>

A researcher records the membrane potential of a neuron using an intracellular microelectrode. The
Following data are obtained after applying stimuli of increasing intensity:

| Stimulus intensity ($\mathrm{\mu A}$) | Peak membrane potential ($\mathrm{mV}$) |
| ------------------------------------- | --------------------------------------- |
| 0                                     | -70                                     |
| 2                                     | -65                                     |
| 4                                     | -60                                     |
| 6                                     | -55                                     |
| 8                                     | +40                                     |
| 10                                    | +40                                     |
| 12                                    | +40                                     |

(a) Plot the data. Identify the threshold stimulus intensity. (b) Explain why increasing the
Stimulus from 8 to 12 $\mathrm{\mu A}$ does not change the peak potential. (c) Explain how the
Nervous system encodes stimulus intensity given this all-or-nothing behaviour.

</details>

<details>
<summary>Problem 3: Extended Response -- Sliding Filament Theory and Muscle Disorders</summary>

Describe the molecular mechanism of skeletal muscle contraction, including the roles of calcium,
Troponin, tropomyosin, and ATP. Explain how each of the following conditions would affect muscle
Contraction: (a) low blood calcium (hypocalcaemia), (b) inhibition of acetylcholinesterase, (c)
mutation in the myosin head that prevents ATP binding, (d) denervation of the muscle (loss of Motor
neuron).

</details>

<details>
<summary>Problem 4: Quantitative -- Nernst Equation and Ion Concentrations</summary>

A patient with severe vomiting has a plasma $\mathrm{K}^+$ concentration of $2.5\;\mathrm{mmol/L}$
(normal: $4.5\;\mathrm{mmol/L}$). Assuming intracellular $\mathrm{K}^+$ concentration is unchanged
At $150\;\mathrm{mmol/L}$Calculate: (a) the $\mathrm{K}^+$ equilibrium potential before and After
vomiting. (b) Predict the effect on the resting membrane potential. (c) Explain why this Patient is
at risk of cardiac arrhythmias.

</details>

<details>
<summary>Problem 5: Extended Response -- Brain Function and Neurological Disorders</summary>

Parkinson's disease results from the degeneration of dopaminergic neurons in the substantia nigra.
(a) Describe the normal role of dopamine in the basal ganglia in regulating voluntary movement. (b)
Explain how the loss of dopamine produces the characteristic symptoms of Parkinson's disease
(tremor, rigidity, bradykinesia). (c) Evaluate the effectiveness of L-DOPA therapy, explaining Why
L-DOPA is administered rather than dopamine itself. (d) Discuss why long-term L-DOPA therapy Can
lead to involuntary movements (dyskinesias).

</details>

---

## If You Get These Wrong, Revise:

- **Cell membrane structure and transport** --> Review
  [.../1-cell-biology/1_cell-biology](../1-cell-biology/1_cell-biology)
- **Protein structure and enzymes** --> Review
  [.../2-molecular-biology/1_molecular-biology](../2-molecular-biology/1_molecular-biology)
- **Muscle contraction and energy** --> Review
  [.../1-cell-biology/2_metabolism](../1-cell-biology/2_metabolism)
- **Homeostasis and hormonal control** --> Review
  [.../6-human-physiology/1_human-physiology](../6-human-physiology/1_human-physiology)
- **Immune system and neuromuscular disorders** --> Review
  [.../8-nervous-system-and-immunology/2_immunology](../8-nervous-system-and-immunology/2_immunology)

---

## Additional Worked Examples

**Worked Example: Graded Potential Summation at the Axon Hillock**

A neuron receives three simultaneous excitatory postsynaptic potentials (EPSPs) and one inhibitory
Postsynaptic potential (IPSP). EPSP1 depolarises the membrane by $+8\;\mathrm{mV}$EPSP2 by
$+5\;\mathrm{mV}$ EPSP3 by $+3\;\mathrm{mV}$And IPSP1 hyperpolarises by $-6\;\mathrm{mV}$. The
resting potential is $-70\;\mathrm{mV}$ and the threshold is $-55\;\mathrm{mV}$. (a) Calculate the
net change in membrane Potential. (b) Will an action potential be generated? (c) If EPSP2 arrives
$2\;\mathrm{ms}$ after the Others (the membrane time constant is $5\;\mathrm{ms}$), recalculate and
determine whether an action Potential is generated. Assume the decay of EPSP1 and IPSP1 is
negligible within this window.

<details>
<summary>Solution</summary>

(a) Net change $= +8 + 5 + 3 - 6 = +10\;\mathrm{mV}$. Membrane potential:
$-70 + 10 = -60\;\mathrm{mV}$.

(b) $-60\;\mathrm{mV} > -55\;\mathrm{mV}$? No, $-60\;\mathrm{mV}$ is more negative than
$-55\;\mathrm{mV}$. The threshold of $-55\;\mathrm{mV}$ is not reached. No action potential is
generated.

(c) If EPSP2 arrives $2\;\mathrm{ms}$ later, with a time constant of $5\;\mathrm{ms}$EPSP1 and IPSP1
And EPSP3 have decayed by a factor of $e^{-t/\tau} = e^{-2/5} = e^{-0.4} \approx 0.670$.

Remaining EPSP1 at the time of EPSP2: $8 \times 0.670 = 5.36\;\mathrm{mV}$. Remaining IPSP1:
$6 \times 0.670 = 4.02\;\mathrm{mV}$. Remaining EPSP3: $3 \times 0.670 = 2.01\;\mathrm{mV}$.

When EPSP2 arrives, the remaining depolarisation is $5.36 + 2.01 = 7.37\;\mathrm{mV}$ and the
remaining Hyperpolarisation is $4.02\;\mathrm{mV}$. With EPSP2 ($+5\;\mathrm{mV}$): net
$= 7.37 + 5 - 4.02 = 8.35\;\mathrm{mV}$. Membrane potential: $-70 + 8.35 = -61.65\;\mathrm{mV}$.
Still below threshold. No action potential.

For an action potential to fire, the neuron needs additional excitatory input or less inhibitory
input.

</details>

**Worked Example: Myelination and Conduction Velocity**

A myelinated axon has a diameter of $10\;\mathrm{\mu m}$ and internode length of $1.5\;\mathrm{mm}$.
An unmyelinated axon of the same diameter conducts at $5\;\mathrm{m/s}$. (a) Estimate the conduction
Velocity of the myelinated axon. (b) Calculate the time for an action potential to travel
$1\;\mathrm{m}$ Along each type of axon. (c) Explain why myelination increases conduction velocity.
(d) In multiple Sclerosis, demyelination occurs. Predict the effect on conduction velocity and
explain the symptoms.

<details>
<summary>Solution</summary>

(a) Myelination increases conduction velocity approximately $5$--$100\times$ compared to
unmyelinated axons Of the same diameter. For a $10\;\mathrm{\mu m}$ myelinated axon, conduction
velocity is $50$--$70\;\mathrm{m/s}$ (approximately $6\;\mathrm{m/s}$ per $\mathrm{\mu m}$ diameter
for myelinated Axons). Using the empirical relationship:
$v \approx 6 \times d = 6 \times 10 = 60\;\mathrm{m/s}$.

(b) Time $= \text{distance} / \text{velocity}$.

- Unmyelinated: $1 / 5 = 0.20\;\mathrm{s} = 200\;\mathrm{ms}$.
- Myelinated: $1 / 60 = 0.0167\;\mathrm{s} = 16.7\;\mathrm{ms}$.

The myelinated axon is approximately $12\times$ faster.

(c) Myelination increases conduction velocity because:

- The myelin sheath is an insulator that increases membrane resistance and decreases membrane
  capacitance.
- Action potentials "jump" from one node of Ranvier to the next (**saltatory conduction**).
  Depolarisation at one node is sufficient to depolarise the next node to threshold, because current
  loss through the membrane is minimal along the internode (high resistance).
- This is much faster than the continuous propagation of action potentials along an unmyelinated
  axon, where each segment must be depolarised sequentially.

(d) In multiple sclerosis, demyelination exposes the axon membrane, increasing capacitance and
decreasing resistance. This causes: slowed conduction velocity, conduction block (action potential
fails to reach the next node), and aberrant conduction (current "leaking" to adjacent axons).
Symptoms include visual disturbances (optic neuritis), muscle weakness, numbness, coordination
problems, and fatigue, reflecting disrupted neural signalling in the CNS.

</details>

**Worked Example: Nernst Equation for Multiple Ions**

A neuron has the following intracellular and extracellular ion concentrations:

| Ion                | Intracellular (mM) | Extracellular (mM) |
| ------------------ | ------------------ | ------------------ |
| $\mathrm{Na}^+$    | 15                 | 145                |
| $\mathrm{K}^+$     | 150                | 4.5                |
| $\mathrm{Cl}^-$    | 10                 | 110                |
| $\mathrm{Ca}^{2+}$ | 0.0001             | 2.0                |

Temperature $= 37^\circ\mathrm{C}$. (a) Calculate the equilibrium potential for each ion using the
Nernst Equation ($E = \frac{RT}{zF}\ln\frac{[\text{ion}]_{out}}{[\text{ion}]_{in}}$Where
$R = 8.314\;\mathrm{J/(mol\cdot K)}$ $F = 96485\;\mathrm{C/mol}$). (b) The resting membrane
potential is $-70\;\mathrm{mV}$. For each ion, State whether the driving force favours influx or
efflux. (c) If the membrane is $50\times$ more Permeable to $\mathrm{K}^+$ than to $\mathrm{Na}^+$
and $10\times$ more permeable to $\mathrm{K}^+$ than To $\mathrm{Cl}^-$Use the Goldman equation to
estimate the resting potential.

<details>
<summary>Solution</summary>

(a) $\frac{RT}{F} = \frac{8.314 \times 310}{96485} = 0.0267\;\mathrm{V} = 26.7\;\mathrm{mV}$ (at
$37^\circ\mathrm{C}$).

$E_{\mathrm{Na}} = \frac{26.7}{1} \ln\frac{145}{15} = 26.7 \times \ln(9.67) = 26.7 \times 2.269 = +60.6\;\mathrm{mV}$

$E_{\mathrm{K}} = \frac{26.7}{1} \ln\frac{4.5}{150} = 26.7 \times \ln(0.030) = 26.7 \times (-3.507) = -93.6\;\mathrm{mV}$

$E_{\mathrm{Cl}} = \frac{26.7}{-1} \ln\frac{110}{10} = -26.7 \times \ln(11) = -26.7 \times 2.398 = -64.0\;\mathrm{mV}$

$E_{\mathrm{Ca}} = \frac{26.7}{2} \ln\frac{2.0}{0.0001} = 13.35 \times \ln(20000) = 13.35 \times 9.903 = +132.2\;\mathrm{mV}$

(b) Driving force $= V_m - E_{\text{ion}}$ (where positive means outward, negative means inward):

- $\mathrm{Na}^+$: $-70 - 60.6 = -130.6\;\mathrm{mV}$ (strong inward driving force)
- $\mathrm{K}^+$: $-70 - (-93.6) = +23.6\;\mathrm{mV}$ (outward driving force)
- $\mathrm{Cl}^-$: $-70 - (-64.0) = -6.0\;\mathrm{mV}$ (small inward driving force)
- $\mathrm{Ca}^{2+}$: $-70 - 132.2 = -202.2\;\mathrm{mV}$ (very strong inward driving force)

(c) Goldman equation (only monovalent ions):
$V_m = \frac{RT}{F}\ln\frac{P_{\mathrm{Na}}[\mathrm{Na}^+]_{out} + P_{\mathrm{K}}[\mathrm{K}^+]_{out} + P_{\mathrm{Cl}}[\mathrm{Cl}^-]_{in}}{P_{\mathrm{Na}}[\mathrm{Na}^+]_{in} + P_{\mathrm{K}}[\mathrm{K}^+]_{in} + P_{\mathrm{Cl}}[\mathrm{Cl}^-]_{out}}$

Let $P_{\mathrm{K}} = 50$$P_{\mathrm{Na}} = 1$$P_{\mathrm{Cl}} = 5$:
$V_m = 26.7 \times \ln\frac{1 \times 145 + 50 \times 4.5 + 5 \times 10}{1 \times 15 + 50 \times 150 + 5 \times 110}$
$= 26.7 \times \ln\frac{145 + 225 + 50}{15 + 7500 + 550}$ $= 26.7 \times \ln\frac{420}{8065}$
$= 26.7 \times \ln(0.0521)$ $= 26.7 \times (-2.954)$ $= -78.9\;\mathrm{mV}$

This is close to the typical resting potential of approximately $-70\;\mathrm{mV}$. The difference
reflects The contribution of the $\mathrm{Na}^+/K^+$-ATPase (electrogenic pump, which exports
$3\;\mathrm{Na}^+$ For every $2\;\mathrm{K}^+$ imported, adding a small negative contribution).

</details>

**Worked Example: Synaptic Transmission Quantification**

A neuromuscular junction releases $300$ synaptic vesicles per action potential. Each vesicle
contains $5000$ acetylcholine (ACh) molecules. The postsynaptic membrane has $10^8$ nicotinic ACh
receptors, each Requiring binding of $2$ ACh molecules to open. Each open channel allows
$20\,000\;\mathrm{Na}^+$ ions To pass before ACh is hydrolysed. (a) Calculate the total number of
ACh molecules released. (b) Calculate The maximum number of receptors that can be activated. (c)
Calculate the total $\mathrm{Na}^+$ influx If all released ACh activates receptors. (d) Explain why
only a fraction of released ACh molecules Reach receptors.

<details>
<summary>Solution</summary>

(a) Total ACh released: $300 \times 5000 = 1\,500\,000$ molecules.

(b) Each receptor needs 2 ACh molecules. Maximum activated receptors: $1\,500\,000 / 2 = 750\,000$
receptors. Since there are $10^8$ total receptors, only $0.75\%$ of receptors are activated.

(c) Total $\mathrm{Na}^+$ influx: $750\,000 \times 20\,000 = 1.5 \times 10^{10}$ ions. Charge:
$1.5 \times 10^{10} \times 1.6 \times 10^{-19}\;\mathrm{C} = 2.4 \times 10^{-9}\;\mathrm{C}$.

To convert to current: if this charge enters in $1\;\mathrm{ms}$:
$I = Q/t = 2.4 \times 10^{-9} / 10^{-3} = 2.4\;\mathrm{\mu A}$.

(d) Not all released ACh reaches receptors because:

- ACh diffuses away from the synaptic cleft (some is lost to the extracellular space).
- Acetylcholinesterase in the synaptic cleft hydrolyses ACh to acetate and choline before it reaches
  receptors (this is essential for terminating the signal rapidly).
- Some ACh molecules may rebind to presynaptic autoreceptors or be taken up by the presynaptic
  terminal.

</details>

**Worked Example: Reflex Arc and Neural Pathway Analysis**

A reflex arc involves the following sequence: pain receptor (in finger) $\to$ sensory neuron $\to$
Interneuron in spinal cord $\to$ motor neuron $\to$ effector muscle (biceps, causing withdrawal).
(a) Name the type of reflex and explain its adaptive significance. (b) Calculate the minimum
response time If the path length is $0.8\;\mathrm{m}$ (finger to spinal cord to biceps) and the
slowest conduction Velocity is $50\;\mathrm{m/s}$ (including synaptic delay of $0.5\;\mathrm{ms}$
per synapse, and there Are 2 synapses). (c) Explain why this reflex can occur before the brain
perceives pain. (d) Describe The role of the interneuron in this reflex.

<details>
<summary>Solution</summary>

(a) This is a **withdrawal reflex** (flexor reflex), specifically a **polysynaptic reflex**
(involves At least one interneuron). Its adaptive significance is to rapidly remove a body part from
a harmful Stimulus (e.g., touching a hot surface) before tissue damage occurs, minimising injury.

(b) Conduction time: $0.8\;\mathrm{m} / 50\;\mathrm{m/s} = 0.016\;\mathrm{s} = 16\;\mathrm{ms}$.
Synaptic delay: $2 \times 0.5 = 1\;\mathrm{ms}$. Neuromuscular junction delay: approximately
$1\;\mathrm{ms}$. Total minimum response time: $16 + 1 + 1 = 18\;\mathrm{ms}$.

(c) The reflex arc involves only the spinal cord (the sensory neuron synapses directly or via
interneuron Onto the motor neuron in the spinal cord). The signal does not need to travel to the
brain to produce the Motor response. The brain receives the pain signal subsequently (via ascending
tracts), which is why You feel pain a fraction of a second after you have already withdrawn your
hand.

(d) The interneuron has several roles:

- It allows the reflex to involve **reciprocal inhibition**: when the flexor (biceps) is activated,
  the interneuron simultaneously inhibits the extensor (triceps) motor neuron, preventing opposing
  muscles from contracting simultaneously.
- It allows the signal to be **modulated** (e.g., by descending input from the brain, which can
  suppress or enhance the reflex).
- It can distribute the signal to multiple motor neurons, producing a coordinated multi-muscle
  response.
- In some reflexes, interneurons connect to the opposite side of the spinal cord (contralateral
  reflex), coordinating responses across both sides of the body.

</details>

---

## Additional Common Pitfalls

- **Confusing graded potentials with action potentials**: graded potentials are local, decremental,
  and can be depolarising or hyperpolarising; action potentials are all-or-none, propagated without
  decrement, and always depolarising.
- **Stating that action potentials get weaker with distance**: action potentials are actively
  regenerated at each point along the axon; they do not decay with distance (except in demyelinated
  axons).
- **Confusing the refractory periods**: the absolute refractory period is due to inactivation of
  voltage-gated $\mathrm{Na}^+$ channels (no new action possible); the relative refractory period is
  due to the hyperpolarisation from open $\mathrm{K}^+$ channels (action possible but requires
  stronger stimulus).
- **Forgetting that the $\mathrm{Na}^+/K^+$ pump is active transport (requires ATP)**: it is not
  facilitated diffusion. It moves $3\;\mathrm{Na}^+$ out and $2\;\mathrm{K}^+$ in against their
  concentration gradients.
- **Confusing temporal and spatial summation**: temporal summation = multiple PSPs from the same
  synapse arriving in rapid succession; spatial summation = multiple PSPs from different synapses
  arriving simultaneously.
- **Assuming all neurotransmitters are excitatory**: neurotransmitters can be excitatory (e.g.,
  glutamate, ACh at neuromuscular junctions) or inhibitory (e.g., GABA, glycine), depending on the
  receptor type.

---

## Additional Exam-Style Problems with Full Solutions

<details>
<summary>Problem 6: Extended Response -- Synaptic Plasticity and Learning</summary>

Long-term potentiation (LTP) is a cellular mechanism underlying learning and memory. (a) Describe
the Sequence of events at a glutamatergic synapse that leads to LTP in the hippocampus (NMDA
receptor-dependent Pathway). (b) Explain the roles of the NMDA receptor and the AMPA receptor. (c)
Explain why the NMDA Receptor is described as a "coincidence detector." (d) Describe the structural
changes that occur during LTP maintenance. (e) Explain how LTP relates to the Hebbian learning rule.

</details>

<details>
<summary>Answer 6</summary>

(a) LTP induction at a hippocampal CA1 synapse:

1. A presynaptic neuron releases glutamate, binding to both AMPA and NMDA receptors on the
   postsynaptic membrane.
2. Under basal conditions, the NMDA receptor's $\mathrm{Mg}^{2+}$ block prevents $\mathrm{Ca}^{2+}$
   entry even when glutamate is bound.
3. When a high-frequency stimulus (tetanus) causes strong depolarisation (via AMPA receptor
   activation), the $\mathrm{Mg}^{2+}$ block is expelled from the NMDA receptor channel.
4. With glutamate bound and the $\mathrm{Mg}^{2+}$ block removed, $\mathrm{Ca}^{2+}$ flows through
   the NMDA receptor into the postsynaptic neuron.
5. The rise in intracellular $\mathrm{Ca}^{2+}$ activates **CaMKII** (calcium/calmodulin-dependent
   protein kinase II) and other kinases.
6. CaMKII phosphorylates existing AMPA receptors, increasing their conductance.
7. CaMKII also triggers the insertion of additional AMPA receptors from intracellular vesicles into
   the postsynaptic membrane.
8. The postsynaptic neuron may release a retrograde messenger (e.g., nitric oxide) that enhances
   glutamate release from the presynaptic terminal (presynaptic LTP).

(b) **AMPA receptor**: an ionotropic glutamate receptor permeable to $\mathrm{Na}^+$ (and some
$\mathrm{K}^+$). It mediates fast excitatory postsynaptic potentials (EPSPs). It is responsible for
the Initial depolarisation that removes the $\mathrm{Mg}^{2+}$ block from the NMDA receptor.

**NMDA receptor**: an ionotropic glutamate receptor permeable to $\mathrm{Na}^+$$\mathrm{K}^+$And
$\mathrm{Ca}^{2+}$. It requires both glutamate binding AND sufficient depolarisation (to remove the
$\mathrm{Mg}^{2+}$ block). The $\mathrm{Ca}^{2+}$ influx through NMDA receptors is the trigger for
LTP Induction.

(c) The NMDA receptor is a "coincidence detector" because it requires two simultaneous conditions:

1. Glutamate must be present (presynaptic neuron is active).
2. The postsynaptic membrane must be sufficiently depolarised (the postsynaptic neuron is active).
   Only when both pre- and postsynaptic neurons fire together does $\mathrm{Ca}^{2+}$ enter through
   the NMDA Receptor, triggering LTP. This ensures that synaptic strengthening occurs only for
   synapses where there Is correlated activity -- the basis of associative learning.

(d) Structural changes during LTP maintenance:

- **Postsynaptic**: increase in the number and size of dendritic spines (the small protrusions on
  dendrites that receive synaptic inputs), enlargement of the postsynaptic density, and insertion of
  additional AMPA receptors.
- **Presynaptic**: increased number of synaptic vesicles docked at the active zone, enlarged active
  zone, and increased probability of vesicle release.
- These structural changes require protein synthesis (both local dendritic and somatic) and gene
  transcription (CREB-mediated), making LTP long-lasting (hours to days).

(e) Hebbian learning rule: "neurons that fire together, wire together." LTP is the cellular
realisation Of this principle. When a presynaptic neuron consistently fires just before (or
simultaneously with) a Postsynaptic neuron, the synaptic connection between them is strengthened.
This allows neural circuits To encode associations between co-occurring events, forming the basis of
learning and memory.

</details>

<details>
<summary>Problem 7: Data Analysis -- Drug Effects on Synaptic Transmission</summary>

A researcher investigates the effect of three drugs on synaptic transmission at a cholinergic
synapse:

| Drug   | Effect observed                                     |
| ------ | --------------------------------------------------- |
| Drug X | No EPSP recorded                                    |
| Drug Y | Prolonged EPSP; muscle contracts but does not relax |
| Drug Z | Reduced EPSP amplitude; normal shape                |

For each drug: (a) identify the likely molecular target, (b) name a specific drug that produces this
Effect, (c) explain the mechanism, and (d) explain the clinical or experimental significance.

</details>

<details>
<summary>Answer 7</summary>

**Drug X: No EPSP recorded** (a) Likely target: nicotinic ACh receptor (blocked). (b) Specific drug:
**curare** (d-tubocurarine) or **alpha-bungarotoxin**. (c) Mechanism: curare is a competitive
antagonist at nicotinic ACh receptors. It binds to the receptor without activating it, preventing
ACh from binding. No ion channel opening, no depolarisation, no EPSP. (d) Significance: curare was
historically used as arrow poison (causes paralysis and respiratory failure by blocking
neuromuscular transmission). It is used experimentally to study neuromuscular function and
clinically as a muscle relaxant during surgery (modern derivatives: pancuronium, vecuronium).

**Drug Y: Prolonged EPSP; muscle contracts but does not relax** (a) Likely target:
acetylcholinesterase (inhibited). (b) Specific drug: **neostigmine** or **organophosphates** (e.g.,
sarin, malathion). (c) Mechanism: acetylcholinesterase normally hydrolyses ACh in the synaptic
cleft, terminating the signal. Inhibition of this enzyme causes ACh to accumulate, producing
prolonged depolarisation and sustained muscle contraction (fasciculations, then paralysis due to
depolarisation block). (d) Significance: neostigmine is used to treat myasthenia gravis (autoimmune
destruction of ACh receptors) by increasing the amount of ACh available to the remaining receptors.
Organophosphate poisoning (pesticides, nerve agents) causes fatal respiratory failure and is treated
with atropine and pralidoxime.

**Drug Z: Reduced EPSP amplitude; normal shape** (a) Likely target: voltage-gated $\mathrm{Ca}^{2+}$
channels at the presynaptic terminal (partially blocked). (b) Specific drug: **magnesium**
($\mathrm{Mg}^{2+}$) or **omega-conotoxin**. (c) Mechanism: voltage-gated $\mathrm{Ca}^{2+}$
channels open when the action potential arrives at the presynaptic terminal, allowing
$\mathrm{Ca}^{2+}$ influx that triggers vesicle fusion and ACh release. Partial blockage reduces
$\mathrm{Ca}^{2+}$ entry, reducing the number of vesicles released and therefore the EPSP amplitude.
(d) Significance: $\mathrm{Mg}^{2+}$ is used to treat pre-eclampsia (it reduces neuromuscular
excitability). $\mathrm{Mg}^{2+}$ deficiency (hypomagnesaemia) can cause hyperreflexia and tetany.

</details>

<details>
<summary>Problem 8: Extended Response -- Autonomic Nervous System Comparison</summary>

Compare the sympathetic and parasympathetic divisions of the autonomic nervous system with respect
to: (a) origin of preganglionic neurons, (b) length of pre- and postganglionic fibres, (c)
neurotransmitters At pre- and postganglionic synapses, (d) receptor types at target organs, (e)
effects on heart rate, Pupil diameter, bronchiole diameter, digestive activity, and adrenal medulla,
and (f) overall function ("fight or flight" vs "rest and digest").

</details>

<details>
<summary>Answer 8</summary>

| Feature                     | Sympathetic                                                                                    | Parasympathetic                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Origin**                  | Thoracolumbar (T1--L2/L3) spinal cord                                                          | Cranial nerves (III, VII, IX, X) + sacral spinal cord (S2--S4) |
| **Preganglionic fibre**     | Short                                                                                          | Long                                                           |
| **Ganglion location**       | Paravertebral chain (close to spinal cord) or prevertebral                                     | Close to or within target organ                                |
| **Postganglionic fibre**    | Long                                                                                           | Short                                                          |
| **Preganglionic NT**        | Acetylcholine (ACh)                                                                            | Acetylcholine (ACh)                                            |
| **Preganglionic receptor**  | Nicotinic (N_N)                                                                                | Nicotinic (N_N)                                                |
| **Postganglionic NT**       | Noradrenaline (NA)                                                                             | Acetylcholine (ACh)                                            |
| **Postganglionic receptor** | $\alpha$-adrenergic ($\alpha_1, \alpha_2$) or $\beta$-adrenergic ($\beta_1, \beta_2, \beta_3$) | Muscarinic (M1, M2, M3)                                        |
| **Heart rate**              | Increases ($\beta_1$)                                                                          | Decreases (M2)                                                 |
| **Pupil**                   | Dilates ($\alpha_1$)                                                                           | Constricts (M3)                                                |
| **Bronchioles**             | Dilate ($\beta_2$)                                                                             | Constrict (M3)                                                 |
| **Digestion**               | Inhibits ($\alpha_2$$\beta_2$)                                                                 | Stimulates (M1, M3)                                            |
| **Adrenal medulla**         | Stimulates (ACh on chromaffin cells, releasing adrenaline + NA)                                | No effect                                                      |
| **Overall**                 | Fight or flight                                                                                | Rest and digest                                                |

(f) The sympathetic system prepares the body for emergency action: increasing heart rate, blood
pressure, And blood glucose; dilating airways; diverting blood to skeletal muscles; and dilating
pupils. The Parasympathetic system promotes recovery and maintenance: slowing heart rate,
stimulating digestion, Constricting pupils, and promoting urination/defecation. Most organs receive
dual innervation, allowing Fine-tuned balance between the two systems.

</details>

<details>
<summary>Problem 9: Quantitative -- Hodgkin-Huxley Current Clamp Analysis</summary>

In a current clamp experiment, a depolarising current of $2\;\mathrm{nA}$ is injected into a squid
giant Axon (diameter $500\;\mathrm{\mu m}$) at time $t = 0$. The membrane resistance is
$1000\;\Omega\cdot\mathrm{cm}^2$ And the membrane capacitance is $1\;\mathrm{\mu F/cm}^2$. (a)
Calculate the membrane time constant $\tau$. (b) Calculate the steady-state depolarisation if no
action potential fires. (c) Explain why an action Potential does fire when the current is sufficient
to depolarise the membrane above threshold.

</details>

<details>
<summary>Answer 9</summary>

(a)
$\tau = R_m \times C_m = 1000\;\Omega\cdot\mathrm{cm}^2 \times 1 \times 10^{-6}\;\mathrm{F/cm}^2 = 10^{-3}\;\mathrm{s} = 1\;\mathrm{ms}$.

(b) For a cylindrical axon: surface area per unit length
$= \pi \times d = \pi \times 500 \times 10^{-4}\;\mathrm{cm} = 0.157\;\mathrm{cm}^2/\text{cm}$.

Input resistance per unit length:
$R_{in} = R_m / (\pi \times d) = 1000 / 0.157 = 6366\;\Omega/\text{cm}$.

For a finite patch: $\Delta V = I \times R_{in}$.

If the current is injected uniformly: $\Delta V = I / (g_m \times A)$Where
$g_m = 1/R_m = 10^{-3}\;\mathrm{S/cm}^2$.

For a $1\;\mathrm{cm}$ length patch:
$\Delta V = 2 \times 10^{-9}\;\mathrm{A} / (10^{-3}\;\mathrm{S/cm}^2 \times 0.157\;\mathrm{cm}^2) = 2 \times 10^{-9} / 1.57 \times 10^{-4} = 1.27 \times 10^{-5}\;\mathrm{V} = 0.0127\;\mathrm{mV}$.

This very small depolarisation reflects the large surface area of the squid giant axon. In practice,
a Point current injection would produce a larger local depolarisation that decays exponentially with
distance.

(c) An action potential fires when the local depolarisation reaches threshold ($-55\;\mathrm{mV}$Or
Approximately $15\;\mathrm{mV}$ above rest). At threshold, voltage-gated $\mathrm{Na}^+$ channels
open, Allowing rapid $\mathrm{Na}^+$ influx that further depolarises the membrane (positive
feedback). This Regenerative cycle produces the all-or-none action potential, which is independent
of the stimulus Strength (once threshold is reached).

</details>

<details>
<summary>Problem 10: Extended Response -- Neurodegenerative Diseases</summary>

Compare and contrast Alzheimer's disease and Parkinson's disease with respect to: (a) the brain
regions Primarily affected, (b) the key molecular/pathological features (protein aggregates), (c)
the Neurotransmitter systems disrupted, (d) the characteristic symptoms, and (e) the current
treatment Strategies and their limitations.

</details>

<details>
<summary>Answer 10</summary>

| Feature                       | Alzheimer's disease                                                                                                                | Parkinson's disease                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Primary brain regions**     | Cerebral cortex (especially temporal, frontal, parietal), hippocampus                                                              | Substantia nigra pars compacta, basal ganglia, later cortex                                                        |
| **Key pathology**             | Amyloid-$\beta$ plaques (extracellular), neurofibrillary tangles (intracellular, hyperphosphorylated tau protein)                  | Lewy bodies (intracellular aggregates of $\alpha$-synuclein)                                                       |
| **Neurotransmitter affected** | Acetylcholine (loss of cholinergic neurons in basal forebrain/nucleus basalis)                                                     | Dopamine (loss of dopaminergic neurons in substantia nigra)                                                        |
| **Early symptoms**            | Short-term memory loss, difficulty finding words, spatial disorientation                                                           | Tremor at rest, bradykinesia (slowness of movement), rigidity, postural instability                                |
| **Later symptoms**            | Confusion, personality changes, loss of executive function, language impairment                                                    | Dementia (in later stages), depression, sleep disorders, autonomic dysfunction                                     |
| **Treatment**                 | Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) to increase ACh; NMDA receptor antagonist (memantine); palliative | L-DOPA (dopamine precursor); dopamine agonists (ropinirole, pramipexole); MAO-B inhibitors; deep brain stimulation |
| **Treatment limitations**     | Do not slow disease progression; only temporarily improve symptoms; side effects include nausea, insomnia                          | L-DOPA effectiveness declines over time; dyskinesias (involuntary movements); does not halt neurodegeneration      |

Both diseases involve the accumulation of misfolded protein aggregates, progressive loss of specific
Neuronal populations, and currently have no cure. Research is focused on: immunotherapy (antibodies
against Amyloid-$\beta$ or $\alpha$-synuclein), preventing protein aggregation, stem cell therapy,
and early Detection using biomarkers (PET imaging, cerebrospinal fluid analysis).

</details>

---

## Cross-References to Related Topics

- **Cell membrane structure and ion channels**: Review
  [.../1-cell-biology/1_cell-biology](../1-cell-biology/1_cell-biology) for membrane proteins and
  fluid mosaic model.
- **Muscle contraction and calcium**: Review
  [.../1-cell-biology/2_metabolism](../1-cell-biology/2_metabolism) for actin-myosin interaction and
  ATP in muscle contraction.
- **Homeostasis and feedback**: Review
  [.../6-human-physiology/1_human-physiology](../6-human-physiology/1_human-physiology) for
  thermoregulation and blood glucose homeostasis.
- **Immune system and neuromuscular disorders**: Review
  [.../8-nervous-system-and-immunology/2_immunology](../8-nervous-system-and-immunology/2_immunology)
  for myasthenia gravis and multiple sclerosis.
- **Endocrine system**: Review
  [.../6-human-physiology/1_human-physiology](../6-human-physiology/1_human-physiology) for
  adrenaline, cortisol, and hormone-receptor interactions.

---

| Topic            | Site    | Link                                                                                              |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------- |
| [Nervous System] | A-Level | [View](https://alevel-sciences.wyattau.com/docs/alevel/biology/nervous-system)                    |
| [Nervous System] | IB      | [View](https://ib.wyattau.com/docs/ib/biology/8-nervous-system-and-immunology/1_nervous-system)   |
| [Nervous System] | DSE     | [View](https://dse.wyattau.com/docs/dse/biology/7-nervous-system-and-immunology/1_nervous-system) |

## Supplementary: Muscle Contraction in Detail (HL Extension)

### Types of Muscle Tissue

| Feature               | Skeletal                  | Cardiac                              | Smooth                        |
| --------------------- | ------------------------- | ------------------------------------ | ----------------------------- |
| **Control**           | Voluntary (somatic NS)    | Involuntary (autonomic NS)           | Involuntary (autonomic NS)    |
| **Striation**         | Striated                  | Striated                             | Non-striated                  |
| **Nuclei**            | Multinucleated            | Uninucleated (sometimes binucleated) | Uninucleated (spindle-shaped) |
| **Gap junctions**     | No                        | Yes (intercalated discs)             | Yes (in single-unit type)     |
| **Regeneration**      | Limited (satellite cells) | Very limited                         | Good                          |
| **Contraction speed** | Fast                      | Intermediate                         | Slow                          |
| **Fatigue**           | Yes                       | No (resists fatigue)                 | No                            |

### Sliding Filament Mechanism of Skeletal Muscle Contraction

Skeletal muscle cells (fibres) contain bundles of **myofibrils**, each composed of repeating units
Called **sarcomeres**. The sarcomere is the functional unit of muscle contraction, bounded by
Z-lines (Z-discs).

**Key proteins**:

- **Thick filaments**: composed of **myosin**. Each myosin molecule has a globular head (with ATPase
  activity and actin-binding site) and a long tail. Approximately 300 myosin molecules per thick
  filament, arranged in a bipolar fashion (heads pointing toward the centre on one half and away on
  the other).
- **Thin filaments**: composed of **actin** (globular protein polymerised into a double helix),
  **tropomyosin** (covers myosin-binding sites on actin), and **troponin** (calcium-binding complex:
  troponin C binds $\mathrm{Ca}^{2+}$Troponin I inhibits actin-myosin interaction, troponin T binds
  tropomyosin).

**Sliding filament theory**:

1. **Resting state**: tropomyosin covers the myosin-binding sites on actin. Myosin heads are in the
   "cocked" position, bound to ADP and $\mathrm{P_i}$.
2. **Calcium release**: an action potential arrives at the neuromuscular junction, triggering muscle
   depolarisation. The action potential travels along the sarcolemma and into T-tubules, triggering
   $\mathrm{Ca}^{2+}$ release from the sarcoplasmic reticulum (via ryanodine receptors).
3. **Calcium binding**: $\mathrm{Ca}^{2+}$ binds to troponin C, causing a conformational change that
   moves tropomyosin away from the myosin-binding sites on actin.
4. **Cross-bridge formation**: myosin heads bind to exposed sites on actin, forming cross-bridges.
5. **Power stroke**: the myosin head pivots, pulling the thin filament toward the centre of the
   sarcomere. ADP and $\mathrm{P_i}$ are released.
6. **Detachment**: ATP binds to the myosin head, causing it to detach from actin.
7. **Cocking**: ATP is hydrolysed to ADP and $\mathrm{P_i}$Re-cocking the myosin head.
8. The cycle repeats as long as $\mathrm{Ca}^{2+}$ and ATP are available.

The result: thin filaments slide past thick filaments, the Z-lines move closer together, and the
Sarcomere shortens. The muscle fibre shortens (contraction).

**Evidence for the sliding filament theory**:

- During contraction, the A band (length of thick filaments) does not change.
- The I band (thin filaments only) and H zone (thick filaments only) shorten.
- This is consistent with filaments sliding past each other, not themselves shortening.

### Excitation-Contraction Coupling

The sequence of events linking the action potential to muscle contraction:

1. Action potential arrives at the neuromuscular junction (NMJ).
2. Voltage-gated $\mathrm{Ca}^{2+}$ channels open on the presynaptic terminal; $\mathrm{Ca}^{2+}$
   influx triggers ACh vesicle exocytosis.
3. ACh binds to nicotinic receptors on the motor end plate, opening $\mathrm{Na}^+$ channels.
4. End-plate potential (EPP) depolarises the muscle fibre membrane to threshold, generating a muscle
   action potential.
5. The action potential propagates along the sarcolemma and into the T-tubules (invaginations of the
   sarcolemma).
6. Depolarisation of the T-tubule activates dihydropyridine receptors (DHPR, L-type
   $\mathrm{Ca}^{2+}$ channels), which mechanically couple to ryanodine receptors on the
   sarcoplasmic reticulum (SR).
7. Ryanodine receptors open, releasing $\mathrm{Ca}^{2+}$ from the SR into the sarcoplasm.
8. $\mathrm{Ca}^{2+}$ binds to troponin, initiating cross-bridge cycling (contraction).
9. Relaxation: $\mathrm{Ca}^{2+}$ is actively pumped back into the SR by SERCA pumps
   ($\mathrm{Ca}^{2+}$-ATPase). As $\mathrm{Ca}^{2+}$ concentration drops, $\mathrm{Ca}^{2+}$
   dissociates from troponin, tropomyosin re-covers actin, and cross-bridges cannot form.

### Motor Unit Recruitment

A **motor unit** consists of a single motor neuron and all the muscle fibres it innervates. The
Number of fibres per motor unit varies:

- **Small motor units** (1--10 fibres): fine, precise movements (eye muscles, fingers).
- **Large motor units** (1000+ fibres): powerful, coarse movements (leg muscles, postural muscles).

**Gradation of muscle force**:

1. **Recruitment**: increasing force by activating more motor units (spatial summation).
2. **Rate coding**: increasing force by increasing the firing frequency of active motor neurons
   (temporal summation). At low frequency, individual twitches are distinct; at higher frequency,
   twitches summate (tetanus), producing sustained contraction.

### Energy Sources for Muscle Contraction

- **ATP** (immediate source): powers the myosin head cycle and $\mathrm{Ca}^{2+}$ pumps. Muscle
  stores only enough ATP for approximately $2$--$3$ seconds of maximal contraction.
- **Phosphocreatine (creatine phosphate)**: rapidly regenerates ATP from ADP (via creatine kinase):
  $\mathrm{PCr} + \mathrm{ADP} \to \mathrm{Cr} + \mathrm{ATP}$. Provides energy for approximately
  $10$--$15$ seconds of maximal effort.
- **Anaerobic glycolysis**: breaks down glycogen to lactate, producing $2\;\mathrm{ATP}$ per
  glucose. Provides energy for approximately $30$--$60$ seconds of intense activity. Causes muscle
  fatigue (lactate accumulation, $\mathrm{pH}$ decrease).
- **Aerobic respiration**: complete oxidation of glucose (and fatty acids) via the Krebs cycle and
  ETC. Produces approximately $30$--$32\;\mathrm{ATP}$ per glucose. Provides sustained energy for
  prolonged activity. Dominant during rest and low-intensity exercise.

### Worked Example: Muscle Force and Cross-Bridge Cycling

A muscle fibre has $10^5$ sarcomeres in series along its length and $10^3$ thick filaments per
Sarcomere cross-section. Each thick filament has approximately 300 myosin heads, and each myosin
Head generates a force of $4\;\mathrm{pN}$ ($4 \times 10^{-12}\;\mathrm{N}$). (a) Calculate the
Maximum force per sarcomere cross-section. (b) Calculate the maximum force of the entire fibre. (c)
If each power stroke moves the thin filament by $5\;\mathrm{nm}$Calculate the work done by One
cross-bridge per cycle. (d) Calculate the total work per contraction cycle if $50\%$ of Myosin heads
are attached simultaneously.

<details>
<summary>Solution</summary>

(a) Force per sarcomere cross-section $= 10^3$ thick filaments $\times 300$ heads
$\times 4\;\mathrm{pN}$
$= 300\,000 \times 4 \times 10^{-12} = 1.2 \times 10^{-6}\;\mathrm{N} = 1.2\;\mathrm{\mu N}$.

(b) In a series arrangement, the force is the same along the entire length (force is transmitted,
not summed). So the maximum force of the fibre is the same as the force per cross-section:
$1.2\;\mathrm{\mu N}$.

Note: this is the isometric force (no shortening). In practice, muscle fibres contain thousands of
Myofibrils in parallel, so the total force is multiplied by the number of myofibrils.

(c) Work per cross-bridge per cycle
$= \text{force} \times \text{distance} = 4 \times 10^{-12}\;\mathrm{N}
\times 5 \times 10^{-9}\;\mathrm{m} = 2 \times 10^{-20}\;\mathrm{J}$.

(d) If $50\%$ of heads are attached: $0.50 \times 300\,000 = 150\,000$ attached heads per
Cross-section. Total work per cross-section per cycle
$= 150\,000 \times 2 \times 10^{-20} = 3 \times 10^{-15}\;\mathrm{J}$.

</details>

---

## Supplementary: Brain Regions and Higher Functions (HL Extension)

### Cerebral Cortex

The cerebral cortex is the outer layer of the cerebrum, approximately $2$--$4\;\mathrm{mm}$ thick,
And is responsible for higher cognitive functions. It is divided into four lobes:

**Frontal lobe**: motor cortex (primary motor area, premotor cortex, supplementary motor area --
Planning and executing voluntary movements), prefrontal cortex (decision-making, personality, social
Behaviour, working memory, planning), Broca's area (speech production, left hemisphere in most
people).

**Parietal lobe**: somatosensory cortex (receiving touch, temperature, pain, proprioception
information From the contralateral side of the body), spatial awareness and navigation, integration
of sensory Information.

**Temporal lobe**: primary auditory cortex, Wernicke's area (speech comprehension, left hemisphere),
Hippocampus (memory formation -- new explicit/declarative memories), amygdala (emotion, fear
conditioning, Emotional memory).

**Occipital lobe**: primary visual cortex (receiving input from the retina via the thalamus;
processing Visual information such as edges, orientation, motion, and colour).

**Motor and sensory homunculi**: the primary motor cortex and somatosensory cortex are organised as
"maps" of the body (homunculi). The area of cortex devoted to each body part is proportional to the
Complexity of movement (motor) or density of sensory innervation (sensory), not to the size of the
Body part. The hands, face, and lips have disproportionately large cortical representations.

### The Limbic System

A group of interconnected brain structures involved in emotion, motivation, memory, and olfaction:

- **Amygdala**: fear processing, emotional memory, threat detection. Damage causes reduced fear
  responses (Kluver-Bucy syndrome in animals: tameness, hyperphagia, hypersexuality).
- **Hippocampus**: formation of new episodic and spatial memories (consolidation). Damage (e.g., in
  Alzheimer's disease or bilateral temporal lobectomy) causes anterograde amnesia (inability to form
  new memories).
- **Hypothalamus**: homeostatic regulation (body temperature, hunger, thirst, circadian rhythm),
  endocrine control (pituitary gland), autonomic nervous system regulation.
- **Cingulate gyrus**: emotion, pain processing, conflict monitoring (cognitive control).

### Memory Systems

**Declarative (explicit) memory**: facts and events that can be consciously recalled. Involves the
Hippocampus (acquisition), medial temporal lobe (consolidation), and neocortex (long-term storage).

- **Episodic memory**: personal experiences (what, where, when).
- **Semantic memory**: general knowledge and facts.

**Non-declarative (implicit) memory**: skills and habits that are unconscious. Does not require the
Hippocampus.

- **Procedural memory**: motor skills (riding a bicycle, typing) -- basal ganglia and cerebellum.
- **Priming**: exposure to a stimulus facilitates subsequent processing.
- **Classical conditioning**: association between stimuli -- amygdala (emotional conditioning),
  cerebellum (motor conditioning).

**Long-term potentiation (LTP)**: see worked examples above -- the cellular basis of learning and
Memory in the hippocampus.

**Memory consolidation**: the transfer of memories from the hippocampus to the neocortex for
long-term Storage. This process occurs during sleep (especially slow-wave sleep and REM sleep) and
can take Weeks to years. The reactivation of hippocampal-neocortical circuits during sleep "replays"
memory Patterns, strengthening synaptic connections in the neocortex.

### Neuroplasticity

The brain's ability to reorganise itself by forming new neural connections throughout life:

- **Synaptic plasticity**: LTP and LTD (long-term depression) strengthen or weaken synaptic
  connections.
- **Structural plasticity**: dendritic spines grow or retract in response to experience. London taxi
  drivers have enlarged posterior hippocampi (spatial memory demands).
- **Functional plasticity**: undamaged brain areas can take over functions of damaged areas (e.g.,
  after stroke, adjacent cortex can assume the functions of the damaged region).
- **Critical periods**: some functions have sensitive periods during which they must be experienced
  for normal development. Example: binocular vision requires balanced visual input during early
  childhood; if one eye is deprived (strabismus, cataract), the visual cortex will not develop
  normal binocular connections, and the deficit is largely irreversible after age 8--10.

### Worked Example: Lesion Studies and Brain Function

A patient presents with the following symptoms after a stroke: inability to produce fluent speech
(non-fluent, effortful speech with short phrases), impaired writing ability, but intact
Comprehension of spoken and written language. (a) Identify the likely location of the lesion. (b)
Name the syndrome. (c) Explain why comprehension is preserved. (d) A second patient has fluent But
meaningless speech with poor comprehension. Identify the lesion location and syndrome.

<details>
<summary>Solution</summary>

(a) The lesion is likely in **Broca's area** (inferior frontal gyrus, Brodmann areas 44 and 45) in
the **left hemisphere** (in right-handed individuals and most left-handed individuals, language is
Lateralised to the left hemisphere).

(b) The syndrome is **Broca's aphasia** (expressive aphasia, non-fluent aphasia).

(c) Comprehension is preserved because **Wernicke's area** (posterior superior temporal gyrus,
Brodmann Area 22) and the connections between Wernicke's area and Broca's area (the arcuate
fasciculus) are Intact. The patient can understand language but cannot produce it fluently because
the motor speech Planning area (Broca's area) is damaged.

(d) The second patient has **Wernicke's aphasia** (receptive aphasia, fluent aphasia). The lesion is
in **Wernicke's area** in the left temporal lobe. Speech is fluent (rate and rhythm are normal) but
Contains incorrect words, neologisms (made-up words), and meaningless phrases ("word salad").
Comprehension is severely impaired because the area responsible for language comprehension is
damaged. The patient is often unaware of their deficits (anosognosia), unlike patients with Broca's
aphasia, Who are aware of and frustrated by their difficulty.

</details>

## Summary

This topic covers the biological principles of nervous system, including key concepts, experimental
evidence, and real-world applications.

**Key concepts include:**

- cell structure (prokaryotic vs eukaryotic)
- cell ultrastructure (organelles)
- microscopy and resolution
- cell division (mitosis and meiosis)
- the cell cycle

Success requires the ability to recall specific factual content, apply knowledge to novel scenarios,
and evaluate experimental evidence critically.
