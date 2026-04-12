---
title: Office Automation and Productivity
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - ICT
categories:
  - DSE
  - ICT
slug: office-automation-and-productivity
---

This document covers spreadsheet concepts, database usage from an end-user perspective, word
processing, presentation software, application integration, and macro basics. Database design and
SQL are covered in depth in [programming-and-databases.md](programming-and-databases.md).

---

## Spreadsheet Concepts

A spreadsheet organises data into a grid of cells, identified by column letters and row numbers
(e.g., `A1`, `B5`, `D12`). Each cell can contain a constant value (number, text, date) or a formula
that calculates a result.

### Cell References

| Reference Type | Syntax         | Behaviour when copied                                                       |
| -------------- | -------------- | --------------------------------------------------------------------------- |
| **Relative**   | `A1`           | Adjusts based on the copy destination (e.g., `A1` copied down becomes `A2`) |
| **Absolute**   | `$A$1`         | Remains fixed regardless of where it is copied                              |
| **Mixed**      | `$A1` or `A$1` | Column fixed (`$A1`) or row fixed (`A$1`); the other part adjusts           |

<details>
<summary>Worked Example: Relative, Absolute, and Mixed References</summary>

In cell `C2`, enter `=A2*B2`. Copy this formula to `C3`, `C4`, `C5`.

Because the references are relative, they adjust:

`C3` gets `=A3*B3`

`C4` gets `=A4*B4`

`C5` gets `=A5*B5`

This is correct for calculating row-by-row products.

Now suppose `B1` contains a tax rate of 0.15, and you want to calculate tax for each row. In `D2`,
enter `=C2*$B$1`. Copy to `D3`, `D4`, `D5`.

Because `$B$1` is absolute:

`D3` gets `=C3*$B$1`

`D4` gets `=C4*$B$1`

`D5` gets `=C5*$B$1`

The tax rate reference stays fixed at `B1`.

Mixed reference example: `$A2` keeps column `A` fixed when copied horizontally but allows the row to
change when copied vertically. `A$2` allows the column to change horizontally but keeps row 2 fixed
vertically.

</details>

### Operators in Formulas

| Operator Category             | Operators                                    | Precedence (high to low) |
| ----------------------------- | -------------------------------------------- | ------------------------ |
| **Reference**                 | `:` (range), `,` (union), ` ` (intersection) | Highest                  |
| **Negation**                  | `-`                                          |                          |
| **Percent**                   | `%`                                          |                          |
| **Exponentiation**            | `^`                                          |                          |
| **Multiplication / Division** | `*`, `/`                                     |                          |
| **Addition / Subtraction**    | `+`, `-`                                     |                          |
| **Concatenation**             | `&`                                          |                          |
| **Comparison**                | `=`, `<>`, `<`, `>`, `<=`, `>=`              | Lowest                   |

### Common Spreadsheet Functions

#### Mathematical and Statistical Functions

| Function     | Syntax               | Description                           | Example                     |
| ------------ | -------------------- | ------------------------------------- | --------------------------- |
| `SUM`        | `SUM(range)`         | Adds all numbers in a range           | `=SUM(A1:A10)`              |
| `AVERAGE`    | `AVERAGE(range)`     | Arithmetic mean of numbers in a range | `=AVERAGE(B1:B20)`          |
| `COUNT`      | `COUNT(range)`       | Counts cells containing numbers       | `=COUNT(A1:A50)`            |
| `COUNTA`     | `COUNTA(range)`      | Counts non-empty cells                | `=COUNTA(A1:A50)`           |
| `COUNTBLANK` | `COUNTBLANK(range)`  | Counts empty cells                    | `=COUNTBLANK(A1:A50)`       |
| `MAX`        | `MAX(range)`         | Largest value in a range              | `=MAX(C1:C100)`             |
| `MIN`        | `MIN(range)`         | Smallest value in a range             | `=MIN(C1:C100)`             |
| `ROUND`      | `ROUND(num, digits)` | Rounds to specified decimal places    | `=ROUND(3.14159, 2)` = 3.14 |
| `INT`        | `INT(num)`           | Rounds down to nearest integer        | `=INT(7.8)` = 7             |
| `MOD`        | `MOD(num, divisor)`  | Returns remainder                     | `=MOD(10, 3)` = 1           |
| `ABS`        | `ABS(num)`           | Absolute value                        | `=ABS(-5)` = 5              |
| `SQRT`       | `SQRT(num)`          | Square root                           | `=SQRT(16)` = 4             |
| `POWER`      | `POWER(base, exp)`   | Raises to a power                     | `=POWER(2, 3)` = 8          |

