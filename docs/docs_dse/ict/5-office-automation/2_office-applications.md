---
title: Office Applications in Depth
description:
  'DSE ICT advanced notes on spreadsheet functions (VLOOKUP, INDEX/MATCH, pivot tables, conditional
  formatting, data validation, macros), database operations'
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - ICT
categories:
  - DSE
  - ICT
slug: office-applications-depth
---

This document extends the spreadsheet, database, and office automation topics in
[../5-office-automation/1_office-automation](../5-office-automation/1_office-automation) with
advanced Spreadsheet functions, deeper database operations, and detailed coverage of presentation
software and Desktop publishing for the DSE ICT practical examination.

---

## Advanced Spreadsheet Functions

### VLOOKUP -- Vertical Lookup

`VLOOKUP` searches for a value in the first column of a table and returns a value from a specified
Column in the same row.

```
VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
```

| Parameter       | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `lookup_value`  | The value to search for in the first column                               |
| `table_array`   | The range containing the lookup table (first column is the search column) |
| `col_index_num` | The column number in the table from which to return the value (1-based)   |
| `range_lookup`  | `TRUE` (or omitted) for approximate match; `FALSE` for exact match        |

**Critical limitations of VLOOKUP:**

1. Can only search the **leftmost** column of the table. Cannot look up values to the left of the
   search column.
2. `col_index_num` is a hardcoded number -- if columns are inserted or deleted, the formula breaks.
3. Returns only the **first** matching value. If duplicates exist in the search column, only the
   first is returned.
4. The entire table array is fixed -- the search column must always be the first column.

<details>
<summary>Worked Example: VLOOKUP with Exact Match</summary>

A product catalogue in `E1:H20` with columns: ProductCode (E), ProductName (F), Category (G), Price
(H).

In cell `A1`The user enters a product code. In `B1`Display the product name. In `C1`Display the
Price.

```python
B1: =VLOOKUP(A1, $E$1:$H$20, 2, FALSE)
C1: =VLOOKUP(A1, $E$1:$H$20, 4, FALSE)
```

If `A1` contains `P105`The formula searches column E for `P105`Finds it, and returns the value From
column 2 (F) for the product name and column 4 (H) for the price.

If the product code is not found, both formulas return `#N/A`.

To handle the error gracefully:

```python
B1: =IFERROR(VLOOKUP(A1, $E$1:$H$20, 2, FALSE), "Product not found")
```

</details>

<details>
<summary>Worked Example: VLOOKUP with Approximate Match</summary>

A grading scale in `K1:L5`:

| Cell | K (Minimum Score) | L (Grade) |
| ---- | ----------------- | --------- |
| 1    | 0                 | F         |
| 2    | 40                | D         |
| 3    | 60                | C         |
| 4    | 75                | B         |
| 5    | 90                | A         |

In cell `A1`A student has scored 72.

```python
=VLOOKUP(A1, $K$1:$L$5, 2, TRUE)
```

With approximate match (`TRUE`), VLOOKUP finds the largest value in the first column that is less
Than or equal to the lookup value. 72 falls between 60 and 75, so it matches row 3 (60) and returns
`C`.

**Important:** For approximate match to work correctly, the first column of the table must be sorted
In ascending order. If it is not sorted, the result is unpredictable.

</details>

### HLOOKUP -- Horizontal Lookup

`HLOOKUP` is identical to VLOOKUP but searches the **first row** instead of the first column.

```
HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])
```

| Parameter       | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| `lookup_value`  | The value to search for in the first row                             |
| `table_array`   | The range containing the lookup table (first row is the search row)  |
| `row_index_num` | The row number in the table from which to return the value (1-based) |
| `range_lookup`  | `TRUE` for approximate match; `FALSE` for exact match                |

HLOOKUP is used when data is organised horizontally (e.g., monthly sales figures in rows).

<details>
<summary>Worked Example: HLOOKUP</summary>

Monthly sales data in `A1:F3`:

| Cell | A      | B (Jan) | C (Feb) | D (Mar) | E (Apr) | F (May) |
| ---- | ------ | ------- | ------- | ------- | ------- | ------- |
| 1    | Month  | Jan     | Feb     | Mar     | Apr     | May     |
| 2    | Sales  | 15000   | 18000   | 12000   | 21000   | 19000   |
| 3    | Target | 16000   | 16000   | 16000   | 16000   | 16000   |

To find the sales figure for March:

```python
=HLOOKUP("Mar", A1:F3, 2, FALSE)
```

This searches the first row for "Mar", finds it in column D, and returns the value from row
2: 12000.

</details>

### INDEX and MATCH -- The Flexible Alternative

`INDEX` returns the value at a specific position in a range. `MATCH` returns the relative position
of A value within a range. Combining them provides a more flexible lookup than VLOOKUP.

```
INDEX(array, row_num, [col_num])
MATCH(lookup_value, lookup_array, [match_type])
```

| MATCH match_type | Behaviour                                        |
| ---------------- | ------------------------------------------------ |
| `0`              | Exact match                                      |
| `1` (default)    | Largest value less than or equal to lookup value |
| `-1`             | Smallest value greater than or equal to lookup   |

