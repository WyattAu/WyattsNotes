---
title: System Lifecycle
description: "DSE ICT notes on the system development lifecycle covering analysis, design, implementation, testing, documentation, evaluation, maintenance, feasibility"
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - ICT
categories:
  - DSE
  - ICT
slug: system-lifecycle
---

This document covers the system development lifecycle (SDLC) for the DSE ICT examination. Understanding
the SDLC is essential for analysing how information systems are developed, from initial problem
identification through to ongoing maintenance.

---

## Overview of the System Development Lifecycle

The system development lifecycle (SDLC) is a structured methodology for developing information systems.
It consists of distinct phases, each with specific activities and deliverables.

### Phases of the SDLC

| Phase          | Purpose                                                      | Key Deliverables                       |
| -------------- | ------------------------------------------------------------ | -------------------------------------- |
| **Analysis**   | Understand the problem and identify requirements          | Requirements specification, feasibility study |
| **Design**     | Plan the solution (hardware, software, data, UI)             | System specifications, designs, diagrams |
| **Implementation**| Build the system according to the design                  | Working system, programs, database      |
| **Testing**    | Verify the system works correctly and meets requirements   | Test reports, bug fixes                  |
| **Documentation**| Produce user and technical documentation                  | User manual, technical guide, help files |
| **Evaluation** | Assess whether the system meets its objectives              | Evaluation report                      |
| **Maintenance**| Keep the system running and up to date after deployment      | Updates, patches, enhancements           |

---

## Phase 1: Analysis

### Purpose

The analysis phase investigates the current system and the problem it needs to solve. The analyst
gathers information about what the new system must do (requirements) without specifying how it will
be built.

### Activities

| Activity                  | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| **Problem identification**| Define the current problem clearly and specifically             |
| **Fact finding**          | Collect information about the current system and requirements  |
| **Requirements analysis** | Determine what the new system must do (functional requirements) |
| **Feasibility study**     | Assess whether the project is viable and worthwhile             |
| **Requirements specification**| Produce a formal document listing all requirements         |

### Fact-Finding Methods

| Method               | Description                                                     | Advantages                           | Disadvantages                    |
| -------------------- | --------------------------------------------------------------- | ----------------------------------- | -------------------------------- |
| **Interviews**       | Face-to-face or structured interviews with stakeholders         | In-depth, allows follow-up questions | Time-consuming, may be biased   |
| **Questionnaires**   | Written surveys distributed to a large number of users          | Reaches many people, anonymous     | Low response rate, rigid questions |
| **Observation**       | Watch users performing their current tasks                     | Reveals actual practices            | Users may change behaviour when observed |
| **Document analysis** | Examine existing documents, forms, reports, manuals            | Provides existing data source       | May be outdated or incomplete      |
| **Sampling**         | Examine a representative subset of data                         | Efficient for large datasets        | Sample may not be representative   |

### Types of Requirements

| Type                     | Description                                                     | Example                               |
| ------------------------ | --------------------------------------------------------------- | ------------------------------------- |
| **Functional**           | What the system must do                                        | "The system shall calculate monthly payroll" |
| **Non-functional**       | How the system should perform                                   | "The system shall respond within 2 seconds" |
| **Input requirements**   | Data inputs the system must accept                               | "Accept student name, class, and scores" |
| **Output requirements**  | Outputs the system must produce                                  | "Print a class list sorted by name"    |
| **Storage requirements** | Data that must be stored and retained                             | "Store 5 years of attendance records"  |
| **Performance**          | Speed, throughput, response time requirements                   | "Handle 100 concurrent users"          |

### Feasibility Study

A feasibility study evaluates whether a project is worth pursuing. It examines multiple dimensions
of feasibility.

