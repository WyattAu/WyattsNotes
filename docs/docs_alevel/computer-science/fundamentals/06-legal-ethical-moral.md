---
title: Legal, Ethical, and Moral Issues
date: 2026-04-07T00:00:00.000Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: legal-ethical-moral-issues
---

## 1. Legal, Ethical, and Moral Frameworks

:::info
Board-specific AQA Paper 2 | Edexcel P2 | OCR (A) Paper 2 | CIE Paper 2 This topic is
mandatory across all four major A-Level boards. AQA and OCR tend to ask structured questions
requiring you to apply legislation to scenarios. CIE and Edexcel favour longer-essay style responses
evaluating the impact of technology on society.
:::

### Definition

**Definition.** **Law** is a system of rules enforced by a sovereign state through institutions such
as courts and police. Breach of law attracts sanctions (fines, imprisonment, civil liability). Laws
are codified, publicly available, and apply universally within a jurisdiction.

**Definition.** **Ethics** is the branch of philosophy concerned with systematising, defending, and
recommending concepts of right and wrong conduct. Ethical frameworks provide structured approaches
to evaluating the moral dimensions of actions. Professional bodies publish codes of ethics that
members are expected to follow.

**Definition.** **Morals** are personal or cultural beliefs about right and wrong. They are not
necessarily codified or enforced by any institution. Morals may differ between individuals and
cultures, whereas laws aim for consistency within a jurisdiction.

### Key Distinctions

| Dimension    | Law                               | Ethics                                       | Morals                            |
| ------------ | --------------------------------- | -------------------------------------------- | --------------------------------- |
| Source       | Legislation, case law, common law | Philosophical frameworks, professional codes | Personal beliefs, cultural norms  |
| Enforcement  | Courts, police, regulators        | Professional bodies, social pressure         | Self-regulation, social censure   |
| Scope        | Universal within a jurisdiction   | Context-dependent (profession, society)      | Individual or community-specific  |
| Breach       | Crime or civil wrong              | Professional misconduct, reputational harm   | Guilt, social stigma              |
| Change speed | Slow (parliamentary process)      | Moderate (reviewed periodically)             | Rapid (shifts with attitudes)     |
| Example      | The Data Protection Act 2018      | BCS Code of Conduct                          | Belief that surveillance is wrong |

:::warning
Exam questions often ask you to "evaluate the legal and ethical implications" of a
scenario. "Legal" means identify the specific Act and explain how it applies. "Ethical" means apply
an ethical framework or professional code. Do not confuse the two.
:::

### Why This Matters for Computer Scientists

Software systems process personal data, make automated decisions, control physical infrastructure,
and mediate communication. A system that is technically correct but legally non-compliant, ethically
questionable, or morally objectionable can cause real harm. Computer scientists must understand
these frameworks because:

- **Design decisions** have legal consequences (e.g., storing user data without consent violates the
  Data Protection Act 2018)
- **Professional responsibility** requires adherence to codes of conduct (e.g., BCS, ACM)
- **Public trust** in technology depends on ethical practice
- **Exam requirements** mandate that you can discuss and evaluate these issues

<hr />

## 2. Legislation

### 2.1 Computer Misuse Act 1990

:::info
Board-specific AQA explicitly names this Act. OCR (A) and Edexcel also require detailed
knowledge. CIE does not specify UK legislation but expects awareness of computer misuse laws
generally.
:::

**Definition.** The **Computer Misuse Act 1990** (CMA) is a UK Act of Parliament that criminalises
unauthorised access to computer systems and unauthorised modification of computer material. It was
amended by the Police and Justice Act 2006 (adding Sections 3A, 3ZA-3ZC) and the Serious Crime
Act 2015.

#### Sections and Offences

| Section | Offence                                                              | Description                                                                                                                                                                                     | Maximum Penalty              |
| ------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| s.1     | Unauthorised access to computer material                             | Gaining access to a computer system (or data on it) without permission. The access itself is the offence, regardless of intent to cause harm or whether any data is viewed.                     | 2 years imprisonment / fine  |
| s.2     | Unauthorised access with intent to commit further offence            | Unauthorised access to a computer, where the offender intends to commit a further offence (e.g., fraud, blackmail). The further offence need not be completed; the intent alone suffices.       | 5 years imprisonment / fine  |
| s.3     | Unauthorised acts intended to impair computer operation              | Doing unauthorised acts which impair the operation of a computer, prevent access to data, or impair the reliability of data. This covers malware distribution, DDoS attacks, deletion of files. | 10 years imprisonment / fine |
| s.3A    | Making, supplying, or obtaining articles for use in s.1-s.3 offences | Creating, distributing, or obtaining tools (e.g., malware, exploit kits) intended for use in offences under s.1, s.2, or s.3. Added by the Police and Justice Act 2006.                         | 10 years imprisonment / fine |
| s.3ZA   | Unauthorised access to impair computer operation                     | Unauthorised access with intent to impair operation.                                                                                                                                            | 10 years imprisonment / fine |
| s.3ZB   | Supplying or obtaining articles to impair computer operation         | Supplying or obtaining tools intended to impair operation.                                                                                                                                      | 14 years imprisonment / fine |
| s.3ZC   | Encouraging or assisting offences                                    | Assisting or encouraging another person to commit a CMA offence.                                                                                                                                | 10 years imprisonment / fine |

#### Case Law

- **R v. Gold and O'Brien (1988):** The defendants accessed the BT Prestel system through a Prestel
  engineer's account. They accessed the Duke of Edinburgh's mailbox and left a message. Existing
  forgery and theft laws could not accommodate this, demonstrating the need for specific
  legislation. This case directly prompted the Computer Misuse Act 1990.
- **R v. Aaron Caffrey (2003):** Accused of launching a DDoS attack on the Port of Houston. Caffrey
  claimed his computer was infected by a trojan that caused the attack without his knowledge. The
  jury acquitted, highlighting the difficulty of proving _mens rea_ (guilty mind) in computer misuse
  cases.
- **R v. Lennon (2006):** Sent emails bombarding a former employer's email server. Convicted under
  s.3 of the CMA. Established that sending a high volume of emails to cause disruption constitutes
  an impairment offence even if each individual email is legitimate.

:::warning
Common exam pitfall: s.1 requires only that access is unauthorised. The defendant does
not need to have damaged or stolen anything. Merely guessing a password and gaining entry is
sufficient for conviction. Distinguish s.1 (access only) from s.3 (impairment/damage).
:::

### 2.2 Data Protection Act 2018 and UK GDPR

:::info
Board-specific Mandatory for AQA, OCR (A), Edexcel, and CIE. This is the most frequently
tested piece of legislation across all boards.
:::

**Definition.** The **Data Protection Act 2018** (DPA 2018) is the UK's implementation of the EU
General Data Protection Regulation (GDPR). Following Brexit, the UK operates under "UK GDPR" which
mirrors the EU GDPR with minor differences. Together, the DPA 2018 and UK GDPR form the UK's data
protection framework, overseen by the Information Commissioner's Office (ICO).

#### Key Terminology

| Term                                            | Definition                                                                                                                                                                                                          |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Personal data                                   | Any information relating to an identified or identifiable natural person ("data subject"). Includes name, email, IP address, location data.                                                                         |
| Sensitive personal data (special category data) | Personal data revealing racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetics, biometrics, health data, sex life or sexual orientation. Subject to enhanced protections. |
| Data controller                                 | The entity that determines the purposes and means of processing personal data.                                                                                                                                      |
| Data processor                                  | The entity that processes personal data on behalf of the controller.                                                                                                                                                |
| Data subject                                    | The individual to whom personal data relates.                                                                                                                                                                       |
| Processing                                      | Any operation performed on personal data: collection, recording, organisation, structuring, storage, adaptation, retrieval, consultation, use, disclosure, erasure, or destruction.                                 |
| Consent                                         | Freely given, specific, informed, and unambiguous indication of the data subject's agreement to processing.                                                                                                         |

#### The Seven Principles (UK GDPR Article 5)

| Principle                                   | Description                                                                                                                                                                                              |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Lawfulness, fairness, and transparency   | Processing must have a lawful basis (consent, contract, legitimate interest, vital interest, public task, legal obligation). It must be fair to the data subject and transparent about how data is used. |
| 2. Purpose limitation                       | Personal data must be collected for specified, explicit, and legitimate purposes. It must not be further processed in a manner incompatible with those purposes.                                         |
| 3. Data minimisation                        | Personal data collected must be adequate, relevant, and limited to what is necessary for the stated purpose.                                                                                             |
| 4. Accuracy                                 | Personal data must be accurate and, where necessary, kept up to date. Inaccurate data must be erased or corrected without delay.                                                                         |
| 5. Storage limitation                       | Personal data must not be kept in identifiable form for longer than necessary for the processing purpose.                                                                                                |
| 6. Integrity and confidentiality (security) | Personal data must be processed with appropriate technical and organisational measures to ensure security, including protection against unauthorised access, accidental loss, destruction, or damage.    |
| 7. Accountability                           | The controller must demonstrate compliance with all other principles.                                                                                                                                    |

