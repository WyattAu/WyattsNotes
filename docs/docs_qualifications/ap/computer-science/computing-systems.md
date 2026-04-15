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

**Detailed step-by-step:**

1. The address in the **Program Counter (PC)** is copied to the **Memory Address Register (MAR)**.
2. The instruction at that address is fetched from memory into the **Memory Data Register (MDR)**.
3. The PC is incremented to point to the next instruction.
4. The instruction in the MDR is copied to the **Current Instruction Register (CIR)**.
5. The **Control Unit (CU)** decodes the instruction in the CIR.
6. The instruction is executed (ALU performs calculations, data is moved between registers).

**Worked Example.** Trace the FDE cycle when PC = 200 and memory[200] contains "ADD R1, R2" (add
register R2 to register R1).

1. Fetch: MAR $\leftarrow$ 200, MDR $\leftarrow$ "ADD R1, R2", PC $\leftarrow$ 201, CIR $\leftarrow$
   "ADD R1, R2".
2. Decode: CU identifies this as an addition instruction. Source: R2, destination: R1.
3. Execute: ALU computes R1 + R2, result stored in R1.

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

**Verification:** $11010110 = -128 + 64 + 0 + 16 + 0 + 4 + 2 + 0 = -128 + 86 = -42$. Correct.

:::

**Worked Example.** Represent $-100$ in 8-bit two's complement.

$100 = 01100100$.

Flip: $10011011$.

Add 1: $10011100$.

Verify: $-128 + 16 + 8 + 4 = -100$. Correct.

**Why two's complement is preferred.** Two's complement has the useful property that addition and
subtraction use the same circuitry. To subtract $a - b$, you simply add $a$ to the two's complement
of $b$. There is no separate subtraction circuit needed.

**Proof of two's complement negation.** For $n$-bit $x$ where $0 \lt x \le 2^{n-1}$, let $\bar{x}$
be the bitwise complement. Then $\bar{x} = (2^n - 1) - x$. Adding 1: $\bar{x} + 1 = 2^n - x$. In
$n$-bit arithmetic, $2^n \equiv 0$, so $x + (\bar{x} + 1) = 0$, confirming $\bar{x} + 1 = -x$.
$\blacksquare$

**Overflow detection.** If adding two positive numbers produces a negative result (or vice versa),
overflow has occurred. The sign bit flips unexpectedly. Java does not throw an exception for integer
overflow -- the result simply wraps around.

**Worked Example.** Compute $100 + 50$ in 8-bit two's complement.

$100 = 01100100$, $50 = 00110010$.

Sum: $10010110$.

The MSB is 1, indicating a negative result. $10010110 = -128 + 16 + 4 + 2 = -106$. This is incorrect
($100 + 50 = 150$, which exceeds the 8-bit range). Overflow has occurred.

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

