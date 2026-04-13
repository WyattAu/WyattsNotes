---
title: System Design
date: 2025-05-01T23:39:16.680Z
tags:
  - CS
categories:
  - CS
---

## Design

### Prototype

A early model of a system created to showcase a concept or design before release. This is normally
useful for:

- Presenting a concept to investors
- Attract client attention
- Encourage participation between users and developers
- Aid in identification of problems early on in a development

## Human Interface

### Usability

Usability is the capacity of a system to accomplish user goals, a combination of accessibility and
ergonomics.

#### Accessibility

Accessibility is the range of audience the system is able to be used by, this include lowering the
access barrier for disabled individuals with assistance technology.

#### Ergonomics

Ergonomics is the measure of safety and comfortability of the system, including cushioned mouse pad,
split keyboard, etc.

## System Development Life Cycle (SDLC)

The SDLC is a structured methodology for developing information systems. The IB syllabus focuses on
understanding the stages and their purposes.

### Stages of the SDLC

1. **Analysis**: Identify the problem, gather requirements from stakeholders, define the scope of
   the project. Output: requirements specification.
2. **Design**: Plan the system architecture, data structures, user interface, and algorithms.
   Output: design documents (data flow diagrams, UML diagrams, pseudocode).
3. **Development (Implementation)**: Write the code, build the database, create the user interface
   according to the design specifications.
4. **Testing**: Verify that the system meets the requirements and works correctly. Includes unit
   testing, integration testing, and system testing.
5. **Evaluation**: Assess the solution against the original requirements, gather user feedback,
   identify limitations and potential improvements.

### SDLC Models

| Model     | Description                                                                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Waterfall | Sequential, linear approach — each phase must be completed before the next begins. Simple to understand but inflexible to changing requirements.                     |
| Agile     | Iterative approach — the system is developed in small increments (sprints). Flexible and responsive to change, but can be harder to predict final cost and timeline. |
| Spiral    | Combines iterative development with risk analysis. Each cycle includes planning, risk analysis, engineering, and evaluation. Suitable for large, complex projects.   |
| Rapid     | Emphasizes rapid prototyping and user feedback. Useful when requirements are not well understood. Can lead to scope creep if not carefully managed.                  |

> **Exam tip**: The IB does not require detailed knowledge of specific SDLC models, but you should
> be able to describe the stages and explain why a structured approach is important.

## Design Tools

### Data Flow Diagrams (DFDs)

DFDs show how data moves through a system. They use four standard symbols:

| Symbol                            | Meaning                                            |
| --------------------------------- | -------------------------------------------------- |
| External entity (rectangle)       | A source or destination of data outside the system |
| Process (rounded rectangle)       | A transformation or processing step                |
| Data store (open-ended rectangle) | A place where data is stored (database, file)      |
| Data flow (arrow)                 | Movement of data between components                |

**Example**: A simple DFD for a library system:

- **External entities**: Member, Librarian
- **Processes**: Process Loan, Process Return, Check Availability
- **Data stores**: Book Database, Member Database, Loan Records
- **Data flows**: Member → Process Loan (loan request), Process Loan → Loan Records (new loan), Book
  Database → Check Availability (book details)

### UML Diagrams

The IB syllabus references UML (Unified Modeling Language) as a design tool. The most relevant
types:

**Use Case Diagrams**: Show the interactions between actors (users) and the system.

```
[Member] --(Search Book)--&gt; [Library System]
[Member] --(Borrow Book)--&gt; [Library System]
[Librarian] --(Add Book)--&gt; [Library System]
[Librarian] --(Remove Book)--&gt; [Library System]
```

**Class Diagrams**: Show the structure of a system by modeling classes, their attributes, methods,
and relationships.

```
+-------------------+
|      Book         |
+-------------------+
| - title: String   |
| - author: String  |
| - ISBN: String    |
| - available: Bool |
+-------------------+
| + borrow()        |
| + return()        |
| + getDetails()    |
+-------------------+
        |
        | 1..*
        |
+-------------------+
|     Member        |
+-------------------+
| - name: String    |
| - memberID: Int   |
| - loans: List     |
+-------------------+
| + borrowBook()    |
| + returnBook()    |
+-------------------+
```

