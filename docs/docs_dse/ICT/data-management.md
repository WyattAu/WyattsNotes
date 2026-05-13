---
title: Data Management
description: "DSE ICT notes on data management covering data types and structures, database models, data validation and verification, data security, privacy legislation,"
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - ICT
categories:
  - DSE
  - ICT
slug: data-management
---

This document covers data management topics for the DSE ICT examination, including data structures,
database models, data integrity, security, privacy legislation, backup strategies, big data, and data
ethics. Database design and SQL are covered in
[programming-and-databases.md](programming-and-databases.md).

---

## Data Types and Structures

### Primitive Data Types

| Data Type   | Description                      | Size (typical) | Example Values          |
| ----------- | -------------------------------- | -------------- | ----------------------- |
| Integer     | Whole numbers                    | 2--8 bytes     | -32768, 0, 42, 32767    |
| Float/Real  | Numbers with fractional parts    | 4--8 bytes     | 3.14, -0.5, 2.718       |
| Boolean     | Logical values                   | 1 byte         | True, False             |
| Character   | A single symbol                  | 1--4 bytes     | 'A', '7', '$'           |
| String      | Sequence of characters          | Variable       | "Hello World"           |
| Date        | Calendar date                    | 4--8 bytes     | 2026-01-15              |

### Composite Data Structures

| Structure         | Description                                                   | Example                                  |
| ----------------- | ------------------------------------------------------------- | ---------------------------------------- |
| **Array**          | Fixed-size, ordered collection of elements of the same type   | `[85, 92, 78, 95]`                       |
| **Record/Struct**  | Collection of related fields of possibly different types     | `{name: "Chan", age: 17, score: 85}`     |
| **2D Array**       | Table of elements accessed by row and column indices          | Grid for seating plan                    |
| **Linked List**    | Linear collection where each element points to the next        | Dynamic data storage (beyond DSE scope)   |
| **Stack**          | Last-In-First-Out (LIFO) structure                           | Undo operations, function call stack     |
| **Queue**          | First-In-First-Out (FIFO) structure                           | Print queue, task scheduling             |

### Arrays in Detail

An array stores multiple values of the same data type in contiguous memory locations, accessed by
an index.

**One-dimensional array:**

| Index | 0   | 1   | 2   | 3   | 4   |
| ----- | --- | --- | --- | --- | --- |
| Value | 10  | 25  | 30  | 15  | 40  |

**Two-dimensional array (matrix):**

| Row\Col | 0   | 1   | 2   |
| ------- | --- | --- | --- |
| 0       | 1   | 2   | 3   |
| 1       | 4   | 5   | 6   |
| 2       | 7   | 8   | 9   |

Access: `matrix[1][2]` returns `6`.

---

## Database Models

### Flat-File Database

A flat-file database stores all data in a single table (file), typically as a CSV or spreadsheet.

| Advantage               | Disadvantage                          |
| ----------------------- | ------------------------------------- |
| Simple to set up and use | Data redundancy (duplication)         |
| Easy to understand      | Data inconsistency (update anomalies) |
| Suitable for small data | Limited query capabilities            |
| Low technical overhead  | Poor scalability                      |
| Portable (single file)  | No multi-user support                 |

**Example flat-file database (students.csv):**

```
StudentID,Name,Class,Subject,Score
001,Chan Tai Man,5A,Maths,85
001,Chan Tai Man,5A,English,92
002,Lee Siu Ming,5B,Maths,72
002,Lee Siu Ming,5B,English,65
```

The student name and class are repeated for each subject -- this is data redundancy.

### Relational Database

A relational database stores data in multiple related tables, linked by primary and foreign keys.

| Advantage                     | Disadvantage                          |
| ----------------------------- | ------------------------------------- |
| Minimal data redundancy       | More complex to design and set up     |
| Data integrity enforced        | Requires knowledge of SQL and design  |
| Powerful query capabilities    | Higher technical overhead             |
| Multi-user concurrent access   | More expensive infrastructure          |
| Scalable to large datasets     | Requires a DBMS                      |
| Data independence              |                                       |

**Example relational database:**

**Student** (StudentID PK, Name, Class)

