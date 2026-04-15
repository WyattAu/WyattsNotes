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

**Key distinction:** The PC holds an **address** (where to go next). The MAR also holds an
**address** (where to read/write). The MDR holds the actual **data** (what was read or what to write).
The CIR/IR holds the **instruction** (what to do).

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

**Worked Example (HL).** Trace the FDE cycle when PC = 100 and memory[100] = "SUB 5".

Fetch: MAR $\leftarrow$ 100, MDR $\leftarrow$ "SUB 5", PC $\leftarrow$ 101, IR $\leftarrow$ "SUB 5".

Decode: CU interprets "SUB 5" as "subtract 5 from the accumulator".

Execute: ACC $\leftarrow$ ACC - 5. If ACC was 20, it is now 15.

**Worked Example (HL).** Trace the FDE cycle for a store instruction. PC = 200, instruction is
"STORE 50" (store ACC to memory address 50), ACC = 42.

1. Fetch: MAR $\leftarrow$ 200, MDR $\leftarrow$ "STORE 50", PC $\leftarrow$ 201, IR $\leftarrow$
   "STORE 50".
2. Decode: CU identifies a store instruction. Destination address is 50.
3. Execute: MAR $\leftarrow$ 50, MDR $\leftarrow$ 42 (from ACC), memory[50] $\leftarrow$ 42.

**Worked Example (HL).** Trace the FDE cycle for a load instruction. PC = 150, instruction is
"LOAD 75" (load the value at memory address 75 into ACC), memory[75] = 18.

1. Fetch: MAR $\leftarrow$ 150, MDR $\leftarrow$ "LOAD 75", PC $\leftarrow$ 151, IR $\leftarrow$
   "LOAD 75".
2. Decode: CU identifies a load instruction. Source address is 75.
3. Execute: MAR $\leftarrow$ 75, MDR $\leftarrow$ memory[75] = 18, ACC $\leftarrow$ 18.

### Buses (HL)

- **Address bus:** carries memory addresses (one way: CPU to memory). Width determines maximum
  addressable memory.
- **Data bus:** carries data (two way: CPU to/from memory). Width determines how much data can be
  transferred per cycle.
- **Control bus:** carries control signals (one way: CPU to other components). Includes read/write
  signals, clock, and interrupt signals.

**Worked Example (HL).** A CPU has a 24-bit address bus. What is the maximum addressable memory?

$2^{24} = 16777216$ bytes = 16 MB.

**Worked Example (HL).** A 32-bit data bus transfers 4 bytes per cycle. At 2 GHz, what is the
maximum data transfer rate?

$2 \times 10^9 \times 4 = 8 \times 10^9$ bytes/second = 8 GB/s.

**Worked Example (HL).** A CPU has a 16-bit address bus. What is the maximum addressable memory?

$2^{16} = 65536$ bytes = 64 KB.

**Bus comparison:**

| Bus          | Direction      | Carries                            |
| ------------ | -------------- | ---------------------------------- |
| Address bus  | CPU to memory  | Memory addresses                   |
| Data bus     | CPU to/from    | Data and instructions              |
| Control bus  | CPU to devices | Control signals (read, write, clock, interrupt) |

## Performance (OL/HL)

### Factors Affecting CPU Performance

1. **Clock speed:** measured in GHz. Higher clock speed = more cycles per second = faster
   processing.
2. **Number of cores:** multi-core processors can execute multiple instructions simultaneously.
3. **Cache size:** small, fast memory on or near the CPU. L1 (smallest, fastest), L2, L3 (largest,
   slowest). Reduces the need to access main memory.
4. **Word size:** number of bits the CPU can process at once (e.g., 32-bit, 64-bit).
5. **Bus width:** wider buses transfer more data per cycle.

**Worked Example (OL).** CPU A has a clock speed of 3.2 GHz and 4 cores. CPU B has a clock speed of
2.8 GHz and 8 cores. Which is faster for parallelizable tasks?