| Feasibility Type     | Description                                                     | Key Questions                                           |
| ------------------- | --------------------------------------------------------------- | ------------------------------------------------------ |
| **Technical**       | Can the system be built with available technology and expertise? | Do we have the hardware, software, and skills?          |
| **Economic**        | Is the project financially viable?                              | Do the benefits outweigh the costs? Will it save money?   |
| **Operational**      | Will the system be accepted and usable by the organisation?     | Will staff use it? Does it fit existing workflows?        |
| **Schedule**         | Can the project be completed within the required timeframe?     | Do we have enough time? Are the deadlines realistic?       |
| **Legal**           | Does the project comply with relevant laws and regulations?     | Data protection (PDPO), copyright, accessibility laws     |

<details>
<summary>Worked Example: Feasibility Study for a School Library System</summary>

**Scenario:** A school wants to replace its manual library catalogue with a computerised system.

**Technical feasibility:**
- The school has computers, a network, and a server room.
- Library management software is commercially available (e.g., Koha, SLIMS).
- A local IT company can provide installation and support.
- **Assessment: Feasible.**

**Economic feasibility:**
- Software cost: HKD 50,000 (one-time) + HKD 10,000/year (maintenance).
- Hardware upgrades: HKD 20,000 (barcode scanner, additional workstation).
- Staff training: HKD 5,000.
- Total first-year cost: HKD 85,000.
- Benefits: Reduced book search time (estimated 30 minutes/day saved for librarian), better tracking,
  fewer lost books (estimated savings of HKD 10,000/year).
- Payback period: ~8.5 years. **Assessment: Marginally feasible; long payback period.**

**Operational feasibility:**
- The librarian is willing to learn the new system.
- Teachers and students will benefit from online catalogue search.
- The system fits the existing workflow (borrowing/returning books).
- **Assessment: Feasible.**

**Schedule feasibility:**
- Installation during summer break (6 weeks available).
- Training: 2 days for librarian, 1 day for teachers.
- Data entry (cataloguing existing books): Estimated 4 weeks with part-time assistant.
- **Assessment: Feasible if started early in the summer break.**

**Legal feasibility:**
- Student data used in the library system is subject to PDPO.
- The school must obtain consent for data collection and implement security measures.
- **Assessment: Feasible with proper PDPO compliance.**

**Recommendation:** Proceed with the project, starting at the beginning of the summer break to allow
sufficient time for data entry. Negotiate software cost or consider open-source alternatives to
improve economic feasibility.

</details>

---

## Phase 2: Design

### Purpose

The design phase plans how the system will be built. It translates the requirements into detailed
specifications for hardware, software, data, and user interface.

### Design Activities

| Activity                  | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| **Hardware design**      | Specify the required hardware (servers, workstations, network)  |
| **Software design**      | Plan the program structure, modules, and algorithms              |
| **Data design**          | Design the database schema, tables, relationships, data dictionary |
| **Input design**         | Design data entry screens, forms, validation rules               |
| **Output design**        | Design reports, screen layouts, printed outputs                  |
| **User interface design**| Design the interaction between users and the system               |
| **Security design**      | Plan access controls, encryption, backup procedures             |

### Design Tools and Techniques

| Tool                  | Description                                                     | Used In              |
| --------------------- | --------------------------------------------------------------- | ------------------- |
| **System flowchart**  | Shows the flow of data through the entire system                | System design       |
| **Data flow diagram** | Shows how data moves between processes, stores, and entities   | System design       |
| **Entity-relationship diagram** | Models the data entities and their relationships           | Data design         |
| **Structure chart**   | Shows the hierarchical decomposition of the system into modules | Software design     |
| **Pseudocode**         | Structured description of algorithm logic                       | Software design     |
| **Wireframe**          | Sketch of the user interface layout                            | UI design           |
| **Data dictionary**    | Detailed description of every data item in the system            | Data design         |

### Data Flow Diagrams (DFD)

DFDs show how data flows through a system. They use four symbols:

| Symbol           | Meaning                          |
| ---------------- | -------------------------------- |
| **External entity**| A source or destination of data (rectangle) |
| **Process**       | A data transformation activity (rounded rectangle) |
| **Data store**    | A repository of data (open-ended rectangle)  |
| **Data flow**     | Movement of data (arrow)                      |

**Levels of DFD:**

| Level       | Name               | Description                                                    |
| ----------- | ------------------ | -------------------------------------------------------------- |
| Level 0     | Context diagram    | Shows the entire system as a single process with external entities |
| Level 1     | Overview           | Major processes and data flows within the system                |
| Level 2     | Detailed           | Expanded view of individual Level 1 processes                   |

---

## Phase 3: Implementation

### Purpose

The implementation phase builds the system according to the design specifications. This includes
writing software, installing hardware, configuring the system, and migrating data.

### Implementation Methods

| Method                 | Description                                                     | Advantage                    | Disadvantage                 |
| ---------------------- | --------------------------------------------------------------- | ---------------------------- | ---------------------------- |
| **Direct changeover**  | Old system is replaced by the new system on a single date       | Quick, low parallel running cost| High risk; no fallback       |
| **Parallel running**   | Both old and new systems run simultaneously for a period        | Safe; can compare results      | Expensive; double workload     |
| **Phased implementation**| System is introduced in stages, one module at a time           | Lower risk per phase           | Takes longer; temporary hybrid |
| **Pilot running**      | New system is trialled with one department or location first    | Risk limited to pilot group   | Pilot may not represent whole organisation |

<details>
<summary>Worked Example: Choosing an Implementation Method</summary>

**Scenario:** A hospital is replacing its patient record system with a new electronic health record
(EHR) system.

**Recommendation: Phased implementation, starting with a pilot.**

Reasoning:

1. **Direct changeover is too risky:** Patient safety is critical. If the new system fails, doctors would
   have no access to patient records, which could endanger lives.
2. **Parallel running is impractical:** Doctors and nurses already have heavy workloads. Maintaining
   two systems simultaneously would be burdensome and error-prone.
3. **Phased implementation with pilot:** Start with one department (e.g., outpatients) as a pilot.
   Identify and fix issues before rolling out to other departments (inpatients, surgery, pharmacy).
   This limits risk while allowing iterative improvement.

**Rollout plan:**

| Phase | Department     | Duration | Notes                             |
| ----- | -------------- | -------- | --------------------------------- |
| 1     | Outpatients    | 2 months | Pilot; intensive monitoring       |
| 2     | Inpatients     | 2 months | Apply lessons from Phase 1        |
| 3     | Pharmacy       | 1 month  | Integration with prescription system |
| 4     | Surgery        | 1 month  | Final department                  |

</details>

### Data Migration

Moving data from the old system to the new system requires careful planning.

| Step | Activity                                  | Purpose                                   |
| ---- | ----------------------------------------- | ----------------------------------------- |
| 1    | Data extraction                           | Extract data from the old system           |
| 2    | Data cleaning                            | Remove duplicates, fix errors, standardise |
| 3    | Data transformation                     | Convert to the new system's format         |
| 4    | Data loading                             | Import into the new system                 |
| 5    | Data verification                       | Compare old and new data for consistency    |

---

## Phase 4: Testing

### Purpose

Testing verifies that the system works correctly, meets requirements, and is free from defects.

### Types of Testing

| Test Type              | Description                                                     | When Performed              |
| --------------------- | --------------------------------------------------------------- | -------------------------- |
| **Unit testing**       | Tests individual components (functions, modules) in isolation   | During development         |
| **Integration testing** | Tests how components work together                              | After unit testing          |
| **System testing**     | Tests the entire system as a whole                              | After integration testing  |
| **Acceptance testing** | Tests whether the system meets the user's requirements           | Before handover to users    |
| **Alpha testing**      | Testing by the development team in a controlled environment       | Before beta testing          |
| **Beta testing**       | Testing by real users in their normal environment               | Before final release         |

### Test Data