**INDEX + MATCH formula pattern:**

```python
=INDEX(return_range, MATCH(lookup_value, search_range, 0))
```

<details>
<summary>Worked Example: INDEX/MATCH Left Lookup</summary>

Employee data in `A1:D10`:

| Column | A (Name) | B (Dept) | C (Position) | D (Salary) |
| ------ | -------- | -------- | ------------ | ---------- |
| 1      | Header   | Header   | Header       | Header     |
| 2      | Chan     | IT       | Manager      | 45000      |
| 3      | Lee      | Sales    | Clerk        | 28000      |

**Task:** Given a salary in cell `F1` (e.g., 28000), find the employee name.

VLOOKUP cannot do this because the search column (Salary, D) is to the right of the return column
(Name, A).

```python
=INDEX(A2:A10, MATCH(F1, D2:D10, 0))
```

`MATCH(F1, D2:D10, 0)` finds the row number where 28000 appears in column D (row 2 within the range,
I.e., row 3 in the sheet). `INDEX(A2:A10, 2)` returns the value at that position in column A: "Lee".

</details>

<details>
<summary>Worked Example: Two-Way Lookup with INDEX/MATCH</summary>

A sales table with products in rows and months in columns:

| Cell | A (Product) | B (Jan) | C (Feb) | D (Mar) |
| ---- | ----------- | ------- | ------- | ------- |
| 1    | Product     | Jan     | Feb     | Mar     |
| 2    | Keyboard    | 5000    | 5500    | 4800    |
| 3    | Mouse       | 3000    | 3200    | 3500    |
| 4    | Monitor     | 8000    | 7500    | 8200    |

To find the sales for "Mouse" in "Feb":

```python
=INDEX(B2:D4, MATCH("Mouse", A2:A4, 0), MATCH("Feb", B1:D1, 0))
```

`MATCH("Mouse", A2:A4, 0)` returns 2 (second row in the range). `MATCH("Feb", B1:D1, 0)` returns 2
(second column in the range). `INDEX(B2:D4, 2, 2)` returns 3200.

This two-dimensional lookup is impossible with a single VLOOKUP or HLOOKUP.

</details>

### XLOOKUP -- Modern Lookup Function

`XLOOKUP` is available in newer versions of Excel and Google Sheets. It combines the capabilities of
VLOOKUP, HLOOKUP, and INDEX/MATCH in a single, more intuitive function.

```
XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
```