**Subject** (SubjectCode PK, SubjectName, Teacher)

**Result** (StudentID FK, SubjectCode FK, Score)

The student name is stored only once in the Student table, eliminating redundancy.

### Hierarchical Database

Data is organised in a tree structure (parent-child relationships). Each parent can have multiple
children, but each child has exactly one parent.

```
School
├── Department A
│   ├── Teacher 1
│   └── Teacher 2
├── Department B
│   ├── Teacher 3
│   └── Teacher 4
```

| Advantage                    | Disadvantage                          |
| ---------------------------- | ------------------------------------- |
| Intuitive for hierarchical data | Complex many-to-many relationships |
| Fast navigation (follow tree)  | No standard query language            |
| Clear parent-child structure  | Deleting a parent deletes children    |

### Network Database

An extension of the hierarchical model that allows many-to-many relationships through sets.

| Advantage                    | Disadvantage                          |
| ---------------------------- | ------------------------------------- |
| Supports many-to-many         | Very complex to design                |
| Flexible relationships        | No universal standard                 |
| Efficient data access         | Difficult to modify structure         |

### Database Model Comparison

| Feature            | Flat File       | Hierarchical    | Network          | Relational      |
| ------------------ | --------------- | --------------- | ---------------- | --------------- |
| Structure          | Single table    | Tree            | Graph            | Multiple tables |
| Redundancy         | High            | Medium          | Low              | Low             |
| Relationships      | None            | One-to-many     | Many-to-many     | Any type        |
| Query language     | None            | Navigation      | Navigation       | SQL             |
| Flexibility        | Low             | Medium          | High             | High            |
| Design complexity  | Very low        | Medium          | High             | Medium          |
| Modern usage       | Simple lists    | File systems    | Rare             | Most common      |

---

## Data Validation and Verification

### Validation -- Ensuring Data is Reasonable

Validation checks that data entered meets specified rules before it is accepted into the system.

| Validation Type     | Description                                               | Example                                  |
| ------------------- | --------------------------------------------------------- | ---------------------------------------- |
| **Presence check**  | Ensures a field is not empty                               | Name cannot be blank                     |
| **Type check**      | Ensures the data is of the correct type                     | Age must be an integer                   |
| **Length check**    | Ensures data has the correct number of characters          | Phone number must be exactly 8 digits    |
| **Range check**     | Ensures data falls within a specified range                | Score must be between 0 and 100          |
| **Format check**    | Ensures data follows a specific pattern (regular expression) | Email must contain "@" and "."        |
| **Lookup check**    | Compares input against a list of valid values              | Class must be in the school's class list |
| **Consistency check**| Compares two fields to ensure they are logically consistent | End date must be after start date        |
| **Limit check**     | A type of range check that sets a maximum value              | Quantity ordered cannot exceed 999        |

<details>
<summary>Worked Example: Applying Validation to a Registration Form</summary>

A school registration form collects: Student Name, Date of Birth, Gender, Class, Email, Phone.

| Field        | Validation Type   | Rule                                   |
| ----------- | ----------------- | -------------------------------------- |
| Student Name| Presence check    | Cannot be empty                        |
| Student Name| Length check      | Between 2 and 50 characters            |
| DOB         | Type check        | Must be a valid date                   |
| DOB         | Range check       | Between 2008-01-01 and 2015-12-31       |
| DOB         | Consistency check | Cannot be in the future                 |
| Gender      | Lookup check      | Must be "M", "F", or "Other"            |
| Class       | Lookup check      | Must exist in the school's class list   |
| Email       | Format check      | Must contain "@" and at least one "."   |
| Phone       | Format check      | Must be exactly 8 digits (Hong Kong)    |
| Phone       | Type check        | Must be numeric                         |

</details>

### Verification -- Ensuring Data is Accurate

Verification checks that data entered matches the original source document.

| Method        | Description                                                         | When Used                           |
| ------------- | ------------------------------------------------------------------- | ----------------------------------- |
| **Double entry** | Data is entered twice by different operators; system compares the two entries | Critical data entry (exam marks, medical records) |
| **Visual check** | The operator visually compares the entered data with the source document | General data entry                  |
| **Check digit** | A digit calculated from the other digits using a mathematical formula; appended to the data | Product codes (ISBN, HKID), barcodes |

