---
title: Computer Organizations
tags:
- CS
slug: computer-organizations
description: Comprehensive guide to computer organizations for the International Baccalaureate.
---


## Computer Architecture

### CPU architecture

#### Control Unit (CU)

#### Program Counter (PC)

Stores the address of the next instruction

#### Memory Address Register (MAR)

Stores the current address

#### Memory Data Register (MDR)

Two way register that stores the instruction or data where MAR is pointing to.

#### Current Instruction Register (CIR)

Register that stores the current instruction

#### Arithmetic Logic Unit (ALU)

#### Cache

### Primary Memory

#### Static RAM (SRAM)

SRAM are volatile semiconductor memory that uses flip flops to store each bit of data. This is
characterized by fast access times and used in cache memory.

#### Dynamic RAM (DRAM)

DRAM are volatile memory that store each bit as a electric charge in a capacitor within each memory
cell. This is characterized by denser and cheaper than SRAM, used in main system memory (RAM
modules).

### Machine Instruction Cycle

- Fetch
  - The next address in PC is copied to MAR
  - PC increment to point to the next instruction
  - Instruction at memory location stored in MAR is copied to MDR
  - Instruction in MDR copied to CIR
- Decode
  - CU decodes the instruction in CIR
- Execute
  - CU send the signal to relevant component of the CPU
    - Arithmetic or logical operations: ALU
    - Jump commands: Store the jump address to PC

## Von Neumann Architecture

The Von Neumann architecture is the dominant design for most general-purpose computers. It is
characterized by:

1. **Single memory space**: Both data and instructions are stored in the same memory.
2. **Single bus**: Data and instructions share the same pathway between memory and the CPU.
3. **Sequential execution**: Instructions are processed one at a time in sequence.

### Von Neumann vs Harvard Architecture

| Feature    | Von Neumann                                     | Harvard                                                              |
| ---------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| Memory     | Single unified memory for data and instructions | Separate memory spaces for data and instructions                     |
| Bus        | Single bus (bottleneck for simultaneous access) | Separate buses for data and instructions                             |
| Speed      | Slower due to bus contention                    | Faster — can fetch instruction and data simultaneously               |
| Complexity | Simpler design, cheaper to manufacture          | More complex, more expensive                                         |
| Usage      | Most general-purpose computers (PCs, laptops)   | Digital signal processors (DSPs), microcontrollers, embedded systems |

> **Exam tip**: The IB may ask you to explain why the Von Neumann bottleneck exists. Answer: because
> a single bus means the CPU cannot read an instruction and read/write data at the same time,
> creating a performance limitation.

## Binary and Number Systems

### Representing Data in Binary

All data in a computer is represented using binary digits (bits) — 0s and 1s.

**Units of measurement:**

| Unit          | Size                         |
| ------------- | ---------------------------- |
| Bit           | Single binary digit (0 or 1) |
| Nibble        | 4 bits                       |
| Byte          | 8 bits                       |
| Kilobyte (KB) | 1024 bytes                   |
| Megabyte (MB) | 1024 KB                      |
| Gigabyte (GB) | 1024 MB                      |
| Terabyte (TB) | 1024 GB                      |

### Integer Representation

**Unsigned integers** represent non-negative whole numbers:

| Bits | Range              |
| ---- | ------------------ |
| 8    | 0 to 255           |
| 16   | 0 to 65,535        |
| 32   | 0 to 4,294,967,295 |

**Two's complement** is used to represent both positive and negative integers:

| Bits | Range                           |
| ---- | ------------------------------- |
| 8    | -128 to 127                     |
| 16   | -32,768 to 32,767               |
| 32   | -2,147,483,648 to 2,147,483,647 |

**Converting to two's complement** (e.g., represent -42 in 8-bit):

