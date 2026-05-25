---
title: Homeostasis
description:
  'DSE Biology homeostasis notes covering negative and positive feedback, blood glucose regulation,
  temperature regulation, osmoregulation, kidney function, ADH,'
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Biology
categories:
  - DSE
  - Biology
slug: dse-biology-homeostasis
---

## Principles of Homeostasis

### What is Homeostasis?

**Definition.** Homeostasis is the maintenance of a constant internal environment despite changes in
the external environment. It is essential for the proper functioning of enzymes and metabolic
processes, which require specific conditions of temperature, pH, water potential, and glucose
concentration.

**Key concept:** Homeostasis involves detecting a change from the set point, initiating a corrective
response, and returning the condition to its normal range. This is achieved through **negative
feedback mechanisms**.

### Negative Feedback

Negative feedback is the most common mechanism of homeostatic control. When a physiological variable
deviates from its set point, the body initiates a response that **reverses** the deviation, bringing
the variable back to normal.

**General pattern of negative feedback:**

1. **Stimulus:** A change in the internal environment (e.g., rise in blood glucose)
2. **Receptor:** Detects the change and sends signals to a coordinator
3. **Coordinator:** Processes the information and sends signals to an effector
4. **Effector:** Carries out a response that reverses the change
5. **Return to normal:** The variable returns to the set point; the receptor detects this and
   reduces its output (feedback)

```
Stimulus --> Receptor --> Coordinator --> Effector --> Response
                                              |
        <--- Reduced output (feedback) -------+
```

**Examples of negative feedback in the body:**

| Physiological Variable | Set Point (Approximate) | Receptor                                 | Coordinator                          | Effector                  | Response                                           |
| ---------------------- | ----------------------- | ---------------------------------------- | ------------------------------------ | ------------------------- | -------------------------------------------------- |
| Blood glucose          | 90 mg/100 cm$^3$        | Pancreas ($\beta$/$\alpha$ cells)        | Pancreas (hormonal)                  | Liver, muscles            | Glycogenesis/glycogenolysis                        |
| Body temperature       | 37 degrees C            | Hypothalamus (thermoreceptors)           | Hypothalamus                         | Skin, blood vessels       | Sweating, vasodilation/shivering, vasoconstriction |
| Blood water potential  | Normal osmolarity       | Hypothalamus (osmoreceptors)             | Hypothalamus --> posterior pituitary | Kidneys (collecting duct) | ADH release; water reabsorption                    |
| Blood pH               | 7.35-7.45               | Chemoreceptors (aorta, carotid, medulla) | Medulla (breathing centre)           | Lungs, kidneys            | Changes in breathing rate; bicarbonate excretion   |

### Positive Feedback

Positive feedback amplifies a change from the set point, pushing the variable further from normal.
Unlike negative feedback, which restores balance, positive feedback accelerates a process until it
is completed.

**Examples of positive feedback:**

| Process                  | Mechanism                                                                                                                                                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ovulation                | Rising oestrogen levels stimulate LH release (positive feedback); the LH surge triggers ovulation. After ovulation, the positive feedback loop ends.                                                                                                                                                                   |
| Blood clotting           | When a vessel is damaged, clotting factors are activated in a cascade; each step activates more factors, amplifying the response until a clot forms.                                                                                                                                                                   |
| Childbirth (parturition) | The baby's head pushes against the cervix, stimulating stretch receptors. Impulses cause the posterior pituitary to release oxytocin, which causes stronger uterine contractions. Stronger contractions push the baby further against the cervix, stimulating more oxytocin release. This cycle continues until birth. |

:::warning A common DSE pitfall is to assume all feedback loops are negative. The DSE specification
requires knowledge of positive feedback examples (ovulation and childbirth are the most commonly
tested). Remember: negative feedback maintains homeostasis; positive feedback amplifies change and
does NOT maintain a constant internal environment. :::

### Components of a Homeostatic Control System

| Component   | Role                                                                                          | Example                                                                              |
| ----------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Receptor    | Detects changes in the internal environment (stimuli)                                         | Thermoreceptors in the hypothalamus and skin detect temperature changes              |
| Coordinator | Processes information from receptors and sends signals to effectors                           | Hypothalamus processes temperature information and sends nerve impulses to effectors |
| Effector    | Carries out the response that restores the variable to its set point                          | Sweat glands secrete sweat; blood vessels dilate or constrict; muscles shiver        |
| Set point   | The normal value or range of the physiological variable                                       | Body temperature: 37 degrees C; blood glucose: approximately 90 mg/100 cm$^3$        |
| Feedback    | The output of the effector is monitored by the receptor, allowing the system to self-regulate | As body temperature falls back to normal, thermoreceptors reduce their firing rate   |

---

## Blood Glucose Regulation

### Normal Blood Glucose Homeostasis

Blood glucose concentration is maintained at approximately **90 mg/100 cm$^3$** (range:
approximately 70-110 mg/100 cm$^3$) by the antagonistic actions of two pancreatic hormones: insulin
and glucagon.

**After a meal (blood glucose rises):**

1. Blood glucose concentration increases as glucose is absorbed from the small intestine
2. $\beta$ cells in the islets of Langerhans detect the elevated glucose
3. $\beta$ cells secrete more **insulin** into the blood
4. Insulin binds to receptors on target cells (liver, muscle, adipose tissue), triggering:

- Increased glucose uptake by cells (via GLUT4 transporter proteins, which are translocated to the
  cell membrane in response to insulin)
- Increased rate of glycolysis (glucose respiration within cells)
- Increased glycogenesis (conversion of glucose to glycogen for storage in liver and muscle)
- Decreased glycogenolysis (inhibition of glycogen breakdown)
- Increased lipogenesis (conversion of glucose to fat for long-term storage)
- Decreased gluconeogenesis (inhibition of new glucose synthesis)

5. Blood glucose concentration decreases back to the set point
6. As blood glucose falls, $\beta$ cells detect this and reduce insulin secretion (**negative
   feedback**)

**Between meals or during exercise (blood glucose falls):**

1. Blood glucose concentration decreases as cells consume glucose
2. $\alpha$ cells in the islets of Langerhans detect the low glucose
3. $\alpha$ cells secrete more **glucagon** into the blood
4. Glucagon binds to receptors on liver cells (hepatocytes), triggering:

- Increased glycogenolysis (breakdown of glycogen into glucose in the liver)
- Increased gluconeogenesis (conversion of amino acids and glycerol to glucose in the liver)
- Increased lipolysis (breakdown of fat into fatty acids and glycerol)

5. Blood glucose concentration increases back to the set point
6. As blood glucose rises, $\alpha$ cells reduce glucagon secretion (**negative feedback**)

### The Role of the Liver in Blood Glucose Regulation

The liver is the central organ in blood glucose homeostasis. It acts as a "glucose buffer," removing
glucose from the blood when levels are high and releasing glucose when levels are low.

| Process         | Trigger            | Description                                                                                          | Direction            |
| --------------- | ------------------ | ---------------------------------------------------------------------------------------------------- | -------------------- |
| Glycogenesis    | High blood glucose | Conversion of glucose to glycogen for storage                                                        | Stores glucose       |
| Glycogenolysis  | Low blood glucose  | Breakdown of glycogen to glucose-6-phosphate, then to free glucose (liver has glucose-6-phosphatase) | Releases glucose     |
| Gluconeogenesis | Low blood glucose  | Synthesis of glucose from non-carbohydrate sources (lactate, amino acids, glycerol)                  | Produces new glucose |

**Critical distinction -- liver vs muscle:**

- The **liver** can both store glycogen AND release free glucose into the blood because hepatocytes
  possess the enzyme **glucose-6-phosphatase**, which removes the phosphate from
  glucose-6-phosphate, allowing free glucose to diffuse into the blood.
- **Muscle cells** can store glycogen and break it down for their own use (glycolysis), but they
  CANNOT release free glucose into the blood because they lack glucose-6-phosphatase. Muscle
  glycogenolysis produces glucose-6-phosphate, which can only be used within the muscle cell itself.

### The Renal Threshold for Glucose

The kidneys normally reabsorb all glucose from the glomerular filtrate in the proximal convoluted
tubule (PCT). The maximum rate at which glucose can be reabsorbed is approximately **375 mg/min**,
corresponding to a blood glucose concentration of approximately **180 mg/100 cm$^3$** (the **renal
threshold**).