#### Logical Functions

| Function  | Syntax                               | Description                                               |
| --------- | ------------------------------------ | --------------------------------------------------------- |
| `IF`      | `IF(condition, true_val, false_val)` | Returns one value if condition is true, another if false  |
| `AND`     | `AND(cond1, cond2, ...)`             | Returns TRUE if all conditions are true                   |
| `OR`      | `OR(cond1, cond2, ...)`              | Returns TRUE if at least one condition is true            |
| `NOT`     | `NOT(condition)`                     | Reverses the logical value                                |
| `IFERROR` | `IFERROR(value, value_if_error)`     | Returns value_if_error if the formula results in an error |
| `IFS`     | `IFS(cond1, val1, cond2, val2, ...)` | Evaluates multiple conditions in order                    |

<details>
<summary>Worked Example: Nested IF and IFS for Grade Calculation</summary>

Given a score in cell `A1`, assign a grade:

Using nested `IF`:

```
=IF(A1>=90, "A", IF(A1>=80, "B", IF(A1>=70, "C", IF(A1>=60, "D", "F"))))
```

Using `IFS` (cleaner):

```
=IFS(A1>=90, "A", A1>=80, "B", A1>=70, "C", A1>=60, "D", TRUE, "F")
```

The `TRUE` at the end acts as a default/catch-all condition.

</details>

#### Lookup Functions

| Function  | Syntax                                                          | Description                                                                        |
| --------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `VLOOKUP` | `VLOOKUP(lookup_value, table_array, col_index, [range_lookup])` | Searches the first column of a table and returns a value from the specified column |
| `HLOOKUP` | `HLOOKUP(lookup_value, table_array, row_index, [range_lookup])` | Searches the first row and returns from the specified row                          |
| `INDEX`   | `INDEX(array, row_num, [col_num])`                              | Returns the value at a specific position in an array                               |
| `MATCH`   | `MATCH(lookup_value, lookup_array, [match_type])`               | Returns the relative position of a value                                           |
| `XLOOKUP` | `XLOOKUP(lookup, lookup_array, return_array, [if_not_found])`   | Modern replacement for VLOOKUP; more flexible                                      |

<details>
<summary>Worked Example: VLOOKUP</summary>

A product price table in `E1:F5`:

| Cell | E (Product Code) | F (Price) |
| ---- | ---------------- | --------- |
| 1    | P001             | 50        |
| 2    | P002             | 120       |
| 3    | P003             | 75        |
| 4    | P004             | 200       |
| 5    | P005             | 95        |

In cell `A1`, a user enters a product code (e.g., `P003`).

To find the price:

```
=VLOOKUP(A1, $E$1:$F$5, 2, FALSE)
```

`A1` is the lookup value (`P003`). `$E$1:$F$5` is the table (absolute reference). `2` means return
the value from the 2nd column (Price). `FALSE` means exact match.

Result: 75.

</details>

#### Text Functions

| Function      | Syntax                   | Description                         |
| ------------- | ------------------------ | ----------------------------------- |
| `LEFT`        | `LEFT(text, num_chars)`  | Extracts characters from the left   |
| `RIGHT`       | `RIGHT(text, num_chars)` | Extracts characters from the right  |
| `MID`         | `MID(text, start, num)`  | Extracts characters from the middle |
| `LEN`         | `LEN(text)`              | Returns the length of a string      |
| `UPPER`       | `UPPER(text)`            | Converts to uppercase               |
| `LOWER`       | `LOWER(text)`            | Converts to lowercase               |
| `TRIM`        | `TRIM(text)`             | Removes extra spaces                |
| `CONCATENATE` | `CONCATENATE(t1, t2)`    | Joins text strings                  |
| `FIND`        | `FIND(search, text)`     | Finds position of substring         |

#### Date Functions

| Function  | Syntax                      | Description                         |
| --------- | --------------------------- | ----------------------------------- |
| `TODAY`   | `TODAY()`                   | Returns current date                |
| `NOW`     | `NOW()`                     | Returns current date and time       |
| `DATE`    | `DATE(year, month, day)`    | Creates a date from components      |
| `YEAR`    | `YEAR(date)`                | Extracts year from a date           |
| `MONTH`   | `MONTH(date)`               | Extracts month                      |
| `DAY`     | `DAY(date)`                 | Extracts day                        |
| `DATEDIF` | `DATEDIF(start, end, unit)` | Calculates difference between dates |

### Charts and Graphs

