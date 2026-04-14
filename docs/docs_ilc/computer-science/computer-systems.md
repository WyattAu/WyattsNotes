---
title: Computer Systems
date: 2026-04-14
tags:
  - Computer Science
  - ILC
categories:
  - Computer Science
slug: computer-systems
---

# Computer Systems

This topic covers the architecture and organisation of computer systems, including the CPU, memory
hierarchy, input/output systems, and operating systems.

## The Von Neumann Architecture (OL/HL)

The Von Neumann model describes a stored-program computer with:

1. **Central Processing Unit (CPU):** processes data and instructions.
2. **Memory (RAM):** stores both data and instructions.
3. **Input devices:** allow data entry (keyboard, mouse).
4. **Output devices:** display results (monitor, printer).
5. **Bus system:** connects components (data bus, address bus, control bus).

### The CPU (OL/HL)

**Components:**

- **Arithmetic Logic Unit (ALU):** performs arithmetic (add, subtract) and logical (AND, OR, NOT)
  operations.
- **Control Unit (CU):** coordinates the activities of the CPU; decodes instructions and sends
  control signals.
- **Registers:** small, fast storage locations within the CPU.
  - **Program Counter (PC):** holds the address of the next instruction.
  - **Memory Address Register (MAR):** holds the address to be accessed in memory.
  - **Memory Data Register (MDR):** holds data being transferred to/from memory.
  - **Accumulator (ACC):** stores the results of ALU operations.
  - **Instruction Register (IR):** holds the current instruction being executed.

### The Fetch-Decode-Execute Cycle (OL/HL)

1. **Fetch:**
   - The address in the PC is copied to the MAR.
   - The instruction at that address is fetched from memory into the MDR.
   - The PC is incremented to point to the next instruction.
   - The instruction is copied from the MDR to the IR.

2. **Decode:**
   - The control unit decodes the instruction in the IR.

3. **Execute:**
   - The instruction is executed (e.g., perform calculation, store result).

### Buses (HL)

- **Address bus:** carries memory addresses (one way: CPU to memory).
- **Data bus:** carries data (two way: CPU to/from memory).
- **Control bus:** carries control signals (one way: CPU to other components).

## Performance (OL/HL)

### Factors Affecting CPU Performance

1. **Clock speed:** measured in GHz. Higher clock speed = more cycles per second = faster
   processing.
2. **Number of cores:** multi-core processors can execute multiple instructions simultaneously.
3. **Cache size:** small, fast memory on or near the CPU. L1 (smallest, fastest), L2, L3 (largest,
   slowest). Reduces the need to access main memory.
4. **Word size:** number of bits the CPU can process at once (e.g., 32-bit, 64-bit).

### Fetch-Decode-Execute and Clock Cycles (HL)

Each step in the cycle takes at least one clock cycle. The CPI (cycles per instruction) varies
depending on the instruction complexity.

**Example (HL):** A CPU with a clock speed of 3 GHz executes a program with 6 billion instructions.
If the average CPI is 4, how long does the program take?

$$
\text{Time} = \frac{\text{Instructions} \times \text{CPI}}{\text{Clock speed}} = \frac{6 \times 10^9 \times 4}{3 \times 10^9} = 8\text{ seconds}
$$

## Memory Hierarchy (OL/HL)

### Types of Memory

| Memory           | Volatile? | Speed     | Use                    |
| ---------------- | --------- | --------- | ---------------------- |
| Registers        | Yes       | Fastest   | CPU operations         |
| Cache (L1/L2/L3) | Yes       | Very fast | Frequently used data   |
| RAM              | Yes       | Fast      | Main memory            |
| Hard Drive (HDD) | No        | Slow      | Long-term storage      |
| SSD              | No        | Moderate  | Fast long-term storage |

**Volatile:** data is lost when power is off. **Non-volatile:** data persists when power is off.

### RAM vs ROM (OL/HL)

| Feature    | RAM            | ROM                           |
| ---------- | -------------- | ----------------------------- |
| Volatile   | Yes            | No                            |
| Read/Write | Both           | Read only                     |
| Contents   | Can be changed | Fixed at manufacture          |
| Use        | Working memory | Boot instructions (BIOS/UEFI) |

### Virtual Memory (HL)

When RAM is full, the operating system uses a section of the hard drive as virtual memory (swap
space/paging file). Pages of memory are swapped between RAM and the hard drive as needed.

**Page fault:** when the CPU requests data that is not in RAM but in virtual memory. This is slower
than accessing RAM.

## Input and Output (OL/HL)

### Input Devices

- Keyboard, mouse, scanner, microphone, camera, touchscreen, sensors.

### Output Devices

- Monitor, printer, speakers, projector, actuators.

### I/O Controllers

I/O devices are connected to the CPU through I/O controllers, which manage data transfer between the
device and the CPU/memory.

### Interrupts (HL)

An interrupt is a signal sent to the CPU to request attention. The CPU pauses its current task,
handles the interrupt, then resumes.