<details>
<summary>Worked Example: Check Digit Calculation</summary>

**ISBN-13 check digit:**

The ISBN-13 for a book is `978-1-86197-876-?`. Calculate the check digit.

1. Take the first 12 digits: `9 7 8 1 8 6 1 9 7 8 7 6`
2. Multiply odd-position digits by 1 and even-position digits by 3:

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| -------- | - | - | - | - | - | - | - | - | - | -- | -- | -- |
| Digit    | 9 | 7 | 8 | 1 | 8 | 6 | 1 | 9 | 7 | 8  | 7  | 6  |
| Weight  | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3  | 1  | 3  |
| Product | 9 | 21| 8 | 3 | 8 | 18| 1 | 27| 7 | 24 | 7  | 18 |

3. Sum: $9 + 21 + 8 + 3 + 8 + 18 + 1 + 27 + 7 + 24 + 7 + 18 = 151$
4. Check digit = $(10 - (151 \mod 10)) \mod 10 = (10 - 1) \mod 10 = 9$

Complete ISBN: `978-1-86197-876-9`

To verify: sum all 13 digits with weights. The total should be divisible by 10.

</details>

### Validation vs Verification

| Aspect          | Validation                                          | Verification                                   |
| --------------- | --------------------------------------------------- | ---------------------------------------------- |
| **Purpose**     | Checks data is reasonable                           | Checks data matches the original source        |
| **When**        | At data entry time                                  | After data entry                                |
| **Method**      | Rules, formats, ranges                              | Double entry, visual check, check digit         |
| **Catches**      | Out-of-range values, wrong types, missing data      | Typing errors, transcription errors            |
| **Example**     | Score must be between 0 and 100                     | Entering 52 instead of 25 (visual check needed) |

---

## Data Security

### Threats to Data Security

| Threat              | Description                                                     | Impact                              |
| ------------------- | --------------------------------------------------------------- | ----------------------------------- |
| **Unauthorised access** | Someone gains access to data they should not see          | Privacy breach, data theft           |
| **Data theft**       | Deliberate copying or removal of data                        | Financial loss, identity theft       |
| **Data corruption**  | Data is modified or destroyed, accidentally or deliberately  | Data integrity loss                  |
| **Malware**          | Viruses, ransomware, spyware affect data                     | Encryption, deletion, exfiltration   |
| **Insider threats**  | Employees with access who misuse it                          | Intentional or accidental data loss  |
| **Physical threats** | Fire, flood, theft, hardware failure                           | Complete data loss                   |
| **Human error**      | Accidental deletion, overwriting, misconfiguration           | Data loss, downtime                  |

### Security Measures

| Measure                | Description                                                             | Protects Against                |
| ---------------------- | ----------------------------------------------------------------------- | ------------------------------ |
| **Access control**      | Usernames, passwords, biometric authentication                     | Unauthorised access             |
| **Encryption**          | Converting data to an unreadable format without the decryption key   | Data theft, interception        |
| **Firewall**            | Monitors and filters network traffic                                 | Network intrusions              |
| **Antivirus software**  | Detects and removes malware                                          | Viruses, trojans, ransomware     |
| **Backup**              | Regular copies of data stored separately                             | Data loss from any cause         |
| **Audit logs**          | Records of who accessed what data and when                           | Insider threats, accountability |
| **Physical security**   | Locks, security cameras, restricted access to server rooms           | Physical theft, unauthorised access |
| **User training**       | Educating users on security best practices                           | Phishing, social engineering     |

### Access Control Methods

| Method             | Description                                                     | Security Level |
| ------------------ | --------------------------------------------------------------- | -------------- |
| **Password**       | Secret string known only to the user                            | Low-Medium     |
| **PIN**            | Short numeric code (e.g., 4--6 digits)                           | Low            |
| **Biometric**      | Physical characteristics (fingerprint, face, iris)               | High           |
| **Smart card**     | Physical card with embedded chip + PIN                           | High           |
| **Two-factor (2FA)**| Combination of two methods (e.g., password + phone code)        | Very High      |
| **Role-based (RBAC)**| Access based on job role (e.g., manager, clerk, viewer)         | Medium-High    |

