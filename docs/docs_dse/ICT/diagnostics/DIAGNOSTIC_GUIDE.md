---
title: "DSE ICT -- Diagnostic Guide"
description: "Comprehensive guide to DSE ICT diagnostic tests with coverage map, grading rubric, prerequisite chains, and timing recommendations."
slug: diag-guide-dse-ict
hide_table_of_contents: true
---

# DSE ICT — Diagnostic Guide

## Coverage Map

### Core Systems

| Diagnostic File | Topics Covered | Source File |
|---|---|---|
| `diag-computer-systems.md` | CPU architecture, memory hierarchy, I/O devices, Von Neumann model, fetch-decode-execute cycle | `computer-systems.md` |
| `diag-data-representation.md` | Binary/hex conversion, two's complement, character encoding, image/audio representation, compression | `data-representation.md` |
| `diag-internet-data-communications.md` | OSI model, TCP/IP, network topologies, protocols, bandwidth, error detection | `internet-and-data-communications.md` |

### Applications and Security

| Diagnostic File | Topics Covered | Source File |
|---|---|---|
| `diag-programming-databases.md` | Algorithm design, pseudocode, SQL queries, database normalisation, testing methods | `programming-and-databases.md` |
| `diag-network-security-social-implications.md` | Malware, encryption, data protection, legal/ethical issues, privacy, cyber law | `network-security-and-social-implications.md` |
| `diag-office-automation.md` | Spreadsheet formulas, data analysis, document formatting, mail merge, collaborative tools | `office-automation-and-productivity.md` |
| `diag-web-multimedia.md` | HTML/CSS, web design principles, multimedia formats, web security, responsive design | `web-development-and-multimedia.md` |

## Grading Rubric

### PASS Criteria
- Correctly solve at least 2 out of 3 Unit Tests with full working
- Correctly solve at least 2 out of 3 Integration Tests demonstrating cross-topic understanding
- Correct use of technical terminology (OSI layers, normalisation forms, encryption types)
- Accurate calculations for binary conversion, file sizes, and network performance

### PARTIAL Criteria
- Correctly solve 1--2 Unit Tests and 1 Integration Test
- Shows understanding of concepts but makes errors in calculations or pseudocode
- Partially correct SQL queries or pseudocode with minor syntax errors
- Can describe concepts qualitatively but struggles with technical application

### FAIL Indicators
- Cannot convert between binary, decimal, and hexadecimal correctly
- Cannot identify OSI layers for common protocols
- Cannot write basic SQL queries (SELECT, JOIN, WHERE)
- Confuses symmetric and asymmetric encryption
- Cannot distinguish between different normalisation forms

## Prerequisite Chains

```
Computer Systems (hardware, CPU, memory)
  ├── Data Representation (number systems, encoding)
  │     └── Internet and Data Communications (protocols, transmission)
  └── Programming and Databases (algorithms, SQL)

Data Representation (binary, encoding)
  ├── Internet and Data Communications (error detection, bandwidth)
  └── Web Development and Multimedia (file formats, compression)

Internet and Data Communications (networking)
  └── Network Security and Social Implications (security, encryption)

Programming and Databases (logic, data management)
  └── Office Automation (spreadsheet formulas, data analysis)
```

**Recommended order of diagnostic completion:**
1. `diag-computer-systems` -- hardware foundations
2. `diag-data-representation` -- essential number system skills
3. `diag-internet-data-communications` -- networking fundamentals
4. `diag-programming-databases` -- algorithmic thinking and SQL
5. `diag-network-security-social-implications` -- builds on networking knowledge
6. `diag-office-automation` -- practical application of data skills
7. `diag-web-multimedia` -- integrates data representation, networking, and security

## Timing Recommendations

| Diagnostic | Recommended Time | Notes |
|---|---|---|
| `diag-computer-systems` | 30 minutes | Mix of conceptual and calculation questions |
| `diag-data-representation` | 35 minutes | Binary conversions and file size calculations |
| `diag-internet-data-communications` | 35 minutes | OSI model recall and network calculations |
| `diag-programming-databases` | 40 minutes | Pseudocode writing and SQL queries |
| `diag-network-security-social-implications` | 30 minutes | Conceptual questions with some calculation |
| `diag-office-automation` | 25 minutes | Spreadsheet formulas and practical scenarios |
| `diag-web-multimedia` | 35 minutes | HTML/CSS, file format analysis, security |

**Total recommended time:** approximately 3.5 hours (spread across 2--3 sessions).

## How to Use These Diagnostics

1. Complete each diagnostic without notes or reference materials.
2. For programming questions, write out pseudocode or SQL on paper first before checking solutions.
3. For calculations (binary conversion, file sizes, bandwidth), show all working.
4. Check solutions immediately, focusing on both the approach and the final answer.
5. If you score FAIL, review the corresponding source file before retrying.
6. Integration Tests frequently combine concepts from multiple topics -- these are especially valuable for DSE exam preparation.
7. Practice writing SQL queries and pseudocode by hand, as the DSE exam requires written responses.