| Chart Type     | Best Used For                                   | Data Characteristics           |
| -------------- | ----------------------------------------------- | ------------------------------ |
| **Column/Bar** | Comparing values across categories              | Discrete categories            |
| **Line**       | Showing trends over time                        | Continuous data, time series   |
| **Pie**        | Showing proportions of a whole                  | Single data series, few slices |
| **Scatter**    | Showing correlation between two variables       | Paired numerical data          |
| **Area**       | Showing cumulative trends over time             | Time series with volume        |
| **Combo**      | Displaying two data types with different scales | Mixed data types               |

### Conditional Formatting

Conditional formatting applies formatting (colours, icons, data bars) to cells based on their
values, making patterns and outliers visually apparent.

| Rule Type            | Description                                           | Example                               |
| -------------------- | ----------------------------------------------------- | ------------------------------------- |
| **Highlight cells**  | Format cells that meet a condition                    | Cells &gt; 100 turn red               |
| **Top/Bottom rules** | Format the top or bottom n items                      | Top 10 scores highlighted             |
| **Data bars**        | In-cell bar chart showing relative magnitude          | Sales figures as bar lengths          |
| **Colour scales**    | Gradient colours (e.g., red-yellow-green)             | Low = red, high = green               |
| **Icon sets**        | Display icons (arrows, traffic lights) based on value | Up arrow for growth, down for decline |

### Data Validation

Data validation restricts the type of data that can be entered in a cell, preventing data entry
errors.

| Validation Type  | Description                                 | Example                               |
| ---------------- | ------------------------------------------- | ------------------------------------- |
| **Whole number** | Restrict to integers within a range         | 0 -- 100 for scores                   |
| **Decimal**      | Restrict to decimal numbers                 | 0.00 -- 9999.99 for prices            |
| **List**         | Restrict to values from a dropdown list     | Yes, No, N/A for a status field       |
| **Date**         | Restrict to dates within a range            | Between 2020-01-01 and 2026-12-31     |
| **Text length**  | Restrict the number of characters           | Exactly 8 characters for student ID   |
| **Custom**       | Use a formula to define the valid condition | `=ISNUMBER(A1)` to allow only numbers |

### Sorting and Filtering

**Sorting** arranges data in ascending or descending order based on one or more columns.

- Primary sort: main sort criterion (e.g., sort by Last Name).
- Secondary sort: applied when primary values are equal (e.g., then by First Name).

**Filtering** displays only rows that meet specified criteria while hiding the rest.

- AutoFilter: quick filtering on individual columns.
- Advanced Filter: complex criteria using multiple conditions (AND/OR logic).

### Pivot Tables

A pivot table summarises large datasets by grouping, counting, summing, and averaging data across
different dimensions.

**Key components:**

| Component   | Description                                           |
| ----------- | ----------------------------------------------------- |
| **Rows**    | Categories for grouping (e.g., product names)         |
| **Columns** | Secondary categories (e.g., months)                   |
| **Values**  | The data being summarised (e.g., SUM of sales)        |
| **Filters** | Apply criteria to the entire pivot table (e.g., year) |

<details>
<summary>Worked Example: Pivot Table Scenario</summary>

Raw data: 500 sales records with columns: Date, Product, Region, Salesperson, Amount.

Using a pivot table, you can quickly answer:

- Total sales by region (Rows = Region, Values = SUM of Amount).
- Total sales by product and month (Rows = Product, Columns = Month, Values = SUM of Amount).
- Average sale per salesperson (Rows = Salesperson, Values = AVERAGE of Amount).
- Top 5 products by total sales (Rows = Product, Values = SUM of Amount, sort descending, filter top
  5).

The pivot table performs the grouping and aggregation automatically without requiring formulas or
manual sorting.

</details>

---

## Database Concepts -- End-User Perspective

Relational database design, ER diagrams, normalisation, and SQL are covered in
[programming-and-databases.md](programming-and-databases.md). This section covers database usage
from the perspective of an end-user interacting with a DBMS application (e.g., Microsoft Access).

### Database Objects

| Object     | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| **Table**  | Stores data in rows (records) and columns (fields)            |
| **Query**  | Extracts, filters, sorts, or summarises data from tables      |
| **Form**   | Provides a user-friendly interface for data entry and editing |
| **Report** | Presents formatted data for printing or viewing               |

### Tables

A table is the fundamental storage structure. Each table has:

- **Fields (columns):** Define the attributes of the data. Each field has a data type (text, number,
  date, currency, yes/no, etc.).