---

## Privacy Legislation

### Hong Kong: Personal Data Privacy Ordinance (PDPO)

The PDPO (Cap. 486) is Hong Kong's primary data protection law, enforced by the Office of the
Privacy Commissioner for Personal Data (PCPD).

**Six Data Protection Principles (DPPs):**

| DPP | Principle              | Key Requirement                                                                                |
| --- | ---------------------- | ---------------------------------------------------------------------------------------------- |
| 1   | Purpose and collection | Collect data for a lawful purpose; inform the data subject of the purpose                      |
| 2   | Accuracy and retention | Keep data accurate and up to date; do not keep longer than necessary                             |
| 3   | Use                    | Use data only for the stated purpose or a directly related purpose                               |
| 4   | Security               | Take practical steps to protect against unauthorised access, processing, erasure, or loss        |
| 5   | Information openness   | Be open about data handling policies and practices                                             |
| 6   | Access                 | Allow data subjects to access and correct their personal data                                  |

**Key PDPO provisions for DSE exams:**

- Direct marketing requires **opt-in consent** from the data subject.
- Data breach notification required for breaches affecting 500+ data subjects.
- Data users must appoint a Data Protection Officer (DPO) in specified cases.
- Offences carry penalties including fines (up to HKD 1,000,000) and imprisonment.

### General Data Protection Regulation (GDPR) -- EU

| Feature           | PDPO (Hong Kong)              | GDPR (EU)                          |
| ----------------- | ---------------------------- | ---------------------------------- |
| Jurisdiction       | Hong Kong                     | Global (EU residents)             |
| Consent model      | Opt-out for direct marketing  | Opt-in (explicit consent)         |
| Data breach        | Notify PCPD (500+ affected)    | Notify within 72 hours            |
| Right to erasure   | Not explicit                  | Yes ("right to be forgotten")     |
| Data portability   | Not explicit                  | Yes                               |
| Maximum fine       | HKD 1,000,000 + imprisonment  | EUR 20M or 4% global turnover     |

### Personal Data (Privacy) Ordinance -- Exam Focus

**Data subject rights under PDPO:**

1. Right to know whether personal data is held.
2. Right to access a copy of the data.
3. Right to request correction of inaccurate data.
4. Right to opt out of direct marketing.

**Data user obligations:**

1. Inform the data subject of the purpose of collection at or before collection.
2. Use personal data only for the stated purpose.
3. Take security measures to protect the data.
4. Not retain data longer than necessary.
5. Provide access to data upon request within 40 days.

---

## Data Backup and Recovery

### Backup Strategies

| Strategy        | Description                                                     | Recovery Point               | Cost      |
| --------------- | --------------------------------------------------------------- | --------------------------- | --------- |
| **Full backup** | Copies all data every time                                     | Last backup                  | High      |
| **Incremental** | Copies only data changed since the last backup                  | Last backup + all incrementals| Low       |
| **Differential** | Copies all data changed since the last full backup              | Last full + last differential | Medium    |
| **Snapshot**    | Point-in-time copy of the entire system state                    | Exact point of snapshot       | Variable  |

### The 3-2-1 Backup Rule

A widely recommended backup strategy:

| Rule | Requirement                                          |
| ---- | ---------------------------------------------------- |
| **3** | Keep at least **3** copies of your data               |
| **2** | Store the copies on at least **2** different media types |
| **1** | Keep at least **1** copy offsite (or in the cloud)     |

Example: Original on SSD + full backup on external HDD + incremental backup to cloud storage.

### Backup Media

| Media              | Capacity  | Speed   | Cost  | Durability        |
| ----------------- | --------- | ------- | ----- | ----------------- |
| **External HDD**  | 1--20 TB  | Fast    | Low   | Moderate (5--10 yr)|
| **SSD**           | 256 GB--4 TB| Very fast | Medium | High (no moving parts)|
| **Tape**          | 1--20 TB  | Slow    | Low   | Very high (30+ yr)|
| **Cloud storage** | Unlimited | Depends on bandwidth | Subscription | Depends on provider |
| **Optical disc**  | 25--100 GB| Slow    | Low   | High (if stored properly)|