- If blood glucose is below 180 mg/100 cm$^3$: all glucose is reabsorbed; no glucose in urine
- If blood glucose exceeds 180 mg/100 cm$^3$: carrier proteins in the PCT become saturated; excess
  glucose remains in the filtrate and appears in the urine (**glycosuria**)

---

## Temperature Regulation (Thermoregulation)

### The Hypothalamus as the Thermoregulatory Centre

The hypothalamus contains the body's **thermostat**. It receives input from two types of
thermoreceptor:

1. **Central thermoreceptors:** Located in the hypothalamus itself, they monitor the temperature of
   the blood passing through the brain
2. **Peripheral thermoreceptors:** Located in the skin (dermis), they monitor the external
   temperature

The hypothalamus compares the input from these receptors with the set point (approximately 37
degrees C) and initiates corrective responses when the temperature deviates.

### Response to Heat (Cooling Mechanisms)

When the body temperature rises above the set point:

| Response                 | Mechanism                                                                                                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Vasodilation             | Arterioles supplying the skin dilate, increasing blood flow to the skin surface. More heat is lost by radiation from the blood to the environment.                                                                       |
| Sweating                 | Sweat glands secrete sweat onto the skin surface. Water in sweat evaporates, absorbing latent heat of vaporisation from the skin (approximately 2.4 kJ per gram of water). This cools the blood in the skin capillaries. |
| Increased breathing      | Panting or faster breathing increases evaporative heat loss from the lungs and respiratory tract.                                                                                                                        |
| Behavioural changes      | Removing clothing; seeking shade; drinking cold fluids                                                                                                                                                                   |
| Decreased metabolic rate | Cells reduce their rate of respiration, producing less heat as a by-product                                                                                                                                              |

### Response to Cold (Warming Mechanisms)

When the body temperature falls below the set point:

| Response                  | Mechanism                                                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vasoconstriction          | Arterioles supplying the skin constrict, reducing blood flow to the skin surface. Less heat is lost from the blood to the environment. More blood is diverted to the core organs to maintain their temperature. |
| Shivering (thermogenesis) | Rapid, involuntary contractions of skeletal muscles. Muscle respiration generates heat as a by-product, warming the body. Shivering can increase heat production by 2-5 times the resting rate.                 |
| Piloerection              | Hair erector muscles contract, causing body hairs to stand upright. This traps a layer of insulating air next to the skin (more significant in furry animals than in humans).                                   |
| Increased metabolic rate  | Thyroid gland releases more thyroxine, increasing the basal metabolic rate of cells. Cells respire more, producing more heat. Adrenaline also increases metabolic rate.                                         |
| Behavioural changes       | Putting on warm clothing; curling up to reduce surface area; seeking shelter; drinking hot drinks                                                                                                               |
| Brown fat metabolism      | Brown adipose tissue (especially in newborns) contains many mitochondria that can uncouple respiration from ATP production, releasing energy directly as heat (non-shivering thermogenesis).                    |

### Worked Example: Thermoregulation Calculation

A person produces 150 g of sweat per hour during exercise in a hot environment. The latent heat of
vaporisation of water is 2.4 kJ/g. Calculate the rate of heat loss through sweating.

<details>
<summary>Solution</summary>

Heat loss = mass of sweat $\times$ latent heat of vaporisation =
$150 \mathrm{ g} \times 2.4 \mathrm{ kJ/g} = 360 \mathrm{ kJ/hour}$

This is a significant contribution to heat loss. The basal metabolic rate produces approximately 300
kJ/hour, so sweating during exercise can remove more heat than the body produces at rest. This
explains why adequate hydration is critical during exercise in hot environments -- sweat that is not
replaced leads to dehydration and reduced blood volume, impairing thermoregulation.

---

## Osmoregulation

### The Kidneys and Water Balance

The kidneys regulate the water potential of the blood by adjusting the volume and concentration of
urine produced. This process is called **osmoregulation**.

**Key principle:** If blood water potential is too low (blood is too concentrated), the kidneys
produce a small volume of concentrated urine to conserve water. If blood water potential is too high
(blood is too dilute), the kidneys produce a large volume of dilute urine to excrete excess water.

### ADH and the Regulation of Water Balance

**Antidiuretic hormone (ADH / vasopressin)** is the key hormone in osmoregulation.

**Synthesis and release:**

- ADH is produced by neurosecretory cells in the **hypothalamus**
- It is transported along their axons and stored in the **posterior pituitary gland**
- It is released into the blood when needed

**When blood water potential is low (dehydration):**

1. Osmoreceptors in the hypothalamus detect the decreased blood water potential (increased solute
   concentration)
2. The hypothalamus stimulates the posterior pituitary to release ADH into the blood
3. ADH binds to receptors on the cells of the collecting duct
4. This triggers the insertion of **aquaporin** (water channel) proteins into the collecting duct
   cell membrane
5. The collecting duct becomes more permeable to water
6. Water is reabsorbed from the collecting duct by osmosis into the concentrated medullary tissue
   fluid (maintained by the counter-current multiplier of the loop of Henle)
7. Less water is lost in the urine: urine volume decreases, urine concentration increases
8. Blood water potential increases back to normal (negative feedback)
9. The osmoreceptors reduce their stimulation of the posterior pituitary, decreasing ADH release

**When blood water potential is high (over-hydration):**

1. Osmoreceptors detect the increased blood water potential (decreased solute concentration)
2. The hypothalamus reduces stimulation of the posterior pituitary
3. Less ADH is released into the blood
4. With less ADH, collecting duct cells remove aquaporin channels from their membranes
5. The collecting duct becomes less permeable to water
6. Less water is reabsorbed: urine volume increases, urine becomes more dilute
7. Excess water is excreted, and blood water potential returns to normal (negative feedback)

### The Nephron: Detailed Structure and Function

The nephron is the functional unit of the kidney. Each kidney contains approximately one million
nephrons.