- **Records (rows):** Individual entries in the table.
- **Primary key:** A field (or combination of fields) that uniquely identifies each record.
- **Field properties:** Define constraints such as field size, required, default value, validation
  rule, indexed, and input mask.

| Field Property      | Description                                         | Example                           |
| ------------------- | --------------------------------------------------- | --------------------------------- |
| **Data type**       | Type of data stored (Text, Number, Date/Time, etc.) | `Currency` for price fields       |
| **Field size**      | Maximum characters or numeric precision             | `50` for name fields              |
| **Required**        | Whether a value must be entered                     | `Yes` for StudentID               |
| **Default value**   | Value automatically entered if none is specified    | `0` for a quantity field          |
| **Validation rule** | Expression that limits acceptable values            | `>=0 AND <=100` for a score       |
| **Input mask**      | Template for data entry format                      | `0000-0000` for phone numbers     |
| **Indexed**         | Whether an index is created for faster searching    | `Yes` for fields used in searches |

### Queries

Queries allow users to extract specific data from one or more tables without writing SQL directly.

**Query by Example (QBE):** A graphical interface where users specify criteria by filling in a grid.

| Query Type          | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| **Select query**    | Retrieve specific fields and records with filtering              |
| **Parameter query** | Prompts the user for criteria at runtime                         |
| **Action query**    | Modify data (Append, Update, Delete, Make-Table)                 |
| **Crosstab query**  | Summarise data in a matrix (row headers, column headers, values) |
| **Calculation**     | Perform calculations on fields (SUM, AVG, COUNT, etc.)           |

### Forms

Forms provide a structured interface for data entry, viewing, and editing. They improve data
accuracy by controlling how users interact with the database.

| Form Feature          | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| **Text boxes**        | Display or accept data entry for a single field                          |
| **Labels**            | Descriptive text identifying fields                                      |
| **Buttons**           | Trigger actions (save record, navigate, print)                           |
| **Drop-down lists**   | Restrict input to predefined values (lookup from a table)                |
| **Sub-forms**         | Display related records from another table (e.g., orders for a customer) |
| **Calculated fields** | Display values computed from other fields                                |

### Reports

Reports present data in a formatted, printable layout suitable for analysis and distribution.

| Report Feature             | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| **Grouping**               | Organise data by categories (e.g., group by department)    |
| **Sorting**                | Order records within groups                                |
| **Subtotals/totals**       | Calculate sums, averages, counts at group and report level |
| **Headers/footers**        | Report title, page numbers, dates                          |
| **Conditional formatting** | Highlight specific values in the report output             |
| **Charts**                 | Embedded charts for visual data presentation               |

### Relational vs Flat-File Database

| Feature           | Flat File                 | Relational Database              |
| ----------------- | ------------------------- | -------------------------------- |
| Structure         | Single table/file         | Multiple linked tables           |
| Data redundancy   | High (same data repeated) | Low (normalised)                 |
| Data integrity    | Difficult to maintain     | Enforced by keys and constraints |
| Query flexibility | Limited (filter/sort)     | Powerful (SQL, joins, unions)    |
| Concurrent access | Typically single-user     | Multi-user with locking          |
| Scalability       | Poor for large datasets   | Scales well                      |
| Complexity        | Simple                    | Requires design expertise        |
| Examples          | CSV, single spreadsheet   | MySQL, PostgreSQL, MS Access     |

---

## Word Processing and Desktop Publishing

### Word Processing Features

| Feature                     | Description                                                     | Use Case                                |
| --------------------------- | --------------------------------------------------------------- | --------------------------------------- |
| **Text formatting**         | Font, size, bold, italic, underline, colour, highlighting       | Emphasising text, improving readability |
| **Paragraph formatting**    | Alignment, indentation, line spacing, paragraph spacing         | Structuring documents                   |
| **Styles and themes**       | Predefined sets of formatting for consistent appearance         | Maintaining document consistency        |
| **Headers and footers**     | Repeated content at top/bottom of each page                     | Page numbers, document title, date      |
| **Page layout**             | Margins, orientation (portrait/landscape), columns, page breaks | Controlling document appearance         |
| **Tables**                  | Organise data in rows and columns                               | Schedules, comparison charts            |
| **Images and graphics**     | Insert and format pictures, shapes, SmartArt                    | Illustrations, diagrams                 |
| **Spell and grammar check** | Automated checking of spelling and grammar errors               | Proofreading                            |
| **Track changes**           | Record edits with author attribution                            | Collaborative editing                   |
| **Mail merge**              | Personalise documents from a data source                        | Mass letters, certificates              |
| **Table of contents**       | Auto-generated from heading styles                              | Long documents, reports                 |
| **Footnotes/endnotes**      | Annotations and references at page bottom or document end       | Academic writing                        |
| **Find and replace**        | Search for text and optionally replace it                       | Bulk editing                            |
| **Templates**               | Pre-formatted document layouts for common document types        | Resumes, invoices, memos                |