**Sequence Diagrams**: Show the order of interactions between objects over time.

```
Member      System      Database
  |            |            |
  |--Search--&gt;|            |
  |            |--Query--&gt;|
  |            |&lt;--Results-|
  |&lt;--Display-|            |
  |--Borrow--&gt;|            |
  |            |--Update--&gt;|
  |            |&lt;-OK-------|
  |&lt;--Confirm-|            |
```

> **Exam tip**: You do not need to memorize exact UML notation, but you should be able to interpret
> simple UML diagrams and explain what they represent.

### Pseudocode and Flowcharts

**Pseudocode** is a way to describe algorithms in a structured, language-independent way. The IB
pseudocode standard uses:

- `INPUT` / `OUTPUT` for I/O
- `IF ... THEN ... ELSE ... ENDIF` for conditionals
- `LOOP ... ENDLOOP` and `WHILE ... ENDWHILE` for iteration
- `MODULE ... ENDMODULE` for subprograms

**Flowcharts** provide a visual representation of an algorithm:

| Symbol        | Meaning        |
| ------------- | -------------- |
| Oval          | Start / End    |
| Parallelogram | Input / Output |
| Rectangle     | Process        |
| Diamond       | Decision       |
| Arrows        | Flow direction |

> **Exam tip**: If a question asks you to "design an algorithm," you can use pseudocode or a
> flowchart unless the question specifies otherwise. Pseudocode is generally faster to write in an
> exam.

## User Interface Design

### Principles of Good UI Design

1. **Consistency**: Use the same colors, fonts, button styles, and layouts throughout the
   application. Inconsistent interfaces confuse users and increase learning time.
2. **Feedback**: Provide clear feedback for every user action. Examples: confirmation messages after
   form submission, loading spinners during processing, error messages for invalid input.
3. **User control**: Allow users to undo actions, cancel operations, and navigate freely. Users
   should never feel trapped by the interface.
4. **Simplicity**: Follow the principle of least astonishment — the interface should behave as users
   expect. Avoid unnecessary features that clutter the interface.
5. **Error prevention**: Design forms that validate input before submission. Use clear labels,
   placeholder text, and appropriate input types (e.g., date pickers for date fields).

### Input Methods

| Method          | Description                                            | Use case                            |
| --------------- | ------------------------------------------------------ | ----------------------------------- |
| Keyboard        | Standard text input via physical or on-screen keyboard | Text entry, form filling            |
| Mouse/Touchpad  | Pointing device for clicking, dragging, scrolling      | Navigation, selection, manipulation |
| Touchscreen     | Direct manipulation of on-screen elements              | Mobile devices, kiosks, tablets     |
| Voice/Speech    | Voice commands and dictation                           | Accessibility, hands-free operation |
| Scanner/Barcode | Optical input of data                                  | Retail, inventory, logistics        |
| Biometric       | Fingerprint, facial recognition, iris scan             | Security, authentication            |

### Output Methods

| Method          | Description                      | Use case                                 |
| --------------- | -------------------------------- | ---------------------------------------- |
| Screen/Monitor  | Visual display of information    | Primary output for most systems          |
| Printer         | Hard copy output                 | Reports, receipts, documents             |
| Speaker/Audio   | Auditory output                  | Alerts, accessibility, multimedia        |
| Projector       | Large-scale visual display       | Presentations, classroom use             |
| Haptic feedback | Vibrations or physical responses | Mobile notifications, gaming controllers |

### Accessibility Considerations

- **Visual impairments**: Screen readers (e.g., JAWS, NVDA), screen magnification, high-contrast
  themes, Braille displays, keyboard navigation (avoid reliance on mouse-only interactions).
- **Hearing impairments**: Closed captions, visual alerts (flashing indicators), transcript
  alternatives for audio content.
- **Motor impairments**: Large clickable areas, keyboard shortcuts, voice control, adjustable input
  sensitivity.
- **Cognitive impairments**: Clear and simple language, consistent navigation, avoidance of flashing
  content (can trigger seizures), adjustable text size.