1. Write the positive number in binary: 42 = `00101010`
2. Invert all bits (one's complement): `11010101`
3. Add 1: `11010101 + 1 = 11010110`
4. Result: -42 in 8-bit two's complement = `11010110`

**Verification**: `11010110` in two's complement = -(invert + 1) = -(00101001 + 1) = -(00101010) =
-42

### Binary Arithmetic

**Addition**:

```python
  00101011  (43)
+ 00011101  (29)
-----------
  01001000  (72)
```

**Addition with overflow** (carry beyond available bits):

```python
  11010110  (-42 in two's complement)
+ 11100111  (-25 in two's complement)
-----------
 110111101  (carry bit is lost; result = 10111101 = -67)
```

**Worked example**: -42 + (-25) = -67. In 8-bit two's complement, 10111101 = -(01000010 + 1) =
-(01000011) = -67. Correct.

> **Exam tip**: Practice binary addition and two's complement conversion. The IB often asks you to
> perform these operations and verify the results.

### Hexadecimal

Hexadecimal (base 16) is used as a shorthand for binary. Each hex digit represents 4 bits.

| Hex | Binary | Hex | Binary |
| --- | ------ | --- | ------ |
| 0   | 0000   | 8   | 1000   |
| 1   | 0001   | 9   | 1001   |
| 2   | 0010   | A   | 1010   |
| 3   | 0011   | B   | 1011   |
| 4   | 0100   | C   | 1100   |
| 5   | 0101   | D   | 1101   |
| 6   | 0110   | E   | 1110   |
| 7   | 0111   | F   | 1111   |

**Converting binary to hex**: Group bits into sets of 4 from right to left.

`11010110` → `1101` `0110` → `D6`

**Uses of hexadecimal**:

- Color codes in HTML/CSS (e.g., `#FF5733`)
- Memory addresses
- MAC addresses
- Error codes
- Assembly language programming

## Logic Gates and Boolean Algebra

### Basic Logic Gates

| Gate | Symbol (text)   | Truth table                           | Expression |
| ---- | --------------- | ------------------------------------- | ---------- |
| AND  | `A AND B`       | Output 1 only when both inputs are 1  | A · B      |
| OR   | `A OR B`        | Output 1 when at least one input is 1 | A + B      |
| NOT  | `NOT A`         | Output is the inverse of the input    | Ā          |
| NAND | `NOT (A AND B)` | Output 0 only when both inputs are 1  | A · B ̅     |
| NOR  | `NOT (A OR B)`  | Output 1 only when both inputs are 0  | A + B ̅     |
| XOR  | `A XOR B`       | Output 1 when inputs are different    | A ⊕ B      |

**AND truth table:**

| A   | B   | A AND B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

**XOR truth table:**

| A   | B   | A XOR B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

### Boolean Algebra Laws

| Law          | Expression                                                   |
| ------------ | ------------------------------------------------------------ |
| Identity     | A AND 1 = A; A OR 0 = A                                      |
| Null         | A AND 0 = 0; A OR 1 = 1                                      |
| Complement   | A AND NOT A = 0; A OR NOT A = 1                              |
| Idempotent   | A AND A = A; A OR A = A                                      |
| Commutative  | A AND B = B AND A; A OR B = B OR A                           |
| Associative  | (A AND B) AND C = A AND (B AND C)                            |
| Distributive | A AND (B OR C) = (A AND B) OR (A AND C)                      |
| De Morgan's  | NOT(A AND B) = NOT A OR NOT B; NOT(A OR B) = NOT A AND NOT B |

**Worked example**: Simplify `NOT(A AND B) AND (NOT A OR NOT B)` using De Morgan's Law.

1. `NOT(A AND B)` = `NOT A OR NOT B` (De Morgan's)
2. Expression becomes: `(NOT A OR NOT B) AND (NOT A OR NOT B)`
3. By idempotent law: `NOT A OR NOT B`

> **Exam tip**: De Morgan's Laws are frequently tested. Memorize them and practice simplifying
> Boolean expressions step by step.

### Worked example: Half adder

A half adder adds two single bits and produces a sum and a carry:

```python
Sum = A XOR B
Carry = A AND B
```

| A   | B   | Sum (XOR) | Carry (AND) |
| --- | --- | --------- | ----------- |
| 0   | 0   | 0         | 0           |
| 0   | 1   | 1         | 0           |
| 1   | 0   | 1         | 0           |
| 1   | 1   | 0         | 1           |

A **full adder** extends this by including a carry-in from the previous stage:

```python
Sum = A XOR B XOR CarryIn
CarryOut = (A AND B) OR (CarryIn AND (A XOR B))
```

## Secondary Storage

Secondary storage is non-volatile memory that retains data when the computer is powered off.

### Magnetic Storage

- **Hard Disk Drive (HDD)**: Uses spinning magnetic platters and read/write heads. Typical capacity:
  500 GB to 20 TB. Access time: 5–10 ms. Advantages: high capacity, low cost per GB. Disadvantages:
  mechanical parts (fragile), slower than SSDs, higher power consumption.

### Solid State Storage

- **Solid State Drive (SSD)**: Uses NAND flash memory with no moving parts. Typical capacity: 256 GB
  to 4 TB. Access time: 0.1 ms. Advantages: fast access, durable, low power. Disadvantages: more
  expensive per GB, limited write cycles.
- **USB flash drive**: Portable solid state storage. Typical capacity: 8 GB to 256 GB.
- **SD cards**: Used in cameras, phones, and other portable devices.

### Optical Storage

- **CD-ROM / CD-R / CD-RW**: Capacity ~700 MB. Uses laser to read/write data.
- **DVD-ROM / DVD-R / DVD-RW**: Capacity ~4.7 GB (single layer) or ~8.5 GB (dual layer).
- **Blu-ray**: Capacity ~25 GB (single layer) or ~50 GB (dual layer). Uses shorter-wavelength blue
  laser for higher density.

### Comparison of Storage Media

| Medium    | Speed     | Capacity     | Volatile | Durability             | Cost per GB |
| --------- | --------- | ------------ | -------- | ---------------------- | ----------- |
| RAM       | Very fast | 8–128 GB     | Yes      | Data lost on power off | High        |
| SSD       | Fast      | 256 GB–4 TB  | No       | No moving parts        | Medium      |
| HDD       | Moderate  | 500 GB–20 TB | No       | Mechanical, fragile    | Low         |
| USB Flash | Moderate  | 8–256 GB     | No       | Portable, durable      | Medium      |
| CD/DVD    | Slow      | 0.7–8.5 GB   | No       | Scratch-prone          | Low         |
| Blu-ray   | Moderate  | 25–50 GB     | No       | Scratch-prone          | Low         |

> **Exam tip**: When comparing storage media, consider access speed, capacity, portability,
> durability, and cost. The IB may ask you to recommend a storage solution for a specific scenario
> and justify your choice.

## Operating Systems

### Functions of an Operating System

1. **Memory management**: Allocates memory to processes, implements virtual memory (using secondary
   storage as an extension of RAM).
2. **Processor management**: Schedules CPU time among running processes using scheduling algorithms
   (round-robin, priority-based, first-come first-served).
3. **Device management**: Manages input/output devices through device drivers; handles interrupts.
4. **File management**: Organizes files in directories/folders; manages file permissions, creation,
   deletion, and access.
5. **User interface**: Provides a command-line interface (CLI) or graphical user interface (GUI) for
   user interaction.
6. **Security**: Implements user authentication, access control, and firewall functionality.

### Types of Operating Systems

| Type                     | Description                                            | Examples                          |
| ------------------------ | ------------------------------------------------------ | --------------------------------- |
| Single-user, single-task | One user, one task at a time                           | MS-DOS, early embedded systems    |
| Single-user, multi-task  | One user, multiple tasks simultaneously                | Windows, macOS                    |
| Multi-user               | Multiple users simultaneously with resource protection | Linux, Unix, mainframe OS         |
| Real-time                | Guaranteed response within strict time constraints     | Embedded systems, medical devices |
| Distributed              | Multiple computers working together as a single system | Cloud OS, cluster computing       |
| Embedded                 | Designed for specific hardware with limited resources  | IoT devices, routers              |

### Virtual Memory

Virtual memory allows the computer to use more memory than is physically available by using
secondary storage as an extension of RAM.

- **Paging**: Memory is divided into fixed-size blocks called pages. Pages are swapped between RAM
  and the hard disk as needed.
- **Page fault**: Occurs when the CPU tries to access a page that is not currently in RAM. The OS
  must fetch it from disk, which is significantly slower.
- **Thrashing**: Occurs when the system spends more time swapping pages in and out of RAM than
  actually executing processes. This severely degrades performance.

> **Exam tip**: The IB may ask you to explain the difference between RAM and virtual memory. Key
> point: RAM is physical memory; virtual memory is a technique that uses disk space to simulate
> additional RAM.

## Processor Performance

### Factors Affecting Processor Performance

| Factor          | Description                                                             | Impact                                      |
| --------------- | ----------------------------------------------------------------------- | ------------------------------------------- |
| Clock speed     | Number of cycles per second (measured in GHz)                           | Higher clock speed = more instructions/sec  |
| Bus width       | Number of bits that can be transferred simultaneously                   | Wider bus = more data transferred per cycle |
| Word size       | Number of bits the CPU can process in one operation (32-bit, 64-bit)    | Larger word size = more data processed      |
| Cache size      | Amount of fast memory on/near the CPU                                   | Larger cache = fewer slow RAM accesses      |
| Number of cores | Number of independent processing units                                  | More cores = more parallel processing       |
| Instruction set | RISC (fewer, simpler instructions) vs CISC (more, complex instructions) | Affects efficiency for different workloads  |

### RISC vs CISC

| Feature       | RISC (Reduced Instruction Set Computer)                    | CISC (Complex Instruction Set Computer)                |
| ------------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| Instructions  | Few, simple, uniform-length                                | Many, complex, variable-length                         |
| Execution     | One instruction per cycle (typically)                      | One instruction may take multiple cycles               |
| Registers     | Many general-purpose registers                             | Fewer registers                                        |
| Memory access | Load/Store architecture (only load/store access memory)    | Memory operands allowed in many instructions           |
| Examples      | ARM (mobile devices), MIPS, RISC-V                         | x86 (Intel, AMD)                                       |
| Use case      | Embedded systems, mobile devices, energy-efficient designs | Desktop PCs, servers, applications needing complex ops |

### Multi-core Processors

Modern CPUs often contain multiple cores, each capable of independent processing:

- **Dual-core**: 2 cores
- **Quad-core**: 4 cores
- **Octa-core**: 8 cores

**Advantages**: True parallel execution of multiple threads; improved multitasking performance;
better performance per watt.

**Challenges**: Software must be written to utilize multiple cores (parallel programming); shared
resources (cache, memory bus) can create bottlenecks; increased complexity in OS scheduling.

> **Exam tip**: The IB may ask about the difference between a multi-core processor and multiple
> single-core processors. Key point: multi-core processors share the same package and cache,
> reducing communication overhead, while multiple separate processors communicate through the system
> bus which is slower.

## Peripheral Devices

### Input Devices

| Device         | Function                                             | Use case                        |
| -------------- | ---------------------------------------------------- | ------------------------------- |
| Keyboard       | Text and command input                               | General computing               |
| Mouse          | Pointing, clicking, dragging                         | GUI navigation                  |
| Scanner        | Converts physical documents/images to digital format | Document digitization           |
| Microphone     | Audio input                                          | Voice recording, voice commands |
| Webcam         | Video input                                          | Video conferencing              |
| Touchscreen    | Direct touch input                                   | Mobile devices, kiosks          |
| Barcode reader | Reads barcode data                                   | Retail, inventory               |
| RFID reader    | Reads RFID tags wirelessly                           | Access control, tracking        |

### Output Devices

| Device    | Function                                      | Use case                 |
| --------- | --------------------------------------------- | ------------------------ |
| Monitor   | Visual display                                | Primary output           |
| Printer   | Hard copy output                              | Documents, photos        |
| Speakers  | Audio output                                  | Multimedia, alerts       |
| Projector | Large-scale visual display                    | Presentations, education |
| Actuator  | Converts digital signals to physical movement | Robotics, automation     |

### Device Drivers

A device driver is specialized software that allows the operating system to communicate with a
hardware device. Without the correct driver, the OS cannot use the device.

**Example**: When you connect a new printer, the OS needs the printer's driver to understand how to
send print jobs, manage paper trays, and handle print settings.

## Worked Example: Machine Instruction Cycle Trace

Consider the following simple program stored in memory:

| Address | Instruction |
| ------- | ----------- |
| 100     | LOAD 200    |
| 101     | ADD 201     |
| 102     | STORE 202   |

| Address | Value |
| ------- | ----- |
| 200     | 15    |
| 201     | 27    |
| 202     | ?     |

**Trace:**

| Step | Action                                  | PC  | MAR | MDR       | CIR       | ALU/CU Activity         |
| ---- | --------------------------------------- | --- | --- | --------- | --------- | ----------------------- |
| 1    | Fetch: PC → MAR, PC + 1                 | 101 | 100 | —         | —         | —                       |
| 2    | Fetch: Memory[MAR] → MDR                | 101 | 100 | LOAD 200  | —         | —                       |
| 3    | Fetch: MDR → CIR                        | 101 | 100 | LOAD 200  | LOAD 200  | —                       |
| 4    | Decode: CU decodes CIR                  | 101 | 100 | LOAD 200  | LOAD 200  | CU identifies LOAD op   |
| 5    | Execute: Address 200 → MAR              | 101 | 200 | LOAD 200  | LOAD 200  | CU sends address to MAR |
| 6    | Execute: Memory[MAR] → MDR (value = 15) | 101 | 200 | 15        | LOAD 200  | —                       |
| 7    | Execute: MDR → Accumulator              | 101 | 200 | 15        | LOAD 200  | ACC = 15                |
| 8    | Fetch: PC → MAR, PC + 1                 | 102 | 101 | —         | —         | —                       |
| 9    | Fetch: Memory[MAR] → MDR                | 102 | 101 | ADD 201   | —         | —                       |
| 10   | Fetch: MDR → CIR                        | 102 | 101 | ADD 201   | ADD 201   | —                       |
| 11   | Decode: CU decodes CIR                  | 102 | 101 | ADD 201   | ADD 201   | CU identifies ADD op    |
| 12   | Execute: Address 201 → MAR              | 102 | 201 | ADD 201   | ADD 201   | CU sends address to MAR |
| 13   | Execute: Memory[MAR] → MDR (value = 27) | 102 | 201 | 27        | ADD 201   | —                       |
| 14   | Execute: ACC + MDR → ACC                | 102 | 201 | 27        | ADD 201   | ACC = 15 + 27 = 42      |
| 15   | Fetch: PC → MAR, PC + 1                 | 103 | 102 | —         | —         | —                       |
| 16   | Fetch: Memory[MAR] → MDR                | 103 | 102 | STORE 202 | —         | —                       |
| 17   | Fetch: MDR → CIR                        | 103 | 102 | STORE 202 | STORE 202 | —                       |
| 18   | Decode: CU decodes CIR                  | 103 | 102 | STORE 202 | STORE 202 | CU identifies STORE op  |
| 19   | Execute: ACC → MDR (value = 42)         | 103 | 102 | 42        | STORE 202 | —                       |
| 20   | Execute: Address 202 → MAR              | 103 | 202 | 42        | STORE 202 | CU sends address to MAR |
| 21   | Execute: MDR → Memory[MAR]              | 103 | 202 | 42        | STORE 202 | Memory[202] = 42        |

**Final state**: Memory address 202 contains the value 42 (15 + 27).

> **Exam tip**: You do not need to trace every single micro-step like this in the exam. A simplified
> trace showing PC, MAR, MDR, CIR, and Accumulator at each instruction cycle (fetch-decode-execute)
> is usually sufficient. However, understanding the full detail helps you explain what happens at
> each stage.

---

## Cache Memory: Worked Example

Cache memory is a small, fast memory located between the CPU and main memory (RAM). It stores
frequently accessed data and instructions to reduce the average time to access memory.

### Cache Hit and Cache Miss

- **Cache hit:** The data or instruction the CPU needs is found in the cache. This is fast.
- **Cache miss:** The data is not in the cache and must be fetched from main memory. This is slower.
- **Hit rate:** The percentage of memory accesses that are cache hits.
- **Miss rate:** $1 - \mathrm{hit rate}$.

### Worked Example: Cache Hit Rate Calculation

**Problem:** A CPU makes 10,000 memory accesses. The cache has a hit time of 2 ns and the main
memory has an access time of 50 ns. Out of the 10,000 accesses, 8,500 are cache hits and 1,500 are
cache misses. Calculate: a) The hit rate. b) The average memory access time (AMAT). c) The total
time for all 10,000 accesses if there were no cache.