#### Data Subject Rights

| Right                                                 | Description                                                                                                                                             |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Right of access (Article 15)                          | The data subject may request confirmation of whether their data is processed and obtain a copy of that data.                                            |
| Right to rectification (Art. 16)                      | The data subject may request correction of inaccurate personal data.                                                                                    |
| Right to erasure (Art. 17)                            | Also known as the "right to be forgotten." The data subject may request deletion of their personal data in certain circumstances.                       |
| Right to restrict processing (Art. 18)                | The data subject may request that processing is limited (e.g., while accuracy is disputed).                                                             |
| Right to data portability (Art. 20)                   | The data subject may receive their data in a structured, commonly used, machine-readable format and transmit it to another controller.                  |
| Right to object (Art. 21)                             | The data subject may object to processing based on legitimate interests or processing for direct marketing.                                             |
| Rights related to automated decision-making (Art. 22) | The data subject has the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects. |

#### Controller and Processor Obligations

Controllers must:

- Conduct **Data Protection Impact Assessments** (DPIAs) for high-risk processing
- Appoint a **Data Protection Officer** (DPO) if required
- Maintain records of processing activities
- Report data breaches to the ICO within **72 hours** of becoming aware
- Ensure processors comply with UK GDPR via contractual agreements

Processors must:

- Process data only as instructed by the controller
- Ensure appropriate security measures
- Assist the controller in responding to data subject requests
- Report breaches to the controller without undue delay

#### Penalties

The ICO can impose:

- **Administrative fines:** Up to 17.5 million GBP or 4% of annual global turnover (whichever is
  greater) for the most serious infringements
- **Standard fines:** Up to 8.7 million GBP or 2% of annual global turnover for other infringements
- **Enforcement notices:** Requiring an organisation to take or cease specific actions
- **Prosecution:** Criminal offences under the DPA 2018 carry custodial sentences

#### Case Studies

- **British Airways (2019):** Fined 20 million GBP by the ICO after a cyber-attack exposed the
  personal data of approximately 429,612 customers. The breach involved redirecting users to a
  fraudulent site that harvested personal data.
- **Marriott International (2019):** Fined 18.4 million GBP after a breach exposed approximately 339
  million guest records globally. The ICO found Marriott failed to undertake sufficient due
  diligence when acquiring Starwood Hotels.
- **Clearview AI (2022):** Ordered by the ICO to delete the personal data of UK residents from its
  facial recognition database. The ICO found that Clearview AI had collected images from the web
  without consent, violating UK GDPR principles.

:::warning
A common exam question asks about the difference between a data controller and a data
processor. The controller decides _why_ and _how_ data is processed; the processor carries out the
processing on the controller's behalf. Both have obligations under UK GDPR, but the controller bears
primary responsibility.
:::

### 2.3 Copyright, Designs and Patents Act 1988

:::info
Board-specific AQA and OCR (A) explicitly require this. Edexcel covers intellectual property
under its "Impacts of Computing" topic. CIE expects general understanding of software copyright.
:::

**Definition.** The **Copyright, Designs and Patents Act 1988** (CDPA) is the primary UK legislation
governing intellectual property rights. It grants creators automatic protection of their original
works from the moment of creation, without requiring registration.

#### What Is Protected

| Category       | Examples                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------- |
| Literary works | Source code, documentation, manuals, website text                                               |
| Dramatic works | Screenplays, scripts                                                                            |
| Musical works  | Compositions, recordings                                                                        |
| Artistic works | Graphics, icons, UI designs, diagrams                                                           |
| Databases      | Original selection and arrangement of data (database right, separate from copyright in content) |
| Software       | Source code and object code are protected as literary works                                     |

#### Infringement

Copyright is infringed when a person, without the licence of the copyright owner, does any of the
following restricted acts:

- Copies the work (direct copying or substantial part copying)
- Issues copies to the public
- Rents or lends the work to the public
- Performs, shows, or plays the work in public
- Communicates the work to the public (e.g., streaming, file sharing)
- Makes an adaptation of the work

#### Software Licensing

| Licence Type                 | Description                                                                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Proprietary                  | The copyright owner grants limited rights to use the software under specific conditions. Source code is not distributed. The user typically purchases a licence, not the software itself. |
| Open source                  | The source code is made available under a licence that permits use, modification, and distribution. Specific terms vary by licence.                                                       |
| GPL (General Public License) | Copyleft licence: derivative works must also be distributed under the GPL. Source code must be made available.                                                                            |
| MIT                          | Permissive licence: allows reuse, modification, and distribution with minimal restrictions. Requires preservation of the copyright notice.                                                |
| Creative Commons             | A family of licences for creative works. Allows creators to specify how their work may be used (e.g., CC BY-NC-SA: attribution required, non-commercial use only, share-alike).           |
| Freeware                     | Software provided at no cost, but copyright remains with the owner. Redistribution or modification may be restricted.                                                                     |
| Shareware                    | Software distributed on a trial basis. Users are expected to pay for continued use.                                                                                                       |

#### Fair Dealing

UK law provides limited exceptions under the "fair dealing" framework:

- **Research and private study:** Use of copyright material for non-commercial research or private
  study
- **Criticism, review, and quotation:** Use for the purpose of criticism or review, with sufficient
  acknowledgement
- **Reporting current events:** Use for reporting current events in newspapers, magazines, or
  broadcast (excluding photographs)

Fair dealing is a defence, not a right. Whether a particular use qualifies as "fair" depends on
factors including the purpose of use, the amount copied, and the effect on the market for the
original work.

#### Duration

Copyright in literary, dramatic, musical, or artistic works lasts for the life of the author plus 70
years from the end of the calendar year of the author's death.

### 2.4 Regulation of Investigatory Powers Act 2000 and Investigatory Powers Act 2016

**Definition.** The **Regulation of Investigatory Powers Act 2000** (RIPA) regulates the powers of
public bodies to carry out surveillance and investigation, and covers the interception of
communications. It was substantially replaced by the **Investigatory Powers Act 2016** (IPA),
sometimes called the "Snooper's Charter."

#### Key Provisions of the IPA 2016

| Power                              | Description                                                                                                                                                   | Authorization Required                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Interception of communications     | Accessing the content of communications (e.g., emails, phone calls) in the course of transmission.                                                            | Judicial warrant (from a Secretary of State, reviewed by a Judicial Commissioner) |
| Equipment interference             | Hacking into devices or networks to obtain data (e.g., installing keyloggers, remote access trojans).                                                         | Judicial warrant                                                                  |
| Acquisition of communications data | Accessing communications data (metadata: who contacted whom, when, where, but not the content).                                                               | Notice from a senior officer                                                      |
| Internet connection records (ICRs) | Accessing records of the internet services a person has connected to (e.g., which websites were visited), but not the specific pages. Requires ISP retention. | Notice from a senior officer                                                      |
| Bulk data sets                     | Retention and analysis of large datasets of personal data for national security purposes.                                                                     | Subject to oversight by the Investigatory Powers Commissioner                     |
| Bulk interception                  | Large-scale interception of external communications (communications where at least one end is outside the UK).                                                | Judicial warrant                                                                  |

#### Oversight

The IPA established the **Investigatory Powers Commissioner's Office** (IPCO) to oversee the use of
these powers. The **Technology Advisory Panel** advises on the technical feasibility and proportion
ality of surveillance capabilities.

#### Relevance to Computer Science

- ISPs must retain ICRs for 12 months
- Companies can be compelled to provide technical assistance (e.g., removing encryption) under a
  warrant
- The Act creates tensions between national security and individual privacy
- The **Computer and Network Security** provisions allow the government to require companies to
  remove electronic protection from targeted equipment

### 2.5 Freedom of Information Act 2000

**Definition.** The **Freedom of Information Act 2000** (FOIA) gives the public a general right of
access to information held by public authorities. It promotes transparency and accountability in
government.

#### Key Provisions

- Any person can make a written request for information to a public authority
- The authority must respond within **20 working days**
- Authorities can refuse requests using **exemptions** (e.g., national security, commercial
  interests, personal data protected by the DPA 2018)