> **Exam tip**: The IB frequently asks about the social and ethical implications of accessibility.
> Be prepared to discuss why accessibility matters (legal requirements, ethical responsibility,
> broader market reach) and give specific examples of assistive technologies.

## Worked Example: Designing a Library Management System

### Scenario

A school library currently uses a paper-based system for tracking book loans. The librarian wants a
computerized system that allows:

- Members to search for books by title, author, or ISBN
- Members to borrow and return books
- The librarian to add and remove books
- The system to track overdue books and send reminders

### Analysis

**Stakeholders**: Librarian (primary user), Members (secondary users), School administration

**Requirements**:

1. The system must allow searching by title, author, or ISBN
2. The system must enforce a maximum of 5 books per member
3. The system must flag books not returned within 14 days as overdue
4. The system must generate a daily report of overdue books

### Design

**Data structures**:

```python
class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_available = True
        self.borrower = None
        self.due_date = None

class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.current_loans = []

class Library:
    def __init__(self):
        self.books = []
        self.members = []

    def search_books(self, keyword):
        results = []
        for book in self.books:
            if (keyword.lower() in book.title.lower() or
                keyword.lower() in book.author.lower() or
                keyword == book.isbn):
                results.append(book)
        return results

    def borrow_book(self, member, book):
        if not book.is_available:
            return "Book not available"
        if len(member.current_loans) &gt;= 5:
            return "Loan limit reached"
        book.is_available = False
        book.borrower = member.member_id
        member.current_loans.append(book)
        return "Book borrowed successfully"

    def return_book(self, member, book):
        if book not in member.current_loans:
            return "This book was not borrowed by this member"
        book.is_available = True
        book.borrower = None
        book.due_date = None
        member.current_loans.remove(book)
        return "Book returned successfully"
```

### Testing

| Test case                         | Input                            | Expected output              |
| --------------------------------- | -------------------------------- | ---------------------------- |
| Search for existing book by title | keyword = "1984"                 | List containing the book     |
| Search for non-existent book      | keyword = "Nonexistent Book"     | Empty list                   |
| Borrow available book             | member (2 loans), available book | "Book borrowed successfully" |
| Borrow when at loan limit         | member (5 loans), available book | "Loan limit reached"         |
| Borrow unavailable book           | member, borrowed book            | "Book not available"         |
| Return a borrowed book            | member, their borrowed book      | "Book returned successfully" |

> **Exam tip**: When designing a system, always include a testing table with at least 5–6 test cases
> covering normal operation, boundary conditions, and error handling.

## Stakeholders

Understanding stakeholders is essential for system design:

| Stakeholder type | Description                                              | Example                              |
| ---------------- | -------------------------------------------------------- | ------------------------------------ |
| Direct users     | People who interact with the system daily                | Librarian, library members           |
| Indirect users   | People affected by the system but do not use it directly | School administration, parents       |
| Management       | People who oversee or fund the system                    | Principal, IT department             |
| Developers       | People who build and maintain the system                 | Programmers, database administrators |
| Support staff    | People who provide technical support                     | IT helpdesk                          |

### Stakeholder consultation

During the analysis phase, developers should:

- Conduct **interviews** with key stakeholders to understand their needs
- Distribute **questionnaires** to gather broader feedback
- Observe current workflows to identify pain points
- Review existing documentation and processes

> **Exam tip**: In your IA, always include evidence of stakeholder consultation (e.g., interview
> transcript, questionnaire responses). This is critical for Criterion A (Planning).

## Feasibility Assessment

Before developing a system, a feasibility assessment should consider:

| Type          | Question                                                                  |
| ------------- | ------------------------------------------------------------------------- |
| Technical     | Can the required technology be acquired and used by the development team? |
| Economic      | Is the project within budget? Will the benefits outweigh the costs?       |
| Operational   | Will the system be usable by the target users? Can it be maintained?      |
| Schedule      | Can the project be completed within the required timeframe?               |
| Legal/Ethical | Does the system comply with relevant laws and ethical standards?          |

## Data Design

### Entity-Relationship Diagrams (ERDs)