### Desktop Publishing (DTP)

DTP software (e.g., Adobe InDesign, Microsoft Publisher) provides advanced layout control for
professional publications such as brochures, newsletters, magazines, and books.

| Feature                | Word Processing             | Desktop Publishing                              |
| ---------------------- | --------------------------- | ----------------------------------------------- |
| **Primary purpose**    | Text-centric documents      | Visual layout and design                        |
| **Typography control** | Basic (font, size, spacing) | Advanced (kerning, tracking, leading, baseline) |
| **Layout precision**   | Limited                     | Pixel-perfect placement                         |
| **Text wrapping**      | Basic (around images)       | Advanced (custom shapes, contours)              |
| **Colour management**  | Basic                       | CMYK support, spot colours                      |
| **Output**             | Office documents, letters   | Print-ready publications                        |
| **Master pages**       | Not available               | Consistent page templates                       |
| **Imposition**         | Not available               | Arranging pages for printing                    |

---

## Presentation Software

Presentation software (e.g., Microsoft PowerPoint, Google Slides, Keynote) creates slide-based
visual presentations.

### Key Features

| Feature               | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| **Slide layouts**     | Predefined arrangements of placeholders for title, content, images   |
| **Slide transitions** | Animated effects between slides (fade, push, wipe, morph)            |
| **Animations**        | Effects applied to objects within a slide (appear, fly in, emphasis) |
| **Master slides**     | Template defining the consistent appearance of all slides            |
| **Speaker notes**     | Notes visible only to the presenter (not projected)                  |
| **Multimedia**        | Embedded audio, video, and interactive content                       |
| **Hyperlinks**        | Links to other slides, external URLs, or files                       |
| **Tables and charts** | Data visualisation within slides                                     |
| **Drawing tools**     | Shapes, lines, arrows, freehand drawing                              |
| **Slide show mode**   | Full-screen presentation with keyboard/click navigation              |

### Design Principles for Presentations

| Principle            | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| **Simplicity**       | One main idea per slide; avoid clutter                              |
| **Consistency**      | Use the same fonts, colours, and layout throughout                  |
| **Contrast**         | Use contrasting colours for text and background                     |
| **Hierarchy**        | Important information should be larger and more prominent           |
| **Readability**      | Font size at least 24pt for body text; sans-serif fonts for screens |
| **6x6 rule**         | Maximum 6 bullet points per slide, maximum 6 words per line         |
| **Visual over text** | Use images, charts, and diagrams instead of walls of text           |
| **White space**      | Leave adequate empty space; do not fill every pixel                 |

---

## Integration Between Applications

### Mail Merge

Mail merge combines a main document (template) with a data source to produce personalised documents
for each record.

**Process:**

1. **Main document:** Create a template with merge fields (placeholders for variable data).
2. **Data source:** Prepare a data file (spreadsheet, database, or CSV) containing the variable
   data.
3. **Insert merge fields:** Map data source fields to placeholders in the template.
4. **Preview and merge:** Preview the results, then merge to produce individual documents or a
   single consolidated document.

| Component     | Description                                            | Example                                        |
| ------------- | ------------------------------------------------------ | ---------------------------------------------- |
| Main document | Template with fixed text and merge field placeholders  | Letter template with `<<Name>>`, `<<Address>>` |
| Data source   | Table of records containing the variable data          | Excel sheet with columns: Name, Address, Date  |
| Merge fields  | Placeholders that are replaced with data source values | `<<Name>>` replaced with "Chan Tai Man"        |
| Merged output | Individual documents or a single combined document     | 200 personalised letters                       |

<details>
<summary>Worked Example: Mail Merge for Exam Certificates</summary>

A school needs to print certificates for 300 students. Each certificate shows the student name,
class, and exam score.

Data source (Excel):

| Name         | Class | Score |
| ------------ | ----- | ----- |
| Chan Tai Man | 5A    | 92    |
| Lee Siu Ming | 5B    | 88    |
| Wong Ka Wai  | 5A    | 95    |

Main document (template):

```
Certificate of Achievement

This is to certify that <<Name>> of class <<Class>>
has achieved a score of <<Score>> in the DSE ICT examination.

Awarded on <<Date>>
```

