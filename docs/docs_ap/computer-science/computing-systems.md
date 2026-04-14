---
title: Computing Systems
date: 2026-04-14
tags:
  - Computer Science
  - AP
categories:
  - Computer Science
slug: computing-systems
---

## The Internet and Computing Systems (CED Unit 4)

### Hardware Components

| Component        | Function                                       |
| ---------------- | ---------------------------------------------- |
| CPU              | Executes instructions, performs calculations   |
| RAM              | Volatile memory for currently running programs |
| Hard drive / SSD | Non-volatile storage for persistent data       |
| GPU              | Processes graphics and parallel computations   |
| Motherboard      | Connects all components                        |
| Power supply     | Provides electrical power                      |
| Input devices    | Keyboard, mouse, microphone, camera            |
| Output devices   | Monitor, speakers, printer                     |

### The Fetch-Decode-Execute Cycle

The CPU continuously:

1. **Fetch:** Read the next instruction from memory (address in the program counter).
2. **Decode:** Interpret the instruction.
3. **Execute:** Perform the operation.
4. **Store:** Write the result back to memory or a register.

### Binary and Data Representation

Computers represent all data in binary (0s and 1s).

| Data Type | Representation                       |
| --------- | ------------------------------------ |
| Integer   | Two's complement (signed integers)   |
| Character | ASCII (7-bit) or Unicode (16+ bit)   |
| Color     | RGB values (24 bits, 8 per channel)  |
| Image     | Grid of pixels, each with RGB values |
| Audio     | Sampled amplitude values             |

#### Two's Complement

For an $n$-bit number:

- Range: $-2^{n-1}$ to $2^{n-1} - 1$
- 8-bit: $-128$ to $127$
- 16-bit: $-32768$ to $32767$
- 32-bit: $-2147483648$ to $2147483647$

**Negation:** Flip all bits and add 1.

:::info[Example]

Represent $-42$ in 8-bit two's complement.

$42$ in binary: $00101010$.

Flip bits: $11010101$.

Add 1: $11010110$.

Check: $-128 + 64 + 8 + 4 + 2 = -50$. That is incorrect. Let me recalculate.

$11010110$: $-128 + 64 + 0 + 16 + 0 + 4 + 2 + 0 = -128 + 86 = -42$. Correct.

:::

#### Hexadecimal

Base-16 representation, using digits 0--9 and A--F.

| Binary | Hex | Decimal |
| ------ | --- | ------- |
| 0000   | 0   | 0       |
| 0001   | 1   | 1       |
| 0010   | 2   | 2       |
| 0011   | 3   | 3       |
| 0100   | 4   | 4       |
| 0101   | 5   | 5       |
| 0110   | 6   | 6       |
| 0111   | 7   | 7       |
| 1000   | 8   | 8       |
| 1001   | 9   | 9       |
| 1010   | A   | 10      |
| 1011   | B   | 11      |
| 1100   | C   | 12      |
| 1101   | D   | 13      |
| 1110   | E   | 14      |
| 1111   | F   | 15      |

Conversion: group binary digits in groups of 4 from right to left.

$10110110_2 = \text{B6}_{16}$

## Logic Gates and Boolean Logic (CED Unit 4)

### Basic Gates

| Gate | Symbol   | Boolean Expression     | Truth Table                 |
| ---- | -------- | ---------------------- | --------------------------- |
| AND  | A AND B  | A $\cdot$ B            | 1 only if both inputs are 1 |
| OR   | A OR B   | A + B                  | 0 only if both inputs are 0 |
| NOT  | NOT A    | $\bar{A}$              | Inverts input               |
| NAND | A NAND B | $\overline{A \cdot B}$ | NOT AND                     |
| NOR  | A NOR B  | $\overline{A + B}$     | NOT OR                      |
| XOR  | A XOR B  | $A \oplus B$           | 1 if inputs differ          |

### Truth Tables

**AND gate:**

| A   | B   | A AND B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

**XOR gate:**

| A   | B   | A XOR B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

### De Morgan's Laws

$$
\overline{A \cdot B} = \bar{A} + \bar{B}
$$

$$
\overline{A + B} = \bar{A} \cdot \bar{B}
$$