### Recovery Procedures

| Recovery Scenario      | Procedure                                                      |
| --------------------- | -------------------------------------------------------------- |
| **Accidental deletion**| Restore from the most recent backup                           |
| **Ransomware**         | Restore from offline backup (not connected during attack)        |
| **Hardware failure**   | Replace hardware, restore from backup                          |
| **Data corruption**    | Identify point of corruption, restore from last clean backup    |
| **Natural disaster**   | Restore from offsite/cloud backup on new hardware               |

**Recovery Time Objective (RTO):** The maximum acceptable time to restore the system after a failure.

**Recovery Point Objective (RPO):** The maximum acceptable amount of data loss measured in time. If RPO
is 1 hour, backups must be taken at least every hour.

---

## Big Data Concepts

### What is Big Data?

Big data refers to datasets that are too large, complex, or fast-moving to be processed using
traditional data processing methods.

### The 5 V's of Big Data

| V            | Description                                                       | Example                              |
| ------------ | ----------------------------------------------------------------- | ------------------------------------ |
| **Volume**   | The sheer scale of data (terabytes to petabytes and beyond)       | Social media generates TBs daily      |
| **Velocity** | The speed at which data is generated and needs processing          | Real-time sensor data, stock feeds     |
| **Variety**  | The diversity of data types (structured, semi-structured, unstructured) | Text, images, video, audio, logs    |
| **Veracity** | The uncertainty and trustworthiness of the data                   | Inconsistent, incomplete, or biased data |
| **Value**    | The useful information and insights that can be extracted           | Customer behaviour patterns, trends   |

### Sources of Big Data

| Source                  | Data Type        | Volume            | Example                              |
| ----------------------- | ---------------- | ----------------- | ------------------------------------ |
| **Social media**        | Text, images, video| Very high        | Twitter posts, Instagram photos     |
| **IoT sensors**         | Numeric, time-series| High            | Smart city sensors, weather stations |
| **E-commerce**          | Transactional     | High             | Purchase records, browsing behaviour |
| **Healthcare**          | Medical records   | Medium-High      | Patient records, diagnostic images   |
| **Financial markets**   | Time-series       | High             | Stock prices, trading data           |
| **Government**          | Various          | High             | Census data, tax records, traffic    |

### Big Data Processing

| Approach           | Description                                                     | Example Tools                     |
| ------------------ | --------------------------------------------------------------- | --------------------------------- |
| **Batch processing**| Process large datasets in scheduled batches                  | Hadoop MapReduce                  |
| **Real-time**       | Process data as it arrives, with minimal latency               | Apache Spark Streaming, Apache Kafka |
| **Data mining**     | Discover patterns and relationships in large datasets          | Machine learning algorithms        |
| **Data visualisation**| Present insights through interactive charts and dashboards   | Tableau, Power BI, D3.js           |

### Implications of Big Data

| Area              | Implication                                                     |
| ----------------- | --------------------------------------------------------------- |
| **Privacy**        | Collecting vast amounts of personal data raises serious privacy concerns |
| **Security**       | Larger datasets are more attractive targets for attackers         |
| **Ethics**         | Use of personal data for profiling, discrimination, manipulation |
| **Accuracy**       | Big data analysis can produce misleading results if data is biased |
| **Cost**           | Storage, processing, and skilled personnel are expensive           |

---

## Data Ethics

### Key Ethical Principles

| Principle             | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| **Informed consent**  | Individuals should know what data is collected and how it is used |
| **Purpose limitation** | Data collected for one purpose should not be repurposed without consent |
| **Data minimisation** | Collect only the minimum data necessary for the stated purpose   |
| **Transparency**      | Organisations should be open about their data practices          |
| **Accountability**    | Organisations must be responsible for how they handle data        |
| **Fairness**          | Data should not be used to discriminate or exploit individuals    |
| **Security**          | Adequate measures must protect data from breaches                |
| **Accuracy**          | Data should be kept accurate and up to date                       |