An ERD models the data requirements of a system using entities (things of interest), attributes
(properties), and relationships between entities.

**Key notation**: Entities are rectangles, attributes are ovals connected to entities, relationships
are diamonds between entities. Primary keys are shown as underlined attributes. Cardinality (1, M,
1..M) indicates how many instances participate in a relationship.

**Relationship types**:

- **One-to-one (1:1)**: Each record in Table A relates to at most one record in Table B (e.g.,
  Student — StudentProfile).
- **One-to-many (1:M)**: One record in Table A relates to many in Table B (e.g., Teacher —
  Students).
- **Many-to-many (M:N)**: Many records in A relate to many in B. Requires a junction table (e.g.,
  Students — Courses resolved via Enrollments).

### Keys

| Key type      | Definition                                                      | Example                              |
| ------------- | --------------------------------------------------------------- | ------------------------------------ |
| Primary key   | An attribute (or combination) that uniquely identifies each row | studentID, ISBN                      |
| Foreign key   | An attribute that references the primary key of another table   | courseID in an Enrollments table     |
| Composite key | A primary key formed by combining two or more attributes        | (studentID, courseID) in Enrollments |

### Referential Integrity

Referential integrity ensures that relationships between tables remain consistent. Every foreign key
value must match a primary key value in the referenced table (or be NULL). Common rules: **ON DELETE
CASCADE** (delete referencing rows when parent is deleted), **ON DELETE RESTRICT** (prevent deletion
of parent if dependent rows exist). Violating referential integrity produces orphan records.

### Normalization

Normalization reduces redundancy and eliminates anomalies (insertion, update, deletion) in database
tables.

**First Normal Form (1NF)**: Each cell contains a single value; each row is uniquely identifiable
(has a primary key). No repeating groups.

**Second Normal Form (2NF)**: Must be in 1NF. All non-key attributes must be fully dependent on the
entire primary key — no partial dependencies. (Only relevant for composite primary keys.)

**Third Normal Form (3NF)**: Must be in 2NF. No transitive dependencies — every non-key attribute
must depend directly on the primary key, not through another non-key attribute.

**Worked example**: Consider this library table:

| LoanID | MemberName | MemberEmail      | BookTitle | Author  | Genre    |
| ------ | ---------- | ---------------- | --------- | ------- | -------- |
| 1      | Alice      | alice@school.com | 1984      | Orwell  | Fiction  |
| 2      | Alice      | alice@school.com | Dune      | Herbert | Fiction  |
| 3      | Bob        | bob@school.com   | Calculus  | Stewart | Textbook |

This is in 1NF but not 3NF. MemberEmail depends on MemberName (not LoanID), and Author/Genre depend
on BookTitle. These are transitive dependencies. Resolution — split into three tables:

**Members table** (PK: MemberID):

| MemberID | MemberName | MemberEmail      |
| -------- | ---------- | ---------------- |
| 1        | Alice      | alice@school.com |
| 2        | Bob        | bob@school.com   |

**Books table** (PK: BookID):

| BookID | BookTitle | Author  | Genre    |
| ------ | --------- | ------- | -------- |
| 1      | 1984      | Orwell  | Fiction  |
| 2      | Dune      | Herbert | Fiction  |
| 3      | Calculus  | Stewart | Textbook |

**Loans table** (PK: LoanID, FKs: MemberID, BookID):

| LoanID | MemberID | BookID | DueDate    |
| ------ | -------- | ------ | ---------- |
| 1      | 1        | 1      | 2025-06-01 |
| 2      | 1        | 2      | 2025-06-01 |
| 3      | 2        | 3      | 2025-06-15 |

Now each table is in 3NF. No redundant data, no update anomalies.

> **Exam tip**: Normalization questions frequently appear on IB exams. You should be able to explain
> why a table is not in 1NF/2NF/3NF and convert it to the correct normal form.

## Architecture Design

### Client-Server vs Peer-to-Peer

