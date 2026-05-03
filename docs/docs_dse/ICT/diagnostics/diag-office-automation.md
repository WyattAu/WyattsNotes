---
title: "Office Automation and Productivity -- Diagnostic Tests"
description: "DSE ICT diagnostic tests for office automation: spreadsheet formulas, database queries, word processing, presentation design, collaborative tools."
slug: diag-office-automation
hide_table_of_contents: true
---

# Office Automation and Productivity — Diagnostic Tests

## Unit Tests

### UT-1: Spreadsheet Formulas and Functions
**Question:** A shop tracks daily sales in a spreadsheet. Column A has dates, Column B has product names, Column C has quantities sold, Column D has unit prices (HKD). (a) Write a formula to calculate the daily revenue in Column E. (b) Write a formula to find the total revenue for all sales of "Laptop" in January. (c) Write a formula using IF to categorise each sale: "High" if revenue $\ge$ 10{,}000, "Medium" if $\ge$ 5000, "Low" otherwise. (d) Explain the difference between relative and absolute cell references with an example.

**Solution:**

(a) In cell E2: `=C2*D2` (quantity $\times$ unit price). Copy down for all rows.

(b) Using SUMIFS: `=SUMIFS(E:E, B:B, "Laptop", A:A, ">=1/1/2025", A:A, "<=31/1/2025")`.

Or using SUMPRODUCT: `=SUMPRODUCT((B:B="Laptop")*(A:A>=DATE(2025,1,1))*(A:A<=DATE(2025,1,31))*(E:E))`.

(c) `=IF(E2>=10000, "High", IF(E2>=5000, "Medium", "Low"))`.

(d) **Relative reference** (e.g., `A1`): When copied to another cell, the reference adjusts relative to the new position. Copying `=A1` from B2 to C2 changes it to `=B1`.

**Absolute reference** (e.g., `$A$1`): The reference does not change when copied. Used when referring to a fixed cell like a tax rate or conversion factor. Example: `=B2*$D$1` copies correctly as `=B3*$D$1`, `=B4*$D$1`, always multiplying by the value in D1.

### UT-2: Spreadsheet Data Analysis
**Question:** A spreadsheet contains student exam scores: Column A (Name), B (Maths), C (English), D (Science). Rows 2--101 contain 100 students. (a) Write a formula to calculate each student's average score. (b) Write a formula to count how many students scored above 80 in Maths. (c) Write a formula to find the highest average score. (d) Explain what a pivot table is and how it could summarise this data.

**Solution:**

(a) In cell E2: `=AVERAGE(B2:D2)`. Copy down for all students.

(b) `=COUNTIF(B2:B101, ">80")`.

(c) `=MAX(E2:E101)` where column E contains the averages.

(d) A pivot table is a data summarisation tool that automatically groups, sorts, and aggregates data without writing formulas. For this data, a pivot table could: (1) Show average score by subject. (2) Group students by performance ranges (e.g., 0--40, 41--60, 61--80, 81--100). (3) Cross-tabulate subjects against grade bands. (4) Show the count of students above/below the pass mark per subject. Pivot tables allow dynamic exploration -- the user can drag and drop fields to change the view instantly.

### UT-3: Document Formatting and Collaboration
**Question:** (a) Explain the difference between a character style and a paragraph style in a word processor. (b) Describe three features of a word processor that improve document consistency in a large report. (c) Explain how track changes and version control support collaborative editing. (d) Describe the difference between linking and embedding an object (e.g., a chart from a spreadsheet).

**Solution:**

(a) **Character style** applies formatting to selected text within a paragraph -- font, size, bold, italic, colour. Example: applying "Emphasis" style to make selected text bold and italic.

**Paragraph style** applies formatting to the entire paragraph -- alignment, line spacing, indentation, font, plus character formatting. Example: applying "Heading 1" style that sets the entire paragraph to 16pt bold Arial with spacing before/after.

(b) Three features: (1) **Styles:** Predefined formatting sets (Heading 1, Normal, Caption) that ensure consistent formatting throughout the document and allow global changes by modifying the style. (2) **Table of Contents:** Auto-generated from heading styles, ensuring it stays current. (3) **Headers, footers, and page numbering:** Consistent across all pages, with options for different first page or odd/even pages.

(c) **Track changes:** Records every edit (insertions, deletions, formatting changes) with the author's name and timestamp. Collaborators can accept or reject individual changes. This provides a complete audit trail and allows asynchronous editing.

**Version control:** Maintains multiple versions of a document, allowing users to revert to previous states, compare versions side-by-side, and merge changes from different authors. This prevents data loss and helps resolve conflicts when multiple people edit simultaneously.

(d) **Linking:** The word processor stores a reference to the source file. When the source file changes, the linked object updates automatically in the document. The document file size stays small. If the source file is moved or deleted, the link breaks.

**Embedding:** A copy of the object is inserted directly into the document. The embedded object is self-contained and does not update when the source changes. The document file size increases. The embedded object is always available, even without the source file.

---

## Integration Tests

### IT-1: Integrated Office Solution (with Programming and Databases)
**Question:** A school admin office needs to produce an end-of-year report. Student data is in a relational database. (a) Explain how the database, spreadsheet, and word processor work together to produce personalised report cards. (b) The spreadsheet calculates overall grades using a weighted formula: Exam (60%), Coursework (30%), Participation (10%). Write the formula. (c) If a student scored 85 in exam, 72 in coursework, and 90 in participation, calculate the overall grade. (d) Explain how mail merge uses the database/spreadsheet data to fill in the word processor template.

