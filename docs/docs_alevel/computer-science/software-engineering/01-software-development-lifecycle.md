---
title: Software Development Lifecycle
description:
  A-Level Computer Science notes on Software Development Lifecycle: Definition
  for comprehensive revision and examination preparation.
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: software-development-lifecycle
---

## 1. The Software Development Lifecycle (SDLC)

### Definition

The **Software Development Lifecycle (SDLC)** is a structured framework describing the phases
involved in developing software, from initial conception through to deployment and maintenance.

### Common Phases

1. **Analysis** — Understand requirements, identify the problem
2. **Design** — Plan the architecture, algorithms, and interfaces
3. **Implementation** — Write the code
4. **Testing** — Verify correctness and quality
5. **Deployment** — Release to users
6. **Maintenance** — Fix bugs, add features, adapt to changes

<hr />

## 2. Waterfall Model

### Description

A **sequential**, linear approach where each phase must be completed before the next begins.
Developed by Winston Royce in 1970.

```
Analysis → Design → Implementation → Testing → Deployment → Maintenance
```

### Characteristics

| Property             | Value                                |
| -------------------- | ------------------------------------ |
| Type                 | Plan-driven                          |
| Flexibility          | Low — changes are expensive          |
| Customer involvement | Minimal (mostly at start/end)        |
| Documentation        | Extensive                            |
| Risk                 | High — issues found late are costly  |
| Best for             | Well-understood, stable requirements |

### Advantages

- Simple to understand and manage
- Clear milestones and deliverables
- Well-defined documentation at each stage

### Disadvantages

- No working software until late in the cycle
- Difficult to accommodate requirement changes
- Customer sees the product only at the end
- Testing is a single phase — bugs found late are expensive to fix

<hr />

## 3. Agile Methodology

### Description

An **iterative, incremental** approach that emphasises flexibility, customer collaboration, and
delivering working software in short cycles.

### The Agile Manifesto (2001)

Individuals and interactions over processes and tools Working software over comprehensive
documentation Customer collaboration over contract negotiation Responding to change over following a
plan

### Scrum Framework

A specific Agile methodology with defined roles, events, and artefacts.

**Roles:**

- **Product Owner:** Defines the product vision and prioritises the backlog
- **Scrum Master:** Facilitates the process, removes impediments
- **Development Team:** Self-organising team that builds the product

**Events (Sprint cycle, typically 2-4 weeks):**

1. **Sprint Planning:** Select items from the product backlog for the sprint
2. **Daily Standup:** 15-minute meeting: what did I do, what will I do, any blockers?
3. **Sprint Review:** Demonstrate completed work to stakeholders
4. **Sprint Retrospective:** Reflect on the process and improve

**Artefacts:**

- **Product Backlog:** Ordered list of all desired features
- **Sprint Backlog:** Items selected for the current sprint
- **Increment:** The sum of completed work at the end of a sprint

### Characteristics

| Property             | Value                                      |
| -------------------- | ------------------------------------------ |
| Type                 | Change-driven                              |
| Flexibility          | High — embrace changing requirements       |
| Customer involvement | Continuous throughout                      |
| Documentation        | Minimal — working software is priority     |
| Risk                 | Low — issues found early                   |
| Best for             | Evolving requirements, innovative projects |

<hr />

## 4. Spiral Model

### Description

Combines elements of waterfall and iterative development. Each iteration (spiral) passes through
four quadrants:

1. **Determine objectives** — Identify goals, constraints, alternatives
2. **Identify and resolve risks** — Risk analysis and mitigation
3. **Development and testing** — Build a prototype or increment
4. **Review and plan** — Evaluate and plan the next spiral

```
        Risk Analysis
       ↗              ↘
Objectives          Development
       ↖              ↙
          Review
```

### Characteristics

| Property    | Value                                           |
| ----------- | ----------------------------------------------- |
| Risk focus  | High — explicit risk analysis at each iteration |
| Flexibility | Medium                                          |
| Best for    | Large, complex, high-risk projects              |