| Aspect         | Client-Server                              | Peer-to-Peer                                           |
| -------------- | ------------------------------------------ | ------------------------------------------------------ |
| Central server | Required; clients connect to it            | No central server; all nodes are equal                 |
| Scalability    | High; server can be upgraded independently | Limited; each node handles both serving and requesting |
| Security       | Centralized control; easier to manage      | Decentralized; harder to enforce security policies     |
| Reliability    | Server failure affects all clients         | More resilient; other peers continue operating         |

### Three-Tier Architecture

Three-tier architecture separates a system into three logical layers:

| Tier         | Responsibility                                   | Technologies                      |
| ------------ | ------------------------------------------------ | --------------------------------- |
| Presentation | User interface, displaying data, accepting input | HTML/CSS/JS, React, mobile apps   |
| Application  | Business logic, processing, rule enforcement     | Python, Java, PHP, Node.js        |
| Data         | Data storage and retrieval                       | MySQL, PostgreSQL, MongoDB, Redis |

**Example**: In an online store, the presentation tier renders the product page, the application
tier calculates pricing and handles checkout logic, and the data tier stores product inventory and
order records.

> **Exam tip**: Three-tier architecture is a common exam topic. Be able to name the three tiers and
> explain the advantage of separating concerns.

### Cloud Architecture

Cloud computing delivers computing services over the internet. The three main service models:

| Model | Description                                             | Example                        |
| ----- | ------------------------------------------------------- | ------------------------------ |
| IaaS  | Infrastructure as a Service — virtual machines, storage | AWS EC2, Google Compute Engine |
| PaaS  | Platform as a Service — development platform            | Heroku, Google App Engine      |
| SaaS  | Software as a Service — fully hosted application        | Gmail, Google Docs, Salesforce |

With IaaS, the user manages the OS and application; with PaaS, only the application code; with SaaS,
nothing (everything is managed by the provider).

### Scalability

| Type       | Description                                                     | Advantage               | Disadvantage               |
| ---------- | --------------------------------------------------------------- | ----------------------- | -------------------------- |
| Vertical   | Increase the capacity of a single machine (more CPU, RAM, disk) | Simpler to implement    | Hardware has a hard limit  |
| Horizontal | Add more machines to handle the load                            | No single-machine limit | More complex to coordinate |

> **Exam tip**: Be prepared to justify an architecture choice for a given scenario. Consider the
> number of users, budget, security requirements, and expected growth.

### Worked Example: Choosing Architecture for a School System

A school needs a student management system for 800 students and 50 teachers to store grades,
attendance, and timetables with a limited budget.

**Decision**: Three-tier client-server with a single application server and database server on cloud
hosting (IaaS). The moderate user base (850) does not require horizontal scaling. Three-tier design
allows the UI to be updated independently of grading logic. Cloud hosting reduces upfront costs, and
centralized control is important for managing sensitive student data.

## Security Considerations in Design

### Authentication Methods

Authentication verifies the identity of a user attempting to access the system.

| Method               | Description                                       | Strengths                                 | Weaknesses                        |
| -------------------- | ------------------------------------------------- | ----------------------------------------- | --------------------------------- |
| Passwords            | Secret string known only to the user              | Simple, universal                         | Vulnerable to guessing, reuse     |
| Biometrics           | Physical characteristics: fingerprint, face, iris | Hard to forge, convenient                 | Privacy concerns, false positives |
| Two-factor (2FA)     | Requires two independent verification factors     | Significantly reduces unauthorized access | Extra step for users              |
| Single Sign-On (SSO) | One login grants access to multiple systems       | Reduces password fatigue                  | Single point of failure           |

### Authorization

Authorization determines what an authenticated user is permitted to do.

**Access Control Lists (ACLs)**: A list attached to each resource specifying which users or groups
can perform which operations (read, write, execute).

**Role-Based Access Control (RBAC)**: Permissions are assigned to roles, and users are assigned to
roles. More scalable than ACLs for large systems. Example: a Teacher role has `view_student_records`
and `edit_grades` permissions, while a Student role has only `view_own_grades`.

### Encryption

| Type       | Description                                  | Example protocol |
| ---------- | -------------------------------------------- | ---------------- |
| At rest    | Protects data stored on disk or database     | AES-256          |
| In transit | Protects data as it travels across a network | TLS/SSL (HTTPS)  |