For parallelizable tasks, CPU B is faster because it has more cores. The total theoretical
throughput is proportional to cores $\times$ clock speed: CPU A = $4 \times 3.2 = 12.8$
GHz-equivalent, CPU B = $8 \times 2.8 = 22.4$ GHz-equivalent.

**Worked Example (OL).** Explain how increasing cache size improves performance.

A larger cache can store more frequently used data, reducing the number of cache misses. Each cache
miss requires accessing RAM, which is much slower (100 ns vs 1 ns for L1 cache). Even a small
increase in hit rate can significantly reduce average access time.

### Fetch-Decode-Execute and Clock Cycles (HL)

Each step in the cycle takes at least one clock cycle. The CPI (cycles per instruction) varies
depending on the instruction complexity.

**Example (HL):** A CPU with a clock speed of 3 GHz executes a program with 6 billion instructions.
If the average CPI is 4, how long does the program take?

$$
\text{Time} = \frac{\text{Instructions} \times \text{CPI}}{\text{Clock speed}} = \frac{6 \times 10^9 \times 4}{3 \times 10^9} = 8\text{ seconds}
$$

**Worked Example (HL).** A 2.5 GHz CPU executes 5 billion instructions with average CPI of 3. How
long?

Time = $(5 \times 10^9 \times 3) / (2.5 \times 10^9) = 6$ seconds.

**Worked Example (HL).** A program has $2 \times 10^9$ instructions. The CPU runs at 2.5 GHz with an
average CPI of 3. Calculate the execution time.

Time = $(2 \times 10^9 \times 3) / (2.5 \times 10^9) = 2.4$ seconds.

### Von Neumann Bottleneck (HL)

Because instructions and data share a single bus, the CPU cannot fetch an instruction and read/write
data simultaneously. This limits throughput.

**Mitigation techniques:**

- **Caching:** Keep frequently used data in fast cache memory near the CPU.
- **Pipelining:** Overlap the fetch, decode, and execute stages for different instructions.
- **Branch prediction:** Guess the outcome of conditional branches to keep the pipeline full.
- **Harvard architecture elements:** Separate instruction and data caches within the CPU.

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
| Speed      | Fast           | Fast                          |
| Cost       | Higher per MB  | Lower per MB                  |

**RAM (Random Access Memory):** When you open a program, it is loaded from secondary storage into
RAM because RAM is much faster. When you save your work, it is copied from RAM to secondary storage
so it persists after power off.

**ROM (Read Only Memory):** Contains the BIOS/UEFI, which is the first code the CPU executes when
the computer is powered on. The BIOS initialises hardware and loads the operating system from disk
into RAM. ROM is non-volatile so the computer can always start up.

**DRAM vs SRAM (HL):**

- **DRAM:** Used for main memory. Stores each bit as a charge in a capacitor. Must be refreshed
  thousands of times per second. Cheaper, higher density.
- **SRAM:** Used for CPU cache. Stores each bit in a flip-flop (transistor circuit). No refreshing
  needed. Faster but more expensive and lower density.

| Feature  | DRAM              | SRAM                 |
| -------- | ----------------- | -------------------- |
| Used for | Main memory (RAM) | CPU cache (L1/L2/L3) |
| Speed    | Slower            | Faster               |
| Cost     | Cheaper per bit   | More expensive       |
| Density  | Higher            | Lower                |
| Refresh  | Required          | Not required         |
| Power    | Less (when idle)  | More                 |

### Virtual Memory (HL)

When RAM is full, the operating system uses a section of the hard drive as virtual memory (swap
space/paging file). Pages of memory are swapped between RAM and the hard drive as needed.

**Page fault:** when the CPU requests data that is not in RAM but in virtual memory. This is slower
than accessing RAM.

**Thrashing:** When the system spends more time swapping pages than executing instructions. The
solution is to close programs or add more RAM.

**Worked Example (HL).** A computer has 4 GB RAM. Programs require 7 GB total. Explain what happens.

The OS uses 3 GB of virtual memory on the SSD. When a program accesses data in virtual memory, a
page fault occurs, causing a delay of milliseconds (vs nanoseconds for RAM). The system may thrash
if too many programs are running.