| Data Type     | Description                                                     | Purpose                           |
| ------------- | --------------------------------------------------------------- | --------------------------------- |
| **Normal**     | Typical, expected values                                        | Verify normal operation            |
| **Boundary**   | Values at the edges of valid ranges                             | Check edge cases                   |
| **Erroneous**  | Invalid, out-of-range, or incorrect values                       | Verify error handling               |
| **Extreme**    | Very large or very small values                                 | Stress test the system              |
| **Absent**     | Missing or null values                                          | Verify handling of missing data      |

<details>
<summary>Worked Example: Test Plan for a Score Entry System</summary>

A system accepts student scores (0--100) and calculates grades.

| Test Case ID | Input | Expected Output | Test Type | Purpose        |
| ------------ | ----- | --------------- | --------- | -------------- |
| TC-01        | 85    | Grade: A        | Normal    | Typical input  |
| TC-02        | 60    | Grade: B        | Normal    | Typical input  |
| TC-03        | 0     | Grade: F        | Boundary  | Minimum valid  |
| TC-04        | 100   | Grade: A        | Boundary  | Maximum valid  |
| TC-05        | -1    | Error message   | Erroneous | Below range    |
| TC-06        | 101   | Error message   | Erroneous | Above range    |
| TC-07        | "abc" | Error message   | Erroneous | Non-numeric   |
| TC-08        | (empty)| Error message | Absent    | Missing input  |
| TC-09        | 79    | Grade: B        | Boundary  | Just below A   |
| TC-10        | 80    | Grade: A        | Boundary  | Threshold for A |

</details>

---

## Phase 5: Documentation

### Types of Documentation

| Document Type         | Audience          | Description                                                     |
| -------------------- | ----------------- | --------------------------------------------------------------- |
| **User manual**       | End users         | How to use the system (step-by-step instructions, screenshots)   |
| **Technical guide**   | IT staff          | Technical specifications, installation, configuration              |
| **System documentation**| Developers      | Program code comments, design documents, data dictionary         |
| **Training materials**| Trainees          | Exercises, tutorials, quick reference guides                    |
| **Operator guide**    | System operators  | Day-to-day operation procedures, backup and recovery instructions |
| **Help files**        | End users         | Context-sensitive help, FAQs, troubleshooting                   |

### What Makes Good Documentation

| Characteristic        | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| **Clear and concise** | Easy to understand, avoids jargon                             |
| **Well-organised**    | Logical structure with table of contents and index               |
| **Up to date**         | Reflects the current version of the system                      |
| **Illustrated**        | Includes screenshots, diagrams, and examples                      |
| **Accessible**         | Available in multiple formats (print, online, PDF)                |
| **Version-controlled** | Tracks changes between versions                                 |

---

## Phase 6: Evaluation

### Purpose

Evaluation assesses whether the system meets its original objectives and identifies areas for
improvement.

### Evaluation Criteria

| Criterion                | Description                                                     | Measurement Method                      |
| ------------------------ | --------------------------------------------------------------- | -------------------------------------- |
| **Functionality**        | Does the system do what it was designed to do?                  | Testing against requirements specification |
| **Usability**            | Is the system easy to learn and use?                            | User surveys, observation                 |
| **Efficiency**           | Does the system improve productivity?                            | Time studies before/after               |
| **Reliability**          | Does the system operate without failures?                       | Error logs, uptime monitoring            |
| **Security**             | Does the system protect data adequately?                        | Security audit, penetration testing       |
| **Cost-effectiveness**   | Do the benefits justify the costs?                              | Cost-benefit analysis                   |
| **User satisfaction**     | Are users happy with the system?                                | Surveys, interviews, feedback forms       |

### Post-Implementation Review

A formal review conducted after the system has been in use for a defined period (typically 3--6 months).

**Questions to address:**