After merge, each student receives a personalised certificate with their name, class, and score
filled in. The `<<Date>>` field can use the current date function.

</details>

### Embedding vs Linking (OLE)

Object Linking and Embedding (OLE) allows data from one application to be included in another.

| Aspect      | Embedding                                                 | Linking                                                     |
| ----------- | --------------------------------------------------------- | ----------------------------------------------------------- |
| Storage     | The object is stored within the destination file          | Only a reference (link) to the source file is stored        |
| File size   | Increases the destination file size                       | Minimal increase (just the link path)                       |
| Updating    | Changes to the embedded object do NOT affect the original | Changes to the source file ARE reflected in the destination |
| Portability | Self-contained; works even if the original file is moved  | Breaks if the source file is moved or deleted               |
| When to use | When the data should be independent and portable          | When the data should stay synchronised with the source      |

**Example:** Embedding an Excel chart into a Word document means the chart data is stored inside the
Word file. Linking means the Word document references the Excel file; if the Excel data changes, the
chart in Word updates automatically.

### Copy and Paste Between Applications

| Method            | Description                                          | Data Transferred                    |
| ----------------- | ---------------------------------------------------- | ----------------------------------- |
| **Copy/Paste**    | Standard clipboard; data is pasted as static content | Formatted text, images              |
| **Paste Special** | Choose the format of pasted data                     | Unformatted text, image, OLE object |
| **Paste Link**    | Creates a link to the source; updates dynamically    | Linked OLE object                   |

### Common Integration Scenarios

| Scenario                               | Source Application | Destination Application | Integration Method    |
| -------------------------------------- | ------------------ | ----------------------- | --------------------- |
| Quarterly report with financial tables | Excel              | Word                    | Embed or link chart   |
| Mass personalised letters              | Excel              | Word                    | Mail merge            |
| Presentation with live data            | Excel              | PowerPoint              | Link chart            |
| Contact list for email campaign        | Access/Excel       | Email client            | Mail merge            |
| Customer data in a report              | Database           | Word                    | Mail merge with query |

---

## Macro Basics

### What Is a Macro?

A macro is a recorded sequence of actions (keystrokes, mouse clicks, menu selections) that can be
played back automatically. Macros automate repetitive tasks, saving time and reducing human error.

### Recording a Macro

Most office applications provide a macro recorder that captures user actions and converts them into
code.

**General steps:**

1. Start the macro recorder and assign a name (and optionally a shortcut key).
2. Perform the actions you want to automate.
3. Stop the recorder.
4. The macro is saved and can be replayed at any time.

<details>
<summary>Worked Example: Recording a Macro in a Spreadsheet</summary>

Task: Format a sales report header -- make row 1 bold, set background to blue, set font colour to
white, centre-align, and set column widths.

Steps:

1. Click "Record Macro" and name it `FormatHeader`.
2. Select row 1. Set font to bold. Set background fill to blue. Set font colour to white. Set
   alignment to centre. Set column widths to 15.
3. Stop recording.

Now, whenever you open a new sales report, running `FormatHeader` applies all formatting in one step
instead of performing each action manually.

</details>

### Macro Code (VBA Basics)

Macros recorded in Microsoft Office applications are stored as VBA (Visual Basic for Applications)
code. Understanding VBA basics allows users to edit and enhance recorded macros.

**Key VBA concepts:**

| Concept          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| **Variable**     | A named storage location for a value                    |
| **Sub/Function** | A named block of code that performs a task              |
| **Object**       | An application element (workbook, worksheet, range)     |
| **Method**       | An action performed on an object (Select, Delete, Copy) |
| **Property**     | An attribute of an object (Value, Font, Color)          |

**Example VBA macro:**

```vba
Sub HighlightFailingScores()
    Dim i As Integer
    For i = 2 To 100
        If Cells(i, 3).Value < 50 Then
            Cells(i, 3).Interior.Color = RGB(255, 0, 0)
        End If
    Next i
End Sub
```

This macro iterates through rows 2 to 100, column 3, and colours any cell with a value below 50 in
red.

### Macro Security Considerations

| Risk                   | Description                                                     | Mitigation                            |
| ---------------------- | --------------------------------------------------------------- | ------------------------------------- |
| **Macro viruses**      | Malicious macros embedded in documents that execute when opened | Disable macros from untrusted sources |
| **Unintended actions** | A poorly written macro may delete or modify data                | Test macros on backup data first      |
| **Privacy**            | Macros can access and transmit data without user awareness      | Review macro code before running      |