**Solution:**

**a) Hit rate:**

$$
\mathrm{Hit rate} = \frac{\mathrm{Cache hits}}{\mathrm{Total accesses}} = \frac{8500}{10000} = 0.85 = 85\%
$$

**b) Average Memory Access Time (AMAT):**

$$
\mathrm{AMAT} = (\mathrm{Hit rate} \times \mathrm{Hit time}) + (\mathrm{Miss rate} \times \mathrm{Miss penalty})
$$

The miss penalty is the time to fetch from main memory: 50 ns.

$$
\mathrm{AMAT} = (0.85 \times 2) + (0.15 \times 50) = 1.7 + 7.5 = 9.2 \mathrm{ ns}
$$

**c) Without cache (all accesses from main memory):**

$$
\mathrm{Total time} = 10000 \times 50 = 500,000 \mathrm{ ns}
$$

**With cache:**

$$
\mathrm{Total time} = 8500 \times 2 + 1500 \times 50 = 17000 + 75000 = 92,000 \mathrm{ ns}
$$

The cache reduces total access time by approximately 82%.

---

## Pipelining

Pipelining is a technique where multiple instructions are overlapped in execution, similar to an
assembly line in a factory. Instead of waiting for one instruction to complete all stages before
starting the next, each stage processes a different instruction simultaneously.