1. Does the system meet all functional requirements?
2. Are there any performance issues?
3. What problems have users encountered?
4. Are there any features that users want but were not included?
5. Is the documentation adequate?
6. What training gaps exist?
7. What maintenance has been required?
8. Was the project completed within budget and schedule?

---

## Phase 7: Maintenance

### Types of Maintenance

| Type                   | Description                                                     | Example                                  |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------- |
| **Corrective**         | Fixing bugs and errors discovered after deployment              | Fix a calculation error in payroll system |
| **Adaptive**           | Modifying the system to work in a changed environment          | Update software for new operating system  |
| **Perfective**         | Improving the system's performance or adding new features       | Add a reporting module requested by users |
| **Preventive**         | Performing maintenance to prevent future problems               | Update database indexes to maintain speed  |

### Maintenance Costs

Maintenance typically accounts for 60--80% of the total cost of a system over its lifetime. This is
often underestimated during the initial project planning.

---

## Project Management

### Gantt Charts

A Gantt chart is a horizontal bar chart that shows the project schedule. Each task is represented as a
bar, with the bar's length proportional to the task's duration.

```
Task                | Week 1 | Week 2 | Week 3 | Week 4 | Week 5 | Week 6 |
--------------------|--------|--------|--------|--------|--------|--------|
Analysis            | XXXXXX |        |        |        |        |        |
Feasibility Study   | XXXX   |        |        |        |        |        |
Design              |        | XXXXXX | XXXX   |        |        |        |
Database Design     |        | XXXX   |        |        |        |        |
Implementation      |        |        | XXXXXX | XXXXXX |        |        |
Testing             |        |        |        |        | XXXXXX |        |
Documentation        |        |        |        |        | XXXX   | XXXX   |
Training            |        |        |        |        |        | XXXX   |
Evaluation          |        |        |        |        |        | XXXX   |
```

**Key elements of a Gantt chart:**

| Element             | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| **Task list**        | All project tasks listed on the vertical axis                   |
| **Timeline**         | Time periods (days, weeks, months) on the horizontal axis       |
| **Task bars**        | Horizontal bars showing each task's start and end dates          |
| **Dependencies**     | Arrows showing which tasks depend on the completion of others    |
| **Milestones**       | Diamond markers indicating key dates or deliverables              |
| **Critical path**    | The longest sequence of dependent tasks; determines the minimum project duration |

### Critical Path Analysis

The critical path is the sequence of tasks that determines the minimum project duration. Any delay on
the critical path delays the entire project.

**Float (slack):** The amount of time a task can be delayed without affecting the project deadline.

- Tasks on the critical path have zero float.
- Tasks not on the critical path have positive float (can be delayed without affecting the deadline).

### Project Management Tools

| Tool                | Description                                                     | Use Case                         |
| ------------------- | --------------------------------------------------------------- | ------------------------------- |
| **Gantt chart**     | Visual timeline of tasks                                        | Scheduling and monitoring         |
| **PERT chart**      | Network diagram showing task dependencies                      | Critical path analysis           |
| **CPM**             | Critical Path Method -- identifies the longest task sequence    | Project duration planning        |
| ** milestones**      | Key dates or deliverables marked on the timeline                | Progress tracking                |

### Stakeholder Engagement

| Stakeholder       | Interest Level | Influence | Engagement Strategy                    |
| ----------------- | -------------- | --------- | -------------------------------------- |
| **Project sponsor** | High           | High      | Regular updates, executive summaries  |
| **End users**       | High           | Medium    | Surveys, training, feedback sessions  |
| **Management**      | Medium         | High      | Progress reports, milestone reviews   |
| **IT department**   | High           | High      | Technical reviews, collaboration       |
| **External vendors**| Medium         | Medium    | Contract management, SLAs            |

---

## Change Management

### Why Change Management Matters

Introducing a new system changes how people work. Resistance to change is natural and must be managed
to ensure successful adoption.

### Strategies for Managing Change