### Constructing Circuits

Any Boolean function can be implemented using only NAND gates or only NOR gates (functional
completeness).

:::info[Example]

Implement XOR using AND, OR, and NOT gates.

$A \oplus B = (A \cdot \bar{B}) + (\bar{A} \cdot B)$

This requires: 2 NOT gates, 2 AND gates, 1 OR gate.

:::

### Half Adder and Full Adder

**Half adder:** Adds two single bits. Produces sum and carry.

$$
\text{Sum} = A \oplus B
$$

$$
\text{Carry} = A \cdot B
$$

**Full adder:** Adds two bits and a carry-in. Produces sum and carry-out.

$$
\text{Sum} = A \oplus B \oplus C_{\text{in}}
$$

$$
C_{\text{out}} = (A \cdot B) + (C_{\text{in}} \cdot (A \oplus B))
$$

## Operating Systems (CED Unit 4)

An operating system (OS) manages hardware and provides services for applications.

### Functions of an OS

1. **Process management:** Schedules and manages running programs (processes).
2. **Memory management:** Allocates memory to processes, virtual memory, paging.
3. **File system management:** Organizes, stores, and retrieves files.
4. **Device management:** Controls hardware devices through drivers.
5. **User interface:** Provides a way for users to interact with the computer (GUI or CLI).
6. **Security:** Authentication, authorization, access control.

### Types of Operating Systems

| Type      | Examples              | Characteristics               |
| --------- | --------------------- | ----------------------------- |
| Desktop   | Windows, macOS, Linux | Personal use, multitasking    |
| Mobile    | iOS, Android          | Touch-optimized, app-based    |
| Server    | Windows Server, Linux | Network services, high uptime |
| Embedded  | RTOS, firmware        | Limited resources, dedicated  |
| Real-time | VxWorks, FreeRTOS     | Guaranteed response times     |

## Software Development (CED Unit 5)

### The Development Life Cycle

1. **Requirements analysis:** Understand what the software should do.
2. **Design:** Plan the architecture and algorithms.
3. **Implementation:** Write the code.
4. **Testing:** Verify correctness and fix bugs.
5. **Deployment:** Release the software to users.
6. **Maintenance:** Update and fix issues over time.

### Software Testing

| Type                | Description                                      |
| ------------------- | ------------------------------------------------ |
| Unit testing        | Testing individual components                    |
| Integration testing | Testing interactions between components          |
| System testing      | Testing the entire system                        |
| Acceptance testing  | Testing against user requirements                |
| Black-box testing   | Testing based on inputs/outputs (no code access) |
| White-box testing   | Testing based on internal code structure         |

### Version Control

- Tracks changes to source code over time.
- Enables collaboration (multiple developers).
- Supports branching and merging.
- Common tools: Git, Subversion.

## Common Pitfalls

1. **Confusing bits and bytes.** 1 byte = 8 bits. Storage is measured in bytes; data rates in bits
   per second.
2. **Incorrect two's complement conversion.** Always flip all bits AND add 1. Do not just flip bits.
3. **Confusing AND and OR in Boolean expressions.** AND requires both true; OR requires at least one
   true.
4. **Forgetting De Morgan's Laws** when simplifying Boolean expressions.
5. **Confusing hexadecimal digits.** A = 10, B = 11, C = 12, D = 13, E = 14, F = 15 (not A = 1).
6. **Thinking the OS is the hardware.** The OS is software that manages hardware.
7. **Confusing process and thread.** A process is an instance of a program; a thread is a
   lightweight unit of execution within a process.

## Practice Questions

1. Convert the decimal number $-75$ to 8-bit two's complement.

2. Convert `11011101` from binary to hexadecimal.

3. Draw a truth table and logic circuit for the expression $\bar{A} \cdot B + A \cdot \bar{B}$. What
   Boolean operation does this represent?

4. Using De Morgan's Laws, simplify $\overline{A + \bar{B} \cdot C}$.

5. Explain the role of the operating system in managing memory. What is virtual memory?

6. Design a full adder circuit using only NAND gates.

7. Convert the hexadecimal number `3F7` to binary and decimal.

8. Explain the difference between black-box testing and white-box testing. Give an example of each.