- Refusals must be accompanied by a reason citing the specific exemption
- Applicants can appeal refusals to the Information Commissioner, and subsequently to the
  Information Rights Tribunal (First-tier Tribunal)

#### Exemptions

| Type      | Examples                                                                                                       | Absolute or Qualified                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Absolute  | Information supplied by or relating to security bodies; court records; legislative drafts                      | Absolute: not subject to public interest test                                |
| Qualified | Information that would prejudice law enforcement, commercial interests, or effective conduct of public affairs | Qualified: disclosure must be weighed against public interest in withholding |

#### Relevance

- The FOIA can be used to request information about how public bodies use technology, procure
  systems, or handle data
- It intersects with the DPA 2018: personal data of third parties cannot be disclosed under FOIA
  without their consent

### 2.6 Equality Act 2010

:::info
Board-specific OCR (A) explicitly references algorithmic bias. AQA includes this under its
"Ethical, Legal, and Environmental Impacts" topic. Edexcel covers discrimination in automated
systems.
:::

**Definition.** The **Equality Act 2010** consolidates previous anti-discrimination legislation (
including the Race Relations Act, Sex Discrimination Act, and Disability Discrimination Act). It
prohibits discrimination on nine "protected characteristics":

1. Age
2. Disability
3. Gender reassignment
4. Marriage and civil partnership
5. Pregnancy and maternity
6. Race
7. Religion or belief
8. Sex
9. Sexual orientation

#### Types of Discrimination

| Type                          | Description                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Direct                        | Treating someone less favourably because of a protected characteristic                                                        |
| Indirect                      | A policy, criterion, or practice that applies to everyone but disadvantages people with a particular protected characteristic |
| Discrimination by association | Treating someone less favourably because they are associated with someone who has a protected characteristic                  |
| Discrimination by perception  | Treating someone less favourably because they are perceived to have a protected characteristic (whether or not they do)       |
| Harassment                    | Unwanted conduct related to a protected characteristic that violates dignity or creates an intimidating environment           |
| Victimisation                 | Treating someone unfairly because they have made a complaint of discrimination or supported someone else's complaint          |

#### Algorithmic Discrimination

When automated systems make decisions that affect people (e.g., hiring algorithms, credit scoring,
insurance pricing), the Equality Act applies. Key concerns:

- **Training data bias:** If the training data reflects historical discrimination, the algorithm
  will perpetuate it. For example, a hiring algorithm trained on 10 years of hiring decisions that
  favoured male candidates will learn to favour male applicants.
- **Proxy discrimination:** Even if protected characteristics are not explicitly used, the algorithm
  may use correlated features (e.g., postcode as a proxy for race, which can lead to indirect
  discrimination).
- **Lack of transparency:** If the decision-making process is opaque ("black box"), it is difficult
  to identify and challenge discriminatory outcomes.
- **Accountability:** It is unclear who is responsible for algorithmic discrimination -- the
  developer, the data provider, or the organisation deploying the system.

**Case study:** Amazon scrapped an AI recruiting tool in 2018 after discovering it systematically
downgraded CVs containing the word "women's" (e.g., "women's chess club captain") because the
training data was dominated by male engineers' CVs.

### 2.7 Online Safety Act 2023

**Definition.** The **Online Safety Act 2023** imposes a duty of care on providers of user-to-user
services (social media platforms, messaging services, search engines) to protect users from harmful
content.

#### Key Duties

| Duty                        | Description                                                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Duty of care                | Providers must take reasonable steps to prevent users from encountering illegal content and content harmful to children.                                     |
| Illegal content             | Providers must have systems to swiftly remove illegal content (e.g., terrorism, child sexual abuse material) and report it to authorities.                   |
| Content harmful to children | Providers must use age verification and age estimation to prevent children from encountering harmful content. Systems must be "highly effective" by default. |
| Priority offences           | Specific offences including terrorism, child sexual abuse, fraud, revenge pornography, hate crime, promoting self-harm, and selling illegal drugs.           |
| Transparency reporting      | Providers must publish transparency reports detailing how they handle harmful content.                                                                       |
| Super-complaints            | Ofcom can investigate systemic failures based on super-complaints from designated bodies.                                                                    |

#### Enforcement

The regulator is **Ofcom**. Ofcom can impose fines of up to 10% of qualifying worldwide revenue or
18 million GBP (whichever is greater). Senior managers can be held personally liable for repeated
failures.

### 2.8 Telecommunications (Lawful Business Interception) (Interception of Communications) Regulations 2000

**Definition.** The **Telecommunications (Lawful Business Interception) Regulations 2000** permit
organisations to intercept communications on their own telecommunications systems without consent in
specified circumstances.

#### Permitted Interceptions

An organisation may intercept communications without the consent of the sender or recipient for the
following purposes:

| Purpose                        | Description                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Establishing facts             | Ascertaining compliance with regulatory or self-regulatory practices or procedures                                                                                |
| Quality control                | Monitoring quality standards and training purposes                                                                                                                |
| National security              | In the interests of national security                                                                                                                             |
| Preventing or detecting crime  | To prevent or detect crime                                                                                                                                        |
| Investigating unauthorised use | To detect the unauthorised use of the telecommunications system                                                                                                   |
| Business communications        | Monitoring (but not recording) communications to ascertain whether they are relevant to the business (e.g., ensuring personal calls are not made on company time) |

#### Conditions

- The organisation must have made all reasonable efforts to inform users that interceptions may take
  place
- The system must be provided for the purposes of the business or organisation
- Interception is not permitted if the organisation has merely provided the telecoms system as a
  service to someone else (in which case RIPA applies)

#### Relevance

This legislation allows employers to monitor employee emails, internet usage, and phone calls on
company systems. It is frequently examined in scenarios involving workplace surveillance.

### 2.9 Consumer Rights Act 2015

**Definition.** The **Consumer Rights Act 2015** (CRA) establishes consumer rights for the purchase
of goods, services, and digital content. Part 1 of the Act specifically addresses **digital
content**, which is directly relevant to computer science.

#### Digital Content Provisions

When a consumer acquires digital content (software, apps, games, music, video, e-books) in exchange
for payment (including paying through data provision), the content must:

| Requirement          | Description                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Satisfactory quality | The digital content must meet the standard that a reasonable person would consider satisfactory, taking account of price, description, and other relevant factors. |
| Fit for purpose      | The content must be fit for any specific purpose made known to the trader before the contract is made.                                                             |
| As described         | The content must match any description given by the trader.                                                                                                        |

#### Remedies for Digital Content

| Remedy                | Description                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Repair or replacement | The consumer may request the trader to repair or replace the digital content. Repair or replacement must be provided within a reasonable time and without significant inconvenience. |
| Price reduction       | If repair or replacement is not possible, or not provided within a reasonable time, the consumer may request a price reduction.                                                      |
| Refund                | If the fault is so significant that repair/replacement/price reduction is not adequate, the consumer may reject the content and claim a full refund.                                 |

#### When Digital Content Causes Device Damage

If faulty digital content causes damage to a consumer's device (e.g., malware corrupts a computer's
hard drive), the consumer can claim compensation for the damage from the trader.

<hr />

## 3. Ethical Frameworks

### 3.1 Utilitarianism

**Definition.** **Utilitarianism** is a consequentialist ethical theory, primarily associated with
Jeremy Bentham and John Stuart Mill. An action is morally right if it produces the greatest overall
happiness or well-being (utility) for the greatest number of people.

#### Application to Computing

| Scenario                          | Utilitarian Analysis                                                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mass surveillance                 | If surveillance prevents terrorist attacks (preventing massive suffering), a utilitarian may argue it is justified, even if it infringes individual privacy. |
| Automation and job loss           | If automation increases overall economic output and reduces the cost of goods, the net utility gain may outweigh the harm to displaced workers.              |
| Data collection by tech companies | If user data is used to improve services and medical research, the collective benefit may justify the privacy intrusion.                                     |
| Open source vs proprietary        | Open source software may maximise utility by making tools freely available, but if it eliminates incentives for developers, overall innovation may decline.  |

The key difficulty is **measuring and comparing utility.** How do you quantify the harm of privacy
violation against the benefit of preventing crime? Bentham proposed a "felicific calculus" to weigh
pleasure and pain, but in practice, these calculations involve subjective judgements.

#### Act vs Rule Utilitarianism

- **Act utilitarianism:** Evaluate each action individually. An action is right if it maximises
  utility in that specific situation.
- **Rule utilitarianism:** Follow rules that, when generally followed, maximise utility. For
  example, "do not break encryption" might be a rule because the general practice of strong
  encryption maximises overall security, even if in one specific case breaking encryption would
  prevent a crime.

### 3.2 Deontology

