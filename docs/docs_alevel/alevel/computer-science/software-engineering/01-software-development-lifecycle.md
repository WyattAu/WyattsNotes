---
title: Software Development Lifecycle
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

---

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

---

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

---

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

---

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

---

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

:::info
Board-specific

- **AQA** requires understanding of waterfall, agile, spiral, and rapid application development
  (RAD) methodologies; requires comparison of approaches
- **CIE (9618)** covers waterfall and agile methodologies; may include iterative development
- **OCR (A)** requires waterfall and agile methodologies with understanding of when each is
  appropriate
- **Edexcel** covers SDLC phases and development methodologies
:::

---

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

---

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

For revision on testing, see
[Testing](/docs/academics/alevel/computer-science/software-engineering/testing).
</details>

:::
