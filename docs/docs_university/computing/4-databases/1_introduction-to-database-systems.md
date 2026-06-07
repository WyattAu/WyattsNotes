---
title: Introduction to Database Systems
tags:
  - Computing
  - University
---

### 1.1 What is a Database

A **database** is an organised collection of structured data, managed by a **database management
System (DBMS)**. A DBMS provides:

- Data definition (schema creation and modification).
- Data manipulation (query, insert, update, delete).
- Concurrency control (multiple users accessing data simultaneously).
- Recovery (restoring data after failures).
- Security and access control.

### 1.2 Database Architecture

**Three-schema architecture (ANSI-SPARC):**

The ANSI-SPARC (American National Standards Institute, Standards Planning and Requirements
Committee) Architecture defines three levels of abstraction:

1. **External schema (view level):** How different users/applications see the data. Each user group
   may have a different view. A view may hide or rename columns, join tables, or aggregate data.
2. **Conceptual schema (logical level):** The logical structure of the entire database (tables,
   relationships, constraints). Describes entities, attributes, relationships, integrity
   constraints, and security information. This level is database-wide and is designed by the DBA.
3. **Internal schema (physical level):** How data is stored on disk (indexes, file organisation,
   compression, encryption). Includes data structures, access paths, and storage allocation.

The DBMS maps between levels via the **external/conceptual mapping** (translates external views to
The conceptual schema) and the **conceptual/internal mapping** (translates the conceptual schema to
Internal storage).

**Data independence:**

- **Logical data independence:** The conceptual schema can change without affecting external views.
  Example: adding a new column to a table does not require modifying existing views that do not
  reference it.
- **Physical data independence:** The internal schema can change without affecting the conceptual
  schema. Example: changing from a B+ tree index to a hash index does not require modifying queries
  or table definitions.

### 1.3 Data Models

- **Relational model:** Data organised into tables (relations) with rows (tuples) and columns
  (attributes). Based on relational algebra and calculus.
- **Entity-Relationship (ER) model:** Conceptual design tool using entities, relationships, and
  attributes.
- **Object-relational model:** Extends the relational model with object-oriented features
  (inheritance, complex types, methods). Example: PostgreSQL supports table inheritance and array
  types.
- **NoSQL models:** Document, key-value, graph, column-family (covered in Section 8).

### 1.4 Comparison of Data Models

| Feature        | Relational                       | Object-Relational          | Document                 | Key-Value         | Graph                            | Column-Family                |
| -------------- | -------------------------------- | -------------------------- | ------------------------ | ----------------- | -------------------------------- | ---------------------------- |
| Data structure | Tables                           | Tables + objects           | JSON/BSON                | Key-value pairs   | Nodes + edges                    | Column families              |
| Schema         | Fixed                            | Fixed + extensible         | Flexible                 | Schemaless        | Flexible                         | Flexible per row             |
| Query language | SQL                              | SQL + extensions           | Varies                   | Get/Set/Scan      | Cypher/Gremlin                   | CQL/SQL-like                 |
| ACID support   | Full                             | Full                       | Limited                  | Limited           | Per-node                         | Tunable                      |
| Scaling        | Vertical                         | Vertical                   | Horizontal               | Horizontal        | Horizontal                       | Horizontal                   |
| Best for       | Structured data, complex queries | Complex types, inheritance | Content management, APIs | Caching, sessions | Social networks, recommendations | Time series, logs, analytics |

**Choosing a model.** Relational databases remain the default for structured data with complex
Queries and strong consistency requirements. NoSQL databases excel when horizontal scalability or
Flexible schemas are paramount. The choice depends on the workload, not on a blanket preference.