**Worked Example (HL).** A computer has 8 GB of RAM and runs programs that require 12 GB total. The
operating system allocates 8 GB to RAM and uses 4 GB of virtual memory on the SSD. When a program
accesses data in virtual memory, a page fault occurs and the OS swaps the required page from the SSD
into RAM, potentially moving a less-used page from RAM to the SSD.

### Cache Memory (HL)

**Cache hit rate and average access time:**

If the L1 hit rate is 90% with access time 1 ns, and RAM access time is 100 ns:

Average access time = $0.9 \times 1 + 0.1 \times 100 = 0.9 + 10 = 10.9$ ns.

Without cache: 100 ns. Speedup: $100 / 10.9 \approx 9.2\times$.

**Why caching works:** Programs tend to access the same data repeatedly (temporal locality) and data
near recently accessed data (spatial locality). Caching exploits these patterns.

**Worked Example (HL).** A CPU has a 95% L1 cache hit rate. L1 access is 2 ns and RAM access is 80
ns. Calculate the average memory access time.

Average = $0.95 \times 2 + 0.05 \times 80 = 1.9 + 4.0 = 5.9$ ns.

**Cache levels:**

| Level | Location            | Size                   | Speed             |
| ----- | ------------------- | ---------------------- | ----------------- |
| L1    | Inside CPU core     | Smallest (few KB)      | Fastest           |
| L2    | Inside CPU          | Larger (256 KB - 1 MB) | Fast              |
| L3    | Shared across cores | Largest (up to 64 MB)  | Slower than L1/L2 |

### Memory Hierarchy Summary (HL)

| Level     | Speed     | Capacity | Cost    | Volatile? |
| --------- | --------- | -------- | ------- | --------- |
| Registers | Fastest   | Smallest | Highest | Yes       |
| Cache     | Very fast | Small    | High    | Yes       |
| RAM       | Fast      | Medium   | Medium  | Yes       |
| SSD       | Moderate  | Large    | Medium  | No        |
| HDD       | Slow      | Largest  | Lowest  | No        |

**Why the hierarchy exists.** Faster memory is more expensive per byte. The hierarchy exploits
locality of reference. By keeping the most frequently used data in small, fast memory near the CPU,
the average access time is dramatically reduced compared to using only RAM.

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

**Worked Example (HL).** A keyboard interrupt occurs while the CPU is processing a calculation. What
happens?

The CPU saves the current state (registers, PC), jumps to the keyboard ISR, processes the keypress,
restores the saved state, and resumes the calculation. The user does not notice the interruption.

**Types of interrupts:**

| Type           | Source                    | Priority | Example                    |
| -------------- | ------------------------- | -------- | -------------------------- |
| Hardware       | Hardware devices          | High     | Disk I/O complete          |
| Software       | Program (INT instruction) | Medium   | System call                |
| Timer          | System clock              | Variable | Scheduler time slice       |
| Non-maskable   | Critical hardware failure | Highest  | Memory parity error        |

### Secondary Storage

**HDD vs SSD:**

| Metric      | HDD              | SSD             |
| ----------- | ---------------- | --------------- |
| Read speed  | 50-200 MB/s      | 200-550 MB/s    |
| Write speed | 50-150 MB/s      | 200-500 MB/s    |
| Latency     | 5-10 ms          | 0.05-0.1 ms     |
| IOPS        | 100-200          | 5000-100000     |
| Cost per GB | Low              | Higher          |
| Durability  | Mechanical parts | No moving parts |
| Power usage | Higher           | Lower           |

**Choosing storage:** A photographer needs high capacity (HDD or cloud). A video editor needs speed
(SSD). A student needs portability (USB flash drive).

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

| Hex | Binary  | Decimal |
| --- | ------- | ------- |
| 0   | 0000    | 0       |
| 1   | 0001    | 1       |
| 2   | 0010    | 2       |
| 3   | 0011    | 3       |
| 4   | 0100    | 4       |
| 5   | 0101    | 5       |
| 6   | 0110    | 6       |
| 7   | 0111    | 7       |
| 8   | 1000    | 8       |
| 9   | 1001    | 9       |
| A   | 1010    | 10      |
| B   | 1011    | 11      |
| C   | 1100    | 12      |
| D   | 1101    | 13      |
| E   | 1110    | 14      |
| F   | 1111    | 15      |