**Solution:**

(a) Workflow: (1) **Database** stores all student records, grades, and attendance. SQL queries extract the required data for the report period. (2) **Spreadsheet** receives the exported data, performs calculations (weighted averages, class rankings, grade distributions), and produces summary statistics and charts. (3) **Word processor** uses a template with placeholders (student name, grades, teacher comments) and pulls data from the spreadsheet via mail merge to generate individualised report cards.

(b) Assuming Exam score in B2, Coursework in C2, Participation in D2:
`=B2*0.6 + C2*0.3 + D2*0.1`

(c) Overall $= 85 \times 0.6 + 72 \times 0.3 + 90 \times 0.1 = 51 + 21.6 + 9 = 81.6$.

(d) **Mail merge:** The word processor template contains merge fields (e.g., `<<StudentName>>`, `<<MathsGrade>>`, `<<OverallGrade>>`). The data source (spreadsheet or database export) contains one row per student with columns matching the merge fields. During the merge, the word processor replaces each merge field with the corresponding value from the current data row, producing one document per student. This automates what would otherwise be a tedious manual process of copying data into 500+ individual documents.

### IT-2: Data Presentation and Analysis (with Data Representation)
**Question:** A company's quarterly sales data is: Q1: \$2.5M, Q2: \$3.1M, Q3: \$2.8M, Q4: \$4.2M. (a) In a spreadsheet, calculate the percentage change between consecutive quarters. (b) Create a formula to calculate the year-on-year growth rate if last year's total was \$10M. (c) Explain why a line chart is more appropriate than a pie chart for showing quarterly trends. (d) The data is exported to a CSV file. Calculate the file size if each quarter entry uses: date (10 chars), label (5 chars), amount (8 chars), and a newline.

**Solution:**

(a) Q2 vs Q1: `=(3.1-2.5)/2.5 = 0.24 = 24%`. Q3 vs Q2: `=(2.8-3.1)/3.1 = -0.097 = -9.7%`. Q4 vs Q3: `=(4.2-2.8)/2.8 = 0.50 = 50%`.

Spreadsheet formula (assuming Q1 in B1, Q2 in C1): `=(C1-B1)/B1` formatted as percentage.

(b) This year's total $= 2.5 + 3.1 + 2.8 + 4.2 = \$12.6$M. Year-on-year growth $= (12.6 - 10) / 10 = 26\%$.

Formula: `=(SUM(B1:E1)-10000000)/10000000`.

(c) A **line chart** shows the trend over time -- the progression from Q1 through Q4 reveals the seasonal pattern (dip in Q3, surge in Q4). A **pie chart** shows proportions of a whole at a single point in time but cannot show temporal trends or changes between periods. Since the data is a time series, the line chart is the correct choice.

(d) Each row: 10 (date) + 1 (comma) + 5 (label) + 1 (comma) + 8 (amount) + 1 (newline) $= 26$ bytes per quarter. For 4 quarters plus a header row: $5 \times 26 = 130$ bytes.

### IT-3: Collaborative Tools and Productivity (with Network Security)
**Question:** A team of 5 members is working on a project report remotely. (a) Compare cloud-based collaborative editing (e.g., Google Docs) with traditional file sharing (emailing attachments) in terms of: version control, concurrency, and security. (b) Explain three risks of storing sensitive company data on consumer cloud services. (c) Describe how role-based access control (RBAC) can be implemented in a shared document system. (d) The team needs to share large video files (500 MB each). Recommend an appropriate method and justify.

**Solution:**

(a) | Aspect | Cloud Collaborative | File Sharing (Email) |
|---|---|---|
| Version control | Automatic version history; real-time changes tracked per user | Manual (Save As, naming conventions); easy to overwrite; multiple conflicting versions |
| Concurrency | Multiple users edit simultaneously; real-time collaboration; conflict resolution | Sequential only; one person at a time; merge conflicts |
| Security | Data stored on third-party servers; access controlled by service provider | Data in transit (email) and at rest (local); controlled by sender's security practices |

(b) Three risks: (1) **Data jurisdiction:** Data may be stored in servers located in other countries, subject to foreign data protection laws and government access requests. (2) **Data breach:** The cloud provider may be attacked, exposing all stored data. (3) **Insider threat at provider:** Cloud provider employees may have access to customer data. (4) **Compliance:** Consumer services may not meet industry-specific compliance requirements (e.g., HIPAA for health data).

(c) **RBAC implementation:** Define roles such as: Owner (full control -- edit, share, delete), Editor (can modify content), Commenter (can add comments but not edit), Viewer (read-only). The document owner assigns roles to each team member. For the project: the project manager is Owner, 3 writers are Editors, 1 reviewer is Commenter, stakeholders are Viewers. This follows the principle of least privilege -- each user has only the access needed for their role.

(d) **Recommended method:** Use a dedicated file sharing service (e.g., company SharePoint, Dropbox Business, or OneDrive) with password-protected links. Justification: (1) Email attachments are limited (typically 25 MB) and would require splitting the file. (2) Cloud storage provides a download link rather than attaching the file to an email, keeping mailbox sizes manageable. (3) Access can be controlled (password, expiry date, download limit). (4) The link can be shared via email or messaging, keeping the actual file on secure servers. For sensitive video, encrypt before uploading.
