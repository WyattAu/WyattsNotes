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