### The Three-Stage Pipeline

| Stage   | Description                                     |
| :------ | :---------------------------------------------- |
| Fetch   | Fetch the next instruction from memory          |
| Decode  | Decode the instruction and read operands        |
| Execute | Perform the operation and write back the result |

### How It Works

Without pipelining, executing 3 instructions takes 9 clock cycles (3 cycles each):

```python
Clock:   1   2   3   4   5   6   7   8   9
Inst 1:  F   D   E
Inst 2:              F   D   E
Inst 3:                          F   D   E
```

With pipelining, 3 instructions take only 5 clock cycles:

```python
Clock:   1   2   3   4   5
Inst 1:  F   D   E
Inst 2:      F   D   E
Inst 3:          F   D   E
```

The speedup is approximately equal to the number of pipeline stages (in the ideal case).

### Pipeline Hazards

A hazard is a situation that prevents the next instruction from executing in its designated clock
cycle.

| Hazard Type       | Cause                                                           | Solution                                    |
| :---------------- | :-------------------------------------------------------------- | :------------------------------------------ |
| Data hazard       | An instruction depends on the result of a previous instruction  | Forwarding, stalling (inserting bubbles)    |
| Structural hazard | Two instructions need the same hardware resource simultaneously | Duplicate resources (e.g., separate caches) |
| Control hazard    | A branch/jump changes the instruction flow                      | Branch prediction, delayed branching        |