Both should be used together. Encryption at rest prevents unauthorized access if storage is
compromised; encryption in transit prevents man-in-the-middle attacks.

### Input Validation and SQL Injection Prevention

**Input validation** ensures user data conforms to expected formats. Techniques include type
checking, length checking, whitelist validation, and sanitization (escaping dangerous characters).

**SQL injection** occurs when untrusted input is concatenated into a database query, allowing an
attacker to manipulate query logic. Example: `user_input` = `' OR '1'='1` in
`"SELECT * FROM users WHERE username = '" + user_input + "'"` returns all users.

**Prevention**:

- **Parameterized queries** (prepared statements):
  `cursor.execute("SELECT * FROM users WHERE username = ?", (user_input,))`
- **Stored procedures**: Predefined queries that accept parameters
- **ORM frameworks**: Abstract database access and automatically parameterize queries

> **Exam tip**: Security questions often ask you to identify vulnerabilities and suggest
> mitigations. Always mention input validation and parameterized queries for database-related
> questions.

## IB Internal Assessment Guidance

### Overview

The IA is worth 30% of your final IB Computer Science grade. You must develop a computing solution
for a specified client, documented through five assessment criteria.

### Criterion A: Planning (6 marks)

Identify a specific, solvable problem for a real client. Describe the problem with context, identify
stakeholders, provide evidence of consultation (interview transcript, questionnaire), justify the
proposed solution, and outline measurable success criteria.

**Common mistake**: Choosing a problem that is too broad or too simple.

### Criterion B: Solution Overview (6 marks)

Explain the design rationale (tools, techniques, data structures). Include design tools: UML
diagrams, DFDs, flowcharts, mockups. Describe the system architecture, data design (ERDs, table
structures), and justify the programming paradigm and language choice.

**Common mistake**: Including diagrams without explanation.

### Criterion C: Development (12 marks)

Develop a functioning solution demonstrating a range of techniques (loops, conditionals, file
handling, algorithms). Include annotated source code. HL students must demonstrate additional
complexity (e.g., recursion, advanced data structures).

**Common mistake**: Submitting code without comments or with poor indentation.

### Criterion D: Functionality and Extensibility (4 marks)

Provide a testing table with test cases, input, expected output, and actual output. Include evidence
(screenshots). Discuss how the solution meets success criteria and how it could be extended.

**Common mistake**: Testing only normal cases. Include boundary and invalid input tests.

### Criterion E: Evaluation (6 marks)

Evaluate effectiveness against success criteria. Discuss limitations, recommend improvements with
justification, and reflect on the development process.

**Common mistake**: Being vague. Reference specific criteria with measurable evidence.

### IA Documentation Structure

1. **Introduction**: Problem description, client background, rationale
2. **Analysis**: Stakeholders, requirements, success criteria, consultation evidence
3. **Design**: System architecture, data design, algorithm design, UI mockups
4. **Development**: Source code with annotations
5. **Testing**: Test cases with evidence
6. **Evaluation**: Success criteria review, limitations, recommendations

## Problem Set

### Question 1: SDLC Stages

A company is developing a new online booking system for a hotel chain.

(a) Explain why the testing phase is important in the SDLC.

<details>

Testing verifies that the system meets requirements and functions correctly, identifying defects
before deployment. It ensures the system handles edge cases and invalid input gracefully, reducing
the cost of fixing errors found after release.

</details>

(b) The development team discovers during development that the original requirements did not account
for mobile users. State which SDLC model would best accommodate this change and justify.

<details>

Agile. Agile uses iterative development in short sprints, allowing requirements to be re-prioritized
and new features added in subsequent iterations. Waterfall would be poorly suited because it does
not accommodate changes to earlier phases once completed.

</details>

### Question 2: Data Flow Diagrams

A doctor's surgery uses a patient records system. Patients can book appointments, and doctors can
view and update patient records.

(a) Identify two external entities, two processes, and one data store for this system.

<details>

External entities: Patient, Doctor. Processes: Book Appointment, Update Patient Record. Data store:
Patient Records Database.

