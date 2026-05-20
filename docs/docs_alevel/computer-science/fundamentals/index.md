---
sidebar_label: Fundamentals
sidebar_position: 1
description:
  'Rigorous A-Level computer science notes covering Fundamentals. Includes definitions, derivations,
  worked examples, and exam-style problems.'
sidebar_custom_props:
  some_prop: true
---

# Fundamentals

The fundamentals section covers the foundational concepts that underpin all of computer science: how
data is represented in binary, how processors execute instructions, how operating systems manage
resources, and the ethical framework within which computing operates.

## Topics Covered

### Number Systems

- **Binary, decimal, hexadecimal** — conversion between all bases
- **Binary arithmetic** — addition, subtraction, shifts
- **Two's complement** — representing negative integers; range $-2^{n-1}$ to $2^{n-1}-1$ for $n$
  bits
- **Binary-coded decimal (BCD)** — when and why it is used

### Floating-Point Representation

- **IEEE 754** — sign, exponent, mantissa; normalisation
- **Precision and rounding errors** — why $0.1 + 0.2 \neq 0.3$ in binary
- **Absolute and relative error** — quantifying approximation quality

### Boolean Algebra and Logic Gates

- **Boolean operations** — AND, OR, NOT, XOR, NAND, NOR
- **Truth tables** — evaluating Boolean expressions
- **Simplification** — De Morgan's laws, Boolean algebra identities
- **Logic gate circuits** — designing circuits from Boolean expressions and vice versa
- **Flip-flops and adders** — combining gates into functional units

### Computer Architecture

- **Von Neumann architecture** — CPU, memory, I/O, buses (address, data, control)
- **Fetch-decode-execute cycle** — how instructions are processed step by step
- **Registers** — PC, MAR, MDR, ACC, and their roles
- **Instruction set** — assembly language programming concepts

### Operating Systems

- **Process management** — scheduling algorithms (FCFS, SJF, Round Robin)
- **Memory management** — paging, segmentation, virtual memory
- **File systems** — directory structures, access methods

### Legal, Ethical, and Moral Issues

- **Data protection** — GDPR principles, data subject rights
- **Computer Misuse Act** — unauthorised access, malware
- **Copyright and intellectual property** — software licensing
- **Privacy, surveillance, and AI ethics** — contemporary issues

## Study Tips

1. **Practise base conversions** until they are automatic — binary $\leftrightarrow$ decimal
   $\leftrightarrow$ hexadecimal conversions appear on every paper.
2. **Trace the fetch-decode-execute cycle** with specific instructions and register values — this is
   a common long-answer question.
3. **Build truth tables methodically** — always list all input combinations systematically to avoid
   missing rows.
4. **Apply De Morgan's laws** by rewriting expressions — exam questions test whether you can
   simplify, not just recognise.
5. **Link legal content to real examples** — e.g., link GDPR to a specific data breach case.

## How to Use These Notes

Work through in sidebar order. Each topic builds on the previous: number systems lead to
floating-point, Boolean algebra leads to logic gates, and architecture ties everything together.
Master the fundamentals before moving to data structures and algorithms.