| Strategy                  | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| **Communication**         | Keep all stakeholders informed about the change and its benefits |
| **Training**               | Provide comprehensive training before and after the change       |
| **Involvement**            | Involve users in the design and testing phases                    |
| **Champion identification** | Identify enthusiastic users who can advocate for the system      |
| **Phased introduction**    | Introduce changes gradually to reduce disruption                  |
| **Feedback mechanism**     | Provide channels for users to report issues and suggest improvements |
| **Management support**     | Visible support from senior management                         |

### Reasons for Resistance to Change

| Reason                 | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| **Fear of redundancy**  | Concern that the new system will eliminate jobs                 |
| **Comfort with current** | Users are familiar with the existing system and reluctant to change |
| **Lack of understanding** | Users do not understand the benefits of the new system           |
| **Inadequate training**  | Users feel unprepared to use the new system                      |
| **Poor past experiences** | Previous system changes were handled badly                       |
| **Increased workload**  | The transition period requires extra effort from users           |

---

## Common Pitfalls

1. **Skipping the analysis phase:** Jumping straight to implementation without proper requirements analysis
   leads to a system that does not meet users' needs. The analysis phase is critical for
   understanding the problem.

2. **Insufficient testing:** Testing only with normal data misses edge cases and error conditions. A
   comprehensive test plan must include boundary, erroneous, extreme, and absent data.

3. **Poor documentation:** Documentation is often treated as an afterthought. Inadequate documentation
   makes the system difficult to use, maintain, and support.

4. **Ignoring user feedback:** Users who will operate the system daily often have practical insights
   that analysts miss. Ignoring their feedback leads to poor user acceptance.

5. **Underestimating maintenance:** Many projects fail to budget for ongoing maintenance, which can
   account for 60--80% of total system costs over its lifetime.

6. **No feasibility study:** Starting a project without assessing feasibility wastes resources on
   projects that may not be technically, economically, or operationally viable.

7. **Direct changeover without backup:** Switching to a new system without a fallback plan is
   extremely risky. If the new system fails, there is no way to continue operations.

8. **Critical path not identified:** Failing to identify the critical path means resources may not
   be allocated to the most time-sensitive tasks, causing project delays.

9. **Inadequate training:** Users who are not properly trained will resist the new system, make more
   errors, and reduce the system's effectiveness.

10. **Scope creep:** Adding new requirements during the project without adjusting the budget and
    schedule leads to delays, cost overruns, and incomplete systems.

---

## Practice Problems

<details>
<summary>Question 1: SDLC Phases</summary>

A school is developing a new student attendance tracking system that uses RFID cards to record
attendance automatically.

(a) For the analysis phase, describe two fact-finding methods that would be appropriate and explain
    what information each would gather.

(b) For the design phase, state two types of documentation that should be produced and describe their
    contents.

(c) Recommend an implementation method and justify your choice.

(d) Describe two types of testing that should be performed before the system goes live.

Answer:

(a) **Interviews with teachers:** Teachers currently take manual attendance. Interviews would reveal
their current workflow, pain points (e.g., time wasted, inaccurate records), and what features they
need in the new system.

**Observation:** Observe the morning registration process to understand exactly how attendance is
currently recorded, how long it takes, and what problems arise (e.g., students forgetting to report,
proxy attendance).

(b) **Data flow diagram:** Shows how attendance data flows from the RFID scanner through the system to
the attendance database and then to reports viewed by teachers and parents.

**User interface design:** Mockups of the teacher's dashboard showing real-time attendance status,
absence alerts, and report generation features.

(c) **Pilot running.** Start with one class or one form level as a pilot. This limits risk -- if the
RFID system has issues (e.g., readers not scanning cards reliably), only the pilot group is affected.
Problems can be identified and fixed before rolling out to the entire school.

(d) **Integration testing:** Test that the RFID readers communicate correctly with the central system,
   that attendance data is stored accurately in the database, and that the teacher dashboard displays
   correct information.