**Conversion:** group binary digits in sets of 4 and convert each group.

$11010111_2 = 1101\ 0111 = \text{D7}_{16}$

**Worked Example (HL).** Convert $\text{ABC}_{16}$ to decimal.

$10 \times 256 + 11 \times 16 + 12 = 2560 + 176 + 12 = 2748$.

**Worked Example (HL).** Convert $\text{FF}_{16}$ to binary and decimal.

Binary: $11111111_2$. Decimal: $15 \times 16 + 15 = 255$.

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

**Worked Example (HL).** Calculate $20 - 14$ using two's complement in 8-bit binary.

$20 = 00010100$. $14 = 00001110$.

Two's complement of 14: invert $00001110 \to 11110001$, add 1 $\to 11110010$.

$00010100 + 11110010 = 100000110$. Discard overflow: $00000110 = 6$. Correct.

**Worked Example (HL).** Represent $-20$ in 8-bit two's complement and add it to $15$ in two's
complement.

$-20$: $20 = 00010100$, flip $= 11101011$, add 1 $= 11101100$.

$15 = 00001111$.

$11101100 + 00001111 = 11111011$. MSB is 1, so negative. Flip $= 00000100$, add 1 $= 00000101 = 5$.
Result is $-5$. Check: $-20 + 15 = -5$. Correct.

**Two's complement range:**

| Bits | Minimum | Maximum |
| ---- | ------- | ------- |
| 8    | -128    | 127     |
| 16   | -32,768 | 32,767  |
| 32   | -2,147,483,648 | 2,147,483,647 |

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

**OR gate:**

| A   | B   | A OR B |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

**XOR gate:**

| A   | B   | A XOR B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

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

### De Morgan's Laws (HL)

$$\overline{A \cdot B} = \bar{A} + \bar{B}$$

$$\overline{A + B} = \bar{A} \cdot \bar{B}$$

**Worked Example (HL).** Simplify $\overline{A \cdot \bar{B}}$ using De Morgan's Laws.

$\overline{A \cdot \bar{B}} = \bar{A} + \overline{\bar{B}} = \bar{A} + B$.

**Worked Example (HL).** Simplify $\overline{A + B \cdot \bar{C}}$ using De Morgan's Laws.

$\overline{A + B \cdot \bar{C}} = \bar{A} \cdot \overline{B \cdot \bar{C}} = \bar{A} \cdot (\bar{B} + C)$.

**Proof of De Morgan's first law by truth table:**

| A   | B   | $A \cdot B$ | $\overline{A \cdot B}$ | $\bar{A}$ | $\bar{B}$ | $\bar{A} + \bar{B}$ |
| --- | --- | ----------- | ---------------------- | --------- | --------- | ------------------- |
| 0   | 0   | 0           | 1                      | 1         | 1         | 1                   |
| 0   | 1   | 0           | 1                      | 1         | 0         | 1                   |
| 1   | 0   | 0           | 1                      | 0         | 1         | 1                   |
| 1   | 1   | 1           | 0                      | 0         | 0         | 0                   |

Columns 4 and 7 are identical. $\blacksquare$

### Half Adder (HL)

A half adder adds two bits:

- Sum = $A \oplus B$
- Carry = $A \cdot B$

| A   | B   | Sum | Carry |
| --- | --- | --- | ----- |
| 0   | 0   | 0   | 0     |
| 0   | 1   | 1   | 0     |
| 1   | 0   | 1   | 0     |
| 1   | 1   | 0   | 1     |

### Full Adder (HL)

A full adder adds two bits and a carry-in:

- Sum = $A \oplus B \oplus C_{\text{in}}$
- $C_{\text{out}} = (A \cdot B) + (C_{\text{in}} \cdot (A \oplus B))$