### Branch Prediction

When the CPU encounters a conditional branch (e.g., `JUMP IF EQUAL`), it does not yet know whether
the branch will be taken. Branch prediction attempts to guess the outcome:

- **Static prediction:** Always predict "not taken" or always predict "taken."
- **Dynamic prediction:** Uses history of previous branches to make more accurate predictions.
  Modern CPUs achieve prediction accuracy above 95%.

If the prediction is wrong, the pipeline must be flushed (partially completed instructions are
discarded), which incurs a performance penalty.

---

## RISC vs CISC: Extended Comparison

### Instruction Execution

| Aspect            | RISC                                      | CISC                                       |
| :---------------- | :---------------------------------------- | :----------------------------------------- |
| Instruction count | More instructions per task (simpler each) | Fewer instructions per task (complex each) |
| Clock speed       | Generally higher (simpler circuits)       | Generally lower (more complex circuits)    |
| Code size         | Larger (more instructions needed)         | Smaller (each instruction does more)       |
| Compiler design   | Simpler (uniform instruction format)      | More complex (variable formats)            |
| Power consumption | Lower (simpler design)                    | Higher (more complex design)               |

### Practical Examples

- **RISC:** ARM processors dominate the mobile and embedded market. The ARM architecture is used in
  virtually all smartphones, tablets, and many IoT devices. Apple's M-series chips (M1, M2) are
  ARM-based RISC processors.