**Interrupt Service Routine (ISR):** the code executed in response to an interrupt.

**Priority levels:** some interrupts have higher priority (e.g., hardware failure) than others.

## Binary and Number Systems (OL/HL)

### Binary (Base 2)

Uses digits 0 and 1. Each digit is a **bit**. 8 bits = 1 **byte**.

### Conversions (OL/HL)

**Binary to decimal:** multiply each bit by its position value ($2^n$) and sum.

**Example (OL):** Convert $1101_2$ to decimal.

$$
1 \times 8 + 1 \times 4 + 0 \times 2 + 1 \times 1 = 13
$$

**Decimal to binary:** repeatedly divide by 2 and record remainders.

**Example (OL):** Convert $25_{10}$ to binary.

$25 / 2 = 12$ r 1, $12 / 2 = 6$ r 0, $6 / 2 = 3$ r 0, $3 / 2 = 1$ r 1, $1 / 2 = 0$ r 1.

Reading remainders upward: $11001_2$.

### Hexadecimal (HL)

Base 16. Digits: 0--9, A--F.

**Conversion:** group binary digits in sets of 4 and convert each group.

$11010111_2 = 1101\ 0111 = \text{D7}_{16}$

### Binary Arithmetic (HL)

**Addition rules:**

| $0 + 0$ | $0 + 1$ | $1 + 0$ | $1 + 1$        |
| ------- | ------- | ------- | -------------- |
| 0       | 1       | 1       | 10 (0 carry 1) |

**Example (HL):** $1011 + 0110$

```
  1011
+ 0110
------
 10001
```

**Two's complement:** used to represent negative numbers. Invert the bits and add 1.

**Example (HL):** Represent $-5$ in 8-bit two's complement.

$5 = 00000101$. Invert: $11111010$. Add 1: $11111011$.

## Logic Gates (OL/HL)

### Basic Gates

| Gate | Symbol | Expression             | Output                           |
| ---- | ------ | ---------------------- | -------------------------------- |
| AND  | AND    | $A \cdot B$            | 1 only if both inputs are 1      |
| OR   | OR     | $A + B$                | 1 if either or both inputs are 1 |
| NOT  | NOT    | $\bar{A}$              | Inverts the input                |
| XOR  | XOR    | $A \oplus B$           | 1 if inputs are different        |
| NAND | NAND   | $\overline{A \cdot B}$ | NOT AND                          |
| NOR  | NOR    | $\overline{A + B}$     | NOT OR                           |

### Truth Tables (OL/HL)

**AND gate:**

| A   | B   | A AND B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

**Example (HL):** Draw a logic circuit and truth table for the expression
$F = (A \cdot B) + \bar{C}$.

| A   | B   | C   | A AND B | NOT C | F   |
| --- | --- | --- | ------- | ----- | --- |
| 0   | 0   | 0   | 0       | 1     | 1   |
| 0   | 0   | 1   | 0       | 0     | 0   |
| 0   | 1   | 0   | 0       | 1     | 1   |
| 0   | 1   | 1   | 0       | 0     | 0   |
| 1   | 0   | 0   | 0       | 1     | 1   |
| 1   | 0   | 1   | 0       | 0     | 0   |
| 1   | 1   | 0   | 1       | 1     | 1   |
| 1   | 1   | 1   | 1       | 0     | 1   |

## Operating Systems (OL/HL)

### Functions

- **Process management:** allocates CPU time to processes (scheduling).
- **Memory management:** allocates memory to processes, manages virtual memory.
- **File management:** organises files in directories, manages storage.
- **Device management:** manages I/O devices and drivers.
- **User interface:** provides a way for users to interact with the computer (CLI, GUI).

### Types of Operating System

- **Batch processing:** jobs are collected and processed in batches without user interaction.
- **Real-time:** processes inputs and responds within a guaranteed time (e.g., embedded systems).
- **Single-user:** one user at a time (e.g., desktop OS).
- **Multi-user:** multiple users simultaneously (e.g., server OS).

## Common Pitfalls

1. **MAR vs MDR** -- MAR holds the address, MDR holds the data.
2. **PC increments** during the fetch phase, not after execution.
3. **Cache hierarchy** -- L1 is smallest and fastest, L3 is largest and slowest.
4. **Two's complement** -- the most significant bit indicates sign (0 = positive, 1 = negative).
5. **Logic gates** -- NAND and NOR are universal gates.

## Practice Questions

### Ordinary Level

1. Describe the components of the CPU and their functions.
2. Explain the fetch-decode-execute cycle.
3. Convert $11010_2$ to decimal and $42_{10}$ to binary.
4. Draw a truth table for an OR gate.

### Higher Level

1. Explain how cache memory improves CPU performance.
2. A program has $2 \times 10^9$ instructions. The CPU runs at 2.5 GHz with an average CPI of 3.
   Calculate the execution time.
3. Represent $-20$ in 8-bit two's complement and add it to $15$ in two's complement.
4. Design a logic circuit for a half adder and provide the truth table.