| Region                           | Function                                                                                                                                                                                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Renal (Bowman's) capsule         | Ultrafiltration: high blood pressure in the glomerulus forces small molecules (water, glucose, urea, ions) out of the blood into the capsule                                                                                             |
| Proximal convoluted tubule (PCT) | Selective reabsorption: reabsorbs ALL glucose, ALL amino acids, approximately 85% of water, and most $\mathrm{Na}^+$ and $\mathrm{Cl}^-$ by active transport and co-transport                                                            |
| Loop of Henle                    | Creates a concentration gradient in the medulla via the counter-current multiplier. Descending limb: permeable to water (water out). Ascending limb: actively transports $\mathrm{Na}^+$ and $\mathrm{Cl}^-$ out (impermeable to water). |
| Distal convoluted tubule (DCT)   | Fine-tuning of water and ion balance; regulated by aldosterone ($\mathrm{Na}^+$ reabsorption)                                                                                                                                            |
| Collecting duct                  | Regulated by ADH: water reabsorption depends on ADH level; permeability controlled by aquaporin channels                                                                                                                                 |

### The Counter-Current Multiplier

The loop of Henle creates and maintains a concentration gradient in the medulla, with tissue fluid
becoming progressively more concentrated from the cortex to the inner medulla (approximately 300
mOsm at the cortex to approximately 1200 mOsm at the inner medulla).

**Mechanism:**

1. **Descending limb:** Water passes out by osmosis into the increasingly concentrated medullary
   tissue fluid. The filtrate becomes more concentrated as it descends.
2. **Hairpin turn:** At the bottom of the loop, the filtrate is at its most concentrated.
3. **Ascending limb (thin segment):** $\mathrm{Na}^+$ and $\mathrm{Cl}^-$ diffuse out passively into
   the medullary tissue fluid.
4. **Ascending limb (thick segment):** $\mathrm{Na}^+$ and $\mathrm{Cl}^-$ are actively transported
   OUT of the ascending limb into the medullary tissue fluid. The ascending limb is impermeable to
   water, so the filtrate becomes increasingly dilute as it ascends.
5. **Counter-current flow:** Because the descending and ascending limbs flow in opposite directions
   (counter-current), the active transport of salt from the ascending limb continually adds to the
   concentration of the medullary tissue fluid adjacent to the descending limb. This amplifies the
   gradient (multiplier effect).

**Purpose of the medullary concentration gradient:** The concentrated medullary tissue fluid
provides the osmotic gradient that drives water reabsorption from the collecting duct when ADH is
present. Without this gradient, the kidneys could not produce concentrated urine.

---

## Blood pH Regulation

### Why Blood pH Must Be Regulated

Blood pH is normally maintained between **7.35 and 7.45**. Enzymes and metabolic processes are
highly sensitive to pH changes. A blood pH below 7.35 is called **acidosis**; above 7.45 is called
**alkalosis**. Either extreme can be fatal.

### Buffer Systems

A buffer resists changes in pH by minimising the effect of adding acid or alkali.

**The bicarbonate buffer system:**

$$\mathrm{H}^+ + \mathrm{HCO}_3^- \rightleftharpoons \mathrm{H}_2\mathrm{CO}_3 \rightleftharpoons \mathrm{CO}_2 + \mathrm{H}_2\mathrm{O}$$

- When $\mathrm{H}^+$ ions are added (acid): they combine with $\mathrm{HCO}_3^-$ to form
  $\mathrm{H}_2\mathrm{CO}_3$Which dissociates into $\mathrm{CO}_2$ and $\mathrm{H}_2\mathrm{O}$.
  The $\mathrm{CO}_2$ is exhaled by the lungs.
- When $\mathrm{H}^+$ ions are removed (alkali): $\mathrm{H}_2\mathrm{CO}_3$ dissociates to release
  more $\mathrm{H}^+$Restoring pH.

**Haemoglobin as a buffer:**

- Haemoglobin can bind $\mathrm{H}^+$ ions, acting as a buffer against acidification.
- In the tissues: $\mathrm{CO}_2$ diffuses into red blood cells and is converted to
  $\mathrm{HCO}_3^-$ and $\mathrm{H}^+$ by carbonic anhydrase. Haemoglobin binds the
  $\mathrm{H}^+$Preventing a large pH drop.
- In the lungs: the reaction reverses; $\mathrm{H}^+$ is released, combines with
  $\mathrm{HCO}_3^-$And $\mathrm{CO}_2$ is exhaled.

### Respiratory Regulation of pH

- Increased $\mathrm{CO}_2$ in the blood produces carbonic acid, lowering pH
- Chemoreceptors detect the decrease in pH and stimulate the ventilation centre in the medulla
- Breathing rate and depth increase, exhaling more $\mathrm{CO}_2$
- Blood pH rises back to normal
- This is a rapid response (seconds to minutes) but can only compensate for changes related to
  $\mathrm{CO}_2$

### Renal Regulation of pH

The kidneys provide a slower but more powerful mechanism for pH regulation (takes hours to days):

- In acidosis (low pH): the kidneys excrete more $\mathrm{H}^+$ ions in the urine and reabsorb more
  $\mathrm{HCO}_3^-$ into the blood. Ammonia ($\mathrm{NH}_3$) produced by the kidney tubule cells
  buffers $\mathrm{H}^+$ in the urine, forming ammonium ions ($\mathrm{NH}_4^+$) that are excreted.
- In alkalosis (high pH): the kidneys excrete more $\mathrm{HCO}_3^-$ in the urine and reabsorb
  fewer $\mathrm{H}^+$ ions, allowing pH to decrease.

---

## Diabetes Mellitus

### Type 1 Diabetes

| Feature   | Detail                                                                                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause     | Autoimmune destruction of $\beta$ cells in the islets of Langerhans                                                                                                             |
| Insulin   | NOT produced (absolute insulin deficiency)                                                                                                                                      |
| Onset     | in childhood or adolescence                                                                                                                                                     |
| Treatment | Insulin injections (lifelong); blood glucose monitoring; dietary management                                                                                                     |
| Mechanism | Without insulin, cells cannot take up glucose; blood glucose rises; glucose appears in urine (glycosuria) when it exceeds the renal threshold (approximately 180 mg/100 cm$^3$) |

### Type 2 Diabetes

| Feature      | Detail                                                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cause        | Body cells become resistant to insulin (reduced sensitivity of insulin receptors); $\beta$ cells may gradually decline                                                                     |
| Insulin      | Initially produced (sometimes at higher levels than normal); eventually production may decrease                                                                                            |
| Onset        | in adults (increasingly seen in younger people); strongly linked to obesity, physical inactivity, and diet                                                                                 |
| Treatment    | Lifestyle changes (diet, exercise); oral medication (e.g., metformin, which increases insulin sensitivity and reduces hepatic glucose production); insulin may be needed in advanced cases |
| Risk factors | Obesity, sedentary lifestyle, family history, high-calorie diet, ageing                                                                                                                    |

### Symptoms of Diabetes

| Symptom                             | Mechanism                                                                                                                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Hyperglycaemia (high blood glucose) | Insulin deficiency or resistance prevents glucose uptake by cells                                                                      |
| Glycosuria (glucose in urine)       | Blood glucose exceeds the renal threshold; PCT carrier proteins are saturated                                                          |
| Polyuria (excessive urination)      | Excess glucose in the filtrate lowers water potential; less water reabsorbed by osmosis; large volume of urine produced                |
| Polydipsia (excessive thirst)       | Loss of water in urine reduces blood volume and increases blood osmolarity, detected by hypothalamic osmoreceptors, stimulating thirst |
| Weight loss                         | Body breaks down fat and protein for energy (since glucose cannot enter cells); loss of calories in urine (glucose)                    |
| Fatigue                             | Cells cannot use glucose efficiently for energy                                                                                        |
| Blurred vision                      | High blood glucose causes osmotic changes in the lens of the eye                                                                       |
| Slow wound healing                  | High glucose impairs immune function and circulation                                                                                   |

### Long-Term Complications of Diabetes

| Complication                | Mechanism                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Cardiovascular disease      | Damage to blood vessels from chronic hyperglycaemia; increased atherosclerosis; increased risk of heart attack and stroke |
| Kidney damage (nephropathy) | High glucose damages the glomerular filtration membrane, reducing kidney function; can lead to kidney failure             |
| Nerve damage (neuropathy)   | High glucose damages peripheral nerves, causing numbness, tingling, and pain, especially in the extremities               |
| Retinopathy                 | Damage to blood vessels in the retina; can cause blindness                                                                |
| Foot ulcers and amputation  | Reduced sensation (neuropathy) and poor circulation lead to undetected injuries and poor healing                          |

### Worked Example: Diabetes and Kidney Function

A patient with uncontrolled Type 1 diabetes has a fasting blood glucose concentration of 320 mg/100
cm$^3$. The renal threshold for glucose is 180 mg/100 cm$^3$. Normal GFR produces 180 dm$^3$ of
filtrate per day. The maximum rate of glucose reabsorption in the PCT is 375 mg/min.

(a) Calculate the mass of glucose filtered per day. (b) Calculate the mass of glucose reabsorbed per
day. (c) Calculate the mass of glucose excreted in urine per day. (d) Explain why this patient
produces large volumes of urine.

</details>
<summary>Solution</summary>

(a) Glucose filtered per day = concentration $\times$ volume =
$320 \mathrm{ mg/100 cm}^3 \times 180 \times 10 \mathrm{ dm}^3$

$= 320 \times 10 \mathrm{ mg/dm}^3 \times 180 \mathrm{ dm}^3 = 576\,000 \mathrm{ mg/day} = 576 \mathrm{ g/day}$

(b) Maximum glucose reabsorption =
$375 \mathrm{ mg/min} \times 60 \times 24 = 540\,000 \mathrm{ mg/day} = 540 \mathrm{ g/day}$

(c) Glucose excreted = glucose filtered - glucose reabsorbed = $576 - 540 = 36 \mathrm{ g/day}$

(d) The excess glucose in the filtrate (36 g/day that is not reabsorbed) lowers the water potential
of the tubule fluid. Less water is reabsorbed from the nephron by osmosis (because the water
potential gradient between the tubule fluid and the blood is reduced). This produces a large volume
of dilute urine (polyuria). The loss of excess water reduces blood volume and increases blood
osmolarity, which stimulates osmoreceptors in the hypothalamus, triggering thirst (polydipsia).

---

## Common Pitfalls

1. **Confusing negative and positive feedback:** Negative feedback reverses a change and maintains
   homeostasis (e.g., blood glucose regulation). Positive feedback amplifies a change and does not
   maintain homeostasis (e.g., ovulation, childbirth). Do not write that ovulation is controlled by
   negative feedback.

2. **Writing that ADH is produced by the posterior pituitary:** ADH is PRODUCED by neurosecretory
   cells in the HYPOTHALAMUS. It is STORED and RELEASED by the posterior pituitary. This distinction
   is frequently tested.

3. **Confusing insulin and glucagon effects:** Insulin LOWERS blood glucose (promotes uptake and
   storage). Glucagon RAISES blood glucose (promotes glycogenolysis and gluconeogenesis). Insulin is
   from $\beta$ cells; glucagon is from $\alpha$ cells.

4. **Writing that muscle cells release glucose into the blood:** Muscle cells break down glycogen
   for their own use but CANNOT release free glucose because they lack glucose-6-phosphatase. Only
   the liver can release glucose into the blood.

5. **Stating that both limbs of the loop of Henle are permeable to water:** Only the DESCENDING limb
   is permeable to water. The ASCENDING limb is impermeable to water but actively transports
   $\mathrm{Na}^+$ and $\mathrm{Cl}^-$ out. This asymmetry is essential for creating the medullary
   concentration gradient.

6. **Writing that high ADH causes dilute urine:** The opposite is true. High ADH causes concentrated
   urine (more water is reabsorbed). Low ADH causes dilute urine (more water is excreted).

7. **Confusing the roles of receptors and effectors:** Receptors DETECT changes; effectors CARRY OUT
   responses. Do not write that the skin "detects" cold (skin has thermoreceptors that detect cold,
   and the skin is also an effector -- blood vessels constrict/dilate, sweat glands secrete).

8. **Writing that temperature regulation is controlled by hormones alone:** Temperature regulation
   is primarily controlled by the NERVOUS system (hypothalamus detects changes and sends nerve
   impulses to effectors). Thyroxine and adrenaline play supporting roles in the cold response but
   are not the primary mechanism.

9. **Confusing acidosis and alkalosis:** Acidosis = low blood pH (below 7.35); alkalosis = high
   blood pH (above 7.45). High $\mathrm{CO}_2$ causes acidosis (respiratory acidosis). Excessive
   vomiting (loss of stomach acid) can cause alkalosis (metabolic alkalosis).

10. **Writing that Type 2 diabetes involves no insulin production:** Type 2 diabetes involves
    insulin RESISTANCE, not absence of insulin. In the early stages, insulin levels may be normal or
    even elevated. Type 1 diabetes involves NO insulin production.

---

## Problem Set

**Problem 1:** Explain the difference between negative and positive feedback. For each type,
describe one example of its role in human physiology and explain why it is appropriate for that
physiological process.

If you get this wrong, revise: Principles of Homeostasis -- Negative Feedback; Positive Feedback

<details>
<summary>Solution</summary>

**Negative feedback** reverses a deviation from the set point, restoring the variable to normal.
Example: blood glucose regulation. After a meal, blood glucose rises; insulin is released, promoting
glucose uptake and storage; blood glucose falls back to normal; insulin secretion decreases. This is
appropriate because the body needs to maintain blood glucose within a narrow range for cellular
function.

**Positive feedback** amplifies a deviation, pushing the variable further from the set point.
Example: childbirth. Pressure of the baby's head on the cervix triggers oxytocin release; oxytocin
causes stronger uterine contractions; stronger contractions push the baby further against the
cervix, stimulating more oxytocin release. This is appropriate because the process needs to reach
completion (birth) rather than returning to a set point. Once the baby is born, the positive
feedback loop ends.

**Problem 2:** Describe the mechanism by which ADH regulates water balance in the kidneys. Explain
why a person in a hot desert environment would have high blood ADH levels.

If you get this wrong, revise: Osmoregulation -- ADH and the Regulation of Water Balance

</details>
<summary>Solution</summary>

ADH is released from the posterior pituitary when blood water potential is low. It binds to
receptors on collecting duct cells, triggering the insertion of aquaporin channels into the cell
membrane. This makes the collecting duct more permeable to water. Water is reabsorbed from the
collecting duct by osmosis into the concentrated medullary tissue fluid (maintained by the loop of
Henle counter-current multiplier). The result is a small volume of concentrated urine, conserving
water in the body.

In a hot desert, the person loses water through sweating (thermoregulation) and exhalation. This
reduces blood volume and increases blood solute concentration (lowers blood water potential).
Osmoreceptors in the hypothalamus detect this and stimulate the posterior pituitary to release more
ADH. The kidneys produce a small volume of concentrated urine to minimise further water loss,
helping the person survive in the arid environment.

**Problem 3:** Compare Type 1 and Type 2 diabetes in terms of cause, insulin levels, age of onset,
treatment, and the mechanism by which blood glucose rises to harmful levels.

If you get this wrong, revise: Diabetes Mellitus -- Type 1 Diabetes; Type 2 Diabetes

<details>
<summary>Solution</summary>

| Feature   | Type 1 Diabetes                                                             | Type 2 Diabetes                                                                        |
| --------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Cause     | Autoimmune destruction of $\beta$ cells                                     | Insulin resistance (reduced receptor sensitivity); genetic and lifestyle factors       |
| Insulin   | Not produced (absolute deficiency)                                          | Initially normal or elevated; may decrease over time (relative deficiency)             |
| Onset     | childhood/adolescence                                                       | adulthood (but increasingly in younger people)                                         |
| Treatment | Insulin injections (lifelong)                                               | Diet, exercise, oral medication; insulin in advanced cases                             |
| Mechanism | No insulin means cells cannot take up glucose; glucose accumulates in blood | Cells become resistant to insulin; glucose uptake is impaired despite insulin presence |

In both types, blood glucose rises because glucose cannot enter cells efficiently. Excess glucose is
excreted in the urine (glycosuria), causing water loss (polyuria) and thirst (polydipsia). Long-term
complications (cardiovascular disease, kidney damage, nerve damage, retinopathy) result from chronic
hyperglycaemia damaging blood vessels and tissues.

### Gestational Diabetes

Gestational diabetes mellitus (GDM) is a form of diabetes that develops during pregnancy and
resolves after childbirth.

| Feature         | Detail                                                                                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause           | Placental hormones (human placental lactogen, progesterone, cortisol) cause insulin resistance in maternal tissues; the pancreas may not produce enough additional insulin to compensate |
| Onset           | during the second or third trimester (24-28 weeks)                                                                                                                                       |
| Risk factors    | Obesity, family history of Type 2 diabetes, previous GDM, maternal age over 35, certain ethnicities                                                                                      |
| Risks to mother | Increased risk of pre-eclampsia; increased risk of developing Type 2 diabetes later in life                                                                                              |
| Risks to foetus | Macrosomia (excessive birth weight); hypoglycaemia after birth; respiratory distress syndrome; increased risk of obesity and Type 2 diabetes in adulthood                                |
| Management      | Dietary control; exercise; blood glucose monitoring; insulin if needed (oral hypoglycaemics are generally avoided in pregnancy)                                                          |

---

## Endocrine Disorders

### Thyroid Disorders

**Hyperthyroidism (overactive thyroid):**

| Feature   | Detail                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause     | Graves' disease (autoimmune); thyroid nodule; excessive TSH                                                                                                                        |
| Hormone   | Excess thyroxine ($\mathrm{T}_4$) and triiodothyronine ($\mathrm{T}_3$)                                                                                                            |
| Symptoms  | Increased BMR; weight loss despite increased appetite; rapid heart rate (tachycardia); anxiety; tremor; heat intolerance; sweating; exophthalmos (bulging eyes in Graves' disease) |
| Treatment | Anti-thyroid drugs (e.g., carbimazole); radioactive iodine; surgical removal of part or all of the thyroid                                                                         |

**Hypothyroidism (underactive thyroid):**

| Feature   | Detail                                                                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cause     | Hashimoto's thyroiditis (autoimmune); iodine deficiency; surgical removal; radioactive iodine treatment                                              |
| Hormone   | Insufficient thyroxine ($\mathrm{T}_4$) and triiodothyronine ($\mathrm{T}_3$)                                                                        |
| Symptoms  | Decreased BMR; weight gain; fatigue; cold intolerance; dry skin; slow heart rate (bradycardia); depression; myxoedema (swelling of skin and tissues) |
| Treatment | Thyroxine replacement therapy (daily levothyroxine tablets)                                                                                          |

### Adrenal Disorders

**Addison's disease (adrenal insufficiency):**

- Destruction of the adrenal cortex (autoimmune or tuberculosis)
- Reduced production of cortisol and aldosterone
- Symptoms: fatigue, weight loss, low blood pressure, hyperpigmentation of skin, salt craving,
  hypoglycaemia
- Treatment: cortisol replacement (hydrocortisone); fludrocortisone (to replace aldosterone)

**Cushing's syndrome:**

- Excess cortisol (from prolonged corticosteroid medication or adrenal tumour)
- Symptoms: weight gain (especially abdominal), moon face, buffalo hump, thin skin, easy bruising,
  high blood pressure, muscle weakness, hyperglycaemia

### Worked Example: Endocrine Feedback Disorder

A patient presents with weight gain, fatigue, cold intolerance, and a slow heart rate. Blood tests
show elevated TSH and low $\mathrm{T}_4$. Explain the normal negative feedback loop controlling
thyroid hormone levels and how it has been disrupted in this patient.

### Details

<summary>Solution</summary>

**Normal negative feedback loop:**

1. The hypothalamus releases TRH (thyrotropin-releasing hormone), which stimulates the anterior
   pituitary
2. The anterior pituitary releases TSH (thyroid-stimulating hormone), which stimulates the thyroid
   gland
3. The thyroid gland produces and releases $\mathrm{T}_4$ (thyroxine) and $\mathrm{T}_3$
   (triiodothyronine)
4. $\mathrm{T}_4$ and $\mathrm{T}_3$ exert negative feedback on both the hypothalamus (reducing TRH)
   and the anterior pituitary (reducing TSH)
5. When $\mathrm{T}_4$/$\mathrm{T}_3$ levels are high, TRH and TSH decrease; when levels are low,
   TRH and TSH increase

**In this patient (hypothyroidism):**

The thyroid gland is not producing enough $\mathrm{T}_4$ (low $\mathrm{T}_4$). The reduced negative
feedback means the pituitary continues to produce high levels of TSH (elevated TSH) in an attempt to
stimulate the thyroid. The thyroid is unable to respond adequately (due to autoimmune destruction in
Hashimoto's thyroiditis or other damage). The symptoms are explained by the lack of thyroxine: low
BMR causes fatigue and weight gain; low $\mathrm{T}_3$ reduces metabolic heat production, causing
cold intolerance; low thyroxine reduces the heart's sensitivity to catecholamines, causing
bradycardia.

</details>

---

---

## Thermoregulation in Non-Mammals

### Temperature Regulation in Ectotherms

Ectotherms (reptiles, amphibians, fish, invertebrates) rely primarily on behavioural and
physiological mechanisms rather than metabolic heat production to regulate their body temperature.

| Mechanism                    | Description                                                                                        | Example                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Basking                      | Moving to a warm area and exposing the body surface to direct sunlight                             | Lizards on rocks; snakes in sunlight                               |
| Sheltering                   | Moving to shade, burrows, or crevices during hot periods                                           | Snakes in rock crevices; toads in burrows                          |
| Nocturnal activity           | Being active at night when temperatures are lower                                                  | Geckos; desert rodents                                             |
| Countercurrent heat exchange | Alternating the direction of blood flow in limbs to either conserve or lose heat depending on need | Dolphin flukes; woodpecker feet                                    |
| Altering body shape          | Flattening the body to increase surface area for heat loss or reducing it to conserve heat         | Horned vipers flatten to increase surface area for heat absorption |
| Adjusting heart rate         | Increasing heart rate to deliver more blood to the body surface for heat loss                      | Lizards in sun increase heart rate                                 |
| Changing colour              | Some reptiles can darken their skin to absorb more heat                                            | Bearded dragons darken when cold                                   |

### Temperature Regulation in Endotherms

Birds and mammals generate heat internally through metabolism and use insulation and behavioural
mechanisms to maintain body temperature.

| Mechanism                   | Description                                                                                                                                       | Example                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Shivering thermogenesis     | Rapid, involuntary muscle contractions that generate heat as a by-product of respiration                                                          | Mammals in cold environments               |
| Non-shivering thermogenesis | Brown adipose tissue (BAT) uncouples respiration from ATP production, releasing energy directly as heat; stimulated by sympathetic nervous system | Newborn human infants; hibernating mammals |
| Piloerection                | Hair erector muscles contract, trapping insulating air next to the skin                                                                           | Goosebumps in humans; mammals fluffing fur |
| Vasoconstriction            | Reducing blood flow to the skin surface to reduce heat loss                                                                                       | Mammals in cold environments               |
| Insulation (fur/blubber)    | Trapped air in fur or fat provides effective insulation against heat loss                                                                         | Arctic mammals have thick blubber layers   |
| Huddling                    | Group behaviour to reduce surface area to volume ratio; reduces heat loss per individual                                                          | Penguins in the Antarctic; macaques        |
| Nest building               | Constructing insulated structures to reduce heat loss                                                                                             | Birds building insulated nests             |
| Countercurrent exchange     | Arterial blood flowing to limbs passes close to venous blood returning from limbs, allowing heat exchange between them                            | Dolphin flukes; wolf paws                  |

### Hibernation and Aestivation

**Hibernation:** A state of reduced metabolic rate and body temperature during winter, allowing
animals to survive when food is scarce.

| Feature                | Description                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Body temperature       | Drops to near ambient (1-5 degrees C in many mammals); dramatically reduces metabolic rate (to approximately 2-5% of normal) |
| Heart rate             | Drops to approximately 5% of normal                                                                                          |
| Breathing rate         | Very slow and shallow                                                                                                        |
| Fat reserves           | Accumulated brown fat provides energy throughout hibernation                                                                 |
| Periodic arousal       | Animals periodically wake up to urinate, feed briefly, and restore normal body temperature                                   |
| Animals that hibernate | Bats, hedgehogs, marmots, ground squirrels, dormice, bears (shallow hibernation)                                             |

**Aestivation:** A similar state of reduced metabolic rate during summer, triggered by heat and
drought. Common in desert animals (e.g., desert tortoise, African lungfish).

### Adaptations of Arctic Animals

| Adaptation                    | Mechanism for Heat Conservation                                                                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Thick blubber layer           | 5-10 cm of subcutaneous fat; very effective insulation (thermal conductivity approximately 0.25 W/m/K)                                                                               |
| Dense underfur                | Trapped air in dense fur provides insulation; hollow guard hairs in polar bears increase insulation further                                                                          |
| Small ears and tail           | Reduced surface area to volume ratio minimises heat loss                                                                                                                             |
| Counter-current heat exchange | Arterioles in legs are wrapped by veins, allowing heat exchange; warm arterial blood transfers heat to returning venous blood near the body, minimising heat loss at the extremities |
| Behavioural adaptations       | Huddling; building snow dens; reducing activity; sheltering from wind                                                                                                                |

---

## Thermoregulation in Non-Mammals

### Temperature Regulation in Ectotherms

Ectotherms (reptiles, amphibians, fish, invertebrates) rely primarily on behavioural and
physiological mechanisms to regulate their body temperature rather than metabolic heat production.

| Mechanism               | Description                                                                                        | Example                                   |
| ----------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Basking                 | Moving to a warm area and exposing the body surface to direct sunlight                             | Lizards on rocks; snakes in sunlight      |
| Sheltering              | Moving to shade, burrows, or crevices during hot periods                                           | Snakes in rock crevices; toads in burrows |
| Nocturnal activity      | Being active at night when temperatures are lower                                                  | Geckos; desert rodents                    |
| Countercurrent exchange | Alternating the direction of blood flow in limbs to either conserve or lose heat depending on need | Dolphin flukes; woodpecker feet           |
| Altering body shape     | Flattening the body to increase surface area for heat loss or reducing it to conserve heat         | Horned vipers flatten to absorb more heat |
| Adjusting heart rate    | Increasing heart rate to deliver more blood to the body surface for heat loss                      | Lizards in sun increase heart rate        |

### Temperature Regulation in Endotherms

| Mechanism                   | Description                                                                                                                                       | Example                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Shivering thermogenesis     | Rapid, involuntary muscle contractions that generate heat as a by-product of respiration                                                          | Mammals in cold environments               |
| Non-shivering thermogenesis | Brown adipose tissue (BAT) uncouples respiration from ATP production, releasing energy directly as heat; stimulated by sympathetic nervous system | Newborn human infants; hibernating mammals |
| Piloerection                | Hair erector muscles contract, trapping insulating air next to the skin                                                                           | Goosebumps in humans; mammals fluffing fur |
| Vasoconstriction            | Reducing blood flow to the skin surface to reduce heat loss                                                                                       | Mammals in cold environments               |
| Insulation (fur/blubber)    | Trapped air in fur or fat provides effective insulation against heat loss                                                                         | Arctic mammals have thick blubber layers   |
| Huddling                    | Group behaviour to reduce surface area to volume ratio; reduces heat loss per individual                                                          | Penguins in the Antarctic; macaques        |

### Hibernation and Aestivation

**Hibernation:** A state of reduced metabolic rate and body temperature during winter.

| Feature                | Description                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| Body temperature       | Drops to near ambient (1-5 degrees C); metabolic rate drops to approximately 2-5% of normal |
| Heart rate             | Drops to approximately 5% of normal                                                         |
| Breathing rate         | Very slow and shallow                                                                       |
| Fat reserves           | Accumulated brown fat provides energy throughout hibernation                                |
| Periodic arousal       | Animals periodically wake to urinate, feed briefly, and restore normal body temperature     |
| Animals that hibernate | Bats, hedgehogs, marmots, ground squirrels, dormice, bears (shallow hibernation)            |

**Aestivation:** Similar state of reduced metabolic rate during summer, triggered by heat and
drought. Common in desert animals (e.g., desert tortoise, African lungfish).

### Adaptations of Arctic Animals

| Adaptation               | Mechanism for Heat Conservation                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Thick blubber layer      | 5-10 cm of subcutaneous fat; very effective insulation (thermal conductivity approximately 0.25 W/m/K)                                                                    |
| Dense underfur           | Trapped air in dense fur provides insulation; hollow guard hairs in polar bears increase insulation further                                                               |
| Small ears and tail      | Reduced surface area to volume ratio minimises heat loss                                                                                                                  |
| Counter-current exchange | Arterioles in legs wrapped by veins allows heat exchange; warm arterial blood transfers heat to returning venous blood near the body, minimising heat loss at extremities |
| Behavioural adaptations  | Huddling; building snow dens; reducing activity; sheltering from wind                                                                                                     |

---

## The Nephron in Detail

### Structure of the Nephron

| Component                        | Location in Kidney                                                               | Description                                                                                                                                                     |
| -------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Renal (Bowman's) capsule         | Cortex                                                                           | Cup-shaped structure that surrounds the glomerulus; consists of an outer parietal layer (simple squamous epithelium) and an inner visceral layer (podocytes)    |
| Glomerulus                       | Cortex                                                                           | Knot of capillaries between the afferent and efferent arterioles; high pressure due to the wide afferent and narrow efferent arteriole; site of ultrafiltration |
| Proximal convoluted tubule (PCT) | Cortex                                                                           | Highly coiled tube immediately after the renal capsule; lined with cuboidal epithelial cells with microvilli (brush border) and many mitochondria               |
| Loop of Henle                    | Medulla (descending limb and thin ascending limb); cortex (thick ascending limb) | Hairpin loop that creates a concentration gradient in the medulla; essential for producing concentrated urine                                                   |
| Distal convoluted tubule (DCT)   | Cortex                                                                           | Coiled tube after the loop of Henle; lined with cuboidal epithelial cells (fewer microvilli than PCT); site of selective reabsorption and secretion             |
| Collecting duct                  | Passes from cortex through the medulla to the renal pelvis                       | Receives filtrate from multiple nephrons; permeability to water is controlled by ADH; delivers urine to the renal pelvis                                        |
| Peritubular capillaries          | Surround the PCT and DCT; arise from the efferent arteriole                      | Reabsorb water, glucose, amino acids, and ions from the tubules back into the blood; secrete waste products into the tubules                                    |
| Vasa recta                       | Hairpin-shaped capillaries that run alongside the loop of Henle                  | Maintain the medullary concentration gradient by counter-current exchange                                                                                       |

### Ultrafiltration

Ultrafiltration is the process by which blood is filtered in the glomerulus to form the glomerular
filtrate (a protein-free, cell-free fluid similar to blood plasma).

**Conditions for ultrafiltration:**

| Condition               | Description                                                                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| High blood pressure     | The afferent arteriole is wider than the efferent arteriole, creating high hydrostatic pressure (~55 mmHg) in the glomerulus that forces fluid out of the capillaries                |
| Fenestrated endothelium | The capillary walls of the glomerulus have pores (fenestrations) that allow water and small solutes to pass through but restrict large molecules and cells                           |
| Basement membrane       | A thick, negatively charged glycoprotein layer between the endothelium and the podocytes; acts as an additional filter; repels large proteins (which are negatively charged)         |
| Podocytes               | Specialised epithelial cells of the renal capsule with foot processes (pedicels) that wrap around the capillaries; filtration slits between the foot processes act as a final filter |

**What is filtered?** Water, glucose, amino acids, urea, ions (Na$^+$K$^+$Cl$^-$Ca$^{2+}$HCO$_3^-$),
vitamins -- everything in blood plasma EXCEPT large proteins (e.g., albumin, globulins) and blood
cells.

### Selective Reabsorption

| Substance                | PCT Reabsorption (approximate %) | Mechanism                                                                                                                                                        |
| ------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Water                    | ~65%                             | Osmosis (following the reabsorption of solutes)                                                                                                                  |
| Sodium ions (Na$^+$)     | ~65%                             | Active transport (Na$^+$/K$^+$-ATPase pump on the basolateral membrane); co-transport with glucose and amino acids on the apical membrane                        |
| Glucose                  | 100% (in healthy kidneys)        | Secondary active transport (co-transport with Na$^+$ via SGLT transporters on the apical membrane)                                                               |
| Amino acids              | 100% (in healthy kidneys)        | Secondary active transport (co-transport with Na$^+$)                                                                                                            |
| Potassium ions (K$^+$)   | ~65%                             | Active transport and diffusion                                                                                                                                   |
| Calcium ions (Ca$^{2+}$) | ~65%                             | Active transport (regulated by parathyroid hormone)                                                                                                              |
| Bicarbonate (HCO$_3^-$)  | ~85%                             | Reabsorbed as CO$_2$ (converted to H$_2$CO$_3$ then CO$_2$ and H$_2$O inside the cell; CO$_2$ diffuses across and is reconverted to HCO$_3^-$ on the other side) |
| Urea                     | ~50%                             | Passive diffusion (reabsorbed along with water)                                                                                                                  |

### The Countercurrent Multiplier

The loop of Henle acts as a countercurrent multiplier to create a concentration gradient in the
medulla:

1. **Descending limb:** Permeable to water but NOT to ions. As the filtrate descends into the
   increasingly concentrated medulla, water leaves the filtrate by osmosis; the filtrate becomes
   more concentrated
2. **Thin ascending limb:** Permeable to ions (Na$^+$Cl$^-$) but NOT to water. Na$^+$ and Cl$^-$
   diffuse out into the medulla, making the medullary interstitial fluid more concentrated; the
   filtrate becomes less concentrated
3. **Thick ascending limb:** Impermeable to water; actively transports Na$^+$K$^+$And Cl$^-$ OUT of
   the filtrate (using Na$^+$/K$^+$-ATPase and the Na$^+$-K$^+$-2Cl$^-$ co-transporter). This
   further increases the concentration of the medullary interstitial fluid
4. The countercurrent flow (descending and ascending limbs flowing in opposite directions) amplifies
   the concentration gradient
5. Result: the medullary interstitial fluid at the bottom of the loop is hypertonic (up to 1200
   mOsm/L, compared to ~300 mOsm/L in the cortex)
6. This gradient allows the collecting duct to reabsorb water and produce concentrated urine (when
   ADH is present)

---

## Skin and Temperature Regulation in Detail

### Skin Structure

| Layer      | Components                                                                                                                                                                                                 | Functions                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Epidermis  | Keratinocytes (produce keratin for water.../1-number-and-algebra/3_proof-and-logicing); melanocytes (produce melanin for UV protection); Langerhans cells (immune defence); Merkel cells (touch receptors) | Water.../1-number-and-algebra/3_proof-and-logic barrier; protection against pathogens and UV radiation; vitamin D synthesis (7-dehydrocholesterol $\rightarrow$ cholecalciferol by UV light) |
| Dermis     | Blood vessels; nerves; hair follicles; sebaceous glands; sweat glands (eccrine and apocrine); sensory receptors (Meissner's corpuscles, Pacinian corpuscles)                                               | Nourishment; sensation; thermoregulation; lubrication of hair and skin; structural support (collagen and elastin fibres)                                                                     |
| Hypodermis | Adipose tissue (fat); connective tissue                                                                                                                                                                    | Insulation; energy storage; cushioning                                                                                                                                                       |

### Thermoregulation Pathways

**When body temperature RISES (e.g., during exercise, in hot weather):**

| Response                 | Mechanism                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Vasodilation             | Blood vessels in the dermis dilate (smooth muscle in the vessel walls relaxes); more blood flows near the skin surface; heat is lost by radiation and convection from the skin surface                                                           |
| Sweating                 | Sweat glands secrete sweat onto the skin surface; water in sweat evaporates, taking latent heat of vaporisation from the skin; this is the most effective cooling mechanism; can lose up to 1-2 litres of sweat per hour during intense exercise |
| Decreased metabolic rate | Cells reduce their rate of respiration, producing less heat as a by-product                                                                                                                                                                      |
| Behavioural responses    | Removing clothing; seeking shade; drinking cold fluids; fanning                                                                                                                                                                                  |

**When body temperature FALLS (e.g., in cold weather):**

| Response                 | Mechanism                                                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vasoconstriction         | Blood vessels in the dermis constrict (smooth muscle contracts); less blood flows near the skin surface; less heat is lost from the body surface; blood is diverted to the core to protect vital organs           |
| Shivering                | Rapid, involuntary contractions of skeletal muscles; respiration in the muscle cells increases, producing more heat as a by-product                                                                               |
| Piloerection             | Hair erector muscles contract; hairs stand upright, trapping a layer of still air next to the skin (insulating layer); effective in furry animals but limited effect in humans (goosebumps)                       |
| Increased metabolic rate | Cells increase their rate of respiration; thyroid hormones (T3, T4) stimulate basal metabolic rate; brown adipose tissue (in newborns and hibernating mammals) generates heat through non-shivering thermogenesis |
| Behavioural responses    | Adding clothing; seeking shelter; curling up (reducing surface area to volume ratio); huddling                                                                                                                    |

### Negative Feedback in Thermoregulation

1. **Normal body temperature:** approximately 37 degrees C (core temperature)
2. **Temperature receptors:** Thermoreceptors in the skin (detect external temperature changes) and
   in the hypothalamus (detect blood temperature changes) send nerve impulses to the
   thermoregulatory centre in the hypothalamus
3. **Thermoregulatory centre:** The hypothalamus processes the information and sends nerve impulses
   to effectors:

- Sweat glands (via sympathetic nervous system)
- Blood vessels in the skin (via sympathetic nervous system)
- Skeletal muscles (via motor neurons)
- Adrenal medulla (triggers adrenaline release for metabolic effects)

4. **Negative feedback:** When the corrective response brings body temperature back to normal, the
   thermoreceptors detect this change and the hypothalamus reduces the corrective signals

---

## Common Pitfalls

- **Ultrafiltration occurs in the glomerulus; selective reabsorption occurs primarily in the
  proximal convoluted tubule.** Students often confuse the site of these two processes
- **The loop of Henle creates the concentration gradient in the medulla; the collecting duct USES
  this gradient to produce concentrated urine (when ADH is present).** The loop does not reabsorb
  water; the collecting duct does
- **The descending limb of the loop of Henle is permeable to water but NOT to ions; the ascending
  limb is permeable to ions but NOT to water.** Getting these mixed up is a common error
- **ADH increases water reabsorption, NOT decreases it.** More ADH = more concentrated urine (less
  volume); less ADH = more dilute urine (more volume)
- **Sweating cools the body through EVAPORATION, not through the production of sweat itself.** If
  sweat drips off the skin without evaporating, it does not cool the body. This is why fans help
  with cooling (they increase evaporation rate)** :::tip Tip Ready to test your understanding of
  **Homeostasis\*\*? Review the
  [Human Reproduction and Homeostasis diagnostic test](/docs/dse/biology/diagnostics/diag-human-reproduction-homeostasis)
  which covers homeostatic topics within the DSE specification.

See [Diagnostic Guide](/docs/dse/biology/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix.

---

## Kidney Dialysis

### When Is Dialysis Needed?

When kidneys fail (renal failure), they can no longer:

- Filter metabolic waste products (urea, creatinine, uric acid)
- Regulate water and ion balance
- Regulate blood pH
- Produce erythropoietin (leading to anaemia)

If untreated, toxic levels of urea accumulate (**uraemia**), causing nausea, confusion, seizures,
and death.

### Haemodialysis

| Feature                    | Description                                                                                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Principle                  | Blood is pumped out of the body, passed through a dialyser (artificial kidney), and returned. Waste products diffuse from the blood across a partially permeable membrane into the dialysis fluid                                                 |
| Dialysis membrane          | Made of cellulose acetate or synthetic polymer; permeable to small molecules (urea, ions, glucose) but not to large molecules (proteins, blood cells)                                                                                             |
| Dialysis fluid (dialysate) | Contains the same concentration of useful substances (glucose, ions) as normal blood plasma but NO urea -- this creates a concentration gradient for urea to diffuse from blood into dialysate                                                    |
| Flow                       | Blood flows in one direction through the dialyser; dialysate flows in the opposite direction (**counter-current exchange**) -- this maintains the concentration gradient along the entire length of the dialyser, maximising diffusion efficiency |
| Frequency                  | 3 sessions per week, each lasting 3-5 hours                                                                                                                                                                                                       |
| Access                     | An arteriovenous fistula (surgical connection between an artery and vein) provides a high-flow blood vessel for repeated needle insertion                                                                                                         |
| Anticoagulant              | Heparin is added to prevent blood clotting in the dialyser                                                                                                                                                                                        |

### Peritoneal Dialysis

| Feature       | Description                                                                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Principle     | The peritoneum (lining of the abdominal cavity) acts as the dialysis membrane. Dialysis fluid is introduced into the abdominal cavity through a catheter; waste products diffuse from the blood in the peritoneal capillaries into the dialysis fluid |
| Exchange      | After several hours (dwell time), the dialysis fluid (now containing waste) is drained and replaced with fresh fluid                                                                                                                                  |
| Frequency     | Continuous (CAPD -- continuous ambulatory peritoneal dialysis): 4-5 exchanges per day; automated (APD): machine performs exchanges overnight                                                                                                          |
| Advantages    | Can be performed at home; no need for a machine (CAPD); more gentle on the body; preserves remaining kidney function better                                                                                                                           |
| Disadvantages | Risk of peritonitis (infection of the abdominal cavity); less efficient than haemodialysis for large patients or those with high urea levels                                                                                                          |

### Haemodialysis vs Peritoneal Dialysis

| Aspect            | Haemodialysis                        | Peritoneal Dialysis                          |
| ----------------- | ------------------------------------ | -------------------------------------------- |
| Location          | Hospital or dialysis centre          | Home                                         |
| Membrane          | Artificial (dialyser)                | Natural (peritoneum)                         |
| Efficiency        | Higher; removes waste more quickly   | Lower; slower process                        |
| Convenience       | Requires travel to centre 3x/week    | Can be done at home; more independence       |
| Infection risk    | Low (sterile procedure)              | Higher (peritonitis risk)                    |
| Diet restrictions | Strict (fluid, potassium, phosphate) | Less strict                                  |
| Suitable for      | Most patients; acute renal failure   | Patients who prefer home treatment; children |

### Kidney Transplant

- The best treatment for end-stage renal failure
- A healthy kidney from a living donor ( a relative) or a deceased donor is transplanted into the
  patient's lower abdomen
- The donor kidney is connected to the recipient's blood vessels and ureter
- Advantages over dialysis: no need for regular dialysis sessions; better quality of life; longer
  life expectancy; fewer dietary restrictions
- Disadvantages: risk of surgical complications; need for lifelong immunosuppressive drugs
  (increased risk of infections); risk of rejection; shortage of donor organs
- Success rate: approximately 95% survival at 1 year for kidneys from living donors

---

## ADH and Water Balance in Detail

### Osmoregulation Pathway

1. **Stimulus:** Blood water potential decreases (blood becomes more concentrated; osmolarity
   increases above normal ~300 mOsm/L). This can be caused by:

- Sweating (water loss through skin)
- Insufficient water intake (dehydration)
- High salt intake (increases blood osmolarity)
- Diarrhoea or vomiting (water loss)

2. **Detection:** Osmoreceptors in the **hypothalamus** detect the decrease in blood water
   potential. Osmoreceptors are specialised neurons that shrink when the surrounding fluid becomes
   more concentrated, triggering nerve impulses.

3. **Coordination:**

- The hypothalamus sends nerve impulses to the **posterior pituitary gland**, stimulating it to
  release **antidiuretic hormone (ADH, vasopressin)** into the blood
- Simultaneously, the hypothalamus stimulates the **thirst centre** in the brain, creating the
  sensation of thirst and motivating water-drinking behaviour

4. **Effector response (kidneys):**

- ADH binds to receptors on the cells of the **collecting ducts** and **distal convoluted tubules**
  in the nephrons
- This triggers the insertion of **aquaporin water channels** into the luminal membrane of these
  cells
- Water is now reabsorbed from the filtrate into the blood by osmosis (the medullary interstitial
  fluid is hypertonic due to the counter-current multiplier in the loop of Henle)
- More concentrated urine is produced (small volume, high urea concentration)
- Blood water potential returns to normal

5. **Negative feedback:** As blood water potential returns to normal, osmoreceptors in the
   hypothalamus detect the change and reduce ADH secretion. Aquaporin channels are removed from the
   collecting duct membranes, reducing water reabsorption.

### ADH Levels and Urine Output

| Condition        | Blood Osmolarity | ADH Level | Aquaporin Channels | Water Reabsorption | Urine Volume | Urine Concentration |
| ---------------- | ---------------- | --------- | ------------------ | ------------------ | ------------ | ------------------- |
| Dehydrated       | High             | High      | Many inserted      | High               | Low          | High (concentrated) |
| Normal hydration | Normal           | Normal    | Moderate           | Moderate           | Normal       | Normal              |
| Over-hydrated    | Low              | Low       | Few                | Low                | High         | Low (dilute)        |

### Diabetes Insipidus

- A condition characterised by the inability to concentrate urine, resulting in the production of
  large volumes of dilute urine (up to 20 litres per day)
- **Central diabetes insipidus:** The hypothalamus or posterior pituitary does not produce or
  release sufficient ADH (caused by head injury, tumour, infection)
- **Nephrogenic diabetes insipidus:** The kidneys do not respond to ADH -- the collecting duct cells
  lack functional receptors or aquaporin channels (caused by genetic mutations, certain drugs such
  as lithium)
- Treatment: desmopressin (synthetic ADH) for central DI; treating the underlying cause for
  nephrogenic DI

---

## Blood Glucose Regulation in Detail

### The Role of the Pancreas

The pancreas has both exocrine and endocrine functions:

| Function  | Description                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Exocrine  | Acinar cells produce digestive enzymes (amylase, lipase, trypsinogen) and bicarbonate, secreted into the duodenum via the pancreatic duct |
| Endocrine | Islets of Langerhans produce hormones released into the blood: $\alpha$ cells produce **glucagon**; $\beta$ cells produce **insulin**     |

### Insulin and Glucagon Actions

| Aspect                  | Insulin ($\beta$ cells)                                                                                                                | Glucagon ($\alpha$ cells)                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Trigger                 | Blood glucose concentration rises above normal (~5 mmol/L)                                                                             | Blood glucose concentration falls below normal (~5 mmol/L)                                     |
| Effect on blood glucose | Decreases (lowers blood glucose)                                                                                                       | Increases (raises blood glucose)                                                               |
| Target organs           | Liver, muscle cells, adipose tissue                                                                                                    | Liver                                                                                          |
| Key mechanisms          | -- Increases glucose uptake by cells (by stimulating translocation of GLUT4 transporters to the cell membrane in muscle and fat cells) | -- Stimulates glycogenolysis (breakdown of glycogen to glucose) in the liver                   |
|                         | -- Stimulates glycogenesis (conversion of glucose to glycogen) in the liver and muscles                                                | -- Stimulates gluconeogenesis (synthesis of glucose from amino acids and lactate) in the liver |
|                         | -- Stimulates lipogenesis (conversion of glucose to fat for storage) in adipose tissue                                                 | -- Stimulates lipolysis (breakdown of fat to fatty acids and glycerol) in adipose tissue       |
|                         | -- Inhibits gluconeogenesis and glycogenolysis in the liver                                                                            | -- Increases blood glucose                                                                     |
|                         | -- Increases rate of glucose uptake and use by cells (increases respiration rate)                                                      |                                                                                                |

### Glycogenesis, Glycogenolysis, and Gluconeogenesis

| Process         | Meaning                   | Direction                                 | Stimulated By | Inhibited By |
| --------------- | ------------------------- | ----------------------------------------- | ------------- | ------------ |
| Glycogenesis    | Glycogen **formation**    | Glucose $\rightarrow$ Glycogen            | Insulin       | Glucagon     |
| Glycogenolysis  | Glycogen **breakdown**    | Glycogen $\rightarrow$ Glucose            | Glucagon      | Insulin      |
| Gluconeogenesis | New glucose **synthesis** | Amino acids/lactate $\rightarrow$ Glucose | Glucagon      | Insulin      |

### Adrenaline and Blood Glucose

During the fight-or-flight response, the adrenal medulla releases adrenaline, which:

- Stimulates glycogenolysis in the liver (rapidly increases blood glucose)
- Inhibits insulin secretion and stimulates glucagon secretion
- This ensures that muscles have an adequate supply of glucose for respiration during physical
  activity or stress
- The effect is short-lived compared to the effects of cortisol from the adrenal cortex

### Glycosuria

- Normally, all glucose is reabsorbed from the filtrate in the proximal convoluted tubule (via
  sodium-glucose co-transporters)
- The **renal threshold** for glucose is approximately 9-10 mmol/L -- if blood glucose exceeds this
  level, the transporters become saturated and glucose appears in the urine (glycosuria)
- Glycosuria is a characteristic symptom of **diabetes mellitus**

### Common Pitfalls

- **Insulin decreases blood glucose; glucagon increases it.** Students often confuse the two --
  remember: "Insulin is IN, glucose goes IN to cells"
- **Glucagon acts primarily on the liver, NOT on muscle cells.** Muscle cells lack the receptor for
  glucagon. Only the liver can release glucose into the blood
- **Insulin and glucagon are antagonistic hormones** -- they have opposite effects on blood glucose
  concentration
- **Type 1 diabetes is caused by autoimmune destruction of $\beta$ cells** (not $\alpha$ cells);
  Type 2 is caused by insulin resistance
- **Diabetes insipidus is NOT related to blood glucose.** It is a disorder of water balance (ADH
  deficiency or resistance), causing dilute urine. It should not be confused with diabetes mellitus
- **The renal threshold is the blood glucose concentration at which glucose first appears in the
  urine (~9-10 mmol/L), NOT the normal blood glucose level (~5 mmol/L)** :::

## Summary

experimental evidence, and real-world applications.

> > > > > > > Stashed changes:docs/docs_dse/Biology/homeostasis.md

**Key concepts include:**


- photosynthesis (light-dependent and independent)
- transpiration and water transport
- plant hormones and tropisms
- reproduction in flowering plants
- plant responses to the environment

Success requires the ability to recall specific factual content, apply knowledge to novel scenarios,
and evaluate experimental evidence critically.

> > > > > > > Stashed changes:docs/docs_dse/Biology/homeostasis.md