**Acceptance testing:** Teachers and administrators use the system in their normal environment and verify
   that it meets their requirements (accurate attendance recording, timely reporting, easy to use).

</details>

<details>
<summary>Question 2: Feasibility Study</summary>

A small retail shop with 3 employees is considering installing a barcode-based point-of-sale (POS)
system to replace their current manual cash register.

(a) Assess the technical, economic, and operational feasibility of this project.

(b) Identify three stakeholders and explain their interest in the project.

Answer:

(a) **Technical feasibility:** Barcode scanners and POS software are mature, widely available
technologies. The shop has a computer that can run POS software. A barcode scanner costs approximately
HKD 500--2,000. Basic POS software is available from HKD 2,000--10,000. No specialised technical
expertise is needed for installation. **Assessment: Feasible.**

**Economic feasibility:** One-time costs: POS software (HKD 5,000), barcode scanner (HKD 1,000),
barcode printer for labels (HKD 1,500), training (HKD 1,000) = total HKD 8,500. Ongoing costs:
software maintenance (HKD 1,000/year). Benefits: faster checkout (save ~5 min per transaction),
reduced errors in pricing and change-giving, automatic inventory tracking, better sales reporting.
Estimated savings: HKD 3,000--5,000/year. **Assessment: Feasible. Payback period ~2 years.**

**Operational feasibility:** With only 3 employees, training is minimal (1--2 days). The POS system
simplifies their work (no manual price lookup, automatic inventory updates). Risk of resistance is
low if employees see the time savings. **Assessment: Feasible.**

(b) Three stakeholders:

1. **Shop owner:** Wants accurate financial reporting, inventory tracking, reduced errors, and
   increased profitability. Has the decision-making power.
2. **Shop assistants:** Want a system that is easy to use, speeds up checkout, and does not create
   extra work. Concerned about learning a new system.
3. **Customers:** Benefit from faster checkout, accurate pricing, and itemised receipts. Indirect
   stakeholders who do not use the system directly.

</details>

<details>
<summary>Question 3: Gantt Chart and Critical Path</summary>

A project has the following tasks and dependencies:

| Task          | Duration (weeks) | Dependencies |
| ------------- | ---------------- | ------------ |
| A: Analysis   | 3                | None         |
| B: Design     | 4                | A            |
| C: Programming| 6                | B            |
| D: Testing    | 2                | C            |
| E: Documentation| 3               | C            |
| F: Training   | 1                | D, E         |
| G: Evaluation | 2                | F            |

(a) Draw the Gantt chart (describe the schedule in text).

(b) Identify the critical path.

(c) Calculate the minimum project duration.

(d) Task E is delayed by 1 week. Does this affect the project completion date? Explain.

Answer:

(a) Schedule (week numbers when tasks start):

| Task          | Start | End   | Weeks Active |
| ------------- | ----- | ----- | ------------ |
| A: Analysis   | 1     | 3     | 1, 2, 3      |
| B: Design     | 4     | 7     | 4, 5, 6, 7   |
| C: Programming| 8     | 13    | 8--13        |
| D: Testing    | 14    | 15    | 14, 15       |
| E: Documentation| 14    | 16    | 14, 15, 16   |
| F: Training   | 17    | 17    | 17           |
| G: Evaluation | 18    | 19    | 18, 19       |

(b) **Critical path: A --> B --> C --> D --> F --> G**

(c) Critical path length: 3 + 4 + 6 + 2 + 1 + 2 = 18 weeks. Minimum project duration: 18 weeks.