- **CISC:** The x86 architecture (Intel Core, AMD Ryzen) dominates desktop and server markets. Most
  personal computers run CISC processors.

---

## Common Pitfalls

1. **Confusing registers.** The MAR stores an **address**, while the MDR stores the **data or
   instruction** at that address. The CIR stores the **current instruction** being executed, not the
   data.

2. **PC increment timing.** The PC is incremented during the **fetch** stage, not after execution.
   This means if a jump instruction is executed, the PC is overwritten with the jump address,
   discarding the incremented value.

3. **Cache vs RAM.** Cache is smaller, faster, and more expensive per byte than RAM. SRAM is used
   for cache; DRAM is used for main memory. Do not confuse these.

4. **Von Neumann bottleneck.** The bottleneck arises because data and instructions share a single
   bus, not because of the CPU speed. The Harvard architecture avoids this by using separate buses.

5. **Binary overflow.** In two's complement, overflow occurs when adding two positive numbers gives
   a negative result, or adding two negative numbers gives a positive result. The carry bit alone
   does not indicate overflow.

6. **Pipelining is not always faster.** Pipeline hazards (data, structural, control) can reduce the
   effective speedup. The theoretical maximum speedup equals the number of stages, but this is never
   achieved in practice.

---

## Problem Set

<details>
<summary>Question 1</summary>