Modern office applications default to disabling macros from the internet and prompt the user before
enabling macros in downloaded documents.

---

## Common Pitfalls

1. **Relative vs absolute references:** Forgetting to use `$` for absolute references when copying
   formulas is one of the most common spreadsheet errors. If a formula that should reference a fixed
   cell (like a tax rate) gives wrong results after copying, check for missing `$` signs.

2. **VLOOKUP column index:** The column index in `VLOOKUP` is relative to the table array, NOT the
   worksheet column. If your table starts in column `E` and you want the value in column `G`, the
   index is 3 (not 7).

3. **VLOOKUP left-to-right only:** VLOOKUP can only search the leftmost column of a table. If you
   need to look up a value and return a result from a column to the left, use `INDEX`+`MATCH` or
   `XLOOKUP`.

4. **Division by zero in formulas:** If a formula divides by a cell that may be empty or zero (e.g.,
   `=A1/B1`), the result shows `#DIV/0!`. Use `=IFERROR(A1/B1, 0)` or `=IF(B1=0, 0, A1/B1)` to
   handle this gracefully.

5. **Circular references:** A formula that references its own cell (directly or indirectly) creates
   a circular reference. Most spreadsheets detect this and warn the user. Circular references are
   rarely intentional and usually indicate an error.

6. **Data validation override:** Data validation can be bypassed by pasting data into a cell (paste
   special or drag-and-drop). For critical data integrity, use database constraints instead of, or
   in addition to, spreadsheet data validation.

7. **Mail merge data formatting:** If the data source has numbers stored as text (or vice versa),
   the merged output may display incorrectly (e.g., dates showing as serial numbers). Always check
   data types in the source before merging.

8. **Linking vs embedding trade-off:** Linking keeps files synchronised but breaks if the source is
   moved. Embedding makes files self-contained but increases file size and does not update. Choose
   based on whether synchronisation or portability is more important for the use case.

9. **Macro security:** Never enable macros in documents from untrusted sources. Macro viruses can
   spread through shared documents and can delete files, install malware, or steal data.

10. **Pivot table data refresh:** Pivot tables do not automatically update when source data changes.
    You must manually refresh the pivot table (or set up automatic refresh) to reflect new or
    modified data.

---

## Practice Problems

<details>
<summary>Question 1: Spreadsheet Formulas</summary>

A spreadsheet contains the following data:

|     | A (Student) | B (Maths) | C (English) | D (ICT) | E (Total) | F (Average) | G (Grade) |
| --- | ----------- | --------- | ----------- | ------- | --------- | ----------- | --------- |
| 1   |             |           |             |         |           |             |           |
| 2   | Alice       | 85        | 92          | 78      |           |             |           |
| 3   | Bob         | 72        | 65          | 88      |           |             |           |
| 4   | Carol       | 90        | 88          | 95      |           |             |           |
| 5   | David       | 60        | 55          | 70      |           |             |           |

(a) Write the formula for E2 to calculate the total score for Alice.

(b) Write the formula for F2 to calculate the average score for Alice.

(c) Write the formula for G2 to assign a grade: "A" if average &gt;= 80, "B" if &gt;= 60, otherwise
"C".

(d) If the formula in E2 is copied down to E5, what will E3 contain?

Answer:

(a) `=SUM(B2:D2)`

(b) `=AVERAGE(B2:D2)` or `=E2/3`

(c) `=IF(F2>=80, "A", IF(F2>=60, "B", "C"))`

(d) Because the references in `=SUM(B2:D2)` are relative, copying to E3 changes them to
`=SUM(B3:D3)`, which calculates the total for Bob: 72 + 65 + 88 = 225.

</details>

<details>
<summary>Question 2: VLOOKUP and Conditional Formatting</summary>

A product table is in cells `H1:I6`:

|     | H (Code) | I (Price) |
| --- | -------- | --------- |
| 1   |          |           |
| 2   | A01      | 25        |
| 3   | A02      | 45        |
| 4   | B01      | 120       |
| 5   | B02      | 85        |
| 6   | C01      | 200       |

In column `A` (rows 2--20), a list of product codes is entered. Column `B` should display the
corresponding prices.

(a) Write the VLOOKUP formula for cell `B2`.

(b) Explain what happens if the code in `A2` is not found in the product table.

(c) Describe how conditional formatting can be applied to column `B` to highlight prices greater
than 100 in red.

Answer:

(a) `=VLOOKUP(A2, $H$2:$I$6, 2, FALSE)`