**Why full adders matter.** To add two 8-bit numbers, chain 8 full adders: the carry-out of each
stage becomes the carry-in of the next.

**Worked Example (HL).** Add 0110 and 0011 using full adders.

| Position  | 3 (MSB) | 2   | 1   | 0 (LSB) |
| --------- | ------- | --- | --- | ------- |
| A         | 0       | 1   | 1   | 0       |
| B         | 0       | 0   | 1   | 1       |
| Carry in  | 0       | 0   | 1   | 0       |
| Sum       | 0       | 1   | 0   | 1       |
| Carry out | 0       | 0   | 1   | 0       |

Result: $01001 = 9$. Check: $6 + 3 = 9$. Correct.

## Operating Systems (OL/HL)

### Functions

- **Process management:** allocates CPU time to processes (scheduling).
- **Memory management:** allocates memory to processes, manages virtual memory.
- **File management:** organises files in directories, manages storage.
- **Device management:** manages I/O devices and drivers.
- **User interface:** provides a way for users to interact with the computer (CLI, GUI).
- **Security:** user authentication, file permissions, firewall.

### Types of Operating System

| Type      | Description                     | Examples              |
| --------- | ------------------------------- | --------------------- |
| Desktop   | Personal use, multitasking      | Windows, macOS, Linux |
| Mobile    | Touch-optimized, app-based      | iOS, Android          |
| Server    | Network services, high uptime   | Windows Server, Linux |
| Real-time | Guaranteed response times       | VxWorks, FreeRTOS     |
| Embedded  | Limited resources, dedicated    | Car ECU, smart TV     |
| Batch     | Jobs processed without user interaction | Payroll processing |

**GUI vs CLI:**

| Feature     | GUI                   | CLI                            |
| ----------- | --------------------- | ------------------------------ |
| Ease of use | Easy for beginners    | Steep learning curve           |
| Speed       | Slower (mouse-driven) | Faster (keyboard-driven)       |
| Resources   | Higher (graphics)     | Lower                          |
| Automation  | Limited               | Easy with scripting            |
| Examples    | Windows, macOS        | Linux terminal, Command Prompt |

**Process scheduling algorithms:**

| Algorithm                | Description                                            | Fairness |
| ------------------------ | ------------------------------------------------------ | -------- |
| Round-robin              | Each process gets a fixed time slice in turn           | High     |
| Priority-based           | Higher-priority processes get CPU time first           | Low      |
| First-come, first-served | Processes served in order of arrival                   | Medium   |
| Shortest job first       | The process with the shortest expected time runs first | Medium   |

**Worked Example (HL).** Explain why a real-time operating system is needed in a car's anti-lock
braking system (ABS).

The ABS must respond within milliseconds to prevent wheel lockup. A general-purpose OS (like
Windows) cannot guarantee response times because it may be busy with other tasks. A RTOS guarantees
that the ABS process receives CPU time within a fixed deadline, ensuring safety.

### Embedded Systems (HL)

An embedded system is a computer system built into a larger device, designed to perform a specific
function.

**Examples:** Washing machines, microwaves, car engine management, traffic lights, pacemakers,
smart thermostats.

| Feature                | Embedded System       | General-Purpose Computer  |
| ---------------------- | --------------------- | ------------------------- |
| Purpose                | Single, specific task | Multiple tasks            |
| Software               | Fixed (in ROM/flash)  | Changeable (install apps) |
| User interface         | Minimal or none       | Full GUI                  |
| Processing power       | Limited               | High                      |
| Real-time requirements | Often required        | Not required              |

### Embedded Systems (HL)

An embedded system is a computer system built into a larger device, designed to perform a specific
function.

**Examples:** Washing machines, microwaves, car engine management, traffic lights, pacemakers,
smart thermostats.

**Characteristics of embedded systems:**

- Purpose-built for a single task
- Often use ROM to store the program (does not change)
- Limited processing power
- May have no user interface or a simple one
- Reliable and designed to run continuously
- Operate in real-time (must respond within strict time constraints)