A CPU uses a three-stage pipeline (Fetch, Decode, Execute). Each stage takes 1 clock cycle. How many
clock cycles are required to execute: a) 1 instruction? b) 10 instructions? c) 100 instructions?

</details>

<details>
<summary>Answer 1</summary>

a) 1 instruction: 3 cycles (the pipeline must fill before the first instruction completes). b) 10
instructions: $3 + (10 - 1) = 12$ cycles. After the first instruction, each additional instruction
adds 1 cycle. c) 100 instructions: $3 + (100 - 1) = 102$ cycles.

</details>

<details>
<summary>Question 2</summary>

A computer has a two-level cache system. The L1 cache has a hit rate of 80% with an access time of 1
ns. The L2 cache has a hit rate of 95% (of the remaining accesses) with an access time of 5 ns. Main
memory has an access time of 100 ns. Calculate the average memory access time.

</details>

<details>
<summary>Answer 2</summary>

L1 hit: $0.80 \times 1 = 0.80$ ns. L1 miss rate: $0.20$. L2 hit rate of misses: $0.95$. L2 hit:
$0.20 \times 0.95 \times (1 + 5) = 0.19 \times 6 = 1.14$ ns. L2 miss (goes to main memory):
$0.20 \times 0.05 \times (1 + 5 + 100) = 0.01 \times 106 = 1.06$ ns.