</details>

(b) Draw a simple DFD showing the data flows between the components you identified.

<details>

```
Patient --(appointment request)--&gt; [Book Appointment] --(appointment details)--&gt; [Patient Records DB]
Doctor --(view request)--&gt; [Update Patient Record] &lt;--(patient data)-- [Patient Records DB]
Doctor --(updated data)--&gt; [Update Patient Record] --(save updates)--&gt; [Patient Records DB]
[Book Appointment] --(confirm appointment)--&gt; Patient
```

</details>

### Question 3: Normalization

A school stores the following unnormalized data about student enrollments:

| StudentID | StudentName | CourseCode | CourseName       | TeacherName | Room    |
| --------- | ----------- | ---------- | ---------------- | ----------- | ------- |
| 1001      | Alice       | CS101      | Computer Science | Mr. Lee     | Lab 3   |
| 1001      | Alice       | MA201      | Mathematics      | Ms. Chen    | Room 12 |
| 1002      | Bob         | CS101      | Computer Science | Mr. Lee     | Lab 3   |

(a) Explain why this table is not in 3NF.

<details>

The table has transitive dependencies. StudentName depends on StudentID (not the composite PK), and
CourseName, TeacherName, Room all depend on CourseCode. These non-key attributes do not depend fully
on the primary key (StudentID + CourseCode).

</details>

(b) Normalize the table into 3NF. Show all resulting tables with primary keys identified.

<details>

**Students** (PK: StudentID):

| StudentID | StudentName |
| --------- | ----------- |
| 1001      | Alice       |
| 1002      | Bob         |

**Courses** (PK: CourseCode):

| CourseCode | CourseName       | TeacherName | Room    |
| ---------- | ---------------- | ----------- | ------- |
| CS101      | Computer Science | Mr. Lee     | Lab 3   |
| MA201      | Mathematics      | Ms. Chen    | Room 12 |

**Enrollments** (PK: StudentID + CourseCode):

| StudentID | CourseCode |
| --------- | ---------- |
| 1001      | CS101      |
| 1001      | MA201      |
| 1002      | CS101      |

</details>

### Question 4: UML Use Case Diagram

A library management system has the following actors: Member, Librarian, System Administrator.

Members can search for books, borrow books, and return books. Librarians can do everything members
can do, plus add new books, remove books, and generate reports. System Administrators can manage
user accounts and view system logs.

(a) Describe how inheritance is represented in this use case diagram.

<details>

The Librarian inherits from Member, meaning it can perform all Member use cases (search, borrow,
return) plus its own (add book, remove book, generate reports). In UML, this is an open-headed arrow
from Librarian to Member indicating generalization.

</details>

(b) Explain why the System Administrator should not inherit from the Librarian.

<details>

The System Administrator's responsibilities (managing accounts, viewing logs) are unrelated to
library operations. Inheritance implies an "is-a" relationship — a System Administrator is not a
specialized Librarian. Both should be separate actors with distinct use cases.

</details>

### Question 5: Architecture and Security

A university is building an online learning platform for 10,000 students. Student grades and
personal data must be protected.

(a) Recommend an architecture and justify your choice.

<details>

Three-tier client-server on cloud infrastructure (IaaS/PaaS). The presentation tier delivers the web
interface, the application tier handles business logic (grading, submissions, streaming), and the
data tier stores records. Each tier scales independently — the application tier can scale
horizontally during peak usage. Cloud hosting avoids large upfront costs.

</details>

(b) Describe two authentication and two authorization measures the university should implement, and
explain how input validation protects against SQL injection.

<details>

Authentication: (1) Password-based login with complexity requirements. (2) Two-factor authentication
(2FA) for accessing grades.

Authorization: (1) Role-based access control (RBAC) assigning Student, Instructor, Admin roles. (2)
Access control lists restricting who can modify the enrollment database.

SQL injection prevention: Without input validation, a malicious user could inject SQL (e.g.,
`'; DROP TABLE assignments; --`) into form fields. Input validation checks for expected characters
and lengths. Parameterized queries ensure user input is treated as data, never as executable SQL.

</details>