### Advantages

- Risk is identified and addressed early
- Accommodates changes
- Customer feedback at each iteration

### Disadvantages

- Complex to manage
- Requires risk assessment expertise
- Expensive for small projects

<hr />

## 5. Rapid Application Development (RAD)

### Description

RAD emphasises **rapid prototyping** and iterative development, with minimal planning in favour of
speed. Uses workshops, focus groups, and iterative user testing.

### Phases

1. **Requirements planning** — Workshop with users and developers
2. **User design** — Prototype development with user feedback
3. **Construction** — Build the system using the prototype as a basis
4. **Cutover** — Final testing, deployment, and handover

### Best for

- Projects with well-defined business requirements
- Short timeframes
- User interface-intensive applications

<hr />

## 6. Comparison of Methodologies

| Feature          | Waterfall  | Agile     | Spiral    | RAD       |
| ---------------- | ---------- | --------- | --------- | --------- |
| Approach         | Linear     | Iterative | Iterative | Iterative |
| Flexibility      | Low        | High      | Medium    | High      |
| Customer involv. | Low        | High      | Medium    | High      |
| Risk management  | Low        | Medium    | High      | Low       |
| Documentation    | High       | Low       | High      | Low       |
| Cost of change   | High       | Low       | Medium    | Low       |
| Best for         | Stable req | Evolving  | High-risk | Fast dev  |

:::info Board-specific

- **AQA** requires understanding of waterfall, agile, spiral, and rapid application development
  (RAD) methodologies; requires comparison of approaches
- **CIE (9618)** covers waterfall and agile methodologies; may include iterative development
- **OCR (A)** requires waterfall and agile methodologies with understanding of when each is
  appropriate
- **Edexcel** covers SDLC phases and development methodologies
:::

<hr />

## 7. UML Diagrams

### Class Diagrams

Show classes, their attributes, methods, and relationships.

```
+------------------+       +------------------+
|    Animal        |       |     Owner        |
+------------------+       +------------------+
| - name: String   |       | - name: String   |
| - age: int       |       | - phone: String  |
+------------------+       +------------------+
| + get_name()     |       | + adopt(animal)  |
| + set_age(age)   |       | + get_pets()     |
+------------------+       +------------------+
        | 1                       | 1
        |                         |
        | *                       | *
+------------------+
|      Pet         |
+------------------+
| - species: String|
+------------------+
| + make_sound()   |
+------------------+
```

### Use Case Diagrams

Show interactions between actors (users) and the system.

- **Actor:** Stick figure representing a user role
- **Use case:** Oval representing a system function
- **Relationships:** Lines connecting actors to use cases

### Other UML Diagrams

| Diagram Type      | Purpose                                     |
| ----------------- | ------------------------------------------- |
| Sequence diagram  | Show message flow between objects over time |
| Activity diagram  | Model workflow / business processes         |
| State diagram     | Show states and transitions of an object    |
| Component diagram | Show system components and dependencies     |

<hr />

## Problem Set

**Problem 1.** A school wants to develop a new student management system. Requirements are well
understood and unlikely to change. Which SDLC model would you recommend? Justify your answer.

<details>
<summary>Answer</summary>

**Waterfall model.** Justification:

- Requirements are stable and well-understood → no need for iterative refinement
- Clear phases provide good project management structure
- Extensive documentation is valuable for a school system (long-term maintenance)
- Lower complexity compared to Agile for a well-defined project
- Budget and timeline can be estimated more accurately
</details>

**Problem 2.** A startup is building a social media app with rapidly changing features based on user
feedback. Which methodology is most appropriate and why?

<details>
<summary>Answer</summary>

**Agile (Scrum).** Justification:

- Requirements are evolving and not fully known upfront
- Customer feedback drives development — Agile embraces change
- Short sprints allow rapid iteration and frequent releases
- Working software delivered early allows market validation
- Low cost of changing direction based on user feedback
</details>

**Problem 3.** Draw a UML class diagram for a library system with classes `Library`, `Book`,
`Member`, and `Loan`. Show appropriate relationships and key attributes/methods.

<details>
<summary>Answer</summary>

```
+------------------+
|     Library      |
+------------------+
| - name: String   |
| - books: List<Book> |
| - members: List<Member> |
+------------------+
| + add_book(b)    |
| + register(m)    |
| + find_book(isbn)|
+------------------+
        | 1
        |
        | *
+------------------+
|      Book        |
+------------------+
| - isbn: String   |
| - title: String  |
| - author: String |
| - available: bool|
+------------------+
| + borrow()       |
| + return()       |
+------------------+

+------------------+
|     Member       |
+------------------+
| - id: String     |
| - name: String   |
+------------------+
| + borrow_book(b) |
| + return_book(b) |
+------------------+

+------------------+
|      Loan        |
+------------------+
| - book: Book     |
| - member: Member |
| - due_date: Date |
+------------------+
| + is_overdue()   |
| + extend(days)   |
+------------------+
```

Relationships:

- Library 1 --- \* Book (composition: books belong to the library)
- Library 1 --- \* Member (aggregation: members exist independently)
- Member 1 --- \* Loan (composition: loans belong to a member)
- Book 1 --- \* Loan (aggregation: a book can have many loans over time)
</details>

**Problem 4.** Explain the role of the Scrum Master. Why is this role important?

<details>
<summary>Answer</summary>

The Scrum Master is a **facilitator** (not a manager) who:

1. Ensures the team follows Scrum practices and principles
2. Removes impediments that block the team's progress
3. Protects the team from external interruptions during sprints
4. Facilitates Scrum events (daily standup, sprint planning, retrospective)
5. Coaches the team on self-organisation and continuous improvement
6. Acts as a buffer between the development team and external stakeholders

This role is important because without it, teams often revert to ad-hoc practices, lose focus on
sprint goals, or fail to identify and address process issues.

</details>

**Problem 5.** Compare the cost of fixing a bug in the waterfall model vs Agile. At which stage is
each model most efficient?

<details>
<summary>Answer</summary>

**Waterfall:** Bugs are typically found during the testing phase, which occurs after all development
is complete. The cost of fixing a bug increases exponentially the later it is found:

- During design: relatively cheap (redesign)
- During implementation: moderate (rewrite code)
- During testing: expensive (may require redesign and re-implementation)
- After deployment: very expensive (hotfix, regression testing, user impact)

**Agile:** Bugs are found within each sprint (1-4 weeks). The cost is lower because:

- The scope of change is limited to the current sprint
- Tests are written alongside code (TDD)
- Frequent feedback catches issues early
- The cost multiplier is typically 3-5× vs 100× in waterfall

Agile is most efficient at the sprint level — bugs found within the same sprint they were introduced
are cheapest to fix.

</details>

**Problem 6.** Explain what a "minimum viable product" (MVP) is and how it relates to Agile
development.

<details>
<summary>Answer</summary>

A **Minimum Viable Product (MVP)** is the simplest version of a product that delivers enough value
to early customers and provides feedback for future development. It contains only the core features
needed to solve the primary problem.

**Relationship to Agile:**

- Each sprint potentially delivers an increment that could be an MVP
- Agile encourages delivering working software early → MVP thinking
- User feedback on the MVP informs the product backlog
- The MVP validates assumptions before investing in full development

Example: A ride-sharing app MVP might have only driver-rider matching and payment — no ratings, no
scheduling, no advanced features.

</details>

**Problem 7.** Describe a situation where the spiral model would be more appropriate than both
waterfall and Agile.

<details>
<summary>Answer</summary>

The spiral model is most appropriate for **large, complex, high-risk projects** where:

- Requirements are partially known but evolving
- Significant technical or financial risk must be managed
- The project involves new technology with unknown feasibility
- Regulatory or safety requirements demand rigorous risk assessment

**Example:** Developing a medical device control system. Risks include patient safety, regulatory
approval, hardware-software integration, and liability. Each spiral iteration would:

1. Define objectives (e.g., "implement heart rate monitoring")
2. Analyse risks (e.g., "what if the sensor fails?")
3. Build and test a prototype
4. Review with medical experts and regulators

Waterfall is too inflexible for evolving requirements. Agile doesn't provide sufficient risk
analysis for safety-critical systems.

</details>

**Problem 8.** Create a use case diagram description for an online shopping system. Identify three
actors and at least five use cases.

<details>
<summary>Answer</summary>

**Actors:**

1. Customer — browses and purchases products
2. Admin — manages the catalogue and orders
3. Payment System (external) — processes payments

**Use Cases:**

1. Browse Products — Customer searches and views products
2. Add to Cart — Customer adds items to shopping cart
3. Checkout — Customer completes a purchase
4. Process Payment — System sends payment request to Payment System
5. Manage Inventory — Admin updates product stock and prices
6. View Orders — Customer views order history
7. Generate Reports — Admin generates sales reports

**Relationships:**

- `Checkout` «includes» `Process Payment` (checkout always involves payment)
- `Browse Products` «extends» `Search by Category` (optional filter)
- Customer is associated with Browse, Add to Cart, Checkout, View Orders
- Admin is associated with Manage Inventory, Generate Reports
- Payment System is associated with Process Payment

For revision on testing, see [Testing](/docs/alevel/computer-science/software-engineering/testing).

</details>

<hr />

## 8. Worked Example: Waterfall vs Agile for a Hospital System

### Scenario

A hospital requires a new patient record management system. Requirements include:

- Secure storage of patient medical records
- Integration with existing lab equipment (APIs are documented but untested)
- Compliance with medical data regulations (GDPR, HIPAA)
- Role-based access for doctors, nurses, and administrators

### Waterfall Approach

**Plan:**

1. **Analysis (3 months):** Gather all requirements from hospital staff, legal team, and IT
2. **Design (3 months):** Design database schema, API integrations, access control system
3. **Implementation (6 months):** Build the complete system
4. **Testing (3 months):** Comprehensive testing including security audit
5. **Deployment (1 month):** Migrate data from old system, train staff

**Total timeline:** 16 months. **Cost:** Fixed budget, predictable.

**Risks:** If lab equipment APIs behave differently than documented, the implementation phase is
delayed. If regulations change during development, redesign is needed.

### Agile Approach

**Plan:**

- Sprint 1-2: Core patient record CRUD, basic authentication
- Sprint 3-4: Role-based access control
- Sprint 5-6: Lab equipment API integration (prototype, discover issues early)
- Sprint 7-8: Regulatory compliance features, audit logging
- Sprint 9-10: Reporting, dashboards, polish

**Total timeline:** 20 weeks (5 months). **Cost:** Variable, depends on scope changes.

**Advantages:** Lab API issues are discovered in sprint 5, not month 9. Regulation changes are
accommodated in the next sprint. Hospital staff see working software after sprint 2 and can provide
feedback.

### Comparison

| Factor                     | Waterfall                               | Agile                                        |
| -------------------------- | --------------------------------------- | -------------------------------------------- |
| Timeline to first delivery | 16 months                               | 5 weeks (MVP)                                |
| Cost predictability        | High                                    | Medium                                       |
| Adaptability to API issues | Low (expensive redesign)                | High (discovered in sprint)                  |
| Regulatory compliance      | Designed upfront, audited once          | Continuous compliance, tested each sprint    |
| Staff feedback             | Only at deployment                      | Every 2 weeks                                |
| Best fit if...             | Requirements are fully known and stable | Requirements are partially known or evolving |