**Uses of hexadecimal:** Colour codes (#RRGGBB in HTML/CSS), memory addresses, MAC addresses, error
codes, assembly language.

**Worked Example.** Convert `FF` from hexadecimal to binary and decimal.

Binary: $11111111$. Decimal: $15 \times 16 + 15 = 255$.

**Worked Example.** Convert `3A7` from hexadecimal to decimal.

$3 \times 256 + 10 \times 16 + 7 = 768 + 160 + 7 = 935$.

#### Representing Images

An image is a grid of pixels. Each pixel's colour is represented by binary values.

- **Colour depth:** Number of bits per pixel (1 bit = 2 colours, 24 bits = 16,777,216 colours).
- **Resolution:** Width $\times$ height in pixels.

$$\text{File size (bits)} = \text{width} \times \text{height} \times \text{colour depth}$$

**Worked example.** A $1920 \times 1080$ image with 24-bit colour:

$$1920 \times 1080 \times 24 = 49766400 \text{ bits} \approx 5.93 \text{ MB}$$

#### Representing Sound

Sound is digitised by sampling the amplitude of an analogue wave at regular intervals.

- **Sample rate:** Samples per second (Hz). CD quality: 44,100 Hz.
- **Bit depth:** Bits per sample. CD quality: 16-bit.
- **Channels:** Mono (1) or stereo (2).

$$\text{File size (bits)} = \text{sample rate} \times \text{bit depth} \times \text{duration} \times \text{channels}$$

**Worked Example.** A 2-minute stereo recording at 48000 Hz with 16-bit depth.

$48000 \times 16 \times 120 \times 2 = 184320000$ bits $\approx 22$ MB.

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

$$\overline{A \cdot B} = \bar{A} + \bar{B}$$

$$\overline{A + B} = \bar{A} \cdot \bar{B}$$

**Intuition.** De Morgan's Laws say that the negation of a conjunction is the disjunction of the
negations, and vice versa. "It is not true that both A and B are true" is equivalent to "A is false
or B is false."

**Application in circuit design.** If you need a NOR gate but only have NAND gates available, De
Morgan's Laws let you convert between gate types.

**Worked Example.** Simplify $\overline{A \cdot \bar{B}}$ using De Morgan's Laws.

$\overline{A \cdot \bar{B}} = \bar{A} + \overline{\bar{B}} = \bar{A} + B$.

**Proof of De Morgan's first law by truth table:**

| A   | B   | $A \cdot B$ | $\overline{A \cdot B}$ | $\bar{A}$ | $\bar{B}$ | $\bar{A} + \bar{B}$ |
| --- | --- | ----------- | ---------------------- | --------- | --------- | ------------------- |
| 0   | 0   | 0           | 1                      | 1         | 1         | 1                   |
| 0   | 1   | 0           | 1                      | 1         | 0         | 1                   |
| 1   | 0   | 0           | 1                      | 0         | 1         | 1                   |
| 1   | 1   | 1           | 0                      | 0         | 0         | 0                   |

Columns 4 and 7 are identical. $\blacksquare$

### Constructing Circuits

Any Boolean function can be implemented using only NAND gates or only NOR gates (functional
completeness).

:::info[Example]

Implement XOR using AND, OR, and NOT gates.

$A \oplus B = (A \cdot \bar{B}) + (\bar{A} \cdot B)$

This requires: 2 NOT gates, 2 AND gates, 1 OR gate.

**Truth table verification:**

| A   | B   | $\bar{A}$ | $\bar{B}$ | $A \cdot \bar{B}$ | $\bar{A} \cdot B$ | $A \oplus B$ |
| --- | --- | --------- | --------- | ----------------- | ----------------- | ------------ |
| 0   | 0   | 1         | 1         | 0                 | 0                 | 0            |
| 0   | 1   | 1         | 0         | 0                 | 1                 | 1            |
| 1   | 0   | 0         | 1         | 1                 | 0                 | 1            |
| 1   | 1   | 0         | 0         | 0                 | 0                 | 0            |

:::

### Half Adder and Full Adder

**Half adder:** Adds two single bits. Produces sum and carry.

$$\text{Sum} = A \oplus B$$

$$\text{Carry} = A \cdot B$$

**Full adder:** Adds two bits and a carry-in. Produces sum and carry-out.

$$\text{Sum} = A \oplus B \oplus C_{\text{in}}$$

$$C_{\text{out}} = (A \cdot B) + (C_{\text{in}} \cdot (A \oplus B))$$

**Why full adders matter.** A full adder can be chained to add multi-bit numbers. To add two 8-bit
numbers, chain 8 full adders: the carry-out of each stage becomes the carry-in of the next. The
final carry-out is the 9th bit of the result.

**Worked Example.** Add 0110 and 0011 using half adders and full adders.

| Position  | 3 (MSB) | 2   | 1   | 0 (LSB) |
| --------- | ------- | --- | --- | ------- |
| A         | 0       | 1   | 1   | 0       |
| B         | 0       | 0   | 1   | 1       |
| Carry in  | 0       | 0   | 1   | 0       |
| Sum       | 0       | 1   | 0   | 1       |
| Carry out | 0       | 0   | 1   | 0       |

Result: $01001 = 9$. Check: $6 + 3 = 9$. Correct.

## Operating Systems (CED Unit 4)

An operating system (OS) manages hardware and provides services for applications.

### Functions of an OS

1. **Process management:** Schedules and manages running programs (processes).
2. **Memory management:** Allocates memory to processes, virtual memory, paging.
3. **File system management:** Organizes, stores, and retrieves files.
4. **Device management:** Controls hardware devices through drivers.
5. **User interface:** Provides a way for users to interact with the computer (GUI or CLI).
6. **Security:** Authentication, authorization, access control.

**Virtual memory.** When RAM is full, the OS swaps inactive pages to disk. A **page fault** occurs
when the CPU accesses data that has been swapped out. The OS loads the required page from disk into
RAM, which is much slower than a RAM access.

**Worked Example.** A computer has 4 GB of RAM. Programs require 6 GB total. The OS uses 2 GB of
virtual memory on the SSD. What happens when a program accesses data in virtual memory?

A page fault occurs. The OS suspends the program, loads the required page from the SSD into RAM
(swapping out a less recently used page if necessary), and resumes the program. This takes
milliseconds instead of nanoseconds, causing a noticeable delay.

### Types of Operating Systems

| Type      | Examples              | Characteristics               |
| --------- | --------------------- | ----------------------------- |
| Desktop   | Windows, macOS, Linux | Personal use, multitasking    |
| Mobile    | iOS, Android          | Touch-optimized, app-based    |
| Server    | Windows Server, Linux | Network services, high uptime |
| Embedded  | RTOS, firmware        | Limited resources, dedicated  |
| Real-time | VxWorks, FreeRTOS     | Guaranteed response times     |

### The Role of the Kernel

The **kernel** is the core part of the OS that runs with full hardware access. It manages memory,
processes, and devices. User applications run in **user mode** with restricted access; system calls
request the kernel to perform privileged operations on their behalf.

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

**Black-box vs white-box.** Black-box testing verifies that the system produces correct outputs for
given inputs, without examining the code. White-box testing examines the code structure to ensure
every path is tested (e.g., every branch of every `if` statement).

**Worked Example.** A function `isValidAge(age)` returns true if 0 $\le$ age $\le$ 120.

Black-box tests: age = -1 (invalid), 0 (boundary, valid), 60 (normal, valid), 120 (boundary, valid),
121 (invalid), 200 (invalid).

White-box tests: additionally verify each branch of the if statement is taken.

### Version Control

- Tracks changes to source code over time.
- Enables collaboration (multiple developers).
- Supports branching and merging.
- Common tools: Git, Subversion.

**Git concepts.** A **repository** is a project folder tracked by Git. A **commit** is a snapshot of
the project at a point in time. A **branch** is an independent line of development. A **pull
request** proposes merging one branch into another.

## Additional Topics

### Representing Negative Numbers in Programming

In Java, `int` is a 32-bit two's complement integer. The range is $-2147483648$ to $2147483647$.

**Worked Example.** What happens when you compute `2000000000 + 2000000000` in Java?

$2000000000 + 2000000000 = 4000000000$. This exceeds $2^{31} - 1 = 2147483647$. In 32-bit two's
complement, the result wraps around to $4000000000 - 2^{32} = -294967296$.

### Bitwise Operators in Java

| Operator   | Name        | Description                            |
| ---------- | ----------- | -------------------------------------- |
| `&`        | AND         | Bitwise AND                            |
| `\|`       | OR          | Bitwise OR                             |
| `^`        | XOR         | Bitwise XOR                            |
| `~`        | NOT         | Bitwise complement (inverts all bits)  |
| `&lt;&lt;` | Left shift  | Shifts bits left, fills with zeros     |
| `&gt;&gt;` | Right shift | Shifts bits right, fills with sign bit |

```java
int a = 12;   // 00001100
int b = 10;   // 00001010
int c = a & b; // 00001000 = 8
int d = a | b; // 00001110 = 14
int e = a ^ b; // 00000110 = 6
```

### Character Encoding in Java

Java uses UTF-16 internally for `char`. ASCII characters (0--127) map directly to Unicode code
points.

```java
char ch = 'A';        // Unicode code point 65
int codePoint = (int) ch;  // 65
char upper = (char) ('a' - 32);  // 'A'
```

### Comparing Storage Devices

| Metric      | HDD              | SSD             |
| ----------- | ---------------- | --------------- |
| Read speed  | 50-200 MB/s      | 200-550 MB/s    |
| Write speed | 50-150 MB/s      | 200-500 MB/s    |
| Latency     | 5-10 ms          | 0.05-0.1 ms     |
| IOPS        | 100-200          | 5000-100000     |
| Cost per GB | Low              | Higher          |
| Durability  | Mechanical parts | No moving parts |
| Power usage | Higher           | Lower           |

IOPS (Input/Output Operations Per Second) measures how many read/write operations a drive can
perform per second. SSDs excel here due to having no moving parts.

### BIOS vs UEFI

**BIOS (Basic Input/Output System):** Legacy firmware interface. 16-bit, limited to 2.2 TB drives.

**UEFI (Unified Extensible Firmware Interface):** Modern replacement. 32-bit/64-bit, supports drives
larger than 2.2 TB, secure boot, graphical interface.

## Number Systems and Conversions

### Decimal to Binary

Repeatedly divide by 2 and record remainders.

**Worked Example.** Convert $200_{10}$ to binary.

$200 / 2 = 100$ r 0, $100 / 2 = 50$ r 0, $50 / 2 = 25$ r 0, $25 / 2 = 12$ r 1, $12 / 2 = 6$
r 0, $6 / 2 = 3$ r 0, $3 / 2 = 1$ r 1, $1 / 2 = 0$ r 1.

Reading bottom to top: $11001000_2$.

### Binary to Decimal

Multiply each bit by its position value and sum.

**Worked Example.** Convert $11010110_2$ to decimal.

$128 + 64 + 16 + 4 + 2 = 214$.

### Hexadecimal Conversions

**Worked Example.** Convert `3A7` from hex to decimal.

$3 	imes 256 + 10 	imes 16 + 7 = 768 + 160 + 7 = 935$.

**Worked Example.** Convert `FF` from hex to binary and decimal.

Binary: $11111111$. Decimal: $15 	imes 16 + 15 = 255$.

### Binary Arithmetic

**Addition rules:**

| $0 + 0$ | $0 + 1$ | $1 + 0$ | $1 + 1$        |
| ------- | ------- | ------- | -------------- |
| 0       | 1       | 1       | 10 (0 carry 1) |

**Worked Example.** Add 0110 and 0011.

$0110 + 0011 = 1001 = 9$. Check: $6 + 3 = 9$. Correct.

**Worked Example.** Add 1011 and 0110.

$1011 + 0110 = 10001 = 17$. Check: $11 + 6 = 17$. Correct.

## Operating Systems in Detail

### Process States

A process can be in one of several states:

1. **New:** Being created.
2. **Ready:** Waiting for CPU time.
3. **Running:** Currently executing on the CPU.
4. **Blocked/Waiting:** Waiting for I/O or a resource.
5. **Terminated:** Finished execution.

### Memory Management Techniques

**Paging:** Memory is divided into fixed-size pages. The OS maps virtual pages to physical frames.

**Segmentation:** Memory is divided into variable-size segments based on logical divisions (code,
data, stack).

**Worked Example.** A process needs 12 KB but the OS uses 4 KB pages. How many pages are needed?

$12 / 4 = 3$ pages.

### File Systems

**File allocation methods:**

- **Contiguous:** Files stored in consecutive blocks. Fast access but causes fragmentation.
- **Linked:** Each block points to the next. No fragmentation but slow random access.
- **Indexed:** An index block contains pointers to all data blocks. Fast random access.

**Directory structures:**

- **Flat:** All files in one directory.
- **Hierarchical:** Tree structure with folders and subfolders (most common).

### Utility Programs

| Utility              | Purpose                                     |
| -------------------- | ------------------------------------------- |
| Disk defragmenter    | Reorganises data on a HDD for faster access |
| Disk cleaner         | Removes unnecessary files to free up space  |
| Antivirus            | Detects and removes malware                 |
| Compression software | Compresses and decompresses files           |
| Backup software      | Creates copies of data for recovery         |
| Firewall             | Monitors and filters network traffic        |

**Disk defragmentation.** On a HDD, files can become fragmented -- stored in non-contiguous clusters
across the disk. This slows down reading because the read head must move to multiple locations.
Defragmentation reorganises files into contiguous blocks. Note: SSDs do not need defragmentation and
it can actually reduce their lifespan.

## Practice Questions

19. Convert the decimal number $200$ to 8-bit binary.

20. Explain the difference between paging and segmentation in memory management.

21. A computer has a 32-bit address bus and runs at 3.2 GHz. Calculate the maximum addressable
    memory and the maximum data transfer rate if the data bus is 64 bits wide.

22. Explain three differences between BIOS and UEFI.

23. Design a truth table for the Boolean expression $(A \cdot B) + (ar{A} \cdot C)$.

24. Explain the difference between contiguous and linked file allocation methods.

25. A program needs 20 KB of memory but the OS uses 4 KB pages. How many page table entries are
    needed?

26. Explain what a device driver is and why it is necessary. Give an example.

27. Calculate the result of $1101_2 + 1011_2$. Show all carries.

28. Explain the principle of least privilege in the context of operating system security.

29. A system has three processes: P1 (8 MB), P2 (16 MB), P3 (4 MB). The system has 32 MB of RAM.
    Explain how virtual memory allows all three processes to run simultaneously.

30. Explain the role of the kernel in an operating system. What is the difference between user mode
    and kernel mode?

## Additional Number System Practice

**Worked Example.** Convert $11010110_2$ to hexadecimal.

Group into 4s: $1101\ 0110 = 	ext{D6}_{16}$.

**Worked Example.** Convert $	ext{A3F}_{16}$ to binary.

A = 1010, 3 = 0011, F = 1111. Result: $101000111111_2$.

**Worked Example.** Convert $	ext{2B}_{16}$ to decimal.

$2 	imes 16 + 11 = 43$.

## Logic Circuits in Practice

### Constructing a Half Adder

A half adder adds two single bits:

$$	ext{Sum} = A \oplus B$$
$$	ext{Carry} = A \cdot B$$

**Implementation using basic gates:** 1 XOR gate (sum), 1 AND gate (carry).

### Constructing a Full Adder

A full adder adds two bits and a carry-in:

$$	ext{Sum} = A \oplus B \oplus C_{	ext{in}}$$
$$C_{	ext{out}} = (A \cdot B) + (C_{	ext{in}} \cdot (A \oplus B))$$

**Implementation:** 2 XOR gates, 2 AND gates, 1 OR gate.

**Worked Example.** Add $7$ and $5$ using full adders (4-bit).

| Position | 3 (MSB) | 2   | 1   | 0 (LSB) |
| -------- | ------- | --- | --- | ------- |
| A        | 0       | 1   | 1   | 1       |
| B        | 0       | 1   | 0   | 1       |
| Carry in | 0       | 1   | 0   | 0       |
| Sum      | 1       | 1   | 0   | 0       |
| Carry out| 0       | 0   | 1   | 0       |

Result: $1100 = 12$. Check: $7 + 5 = 12$. Correct.

## Software Development in Detail

### Version Control with Git

Git tracks changes to source code over time. Key concepts:

- **Repository:** A project folder tracked by Git.
- **Commit:** A snapshot of the project at a point in time.
- **Branch:** An independent line of development.
- **Pull request:** Proposes merging one branch into another.
- **Clone:** Copy a remote repository to your local machine.

**Common Git commands:**

| Command                | Purpose                        |
| ---------------------- | ------------------------------ |
| `git init`             | Create a new repository        |
| `git add .`            | Stage all changes              |
| `git commit -m "msg"`  | Commit staged changes          |
| `git push`             | Upload commits to remote       |
| `git pull`             | Download and merge changes     |
| `git branch name`      | Create a new branch            |
| `git checkout branch`  | Switch to a branch             |
| `git merge branch`     | Merge a branch into current    |
| `git log`              | View commit history            |

### Integrated Development Environments (IDEs)

An IDE combines a code editor, compiler/interpreter, debugger, and other tools in one application.

**Examples:** Eclipse, IntelliJ IDEA, Visual Studio Code, PyCharm.

**Features:** Syntax highlighting, auto-completion, error detection, debugging tools, version
control integration.

## Additional Practice Questions

31. Draw a truth table for the expression $\overline{A \cdot B} + A \cdot C$. Simplify using De
    Morgan's Laws.

32. Explain the difference between a full adder and a half adder. Why is a full adder needed for
    multi-bit addition?

33. A computer uses 4 KB pages. A process requires 50 KB of memory. How many pages does it need?
    What happens if the system only has 10 free pages?

34. Explain what a firewall does and give three examples of rules a firewall might enforce.

35. Compare the three types of testing (unit, integration, system) with examples for each.

36. Explain why an SSD has no moving parts and why this makes it more suitable for laptops than an
    HDD.

37. A binary number has 12 bits. What is the maximum unsigned value it can represent? What is the
    range if it uses two's complement?

38. Explain the purpose of each DNS record type (A, AAAA, CNAME, MX, NS) with examples.

## Common Pitfalls

1. **Confusing bits and bytes.** 1 byte = 8 bits. Storage is measured in bytes; data rates in bits
   per second.
2. **Incorrect two's complement conversion.** Always flip all bits AND add 1.
3. **Confusing AND and OR in Boolean expressions.** AND requires both true; OR requires at least one
   true.
4. **Forgetting De Morgan's Laws.**
5. **Confusing hexadecimal digits.** A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.
6. **Thinking the OS is the hardware.** The OS is software.
7. **Confusing process and thread.** A process is an instance of a program; a thread is a
   lightweight unit of execution within a process.
8. **Forgetting that NAND and NOR are universal gates.** Any Boolean function can be built using
   only NAND gates or only NOR gates.
9. **Not padding binary groups of 4 when converting to hex.**

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

9. Calculate the file size of a $1280 \times 720$ image with 32-bit colour depth in megabytes.

10. A 2-minute audio file is recorded at 48000 Hz with 16-bit resolution in stereo. Calculate the
    file size in megabytes.

11. Explain what the kernel is and why it is necessary. What is the difference between user mode and
    kernel mode?

12. Explain the concept of functional completeness in logic gates. Why are NAND gates called
    universal gates?

13. Prove De Morgan's second law ($\overline{A + B} = \bar{A} \cdot \bar{B}$) using a truth table.

14. A 4-bit two's complement adder adds $7$ and $5$. Show the calculation and determine whether
    overflow occurs.

15. Draw the truth table for a full adder. Show all eight rows for inputs A, B, and carry-in.

16. Explain the difference between process management and memory management in an operating system.

17. A computer has a 64-bit data bus and runs at 3.2 GHz. Calculate the maximum theoretical data
    transfer rate in GB/s.

18. Explain three ways in which an operating system provides security. Give a concrete example for
    each.