### Ethical Issues in Data Use

| Issue                  | Description                                                     | Example                                  |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------- |
| **Profiling**          | Creating detailed profiles of individuals from their data       | Targeted advertising, credit scoring      |
| **Discrimination**     | Using data to unfairly treat individuals or groups              | Insurance premiums based on genetic data   |
| **Surveillance**       | Monitoring individuals' activities without their knowledge      | Workplace monitoring, CCTV tracking        |
| **Data ownership**     | Who owns the data -- the individual or the platform?             | Social media posts, search history        |
| **Algorithmic bias**   | Automated decisions that systematically disadvantage certain groups | Hiring algorithms, criminal risk assessment |
| **Consent fatigue**    | Users agree to terms without reading them due to volume           | App terms of service, cookie consent       |

### Data Ethics in the Context of Hong Kong

The PDPO provides a legal framework for data protection in Hong Kong, but ethical considerations
extend beyond legal compliance:

- Organisations should collect only data necessary for their stated purpose.
- Individuals should have meaningful control over their personal data.
- Data analytics should be used to benefit individuals, not exploit them.
- Anonymisation techniques should be used when possible to protect identities.
- Regular audits should ensure data practices remain ethical and compliant.

---

## Common Pitfalls

1. **Confusing validation and verification:** Validation checks that data is reasonable (e.g., score
   between 0 and 100). Verification checks that data matches the original source (e.g., double
   entering marks). Both are necessary for data integrity.

2. **Flat-file vs relational:** A flat-file database with repeated data (e.g., student names in every
   row) is not normalised and suffers from update anomalies. Relational databases solve this by
   storing each piece of data once and linking tables with foreign keys.

3. **PDPO is Hong Kong-specific:** Do not confuse PDPO provisions with GDPR. PDPO does not explicitly
   include the "right to be forgotten" or data portability requirements. GDPR is stricter and has
   higher penalties.

4. **Backup is not the same as archiving:** Backups are for disaster recovery (restore data if lost).
   Archives are for long-term retention (regulatory compliance, historical records). They serve
   different purposes.

5. **The 3-2-1 rule requires offsite:** Having three copies on the same hard drive does not satisfy
   the 3-2-1 rule. At least one copy must be stored in a different physical location or in the cloud.

6. **Big data is not just about volume:** Many students focus only on the size of data. The other V's
   (velocity, variety, veracity, value) are equally important. Big data is characterised by ALL five
   dimensions.

7. **Check digit is verification, not validation:** A check digit verifies that data was entered
   correctly (matches the original). It does not validate that the data is reasonable (e.g., an ISBN
   can have a valid check digit but be the wrong book).

8. **Encryption protects data but does not prevent all threats:** Encryption protects confidentiality
   but does not prevent data corruption, accidental deletion, or physical theft of the storage device.
   It must be combined with other security measures.

9. **Consent must be informed and specific:** Vague or buried privacy policies do not constitute
   informed consent. Users must clearly understand what they are consenting to.

10. **Data minimisation is a legal requirement under PDPO:** Collecting more personal data than
    necessary for the stated purpose violates DPP 1 (purpose and collection) and DPP 3 (use limitation).

---

## Practice Problems

<details>
<summary>Question 1: Data Validation Design</summary>

A hotel booking system collects the following information:

- Guest name
- Check-in date
- Check-out date
- Room type (Standard, Deluxe, Suite)
- Number of guests
- Credit card number

For each field, state an appropriate validation type and the validation rule.

Answer:

| Field             | Validation Type    | Rule                                             |
| ----------------- | ------------------ | ------------------------------------------------ |
| Guest name        | Presence check     | Cannot be empty                                  |
| Guest name        | Length check       | Between 2 and 100 characters                    |
| Check-in date     | Type check         | Must be a valid date                             |
| Check-in date     | Range check        | Cannot be before today's date                   |
| Check-out date    | Type check         | Must be a valid date                             |
| Check-out date    | Consistency check  | Must be after the check-in date                 |
| Room type         | Lookup check       | Must be Standard, Deluxe, or Suite               |
| Number of guests  | Range check        | Between 1 and 4 (Standard), 1 and 6 (Deluxe/Suite)|
| Number of guests  | Consistency check  | Must match room type capacity                   |
| Credit card       | Length check       | Must be 16 digits                               |
| Credit card       | Type check         | Must be numeric                                 |
| Credit card       | Check digit        | Must pass Luhn algorithm validation              |