<hr />

## 9. Risk Management in the SDLC

### The Risk Management Process

1. **Identification:** List potential risks (technical, operational, external)
2. **Analysis:** Assess likelihood and impact of each risk
3. **Prioritisation:** Rank risks to focus mitigation efforts
4. **Mitigation:** Develop strategies to reduce likelihood or impact
5. **Monitoring:** Track risks throughout the project lifecycle

### Risk Analysis Matrix

|                       | Low Impact      | Medium Impact   | High Impact     |
| --------------------- | --------------- | --------------- | --------------- |
| **High Likelihood**   | Medium priority | High priority   | Critical        |
| **Medium Likelihood** | Low priority    | Medium priority | High priority   |
| **Low Likelihood**    | Accept          | Low priority    | Medium priority |

### Risk Mitigation Strategies

| Strategy | Description                             | Example                                       |
| -------- | --------------------------------------- | --------------------------------------------- |
| Avoid    | Eliminate the risk by changing the plan | Use proven technology instead of experimental |
| Transfer | Shift the risk to a third party         | Use a cloud provider for infrastructure       |
| Mitigate | Reduce likelihood or impact             | Write automated tests to catch bugs early     |
| Accept   | Acknowledge the risk and plan for it    | Budget contingency for unexpected issues      |

### Example: Risks in a School Management System

| Risk                            | Likelihood | Impact | Mitigation                                      |
| ------------------------------- | ---------- | ------ | ----------------------------------------------- |
| Requirements change mid-project | High       | Medium | Use Agile with short sprints                    |
| Key developer leaves            | Medium     | High   | Document code, pair programming, cross-training |
| Data migration errors           | Medium     | High   | Write migration scripts early, test with copies |
| Performance issues at scale     | Low        | High   | Load testing in each sprint                     |
| Third-party API downtime        | Medium     | Medium | Implement caching and fallback mechanisms       |

<hr />

## 10. Common Pitfalls

| Pitfall                                      | Explanation                                       | Avoidance                                                             |
| -------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| Choosing waterfall for evolving requirements | Late changes are extremely expensive              | Assess requirement stability before choosing methodology              |
| Skipping the analysis phase                  | Building the wrong product                        | Invest time in understanding the problem before building              |
| No user involvement during development       | Product does not meet user needs                  | Regular demos and feedback sessions                                   |
| Insufficient testing                         | Bugs reach production                             | Allocate at least 30% of project time to testing                      |
| Ignoring technical debt                      | Accumulated shortcuts make future changes harder  | Schedule refactoring time in each sprint                              |
| Scope creep                                  | Uncontrolled addition of features delays delivery | Use a prioritised backlog, freeze scope for each sprint               |
| Poor documentation                           | Knowledge lost when team members leave            | Maintain essential docs (architecture, API, deployment) even in Agile |

<hr />

## 11. Additional Problem Set

**Problem 1.** A government agency is building a tax processing system. Requirements are specified
by law and cannot change during development. The system must handle millions of records accurately.
Recommend an SDLC methodology and justify your choice.

<details>
<summary>Answer</summary>

**Waterfall model.** Justification:

- Requirements are fixed by law and cannot change — waterfall's rigidity is an advantage, not a
  limitation
- Accuracy is critical — extensive documentation and formal testing phases ensure correctness
- Large scale (millions of records) — thorough upfront design prevents architectural issues
- Regulatory audit — waterfall's comprehensive documentation supports compliance requirements
- Predictable budget and timeline — government projects typically require fixed-cost contracts

Agile would be inappropriate because: iterative delivery of a tax system makes no sense (users
cannot give feedback on a partially-complete tax calculation), and the cost of errors in tax
calculations is very high.

</details>

**Problem 2.** Explain how the spiral model's risk analysis phase would apply to a project
developing autonomous vehicle software.

<details>
<summary>Answer</summary>