| Parameter      | Description                                 |
| -------------- | ------------------------------------------- |
| `lookup_value` | Value to search for                         |
| `lookup_array` | The range to search                         |
| `return_array` | The range containing the return values      |
| `if_not_found` | Value to return if no match (avoids #N/A)   |
| `match_mode`   | 0 = exact, -1 = exact or next smaller, etc. |
| `search_mode`  | 1 = first-to-last, -1 = last-to-first, etc. |

```python
=XLOOKUP(A1, E1:E20, H1:H20, "Not found")
```

This replaces `=IFERROR(VLOOKUP(A1, E1:H20, 4, FALSE), "Not found")` with a cleaner syntax.

**Advantages over VLOOKUP:**

1. Can look up to the left (no need for INDEX/MATCH).
2. Return array can be in any direction relative to the lookup array.
3. Built-in "not found" handling without IFERROR.
4. Can search from last to first (for finding the most recent entry).
5. Can return an entire row or column, not just a single value.

---

## Advanced Pivot Tables

### Creating and Configuring Pivot Tables

Pivot tables transform raw data into meaningful summaries. In the DSE ICT practical exam, students
may Be required to create and configure pivot tables.

**Steps to create a pivot table:**

1. Select the data range (including headers).
2. Insert > Pivot Table.
3. Choose where to place the pivot table (new worksheet or existing).
4. Drag fields from the field list into the four pivot table areas.

### Pivot Table Components -- Detailed

| Area        | Purpose                                                          | Example Configuration                           |
| ----------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| **Rows**    | Defines the row groupings (categories on the vertical axis)      | Product, Region, Salesperson                    |
| **Columns** | Defines the column groupings (categories on the horizontal axis) | Month, Quarter, Year                            |
| **Values**  | The data being aggregated (SUM, COUNT, AVERAGE, etc.)            | SUM of Sales, AVERAGE of Price, COUNT of Orders |
| **Filters** | Applies a filter to the entire pivot table                       | Year = 2025, Region = "Hong Kong"               |

### Value Field Settings

When a field is placed in the Values area, you can change how it is summarised:

| Summarisation Method | Use When                                 |
| -------------------- | ---------------------------------------- |
| **SUM**              | Adding up numerical values (e.g., sales) |
| **COUNT**            | Counting the number of records           |
| **AVERAGE**          | Calculating the mean of values           |
| **MAX/MIN**          | Finding the largest/smallest value       |
| **PRODUCT**          | Multiplying values together              |
| **% of Grand Total** | Showing each value as a percentage       |

To change the summarisation method: right-click a value cell > Summarise Values By > select method.

### Grouping Data in Pivot Tables

Pivot tables can group data automatically:

| Data Type   | Grouping Options                                | Example                    |
| ----------- | ----------------------------------------------- | -------------------------- |
| **Dates**   | By year, quarter, month, week, day              | Group order dates by month |
| **Numbers** | By custom ranges (e.g., 0--100, 101--200, 201+) | Group prices by ranges     |
| **Text**    | By selected items (manual selection)            | Group regions              |

<details>
<summary>Worked Example: Pivot Table for Sales Analysis</summary>

Raw data: 1000 sales records with columns: Date, Region (HK Island, Kowloon, NT), Product (A, B, C,
D), Salesperson, Quantity, UnitPrice, Revenue.

**Task 1:** Total revenue by region.

- Rows: Region
- Values: SUM of Revenue

**Task 2:** Total revenue by product and month.

- Rows: Product
- Columns: Month (group the Date field by month)
- Values: SUM of Revenue

**Task 3:** Average quantity sold by salesperson, showing only the top 3.

- Rows: Salesperson
- Values: AVERAGE of Quantity
- Sort: AVERAGE of Quantity, descending
- Filter: Top 3

**Task 4:** Revenue by region and product as a percentage of the grand total.

- Rows: Region
- Columns: Product
- Values: SUM of Revenue > Show Values As > % of Grand Total

</details>

### Slicers and Timelines

| Feature      | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| **Slicer**   | A visual filter button that filters the pivot table interactively |
| **Timeline** | A visual date filter that allows filtering by time period         |

Slicers provide a user-friendly way to filter pivot tables without using dropdown filters. Multiple
Slicers can be connected to the same pivot table or to multiple pivot tables.

### Pivot Charts

A pivot chart is a chart linked to a pivot table. When the pivot table is filtered or rearranged,
the Pivot chart updates automatically.

| Chart Type   | Best For                           |
| ------------ | ---------------------------------- |
| Column chart | Comparing categories               |
| Line chart   | Showing trends over time           |
| Pie chart    | Showing proportions (single field) |
| Bar chart    | Comparing categories (horizontal)  |

---

## Advanced Conditional Formatting

### Formula-Based Conditional Formatting

In addition to built-in rules, conditional formatting can use custom formulas for complex criteria.

<details>
<summary>Worked Example: Formula-Based Conditional Formatting</summary>

**Scenario 1:** Highlight the entire row when the value in column D is above 100.

1. Select the data range (e.g., `A2:F100`).
2. Conditional Formatting > New Rule > Use a formula.
3. Enter: `=$D2>100`
4. Choose formatting (e.g., yellow fill).

The `$D` locks the column reference so that the condition always checks column D, even when the
Formatting is applied to columns A through F. The row number `2` is relative, so each row is checked
Independently.

**Scenario 2:** Highlight alternate rows (zebra striping).

1. Select the data range (e.g., `A2:F100`).
2. Enter: `=MOD(ROW(),2)=0`
3. Choose light grey fill.

This applies formatting to every even-numbered row.

**Scenario 3:** Highlight duplicate values in column A.

1. Select `A2:A100`.
2. Enter: `=COUNTIF($A$2:$A$100, A2)>1`
3. Choose red fill.

</details>

### Data Bars and Icon Sets in Practice

| Rule Type        | Configuration Example                                                        | Visual Output                     |
| ---------------- | ---------------------------------------------------------------------------- | --------------------------------- |
| **Data bar**     | Apply to Sales column, minimum = 0, maximum = highest value                  | In-cell bar proportional to value |
| **Colour scale** | Apply to Score column: Red (low) -- Yellow (mid) -- Green (high)             | Gradient background colour        |
| **Icon set**     | Apply to Change column: Green up arrow (positive), Red down arrow (negative) | Arrow icons next to values        |

### Managing Multiple Conditional Formatting Rules

When multiple rules apply to the same range, the order of rules matters. Rules are evaluated from
top To bottom. If two rules conflict, the rule higher in the list takes precedence (unless
configured Otherwise).

- **Stop If True:** When checked, lower-priority rules are not evaluated if this rule matches.
- **Use formula to determine which cells to format:** Enables custom logic beyond the built-in
  options.

---

## Advanced Data Validation

### Custom Data Validation with Formulas

Data validation can use formulas for complex validation criteria.

<details>
<summary>Worked Example: Custom Validation Rules</summary>

**Rule 1:** Ensure the end date is after the start date.

- Select the end date cells (e.g., `B2:B100`).
- Data Validation > Custom.
- Formula: `=B2>A2`

**Rule 2:** Allow only unique values (no duplicates).

- Select the range (e.g., `A2:A100`).
- Formula: `=COUNTIF($A$2:$A$100, A2)<=1`

**Rule 3:** Ensure a value is entered in column B only if column A is not empty.

- Select `B2:B100`.
- Formula: `=A2<>""`

**Rule 4:** Restrict input to weekdays only.

- Select the date cells.
- Formula: `=WEEKDAY(A2,2)<=5`

</details>

### Input Messages and Error Alerts

| Setting           | Description                                                         |
| ----------------- | ------------------------------------------------------------------- |
| **Input Message** | A tooltip shown when the cell is selected, explaining what to enter |
| **Error Alert**   | A dialog shown when invalid data is entered                         |
| **Error Style**   | Stop (prevents entry), Warning (allows override), Information       |

---

## Spreadsheet Macros in Depth

### VBA Programming Concepts

Macros recorded in Microsoft Office are stored as VBA (Visual Basic for Applications) code.
Understanding VBA allows students to modify recorded macros and write custom automation.

**Key VBA syntax elements:**

| Element            | Example                             | Description                           |
| ------------------ | ----------------------------------- | ------------------------------------- |
| `Sub`              | `Sub FormatData()`                  | Defines a subroutine                  |
| `Dim`              | `Dim i As Integer`                  | Declares a variable with data type    |
| `For...Next`       | `For i = 1 To 10 ... Next i`        | Count-controlled loop                 |
| `Do While...Loop`  | `Do While condition ... Loop`       | Condition-controlled loop             |
| `If...Then...Else` | `If x > 0 Then ... Else ... End If` | Conditional statement                 |
| `Cells(row, col)`  | `Cells(1, 1).Value = "Hello"`       | References a cell by row and column   |
| `Range()`          | `Range("A1:B10")`                   | References a range of cells           |
| `With...End With`  | `With Selection.Font ... End With`  | Applies multiple properties to object |

<details>
<summary>Worked Example: VBA Macro to Generate a Summary Report</summary>

```vba
Sub GenerateSummary()
    Dim lastRow As Integer
    Dim i As Integer
    Dim totalSales As Double
    Dim count As Integer
    Dim averageSales As Double

    lastRow = Cells(Rows.Count, 1).End(xlUp).Row
    totalSales = 0
    count = 0

    For i = 2 To lastRow
        If Cells(i, 3).Value <> "" Then
            totalSales = totalSales + Cells(i, 3).Value
            count = count + 1
        End If
    Next i

    If count > 0 Then
        averageSales = totalSales / count
    Else
        averageSales = 0
    End If

    Cells(lastRow + 2, 1).Value = "Total Sales:"
    Cells(lastRow + 2, 2).Value = totalSales
    Cells(lastRow + 3, 1).Value = "Number of Entries:"
    Cells(lastRow + 3, 2).Value = count
    Cells(lastRow + 4, 1).Value = "Average Sales:"
    Cells(lastRow + 4, 2).Value = averageSales

    With Range(Cells(lastRow + 2, 1), Cells(lastRow + 4, 1))
        .Font.Bold = True
    End With
End Sub
```

This macro finds the last row of data, calculates total and average sales, and writes a summary
Below the data with bold labels.

</details>

### Macro Security and Best Practices

| Practice                     | Reason                                                        |
| ---------------------------- | ------------------------------------------------------------- |
| Disable macros from internet | Prevents automatic execution of malicious code                |
| Digitally sign macros        | Confirms the macro author and detects tampering               |
| Test on backup data          | Prevents data loss from macro errors                          |
| Use descriptive names        | Makes macros easier to find and maintain                      |
| Add comments in code         | Documents the purpose and logic of each section               |
| Use error handling           | Prevents crashes from unexpected conditions (`On Error GoTo`) |

---

## Database Operations in Depth

### Table Relationships

Relational databases use relationships to link tables together. Understanding relationships is
Essential for designing and querying databases.

| Relationship Type | Description                                                     | Example                             |
| ----------------- | --------------------------------------------------------------- | ----------------------------------- |
| **One-to-One**    | Each record in Table A relates to exactly one record in Table B | Employee -- Emergency Contact       |
| **One-to-Many**   | One record in Table A relates to many records in Table B        | Customer -- Orders                  |
| **Many-to-Many**  | Many records in Table A relate to many in Table B               | Students -- Courses (via Enrolment) |

**Referential integrity:** A constraint that ensures relationships between tables remain consistent.
If a foreign key value exists, the corresponding primary key must exist in the referenced table.

| Action                      | With Referential Integrity    | Without Referential Integrity     |
| --------------------------- | ----------------------------- | --------------------------------- |
| Delete a parent record      | Prevented (or cascade delete) | Allowed (orphaned child records)  |
| Update a parent key         | Prevented (or cascade update) | Allowed (broken references)       |
| Add a child with invalid FK | Prevented                     | Allowed (data integrity violated) |

### Query Design -- Advanced

#### Select Queries with Multiple Criteria

| Criteria Row | Field: Region | Field: Sales | Field: Date   |
| ------------ | ------------- | ------------ | ------------- |
| Sort         | Ascending     | Descending   |               |
| Show         | Checked       | Checked      | Checked       |
| Criteria     | "HK Island"   | > 1000       | >= #1/1/2025# |
| Or           | "Kowloon"     |              |               |

This query shows records where: (Region is "HK Island" AND Sales > 1000 AND Date is on or after
1/1/2025) OR (Region is "Kowloon"). The "Or" row applies alternative criteria.

#### Parameter Queries

A parameter query prompts the user for input when the query runs, making it reusable for different
Values.

In the Criteria row of a field, enter the prompt in square brackets:

```
[Enter the region name:]
```

When the query runs, a dialog box appears with the message "Enter the region name:". The user's
input Is substituted into the criteria.

#### Calculation Fields in Queries

Queries can include calculated fields that do not exist in the underlying table.

| Expression                                    | Description                              |
| --------------------------------------------- | ---------------------------------------- |
| `Total: [Quantity]*[Price]`                   | Creates a calculated field named "Total" |
| `Discount: IIF([Total]>1000, [Total]*0.1, 0)` | 10% discount for orders over 1000        |
| `Age: DateDiff("yyyy",[DOB],Date())`          | Calculates age from date of birth        |
| `FullName: [FirstName] & " " & [LastName]`    | Concatenates first and last name         |

#### Action Queries

| Query Type     | Purpose                               | Caution                                      |
| -------------- | ------------------------------------- | -------------------------------------------- |
| **Append**     | Add records from one table to another | Cannot be undone; check criteria carefully   |
| **Update**     | Modify existing records               | Without WHERE, ALL records are updated       |
| **Delete**     | Remove records matching criteria      | Without WHERE, ALL records are deleted       |
| **Make-Table** | Create a new table from query results | Overwrites existing table with the same name |

### Forms -- Advanced Features

| Feature                    | Description                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------ |
| **Tab controls**           | Organise form sections into tabs for compact layout                                  |
| **Option groups**          | Mutually exclusive option buttons bound to a field                                   |
| **Command buttons**        | Trigger macros or VBA code (e.g., Save, Delete, Print)                               |
| **Conditional formatting** | Highlight fields based on values (e.g., red for overdue dates)                       |
| **Sub-forms**              | Display related records from another table within the main form                      |
| **Combo boxes**            | Dropdown list that displays one value but stores another (e.g., show name, store ID) |
| **List boxes**             | Display multiple selectable items                                                    |
| **Validation rules**       | Enforce data entry rules at the form level                                           |
| **Default values**         | Pre-fill fields with common values                                                   |
| **Navigation buttons**     | Move between records, add new records, search                                        |

### Reports -- Advanced Features

| Feature                    | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| **Grouping and sorting**   | Organise data into sections (e.g., group by department, then by team) |
| **Subtotals**              | Calculate sums, averages, counts at each group level                  |
| **Running totals**         | Cumulative sums (e.g., running total of monthly sales)                |
| **Page breaks**            | Force a new page at specific points                                   |
| **Conditional formatting** | Highlight values in the printed report (e.g., red for negative)       |
| **Calculated fields**      | Add computed values not in the data source                            |
| **Headers and footers**    | Page numbers, dates, report title on every page                       |
| **Labels and text boxes**  | Static text, data-bound text fields                                   |
| **Charts**                 | Embedded charts for visual data presentation                          |
| **Sub-reports**            | Nested reports within a main report                                   |

---

## Presentation Software in Depth

### Master Slides

A master slide (slide master) defines the default appearance and layout of all slides in a
presentation. Changes to the slide master are applied to every slide that uses it.

| Element Controlled by Slide Master | Description                                             |
| ---------------------------------- | ------------------------------------------------------- |
| **Background**                     | Colour, gradient, image, or pattern for all slides      |
| **Font styles**                    | Default font, size, colour for headings and body text   |
| **Colour scheme**                  | Set of coordinated colours used throughout              |
| **Slide layout placeholders**      | Position and size of title, content, image placeholders |
| **Footer**                         | Date, slide number, custom text on every slide          |
| **Logo**                           | Consistent company/school logo placement                |
| **Bullet styles**                  | Bullet character, indentation, spacing                  |

**Using slide layouts:** Each slide can use a different layout (title slide, title and content,
blank, Two content, picture with caption). Layouts are defined in the slide master.

### Animations and Transitions

#### Slide Transitions

Transitions are effects applied between slides during a presentation.

| Transition Type | Examples                 | Effect                                     |
| --------------- | ------------------------ | ------------------------------------------ |
| **Fade**        | Fade, Fade through black | Dissolve from one slide to the next        |
| **Push**        | Push, Cover, Split       | New slide pushes or covers the old         |
| **Wipe**        | Wipe, Wedge              | Content appears to wipe across             |
| **Morph**       | Morph (PowerPoint 2019+) | Smoothly transforms objects between slides |

**Transition settings:**

| Setting      | Description                                      |
| ------------ | ------------------------------------------------ |
| **Duration** | How long the transition effect lasts (seconds)   |
| **Sound**    | Optional sound effect during transition          |
| **Advance**  | On mouse click, or automatically after N seconds |

#### Object Animations

Animations are effects applied to individual objects (text, images, shapes) within a slide.

| Animation Category | Examples                                | Purpose                              |
| ------------------ | --------------------------------------- | ------------------------------------ |
| **Entrance**       | Appear, Fade In, Fly In, Zoom           | Object appears on the slide          |
| **Emphasis**       | Pulse, Spin, Grow/Shrink, Colour Change | Draw attention to an existing object |
| **Exit**           | Fade Out, Fly Out, Shrink, Dissolve     | Object disappears from the slide     |
| **Motion Path**    | Custom path, Line, Arc, Circle          | Object moves along a defined path    |

**Animation settings:**

| Setting      | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| **Start**    | On Click (manual), With Previous (simultaneous), After Previous |
| **Duration** | How long the animation lasts                                    |
| **Delay**    | Delay before the animation starts                               |
| **Order**    | The sequence in which animations play                           |

### Speaker Notes

Speaker notes are text visible only to the presenter during the slide show. They are not projected
to The audience.

| Use                    | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| **Talking points**     | Key points to mention for each slide                     |
| **Script**             | Full text of what the presenter plans to say             |
| **Timing cues**        | Reminders about timing (e.g., "Spend 2 min on this")     |
| **Audience questions** | Anticipated questions and prepared answers               |
| **Backup information** | Additional details to mention if time permits            |
| **Technical notes**    | Instructions for advancing slides, triggering animations |

### Presentation Design for Exams

In the DSE ICT practical exam, students may be required to create a presentation. Key skills to
Demonstrate:

1. **Apply a consistent theme** using the slide master.
2. **Use appropriate slide layouts** (title slide, content slide, two-content slide).
3. **Insert and format text** with appropriate font sizes (title: 40+ pt, body: 24+ pt).
4. **Insert images, charts, and tables** with proper sizing and alignment.
5. **Add animations** that enhance understanding (not distract).
6. **Add slide transitions** that are subtle and consistent.
7. **Add speaker notes** to key slides.
8. **Check readability** -- ensure sufficient contrast and font size.

---

## Desktop Publishing (DTP) Principles

### DTP vs Word Processing

| Feature                | Word Processing        | Desktop Publishing                    |
| ---------------------- | ---------------------- | ------------------------------------- |
| **Primary purpose**    | Text-centric documents | Visual layout and design              |
| **Typography control** | Basic                  | Advanced (kerning, tracking, leading) |
| **Layout precision**   | Limited                | Pixel-perfect placement               |
| **Text wrapping**      | Basic                  | Advanced (custom shapes, contours)    |
| **Colour management**  | Basic (RGB)            | CMYK support, spot colours            |
| **Output**             | Office documents       | Print-ready publications              |
| **Master pages**       | Not available          | Consistent page templates             |
| **Imposition**         | Not available          | Arranging pages for printing          |

### DTP Terminology

| Term            | Definition                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| **Kerning**     | Adjusting the space between individual character pairs                          |
| **Tracking**    | Adjusting the overall spacing across a range of characters                      |
| **Leading**     | The vertical space between lines of text (pronounced "ledding")                 |
| **Serif**       | Fonts with small decorative strokes at the ends of characters (Times New Roman) |
| **Sans-serif**  | Fonts without decorative strokes (Arial, Helvetica)                             |
| **Grid**        | An invisible framework used to align elements on the page                       |
| **Bleed**       | The area beyond the trim edge where the image extends to prevent white edges    |
| **Trim**        | The final size of the printed page after cutting                                |
| **Gutter**      | The inner margin between two facing pages in a book/magazine                    |
| **White space** | Empty areas of the page that improve readability and design                     |

### Principles of Effective Publication Design

| Principle      | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| **Alignment**  | Align elements to a grid or to each other for visual cohesion     |
| **Proximity**  | Group related elements together; separate unrelated elements      |
| **Repetition** | Repeat visual elements (colours, fonts, styles) for consistency   |
| **Contrast**   | Use contrasting sizes, colours, or weights to create hierarchy    |
| **Balance**    | Distribute visual weight evenly across the page                   |
| **Hierarchy**  | Guide the reader's eye through the content in order of importance |

---

## Common Pitfalls

1. **VLOOKUP column index is relative to the table, not the worksheet:** If the table starts in
   column E and you want the value in column G, the index is 3, not 7. Always count from the
   leftmost column of the table range.

2. **VLOOKUP approximate match requires sorted data:** When using `TRUE` (or omitting the fourth
   parameter), the first column must be sorted in ascending order. Unsorted data produces incorrect
   results.

3. **INDEX/MATCH is zero-indexed for MATCH, but one-indexed for INDEX:** MATCH returns a relative
   position starting from 1, and INDEX uses this position starting from 1. There is no zero-index
   confusion -- both use 1-based indexing.

4. **Pivot tables do not auto-refresh:** When source data changes, the pivot table does not update
   automatically. Right-click the pivot table and select "Refresh" (or use `Alt + F5`).

5. **Conditional formatting with absolute vs relative references:** When using formula-based
   conditional formatting, the `$` signs determine which cells are checked. `=$D2>100` checks column
   D for every row. `=D2>100` (no dollar sign) checks only the column relative to each cell.

6. **Data validation can be bypassed by pasting:** If a user pastes data into a validated cell, the
   validation rule is not enforced. For critical validation, use database constraints.

7. **Macro security:** Never enable macros from untrusted sources. Macro viruses can spread through
   shared documents and execute malicious code automatically.

8. **Referential integrity and cascade deletes:** Enabling cascade delete means deleting a parent
   record automatically deletes all related child records. This can cause unexpected data loss if
   not understood.

9. **Slide transitions should be consistent:** Using different transitions on every slide looks
   unprofessional. Choose one subtle transition and apply it consistently.

10. **DTP colour modes:** Screen displays use RGB (additive colour). Printing uses CMYK (subtractive
    colour). Colours designed in RGB may look different when printed in CMYK. Always work in CMYK
    for print-ready publications.

---

## Practice Problems

<details>
<summary>Question 1: INDEX/MATCH vs VLOOKUP</summary>

A spreadsheet has the following data in `A1:E10`:

| Column | A (Product) | B (Category) | C (Price) | D (Stock) | E (Supplier) |
| ------ | ----------- | ------------ | --------- | --------- | ------------ |
| 1      | Header      | Header       | Header    | Header    | Header       |
| 2      | Laptop      | Electronics  | 8000      | 15        | TechCorp     |
| 3      | Mouse       | Electronics  | 150       | 200       | TechCorp     |
| 4      | Desk        | Furniture    | 2500      | 8         | OfficeMax    |
| 5      | Chair       | Furniture    | 1800      | 12        | OfficeMax    |

(a) Write a VLOOKUP formula to find the price of "Desk".

(b) Write an INDEX/MATCH formula to find the supplier of a product, given the product name in cell
G1. Explain why this approach is more flexible than VLOOKUP.

(c) Write a formula to find the product name given a price of 150 (a "left lookup" scenario).

Answer:

(a)

```python
=VLOOKUP("Desk", A2:E5, 3, FALSE)
```

The table is `A2:E5`. Column 3 (C) contains the price. Result: 2500.

(b)

```python
=INDEX(E2:E5, MATCH(G1, A2:A5, 0))
```

INDEX/MATCH is more flexible because: (1) the search column (A) and return column (E) can be in any
Position -- they do not need to be adjacent. (2) Inserting or deleting columns does not break the
formula because it references column ranges directly, not a column number. (3) It can perform
lookups to the left, which VLOOKUP cannot do.

(c)

```python
=INDEX(A2:A5, MATCH(150, C2:C5, 0))
```

VLOOKUP cannot do this because the search column (C, Price) is to the right of the return column (A,
Product). INDEX/MATCH handles it by searching C and returning from A.

</details>

<details>
<summary>Question 2: Pivot Table Configuration</summary>

A company has a spreadsheet with 500 sales records containing: Date, Salesperson, Region (North,
South, East, West), Product (A, B, C), Quantity, UnitPrice, Revenue.

Describe how to create each of the following pivot table views:

(a) Total revenue by region.

(b) Average revenue per salesperson, sorted from highest to lowest.

(c) A cross-tabulation showing revenue by region (rows) and product (columns), with subtotals.

(d) A pivot table filtered to show only Q1 2025 data.

Answer:

(a) Create a pivot table from the data. Drag **Region** to the Rows area. Drag **Revenue** to the
Values area. Ensure the summarisation is set to SUM (default for numerical values).

(b) Create a pivot table. Drag **Salesperson** to Rows. Drag **Revenue** to Values, set
summarisation To AVERAGE. Click the Row Labels drop-down > Sort > Sort Smallest to Largest (or click
on a value And sort descending).

(c) Create a pivot table. Drag **Region** to Rows. Drag **Product** to Columns. Drag **Revenue** to
Values (SUM). Subtotals are generated automatically for each row group (region totals) and each
column Group (product totals), plus a grand total.

(d) Create a pivot table. Drag **Date** to the Filters area. After creating the pivot table, click
the Date filter drop-down. Filter by date range: 1 January 2025 to 31 March 2025. Alternatively,
group The Date field by quarters and filter for Q1.

</details>

<details>
<summary>Question 3: Database Queries and Relationships</summary>

A school database has the following tables:

- **Student** (StudentID PK, Name, Class, FormTeacher)
- **Subject** (SubjectCode PK, SubjectName, Teacher)
- **Result** (StudentID FK, SubjectCode FK, Score)

(a) Describe the relationship between Student and Result. State the type and explain.

(b) Write the SQL query to find all students in class "5A" who scored above 80 in any subject.

(c) The school wants a report showing each student's average score across all subjects, sorted from
highest to lowest. Write the SQL query.

(d) Explain why referential integrity is important in this database.

Answer:

(a) The relationship between Student and Result is **one-to-many**. One student can have many
results (records in the Result table), but each result belongs to exactly one student. The StudentID
in the Result table is a foreign key referencing the Student table's primary key.

(b)

```sql
SELECT DISTINCT Student.Name
FROM Student
JOIN Result ON Student.StudentID = Result.StudentID
WHERE Student.Class = '5A' AND Result.Score > 80;
```

(c)

```sql
SELECT Student.Name, AVG(Result.Score) AS AverageScore
FROM Student
JOIN Result ON Student.StudentID = Result.StudentID
GROUP BY Student.Name
ORDER BY AverageScore DESC;
```

(d) Referential integrity ensures that every StudentID in the Result table matches a valid StudentID
In the Student table. Without it: (1) A result could be recorded for a non-existent student
(orphaned Record). (2) A student could be deleted while their results remain, creating inconsistent
data. (3) Reports and queries would produce incorrect results. Referential integrity prevents these
data Integrity problems.

</details>

<details>
<summary>Question 4: Conditional Formatting and Data Validation</summary>

A teacher maintains a student grade sheet in a spreadsheet:

- Column A: Student Name
- Column B: Class
- Column C: Mathematics score (0--100)
- Column D: English score (0--100)
- Column E: Average score (calculated)

(a) Describe how to apply conditional formatting to highlight any student with an average below 50
in red.

(b) Describe how to set up data validation to ensure that only valid class codes (5A, 5B, 5C, 6A,
6B, 6C) can be entered in column B.

(c) Describe how to use a custom formula in conditional formatting to highlight the entire row (all
columns A--E) when a student's average is in the top 10%.

(d) Explain why data validation alone is not sufficient to guarantee data integrity.

Answer:

(a) Select the range `E2:E50` (assuming data starts at row 2). Go to Conditional Formatting >
Highlight Cells Rules > Less Than. Enter `50` and select red formatting. Alternatively, use "Greater
Than" with The inverse condition, or use a custom formula: `=E2<50`.

(b) Select `B2:B50`. Go to Data > Data Validation. Set "Allow" to "List". In the "Source" field,
Enter: `5A,5B,5C,6A,6B,6C` (or reference a range of cells containing these values). Check "Show
Error alert" and set an appropriate error message.

(c) Select the entire data range `A2:E50`. Go to Conditional Formatting > New Rule > Use a formula.
Enter: `=E2>=PERCENTILE.INC($E$2:$E$50,0.9)`. This formula checks whether each row's average Value
is at or above the 90th percentile (top 10%). The `$E$2:$E$50` reference is absolute to ensure the
Percentile is calculated from the entire column.

(d) Data validation can be bypassed by: (1) Pasting data from another source (paste special or
Drag-and-drop bypasses validation). (2) Using macros or programmatic data entry. (3) Editing the
data Validation rules themselves. For critical data integrity, combine spreadsheet validation with
database Constraints (which cannot be bypassed through the user interface).

</details>

<details>
<summary>Question 5: Presentation and DTP Scenario</summary>

A school club needs to create a promotional brochure and an accompanying presentation for their
annual Open day.

(a) State two advantages of using DTP software (e.g., Adobe InDesign) instead of a word processor
for the brochure.

(b) Describe how the slide master should be used in the presentation to ensure consistency.

(c) The presentation has 15 slides. Describe an appropriate use of animations and transitions that
enhances the presentation without distracting the audience.

(d) Explain the difference between serif and sans-serif fonts, and recommend which is more
appropriate for (i) the printed brochure and (ii) the on-screen presentation.

Answer:

(a) Two advantages of DTP software: (1) **Precise layout control:** DTP software allows
pixel-perfect Placement of text and images, supporting advanced text wrapping around custom shapes,
which is Essential for professional brochure design. Word processors have limited layout control.
(2) **CMYK Colour support:** DTP software works in CMYK colour mode, which is required for
professional printing. Word processors work primarily in RGB, which can produce colour mismatches
when printed.

(b) The slide master should define: (1) A consistent background design or colour scheme applied to
all Slides. (2) Default font styles, sizes, and colours for titles and body text, ensuring all
slides have A uniform appearance. (3) The position of recurring elements such as the school logo,
slide number, And footer text. (4) Predefined slide layouts (title slide, content slide, image
slide) that maintain Consistent spacing and alignment.

(c) **Transitions:** Use a single, subtle transition (e.g., Fade) applied consistently to all
slides. This provides a smooth visual flow without distraction. **Animations:** Use entrance
animations Sparingly -- for example, fade in bullet points one at a time to control the pace of
information Delivery. Avoid emphasis or exit animations on most slides, and never use more than one
animation type Per slide. Reserve motion paths or more complex animations for one or two key slides
(e.g., a Process diagram).

(d) **Serif fonts** (e.g., Times New Roman, Georgia) have small decorative strokes at the ends of
Characters. They are generally considered more readable in printed text at smaller sizes because the
Serifs guide the eye along lines of text. **Sans-serif fonts** (e.g., Arial, Helvetica, Calibri)
lack These strokes and appear cleaner on screens. (i) **Printed brochure:** Serif fonts are more
Appropriate for body text. (ii) **On-screen presentation:** Sans-serif fonts are more appropriate
Because they render more on projectors and screens, especially at larger sizes and from a Distance.

</details>

## Summary

depth, including key principles and practical applications.

> > > > > > > Stashed changes:docs/docs_dse/ICT/office-applications-depth.md

**Key concepts include:**


- core concepts and definitions
- key principles and frameworks
- practical applications
- common techniques and methods
- evaluation and critical analysis

A thorough understanding of these concepts, combined with regular practice and review, is essential
for mastery of this topic.

> > > > > > > Stashed changes:docs/docs_dse/ICT/office-applications-depth.md