**Definition.** **Deontology** is a non-consequentialist ethical theory associated with Immanuel
Kant. Actions are morally right or wrong based on whether they conform to a moral rule or duty,
regardless of the consequences.

Kant's **categorical imperative** has several formulations:

1. **Universal law:** Act only according to maxims that you could will to become universal laws.
   "Should everyone be allowed to read everyone else's emails?" If not, then no one should.
2. **Treat persons as ends:** Never treat people merely as a means to an end. Using someone's
   personal data without their consent treats them as a means (for profit, surveillance, etc.), not
   as an end in themselves.
3. **Autonomy:** Respect the rational autonomy of individuals. This supports informed consent for
   data collection.

#### Application to Computing

| Scenario                        | Deontological Analysis                                                                                                                                           |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mass surveillance               | Violates the duty to respect individual autonomy and privacy, regardless of security benefits. Kant would argue surveillance is wrong even if it prevents crime. |
| Data collection without consent | Treats individuals as a means (data sources) rather than ends in themselves.                                                                                     |
| Software piracy                 | Violates the duty to respect others' property and labour. The act is wrong regardless of whether copying software causes measurable harm.                        |
| Whistleblowing                  | May conflict between duties: the duty of loyalty to one's employer vs the duty to tell the truth and protect the public.                                         |

### 3.3 Virtue Ethics

**Definition.** **Virtue ethics**, associated with Aristotle, focuses on the character of the moral
agent rather than rules or consequences. An action is morally right if it is what a virtuous person
would do in the circumstances.

The key virtues include: honesty, justice, courage, temperance, prudence, compassion.

#### Application to Computing

| Scenario                | Virtue Ethics Analysis                                                                                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mass surveillance       | A virtuous person respects others' privacy, is honest about what they do with personal data, and acts with integrity. Surveillance without consent is dishonest and lacks respect. |
| Automation and job loss | A virtuous company considers the impact on its workers, provides retraining, and acts with compassion. Simply firing workers to increase profits lacks virtue.                     |
| AI bias                 | A virtuous developer tests their systems for bias, seeks diverse perspectives, and takes responsibility for the social impact of their work.                                       |

### 3.4 Comparison of Ethical Frameworks

| Framework      | Focus                  | Key Question                           | Strengths                                    | Weaknesses                                                   |
| -------------- | ---------------------- | -------------------------------------- | -------------------------------------------- | ------------------------------------------------------------ |
| Utilitarianism | Outcomes/consequences  | Does this maximise overall well-being? | Pragmatic; considers collective welfare      | Difficult to measure utility; may justify harming minorities |
| Deontology     | Rules/duties           | Does this conform to a moral rule?     | Clear principles; respects individual rights | Inflexible; duties may conflict                              |
| Virtue Ethics  | Character of the agent | What would a virtuous person do?       | Flexible; considers context and motivation   | Vague; no clear decision procedure                           |

:::warning
Exam questions often ask you to "apply an ethical framework" to a scenario. You must name
the framework, explain its core principle, and then apply it to the specific case. Simply stating
"it is wrong" without grounding your answer in a framework will not score well.
:::

### 3.5 Professional Codes of Conduct

#### BCS Code of Conduct

The **BCS** (British Computer Society), now also known as the Chartered Institute for IT, publishes
a Code of Conduct binding on all members. Key obligations include:

1. **Professional integrity:** Members shall act with integrity, honesty, and competence in their
   professional practice
2. **Public interest:** Members shall have due regard for public health, privacy, security, and
   well-being
3. **Professional competence:** Members shall maintain and develop their competence through
   continuing professional development
4. **Duty of care:** Members shall exercise their professional skill and judgement to the best of
   their ability
5. **Intellectual property:** Members shall respect intellectual property rights
6. **Confidentiality:** Members shall respect the confidentiality of information acquired in the
   course of their work
7. **No discrimination:** Members shall not discriminate on grounds of protected characteristics
8. **Professional responsibility:** Members shall accept responsibility for their own work and for
   the work of their subordinates

#### ACM Code of Ethics

The **Association for Computing Machinery** (ACM) Code of Ethics and Professional Conduct (2018
revision) organises principles into four categories:

| Category                           | Principles (summary)                                                                                                                                                                                                    |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General ethical principles         | Contribute to society and human well-being; avoid harm; be honest and trustworthy; be fair and act to not discriminate; respect copyright and attribution; respect privacy; honour confidentiality.                     |
| Professional responsibilities      | Strive for high quality; maintain professional competence; know and respect existing laws; accept and provide appropriate review; give comprehensive and thorough evaluations; respect privacy; honour confidentiality. |
| Professional leadership principles | Articulate social responsibilities; manage personnel and resources; acknowledge and address conflicts of interest; support the code.                                                                                    |
| Compliance with the code           | Uphold and promote the principles; treat violations as inconsistent with membership.                                                                                                                                    |

### 3.6 Whistleblowing and the Public Interest Disclosure Act 1998

**Definition.** The **Public Interest Disclosure Act 1998** (PIDA) protects employees who disclose
information about wrongdoing in the workplace (whistleblowing) from being subjected to detriment or
dismissal.

#### Protection Requirements

For a disclosure to be protected, the worker must:

1. Have a **reasonable belief** that the disclosure is made in the **public interest**
2. Believe the disclosure tends to show one or more of the following:
   - A criminal offence has been committed, is being committed, or is likely to be committed
   - A person has failed, is failing, or is likely to fail to comply with a legal obligation
   - A miscarriage of justice has occurred, is occurring, or is likely to occur
   - The health or safety of any individual has been, is being, or is likely to be endangered
   - The environment has been, is being, or is likely to be damaged
   - Information tending to show any of the above has been, is being, or is likely to be
     deliberately concealed

#### Disclosure Channels

Workers are encouraged to disclose internally first (to their employer). External disclosures (to
regulators, the media) may still be protected if the worker reasonably believes they will be
subjected to detriment for internal disclosure, or if the evidence would be destroyed.

#### Case Studies

- **Edward Snowden (2013):** Disclosed classified information about the NSA's mass surveillance
  programs (PRISM). Snowden argued the disclosures were in the public interest, revealing that the
  US government was collecting phone records and internet communications of millions of citizens
  without individual warrants. The US government charged him under the Espionage Act. The debate
  centres on whether his actions constitute legitimate whistleblowing or criminal espionage.
- **Frances Haugen (2021):** A former Facebook data scientist who leaked internal documents showing
  that Facebook knew its platforms harmed teenagers' mental health and that it prioritised
  engagement over safety. Her disclosures led to Congressional hearings and regulatory action.

<hr />

## 4. Specific Ethical Issues

### 4.1 Privacy and Surveillance

#### Types of Surveillance

| Type                     | Description                                                                                                                                    | Legal Framework                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| CCTV                     | Video surveillance of public and private spaces. The UK has one of the highest densities of CCTV cameras in the world (estimated 5-6 million). | Data Protection Act 2018; Protection of Freedoms Act 2012                   |
| Internet surveillance    | Monitoring online activity including browsing history, search queries, and communications.                                                     | Investigatory Powers Act 2016                                               |
| Workplace monitoring     | Employers monitoring employee emails, internet usage, keystrokes, and screen activity.                                                         | Telecommunications (Lawful Business Interception) Regulations 2000          |
| Cookies and web tracking | Websites storing small files on users' devices to track browsing behaviour across sites. Third-party cookies enable cross-site profiling.      | Privacy and Electronic Communications Regulations (PECR); UK GDPR           |
| Data harvesting          | Aggregation of personal data from multiple sources (social media, purchase records, location data) to build detailed profiles.                 | Data Protection Act 2018; UK GDPR                                           |
| Facial recognition       | Automated identification of individuals from images or video. Used by law enforcement, retail, and in public spaces.                           | No specific UK legislation; challenged under Equality Act 2010 and DPA 2018 |

#### The Consent Problem

Many surveillance systems operate on the basis of **implied consent** or **opt-out** rather than
**explicit, informed consent**. Consider:

- **Cookies:** Most websites set cookies by default. The user must actively find and decline
  non-essential cookies. This is not freely given consent -- it relies on user inertia.
- **Data harvesting:** Users of "free" services (social media, search engines) provide personal data
  in exchange for the service. The "price" of the service is data extraction. Users may not
  understand or appreciate the extent of data collection.
- **CCTV:** Individuals in public spaces have no choice about being recorded. They have no
  opportunity to consent or opt out.

#### Profiling and Behavioural Prediction

Modern surveillance enables **profiling** -- constructing detailed models of individuals' behaviour,
preferences, and characteristics. This is used for:

- Targeted advertising
- Credit scoring
- Insurance risk assessment
- Employment screening
- Law enforcement prediction

Profiling raises concerns about:

- **Autonomy:** Individuals are categorised and treated based on algorithmic predictions rather than
  their actual actions
- **Transparency:** Individuals may not know they are being profiled or on what basis
- **Accuracy:** Profiles may be inaccurate or based on biased data, leading to unjust treatment
- **Chilling effects:** Knowledge of surveillance may alter behaviour (self-censorship)

### 4.2 Artificial Intelligence Bias and Fairness

#### Sources of Bias

| Source            | Description                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Historical bias   | Training data reflects historical inequalities (e.g., hiring data biased against women and minorities).    |
| Sampling bias     | The training dataset is not representative of the population the model will be applied to.                 |
| Measurement bias  | Features or labels in the training data are measured differently across groups.                            |
| Aggregation bias  | A single model is applied to a heterogeneous population when different subgroups require different models. |
| Selection bias    | Features are selected based on correlations that may not be causal or that embed biases.                   |
| Confirmation bias | Developers interpret model outputs in ways that confirm their pre-existing beliefs.                        |

#### Real-World Examples

- **COMPAS (Correctional Offender Management Profiling for Alternative Sanctions):** A risk
  assessment tool used in the US criminal justice system to predict recidivism. A 2016 ProPublica
  investigation found that Black defendants were nearly twice as likely as white defendants to be
  incorrectly classified as high risk, while white defendants were more likely to be incorrectly
  classified as low risk. The system exhibited racial bias despite not explicitly using race as a
  feature.
- **Amazon recruiting tool (2018):** As noted in section 2.6, the tool learned bias from historical
  hiring data and systematically penalised CVs with indicators of female gender.
- **Apple Card credit limits (2019):** Multiple reports suggested that Apple Card algorithms offered
  significantly lower credit limits to women than to men with equal or lower credit worthiness. The
  algorithm did not use gender as an input, suggesting proxy discrimination.

#### Fairness Definitions

| Definition          | Description                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Demographic parity  | The proportion of positive outcomes should be equal across groups. A hiring algorithm should hire the same percentage of male and female applicants.  |
| Equal opportunity   | The true positive rate should be equal across groups. If qualified candidates are hired at the same rate regardless of group membership.              |
| Individual fairness | Similar individuals should receive similar outcomes. Two applicants with identical qualifications should receive the same credit score.               |
| Calibration         | Predicted probabilities should be equally accurate across groups. A predicted 80% probability of repayment should mean the same thing for all groups. |

:::warning
There is a mathematical result known as **impossibility of simultaneous fairness:** it is
generally impossible to satisfy multiple fairness definitions simultaneously when base rates differ
between groups. This means that choosing a fairness definition is itself an ethical decision, not a
purely technical one.
:::

#### Mitigation Strategies

1. **Pre-processing:** Modify the training data to reduce bias (re-sampling, re-weighting, removing
   biased features)
2. **In-processing:** Constrain the learning algorithm to optimise for a fairness metric alongside
   accuracy
3. **Post-processing:** Adjust the model's outputs to satisfy fairness criteria
4. **Diverse development teams:** Include people from diverse backgrounds in the design and testing
   of AI systems
5. **Audit and monitoring:** Regularly audit model outputs for disparate impact across groups
6. **Human oversight:** Ensure that significant decisions are reviewed by humans who can override
   algorithmic recommendations

### 4.3 Automation and Employment

#### The Nature of Technological Unemployment

**Definition.** **Technological unemployment** is unemployment caused by the introduction of new
technology that displaces human workers.

The impact of automation on employment can be analysed at three levels:

1. **Task level:** Specific tasks are automated (e.g., data entry, assembly line operations)
2. **Occupation level:** Entire occupations are automated (e.g., toll collectors, bank tellers)
3. **Sector level:** Large sectors of the economy are transformed (e.g., manufacturing, retail)

#### Historical Context

| Period                | Technology                     | Jobs Displaced                                         | Jobs Created                                                                   |
| --------------------- | ------------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Industrial Revolution | Steam power, mechanisation     | Hand weavers, artisans                                 | Factory workers, engineers, mechanics, railway workers                         |
| Early 20th century    | Electrification, assembly line | Craftsmen, farm workers                                | Manufacturing workers, electricians, appliance repair                          |
| Late 20th century     | Computers, internet            | Typists, switchboard operators                         | Software developers, IT support, digital marketing, data analysts              |
| 21st century          | AI, robotics, automation       | Truck drivers, retail workers, accountants, paralegals | AI engineers, data scientists, robot maintenance, new industries yet to emerge |

#### Arguments For Automation

- Increased productivity and economic growth
- Reduction in dangerous, repetitive, and physically demanding work
- Lower costs for consumers
- Creation of new types of jobs (as historical precedent suggests)
- Higher quality and consistency in automated processes

#### Arguments Against Automation

- Short-term job displacement without adequate retraining
- Widening inequality: gains from automation accrue to capital owners, while workers bear the costs
- Concentration of economic power in technology companies
- Loss of human skills and craftsmanship
- Psychological impact of unemployment and job insecurity

#### Ethical Considerations

- **Responsibility:** Who is responsible for retraining displaced workers? Employers? Governments?
  Individuals?
- **Distribution:** Should the gains from automation be redistributed (e.g., through universal basic
  income)?
- **Dignity:** Does meaningful work contribute to human dignity? If so, eliminating jobs may have
  consequences beyond economic ones.

### 4.4 Digital Divide

**Definition.** The **digital divide** refers to the gap between those who have access to modern
information and communication technology and those who do not.

#### Dimensions of the Digital Divide

| Dimension             | Description                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access divide         | Physical access to hardware (computers, smartphones) and internet connectivity. Includes affordability, availability of broadband infrastructure.  |
| Skills divide         | The ability to use technology effectively. Includes digital literacy, technical skills, and the ability to critically evaluate online information. |
| Usage divide          | How people use technology. Even with access and skills, not everyone uses technology in ways that provide economic or social benefit.              |
| Content divide        | The availability of relevant content in local languages and formats.                                                                               |
| Infrastructure divide | Differences in the quality and speed of internet infrastructure between urban and rural areas, and between developed and developing nations.       |

#### Causes

- **Economic:** Computers and internet access cost money. Low-income households may not be able to
  afford devices or broadband subscriptions.
- **Geographic:** Rural areas often have poorer internet infrastructure. Satellite and mobile
  broadband can be expensive or unreliable.
- **Educational:** Schools in deprived areas may have fewer computing resources. Students without
  home internet access are at a disadvantage for homework and research.
- **Age:** Older adults may have lower digital literacy and may face accessibility challenges.
- **Disability:** Technology may not be accessible to people with disabilities (e.g., lack of screen
  reader support, poor colour contrast).
- **Language:** Content is predominantly in English; speakers of other languages may be underserved.

#### Consequences

- **Education:** Students without internet access or devices cannot participate fully in digital
  learning. The COVID-19 pandemic exposed this divide acutely.
- **Employment:** Many jobs require digital skills and online applications. Those without digital
  access are excluded from opportunities.
- **Healthcare:** Telemedicine and online health information require digital access.
- **Civic participation:** Government services, voting information, and community resources are
  increasingly online.
- **Social inclusion:** Social connections, cultural participation, and entertainment are
  increasingly mediated by technology.

#### Mitigation

- Government investment in broadband infrastructure
- Subsidised or free devices and internet access for low-income households
- Digital literacy training programmes in schools and communities
- Accessible design standards (e.g., WCAG for web accessibility)
- Community computing centres and libraries

### 4.5 Environmental Impact

#### Energy Consumption

| Source                 | Environmental Impact                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Data centres           | Global data centres consume approximately 1-2% of the world's electricity. Cooling systems add to this demand.                                         |
| Cryptocurrency mining  | Proof-of-Work cryptocurrency mining (e.g., Bitcoin) is extremely energy-intensive. Bitcoin mining alone consumes more electricity than some countries. |
| Network infrastructure | Data transmission over networks consumes energy. The growth of streaming, video conferencing, and cloud computing increases network energy demand.     |
| Device manufacturing   | Manufacturing electronics requires mining raw materials (lithium, cobalt, rare earth elements), energy-intensive processing, and chemical use.         |
| Device usage           | Billions of devices consume electricity during operation. Standby power consumption ("vampire power") is significant in aggregate.                     |

#### E-Waste

**Definition.** **E-waste** (electronic waste) refers to discarded electrical or electronic devices.
The UN estimates approximately 50 million tonnes of e-waste are generated globally each year, of
which only about 20% is formally recycled.

Key issues:

- **Toxic components:** E-waste contains lead, mercury, cadmium, brominated flame retardants, and
  other hazardous materials that can leach into soil and water if improperly disposed of.
- **Informal recycling:** In many developing countries, e-waste is processed informally (burned,
  acid-bathed) to extract valuable metals, exposing workers and communities to toxic substances.
- **Planned obsolescence:** Devices are designed with limited lifespans (non-replaceable batteries,
  software updates that slow older devices, non-repairable components), encouraging frequent
  replacement.
- **Export of e-waste:** Developed countries often export e-waste to developing countries, where
  environmental and labour regulations are weaker.

#### Mitigation Strategies

- **Energy efficiency:** Designing more energy-efficient hardware, software, and algorithms
- **Renewable energy:** Powering data centres with renewable energy sources
- **Right to Repair:** Legislation and design practices that enable consumers to repair and extend
  the life of their devices
- **Circular economy:** Designing products for disassembly, reuse, and recycling from the outset
- **Responsible disposal:** Proper recycling and disposal of electronic equipment
- **Efficient algorithms:** Choosing algorithms with lower computational complexity to reduce energy
  consumption

### 4.6 Censorship and Freedom of Expression

#### The Tension

Freedom of expression is a fundamental human right (Article 10 of the European Convention on Human
Rights, Article 19 of the Universal Declaration of Human Rights). However, this right is not
absolute and may be restricted for legitimate reasons:

- **Public safety:** Content that incites violence or terrorism
- **Protection of minors:** Content that is harmful to children
- **Hate speech:** Content that attacks individuals based on protected characteristics
- **Defamation:** False statements that damage reputation
- **National security:** Content that could endanger the state
- **Privacy:** Content that reveals private information about individuals

#### Censorship Mechanisms