**Spiral 1 (Concept):** Objective: prove basic sensor integration is feasible. Risk: sensors may not
provide sufficient data. Mitigation: build a small-scale prototype in a controlled environment.

**Spiral 2 (Core navigation):** Objective: implement path planning. Risk: algorithm may not handle
edge cases (pedestrians, weather). Mitigation: extensive simulation testing with edge case
scenarios.

**Spiral 3 (Real-world testing):** Objective: test on public roads. Risk: safety incidents.
Mitigation: safety driver, restricted test areas, gradual expansion of test zones.

**Spiral 4 (Regulatory approval):** Objective: meet safety standards. Risk: failure to pass
regulatory review. Mitigation: engage regulators early, document all safety cases, conduct
independent audits.

Each spiral produces a working increment while systematically addressing the highest-priority risks
before they become costly problems.

</details>

**Problem 3.** A project uses RAD methodology. The prototype is demonstrated to users, who request
significant changes to the user interface. The development team argues these changes are too costly.
How should this situation be resolved?

<details>
<summary>Answer</summary>

This situation is expected in RAD — the whole point is to gather user feedback early and iterate.
Resolution steps:

1. **Evaluate the changes:** Determine which changes are essential (affect usability) vs cosmetic
   (nice to have)
2. **Prioritise:** Add essential changes to the next iteration; defer cosmetic changes to a later
   cycle
3. **Re-estimate:** Update the project timeline and budget based on the revised scope
4. **Communicate:** Present the trade-offs to stakeholders — more features vs earlier delivery
5. **Decide:** The product owner (or client) decides whether to accept the revised timeline or
   reduce scope

RAD expects requirements to evolve through user feedback. Rejecting all changes defeats the purpose.
However, uncontrolled changes lead to scope creep, so a structured change management process is
needed.

</details>

**Problem 4.** Create a risk analysis matrix for a project to develop an e-commerce website.
Identify at least four risks and classify them.

<details>
<summary>Answer</summary>

| Risk                                     | Likelihood | Impact   | Priority | Mitigation                                                |
| ---------------------------------------- | ---------- | -------- | -------- | --------------------------------------------------------- |
| Payment gateway integration fails        | Medium     | High     | High     | Early prototyping of payment flow, have a backup provider |
| Database cannot handle peak traffic      | Medium     | High     | High     | Load testing early, design for horizontal scaling         |
| Security breach (customer data)          | Low        | Critical | High     | Security audit, encryption, penetration testing           |
| Project team lacks e-commerce experience | High       | Medium   | High     | Hire experienced developer, use proven framework          |
| Third-party shipping API changes         | Medium     | Low      | Low      | Abstract API behind an interface, monitor for deprecation |
| Customer requirements change             | High       | Medium   | High     | Use Agile, prioritise backlog, freeze scope per sprint    |

</details>

**Problem 5.** Explain why documentation is important even in Agile methodologies, despite the Agile
Manifesto valuing "working software over comprehensive documentation."

<details>
<summary>Answer</summary>

The Agile Manifesto says "working software over comprehensive documentation" — it does not say "no
documentation." The word "comprehensive" is key: Agile rejects voluminous documentation that nobody
reads, not documentation itself.

Essential documentation in Agile includes:

1. **Product backlog:** The prioritised list of features (the primary requirements document)
2. **Definition of Done:** Clear criteria for when a feature is complete
3. **Architecture decisions:** Key technical decisions and their rationale
4. **API documentation:** Necessary for integration between components and teams
5. **Runbooks:** How to deploy, monitor, and troubleshoot the system

Documentation serves purposes that working software cannot:

- **Onboarding:** New team members need written context
- **Compliance:** Regulatory requirements may mandate specific documentation
- **Maintenance:** Future developers need to understand decisions made years ago
- **Communication:** Written specs reduce ambiguity in distributed teams

The Agile principle is: produce the minimum documentation that provides value, and keep it up to
date.

</details>

:::