| Feature                | Embedded System       | General-Purpose Computer  |
| ---------------------- | --------------------- | ------------------------- |
| Purpose                | Single, specific task | Multiple tasks            |
| Software               | Fixed (in ROM/flash)  | Changeable (install apps) |
| User interface         | Minimal or none       | Full GUI                  |
| Processing power       | Limited               | High                      |
| Real-time requirements | Often required        | Not required              |

**Worked Example (HL).** A traffic light controller is an embedded system. It runs a fixed program
stored in ROM that cycles through red, amber, and green at set intervals. It has no screen or
keyboard -- its only output is the lights themselves. It must respond within strict time limits
(real-time) for safety.

### The Systems Life Cycle (OL/HL)

**Stages:**

1. **Analysis:** Understanding the problem; identifying requirements; consulting stakeholders.
2. **Design:** Planning the solution; designing data structures, user interface, and program
   structure.
3. **Implementation:** Writing the code; creating the database; building the system.
4. **Testing:** Checking that the system works correctly and meets the requirements.
5. **Evaluation:** Reviewing the system against the original requirements; identifying improvements.
6. **Maintenance:** Fixing bugs and making improvements after deployment.

**Types of testing:**

| Type                | Description                                               |
| ------------------- | --------------------------------------------------------- |
| Unit testing        | Testing individual components in isolation                |
| Integration testing | Testing that components work together correctly           |
| System testing      | Testing the entire system as a whole                      |
| Acceptance testing  | Customer tests the system to ensure it meets requirements |
| Alpha testing       | Testing by the development team                           |
| Beta testing        | Testing by a group of real users                          |

**Black-box vs white-box testing:**

- **Black-box:** Testing based on inputs and expected outputs without knowledge of internal code.
- **White-box:** Testing based on knowledge of the internal structure.

**Boundary value analysis (HL).** Most bugs occur at boundaries. If a function accepts ages 0-120,
test -1, 0, 1, 119, 120, 121 rather than random values in the middle of the range.

**Worked Example (HL).** A function validates that a percentage is between 0 and 100 inclusive. Using
boundary value analysis, the test cases should include: -1, 0, 1, 99, 100, 101. The values 0 and 100
are the boundaries where off-by-one errors are most likely.

### Data Representation (OL/HL)

#### Representing Text

**ASCII:** 7-bit code, 128 characters (0-127). Includes uppercase and lowercase letters, digits,
punctuation, and control characters.

**Unicode:** 16-bit or 32-bit encoding, supports over 149,000 characters across all writing systems.
UTF-8 is variable-length (1-4 bytes), backward-compatible with ASCII.

**Example:** The ASCII code for 'A' is 65 (01000001), and for 'a' is 97 (01100001).

**Worked Example (OL).** What is stored in binary for the word "Cat"?

C = 67 = 01000011, a = 97 = 01100001, t = 116 = 01110100.

"Cat" = 01000011 01100001 01110100 (3 bytes).

#### Representing Images

**Bitmap images:** Grid of pixels, each with a colour value.

**Image file size (bytes) = width $	imes$ height $	imes$ colour depth / 8**

**Example:** $1920 	imes 1080$ image with 24-bit colour:

$$1920 	imes 1080 	imes 24 / 8 = 6220800 	ext{ bytes} pprox 5.93 	ext{ MB}$$

**Vector images:** Mathematical descriptions of shapes. Scale without quality loss.

| Feature        | Bitmap                      | Vector                      |
| -------------- | --------------------------- | --------------------------- |
| Representation | Grid of pixels              | Mathematical descriptions   |
| Scaling        | Loses quality when enlarged | No quality loss at any size |
| File size      | Depends on resolution       | Depends on complexity       |
| Best for       | Photographs                 | Logos, icons, diagrams      |

#### Representing Sound

- **Sample rate:** samples per second (Hz). CD quality: 44,100 Hz.
- **Bit depth:** bits per sample. CD quality: 16-bit.
- **Channels:** mono (1) or stereo (2).

**File size (bits) = sample rate $	imes$ duration $	imes$ bit depth $	imes$ channels**