| Mechanism                | Description                                                                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Government blocking      | Governments block access to specific websites or services (e.g., the Great Firewall of China blocks access to many international services).               |
| Content removal requests | Governments issue takedown requests to platforms (e.g., GDPR right to erasure, court orders for defamatory content).                                      |
| Algorithmic filtering    | Platforms use algorithms to demote, restrict, or remove content (e.g., YouTube content moderation, Twitter/X label policies).                             |
| Self-censorship          | Individuals or organisations restrict their own expression due to fear of legal consequences, social backlash, or surveillance.                           |
| Network-level filtering  | ISPs or network operators filter content at the network level (e.g., the UK's ISP-level filtering of child sexual abuse material via the IWF block list). |

#### The Role of Technology Companies

Technology companies (Google, Meta, X/Twitter, Apple) exercise significant control over online
speech through their content moderation policies. Key questions:

- Should private companies have the power to decide what speech is permissible?
- Are content moderation decisions transparent and consistent?
- Is moderation biased (ideologically, politically, or commercially)?
- How should platforms balance free expression with the prevention of harm?

### 4.7 Intellectual Property vs Open Source

#### The Case for Strong Intellectual Property Protection

- Incentivises innovation by ensuring creators can profit from their work
- Protects the economic value of creative and technical work
- Enables investment in research and development
- Provides legal recourse against theft and plagiarism

#### The Case for Open Source

- Promotes collaboration and knowledge sharing
- Accelerates innovation by building on existing work
- Reduces costs for users and organisations
- Improves security through transparency (many eyes make bugs shallow)
- Prevents vendor lock-in

#### Tensions

| Issue                 | Proprietary Model                                                 | Open Source Model                                                                                 |
| --------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Incentive to innovate | Strong: profit motive drives investment                           | Weaker: innovation driven by community, reputation, and service models                            |
| Access                | Limited: users pay for access, may be restricted by licence terms | Broad: anyone can use, study, and modify the software                                             |
| Security              | Relies on the vendor to find and fix vulnerabilities              | Transparent: anyone can audit the code, but vulnerabilities may also be found by malicious actors |
| Business model        | Selling licences, subscriptions, or usage                         | Selling services (support, hosting, consulting), dual licensing, or sponsored development         |
| Compatibility         | May create vendor lock-in                                         | Standards-based, interoperable                                                                    |
| Quality               | Varies: commercial pressure may lead to rushed releases           | Varies: community-driven quality may be higher or lower depending on project maturity             |

<hr />

## 5. Moral Dilemmas

### 5.1 Self-Driving Cars and the Trolley Problem

#### The Classic Trolley Problem

A runaway trolley is heading toward five people who will be killed if it continues. You can pull a
lever to divert the trolley onto a side track, where it will kill one person instead. Do you pull
the lever?

#### Applied to Autonomous Vehicles

An autonomous vehicle encounters an unavoidable collision. Its options are:

- Continue straight: kill one pedestrian
- Swerve: kill the driver
- Swerve the other way: kill multiple pedestrians

#### Ethical Analysis

| Framework      | Analysis                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Utilitarianism | The car should minimise total harm. If swerving saves more lives, it should swerve, even if this kills the driver.                                                       |
| Deontology     | The car should follow universalisable rules. If the rule is "protect the occupants," the car should not sacrifice the driver. If the rule is "minimise harm," it should. |
| Virtue ethics  | A virtuous designer would consider all stakeholders, be transparent about the car's decision-making, and ensure the system is as safe as possible overall.               |

#### Real-World Complexity

- **Programming decisions:** Someone must decide how the car behaves. This is an ethical decision
  embedded in code.
- **Liability:** If the car's decision kills someone, who is legally responsible? The manufacturer?
  The software developer? The car owner? The passenger?
- **Market acceptance:** Consumers may not purchase a car programmed to sacrifice its occupants.
  This creates a collective action problem: if every car minimises total harm, overall safety
  improves, but no individual buyer wants to be the one sacrificed.

#### The German Ethics Commission on Automated Driving (2017)

In 2017, Germany established an ethical commission that produced 20 guidelines for autonomous
vehicles. Key principles:

- In the event of unavoidable accident situations, any distinction based on personal features (age,
  sex, etc.) is strictly prohibited
- It must be clearly regulated that parties involved in the generation of risk (manufacturers,
  operators, IT systems) do not sacrifice non-involved parties
- In hazardous situations, the technology must be programmed to accept damage to animals or property
  if this means that personal injury can be prevented

### 5.2 Encryption Backdoors: Apple vs FBI

#### The Case

In 2016, the FBI obtained a court order compelling Apple to create a modified version of iOS that
would bypass the auto-erase security feature on an iPhone 5c used by one of the San Bernardino
shooters. The FBI wanted to brute-force the passcode without triggering the 10-attempt data wipe.

Apple refused, arguing that:

1. Creating such software would set a dangerous precedent
2. The software could be used on any iPhone, not just this one
3. It would undermine the security and privacy of all iPhone users
4. There is no such thing as a "backdoor that only the good guys can use" -- once created, the
   capability could be exploited by hackers, foreign governments, or malicious insiders
5. The All Writs Act of 1789, cited by the FBI, does not grant such sweeping authority

The FBI ultimately withdrew the request after paying a third party to unlock the phone using an
alternative method.

#### Ethical Analysis

| Framework      | Analysis                                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Utilitarianism | A utilitarian would weigh the harm of one unread phone against the harm of weakening encryption for billions of users. The latter is likely greater.                          |
| Deontology     | Apple has a duty to protect the security of its customers. Creating a backdoor would violate the categorical imperative (would we will that all companies create backdoors?). |
| Virtue ethics  | Apple's stance demonstrates integrity and courage. A virtuous company protects its customers' trust even under government pressure.                                           |

#### Broader Implications

- The "going dark" debate: law enforcement argues that encryption prevents them from investigating
  serious crimes
- The security community argues that any backdoor, even one intended for law enforcement,
  fundamentally weakens security
- This is an ongoing debate with no consensus resolution

### 5.3 Social Media Moderation

#### The Dilemma

Social media platforms host billions of pieces of user-generated content daily. They must decide:

- What content to remove
- What content to leave up
- What content to demote or restrict
- Whether to label or add context to disputed content

#### Key Challenges

| Challenge                | Description                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Scale                    | The volume of content is too large for human review alone. Algorithms must make initial decisions, with human appeal.                        |
| Context dependence       | Whether content is harmful depends on context, intent, and audience. The same image may be acceptable in one context and harmful in another. |
| Free speech vs harm      | Platforms must balance freedom of expression with the prevention of harm (hate speech, misinformation, incitement to violence).              |
| Inconsistency            | Content moderation decisions are often inconsistent. Users perceive bias when similar content is treated differently.                        |
| Misinformation           | False or misleading information (e.g., about elections, public health) can cause real harm. But platforms are not neutral arbiters of truth. |
| Cross-border differences | Content that is legal in one jurisdiction may be illegal in another. Platforms operate globally but must comply with local laws.             |

#### Ethical Analysis

- **Utilitarian:** Moderation should maximise overall well-being. Remove content that causes the
  most harm. The difficulty is measuring harm.
- **Deontological:** Platforms have a duty to be transparent and consistent. Users have a right to
  know the rules and to appeal decisions.
- **Virtue ethics:** A virtuous platform acts with integrity, is honest about its policies, respects
  users, and takes responsibility for the consequences of its design choices.

### 5.4 Facial Recognition in Public Spaces

#### The Technology

Facial recognition systems use cameras to capture images of faces, extract biometric features, and
match them against a database of known faces. Uses include:

- Law enforcement: identifying suspects in crowds, at borders, or from CCTV footage
- Retail: identifying known shoplifters or VIP customers
- Schools: monitoring attendance
- Public spaces: general surveillance

#### Concerns

| Concern            | Description                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accuracy           | Facial recognition systems have higher error rates for women and people with darker skin tones. Misidentification can lead to wrongful arrest or denial of service. |
| Consent            | Individuals in public spaces are scanned without their knowledge or consent.                                                                                        |
| Chilling effects   | The knowledge that one is being watched and identified may alter behaviour, deterring peaceful protest and free association.                                        |
| Function creep     | Data collected for one purpose (e.g., identifying suspects) may be used for other purposes (e.g., tracking political dissidents).                                   |
| Mass surveillance  | Combined with widespread CCTV, facial recognition enables comprehensive tracking of individuals' movements.                                                         |
| Lack of regulation | There is no specific UK legislation governing the use of live facial recognition by police or private entities.                                                     |

#### Case Studies

- **South Wales Police (2020):** The Court of Appeal ruled that South Wales Police's use of
  automated facial recognition (AFR) was unlawful. The court found that the legal framework was
  insufficiently clear, the data retention policy was inadequate, and there was insufficient
  oversight. The judgment did not ban AFR but required a proper legal basis.
- **Clearview AI:** As noted in section 2.2, Clearview AI built a database of billions of facial
  images scraped from the web without consent. The ICO ordered the company to delete UK data.

### 5.5 Predictive Policing

#### What Is Predictive Policing?

**Definition.** **Predictive policing** uses data analysis and machine learning to forecast where
and when crimes are likely to occur, or to identify individuals who are likely to commit crimes.

#### How It Works

1. Historical crime data is collected (location, time, type of crime)
2. Additional data may be included (socioeconomic data, social media, weather)
3. Machine learning models identify patterns and generate predictions (e.g., "high crime risk in
   grid cell X during hours Y-Z")
4. Police resources are deployed based on predictions

#### Concerns

| Concern              | Description                                                                                                                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feedback loops       | Police are sent to areas predicted to have high crime. They find and record more crime in those areas. This data feeds back into the model, reinforcing the prediction. This creates a self-fulfilling prophecy. |
| Racial bias          | If historical policing data reflects biased policing practices (e.g., over-policing of minority neighbourhoods), the model will perpetuate those biases.                                                         |
| Lack of transparency | Proprietary algorithms are not open to public scrutiny. Defendants cannot challenge predictions they cannot inspect.                                                                                             |
| Presumption of guilt | Predictive policing shifts the focus from responding to crimes that have occurred to pre-emptively policing individuals or areas predicted to produce crime.                                                     |
| Due process          | Treating individuals as future criminals based on statistical predictions undermines the presumption of innocence.                                                                                               |

#### Ethical Analysis

| Framework      | Analysis                                                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Utilitarianism | If predictive policing reduces overall crime, it may be justified. But if it increases harm to innocent individuals in over-policed communities, the net utility may be negative. |
| Deontology     | Predictive policing treats individuals as a means (data points) rather than ends in themselves. It violates the duty to treat people as innocent until proven guilty.             |
| Virtue ethics  | A virtuous police force would use data with humility, recognise the limitations of predictions, and ensure that policing is fair and proportionate.                               |

<hr />

## 6. Exam Practice

:::info
Board-specific The following questions are structured to match the style of AQA, OCR (A),
Edexcel, and CIE examination papers. AQA and OCR favour structured questions with specific marks for
specific points. Edexcel and CIE favour extended discussion questions requiring evaluation.
:::

### Question 1 (AQA-style, 6 marks)

A company collects personal data from its customers and sells this data to third-party advertisers
without the customers' knowledge or consent.

(a) Identify the UK legislation that has been breached. (1 mark)

<details>
<summary>Answer</summary>

The Data Protection Act 2018 / UK GDPR.

</details>

(b) State two data protection principles that have been violated. (2 marks)

<details>
<summary>Answer</summary>

1. **Lawfulness, fairness, and transparency:** Processing is not lawful (no lawful basis, no
   consent), is unfair (customers are unaware), and is not transparent (customers are not informed).
2. **Purpose limitation:** Data was collected for the company's own purposes but is being used for
an incompatible purpose (selling to advertisers).
</details>

(c) Explain the role of the ICO in this scenario. (3 marks)

<details>
<summary>Answer</summary>

The Information Commissioner's Office (ICO) is the UK's independent supervisory authority for data
protection. In this scenario, the ICO would:

1. Investigate the company's data processing practices to determine whether the law has been broken
2. If a breach is confirmed, the ICO can issue an enforcement notice requiring the company to cease
   the unlawful processing
3. The ICO can impose an administrative fine of up to 17.5 million GBP or 4% of annual global
   turnover (whichever is greater) for the most serious infringements
4. The ICO can require the company to take specific remedial actions to come into compliance
</details>

### Question 2 (OCR-style, 10 marks)

A software developer discovers that the company she works for has been collecting and storing
customer passwords in plain text. The database has been accessible to all employees. When she
reports this to her manager, she is told to ignore it.

Discuss the legal, ethical, and professional implications of this situation.

<details>
<summary>Answer</summary>

**Legal implications:**

- Storing passwords in plain text violates the DPA 2018/UK GDPR principle of integrity and
  confidentiality (security). The company has failed to implement appropriate technical measures to
  protect personal data.
- If a data breach occurs as a result, the company must report it to the ICO within 72 hours.
- The ICO could impose a significant fine for the security failure.
- Under the Consumer Rights Act 2015, digital services must be provided with reasonable care and
  skill. Insecure storage of passwords may breach this obligation.

**Ethical implications:**

- The company has a moral obligation to protect its customers' data. Failing to secure passwords is
  a betrayal of customer trust.
- Applying deontology: the company has a duty of care to its customers. Storing passwords in plain
  text violates this duty regardless of whether a breach has occurred.
- Applying utilitarianism: the risk of harm (account takeover, identity theft) from a breach
  outweighs any cost or effort of implementing proper security (hashing and salting).

**Professional implications:**

- The BCS Code of Conduct requires members to act with integrity and to have due regard for the
  security of personal data.
- The developer has a professional obligation to ensure the security of the systems she develops.
- The Public Interest Disclosure Act 1998 protects the developer if she whistleblows to a prescribed
regulator (e.g., the ICO) because the failure to secure personal data likely constitutes a failure
to comply with a legal obligation.
</details>

### Question 3 (Edexcel-style, 15 marks)

"Artificial intelligence systems should never be used to make decisions that significantly affect
people's lives."

Evaluate this statement. You should consider arguments for and against, and reference specific
legislation and ethical frameworks in your answer.

<details>
<summary>Answer</summary>

**Arguments against the statement (AI should be allowed to make significant decisions):**

- **Efficiency and scale:** AI systems can process far more data and make decisions faster than
  humans. In healthcare, AI diagnostic systems can analyse medical images with accuracy matching or
  exceeding human radiologists, potentially saving lives through earlier diagnosis.
- **Consistency:** AI systems apply rules consistently without fatigue, bias (if properly designed),
  or emotional influence. A credit scoring algorithm applies the same criteria to every applicant,
  whereas a human loan officer may be influenced by unconscious bias.
- **Economic benefit:** Automation of decision-making reduces costs, enabling services to be
  provided to more people. This is a utilitarian argument: the greatest good for the greatest
  number.
- **Human oversight is still possible:** AI can be used to recommend decisions that are then
  approved by humans (human-in-the-loop). This combines the efficiency of AI with human judgement.

**Arguments for the statement (AI should not make significant decisions):**

- **Bias and fairness:** As discussed in section 4.2, AI systems can perpetuate and amplify existing
  biases. The COMPAS recidivism prediction system demonstrated racial bias, with serious
  consequences for individuals' liberty. Under the Equality Act 2010, decisions based on algorithmic
  bias may constitute indirect discrimination.
- **Lack of transparency:** Many AI systems are "black boxes" -- it is not possible to explain why a
  particular decision was reached. Article 22 of UK GDPR gives individuals the right not to be
  subject to decisions based solely on automated processing that produce legal or similarly
  significant effects, and to obtain human intervention.
- **Accountability:** When an AI system makes a wrong decision, it is unclear who is responsible.
  The developer? The data provider? The organisation deploying the system? This gap in
  accountability is a moral failing.
- **Deontological objection:** Decisions that affect people's lives should be made by moral agents
  who can understand the consequences, exercise empathy, and take responsibility. AI systems are not
  moral agents.
- **Virtue ethics objection:** A virtuous society would ensure that decisions about people's lives
  are made with compassion, wisdom, and an understanding of individual circumstances. AI systems
  cannot exercise these virtues.

**Conclusion:**

A blanket ban on AI decision-making is impractical and would forego significant benefits. However,
strong regulation is essential. AI systems should be subject to: mandatory bias audits; transparency
requirements; human oversight for high-stakes decisions; and clear accountability frameworks.
Article 22 of UK GDPR provides a foundation, but additional legislation specific to algorithmic
decision-making may be needed. The Online Safety Act 2023 and the Equality Act 2010 provide partial
coverage, but a comprehensive AI Act (similar to the EU AI Act) would address gaps.

The ethical frameworks each contribute to the solution: utilitarianism demands that AI be used only
where the benefits outweigh the risks; deontology requires that AI respects individuals' rights;
virtue ethics demands that developers and deployers act with integrity, competence, and care.

</details>

### Question 4 (CIE-style, 12 marks)

A city council proposes to install facial recognition cameras in all public spaces, including parks,
shopping centres, and transport hubs, to reduce crime.

Discuss the ethical and legal issues arising from this proposal.

<details>
<summary>Answer</summary>

**Legal issues:**

- **Data Protection Act 2018/UK GDPR:** Facial images are biometric data, which is special category
  data under UK GDPR. Processing requires explicit consent or another lawful basis under Article 9.
  Capturing faces of passers-by without consent is unlikely to satisfy this requirement.
- **Equality Act 2010:** Facial recognition systems have documented higher error rates for women and
  people with darker skin tones. If the system leads to disproportionate targeting of these groups,
  this may constitute indirect discrimination.
- **Human Rights Act 1998:** Article 8 (right to respect for private and family life) and Article 10
  (freedom of expression) may be engaged. The council must demonstrate that the surveillance is
  necessary, proportionate, and in accordance with law.
- **Investigatory Powers Act 2016:** If the system is used for law enforcement purposes, the IPA may
  apply, requiring appropriate authorisation and oversight.
- **Court precedent:** The Court of Appeal ruling in R (Bridges) v. Chief Constable of South Wales
  Police (2020) found that AFR use was unlawful due to insufficient legal framework and data
  protection failures.

**Ethical issues:**

- **Privacy:** Continuous surveillance of public spaces eliminates the ability to move anonymously
  through the world. This is a fundamental loss of privacy.
- **Consent:** Individuals have no meaningful choice about being scanned. The sheer scale of the
  deployment makes opt-out impossible.
- **Function creep:** Data collected for crime prevention may later be used for other purposes
  (e.g., tracking political protesters, monitoring attendance at religious services).
- **Chilling effects:** Knowledge of pervasive surveillance may deter lawful activities such as
  peaceful protest, freedom of association, and free expression.
- **Accuracy and wrongful identification:** Misidentification could lead to wrongful stops, arrests,
  or being denied entry to public spaces.
- **Utilitarian perspective:** The council must demonstrate that the reduction in crime justifies
  the privacy intrusion. If the system is inaccurate or ineffective, the balance tips against it.
- **Deontological perspective:** Treating every citizen as a potential criminal subject to
  surveillance violates the duty to respect individual autonomy and dignity.

**Conclusion:**

The proposal raises serious legal and ethical concerns. For it to be lawful, the council would need
a clear legal basis, a DPIA, explicit safeguards for special category data, and compliance with the
Equality Act. Ethically, the proposal should be subject to rigorous independent review, with
evidence that the system is accurate, effective, and that less intrusive alternatives have been
considered.

</details>

### Question 5 (AQA-style, 9 marks)

Explain the difference between the Computer Misuse Act 1990 and the Data Protection Act 2018 in
relation to a scenario where an employee of a company accesses a customer database without
authorisation and copies the personal data of 50,000 customers, selling it to a competitor.

<details>
<summary>Answer</summary>

**Computer Misuse Act 1990:**

The employee has committed an offence under Section 1 (unauthorised access to computer material) by
accessing the customer database without permission. This carries a maximum penalty of 2 years
imprisonment.

The employee has also committed an offence under Section 2 (unauthorised access with intent to
commit further offence) because they intended to commit fraud (selling the data to a competitor for
financial gain). This carries a maximum penalty of 5 years imprisonment.

**Data Protection Act 2018/UK GDPR:**

The employee's actions constitute a data breach. The company (as data controller) has obligations
under the DPA 2018:

- The security principle (Article 5(1)(f)) has been violated because the company failed to prevent
  unauthorised access to personal data
- The company must report the breach to the ICO within 72 hours
- The company must notify affected data subjects without undue delay if the breach is likely to
  result in a high risk to their rights and freedoms
- The ICO can impose a fine of up to 17.5 million GBP or 4% of annual global turnover

The employee has also committed a criminal offence under the DPA 2018 (Section 170) for knowingly or
recklessly obtaining or disclosing personal data without the consent of the data controller.

**Distinction:**

The CMA criminalises the _unauthorised access_ to the computer system itself. The DPA 2018 regulates
the _processing of personal data_ and imposes obligations on data controllers to protect it. Both
apply simultaneously: the access is a CMA offence, and the data theft is a DPA 2018 offence. The
employee can be prosecuted under both Acts.

</details>

### Question 6 (Short answer, 4 marks)

State four exemptions under the Freedom of Information Act 2000.

<details>
<summary>Answer</summary>

Any four of:

1. Information relating to national security
2. Information that would prejudice law enforcement
3. Information whose disclosure would prejudice the effective conduct of public affairs
4. Information that would constitute a breach of confidence actionable by any person
5. Personal data (exempt under the DPA 2018)
6. Information provided in confidence
7. Commercial interests (where disclosure would prejudice the commercial interests of any person)
8. Communications with the Royal Family
9. Health and safety (where disclosure would endanger physical or mental health)
</details>

### Question 7 (Extended response, 10 marks)

"Software developers should be held legally responsible for the bugs in their code."

Evaluate this statement with reference to relevant legislation and ethical frameworks.

<details>
<summary>Answer</summary>

**Arguments for holding developers responsible:**

- **Consumer Rights Act 2015:** Digital content must be of satisfactory quality, fit for purpose,
  and as described. A developer who releases buggy software is in breach of these obligations.
- **Professional responsibility:** The BCS Code of Conduct requires members to exercise professional
  skill and judgement to the best of their ability. Negligent coding falls below this standard.
- **Utilitarian argument:** Holding developers accountable incentivises better quality, reducing
  overall harm from software failures (e.g., the Therac-25 radiation therapy machine, where software
  bugs caused patient deaths).
- **Deontological argument:** Developers have a duty of care to users of their software. They should
  be held accountable for failures that result from negligence.

**Arguments against holding developers responsible:**

- **Complexity:** Modern software systems are extraordinarily complex (millions of lines of code,
  numerous dependencies). It is unreasonable to expect zero bugs. Holding developers liable for
  every bug would stifle innovation.
- **Shared responsibility:** Software failures often result from systemic issues -- poor
  requirements, inadequate testing, organisational pressure to ship quickly -- not individual
  developer negligence.
- **Economic impact:** The cost of liability insurance and legal defence would be passed on to
  consumers and would disproportionately harm small developers and open-source contributors.
- **Virtue ethics:** A virtuous developer already strives for quality. Legal liability may not
  significantly improve quality and may instead encourage defensive practices (e.g., excessive
  disclaimers, reduced willingness to contribute to open source).

**Conclusion:**

A nuanced approach is needed. Developers should be held responsible for **negligent** failures
(where they failed to meet a reasonable standard of care), but not for every bug in complex systems.
The Consumer Rights Act 2015 already provides a framework: consumers have rights against the
_trader_ (the company selling the software), not individual developers. Professional negligence law
provides a mechanism for holding individuals accountable for grossly negligent work. What is needed
is not stricter individual liability, but better organisational practices (code review, testing,
continuous integration, responsible disclosure of vulnerabilities).

</details>