`A2` is the lookup value. `$H$2:$I$6` is the table range (absolute references so it does not shift
when copied down). `2` specifies the second column (Price). `FALSE` requires an exact match.

(b) If the code is not found, VLOOKUP returns `#N/A` (Not Available). To handle this gracefully, use
`=IFERROR(VLOOKUP(A2, $H$2:$I$6, 2, FALSE), "Not Found")` to display a custom message instead of an
error.

(c) Select the range `B2:B20`. Go to Conditional Formatting &gt; Highlight Cells Rules &gt; Greater
Than. Enter `100` and select red formatting. This applies red fill to any cell in the range where
the value exceeds 100.

</details>

<details>
<summary>Question 3: Database Objects</summary>

A school uses a database to manage student records. Describe the role of each of the following
database objects in this context:

(a) Table

(b) Query

(c) Form

(d) Report

Answer:

(a) **Table:** Stores the raw data. For example, a `Student` table with fields StudentID, Name,
Class, DateOfBirth. The table is the fundamental data storage structure.

(b) **Query:** Retrieves specific data from tables based on criteria. For example, a query to list
all students in class 5A who scored above 80 in ICT. Queries can also perform calculations (e.g.,
average score per class).

(c) **Form:** Provides a user-friendly interface for data entry and editing. For example, a
registration form where office staff enter new student details. Forms can include validation (e.g.,
restricting the Class field to valid class codes) and dropdown lists for consistent data entry.

(d) **Report:** Presents formatted data for printing or distribution. For example, an end-of-year
report card showing each student's scores, class rank, and teacher comments, grouped by class with
subtotals and school averages.

</details>

<details>
<summary>Question 4: Application Integration</summary>

A company needs to send personalised salary slips to 200 employees. The employee data (name,
department, salary, deductions) is stored in an Excel spreadsheet.

(a) Describe how mail merge can be used to produce the salary slips.

(b) Should the employee data table be embedded or linked in the salary slip template? Justify your
answer.

(c) Explain two advantages of using macros to automate the salary slip generation process.

Answer:

(a) Steps: (1) Create a salary slip template in Word with merge fields for `<<Name>>`,
`<<Department>>`, `<<Salary>>`, `<<Deductions>>`, and `<<Net Pay>>`. (2) Set the Excel spreadsheet
as the data source. (3) Insert merge fields at the appropriate positions in the template. (4)
Preview the merged results. (5) Merge to produce individual salary slips or a single document with
page breaks between slips.

(b) **Linking** is more appropriate because: (1) If employee data changes (e.g., salary adjustment),
the linked salary slips will automatically reflect the updated values when refreshed. (2) The Excel
file is likely updated monthly, and linking ensures the template always uses the latest data. (3)
The template file remains smaller with linking. Embedding would create a static snapshot that would
not update when the source data changes.

(c) Two advantages: (1) **Consistency:** A macro can apply the exact same formatting, layout, and
calculations to every salary slip, eliminating variations caused by manual operations. (2) **Time
saving:** Instead of manually configuring mail merge, formatting, and printing for each run, a macro
executes all steps with a single command, significantly reducing processing time and human error for
200 employees.

</details>

<details>
<summary>Question 5: Spreadsheet Scenario</summary>

A teacher records student attendance in a spreadsheet. Column `A` has student names (rows 2--31 for
30 students). Columns `B` to `F` represent Monday to Friday. Each cell contains "P" (present) or "A"
(absent).

(a) Write a formula for cell `G2` to count the number of absences for the student in row 2.

(b) Write a formula for cell `G2` to calculate the attendance percentage for the student in row 2.

(c) Write a formula using `COUNTIF` to count how many students were absent on Monday (column `B`).

(d) The teacher wants to highlight any student with an attendance percentage below 80% in red.
Describe how to set this up using conditional formatting.

Answer:

(a) `=COUNTIF(B2:F2, "A")`

This counts cells in the range `B2:F2` that contain "A".

(b) `=COUNTIF(B2:F2, "P")/COUNTA(B2:F2)*100` or `=(5-COUNTIF(B2:F2, "A"))/5*100`

This calculates the percentage of "P" values out of 5 days.

(c) `=COUNTIF(B2:B31, "A")`

This counts how many cells in column `B` (rows 2--31) contain "A".

(d) Select the range `G2:G31`. Go to Conditional Formatting &gt; Highlight Cells Rules &gt; Less
Than. Enter `80` and select red formatting. Any cell in column `G` with a value below 80 will be
highlighted in red. Note: the formula in `G` must calculate a percentage (not just a count) for this
to work correctly.

</details>