(d) Task E (Documentation) has a duration of 3 weeks and is followed by Task F (Training). Task F
depends on both D and E. Task D ends at week 15. If E is delayed by 1 week (now ends at week 17
instead of 16), F starts at week 17 (when both D and E are complete). Since F only takes 1 week
and starts at week 17, and G follows at week 18, the overall project is NOT delayed. Task E had 1
week of float (E could finish as late as week 16 without affecting F's start at week 17). A 1-week
delay uses up this float but does not extend the project.

</details>

<details>
<summary>Question 4: Testing and Evaluation</summary>

A hospital's new patient booking system has just been developed. The system allows patients to book
appointments online, receive confirmation emails, and allows staff to manage the appointment calendar.

(a) Describe three types of testing that should be performed, with specific examples for this system.

(b) After 3 months of operation, describe how the hospital should evaluate the system.

(c) A user reports that when they try to book an appointment on 29 February (a non-leap year), the
    system accepts the booking. What type of test would have caught this error?

Answer:

(a) **Unit testing:** Test individual functions in isolation. For example, test the date validation
function with various dates to ensure it correctly identifies valid and invalid dates.

**Integration testing:** Test that the booking module correctly interacts with the email module
(confirmation emails are sent), the database (appointments are stored correctly), and the calendar
display (booked slots are marked as unavailable).

**Acceptance testing:** Hospital staff and a sample of patients use the system to perform real tasks
(booking an appointment, cancelling, rescheduling) and verify that the system meets their requirements.

**Security testing:** Test that unauthorised users cannot access patient records, that SQL injection
attacks are prevented, and that patient data is encrypted in transit.

(b) **Evaluation methods:**

1. **User satisfaction survey:** Ask patients and staff to rate the system on ease of use,
   reliability, and features.
2. **Quantitative metrics:** Measure the reduction in phone calls for appointments, the percentage
   of appointments booked online vs phone, and the average time to book an appointment.
3. **Error log analysis:** Review system logs for bugs, crashes, or failed transactions.
4. **Comparison with objectives:** Compare actual performance against the original requirements
   specification (e.g., "reduce phone booking calls by 50%").

(c) This is a **boundary test** error. The date 29 February 2025 is invalid (2025 is not a leap year).
Boundary testing should test dates at the edges of valid ranges, including the last day of February
for both leap years and non-leap years. The test should verify that the system correctly rejects 29
February for non-leap years and accepts it for leap years.

</details>

<details>
<summary>Question 5: Change Management Scenario</summary>

A large company is replacing its legacy payroll system with a modern cloud-based system. Many employees
have used the old system for 15+ years and are resistant to the change.

(a) Identify three reasons why employees might resist this change.

(b) Describe three change management strategies the company should use to overcome resistance.

(c) Explain why parallel running would be inappropriate for this project and recommend an alternative.

Answer:

(a) **Three reasons for resistance:**

1. **Comfort with the current system:** Employees have used the old system for 15+ years and are
   highly proficient. They fear the learning curve of the new system.
2. **Fear of job loss:** Employees may worry that automation in the new system will make their roles
   redundant.
3. **Disruption during transition:** Learning the new system while performing their normal duties
   increases workload and stress. Mistakes during the learning period could affect payroll accuracy.

(b) **Three change management strategies:**

1. **Involvement:** Include payroll staff representatives in the design and testing phases. When users
   help shape the system, they feel ownership and are more likely to accept it.
2. **Comprehensive training:** Provide hands-on training sessions well before the go-live date. Offer
   refresher sessions and a help desk for the first few months. Training reduces anxiety and builds
   competence.
3. **Identify champions:** Find enthusiastic, influential employees who can advocate for the new system
   among their peers. Positive word-of-mouth from trusted colleagues is more effective than
   top-down mandates.

(c) **Parallel running is inappropriate** because payroll involves sensitive financial data. Running two
   payroll systems simultaneously means processing payroll twice per month, which doubles the workload
   for payroll staff. Any discrepancy between the two systems creates confusion and requires manual
   reconciliation.

**Alternative: Phased implementation.** Start with one department or one payroll cycle (e.g., run
   the June payroll on the new system while running May on the old system). Verify results, fix issues,
   and then switch completely. This limits risk without the burden of full parallel running.

</details>