**Nyquist theorem (HL).** Sample rate must be at least twice the highest frequency to avoid
aliasing.

#### Compression

**Lossless:** No data lost (PNG, FLAC, ZIP). **Lossy:** Some data discarded (JPEG, MP3).

**Run-Length Encoding (RLE):** Replace repeated values with count + value.

Example: AAAAABBCCCC $	o$ 5A2B4C.

**Worked Example (OL).** Compress WWWWWWBBBBWWWWW using RLE.

W6 B4 W5 = 6 runs. Original: 15 bytes. Compressed: 12 bytes.

**When RLE is ineffective.** For ABCDEFGH, RLE produces A1B1C1D1E1F1G1H1 = 16 bytes (larger
than original 8 bytes).

### Secondary Storage

**HDD vs SSD:**

| Metric      | HDD              | SSD             |
| ----------- | ---------------- | --------------- |
| Read speed  | 50-200 MB/s      | 200-550 MB/s    |
| Write speed | 50-150 MB/s      | 200-500 MB/s    |
| Latency     | 5-10 ms          | 0.05-0.1 ms     |
| Cost per GB | Low              | Higher          |
| Durability  | Mechanical parts | No moving parts |

## Common Pitfalls

1. **MAR vs MDR** -- MAR holds the address, MDR holds the data.
2. **PC increments** during the fetch phase, not after execution.
3. **Cache hierarchy** -- L1 is smallest and fastest, L3 is largest and slowest.
4. **Two's complement** -- the most significant bit indicates sign (0 = positive, 1 = negative).
5. **Logic gates** -- NAND and NOR are universal gates.
6. **Forgetting to add 1** after flipping bits in two's complement.
7. **Confusing address bus and data bus** -- address bus is one-way, data bus is two-way.
8. **Confusing RAM and ROM** -- RAM is volatile, ROM is non-volatile.
9. **Confusing DRAM and SRAM** -- DRAM is for main memory and needs refreshing; SRAM is for cache
   and does not.
10. **RLE increasing file size** when data has no repeated values.
11. **Image file size** -- remember to divide by 8 when converting from bits to bytes.
12. **Overflow detection** -- adding two positive numbers should not produce a negative result.

## Practice Questions

### Ordinary Level

1. Describe the components of the CPU and their functions.
2. Explain the fetch-decode-execute cycle.
3. Convert $11010_2$ to decimal and $42_{10}$ to binary.
4. Draw a truth table for an OR gate.
5. Explain the difference between RAM and ROM.
6. Describe two factors that affect CPU performance.
7. Explain what an embedded system is and give two examples.

### Higher Level

1. Explain how cache memory improves CPU performance.
2. A program has $2 \times 10^9$ instructions. The CPU runs at 2.5 GHz with an average CPI of 3.
   Calculate the execution time.
3. Represent $-20$ in 8-bit two's complement and add it to $15$ in two's complement.
4. Design a logic circuit for a half adder and provide the truth table.

5. A CPU has a 16-bit address bus. What is the maximum addressable memory? Give your answer in KB.
6. Convert $\text{FF}_{16}$ to binary and decimal.
7. Simplify the Boolean expression $\overline{A + B \cdot \bar{C}}$ using De Morgan's Laws.
8. Explain the difference between a page fault and thrashing.
9. A computer has a 95% L1 cache hit rate. L1 access is 2 ns, RAM access is 80 ns. Calculate the
   average memory access time.
10. Explain the Von Neumann bottleneck and describe one technique modern CPUs use to mitigate it.
11. A 32-bit data bus transfers 4 bytes per cycle. If the CPU clock speed is 3.5 GHz, calculate
    the maximum data transfer rate in GB/s.
12. Explain the difference between round-robin and priority-based scheduling. Give an advantage and
    disadvantage of each.
13. Compare DRAM and SRAM in terms of speed, cost, and usage. Why is each used in its respective
    role?
14. Add the binary numbers 10110110 and 01101101. Show all working including carries.
15. Draw a truth table for a full adder. Show all eight rows for inputs A, B, and carry-in.