AMAT $= 0.80 + 1.14 + 1.06 = 3.00$ ns.

</details>

<details>
<summary>Question 3</summary>

Convert the following 8-bit two's complement binary numbers to decimal: a) `01011010` b) `10110100`
c) `11111111`

</details>

<details>
<summary>Answer 3</summary>

a) `01011010`: Positive (MSB = 0). $64 + 16 + 8 + 2 = 90$. b) `10110100`: Negative (MSB = 1).
Invert: `01001011`. Add 1: `01001100` $= 64 + 8 + 4 = 76$. So the value is $-76$. c) `11111111`:
Negative (MSB = 1). Invert: `00000000`. Add 1: `00000001` $= 1$. So the value is $-1$.

</details>

<details>
<summary>Question 4</summary>

Explain the difference between the Von Neumann architecture and the Harvard architecture. In your
answer, describe the Von Neumann bottleneck and explain how the Harvard architecture addresses it.

</details>

<details>
<summary>Answer 4</summary>

The Von Neumann architecture uses a single memory space for both data and instructions, connected to
the CPU by a single bus. This means the CPU cannot read an instruction and read/write data
simultaneously, creating the **Von Neumann bottleneck** — the bus becomes a performance limitation
because it can only transfer one item at a time.

The Harvard architecture uses **separate memory spaces** for data and instructions, each with its
own bus. This allows the CPU to fetch the next instruction and read/write data at the same time,
eliminating the bottleneck. The trade-off is increased hardware complexity and cost. Harvard
architecture is commonly used in DSPs and embedded systems where performance is critical.

</details>

<details>
<summary>Question 5</summary>

A simplified CPU has the following registers: PC (initially 100), ACC (initially 0), MAR, MDR, and
CIR. The following instructions are in memory:

| Address | Instruction |
| :------ | :---------- |
| 100     | LOAD 150    |
| 101     | SUB 151     |
| 102     | STORE 152   |

| Address | Value |
| :------ | :---- |
| 150     | 42    |
| 151     | 17    |
| 152     | ?     |

Trace the fetch-decode-execute cycle for each instruction, showing the state of the PC, MAR, MDR,
CIR, and ACC after each cycle. What is the final value stored at address 152?

</details>

<details>
<summary>Answer 5</summary>

**Instruction 1: LOAD 150**

| Stage   | PC  | MAR | MDR      | CIR      | ACC |
| :------ | :-- | :-- | :------- | :------- | :-- |
| Fetch   | 101 | 100 | LOAD 150 | LOAD 150 | 0   |
| Decode  | 101 | 100 | LOAD 150 | LOAD 150 | 0   |
| Execute | 101 | 150 | 42       | LOAD 150 | 42  |

**Instruction 2: SUB 151**

| Stage   | PC  | MAR | MDR     | CIR     | ACC |
| :------ | :-- | :-- | :------ | :------ | :-- |
| Fetch   | 102 | 101 | SUB 151 | SUB 151 | 42  |
| Decode  | 102 | 101 | SUB 151 | SUB 151 | 42  |
| Execute | 102 | 151 | 17      | SUB 151 | 25  |

**Instruction 3: STORE 152**

| Stage   | PC  | MAR | MDR       | CIR       | ACC |
| :------ | :-- | :-- | :-------- | :-------- | :-- |
| Fetch   | 103 | 102 | STORE 152 | STORE 152 | 25  |
| Decode  | 103 | 102 | STORE 152 | STORE 152 | 25  |
| Execute | 103 | 152 | 25        | STORE 152 | 25  |

Final value at address 152: **25** (which is $42 - 17$).

</details>