</details>

<details>
<summary>Question 2: Database Models Comparison</summary>

A school needs to manage student records, including personal details, enrolment in subjects, and
term grades.

(a) Explain why a relational database is more suitable than a flat-file database for this purpose.

(b) Describe two advantages and one disadvantage of using a relational database compared to a
    hierarchical database for this scenario.

(c) Identify the tables, fields, primary keys, and foreign keys you would create for this system.

Answer:

(a) A relational database is more suitable because: (1) Student personal details (name, class, DOB)
are the same across all subjects and terms. In a flat file, these would be repeated for every
subject-term combination, causing data redundancy. (2) If a student's class changes, a flat file
requires updating every row for that student, risking inconsistency. A relational database stores the
student details once in a Student table and references them via foreign keys. (3) The relational model
supports complex queries (e.g., "find all students who scored above 80 in both Maths and English")
that would be extremely difficult with a flat file.

(b) **Advantages over hierarchical:** (1) Relational databases support many-to-many relationships
(e.g., students to subjects), while hierarchical databases only support one-to-many. (2) Relational
databases use SQL for flexible querying; hierarchical databases require navigation through the tree
structure. **Disadvantage:** Relational databases are more complex to design, requiring knowledge of
normalisation and SQL, while hierarchical databases have a simpler tree structure that is intuitive
for naturally hierarchical data.

(c) **Tables and keys:**

- **Student** (StudentID PK, Name, Class, DOB)
- **Subject** (SubjectCode PK, SubjectName, Teacher)
- **Enrolment** (StudentID FK, SubjectCode FK) -- composite PK
- **Grade** (StudentID FK, SubjectCode FK, Term, Score) -- composite PK (StudentID + SubjectCode + Term)

Foreign keys: Enrolment.StudentID references Student.StudentID; Enrolment.SubjectCode references
Subject.SubjectCode; Grade.StudentID references Student.StudentID; Grade.SubjectCode references
Subject.SubjectCode.

</details>

<details>
<summary>Question 3: PDPO Scenario Analysis</summary>

A Hong Kong fitness centre collects members' personal data including name, phone number, email, date of
birth, and fitness goals. They use this data to send monthly promotional emails about new classes and
membership offers.

(a) State which DPPs are relevant to this scenario and explain how the fitness centre should comply.

(b) A member requests that their data be deleted. Under the PDPO, what is the fitness centre's
    obligation?

(c) The fitness centre shares member email addresses with a partner supplement company without
    informing members. Analyse whether this violates the PDPO.

Answer:

(a) **DPP 1 (Purpose and collection):** The fitness centre must inform members at the time of
collection that their data will be used for promotional emails. The purpose must be lawful and specific.
**DPP 3 (Use):** The data should only be used for the stated purpose (promotional emails about the
fitness centre's own services). Using it for other purposes requires additional consent. **DPP 4
(Security):** The fitness centre must implement appropriate security measures (encryption, access
controls) to protect member data. **DPP 5 (Information openness):** The fitness centre should have a
privacy policy explaining their data practices. **DPP 6 (Access):** Members can request access to their
data and corrections.

(b) Under DPP 6, the member has the right to access their personal data and request correction.
However, the PDPO does not explicitly include a "right to erasure" (unlike the GDPR). The fitness centre
should allow the member to access and correct their data. Whether they must delete the data depends on
whether the data is still needed for the stated purpose. If the member has cancelled their membership
and the data is no longer needed, DPP 2 (retention) suggests it should be deleted.

(c) Yes, this likely violates DPP 1 (purpose and collection) and DPP 3 (use). Members provided their
email addresses for the fitness centre's own promotional purposes. Sharing with a third-party
supplement company is a different purpose that was not stated at collection. Under DPP 3, personal data
must only be used for the purpose stated at collection or a directly related purpose. Selling or sharing
email addresses with an unrelated third party without consent violates this principle.

</details>

<details>
<summary>Question 4: Backup and Recovery</summary>

A small business stores its customer database, financial records, and inventory data on a single server
in the office.

(a) Identify three threats to this data and for each, recommend a security measure.

(b) Describe how the business should implement the 3-2-1 backup rule.

(c) The server's hard drive fails completely. Describe the recovery procedure.

(d) Explain the difference between RTO and RPO, giving an appropriate example for this business.

Answer:

(a) Three threats and measures:

1. **Hardware failure (hard drive crash):** Mitigation: RAID (redundant array of disks) for
   hardware-level redundancy, plus regular backups. RAID 1 mirrors data across two drives; if one
   fails, the other continues operating.
2. **Ransomware attack:** Mitigation: Regular offline backups (not connected to the network during the
   attack), antivirus software, email filtering, staff training on phishing awareness.
3. **Fire or flood (physical disaster):** Mitigation: Offsite backups (cloud storage or a physical
   backup stored at a different location), fire suppression system in the server room.

(b) **3-2-1 implementation:** Keep 3 copies of all data. Store copies on 2 different media types (e.g.,
   the server's RAID array as copy 1, an external HDD as copy 2, cloud storage as copy 3). Ensure 1
   copy is offsite (the cloud backup satisfies this). Schedule daily incremental backups and weekly
   full backups. Test the backup restoration procedure regularly.

(c) **Recovery procedure:** (1) Replace the failed hard drive. (2) Install the operating system and
   database software on the new drive. (3) Restore the most recent full backup. (4) Apply all
   incremental backups since the last full backup. (5) Verify data integrity by checking record counts
   and sample records. (6) Resume normal operations. If the server itself is damaged, restore to a
   replacement server using the offsite/cloud backup.

(d) **RTO (Recovery Time Objective):** The maximum acceptable downtime. For a small business, this
   might be 4 hours -- the business can tolerate being without the system for up to 4 hours.
**RPO (Recovery Point Objective):** The maximum acceptable data loss. If the business performs daily
   backups at midnight, the RPO is 24 hours -- in the worst case, up to 24 hours of data could be
   lost. To reduce RPO, the business could perform hourly incremental backups, reducing the maximum
   data loss to 1 hour.

</details>

<details>
<summary>Question 5: Big Data and Ethics</summary>

A social media company analyses user posts, likes, and browsing behaviour to build detailed user
profiles. These profiles are used to show targeted advertisements.

(a) Explain how this scenario relates to each of the 5 V's of big data.

(b) Discuss two ethical concerns arising from this practice.

(c) Suggest two measures the company could take to address these ethical concerns.

Answer:

(a) **Volume:** The company processes billions of posts, likes, and interactions from millions of users
worldwide. **Velocity:** Data is generated continuously in real time as users post, like, and browse.
The company must process this data quickly to serve relevant ads. **Variety:** Data includes text
(posts, comments), images, videos, timestamps, location data, and behavioural metadata -- a mix of
structured, semi-structured, and unstructured data. **Veracity:** User data may be inaccurate (fake
accounts, bots, misleading posts) or incomplete (users who rarely engage). The company must filter
noise from genuine signals. **Value:** The analysed profiles generate significant advertising revenue
by enabling precisely targeted marketing.

(b) **Ethical concern 1: Informed consent and transparency.** Users may not fully understand how their
data is being collected, analysed, and used for profiling. Privacy policies are often long and
complex, and users may not realise the extent of profiling.

**Ethical concern 2: Discrimination and manipulation.** Targeted advertising based on detailed
profiles can be used to manipulate behaviour (e.g., showing job ads only to certain demographics) or
exploit vulnerable users (e.g., targeting gambling ads at individuals with behavioural patterns
suggesting addiction).

(c) **Measure 1:** Provide clear, concise privacy notices that explain in plain language what data is
collected, how it is used for profiling, and how users can opt out of targeted advertising.

**Measure 2:** Implement data minimisation -- only collect and retain the data necessary for the stated
purpose, and allow users to view, correct, and delete their profile data. Provide an easy-to-use
privacy dashboard.

</details>
